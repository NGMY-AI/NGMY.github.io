((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,C,D,A5,A6,G,P,H,A7,A8,Q,A9,Aa,Ab,L,R,A_,Ac,T,U,Ad,A0,Ae,V,W,Af,X,A1,A2,Y,A3,Ag,Ah,M,S,A={eVu:function eVu(d,e){this.a=d
this.b=e},a9y:function a9y(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.at=g
_.CW=h
_.a=i
_.$ti=j},ae1:function ae1(d,e){var _=this
_.d=null
_.e=$
_.G9$=d
_.c=_.a=null
_.$ti=e},box:function box(d){this.a=d},aN7:function aN7(){},
o0(d,e,f){var w=d.a,v=d.b,u=d.c
return new A.r(w+(e.a-w)*f,v+(e.b-v)*f,u+(e.c-u)*f)},
vw(d,e){var w=Math.cos(e),v=Math.sin(e),u=d.a,t=d.c
return new A.r(u*w+t*v,d.b,-u*v+t*w)},
o9(d,e,f,g){var w,v,u,t,s,r,q,p,o=new A.fU8(Math.cos(e),Math.sin(e)),n=new A.fU6(f),m=new A.fU7(n,e,o,g),l=new A.fU5(n,e,o),k=C.a([],x.z)
for(w=d.length,v=x.o,u=0;u<d.length;d.length===w||(0,C.M)(d),++u){t=d[u]
s=C.a([],v)
for(r=t.a,q=r.length,p=0;p<r.length;r.length===q||(0,C.M)(r),++p)s.push(m.$1(r[p]))
k.push(new A.lR(s,l.$1(t.b),t.c,t.d,t.e,t.f,t.r,t.w,t.x,t.y,t.z))}return k},
H_(d,e,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
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
l=Math.min(e,n.guR()*0.5)
k=Math.min(e,m.guR()*0.5)
j=n.goT(0)
i=new A.r(q-j.a*l,p-j.b*l,o-j.c*l)
j=m.goT(0)
h=new A.r(q+j.a*k,p+j.b*k,o+j.c*k)
for(g=0;g<=a0;++g){f=g/a0
w.push(A.o0(A.o0(i,s,f),A.o0(s,h,f),f))}}w.push(D.d.gak(d))
return w},
ahU(a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2
if(a3.length<3)return a3
w=C.a([],x.o)
for(v=0;u=v+1,t=a3.length,u<t;v=u){s=v===0?a3[v]:a3[v-1]
r=a3[v]
q=a3[u]
p=v+2
o=p<t?a3[p]:q
for(t=s.a,p=r.a,n=q.a,m=o.a,l=s.b,k=r.b,j=q.b,i=o.b,h=s.c,g=r.c,f=q.c,e=o.c,d=0;d<a4;++d){a0=d/a4
a1=a0*a0
a2=new A.fTV(a0,a1,a1*a0)
w.push(new A.r(a2.$4(t,p,n,m),a2.$4(l,k,j,i),a2.$4(h,g,f,e)))}}w.push(D.d.gak(a3))
return w},
hzy(){if($.h8E)return
$.h8E=!0
C.az().bM(new A.bIA(),x.P).eW(new A.bIB())},
h8F(){C.az().bM(new A.bIC(),x.P).eW(new A.bID())},
hUp(d){var w,v,u,t,s,r,q,p,o,n
for(w=d.length,v=!0,u=!0,t=0;t<w;++t)if(d[t].c>=0.5)u=!1
else v=!1
if(v)return d
if(u)return B.rC
s=C.a([],x.o)
for(r=0;w=d.length,r<w;){q=d[r];++r
p=d[r%w]
w=q.c
o=w>=0.5
n=p.c
if(o)s.push(q)
if(o!==n>=0.5)s.push(A.o0(q,p,(0.5-w)/(n-w)))}return s},
h2y(a2,a3,a4){var w,v,u,t,s,r,q,p=J.a5(a2),o=p.h(a2,0).a,n=p.h(a2,0).b,m=p.h(a2,1).a,l=p.h(a2,1).b,k=p.h(a2,2).a,j=p.h(a2,2).b,i=p.h(a2,3).a,h=p.h(a2,3).b,g=m-k,f=i-k,e=o-m+k-i,d=l-j,a0=h-j,a1=n-l+j-h
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
hVg(d,e,f,g){var w,v=e.d,u=e.e,t=A.h2y(f,v,u)
if(t==null)return
w=d.a
J.bl(w.save())
d.av(0,t.a)
w.clipRect(C.bF(new C.a3(0,0,v,0+u)),$.mr()[1],!0)
e.c.$3(d,new C.au(v,u),g)
w.restore()},
hVh(d,e,f,g,h,i){var w,v,u,t,s,r,q,p,o,n,m,l,k=e.d,j=e.e
$.S()
w=new C.oW()
e.c.$3(C.z4(w,null),new C.au(k,j),i)
v=w.nd()
u=k/g
t=j/h
for(s=f.length,r=d.a,q=0+u,p=0+t,o=0;o<f.length;f.length===s||(0,C.M)(f),++o){n=f[o]
m=A.h2y(n.c,u,t)
if(m==null)continue
J.bl(r.save())
l=m.a
r.concat(C.fU0(C.H3(l)))
r.clipRect(C.bF(new C.a3(0,0,q,p)),$.mr()[1],!0)
r.translate(-n.a*u,-n.b*t)
n=v.b
n===$&&C.c()
n=n.a
n===$&&C.c()
n=n.a
n.toString
r.drawPicture(n)
r.restore()}v.q()},
h_j(d,e,f,g,h,i,j,k,l,m){return new A.av6(l,e,h,k,i,f,g,d,m,j,null)},
r:function r(d,e,f){this.a=d
this.b=e
this.c=f},
lR:function lR(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
fM:function fM(d,e,f,g,h,i,j,k,l){var _=this
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
bZO:function bZO(d,e){this.a=d
this.b=e},
bZP:function bZP(d){this.a=d},
bZN:function bZN(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
bZQ:function bZQ(d,e,f){this.a=d
this.b=e
this.c=f},
bZM:function bZM(d,e){this.a=d
this.b=e},
bZR:function bZR(d,e,f){this.a=d
this.b=e
this.c=f},
fU8:function fU8(d,e){this.a=d
this.b=e},
fU6:function fU6(d){this.a=d},
fU7:function fU7(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fU5:function fU5(d,e,f){this.a=d
this.b=e
this.c=f},
fTV:function fTV(d,e,f){this.a=d
this.b=e
this.c=f},
xa:function xa(d,e,f,g,h){var _=this
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
_.bw$=_.bJ$=0},
bIA:function bIA(){},
bIB:function bIB(){},
bIC:function bIC(){},
bID:function bID(){},
bIF:function bIF(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bIE:function bIE(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bIz:function bIz(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bIy:function bIy(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bTM:function bTM(d){this.a=d},
b5M:function b5M(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
crN:function crN(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
crO:function crO(d,e){this.a=d
this.b=e},
crG:function crG(){},
crH:function crH(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
crF:function crF(d){this.a=d},
crI:function crI(){},
crJ:function crJ(d,e,f){this.a=d
this.b=e
this.c=f},
crK:function crK(){},
crM:function crM(d,e){this.a=d
this.b=e},
crL:function crL(d){this.a=d},
cBz:function cBz(d,e){this.a=d
this.b=e},
Au:function Au(d,e,f,g,h,i,j,k,l){var _=this
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
av6:function av6(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
br6:function br6(d,e,f,g,h,i){var _=this
_.d=$
_.e=d
_.f=e
_.r=f
_.w=1
_.x=0
_.y=g
_.bz$=h
_.a9$=i
_.c=_.a=null},
eYY:function eYY(d){this.a=d},
eYX:function eYX(d){this.a=d},
eYU:function eYU(d){this.a=d},
eYV:function eYV(d){this.a=d},
eYW:function eYW(d){this.a=d},
eYS:function eYS(d){this.a=d},
eYT:function eYT(d,e){this.a=d
this.b=e},
aNg:function aNg(){},
fWS(d){var w,v,u=$.fWR.h(0,d)
if(u!=null)return C.f8(u,x.c)
w=B.a5m.h(0,d)
if(w==null)return C.f8(null,x.c)
v=$.fWQ.h(0,d)
if(v==null){v=new A.bSH(w,d).$0()
$.fWQ.n(0,d,v)}return v},
aVy(d){var w=0,v=C.j(x.H),u
var $async$aVy=C.e(function(e,f){if(e===1)return C.f(f,v)
for(;;)switch(w){case 0:w=2
return C.b(A.fWS(d),$async$aVy)
case 2:u=J.aV(B.a5m.geu(B.a5m))
case 3:if(!u.C()){w=4
break}w=5
return C.b(A.fWS(u.gR(u)),$async$aVy)
case 5:w=3
break
case 4:return C.h(null,v)}})
return C.i($async$aVy,v)},
hCE(d){var w,v,u=new Float64Array(d*16)
for(w=0;w<d;++w){v=w*16
u[v+15]=1
u[v+10]=1
u[v+5]=1
u[v]=1}return u},
had(d,e,f){var w,v,u,t
if(d>e){w=d
v=e}else{w=e
v=d}if(w>f){u=w
w=f}else u=f
if(v>w){t=w
w=v
v=t}return(v*65536+w)*65536+u},
hCF(d,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=d.c,g=d.b===1,f=g?4:3,e=h.length
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
hae(d,a0,a1,a2,a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
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
i22(d,e){var w=D.o.aD(d,16)&255,v=D.o.aD(d,8)&255,u=d&255,t=0.35+(0.299*w+0.587*v+0.114*u)/255,s=new A.fsp()
return C.a_(255,s.$2(w,e.gb2(e)*255*t),s.$2(v,e.gbc()*255*t),s.$2(u,e.gb9(e)*255*t))},
bbq:function bbq(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
bbL:function bbL(d,e){this.b=d
this.c=e},
bgQ:function bgQ(d,e,f){this.a=d
this.b=e
this.c=f},
dnc:function dnc(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=$},
Mv:function Mv(d,e,f,g,h){var _=this
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
bSH:function bSH(d,e){this.a=d
this.b=e},
bSz:function bSz(){},
bSw:function bSw(d,e){this.a=d
this.b=e},
bSv:function bSv(){},
bSB:function bSB(d,e,f){this.a=d
this.b=e
this.c=f},
bSC:function bSC(d){this.a=d},
bSD:function bSD(d){this.a=d},
bSA:function bSA(d,e){this.a=d
this.b=e},
bSx:function bSx(d){this.a=d},
bSy:function bSy(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
bSG:function bSG(d){this.a=d},
bSE:function bSE(){},
bSF:function bSF(d){this.a=d},
bSI:function bSI(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
fsp:function fsp(){},
dsK:function dsK(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
dho:function dho(d,e){this.a=d
this.b=e},
hze(){var w,v=J.e4(6,x.ff)
for(w=0;w<6;++w)v[w]=new A.aSp()
return new A.bGT(v)},
afH(d){return A.hUQ(d)},
hUQ(d){var w=0,v=C.j(x.eT),u,t=2,s=[],r,q,p,o,n
var $async$afH=C.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:if(d==null){u=null
w=1
break}t=4
w=7
return C.b(C.fxt(d,null),$async$afH)
case 7:r=f
n=J
w=8
return C.b(r.lK(),$async$afH)
case 8:q=n.a3_(f)
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
return C.i($async$afH,v)},
hsL(a5,a6,a7,a8,a9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
if(a8.a){w=a7/8
if(a9===0){v=D.k.bj(w)
A.nd(a5,a6,a7,D.o.F(v,2)===0?0:1+D.o.ao(v,2))}else A.nd(a5,a6,a7,a9+1+D.k.bj(w))
return}u=B.a4R[a8.e]
w=a6.a
t=a6.b
s=0+t
r=new C.a3(0,0,0+w,s)
$.S()
q=C.I()
q.sam(new C.a9(D.a4,D.a8,D.x,C.a([u.b,u.c],x.O),null,null).aB(0,r))
a5.aO(r,q)
q=t*0.04
p=r.cq(-q)
o=C.I()
o.b=D.a9
o.c=t*0.025
n=u.e
o.r=n.gp(0)
a5.aO(p,o)
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
J.bl(j.save())
o=t*0.05
j.clipRRect(C.ek(C.bs(k,new C.aQ(o,o))),$.nx(),!0)
o=C.I()
o.Q=D.cf
a5.ow(l,g,k,o)
j.restore()
f=p+m*0.8}else f=m
e=a8.w
if(e==null)e=$.W1
p=t*0.3
o=f+p
p=m+p
d=new C.a3(f,m,o,p)
j=d.gbK()
o-=f
i=C.I()
i.r=B.EV.gp(0)
a5.ad(j,o/2,i)
if(e!=null){j=e.c
i=e.d
v=Math.min(o*0.8/j,(p-m)*0.8/i)
o=C.bJ(d.gbK(),i*v,j*v)
h=C.I()
h.Q=D.cf
a5.ow(e,new C.a3(0,0,j,i),o,h)}o=new A.fL6()
a0=w-f-m
j=u.d
a1=o.$4(a8.b,t*0.17,j,a0)
a1.a1(a5,new C.t(f,p+q))
a2=o.$5$w(a8.c,t*0.09,n,a0,D.P)
n=a1.b.a.c
a2.a1(a5,new C.t(f,p+t*0.06+n.gbb(n)))
a3=o.$6$lines$w(a8.d,t*0.08,j.j(0.85),a0,1,D.H)
j=a3.b
o=j.c
j=j.a.c
a3.a1(a5,new C.t(w-m-o,t-m-j.gbb(j)))
a4=(D.k.F(a7*0.35,1.6)-0.3)*w
j=a5.a
J.bl(j.save())
j.clipRect(C.bF(r),$.mr()[1],!0)
t=C.I()
t.r=D.c.j(0.1).gp(0)
a5.aO(new C.a3(a4,0,a4+w*0.1,s),t)
j.restore()},
i3l(d,e){var w,v,u,t,s=d.w
if(s.length===0){s=d.e
w=d.r
return new C.cw([-s/2,s/2,w+d.f,w])}v=s[e]
s=v.e
u=d.e*s
t=d.r+v.d
return new C.cw([-u/2,u/2,t+d.f*s,t])},
bAG(d,e,f,g){var w,v,u,t,s,r,q,p,o=new C.a3(0,0,0+e.a,0+e.b)
$.S()
w=C.I()
w.r=B.bhh.gp(0)
d.aO(o,w)
v=o.cq(-(e.gdC()*0.06))
w=d.a
J.bl(w.save())
w.clipRect(C.bF(v),$.mr()[1],!0)
u=v.a
t=v.b
w.translate(u,t)
u=v.c-u
t=v.d-t
if((g&1)===0){s=0+u
r=0+t
q=C.I()
q.sam(B.c44.aB(0,new C.a3(0,0,s,r)))
d.aO(new C.a3(0,0,s,r),q)
p=t*0.82
J.bl(w.save())
w.translate((u-p)/2,(t-p)/2)
A.hsQ(d,new C.au(p,p),f)
w.restore()}else A.nd(d,new C.au(u,t),f,g)
w.restore()},
hZq(d,e,f){var w,v,u,t,s=e.a,r=e.b
$.S()
w=C.I()
w.r=B.bpB.gp(0)
d.aO(new C.a3(0,0,0+s,0+r),w)
v=C.I()
v.r=K.agF.gp(0)
w=s*0.12
u=r*0.07
t=w+s*0.76
d.aO(new C.a3(w,u,t,u+r*0.38),v)
u=r*0.52
d.aO(new C.a3(w,u,t,u+r*0.4),v)
u=C.I()
u.r=F.fw.gp(0)
d.ad(new C.t(s*0.82,r*0.5),s*0.05,u)},
h3e(d9,e0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6=x.z,d7=C.a([],d6),d8=new A.fk(d7)
d8.f=0
d8.GB(B.h8c,B.fYR,B.fYQ,B.h8b,B.bje,B.e8)
d8.f=1
d8.GB(B.h2D,B.h0v,B.h9H,B.h2a,B.M8,B.e8)
for(w=-2100;w<2100;w+=90){v=w+45
d8.GB(new A.r(w,0.8,637),new A.r(v,0.8,637),new A.r(v,0.8,643),new A.r(w,0.8,643),K.LN,B.e8)}d8.f=2
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
case"screen":n=D.au
o=6
break
case"roof":n=D.aw
break
case"gate":n=D.d6
break
case"duo":n=D.b9
break
case"line3":n=D.bj
break
case"far3":n=D.aD
break
case"skyline":n=D.bv
break
case"lines6":n=D.aP
break
case"scatter":n=D.b9
break
default:n=F.fw}m=p==="roof"
l=m?3:2
k=q?720:900
j=k*t/u
i=C.a([],x.a)
r=q?r:1
for(h=e0.b,g=x.o,f=-o,e=f-0.8,d=p==="highway",a0=f/2,f=p!=="neon",a1=a0-0.2,a2=p==="screen",a3=s-16,a4=(14+s-7)/2,a5=s-21,a6=s-7,a7=0;a7<r;++a7){a8=q?v[a7]:B.abT
a9=a8.e
b0=u*a9
b1=t*a9
b2=new A.ftO(a8)
b3=C.a([],d6)
b4=new A.fk(b3)
b4.f=l
b5=C.a([],d6)
b6=new A.fk(b5)
b6.f=l
b7=A.i3l(d9,a7).a
b8=b7[0]
b9=b7[1]
c0=b7[2]
c1=b7[3]
c2=(b8+b9)/2
c3=(c0+c1)/2
b7=b2.$1(new A.r(c2,c3,a1))
c4=!f||a2?D.au:D.cm
c5=a8.c
b4.wm(b7,new A.r(b0+16,b1+16,o),c4,0.2,c5)
c6=7*Math.max(1,a9*0.8)
c4=b0+14
b6.wm(b2.$1(new A.r(c2,c0+3,3)),new A.r(c4,c6,8),n,0.4,c5)
b6.wm(b2.$1(new A.r(c2,c1-3,3)),new A.r(c4,c6,8),n,0.4,c5)
b7=b1+14
b6.wm(b2.$1(new A.r(b8-3,c3,3)),new A.r(c6,b7,8),n,0.4,c5)
b6.wm(b2.$1(new A.r(b9+3,c3,3)),new A.r(c6,b7,8),n,0.4,c5)
D.d.v(d7,b3)
D.d.v(d7,b5)
b5=C.a([],d6)
c7=new A.fk(b5)
c8=Math.max(6,b0*0.018)
c9=new A.ftP(i,l)
switch(q?"sep":p){case"tower":c7.dM(new A.r(0,0,a0),new A.r(0,a6,a0),c8*1.9,D.hf,12)
c7.dM(new A.r(0,0,a0),new A.r(0,14,a0),c8*2.8,D.au,12)
break
case"screen":c7.aP(new A.r(0,7,-10),new A.r(b0*0.6,14,70),D.au)
c7.aP(new A.r(0,a4,a0),new A.r(60,a5,14),D.hf)
break
case"roof":c7.n7(B.fUL,B.h_M,B.bfk,0.1,4)
c7.n7(B.fVp,B.h_S,D.dv,0.15,4)
c7.hn(B.fV4,B.h_R,D.dv,4)
c7.n7(B.h8q,B.fY0,B.bgz,0.1,2)
c7.hn(B.h8p,B.fYc,D.dv,2)
c7.aP(B.fYn,B.fZG,B.nQ)
c7.aP(B.fUA,B.fWL,D.ej)
c9.$6$px(B.h6w,0,210,126,new A.ftH(),360)
c9.$6$px(B.h7v,0,210,126,new A.ftI(),360)
c9.$6$px(B.h3m,0,72,116,A.icB(),140)
c9.$6$px(B.haR,0,130,80,new A.ftJ(),300)
for(d0=0;d0<3;++d0){d1=-60-d0*90
c9.$6$px(new A.r(310.8,140,d1),1.5707963267948966,80,64,new A.ftK(d0),240)
c9.$6$px(new A.r(310.8,55,d1),1.5707963267948966,60,60,A.h5F(),200)}for(d0=0;d0<2;++d0){d1=-65-d0*110
c9.$6$px(new A.r(-490.8,95,d1),-1.5707963267948966,90,60,new A.ftL(d0),240)
c9.$6$px(new A.r(-490.8,40,d1),-1.5707963267948966,50,50,A.h5F(),180)}c9.$6$px(new A.r(0,100,-285.8),3.141592653589793,580,170,A.hsC(),900)
break
case"gate":for(b3=b0/2+25,b7=s+b1,c4=b7+26,c5=c8*1.6,d2=0;d2<2;++d2){d3=F.je[d2]*b3
c7.dM(new A.r(d3,0,a0),new A.r(d3,c4,a0),c5,D.hf,12)}c7.aY(new A.r(0,b7+17,a0),new A.r(b0+80,18,22),D.hf,0.2)
break
default:for(b3=s+a8.d-7,d2=0;d2<2;++d2){b7=F.je[d2]*b0*0.3
c7.dM(b2.$1(new A.r(b7,0,a0)),b2.$1(new A.r(b7,b3,a0)),c8,D.hf,10)}if(d)c7.aP(new A.r(0,a3,14),new A.r(c4,3,24),D.hf)}D.d.v(d7,b5)
d4=h[a7]
i.push(new A.fM(C.a([b2.$1(new A.r(b8,c0,0.8)),b2.$1(new A.r(b9,c0,0.8)),b2.$1(new A.r(b9,c1,0.8)),b2.$1(new A.r(b8,c1,0.8))],g),0,new A.ftM(d4,a7),k,j,60,l,0,!1))
i.push(new A.fM(C.a([b2.$1(new A.r(b9,c0,e)),b2.$1(new A.r(b8,c0,e)),b2.$1(new A.r(b8,c1,e)),b2.$1(new A.r(b9,c1,e))],g),0,new A.ftN(d4,a7),k,j,60,l,0,!1))}d6=C.a([],d6)
d5=new A.fk(d6)
for(d2=0;d2<9;++d2){v=B.d0f[d2]
w=v.a
d1=v.b
if(m&&d1>200)continue
d5.dM(new A.r(w,0,d1),new A.r(w,55,d1),7,B.q0,6)
d5.fo(new A.r(w,98,d1),46,E.Xa,3,6)}for(d2=0;d2<6;++d2){w=B.dpK[d2]
d5.dM(new A.r(w,0,580),new A.r(w,90,580),3,D.hf,5)
d5.fo(new A.r(w,95,580),8,B.o1,3,6)}D.d.v(d7,d6)
return new A.tM(d7,B.RW,B.zk,i,null,6000)},
hl7(d){return d*d*(3-2*d)},
fg7(d,e,f,g,h){var w=new A.fg8(h)
return new A.r(w.$4(d.a,e.a,f.a,g.a),w.$4(d.b,e.b,f.b,g.b),w.$4(d.c,e.c,f.c,g.c))},
hm2(d,e,f){var w,v,u,t,s,r,q,p,o,n,m=D.k.E(e,0,30)
if(f==null){w=C.a([],x.n)
for(v=J.a5(d),u=0;u<v.gL(d);++u)w.push(30*u/(v.gL(d)-1))
t=w}else t=f
w=J.a5(d)
v=J.a5(t)
s=0
for(;;){r=s+2
if(!(r<w.gL(d)&&v.h(t,s+1)<=m))break;++s}w=s+1
q=A.hl7(D.k.E((m-v.h(t,s))/(v.h(t,w)-v.h(t,s)),0,1))
v=new A.fjw(d)
p=s-1
o=A.fg7(v.$1(p).a,v.$1(s).a,v.$1(w).a,v.$1(r).a,q)
n=A.fg7(v.$1(p).b,v.$1(s).b,v.$1(w).b,v.$1(r).b,q)
r=Math.sin(m*1.3)
v=Math.sin(m*1.9)
w=Math.cos(m*1.1)
return new C.z(new A.r(o.a+r*3,Math.max(o.b+v*2.5,18),o.c+w*3),n)},
i2a(d){return $.i29.c3(0,d.a,new A.fsv(d))},
hou(d){return $.i2b.c3(0,d.a,new A.fss(d))},
i3k(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=d.a
if(i==="scatter")return A.hm2(B.ddV,e,null)
if(d.w.length!==0)return A.hm2(A.hou(d),e,A.i2a(d))
w=B.dvx.h(0,i)
if(w==null)w=B.aOf
v=B.cu7[w.a]
u=w.b?-1:1
t=new A.r(d.ga4f(0),d.r+d.gGN()/2,d.ga4g())
s=new A.ftz(t,u,d)
r=new A.ftA(t,u,d)
q=D.k.E(e,0,30)
i=v.length
p=0
for(;;){o=p+2
if(!(o<i&&v[p+1].a<=q))break;++p}i=v[p].a
n=p+1
m=A.hl7(D.k.E((q-i)/(v[n].a-i),0,1))
i=new A.ftB(v)
l=p-1
k=A.fg7(s.$1(i.$1(l)),s.$1(i.$1(p)),s.$1(i.$1(n)),s.$1(i.$1(o)),m)
j=A.fg7(r.$1(i.$1(l)),r.$1(i.$1(p)),r.$1(i.$1(n)),r.$1(i.$1(o)),m)
return new C.z(new A.r(k.a,Math.max(k.b,18),k.c),j)},
lC:function lC(d,e,f,g,h){var _=this
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
bGV:function bGV(d){this.a=d},
Hj:function Hj(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
aSp:function aSp(){var _=this
_.a=!0
_.b="NEW GLOBAL MOVEMENT FOR YOUTH"
_.c="Videos, slides, blogs and books."
_.d="ngmy.org"
_.e=0
_.x=_.w=_.r=_.f=null},
bGT:function bGT(d){this.a="highway"
this.b=d},
bGU:function bGU(d){this.a=d},
fL6:function fL6(){},
ftO:function ftO(d){this.a=d},
ftP:function ftP(d,e){this.a=d
this.b=e},
ftQ:function ftQ(d,e){this.a=d
this.b=e},
ftH:function ftH(){},
ftI:function ftI(){},
ftJ:function ftJ(){},
ftK:function ftK(d){this.a=d},
ftL:function ftL(d){this.a=d},
ftM:function ftM(d,e){this.a=d
this.b=e},
ftN:function ftN(d,e){this.a=d
this.b=e},
hn:function hn(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
fg8:function fg8(d){this.a=d},
fjw:function fjw(d){this.a=d},
fsv:function fsv(d){this.a=d},
fsu:function fsu(){},
fss:function fss(d){this.a=d},
fst:function fst(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
ftz:function ftz(d,e,f){this.a=d
this.b=e
this.c=f},
ftA:function ftA(d,e,f){this.a=d
this.b=e
this.c=f},
ftB:function ftB(d){this.a=d},
aor:function aor(d){this.a=d},
aos:function aos(d,e){var _=this
_.d=d
_.r=_.f=_.e=$
_.w=e
_.x=-1
_.y=!1
_.z=""
_.c=_.a=null},
c2O:function c2O(d){this.a=d},
c2M:function c2M(d){this.a=d},
c2L:function c2L(){},
c2z:function c2z(d){this.a=d},
c2F:function c2F(d,e){this.a=d
this.b=e},
c2N:function c2N(d){this.a=d},
c2C:function c2C(d,e){this.a=d
this.b=e},
c2B:function c2B(d){this.a=d},
c29:function c29(){},
c2A:function c2A(d){this.a=d},
c2E:function c2E(d){this.a=d},
c2D:function c2D(d,e,f){this.a=d
this.b=e
this.c=f},
c2y:function c2y(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
c2x:function c2x(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
c2u:function c2u(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
c2v:function c2v(d,e){this.a=d
this.b=e},
c2p:function c2p(d,e,f){this.a=d
this.b=e
this.c=f},
c2w:function c2w(d){this.a=d},
c2s:function c2s(d,e){this.a=d
this.b=e},
c2r:function c2r(){},
c2t:function c2t(d,e){this.a=d
this.b=e},
c2q:function c2q(){},
c2e:function c2e(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
c2d:function c2d(){},
c2f:function c2f(d){this.a=d},
c2g:function c2g(d){this.a=d},
c2h:function c2h(d){this.a=d},
c2i:function c2i(d,e){this.a=d
this.b=e},
c2j:function c2j(d,e,f){this.a=d
this.b=e
this.c=f},
c2k:function c2k(d,e){this.a=d
this.b=e},
c2l:function c2l(d,e,f){this.a=d
this.b=e
this.c=f},
c2m:function c2m(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
c2c:function c2c(){},
c2n:function c2n(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
c2a:function c2a(){},
c2b:function c2b(){},
c2o:function c2o(d){this.a=d},
c2I:function c2I(d){this.a=d},
c2J:function c2J(d){this.a=d},
c2H:function c2H(d){this.a=d},
c2K:function c2K(d){this.a=d},
c2G:function c2G(d){this.a=d},
h33(d,e,f,g){var w,v,u,t=null,s=e.r
s=s==null?t:D.k.V(s)
w=D.k.V(f)
v=e.b
v=v==null?t:v.l()
u=d+"|"+C.w(s)+"|"+w+"|"+C.w(v)
v=$.hoq.h(0,u)
if(v==null){s=C.fu(t,t,g,t,C.cS(t,t,t,t,t,t,t,t,t,e,d),D.a3,D.bZ,t,D.dA,D.bW)
s.nX(f)
$.hoq.n(0,u,s)}else s=v
return s},
nd(a5,a6,a7,a8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=null,a4=D.o.F(a8,17)
if(a4===0){A.fLd(a5,a6,a7,0)
w=a6.a
v=(D.k.F(a7*0.35,1.6)-0.3)*w
u=a5.a
J.bl(u.save())
t=0+a6.b
u.clipRect(C.bF(new C.a3(0,0,0+w,t)),$.mr()[1],!0)
$.S()
s=C.I()
s.r=D.c.j(0.12).gp(0)
a5.aO(new C.a3(v,0,v+w*0.12,t),s)
u.restore()
return}if(a4>=8){I.RO(a5,a6,a4-8,a7)
return}r=B.cVo[a4-1]
w=a6.a
u=a6.b
q=new C.a3(0,0,0+w,0+u)
t=$.S()
s=C.I()
s.sam(new C.a9(D.az,D.aE,D.x,C.a([r.c,r.d],x.O),a3,a3).aB(0,q))
a5.aO(q,s)
s=a5.a
J.bl(s.save())
s.clipRect(C.bF(q),$.mr()[1],!0)
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
h.push(new C.br())
e=p.G()
h=g.gbx().a.snapshot()
s.drawPath((g.e=new C.cj(h)).a,e)
e.delete()}t=Math.sin(a7*2)
n=C.I()
m=r.e
n.r=m.j(0.18).gp(0)
a5.ad(new C.t(w*0.88,u*0.3),u*(0.22+0.03*t),n)
s.restore()
s=w*0.06
A.h33(r.a,C.l(a3,a3,D.c,a3,a3,a3,a3,a3,a3,a3,a3,u*0.22,a3,a3,D.u,a3,a3,!0,a3,u*0.012,a3,a3,a3,a3,a3,a3),w*0.9,1).a1(a5,new C.t(s,u*0.2))
A.h33(r.b,C.l(a3,a3,m,a3,a3,a3,a3,a3,a3,a3,a3,u*0.1,a3,a3,D.P,a3,a3,!0,a3,a3,a3,a3,a3,a3,a3,a3),w*0.8,2).a1(a5,new C.t(s,u*0.5))
d=$.W1
m=u*0.76
if(d!=null){t=d.c
n=d.d
a0=Math.min((s+o-s)/t,(m+u*0.16-m)/n)
o=C.I()
o.Q=D.cf
a5.ow(d,new C.a3(0,0,t,n),new C.a3(s,m,s+t*a0,m+n*a0),o)}else{a1=C.fu(a3,a3,a3,a3,C.cS(a3,a3,a3,a3,a3,a3,a3,a3,a3,C.l(a3,a3,D.c,a3,a3,a3,a3,a3,a3,a3,a3,u*0.12,a3,a3,D.u,a3,a3,!0,a3,a3,a3,a3,a3,a3,a3,a3),"NGMY"),D.a3,D.bZ,a3,D.dA,D.bW)
a1.ej()
a1.a1(a5,new C.t(s,m))}a2=A.h33("ngmy.org",C.l(a3,a3,D.ae,a3,a3,a3,a3,a3,a3,a3,a3,u*0.08,a3,a3,D.H,a3,a3,!0,a3,a3,a3,a3,a3,a3,a3,a3),400,1)
a2.a1(a5,new C.t(w-a2.b.c-w*0.05,u*0.82))},
FP:function FP(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
L3(d){return D.d.dN(B.QR,new A.fw4(d),new A.fw5())},
yI(d){var w=B.hw.h(0,d.b),v=d.e*3.141592653589793/2,u=w.d/2+30
return new C.z(d.c+Math.sin(v)*u,d.d+Math.cos(v)*u)},
hAI(d){var w=C.a([],x.C),v=C.a([],x.fW),u=new C.e9()
u.d3(7)
w=new A.bLf(d,u,w,v)
w.byz(d,7)
return w},
z8:function z8(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fw4:function fw4(d){this.a=d},
fw5:function fw5(){},
xf:function xf(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=null
_.w=_.r=!1
_.x=0},
aTy:function aTy(d,e,f,g,h,i,j){var _=this
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
a49:function a49(d,e,f,g,h,i,j,k){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.w=j
_.x=k},
ak6:function ak6(d,e,f){this.a=d
this.b=e
this.c=f},
bLf:function bLf(d,e,f,g){var _=this
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
bLh:function bLh(d){this.a=d},
bLj:function bLj(d,e){this.a=d
this.b=e},
bLk:function bLk(){},
bLg:function bLg(d,e){this.a=d
this.b=e},
bLl:function bLl(){},
bLi:function bLi(d,e,f){this.a=d
this.b=e
this.c=f},
h8K(d){var w=d.x
return C.bv(w.length,D.d.cI(w,0,new A.bJm()),D.h,D.h,D.h,D.h,D.h,D.h,D.h,D.h,D.h,D.h,D.h,D.h,D.h,D.h,D.h,D.h,D.h,D.h)},
idN(d){var w,v,u
for(w=0,v=0;u=v+1,u<d.length;v=u)w+=Math.sqrt(Math.pow(d[u].a-d[v].a,2)+Math.pow(d[u].b-d[v].b,2))
return w},
idT(d,e){var w,v,u,t,s,r,q,p,o
for(w=e,v=0;u=v+1,u<d.length;v=u){t=d[u]
s=d[v]
r=t.a-s.a
q=t.b-s.b
p=Math.sqrt(r*r+q*q)
if(p<0.000001)continue
if(w<=p||v+2===d.length){o=D.k.E(w/p,0,1)
t=d[v]
return new C.bj(t.a+r*o,t.b+q*o,Math.atan2(r,q))}w-=p}return new C.bj(D.d.gak(d).a,D.d.gak(d).b,0)},
bJl:function bJl(d){var _=this
_.a=d
_.e=_.d=_.c=_.b=$
_.f=-1},
bJm:function bJm(){},
dhR:function dhR(d,e){this.a=d
this.b=e},
fXo(d,e,f){return new A.aYb(f,d,e,null)},
h3z(d){return D.k.dg((1-D.k.E(d,0,1))*12)},
aSV:function aSV(d){var _=this
_.b=_.a=1
_.d=_.c=0
_.e=1
_.f=!1
_.r=0
_.w=!1
_.P$=0
_.S$=d
_.bw$=_.bJ$=0},
aYb:function aYb(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
Uo:function Uo(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
c0p:function c0p(d){this.a=d},
rK:function rK(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
fkz(d){var w=d.d-d.b-200
return new C.bpD([157.07963267948966,2*w+380+628.3185307179587,w,190])},
L8(d,e){var w,v=A.fkz(d).a,u=v[2],t=v[3],s=v[0]
v=v[1]
w=D.k.F(e,v)
if(w<0)w+=v
v=new A.fzn()
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
fW1(d,e,f){return new A.aSU(d,e,f)},
h3Q(d,e){var w=D.k.F(e+d.c,28)
if(w<12)return 0
if(w<15)return 1
return 2},
hjP(d,e,f,g){var w=x.n
w=new A.bwl(d,e,f,g,C.a([],w),C.a([],w))
w.bzF(d,e,f,g)
return w},
hzQ(){var w,v=C.a([],x.n)
for(w=0;w<4;++w)v.push(B.kk[w].r)
return new A.bJn(v,C.c2(4,0,!1,x.i),B.aze)},
i0I(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k=C.a([],x.z)
for(w=d.length,v=e.a,u=e.b,t=e.c,s=x.o,r=0;r<d.length;d.length===w||(0,C.M)(d),++r){q=d[r]
p=C.a([],s)
for(o=q.a,n=o.length,m=0;m<o.length;o.length===n||(0,C.M)(o),++m){l=o[m]
p.push(new A.r(l.a*v,l.b*u,l.c*t))}k.push(new A.lR(p,q.b,q.c,q.d,q.e,q.f,q.r,q.w,q.x,q.y,q.z))}return k},
hTN(){var w,v,u,t,s=new A.fk(C.a([],x.z))
s.r=!0
s.aY(B.fUZ,B.fXl,D.d6,0.3)
s.aY(B.h8B,B.fXb,D.bN,0.2)
s.aY(B.aaf,B.fX9,B.hU,0.6)
s.aY(B.h3C,B.fXR,B.hU,0.6)
s.aP(B.h2I,B.fXn,D.bG)
for(w=0;w<2;++w)s.aP(new A.r(75.5,9,B.a4A[w]),B.aak,B.o1)
for(w=0;w<2;++w){v=B.dkk[w]
for(u=0;u<2;++u){t=B.dkb[u]
s.dM(new A.r(v,7,t-1.5),new A.r(v,7,t+1.5),7.5,D.nd,12)}}return s},
i_g(d,e){var w,v,u,t,s,r=new A.fk(C.a([],x.z))
r.r=!0
r.aY(B.aUV,B.fWq,D.bN,0.4)
r.aY(B.h8T,B.h_6,D.bN,0.4)
r.aY(B.h8U,B.h_a,B.hU,0.6)
r.aP(B.x2,B.fWv,D.dH)
w=D.k.F(d*5+e,2)<1
r.aY(B.haZ,B.aV8,w?D.aw:D.ei,0.6)
r.aY(B.h6V,B.aV8,w?D.d6:D.d2,0.6)
for(v=0;v<2;++v){u=B.dkg[v]
for(t=0;t<2;++t){s=B.dk9[t]
r.dM(new A.r(u,6.5,s-1.5),new A.r(u,6.5,s+1.5),6.5,D.nd,12)}}return r},
ifZ(a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=x.z,a5=C.a([],a4)
for(w=0;w<4;++w){v=B.kk[w]
u=$.aQX()
t=D.d.cu(B.kk,v)
u.FC(0,a6)
t=A.L8(B.kk[t],u.a[t]).a
s=t[0]
r=t[1]
q=t[2]
p=t[3]
u=v.a==="bus"
o=u?A.hTN():A.i_g(a6,w)
u=u?B.aVW:B.aVf
D.d.v(a5,A.o9(A.i0I(o.a,u),0,Math.atan2(q,p)-1.5707963267948966,new A.r(s,0,r)))}for(u=$.bEG(),t=u.length,n=0;n<u.length;u.length===t||(0,C.M)(u),++n)D.d.v(a5,A.hXG(u[n],a6))
for(u=a6*0.9,t=x.o,m=a6*22,l=a6*0.09,w=0;w<2;++w){k=B.a4b[w].a
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
a0.aY(B.f1,B.fZA,D.by,0.4)
a0.aY(B.fXv,B.fWz,B.hU,0.7)
a0.dM(B.fXC,B.h_Q,2.6,D.by,8)
a0.aP(B.h_N,B.h6y,D.bN)
a0.dM(B.x2,B.aad,1.2,B.ho,8)
for(a1=0;a1<2;++a1)a0.aDs(new A.r(0,13.4,0),B.h1S,B.ho,m+a1*3.141592653589793/2)
for(n=0;n<2;++n){a2=E.azO[n]
a0.aP(new A.r(0,-11,a2),B.h1A,B.ho)
a0.aP(new A.r(-10,-6,a2),B.aVU,B.ho)
a0.aP(new A.r(10,-6,a2),B.aVU,B.ho)}for(n=0;n<2;++n){a3=B.azK[n]
a0.jg(C.a([new A.r(a3*0.45,-10,0),new A.r(a3,-22,0)],t),0.3,B.ho,!1,0,4)}D.d.v(a5,A.o9(d,0,e-1.5707963267948966,new A.r(j+520*k,h+Math.sin(u+w)*5,i+520*f)))}return a5},
ig_(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=C.a([],x.a),f=new A.fU3()
for(w=0;w<4;++w){v={}
u=B.kk[w]
v.a=v.b=null
t=$.aQX()
s=D.d.cu(B.kk,u)
t.FC(0,d)
s=A.L8(B.kk[s],t.a[s]).a
v.b=s[0]
v.a=s[1]
s=new A.fU1(v,Math.atan2(s[2],s[3])-1.5707963267948966)
v=u.a==="bus"
r=v?B.aVW:B.aVf
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
g.push(f.$7(s.$3(q,o,p),s.$3(v,o,p),s.$3(v,n,p),s.$3(q,n,p),t+5,1200,220))}for(v=d*0.09,t=d*0.9,w=0;w<2;++w){s=B.a4b[w].a
l=s[0]
k=s[1]
j=s[2]
i=s[3]
h=v+w*3.141592653589793
s=Math.cos(h)
p=Math.sin(h)
p=new A.fU2(Math.atan2(-Math.sin(h),Math.cos(h))-1.5707963267948966,l+520*s,j+Math.sin(t+w)*5,k+520*p)
g.push(f.$7(p.$2(-42,-22),p.$2(42,-22),p.$2(42,-44),p.$2(-42,-44),i,900,230))
g.push(f.$7(p.$2(42,-22.3),p.$2(-42,-22.3),p.$2(-42,-44.3),p.$2(42,-44.3),i,900,230))}return g},
hXG(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k=B.kk[d.a*2],j=d.b,i=A.L8(k,j).a,h=i[0],g=i[1],f=i[2],e=i[3]
j=A.L8(k,j+22).a
j=[j[0],j[1],f,e,h+-e*56,g+f*56]
w=A.h3Q(d,a0)
v=D.k.F(a0+d.c,28)
u=v>=17&&v<26
i=C.a([],x.z)
t=new A.fk(i)
t.r=!0
t.dM(B.f1,B.aV3,1.7,D.hf,6)
t.aY(B.fW3,B.h0r,D.au,0.3)
for(s=w===2,r=w===1,q=w===0,p=0;p<3;++p){o=!0
if(!(p===0&&s))if(!(p===1&&r)){n=p===2&&q
o=n}n=o?B.dh1[p]:B.cIg[p]
m=o?0.9:0.1
t.fT(new A.r(-3.9,74-p*8,0),3.3,n,4,7,m)}t.aY(B.fVy,B.fWA,D.au,0.3)
if(u){t.fo(B.h1E,1.6,D.be,4,6)
t.aP(B.h6u,B.h6b,D.be)
t.aP(B.h22,B.aWh,D.be)
t.aP(B.h5j,B.aWh,D.be)}else{t.aP(B.h34,B.h7k,D.aw)
for(l=-2;l<=1;++l)t.aP(new A.r(l*1.25+0.6,40,-4.9),B.h7G,D.aw)
t.aP(B.hao,B.h3e,D.aw)}return A.o9(i,0,Math.atan2(j[2],j[3])-1.5707963267948966,new A.r(j[4],0,j[5]))},
i4e(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=C.a([],x.z),i=new A.fk(j)
i.f=1
i.e=90
w=new A.fvD(i)
for(v=$.bEG(),u=v.length,t=0;t<v.length;v.length===u||(0,C.M)(v),++t){s=v[t]
r=B.kk[s.a*2]
q=s.b
p=A.L8(r,q+22).a
o=p[0]
n=p[1]
m=p[2]
l=p[3]
for(k=-4;k<=4;++k)w.$8(o,n,m,l,0,-25+k*11,18,5)
q=A.L8(r,q-6).a
w.$8(q[0],q[1],m,l,0,0,2.2,46)}return j},
Sp:function Sp(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.d=f
_.r=g
_.w=h},
fzn:function fzn(){},
aSU:function aSU(d,e,f){this.a=d
this.b=e
this.c=f},
bwl:function bwl(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=-1},
fdm:function fdm(d,e){this.a=d
this.b=e},
bJn:function bJn(d,e,f){var _=this
_.a=d
_.b=e
_.c=0
_.d=f},
bJo:function bJo(){},
fU3:function fU3(){},
fU4:function fU4(d){this.a=d},
fU1:function fU1(d,e){this.a=d
this.b=e},
fU2:function fU2(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fvD:function fvD(d){this.a=d},
fvE:function fvE(d,e,f,g,h,i){var _=this
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
cz_:function cz_(d,e,f){var _=this
_.a=d
_.b=e
_.d=_.c=$
_.e=f
_.f=null
_.w=_.r=0
_.x=1
_.y=0},
cz1:function cz1(d){this.a=d},
cz2:function cz2(){},
cz0:function cz0(){},
htJ(d){return d.b==="hq"?12:D.o.E(D.k.bj((210+D.o.F(B.zc[d.f].l(),5)*24)/22),8,14)},
fW0(d,e,f){var w=new A.bJ9(d,e,f,B.azn,B.a2F,C.a([],x.a),C.aY(x.S))
w.at=new A.b97(null,-138,138,12,316,0,296,3.141592653589793,w.cb5())
w.ax=w.cFT()
return w},
pw:function pw(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bJ9:function bJ9(d,e,f,g,h,i,j){var _=this
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
bJa:function bJa(){},
bJh:function bJh(d){this.a=d},
bJi:function bJi(d){this.a=d},
bJj:function bJj(d){this.a=d},
bJk:function bJk(d){this.a=d},
bJb:function bJb(d){this.a=d},
bJc:function bJc(){},
bJd:function bJd(){},
bJe:function bJe(d){this.a=d},
bJf:function bJf(d){this.a=d},
bJg:function bJg(d){this.a=d},
fW6(d,e){var w=C.a([],x.ha),v=C.a([new A.LV(),new A.LV(),new A.LV()],x.gQ),u=C.a([],x.s),t=new C.e9()
t.d3(e)
w=new A.aTj(d,t,w,v,u)
w.byx(d,e)
return w},
h8Y(d,e){var w,v,u,t,s,r,q,p,o=J.a5(e),n=x.fF,m=n.a(o.h(e,"wired"))
if(m==null)m=D.uE
w=n.a(o.h(e,"plumbed"))
if(w==null)w=D.uE
for(o=d.gqR(),n=o.length,v=J.a5(w),u=J.a5(m),t=0;t<o.length;o.length===n||(0,C.M)(o),++t){s=o[t]
r=""+s.a
q=u.h(m,r)
if(C.qY(q)){s.ay=!q
s.CW=null}p=v.h(w,r)
if(C.qY(p)){r=s.c
r=r==="bathroom"||r==="kitchen"}else r=!1
if(r){s.ch=!p
s.fr=null}}},
fW7(d){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=J.a5(d),j=C.aK(k.h(d,"seed"))
j=j==null?l:D.k.N(j)
if(j==null)j=1
w=C.aK(k.h(d,"clock"))
w=w==null?l:D.k.N(w)
v=A.fW6(j,(w==null?0:w)+7)
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
if(u==null)u=D.cy
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
if(o==null)o=D.cy
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
k=J.aV(k==null?D.cy:k)
j=v.d
while(k.C()){m=t.a(k.gR(k))
w=J.a5(m)
r=new A.I1(D.k.N(C.e5(w.h(m,"id"))),D.k.N(C.e5(w.h(m,"res"))),C.cP(w.h(m,"kind")),C.cP(w.h(m,"msg")),D.k.N(C.e5(w.h(m,"reward"))))
r.f=C.e5(w.h(m,"age"))
j.push(r)}return v},
aTl(){var w=0,v=C.j(x.dy),u,t=2,s=[],r,q,p,o,n
var $async$aTl=C.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return C.b(C.az(),$async$aTl)
case 7:r=e
q=C.aU(J.q(r.a,"ngmy_community_v1"))
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
return C.i($async$aTl,v)},
aTk(){var w=0,v=C.j(x.H),u=1,t=[],s,r,q
var $async$aTk=C.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:u=3
w=6
return C.b(C.az(),$async$aTk)
case 6:s=e
w=7
return C.b(J.hz(s,"ngmy_community_v1"),$async$aTk)
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
return C.i($async$aTk,v)},
Fj:function Fj(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
OT:function OT(d){var _=this
_.a=d
_.b=25
_.d=_.c=100
_.e=!1
_.f=!0
_.r=-1},
I1:function I1(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=0},
LV:function LV(){this.a=-1
this.b=100
this.c=0},
aTj:function aTj(d,e,f,g,h){var _=this
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
bJZ:function bJZ(){},
bJW:function bJW(d){this.a=d},
bJX:function bJX(d,e){this.a=d
this.b=e},
bJY:function bJY(){},
bK2:function bK2(d){this.a=d},
bK0:function bK0(d){this.a=d},
bK1:function bK1(){},
bK_:function bK_(d){this.a=d},
bK3:function bK3(){},
apr:function apr(d,e){this.c=d
this.a=e},
bjW:function bjW(){var _=this
_.d=null
_.e=$
_.f=null
_.r=$
_.x=_.w=null
_.y=0
_.c=_.a=null},
dQ9:function dQ9(d,e){this.a=d
this.b=e},
dQa:function dQa(d){this.a=d},
dQm:function dQm(){},
dQg:function dQg(d,e){this.a=d
this.b=e},
dQh:function dQh(d){this.a=d},
dQf:function dQf(d){this.a=d},
dQ5:function dQ5(){},
dQ6:function dQ6(){},
dQp:function dQp(){},
dQq:function dQq(){},
dQo:function dQo(d,e){this.a=d
this.b=e},
dQn:function dQn(d,e){this.a=d
this.b=e},
dQ4:function dQ4(d,e){this.a=d
this.b=e},
dQb:function dQb(d,e,f){this.a=d
this.b=e
this.c=f},
dQc:function dQc(d,e,f){this.a=d
this.b=e
this.c=f},
dQd:function dQd(d,e,f){this.a=d
this.b=e
this.c=f},
dQe:function dQe(d,e){this.a=d
this.b=e},
dQ8:function dQ8(d,e,f){this.a=d
this.b=e
this.c=f},
dQ7:function dQ7(d,e,f){this.a=d
this.b=e
this.c=f},
dQj:function dQj(d,e){this.a=d
this.b=e},
dQk:function dQk(d,e){this.a=d
this.b=e},
dQl:function dQl(d){this.a=d},
dQi:function dQi(d){this.a=d},
dQr:function dQr(d){this.a=d},
dQs:function dQs(){},
acw:function acw(d,e,f){this.c=d
this.d=e
this.a=f},
beP:function beP(d,e){this.b=d
this.a=e},
vL(d,e,f,g,h,i,j,k,l,m,n){return new A.SW(g,m,d,k,e,f,n,h,l,i,j)},
t1(d){return D.d.h_($.hxT(),new A.fwe(d))},
bEg(d,e){var w,v,u=d.e,t=new C.N(u,new A.fUE(),C.T(u).k("N<1,n>")).fH(0)
u=e.b
w=C.a6(u).k("bc<2>")
v=C.de(new C.bc(u,w),w.k("K.E"))
return t.d5(0,v.gkQ(v))},
htL(d,e,f,g,h){var w,v
if(e.a&&e.c===0){if(e.r)return"SHOCK! The breaker was still ON and you touched a live wire. Always turn the power OFF and test the wires first."
return"STOP! The breaker is still ON, so these wires are live (120 volts). Turn the breaker OFF first. This can shock you badly."}if(e.c!==0)return"The device is already in the box. Pull it out again to change the wires."
if(!e.r&&!e.y&&!h&&!g.c.t(0,f))return d.r.$2(f,g)
w=e.b
v=g.a
if(w.h(0,v)!=null)return"That place already has a wire. Tap the wire to take it off first."
if(new C.bc(w,C.a6(w).k("bc<2>")).t(0,f))return"That wire is already fastened. Tap it to take it off if you want to move it."
w.n(0,v,f)
return null},
h3p(d,e){var w,v,u,t,s,r,q=new A.fvq(),p=new A.fvr(),o=C.a([],x.bm)
for(w=e.b,w=new C.cH(w,C.a6(w).k("cH<1,2>")).gaf(0),v=d.f,u=d.e;w.C();){t=w.d
t.toString
s=D.d.h_(v,new A.fvo(t))
r=D.d.h_(u,new A.fvp(t))
o.push(new A.a44(new A.cAO(r.a,q.$1(r.e)),new A.cxd(p.$1(s.f))))}return o},
fLW(d){var w=d.e,v=C.T(w).k("Z<1>")
return new A.bLp(new C.Z(w,new A.fLX(),v).gL(0),new C.Z(w,new A.fLY(),v).gL(0),d.y)},
L4(d,e){var w,v,u,t,s,r,q=A.hpc(A.fLW(d),A.h3p(d,e),e.x),p=q.c,o=new A.fwr(q),n=q.b,m=n.length===0?null:D.d.fa(n,new A.fwo())
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
s=D.d.h_(u,new A.fwp(t))
if(!s.c.t(0,t.b)){n=s.d
return new A.b8E("dead","The "+D.d.h_(d.e,new A.fwq(t)).b+" is on the wrong terminal ("+s.b+"). "+n,!1,!1,!1,"none",n)}}r=n?"Wired correctly. Hot, neutral and ground are all in the right place, and every safety check passes.":m.c+" "+p.c
n=m==null?null:m.e
if(n==null)n=""
return new A.b8E(w,r,p.d,p.e,p.f,p.b,n)},
h3R(d){var w,v,u
for(w=$.fVh(),v=0;v<10;++v){u=w[v]
if(u.a===d)return u.w}return d},
aO1(d,e){var w
if(d==="light"||d==="fan")w=e.c===0?6.4:0.6
else w=e.c===0?4.7:-0.25
return w},
aPj(d,e,f){var w,v
if(d==="light"||d==="fan"){w=A.aO1(d,f)
v=f.c===0?w-3.2:w
switch(e){case 51:return new A.r(-1.5,-0.3,v)
case 52:return new A.r(0,-0.3,v)
default:return new A.r(1.5,-0.3,v)}}w=A.aO1(d,f)
switch(e){case 21:return new A.r(0.98,-0.2+(d==="gfci"?0.95:0.85),w-0.45)
case 22:return new A.r(0.98,-0.2+(d==="gfci"?-0.75:-0.55),w-0.45)
case 23:return new A.r(-0.98,-0.2+(d==="gfci"?0.95:0.85),w-0.45)
case 24:return new A.r(-0.98,-0.2+(d==="gfci"?-0.75:-0.55),w-0.45)
default:return new A.r(0,-1.98,w+0.52)}},
h3d(b5,b6,b7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=C.a([],x.z),b2=new A.fk(b1),b3=A.h3R(b5.a),b4=b3==="light"||b3==="fan"
if(b7){b2.b=1
b2.hn(B.h5y,B.aWc,B.vC,3)
b2.hn(B.h6M,B.aWc,B.vC,3)
b2.hn(B.h9u,B.aWy,B.vC,2)
b2.hn(B.h7n,B.aWy,B.vC,2)
b2.b=2
b2.n7(B.h56,B.aW6,B.jp,0.05,3)
b2.n7(B.h4x,B.aW6,B.jp,0.05,3)
b2.n7(B.h4q,B.ha_,B.jp,0.05,2)}w=b5.w.length===0
v=A.hkm(b2,w?b3:"outlet",!0)
u=new A.ftF(b2,b6,b3,b4)
t=D.d.gI(v)
s=!w
if(s){r=b5.e
q=r.length
for(p=t.a,o=t.b+0,n=t.c,m=q-1,l=q===1,k=0;k<q;++k){j=r[k]
i=l?0:k/m-0.5
h=D.o.F(k,2)
if(j.e==="ground")g=B.vI
else{g=j.c
if(g.A(0,B.oO))g=B.oO}u.$5(60+k,new A.r(p+i*0.5,o,n+0.04*k),new A.r(i*3.6,-1.7-0.12*h,2.3+0.15*k),j.a,g)}}else if(b3==="switch"){f=D.d.gak(v)
u.$5(10,t.aa(0,B.fYG),B.h9x,"blackLine",B.LH)
u.$5(13,f.aa(0,B.h9F),B.h2N,"blackLoad",B.LH)
u.$5(12,t.aa(0,B.h6l),B.h20,"ground",B.vI)
b2.b=6
r=x.o
b2.jg(C.a([t.aa(0,B.aW3),B.fZn,B.Vb],r),0.075,B.oO,!1,0.3,8)
b2.jg(C.a([f.aa(0,B.aW3),B.h5D,B.Vb],r),0.075,B.oO,!1,0.3,8)
b2.BB(B.Vb,B.h9p,0.28,B.aen,0.18,0.3,10)}else{u.$5(10,t.aa(0,B.h2W),B.fZa,"black",B.LH)
u.$5(11,t.aa(0,B.h4k),B.h5O,"white",B.oO)
u.$5(12,t.aa(0,B.h4I),B.h4y,"ground",B.vI)}if(b4)A.hlm(b2,b3,b6)
else A.hl0(b2,b3,A.aO1(b3,b6),b6.w,!1,s)
if(b6.e&&b6.c===0){b2.b=0
b2.d=0.5
for(r=b5.f,p=r.length,e=0;e<p;++e){d=r[e]
a0=A.aPj(b3,d.a,b6)
if(d.e)a1=D.bG
else{o=d.f
if(o==="ground")a1=D.be
else{o=o==="neutral"?D.c:B.XD
a1=o}}if(b4)o=0
else{o=a0.a
if(o>0.4)o=0.12
else o=o<-0.4?-0.12:0}if(b4)n=0.6
else n=Math.abs(a0.a)<0.4?0.2:0
b2.fT(new A.r(a0.a+o,a0.b+0,a0.c+n),0.36,a1,4,8,0.1)}b2.d=1}if(b6.c>=2&&!b4)A.hnq(b2,b6.w)
r=!1
if(b6.c>=2)if(b6.d)r=b3==="outlet"||b3==="gfci"
if(r)A.i2_(b2,b6.a&&!b6.w)
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
a2=A.aO1(b3,b6)
a4=p?"Ceiling fan":"Ceiling light"
p=p?"The motor housing with blades. It has three wires: black (motor), white (neutral) and green (ground).":"The light fixture with a frosted dome. It has three wires: black, white and green."
a5=C.G([1,B.eau,2,B.eaI,3,new A.cW(r,"A box that holds the wire connections. Every connection must be inside a box, never loose in the wall or the ceiling."+o,new A.r(0,0,-1.2),9),4,new A.cW(m,"The yellow jacket holds three wires: black (hot), white (neutral) and bare copper (ground). Yellow means 12 gauge wire for a 20 amp circuit. White jackets are 14 gauge for 15 amps.",new A.r(-0.4,1.5,-1.8),8),5,B.eb4,10,new A.cW("Black wire: hot","The hot wire brings the power from the breaker. It is the dangerous one. "+l,new A.r(-0.8,-0.8,1.2),7),13,B.eag,11,new A.cW("White wire: neutral","The neutral wire carries the power back to the panel. "+h,new A.r(0,-0.8,1.2),7),12,new A.cW("Bare copper wire: ground","The ground wire is a safety path. If a wire touches metal, the current runs down the ground instead of through you. "+g,new A.r(0.5,-0.8,1.2),7),6,B.eaG,20,new A.cW(a3,n,new A.r(0,-0.2,a2),9),21,B.eaL,22,B.eb3,23,B.eaE,24,B.eaJ,25,B.eax,26,B.eaM,27,B.eaY,28,B.eas,30,B.eab,31,B.ea9,51,B.eaH,52,B.ead,53,B.eaQ,54,new A.cW(a4,p,new A.r(0,0,6.4),9),55,B.eb_],x.S,x.q)
if(s){a5.n(0,20,new A.cW(b5.b,b5.c,new A.r(0,-0.2,A.aO1(b3,b6)),9))
for(s=b5.e,r=s.length,k=0;k<r;++k)a5.n(0,60+k,new A.cW(s[k].b,"Pick this wire up, then tap the screw it belongs on. Tap it again on the screw to take it off.",new A.r(-0.8+k*0.5,-0.8,1.2),7))
for(s=b5.f,r=s.length,e=0;e<r;++e){a6=s[e]
p=a6.a
a5.n(0,p,new A.cW(a6.b,a6.d,A.aPj(b3,p,b6),5))}}a7=C.a([],x.E)
if(b6.f&&b6.c===0)for(s=b5.f,r=s.length,e=0;e<r;++e){d=s[e]
a0=A.aPj(b3,d.a,b6)
a8=d.f
A:{p="hot"===a8
if(p){o=B.eQj
break A}if("neutral"===a8){o=B.eGg
break A}if("ground"===a8){o=B.eIO
break A}o=B.ev6
break A}a9=o.a
if(b4){B:{if(p){n="BLACK NUT \xb7 HOT"
break B}if("neutral"===a8){n="WHITE NUT \xb7 NEUTRAL"
break B}n="GROUND"
break B}i=n}else i=w?a9:d.b
if(b4){C:{if(p){p=B.h3X
break C}if("neutral"===a8){p=B.h3S
break C}p=B.hac
break C}b0=p}else{p=a0.a
if(p>0.4)n=3.8
else n=p<-0.4?-4.2:0
b0=new A.r(n,Math.abs(p)<0.4?-3:-0.4,1)}a7.push(new A.hf(new A.r(a0.a+b0.a,a0.b+b0.b,a0.c+b0.c),i,o.b,0))}if(b6.a&&b6.c===0)a7.push(B.c_w)
return new A.tM(b1,a5,a7,B.wu,null,0)},
hkm(d,e,f){var w,v,u=e==="light"||e==="fan"
d.b=3
if(u){d.dR(B.aWA,B.aWb,2.2,B.xR,0.3,18)
d.T9(B.aWb,B.f1,2.2,B.xR,!1,!0,0.3,18)}else{d.aY(B.aWA,B.h5f,B.xR,0.3)
d.aY(B.h2r,B.aVS,B.xR,0.3)
d.aY(B.h_4,B.aVS,B.xR,0.3)
d.aY(B.h4t,B.aWg,B.xR,0.3)
d.aY(B.h3Q,B.aWg,B.xR,0.3)}w=C.a([],x.o)
v=new A.ff5(d,f,w)
if(e==="switch"){v.$2(4,B.d1t)
v.$2(5,B.d_w)}else v.$2(4,B.ddW)
return w},
htQ(d,e){var w,v=$.fVh(),u=new C.Z(v,new A.fUD(d),C.T(v).k("Z<1>"))
if(!u.gan(0)){w=e-60
return w>=0&&w<u.gI(0).e.length?u.gI(0).e[w].a:null}return A.hXD(d,e)},
hXD(d,e){var w
A:{if(10===e){w=d==="switch"?"blackLine":"black"
break A}if(13===e){w="blackLoad"
break A}if(11===e){w="white"
break A}if(12===e){w="ground"
break A}w=null
break A}return w},
hl0(d,e,f,g,h,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k=new A.r(0,-0.2,f),j=e==="switch",i=e==="gfci"
if(g)w=B.xM
else w=j?B.bj4:B.Yh
v=i?3.1:2.95
d.e=0
d.b=20
if(!h){d.aY(k.aa(0,B.h1a),new A.r(1.5,v,1.3),w,0.25)
d.e=0.15
d.b=26
u=k.aa(0,B.h0T)
d.aY(u,B.h9r,g?B.bfA:B.M1,0.8)
d.aP(k.aa(0,B.h6i),B.hbb,B.EZ)}d.e=0.3
d.b=27
u=k.aa(0,B.h3p)
d.aY(u,new A.r(1.3,i?2.85:2.7,0.16),w,0.3)
if(j){d.e=0.7
d.b=28
u=k.aa(0,B.h5B)
d.aY(u,B.h2U,g?B.xM:G.Ys,0.35)
u=k.aa(0,B.h8Z)
d.aY(u,B.h7m,g?B.xM:B.af9,0.35)}else{d.e=0.6
u=i?E.auC:B.drp
t=u.length
s=f+0.47
r=f+0.46
q=f+0.5
p=0
for(;p<t;++p){o=u[p]
d.b=27
n=-0.2+(o+0.04)
d.aP(new A.r(-0.28,n,s),B.h5e,B.Fa)
d.aP(new A.r(0.28,n,s),B.h3w,B.Fa)
n=-0.2+(o-0.32)
d.dM(new A.r(0,n,r),new A.r(0,n,q),0.11,B.Fa,10)}if(i){d.e=0.7
d.b=28
d.aY(k.aa(0,B.h60),B.aVY,B.bmL,0.3)
d.aY(k.aa(0,B.h9G),B.aVY,B.ai_,0.3)}}if(h){d.e=0
return}m=i?0.95:0.85
l=i?-0.75:-0.55
u=new A.fgp(d,k)
if(!j||a0){u.$6$taped(23,-1,m,B.afw,B.ag4,i)
u.$5(24,-1,l,B.afw,B.ag4)}u.$6$taped(21,1,m,B.XD,B.ahr,i)
u.$5(22,1,l,B.XD,B.ahr)
d.e=0.9
d.b=25
d.dR(k.aa(0,B.h4r),k.aa(0,B.hah),0.18,B.boT,0.7,12)
d.aP(k.aa(0,B.h3U),B.h4v,D.dZ)
d.aY(k.aa(0,B.h1k),B.h65,B.bbQ,0.6)
d.e=0},
hlm(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=e==="fan",i=A.aO1(e,f)
d.e=0
d.b=55
w=i-0.3
v=i+0.3
u=j?3.3:3.5
t=f.w?B.xM:B.bjB
d.dR(new A.r(0,0,w),new A.r(0,0,v),u,t,0.45,20)
d.b=54
if(j){u=i+4.2
d.dR(new A.r(0,0,v),new A.r(0,0,u),0.45,B.bfu,0.5,10)
v=i+7.4
d.dR(new A.r(0,0,u),new A.r(0,0,v),3.6,B.X9,0.5,18)
d.dR(new A.r(0,0,v),new A.r(0,0,i+8.6),1.6,B.bo7,0.7,14)}else{d.d=0.92
v=f.w?B.xM:B.bgD
d.fT(new A.r(0,0,i+1.2),3.6,v,6,14,0.7)
d.d=1}v=d.b=54
s=[B.eGp,B.erQ,B.eNR]
for(u=x.o,r=i-3.2,q=0,p=0;p<3;++p){t=s[p]
o=f.c===0
d.b=o?B.cE_[q]:v;++q
n=o?r:i
o=t.b.a
d.jg(C.a([new A.r(o,-0.3,w),new A.r(o,-0.3,n+0.4)],u),0.07,t.a,!1,0.3,6)}if(f.c===0)for(w=[B.ez7,B.eHW,B.eQL],v=f.b,p=0;p<3;++p){m=w[p]
u=m.a
l=A.aPj(e,u,f)
d.b=u
d.e=0.8
t=l.a+0
o=l.b+0
k=l.c
d.dR(new A.r(t,o,k+-0.2),new A.r(t,o,k+0.3),0.09,B.vI,0.6,6)
if(v.aj(0,u))d.BB(new A.r(t,o,k+-0.5),new A.r(t,o,k+0.9),0.4,m.b,0.26,0.4,8)
d.e=0}},
hnq(d,e){var w
d.e=0.4
d.b=30
w=e?B.xM:B.baU
d.aY(B.h5T,B.aWi,w,0.3)
d.aY(B.h54,B.aWi,w,0.3)
d.aY(B.fZZ,B.aWr,w,0.3)
d.aY(B.h01,B.h1w,w,0.3)
d.aY(B.ha9,B.aWr,w,0.3)
d.dR(B.h3D,B.h50,0.1,B.M1,0.8,10)
d.e=0},
i2_(d,e){var w,v
d.b=31
for(w=0;w<2;++w){v=B.d44[w]
d.dR(new A.r(v,0.52,0.2),new A.r(v,0.52,1.9),0.04,B.M1,0.8,6)}d.aY(B.fX7,B.h9d,B.bgg,0.35)
d.bbm(B.aWd,0.2,e?D.XF:B.bkm,0.9)
if(e){d.d=0.35
d.fT(B.aWd,0.5,D.XF,4,8,0)
d.d=1}},
fJ:function fJ(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
Cv:function Cv(d){var _=this
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
SW:function SW(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
fxx:function fxx(){},
fxy:function fxy(){},
fxz:function fxz(){},
fxA:function fxA(){},
fxB:function fxB(){},
fwe:function fwe(d){this.a=d},
fUE:function fUE(){},
b8E:function b8E(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.r=i
_.w=j},
fvq:function fvq(){},
fvr:function fvr(){},
fvo:function fvo(d){this.a=d},
fvp:function fvp(d){this.a=d},
fLX:function fLX(){},
fLY:function fLY(){},
fwr:function fwr(d){this.a=d},
fws:function fws(d){this.a=d},
fwo:function fwo(){},
fwp:function fwp(d){this.a=d},
fwq:function fwq(d){this.a=d},
ftF:function ftF(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ftG:function ftG(d){this.a=d},
ff5:function ff5(d,e,f){this.a=d
this.b=e
this.c=f},
fUD:function fUD(d){this.a=d},
fgp:function fgp(d,e){this.a=d
this.b=e},
agC(d){var w
A:{if("outlet"===d){w="Outlet"
break A}if("gfci"===d){w="GFCI outlet"
break A}if("switch"===d){w="Light switch"
break A}if("light"===d){w="Ceiling light"
break A}if("fan"===d){w="Ceiling fan"
break A}w=A.t1(d).b
break A}return w},
fxC:function fxC(){},
fxD:function fxD(){},
fxE:function fxE(){},
fxF:function fxF(){},
fxG:function fxG(){},
fxH:function fxH(){},
fxI:function fxI(){},
fxJ:function fxJ(){},
fxK:function fxK(){},
fxL:function fxL(){},
aP7(d){return D.d.dN(B.a3q,new A.ftr(d),new A.fts())},
h6c(d,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i={},h=new A.fUA(),g=new A.fUx(),f=d.c,e=f==="hall"
if(!e&&d.p1!=="back"){w=a0.e?d.gho(0)-14:Math.min(a0.d,d.gho(0)-14)
v=h.$1(w)
return new A.abv(w,v,d.gho(0)/2,g.$1(v))}if(e&&a1<2){w=a0.e?d.gho(0)-14:Math.min(a0.d,d.gho(0)-14)
v=h.$1(w)
return new A.abv(w,v,d.gho(0)/2,g.$1(v))}if(e){f=C.a([],x.n)
for(e=d.w,u=e.length,t=0;t<e.length;e.length===u||(0,C.M)(e),++t){s=e[t]
if(s.b==="back"&&!s.a)f.push(s.c)}r=f.length===0?-40:D.d.fa(f,D.vw)-19-8
q=f.length===0?40:D.d.fa(f,D.pE)+19+8
p=d.gew(0)/2-8
f=a1===2?(-p+r)/2:(q+p)/2
return new A.abv(p-q,106,f,61)}e=d.gew(0)
q=d.gew(0)/2-6
if(f==="bathroom"&&!d.ok)q=14
f=C.a([],x.f)
for(u=d.w,o=u.length,t=0;t<u.length;u.length===o||(0,C.M)(u),++t){s=u[t]
if(s.b==="back"&&!s.a){n=s.c
f.push(new C.z(n-19,n+19))}}D.d.aW(f,new A.fUy())
m=i.a=i.b=-e/2+6
l=new A.fUz(i)
for(e=f.length,t=0;t<f.length;f.length===e||(0,C.M)(f),++t){u=f[t]
k=u.a
if(k>m)l.$2(m,Math.min(k,q))
m=Math.max(m,u.b)}if(m<q)l.$2(m,q)
j=Math.max(30,i.a-i.b-4)
w=a0.e?j:Math.min(a0.d,j)
v=h.$1(w)
return new A.abv(w,v,(i.b+i.a)/2,g.$1(v))},
zf(d,e,f,g,h,i,j,k){var w=x.S
return new A.a55(d,e,f,g,h,i,j,k,C.a([],x._),C.a([0,0,0],x.t),C.aY(w),C.U(w,x.i),C.U(w,x.cR),C.U(w,w),C.U(w,x.gh),C.U(w,x.N),C.a([],x.cX),C.aY(w),C.aY(w))},
aVN(d){var w=new A.aVM(d)
w.c76()
return w},
hCT(d){var w=new A.aVM(7)
w.byK(d)
return w},
igQ(d){var w,v=d.c
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
E_:function E_(d,e,f){this.a=d
this.b=e
this.c=f},
pN:function pN(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
ftr:function ftr(d){this.a=d},
fts:function fts(){},
abv:function abv(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fUA:function fUA(){},
fUx:function fUx(){},
fUy:function fUy(){},
fUz:function fUz(d){this.a=d},
oi:function oi(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aVG:function aVG(d,e,f){this.a=d
this.b=e
this.c=f},
a55:function a55(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v){var _=this
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
bTd:function bTd(){},
bTc:function bTc(){},
aVM:function aVM(d){var _=this
_.a=""
_.b=d
_.c=!1
_.d=$
_.e=0},
bTO:function bTO(){},
bTP:function bTP(){},
bTQ:function bTQ(d){this.a=d},
bTR:function bTR(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bTS:function bTS(d,e){this.a=d
this.b=e},
bTW:function bTW(d){this.a=d},
bTT:function bTT(d,e){this.a=d
this.b=e},
bTV:function bTV(d,e,f){this.a=d
this.b=e
this.c=f},
bTU:function bTU(d,e,f){this.a=d
this.b=e
this.c=f},
bU_:function bU_(){},
bTZ:function bTZ(){},
bTY:function bTY(){},
bTX:function bTX(){},
b0d(d,e,f){return new A.IQ(!1,d,e,null)},
hpb(d){var w=A.vw(B.ip,d.e*3.141592653589793/2)
return new C.z(w.a,w.c)},
i3r(b3,b4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8=null,a9="A helicopter with its billboard",b0={},b1=C.a([],x.dI),b2=x.o
b0.a=C.a([],b2)
b0.b=C.a([],b2)
b0.c=C.a([],x.s)
b0.d=!1
w=new A.fu_(b0,b1)
v=new A.fu6(b0)
u=new A.fu1(b3)
t=new A.fu7(b3)
s=new A.ftS(new A.fu0(t),new A.ftY(t,u))
r=new A.fu3(b0,u,s,v)
q=new A.fu4(b0,new A.fu5(r),s)
p=new A.fu2(b0,w,b1)
b2=D.d.t(B.dg3,b4)
o=!b2
n=x._
m=C.a([],n)
for(l=b3.x,k=l.length,j=0;j<l.length;l.length===k||(0,C.M)(l),++j){i=l[j]
h=i.b
if(h==="billboard"||h==="cornersign"||h==="adboard"||h==="tower"||h==="hq")m.push(i)}k=C.T(l).k("Z<1>")
g=new C.Z(l,new A.ftT(),k)
h=C.a([],n)
for(f=l.length,j=0;j<l.length;l.length===f||(0,C.M)(l),++j){i=l[j]
e=i.b
if(e==="house2"||e==="bighouse")h.push(i)}v.$3$note(B.fWd,B.fVi,"Welcome to NGMY Town")
if(!g.gan(0))q.$1(g.gI(0))
if(b4==="city"||o){v.$2(B.h8H,B.h83)
v.$2(B.h8M,B.h82)
v.$2(B.fVE,B.fUi)
v.$2(B.h0b,B.fXZ)
v.$2(B.h06,B.fY_)
v.$2(B.fVY,B.fUk)
w.$1$speed(200)}if(b4==="billboards"||o){d={}
v.$2(B.h8o,B.h8j)
v.$3$note(B.fVu,B.Ah,"The big NGMY logo board: New Global Movement for Youth")
v.$2(B.fXI,B.Ah)
v.$2(B.fYw,B.Ah)
v.$2(B.fWt,B.Ah)
v.$2(B.h7T,B.Ah)
v.$2(B.h8a,B.Ah)
v.$2(B.h7M,B.h84)
d.a=!g.gaf(0).C()?B.fUj:new A.r(g.gI(0).c,0,g.gI(0).d)
a0=C.C(m,x.eB)
a1=0
for(;;){if(a0.length!==0)m=a1<(o?8:80)
else m=!1
if(!m)break
D.d.aW(a0,new A.ftU(d))
i=D.d.cG(a0,0)
q.$1(i)
d.a=new A.r(i.c,0,i.d);++a1}w.$1$speed(105)
for(a2=0;a2<2;++a2)b1.push(new A.Mg(B.rC,B.rC,130,6,a9,a8,!1,a8,a2))}if(b4==="edges"){n=C.a([],n)
for(m=l.length,j=0;j<l.length;l.length===m||(0,C.M)(l),++j){i=l[j]
f=i.b
if(f==="adboard"||f==="cornersign")n.push(i)}D.d.aW(n,new A.ftV(new A.ftR()))
for(m=n.length,j=0;j<n.length;n.length===m||(0,C.M)(n),++j){i=n[j]
f=b0.a
if(f.length>1){a3=D.d.gak(f)
f=i.c
e=i.d
v.$2(new A.r((a3.a+f)/2,430,(a3.c+e)/2),new A.r(f,100,e))}q.$1(i)}w.$1$speed(150)}if(b4==="houses"||o){a2=0
for(;;){n=h.length
if(a2<n)m=a2<(o?2:5)
else m=!1
if(!m)break
i=h[(a2*5+1)%n]
r.$7$note(i,150,50,270,330,70,i.b==="bighouse"?"A big house with TV windows":"A house");++a2}a4=new C.Z(h,new A.ftW(),x.am)
if(!a4.gan(0)){i=a4.gI(0)
a5=A.hpb(i)
n=i.c
m=i.d
v.$2(new A.r(n+a5.a*220,110,m+a5.b*220),new A.r(n,45,m))
p.$1(i)}}if(b4==="hospital"||o)for(j=0;j<3;++j){a6=B.dhb[j]
i=new C.Z(l,new A.ftX(a6),k)
if(!i.gaf(0).C())continue
a7=i.gaf(0)
if(!a7.C())C.b8(C.fs())
r.$7$note(a7.gR(0),160,50,300,360,60,"The "+a6)
a7=i.gaf(0)
if(!a7.C())C.b8(C.fs())
p.$1(a7.gR(0))}w.$0()
if(b4==="traffic"||o){if(b2){for(a2=0;a2<2;++a2)b1.push(new A.Mg(B.rC,B.rC,130,6,a9,a8,!1,a8,a2))
o=!1}a2=0
for(;;){if(a2<4)b2=a2<(o?2:4)
else b2=!1
if(!b2)break
b1.push(new A.Mg(B.rC,B.rC,130,6,B.kk[a2].a==="bus"?"A self-driving bus with its billboards":"A self-driving police car",a8,!1,a2,a8));++a2}}return b1},
IQ:function IQ(d,e,f,g){var _=this
_.d=d
_.f=e
_.r=f
_.a=g},
aEe:function aEe(d,e,f,g,h,i,j,k,l,m,n,o,p,q){var _=this
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
_.aA=null
_.aE=0
_.aL=!1
_.b1=_.aC=null
_.bL=_.be=_.b0=0
_.aI=null
_.bh=!1
_.bG=null
_.c7=0
_.c5=m
_.cL=null
_.cl=n
_.P=_.bB=null
_.S=0
_.bJ=o
_.bw=null
_.bX=0
_.f0=_.es=_.eh=!1
_.ab=1
_.ey=400
_.ai=_.fw=!1
_.bC=_.al=null
_.bZ=0
_.du=""
_.cJ=null
_.eI=p
_.hL=_.hK=0
_.jc=-1
_.iM=q
_.h4=!1
_.mI=_.lc=-1e5
_.lx=0
_.c=_.a=_.qQ=_.t3=null},
eaR:function eaR(){},
eaO:function eaO(d){this.a=d},
eaP:function eaP(d){this.a=d},
eaN:function eaN(){},
eaQ:function eaQ(d){this.a=d},
e9B:function e9B(d,e,f){this.a=d
this.b=e
this.c=f},
e9C:function e9C(d){this.a=d},
e9A:function e9A(d){this.a=d},
e9D:function e9D(d,e){this.a=d
this.b=e},
e89:function e89(d,e){this.a=d
this.b=e},
ea3:function ea3(d){this.a=d},
e96:function e96(d){this.a=d},
e97:function e97(d,e){this.a=d
this.b=e},
e98:function e98(d,e){this.a=d
this.b=e},
e99:function e99(d,e){this.a=d
this.b=e},
e9a:function e9a(d){this.a=d},
e7D:function e7D(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e7B:function e7B(d,e,f){this.a=d
this.b=e
this.c=f},
e7A:function e7A(d,e){this.a=d
this.b=e},
e7C:function e7C(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e7y:function e7y(d,e){this.a=d
this.b=e},
e7z:function e7z(d,e,f){this.a=d
this.b=e
this.c=f},
e7x:function e7x(d,e){this.a=d
this.b=e},
e7M:function e7M(d){this.a=d},
e7N:function e7N(d){this.a=d},
e7O:function e7O(d){this.a=d},
e9_:function e9_(d){this.a=d},
e91:function e91(d){this.a=d},
e90:function e90(d){this.a=d},
e92:function e92(d){this.a=d},
e8Z:function e8Z(d){this.a=d},
e93:function e93(d){this.a=d},
e8Y:function e8Y(d){this.a=d},
e94:function e94(d){this.a=d},
e8X:function e8X(d){this.a=d},
e95:function e95(d){this.a=d},
e8W:function e8W(d){this.a=d},
e7d:function e7d(d){this.a=d},
e7e:function e7e(d){this.a=d},
e7Y:function e7Y(d){this.a=d},
e8_:function e8_(d){this.a=d},
e7Z:function e7Z(d){this.a=d},
e80:function e80(d){this.a=d},
e7X:function e7X(d){this.a=d},
e81:function e81(d){this.a=d},
e7W:function e7W(d){this.a=d},
e82:function e82(d){this.a=d},
e7V:function e7V(d){this.a=d},
e83:function e83(d){this.a=d},
e7U:function e7U(d){this.a=d},
e84:function e84(d){this.a=d},
e7T:function e7T(d){this.a=d},
e85:function e85(d){this.a=d},
e7S:function e7S(d){this.a=d},
ea1:function ea1(){},
ea2:function ea2(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
ea_:function ea_(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e9Z:function e9Z(d){this.a=d},
ea0:function ea0(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e8n:function e8n(d){this.a=d},
e6c:function e6c(){},
eau:function eau(){},
e6D:function e6D(){},
e8i:function e8i(d){this.a=d},
e8h:function e8h(d){this.a=d},
e8j:function e8j(d){this.a=d},
e8g:function e8g(d){this.a=d},
eav:function eav(d,e){this.a=d
this.b=e},
eat:function eat(d){this.a=d},
e9H:function e9H(d,e,f){this.a=d
this.b=e
this.c=f},
e9I:function e9I(d,e){this.a=d
this.b=e},
e9G:function e9G(d,e){this.a=d
this.b=e},
e9F:function e9F(d){this.a=d},
e9E:function e9E(d){this.a=d},
e8H:function e8H(){},
e8I:function e8I(){},
e8E:function e8E(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
e8G:function e8G(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e8F:function e8F(d){this.a=d},
e8C:function e8C(d){this.a=d},
e8B:function e8B(d){this.a=d},
e8D:function e8D(d,e){this.a=d
this.b=e},
e8A:function e8A(d,e){this.a=d
this.b=e},
e86:function e86(d){this.a=d},
e87:function e87(d){this.a=d},
e9x:function e9x(){},
e7K:function e7K(d){this.a=d},
e7J:function e7J(d){this.a=d},
e7L:function e7L(d,e){this.a=d
this.b=e},
e7w:function e7w(d){this.a=d},
e8o:function e8o(){},
e9J:function e9J(d,e){this.a=d
this.b=e},
e7I:function e7I(){},
e9U:function e9U(d){this.a=d},
e7G:function e7G(d){this.a=d},
e7H:function e7H(d,e){this.a=d
this.b=e},
e7F:function e7F(d){this.a=d},
e7E:function e7E(d){this.a=d},
e8d:function e8d(){},
e9T:function e9T(d,e){this.a=d
this.b=e},
eaI:function eaI(){},
e7f:function e7f(){},
e8a:function e8a(d,e){this.a=d
this.b=e},
e8b:function e8b(d){this.a=d},
e8c:function e8c(){},
e7Q:function e7Q(){},
e7R:function e7R(d){this.a=d},
e8q:function e8q(){},
e8r:function e8r(d,e){this.a=d
this.b=e},
e6K:function e6K(){},
e6J:function e6J(){},
e6L:function e6L(d){this.a=d},
e6I:function e6I(d){this.a=d},
e6M:function e6M(d){this.a=d},
e6H:function e6H(d){this.a=d},
e6N:function e6N(d,e){this.a=d
this.b=e},
e6G:function e6G(d){this.a=d},
e6O:function e6O(d,e){this.a=d
this.b=e},
e6F:function e6F(d,e){this.a=d
this.b=e},
e6P:function e6P(d){this.a=d},
e6E:function e6E(d){this.a=d},
e7b:function e7b(d){this.a=d},
e7c:function e7c(d){this.a=d},
e9w:function e9w(d,e,f){this.a=d
this.b=e
this.c=f},
e9u:function e9u(d,e,f){this.a=d
this.b=e
this.c=f},
e9v:function e9v(d,e){this.a=d
this.b=e},
e9q:function e9q(d,e,f){this.a=d
this.b=e
this.c=f},
e9p:function e9p(){},
e9r:function e9r(d,e){this.a=d
this.b=e},
e9s:function e9s(d,e){this.a=d
this.b=e},
e9t:function e9t(d,e){this.a=d
this.b=e},
e9g:function e9g(d,e){this.a=d
this.b=e},
e9d:function e9d(){},
e9e:function e9e(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e9c:function e9c(d,e,f){this.a=d
this.b=e
this.c=f},
e9f:function e9f(d,e,f){this.a=d
this.b=e
this.c=f},
e9b:function e9b(d,e){this.a=d
this.b=e},
eas:function eas(d){this.a=d},
eaq:function eaq(d){this.a=d},
ear:function ear(d,e){this.a=d
this.b=e},
eai:function eai(d,e,f){this.a=d
this.b=e
this.c=f},
eah:function eah(){},
eaj:function eaj(){},
eak:function eak(d,e){this.a=d
this.b=e},
eal:function eal(d,e){this.a=d
this.b=e},
eam:function eam(d){this.a=d},
ean:function ean(d){this.a=d},
eao:function eao(d){this.a=d},
eap:function eap(d){this.a=d},
eae:function eae(d){this.a=d},
eac:function eac(d){this.a=d},
ead:function ead(){},
ea8:function ea8(d,e,f){this.a=d
this.b=e
this.c=f},
ea6:function ea6(d){this.a=d},
ea7:function ea7(){},
ea9:function ea9(d,e,f){this.a=d
this.b=e
this.c=f},
ea5:function ea5(d,e){this.a=d
this.b=e},
eaa:function eaa(d,e){this.a=d
this.b=e},
eab:function eab(d,e){this.a=d
this.b=e},
e9Q:function e9Q(d,e){this.a=d
this.b=e},
e9R:function e9R(d){this.a=d},
e9S:function e9S(){},
eaf:function eaf(d,e){this.a=d
this.b=e},
ea4:function ea4(d,e){this.a=d
this.b=e},
e9X:function e9X(d){this.a=d},
e9Y:function e9Y(){},
e9P:function e9P(){},
e9W:function e9W(){},
eaD:function eaD(d){this.a=d},
eaE:function eaE(d){this.a=d},
eaF:function eaF(d){this.a=d},
eaG:function eaG(){},
eaw:function eaw(d){this.a=d},
eax:function eax(d){this.a=d},
eay:function eay(d,e){this.a=d
this.b=e},
eaz:function eaz(d,e){this.a=d
this.b=e},
eaA:function eaA(d,e){this.a=d
this.b=e},
eaB:function eaB(d,e){this.a=d
this.b=e},
eaC:function eaC(d,e){this.a=d
this.b=e},
e7P:function e7P(){},
e8v:function e8v(d){this.a=d},
e8s:function e8s(){},
e8t:function e8t(){},
e8u:function e8u(){},
e8e:function e8e(){},
e8f:function e8f(d){this.a=d},
e9K:function e9K(){},
e88:function e88(d){this.a=d},
e9y:function e9y(){},
e9z:function e9z(d){this.a=d},
e9L:function e9L(d){this.a=d},
e9M:function e9M(d){this.a=d},
e8l:function e8l(d){this.a=d},
e8k:function e8k(d){this.a=d},
e8m:function e8m(d){this.a=d},
e9N:function e9N(d){this.a=d},
e9O:function e9O(){},
e9V:function e9V(d){this.a=d},
e8K:function e8K(){},
e8L:function e8L(d){this.a=d},
e8T:function e8T(d){this.a=d},
e8U:function e8U(){},
e8V:function e8V(d){this.a=d},
e8N:function e8N(d){this.a=d},
e8O:function e8O(d,e){this.a=d
this.b=e},
e8M:function e8M(d,e){this.a=d
this.b=e},
e8P:function e8P(d,e){this.a=d
this.b=e},
e8S:function e8S(d){this.a=d},
e8Q:function e8Q(d){this.a=d},
e8J:function e8J(d){this.a=d},
e8R:function e8R(d){this.a=d},
e8w:function e8w(d){this.a=d},
e8x:function e8x(d){this.a=d},
eaH:function eaH(d){this.a=d},
e8z:function e8z(d){this.a=d},
e8y:function e8y(d){this.a=d},
e6b:function e6b(d){this.a=d},
e6a:function e6a(d,e,f){this.a=d
this.b=e
this.c=f},
e65:function e65(){},
e66:function e66(){},
e67:function e67(d){this.a=d},
e68:function e68(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e8p:function e8p(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
eag:function eag(d,e){this.a=d
this.b=e},
e9n:function e9n(d,e){this.a=d
this.b=e},
e9o:function e9o(d,e){this.a=d
this.b=e},
e69:function e69(d,e){this.a=d
this.b=e},
e7l:function e7l(d){this.a=d},
e7m:function e7m(d){this.a=d},
e7n:function e7n(d){this.a=d},
e7o:function e7o(d){this.a=d},
e7p:function e7p(d,e){this.a=d
this.b=e},
e7q:function e7q(d){this.a=d},
e7k:function e7k(d){this.a=d},
e7r:function e7r(d,e){this.a=d
this.b=e},
e7j:function e7j(d,e){this.a=d
this.b=e},
e7s:function e7s(d,e){this.a=d
this.b=e},
e7i:function e7i(d,e){this.a=d
this.b=e},
e7t:function e7t(d){this.a=d},
e7h:function e7h(d){this.a=d},
e7u:function e7u(d,e){this.a=d
this.b=e},
e7g:function e7g(d,e){this.a=d
this.b=e},
e7v:function e7v(d,e){this.a=d
this.b=e},
eaK:function eaK(d){this.a=d},
eaM:function eaM(d){this.a=d},
eaJ:function eaJ(d){this.a=d},
eaL:function eaL(d){this.a=d},
e6Y:function e6Y(d){this.a=d},
e6Z:function e6Z(d){this.a=d},
e7_:function e7_(d){this.a=d},
e73:function e73(d){this.a=d},
e74:function e74(d){this.a=d},
e75:function e75(d){this.a=d},
e6X:function e6X(d){this.a=d},
e76:function e76(d){this.a=d},
e6W:function e6W(d){this.a=d},
e77:function e77(d){this.a=d},
e6V:function e6V(d){this.a=d},
e78:function e78(d){this.a=d},
e79:function e79(d){this.a=d},
e6U:function e6U(d){this.a=d},
e7a:function e7a(d){this.a=d},
e6T:function e6T(d){this.a=d},
e70:function e70(d){this.a=d},
e6S:function e6S(d){this.a=d},
e71:function e71(d){this.a=d},
e6R:function e6R(d){this.a=d},
e72:function e72(d){this.a=d},
e6Q:function e6Q(d){this.a=d},
e6i:function e6i(d){this.a=d},
e6w:function e6w(d){this.a=d},
e6v:function e6v(){},
e6j:function e6j(d){this.a=d},
e6k:function e6k(d){this.a=d},
e6x:function e6x(){},
e6n:function e6n(d,e){this.a=d
this.b=e},
e6y:function e6y(d){this.a=d},
e6h:function e6h(d){this.a=d},
e6z:function e6z(d){this.a=d},
e6A:function e6A(d){this.a=d},
e6g:function e6g(d){this.a=d},
e6B:function e6B(d){this.a=d},
e6C:function e6C(d){this.a=d},
e6l:function e6l(d){this.a=d},
e6f:function e6f(d){this.a=d},
e6m:function e6m(d){this.a=d},
e6e:function e6e(d){this.a=d},
e6o:function e6o(d){this.a=d},
e6p:function e6p(d){this.a=d},
e6q:function e6q(d){this.a=d},
e6r:function e6r(d){this.a=d},
e6s:function e6s(d){this.a=d},
e6t:function e6t(d){this.a=d},
e6u:function e6u(d){this.a=d},
e6d:function e6d(){},
e9m:function e9m(d){this.a=d},
e9j:function e9j(d,e,f){this.a=d
this.b=e
this.c=f},
e9k:function e9k(d,e){this.a=d
this.b=e},
e9i:function e9i(d){this.a=d},
e9l:function e9l(d,e){this.a=d
this.b=e},
e9h:function e9h(d){this.a=d},
bj2:function bj2(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
dt9:function dt9(d,e){this.a=d
this.b=e},
bis:function bis(d,e){this.b=d
this.a=e},
aIq:function aIq(d,e){this.c=d
this.a=e},
bsX:function bsX(){this.c=this.a=this.d=null},
f2g:function f2g(d,e){this.a=d
this.b=e},
f2f:function f2f(d){this.a=d},
f2i:function f2i(d){this.a=d},
f2j:function f2j(d){this.a=d},
f2k:function f2k(d){this.a=d},
f2h:function f2h(d){this.a=d},
eXS:function eXS(d,e,f){var _=this
_.a=d
_.b=e
_.c=f
_.d=0
_.e=1
_.f=3
_.r=0
_.w=112
_.x=!1},
Mg:function Mg(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
Qa:function Qa(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fu_:function fu_(d,e){this.a=d
this.b=e},
fu6:function fu6(d){this.a=d},
fu1:function fu1(d){this.a=d},
fu7:function fu7(d){this.a=d},
fu0:function fu0(d){this.a=d},
ftY:function ftY(d,e){this.a=d
this.b=e},
ftZ:function ftZ(d,e){this.a=d
this.b=e},
ftS:function ftS(d,e){this.a=d
this.b=e},
fu3:function fu3(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fu5:function fu5(d){this.a=d},
fu4:function fu4(d,e,f){this.a=d
this.b=e
this.c=f},
fu2:function fu2(d,e,f){this.a=d
this.b=e
this.c=f},
ftT:function ftT(){},
ftU:function ftU(d){this.a=d},
ftR:function ftR(){},
ftV:function ftV(d){this.a=d},
ftW:function ftW(){},
ftX:function ftX(d){this.a=d},
heP(){var w=$.heO
return w==null?$.heO=new A.cfd().$0():w},
idJ(d,e,f){var w,v,u,t,s,r,q,p,o,n=null,m=e.a,l=e.b,k=new C.a3(0,0,0+m,0+l),j=C.bs(k,D.io)
$.S()
w=C.I()
w.sam(B.c3Q.aB(0,k))
d.az(j,w)
v=C.I()
v.b=D.a9
v.r=F.fw.gp(0)
v.c=l*0.025
w=l*0.05
j=l*0.08
d.az(C.bs(k.cq(-w),new C.aQ(j,j)),v)
w=C.bs(k.cq(-(l*0.1)),new C.aQ(w,w))
v.c=l*0.01
d.az(w,v)
u=new C.t(m/2,l/2)
t=l*0.36
l=C.I()
l.r=G.ago.gp(0)
d.ad(u,t*1.1,l)
l=C.I()
l.r=F.fw.gp(0)
d.ad(u,t,l)
l=C.I()
l.r=B.EV.gp(0)
d.ad(u,t*0.9,l)
l=C.I()
l.b=D.a9
l.r=E.jI.gp(0)
l.c=t*0.04
d.ad(u,t*0.95,l)
s=$.W1
r=C.bJ(u,t*1.2,t*1.5)
if(s!=null){m=s.c
l=s.d
q=Math.min((r.c-r.a)/m,(r.d-r.b)/l)
p=C.bJ(r.gbK(),l*q,m*q)
j=C.I()
j.Q=D.cf
d.ow(s,new C.a3(0,0,m,l),p,j)}else{o=C.fu(n,n,n,n,C.cS(n,n,n,n,n,n,n,n,n,C.l(n,n,E.jI,n,n,n,n,n,n,n,n,t*0.6,n,n,D.u,n,n,!0,n,n,n,n,n,n,n,n),"NGMY"),D.a3,D.bZ,n,D.dA,D.bW)
o.ej()
m=o.b
l=m.c
m=m.a.c
o.a1(d,u.aF(0,new C.t(l/2,m.gbb(m)/2)))}},
hsQ(d,e,f){var w,v,u,t,s,r,q,p,o=null,n=e.eg(D.J),m=e.gdC()/2
$.S()
w=C.I()
w.r=F.fw.gp(0)
d.ad(n,m,w)
w=C.I()
w.r=B.EV.gp(0)
d.ad(n,m*0.9,w)
w=C.I()
w.b=D.a9
w.r=E.jI.gp(0)
w.c=m*0.04
d.ad(n,m*0.93,w)
v=$.W1
u=C.bJ(n,m*1.2,m*1.5)
if(v!=null){w=v.c
t=v.d
s=Math.min((u.c-u.a)/w,(u.d-u.b)/t)
r=C.bJ(u.gbK(),t*s,w*s)
q=C.I()
q.Q=D.cf
d.ow(v,new C.a3(0,0,w,t),r,q)}else{p=C.fu(o,o,o,o,C.cS(o,o,o,o,o,o,o,o,o,C.l(o,o,E.jI,o,o,o,o,o,o,o,o,m*0.6,o,o,D.u,o,o,!0,o,o,o,o,o,o,o,o),"NGMY"),D.a3,D.bZ,o,D.dA,D.bW)
p.ej()
w=p.b
t=w.c
w=w.a.c
p.a1(d,n.aF(0,new C.t(t/2,w.gbb(w)/2)))}},
GZ(d,e,f,g,h){var w,v,u,t,s,r,q,p,o,n,m=null,l=e.a,k=e.b,j=new C.a3(0,0,0+l,0+k),i=e.gdC()*0.08
i=C.bs(j,new C.aQ(i,i))
$.S()
w=C.I()
w.sam(B.aqz.aB(0,j))
d.az(i,w)
w=j.cq(-(e.gdC()*0.045))
i=e.gdC()*0.06
i=C.bs(w,new C.aQ(i,i))
w=C.I()
w.b=D.a9
w.r=F.fw.gp(0)
w.c=e.gdC()*0.035
d.az(i,w)
v=k*0.33
u=new C.t(k*0.6,k*0.5)
w=C.I()
w.r=F.fw.gp(0)
d.ad(u,v,w)
w=C.I()
w.r=B.EV.gp(0)
d.ad(u,v*0.88,w)
t=$.W1
s=C.bJ(u,v*1.15,v*1.4)
if(t!=null){i=t.c
w=t.d
r=Math.min((s.c-s.a)/i,(s.d-s.b)/w)
q=C.bJ(s.gbK(),w*r,i*r)
p=C.I()
p.Q=D.cf
d.ow(t,new C.a3(0,0,i,w),q,p)}else{o=C.fu(m,m,m,m,C.cS(m,m,m,m,m,m,m,m,m,C.l(m,m,E.jI,m,m,m,m,m,m,m,m,v*0.55,m,m,D.u,m,m,!0,m,m,m,m,m,m,m,m),"NGMY"),D.a3,D.bZ,m,D.dA,D.bW)
o.ej()
i=o.b
w=i.c
i=i.a.c
o.a1(d,u.aF(0,new C.t(w/2,i.gbb(i)/2)))}n=k*1.08
l=new A.fLh(l-n-k*0.2,d,n)
l.$4(g,k*0.36,D.c,k*0.16)
l.$4(h,k*0.14,F.fw,k*0.62)},
hov(d){return 210+D.o.F(d.l(),5)*24},
fLd(d,e,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k="NEW GLOBAL",j="MOVEMENT",i="FOR YOUTH",h=e.a,g=e.b,f=new C.a3(0,0,0+h,0+g)
A:{if(0===a1){w=B.aqz
break A}if(1===a1){w=B.c3F
break A}w=B.c1I
break A}v=e.gdC()*0.06
v=C.bs(f,new C.aQ(v,v))
$.S()
u=C.I()
u.sam(w.aB(0,f))
d.az(v,u)
t=C.I()
t.b=D.a9
w=a1===2
t.r=(w?E.jI:F.fw).gp(0)
t.c=e.gdC()*0.04
v=f.cq(-(e.gdC()*0.05))
u=e.gdC()*0.05
d.az(C.bs(v,new C.aQ(u,u)),t)
u=f.cq(-(e.gdC()*0.1))
v=e.gdC()*0.03
v=C.bs(u,new C.aQ(v,v))
t.c=e.gdC()*0.012
d.az(v,t)
if(a1===1)s=E.jI
else s=w?E.jI:D.c
w=new A.fLf($.W1,d,s)
v=new A.fLe(s,e,d)
u=g*0.4
r=g*0.12
if(a1===0){q=g*0.5
p=new C.t(g*0.62,q)
o=C.I()
o.r=F.fw.gp(0)
d.ad(p,g*0.34,o)
o=C.I()
o.r=B.EV.gp(0)
d.ad(p,g*0.3,o)
w.$1(C.bJ(p,u,q))
n=g*1.04
m=h-r
r=new A.fLg(e)
h=r.$1(k)
q=r.$1(j)
r=r.$1(i)
r=Math.max(C.jU(q),C.jU(r))
l=(n+m)/2
r=g*0.16*Math.min(1,(m-n)/Math.max(C.jU(h),r))
v.$3(k,new C.t(l,g*0.2),r)
v.$3(j,new C.t(l,u),r)
v.$3(i,new C.t(l,g*0.6),r)}else{q=h/2
w.$1(C.bJ(new C.t(q,g*0.42),u,h*0.6))
v.$3("NGMY",new C.t(q,g*0.68),r)
v.$4$w(i,new C.t(q,g*0.82),g*0.06,D.P)}},
hoN(f8,f9,g0,g1,g2,g3,g4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6,d7,d8,d9,e0,e1,e2,e3,e4,e5,e6,e7,e8,e9,f0,f1,f2,f3="walls",f4="GFCI outlet",f5="Wall outlet",f6="\ud83d\udeb0 Needs plumbing",f7=f8.c
if(f7==="outside")return A.hZp(f8,g2,g1,g4,g3,g0)
f8.cHW()
w=x.z
v=C.a([],w)
u=new A.fk(v)
t=C.U(x.S,x.q)
s=C.a([],x.E)
r=C.a([],x.a)
q=f8.gew(0)
p=f8.gho(0)
o=C.a([],x.O)
for(n=f8.z,m=n.length,l=0;l<n.length;n.length===m||(0,C.M)(n),++l)o.push(B.ayL[n[l]])
k=B.ayu[f8.Q]
j=new A.fun(g1)
u.f=-1
u.b=j.$2("floor",310)
i=$.dR+1
u.x=$.dR=i
n=p/2
m=q+2.4
h=p+2
g=k.b
f=k.c
e=f==="tile"
if(e)d=0.35
else d=f==="wood"?0.15:0
u.n7(new A.r(0,-0.6,n),new A.r(m,1.2,h),g,d,3)
t.n(0,310,new A.cW("Floor","The "+k.a.toLowerCase()+" floor.",new A.r(0,0,n),140))
u.b=0
if(f==="wood")for(f=-q/2,a0=1;a0<8;++a0){e=C.ar(g,D.w,0.25)
e.toString
u.aP(new A.r(f+a0*q/8,0.05,n),new A.r(0.3,0.2,p),e)}else if(e)for(g=-q/2,a0=1;a0<6;++a0){u.aP(new A.r(g+a0*q/6,0.05,n),new A.r(0.3,0.2,p),B.ae4)
u.aP(new A.r(0,0.05,a0*p/6),new A.r(q,0.2,0.3),B.ae4)}u.x=0
g=f7==="hall"
if(g){a1=Math.min(q*0.5,p*1.5)
a2=p-14
f=-a1/2
e=a1/2
r.push(new A.fM(C.a([new A.r(f,0.5,14),new A.r(e,0.5,14),new A.r(e,0.5,a2),new A.r(f,0.5,a2)],x.o),0,A.hsC(),900,900*(a2-14)/a1,60,-1,i,!1))}u.f=0
u.b=j.$2(f3,300)
a3=u.x=$.dR=$.dR+1
u.hn(new A.r(0,65,-0.6),new A.r(m,130,1.2),o[0],3)
u.x=0
u.b=j.$2(f3,301)
a4=u.x=$.dR=$.dR+1
f=-q
e=f/2
u.hn(new A.r(e-0.6,65,n),new A.r(1.2,130,p),o[1],3)
u.x=0
u.b=j.$2(f3,302)
a5=u.x=$.dR=$.dR+1
d=q/2
u.hn(new A.r(d+0.6,65,n),new A.r(1.2,130,p),o[2],3)
u.x=0
t.n(0,300,B.eai)
t.n(0,301,B.eam)
t.n(0,302,B.eav)
if(f9){u.b=0
u.hn(new A.r(0,65,p+0.6),new A.r(m,130,1.2),o[0],3)}u.f=u.b=0
u.x=a3
u.aY(new A.r(0,2.5,0.4),new A.r(q,5,0.8),B.kz,0.1)
u.x=a4
u.aY(new A.r(e+0.4,2.5,n),new A.r(0.8,5,p),B.kz,0.1)
u.x=a5
u.aY(new A.r(d-0.4,2.5,n),new A.r(0.8,5,p),B.kz,0.1)
u.x=0
u.f=f9?0:3
u.b=j.$2("ceiling",320)
if(f9)o=1
else o=g1==="ceiling"?0.6:0.4
u.d=o
u.hn(new A.r(0,130.6,n),new A.r(m,1.2,h),B.axj[f8.as],2)
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
a6=D.d.b5(h,new A.fu9())?"left":"right"
if(!g){o=new A.fuk()
a7=p*0.55
if(f9)D.d.v(v,A.o9(o.$0(),0,3.141592653589793,new A.r(0,0,p+0.2)))
D.d.v(v,a6==="right"?A.o9(o.$0(),0,-1.5707963267948966,new A.r(d,0,a7)):A.o9(o.$0(),0,1.5707963267948966,new A.r(e,0,a7)))}for(o=f8.ax,m=f8.at,a0=0;a0<h.length;++a0){a8=h[a0]
if(a8.a)continue
a9=o.h(0,a0)
if(a9==null)a9=m.t(0,a0)?1.25:0
b0=C.a([],w)
b1=new A.fk(b0)
b1.f=1
b1.x=$.dR=$.dR+1
b2=b1.b=600+a0
b1.aP(B.h5x,B.h5g,B.kz)
b3=C.a([],w)
b4=new A.fk(b3)
b4.r=!0
b4.b=b2
if(a9>0.04){b1.b=0
b5=A.hWq(a8.d)
b6=b5.a
b1.aP(B.h3L,B.h0o,b6)
b1.aP(B.h4N,B.hb5,b5.b)
b7=C.ar(b6,D.w,0.25)
b7.toString
b1.aP(B.h3W,B.h99,b7)
b8=-a9
b7=A.vw(B.hb0,b8)
b4.wm(new A.r(-12.5+b7.a,0+b7.b,1.2+b7.c),B.h_3,B.vy,0.15,b8)}else{b1.aY(B.h3Z,B.h3_,B.vy,0.15)
b1.aY(B.h46,B.h4s,B.EP,0.8)
b1.aP(B.h4u,B.aWx,B.Mu)
b1.aP(B.hax,B.aWx,B.Mu)}b7=new A.ful(a8,q,p)
D.d.v(v,b7.$1(b0))
D.d.v(v,b7.$1(b3))
t.n(0,b2,new A.cW("Door","Tap the door to go through it.",B.aUZ,90))}for(o=f8.x,m=o.length,l=0;l<o.length;o.length===m||(0,C.M)(o),++l){b9=o[l]
b0=b9.b
b2=B.hw.h(0,b0)
b2.toString
b3=C.a([],w)
c0=new A.fk(b3)
c0.r=!0
c0.f=b0==="rug"?1:2
b7=100+b9.a
c0.b=j.$2("furniture",b7)
A.h1p(c0,b0,B.zc[b9.f])
D.d.v(v,A.o9(A.i1i(b3,0.8),0,b9.e*3.141592653589793/2,new A.r(b9.c,0,b9.d)))
t.n(0,b7,new A.cW(b2.a,y.M,new A.r(b9.c,12,b9.d),90))}u.f=2
u.r=!0
c1=p*0.5
w=C.T(h)
o=d-10
c2=D.k.E(new C.cQ(new C.Z(h,new A.fua(),w.k("Z<1>")),new A.fub(),w.k("cQ<1,L>")).cI(0,e+30,new A.fuc())+24,e+10,o)
c3=f8.go==="fan"
c4=f8.ga5X()
c5=c4&&f8.gMb()&&f8.fy
u.b=703
if(c3){u.dM(new A.r(0,129.5,c1),new A.r(0,120,c1),1,B.ho,8)
u.dR(new A.r(0,120,c1),new A.r(0,113,c1),6,D.ja,0.5,14)
w=c5?B.o1:D.dv
u.dR(new A.r(0,113,c1),new A.r(0,110,c1),3.6,w,0.6,12)}else{w=c5?B.o1:D.dv
u.dR(new A.r(0,129.5,c1),new A.r(0,127,c1),7,w,0.6,16)}if(c5&&!c3){u.b=0
u.f=3
u.d=0.2
u.aEI(new A.r(0,127,c1),new A.r(0,0.5,c1),36,B.o1,!1,14)
u.d=1
u.f=2}c6=c3?"Ceiling fan":"Ceiling light"
if(!c4)c7="It has no power yet. "+(f8.p4.length!==0?"Tap it to wire it.":"The room still needs wiring: use the Wiring button.")
else if(!f8.gMb())c7="It is ready: wire the wall switch to turn it on."
else{w=f8.fy?"It is on. Tap the wall switch (or tap this) to turn it off.":"It is off. Tap the wall switch (or tap this) to turn it on."
c7=w}t.n(0,703,new A.cW(c6,c7,new A.r(0,122,c1),80))
w=f7==="bathroom"
m=!w
c8=!m||f7==="kitchen"||f8.p4==="gfci"
h=f8.gani()
b0=c8?f4:f5
b2=f8.p4.length!==0||f8.Il(1)
b3=c8?f4:f5
b3=C.a([new C.ea([0,700,f/4,h,b0]),new C.ea([1,701,q/4,b2,b3])],x.az)
for(h=f8.id,a0=0;a0<h.length;++a0){f=h[a0]
b0=f.a
if(b0!=="switch"){b2=f.c
b0=b2.c>=2&&A.L4(A.t1(b0),b2).a==="ok"
b2=h[a0].a==="gfci"?"Added GFCI outlet":"Added outlet"
b3.push(new C.ea([2+a0,800+a0,f.b,b0,b2]))}}u.f=1
u.r=!1
for(f=b3.length,b0=f8.fx,l=0;l<b3.length;b3.length===f||(0,C.M)(b3),++l){b2=b3[l].a
a0=b2[0]
c9=b2[1]
d0=b2[2]
d1=b2[3]
d2=b2[4]
u.x=$.dR=$.dR+1
u.b=c9
u.e=0.4
u.d=0.55
d3=2
if(!d1)if(a0<2){b2=f8.p4
if(b2.length!==0)b2=d3
else{b2=f8.CW
if(b2!=null)b2=b2.bhI(a0)
else b2=f8.ay?0:2}d3=b2}else d3=0
if(d1)b2=D.be
else b2=d3===1?D.aD:D.aw
u.aP(new A.r(d0,14,0.25),B.h12,b2)
u.d=1
u.e=0
b2=d1?B.Mj:D.ja
u.aY(new A.r(d0,14,0.9),B.h5Y,b2,0.25)
u.b=0
for(d4=0;d4<2;++d4)for(b2=14+F.je[d4]*2.8,d5=0;d5<2;++d5)u.aP(new A.r(d0+B.QZ[d5],b2,1.7),B.haS,B.agl)
u.aP(new A.r(d0,14,1.7),B.h5W,D.dv)
u.x=0
if(!d1)b2="This one is not wired yet. Tap it to wire it."
else b2=b0.h(0,a0)==null?"Tap it to plug something in.":"Tap it to plug something else in, or to unplug."
t.n(0,c9,new A.cW(d2,b2,new A.r(d0,14,2),60))}f=C.a([new C.bj(702,c2,f8.gMb())],x.al)
for(a0=0;a0<h.length;++a0){b2=h[a0]
b7=b2.a
if(b7==="switch"){d6=b2.c
b7=d6.c>=2&&A.L4(A.t1(b7),d6).a==="ok"
f.push(new C.bj(800+a0,b2.b,b7))}}for(h=f.length,l=0;l<f.length;f.length===h||(0,C.M)(f),++l){b2=f[l]
d0=b2.b
d1=b2.c
u.x=$.dR=$.dR+1
c9=u.b=b2.a
u.e=0.4
u.d=0.55
d7=2
if(!d1)if(c9===702){b2=f8.p4
if(b2.length!==0)b2=d7
else{b2=f8.CW
if(b2!=null)b2=b2.bhI(3)
else b2=f8.ay?0:2}d7=b2}else d7=0
if(d1)b2=D.be
else b2=d7===1?D.aD:D.aw
u.aP(new A.r(d0,48,0.25),B.h2L,b2)
u.d=1
u.e=0
b2=d1?B.Mj:D.ja
u.aY(new A.r(d0,48,0.9),B.h24,b2,0.25)
u.aP(new A.r(d0,f8.fy&&d1?49.2:46.8,1.9),B.h1W,B.ai7)
u.x=0
if(!d1)b2="Not wired yet. Tap it to wire it."
else if(f8.fy)b2="On. Tap to turn the "+(c3?"fan":"light")+" off."
else b2="Off. Tap to turn the "+(c3?"fan":"light")+" on."
t.n(0,c9,new A.cW("Light switch",b2,new A.r(d0,48,2),60))}if(f8.p4.length===0&&!f8.gkJ()){if(f8.p4.length===0)h=f8.gkJ()
else h=!0
if(h)d8=D.Z
else{h=C.a([],x.s)
if(!f8.gani())h.push("outlet 1")
if(!(f8.p4.length!==0||f8.Il(1)))h.push("outlet 2")
if(!f8.ga5X())h.push(f8.go==="fan"?"ceiling fan":"ceiling light")
if(!f8.gMb())h.push("switch")
d8=h}h=d8.length===0?"\u26a1 No power: needs wiring":"\u26a1 Still to wire: "+D.d.aH(d8,", ")
s.push(new A.hf(new A.r(0,104,c1),h,D.by,0))}h=!1
if(f8.p4.length!==0)if(!f8.gz3()){h=f8.p4
h=!(h==="ptrap"||h==="faucet")}if(h)s.push(new A.hf(new A.r(0,40,14),"\ud83d\udc46 Tap the red one to wire it",D.by,0))
u.f=2
u.r=!0
for(h=b3.length,f=x.o,b2=f8.a,l=0;l<b3.length;b3.length===h||(0,C.M)(b3),++l){b7=b3[l].a
a0=b7[0]
d0=b7[2]
d1=b7[3]
d9=b0.h(0,a0)
if(d9==null||!d1)continue
e0=A.aP7(d9)
b7=u.b=720+a0
u.jg(C.a([new A.r(d0,12,1.8),new A.r(d0,6,3),new A.r(d0,2,11)],f),0.3,B.Yb,!1,0.2,6)
d6=e0.d
e1=d6<=0
if(!e1||e0.e){b8=d6*0.56
e2=$.dR+1
u.x=$.dR=e2
u.aY(new A.r(d0,2,15),new A.r(d6*0.45,4,14),B.ho,0.3)
u.aY(new A.r(d0,8,15),B.h0u,B.ho,0.3)
e3=12+b8/2
u.aY(new A.r(d0,e3,15),new A.r(d6,b8,3),E.Fe,0.5)
d6=(d6-3.5)/2
e4=d0-d6
e5=(b8-3.5)/2
e6=e3+e5
d6=d0+d6
e5=e3-e5
r.push(new A.fM(C.a([new A.r(e4,e6,16.6),new A.r(d6,e6,16.6),new A.r(d6,e5,16.6),new A.r(e4,e5,16.6)],f),b7,new A.fud(a0*7+b2),320,180,9,2,e2,!0))
u.x=0}else{d6=e0.a
if(d6==="lamp"){u.dR(new A.r(d0,0,14),new A.r(d0,1,14),6,B.X9,0.4,14)
u.dR(new A.r(d0,1,14),new A.r(d0,22,14),1,B.Bk,0.5,8)
d6=f8.fy?B.o1:K.Yj
u.yN(new A.r(d0,20,14),new A.r(d0,32,14),9,d6,!1,!0,5.5,0.2,16)}else{u.aY(new A.r(d0,9,15),B.fXx,B.nQ,0.1)
if(d6==="toaster"){u.aY(new A.r(d0,23,15),B.fXq,B.jF,0.8)
u.aP(new A.r(d0,28.2,15),B.h78,B.ahz)}else{u.BB(new A.r(d0-7,21,15),new A.r(d0+7,21,15),3.6,B.Mc,3,0.6,12)
u.aY(new A.r(d0-8,14.5,15),B.h4o,B.Mc,0.6)}}}d6=!e1||e0.e?"It is playing NGMY ads. Tap it to watch full screen with the remote.":"It is plugged in and running. Tap the outlet to unplug it or plug in something else."
t.n(0,b7,new A.cW(e0.b,d6,new A.r(d0,16,14),90))}u.f=1
u.r=!1
e7=new A.fuf(f8,u,q,r,t)
e7.$2(f8.k1,0)
if(g){e7.$2(f8.k2,1)
e7.$2(f8.k1,2)
h=f8.k2
e7.$2(h==null?f8.k1:h,3)}if(g)for(e8=p-14,h=d-14,a0=0;a0<4;++a0){e9=(D.o.F(a0,2)===0?-1:1)*h
f0=a0<2?14:e8
f1=Math.atan2(-e9,-(n-f0)*-1)
u.f=2
u.r=!1
u.x=$.dR=$.dR+1
g=19e3+a0
u.b=g
u.aP(new A.r(e9,125,f0),B.h_w,D.ja)
u.wm(new A.r(e9,118,f0),B.fWG,D.bO,0.4,f1)
u.wm(new A.r(e9+Math.sin(f1)*8.5,118,f0+Math.cos(f1)*8.5),B.h0t,D.au,0.6,f1)
u.fo(new A.r(e9-Math.sin(f1)*5+Math.cos(f1)*3,122,f0-Math.cos(f1)*5-Math.sin(f1)*3),1.4,D.aw,3,5)
u.b=u.x=0
t.n(0,g,new A.cW("Hall camera","Tap it and you look from here, like your eyes.",new A.r(e9,118,f0),60))}u.f=2
u.r=!0
if(!m||f7==="kitchen"){f7=f8.p4
f7=f7.length===0||f7==="ptrap"||f7==="faucet"}else f7=!1
if(f7){d1=f8.gjO()
f7=new A.fum(u)
if(w){f2=e+17
if(d1){u.b=710
u.BB(new A.r(6,0.5,14),new A.r(6,15,14),8,B.B2,5.6,0.8,18)
u.dR(new A.r(6,15,14),new A.r(6,16,14),9,B.Ml,0.8,18)
u.aY(new A.r(6,21,5),B.fXJ,B.B2,0.8)
u.aY(new A.r(6,28,5),B.h3B,B.Ml,0.8)}else{u.b=710
u.d=0.3
u.f=3
u.aP(new A.r(6,14,9),B.fXA,D.b1)
u.d=1
u.f=2
f7.$2(-4,8)}u.b=711
u.aY(new A.r(34,14,10),B.fYY,B.nQ,0.1)
u.aY(new A.r(34,29,10),B.fZ4,B.XL,0.4)
if(d1){u.dR(new A.r(34,29.3,10),new A.r(34,30.1,10),6.5,D.c,0.6,18)
u.bjx(C.a([new A.r(34,30,4),new A.r(34,36,4),new A.r(34,38,7)],f),0.6,B.jF,0.9,8)}else{f7.$2(28,18)
f7.$2(40,18)}u.b=712
if(d1){u.aY(new A.r(f2,8,38),B.aVt,B.YD,0.7)
u.aY(new A.r(f2,16.2,38),B.h93,B.Xw,0.8)
u.dR(new A.r(f2,30,3),new A.r(f2,52,3),0.7,B.jF,0.9,8)
u.dR(new A.r(f2,52,3),new A.r(f2,52,10),0.7,B.jF,0.9,8)}else{u.d=0.3
u.f=3
u.aP(new A.r(f2,8,38),B.aVt,D.b1)
u.d=1
u.f=2
f7.$2(f2-4,34)
f7.$2(f2+4,34)}f7=d1?"Fitted on its flange with a wax ring, and the supply hose joins the shut-off valve.":"There is no toilet yet: only the flange and the water stub. Use the Plumbing button to fit it."
t.n(0,710,new A.cW("Toilet",f7,new A.r(6,14,10),70))
f7=d1?"The faucet, the hoses and the P-trap are fitted.":"The sink is not plumbed. Use the Plumbing button."
t.n(0,711,new A.cW("Vanity sink",f7,new A.r(34,28,10),70))
f7=d1?"The bath is in and connected.":"The bath is not connected yet."
t.n(0,712,new A.cW("Bath",f7,new A.r(f2,10,38),90))
if(!d1)s.push(new A.hf(new A.r(0,40,14),f6,D.bk,0))}else{u.b=0
u.aY(new A.r(e+15,36,14),B.fYB,B.ag7,0.6)
u.aP(new A.r(e+28.5,36,14.4),B.h5F,D.dv)
u.aY(new A.r(o,15,14),B.fY8,B.aex,0.1)
u.aY(new A.r(o,31,14),B.fYj,B.ho,0.5)
u.aY(new A.r(d-15,32.4,14),B.aVT,D.hV,0.3)
u.aY(new A.r(d-5,32.4,14),B.aVT,D.hV,0.3)
u.b=713
u.aY(new A.r(30,15,14),B.fZF,B.nQ,0.1)
u.aY(new A.r(30,31,14),B.fZJ,B.LZ,0.5)
if(d1){u.dR(new A.r(30,32.1,14),new A.r(30,32.7,14),8,B.F8,0.8,18)
u.bjx(C.a([new A.r(30,32,5),new A.r(30,42,5),new A.r(30,44,9),new A.r(30,44,13)],f),0.7,B.jF,0.9,8)}else{f7.$2(22,18)
f7.$2(38,18)}f7=d1?"The faucet, the hoses and the drain are fitted.":"The kitchen sink is not plumbed yet. Use the Plumbing button."
t.n(0,713,new A.cW("Kitchen sink",f7,new A.r(30,30,14),70))
if(!d1)s.push(new A.hf(new A.r(30,48,14),f6,D.bk,0))}}for(f7=D.d.gaf(g3),w=new C.f5(f7,new A.fue(f8));w.C();){o=f7.gR(0)
t.n(0,900+o.a,new A.cW(o.r,"Tap to see how they are, feed them or give medicine.",new A.r(o.c,36,o.d),90))}return new A.tM(v,t,s,r,new C.cw([e,d,0,p]),0)},
kF(d,e,f,g,h,i,j,k,l){var w=-h/2,v=i/2,u=h/2,t=-i/2
d.cVH(e.aa(0,f.aJ(0,w)).aa(0,g.aJ(0,v)),e.aa(0,f.aJ(0,u)).aa(0,g.aJ(0,v)),e.aa(0,f.aJ(0,u)).aa(0,g.aJ(0,t)),e.aa(0,f.aJ(0,w)).aa(0,g.aJ(0,t)),j,k,l)},
hZp(d6,d7,d8,d9,e0,e1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5=-158,c6=1000,c7=x.z,c8=C.a([],c7),c9=new A.fk(c8),d0=x.S,d1=C.U(d0,x.q),d2=C.a([],x.E),d3=d6.gew(0),d4=d6.gho(0),d5=new A.fnz(d8)
c9.f=0
c9.b=d5.$2("floor",310)
c9.hn(new A.r(0,-0.6,d4/2-60),new A.r(d3*2.5,1.2,d4*2.5),B.Xc,5)
d1.n(0,310,B.eaq)
c9.b=0
c9.f=1
c9.aP(new A.r(0,0.15,60),B.h1U,E.ES)
for(w=0;w<6;++w)c9.aP(new A.r(0,0.35,8+w*22),B.h6_,B.bnt)
c9.f=2
v=$.dR+1
c9.x=$.dR=v
c9.hn(B.fW6,B.fYp,B.LU,3)
c9.aP(B.fVC,B.fYq,B.adN)
u=new A.fnA(c9)
t=new A.fnv(c9)
for(s=0;s<4;++s){r=B.dkv[s]
u.$5(B.f1,B.hC,B.ip,r,62)
u.$5(B.f1,B.hC,B.ip,r,122)}t.$5(B.f1,B.hC,B.ip,0,600)
for(s=0;s<2;++s){r=B.azN[s]
u.$5(B.aac,B.qL,B.tb,r,62)
u.$5(B.aac,B.qL,B.tb,r,122)}t.$5(B.aac,B.qL,B.tb,0,0)
for(s=0;s<2;++s){q=B.a4A[s]
u.$5(B.fWQ,B.tb,B.hC,q,62)
u.$5(B.h7S,B.ip,B.qL,-q,62)}p=C.a([],c7)
new A.fk(p).n7(B.f1,B.fYy,B.LX,0.1,2)
c9.a6V(B.h7I,B.h6q,B.h5E,B.LU,B.hC,!1)
c9.a6V(B.h5K,B.h_E,B.h63,B.LU,B.qL,!1)
c9.x=0
c9.r=!0
D.d.v(c8,A.o9(p,0.5,0,B.fUN))
D.d.v(c8,A.o9(p,-0.5,0,B.fUO))
c9.aP(B.fUQ,B.fYx,B.XH)
c9.aP(B.h07,B.fXj,B.ah8)
c9.aP(B.h08,B.aVe,B.q0)
c9.aP(B.fVo,B.h_9,E.ES)
c9.dM(B.h86,B.h87,2.2,B.kz,8)
c9.dM(B.fYa,B.fYb,2.2,B.kz,8)
c9.aY(B.fWf,B.h_i,B.LX,0.1)
d1.n(0,600,B.eb1)
p=x.a
o=C.a([],p)
n=new A.fnw(o,v)
n.$4(B.h1F,B.h6a,B.h6S,B.h4L)
n.$5$poster(B.h03,B.fZT,B.h0U,B.h6G,1)
n.$5$poster(B.h2C,B.h2R,B.h1i,B.h6D,2)
n.$5$poster(B.h6N,B.hbd,B.h4j,B.h69,0)
c9.r=!0
m=C.U(d0,d0)
for(d0=d6.x,l=d0.length,s=0;s<d0.length;d0.length===l||(0,C.M)(d0),++s){k=d0[s]
j=k.a
i=100+j
if(e1.t(0,i))continue
h=k.b
if(D.d.t(B.HJ,h)){d1.n(0,i,new A.cW(B.hw.h(0,h).a,"It wanders about. Move it with the arrow buttons or take it out.",new A.r(k.c,12,k.d),140))
continue}g=B.hw.h(0,h)
g.toString
f=C.a([],c7)
e=new A.fk(f)
d=e.r=!0
e.f=D.d.t(B.a4L,h)?1:2
a0=h==="hospital"
e.b=(!a0?h==="shop":d)?i:d5.$2("furniture",i)
A.h1p(e,h,B.zc[k.f])
if(f.length!==0)m.n(0,j,D.d.gI(f).z)
D.d.v(c8,A.o9(f,0,k.e*3.141592653589793/2,new A.r(k.c,0,k.d)))
if(a0)j="The hospital: tap it to see the beds and treat the patients."
else j=h==="shop"?"The shop: tap it to buy food and medicine.":y.M
d1.n(0,i,new A.cW(g.a,j,new A.r(k.c,12,k.d),140))}a1=C.a([],x._)
for(l=D.d.gaf(d0),j=new C.f5(l,new A.fmX()),i=d6.k3;j.C();){h=l.gR(0)
g=h.a
a2=i.t(0,g)
f=h.b==="pole"
d=h.c
a0=h.d
a3=f?new A.r(d+20,86,a0):new A.r(d,55,a0)
d=C.a([],c7)
a4=new A.fk(d)
a0=f?4.6:4.2
a5=a2?D.e6:B.o1
a4.fT(a3,a0,a5,3,6,a2?0.1:0)
if(!a2){a4.d=0.2
a4.fT(a3,10,B.o1,2,6,0)
a4.d=1}D.d.v(c8,d)
if(a2)d2.push(new A.hf(new A.r(a3.a+0,a3.b+14,a3.c+0),"\u26a1 Light out: tap to go and fix it",D.by,2e4+g))
if(f)a1.push(h)}D.d.aW(a1,new A.fmY())
for(l=x.o,w=0;a6=w+1,a6<a1.length;w=a6){a7=a1[w]
a8=a1[a6]
if(Math.abs(a7.d-a8.d)>1||Math.abs(a8.c-a7.c)>170)continue
j=C.a([],c7)
a9=new A.fk(j)
for(s=0;s<3;++s){b0=B.azJ[s]
i=a7.c
h=a7.d
g=a8.c
a9.jg(C.a([new A.r(i+b0,121,h),new A.r((i+g)/2+b0,117,h),new A.r(g+b0,121,h)],l),0.35,D.au,!1,0,4)}D.d.v(c8,j)}for(j=D.d.gaf(d0),i=new C.f5(j,new A.fmZ(d6)),h=d6.cy;i.C();){g=j.gR(0)
f=g.c
d=g.b==="hq"?190:130
a0=g.d
g=g.a
d2.push(new A.hf(new A.r(f,d,a0+40),"\u26a1 Level "+C.w(h.h(0,g))+" has no power: tap to go and fix it",D.by,2e4+g))}for(j=D.d.gaf(d0),i=new C.f5(j,new A.fn9(d6));i.C();){h=j.gR(0)
g=h.b
f=B.hw.h(0,g)
f.toString
d=h.c
g=g==="bighouse"?120:82
d2.push(new A.hf(new A.r(d,g,h.d),"\u26a1 No power: tap to go in and fix it",D.by,2e4+h.a))
g=C.a([],c7)
b1=new A.fk(g)
b1.d=0.45
d=h.c
b1.aP(new A.r(d,30,h.d),new A.r(f.c+2,60,f.d+2),D.dd)
b1.d=1
D.d.v(c8,g)}if(d6.c==="outside")D.d.v(c8,A.i4e())
b2=C.a([],p)
for(c7=D.d.gaf(d0),d0=new C.f5(c7,new A.fnk());d0.C();){p=c7.gR(0)
d3=new A.fny(p.e*3.141592653589793/2,p)
b3=m.h(0,p.a)
if(b3==null)b3=0
j=p.b
if(j==="billboard"){b2.push(new A.fM(C.a([d3.$3(-33,62.5,2),d3.$3(33,62.5,2),d3.$3(33,31.5,2),d3.$3(-33,31.5,2)],l),0,new A.fnp(p),960,450,4,2,b3,!1))
b2.push(new A.fM(C.a([d3.$3(33,62.5,-2),d3.$3(-33,62.5,-2),d3.$3(-33,31.5,-2),d3.$3(33,31.5,-2)],l),0,new A.fnq(p),960,450,4,2,b3,!1))}else{i=j==="townsign"
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
b2.push(new A.fM(C.a([d3.$3(p,j,b7),d3.$3(b4,j,b7),d3.$3(b4,i,b7),d3.$3(p,i,b7)],l),0,new A.fnr(b8),b9,c0,4,2,b3,!1))
h=-b7
b2.push(new A.fM(C.a([d3.$3(b4,j,h),d3.$3(p,j,h),d3.$3(p,i,h),d3.$3(b4,i,h)],l),0,new A.fns(b8),b9,c0,4,2,b3,!1))}else if(j==="adboard"){b2.push(new A.fM(C.a([d3.$3(c5,195,3.6),d3.$3(158,195,3.6),d3.$3(158,90,3.6),d3.$3(c5,90,3.6)],l),0,new A.fnt(p),1280,424,4,2,b3,!1))
b2.push(new A.fM(C.a([d3.$3(158,195,-3.6),d3.$3(c5,195,-3.6),d3.$3(c5,90,-3.6),d3.$3(158,90,-3.6)],l),0,new A.fnu(p),1280,424,4,2,b3,!1))}else if(j==="tower"){c1=210+D.o.F(B.zc[p.f].l(),5)*24
j=c1-8
i=c1-54
b2.push(new A.fM(C.a([d3.$3(-40,j,35.9),d3.$3(40,j,35.9),d3.$3(40,i,35.9),d3.$3(-40,i,35.9)],l),0,new A.fn_(p),800,460,8,2,b3,!1))
b2.push(new A.fM(C.a([d3.$3(40,j,-35.9),d3.$3(-40,j,-35.9),d3.$3(-40,i,-35.9),d3.$3(40,i,-35.9)],l),0,new A.fn0(p),800,460,8,2,b3,!1))
b2.push(new A.fM(C.a([d3.$3(50.9,j,28),d3.$3(50.9,j,-28),d3.$3(50.9,i,-28),d3.$3(50.9,i,28)],l),0,new A.fn1(p),640,460,8,2,b3,!1))
b2.push(new A.fM(C.a([d3.$3(-50.9,j,-28),d3.$3(-50.9,j,28),d3.$3(-50.9,i,28),d3.$3(-50.9,i,-28)],l),0,new A.fn2(p),640,460,8,2,b3,!1))
i=c1+58
j=c1+22
b2.push(new A.fM(C.a([d3.$3(-40,i,1.7),d3.$3(40,i,1.7),d3.$3(40,j,1.7),d3.$3(-40,j,1.7)],l),0,new A.fn3(p),960,400,8,2,b3,!1))
b2.push(new A.fM(C.a([d3.$3(40,i,-1.7),d3.$3(-40,i,-1.7),d3.$3(-40,j,-1.7),d3.$3(40,j,-1.7)],l),0,new A.fn4(p),960,400,8,2,b3,!1))}else if(j==="hq"){b2.push(new A.fM(C.a([d3.$3(-70,108,45.9),d3.$3(70,108,45.9),d3.$3(70,52,45.9),d3.$3(-70,52,45.9)],l),0,new A.fn5(),c6,400,8,2,b3,!1))
b2.push(new A.fM(C.a([d3.$3(-48,215,30.2),d3.$3(48,215,30.2),d3.$3(48,175,30.2),d3.$3(-48,175,30.2)],l),0,new A.fn6(),900,380,8,2,b3,!1))
b2.push(new A.fM(C.a([d3.$3(70,108,-45.9),d3.$3(-70,108,-45.9),d3.$3(-70,52,-45.9),d3.$3(70,52,-45.9)],l),0,new A.fn7(),c6,400,8,2,b3,!1))
b2.push(new A.fM(C.a([d3.$3(48,215,-30.2),d3.$3(-48,215,-30.2),d3.$3(-48,175,-30.2),d3.$3(48,175,-30.2)],l),0,new A.fn8(),900,380,8,2,b3,!1))
b2.push(new A.fM(C.a([d3.$3(-54,328,1.7),d3.$3(54,328,1.7),d3.$3(54,294,1.7),d3.$3(-54,294,1.7)],l),0,new A.fna(p),c6,360,8,2,b3,!1))
b2.push(new A.fM(C.a([d3.$3(54,328,-1.7),d3.$3(-54,328,-1.7),d3.$3(-54,294,-1.7),d3.$3(54,294,-1.7)],l),0,new A.fnb(p),c6,360,8,2,b3,!1))
b2.push(new A.fM(C.a([d3.$3(85.9,118,36),d3.$3(85.9,118,-36),d3.$3(85.9,62,-36),d3.$3(85.9,62,36)],l),0,new A.fnc(p),720,560,8,2,b3,!1))
b2.push(new A.fM(C.a([d3.$3(-85.9,118,-36),d3.$3(-85.9,118,36),d3.$3(-85.9,62,36),d3.$3(-85.9,62,-36)],l),0,new A.fnd(p),720,560,8,2,b3,!1))}else if(j==="store")b2.push(new A.fM(C.a([d3.$3(-54,85,37.7),d3.$3(54,85,37.7),d3.$3(54,67,37.7),d3.$3(-54,67,37.7)],l),0,new A.fne(),900,150,6,2,b3,!1))
else if(j==="ubstation"){b2.push(new A.fM(C.a([d3.$3(40,106,31.9),d3.$3(76,106,31.9),d3.$3(76,86,31.9),d3.$3(40,86,31.9)],l),0,new A.fnf(),480,270,8,2,b3,!1))
b2.push(new A.fM(C.a([d3.$3(76,106,28.1),d3.$3(40,106,28.1),d3.$3(40,86,28.1),d3.$3(76,86,28.1)],l),0,new A.fng(),480,270,8,2,b3,!1))}else if(j==="dmv")b2.push(new A.fM(C.a([d3.$3(-50,85,38.6),d3.$3(50,85,38.6),d3.$3(50,67,38.6),d3.$3(-50,67,38.6)],l),0,new A.fnh(),900,160,8,2,b3,!1))
else if(j==="gasstation")b2.push(new A.fM(C.a([d3.$3(-86,107,35.7),d3.$3(-54,107,35.7),d3.$3(-54,85,35.7),d3.$3(-86,85,35.7)],l),0,new A.fni(),480,330,6,2,b3,!1))
else for(c2=0;c2<2;++c2){c3=c2===0?-40:40
j=c3-26
i=c3+26
b2.push(new A.fM(C.a([d3.$3(j,70,60.7),d3.$3(i,70,60.7),d3.$3(i,40,60.7),d3.$3(j,40,60.7)],l),0,new A.fnj(p,c2),720,520,9,2,b3,!1))}}}for(c7=D.d.gaf(e0),d0=new C.f5(c7,new A.fnl(d6));d0.C();){p=c7.gR(0)
d2.push(new A.hf(new A.r(p.c,82,p.d),p.Q,D.cO,0))}for(c7=D.d.gaf(e0),d0=new C.f5(c7,new A.fnm(d6));d0.C();){p=c7.gR(0)
d2.push(new A.hf(new A.r(p.c,80,p.d),"\ud83d\udcde Help!",D.by,0))}c7=d7===0
d0=c7?"\u2705 The house is finished":"\ud83c\udfe0 "+d7+" rooms still need work"
d2.push(new A.hf(B.fV5,d0,c7?D.cV:D.dW,0))
c4=c9.x=$.dR=$.dR+1
for(s=0;s<2;++s){r=B.azN[s]
c9.dM(new A.r(r,0,-118),new A.r(r,215,-118),3,D.ja,8)}c9.aY(B.Ah,B.fYv,D.au,0.3)
c9.x=0
o.push(new A.fM(B.cN0,0,new A.fnn(),c6,336,4,2,c4,!1))
o.push(new A.fM(B.dh5,0,new A.fno(),c6,336,4,2,c4,!1))
c7=C.C(o,x.K)
D.d.v(c7,b2)
return new A.tM(c8,d1,d2,c7,null,4000)},
i5a(a4,a5,a6,a7,a8,a9,b0,b1,b2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=x.z,a2=C.a([],a1),a3=new A.fk(a2)
a3.r=!0
if(a4.c==="outside"){w=b0!=null
if(w&&b0.a===a4.a)A.wI(a3,b0,a5,b1,!0,0,null)
if(a6&&w&&b0.a===a4.a){w=C.a([],a1)
v=b0.b
u=b0.d
new A.fk(w).aP(new A.r(v+Math.sin(u)*9,46+b0.y,b0.c+Math.cos(u)*9),B.aVd,B.jp)
D.d.v(a2,w)}if(a8!=null){w=C.a([],a1)
t=new A.fk(w)
t.r=!0
v=a8.a
A.h1p(t,v[0],B.zc[v[4]])
D.d.v(a2,A.o9(w,0,v[3]-1.5707963267948966,new A.r(v[1],0,v[2])))}for(w=D.d.gaf(a4.x),v=new C.f5(w,new A.fxj()),u=a5*6,s=a9==="furniture";v.C();){r=w.gR(0)
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
A.hjU(i,r.b,B.zc[r.f],Math.sin(u+q)*0.5)
D.d.v(a2,A.o9(j,0,k,new A.r(o+n*10,0,m+l*10)))}for(w=D.d.gaf(b2),v=new C.f5(w,new A.fxk(a4)),u=a4.a;v.C();){s=w.gR(0)
r=s.c
q=s.d
o=s.e
n=s.f
A.wI(a3,new A.xY(u,r,q,o,!1,!1,!1,!1,!1,0,!1,!1,"","",-1,0,-1,0),a5,n,!1,900+s.a,n.c)
A.hTb(a3,s,a5)}for(w=a7.length,h=0;h<a7.length;a7.length===w||(0,C.M)(a7),++h){g=a7[h]
v=g.b
s=g.c
r=g.d
A.wI(a3,new A.xY(u,v,s,r,g.f,!1,!1,!1,!1,0,!1,!1,"","",-1,0,-1,g.e),a5,g.w,!1,0,g.x)
if(g.r){q=C.a([],a1)
new A.fk(q).aP(new A.r(v+Math.sin(r)*9,46,s+Math.cos(r)*9),B.fX4,F.fw)
D.d.v(a2,q)}}return a2}if(b0!=null&&b0.a===a4.a)A.wI(a3,b0,a5,b1,!0,0,null)
for(a1=D.d.gaf(b2),w=new C.f5(a1,new A.fxl(a4)),v=a4.a,u=a5*0.5;w.C();){s=a1.gR(0)
r=s.y
q=r>0
f=q?Math.sin(u+s.a)*r:0
r=s.c
o=s.d
if(q)n=Math.cos(u+s.a)>=0?1.5707963267948966:-1.5707963267948966
else n=s.x?0.5:s.e
A.wI(a3,new A.xY(v,r+f,o,n,q,!1,!1,!1,s.x,0,!1,!1,"","",-1,0,-1,0),a5,s.f,!1,900+s.a,null)}e=a4.gho(0)
if(a4.go==="fan"){d=a4.ga5X()&&a4.gMb()&&a4.fy?a5*7:0
a3.b=703
for(a1=e*0.5,a0=0;a0<4;++a0){p=d+a0*3.141592653589793/2
a3.wm(new A.r(Math.cos(p)*15,115,a1+Math.sin(p)*15),B.has,B.nQ,0.1,-p)}}return a2},
hWq(d){var w
A:{if(5===d){w=B.eJv
break A}if(9===d){w=B.eOy
break A}if(10===d){w=B.eBP
break A}if(11===d){w=B.ePw
break A}if(2===d||4===d||8===d){w=B.err
break A}w=B.eEt
break A}return w},
fte(b0,b1,b2,b3,b4,b5,b6,b7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9
for(w=b2.a,v=b2.b,u=b2.c,t=b1.a,s=b1.b,r=b1.c,q=b3.a,p=q*0.1,o=b3.b,n=o*0.1,m=b3.c,l=m*0.1,k=q*0.2,j=o*0.2,i=m*0.2,q*=0.3,o*=0.3,m*=0.3,h=-b4/2,g=b5-1,f=b5===1,e=0;e<b5;++e){d=f?0:h+b4*e/g
for(a0=b6.length,a1=s+v*d,a2=t+w*d+0,a3=r+u*d+0,a4=a2+p,a5=a3+l,a6=a2+k,a7=a3+i,a2+=q,a3+=m,a8=0;a8<b6.length;b6.length===a0||(0,C.M)(b6),++a8){a9=a1+b6[a8]
A.kF(b0,new A.r(a4,a9+n,a5),b2,B.e8,14,17,B.kz,b3,0)
A.kF(b0,new A.r(a6,a9+j,a7),b2,B.e8,11,14,b7,b3,0.6)
A.kF(b0,new A.r(a2,a9+o,a3),b2,B.e8,11,0.9,B.kz,b3,0)}}},
hko(a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0
A:{if("shop"===a2){w=B.eXb
break A}if("hospital"===a2){w=B.eX6
break A}if("firestation"===a2){w=B.eWO
break A}if("school"===a2){w=B.eWH
break A}w=B.eWq
break A}w=w.a
v=w[0]
u=w[1]
t=w[2]
s=w[3]
r=w[4]
q=u/2
p=v/2
a1.x=$.dR=$.dR+1
a1.hn(new A.r(0,t/2,0),new A.r(v,t,u),s,2)
a1.aP(new A.r(0,2.5,0),new A.r(v+3,5,u+3),B.adN)
w=a2==="hospital"
if(w)o=C.a([14,30,46],x.n)
else if(a2==="school"){n=C.a([14,32],x.n)
o=n}else{n=x.n
n=a2==="house2"?C.a([26],n):C.a([22],n)
o=n}m=D.o.E(D.k.bj(v/24),2,5)
n=a2==="firestation"
l=n?C.a([34],x.n):o
k=v-30
A.fte(a1,new A.r(0,0,q).aa(0,B.f1),B.hC,B.ip,k,m,l,B.hU)
j=q+0.4
if(n){A.kF(a1,new A.r(-14,17,j),B.hC,B.e8,34,34,D.hf,B.ip,0.2)
for(i=q+0.5,h=0;h<6;++h)A.kF(a1,new A.r(-14,4+h*6,i),B.hC,B.e8,33,0.8,D.dv,B.ip,0)
A.kF(a1,new A.r(24,15,j),B.hC,B.e8,14,30,B.vy,B.ip,0)}else{A.kF(a1,new A.r(0,14,q+0.3),B.hC,B.e8,18,28,B.kz,B.ip,0)
A.kF(a1,new A.r(0,13,j),B.hC,B.e8,14,26,B.vy,B.ip,0.2)}switch(a2){case"hospital":i=t-8
A.kF(a1,new A.r(0,i,j),B.hC,B.e8,30,9,D.by,B.ip,0)
j=q+0.5
A.kF(a1,new A.r(0,i,j),B.hC,B.e8,24,2.6,D.c,B.ip,0)
A.kF(a1,new A.r(0,i,j),B.hC,B.e8,2.6,7,D.c,B.ip,0)
break
case"shop":for(i=q+3,h=0;h<6;++h){g=(h&1)===0?D.aw:D.c
A.kF(a1,new A.r(-30+h*12,33,i),B.hC,B.e8,6,6,g,B.ip,0)}A.kF(a1,new A.r(0,t-4,j),B.hC,B.e8,36,6,a3,B.ip,0)
break
case"firestation":A.kF(a1,new A.r(0,t-5,j),B.hC,B.e8,40,7,D.bG,B.ip,0)
break
case"school":A.kF(a1,new A.r(0,t-5,j),B.hC,B.e8,40,7,D.bk,B.ip,0)
break}j=-q
A.fte(a1,new A.r(0,0,j),B.qL,B.tb,k,m,l,B.hU)
A.kF(a1,new A.r(0,13,j-0.4),B.qL,B.e8,14,26,B.vy,B.tb,0)
f=D.o.E(D.k.bj(u/24),1,3)
k=u-26
A.fte(a1,new A.r(p,0,0),B.tb,B.hC,k,f,l,B.hU)
i=-p
A.fte(a1,new A.r(i,0,0),B.ip,B.qL,k,f,l,B.hU)
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
d.aY(B.f1,new A.r(v+6,2.5,u*0.58),r,0.1)
n=a1.a
k=t+5
D.d.v(n,A.o9(w,0.42,0,new A.r(0,k,u*0.25)))
a0=-u
D.d.v(n,A.o9(w,-0.42,0,new A.r(0,k,a0*0.25)))
k=p+0.2
w=t+12
a1.a6V(new A.r(k,t,q),new A.r(k,t,j),new A.r(k,w,0),s,B.hC,!1)
i-=0.2
a1.a6V(new A.r(i,t,j),new A.r(i,t,q),new A.r(i,w,0),s,B.qL,!1)
if(a2==="school"){w=q-10
e.aP(new A.r(0,t+18,w),B.fXy,D.afv)
e.aP(new A.r(0,t+30,w),B.fYl,r)
e.dM(new A.r(0,t+31,w),new A.r(0,t+46,w),0.6,D.dv,6)
e.aP(new A.r(5,t+44,w),B.h6Q,D.aw)}else e.aP(new A.r(v*0.28,t+14,a0*0.1),B.h0V,B.ah8)}else{k=v+2
e.aY(new A.r(0,t+1.5,0),new A.r(k,3,u+2),r,0.05)
e.aP(new A.r(0,t+4,q+0.5),new A.r(k,4,1.4),a3)
if(w){w=v*0.25
k=-u*0.15
e.aP(new A.r(w,t+5,k),B.fYA,D.bs)
e.aP(new A.r(w,t+6.2,k),B.h73,D.c)}if(n){w=p-10
n=-u*0.2
e.aP(new A.r(w,t+16,n),B.fXi,B.ag_)
e.aP(new A.r(w,t+32,n),B.aVe,r)}}D.d.v(a1.a,g)},
i0l(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=d.f,f=d.e
d.f=1
d.e=0
if(e==="road"){d.GB(B.h3E,B.h4B,B.h2H,B.h4U,B.M8,B.e8)
d.e=90
for(w=0;w<2;++w){v=B.QZ[w]
u=v-0.7
t=v+0.7
d.GB(new A.r(-20,0.9,u),new A.r(20,0.9,u),new A.r(20,0.9,t),new A.r(-20,0.9,t),K.LN,B.e8)}for(w=0;w<2;++w){v=B.dkj[w]
u=v-0.8
t=v+0.8
d.GB(new A.r(-20,0.9,u),new A.r(20,0.9,u),new A.r(20,0.9,t),new A.r(-20,0.9,t),D.bO,B.e8)}d.f=g
d.e=f
return}d.GB(B.h4K,B.haN,B.h2F,B.h1n,B.M8,B.e8)
d.e=90
A:{if("roadturn"===e){u=B.dj1
break A}if("roadtee"===e){u=B.d0l
break A}u=B.cht
break A}for(t=u.length,w=0;w<t;++w){s=u[w]
r=s.a
q=s.b
for(s=q!==0,p=r!==0,o=30*r,n=30*q,m=0;m<2;++m){l=B.QZ[m]
k=p?o:l
j=s?n:l
i=p?36:1.4
h=s?36:1.4
d.aP(new A.r(k,0.95,j),new A.r(i,0.1,h),K.LN)}}d.f=g
d.e=f},
hjU(d,e,f,g){var w=new A.fdS(d,g)
switch(e){case"dog":d.aY(B.x2,B.ha8,f,0.05)
d.fo(B.h2_,3.4,f,4,8)
d.aP(B.h59,B.h0R,D.M2)
d.aP(B.h6v,B.aVZ,B.ho)
d.aP(B.haX,B.aVZ,B.ho)
d.dM(B.h7i,B.fUK,0.8,f,5)
w.$5(B.dhM,6,6,1.7,f)
break
case"cat":d.aY(B.Ai,B.h0M,f,0.05)
d.fo(B.fW8,2.7,f,4,8)
d.aP(B.h9E,B.aVh,f)
d.aP(B.h9I,B.aVh,f)
d.dM(B.fW7,B.fUC,0.7,f,5)
w.$5(B.dfr,4,4,1.2,f)
break
case"cow":d.aY(B.aae,B.fXe,D.bN,0.05)
d.aP(B.h9T,B.h9c,B.ho)
d.aP(B.h3l,B.h0P,B.ho)
d.aP(B.fV_,B.h1_,D.bN)
d.aP(B.fUR,B.hbf,D.nP)
d.aP(B.h1f,B.aVi,D.bO)
d.aP(B.haT,B.aVi,D.bO)
d.dM(B.fV2,B.fWa,0.7,B.ho,5)
w.$5(B.d43,11,11,3.2,D.bO)
break
case"sheep":d.fo(B.aad,8.5,D.pT,4,8)
d.fo(B.fUI,7,D.pT,4,8)
d.fo(B.fUE,3.4,B.ho,4,8)
w.$5(B.dhG,8,8,1.8,B.ho)
break
case"chicken":d.fo(B.Ai,4,f,4,8)
d.fo(B.fUp,2.2,f,3,6)
d.aP(B.fUz,B.h96,D.by)
d.aP(B.h27,B.h1I,D.aD)
d.aP(B.fWc,B.h_5,f)
w.$5(B.d27,3,3,0.8,D.aD)
break
case"horse":d.aY(B.fV6,B.fWO,f,0.1)
d.L3(B.fVg,B.fVx,4.2,f,3,8)
d.aP(B.fVz,B.h_B,f)
d.aP(B.fVI,B.h95,B.ho)
d.dM(B.fVl,B.fWb,1.8,B.ho,6)
w.$5(B.d1s,16,16,2.6,f)
break
default:d.aP(B.Ai,B.h0Y,f)}},
fs0(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=C.a([],x.z)
for(w=d.length,v=e.a,u=e.b,t=e.c,s=f.a,r=f.b,q=f.c,p=x.o,o=0;o<d.length;d.length===w||(0,C.M)(d),++o){n=d[o]
m=C.a([],p)
for(l=n.a,k=l.length,j=0;j<l.length;l.length===k||(0,C.M)(l),++j){i=l[j]
m.push(new A.r(s+(i.a-s)*v,r+(i.b-r)*u,q+(i.c-q)*t))}l=n.b
h.push(new A.lR(m,new A.r(l.a/v,l.b/u,l.c/t).goT(0),n.c,n.d,n.e,n.f,n.r,n.w,n.x,n.y,n.z))}return h},
hTb(d,e,f){var w,v,u,t,s,r=e.z
if(r.length===0)return
w=e.e
v=new A.fdI(e,Math.sin(w),Math.cos(w))
u=d.b
d.b=0
switch(r){case"feed":d.L3(v.$3(14,0,8),v.$3(14,9,8),4.5,B.nQ,5.5,10)
for(r=f*0.9,t=0;t<9;++t){s=D.k.F(r+t/9,1)
d.fT(v.$3(10+s*26,26-s*22,Math.sin(t*2.1)*4),0.9,D.ms,3,5,0)}break
case"cook":d.aY(v.$2(18,9),B.fYi,D.ja,0.2)
d.aP(v.$2(18,18.4),B.h0z,D.fo)
d.d=0.3
for(r=f*0.5,t=0;t<6;++t){s=D.k.F(r+t/6,1)
d.fT(v.$2(18+Math.sin(t*1.9)*3,22+s*22),2+s*4,D.EW,3,6,0)}d.d=1
break
case"wash":d.L3(v.$3(20,0,-10),v.$3(20,8,-10),4,D.aQ,5,10)
for(r=f*1.4,t=0;t<12;++t){s=D.k.F(r+t/12,1)
d.fT(v.$3(8+s*24,30-s*s*26,6),0.8,D.he,3,5,0.3)}break
case"water":d.aY(v.$3(12,22,7),B.h0X,D.eh,0.2)
for(r=f*1.2,t=0;t<10;++t){s=D.k.F(r+t/10,1)
d.fT(v.$3(18+s*8,22-s*22,7),0.7,D.he,3,5,0.3)}break
case"teach":d.aY(v.$2(22,26),B.h7h,D.dZ,0.1)
d.aP(v.$2(22.8,26),B.h4T,D.bN)
break
case"duty":d.aP(v.$3(0,74,0),B.h3h,D.K)
break}d.b=u},
wI(d,e,f,g,h,i,j){var w,v,u,t
if(e.Q){w=C.a([],x.z)
A.wI(new A.fk(w),A.atq(!1,0,-1,"",!1,0,"",-1,e.CW*0.5,!1,!1,!1,e.a,!1,e.e,0,0,0),f,g,h,i,j)
D.d.v(d.a,A.o9(w,1.5707963267948966,e.d,new A.r(e.b,9,e.c)))
return}w=g.e
v=$.fWR.h(0,w)
if(v==null){A.i_8(d,e,f,i,w==="xbot"?B.T2:new A.rG(g.a,g.b,g.c,g.d,"human"))
return}w=e.e
u=e.z
t=w&&!u&&e.CW>0?e.CW*12:null
D.d.v(d.a,v.cVa(h,i,e.y,u,f,j,t,w,e.b,e.d,e.c))},
i_8(b2,b3,b4,b5,b6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0=C.a([],x.z),b1=new A.fk(b0)
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
h=new A.fo8(b5,b1)
g=new A.fnV(b1)
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
h.$3(new A.fnW(),B.h5i,new A.r(p,l+-1.6,e))
h.$3(new A.fnX(),B.h2g,new A.r(p,l+-2.9,e))}h.$3(new A.fnY(s),B.h30,new A.r(0,i+1.2,0))
h.$3(new A.fo0(t),B.h4W,new A.r(0,i+2.5,0))
h.$3(new A.fo1(),B.fXN,new A.r(0,i+2.4,0))
h.$3(new A.fo2(t),B.h49,new A.r(0,i+19.6,0))
b1.dM(new A.r(0,i+20.5,0.2),new A.r(0,i+24.2,0.5),2,w,8)
p=i+29
a1=new A.r(0,p,0.6)
h.$3(new A.fo3(w),B.h77,a1)
h.$3(new A.fo4(w),B.h64,a1.aa(0,B.h_2))
h.$3(new A.fo5(u),B.h0L,a1.aa(0,B.h4Z))
h.$3(new A.fo6(u),B.h36,a1.aa(0,B.hbh))
for(o=p+-0.2,m=p+0.4,p+=1.9,n=0;n<2;++n){a2=F.je[n]
b1.fo(new A.r(0+a2*4.2,o,0.6),1,w,3,6)
l=0+a2*1.8
h.$3(new A.fo7(),B.h9K,new A.r(l,m,4.75))
b1.fo(new A.r(l,m,5.1),0.5,D.nd,3,6)
b1.aP(new A.r(l,p,4.8),B.haE,u)}h.$3(new A.fnZ(v),B.haU,a1.aa(0,B.h28))
b1.aP(a1.aa(0,B.h52),B.h3v,B.bkG)
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
h.$3(new A.fo_(w),B.h97,new A.r(e,a6+-1.3,a7+0.2))
if(a5&&o){a9=a7+0
b1.dR(new A.r(e,a6+-2.6,a9),new A.r(e,a6+2.6,a9),1.7,D.aQ,0.5,8)}if(a5&&m){b1.aY(new A.r(e,a6+-0.4,a7+2.6),B.h4f,D.nd,0.3)
b1.aP(new A.r(e,a6+0.2,a7+3.8),B.h1O,D.aw)}}D.d.v(b2.a,A.o9(b0,0,b3.d,new A.r(b3.b,b3.y,b3.c)))},
i1i(d,e){var w,v,u,t,s,r,q,p,o,n=C.a([],x.z)
for(w=d.length,v=x.o,u=0;u<d.length;d.length===w||(0,C.M)(d),++u){t=d[u]
s=C.a([],v)
for(r=t.a,q=r.length,p=0;p<r.length;r.length===q||(0,C.M)(r),++p){o=r[p]
s.push(new A.r(o.a*e,o.b*e,o.c*e))}n.push(new A.lR(s,t.b,t.c,t.d,t.e,t.f,t.r,t.w,t.x,t.y,t.z))}return n},
h1p(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=C.ar(f,D.w,Math.abs(-0.25))
h.toString
w=C.ar(f,D.c,Math.abs(0.2))
w.toString
A:{if("bed"===e){d.aY(B.Ai,B.h_I,B.q0,0.1)
d.aY(B.fUG,B.h_p,f,0.05)
d.aP(B.h8_,B.aVk,B.agG)
d.aP(B.fXh,B.aVk,B.agG)
d.aY(B.fV9,B.h_K,B.q0,0.1)
d.aP(B.fUU,B.h7c,w)
break A}if("nightstand"===e){d.aY(B.x2,B.fXr,f,0.1)
d.aP(B.h68,B.h0e,h)
d.aP(B.haM,B.fZx,B.agi)
d.aP(B.fVc,B.h1c,B.o1)
break A}if("wardrobe"===e){d.aY(B.fVw,B.fZM,f,0.1)
d.aP(B.h1y,B.fZW,h)
d.aY(B.h4_,B.aWk,B.EP,0.8)
d.aY(B.hb4,B.aWk,B.EP,0.8)
break A}if("desk"===e){d.aY(B.V9,B.fZS,f,0.1)
d.aP(B.h88,B.aVp,h)
d.aP(B.fYe,B.aVp,h)
d.aY(B.fVO,B.fYf,B.LF,0.5)
d.aP(B.fVt,B.h_Y,D.ja)
break A}if("rug"===e){d.hn(B.ha2,B.fXK,f,2)
d.aP(B.h1l,B.h9h,w)
break A}if("sofa"===e){d.aY(B.x2,B.h0A,f,0.05)
d.aY(B.fV8,B.h0B,h,0.05)
d.aY(B.h8m,B.aVJ,h,0.05)
d.aY(B.fZi,B.aVJ,h,0.05)
d.aP(B.h7Z,B.aVl,w)
d.aP(B.fXg,B.aVl,w)
break A}if("armchair"===e){d.aY(B.x2,B.fYV,f,0.05)
d.aY(B.fV7,B.fYX,h,0.05)
d.aP(B.h7V,B.aVG,h)
d.aP(B.fX5,B.aVG,h)
break A}if("coffee"===e){d.aY(B.Kj,B.fZE,f,0.2)
for(v=0;v<4;++v){w=B.djY[v]
d.aP(new A.r(w.a,6.5,w.b),B.fYI,h)}d.aY(B.h2J,B.h0W,D.bO,0.5)
break A}if("tvstand"===e){d.aY(B.aai,B.h_g,f,0.1)
d.aP(B.h0x,B.h2o,h)
d.aP(B.fUT,B.fY7,B.ho)
break A}if("dining"===e){d.aY(B.V9,B.h_h,f,0.2)
for(v=0;v<4;++v){w=B.cMK[v]
d.aP(new A.r(w.a,13,w.b),B.fZu,h)}break A}if("chair"===e){d.aY(B.fUP,B.fXB,f,0.1)
d.aY(B.fVn,B.fXz,f,0.1)
for(v=0;v<4;++v){w=B.d9G[v]
d.aP(new A.r(w.a,7.5,w.b),B.fY4,h)}break A}if("plant"===e){d.dM(B.f1,B.aai,5,D.d1,10)
d.fo(B.aae,8,B.EN,5,8)
d.fo(B.fZt,5,B.Xr,4,8)
break A}if("lamp"===e){d.dM(B.f1,B.e8,4.5,B.ho,10)
d.dM(B.e8,B.aV0,0.7,B.ho,6)
d.L3(B.fVQ,B.aag,6,B.o1,3.5,12)
break A}if("console"===e){d.aY(B.fVf,B.aVE,f,0.15)
d.aP(B.h37,B.aVo,h)
d.aP(B.h1q,B.aVo,h)
d.aP(B.x2,B.h92,h)
break A}if("shelf"===e){d.aY(B.aaf,B.fZg,f,0.1)
for(u=0;u<4;++u){h=10+u*15
d.aP(new A.r(0,h,1),B.fZ5,B.ho)
w=D.o.F(u,2)
d.aP(new A.r(-8+w*6,h,2),B.h_D,[D.ej,D.dH,D.eh,D.dW][u])
d.aP(new A.r(4+w*4,h,2),B.h0Z,[D.dW,D.eh,D.ej,D.dH][u])}break A}if("tree"===e){d.L3(B.f1,B.fVv,4.2,B.q0,3,8)
d.fo(B.aV0,17,B.EN,5,9)
d.fo(B.h1b,11,B.Xr,4,8)
d.fo(B.h8V,12,B.bkj,4,8)
break A}if("pine"===e){d.dM(B.f1,B.aUT,3,B.q0,8)
for(u=0;u<3;++u){h=u*14
d.L3(new A.r(0,8+h,0),new A.r(0,26+h,0),14-u*3.5,B.aeh,1.5,10)}break A}if("bush"===e){d.fo(B.x2,9,B.bh3,4,8)
d.fo(B.h_C,6.5,B.Xr,4,8)
break A}if("flowers"===e){for(v=0;v<5;++v){h=B.diy[v]
t=h.a
s=h.b
d.dM(new A.r(t,0,s),new A.r(t,7,s),0.4,B.aeh,5)
d.fo(new A.r(t,8,s),2.2,h.c,3,6)}break A}if("fence"===e){for(v=0;v<4;++v)d.aY(new A.r(B.dkf[v],9,0),B.h5Z,f,0.05)
d.aP(B.Ai,B.aWC,h)
d.aP(B.aad,B.aWC,h)
break A}if("lamppost"===e){d.dM(B.f1,B.aV1,1.3,B.ho,5)
d.dM(B.f1,B.fVA,3.5,B.ho,6)
break A}if("bench"===e){d.aY(B.aUV,B.aVE,f,0.1)
d.aY(B.fV3,B.fZK,f,0.1)
d.aP(B.h80,B.aVB,B.ho)
d.aP(B.fXD,B.aVB,B.ho)
break A}if("car"===e){d.aY(B.aUT,B.h0H,f,0.4)
d.aY(B.h8w,B.fZP,f,0.4)
d.aY(B.fXM,B.h2V,B.hU,0.6)
d.aP(B.h9g,B.aak,B.o1)
d.aP(B.h3y,B.aak,B.o1)
for(v=0;v<2;++v){t=B.a4C[v]
d.dM(new A.r(t,5,-18),new A.r(t,5,-21),5.5,D.nd,12)
d.dM(new A.r(t,5,18),new A.r(t,5,21),5.5,D.nd,12)}break A}if("road"===e||"roadturn"===e||"roadtee"===e||"roadcross"===e){A.i0l(d,e)
break A}if("roundabout"===e){d.dM(B.f1,B.h2P,72,B.M8,16)
d.dM(B.h38,B.aWn,17,D.bm,10)
d.dM(B.aWn,B.aW4,15,B.bjw,10)
d.fo(B.aai,6,E.Xa,3,6)
d.dM(B.aW4,B.aah,0.9,B.q0,5)
break A}if("house2"===e||"shop"===e||"hospital"===e||"firestation"===e||"school"===e){h=C.a([],x.z)
r=new A.fk(h)
r.b=d.b
r.r=!0
r.f=d.f
A.hko(r,e,f)
D.d.v(d.a,A.fs0(h,B.h6J,B.f1))
break A}if("bighouse"===e){h=C.a([],x.z)
q=new A.fk(h)
q.b=d.b
q.r=!0
q.f=d.f
A.hko(q,"house2",f)
D.d.v(d.a,A.fs0(h,B.h7t,B.f1))
break A}if("pole"===e){d.L3(B.f1,B.fUx,2.6,B.q0,2,5)
d.aP(B.fUt,B.fZR,B.bfh)
for(v=0;v<3;++v){t=B.azJ[v]
d.dM(new A.r(t,116,0),new A.r(t,121,0),1.1,D.bN,4)}d.dM(B.h_1,B.h__,5.5,D.bm,6)
d.aP(B.fWY,B.fY6,D.ja)
break A}if("crate"===e){d.aY(B.aah,B.fYz,B.jp,0.05)
d.aP(B.haK,B.fXw,B.vy)
d.fT(B.h8A,3.4,D.aw,3,5,0.3)
d.fT(B.h_x,3.4,D.aD,3,5,0.3)
break A}if("billboard"===e){d.x=$.dR=$.dR+1
for(v=0;v<2;++v){t=B.a4C[v]
d.dM(new A.r(t,0,-1),new A.r(t,40,-1),1.6,D.ja,8)}d.aY(B.fVR,B.h0c,D.cm,0.3)
d.x=0
break A}if("tower"===e||"hq"===e){d.x=$.dR=$.dR+1
p=e==="hq"
o=p?170:100
n=p?90:70
m=p?150:A.hov(f)
l=p?D.bO:B.dpC[D.o.F(f.l()>>>4,6)]
k=new A.fhG(d)
d.aY(new A.r(0,m/2,0),new A.r(o,m,n),l,0.25)
k.$4(o,n,20,m-8)
if(p){h=o*0.66
w=n*0.66
d.aY(new A.r(0,m+60,0),new A.r(h,120,w),D.bN,0.25)
k.$4(h,w,m+16,m+112)
d.aY(new A.r(0,m+124,0),new A.r(o*0.7,8,n*0.7),F.fw,0.4)}else{d.aP(new A.r(0,m+3,0),new A.r(o+4,6,n+4),D.cm)
d.aP(new A.r(o*0.2,m+12,0),new A.r(o*0.3,12,n*0.3),D.dv)}j=p?m+128:m+6
for(h=o*0.3,h=[-h,h],w=j+8,v=0;v<2;++v)d.aP(new A.r(h[v],w,0),B.fZr,D.ja)
h=p?112:84
d.aY(new A.r(0,j+34,0),new A.r(h,38,3),E.jI,0.3)
h=n/2
A.kF(d,new A.r(0,17,h+0.6),B.hC,B.e8,34,34,D.cm,B.ip,0.5)
A.kF(d,new A.r(0,17,h+0.7),B.e8.FU(B.ip),B.e8,1.2,34,B.hU,B.ip,0.6)
d.aY(new A.r(0,38,h+5),B.fZQ,F.fw,0.3)
d.x=0
break A}if("store"===e){d.x=$.dR=$.dR+1
d.aY(B.V9,B.aVa,f,0.2)
d.aP(B.aag,B.aVb,D.cm)
A.kF(d,B.aWH,B.hC,B.e8,112,30,B.hU,B.ip,0.6)
d.aP(B.aV_,B.aV9,D.by)
d.aP(B.aV2,B.aV6,D.au)
d.x=0
break A}if("dmv"===e){d.x=$.dR=$.dR+1
d.aY(B.V9,B.aVa,D.aL,0.2)
d.aP(B.aag,B.aVb,D.d6)
A.kF(d,B.aWH,B.hC,B.e8,112,30,B.hU,B.ip,0.6)
d.aP(B.aV_,B.aV9,D.bk)
d.aP(B.aV2,B.aV6,D.d6)
d.aP(B.h4c,B.h6P,D.bG)
d.aP(B.hat,B.h_W,D.d6)
d.x=0
break A}if("ubstation"===e){d.x=$.dR=$.dR+1
for(v=0;v<2;++v){t=B.dkl[v]
for(i=0;i<2;++i){s=E.Rr[i]
d.dM(new A.r(t,0,s),new A.r(t,50,s),2.2,D.aJ,6)}}d.aY(B.aV1,B.fWU,D.au,0.3)
d.aP(B.fW0,B.fWW,D.bG)
d.aY(B.fVm,B.fWN,D.ds,0.6)
d.aP(B.fUu,B.h0E,D.bs)
d.aP(B.fW5,B.h0h,D.aJ)
d.dM(B.h_k,B.h_n,2,D.ja,6)
d.aP(B.h_o,B.fZl,D.au)
d.aP(B.h2h,B.h3a,D.bG)
d.aP(B.haC,B.h91,D.c)
d.x=0
break A}if("gasstation"===e){d.x=$.dR=$.dR+1
for(v=0;v<2;++v){t=B.azM[v]
for(i=0;i<2;++i){s=B.cFC[i]
d.dM(new A.r(t,0,s),new A.r(t,46,s),2.4,D.bO,6)}}d.aY(B.fVT,B.fX0,D.by,0.3)
d.aP(B.haV,B.fX2,F.fw)
for(v=0;v<2;++v){t=E.Rr[v]
d.aY(new A.r(t,9,20),B.h0q,D.it,0.3)
d.aP(new A.r(t,15,20.2),B.fYF,D.by)}d.aY(B.fUW,B.h0C,f,0.2)
d.dM(B.h8J,B.h8K,2.2,D.ja,6)
d.aP(B.h8L,B.fZ7,D.au)
d.x=0
break A}if("townsign"===e){d.x=$.dR=$.dR+1
for(v=0;v<2;++v){t=B.dk7[v]
d.dM(new A.r(t,0,0),new A.r(t,316,0),5.5,D.ja,6)}d.aY(B.fVk,B.fZb,E.jI,0.3)
d.aP(B.fVr,B.aVA,F.fw)
d.aP(B.fUS,B.aVA,F.fw)
d.x=0
break A}if("adboard"===e){d.x=$.dR=$.dR+1
for(v=0;v<2;++v){t=B.dk6[v]
d.dM(new A.r(t,0,0),new A.r(t,205,0),4.5,D.ja,6)}d.aY(B.fUD,B.fZ3,E.jI,0.3)
d.aP(B.fUY,B.aVu,F.fw)
d.aP(B.aV3,B.aVu,F.fw)
d.x=0
break A}if("cornersign"===e){d.x=$.dR=$.dR+1
for(v=0;v<2;++v){t=B.azM[v]
d.dM(new A.r(t,0,0),new A.r(t,125,0),3,D.ja,6)}d.aY(B.fUw,B.fXm,E.jI,0.3)
d.aP(B.fUM,B.fXo,F.fw)
d.x=0
break A}if("firetruck"===e){d.aY(B.aUU,B.h18,D.by,0.3)
d.aY(B.fZc,B.fYd,D.by,0.3)
d.aY(B.h5M,B.h_s,B.hU,0.6)
d.aP(B.h7N,B.h9D,D.dv)
for(u=0;u<6;++u)d.aP(new A.r(-34+u*11,24,0),B.h4D,D.dv)
d.aP(B.fZd,B.aVO,D.d2)
d.aP(B.h6h,B.h2w,B.blr)
for(v=0;v<3;++v){t=B.dkh[v]
d.dM(new A.r(t,6,-19),new A.r(t,6,-22.5),6,D.nd,12)
d.dM(new A.r(t,6,19),new A.r(t,6,22.5),6,D.nd,12)}break A}if("ambulance"===e){d.aY(B.Kj,B.h0I,D.c,0.4)
d.aY(B.fYW,B.fYs,D.c,0.4)
d.aY(B.h2O,B.h6X,B.hU,0.6)
d.aP(B.hae,B.aW7,D.by)
d.aP(B.h4m,B.aW7,D.by)
d.aP(B.aWt,B.h3M,D.by)
d.aP(B.aWt,B.h2d,D.by)
d.aP(B.fYZ,B.aVO,D.aw)
for(v=0;v<2;++v){t=B.a4C[v]
d.dM(new A.r(t,6,-19),new A.r(t,6,-22.5),6,D.nd,12)
d.dM(new A.r(t,6,19),new A.r(t,6,22.5),6,D.nd,12)}break A}if("dog"===e||"cat"===e||"cow"===e||"sheep"===e||"chicken"===e||"horse"===e){A.hjU(d,e,f,0)
break A}if("pond"===e){h=C.a([],x.z)
q=new A.fk(h)
q.b=d.b
q.f=d.f
q.r=!0
q.dR(B.f1,B.h7x,28,B.bmB,0.8,22)
D.d.v(d.a,A.fs0(h,B.h1J,B.f1))
for(v=0;v<3;++v){h=B.d5e[v]
d.fo(new A.r(h.a,1.2,h.b),2.6,B.afO,3,6)}break A}if("swing"===e){d.dM(B.h89,B.fYu,1.6,D.d1,8)
for(v=0;v<2;++v){t=E.a4B[v]
d.dM(new A.r(t,38,0),new A.r(t,0,14),1.4,D.d1,6)
d.dM(new A.r(t,38,0),new A.r(t,0,-14),1.4,D.d1,6)}for(v=0;v<2;++v){t=E.a4D[v]
d.dM(new A.r(t,38,0),new A.r(t,15,0),0.3,B.ho,4)}d.aP(B.Kj,B.hak,f)
break A}if("shed"===e){d.aY(B.Kj,B.h_8,f,0.05)
d.aP(B.aaf,B.h_j,B.XH)
d.aP(B.h7o,B.h7d,h)
break A}if("doghouse"===e){d.aY(B.aah,B.fYt,f,0.05)
d.aP(B.fYP,B.h9v,B.XH)
d.aP(B.h5L,B.haw,B.LF)
break A}d.aP(B.Ai,B.fWy,f)}},
cfd:function cfd(){},
fLh:function fLh(d,e,f){this.a=d
this.b=e
this.c=f},
fLf:function fLf(d,e,f){this.a=d
this.b=e
this.c=f},
fLe:function fLe(d,e,f){this.a=d
this.b=e
this.c=f},
fLg:function fLg(d){this.a=d},
fun:function fun(d){this.a=d},
fu9:function fu9(){},
fuk:function fuk(){},
ful:function ful(d,e,f){this.a=d
this.b=e
this.c=f},
fua:function fua(){},
fub:function fub(){},
fuc:function fuc(){},
fud:function fud(d){this.a=d},
fuf:function fuf(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fug:function fug(d,e,f){this.a=d
this.b=e
this.c=f},
fuh:function fuh(d,e,f){this.a=d
this.b=e
this.c=f},
fui:function fui(d,e,f){this.a=d
this.b=e
this.c=f},
fuj:function fuj(d,e,f){this.a=d
this.b=e
this.c=f},
fum:function fum(d){this.a=d},
fue:function fue(d){this.a=d},
fnz:function fnz(d){this.a=d},
fnA:function fnA(d){this.a=d},
fnv:function fnv(d){this.a=d},
fnw:function fnw(d,e){this.a=d
this.b=e},
fnx:function fnx(d){this.a=d},
fmX:function fmX(){},
fmY:function fmY(){},
fmZ:function fmZ(d){this.a=d},
fn9:function fn9(d){this.a=d},
fnk:function fnk(){},
fny:function fny(d,e){this.a=d
this.b=e},
fnp:function fnp(d){this.a=d},
fnq:function fnq(d){this.a=d},
fnr:function fnr(d){this.a=d},
fns:function fns(d){this.a=d},
fnt:function fnt(d){this.a=d},
fnu:function fnu(d){this.a=d},
fn_:function fn_(d){this.a=d},
fn0:function fn0(d){this.a=d},
fn1:function fn1(d){this.a=d},
fn2:function fn2(d){this.a=d},
fn3:function fn3(d){this.a=d},
fn4:function fn4(d){this.a=d},
fn5:function fn5(){},
fn6:function fn6(){},
fn7:function fn7(){},
fn8:function fn8(){},
fna:function fna(d){this.a=d},
fnb:function fnb(d){this.a=d},
fnc:function fnc(d){this.a=d},
fnd:function fnd(d){this.a=d},
fne:function fne(){},
fnf:function fnf(){},
fng:function fng(){},
fnh:function fnh(){},
fni:function fni(){},
fnj:function fnj(d,e){this.a=d
this.b=e},
fnl:function fnl(d){this.a=d},
fnm:function fnm(d){this.a=d},
fnn:function fnn(){},
fno:function fno(){},
fxj:function fxj(){},
fxk:function fxk(d){this.a=d},
fxl:function fxl(d){this.a=d},
fdS:function fdS(d,e){this.a=d
this.b=e},
fdI:function fdI(d,e,f){this.a=d
this.b=e
this.c=f},
fo8:function fo8(d,e){this.a=d
this.b=e},
fnV:function fnV(d){this.a=d},
fnW:function fnW(){},
fnX:function fnX(){},
fnY:function fnY(d){this.a=d},
fo0:function fo0(d){this.a=d},
fo1:function fo1(){},
fo2:function fo2(d){this.a=d},
fo3:function fo3(d){this.a=d},
fo4:function fo4(d){this.a=d},
fo5:function fo5(d){this.a=d},
fo6:function fo6(d){this.a=d},
fo7:function fo7(){},
fnZ:function fnZ(d){this.a=d},
fo_:function fo_(d){this.a=d},
fhG:function fhG(d){this.a=d},
hao(){var w=x.S
return new A.bU2(C.eC([72],w),C.aY(w),C.aY(w),C.aY(w))},
i5b(d){var w
A:{if(81===d){w="outlet"
break A}if(82===d){w="switch"
break A}if(84===d){w="gfci"
break A}if(86===d||87===d){w="ptrap"
break A}if(85===d){w="faucet"
break A}w=null
break A}return w},
agt(a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=C.a([],x.z),a0=new A.fk(d)
a0.b=70
a0.hn(B.h6L,B.h9s,B.bjm,4)
a0.c=1
a0.b=91
w=new A.fus(a0)
w.$3(B.h2c,B.h1t,15)
w.$4$alongX(B.h90,B.h5s,11,!1)
w.$4$alongX(B.h_r,B.h1D,11,!1)
w.$4$alongX(B.h81,B.h2u,6,!1)
w.$4$alongX(B.h0p,B.h5t,6,!1)
for(v=0;v<=12;++v)a0.aDt(new A.r(-12+v*2,8.4,0),B.h66,B.XZ,!1,0.05)
a0.c=2
a0.b=92
u=new A.fup(a0)
u.$2(B.coW,B.tE)
u.$2(B.dh7,B.nY)
u.$2(B.dm8,B.nY)
t=new A.fuo(a0)
t.$1(B.cYY)
t.$1(B.d3S)
a0.c=3
a0.b=93
s=new A.fur(a0)
s.$1(B.cXS)
s.$2$col(B.cWe,B.oO)
s.$2$col(B.cVk,B.oO)
s.$1(B.de1)
a0.c=4
a0.b=0
a0.d=0.22
a0.hn(B.h1C,B.h4G,B.AY,4)
a0.hn(B.h4C,B.aWe,B.AY,4)
a0.hn(B.h2f,B.aWe,B.AY,4)
a0.hn(B.h3j,B.aWj,B.AY,3)
a0.hn(B.haI,B.aWj,B.AY,3)
a0.d=1
a0.c=5
a0.e=0.3
a0.b=0
a0.n7(B.h7J,B.h1z,B.bgO,0.1,4)
a0.b=71
a0.aY(B.h6T,B.h67,B.Xg,0.5)
a0.aP(B.haj,B.h2Z,B.EZ)
r=[72,73,74,75,76]
for(q=a1.d,p=a1.e,v=0;v<5;++v){o=D.o.F(v,2)
n=D.o.ao(v,2)
m=r[v]
l=q.t(0,m)
k=p.t(0,m)
a0.b=m
m=9.55+o*0.5
j=5.7-n*0.5
a0.aY(new A.r(m,j,-7.5),B.h19,B.YR,0.3)
if(l)i=0
else i=k?-0.07:0.07
if(l)h=D.cc
else h=k?D.bm:D.bO
a0.aY(new A.r(m+0,j+i,-7.42),B.h2E,h,0.4)}a0.b=90
a0.aY(B.h5u,B.h_y,B.bqY,0.1)
a0.aY(B.h94,B.h1X,B.Yz,0.1)
a0.aY(B.hbc,B.aWB,B.Yz,0.1)
a0.aY(B.h1Q,B.aWB,B.Yz,0.1)
g=new A.fuq(a0)
g.$3(81,B.h0y,a1.x?B.xM:B.Yh)
a0.b=81
a0.aP(B.h5v,B.aWv,B.Fa)
a0.aP(B.h3R,B.aWv,B.Fa)
g.$5$h$w(82,B.han,G.Ys,0.65,0.4)
a0.b=82
a0.aY(B.h7l,B.h_v,B.af9,0.4)
f=!q.t(0,72)
a0.b=83
a0.dR(B.h79,B.aW_,0.5,B.bou,0.4,14)
a0.bbm(B.h9O,0.3,f?Ah.Fu:B.bj2,0.7)
if(f){a0.b=0
a0.d=0.22
a0.fT(B.aVN,1.5,B.XA,4,10,0)
a0.d=1}a0.b=94
a0.aY(B.h9B,B.aWF,B.jp,0.1)
a0.aY(B.h5I,B.aWF,B.jp,0.1)
a0.aY(B.hal,B.h2l,B.jp,0.1)
a0.n7(B.h4Y,B.h9R,B.LZ,0.5,2)
a0.aY(B.h6O,B.hb8,B.F8,0.7)
a0.b=85
a0.jg(A.H_(B.d7A,0.2,6),0.055,B.jF,!1,0.9,8)
a0.b=84
a0.aY(B.ha0,B.h7B,B.Yh,0.3)
a0.aP(B.h3r,B.hai,a1.y?B.afN:B.ai_)
a0.b=86
a0.jg(A.H_(B.cZq,0.35,3),0.11,B.pQ,!1,0.3,8)
a0.b=87
a0.dR(B.h4h,B.h6Z,0.19,a1.c?B.Xn:B.bmg,0.3,8)
a0.b=88
a0.aY(B.fZO,B.h1h,B.B2,0.7)
a0.BB(B.h6K,B.aWw,0.72,B.B2,0.55,0.7,16)
a0.dR(B.aWw,B.h58,0.78,B.bo1,0.7,16)
a0.b=89
a0.dR(B.h9a,B.aVQ,0.85,B.bbF,0.6,18)
a0.dR(B.aVQ,B.h4E,0.5,B.bbH,0.5,12)
a0.aP(B.h5R,B.hb_,B.bma)
a0.b=95
for(p=a1.f,m=a1.r,v=0;v<3;++v){e=B.cFg[v]
if(m.t(0,v)){j=e.a
i=e.b
a0.aP(new A.r(j,i,-7.82),B.h7a,B.AY)
a0.aP(new A.r(j,i,-7.79),B.h4J,B.bf8)}else if(p.t(0,v)){j=e.a
i=e.b
a0.aP(new A.r(j,i,-7.82),B.fXW,B.ah_)
a0.aP(new A.r(j,i,-7.8),B.h5G,B.bre)}}if(a1.w){a0.b=96
a0.dR(B.h4P,B.h48,0.1,D.d1,0.7,8)}a0.e=0
a0.c=6
a0.b=0
a0.d=0.4
a0.bil(B.aVH,B.aWu,B.aap,B.aan,B.aey,B.h5p,!0)
a0.bil(B.aWp,B.aWz,B.aan,B.aap,B.aey,B.h7g,!0)
a0.bjv(B.aVH,B.aWz,B.aan,B.aeM)
a0.bjv(B.aWu,B.aWp,B.aap,B.aeM)
a0.d=1
p=q.t(0,72)?"This breaker has TRIPPED (it is in the middle, orange). The living room has no power. Tap it to flip it off and on again.":"This breaker is ON. The living room has power."
q=q.t(0,72)?"The light is off because the living room breaker has tripped.":"The ceiling light is on."
m=a1.b
j=m&&!a1.c?"Water is dripping from the slip nut here. Pick the wrench, then tap the nut to tighten it.":"The P-trap holds a water seal that blocks sewer gas. Tap Open lesson to build one."
m=m&&!a1.c?"This slip nut is loose and the trap is dripping. Pick the wrench and tap here to tighten it.":"The slip nut is tight."
return new A.tM(d,C.G([70,B.eb0,91,B.ear,92,B.eaK,93,B.eaS,71,B.eb5,72,new A.cW("Living room breaker",p,B.haP,3.5),73,B.eaC,74,B.eaU,75,B.eah,76,B.eaN,81,B.eaP,82,B.ea8,83,new A.cW("Ceiling light",q,B.aW_,7),84,B.eaV,85,B.eaj,86,new A.cW("P-trap under the sink",j,B.h6I,4.5),87,new A.cW("Slip nut (leaking?)",m,B.aW2,3.5),88,B.ea5,89,B.eaT,90,B.eaX,94,B.eaB,95,B.eaZ,96,B.eaa],x.S,x.q),B.zk,B.wu,null,0)},
hpy(d,e){var w,v,u,t,s,r,q,p=C.a([],x.z),o=new A.fk(p)
o.c=5
o.e=0.8
if(d.w)for(w=e*1.5,v=0;v<6;++v){u=D.k.F(w+v/6,1)
o.fT(new A.r(3.4+Math.sin(v*2)*0.12,3.3-u*u*2.8,-7.7),0.05,D.LE,3,6,0.9)}if(d.as){u=D.k.F(e*1.1,1)
o.fT(new A.r(3,3.9-u*u*0.7,-6.95),0.05,B.Xx,3,6,0.9)}if(d.Q)for(w=e*1.6,v=0;v<6;++v){u=D.k.F(w+v/6,1)
o.fT(new A.r(8.2+Math.sin(v*1.7)*0.15,2.2-u*1.5,-7.2),0.05,B.Xx,3,6,0.9)}if(d.at){o.d=0.55
o.aY(B.h1N,B.h3o,B.boi,0.8)
o.d=1}if(d.x)for(w=e*2,t=e*6,v=0;v<8;++v){u=D.k.F(w+v*0.13,1)
s=v*2.4+t
r=Math.cos(s)
s=Math.sin(s)
q=C.ar(F.Mo,E.YK,1-u)
q.toString
o.fT(new A.r(-3.2+r*u*0.7,1.3+s*u*0.7,-7.6+u*0.3),0.05,q,3,5,0)}if(d.z&&!d.d.t(0,72)){o.b=0
o.d=D.k.E((Math.sin(e*17)+Math.sin(e*29)+2)/4*0.5,0,0.6)
o.fT(B.aVN,1.5,B.XA,4,10,0)
o.d=1}if(d.b&&!d.c){for(w=e*1.3,v=0;v<5;++v){u=D.k.F(w+v*0.2,1)
o.fT(new A.r(3.05,1.45-u*u*1.4,-6.95),0.05,B.YC,3,6,0.9)}o.d=0.5
o.aY(B.h1s,new A.r(0.7+0.3*Math.sin(e),0.02,0.5),B.YC,0.9)
o.d=1}return p},
bU2:function bU2(d,e,f,g){var _=this
_.a=5
_.b=!0
_.c=!1
_.d=d
_.e=e
_.f=f
_.r=g
_.at=_.as=_.Q=_.z=_.y=_.x=_.w=!1},
fus:function fus(d){this.a=d},
fup:function fup(d){this.a=d},
fuo:function fuo(d){this.a=d},
fur:function fur(d){this.a=d},
fuq:function fuq(d){this.a=d},
fU(d,e,f,g){var w
try{I.dX(d,"",e,0,f,g)}catch(w){}},
yG(){A.fU(880,80,0.25,"tri")
C.bP(V.aiT,new A.fvn(),x.H)},
hHE(){return new A.Nz(null)},
XZ(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w){return new A.b73(t,d,u,s,f,r,q,j,g,h,m,n,i,k,v,w,l,o,p,e,null)},
wQ(d,e,f,g,h){var w=null,v=g?e.j(0.25):D.w.j(0.5),u=C.m(18),t=C.J(g?e:D.aZ,D.r,1),s=x.p,r=C.a([],s)
D.d.v(r,C.a([C.X(f,g?e:D.ae,w,w,w,16),D.el],s))
r.push(C.d(d,w,w,w,w,w,w,C.l(w,w,g?e:D.ae,w,w,w,w,w,w,w,w,12,w,w,D.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w))
return C.aB(w,C.p(w,C.B(r,D.m,w,D.e,D.Q,0,w,w),D.f,w,w,new C.o(v,w,t,u,w,w,D.n),w,w,w,w,D.hg,w,w,w),D.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,h,w,w,w,w,w,w,!1,D.a5)},
ua(d,e,f,g){var w=null,v=f==null,u=v?D.dt:g.j(0.9),t=C.m(14),s=C.X(e,v?D.bY:D.w,w,w,w,18)
return C.E(C.aB(w,C.p(w,C.B(C.a([s,D.bn,new C.ds(1,D.co,C.d(d,w,w,w,w,w,w,C.l(w,w,v?D.bY:D.w,w,w,w,w,w,w,w,w,12.5,w,w,D.u,w,w,!0,w,w,w,w,w,w,w,w),D.L,w,w),w)],x.p),D.m,w,D.b8,D.j,0,w,w),D.f,w,w,new C.o(u,w,w,t,w,w,D.n),w,w,w,w,D.tX,w,w,w),D.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,!1,D.a5),1)},
fMo(d,e,f,g){return C.bU(E.lw,null,new A.fMq(e,g,f),d,!0,!0,!0,D.k_,!1,!1,x.H)},
TU(d,e,f,g,h,i,j){return new A.aXb(i,d,g,f,e,h,j,null)},
fvn:function fvn(){},
pt:function pt(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
Nz:function Nz(d){this.a=d},
bjX:function bjX(){this.c=this.a=null},
dQt:function dQt(d){this.a=d},
dQu:function dQu(d){this.a=d},
dQv:function dQv(d){this.a=d},
dQw:function dQw(d){this.a=d},
dQA:function dQA(d){this.a=d},
dQB:function dQB(d){this.a=d},
dQC:function dQC(d){this.a=d},
dQD:function dQD(d){this.a=d},
dQE:function dQE(d){this.a=d},
dQF:function dQF(d){this.a=d},
dQG:function dQG(d){this.a=d},
dQH:function dQH(d){this.a=d},
dQx:function dQx(d,e){this.a=d
this.b=e},
dQy:function dQy(d){this.a=d},
dQz:function dQz(d){this.a=d},
aw1:function aw1(d,e){this.c=d
this.a=e},
bsL:function bsL(){this.c=this.a=this.d=null},
f26:function f26(d){this.a=d},
f25:function f25(){},
b73:function b73(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,a0){var _=this
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
cvq:function cvq(){},
cvr:function cvr(){},
fMq:function fMq(d,e,f){this.a=d
this.b=e
this.c=f},
fMp:function fMp(){},
aXb:function aXb(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
bW8:function bW8(d){this.a=d},
DS:function DS(d,e,f){this.c=d
this.d=e
this.a=f},
aA3:function aA3(d){var _=this
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
d8X:function d8X(d,e){this.a=d
this.b=e},
d8V:function d8V(d,e,f){this.a=d
this.b=e
this.c=f},
d8W:function d8W(d){this.a=d},
d8U:function d8U(d){this.a=d},
d8I:function d8I(d){this.a=d},
d8J:function d8J(d){this.a=d},
d8H:function d8H(d){this.a=d},
d8K:function d8K(d){this.a=d},
d8L:function d8L(d){this.a=d},
d8M:function d8M(d){this.a=d},
d8N:function d8N(d){this.a=d},
d8O:function d8O(d,e,f){this.a=d
this.b=e
this.c=f},
d8P:function d8P(d){this.a=d},
d8Q:function d8Q(d,e){this.a=d
this.b=e},
d8R:function d8R(d,e){this.a=d
this.b=e},
d8S:function d8S(d,e){this.a=d
this.b=e},
d8T:function d8T(d){this.a=d},
d8Y:function d8Y(d,e){this.a=d
this.b=e},
d8Z:function d8Z(d){this.a=d},
d97:function d97(){},
d9g:function d9g(d,e,f){this.a=d
this.b=e
this.c=f},
d9n:function d9n(d){this.a=d},
d94:function d94(){},
d98:function d98(d){this.a=d},
d99:function d99(d){this.a=d},
d9h:function d9h(d){this.a=d},
d9i:function d9i(d){this.a=d},
d96:function d96(d){this.a=d},
d9j:function d9j(d){this.a=d},
d95:function d95(d){this.a=d},
d9k:function d9k(d){this.a=d},
d9l:function d9l(d){this.a=d},
d9m:function d9m(d){this.a=d},
d9o:function d9o(d){this.a=d},
d9a:function d9a(d,e){this.a=d
this.b=e},
d93:function d93(d,e){this.a=d
this.b=e},
d9b:function d9b(d,e){this.a=d
this.b=e},
d9c:function d9c(d){this.a=d},
d92:function d92(d){this.a=d},
d9d:function d9d(d){this.a=d},
d91:function d91(d){this.a=d},
d9e:function d9e(d){this.a=d},
d90:function d90(d){this.a=d},
d9f:function d9f(d){this.a=d},
d9_:function d9_(d){this.a=d},
a9r:function a9r(d,e){this.c=d
this.a=e},
aFY:function aFY(){var _=this
_.f=_.e=_.d=$
_.r=""
_.w=0
_.x=null
_.y=!1
_.c=_.a=_.z=null},
eSq:function eSq(d,e,f){this.a=d
this.b=e
this.c=f},
eSr:function eSr(d){this.a=d},
eSp:function eSp(d){this.a=d},
eSj:function eSj(d){this.a=d},
eSk:function eSk(d,e){this.a=d
this.b=e},
eSl:function eSl(d,e){this.a=d
this.b=e},
eSm:function eSm(d,e){this.a=d
this.b=e},
eSn:function eSn(d){this.a=d},
eSo:function eSo(d,e){this.a=d
this.b=e},
eSv:function eSv(){},
eSz:function eSz(d,e){this.a=d
this.b=e},
eSw:function eSw(d){this.a=d},
eSx:function eSx(d,e){this.a=d
this.b=e},
eSu:function eSu(d,e){this.a=d
this.b=e},
eSy:function eSy(d){this.a=d},
eSt:function eSt(d){this.a=d},
eSs:function eSs(){},
a4S:function a4S(d,e){this.c=d
this.a=e},
aAn:function aAn(){var _=this
_.f=_.e=_.d=$
_.r=""
_.w=0
_.x=null
_.y=!1
_.c=_.a=_.z=null},
dbZ:function dbZ(d,e,f){this.a=d
this.b=e
this.c=f},
dc_:function dc_(d){this.a=d},
dbY:function dbY(d){this.a=d},
dbR:function dbR(d){this.a=d},
dbU:function dbU(d){this.a=d},
dbV:function dbV(d,e){this.a=d
this.b=e},
dbW:function dbW(d,e){this.a=d
this.b=e},
dbT:function dbT(d){this.a=d},
dbX:function dbX(d,e){this.a=d
this.b=e},
dbS:function dbS(d){this.a=d},
dc3:function dc3(){},
dc9:function dc9(d,e){this.a=d
this.b=e},
dc4:function dc4(d){this.a=d},
dc5:function dc5(d){this.a=d},
dc2:function dc2(d){this.a=d},
dc7:function dc7(d,e){this.a=d
this.b=e},
dc1:function dc1(d,e){this.a=d
this.b=e},
dc6:function dc6(d){this.a=d},
dc8:function dc8(d){this.a=d},
dc0:function dc0(d){this.a=d},
aBf:function aBf(d){this.a=d},
aBg:function aBg(d){var _=this
_.d=d
_.f=_.e=$
_.r=0
_.w=""
_.x=null
_.y=!1
_.c=_.a=_.z=null},
dj2:function dj2(d,e,f){this.a=d
this.b=e
this.c=f},
dj3:function dj3(d){this.a=d},
dj1:function dj1(d){this.a=d},
diX:function diX(d){this.a=d},
diZ:function diZ(d,e){this.a=d
this.b=e},
dj_:function dj_(d,e){this.a=d
this.b=e},
dj0:function dj0(d,e){this.a=d
this.b=e},
diY:function diY(d){this.a=d},
djb:function djb(d,e){this.a=d
this.b=e},
dj6:function dj6(d,e){this.a=d
this.b=e},
dj8:function dj8(d){this.a=d},
dj7:function dj7(d){this.a=d},
dj9:function dj9(d){this.a=d},
dj5:function dj5(d){this.a=d},
dja:function dja(d){this.a=d},
dj4:function dj4(d,e){this.a=d
this.b=e},
afw:function afw(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bwo:function bwo(){var _=this
_.d=null
_.e=!1
_.c=_.a=null},
fdq:function fdq(d){this.a=d},
fdo:function fdo(d){this.a=d},
fdp:function fdp(d){this.a=d},
fdn:function fdn(d){this.a=d},
fds:function fds(d){this.a=d},
fdt:function fdt(d){this.a=d},
fdr:function fdr(d){this.a=d},
jL:function jL(d,e){this.a=d
this.b=e},
MX:function MX(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a6U:function a6U(d){this.a=d},
cay:function cay(d){this.a=d},
fZQ(){var w=x.N
return new A.cm0(C.aY(w),C.G(["n1",!1,"n2",!1],w,x.R),C.U(x.S,w))},
ig3(d,e,f){var w,v
if(!f.c.t(0,e)){w=f.d
return e==="hot"?"The red (hot) hose goes on the LEFT side only. "+w:"The blue (cold) hose goes on the RIGHT side only. "+w}w=d.e
v=f.a
if(w.h(0,v)!=null)return"That connection already has a hose."
w.n(0,v,e)
return null},
fLJ(){var w,v,u=C.a([B.aVD,B.h42],x.o)
for(w=1;w<=12;++w){v=3.141592653589793+3.141592653589793*w/12
u.push(new A.r(3+3*Math.cos(v),0.2+3*Math.sin(v),0))}D.d.v(u,A.H_(B.d8W,1,6))
return u},
bBG(d){var w,v,u,t,s="trap",r=C.a([],x.z),q=new A.fk(r)
q.b=49
q.n7(B.fXP,B.fZB,B.jp,0.1,2)
q.n7(B.haG,B.fXT,B.jp,0.1,2)
q.b=47
q.hn(B.h5o,B.fZC,B.vC,3)
q.hn(B.fYO,B.fXU,B.vC,3)
q.b=46
q.n7(B.h_F,B.h6d,B.LZ,0.5,3)
q.bdk(B.h7H,B.Kj,6.5,B.F8,!0,0.7,20)
q.dR(B.h6C,B.h3H,1.5,B.jF,0.85,14)
q.b=48
q.T9(B.aar,B.h29,0.92,B.pQ,!1,!0,0.3,14)
q.cX5(B.aar,B.h9X,1,0.72,B.pQ,0.3)
w=new A.fv3(d,q)
w.$5(41,B.a3Y,B.jF,0.85,"tail")
w.$5(42,A.fLJ(),B.pQ,0.3,s)
w.$5(43,B.a4S,B.pQ,0.3,"arm")
w=new A.fv2(d,q)
v=d.a
w.$6(44,"n1",B.aam,B.e8,B.h2s,v.t(0,"tail")&&v.t(0,s))
w.$6(45,"n2",B.aao,B.hC,B.h7A,v.t(0,s)&&v.t(0,"arm"))
if(v.t(0,s)){q.b=0
q.d=0.55
q.e=0.4
u=A.fLJ()
w=C.T(u).k("Z<1>")
t=C.C(new C.Z(u,new A.fv1(),w),w.k("K.E"))
if(t.length>1)q.aJ3(t,0.4092,B.YP,!1,!0,0.6,8)
q.d=1
q.e=0}return new A.tM(r,C.G([41,B.eal,42,B.ean,43,B.eaR,44,B.eaF,45,B.eb2,46,B.eat,47,B.eaz,48,B.ea3,49,B.eap],x.S,x.q),B.zk,B.wu,null,0)},
ie_(d,e){var w,v,u,t,s,r,q,p=C.a([],x.z),o=new A.fk(p),n=d.d
if(n.length!==0){w=n==="n1"?B.hb2:B.h9l
for(n=e*1.4,v=w.a+0,u=w.b,t=w.c+0,s=0;s<5;++s){r=D.k.F(n+s*0.2,1)
o.fT(new A.r(v,u+(-r*6*r-r*1.5),t),0.22*(1-r*0.3),B.YC,3,6,0.9)}}else if(d.c){n=x.Q
v=C.C(B.a3Y,n)
u=A.fLJ()
D.d.v(v,C.d1(u,1,null,C.T(u).c))
D.d.v(v,C.d1(B.a4S,1,null,n))
for(n=e*0.45,s=0;s<18;++s){r=D.k.F(n+s/18,1)
q=D.o.E(D.k.bj(r*(v.length-1)),0,v.length-2)
u=v.length
o.fT(A.o0(v[q],v[q+1],r*(u-1)-q),0.38,B.bqk,3,6,0.9)}for(n=e*2.2,s=0;s<6;++s)o.fT(new A.r(0,14-D.k.F(n+s/6,1)*5.4,0),0.3,B.Xx,3,6,0.9)}return p},
agG(d){switch(d){case 61:return B.fXO
case 62:return B.h9i
case 63:return B.h4w
default:return B.h4n}},
h3H(d){var w=d==="hot",v=A.agG(w?61:62),u=A.agG(w?63:64),t=w?-1:1
return A.ahU(C.a([v,v.aa(0,new A.r(t*0.6,2.2,1.2)),A.o0(v,u,0.5).aa(0,new A.r(t*1.4,0,2.6)),u.aa(0,new A.r(-t*0.2,-2,1)),u],x.o),6)},
aPa(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=C.a([],x.z),e=new A.fk(f)
e.b=67
e.hn(B.fXL,B.fZe,B.vC,3)
e.b=66
e.n7(B.h40,B.h9W,B.LZ,0.5,3)
e.T9(B.aVr,B.haF,7.6,B.YD,!1,!0,0.7,28)
e.dR(B.aVr,B.h6Y,7.6,B.afy,0.5,28)
e.dR(B.fZp,B.h3b,1.2,B.jF,0.9,14)
e.aY(B.h6o,B.aVg,B.jp,0.1)
e.aY(B.had,B.aVg,B.jp,0.1)
e.b=65
e.dR(B.h9C,B.aWo,3.4,B.jF,0.9,20)
e.jg(A.H_(B.dez,1.4,6),0.5,B.jF,!0,0.9,12)
for(w=0;w<2;++w){v=B.d9I[w]
u=v*1.2
e.dR(new A.r(u,15.5,-3.6),new A.r(u,17.7,-3.6),0.38,B.jF,0.9,10)
t=v<0?B.tE:B.nY
e.dR(new A.r(u,17.7,-3.6),new A.r(u,18.6,-3.6),0.6,t,0.6,12)}for(u=[B.eyj,B.etr],w=0;w<2;++w){t=u[w]
v=t.b
e.b=t.a
e.dR(new A.r(v,15.3,-3.6),new A.r(v,11.4,-3.6),0.45,B.jF,0.9,10)
e.dR(new A.r(v,11.4,-3.6),new A.r(v,10.7,-3.6),0.3,B.blQ,0.6,8)
e.zo(new A.r(v,11.3,-3.6),new A.r(v,11.9,-3.6),0.78,0.48,B.bo0,0.7,8)}for(u=[B.eRv,B.eTh],w=0;w<2;++w){t=u[w]
v=t.b
e.b=t.a
e.dR(new A.r(v,-1.5,-6),new A.r(v,-1.5,-3.6),0.4,B.Lv,0.7,12)
e.dR(new A.r(v,-1.5,-4.4),new A.r(v,0.7,-4.4),1,B.jF,0.9,14)
e.dR(new A.r(v,0.7,-4.4),new A.r(v,1.5,-3.6),0.45,B.jF,0.9,10)
e.dR(new A.r(v,-0.2,-4.4),new A.r(v,-0.2,-3.1),0.2,B.aea,0.7,8)
e.dR(new A.r(v,-0.2,-3.1),new A.r(v,-0.2,-2.4000000000000004),1.45,t.c,0.5,14)
e.zo(new A.r(v,1.2,-3.6),new A.r(v,1.9,-3.6),0.78,0.4,B.xA,0.8,8)}for(u=x.o,w=0;w<2;++w){s=B.dhc[w]
t=s==="hot"
r=t?B.cGc:B.cGp
q=C.T(r).k("Z<1>")
p=C.C(new C.Z(r,new A.fu8(d,s),q),q.k("K.E"))
e.b=t?68:69
o=t?B.tE:B.nY
t=p.length
if(t===2){n=A.h3H(s)
e.jg(n,0.34,B.Mf,!1,0.7,8)
m=n.length/2|0
e.jg(C.a([n[m-1],n[m],n[m+1]],u),0.4,o,!1,0.4,8)
for(t=r.length,l=0;l<t;++l){k=A.agG(r[l])
q=k.a+0
j=k.b
i=k.c+0
e.zo(new A.r(q,j+-0.2,i),new A.r(q,j+0.6,i),0.62,0.3,B.xA,0.8,8)}}else if(t===1){k=A.agG(D.d.gI(p))
h=D.d.gI(p)===D.d.gI(r)?1:-1
t=k.a+0
q=k.b
j=k.c
e.jg(C.a([k,new A.r(t,q+h*1.4,j+1),new A.r(t,q+h*3,j+2.4)],u),0.34,B.Mf,!1,0.7,8)
j+=0
e.zo(new A.r(t,q+-0.2,j),new A.r(t,q+0.6,j),0.62,0.3,B.xA,0.8,8)}}if(d.r){e.b=0
e.d=0.5
for(u=d.e,w=0;w<4;++w){g=B.a4M[w]
t=g.a
if(u.h(0,t)!=null)continue
t=A.agG(t)
q=g.c.t(0,"hot")?B.tE:B.nY
e.fT(new A.r(t.a+0,t.b+0,t.c+0.9),0.65,q,4,8,0.1)}e.d=1}return new A.tM(f,C.G([61,B.eac,62,B.eae,63,B.ea7,64,B.eaf,65,B.eaA,66,B.eaw,67,B.ea4,68,B.eb6,69,B.eaD],x.S,x.q),B.zk,B.wu,null,0)},
i4J(d,e){var w,v,u,t,s,r,q,p,o,n=C.a([],x.z),m=new A.fk(n)
if(!d.f)return n
w=d.e
v=w.h(0,61)==="hot"&&w.h(0,63)==="hot"
u=w.h(0,62)==="cold"&&w.h(0,64)==="cold"
t=new A.fwK(e,m)
if(v){s=A.h3H("hot")
for(r=e*0.5,q=0;q<10;++q){p=D.k.F(r+q/10,1)
o=D.o.E(D.k.bj(p*(s.length-1)),0,s.length-2)
m.fT(A.o0(s[o],s[o+1],p*(s.length-1)-o),0.2,D.LE,3,6,0.9)}}else if(w.h(0,61)==null)t.$2(61,D.LE)
if(u){s=A.h3H("cold")
for(w=e*0.5,q=0;q<10;++q){p=D.k.F(w+q/10,1)
o=D.o.E(D.k.bj(p*(s.length-1)),0,s.length-2)
m.fT(A.o0(s[o],s[o+1],p*(s.length-1)-o),0.2,B.Y4,3,6,0.9)}}else if(w.h(0,62)==null)t.$2(62,B.Y4)
if(v&&u)for(w=e*2,q=0;q<8;++q){p=D.k.F(w+q/8,1)
r=C.ar(B.bqq,B.Y4,0.5)
r.toString
m.fT(new A.r(0,21-p*6.5,1.6),0.26,r,3,6,0.9)}return n},
fwI(d){return D.d.d5(B.a4M,new A.fwJ(d))},
cm0:function cm0(d,e,f){var _=this
_.a=d
_.b=e
_.c=!1
_.d=""
_.e=f
_.r=_.f=!1},
F8:function F8(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fv3:function fv3(d,e){this.a=d
this.b=e},
fv2:function fv2(d,e){this.a=d
this.b=e},
fv1:function fv1(){},
fu8:function fu8(d,e){this.a=d
this.b=e},
fwK:function fwK(d,e){this.a=d
this.b=e},
fwJ:function fwJ(d){this.a=d},
fZP(d,e,f){var w=x.N
w=new A.clR(e,d,C.aY(w),C.U(w,x.S),C.aY(w))
w.bz9(d,e,f)
return w},
hoP(c0,c1,c2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5=C.a([],x.z),b6=new A.fk(b5),b7=C.U(x.S,x.q),b8=C.a([],x.E),b9=c0.c
b9===$&&C.c()
w=b9.a==="bathroom"
v=w?28:0
b6.b=9199
b6.hn(B.h8v,B.haB,B.beI,4)
b6.hn(B.h6c,B.h9f,B.Xw,4)
b6.hn(new A.r(v+19.8+0.6,24,16),B.h3G,B.vC,2)
b7.n(0,9199,B.eao)
b6.b=9198
b6.aY(new A.r(v,0.6,10),B.h9A,B.jp,0.1)
b6.aY(new A.r(v,29.4,18.6),B.h3n,B.jp,0.1)
b6.aY(new A.r(v-19.4,13.6,10.5),B.ham,B.jp,0.1)
for(u=[B.eWh,B.eWd,B.eVa,B.eV7],t=0;t<4;++t){s=u[t].a
b6.aY(new A.r(v+s[0],33,s[1]),new A.r(s[2],2.4,s[3]),B.bro,0.6)}b6.T9(new A.r(v,27,8),new A.r(v,34.3,8),10.5,B.YD,!1,!0,0.7,24)
b6.dR(new A.r(v,27,8),new A.r(v,27.2,8),10.5,B.afy,0.5,24)
if(w){b6.aY(new A.r(v,46,0.6),B.h3u,D.bO,0.3)
b6.aY(new A.r(v,46,1.1),B.h2v,B.hU,0.9)}b6.dM(new A.r(v,27.1,8),new A.r(v,27.3,8),1.4,B.ho,12)
b6.T9(new A.r(v+15,23.6,8),new A.r(v+19.4,23.6,8),0.92,B.pQ,!1,!0,0.3,12)
b7.n(0,9198,B.eaO)
b6.b=9400
b6.dR(new A.r(-56,18,0),new A.r(-56,18,6),1.5,B.xA,0.8,12)
u=c0.r?B.nY:D.bm
b6.dR(new A.r(-57,18,6),new A.r(-55,18,6.5),4,u,0.5,14)
b6.dR(new A.r(-56,16,0),new A.r(-56,20,0),1,B.Lv,0.7,10)
u=c0.r?"The water is ON. Turn it OFF with your hand before you cut into any pipe, and turn it ON to test your work.":"The water is OFF. Turn it ON to test your work."
b7.n(0,9400,new A.cW("Main water valve",u,new A.r(-56,18,4),22))
u=c0.r
s=u?"MAIN WATER: ON":"MAIN WATER: OFF"
u=u?D.dH:D.bm
b8.push(new A.hf(new A.r(-56,24,6),s,u,0))
r=new A.fv0(b6)
u=v-8
r.$1(u)
s=v+8
r.$1(s)
if(w)r.$1(-40)
q=new A.r(v,21,8)
p=new A.fuZ(q)
o=new A.fuT(b6,c0)
n=new A.fuU(b6,c0)
m=new A.fv_(c0,b7,c2,c1,b8)
l=b9.c
for(k=l.length,j=c0.x,i=c0.e,h=c0.f,g=x.o,t=0;t<k;++t){f=l[t]
e=f.a
d=i.t(0,e)
if(d){a0=c0.vi(0,e)
a1=h.h(0,e)
if(a1==null)a1=0
a2=a0.r-a1>0}else a2=!1
a3=D.d.cu(l,f)
a4=9100+a3
j.t(0,e)
switch(e){case"flange":a5=new A.r(-30,0.3,14)
if(d){b6.b=a4
b6.dR(a5,new A.r(-30,0.8999999999999999,14),5.5,B.pQ,0.4,18)
b6.zo(new A.r(-30,0.8,14),new A.r(-30,1.2,14),5.5,3.2,B.xA,0.8,18)}else n.$3(e,new A.r(-30,0.8,14),B.fWP)
m.$3(f,a5,"Flange spot")
break
case"wax":a5=new A.r(-30,1.2,14)
if(d){b6.b=a4
b6.zo(a5,new A.r(-30,2.3,14),4.2,2.4,B.brr,0.2,18)}else n.$3(e,new A.r(-30,1.7,14),B.h6p)
m.$3(f,a5,"Wax ring spot")
break
case"toilet":if(d){b6.b=a4
b6.BB(new A.r(-30,0.5,14),new A.r(-30,16,14),8.5,B.B2,6,0.8,20)
b6.dR(new A.r(-30,16,14),new A.r(-30,17,14),9.5,B.Ml,0.8,20)
b6.aY(new A.r(-30,22,4.5),B.aVj,B.B2,0.8)
b6.aY(new A.r(-30,29.2,4.5),B.h1H,B.Ml,0.8)}else{b6.b=a4
b6.d=0.32
b6.dM(new A.r(-30,0.5,14),new A.r(-30,17,14),8.5,D.b1,16)
b6.aP(new A.r(-30,22,4.5),B.aVj,D.b1)
b6.d=1}m.$3(f,new A.r(-30,12,12),"Toilet spot")
break
case"bolts":if(d){for(e=9200+a3*2,a6=0;a6<2;++a6){a7=B.azQ[a6]
b6.b=e+(a7<0?0:1)
a0=-30+a7
b6.dR(new A.r(a0,0.5,17),new A.r(a0,3.6,17),0.45,B.F8,0.8,8)
a1=a2?D.cT:B.F8
b6.dR(new A.r(a0,3.4,17),new A.r(a0,4.6,17),1.2,a1,0.8,6)}e=a2?"The nuts are loose. Tighten them with the wrench, a little at a time so the porcelain does not crack.":"The toilet is bolted down."
b7.n(0,a4,new A.cW(f.c,e,new A.r(-30,3,17),20))}else for(a6=0;a6<2;++a6){a7=B.azQ[a6]
b6.b=a4
b6.d=0.4
e=-30+a7
b6.dM(new A.r(e,0.5,17),new A.r(e,4.6,17),1.2,D.b1,8)
b6.d=1}m.$3(f,new A.r(-30,3,17),"Bolts")
break
case"tvalve":A.h36(b6,a4,new A.r(-40,8,1.6),d,B.nY,new A.fuP(n,f,-30))
m.$3(f,new A.r(-40,8,2),"Valve")
break
case"those":if(d){b6.b=a4
b6.jg(A.ahU(C.a([new A.r(-40,10,1.6),new A.r(-42,14,3.5),new A.r(-36,17,3.6),new A.r(-32,21,2.5)],g),6),0.55,B.Mf,!1,0.7,8)
b6.jg(C.a([new A.r(-36.8,15.5,3.6),new A.r(-35,16.4,3.6)],g),0.62,B.nY,!1,0.4,8)
if(a2)b6.dM(new A.r(-40,10,1.6),new A.r(-40,11.2,1.6),0.9,D.cT,8)}else o.$3$r(e,A.ahU(C.a([new A.r(-40,10,1.6),new A.r(-42,14,3.5),new A.r(-36,17,3.6),new A.r(-32,21,2.5)],g),6),0.9)
m.$3(f,new A.r(-36,15,3),"Toilet hose")
break
case"faucet":if(d){b6.b=a4
b6.dR(new A.r(v,34.2,8),new A.r(v,34.6,8),3.6,B.jF,0.9,20)
b6.jg(A.H_(C.a([new A.r(v,34.6,8),new A.r(v,40,8),new A.r(v,43,10),new A.r(v,43,14),new A.r(v,41.2,14.6)],g),1.4,6),0.5,B.jF,!0,0.9,10)
for(a6=0;a6<2;++a6){a7=E.a4D[a6]
e=v+a7
b6.dR(new A.r(e,34.6,8),new A.r(e,36.6,8),0.5,B.jF,0.9,8)
a0=a7<0?B.tE:B.nY
b6.dR(new A.r(e,36.6,8),new A.r(e,37.6,8),0.8,a0,0.6,10)}for(a6=0;a6<2;++a6){e=v+B.dki[a6]
b6.dR(new A.r(e,34,8),new A.r(e,28.4,8),0.45,B.jF,0.9,8)}}else n.$3(e,new A.r(v,38,9),B.fWF)
m.$3(f,new A.r(v,38,8),"Faucet spot")
break
case"vhot":A.h36(b6,a4,new A.r(u,8,1.6),d,B.tE,new A.fuQ(n,f,v))
m.$3(f,new A.r(u,8,2),"Hot valve")
break
case"vcold":A.h36(b6,a4,new A.r(s,8,1.6),d,B.nY,new A.fuR(n,f,v))
m.$3(f,new A.r(s,8,2),"Cold valve")
break
case"hhot":case"hcold":a8=e==="hhot"
a9=a8?-1:1
a0=v+a9*3
b0=A.ahU(C.a([new A.r(v+a9*8,10.5,1.8),new A.r(v+a9*9,16,3.5),new A.r(v+a9*6,22,4.2),new A.r(a0,27.5,6),new A.r(a0,28.6,8)],g),6)
if(d){b6.b=a4
b6.jg(b0,0.5,B.Mf,!1,0.7,8)
b1=b0.length/2|0
e=C.a([b0[b1-1],b0[b1],b0[b1+1]],g)
b6.jg(e,0.58,a8?B.tE:B.nY,!1,0.4,8)
if(a2){e=D.d.gI(b0)
a0=D.d.gI(b0)
b6.dM(e,new A.r(a0.a+0,a0.b+1.4,a0.c+0),0.9,D.cT,8)
a0=D.d.gak(b0)
b6.dM(new A.r(a0.a,a0.b-1.4,a0.c),D.d.gak(b0),0.9,D.cT,8)}}else o.$3$r(e,b0,0.9)
e=b0[b0.length/2|0]
m.$3(f,e,a8?"Hot hose":"Cold hose")
break
case"tail":case"trap":case"arm":a0=e==="tail"
if(a0)a1=B.a3Y
else a1=e==="trap"?A.fLJ():B.a4S
b2=p.$1(a1)
if(d){b6.b=a4
a1=a0?B.jF:B.pQ
b6.a6W(b2,0.66,a1,!1,!0,!0,a0?0.85:0.3,12)}else o.$3$r(e,b2,0.78)
a1=J.a5(b2)
a1=a1.h(b2,a1.gL(b2)/2|0)
if(a0)e="Tailpiece"
else e=e==="trap"?"P-trap":"Trap arm"
m.$3(f,a1,e)
break}}b3=new A.fuX(l,c0,b6,b7)
b3.$4("trap",q.aa(0,B.aam),B.e8,0)
b3.$4("arm",q.aa(0,B.aao),B.hC,1)
for(u=C.eo(j,j.r,C.a6(j).c),s=u.$ti.c;u.C();){k=u.d
if(k==null)k=s.a(k)
b4=D.d.h_(b9.c,new A.fuS(k))
k=A.hsX(c0,k)
b8.push(new A.hf(new A.r(k.a+0,k.b+6,k.c+4),"\ud83d\udca7 LEAK: "+b4.c,D.by,0))}return new A.tM(b5,b7,b8,B.wu,null,0)},
h36(d,e,f,g,h,i){if(!g){i.$0()
return}d.b=e
d.dR(f.aa(0,B.h6r),f.aa(0,B.aWm),0.9,B.xA,0.8,12)
d.dR(f.aa(0,B.aWm),f.aa(0,B.h3f),0.45,B.xA,0.8,10)
d.dR(f.aa(0,B.h9w),f.aa(0,B.aWG),0.3,B.aea,0.7,8)
d.dR(f.aa(0,B.aWG),f.aa(0,B.ha1),1.2,h,0.5,12)},
hsX(d,e){var w,v=d.c
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
idS(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=C.a([],x.z),f=new A.fk(g),e=d.x
if(e.a===0)return g
for(e=C.eo(e,e.r,C.a6(e).c),w=a0*2,v=e.$ti.c,u=d.e;e.C();){t=e.d
if(t==null)t=v.a(t)
s=A.hsX(d,t)
r=d.c
r===$&&C.c()
q=D.d.h_(r.c,new A.fLy(t)).b==="valve"||!u.t(0,t)
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
f.fT(new A.r(t+m*l*n,r+(l*k-l*l*j),p+(1.5+l*i)),h,B.YP,3,6,0.5);++o}f.d=0.55
f.dR(new A.r(t,0.3,11),new A.r(t,0.5,11),7+2*Math.sin(w),B.YP,0.6,18)
f.d=1}return g},
nq:function nq(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
X5:function X5(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
clR:function clR(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.d=_.c=$
_.e=f
_.f=g
_.r=!0
_.w=0
_.x=h
_.y=!1},
clV:function clV(d){this.a=d},
clW:function clW(d){this.a=d},
clS:function clS(d){this.a=d},
clX:function clX(d){this.a=d},
clY:function clY(d){this.a=d},
clZ:function clZ(){},
cm_:function cm_(){},
clT:function clT(d){this.a=d},
clU:function clU(d){this.a=d},
fv0:function fv0(d){this.a=d},
fuZ:function fuZ(d){this.a=d},
fuT:function fuT(d,e){this.a=d
this.b=e},
fuW:function fuW(d){this.a=d},
fuU:function fuU(d,e){this.a=d
this.b=e},
fuV:function fuV(d){this.a=d},
fv_:function fv_(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fuP:function fuP(d,e,f){this.a=d
this.b=e
this.c=f},
fuQ:function fuQ(d,e,f){this.a=d
this.b=e
this.c=f},
fuR:function fuR(d,e,f){this.a=d
this.b=e
this.c=f},
fuX:function fuX(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fuY:function fuY(d){this.a=d},
fuS:function fuS(d){this.a=d},
fLy:function fLy(d){this.a=d},
W7:function W7(d,e){this.d=d
this.a=e},
aEF:function aEF(d,e){var _=this
_.e=_.d=$
_.f=d
_.r=$
_.w=e
_.x=""
_.y=0
_.z=null
_.as=_.Q=!1
_.c=_.a=_.at=null},
emD:function emD(d,e,f){this.a=d
this.b=e
this.c=f},
emE:function emE(d){this.a=d},
emC:function emC(d){this.a=d},
emw:function emw(d){this.a=d},
emI:function emI(d){this.a=d},
eml:function eml(d,e){this.a=d
this.b=e},
emm:function emm(d,e){this.a=d
this.b=e},
emn:function emn(d){this.a=d},
ems:function ems(d){this.a=d},
emq:function emq(d){this.a=d},
emr:function emr(d,e){this.a=d
this.b=e},
emB:function emB(d){this.a=d},
emJ:function emJ(d){this.a=d},
emt:function emt(d){this.a=d},
emu:function emu(){},
emv:function emv(d){this.a=d},
emF:function emF(d,e){this.a=d
this.b=e},
emG:function emG(d){this.a=d},
emH:function emH(d,e){this.a=d
this.b=e},
emp:function emp(d,e,f){this.a=d
this.b=e
this.c=f},
emo:function emo(d,e,f){this.a=d
this.b=e
this.c=f},
emK:function emK(d){this.a=d},
emO:function emO(d,e){this.a=d
this.b=e},
emM:function emM(){},
emL:function emL(d){this.a=d},
emN:function emN(d,e){this.a=d
this.b=e},
emA:function emA(d){this.a=d},
emy:function emy(d,e){this.a=d
this.b=e},
emx:function emx(d,e){this.a=d
this.b=e},
emz:function emz(d,e){this.a=d
this.b=e},
jX(d){return D.d.h_(B.uy,new A.fTU(d))},
cqN(d,e,f,g,h){var w=x.S,v=x.N
v=new A.Xz(g,f,C.U(w,v),C.aY(w),C.aY(w),C.U(w,x.cH),C.a([new A.XL(),new A.XL()],x.gD),C.U(w,x.cD),C.aY(w),C.U(w,v),C.aY(w),C.a([],x.s),C.U(w,v))
v.ckA(d,e,h)
return v},
cqO(d){var w
A:{if("tv"===d){w="The TV"
break A}if("lamp"===d){w="The lamp"
break A}if("toaster"===d){w="The toaster"
break A}w="The hair dryer"
break A}return w},
h_g(d,e){var w=!0
if(d!==e)if(!(D.d.t(B.lH,d)&&D.d.t(B.lH,e)))if(!(D.d.t(B.jT,d)&&D.d.t(B.jT,e)))if(d==="light"||d==="fan")w=e==="light"||e==="fan"
else w=!1
return w},
z3:function z3(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fTU:function fTU(d){this.a=d},
ot:function ot(d,e,f){this.a=d
this.b=e
this.c=f},
XL:function XL(){var _=this
_.a=!1
_.b=0
_.c=!0
_.d=!1},
avA:function avA(d,e){var _=this
_.a=!1
_.b=d
_.c=e
_.e=_.d=!1},
aU7:function aU7(d,e){this.a=d
this.b=e
this.c=!1},
eB:function eB(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
Xz:function Xz(d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
cqS:function cqS(){},
cqZ:function cqZ(d){this.a=d},
cr_:function cr_(d){this.a=d},
cr0:function cr0(d,e){this.a=d
this.b=e},
cr1:function cr1(d,e){this.a=d
this.b=e},
cr3:function cr3(d){this.a=d},
cr2:function cr2(d,e){this.a=d
this.b=e},
cqR:function cqR(d){this.a=d},
cqP:function cqP(){},
cqQ:function cqQ(d){this.a=d},
cqX:function cqX(){},
cqY:function cqY(){},
cqT:function cqT(){},
cqU:function cqU(d){this.a=d},
cqV:function cqV(d){this.a=d},
cr4:function cr4(d){this.a=d},
cqW:function cqW(d){this.a=d},
cgZ(d,e,f){return new A.Ob(!1,e,f,!1,null)},
iV:function iV(d,e,f){this.a=d
this.b=e
this.c=f},
Ob:function Ob(d,e,f,g,h){var _=this
_.c=d
_.e=e
_.f=f
_.r=g
_.a=h},
aEM:function aEM(d,e,f){var _=this
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
erh:function erh(d,e,f){this.a=d
this.b=e
this.c=f},
eri:function eri(d){this.a=d},
erg:function erg(d){this.a=d},
eqj:function eqj(d){this.a=d},
eqk:function eqk(d){this.a=d},
eqi:function eqi(d){this.a=d},
eql:function eql(d){this.a=d},
eqm:function eqm(d){this.a=d},
eqh:function eqh(d){this.a=d},
eqn:function eqn(d){this.a=d},
eqo:function eqo(d){this.a=d},
eqy:function eqy(d){this.a=d},
eqA:function eqA(d){this.a=d},
eqp:function eqp(){},
eqq:function eqq(d){this.a=d},
eqr:function eqr(d){this.a=d},
eqR:function eqR(d,e){this.a=d
this.b=e},
eqz:function eqz(d){this.a=d},
erd:function erd(d){this.a=d},
ere:function ere(d){this.a=d},
erf:function erf(d,e){this.a=d
this.b=e},
erb:function erb(d){this.a=d},
erc:function erc(d,e){this.a=d
this.b=e},
era:function era(d){this.a=d},
er2:function er2(d){this.a=d},
er3:function er3(d){this.a=d},
er4:function er4(d){this.a=d},
er5:function er5(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
er6:function er6(d){this.a=d},
er7:function er7(d,e,f){this.a=d
this.b=e
this.c=f},
er8:function er8(d){this.a=d},
er9:function er9(d,e,f){this.a=d
this.b=e
this.c=f},
erj:function erj(d,e){this.a=d
this.b=e},
eqx:function eqx(d){this.a=d},
eqv:function eqv(d){this.a=d},
eqw:function eqw(d,e){this.a=d
this.b=e},
equ:function equ(d){this.a=d},
eqs:function eqs(d){this.a=d},
eqt:function eqt(d,e){this.a=d
this.b=e},
eqB:function eqB(d,e){this.a=d
this.b=e},
eqP:function eqP(){},
eqQ:function eqQ(){},
eqC:function eqC(d){this.a=d},
eqD:function eqD(d){this.a=d},
eqE:function eqE(d){this.a=d},
eqH:function eqH(){},
eqI:function eqI(){},
eqJ:function eqJ(){},
eqK:function eqK(){},
eqL:function eqL(){},
eqM:function eqM(d){this.a=d},
eqN:function eqN(){},
eqO:function eqO(d){this.a=d},
eqF:function eqF(d){this.a=d},
eqG:function eqG(){},
erC:function erC(d,e){this.a=d
this.b=e},
erE:function erE(d){this.a=d},
ero:function ero(d){this.a=d},
erD:function erD(d){this.a=d},
err:function err(d){this.a=d},
ers:function ers(d,e){this.a=d
this.b=e},
erq:function erq(d,e){this.a=d
this.b=e},
ert:function ert(d,e){this.a=d
this.b=e},
erp:function erp(d,e){this.a=d
this.b=e},
erF:function erF(d,e){this.a=d
this.b=e},
ern:function ern(d,e){this.a=d
this.b=e},
erG:function erG(d){this.a=d},
erm:function erm(d){this.a=d},
erH:function erH(d,e){this.a=d
this.b=e},
erl:function erl(d,e){this.a=d
this.b=e},
erI:function erI(d){this.a=d},
erJ:function erJ(d){this.a=d},
erK:function erK(d,e,f){this.a=d
this.b=e
this.c=f},
erk:function erk(d,e,f){this.a=d
this.b=e
this.c=f},
eru:function eru(d){this.a=d},
erv:function erv(d,e){this.a=d
this.b=e},
erw:function erw(d){this.a=d},
erx:function erx(d){this.a=d},
ery:function ery(d){this.a=d},
erz:function erz(d){this.a=d},
erA:function erA(d){this.a=d},
erB:function erB(d,e){this.a=d
this.b=e},
er1:function er1(d,e){this.a=d
this.b=e},
er0:function er0(d,e){this.a=d
this.b=e},
eqV:function eqV(d,e){this.a=d
this.b=e},
eqT:function eqT(){},
eqU:function eqU(){},
eqW:function eqW(d,e){this.a=d
this.b=e},
eqS:function eqS(){},
eqX:function eqX(d){this.a=d},
eqY:function eqY(d,e,f){this.a=d
this.b=e
this.c=f},
eqZ:function eqZ(d,e){this.a=d
this.b=e},
er_:function er_(d,e){this.a=d
this.b=e},
ahT(d,e){var w=d.d,v=e.a,u=e.c,t=e.b,s=w.a,r=w.b
w=w.c
return d.c?new A.r(s+v,r-u,w+t):new A.r(s+v,r+t,w+u)},
h2m(d,e,f,g){var w,v,u,t,s,r=d.a,q=e.d,p=e.c?A.o9(r,1.5707963267948966,0,q):A.o9(r,0,0,q)
r=C.a([],x.z)
for(q=p.length,w=0;w<p.length;p.length===q||(0,C.M)(p),++w){v=p[w]
u=v.d
u=u===0?0:f.$1(u)
t=v.f
s=t<0.99?3:2
r.push(new A.lR(v.a,v.b,v.c,u,v.e,t,v.r,v.w,v.x,s,g))}q=C.U(x.S,x.q)
for(u=d.b,u=u.gdV(u),u=u.gaf(u);u.C();){t=u.gR(u)
s=f.$1(t.a)
t=t.b
q.n(0,s,new A.cW(t.a,t.b,A.ahT(e,t.c),t.d))}return new C.z(r,q)},
hZs(a3,a4,a5,a6,a7,a8,a9,b0,b1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=x.i,a2=C.eC([a4,a5],a1)
for(w=b1.length,v=0;v<b1.length;b1.length===w||(0,C.M)(b1),++v){u=b1[v].a
a2.M(0,D.k.E(u[0],a4,a5))
a2.M(0,D.k.E(u[1],a4,a5))}t=C.C(a2,a2.$ti.k("cr.E"))
D.d.fc(t)
for(w=C.T(b1).k("Z<1>"),u=w.k("K.E"),s=0;r=s+1,r<t.length;s=r){q=t[s]
p=t[r]
o=p-q
if(o<0.01)continue
n=(q+p)/2
m=C.C(new C.Z(b1,new A.fnD(n),w),u)
l=C.eC([a6,a7],a1)
for(k=m.length,v=0;v<m.length;m.length===k||(0,C.M)(m),++v){j=m[v].a
l.M(0,D.k.E(j[2],a6,a7))
l.M(0,D.k.E(j[3],a6,a7))}i=C.C(l,l.$ti.k("cr.E"))
D.d.fc(i)
for(k=!(o>30),h=0;g=h+1,g<i.length;h=g){f=i[h]
e=i[g]
j=e-f
if(j<0.01)continue
d=(f+e)/2
if(D.d.b5(m,new A.fnE(d)))continue
a0=!k||j>60?2:1
a3.hn(new A.r(n,d,a8),new A.r(o,j,a9),b0,a0)}}},
wP(d1,d2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1=null,c2=x.z,c3=C.a([],c2),c4=new A.fk(c3),c5=C.a([],x.a),c6=x.E,c7=C.a([],c6),c8=x.S,c9=C.U(c8,x.q),d0=$.dR=$.dR+1
c4.f=-1
c4.b=8001
c4.n7(B.h0Q,B.h45,B.Bk,0.15,4)
c4.f=0
c4.hn(B.h0l,B.aVR,B.ae6,3)
c4.aY(B.h8N,B.haa,B.hU,0.5)
c4.aP(B.aVX,B.h04,B.B6)
c4.aP(B.aVX,B.hap,B.B6)
c4.hn(B.h4a,B.aVR,B.ae6,3)
c4.aY(B.h0d,B.h4b,B.vy,0.15)
c4.aY(B.h4R,B.h4i,B.EP,0.8)
c4.b=0
c4.f=3
c4.d=d1.gwD()?0.42:0.1
c4.hn(B.fZq,B.h6j,d1.gwD()?B.kz:B.baI,3)
c4.d=1
c4.f=2
c4.b=8001
if(!d1.gwD())for(w=0;w<10;++w)c4.aDt(new A.r(-72+w*16,51.3,55),B.h6U,B.jp,!1,0.05)
else{c4.x=d0
c4.aY(B.h5l,B.h2G,D.c,0.2)
c4.aY(B.hbe,B.aW8,D.c,0.2)
c4.aY(B.h1M,B.aW8,D.c,0.2)}if(d1.gwD()){c4.x=d0
c4.aY(B.h1V,B.h2M,B.kz,0.2)}c4.x=0
c4.b=8001
c4.r=!0
c4.hn(B.h9Z,B.haH,B.afQ,2)
c4.aY(B.h8X,B.h_O,B.Y0,0.1)
c4.aY(B.h8W,B.h_P,B.LJ,0.1)
c4.aY(B.h8u,B.aVI,B.LJ,0.1)
c4.aY(B.fYD,B.aVI,B.LJ,0.1)
c4.r=!1
c9.n(0,8001,B.ea6)
c4.x=d0
c4.b=8002
c4.n7(B.haY,B.aVM,B.jp,0.05,3)
c4.n7(B.fZU,B.aVM,B.jp,0.05,3)
c9.n(0,8002,B.eay)
for(v=d1.y,w=0;u=$.H7(),w<u.length;++w){t=1000+w
c4.b=t
c4.cHh(new A.r(u[w],0,-2.25),B.h6B,B.jp,!1,0.05,2)
s=v.t(0,w)?"This one has a hole for the cable.":"Tap it with the drill to put a hole through it."
c9.n(0,t,new A.cW("Wall stud","A 2x4 stud, one of the vertical posts in the wall. They stand 16 inches apart. "+s,new A.r(u[w],20,-2),60))
if(v.t(0,w)){c4.b=0
c4.e=0.6
c4.aP(new A.r(u[w],40,-2.25),B.h0j,B.ah_)
c4.e=0}}c4.b=8000
c4.aY(B.fYM,B.fX6,B.Xg,0.5)
c4.e=0.4
c4.aP(B.h3T,B.h9y,B.EZ)
for(r=0;r<6;++r)for(v=19.5-r*3.6,q=0;q<2;++q)c4.aY(new A.r(61.6+q*4.8,v,0.5),B.fUa,B.YR,0.3)
p=d1.ax&&!d1.ay
v=p?0.6:0
if(d1.ay)u=D.cc
else u=p?D.by:D.hf
c4.aY(new A.r(64,-2.5+v,0.9),B.h2B,u,0.4)
c4.e=0
if(d1.ay)v="The main breaker has TRIPPED (orange). Tap it to flip it fully OFF, fix the problem, then turn it ON."
else v=d1.ax?"The power is ON. Tap to turn it OFF. Always turn it OFF before you touch any wire.":"The power is OFF. Tap to turn it ON."
c9.n(0,8000,new A.cW("Breaker panel",v,B.h_T,60))
c4.b=8003
for(v=d1.z,u=C.eo(v,v.r,C.a6(v).c),t=x.o,s=u.$ti.c;u.C();){o=u.d
n=A.jX(o==null?s.a(o):o)
o=n.d
m=o.a-0.35
l=C.a([B.h7F,B.h5h,new A.r(m,40,-3.2)],t)
if(n.c)D.d.v(l,C.a([new A.r(m,51.4,-3.2),new A.r(m,51.4,o.c+11)],t))
else l.push(new A.r(m,o.b+11,-3.4))
c4.jg(A.H_(l,3,6),0.2,B.Y7,!1,0.35,6)}c9.n(0,8003,B.eaW)
for(u=x.eV,s=d1.Q,k=0;k<3;++k){j=B.op[k]
i=s.h(0,j)
if(i==null||!i.a)continue
if(i.e)h=B.boL
else h=i.d?B.bqh:B.bpD
o=C.a([],u)
for(m=i.b,l=C.a6(m),g=new C.mk(m,m.r,l.k("mk<1>")),g.c=m.e,l=l.c;g.C();){m=g.d
if(m==null)m=l.a(m)
o.push(new C.cw([A.jX(m).d.a-1.15,A.jX(m).d.a+1.15,A.jX(m).d.b-2,A.jX(m).d.b+2]))}m=6100+k
c4.b=m
A.hZs(c4,j,j+48,-47,47,-0.25,0.5,h,o)
o=i.e?"Painted and finished.":"A 4 by 8 foot sheet of drywall (gypsum between two layers of paper). It is screwed to the studs."
c9.n(0,m,new A.cW("Drywall sheet",o,new A.r(j+24,0,0),90))
c4.b=0
c4.e=0.3
for(o=i.c,m=C.a6(o),l=new C.mk(o,o.r,m.k("mk<1>")),l.c=o.e,m=m.c;l.C();){o=l.d
if(o==null)o=m.a(o)
f=D.o.ao(o,10)
e=D.o.F(o,10)
c4.fT(new A.r($.H7()[f],-40+e*16,0.1),0.34,B.EZ,3,5,0.3)}c4.e=0}for(u=d2.a,o=u!=="tape",m=d1.as,l=u!=="mud",g=u==="sand",w=0;w<2;w=a1){d=-24+48*w
a0=s.h(0,B.op[w])
a0=a0==null?c1:a0.a
a1=w+1
a2=s.h(0,B.op[a1])
a2=a2==null?c1:a2.a
if(a0!==!0||a2!==!0)continue
a3=m[w]
a0=6200+w
c4.b=a0
if(a3.a&&!a3.d){a2=a3.b
if(a2===0)h=B.boO
else h=a3.c?B.bkH:B.bfK
c4.e=0.5
c4.aP(new A.r(d,0,0.08+0.02*a2),new A.r(2.2+a2*1.4,94,0.12),h)
c4.e=0}else if(!o||!l||g){c4.d=0.45
c4.e=0.6
c4.aP(new A.r(d,0,0.12),B.h2Y,D.b1)
c4.e=0
c4.d=1}if(a3.d)a2="Smooth and ready for paint."
else if(!a3.a)a2="The joint between two sheets. It needs tape and three coats of joint compound."
else{a2=a3.b
a4=a2===1?"":"s"
a4="Taped, with "+a2+" coat"+a4+" of mud."
a2=a4}c9.n(0,a0,new A.cW("Seam",a2,new A.r(d,0,0),70))}for(o=d2.b,m=d1.x,l=d1.at,g=x.N,a5=0;a5<7;++a5){n=B.uy[a5]
a0=n.a
a6=m.aj(0,a0)
a7=l.h(0,a0)
a8=o===a0&&a7!=null
if(!a6)continue
a2=n.c
if(a2)a9=n.e==="fan"?"fan":"light"
else{a4=a7==null?c1:a7.a
a9=a4==null?"outlet":a4}if(a8){b0=A.t1(a7.a)
a0=a7.b
b1=A.h3d(b0,a0,!1)
b2=A.h2m(b1,n,new A.fv4(n),d0)
D.d.v(c3,b2.a)
c9.v(0,b2.b)
if(a0.f&&a0.c===0){a0=C.a([],c6)
for(a2=b1.c,a4=a2.length,b3=0;b3<a2.length;a2.length===a4||(0,C.M)(a2),++b3){b4=a2[b3]
a0.push(new A.hf(A.ahT(n,b4.a),b4.b,b4.c,0))}D.d.v(c7,a0)}}else if(a7!=null&&a7.b.c>=2){a4=a7.a
b5=a7.b
b6=b5.w
b7=C.a([],c2)
b8=new A.fk(b7)
b9=new A.Cv(C.U(c8,g))
b9.c=2
b9.w=b6
if(a4==="light"||a4==="fan")A.hlm(b8,a4,b9)
else{A.hl0(b8,A.h3R(a4),-0.25,b6,!0,!1)
A.hnq(b8,b6)}D.d.v(c3,A.h2m(new A.tM(b7,B.RW,B.zk,B.wu,c1,0),n,new A.fv5(n),d0).a)
if(!a2){c4.f=3
c4.b=3000+a0
c4.e=0.4
c4.d=0.55
a2=n.d
b5=b5.w?D.aw:D.b9
c4.aP(new A.r(a2.a,a2.b,a2.c+0.2),B.h32,b5)
c4.d=1
c4.f=2
c4.e=0}c9.n(0,3000+a0,new A.cW(A.hV8(a4),A.hV7(d1,a0),A.ahT(n,B.aab),22))}else{a4=C.a([],c2)
b5=A.h3R(a9)===a9?a9:"outlet"
A.hkm(new A.fk(a4),b5,!1)
D.d.v(c3,A.h2m(new A.tM(a4,B.dxH,B.zk,B.wu,c1,0),n,new A.fv6(n),d0).a)
a2=a2?"Ceiling box":"Electrical box"
a4=v.t(0,a0)?"The box is mounted and the cable is in. A device can be wired here.":"The box is mounted. Pull the cable to it."
c9.n(0,2000+a0,new A.cW(a2,a4,A.ahT(n,B.aab),24))}}c4.x=0
c0=new A.fv9(c4)
if(u==="wall"||u==="ceiling"||u==="fanbox")for(a5=0;a5<7;++a5){n=B.uy[a5]
c2=n.a
if(m.aj(0,c2))continue
c6=n.c
c8=n.d
s=c8.a
o=c8.b
a0=c6?new A.r(s,o-1,c8.c):new A.r(s,o,1.5)
a2=c6?B.h0s:B.h2q
c0.$4$round(2000+c2,a0,a2,c6)
c2=c6?new A.r(s,o-8,c8.c):new A.r(s,o+7,3)
c7.push(new A.hf(c2,n.b,D.eV,0))}else if(u==="cable")for(a5=0;a5<7;++a5){n=B.uy[a5]
c2=n.a
if(!m.aj(0,c2)||v.t(0,c2))continue
c6=n.c
c8=n.d
s=c8.a
o=c8.b
c8=c6?new A.r(s,o-1,c8.c):new A.r(s,o,1.5)
s=c6?B.aVP:B.h0S
c0.$5$col$round(2000+c2,c8,s,D.bG,c6)}else if(u==="knife")for(a5=0;a5<7;++a5){n=B.uy[a5]
if(n.c||!m.aj(0,n.a))continue
c2=n.d
c6=c2.a
i=d1.apV(c6)
if(i==null||i.b.t(0,n.a))continue
c0.$4$col(2000+n.a,new A.r(c6,c2.b,0.5),B.h2y,D.cT)}else if(u==="sheet")for(w=0;w<5;){j=B.a4O[w]
c0.$3(6000+w,new A.r(j,0,0.3),B.h6F);++w
c7.push(new A.hf(new A.r(j,50,1),"edge "+w,D.eV,0))}else if(u==="screw")for(a5=0;a5<3;++a5){j=B.op[a5]
i=s.h(0,j)
if(i==null||!i.a)continue
for(c2=d1.aqf(j),c6=c2.length,c8=i.c,o=j+48,b3=0;b3<c2.length;c2.length===c6||(0,C.M)(c2),++b3){f=c2[b3]
for(a0=f*10,a2=7000+a0,r=0;r<6;++r){if(c8.t(0,a0+r))continue
c0.$3(a2+r,new A.r($.H7()[f],-40+r*16,0.5),B.aVF)}a2=$.H7()
if(f+1<a2.length&&a2[f]+16<=o)for(a0=7500+a0,r=0;r<6;r+=2)c0.$4$col(a0+r,new A.r(a2[f]+8,-40+r*16+8,0.5),B.aVF,D.ds)}}if(!C.eC(["wall","ceiling","fanbox","cable","knife","sheet","screw",""],g).t(0,u))c2=D.d.t(B.HV,u)||C.eC(["outlet","gfci","switch","light","fan"],g).t(0,u)||D.d.t(B.lH,u)||D.d.t(B.jT,u)
else c2=!1
if(c2)for(c2=d1.CW,a5=0;a5<7;++a5){n=B.uy[a5]
if(D.d.t(B.HV,u)){c6=n.a
a7=l.h(0,c6)
if(a7!=null&&D.d.t(B.lH,a7.a)&&a7.b.c>=2&&!c2.aj(0,c6)){c8=n.d
c0.$4$col(3000+c6,new A.r(c8.a,c8.b,1.2),B.h35,D.bj)}}else{c6=n.a
if(m.aj(0,c6)&&v.t(0,c6)&&!l.aj(0,c6)){c8=n.c
s=n.d
o=s.a
g=s.b
s=c8?new A.r(o,g-1,s.c):new A.r(o,g,1.2)
o=c8?B.aVP:B.h6z
c0.$4$round(2000+c6,s,o,c8)}}}c4.r=!0
for(c2=d1.CW,c6=new C.cH(c2,C.a6(c2).k("cH<1,2>")).gaf(0);c6.C();){j=c6.d
c8=j.a
n=A.jX(c8)
v=n.d
d=v.a
c4.b=8200+c8
v=v.b
c4.jg(A.H_(C.a([new A.r(d,v,2.5),new A.r(d,-46,3.5),new A.r(d,-46,22)],t),4,6),0.55,B.Yb,!1,0.2,6)
c4.aY(new A.r(d,v,1.8),B.h4O,B.beW,0.3)
v=c4.b=8100+c8
u=j.b
switch(u){case"tv":c4.aY(new A.r(d,-45,24),B.h_d,B.agh,0.2)
c4.aY(new A.r(d,-19,24),B.h0G,E.Fe,0.4)
if(c2.aj(0,c8))c8=d1.ax&&!d1.ay&&d1.a4s(c8)
else c8=!1
if(c8){c8=d-38.5
s=d+38.5
c5.push(new A.fM(C.a([new A.r(c8,1.5,25.7),new A.r(s,1.5,25.7),new A.r(s,-39.5,25.7),new A.r(c8,-39.5,25.7)],t),v,new A.fv7(j),320,180,9,2,0,!1))}break
case"lamp":c4.dR(new A.r(d,-47.5,24),new A.r(d,-46.5,24),6,B.X9,0.4,14)
c4.dR(new A.r(d,-46.5,24),new A.r(d,-22,24),1,B.Bk,0.5,8)
c4.yN(new A.r(d,-26,24),new A.r(d,-12,24),9,K.Yj,!1,!0,5.5,0.2,16)
break
case"toaster":c4.aY(new A.r(d,-42.5,24),B.fXG,B.jF,0.8)
c4.aP(new A.r(d,-38,24),B.h7E,B.ahz)
break
default:c4.aY(new A.r(d,-43.5,24),B.fYk,B.agh,0.2)
c4.BB(new A.r(d-6,-38,24),new A.r(d+8,-38,24),3.4,B.Mc,3,0.6,12)
c4.wm(new A.r(d-8,-43,24),B.fXQ,B.Mc,0.6,0)}c8=A.hTj(u)
s="Plugged into "+n.b
u=u==="tv"?s+". To unplug it, go behind it (the Behind the TV button) and tap the plug on the wall.":s+". Tap it to unplug."
c9.n(0,v,new A.cW(c8,u,new A.r(d,-35,20),60))}c4.r=!1
for(a5=0;a5<7;++a5){n=B.uy[a5]
c9.c3(0,2000+n.a,new A.fv8(n))}return new A.tM(c3,c9,c7,c5,c1,0)},
hV8(d){var w
A:{if("gfci"===d){w="GFCI outlet"
break A}if("switch"===d){w="Light switch"
break A}if("light"===d){w="Ceiling light"
break A}if("fan"===d){w="Ceiling fan"
break A}if("outlet"===d){w="Outlet"
break A}w=A.agC(d)
break A}return w},
hTj(d){var w
A:{if("tv"===d){w="TV"
break A}if("lamp"===d){w="Lamp"
break A}if("toaster"===d){w="Toaster"
break A}w="Hair dryer"
break A}return w},
hV7(d,e){var w,v=d.at.h(0,e)
if(v==null)return""
if(v.b.w)return"BURNT. It was wired wrong and it burnt out. Pull it out and put in a new one."
w=v.a
if(D.d.t(B.jT,w))return d.ch.t(0,e)?"The switch is ON. Tap to turn it off.":"The switch is OFF. Tap to flip it on."
if(w==="light"||w==="fan")return d.an2(e)?"It is running.":"It is off. Flip its switch (breaker on)."
w=d.CW.h(0,e)
return"Tap with a TV, lamp, toaster or hair dryer in your hand to plug it in. Plugged: "+(w==null?"nothing":w)+"."},
ie8(a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=C.a([],x.z),a0=new A.fk(d)
for(w=D.d.gaf(B.uy),v=new C.f5(w,new A.fLS()),u=a1.at,t=a2*7;v.C();){s=w.gR(0)
r=s.a
q=u.h(0,r)
if(q==null||q.b.c<1)continue
p=a1.an2(r)?t:0.4
a0.b=3000+r
s=s.d
r=s.a
o=s.b-6.6
s=s.c
for(n=0;n<4;++n){m=p+n*3.141592653589793/2
l=A.vw(B.fX3,m)
a0.wm(new A.r(r+l.a,o+l.b,s+l.c),B.hav,B.bdz,0.3,m)}}w=a1.d
w===$&&C.c()
w=D.d.gaf(w)
v=new C.f5(w,new A.fLT())
u=a2*5
while(v.C()){s=w.gR(0).a
if(a1.an2(s)){k=A.jX(s)
a0.b=0
a0.d=0.25+0.05*Math.sin(u)
s=k.d
a0.fT(new A.r(s.a,s.b-5,s.c),11,B.XA,4,10,0)
a0.d=1}}for(w=a1.CW,v=new C.cH(w,C.a6(w).k("cH<1,2>")).gaf(0),u=a2*1.6,s=a2*6;v.C();){j=v.d
r=j.a
if(w.aj(0,r))o=a1.ax&&!a1.ay&&a1.a4s(r)
else o=!1
if(!o)continue
i=A.jX(r).d.a
a0.b=8100+r
switch(j.b){case"tv":break
case"lamp":a0.b=0
a0.d=0.3+0.05*Math.sin(s)
a0.fT(new A.r(i,-19,24),11,H.xy,4,10,0)
a0.d=1
break
case"toaster":a0.e=0.8
r=C.ar(B.afN,H.Mh,(Math.sin(s)+1)/2)
r.toString
a0.aP(new A.r(i,-38.2,24),new A.r(13,0.3,6),r)
a0.e=0
break
default:for(r=i+9,h=0;h<6;++h)a0.fT(new A.r(r+D.k.F(u+h/6,1)*22,-38+Math.sin(h*2)*2,24),0.6,B.bl5,3,5,0.2)}}for(w=a1.db,w=new C.cH(w,C.a6(w).k("cH<1,2>")).gaf(0),v=a1.cx;w.C();){j=w.d
u=j.a
k=A.jX(u)
g=a3.h(0,u)
f=a2<=(g==null?0:g)
e=v.t(0,u)
if(!f&&!e)continue
u=f?j.b:"smolder"
A.hpg(a0,u,new A.fLU(k),1,a2)}return d},
rI:function rI(d,e,f){this.a=d
this.b=e
this.c=f},
fnD:function fnD(d){this.a=d},
fnE:function fnE(d){this.a=d},
fv4:function fv4(d){this.a=d},
fv5:function fv5(d){this.a=d},
fv6:function fv6(d){this.a=d},
fv9:function fv9(d){this.a=d},
fv7:function fv7(d){this.a=d},
fv8:function fv8(d){this.a=d},
fLS:function fLS(){},
fLT:function fLT(){},
fLU:function fLU(d){this.a=d},
hh1(d,e){var w=new A.cud(e,d,A.hao())
w.bzm(4,d,e)
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
Mo:function Mo(d,e){this.a=d
this.b=e
this.c=!1},
cud:function cud(d,e,f){var _=this
_.a=d
_.b=e
_.c=$
_.d=f
_.e=3
_.r=_.f=0
_.w=!1},
cui:function cui(d){this.a=d},
cue:function cue(){},
cug:function cug(){},
cuh:function cuh(){},
cuf:function cuf(d){this.a=d},
arA:function arA(d,e){this.d=d
this.a=e},
aEQ:function aEQ(d,e){var _=this
_.e=_.d=$
_.f=d
_.r=$
_.w=e
_.x="inspect"
_.y=0
_.z=null
_.at=_.as=_.Q=!1
_.c=_.a=_.ax=null},
et6:function et6(d,e,f){this.a=d
this.b=e
this.c=f},
et7:function et7(d){this.a=d},
et5:function et5(d){this.a=d},
esW:function esW(d){this.a=d},
et0:function et0(d){this.a=d},
et1:function et1(d){this.a=d},
et_:function et_(d){this.a=d},
et2:function et2(d,e){this.a=d
this.b=e},
et3:function et3(d){this.a=d},
et4:function et4(d){this.a=d},
esZ:function esZ(d){this.a=d},
esY:function esY(d,e){this.a=d
this.b=e},
esV:function esV(d){this.a=d},
esT:function esT(d){this.a=d},
esU:function esU(d,e){this.a=d
this.b=e},
esX:function esX(d){this.a=d},
etj:function etj(d,e){this.a=d
this.b=e},
etf:function etf(){},
ete:function ete(d){this.a=d},
etg:function etg(){},
eth:function eth(){},
eti:function eti(d,e){this.a=d
this.b=e},
etd:function etd(d,e){this.a=d
this.b=e},
etc:function etc(d){this.a=d},
etb:function etb(d){this.a=d},
et9:function et9(d,e){this.a=d
this.b=e},
et8:function et8(){},
eta:function eta(d,e){this.a=d
this.b=e},
atq(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u){return new A.xY(p,s,u,t,r,h,o,n,m,i,q,d,j,g,k,e,f,l)},
idA(d){var w,v,u,t,s,r,q,p,o,n,m=d.gew(0),l=C.a([],x.T)
for(w=d.x,v=w.length,u=0;u<w.length;w.length===v||(0,C.M)(w),++u){t=w[u]
s=t.b
if(s==="rug")continue
s=B.hw.h(0,s)
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
case"bathroom":l.push(B.dyK)
l.push(B.dyq)
w=-m/2
l.push(new A.i8(w,w+33,0,75))
break}return l},
brk(d,e,f,g,h,i,j,k,l,m,n,o){var w=new A.brj(d,i,m,o,n,l,g,f,k,j,e,h,C.a([],x.n))
w.bzC(d,e,f,g,h,i,j,k,l,m,n,o)
return w},
hl3(d,e){var w,v,u,t=d.w,s=D.d.bg(t,new A.fgq(e))
if(s<0)s=0
w=t[s]
v=d.gew(0)
u=d.gho(0)
t=w.c
switch(w.b){case"left":return new C.bj(new C.z(-v/2+18,D.k.E(t+u/2-40,10,u-10)),1.5707963267948966,s)
case"right":return new C.bj(new C.z(v/2-18,D.k.E(t+u/2-40,10,u-10)),-1.5707963267948966,s)
default:return new C.bj(new C.z(D.o.E(t,-v/2+12,v/2-12),18),0,s)}},
xY:function xY(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u){var _=this
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
rG:function rG(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
a9N:function a9N(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
cqM:function cqM(d,e){var _=this
_.a=d
_.b=e
_.d=_.c=$},
Aw:function Aw(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
brj:function brj(d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
fgq:function fgq(d){this.a=d},
aVO:function aVO(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=$},
bU0:function bU0(d,e){this.a=d
this.b=e},
bU1:function bU1(d){this.a=d},
hsI(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=C.a([B.dyD],x.T)
for(w=d.x,v=w.length,u=0;u<w.length;w.length===v||(0,C.M)(w),++u){t=w[u]
if(t.a===e)continue
s=t.b
if(D.d.t(B.a4L,s)||D.d.t(B.HJ,s)||s==="bush")continue
r=s==="townsign"
if(r||s==="adboard"){q=r?178:150
for(s=[-q,q],p=0;p<2;++p){o=s[p]
n=t.e*3.141592653589793/2
r=Math.cos(n)
m=Math.sin(n)
r=t.c+o*r
m=t.d+-o*m
i.push(new A.i8(r-8,r+8,m-8,m+8))}continue}r=B.hw.h(0,s)
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
hie(d,e,f){var w=new A.b97(d,-d.gew(0)/2+10,d.gew(0)/2-10,-760,d.gho(0)-10,e,f,0,B.dfb)
w.Mv(0)
return w},
b97:function b97(d,e,f,g,h,i,j,k,l){var _=this
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
akb:function akb(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h},
apN:function apN(d){this.a=d},
bdF:function bdF(d){var _=this
_.d=0
_.e=!1
_.f=d
_.c=_.a=_.r=null},
d5x:function d5x(d){this.a=d},
d5y:function d5y(d,e){this.a=d
this.b=e},
d5w:function d5w(d,e){this.a=d
this.b=e},
d5z:function d5z(d){this.a=d},
d5v:function d5v(d){this.a=d},
d5A:function d5A(d){this.a=d},
d5u:function d5u(d){this.a=d},
d5B:function d5B(d,e){this.a=d
this.b=e},
d5t:function d5t(d,e,f){this.a=d
this.b=e
this.c=f},
d5C:function d5C(d,e){this.a=d
this.b=e},
d5D:function d5D(d){this.a=d},
d5s:function d5s(d){this.a=d},
hpg(d,e,a0,a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
if(e==="none"||e.length===0)return
d.b=0
w=new A.fwM(a2,d,a0,a1)
v=new A.fwL(d,a2,a0,a1)
switch(e){case"arc":u=D.k.bj(a2*14)
for(t=0.1*a1,s=x.o,r=u*3.1,q=0;q<3;++q){p=Math.sin((r+q*7.7)*12.9898)*43758.5453
if(p-Math.floor(p)<0.3)continue
o=q*2
n=2.2-o
m=C.a([],s)
for(o=1.6-o-n,l=u+q*13,k=0;k<=6;++k){j=k/6
if(k===0||k===6)i=0
else{p=Math.sin((l+k)*12.9898)*43758.5453
i=(p-Math.floor(p)-0.5)*1.6}m.push(a0.$1(new A.r(-1.8+3.6*j,n+o*j+i,3.3)))}p=Math.sin((u+q)*12.9898)*43758.5453
o=C.ar(D.c,D.cp,p-Math.floor(p))
o.toString
d.jg(m,t,o,!1,0,4)}d.d=0.16+0.1*Math.sin(a2*31)
d.fT(a0.$1(B.h6x),3.2*a1,D.ds,4,8,0)
d.d=1
break
case"spark":w.$2(22,7)
d.d=0.2+0.1*Math.sin(a2*26)
d.fT(a0.$1(B.aVV),2.4*a1,H.xy,4,8,0)
d.d=1
break
case"smoke":d.d=0.3+0.08*Math.sin(a2*7)
d.fT(a0.$1(B.h_G),2.6*a1,D.aw,4,8,0)
d.d=1
v.$3(9,0.8,11)
w.$2(5,3)
break
case"fire":d.d=0.3+0.12*Math.sin(a2*20)
d.fT(a0.$1(B.aVV),4.4*a1,D.cT,4,8,0)
d.d=1
h=D.k.bj(a2*11)
for(t=0.85*a1,s=0.05*a1,r=0.5*a1,o=0.04*a1,k=0;k<6;++k){p=-2.2+k*0.88
g=Math.sin((h+k*5)*12.9898)*43758.5453
f=2.4+(g-Math.floor(g))*3.6
l=a0.$1(new A.r(p,-2.2,3))
g=Math.sin((h+k)*12.9898)*43758.5453
d.BB(l,a0.$1(new A.r(p+(g-Math.floor(g)-0.5)*1.2,-2.2+f,3.4)),t,D.fo,s,0,6)
d.BB(a0.$1(new A.r(p,-2.2,3.1)),a0.$1(new A.r(p,-2.2+f*0.62,3.5)),r,D.bG,o,0,6)}w.$2(16,6)
v.$3(10,1,13)
break
case"smolder":v.$3(4,0.9,9)
break}},
fwM:function fwM(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fwL:function fwL(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
h_i(d){var w
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
av1(d){var w
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
hpc(d,e,a0){var w,v,u,t,s=C.a([],x.fB),r=new A.fwg(s),q=new A.fwl(e),p=q.$2(B.Vh,B.JE),o=q.$2(B.Vh,B.JF),n=q.$2(B.Vh,B.JG),m=q.$2(B.Vi,B.JF),l=q.$2(B.Vi,B.JE),k=q.$2(B.Vi,B.JG),j=q.$2(B.Vj,B.JG),i=q.$2(B.Vj,B.JE),h=q.$2(B.Vj,B.JF),g=new C.Z(e,new A.fwh(),C.T(e).k("Z<1>")).gL(0),f=D.d.b5(e,new A.fwi())
if(f)r.$5("UNVERIFIED",B.f_k,"A conductor is in use whose function was never verified. A wire color alone does not prove what a wire does.","Verify every conductor with a tester before you connect it.","Identify each wire with a tester and the device diagram, then connect it.")
if(D.d.b5(e,new A.fwj()))r.$5("LOOSE",B.rV,"A connection is loose. A loose connection heats up and can arc.","Every conductor must be fastened tightly under its screw or connector.","Tighten the connection.")
if(D.d.b5(e,new A.fwk()))r.$5("EXPOSED",B.rV,"Bare copper is showing outside the terminal. An exposed energized conductor can shock or short.","No conductor may be left exposed.","Trim the wire so only the part under the screw is bare.")
if(!a0)r.$5("SUPPORT",B.rV,"The box or support is not rated for this device. It can fall.","A fixture or fan must hang from a box or bracket rated for its weight.","Use a box rated for this fixture (a fan-rated box for a fan).")
if(n>0||i>0)r.$5("HOT_TO_GROUND",B.rV,"The hot wire is connected to the ground. That is a short circuit to ground: a very large current.","The equipment ground never carries current in normal use, and the hot wire never touches it.","Hot goes on the hot terminal (brass). Ground goes only on the green screw.")
f=o>0
if(!(f&&m>0))w=l>0&&p>0
else w=!0
if(w)r.$5("SHORT",B.rV,"The hot and the neutral are connected together. That is a short circuit.","Hot and neutral must never touch each other.","Put each wire on its own terminal.")
else if(f||l>0)r.$5("REVERSED",B.rV,"Hot and neutral are reversed (reversed polarity). The device may still seem to work, but the parts that should be dead are live. This is a shock hazard.","Hot goes to the brass (hot) terminal and neutral to the silver (neutral) terminal.","Swap them: black (hot) to brass, white (neutral) to silver.")
if(k>0||h>0)r.$5("NEUTRAL_GROUND",B.rV,"The neutral and the equipment ground are joined at the device. Current can flow on the ground path and trip protective devices.","The neutral is never used as the equipment ground, and the two are not joined at the device.","Neutral to the silver terminal only. Ground to the green screw only.")
if(!(i>0&&n===0))f=h>0&&k===0
else f=!0
if(f)r.$5("GROUND_AS_CURRENT",B.rV,"The equipment ground was fastened to a terminal that carries current. The ground must never be used as a normal conductor.","The equipment ground goes only to the ground terminal.","Move the bare copper (ground) wire to the green screw.")
if(g>0&&p<d.b)r.$5("LOAD_SIDE",B.aP0,"The wires are on the LOAD screws. Power must come in on LINE; on LOAD the device would not protect or feed anything.","Supply (line) conductors go to the LINE terminals.","Move the wires to the LINE screws.")
f=d.b
if(p<f&&g===0&&o===0&&l===0&&n===0)r.$5("MISSING_HOT",B.Tw,"The hot wire is not on the hot terminal, so the device gets no power.","The device needs its hot connection.","Connect the black (hot) wire to the brass terminal.")
if(p>=f){f=d.c
f=m<f&&f>0&&l===0&&k===0}else f=!1
if(f)r.$5("OPEN_NEUTRAL",B.rV,"The neutral is not connected, but the hot wire is. The device will not run, and parts of it can still be live. There may be nothing to see.","The neutral return conductor must be connected.","Connect the white (neutral) wire to the silver terminal.")
if(d.d&&j===0)r.$5("MISSING_GROUND",B.rV,"There is no equipment ground. It may seem to work, but nothing protects you if a fault happens.","A required equipment ground must be connected to the ground terminal.","Connect the bare copper (ground) wire to the green screw.")
for(f=s.length,v=B.v3,u=0;u<f;++u){t=s[u].b
if(A.av1(t)>A.av1(v))v=t}return new A.b5J(v,s,A.hUG(s,e))},
hUG(d,e){var w=new A.ffY(d)
if(w.$1("SHORT")||w.$1("HOT_TO_GROUND"))return B.bsE
if(w.$1("LOOSE"))return B.bsw
if(w.$1("EXPOSED"))return B.bsC
if(w.$1("GROUND_AS_CURRENT"))return B.bsG
if(w.$1("REVERSED"))return B.bsF
if(w.$1("NEUTRAL_GROUND"))return B.bsH
if(w.$1("SUPPORT"))return B.bsD
if(w.$1("OPEN_NEUTRAL"))return B.bsB
if(w.$1("LOAD_SIDE")||w.$1("MISSING_HOT"))return B.bsu
if(w.$1("UNVERIFIED"))return B.bsv
if(w.$1("MISSING_GROUND"))return B.bsy
return B.bsA},
hOH(d){var w
switch(d.a.c.a){case 0:w=d.b.c===B.JE
break
case 1:w=d.b.c===B.JF
break
case 2:w=d.b.c===B.JG
break
case 3:w=!1
break
default:w=null}return w},
hpd(d,e,f){var w,v,u,t,s=C.a([],x.fB)
e.bQ(0,new A.fwn(f,s))
for(w=s.length,v=B.v3,u=0;u<w;++u){t=s[u].b
if(A.av1(t)>A.av1(v))v=t}return new A.b5J(v,s,v===B.v3?B.bsz:B.bsx)},
JB:function JB(d,e){this.a=d
this.b=e},
FE:function FE(d,e){this.a=d
this.b=e},
FL:function FL(d,e){this.a=d
this.b=e},
cxd:function cxd(d){this.c=d},
cAO:function cAO(d,e){this.a=d
this.c=e},
a44:function a44(d,e){this.a=d
this.b=e},
bLp:function bLp(d,e,f){this.b=d
this.c=e
this.d=f},
wj:function wj(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
th:function th(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h},
b5J:function b5J(d,e,f){this.a=d
this.b=e
this.c=f},
fwg:function fwg(d){this.a=d},
fwl:function fwl(d){this.a=d},
fwm:function fwm(d,e){this.a=d
this.b=e},
fwh:function fwh(){},
fwi:function fwi(){},
fwj:function fwj(){},
fwk:function fwk(){},
ffY:function ffY(d){this.a=d},
ffZ:function ffZ(d){this.a=d},
aaV:function aaV(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aaW:function aaW(d,e,f){this.a=d
this.b=e
this.c=f},
v9:function v9(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
b4r:function b4r(d,e){this.a=d
this.b=e},
b7B:function b7B(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cxf:function cxf(d,e,f){this.a=d
this.b=e
this.c=f},
cxg:function cxg(){},
cxh:function cxh(){},
cxi:function cxi(){},
PD:function PD(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fwn:function fwn(d,e){this.a=d
this.b=e},
h2T(d){var w
switch(d.a){case 0:w=D.bj
break
case 1:w=D.cT
break
case 2:w=D.cs
break
case 3:w=D.bG
break
case 4:w=D.bv
break
default:w=null}return w},
h62(d){return C.bU(E.lw,null,new A.fTR(),d,!0,!0,!0,D.k_,!1,!1,x.H)},
htB(d,e,f,g){var w=x.S
return C.bU(E.lw,null,new A.fTP(new A.cxf(e,f,C.U(w,w)),g),d,!0,!0,!0,D.k_,!1,!1,x.dZ)},
fTR:function fTR(){},
fTP:function fTP(d,e){this.a=d
this.b=e},
a11:function a11(d,e,f){this.c=d
this.d=e
this.a=f},
bu1:function bu1(d){var _=this
_.d=d
_.c=_.a=_.e=null},
f64:function f64(d,e){this.a=d
this.b=e},
f63:function f63(d,e,f){this.a=d
this.b=e
this.c=f},
f65:function f65(d){this.a=d},
f62:function f62(d,e){this.a=d
this.b=e},
f66:function f66(){},
f67:function f67(d){this.a=d},
a50:function a50(d,e){var _=this
_.a=d
_.b=e
_.c=!1
_.d=null},
bRB:function bRB(d){this.a=d},
bRA:function bRA(d){this.a=d}},B,I,E,Ai,F,O,K,Aj,Z,N,Ak,A4
J=c[1]
C=c[0]
D=c[2]
A5=c[86]
A6=c[129]
G=c[96]
P=c[118]
H=c[106]
A7=c[115]
A8=c[128]
Q=c[116]
A9=c[94]
Aa=c[120]
Ab=c[93]
L=c[91]
R=c[123]
A_=c[83]
Ac=c[112]
T=c[121]
U=c[127]
Ad=c[126]
A0=c[125]
Ae=c[119]
V=c[113]
W=c[97]
Af=c[104]
X=c[117]
A1=c[114]
A2=c[101]
Y=c[108]
A3=c[122]
Ag=c[124]
Ah=c[130]
M=c[100]
S=c[102]
A=a.updateHolder(c[25],A)
B=c[95]
I=c[27]
E=c[98]
Ai=c[66]
F=c[99]
O=c[31]
K=c[105]
Aj=c[109]
Z=c[111]
N=c[103]
Ak=c[110]
A4=c[107]
A.eVu.prototype={
a5(){return"_RadioType."+this.b}}
A.a9y.prototype={
U(){return new A.ae1(null,this.$ti.k("ae1<1>"))}}
A.ae1.prototype={
gcnk(){var w=this.e
return w===$?this.e=new A.box(this):w},
galM(){var w=this.G9$
w=w==null?null:w.gapB()
return w==null?this.a.d:w},
gazg(){this.a.toString
return!0},
bVA(){var w=this,v=w.a.c,u=w.galM()
if(v===u)return
w.a52(v===w.galM()?null:v)},
a52(d){var w=this.G9$
if(w!=null)w.glE().$1(d)
this.a.e.$1(d)},
d4(){var w,v=this
v.eF()
w=v.c
w.toString
v.sa6x(O.h_6(w,v.$ti.c))},
q(){this.sa6x(null)
var w=this.d
if(w!=null)w.q()
this.a3()},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.a
m.toString
switch(0){case 0:w=o.gcnk()
v=w.a.galM()
o.a.toString
u=new C.HK(!0,O.hMS(n,!1,n,o.gazg(),n,w,v,n,n,D.kl,n,n,n,n,n,!1,m.c,o.$ti.c),n)
break}C.amN(d)
o.a.toString
A:{m=new C.z(u,n)
break A}t=C.P(d)
s=O.h_7(d)
o.a.toString
w=s.b
w=w==null?n:w.aT(C.aY(x.c1))
r=w
if(r==null)r=t.ax.y
w=o.a.at
v=o.gazg()
q=o.gazg()?o.gbVz():n
p=o.d
if(p==null){p=C.k1(!0,n,!0,!0,n,n,!1)
o.d=p}return new C.zs(C.dL(!1,n,!0,n,v,p,n,n,!1,n,m.a,n,n,n,n,q,!1,r,n,n,n,n,n,n,w,n,m.b,n),n)}}
A.box.prototype={
gapB(){return this.a.galM()},
glE(){return this.a.gLH()},
biw(d){},
bjD(d){},
gdc(d){return this.a}}
A.aN7.prototype={}
A.r.prototype={
aa(d,e){return new A.r(this.a+e.a,this.b+e.b,this.c+e.c)},
aF(d,e){return new A.r(this.a-e.a,this.b-e.b,this.c-e.c)},
aJ(d,e){return new A.r(this.a*e,this.b*e,this.c*e)},
FU(d){var w=this.b,v=d.c,u=this.c,t=d.b,s=d.a,r=this.a
return new A.r(w*v-u*t,u*s-r*v,r*t-w*s)},
guR(){var w=this.a,v=this.b,u=this.c
return Math.sqrt(w*w+v*v+u*u)},
goT(d){var w=this,v=w.guR()
return v<1e-9?w:new A.r(w.a/v,w.b/v,w.c/v)}}
A.lR.prototype={}
A.cW.prototype={}
A.hf.prototype={}
A.tM.prototype={}
A.fM.prototype={}
A.fk.prototype={
Ws(){var w=this.x
if(!(w!==0))if(this.r){w=$.dR+1
$.dR=w}else w=0
this.w=w},
aIf(d,e,f,g,h,i,j,k){var w=this,v=i.goT(0)
w.a.push(new A.lR(C.a([d,e,f,g],x.o),v,h,w.b,j,w.d,k,w.c,w.e,w.f,w.w))},
bil(d,e,f,g,h,i,j){return this.aIf(d,e,f,g,h,i,0,j)},
cVH(d,e,f,g,h,i,j){return this.aIf(d,e,f,g,h,i,j,!1)},
GB(d,e,f,g,h,i){return this.aIf(d,e,f,g,h,i,0,!1)},
a6V(d,e,f,g,h,i){var w=this,v=(h==null?e.aF(0,d).FU(f.aF(0,d)):h).goT(0)
w.a.push(new A.lR(C.a([d,e,f],x.o),v,g,w.b,0,w.d,i,w.c,w.e,w.f,w.w))},
bjv(d,e,f,g){return this.a6V(d,e,f,g,null,!0)},
FH(d,e,f,g,h,i,j){var w,v,u,t,s,r,q,p,o,n,m
this.Ws()
w=e.a/2
v=e.b/2
u=e.c/2
t=new A.bZN(this,i,new A.bZO(j,d),new A.bZP(j),f,h)
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
hn(d,e,f,g){return this.FH(d,e,f,!0,0,g,0)},
aDt(d,e,f,g,h){return this.FH(d,e,f,g,h,1,0)},
n7(d,e,f,g,h){return this.FH(d,e,f,!0,g,h,0)},
aY(d,e,f,g){return this.FH(d,e,f,!0,g,1,0)},
aP(d,e,f){return this.FH(d,e,f,!0,0,1,0)},
wm(d,e,f,g,h){return this.FH(d,e,f,!0,g,1,h)},
cHh(d,e,f,g,h,i){return this.FH(d,e,f,g,h,i,0)},
aDs(d,e,f,g){return this.FH(d,e,f,!0,0,1,g)},
yN(b3,b4,b5,b6,b7,b8,b9,c0,c1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2=this
b2.Ws()
w=b4.aF(0,b3).goT(0)
v=w.b
u=w.FU(Math.abs(v)<0.9?B.e8:B.hC).goT(0)
t=w.FU(u).goT(0)
s=b9<0?b5:b9
r=new A.bZQ(u,c1,t)
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
q.push(new A.lR(C.a([new A.r(a6,a7,a8),new A.r(a9,b0,b1),new A.r(a0,a2,a4),new A.r(d,a1,a3)],j),a5,b6,b2.b,c0,b2.d,b8,b2.c,b2.e,b2.f,b2.w))
if(b7){q.push(new A.lR(C.a([b3,new A.r(a9,b0,b1),new A.r(a6,a7,a8)],j),new A.r(i,v,h),b6,b2.b,c0,b2.d,!1,b2.c,b2.e,b2.f,b2.w))
q.push(new A.lR(C.a([b4,new A.r(d,a1,a3),new A.r(a0,a2,a4)],j),w,b6,b2.b,c0,b2.d,!1,b2.c,b2.e,b2.f,b2.w))}}},
dR(d,e,f,g,h,i){return this.yN(d,e,f,g,!0,!1,-1,h,i)},
BB(d,e,f,g,h,i,j){return this.yN(d,e,f,g,!0,!1,h,i,j)},
T9(d,e,f,g,h,i,j,k){return this.yN(d,e,f,g,h,i,-1,j,k)},
bdk(d,e,f,g,h,i,j){return this.yN(d,e,f,g,h,!1,-1,i,j)},
dM(d,e,f,g,h){return this.yN(d,e,f,g,!0,!1,-1,0,h)},
aEI(d,e,f,g,h,i){return this.yN(d,e,f,g,h,!1,-1,0,i)},
L3(d,e,f,g,h,i){return this.yN(d,e,f,g,!0,!1,h,0,i)},
bdj(d,e,f,g,h,i,j){return this.yN(d,e,f,g,h,!1,i,0,j)},
fT(a7,a8,a9,b0,b1,b2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6=this
a6.Ws()
w=new A.bZM(b0,b1)
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
v.push(new A.lR(C.a([new A.r(u+i*a8,t+h*a8,s+g*a8),new A.r(u+f*a8,t+e*a8,s+d*a8),new A.r(u+a0*a8,t+a1*a8,s+a2*a8),new A.r(u+a3*a8,t+a4*a8,s+a5*a8)],r),new A.r(i+f+a0+a3,h+e+a1+a4,g+d+a2+a5).goT(0),a9,a6.b,b2,a6.d,!1,a6.c,a6.e,a6.f,a6.w))}},
bbm(d,e,f,g){return this.fT(d,e,f,6,10,g)},
fo(d,e,f,g,h){return this.fT(d,e,f,g,h,0.4)},
a6W(d,e,f,g,h,i,j,k){var w,v,u,t,s
this.Ws()
for(w=0;v=w+1,v<d.length;w=v){u=d[v]
t=d[w]
if(new A.r(u.a-t.a,u.b-t.b,u.c-t.c).guR()<0.000001)continue
u=d[w]
t=d[v]
if(g)s=w===0||w===d.length-2
else s=!1
this.T9(u,t,e,f,s,h,j,k)}if(i)for(u=e*0.98,w=1;v=w+1,v<d.length;w=v)this.fT(d[w],u,f,4,k,j)},
jg(d,e,f,g,h,i){return this.a6W(d,e,f,!0,!1,g,h,i)},
aJ3(d,e,f,g,h,i,j){return this.a6W(d,e,f,g,!1,h,i,j)},
bjx(d,e,f,g,h){return this.a6W(d,e,f,!0,!1,!0,g,h)},
zo(a4,a5,a6,a7,a8,a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=this
a3.Ws()
a3.bdk(a4,a5,a6,a8,!1,a9,b0)
w=a5.aF(0,a4).goT(0)
v=w.FU(Math.abs(w.b)<0.9?B.e8:B.hC).goT(0)
u=new A.bZR(v,b0,w.FU(v).goT(0))
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
s.push(new A.lR(C.a([new A.r(p+i*a7,m+h*a7,l+j*a7),new A.r(p+f*a6,m+e*a6,l+g*a6),new A.r(p+a0*a6,m+a1*a6,l+d*a6),new A.r(p+a2.a*a7,m+a2.b*a7,l+a2.c*a7)],r),n,a8,a3.b,a9,a3.d,!1,a3.c,a3.e,a3.f,a3.w))}}},
cX5(d,e,f,g,h,i){return this.zo(d,e,f,g,h,i,16)}}
A.xa.prototype={
r6(d){var w,v,u,t=this
t.Q=d
if(!d){w=t.a
v=t.y
u=t.z
t.a=D.k.E(w,v-u,v+u)}t.aU()},
hQ(d,e,f,g){var w=this
w.as=f
w.at=d
w.ax=g
w.ay=e
w.aU()},
xf(d,e){return this.hQ(d,null,e,null)},
bnp(d){return this.hQ(d,null,null,null)},
apx(d){return this.hQ(null,null,d,null)},
apy(d,e,f){return this.hQ(d,e,f,null)},
Nj(d,e,f,g){var w=this
w.ay=w.ax=w.at=w.as=null
w.d=f
w.c=d
w.a=g
w.b=e
w.aU()},
a6J(d){var w,v,u,t=this
if(!(t.as!=null||t.at!=null||t.ax!=null||t.ay!=null))return
w=1-Math.exp(-d*7)
v=t.as
if(v!=null){u=A.o0(t.d,v,w)
t.d=u
if(u.aF(0,v).guR()<0.02){v=t.as
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
t.ay=null}}t.aU()},
cYk(d,e){var w,v,u,t,s=this,r=e.a,q=e.b,p=Math.min(r,q)*1.15,o=Math.cos(s.a),n=Math.sin(s.a)
q=new A.bIE(s,new A.bIF(Math.cos(s.b),Math.sin(s.b),o,n),(d.a-r/2)/p,-(d.b-q/2)/p)
w=q.$1(0)
r=q.$1(1).c
v=w.c
u=r-v
if(Math.abs(u)<1e-9)return null
t=(0-v)/u
if(t<=0)return null
return q.$1(t)},
beF(d,e,f){var w,v,u,t,s=this,r=e.a,q=e.b,p=Math.min(r,q)*1.15,o=Math.cos(s.a),n=Math.sin(s.a)
q=new A.bIy(s,new A.bIz(Math.cos(s.b),Math.sin(s.b),o,n),(d.a-r/2)/p,-(d.b-q/2)/p)
w=q.$1(0)
r=q.$1(1).b
v=w.b
u=r-v
if(Math.abs(u)<1e-9)return null
t=(f-v)/u
if(t<=0)return null
return q.$1(t)},
cO1(d,e){return this.beF(d,e,0)},
ap8(d){var w=this
w.at=null
w.c=D.k.E(w.c*d,w.e,w.f)
w.aU()}}
A.bTM.prototype={
cUV(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this.a,f=g.length-1,e=a0.a,d=a0.b
for(;;){if(!(f>=0)){w=0
v=null
break}if(g[f].a.gbx().a.contains(e,d)){u=g[f]
w=u.b
u=u.a.gbx().a.getBounds()
v=new C.a3(u[0],u[1],u[2],u[3])
break}--f}if(w!==0&&v.gdC()<16)return w
for(u=g.length,t=0,s=1/0,r=0;r<g.length;g.length===u||(0,C.M)(g),++r){q=g[r]
p=q.a.gbx().a.getBounds()
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
A.b5M.prototype={
gMM(d){var w=this.r.a
return w==null?0:w},
chk(b1,b2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=null,a8=b2.a,a9=b2.b,b0=new C.a3(0,0,0+a8,0+a9)
$.S()
w=C.I()
w.sam(B.c2p.aB(0,b0))
b1.aO(b0,w)
v=this.c.a*90
w=b1.a
J.bl(w.save())
w.translate(a8*0.45-v,a9*0.3)
b1.ic(0,-0.45)
for(u=x.O,t=0;t<3;++t){s=C.bJ(D.J,a9*(0.2-t*0.05),a8*(1.9-t*0.4))
r=[B.bfc,D.aQ,D.r8][t]
q=new C.ap(D.R,D.N,D.U,D.V,D.S)
q.sam(new C.c0(D.A,0.5,D.x,a7,0,C.a([r.j(0.3-t*0.07),r.j(0)],u),a7,a7).aB(0,s))
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
e.sam(new C.c0(D.A,0.5,D.x,a7,0,C.a([D.aQ.j(0.28),B.bm2],u),a7,a7).aB(0,C.bX(i,g)))
b1.ad(i,g,e)
J.bl(w.save())
f=new C.aF(f.r,D.ag,a7,a7,C.a([],x.g))
f.D(new C.jE(C.bX(i,h)))
b1.mE(0,f)
f=C.I()
f.sam(B.eqK.aB(0,C.bX(i,h)))
b1.ad(i,h,f)
d=C.I()
d.r=B.bfC.gp(0)
for(a0=0;a0<4;++a0){u=B.d_7[a0].a
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
for(u=h*0.16,a0=0;a0<3;++a0){q=B.cX4[a0]
q=C.bJ(new C.t(l+q.a*h,j+q.b*h),u,q.c*h*2)
p=a5.G()
w.drawOval(C.bF(q),p)
p.delete()}u=i.aa(0,new C.t(h*0.45,h*0.35))
$.S()
q=C.I()
q.r=D.w.j(0.38).gp(0)
b1.ad(u,h,q)
w.restore()
a6=new C.t(a8*0.18-v*0.2,a9*0.12)
w=C.I()
w.r=B.bgT.gp(0)
b1.ad(a6,h*0.28,w)
w=h*0.05
q=a6.aa(0,new C.t(h*0.08,w))
u=C.I()
u.r=B.afd.gp(0)
b1.ad(q,h*0.07,u)
u=-h
u=a6.aa(0,new C.t(u*0.1,u*0.09))
q=C.I()
q.r=B.afd.gp(0)
b1.ad(u,w,q)},
a1(i9,j0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6,d7,d8,d9,e0,e1,e2,e3,e4,e5,e6,e7,e8,e9,f0,f1,f2,f3,f4,f5,f6,f7,f8,f9,g0,g1,g2,g3,g4,g5,g6,g7,g8,g9,h0,h1,h2,h3,h4,h5,h6,h7,h8,h9,i0,i1,i2,i3,i4,i5,i6=this,i7=null,i8={}
if(i6.z)i6.chk(i9,j0)
else{w=0+j0.a
v=0+j0.b
$.S()
u=C.I()
t=i6.y
s=C.ar(t,D.c,0.06)
s.toString
u.sam(new C.a9(D.b3,D.b6,D.x,C.a([s,t],x.O),i7,i7).aB(0,new C.a3(0,0,w,v)))
i9.aO(new C.a3(0,0,w,v),u)}r=j0.a
q=j0.b
p=Math.min(r,q)*1.15
o=r/2
n=q/2
w=i6.c
m=Math.cos(w.a)
l=Math.sin(w.a)
k=Math.cos(w.b)
j=new A.crN(m,l,k,Math.sin(w.b))
i=new A.crO(i6,j)
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
b3=B.h5_.goT(0)
b4=b3.aa(0,B.tb).goT(0)
b5=C.a([],x.bl)
w=i6.w
b6=v.a
if(!(w==null)){s=C.C(b6,x.fX)
D.d.v(s,w.$1(i6.gMM(0)))
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
d6=A.hUp(c9)
c8=d6.length
if(c8<3)continue
for(d7=0,d8=B.f1,a7=0;a7<c8;++a7){d9=d6[a7]
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
f1=D.k.V(D.k.E(f0.gb2(f0)*255*e8+c8,0,255))
f2=D.k.V(D.k.E(f0.gbc()*255*e8+c8,0,255))
f3=D.k.V(D.k.E(f0.gb9(f0)*255*e8+c8,0,255))
c8=$.S()
c9=C.a([],f)
f4=new C.aF(c8.r,D.ag,i7,i7,c9)
for(f5=0;f5<d6.length;++f5){d9=d6[f5]
c8=d9.c
e6=o+d9.a*p/c8
e7=n-d9.b*p/c8
if(f5===0){c8=new C.aX(e6,e7)
c9.push(c8)
d0=f4.f
if(d0!=null)c8.bv(d0)
c8=f4.e
if(c8!=null)c8.a.delete()
f4.e=null}else{c8=new C.aq(e6,e7)
c9.push(c8)
d0=f4.f
if(d0!=null)c8.bv(d0)
c8=f4.e
if(c8!=null)c8.a.delete()
f4.e=null}}c8=new C.br()
c9.push(c8)
c9=f4.f
if(c9!=null)c8.bv(c9)
c8=f4.e
if(c8!=null)c8.a.delete()
f4.e=null
c8=a3.f
c9=d6.length
d0=a3.d
d1=d0===s&&a4
b5.push(new A.Au(a3.y,a3.z,i7,f4,new C.u(c8,(f1&255)/255,(f2&255)/255,(f3&255)/255,D.q),d7/c9-a3.x,d0,c8<0.99,d1))}w=i6.x
f6=v.d
if(w==null)f7=f6
else{s=C.C(f6,x.K)
D.d.v(s,w.$1(i6.gMM(0)))
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
c7=j.$1(new A.r(c6.a-c9,c6.b-d0,c6.c-c8).FU(new A.r(b7.a-c9,b7.b-d0,b7.c-c8)))
if(c7.a*((b9.a+c0.a+c3.a+c4.a)*0.25)+c7.b*((b9.b+c0.b+c3.b+c4.b)*0.25)+c7.c*c5>0&&!g2.x)continue
if(c5>b0)continue
if(D.d.d5(a8,new A.crG())){b7=C.a([],s)
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
b2.n(0,a8,(b7==null?0:b7)+1)}continue}a8=$.S()
b9=C.a([],f)
f4=new C.aF(a8.r,D.ag,i7,i7,b9)
a8=C.C(b7,w)
b9.push(new C.LH(a8,!0))
a8=f4.gbx().a.getBounds()
b9=a8[0]
c0=a8[1]
h0=(a8[2]-b9)*(a8[3]-c0)
f8.push(h0)
b5.push(new A.Au(g2.r,g2.w,new A.crH(i8,i6,g1<g0,h0,f9,g2,b7,f4),f4,D.K,c5-g2.f,g2.b,!1,!1))
continue}h1=new A.crF(a8)
h2=C.a([],a5)
a8=$.S()
b7=C.a([],f)
f4=new C.aF(a8.r,D.ag,i7,i7,b7)
for(h3=0;h3<6;h3=h4)for(a8=h3/6,h4=h3+1,b9=h4/6,f5=0;f5<8;f5=h5){c0=f5/8
h5=f5+1
c3=h5/8
h6=C.a([h1.$2(c0,a8),h1.$2(c3,a8),h1.$2(c3,b9),h1.$2(c0,b9)],b8)
if(D.d.b5(h6,new A.crI()))continue
c0=C.a([],s)
for(a2=0;a2<4;++a2){d9=h6[a2]
c3=d9.c
c0.push(new C.t(o+d9.a*p/c3,n-d9.b*p/c3))}h2.push(new C.bj(f5,h3,c0))
c0=C.C(c0,w)
c0=new C.LH(c0,!0)
b7.push(c0)
c3=f4.f
if(c3!=null)c0.bv(c3)
c0=f4.e
if(c0!=null)c0.a.delete()
f4.e=null}if(h2.length===0)continue
b5.push(new A.Au(g2.r,g2.w,new A.crJ(i6,g2,h2),f4,D.K,c5-g2.f,g2.b,!1,!1))}D.d.aW(f8,new A.crK())
f9[0]=f8.length>6?f8[5]:0
h7=C.dQ(b1,u,t)
h8=C.dQ(b2,u,u)
for(w=b5.length,a2=0;u=b5.length,a2<u;b5.length===w||(0,C.M)(b5),++a2){h9=b5[a2]
u=h9.b
if(u!==0){t=h7.h(0,u)
if(t==null)t=0
h7.n(0,u,t+h9.r)
t=h8.h(0,u)
h8.n(0,u,(t==null?0:t)+1)}}for(f5=0;f5<u;++f5)b5[f5].c=f5
D.d.aW(b5,new A.crL(new A.crM(h7,h8)))
w=i6.d.a
D.d.a8(w)
$.S()
i0=C.I()
i0.b=D.N
i1=C.I()
i1.b=D.a9
i1.c=0.8
for(u=b5.length,t=i9.a,a2=0;a2<b5.length;b5.length===u||(0,C.M)(b5),++a2){i2=b5[a2]
s=i2.d
if(s!=null){s.$1(i9)
s=i2.w
if(s!==0)w.push(new C.z(i2.e,s))
continue}s=i2.f
i0.r=s.gp(0)
a5=i2.e
i3=i0.G()
a8=a5.e
t.drawPath((a8==null?a5.e=new C.cj(a5.gbx().a.snapshot()):a8).a,i3)
i3.delete()
if(!i2.x){i1.r=s.gp(0)
i3=i1.G()
s=a5.e
t.drawPath((s==null?a5.e=new C.cj(a5.gbx().a.snapshot()):s).a,i3)
i3.delete()}s=i2.w
if(s!==0)w.push(new C.z(a5,s))}if(a4){$.S()
g7=C.I()
g7.b=D.a9
g7.c=1.4
g7.r=D.c.j(0.35+0.25*Math.sin(i6.gMM(0)*6)).gp(0)
for(u=b5.length,a2=0;a2<b5.length;b5.length===u||(0,C.M)(b5),++a2){i2=b5[a2]
if(i2.y){s=i2.e
i3=g7.G()
a4=s.e
t.drawPath((a4==null?s.e=new C.cj(s.gbx().a.snapshot()):a4).a,i3)
i3.delete()}}}for(v=v.c,u=v.length,a2=0;a2<v.length;v.length===u||(0,C.M)(v),++a2){i4=v[a2]
d9=i.$1(i4.a)
s=d9.c
if(s<1)continue
a4=o+d9.a*p/s
s=n-d9.b*p/s
i5=new C.jQ(new C.eu(i4.b,i7,i7,D.cQ,i7,i7,i7,i7,i7,i7,new C.F(!0,D.c,i7,i7,i7,i7,11,D.u,i7,i7,i7,i7,i7,i7,i7,i7,i7,i7,i7,i7,i7,i7,i7,i7,i7,i7)),D.a3,D.bZ,new C.jA(1),i7,i7,i7,i7,D.bW,i7)
i5.ej()
a5=i5.b
a8=a5.c
a5=a5.a.c
f1=C.bs(C.bJ(new C.t(a4,s),a5.gbb(a5)+8,a8+14),D.i5)
a8=$.S()
a5=new C.ap(D.R,D.N,D.U,D.V,D.S)
a5.r=i4.c.j(0.92).gp(0)
i3=a5.G()
t.drawRRect(C.ek(f1),i3)
i3.delete()
a5=new C.ap(D.R,D.N,D.U,D.V,D.S)
a5.b=D.a9
a5.c=1
a5.r=D.ae.gp(0)
i3=a5.G()
t.drawRRect(C.ek(f1),i3)
i3.delete()
a5=i5.b
b7=a5.c
a5=a5.a.c
i5.a1(i9,new C.t(a4-b7/2,s-a5.gbb(a5)/2))
s=i4.d
if(s!==0){a4=C.a([],f)
a4.push(new C.iN(f1))
w.push(new C.z(new C.aF(a8.r,D.ag,i7,i7,a4),s))}}},
aw(d){return!0}}
A.cBz.prototype={}
A.Au.prototype={}
A.av6.prototype={
U(){return new A.br6(new A.bTM(C.a([],x.a6)),new C.ez(0,$.ax()),D.bD,D.J,null,null)}}
A.br6.prototype={
a_(){var w,v=this
v.a2()
A.hzy()
w=v.qO(new A.eYY(v))
w.h9(0)
v.d!==$&&C.aP()
v.d=w},
q(){var w=this.d
w===$&&C.c()
w.q()
w=this.f
w.S$=$.ax()
w.P$=0
this.bxP()},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.a,l=m.as==null,k=l?n:new A.eYS(o)
l=l?n:new A.eYT(o,d)
w=m.c
v=m.d
u=m.e
t=m.r
s=o.f
r=m.w
m=m.x
q=C.a([v,s],x.dS)
p=o.a
q=C.a([C.jF(new C.ex(C.b4(n,n,n,new A.b5M(w,v,o.e,u,t,s,r,m,p.y,p.Q,new C.h5(q)),D.fC),n),D.t,n)],x.p)
o.a.toString
return C.nJ(D.jy,C.aB(D.ca,new C.an(D.a_,n,D.b0,D.t,q,n),D.y,!1,n,l,k,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new A.eYU(o),new A.eYV(o),n,n,n,n,n,n,n,new A.eYW(o),n,n,n,!1,D.a5),n,n,n,n,n,n,new A.eYX(o),n)}}
A.aNg.prototype={
q(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbE())
w.a9$=null
w.a3()},
aV(){this.b6()
this.b3()
this.bF()}}
A.bbq.prototype={}
A.bbL.prototype={}
A.bgQ.prototype={}
A.dnc.prototype={}
A.Mv.prototype={
Pu(d){return this.cnC(d)},
cnC(e4){var w=0,v=C.j(x.H),u=this,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6,d7,d8,d9,e0,e1,e2,e3
var $async$Pu=C.e(function(e6,e7){if(e6===1)return C.f(e7,v)
for(;;)switch(w){case 0:if(e4.getUint32(0,!0)!==1179937895)throw C.W("not a glb file")
for(n=x.b,m=12,l=null,k=null;m+8<=e4.byteLength;){j=e4.getUint32(m,!0)
i=e4.getUint32(m+4,!0)
h=J.eG(D.dG.gaR(e4),e4.byteOffset+m+8,j)
if(i===1313821514)l=n.a(D.X.aN(0,new C.Gh(!1).DF(h,0,null,!0),null))
if(i===5130562)k=h
m+=8+j}if(l==null||k==null)throw C.W("empty glb")
g=new A.dho(l,k)
f=J.a5(l)
e=x.j
d=J.kH(e.a(f.h(l,"nodes")),n)
n=d.a
a0=J.a5(n)
a1=a0.gL(n)
a2=x.S
u.b=C.c2(a1,-1,!1,a2)
a3=C.a([],x.s)
for(a4=d.$ti,a5=a4.k("bS<c_.E>"),a6=new C.bS(d,d.gL(0),a5),a7=a4.k("c_.E");a6.C();){a8=a6.d
a8=C.aU(J.q(a8==null?a7.a(a8):a8,"name"))
if(a8==null)a8=""
a3.push(a8.toLowerCase())}u.c=a3
u.d=D.d.bg(a3,new A.bSz())
a3=x.gL
a6=C.a([],a3)
for(a5=new C.bS(d,d.gL(0),a5),a8=x.U,a9=x.t;a5.C();){b0=a5.d
if(b0==null)b0=a7.a(b0)
b1=C.a([],a9)
b0=a8.a(J.q(b0,"children"))
b0=J.aV(b0==null?D.cy:b0)
while(b0.C())b1.push(D.k.N(C.e5(b0.gR(b0))))
a6.push(b1)}u.f=a6
for(a5=u.b,b2=0;b2<a1;++b2)for(a7=a6[b2],b0=a7.length,b3=0;b3<b0;++b3)a5[a7[b3]]=b2
a5=C.a([],a9)
a6=e.a(f.h(l,"scenes"))
a7=C.aK(f.h(l,"scene"))
a7=a7==null?null:D.k.N(a7)
a6=J.aV(e.a(J.q(J.q(a6,a7==null?0:a7),"nodes")))
while(a6.C())a5.push(D.k.N(C.e5(a6.gR(a6))))
u.r=a5
a5=a1*3
u.w=new Float64Array(a5)
u.x=new Float64Array(a1*4)
u.y=new Float64Array(a5)
for(a5=x.Y,a4=a4.y[1],b2=0;b2<a1;++b2){b4=a4.a(a0.h(n,b2))
a6=J.a5(b4)
a7=a8.a(a6.h(b4,"translation"))
b5=a7==null?null:J.kH(a7,a5)
if(b5==null)b5=G.aqV
a7=a8.a(a6.h(b4,"rotation"))
b6=a7==null?null:J.kH(a7,a5)
if(b6==null)b6=B.c4E
a6=a8.a(a6.h(b4,"scale"))
b7=a6==null?null:J.kH(a6,a5)
if(b7==null)b7=B.chF
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
n=J.aV(n==null?D.cy:n)
while(n.C()){b7=n.gR(n)
a0=C.a([],a9)
for(a3=J.a5(b7),a4=J.aV(e.a(a3.h(b7,"joints")));a4.C();)a0.push(D.k.N(C.e5(a4.gR(a4))))
u.Q.push(a0)
c1=a3.h(b7,"inverseBindMatrices")!=null?g.Fw(D.k.N(C.e5(a3.h(b7,"inverseBindMatrices")))).a:null
a3=u.as
a3.push(c1==null?A.hCE(a0.length):c1)}n=a8.a(f.h(l,"animations"))
n=J.aV(n==null?D.cy:n)
a0=u.z
a3=x.G
a4=x.gR
while(n.C()){c2=n.gR(n)
c3=C.a([],a4)
a5=J.a5(c2)
c4=e.a(a5.h(c2,"samplers"))
for(a6=J.aV(e.a(a5.h(c2,"channels"))),a7=J.a5(c4),c5=0;a6.C();){c6=a6.gR(a6)
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
d0=g.Fw(D.k.N(C.e5(a9.h(b7,"input")))).a
d1=g.Fw(D.k.N(C.e5(a9.h(b7,"output")))).a
d2=a9.h(b7,"interpolation")
if(d2==null)d2="LINEAR"
d3=b0===1?4:3
a9=J.l9(d2)
if(a9.A(d2,"CUBICSPLINE")){b1=d0.length
d4=new Float64Array(b1*d3)
for(b2=0;b2<b1;++b2)for(b9=b2*d3,c0=(b2*3+1)*d3,b8=0;b8<d3;++b8)d4[b9+b8]=d1[c0+b8]
d1=d4}if(!D.oq.gan(d0)){b1=d0.length
if(b1===0)C.b8(C.fs())
c5=Math.max(c5,d0[b1-1])}c3.push(new A.bbq(c8,b0,d0,d1,a9.A(d2,"STEP")))}d5=C.aU(a5.h(c2,"name"))
if(d5==null)d5="clip"+a0.a
a0.n(0,d5,new A.bbL(c5,c3))}t=C.U(a2,x.c9)
s=0
n=x.H
e="Could not read a picture of "+u.a+": "
case 2:a0=s
a2=a8.a(f.h(l,"images"))
a2=a2==null?null:J.ad(a2)
if(!(a0<(a2==null?0:a2))){w=3
break}r=g.cQ3(s)
if(r==null){w=4
break}try{a0=r
d6=C.h3B(a0)
q=d6==null?null:d6.pN(0,a0,null)
if(q!=null){p=q.cID(D.c7,4)
a0=s
a2=p.a
a2=a2==null?null:a2.a
if(a2==null)a2=0
a3=p.a
a3=a3==null?null:a3.b
if(a3==null)a3=0
d7=p
a4=d7.gqY()
d8=4!==a4?d7.cIC(null,4):d7
a4=d8.a
a4=a4==null?null:a4.bmy(d8!==d7,D.Ld)
if(a4==null){a4=d7.a
a4=a4==null?null:J.eQ(a4.gaR(a4))
if(a4==null){a4=d7.a
a4=a4==null?null:a4.gaR(a4)
if(a4==null)a4=D.aG.gaR(new Uint8Array(0))
a4=J.eQ(a4)}}J.aH(t,a0,new A.bgQ(a2,a3,new Uint8Array(C.ci(a4))))}}catch(e5){o=C.ab(e5)
$.am.$1(e+C.w(o))}w=5
return C.b(C.bP(D.bD,null,n),$async$Pu)
case 5:case 4:++s
w=2
break
case 3:e0=u.bRB(l,g,d,t)
w=6
return C.b(C.bP(D.bD,null,n),$async$Pu)
case 6:u.at=u.b87(e0,5000)
w=7
return C.b(C.bP(D.bD,null,n),$async$Pu)
case 7:u.ax=u.b87(e0,1100)
n=u.at
n.r=u.b3m(n)
n=u.ax
n.r=u.b3m(n)
e1=u.az2(null,0)
e2=u.b6e(u.at,e1)
for(n=e2.length,e3=1/0,s=1;s<n;s+=3)e3=Math.min(e3,e2[s])
u.ay=isFinite(e3)?e3:0
return C.h(null,v)}})
return C.i($async$Pu,v)},
cp1(d){var w,v,u
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
b3m(d){var w,v,u,t,s,r,q,p,o,n,m=d.a.length/3|0,l=new Uint8Array(m)
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
l[t]=o<n.length?this.cp1(n[o]):5}return l},
bRB(e9,f0,f1,f2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6,d7,d8,d9,e0,e1,e2=null,e3="POSITION",e4="JOINTS_0",e5="WEIGHTS_0",e6=J.a5(e9),e7=x.U,e8=e7.a(e6.h(e9,"materials"))
if(e8==null)e8=D.cy
w=x.b
v=J.kH(e8,w)
e8=e7.a(e6.h(e9,"textures"))
u=J.kH(e8==null?D.cy:e8,w)
e8=x.j
t=J.kH(e8.a(e6.h(e9,"meshes")),w)
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
for(a9=J.kH(e8.a(J.q(j.a(k.h(l,b1)),"primitives")),w),b0=a9.$ti,a9=new C.bS(a9,a9.gL(0),b0.k("bS<c_.E>")),b3=b2==null,b0=b0.k("c_.E");a9.C();){b4=a9.d
if(b4==null)b4=b0.a(b4)
b5=J.a5(b4)
b6=J.H8(e.a(b5.h(b4,"attributes")),i,h)
if(b6.h(0,e3)==null||b5.h(b4,"indices")==null)continue
b7=f0.Fw(D.k.N(C.e5(b6.h(0,e3)))).a
b8=b7.length/3|0
b9=b6.h(0,e4)!=null?f0.Fw(D.k.N(C.e5(b6.h(0,e4)))).a:e2
c0=b6.h(0,e5)!=null?f0.Fw(D.k.N(C.e5(b6.h(0,e5)))).a:e2
c1=C.aK(b5.h(b4,"material"))
c2=c1==null?e2:D.k.N(c1)
c1=g.a(J.q(c2!=null?a1.a(a0.h(d,c2)):D.cz,"pbrMetallicRoughness"))
c3=c1==null?e2:J.H8(c1,i,h)
if(c3==null)c3=D.cz
c1=e7.a(c3.h(0,"baseColorFactor"))
c4=c1==null?e2:J.kH(c1,f)
if(c4==null)c4=B.chG
c1=g.a(c3.h(0,"baseColorTexture"))
c5=c1==null?e2:J.H8(c1,i,h)
c1=c5==null
c6=C.aK(c1?e2:c5.h(0,"texCoord"))
c7=c6==null?e2:D.k.N(c6)
c8=b6.h(0,"TEXCOORD_"+(c7==null?0:c7))
c9=c8!=null?f0.Fw(D.k.N(C.e5(c8))).a:e2
if(!c1){c1=C.aK(J.q(a4.a(a3.h(a2,D.k.N(C.e5(c5.h(0,"index"))))),"source"))
d0=c1==null?e2:D.k.N(c1)
d1=d0!=null?f2.h(0,d0):e2}else d1=e2
d2=s.length/3|0
D.d.v(s,b7)
for(c1=c0!=null,c6=b9!=null,d3=0;d3<b8;++d3){o.push(b3?255:b2)
for(d4=d3*4,d5=0;d5<4;++d5){q.push(c6?D.k.N(b9[d4+d5]):0)
if(c1)d6=c0[d4+d5]
else d6=d5===0?1:0
p.push(d6)}}d7=f0.Fw(D.k.N(C.e5(b5.h(b4,"indices")))).a
for(b4=d7.length,d8=0;b5=d8+2,b5<b4;d8+=3){d9=D.k.N(d7[d8])
e0=D.k.N(d7[d8+1])
e1=D.k.N(d7[b5])
n.push(d2+d9)
n.push(d2+e0)
n.push(d2+e1)
m.push(this.bPJ(d1,c9,d9,e0,e1,c4))}if(b3)a5.push(new C.bj(d2,b8,a7))}}return new A.dsK(new Float64Array(C.ci(s)),new Uint16Array(C.ci(q)),new Float64Array(C.ci(p)),new Uint8Array(C.ci(o)),new Int32Array(C.ci(n)),new Int32Array(C.ci(m)))},
bPJ(d,e,f,g,h,i){var w,v,u,t,s,r,q,p=J.a5(i),o=p.h(i,0),n=p.h(i,1),m=p.h(i,2)
if(d!=null&&e!=null){w={}
p=f*2
v=g*2
u=h*2
t=(e[p]+e[v]+e[u])/3
s=(e[p+1]+e[v+1]+e[u+1])/3
r=w.a=w.b=w.c=0
q=new A.bSw(w,d)
q.$2(t,s)
for(p=[f,g,h];r<3;++r){v=p[r]*2
q.$2((t+e[v])/2,(s+e[v+1])/2)}o*=w.c/4/255
n*=w.b/4/255
m*=w.a/4/255}p=new A.bSv()
return(p.$1(o)<<16|p.$1(n)<<8|p.$1(m)|4278190080)>>>0},
b87(d7,d8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4={},d5=d7.a,d6=d5.length/3|0
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
h=new A.bSB(d4,d6,d7)
g=new A.bSD(d7)
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
D.jV.hv(b0,0,a3,-1)
b1=new Float64Array(a3)
D.oq.hv(b1,0,a3,1/0)
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
c3=A.had(c1,c2,a9)
c4=q[D.o.ao(c0,3)]
c5=b8.h(0,c3)
b2=c4&255
if(c5==null){b8.n(0,c3,C.a([D.o.aD(c4,16)&255,D.o.aD(c4,8)&255,b2,1],p))
b9.n(0,c3,b7.length/3|0)
b7.push(c1)
b7.push(c2)
b7.push(a9)}else{c5[0]=c5[0]+(D.o.aD(c4,16)&255)
c5[1]=c5[1]+(D.o.aD(c4,8)&255)
c5[2]=c5[2]+b2
c5[3]=c5[3]+1}}s=b7.length
c6=new Int32Array(s/3|0)
b8.bQ(0,new A.bSA(c6,b9))
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
c9[d2]=q[d3]}d0[a9]=s[d1]}return new A.dnc(c7,c8,c9,d0,new Int32Array(C.ci(b7)),c6)},
az2(a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0=d.b
a0===$&&C.c()
w=d.w
w===$&&C.c()
v=new Float64Array(C.ci(w))
w=d.x
w===$&&C.c()
u=new Float64Array(C.ci(w))
w=d.y
w===$&&C.c()
t=new Float64Array(C.ci(w))
s=a1==null?null:d.z.h(0,a1)
if(s!=null&&s.b>0){w=s.b
r=a2-Math.floor(a2/w)*w
for(w=s.c,q=w.length,p=0;p<w.length;w.length===q||(0,C.M)(w),++p){o=w[p]
n=o.b
if(n===0)n=v
else n=n===1?u:t
A.hCF(o,r,n)}}m=d.CW.c3(0,"world",new A.bSx(a0.length))
l=new A.bSy(d,v,u,t,new Float64Array(16),m)
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
A.hae(m,w*16,q[h],f*16,j,i)
i+=16}}for(w=a0.length,p=0;p<a0.length;a0.length===w||(0,C.M)(a0),++p,i=e){e=i+16
D.oq.el(j,i,e,m,a0[p].c*16)}return j},
b6e(b8,b9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3=b8.a,b4=b3.length/3|0,b5=new Float64Array(b4*3),b6=C.a([],x.t),b7=this.Q
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
cI1(d,e){var w,v,u=new A.bSG(this)
if(d){w=u.$1("run")
v=w==null?u.$1("walk"):w}else if(e){w=u.$1("walk")
v=w}else{w=u.$1("idle")
if(w==null)w=u.$1("samba")
v=w}if(v!=null)return v
u=u.$1("samba")
if(u==null){u=this.z
u=new C.cv(u,C.a6(u).k("cv<1>")).dN(0,new A.bSE(),new A.bSF(this))}return u},
cVa(a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=this,a6="world",a7={}
if(a8){w=a5.at
w===$&&C.c()
v=w}else{w=a5.ax
w===$&&C.c()
v=w}u=a5.cI1(b1,b5)
w=a5.z.h(0,u)
t=w==null?null:w.b
if(t==null)t=1
if(b5&&b4!=null&&D.a.t(u.toLowerCase(),"walk"))s=b4/50*t
else{w=B.dx2.h(0,a5.a)
s=b2*(w==null?1:w)}w=a5.e
r=w.h(0,u)
if(r==null){a5.az2(u,0)
if(a5.d>=0){q=a5.CW
r=new C.z(q.h(0,a6)[a5.d*16+12],q.h(0,a6)[a5.d*16+14])}else r=D.zT
w.n(0,u,r)}p=a5.az2(u,s)
a7.a=a7.b=0
if(a5.d>=0){w=a5.CW
a7.b=w.h(0,a6)[a5.d*16+12]-r.a
a7.a=w.h(0,a6)[a5.d*16+14]-r.b}o=a5.b6e(v,p)
w=B.dxE.h(0,a5.a)
n=b7+(w==null?0:w)
m=C.im(v.a.length/3|0,new A.bSI(a7,a5,o,36,b0,Math.cos(n),Math.sin(n),b6,b8),!0,x.Q)
w=C.a([],x.t)
for(l=0;l<6;++l){q=$.dR+1
$.dR=q
w.push(q)}k=C.a([],x.z)
for(q=v.e,j=q.length,i=v.f,h=b3==null,g=x.o,f=0;f<j;f+=3){e=m[q[f]]
d=m[q[f+1]]
a0=m[q[f+2]]
a1=e.a
a2=e.b
a3=e.c
a4=new A.r(d.a-a1,d.b-a2,d.c-a3).FU(new A.r(a0.a-a1,a0.b-a2,a0.c-a3)).goT(0)
a3=C.a([e,d,a0],g)
a1=h?C.b1(i[D.o.ao(f,3)]):A.i22(i[D.o.ao(f,3)],b3)
a2=v.r
a2===$&&C.c()
k.push(new A.lR(a3,a4,a1,a9,0.08,1,!1,0,0,2,w[a2[q[f]]]))}return k}}
A.dsK.prototype={}
A.dho.prototype={
cQ3(d){var w,v,u=this.a,t=J.a5(u),s=x.j,r=x.G,q=C.aK(J.q(r.a(J.q(s.a(t.h(u,"images")),d)),"bufferView")),p=q==null?null:D.k.N(q)
if(p==null)return null
w=r.a(J.q(s.a(t.h(u,"bufferViews")),p))
u=J.a5(w)
t=C.aK(u.h(w,"byteOffset"))
v=t==null?null:D.k.N(t)
if(v==null)v=0
return C.yf(this.b,v,v+D.k.N(C.e5(u.h(w,"byteLength"))))},
Fw(a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=null,g="byteOffset",f=this.a,e=J.a5(f),d=x.j,a0=x.G,a1=a0.a(J.q(d.a(e.h(f,"accessors")),a5)),a2=J.a5(a1),a3=D.k.N(C.e5(a2.h(a1,"count"))),a4=a2.h(a1,"type")
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
p=a0.a(J.q(d.a(e.h(f,"bufferViews")),q))
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
m=C.aSI(this.b)
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
A.lC.prototype={}
A.r6.prototype={
gDo(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=1e9,d=-1e9,a0=this.w,a1=a0.length
if(a1===0){a0=this.e
return new C.cw([-a0/2,a0/2,-12,0])}for(w=this.e,v=-w,u=d,t=e,s=u,r=t,q=0;q<a1;++q){p=a0[q]
for(o=p.e,o=[v*o/2,w*o/2],n=p.c,m=p.a,l=p.b,k=0;k<2;++k){j=o[k]
for(i=[-12,0],h=0;h<2;++h){g=A.vw(new A.r(j,0,i[h]),n)
f=g.a+m
r=Math.min(r,f)
s=Math.max(s,f)
f=g.c+l
t=Math.min(t,f)
u=Math.max(u,f)}}}return new C.cw([r,s,t,u])},
gaoR(){return this.gDo().a[1]-this.gDo().a[0]},
gGN(){var w=this.w
return w.length===0?this.f:new C.N(w,new A.bGV(this),C.T(w).k("N<1,L>")).fa(0,D.pE)},
gbdy(){return this.gDo().a[3]-this.gDo().a[2]},
ga4f(d){return this.w.length===0?0:(this.gDo().a[0]+this.gDo().a[1])/2},
ga4g(){return this.w.length===0?0:(this.gDo().a[2]+this.gDo().a[3])/2},
ged(d){var w=this
return Math.max(Math.max(w.gaoR(),w.gbdy()),Math.max(w.gGN()*1.3,w.x))*w.y}}
A.Hj.prototype={}
A.aSp.prototype={
biU(){var w=this
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
TN(d){var w,v=this,u=J.a5(d)
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
A.bGT.prototype={
cWR(){var w,v,u
for(w=this.b,v=w.length,u=0;u<w.length;w.length===v||(0,C.M)(w),++u)w[u].biU()},
ag(){var w,v,u,t=this.a,s=C.a([],x.c7)
for(w=this.b,v=w.length,u=0;u<w.length;w.length===v||(0,C.M)(w),++u)s.push(w[u].ag())
return C.G(["template",t,"signs",s],x.N,x.A)},
TN(d){var w,v,u,t,s,r,q
this.a=D.d.b5(B.a37,new A.bGU(d))?C.cP(J.q(d,"template")):"highway"
w=J.q(d,"signs")
if(x.j.b(w)){v=J.a5(w)
u=x.G
t=this.b
s=x.N
r=x.A
q=0
for(;;){if(!(q<6&&q<v.gL(w)))break
if(u.b(v.h(w,q)))t[q].TN(C.a2(u.a(v.h(w,q)),s,r));++q}}else this.b[0].TN(d)}}
A.hn.prototype={}
A.aor.prototype={
U(){var w=A.hze()
$.yT()
return new A.aos(w,new C.y7())}}
A.aos.prototype={
gik(){var w,v=this.e
if(v===$){w=new A.xa(0.5,0.25,420,B.fUv,$.ax())
w.e=30
w.f=5000
w.w=0.02
w.x=1.4
w.r6(!0)
this.e!==$&&C.bG()
this.e=w
v=w}return v},
gax7(){var w=this.r
return w===$?this.r=new A.a50(this.gc5U(),W.Bs):w},
gzu(){return D.d.h_(B.a37,new A.c2O(this))},
a_(){var w=this
w.a2()
w.f=A.h3e(w.gzu(),w.d)
w.abg()
A.heP().bM(new A.c2M(w),x.P)
w.Py()},
q(){this.gax7().bR(0)
var w=this.gik()
w.S$=$.ax()
w.P$=0
this.a3()},
abg(){var w=this.gzu(),v=this.gik(),u=w.ga4f(0),t=w.gGN(),s=w.ga4g()
v.Nj(w.ged(0)*1.9,0.22,new A.r(u,w.r+t/2,s),0.45)},
Py(){var w=0,v=C.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i
var $async$Py=C.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return C.b(C.az(),$async$Py)
case 7:q=e
p=C.aU(J.q(q.a,"ngmy_billboard_studio_v1"))
if(p==null){w=1
break}n=r.d
n.TN(x.b.a(D.X.aN(0,p,null)))
n=n.b,m=n.length,l=0
case 8:if(!(l<n.length)){w=10
break}o=n[l]
i=o
w=11
return C.b(A.afH(o.f),$async$Py)
case 11:i.w=e
i=o
w=12
return C.b(A.afH(o.r),$async$Py)
case 12:i.x=e
case 9:n.length===m||(0,C.M)(n),++l
w=8
break
case 10:if(r.c==null){w=1
break}r.m(new A.c2z(r))
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
return C.i($async$Py,v)},
IR(){var w=0,v=C.j(x.H),u=1,t=[],s=this,r,q,p
var $async$IR=C.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:u=3
w=6
return C.b(C.az(),$async$IR)
case 6:r=e
w=7
return C.b(r.ar("String","ngmy_billboard_studio_v1",D.X.ap(s.d.ag(),null)),$async$IR)
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
return C.i($async$IR,v)},
c5V(){var w,v,u,t,s,r,q,p=this
if(!(p.x>=0)||p.c==null)return
w=p.w.gil()/1000
if(w>=30){p.aBi(!0)
return}v=A.i3k(p.gzu(),w)
u=v.b
t=u.aF(0,v.a)
s=Math.max(8,t.guR())
r=p.gik()
q=Math.atan2(t.a,-t.c)
r.Nj(s,Math.asin(D.k.E(-t.b/s,-1,1)),u,q)
p.m(new A.c2F(p,w))},
bqa(){var w,v=this
v.gik().w=-1.4
w=v.w
w.kF(0)
w.h9(0)
v.m(new A.c2N(v))
v.gax7().h9(0)},
aBi(d){var w,v=this
v.gax7().bR(0)
w=v.w
if(w.b==null)w.b=$.a9m.$0()
v.gik().w=0.02
v.m(new A.c2C(v,d))
v.abg()},
cyo(){return this.aBi(!1)},
cul(d){var w=this
w.d.a=d
w.m(new A.c2B(w))
w.abg()
w.IR()},
Zw(d){this.d.b[d].a=!1
this.m(new A.c29())
this.IR()},
IQ(d,e){return this.ck2(d,e)},
ck2(d,e){var w=0,v=C.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k
var $async$IQ=C.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:t=4
m=e?400:900
w=7
return C.b(new C.hV().kZ(85,m,D.eJ),$async$IQ)
case 7:q=g
if(q==null){w=1
break}w=8
return C.b(q.fj(),$async$IQ)
case 8:p=g
w=9
return C.b(A.afH(p),$async$IQ)
case 9:o=g
if(o==null){w=1
break}n=r.d.b[d]
if(e){n.f=p
n.w=o}else{n.r=p
n.x=o}r.Zw(d)
t=2
w=6
break
case 4:t=3
k=s.pop()
if(r.c!=null)r.m(new A.c2A(r))
w=6
break
case 3:w=2
break
case 6:case 1:return C.h(u,v)
case 2:return C.f(s.at(-1),v)}})
return C.i($async$IQ,v)},
cAr(){var w=this.c
w.toString
C.bU(D.au,null,new A.c2E(this),w,!0,!0,!0,D.k_,!1,!1,x.H)},
bO3(){var w,v,u,t,s,r,q=this,p={}
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
C.bU(D.au,null,new A.c2x(p,q,new A.c2y(p,q,t,s,r),t,s,r),w,!0,!0,!0,D.k_,!1,!1,x.H)},
ax9(d,e,f,g){var w=null,v=g?f.j(0.3):D.w.j(0.6),u=C.m(20),t=C.J(f,D.r,1)
return C.aB(w,C.p(w,C.d(d,w,w,w,w,w,w,C.l(w,w,f,w,w,w,w,w,w,w,w,13,w,w,D.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),D.f,w,w,new C.o(v,w,t,u,w,w,D.n),w,w,w,w,D.iT,w,w,w),D.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,e,w,w,w,w,w,w,!1,D.a5)},
ax8(d,e,f){return this.ax9(d,e,f,!1)},
c5T(d,e,f){return this.ax9(d,e,D.aQ,f)},
B(d){var w,v,u,t,s,r=this,q=null,p=C.aI(d,q,x.w).w.r,o=r.f
o===$&&C.c()
w=x.p
o=C.a([C.bT(0,A.h_j(E.B9,r.gik(),q,q,0,q,q,q,o,!0),0,0,0)],w)
if(!(r.x>=0))o.push(C.ao(q,C.B(C.a([C.aB(q,C.p(q,D.a24,D.f,q,q,new C.o(D.w.j(0.55),q,C.J(D.bY,D.r,1),q,q,q,D.a6),q,40,q,q,q,q,q,40),D.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new A.c2I(d),q,q,q,q,q,q,!1,D.a5),D.as,C.E(C.d("Billboard studio \xb7 "+r.gzu().c,q,q,q,q,q,q,B.fdb,q,q,q),1)],w),D.m,q,D.e,D.j,0,q,q),q,q,8,8,p.b+8,q))
if(r.x>=0&&r.y)o.push(C.bT(0,C.aB(D.ca,q,D.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new A.c2J(r),q,q,q,q,q,q,!1,D.a5),0,0,0))
if(!(r.x>=0&&r.y)){v=C.a([],w)
if(r.z.length!==0&&!(r.x>=0)){u=D.dZ.j(0.95)
t=C.m(12)
s=C.J(D.bj,D.r,1)
v.push(C.p(q,C.d(r.z,q,q,q,q,q,q,D.Uq,q,q,q),D.f,q,q,new C.o(u,q,s,t,q,q,D.n),q,q,q,D.cu,D.bT,q,q,q))}w=C.a([],w)
if(!(r.x>=0))w.push(r.ax8("\ud83e\udea7 Choose billboard",r.gcAq(),F.fw))
if(!(r.x>=0))w.push(r.ax8("\u270f\ufe0f Edit",r.gbO2(),D.bj))
if(r.x>=0)w.push(r.ax9("\u23f9 Stop the drone",r.gcyn(),D.cs,!0))
if(r.x>=0)w.push(r.ax8("\ud83d\udc41 Hide everything",new A.c2K(r),D.aL))
if(!(r.x>=0))w.push(r.c5T("\ud83c\udfac 30 second drone shot",r.gbq9(),!0))
v.push(C.bW(D.fE,w,D.bq,q,8,8))
o.push(C.ao(p.d+12,C.x(v,D.m,q,D.e,D.Q,0,D.p),q,q,10,10,q,q))}return C.c6(q,D.w,new C.an(D.a_,q,D.aa,D.t,o,q),q,!1,!1,q,q)}}
A.FP.prototype={}
A.z8.prototype={}
A.xf.prototype={}
A.aTy.prototype={}
A.a49.prototype={}
A.ak6.prototype={}
A.bLf.prototype={
byz(d,e){var w,v,u,t,s,r,q,p=this,o=x._,n=C.a([],o)
for(w=p.a.x,v=w.length,u=0;u<w.length;w.length===v||(0,C.M)(w),++u){t=w[u]
s=t.b
if(s==="house2"||s==="bighouse")n.push(t)}p.b!==$&&C.aP()
p.b=n
o=C.a([],o)
for(n=w.length,u=0;u<w.length;w.length===n||(0,C.M)(w),++u){t=w[u]
if(D.d.b5(B.QR,new A.bLh(t)))o.push(t)}p.c!==$&&C.aP()
p.c=o
for(o=p.f,r=0;r<5;++r){q=p.cnm()
n=B.dsX[r]
w=B.dhf[r]
o.push(new A.aTy(n,w,new A.rG(B.awX[r],B.LT,w,B.Ll,B.dmm[r]),58+r*7.5,q.a,q.b,B.aze))}p.Uz(0)},
cnm(){var w,v=this.c
v===$&&C.c()
w=v.length
if(w===0)return B.erB
return A.yI(v[this.d.au(w)])},
cVm(d){var w,v,u,t,s,r,q,p=this,o=C.a([],x._),n=p.c
n===$&&C.c()
w=n.length
v=0
for(;v<n.length;n.length===w||(0,C.M)(n),++v){u=n[v]
t=u.b
if(t==="store"||t==="shop"||t==="gasstation")o.push(u)}if(o.length===0)return
D.d.aW(o,new A.bLj(p,d))
for(n=p.e,s=0,v=0;v<2;++v){r=B.dkO[v]
q=o[D.o.F(s,o.length)];++s;++p.r
w=new A.xf(r,q,d,r==="medicine"?30:24)
w.w=!0
D.d.c8(n,0,w)}},
Uz(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=j.d,h=j.e,g=x._,f=C.T(h).k("Z<1>"),e=0
for(;;){if(new C.Z(h,new A.bLk(),f).gL(0)<7){w=e+1
v=e<30
e=w}else v=!1
if(!v)break
u=B.QR[i.au(5)]
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
m=A.yI(o)
l=A.yI(n)
k=Math.sqrt(Math.pow(m.a-l.a,2)+Math.pow(m.b-l.b,2));++j.r
h.push(new A.xf(u.a,o,n,6+D.o.E(D.k.V(k/70),0,22)))}},
cXi(d,e,f){if(this.x!=null||e.f!=null||!D.d.t(this.e,e))return!1
e.f=-1
e.x=f
this.x=e
return!0},
a4(d){var w=this.x
if(w==null)return
w.f=null
w.r=!1
this.x=null},
ga6H(d){var w=this.x
if(w==null)return null
return A.yI(w.r?w.d:w.c)},
bjP(d,e,f){var w,v,u,t,s,r,q,p=this,o=p.x
if(o==null)return null
if(f-o.x>360){p.a4(0)
return B.btz}w=p.ga6H(0)
if(Math.sqrt(Math.pow(w.a-d,2)+Math.pow(w.b-e,2))>58)return null
if(!o.r){o.r=!0
v=o.b
u=A.L3(v)
v=A.L3(v)
t=B.hw.h(0,o.c.b).a
s=o.w?"hospital":"house"
return new A.ak6("pickup",u.b+" You picked up the "+v.c.toLowerCase()+" at the "+t.toLowerCase()+". Now take it to the "+s+".",0)}D.d.W(p.e,o)
p.x=null;++p.z;++p.y
v=p.Q
u=o.e
p.Q=v+u
p.Uz(f)
r=A.L3(o.b).b+" Delivered! +"+u+" points."
if(p.y>=8){p.Q+=40
r+=" You won the race with 8 deliveries: +40 points!"
p.aYv()
q=40}else q=0
v=q>0?"won":"delivered"
return new A.ak6(v,r,u+q)},
aYv(){var w,v,u;++this.as
this.y=0
for(w=this.f,v=w.length,u=0;u<v;++u)w[u].r=0},
FC(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this
for(w=j.f,v=w.length,u=j.e,t=e+2,s=j.d,r=x.C,q=null,p=0;p<w.length;w.length===v||(0,C.M)(w),++p){o=w[p]
n=o.ch
if(n===0){if(e<o.CW)continue
n=C.a([],r)
for(m=u.length,l=0;l<u.length;u.length===m||(0,C.M)(u),++l){k=u[l]
if(k.f==null)n.push(k)}if(n.length===0)continue
D.d.aW(n,new A.bLg(j,o))
k=n[Math.min(n.length-1,s.au(3))]
k.f=D.d.cu(w,o)
o.y=k
j.b6M(o,e,1,k.c)}else if(e>=o.Q){if(!o.db){o.e=o.ax
o.f=o.ay
o.db=!0
o.dx=e+(n===1?1.6:1.3)
continue}if(e<o.dx)continue
o.db=!1
m=o.y
m.toString
if(n===1)j.b6M(o,e,2,m.d)
else{D.d.W(u,m)
o.y=null
o.ch=0;++o.w;++o.r
o.x=o.x+m.e
o.CW=t+s.ah()*5
j.Uz(e)
if(o.r>=8){q=o.a+" won the race with 8 deliveries! A new round starts."
j.aYv()}}}}return q},
aZi(d,e){return Math.sqrt(Math.pow(e.a-d.e,2)+Math.pow(e.b-d.f,2))},
b6M(d,e,f,g){var w,v,u,t=this,s=A.yI(g),r=B.hw.h(0,g.b),q=g.e*3.141592653589793/2,p=r.d/2-2,o=g.c+Math.sin(q)*p,n=g.d+Math.cos(q)*p
d.ch=f
d.ax=o
d.ay=n
w=t.w
if(w===$){v=new A.bJl(t.a)
v.aZj()
t.w!==$&&C.bG()
t.w=v
w=v}u=C.C(w.aox(new C.z(d.e,d.f),s),x.J)
u.push(new C.z(o,n))
d.cx=u
o=A.idN(u)
d.cy=o
d.z=e
d.Q=e+Math.max(1,o/d.d)},
am7(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=C.a([],x.B)
for(w=this.f,v=w.length,u=d*2.2,t=0;t<w.length;w.length===v||(0,C.M)(w),++t){s=w[t]
r=s.e
q=s.f
if(s.db)continue
if(s.ch!==0&&d>=s.z&&s.cx.length>1){p=s.z
o=D.k.E((d-p)/Math.max(0.01,s.Q-p),0,1)
n=A.idT(s.cx,s.cy*o)
r=n.a
q=n.b
m=n.c
l=o<1}else{m=0
l=!1}k.push(new A.a49(r,q,m,u+s.d,l,s.ch===2,s.c,s.b))}return k},
cXg(){var w,v,u,t,s=C.a([new C.bj("You",this.y,this.Q)],x.aJ)
for(w=this.f,v=w.length,u=0;u<w.length;w.length===v||(0,C.M)(w),++u){t=w[u]
s.push(new C.bj(t.a,t.r,t.x))}D.d.aW(s,new A.bLl())
return s},
qZ(d,e,f){var w,v,u,t,s=C.a([],x.C)
for(w=this.e,v=w.length,u=0;u<w.length;w.length===v||(0,C.M)(w),++u){t=w[u]
if(t.f==null)s.push(t)}D.d.aW(s,new A.bLi(this,e,f))
return s},
aaf(d,e,f){return Math.sqrt(Math.pow(f.a-d,2)+Math.pow(f.b-e,2))}}
A.bJl.prototype={
aZm(d){return-this.a.gew(0)/2+8+d*24},
aZj(){var w,v,u,t,s=this,r=s.a
s.d=A.hsI(r,null)
s.b=D.k.dg((r.gew(0)-16)/24)+1
w=D.k.dg((r.gho(0)-10- -750)/24)+1
s.c=w
s.e=C.c2(s.b*w,!1,!1,x.R)
for(v=0;v<s.b;++v)for(w=v*24,u=0;t=s.c,u<t;++u)s.e[v*t+u]=s.ac7(-r.gew(0)/2+8+w,-750+u*24)
s.f=A.h8K(r)},
ac7(d,e){var w,v,u=this.a
if(d<-u.gew(0)/2+12||d>u.gew(0)/2-12||e<-756||e>u.gho(0)-14)return!0
u=this.d
u===$&&C.c()
w=u.length
v=0
for(;v<w;++v)if(u[v].aGe(d,e,14))return!0
return!1},
aZk(d,e,f){var w,v,u=e.a,t=f.a-u,s=e.b,r=f.b-s,q=Math.max(1,D.k.dg(Math.sqrt(Math.pow(t,2)+Math.pow(r,2))/8))
for(w=0;w<=q;++w){v=w/q
if(this.ac7(u+t*v,s+r*v))return!1}return!0},
aZl(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=d.a,h=j.a,g=D.k.V((i+h.gew(0)/2-8)/24),f=j.b
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
k=Math.pow(-h.gew(0)/2+8+o*24-i,2)+Math.pow(-750+m*24-f,2)
if(k<p){q=new C.z(o,m)
p=k}}if(q!=null)return q}return null},
aox(d,e){var w,v,u,t,s,r,q,p,o,n,m=this
if(A.h8K(m.a)!==m.f)m.aZj()
w=m.aZl(d)
v=m.aZl(e)
if(w==null||v==null)return C.a([d,e],x.f)
u=new C.z(m.aZm(w.a),-750+w.b*24)
t=new C.z(m.aZm(v.a),-750+v.b*24)
s=x.f
r=m.ac7(d.a,d.b)?C.a([d],s):C.a([],s)
q=m.ac7(e.a,e.b)?C.a([e],s):C.a([],s)
p=C.a([],s)
o=r.length===0?d:u
n=q.length===0?e:t
if(m.aZk(0,o,n))D.d.v(p,C.a([o,n],s))
else D.d.v(p,m.ct7(w,v,o,n))
s=C.C(r,x.J)
D.d.v(s,p)
D.d.v(s,q)
return s},
ct7(a9,b0,b1,b2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this,a3=x.t,a4=C.a([],a3),a5=new A.dhR(a4,C.a([],x.n)),a6=x.S,a7=C.U(a6,a6),a8=C.U(a6,x.i)
a6=a9.a
w=a2.c
w===$&&C.c()
v=a9.b
u=a6*w+v
t=b0.a
s=b0.b
r=t*w+s
a8.n(0,u,0)
a5.ao2(u,a2.c6p(a6,v,b0))
p=0
for(;;){if(a4.length!==0){o=p+1
a6=p<4e4
p=o}else a6=!1
if(!a6){q=!1
break}n=a5.eK()
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
a5.ao2(e,d+Math.sqrt(Math.pow(v,2)+Math.pow(h-s,2)))}}}if(!q)return C.a([b1,b2],x.f)
a0=C.a([r],a3)
while(a7.aj(0,D.d.gak(a0))){a3=a7.h(0,D.d.gak(a0))
a3.toString
a0.push(a3)}a3=x.f
a4=C.a([b1],a3)
for(a6=x.c5,w=new C.dx(a0,a6),w=new C.bS(w,w.gL(0),a6.k("bS<ak.E>")),v=a2.a,a6=a6.k("ak.E");w.C();){t=w.d
if(t==null)t=a6.a(t)
s=a2.c
g=D.o.e9(t,s)
a4.push(new C.z(-v.gew(0)/2+8+g*24,-750+D.o.F(t,s)*24))}a4.push(b2)
a1=C.a([D.d.gI(a4)],a3)
for(j=0;h=a4.length-1,j<h;j=h){a3=j+1
for(;;){if(!(h>a3&&!a2.aZk(0,a4[j],a4[h])))break;--h}a1.push(a4[h])}return a1},
c6p(d,e,f){return Math.sqrt(Math.pow(d-f.a,2)+Math.pow(e-f.b,2))}}
A.dhR.prototype={
gcm(d){return this.a.length!==0},
ao2(d,e){var w,v,u,t=this.a
t.push(d)
w=this.b
w.push(e)
v=t.length-1
for(;v>0;v=u){u=D.o.ao(v-1,2)
if(w[u]<=w[v])break
this.b7q(v,u)}},
eK(){var w,v,u,t,s,r=this.a,q=D.d.gI(r),p=r.pop(),o=this.b,n=o.pop()
if(r.length!==0){r[0]=p
o[0]=n
for(w=0;;w=s){v=2*w+1
u=v+1
t=r.length
s=v<t&&o[v]<o[w]?v:w
if(u<t&&o[u]<o[s])s=u
if(s===w)break
this.b7q(w,s)}}return q},
b7q(d,e){var w,v=this.a,u=v[d]
v[d]=v[e]
v[e]=u
v=this.b
w=v[d]
v[d]=v[e]
v[e]=w}}
A.aSV.prototype={
bjg(d,e,f){var w,v,u,t,s=this,r=null,q=s.d
if(q>0){q-=d
s.d=q
if(q<=0){s.d=0
s.c=180
s.r+=5
w="You did not reach a shop in time: you lost 5 stars. You must rest for three minutes, or eat something."}else w=r
s.aU()
return w}q=s.c
if(q>0){q-=d
s.c=q
if(q<=0){s.c=0
s.a=0.5
w="You have rested. Your energy is back to half. Find some food in a shop to keep going."}else w=r
s.aU()
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
s.aU()}else w=r
if(e){v=s.b
q=s.b=D.k.E(v-d/120,0,1)
if(q<=0&&v>0)w="The car is out of gas. Get to a gas station (walk, then buy gas) to carry on."
else if(v>=0.25&&q<0.25)w="The gas is low. Drive to a gas station."
s.aU()}return w},
a6J(d){return this.bjg(d,!1,!1)}}
A.aYb.prototype={
B(d){var w,v,u,t,s,r=null,q=D.k.E(this.c,0,1)
if(q>0.5)w=D.be
else w=q>0.25?D.bG:D.aw
v=C.a([],x.p)
u=this.d
v.push(new C.D(D.q9,C.d(this.e,r,r,r,r,r,r,C.l(r,r,r,r,r,r,r,r,r,r,r,u,r,r,r,r,r,!0,r,r,r,r,r,r,r,r),r,r,r),r))
t=C.m(u/3)
s=C.J(D.ae,D.r,1.5)
v.push(C.E(C.p(r,new C.bM(D.a4,r,r,C.Bv(D.A,C.c1(r,new C.o(w,r,r,C.m(u/4),r,r,D.n),D.bg),1,q),r),D.f,r,r,new C.o(D.aW,r,s,t,r,r,D.n),r,u,r,r,D.np,r,r,r),1))
v.push(C.p(r,r,D.f,r,r,new C.o(D.ae,r,r,C.m(1),r,r,D.n),r,u*0.45,r,B.bzM,r,r,r,3))
return C.B(v,D.m,r,D.e,D.Q,0,r,r)}}
A.Uo.prototype={
B(d){return new C.tt(new A.c0p(this),null,this.c,null)}}
A.rK.prototype={}
A.Sp.prototype={
gL(d){return this.a==="bus"?120:95.94999999999999}}
A.aSU.prototype={}
A.bwl.prototype={
bzF(d,e,f,g){var w,v,u,t,s,r,q,p,o,n,m
for(w=this.e,v=this.f,u=0;u<4;++u){t=B.kk[u]
s=A.fkz(t).a[1]
r=new A.fdm(this,t)
q=0
for(;;){if(!(r.$1(q)&&q<s))break;++q}for(p=-1,o=0,n=0;n<s;++n){m=D.o.F(q+n,s)
if(r.$1(m)){if(p<0)p=m;++o}else if(p>=0)break}w.push(p)
v.push(o)}}}
A.bJn.prototype={
kF(d){var w,v,u,t
for(w=this.a,v=this.b,u=0;u<4;++u){w[u]=B.kk[u].r
v[u]=0}t=this.c=0
for(w=$.fVb();t<2;++t)w[t].r=-1},
FC(d,e){var w,v,u,t=this
if(e<t.c-0.0001)t.kF(0)
w=t.c
if(e-w>90){w=e-2
t.c=w}for(v=e-1e-9;w<v;){u=Math.min(0.05,e-w)
t.cyd(u)
w=t.c+=u}},
cyd(b8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7=this
for(w=$.fVb(),v=b7.a,u=0;u<2;++u){t=w[u]
s=t.r
if(s<0)continue
r=A.fkz(B.kk[s]).a[1]
q=D.k.F(v[s]-t.e[s],r)
if(q<0)q+=r
if(q>=t.f[s]&&q<r/2)t.r=-1}for(w=b7.b,p=110*b8,o=40*b8,n=0;n<4;++n){m=B.kk[n]
r=A.fkz(m).a[1]
l=m.a==="bus"
k=(l?120:95.94999999999999)/2
j=new A.bJo()
for(i=34,h=0;h<4;++h){if(h===n||D.o.ao(n,2)!==D.o.ao(h,2))continue
g=D.k.F(v[h]-v[n],r)
if(g<0)g+=r
g-=k+(B.kk[h].a==="bus"?120:95.94999999999999)/2
if(g<400)i=Math.min(i,C.jU(j.$1(g-18)))}for(f=$.bEG(),e=f.length,d=r-30,u=0;u<f.length;f.length===e||(0,C.M)(f),++u){a0=f[u]
if(a0.a!==D.o.ao(n,2))continue
a1=A.h3Q(a0,b7.c)
if(a1===0)continue
a2=D.k.F(a0.b-(v[n]+k),r)
if(a2<0)a2+=r
if(a2>d)continue
if(a2<260)a3=!(a1===1&&a2<w[n]*1.2)
else a3=!1
if(a3)i=Math.min(i,C.jU(j.$1(a2-4)))}for(f=$.fVb(),u=0;u<2;++u){t=f[u]
a4=t.e[n]
if(a4<0)continue
e=v[n]
a2=D.k.F(a4-e,r)
if(a2<0)a2+=r
if(D.k.F(e-a4,r)<t.f[n]){if(t.r<0)t.r=n
continue}if(t.r===n)continue
e=w[n]
for(d=$.bEG(),a3=d.length,a5=b7.c,a6=!1,a7=0;a7<a3;++a7){a0=d[a7]
if(a0.a!==D.o.ao(n,2)||A.h3Q(a0,a5)===0)continue
a8=D.k.F(a0.b-(v[n]+k),r)
if((a8<0?a8+r:a8)<a2)a6=!0}if(t.r<0&&a2<40+e*e/220+20&&!a6){t.r=n
continue}if(a2<400)i=Math.min(i,C.jU(j.$1(a2-10)))}f=A.L8(m,v[n]).a
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
a5=Math.abs(-b3*b2+b4*b1)<a5/2+16}if(a5)i=Math.min(i,C.jU(j.$1(b5-k-10)))}b6=w[n]
l=b6<i?Math.min(i,b6+o):Math.max(i,b6-p)
w[n]=l
if(l<0){w[n]=0
l=0}v[n]=v[n]+l*b8}},
cVf(d,e,f){this.FC(0,f)
return A.L8(B.kk[e],this.a[e])},
cPW(d,e){var w,v,u,t,s,r,q,p,o,n,m,l
for(w=this.a,v=this.b,u=0;u<4;++u){if(v[u]<4)continue
t=B.kk[u]
s=A.L8(t,w[u]).a
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
ga8a(){var w=this.d,v=w.e*3.141592653589793/2,u=Math.sin(v),t=Math.cos(v),s=this.r-1
return new C.z(w.c+u*42-t*s*24,w.d+t*42+u*s*24)}}
A.cz_.prototype={
bzu(d,e){var w,v,u,t,s=this,r=x._,q=C.a([],r)
for(w=s.a.x,v=w.length,u=0;u<w.length;w.length===v||(0,C.M)(w),++u){t=w[u]
if(t.b==="ubstation")q.push(t)}s.c!==$&&C.aP()
s.c=q
r=C.a([],r)
for(q=w.length,u=0;u<w.length;w.length===q||(0,C.M)(w),++u){t=w[u]
v=t.b
if(v==="house2"||v==="bighouse")r.push(t)}s.d!==$&&C.aP()
s.d=r
s.Uz(0)},
Uz(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=g.d
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
q=s.k("K.E")
p=0
for(;p<w.length;w.length===v||(0,C.M)(w),++p){o=w[p]
n=C.pS(q)
n.v(0,new C.cQ(new C.Z(t,new A.cz1(o),r),new A.cz2(),s))
for(m=0;m<3;++m){if(n.t(0,m))continue
l=g.f
k=l==null
if((k?null:l.d)===o)l=(k?null:l.r)===m
else l=!1
if(l)continue
l=g.x++
j=f[u.au(f.length)]
i=A.yI(j)
h=Math.sqrt(Math.pow(o.c-i.a,2)+Math.pow(o.d-i.b,2))
l=new A.Af(l,B.dhL[u.au(12)],new A.rG(B.awX[u.au(5)],B.LT,B.dpI[u.au(6)],D.aJ,"human"),o,j,6+D.o.E(D.k.V(h/45),0,30),m)
l.x=d
t.push(l)}}},
aqb(d,e){var w,v,u,t=this.c
t===$&&C.c()
w=t.length
v=0
for(;v<t.length;t.length===w||(0,C.M)(t),++v){u=t[v]
if(Math.sqrt(Math.pow(u.c-d,2)+Math.pow(u.d-e,2))<150)return u}return null},
cV0(d,e){var w,v,u,t,s,r,q=this
if(q.f!=null)return null
w=q.aqb(d,e)
if(w==null)return null
v=C.a([],x.bz)
for(u=q.e,t=u.length,s=0;s<u.length;u.length===t||(0,C.M)(u),++s){r=u[s]
if(r.d===w)v.push(r)}if(v.length===0)return null
D.d.aW(v,new A.cz0())
r=D.d.gI(v)
D.d.W(u,r)
return q.f=r},
ga6H(d){var w=this.f
return w==null?null:A.yI(w.e)},
cMV(d,e,f){var w,v,u=this,t=u.f,s=u.ga6H(0)
if(t==null||s==null)return 0
if(Math.sqrt(Math.pow(s.a-d,2)+Math.pow(s.b-e,2))>70)return 0
u.f=null;++u.r
w=u.w
v=t.f
u.w=w+v
u.y=f+4
u.Uz(f)
return v},
am7(d){var w,v,u,t,s,r,q,p
if(d<this.y)return B.HS
w=C.a([],x.B)
for(v=this.e,u=v.length,t=d*1.4,s=0;s<v.length;v.length===u||(0,C.M)(v),++s){r=v[s]
q=r.d
p=r.c
w.push(new A.a49(r.ga8a().a,r.ga8a().b,Math.atan2(q.c-r.ga8a().a,q.d-r.ga8a().b)+3.141592653589793,t+r.a,!1,!1,p,p.c))}return w}}
A.pw.prototype={}
A.bJ9.prototype={
gM1(){var w,v=this,u=v.r
if(u===$){w=A.htJ(v.b)
v.r!==$&&C.bG()
v.r=w
u=w}return u},
cb5(){var w,v=this.a
A:{if("hospital"===v){w=B.cvU
break A}if("dmv"===v){w=B.dq2
break A}if("shop"===v){w=B.cW4
break A}if("school"===v){w=B.d4h
break A}if("firestation"===v){w=B.djo
break A}if("tower"===v){w=B.ddB
break A}w=B.do2
break A}return w},
cFT(){var w,v=this.a
A:{if("hospital"===v){w=B.cvQ
break A}if("dmv"===v){w=B.d6f
break A}if("shop"===v){w=B.d0T
break A}if("school"===v){w=B.ddm
break A}if("firestation"===v){w=B.dap
break A}if("tower"===v){w=B.dsv
break A}w=B.cVA
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
t=p.c70(q,e)}if(t!=null)p.B(e)
return t},
c70(d,e){var w,v,u,t,s,r=this,q="The city is still loading.",p="The breaker panel on level "
switch(r.a){case"hospital":if(e==null)return q
if(d===0){w=e.gC3()
v=C.T(w).k("Z<1>")
u=C.C(new C.Z(w,new A.bJa(),v),v.k("K.E"))
if(u.length===0)return"The desk: nobody needs the hospital right now. "+e.x+" doses of medicine in stock."
return e.aD4(D.d.gI(u))}t=d-1
if(e.e[t].a<0)return"This bed is empty. Admit someone at the desk first."
return e.bju(t)
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
return"You taught the class a lesson. +3 points. "+B.a3O[D.o.F(w==null?0:w,5)]}w=e==null?null:e.r
return"The library: "+B.a3O[D.o.F(w==null?1:w,5)]
case"firestation":if(d===0){if(e!=null)e.r+=2
return"You checked the equipment with the firefighters. +2 points. Keep the extinguishers charged."}w=e==null?null:e.r
return"Fire drill: "+B.a3O[D.o.F((w==null?0:w)+1,5)]
case"tower":if(d===0){r.w=!0
return"The elevator: choose your level (you are on level "+r.f+" of "+r.gM1()+")."}if(d===2){r.x=!0
return"The balcony on level "+r.f+": the whole town is below you."}if(r.c){r.cy=!0
return p+r.f+". This office has no power. Let us find the wiring fault."}return p+r.f+": every breaker is on and the office has power."
default:if(d===0){if(r.c){r.cy=!0
return"The breaker panel. This house has no power. Let us find the wiring fault."}return"The breaker panel: every breaker is on and the house has power."}return r.c?"The outlet is dead: there is no power in this house.":"The outlet works. Everything here is wired right."}},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this
g.ch=d
w=g.a
if(w==="cabin"){g.bEd()
return}v=C.a([],x.z)
u=new A.fk(v)
t=C.a([],x.E)
A:{if("hospital"===w){s=B.eCE
break A}if("shop"===w){s=B.ewt
break A}if("dmv"===w){s=B.eyR
break A}if("school"===w){s=B.ePP
break A}if("firestation"===w){s=B.eDD
break A}if("tower"===w){s=new C.z(g.c?B.afr:B.bqE,B.bfP)
break A}s=new C.z(g.c?B.afr:B.bos,B.jp)
break A}r=s.a
u.f=-1
u.n7(B.h3K,B.h21,s.b,0.2,3)
u.f=0
u.x=$.dR=$.dR+1
u.hn(B.h1d,B.aW9,r,3)
u.x=0
u.x=$.dR=$.dR+1
u.hn(B.h00,B.aaq,r,3)
u.x=0
s=w==="tower"
if(s){u.f=3
u.d=0.18
u.aP(B.aWl,B.aaq,B.YO)
u.d=1
u.f=0}else{u.x=$.dR=$.dR+1
u.hn(B.aWl,B.aaq,r,3)
u.x=0}u.f=0
q=s&&g.f>1
p=$.dR+1
if(q){u.x=$.dR=p
u.hn(B.h2e,B.aW9,r,3)
u.x=0}else{u.x=$.dR=p
u.hn(new A.r(-94,70,320.6),new A.r(113.2,140,1.2),r,2)
u.x=0
u.x=$.dR=$.dR+1
u.hn(new A.r(94,70,320.6),new A.r(113.2,140,1.2),r,2)
u.x=0
u.x=$.dR=$.dR+1
u.aP(new A.r(0,102,320.6),new A.r(76,76,1.2),r)
u.x=0
u.x=$.dR=$.dR+1
u.aY(B.h4M,B.h9S,B.bbf,0.5)
u.x=0}u.f=1
for(o=0;o<3;++o){n=B.dk3[o]
u.aP(new A.r(n,78,0.6),B.h9q,B.kz)
u.aY(new A.r(n,78,0.8),B.h0i,B.hU,0.6)}for(q=!s,o=0;o<2;++o){m=B.cDc[o]
u.aP(new A.r(-149.6,78,m),B.aW1,B.kz)
u.aY(new A.r(-149.2,78,m),B.aWD,B.hU,0.6)
if(q){u.aP(new A.r(149.6,78,m),B.aW1,B.kz)
u.aY(new A.r(149.2,78,m),B.aWD,B.hU,0.6)}}u.aP(B.h4S,B.h9Q,B.kz)
u.aP(B.h55,B.fYT,D.bO)
u.f=2
u.r=!0
for(q=w!=="house2",p=w==="bighouse",o=0;o<3;++o){n=B.dku[o]
for(l=0;l<2;++l){m=B.cDd[l]
u.dM(new A.r(n,138,m),new A.r(n,122,m),0.5,D.ja,4)
k=(!q||p||s)&&g.c?D.hf:B.o1
u.fo(new A.r(n,120,m),5,k,3,6)}}switch(w){case"hospital":g.bZD(u,t,d)
break
case"shop":g.cuY(u,t)
break
case"dmv":g.bMS(u,t)
break
case"school":g.csF(u,t)
break
case"firestation":g.cy9(u,t)
break
case"tower":g.cCf(u,t)
break
default:u.f=1
u.aP(B.haW,B.h6g,g.c?B.q0:B.afQ)
u.f=2
u.aY(B.h8r,B.fWr,B.Y0,0.1)
u.aY(B.h8s,B.fWs,B.LJ,0.1)
u.aY(B.fW9,B.h_J,B.nQ,0.2)
u.aY(B.h1r,B.haD,E.Fe,0.4)
u.aP(B.fWS,B.fXt,B.agz)
u.fo(B.h7U,10,B.EN,3,6)
g.bag(u,t)}u.f=1
if(s&&g.f>1)t.push(B.c_r)
else{u.aP(B.h5k,B.h2K,D.cV)
t.push(B.c_q)}if(d!=null){w=d.r
k=d.w
j=d.x
i=g.cx!=null?"   \ud83d\udce6 carrying":""
t.push(new A.hf(B.fUy,"\u2b50 "+w+"   \ud83c\udf5e "+k+"   \ud83d\udc8a "+j+i,D.M,0))}h=C.a([],x.a)
if(s){u.f=2
u.e=0
u.aY(B.fWm,B.aW5,D.au,0.3)
u.aY(B.h1x,B.aW5,D.au,0.3)
u.aY(B.h5d,B.h9t,D.au,0.3)
w=x.o
h.push(new A.fM(C.a([B.h10,B.h5C,B.h4A,B.h7j],w),0,new A.bJh(g),960,560,60,2,0,!1))
h.push(new A.fM(C.a([B.fZo,B.hb1,B.fYr,B.h9o],w),0,new A.bJi(g),960,560,60,2,0,!1))
h.push(new A.fM(C.a([B.h9b,B.fUd,B.h0m,B.h2T],w),0,new A.bJj(g),960,560,60,2,0,!1))}if((!q||p)&&!g.c)h.push(new A.fM(C.a([B.h62,B.h2b,B.h4F,B.h4z],x.o),0,new A.bJk(g),960,480,60,2,0,!1))
g.ay=new A.tM(v,B.RW,t,h,null,0)},
ru(d,e,f,g,h){var w=d.f
d.f=1
d.dM(new A.r(e,0.2,f),new A.r(e,0.6,f),g,h,20)
d.f=w},
bZD(d,e,f){var w,v,u,t,s,r,q,p,o
d.f=1
d.aP(B.aV4,B.fZ6,D.by)
d.aP(B.aV4,B.fWC,D.by)
d.f=2
d.aY(B.h8O,B.h0N,B.nQ,0.15)
d.aY(B.h8P,B.h15,D.bN,0.3)
d.aP(B.h7R,B.h_X,D.aQ)
this.ru(d,-80,66,22,D.cp)
e.push(B.c_x)
e.push(B.c_m)
for(w=0;w<2;++w)d.aP(new A.r(-105,8,B.cdN[w]),B.h_l,D.bs)
d.fo(B.fWZ,9,B.EN,3,6)
for(v=f!=null,u=0;u<3;++u){t=48+u*50
d.aP(new A.r(76,8,t),B.h0K,D.cr)
d.aP(new A.r(76,14,t),B.h0F,D.aP)
d.aP(new A.r(108,18,t),B.fWX,D.c)
s=v&&u<f.e.length?f.e[u]:null
if(s!=null&&s.a>=0){r=f.c
r===$&&C.c()
q=r[s.a]
r=s.b>70?D.bj:D.cs
d.aP(new A.r(54,24,t),B.fZ9,r)
r=s.b>70
p=r?"cared for":"needs treatment"
r=r?D.eh:D.by
e.push(new A.hf(new A.r(76,40,t),q.a.b+"  "+p,r,0))}else e.push(new A.hf(new A.r(76,30,t),"Free bed "+(u+1),D.bs,0))
r=t-2
o=d.f
d.f=1
d.dM(new A.r(20,0.2,r),new A.r(20,0.6,r),16,D.aD,20)
d.f=o}},
bMS(d,e){var w,v,u,t,s
d.f=2
d.r=!0
d.x=$.dR=$.dR+1
d.aY(B.aUW,B.fX8,D.bs,0.15)
d.aY(B.aUY,B.fXa,D.bN,0.3)
d.aY(B.h8l,B.fYg,D.au,0.3)
d.aY(B.h7s,B.h1Z,D.b9,0.5)
d.aP(B.h8k,B.h_Z,D.aJ)
d.aP(B.fZ_,B.fXs,D.bG)
d.x=0
d.x=$.dR=$.dR+1
d.aP(B.aVz,B.aV7,D.cm)
d.aP(B.aVv,B.aVc,D.bk)
d.fo(B.aVw,5.5,B.aeQ,5,8)
d.fo(B.aVx,5.7,D.au,3,8)
d.x=0
d.x=$.dR=$.dR+1
d.aP(B.h7Y,B.fZw,D.aP)
for(w=0;w<3;++w){v=90+w*30
d.aDs(new A.r(-146,62,v),B.fXS,[D.by,D.bG,D.bk][w],0)
d.aP(new A.r(-145.6,62,v),B.h9k,D.c)}d.aP(B.fXc,B.fZv,D.h1)
d.aP(B.h4d,B.ha7,D.c)
d.aP(B.h3t,B.h9_,D.by)
d.x=0
for(u=0;u<4;++u){t=B.dk4[u]
d.x=$.dR=$.dR+1
d.aP(new A.r(t,9,150),B.fYm,D.bk)
d.aP(new A.r(t,17,160),B.fYh,D.bk)
d.aP(new A.r(t-8,4,150),B.aVq,D.aJ)
d.aP(new A.r(t+8,4,150),B.aVq,D.aJ)
d.x=0}d.x=$.dR=$.dR+1
d.aP(B.fVB,B.h09,D.bL)
d.aY(B.fUF,B.h_b,D.aw,0.4)
d.aY(B.h8x,B.fYC,D.ds,0.5)
for(u=0;u<2;++u){t=E.azI[u]
for(s=0;s<2;++s){v=B.cdG[s]
d.dM(new A.r(t,9,v-1.5),new A.r(t,9,v+1.5),5,D.au,8)}}d.x=0
this.ru(d,0,78,24,D.aQ)
e.push(B.c_u)
e.push(B.c_n)
e.push(B.c_v)},
aUM(a5,a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=a6*128
A:{if(1===a7){w=B.d9r
break A}if(2===a7){w=B.daP
break A}w=B.d4x
break A}a5.x=$.dR=$.dR+1
a5.aP(new A.r(a6*148,40,120),B.h_0,B.aeN)
for(v=0;v<2;++v)a5.aP(new A.r(a4,40,B.cHp[v]),B.fZH,B.aeN)
a5.aP(new A.r(a4,4,120),B.fZI,B.bhU)
for(u=0;u<4;++u)a5.aY(new A.r(a4,11+u*18,120),B.fZD,B.brb,0.1)
for(t=a7===0,s=w.length,r=a6*2.7,u=0;u<4;++u){q=12+u*18
for(p=q+6.6,o=q+3.2,n=u*7,m=q+10,l=q+12.5,k=q+7,j=q+8,i=q+2.5,h=q+5.5,g=0;g<9;++g){f=76+g*11
for(e=n+g*3,d=u+g+a7,a0=0;a0<2;++a0){a1=a6*(114+a0*14)
a2=w[D.o.F(e+a0*5+a7,s)]
switch(D.o.F(d+a0,4)){case 0:a5.dR(new A.r(a1,q,f),new A.r(a1,j,f),3.2,a2,0.3,8)
a5.aEI(new A.r(a1,i,f),new A.r(a1,h,f),3.3,D.c,!1,8)
break
case 1:a5.aY(new A.r(a1,k,f),B.h2A,a2,0.1)
a5.aP(new A.r(a1-r,j,f),B.h5V,D.c)
break
case 2:a5.dR(new A.r(a1,q,f),new A.r(a1,m,f),2.4,a2,0.45,8)
a5.dM(new A.r(a1,m,f),new A.r(a1,l,f),1.2,D.c,6)
break
default:a3=t?B.bri:a2
a5.aY(new A.r(a1,o,f),B.h5n,a3,0.05)
a3=t?B.bep:D.c
a5.aP(new A.r(a1,p,f),B.h1m,a3)}}}}a5.x=0},
aTJ(d,e){var w,v,u,t,s,r,q,p
d.x=$.dR=$.dR+1
d.aY(new A.r(e,32,11),B.h_m,D.bO,0.3)
d.aP(new A.r(e,33,22.4),B.h_c,D.bo)
for(w=e-21,v=0;v<3;++v){u=v*17
d.aP(new A.r(e,15+u,21),B.h_7,D.bL)
for(t=16+u,u=27+u,s=v*2,r=0;r<7;++r){q=w+r*7
d.dR(new A.r(q,t,21.6),new A.r(q,u,21.6),2.2,B.d_8[D.o.F(r+s,6)],0.5,6)}}d.x=0
p=d.f
d.f=3
d.d=0.2
d.aP(new A.r(e,33,23.2),B.haJ,B.YO)
d.d=1
d.f=p},
cuY(d,e){var w,v,u,t,s,r,q,p,o,n=this,m=n.b.b==="gasstation"
d.f=2
d.r=!0
d.x=$.dR=$.dR+1
d.aY(B.aUW,B.fWR,B.nQ,0.15)
d.aY(B.aUY,B.fWT,D.bN,0.3)
d.aP(B.h2p,B.hag,B.brp)
d.aY(B.h8f,B.fY5,D.e6,0.3)
d.aY(B.h8h,B.fXu,D.b9,0.5)
d.aP(B.fVs,B.fWD,D.au)
for(w=0;w<6;++w)d.aP(new A.r(14+w*7.5,33,47),B.h_A,B.dpL[D.o.F(w,4)])
d.x=0
d.x=$.dR=$.dR+1
d.aP(B.aVz,B.aV7,D.cm)
d.aP(B.aVv,B.aVc,D.cV)
d.aP(B.h5w,B.h3J,D.vH)
d.fo(B.aVw,5.5,B.aeQ,5,8)
d.fo(B.aVx,5.7,B.bfy,3,8)
d.x=0
n.aUM(d,-1,0)
n.aUM(d,1,m?2:1)
n.aTJ(d,-104)
n.aTJ(d,104)
for(v=[B.ewS,B.eM4],u=0;u<2;++u){t=v[u]
s=t.a
r=t.b
d.x=$.dR=$.dR+1
d.aP(new A.r(s,5,170),B.fZk,B.agz)
d.aP(new A.r(s,11,160),B.fZm,B.biD)
for(t=s-13.5,q=J.a5(r),w=0;w<4;++w)for(p=t+w*9,o=0;o<3;++o)d.fo(new A.r(p,12.5,163+o*7.5),4.2,q.h(r,D.o.F(w+o,3)),4,6)
d.x=0}d.x=$.dR=$.dR+1
d.aP(B.aUS,B.fWK,m?D.by:D.cV)
d.aP(B.h7Q,B.aVn,D.aD)
d.aP(B.fWM,B.aVn,m?D.bo:D.aQ)
d.x=0
n.ru(d,-64,120,24,D.bG)
n.ru(d,64,120,24,D.bv)
n.ru(d,0,84,22,D.be)
e.push(new A.hf(B.fUs,m?"\u26fd NGMY Gas shop":"\ud83d\uded2 NGMY Mart",D.M,0))
e.push(B.c_o)
e.push(new A.hf(B.h0J,m?"\ud83d\udee2 For the car":"\ud83d\udc8a Medicine and health",D.iO,0))
e.push(B.c_y)
e.push(B.c_p)
e.push(B.c_z)},
csF(d,e){var w,v,u,t,s
d.aY(B.fW4,B.hbg,D.dZ,0.1)
d.aP(B.ha4,B.h6H,B.bn0)
d.aY(B.fUH,B.fX_,B.nQ,0.15)
for(w=0;w<4;++w){v=B.dch[w]
u=v.a
t=v.b
for(s=0;s<2;++s){v=u+B.a4A[s]
d.aP(new A.r(v,10,t),B.fY9,B.jp)
d.aP(new A.r(v,5,t),B.fYH,D.bm)}}this.ru(d,0,80,24,D.bG)
this.ru(d,90,56,20,D.cp)
e.push(B.c_k)
e.push(B.c_s)},
cy9(d,e){var w,v,u,t,s
d.aY(B.fUB,B.fXH,D.by,0.3)
d.aY(B.h8C,B.h_H,D.by,0.3)
for(w=0;w<2;++w){v=B.dkq[w]
for(u=0;u<2;++u){t=B.crO[u]
d.dM(new A.r(v,6,t-1.5),new A.r(v,6,t+1.5),8,D.nd,10)}}for(s=0;s<5;++s)d.aP(new A.r(-142,30,110+s*18),B.fWE,D.al)
d.dM(B.fWI,B.fWJ,2,D.bG,6)
this.ru(d,-60,130,24,D.aD)
this.ru(d,80,56,20,D.cp)
e.push(B.c_i)
e.push(B.c_t)},
cCf(d,e){var w,v,u,t,s,r,q,p,o,n=this
d.f=1
d.aP(B.h9J,B.h3O,B.dr_[D.o.F(n.f,5)])
d.f=2
d.b=19502
d.aP(B.h1P,B.h0O,D.M)
d.aY(B.h_t,B.aVL,D.bs,0.5)
d.aY(B.fYN,B.aVL,D.bs,0.5)
d.aY(B.fZh,B.fWu,D.bs,0.5)
d.e=16
d.aY(B.fWg,B.h1g,D.b9,0.4)
d.aP(B.h2z,B.fZz,D.au)
d.aP(B.h7r,B.fWB,D.e6)
d.fo(B.h2k,2,D.bG,3,5)
d.fo(B.fZX,2,D.be,3,5)
d.b=d.e=0
n.ru(d,0,70,26,D.aQ)
for(w=0;w<3;++w){v=B.cVE[w]
u=v.a
t=v.b
d.aY(new A.r(u,15,t),B.fZL,B.nQ,0.2)
d.aP(new A.r(u-19,7,t),B.aVC,D.ja)
d.aP(new A.r(u+19,7,t),B.aVC,D.ja)
d.aY(new A.r(u,24,t-4),B.fXd,E.Fe,0.5)
d.aP(new A.r(u,9,t+18),B.fXk,D.cm)
d.aP(new A.r(u,16,t+25),B.fXf,D.cm)}n.ru(d,105,100,26,D.be)
d.d=0.3
d.f=3
d.aP(new A.r(144,14,100),B.fZY,B.YO)
d.d=1
d.f=2
for(w=0;w<5;++w)d.aY(new A.r(144,14,B.d2A[w]),B.h44,D.dv,0.5)
d.fo(B.fX1,10,B.EN,3,6)
d.aP(B.fWV,B.fZ2,B.nQ)
s=-(n.f*22)
d.f=-1
d.aP(new A.r(520,s-1,105),B.h13,B.Xc)
d.aP(B.h0a,B.fYK,B.hU)
d.f=1
for(v=n.b.a,r=v*7,q=0;q<15;++q){p=30+D.o.F(r+q*13,90)
o=B.d7N[D.o.F(v+q,4)]
d.aP(new A.r(215+D.o.F(q,5)*80,s+p/2,-60+D.o.ao(q,5)*135),new A.r(38,p,38),o)}e.push(new A.hf(B.fUq,"\ud83c\udfe2 LEVEL "+n.f+" of "+n.gM1(),D.dH,19502))
e.push(B.c_j)
e.push(B.c_l)
n.bag(d,e)},
bEd(){var w,v,u,t=C.a([],x.z),s=new A.fk(t)
s.f=-1
s.aY(B.h3i,B.h9V,D.bs,0.3)
s.f=0
s.x=$.dR=$.dR+1
s.aY(B.h8n,B.aVm,B.afi,0.4)
s.x=0
s.x=$.dR=$.dR+1
s.aY(B.fZj,B.aVm,B.afi,0.4)
s.x=0
s.f=1
s.aP(B.fUn,B.h0g,D.aL)
s.f=2
s.r=!0
for(w=0;w<2;++w)s.aY(new A.r(B.azK[w],40,38),B.h2Q,D.bL,0.7)
s.aY(B.fWh,B.h70,D.xJ,0.2)
for(w=0;w<2;++w)s.aY(new A.r(B.dkc[w],45,80),B.fXF,D.aJ,0.3)
s.aY(B.fWe,B.h0f,D.aJ,0.3)
s.aP(B.fVU,B.fZf,D.al)
s.aY(B.haf,B.aWs,D.au,0.3)
s.aY(B.h3z,B.aWs,D.au,0.3)
v=this.as
D.d.a8(v)
u=x.o
v.push(new A.fM(C.a([B.h4g,B.h2x,B.h5U,B.h9z],u),0,new A.bJb(this),520,230,6,2,0,!1))
v.push(new A.fM(C.a([B.h1e,B.h1v,B.h9n,B.h6n],u),0,new A.bJc(),720,600,30,2,0,!1))
v.push(new A.fM(C.a([B.h4e,B.h7q,B.h5b,B.h3N],u),0,new A.bJd(),720,600,30,2,0,!1))
v=C.C(v,x.K)
this.ay=new A.tM(t,B.RW,B.zk,v,null,0)},
bag(d,e){var w,v,u,t,s,r,q,p,o=this,n="dead, tap to fix it"
d.b=19500
d.aY(B.h7X,B.h_z,B.Xg,0.5)
for(w=0;w<4;++w){v=o.c&&w===0?D.cc:B.YR
d.aP(new A.r(-144.2,62-w*6,45),B.h31,v)}d.b=0
o.ru(d,-100,100,22,o.c?D.aw:D.be)
o.ru(d,90,100,22,D.cp)
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
d.aP(B.fZV,B.fXX,o.c?D.aw:D.be)
d.b=19501
d.aP(B.h16,B.h1K,t?D.be:D.aw)
d.aP(B.h8F,B.h26,s?D.be:D.aw)
d.aP(B.h33,B.h53,r?D.be:D.aw)
d.d=1
d.aY(B.h7C,B.h2i,B.Mj,0.25)
for(q=0;q<2;++q)for(u=26+F.je[q]*3.4,p=0;p<2;++p)d.aP(new A.r(95+B.QZ[p],u,2.6),B.h3V,B.agl)
d.aY(B.h9M,B.h5J,B.Mj,0.25)
d.aP(new A.r(-60,s?52:48,2.8),B.fYJ,B.ai7)
d.b=0
d.f=2
if(o.c)v=v.length===0?"\u26a1 Breaker panel: tap to switch the power on":"\u26a1 Breaker panel: still to fix: "+D.d.aH(v,", ")
else v="\u26a1 Breaker panel: all fine"
e.push(new A.hf(B.h7W,v,o.c?D.by:D.eh,19500))
v=new A.bJe(o)
u=t?"\ud83d\udd0c Outlets: fixed":"\ud83d\udd0c Outlet: "+C.w(v.$2(D.a2G,n))
e.push(new A.hf(B.h17,u,t?D.eh:D.by,19501))
u=s?"\ud83d\udca1 Switch: fixed":"\ud83d\udca1 Switch: "+C.w(v.$2(B.cpE,"no power, tap to fix it"))
e.push(new A.hf(B.h8G,u,s?D.eh:D.by,19501))
v=r?"\ud83d\udca1 Ceiling light: fixed":"\ud83d\udca1 Ceiling light: "+C.w(v.$2(B.ci9,n))
e.push(new A.hf(B.fUr,v,r?D.eh:D.by,19501))
if(o.c)e.push(B.c_h)},
cMZ(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=x.z,i=C.a([],j),h=new A.fk(i),g=k.a,f=g==="tower"
if(f||g==="cabin"){w=C.a([],j)
v=new A.fk(w)
if(f){v.e=16
for(u=0;u<2;++u)v.aY(new A.r(F.je[u]*(24+21*k.y),42,6.6),B.h9m,D.aP,0.7)}else{v.e=16
for(u=0;u<2;++u)v.aY(new A.r(F.je[u]*(9+18*k.y),40,78.6),B.fXE,D.aL,0.7)}D.d.v(i,w)}switch(g){case"shop":A.wI(h,B.enS,d,B.J0,!1,0,D.b5)
break
case"hospital":A.wI(h,B.enW,d,B.T1,!1,0,D.bP)
t=D.k.F(d*12,220)
g=t<110
f=g?t:220-t
g=g?0:3.141592653589793
A.wI(h,A.atq(!1,0,-1,"",!1,0,"",-1,t/12,!1,!1,!1,0,!1,!0,6,g,40+f),d,B.J0,!1,0,D.bO)
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
A.wI(new A.fk(f),B.enV,d,p,!1,0,p.c)
D.d.v(i,A.o9(f,-1.5707963267948966,-1.5707963267948966,new A.r(46,27,48+r*50)))}++r}}break
case"school":A.wI(h,B.enX,d,B.T1,!1,0,D.bk)
for(u=0;u<3;++u){g=B.d67[u]
A.wI(h,new A.xY(0,g.a,g.b,3.141592653589793,!1,!1,!1,!1,!1,0,!1,!1,"","",-1,0,-1,0),d,B.J0,!1,0,g.c)}break
case"firestation":A.wI(h,B.enT,d,B.J0,!1,0,D.by)
A.wI(h,B.enU,d,B.T1,!1,0,D.aD)
break
default:break}g=k.at
g===$&&C.c()
f=g.f
w=g.r
o=g.w
n=g.x
m=g.y
l=g.z&&n
A.wI(h,A.atq(!1,0,-1,"",!1,g.Q,"",-1,m,!1,!1,!1,0,l,n,f,o,w),d,e,!0,0,null)
if(k.cx!=null){j=C.a([],j)
new A.fk(j).aP(new A.r(g.f+Math.sin(g.w)*9,48+g.Q,g.r+Math.cos(g.w)*9),B.aVd,B.jp)
D.d.v(i,j)}return i},
gdc(d){return this.e}}
A.Fj.prototype={}
A.OT.prototype={
gUd(){var w,v=this
if(!v.f)return"has died"
if(v.r>=0)return"in hospital"
if(v.c<30)return"in danger"
if(v.e)return"sick"
w=v.b
if(w>80)return"starving"
if(w>55)return"hungry"
if(v.d<40)return"unhappy at home"
return"fine"},
gaDn(d){var w,v=this.gUd()
A:{if("has died"===v){w="\ud83d\udd6f"
break A}if("in hospital"===v){w="\ud83c\udfe5"
break A}if("in danger"===v){w="\ud83c\udd98"
break A}if("sick"===v){w="\ud83e\udd12"
break A}if("starving"===v||"hungry"===v){w="\ud83c\udf7d"
break A}if("unhappy at home"===v){w="\ud83d\ude1f"
break A}w="\ud83d\ude42"
break A}return w}}
A.I1.prototype={}
A.LV.prototype={}
A.aTj.prototype={
byx(d,e){var w,v=C.a([],x.fP)
for(w=0;w<7;++w)v.push(new A.OT(B.CI[w]))
this.c=v
v[1].b=55
v[4].b=40},
gC3(){var w,v,u,t=C.a([],x.fP),s=this.c
s===$&&C.c()
w=s.length
v=0
for(;v<s.length;s.length===w||(0,C.M)(s),++v){u=s[v]
if(u.f)t.push(u)}return t},
gcLU(){var w=this.c
w===$&&C.c()
return new C.Z(w,new A.bJZ(),C.T(w).k("Z<1>")).gL(0)},
PL(d){var w=this.f
D.d.c8(w,0,d)
if(w.length>12)w.pop()},
aD5(a2,a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=this
a1.as+=a3
for(w=a1.gC3(),v=w.length,u=-0.6*a3,t=0.8*a3,s=0.2*a3,r=a1.b,q=0.012*a3,p=a1.f,o=0.15*a3,n=0;n<w.length;w.length===v||(0,C.M)(w),++n){m=w[n]
l=a4.d
l===$&&C.c()
k=m.a
j=l[k.c]
i=j.gkJ()
l=k.d
if(l>=0)h=!a4.d[l].gjO()
else{l=j.c
h=(l==="bathroom"||l==="kitchen")&&!j.gjO()}if(m.r<0){m.b=Math.min(100,m.b+s)
l=i?0:45
g=h?35:0
f=m.d
f+=D.k.E(100-l-g-f,u,t)
m.d=f
if(!m.e)l=(f<40||m.b>85)&&r.ah()<q
else l=!1
if(l){m.e=!0
D.d.c8(p,0,k.b+" has fallen sick. Give medicine, or send them to the hospital.")
if(p.length>12)p.pop()}e=m.b>=95?0.9:0
if(m.e)e+=0.55
if(m.d<15)e+=0.4
if(e>0)l=m.c=m.c-e*a3
else{l=m.c
if(l<100){l=Math.min(100,l+o)
m.c=l}}if(l<=0)a1.aRN(m)}}for(w=a1.e,v=1.2*a3,u=2.2*a3,d=0;d<w.length;++d){a0=w[d]
t=a0.a
if(t<0)continue
s=a1.c
s===$&&C.c()
m=s[t]
if(!m.f){a0.a=-1
continue}t=a0.b=Math.max(0,a0.b-a3)
if(t>30)a0.c=Math.min(100,a0.c+u)
else if(t<=0)if((m.c-=v)<=0){a1.aRN(m)
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
a1.Ny(a4)
if((a1.at-=a3)<=0){a1.at=60+r.ah()*50
a1.cHj(a4)}},
aRN(d){var w
d.f=!1
d.c=0
w=d.r
if(w>=0)this.e[w].a=-1
d.r=-1
D.d.bu(this.d,new A.bJW(d))
this.PL(d.a.b+" has died. Keep up with everybody's needs: food, medicine and a home that works.")},
aVA(d,e){return D.d.b5(this.d,new A.bJX(d,e))},
Ny(d){var w,v,u,t,s,r,q,p,o,n=this,m=n.d,l=C.C(m,x.fC),k=l.length,j=n.f,i=0
for(;i<l.length;l.length===k||(0,C.M)(l),++i){w=l[i]
v=B.CI[w.b]
u=w.c==="power"
if(u){t=d.d
t===$&&C.c()
s=t[v.c].gkJ()}else{t=v.d
r=d.d
if(t>=0){r===$&&C.c()
t=r[t].gjO()
s=t}else{r===$&&C.c()
t=r[v.c].gjO()
s=t}}if(s){D.d.W(m,w)
t=w.e
n.r=n.r+t;++n.y
u=u?"power is back":"leak is fixed"
D.d.c8(j,0,v.b+"'s "+u+". +"+t+" points. Thank you!")
if(j.length>12)j.pop()}}for(l=n.gC3(),k=l.length,u=n.b,i=0;i<l.length;l.length===k||(0,C.M)(l),++i){q=l[i]
if(m.length>=4)break
t=d.d
t===$&&C.c()
r=q.a
p=t[r.c]
if(!p.gkJ()&&!n.aVA(r.a,"power")){m.push(new A.I1(n.Q++,r.a,"power",B.cZW[u.au(3)],15))
D.d.c8(j,0,r.b+" is calling for help: no power.")
if(j.length>12)j.pop()}t=r.d
o=t>=0?d.d[t]:p
t=o.c
if((t==="bathroom"||t==="kitchen")&&!o.gjO()&&!n.aVA(r.a,"leak")&&m.length<4){m.push(new A.I1(n.Q++,r.a,"leak",B.d7C[u.au(3)],15))
D.d.c8(j,0,r.b+" is calling for help: a leak.")
if(j.length>12)j.pop()}}},
cHj(d){var w,v,u,t,s,r,q=this
if(q.d.length>=3||q.gC3().length===0)return
w=q.b
v=q.gC3()[w.au(q.gC3().length)]
u=d.d
u===$&&C.c()
t=v.a
s=u[t.c]
t=t.d
r=t>=0?u[t]:s
u=r.c
if((u==="bathroom"||u==="kitchen")&&r.gjO()&&w.hh()){r.ch=!0
r.fr=null}else if(s.gkJ()){s.ay=!0
s.CW=null
s.fy=!1
s.fx.a8(0)}else return
q.Ny(d)},
bej(d){var w,v,u,t=this
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
t.PL(u)
return u},
aKq(d){var w,v,u=this
if(!d.f)return d.a.b+" has died."
if(!d.e)return d.a.b+" is not sick."
w=u.x
if(w<=0)return y.D
u.x=w-1
d.e=!1
d.c=Math.min(100,d.c+20)
u.r+=3
v=d.a.b+" took the medicine and is better. +3 points."
u.PL(v)
return v},
aD4(d){var w,v,u,t
if(!d.f)return d.a.b+" has died."
if(d.r>=0)return d.a.b+" is already in hospital."
if(!d.e&&d.c>60)return d.a.b+" is not ill enough for the hospital."
w=this.e
v=D.d.bg(w,new A.bJY())
if(v<0)return"The hospital is full. Treat the patients first, they go home when they are better."
w=w[v]
u=d.a
w.a=u.a
w.b=100
w.c=0
d.r=v
t=u.b+" is in bed "+(v+1)+" of the hospital. Keep up with their care."
this.PL(t)
return t},
bju(d){var w,v,u=this,t=u.e[d],s=t.a
if(s<0)return"This bed is empty."
if(t.b>70)return"The patient is cared for already."
w=u.x
if(w<=0)return y.D
u.x=w-1
t.b=100;++u.r
w=u.c
w===$&&C.c()
v=w[s].a.b+" was treated. +1 point."
u.PL(v)
return v},
aDA(d){var w,v=this
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
cQU(d){return d.r<0},
beu(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=C.a([],x.e3),e=d.d
e===$&&C.c()
w=e[a0]
if(w.c!=="outside")return f
v=new A.bK0(new A.bK2(w))
for(e=D.d.gaf(this.gC3()),u=new C.f5(e,this.gcQT()),t=this.d,s=0;u.C();){r=e.gR(0)
q=D.d.b5(t,new A.bK_(r))
p=v.$2(r,s).a
o=p[0]
n=p[1]
m=p[2]
l=p[3]
k=p[4]
p=r.a
j=q?0.4:m
i=q?"\ud83d\udcde ":""
h=r.gaDn(0)
r.gUd()
r=q?"":l
g=q?"":k
f.push(new A.a9N(p.a,a0,o,n,j,p.e,i+p.b+" "+h,q,0,r,g));++s}return f},
cXD(a2){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=l.r,j=l.w,i=l.x,h=l.y,g=l.z,f=l.as,e=l.Q,d=x.ez,a0=C.a([],d),a1=l.c
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
u.n(0,""+n.a,n.gkJ())}w=C.U(v,w)
for(r=D.d.gaf(a2.gqR()),q=new C.f5(r,new A.bK3());q.C();){m=r.gR(0)
w.n(0,""+m.a,m.gjO())}return C.G(["v",1,"seed",l.a,"points",k,"food",j,"medicine",i,"served",h,"saved",g,"clock",f,"nextCall",e,"res",a0,"beds",a1,"calls",d,"wired",u,"plumbed",w],v,x.A)},
CR(d,e){return this.bnA(0,e)},
bnA(d,e){var w=0,v=C.j(x.H),u=1,t=[],s=this,r,q,p,o
var $async$CR=C.e(function(f,g){if(f===1){t.push(g)
w=u}for(;;)switch(w){case 0:u=3
w=6
return C.b(C.az(),$async$CR)
case 6:r=g
q=C.dQ(s.cXD(e),x.N,x.A)
J.aH(q,"at",Date.now())
w=7
return C.b(r.ar("String","ngmy_community_v1",D.X.ap(q,null)),$async$CR)
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
return C.i($async$CR,v)}}
A.apr.prototype={
U(){return new A.bjW()}}
A.bjW.prototype={
gbje(){var w=this.r
return w===$?this.r=this.a.c:w},
a_(){this.a2()
this.ZQ()},
ZQ(){return this.c1w()},
c1w(){var w=0,v=C.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$ZQ=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:m={}
w=3
return C.b(A.aTl(),$async$ZQ)
case 3:l=e
if(t.c==null){w=1
break}m.a=null
if(l!=null){s=J.a5(l)
r=C.aK(s.h(l,"seed"))
q=r==null?null:D.k.N(r)
if(q==null)q=1
r=$.E3
if((r==null?null:r.b)===q){r.toString
t.e=r}else{r=A.aVN(q)
t.e=$.E3=r
A.h8Y(r,l)}m.a=A.fW7(l)
r=Date.now()
s=C.aK(s.h(l,"at"))
s=s==null?null:D.k.N(s)
p=D.k.E((r-(s==null?Date.now():s))/1000*0.15,0,90)
while(p>0){o=p>5?5:p
s=m.a
r=t.e
r===$&&C.c()
s.aD5(0,o,r)
p-=o}}else{s=$.E3
if(s==null)s=$.E3=A.aVN(D.o.F(Date.now(),1e5))
t.e=s
s=s.b
n=A.fW6(s,s)
m.a=n
n.Ny(t.e)}$.ajH=m.a
t.m(new A.dQ9(m,t))
t.f=C.dk(D.fV,new A.dQa(t))
case 1:return C.h(u,v)}})
return C.i($async$ZQ,v)},
c75(){var w,v,u,t=this,s=t.d
if(s==null||t.c==null)return
w=s.f
v=w.length===0?"":D.d.gI(w)
u=t.e
u===$&&C.c()
s.aD5(0,1,u)
if(w.length!==0&&D.d.gI(w)!==v)t.J0(D.d.gI(w))
if(++t.y%8===0)s.CR(0,t.e)
t.m(new A.dQm())},
q(){var w,v=this,u=v.f
if(u!=null)u.a4(0)
u=v.x
if(u!=null)u.a4(0)
u=v.d
if(u!=null){w=v.e
w===$&&C.c()
u.CR(0,w)}v.a3()},
J0(d){var w=this,v=w.x
if(v!=null)v.a4(0)
w.m(new A.dQg(w,d))
w.x=C.cL(D.tV,new A.dQh(w))},
abH(d){return this.bT8(d)},
bT8(d){var w=0,v=C.j(x.H),u,t=this,s,r,q
var $async$abH=C.e(function(e,f){if(e===1)return C.f(f,v)
for(;;)switch(w){case 0:q=B.CI[d.b]
if(d.c==="power")s=q.c
else{r=q.d
s=r>=0?r:q.c}r=t.e
r===$&&C.c()
r.e=s
r=t.c
r.toString
w=3
return C.b(C.a4(r,!1).cg(C.e_(new A.dQ5(),!1,null,x.H)),$async$abH)
case 3:if(t.c==null){w=1
break}r=t.d
if(r!=null)r.Ny(t.e)
r=t.d
if(r!=null)r.CR(0,t.e)
t.m(new A.dQ6())
case 1:return C.h(u,v)}})
return C.i($async$abH,v)},
ajS(d){return this.cEO(d)},
cEO(d){var w=0,v=C.j(x.H),u,t=this,s
var $async$ajS=C.e(function(e,f){if(e===1)return C.f(f,v)
for(;;)switch(w){case 0:s=t.e
s===$&&C.c()
s.e=d.a.c
s=t.c
s.toString
w=3
return C.b(C.a4(s,!1).cg(C.e_(new A.dQp(),!1,null,x.H)),$async$ajS)
case 3:if(t.c==null){w=1
break}s=t.d
if(s!=null)s.Ny(t.e)
t.m(new A.dQq())
case 1:return C.h(u,v)}})
return C.i($async$ajS,v)},
ZR(d,e){var w=null,v=e.j(0.18),u=C.m(14),t=C.J(e.j(0.7),D.r,1)
return C.p(w,C.d(d,w,w,w,w,w,w,C.l(w,w,e,w,w,w,w,w,w,w,w,12.5,w,w,D.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),D.f,w,w,new C.o(v,w,t,u,w,w,D.n),w,w,w,w,M.ajd,w,w,w)},
Wq(d,e,f){var w=null
return new C.D(D.nl,C.B(C.a([new C.a7(62,w,C.d(d,w,w,w,w,w,w,A2.a9m,w,w,w),w),C.E(C.by(C.m(6),C.lk(D.bz,w,w,8,w,D.k.E(e/100,0,1),new C.m6(f,x.dw)),D.aq),1)],x.p),D.m,w,D.e,D.j,0,w,w),w)},
PM(d,e,f){var w=null,v=e==null,u=v?D.dt:f.j(0.22),t=C.m(12),s=C.J(v?D.aZ:f,D.r,1)
return C.aB(w,C.p(w,C.d(d,w,w,w,w,w,w,C.l(w,w,v?D.bY:f,w,w,w,w,w,w,w,w,12.5,w,w,D.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),D.f,w,w,new C.o(u,w,s,t,w,w,D.n),w,w,w,w,D.nn,w,w,w),D.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,e,w,w,w,w,w,w,!1,D.a5)},
aeb(d,e){return this.PM(d,e,D.aD)},
PN(d,e){var w=null,v=C.a([e.j(0.1),B.Fk],x.O),u=C.m(18)
return C.p(w,d,D.f,w,w,new C.o(w,w,C.J(e.j(0.5),D.r,1),u,w,new C.a9(D.b3,D.b6,D.x,v,w,w),D.n),w,w,w,D.d3,D.bf,w,w,w)},
c71(d){return this.PN(d,D.aZ)},
aZv(d,e,f){var w,v=null,u=this.gbje()===d,t=u?D.aD.j(0.22):D.c.j(0.06),s=C.m(14),r=u?D.aD:D.aZ
r=C.J(r,D.r,u?2:1)
w=f>0?e+" ("+f+")":e
return C.E(C.aB(v,C.p(v,C.at(C.d(w,v,v,v,v,v,v,C.l(v,v,u?D.aD:D.ae,v,v,v,v,v,v,v,v,12.5,v,v,D.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v,v,v),D.f,v,v,new C.o(t,v,r,s,v,v,D.n),v,v,v,D.jx,D.jM,v,v,v),D.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new A.dQo(this,d),v,v,v,v,v,v,!1,D.a5),1)},
axk(d,e){return this.aZv(d,e,0)},
bFT(d){var w,v,u,t,s,r,q,p,o,n=this,m=null,l=d.d
if(l.length===0)return new C.D(D.ez,C.x(B.dgF,D.m,m,D.e,D.j,0,D.p),m)
w=x.p
v=C.a([],w)
for(u=l.length,t=0;t<l.length;l.length===u||(0,C.M)(l),++t){s=l[t]
r=s.c==="power"
q=r?D.bG:D.cp
p=B.CI[s.b]
o=r?"\u26a1 Power":"\ud83d\udeb0 Leak"
r=r?D.bG:D.cp
v.push(n.PN(C.x(C.a([new C.cc(D.aN,D.e,D.j,D.m,m,D.p,m,0,C.a([new A.acw(p.e,44,m),D.as,new C.bA(1,D.bd,new C.y(p.b,m,D.hB,m,m,m,m,m,m,m,m,m),m),n.ZR(o+"  +"+s.e,r)],w),m),D.O,new C.y('"'+s.d+'"',m,B.fkT,m,m,m,m,m,m,m,m,m),D.W,new C.bM(D.a8,m,m,n.aeb("\ud83d\udd27 Go and fix it",new A.dQ4(n,s)),m)],w),D.E,m,D.e,D.j,0,D.p),q))}return C.x(v,D.m,m,D.e,D.j,0,D.p)},
c73(d){var w,v,u,t,s,r,q,p,o,n=this,m=null,l=x.p,k=C.a([],l),j=d.c
j===$&&C.c()
w=j.length
v=0
for(;v<j.length;j.length===w||(0,C.M)(j),++v){u=j[v]
t=u.f
if(!t)s=D.aZ
else s=u.gUd()==="fine"?D.bj:D.cs
t=t?1:0.5
r=u.a
q=u.gaDn(0)
p=u.gUd()
o=u.gUd()==="fine"?D.ep:D.eU
r=C.a([new C.cc(D.aN,D.e,D.j,D.m,m,D.p,m,0,C.a([new A.acw(r.e,50,m),D.as,new C.bA(1,D.bd,C.x(C.a([new C.y(r.b+"  "+q,m,D.hB,m,m,m,m,m,m,m,m,m),new C.y(r.f,m,B.aRU,m,m,m,m,m,m,m,m,m),new C.y("Now: "+p,m,new C.F(!0,o,m,m,m,m,12.5,D.H,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m,m,m,m,m,m,m,m,m)],l),D.E,m,D.e,D.j,0,D.p),m)],l),m),D.O,n.Wq("Food",100-u.b,D.cT),n.Wq("Health",u.c,D.bj),n.Wq("Home",u.d,D.cp)],l)
if(u.f){q=n.aeb("\ud83c\udf5e Feed",new A.dQb(n,d,u))
p=n.PM("\ud83d\udc8a Medicine",u.e?new A.dQc(n,d,u):m,D.bv)
D.d.v(r,C.a([D.am,new C.Cw(D.bE,8,8,D.bq,C.a([q,p,n.PM("\ud83c\udfe5 Hospital",u.r>=0?m:new A.dQd(n,d,u),D.cs),n.PM("\ud83c\udfe0 Visit",new A.dQe(n,u),D.b1)],l),m)],l))}k.push(n.PN(new C.ky(t,C.x(r,D.E,m,D.e,D.j,0,D.p),m),s))}return C.x(k,D.m,m,D.e,D.j,0,D.p)},
c72(d){var w,v,u,t,s=null,r=x.p,q=C.a([B.ejD],r)
for(w=d.e,v=0;v<w.length;++v){u=w[v].a<0
t=u?D.aZ:D.cs
q.push(this.PN(u?new C.cc(D.aN,D.e,D.j,D.m,s,D.p,s,0,C.a([B.fK6,D.as,new C.y("Bed "+(v+1)+": empty",s,B.fep,s,s,s,s,s,s,s,s,s)],r),s):new C.fd(new A.dQ8(this,d,v),s),t))}return C.x(q,D.m,s,D.e,D.j,0,D.p)},
c74(d){var w=this,v=null,u=x.p,t=w.PN(C.B(C.a([B.fvF,D.as,B.bDO,w.aeb("Buy",new A.dQj(w,d))],u),D.m,v,D.e,D.j,0,v,v),D.cT),s=w.PN(C.B(C.a([B.fR7,D.as,B.bE3,w.PM("Buy",new A.dQk(w,d),D.bv)],u),D.m,v,D.e,D.j,0,v,v),D.bv),r=C.a([B.fL6,D.am,C.d("Calls answered: "+d.y+"\nPatients sent home better: "+d.z+"\nPeople lost: "+d.gcLU(),v,v,v,v,v,v,B.aSV,v,v,v)],u)
if(d.gC3().length===0)D.d.v(r,C.a([D.W,w.aeb("Start a new community",new A.dQl(w))],u))
return C.x(C.a([t,s,w.c71(C.x(r,D.E,v,D.e,D.j,0,D.p))],u),D.m,v,D.e,D.j,0,D.p)},
B(d){var w,v,u,t,s,r,q=this,p=null,o=q.d
if(o==null)w=D.mq
else{w=x.p
v=C.B(C.a([C.aJ(p,p,p,p,S.nt,p,p,p,new A.dQr(d),p,p,p,p,p,p),B.bDu,q.ZR("\u2b50 "+o.r,D.aD)],w),D.m,p,D.e,D.j,0,p,p)
u=q.ZR("\ud83c\udf5e "+o.w,D.cT)
t=q.ZR("\ud83d\udc8a "+o.x,D.bv)
s=o.e
s=C.B(C.a([u,D.ac,t,D.ac,q.ZR("\ud83c\udfe5 "+new C.Z(s,new A.dQs(),C.T(s).k("Z<1>")).gL(0)+"/"+s.length,D.cs)],w),D.m,p,D.b8,D.j,0,p,p)
t=C.B(C.a([q.aZv("calls","\ud83d\udcde Calls",o.d.length),q.axk("people","\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc67 People"),q.axk("hospital","\ud83c\udfe5 Hospital"),q.axk("shop","\ud83d\uded2 Shop")],w),D.m,p,D.e,D.j,0,p,p)
r=q.gbje()
A:{if("people"===r){u=q.c73(o)
break A}if("hospital"===r){u=q.c72(o)
break A}if("shop"===r){u=q.c74(o)
break A}u=q.bFT(o)
break A}w=C.a([new C.D(B.bBW,v,p),new C.D(D.BB,s,p),new C.D(B.bCP,t,p),D.O,C.E(C.ct(C.a([u],w),p,D.N3,p,p,D.ah,!1),1)],w)
if(q.w!=null){v=D.dZ.j(0.96)
u=C.m(14)
t=C.J(D.bj,D.r,1)
s=q.w
s.toString
w.push(C.p(p,C.d(s,p,p,p,p,p,p,B.fh0,p,p,p),D.f,p,p,new C.o(v,p,t,u,p,p,D.n),p,p,p,G.ajg,D.bf,p,p,1/0))}w=C.x(w,D.m,p,D.e,D.j,0,D.p)}return C.c6(p,D.c0,C.bn(!0,w,!0,!1,D.af,!0,!0),p,!1,!1,p,p)}}
A.acw.prototype={
B(d){var w=null,v=this.d
return new C.a7(v,v,C.b4(w,w,w,new A.beP(this.c,w),D.ax),w)},
gY(d){return this.d}}
A.beP.prototype={
a1(d,e){var w,v,u,t,s=e.a,r=s/2,q=$.S(),p=C.I()
p.r=D.dt.gp(0)
d.ad(new C.t(r,r),r,p)
p=d.a
J.bl(p.save())
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
d.e2(new C.a3(t,q,t+s*0.52,q+w),3.14,3.14,!0,r)
r=s*0.44
q=s*0.035
t=C.I()
t.r=D.nd.gp(0)
d.ad(new C.t(s*0.42,r),q,t)
t=C.I()
t.r=D.nd.gp(0)
d.ad(new C.t(s*0.58,r),q,t)
t=s*0.4
q=C.I()
q.b=D.a9
q.c=1.4
q.r=D.ei.gp(0)
d.e2(new C.a3(t,w,t+s*0.2,w+s*0.12),0.2,2.7,!1,q)
p.restore()},
aw(d){return!1}}
A.fJ.prototype={}
A.Cv.prototype={}
A.jz.prototype={}
A.SW.prototype={}
A.b8E.prototype={
gjM(){return this.a==="ok"}}
A.mb.prototype={}
A.fn.prototype={}
A.E_.prototype={}
A.pN.prototype={}
A.abv.prototype={}
A.oi.prototype={}
A.aVG.prototype={
gwB(){var w=this.c
return w.c>=2&&A.L4(A.t1(this.a),w).a==="ok"},
gdc(d){return this.c}}
A.a55.prototype={
gz3(){var w,v,u=this.p4,t=u==="ptrap"
if(t||u==="faucet"){w=this.RG
if(w==null)return!1
if(t)if(w.a.a===3){u=w.b
u=new C.bc(u,C.a6(u).k("bc<2>")).d5(0,new A.bTd())&&w.c}else u=!1
else u=A.fwI(w)&&w.f
return u}v=this.R8
return v!=null&&v.c>=2&&A.L4(A.t1(u),v).a==="ok"},
Il(d){var w
if(this.c!=="outside"){w=this.CW
w=w!=null?w.te(d):!this.ay}else w=!0
return w},
ga5X(){var w=this.p4
if(w.length===0)w=this.Il(2)
else w=w!=="fan"||this.gz3()
return w},
gMb(){var w=this.p4
if(w.length===0)w=this.Il(3)
else w=!D.d.t(B.jT,w)||this.gz3()
return w},
gani(){var w=this.p4
if(w.length===0)w=this.Il(0)
else w=!D.d.t(B.lH,w)||this.gz3()
return w},
gew(d){var w,v
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
gkJ(){var w,v=this
if(v.c!=="outside"){w=v.p4
if(w.length!==0)w=w==="ptrap"||w==="faucet"||v.gz3()
else{w=v.CW
w=w==null?null:w.gbk1()
if(w==null)w=!v.ay}}else w=!0
return w},
gjO(){var w=this,v=w.c
if(v==="bathroom"||v==="kitchen"){v=w.p4
if(v.length!==0)v=!(v==="ptrap"||v==="faucet")||w.gz3()
else{v=w.fr
v=v==null?null:v.gwB()
if(v==null)v=!w.ch}}else v=!0
return v},
BR(d){var w,v,u,t
for(w=this.x,v=w.length,u=0;u<v;++u){t=w[u]
if(t.a===d)return t}return null},
dz(d,e,f,g){var w=this,v=w.y++,u=f==null?0:f,t=new A.mb(v,e,u,g==null?w.gho(0)*0.6:g)
w.x.push(t)
w.a3R(0,t)
return t},
M(d,e){return this.dz(0,e,null,null)},
cHW(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0=d.k1
if(a0!=null){w=d.c
w=w==="outside"||w==="hall"}else w=!0
if(w)return
v=A.h6c(d,A.aP7(a0),0)
w=v.c
u=v.a/2
t=w-u-6
s=w+u+6
for(w=D.d.gaf(d.x),u=new C.f5(w,new A.bTc());u.C();){r=w.gR(0)
q=B.hw.h(0,r.b)
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
i=d.gew(0)/2-m-1
m=k<=i
if(m){l=r.c
l=Math.abs(l-k)<=Math.abs(l-j)}else l=!1
if(!l)m=j<-i&&m
else m=!0
if(m)r.c=k
else if(j>=-i)r.c=j
else r.d=52+q+1}else{q=q==="left"
h=q?-d.gew(0)/2:d.gew(0)/2
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
a3R(d,e){var w,v,u,t,s,r=this,q=e.b,p=B.hw.h(0,q)
p.toString
w=(e.e&1)===1
v=w?p.d:p.c
u=w?p.c:p.d
p=v/2
e.c=D.k.E(e.c,-r.gew(0)/2+p+1,r.gew(0)/2-p-1)
p=e.d
t=u/2
s=r.c==="outside"?-760+t:t+1
e.d=D.k.E(p,s,r.gho(0)-t-1)
if(D.d.t(B.Ru,q)){e.c=D.k.V(e.c/40)*40
e.d=D.k.V(e.d/40)*40}}}
A.aVM.prototype={
byK(d){var w,v,u
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
u.p3=Math.max(0,D.d.bg(E.kj,new A.bTO()))
this.d=C.a([u],x.D)},
cRM(){var w,v,u,t,s,r
for(w=this.gqR(),v=w.length,u=0;u<w.length;w.length===v||(0,C.M)(w),++u){t=w[u]
t.fr=t.CW=null
s=t.ay=!0
r=t.c
t.ch=r!=="bathroom"?r==="kitchen":s
t.fy=!1
t.fx.a8(0)
D.d.a8(t.id)}},
c76(){var w,v,u,t,s,r,q,p=this,o="back",n="bedroom",m="bathroom",l=new C.e9()
l.d3(p.b)
w=new A.bTP()
v=x.dY
u=C.a([B.bHn,B.bHk,B.bHl],v)
for(t=0;t<7;++t){s=B.ci6[t]
u.push(new A.oi(!0,o,-150+s.a*50,s.b))}r=p.d=C.a([A.zf(0,"Bedroom 1",n,0,0,2,2,C.a([w.$1(-48)],v)),A.zf(1,"Bedroom 2",n,2,0,2,2,C.a([w.$1(-48)],v)),A.zf(2,"Bathroom 1",m,4,0,1,2,C.a([B.a0p],v)),A.zf(3,"Bedroom 3",n,5,0,2,2,C.a([w.$1(-48)],v)),A.zf(4,"Bathroom 2",m,7,0,2,2,C.a([B.a0p],v)),A.zf(5,"Hall","hall",0,2,9,1,u),A.zf(6,"Bedroom 4",n,0,3,2,2,C.a([w.$1(-48)],v)),A.zf(7,"Bedroom 5",n,2,3,2,2,C.a([w.$1(-48)],v)),A.zf(8,"Bathroom 3",m,4,3,1,2,C.a([B.a0p],v)),A.zf(9,"Kitchen","kitchen",5,3,2,2,C.a([new A.oi(!1,o,-26,5),B.bHp],v)),A.zf(10,"Living room","living",7,3,2,2,C.a([new A.oi(!1,o,-70,5),B.bHo,B.bHm],v)),A.zf(11,"Garden","outside",0,5,9,1,C.a([B.bHj],v))],x.D)
for(v=r.length,t=0;t<r.length;r.length===v||(0,C.M)(r),++t){q=r[t]
u=q.c
if(u==="outside"){p.aTL(q)
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
p.aTL(q)}v=p.d
u=v[5]
u.k2=u.k1="tv100"
u.p2=!0
v[3].ay=!0
v[2].ch=!0},
aTL(b3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4="plant",a5="roadcross",a6="road",a7="roundabout",a8="house2",a9="bighouse",b0="adboard",b1="flowers",b2=b3.gew(0)/2
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
b3.dz(0,a4,b3.gew(0)/2-12,b3.gho(0)-12)
break
case"outside":for(w=-780;w<=780;w+=40){v=Math.abs(w)<1
b3.dz(0,v?a5:a6,w,420)
b3.dz(0,v?a5:a6,w,860)}for(u=200;u<=820;u+=40){if(Math.abs(u-420)<1||Math.abs(u-860)<1)continue
b3.dz(0,a6,0,u).e=1}for(t=0;t<2;++t){s=B.dko[t]
for(u=460;u<859;u+=40)b3.dz(0,a6,s,u).e=1}for(t=0;t<3;++t){s=B.dkn[t]
b3.dz(0,a7,s,420)
b3.dz(0,a7,s,860)}r=new A.bTQ(b3)
b3.dz(0,"shop",-250,225)
b3.dz(0,"hospital",250,215)
b3.dz(0,"firestation",-480,225)
b3.dz(0,"school",520,210)
for(t=0;t<14;++t){v=B.d8s[t]
w=v.a
u=v.b
if(r.$4(w,u,60,40))b3.dz(0,"billboard",w,u)}for(t=0;t<4;++t){v=B.doz[t]
w=v.a
u=v.b
if(r.$2(w,u))b3.dz(0,a8,w,u)}for(t=0;t<3;++t){v=B.cWK[t]
u=v.a
q=v.b
p=v.c
for(v=u<900,w=-800;w<=800;w+=q){o=Math.abs(w)
if(o<100)continue
if(v&&o>400)continue
if(r.$2(w,u))b3.dz(0,p&&D.o.F(D.k.e9(w,q),2)===0?a9:a8,w,u)}}for(t=0;t<2;++t){v=B.cvq[t]
w=v.a
u=v.b
if(r.$2(w,u))b3.dz(0,a9,w,u)}for(w=-1220;w<=1220;w+=40){if(Math.abs(w)>780){b3.dz(0,a6,w,420)
b3.dz(0,a6,w,860)}b3.dz(0,a6,w,1460)
b3.dz(0,a6,w,1700)}for(u=900;u<1459;u+=40)b3.dz(0,a6,0,u).e=1
v=C.a([],x._)
for(o=b3.x,n=o.length,t=0;t<o.length;o.length===n||(0,C.M)(o),++t){m=o[t]
l=m.b
if(D.d.t(B.Ru,l)||l==="roundabout")v.push(m)}k=new A.bTS(v,b3)
j=new A.bTT(b3,new A.bTW(b3))
j.$3("gasstation",6,B.d3e)
j.$3("dmv",1,B.drh)
j.$3("ubstation",3,B.cUW)
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
e=B.hw.h(0,f)
if(k.$4(w,u,e.c,e.d)){b3.dz(0,f,w,u);++i}}++g}++h}for(d=0,t=0;t<11;++t,d=a0){v=B.cXF[t]
a0=d+1
b3.dz(0,v.b,v.a,1560).f=D.o.F(d,6)}for(t=0;t<11;++t,d=a0){v=B.dmq[t]
a0=d+1
b3.dz(0,v.b,v.a,1860).f=D.o.F(d,6)}b3.dz(0,"townsign",0,640)
for(t=0;t<4;++t){v=B.dgV[t]
b3.dz(0,"cornersign",v.a,v.b)}for(t=0;t<5;++t)b3.dz(0,b0,B.d6B[t],2045)
for(t=0;t<4;++t)b3.dz(0,b0,B.dkt[t],-690)
for(t=0;t<4;++t){u=B.cpO[t]
a1=b3.dz(0,b0,-1245,u)
a1.e=1
a1.c=-1245
b3.a3R(0,a1)
a2=b3.dz(0,b0,1245,u)
a2.e=3
a2.c=1245
b3.a3R(0,a2)}for(w=-1200;w<=1200;w+=480){for(t=0;t<4;++t)b3.dz(0,"pole",w,B.cu8[t])
for(v=Math.abs(w)<1100,o=w+240,t=0;t<4;++t){u=B.cBg[t]
if(v)b3.dz(0,"lamppost",o,u)}}b3.dz(0,"car",-300,490).e=2
b3.dz(0,"ambulance",110,345)
b3.dz(0,"firetruck",-385,345)
for(t=0;t<10;++t){v=B.dqb[t]
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
for(t=0;t<6;++t){v=B.cAP[t]
b3.dz(0,"crate",v.a,v.b)}break
case"hall":default:}},
gqR(){var w,v,u,t=C.a([],x.D),s=this.d
s===$&&C.c()
w=s.length
v=0
for(;v<s.length;s.length===w||(0,C.M)(s),++v){u=s[v]
if(u.c!=="outside")t.push(u)}return t},
gcYo(){var w=this.gqR()
return new C.Z(w,new A.bU_(),C.T(w).k("Z<1>")).gL(0)},
gcV9(){var w=this.d
w===$&&C.c()
return new C.Z(w,new A.bTZ(),C.T(w).k("Z<1>")).gL(0)},
gcV8(){var w=this.d
w===$&&C.c()
return new C.Z(w,new A.bTY(),C.T(w).k("Z<1>")).gL(0)},
gcNU(){var w=this.gqR()
return new C.Z(w,new A.bTX(),C.T(w).k("Z<1>")).gL(0)}}
A.IQ.prototype={
U(){var w,v,u,t,s=new C.y7()
$.yT()
s.h9(0)
w=$.ax()
v=$.hu_()
u=x.S
t=C.a([],x.aQ)
return new A.aEe(s,B.azc,new C.ez("",w),B.df9,B.rC,B.rC,D.CP,C.aY(x.N),new C.cA(null,x.eF),v,C.U(u,x.i),C.aY(u),t,D.cZ)}}
A.aEe.prototype={
ghI(){var w,v,u=$.ajH
if(u!=null){w=u.a
v=this.d
v===$&&C.c()
v=w===v.b
w=v}else w=!1
return w?u:null},
azp(){var w,v,u=this.ghI()
if(u==null)u=null
else{w=this.d
w===$&&C.c()
v=w.d
v===$&&C.c()
w=u.beu(w,v[w.e].a)
u=w}this.fr=u==null?B.azc:u},
gbia(){var w=this.d
w===$&&C.c()
w=w.gqR()
return new C.Z(w,new A.eaR(),C.T(w).k("Z<1>")).gL(0)},
a_(){var w,v,u,t,s,r=this
r.a2()
w=r.a.r
if(w.length!==0)w=r.d=A.hCT(w)
else{w=$.E3==null
if(w){w=D.o.F(Date.now(),1e5)
$.E3=A.aVN(w)
r.eh=!0}w=$.E3
w.toString
w=r.d=w}v=r.a
v.toString
u=w.c
w.c=u
u=new A.xa(-0.05,0.1,120,B.fVK,$.ax())
u.f=560
r.e=u
v=v.f
if(v==="city")w.e=11
if(v.length!==0){w=w.gqR()
t=new C.Z(w,new A.eaO(r),C.T(w).k("Z<1>"))
if(!t.gan(0)){w=r.d
w===$&&C.c()
w.e=t.gI(0).a}}A.aVy($.ahs)
A.heP()
r.aiJ()
r.azp()
w=r.d
w===$&&C.c()
v=w.d
v===$&&C.c()
w=v[w.e]
v=r.gbia()
u=r.d
s=u.d
s===$&&C.c()
r.f=A.hoN(w,s[u.e].c!=="outside",B.aPL,"look",v,r.fr,0)
r.aec(!0)
r.YT()
r.fx=C.dk(D.fW,new A.eaP(r))
$.aW.x1$.push(new A.eaQ(r))},
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
v=w.bw
if(v!=null)v.a4(0)
v=w.P
if(v!=null)v.a4(0)
w.a3()},
c11(){var w,v=this.d
v===$&&C.c()
w=v.a
A:{if("switch"===w){v="The ceiling light is already in. Tap the red switch on the wall and wire it. Then flip it to see the light work."
break A}if("outlet"===w){v="Tap the red outlet on the wall and wire it. Then plug in a lamp or a TV to test it."
break A}if("gfci"===w){v="Tap the red GFCI outlet and wire it. Then plug in a hair dryer to test it."
break A}if("fan"===w){v="Tap the ceiling fan and wire it. Then flip the wall switch and watch it spin."
break A}if("ptrap"===w){v="The sink has no drain yet. Tap the sink and build the drain under it."
break A}v="The faucet is not connected yet. Tap the sink and connect the hoses."
break A}return v},
aec(d){var w,v,u,t,s,r,q=this,p=q.d
p===$&&C.c()
w=p.d
w===$&&C.c()
v=w[p.e]
if(q.z){u=new A.r(0,40,v.gho(0)*0.5)
t=Math.max(v.gew(0),v.gho(0))*0.6
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
u=B.fVH
t=540
s=0.35
r=-0.25}else if(q.x){u=new A.r(0,46,v.gho(0)*0.1)
t=v.gho(0)*0.74
p=q.e
p===$&&C.c()
p.e=6
p.f=v.gho(0)*0.78
p.w=0.02
p.x=1.35
p.r6(!0)
s=0.05
r=0}else{u=new A.r(0,30,v.gho(0)*0.45)
t=(v.gew(0)*1.2>v.gho(0)*1.4?v.gew(0)*1.2:v.gho(0)*1.4)+30
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
xV(){return this.aec(!1)},
bN6(d,e){var w,v,u,t,s,r,q,p,o=this,n=o.e
n===$&&C.c()
w=n.cO1(d,e)
if(w==null)return
n=o.d
n===$&&C.c()
v=n.d
v===$&&C.c()
u=v[n.e]
t=o.aI
if(t!=null){n=t.at
n===$&&C.c()
n.at=new C.z(D.k.E(w.a,-138,138),D.k.E(w.c,12,316))}else if(o.z){s=D.k.E(w.a,-u.gew(0)/2+10,u.gew(0)/2-10)
r=D.k.E(w.c,10,u.gho(0)-10)
o.e.apx(new A.r(s,48,r))}else{n=u.c==="outside"
if(n&&o.aL&&o.aC!=null){n=o.aC
n.toString
n.at=new C.z(D.k.E(w.a,-u.gew(0)/2+12,u.gew(0)/2-12),D.k.E(w.c,-290,u.gho(0)-12))}else{v=o.e
q=w.a
p=w.c
if(n)v.apy(Math.max(70,v.c*0.4),0.32,new A.r(q,30,p))
else{n=D.k.E(q,-u.gew(0)/2+8,u.gew(0)/2-8)
p=D.k.E(p,8,u.gho(0)-8)
v.apy(Math.max(36,o.e.c*0.35),0.2,new A.r(n,40,p))}}}A.fU(560,50,0.25,"tri")},
iC(){var w,v,u,t,s,r,q,p,o=this
o.azp()
w=o.aI
if(w!=null){v=w.ay
v===$&&C.c()}else{v=o.d
v===$&&C.c()
u=v.d
u===$&&C.c()
v=u[v.e]
u=o.r
t=o.Q
s=o.gbia()
if(!o.z)if(o.x){r=o.d
q=r.d
q===$&&C.c()
r=q[r.e].c!=="outside"&&o.cx==null}else r=!1
else r=!0
q=o.fr
p=o.bG
v=A.hoN(v,r,p!=null?C.eC([100+p.a],x.S):B.aPL,u,s,q,t)}o.f=v},
ef(d,e){var w=this,v=w.ch
if(v!=null)v.a4(0)
w.m(new A.e9B(w,d,e))
w.ch=C.cL(D.en,new A.e9C(w))},
iD(d){return this.ef(d,!0)},
PO(d){this.m(new A.e9D(this,d))
A.fU(660,50,0.25,"tri")},
axl(d,e){var w,v=this,u=v.d
u===$&&C.c()
if(d!==u.e){u=u.d
u===$&&C.c()
u=d>=u.length}else u=!0
if(u)return
if(v.aL&&d!==11)v.a2A()
v.cL=v.bG=v.aI=null
if(!e&&v.cx!=null)v.S3()
v.m(new A.e89(v,d))
u=v.d
w=u.d
w===$&&C.c()
u=w[u.e]
if(u.c==="outside")v.aC=A.hie(u,0,24)
v.xV()
A.fU(520,60,0.25,"tri")},
Ax(d){return this.axl(d,!1)},
aXe(d){var w,v,u,t=this
if(d===700){w=t.d
w===$&&C.c()
v=w.d
v===$&&C.c()
return v[w.e].gani()}if(d===701){w=t.d
w===$&&C.c()
v=w.d
v===$&&C.c()
w=v[w.e]
return w.p4.length!==0||w.Il(1)}if(d===702){w=t.d
w===$&&C.c()
v=w.d
v===$&&C.c()
return v[w.e].gMb()}if(d===703){w=t.d
w===$&&C.c()
v=w.d
v===$&&C.c()
return v[w.e].ga5X()}if(d>=800&&d<820){u=d-800
w=t.d
w===$&&C.c()
v=w.d
v===$&&C.c()
w=v[w.e].id
return u<w.length&&w[u].gwB()}if(d===720){w=t.d
w===$&&C.c()
v=w.d
v===$&&C.c()
return v[w.e].gani()}if(d===721){w=t.d
w===$&&C.c()
v=w.d
v===$&&C.c()
w=v[w.e]
return w.p4.length!==0||w.Il(1)}if(d>=722&&d<728){u=d-720-2
w=t.d
w===$&&C.c()
v=w.d
v===$&&C.c()
w=v[w.e].id
return u<w.length&&w[u].gwB()}w=t.d
w===$&&C.c()
v=w.d
v===$&&C.c()
return v[w.e].gkJ()},
b8k(){var w,v,u=this,t=u.d
t===$&&C.c()
w=t.d
w===$&&C.c()
v=w[t.e].go==="fan"
u.m(new A.ea3(u))
t=u.d
w=t.d
w===$&&C.c()
if(w[t.e].fy)t=v?"The fan spins.":"The light is on."
else t=v?"The fan stops.":"The light is off."
u.iD(t)
t=u.d
w=t.d
w===$&&C.c()
A.fU(w[t.e].fy?900:500,60,0.25,"tri")},
c7e(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this
if(a0===0)return
if(a0>=19e3&&a0<19004){w=a0-19e3
v=d.d
v===$&&C.c()
u=v.d
u===$&&C.c()
t=u[v.e]
v=D.o.F(w,2)===0?-1:1
s=v*(t.gew(0)/2-14)
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
n.hQ(26,0.12,new A.r(s+26*w*v,106-26*u,r-26*p*o),q)
d.ef("You are looking from the camera in the corner. Drag to look round, or tap a camera for another corner.",!0)
A.fU(700,70,0.25,"tri")
return}if(a0>=2e4&&a0<23e3){w=d.d
w===$&&C.c()
v=w.d
v===$&&C.c()
m=v[w.e].BR(a0-2e4)
if(m!=null)d.bTa(m)
return}if(a0===19502){w=d.aI
if((w==null?null:w.a==="tower")===!0)d.m(new A.e96(d))
return}if(a0===19500||a0===19501){l=d.aI
if(l!=null)if(l.c)d.Yr(l)
else d.ef("This one works: the house has power.",!0)
return}if(a0>=900&&a0<920){d.cqe(a0-900)
return}if(a0>=100&&a0<200){w=d.d
w===$&&C.c()
v=w.d
v===$&&C.c()
k=v[w.e].BR(a0-100)
w=d.d
v=w.d
v===$&&C.c()
u=!1
if(v[w.e].c==="outside")if(d.r!=="furniture")if(k!=null){w=k.b
w=w==="hospital"||w==="shop"}else w=u
else w=u
else w=u
if(w){d.A0(k.b)
return}if(d.r!=="furniture")return
d.m(new A.e97(d,a0))
w=d.d
v=w.d
v===$&&C.c()
m=v[w.e].BR(d.Q)
if(m!=null)d.iD(B.hw.h(0,m.b).a+": move it with the arrows.")
return}if(a0===300||a0===301||a0===302){if(d.r!=="walls")return
d.m(new A.e98(d,a0))
d.iD("Wall picked. Choose a paint colour.")
return}if(a0>=600&&a0<620){j=a0-600
w=d.d
w===$&&C.c()
v=w.d
v===$&&C.c()
if(j>=v[w.e].w.length)return
if(d.r==="doors"){d.m(new A.e99(d,j))
w=d.d
v=w.d
v===$&&C.c()
A.fU(v[w.e].at.t(0,j)?700:450,70,0.25,"tri")
return}d.bN_(j)
return}w=a0===700
v=!w
i=!0
if(v)if(a0!==701){if(a0!==702)if(a0!==703)if(!(a0>=800&&a0<820))u=a0>=720&&a0<728
else u=i
else u=i
else u=i
i=u}if(d.w&&i){h=d.aXe(a0)
A.fU(h?1400:500,160,0.25,"tri")
w=h?"The tester glows and beeps: LIVE, 120 volts. Never touch a live wire. Switch the breaker off first.":"The tester stays dark: no power here. It still needs wiring."
d.ef(w,!h)
return}if(!v||a0===701){if(d.aXe(a0))d.az0(w?0:1)
else d.aTr()
return}if(a0>=800&&a0<820){j=a0-800
w=d.d
w===$&&C.c()
v=w.d
v===$&&C.c()
w=v[w.e].id
if(j>=w.length)return
g=w[j]
if(!g.gwB())d.ak_(j)
else if(g.a==="switch")d.b8k()
else d.az0(2+j)
return}if(a0===702||a0===703){w=d.d
w===$&&C.c()
v=w.d
v===$&&C.c()
if(v[w.e].gMb()){w=d.d
v=w.d
v===$&&C.c()
w=!v[w.e].ga5X()}else w=!0
if(w)d.aTr()
else d.b8k()
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
if(!w[u].p2){d.m(new A.e9a(d))
w=d.d
v=w.d
v===$&&C.c()
d.iD("The TV is on and playing "+E.kj[v[w.e].p3].a+".")}else{e=A.aP7(f)
w=d.c
w.toString
I.h61(w,0,e.a,!0,D.y1,e.b)}return}if(a0>=720&&a0<728){w=d.d
w===$&&C.c()
v=w.d
v===$&&C.c()
u=a0-720
f=v[w.e].fx.h(0,u)
if(f==null)return
e=A.aP7(f)
if(e.d>0||e.e){w=d.c
w.toString
I.h61(w,0,e.a,!0,D.y1,e.b)}else d.az0(u)
return}if(a0===710||a0===711||a0===712||a0===713){w=d.d
w===$&&C.c()
v=w.d
v===$&&C.c()
if(!v[w.e].gjO())if(d.d.a.length!==0)d.Ek()
else d.a06()
else{w=d.f
w===$&&C.c()
j=w.b.h(0,a0)
if(j!=null)d.iD(j.a+": "+j.b)}}},
bN_(d){var w,v,u,t=this.d
t===$&&C.c()
w=t.d
w===$&&C.c()
v=w[t.e].w[d].d
u=v<w.length?w[v].b:"the next room"
t=this.c
t.toString
return C.bU(E.lw,null,new A.e7D(this,u,d,v),t,!0,!0,!1,D.k_,!1,!1,x.H)},
bP0(){var w,v,u=this
u.m(new A.e7M(u))
if(!u.aL){w=u.d
w===$&&C.c()
v=w.d
v===$&&C.c()
w=v[w.e].c==="outside"}else w=!1
if(w)u.a2w()
w=u.d
w===$&&C.c()
v=w.d
v===$&&C.c()
if(v[w.e].c!=="outside")u.xV()},
bP2(){this.m(new A.e7N(this))
this.ef("Phone view: the city fills your phone standing up. Pick a drone film and start filming.",!0)},
bPm(){var w=this
if(w.p4)w.a2z()
w.m(new A.e7O(w))},
cjC(d){var w,v,u,t,s,r,q,p=this,o=null,n=p.c
n.toString
w=C.aI(n,o,x.w).w
n=new A.e9_(p)
v=x.p
u=C.a([C.bT(0,d,0,0,0)],v)
t=w.r.b
if(p.fw)u.push(C.ao(o,C.aB(D.iy,B.f4_,D.y,!1,o,new A.e92(p),o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,!1,D.a5),o,o,0,o,t,o))
else{s=n.$2(D.cx,p.gbPl())
r=p.p4?D.H1:D.C7
r=n.$2(r,new A.e93(p))
q=p.h4?B.anz:N.C9
u.push(C.ao(o,C.B(C.a([s,r,n.$2(q,new A.e94(p)),n.$2(D.ut,new A.e95(p))],v),D.m,o,D.e,D.j,0,o,o),o,o,10,o,t+8,o))}return C.c6(o,D.w,new C.an(D.a_,o,D.aa,D.t,u,o),o,!1,!1,o,o)},
bHp(d){var w,v,u,t,s,r,q=this,p=null,o=q.c
o.toString
w=C.aI(o,p,x.w).w
o=new A.e7d(q)
if(q.es){v=w.a
u=v.b
v=v.a
t=q.ab
s=w.bd0(D.af,new C.au(u,v),D.af)
return C.c6(p,D.w,C.at(new C.y3(t,C.rq(new C.a7(u,v,new C.an(D.a_,p,D.aa,D.t,C.a([C.bT(0,d,0,0,0),C.ao(p,C.aB(D.iy,B.f45,D.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,o,p,p,p,p,p,p,!1,D.a5),p,p,0,p,0,p)],x.p),p),p),s),p),p,p,p),p,!1,!1,p,p)}r=q.f0?w.r.b:0
return C.c6(p,D.w,new C.an(D.a_,p,D.aa,D.t,C.a([C.bT(0,d,0,0,0),C.ao(p,C.aB(D.iy,B.f46,D.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,o,p,p,p,p,p,p,!1,D.a5),p,p,0,p,r,p)],x.p),p),p,!1,!1,p,p)},
bRo(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=m.c
k.toString
w=C.aI(k,l,x.w).w
k=w.a
v=k.b
k=k.a
u=new A.e7Y(m)
t=m.ab
s=w.bd0(D.af,new C.au(v,k),D.af)
r=x.p
q=C.a([C.bT(0,d,0,0,0)],r)
if(m.fw)q.push(C.ao(l,C.aB(D.iy,B.f3Z,D.y,!1,l,new A.e80(m),l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,!1,D.a5),l,l,0,l,0,l))
else{p=u.$2(Af.a1n,new A.e81(m))
o=u.$2(D.a1N,new A.e82(m))
n=m.h4?B.anz:N.C9
r=C.a([p,o,u.$2(n,new A.e83(m)),u.$2(D.ut,new A.e84(m))],r)
p=m.d
p===$&&C.c()
o=p.d
o===$&&C.c()
if(o[p.e].c==="outside"){p=m.p4?D.H1:D.C7
r.push(u.$2(p,new A.e85(m)))}if(m.gak0())r.push(C.aB(l,C.p(l,B.bUX,D.f,l,l,new C.o(D.cV,l,C.J(D.c,D.r,1),l,l,l,D.a6),l,40,l,D.ix,l,l,l,40),D.y,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,m.gaQi(),l,l,l,l,l,l,!1,D.a5))
q.push(C.ao(l,C.B(r,D.m,l,D.e,D.j,0,l,l),l,l,10,l,10,l))}return C.c6(l,D.w,C.at(new C.y3(t,C.rq(new C.a7(v,k,new C.an(D.a_,l,D.aa,D.t,q,l),l),s),l),l,l,l),l,!1,!1,l,l)},
cAz(d){var w,v,u,t=B.CI[d.b]
if(d.c==="power")w=t.c
else{v=t.d
w=v>=0?v:t.c}v=this.d
v===$&&C.c()
v=v.d
v===$&&C.c()
u=w<v.length?v[w].b:"the house"
v=this.c
v.toString
return C.bU(D.au,null,new A.ea2(this,t,new A.ea1(),d,u,w),v,!0,!0,!0,K.a7V,!1,!1,x.H)},
c28(){var w,v,u=this,t=u.d
t===$&&C.c()
w=t.d
w===$&&C.c()
v=w[t.e]
if(v.c==="outside")return
u.m(new A.e8n(u))
t=u.e
t===$&&C.c()
t.e=20
t.f=300
t.w=-0.95
t.x=1.35
t.r6(!0)
t=u.e
w=v.gho(0)
t.hQ(Math.max(v.gew(0),v.gho(0))*0.75,-0.5,new A.r(0,118,w*0.5),-0.05)
u.ef("Looking up at the ceiling from the floor. Drag to look round.",!0)},
gpj(){var w,v,u=this.d
u===$&&C.c()
u=u.d
u===$&&C.c()
w=new C.Z(u,new A.e6c(),C.T(u).k("Z<1>"))
if(!w.gaf(0).C())return null
v=w.gI(0)
u=v.dx
return u==null?v.dx=A.hAI(v):u},
aRz(d){var w,v,u=this
if(d==null)return
w=d.c
if(w>0){v=u.ghI()
if(v!=null)v.r+=w}w=d.a
A.fU(w==="pickup"?700:940,120,0.25,"tri")
u.ef(d.b,w!=="expired")
u.m(u.giU())},
gKs(){var w,v,u,t=this.d
t===$&&C.c()
t=t.d
t===$&&C.c()
w=new C.Z(t,new A.eau(),C.T(t).k("Z<1>"))
if(!w.gaf(0).C())return null
v=w.gI(0)
t=v.dy
if(t==null){t=C.a([],x.bz)
u=new C.e9()
u.d3(11)
t=new A.cz_(v,u,t)
t.bzu(v,11)
v.dy=t}return t},
bFw(){var w,v,u=this,t=u.ghI()
if(t==null)return
w=u.c5
if(w.w)u.ef("You already have your Uber licence.",!0)
else{v=t.r
if(v<40)u.ef("The licence costs 40 points. You have "+v+". Earn more with jobs and deliveries.",!1)
else{t.r=v-40
w.w=!0
A.fU(880,140,0.25,"tri")
u.ef("You passed! Here is your Uber licence. Drive a car to an Uber station and the people waiting will get in.",!0)}}u.m(new A.e6D())
w=u.aI
if(w!=null)w.B(u.ghI())},
c15(){var w,v,u,t,s=this,r=null,q=s.ghI(),p=s.c5.w,o=D.w.j(0.55),n=C.m(28),m=C.J(D.aZ,D.r,1),l=x.p,k=C.B(C.a([B.fyO,D.as,B.bEB,C.aB(r,D.rx,D.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new A.e8i(s),r,r,r,r,r,r,!1,D.a5)],l),D.m,r,D.e,D.j,0,r,r),j=C.d(p?"You are a licensed Uber driver. Drive a car to an Uber station (the yellow and black shelter): the people waiting get in, and you take them to their house. The fare is paid when you get there.":"With the Uber licence you can take the people waiting at the Uber stations home and be paid for every ride. The car needs gas, so watch the gas bar.",r,r,r,r,r,r,B.ff5,r,r,r),i=q==null,h=i?r:q.r
h=C.d("You have "+(h==null?0:h)+" \u2b50",r,r,r,r,r,r,B.fmX,r,r,r)
w=p?new A.e8j(s):s.gbFv()
if(p)v=D.be
else{v=i?r:q.r
v=(v==null?0:v)>=40?D.bG:D.bz}u=C.m(16)
t=p?"\u2713 Licensed":"Get the licence \xb7 40 \u2b50"
if(!p){i=i?r:q.r
i=(i==null?0:i)>=40}else i=!0
return C.p(D.A,C.p(r,C.x(C.a([k,D.W,j,D.W,h,D.W,C.aB(r,C.p(D.A,C.d(t,r,r,r,r,r,r,C.l(r,r,i?D.w:D.bY,r,r,r,r,r,r,r,r,16,r,r,D.u,r,r,!0,r,r,r,r,r,r,r,r),r,r,r),D.f,r,r,new C.o(v,r,r,u,r,r,D.n),r,50,r,r,r,r,r,r),D.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,w,r,r,r,r,r,r,!1,D.a5)],l),D.aj,r,D.e,D.Q,0,D.p),D.f,r,r,new C.o(r,r,m,n,r,B.z9,D.n),r,r,r,D.bF,D.bR,r,r,330),D.f,o,r,r,r,r,r,r,r,r,r,r)},
cCW(d){var w,v,u,t=this,s=t.gKs()
if(s!=null){w=s.c
w===$&&C.c()
w=w.length===0}else w=!0
if(w)return
v=s.cMV(d.f,d.r,t.CW.gil()/1000)
if(v>0){w=t.ghI()
if(w!=null)w.r+=v
A.fU(940,140,0.25,"tri")
t.ef("\ud83d\ude96 You dropped the passenger at the house. Fare: +"+v+" points. Thank you!",!0)
t.m(t.giU())
return}if(s.f==null&&s.aqb(d.f,d.r)!=null&&D.d.b5(s.e,new A.eav(s,d))){w=t.c5
if(!w.w){if(Date.now()-t.k1>2e4){t.k1=Date.now()
t.ef("People are waiting for a ride, but you need an Uber licence first. Get it at the licence office.",!1)}return}if(w.b<=0)return
u=s.cV0(d.f,d.r)
if(u!=null){A.fU(700,100,0.25,"tri")
t.ef("\ud83d\ude96 "+u.b+" got in. Take them to their house (follow the yellow line): "+u.f+" points.",!0)
t.m(t.giU())}}},
cCV(){var w,v,u,t,s,r,q,p=this,o=p.gKs()
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
return}p.Sh(D.d.gI(v))
p.ef("You are at the licence office. Walk in through the door and onto the blue mat to get your Uber licence.",!0)
return}v=o.c
v===$&&C.c()
if(v.length===0){p.ef("There is no Uber station in this town yet.",!1)
return}q=p.aC
v=C.C(v,x.eB)
D.d.aW(v,new A.eat(q))
p.Sh(D.d.gI(v))
p.ef("You are at an Uber station. Get in the car parked next to it and drive up to the people waiting. They get in by themselves.",!0)},
aOW(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=" points for the ",i=k.ghI()
if(i==null)return
w=d.a
v=w==="bread"
if(v||w==="medicine"){u=i.aDA(v?"food":"medicine")
t=!D.a.a0(u,"You need")}else{v=d.r
t=!1
if(v>0){w=w==="tank"
s=w?A.h3z(k.c5.b):d.e
r=k.c5
q=r.b
if(q>=0.99)u="The tank is already full."
else{p=i.r
o=p<s
if(o)u="You need "+s+" points for that. Earn more with jobs and deliveries."
else{i.r=p-s
r.b=D.k.E(q+v,0,1)
r.aU()
v=""+s
u=w?"You filled the tank for "+v+" points.":"You put gas in the car. -"+v+" points."}t=!o}}else if(d.x){w=k.c5
if(!w.f)u="You feel fine: you do not need pills."
else{v=i.r
r=d.e
q=v<r
if(q)u="You need "+r+j+d.c.toLowerCase()+"."
else{i.r=v-r
w.f=!1
w.aU()
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
v.aU()}if(q){w=k.c5
w.e=D.k.E(w.e+r,0,1)
w.aU()}w=k.c5
w=w.d>0||w.c>0?"Still too tired: eat more.":"You feel stronger."
u="You had the "+d.c.toLowerCase()+". "+w}t=!l}}}A.fU(t?880:300,90,0.25,"tri")
k.ef(u,t)
w=k.aI
if(w!=null)w.B(k.ghI())
k.m(k.giU())},
cuZ(){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.ghI(),i=l.aI
i=i==null?k:i.b.b==="gasstation"
w=i===!0
i=l.c
i.toString
v=C.aI(i,k,x.w).w.a
i=v.a
u=i>v.b*1.15
t=new A.e9G(u,new A.e9H(l,j,u))
s=C.d(w?"\u26fd":"\ud83d\uded2",k,k,k,k,k,k,D.wS,k,k,k)
r=C.d(w?"NGMY Gas shop":"NGMY Mart",k,k,k,k,k,k,D.ft,k,k,k)
q=j==null?k:j.r
p=x.p
q=C.a([s,D.as,C.E(C.x(C.a([r,C.d("You have "+(q==null?0:q)+" \u2b50",k,k,k,k,k,k,B.fhs,k,k,k)],p),D.E,k,D.e,D.j,0,D.p),1)],p)
if(u)q.push(new C.a7(190,k,new A.Uo(l.c5,w,14,k),k))
q.push(D.bc)
q.push(C.aB(k,B.bRG,D.y,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,new A.e9F(l),k,k,k,k,k,k,!1,D.a5))
o=C.B(q,D.m,k,D.e,D.j,0,k,k)
n=t.$2("FOOD AND DRINKS (energy)",B.d7Q)
s=w?"GAS":"HEALTH AND THE TOWN"
m=t.$2(s,w?B.dkd:B.dgZ)
t=D.w.j(0.55)
i=u?Math.min(i-24,820):340
s=C.m(28)
r=C.J(D.aZ,D.r,1)
q=C.a([o,D.W],p)
if(!u)D.d.v(q,C.a([new A.Uo(l.c5,w,14,k),D.O],p))
if(u)q.push(C.B(C.a([C.E(n,5),D.eu,C.E(m,3)],p),D.E,k,D.e,D.j,0,k,k))
else D.d.v(q,C.a([n,m],p))
return C.p(D.A,C.eS(D.A,C.p(k,C.x(q,D.aj,k,D.e,D.Q,0,D.p),D.f,k,k,new C.o(k,k,r,s,k,B.z9,D.n),k,k,k,D.bf,D.bR,k,k,i),D.f,D.e1),D.f,t,k,k,k,k,k,k,k,k,k,k)},
cge(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=this,a1=null,a2=a0.gpj()
a2.toString
w=a0.aC
v=w==null
u=v?a1:w.f
if(u==null)u=0
t=v?a1:w.r
if(t==null)t=300
s=a2.x
r=new A.e8I()
q=new A.e8E(a0,u,t,r,new A.e8H(),s,a2)
p=a2.cXg()
o=["\ud83e\udd47","\ud83e\udd48","\ud83e\udd49","4","5","6"]
v=D.w.j(0.55)
n=C.m(28)
m=C.J(D.aZ,D.r,1)
l=x.p
k=C.a([C.B(C.a([B.fG8,D.as,C.E(C.x(C.a([B.fHW,C.d("Race "+a2.as+": first to 8 wins +40",a1,a1,a1,a1,a1,a1,H.vb,a1,a1,a1)],l),D.E,a1,D.e,D.j,0,D.p),1),C.aB(a1,D.rx,D.y,!1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,new A.e8C(a0),a1,a1,a1,a1,a1,a1,!1,D.a5)],l),D.m,a1,D.e,D.j,0,a1,a1),D.ad],l)
if(s!=null){j=D.bG.j(0.14)
i=C.m(16)
h=C.J(D.bG,D.r,1)
g=s.b
f=C.d(A.L3(g).b,a1,a1,a1,a1,a1,a1,D.JU,a1,a1,a1)
k.push(C.p(a1,C.B(C.a([f,D.as,C.E(C.d(s.r?"You have the "+A.L3(g).c.toLowerCase()+". Take it to the house (follow the yellow line).":"Go to the "+r.$1(s.c).toLowerCase()+" to pick up the "+A.L3(g).c.toLowerCase()+".",a1,a1,a1,a1,a1,a1,D.oD,a1,a1,a1),1),C.aB(a1,B.fwo,D.y,!1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,new A.e8D(a0,a2),a1,a1,a1,a1,a1,a1,!1,D.a5)],l),D.m,a1,D.e,D.j,0,a1,a1),D.f,a1,a1,new C.o(j,a1,h,i,a1,a1,D.n),a1,a1,a1,D.d3,D.bf,a1,a1,a1))}else{j=C.a([B.fKJ,D.O],l)
for(a2=a2.qZ(0,u,t),a2=C.d1(a2,0,C.dB(6,"count",x.S),C.T(a2).c),i=a2.$ti,a2=new C.bS(a2,a2.gL(0),i.k("bS<ak.E>")),i=i.k("ak.E");a2.C();){h=a2.d
j.push(q.$1(h==null?i.a(h):h))}D.d.v(k,j)}k.push(D.am)
k.push(B.fzI)
k.push(D.O)
for(e=0;e<p.length;++e){a2=p[e].a==="You"?D.aQ.j(0.18):D.c.j(0.05)
j=new C.aQ(12,12)
i=p[e]
h=i.a
g=h==="You"
d=new C.ay(g?D.aQ:D.dt,1,D.r,-1)
f=o[e]
g=g?D.u:D.P
k.push(C.p(a1,new C.cc(D.aN,D.e,D.j,D.m,a1,D.p,a1,0,C.a([new C.a7(26,a1,new C.y(f,a1,D.aRK,a1,a1,a1,a1,a1,a1,a1,a1,a1),a1),new C.bA(1,D.bd,new C.y(h,a1,new C.F(!0,D.c,a1,a1,a1,a1,a1,g,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1,a1,a1,a1,a1,a1,a1),a1),new C.y(""+i.b+"/8",a1,L.JW,a1,a1,a1,a1,a1,a1,a1,a1,a1),D.as,new C.y(""+i.c+" pts",a1,B.feW,a1,a1,a1,a1,a1,a1,a1,a1,a1)],l),a1),D.f,a1,a1,new C.o(a2,a1,new C.bK(d,d,d,d),new C.bk(j,j,j,j),a1,a1,D.n),a1,a1,a1,D.eG,D.l3,a1,a1,a1))}return C.p(D.A,C.eS(D.A,C.p(a1,C.x(k,D.aj,a1,D.e,D.Q,0,D.p),D.f,a1,a1,new C.o(a1,a1,m,n,a1,B.z9,D.n),a1,a1,a1,D.bF,D.bR,a1,a1,340),D.f,D.e1),D.f,v,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1)},
bT9(d){var w,v,u=this,t=u.aI
if(t==null||t.a!=="tower"||u.ok!=null)return
w=t.f
if(d===w){u.m(new A.e86(u))
return}u.p2=t
w=new A.eXS(w,d,Date.now())
v=t.at
v===$&&C.c()
w.r=v.f
w.w=v.r
u.ok=w
t.y=u.be=u.b0=0
u.m(new A.e87(u))
w=u.e
w===$&&C.c()
w.hQ(175,0.28,B.fVL,0)
u.ef("Going to level "+d+": walking to the elevator.",!0)
w=u.p1
if(w!=null)w.bR(0)
w=new A.a50(u.gcqY(),W.Bs)
w.h9(0)
u.p1=w},
DM(d){var w=D.k.E(d,0,1)
return w*w*(3-2*w)},
cqZ(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d="tri",a0=e.ok,a1=e.p2
if(a0==null||a1==null||e.c==null){w=e.p1
if(w!=null)w.bR(0)
return}v=Date.now()
u=(v-a0.c)/1000
w=a0.b
t=a0.a
s=w>t
switch(a0.d){case 0:r=a1.at
r===$&&C.c()
if(u<1){q=e.DM(u/1)
p=a0.r
r.f=p*(1-q)
o=a0.w
n=62-o
r.r=o+n*q
r.w=Math.atan2(-p,n)
r.x=!0}else if(u<1.8){r.f=0
r.r=62
r.w=3.141592653589793
r.x=!1}else if(u<2.5){r.r=62-44*e.DM((u-1.8)/0.7)
r.w=3.141592653589793
r.x=!0}else r.x=!1
r.y+=0.3
a1.y=e.DM((u-0.8)/0.8)
if(u>=2.6){a0.d=1
a0.c=v
a0.f=3+D.o.E(Math.abs(w-t)-1,0,99)*1.1
a0.e=t
m=A.fW0("cabin",a1.b,!1)
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
e.aI=m
w=s?"\u25b2":"\u25bc"
e.p3.sp(0,w+"  "+C.w(t===1?"L":t))
e.m(e.giU())
w=e.e
w===$&&C.c()
w.Nj(54,0.1,B.fVZ,3.141592653589793)
A.fU(520,70,0.25,d)}break
case 1:m=e.aI
if(m==null||m.a!=="cabin")return
l=a0.f
if(u<0.9)r=1-e.DM(u/0.9)
else{r=l-0.9
r=u>r?e.DM((u-r)/0.9):0}m.y=r
k=u>0.9&&u<l-0.9
if(k){j=D.o.E(t+D.k.V((w-t)*e.DM((u-0.9)/(l-1.8))),1,m.gM1())
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
t.Nj(54+p*1.2,0.1+Math.sin(u*6.1)*0.007*i,new A.r(0,52+r*0.5*i,52),3.141592653589793+o*0.5+n*0.01*i)
if(u>l-0.9&&!a0.x){a0.x=!0
m.z=w
e.p3.sp(0,C.w(w===1?"L":w))
A.fU(880,140,0.3,d)
C.bP(D.fK,new A.e9x(),x.H)}if(u>=l){a0.d=2
a0.c=v
h=a1.b.a
t=e.d
t===$&&C.c()
r=t.d
r===$&&C.c()
t=r[t.e].cy.h(0,h)
g=e.gIw().h(0,h*100+w)
a1.f=D.o.E(w,1,a1.gM1())
a1.c=t===w
w=a1.at
w===$&&C.c()
w.f=0
w.r=112
w.w=3.141592653589793
a1.x=!1
a1.CW.a8(0)
a1.B(a1.ch)
e.aj1(a1,g)
a1.B(e.ghI())
w.f=0
w.r=16
w.w=0
w.x=!1
a1.y=1
e.aI=a1
e.m(e.giU())
e.e.Nj(175,0.28,B.fVM,0)}break
default:w=a1.at
w===$&&C.c()
q=e.DM(u/1.6)
w.f=0
w.r=16+96*q
w.w=0
w.x=u<1.6
w.y+=0.3
a1.y=1-e.DM((u-1.3)/0.8)
t=e.e
t===$&&C.c()
t.apx(new A.r(0,40,w.r*0.7+14))
if(u>=2.2){f=a1.c
t=e.p1
if(t!=null)t.bR(0)
e.ok=null
w.x=!1
a1.y=0
e.m(e.giU())
e.e.hQ(170,0.4,B.fVq,0)
A.fU(660,80,0.25,d)
w=""+a1.f
e.ef(f?"Level "+w+". This office has no power: walk onto the red mat at the breaker panel, or tap the red frames.":"Level "+w+" of "+a1.gM1()+".",!0)}}},
bOt(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.aI
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
r=g.gM1()
q=x.p
s=C.B(C.a([B.fOL,D.as,C.E(C.x(C.a([B.fGV,C.d("You are on level "+s+" of "+r,h,h,h,h,h,h,H.vb,h,h,h)],q),D.E,h,D.e,D.j,0,D.p),1),C.aB(h,D.rx,D.y,!1,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,new A.e7K(i),h,h,h,h,h,h,!1,D.a5)],q),D.m,h,D.e,D.j,0,h,h)
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
if(m)l.push(B.fP5)
p.push(C.aB(h,C.p(D.A,C.x(l,D.m,h,D.b8,D.j,0,D.p),D.f,h,h,new C.o(o,h,new C.bK(j,j,j,j),new C.bk(n,n,n,n),h,h,D.n),h,52,h,h,h,h,h,58),D.y,!1,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,new A.e7L(i,r),h,h,h,h,h,h,!1,D.a5))}return C.p(D.A,C.eS(D.A,C.p(h,C.x(C.a([s,D.ad,B.fN0,D.W,C.bW(D.bE,p,D.bq,h,8,8),D.am,B.fyb],q),D.aj,h,D.e,D.Q,0,D.p),D.f,h,h,new C.o(h,h,t,v,h,B.z9,D.n),h,h,h,D.bF,D.bR,h,h,330),D.f,D.e1),D.f,w,h,h,h,h,h,h,h,h,h,h)},
atL(){var w,v,u,t,s,r,q=this,p=q.e
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
aQT(d,e,f,g,h){var w=new A.e7w(h)
return new A.r(w.$4(d.a,e.a,f.a,g.a),w.$4(d.b,e.b,f.b,g.b),w.$4(d.c,e.c,f.c,g.c))},
c2G(d){var w=this.d
w===$&&C.c()
w=w.d
w===$&&C.c()
return A.i3r(D.d.h_(w,new A.e8o()),d)},
cxJ(d){var w,v,u=this
u.B0()
u.S3()
if(u.aL)u.a2A()
u.aI=null
w=u.c2G(d)
if(w.length===0)return
u.m(new A.e9J(u,w))
v=u.e
v===$&&C.c()
v.r=4800
v.e=6
v.f=2600
v.w=-1.2
v.x=1.4
v.r6(!0)
u.adz()
v=u.RG
if(v!=null)v.bR(0)
v=new A.a50(u.gbNJ(),W.Bs)
v.h9(0)
u.RG=v},
adz(){var w,v,u,t,s,r,q,p=this,o=++p.ry,n=p.rx
if(o>=n.length){p.a2z()
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
u=A.fW0(v,o,u.k4.t(0,t))
u.B(p.ghI())
p.aI=u
p.aj1(u,p.gIw().h(0,t))
t=p.aI
t.toString
t.B(p.ghI())
p.m(p.giU())}s=w.r
if(s&&p.aI!=null){p.aI=null
p.m(p.giU())}if(w.w==null&&w.x==null){s=!n||s
r=p.atL()
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
D.d.M(o,n+Math.max(1,new A.r(u.a-v.a,u.b-v.b,u.c-v.c).guR()))}}o=w.e
if(o!=null)p.ef("\ud83d\ude81 "+o,!0)},
bNK(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this
if(!a2.p4||a2.c==null)return
w=a2.rx[a2.ry]
v=(Date.now()-a2.to)/1000
u=w.x
if(u!=null){t=a2.CW.gil()/1000
s=B.a4b[u].a
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
h=a2.atL()
k=A.o0(h.a,k,i)
m=A.o0(h.b,m,i)}if(v>=w.d){a2.adz()
return}}else{u=w.w
if(u!=null){u=B.kk[u]
t=a2.CW.gil()
t=$.aQX().cVf(0,D.d.cu(B.kk,u),t/1000).a
u=t[0]
m=new A.r(u,26,t[1])
l=v*0.6+0.8
k=new A.r(u+Math.sin(l)*190,85,t[1]+Math.cos(l)*190)
if(v<2.5){j=v/2.5
i=j*j*(3-2*j)
g=a2.atL()
k=A.o0(g.a,k,i)
m=A.o0(g.b,m,i)}if(v>=w.d){a2.adz()
return}}else{f=v*w.c
if(a2.x1.length<2||f>=D.d.gak(a2.xr)){a2.adz()
return}u=a2.xr
t=u.length
e=0
for(;;){s=e+2
if(!(s<t&&u[e+1]<=f))break;++e}t=u[e]
n=e+1
d=D.k.E((f-t)/(u[n]-t),0,1)
t=new A.e7I()
u=e-1
k=a2.aQT(t.$2(a2.x1,u),t.$2(a2.x1,e),t.$2(a2.x1,n),t.$2(a2.x1,s),d)
m=a2.aQT(t.$2(a2.x2,u),t.$2(a2.x2,e),t.$2(a2.x2,n),t.$2(a2.x2,s),d)}}a0=m.aF(0,k)
a1=Math.max(8,a0.guR())
u=a2.e
u===$&&C.c()
t=Math.atan2(a0.a,-a0.c)
u.Nj(a1,Math.asin(D.k.E(-a0.b/a1,-1,1)),m,t)},
a2z(){var w=this,v=w.e
v===$&&C.c()
v.r=0
v=w.RG
if(v!=null)v.bR(0)
w.RG=null
if(w.c==null)return
w.m(new A.e9U(w))
w.xV()
w.ef("The drone has landed.",!0)},
bNI(){var w=null,v=new A.e7G(this),u=D.w.j(0.55),t=C.m(28),s=C.J(D.aZ,D.r,1),r=x.p
return C.p(D.A,C.eS(D.A,C.p(w,C.x(C.a([C.B(C.a([B.fMO,D.as,B.bE8,C.aB(w,D.rx,D.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new A.e7F(this),w,w,w,w,w,w,!1,D.a5)],r),D.m,w,D.e,D.j,0,w,w),B.fzN,v.$4("\ud83c\udf06","The whole city","High flights over every street","city"),v.$4("\ud83e\udea7","Billboards and NGMY logos","Close to every ad, and the big logo board","billboards"),v.$4("\ud83c\udfc1","Edge billboards only","A tour round the big boards at the edges of the city","edges"),v.$4("\ud83c\udfe0","Houses","Fly by the houses, then go inside a big one","houses"),v.$4("\ud83c\udfe5","Hospital, shop and school","Fly in and look round inside each","hospital"),v.$4("\ud83d\ude8c","Traffic","Follow the self-driving buses and police cars","traffic"),v.$4("\ud83c\udfac","Everything","A little of all of it","all")],r),D.aj,w,D.e,D.Q,0,D.p),D.f,w,w,new C.o(w,w,s,t,w,B.z9,D.n),w,w,w,D.bF,D.bR,w,w,330),D.f,D.e1),D.f,u,w,w,w,w,w,w,w,w,w,w)},
gIw(){var w=this.d
w===$&&C.c()
w=w.d
w===$&&C.c()
return D.d.h_(w,new A.e8d()).cx},
atX(d){var w,v=C.a([],x.u)
for(w=0;w<4;++w)v.push(d.te(w))
return v},
cy5(d){var w,v,u=C.a([],x.t)
for(w=0;w<4;++w){if(!d.te(w)){v=d.d
v===$&&C.c()
v=w>=v.length}else v=!0
u.push(v?0:new A.e9T(d,w).$0())}return u},
cFa(d,e){var w,v,u,t,s,r=d.d
r===$&&C.c()
if(e>=r.length)return""
w=r[e]
r=w.a
v=d.at.h(0,r)
u=v==null
t=u?null:v.a
s=A.agC(t==null?w.b:t).toLowerCase()
if(u||!A.h_g(w.b,v.a))return"nothing put in yet at "+A.jX(r).b
if(v.b.c<2)return"the "+s+" at "+A.jX(r).b+" is not finished: fasten every wire and close it"
return"the "+s+" at "+A.jX(r).b+" works but is NOT wired safely: "+d.ap4(r).b},
aj1(d,e){var w=e==null
d.d=w?B.azn:this.atX(e)
d.e=w?B.a2F:this.cy5(e)},
gbai(){var w,v,u=this.aI
if(u==null||!u.c)return null
w=u.a
v=u.b.a
return w==="tower"?v*100+u.f:v},
gak0(){var w,v=this.gbai(),u=v==null?null:this.gIw().h(0,v)
if(u!=null)w=u.gbk1()||D.d.d5(this.atX(u),new A.eaI())
else w=!1
return w},
asm(){var w,v,u,t,s,r=this,q=r.aI,p=r.gbai(),o=p==null,n=o?null:r.gIw().h(0,p)
if(q==null||o||n==null)return
if(!D.d.d5(r.atX(n),new A.e7f())){r.ef("Not quite done: the wiring is not right yet. Open the wiring bench again (tap the panel) and check every wire.",!1)
return}w=q.b
r.gIw().W(0,p)
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
r.lc=Date.now()
r.lx=0
q.d=B.dph
q.e=B.a2F
q.B(r.ghI())
r.m(r.giU())
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
Yr(d){return this.bZF(d)},
bZF(d){var w=0,v=C.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k
var $async$Yr=C.e(function(e,f){if(e===1)return C.f(f,v)
for(;;)switch(w){case 0:l=d.b
k=l.a
if(d.a==="tower")k=k*100+d.f
s=t.gIw().c3(0,k,new A.e8a(l,d))
w=3
return C.b(t.ya(C.e_(new A.e8b(s),!1,null,x.H)),$async$Yr)
case 3:if(t.c==null){w=1
break}t.aj1(d,s)
if(t.gak0())t.asm()
else{d.B(t.ghI())
t.m(t.giU())
r=x.s
q=C.a([],r)
if(s.te(0))q.push("outlet 1")
if(s.te(1))q.push("outlet 2")
if(s.te(2))q.push("the ceiling light")
if(s.te(3))q.push("the switch")
p=C.a([],r)
if(!s.te(0))p.push("outlet 1")
if(!s.te(1))p.push("outlet 2")
if(!s.te(2))p.push("the ceiling light")
if(!s.te(3))p.push("the switch")
r=C.a([],r)
for(o=0;o<4;++o)if(!s.te(o))r.push(t.cFa(s,o))
n=x.cc
m=C.C(new C.Z(r,new A.e8c(),n),n.k("K.E"))
r=q.length===0?"Nothing is fixed yet":"Fixed so far: "+D.d.aH(q,", ")
p=D.d.aH(p,", ")
q=m.length===0?"":"Why: "+C.d1(m,0,C.dB(2,"count",x.S),C.T(m).c).aH(0,"; ")+". "
t.ef(r+". Still to do: "+p+". "+q+"Tap the red frames to carry on.",!1)}case 1:return C.h(u,v)}})
return C.i($async$Yr,v)},
ab8(d){return this.bQx(d)},
bQx(d){var w=0,v=C.j(x.H),u,t=this,s,r,q,p,o
var $async$ab8=C.e(function(e,f){if(e===1)return C.f(f,v)
for(;;)switch(w){case 0:o=t.d
o===$&&C.c()
s=o.d
s===$&&C.c()
r=d.a
q=s[o.e].db.c3(0,r,new A.e7Q())
w=3
return C.b(t.ya(C.e_(new A.e7R(q),!1,null,x.H)),$async$ab8)
case 3:if(t.c==null){w=1
break}if(q.c>=2&&A.L4(A.t1("light"),q).a==="ok"){o=t.d
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
t.m(t.giU())
t.ef("The street light is on again. You wired it correctly: black to black, white to white, ground to ground. +"+p+" stars.",!0)}else t.ef("The light is still out: finish the wiring and fit the cover, then it comes on.",!1)
case 1:return C.h(u,v)}})
return C.i($async$ab8,v)},
c78(){var w,v,u=this,t=u.aC
if(t==null)return
w=u.d
w===$&&C.c()
v=w.d
v===$&&C.c()
v[w.e].dz(0,"crate",t.f+Math.sin(t.w)*34,t.r+Math.cos(t.w)*34)
u.al=null
u.m(u.giU())
u.ef("You put the crate down.",!0)},
c4A(){var w,v,u,t,s,r,q,p,o=this,n=o.d
n===$&&C.c()
n=n.d
n===$&&C.c()
w=D.d.h_(n,new A.e8q())
if(o.gaWA())return
n=x._
v=C.a([],n)
for(u=w.x,t=u.length,s=w.k4,r=0;r<u.length;u.length===t||(0,C.M)(u),++r){q=u[r]
p=q.b
if(p==="house2"||p==="bighouse"){p=q.a
p=!s.t(0,p)&&p!==o.jc}else p=!1
if(p)v.push(q)}if(s.a<2&&v.length!==0&&o.bB==null&&o.bC==null){q=v[o.iM.au(v.length)]
v=q.a
s.M(0,v)
o.jc=v
o.b45(new A.Qa(q,q.b==="bighouse"?"the big house":"the house","power","",0))}n=C.a([],n)
for(v=u.length,t=w.k3,r=0;r<u.length;u.length===v||(0,C.M)(u),++r){q=u[r]
s=q.b
if((s==="pole"||s==="lamppost")&&!t.t(0,q.a))n.push(q)}if(t.a<3&&n.length!==0&&D.o.F(o.bX,90)===0){t.M(0,n[D.o.F(o.bX*5,n.length)].a)
o.ef("\u26a1 A street light went out in the town. Find it (it is dark, with a red sign) and fix it.",!1)}n=o.d
v=n.d
v===$&&C.c()
if(v[n.e].c==="outside"&&o.aI==null)o.m(o.giU())},
awM(d){return this.c4B(d)},
c4B(d){var w=0,v=C.j(x.H),u=this
var $async$awM=C.e(function(e,f){if(e===1)return C.f(f,v)
for(;;)switch(w){case 0:u.m(new A.e8r(u,d))
return C.h(null,v)}})
return C.i($async$awM,v)},
aWL(){var w,v=this.cJ,u=v==null?null:v.a
if(u==null)return null
w=A.vw(new A.r(0,0,B.hw.h(0,u.b).d/2+60),u.e*3.141592653589793/2)
return new C.z(u.c+w.a,u.d+w.c)},
avU(){var w=this.aC,v=this.aWL()
if(w==null||v==null)return null
return D.k.V(Math.sqrt(Math.pow(v.a-w.f,2)+Math.pow(v.b-w.r,2))/10)},
crg(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.aC,g=j.gKs()
g=g==null?i:g.ga6H(0)
if(g==null){g=j.gpj()
g=g==null?i:g.ga6H(0)
w=g}else w=g
if(w==null)w=j.aWL()
g=!1
if(j.cJ==null){v=j.gpj()
if((v==null?i:v.x)==null){g=j.gKs()
g=(g==null?i:g.f)==null}}v=!0
if(!g)if(h!=null)if(w!=null){g=j.d
g===$&&C.c()
v=g.d
v===$&&C.c()
g=v[g.e].c!=="outside"||j.aI!=null}else g=v
else g=v
else g=v
if(g)return B.azg
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
u.aDs(new A.r(h.f+o*k,1.4,h.r+n*k),B.hb3,D.bG,p)
k+=26;++l}}u.f=3
u.d=0.4
u.dM(new A.r(v,0,s),new A.r(v,170,s),4,D.bG,8)
u.dM(new A.r(v,0,s),new A.r(v,1.6,s),24,D.bG,14)
return g},
bG8(){var w,v,u,t,s,r,q,p=this,o=null,n=p.y1,m=new A.e6K(),l=new A.e6J(),k=x.p
if(n!=null){w=p.avU()
v=C.a([C.B(C.a([C.h7(D.aD,o,C.d(n.gbe6(),o,o,o,o,o,o,D.pw,o,o,o),o,24),D.bc,C.E(C.x(C.a([C.d(n.gaDC(),o,o,o,o,o,o,D.de,o,o,o),B.fIi],k),D.E,o,D.e,D.j,0,D.p),1),C.aB(o,D.rx,D.y,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,new A.e6L(p),o,o,o,o,o,o,!1,D.a5)],k),D.m,o,D.e,D.j,0,o,o),D.ad],k)
for(u=n.gaGP(0),t=0;t<3;++t)v.push(m.$1(u[t]))
u=D.bG.j(0.12)
s=C.m(14)
r=C.J(D.bG.j(0.5),D.r,1)
v.push(C.p(o,C.B(C.a([B.bYo,D.as,C.E(C.d(w==null?"A yellow line on the ground will show you the way.":"Follow the yellow line on the ground. It is about "+C.w(w)+" metres away.",o,o,o,o,o,o,D.oD,o,o,o),1)],k),D.m,o,D.e,D.j,0,o,o),D.f,o,o,new C.o(u,o,r,s,o,o,D.n),o,o,o,D.l0,D.bT,o,o,o))
v.push(l.$5$primary(A4.GU,"Show me the way",D.bG,new A.e6M(p),!0))
v.push(l.$4(B.bKW,"Take me there",D.bj,new A.e6N(p,n)))
v.push(l.$4(D.jS,"Later",D.aD,new A.e6O(p,n)))
q=C.x(v,D.aj,o,D.e,D.Q,0,D.p)}else q=C.x(C.a([B.eZY,D.ad,m.$1("Hello, this is the City office. A few calls were missed."),m.$1("Please answer the phone, so you can keep working."),m.$1("Every call is a person who needs help. Thank you for answering!"),l.$5$primary(D.ht,"OK, I will answer",D.bj,new A.e6P(p),!0)],k),D.aj,o,D.e,D.Q,0,D.p)
k=D.w.j(0.55)
v=C.m(28)
return C.p(D.A,C.eS(D.A,C.p(o,q,D.f,o,o,new C.o(o,o,C.J(D.aZ,D.r,1),v,B.doW,B.z9,D.n),o,o,o,D.bF,D.bR,o,o,330),D.f,D.e1),D.f,k,o,o,o,o,o,o,o,o,o,o)},
ctz(){var w,v,u,t,s=this,r=s.d
r===$&&C.c()
w=r.d
w===$&&C.c()
v=w[r.e].BR(s.Q)
if(v==null)return
u=B.dwM.h(0,v.b)
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
w=s.ghI()
if(w!=null)w.r+=u
s.m(s.giU())
s.ef("Sold for "+C.w(u)+" points.",!0)},
A0(d){return this.bHd(d)},
bHd(d){var w=0,v=C.j(x.H),u,t=this,s
var $async$A0=C.e(function(e,f){if(e===1)return C.f(f,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=3
return C.b(C.bU(D.K,null,new A.e7b(d),s,!0,!0,!0,null,!1,!1,x.H),$async$A0)
case 3:if(t.c==null){w=1
break}t.m(new A.e7c(t))
case 1:return C.h(u,v)}})
return C.i($async$A0,v)},
cqe(d){var w,v,u=this.ghI()
if(u!=null){w=u.c
w===$&&C.c()
w=d>=w.length}else w=!0
if(w)return C.f8(null,x.H)
w=u.c
w===$&&C.c()
v=w[d]
w=this.c
w.toString
return C.bU(E.lw,null,new A.e9w(this,v,u),w,!0,!0,!0,D.k_,!1,!1,x.H)},
az0(d){var w=this.c
w.toString
return C.bU(E.lw,null,new A.e9g(this,d),w,!0,!0,!1,D.k_,!1,!1,x.H)},
cCP(){var w=this.c
w.toString
return C.bU(E.lw,null,new A.eas(this),w,!0,!0,!0,D.k_,!1,!1,x.H)},
cCd(){var w=this.c
w.toString
return C.bU(D.K,null,new A.eae(this),w,!0,!0,!0,null,!1,!1,x.H)},
b6X(d,e){var w,v,u,t=this,s=t.dx
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
if(e){s=new A.aVO(!0,w,d,C.a([],s))
s.aZF()}else{s=new A.aVO(!1,w,d,C.a([],s))
s.aZF()}t.cx=s
t.cy=t.CW.gil()/1000
t.x=!0
t.r="look"
t.w=!1
s=D.d.gI(t.cx.d)
t.bi.a8(0)
t.b8=!1
t.m(new A.e9Q(t,s.a))
t.xV()
t.dx=C.dk(D.jv,new A.e9R(t))
t.m(new A.e9S())},
cy1(d){return this.b6X(d,!1)},
bN0(d,e){var w,v=d.w[e],u=v.b
A:{if("left"===u){w=new A.r(-d.gew(0)/2,40,v.c+d.gho(0)/2-40)
break A}if("right"===u){w=new A.r(d.gew(0)/2,40,v.c+d.gho(0)/2-40)
break A}w=new A.r(v.c,40,0)
break A}return w},
cCe(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=i.cx
if(h==null||i.c==null)return
w=i.CW.gil()/1000-i.cy
v=h.e
v===$&&C.c()
if(w>=v){i.S3()
i.iD("The tour is over. Press Tour to walk the house again.")
return}if(i.b8)return
u=h.bbh(w)
v=i.d
v===$&&C.c()
t=v.e
if(u.a!==t){i.ajp(u)
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
if(t&&v<s.w.length){o=1.25*D.dT.av(0,D.k.E(u.ay,0,1))
q=s.ax
n=q.h(0,v)
if((n==null?0:n)!==o){q.n(0,v,o)
p=!0}}q=u.at
if(D.a.a0(q,"ad")&&i.bi.M(0,q)){s.p3=D.o.F(s.p3+1,8)
A.fU(1000,50,0.25,"tri")
p=!0}if(p)i.m(i.giU())
m=Math.max(s.gew(0)*0.95,s.gho(0)*1.15)+20
t=t&&v<s.w.length
q=u.b
if(t){l=i.bN0(s,v)
k=D.dw.av(0,D.k.E(u.ay,0,1))
j=s.w[v].b
v=i.e
v===$&&C.c()
t=j==="back"?14:0
if(j==="left")n=0.55*k
else n=j==="right"?-0.55*k:-0.03
v.hQ(m+(70-m)*k,0.2-0.07*k,new A.r(l.a*0.9+q*0.1,36,l.c+t),n)}else{v=i.e
v===$&&C.c()
v.hQ(m,0.24,new A.r(q*0.7,30,u.c*0.6+8),-0.05-q/(s.gew(0)/2)*0.2)}if(u.as!==i.dy)i.m(new A.eaf(i,u))},
ajp(d){return this.cCc(d)},
cCc(d){var w=0,v=C.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j
var $async$ajp=C.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:l={}
r.b8=!0
l.a=null
t=4
p=$.aW.al$.x.h(0,r.Z)
p=p==null?null:p.gbd()
q=x.cU.a(p)
p=q
p=p==null?null:p.m4(0.6).da(0,D.iS)
j=l
w=7
return C.b(x.fa.b(p)?p:C.dU(p,x.eT),$async$ajp)
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
r.axl(d.a,!0)
p=r.d
n=p.d
n===$&&C.c()
m=n[p.e]
p=d.ch
if(p>=0&&p<m.w.length)m.ax.n(0,p,1.25)
r.m(new A.ea4(l,r))
l=r.e
l===$&&C.c()
l.d=new A.r(d.b,36,d.c+4)
l.c=70
l.a=-0.03
l.b=0.15
r.b8=!1
case 1:return C.h(u,v)
case 2:return C.f(s.at(-1),v)}})
return C.i($async$ajp,v)},
S3(){var w,v,u,t=this,s=t.dx
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
u.ax.a8(0)}t.aA=null
t.b8=!1
t.m(new A.e9X(t))
t.xV()},
ckX(){var w,v,u,t,s,r,q,p,o,n=this,m=n.cx
if(m!=null)return m.bbh(n.CW.gil()/1000-n.cy)
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
return A.atq(n.c5.d>0,0,-1,"",!1,o,"",-1,q,!1,!1,!1,v.a,p,r,u,s,t)}return null},
b7G(){var w,v=this,u=v.c5,t=u.r
if(t<=0)return
u.r=0
w=v.ghI()
if(w!=null)w.r=Math.max(0,w.r-t)
if(v.c!=null)v.m(new A.e9Y())},
a2w(){var w,v=this,u=v.d
u===$&&C.c()
w=u.d
w===$&&C.c()
u=w[u.e]
if(u.c!=="outside")return
w=v.aC;(w==null?v.aC=A.hie(u,0,24):w).Mv(0)
v.aL=!0
v.bL=Date.now()
u=v.b1
if(u!=null)u.bR(0)
u=new A.a50(v.gcEU(),D.Zt)
u.h9(0)
v.b1=u
v.m(new A.e9P())
v.iD("Slide the round stick to walk. Walk up to a door to go in: the house, the hospital or the shop. Double tap a spot to go there.")},
a2A(){var w,v=this
v.aL=!1
v.be=v.b0=0
v.bh=!1
w=v.b1
if(w!=null)w.bR(0)
v.b1=null
w=v.aC
if(w!=null)w.x=!1
v.m(new A.e9W())},
cEV(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=g.aI,e=f==null
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
w.Mv(0)
w.z=g.bh&&g.bG==null
if(g.bG==null)w.aJ5()
w.cNC(s)
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
if(n){if((u!==0||v!==0||w.at!=null)&&t-g.c7>6000){g.c7=t
g.ef(p?"You are too tired to walk. Rest a little, or buy some food in a shop.":"The car has no gas. Get out, walk to a gas station and buy gas.",!1)}w.at=null
m=!1}else if(u!==0||v!==0){w.at=null
m=w.aLl(0,r*v+q*u,-q*v+r*u,s)}else m=w.FC(0,s)
v=!m
if(v)w.x=!1
if(g.bZ===0){u=g.d
u===$&&C.c()
p=u.d
p===$&&C.c()
l=p[u.e].c==="outside"}else l=!1
if(l){u=m&&g.bG==null
k=o.bjg(s,m&&g.bG!=null,u)}else k=null
if(k!=null)g.ef(k,!1)
g.b7G()
if(!v||w.Q>0){v=g.e
u=w.f
p=w.r
v.as=null
v.d=new A.r(u,30,p)
v.aU()}if(!e){f.cx=g.al
j=f.ft(0,g.ghI())
g.al=f.cx
if(j!=null){g.iD(j)
g.m(g.giU())}if(f.cy){f.cy=!1
g.Yr(f)}if(f.dx){f.dx=!1
if(!g.id)g.m(new A.eaD(g))}if(f.db){f.db=!1
if(!g.k2)g.m(new A.eaE(g))}if(f.w){f.w=!1
if(!g.k3)g.m(new A.eaF(g))}e=f.x
if(e!==g.k4){g.k4=e
v=g.e
if(e)v.hQ(330,0.35,B.fYo,1.35)
else v.hQ(170,0.4,new A.r(0,30,110),0)}e=f.at
e===$&&C.c()
v=!1
if(e.r>308)if(Math.abs(e.f)<36)e=!(f.a==="tower"&&f.f>1)
else e=v
else e=v
if(e)g.aX1()
if(!g.k4&&g.ok==null)g.c0r()
return}e=!1
if(g.bG==null){e=g.gpj()
e=(e==null?null:e.x)!=null}if(e){e=g.gpj()
e.toString
g.aRz(e.bjP(w.f,w.r,g.CW.gil()/1000))}e=!1
if(g.bG==null){e=g.d
e===$&&C.c()
v=e.d
v===$&&C.c()
e=v[e.e].c==="outside"&&g.ok==null&&g.bZ===0}if(e){e=$.aQX()
e.FC(0,g.CW.gil()/1000)
i=e.cPW(w.f,w.r)
if(i>=0)g.cr2(i)}e=g.bG
if(e!=null)g.cCW(w)
if(m&&g.bG==null){if(Math.abs(w.f)<24){e=w.r
e=e>-2&&e<14}else e=!1
if(e)if(!(Math.abs(w.w)>2.2)){e=w.at
e=e!=null&&e.b<4}else e=!0
else e=!1
if(e){g.a2A()
g.Ax(10)
g.iD("You are inside the living room. Use Go outside to come back out.")
return}e=g.d
e===$&&C.c()
v=e.d
v===$&&C.c()
e=D.d.gaf(v[e.e].x)
v=new C.f5(e,new A.eaG())
while(v.C()){u=e.gR(0)
h=A.vw(new A.r(0,0,B.hw.h(0,u.b).d/2+10),u.e*3.141592653589793/2)
if(Math.abs(w.f-(u.c+h.a))<22&&Math.abs(w.r-(u.d+h.c))<16){g.aaS(u)
return}}}g.cDe(w)},
c0r(){var w,v,u,t,s,r,q,p,o,n,m=this,l=m.e
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
if(s!==w)l.bnp(s)},
aaS(d){var w,v,u,t,s,r,q=this
q.be=q.b0=0
w=d.b
if(w==="store"||w==="gasstation")w="shop"
else if(w==="hq")w="tower"
v=q.d
v===$&&C.c()
u=v.d
u===$&&C.c()
t=d.a
s=A.fW0(w,d,u[v.e].k4.t(0,t))
s.cx=q.al
s.B(q.ghI())
q.aj1(s,q.gIw().h(0,t))
s.B(q.ghI())
q.aI=s
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
q.e.hQ(170,0.4,new A.r(0,30,110),0)
q.m(q.giU())
A:{if("hospital"===w){w="The hospital. Walk onto the blue mat to admit the sick, and up to a bed to treat the patient. Walk to the green mat to go out."
break A}if("dmv"===w){w="The licence office. Walk onto the blue mat at the desk to get your Uber licence. Walk to the green mat to go out."
break A}if("tower"===w){w="The lobby of an office tower. Walk onto the blue mat (or tap the elevator) to choose a level. Walk to the green mat to go out."
break A}if("house2"===w||"bighouse"===w){w="The house. Walk onto the red or green mat at the breaker panel. Walk to the green mat to go out."
break A}if("school"===w){w="The school. Walk onto the mats to teach the class or read in the library. Walk to the green mat to go out."
break A}if("firestation"===w){w="The fire station. Walk onto the mats to check the equipment. Walk to the green mat to go out."
break A}w="The shop. Walk onto the yellow mat for food and the purple mat for medicine. Walk to the green mat to go out."
break A}q.iD(w)
A.fU(660,80,0.25,"tri")},
aX1(){var w,v,u,t=this,s=t.aI,r=t.aC
if(s==null||r==null)return
w=s.b
v=B.hw.h(0,w.b)
v.toString
t.al=s.cx
t.aI=null
t.be=t.b0=0
u=A.vw(new A.r(0,0,v.d/2+30),w.e*3.141592653589793/2)
r.f=w.c+u.a
r.r=w.d+u.c
r.w=0
r.at=null
r.Mv(0)
t.m(t.giU())
t.xV()
v=t.e
v===$&&C.c()
v.apx(new A.r(r.f,30,r.r))
t.iD("You are back in the city.")},
cDe(d){var w,v,u,t,s,r,q,p,o,n,m=this,l={}
l.a=null
w=m.bG==null
v=!1
if(!w||m.al==null){u=m.c5.b
if(u<(!w?0.7:0.99)){u=m.d
u===$&&C.c()
t=u.d
t===$&&C.c()
u=D.d.b5(t[u.e].x,new A.eaw(d))
v=u}}if(v)l.a=new C.G9(new A.eax(m),"\u26fd Buy gas ("+A.h3z(m.c5.b)+" \u2b50)")
else if(!w)l.a=new C.G9(m.gbSB(),"\ud83d\udeaa Get out")
else{if(m.al!=null)l.a=new C.G9(m.gc77(),"\u2b07 Put the crate down")
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
p=B.hw.h(0,t).a.toLowerCase()
if(l.a!=null)break
if(t==="crate"&&q<46){l.a=new C.G9(new A.eay(m,r),"\ud83d\udce6 Pick up the crate")
break}if(t==="pole"||t==="lamppost"){o=m.d
n=o.d
n===$&&C.c()
o=n[o.e].k3.t(0,r.a)&&q<60}else o=!1
if(o){l.a=new C.G9(new A.eaz(m,r),"\ud83d\udd27 Fix the street light")
break}if(D.d.t(B.HJ,t)&&q<36){l.a=new C.G9(new A.eaA(m,r),"\ud83c\udf4e Feed the "+p)
break}if(D.d.t(B.ddw,t)&&q<60){l.a=new C.G9(new A.eaB(m,r),"\ud83d\ude97 Get in the "+p)
break}}}w=l.a
w=w==null?null:w.b
u=m.cL
if(w!=(u==null?null:u.b))m.m(new A.eaC(l,m))},
bPO(d){var w,v=this,u=v.cl,t=d.a,s=u.h(0,t),r=B.hw.h(0,d.b).a
if(s!=null&&v.CW.gil()/1000-s<30){v.ef("The "+r.toLowerCase()+" has just eaten. Come back in a little while.",!1)
return}u.n(0,t,v.CW.gil()/1000)
u=v.ghI()
if(u==null)w=null
else{++u.r
w="You fed the "+r.toLowerCase()+". +1 point."
u.PL(w)}if(w==null)w="You fed the "+r.toLowerCase()+"."
A.fU(880,90,0.25,"tri")
v.m(new A.e7P())
v.iD(w)},
bSq(d){var w=this,v=w.aC
if(v==null)return
w.bG=d
v.CW=d.a
v.ay=22
v.ch=2.4
v.f=d.c
v.r=d.d
v.w=Math.atan2(Math.cos(d.e*3.141592653589793/2),-Math.sin(d.e*3.141592653589793/2))
v.at=null
v.Mv(0)
w.m(w.giU())
w.iD("You are driving the "+B.hw.h(0,d.b).a.toLowerCase()+". Slide the stick to drive. Press Get out to stop.")
A.fU(300,120,0.25,"tri")},
bSC(){var w,v,u,t,s,r,q=this,p=q.bG,o=q.aC
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
o.Mv(0)
for(w=[46,62,80],u=0;u<3;++u){t=w[u]
s=o.f+Math.sin(v)*t
r=o.r+Math.cos(v)*t
if(!o.KK(s,r)){o.f=s
o.r=r
break}}o.aJ5()
q.m(q.giU())
q.iD("You got out.")},
bNH(){var w=this.bG,v=this.aC
if(w==null||v==null)return null
return new C.ea([w.b,v.f,v.r,v.w,w.f])},
ya(d){return this.cn2(d)},
cn2(d){var w=0,v=C.j(x.H),u=1,t=[],s=[],r=this,q
var $async$ya=C.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:++r.bZ
u=2
q=r.c
q.toString
w=5
return C.b(C.a4(q,!1).cg(d),$async$ya)
case 5:s.push(4)
w=3
break
case 2:s=[1]
case 3:u=1;--r.bZ
w=s.pop()
break
case 4:return C.h(null,v)
case 1:return C.f(t.at(-1),v)}})
return C.i($async$ya,v)},
YT(){var w=0,v=C.j(x.H),u=1,t=[],s,r,q
var $async$YT=C.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:u=3
w=6
return C.b(C.az(),$async$YT)
case 6:s=e
w=C.eA(J.q(s.a,"ngmy_city_locked_until"))!=null?7:8
break
case 7:w=9
return C.b(J.hz(s,"ngmy_city_locked_until"),$async$YT)
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
return C.i($async$YT,v)},
aBr(d){var w=this,v=++w.hK
if(v>=3){w.hK=0
w.B0()
w.b03()}else if(v===2){w.ef(d+". That is two in a row.",!1)
w.b03()}else w.ef(d+". Answer the phone and finish the job, or you lose your place.",!1)},
b03(){A.fU(1046,160,0.3,"sine")
this.m(new A.e8v(this))},
gaWA(){return this.bZ>0||this.cJ!=null||Date.now()<0||this.p4},
c7b(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=this,a2=a1.d
a2===$&&C.c()
a2=a2.d
a2===$&&C.c()
w=D.d.h_(a2,new A.e8s())
v=a1.ghI()
a2=x._
u=C.a([],a2)
for(t=w.x,s=t.length,r=w.k4,q=0;q<t.length;t.length===s||(0,C.M)(t),++q){p=t[q]
o=p.b
if(o==="house2"||o==="bighouse"){o=p.a
o=!r.t(0,o)&&o!==a1.jc}else o=!1
if(o)u.push(p)}s=C.a([],a2)
for(o=t.length,n=w.k3,q=0;q<t.length;t.length===o||(0,C.M)(t),++q){p=t[q]
m=p.b
if((m==="pole"||m==="lamppost")&&!n.t(0,p.a))s.push(p)}l=new C.Z(t,new A.e8t(),C.T(t).k("Z<1>"))
k=C.a([0,1,2,3],x.t)
o=a1.iM
D.d.dY(k,o)
a2=C.a([],a2)
for(m=t.length,j=w.cy,q=0;q<t.length;t.length===m||(0,C.M)(t),++q){p=t[q]
i=p.b
if((i==="tower"||i==="hq")&&!j.aj(0,p.a))a2.push(p)}for(t=k.length,m=v!=null,q=0;q<k.length;k.length===t||(0,C.M)(k),++q){h=k[q]
if(h===0&&u.length!==0&&r.a<4){p=u[o.au(u.length)]
a2=p.a
r.M(0,a2)
a1.jc=a2
return new A.Qa(p,p.b==="bighouse"?"the big house":"the house","power","",0)}if(h===1&&m&&!l.gan(0)){i=v.gC3()
g=C.T(i).k("Z<1>")
f=C.C(new C.Z(i,new A.e8u(),g),g.k("K.E"))
i=f.length
if(i!==0){e=f[o.au(i)]
e.e=!0
e.c=Math.min(e.c,70)
d=l.gaf(0)
if(!d.C())C.b8(C.fs())
return new A.Qa(d.gR(0),"the hospital","sick",e.a.b,0)}}if(h===3&&a2.length!==0&&j.a<3){p=a2[o.au(a2.length)]
a0=2+o.au(A.htJ(p)-1)
j.n(0,p.a,a0)
return new A.Qa(p,p.b==="hq"?"the NGMY company building":"the office tower","office","",a0)}if(h===2&&s.length!==0&&n.a<4){p=s[o.au(s.length)]
n.M(0,p.a)
return new A.Qa(p,"the street","light","",0)}}return null},
aWK(d){var w,v,u,t=this.d
t===$&&C.c()
t=t.d
t===$&&C.c()
w=D.d.h_(t,new A.e8e())
switch(d.c){case"power":return!w.k4.t(0,d.a.a)
case"light":return!w.k3.t(0,d.a.a)
case"office":return!w.cy.aj(0,d.a.a)
default:v=this.ghI()
if(v==null)return!1
t=v.c
t===$&&C.c()
u=new C.Z(t,new A.e8f(d),C.T(t).k("Z<1>"))
if(!u.gaf(0).C())return!0
return u.gI(0).r>=0||!u.gI(0).e||!u.gI(0).f}},
Sh(d){var w,v,u,t=this,s=t.aC
if(s!=null){w=t.d
w===$&&C.c()
v=w.d
v===$&&C.c()
w=v[w.e].c!=="outside"}else w=!0
if(w)return
if(t.aI!=null)t.aX1()
s.at=null
s.Mv(0)
u=t.bRl(d,s)
s.f=u.a
s.r=u.b
s.aJ5()
w=t.e
w===$&&C.c()
w.xf(170,new A.r(s.f,30,s.r))
if(!t.aL)t.a2w()},
bRl(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=d.b,i=B.hw.h(0,j)
i.toString
w=B.aPC.t(0,j)
v=w?i.d/2+32:34
u=A.vw(new A.r(0,0,1),d.e*3.141592653589793/2)
j=u.c
i=u.a
t=-i
s=C.a([],x.f)
if(w)for(r=0;r<5;++r)for(q=v+B.dao[r],p=i*q,q=j*q,o=0;o<5;++o){n=B.d_I[o]
s.push(new C.z(d.c+p+j*n,d.d+q+t*n))}else for(m=0;m<12;++m){l=m*3.141592653589793/6
s.push(new C.z(d.c+Math.cos(l)*v,d.d+Math.sin(l)*v))}for(j=s.length,r=0;r<s.length;s.length===j||(0,C.M)(s),++r){k=s[r]
if(!e.KK(k.a,k.b))return k}return D.d.gI(s)},
cxR(d){var w,v,u=this
u.cJ=d
u.hL=0
u.Sh(d.a)
w=d.c
A:{if("sick"===w){v="New job: "+d.d+" is sick. Go into the hospital and onto the desk."
break A}if("light"===w){v="New job: a street light is out. Tap the dark light to fix it."
break A}v="New job: a house has no power. Walk in and fix it at the panel."
break A}u.ef(v,!0)
u.m(new A.e9K())},
bTa(d){var w,v=this,u=v.d
u===$&&C.c()
w=u.d
w===$&&C.c()
if(w[u.e].c!=="outside")return
v.Sh(d)
u=d.b
if(u==="house2"||u==="bighouse")v.aaS(d)
else if(u==="tower"||u==="hq"){v.aaS(d)
v.m(new A.e88(v))}else v.ef(y.Y,!0)},
cCm(){var w,v,u,t=$.aQX(),s=C.a([],x.f),r=this.gpj()
r=r==null?null:r.am7(this.CW.gil()/1000)
if(r==null)r=B.HS
w=r.length
v=0
for(;v<r.length;r.length===w||(0,C.M)(r),++v){u=r[v]
s.push(new C.z(u.b,u.c))}t.d=s
return A.ifZ(this.CW.gil()/1000)},
cr2(d){var w,v,u,t,s,r=this,q=Date.now()
if(q-r.mI<1e4)return
r.mI=q
w=r.aC
if(w==null)return
A.fU(110,600,0.5,"noise")
C.fI()
r.be=r.b0=0
w.at=null
v=r.c5
v.a=Math.min(v.a,0.2)
v.c=v.d=0
u=B.kk[d].a==="bus"?"bus":"police car"
v=r.d
v===$&&C.c()
t=v.d
t===$&&C.c()
v=t[v.e].x
t=C.T(v).k("Z<1>")
s=C.C(new C.Z(v,new A.e9y(),t),t.k("K.E"))
if(s.length===0){r.ef("A "+u+" ran you over! Always cross at the zebra crossing when the green walking person shows.",!1)
return}v=r.gpj()
if(v!=null)v.cVm(D.d.gI(s))
r.Sh(D.d.gI(s))
r.aaS(D.d.gI(s))
r.ef("\ud83d\ude91 A "+u+" ran you over! An ambulance brought you to the hospital. Medicine and food are being ordered for you: they are on the Orders board. Cross at the zebra crossing when the green walking person shows.",!1)
r.m(new A.e9z(r))},
aiJ(){var w=0,v=C.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g
var $async$aiJ=C.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:h=r.d
h===$&&C.c()
if(h.a.length!==0){w=1
break}q=null
p=$.ajH
w=p==null||p.a!==h.b?3:4
break
case 3:t=6
w=9
return C.b(A.aTl(),$async$aiJ)
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
break}n=$.ajH
if(n!=null&&n.a===r.d.b)m=n
else{if(q!=null){h=C.aK(J.q(q,"seed"))
h=h==null?null:D.k.N(h)
if(h==null)h=-1
h=h===r.d.b}else h=!1
if(h)m=A.fW7(q)
else if(q!=null&&r.eh){h=C.aK(J.q(q,"seed"))
l=h==null?null:D.k.N(h)
h=A.aVN(l==null?r.d.b:l)
r.d=$.E3=h
A.h8Y(h,q)
m=A.fW7(q)}else{h=r.d.b
m=A.fW6(h,h)
m.Ny(r.d)}}$.ajH=m
for(h=m.d,k=h.length,j=r.bJ,i=0;i<h.length;h.length===k||(0,C.M)(h),++i)j.M(0,h[i].a)
r.m(new A.e9L(r))
r.bw=C.dk(D.fV,new A.e9M(r))
case 1:return C.h(u,v)
case 2:return C.f(s.at(-1),v)}})
return C.i($async$aiJ,v)},
c7a(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=i.ghI()
if(h==null||i.c==null)return
if(i.cx==null){w=i.d
w===$&&C.c()
h.aD5(0,1,w)}if(++i.bX%8===0){w=i.d
w===$&&C.c()
h.CR(0,w)}if(i.aI!=null&&i.gak0())i.asm()
w=!1
if(!i.aL)if(i.bZ===0){v=i.d
v===$&&C.c()
u=v.d
u===$&&C.c()
if(u[v.e].c==="outside"){w=i.c5
w=w.c>0||w.d>0}}if(w){t=i.c5.a6J(1)
if(t!=null)i.ef(t,!1)
i.b7G()}if(i.aL){w=i.d
w===$&&C.c()
v=w.d
v===$&&C.c()
w=v[w.e].c==="outside"&&!i.c5.f&&i.iM.au(240)===0}else w=!1
if(w){w=i.c5
w.f=!0
w.aU()
i.ef("You feel unwell: a headache. You tire faster until you take pills from a shop.",!1)}if(Date.now()<0||i.bZ>0)return
w=!1
if(D.o.F(i.bX,45)===20){v=i.d
v===$&&C.c()
if(v.a.length===0){w=v.d
w===$&&C.c()
v=w[v.e].c==="outside"
w=v}}if(w)i.c4A()
w=i.d
w===$&&C.c()
if(w.a.length===0){v=w.d
v===$&&C.c()
v=v[w.e].c==="outside"}else v=!1
if(v){w=i.gpj()
s=w==null?null:w.FC(0,i.CW.gil()/1000)
if(s!=null)i.ef("\ud83c\udfc1 "+s,!0)
r=i.aC
if(r!=null){w=i.gpj()
w=(w==null?null:w.x)!=null&&i.aI==null}else w=!1
if(w){w=i.gpj()
w.toString
i.aRz(w.bjP(r.f,r.r,i.CW.gil()/1000))}q=i.cJ
if(q!=null){++i.hL
if(i.aWK(q)){i.hK=0
i.lc=Date.now()
i.lx=0
i.cJ=null
i.hL=0
if(q.c==="sick"){p=10+i.iM.au(26)
w=i.ghI()
if(w!=null)w.r+=p
i.ef("The sick person is at the hospital. +"+p+" stars. Well done.",!0)}if(i.c!=null)i.m(i.giU())}else if(i.hL>=240){i.cJ=null
i.hL=0
i.aBr("The job was not finished in time")}}else{w=i.eI
if(w.length!==0&&i.aI==null&&i.bB==null&&i.bC==null&&Date.now()-i.lc>1e4){o=D.d.cG(w,0)
if(!i.aWK(o))i.cxR(o)}else if(i.bB==null&&i.bC==null&&++i.lx>=45)i.ctU()}}else{v=w.d
v===$&&C.c()
if(v[w.e].c!=="outside")i.lx=0}for(w=h.d,v=w.length,u=i.bJ,n=0;n<w.length;w.length===v||(0,C.M)(w),++n){m=w[n]
l=i.d
k=l.d
k===$&&C.c()
if(k[l.e].c!=="outside")continue
if((i.bZ>0||i.cJ!=null||Date.now()<0||i.p4)&&!u.t(0,m.a))continue
if(u.M(0,m.a)){i.lx=0
i.bB=m
i.bC=null
i.b6R()}}u.pm(new A.e8l(h),!0)
j=i.bB
if(j!=null&&!D.d.b5(w,new A.e8m(j)))i.B0()},
ctU(){var w,v,u=this
u.lx=0
w=u.c7b()
if(w==null)return
if(u.gaWA()){v=u.eI
if(v.length<3)v.push(w)
return}u.b45(w)},
b45(d){var w=this
w.lx=0
w.bB=null
w.bC=d
w.b6R()},
b6R(){var w,v=this
v.S=0
w=v.P
if(w!=null)w.a4(0)
v.P=C.dk(D.ri,new A.e9N(v))
v.m(new A.e9O())},
B0(){var w=this,v=w.P
if(v!=null)v.a4(0)
w.P=null
if(w.c==null)return
w.m(new A.e9V(w))},
cgr(){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null
if(l.ok!=null)return k
if(l.aL){w=l.d
w===$&&C.c()
v=w.d
v===$&&C.c()
u=v[w.e].c==="outside"}else u=!1
t=l.bB
s=l.bC
if(!u&&t==null&&s==null)return k
r=l.ey
w=new A.e8K()
v=new A.e8T(r)
q=x.p
p=C.a([],q)
if(s!=null){o=C.h7(D.aD,k,C.d(s.gbe6(),k,k,k,k,k,k,D.nE,k,k,k),k,28)
n=s.gaDC()
p.push(v.$7$about$avatar$glow$onAnswer$onDecline$onLater$who(s.gbqh(),o,D.bG,new A.e8M(l,s),new A.e8N(l),new A.e8O(l,s),n))}if(t!=null){o=B.CI[t.b]
n=o.b
p.push(v.$6$about$avatar$glow$onAnswer$onDecline$who("NGMY City \xb7 mobile",C.h7(o.e.c,k,C.d(n[0],k,k,k,k,k,k,D.JN,k,k,k),k,28),D.bj,new A.e8P(l,t),l.gcym(),n))}if(u){v=C.a([],q)
o=l.cL
if(o!=null)v.push(w.$3$col("\u270b "+o.b,o.a,D.bG))
o=C.a([],q)
if(l.bG==null){n=l.bh
m=n?"\ud83c\udfc3 Run: on":"\ud83c\udfc3 Run"
o.push(w.$3$on(m,new A.e8Q(l),n))}if(l.bG==null)o.push(w.$3$col("\u2b06 Jump",new A.e8R(l),D.cp))
v.push(C.B(o,D.m,k,D.e,D.Q,0,k,k))
w=l.bG==null
o=w?206:140
v.push(new C.D(D.a_r,new C.a7(o,k,new A.Uo(l.c5,!w,12,k),k),k))
p.push(new C.D(B.bAn,C.B(C.a([new A.aIq(new A.e8S(l),k),C.x(v,D.dF,k,D.e,D.Q,0,D.p)],q),D.dF,k,D.iC,D.j,0,k,k),k))}return new C.a7(r,k,C.x(p,D.m,k,D.e,D.Q,0,D.p),k)},
aTr(){var w=this.d
w===$&&C.c()
if(w.a.length!==0)this.Ek()
else this.a0f()},
Ek(){var w=0,v=C.j(x.H),u,t=this,s,r,q,p
var $async$Ek=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:p=t.d
p===$&&C.c()
s=p.d
s===$&&C.c()
r=s[p.e]
if(r.gz3()){t.iD("This lesson is done. Try everything: it all works.")
w=1
break}p=r.p4
w=p==="ptrap"||p==="faucet"?3:5
break
case 3:if(r.RG==null)r.RG=A.fZQ()
w=6
return C.b(t.ya(C.e_(new A.e8w(r),!1,null,x.H)),$async$Ek)
case 6:w=4
break
case 5:if(r.R8==null)r.R8=new A.Cv(C.U(x.S,x.N))
w=7
return C.b(t.ya(C.e_(new A.e8x(r),!1,null,x.H)),$async$Ek)
case 7:case 4:if(t.c==null){w=1
break}t.m(t.giU())
if(r.gz3()){p=t.ghI()
if(p!=null)p.r+=10
q=r.p4
A:{p="Done! Tap the outlet and plug something in."
if("switch"===q){p="Done! Tap the switch on the wall: the light comes on."
break A}if("fan"===q){p="Done! Tap the wall switch and the fan spins."
break A}if("outlet"===q||"gfci"===q)break A
s=D.d.t(B.jT,q)
if(s){p="Done! Tap the switch on the wall: it works."
break A}s=D.d.t(B.lH,r.p4)
if(s)break A
p="Done! The sink works."
break A}t.iD(p)}case 1:return C.h(u,v)}})
return C.i($async$Ek,v)},
ak_(d){return this.cFj(d)},
cFj(d){var w=0,v=C.j(x.H),u,t=this,s,r,q,p
var $async$ak_=C.e(function(e,f){if(e===1)return C.f(f,v)
for(;;)switch(w){case 0:p=t.d
p===$&&C.c()
s=p.d
s===$&&C.c()
r=s[p.e].id[d]
q=r.gwB()
w=3
return C.b(t.ya(C.e_(new A.eaH(r),!1,null,x.H)),$async$ak_)
case 3:if(t.c==null){w=1
break}t.m(t.giU())
if(r.gwB()&&!q){p=t.ghI()
if(p!=null)p.r+=8}if(r.gwB()){p=q?"":"You are paid 8 stars. "
s=r.a==="switch"?"Tap it to turn the light on and off.":"Tap it to plug something in."
t.iD("Wired! "+p+s)}case 1:return C.h(u,v)}})
return C.i($async$ak_,v)},
a0f(){var w=0,v=C.j(x.H),u,t=this,s,r,q,p,o,n
var $async$a0f=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:n=t.d
n===$&&C.c()
s=n.d
s===$&&C.c()
r=s[n.e]
if(r.c==="outside"){w=1
break}s=r.CW
if(s==null){q=A.cqN(A.igQ(r),r.b,!1,n.b*37+r.a,!1)
q.alW()
if(!r.ay)q.cIm()
r.CW=q
n=q}else n=s
n.b=t.d.c
p=r.gkJ()
w=3
return C.b(t.ya(C.e_(new A.e8z(r),!1,null,x.H)),$async$a0f)
case 3:if(t.c==null){w=1
break}t.m(t.giU())
if(r.gkJ()&&!p){o=10+t.iM.au(26)
n=t.ghI()
if(n!=null)n.r+=o
n=r.gjO()?"":" The room still needs its plumbing, so it stays red until the pipes are done too."
t.ef(r.b+": the wiring is finished and the light has power. You are paid "+o+" stars!"+n,!0)}else if(r.gkJ()){n=r.gjO()?"":" The room still needs its plumbing."
t.iD(r.b+": the wiring is finished. The light has power."+n)}case 1:return C.h(u,v)}})
return C.i($async$a0f,v)},
a06(){var w=0,v=C.j(x.H),u,t=this,s,r,q,p,o,n
var $async$a06=C.e(function(d,e){if(d===1)return C.f(e,v)
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
s=r.fr=A.fZP(!1,n.b*41+r.a,s)
n=s}else n=q
if(!r.ch&&!n.ga3w())r.fr.cIl()
r.fr.b=t.d.c
p=r.gjO()
w=3
return C.b(t.ya(C.e_(new A.e8y(r),!1,null,x.H)),$async$a06)
case 3:if(t.c==null){w=1
break}t.m(t.giU())
if(r.gjO()&&!p){o=10+t.iM.au(26)
n=t.ghI()
if(n!=null)n.r+=o
t.ef(r.b+": the plumbing is finished and nothing leaks. You are paid "+o+" stars!",!0)}else if(r.gjO())t.iD(r.b+": the plumbing is finished and nothing leaks.")
case 1:return C.h(u,v)}})
return C.i($async$a06,v)},
bAQ(){var w=this.c
w.toString
return C.bU(E.lw,null,new A.e6b(this),w,!0,!0,!1,D.k_,!1,!1,x.H)},
bAu(d){var w,v,u,t,s,r,q,p,o=this,n=o.d
n===$&&C.c()
w=n.d
w===$&&C.c()
v=w[n.e]
n=v.c
if(n==="outside"||n==="hall"){o.ef("Add devices in a room, not in the hall or the garden.",!1)
return}n=v.id
if(n.length>=4){o.ef("This room already has four added devices.",!1)
return}w=C.a([-v.gew(0)/4,v.gew(0)/4],x.n)
for(u=v.w,t=D.d.gaf(u),s=new C.f5(t,new A.e65());s.C();)w.push(t.gR(0).c)
for(u=D.d.gaf(u),t=new C.f5(u,new A.e66());t.C();)w.push(u.gR(0).c+24)
for(u=n.length,r=0;r<n.length;n.length===u||(0,C.M)(n),++r)w.push(n[r].b)
p=-v.gew(0)/2+14
for(;;){if(!(p<=v.gew(0)/2-14)){q=null
break}if(D.d.d5(w,new A.e67(p))){q=p
break}p+=6}if(q==null){o.ef("There is no free place left on the back wall.",!1)
return}o.m(new A.e68(o,v,d,q))
o.iD("Added. It is red because it is not wired: tap it to wire it.")},
aed(d,e){var w,v,u=this,t=u.d
t===$&&C.c()
w=t.d
w===$&&C.c()
v=w[t.e].BR(u.Q)
if(v==null)return
u.m(new A.e8p(u,v,D.d.t(B.Ru,v.b),d,e))},
c7i(){var w,v,u=this,t=u.d
t===$&&C.c()
w=t.d
w===$&&C.c()
v=w[t.e].BR(u.Q)
if(v==null)return
u.m(new A.eag(u,v))},
cob(){var w,v,u=this,t=u.d
t===$&&C.c()
w=t.d
w===$&&C.c()
v=w[t.e].BR(u.Q)
if(v==null)return
u.m(new A.e9n(u,v))
u.iD(B.hw.h(0,v.b).a+": "+B.cV1[v.f]+".")},
c7g(d){var w,v,u=this,t=u.d
t===$&&C.c()
w=t.d
w===$&&C.c()
v=w[t.e].BR(u.Q)
if(v==null)return
u.m(new A.e9o(u,v))},
bAx(d){var w,v=this,u=v.d
u===$&&C.c()
w=u.d
w===$&&C.c()
v.m(new A.e69(v,w[u.e].M(0,d)))
v.iD(B.hw.h(0,d).a+" added. Move it with the arrows.")},
Aw(d,e,f,g,h){var w=null,v=e?g.j(0.25):D.c.j(0.07),u=C.m(14),t=e?g:D.aZ
t=C.J(t,D.r,e?2:1)
v=C.a([C.p(w,C.d(d,w,w,w,w,w,w,C.l(w,w,e?g:D.c,w,w,w,w,w,w,w,w,11,w,w,D.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),D.f,w,w,new C.o(v,w,t,u,w,w,D.n),w,w,w,w,D.eH,w,w,w)],x.p)
if(h)v.push(C.ao(w,C.p(w,w,D.f,w,w,new C.o(D.aw,w,C.J(B.Fk,D.r,2),w,w,w,D.a6),w,11,w,w,w,w,w,11),w,w,w,-2,-3,w))
return new C.D(D.fx,C.aB(w,new C.an(D.a_,w,D.aa,D.f,v,w),D.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,!1,D.a5),w)},
ih(d,e,f,g){return this.Aw(d,e,f,g,!1)},
J1(d,e,f){return this.Aw(d,e,f,D.aD,!1)},
aBy(d,e,f,g){var w=null,v=g==null,u=v?34:w,t=v?w:D.l1,s=C.m(10),r=e?D.c:D.aZ
r=C.J(r,D.r,e?3:1)
if(v)v=w
else v=C.at(C.d(g,w,w,w,w,w,w,C.l(w,w,d.jq()>0.5?D.w:D.c,w,w,w,w,w,w,w,w,12,w,w,D.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w,w,w)
return new C.D(E.tW,C.aB(w,C.p(w,v,D.f,w,w,new C.o(d,w,r,s,w,w,D.n),w,34,w,w,t,w,w,u),D.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,!1,D.a5),w)},
czf(d,e,f){return this.aBy(d,e,f,null)},
Dl(d,e){var w=null,v=D.c.j(0.1),u=C.m(10),t=C.J(D.aZ,D.r,1)
return new C.D(D.fx,C.aB(w,C.p(w,C.X(d,D.c,w,w,w,20),D.f,w,w,new C.o(v,w,t,u,w,w,D.n),w,36,w,w,w,w,w,40),D.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,e,w,w,w,w,w,w,!1,D.a5),w)},
bIX(){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null
if(k.cx!=null){w=k.dy
return C.B(C.a([C.E(C.d("\ud83c\udfac "+(w.length===0?"Walking in":w),j,1,D.a2,j,j,j,B.fjO,j,j,j),1),k.ih("\u23f9 Stop the tour",!0,k.gcyp(),D.cs)],x.p),D.m,j,D.e,D.j,0,j,j)}switch(k.r){case"furniture":w=k.d
w===$&&C.c()
v=w.d
v===$&&C.c()
u=v[w.e].BR(k.Q)
w=x.p
v=C.a([],w)
if(u!=null){t=C.a([k.Dl(D.l4,new A.e7l(k)),k.Dl(D.jQ,new A.e7m(k)),k.Dl(D.w9,new A.e7n(k)),k.Dl(D.ub,new A.e7o(k)),k.Dl(G.aos,k.gc7h()),k.Dl(D.nr,k.gcoa())],w)
s=k.d
r=s.d
r===$&&C.c()
if(r[s.e].c==="outside")t.push(k.Dl(D.OE,k.gcty()))
t.push(k.Dl(D.ec,k.gc7f(k)))
v.push(new C.a7(j,30,C.ct(t,j,j,j,j,D.aN,!1),j))}else v.push(B.aZm)
w=C.a([],w)
for(t=B.hw.gdV(B.hw),t=t.gaf(t);t.C();){s=t.gR(t)
r=D.d.t(B.dgM,s.a)
q=k.d
p=q.d
p===$&&C.c()
if(r===(p[q.e].c==="outside")){r=s.b
w.push(k.ih(r.b+" "+r.a,!1,new A.e7p(k,s),D.b1))}}v.push(new C.a7(j,30,C.ct(w,j,j,j,j,D.aN,!1),j))
return C.x(v,D.m,j,D.e,D.Q,0,D.p)
case"walls":w=k.as
v=w<0
w=v?"All walls":"Wall "+(w+1)+": tap Look to reset"
v=C.a([k.J1(w,v,new A.e7q(k))],x.p)
for(o=0;o<8;++o)v.push(k.aBy(B.ayL[o],!1,new A.e7r(k,o),B.drb[o]))
return new C.a7(j,30,C.ct(v,j,j,j,j,D.aN,!1),j)
case"floor":w=C.a([],x.p)
for(o=0;o<7;++o){v=B.ayu[o]
t=k.d
t===$&&C.c()
s=t.d
s===$&&C.c()
w.push(k.aBy(v.b,s[t.e].Q===o,new A.e7s(k,o),v.a))}return new C.a7(j,30,C.ct(w,j,j,j,j,D.aN,!1),j)
case"ceiling":w=k.d
w===$&&C.c()
v=w.d
v===$&&C.c()
w=v[w.e].go==="fan"?"\ud83c\udf00 Fan (tap for light)":"\ud83d\udca1 Light (tap for fan)"
w=C.a([k.ih(w,!1,new A.e7t(k),D.b9)],x.p)
for(o=0;o<4;++o){v=B.axj[o]
t=k.d
s=t.d
s===$&&C.c()
w.push(k.czf(v,s[t.e].as===o,new A.e7u(k,o)))}return new C.a7(j,30,C.ct(w,j,j,j,j,D.aN,!1),j)
default:n=C.aY(x.S)
w=C.a([k.ih("\u26f6 Full screen",!1,k.gbP_(),D.aQ)],x.p)
v=k.d
v===$&&C.c()
t=v.d
t===$&&C.c()
if(t[v.e].c==="outside")w.push(k.ih("\ud83d\udcf1 Phone",!1,k.gbP1(),D.c4))
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
r=s.gkJ()&&s.gjO()
w.push(k.Aw("\ud83d\udeaa "+s.b,!1,new A.e7v(k,l),D.b1,!r))}}return new C.a7(j,30,C.ct(w,j,j,j,j,D.aN,!1),j)}},
B(d){var w,v=this,u=null
if(Date.now()<0){w=C.dE(0,0,0,0-Date.now(),0,0).a
return C.c6(u,F.nb,C.bn(!0,C.at(new C.D(D.qb,C.x(C.a([B.fJi,D.ad,B.fJp,D.W,B.fJC,D.aA,C.d("It opens again in "+D.o.ao(w,36e8)+"h "+D.o.F(D.o.ao(w,6e7),60)+"m",u,u,u,u,u,u,B.flG,u,u,u),D.dX,C.bI(D.aTw,new A.eaK(d),u)],x.p),D.m,u,D.e,D.Q,0,D.p),u),u,u,u),!0,!1,D.af,!0,!0),u,!1,!1,u,u)}w=C.a([C.bT(0,new C.ex(v.bEV(d),v.Z),0,0,0)],x.p)
if(v.aA!=null)w.push(C.bT(0,C.e2(C.lr(new A.eaL(v),u,D.dw,D.hq,new C.cs(v.aE,x.ac),new A.eaM(v),new C.bo(1,0,x.g6),x.i),!0,u),0,0,0))
return new C.an(D.a_,u,D.aa,D.t,w,u)},
bHc(){var w,v,u=this,t=null,s=C.a([],x.p)
if(u.gak0())s.push(u.ih("\u2705 Complete work",!0,u.gaQi(),D.be))
w=u.aL
v=w?"\u23f9 Stop walking":"\ud83d\udeb6 Walk the city"
s.push(u.ih(v,w,w?u.gb78():u.gb6U(),D.bj))
s.push(u.ih("\ud83c\udfd7 Build",!1,u.gaN6(),D.bj))
w=u.ghI()
w=w==null?t:w.d.length
if(w==null)w=0
s.push(u.Aw("\ud83d\udcde Calls",!1,new A.e6Y(u),D.c4,w>0))
s.push(u.ih("\ud83c\udfe5 Hospital",!1,new A.e6Z(u),D.cs))
s.push(u.ih("\ud83d\uded2 Shop",!1,new A.e7_(u),D.cT))
s.push(u.ih("\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc67 People",!1,new A.e73(u),D.cp))
s.push(u.ih("\ud83c\udfe0 Go inside",!1,new A.e74(u),D.bj))
w=u.aI
if((w==null?t:w.a==="shop")===!0)s.push(u.ih("\ud83d\uded2 Buy things",u.k2,new A.e75(u),D.bG))
w=u.aI
if((w==null?t:w.a==="tower")===!0)s.push(u.ih("\ud83c\udfe2 Level "+w.f+" of "+w.gM1(),!1,new A.e76(u),D.cp))
if(u.cJ!=null)s.push(u.ih("\ud83d\udccb My job"+(u.avU()==null?"":" \xb7 "+C.w(u.avU())+" m"),!1,new A.e77(u),D.bG))
w=u.eI.length
if(w!==0)s.push(u.ih("\u23f3 Waiting: "+w,!1,new A.e78(u),D.aD))
s.push(u.Aw("\ud83d\udef5 Orders",u.gpj().x!=null,new A.e79(u),D.bG,u.gpj().x==null))
w=u.p4
v=w?"\u23f9 Stop drone":"\ud83d\ude81 Drone"
s.push(u.ih(v,w,new A.e7a(u),D.aQ))
w=u.h4
v=w?"\ud83c\udff7 Show tags":"\ud83c\udff7 Hide tags"
s.push(u.ih(v,w,new A.e70(u),D.cs))
s.push(u.ih("\ud83d\udc41 Hide all",!1,new A.e71(u),D.bL))
w=u.gKs()
s.push(u.ih("\ud83d\ude96 Uber",(w==null?t:w.f)!=null,u.gcCU(),D.bG))
s.push(u.ih("\ud83d\uddfa Map",u.y,new A.e72(u),D.bv))
return s},
gcwx(){var w,v,u,t,s,r,q,p,o=this
if(!o.h4){w=o.f
w===$&&C.c()
return w}w=o.t3
v=o.f
v===$&&C.c()
if(w===v&&o.qQ!=null){w=o.qQ
w.toString
return w}o.t3=v
w=C.a([],x.E)
for(u=o.f.c,t=u.length,s=0;s<u.length;u.length===t||(0,C.M)(u),++s){r=u[s]
q=!1
if(r.d===0)if(!r.c.A(0,D.by)){p=r.b
if(!C.cU(p,"rooms still need work",0))q=!C.cU(p,"house is finished",0)}if(q)w.push(r)}u=o.f
return o.qQ=new A.tM(v.a,v.b,w,u.d,u.e,0)},
bEV(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null,d=f.d
d===$&&C.c()
w=d.d
w===$&&C.c()
v=w[d.e]
d=x.w
w=C.aI(a0,e,d).w.a
u=f.es?w.b:w.a
f.ey=u
w=f.d
t=w.d
t===$&&C.c()
t=t[w.e].c==="outside"&&f.aI==null
w=w.a.length!==0?e:new A.e6i(f)
s=f.gcwx()
r=f.e
r===$&&C.c()
q=f.at
p=f.ax
o=f.ay
n=f.ai
if(f.es)d=62
else if(f.f0)d=C.aI(a0,e,d).w.r.b+66
else d=f.y&&f.d.a.length===0?104:10
m=f.cgr()
l=x.p
k=C.a([],l)
if(f.y&&f.d.a.length===0&&!f.es)k.push(new A.bj2(f.d,f.gc79(),Math.min(138,u*0.36),e))
j=A.XZ(n,m,r,new A.e6j(f),new A.e6k(f),o,q,e,e,new A.e6v(),p,d,f.gbN5(),new A.e6w(f),f.gc7d(),s,t,w,k,e)
i=f.y1!=null||f.y2||f.R8||f.k3||f.go||f.k2||f.id
d=f.ok
h=(d==null?e:d.d)===1
if((i||h)&&!f.ai){d=C.a([j],l)
if(i){if(f.id)w=f.c15()
else if(f.k2)w=f.cuZ()
else if(f.go)w=f.cge()
else if(f.k3)w=f.bOt()
else w=f.R8?f.bNI():f.bG8()
d.push(C.bT(0,w,0,0,0))}if(h)d.push(C.ao(e,C.e2(C.at(new C.jR(f.p3,new A.e6x(),e,e,x.cI),e,e,e),!0,e),e,e,0,0,74,e))
g=new C.an(D.a_,e,D.b0,D.t,d,e)}else g=j
if(f.ai)return f.bHp(g)
if(f.es)return f.bRo(g)
if(f.f0)return f.cjC(g)
d=f.d
if(d.a.length!==0)d=v.gz3()?"Done \u2713":"To do"
else d=""+d.gcNU()+"/"+f.d.gqR().length+" done"
w=f.d
t=w.d
t===$&&C.c()
w=t[w.e].c==="outside"
t=!w?e:new A.Uo(f.c5,f.bG!=null,12,e)
if(w)w=f.bHc()
else{w=f.x?"\ud83d\udd2d See the whole room":"\ud83c\udfe0 Be inside"
w=C.a([f.ih(w,!1,new A.e6y(f),D.b1)],l)
if(f.d.a.length===0){s=f.cx!=null
r=s?"\u23f9 Stop tour":"\ud83c\udfac Tour"
w.push(f.ih(r,s,new A.e6z(f),D.c4))}w.push(f.ih("\u2b06 Look up at the ceiling",!1,f.gc27(),D.b1))
s=f.z
r=s?"\ud83d\udeb6 Stop looking round":"\ud83d\udd04 Look all round (360)"
w.push(f.ih(r,s,new A.e6A(f),D.cT))
w.push(f.ih("\ud83d\udcfa TV",!1,f.gcCO(),D.cp))
s=f.d
if(s.a.length===0){r=s.d
r===$&&C.c()
s=r[s.e].c!=="outside"?"\ud83c\udf33 Go outside":"\ud83c\udfe0 Go inside"
w.push(f.ih(s,!1,new A.e6B(f),D.bj))}s=f.d
r=s.d
r===$&&C.c()
if(r[s.e].c==="outside"){s=f.aL
r=s?"\u23f9 Stop walking":"\ud83d\udeb6 Walk about"
w.push(f.ih(r,s,s?f.gb78():f.gb6U(),D.bj))}if(f.d.a.length===0)w.push(f.ih("\u2795 Add",!1,f.gaN6(),D.bj))
if(f.d.a.length===0){s=f.ghI()
s=s==null?e:s.d.length
if(s==null)s=0
w.push(f.Aw("\ud83c\udfd8 Community",!1,new A.e6C(f),D.c4,s>0))}w.push(f.ih("\ud83d\udd26 Tester",f.w,new A.e6l(f),D.cT))
if(f.d.a.length!==0)w.push(f.Aw("\ud83d\udd27 Do the lesson",!1,f.gc7c(),D.bG,!v.gz3()))
else{s=f.Aw("\u26a1 Wiring",!1,f.gcg7(),D.bG,!v.gkJ())
r=v.c
r=(r==="bathroom"||r==="kitchen")&&!v.gjO()
D.d.v(w,C.a([s,f.Aw("\ud83d\udeb0 Plumbing",!1,f.gcfx(),D.cp,r),f.ih("\ud83d\uddfa Map",f.y,new A.e6m(f),D.bv)],l))}}return A.TU(D.aD,new A.e6n(f,a0),C.x(C.a([new C.a7(e,30,C.ct(w,e,e,e,e,D.aN,!1),e),D.av,new C.a7(e,30,C.ct(C.a([f.J1("\ud83d\udc41 Look",f.r==="look",new A.e6o(f)),f.J1("\ud83d\udecb Furniture",f.r==="furniture",new A.e6p(f)),f.J1("\ud83e\uddf1 Walls",f.r==="walls",new A.e6q(f)),f.J1("\ud83d\udfeb Floor",f.r==="floor",new A.e6r(f)),f.J1("\u2b1c Ceiling",f.r==="ceiling",new A.e6s(f)),f.J1("\ud83d\udeaa Doors",f.r==="doors",new A.e6t(f)),f.ih("\ud83d\udcd8 Learn",!1,new A.e6u(a0),D.bv)],l),e,e,e,e,D.aN,!1),e),D.av,f.bIX()],l),D.E,e,D.e,D.Q,0,D.p),g,d,v.b,t)},
cmb(d){return C.bU(E.lw,null,new A.e9m(this),d,!0,!0,!0,D.k_,!1,!1,x.H)}}
A.bj2.prototype={
B(d){var w=null,v=D.k.E((this.e-10)/126,0.5,1),u=D.w.j(0.6),t=C.m(12),s=C.J(D.aZ,D.r,1)
return C.p(w,new C.a7(126*v,84*v,C.aB(w,C.eS(D.A,C.b4(w,w,w,new A.bis(this.c,w),B.f31),D.f,D.xn),D.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new A.dt9(this,v),w,w,w,w,!1,D.a5),w),D.f,w,w,new C.o(u,w,s,t,w,w,D.n),w,w,w,w,D.m3,w,w,w)}}
A.bis.prototype={
a1(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=this.b,e=f.d
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
if(t.gkJ()&&t.gjO())m=D.be
else m=!t.gkJ()?D.aw:D.d2
l=C.bs(o,D.hx)
$.S()
k=new C.ap(D.R,D.N,D.U,D.V,D.S)
k.r=m.j(t.gkJ()&&t.gjO()?0.35:0.5).gp(0)
j=k.G()
v.drawRRect(C.ek(l),j)
j.delete()
l=C.bs(o,D.hx)
k=new C.ap(D.R,D.N,D.U,D.V,D.S)
k.b=D.a9
k.c=n?2.2:0.8
k.r=(n?D.c:D.bY).gp(0)
j=k.G()
v.drawRRect(C.ek(l),j)
j.delete()
i=t.c
A:{if("bedroom"===i){l="\ud83d\udecf"
break A}if("bathroom"===i){l="\ud83d\udebf"
break A}if("kitchen"===i){l="\ud83c\udf73"
break A}if("living"===i){l="\ud83d\udecb"
break A}if("outside"===i){l="\ud83c\udf33"
break A}l=""
break A}h=new C.jQ(new C.eu(l,g,g,D.cQ,g,g,g,g,g,g,B.fj0),D.a3,D.bZ,new C.jA(1),g,g,g,g,D.bW,g)
h.ej()
l=h.b
k=l.c
l=l.a.c
h.a1(d,new C.t(s+(q-s)/2-k/2,r+(p-r)/2-l.gbb(l)/2))}},
aw(d){return!0}}
A.aIq.prototype={
U(){return new A.bsX()},
bhu(d,e){return this.c.$2(d,e)}}
A.bsX.prototype={
aZx(d){var w,v,u={},t=u.a=d.aF(0,B.efP),s=t.gcH()>46?u.a=t.eR(0,t.gcH()).aJ(0,46):t,r=s.a/46,q=-s.b/46,p=Math.sqrt(r*r+q*q)
s=this.a
s.toString
w=p<0.15
v=w?0:r
s.bhu(v,w?0:q)
this.m(new A.f2g(u,this))},
aZw(){this.a.bhu(0,0)
this.m(new A.f2f(this))},
B(d){var w=this,v=null,u=C.p(v,v,D.f,v,v,new C.o(D.w.j(0.42),v,C.J(D.bj.j(0.9),D.r,2.4),v,v,v,D.a6),v,132,v,v,v,v,v,132),t=C.p(v,v,D.f,v,v,new C.o(v,v,C.J(D.bj.j(0.25),D.r,1.5),v,v,v,D.a6),v,66,v,v,v,v,v,66),s=w.d,r=s==null
if(r)s=D.J
return C.nJ(D.ca,new C.a7(132,132,new C.an(D.A,v,D.aa,D.t,C.a([u,t,C.dO(C.p(v,v,D.f,v,v,new C.o(D.bj.j(r?0.55:0.9),v,C.J(D.c,D.r,2),v,v,v,D.a6),v,56,v,v,v,v,v,56),s)],x.p),v),v),v,new A.f2h(w),new A.f2i(w),v,new A.f2j(w),v,v,new A.f2k(w))}}
A.eXS.prototype={}
A.Mg.prototype={}
A.Qa.prototype={
gbe6(){var w,v=this.c
A:{if("sick"===v){w="\ud83e\udd12"
break A}if("light"===v){w="\ud83d\udca1"
break A}if("office"===v){w="\ud83c\udfe2"
break A}w="\u26a1"
break A}return w},
gaDC(){var w,v=this.c
A:{if("sick"===v){w=this.d
if(w.length===0)w="A neighbour"
break A}if("light"===v){w="City lights office"
break A}if("office"===v){w="Office manager"
break A}w="Your neighbour"
break A}return w},
gbqh(){var w,v=this.c
A:{if("sick"===v){w="Needs a doctor"
break A}if("light"===v){w="A street light is out"
break A}if("office"===v){w="No power in an office"
break A}w="No power at a house"
break A}return w},
gaGP(d){var w,v=this,u="I will pay you between 10 and 35 stars. Thank you!",t=v.c
A:{if("sick"===t){w=C.a(["Hello! "+v.gaDC()+" is very sick and cannot get up.","Please take them to the hospital: walk into the hospital and onto the desk to admit them.",u],x.s)
break A}if("office"===t){w=""+v.e
w=C.a(["Hello, this is the office manager. The office on level "+w+" of "+v.b+" has lost its power and nobody can work.","Please take the elevator up to level "+w+", and fix the wiring at the breaker panel there.",u],x.s)
break A}if("light"===t){w=C.a(["Hello! A street light is out and the street is dark.","It is the dark one with the red sign. Could you fix its wiring?",u],x.s)
break A}w=C.a(["Hello! All the lights went out in "+v.b+". The power is off in the whole house.","Could you check the breaker panel inside and fix the wiring? Switch the power off before you touch anything.",u],x.s)
break A}return w}}
A.bU2.prototype={}
A.pt.prototype={}
A.Nz.prototype={
U(){return new A.bjX()}}
A.bjX.prototype={
rA(d){var w=this.c
w.toString
return C.a4(w,!1).cg(C.e_(new A.dQt(d),!1,null,x.H))},
B(d){var w,v,u,t,s,r,q,p,o,n=this,m=null
$.asd="tech"
w=C.aJ(m,m,m,m,S.nt,m,m,m,new A.dQu(d),m,m,m,m,m,m)
v=D.aD.j(0.16)
u=C.m(13)
t=x.p
u=C.B(C.a([w,C.p(m,B.b8R,D.f,m,m,new C.o(v,m,C.J(D.aD.j(0.6),D.r,1),u,m,m,D.n),m,40,m,m,m,m,m,40),D.as,B.bDI],t),D.m,m,D.e,D.j,0,m,m)
v=C.m(26)
w=C.J(D.aD,D.r,1.8)
s=x.V
r=C.a([new C.ac(0,D.G,D.aD.j(0.28),D.dq,26)],s)
r=C.aB(m,C.p(m,C.x(C.a([C.p(m,B.b9i,D.f,m,m,new C.o(D.aD.j(0.2),m,C.J(D.aD,D.r,2),m,C.a([new C.ac(0,D.G,D.aD.j(0.5),D.J,22)],s),m,D.a6),m,78,m,m,m,m,m,78),D.ad,B.fCp,D.av,B.fJ6,D.aA,C.p(m,B.fCl,D.f,m,m,new C.o(D.aD,m,m,C.m(20),m,m,D.n),m,m,m,m,Y.akr,m,m,m)],t),D.m,m,D.e,D.j,0,D.p),D.f,m,m,new C.o(m,m,w,v,r,B.c1A,D.n),m,m,m,m,D.vX,m,m,m),D.y,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new A.dQv(n),m,m,m,m,m,m,!1,D.a5)
v=D.w.j(0.6)
w=C.m(16)
w=C.a([r,C.ao(m,C.aB(m,C.p(m,B.fQQ,D.f,m,m,new C.o(v,m,C.J(F.fw,D.r,1.4),w,m,m,D.n),m,m,m,m,B.bx8,m,m,m),D.y,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new A.dQw(n),m,m,m,m,m,m,!1,D.a5),m,m,m,10,10,m)],t)
v=n.aZz("JOBS")
r=n.aZy(C.a([n.vJ("\ud83d\udd0c","Wire a room","Go to a room that needs wiring",D.be,new A.dQA(n)),n.vJ("\ud83d\udebd","Plumb a room","Go to a bathroom or kitchen",D.aQ,new A.dQB(n)),n.vJ("\ud83d\udd27","Fix a house","Walk the house and fix every sign",D.aD,new A.dQC(n)),n.vJ("\ud83e\uddf1","Build a room","Frame, drywall, then wire",D.bj,new A.dQD(n)),n.vJ("\u26a1","Wiring bench","Just the wiring, one room",D.bG,new A.dQE(n)),n.vJ("\ud83e\uddea","Safety inspection","A test job: marked when you submit",D.bv,new A.dQF(n)),n.vJ("\ud83d\udcde","Service calls","A customer rings with problems",D.id,new A.dQG(n)),n.vJ("\ud83c\udfd8","Neighbourhood jobs","Fix lights and wiring around the city",D.aQ,new A.dQH(n))],t))
s=n.aZz("LESSONS")
q=C.a([],t)
for(p=0;p<17;++p){o=B.dfq[p]
q.push(n.vJ(o.b,o.c,o.d,o.e,new A.dQx(n,o)))}q.push(n.vJ("\ud83e\udde0","Diagram lessons","Three-way switch, fan with light",D.bv,new A.dQy(n)))
q.push(n.vJ("\ud83d\udcd8","Learn the trades","Short cards for beginners",D.bv,new A.dQz(n)))
return C.c6(m,D.c0,C.bn(!0,C.ct(C.a([u,D.ad,new C.an(D.a_,m,D.aa,D.t,w,m),v,r,s,n.aZy(q)],t),m,B.ajI,m,m,D.ah,!1),!0,!1,D.af,!0,!0),m,!1,!1,m,m)},
aZz(d){var w=null
return new C.D(B.bBH,C.B(C.a([C.E(C.p(w,w,D.f,D.aD.j(0.35),w,w,w,1,w,w,w,w,w,w),1),new C.D(D.fL,C.d(d,w,w,w,w,w,w,B.ffv,w,w,w),w),C.E(C.p(w,w,D.f,D.aD.j(0.35),w,w,w,1,w,w,w,w,w,w),1)],x.p),D.m,w,D.e,D.j,0,w,w),w)},
aZy(d){var w,v,u,t,s=null,r=x.p,q=C.a([],r)
for(w=0;v=d.length,w<v;w+=2){u=d[w]
t=w+1
v=t<v?d[t]:D.bJ
q.push(new C.D(D.cu,new C.Ee(new C.cc(D.aN,D.e,D.j,D.aj,s,D.p,s,0,C.a([new C.bA(1,D.bd,u,s),D.ac,new C.bA(1,D.bd,v,s)],r),s),s),s))}return C.x(q,D.m,s,D.e,D.j,0,D.p)},
vJ(d,e,f,g,h){var w=null,v=C.a([g.j(0.2),B.Fk],x.O),u=C.m(22),t=C.J(g.j(0.55),D.r,1.4),s=x.V,r=C.a([new C.ac(0,D.G,g.j(0.18),D.cv,16)],s),q=g.j(0.22),p=C.J(g.j(0.7),D.r,1.5)
s=C.a([new C.ac(0,D.G,g.j(0.35),D.J,14)],s)
return C.aB(w,C.p(w,C.x(C.a([C.p(w,C.at(C.d(d,w,w,w,w,w,w,D.wS,w,w,w),w,w,w),D.f,w,w,new C.o(q,w,p,w,s,w,D.a6),w,56,w,w,w,w,w,56),D.W,C.d(e,w,w,w,w,w,w,D.j1,D.L,w,w),D.cL,C.d(f,w,2,D.a2,w,w,w,B.fr3,D.L,w,w)],x.p),D.m,w,D.b8,D.j,0,D.p),D.f,w,w,new C.o(w,w,t,u,r,new C.a9(D.b3,D.b6,D.x,v,w,w),D.n),w,w,w,w,B.bwR,w,w,w),D.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,h,w,w,w,w,w,w,!1,D.a5)}}
A.aw1.prototype={
U(){return new A.bsL()},
bpY(){return this.c.$0()}}
A.bsL.prototype={
a_(){this.a2()
this.d=C.dk(D.nk,new A.f26(this))},
q(){var w=this.d
if(w!=null)w.a4(0)
this.a3()},
B(d){var w=null,v=D.w.j(0.6),u=C.m(18),t=C.J(D.bG,D.r,1.5)
return C.p(w,C.d("\u2b50 "+C.w(this.a.bpY()),w,w,w,w,w,w,B.ffQ,w,w,w),D.f,w,w,new C.o(v,w,t,u,w,w,D.n),w,w,w,D.ix,D.rl,w,w,w)}}
A.b73.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n=this,m=null
if(n.d)return A.h_j(E.B9,n.r,n.z,n.Q,n.y,n.as,n.db,n.w,n.f,n.c)
w=n.r
v=x.p
u=C.a([C.bT(0,A.h_j(E.B9,w,n.z,n.Q,n.y,n.as,n.db,n.w,n.f,n.c),0,0,0)],v)
t=n.ch
s=t!=null
if(s)u.push(C.ao(m,C.x(t,D.E,m,D.e,D.j,0,D.p),m,m,8,m,8,m))
t=C.a([],v)
r=n.CW
if(r!=null)D.d.v(t,r)
r=C.a([],v)
q=n.e
if(q!=null)r.push(new A.aw1(q,m))
r.push(new A.afw(D.hK,"Zoom in",w,!1,m))
t.push(C.B(r,D.m,m,D.e,D.Q,0,m,m))
t.push(new A.afw(D.yR,"Zoom out",w,!0,m))
w=n.x
t.push(n.axm(B.bKz,"Back to the whole view",w))
t.push(n.axm(Aj.Cg,"Flip up and down swiping",new A.cvq()))
t.push(n.axm(D.kh,"Flip left and right swiping",new A.cvr()))
u.push(C.ao(m,C.x(t,D.dF,m,D.e,D.j,0,D.p),m,m,m,8,8,m))
t=n.dx
if(t!=null)u.push(C.ao(14,C.at(t,m,m,m),m,m,0,0,m,m))
t=n.at
if(t!=null){r=n.cy
if(r==null)s=s?60:10
else s=r
r=n.ax
q=(r?D.dZ:D.ei).j(0.95)
p=C.m(14)
o=C.J(r?D.bj:D.cs,D.r,1)
u.push(C.ao(m,C.p(m,C.d(t,m,m,m,m,m,m,B.fg6,m,m,m),D.f,m,m,new C.o(q,m,o,p,m,m,D.n),m,m,m,m,D.nn,m,m,m),m,m,10,62,s,m))}t=n.ay
if(t!=null){s=C.m(16)
r=C.J(D.aZ,D.r,1)
t=C.a([C.d(t.a,m,m,m,m,m,m,B.frB,m,m,m),D.cL,C.d(t.b,m,m,m,m,m,m,E.UE,m,m,m)],v)
q=n.cx
if(q!=null)D.d.v(t,C.a([D.am,q],v))
u.push(C.ao(8,C.p(m,C.B(C.a([C.E(C.x(t,D.E,m,D.e,D.j,0,D.p),1),C.aJ(m,m,m,m,D.Hc,m,m,m,w,m,m,m,m,m,D.cd)],v),D.E,m,D.e,D.j,0,m,m),D.f,m,m,new C.o(E.adL,m,r,s,m,m,D.n),m,m,m,m,E.ajs,m,m,m),m,m,10,10,m,m))}return new C.an(D.a_,m,D.aa,D.t,u,m)},
axm(d,e,f){var w=null,v=D.w.j(0.55),u=C.J(D.aZ,D.r,1)
return new C.D(D.eG,C.hc(C.aB(w,C.p(w,C.X(d,D.c,w,w,w,20),D.f,w,w,new C.o(v,w,u,w,w,w,D.a6),w,38,w,w,w,w,w,38),D.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,!1,D.a5),w,e,w,w),w)}}
A.aXb.prototype={
B(d){var w,v=this,u=null,t=x.p,s=C.a([C.aJ(u,u,u,u,S.nt,u,u,u,new A.bW8(d),u,u,u,u,u,u)],t),r=v.x,q=v.c,p=v.d
if(r==null)s.push(C.E(C.d(q,u,u,u,u,u,u,C.l(u,u,p,u,u,u,u,u,u,u,u,16,u,u,D.u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),1))
else D.d.v(s,C.a([C.d(q,u,u,u,u,u,u,C.l(u,u,p,u,u,u,u,u,u,u,u,16,u,u,D.u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),D.as,C.E(r,1),D.as],t))
r=p.j(0.15)
q=C.m(16)
w=C.J(p.j(0.6),D.r,1)
s.push(C.aB(u,C.p(u,C.B(C.a([C.X(Ak.amY,p,u,u,u,17),D.el,C.d(v.w,u,u,u,u,u,u,C.l(u,u,p,u,u,u,u,u,u,u,u,12,u,u,D.u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],t),D.m,u,D.e,D.Q,0,u,u),D.f,u,u,new C.o(r,u,w,q,u,u,D.n),u,u,u,u,D.rl,u,u,u),D.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,v.r,u,u,u,u,u,u,!1,D.a5))
s=C.B(s,D.m,u,D.e,D.j,0,u,u)
q=C.aI(d,u,x.w).w
return C.c6(u,D.c0,C.bn(!0,C.x(C.a([new C.D(B.bBU,s,u),C.p(u,C.cd(v.f,D.t,u,D.y,u,u,u,u,D.ah),D.f,u,new C.aZ(0,1/0,0,q.a.b*0.34),B.b4l,u,u,u,u,E.ZL,u,u,1/0),C.E(C.by(Ai.abY,v.e,D.aq),1)],t),D.m,u,D.e,D.j,0,D.p),!0,!1,D.af,!0,!0),u,!1,!1,u,u)}}
A.DS.prototype={
U(){var w=new C.y7()
$.yT()
w.h9(0)
return new A.aA3(w)},
gdc(d){return this.d}}
A.aA3.prototype={
gz2(){var w,v=this,u=v.d
if(u===$){w=A.t1(v.a.c)
v.d!==$&&C.bG()
v.d=w
u=w}return u},
geq(d){var w,v=this.e
if(v===$){w=this.a.d
v=this.e=w==null?new A.Cv(C.U(x.S,x.N)):w}return v},
garM(){var w=this.gz2().a
return w==="light"||w==="fan"},
gik(){var w,v=this,u=v.f
if(u===$){w=v.garM()?new A.xa(1.15,0.12,11,B.Vc,$.ax()):new A.xa(0.42,0.26,12,B.h23,$.ax())
v.f!==$&&C.bG()
u=v.f=w}return u},
gp0(){var w=this,v=w.r
return v===$?w.r=A.h3d(w.gz2(),w.geq(0),!0):v},
aAv(d){var w
this.m(new A.d8X(this,d))
A:{if("practice"===d){w="Practice: you can put a wire anywhere. The mistake shows when the power goes on."
break A}if("test"===d){w="Test: put every wire where you think it goes. Nothing is marked until you submit."
break A}w="Learn: a wrong wire is refused and explained."
break A}this.j9(w,!0)},
q(){var w=this.as
if(w!=null)w.a4(0)
this.a3()},
j9(d,e){var w=this,v=w.as
if(v!=null)v.a4(0)
w.m(new A.d8V(w,d,e))
w.as=C.cL(D.lz,new A.d8W(w))},
nz(d){return this.j9(d,!1)},
qA(){var w=this.geq(0)
w.d=w.d&&w.a&&w.c>=2
this.r=A.h3d(this.gz2(),w,!0)},
of(){var w,v,u,t=this
if(t.garM()&&t.geq(0).c===0){t.gik().hQ(11,0.12,B.Vc,1.15)
t.m(new A.d8I(t))
return}w=t.gik()
v=t.geq(0).c===0
u=v?2.8:0.4
v=v?12:10
w.hQ(v,0.26,new A.r(0,0.1,u),0.42)
t.m(new A.d8J(t))},
aXp(d){var w=this
if(w.garM()){w.gik().hQ(9,0.12,B.Vc,1.15)
return}if(d==="ground")w.gik().hQ(8,0.55,B.h5N,0.15)
else if(d==="white")w.gik().hQ(8.5,0.2,B.h9N,0.95)
else w.gik().hQ(8.5,0.2,B.fZN,-0.95)},
c7j(){var w,v,u,t,s="ground",r=this.geq(0),q=!r.a||r.c>0,p=new A.d8H(this),o=this.gz2()
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
J4(d){var w,v,u,t,s,r,q,p,o,n=this,m="square",l="STOP! The power is still on. Turn the breaker OFF before you touch any wire.",k="Recorded."
if(d===0){n.of()
return}if(B.aPG.t(0,d))return
w=n.gz2()
v=w.f
u=C.T(v).k("Z<1>")
t=C.C(new C.Z(v,new A.d8K(d),u),u.k("K.E"))
v=w.a
s=A.htQ(v,d)
u=s!=null
if(u){r=n.geq(0)
r=r.c===0&&r.b.iI(0,s)}else r=!1
if(r){w=n.geq(0)
if(w.a){A.fU(180,220,0.25,m)
n.nz(l)
return}w=w.b
w.bu(w,new A.d8L(s))
n.m(n.gc7m())
n.j9("Wire taken off the screw.",!0)
return}r=!1
if(t.length!==0){q=n.geq(0)
if(q.c===0){q=q.b
if(q.aj(0,d))r=n.w.length===0||q.h(0,d)===n.w}}if(r){w=n.geq(0)
if(w.a){A.fU(180,220,0.25,m)
n.nz(l)
return}w.b.W(0,d)
n.m(new A.d8M(n))
n.j9(w.y?k:"Wire taken off.",!0)
return}if(u){u=n.geq(0)
u=u.c===0&&!u.b.iI(0,s)&&D.d.b5(w.e,new A.d8N(s))}else u=!1
if(u){n.m(new A.d8O(n,s,d))
if(n.w.length!==0){n.aXp(s)
n.j9(D.d.h_(w.e,new A.d8P(s)).b+": picked up. Now tap the screw, nut or wire it joins.",!0)}return}if(t.length!==0&&n.w.length!==0&&n.geq(0).c===0){u=n.geq(0)
p=A.htL(w,u,n.w,D.d.gI(t),!1)
if(p!=null){++n.Q
A.fU(180,220,0.25,m)
n.nz(p)}else if(u.y){A.fU(520,60,0.25,"tri")
n.m(new A.d8Q(n,d))
n.j9(k,!0)
n.w=""}else{A.yG()
n.m(new A.d8R(n,d))
if(u.r)n.j9(D.d.gI(t).b+": fastened.",!0)
else if(A.bEg(w,u))n.j9("Every wire is on the right screw. Now push the device into the box.",!0)
else n.j9(D.d.gI(t).b+": fastened correctly.",!0)
n.gik().xf(7,A.aPj(v,d,u))
n.w=""}return}o=n.gp0().b.h(0,d)
if(o!=null){n.m(new A.d8S(n,d))
w=n.gik()
v=o.c
w.xf(o.d,v)}},
cla(){var w,v=this
v.m(new A.d8T(v))
w=v.geq(0)
if(w.a){A.fU(120,200,0.25,"saw")
if(w.c===0)v.nz("The breaker is ON. The wires are LIVE at 120 volts. Turn it OFF before you touch anything.")}else{A.fU(600,100,0.25,"tri")
v.j9("Breaker OFF. It is safe to work on the wires. (In real life, always test them with a tester first.)",!0)}},
cAu(){var w,v,u=this,t="The tester glows: this outlet has 120 volts and is wired correctly. The lesson is complete! Mistakes: ",s=" is wired correctly: every wire is on the terminal that belongs to it. The lesson is complete! Mistakes: ",r=u.gz2(),q=u.geq(0),p=A.L4(r,q)
if(p.a!=="ok"){u.m(new A.d8Y(u,p));++u.Q
A.fU(180,220,0.25,"square")
C.fI()
r=p.r==="arc"
w=r?95:150
A.fU(w,450,0.5,r?"saw":"noise")
if(q.y)r=p.d?"The breaker tripped.":"Power is on."
else r=p.b+"\nHow to fix it: "+p.w
u.nz(r)
return}u.m(new A.d8Z(u))
A.yG()
v=r.a
A:{if("switch"===v){r="Power on. Flip the switch and the light turns on: both black wires are on brass screws, so the switch opens and closes the hot wire. The lesson is complete! Mistakes: "+u.Q+"."
break A}if("gfci"===v){r="Power on. Press RESET (it clicks), then TEST: it must shut the outlet off. Wired on LINE, it protects the whole circuit. The lesson is complete! Mistakes: "+u.Q+"."
break A}if("outlet"===v){r=t+u.Q+"."
break A}q=D.d.t(B.jT,v)
if(q){r="Power on. "+r.b+(s+u.Q+".")
break A}if(v!=="light"&&v!=="fan"){r="Power on. The "+r.b.toLowerCase()+(s+u.Q+".")
break A}r=t+u.Q+"."
break A}u.j9(r,!0)},
B(a1){var w,v=this,u=null,t=v.c7j(),s=D.d.bg(t,new A.d97()),r=s<0?"All done":"Step "+(s+1)+"/"+v.gz2().d.length,q=v.gz2(),p=v.geq(0),o=A.bEg(q,p)&&!p.a,n=v.gp0(),m=v.gik(),l=v.x,k=v.y,j=v.z,i=l!==0?v.gp0().b.h(0,v.x):u,h=(p.a?D.ei:D.dZ).j(0.95),g=C.m(18),f=p.a,e=C.J(f?D.cs:D.bj,D.r,1.5),d=C.X(f?D.hs:B.bMd,D.c,u,u,u,18),a0=x.p
g=C.a([C.aB(u,C.p(u,C.B(C.a([d,D.el,C.d(f?"Breaker ON (live)":"Breaker OFF (safe)",u,u,u,u,u,u,D.nF,u,u,u)],a0),D.m,u,D.e,D.Q,0,u,u),D.f,u,u,new C.o(h,u,e,g,u,u,D.n),u,u,u,u,D.hg,u,u,u),D.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,v.gcl9(),u,u,u,u,u,u,!1,D.a5)],a0)
h=!p.r&&!p.y
h=C.a([A.wQ("Learn",D.bj,D.wk,h,new A.d98(v)),D.am,A.wQ("Practice",D.cs,D.p5,p.r,new A.d99(v)),D.am,A.wQ("Test",D.bv,D.uf,p.y,new A.d9h(v)),D.am],a0)
if(!p.y)D.d.v(h,C.a([A.wQ("Hints",D.aD,D.rr,p.e,new A.d9i(v)),D.am,A.wQ("Labels",D.aQ,N.C9,p.f,new A.d9j(v)),D.am,A.wQ("Wire guide",D.mw,D.oc,!1,new A.d9k(a1)),D.am],a0))
h.push(A.wQ("Brass side",B.boV,E.anT,!1,new A.d9l(v)))
h.push(D.am)
h.push(A.wQ("Silver side",B.M1,D.OC,!1,new A.d9m(v)))
h.push(D.O)
n=A.XZ(!1,u,m,new A.d9n(v),u,j,l,i,u,u,k,u,u,v.gJ2(),v.gJ3(),n,!1,u,g,h)
m=C.a([],a0)
l=p.c
if(l===0){l=C.a([],a0)
for(k=D.d.gaf(q.e),j=new C.f5(k,new A.d9o(v));j.C();){i=k.gR(0)
h=i.c
g=new C.aQ(14,14)
f=v.w
e=i.a
f=f===e
d=f?D.b1:D.aZ
w=new C.ay(d,f?3:1,D.r,-1)
d=C.a([],a0)
if(p.b.iI(0,e))d.push(new C.D(D.fx,C.X(D.eb,i.d,u,u,u,18),u))
f=i.b
e=i.d
d.push(new C.y(f,u,new C.F(!0,e,u,u,u,u,13,D.u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u),u,u,u,u,u,u,u,u,u))
l.push(new C.D(D.ix,C.aB(u,C.p(u,new C.cc(D.aN,D.e,D.j,D.m,u,D.p,u,0,d,u),D.f,u,u,new C.o(h,u,new C.bK(w,w,w,w),new C.bk(g,g,g,g),u,u,D.n),u,u,u,u,D.hI,u,u,u),D.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new A.d9a(v,i),u,u,u,u,u,u,!1,D.a5),u))}l=C.a([C.bW(D.bE,l,D.bq,u,6,8)],a0)
if(p.y)D.d.v(l,C.a([C.B(C.a([A.ua("Submit the test",D.uf,new A.d9b(v,a1),D.bv)],a0),D.m,u,D.e,D.j,0,u,u),D.O],a0))
l.push(D.O)
if(o)p="Push it into the box"
else p=p.a?"Turn the breaker OFF first":"Fasten every wire first"
l.push(C.B(C.a([A.ua(p,B.aoq,o?new A.d9c(v):u,D.aD)],a0),D.m,u,D.e,D.j,0,u,u))
D.d.v(m,l)}else if(l===1)D.d.v(m,C.a([C.B(C.a([A.ua("Pull it back out",D.rv,new A.d9d(v),D.ae),D.ac,A.ua("Put the cover plate on",Z.wa,new A.d9e(v),D.aD)],a0),D.m,u,D.e,D.j,0,u,u)],a0))
else{l=A.ua("Start over",D.l8,new A.d9f(v),D.ae)
p=p.d
k=p?"Tested \u2713":"Power on and test"
D.d.v(m,C.a([C.B(C.a([l,D.ac,A.ua(k,D.hs,p?u:v.gcAt(),D.aD)],a0),D.m,u,D.e,D.j,0,u,u)],a0))}return A.TU(D.aD,new A.d9g(v,a1,t),C.x(m,D.m,u,D.e,D.Q,0,D.p),n,r,q.b,u)}}
A.a9r.prototype={
U(){return new A.aFY()},
gdc(d){return this.c}}
A.aFY.prototype={
geq(d){var w,v=this.d
if(v===$){w=this.a.c
v=this.d=w==null?A.fZQ():w}return v},
gik(){var w=this.e
return w===$?this.e=new A.xa(-0.3,0.18,40,B.aVK,$.ax()):w},
gp0(){var w=this.f
return w===$?this.f=A.bBG(this.geq(0)):w},
q(){var w=this.z
if(w!=null)w.a4(0)
this.a3()},
j9(d,e){var w=this,v=w.z
if(v!=null)v.a4(0)
w.m(new A.eSq(w,d,e))
w.z=C.cL(D.lz,new A.eSr(w))},
nz(d){return this.j9(d,!1)},
of(){this.gik().hQ(40,0.18,B.aVK,-0.3)
this.m(new A.eSj(this))},
J4(d){var w,v,u,t,s,r,q=this,p="square"
if(d===0){q.of()
return}w=C.G([41,"tail",42,"trap",43,"arm"],x.S,x.N).h(0,d)
if(w!=null&&!q.geq(0).a.t(0,w)){v=q.r
if(v.length===0){if(w==="tail")v="tailpiece"
else v=w==="trap"?"P-trap":"trap arm"
q.nz("Pick the "+v+" from the buttons below first, then tap its glowing outline.")
return}if(v!==w){A.fU(180,220,0.25,p)
u=q.r
A:{if("tail"===u){v="The tailpiece is the straight pipe that hangs from the sink. It goes at the very top, under the drain."
break A}if("trap"===u){v="The P-trap is the U-shaped bend. It goes right under the tailpiece, in the middle."
break A}v="The trap arm is the long straight pipe that goes into the wall. It goes last, on the right."
break A}q.nz(v)
return}if(w==="trap"&&!q.geq(0).a.t(0,"tail")){A.fU(180,220,0.25,p)
q.nz("Start from the top: put the tailpiece on first, then the trap under it.")
return}if(w==="arm"&&!q.geq(0).a.t(0,"trap")){A.fU(180,220,0.25,p)
q.nz("The trap arm joins the trap. Put the P-trap on first.")
return}q.m(new A.eSk(q,w))
A.yG()
q.j9("Piece in place. "+(q.geq(0).a.a===3?"Now tighten the two slip nuts: tap each nut.":"Pick the next piece."),!0)
return}v=d===44
if(v||d===45){t=v?"n1":"n2"
if(q.geq(0).b.h(0,t)!==!0){q.m(new A.eSl(q,t))
A.yG()
q.j9("Slip nut hand tightened. In real life give it a quarter turn more with pliers, but never over-tighten plastic.",!0)
return}}s=q.gp0().b.h(0,d)
if(s!=null){q.m(new A.eSm(q,d))
v=q.gik()
r=s.c
v.xf(s.d,r)}},
c7o(){var w=this,v=x.cc,u=C.C(new C.Z(C.a(["n1","n2"],x.s),new A.eSn(w),v),v.k("K.E"))
w.m(new A.eSo(w,u))
if(u.length!==0){A.fU(180,220,0.25,"square")
w.nz("It is dripping from a loose slip nut! Tap the nut and tighten it, then run the water again.")}else{A.yG()
w.j9("No leaks. The water flows through the trap and into the wall. The little pool in the U-bend stays there and blocks sewer gas. The lesson is complete!",!0)}},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.geq(0),i=j.a,h=i.t(0,"tail"),g=i.t(0,"trap"),f=i.t(0,"arm"),e=j.b
e=e.h(0,"n1")===!0&&e.h(0,"n2")===!0
w=C.a([h,g,f,e,j.c&&j.d.length===0],x.u)
v=D.d.bg(w,new A.eSv())
u=i.a===3
j=v<0?"All done":"Step "+(v+1)+"/5"
h=l.gp0()
g=l.gik()
f=l.w
e=l.x
t=l.y
s=f!==0?l.gp0().b.h(0,l.w):k
h=A.XZ(!1,k,g,new A.eSw(l),k,t,f,s,k,k,e,k,k,l.gJ2(),l.gJ3(),h,!1,k,k,k)
e=x.p
s=C.a([],e)
for(r=0;r<3;++r){q=B.dp9[r]
g=i.t(0,q)?k:new A.eSx(l,q)
f=i.t(0,q)?D.dt:D.fJ
t=new C.aQ(14,14)
p=l.r===q
o=p?D.b1:D.aZ
n=new C.ay(o,p?3:1,D.r,-1)
o=C.a([],e)
if(i.t(0,q))o.push(B.ejU)
p=B.dxm.h(0,q)
p.toString
m=i.t(0,q)?D.bY:D.c
o.push(new C.y(p,k,new C.F(!0,m,k,k,k,k,13,D.u,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k),k,k,k,k,k,k,k,k,k))
s.push(new C.D(D.ix,C.aB(k,C.p(k,new C.cc(D.aN,D.e,D.j,D.m,k,D.p,k,0,o,k),D.f,k,k,new C.o(f,k,new C.bK(n,n,n,n),new C.bk(t,t,t,t),k,k,D.n),k,k,k,k,D.hI,k,k,k),D.y,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,g,k,k,k,k,k,k,!1,D.a5),k))}i=C.bW(D.bE,s,D.bq,k,6,8)
g=A.ua("Start over",D.l8,new A.eSy(l),D.ae)
f=u?"Run the water":"Build the drain first"
return A.TU(D.cp,new A.eSz(d,w),C.x(C.a([i,D.O,C.B(C.a([g,D.ac,A.ua(f,D.qp,u?l.gc7n():k,D.cp)],e),D.m,k,D.e,D.j,0,k,k)],e),D.m,k,D.e,D.Q,0,D.p),h,j,"Sink drain (P-trap)",k)}}
A.a4S.prototype={
U(){return new A.aAn()},
gdc(d){return this.c}}
A.aAn.prototype={
geq(d){var w,v=this.d
if(v===$){w=this.a.c
v=this.d=w==null?A.fZQ():w}return v},
gik(){var w=this.e
return w===$?this.e=new A.xa(-0.25,0.2,36,B.aV5,$.ax()):w},
gp0(){var w=this.f
return w===$?this.f=A.aPa(this.geq(0)):w},
q(){var w=this.z
if(w!=null)w.a4(0)
this.a3()},
j9(d,e){var w=this,v=w.z
if(v!=null)v.a4(0)
w.m(new A.dbZ(w,d,e))
w.z=C.cL(D.lz,new A.dc_(w))},
nz(d){return this.j9(d,!1)},
of(){this.gik().hQ(36,0.2,B.aV5,-0.25)
this.m(new A.dbR(this))},
J4(d){var w,v,u,t,s,r,q=this
if(d===0){q.of()
return}w=x.fZ
v=C.C(new C.Z(B.a4M,new A.dbU(d),w),w.k("K.E"))
if(v.length!==0&&q.r.length!==0){w=q.geq(0)
u=A.ig3(w,q.r,D.d.gI(v))
if(u!=null){A.fU(180,220,0.25,"square")
q.nz(u)}else{A.yG()
q.m(new A.dbV(q,d))
q.gik().xf(12,A.agG(d))
q.j9(A.fwI(w)?"All four ends are connected. Now open the valves.":D.d.gI(v).b+": connected.",!0)}return}w=d===68
if(w||d===69){t=w?"hot":"cold"
if(q.geq(0).e.iI(0,t)){q.m(new A.dbW(q,t))
q.j9("Hose taken off.",!0)
return}}s=q.gp0().b.h(0,d)
if(s!=null){q.m(new A.dbX(q,d))
w=q.gik()
r=s.c
w.xf(s.d,r)}},
c7l(d){var w,v=this
v.m(new A.dbS(v))
w=v.geq(0)
if(!w.f){v.j9("Valves closed.",!0)
return}if(A.fwI(w)){A.yG()
v.j9("Hot and cold flow through the hoses and out of the faucet. No leaks. The lesson is complete!",!0)}else{A.fU(180,220,0.25,"square")
v.nz("Water is spraying out of a valve that has no hose! Close the valves and finish connecting the hoses first.")}},
B(d){var w,v,u,t,s,r,q,p,o,n=this,m=null,l=n.geq(0),k=l.r||l.e.a!==0,j=l.e,i=j.h(0,61)==="hot"&&j.h(0,63)==="hot",h=j.h(0,62)==="cold"&&j.h(0,64)==="cold",g=C.a([k,i,h,l.f&&A.fwI(l)],x.u),f=D.d.bg(g,new A.dc3())
k=f<0?"All done":"Step "+(f+1)+"/4"
i=n.gp0()
h=n.gik()
w=n.w
v=n.x
u=n.y
t=w!==0?n.gp0().b.h(0,n.w):m
s=x.p
i=A.XZ(!1,m,h,new A.dc4(n),m,u,w,t,m,m,v,m,m,n.gJ2(),n.gJ3(),i,!1,m,m,C.a([A.wQ("Hints",D.aD,D.rr,l.r,new A.dc5(n)),D.O],s))
v=C.a([],s)
for(r=0;r<2;++r){h={}
w=B.doB[r]
h.a=null
q=w.a
h.a=q
u=new C.aQ(14,14)
t=n.r===q
p=t?D.b1:D.aZ
o=new C.ay(p,t?3:1,D.r,-1)
p=C.a([],s)
t=C.a6(j).k("bc<2>")
if(new C.Z(new C.bc(j,t),new A.dc6(h),t.k("Z<K.E>")).gL(0)===2)p.push(B.ejW)
p.push(new C.y(w.b,m,D.t8,m,m,m,m,m,m,m,m,m))
v.push(new C.D(D.ix,C.aB(m,C.p(m,new C.cc(D.aN,D.e,D.j,D.m,m,D.p,m,0,p,m),D.f,m,m,new C.o(w.c,m,new C.bK(o,o,o,o),new C.bk(u,u,u,u),m,m,D.n),m,m,m,m,D.hI,m,m,m),D.y,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new A.dc7(h,n),m,m,m,m,m,m,!1,D.a5),m))}j=C.bW(D.bE,v,D.bq,m,6,8)
h=A.ua("Start over",D.l8,new A.dc8(n),D.ae)
l=l.f?"Close the valves":"Open the valves"
return A.TU(D.cs,new A.dc9(d,g),C.x(C.a([j,D.O,C.B(C.a([h,D.ac,A.ua(l,D.qp,n.gc7k(n),D.cs)],s),D.m,m,D.e,D.j,0,m,m)],s),D.m,m,D.e,D.Q,0,D.p),i,k,"Faucet supply lines",m)}}
A.aBf.prototype={
U(){return new A.aBg(A.hao())}}
A.aBg.prototype={
gik(){var w,v=this.e
if(v===$){w=new A.xa(-0.3,0.48,46,B.Va,$.ax())
w.f=80
this.e=w
v=w}return v},
gp0(){var w=this.f
return w===$?this.f=A.agt(this.d):w},
q(){var w=this.z
if(w!=null)w.a4(0)
this.a3()},
j9(d,e){var w=this,v=w.z
if(v!=null)v.a4(0)
w.m(new A.dj2(w,d,e))
w.z=C.cL(D.lz,new A.dj3(w))},
nz(d){return this.j9(d,!1)},
of(){this.gik().hQ(46,0.48,B.Va,-0.3)
this.m(new A.diX(this))},
J4(d){var w,v,u,t=this
if(d===0){t.of()
return}if(d===72){w=t.d
w=w.d.t(0,72)&&w.a>=5}else w=!1
if(w){t.m(new A.diZ(t,d))
A.yG()
t.j9("You flipped the breaker fully OFF and then ON. The living room light is back on. A breaker trips when a circuit is overloaded: find out why before it trips again.",!0)
t.gik().xf(22,B.h7b)
return}w=d===87
if(w||d===86){v=t.d
v=v.b&&!v.c&&v.a>=5}else v=!1
if(v){if(t.w==="wrench"&&w){t.m(new A.dj_(t,d))
A.yG()
t.j9("You tightened the slip nut with the wrench. The drip has stopped.",!0)
return}A.fU(180,220,0.25,"square")
t.nz(w?"Hand tightening is not enough here. Pick the wrench first, then tap the nut.":"The water is dripping from the slip nut on the trap. Pick the wrench, then tap the nut.")}u=t.gp0().b.h(0,d)
if(u!=null){t.m(new A.dj0(t,d))
w=t.gik()
v=u.c
w.xf(u.d,v)}},
cfb(d){var w,v
A:{if("ptrap"===d){w=B.eq0
break A}if("faucet"===d){w=B.bFy
break A}w=new A.DS(d,null,null)
break A}v=this.c
v.toString
C.a4(v,!1).cg(C.e_(new A.diY(w),!1,null,x.H))},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.d,l=B.djk[m.a],k=o.r,j=k===0?n:A.i5b(k)
k=m.d.t(0,72)
w=!m.b||m.c
v=C.a([!k,w],x.u)
w=m.a
k=o.gp0()
u=o.gik()
t=o.r
s=o.x
r=o.y
q=t!==0?o.gp0().b.h(0,o.r):n
p=j==null?n:C.aB(n,C.p(n,B.fsU,D.f,n,n,new C.o(D.aD,n,n,C.m(12),n,n,D.n),n,n,n,n,D.rl,n,n,n),D.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new A.dj6(o,j),n,n,n,n,n,n,!1,D.a5)
k=A.XZ(!1,n,u,new A.dj7(o),n,r,t,q,p,new A.dj8(o),s,n,n,o.gJ2(),o.gJ3(),k,!1,n,n,n)
s=l.a
p=x.p
q=C.B(C.a([C.E(C.d(""+(m.a+1)+". "+s,n,n,n,n,n,n,B.fl8,n,n,n),1),A.wQ("Wrench",D.aQ,D.p5,o.w==="wrench",new A.dj9(o))],p),D.m,n,D.e,D.j,0,n,n)
t=C.d(l.b,n,3,D.a2,n,n,n,B.fmd,n,n,n)
m=C.l5(D.bv,6,s,6,0,new A.dja(o),m.a)
u=v[0]
s=u?"\u2705 Living room power fixed":"\u26a0 Living room has no power"
s=C.E(C.d(s,n,n,n,n,n,n,C.l(n,n,u?D.ep:D.eU,n,n,n,n,n,n,n,n,11.5,n,n,D.H,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),1)
u=v[1]
r=u?"\u2705 Sink leak fixed":"\u26a0 Kitchen sink drips"
return A.TU(D.bv,new A.djb(d,v),C.x(C.a([q,D.bA,t,m,C.B(C.a([s,C.E(C.d(r,n,n,n,n,n,n,C.l(n,n,u?D.ep:D.eU,n,n,n,n,n,n,n,n,11.5,n,n,D.H,n,n,!0,n,n,n,n,n,n,n,n),D.dU,n,n),1)],p),D.m,n,D.e,D.j,0,n,n)],p),D.m,n,D.e,D.Q,0,D.p),k,"Stage "+(w+1)+"/7","Build and fix a house",n)}}
A.afw.prototype={
U(){return new A.bwo()}}
A.bwo.prototype={
b74(){var w=this,v=w.d
if(v!=null)v.a4(0)
w.d=null
if(w.e&&w.c!=null)w.m(new A.fdq(w))},
c7p(d){var w,v,u=this
u.m(new A.fdo(u))
w=u.a
v=w.e
v.ap8(w.f?1.45:0.69)
v=u.d
if(v!=null)v.a4(0)
u.d=C.cL(D.kC,new A.fdp(u))},
q(){var w=this.d
if(w!=null)w.a4(0)
this.a3()},
B(d){var w=this,v=null,u=w.a.d,t=D.w.j(w.e?0.8:0.55),s=w.e,r=s?D.bG:D.aZ
r=C.J(r,D.r,s?2:1)
return new C.D(D.eG,C.hc(C.nJ(D.ca,C.p(v,C.X(w.a.c,D.c,v,v,v,22),D.f,v,v,new C.o(t,v,r,v,v,v,D.a6),v,44,v,v,v,v,v,44),v,new A.fdr(w),new A.fds(w),v,v,v,v,new A.fdt(w)),v,u,v,v),v)}}
A.jL.prototype={}
A.MX.prototype={}
A.a6U.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m=null,l=x.p,k=C.a([C.B(C.a([C.aJ(m,m,m,m,S.nt,m,m,m,new A.cay(d),m,m,m,m,m,m),B.fCZ],l),D.m,m,D.e,D.j,0,m,m)],l)
for(w=0;w<5;++w){v=B.dqT[w]
u=v.c
t=C.a([new C.D(D.akG,new C.y(v.b+"  "+v.a.toUpperCase(),m,new C.F(!0,u,m,m,m,m,12,D.u,m,1.1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m,m,m,m,m,m,m,m,m),m)],l)
for(s=v.d,r=s.length,q=0;q<r;++q){p=s[q]
o=new C.aQ(14,14)
n=new C.ay(u.j(0.35),1,D.r,-1)
t.push(C.p(m,C.x(C.a([new C.y(p.a,m,D.j1,m,m,m,m,m,m,m,m,m),D.cL,new C.y(p.b,m,E.UE,m,m,m,m,m,m,m,m,m)],l),D.E,m,D.e,D.j,0,D.p),D.f,m,m,new C.o(B.Fk,m,new C.bK(n,n,n,n),new C.bk(o,o,o,o),m,m,D.n),m,m,m,D.cu,D.bf,m,m,m))}D.d.v(k,t)}return C.c6(m,D.c0,C.bn(!0,C.ct(k,m,B.ajI,m,m,D.ah,!1),!0,!1,D.af,!0,!0),m,!1,!1,m,m)}}
A.cm0.prototype={}
A.F8.prototype={}
A.nq.prototype={}
A.X5.prototype={}
A.clR.prototype={
bz9(d,e,f){var w,v=this
if(f!=null)w=D.d.h_(B.ay8,new A.clV(f))
else{w=new C.e9()
w.d3(v.a)
w=B.ay8[w.au(2)]}v.c!==$&&C.aP()
v.c=w
w=new C.e9()
w.d3(v.a+7)
w=w.hh()
v.d!==$&&C.aP()
v.d=w},
vi(d,e){var w=this.c
w===$&&C.c()
return D.d.h_(w.c,new A.clW(e))},
Pl(d){++this.w
return new A.eB(!1,d,!1,"")},
c4z(d){var w=d.d
return new C.N(w,new A.clS(this),C.T(w).k("N<1,n>")).aH(0," and ")},
bhW(d,e){var w,v,u,t,s=this,r=s.vi(0,e),q=s.e
if(q.t(0,e))return s.Pl("The "+r.c.toLowerCase()+" is already there.")
if(d!==r.b)return s.Pl(s.b?"That does not go here.":"That does not go here. This spot is for the "+r.c.toLowerCase()+".")
for(w=r.d,v=w.length,u=0;u<v;++u)if(!q.t(0,w[u])){q=s.b?"Not yet: something has to go in first.":"Not yet. "+r.e+" Put in the "+s.c4z(r)+" first.";++s.w
return new A.eB(!1,q,!1,"")}if(r.f&&s.r)return s.Pl(s.b?"The water is still on!":"Stop! The water is still on. Cutting into a pipe with the water on floods the room. Turn the water off at the main valve first (pick the hand and tap the main valve).")
q.M(0,e)
s.y=!1
s.x.a8(0)
if(r.r>0)t=s.b?"":" It is only loose. Pick the wrench and tap it to tighten the joints."
else t=""
return new A.eB(!0,r.c+" fitted."+t,!1,"")},
bjh(d){var w,v,u,t,s=this,r=s.vi(0,d)
if(!s.e.t(0,d))return s.Pl(s.b?"Nothing to tighten yet.":"There is nothing to tighten yet: the "+r.c.toLowerCase()+" is not fitted.")
w=r.r
if(w===0)return s.Pl(s.b?"That does not need tightening.":"The "+r.c.toLowerCase()+" does not have joints to tighten. It just sits in place.")
v=s.f
u=v.h(0,d)
if(u==null)u=0
if(u>=w)return s.Pl("Already tight. More force would crack it.")
t=u+1
v.n(0,d,t)
s.x.a8(0)
s.y=!1
v=r.c
return new A.eB(!0,t>=w?v+": every joint is tight now.":v+": one joint tightened, one to go.",!1,"")},
aGW(d){var w=this.vi(0,d),v=this.f.h(0,d)
if(v==null)v=0
return w.r-v},
aIY(){var w,v,u,t,s,r,q=this
q.r=!q.r
w=q.x
w.a8(0)
if(!q.r)return B.aZ1
v=q.c
v===$&&C.c()
u=v.c
t=C.T(u).k("Z<1>")
s=C.C(new C.Z(u,new A.clX(q),t),t.k("K.E"))
v=v.c
u=C.T(v).k("Z<1>")
r=C.C(new C.Z(v,new A.clY(q),u),u.k("K.E"))
q.y=!0
if(s.length!==0){w.v(0,new C.N(s,new A.clZ(),C.T(s).k("N<1,n>")));++q.w
return new A.eB(!1,"Water is spraying from an open pipe where the "+D.d.gI(s).c.toLowerCase()+" should be! Turn the water off and finish the job.",!0,"")}if(r.length!==0){w.v(0,new C.N(r,new A.cm_(),C.T(r).k("N<1,n>")));++q.w
return new A.eB(!1,"The "+D.d.gI(r).c.toLowerCase()+" is leaking from a loose joint. Turn the water off, tighten it with the wrench, then test again.",!0,"")}if(!q.ga3w())return B.aYS
return B.aYE},
cIl(){var w,v,u,t,s,r,q,p=this
p.r=!0
p.aIY()
w=p.c
w===$&&C.c()
v=w.c
u=v.length
t=0
for(;t<u;++t){s=v[t]
p.bhW(s.b,s.a)}for(w=w.c,v=w.length,t=0;t<v;++t){s=w[t]
for(u=s.r,r=s.a,q=0;q<u;++q)p.bjh(r)}p.aIY()
p.w=0},
ga3w(){var w=this.c
w===$&&C.c()
return D.d.d5(w.c,new A.clT(this))},
gcGw(){var w=this.c
w===$&&C.c()
return D.d.d5(w.c,new A.clU(this))},
gwB(){var w=this
return w.ga3w()&&w.gcGw()&&w.r&&w.y&&w.x.a===0}}
A.W7.prototype={
U(){var w,v=new A.xa(-0.25,0.4,135,B.aWq,$.ax())
v.f=200
w=new C.y7()
$.yT()
w.h9(0)
return new A.aEF(v,w)}}
A.aEF.prototype={
gCS(d){var w=this.d
if(w===$){this.a.toString
w=D.o.F(Date.now(),1e5)
this.d=w}return w},
a_(){var w,v=this
v.a2()
w=v.a.d
if(w==null){w=v.gCS(0)
v.a.toString
w=A.fZP(!1,w,null)}v.e=w
v.r=A.hoP(w,v.x,!w.b)},
q(){var w=this.at
if(w!=null)w.a4(0)
this.a3()},
ZS(){var w=this.e
w===$&&C.c()
return this.r=A.hoP(w,this.x,!w.b)},
axo(d,e){var w=this,v=w.at
if(v!=null)v.a4(0)
w.m(new A.emD(w,d,e))
w.at=C.cL(D.ju,new A.emE(w))},
aZB(){this.f.hQ(135,0.4,B.aWq,-0.25)
this.m(new A.emw(this))},
cyc(d){var w,v,u=this.e
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
ayd(d){var w=this.e
w===$&&C.c();++w.w
return new A.eB(!1,d,!1,"")},
c7t(d){return this.aZA(d)},
cxt(d){var w
A:{if("main"===d){w=9400
break A}w=this.e
w===$&&C.c()
w=w.c
w===$&&C.c()
w=9100+D.d.bg(w.c,new A.emI(d))
break A}this.aZA(w)},
b6C(){var w,v,u,t,s,r,q,p=this,o=p.x
if(o==="hand")return C.a([B.eJM],x.L)
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
q=r.vi(0,s)
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
aZA(d){var w,v,u,t,s,r=this
if(d===0)return
w=r.r
w===$&&C.c()
v=w.b.h(0,d)
if(r.x.length===0){r.m(new A.eml(r,d))
if(v!=null)r.axo(v.a+": "+v.b,!0)
return}u=r.cyc(d)
w=r.x
if(w==="hand")if(d===9400){w=r.e
w===$&&C.c()
t=w.aIY()}else{w=r.e
w===$&&C.c()
t=r.ayd(w.b?"Your hand is only for the main water valve.":"Your hand is for the main water valve. Parts are placed by picking them from the tray.")}else if(w==="wrench")if(u==null){w=r.e
w===$&&C.c()
t=r.ayd(w.b?"Nothing to tighten.":"There is nothing to tighten there.")}else{w=r.e
w===$&&C.c()
t=w.bjh(u)}else if(u==null){w=r.e
w===$&&C.c()
t=r.ayd(w.b?"Not there.":"That does not go there. Tap one of the glowing spots.")}else{s=r.e
s===$&&C.c()
t=s.bhW(w,u)}w=t.a
if(w)A.yG()
else A.fU(180,220,0.25,"square")
r.m(new A.emm(r,d))
w=w&&!t.c
r.axo(t.b,w)
w=r.e
w===$&&C.c()
if(w.gwB()&&!r.as){r.as=!0
$.aW.x1$.push(new A.emn(r))}},
c7q(){var w=null,v=this.c
v.toString
C.cg(w,w,!0,w,new A.ems(this),v,w,!0,!0,x.H)},
aYr(){this.m(new A.emB(this))
this.aZB()},
gcCz(){var w,v,u,t=C.a([],x.s)
for(w=0;w<11;++w){v=B.c4t[w]
u=this.e
u===$&&C.c()
u=u.c
u===$&&C.c()
if(D.d.b5(u.c,new A.emJ(v)))t.push(v)}return t},
c4X(){var w,v,u,t,s=this.e
s===$&&C.c()
s=s.c
s===$&&C.c()
s=s.c
w=s.length
v=0
for(;v<w;++v){u=s[v]
if(!this.e.e.t(0,u.a)){t=this.e.e
t=D.d.d5(u.d,t.gkQ(t))}else t=!1
if(t)return u}return null},
aUQ(){var w,v,u,t=this,s=t.e
s===$&&C.c()
if(s.x.a!==0){s=s.c
s===$&&C.c()
s=s.c
w=C.T(s)
v=new C.cQ(new C.Z(s,new A.emt(t),w.k("Z<1>")),new A.emu(),w.k("cQ<1,n>")).aH(0,", ")
s=t.e
if(s.r)return new C.bj("\ud83d\udca7 Water is leaking at: "+v+". First turn the main water OFF: pick Hand and tap the main valve.","hand","main")
return new C.bj("\ud83d\udca7 It leaked at: "+v+". Pick the Wrench and tap it to tighten the joint. Then turn the water ON again to test.","wrench",s.x.gI(0))}if(!s.ga3w()){u=t.c4X()
if(u==null)return B.eTT
if(u.f&&t.e.r)return B.eTr
s=u.b
w=B.aFG.h(0,s)
if(w==null)w=s
return new C.bj("Next: pick "+w+" from the tray, then tap "+u.c.toLowerCase()+" (the glowing spot). "+u.e,s,u.a)}s=t.e.c
s===$&&C.c()
s=s.c
w=C.T(s).k("Z<1>")
v=C.C(new C.Z(s,new A.emv(t),w),w.k("K.E"))
if(v.length!==0)return new C.bj("Everything is fitted. Now tighten each joint: pick the Wrench and tap "+D.d.gI(v).c.toLowerCase()+".","wrench",D.d.gI(v).a)
if(!t.e.r)return B.eSp
return B.eUh},
cvP(){var w,v,u,t,s=this,r={}
r.a=r.b=null
w=s.aUQ()
r.b=w.b
r.a=w.c
s.m(new A.emF(r,s))
v=r.a
if(v!=null){if(v==="main")u=9400
else{v=s.e
v===$&&C.c()
v=v.c
v===$&&C.c()
u=9100+D.d.bg(v.c,new A.emG(r))}r=s.r
r===$&&C.c()
t=r.b.h(0,u)
if(t!=null)s.f.hQ(70,0.3,t.c,-0.2)
s.m(new A.emH(s,u))}s.axo(w.a,!0)},
axn(d,e,f){var w,v=null,u=this.x===d,t=u?D.aD.j(0.25):D.c.j(0.07),s=C.m(14),r=u?D.aD:D.aZ
r=C.J(r,D.r,u?2:1)
w=C.X(f,u?D.aD:D.ae,v,v,v,19)
return new C.D(E.tW,C.aB(v,C.p(v,C.B(C.a([w,D.bn,C.d(e,v,v,v,v,v,v,C.l(v,v,u?D.aD:D.c,v,v,v,v,v,v,v,v,12.5,v,v,D.H,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),D.m,v,D.e,D.j,0,v,v),D.f,v,v,new C.o(t,v,r,s,v,v,D.n),v,v,v,v,D.fL,v,v,v),D.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new A.emp(this,u,d),v,v,v,v,v,v,!1,D.a5),v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.e
h===$&&C.c()
h=h.c
h===$&&C.c()
h=h.c
w=new C.Z(h,new A.emK(j),C.T(h).k("Z<1>")).gL(0)
h=j.e.c
h===$&&C.c()
v=j.r
v===$&&C.c()
u=j.y
t=j.z
s=j.Q
r=u!==0?v.b.h(0,u):i
v=A.XZ(!1,i,j.f,new A.emL(j),i,s,u,r,i,new A.emM(),t,i,i,j.gc7r(),j.gc7s(),v,!1,i,i,i)
t=x.p
r=C.a([],t)
if(!j.e.b){u=D.aQ.j(0.12)
s=C.m(12)
q=C.J(D.aQ.j(0.6),D.r,1)
r.push(C.p(i,C.B(C.a([C.E(C.d("\ud83d\udc49 "+j.aUQ().a,i,4,D.a2,i,i,i,B.fs1,i,i,i),1),D.bn,C.bI(B.fvG,j.gcvO(),C.bp(i,i,i,i,i,B.f2S,D.l1,i,i,i,i,i))],t),D.m,i,D.e,D.j,0,i,i),D.f,i,i,new C.o(u,i,q,s,i,i,D.n),i,i,i,D.eG,D.ZN,i,i,1/0))}if(j.x.length!==0&&j.b6C().length!==0){u=C.a([],t)
for(s=j.b6C(),q=s.length,p=0;p<s.length;s.length===q||(0,C.M)(s),++p){o={}
n=s[p]
o.a=null
o.a=n.a
m=new C.aQ(12,12)
l=new C.ay(D.b1,1,D.r,-1)
u.push(C.aB(i,C.p(i,new C.y("\ud83d\udccd "+n.b,i,D.oA,i,i,i,i,i,i,i,i,i),D.f,i,i,new C.o(D.eV.j(0.35),i,new C.bK(l,l,l,l),new C.bk(m,m,m,m),i,i,D.n),i,i,i,i,B.ZO,i,i,i),D.y,!1,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,new A.emN(o,j),i,i,i,i,i,i,!1,D.a5))}r.push(new C.D(D.eG,C.bW(D.bE,u,D.bq,i,6,6),i))}u=j.e
if(u.b)u="Practice mode: no hints. Build it in the right order."
else if(u.ga3w())u="Everything is fitted. Tighten every joint, then turn the main water on to test."
else{u=j.e.c
u===$&&C.c()
u="Job: "+u.d}r.push(new C.bM(D.a4,i,i,C.d(u,i,2,D.a2,i,i,i,B.aS9,i,i,i),i))
r.push(D.O)
t=C.a([j.axn("hand","Hand",B.aok),j.axn("wrench","Wrench",D.p5)],t)
for(u=j.gcCz(),s=u.length,p=0;p<u.length;u.length===s||(0,C.M)(u),++p){k=u[p]
q=B.aFG.h(0,k)
q.toString
t.push(j.axn(k,q,Ac.anN))}r.push(new C.a7(i,52,C.ct(t,i,i,i,i,D.aN,!1),i))
return A.TU(D.aQ,new A.emO(j,d),C.x(r,D.m,i,D.e,D.Q,0,D.p),v,""+w+"/"+h.c.length+" fitted","Plumbing job: "+h.b,i)},
c1k(d){return C.bU(E.lw,null,new A.emA(this),d,!0,!0,!0,D.k_,!1,!1,x.H)}}
A.z3.prototype={}
A.ot.prototype={}
A.XL.prototype={}
A.avA.prototype={}
A.aU7.prototype={}
A.eB.prototype={
gjM(){return this.a}}
A.Xz.prototype={
ckA(d,e,f){var w,v,u,t,s=this,r=null,q="outlet",p="switch",o=new C.e9()
o.d3(s.a)
w=d==null?o.au(3):d
v=C.a([0,1,2],x.t)
D.d.dY(v,o)
u=3+o.au(2)
switch(w){case 0:t=e==null?"Living room":e
s.c!==$&&C.aP()
s.c=t
t=C.a([new A.ot(v[0],q,r),new A.ot(v[1],q,r),new A.ot(5,"light",u),new A.ot(u,p,r)],x.F)
s.d!==$&&C.aP()
s.d=t
break
case 1:t=e==null?"Bedroom":e
s.c!==$&&C.aP()
s.c=t
t=C.a([new A.ot(v[0],q,r),new A.ot(v[1],q,r),new A.ot(6,"fan",u),new A.ot(u,p,r)],x.F)
s.d!==$&&C.aP()
s.d=t
break
default:t=e==null?"Kitchen":e
s.c!==$&&C.aP()
s.c=t
t=C.a([new A.ot(v[0],"gfci",r),new A.ot(v[1],"gfci",r),new A.ot(5,"light",u),new A.ot(u,p,r)],x.F)
s.d!==$&&C.aP()
s.d=t}if(f){t[1]=new A.ot(t[1].a,B.dj5[o.au(5)],r)
t=s.d
t===$&&C.c()
t[3]=new A.ot(t[3].a,B.dkH[o.au(5)],r)}},
ganf(){var w,v,u=C.aY(x.S),t=this.d
t===$&&C.c()
w=t.length
v=0
for(;v<t.length;t.length===w||(0,C.M)(t),++v)u.M(0,t[v].a)
return u},
cUp(d){var w,v,u,t=this.d
t===$&&C.c()
w=t.length
v=0
for(;v<w;++v){u=t[v]
if(u.a===d)return u}return null},
fS(d){++this.f
return new A.eB(!1,d,!1,"")},
alW(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.d
g===$&&C.c()
w=g.length
v=h.x
u=0
for(;u<g.length;g.length===w||(0,C.M)(g),++u){t=g[u].a
s=A.jX(t)
if(s.e==="fan")r="fan"
else r=s.c?"ceiling":"wall"
v.n(0,t,r)}g=C.a([],x.t)
for(q=0;q<$.H7().length;++q)g.push(q)
h.y.v(0,g)
h.z.v(0,h.ganf())
for(g=h.Q,w=x.S,u=0;u<3;++u){p=B.op[u]
v=C.aY(w)
t=C.aY(w)
o=new A.avA(v,t)
o.d=o.e=o.a=!0
for(r=h.aqf(p),n=r.length,m=0;m<r.length;r.length===n||(0,C.M)(r),++m)for(l=r[m]*10,k=0;k<6;++k)t.M(0,l+k)
for(t=h.ganf(),r=C.a6(t),n=new C.mk(t,t.r,r.k("mk<1>")),n.c=t.e,r=r.c,t=p+48;n.C();){l=n.d
if(l==null)l=r.a(l)
s=A.jX(l)
if(!s.c){j=s.d.a
j=j>=p&&j<=t}else j=!1
if(j)v.M(0,l)}g.n(0,p,o)}for(g=h.as,u=0;u<2;++u){i=g[u]
i.a=!0
i.b=3
i.d=i.c=!0}},
cIm(){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=k.d
j===$&&C.c()
w=j.length
v=0
for(;v<j.length;j.length===w||(0,C.M)(j),++v){u=j[v]
k.bfX(u.a,u.b)}for(w=j.length,t=x.S,s=x.N,r=k.at,v=0;v<j.length;j.length===w||(0,C.M)(j),++v){q=j[v].a
p=r.h(0,q)
if(p==null)continue
o=p.a
n=A.t1(o)
if(n.w.length!==0)m=n.z
else{A:{if("outlet"===o){o=C.G([25,"ground",23,"white",21,"black"],t,s)
break A}if("gfci"===o){o=C.G([25,"ground",24,"white",22,"black"],t,s)
break A}if("switch"===o){o=C.G([25,"ground",21,"blackLine",22,"blackLoad"],t,s)
break A}o=C.G([53,"ground",52,"white",51,"black"],t,s)
break A}m=o}for(o=m.gdV(m),o=o.gaf(o);o.C();){l=o.gR(o)
k.bei(q,l.b,l.a)}k.bif(q)
k.bd6(q)}if(!k.ax)k.aIW()
for(w=j.length,v=0;v<j.length;j.length===w||(0,C.M)(j),++v){u=j[v]
if(D.d.t(B.lH,u.b)){t=u.a
k.bhY(t,"lamp")
k.bjB(t)}}for(j=D.d.gaf(j),w=new C.f5(j,new A.cqS());w.C();){t=j.gR(0).a
k.aFz(t)
k.aFz(t)}},
aLo(d){var w,v,u=A.jX(d).d.a,t=C.a([],x.t)
for(w=0;v=$.H7(),w<v.length;++w){v=v[w]
if(v>u&&v<64)t.push(w)}return t},
cSi(d,e){var w,v,u=this,t=u.x
if(t.aj(0,d))return u.fS("There is already a box at "+A.jX(d).b+".")
w=A.jX(d)
v=w.c
if(!v&&e!=="wall")return u.fS("That is a ceiling box. On the wall you use a plain wall box (the blue one with ears).")
if(v&&e==="wall")return u.fS("A wall box cannot go in the ceiling. Use a round ceiling box.")
if(w.e==="fan"&&e!=="fan"){if(!u.b)return u.fS('A fan is heavy and it shakes. It needs a box that says "fan rated". A plain ceiling box can let the fan fall.')
t.n(0,d,e);++u.f
return B.aZf}t.n(0,d,e)
t=v?"ceiling joist":"side of the stud"
return new A.eB(!0,w.b+": box fixed to the "+t+".",!1,"")},
cMR(d){var w,v=this
if(d<0||d>=$.H7().length)return B.aZ9
w=v.y
if(w.t(0,d))return v.fS("That stud already has a hole.")
if(v.x.a===0)return v.fS("Mount the boxes first. Then you know where the cable has to go and which studs need a hole.")
w.M(0,d)
return B.aYU},
cVu(d){var w,v,u,t,s=this,r=A.jX(d)
if(!s.x.aj(0,d))return s.fS("There is no box at "+r.b+". Mount the box first, then pull the cable to it.")
w=s.z
if(w.t(0,d))return s.fS("The cable is already there.")
v=s.aLo(d)
u=C.T(v).k("Z<1>")
t=C.C(new C.Z(v,new A.cqZ(s),u),u.k("K.E"))
if(t.length!==0){w=D.o.V($.H7()[D.d.gI(t)])
v=t.length
u=v===1?"it":"the studs"
return s.fS("The cable is stuck: the stud at "+w+" inches has no hole. Drill "+u+" first ("+v+" left on the way).")}w.M(0,d)
return new A.eB(!0,"Cable pulled from the panel to "+r.b+", through the studs and along the ceiling.",!1,"")},
gaIN(){return this.ganf().d5(0,new A.cr_(this))},
apV(d){var w,v,u,t
for(w=this.Q,w=new C.cH(w,C.a6(w).k("cH<1,2>")).gaf(0);w.C();){v=w.d
u=v.b
if(u.a){t=v.a
t=d>=t&&d<=t+48}else t=!1
if(t)return u}return null},
cPC(d){var w,v,u=this
if(!u.gaIN())return u.fS("Finish the rough-in first. The cable and the boxes must be in before the drywall hides the studs.")
if(!D.d.t(B.a4O,d))return B.aYI
if(!D.d.t(B.op,d))return u.fS("The edge of the sheet would land between two studs. The sheet needs a stud under every edge, so there is nothing to screw it to. Start at the left corner (a stud) and move one sheet width (48 inches) at a time.")
w=u.Q
v=w.h(0,d)
if((v==null?null:v.a)===!0)return u.fS("There is already a sheet there.")
v=w.h(0,d)
if(v==null){v=x.S
v=new A.avA(C.aY(v),C.aY(v))}v.a=!0
w.n(0,d,v)
return B.aYT},
aqf(d){var w,v,u,t=C.a([],x.t)
for(w=d+48,v=0;u=$.H7(),v<u.length;++v){u=u[v]
if(u>=d&&u<=w)t.push(v)}return t},
cLM(d){var w,v,u=this,t=A.jX(d)
if(t.c)return u.fS("Ceiling fixtures do not need an opening in the wall.")
if(!u.x.aj(0,d))return u.fS("There is no box at "+t.b+".")
w=u.apV(t.d.a)
if(w==null)return u.fS("There is no sheet over this box yet. Hang the sheet first, then cut the opening.")
v=w.b
if(v.t(0,d))return u.fS("The opening is already cut.")
v.M(0,d)
return B.aZ2},
aKD(d,e,f){var w,v,u,t,s,r=this
if(f)return r.fS("Missed the stud! There is only air behind the sheet here. The screw would pull through the paper. Screw only where a stud is behind the sheet (every 16 inches).")
w=x.dD
v=C.C(new C.Z(B.op,new A.cr0(r,d),w),w.k("K.E"))
if(v.length===0)return r.fS("There is no sheet here yet.")
u=d*10+e
if(D.d.d5(v,new A.cr1(r,u)))return r.fS("There is already a screw there.")
for(w=v.length,t=r.Q,s=0;s<v.length;v.length===w||(0,C.M)(v),++s)t.h(0,v[s]).c.M(0,u)
return B.aZ4},
bnJ(d,e){return this.aKD(d,e,!1)},
bpi(d){var w=this.Q.h(0,d)
if(w==null||!w.a)return!1
return D.d.d5(this.aqf(d),new A.cr3(w))},
gaD7(){return D.d.d5(B.op,new A.cqR(this))},
gaD6(){var w=this.ganf()
return new C.Z(w,new A.cqP(),C.a6(w).k("Z<cr.E>")).d5(0,new A.cqQ(this))},
cXm(d){var w,v=this
if(!v.gaD7())return v.fS("Hang all the sheets first.")
if(!D.d.d5(B.op,v.gapW()))return v.fS("Finish screwing every sheet to the studs first. Tape goes on a solid wall.")
w=v.as[d]
if(w.a)return v.fS("This seam already has tape.")
w.c=w.a=!0
return B.aYM},
cSl(d){var w,v=this,u=v.as[d]
if(!u.a)return v.fS("Tape first. The mud goes over the tape.")
if(!u.c)return v.fS("The last coat is still wet. Let it dry before the next coat.")
w=u.b
if(w>=3)return v.fS("Three coats are enough. Now sand it.");++w
u.b=w
u.c=!1
return new A.eB(!0,"Coat "+w+" of joint compound spread. Let it dry.",!1,"")},
cRe(){var w,v=this.as
if(D.d.d5(v,new A.cqX()))return B.aZ_
for(w=0;w<2;++w)v[w].c=!0
return B.aZd},
bnv(d){var w=this,v=w.as[d]
if(v.b<3)return w.fS("Put on all three coats of mud first. Sanding now would just rub off the tape.")
if(!v.c)return w.fS("The mud is still wet. Let it dry first.")
if(v.d)return w.fS("Already sanded.")
v.d=!0
return B.aYJ},
cUE(d){var w=this,v=w.Q.h(0,d)
if(v==null||!v.a)return w.fS("There is no sheet there.")
if(!w.gaD6())return w.fS("Cut the openings for the boxes before you paint. Otherwise the paint covers the boxes.")
if(!D.d.d5(w.as,new A.cqY()))return w.fS("Sand the seams first. Paint shows every bump.")
if(v.e)return w.fS("This sheet is already painted.")
v.e=!0
return B.aYF},
gwD(){var w=this
return w.gaD7()&&D.d.d5(B.op,w.gapW())&&w.gaD6()&&D.d.d5(w.as,new A.cqT())&&D.d.d5(B.op,new A.cqU(w))},
Nz(){var w,v
for(w=this.at,w=new C.dq(w,w.r,w.e);w.C();){v=w.d.b
v.a=this.ax&&!this.ay}},
c0z(d,e){if(d.c)return e==="light"||e==="fan"?"":"A ceiling box holds a light or a fan, not an outlet or a switch."
return D.d.t(B.lH,e)||D.d.t(B.jT,e)?"":"A light or a fan hangs from the ceiling. A wall box holds an outlet, a GFCI or a switch."},
bfX(d,e){var w,v,u,t,s,r=this,q=A.jX(d)
if(!r.gwD())return r.fS("Finish the drywall first. Devices go in after the walls are painted.")
w=r.x
if(!w.aj(0,d)||!r.z.t(0,d))return r.fS("There is no box with cable at "+q.b+".")
v=r.at
if(v.aj(0,d))return r.fS("There is already a device there. Pull it out first if you want to move it.")
u=r.c0z(q,e)
if(u.length!==0)return r.fS(u)
if(!(D.d.t(B.jT,e)&&q.e==="low"))t=!D.d.t(B.jT,e)&&!q.c&&q.e==="switch"
else t=!0
if(t){if(!r.b)return r.fS(D.d.t(B.jT,e)?"A switch goes about 48 inches from the floor, where a hand falls naturally. This box is down at outlet height.":"Outlets go low, about 16 inches from the floor. This box is up at switch height.");++r.f
r.cy.push("Wrong height at "+q.b+".")}t=e==="fan"
if(t&&w.h(0,d)!=="fan")if(!r.b)return r.fS("This box is not fan rated. A fan on it can fall. Take the box out and put in a fan-rated one.")
s=new A.Cv(C.U(x.S,x.N))
s.r=r.b
s.y=r.dx
s.x=!(t&&w.h(0,d)!=="fan")
s.a=r.ax&&!r.ay
v.n(0,d,new A.aU7(e,s))
if(e==="light")w="Light fixture"
else if(t)w="Ceiling fan"
else if(e==="gfci")w="GFCI outlet"
else w=e==="switch"?"Switch":A.agC(e)
return new A.eB(!0,w+" is held up to "+q.b+". Turn the breaker OFF, then wire it.",!1,"")},
biB(d){var w=this,v=w.at,u=v.h(0,d)
if(u==null)return B.aYQ
if(w.ax&&!w.ay&&!u.b.w){if(w.b)return w.a2c()
return w.a2r()}v.W(0,d)
w.CW.W(0,d)
w.cx.W(0,d)
w.ch.W(0,d)
return B.aZ7},
a2r(){++this.r;++this.f
return B.aZ5},
a2c(){var w,v,u=this;++u.r;--u.e
u.ax=!1
u.Nz()
w=u.e
if(w<=0){u.w=!0
return B.aYP}v=w===1?"life":"lives"
return new A.eB(!1,"ZAP! You touched a live wire and got a shock. The breaker is now off. "+w+" "+v+" left. Always turn the breaker OFF and test the wires first.",!0,"shock")},
bei(d,e,f){var w,v,u,t,s=this,r=s.at.h(0,d)
if(r==null)return B.abq
s.Nz()
w=A.t1(r.a)
v=D.d.h_(w.f,new A.cqV(f))
u=A.htL(w,r.b,e,v,!0)
t=u==null
if(t&&s.dx)return B.aYH
if(t){if(!s.b&&!v.c.t(0,e)){++s.f
return new A.eB(!0,v.b+": fastened. Careful: "+C.w(w.r.$2(e,v))+" It will burn or trip the breaker when the power comes on.",!0,"")}return new A.eB(!0,v.b+": wire fastened.",!1,"")}if(D.a.a0(u,"SHOCK"))return s.a2c()
if(D.a.a0(u,"STOP"))return s.a2r();++s.f
return new A.eB(!1,u,!1,"")},
bjz(d,e){var w,v=this,u=v.at.h(0,d)
if(u==null)return B.W6
v.Nz()
w=u.b
if(w.a&&w.c===0){if(v.b)return v.a2c()
return v.a2r()}w=w.b
w.bu(w,new A.cr4(e))
return B.aZc},
bif(d){var w,v,u=this,t=u.at.h(0,d)
if(t==null)return B.abq
w=A.t1(t.a)
v=t.b
if(!A.bEg(w,v))return u.fS("Every wire must be fastened first.")
if(u.ax&&!u.ay){if(u.b)return u.a2c()
return u.a2r()}v.c=1
return B.aYY},
bid(d){var w,v=this,u=v.at.h(0,d)
if(u==null)return B.W6
if(v.ax&&!v.ay){if(v.b)return v.a2c()
return v.a2r()}w=u.b
w.c=0
w.d=!1
return B.aZ3},
bd6(d){var w=this.at.h(0,d)
if(w==null||w.b.c!==1)return this.fS("Push the device into the box first.")
w.b.c=2
return B.aZ6},
cXn(){var w,v,u,t,s,r,q,p,o,n=C.a([],x.fJ),m=this.d
m===$&&C.c()
w=m.length
v=this.at
u=0
for(;u<m.length;m.length===w||(0,C.M)(m),++u){t=m[u]
s=t.a
r=v.h(0,s)
q=t.b
p=A.t1(q)
o=A.jX(s).b+": "+p.b
if(r==null||r.a!==q){n.push(new A.aaV(o,A.fLW(p),B.dfa,!0))
continue}s=A.fLW(p)
q=r.b
n.push(new A.aaV(o,s,A.h3p(p,q),q.x))}return n},
cXo(){var w,v,u,t,s,r=C.aY(x.N),q=this.d
q===$&&C.c()
w=q.length
v=0
for(;v<q.length;q.length===w||(0,C.M)(q),++v)r.M(0,q[v].b)
q=C.a([],x.W)
for(r=C.eo(r,r.r,r.$ti.c),w=r.$ti.c;r.C();){u=r.d
u=B.aFU.h(0,u==null?w.a(u):u)
if(u==null)u=B.azb
t=C.T(u)
s=new C.jx(u,0,2,t.k("jx<1>"))
s.pd(u,0,2,t.c)
D.d.v(q,s)}return q},
ap4(d){var w=this.at
return A.L4(A.t1(w.h(0,d).a),w.h(0,d).b)},
aIW(){var w=this
if(w.ay){w.ax=w.ay=!1
w.Nz()
return B.aYW}w.ax=!w.ax
w.Nz()
if(!w.ax)return B.aYO
return w.c7u()},
c7u(){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=C.a([],x.s),i=k.db
i.a8(0)
for(w=k.at,v=new C.cH(w,C.a6(w).k("cH<1,2>")).gaf(0),u=k.cx,t=!1,s=!1,r=!1;v.C();){q=v.d
p=q.b.b
if(p.c===0)continue
o=q.a
n=A.L4(A.t1(w.h(0,o).a),w.h(0,o).b)
p.d=p.c>=2
m=n.r
if(m!=="none"){i.n(0,o,m)
p.z=m
r=!0}if(n.d)t=!0
if(n.e){p.w=!0
u.M(0,o)
s=!0}if(n.a!=="ok"&&!k.dx)j.push(A.jX(o).b+": "+n.b)}if(t){k.ay=!0
k.Nz()
l=s?"BANG! Sparks, smoke and flames. ":"Snap! "
i=k.dx?"The breaker tripped.":l+" The breaker tripped. "+D.d.aH(j," ")+" Fix it, then flip the breaker OFF and ON again."
return new A.eB(!1,i,!0,s?"burn":"trip")}if(r)return new A.eB(!1,k.dx?"Power is on.":"Power is on, and something is wrong. "+D.d.aH(j," "),!0,"arc")
if(j.length!==0)return new A.eB(!0,"Power is on. "+D.d.aH(j," "),!0,"")
return B.aZ0},
aFz(d){var w,v,u,t,s,r,q=this,p=q.at,o=p.h(0,d)
if(o==null||!D.d.t(B.jT,o.a)||o.b.c<2)return B.aZb
w=q.ch
if(w.t(0,d))w.W(0,d)
else w.M(0,d)
v=q.d
v===$&&C.c()
u=C.T(v).k("Z<1>")
t=C.C(new C.Z(v,new A.cqW(d),u),u.k("K.E"))
if(t.length===0)return B.aYX
s=D.d.gI(t)
v=s.a
r=q.an2(v)
if(w.t(0,d)&&r){p=p.h(0,v)
if(p!=null)p.c=!0
return new A.eB(!0,(s.b==="fan"?"The fan spins":"The light turns on")+". The switch works.",!1,"")}if(w.t(0,d)){p=s.b
return new A.eB(!1,(p==="fan"?"The fan":"The light")+" did not come on. Check the breaker and the wires on the switch and on the "+p+".",!1,"")}return B.aZa},
a4s(d){var w,v=this.at.h(0,d)
if(v!=null){w=v.b
w=w.c<2||w.w}else w=!0
if(w)return!1
return this.ap4(d).c},
an2(d){var w=this,v=w.cUp(d),u=v==null,t=u?null:v.c,s=!0
if(!u)if(t!=null)u=!(w.ax&&!w.ay)||!w.a4s(d)||!w.a4s(t)
else u=s
else u=s
if(u)return!1
return w.ch.t(0,t)},
bhY(d,e){var w,v,u,t=this,s="Nothing happens.",r=t.at.h(0,d)
if(r==null||!D.d.t(B.lH,r.a)||r.b.c<2)return t.fS("There is no finished outlet there to plug into.")
w=t.CW
if(w.aj(0,d))return t.fS("Something is already plugged in.")
w.n(0,d,e)
w=r.b
if(w.w)return B.aYR
v=t.ap4(d)
if(t.ax&&!t.ay&&t.a4s(d)){r.c=!0
if(v.a!=="ok"){w=t.dx
u=w?A.cqO(e)+" runs.":A.cqO(e)+" runs, but this outlet is NOT safe. "+v.b
return new A.eB(!0,u,!w,"")}return new A.eB(!0,A.cqO(e)+" runs. The outlet works.",!1,"")}if(!(t.ax&&!t.ay))return B.aYV
u=v.r
if(u!=="none"){t.db.n(0,d,u)
w.z=u
w=t.dx?s:A.cqO(e)+" does not run. "+v.b
return new A.eB(!1,w,!0,u==="fire"?"burn":"arc")}return new A.eB(!1,t.dx?s:"Nothing happens. "+v.b,!0,"")},
bjB(d){if(this.CW.W(0,d)==null)return B.W6
return B.aYN},
bhI(d){var w,v=this
if(d>=0){w=v.d
w===$&&C.c()
w=d>=w.length}else w=!0
if(w)return 2
if(v.te(d))return 2
w=v.d
w===$&&C.c()
return v.at.h(0,w[d].a)==null?0:1},
te(d){var w,v,u,t=this
if(d>=0){w=t.d
w===$&&C.c()
w=d>=w.length}else w=!0
if(w)return!0
w=t.d
w===$&&C.c()
v=w[d]
w=v.a
u=t.at.h(0,w)
if(u==null||!A.h_g(v.b,u.a)||u.b.c<2)return!1
return t.ap4(w).a==="ok"},
gbk1(){var w,v,u,t,s,r,q,p,o,n=this.d
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
if(q!==p)if(!(D.d.t(B.lH,q)&&D.d.t(B.lH,p)))if(!(D.d.t(B.jT,q)&&D.d.t(B.jT,p)))if(q==="light"||q==="fan")q=p==="light"||p==="fan"
else q=!1
else q=o
else q=o
else q=o
q=!q||r.b.c<2}else q=!0
if(q)return!1
if(A.L4(A.t1(v.h(0,s).a),v.h(0,s).b).a!=="ok")return!1}return!0},
gbdB(){var w,v,u,t,s,r,q,p,o,n=this.d
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
if(q!==p)if(!(D.d.t(B.lH,q)&&D.d.t(B.lH,p)))if(!(D.d.t(B.jT,q)&&D.d.t(B.jT,p)))if(q==="light"||q==="fan")q=p==="light"||p==="fan"
else q=!1
else q=o
else q=o
else q=o
q=!q||r.b.c<2}else q=!0
if(q)return!1
if(A.L4(A.t1(v.h(0,s).a),v.h(0,s).b).a!=="ok")return!1
s=t.b
if(D.d.t(B.lH,s)){if(!r.c)return!1}else if(!D.d.t(B.jT,s)&&!r.c)return!1}return!0}}
A.iV.prototype={}
A.Ob.prototype={
U(){var w,v=new A.xa(-0.12,0.4,205,B.aaj,$.ax())
v.f=300
v.z=0.7
v.w=0.05
w=new C.y7()
$.yT()
w.h9(0)
return new A.aEM(v,w,C.U(x.S,x.i))}}
A.aEM.prototype={
gCS(d){var w=this.e
if(w===$){this.a.toString
w=D.o.F(Date.now(),1e5)
this.e=w}return w},
a_(){var w,v,u=this
u.a2()
w=u.a.e
if(w==null){w=u.gCS(0)
u.a.toString
w=A.cqN(null,null,!1,w,!0)}u.d=w
v=u.a
if(v.c)w.dx=!0
if(v.e!=null&&w.gwD())u.y=2
if(u.a.f){u.d.alW()
u.y=2}u.r=A.wP(u.d,new A.rI(u.z,u.Q,!1))
w=u.f
w.y=0
w.z=1.1},
q(){var w=this.cy
if(w!=null)w.a4(0)
this.a3()},
c7D(){var w=this,v=w.d
v===$&&C.c()
w.r=A.wP(v,new A.rI(w.z,w.Q,!1))},
qB(d,e){var w=this,v=w.cy
if(v!=null)v.a4(0)
w.m(new A.erh(w,d,e))
w.cy=C.cL(D.ju,new A.eri(w))},
aef(d){return this.qB(d,!1)},
jA(d){var w,v,u,t,s,r,q,p,o=this,n=d.a
if(n)A.yG()
else A.fU(180,220,0.25,"square")
w=d.d
if(w==="shock"){C.fI()
o.m(new A.eqj(o))
C.bP(D.mB,new A.eqk(o),x.P)}v=w==="burn"
if(v||w==="trip"||w==="arc"){u=o.d
u===$&&C.c()
u=u.db
u=new C.hC(u,u.r,u.e)
t=o.x
s=o.w
while(u.C()){r=u.d
q=s.gil()
p=o.d.db.h(0,r)==="fire"?7:4.5
t.n(0,r,q/1000+p)}C.fI()
w=w==="arc"
u=w?95:150
t=w?500:300
A.fU(u,t,0.5,w?"saw":"noise")
if(v){o.m(new A.eql(o))
C.bP(D.eO,new A.eqm(o),x.P)}}w=o.d
w===$&&C.c()
o.r=A.wP(w,new A.rI(o.z,o.Q,!1))
n=n&&!d.c
o.qB(d.b,n)
if(o.d.w&&o.c!=null)$.aW.x1$.push(new A.eqn(o))
if(o.d.gbdB()&&!o.cx){o.cx=!0
$.aW.x1$.push(new A.eqo(o))}},
b48(){var w=this.ch?3.141592653589793:-0.12
this.f.hQ(205,0.4,B.aaj,w)},
c7x(d,e){var w,v,u,t,s
if(this.Q>=0)return
w=this.f
v=w.cYk(d,e)
if(v==null||Math.abs(v.a)>78||Math.abs(v.b)>52)v=w.beF(d,e,-47)
if(v==null)return
u=D.k.E(v.a,-70,70)
t=D.k.E(v.b,-46,48)
s=D.k.E(v.c,-6,100)
w.xf(Math.max(34,w.c*0.45),new A.r(u,t,s))
A.fU(560,50,0.25,"tri")},
aTK(){var w,v,u=this
u.ch=!1
w=u.f
w.w=0.05
w.z=0.7
w.r6(!1)
w.y=0
u.m(new A.eqy(u))
v=u.d
v===$&&C.c()
u.r=A.wP(v,new A.rI(u.z,u.Q,!1))
w.hQ(205,0.4,B.aaj,-0.12)},
c26(){var w,v,u=this
u.ch=!1
w=u.f
w.r6(!1)
w.w=-0.95
w.y=0
w.z=1
u.m(new A.eqA(u))
v=u.d
v===$&&C.c()
u.r=A.wP(v,new A.rI(u.z,u.Q,!1))
w.hQ(82,-0.55,B.fVP,-0.12)},
bDo(){var w,v,u,t,s=this,r=s.d
r===$&&C.c()
r=r.CW
w=C.a6(r).k("cH<1,2>")
v=w.k("Z<K.E>")
u=C.C(new C.Z(new C.cH(r,w),new A.eqp(),v),v.k("K.E"))
if(u.length===0){s.aef("Plug a TV into an outlet first. Then you can look behind it.")
return}t=A.jX(D.d.gI(u).a).d.a
s.ch=!1
r=s.f
r.r6(!1)
r.w=0.02
r.y=0
r.z=1.7
s.m(new A.eqq(s))
s.r=A.wP(s.d,new A.rI(s.z,s.Q,!1))
w=t<0?-1.4:1.4
r.hQ(60,0.12,new A.r(t,-30,14),w)
s.qB("This is the back of the TV. Tap the TV or its plug to pull the plug.",!0)},
bDm(){var w,v,u=this
u.ch=!0
w=u.f
w.r6(!0)
u.m(new A.eqr(u))
v=u.d
v===$&&C.c()
u.r=A.wP(v,new A.rI(u.z,u.Q,!1))
w.hQ(190,0.3,B.fWi,3.141592653589793)},
ZT(d,e){var w,v,u,t,s=this,r=A.jX(e),q=s.f
q.r6(!1)
q.y=0
s.m(new A.eqR(s,e))
w=s.d
w===$&&C.c()
s.r=A.wP(w,new A.rI(s.z,s.Q,!1))
v=A.ahT(r,B.fUg)
w=r.c
u=w?20:15
t=w?1.2:0.3
q.hQ(u,w?-0.12:0.26,v,t)},
aee(){var w,v=this
v.m(new A.eqz(v))
w=v.d
w===$&&C.c()
v.r=A.wP(w,new A.rI(v.z,v.Q,!1))
v.b48()},
c7B(d){var w,v,u,t,s,r,q,p=this
if(d===0){if(p.Q<0)p.m(new A.erd(p))
return}w=p.Q
if(w>=0)v=!(d>=5000&&d<5700)
else v=!1
if(v)return
if(d>=5000&&d<5700){v=d-5000
u=D.o.ao(v,100)
if(w!==u){if(p.z==="tester")p.aBO(u)
else{p.m(new A.ere(p))
p.ZT(0,u)}return}p.b1S(u,D.o.F(v,100))
return}if(d>=1000&&d<1010)if(p.z==="drill"){w=p.d
w===$&&C.c()
p.jA(w.cMR(d-1000))
return}if(d>=2000&&d<2007){p.b1U(d-2000)
return}if(d>=3000&&d<3007){p.b1T(d-3000)
return}if(d>=6000&&d<6005){if(p.z==="sheet"){w=p.d
w===$&&C.c()
p.jA(w.cPC(B.a4O[d-6000]))}return}if(d>=6100&&d<6103){t=B.op[d-6100]
if(p.z==="paint"){w=p.d
w===$&&C.c()
p.jA(w.cUE(t))
return}}if(d>=6200&&d<6202){s=d-6200
switch(p.z){case"tape":w=p.d
w===$&&C.c()
p.jA(w.cXm(s))
return
case"mud":w=p.d
w===$&&C.c()
p.jA(w.cSl(s))
return
case"sand":w=p.d
w===$&&C.c()
p.jA(w.bnv(s))
return}}if(d>=7000&&d<7100){if(p.z==="screw"){w=p.d
w===$&&C.c()
v=d-7000
p.jA(w.bnJ(D.o.ao(v,10),D.o.F(v,10)))}return}if(d>=7500&&d<7600){if(p.z==="screw"){w=p.d
w===$&&C.c()
v=d-7500
p.jA(w.aKD(D.o.ao(v,10),D.o.F(v,10),!0))}return}if(d===8000){w=p.d
w===$&&C.c()
p.jA(w.aIW())
return}if(d>=8200&&d<8207){w=p.d
w===$&&C.c()
p.jA(w.bjB(d-8200))
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
if(q!=null){p.m(new A.erf(p,d))
p.qB(q.a+": "+q.b,!0)}}},
b1U(d){var w,v,u,t=this,s=t.d
s===$&&C.c()
if(s.at.aj(0,d)){s=t.z
s=s!=="tester"&&s!=="look"&&!D.d.t(B.HV,s)}else s=!1
if(s){t.m(new A.erb(t))
t.ZT(0,d)
return}s=t.z
switch(s){case"wall":case"ceiling":case"fanbox":w=t.d
t.jA(w.cSi(d,s==="fanbox"?"fan":s))
return
case"cable":t.jA(t.d.cVu(d))
return
case"knife":t.jA(t.d.cLM(d))
return
case"outlet":case"gfci":case"switch":case"split":case"v240four":case"v240three":case"v240only":case"isolated":case"switch2p":case"switch3":case"switch4":case"switchsmart":case"switchcombo":case"light":case"fan":v=t.d.bfX(d,s)
t.jA(v)
if(v.a){s=t.d.at.h(0,d).b
w=t.d
s.f=!w.b&&!w.dx
t.z=""
t.ZT(0,d)}return
case"tester":t.aBO(d)
return}if(t.d.at.aj(0,d)){t.ZT(0,d)
return}if(t.d.gwD()&&t.d.x.aj(0,d)&&!t.d.at.aj(0,d)){t.qB("This box is empty. Pick what you want to put in (an outlet, a switch, a light or a fan) from the tray, then tap the box.",!0)
return}s=t.r
s===$&&C.c()
u=s.b.h(0,2000+d)
if(u!=null){t.m(new A.erc(t,d))
t.qB(u.a+": "+u.b,!0)}},
aBO(d){var w,v=this.d
v===$&&C.c()
w=v.ax&&!v.ay&&v.x.aj(0,d)&&this.d.z.t(0,d)
v=w?"The tester glows: this box is LIVE (120 volts). Turn the breaker OFF before you touch any wire.":"The tester stays dark: no power here. It is safe to work. (Test again after you turn the breaker off, every time.)"
this.qB(v,!w)
A.fU(w?1400:500,120,0.25,"tri")},
b1T(d){var w,v=this,u=v.d
u===$&&C.c()
w=u.at.h(0,d)
if(w==null)return
if(D.d.t(B.HV,v.z)){v.jA(v.d.bhY(d,v.z))
return}u=v.z
if(u==="tester"){v.aBO(d)
return}if(u==="flip"){if(D.d.t(B.jT,w.a)&&w.b.c>=2)v.jA(v.d.aFz(d))
else v.aef("Only a finished switch can be flipped.")
return}v.m(new A.era(v))
v.ZT(0,d)},
b1S(d,e){var w,v,u,t,s,r,q,p,o=this,n=o.d
n===$&&C.c()
w=n.at.h(0,d)
if(w==null)return
if(B.aPG.t(0,e))return
n=w.a
v=A.t1(n)
u=v.f
t=C.T(u).k("Z<1>")
s=C.C(new C.Z(u,new A.er2(e),t),t.k("K.E"))
r=A.htQ(n,e)
n=r!=null
if(n){u=w.b
u=u.b.iI(0,r)&&u.c===0}else u=!1
if(u){o.jA(o.d.bjz(d,r))
return}u=!1
if(s.length!==0){t=w.b
if(t.c===0){t=t.b
if(t.h(0,e)!=null)u=o.at.length===0||t.h(0,e)===o.at}}if(u){n=o.d
u=w.b.b.h(0,e)
u.toString
o.jA(n.bjz(d,u))
o.m(new A.er3(o))
return}if(n){n=w.b
n=n.c===0&&!n.b.iI(0,r)&&D.d.b5(v.e,new A.er4(r))}else n=!1
if(n){o.m(new A.er5(o,r,d,e))
if(o.at.length!==0)o.qB(D.d.h_(v.e,new A.er6(r)).b+": picked up. Now tap where it joins.",!0)
return}if(s.length!==0&&w.b.c===0){n=o.at
if(n.length===0){o.aef("Pick a wire below first, then tap "+D.d.gI(s).b+".")
o.m(new A.er7(o,d,e))
return}q=o.d.bei(d,n,e)
o.jA(q)
if(q.a)o.m(new A.er8(o))
return}n=o.r
n===$&&C.c()
p=n.b.h(0,5000+d*100+e)
if(p!=null){o.m(new A.er9(o,d,e))
o.qB(p.a+": "+p.b,!0)}},
c7E(){var w,v,u,t,s,r,q=this,p=C.a([],x.ek)
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
break A}u=D.d.t(B.lH,r)||D.d.t(B.jT,q.z)
if(u){u=!v.c&&q.d.x.aj(0,t)&&!s
break A}if("light"===r||"fan"===r){u=v.c&&q.d.x.aj(0,t)&&!s
break A}if("tv"===r||"lamp"===r||"toaster"===r||"hairdryer"===r){u=s&&D.d.t(B.lH,q.d.at.h(0,t).a)
break A}if("tester"===r){u=q.d.x.aj(0,t)
break A}u=!1
break A}if(u)p.push(new C.z(t,v.b))}return p},
cxu(){var w,v,u,t,s,r,q,p=null,o=this.c7E()
if(o.length===0)return D.bJ
w=C.a([],x.p)
for(v=o.length,u=0;u<o.length;o.length===v||(0,C.M)(o),++u){t={}
s=o[u]
t.a=null
t.a=s.a
r=new C.aQ(12,12)
q=new C.ay(D.b1,1,D.r,-1)
w.push(C.aB(p,C.p(p,new C.y("\ud83d\udccd "+s.b,p,D.oA,p,p,p,p,p,p,p,p,p),D.f,p,p,new C.o(D.eV.j(0.35),p,new C.bK(q,q,q,q),new C.bk(r,r,r,r),p,p,D.n),p,p,p,p,B.ZO,p,p,p),D.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new A.erj(t,this),p,p,p,p,p,p,!1,D.a5))}return new C.D(D.hX,C.bW(D.bE,w,D.bq,p,6,6),p)},
bPN(){var w=null,v=this.c
v.toString
C.cg(w,w,!1,w,new A.eqx(this),v,w,!0,!0,x.H)},
c7v(){var w=null,v=this.c
v.toString
C.cg(w,w,!0,w,new A.equ(this),v,w,!0,!0,x.H)},
axp(d){this.m(new A.eqB(this,d))
this.aTK()},
aZC(){return this.axp(!1)},
c7z(){var w,v,u,t,s,r,q,p,o,n=this,m=n.d
m===$&&C.c()
if(m.w)return"The job is over."
switch(n.y){case 0:m=m.d
m===$&&C.c()
w=C.T(m).k("Z<1>")
v=C.C(new C.Z(m,new A.eqC(n),w),w.k("K.E"))
if(v.length!==0){u=D.d.gI(v)
t=A.jX(u.a)
m=A.agC(u.b)
if(t.c)w=t.e==="fan"?"fan box":"ceiling box"
else w="wall box"
return"Mount a box at "+t.b+" ("+m.toLowerCase()+" goes here): pick a "+w+", then tap the glowing spot."}m=n.d.d
m===$&&C.c()
w=C.T(m).k("Z<1>")
s=C.C(new C.Z(m,new A.eqD(n),w),w.k("K.E"))
if(s.length!==0){t=D.d.gI(s).a
m=n.d.aLo(t)
r=new C.Z(m,new A.eqE(n),C.T(m).k("Z<1>")).gL(0)
return r>0?"The cable comes from the panel on the right. Pick the drill and tap each stud on the way to "+A.jX(t).b+" ("+r+" left).":"Pick the cable roll and tap "+A.jX(t).b+"."}return"Rough-in done! Open 2 Drywall."
case 1:if(!m.gaIN())return"Finish the rough-in first (tab 1). Drywall hides the wires."
if(!n.d.gaD7())return"Pick a drywall sheet and tap a stud edge to hang it. Three sheets cover the wall."
if(!n.d.gaD6())return"Pick the drywall saw and tap each box to cut its opening."
if(!D.d.d5(B.op,n.d.gapW()))return"Pick the screw gun and put a screw in every glowing spot on the studs."
if(D.d.b5(n.d.as,new A.eqH()))return"Pick the tape and tap each seam between two sheets."
if(D.d.b5(n.d.as,new A.eqI()))return D.d.b5(n.d.as,new A.eqJ())?'The mud is wet. Press "Let it dry", then the next coat.':"Pick the mud and tap each seam. It needs three coats, with drying in between."
if(D.d.b5(n.d.as,new A.eqK()))return D.d.b5(n.d.as,new A.eqL())?'Press "Let it dry", then sand.':"Pick the sander and tap each seam."
if(!n.d.gwD())return"Pick the roller and paint each sheet."
return"Drywall done! Open 3 Devices."
default:if(!m.gwD())return"Finish the drywall first (tab 2)."
m=n.d.d
m===$&&C.c()
w=C.T(m).k("Z<1>")
q=C.C(new C.Z(m,new A.eqM(n),w),w.k("K.E"))
if(q.length!==0){u=D.d.gI(q)
return"The breaker being on is not the end: the job is done only when every device is in and wired. Tap the blue square at "+A.jX(u.a).b+" to put in the "+A.agC(u.b).toLowerCase()+". ("+C.w(new A.eqP().$1(new C.N(q,new A.eqN(),C.T(q).k("N<1,H>"))))+" still need a device.)"}m=n.d.d
m===$&&C.c()
w=C.T(m).k("Z<1>")
p=C.C(new C.Z(m,new A.eqO(n),w),w.k("K.E"))
if(p.length!==0)return"Tap "+A.jX(D.d.gI(p).a).b+" to work on it: breaker OFF, wires, push in, cover on."
m=n.d
if(!m.ax)return"Turn the breaker ON (tap the panel or the breaker button) and test."
m=m.d
m===$&&C.c()
w=C.T(m).k("Z<1>")
o=C.C(new C.Z(m,new A.eqF(n),w),w.k("K.E"))
if(o.length!==0)return"Pick the TV or the lamp and plug it into "+A.jX(D.d.gI(o).a).b+" to test it."
m=n.d.d
m===$&&C.c()
return"Flip the wall switch to test the "+(D.d.b5(m,new A.eqG())?"fan":"light")+"."}},
B(a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=this,a2=null,a3=B.dpn[a1.y],a4=a1.Q
if(a4>=0){w=a1.d
w===$&&C.c()
v=w.at.h(0,a4)}else v=a2
a4=v==null
u=a4?a2:A.t1(v.a)
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
for(l=0;l<3;++l)m.push(new C.D(D.MZ,new C.y(l<a1.d.e?"\u2764\ufe0f":"\ud83d\udda4",a2,D.Ac,a2,a2,a2,a2,a2,a2,a2,a2,a2),a2))
m.push(D.bn)
k=a1.d
if(k.ay)k=D.kb
else{k=k.ax
k=k?D.ei:D.dZ}k=k.j(0.95)
j=C.m(16)
i=a1.d
h=i.ay
if(h)g=D.cT
else{g=i.ax
g=g?D.cs:D.bj}g=C.J(g,D.r,1.4)
if(h)i="TRIPPED: tap to reset"
else{i=i.ax
i=i?"Breaker ON":"Breaker OFF"}m.push(C.aB(a2,C.p(a2,C.d(i,a2,a2,a2,a2,a2,a2,B.fjv,a2,a2,a2),D.f,a2,a2,new C.o(k,a2,g,j,a2,a2,D.n),a2,a2,a2,a2,D.rk,a2,a2,a2),D.y,!1,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,new A.err(a1),a2,a2,a2,a2,a2,a2,!1,D.a5))
m=C.a([C.B(m,D.m,a2,D.e,D.Q,0,a2,a2)],n)
k=a1.ch
j=k?"In front":"Behind the wall"
i=k?G.anj:G.ani
k=C.a([A.wQ(j,D.bv,i,k,k?a1.gbRk():a1.gbDl()),D.am,A.wQ("Look up",D.b1,B.bML,!1,a1.gc25()),D.am,A.wQ("Behind the TV",D.cT,V.a1S,!1,a1.gbDn()),D.am],n)
if(!a4){j=v.b
D.d.v(k,C.a([A.wQ("Labels",D.aQ,N.C9,j.f,new A.ers(a1,v)),D.am,A.wQ("Hints",D.aD,D.rr,j.e,new A.ert(a1,v)),D.O],n))}s=A.XZ(!1,a2,a1.f,new A.erD(a1),a2,p,r,o,a2,a2,q,a2,a1.gc7w(),new A.erE(a1),a1.gc7A(),s,!1,a2,m,k)
r=C.a([],n)
if(a4){a4=C.a([],n)
for(l=0;l<3;++l){q=l<2?6:0
p=a1.y===l?D.aD.j(0.2):D.dt
o=new C.aQ(12,12)
f=new C.ay(a1.y===l?D.aD:D.bz,1,D.r,-1)
if(l===0)m=a1.d.gaIN()
else{m=a1.d
m=l===1?m.gwD():m.gbdB()}m=m?"\u2705 ":""
k=B.dnz[l]
j=a1.y===l?D.aD:D.ae
a4.push(new C.bA(1,D.bd,C.aB(a2,C.p(a2,new C.ck(D.A,a2,a2,new C.y(m+k,a2,new C.F(!0,j,a2,a2,a2,a2,12,D.u,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2),a2,a2,a2,a2,a2,a2,a2,a2,a2),a2),D.f,a2,a2,new C.o(p,a2,new C.bK(f,f,f,f),new C.bk(o,o,o,o),a2,a2,D.n),a2,a2,a2,new C.Q(0,0,q,0),A2.N1,a2,a2,a2),D.y,!1,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,new A.erF(a1,l),a2,a2,a2,a2,a2,a2,!1,D.a5),a2))}a4=C.a([C.B(a4,D.m,a2,D.e,D.j,0,a2,a2),D.am],n)
if(!a1.d.b){q=D.aQ.j(0.1)
p=C.m(10)
o=C.J(D.aQ.j(0.4),D.r,1)
a4.push(C.p(a2,C.d("\ud83d\udc49 "+a1.c7z(),a2,2,D.a2,a2,a2,a2,B.fl3,a2,a2,a2),D.f,a2,a2,new C.o(q,a2,o,p,a2,a2,D.n),a2,a2,a2,a2,D.cn,a2,a2,1/0))}else a4.push(B.fDx)
a4.push(D.am)
q=C.a([],n)
if(a1.y<2&&!a1.d.gwD())q.push(new C.D(E.tW,C.aB(a2,C.p(a2,B.b8B,D.f,a2,a2,new C.o(D.dH,a2,a2,C.m(14),a2,a2,D.n),a2,a2,a2,a2,D.fL,a2,a2,a2),D.y,!1,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,new A.erG(a1),a2,a2,a2,a2,a2,a2,!1,D.a5),a2))
for(p=a3.length,e=0;e<p;++e){d=a3[e]
o=d.a
m=a1.z===o?D.aD.j(0.25):D.c.j(0.07)
k=new C.aQ(14,14)
o=a1.z===o
j=o?D.aD:D.aZ
f=new C.ay(j,o?2:1,D.r,-1)
j=o?D.aD:D.ae
j=C.X(d.c,j,a2,a2,a2,19)
o=o?D.aD:D.c
q.push(new C.D(E.tW,C.aB(a2,C.p(a2,new C.cc(D.aN,D.e,D.j,D.m,a2,D.p,a2,0,C.a([j,D.bn,new C.y(d.b,a2,new C.F(!0,o,a2,a2,a2,a2,12.5,D.H,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2),a2,a2,a2,a2,a2,a2,a2,a2,a2)],n),a2),D.f,a2,a2,new C.o(m,a2,new C.bK(f,f,f,f),new C.bk(k,k,k,k),a2,a2,D.n),a2,a2,a2,a2,D.fL,a2,a2,a2),D.y,!1,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,new A.erH(a1,d),a2,a2,a2,a2,a2,a2,!1,D.a5),a2))}if(a1.y===1)q.push(new C.D(E.tW,C.aB(a2,C.p(a2,B.b8t,D.f,a2,a2,new C.o(D.dZ,a2,a2,C.m(14),a2,a2,D.n),a2,a2,a2,a2,D.fL,a2,a2,a2),D.y,!1,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,new A.erI(a1),a2,a2,a2,a2,a2,a2,!1,D.a5),a2))
a4.push(new C.a7(a2,52,C.ct(q,a2,a2,a2,a2,D.aN,!1),a2))
if(a1.z.length!==0)a4.push(a1.cxu())
D.d.v(r,a4)}else{a4=C.a([],n)
q=v.b
if(q.c===0)for(p=D.d.gaf(u.e),o=new C.f5(p,new A.erJ(v)),m=q.b;o.C();){k=p.gR(0)
j=k.c
i=new C.aQ(14,14)
h=a1.at
g=k.a
h=h===g
a0=h?D.b1:D.aZ
f=new C.ay(a0,h?3:1,D.r,-1)
a0=C.a([],n)
if(m.iI(0,g))a0.push(new C.D(D.N_,C.X(D.eb,k.d,a2,a2,a2,17),a2))
h=k.b
g=k.d
a0.push(new C.y(h,a2,new C.F(!0,g,a2,a2,a2,a2,12.5,D.u,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2),a2,a2,a2,a2,a2,a2,a2,a2,a2))
a4.push(C.aB(a2,C.p(a2,new C.cc(D.aN,D.e,D.Q,D.m,a2,D.p,a2,0,a0,a2),D.f,a2,a2,new C.o(j,a2,new C.bK(f,f,f,f),new C.bk(i,i,i,i),a2,a2,D.n),a2,a2,a2,a2,D.y8,a2,a2,a2),D.y,!1,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,new A.erK(a1,v,k),a2,a2,a2,a2,a2,a2,!1,D.a5))}a4=C.a([C.bW(D.bE,a4,D.bq,a2,6,8)],n)
if(q.c===0&&a1.at.length!==0){p=C.a([],n)
for(o=D.d.gaf(u.f),m=new C.f5(o,new A.eru(v));m.C();){k=o.gR(0)
j=D.eV.j(0.35)
i=new C.aQ(12,12)
f=new C.ay(D.b1,1,D.r,-1)
p.push(C.aB(a2,C.p(a2,new C.y("\u279c "+k.b,a2,D.oA,a2,a2,a2,a2,a2,a2,a2,a2,a2),D.f,a2,a2,new C.o(j,a2,new C.bK(f,f,f,f),new C.bk(i,i,i,i),a2,a2,D.n),a2,a2,a2,a2,B.ZO,a2,a2,a2),D.y,!1,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,new A.erv(a1,k),a2,a2,a2,a2,a2,a2,!1,D.a5))}a4.push(new C.D(D.jN,C.bW(D.bE,p,D.bq,a2,6,6),a2))}a4.push(D.O)
p=C.a([A.ua("Back to the room",D.l4,a1.gc7y(),D.ae),D.ac],n)
if(q.c===0){u.toString
o=A.bEg(u,q)?"Push it into the box":"Fasten every wire"
p.push(A.ua(o,B.aoq,A.bEg(u,q)?new A.erw(a1):a2,D.aD))}if(q.c===1)D.d.v(p,C.a([A.ua("Pull it out",D.rv,new A.erx(a1),D.ae),D.ac,A.ua("Cover on",Z.wa,new A.ery(a1),D.aD)],n))
o=q.c>=2
if(o&&q.w)p.push(A.ua("Take out the burnt one",B.anb,new A.erz(a1),D.cs))
else if(o)p.push(A.ua("Pull it out of the wall",B.anb,new A.erA(a1),D.ae))
a4.push(C.B(p,D.m,a2,D.e,D.j,0,a2,a2))
if(!q.w)D.d.v(a4,C.a([D.O,C.B(C.a([A.ua("Take it out and put in a different "+(D.d.t(B.jT,v.a)?"switch":"one"),D.kh,new A.erB(a1,v),D.aQ)],n),D.m,a2,D.e,D.j,0,a2,a2)],n))
D.d.v(r,a4)}a4=C.a([A.TU(D.aD,new A.erC(a1,a5),C.x(r,D.m,a2,D.e,D.Q,0,D.p),s,"Phase "+(w+1)+"/3",t+" job",a2)],n)
if(a1.CW)a4.push(C.bT(0,C.e2(C.p(a2,a2,D.f,B.ahB,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2),!0,a2),0,0,0))
return new C.an(D.a_,a2,D.aa,D.t,a4,a2)},
cr5(d){var w=this.d
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
cgd(d){return C.bU(E.lw,null,new A.er1(this,d),d,!0,!0,!0,D.k_,!1,!1,x.H)}}
A.rI.prototype={}
A.rf.prototype={
a5(){return"FaultKind."+this.b}}
A.uu.prototype={}
A.Mo.prototype={}
A.cud.prototype={
bzm(d,e,f){var w,v,u,t,s,r,q,p=this,o=new C.e9()
o.d3(p.a)
w=C.C(B.dcw,x.eP)
D.d.dY(w,o)
v=C.aY(x.S)
u=C.a([],x.gw)
for(t=w.length,s=0;s<w.length;w.length===t||(0,C.M)(w),++s){r=w[s]
q=B.wy.h(0,r).e
if(v.t(0,q))continue
v.M(0,q)
u.push(new A.Mo(r,o.au(3)))
if(u.length>=d)break}p.c!==$&&C.aP()
p.c=u
p.axq()},
pW(d,e){var w=this.c
w===$&&C.c()
return D.d.b5(w,new A.cui(e))},
axq(){var w,v,u,t,s=this,r=s.d,q=r.d
q.a8(0)
if(s.pW(0,B.a09))q.M(0,72)
if(s.pW(0,B.a0a))q.M(0,75)
q=s.pW(0,B.NF)
r.b=q
r.c=!q
r.w=s.pW(0,B.NG)
r.x=s.pW(0,B.a0e)
r.y=s.pW(0,B.a0f)
r.z=s.pW(0,B.a0d)
r.Q=s.pW(0,B.a0g)
r.as=s.pW(0,B.a0h)
r.at=s.pW(0,B.a0c)
q=r.f
q.a8(0)
r=r.r
r.a8(0)
w=s.c
w===$&&C.c()
w=D.d.gaf(w)
v=new C.f5(w,new A.cue())
while(v.C()){u=w.gR(0)
t=u.c
u=u.b
if(t)r.M(0,u)
else q.M(0,u)}},
gcGu(){var w=this.c
w===$&&C.c()
return D.d.d5(w,new A.cug())},
gcNZ(){var w=this.c
w===$&&C.c()
return new C.Z(w,new A.cuh(),C.T(w).k("Z<1>")).gL(0)},
cND(d){var w,v,u,t,s,r,q,p=this.c
p===$&&C.c()
w=p.length
v=d===86
u=d===92
t=0
for(;t<p.length;p.length===w||(0,C.M)(p),++t){s=p[t]
r=s.a
q=!0
if(B.wy.h(0,r).e!==d)if(!(r===B.NF&&v))r=r===B.NG&&u
else r=q
else r=q
if(r)return s}return null},
aZD(d){++this.f
return new A.eB(!1,d,!1,"")},
c7F(){var w,v,u,t,s=this;++s.r;--s.e
for(w=s.d,v=w.d,w=w.e,u=0;u<4;++u){t=B.awF[u]
if(!v.t(0,t))w.M(0,t)}w=s.e
if(w<=0){s.w=!0
return B.aYL}v=w===1?"life":"lives"
return new A.eB(!1,"ZAP! You touched a live wire and got a shock. All the breakers were knocked off. "+w+" "+v+" left. Turn the breaker OFF first.",!0,"shock")},
cY9(d,e){var w,v,u,t,s=this
if(s.w)return B.aYG
if(D.d.t(B.awF,e))return s.bDS(d,e)
w=s.cND(e)
if(d==="inspect"){if(w==null||w.c)return B.aYK
return new A.eB(!0,"You look and test: "+B.wy.h(0,w.a).b,!1,"")}if(w==null||w.c)return new A.eB(!1,s.b?"Nothing needs fixing there.":"There is nothing wrong with this, so the "+C.w(B.RY.h(0,d))+' is not needed. Use "Look and test" on things to find the problem.',!1,"")
v=B.wy.h(0,w.a)
if(d!==v.c){++s.f
return new A.eB(!1,s.b?"That is not the right tool for this problem.":"The "+C.w(B.RY.h(0,d))+" does not fix this. "+v.b,!1,"")}u=v.f
if(u!==0){t=s.d
u=!t.d.t(0,u)&&!t.e.t(0,u)}else u=!1
if(u){if(s.b)return s.c7F()
return s.aZD("STOP! "+v.r+" The wires here are live (120 volts). Tap the breaker in the panel (with your hand) to switch it off.")}w.c=!0
s.axq()
return new A.eB(!0,v.d,!1,"")},
bDS(d,e){var w,v,u,t,s=this
if(d==="inspect"){w=s.d
if(w.d.t(0,e))w="This breaker has tripped: it sits in the middle (orange)."
else w=w.e.t(0,e)?"This breaker is switched OFF.":"This breaker is ON."
return new A.eB(!0,w,!1,"")}if(d!=="hand")return s.aZD(s.b?"Use your hand on a breaker.":"A breaker is switched with your hand, not with a "+C.w(B.RY.h(0,d))+".")
w=s.d
v=w.d
if(v.t(0,e)){w=s.c
w===$&&C.c()
u=C.T(w).k("Z<1>")
t=C.C(new C.Z(w,new A.cuf(e),u),u.k("K.E"))
if(t.length!==0){D.d.gI(t).c=!0
s.axq()
return new A.eB(!0,B.wy.h(0,D.d.gI(t).a).d,!1,"")}v.W(0,e)
return B.aZe}w=w.e
if(w.t(0,e)){w.W(0,e)
return B.aZ8}w.M(0,e)
return B.aYZ}}
A.arA.prototype={
U(){var w,v=new A.xa(-0.3,0.48,46,B.Va,$.ax())
v.f=80
w=new C.y7()
$.yT()
w.h9(0)
return new A.aEQ(v,w)}}
A.aEQ.prototype={
gJ(){var w=this.d
w===$&&C.c()
return w},
gCS(d){var w=this.e
if(w===$){this.a.toString
w=D.o.F(Date.now(),1e5)
this.e=w}return w},
a_(){var w,v=this
v.a2()
w=v.gCS(0)
v.a.toString
w=A.hh1(!1,w)
v.d=w
v.r=A.agt(w.d)},
q(){var w=this.ax
if(w!=null)w.a4(0)
this.a3()},
c7K(d,e){var w=this,v=w.ax
if(v!=null)v.a4(0)
w.m(new A.et6(w,d,e))
w.ax=C.cL(D.ju,new A.et7(w))},
aZE(){this.f.hQ(46,0.48,B.Va,-0.3)
this.m(new A.esW(this))},
c7J(d){var w,v,u=this
if(d===0)return
w=u.d
w===$&&C.c()
v=w.cY9(u.x,d)
w=v.a
if(w)A.yG()
else A.fU(180,220,0.25,"square")
if(v.d==="shock"){C.fI()
u.m(new A.et0(u))
C.bP(D.mB,new A.et1(u),x.P)}u.m(new A.et2(u,d))
w=w&&!v.c
u.c7K(v.b,w)
w=u.d
if(w.w)$.aW.x1$.push(new A.et3(u))
else if(w.gcGu()&&!u.at){u.at=!0
$.aW.x1$.push(new A.et4(u))}},
cgl(){var w=null,v=this.c
v.toString
C.cg(w,w,!1,w,new A.esZ(this),v,w,!0,!0,x.H)},
c7G(){var w=null,v=this.c
v.toString
C.cg(w,w,!0,w,new A.esV(this),v,w,!0,!0,x.H)},
awO(){this.m(new A.esX(this))
this.aZE()},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.d
g===$&&C.c()
g=g.gcNZ()
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
for(o=0;o<3;++o)p.push(new C.D(D.MZ,new C.y(o<i.d.e?"\u2764\ufe0f":"\ud83d\udda4",h,D.Ac,h,h,h,h,h,h,h,h,h),h))
v=A.XZ(!1,h,i.f,new A.ete(i),h,s,u,r,h,new A.etf(),t,h,h,i.gc7H(),i.gc7I(),v,!1,h,C.a([C.B(p,D.m,h,D.e,D.Q,0,h,h)],q),h)
u=i.d.c
u===$&&C.c()
t=C.T(u)
t=new C.cQ(new C.Z(u,new A.etg(),t.k("Z<1>")),new A.eth(),t.k("cQ<1,n>")).aH(0,"  \xb7  ")
u=C.d("Customer: "+(t.length===0?"All fixed!":t),h,2,D.a2,h,h,h,B.aS9,h,h,h)
t=C.a([],q)
for(n=0;n<10;++n){m=B.drX[n]
s=i.x===m?D.aD.j(0.25):D.c.j(0.07)
r=new C.aQ(14,14)
p=i.x===m
l=p?D.aD:D.aZ
k=new C.ay(l,p?2:1,D.r,-1)
l=B.dxL.h(0,m)
p=C.X(l,i.x===m?D.aD:D.ae,h,h,h,19)
l=B.RY.h(0,m)
l.toString
j=i.x===m?D.aD:D.c
t.push(new C.D(E.tW,C.aB(h,C.p(h,new C.cc(D.aN,D.e,D.j,D.m,h,D.p,h,0,C.a([p,D.bn,new C.y(l,h,new C.F(!0,j,h,h,h,h,12.5,D.H,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h),h,h,h,h,h,h,h,h,h)],q),h),D.f,h,h,new C.o(s,h,new C.bK(k,k,k,k),new C.bk(r,r,r,r),h,h,D.n),h,h,h,h,D.fL,h,h,h),D.y,!1,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,new A.eti(i,m),h,h,h,h,h,h,!1,D.a5),h))}g=C.a([A.TU(D.aQ,new A.etj(i,d),C.x(C.a([new C.bM(D.a4,h,h,u,h),D.O,new C.a7(h,52,C.ct(t,h,h,h,h,D.aN,!1),h)],q),D.m,h,D.e,D.Q,0,D.p),v,""+g+"/"+w+" fixed","Service call",h)],q)
if(i.as)g.push(C.bT(0,C.e2(C.p(h,h,D.f,B.ahB,h,h,h,h,h,h,h,h,h,h),!0,h),0,0,0))
return new C.an(D.a_,h,D.aa,D.t,g,h)},
cB2(d){return C.bU(E.lw,null,new A.etc(this),d,!0,!0,!0,D.k_,!1,!1,x.H)},
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
A.xY.prototype={
gkC(d){return this.x}}
A.rG.prototype={}
A.a9N.prototype={}
A.i8.prototype={
aGe(d,e,f){var w=this
return d>w.a-f&&d<w.b+f&&e>w.c-f&&e<w.d+f}}
A.cqM.prototype={
c7L(d){return-this.a.gew(0)/2+d*4},
a51(d,e){var w,v,u=this.a
if(d<-u.gew(0)/2+6||d>u.gew(0)/2-6||e<6||e>u.gho(0)-6)return!1
for(u=this.b,w=u.length,v=0;v<w;++v)if(u[v].aGe(d,e,9))return!1
return!0},
aZG(d,e,f){var w,v,u=e.a,t=f.a-u,s=e.b,r=f.b-s,q=Math.max(1,D.k.dg(Math.sqrt(Math.pow(t,2)+Math.pow(r,2))/2))
for(w=0;w<=q;++w){v=w/q
if(!this.a51(u+t*v,s+r*v))return!1}return!0},
aYi(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=a0.a,f=h.a,e=D.k.V((g+f.gew(0)/2)/4),d=h.c
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
if(!h.a51(-f.gew(0)/2+k,j))continue
i=Math.pow(-f.gew(0)/2+k-g,2)+Math.pow(j-e,2)
if(i<o){p=new C.z(n,l)
o=i}}if(p!=null)return p}return null},
aox(b9,c0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5=this,b6=1e9,b7=b5.aYi(b9),b8=b5.aYi(c0)
if(b7==null||b8==null)return C.a([b9,c0],x.f)
w=b8.a
v=b5.c7L(w)
u=b8.b
t=new C.z(v,u*4)
if(b5.aZG(0,b9,t))return C.a([b9,t],x.f)
v=b7.a
s=b5.d
s===$&&C.c()
r=b7.b
q=x.S
p=C.eC([v*s+r],q)
o=C.U(q,q)
n=x.i
m=C.G([v*s+r,0],q,n)
l=C.G([v*s+r,b5.bTr(v,r,b8)],q,n)
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
b0=a5>=b0||a9>=s||!b5.a51(-v.gew(0)/2+a6,a9*4)}if(b0)continue
b0=!1
if(a4)if(a8!==0)b0=!b5.a51(-v.gew(0)/2+a6,n)||!b5.a51(-v.gew(0)/2+e,a9*4)
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
for(r=x.c5,q=new C.dx(b3,r),q=new C.bS(q,q.gL(0),r.k("bS<ak.E>")),r=r.k("ak.E");q.C();){n=q.d
if(n==null)n=r.a(n)
e=D.o.e9(n,s)
u.push(new C.z(-v.gew(0)/2+e*4,D.o.F(n,s)*4))}b4=C.a([D.d.gI(u)],w)
for(a5=0;a9=u.length-1,a5<a9;a5=a9){w=a5+1
for(;;){if(!(a9>w&&!b5.aZG(0,u[a5],u[a9])))break;--a9}b4.push(u[a9])}return b4},
bTr(d,e,f){return Math.sqrt(Math.pow(d-f.a,2)+Math.pow(e-f.b,2))}}
A.Aw.prototype={}
A.brj.prototype={
bzC(d,e,f,g,h,i,j,k,l,m,n,o){var w,v,u,t,s=this.b
if(s!=null)for(w=this.as,v=1;v<s.length;++v){u=v-1
t=Math.sqrt(Math.pow(s[v].a-s[u].a,2)+Math.pow(s[v].b-s[u].b,2))
w.push(t)
this.at+=t}}}
A.aVO.prototype={
auH(d){var w,v,u=d.gew(0),t=new A.bU0(d,u)
switch(d.c){case"living":w=t.$1(46)
return C.a([B.heW,new A.Aw(w.a,w.b,4,"Switching the ad on the big TV",!1,!0,!0,"ad")],x.h)
case"kitchen":return C.a([new A.Aw(new C.z(-u/2+40,42),3.141592653589793,2.8,"Getting a drink from the fridge",!0,!1,!1,""),B.heV],x.h)
case"bathroom":return B.doD
case"bedroom":v=t.$1(44)
return C.a([new A.Aw(v.a,v.b,3.4,"Switching the ad on the TV",!1,!0,!0,"ad")],x.h)
case"hall":if(!this.a)return B.azf
return C.a([new A.Aw(new C.z(-d.gew(0)/2+80,90),3.141592653589793,3,"Looking at the left video wall",!1,!1,!0,""),new A.Aw(B.erA,0,2.4,"Looking over the lounge and the logo carpet",!1,!1,!1,""),new A.Aw(new C.z(d.gew(0)/2-80,90),3.141592653589793,3,"Looking at the right video wall",!1,!1,!0,"")],x.h)
default:return B.azf}},
acA(a0,a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=e.b.d
d===$&&C.c()
w=d[a0]
v=new A.cqM(w,A.idA(w))
v.c=D.k.dg(w.gew(0)/4)+1
v.d=D.k.dg(w.gho(0)/4)+1
u=A.hl3(w,a1)
t=u.a
s=u.c
d=e.d
r=d.length
q=a3.length===0?"Walking in":a3
d.push(A.brk(a0,"",!1,q,-1,null,!1,!1,0.5,t.a,u.b,t.b))
for(q=e.auH(w),p=q.length,o=t,n=0;n<q.length;q.length===p||(0,C.M)(q),++n){m=q[n]
l=v.aox(o,m.a)
k=m.e
if(k)j=C.cU(m.d,"Having",0)
else j=!1
d.push(A.brk(a0,"",j,"Walking",-1,l,!1,!1,0,0,0,0))
o=D.d.gak(l)
d.push(A.brk(a0,m.w,k,m.d,-1,null,m.r,m.f,m.c,o.a,m.b,o.b))}if(a2!=null){i=A.hl3(w,a2)
h=i.c
l=v.aox(o,i.a)
g=e.auH(w).length!==0&&D.d.gak(e.auH(w)).e
d.push(A.brk(a0,"",g,"Walking to the next room",-1,l,!1,!1,0,0,0,0))
o=D.d.gak(l)
d.push(A.brk(a0,"",g,"Opening the door",h,null,!1,!1,1.8,o.a,e.bN1(w,h),o.b))}for(f=r;f<d.length;++f)d[f].ay=s},
aX3(d,e,f){return this.acA(d,e,f,"")},
bN1(d,e){var w,v=d.w[e].b
A:{if("left"===v){w=-1.5707963267948966
break A}if("right"===v){w=1.5707963267948966
break A}w=3.141592653589793
break A}return w},
aZF(){var w,v,u=this
if(u.a){u.acA(5,10,9,"Walking into the hall")
u.aZH()
return}u.acA(10,11,9,"Coming in through the front door")
u.aX3(9,10,5)
u.acA(5,9,0,"Walking down the hall")
for(w=0;w<8;++w){v=B.cWZ[w]
u.aX3(v,5,w===7?null:5)}u.aZH()},
aZH(){var w,v,u,t,s,r,q,p,o=this,n=o.c,m=Math.min(1,n/120)
for(w=o.d,v=w.length,u=0,t=0,s=0;s<v;++s){r=w[s]
if(r.b==null)u+=r.f*=m
else t+=r.at}q=t/Math.max(4,n-u)
for(n=q<=0,p=0,s=0;s<v;++s){r=w[s]
if(r.b!=null)r.f=n?0.1:Math.max(0.05,r.at/q)
r.ax=p
p+=r.f}o.e!==$&&C.aP()
o.e=p},
bbh(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g={},f=this.e
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
return A.atq(!1,n,f.ay,p,f.w,0,f.r,o,0,!1,s,f.x,v,!1,!1,f.c,f.e,f.d)}v=new A.bU1(g)
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
return A.atq(!1,0,o.ay,"",o.w,0,o.r,-1,m/12,!1,!1,!1,f.a,!1,!0,v,p,s)}}
A.b97.prototype={
Mv(d){var w=this.a
if(w!=null)this.ax=A.hsI(w,this.CW)},
aJ5(){var w,v,u,t,s,r,q=this
if(!q.KK(q.f,q.r))return!1
for(w=6;w<=320;w+=6){v=Math.max(8,D.k.V(w/6)*3)
for(u=0;u<v;++u){t=u*2*3.141592653589793/v
s=q.f+Math.cos(t)*w
r=q.r+Math.sin(t)*w
if(!q.KK(s,r)){q.f=s
q.r=r
q.at=null
return!0}}}return!1},
KK(d,e){var w,v,u,t,s=this
if(d<s.b||d>s.c||e<s.d||e>s.e)return!0
for(w=s.ax,v=w.length,u=s.ay,t=0;t<v;++t)if(w[t].aGe(d,e,u))return!0
return!1},
aLl(d,e,f,g){var w,v,u,t,s,r,q,p,o=this,n=Math.sqrt(e*e+f*f)
if(n<0.000001)return o.x=!1
w=e/n
v=f/n
u=o.ch
t=o.z?1.9:1
s=115*u*t*Math.min(1,n)*g
r=o.f+w*s
q=o.r+v*s
p=!0
if(o.KK(r,q))if(!o.KK(r,o.r))q=o.r
else{p=!o.KK(o.f,q)
if(p)r=o.f}if(p){o.f=r
o.r=q
o.w=Math.atan2(w,v)
o.y=o.y+s/12}return o.x=p},
cNC(d){var w,v=this,u=v.Q
if(u<=0&&v.as<=0)return
w=v.as
u+=w*d
v.Q=u
v.as=w-560*d
if(u<=0)v.as=v.Q=0},
FC(d,e){var w,v,u,t=this,s=t.at
if(s==null)return!1
w=s.a-t.f
v=s.b-t.r
if(Math.sqrt(w*w+v*v)<4){t.at=null
return t.x=!1}u=t.aLl(0,w,v,e)
if(!u){t.at=null
t.x=!1}return u}}
A.akb.prototype={}
A.apN.prototype={
U(){var w=x.N
return new A.bdF(C.U(w,w))}}
A.bdF.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=x.p,g=C.eH(C.a([C.aJ(i,i,i,i,B.bQe,i,i,i,new A.d5x(d),i,i,i,i,i,i)],h),i,i,!0,!0,E.lw,i,1,i,i,i,!1,i,!1,i,i,i,i,!0,i,i,i,i,i,B.fAq,i,i,i,1,i,!0),f=C.a([],h)
for(w=0;w<2;++w)f.push(C.j0(i,i,i,new C.y(D.d.gI(B.zl[w].b.split(" (")),i,i,i,i,i,i,i,i,i,i,i),i,new A.d5y(j,w),j.d===w,i,i,i,i))
f=C.bW(D.bE,f,D.bq,i,0,8)
v=j.e
v=C.bW(D.bE,C.a([C.j0(i,i,i,B.fPC,i,new A.d5z(j),!v,i,i,i,i),C.j0(i,i,i,B.fLP,i,new A.d5A(j),v,i,i,i,i)],h),D.bq,i,0,8)
u=B.zl[j.d]
u=C.a([f,D.O,v,D.W,C.d(u.b,i,i,i,i,i,i,D.de,i,i,i),D.av,C.d(u.c,i,i,i,i,i,i,Ab.DZ,i,i,i),D.W],h)
for(f=B.zl[j.d].e,f=J.aV(f.geu(f)),v=x.N,t=x.e7,s=j.f,r=x.bP;f.C();){q=f.gR(f)
p=s.h(0,q)
o=C.a([],r)
for(n=B.zl[j.d].d,m=0;m<5;++m){l=n[m]
o.push(new C.eI(l,new C.y(l,i,D.oD,i,i,i,i,i,i,i,i,i),D.f3,i,t))}p=C.a([new C.y(q,i,B.fnQ,i,i,i,i,i,i,i,i,i),C.SU(i,E.lw,B.fvV,i,!1,!0,o,new A.d5B(j,q),i,i,p,v)],h)
if(!j.e&&s.h(0,q)!=null)p.push(new C.fd(new A.d5C(j,q),i))
p.push(D.am)
D.d.v(u,p)}u.push(C.bI(C.d(j.e?"Submit the test":"Check my wiring",i,i,i,i,i,i,i,i,i,i),new A.d5D(j),i))
f=j.r
if(f!=null){f=f.a
v=f===B.v3
t=v?"CORRECT: every lead follows the diagram.":A.h_i(f)+": not passed"
if(v)f=D.bj
else f=f===B.Tw?D.bG:D.cs
h=C.a([D.W,C.d(t,i,i,i,i,i,i,C.l(i,i,f,i,i,i,i,i,i,i,i,16,i,i,D.u,i,i,!0,i,i,i,i,i,i,i,i),i,i,i)],h)
for(f=j.r.b,v=f.length,m=0;m<f.length;f.length===v||(0,C.M)(f),++m){k=f[m]
h.push(new C.y(k.c+"\nRule: "+k.d+"\nFix: "+k.e+"\n",i,B.fin,i,i,i,i,i,i,i,i,i))}for(f=B.zl[j.d].f,m=0;m<2;++m)h.push(new C.y("\u2022 "+f[m],i,D.vg,i,i,i,i,i,i,i,i,i))
D.d.v(u,h)}return C.c6(g,E.B9,C.ct(u,i,D.bF,i,i,D.ah,!1),i,!1,!1,i,i)}}
A.JB.prototype={
a5(){return"SafetyStatus."+this.b}}
A.FE.prototype={
a5(){return"TerminalRole."+this.b}}
A.FL.prototype={
a5(){return"WireFunction."+this.b}}
A.cxd.prototype={}
A.cAO.prototype={}
A.a44.prototype={}
A.bLp.prototype={}
A.wj.prototype={}
A.th.prototype={}
A.b5J.prototype={}
A.aaV.prototype={}
A.aaW.prototype={}
A.v9.prototype={}
A.b4r.prototype={}
A.b7B.prototype={}
A.cxf.prototype={
bqf(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=C.a([],x.dH)
for(w=this.a,v=w.length,u=0;u<w.length;w.length===v||(0,C.M)(w),++u){t=w[u]
s=t.b
r=t.c
q=A.hpc(s,r,t.d)
p=new C.Z(r,new A.cxg(),C.T(r).k("Z<1>")).gL(0)
r=s.d?1:0
o=s.b+s.c+r
n=o===0?0:D.o.E(D.k.V(p*100/o),0,100)
if(q.a!==B.v3)n=D.o.E(n,0,79)
i.push(new A.aaW(t.a,q,n))}w=C.a([],x.gl)
for(v=this.b,s=this.c,m=0;m<v.length;++m){r=v[m]
l=s.h(0,m)
w.push(new A.b4r(r,l==null?-1:l))}v=C.a([],x.t)
for(s=i.length,u=0;u<i.length;i.length===s||(0,C.M)(i),++u)v.push(i[u].c)
for(s=w.length,u=0;u<w.length;w.length===s||(0,C.M)(w),++u){k=w[u]
v.push(k.b===k.a.c?100:0)}j=v.length===0?0:D.k.V(D.d.fa(v,new A.cxh())/v.length)
return new A.b7B(i,w,j,D.d.d5(i,new A.cxi())&&j>=80)}}
A.PD.prototype={}
A.a11.prototype={
U(){var w=x.S
return new A.bu1(C.U(w,w))}}
A.bu1.prototype={
B(d){var w=null,v=this.e,u=C.aI(d,w,x.w).w
return C.bn(!0,new C.cT(new C.aZ(0,1/0,0,u.a.b*0.9),C.ct(v==null?this.cng():this.cqF(v),w,D.bR,w,w,D.ah,!0),w),!0,!1,D.af,!0,!0)},
cng(){var w,v,u,t,s,r,q=this,p=null,o=q.a,n=o.c.b,m=x.p
o=C.a([C.d("Test: "+o.d,p,p,p,p,p,p,D.de,p,p,p),D.av,B.fu9,D.W],m)
for(w=q.d,v=x.cE,u=0;u<n.length;u=t){t=u+1
s=C.a([new C.y(""+t+". "+n[u].a,p,D.oz,p,p,p,p,p,p,p,p,p)],m)
for(r=0;r<3;++r)s.push(new A.a9y(r,w.h(0,u),new A.f64(q,u),new C.y(n[u].b[r],p,D.DW,p,p,p,p,p,p,p,p,p),!0,p,v))
s.push(D.av)
D.d.v(o,s)}o.push(D.O)
o.push(C.bI(B.fyq,new A.f65(q),p))
return o},
cqF(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null,h=d.d,g=h?D.bj:D.cs
h=h?"Passed":"Not passed"
w=x.p
h=C.a([C.d(h,i,i,i,i,i,i,C.l(i,i,g,i,i,i,i,i,i,i,i,22,i,i,D.u,i,i,!0,i,i,i,i,i,i,i,i),i,i,i),C.d("Score "+d.c+"%  (pass mark 80%)",i,i,i,i,i,i,D.UA,i,i,i)],w)
v=d.a
if(D.d.b5(v,new A.f66()))h.push(B.ejy)
h.push(D.W)
for(u=v.length,t=0;t<v.length;v.length===u||(0,C.M)(v),++t){s=v[t]
r=s.b
q=r.a
p=A.h2T(q).j(0.1)
o=new C.aQ(12,12)
n=new C.ay(A.h2T(q).j(0.6),1,D.r,-1)
m=A.h_i(q)
q=A.h2T(q)
q=C.a([new C.y(s.a+": "+m+" ("+s.c+"%)",i,new C.F(!0,q,i,i,i,i,13.5,D.u,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i),i,i,i,i,i,i,i,i,i)],w)
r=r.b
if(r.length===0)q.push(B.fI9)
for(m=r.length,l=0;l<r.length;r.length===m||(0,C.M)(r),++l){k=r[l]
D.d.v(q,C.a([D.av,new C.y(A.h_i(k.b)+": "+k.c,i,B.fcu,i,i,i,i,i,i,i,i,i),new C.y("Rule: "+k.d,i,M.a9B,i,i,i,i,i,i,i,i,i),new C.y("Fix: "+k.e,i,B.fio,i,i,i,i,i,i,i,i,i)],w))}h.push(C.p(i,C.x(q,D.E,i,D.e,D.j,0,D.p),D.f,i,i,new C.o(p,i,new C.bK(n,n,n,n),new C.bk(o,o,o,o),i,i,D.n),i,i,i,D.cu,D.y6,i,i,i))}for(v=d.b,u=v.length,t=0;t<v.length;v.length===u||(0,C.M)(v),++t){j=v[t]
r=D.c.j(0.05)
q=new C.aQ(12,12)
p=j.a
o=p.c
m=j.b===o
n=new C.ay(m?D.bj:D.cs,1,D.r,-1)
m=m?"\u2705":"\u274c"
h.push(C.p(i,C.x(C.a([new C.y(m+" "+p.a,i,D.lO,i,i,i,i,i,i,i,i,i),new C.y("Correct answer: "+p.b[o],i,D.t7,i,i,i,i,i,i,i,i,i),new C.y(p.d,i,M.a9B,i,i,i,i,i,i,i,i,i)],w),D.E,i,D.e,D.j,0,D.p),D.f,i,i,new C.o(r,i,new C.bK(n,n,n,n),new C.bk(q,q,q,q),i,i,D.n),i,i,i,D.cu,D.y6,i,i,i))}h.push(D.av)
h.push(C.bI(D.py,new A.f67(this),i))
return h}}
A.a50.prototype={
h9(d){var w,v=this
if(v.c)return
v.c=!0
w=$.aW
w.toString
if(D.a.t(C.vq(C.b0(w).a,null),"Test"))v.d=C.dk(v.b,new A.bRB(v))
else v.aZX()},
aZX(){$.eW.H9(new A.bRA(this))},
bR(d){var w
this.c=!1
w=this.d
if(w!=null)w.a4(0)
this.d=null}}
var z=a.updateTypes(["~()","R(nq)","n(n,fJ)","R(mb)","R(a55)","r(r)","~(fk)","R(jz)","R(ot)","R(XL)","ai<lR>(L)","~(H)","R(fJ)","R(a9N)","R(a44)","R(Mo)","R(oi)","R(OT)","R(I1)","H(mb,mb)","aA<~>()","r(L,L)","R(r)","R(pN)","n(nq)","DS(Y)","~(mb)","~(xb,au,L)","r(L,L,L)","r(H)","IQ(Y)","R(LV)","R(aaW)","R(wj)","R(Af)","~(t,au)","H(xf,xf)","R(z8)","Ob(Y)","r(hn)","R(r6)","R(F8)","R(z3)","r(L)","R(SW)","FL(n)","wj(wj,wj)","~(H,r,r,n,u)","~(H,ai<r>)","L(lC)","pN()","H(H,mb)","R(w_)","oi(L)","fM(r,r,r,r,H,L,L)","~(H{keepTour:R})","~(r,r,r,r)","H(Af)","H(Af,Af)","v(rK)","v(n,ai<rK>)","n(mb)","v(xf)","r(ai<r>,H)","Xz()","~(r,L,L,L,~(xb,au,L){px:L})","Cv()","+(r,r)(H)","W7(Y)","ai<+(r,r)>()","mb?(n)","ai<fM>(L)","a6U(Y)","~(r,r{note:n?})","mb?(r,r)","R(r,r)","r?(r,r)","L(r)","ai<r>(r,r[H])","~(mb,L,L,L,L,L{note:n?})","+(L,L,L,n,n)(OT,H)","~(aD?)","ai<lR>()","ai<lR>(ai<lR>)","L(oi)","~(r,r,r,L,L)","~(r,r,r,L,H)","~(r,r,r,r{poster:H})","r(L,L[L])","~(~(fk),r,r)","~(r,r,L,L,u)","r(H,H)","~(r,r,H{alongX:R})","~(ai<r>,u)","~(ai<r>)","~(ai<r>{col:u})","~(H,r,u{h:L,w:L})","hn(H)","~(H,ai<r>,u,L,n)","~(H,n,r,r,r,R)","R(X5)","L(Au)","L(mb)","ai<r>(ai<r>)","~(n,ai<r>{r:L})","~(n,r,r)","~(nq,r,n)","~(n,r,r,H)","n(jz)","R(H)","H(Au,Au)","FE(n)","H(ot)","~(H,r,r{col:u,round:R})","cW()","z8()","n(Mo)","~(n,JB,n,n,n)","H(FL,FE)","aA<Mv?>()","R(xf)","a11(Y)","~({done:R})"])
A.bZO.prototype={
$1(d){var w=this.a
w=w===0?d:A.vw(d,w)
return w.aa(0,this.b)},
$S:z+5}
A.bZP.prototype={
$1(d){var w=this.a
return w===0?d:A.vw(d,w)},
$S:z+5}
A.bZN.prototype={
$4(b5,b6,b7,b8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4=this
for(w=b4.b,v=b7.a,u=b7.b,t=b7.c,s=b6.a,r=b6.b,q=b6.c,p=b8.a,o=b8.b,n=b8.c,m=1/w,l=v*m,k=u*m,j=t*m,i=p*m,h=o*m,m=n*m,g=b4.a,f=g.a,e=b4.c,d=x.o,a0=b4.d,a1=b4.e,a2=b4.f,a3=0;a3<w;++a3)for(a4=a3/w,a5=s+v*a4,a6=r+u*a4,a4=q+t*a4,a7=0;a7<w;++a7){a8=a7/w
a9=a5+p*a8
b0=a6+o*a8
a8=a4+n*a8
b1=a9+l
b2=b0+k
b3=a8+j
f.push(new A.lR(C.a([e.$1(new A.r(a9,b0,a8)),e.$1(new A.r(b1,b2,b3)),e.$1(new A.r(b1+i,b2+h,b3+m)),e.$1(new A.r(a9+i,b0+h,a8+m))],d),a0.$1(b5),a1,g.b,a2,g.d,!1,g.c,g.e,g.f,g.w))}},
$S:z+56}
A.bZQ.prototype={
$1(d){var w=d*2*3.141592653589793/this.b
return this.a.aJ(0,Math.cos(w)).aa(0,this.c.aJ(0,Math.sin(w)))},
$S:z+29}
A.bZM.prototype={
$2(d,e){var w=3.141592653589793*d/this.a,v=6.283185307179586*e/this.b
return new A.r(Math.sin(w)*Math.cos(v),Math.cos(w),Math.sin(w)*Math.sin(v))},
$S:z+91}
A.bZR.prototype={
$1(d){var w=d*2*3.141592653589793/this.b
return this.a.aJ(0,Math.cos(w)).aa(0,this.c.aJ(0,Math.sin(w)))},
$S:z+29}
A.fU8.prototype={
$1(d){var w=d.b,v=this.a,u=d.c,t=this.b
return new A.r(d.a,w*v-u*t,w*t+u*v)},
$S:z+5}
A.fU6.prototype={
$1(d){var w=this.a
return w===0?d:A.vw(d,w)},
$S:z+5}
A.fU7.prototype={
$1(d){var w=this,v=w.b===0?d:w.c.$1(d)
return J.fVl(w.a.$1(v),w.d)},
$S:z+5}
A.fU5.prototype={
$1(d){var w=this.b===0?d:this.c.$1(d)
return this.a.$1(w)},
$S:z+5}
A.fTV.prototype={
$4(d,e,f,g){var w=-d
return 0.5*(2*e+(w+f)*this.a+(2*d-5*e+4*f-g)*this.b+(w+3*e-3*f+g)*this.c)},
$S:318}
A.bIA.prototype={
$1(d){var w=d.a,v=J.a5(w),u=C.jS(v.h(w,"ngmy_swipe_x3"))
$.aj6=u===!0
w=C.jS(v.h(w,"ngmy_swipe_y3"))
$.aj7=w!==!1},
$S:291}
A.bIB.prototype={
$1(d){},
$S:31}
A.bIC.prototype={
$1(d){d.ar("Bool","ngmy_swipe_x3",$.aj6)
d.ar("Bool","ngmy_swipe_y3",$.aj7)},
$S:291}
A.bID.prototype={
$1(d){},
$S:31}
A.bIF.prototype={
$1(d){var w=this,v=-d.c,u=d.b,t=w.a,s=w.b,r=v*t-u*s,q=d.a,p=w.c,o=w.d
return new A.r(q*p-r*o,u*t+v*s,q*o+r*p)},
$S:z+5}
A.bIE.prototype={
$1(d){var w=this,v=w.a
return v.d.aa(0,w.b.$1(new A.r(w.c*d,w.d*d,d-v.c)))},
$S:z+43}
A.bIz.prototype={
$1(d){var w=this,v=-d.c,u=d.b,t=w.a,s=w.b,r=v*t-u*s,q=d.a,p=w.c,o=w.d
return new A.r(q*p-r*o,u*t+v*s,q*o+r*p)},
$S:z+5}
A.bIy.prototype={
$1(d){var w=this,v=w.a
return v.d.aa(0,w.b.$1(new A.r(w.c*d,w.d*d,d-v.c)))},
$S:z+43}
A.crN.prototype={
$1(d){var w=this,v=d.a,u=w.a,t=d.c,s=w.b,r=-v*s+t*u,q=d.b,p=w.c,o=w.d
return new A.r(v*u+t*s,q*p-r*o,-(q*o+r*p))},
$S:z+5}
A.crO.prototype={
$1(d){var w=this.a.c,v=this.b.$1(d.aF(0,w.d))
return new A.r(v.a,v.b,v.c+w.c)},
$S:z+5}
A.crG.prototype={
$1(d){return d.c>=1},
$S:z+22}
A.crH.prototype={
$1(d){var w,v,u,t,s,r,q,p,o=this,n=!o.c||o.d>=o.e[0],m=o.f,l=o.b
if(n)A.hVg(d,m,o.r,l.gMM(0))
else{n=$.hwu()
C.HL(m)
w=n.a
v=w.get(m)
u=D.k.bj(l.gMM(0)*5)
t=v==null
if(t)s=o.a.b<10
else s=v.a!==u&&o.a.a<3
if(s){$.S()
r=new C.oW()
m.c.$3(C.z4(r,null),new C.au(m.d,m.e),l.gMM(0))
if(!t)v.b.q()
n.n(0,m,new A.cBz(u,r.nd()))
n=o.a
if(t)++n.b
else ++n.a}C.HL(m)
n=w.get(m)
q=n==null?null:n.b
if(q!=null){n=m.d
m=m.e
p=A.h2y(o.r,n,m)
if(p!=null){l=d.a
J.bl(l.save())
d.av(0,p.a)
l.clipRect(C.bF(new C.a3(0,0,n,0+m)),$.mr()[1],!0)
m=q.b
m===$&&C.c()
m=m.a
m===$&&C.c()
m=m.a
m.toString
l.drawPicture(m)
l.restore()}}else{$.S()
n=C.I()
n.r=D.cm.gp(0)
d.aG(o.w,n)}}},
$S:697}
A.crF.prototype={
$2(d,e){var w=this.a
return A.o0(A.o0(w[0],w[1],d),A.o0(w[3],w[2],d),e)},
$S:z+21}
A.crI.prototype={
$1(d){return d.c<1},
$S:z+22}
A.crJ.prototype={
$1(d){return A.hVh(d,this.b,this.c,8,6,this.a.gMM(0))},
$S:697}
A.crK.prototype={
$2(d,e){return D.k.aK(e,d)},
$S:1766}
A.crM.prototype={
$1(d){var w,v=d.b
if(v!==0){w=this.a.h(0,v)
w.toString
v=this.b.h(0,v)
v.toString
v=w/v}else v=d.r
return v},
$S:z+101}
A.crL.prototype={
$2(d,e){var w,v,u=D.o.aK(d.a,e.a)
if(u!==0)return u
w=this.a
v=J.B9(w.$1(e),w.$1(d))
return v!==0?v:D.o.aK(d.c,e.c)},
$S:z+110}
A.eYY.prototype={
$1(d){var w=this.a,v=w.r,u=d.a
w.r=d
w.a.d.a6J(D.k.E((u-v.a)/1e6,0,0.1))
w.f.sp(0,u/1e6)},
$S:9}
A.eYX.prototype={
$1(d){if(x.ej.b(d))this.a.a.d.ap8(1+d.gtx().b*0.0012)},
$S:245}
A.eYU.prototype={
$1(d){var w=this.a
w.w=1
w.x=d.c},
$S:248}
A.eYV.prototype={
$1(d){var w,v,u,t,s,r=d.w,q=this.a
if(r!==q.x){q.x=r
q.w=d.d}if(r>=2){r=d.d
w=q.w/r
q.w=r
if(isFinite(w)&&w>0)q.a.d.ap8(w)}else{r=q.a.d
q=d.a
v=$.aj6?-1:1
v=q.a*0.009*v
u=$.aj7?-1:1
r.ay=r.ax=null
v=r.a+=v
if(!r.Q){t=r.y
s=r.z
r.a=D.k.E(v,t-s,t+s)}r.b=D.k.E(r.b+-q.b*0.009*u,r.w,r.x)
r.aU()}},
$S:208}
A.eYW.prototype={
$1(d){var w=this.a,v=w.a.f
return v==null?null:v.$1(w.e.cUV(d.b))},
$S:68}
A.eYS.prototype={
$1(d){return this.a.y=d.b},
$S:22}
A.eYT.prototype={
$0(){var w,v=this.a,u=v.a.as
u.toString
v=v.y
w=this.b.gY(0)
return u.$2(v,w==null?D.ax:w)},
$S:0}
A.bSH.prototype={
$0(){var w=0,v=C.j(x.c),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j
var $async$$0=C.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return C.b($.r3().jK(0,q.a),$async$$0)
case 7:p=e
m=q.b
l=x.N
o=new A.Mv(m,C.U(l,x.J),C.U(l,x.bB),C.a([],x.dQ),C.U(l,x.gN))
w=8
return C.b(o.Pu(p),$async$$0)
case 8:$.fWR.n(0,m,o)
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
$.fWQ.W(0,q.b)
w=r.pop()
break
case 6:case 1:return C.h(u,v)
case 2:return C.f(s.at(-1),v)}})
return C.i($async$$0,v)},
$S:z+119}
A.bSz.prototype={
$1(d){return D.a.t(d,"hips")},
$S:3}
A.bSw.prototype={
$2(d,e){var w,v=Math.floor(d),u=Math.floor(e),t=this.b,s=t.a,r=Math.min(s-1,D.k.bj((d-v)*s))
v=t.b
w=(Math.min(v-1,D.k.bj((e-u)*v))*s+r)*4
s=this.a
t=t.c
s.c=s.c+t[w]
s.b=s.b+t[w+1]
s.a=s.a+t[w+2]},
$S:255}
A.bSv.prototype={
$1(d){return D.k.V(D.k.E(d,0,1)*255)},
$S:267}
A.bSB.prototype={
$2(d,e){var w,v,u,t,s,r=x.S,q=C.U(r,r)
r=this.b
w=new Int32Array(r)
for(v=this.c.a,u=this.a,t=0;t<r;++t){s=t*3
w[t]=q.c3(0,(D.k.bj((v[s]-u.c)/d)*1024+D.k.bj((v[s+1]-u.b)/d))*1024+D.k.bj((v[s+2]-u.a)/d),new A.bSC(q))}e[0]=q.a
return w},
$S:1768}
A.bSC.prototype={
$0(){return this.a.a},
$S:92}
A.bSD.prototype={
$1(d){var w,v,u,t,s,r,q=C.aY(x.S)
for(w=this.a.e,v=w.length,u=0;u<v;u+=3){t=d[w[u]]
s=d[w[u+1]]
r=d[w[u+2]]
if(t===s||s===r||t===r)continue
q.M(0,A.had(t,s,r))}return q.a},
$S:1769}
A.bSA.prototype={
$2(d,e){var w,v,u,t=this.a,s=this.b.h(0,d)
s.toString
w=J.a5(e)
v=D.k.V(w.h(e,0)/w.h(e,3))
u=D.k.V(w.h(e,1)/w.h(e,3))
w=D.k.V(w.h(e,2)/w.h(e,3))
t.$flags&2&&C.aj(t)
t[s]=(v<<16|u<<8|w|4278190080)>>>0},
$S:1770}
A.bSx.prototype={
$0(){return new Float64Array(this.a*16)},
$S:699}
A.bSy.prototype={
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
if(n<0)D.oq.h8(k,j,j+16,h)
else A.hae(k,n*16,h,0,k,j)
k=u.f
k===$&&C.c()
k=k[a1]
j=k.length
m=0
for(;m<k.length;k.length===j||(0,C.M)(k),++m)l.$1(k[m])},
$S:29}
A.bSG.prototype={
$1(d){var w,v,u
for(w=this.a.z,w=new C.hC(w,w.r,w.e);w.C();){v=w.d
u=v.toLowerCase()
if(C.cU(u,d,0))return v}return null},
$S:307}
A.bSE.prototype={
$1(d){return!D.a.t(d.toLowerCase(),"pose")},
$S:3}
A.bSF.prototype={
$0(){var w=this.a.z
return new C.cv(w,C.a6(w).k("cv<1>")).gI(0)},
$S:23}
A.bSI.prototype={
$1(d){var w=this,v=w.c,u=d*3,t=w.a,s=w.d,r=(v[u]-t.b)*s,q=v[u+1],p=w.b.ay,o=(v[u+2]-t.a)*s
t=w.f
u=w.r
return new A.r(r*t+o*u+w.w,(q-p)*s+w.e,-r*u+o*t+w.x)},
$S:z+29}
A.fsp.prototype={
$2(d,e){return D.k.V(d+(D.k.E(e,0,255)-d)*0.8)},
$S:1772}
A.bGV.prototype={
$1(d){return d.d+this.a.f*d.e},
$S:z+49}
A.bGU.prototype={
$1(d){return d.a===J.q(this.a,"template")},
$S:z+40}
A.fL6.prototype={
$6$lines$w(d,e,f,g,h,i){var w=null,v=C.fu("\u2026",w,h,w,C.cS(w,w,w,w,w,w,w,w,w,C.l(w,w,f,w,w,w,w,w,w,w,w,e,w,w,i,w,1.1,!0,w,w,w,w,w,w,w,w),d),D.a3,D.bZ,w,D.dA,D.bW)
v.nX(g)
return v},
$4(d,e,f,g){return this.$6$lines$w(d,e,f,g,2,D.u)},
$5$w(d,e,f,g,h){return this.$6$lines$w(d,e,f,g,2,h)},
$S:1773}
A.ftO.prototype={
$1(d){var w=this.a
return A.vw(d,w.c).aa(0,new A.r(w.a,0,w.b))},
$S:z+5}
A.ftP.prototype={
$6$px(d,e,f,g,h,i){var w=new A.ftQ(e,d),v=-f/2,u=g/2,t=f/2,s=-g/2
this.a.push(new A.fM(C.a([w.$2(v,u),w.$2(t,u),w.$2(t,s),w.$2(v,s)],x.o),0,h,i,i*g/f,30,this.b,0,!1))},
$5(d,e,f,g,h){return this.$6$px(d,e,f,g,h,260)},
$S:z+65}
A.ftQ.prototype={
$2(d,e){return A.vw(new A.r(d,e,0),this.a).aa(0,this.b)},
$S:z+21}
A.ftH.prototype={
$3(d,e,f){return A.bAG(d,e,f,0)},
$S:24}
A.ftI.prototype={
$3(d,e,f){return A.bAG(d,e,f,3)},
$S:24}
A.ftJ.prototype={
$3(d,e,f){return A.bAG(d,e,f,8)},
$S:24}
A.ftK.prototype={
$3(d,e,f){return A.bAG(d,e,f,9+this.a)},
$S:24}
A.ftL.prototype={
$3(d,e,f){return A.bAG(d,e,f,12+this.a)},
$S:24}
A.ftM.prototype={
$3(d,e,f){return A.hsL(d,e,f,this.a,this.b)},
$S:24}
A.ftN.prototype={
$3(d,e,f){return A.hsL(d,e,f,this.a,this.b)},
$S:24}
A.fg8.prototype={
$4(d,e,f,g){var w=-d,v=this.a
return 0.5*(2*e+(w+f)*v+(2*d-5*e+4*f-g)*v*v+(w+3*e-3*f+g)*v*v*v)},
$S:318}
A.fjw.prototype={
$1(d){var w=this.a,v=J.a5(w)
return v.h(w,D.o.E(d,0,v.gL(w)-1))},
$S:z+67}
A.fsv.prototype={
$0(){var w,v,u,t,s,r,q,p,o,n=A.hou(this.a),m=x.n,l=C.a([],m)
for(w=J.a5(n),v=0;v<w.gL(n)-1;v=u){u=v+1
t=w.h(n,u).a
s=w.h(n,v).a
l.push(Math.pow(Math.max(new A.r(t.a-s.a,t.b-s.b,t.c-s.c).guR(),250),0.75))}r=D.d.fa(l,new A.fsu())
q=C.a([0],m)
for(m=l.length,p=0;p<l.length;l.length===m||(0,C.M)(l),++p){o=l[p]
q.push(D.d.gak(q)+30*o/r)}return q},
$S:1775}
A.fsu.prototype={
$2(d,e){return d+e},
$S:77}
A.fss.prototype={
$0(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8=this.a,a9=B.dx1.h(0,a8.a)
if(a9==null){w=C.a([],x.t)
v=a8.w.length
u=v===0
t=0
for(;;){if(!(t<(u?1:v)))break
w.push(t);++t}a9=new C.z(w,0)}s=Math.max(Math.max(a8.gaoR(),a8.gbdy()),a8.gGN()*1.3)
w=a8.r
r=new A.r(a8.ga4f(0),w+a8.gGN()/2,a8.ga4g())
q=w+a8.gGN()
v=s*0.55
p=C.a([new C.z(new A.r(a8.ga4f(0)+v,q+s*0.5,a8.ga4g()+s*1.15),r)],x.dt)
for(u=a9.a,o=x.o,n=a8.w,m=a8.e,l=a8.f,k=a9.b,v=q+v,j=null,i=0;i<u.length;++i,j=a2){h=n[u[i]]
g=h.e
f=m*g
e=l*g
d=new A.r(h.a,w+h.d+e/2,h.b)
g=h.c
a0=Math.sin(g)
a1=Math.cos(g)
a2=new A.r(a0,0,a1)
a3=new A.fst(d,a2,f*1.5,new A.r(Math.cos(g),0,-Math.sin(g)),f,e)
a4=D.o.F(k+i,3)
A:{if(0===a4){g=C.a([a3.$3(1.8,0,1.1),a3.$3(1,-0.22,-0.35),a3.$3(0.9,0.3,-0.2)],o)
break A}if(1===a4){g=C.a([a3.$3(0.9,1.5,-0.25),a3.$3(1.05,0,0.05),a3.$3(0.85,-1.3,0.15)],o)
break A}g=C.a([a3.$3(1.3,0.2,-0.45),a3.$3(1.1,0,0.45),a3.$3(1.7,-0.3,1.3)],o)
break A}if(j!=null&&j.a*a0+j.c*a1<0.3){a0=D.d.gak(p).a
a1=D.d.gI(g)
p.push(new C.z(new A.r((a0.a+a1.a)*0.5+j.c*s*0.5,v,(a0.c+a1.c)*0.5-j.a*s*0.5),r))}for(a5=0;a5<3;++a5)p.push(new C.z(g[a5],d))}a6=new A.r(a8.ga4f(0)-s*0.7,q+s*0.6,a8.ga4g()-s)
if(j!=null){a7=D.d.gak(p).a.aa(0,a6).aJ(0,0.5)
p.push(new C.z(new A.r(a7.a+j.c*s*0.5,v,a7.c-j.a*s*0.5),r))}p.push(new C.z(a6,r))
return p},
$S:z+69}
A.fst.prototype={
$3(d,e,f){var w=this
return w.a.aa(0,w.b.aJ(0,w.c*d)).aa(0,w.d.aJ(0,w.e*e)).aa(0,new A.r(0,w.f*f,0))},
$S:z+28}
A.ftz.prototype={
$1(d){var w=this.b,v=w*d.b,u=d.c,t=this.c
return this.a.aa(0,new A.r(Math.sin(v)*u*t.ged(0)+w*d.e*t.gaoR(),d.d*t.gGN(),Math.cos(v)*u*t.ged(0)))},
$S:z+39}
A.ftA.prototype={
$1(d){var w=this.c
return this.a.aa(0,new A.r(this.b*d.f*w.gaoR(),d.r*w.gGN(),0))},
$S:z+39}
A.ftB.prototype={
$1(d){var w=this.a
return w[D.o.E(d,0,w.length-1)]},
$S:z+97}
A.c2O.prototype={
$1(d){return d.a===this.a.d.a},
$S:z+40}
A.c2M.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new A.c2L())},
$S:28}
A.c2L.prototype={
$0(){},
$S:0}
A.c2z.prototype={
$0(){var w=this.a
w.f=A.h3e(w.gzu(),w.d)
w.abg()},
$S:0}
A.c2F.prototype={
$0(){return this.a.x=this.b},
$S:0}
A.c2N.prototype={
$0(){var w=this.a
w.x=0
w.y=!1
w.z=""},
$S:0}
A.c2C.prototype={
$0(){var w=this.a
w.x=-1
w.y=!1
w.z=this.b?"That was the 30 second drone shot. Press it again any time, or change the board and film it again.":""},
$S:0}
A.c2B.prototype={
$0(){var w=this.a
return w.f=A.h3e(w.gzu(),w.d)},
$S:0}
A.c29.prototype={
$0(){},
$S:0}
A.c2A.prototype={
$0(){return this.a.z="That picture could not be opened."},
$S:0}
A.c2E.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=C.aI(d,k,x.w).w,i=x.p,h=C.a([],i)
for(w=this.a,v=w.d,u=0;u<12;++u){t=B.a37[u]
s=t.a
r=v.a===s
q=r?D.d6:D.cm
p=new C.aQ(16,16)
o=r?F.fw:D.bz
n=new C.ay(o,r?2:1,D.r,-1)
o=C.a([new C.y(t.b,k,D.nE,k,k,k,k,k,k,k,k,k),D.b2],i)
r=t.w.length
m=r===0
if((m?1:r)>1){l=new C.aQ(10,10)
o.push(C.p(k,new C.y(""+(m?1:r)+" boards",k,A1.aSr,k,k,k,k,k,k,k,k,k),D.f,k,k,new C.o(D.dZ,k,k,new C.bk(l,l,l,l),k,k,D.n),k,k,k,k,D.yj,k,k,k))}if(v.a===s)o.push(B.ejn)
h.push(C.aB(k,C.p(k,C.x(C.a([new C.cc(D.aN,D.e,D.j,D.m,k,D.p,k,0,o,k),D.am,new C.y(t.c,k,D.j1,k,k,k,k,D.a2,k,2,k,k),D.cL,new C.bA(1,D.bd,new C.y(t.d,k,B.ffE,k,k,k,k,D.Ug,k,k,k,k),k)],i),D.E,k,D.e,D.j,0,D.p),D.f,k,k,new C.o(q,k,new C.bK(n,n,n,n),new C.bk(p,p,p,p),k,k,D.n),k,k,k,k,B.bwL,k,k,k),D.y,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,new A.c2D(w,d,t),k,k,k,k,k,k,!1,D.a5))}return C.bn(!0,new C.D(B.by7,C.x(C.a([B.fQW,D.av,B.fJW,D.ad,new C.cT(new C.aZ(0,1/0,0,j.a.b*0.66),C.kX(1.05,h,2,10,10,k,k,!0),k)],i),D.E,k,D.e,D.Q,0,D.p),k),!0,!1,D.af,!0,!0)},
$S:26}
A.c2D.prototype={
$0(){C.a4(this.b,!1).O(null)
this.a.cul(this.c.a)},
$S:0}
A.c2y.prototype={
$0(){var w=this,v=w.b.d.b[w.a.a]
w.c.saX(0,v.b)
w.d.saX(0,v.c)
w.e.saX(0,v.d)},
$S:0}
A.c2x.prototype={
$1(d){var w=this
return new C.dY(new A.c2u(w.a,w.b,w.c,w.d,w.e,w.f),null)},
$S:20}
A.c2u.prototype={
$2(d,e){var w,v,u,t,s,r,q,p=this,o=null,n=p.b,m=p.a,l=n.d.b[m.a],k=new A.c2v(m,n),j=new A.c2w(e),i=C.aI(d,o,x.w).w,h=x.p,g=C.a([B.fx3,D.av,C.d(l.a?"Now it shows the NGMY logo, words and ads. Change anything and it becomes yours.":"This sign is your own.",o,o,o,o,o,o,H.vb,o,o,o)],h),f=n.gzu().w.length
if((f===0?1:f)>1){f=C.a([],h)
w=p.c
v=0
for(;;){u=n.gzu().w.length
if(!(v<(u===0?1:u)))break
u=m.a===v
t=u?D.d6:D.cm
s=new C.aQ(18,18)
r=new C.ay(u?F.fw:D.aZ,2,D.r,-1)
q=v+1
f.push(C.aB(o,C.p(o,new C.y("Sign "+q,o,D.lO,o,o,o,o,o,o,o,o,o),D.f,o,o,new C.o(t,o,new C.bK(r,r,r,r),new C.bk(s,s,s,s),o,o,D.n),o,o,o,o,D.lA,o,o,o),D.y,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,new A.c2e(m,v,w,e),o,o,o,o,o,o,!1,D.a5))
v=q}D.d.v(g,C.a([D.W,B.fR0,D.am,C.bW(D.bE,f,D.bq,o,8,8)],h))}g.push(D.ad)
g.push(k.$3("Big words",p.d,new A.c2f(l)))
g.push(k.$3("Smaller words",p.e,new A.c2g(l)))
g.push(k.$3("Bottom line (web address)",p.f,new A.c2h(l)))
f=l.f!=null
w=f?"Your logo is on (change)":"Put your own logo (default: NGMY logo)"
g.push(j.$4(w,f,new A.c2i(m,n),new A.c2j(m,n,l)))
f=l.r!=null
w=f?"Your picture is on (change)":"Put your own picture"
g.push(j.$4(w,f,new A.c2k(m,n),new A.c2l(m,n,l)))
g.push(D.av)
g.push(B.fL2)
g.push(D.am)
f=C.a([],h)
for(w=x.O,v=0;v<6;++v){u=B.a4R[v]
u=C.a([u.b,u.c],w)
t=new C.aQ(10,10)
r=new C.ay(l.e===v&&!l.a?F.fw:D.aZ,2,D.r,-1)
s=B.a4R[v]
f.push(C.aB(o,C.p(o,new C.ck(D.A,o,o,new C.y(s.a,o,new C.F(!0,s.d,o,o,o,o,11,D.H,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o),o,o,o,o,o,o,o,o,o),o),D.f,o,o,new C.o(o,o,new C.bK(r,r,r,r),new C.bk(t,t,t,t),o,new C.a9(D.a4,D.a8,D.x,u,o,o),D.n),o,o,o,o,D.hH,o,o,74),D.y,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,new A.c2m(m,n,l,v,e),o,o,o,o,o,o,!1,D.a5))}g.push(C.bW(D.bE,f,D.bq,o,8,8))
g.push(D.aA)
m=n.gzu().w.length
g.push(C.B(C.a([C.E(C.et(B.bV1,C.d((m===0?1:m)>1?"All signs back to the NGMY default":"Back to the NGMY default",o,o,o,o,o,o,B.frL,o,o,o),new A.c2n(n,l,p.c,e),o),1),D.as,C.bI(D.wW,new A.c2o(d),o)],h),D.m,o,D.e,D.j,0,o,o))
return new C.D(new C.Q(16,16,16,i.f.d+16),C.cd(C.x(g,D.E,o,D.e,D.Q,0,D.p),D.t,o,D.y,o,o,o,o,D.ah),o)},
$S:108}
A.c2v.prototype={
$3(d,e,f){var w=null
return new C.D(D.d3,C.aN(w,D.Z,!1,w,!0,D.t,w,C.aO(),e,w,w,w,w,w,2,C.bu(w,new C.b5(4,C.m(12),D.a0),w,w,w,w,w,w,!0,w,w,w,w,w,w,D.cm,!0,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,D.Uz,d,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w),D.y,!0,w,!0,w,!1,w,D.ak,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,new A.c2p(this.a,this.b,f),w,w,w,!1,w,w,!1,w,!0,w,D.ab,w,w,w,w,w,w,w,w,w,w,w,D.df,!0,D.a3,w,D.ao,w,w,w,w),w)},
$S:1776}
A.c2p.prototype={
$1(d){this.c.$1(d)
this.b.Zw(this.a.a)},
$S:2}
A.c2w.prototype={
$4(d,e,f,g){var w=null,v=this.a,u=e?D.eb:D.u9
u=C.a([C.E(C.et(C.X(u,e?D.bj:D.ae,w,w,w,w),C.d(d,w,w,w,w,w,w,D.df,w,w,w),new A.c2s(f,v),w),1)],x.p)
if(e)u.push(C.aJ(w,w,w,w,D.rx,w,w,w,new A.c2t(g,v),w,w,w,w,w,w))
return new C.D(D.cu,C.B(u,D.m,w,D.e,D.j,0,w,w),w)},
$S:1777}
A.c2s.prototype={
$0(){var w=0,v=C.j(x.H),u=this
var $async$$0=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:u.a.$0()
w=2
return C.b(C.bP(D.nk,null,x.H),$async$$0)
case 2:u.b.$1(new A.c2r())
return C.h(null,v)}})
return C.i($async$$0,v)},
$S:1}
A.c2r.prototype={
$0(){},
$S:0}
A.c2t.prototype={
$0(){this.a.$0()
this.b.$1(new A.c2q())},
$S:0}
A.c2q.prototype={
$0(){},
$S:0}
A.c2e.prototype={
$0(){var w=this
w.a.a=w.b
w.c.$0()
w.d.$1(new A.c2d())},
$S:0}
A.c2d.prototype={
$0(){},
$S:0}
A.c2f.prototype={
$1(d){return this.a.b=d},
$S:2}
A.c2g.prototype={
$1(d){return this.a.c=d},
$S:2}
A.c2h.prototype={
$1(d){return this.a.d=d},
$S:2}
A.c2i.prototype={
$0(){return this.b.IQ(this.a.a,!0)},
$S:0}
A.c2j.prototype={
$0(){var w=this.c
w.w=w.f=null
this.b.Zw(this.a.a)},
$S:0}
A.c2k.prototype={
$0(){return this.b.IQ(this.a.a,!1)},
$S:0}
A.c2l.prototype={
$0(){var w=this.c
w.x=w.r=null
this.b.Zw(this.a.a)},
$S:0}
A.c2m.prototype={
$0(){var w=this
w.c.e=w.d
w.b.Zw(w.a.a)
w.e.$1(new A.c2c())},
$S:0}
A.c2c.prototype={
$0(){},
$S:0}
A.c2n.prototype={
$0(){var w=this,v=w.a,u=v.gzu().w.length
if((u===0?1:u)>1)v.d.cWR()
else w.b.biU()
w.c.$0()
v.m(new A.c2a())
v.IR()
w.d.$1(new A.c2b())},
$S:0}
A.c2a.prototype={
$0(){},
$S:0}
A.c2b.prototype={
$0(){},
$S:0}
A.c2o.prototype={
$0(){C.a4(this.a,!1).O(null)
return null},
$S:0}
A.c2I.prototype={
$0(){return C.a4(this.a,!1).ib()},
$S:0}
A.c2J.prototype={
$0(){var w=this.a
return w.m(new A.c2H(w))},
$S:0}
A.c2H.prototype={
$0(){return this.a.y=!1},
$S:0}
A.c2K.prototype={
$0(){var w=this.a
return w.m(new A.c2G(w))},
$S:0}
A.c2G.prototype={
$0(){return this.a.y=!0},
$S:0}
A.fw4.prototype={
$1(d){return d.a===this.a},
$S:z+37}
A.fw5.prototype={
$0(){return D.d.gI(B.QR)},
$S:z+115}
A.bLh.prototype={
$1(d){return d.d.t(0,this.a.b)},
$S:z+37}
A.bLj.prototype={
$2(d,e){var w=this.a,v=this.b
return D.k.aK(w.aaf(d.c,d.d,new C.z(v.c,v.d)),w.aaf(e.c,e.d,new C.z(v.c,v.d)))},
$S:z+19}
A.bLk.prototype={
$1(d){return d.f==null},
$S:z+120}
A.bLg.prototype={
$2(d,e){var w,v=d.w
if(v!==e.w)return v?-1:1
v=this.a
w=this.b
return D.k.aK(v.aZi(w,A.yI(d.c)),v.aZi(w,A.yI(e.c)))},
$S:z+36}
A.bLl.prototype={
$2(d,e){var w=D.o.aK(e.b,d.b)
return w!==0?w:D.o.aK(e.c,d.c)},
$S:1778}
A.bLi.prototype={
$2(d,e){var w,v,u=d.w
if(u!==e.w)return u?-1:1
u=this.a
w=this.b
v=this.c
return D.k.aK(u.aaf(w,v,A.yI(d.c)),u.aaf(w,v,A.yI(e.c)))},
$S:z+36}
A.bJm.prototype={
$2(d,e){return(d^D.k.V(e.c)*31+D.k.V(e.d))>>>0},
$S:z+51}
A.c0p.prototype={
$2(d,e){var w,v,u,t,s=null,r=this.a,q=r.c,p=q.d>0
if(p)w=0
else{w=q.c
w=w>0?(1-w/180)*0.5:q.a}v=r.e
if(p)p="\ud83d\udc1b"
else p=q.c>0?"\ud83d\ude34":"\u26a1"
u=x.p
w=C.a([A.fXo(v,p,w)],u)
p=q.e
if(p<0.3||q.f){t=q.f
if(t)p=0.2
t=t?"\ud83e\udd12":"\ud83d\udca7"
D.d.v(w,C.a([new C.a7(s,v/4,s,s),A.fXo(v*0.7,t,p)],u))}if(r.d)D.d.v(w,C.a([new C.a7(s,v/3,s,s),A.fXo(v,"\u26fd",q.b)],u))
return C.x(w,D.m,s,D.e,D.Q,0,D.p)},
$S:400}
A.fzn.prototype={
$4(d,e,f,g){var w=f+g/100
return new C.cw([d+100*Math.cos(w),e+100*Math.sin(w),-Math.sin(w),Math.cos(w)])},
$S:1779}
A.fdm.prototype={
$1(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this.b,h=A.L8(i,a0).a,g=h[0],f=h[1],e=h[2],d=h[3]
for(h=this.a,w=h.a,v=h.b,u=h.c,h=h.d,t=0;t<5;++t){s=B.cWg[t]
for(r=d*s,q=e*s,p=0;p<3;++p){o=B.d9J[p]
n=i.a==="bus"
m=n?120:95.94999999999999
l=n?33.54:31.45
k=g+q*m-d*o*l
m=n?120:95.94999999999999
n=n?33.54:31.45
j=f+r*m+e*o*n
if(k>w&&k<v&&j>u&&j<h)return!0}}return!1},
$S:114}
A.bJo.prototype={
$1(d){return d<=0?0:Math.sqrt(220*d)},
$S:5}
A.fU3.prototype={
$7(d,e,f,g,h,i,j){return new A.fM(C.a([d,e,f,g],x.o),0,new A.fU4(h),i,j,6,2,0,!1)},
$S:z+54}
A.fU4.prototype={
$3(d,e,f){return A.nd(d,e,f,this.a+D.k.bj(f/7))},
$S:24}
A.fU1.prototype={
$3(d,e,f){var w=this.a,v=w.b
w=w.a
return A.vw(new A.r(d,e,f),this.b).aa(0,new A.r(v,0,w))},
$S:z+28}
A.fU2.prototype={
$2(d,e){var w=this
return A.vw(new A.r(d,e,0),w.a).aa(0,new A.r(w.b,w.c,w.d))},
$S:z+21}
A.fvD.prototype={
$8(d,e,f,g,h,i,j,k){var w=-g,v=new A.fvE(d+f*h+w*i,f,w,e+g*h+f*i,g,f),u=-j/2,t=-k/2,s=j/2,r=k/2
this.a.GB(v.$2(u,t),v.$2(s,t),v.$2(s,r),v.$2(u,r),D.bO,B.e8)},
$S:1780}
A.fvE.prototype={
$2(d,e){var w=this
return new A.r(w.a+w.b*d+w.c*e,0.95,w.d+w.e*d+w.f*e)},
$S:z+21}
A.cz1.prototype={
$1(d){return d.d===this.a},
$S:z+34}
A.cz2.prototype={
$1(d){return d.r},
$S:z+57}
A.cz0.prototype={
$2(d,e){return D.k.aK(d.x,e.x)},
$S:z+58}
A.bJa.prototype={
$1(d){var w
if(d.r<0)w=d.e||d.c<60
else w=!1
return w},
$S:z+17}
A.bJh.prototype={
$3(d,e,f){var w=this.a
return A.nd(d,e,f,w.b.a+w.f+D.k.bj(f/7))},
$S:24}
A.bJi.prototype={
$3(d,e,f){var w=this.a
return A.nd(d,e,f,w.b.a+w.f+3+D.k.bj(f/7))},
$S:24}
A.bJj.prototype={
$3(d,e,f){var w=this.a
return A.nd(d,e,f,w.b.a+w.f+7+D.k.bj(f/7))},
$S:24}
A.bJk.prototype={
$3(d,e,f){return A.nd(d,e,f,this.a.b.a+2+D.k.bj(f/7))},
$S:24}
A.bJb.prototype={
$3(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=this.a,i=j.z
j=j.Q
w=e.a
v=e.b
u=new C.a3(0,0,0+w,0+v)
t=C.bs(u,D.io)
s=$.S()
r=C.I()
r.r=D.dM.gp(0)
d.az(t,r)
r=C.bs(u.cq(-6),D.kL)
t=C.I()
t.b=D.a9
t.c=5
t.r=D.b9.gp(0)
d.az(r,t)
t=D.k.bj(f*3)
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
q.D(new C.br())}else{q.D(new C.aX(p,o+n))
j=o-r
q.D(new C.aq(s,j))
q.D(new C.aq(m,j))
q.D(new C.br())}j=C.I()
j.r=((t&1)===0?D.b9:D.eV).gp(0)
d.aG(q,j)
j=i===1?"L":""+i
l=C.fu(k,k,k,k,C.cS(k,k,k,k,k,k,k,k,k,C.l(k,k,D.bG,k,k,k,k,k,k,k,k,v*0.78,k,k,D.u,k,k,!0,k,k,k,k,k,k,k,k),j),D.a3,D.bZ,k,D.dA,D.bW)
l.ej()
j=l.b
i=j.c
j=j.a.c
l.a1(d,new C.t(w*0.62-i/2,v/2-j.gbb(j)/2))
return k},
$S:24}
A.bJc.prototype={
$3(d,e,f){return A.nd(d,e,f,1+D.k.bj(f/7))},
$S:24}
A.bJd.prototype={
$3(d,e,f){return A.nd(d,e,f,4+D.k.bj(f/7))},
$S:24}
A.bJe.prototype={
$2(d,e){var w=this.a,v=C.T(d),u=new C.cQ(new C.Z(d,new A.bJf(w),v.k("Z<1>")),new A.bJg(w),v.k("cQ<1,H>")).cI(0,0,D.AI)
if(u===2)w="works but is NOT wired safely: open it and check every wire"
else w=u===1?"started: finish the wiring":e
return w},
$S:1781}
A.bJf.prototype={
$1(d){return!this.a.d[d]},
$S:33}
A.bJg.prototype={
$1(d){return this.a.e[d]},
$S:74}
A.bJZ.prototype={
$1(d){return!d.f},
$S:z+17}
A.bJW.prototype={
$1(d){return d.b===this.a.a.a},
$S:z+18}
A.bJX.prototype={
$1(d){return d.b===this.a&&d.c===this.b},
$S:z+18}
A.bJY.prototype={
$1(d){return d.a<0},
$S:z+31}
A.bK2.prototype={
$1(d){var w,v,u,t
for(w=this.a.x,v=w.length,u=0;u<v;++u){t=w[u]
if(t.b===d)return t}return null},
$S:z+70}
A.bK0.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n=this,m=new A.bK1()
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
$S:z+80}
A.bK1.prototype={
$4(d,e,f,g){return Math.atan2(f-d,g-e)},
$S:318}
A.bK_.prototype={
$1(d){return d.b===this.a.a.a},
$S:z+18}
A.bK3.prototype={
$1(d){var w=d.c
return w==="bathroom"||w==="kitchen"},
$S:z+4}
A.dQ9.prototype={
$0(){return this.b.d=this.a.a},
$S:0}
A.dQa.prototype={
$1(d){return this.a.c75()},
$S:11}
A.dQm.prototype={
$0(){},
$S:0}
A.dQg.prototype={
$0(){return this.a.w=this.b},
$S:0}
A.dQh.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new A.dQf(w))},
$S:0}
A.dQf.prototype={
$0(){return this.a.w=null},
$S:0}
A.dQ5.prototype={
$1(d){return B.aHi},
$S:z+30}
A.dQ6.prototype={
$0(){},
$S:0}
A.dQp.prototype={
$1(d){return B.aHi},
$S:z+30}
A.dQq.prototype={
$0(){},
$S:0}
A.dQo.prototype={
$0(){var w=this.a
return w.m(new A.dQn(w,this.b))},
$S:0}
A.dQn.prototype={
$0(){return this.a.r=this.b},
$S:0}
A.dQ4.prototype={
$0(){return this.a.abH(this.b)},
$S:0}
A.dQb.prototype={
$0(){return this.a.J0(this.b.bej(this.c))},
$S:0}
A.dQc.prototype={
$0(){return this.a.J0(this.b.aKq(this.c))},
$S:0}
A.dQd.prototype={
$0(){return this.a.J0(this.b.aD4(this.c))},
$S:0}
A.dQe.prototype={
$0(){return this.a.ajS(this.b)},
$S:0}
A.dQ8.prototype={
$1(d){var w,v,u=null,t=this.b,s=this.c,r=t.e[s],q=t.c
q===$&&C.c()
q=q[r.a].a
w=this.a
v=x.p
s=C.B(C.a([new A.acw(q.e,44,u),D.as,C.E(C.d("Bed "+(s+1)+": "+q.b,u,u,u,u,u,u,D.hB,u,u,u),1),w.PM("\ud83d\udc89 Treat",new A.dQ7(w,t,s),D.cs)],v),D.m,u,D.e,D.j,0,u,u)
t=r.b
return C.x(C.a([s,D.O,w.Wq("Care",t,t<30?D.aw:D.aQ),w.Wq("Getting better",r.c,D.bj)],v),D.E,u,D.e,D.j,0,D.p)},
$S:275}
A.dQ7.prototype={
$0(){return this.a.J0(this.b.bju(this.c))},
$S:0}
A.dQj.prototype={
$0(){return this.a.J0(this.b.aDA("food"))},
$S:0}
A.dQk.prototype={
$0(){return this.a.J0(this.b.aDA("medicine"))},
$S:0}
A.dQl.prototype={
$0(){var w=0,v=C.j(x.H),u,t=this,s,r
var $async$$0=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:w=3
return C.b(A.aTk(),$async$$0)
case 3:$.E3=null
s=t.a
if(s.c==null){w=1
break}r=s.f
if(r!=null)r.a4(0)
$.ajH=null
s.m(new A.dQi(s))
s.ZQ()
case 1:return C.h(u,v)}})
return C.i($async$$0,v)},
$S:1}
A.dQi.prototype={
$0(){return this.a.d=null},
$S:0}
A.dQr.prototype={
$0(){return C.a4(this.a,!1).ib()},
$S:0}
A.dQs.prototype={
$1(d){return d.a>=0},
$S:z+31}
A.fxx.prototype={
$2(d,e){var w
A:{if("black"===d){w=e.a===25?"The black wire carries the power (hot). It never goes on the green ground screw. Hot goes to a BRASS screw.":"The black (hot) wire goes on a BRASS screw, not on the silver one. Silver is for white (neutral)."
break A}if("white"===d){w=e.a===25?"The white wire is the neutral. The green screw is only for the ground wire. Neutral goes to a SILVER screw.":"The white (neutral) wire goes on a SILVER screw, not on brass. Brass is for the black (hot) wire."
break A}w="The bare copper ground wire only goes on the GREEN screw. It keeps you safe if something goes wrong."
break A}return w},
$S:z+2}
A.fxy.prototype={
$2(d,e){return d==="ground"?y.t:"A black (hot) wire never goes on the green ground screw. The two black wires go on the two BRASS screws."},
$S:z+2}
A.fxz.prototype={
$2(d,e){var w
if(e.e)w="Those are the LOAD screws. They are covered with tape because power must come in on the LINE side. If you wire the LOAD side the GFCI will not protect you."
else A:{if("black"===d){w="The black (hot) wire goes on the BRASS LINE screw."
break A}if("white"===d){w="The white (neutral) wire goes on the SILVER LINE screw."
break A}w=y.t
break A}return w},
$S:z+2}
A.fxA.prototype={
$2(d,e){var w
A:{if("black"===d){w="The black (hot) wire joins the fixture BLACK wire. Not the white one, and never the green ground."
break A}if("white"===d){w="The white (neutral) wire joins the fixture WHITE wire. Not the black one, and never the green ground."
break A}w="The bare copper ground wire joins the fixture GREEN ground wire only."
break A}return w},
$S:z+2}
A.fxB.prototype={
$2(d,e){var w
A:{if("black"===d){w="The black (hot) wire joins the fan BLACK wire. Not the white one, and never the green ground."
break A}if("white"===d){w="The white (neutral) wire joins the fan WHITE wire. Not the black one, and never the green ground."
break A}w="The bare copper ground wire joins the fan GREEN ground wire only."
break A}return w},
$S:z+2}
A.fwe.prototype={
$1(d){return d.a===this.a},
$S:z+44}
A.fUE.prototype={
$1(d){return d.a},
$S:z+108}
A.fvq.prototype={
$1(d){var w
A:{if("hot"===d){w=B.Vh
break A}if("neutral"===d){w=B.Vi
break A}if("ground"===d){w=B.Vj
break A}w=B.aWV
break A}return w},
$S:z+45}
A.fvr.prototype={
$1(d){var w
A:{if("hot"===d){w=B.JE
break A}if("neutral"===d){w=B.JF
break A}if("ground"===d){w=B.JG
break A}w=B.aRr
break A}return w},
$S:z+111}
A.fvo.prototype={
$1(d){return d.a===this.a.a},
$S:z+12}
A.fvp.prototype={
$1(d){return d.a===this.a.b},
$S:z+7}
A.fLX.prototype={
$1(d){return d.e==="hot"},
$S:z+7}
A.fLY.prototype={
$1(d){return d.e==="neutral"},
$S:z+7}
A.fwr.prototype={
$1(d){return D.d.b5(this.a.b,new A.fws(d))},
$S:3}
A.fws.prototype={
$1(d){return d.a===this.a},
$S:z+33}
A.fwo.prototype={
$2(d,e){return A.av1(e.b)>A.av1(d.b)?e:d},
$S:z+46}
A.fwp.prototype={
$1(d){return d.a===this.a.a},
$S:z+12}
A.fwq.prototype={
$1(d){return d.a===this.a.b},
$S:z+7}
A.ftF.prototype={
$5(d,e,f,g,h){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=j.a
i.b=d
w=j.b
v=w.b
u=C.a6(v).k("cH<1,2>")
t=u.k("Z<K.E>")
s=C.C(new C.Z(new C.cH(v,u),new A.ftG(g),t),t.k("K.E"))
r=g==="ground"
q=r?B.vI:h
p=r?0.6:0.3
if(w.c>0){o=e.aa(0,B.h57)
i.jg(A.ahU(C.a([e,e.aa(0,B.h39),o],x.o),4),0.12,q,!1,p,8)
return}if(s.length!==0){n=A.aPj(j.c,D.d.gI(s).a,w)
w=A.o0(e,n,0.5)
v=n.a>0
m=w.aa(0,new A.r(v?0.5:-0.5,0.2,0.9))
w=e.aa(0,B.h9j)
if(j.d)v=0
else v=v?0.06:-0.06
l=A.ahU(C.a([e,w,m,n.aa(0,new A.r(v,0,0.08)),n],x.o),5)
k=D.d.ds(l,0,D.k.bj(l.length*0.8))
i.jg(k,0.12,q,!1,p,8)
if(!r)i.jg(D.d.fJ(l,k.length-1),0.08639999999999999,B.vI,!1,0.6,8)}else{l=A.ahU(C.a([e,e.aa(0,B.h_q),A.o0(e,f,0.6),f],x.o),5)
k=r?l:D.d.ds(l,0,D.k.bj(l.length*0.86))
i.jg(k,0.12,q,!1,p,8)
if(!r)i.jg(D.d.fJ(l,k.length-1),0.08639999999999999,B.vI,!1,0.6,8)}},
$S:z+47}
A.ftG.prototype={
$1(d){return d.b===this.a},
$S:701}
A.ff5.prototype={
$2(d,e){var w,v=this.a
v.b=d
w=A.H_(e,0.9,6)
if(this.b)v.jg(w,0.2,B.Y7,!1,0.35,10)
this.c.push(D.d.gak(w))},
$S:z+48}
A.fUD.prototype={
$1(d){return d.a===this.a},
$S:z+44}
A.fgp.prototype={
$6$taped(d,e,f,g,h,i){var w,v,u,t=this.a
t.e=0.9
t.b=d
w=this.b
v=w.a+e*0.75
u=w.b+f
w=w.c-0.45
t.aY(new A.r(v,u,w),B.haL,h,0.7)
t.dR(new A.r(v,u,w),new A.r(v+e*0.22,u,w),0.17,g,0.9,12)
t.aP(new A.r(v+e*0.23,u,w),B.h7e,B.EZ)
if(i)t.aY(new A.r(v+e*0.05,u,w),B.h75,D.bG,0.2)},
$5(d,e,f,g,h){return this.$6$taped(d,e,f,g,h,!1)},
$S:1783}
A.fxC.prototype={
$2(d,e){var w
if(d==="ground")w=y.t
else w=e.a===25?y.T:"A double-pole switch has two LINE screws on top (power in) and two LOAD screws on the bottom (power out to the heater). Each leg goes straight down the same side: left leg on the left screws, right leg on the right ones."
return w},
$S:z+2}
A.fxD.prototype={
$2(d,e){var w
if(d==="ground")w=y.t
else if(e.a===25)w=y.T
else w=d==="common"?"The COMMON wire does not go on a traveler screw. It goes on the odd-coloured COMMON screw.":"The travelers go on the two brass TRAVELER screws. The COMMON screw is for the black power wire only."
return w},
$S:z+2}
A.fxE.prototype={
$2(d,e){var w
if(d==="ground")w=y.t
else w=e.a===25?"A traveler never goes on the green ground screw.":"A four-way has a pair of screws for the travelers coming IN (top) and a pair for the travelers going OUT (bottom). Do not mix the two pairs."
return w},
$S:z+2}
A.fxF.prototype={
$2(d,e){var w
A:{if("ground"===d){w=y.t
break A}if("neutral"===d){w="The white neutral wire goes on the silver NEUTRAL screw only."
break A}if(e.a===25)w=y.T
else w=d==="line"?"The wire from the panel is the LINE: it goes on the LINE screw.":"The wire to the light is the LOAD: it goes on the LOAD screw."
break A}return w},
$S:z+2}
A.fxG.prototype={
$2(d,e){var w
if(d==="ground")w=y.t
else if(e.a===25)w=y.T
else w=d==="feed"?"The feed goes on the FEED screw, where the two switches are joined.":"The wires to the lights go on the separate screws, one for each switch."
return w},
$S:z+2}
A.fxH.prototype={
$2(d,e){var w,v=y.T
A:{if("ground"===d){w=y.t
break A}if("neutral"===d){w="The white neutral wire goes on a SILVER screw."
break A}if("always"===d){w=e.a===25?v:"The always-hot wire goes on the BOTTOM brass screw. The top one is for the switched wire."
break A}w=e.a===25?v:"The switched hot wire (red) goes on the TOP brass screw."
break A}return w},
$S:z+2}
A.fxI.prototype={
$2(d,e){var w
A:{if("ground"===d){w=y.t
break A}if("neutral"===d){w=y.I
break A}w=e.a===25?y.T:"The black and red hot wires go on the two brass screws, X and Y. The silver W screw is for the neutral."
break A}return w},
$S:z+2}
A.fxJ.prototype={
$2(d,e){return d==="neutral"?y.I:"The black and red hot wires go on the two brass screws, X and Y."},
$S:z+2}
A.fxK.prototype={
$2(d,e){var w
if(d==="ground")w=y.t
else w=e.a===25?y.T:"Both hot wires go on the two brass screws."
return w},
$S:z+2}
A.fxL.prototype={
$2(d,e){var w
A:{if("isoground"===d){w="The isolated ground wire only goes on the green screw with the orange triangle."
break A}if("neutral"===d){w=y.c
break A}w=e.a===25?"A hot wire never goes on the ground screw.":y.u
break A}return w},
$S:z+2}
A.ftr.prototype={
$1(d){return d.a===this.a},
$S:z+23}
A.fts.prototype={
$0(){return B.alM},
$S:z+50}
A.fUA.prototype={
$1(d){var w=d>60?62:99
return Math.min(d*0.5625,w)},
$S:5}
A.fUx.prototype={
$1(d){return d>40?30+d/2:58},
$S:5}
A.fUy.prototype={
$2(d,e){return D.k.aK(d.a,e.a)},
$S:1784}
A.fUz.prototype={
$2(d,e){var w=this.a
if(e-d>w.a-w.b){w.b=d
w.a=e}},
$S:255}
A.bTd.prototype={
$1(d){return d},
$S:119}
A.bTc.prototype={
$1(d){return B.f0I.t(0,d.b)},
$S:z+3}
A.bTO.prototype={
$1(d){return d.a==="Jobs"},
$S:z+52}
A.bTP.prototype={
$1(d){return new A.oi(!1,"back",d,5)},
$S:z+53}
A.bTQ.prototype={
$4(d,e,f,g){return!D.d.b5(this.a.x,new A.bTR(d,f,e,g))},
$2(d,e){return this.$4(d,e,135,115)},
$3(d,e,f){return this.$4(d,e,f,115)},
$S:1785}
A.bTR.prototype={
$1(d){var w=this,v=d.b
return!D.d.t(B.a4L,v)&&!D.d.t(B.HJ,v)&&Math.abs(d.c-w.a)<w.b&&Math.abs(d.d-w.c)<w.d},
$S:z+3}
A.bTS.prototype={
$4(d,e,f,g){var w,v,u,t,s,r,q,p,o,n
for(w=this.a,v=w.length,u=f/2+90,t=g/2+20,s=0;s<v;++s){r=w[s]
if(Math.abs(r.c-d)<u){q=r.d
p=q>e?70:30
p=Math.abs(q-e)<t+p
q=p}else q=!1
if(q)return!1}for(w=this.b.x,v=w.length,s=0;s<w.length;w.length===v||(0,C.M)(w),++s){o=w[s]
u=o.b
if(D.d.t(B.Ru,u)||u==="roundabout"||u==="rug"||u==="flowers")continue
n=B.hw.h(0,u)
if(Math.abs(o.c-d)<(f+n.c)/2+130){u=o.d
t=n.d
q=u>e?150:110
q=Math.abs(u-e)<(g+t)/2+q
u=q}else u=!1
if(u)return!1}return!0},
$S:702}
A.bTW.prototype={
$4(d,e,f,g){var w,v,u,t,s,r,q,p,o,n,m,l,k,j
if(Math.abs(d)>1150||e<-600||e>1450)return!1
for(w=this.a.x,v=w.length,u=f/2+40,t=g/2+40,s=0;s<w.length;w.length===v||(0,C.M)(w),++s){r=w[s]
q=r.b
if(q==="rug"||q==="flowers"||q==="pond")continue
p=B.hw.h(0,q)
p.toString
o=(r.e&1)===1
n=o?p.d:p.c
m=o?p.c:p.d
if(Math.abs(r.c-d)<(f+n)/2+34&&Math.abs(r.d-e)<(g+m)/2+34)return!1
if(B.f0V.t(0,q)){l=r.e*3.141592653589793/2
q=r.c
o=Math.sin(l)
p=p.d/2+30
k=r.d
j=Math.cos(l)
if(Math.abs(q+o*p-d)<u&&Math.abs(k+j*p-e)<t)return!1}}return!0},
$S:702}
A.bTT.prototype={
$3(d,e,f){var w,v,u,t,s,r,q,p,o,n={},m=B.hw.h(0,d)
m.toString
w=n.a=0
v=this.a
u=new A.bTV(n,v,d)
for(t=f.length,s=this.b,r=m.c,m=m.d;w<t;++w){q=f[w]
p=q.a
o=q.b
if(n.a>=e)return
if(s.$4(p,o,r,m))u.$2(p,o)}v=v.x
o=-500
for(;;){if(!(o<1400&&n.a<e))break
p=-1100
for(;;){if(!(p<=1100&&n.a<e))break
A:{if(D.d.b5(v,new A.bTU(d,p,o)))break A
if(s.$4(p,o,r,m))u.$2(p,o)}p+=110}o+=100}},
$S:1787}
A.bTV.prototype={
$2(d,e){var w=this.b,v=this.c
w.dz(0,v,d,e)
if(v==="ubstation")w.dz(0,"car",d+96,e+6);++this.a.a},
$S:255}
A.bTU.prototype={
$1(d){return d.b===this.a&&Math.abs(d.c-this.b)<420&&Math.abs(d.d-this.c)<420},
$S:z+3}
A.bU_.prototype={
$1(d){return d.gkJ()},
$S:z+4}
A.bTZ.prototype={
$1(d){var w=d.c
return(w==="bathroom"||w==="kitchen")&&d.gjO()},
$S:z+4}
A.bTY.prototype={
$1(d){var w=d.c
return w==="bathroom"||w==="kitchen"},
$S:z+4}
A.bTX.prototype={
$1(d){return d.gkJ()&&d.gjO()},
$S:z+4}
A.eaR.prototype={
$1(d){return!(d.gkJ()&&d.gjO())},
$S:z+4}
A.eaO.prototype={
$1(d){var w,v=this.a.a.f
A:{if("wiring"===v){w=!d.gkJ()
break A}if("plumbing"===v){w=!d.gjO()
break A}w=!(d.gkJ()&&d.gjO())
break A}return w},
$S:z+4}
A.eaP.prototype={
$1(d){var w,v,u,t,s,r,q=this.a,p=q.ghI()
if(Date.now()<0){if(q.c!=null)q.m(new A.eaN())
return}if(p==null||q.c==null||q.cx!=null||q.bZ>0)return
w=q.d
w===$&&C.c()
v=w.d
v===$&&C.c()
u=p.beu(w,v[w.e].a)
w=C.a([],x.s)
for(v=u.length,t=0;t<u.length;u.length===v||(0,C.M)(u),++t){s=u[t]
w.push(""+s.a+":"+D.k.V(s.c)+":"+D.k.V(s.d)+":"+s.x+":"+s.Q)}r=D.d.aH(w,"|")
if(q.aI==null&&r!==q.du){q.du=r
q.m(q.giU())}w=p.f
if(w.length!==0&&D.d.gI(w)!==q.fy){w=D.d.gI(w)
q.fy=w
q.iD(w)}},
$S:11}
A.eaN.prototype={
$0(){},
$S:0}
A.eaQ.prototype={
$1(d){var w,v=this.a
if(v.c==null)return
w=v.d
w===$&&C.c()
if(w.a.length!==0)v.iD(v.c11())
else{w=v.a.f
if(w.length!==0){A:{if("wiring"===w){w="This room needs wiring: press the Wiring button, or tap the red outlet or the light."
break A}if("plumbing"===w){w="This room needs plumbing: press the Plumbing button, or tap the toilet or the sink."
break A}w="Walk through the house and fix what the signs say is wrong."
break A}v.iD(w)}}},
$S:9}
A.e9B.prototype={
$0(){var w=this.a
w.ax=this.b
w.ay=this.c},
$S:0}
A.e9C.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new A.e9A(w))},
$S:0}
A.e9A.prototype={
$0(){return this.a.ax=null},
$S:0}
A.e9D.prototype={
$0(){var w=this.a
w.r=this.b
w.Q=0
w.as=-1
w.at=0
w.iC()},
$S:0}
A.e89.prototype={
$0(){var w=this.a,v=w.d
v===$&&C.c()
v.e=this.b
w.Q=0
w.as=-1
w.at=0
w.ax=null
w.iC()},
$S:0}
A.ea3.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&C.c()
w=u.d
w===$&&C.c()
u=w[u.e]
u.fy=!u.fy
v.iC()},
$S:0}
A.e96.prototype={
$0(){return this.a.k3=!0},
$S:0}
A.e97.prototype={
$0(){var w=this.a,v=this.b
w.Q=v-100
w.at=v
w.iC()},
$S:0}
A.e98.prototype={
$0(){var w=this.a,v=this.b
w.as=v-300
w.at=v},
$S:0}
A.e99.prototype={
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
A.e9a.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&C.c()
w=u.d
w===$&&C.c()
w[u.e].p2=!0
v.iC()},
$S:0}
A.e7D.prototype={
$1(d){var w,v,u,t,s,r=this,q=null,p=C.d("Door to "+r.b,q,q,q,q,q,q,D.de,q,q,q),o=r.a,n=o.d
n===$&&C.c()
w=n.d
w===$&&C.c()
v=r.c
u=C.d(w[n.e].at.t(0,v)?"The door is open.":"The door is closed.",q,q,q,q,q,q,D.lN,q,q,q)
n=o.d
w=n.d
w===$&&C.c()
t=C.X(w[n.e].at.t(0,v)?B.bJw:B.bJI,q,q,q,q,q)
n=o.d
w=n.d
w===$&&C.c()
s=x.p
return C.bn(!0,new C.D(D.bR,C.x(C.a([p,D.av,u,D.ad,C.bW(D.bE,C.a([C.dj(t,C.d(w[n.e].at.t(0,v)?"Close the door":"Open the door",q,q,q,q,q,q,q,q,q,q),new A.e7B(o,d,v),q),C.et(B.bQ2,B.fAu,new A.e7C(o,d,v,r.d),q)],s),D.bq,q,10,10)],s),D.E,q,D.e,D.Q,0,D.p),q),!0,!1,D.af,!0,!0)},
$S:26}
A.e7B.prototype={
$0(){var w,v,u
C.a4(this.b,!1).O(null)
w=this.a
v=this.c
w.m(new A.e7A(w,v))
w=w.d
w===$&&C.c()
u=w.d
u===$&&C.c()
A.fU(u[w.e].at.t(0,v)?700:450,70,0.25,"tri")},
$S:0}
A.e7A.prototype={
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
A.e7C.prototype={
$0(){var w,v,u=this
C.a4(u.b,!1).O(null)
w=u.a
v=u.c
w.m(new A.e7y(w,v))
A.fU(700,70,0.25,"tri")
C.bP(D.mB,new A.e7z(w,v,u.d),x.P)},
$S:0}
A.e7y.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&C.c()
w=u.d
w===$&&C.c()
w[u.e].at.M(0,this.b)
v.iC()},
$S:0}
A.e7z.prototype={
$0(){var w=this.a
if(w.c==null)return
w.m(new A.e7x(w,this.b))
w.Ax(this.c)},
$S:12}
A.e7x.prototype={
$0(){var w,v=this.a.d
v===$&&C.c()
w=v.d
w===$&&C.c()
return w[v.e].at.W(0,this.b)},
$S:0}
A.e7M.prototype={
$0(){return this.a.es=!0},
$S:0}
A.e7N.prototype={
$0(){var w=this.a
w.f0=!0
w.fw=!1
w.R8=!w.p4},
$S:0}
A.e7O.prototype={
$0(){var w=this.a
w.R8=w.f0=!1},
$S:0}
A.e9_.prototype={
$2(d,e){var w=null,v=D.w.j(0.55),u=C.J(D.bY,D.r,1)
return C.aB(w,C.p(w,C.X(d,D.c,w,w,w,22),D.f,w,w,new C.o(v,w,u,w,w,w,D.a6),w,44,w,D.MX,w,w,w,44),D.y,!1,w,new A.e91(this.a),w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,e,w,w,w,w,w,w,!1,D.a5)},
$S:346}
A.e91.prototype={
$0(){var w=this.a
return w.m(new A.e90(w))},
$S:0}
A.e90.prototype={
$0(){return this.a.fw=!0},
$S:0}
A.e92.prototype={
$0(){var w=this.a
return w.m(new A.e8Z(w))},
$S:0}
A.e8Z.prototype={
$0(){return this.a.fw=!1},
$S:0}
A.e93.prototype={
$0(){var w=this.a
return w.p4?w.a2z():w.m(new A.e8Y(w))},
$S:0}
A.e8Y.prototype={
$0(){return this.a.R8=!0},
$S:0}
A.e94.prototype={
$0(){var w=this.a
return w.m(new A.e8X(w))},
$S:0}
A.e8X.prototype={
$0(){var w=this.a
return w.h4=!w.h4},
$S:0}
A.e95.prototype={
$0(){var w=this.a
return w.m(new A.e8W(w))},
$S:0}
A.e8W.prototype={
$0(){return this.a.ai=!0},
$S:0}
A.e7d.prototype={
$0(){var w=this.a
return w.m(new A.e7e(w))},
$S:0}
A.e7e.prototype={
$0(){return this.a.ai=!1},
$S:0}
A.e7Y.prototype={
$2(d,e){var w=null,v=D.w.j(0.55),u=C.J(D.bY,D.r,1)
return C.aB(w,C.p(w,C.X(d,D.c,w,w,w,20),D.f,w,w,new C.o(v,w,u,w,w,w,D.a6),w,40,w,D.ix,w,w,w,40),D.y,!1,w,new A.e8_(this.a),w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,e,w,w,w,w,w,w,!1,D.a5)},
$S:346}
A.e8_.prototype={
$0(){var w=this.a
return w.m(new A.e7Z(w))},
$S:0}
A.e7Z.prototype={
$0(){return this.a.fw=!0},
$S:0}
A.e80.prototype={
$0(){var w=this.a
return w.m(new A.e7X(w))},
$S:0}
A.e7X.prototype={
$0(){return this.a.fw=!1},
$S:0}
A.e81.prototype={
$0(){var w,v,u=this.a
u.m(new A.e7W(u))
w=u.d
w===$&&C.c()
v=w.d
v===$&&C.c()
if(v[w.e].c!=="outside")u.xV()},
$S:0}
A.e7W.prototype={
$0(){return this.a.es=!1},
$S:0}
A.e82.prototype={
$0(){var w=this.a
return w.m(new A.e7V(w))},
$S:0}
A.e7V.prototype={
$0(){var w=this.a
return w.ab=w.ab===1?3:1},
$S:0}
A.e83.prototype={
$0(){var w=this.a
return w.m(new A.e7U(w))},
$S:0}
A.e7U.prototype={
$0(){var w=this.a
return w.h4=!w.h4},
$S:0}
A.e84.prototype={
$0(){var w=this.a
return w.m(new A.e7T(w))},
$S:0}
A.e7T.prototype={
$0(){return this.a.ai=!0},
$S:0}
A.e85.prototype={
$0(){var w=this.a
return w.p4?w.a2z():w.m(new A.e7S(w))},
$S:0}
A.e7S.prototype={
$0(){return this.a.R8=!0},
$S:0}
A.ea1.prototype={
$2$mine(d,e){var w=null,v=e?D.a8:D.a4,u=e?D.bk:D.e6,t=C.m(18)
return new C.bM(v,w,w,C.p(w,C.d(d,w,w,w,w,w,w,B.aSs,w,w,w),D.f,w,B.acu,new C.o(u,w,w,t,w,w,D.n),w,w,w,D.cu,D.iT,w,w,w),w)},
$1(d){return this.$2$mine(d,!1)},
$S:1788}
A.ea2.prototype={
$1(d){var w=this,v=null,u=w.b,t=u.b,s=x.p,r=C.B(C.a([C.h7(u.e.c,v,C.d(t[0],v,v,v,v,v,v,D.iG,v,v,v),v,18),D.as,C.d(t,v,v,v,v,v,v,D.k2,v,v,v),D.b2,B.fM1],s),D.m,v,D.e,D.j,0,v,v),q=w.c,p=w.d,o=q.$1("Hi, it's "+t+". "+p.d),n=w.e,m="Please come to "+n,l=w.a
return C.bn(!0,new C.D(A7.yd,C.x(C.a([r,N.MM,o,q.$1(p.c==="power"?m+" and fix the wiring. I can't stay in the dark.":m+" and fix the leak before it floods."),q.$1("I'll pay "+p.e+" points. Thank you!"),q.$2$mine("On my way!",!0),D.am,C.bW(D.bE,C.a([C.dj(B.bU7,C.d("Show me where "+t+" is",v,v,v,v,v,v,v,v,v,v),new A.ea_(l,d,p,u),v),C.dj(B.bX_,C.d("Go and fix it ("+n+")",v,v,v,v,v,v,v,v,v,v),new A.ea0(l,d,w.f,n),v)],s),D.bq,v,8,10)],s),D.E,v,D.e,D.Q,0,D.p),v),!0,!1,D.af,!0,!0)},
$S:26}
A.ea_.prototype={
$0(){var w,v,u,t,s=this
C.a4(s.b,!1).O(null)
w=s.a
v=w.fr
u=C.T(v).k("Z<1>")
t=C.C(new C.Z(v,new A.e9Z(s.c),u),u.k("K.E"))
if(t.length!==0){v=w.d
v===$&&C.c()
u=v.d
u===$&&C.c()
v=u[v.e].c==="outside"}else v=!1
if(v){v=w.e
v===$&&C.c()
v.xf(160,new A.r(D.d.gI(t).c,30,D.d.gI(t).d))}w.ef(s.d.b+" is the one with the phone sign.",!0)},
$S:0}
A.e9Z.prototype={
$1(d){return d.a===this.a.b},
$S:z+13}
A.ea0.prototype={
$0(){var w,v=this
C.a4(v.b,!1).O(null)
w=v.a
if(w.aL)w.a2A()
w.es=!1
w.Ax(v.c)
w.ef("You are in "+v.d+". Fix the problem with the Wiring or Plumbing button.",!0)},
$S:0}
A.e8n.prototype={
$0(){var w=this.a
w.x=!0
w.z=!1
w.r="ceiling"
w.iC()},
$S:0}
A.e6c.prototype={
$1(d){return d.c==="outside"},
$S:z+4}
A.eau.prototype={
$1(d){return d.c==="outside"},
$S:z+4}
A.e6D.prototype={
$0(){},
$S:0}
A.e8i.prototype={
$0(){var w=this.a
return w.m(new A.e8h(w))},
$S:0}
A.e8h.prototype={
$0(){return this.a.id=!1},
$S:0}
A.e8j.prototype={
$0(){var w=this.a
return w.m(new A.e8g(w))},
$S:0}
A.e8g.prototype={
$0(){return this.a.id=!1},
$S:0}
A.eav.prototype={
$1(d){var w=this.b
return d.d===this.a.aqb(w.f,w.r)},
$S:z+34}
A.eat.prototype={
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
$S:z+19}
A.e9H.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=d.a==="tank"?A.h3z(l.a.c5.b):d.e,i=l.b
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
if(i){i=C.d(p,k,k,k,k,k,k,D.wS,k,k,k)
o=C.d(o,k,1,D.a2,k,k,k,D.K3,D.L,k,k)
n=C.d(n,k,2,D.a2,k,k,k,B.fi6,D.L,k,k)
p=w?D.bG:D.bz
m=C.m(12)
i=C.x(C.a([i,D.bA,o,n,D.fO,C.p(k,C.d(""+j+" \u2b50",k,k,k,k,k,k,C.l(k,k,w?D.w:D.bY,k,k,k,k,k,k,k,k,13,k,k,D.u,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),D.f,k,k,new C.o(p,k,k,m,k,k,D.n),k,k,k,k,D.FX,k,k,k)],x.p),D.m,k,D.e,D.Q,0,D.p)}else{i=C.d(p,k,k,k,k,k,k,D.nE,k,k,k)
p=x.p
n=C.E(C.x(C.a([C.d(o,k,k,k,k,k,k,D.oz,k,k,k),C.d(n,k,k,k,k,k,k,B.aRU,k,k,k)],p),D.E,k,D.e,D.j,0,D.p),1)
o=w?D.bG:D.bz
m=C.m(14)
i=C.B(C.a([i,D.as,n,C.p(k,C.d(""+j+" \u2b50",k,k,k,k,k,k,C.l(k,k,w?D.w:D.bY,k,k,k,k,k,k,k,k,k,k,k,D.u,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),D.f,k,k,new C.o(o,k,k,m,k,k,D.n),k,k,k,k,D.nn,k,k,k)],p),D.m,k,D.e,D.j,0,k,k)}return C.aB(k,C.p(k,i,D.f,k,k,new C.o(s,k,q,r,k,k,D.n),k,k,k,D.cu,new C.Q(u,t,u,t),k,k,v),D.y,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,new A.e9I(l.a,d),k,k,k,k,k,k,!1,D.a5)},
$S:z+59}
A.e9I.prototype={
$0(){return this.a.aOW(this.b)},
$S:0}
A.e9G.prototype={
$2(d,e){var w,v,u,t=null,s=x.p,r=C.a([new C.D(B.bwl,C.d(d,t,t,t,t,t,t,B.foi,t,t,t),t)],s)
if(this.a){s=C.a([],s)
for(w=e.length,v=this.b,u=0;u<w;++u)s.push(v.$1(e[u]))
r.push(C.bW(D.bE,s,D.bq,t,0,8))}else for(s=e.length,w=this.b,u=0;u<s;++u)r.push(w.$1(e[u]))
return C.x(r,D.E,t,D.e,D.Q,0,D.p)},
$S:z+60}
A.e9F.prototype={
$0(){var w=this.a
return w.m(new A.e9E(w))},
$S:0}
A.e9E.prototype={
$0(){return this.a.k2=!1},
$S:0}
A.e8H.prototype={
$2(d,e){var w=null,v=e.j(0.2),u=C.m(10)
return C.p(w,C.d(d,w,w,w,w,w,w,C.l(w,w,e,w,w,w,w,w,w,w,w,11.5,w,w,D.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),D.f,w,w,new C.o(v,w,w,u,w,w,D.n),w,w,w,w,D.fM,w,w,w)},
$S:1789}
A.e8I.prototype={
$1(d){return B.hw.h(0,d.b).a},
$S:z+61}
A.e8E.prototype={
$1(d){var w,v,u,t,s=this,r=null,q=d.c,p=A.yI(q),o=D.k.V(Math.sqrt(Math.pow(p.a-s.b,2)+Math.pow(p.b-s.c,2))/10),n=D.c.j(0.07),m=C.m(16),l=C.J(D.bz,D.r,1),k=d.b,j=C.d(A.L3(k).b,r,r,r,r,r,r,D.nE,r,r,r),i=s.d
k=C.d(d.w?"\ud83d\ude91 "+A.L3(k).c+": "+C.w(i.$1(q))+" \u2192 "+C.w(i.$1(d.d))+" (somebody was run over)":A.L3(k).c+": "+C.w(i.$1(q))+" \u2192 a house",r,r,r,r,r,r,B.aTq,r,r,r)
w=s.e
v=w.$2(""+d.e+" points",D.bG)
u=w.$2(""+o+" m to the shop",D.aQ)
p=A.yI(q)
t=A.yI(d.d)
q=x.p
w=C.E(C.x(C.a([k,D.cL,C.bW(D.bE,C.a([v,u,w.$2(""+D.k.V(Math.sqrt(Math.pow(p.a-t.a,2)+Math.pow(p.b-t.b,2))/10)+" m trip",D.bj)],q),D.bq,r,0,6)],q),D.E,r,D.e,D.j,0,D.p),1)
k=s.f!=null
i=k?r:new A.e8G(s.a,s.r,d,i)
v=k?D.bz:D.bG
u=C.m(14)
return C.p(r,C.B(C.a([j,D.as,w,D.ac,C.aB(r,C.p(r,C.d("Take",r,r,r,r,r,r,C.l(r,r,k?D.bY:D.w,r,r,r,r,r,r,r,r,r,r,r,D.u,r,r,!0,r,r,r,r,r,r,r,r),r,r,r),D.f,r,r,new C.o(v,r,r,u,r,r,D.n),r,r,r,r,D.iT,r,r,r),D.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,i,r,r,r,r,r,r,!1,D.a5)],q),D.m,r,D.e,D.j,0,r,r),D.f,r,r,new C.o(n,r,l,m,r,r,D.n),r,r,r,D.cu,D.bT,r,r,r)},
$S:z+62}
A.e8G.prototype={
$0(){var w=this,v=w.c,u=w.a
if(w.b.cXi(0,v,u.CW.gil()/1000)){u.m(new A.e8F(u))
if(!u.aL)u.a2w()
u.ef(A.L3(v.b).b+" Order taken: go to the "+w.d.$1(v.c).toLowerCase()+" (follow the yellow line), then to the house.",!0)}},
$S:0}
A.e8F.prototype={
$0(){return this.a.go=!1},
$S:0}
A.e8C.prototype={
$0(){var w=this.a
return w.m(new A.e8B(w))},
$S:0}
A.e8B.prototype={
$0(){return this.a.go=!1},
$S:0}
A.e8D.prototype={
$0(){var w=this.a
return w.m(new A.e8A(w,this.b))},
$S:0}
A.e8A.prototype={
$0(){this.b.a4(0)
this.a.ef("Order given back.",!0)},
$S:0}
A.e86.prototype={
$0(){return this.a.k3=!1},
$S:0}
A.e87.prototype={
$0(){return this.a.k3=!1},
$S:0}
A.e9x.prototype={
$0(){return A.fU(1175,220,0.3,"tri")},
$S:0}
A.e7K.prototype={
$0(){var w=this.a
return w.m(new A.e7J(w))},
$S:0}
A.e7J.prototype={
$0(){return this.a.k3=!1},
$S:0}
A.e7L.prototype={
$0(){return this.a.bT9(this.b)},
$S:0}
A.e7w.prototype={
$4(d,e,f,g){var w=-d,v=this.a
return 0.5*(2*e+(w+f)*v+(2*d-5*e+4*f-g)*v*v+(w+3*e-3*f+g)*v*v*v)},
$S:318}
A.e8o.prototype={
$1(d){return d.c==="outside"},
$S:z+4}
A.e9J.prototype={
$0(){var w=this.a
w.R8=!1
w.y1=null
w.p4=!0
w.rx=this.b
w.ry=-1},
$S:0}
A.e7I.prototype={
$2(d,e){return d[D.o.E(e,0,d.length-1)]},
$S:z+63}
A.e9U.prototype={
$0(){var w=this.a
w.p4=!1
w.aI=null
w.iC()},
$S:0}
A.e7G.prototype={
$4(d,e,f,g){var w=null,v=D.c.j(0.07),u=C.m(16),t=C.J(D.bz,D.r,1),s=x.p
return C.aB(w,C.p(w,C.B(C.a([C.d(d,w,w,w,w,w,w,D.nE,w,w,w),D.bc,C.E(C.x(C.a([C.d(e,w,w,w,w,w,w,D.hB,w,w,w),C.d(f,w,w,w,w,w,w,D.hl,w,w,w)],s),D.E,w,D.e,D.j,0,D.p),1),A_.OO],s),D.m,w,D.e,D.j,0,w,w),D.f,w,w,new C.o(v,w,t,u,w,w,D.n),w,w,w,D.jN,D.bf,w,w,w),D.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new A.e7H(this.a,g),w,w,w,w,w,w,!1,D.a5)},
$S:1790}
A.e7H.prototype={
$0(){return this.a.cxJ(this.b)},
$S:0}
A.e7F.prototype={
$0(){var w=this.a
return w.m(new A.e7E(w))},
$S:0}
A.e7E.prototype={
$0(){return this.a.R8=!1},
$S:0}
A.e8d.prototype={
$1(d){return d.c==="outside"},
$S:z+4}
A.e9T.prototype={
$0(){var w,v,u=this.a,t=u.d
t===$&&C.c()
w=t[this.b]
v=u.at.h(0,w.a)
if(v==null||!A.h_g(w.b,v.a))return 0
return v.b.c<2?1:2},
$S:92}
A.eaI.prototype={
$1(d){return d},
$S:119}
A.e7f.prototype={
$1(d){return d},
$S:119}
A.e8a.prototype={
$0(){var w=A.cqN(0,null,!1,this.a.a*13+5+this.b.f,!0)
w.alW()
return w},
$S:z+64}
A.e8b.prototype={
$1(d){return A.cgZ(!1,this.a,!1)},
$S:z+38}
A.e8c.prototype={
$1(d){return d.length!==0},
$S:3}
A.e7Q.prototype={
$0(){return new A.Cv(C.U(x.S,x.N))},
$S:z+66}
A.e7R.prototype={
$1(d){return new A.DS("light",this.a,null)},
$S:z+25}
A.e8q.prototype={
$1(d){return d.c==="outside"},
$S:z+4}
A.e8r.prototype={
$0(){return this.a.y1=this.b},
$S:0}
A.e6K.prototype={
$1(d){var w=null
return new C.bM(D.a4,w,w,C.p(w,C.d(d,w,w,w,w,w,w,B.aSs,w,w,w),D.f,w,B.acu,B.b4r,w,w,w,D.cu,D.iT,w,w,w),w)},
$S:141}
A.e6J.prototype={
$5$primary(d,e,f,g,h){var w=null,v=h?f:f.j(0.14),u=C.m(16),t=C.J(f,D.r,1),s=C.X(d,h?D.w:f,w,w,w,21)
return C.aB(w,C.p(w,C.B(C.a([s,D.ac,C.d(e,w,w,w,w,w,w,C.l(w,w,h?D.w:D.c,w,w,w,w,w,w,w,w,14.5,w,w,D.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),D.m,w,D.b8,D.j,0,w,w),D.f,w,w,new C.o(v,w,t,u,w,w,D.n),w,48,w,D.jN,w,w,w,w),D.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,g,w,w,w,w,w,w,!1,D.a5)},
$4(d,e,f,g){return this.$5$primary(d,e,f,g,!1)},
$S:1791}
A.e6L.prototype={
$0(){var w=this.a
return w.m(new A.e6I(w))},
$S:0}
A.e6I.prototype={
$0(){return this.a.y1=null},
$S:0}
A.e6M.prototype={
$0(){var w,v,u=this.a
u.m(new A.e6H(u))
if(!u.aL)u.a2w()
w=u.aC
if(w!=null){v=u.e
v===$&&C.c()
v.apy(220,0.5,new A.r(w.f,30,w.r))}u.ef("Follow the yellow line on the ground to get there.",!0)},
$S:0}
A.e6H.prototype={
$0(){return this.a.y1=null},
$S:0}
A.e6N.prototype={
$0(){var w,v=this.a
v.m(new A.e6G(v))
if(v.cJ==null){v.cJ=this.b
v.hL=0}w=this.b
v.Sh(w.a)
w=w.c
if(w==="power")w="You are at the house. Walk in and onto the red mat at the breaker panel."
else w=w==="sick"?"You are at the hospital. Walk in and onto the desk.":y.Y
v.ef(w,!0)},
$S:0}
A.e6G.prototype={
$0(){return this.a.y1=null},
$S:0}
A.e6O.prototype={
$0(){var w=this.a
w.m(new A.e6F(w,this.b))
w.ef("Saved on your waiting list.",!0)},
$S:0}
A.e6F.prototype={
$0(){var w,v=this.a
v.y1=null
w=this.b
if(v.cJ===w)v.cJ=null
v=v.eI
if(!D.d.t(v,w))v.push(w)},
$S:0}
A.e6P.prototype={
$0(){var w=this.a
return w.m(new A.e6E(w))},
$S:0}
A.e6E.prototype={
$0(){return this.a.y2=!1},
$S:0}
A.e7b.prototype={
$1(d){var w=null
return C.by(D.qU,new C.a7(w,C.aI(d,w,x.w).w.a.b*0.82,new A.apr(this.a,w),w),D.aq)},
$S:1792}
A.e7c.prototype={
$0(){var w=this.a
w.azp()
w.iC()},
$S:0}
A.e9w.prototype={
$1(d){return new C.dY(new A.e9u(this.a,this.b,this.c),null)},
$S:20}
A.e9u.prototype={
$2(d,e){var w,v,u,t,s=null,r=new A.e9v(this.a,e),q=this.b,p=q.a,o=C.d(p.b+" "+q.gaDn(0),s,s,s,s,s,s,Q.t4,s,s,s)
p=C.d(p.f,s,s,s,s,s,s,D.vg,s,s,s)
w=C.d("Now: "+q.gUd()+"\nFood "+D.k.V(100-q.b)+"%   Health "+D.k.V(q.c)+"%   Home "+D.k.V(q.d)+"%",s,s,s,s,s,s,B.aSV,s,s,s)
v=this.c
u=x.p
t=C.a([r.$2("\ud83c\udf5e Feed",new A.e9r(v,q))],u)
if(q.e)t.push(r.$3$col("\ud83d\udc8a Medicine",new A.e9s(v,q),D.bv))
if(q.e||q.c<60)t.push(r.$3$col("\ud83c\udfe5 Hospital",new A.e9t(v,q),D.cs))
return C.bn(!0,new C.D(D.bR,C.x(C.a([o,p,D.O,w,D.ad,C.bW(D.bE,t,D.bq,s,8,8)],u),D.E,s,D.e,D.Q,0,D.p),s),!0,!1,D.af,!0,!0)},
$S:87}
A.e9v.prototype={
$3$col(d,e,f){var w=null,v=f.j(0.22),u=C.m(12),t=C.J(f,D.r,1)
return C.aB(w,C.p(w,C.d(d,w,w,w,w,w,w,C.l(w,w,f,w,w,w,w,w,w,w,w,13,w,w,D.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),D.f,w,w,new C.o(v,w,t,u,w,w,D.n),w,w,w,w,X.vU,w,w,w),D.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new A.e9q(this.a,e,this.b),w,w,w,w,w,w,!1,D.a5)},
$2(d,e){return this.$3$col(d,e,D.aD)},
$S:1793}
A.e9q.prototype={
$0(){var w,v=this.b.$0()
this.c.$1(new A.e9p())
w=this.a
w.m(w.giU())
w.iD(v)},
$S:0}
A.e9p.prototype={
$0(){},
$S:0}
A.e9r.prototype={
$0(){return this.a.bej(this.b)},
$S:23}
A.e9s.prototype={
$0(){return this.a.aKq(this.b)},
$S:23}
A.e9t.prototype={
$0(){return this.a.aD4(this.b)},
$S:23}
A.e9g.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m=null,l=x.p,k=C.a([],l)
for(w=D.d.gaf(B.a3q),v=new C.f5(w,new A.e9d()),u=this.a,t=this.b;v.C();){s=w.gR(0)
r=D.c.j(0.08)
q=new C.aQ(12,12)
p=u.d
p===$&&C.c()
o=p.d
o===$&&C.c()
n=new C.ay(o[p.e].fx.h(0,t)===s.a?D.aD:D.aZ,1,D.r,-1)
k.push(C.aB(m,C.p(m,new C.y(s.c+" "+s.b,m,D.K3,m,m,m,m,m,m,m,m,m),D.f,m,m,new C.o(r,m,new C.bK(n,n,n,n),new C.bk(q,q,q,q),m,m,D.n),m,m,m,m,D.ey,m,m,m),D.y,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new A.e9e(u,d,t,s),m,m,m,m,m,m,!1,D.a5))}w=u.d
w===$&&C.c()
v=w.d
v===$&&C.c()
if(v[w.e].fx.h(0,t)!=null)k.push(C.aB(m,C.p(m,B.fJj,D.f,m,m,new C.o(D.ei,m,m,C.m(12),m,m,D.n),m,m,m,m,D.ey,m,m,m),D.y,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new A.e9f(u,d,t),m,m,m,m,m,m,!1,D.a5))
return C.bn(!0,new C.D(D.bR,C.x(C.a([B.fFo,D.W,C.bW(D.bE,k,D.bq,m,8,8)],l),D.E,m,D.e,D.Q,0,D.p),m),!0,!1,D.af,!0,!0)},
$S:26}
A.e9d.prototype={
$1(d){return!(d.d>70||d.e)},
$S:z+23}
A.e9e.prototype={
$0(){var w,v,u,t=this
C.a4(t.b,!1).O(null)
w=t.a
v=t.d
w.m(new A.e9c(w,t.c,v))
u=v.d>0||v.e
v=v.b
w.iD(u?v+" is on and playing NGMY ads. Tap it to watch full screen.":v+" is plugged in and running.")
A.fU(820,70,0.25,"tri")},
$S:0}
A.e9c.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&C.c()
w=u.d
w===$&&C.c()
w[u.e].fx.n(0,this.b,this.c.a)
v.iC()},
$S:0}
A.e9f.prototype={
$0(){C.a4(this.b,!1).O(null)
var w=this.a
w.m(new A.e9b(w,this.c))
w.iD("Unplugged.")},
$S:0}
A.e9b.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&C.c()
w=u.d
w===$&&C.c()
w[u.e].fx.W(0,this.b)
v.iC()},
$S:0}
A.eas.prototype={
$1(d){return new C.dY(new A.eaq(this.a),null)},
$S:20}
A.eaq.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m=null,l=this.a,k=new A.ear(l,e),j=l.d
j===$&&C.c()
w=j.d
w===$&&C.c()
j=C.d("TV in "+w[j.e].b,m,m,m,m,m,m,D.de,m,m,m)
w=x.p
v=C.a([],w)
for(u=D.d.gaf(B.a3q),t=new C.f5(u,new A.eaj());t.C();){s=u.gR(0)
r=s.b
q=l.d
p=q.d
p===$&&C.c()
q=p[q.e].k1===s.a?D.aD:D.eV
v.push(k.$3$color(r,new A.eak(l,s),q))}j=C.a([j,D.W,C.bW(D.bE,v,D.bq,m,8,8)],w)
if(l.d.a.length!==0){v=C.a([],w)
for(o=0;o<3;++o){u={}
t=B.d4Z[o]
u.a=null
n=t.a
u.a=n
s=l.d
r=s.d
r===$&&C.c()
s=r[s.e].p1===n?D.aD:D.eV
v.push(k.$3$color(t.b,new A.eal(u,l),s))}D.d.v(j,C.a([B.fsz,D.am,C.bW(D.bE,v,D.bq,m,8,8)],w))}j.push(D.W)
w=C.a([],w)
v=l.d
u=v.d
u===$&&C.c()
v=u[v.e]
if(v.k1!=null){v=v.p2?"\u23fb Turn this TV off":"\u23fb Turn this TV on"
w.push(k.$2(v,new A.eam(l)))}v=l.d
u=v.d
u===$&&C.c()
if(u[v.e].k1!=null&&v.a.length===0)w.push(k.$3$color("\ud83d\uddd1 Take it down",new A.ean(l),D.ei))
if(l.d.a.length===0)w.push(k.$3$color("\ud83d\udcfa A TV in every room, all on",new A.eao(l),D.cV))
if(l.d.a.length===0)w.push(k.$3$color("\u23fb All TVs off",new A.eap(l),D.bm))
j.push(C.bW(D.bE,w,D.bq,m,8,8))
return C.bn(!0,new C.D(D.bR,C.x(j,D.E,m,D.e,D.Q,0,D.p),m),!0,!1,D.af,!0,!0)},
$S:87}
A.ear.prototype={
$3$color(d,e,f){var w=null,v=f.j(0.4),u=C.m(12),t=C.J(f,D.r,1)
return C.aB(w,C.p(w,C.d(d,w,w,w,w,w,w,F.A8,w,w,w),D.f,w,w,new C.o(v,w,t,u,w,w,D.n),w,w,w,w,X.vU,w,w,w),D.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new A.eai(this.a,e,this.b),w,w,w,w,w,w,!1,D.a5)},
$2(d,e){return this.$3$color(d,e,D.eV)},
$S:1794}
A.eai.prototype={
$0(){this.b.$0()
this.c.$1(new A.eah())
var w=this.a
w.m(w.giU())},
$S:0}
A.eah.prototype={
$0(){},
$S:0}
A.eaj.prototype={
$1(d){return d.d>0||d.e},
$S:z+23}
A.eak.prototype={
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
A.eal.prototype={
$0(){var w,v=this.b.d
v===$&&C.c()
w=v.d
w===$&&C.c()
return w[v.e].p1=this.a.a},
$S:0}
A.eam.prototype={
$0(){var w,v=this.a.d
v===$&&C.c()
w=v.d
w===$&&C.c()
v=w[v.e]
return v.p2=!v.p2},
$S:0}
A.ean.prototype={
$0(){var w,v=this.a.d
v===$&&C.c()
w=v.d
w===$&&C.c()
v=w[v.e]
v.k1=null
v.p2=!1},
$S:0}
A.eao.prototype={
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
A.eap.prototype={
$0(){var w,v,u=this.a.d
u===$&&C.c()
u=u.gqR()
w=u.length
v=0
for(;v<w;++v)u[v].p2=!1},
$S:0}
A.eae.prototype={
$1(d){return new C.dY(new A.eac(this.a),null)},
$S:20}
A.eac.prototype={
$2(a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=new A.ead(),e=C.at(C.p(g,g,D.f,g,g,new C.o(D.aZ,g,g,C.m(2),g,g,D.n),g,4,g,g,g,g,g,42),g,g,g),d=x.p,a0=C.B(C.a([C.p(g,G.aoV,D.f,g,g,new C.o(g,g,g,C.m(16),g,B.c0x,D.n),g,52,g,g,g,g,g,52),D.eu,B.bDz],d),D.m,g,D.e,D.j,0,g,g),a1=f.$1("Who walks the house"),a2=C.a([],d)
for(w=B.aG7.gdV(B.aG7),w=w.gaf(w),v=x.s,u=x.N,t=x.ec,s=this.a;w.C();){r=w.gR(w)
q=$.ahs
p=r.a
q=q===p?D.aQ.j(0.18):D.c.j(0.06)
o=new C.aQ(18,18)
n=$.ahs===p
m=n?D.aQ:D.bz
l=new C.ay(m,n?2:1,D.r,-1)
n=n?D.aQ:D.aZ
m=r.b
k=D.d.gI(m.split(" "))
m=C.a(m.split(" "),v)
j=new C.jx(m,1,g,t)
j.pd(m,1,g,u)
j=j.aH(0," ")
p=$.ahs===p?D.aQ:D.c
a2.push(new C.D(D.MX,C.aB(g,C.dd(g,C.x(C.a([new C.qr(new C.y(k,g,D.pw,g,g,g,g,g,g,g,g,g),n,g,20,g),D.am,new C.y(j,g,new C.F(!0,p,g,g,g,g,12.5,D.H,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g),g,g,g,g,D.a2,g,1,g,g)],d),D.m,g,D.b8,D.j,0,D.p),g,g,D.b7,new C.o(q,g,new C.bK(l,l,l,l),new C.bk(o,o,o,o),g,g,D.n),D.hp,g,g,g,D.Ga,g,g,92),D.y,!1,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,new A.ea8(s,a4,r),g,g,g,g,g,g,!1,D.a5),g))}a2=C.ct(a2,g,g,g,g,D.aN,!1)
w=f.$1("How long")
v=D.c.j(0.06)
u=C.m(16)
t=C.a([],d)
for(i=0;i<5;++i){h=B.dq3[i]
r=s.db===h
q=r?D.aD:D.K
p=new C.aQ(12,12)
if(h<60)o=""+h+" seconds"
else o=h===60?"1 minute":""+(h/60|0)+" minutes"
r=r?D.w:D.ae
t.push(new C.bA(1,D.bd,C.aB(g,C.dd(g,new C.ck(D.A,g,g,new C.y(o,g,new C.F(!0,r,g,g,g,g,12.5,D.u,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g),g,D.L,g,g,g,g,g,g,g),g),g,g,D.b7,new C.o(q,g,g,new C.bk(p,p,p,p),g,g,D.n),D.hp,g,g,g,D.tX,g,g,g),D.y,!1,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,new A.ea9(s,a4,h),g,g,g,g,g,g,!1,D.a5),g))}v=C.p(g,C.B(t,D.m,g,D.e,D.j,0,g,g),D.f,g,g,new C.o(v,g,g,u,g,g,D.n),g,g,g,g,D.eA,g,g,g)
u=C.aB(g,C.p(g,B.f_6,D.f,g,g,new C.o(g,g,g,C.m(18),C.a([new C.ac(0,D.G,D.aw.j(0.35),D.cv,16)],x.V),B.c1v,D.n),g,56,g,g,g,g,g,g),D.y,!1,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,new A.eaa(s,a3),g,g,g,g,g,g,!1,D.a5)
t=D.c.j(0.06)
r=C.m(18)
return C.p(g,C.bn(!0,C.cd(C.x(C.a([e,D.aM,a0,a1,new C.a7(g,96,a2,g),w,v,D.dX,u,D.ad,C.aB(g,C.p(g,B.f_0,D.f,g,g,new C.o(t,g,C.J(D.bz,D.r,1),r,g,g,D.n),g,g,g,g,D.bF,g,g,g),D.y,!1,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,new A.eab(s,a3),g,g,g,g,g,g,!1,D.a5)],d),D.E,g,D.e,D.Q,0,D.p),D.t,g,D.y,g,D.akk,g,g,D.ah),!0,!1,D.af,!0,!0),D.f,g,g,B.b3v,g,g,g,g,g,g,g,g)},
$S:167}
A.ead.prototype={
$1(d){var w=null
return new C.D(G.aj2,C.d(d.toUpperCase(),w,w,w,w,w,w,P.t6,w,w,w),w)},
$S:141}
A.ea8.prototype={
$0(){var w=this.c
this.b.$1(new A.ea6(w))
A.fWS(w.a)
this.a.m(new A.ea7())},
$S:0}
A.ea6.prototype={
$0(){return $.ahs=this.a.a},
$S:0}
A.ea7.prototype={
$0(){},
$S:0}
A.ea9.prototype={
$0(){return this.b.$1(new A.ea5(this.a,this.c))},
$S:0}
A.ea5.prototype={
$0(){return this.a.db=this.b},
$S:0}
A.eaa.prototype={
$0(){C.a4(this.b,!1).O(null)
var w=this.a
w.cy1(w.db)},
$S:0}
A.eab.prototype={
$0(){C.a4(this.b,!1).O(null)
this.a.b6X(45,!0)},
$S:0}
A.e9Q.prototype={
$0(){var w=this.a,v=w.d
v===$&&C.c()
v.e=this.b
w.ax=null
w.iC()},
$S:0}
A.e9R.prototype={
$1(d){return this.a.cCe()},
$S:11}
A.e9S.prototype={
$0(){},
$S:0}
A.eaf.prototype={
$0(){return this.a.dy=this.b.as},
$S:0}
A.ea4.prototype={
$0(){var w=this.b
w.iC()
w.aA=this.a.a;++w.aE},
$S:0}
A.e9X.prototype={
$0(){var w=this.a
w.cx=null
w.dy=""},
$S:0}
A.e9Y.prototype={
$0(){},
$S:0}
A.e9P.prototype={
$0(){},
$S:0}
A.e9W.prototype={
$0(){},
$S:0}
A.eaD.prototype={
$0(){return this.a.id=!0},
$S:0}
A.eaE.prototype={
$0(){return this.a.k2=!0},
$S:0}
A.eaF.prototype={
$0(){return this.a.k3=!0},
$S:0}
A.eaG.prototype={
$1(d){return B.aPC.t(0,d.b)},
$S:z+3}
A.eaw.prototype={
$1(d){var w
if(d.b==="gasstation"){w=this.a
w=Math.sqrt(Math.pow(w.f-d.c,2)+Math.pow(w.r-d.d,2))<135}else w=!1
return w},
$S:z+3}
A.eax.prototype={
$0(){return this.a.aOW(B.aPT)},
$S:0}
A.eay.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&C.c()
w=u.d
w===$&&C.c()
D.d.W(w[u.e].x,this.b)
v.al="crate"
v.m(v.giU())
v.ef("You picked up a crate. Carry it to the shop and walk onto the green mat by the counter to sell it at the market.",!0)
A.fU(700,60,0.25,"tri")
return null},
$S:0}
A.eaz.prototype={
$0(){return this.a.ab8(this.b)},
$S:0}
A.eaA.prototype={
$0(){return this.a.bPO(this.b)},
$S:0}
A.eaB.prototype={
$0(){return this.a.bSq(this.b)},
$S:0}
A.eaC.prototype={
$0(){return this.b.cL=this.a.a},
$S:0}
A.e7P.prototype={
$0(){},
$S:0}
A.e8v.prototype={
$0(){var w=this.a
w.y1=null
w.y2=!0},
$S:0}
A.e8s.prototype={
$1(d){return d.c==="outside"},
$S:z+4}
A.e8t.prototype={
$1(d){return d.b==="hospital"},
$S:z+3}
A.e8u.prototype={
$1(d){return!d.e&&d.r<0},
$S:z+17}
A.e8e.prototype={
$1(d){return d.c==="outside"},
$S:z+4}
A.e8f.prototype={
$1(d){return d.a.b===this.a.d},
$S:z+17}
A.e9K.prototype={
$0(){},
$S:0}
A.e88.prototype={
$0(){return this.a.k3=!0},
$S:0}
A.e9y.prototype={
$1(d){return d.b==="hospital"},
$S:z+3}
A.e9z.prototype={
$0(){return this.a.go=!1},
$S:0}
A.e9L.prototype={
$0(){var w=this.a
w.iC()
w.aec(!0)},
$S:0}
A.e9M.prototype={
$1(d){return this.a.c7a()},
$S:11}
A.e8l.prototype={
$1(d){return!D.d.b5(this.a.d,new A.e8k(d))},
$S:33}
A.e8k.prototype={
$1(d){return d.a===this.a},
$S:z+18}
A.e8m.prototype={
$1(d){return d.a===this.a.a},
$S:z+18}
A.e9N.prototype={
$1(d){var w,v,u=this.a
if(u.c==null)return
w=++u.S
if(w>36){v=u.bC
u.B0()
if(v!=null)u.aBr("Nobody answered the phone")
return}if(w%8<4){A.fU((w&1)===0?1046:1318,160,0.3,"sine")
if(D.o.F(u.S,8)===0)C.Tm()}},
$S:11}
A.e9O.prototype={
$0(){},
$S:0}
A.e9V.prototype={
$0(){var w=this.a
w.bC=w.bB=null},
$S:0}
A.e8K.prototype={
$4$col$on(d,e,f,g){var w=null,v=g?f.j(0.45):D.w.j(0.62),u=C.m(18),t=C.J(f,D.r,1.8)
return C.aB(w,C.p(w,C.d(d,w,w,w,w,w,w,D.j1,w,w,w),D.f,w,w,new C.o(v,w,t,u,w,w,D.n),w,w,w,D.a_r,B.bCQ,w,w,w),D.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new A.e8L(e),w,w,w,w,!1,D.a5)},
$2(d,e){return this.$4$col$on(d,e,D.bj,!1)},
$3$col(d,e,f){return this.$4$col$on(d,e,f,!1)},
$3$on(d,e,f){return this.$4$col$on(d,e,D.bj,f)},
$S:1795}
A.e8L.prototype={
$1(d){return this.a.$0()},
$S:22}
A.e8T.prototype={
$7$about$avatar$glow$onAnswer$onDecline$onLater$who(d,e,f,g,h,i,j){var w=null,v=new A.e8U(),u=Math.min(this.a-28,340),t=C.m(30),s=C.J(D.aZ,D.r,2),r=C.a([new C.ac(0,D.G,f.j(0.35),D.J,24)],x.V),q=x.p,p=C.B(C.a([e,D.eu,C.E(C.x(C.a([B.fGP,D.bA,C.d(j,w,1,D.a2,w,w,w,D.a97,w,w,w),D.bA,C.d(d,w,2,D.a2,w,w,w,L.a9D,w,w,w)],q),D.E,w,D.e,D.Q,0,D.p),1)],q),D.m,w,D.e,D.j,0,w,w),o=C.a([v.$4(B.bKu,"Decline",D.aw,h)],q)
if(i!=null)o.push(v.$4(D.jS,"Later",D.aD,i))
o.push(v.$5$big(D.iz,"Answer",D.be,g,!0))
return C.p(w,C.x(C.a([p,D.aA,C.B(o,D.E,w,D.e,D.j,0,w,w)],q),D.aj,w,D.e,D.Q,0,D.p),D.f,w,w,new C.o(w,w,s,t,r,B.z9,D.n),w,w,w,D.d3,Ae.a_7,w,w,u)},
$6$about$avatar$glow$onAnswer$onDecline$who(d,e,f,g,h,i){return this.$7$about$avatar$glow$onAnswer$onDecline$onLater$who(d,e,f,g,h,null,i)},
$S:1796}
A.e8U.prototype={
$5$big(d,e,f,g,h){var w=null,v=h?58:50,u=h?58:50
return C.E(C.aB(w,C.x(C.a([C.p(w,C.X(d,D.c,w,w,w,h?30:26),D.f,w,w,new C.o(f,w,w,w,w,w,D.a6),w,u,w,w,w,w,w,v),D.fO,C.d(e,w,w,w,w,w,w,M.Ab,w,w,w)],x.p),D.m,w,D.e,D.Q,0,D.p),D.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new A.e8V(g),w,w,w,w,!1,D.a5),1)},
$4(d,e,f,g){return this.$5$big(d,e,f,g,!1)},
$S:1797}
A.e8V.prototype={
$1(d){return this.a.$0()},
$S:22}
A.e8N.prototype={
$0(){var w=this.a
w.B0()
w.aBr("You turned the call down")},
$S:0}
A.e8O.prototype={
$0(){var w=this.a
w.B0()
w.eI.push(this.b)
w.ef("Saved on your waiting list. You will be taken there when you are free.",!0)},
$S:0}
A.e8M.prototype={
$0(){var w=this.b,v=this.a
v.B0()
v.cJ=w
v.hL=0
v.awM(w)},
$S:0}
A.e8P.prototype={
$0(){var w=this.a
w.B0()
w.cAz(this.b)},
$S:0}
A.e8S.prototype={
$2(d,e){var w=this.a
w.b0=d
w.be=e},
$S:255}
A.e8Q.prototype={
$0(){var w=this.a
return w.m(new A.e8J(w))},
$S:0}
A.e8J.prototype={
$0(){var w=this.a
return w.bh=!w.bh},
$S:0}
A.e8R.prototype={
$0(){var w=this.a,v=w.aI
if(v==null)v=null
else{v=v.at
v===$&&C.c()}w=v==null?w.aC:v
if(w!=null)if(w.Q<=0.01)w.as=160
return null},
$S:0}
A.e8w.prototype={
$1(d){var w=this.a,v=w.p4
w=w.RG
return v==="ptrap"?new A.a9r(w,null):new A.a4S(w,null)},
$S:1798}
A.e8x.prototype={
$1(d){var w=this.a
return new A.DS(w.p4,w.R8,null)},
$S:z+25}
A.eaH.prototype={
$1(d){var w=this.a
return new A.DS(w.a,w.c,null)},
$S:z+25}
A.e8z.prototype={
$1(d){return A.cgZ(!1,this.a.CW,!1)},
$S:z+38}
A.e8y.prototype={
$1(d){return new A.W7(this.a.fr,null)},
$S:z+68}
A.e6b.prototype={
$1(d){var w,v,u,t,s,r,q,p=null,o=this.a,n=o.d
n===$&&C.c()
w=n.d
w===$&&C.c()
n=C.d("Add to "+w[n.e].b,p,p,p,p,p,p,D.de,p,p,p)
w=x.p
v=C.a([],w)
for(u=0;u<3;++u){t={}
s=B.drM[u]
t.a=null
t.a=s.a
r=new C.aQ(12,12)
q=new C.ay(D.b1,1,D.r,-1)
v.push(C.aB(p,C.p(p,new C.y(s.b,p,D.t8,p,p,p,p,p,p,p,p,p),D.f,p,p,new C.o(D.eV.j(0.4),p,new C.bK(q,q,q,q),new C.bk(r,r,r,r),p,p,D.n),p,p,p,p,X.vU,p,p,p),D.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new A.e6a(t,o,d),p,p,p,p,p,p,!1,D.a5))}return C.bn(!0,new C.D(D.bR,C.x(C.a([n,D.av,B.fNP,D.ad,C.bW(D.bE,v,D.bq,p,8,8)],w),D.E,p,D.e,D.Q,0,D.p),p),!0,!1,D.af,!0,!0)},
$S:26}
A.e6a.prototype={
$0(){C.a4(this.c,!1).O(null)
this.b.bAu(this.a.a)},
$S:0}
A.e65.prototype={
$1(d){return d.b==="back"},
$S:z+16}
A.e66.prototype={
$1(d){return d.b==="back"},
$S:z+16}
A.e67.prototype={
$1(d){return Math.abs(d-this.a)>13},
$S:114}
A.e68.prototype={
$0(){var w=this
w.b.id.push(new A.aVG(w.c,w.d,new A.Cv(C.U(x.S,x.N))))
w.a.iC()},
$S:0}
A.e8p.prototype={
$0(){var w,v=this,u=v.b,t=u.c,s=v.c,r=v.d
u.c=t+(s?D.o.gVH(r)*40:r)
t=u.d
r=v.e
u.d=t+(s?D.o.gVH(r)*40:r)
t=v.a
r=t.d
r===$&&C.c()
w=r.d
w===$&&C.c()
w[r.e].a3R(0,u)
t.iC()},
$S:0}
A.eag.prototype={
$0(){var w,v,u,t=this.b
t.e=D.o.F(t.e+1,4)
w=this.a
v=w.d
v===$&&C.c()
u=v.d
u===$&&C.c()
u[v.e].a3R(0,t)
w.iC()},
$S:0}
A.e9n.prototype={
$0(){var w=this.b
w.f=(w.f+1)%6
this.a.iC()},
$S:0}
A.e9o.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&C.c()
w=u.d
w===$&&C.c()
D.d.W(w[u.e].x,this.b)
v.at=v.Q=0
v.iC()},
$S:0}
A.e69.prototype={
$0(){var w=this.a,v=this.b.a
w.Q=v
w.at=100+v
w.iC()},
$S:0}
A.e7l.prototype={
$0(){return this.a.aed(-6,0)},
$S:0}
A.e7m.prototype={
$0(){return this.a.aed(6,0)},
$S:0}
A.e7n.prototype={
$0(){return this.a.aed(0,-6)},
$S:0}
A.e7o.prototype={
$0(){return this.a.aed(0,6)},
$S:0}
A.e7p.prototype={
$0(){return this.a.bAx(this.b.a)},
$S:0}
A.e7q.prototype={
$0(){var w=this.a
return w.m(new A.e7k(w))},
$S:0}
A.e7k.prototype={
$0(){return this.a.as=-1},
$S:0}
A.e7r.prototype={
$0(){var w=this.a
w.m(new A.e7j(w,this.b))},
$S:0}
A.e7j.prototype={
$0(){var w,v=this.a,u=v.as,t=this.b,s=v.d
if(u<0){s===$&&C.c()
u=s.d
u===$&&C.c()
D.d.hv(u[s.e].z,0,3,t)}else{s===$&&C.c()
w=s.d
w===$&&C.c()
w[s.e].z[u]=t}v.iC()},
$S:0}
A.e7s.prototype={
$0(){var w=this.a
w.m(new A.e7i(w,this.b))},
$S:0}
A.e7i.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&C.c()
w=u.d
w===$&&C.c()
w[u.e].Q=this.b
v.iC()},
$S:0}
A.e7t.prototype={
$0(){var w=this.a
w.m(new A.e7h(w))},
$S:0}
A.e7h.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&C.c()
w=u.d
w===$&&C.c()
u=w[u.e]
u.go=u.go==="fan"?"light":"fan"
v.iC()},
$S:0}
A.e7u.prototype={
$0(){var w=this.a
w.m(new A.e7g(w,this.b))},
$S:0}
A.e7g.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&C.c()
w=u.d
w===$&&C.c()
w[u.e].as=this.b
v.iC()},
$S:0}
A.e7v.prototype={
$0(){return this.a.Ax(this.b.d)},
$S:0}
A.eaK.prototype={
$0(){return C.a4(this.a,!1).ib()},
$S:0}
A.eaM.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new A.eaJ(w))},
$S:0}
A.eaJ.prototype={
$0(){return this.a.aA=null},
$S:0}
A.eaL.prototype={
$3(d,e,f){var w=null
return C.d9(C.cnm(D.A,w,w,w,w,D.cf,D.xn,w,this.a.aA,!1,!1,!1,w,D.pd,1,w),e)},
$S:99}
A.e6Y.prototype={
$0(){return this.a.A0("calls")},
$S:0}
A.e6Z.prototype={
$0(){return this.a.A0("hospital")},
$S:0}
A.e7_.prototype={
$0(){return this.a.A0("shop")},
$S:0}
A.e73.prototype={
$0(){return this.a.A0("people")},
$S:0}
A.e74.prototype={
$0(){return this.a.Ax(10)},
$S:0}
A.e75.prototype={
$0(){var w=this.a
return w.m(new A.e6X(w))},
$S:0}
A.e6X.prototype={
$0(){return this.a.k2=!0},
$S:0}
A.e76.prototype={
$0(){var w=this.a
return w.m(new A.e6W(w))},
$S:0}
A.e6W.prototype={
$0(){return this.a.k3=!0},
$S:0}
A.e77.prototype={
$0(){var w=this.a
return w.m(new A.e6V(w))},
$S:0}
A.e6V.prototype={
$0(){var w=this.a
return w.y1=w.cJ},
$S:0}
A.e78.prototype={
$0(){var w=this.a,v=w.eI.length,u=v===1?"":"s"
return w.ef(""+v+" job"+u+" waiting. You are taken to the next one when you finish this one.",!0)},
$S:0}
A.e79.prototype={
$0(){var w=this.a
return w.m(new A.e6U(w))},
$S:0}
A.e6U.prototype={
$0(){return this.a.go=!0},
$S:0}
A.e7a.prototype={
$0(){var w=this.a
return w.p4?w.a2z():w.m(new A.e6T(w))},
$S:0}
A.e6T.prototype={
$0(){return this.a.R8=!0},
$S:0}
A.e70.prototype={
$0(){var w=this.a
return w.m(new A.e6S(w))},
$S:0}
A.e6S.prototype={
$0(){var w=this.a
return w.h4=!w.h4},
$S:0}
A.e71.prototype={
$0(){var w=this.a
return w.m(new A.e6R(w))},
$S:0}
A.e6R.prototype={
$0(){return this.a.ai=!0},
$S:0}
A.e72.prototype={
$0(){var w=this.a
return w.m(new A.e6Q(w))},
$S:0}
A.e6Q.prototype={
$0(){var w=this.a
return w.y=!w.y},
$S:0}
A.e6i.prototype={
$0(){var w=this.a.ghI()
w=w==null?null:w.r
return w==null?0:w},
$S:92}
A.e6w.prototype={
$0(){return this.a.xV()},
$S:0}
A.e6v.prototype={
$1(d){return d<=5},
$S:33}
A.e6j.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n=null,m=this.a,l=m.aI,k=m.CW
if(l!=null){m=k.gil()
k=B.aG8.h(0,$.ahs)
if(k==null)k=B.T2
k=l.cMZ(m/1000,k)
m=k}else{l=m.d
l===$&&C.c()
w=l.d
w===$&&C.c()
l=w[l.e]
w=k.gil()
v=m.ckX()
u=B.aG8.h(0,$.ahs)
if(u==null)u=B.T2
t=m.fr
s=m.r
r=m.bNH()
if(m.al==null){q=m.gpj()
if(q==null)q=n
else{q=q.x
q=(q==null?n:q.r)===!0}q=q===!0}else q=!0
p=m.d
o=p.d
o===$&&C.c()
if(o[p.e].c!=="outside")k=B.HS
else{p=m.gpj()
p=p==null?n:p.am7(k.gil()/1000)
if(p==null)p=B.HS
p=C.C(p,x.hg)
o=m.gKs()
k=o==null?n:o.am7(k.gil()/1000)
D.d.v(p,k==null?B.HS:k)
k=p}l=C.C(A.i5a(l,w/1000,q,k,r,s,v,u,t),x.fX)
k=m.d
w=k.d
w===$&&C.c()
if(w[k.e].c==="outside")D.d.v(l,m.cCm())
k=!0
if(m.cJ==null){w=m.gpj()
if((w==null?n:w.x)==null){k=m.gKs()
k=(k==null?n:k.f)!=null}}D.d.v(l,k?m.crg():B.azg)
m=l}return m},
$S:z+10}
A.e6k.prototype={
$1(d){var w,v,u=this.a
if(u.aI==null){w=u.d
w===$&&C.c()
v=w.d
v===$&&C.c()
w=v[w.e].c==="outside"}else w=!1
return w?A.ig_(u.CW.gil()/1000):B.wu},
$S:z+71}
A.e6x.prototype={
$3(d,e,f){var w=null,v=D.dM.j(0.82),u=C.m(18),t=C.J(D.b9,D.r,2)
return C.p(w,C.d(e,w,w,w,w,w,w,B.fqF,w,w,w),D.f,w,w,new C.o(v,w,t,u,w,w,D.n),w,w,w,w,B.bB4,w,w,w)},
$S:1799}
A.e6n.prototype={
$0(){var w=this.a,v=w.d
v===$&&C.c()
return v.a.length!==0?w.Ek():w.cmb(this.b)},
$S:0}
A.e6y.prototype={
$0(){var w=this.a
w.m(new A.e6h(w))
w.xV()},
$S:0}
A.e6h.prototype={
$0(){var w=this.a
w.x=!w.x
w.iC()},
$S:0}
A.e6z.prototype={
$0(){var w=this.a
return w.cx!=null?w.S3():w.cCd()},
$S:0}
A.e6A.prototype={
$0(){var w=this.a
w.m(new A.e6g(w))
w.xV()
if(w.z)w.iD("Drag to turn all the way round. Double tap a spot on the floor to walk there.")},
$S:0}
A.e6g.prototype={
$0(){var w=this.a,v=!w.z
w.z=v
if(v&&w.cx!=null)w.S3()
w.iC()},
$S:0}
A.e6B.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&C.c()
w=u.d
w===$&&C.c()
return v.Ax(w[u.e].c!=="outside"?11:10)},
$S:0}
A.e6C.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&C.c()
w=u.d
w===$&&C.c()
if(w[u.e].c!=="outside")v.Ax(11)
v.A0("calls")},
$S:0}
A.e6l.prototype={
$0(){var w=this.a
return w.m(new A.e6f(w))},
$S:0}
A.e6f.prototype={
$0(){var w=this.a,v=!w.w
w.w=v
if(v)w.iD("Voltage tester in your hand: tap an outlet, a switch or the light.")},
$S:0}
A.e6m.prototype={
$0(){var w=this.a
return w.m(new A.e6e(w))},
$S:0}
A.e6e.prototype={
$0(){var w=this.a
return w.y=!w.y},
$S:0}
A.e6o.prototype={
$0(){return this.a.PO("look")},
$S:0}
A.e6p.prototype={
$0(){return this.a.PO("furniture")},
$S:0}
A.e6q.prototype={
$0(){return this.a.PO("walls")},
$S:0}
A.e6r.prototype={
$0(){return this.a.PO("floor")},
$S:0}
A.e6s.prototype={
$0(){return this.a.PO("ceiling")},
$S:0}
A.e6t.prototype={
$0(){return this.a.PO("doors")},
$S:0}
A.e6u.prototype={
$0(){return C.a4(this.a,!1).cg(C.e_(new A.e6d(),!1,null,x.H))},
$S:0}
A.e6d.prototype={
$1(d){return B.aH8},
$S:z+72}
A.e9m.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m=null,l=C.aI(d,m,x.w).w,k=this.a,j=k.d
j===$&&C.c()
w=x.p
j=C.a([B.fC1,D.av,C.d("Wiring "+j.gcYo()+"/"+k.d.gqR().length+" \xb7 Plumbing "+k.d.gcV9()+"/"+k.d.gcV8(),m,m,m,m,m,m,B.JQ,m,m,m),D.W],w)
for(v=k.d.gqR(),u=v.length,t=0;t<v.length;v.length===u||(0,C.M)(v),++t){s=v[t]
r=D.c.j(0.05)
q=new C.aQ(12,12)
p=new C.ay(s.gkJ()&&s.gjO()?D.bj.j(0.5):D.bz,1,D.r,-1)
if(s.gkJ()&&s.gjO())o="\u2705 finished"
else{o=s.gkJ()?"":"\u26a1 wiring  "
o+=s.gjO()?"":"\ud83d\udeb0 plumbing"}n=s.gkJ()&&s.gjO()?D.ep:D.ae
j.push(C.aB(m,C.p(m,new C.cc(D.aN,D.e,D.j,D.m,m,D.p,m,0,C.a([new C.bA(1,D.bd,new C.y(s.b,m,B.aTq,m,m,m,m,m,m,m,m,m),m),new C.y(o,m,new C.F(!0,n,m,m,m,m,12,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m,m,m,m,m,m,m,m,m)],w),m),D.f,m,m,new C.o(r,m,new C.bK(p,p,p,p),new C.bk(q,q,q,q),m,m,D.n),m,m,m,D.eG,D.bT,m,m,m),D.y,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new A.e9j(k,d,s),m,m,m,m,m,m,!1,D.a5))}j.push(D.O)
j.push(C.dS(B.fz0,new A.e9k(k,d),m))
j.push(D.O)
j.push(C.bI(B.fve,new A.e9l(k,d),m))
return C.bn(!0,new C.cT(new C.aZ(0,1/0,0,l.a.b*0.75),C.ct(j,m,D.bR,m,m,D.ah,!0),m),!0,!1,D.af,!0,!0)},
$S:26}
A.e9j.prototype={
$0(){C.a4(this.b,!1).O(null)
this.a.Ax(this.c.a)},
$S:0}
A.e9k.prototype={
$0(){C.a4(this.b,!1).O(null)
var w=this.a
w.m(new A.e9i(w))
w.iD("Every room needs its wiring and plumbing again. Wire the whole house from the start.")},
$S:0}
A.e9i.prototype={
$0(){var w=this.a,v=w.d
v===$&&C.c()
v.cRM()
w.iC()},
$S:0}
A.e9l.prototype={
$0(){C.a4(this.b,!1).O(null)
$.E3=A.aVN(D.o.F(Date.now(),1e5))
var w=this.a
w.m(new A.e9h(w))
w.aec(!0)},
$S:0}
A.e9h.prototype={
$0(){var w=this.a,v=$.E3
v.toString
w.d=v
w.r="look"
w.Q=0
w.as=-1
w.at=0
w.iC()},
$S:0}
A.dt9.prototype={
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
$S:22}
A.f2g.prototype={
$0(){return this.b.d=this.a.a},
$S:0}
A.f2f.prototype={
$0(){return this.a.d=null},
$S:0}
A.f2i.prototype={
$1(d){return this.a.aZx(d.gfh())},
$S:80}
A.f2j.prototype={
$1(d){return this.a.aZx(d.gfh())},
$S:236}
A.f2k.prototype={
$1(d){return this.a.aZw()},
$S:124}
A.f2h.prototype={
$1(d){return this.a.aZw()},
$S:172}
A.fu_.prototype={
$1$speed(d){var w,v,u,t=null,s=this.a,r=s.a
if(r.length===0)return
w=s.b
v=s.d
u=s.c
u=u.length===0?t:D.d.gI(u)
this.b.push(new A.Mg(r,w,d,8,u,t,v,t,t))
v=x.o
s.a=C.a([],v)
s.b=C.a([],v)
s.c=C.a([],x.s)
s.d=!1},
$0(){return this.$1$speed(130)},
$S:1800}
A.fu6.prototype={
$3$note(d,e,f){var w=this.a
w.a.push(d)
w.b.push(e)
if(f!=null)w.c.push(f)},
$2(d,e){return this.$3$note(d,e,null)},
$S:z+73}
A.fu1.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m,l,k
for(w=this.a.x,v=w.length,u=d.a,t=d.c,s=d.b,r=0;r<v;++r){q=w[r]
p=q.b
if(p!=="billboard"&&p!=="cornersign"&&p!=="townsign"&&p!=="adboard")continue
A:{if("townsign"===p){p=B.a7J
break A}if("cornersign"===p){p=B.a7L
break A}if("adboard"===p){p=B.a7I
break A}p=B.a7K
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
A.fu7.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
for(w=this.a.x,v=w.length,u=0;u<=1;u+=0.02){t=A.o0(d,e,u)
for(s=t.a,r=t.c,q=t.b,p=0;p<v;++p){o=w[p]
n=o.b
if(n!=="billboard"&&n!=="cornersign"&&n!=="townsign"&&n!=="adboard")continue
A:{if("townsign"===n){n=B.a7J
break A}if("cornersign"===n){n=B.a7L
break A}if("adboard"===n){n=B.a7I
break A}n=B.a7K
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
A.fu0.prototype={
$2(d,e){return this.a.$2(d,e)!=null},
$S:z+75}
A.ftY.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this.a.$2(d,e)
if(i==null)return null
w=i.b
A:{if("townsign"===w){v=B.a7J
break A}if("cornersign"===w){v=B.a7L
break A}if("adboard"===w){v=B.a7I
break A}v=B.a7K
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
n=new A.ftZ(d,e)
o=this.b
k=!o.$1(m)
j=!o.$1(l)
if(k&&j)return n.$1(m)<=n.$1(l)?m:l
if(k)v=m
else v=j?l:null
return v},
$S:z+76}
A.ftZ.prototype={
$1(d){return d.aF(0,this.a).guR()+this.b.aF(0,d).guR()},
$S:z+77}
A.ftS.prototype={
$3(d,e,f){var w,v,u,t=this
if(!t.a.$2(d,e))return B.rC
w=f>=3?null:t.b.$2(d,e)
if(w==null)return C.a([new A.r((d.a+e.a)/2,430,(d.c+e.c)/2)],x.o)
v=f+1
u=C.C(t.$3(d,w,v),x.Q)
u.push(w)
D.d.v(u,t.$3(w,e,v))
return u},
$2(d,e){return this.$3(d,e,0)},
$S:z+78}
A.fu3.prototype={
$7$note(a2,a3,a4,a5,a6,a7,a8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0=A.hpb(a2),a1=new A.r(a2.c,a4,a2.d)
for(w=d.d,v=d.a,u=d.b,t=Math.atan2(a0.a,a0.b)-0.55,s=a6-a5,r=d.c,q=null,p=0;p<6;++p){o=t+p*0.38
n=a5+s*p/5
m=a2.c
l=Math.sin(o)
k=p===0
j=k?40:0
i=new A.r(m+l*n,a3+a7*p/5+j,a2.d+Math.cos(o)*n)
if(u.$1(i)){if(k)q=a8
continue}m=v.a
if(m.length!==0&&p>0){h=D.d.gak(m)
g=!1
f=0
for(;;){if(!(f<=1&&!g))break
g=u.$1(A.o0(h,i,f))
f+=0.02}if(g)for(m=r.$2(h,i),l=m.length,e=0;e<m.length;m.length===l||(0,C.M)(m),++e)w.$2(m[e],D.d.gak(v.b))}w.$3$note(i,a1,k?a8:q)
q=null}},
$6(d,e,f,g,h,i){return this.$7$note(d,e,f,g,h,i,null)},
$S:z+79}
A.fu5.prototype={
$1(d){var w=d.b,v=this.a
switch(w){case"townsign":v.$7$note(d,255,250,430,520,60,"The biggest billboard in the city: NGMY Town")
break
case"cornersign":v.$7$note(d,115,120,210,260,50,"A corner billboard: NGMY Town")
break
case"adboard":v.$7$note(d,160,142,330,410,55,"A big NGMY ad billboard")
break
case"tower":v.$7$note(d,430,(w==="hq"?278:A.hov(B.zc[d.f]))+40,150,210,20,"A tower with NGMY ad boards")
break
case"hq":v.$7$note(d,440,312,190,250,20,"The NGMY company building")
break
default:v.$7$note(d,75,48,130,175,45,"An NGMY billboard")}},
$S:z+26}
A.fu4.prototype={
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
D.d.c8(p.a,v,w.h(u,q));++q
D.d.c8(p.b,v,A.o0(s,r,q/(w.gL(u)+1)))}}}},
$S:z+26}
A.fu2.prototype={
$1(d){var w
this.b.$0()
w=x.o
this.c.push(new A.Mg(C.a([B.h7K,B.fUo,B.fWp],w),C.a([B.h8g,B.fVF,B.fZ0],w),55,8,"Inside the "+B.hw.h(0,d.b).a.toLowerCase(),d,!1,null,null))
this.a.d=!0},
$S:z+26}
A.ftT.prototype={
$1(d){return d.b==="townsign"},
$S:z+3}
A.ftU.prototype={
$2(d,e){var w=this.a
return D.k.aK(Math.pow(d.c-w.a.a,2)+Math.pow(d.d-w.a.c,2),Math.pow(e.c-w.a.a,2)+Math.pow(e.d-w.a.c,2))},
$S:z+19}
A.ftR.prototype={
$1(d){return Math.atan2(d.d-1000,d.c)},
$S:z+102}
A.ftV.prototype={
$2(d,e){var w=this.a
return J.B9(w.$1(d),w.$1(e))},
$S:z+19}
A.ftW.prototype={
$1(d){return d.b==="bighouse"},
$S:z+3}
A.ftX.prototype={
$1(d){return d.b===this.a},
$S:z+3}
A.cfd.prototype={
$0(){var w=0,v=C.j(x.P),u=1,t=[],s,r,q,p,o,n
var $async$$0=C.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:u=3
w=6
return C.b($.r3().jK(0,"assets/images/ngmy_logo.png"),$async$$0)
case 6:s=e
w=7
return C.b(C.fxt(J.eQ(J.vA(s)),null),$async$$0)
case 7:r=e
o=$
n=J
w=8
return C.b(r.lK(),$async$$0)
case 8:o.W1=n.a3_(e)
u=1
w=5
break
case 3:u=2
p=t.pop()
$.W1=null
w=5
break
case 2:w=1
break
case 5:return C.h(null,v)
case 1:return C.f(t.at(-1),v)}})
return C.i($async$$0,v)},
$S:50}
A.fLh.prototype={
$4(d,e,f,g){var w,v,u=null,t=e*0.05,s=C.fu(u,u,1,u,C.cS(u,u,u,u,u,u,u,u,u,C.l(u,u,f,u,u,u,u,u,u,u,u,e,u,u,D.u,u,u,!0,u,t,u,u,u,u,u,u),d),D.a3,D.bZ,u,D.dA,D.bW)
s.ej()
w=s.b.c
v=this.a
if(w>v){s=C.fu(u,u,1,u,C.cS(u,u,u,u,u,u,u,u,u,C.l(u,u,f,u,u,u,u,u,u,u,u,e*v/w,u,u,D.u,u,u,!0,u,t,u,u,u,u,u,u),d),D.a3,D.bZ,u,D.dA,D.bW)
s.ej()}s.a1(this.b,new C.t(this.c+v/2-s.b.c/2,g))},
$S:1801}
A.fLf.prototype={
$1(d){var w,v,u,t,s,r=null,q=this.a,p=this.b,o=d.d-d.b
if(q!=null){w=q.c
v=q.d
u=Math.min((d.c-d.a)/w,o/v)
o=C.bJ(d.gbK(),v*u,w*u)
$.S()
t=C.I()
t.Q=D.cf
p.ow(q,new C.a3(0,0,w,v),o,t)}else{s=C.fu(r,r,r,r,C.cS(r,r,r,r,r,r,r,r,r,C.l(r,r,this.c,r,r,r,r,r,r,r,r,o*0.6,r,r,D.u,r,r,!0,r,r,r,r,r,r,r,r),"NGMY"),D.a3,D.bZ,r,D.dA,D.bW)
s.ej()
q=d.gbK()
o=s.b
w=o.c
o=o.a.c
s.a1(p,q.aF(0,new C.t(w/2,o.gbb(o)/2)))}},
$S:1802}
A.fLe.prototype={
$4$w(d,e,f,g){var w=null,v=C.fu(w,w,w,w,C.cS(w,w,w,w,w,w,w,w,w,C.l(w,w,this.a,w,w,w,w,w,w,w,w,f,w,w,g,w,w,!0,w,f*0.08,w,w,w,w,w,w),d),D.a3,D.bZ,w,D.dA,D.bW)
v.nX(this.b.a*0.9)
v.a1(this.c,e.aF(0,new C.t(v.b.c/2,0)))},
$3(d,e,f){return this.$4$w(d,e,f,D.u)},
$S:1803}
A.fLg.prototype={
$1(d){var w=null,v=this.a.b*0.16
v=C.fu(w,w,w,w,C.cS(w,w,w,w,w,w,w,w,w,C.l(w,w,w,w,w,w,w,w,w,w,w,v,w,w,D.u,w,w,!0,w,v*0.08,w,w,w,w,w,w),d),D.a3,D.bZ,w,D.dA,D.bW)
v.ej()
return v.b.c},
$S:703}
A.fun.prototype={
$2(d,e){return this.a===d?e:0},
$S:704}
A.fu9.prototype={
$1(d){return d.b==="right"},
$S:z+16}
A.fuk.prototype={
$0(){var w=C.a([],x.z),v=new A.fk(w)
v.f=1
v.x=$.dR=$.dR+1
v.aP(B.haA,B.fZ8,B.B6)
v.aY(B.fUc,B.h47,B.hU,0.5)
v.aP(B.aVs,B.h5H,B.B6)
v.aP(B.aVs,B.h1R,B.B6)
return w},
$S:z+82}
A.ful.prototype={
$1(d){var w=this,v=w.a,u=v.b
A:{if("left"===u){v=A.o9(d,0,1.5707963267948966,new A.r(-w.b/2,0,v.c+w.c/2-40))
break A}if("right"===u){v=A.o9(d,0,-1.5707963267948966,new A.r(w.b/2,0,v.c+w.c/2-40))
break A}v=A.o9(d,0,0,new A.r(v.c,0,0))
break A}return v},
$S:z+83}
A.fua.prototype={
$1(d){return d.b==="back"},
$S:z+16}
A.fub.prototype={
$1(d){return d.c},
$S:z+84}
A.fuc.prototype={
$2(d,e){return e},
$S:77}
A.fud.prototype={
$3(d,e,f){return I.RO(d,e,0,f+this.a)},
$S:24}
A.fuf.prototype={
$2(a8,a9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=this
if(a8==null)return
w=A.aP7(a8)
v=a7.a
u=A.h6c(v,w,a9)
t=u.a
s=u.b
r=u.d
q=t-2.5
p=s-2.5
o=v.p3+a9*2
n=a7.b
m=n.b=730+a9
l=n.x=$.dR=$.dR+1
n.e=5
k=v.c==="hall"
if(!(k&&a9<2))j=!k&&v.p1!=="back"
else j=!0
if(j){i=k?a9===1:v.p1==="left"
k=a7.c
h=i?-k/2:k/2
g=i?1:-1
f=u.c
n.aY(new A.r(h+g*1.4,r,f),new A.r(2.6,s+3,t+3),B.LF,0.5)
n.aY(new A.r(h+g*2.8,r,f),new A.r(0.2,s,t),F.nb,0.7)
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
k.push(new A.fM(C.a([new A.r(e,a1,d),new A.r(e,a1,a0),new A.r(e,j,a0),new A.r(e,j,d)],a2),m,new A.fug(o,v,a9),320,a3,9,1,l,!1))
a4=h+g*0.05
k.push(new A.fM(C.a([new A.r(a4,a1,a0),new A.r(a4,a1,d),new A.r(a4,j,d),new A.r(a4,j,a0)],a2),m,new A.fuh(o,v,a9),320,a3,9,1,l,!1))}}else{h=u.c
n.aY(new A.r(h,r,1.4),new A.r(t+3,s+3,2.6),B.LF,0.5)
n.aY(new A.r(h,r,2.8),new A.r(t,s,0.2),F.nb,0.7)
if(v.p2){k=a7.d
j=q/2
a1=h-j
a2=p/2
a3=r+a2
j=h+j
a2=r-a2
a5=x.o
a6=320*p/q
k.push(new A.fM(C.a([new A.r(a1,a3,2.95),new A.r(j,a3,2.95),new A.r(j,a2,2.95),new A.r(a1,a2,2.95)],a5),m,new A.fui(o,v,a9),320,a6,9,1,l,!1))
k.push(new A.fM(C.a([new A.r(j,a3,0.05),new A.r(a1,a3,0.05),new A.r(a1,a2,0.05),new A.r(j,a2,0.05)],a5),m,new A.fuj(o,v,a9),320,a6,9,1,l,!1))}}n.e=n.x=0
v=v.p2?"It is on and playing "+E.kj[D.o.F(o,8)].a+". Tap it to watch full screen with the remote.":"The TV is off. Tap it to turn it on."
a7.e.n(0,m,new A.cW(w.b,v,new A.r(0,r,4),110))},
$S:1806}
A.fug.prototype={
$3(d,e,f){return I.RO(d,e,this.a,f+this.b.a+this.c*3)},
$S:24}
A.fuh.prototype={
$3(d,e,f){return I.RO(d,e,this.a,f+this.b.a+this.c*3)},
$S:24}
A.fui.prototype={
$3(d,e,f){return I.RO(d,e,this.a,f+this.b.a+this.c*3)},
$S:24}
A.fuj.prototype={
$3(d,e,f){return I.RO(d,e,this.a,f+this.b.a+this.c*3)},
$S:24}
A.fum.prototype={
$2(d,e){var w=this.a,v=w.f,u=w.r
w.f=1
w.r=!1
w.b=0
w.dR(new A.r(d,e,0),new A.r(d,e,2.2),0.7,B.Lv,0.7,10)
w.f=v
w.r=u},
$S:255}
A.fue.prototype={
$1(d){return d.b===this.a.a},
$S:z+13}
A.fnz.prototype={
$2(d,e){return this.a===d?e:0},
$S:704}
A.fnA.prototype={
$5(d,e,f,g,h){var w=d.aa(0,e.aJ(0,g)).aa(0,new A.r(0,h,0)),v=this.a
A.kF(v,w.aa(0,f.aJ(0,0.1)),e,B.e8,26,30,B.kz,f,0)
A.kF(v,w.aa(0,f.aJ(0,0.2)),e,B.e8,22,26,B.hU,f,0.6)
A.kF(v,w.aa(0,f.aJ(0,0.3)),e,B.e8,22,1.2,B.kz,f,0)
A.kF(v,w.aa(0,f.aJ(0,0.3)),e,B.e8,1.2,26,B.kz,f,0)},
$S:z+85}
A.fnv.prototype={
$5(d,e,f,g,h){var w=d.aa(0,e.aJ(0,g)),v=this.a,u=v.b
A.kF(v,w.aa(0,new A.r(0,42,0)).aa(0,f.aJ(0,0.1)),e,B.e8,34,84,B.kz,f,0)
v.b=h
A.kF(v,w.aa(0,new A.r(0,41,0)).aa(0,f.aJ(0,0.2)),e,B.e8,28,80,B.vy,f,0.2)
v.b=0
A.kF(v,w.aa(0,new A.r(0,58,0)).aa(0,f.aJ(0,0.3)),e,B.e8,20,26,B.Mu,f,0)
A.kF(v,w.aa(0,new A.r(0,22,0)).aa(0,f.aJ(0,0.3)),e,B.e8,20,26,B.Mu,f,0)
v.aY(w.aa(0,e.aJ(0,9)).aa(0,new A.r(0,40,0)).aa(0,f.aJ(0,1)),new A.r(2.6,2.6,2.6),B.EP,0.8)
v.b=u},
$S:z+86}
A.fnw.prototype={
$5$poster(d,e,f,g,h){var w=C.a([d,e,f,g],x.o),v=h<0?A.h5F():new A.fnx(h),u=h===0,t=u?1000:256
u=u?424:256
return this.a.push(new A.fM(w,0,v,t,u,1,2,this.b,!1))},
$4(d,e,f,g){return this.$5$poster(d,e,f,g,-1)},
$S:z+87}
A.fnx.prototype={
$3(d,e,f){return A.fLd(d,e,f,this.a)},
$S:24}
A.fmX.prototype={
$1(d){var w=d.b
return w==="pole"||w==="lamppost"},
$S:z+3}
A.fmY.prototype={
$2(d,e){return D.k.aK(d.c,e.c)},
$S:z+19}
A.fmZ.prototype={
$1(d){return this.a.cy.aj(0,d.a)},
$S:z+3}
A.fn9.prototype={
$1(d){return this.a.k4.t(0,d.a)},
$S:z+3}
A.fnk.prototype={
$1(d){return B.f0Y.t(0,d.b)},
$S:z+3}
A.fny.prototype={
$3(d,e,f){var w=this.b
return A.vw(new A.r(d,e,f),this.a).aa(0,new A.r(w.c,0,w.d))},
$S:z+28}
A.fnp.prototype={
$3(d,e,f){return A.nd(d,e,f,this.a.a+D.k.bj(f/7))},
$S:24}
A.fnq.prototype={
$3(d,e,f){return A.nd(d,e,f,this.a.a+D.k.bj(f/7))},
$S:24}
A.fnr.prototype={
$3(d,e,f){return A.GZ(d,e,f,"NGMY TOWN",this.a)},
$S:24}
A.fns.prototype={
$3(d,e,f){return A.GZ(d,e,f,"NGMY TOWN",this.a)},
$S:24}
A.fnt.prototype={
$3(d,e,f){return A.nd(d,e,f,this.a.a+D.k.bj(f/7))},
$S:24}
A.fnu.prototype={
$3(d,e,f){return A.nd(d,e,f,this.a.a+4+D.k.bj(f/7))},
$S:24}
A.fn_.prototype={
$3(d,e,f){return A.nd(d,e,f,this.a.a+D.k.bj(f/7))},
$S:24}
A.fn0.prototype={
$3(d,e,f){return A.nd(d,e,f,this.a.a+7+D.k.bj(f/7))},
$S:24}
A.fn1.prototype={
$3(d,e,f){return A.nd(d,e,f,this.a.a+3+D.k.bj(f/7))},
$S:24}
A.fn2.prototype={
$3(d,e,f){return A.nd(d,e,f,this.a.a+5+D.k.bj(f/7))},
$S:24}
A.fn3.prototype={
$3(d,e,f){return A.nd(d,e,f,this.a.a+1+D.k.bj(f/7))},
$S:24}
A.fn4.prototype={
$3(d,e,f){return A.nd(d,e,f,this.a.a+2+D.k.bj(f/7))},
$S:24}
A.fn5.prototype={
$3(d,e,f){return A.GZ(d,e,f,"NGMY COMPANY","Building the movement")},
$S:24}
A.fn6.prototype={
$3(d,e,f){return A.GZ(d,e,f,"NGMY","New Global Movement for Youth")},
$S:24}
A.fn7.prototype={
$3(d,e,f){return A.GZ(d,e,f,"NGMY COMPANY","Building the movement")},
$S:24}
A.fn8.prototype={
$3(d,e,f){return A.GZ(d,e,f,"NGMY","New Global Movement for Youth")},
$S:24}
A.fna.prototype={
$3(d,e,f){return A.nd(d,e,f,this.a.a+4+D.k.bj(f/7))},
$S:24}
A.fnb.prototype={
$3(d,e,f){return A.nd(d,e,f,this.a.a+6+D.k.bj(f/7))},
$S:24}
A.fnc.prototype={
$3(d,e,f){return A.nd(d,e,f,this.a.a+2+D.k.bj(f/7))},
$S:24}
A.fnd.prototype={
$3(d,e,f){return A.nd(d,e,f,this.a.a+3+D.k.bj(f/7))},
$S:24}
A.fne.prototype={
$3(d,e,f){return A.GZ(d,e,f,"NGMY STORE","Everything you need")},
$S:24}
A.fnf.prototype={
$3(d,e,f){return A.GZ(d,e,f,"NGMY UBER","Rides home")},
$S:24}
A.fng.prototype={
$3(d,e,f){return A.GZ(d,e,f,"NGMY UBER","Rides home")},
$S:24}
A.fnh.prototype={
$3(d,e,f){return A.GZ(d,e,f,"NGMY LICENCE","Get your Uber licence")},
$S:24}
A.fni.prototype={
$3(d,e,f){return A.GZ(d,e,f,"NGMY GAS","Open 24 hours")},
$S:24}
A.fnj.prototype={
$3(d,e,f){return A.nd(d,e,f,this.a.a*2+this.b+1)},
$S:24}
A.fnl.prototype={
$1(d){return d.b===this.a.a&&!d.x&&d.Q.length!==0},
$S:z+13}
A.fnm.prototype={
$1(d){return d.b===this.a.a&&d.x},
$S:z+13}
A.fnn.prototype={
$3(d,e,f){return A.fLd(d,e,f,0)},
$S:24}
A.fno.prototype={
$3(d,e,f){return A.fLd(d,e,f,0)},
$S:24}
A.fxj.prototype={
$1(d){return D.d.t(B.HJ,d.b)},
$S:z+3}
A.fxk.prototype={
$1(d){return d.b===this.a.a},
$S:z+13}
A.fxl.prototype={
$1(d){return d.b===this.a.a},
$S:z+13}
A.fdS.prototype={
$5(d,e,f,g,h){var w,v,u,t,s,r,q,p,o,n,m,l,k,j
for(w=d.length,v=x.z,u=this.a,t=-f/2,s=u.a,r=this.b,q=0,p=0;p<w;++p){o=d[p]
n=o.a
m=C.a([],v)
l=new A.fk(m)
l.b=u.b
l.f=u.f
l.r=!0
l.aP(new A.r(0,t,0),new A.r(g,f,g),h)
k=(q&1)===0?1:-1
j=n>0?1:-1
D.d.v(s,A.o9(m,r*k*j,0,new A.r(n,e,o.b)));++q}},
$S:1807}
A.fdI.prototype={
$3(d,e,f){var w=this.a,v=this.b,u=this.c
return new A.r(w.c+v*d+u*f,e,w.d+u*d-v*f)},
$2(d,e){return this.$3(d,e,0)},
$S:z+88}
A.fo8.prototype={
$3(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k=x.z,j=C.a([],k),i=new A.fk(j)
i.b=this.a
i.r=!0
d.$1(i)
k=C.a([],k)
for(j=A.fs0(j,e,B.f1),w=j.length,v=f.a,u=f.b,t=f.c,s=x.o,r=0;r<j.length;j.length===w||(0,C.M)(j),++r){q=j[r]
p=C.a([],s)
for(o=q.a,n=o.length,m=0;m<o.length;o.length===n||(0,C.M)(o),++m){l=o[m]
p.push(new A.r(l.a+v,l.b+u,l.c+t))}k.push(new A.lR(p,q.b,q.c,q.d,q.e,q.f,q.r,q.w,q.x,q.y,q.z))}D.d.v(this.b.a,k)},
$S:z+89}
A.fnV.prototype={
$5(d,e,f,g,h){var w=this.a
w.bdj(d,e,f,h,!1,g,10)
w.fo(e,g*1.04,h,4,8)},
$S:z+90}
A.fnW.prototype={
$1(d){return d.fT(B.f1,2.6,B.Yb,4,8,0.15)},
$S:z+6}
A.fnX.prototype={
$1(d){return d.fo(B.f1,2.6,D.bO,3,8)},
$S:z+6}
A.fnY.prototype={
$1(d){return d.fo(B.f1,5.2,this.a,4,10)},
$S:z+6}
A.fo0.prototype={
$1(d){return d.bdj(B.f1,B.aae,4.9,this.a,!1,6.5,12)},
$S:z+6}
A.fo1.prototype={
$1(d){return d.aEI(B.f1,B.h3c,5.1,B.beA,!1,12)},
$S:z+6}
A.fo2.prototype={
$1(d){return d.fo(B.f1,6.7,this.a,4,10)},
$S:z+6}
A.fo3.prototype={
$1(d){return d.fo(B.f1,4.7,this.a,6,12)},
$S:z+6}
A.fo4.prototype={
$1(d){return d.fo(B.f1,3,this.a,4,8)},
$S:z+6}
A.fo5.prototype={
$1(d){return d.fo(B.f1,5,this.a,5,10)},
$S:z+6}
A.fo6.prototype={
$1(d){return d.fo(B.f1,3.6,this.a,3,8)},
$S:z+6}
A.fo7.prototype={
$1(d){return d.fo(B.f1,1,D.c,3,6)},
$S:z+6}
A.fnZ.prototype={
$1(d){return d.fo(B.f1,1,this.a,3,6)},
$S:z+6}
A.fo_.prototype={
$1(d){return d.fo(B.f1,1.9,this.a,4,8)},
$S:z+6}
A.fhG.prototype={
$4(d,e,f,g){var w,v,u,t,s,r,q,p
for(w=this.a,v=e/2+0.2,u=d-8,t=-e/2-0.2,s=d/2+0.2,r=e-8,q=-d/2-0.2,p=f;p<g;p+=22){A.kF(w,new A.r(0,p,v),B.hC,B.e8,u,9,B.hU,B.ip,0.6)
A.kF(w,new A.r(0,p,t),B.qL,B.e8,u,9,B.hU,B.tb,0.6)
A.kF(w,new A.r(s,p,0),B.tb,B.e8,r,9,B.hU,B.hC,0.6)
A.kF(w,new A.r(q,p,0),B.ip,B.e8,r,9,B.hU,B.qL,0.6)}},
$S:1808}
A.fus.prototype={
$4$alongX(d,e,f,g){var w,v,u,t,s,r,q,p,o,n
for(w=this.a,v=0;v<=f;++v){u=A.o0(d,e,v/f)
w.aDt(new A.r(u.a,4,u.c),B.hb7,B.XZ,!1,0.05)}t=A.o0(d,e,0.5)
for(s=e.aF(0,d).guR()+0.15,r=t.a,q=t.c,p=0;p<2;++p){o=B.ddF[p]
n=g?new A.r(s,0.16,0.3):new A.r(0.3,0.16,s)
w.aY(new A.r(r,o,q),n,B.XZ,0.05)}},
$3(d,e,f){return this.$4$alongX(d,e,f,!0)},
$S:z+92}
A.fup.prototype={
$2(d,e){return this.a.jg(A.H_(d,0.35,3),0.06,e,!1,0.4,6)},
$S:z+93}
A.fuo.prototype={
$1(d){return this.a.jg(A.H_(d,0.5,3),0.14,B.pQ,!1,0.3,8)},
$S:z+94}
A.fur.prototype={
$2$col(d,e){return this.a.jg(A.H_(d,0.4,3),0.055,e,!1,0.35,6)},
$1(d){return this.$2$col(d,B.Y7)},
$S:z+95}
A.fuq.prototype={
$5$h$w(d,e,f,g,h){var w=this.a
w.b=d
w.aY(e,new A.r(h,g,0.06),f,0.3)},
$3(d,e,f){return this.$5$h$w(d,e,f,0.7,0.45)},
$4$w(d,e,f,g){return this.$5$h$w(d,e,f,0.7,g)},
$S:z+96}
A.fvn.prototype={
$0(){return A.fU(1320,120,0.25,"tri")},
$S:0}
A.dQt.prototype={
$1(d){return this.a},
$S:39}
A.dQu.prototype={
$0(){return C.a4(this.a,!1).ib()},
$S:0}
A.dQv.prototype={
$0(){return this.a.rA(A.b0d("","",!1))},
$S:0}
A.dQw.prototype={
$0(){return this.a.rA(B.dB4)},
$S:0}
A.dQA.prototype={
$0(){return this.a.rA(A.b0d("wiring","",!1))},
$S:0}
A.dQB.prototype={
$0(){return this.a.rA(A.b0d("plumbing","",!1))},
$S:0}
A.dQC.prototype={
$0(){return this.a.rA(A.b0d("fix","",!1))},
$S:0}
A.dQD.prototype={
$0(){return this.a.rA(A.cgZ(!1,null,!1))},
$S:0}
A.dQE.prototype={
$0(){return this.a.rA(A.cgZ(!1,null,!0))},
$S:0}
A.dQF.prototype={
$0(){return this.a.rA(B.e5L)},
$S:0}
A.dQG.prototype={
$0(){return this.a.rA(new A.arA(!1,null))},
$S:0}
A.dQH.prototype={
$0(){return this.a.rA(B.dL5)},
$S:0}
A.dQx.prototype={
$0(){var w=this.b.a
w=w==="house"?B.hf3:A.b0d("",w,!1)
return this.a.rA(w)},
$S:0}
A.dQy.prototype={
$0(){return this.a.rA(B.dHP)},
$S:0}
A.dQz.prototype={
$0(){return this.a.rA(B.aH8)},
$S:0}
A.f26.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new A.f25())},
$S:11}
A.f25.prototype={
$0(){},
$S:0}
A.cvq.prototype={
$0(){$.aj7=!$.aj7
A.h8F()
A.fU($.aj7?520:420,60,0.25,"tri")},
$S:0}
A.cvr.prototype={
$0(){$.aj6=!$.aj6
A.h8F()
A.fU($.aj6?520:420,60,0.25,"tri")},
$S:0}
A.fMq.prototype={
$1(d){var w,v,u,t,s,r,q,p,o=null,n=C.aI(d,o,x.w).w,m=this.b,l=this.c,k=l.length,j=x.p,i=C.a([C.d(this.a,o,o,o,o,o,o,D.de,o,o,o),D.av,C.d(""+new C.Z(m,new A.fMp(),C.T(m).k("Z<1>")).gL(0)+" of "+k+" steps done",o,o,o,o,o,o,B.JQ,o,o,o),D.W],j)
for(w=0;w<k;++w){v=D.c.j(0.05)
u=new C.aQ(14,14)
t=new C.ay(m[w]?D.bj.j(0.6):D.bz,1,D.r,-1)
s=m[w]
r=s?"\u2705":""+(w+1)+"."
q=s?D.c:D.aD
p=l[w]
s=s?D.aB:D.c
i.push(C.p(o,new C.cc(D.aN,D.e,D.j,D.E,o,D.p,o,0,C.a([new C.y(r,o,new C.F(!0,q,o,o,o,o,14,D.u,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o),o,o,o,o,o,o,o,o,o),D.as,new C.bA(1,D.bd,new C.y(p,o,new C.F(!0,s,o,o,o,o,13,o,o,o,o,o,1.4,o,o,o,o,o,o,o,o,o,o,o,o,o),o,o,o,o,o,o,o,o,o),o)],j),o),D.f,o,o,new C.o(v,o,new C.bK(t,t,t,t),new C.bk(u,u,u,u),o,o,D.n),o,o,o,D.cu,D.bf,o,o,o))}return C.bn(!0,new C.cT(new C.aZ(0,1/0,0,n.a.b*0.75),C.ct(i,o,D.bR,o,o,D.ah,!0),o),!0,!1,D.af,!0,!0)},
$S:26}
A.fMp.prototype={
$1(d){return d},
$S:119}
A.bW8.prototype={
$0(){return C.a4(this.a,!1).ib()},
$S:0}
A.d8X.prototype={
$0(){var w=this.a,v=w.geq(0),u=this.b
v.r=u==="practice"
u=u==="test"
v.y=u
if(u)v.f=v.e=!1
w.qA()},
$S:0}
A.d8V.prototype={
$0(){var w=this.a
w.y=this.b
w.z=this.c},
$S:0}
A.d8W.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new A.d8U(w))},
$S:0}
A.d8U.prototype={
$0(){return this.a.y=null},
$S:0}
A.d8I.prototype={
$0(){return this.a.x=0},
$S:0}
A.d8J.prototype={
$0(){return this.a.x=0},
$S:0}
A.d8H.prototype={
$1(d){var w=this.a.geq(0).b
return new C.bc(w,C.a6(w).k("bc<2>")).t(0,d)},
$S:3}
A.d8K.prototype={
$1(d){return d.a===this.a},
$S:z+12}
A.d8L.prototype={
$2(d,e){return e===this.a},
$S:456}
A.d8M.prototype={
$0(){var w=this.a
w.w=""
w.qA()},
$S:0}
A.d8N.prototype={
$1(d){return d.a===this.a},
$S:z+7}
A.d8O.prototype={
$0(){var w=this.a,v=this.b
if(w.w===v)v=""
w.w=v
w.x=v.length===0?0:this.c},
$S:0}
A.d8P.prototype={
$1(d){return d.a===this.a},
$S:z+7}
A.d8Q.prototype={
$0(){var w=this.a
w.qA()
w.x=this.b},
$S:0}
A.d8R.prototype={
$0(){var w=this.a
w.qA()
w.x=this.b},
$S:0}
A.d8S.prototype={
$0(){return this.a.x=this.b},
$S:0}
A.d8T.prototype={
$0(){var w=this.a,v=w.geq(0),u=v.a
v.a=!u
if(u)v.d=!1
w.qA()},
$S:0}
A.d8Y.prototype={
$0(){var w,v=this.a,u=v.geq(0)
u.a=!0
u.d=!1
w=this.b
if(w.e)u.w=!0
u.z=w.r
v.ax=v.at.gil()/1000
v.qA()},
$S:0}
A.d8Z.prototype={
$0(){var w=this.a,v=w.geq(0)
v.d=v.a=!0
w.qA()},
$S:0}
A.d97.prototype={
$1(d){return!d},
$S:119}
A.d9g.prototype={
$0(){var w=this.a.gz2()
return A.fMo(this.b,w.b,w.d,this.c)},
$S:0}
A.d9n.prototype={
$1(d){var w,v,u,t,s=C.a([],x.z),r=this.a,q=r.geq(0),p=q.z
if(p.length!==0){p=r.at.gil()
w=r.ax
v=q.z
u=v==="fire"?7:4.5
t=p/1000-w<u
p=v}else t=!1
if(!t)q=q.w&&p.length!==0
else q=!0
if(q){q=t?p:"smolder"
A.hpg(new A.fk(s),q,new A.d94(),0.32,r.at.gil()/1000)}return s},
$S:z+10}
A.d94.prototype={
$1(d){return new A.r(d.a*0.32,-0.2+d.b*0.32,0.8+d.c*0.32)},
$S:z+5}
A.d98.prototype={
$0(){return this.a.aAv("learn")},
$S:0}
A.d99.prototype={
$0(){return this.a.aAv("practice")},
$S:0}
A.d9h.prototype={
$0(){return this.a.aAv("test")},
$S:0}
A.d9i.prototype={
$0(){var w=this.a
return w.m(new A.d96(w))},
$S:0}
A.d96.prototype={
$0(){var w=this.a,v=w.geq(0)
v.e=!v.e
w.qA()},
$S:0}
A.d9j.prototype={
$0(){var w=this.a
return w.m(new A.d95(w))},
$S:0}
A.d95.prototype={
$0(){var w=this.a,v=w.geq(0)
v.f=!v.f
w.qA()},
$S:0}
A.d9k.prototype={
$0(){return A.h62(this.a)},
$S:0}
A.d9l.prototype={
$0(){var w=this.a,v=w.gik()
return v.hQ(10,0.2,new A.r(0.6,0,w.geq(0).c===0?4.2:0.4),-0.95)},
$S:0}
A.d9m.prototype={
$0(){var w=this.a,v=w.gik()
return v.hQ(10,0.2,new A.r(-0.6,0,w.geq(0).c===0?4.2:0.4),0.95)},
$S:0}
A.d9o.prototype={
$1(d){return!this.a.geq(0).b.iI(0,d.a)},
$S:z+7}
A.d9a.prototype={
$0(){var w=this.a,v=this.b,u=v.a
if(w.geq(0).b.iI(0,u)){w.nz("That wire is already fastened. Tap the wire in the 3D view to take it off if you want to move it.")
return}w.m(new A.d93(w,v))
if(w.w.length!==0){w.aXp(u)
w.j9(v.b+": now tap the screw it belongs on.",!0)}},
$S:0}
A.d93.prototype={
$0(){var w=this.a,v=this.b.a
return w.w=w.w===v?"":v},
$S:0}
A.d9b.prototype={
$0(){var w=this.a,v=w.gz2(),u=v.b,t=A.fLW(v)
w=w.geq(0)
w=C.a([new A.aaV(u,t,A.h3p(v,w),w.x)],x.fJ)
v=B.aFU.h(0,v.a)
if(v==null)v=B.azb
return A.htB(this.b,w,v,u)},
$S:0}
A.d9c.prototype={
$0(){var w=this.a
w.m(new A.d92(w))
A.yG()
w.j9("The wires are folded back and the device is pushed into the box. Now put the cover plate on.",!0)
w.of()},
$S:0}
A.d92.prototype={
$0(){var w=this.a
w.geq(0).c=1
w.qA()},
$S:0}
A.d9d.prototype={
$0(){var w=this.a
w.m(new A.d91(w))
w.of()},
$S:0}
A.d91.prototype={
$0(){var w=this.a
w.geq(0).c=0
w.qA()},
$S:0}
A.d9e.prototype={
$0(){var w=this.a
w.m(new A.d90(w))
A.yG()
w.j9("Cover plate on. Now turn the power on and test.",!0)},
$S:0}
A.d90.prototype={
$0(){var w=this.a
w.geq(0).c=2
w.qA()},
$S:0}
A.d9f.prototype={
$0(){var w=this.a
w.m(new A.d9_(w))
w.of()},
$S:0}
A.d9_.prototype={
$0(){var w=this.a,v=w.geq(0)
v.c=0
v.b.a8(0)
v.a=!0
v.w=v.d=!1
v.z=""
w.Q=0
w.w=""
w.x=0
w.qA()},
$S:0}
A.eSq.prototype={
$0(){var w=this.a
w.x=this.b
w.y=this.c},
$S:0}
A.eSr.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new A.eSp(w))},
$S:0}
A.eSp.prototype={
$0(){return this.a.x=null},
$S:0}
A.eSj.prototype={
$0(){return this.a.w=0},
$S:0}
A.eSk.prototype={
$0(){var w=this.a,v=w.geq(0)
v.a.M(0,this.b)
v.c=!1
v.d=""
w.f=A.bBG(v)
w.r=""},
$S:0}
A.eSl.prototype={
$0(){var w=this.a,v=w.geq(0)
v.b.n(0,this.b,!0)
v.d=""
w.f=A.bBG(v)},
$S:0}
A.eSm.prototype={
$0(){return this.a.w=this.b},
$S:0}
A.eSn.prototype={
$1(d){return this.a.geq(0).b.h(0,d)!==!0},
$S:3}
A.eSo.prototype={
$0(){var w,v=this.a,u=v.geq(0)
u.c=!0
w=this.b
u.d=w.length===0?"":D.d.gI(w)
v.f=A.bBG(u)},
$S:0}
A.eSv.prototype={
$1(d){return!d},
$S:119}
A.eSz.prototype={
$0(){return A.fMo(this.a,"Sink drain (P-trap)",B.dgf,this.b)},
$S:0}
A.eSw.prototype={
$1(d){return A.ie_(this.a.geq(0),d)},
$S:z+10}
A.eSx.prototype={
$0(){var w=this.a
return w.m(new A.eSu(w,this.b))},
$S:0}
A.eSu.prototype={
$0(){var w=this.a,v=this.b
return w.r=w.r===v?"":v},
$S:0}
A.eSy.prototype={
$0(){var w=this.a
w.m(new A.eSt(w))
w.of()},
$S:0}
A.eSt.prototype={
$0(){var w,v=this.a,u=v.geq(0)
u.a.a8(0)
w=u.b
w.aJ6(w,new A.eSs())
u.c=!1
v.r=u.d=""
v.w=0
v.f=A.bBG(u)},
$S:0}
A.eSs.prototype={
$2(d,e){return!1},
$S:1810}
A.dbZ.prototype={
$0(){var w=this.a
w.x=this.b
w.y=this.c},
$S:0}
A.dc_.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new A.dbY(w))},
$S:0}
A.dbY.prototype={
$0(){return this.a.x=null},
$S:0}
A.dbR.prototype={
$0(){return this.a.w=0},
$S:0}
A.dbU.prototype={
$1(d){return d.a===this.a},
$S:z+41}
A.dbV.prototype={
$0(){var w=this.a,v=w.geq(0)
v.f=!1
w.f=A.aPa(v)
w.w=this.b},
$S:0}
A.dbW.prototype={
$0(){var w=this.a,v=w.geq(0),u=v.e
u.bu(u,new A.dbT(this.b))
v.f=!1
w.f=A.aPa(v)},
$S:0}
A.dbT.prototype={
$2(d,e){return e===this.a},
$S:456}
A.dbX.prototype={
$0(){return this.a.w=this.b},
$S:0}
A.dbS.prototype={
$0(){var w=this.a,v=w.geq(0)
v.f=!v.f
w.f=A.aPa(v)},
$S:0}
A.dc3.prototype={
$1(d){return!d},
$S:119}
A.dc9.prototype={
$0(){return A.fMo(this.a,"Faucet supply lines",B.dt_,this.b)},
$S:0}
A.dc4.prototype={
$1(d){return A.i4J(this.a.geq(0),d)},
$S:z+10}
A.dc5.prototype={
$0(){var w=this.a
return w.m(new A.dc2(w))},
$S:0}
A.dc2.prototype={
$0(){var w=this.a,v=w.geq(0)
v.r=!v.r
w.f=A.aPa(v)},
$S:0}
A.dc7.prototype={
$0(){var w=this.b
return w.m(new A.dc1(this.a,w))},
$S:0}
A.dc1.prototype={
$0(){var w=this.b,v=w.r,u=this.a.a
return w.r=v===u?"":u},
$S:0}
A.dc6.prototype={
$1(d){return d===this.a.a},
$S:3}
A.dc8.prototype={
$0(){var w=this.a
w.m(new A.dc0(w))
w.of()},
$S:0}
A.dc0.prototype={
$0(){var w=this.a,v=w.geq(0)
v.e.a8(0)
v.f=!1
w.r=""
w.w=0
w.f=A.aPa(v)},
$S:0}
A.dj2.prototype={
$0(){var w=this.a
w.x=this.b
w.y=this.c},
$S:0}
A.dj3.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new A.dj1(w))},
$S:0}
A.dj1.prototype={
$0(){return this.a.x=null},
$S:0}
A.diX.prototype={
$0(){return this.a.r=0},
$S:0}
A.diZ.prototype={
$0(){var w=this.a,v=w.d
v.d.W(0,72)
w.f=A.agt(v)
w.r=this.b},
$S:0}
A.dj_.prototype={
$0(){var w=this.a,v=w.d
v.c=!0
v.b=!1
w.f=A.agt(v)
w.r=this.b},
$S:0}
A.dj0.prototype={
$0(){return this.a.r=this.b},
$S:0}
A.diY.prototype={
$1(d){return this.a},
$S:39}
A.djb.prototype={
$0(){return A.fMo(this.a,"Fix the house",B.coU,this.b)},
$S:0}
A.dj6.prototype={
$0(){return this.a.cfb(this.b)},
$S:0}
A.dj8.prototype={
$1(d){return d<=this.a.d.a},
$S:33}
A.dj7.prototype={
$1(d){return A.hpy(this.a.d,d)},
$S:z+10}
A.dj9.prototype={
$0(){var w=this.a
return w.m(new A.dj5(w))},
$S:0}
A.dj5.prototype={
$0(){var w=this.a
return w.w=w.w==="wrench"?"":"wrench"},
$S:0}
A.dja.prototype={
$1(d){var w=this.a
return w.m(new A.dj4(w,d))},
$S:7}
A.dj4.prototype={
$0(){var w=this.a,v=w.d,u=D.k.V(this.b)
v.a=u
if(u<5)w.r=0
w.f=A.agt(v)},
$S:0}
A.fdq.prototype={
$0(){return this.a.e=!1},
$S:0}
A.fdo.prototype={
$0(){return this.a.e=!0},
$S:0}
A.fdp.prototype={
$0(){var w=this.a
w.d=C.dk(B.bvv,new A.fdn(w))},
$S:0}
A.fdn.prototype={
$1(d){var w=this.a.a,v=w.e
return v.ap8(w.f?1.06:0.94)},
$S:11}
A.fds.prototype={
$1(d){return this.a.c7p(0)},
$S:80}
A.fdt.prototype={
$1(d){return this.a.b74()},
$S:124}
A.fdr.prototype={
$1(d){return this.a.b74()},
$S:172}
A.cay.prototype={
$0(){return C.a4(this.a,!1).ib()},
$S:0}
A.fv3.prototype={
$5(d,e,f,g,h){var w=this.a.a.t(0,h),v=this.b
v.b=d
if(w)v.a6W(e,0.66,f,!1,!0,!0,g,14)
else{v.d=0.3
v.aJ3(e,0.74,D.b1,!1,!0,0,8)
v.d=1}},
$S:z+98}
A.fv2.prototype={
$6(d,e,f,g,h,i){var w,v
if(!i)return
w=this.a.b.h(0,e)
v=w===!0?f:f.aa(0,h)
w=this.b
w.e=0.5
w.b=d
w.dR(v.aF(0,g.aJ(0,0.6)),v.aa(0,g.aJ(0,0.6)),1.12,B.pQ,0.35,8)
w.zo(v.aF(0,g.aJ(0,0.62)),v.aF(0,g.aJ(0,0.5)),1.2,0.5,B.Xn,0.2,8)
w.b=0
w.zo(f.aF(0,g.aJ(0,0.05)),f.aa(0,g.aJ(0,0.08)),0.82,0.55,B.bnW,0.1,12)
w.e=0},
$S:z+99}
A.fv1.prototype={
$1(d){return d.b<-0.6},
$S:z+22}
A.fu8.prototype={
$1(d){return this.a.e.h(0,d)===this.b},
$S:33}
A.fwK.prototype={
$2(d,e){var w,v,u,t,s,r,q,p=A.agG(d)
for(w=this.a*1.6,v=this.b,u=p.a,t=p.b,s=p.c,r=0;r<7;++r){q=D.k.F(w+r/7,1)
v.fT(new A.r(u+Math.sin(r*2.1)*q*1.4,t+(q*2.4-q*q*6.5),s+(1+q*2.5)),0.2,e,3,6,0.9)}},
$S:1811}
A.fwJ.prototype={
$1(d){return this.a.e.h(0,d.a)!=null},
$S:z+41}
A.clV.prototype={
$1(d){return d.a===this.a},
$S:z+100}
A.clW.prototype={
$1(d){return d.a===this.a},
$S:z+1}
A.clS.prototype={
$1(d){return this.a.vi(0,d).c.toLowerCase()},
$S:14}
A.clX.prototype={
$1(d){var w
if(!this.a.e.t(0,d.a)){w=d.b
w=w==="valve"||D.a.a0(w,"hose")}else w=!1
return w},
$S:z+1}
A.clY.prototype={
$1(d){var w=this.a,v=d.a
return w.e.t(0,v)&&w.aGW(v)>0},
$S:z+1}
A.clZ.prototype={
$1(d){return d.a},
$S:z+24}
A.cm_.prototype={
$1(d){return d.a},
$S:z+24}
A.clT.prototype={
$1(d){return this.a.e.t(0,d.a)},
$S:z+1}
A.clU.prototype={
$1(d){var w=this.a,v=d.a
return w.aGW(v)<=0||!w.e.t(0,v)},
$S:z+1}
A.fv0.prototype={
$1(d){var w=this.a
w.b=0
w.dR(new A.r(d,8,0),new A.r(d,8,1.6),0.5,B.Lv,0.7,10)},
$S:7}
A.fuZ.prototype={
$1(d){var w,v,u,t,s,r,q=C.a([],x.o)
for(w=d.length,v=this.a,u=v.a,t=v.b,v=v.c,s=0;s<d.length;d.length===w||(0,C.M)(d),++s){r=d[s]
q.push(new A.r(r.a+u,r.b+t,r.c+v))}return q},
$S:z+103}
A.fuT.prototype={
$3$r(d,e,f){var w=this.a,v=this.b.c
v===$&&C.c()
w.b=9100+D.d.bg(v.c,new A.fuW(d))
w.d=0.32
w.aJ3(e,f,D.b1,!1,!0,0,8)
w.d=1},
$2(d,e){return this.$3$r(d,e,1.2)},
$S:z+104}
A.fuW.prototype={
$1(d){return d.a===this.a},
$S:z+1}
A.fuU.prototype={
$3(d,e,f){var w=this.a,v=this.b.c
v===$&&C.c()
w.b=9100+D.d.bg(v.c,new A.fuV(d))
w.d=0.32
w.aP(e,f,D.b1)
w.d=1},
$S:z+105}
A.fuV.prototype={
$1(d){return d.a===this.a},
$S:z+1}
A.fv_.prototype={
$3(d,e,f){var w,v,u,t=this,s=t.a,r=s.c
r===$&&C.c()
w=D.d.cu(r.c,d)
r=d.c
v=s.e
u=d.a
if(v.t(0,u))s="Fitted."
else{s=s.b?"":d.e
s="A spot for the "+r.toLowerCase()+". "+s}t.b.n(0,9100+w,new A.cW(r,s,e,26))
if(t.c&&!v.t(0,u)&&t.d.length!==0)t.e.push(new A.hf(e.aa(0,B.fW1),f,D.eV,0))},
$S:z+106}
A.fuP.prototype={
$0(){return this.a.$3(this.b.a,new A.r(this.c-10,9,2.4),B.aal)},
$S:0}
A.fuQ.prototype={
$0(){return this.a.$3(this.b.a,new A.r(this.c-8,9,2.4),B.aal)},
$S:0}
A.fuR.prototype={
$0(){return this.a.$3(this.b.a,new A.r(this.c+8,9,2.4),B.aal)},
$S:0}
A.fuX.prototype={
$4(d,e,f,g){var w,v,u,t,s=this
if(D.d.bg(s.a,new A.fuY(d))<0||!s.b.e.t(0,d))return
w=s.b.f.h(0,d)
v=(w==null?0:w)>=1
w=s.c
u=9260+g
w.b=u
t=v?e:e.aa(0,f.aJ(0,1.7))
w.dR(t.aF(0,f.aJ(0,0.6)),t.aa(0,f.aJ(0,0.6)),1.12,B.pQ,0.35,8)
w.zo(t.aF(0,f.aJ(0,0.62)),t.aF(0,f.aJ(0,0.5)),1.2,0.5,B.Xn,0.2,8)
w=v?"Tight.":"Loose. Tap it with the wrench to tighten it."
s.d.n(0,u,new A.cW("Slip nut",w,e,10))},
$S:z+107}
A.fuY.prototype={
$1(d){return d.a===this.a},
$S:z+1}
A.fuS.prototype={
$1(d){return d.a===this.a},
$S:z+1}
A.fLy.prototype={
$1(d){return d.a===this.a},
$S:z+1}
A.emD.prototype={
$0(){var w=this.a
w.z=this.b
w.Q=this.c},
$S:0}
A.emE.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new A.emC(w))},
$S:0}
A.emC.prototype={
$0(){return this.a.z=null},
$S:0}
A.emw.prototype={
$0(){return this.a.y=0},
$S:0}
A.emI.prototype={
$1(d){return d.a===this.a},
$S:z+1}
A.eml.prototype={
$0(){return this.a.y=this.b},
$S:0}
A.emm.prototype={
$0(){var w=this.a
w.ZS()
w.y=this.b},
$S:0}
A.emn.prototype={
$1(d){return this.a.c7q()},
$S:9}
A.ems.prototype={
$1(d){var w,v=null,u=this.a,t=u.e
t===$&&C.c()
w=t.c
w===$&&C.c()
t=C.d("The "+w.b.toLowerCase()+" is finished and nothing leaks.\n\nMistakes: "+t.w+"\n\nThe next job is different.",v,v,v,v,v,v,B.a9e,v,v,v)
return C.em(C.a([C.bN(!1,B.aU2,v,v,!0,v,v,new A.emq(d),v,v),C.bI(B.fCd,new A.emr(u,d),v)],x.p),v,v,E.nf,t,v,v,v,v,B.fDQ,v)},
$S:18}
A.emq.prototype={
$0(){C.a4(this.a,!1).O(null)
return null},
$S:0}
A.emr.prototype={
$0(){C.a4(this.b,!1).O(null)
this.a.aYr()},
$S:0}
A.emB.prototype={
$0(){var w,v,u=this.a
u.d=D.o.F(Date.now(),1e5)
w=u.gCS(0)
v=u.e
v===$&&C.c()
u.e=A.fZP(v.b,w,null)
u.x=""
u.as=!1
u.z=null
u.y=0
u.ZS()},
$S:0}
A.emJ.prototype={
$1(d){return d.b===this.a},
$S:z+1}
A.emt.prototype={
$1(d){var w=this.a.e
w===$&&C.c()
return w.x.t(0,d.a)},
$S:z+1}
A.emu.prototype={
$1(d){return d.c.toLowerCase()},
$S:z+24}
A.emv.prototype={
$1(d){var w=this.a.e
w===$&&C.c()
return w.aGW(d.a)>0},
$S:z+1}
A.emF.prototype={
$0(){var w=this.b
w.x=this.a.b
w.ZS()},
$S:0}
A.emG.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
A.emH.prototype={
$0(){return this.a.y=this.b},
$S:0}
A.emp.prototype={
$0(){var w=this.a
return w.m(new A.emo(w,this.b,this.c))},
$S:0}
A.emo.prototype={
$0(){var w=this.a
w.x=this.b?"":this.c
w.ZS()},
$S:0}
A.emK.prototype={
$1(d){var w=this.a.e
w===$&&C.c()
return w.e.t(0,d.a)},
$S:z+1}
A.emO.prototype={
$0(){return this.a.c1k(this.b)},
$S:0}
A.emM.prototype={
$1(d){return d<=5},
$S:33}
A.emL.prototype={
$1(d){var w=this.a,v=w.e
v===$&&C.c()
return A.idS(v,w.w.gil()/1000)},
$S:z+10}
A.emN.prototype={
$0(){return this.b.cxt(this.a.a)},
$S:0}
A.emA.prototype={
$1(d){var w,v,u,t,s,r,q,p=null,o=this.a,n=o.e
n===$&&C.c()
w=x.p
n=C.a([B.fPH,D.av,C.d("Mistakes "+n.w,p,p,p,p,p,p,B.JQ,p,p,p),D.W],w)
v=o.e.c
v===$&&C.c()
v=v.c
u=v.length
t=0
for(;t<u;++t){s=v[t]
r=D.c.j(0.05)
q=new C.aQ(12,12)
n.push(C.p(p,new C.y((o.e.e.t(0,s.a)?"\u2705":"\ud83d\udd27")+" "+s.c,p,B.fd6,p,p,p,p,p,p,p,p,p),D.f,p,p,new C.o(r,p,p,new C.bk(q,q,q,q),p,p,D.n),p,p,p,D.eG,D.bT,p,p,p))}n.push(D.am)
n.push(B.ftP)
n.push(D.O)
n.push(C.B(C.a([B.bDn,C.Y2(p,p,p,p,!1,D.y,p,p,p,p,p,p,new A.emy(o,d),p,p,p,p,p,p,p,p,o.e.b)],w),D.m,p,D.e,D.j,0,p,p))
n.push(C.bI(B.aU4,new A.emz(o,d),p))
return C.bn(!0,C.ct(n,p,D.bR,p,p,D.ah,!0),!0,!1,D.af,!0,!0)},
$S:26}
A.emy.prototype={
$1(d){var w=this.a
w.m(new A.emx(w,d))
C.a4(this.b,!1).O(null)},
$S:8}
A.emx.prototype={
$0(){var w=this.a,v=w.e
v===$&&C.c()
v.b=this.b
w.ZS()},
$S:0}
A.emz.prototype={
$0(){C.a4(this.b,!1).O(null)
this.a.aYr()},
$S:0}
A.fTU.prototype={
$1(d){return d.a===this.a},
$S:z+42}
A.cqS.prototype={
$1(d){return D.d.t(B.jT,d.b)},
$S:z+8}
A.cqZ.prototype={
$1(d){return!this.a.y.t(0,d)},
$S:33}
A.cr_.prototype={
$1(d){var w=this.a
return w.x.aj(0,d)&&w.z.t(0,d)},
$S:33}
A.cr0.prototype={
$1(d){var w=$.H7()[this.b],v=!1
if(w>=d)if(w<=d+48){w=this.a.Q.h(0,d)
w=(w==null?null:w.a)===!0}else w=v
else w=v
return w},
$S:33}
A.cr1.prototype={
$1(d){return this.a.Q.h(0,d).c.t(0,this.b)},
$S:33}
A.cr3.prototype={
$1(d){var w,v=J.e4(6,x.S)
for(w=0;w<6;++w)v[w]=w
return D.d.d5(v,new A.cr2(this.a,d))},
$S:33}
A.cr2.prototype={
$1(d){return this.a.c.t(0,this.b*10+d)},
$S:33}
A.cqR.prototype={
$1(d){var w=this.a.Q.h(0,d)
return(w==null?null:w.a)===!0},
$S:33}
A.cqP.prototype={
$1(d){return!A.jX(d).c},
$S:33}
A.cqQ.prototype={
$1(d){var w=this.a.apV(A.jX(d).d.a)
return(w==null?null:w.b.t(0,d))===!0},
$S:33}
A.cqX.prototype={
$1(d){return d.c},
$S:z+9}
A.cqY.prototype={
$1(d){return d.d},
$S:z+9}
A.cqT.prototype={
$1(d){return d.d},
$S:z+9}
A.cqU.prototype={
$1(d){var w=this.a.Q.h(0,d)
return(w==null?null:w.e)===!0},
$S:33}
A.cqV.prototype={
$1(d){return d.a===this.a},
$S:z+12}
A.cr4.prototype={
$2(d,e){return e===this.a},
$S:456}
A.cqW.prototype={
$1(d){return d.c===this.a},
$S:z+8}
A.erh.prototype={
$0(){var w=this.a
w.ax=this.b
w.ay=this.c},
$S:0}
A.eri.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new A.erg(w))},
$S:0}
A.erg.prototype={
$0(){return this.a.ax=null},
$S:0}
A.eqj.prototype={
$0(){return this.a.CW=!0},
$S:0}
A.eqk.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new A.eqi(w))},
$S:12}
A.eqi.prototype={
$0(){return this.a.CW=!1},
$S:0}
A.eql.prototype={
$0(){return this.a.CW=!0},
$S:0}
A.eqm.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new A.eqh(w))},
$S:12}
A.eqh.prototype={
$0(){return this.a.CW=!1},
$S:0}
A.eqn.prototype={
$1(d){return this.a.bPN()},
$S:9}
A.eqo.prototype={
$1(d){return this.a.c7v()},
$S:9}
A.eqy.prototype={
$0(){return this.a.Q=-1},
$S:0}
A.eqA.prototype={
$0(){return this.a.Q=-1},
$S:0}
A.eqp.prototype={
$1(d){return d.b==="tv"},
$S:701}
A.eqq.prototype={
$0(){return this.a.Q=-1},
$S:0}
A.eqr.prototype={
$0(){return this.a.Q=-1},
$S:0}
A.eqR.prototype={
$0(){var w=this.a
w.Q=this.b
w.z=w.at=""
w.ch=!1},
$S:0}
A.eqz.prototype={
$0(){var w=this.a
w.Q=-1
w.at=""},
$S:0}
A.erd.prototype={
$0(){return this.a.as=0},
$S:0}
A.ere.prototype={
$0(){return this.a.z=""},
$S:0}
A.erf.prototype={
$0(){return this.a.as=this.b},
$S:0}
A.erb.prototype={
$0(){return this.a.z=""},
$S:0}
A.erc.prototype={
$0(){return this.a.as=2000+this.b},
$S:0}
A.era.prototype={
$0(){return this.a.z=""},
$S:0}
A.er2.prototype={
$1(d){return d.a===this.a},
$S:z+12}
A.er3.prototype={
$0(){return this.a.at=""},
$S:0}
A.er4.prototype={
$1(d){return d.a===this.a},
$S:z+7}
A.er5.prototype={
$0(){var w=this,v=w.a,u=w.b
if(v.at===u)u=""
v.at=u
v.as=u.length===0?0:5000+w.c*100+w.d},
$S:0}
A.er6.prototype={
$1(d){return d.a===this.a},
$S:z+7}
A.er7.prototype={
$0(){return this.a.as=5000+this.b*100+this.c},
$S:0}
A.er8.prototype={
$0(){var w=this.a
w.at=""
w.as=0},
$S:0}
A.er9.prototype={
$0(){return this.a.as=5000+this.b*100+this.c},
$S:0}
A.erj.prototype={
$0(){var w=this.b,v=D.d.t(B.HV,w.z),u=this.a.a
if(v)w.b1T(u)
else w.b1U(u)},
$S:0}
A.eqx.prototype={
$1(d){var w=null
return C.em(C.a([C.bN(!1,B.fFO,w,w,!0,w,w,new A.eqv(d),w,w),C.bI(D.E4,new A.eqw(this.a,d),w)],x.p),w,w,E.nf,B.fuY,w,w,w,w,B.fCD,w)},
$S:18}
A.eqv.prototype={
$0(){C.a4(this.a,!1).O(null)
return null},
$S:0}
A.eqw.prototype={
$0(){C.a4(this.b,!1).O(null)
this.a.axp(!0)},
$S:0}
A.equ.prototype={
$1(d){var w,v=null,u=this.a,t=u.d
t===$&&C.c()
w=t.c
w===$&&C.c()
t=C.d("The "+w.toLowerCase()+" is built, wired, painted and tested.\n\nMistakes: "+t.f+"\nShocks: "+t.r+"\nLives left: "+t.e+"\n\nEvery job is a little different. Ready for another one?",v,v,v,v,v,v,B.a9e,v,v,v)
return C.em(C.a([C.bN(!1,B.fQz,v,v,!0,v,v,new A.eqs(d),v,v),C.bI(B.fCw,new A.eqt(u,d),v)],x.p),v,v,E.nf,t,v,v,v,v,B.fKw,v)},
$S:18}
A.eqs.prototype={
$0(){C.a4(this.a,!1).O(null)
return null},
$S:0}
A.eqt.prototype={
$0(){C.a4(this.b,!1).O(null)
this.a.aZC()},
$S:0}
A.eqB.prototype={
$0(){var w,v,u
if(!this.b)this.a.e=D.o.F(Date.now(),1e5)
w=this.a
v=w.gCS(0)
u=w.d
u===$&&C.c()
w.d=A.cqN(null,null,u.b,v,!0)
w.y=0
w.z=""
w.Q=-1
w.at=""
w.as=0
w.cx=!1
w.x.a8(0)
w.ax=null
w.r=A.wP(w.d,new A.rI(w.z,w.Q,!1))},
$S:0}
A.eqP.prototype={
$1(d){return new C.N(d,new A.eqQ(),d.$ti.k("N<ak.E,n>")).aH(0,", ")},
$S:1812}
A.eqQ.prototype={
$1(d){return A.jX(d).b},
$S:81}
A.eqC.prototype={
$1(d){var w=this.a.d
w===$&&C.c()
return!w.x.aj(0,d.a)},
$S:z+8}
A.eqD.prototype={
$1(d){var w=this.a.d
w===$&&C.c()
return!w.z.t(0,d.a)},
$S:z+8}
A.eqE.prototype={
$1(d){var w=this.a.d
w===$&&C.c()
return!w.y.t(0,d)},
$S:33}
A.eqH.prototype={
$1(d){return!d.a},
$S:z+9}
A.eqI.prototype={
$1(d){return d.b<3},
$S:z+9}
A.eqJ.prototype={
$1(d){return!d.c},
$S:z+9}
A.eqK.prototype={
$1(d){return!d.d},
$S:z+9}
A.eqL.prototype={
$1(d){return!d.c},
$S:z+9}
A.eqM.prototype={
$1(d){var w=this.a.d
w===$&&C.c()
w=w.at.h(0,d.a)
w=w==null?null:w.a
return w!==d.b},
$S:z+8}
A.eqN.prototype={
$1(d){return d.a},
$S:z+112}
A.eqO.prototype={
$1(d){var w=this.a.d
w===$&&C.c()
w=w.at.h(0,d.a)
w=w==null?null:w.b.c
return(w==null?0:w)<2},
$S:z+8}
A.eqF.prototype={
$1(d){var w
if(D.d.t(B.lH,d.b)){w=this.a.d
w===$&&C.c()
w=w.at.h(0,d.a)
w=(w==null?null:w.c)!==!0}else w=!1
return w},
$S:z+8}
A.eqG.prototype={
$1(d){return d.b==="fan"},
$S:z+8}
A.erC.prototype={
$0(){return this.a.cgd(this.b)},
$S:0}
A.erE.prototype={
$0(){var w=this.a
if(w.Q>=0)w.aee()
else{w.m(new A.ero(w))
w.b48()}},
$S:0}
A.ero.prototype={
$0(){return this.a.as=0},
$S:0}
A.erD.prototype={
$1(d){var w=this.a,v=w.d
v===$&&C.c()
return A.ie8(v,w.w.gil()/1000,w.x)},
$S:z+10}
A.err.prototype={
$0(){var w=this.a,v=w.d
v===$&&C.c()
return w.jA(v.aIW())},
$S:0}
A.ers.prototype={
$0(){var w=this.a
return w.m(new A.erq(w,this.b))},
$S:0}
A.erq.prototype={
$0(){var w,v=this.b.b
v.f=!v.f
v=this.a
w=v.d
w===$&&C.c()
v.r=A.wP(w,new A.rI(v.z,v.Q,!1))},
$S:0}
A.ert.prototype={
$0(){var w=this.a
return w.m(new A.erp(w,this.b))},
$S:0}
A.erp.prototype={
$0(){var w,v=this.b.b
v.e=!v.e
v=this.a
w=v.d
w===$&&C.c()
v.r=A.wP(w,new A.rI(v.z,v.Q,!1))},
$S:0}
A.erF.prototype={
$0(){var w=this.a
return w.m(new A.ern(w,this.b))},
$S:0}
A.ern.prototype={
$0(){var w,v=this.a
v.y=this.b
v.z=""
w=v.d
w===$&&C.c()
v.r=A.wP(w,new A.rI("",v.Q,!1))},
$S:0}
A.erG.prototype={
$0(){var w=this.a
return w.m(new A.erm(w))},
$S:0}
A.erm.prototype={
$0(){var w=this.a,v=w.d
v===$&&C.c()
v.alW()
w.y=2
w.z=""
w.r=A.wP(w.d,new A.rI("",w.Q,!1))
w.qB("The boxes, the cable and the walls are done. Now the wiring: pick an Outlet or a Switch from the tray, then tap its box on the wall.",!0)},
$S:0}
A.erH.prototype={
$0(){var w=this.a
return w.m(new A.erl(w,this.b))},
$S:0}
A.erl.prototype={
$0(){var w,v=this.a,u=this.b.a,t=v.z===u?"":u
v.z=t
v.as=0
w=v.d
w===$&&C.c()
v.r=A.wP(w,new A.rI(t,v.Q,!1))
if(v.z.length!==0)v.cr5(u)},
$S:0}
A.erI.prototype={
$0(){var w=this.a,v=w.d
v===$&&C.c()
return w.jA(v.cRe())},
$S:0}
A.erJ.prototype={
$1(d){return!this.a.b.b.iI(0,d.a)},
$S:z+7}
A.erK.prototype={
$0(){var w=this.a
return w.m(new A.erk(w,this.b,this.c))},
$S:0}
A.erk.prototype={
$0(){var w,v=this,u=v.c,t=u.a
if(v.b.b.b.iI(0,t)){v.a.aef("That wire is already fastened. Tap the wire in the 3D view to take it off.")
return}w=v.a
if(w.at===t)t=""
w.at=t
if(t.length!==0)w.qB(u.b+": now tap the screw it belongs on, or press the matching button below.",!0)},
$S:0}
A.eru.prototype={
$1(d){return!this.a.b.b.aj(0,d.a)},
$S:z+12}
A.erv.prototype={
$0(){var w=this.a
return w.b1S(w.Q,this.b.a)},
$S:0}
A.erw.prototype={
$0(){var w=this.a,v=w.d
v===$&&C.c()
return w.jA(v.bif(w.Q))},
$S:0}
A.erx.prototype={
$0(){var w=this.a,v=w.d
v===$&&C.c()
return w.jA(v.bid(w.Q))},
$S:0}
A.ery.prototype={
$0(){var w=this.a,v=w.d
v===$&&C.c()
return w.jA(v.bd6(w.Q))},
$S:0}
A.erz.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&C.c()
w=u.biB(v.Q)
v.jA(w)
if(w.a)v.aee()},
$S:0}
A.erA.prototype={
$0(){var w=this.a,v=w.d
v===$&&C.c()
return w.jA(v.bid(w.Q))},
$S:0}
A.erB.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&C.c()
w=u.biB(v.Q)
v.jA(w)
if(w.a){v.aee()
v.qB("The "+A.agC(this.b.a)+" is out and the box is empty. Pick the kind you want from the tray (a different outlet or switch is fine), then tap the box.",!0)}},
$S:0}
A.er1.prototype={
$1(d){return new C.dY(new A.er0(this.a,this.b),null)},
$S:20}
A.er0.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=C.aI(d,k,x.w).w,i=this.a,h=i.d
h===$&&C.c()
w=h.c
w===$&&C.c()
v=x.p
h=C.a([C.d("Job: "+w,k,k,k,k,k,k,D.de,k,k,k),D.av,C.d("Mistakes "+h.f+" \xb7 Shocks "+h.r+" \xb7 Lives "+h.e,k,k,k,k,k,k,B.JQ,k,k,k),D.W,B.fGn,D.am],v)
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
else m=m==="fan"?"A ceiling fan":"A "+A.agC(m).toLowerCase()
o=A.jX(o)
l=s.c
l=l!=null?", turned on by "+A.jX(l).b:""
h.push(C.p(k,new C.y(n+" "+m+" at "+o.b+l,k,D.oD,k,k,k,k,k,k,k,k,k),D.f,k,k,new C.o(r,k,new C.bK(p,p,p,p),new C.bk(q,q,q,q),k,k,D.n),k,k,k,D.eG,D.bT,k,k,k))}h.push(D.W)
h.push(C.B(C.a([B.bEu,C.Y2(k,k,k,k,!1,D.y,k,k,k,k,k,k,new A.eqV(i,e),k,k,k,k,k,k,k,k,i.d.b)],v),D.m,k,D.e,D.j,0,k,k))
h.push(C.B(C.a([B.bDK,C.Y2(k,k,k,k,!1,D.y,k,k,k,k,k,k,new A.eqW(i,e),k,k,k,k,k,k,k,k,i.d.dx)],v),D.m,k,D.e,D.j,0,k,k))
h.push(D.am)
w=this.b
h.push(C.B(C.a([C.E(C.dS(B.fDT,new A.eqX(w),k),1),D.ac,C.E(C.bI(B.fBO,new A.eqY(i,d,w),k),1)],v),D.m,k,D.e,D.j,0,k,k))
h.push(D.am)
h.push(D.am)
h.push(C.B(C.a([C.E(C.dS(B.fw5,new A.eqZ(i,d),k),1),D.ac,C.E(C.bI(B.aU4,new A.er_(i,d),k),1)],v),D.m,k,D.e,D.j,0,k,k))
return C.bn(!0,new C.cT(new C.aZ(0,1/0,0,j.a.b*0.8),C.ct(h,k,D.bR,k,k,D.ah,!0),k),!0,!1,D.af,!0,!0)},
$S:87}
A.eqV.prototype={
$1(d){var w=this.a,v=w.d
v===$&&C.c()
v.b=d
for(v=v.at,v=new C.dq(v,v.r,v.e);v.C();)v.d.b.r=d
this.b.$1(new A.eqT())
w.m(new A.eqU())},
$S:8}
A.eqT.prototype={
$0(){},
$S:0}
A.eqU.prototype={
$0(){},
$S:0}
A.eqW.prototype={
$1(d){var w,v=this.a,u=v.d
u===$&&C.c()
u.dx=d
for(u=u.at,u=new C.dq(u,u.r,u.e);u.C();){w=u.d.b
w.y=d
if(d)w.f=!1}this.b.$1(new A.eqS())
v.m(v.gc7C())},
$S:8}
A.eqS.prototype={
$0(){},
$S:0}
A.eqX.prototype={
$0(){return A.h62(this.a)},
$S:0}
A.eqY.prototype={
$0(){var w=0,v=C.j(x.H),u=this,t,s,r
var $async$$0=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:C.a4(u.b,!1).O(null)
t=u.a
s=t.d
s===$&&C.c()
r=s.c
r===$&&C.c()
w=2
return C.b(A.htB(u.c,s.cXn(),t.d.cXo(),r),$async$$0)
case 2:return C.h(null,v)}})
return C.i($async$$0,v)},
$S:1}
A.eqZ.prototype={
$0(){C.a4(this.b,!1).O(null)
this.a.axp(!0)},
$S:0}
A.er_.prototype={
$0(){C.a4(this.b,!1).O(null)
this.a.aZC()},
$S:0}
A.fnD.prototype={
$1(d){var w=this.a,v=d.a
return w>v[0]&&w<v[1]},
$S:706}
A.fnE.prototype={
$1(d){var w=this.a,v=d.a
return w>v[2]&&w<v[3]},
$S:706}
A.fv4.prototype={
$1(d){return 5000+this.a.a*100+d},
$S:74}
A.fv5.prototype={
$1(d){return 3000+this.a.a},
$S:74}
A.fv6.prototype={
$1(d){return 2000+this.a.a},
$S:74}
A.fv9.prototype={
$5$col$round(d,e,f,g,h){var w=this.a
w.f=3
w.b=d
w.d=0.5
w.e=0.9
if(h)w.dM(e.aF(0,B.e8),e.aa(0,B.e8),f.a/2,g,14)
else w.aP(e,f,g)
w.e=0
w.d=1
w.f=2},
$3(d,e,f){return this.$5$col$round(d,e,f,D.b1,!1)},
$4$round(d,e,f,g){return this.$5$col$round(d,e,f,D.b1,g)},
$4$col(d,e,f,g){return this.$5$col$round(d,e,f,g,!1)},
$S:z+113}
A.fv7.prototype={
$3(d,e,f){return I.RO(d,e,0,f+this.a.a*5)},
$S:24}
A.fv8.prototype={
$0(){var w,v=this.a
if(v.c)w="A place in the ceiling for a "+(v.e==="fan"?"fan (needs a fan-rated box)":"light")+"."
else w="A place on the wall at "+(v.e==="switch"?"switch height, about 48 inches from the floor":"outlet height, about 16 inches from the floor")+"."
return new A.cW(v.b,w,A.ahT(v,B.aab),26)},
$S:z+114}
A.fLS.prototype={
$1(d){return d.e==="fan"},
$S:z+42}
A.fLT.prototype={
$1(d){return d.b==="light"},
$S:z+8}
A.fLU.prototype={
$1(d){return A.ahT(this.a,d)},
$S:z+5}
A.cui.prototype={
$1(d){return d.a===this.a&&!d.c},
$S:z+15}
A.cue.prototype={
$1(d){return d.a===B.a0b},
$S:z+15}
A.cug.prototype={
$1(d){return d.c},
$S:z+15}
A.cuh.prototype={
$1(d){return d.c},
$S:z+15}
A.cuf.prototype={
$1(d){return B.wy.h(0,d.a).e===this.a&&!d.c},
$S:z+15}
A.et6.prototype={
$0(){var w=this.a
w.z=this.b
w.Q=this.c},
$S:0}
A.et7.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new A.et5(w))},
$S:0}
A.et5.prototype={
$0(){return this.a.z=null},
$S:0}
A.esW.prototype={
$0(){return this.a.y=0},
$S:0}
A.et0.prototype={
$0(){return this.a.as=!0},
$S:0}
A.et1.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new A.et_(w))},
$S:12}
A.et_.prototype={
$0(){return this.a.as=!1},
$S:0}
A.et2.prototype={
$0(){var w=this.a,v=w.d
v===$&&C.c()
w.r=A.agt(v.d)
w.y=this.b},
$S:0}
A.et3.prototype={
$1(d){return this.a.cgl()},
$S:9}
A.et4.prototype={
$1(d){return this.a.c7G()},
$S:9}
A.esZ.prototype={
$1(d){var w=null
return C.em(C.a([C.bI(B.fDL,new A.esY(this.a,d),w)],x.p),w,w,E.nf,B.fCT,w,w,w,w,B.fJb,w)},
$S:18}
A.esY.prototype={
$0(){C.a4(this.b,!1).O(null)
this.a.awO()},
$S:0}
A.esV.prototype={
$1(d){var w=null,v=this.a,u=v.d
u===$&&C.c()
u=C.d("Every problem on the customer's list is fixed.\n\nMistakes: "+u.f+"\nShocks: "+u.r+"\nLives left: "+u.e+"\n\nThe next call will have different problems.",w,w,w,w,w,w,B.a9e,w,w,w)
return C.em(C.a([C.bN(!1,B.aU2,w,w,!0,w,w,new A.esT(d),w,w),C.bI(B.fF0,new A.esU(v,d),w)],x.p),w,w,E.nf,u,w,w,w,w,B.fLC,w)},
$S:18}
A.esT.prototype={
$0(){C.a4(this.a,!1).O(null)
return null},
$S:0}
A.esU.prototype={
$0(){C.a4(this.b,!1).O(null)
this.a.awO()},
$S:0}
A.esX.prototype={
$0(){var w,v,u=this.a
u.e=D.o.F(Date.now(),1e5)
w=u.gCS(0)
v=u.d
v===$&&C.c()
w=A.hh1(v.b,w)
u.d=w
u.r=A.agt(w.d)
u.at=!1
u.z=null
u.y=0},
$S:0}
A.etj.prototype={
$0(){return this.a.cB2(this.b)},
$S:0}
A.etf.prototype={
$1(d){return d<=5},
$S:33}
A.ete.prototype={
$1(d){var w=this.a,v=w.d
v===$&&C.c()
return A.hpy(v.d,w.w.gil()/1000)},
$S:z+10}
A.etg.prototype={
$1(d){return!d.c},
$S:z+15}
A.eth.prototype={
$1(d){return B.wy.h(0,d.a).a},
$S:z+116}
A.eti.prototype={
$0(){var w=this.a
return w.m(new A.etd(w,this.b))},
$S:0}
A.etd.prototype={
$0(){return this.a.x=this.b},
$S:0}
A.etc.prototype={
$1(d){return new C.dY(new A.etb(this.a),null)},
$S:20}
A.etb.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=this.a,j=k.d
j===$&&C.c()
w=x.p
j=C.a([B.fBh,D.av,C.d("Mistakes "+j.f+" \xb7 Shocks "+j.r+" \xb7 Lives "+j.e,l,l,l,l,l,l,B.JQ,l,l,l),D.W],w)
v=k.d.c
v===$&&C.c()
u=v.length
t=0
for(;t<v.length;v.length===u||(0,C.M)(v),++t){s=v[t]
r=D.c.j(0.05)
q=new C.aQ(14,14)
p=new C.ay(s.c?D.bj.j(0.6):D.bz,1,D.r,-1)
o=s.c?"\u2705":"\ud83d\udd27"
n=B.wy.h(0,s.a).a
m=s.c?D.aB:D.c
j.push(C.p(l,new C.y(o+" "+n,l,new C.F(!0,m,l,l,l,l,13.5,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l),l,l,l,l,l,l,l,l,l),D.f,l,l,new C.o(r,l,new C.bK(p,p,p,p),new C.bk(q,q,q,q),l,l,D.n),l,l,l,D.cu,D.bf,l,l,l))}j.push(D.am)
j.push(B.fGy)
j.push(D.O)
j.push(C.B(C.a([B.bDl,C.Y2(l,l,l,l,!1,D.y,l,l,l,l,l,l,new A.et9(k,e),l,l,l,l,l,l,l,l,k.d.b)],w),D.m,l,D.e,D.j,0,l,l))
j.push(C.bI(B.fJE,new A.eta(k,d),l))
return C.bn(!0,C.ct(j,l,D.bR,l,l,D.ah,!0),!0,!1,D.af,!0,!0)},
$S:87}
A.et9.prototype={
$1(d){var w=this.a.d
w===$&&C.c()
w.b=d
this.b.$1(new A.et8())},
$S:8}
A.et8.prototype={
$0(){},
$S:0}
A.eta.prototype={
$0(){C.a4(this.b,!1).O(null)
this.a.awO()},
$S:0}
A.fgq.prototype={
$1(d){return d.d===this.a},
$S:z+16}
A.bU0.prototype={
$1(d){var w,v,u,t,s=this.a,r=s.p1
if(r!=="back"){s=r==="left"?-1.5707963267948966:1.5707963267948966
return new C.z(new C.z(0,d),s)}r=s.k1
w=A.h6c(s,A.aP7(r==null?"tv100":r),0)
s=w.c
r=w.a/2
v=s-r-18
u=this.b
t=-u/2+14
if(v<t)v=s+r+18
v=D.k.E(v,t,u/2-14)
return new C.z(new C.z(v,d),Math.atan2(s-v,-d))},
$S:1814}
A.bU1.prototype={
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
$S:1815}
A.d5x.prototype={
$0(){return A.h62(this.a)},
$S:0}
A.d5y.prototype={
$1(d){var w=this.a
return w.m(new A.d5w(w,this.b))},
$S:8}
A.d5w.prototype={
$0(){var w=this.a
w.d=this.b
w.f.a8(0)
w.r=null},
$S:0}
A.d5z.prototype={
$1(d){var w=this.a
return w.m(new A.d5v(w))},
$S:8}
A.d5v.prototype={
$0(){var w=this.a
w.e=!1
w.r=null},
$S:0}
A.d5A.prototype={
$1(d){var w=this.a
return w.m(new A.d5u(w))},
$S:8}
A.d5u.prototype={
$0(){var w=this.a
w.e=!0
w.r=null},
$S:0}
A.d5B.prototype={
$1(d){var w=this.a
return w.m(new A.d5t(w,this.b,d))},
$S:34}
A.d5t.prototype={
$0(){var w=this.a,v=this.c
v.toString
w.f.n(0,this.b,v)
w.r=null},
$S:0}
A.d5C.prototype={
$1(d){var w,v,u=null,t=this.a,s=B.zl[t.d],r=this.b,q=s.e.h(0,r)
q.toString
w=x.N
q=C.G([r,q],w,w)
t=t.f.h(0,r)
t.toString
v=A.hpd(s.b,q,C.G([r,t],w,w))
t=v.a
s=t===B.v3
if(s)r="Right: this follows the diagram."
else{r=v.b
r=D.d.gI(r).c+" "+D.d.gI(r).e}if(s)t=D.bj
else t=t===B.Tw?D.bG:D.cs
return C.d(r,u,u,u,u,u,u,C.l(u,u,t,u,u,u,u,u,u,u,u,12.5,u,u,u,u,1.3,!0,u,u,u,u,u,u,u,u),u,u,u)},
$S:407}
A.d5D.prototype={
$0(){var w=this.a
return w.m(new A.d5s(w))},
$S:0}
A.d5s.prototype={
$0(){var w=this.a,v=B.zl[w.d]
return w.r=A.hpd(v.b,v.e,w.f)},
$S:0}
A.fwM.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k=this
for(w=k.a*1.8,v=k.b,u=k.c,t=k.d,s=0.3*t,t=0.05*t,r=0;r<d;++r){q=w+r*0.173
p=D.k.F(q,1)
o=Math.sin((r*3.1+D.k.bj(q))*12.9898)*43758.5453
n=(o-Math.floor(o))*3.141592653589793*2
o=Math.sin((r+5)*12.9898)*43758.5453
m=e*(0.6+(o-Math.floor(o))*0.8)
q=u.$1(new A.r(Math.cos(n)*p*m,Math.sin(n)*p*m-p*p*6,3+p*3))
l=C.ar(E.YK,F.Mo,p)
l.toString
v.fT(q,s*(1-p*0.6)+t,l,3,5,0)}},
$S:1816}
A.fwL.prototype={
$3(d,e,f){var w,v,u,t,s,r,q,p,o,n=this,m=n.a
m.d=0.34
for(w=n.b,v=w*0.45,u=n.c,t=n.d,s=1-e,r=0;r<d;++r){q=D.k.F(v+r/d,1)
p=u.$1(new A.r(Math.sin(r*1.7+w)*1.4+q*1.5,q*f-1,3.5+q*4))
o=C.ar(E.B7,B.boc,s)
o.toString
o=C.ar(o,B.bb_,q)
o.toString
m.fT(p,(1.1+q*3.4)*t,o,3,6,0)}m.d=1},
$S:1817}
A.fwg.prototype={
$5(d,e,f,g,h){return this.a.push(new A.wj(d,e,f,g,h))},
$S:z+117}
A.fwl.prototype={
$2(d,e){var w=this.a
return new C.Z(w,new A.fwm(d,e),C.T(w).k("Z<1>")).gL(0)},
$S:z+118}
A.fwm.prototype={
$1(d){return d.a.c===this.a&&d.b.c===this.b},
$S:z+14}
A.fwh.prototype={
$1(d){return d.b.c===B.aRr},
$S:z+14}
A.fwi.prototype={
$1(d){return d.a.c===B.aWV},
$S:z+14}
A.fwj.prototype={
$1(d){return!1},
$S:z+14}
A.fwk.prototype={
$1(d){return!1},
$S:z+14}
A.ffY.prototype={
$1(d){return D.d.b5(this.a,new A.ffZ(d))},
$S:3}
A.ffZ.prototype={
$1(d){return d.a===this.a},
$S:z+33}
A.cxg.prototype={
$1(d){return A.hOH(d)},
$S:z+14}
A.cxh.prototype={
$2(d,e){return d+e},
$S:69}
A.cxi.prototype={
$1(d){return d.b.a===B.v3},
$S:z+32}
A.fwn.prototype={
$2(d,e){var w=this.a.h(0,d)
if(w==null)this.b.push(new A.wj("LEAD_MISSING",B.Tw,"The "+d+" lead is not connected.","Every lead on the diagram needs its connection.","Connect the "+d+" lead to "+e+"."))
else if(w!==e)this.b.push(new A.wj("LEAD_WRONG",B.aP0,"The "+d+" lead is connected to "+w+", but the diagram says "+e+".","Connections follow the approved wiring diagram.","Move the "+d+" lead to "+e+"."))},
$S:120}
A.fTR.prototype={
$1(d){var w,v,u,t,s,r=null,q=C.aI(d,r,x.w).w,p=x.p,o=C.a([B.fsm,D.am,B.fLG,D.W],p)
for(w=0;w<5;++w){v=B.d9Y[w]
u=D.c.j(0.05)
t=new C.aQ(12,12)
s=new C.ay(D.bz,1,D.r,-1)
o.push(C.p(r,C.x(C.a([new C.y(v.a+": "+v.b,r,D.aSK,r,r,r,r,r,r,r,r,r),D.cL,new C.y("Goes to: "+v.c+"\nCircuit: "+v.d,r,E.E2,r,r,r,r,r,r,r,r,r),D.cL,new C.y(v.e,r,D.aTs,r,r,r,r,r,r,r,r,r),D.cL,new C.y("Exception: "+v.f,r,B.fkN,r,r,r,r,r,r,r,r,r)],p),D.E,r,D.e,D.j,0,D.p),D.f,r,r,new C.o(u,r,new C.bK(s,s,s,s),new C.bk(t,t,t,t),r,r,D.n),r,r,r,D.cu,D.y6,r,r,r))}o.push(D.am)
o.push(B.ftF)
return C.bn(!0,new C.cT(new C.aZ(0,1/0,0,q.a.b*0.85),C.ct(o,r,D.bR,r,r,D.ah,!0),r),!0,!1,D.af,!0,!0)},
$S:26}
A.fTP.prototype={
$1(d){return new A.a11(this.a,this.b,null)},
$S:z+121}
A.f64.prototype={
$1(d){var w=this.a,v=w.a.c,u=this.b
d.toString
v.c.n(0,u,d)
w.m(new A.f63(w,u,d))},
$S:190}
A.f63.prototype={
$0(){var w=this.c
this.a.d.n(0,this.b,w)
return w},
$S:0}
A.f65.prototype={
$0(){var w=this.a
w.m(new A.f62(w,w.a.c.bqf(0)))},
$S:0}
A.f62.prototype={
$0(){return this.a.e=this.b},
$S:0}
A.f66.prototype={
$1(d){return d.b.a!==B.v3},
$S:z+32}
A.f67.prototype={
$0(){var w=this.a,v=w.c
v.toString
w=w.e
C.a4(v,!1).O(w)
return null},
$S:0}
A.bRB.prototype={
$1(d){return this.a.a.$0()},
$S:11}
A.bRA.prototype={
$1(d){var w=this.a
if(!w.c)return
w.a.$0()
if(w.c)w.aZX()},
$S:9};(function aliases(){var w=A.aNg.prototype
w.bxP=w.q})();(function installTearOffs(){var w=a._instance_0u,v=a._instance_1u,u=a.installStaticTearOff,t=a.installInstanceTearOff,s=a._instance_2u,r=a._instance_0i
var q
w(q=A.ae1.prototype,"gbVz","bVA",0)
v(q,"gLH","a52",81)
u(A,"icB",3,null,["$3"],["hZq"],27,0)
w(q=A.aos.prototype,"gc5U","c5V",0)
w(q,"gbq9","bqa",0)
t(q,"gcyn",0,0,null,["$1$done","$0"],["aBi","cyo"],122,0,0)
w(q,"gcAq","cAr",0)
w(q,"gbO2","bO3",0)
v(A.aTj.prototype,"gcQT","cQU",17)
s(q=A.aEe.prototype,"gbN5","bN6",35)
w(q,"giU","iC",0)
t(q,"gc79",0,1,null,["$2$keepTour","$1"],["axl","Ax"],55,0,0)
v(q,"gc7d","c7e",11)
w(q,"gbP_","bP0",0)
w(q,"gbP1","bP2",0)
w(q,"gbPl","bPm",0)
w(q,"gc27","c28",0)
w(q,"gbFv","bFw",0)
w(q,"gcCU","cCV",0)
w(q,"gcqY","cqZ",0)
w(q,"gbNJ","bNK",0)
w(q,"gaQi","asm",0)
w(q,"gc77","c78",0)
w(q,"gcty","ctz",0)
w(q,"gcCO","cCP",20)
w(q,"gcyp","S3",0)
w(q,"gb6U","a2w",0)
w(q,"gb78","a2A",0)
w(q,"gcEU","cEV",0)
w(q,"gbSB","bSC",0)
w(q,"gcym","B0",0)
w(q,"gc7c","Ek",20)
w(q,"gcg7","a0f",20)
w(q,"gcfx","a06",20)
w(q,"gaN6","bAQ",20)
w(q,"gc7h","c7i",0)
w(q,"gcoa","cob",0)
r(q,"gc7f","c7g",0)
u(A,"hsC",3,null,["$3"],["idJ"],27,0)
u(A,"h5F",3,null,["$3"],["hsQ"],27,0)
w(q=A.aA3.prototype,"gc7m","qA",0)
w(q,"gJ2","of",0)
v(q,"gJ3","J4",11)
w(q,"gcl9","cla",0)
w(q,"gcAt","cAu",0)
w(q=A.aFY.prototype,"gJ2","of",0)
v(q,"gJ3","J4",11)
w(q,"gc7n","c7o",0)
w(q=A.aAn.prototype,"gJ2","of",0)
v(q,"gJ3","J4",11)
r(q,"gc7k","c7l",0)
w(q=A.aBg.prototype,"gJ2","of",0)
v(q,"gJ3","J4",11)
w(q=A.aEF.prototype,"gc7r","aZB",0)
v(q,"gc7s","c7t",11)
w(q,"gcvO","cvP",0)
v(A.Xz.prototype,"gapW","bpi",109)
w(q=A.aEM.prototype,"gc7C","c7D",0)
s(q,"gc7w","c7x",35)
w(q,"gbRk","aTK",0)
w(q,"gc25","c26",0)
w(q,"gbDn","bDo",0)
w(q,"gbDl","bDm",0)
w(q,"gc7y","aee",0)
v(q,"gc7A","c7B",11)
w(q=A.aEQ.prototype,"gc7H","aZE",0)
v(q,"gc7I","c7J",11)})();(function inheritance(){var w=a.mixin,v=a.mixinHard,u=a.inheritMany,t=a.inherit
u(C.lZ,[A.eVu,A.rf,A.JB,A.FE,A.FL])
u(C.ag,[A.a9y,A.av6,A.aor,A.apr,A.IQ,A.aIq,A.Nz,A.aw1,A.DS,A.a9r,A.a4S,A.aBf,A.afw,A.W7,A.Ob,A.arA,A.apN,A.a11])
u(C.ah,[A.aN7,A.aNg,A.aos,A.bjW,A.aEe,A.bsX,A.bjX,A.bsL,A.aA3,A.aFY,A.aAn,A.aBg,A.bwo,A.aEF,A.aEM,A.aEQ,A.bdF,A.bu1])
t(A.ae1,A.aN7)
t(A.box,O.au1)
u(C.aD,[A.r,A.lR,A.cW,A.hf,A.tM,A.fM,A.fk,A.bTM,A.cBz,A.Au,A.bbq,A.bbL,A.bgQ,A.dnc,A.Mv,A.dsK,A.dho,A.lC,A.r6,A.Hj,A.aSp,A.bGT,A.hn,A.FP,A.z8,A.xf,A.aTy,A.a49,A.ak6,A.bLf,A.bJl,A.dhR,A.rK,A.Sp,A.aSU,A.bwl,A.bJn,A.Af,A.cz_,A.pw,A.bJ9,A.Fj,A.OT,A.I1,A.LV,A.aTj,A.fJ,A.Cv,A.jz,A.SW,A.b8E,A.mb,A.fn,A.E_,A.pN,A.abv,A.oi,A.aVG,A.a55,A.aVM,A.eXS,A.Mg,A.Qa,A.bU2,A.pt,A.jL,A.MX,A.cm0,A.F8,A.nq,A.X5,A.clR,A.z3,A.ot,A.XL,A.avA,A.aU7,A.eB,A.Xz,A.iV,A.rI,A.uu,A.Mo,A.cud,A.xY,A.rG,A.a9N,A.i8,A.cqM,A.Aw,A.brj,A.aVO,A.b97,A.akb,A.cxd,A.cAO,A.a44,A.bLp,A.wj,A.th,A.b5J,A.aaV,A.aaW,A.v9,A.b4r,A.b7B,A.cxf,A.PD,A.a50])
u(C.hL,[A.bZO,A.bZP,A.bZN,A.bZQ,A.bZR,A.fU8,A.fU6,A.fU7,A.fU5,A.fTV,A.bIA,A.bIB,A.bIC,A.bID,A.bIF,A.bIE,A.bIz,A.bIy,A.crN,A.crO,A.crG,A.crH,A.crI,A.crJ,A.crM,A.eYY,A.eYX,A.eYU,A.eYV,A.eYW,A.eYS,A.bSz,A.bSv,A.bSD,A.bSy,A.bSG,A.bSE,A.bSI,A.bGV,A.bGU,A.fL6,A.ftO,A.ftP,A.ftH,A.ftI,A.ftJ,A.ftK,A.ftL,A.ftM,A.ftN,A.fg8,A.fjw,A.fst,A.ftz,A.ftA,A.ftB,A.c2O,A.c2M,A.c2E,A.c2x,A.c2v,A.c2p,A.c2w,A.c2f,A.c2g,A.c2h,A.fw4,A.bLh,A.bLk,A.fzn,A.fdm,A.bJo,A.fU3,A.fU4,A.fU1,A.fvD,A.cz1,A.cz2,A.bJa,A.bJh,A.bJi,A.bJj,A.bJk,A.bJb,A.bJc,A.bJd,A.bJf,A.bJg,A.bJZ,A.bJW,A.bJX,A.bJY,A.bK2,A.bK1,A.bK_,A.bK3,A.dQa,A.dQ5,A.dQp,A.dQ8,A.dQs,A.fwe,A.fUE,A.fvq,A.fvr,A.fvo,A.fvp,A.fLX,A.fLY,A.fwr,A.fws,A.fwp,A.fwq,A.ftF,A.ftG,A.fUD,A.fgp,A.ftr,A.fUA,A.fUx,A.bTd,A.bTc,A.bTO,A.bTP,A.bTQ,A.bTR,A.bTS,A.bTW,A.bTT,A.bTU,A.bU_,A.bTZ,A.bTY,A.bTX,A.eaR,A.eaO,A.eaP,A.eaQ,A.e7D,A.ea1,A.ea2,A.e9Z,A.e6c,A.eau,A.eav,A.e9H,A.e8I,A.e8E,A.e7w,A.e8o,A.e7G,A.e8d,A.eaI,A.e7f,A.e8b,A.e8c,A.e7R,A.e8q,A.e6K,A.e6J,A.e7b,A.e9w,A.e9v,A.e9g,A.e9d,A.eas,A.ear,A.eaj,A.eae,A.ead,A.e9R,A.eaG,A.eaw,A.e8s,A.e8t,A.e8u,A.e8e,A.e8f,A.e9y,A.e9M,A.e8l,A.e8k,A.e8m,A.e9N,A.e8K,A.e8L,A.e8T,A.e8U,A.e8V,A.e8w,A.e8x,A.eaH,A.e8z,A.e8y,A.e6b,A.e65,A.e66,A.e67,A.eaL,A.e6v,A.e6j,A.e6k,A.e6x,A.e6d,A.e9m,A.dt9,A.f2i,A.f2j,A.f2k,A.f2h,A.fu_,A.fu6,A.fu1,A.ftZ,A.ftS,A.fu3,A.fu5,A.fu4,A.fu2,A.ftT,A.ftR,A.ftW,A.ftX,A.fLh,A.fLf,A.fLe,A.fLg,A.fu9,A.ful,A.fua,A.fub,A.fud,A.fug,A.fuh,A.fui,A.fuj,A.fue,A.fnA,A.fnv,A.fnw,A.fnx,A.fmX,A.fmZ,A.fn9,A.fnk,A.fny,A.fnp,A.fnq,A.fnr,A.fns,A.fnt,A.fnu,A.fn_,A.fn0,A.fn1,A.fn2,A.fn3,A.fn4,A.fn5,A.fn6,A.fn7,A.fn8,A.fna,A.fnb,A.fnc,A.fnd,A.fne,A.fnf,A.fng,A.fnh,A.fni,A.fnj,A.fnl,A.fnm,A.fnn,A.fno,A.fxj,A.fxk,A.fxl,A.fdS,A.fdI,A.fo8,A.fnV,A.fnW,A.fnX,A.fnY,A.fo0,A.fo1,A.fo2,A.fo3,A.fo4,A.fo5,A.fo6,A.fo7,A.fnZ,A.fo_,A.fhG,A.fus,A.fuo,A.fur,A.fuq,A.dQt,A.f26,A.fMq,A.fMp,A.d8H,A.d8K,A.d8N,A.d8P,A.d97,A.d9n,A.d94,A.d9o,A.eSn,A.eSv,A.eSw,A.dbU,A.dc3,A.dc4,A.dc6,A.diY,A.dj8,A.dj7,A.dja,A.fdn,A.fds,A.fdt,A.fdr,A.fv3,A.fv2,A.fv1,A.fu8,A.fwJ,A.clV,A.clW,A.clS,A.clX,A.clY,A.clZ,A.cm_,A.clT,A.clU,A.fv0,A.fuZ,A.fuT,A.fuW,A.fuU,A.fuV,A.fv_,A.fuX,A.fuY,A.fuS,A.fLy,A.emI,A.emn,A.ems,A.emJ,A.emt,A.emu,A.emv,A.emG,A.emK,A.emM,A.emL,A.emA,A.emy,A.fTU,A.cqS,A.cqZ,A.cr_,A.cr0,A.cr1,A.cr3,A.cr2,A.cqR,A.cqP,A.cqQ,A.cqX,A.cqY,A.cqT,A.cqU,A.cqV,A.cqW,A.eqn,A.eqo,A.eqp,A.er2,A.er4,A.er6,A.eqx,A.equ,A.eqP,A.eqQ,A.eqC,A.eqD,A.eqE,A.eqH,A.eqI,A.eqJ,A.eqK,A.eqL,A.eqM,A.eqN,A.eqO,A.eqF,A.eqG,A.erD,A.erJ,A.eru,A.er1,A.eqV,A.eqW,A.fnD,A.fnE,A.fv4,A.fv5,A.fv6,A.fv9,A.fv7,A.fLS,A.fLT,A.fLU,A.cui,A.cue,A.cug,A.cuh,A.cuf,A.et3,A.et4,A.esZ,A.esV,A.etf,A.ete,A.etg,A.eth,A.etc,A.et9,A.fgq,A.bU0,A.bU1,A.d5y,A.d5z,A.d5A,A.d5B,A.d5C,A.fwL,A.fwg,A.fwm,A.fwh,A.fwi,A.fwj,A.fwk,A.ffY,A.ffZ,A.cxg,A.cxi,A.fTR,A.fTP,A.f64,A.f66,A.bRB,A.bRA])
u(C.kd,[A.bZM,A.crF,A.crK,A.crL,A.bSw,A.bSB,A.bSA,A.fsp,A.ftQ,A.fsu,A.c2u,A.bLj,A.bLg,A.bLl,A.bLi,A.bJm,A.c0p,A.fU2,A.fvE,A.cz0,A.bJe,A.bK0,A.fxx,A.fxy,A.fxz,A.fxA,A.fxB,A.fwo,A.ff5,A.fxC,A.fxD,A.fxE,A.fxF,A.fxG,A.fxH,A.fxI,A.fxJ,A.fxK,A.fxL,A.fUy,A.fUz,A.bTV,A.e9_,A.e7Y,A.eat,A.e9G,A.e8H,A.e7I,A.e9u,A.eaq,A.eac,A.e8S,A.fu7,A.fu0,A.ftY,A.ftU,A.ftV,A.fun,A.fuc,A.fuf,A.fum,A.fnz,A.fmY,A.fup,A.d8L,A.eSs,A.dbT,A.fwK,A.cr4,A.er0,A.etb,A.fwM,A.fwl,A.cxh,A.fwn])
u(C.oV,[A.xa,A.aSV])
u(C.mV,[A.b5M,A.beP,A.bis])
t(A.br6,A.aNg)
u(C.jc,[A.eYT,A.bSH,A.bSC,A.bSx,A.bSF,A.fsv,A.fss,A.c2L,A.c2z,A.c2F,A.c2N,A.c2C,A.c2B,A.c29,A.c2A,A.c2D,A.c2y,A.c2s,A.c2r,A.c2t,A.c2q,A.c2e,A.c2d,A.c2i,A.c2j,A.c2k,A.c2l,A.c2m,A.c2c,A.c2n,A.c2a,A.c2b,A.c2o,A.c2I,A.c2J,A.c2H,A.c2K,A.c2G,A.fw5,A.dQ9,A.dQm,A.dQg,A.dQh,A.dQf,A.dQ6,A.dQq,A.dQo,A.dQn,A.dQ4,A.dQb,A.dQc,A.dQd,A.dQe,A.dQ7,A.dQj,A.dQk,A.dQl,A.dQi,A.dQr,A.fts,A.eaN,A.e9B,A.e9C,A.e9A,A.e9D,A.e89,A.ea3,A.e96,A.e97,A.e98,A.e99,A.e9a,A.e7B,A.e7A,A.e7C,A.e7y,A.e7z,A.e7x,A.e7M,A.e7N,A.e7O,A.e91,A.e90,A.e92,A.e8Z,A.e93,A.e8Y,A.e94,A.e8X,A.e95,A.e8W,A.e7d,A.e7e,A.e8_,A.e7Z,A.e80,A.e7X,A.e81,A.e7W,A.e82,A.e7V,A.e83,A.e7U,A.e84,A.e7T,A.e85,A.e7S,A.ea_,A.ea0,A.e8n,A.e6D,A.e8i,A.e8h,A.e8j,A.e8g,A.e9I,A.e9F,A.e9E,A.e8G,A.e8F,A.e8C,A.e8B,A.e8D,A.e8A,A.e86,A.e87,A.e9x,A.e7K,A.e7J,A.e7L,A.e9J,A.e9U,A.e7H,A.e7F,A.e7E,A.e9T,A.e8a,A.e7Q,A.e8r,A.e6L,A.e6I,A.e6M,A.e6H,A.e6N,A.e6G,A.e6O,A.e6F,A.e6P,A.e6E,A.e7c,A.e9q,A.e9p,A.e9r,A.e9s,A.e9t,A.e9e,A.e9c,A.e9f,A.e9b,A.eai,A.eah,A.eak,A.eal,A.eam,A.ean,A.eao,A.eap,A.ea8,A.ea6,A.ea7,A.ea9,A.ea5,A.eaa,A.eab,A.e9Q,A.e9S,A.eaf,A.ea4,A.e9X,A.e9Y,A.e9P,A.e9W,A.eaD,A.eaE,A.eaF,A.eax,A.eay,A.eaz,A.eaA,A.eaB,A.eaC,A.e7P,A.e8v,A.e9K,A.e88,A.e9z,A.e9L,A.e9O,A.e9V,A.e8N,A.e8O,A.e8M,A.e8P,A.e8Q,A.e8J,A.e8R,A.e6a,A.e68,A.e8p,A.eag,A.e9n,A.e9o,A.e69,A.e7l,A.e7m,A.e7n,A.e7o,A.e7p,A.e7q,A.e7k,A.e7r,A.e7j,A.e7s,A.e7i,A.e7t,A.e7h,A.e7u,A.e7g,A.e7v,A.eaK,A.eaM,A.eaJ,A.e6Y,A.e6Z,A.e7_,A.e73,A.e74,A.e75,A.e6X,A.e76,A.e6W,A.e77,A.e6V,A.e78,A.e79,A.e6U,A.e7a,A.e6T,A.e70,A.e6S,A.e71,A.e6R,A.e72,A.e6Q,A.e6i,A.e6w,A.e6n,A.e6y,A.e6h,A.e6z,A.e6A,A.e6g,A.e6B,A.e6C,A.e6l,A.e6f,A.e6m,A.e6e,A.e6o,A.e6p,A.e6q,A.e6r,A.e6s,A.e6t,A.e6u,A.e9j,A.e9k,A.e9i,A.e9l,A.e9h,A.f2g,A.f2f,A.cfd,A.fuk,A.fvn,A.dQu,A.dQv,A.dQw,A.dQA,A.dQB,A.dQC,A.dQD,A.dQE,A.dQF,A.dQG,A.dQH,A.dQx,A.dQy,A.dQz,A.f25,A.cvq,A.cvr,A.bW8,A.d8X,A.d8V,A.d8W,A.d8U,A.d8I,A.d8J,A.d8M,A.d8O,A.d8Q,A.d8R,A.d8S,A.d8T,A.d8Y,A.d8Z,A.d9g,A.d98,A.d99,A.d9h,A.d9i,A.d96,A.d9j,A.d95,A.d9k,A.d9l,A.d9m,A.d9a,A.d93,A.d9b,A.d9c,A.d92,A.d9d,A.d91,A.d9e,A.d90,A.d9f,A.d9_,A.eSq,A.eSr,A.eSp,A.eSj,A.eSk,A.eSl,A.eSm,A.eSo,A.eSz,A.eSx,A.eSu,A.eSy,A.eSt,A.dbZ,A.dc_,A.dbY,A.dbR,A.dbV,A.dbW,A.dbX,A.dbS,A.dc9,A.dc5,A.dc2,A.dc7,A.dc1,A.dc8,A.dc0,A.dj2,A.dj3,A.dj1,A.diX,A.diZ,A.dj_,A.dj0,A.djb,A.dj6,A.dj9,A.dj5,A.dj4,A.fdq,A.fdo,A.fdp,A.cay,A.fuP,A.fuQ,A.fuR,A.emD,A.emE,A.emC,A.emw,A.eml,A.emm,A.emq,A.emr,A.emB,A.emF,A.emH,A.emp,A.emo,A.emO,A.emN,A.emx,A.emz,A.erh,A.eri,A.erg,A.eqj,A.eqk,A.eqi,A.eql,A.eqm,A.eqh,A.eqy,A.eqA,A.eqq,A.eqr,A.eqR,A.eqz,A.erd,A.ere,A.erf,A.erb,A.erc,A.era,A.er3,A.er5,A.er7,A.er8,A.er9,A.erj,A.eqv,A.eqw,A.eqs,A.eqt,A.eqB,A.erC,A.erE,A.ero,A.err,A.ers,A.erq,A.ert,A.erp,A.erF,A.ern,A.erG,A.erm,A.erH,A.erl,A.erI,A.erK,A.erk,A.erv,A.erw,A.erx,A.ery,A.erz,A.erA,A.erB,A.eqT,A.eqU,A.eqS,A.eqX,A.eqY,A.eqZ,A.er_,A.fv8,A.et6,A.et7,A.et5,A.esW,A.et0,A.et1,A.et_,A.et2,A.esY,A.esT,A.esU,A.esX,A.etj,A.eti,A.etd,A.et8,A.eta,A.d5x,A.d5w,A.d5v,A.d5u,A.d5t,A.d5D,A.d5s,A.f63,A.f65,A.f62,A.f67])
u(C.aw,[A.aYb,A.Uo,A.acw,A.bj2,A.b73,A.aXb,A.a6U])
w(A.aN7,O.au0)
v(A.aNg,C.co)})()
C.jk(b.typeUniverse,JSON.parse('{"a9y":{"ag":[],"v":[]},"ae1":{"ah":["a9y<1>"]},"av6":{"ag":[],"v":[]},"xa":{"aC":[]},"b5M":{"aC":[]},"br6":{"ah":["av6"]},"aor":{"ag":[],"v":[]},"aos":{"ah":["aor"]},"aSV":{"aC":[]},"aYb":{"aw":[],"v":[]},"Uo":{"aw":[],"v":[]},"apr":{"ag":[],"v":[]},"bjW":{"ah":["apr"]},"acw":{"aw":[],"v":[]},"beP":{"aC":[]},"IQ":{"ag":[],"v":[]},"aIq":{"ag":[],"v":[]},"aEe":{"ah":["IQ"]},"bj2":{"aw":[],"v":[]},"bis":{"aC":[]},"bsX":{"ah":["aIq"]},"aw1":{"ag":[],"v":[]},"DS":{"ag":[],"v":[]},"a9r":{"ag":[],"v":[]},"a4S":{"ag":[],"v":[]},"aBf":{"ag":[],"v":[]},"afw":{"ag":[],"v":[]},"Nz":{"ag":[],"v":[]},"bjX":{"ah":["Nz"]},"bsL":{"ah":["aw1"]},"b73":{"aw":[],"v":[]},"aXb":{"aw":[],"v":[]},"aA3":{"ah":["DS"]},"aFY":{"ah":["a9r"]},"aAn":{"ah":["a4S"]},"aBg":{"ah":["aBf"]},"bwo":{"ah":["afw"]},"a6U":{"aw":[],"v":[]},"W7":{"ag":[],"v":[]},"aEF":{"ah":["W7"]},"Ob":{"ag":[],"v":[]},"aEM":{"ah":["Ob"]},"arA":{"ag":[],"v":[]},"aEQ":{"ah":["arA"]},"apN":{"ag":[],"v":[]},"bdF":{"ah":["apN"]},"a11":{"ag":[],"v":[]},"bu1":{"ah":["a11"]}}'))
C.CP(b.typeUniverse,JSON.parse('{"box":1,"aN7":1}'))
var y={T:"A hot wire never goes on the green ground screw.",W:"A shut-off valve goes on the pipe that comes out of the wall.",v:"Both black wires go on brass screws. It does not matter which one.",r:"Brass screws are for the HOT wire (black).",q:"Each switch has its own screw on the other side, and each goes to its own light.",R:"Fasten the bare copper ground to the GREEN screw.",E:"Fasten the black hot to one HOT (X or Y) brass screw.",k:"Fasten the red hot to the other HOT brass screw.",N:"Fasten the white neutral to the silver NEUTRAL (W) screw.",b:"Fold the wires back and push the device into the box.",P:"LOAD is for feeding other outlets further down the line. It is covered with tape. Power comes in on the LINE screws.",x:"Look at the device and the wires. Learn which wire is which before you touch a screw.",M:"Move it with the arrow buttons, turn it, change its colour or take it out.",G:"Neutral goes on a silver screw. The silver screws stay joined, so one wire feeds both halves.",o:"Pick a paint colour above to change this wall.",n:"Put the cover plate on, turn the power on and test.",Q:"Silver screws are for the NEUTRAL wire (white).",f:"Switch the power on and flip the wall switch.",t:"The bare copper ground wire only goes on the GREEN screw.",u:"The black hot wire goes on a brass screw.",C:"The gold screws are BRASS. They are for the HOT wire (black).",Z:"The green screw is for the bare copper ground wire.",l:"The two hot wires (black and red) go on the two brass screws, X and Y, in either order.",p:"The two hot wires go on the two brass screws, in either order.",X:"The two traveler wires go on the two brass traveler screws, in either order.",g:"The two travelers coming from the first three-way go on the two top screws.",_:"The two travelers going to the second three-way go on the two bottom screws.",c:"The white neutral wire goes on a silver screw.",I:"The white neutral wire goes on the silver W screw.",B:"The white-silver screws are NICKEL. They are for the NEUTRAL wire (white).",D:"There is no medicine left. Buy some in the shop.",O:"Turn the breaker OFF and test that the wires are dead.",Y:"You are at the street light. Press Fix the street light."}
var x=(function rtii(){var w=C.av
return{dw:w("m6<u?>"),ff:w("aSp"),l:w("bw<n,n>"),e:w("bw<n,L>"),M:w("dD<n>"),hg:w("a49"),cD:w("aU7"),e7:w("eI<n>"),eP:w("rf"),gN:w("HW"),eB:w("mb"),fa:w("aA<MF?>"),v:w("du<H,n>"),fC:w("I1"),m:w("O<lC>"),gQ:w("O<LV>"),V:w("O<ac>"),O:w("O<u>"),bm:w("O<a44>"),fW:w("O<aTy>"),B:w("O<a49>"),C:w("O<xf>"),dI:w("O<Mg>"),bP:w("O<eI<n>>"),gw:w("O<Mo>"),dh:w("O<HW>"),_:w("O<mb>"),dY:w("O<oi>"),cX:w("O<aVG>"),D:w("O<a55>"),ha:w("O<I1>"),r:w("O<fJ>"),E:w("O<hf>"),Z:w("O<jL>"),gL:w("O<ai<H>>"),ez:w("O<a8<n,aD>>"),c7:w("O<a8<n,@>>"),f4:w("O<a8<n,ce>>"),T:w("O<i8>"),dN:w("O<t>"),F:w("O<ot>"),fI:w("O<nq>"),g:w("O<h9>"),z:w("O<lR>"),gl:w("O<b4r>"),a6:w("O<+(a8Q,H)>"),L:w("O<+(n,n)>"),dt:w("O<+(r,r)>"),d6:w("O<+(L,n)>"),f:w("O<+(L,L)>"),ek:w("O<+(H,n)>"),aJ:w("O<+(n,H,H)>"),dV:w("O<+(L,L,u)>"),al:w("O<+(H,L,R)>"),gp:w("O<+(H,H,ai<t>)>"),dQ:w("O<+(H,H,H)>"),eV:w("O<+(L,L,L,L)>"),az:w("O<+(H,H,L,R,n)>"),fP:w("O<OT>"),e3:w("O<a9N>"),fB:w("O<wj>"),a:w("O<fM>"),gD:w("O<XL>"),y:w("O<rK>"),s:w("O<n>"),fJ:w("O<aaV>"),dH:w("O<aaW>"),W:w("O<v9>"),bz:w("O<Af>"),o:w("O<r>"),p:w("O<v>"),d:w("O<jz>"),gR:w("O<bbq>"),bl:w("O<Au>"),h:w("O<Aw>"),I:w("O<iV>"),x:w("O<hn>"),aQ:w("O<Qa>"),fG:w("O<brj>"),X:w("O<pw>"),u:w("O<R>"),n:w("O<L>"),t:w("O<H>"),dS:w("O<aC?>"),k:w("O<ce>"),eF:w("cA<ah<ag>>"),dg:w("ai<L>"),j:w("ai<@>"),b:w("a8<n,@>"),G:w("a8<@,@>"),w:w("iF"),P:w("cu"),q:w("cW"),aU:w("aD"),dx:w("t"),ej:w("Jl"),fX:w("lR"),cE:w("a9y<H>"),J:w("+(L,L)"),c5:w("dx<H>"),cR:w("Xz"),K:w("fM"),cH:w("avA"),N:w("n"),ec:w("jx<n>"),dZ:w("b7B"),g6:w("bo<L>"),Q:w("r"),ac:w("cs<H>"),cI:w("jR<n>"),am:w("Z<mb>"),fZ:w("Z<F8>"),cc:w("Z<n>"),dD:w("Z<H>"),c1:w("hm"),gh:w("Cv"),bB:w("bbL"),c9:w("bgQ"),R:w("R"),i:w("L"),A:w("@"),S:w("H"),c:w("Mv?"),eT:w("MF?"),U:w("ai<@>?"),dy:w("a8<n,@>?"),fF:w("a8<@,@>?"),cU:w("q4?"),Y:w("ce"),H:w("~")}})();(function constants(){var w=a.makeConstList
B.aYE=new A.eB(!0,"The water is on and nothing leaks. Perfect job!",!1,"")
B.aYF=new A.eB(!0,"Primer and paint rolled on.",!1,"")
B.aYG=new A.eB(!1,"This call is over. Start a new one.",!1,"")
B.aYH=new A.eB(!0,"Recorded.",!1,"")
B.aYI=new A.eB(!1,"That is not a place for a sheet.",!1,"")
B.aYJ=new A.eB(!0,"Sanded smooth. Wear a mask: the dust is bad to breathe.",!1,"")
B.abq=new A.eB(!1,"There is no device here.",!1,"")
B.aYK=new A.eB(!0,"You look closely. Everything looks fine here.",!1,"")
B.aYL=new A.eB(!1,"ZAP! You were shocked badly and it was your last life. Always turn the breaker OFF and test before you touch wires.",!0,"shock")
B.aYM=new A.eB(!0,"Paper tape pressed into the seam.",!1,"")
B.aYN=new A.eB(!0,"Unplugged.",!1,"")
B.aYO=new A.eB(!0,"Breaker OFF. It is safe to work on the wires.",!1,"")
B.aYP=new A.eB(!1,"ZAP! You were shocked badly. That was your last life: the job is over. Lesson: ALWAYS turn the breaker OFF and test the wires before you touch them.",!0,"shock")
B.aYQ=new A.eB(!1,"There is nothing there.",!1,"")
B.aYR=new A.eB(!1,"The outlet is burnt. Nothing works. Pull it out and put in a new one.",!0,"")
B.aYS=new A.eB(!0,"The water is on and nothing leaks yet, but the job is not finished.",!1,"")
B.aYT=new A.eB(!0,"Sheet hung. Now screw it to the studs.",!1,"")
B.aYU=new A.eB(!0,"Hole drilled through the middle of the stud, at the cable height. Holes go in the center so a nail cannot reach the cable.",!1,"")
B.aYV=new A.eB(!0,"Plugged in. Nothing happens because the breaker is off. Turn it on to test.",!1,"")
B.aYW=new A.eB(!0,"You flipped the tripped breaker fully OFF. Fix the problem before you turn it on again.",!1,"")
B.aYX=new A.eB(!0,"Click.",!1,"")
B.aYY=new A.eB(!0,"The wires are folded back and the device is in the box. Now put the cover on.",!1,"")
B.aYZ=new A.eB(!0,"Breaker OFF. The wires on this circuit are dead now. (Always test them to be sure.)",!1,"")
B.aZ_=new A.eB(!1,"Nothing is wet.",!1,"")
B.aZ0=new A.eB(!0,"Power is on.",!1,"")
B.aZ1=new A.eB(!0,"Water OFF at the main valve. You can cut into the pipes safely now.",!1,"")
B.aZ2=new A.eB(!0,"Opening cut around the box with the drywall saw. Keep it tight: the plate has to cover the edge.",!1,"")
B.aZ3=new A.eB(!0,"Device pulled out of the box.",!1,"")
B.aZ4=new A.eB(!0,"Screw set just below the paper, not through it.",!1,"")
B.aZ5=new A.eB(!1,"ZAP! You touched a live wire. In Learn mode you are not hurt, but in real life this can kill. Switch the breaker OFF and test the wires first.",!0,"shock")
B.aZ6=new A.eB(!0,"Cover on. Now you can turn the breaker on and test.",!1,"")
B.W6=new A.eB(!1,"",!1,"")
B.aZ7=new A.eB(!0,"Device taken out. You can put it somewhere else, or put in a new one.",!1,"")
B.aZ8=new A.eB(!0,"Breaker back ON.",!1,"")
B.aZ9=new A.eB(!1,"That is not a stud.",!1,"")
B.aZa=new A.eB(!0,"Off.",!1,"")
B.aZb=new A.eB(!1,"Nothing to flip yet.",!1,"")
B.aZc=new A.eB(!0,"Wire taken off.",!1,"")
B.aZd=new A.eB(!0,"The mud is dry.",!1,"")
B.aZe=new A.eB(!0,"Breaker reset.",!1,"")
B.aZf=new A.eB(!0,"Box mounted. (Careful: this is not a fan-rated box. A fan on it could fall.)",!1,"")
B.fL7=new C.y("Tap a piece of furniture, or add one:",null,D.Aa,null,null,null,null,null,null,null,null,null)
B.ekj=new C.D(D.nl,B.fL7,null)
B.aZm=new C.bM(D.a4,null,null,B.ekj,null)
B.abT=new A.lC(0,0,0,0,1)
B.acu=new C.aZ(0,290,0,1/0)
B.b0w=new C.bk(G.Ti,G.Ti,D.bI,D.bI)
B.bqW=new C.u(1,0.12156862745098039,0.13725490196078433,0.18823529411764706,D.q)
B.br3=new C.u(1,0.054901960784313725,0.06274509803921569,0.09411764705882353,D.q)
B.d49=w([B.bqW,B.br3],x.O)
B.c0h=new C.a9(D.b3,D.b6,D.x,B.d49,null,null)
B.b3v=new C.o(null,null,G.aci,B.b0w,null,B.c0h,D.n)
B.Fk=new C.u(1,0.08627450980392157,0.10588235294117647,0.1411764705882353,D.q)
B.b1T=new C.bK(D.a0,D.a0,Aa.vt,D.a0)
B.b4l=new C.o(B.Fk,null,B.b1T,null,null,null,D.n)
B.b0H=new C.bk(D.mT,D.io,D.io,D.io)
B.b4r=new C.o(D.aJ,null,null,B.b0H,null,null,D.n)
B.fLL=new C.y("\u2600\ufe0f Let it dry",null,F.A8,null,null,null,null,null,null,null,null,null)
B.b8t=new C.ck(D.A,null,null,B.fLL,null)
B.fLv=new C.y("\u23e9 Skip to the wiring",null,F.A8,null,null,null,null,null,null,null,null,null)
B.b8B=new C.ck(D.A,null,null,B.fLv,null)
B.fzX=new C.y("\ud83c\udfd7\ufe0f",null,D.pw,null,null,null,null,null,null,null,null,null)
B.b8R=new C.ck(D.A,null,null,B.fzX,null)
B.fzK=new C.y("\ud83c\udfe0",null,D.aSZ,null,null,null,null,null,null,null,null,null)
B.b9i=new C.ck(D.A,null,null,B.fzK,null)
B.baI=new C.u(1,0.9294117647058824,0.9098039215686274,0.8627450980392157,D.q)
B.Ll=new C.u(1,0.1803921568627451,0.20392156862745098,0.25098039215686274,D.q)
B.baU=new C.u(1,0.9725490196078431,0.9647058823529412,0.9333333333333333,D.q)
B.vy=new C.u(1,0.5450980392156862,0.3686274509803922,0.20392156862745098,D.q)
B.bb_=new C.u(1,0.5568627450980392,0.5568627450980392,0.5882352941176471,D.q)
B.adN=new C.u(1,0.611764705882353,0.5568627450980392,0.4588235294117647,D.q)
B.EN=new C.u(1,0.24705882352941178,0.5607843137254902,0.30980392156862746,D.q)
B.bbf=new C.u(1,0.8392156862745098,0.9333333333333333,0.984313725490196,D.q)
B.oO=new C.u(1,0.9450980392156862,0.9450980392156862,0.9176470588235294,D.q)
B.bbF=new C.u(1,0.9098039215686274,0.9254901960784314,0.9372549019607843,D.q)
B.bbH=new C.u(1,0.4823529411764706,0.5098039215686274,0.5450980392156862,D.q)
B.bbQ=new C.u(1,0.10588235294117647,0.4980392156862745,0.20392156862745098,D.q)
B.ae4=new C.u(1,0.7215686274509804,0.7450980392156863,0.7725490196078432,D.q)
B.nQ=new C.u(1,0.5450980392156862,0.3686274509803922,0.23529411764705882,D.q)
B.ae6=new C.u(1,0.8509803921568627,0.8274509803921568,0.7725490196078432,D.q)
B.aea=new C.u(1,0.6549019607843137,0.6784313725490196,0.7098039215686275,D.q)
B.ho=new C.u(1,0.16862745098039217,0.17647058823529413,0.2,D.q)
B.EP=new C.u(1,0.8980392156862745,0.7529411764705882,0.4823529411764706,D.q)
B.Lv=new C.u(1,0.8156862745098039,0.5098039215686274,0.27450980392156865,D.q)
B.X9=new C.u(1,0.5411764705882353,0.41568627450980394,0.2784313725490196,D.q)
B.aeh=new C.u(1,0.1843137254901961,0.4196078431372549,0.23529411764705882,D.q)
B.Xc=new C.u(1,0.2980392156862745,0.5450980392156862,0.2901960784313726,D.q)
B.xA=new C.u(1,0.788235294117647,0.6274509803921569,0.22745098039215686,D.q)
B.aen=new C.u(1,0.9411764705882353,0.5411764705882353,0.1411764705882353,D.q)
B.EV=new C.u(1,0.9921568627450981,0.9882352941176471,0.9686274509803922,D.q)
B.Xg=new C.u(1,0.5568627450980392,0.5843137254901961,0.6196078431372549,D.q)
B.bdz=new C.u(1,0.47843137254901963,0.35294117647058826,0.22745098039215686,D.q)
B.jF=new C.u(1,0.788235294117647,0.807843137254902,0.8392156862745098,D.q)
B.aex=new C.u(1,0.4196078431372549,0.45098039215686275,0.5019607843137255,D.q)
B.aey=new C.u(1,0.5568627450980392,0.35294117647058826,0.2901960784313726,D.q)
B.AY=new C.u(1,0.9294117647058824,0.9176470588235294,0.8784313725490196,D.q)
B.bep=new C.u(1,0.9137254901960784,0.7254901960784313,0.28627450980392155,D.q)
B.beA=new C.u(1,0.22745098039215686,0.22745098039215686,0.24705882352941178,D.q)
B.beI=new C.u(1,0.5490196078431373,0.5764705882352941,0.6078431372549019,D.q)
B.EZ=new C.u(1,0.22745098039215686,0.24705882352941178,0.2784313725490196,D.q)
B.Xn=new C.u(1,0.8980392156862745,0.8980392156862745,0.8666666666666667,D.q)
B.LF=new C.u(1,0.10588235294117647,0.11372549019607843,0.13333333333333333,D.q)
B.beW=new C.u(1,0.22745098039215686,0.23529411764705882,0.25882352941176473,D.q)
B.Xr=new C.u(1,0.30980392156862746,0.6588235294117647,0.3764705882352941,D.q)
B.aeM=new C.u(1,0.8509803921568627,0.803921568627451,0.7215686274509804,D.q)
B.aeN=new C.u(1,0.4196078431372549,0.2901960784313726,0.16862745098039217,D.q)
B.LH=new C.u(1,0.11764705882352941,0.11764705882352941,0.12549019607843137,D.q)
B.bf8=new C.u(1,0.8862745098039215,0.8745098039215686,0.8235294117647058,D.q)
B.aeQ=new C.u(1,0.9490196078431372,0.7803921568627451,0.611764705882353,D.q)
B.bfc=new C.u(1,0.42745098039215684,0.2901960784313726,1,D.q)
B.bfh=new C.u(1,0.3686274509803922,0.27450980392156865,0.18823529411764706,D.q)
B.bfk=new C.u(1,0.9058823529411765,0.8470588235294118,0.7450980392156863,D.q)
B.bfu=new C.u(1,0.5411764705882353,0.4823529411764706,0.41568627450980394,D.q)
B.bfy=new C.u(1,0.24705882352941178,0.16470588235294117,0.10980392156862745,D.q)
B.bfA=new C.u(1,0.34901960784313724,0.3176470588235294,0.29411764705882354,D.q)
B.bfC=new C.u(1,0.24705882352941178,0.6470588235294118,0.3568627450980392,D.q)
B.bfK=new C.u(1,0.8117647058823529,0.792156862745098,0.7411764705882353,D.q)
B.Xw=new C.u(1,0.8117647058823529,0.8901960784313725,0.9176470588235294,D.q)
B.bfP=new C.u(1,0.7215686274509804,0.7450980392156863,0.7843137254901961,D.q)
B.LJ=new C.u(1,0.3333333333333333,0.396078431372549,0.4823529411764706,D.q)
B.Xx=new C.u(1,0.5529411764705883,0.7843137254901961,1,D.q)
B.XA=new C.u(1,1,0.9019607843137255,0.5019607843137255,D.q)
B.bgg=new C.u(1,0.9490196078431372,0.7607843137254902,0.10588235294117647,D.q)
B.af9=new C.u(1,0.9490196078431372,0.9411764705882353,0.9019607843137255,D.q)
B.bgz=new C.u(1,0.8509803921568627,0.7725490196078432,0.6392156862745098,D.q)
B.bgD=new C.u(1,0.9686274509803922,0.9607843137254902,0.9333333333333333,D.q)
B.afd=new C.u(1,0.6823529411764706,0.6941176470588235,0.7372549019607844,D.q)
B.nY=new C.u(1,0.1843137254901961,0.49019607843137253,0.8823529411764706,D.q)
B.bgO=new C.u(1,0.788235294117647,0.7176470588235294,0.6078431372549019,D.q)
B.XD=new C.u(1,0.8901960784313725,0.6627450980392157,0.10980392156862745,D.q)
B.F8=new C.u(1,0.7137254901960784,0.7372549019607844,0.7686274509803922,D.q)
B.bgT=new C.u(1,0.8431372549019608,0.8509803921568627,0.8784313725490196,D.q)
B.afi=new C.u(1,0.7215686274509804,0.7529411764705882,0.8,D.q)
B.bh3=new C.u(1,0.22745098039215686,0.49019607843137253,0.26666666666666666,D.q)
B.vC=new C.u(1,0.9019607843137255,0.8823529411764706,0.8352941176470589,D.q)
B.XH=new C.u(1,0.3686274509803922,0.17647058823529413,0.13725490196078433,D.q)
B.bhh=new C.u(1,0.0196078431372549,0.027450980392156862,0.050980392156862744,D.q)
B.afr=new C.u(1,0.6039215686274509,0.6274509803921569,0.6588235294117647,D.q)
B.Fa=new C.u(1,0.09019607843137255,0.09411764705882353,0.10588235294117647,D.q)
B.B2=new C.u(1,0.9725490196078431,0.9725490196078431,0.9568627450980393,D.q)
B.afw=new C.u(1,0.9450980392156862,0.9568627450980393,0.9725490196078431,D.q)
B.afy=new C.u(1,0.9019607843137255,0.9019607843137255,0.8784313725490196,D.q)
B.bhU=new C.u(1,0.29411764705882354,0.21176470588235294,0.12941176470588237,D.q)
B.XL=new C.u(1,0.8941176470588236,0.9058823529411765,0.9176470588235294,D.q)
B.jp=new C.u(1,0.7686274509803922,0.6039215686274509,0.3843137254901961,D.q)
B.afN=new C.u(1,1,0.35294117647058826,0.12156862745098039,D.q)
B.afO=new C.u(1,0.5411764705882353,0.5607843137254902,0.596078431372549,D.q)
B.LT=new C.u(1,0.16470588235294117,0.10196078431372549,0.06274509803921569,D.q)
B.afQ=new C.u(1,0.5411764705882353,0.29411764705882354,0.29411764705882354,D.q)
B.LU=new C.u(1,0.9098039215686274,0.8509803921568627,0.7372549019607844,D.q)
B.biD=new C.u(1,0.48627450980392156,0.3215686274509804,0.18823529411764706,D.q)
B.o1=new C.u(1,1,0.9450980392156862,0.6588235294117647,D.q)
B.bj2=new C.u(1,0.5411764705882353,0.5411764705882353,0.5176470588235295,D.q)
B.bj4=new C.u(1,0.9647058823529412,0.9568627450980393,0.9254901960784314,D.q)
B.LX=new C.u(1,0.47843137254901963,0.23137254901960785,0.1803921568627451,D.q)
B.bje=new C.u(1,0.3333333333333333,0.6274509803921569,0.3333333333333333,D.q)
B.ag_=new C.u(1,0.7058823529411765,0.3254901960784314,0.3254901960784314,D.q)
B.bjm=new C.u(1,0.6078431372549019,0.6078431372549019,0.592156862745098,D.q)
B.B6=new C.u(1,0.9568627450980393,0.9450980392156862,0.9176470588235294,D.q)
B.tE=new C.u(1,0.8862745098039215,0.23137254901960785,0.23137254901960785,D.q)
B.pQ=new C.u(1,0.9490196078431372,0.9490196078431372,0.9254901960784314,D.q)
B.bjw=new C.u(1,0.30980392156862746,0.615686274509804,0.3568627450980392,D.q)
B.ag4=new C.u(1,0.788235294117647,0.8117647058823529,0.8392156862745098,D.q)
B.bjB=new C.u(1,0.9294117647058824,0.9215686274509803,0.8941176470588236,D.q)
B.XZ=new C.u(1,0.8392156862745098,0.6823529411764706,0.4470588235294118,D.q)
B.ag7=new C.u(1,0.9098039215686274,0.9098039215686274,0.9098039215686274,D.q)
B.LZ=new C.u(1,0.2901960784313726,0.2980392156862745,0.32941176470588235,D.q)
B.Y0=new C.u(1,0.3686274509803922,0.43137254901960786,0.5176470588235295,D.q)
B.bkj=new C.u(1,0.20784313725490197,0.47843137254901963,0.26666666666666666,D.q)
B.bkm=new C.u(1,0.3568627450980392,0.10196078431372549,0.09019607843137255,D.q)
B.agh=new C.u(1,0.23137254901960785,0.1843137254901961,0.14901960784313725,D.q)
B.agi=new C.u(1,0.8509803921568627,0.788235294117647,0.6588235294117647,D.q)
B.kz=new C.u(1,0.9686274509803922,0.9568627450980393,0.9254901960784314,D.q)
B.agl=new C.u(1,0.13333333333333333,0.1450980392156863,0.16862745098039217,D.q)
B.Y4=new C.u(1,0.4980392156862745,0.7215686274509804,1,D.q)
B.xM=new C.u(1,0.16470588235294117,0.1450980392156863,0.13725490196078433,D.q)
B.bkG=new C.u(1,0.5411764705882353,0.23137254901960785,0.23137254901960785,D.q)
B.bkH=new C.u(1,0.9450980392156862,0.9294117647058824,0.8784313725490196,D.q)
B.M1=new C.u(1,0.796078431372549,0.8156862745098039,0.8392156862745098,D.q)
B.Y7=new C.u(1,0.8980392156862745,0.7254901960784313,0.11764705882352941,D.q)
B.bl5=new C.u(1,0.7490196078431373,0.8901960784313725,1,D.q)
B.agz=new C.u(1,0.6039215686274509,0.4196078431372549,0.24705882352941178,D.q)
B.Yb=new C.u(1,0.10588235294117647,0.10588235294117647,0.11372549019607843,D.q)
B.blr=new C.u(1,0.9529411764705882,0.9058823529411765,0.6313725490196078,D.q)
B.agG=new C.u(1,0.9490196078431372,0.9490196078431372,0.9333333333333333,D.q)
B.blQ=new C.u(1,0.6274509803921569,0.6509803921568628,0.6823529411764706,D.q)
B.bm2=new C.u(0,0.2196078431372549,0.7411764705882353,0.9725490196078431,D.q)
B.bma=new C.u(1,0.8156862745098039,0.35294117647058826,0.22745098039215686,D.q)
B.bmg=new C.u(1,0.8509803921568627,0.788235294117647,0.6274509803921569,D.q)
B.Yh=new C.u(1,0.9490196078431372,0.9176470588235294,0.8274509803921568,D.q)
B.ah_=new C.u(1,0.10588235294117647,0.07058823529411765,0.03529411764705882,D.q)
B.bmB=new C.u(1,0.3607843137254902,0.7019607843137254,0.9098039215686274,D.q)
B.M8=new C.u(1,0.24705882352941178,0.26666666666666666,0.3137254901960784,D.q)
B.bmL=new C.u(1,0.12549019607843137,0.13333333333333333,0.14901960784313725,D.q)
B.Mc=new C.u(1,0.8862745098039215,0.27058823529411763,0.35294117647058826,D.q)
B.bn0=new C.u(1,0.12156862745098039,0.43529411764705883,0.2627450980392157,D.q)
B.xR=new C.u(1,0.17254901960784313,0.4196078431372549,0.8392156862745098,D.q)
B.vI=new C.u(1,0.7607843137254902,0.4627450980392157,0.22745098039215686,D.q)
B.Mf=new C.u(1,0.7254901960784313,0.7450980392156863,0.7764705882352941,D.q)
B.ah8=new C.u(1,0.611764705882353,0.35294117647058826,0.27058823529411763,D.q)
B.bnt=new C.u(1,0.611764705882353,0.5882352941176471,0.5450980392156862,D.q)
B.Mj=new C.u(1,0.9686274509803922,0.9490196078431372,0.9019607843137255,D.q)
B.bnW=new C.u(1,0.2,0.21176470588235294,0.23137254901960785,D.q)
B.bo0=new C.u(1,0.7098039215686275,0.7333333333333333,0.7647058823529411,D.q)
B.bo1=new C.u(1,0.9294117647058824,0.9294117647058824,0.9098039215686274,D.q)
B.bo7=new C.u(1,0.9098039215686274,0.8941176470588236,0.8549019607843137,D.q)
B.boc=new C.u(1,0.23137254901960785,0.23137254901960785,0.25098039215686274,D.q)
B.ahr=new C.u(1,0.7686274509803922,0.5411764705882353,0.11764705882352941,D.q)
B.boi=new C.u(1,0.43529411764705883,0.7137254901960784,1,D.q)
B.bos=new C.u(1,0.9450980392156862,0.9019607843137255,0.8156862745098039,D.q)
B.bou=new C.u(1,0.9137254901960784,0.8980392156862745,0.8549019607843137,D.q)
B.ahz=new C.u(1,0.18823529411764706,0.2,0.22745098039215686,D.q)
B.Ml=new C.u(1,0.9372549019607843,0.9372549019607843,0.9176470588235294,D.q)
B.ahB=new C.u(0.6666666666666666,1,0.16470588235294117,0.10196078431372549,D.q)
B.boL=new C.u(1,0.9372549019607843,0.9137254901960784,0.8627450980392157,D.q)
B.boO=new C.u(1,0.9294117647058824,0.9019607843137255,0.8156862745098039,D.q)
B.Yz=new C.u(1,0.4196078431372549,0.24705882352941178,0.19215686274509805,D.q)
B.boT=new C.u(1,0.12156862745098039,0.6392156862745098,0.2627450980392157,D.q)
B.boV=new C.u(1,0.803921568627451,0.6274509803921569,0.2,D.q)
B.YC=new C.u(1,0.3607843137254902,0.7019607843137254,1,D.q)
B.bpB=new C.u(1,0.48627450980392156,0.2901960784313726,0.17647058823529413,D.q)
B.YD=new C.u(1,0.9568627450980393,0.9568627450980393,0.9411764705882353,D.q)
B.bpD=new C.u(1,0.8431372549019608,0.8,0.6588235294117647,D.q)
B.bqh=new C.u(1,0.9019607843137255,0.8745098039215686,0.796078431372549,D.q)
B.bqk=new C.u(1,0.30980392156862746,0.6588235294117647,1,D.q)
B.bqq=new C.u(1,1,0.6196078431372549,0.6196078431372549,D.q)
B.ai_=new C.u(1,0.8431372549019608,0.16470588235294117,0.16470588235294117,D.q)
B.Mu=new C.u(1,0.47843137254901963,0.30980392156862746,0.1568627450980392,D.q)
B.bqE=new C.u(1,0.9294117647058824,0.9372549019607843,0.9529411764705882,D.q)
B.Bk=new C.u(1,0.6901960784313725,0.5411764705882353,0.3568627450980392,D.q)
B.hU=new C.u(1,0.6078431372549019,0.8274509803921568,0.9607843137254902,D.q)
B.bqY=new C.u(1,0.48627450980392156,0.2901960784313726,0.22745098039215686,D.q)
B.YO=new C.u(1,0.7490196078431373,0.8901960784313725,0.9686274509803922,D.q)
B.YP=new C.u(1,0.23137254901960785,0.6078431372549019,1,D.q)
B.ai7=new C.u(1,0.8509803921568627,0.8235294117647058,0.7607843137254902,D.q)
B.q0=new C.u(1,0.4196078431372549,0.2901960784313726,0.19607843137254902,D.q)
B.brb=new C.u(1,0.8509803921568627,0.7450980392156863,0.5725490196078431,D.q)
B.YR=new C.u(1,0.13333333333333333,0.14901960784313725,0.17254901960784313,D.q)
B.bre=new C.u(1,0.8117647058823529,0.788235294117647,0.7215686274509804,D.q)
B.bri=new C.u(1,0.7176470588235294,0.4745098039215686,0.12156862745098039,D.q)
B.bro=new C.u(1,0.9294117647058824,0.9294117647058824,0.9176470588235294,D.q)
B.brp=new C.u(1,0.7529411764705882,0.5411764705882353,0.35294117647058826,D.q)
B.brr=new C.u(1,0.5450980392156862,0.4196078431372549,0.24705882352941178,D.q)
B.bsu=new A.th("none","Nothing happens: the device gets no power.",!1,!1,!1)
B.bsv=new A.th("none","It cannot be judged: the wire functions were not verified.",!1,!1,!1)
B.bsw=new A.th("smoke","The loose connection overheats: it glows, smokes and chars the device. In a real wall this can start a fire.",!1,!1,!0)
B.bsx=new A.th("none","It does not work as it should: some part runs wrongly or not at all. That does not tell you what is wrong, so check against the diagram.",!1,!1,!1)
B.bsy=new A.th("none","It runs. There is nothing to see, and that is the danger: with no ground, a fault would energize the metal parts.",!0,!1,!1)
B.bsz=new A.th("none","It works as the diagram says.",!0,!1,!1)
B.bsA=new A.th("none","It works, and every safety rule is met.",!0,!1,!1)
B.bsB=new A.th("none","Nothing happens: it is dead. But the hot wire is connected, so it can still be live. No sparks, no smoke: that does not make it safe.",!1,!1,!1)
B.bsC=new A.th("spark","Bare copper touches something it should not: sparks. The circuit is not safe.",!1,!1,!1)
B.bsD=new A.th("none","It looks fine for now. But the support cannot carry the weight, and it can fall later.",!1,!1,!1)
B.bsE=new A.th("fire","BANG. A short circuit: a flash, sparks, smoke and a flame at the device. The breaker trips and the device is ruined. The wires and the device are not safe to use.",!1,!0,!0)
B.bsF=new A.th("arc","Hot and neutral are reversed: the parts that should be dead are live. Blue arcs show the energized metal. The simulator does not let anything run on this: it is unsafe, even if a real appliance might seem to work.",!1,!1,!1)
B.bsG=new A.th("arc","Current flows through the ground wire and the metal parts it joins. Arcs crackle at the box. This is a shock hazard.",!1,!1,!1)
B.bsH=new A.th("spark","The neutral and ground are joined: the protective device trips with a snap of sparks.",!1,!0,!1)
B.btz=new A.ak6("expired","That order took too long and went back on the board.",0)
B.bvv=new C.b9(55e3)
B.bwl=new C.Q(0,2,0,6)
B.bwL=new C.Q(10,10,10,8)
B.bwR=new C.Q(10,16,10,14)
B.bx8=new C.Q(11,7,11,7)
B.ZO=new C.Q(11,9,11,9)
B.by7=new C.Q(14,16,14,10)
B.ajI=new C.Q(14,8,14,24)
B.bzM=new C.Q(1,0,0,0)
B.bAn=new C.Q(22,0,22,44)
B.bB4=new C.Q(26,8,26,8)
B.bBH=new C.Q(4,22,4,12)
B.bBU=new C.Q(4,4,8,4)
B.bBW=new C.Q(4,6,12,4)
B.bCP=new C.Q(9,0,9,0)
B.bCQ=new C.Q(9,12,9,12)
B.fQY=new C.y("Practice mode (no explanations, real shocks)",null,D.K1,null,null,null,null,null,null,null,null,null)
B.bDl=new C.bA(1,D.bd,B.fQY,null)
B.fMy=new C.y("Practice mode (no hints, no labels)",null,D.K1,null,null,null,null,null,null,null,null,null)
B.bDn=new C.bA(1,D.bd,B.fMy,null)
B.ftE=new C.y("\ud83c\udfd8 Community",null,Q.t4,null,null,null,null,null,null,null,null,null)
B.b8n=new C.ck(D.A,null,null,B.ftE,null)
B.bDu=new C.bA(1,D.bd,B.b8n,null)
B.fy8=new C.y("House tour",null,D.mY,null,null,null,null,null,null,null,null,null)
B.aS_=new C.F(!0,D.aR,null,null,null,null,13,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fEA=new C.y("A film of your whole house, with every TV on.",null,B.aS_,null,null,null,null,null,null,null,null,null)
B.djV=w([B.fy8,D.bA,B.fEA],x.p)
B.bss=new C.fj(D.ah,D.e,D.j,D.E,null,D.p,null,0,B.djV,null)
B.bDz=new C.bA(1,D.bd,B.bss,null)
B.fEb=new C.y("Construction Lab",null,Q.t4,null,null,null,null,null,null,null,null,null)
B.ft2=new C.y("Wire it. Plumb it. Fix a house.",null,D.hl,null,null,null,null,null,null,null,null,null)
B.dav=w([B.fEb,B.ft2],x.p)
B.bsb=new C.fj(D.ah,D.e,D.j,D.E,null,D.p,null,0,B.dav,null)
B.bDI=new C.bA(1,D.bd,B.bsb,null)
B.fLo=new C.y("Test mode (an inspection: nothing is explained until you submit)",null,D.K1,null,null,null,null,null,null,null,null,null)
B.bDK=new C.bA(1,D.bd,B.fLo,null)
B.aSl=new C.F(!0,D.c,null,null,null,null,14,D.H,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fMp=new C.y("5 portions of food\n10 points",null,B.aSl,null,null,null,null,null,null,null,null,null)
B.bDO=new C.bA(1,D.bd,B.fMp,null)
B.fyG=new C.y("3 doses of medicine\n12 points",null,B.aSl,null,null,null,null,null,null,null,null,null)
B.bE3=new C.bA(1,D.bd,B.fyG,null)
B.fK5=new C.y("Drone film",null,D.ft,null,null,null,null,null,null,null,null,null)
B.bE8=new C.bA(1,D.bd,B.fK5,null)
B.fMb=new C.y("Practice mode (no hints, real shocks and fires)",null,D.K1,null,null,null,null,null,null,null,null,null)
B.bEu=new C.bA(1,D.bd,B.fMb,null)
B.fQy=new C.y("Uber licence",null,D.ft,null,null,null,null,null,null,null,null,null)
B.bEB=new C.bA(1,D.bd,B.fQy,null)
B.bFy=new A.a4S(null,null)
B.a09=new A.rf(0,"tripped")
B.a0a=new A.rf(1,"noHotWater")
B.a0b=new A.rf(10,"wallHole")
B.a0c=new A.rf(11,"clogged")
B.NF=new A.rf(2,"nutLeak")
B.NG=new A.rf(3,"pexLeak")
B.a0d=new A.rf(5,"flicker")
B.a0e=new A.rf(6,"burntOutlet")
B.a0f=new A.rf(7,"gfciTripped")
B.a0g=new A.rf(8,"runningToilet")
B.a0h=new A.rf(9,"dripFaucet")
B.bHj=new A.oi(!1,"back",0,10)
B.bHk=new A.oi(!1,"back",0,9)
B.bHl=new A.oi(!1,"back",50,0)
B.bHm=new A.oi(!1,"back",56,11)
B.bHn=new A.oi(!1,"back",-50,10)
B.bHo=new A.oi(!1,"left",40,9)
B.bHp=new A.oi(!1,"right",40,10)
B.a0p=new A.oi(!1,"right",50,5)
B.alM=new A.pN("tv100",'Giant 100"',"\ud83d\udcfa",89,!1)
B.bJw=new C.a0(61419,"MaterialIcons",!1)
B.bJI=new C.a0(61888,"MaterialIcons",!1)
B.bKu=new C.a0(62978,"MaterialIcons",!1)
B.bKz=new C.a0(63015,"MaterialIcons",!1)
B.bKW=new C.a0(63165,"MaterialIcons",!1)
B.anb=new C.a0(63228,"MaterialIcons",!1)
B.anz=new C.a0(63547,"MaterialIcons",!0)
B.bMd=new C.a0(983222,"MaterialIcons",!1)
B.bML=new C.a0(983666,"MaterialIcons",!1)
B.aok=new C.a0(983775,"MaterialIcons",!1)
B.aoq=new C.a0(983894,"MaterialIcons",!1)
B.bQ2=new C.ae(D.jQ,null,null,null,null,null)
B.bQe=new C.ae(D.oc,null,null,null,null,null)
B.bRG=new C.ae(D.cx,26,D.aB,null,null,null)
B.bU7=new C.ae(D.mJ,null,null,null,null,null)
B.bUX=new C.ae(D.Ch,22,D.c,null,null,null)
B.bV1=new C.ae(D.l8,null,F.fw,null,null,null)
B.bX_=new C.ae(D.p5,null,null,null,null,null)
B.bYo=new C.ae(A4.GU,null,D.bG,null,null,null)
B.fUm=new A.r(0,100,20)
B.c_h=new A.hf(B.fUm,"No power in this house",D.by,0)
B.h8D=new A.r(-60,40,130)
B.c_i=new A.hf(B.h8D,"\ud83e\uddef Walk here to check the equipment",D.d1,0)
B.fW2=new A.r(0,62,12)
B.c_j=new A.hf(B.fW2,"\ud83d\uded7 Elevator: walk onto the blue mat or tap",D.jt,19502)
B.fVW=new A.r(0,50,80)
B.c_k=new A.hf(B.fVW,"\ud83d\udcda Walk here to teach the class",D.d1,0)
B.fWw=new A.r(105,52,100)
B.c_l=new A.hf(B.fWw,"\ud83c\udf06 Balcony: step here to see the city",D.eh,0)
B.h8R=new A.r(-80,70,40)
B.c_m=new A.hf(B.h8R,"\ud83d\udc69\u200d\u2695\ufe0f Nurse",D.cO,0)
B.fW_=new A.r(0,52,78)
B.c_n=new A.hf(B.fW_,"\ud83e\udeaa Walk here to get your Uber licence",D.jt,0)
B.h8S=new A.r(-84,84,120)
B.c_o=new A.hf(B.h8S,"\ud83c\udf5e Food and drinks",D.d1,0)
B.fVJ=new A.r(0,40,176)
B.c_p=new A.hf(B.fVJ,"\ud83c\udf4e Fresh fruit",D.ej,0)
B.aUX=new A.r(0,26,312)
B.c_q=new A.hf(B.aUX,"\u2b07 Walk here to go out",D.eh,0)
B.c_r=new A.hf(B.aUX,"\ud83d\uded7 Take the elevator down to go out",D.jt,0)
B.h14=new A.r(90,40,56)
B.c_s=new A.hf(B.h14,"\ud83d\udcd6 Library",D.dH,0)
B.h0D=new A.r(80,40,56)
B.c_t=new A.hf(B.h0D,"\ud83d\udd25 Fire drill",D.by,0)
B.aUS=new A.r(0,100,36)
B.c_u=new A.hf(B.aUS,"\ud83e\udeaa NGMY Licence office",D.M,0)
B.aVy=new A.r(34,56,18)
B.c_v=new A.hf(B.aVy,"\ud83e\uddd1\u200d\ud83d\udcbc Clerk",D.cO,0)
B.h7D=new A.r(-0.4,4.2,-2.4)
B.c_w=new A.hf(B.h7D,"LIVE 120 V",D.by,0)
B.h8Q=new A.r(-80,52,66)
B.c_x=new A.hf(B.h8Q,"\ud83c\udfe5 Walk here to admit the sick",D.eV,0)
B.fVX=new A.r(0,50,84)
B.c_y=new A.hf(B.fVX,"\ud83d\udcb0 Counter: walk here to pay or sell",D.eh,0)
B.c_z=new A.hf(B.aVy,"\ud83e\uddd1\u200d\ud83d\udcbc Cashier",D.cO,0)
B.c0x=new C.a9(D.a4,D.a8,D.x,M.ayi,null,null)
B.c1v=new C.a9(D.a4,D.a8,D.x,M.awL,null,null)
B.bok=new C.u(1,0.2901960784313726,0.20392156862745098,0.0784313725490196,D.q)
B.bl7=new C.u(1,0.12156862745098039,0.10196078431372549,0.07058823529411765,D.q)
B.bdP=new C.u(1,0.16470588235294117,0.12156862745098039,0.07058823529411765,D.q)
B.dlP=w([B.bok,B.bl7,B.bdP],x.O)
B.c1A=new C.a9(D.az,D.aE,D.x,B.dlP,null,null)
B.bfN=new C.u(1,0.8509803921568627,0.6039215686274509,0.11764705882352941,D.q)
B.d8q=w([F.fw,B.bfN],x.O)
B.c1I=new C.a9(D.az,D.aE,D.x,B.d8q,null,null)
B.bnw=new C.u(1,0.0392156862745098,0.058823529411764705,0.1803921568627451,D.q)
B.bqj=new C.u(1,0.1411764705882353,0.08235294117647059,0.3215686274509804,D.q)
B.cKq=w([E.afc,B.bnw,B.bqj],x.O)
B.c2p=new C.a9(D.b3,D.b6,D.x,B.cKq,null,null)
B.d4W=w([E.jI,E.LC,E.jI],x.O)
B.aqz=new C.a9(D.a4,D.a8,D.x,B.d4W,null,null)
B.bkX=new C.u(1,0.8901960784313725,0.9254901960784314,0.9803921568627451,D.q)
B.d3q=w([D.c,B.bkX],x.O)
B.c3F=new C.a9(D.b3,D.b6,D.x,B.d3q,null,null)
B.brf=new C.u(1,0.07058823529411765,0.22745098039215686,0.47843137254901963,D.q)
B.cXP=w([E.jI,B.brf],x.O)
B.c3Q=new C.a9(D.az,D.aE,D.x,B.cXP,null,null)
B.dmw=w([D.cm,D.dd],x.O)
B.z9=new C.a9(D.b3,D.b6,D.x,B.dmw,null,null)
B.chB=w([E.jI,E.LC],x.O)
B.c44=new C.a9(D.a4,D.a8,D.x,B.chB,null,null)
B.ecF={ground:0}
B.Jl=new C.dD(B.ecF,1,x.M)
B.w4=new A.fJ(25,"Green screw: GROUND",B.Jl,"The bare copper ground goes on the green screw.",!1,"ground")
B.ecV={lineA:0}
B.f0M=new C.dD(B.ecV,1,x.M)
B.bIg=new A.fJ(23,"LINE screw 1 (top left)",B.f0M,"Hot leg 1 from the panel goes on the top left screw.",!1,"hot")
B.ecW={lineB:0}
B.f0A=new C.dD(B.ecW,1,x.M)
B.bI8=new A.fJ(21,"LINE screw 2 (top right)",B.f0A,"Hot leg 2 from the panel goes on the top right screw.",!1,"hot")
B.ecY={loadA:0}
B.f0L=new C.dD(B.ecY,1,x.M)
B.bHQ=new A.fJ(24,"LOAD screw 1 (bottom left)",B.f0L,"Hot leg 1 to the heater goes on the bottom left screw: it is switched through from the top left one.",!1,"hot")
B.ed_={loadB:0}
B.f1j=new C.dD(B.ed_,1,x.M)
B.bI0=new A.fJ(22,"LOAD screw 2 (bottom right)",B.f1j,"Hot leg 2 to the heater goes on the bottom right screw.",!1,"hot")
B.c4p=w([B.w4,B.bIg,B.bI8,B.bHQ,B.bI0],x.r)
B.c4t=w(["flange","wax","toilet","bolts","valve","hosehot","hosecold","faucet","tail","trap","arm"],x.s)
B.a2F=w([0,0,0,0],x.t)
B.c4E=w([0,0,0,1],x.k)
B.cdG=w([139,161],x.n)
B.cdN=w([145,158],x.n)
B.cht=w([T.qB,A3.Tp,R.lk,Y.aOg],x.f)
B.chF=w([1,1,1],x.k)
B.chG=w([1,1,1,1],x.k)
B.h5A=new A.r(-57.8,-32,0)
B.b5V=new A.z3(0,"Outlet spot 1",!1,B.h5A,"low")
B.h6k=new A.r(-9.8,-32,0)
B.b5S=new A.z3(1,"Outlet spot 2",!1,B.h6k,"low")
B.h6R=new A.r(38.2,-32,0)
B.b5Y=new A.z3(2,"Outlet spot 3",!1,B.h6R,"low")
B.h5c=new A.r(-25.8,0,0)
B.b5W=new A.z3(3,"Switch spot 1",!1,B.h5c,"switch")
B.h6e=new A.r(22.2,0,0)
B.b5U=new A.z3(4,"Switch spot 2",!1,B.h6e,"switch")
B.h8i=new A.r(-30,48,40)
B.b5X=new A.z3(5,"Ceiling light spot",!0,B.h8i,"light")
B.fZ1=new A.r(30,48,40)
B.b5T=new A.z3(6,"Ceiling fan spot",!0,B.fZ1,"fan")
B.uy=w([B.b5V,B.b5S,B.b5Y,B.b5W,B.b5U,B.b5X,B.b5T],C.av("O<z3>"))
B.evg=new C.z(4,6)
B.evN=new C.z(5,7)
B.ewb=new C.z(6,8)
B.ci6=w([R.lk,Ag.v0,E.Tm,E.Tn,B.evg,B.evN,B.ewb],C.av("O<+(H,H)>"))
B.ci9=w([2],x.t)
B.coU=w(["The living room has no power: find the tripped breaker in the panel and reset it.","The kitchen sink drips: pick the wrench and tighten the slip nut under the sink. (Build the house up to Fixtures to see the problems.)"],x.s)
B.h6A=new A.r(11,4.6,-6)
B.h1p=new A.r(11,5.4,-7.85)
B.h5S=new A.r(3.4,5.4,-7.85)
B.aW0=new A.r(3.4,3.4,-7.85)
B.coW=w([B.h6A,B.h1p,B.h5S,B.aW0],x.o)
B.cpE=w([3],x.t)
B.cpO=w([300,800,1300,1800],x.n)
B.crO=w([32,80],x.n)
B.hgx=new A.hn(0,0.7,2.2,2,0,0,0)
B.hgm=new A.hn(3,0.1,0.95,-0.42,-0.3,-0.2,0.05)
B.hgG=new A.hn(6.5,0,0.9,-0.38,0.3,0.2,0.05)
B.hgP=new A.hn(9.5,-0.9,1.15,0.1,0,0,0)
B.hgM=new A.hn(12.5,-1.7,1.45,1.6,0,0,0)
B.hgl=new A.hn(15.5,-2.8,1,-0.35,0,0,0)
B.hgF=new A.hn(18.5,-3.6,0.9,0.05,0,0,0)
B.hgJ=new A.hn(21.5,-4.6,1.5,1.5,0,0,0)
B.hgy=new A.hn(24.5,-5.4,0.9,-0.4,0,0,0)
B.hgR=new A.hn(27.5,-6.28,0.75,0.05,0,0,0)
B.hgz=new A.hn(30,-6,2.4,1.7,0,0,0)
B.d1R=w([B.hgx,B.hgm,B.hgG,B.hgP,B.hgM,B.hgl,B.hgF,B.hgJ,B.hgy,B.hgR,B.hgz],x.x)
B.hgp=new A.hn(0,-3.14,1.2,-0.3,0,0,0)
B.hgi=new A.hn(4,-2.2,1.1,0,0,0,0)
B.hgQ=new A.hn(8,-1.2,1,0.4,0,0,0)
B.hgn=new A.hn(12,-0.4,1,0.9,0,0,0)
B.hgq=new A.hn(15,0.1,0.85,1.7,0,0,0)
B.hgh=new A.hn(18,0.3,0.8,0,0,0,0)
B.hgo=new A.hn(21,0,0.9,-0.2,0.35,0.25,0)
B.hgu=new A.hn(24,0.6,1.4,0.1,-0.2,0,0)
B.hgv=new A.hn(27,1.4,1.2,0.8,0,0,0)
B.hgt=new A.hn(30,2.4,2.3,1.5,0,0,0)
B.d93=w([B.hgp,B.hgi,B.hgQ,B.hgn,B.hgq,B.hgh,B.hgo,B.hgu,B.hgv,B.hgt],x.x)
B.hgr=new A.hn(0,0.3,2.6,0.5,0,0,0)
B.hgL=new A.hn(3,0.1,1,0,0,0,0)
B.hgO=new A.hn(6,0,0.95,0.05,0.2,0.15,0)
B.hgC=new A.hn(9,-0.8,1.6,0.3,0,0,0)
B.hgH=new A.hn(12,-1.57,1,-0.2,0,0,0)
B.hgA=new A.hn(15,-2.4,1.5,0.9,0,0,0)
B.hgE=new A.hn(18,-3.14,1,0.1,0,0,0)
B.hgw=new A.hn(21,-3.9,1.5,0.6,0,0,0)
B.hgS=new A.hn(24,-4.71,1,-0.3,0,0,0)
B.hgj=new A.hn(27,-5.5,1.3,0.5,0,0,0)
B.hgg=new A.hn(30,-6.28,2.6,0.9,0,0,0)
B.cFt=w([B.hgr,B.hgL,B.hgO,B.hgC,B.hgH,B.hgA,B.hgE,B.hgw,B.hgS,B.hgj,B.hgg],x.x)
B.hgK=new A.hn(0,0,0.5,3.5,0,0,0)
B.hgk=new A.hn(4,0.2,1,-0.3,0,0,0)
B.hgN=new A.hn(8,1,1,0,0,0,0)
B.hge=new A.hn(12,1.57,1.2,0.3,0,0,0)
B.hgI=new A.hn(16,3.14,1.4,1.2,0,0,0)
B.hgf=new A.hn(20,3.5,0.9,-0.35,0,0,0)
B.hgs=new A.hn(24,4.7,1.1,0,0,0,0)
B.hgB=new A.hn(28,6,1,0.3,0,0,0)
B.hgD=new A.hn(30,6.3,2.2,1.4,0,0,0)
B.d1v=w([B.hgK,B.hgk,B.hgN,B.hge,B.hgI,B.hgf,B.hgs,B.hgB,B.hgD],x.x)
B.cu7=w([B.d1R,B.d93,B.cFt,B.d1v],C.av("O<ai<hn>>"))
B.cu8=w([380,820,1420,1660],x.n)
B.ed6={neutral:0}
B.Jm=new C.dD(B.ed6,1,x.M)
B.bI7=new A.fJ(23,"Silver screw (top): NEUTRAL",B.Jm,y.G,!1,"neutral")
B.bHH=new A.fJ(24,"Silver screw (bottom): NEUTRAL",B.Jm,y.G,!1,"neutral")
B.edm={switched:0}
B.f1o=new C.dD(B.edm,1,x.M)
B.bHF=new A.fJ(21,"Brass screw (top): SWITCHED hot",B.f1o,"The top half is the switched one: the red wire that comes back from the wall switch goes here.",!1,"hot")
B.eck={always:0}
B.f0x=new C.dD(B.eck,1,x.M)
B.bI3=new A.fJ(22,"Brass screw (bottom): ALWAYS hot",B.f0x,"The bottom half is always on: the black wire straight from the panel goes here.",!1,"hot")
B.cvl=w([B.w4,B.bI7,B.bHH,B.bHF,B.bI3],x.r)
B.eLA=new C.z(-820,640)
B.ewP=new C.z(820,640)
B.cvq=w([B.eLA,B.ewP],x.f)
B.hnF=new A.pw(0,-80,66,24)
B.hnG=new A.pw(1,20,48,20)
B.hnO=new A.pw(2,20,98,20)
B.hnP=new A.pw(3,20,148,20)
B.cvQ=w([B.hnF,B.hnG,B.hnO,B.hnP],x.X)
B.CS=w([],x.m)
B.b_Z=new A.r6("highway","\ud83d\udee3\ufe0f","Highway board","Huge and wide, on two thick poles, with a walkway under it",420,170,150,B.CS,0,1)
B.b_W=new A.r6("tower","\ud83d\uddfc","Tall tower sign","A big sign high up on one very thick pole",400,210,270,B.CS,0,1)
B.b01=new A.r6("neon","\ud83c\udf03","Neon board","A big black board with a glowing neon edge",380,190,120,B.CS,0,1)
B.b00=new A.r6("roof","\ud83c\udfe0","Rooftop board","A tall house with two big TVs, the NGMY carpet on its back, and a huge board on its roof",460,180,308,B.CS,800,1)
B.b_V=new A.r6("screen","\ud83d\udcfa","Big screen","A giant TV screen on a stand",440,250,60,B.CS,0,1)
B.b02=new A.r6("gate","\ud83d\udeaa","Town gate","A huge arch with the board across it",600,200,200,B.CS,0,1)
B.b_H=new A.lC(-420,140,0.35,0,1)
B.b_F=new A.lC(460,-420,-0.3,160,1.35)
B.d_K=w([B.b_H,B.b_F],x.m)
B.b_U=new A.r6("duo","\ud83e\udea7","Two far apart","Two separate boards: a near one and a taller one far behind it",320,160,140,B.d_K,0,0.7)
B.b_A=new A.lC(-460,0,0,0,1)
B.b_I=new A.lC(460,0,0,0,1)
B.dl0=w([B.b_A,B.abT,B.b_I],x.m)
B.b04=new A.r6("line3","\u2194\ufe0f","Three in a row","Three separate boards standing in one straight line",300,150,150,B.dl0,0,0.6)
B.b_y=new A.lC(-950,250,0.5,0,1)
B.b_x=new A.lC(150,-700,-0.2,220,1.55)
B.b_B=new A.lC(1000,60,-0.55,0,0.9)
B.cQP=w([B.b_y,B.b_x,B.b_B],x.m)
B.b_X=new A.r6("far3","\ud83d\udef0\ufe0f","Three scattered far","Three separate boards far from each other, one of them tall and far behind",320,160,140,B.cQP,0,0.6)
B.b_N=new A.lC(-360,300,0.15,0,1)
B.b_C=new A.lC(360,300,-0.15,0,1)
B.b_K=new A.lC(0,-120,0,100,1.25)
B.b_E=new A.lC(-160,-640,0.1,260,1.6)
B.c56=w([B.b_N,B.b_C,B.b_K,B.b_E],x.m)
B.b0_=new A.r6("skyline","\ud83c\udf06","Skyline","Four separate boards, the taller ones standing behind the shorter ones",300,150,130,B.c56,0,0.6)
B.b_w=new A.lC(-440,160,0,0,1)
B.b_L=new A.lC(0,160,0,0,1)
B.b_v=new A.lC(440,160,0,0,1)
B.b_M=new A.lC(-440,-420,3.141592653589793,130,1.2)
B.b_z=new A.lC(0,-420,3.141592653589793,130,1.2)
B.b_J=new A.lC(440,-420,3.141592653589793,130,1.2)
B.dmF=w([B.b_w,B.b_L,B.b_v,B.b_M,B.b_z,B.b_J],x.m)
B.b_Y=new A.r6("lines6","\ud83d\udee4\ufe0f","Two lines of three","Six separate boards: a straight line of three facing front, and a taller line of three behind it facing back",280,140,140,B.dmF,0,0.6)
B.b_G=new A.lC(0,300,0,0,1)
B.b_t=new A.lC(0,-300,3.141592653589793,0,1)
B.b_D=new A.lC(-560,0,-1.5707963267948966,0,1)
B.b_u=new A.lC(560,0,1.5707963267948966,0,1)
B.drI=w([B.b_G,B.b_t,B.b_D,B.b_u],x.m)
B.b03=new A.r6("scatter","\ud83c\udf10","Billboard park","Four separate boards: one at the front, one at the back and one on each side, all facing out",320,160,150,B.drI,0,0.6)
B.a37=w([B.b_Z,B.b_W,B.b01,B.b00,B.b_V,B.b02,B.b_U,B.b04,B.b_X,B.b0_,B.b_Y,B.b03],C.av("O<r6>"))
B.dyG=new A.i8(-134,-36,16,44)
B.dyt=new A.i8(34,118,30,66)
B.dyu=new A.i8(34,118,80,116)
B.dys=new A.i8(34,118,130,166)
B.dyH=new A.i8(-134,-76,140,160)
B.cvU=w([B.dyG,B.dyt,B.dyu,B.dys,B.dyH],x.T)
B.cvX=w([y.O,y.x,y.R,"Fasten the single black feed from the panel to the FEED screw (it powers both switches through a joined tab).","Fasten the black wire to the first light to the screw of switch 1.","Fasten the black wire to the second light to the screw of switch 2.",y.b,y.n],x.s)
B.eLk=new C.z(-600,1250)
B.eLi=new C.z(-520,1260)
B.eLg=new C.z(-460,1250)
B.evy=new C.z(520,1280)
B.evW=new C.z(600,1270)
B.eL4=new C.z(-300,1300)
B.cAP=w([B.eLk,B.eLi,B.eLg,B.evy,B.evW,B.eL4],x.f)
B.cBg=w([460,900,1500,1740],x.n)
B.cDc=w([50,130],x.n)
B.cDd=w([50,140],x.n)
B.cE_=w([51,52,53],x.t)
B.eB0=new C.z(-9.5,4.6)
B.eDt=new C.z(-5.9,2.3)
B.eJx=new C.z(8.8,4.4)
B.cFg=w([B.eB0,B.eDt,B.eJx],x.f)
B.cFC=w([5,35],x.n)
B.cGc=w([61,63],x.t)
B.cGp=w([62,64],x.t)
B.cHp=w([68,172],x.n)
B.bg8=new C.u(1,0.6039215686274509,0.30980392156862746,0.30980392156862746,D.q)
B.brh=new C.u(1,0.30980392156862746,0.47843137254901963,0.3686274509803922,D.q)
B.zc=w([B.nQ,B.Y0,B.bg8,B.brh,B.agi,D.ja],x.O)
B.bnM=new C.u(1,0.23137254901960785,0.07058823529411765,0.07058823529411765,D.q)
B.bhl=new C.u(1,0.23137254901960785,0.1843137254901961,0.0392156862745098,D.q)
B.beo=new C.u(1,0.043137254901960784,0.1803921568627451,0.09019607843137255,D.q)
B.cIg=w([B.bnM,B.bhl,B.beo],x.O)
B.te=new A.jz("ground","Bare copper \xb7 ground",B.vI,D.c,"ground")
B.tL=new C.u(1,0.14901960784313725,0.14901960784313725,0.16470588235294117,D.q)
B.hcw=new A.jz("feed","Black \xb7 hot feed from the panel",B.tL,D.c,"hot")
B.M_=new C.u(1,0.22745098039215686,0.1803921568627451,0.1803921568627451,D.q)
B.hcr=new A.jz("loadA","Black \xb7 to light 1",B.M_,D.c,"hot")
B.bdD=new C.u(1,0.16862745098039217,0.16862745098039217,0.2,D.q)
B.hct=new A.jz("loadB","Black \xb7 to light 2",B.bdD,D.c,"hot")
B.cIO=w([B.te,B.hcw,B.hcr,B.hct],x.d)
B.awF=w([72,73,74,75],x.t)
B.eL1=new C.z(-25,-15)
B.esT=new C.z(25,-15)
B.eL0=new C.z(-25,15)
B.esS=new C.z(25,15)
B.cMK=w([B.eL1,B.esT,B.eL0,B.esS],x.f)
B.h11=new A.r(-125,292,-114.5)
B.h4l=new A.r(125,292,-114.5)
B.h6W=new A.r(125,208,-114.5)
B.h41=new A.r(-125,208,-114.5)
B.cN0=w([B.h11,B.h4l,B.h6W,B.h41],x.o)
B.bHr=new A.pN("wall","Whole-wall TV","\ud83c\udfac",0,!0)
B.bHz=new A.pN("tv200",'Cinema 200"',"\ud83c\udfac",175,!1)
B.bHu=new A.pN("tv150",'Cinema 150"',"\ud83c\udfac",130,!1)
B.bHv=new A.pN("bangtv",'Beovision TV 77"',"\ud83d\udcfa",66,!1)
B.bHq=new A.pN("sonytv",'Sony Bravia 75"',"\ud83d\udcfa",64,!1)
B.bHA=new A.pN("lgtv",'LG OLED 65"',"\ud83d\udcfa",56,!1)
B.bHt=new A.pN("tv",'Samsung Neo QLED 55"',"\ud83d\udcfa",48,!1)
B.bHy=new A.pN("appletv",'Apple TV 4K 50"',"\ud83d\udcfa",44,!1)
B.bHx=new A.pN("lamp","Table lamp","\ud83d\udca1",0,!1)
B.bHw=new A.pN("toaster","Toaster","\ud83c\udf5e",0,!1)
B.bHs=new A.pN("hairdryer","Hair dryer","\ud83d\udc87",0,!1)
B.a3q=w([B.bHr,B.bHz,B.bHu,B.alM,B.bHv,B.bHq,B.bHA,B.bHt,B.bHy,B.bHx,B.bHw,B.bHs],C.av("O<pN>"))
B.cNb=w([y.O,y.x,y.R,y.N,y.E,y.k,y.b,y.n],x.s)
B.bgx=new C.u(1,0.7764705882352941,0.5254901960784314,0.25882352941176473,D.q)
B.bht=new C.u(1,0.43529411764705883,0.2901960784313726,0.1803921568627451,D.q)
B.boH=new C.u(1,0.6627450980392157,0.44313725490196076,0.29411764705882354,D.q)
B.awX=w([F.my,B.bgx,E.aeU,B.bht,B.boH],x.O)
B.cUx=w([y.O,"Two cables come into the box: one from the breaker panel (LINE) and one going to the light (LOAD).","Twist the two white wires together with a wire nut. A switch does not cut the neutral.",y.R,"Fasten the black wire from the panel to one BRASS screw.","Fasten the black wire that goes to the light to the other BRASS screw.","Push the switch into the box, put the plate on and test with the power on."],x.s)
B.erC=new C.z(0,330)
B.eKS=new C.z(-120,1080)
B.es5=new C.z(120,1080)
B.eL2=new C.z(-300,1000)
B.etg=new C.z(300,1000)
B.eLu=new C.z(-700,800)
B.ewk=new C.z(700,800)
B.cUW=w([B.erC,B.eKS,B.es5,B.eL2,B.etg,B.eLu,B.ewk],x.f)
B.cV1=w(["Walnut","Blue grey","Brick red","Sage green","Sand","Charcoal"],x.s)
B.jT=w(["switch","switch2p","switch3","switch4","switchsmart","switchcombo"],x.s)
B.h2S=new A.r(-6.5,7.5,-7.85)
B.h2X=new A.r(-6.5,7.8,-3)
B.cVk=w([B.h2S,B.h2X],x.o)
B.hcW=new A.FP("NGMY JOBS","Find work. Get hired. Get paid.",D.aD,D.ih,D.tz)
B.hd3=new A.FP("NGMY LOANS","Help when you need it most.",D.cV,D.dZ,D.vH)
B.hcZ=new A.FP("KISWAHILI SCHOOL","Learn Swahili and English, step by step.",D.bP,D.tw,D.vL)
B.hd0=new A.FP("CIVIC REGISTRY","Your family, your community, registered.",D.d2,D.d6,D.nS)
B.hcV=new A.FP("CORE PROTOCOL","Studios for curious minds.",D.b5,D.jo,D.pO)
B.hd_=new A.FP("BUILD AND FIX","The Construction Lab: wire it, plumb it.",D.fo,D.hG,D.tJ)
B.hcP=new A.FP("CREATE WITH NGMY","Videos, slides, bios and books.",D.bC,D.ky,D.pK)
B.cVo=w([B.hcW,B.hd3,B.hcZ,B.hd0,B.hcV,B.hd_,B.hcP],C.av("O<FP>"))
B.hnC=new A.pw(0,-100,100,24)
B.hnJ=new A.pw(1,90,100,24)
B.cVA=w([B.hnC,B.hnJ],x.X)
B.eLE=new C.z(-95,160)
B.eLa=new C.z(-35,175)
B.ex8=new C.z(95,170)
B.cVE=w([B.eLE,B.eLa,B.ex8],x.f)
B.bh1=new C.u(1,0.9176470588235294,0.9490196078431372,0.9686274509803922,D.q)
B.bmu=new C.u(1,0.9647058823529412,0.9098039215686274,0.9098039215686274,D.q)
B.blq=new C.u(1,0.9529411764705882,0.9215686274509803,0.7843137254901961,D.q)
B.axj=w([B.B6,B.bh1,B.bmu,B.blq],x.O)
B.ect={common:0}
B.f1a=new C.dD(B.ect,1,x.M)
B.bHP=new A.fJ(23,"COMMON screw (the odd one)",B.f1a,"The COMMON screw is the one with a different colour. The black wire that brings the power in, or goes to the light, belongs here.",!1,"hot")
B.edo={trav1:0,trav2:1}
B.aPQ=new C.dD(B.edo,2,x.M)
B.bHV=new A.fJ(21,"Traveler screw (top)",B.aPQ,y.X,!1,"hot")
B.bI9=new A.fJ(22,"Traveler screw (bottom)",B.aPQ,y.X,!1,"hot")
B.cVQ=w([B.w4,B.bHP,B.bHV,B.bI9],x.r)
B.dyN=new A.i8(-60,60,28,50)
B.dyJ=new A.i8(-150,-100,70,170)
B.dym=new A.i8(100,150,70,170)
B.dyO=new A.i8(-60,-20,156,186)
B.dyr=new A.i8(20,60,156,186)
B.cW4=w([B.dyN,B.dyJ,B.dym,B.dyO,B.dyr],x.T)
B.cW6=w([y.O,"The cable comes in through the top of the box. Strip about 3/4 inch of insulation from each wire.","Fasten the bare copper ground wire to the GREEN screw.","Fasten the white (neutral) wire to a SILVER screw.","Fasten the black (hot) wire to a BRASS screw. Wrap each wire clockwise under its screw.","Fold the wires back and push the outlet into the box.","Put the cover plate on, then turn the power on and test."],x.s)
B.ha5=new A.r(-3.6,7.5,-7.85)
B.h2j=new A.r(-3.6,4.2,-7.85)
B.cWe=w([B.ha5,B.h2j],x.o)
B.cWg=w([-0.5,-0.25,0,0.25,0.5],x.n)
B.eRn=new C.bj(600,400,!0)
B.eQV=new C.bj(1030,400,!0)
B.eQW=new C.bj(1210,400,!0)
B.cWK=w([B.eRn,B.eQV,B.eQW],C.av("O<+(L,L,R)>"))
B.cWZ=w([0,2,1,3,4,6,7,8],x.t)
B.eS0=new C.bj(-0.1,0,0.5)
B.eTS=new C.bj(0.35,-0.4,0.3)
B.eSP=new C.bj(-0.4,0.55,0.35)
B.cX4=w([B.eS0,B.eTS,B.eSP],C.av("O<+(L,L,L)>"))
B.eKM=new C.z(-1050,"store")
B.aOu=new C.z(-840,"tower")
B.eLm=new C.z(-630,"tower")
B.eLc=new C.z(-420,"gasstation")
B.aOt=new C.z(-210,"tower")
B.erG=new C.z(0,"hq")
B.aOh=new C.z(210,"tower")
B.etP=new C.z(420,"store")
B.evY=new C.z(630,"tower")
B.aOj=new C.z(840,"tower")
B.erW=new C.z(1050,"gasstation")
B.cXF=w([B.eKM,B.aOu,B.eLm,B.eLc,B.aOt,B.erG,B.aOh,B.etP,B.evY,B.aOj,B.erW],x.d6)
B.a3O=w(["Always switch the breaker OFF and test the wires with a tester before you touch them.","Never use water on an electrical fire: switch the power off at the breaker first.","Reversed hot and neutral can look fine and still be a shock hazard.","A GFCI outlet protects you near water: press TEST every month.","A ceiling fan needs a fan-rated box, because it is heavy and it shakes."],x.s)
B.h72=new A.r(9.8,6,-7.85)
B.h1u=new A.r(9.8,7.5,-7.85)
B.har=new A.r(-8,7.5,-7.85)
B.h43=new A.r(-8,1.5,-7.85)
B.cXS=w([B.h72,B.h1u,B.har,B.h43],x.o)
B.bgS=new C.u(1,0.5411764705882353,0.35294117647058826,0.23529411764705882,D.q)
B.aeV=new C.u(1,0.10588235294117647,0.07058823529411765,0.06274509803921569,D.q)
B.br8=new C.u(1,0.8509803921568627,0.27450980392156865,0.49411764705882355,D.q)
B.adJ=new C.u(1,0.23137254901960785,0.24705882352941178,0.3607843137254902,D.q)
B.eo0=new A.rG(B.bgS,B.aeV,B.br8,B.adJ,"xbot")
B.eZ8=new A.Fj(0,"Ama",0,2,B.eo0,"A nurse who works nights.")
B.biX=new C.u(1,0.4196078431372549,0.27058823529411763,0.18823529411764706,D.q)
B.bg2=new C.u(1,0.08627450980392157,0.06274509803921569,0.06274509803921569,D.q)
B.bow=new C.u(1,0.1803921568627451,0.5607843137254902,0.3568627450980392,D.q)
B.eo2=new A.rG(B.biX,B.bg2,B.bow,B.Ll,"soldier")
B.eZ9=new A.Fj(1,"Joseph",1,2,B.eo2,"A student who is always hungry.")
B.bmx=new C.u(1,0.6274509803921569,0.4196078431372549,0.2784313725490196,D.q)
B.bha=new C.u(1,0.2901960784313726,0.24705882352941178,0.4196078431372549,D.q)
B.enZ=new A.rG(B.bmx,B.LT,D.aD,B.bha,"xbot")
B.eZ7=new A.Fj(2,"Grace",3,4,B.enZ,"A teacher who marks papers late.")
B.adX=new C.u(1,0.8784313725490196,0.6431372549019608,0.48627450980392156,D.q)
B.ahX=new C.u(1,0.1843137254901961,0.43529411764705883,0.7098039215686275,D.q)
B.eo_=new A.rG(B.adX,D.afY,B.ahX,B.Ll,"soldier")
B.eZ4=new A.Fj(3,"Daniel",6,8,B.eo_,"A driver who sleeps in the day.")
B.bp9=new C.u(1,0.788235294117647,0.5450980392156862,0.3686274509803922,D.q)
B.bhm=new C.u(1,0.16862745098039217,0.17647058823529413,0.22745098039215686,D.q)
B.eo3=new A.rG(B.bp9,B.aeV,D.aC,B.bhm,"xbot")
B.eZa=new A.Fj(4,"Fatima",7,8,B.eo3,"A baker who gets up at four.")
B.ahO=new C.u(1,0.47843137254901963,0.29411764705882354,0.18823529411764706,D.q)
B.bnF=new C.u(1,0.24705882352941178,0.22745098039215686,0.2,D.q)
B.eo4=new A.rG(B.ahO,D.e3,D.d1,B.bnF,"soldier")
B.eZ6=new A.Fj(5,"Papa Moses",10,-1,B.eo4,"The oldest in the house. He watches TV all day.")
B.bll=new C.u(1,0.5490196078431373,0.3568627450980392,0.23137254901960785,D.q)
B.enY=new A.rG(B.bll,B.afO,D.aw,B.adJ,"xbot")
B.eZ5=new A.Fj(6,"Mama Rose",9,-1,B.enY,"Cooks for everybody in the kitchen.")
B.CI=w([B.eZ8,B.eZ9,B.eZ7,B.eZ4,B.eZa,B.eZ6,B.eZ5],C.av("O<Fj>"))
B.aWa=new A.r(5,1.8,-7.85)
B.h51=new A.r(5,-0.1,-7.85)
B.h61=new A.r(12.5,-0.1,-7.85)
B.cYY=w([B.aWa,B.h51,B.h61],x.o)
B.lH=w(["outlet","gfci","split","v240four","v240three","v240only","isolated"],x.s)
B.fUe=new A.r(3,3.1,-7.1)
B.aW2=new A.r(3,1.7,-7.1)
B.h5X=new A.r(3,1,-7.1)
B.fYE=new A.r(3.65,0.5,-7.1)
B.h_u=new A.r(4.3,1,-7.1)
B.h4X=new A.r(4.3,1.8,-7.1)
B.hau=new A.r(5,1.8,-7.1)
B.cZq=w([B.fUe,B.aW2,B.h5X,B.fYE,B.h_u,B.h4X,B.hau,B.aWa],x.o)
B.alQ=new A.fJ(23,"Silver screw W: NEUTRAL",B.Jm,y.I,!1,"neutral")
B.ecH={hot1:0,hot2:1}
B.TM=new C.dD(B.ecH,2,x.M)
B.bHB=new A.fJ(21,"Brass screw X: HOT",B.TM,y.l,!1,"hot")
B.bIf=new A.fJ(22,"Brass screw Y: HOT",B.TM,y.l,!1,"hot")
B.cZB=w([B.w4,B.alQ,B.bHB,B.bIf],x.r)
B.cZW=w(["My outlet is dead and it is dark in here. Please come and wire it.","The light in my room does not work, and my phone will not charge. Can you fix the wiring?","I have no power in my room at all. Can an electrician come?"],x.s)
B.eVA=new C.cw([-0.35,-0.2,0.42,0.3])
B.eVN=new C.cw([0.3,0.25,0.32,0.38])
B.eUD=new C.cw([0.05,-0.55,0.22,0.14])
B.eV5=new C.cw([-0.5,0.45,0.2,0.16])
B.d_7=w([B.eVA,B.eVN,B.eUD,B.eV5],x.eV)
B.d_8=w([D.aw,D.be,D.aD,D.d2,D.bO,D.f4],x.O)
B.h9L=new A.r(0.6,11,-3.4)
B.h0n=new A.r(0.6,3.2,-3.2)
B.h9e=new A.r(0.6,2.2,-1.9)
B.h0_=new A.r(0.6,0.7,-1.5)
B.d_w=w([B.h9L,B.h0n,B.h9e,B.h0_],x.o)
B.d_I=w([0,24,-24,48,-48],x.n)
B.Kp=new A.jz("neutral","White \xb7 neutral",B.oO,D.au,"neutral")
B.hcf=new A.jz("line","Black \xb7 hot from the panel (LINE)",B.tL,D.c,"hot")
B.hcx=new A.jz("load","Black \xb7 hot to the light (LOAD)",B.M_,D.c,"hot")
B.d_V=w([B.te,B.Kp,B.hcf,B.hcx],x.d)
B.d0c=w([y.O,y.x,y.R,"Fasten the white NEUTRAL wire to the NEUTRAL (silver) screw. A regular switch never touches the neutral, this one does.","Fasten the black wire from the panel to the LINE screw.","Fasten the black wire that goes to the light to the LOAD screw.",y.b,y.n],x.s)
B.eLt=new C.z(-700,330)
B.ewj=new C.z(700,380)
B.eKO=new C.z(-1100,-420)
B.es1=new C.z(1100,-480)
B.eKU=new C.z(-1300,100)
B.es8=new C.z(1350,30)
B.erH=new C.z(0,-900)
B.eKV=new C.z(-1500,-300)
B.es9=new C.z(1550,-200)
B.d0f=w([B.eLt,B.ewj,B.eKO,B.es1,B.eKU,B.es8,B.erH,B.eKV,B.es9],x.f)
B.d0l=w([T.qB,A3.Tp,R.lk],x.f)
B.hnE=new A.pw(0,-64,120,26)
B.hnH=new A.pw(1,64,120,26)
B.hnM=new A.pw(2,0,84,24)
B.d0T=w([B.hnE,B.hnH,B.hnM],x.X)
B.fZy=new A.r(0,8.3,0)
B.aVD=new A.r(0,3.9,0)
B.a3Y=w([B.fZy,B.aVD],x.o)
B.d19=w([y.O,"Make sure the box is rated for a fan. A plain light box cannot carry the weight and the shaking.","Join the house ground wire to the fan ground.","Join the house white wire to the fan white wire with a wire nut.","Join the house black wire to the fan black wire with a wire nut.","Push the wires up into the box and fasten the canopy to the ceiling.",y.f],x.s)
B.eJP=new C.z(-3.5,11)
B.ezm=new C.z(3.5,11)
B.exB=new C.z(-3.5,-11)
B.eva=new C.z(3.5,-11)
B.d1s=w([B.eJP,B.ezm,B.exB,B.eva],x.f)
B.h7p=new A.r(-0.6,11,-3.4)
B.h1B=new A.r(-0.6,3.2,-3.2)
B.h6s=new A.r(-0.6,2.2,-1.9)
B.haO=new A.r(-0.6,0.7,-1.5)
B.d1t=w([B.h7p,B.h1B,B.h6s,B.haO],x.o)
B.HJ=w(["dog","cat","cow","sheep","chicken","horse"],x.s)
B.eGR=new C.z(-1.2,0)
B.ePI=new C.z(1.2,0)
B.d27=w([B.eGR,B.ePI],x.f)
B.d2A=w([40,70,100,130,160],x.n)
B.bHR=new A.fJ(23,"NEUTRAL screw (silver)",B.Jm,"The electronics inside need the neutral wire to run. White goes on the silver screw.",!1,"neutral")
B.ecX={line:0}
B.f1i=new C.dD(B.ecX,1,x.M)
B.bI2=new A.fJ(21,"LINE screw (brass, hot in)",B.f1i,"The black wire from the breaker panel goes on the LINE screw.",!1,"hot")
B.ed0={load:0}
B.f0r=new C.dD(B.ed0,1,x.M)
B.bI5=new A.fJ(22,"LOAD screw (brass, hot out)",B.f0r,"The black wire that goes to the light goes on the LOAD screw.",!1,"hot")
B.d2K=w([B.w4,B.bHR,B.bI2,B.bI5],x.r)
B.ej6=new A.nq("flange","flange","Toilet flange",D.Z,"The flange is fixed to the floor over the drain. Everything else sits on it.",!1,0)
B.dfW=w(["flange"],x.s)
B.ej4=new A.nq("wax","wax","Wax ring",B.dfW,"The wax ring goes on the flange before the toilet. It makes the seal against sewer gas and water.",!1,0)
B.dqY=w(["wax"],x.s)
B.ej1=new A.nq("toilet","toilet","Toilet",B.dqY,"The toilet is lowered straight down onto the wax ring. The ring has to be there first.",!1,0)
B.dpf=w(["toilet"],x.s)
B.ej5=new A.nq("bolts","bolts","Toilet bolts",B.dpf,"The two bolts hold the toilet to the flange. Set the toilet first.",!1,2)
B.ej2=new A.nq("tvalve","valve","Toilet shut-off valve",D.Z,"The shut-off valve goes on the pipe that comes out of the wall.",!0,0)
B.dpm=w(["tvalve","toilet"],x.s)
B.ej3=new A.nq("those","hosecold","Toilet supply hose",B.dpm,"The hose joins the valve to the toilet tank, so both must be there first.",!1,2)
B.aJt=new A.nq("faucet","faucet","Faucet",D.Z,"The faucet goes through the hole in the counter.",!1,0)
B.aJw=new A.nq("vhot","valve","Hot shut-off valve (left)",D.Z,y.W,!0,0)
B.aJu=new A.nq("vcold","valve","Cold shut-off valve (right)",D.Z,y.W,!0,0)
B.dqm=w(["vhot","faucet"],x.s)
B.aJx=new A.nq("hhot","hosehot","Hot supply hose",B.dqm,"The hose joins the hot valve to the faucet, so the valve and the faucet must be there first.",!1,2)
B.dqj=w(["vcold","faucet"],x.s)
B.aJv=new A.nq("hcold","hosecold","Cold supply hose",B.dqj,"The hose joins the cold valve to the faucet, so the valve and the faucet must be there first.",!1,2)
B.aJs=new A.nq("tail","tail","Tailpiece",D.Z,"The tailpiece hangs from the sink drain. It is the first piece of the drain.",!1,0)
B.dp8=w(["tail"],x.s)
B.aJy=new A.nq("trap","trap","P-trap",B.dp8,"The P-trap joins the tailpiece. Build the drain from the top down.",!1,1)
B.dpg=w(["trap"],x.s)
B.aJz=new A.nq("arm","arm","Trap arm",B.dpg,"The trap arm joins the trap and goes into the wall.",!1,1)
B.cYq=w([B.ej6,B.ej4,B.ej1,B.ej5,B.ej2,B.ej3,B.aJt,B.aJw,B.aJu,B.aJx,B.aJv,B.aJs,B.aJy,B.aJz],x.fI)
B.eoS=new A.X5("bathroom","Bathroom",B.cYq,"Fit out a bathroom: a toilet and a sink with its faucet, supply hoses and drain.")
B.dhR=w([B.aJt,B.aJw,B.aJu,B.aJx,B.aJv,B.aJs,B.aJy,B.aJz],x.fI)
B.eoT=new A.X5("kitchen","Kitchen",B.dhR,"Fit out a kitchen sink: the faucet, the hot and cold supplies and the drain.")
B.ay8=w([B.eoS,B.eoT],C.av("O<X5>"))
B.eLD=new C.z(-900,400)
B.ex4=new C.z(900,400)
B.eLB=new C.z(-900,1000)
B.ex2=new C.z(900,1000)
B.eL3=new C.z(-300,1260)
B.eth=new C.z(300,1260)
B.eKK=new C.z(-1000,700)
B.erT=new C.z(1000,700)
B.eLn=new C.z(-640,90)
B.evZ=new C.z(640,90)
B.eLC=new C.z(-900,1400)
B.ex3=new C.z(900,1400)
B.d3e=w([B.eLD,B.ex4,B.eLB,B.ex2,B.eL3,B.eth,B.eKK,B.erT,B.eLn,B.evZ,B.eLC,B.ex3],x.f)
B.fUb=new A.r(8.2,0.9,-6.3)
B.h6E=new A.r(8.2,-0.1,-6.3)
B.fXY=new A.r(8.2,-0.1,-7.85)
B.d3S=w([B.fUb,B.h6E,B.fXY],x.o)
B.evV=new C.z(-4.5,10)
B.eMt=new C.z(4.5,10)
B.ePG=new C.z(-4.5,-10)
B.eMp=new C.z(4.5,-10)
B.d43=w([B.evV,B.eMt,B.ePG,B.eMp],x.f)
B.d44=w([-0.28,0.28],x.n)
B.dyQ=new A.i8(-70,70,20,44)
B.dyB=new A.i8(-110,-50,80,100)
B.dyw=new A.i8(50,110,80,100)
B.dyA=new A.i8(-110,-50,130,150)
B.dyv=new A.i8(50,110,130,150)
B.d4h=w([B.dyQ,B.dyB,B.dyw,B.dyA,B.dyv],x.T)
B.d4x=w([D.aw,D.aD,D.be,D.ms,D.d2,D.cc,D.f4],x.O)
B.eFh=new C.z("back","Back wall")
B.ePr=new C.z("left","Left wall")
B.eHt=new C.z("right","Right wall")
B.d4Z=w([B.eFh,B.ePr,B.eHt],x.L)
B.ecn={black:0}
B.Jn=new C.dD(B.ecn,1,x.M)
B.bHI=new A.fJ(51,"Black wire nut: HOT",B.Jn,"The house black wire joins the fixture black wire.",!1,"hot")
B.edu={white:0}
B.Jk=new C.dD(B.edu,1,x.M)
B.bIc=new A.fJ(52,"White wire nut: NEUTRAL",B.Jk,"The house white wire joins the fixture white wire.",!1,"neutral")
B.bHD=new A.fJ(53,"Green ground connection",B.Jl,"The bare copper house ground joins the green fixture ground wire.",!1,"ground")
B.d59=w([B.bHI,B.bIc,B.bHD],x.r)
B.eL9=new C.z(-34,-6)
B.etj=new C.z(30,10)
B.eKN=new C.z(-10,24)
B.d5e=w([B.eL9,B.etj,B.eKN],x.f)
B.d5l=w([y.O,y.x,y.R,"Fasten hot leg 1 from the panel (black) to the top LEFT screw.","Fasten hot leg 2 from the panel (red) to the top RIGHT screw.","Fasten hot leg 1 to the heater (black) to the bottom LEFT screw.","Fasten hot leg 2 to the heater (red) to the bottom RIGHT screw.",y.b,y.n],x.s)
B.bGc=new A.E_("Oak",B.Bk,"wood")
B.bGe=new A.E_("Dark wood",B.q0,"wood")
B.ahP=new C.u(1,0.5529411764705883,0.5647058823529412,0.5882352941176471,D.q)
B.bGg=new A.E_("Grey carpet",B.ahP,"carpet")
B.bp2=new C.u(1,0.3568627450980392,0.4980392156862745,0.6509803921568628,D.q)
B.bGd=new A.E_("Blue carpet",B.bp2,"carpet")
B.bmt=new C.u(1,0.8470588235294118,0.803921568627451,0.7058823529411765,D.q)
B.bGa=new A.E_("Cream carpet",B.bmt,"carpet")
B.bGf=new A.E_("White tile",B.XL,"tile")
B.bGb=new A.E_("Slate tile",B.aex,"tile")
B.ayu=w([B.bGc,B.bGe,B.bGg,B.bGd,B.bGa,B.bGf,B.bGb],C.av("O<E_>"))
B.aax=new A.jz("hot1","Black \xb7 hot 1",B.tL,D.c,"hot")
B.AT=new C.u(1,0.8196078431372549,0.29411764705882354,0.22745098039215686,D.q)
B.aay=new A.jz("hot2","Red \xb7 hot 2",B.AT,D.c,"hot")
B.d65=w([B.Kp,B.aax,B.aay],x.d)
B.eRs=new C.bj(-80,100,D.aw)
B.eTl=new C.bj(80,100,D.be)
B.eSu=new C.bj(-80,150,D.aD)
B.d67=w([B.eRs,B.eTl,B.eSu],x.dV)
B.hnA=new A.pw(0,0,78,26)
B.d6f=w([B.hnA],x.X)
B.edl={store:0,gasstation:1}
B.f1k=new C.dD(B.edl,2,x.M)
B.btC=new A.z8("food","\ud83c\udf54","Food",B.f1k)
B.edi={shop:0,store:1}
B.f0U=new C.dD(B.edi,2,x.M)
B.btB=new A.z8("groceries","\ud83d\uded2","Groceries",B.f0U)
B.ecG={hospital:0}
B.f0P=new C.dD(B.ecG,1,x.M)
B.btE=new A.z8("medicine","\ud83d\udc8a","Medicine",B.f0P)
B.ecJ={hq:0,tower:1}
B.f1g=new C.dD(B.ecJ,2,x.M)
B.btA=new A.z8("package","\ud83d\udce6","Package",B.f1g)
B.ebS={school:0,firestation:1,hq:2}
B.f0C=new C.dD(B.ebS,3,x.M)
B.btD=new A.z8("letters","\u2709\ufe0f","Letters",B.f0C)
B.QR=w([B.btC,B.btB,B.btE,B.btA,B.btD],C.av("O<z8>"))
B.d6u=w([y.O,y.x,"Fasten the white neutral to a SILVER screw.","Fasten the black hot to a BRASS screw.","Fasten the green wire with the yellow stripe (the isolated ground, which runs all the way to the panel) to the GREEN screw with the orange triangle. The box itself is grounded with its own bare copper wire.",y.b,y.n],x.s)
B.d6B=w([-1000,-500,0,500,1000],x.n)
B.h6t=new A.r(3,3.2,-7.85)
B.haQ=new A.r(3,4,-7.85)
B.ha6=new A.r(3,4.2,-7.4)
B.fWk=new A.r(3,3.95,-7)
B.d7A=w([B.h6t,B.haQ,B.ha6,B.fWk],x.o)
B.d7C=w(["The sink leaks and there is water on the floor. Please fix the plumbing.","The toilet is not connected and the water is running everywhere. Help!","There is no water at my sink and the pipes are open. Can a plumber come?"],x.s)
B.Xb=new C.u(1,0.23137254901960785,0.3568627450980392,0.47843137254901963,D.q)
B.d7N=w([D.al,B.Xb,D.bL,D.bs],x.O)
B.f1P=new A.rK("apple","\ud83c\udf4e","Apple","A little energy",3,0.12,0,0.1,!1)
B.f1Q=new A.rK("water","\ud83d\udca7","Water","Quenches your thirst",2,0,0,0.8,!1)
B.f1R=new A.rK("juice","\ud83e\udd64","Juice","Some energy and a drink",4,0.18,0,0.5,!1)
B.f1W=new A.rK("sandwich","\ud83e\udd6a","Sandwich","A good bit of energy",6,0.3,0,0,!1)
B.f1O=new A.rK("meal","\ud83c\udf54","Burger meal","Lots of energy",10,0.55,0,0,!1)
B.d7Q=w([B.f1P,B.f1Q,B.f1R,B.f1W,B.f1O],x.y)
B.eLo=new C.z(-660,340)
B.eL6=new C.z(-330,340)
B.etk=new C.z(330,340)
B.ew0=new C.z(660,340)
B.eLp=new C.z(-660,500)
B.eL7=new C.z(-330,500)
B.etl=new C.z(330,500)
B.ew1=new C.z(660,500)
B.eLq=new C.z(-660,780)
B.eL8=new C.z(-330,780)
B.etn=new C.z(330,780)
B.ew2=new C.z(660,780)
B.eLh=new C.z(-500,940)
B.evv=new C.z(500,940)
B.d8s=w([B.eLo,B.eL6,B.etk,B.ew0,B.eLp,B.eL7,B.etl,B.ew1,B.eLq,B.eL8,B.etn,B.ew2,B.eLh,B.evv],x.f)
B.h76=new A.r(6,0.2,0)
B.h5r=new A.r(6,2.6,0)
B.aWE=new A.r(8.6,2.6,0)
B.d8W=w([B.h76,B.h5r,B.aWE],x.o)
B.d9r=w([D.c,D.ds,D.ep,D.eU,D.bN,D.bM],x.O)
B.eLx=new C.z(-7,-7)
B.ewz=new C.z(7,-7)
B.eLw=new C.z(-7,7)
B.ewy=new C.z(7,7)
B.d9G=w([B.eLx,B.ewz,B.eLw,B.ewy],x.f)
B.d9I=w([-2.4,2.4],x.n)
B.d9J=w([-0.5,0,0.5],x.n)
B.alP=new A.fJ(21,"Brass screw X: HOT",B.TM,y.p,!1,"hot")
B.alN=new A.fJ(22,"Brass screw Y: HOT",B.TM,y.p,!1,"hot")
B.d9U=w([B.w4,B.alP,B.alN],x.r)
B.hcC=new A.PD("Black","Hot (line or switched)","Brass terminal","120 V branch circuit","Carries the power from the breaker. Treat it as live until it is tested dead.","Can be a traveler in a three-way switch, or a switched hot. Verify with a tester.")
B.hcA=new A.PD("Red","Hot (second hot or traveler)","Brass or the marked traveler terminal","Switch legs, travelers, fan and light controls","Often the switched wire to a fan or light, or a traveler.","Check the diagram: red can be a traveler or a second circuit.")
B.hcz=new A.PD("White","Neutral","Silver terminal","120 V branch circuit","The return path for the current. It can still be live if something is wrong.","In a switch loop a white wire can be re-marked as a hot. A white wire is not always neutral.")
B.hcy=new A.PD("Bare copper or green","Equipment ground","Green screw or the ground lead","Every grounded device","Not for current in normal use. It is the safety path if a fault happens.","Never use the neutral as a ground. Older homes may have no ground at all: that needs verification.")
B.hcB=new A.PD("Gray / blue / others","Depends on the installation","See the device diagram","Low voltage, control wires, other systems","Do not guess what a wire does from its color.","Colors and their meaning are not the same everywhere. REQUIRES VERIFICATION.")
B.d9Y=w([B.hcC,B.hcA,B.hcz,B.hcy,B.hcB],C.av("O<PD>"))
B.QZ=w([-1.6,1.6],x.n)
B.hcd=new A.jz("blackLine","Black \xb7 from the breaker",B.tL,D.c,"hot")
B.hcu=new A.jz("blackLoad","Black \xb7 to the light",B.M_,D.c,"hot")
B.da6=w([B.hcd,B.hcu,B.te],x.d)
B.dao=w([0,10,22,36,52],x.n)
B.hnD=new A.pw(0,-60,130,26)
B.hnI=new A.pw(1,80,56,22)
B.dap=w([B.hnD,B.hnI],x.X)
B.daP=w([D.bo,D.bG,D.aw,D.aQ,D.bs],x.O)
B.ecO={isoground:0}
B.f0v=new C.dD(B.ecO,1,x.M)
B.bIb=new A.fJ(25,"Isolated-ground screw (green, orange triangle)",B.f0v,"The dedicated ground wire goes on the green screw with the orange triangle. It does not touch the box or the strap.",!1,"ground")
B.bI4=new A.fJ(23,"Silver screw: NEUTRAL",B.Jm,y.c,!1,"neutral")
B.ecI={hot:0}
B.a8g=new C.dD(B.ecI,1,x.M)
B.bHM=new A.fJ(21,"Brass screw: HOT",B.a8g,y.u,!1,"hot")
B.db_=w([B.bIb,B.bI4,B.bHM],x.r)
B.bdw=new C.u(1,0.9294117647058824,0.9019607843137255,0.8392156862745098,D.q)
B.bbw=new C.u(1,0.9137254901960784,0.8274509803921568,0.8274509803921568,D.q)
B.baH=new C.u(1,0.8352941176470589,0.8941176470588236,0.8156862745098039,D.q)
B.ag2=new C.u(1,0.9529411764705882,0.8901960784313725,0.6549019607843137,D.q)
B.bgj=new C.u(1,0.7254901960784313,0.7647058823529411,0.8666666666666667,D.q)
B.bpb=new C.u(1,0.5607843137254902,0.6392156862745098,0.6588235294117647,D.q)
B.ayL=w([B.bdw,B.Xw,B.bbw,B.baH,B.ag2,B.bgj,B.ag7,B.bpb],x.O)
B.ecm={blackLine:0,blackLoad:1}
B.aPz=new C.dD(B.ecm,2,x.M)
B.bHS=new A.fJ(21,"Brass screw (top)",B.aPz,y.v,!1,"hot")
B.bHE=new A.fJ(22,"Brass screw (bottom)",B.aPz,y.v,!1,"hot")
B.alO=new A.fJ(25,"Green screw: GROUND",B.Jl,y.Z,!1,"ground")
B.dbA=w([B.bHS,B.bHE,B.alO],x.r)
B.eLz=new C.z(-80,90)
B.ewN=new C.z(80,90)
B.eLy=new C.z(-80,140)
B.ewM=new C.z(80,140)
B.dch=w([B.eLz,B.ewN,B.eLy,B.ewM],x.f)
B.bId=new A.fJ(51,"Black wire nut: HOT",B.Jn,"The house black wire joins the fan black wire.",!1,"hot")
B.bHC=new A.fJ(52,"White wire nut: NEUTRAL",B.Jk,"The house white wire joins the fan white wire.",!1,"neutral")
B.bHZ=new A.fJ(53,"Green ground connection",B.Jl,"The bare copper house ground joins the green fan ground wire.",!1,"ground")
B.dco=w([B.bId,B.bHC,B.bHZ],x.r)
B.bas=new A.Sp("bus",-575,-25,0,1)
B.bau=new A.Sp("police",-575,-25,854,5)
B.bat=new A.Sp("bus",25,575,850,3)
B.bav=new A.Sp("police",25,575,1704,6)
B.kk=w([B.bas,B.bau,B.bat,B.bav],C.av("O<Sp>"))
B.alx=new A.rf(4,"deadOutlet")
B.dcw=w([B.a09,B.a0a,B.NF,B.NG,B.alx,B.a0d,B.a0e,B.a0f,B.a0g,B.a0h,B.a0b,B.a0c],C.av("O<rf>"))
B.eUw=new C.cw([0,560,240,7])
B.eUx=new C.cw([0,560,300,9])
B.a4b=w([B.eUw,B.eUx],C.av("O<+(L,L,L,H)>"))
B.hcs=new A.jz("always","Black \xb7 always hot (from the panel)",B.tL,D.c,"hot")
B.hcl=new A.jz("switched","Red \xb7 switched hot (from the wall switch)",B.AT,D.c,"hot")
B.dcX=w([B.te,B.Kp,B.hcs,B.hcl],x.d)
B.dd0=w([y.O,"Find the LINE and LOAD screws. LOAD is covered with yellow tape. Leave it covered unless you feed another outlet.",y.R,"Fasten the white wire to the silver LINE screw.","Fasten the black wire to the brass LINE screw.","Push the GFCI into the box and put the plate on.","Turn the power on, press RESET, then press TEST. It must click off."],x.s)
B.dd3=w([y.O,y.x,y.R,"Fasten the black wire (power in, or to the light) to the COMMON screw: the odd-coloured one.","Fasten the first traveler (red) to a TRAVELER screw.","Fasten the second traveler (white wire taped black) to the other TRAVELER screw.",y.b,y.n],x.s)
B.hnB=new A.pw(0,0,80,26)
B.hnK=new A.pw(1,90,56,22)
B.ddm=w([B.hnB,B.hnK],x.X)
B.ddw=w(["car","ambulance","firetruck"],x.s)
B.dyP=new A.i8(-62,62,6,46)
B.dyC=new A.i8(-117,-73,149,171)
B.dyM=new A.i8(-57,-13,164,186)
B.dyx=new A.i8(73,117,159,181)
B.dyp=new A.i8(120,144,140,160)
B.dyn=new A.i8(108,142,48,60)
B.ddB=w([B.dyP,B.dyC,B.dyM,B.dyx,B.dyp,B.dyn],x.T)
B.ddF=w([0.1,8.05],x.n)
B.fWo=new A.r(1000,900,1500)
B.fUX=new A.r(0,200,0)
B.aOs=new C.z(B.fWo,B.fUX)
B.fYU=new A.r(300,70,1000)
B.fVh=new A.r(0,250,300)
B.eFz=new C.z(B.fYU,B.fVh)
B.h85=new A.r(-200,90,780)
B.fVd=new A.r(0,240,300)
B.eBz=new C.z(B.h85,B.fVd)
B.h8t=new A.r(-420,520,1000)
B.fVb=new A.r(0,230,300)
B.exb=new C.z(B.h8t,B.fVb)
B.h05=new A.r(700,330,900)
B.fYS=new A.r(300,230,200)
B.eKi=new C.z(B.h05,B.fYS)
B.fWH=new A.r(1100,80,300)
B.h_f=new A.r(560,250,0)
B.eJh=new C.z(B.fWH,B.h_f)
B.fWx=new A.r(1080,100,-250)
B.h_e=new A.r(560,240,-100)
B.eNb=new C.z(B.fWx,B.h_e)
B.fWn=new A.r(1000,700,-700)
B.fY2=new A.r(200,230,-300)
B.ePn=new C.z(B.fWn,B.fY2)
B.fY3=new A.r(200,90,-860)
B.fVj=new A.r(0,250,-300)
B.eLO=new C.z(B.fY3,B.fVj)
B.h8d=new A.r(-300,110,-820)
B.fVe=new A.r(0,240,-300)
B.eCa=new C.z(B.h8d,B.fVe)
B.h8Y=new A.r(-900,600,-600)
B.h8e=new A.r(-300,230,-100)
B.eAL=new C.z(B.h8Y,B.h8e)
B.h7P=new A.r(-1100,90,-200)
B.h8z=new A.r(-560,250,0)
B.ePl=new C.z(B.h7P,B.h8z)
B.h7O=new A.r(-1100,120,250)
B.h8y=new A.r(-560,240,0)
B.eF_=new C.z(B.h7O,B.h8y)
B.h8I=new A.r(-700,520,1000)
B.h7L=new A.r(-100,230,100)
B.eyL=new C.z(B.h8I,B.h7L)
B.fY1=new A.r(200,170,1300)
B.fVa=new A.r(0,230,150)
B.eP7=new C.z(B.fY1,B.fVa)
B.ddV=w([B.aOs,B.eFz,B.eBz,B.exb,B.eKi,B.eJh,B.eNb,B.ePn,B.eLO,B.eCa,B.eAL,B.ePl,B.eF_,B.eyL,B.eP7,B.aOs],x.dt)
B.h3q=new A.r(-0.35,11,-3.4)
B.h1L=new A.r(-0.35,3.2,-3.2)
B.h5z=new A.r(-0.35,2.2,-1.9)
B.h_U=new A.r(-0.35,0.7,-1.5)
B.ddW=w([B.h3q,B.h1L,B.h5z,B.h_U],x.o)
B.h9Y=new A.r(5.2,7.5,-7.85)
B.h5m=new A.r(5.2,4,-7.85)
B.de1=w([B.h9Y,B.h5m],x.o)
B.bHL=new A.fJ(21,"LOAD hot (brass, taped)",D.v6,y.P,!0,"load")
B.bHO=new A.fJ(22,"LINE hot (brass)",B.Jn,"The black (hot) wire from the breaker goes on the brass LINE screw.",!1,"hot")
B.bHK=new A.fJ(23,"LOAD neutral (silver, taped)",D.v6,y.P,!0,"load")
B.bHW=new A.fJ(24,"LINE neutral (silver)",B.Jk,"The white (neutral) wire from the breaker goes on the silver LINE screw.",!1,"neutral")
B.det=w([B.bHL,B.bHO,B.bHK,B.bHW,B.alO],x.r)
B.aWo=new A.r(0,15.5,-3.6)
B.h3F=new A.r(0,20,-3.6)
B.haz=new A.r(0,22.5,-2)
B.h1j=new A.r(0,22.5,1.1999999999999997)
B.h3P=new A.r(0,21.1,1.6)
B.dez=w([B.aWo,B.h3F,B.haz,B.h1j,B.h3P],x.o)
B.dfa=w([],x.bm)
B.HS=w([],x.B)
B.df9=w([],x.dI)
B.zk=w([],x.E)
B.dfb=w([],x.T)
B.azg=w([],x.z)
B.azc=w([],x.e3)
B.wu=w([],x.a)
B.azb=w([],x.W)
B.rC=w([],x.o)
B.azf=w([],x.h)
B.aze=w([],x.f)
B.hh4=new A.pt("outlet","\ud83d\udd0c","Wall outlet","Black to brass, white to silver",D.aD)
B.hgZ=new A.pt("switch","\ud83d\udca1","Light switch","Two blacks and a wire nut",D.aQ)
B.hh_=new A.pt("gfci","\ud83d\udee1\ufe0f","GFCI outlet","LINE and LOAD near water",D.bt)
B.hh5=new A.pt("fan","\ud83c\udf00","Ceiling fan","Black, white, green and a fan box",D.b9)
B.hgU=new A.pt("switch2p","\ud83d\udd25","Double-pole switch","240 V: breaks both hot legs",D.id)
B.hh0=new A.pt("switch3","\ud83d\udd00","Three-way switch","Common and two travelers",D.aQ)
B.hh9=new A.pt("switch4","\ud83d\udd01","Four-way switch","Between two three-ways",D.cp)
B.hh8=new A.pt("switchsmart","\ud83d\udcf6","Smart, motion or timer switch","Needs the neutral wire",D.bv)
B.hh1=new A.pt("switchcombo","\ud83c\udf9a\ufe0f","Combination switch","Two switches, one feed",D.iM)
B.hgX=new A.pt("split","\ud83c\udf17","Split (half-switched) outlet","Break the tab: switched and always-on",D.aT)
B.hh6=new A.pt("v240four","\ud83e\uddfa","4-wire 240 V outlet","Dryer, range and EV: two hots, neutral, ground",D.cs)
B.hh7=new A.pt("v240three","\ud83d\udd70\ufe0f","3-wire 240 V outlet","Old dryer or range: no separate ground",D.cT)
B.hgW=new A.pt("v240only","\u2744\ufe0f","240 V only outlet","Window AC, welder: two hots and ground",D.b9)
B.hh2=new A.pt("isolated","\ud83c\udfed","Isolated-ground outlet","Its own ground wire to the panel",D.bt)
B.hh3=new A.pt("ptrap","\ud83e\udea0","Sink drain (P-trap)","Build a drain with a water seal",D.cp)
B.hgY=new A.pt("faucet","\ud83d\udeb0","Faucet supply lines","Hot left, cold right",D.cs)
B.hgV=new A.pt("house","\ud83c\udfd7\ufe0f","Build and fix a house","Stage by stage, then repair",D.bv)
B.dfq=w([B.hh4,B.hgZ,B.hh_,B.hh5,B.hgU,B.hh0,B.hh9,B.hh8,B.hh1,B.hgX,B.hh6,B.hh7,B.hgW,B.hh2,B.hh3,B.hgY,B.hgV],C.av("O<pt>"))
B.eB4=new C.z(-1.6,3.5)
B.eAD=new C.z(1.6,3.5)
B.eCD=new C.z(-1.6,-3.5)
B.ezk=new C.z(1.6,-3.5)
B.dfr=w([B.eB4,B.eAD,B.eCD,B.ezk],x.f)
B.azn=w([!1,!1,!1,!1],x.u)
B.ecN={in1:0,in2:1}
B.aPy=new C.dD(B.ecN,2,x.M)
B.bHG=new A.fJ(23,"IN screw (top left)",B.aPy,y.g,!1,"hot")
B.bI6=new A.fJ(21,"IN screw (top right)",B.aPy,y.g,!1,"hot")
B.edb={out1:0,out2:1}
B.aPF=new C.dD(B.edb,2,x.M)
B.bHY=new A.fJ(24,"OUT screw (bottom left)",B.aPF,y._,!1,"hot")
B.bI_=new A.fJ(22,"OUT screw (bottom right)",B.aPF,y._,!1,"hot")
B.dfU=w([B.w4,B.bHG,B.bI6,B.bHY,B.bI_],x.r)
B.dg3=w(["city","billboards","edges","houses","hospital","traffic"],x.s)
B.dgf=w(["Look at the pieces: the tailpiece, the P-trap and the trap arm. Pick the tailpiece first and tap its glowing outline under the sink.","Pick the P-trap (the U-shaped bend) and tap its glowing outline. It joins the tailpiece.","Pick the trap arm and tap its outline. It joins the trap to the wall drain.","Slide each slip nut up to its joint and hand tighten it: tap the nuts.","Run the water and look for leaks. The U-bend keeps a plug of water that blocks sewer gas."],x.s)
B.drw=w(["Switch 1 common","Switch 2 common","Traveler terminal (both switches)","Green ground screw","Neutral splice (not on a switch)"],x.s)
B.eca={"Line (from the breaker)":0,"Load (to the light)":1,"Traveler A":2,"Traveler B":3,Ground:4,Neutral:5}
B.dvH=new C.bw(B.eca,["Switch 1 common","Switch 2 common","Traveler terminal (both switches)","Traveler terminal (both switches)","Green ground screw","Neutral splice (not on a switch)"],x.l)
B.dlw=w(["Never assume the dark screw is the same on every brand: read the diagram on the switch.","A switch loop or an old house may not follow the colors: verify the wires."],x.s)
B.buy=new A.akb("Three-way switch (two switches, one light)","Two three-way switches control one light from two places. Each switch has a COMMON terminal (dark screw) and two TRAVELER terminals. Power (line) goes to the common of the first switch, the light (load) to the common of the second, and two travelers join the switches. The ground goes to the green screw. A standard single-pole switch cannot do this job.",B.drw,B.dvH,B.dlw)
B.cWh=w(["Fan (motor) control wire","Light control wire","Neutral","Ground","Fan-rated support"],x.s)
B.ecP={"Motor lead (black)":0,"Light lead (blue)":1,"Neutral (white)":2,"Ground (green)":3,Support:4}
B.dwe=new C.bw(B.ecP,["Fan (motor) control wire","Light control wire","Neutral","Ground","Fan-rated support"],x.l)
B.d_J=w(["A blue wire is a light-kit lead on many fans, but not on all: read the diagram.","A fan that spins does not prove the installation is safe."],x.s)
B.bux=new A.akb("Ceiling fan with a light kit","A fan has a motor and often a light kit, and they are not always switched together. Follow the fan maker's diagram: the motor lead goes to the fan control (or switched hot), the light lead to the light control, the white to neutral and the green to the ground. The box must be fan rated.",B.cWh,B.dwe,B.d_J)
B.zl=w([B.buy,B.bux],C.av("O<akb>"))
B.fFR=new C.y("\u2728",null,D.a95,null,null,null,null,null,null,null,null,null)
B.fQf=new C.y("Nobody needs help right now.",null,D.fR,null,D.L,null,null,null,null,null,null,null)
B.fq0=new C.F(!0,D.aR,null,null,null,null,13,null,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fIc=new C.y("Everybody's wiring and plumbing works. Keep an eye on food and health: things break when you least expect it.",null,B.fq0,null,D.L,null,null,null,null,null,null,null)
B.dgF=w([B.fFR,D.O,B.fQf,D.av,B.fIc],x.p)
B.dgM=w(["road","roundabout","roadturn","roadtee","roadcross","house2","bighouse","billboard","tower","hq","store","gasstation","dmv","ubstation","townsign","cornersign","adboard","shop","hospital","firestation","school","car","firetruck","ambulance","dog","cat","cow","sheep","chicken","horse","tree","pine","bush","flowers","fence","lamppost","bench","pond","swing","shed","doghouse"],x.s)
B.eKR=new C.z(-1150,80)
B.es4=new C.z(1150,80)
B.eKQ=new C.z(-1150,1990)
B.es3=new C.z(1150,1990)
B.dgV=w([B.eKR,B.es4,B.eKQ,B.es3],x.f)
B.f1U=new A.rK("pills","\ud83e\ude79","Pain pills","Cures a headache or a cold: you walk normally again",8,0,0,0,!0)
B.f1T=new A.rK("bread","\ud83c\udf5e","Food for the town","5 portions for the people who live here",10,0,0,0,!1)
B.f1S=new A.rK("medicine","\ud83d\udc8a","Medicine","3 doses for the sick",12,0,0,0,!1)
B.dgZ=w([B.f1U,B.f1T,B.f1S],x.y)
B.dh1=w([D.aw,D.bG,D.be],x.O)
B.h7y=new A.r(125,292,-121.5)
B.haq=new A.r(-125,292,-121.5)
B.fWl=new A.r(-125,208,-121.5)
B.h7f=new A.r(125,208,-121.5)
B.dh5=w([B.h7y,B.haq,B.fWl,B.h7f],x.o)
B.fXp=new A.r(11.4,4.6,-6)
B.h3Y=new A.r(11.4,5,-7.85)
B.h_V=new A.r(2.6,5,-7.85)
B.h0w=new A.r(2.6,3.4,-7.85)
B.dh7=w([B.fXp,B.h3Y,B.h_V,B.h0w],x.o)
B.dhb=w(["hospital","shop","school"],x.s)
B.dhc=w(["hot","cold"],x.s)
B.dhf=w([D.aw,D.be,D.aD,D.f4,D.bS],x.O)
B.hcq=new A.jz("black","Black \xb7 hot",B.tL,D.c,"hot")
B.hcj=new A.jz("white","White \xb7 neutral",B.oO,D.au,"neutral")
B.Rm=w([B.hcq,B.hcj,B.te],x.d)
B.exz=new C.z(-3.5,4)
B.eEA=new C.z(3.5,4)
B.ezM=new C.z(-3.5,-4)
B.eru=new C.z(3.5,-4)
B.dhG=w([B.exz,B.eEA,B.ezM,B.eru],x.f)
B.dhL=w(["Ada","Ben","Chidi","Dina","Efe","Farah","Gus","Halima","Ivo","Jamal","Kemi","Lola"],x.s)
B.ePv=new C.z(-2.4,5)
B.eG1=new C.z(2.4,5)
B.eDd=new C.z(-2.4,-5)
B.eBV=new C.z(2.4,-5)
B.dhM=w([B.ePv,B.eG1,B.eDd,B.eBV],x.f)
B.die=w([y.O,"Break off the little brass tab between the two brass screws, so the two halves are separate.",y.R,"Fasten the white neutral to a SILVER screw (the silver tab stays joined).","Fasten the always-hot black wire to the bottom BRASS screw.","Fasten the switched hot (red, from the wall switch) to the top BRASS screw.",y.b,y.n],x.s)
B.eTq=new C.bj(-6,-4,D.c4)
B.eS4=new C.bj(5,-5,D.bG)
B.eTp=new C.bj(0,1,D.aw)
B.eTU=new C.bj(-5,5,D.bv)
B.eRj=new C.bj(6,4,D.c)
B.diy=w([B.eTq,B.eS4,B.eTp,B.eTU,B.eRj],x.dV)
B.dj1=w([T.qB,R.lk],x.f)
B.dj5=w(["split","v240four","v240three","v240only","isolated"],x.s)
B.ecB={feed:0}
B.f1_=new C.dD(B.ecB,1,x.M)
B.bHJ=new A.fJ(21,"FEED screw (joined tab)",B.f1_,"The one feed wire goes on the side where the brass screws are joined by a tab: it powers both switches.",!1,"hot")
B.ecZ={loadA:0,loadB:1}
B.aPE=new C.dD(B.ecZ,2,x.M)
B.bIa=new A.fJ(22,"Switch 1 screw \u2192 light 1",B.aPE,y.q,!1,"hot")
B.bIe=new A.fJ(24,"Switch 2 screw \u2192 light 2",B.aPE,y.q,!1,"hot")
B.djh=w([B.w4,B.bHJ,B.bIa,B.bIe],x.r)
B.eKk=new C.z("Slab","First the concrete slab (the foundation) is poured and left to cure. Every wall sits on it.")
B.eNf=new C.z("Framing","The carpenters build the wall frames from 2x4 studs, spaced 16 inches apart, with plates on the top and bottom.")
B.eBE=new C.z("Plumbing rough-in","The plumber runs the hot (red) and cold (blue) water lines and the white drain pipes inside the walls and floor before anything is closed up.")
B.eIv=new C.z("Electrical rough-in","The electrician runs the yellow and white cables from the breaker panel to every box, and fixes the boxes to the studs.")
B.eJA=new C.z("Drywall","Drywall covers the frame. Here it is see-through so you can still look at the pipes and wires behind it.")
B.eC5=new C.z("Fixtures","Last come the outlets, switches, light, sink, toilet and water heater. This is where most repairs happen.")
B.eDo=new C.z("Roof","The roof goes on to keep everything dry. It is see-through here so you can keep looking inside.")
B.djk=w([B.eKk,B.eNf,B.eBE,B.eIv,B.eJA,B.eC5,B.eDo],x.L)
B.dyz=new A.i8(-100,100,24,90)
B.dyE=new A.i8(-134,-110,100,190)
B.dyo=new A.i8(110,134,100,190)
B.djo=w([B.dyz,B.dyE,B.dyo],x.T)
B.eKX=new C.z(-17,-9)
B.esd=new C.z(17,-9)
B.eKW=new C.z(-17,9)
B.esc=new C.z(17,9)
B.djY=w([B.eKX,B.esd,B.eKW,B.esc],x.f)
B.dk3=w([-100,0,100],x.n)
B.dk4=w([-110,-80,80,110],x.n)
B.a4A=w([-14,14],x.n)
B.dk6=w([-150,150],x.n)
B.dk7=w([-178,178],x.n)
B.dk9=w([-18,18],x.n)
B.azJ=w([-20,0,20],x.n)
B.dkb=w([-21,21],x.n)
B.a4C=w([-26,26],x.n)
B.dkc=w([-27,27],x.n)
B.f1V=new A.rK("can","\ud83d\udee2","Gas can","Half a tank of gas",8,0,0.5,0,!1)
B.aPT=new A.rK("tank","\u26fd","Fill the tank","A full tank",12,0,1,0,!1)
B.dkd=w([B.f1V,B.aPT],x.y)
B.dkf=w([-30,-10,10,30],x.n)
B.dkg=w([-32,32],x.n)
B.dkh=w([-32,-8,34],x.n)
B.azK=w([-34,34],x.n)
B.dki=w([-3,3],x.n)
B.dkj=w([-47,47],x.n)
B.dkk=w([-48,48],x.n)
B.dkl=w([-52,52],x.n)
B.azM=w([-55,55],x.n)
B.dkn=w([-600,0,600],x.n)
B.dko=w([-600,600],x.n)
B.dkq=w([-70,70],x.n)
B.op=w([-72,-24,24],x.t)
B.azN=w([-80,80],x.n)
B.dkt=w([-900,-300,300,900],x.n)
B.dku=w([-90,0,90],x.n)
B.dkv=w([-90,-52,52,90],x.n)
B.azQ=w([-9,9],x.n)
B.dkH=w(["switch2p","switch3","switch4","switchsmart","switchcombo"],x.s)
B.dkO=w(["medicine","food"],x.s)
B.dl_=w([y.O,y.x,y.R,"The first traveler from the FIRST three-way goes on a top screw (IN).","The second traveler from the FIRST three-way goes on the other top screw (IN).","The first traveler to the SECOND three-way goes on a bottom screw (OUT).","The second traveler to the SECOND three-way goes on the other bottom screw (OUT).",y.b,y.n],x.s)
B.h02=new A.r(8.2,5,-7.85)
B.h5q=new A.r(8.2,1.2,-7.85)
B.h7u=new A.r(8.2,1,-7.4)
B.dm8=w([B.h02,B.h5q,B.h7u],x.o)
B.hcc=new A.jz("common","Black \xb7 COMMON (power in or to the light)",B.tL,D.c,"hot")
B.hca=new A.jz("trav1","Red \xb7 traveler 1",B.AT,D.c,"hot")
B.hcn=new A.jz("trav2","White taped black \xb7 traveler 2",B.oO,D.au,"hot")
B.dm9=w([B.te,B.hcc,B.hca,B.hcn],x.d)
B.a4L=w(["rug","road","roundabout","roadturn","roadtee","roadcross","pond","flowers"],x.s)
B.dmm=w(["human","soldier","michelle","xbot","human"],x.s)
B.eKL=new C.z(-1050,"hospital")
B.eLl=new C.z(-630,"store")
B.eLd=new C.z(-420,"tower")
B.erI=new C.z(0,"tower")
B.etQ=new C.z(420,"tower")
B.evX=new C.z(630,"store")
B.erX=new C.z(1050,"hospital")
B.dmq=w([B.eKL,B.aOu,B.eLl,B.eLd,B.aOt,B.erI,B.aOh,B.etQ,B.evX,B.aOj,B.erX],x.d6)
B.eoQ=new A.F8(61,"Hot shut-off valve (left)",B.a8g,"Hot is always on the LEFT. The red hose goes on the left valve.")
B.ecs={cold:0}
B.aPP=new C.dD(B.ecs,1,x.M)
B.eoR=new A.F8(62,"Cold shut-off valve (right)",B.aPP,"Cold is always on the RIGHT. The blue hose goes on the right valve.")
B.eoO=new A.F8(63,"Hot faucet inlet (left)",B.a8g,"The left faucet inlet takes the hot (red) hose.")
B.eoP=new A.F8(64,"Cold faucet inlet (right)",B.aPP,"The right faucet inlet takes the cold (blue) hose.")
B.a4M=w([B.eoQ,B.eoR,B.eoO,B.eoP],C.av("O<F8>"))
B.a4O=w([-72,-48,-24,0,24],x.t)
B.dnz=w(["1 Rough-in","2 Drywall","3 Devices"],x.s)
B.dyS=new A.i8(-90,10,130,160)
B.dyL=new A.i8(-50,50,70,100)
B.dyF=new A.i8(-134,-110,20,70)
B.do2=w([B.dyS,B.dyL,B.dyF],x.T)
B.Ru=w(["road","roadturn","roadtee","roadcross"],x.s)
B.bHT=new A.fJ(21,"Brass screw (top): HOT side",B.Jn,y.r,!1,"hot")
B.bI1=new A.fJ(22,"Brass screw (bottom): HOT side",B.Jn,y.r,!1,"hot")
B.bHX=new A.fJ(23,"Silver screw (top): NEUTRAL side",B.Jk,y.Q,!1,"neutral")
B.bHN=new A.fJ(24,"Silver screw (bottom): NEUTRAL side",B.Jk,y.Q,!1,"neutral")
B.bHU=new A.fJ(25,"Green screw: GROUND",B.Jl,"The green screw is for the bare copper or green GROUND wire.",!1,"ground")
B.dod=w([B.bHT,B.bI1,B.bHX,B.bHN,B.bHU],x.r)
B.doj=w([y.O,y.x,y.R,"Fasten the black hot to one HOT brass screw.","Fasten the red hot to the other HOT brass screw. There is no neutral and no silver screw in use.",y.b,y.n],x.s)
B.eLs=new C.z(-700,225)
B.eKT=new C.z(-120,160)
B.es6=new C.z(120,160)
B.ewm=new C.z(720,225)
B.doz=w([B.eLs,B.eKT,B.es6,B.ewm],x.f)
B.eRF=new C.bj("hot","Hot hose (red)",B.tE)
B.eSl=new C.bj("cold","Cold hose (blue)",B.nY)
B.doB=w([B.eRF,B.eSl],C.av("O<+(n,n,u)>"))
B.etp=new C.z(34,40)
B.heX=new A.Aw(B.etp,3.141592653589793,2.6,"Washing hands at the sink",!1,!1,!1,"")
B.doD=w([B.heX],x.h)
B.b_O=new A.Hj("NGMY navy",E.jI,E.LC,D.c,F.fw)
B.b_T=new A.Hj("Purple",D.oT,D.dE,D.c,D.bM)
B.b_R=new A.Hj("Green",D.h3,D.bP,D.c,D.lX)
B.b_P=new A.Hj("Sunset",D.ej,D.aD,D.c,D.ic)
B.b_Q=new A.Hj("Night",D.M,D.aJ,D.b1,D.c4)
B.b_S=new A.Hj("Light",D.c,D.nS,E.jI,D.dW)
B.a4R=w([B.b_O,B.b_T,B.b_R,B.b_P,B.b_Q,B.b_S],C.av("O<Hj>"))
B.aar=new A.r(15,2.6,0)
B.a4S=w([B.aWE,B.aar],x.o)
B.doV=w([B.te,B.Kp,B.aax,B.aay],x.d)
B.b5g=new C.ac(0,D.G,D.aW,D.J,24)
B.doW=w([B.b5g],x.V)
B.dp9=w(["tail","trap","arm"],x.s)
B.dph=w([!0,!0,!0,!0],x.u)
B.HV=w(["tv","lamp","toaster","hairdryer"],x.s)
B.aaO=new A.iV("look","Look",D.fi)
B.hfz=new A.iV("wall","Wall box",P.an5)
B.hfx=new A.iV("ceiling","Ceiling box",D.ro)
B.hfM=new A.iV("fanbox","Fan box",N.Oa)
B.hfV=new A.iV("drill","Drill",D.yG)
B.hfN=new A.iV("cable","Cable roll",E.amX)
B.dgi=w([B.aaO,B.hfz,B.hfx,B.hfM,B.hfV,B.hfN],x.I)
B.hfT=new A.iV("sheet","Drywall sheet",D.Cl)
B.hfD=new A.iV("knife","Drywall saw",D.GD)
B.hfB=new A.iV("screw","Screw gun",A0.GO)
B.hfX=new A.iV("tape","Tape",D.uj)
B.hfR=new A.iV("mud","Mud",Ad.a1l)
B.hg1=new A.iV("sand","Sander",D.GB)
B.bNj=new C.a0(985109,"MaterialIcons",!1)
B.hfH=new A.iV("paint","Roller",B.bNj)
B.dcE=w([B.aaO,B.hfT,B.hfD,B.hfB,B.hfX,B.hfR,B.hg1,B.hfH],x.I)
B.OA=new C.a0(983223,"MaterialIcons",!1)
B.hfY=new A.iV("outlet","Outlet",B.OA)
B.hfF=new A.iV("gfci","GFCI",D.uq)
B.hfW=new A.iV("switch","Switch",E.us)
B.hfA=new A.iV("split","Split outlet",B.OA)
B.hg_=new A.iV("v240four","240 V 4-wire",U.C4)
B.hfy=new A.iV("v240three","240 V 3-wire",U.C4)
B.hfK=new A.iV("v240only","240 V only",U.C4)
B.hfC=new A.iV("isolated","Isolated ground",B.OA)
B.hfS=new A.iV("switch2p","Double-pole",E.us)
B.hfU=new A.iV("switch3","3-way switch",E.us)
B.hfL=new A.iV("switch4","4-way switch",E.us)
B.hfJ=new A.iV("switchsmart","Smart switch",E.us)
B.hfw=new A.iV("switchcombo","Double switch",E.us)
B.hfQ=new A.iV("light","Light",D.rr)
B.bNh=new C.a0(985094,"MaterialIcons",!1)
B.hfI=new A.iV("fan","Fan",B.bNh)
B.hfP=new A.iV("tv","TV",V.a1S)
B.bLD=new C.a0(63571,"MaterialIcons",!1)
B.hfG=new A.iV("lamp","Lamp",B.bLD)
B.bKq=new C.a0(62944,"MaterialIcons",!1)
B.hfE=new A.iV("toaster","Toaster",B.bKq)
B.bL0=new C.a0(63209,"MaterialIcons",!1)
B.hg0=new A.iV("hairdryer","Hair dryer",B.bL0)
B.hfZ=new A.iV("flip","Flip switch",E.us)
B.hfO=new A.iV("tester","Voltage tester",D.ug)
B.d5U=w([B.aaO,B.hfY,B.hfF,B.hfW,B.hfA,B.hg_,B.hfy,B.hfK,B.hfC,B.hfS,B.hfU,B.hfL,B.hfJ,B.hfw,B.hfQ,B.hfI,B.hfP,B.hfG,B.hfE,B.hg0,B.hfZ,B.hfO],x.I)
B.dpn=w([B.dgi,B.dcE,B.d5U],C.av("O<ai<iV>>"))
B.dpB=w([B.te,B.aax,B.aay],x.d)
B.bqK=new C.u(1,0.1843137254901961,0.30980392156862746,0.30980392156862746,D.q)
B.bo9=new C.u(1,0.3568627450980392,0.4196078431372549,0.5490196078431373,D.q)
B.dpC=w([B.Xb,D.bs,B.bqK,B.bo9,D.bm,D.aJ],x.O)
B.dpI=w([D.bC,D.bP,D.cb,D.cc,D.vE,D.cC],x.O)
B.dpK=w([-400,400,-900,900,-1400,1400],x.n)
B.dpL=w([D.aw,D.bG,D.be,D.d2],x.O)
B.dpV=w([y.O,"Hold the fixture up to the ceiling box. It has three short wires: black, white and green.","Join the house ground wire to the fixture ground.","Join the house white wire to the fixture white wire with a wire nut.","Join the house black wire to the fixture black wire with a wire nut.","Push the wires into the box and fasten the fixture to the ceiling.",y.f],x.s)
B.dyR=new A.i8(-70,70,28,52)
B.dyI=new A.i8(-134,-96,100,170)
B.dyy=new A.i8(96,134,100,170)
B.dq2=w([B.dyR,B.dyI,B.dyy],x.T)
B.dq3=w([30,60,120,180,300],x.t)
B.eL_=new C.z(-210,60)
B.esP=new C.z(210,90)
B.eL5=new C.z(-330,120)
B.etm=new C.z(330,60)
B.eKP=new C.z(-110,330)
B.es2=new C.z(110,330)
B.eLj=new C.z(-560,640)
B.evD=new C.z(560,640)
B.eLb=new C.z(-420,1100)
B.etO=new C.z(420,1100)
B.dqb=w([B.eL_,B.esP,B.eL5,B.etm,B.eKP,B.es2,B.eLj,B.evD,B.eLb,B.etO],x.f)
B.c_T=new A.jL("Breaker off, then test","Before you touch any wire, switch its breaker OFF, then check with a voltage tester that the wire is dead. A switch on the wall is not enough.")
B.c_G=new A.jL("Lock out, tag out","On a real job you put a lock or a note on the panel so nobody switches the power back on while you work.")
B.c0_=new A.jL("Water and power","Water carries electricity. Near sinks, tubs and outdoors the outlets must be GFCI, and wet hands never touch wires.")
B.c_L=new A.jL("Eyes, ears, lungs","Safety glasses for drilling and cutting, ear protection for loud tools, and a mask when you sand drywall dust or cut tile.")
B.c_Z=new A.jL("Shut the water off","Before you cut or loosen a pipe, close the main water valve and open a faucet to drain the line.")
B.diO=w([B.c_T,B.c_G,B.c0_,B.c_L,B.c_Z],x.Z)
B.c0b=new A.MX("Safety first","\ud83e\uddba",D.cs,B.diO)
B.c00=new A.jL("Wire colours","Black is hot (it carries the power), white is neutral (the way back), bare copper or green is ground (the safety path). Red is a second hot, often used for a switched line.")
B.c07=new A.jL("Screw colours","On an outlet the brass screw takes the hot wire, the silver screw takes the neutral and the green screw takes the ground.")
B.c_V=new A.jL("Wire size","14 gauge wire is for 15 amp circuits (lights and outlets). 12 gauge is for 20 amp circuits (kitchens). A thinner wire than the breaker allows can overheat and start a fire.")
B.c_P=new A.jL("Breakers","A breaker is a safety switch. It trips when a circuit carries too much current, so the wires never get hot enough to burn.")
B.c02=new A.jL("Wire nuts","Strip about 3/4 inch, twist the bare ends together clockwise, and screw on the nut until no bare copper shows. Give each wire a gentle tug.")
B.c08=new A.jL("Switches","A switch cuts the hot wire only. The neutral goes straight through to the light.")
B.c09=new A.jL("GFCI","A GFCI outlet watches the current going out and coming back. If a little leaks (through water or a person) it cuts the power in a fraction of a second.")
B.c_I=new A.jL("Ceiling fans","A fan shakes and is heavy. It needs a box that says fan rated, fixed to the joist, not a plain light box.")
B.c_K=new A.jL("Heights","Outlets sit about 16 inches from the floor. Switches sit about 48 inches up, where your hand falls.")
B.db2=w([B.c00,B.c07,B.c_V,B.c_P,B.c02,B.c08,B.c09,B.c_I,B.c_K],x.Z)
B.c0e=new A.MX("Wiring basics","\u26a1",D.bG,B.db2)
B.c_H=new A.jL("Hot left, cold right","On a faucet, hot is on the left and cold on the right. Hot lines are marked red and cold lines blue.")
B.c_U=new A.jL("The P-trap","The curved pipe under a sink always holds a little water. That water seal stops sewer gas coming up the drain.")
B.c04=new A.jL("Shut-off valves","Every sink and toilet has its own small valve, so you can stop the water to one fixture without turning off the whole house.")
B.c_N=new A.jL("Slip nuts","Drain joints are sealed by a washer and a slip nut. Tighten by hand and a quarter turn: too much force cracks plastic.")
B.c_M=new A.jL("Wax ring","A toilet sits on a wax ring that seals it to the floor drain. A toilet is lowered straight down once, and cannot be slid around.")
B.c01=new A.jL("Drain slope","Drains fall about 1/4 inch per foot so water and waste keep moving. Too flat and it clogs, too steep and the water leaves the solids behind.")
B.c06=new A.jL("Order of work","Plumbing goes from the top down on the drain (tailpiece, trap, arm) and from the wall out on the supply (valve, hose, fixture).")
B.chX=w([B.c_H,B.c_U,B.c04,B.c_N,B.c_M,B.c01,B.c06],x.Z)
B.c0c=new A.MX("Plumbing basics","\ud83d\udeb0",D.cp,B.chX)
B.c_J=new A.jL("Studs","Studs are the vertical 2x4 posts inside a wall, 16 inches apart from centre to centre. Everything is fixed to them.")
B.c_X=new A.jL("Drilling studs","Holes for cable go through the middle of the stud, so a nail or screw cannot reach the wire.")
B.c_O=new A.jL("Drywall","A sheet is 4 feet wide, so its edges land on studs 48 inches apart. Screws go into studs only, just under the paper.")
B.c_R=new A.jL("Taping and mud","Seams get paper tape and three thin coats of joint compound, sanded smooth between coats, then primer and paint.")
B.c05=new A.jL("Order of a build","Frame, run the pipes and wires (rough-in), inspect, hang drywall, finish it, paint, then fit the fixtures and devices.")
B.cWI=w([B.c_J,B.c_X,B.c_O,B.c_R,B.c05],x.Z)
B.c0a=new A.MX("Framing and walls","\ud83c\udfe0",D.dW,B.cWI)
B.c_S=new A.jL("Voltage tester","A pen that glows or beeps near live wires. Test it on a known live outlet first, so you know it works.")
B.c_Y=new A.jL("Wire strippers","Strip the plastic off without nicking the copper. A nick weakens the wire.")
B.c03=new A.jL("Adjustable wrench","For nuts on valves and hoses. Hold the fitting steady with a second wrench so you do not twist the pipe.")
B.c_W=new A.jL("Drill and screw gun","A drill makes holes through studs. A screw gun sets drywall screws to the right depth.")
B.c_Q=new A.jL("Level and tape measure","Measure twice, cut once. A level makes sure outlets, shelves and pipes are straight.")
B.dri=w([B.c_S,B.c_Y,B.c03,B.c_W,B.c_Q],x.Z)
B.c0d=new A.MX("Tools","\ud83e\uddf0",D.bt,B.dri)
B.dqT=w([B.c0b,B.c0e,B.c0c,B.c0a,B.c0d],C.av("O<MX>"))
B.dqW=w([y.O,"There is no separate ground wire here: the neutral also grounds the frame of the old appliance. This is only allowed in old installations.",y.N,y.E,y.k,y.b,y.n],x.s)
B.beE=new C.u(1,0.48627450980392156,0.22745098039215686,0.22745098039215686,D.q)
B.bml=new C.u(1,0.24705882352941178,0.4196078431372549,0.30980392156862746,D.q)
B.bkE=new C.u(1,0.4196078431372549,0.30980392156862746,0.48627450980392156,D.q)
B.bhC=new C.u(1,0.47843137254901963,0.41568627450980394,0.23137254901960785,D.q)
B.dr_=w([B.Xb,B.beE,B.bml,B.bkE,B.bhC],x.O)
B.drb=w(["Cream","Sky","Blush","Mint","Butter","Periwinkle","White","Slate"],x.s)
B.hce=new A.jz("in1","Red \xb7 traveler in 1 (from the first 3-way)",B.AT,D.c,"hot")
B.hck=new A.jz("in2","White taped red \xb7 traveler in 2",B.oO,D.au,"hot")
B.adS=new C.u(1,0.6901960784313725,0.22745098039215686,0.16862745098039217,D.q)
B.hcb=new A.jz("out1","Red \xb7 traveler out 1 (to the second 3-way)",B.adS,D.c,"hot")
B.hcp=new A.jz("out2","White taped red \xb7 traveler out 2",D.bO,D.au,"hot")
B.dre=w([B.te,B.hce,B.hck,B.hcb,B.hcp],x.d)
B.eLv=new C.z(-760,330)
B.ewn=new C.z(760,330)
B.eLf=new C.z(-450,1080)
B.ev2=new C.z(450,1080)
B.drh=w([B.eLv,B.ewn,B.eLf,B.ev2],x.f)
B.drp=w([0.72,-0.72],x.n)
B.hcm=new A.jz("hot","Black \xb7 hot",B.tL,D.c,"hot")
B.Yl=new C.u(1,0.1843137254901961,0.6352941176470588,0.30980392156862746,D.q)
B.hch=new A.jz("isoground","Green with yellow stripe \xb7 isolated ground",B.Yl,D.c,"ground")
B.drz=w([B.Kp,B.hcm,B.hch],x.d)
B.drL=w([B.alQ,B.alP,B.alN],x.r)
B.ey1=new C.z("outlet","\ud83d\udd0c Outlet")
B.eMj=new C.z("gfci","\ud83d\udee1\ufe0f GFCI outlet")
B.eHS=new C.z("switch","\ud83d\udca1 Light switch")
B.drM=w([B.ey1,B.eMj,B.eHS],x.L)
B.drX=w(["inspect","hand","screwdriver","pliers","wrench","crimper","plunger","flapper","newoutlet","patch"],x.s)
B.hnz=new A.pw(0,0,70,26)
B.hnL=new A.pw(1,-100,110,24)
B.hnN=new A.pw(2,105,100,26)
B.dsv=w([B.hnz,B.hnL,B.hnN],x.X)
B.hci=new A.jz("lineA","Black \xb7 hot leg 1 (from the panel)",B.tL,D.c,"hot")
B.hco=new A.jz("lineB","Red \xb7 hot leg 2 (from the panel)",B.AT,D.c,"hot")
B.hcv=new A.jz("loadA","Black \xb7 hot leg 1 (to the heater)",B.M_,D.c,"hot")
B.hcg=new A.jz("loadB","Red \xb7 hot leg 2 (to the heater)",B.adS,D.c,"hot")
B.dsR=w([B.te,B.hci,B.hco,B.hcv,B.hcg],x.d)
B.dsX=w(["Maya","Kofi","Amara","Tunde","Zawadi"],x.s)
B.dt_=w(["Look under the sink. The wall has two shut-off valves: hot on the LEFT (red handle) and cold on the RIGHT (blue handle).","Pick the red hot hose. Tap the left shut-off valve, then the left faucet inlet.","Pick the blue cold hose. Tap the right shut-off valve, then the right faucet inlet.","Open the valves slowly and turn on the faucet. Check every connection for drips."],x.s)
B.ecE={flange:0,wax:1,toilet:2,bolts:3,valve:4,hosehot:5,hosecold:6,faucet:7,tail:8,trap:9,arm:10}
B.aFG=new C.bw(B.ecE,["Flange","Wax ring","Toilet","Bolts","Shut-off valve","Hot hose","Cold hose","Faucet","Tailpiece","P-trap","Trap arm"],x.l)
B.dvl=new C.du([25,"ground",23,"lineA",21,"lineB",24,"loadA",22,"loadB"],x.v)
B.dvm=new C.du([25,"ground",23,"in1",21,"in2",24,"out1",22,"out2"],x.v)
B.ec8={xbot:0,michelle:1,soldier:2}
B.a5m=new C.bw(B.ec8,["assets/avatars/Xbot.glb","assets/avatars/Michelle.glb","assets/avatars/Soldier.glb"],x.l)
B.ebj={highway:0,tower:1,neon:2,roof:3,screen:4,gate:5}
B.aOf=new C.z(0,!1)
B.esx=new C.z(1,!1)
B.etC=new C.z(3,!1)
B.et8=new C.z(2,!0)
B.esz=new C.z(1,!0)
B.etD=new C.z(3,!0)
B.dvx=new C.bw(B.ebj,[B.aOf,B.esx,B.etC,B.et8,B.esz,B.etD],C.av("bw<n,+(H,R)>"))
B.dvC=new C.du([25,"ground",23,"neutral",21,"hot1",22,"hot2"],x.v)
B.dvD=new C.du([25,"ground",23,"common",21,"trav1",22,"trav2"],x.v)
B.dvE=new C.du([25,"ground",23,"neutral",21,"line",22,"load"],x.v)
B.dvF=new C.du([25,"ground",23,"neutral",21,"switched",22,"always"],x.v)
B.dvS=new C.du([25,"ground",21,"hot1",22,"hot2"],x.v)
B.ec4={bed:0,nightstand:1,wardrobe:2,desk:3,rug:4,sofa:5,armchair:6,coffee:7,tvstand:8,dining:9,chair:10,plant:11,lamp:12,console:13,shelf:14,tree:15,pine:16,bush:17,flowers:18,fence:19,lamppost:20,bench:21,car:22,road:23,roundabout:24,roadturn:25,roadtee:26,roadcross:27,house2:28,bighouse:29,pole:30,crate:31,billboard:32,tower:33,hq:34,store:35,gasstation:36,dmv:37,ubstation:38,townsign:39,cornersign:40,adboard:41,shop:42,hospital:43,firestation:44,school:45,firetruck:46,ambulance:47,dog:48,cat:49,cow:50,sheep:51,chicken:52,horse:53,pond:54,swing:55,shed:56,doghouse:57}
B.bGQ=new A.fn("Bed","\ud83d\udecf\ufe0f",48,64)
B.bH1=new A.fn("Night table","\ud83e\ude91",13,13)
B.bGz=new A.fn("Wardrobe","\ud83d\udeaa",35,16)
B.bGL=new A.fn("Desk","\ud83d\udda5\ufe0f",38,19)
B.bGA=new A.fn("Rug","\ud83d\udfe5",56,40)
B.bGv=new A.fn("Sofa","\ud83d\udecb\ufe0f",64,26)
B.bGU=new A.fn("Armchair","\ud83d\udcba",24,24)
B.bH8=new A.fn("Coffee table","\u2615",32,19)
B.bGx=new A.fn("Media cabinet","\ud83d\uddc4\ufe0f",45,14)
B.bH6=new A.fn("Dining table","\ud83c\udf7d\ufe0f",45,29)
B.bH0=new A.fn("Chair","\ud83e\ude91",14,14)
B.bH7=new A.fn("Plant","\ud83e\udeb4",14,14)
B.bH2=new A.fn("Floor lamp","\ud83d\udca1",10,10)
B.bGR=new A.fn("Console table","\ud83d\uddc4\ufe0f",35,11)
B.bH_=new A.fn("Bookshelf","\ud83d\udcda",29,10)
B.bHc=new A.fn("Tree","\ud83c\udf33",36,36)
B.bGO=new A.fn("Pine tree","\ud83c\udf32",30,30)
B.bGu=new A.fn("Bush","\ud83c\udf3f",18,18)
B.bGX=new A.fn("Flowers","\ud83c\udf37",22,22)
B.bGn=new A.fn("Fence","\ud83d\udea7",64,6)
B.bGB=new A.fn("Street lamp","\ud83c\udfee",8,8)
B.bGT=new A.fn("Bench","\ud83e\ude91",44,16)
B.bGo=new A.fn("Car","\ud83d\ude97",84,40)
B.bGK=new A.fn("Road","\ud83d\udee3\ufe0f",40,40)
B.bHd=new A.fn("Roundabout","\ud83d\udd04",80,80)
B.bGt=new A.fn("Road corner","\u21aa\ufe0f",40,40)
B.bHf=new A.fn("Road T-junction","\u22a4",40,40)
B.bGM=new A.fn("Crossroads","\u271a",40,40)
B.bGw=new A.fn("House","\ud83c\udfe0",108,90)
B.bGP=new A.fn("Big house","\ud83c\udfe2",158,120)
B.bGp=new A.fn("Electric pole","\ud83d\udd0c",10,10)
B.bGJ=new A.fn("Crate","\ud83d\udce6",28,28)
B.bHb=new A.fn("Billboard","\ud83e\udea7",72,10)
B.bGs=new A.fn("Office tower","\ud83c\udfe2",100,70)
B.bGE=new A.fn("NGMY company","\ud83c\udfdb\ufe0f",170,90)
B.bGD=new A.fn("NGMY store","\ud83c\udfec",130,80)
B.bHe=new A.fn("NGMY gas station","\u26fd",150,90)
B.bGZ=new A.fn("NGMY licence office","\ud83e\udeaa",130,80)
B.bGG=new A.fn("NGMY Uber","\ud83d\ude96",120,60)
B.bGq=new A.fn("NGMY Town sign","\ud83e\udea7",380,14)
B.bGV=new A.fn("NGMY Town billboard","\ud83e\udea7",150,10)
B.bGI=new A.fn("NGMY ad billboard","\ud83d\udcfa",330,14)
B.bGN=new A.fn("Shop","\ud83c\udfea",126,90)
B.bGF=new A.fn("Hospital","\ud83c\udfe5",165,105)
B.bGm=new A.fn("Fire station","\ud83d\ude92",135,96)
B.bGY=new A.fn("School","\ud83c\udfeb",186,105)
B.bH5=new A.fn("Fire truck","\ud83d\ude92",96,40)
B.bGS=new A.fn("Ambulance","\ud83d\ude91",84,40)
B.bGC=new A.fn("Dog","\ud83d\udc15",22,10)
B.bGH=new A.fn("Cat","\ud83d\udc08",16,8)
B.bH3=new A.fn("Cow","\ud83d\udc04",38,16)
B.bGy=new A.fn("Sheep","\ud83d\udc11",26,14)
B.bH4=new A.fn("Chicken","\ud83d\udc14",12,8)
B.bGr=new A.fn("Horse","\ud83d\udc0e",46,16)
B.bH9=new A.fn("Pond","\ud83d\udca7",80,56)
B.bGW=new A.fn("Swing set","\ud83c\udfa0",56,40)
B.bHa=new A.fn("Shed","\ud83d\uded6",50,42)
B.bHg=new A.fn("Dog house","\ud83d\udc15",24,22)
B.hw=new C.bw(B.ec4,[B.bGQ,B.bH1,B.bGz,B.bGL,B.bGA,B.bGv,B.bGU,B.bH8,B.bGx,B.bH6,B.bH0,B.bH7,B.bH2,B.bGR,B.bH_,B.bHc,B.bGO,B.bGu,B.bGX,B.bGn,B.bGB,B.bGT,B.bGo,B.bGK,B.bHd,B.bGt,B.bHf,B.bGM,B.bGw,B.bGP,B.bGp,B.bGJ,B.bHb,B.bGs,B.bGE,B.bGD,B.bHe,B.bGZ,B.bGG,B.bGq,B.bGV,B.bGI,B.bGN,B.bGF,B.bGm,B.bGY,B.bH5,B.bGS,B.bGC,B.bGH,B.bH3,B.bGy,B.bH4,B.bGr,B.bH9,B.bGW,B.bHa,B.bHg],C.av("bw<n,fn>"))
B.dwJ=new C.du([25,"isoground",23,"neutral",21,"hot"],x.v)
B.ebr={outlet:0,switch:1,light:2,fan:3,gfci:4}
B.d6k=w(["Silver","Brass","Green"],x.s)
B.fbA=new A.v9("On a standard receptacle, which terminal does the hot wire go on?",B.d6k,1,"Brass is the hot side. Silver is neutral and green is the ground.")
B.cI4=w(["Yes, it works","No: reversed polarity leaves live parts that should be dead","Yes if there is a ground"],x.s)
B.fby=new A.v9("The outlet works with hot and neutral swapped. Is it safe?",B.cI4,1,"Working is not the same as safe. Reversed polarity energizes the wrong parts.")
B.d0_=w(["Yes","No, never","Only in old houses"],x.s)
B.fbu=new A.v9("May the neutral be used as the equipment ground?",B.d0_,1,"The ground is a separate safety path. The neutral carries current in normal use.")
B.dbC=w([B.fbA,B.fby,B.fbu],x.W)
B.c4C=w(["The hot to the light","The neutral","The ground"],x.s)
B.fbB=new A.v9("A single-pole switch opens and closes which conductor?",B.c4C,0,"The switch breaks the hot conductor to the load.")
B.cYE=w(["Yes","No, never","If the wire is thick"],x.s)
B.fbC=new A.v9("May the ground wire be used to carry current to the light?",B.cYE,1,"The equipment ground is only for safety.")
B.d5g=w(["Yes","No: never assume it does","Only new houses"],x.s)
B.fbv=new A.v9("Does every switch box have a neutral?",B.d5g,1,"Many switch boxes have no neutral. Smart switches need to be chosen for that.")
B.dqX=w([B.fbB,B.fbC,B.fbv],x.W)
B.diB=w(["Yes","No: the wires, the ground and the support must be right","Only with a switch"],x.s)
B.fbz=new A.v9("Does a light that turns on prove the fixture is wired safely?",B.diB,1,"A fixture can light up with an unsafe connection.")
B.dhE=w(["Its wires","A box or mount rated for its weight","Tape"],x.s)
B.fbD=new A.v9("A fixture must hang from:",B.dhE,1,"The box carries the weight. The wires never do.")
B.d5G=w([B.fbz,B.fbD],x.W)
B.d6K=w(["Any ceiling box","Rated for a fan","Plastic only"],x.s)
B.fbx=new A.v9("A ceiling fan needs a box that is:",B.d6K,1,"A fan shakes and is heavy. A plain light box can let it fall.")
B.dlB=w(["Yes","No: support, ground and wiring must all be right","Yes if it is quiet"],x.s)
B.fbw=new A.v9("The fan spins. Is the installation safe?",B.dlB,1,"A spinning fan says nothing about the box, the ground or the connections.")
B.d5Z=w([B.fbx,B.fbw],x.W)
B.d1G=w(["LINE","LOAD","Either"],x.s)
B.fbt=new A.v9("On a GFCI, power from the breaker goes on:",B.d1G,0,"LINE is the supply. LOAD feeds outlets further down the line.")
B.cMN=w([B.fbt],x.W)
B.aFU=new C.bw(B.ebr,[B.dbC,B.dqX,B.d5G,B.d5Z,B.cMN],C.av("bw<n,ai<v9>>"))
B.ec3={house2:0,bighouse:1,shop:2,billboard:3,crate:4,car:5,tree:6,bench:7,tower:8,hq:9,store:10,gasstation:11,cornersign:12}
B.dwM=new C.bw(B.ec3,[40,80,70,15,4,25,5,4,120,200,90,90,30],C.av("bw<n,H>"))
B.bFA=new A.uu("The living room has no power at all.","The living room breaker is sitting in the middle (orange). It has tripped. Flip it fully OFF and ON again, by hand.","hand","Breaker reset. The living room has power again.",72,0,"")
B.bFK=new A.uu("There is no hot water.","The water heater breaker has tripped (orange). Reset it by hand.","hand","Breaker reset. The water heater is heating again.",75,0,"")
B.bFH=new A.uu("Water is dripping under the kitchen sink.","The slip nut on the P-trap is loose and the joint drips. Tighten it with the wrench.","wrench","Slip nut tightened. The drip stopped.",87,0,"")
B.bFz=new A.uu("There is a wet spot on the wall behind the kitchen.","A crimped joint in the hot water line is leaking. A crimp joint is squeezed with a crimping tool, not tightened with a wrench.","crimper","The joint is crimped again and it does not leak.",96,0,"")
B.bFE=new A.uu("The outlet by the sofa does not work, but the lights do.","The tester finds power at the box but the outlet is dead: a screw on the outlet has come loose. Turn the breaker off first, then tighten the screws with the screwdriver.","screwdriver","You tightened the loose screw. The outlet works again.",81,72,"Turn the living room breaker OFF first.")
B.bFB=new A.uu("The living room light flickers.","A wire nut in the light box has worked loose. Turn the breaker off, then twist the wire nut tight with the pliers.","pliers","You twisted the wire nut tight. The light is steady.",83,72,"Turn the living room breaker OFF first.")
B.bFC=new A.uu("The kitchen outlet sparks and smells burnt.","The outlet has burnt. Turn the breaker off and replace it with a new outlet.","newoutlet","New outlet fitted. No more sparks.",84,73,"Turn the kitchen breaker OFF first.")
B.bFI=new A.uu("The kitchen outlets are dead.","The GFCI outlet has tripped. Press its RESET button by hand.","hand","You pressed RESET. The kitchen outlets work.",84,0,"")
B.bFD=new A.uu("The toilet keeps running.","The rubber flapper in the tank no longer seals, so water leaks into the bowl all the time. Replace the flapper.","flapper","New flapper fitted. The toilet stops running.",88,0,"")
B.bFG=new A.uu("The kitchen faucet drips.","The faucet washer is worn. Tighten the packing nut with the wrench, then check.","wrench","The faucet is sealed. No more drips.",85,0,"")
B.bFF=new A.uu("There is a hole in the wall.","A hole in the drywall. Stick a drywall patch over it, then tape, mud, sand and paint it.","patch","Patch fitted. Now it only needs mud, sanding and paint.",95,0,"")
B.bFJ=new A.uu("The kitchen sink drains very slowly.","The drain is clogged. Use the plunger.","plunger","The clog is gone. The sink drains fast.",94,0,"")
B.wy=new C.du([B.a09,B.bFA,B.a0a,B.bFK,B.NF,B.bFH,B.NG,B.bFz,B.alx,B.bFE,B.a0d,B.bFB,B.a0e,B.bFC,B.a0f,B.bFI,B.a0g,B.bFD,B.a0h,B.bFG,B.a0b,B.bFF,B.a0c,B.bFJ],C.av("du<rf,uu>"))
B.edz={duo:0,line3:1,far3:2,skyline:3,lines6:4}
B.eBB=new C.z(D.a2G,0)
B.eOZ=new C.z(A1.aqW,1)
B.cp9=w([2,0,1],x.t)
B.ewp=new C.z(B.cp9,2)
B.c4G=w([0,1,2,3],x.t)
B.eNZ=new C.z(B.c4G,0)
B.djF=w([0,1,2,5,4,3],x.t)
B.eEI=new C.z(B.djF,1)
B.dx1=new C.bw(B.edz,[B.eBB,B.eOZ,B.ewp,B.eNZ,B.eEI],C.av("bw<n,+(ai<H>,H)>"))
B.ed3={michelle:0}
B.dx2=new C.bw(B.ed3,[0.55],x.e)
B.RW=new C.bw(D.hN,[],C.av("bw<H,cW>"))
B.Id=new C.bw(D.hN,[],C.av("bw<H,n>"))
B.dxi=new C.du([23,"neutral",21,"hot1",22,"hot2"],x.v)
B.dxk=new C.du([25,"ground",21,"feed",22,"loadA",24,"loadB"],x.v)
B.ecC={tail:0,trap:1,arm:2}
B.dxm=new C.bw(B.ecC,["Tailpiece","P-trap","Trap arm"],x.l)
B.aIx={xbot:0,michelle:1,soldier:2,human:3}
B.aG7=new C.bw(B.aIx,["\ud83e\udd16 X Bot","\ud83d\udc83 Dancer","\ud83e\ude96 Soldier","\ud83d\ude42 Person"],x.l)
B.aep=new C.u(1,0.9137254901960784,0.9215686274509803,0.9372549019607843,D.q)
B.bjZ=new C.u(1,0.8549019607843137,0.8666666666666667,0.8901960784313725,D.q)
B.T1=new A.rG(B.aep,E.adT,B.aep,B.bjZ,"xbot")
B.blX=new C.u(1,0.0784313725490196,0.047058823529411764,0.03137254901960784,D.q)
B.eo1=new A.rG(B.ahO,B.blX,D.cm,D.au,"michelle")
B.bqQ=new C.u(1,0.8509803921568627,0.6470588235294118,0.48627450980392156,D.q)
B.bpK=new C.u(1,0.3568627450980392,0.4196078431372549,0.22745098039215686,D.q)
B.beF=new C.u(1,0.5411764705882353,0.4823529411764706,0.3333333333333333,D.q)
B.J0=new A.rG(B.bqQ,D.M2,B.bpK,B.beF,"soldier")
B.T2=new A.rG(B.adX,B.LT,B.ahX,B.Ll,"human")
B.aG8=new C.bw(B.aIx,[B.T1,B.eo1,B.J0,B.T2],C.av("bw<n,rG>"))
B.edk={soldier:0}
B.dxE=new C.bw(B.edk,[3.141592653589793],x.e)
B.h71=new A.r(0,0,-1.2)
B.eak=new A.cW("Electrical box","The box is ready. Pull a cable to it, then wire a device.",B.h71,9)
B.dxH=new C.du([3,B.eak],C.av("du<H,cW>"))
B.aIq={inspect:0,hand:1,screwdriver:2,pliers:3,wrench:4,crimper:5,plunger:6,flapper:7,newoutlet:8,patch:9}
B.RY=new C.bw(B.aIq,["Look and test","Hand","Screwdriver","Pliers","Wrench","Crimp tool","Plunger","New flapper","New outlet","Drywall patch"],x.l)
B.bKK=new C.a0(63072,"MaterialIcons",!1)
B.dxL=new C.bw(B.aIq,[D.fi,B.aok,A0.GO,D.GD,D.p5,B.bKK,A8.a1T,D.qp,B.OA,Z.wa],C.av("bw<n,a0>"))
B.dyq=new A.i8(18,50,0,20)
B.dyD=new A.i8(-126,126,-66,5)
B.dyK=new A.i8(-4,16,0,24)
B.dB4=new A.aor(null)
B.aH8=new A.a6U(null)
B.dHP=new A.apN(null)
B.dL5=new A.IQ(!1,"city","",null)
B.aHi=new A.IQ(!1,"","",null)
B.e5L=new A.Ob(!0,null,!0,!1,null)
B.hab=new A.r(16,2.6,0)
B.ea3=new A.cW("Wall drain","The pipe stub that comes out of the wall. The trap arm slides into it.",B.hab,8)
B.fVD=new A.r(0,3,-6)
B.ea4=new A.cW("Wall","The copper supply pipes come out of the wall here.",B.fVD,24)
B.h6m=new A.r(8.2,1,-7)
B.ea5=new A.cW("Toilet","The tank fills from the cold supply on the wall. The bowl drains into the white pipe in the floor.",B.h6m,7)
B.fUh=new A.r(0,0,40)
B.ea6=new A.cW("The room","A room to build from bare studs to finished, working electrics. The walls hold the cable, the boxes and the devices.",B.fUh,190)
B.h3k=new A.r(-2.4,11.5,-3.6)
B.ea7=new A.cW("Hot faucet inlet","The threaded tail under the faucet where the hot supply hose screws on.",B.h3k,7)
B.fYL=new A.r(-3.6,4,-7.8)
B.ea8=new A.cW("Light switch","Controls the ceiling light. Tap Open lesson to wire one.",B.fYL,4.5)
B.h4V=new A.r(0,0.5,2)
B.ea9=new A.cW("Voltage tester","A tester that glows when it touches live power.",B.h4V,6)
B.eaa=new A.cW("Pipe joint","A crimped joint in the hot water line.",B.aW0,4)
B.h3I=new A.r(0,-0.2,0.2)
B.eab=new A.cW("Cover plate","The plate covers the box and the edges of the drywall so nobody touches the wires.",B.h3I,8)
B.h98=new A.r(-4.6,0.5,-3.4)
B.eac=new A.cW("Hot shut-off valve","The angle stop valve on the hot pipe. Turn the handle to stop the water to the faucet without shutting off the whole house. Hot is always on the left.",B.h98,8)
B.Vc=new A.r(0,-0.3,3.2)
B.ead=new A.cW("White wire nut: NEUTRAL","Twist the house white wire and the fixture white wire together under this cap.",B.Vc,6)
B.h4H=new A.r(4.6,0.5,-3.4)
B.eae=new A.cW("Cold shut-off valve","The angle stop valve on the cold pipe. Cold is always on the right.",B.h4H,8)
B.fXV=new A.r(2.4,11.5,-3.6)
B.eaf=new A.cW("Cold faucet inlet","The threaded tail under the faucet where the cold supply hose screws on.",B.fXV,7)
B.hb9=new A.r(0.8,-0.8,1.2)
B.eag=new A.cW("Black wire to the light","This black wire carries power to the light once the switch is on. It goes on the other brass screw.",B.hb9,7)
B.h3g=new A.r(10.05,5.2,-7.5)
B.eah=new A.cW("Water heater breaker","A big circuit for the water heater. It is ON.",B.h3g,3.5)
B.aUZ=new A.r(0,40,0)
B.eai=new A.cW("Back wall",y.o,B.aUZ,140)
B.h6f=new A.r(3,3.8,-7.4)
B.eaj=new A.cW("Kitchen faucet","Hot on the left, cold on the right. Tap Open lesson to connect the supply hoses.",B.h6f,4.5)
B.Ai=new A.r(0,6,0)
B.eal=new A.cW("Tailpiece","The straight pipe that hangs from the sink drain. Its bottom end is smooth so the slip nut can slide on and grip it.",B.Ai,10)
B.h8E=new A.r(-60,40,50)
B.eam=new A.cW("Left wall",y.o,B.h8E,140)
B.fZs=new A.r(3,1,0)
B.ean=new A.cW("P-trap","The U-shaped bend. It always keeps a little water inside, and that water plug blocks sewer gas from coming back up into the house.",B.fZs,11)
B.fV0=new A.r(0,20,5)
B.eao=new A.cW("The room","A bare room with the water supply stubs and the drain stub already in the wall and floor.",B.fV0,120)
B.fWj=new A.r(0,-8,0)
B.eap=new A.cW("Cabinet","The cabinet under the sink where the drain is built.",B.fWj,22)
B.fUf=new A.r(0,0,150)
B.eaq=new A.cW("Lawn","The grass. Walls, floors and the sky stay as they are, but you can add things to the garden with the Furniture button.",B.fUf,400)
B.fVV=new A.r(0,4,-8)
B.ear=new A.cW("Wall framing","2x4 studs 16 inches apart. Pipes and cables run through holes drilled in the middle of the studs, never along the edge where a nail could hit them.",B.fVV,18)
B.aWf=new A.r(0,-0.2,5.1)
B.eas=new A.cW("TEST and RESET buttons","Press TEST to make the GFCI trip. Press RESET to turn it back on. Test it once a month.",B.aWf,5)
B.aUU=new A.r(0,11,0)
B.eat=new A.cW("Sink","The sink bowl and the counter. The drain flange at the bottom is where the tailpiece starts.",B.aUU,16)
B.f1=new A.r(0,0,0)
B.eau=new A.cW("Drywall","The wall surface. A hole is cut in it for the electrical box.",B.f1,22)
B.h_L=new A.r(60,40,50)
B.eav=new A.cW("Right wall",y.o,B.h_L,140)
B.fUJ=new A.r(0,14,-3)
B.eaw=new A.cW("Counter and sink","The faucet is mounted through a hole in the counter.",B.fUJ,20)
B.h1Y=new A.r(0,-1.9,5)
B.eax=new A.cW("GREEN screw: GROUND",y.Z,B.h1Y,5)
B.fVS=new A.r(0,47,-2)
B.eay=new A.cW("Top and bottom plate","The horizontal 2x4s at the top and the bottom of the wall. The studs stand between them.",B.fVS,70)
B.fUl=new A.r(0,0,-8)
B.eaz=new A.cW("Wall","Behind the wall the drain pipe goes down to the sewer line.",B.fUl,22)
B.fUV=new A.r(0,19,-3)
B.eaA=new A.cW("Faucet","The faucet with hot on the left (red) and cold on the right (blue).",B.fUV,14)
B.h0k=new A.r(3.5,2,-7.2)
B.eaB=new A.cW("Kitchen counter and cabinet","The cabinet under the sink is where the drain and the shut-off valves live.",B.h0k,9)
B.h2n=new A.r(10.05,5.7,-7.5)
B.eaC=new A.cW("Kitchen breaker","Protects the kitchen outlets. It is ON.",B.h2n,3.5)
B.h3s=new A.r(4,6,-2.5)
B.eaD=new A.cW("Cold supply hose","A braided steel hose with a rubber liner and a blue band.",B.h3s,9)
B.h4Q=new A.r(-1,0.6,4.3)
B.eaE=new A.cW("SILVER screw: NEUTRAL side",y.B,B.h4Q,5)
B.aam=new A.r(0,3.7,0)
B.eaF=new A.cW("Slip nut","A big plastic nut. Slide it on the pipe first, then the washer, then join the pieces and hand tighten. A rubber washer inside makes the seal.",B.aam,7)
B.Vb=new A.r(0,-1,-0.6)
B.eaG=new A.cW("Wire nut","A twist-on cap that joins wires safely. The two white wires are joined here because a switch only cuts the hot wire.",B.Vb,5)
B.h3A=new A.r(-1.5,-0.3,3.2)
B.eaH=new A.cW("Black wire nut: HOT","Twist the house black wire and the fixture black wire together under this cap.",B.h3A,6)
B.h2m=new A.r(-1.9,0,-2)
B.eaI=new A.cW("Wood stud","The 2x4 frame inside the wall. The electrical box is nailed or screwed to a stud so it cannot move.",B.h2m,16)
B.h7_=new A.r(-1,-0.8,4.3)
B.eaJ=new A.cW("SILVER screw: NEUTRAL side",y.B,B.h7_,5)
B.hay=new A.r(6,3,-7.8)
B.eaK=new A.cW("Water and drain pipes","Red is hot water, blue is cold water (PEX tubing). The white pipes are drains. They slope down so the waste flows away.",B.hay,14)
B.h74=new A.r(1,0.6,4.3)
B.eaL=new A.cW("BRASS screw: HOT side",y.C,B.h74,5)
B.h7w=new A.r(0,-0.2,4.9)
B.eaM=new A.cW("Mounting strap (yoke)","The metal strap with two screw slots. Long screws through the ears hold the device in the box.",B.h7w,7)
B.hb6=new A.r(9.55,4.7,-7.5)
B.eaN=new A.cW("Spare breaker","A spare circuit.",B.hb6,3.5)
B.fV1=new A.r(0,20,8)
B.eaO=new A.cW("Vanity and counter","The cabinet that holds the sink. The pipes live inside it.",B.fV1,70)
B.h9P=new A.r(-3.2,1.3,-7.8)
B.eaP=new A.cW("Living room outlet","A standard outlet. Tap Open lesson to wire one in 3D.",B.h9P,4.5)
B.h7z=new A.r(1.5,-0.3,3.2)
B.eaQ=new A.cW("Green ground connection","Join the bare copper house ground wire to the green fixture ground wire.",B.h7z,6)
B.h25=new A.r(12,2.6,0)
B.eaR=new A.cW("Trap arm","The pipe that carries the waste water from the trap into the wall. It must slope down toward the wall, about 1/4 inch per foot.",B.h25,9)
B.h4p=new A.r(0,6.5,-7.8)
B.eaS=new A.cW("Electrical cables","Cables run from the breaker panel to every outlet, switch and light. Yellow is 12 gauge for 20 amps. White is 14 gauge for 15 amps.",B.h4p,16)
B.h5a=new A.r(11.2,2.3,-6)
B.eaT=new A.cW("Water heater","Heats the water. The cold line goes in at the top and the hot line comes out at the top.",B.h5a,9)
B.h5Q=new A.r(9.55,5.2,-7.5)
B.eaU=new A.cW("Bathroom breaker","Protects the bathroom. It is ON.",B.h5Q,3.5)
B.h2t=new A.r(5.2,3.9,-7.8)
B.eaV=new A.cW("Kitchen GFCI outlet","Outlets near water must be GFCI. Tap Open lesson to wire one.",B.h2t,4.5)
B.fVN=new A.r(0,40,-3)
B.eaW=new A.cW("Electrical cable","Yellow 12/2 cable with ground: it carries power from the breaker panel through the holes in the studs to each box.",B.fVN,80)
B.h3d=new A.r(-8.4,1.2,-6.4)
B.eaX=new A.cW("Sofa","Just furniture, to show the size of the room.",B.h3d,10)
B.eaY=new A.cW("Outlet face","Two outlets. The short slot is hot, the long slot is neutral, and the round hole is ground.",B.aWf,6)
B.h1G=new A.r(0,4,-7.8)
B.eaZ=new A.cW("Wall","The drywall of the back wall.",B.h1G,16)
B.h9U=new A.r(0,0,0.6)
B.eb_=new A.cW("Canopy","The round cover that hides the box and the wire connections against the ceiling.",B.h9U,8)
B.eb0=new A.cW("Concrete slab","The foundation. It carries the whole weight of the house. Plumbing drains are placed before it is poured.",B.f1,30)
B.fVG=new A.r(0,40,12)
B.eb1=new A.cW("Front door","Tap the door to go inside the house.",B.fVG,260)
B.aao=new A.r(8.9,2.6,0)
B.eb2=new A.cW("Slip nut","Hand tighten it, then about a quarter turn with pliers. Over-tightening cracks the plastic.",B.aao,7)
B.h5P=new A.r(1,-0.8,4.3)
B.eb3=new A.cW("BRASS screw: HOT side",y.C,B.h5P,5)
B.h1o=new A.r(0.6,1.5,-1.8)
B.eb4=new A.cW("Cable to the light (LOAD)","This cable carries the switched power on to the light. The black wire here only has power when the switch is on.",B.h1o,8)
B.h1T=new A.r(9.8,5,-7.5)
B.eb5=new A.cW("Breaker panel","The main electrical panel. Each breaker protects one circuit. A breaker that is in the middle position has TRIPPED. Flip it fully OFF and then ON to reset.",B.h1T,6)
B.h3x=new A.r(-4,6,-2.5)
B.eb6=new A.cW("Hot supply hose","A braided steel hose with a rubber liner and a red band. Hand tighten the nuts, then a quarter turn with a wrench.",B.h3x,9)
B.efP=new C.t(66,66)
B.bRA=new C.ae(D.eb,20,F.fw,null,null,null)
B.ejn=new C.D(D.vZ,B.bRA,null)
B.frX=new C.F(!0,D.mw,null,null,null,null,12.5,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fyt=new C.y("A circuit that is not CORRECT and safe can never pass, even if the light or fan would have worked.",null,B.frX,null,null,null,null,null,null,null,null,null)
B.ejy=new C.D(D.hX,B.fyt,null)
B.fIm=new C.y("Sick people can stay in a hospital bed. Treat each patient before their care runs out, and they go home better.",null,D.UG,null,D.L,null,null,null,null,null,null,null)
B.ejD=new C.D(D.akS,B.fIm,null)
B.bQN=new C.ae(D.eb,18,D.bj,null,null,null)
B.ejU=new C.D(D.fx,B.bQN,null)
B.ejW=new C.D(D.fx,G.apO,null)
B.enS=new A.xY(0,0,18,0,!1,!1,!1,!1,!1,0,!1,!1,"","",-1,0,-1,0)
B.enT=new A.xY(0,100,120,-2.2,!1,!1,!1,!1,!1,0,!1,!1,"","",-1,0,-1,0)
B.enU=new A.xY(0,40,150,0.5,!1,!1,!1,!1,!1,0,!1,!1,"","",-1,0,-1,0)
B.enV=new A.xY(0,0,0,0,!1,!1,!1,!1,!1,0,!1,!1,"","",-1,0,-1,0)
B.enW=new A.xY(0,-80,50,0,!1,!1,!1,!1,!1,0,!1,!1,"","",-1,0,-1,0)
B.enX=new A.xY(0,0,56,0,!1,!1,!1,!1,!1,0,!1,!1,"","",-1,0,-1,0)
B.eq0=new A.a9r(null,null)
B.bi5=new C.u(1,0.30980392156862746,0.7019607843137254,0.9647058823529412,D.q)
B.bqp=new C.u(1,0.11372549019607843,0.37254901960784315,0.7686274509803922,D.q)
B.bn7=new C.u(1,0.043137254901960784,0.16470588235294117,0.4196078431372549,D.q)
B.d_W=w([B.bi5,B.bqp,B.bn7],x.O)
B.eqK=new C.c0(A6.xg,0.5,D.x,null,0,B.d_W,null,null)
B.bqG=new C.u(1,0.8392156862745098,0.9019607843137255,0.9176470588235294,D.q)
B.err=new C.z(B.bqG,B.XL)
B.erA=new C.z(0,120)
B.erB=new C.z(0,300)
B.erQ=new C.z(B.oO,B.f1)
B.etr=new C.z(64,2.4)
B.ev6=new C.z("LOAD (taped)",D.d1)
B.beD=new C.u(1,0.9450980392156862,0.8901960784313725,0.7764705882352941,D.q)
B.bhM=new C.u(1,0.8470588235294118,0.7686274509803922,0.6274509803921569,D.q)
B.ewt=new C.z(B.beD,B.bhM)
B.dhH=w([D.aw,D.cc,D.aw],x.O)
B.ewS=new C.z(-40,B.dhH)
B.eyj=new C.z(63,-2.4)
B.bgM=new C.u(1,0.8901960784313725,0.9254901960784314,0.9607843137254902,D.q)
B.bbD=new C.u(1,0.7372549019607844,0.7843137254901961,0.8392156862745098,D.q)
B.eyR=new C.z(B.bgM,B.bbD)
B.ez7=new C.z(51,B.aen)
B.bcP=new C.u(1,0.9137254901960784,0.8705882352941177,0.7607843137254902,D.q)
B.eBP=new C.z(B.bcP,B.Bk)
B.bdc=new C.u(1,0.9137254901960784,0.9372549019607843,0.9490196078431372,D.q)
B.bdN=new C.u(1,0.8509803921568627,0.8941176470588236,0.9098039215686274,D.q)
B.eCE=new C.z(B.bdc,B.bdN)
B.bmn=new C.u(1,0.9058823529411765,0.8235294117647058,0.8156862745098039,D.q)
B.bdO=new C.u(1,0.7058823529411765,0.7176470588235294,0.7411764705882353,D.q)
B.eDD=new C.z(B.bmn,B.bdO)
B.bb0=new C.u(1,0.7647058823529411,0.8117647058823529,0.9019607843137255,D.q)
B.eEt=new C.z(B.bb0,B.ahP)
B.bkS=new C.u(1,0.3568627450980392,0.39215686274509803,0.4392156862745098,D.q)
B.eGg=new C.z("SILVER \xb7 NEUTRAL",B.bkS)
B.ha3=new A.r(-1.5,0,0)
B.eGp=new C.z(B.LH,B.ha3)
B.eHW=new C.z(52,B.AT)
B.bho=new C.u(1,0.12156862745098039,0.47843137254901963,0.22745098039215686,D.q)
B.eIO=new C.z("GREEN \xb7 GROUND",B.bho)
B.bpw=new C.u(1,0.9450980392156862,0.9098039215686274,0.8235294117647058,D.q)
B.eJv=new C.z(B.bpw,B.Bk)
B.eJM=new C.z("main","Main water valve")
B.cMz=w([D.vE,D.bG,D.be],x.O)
B.eM4=new C.z(40,B.cMz)
B.hba=new A.r(1.5,0,0)
B.eNR=new C.z(B.Yl,B.hba)
B.bdt=new C.u(1,0.9529411764705882,0.9411764705882353,0.9098039215686274,D.q)
B.bko=new C.u(1,0.4823529411764706,0.5294117647058824,0.5803921568627451,D.q)
B.eOy=new C.z(B.bdt,B.bko)
B.ePw=new C.z(B.hU,B.Xc)
B.bgr=new C.u(1,0.9529411764705882,0.9019607843137255,0.7843137254901961,D.q)
B.bne=new C.u(1,0.788235294117647,0.7098039215686275,0.5490196078431373,D.q)
B.ePP=new C.z(B.bgr,B.bne)
B.bd3=new C.u(1,0.6039215686274509,0.4196078431372549,0.047058823529411764,D.q)
B.eQj=new C.z("BRASS \xb7 HOT",B.bd3)
B.eQL=new C.z(53,B.Yl)
B.a7I=new C.bj(180,40,215)
B.a7J=new C.bj(215,40,345)
B.a7K=new C.bj(60,60,90)
B.eRv=new C.bj(61,-4.6,B.tE)
B.a7L=new C.bj(95,40,185)
B.eSp=new C.bj("Turn the main water ON to test for leaks: pick Hand and tap the main valve.","hand","main")
B.eTh=new C.bj(62,4.6,B.nY)
B.eTr=new C.bj("The water must be OFF before you cut into the pipes: pick Hand and tap the main valve.","hand","main")
B.eTT=new C.bj("Fit the parts in the order of the job list.","",null)
B.eUh=new C.bj("Looks good. Watch for leaks; if none, the job is done.","",null)
B.eV7=new C.cw([0,17.1,16.4,5.8])
B.eVa=new C.cw([0,-0.1,16.4,4.2])
B.eWd=new C.cw([15.6,9,14.8,22])
B.eWh=new C.cw([-15.6,9,14.8,22])
B.eWq=new C.ea([72,60,44,B.LU,B.LX])
B.bql=new C.u(1,0.8941176470588236,0.6901960784313725,0.47843137254901963,D.q)
B.eWH=new C.ea([124,70,44,B.bql,B.q0])
B.eWO=new C.ea([90,64,46,B.ag_,D.hf])
B.eX6=new C.ea([110,70,62,D.bN,D.al])
B.eXb=new C.ea([84,60,40,B.ag2,B.LX])
B.fx6=new C.y("\u260e",null,D.pw,null,null,null,null,null,null,null,null,null)
B.b9N=new C.qr(B.fx6,D.aw,null,24,null)
B.fzA=new C.y("City office",null,D.de,null,null,null,null,null,null,null,null,null)
B.d90=w([B.b9N,D.bc,B.fzA],x.p)
B.eZY=new C.cc(D.aN,D.e,D.j,D.m,null,D.p,null,0,B.d90,null)
B.bSl=new C.ae(D.Ox,26,D.c4,null,null,null)
B.fMJ=new C.y("Hallway tour",null,D.hB,null,null,null,null,null,null,null,null,null)
B.fy4=new C.y("Just the hall and its big TVs, 45 seconds",null,D.vg,null,null,null,null,null,null,null,null,null)
B.dqJ=w([B.fMJ,B.fy4],x.p)
B.bs8=new C.fj(D.ah,D.e,D.j,D.E,null,D.p,null,0,B.dqJ,null)
B.bEi=new C.bA(1,D.bd,B.bs8,null)
B.cWP=w([B.bSl,D.bc,B.bEi,A_.OO],x.p)
B.f_0=new C.cc(D.aN,D.e,D.j,D.m,null,D.p,null,0,B.cWP,null)
B.bQ_=new C.ae(D.ij,30,D.c,null,null,null)
B.fOJ=new C.y("Play the tour",null,D.k2,null,null,null,null,null,null,null,null,null)
B.d4H=w([B.bQ_,D.bn,B.fOJ],x.p)
B.f_6=new C.cc(D.aN,D.b8,D.j,D.m,null,D.p,null,0,B.d4H,null)
B.v3=new A.JB(0,"correct")
B.aP0=new A.JB(1,"incorrect")
B.rV=new A.JB(2,"unsafe")
B.Tw=new A.JB(3,"incomplete")
B.f_k=new A.JB(4,"requiresVerification")
B.ebD={hospital:0,shop:1,school:2,firestation:3,house2:4,bighouse:5,store:6,gasstation:7,dmv:8,tower:9,hq:10}
B.aPC=new C.dD(B.ebD,11,x.M)
B.ebn={wardrobe:0,shelf:1,lamp:2,console:3}
B.f0I=new C.dD(B.ebn,4,x.M)
B.aPG=new C.jn([1,2,3,4,5],C.av("jn<H>"))
B.eb7={house2:0,bighouse:1,shop:2,hospital:3,school:4,firestation:5,store:6,gasstation:7,tower:8,hq:9,dmv:10}
B.f0V=new C.dD(B.eb7,11,x.M)
B.edn={billboard:0,bighouse:1,townsign:2,cornersign:3,adboard:4,tower:5,hq:6,store:7,gasstation:8,ubstation:9,dmv:10}
B.f0Y=new C.dD(B.edn,11,x.M)
B.aPL=new C.dD(D.hN,0,C.av("dD<H>"))
B.f2S=new C.au(0,36)
B.f31=new C.au(126,84)
B.f3Z=new C.a7(110,64,null,null)
B.f4_=new C.a7(120,70,null,null)
B.f45=new C.a7(270,64,null,null)
B.f46=new C.a7(270,70,null,null)
B.JE=new A.FE(0,"hot")
B.JF=new A.FE(1,"neutral")
B.JG=new A.FE(2,"ground")
B.aRr=new A.FE(3,"load")
B.fcu=new C.F(!0,D.c,null,null,null,null,12.5,null,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fd6=new C.F(!0,D.c,null,null,null,null,13.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fdb=new C.F(!0,D.c,null,null,null,null,16,D.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,K.CG,null,null,null)
B.fep=new C.F(!0,D.aB,null,null,null,null,14,D.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.aRU=new C.F(!0,D.aB,null,null,null,null,11.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.feW=new C.F(!0,D.bG,null,null,null,null,12,D.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.ff5=new C.F(!0,D.ae,null,null,null,null,13.5,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.ffv=new C.F(!0,D.aD,null,null,null,null,12.5,D.u,null,2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.ffE=new C.F(!0,D.aR,null,null,null,null,11.5,null,null,null,null,null,1.25,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.ffQ=new C.F(!0,D.bG,null,null,null,null,15,D.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fg6=new C.F(!0,D.c,null,null,null,null,12.5,D.P,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.aS9=new C.F(!0,D.ae,null,null,null,null,12,D.P,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fh0=new C.F(!0,D.c,null,null,null,null,13,D.P,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.a9e=new C.F(!0,D.ae,null,null,null,null,null,null,null,null,null,null,1.45,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fhs=new C.F(!0,D.bG,null,null,null,null,13,D.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fi6=new C.F(!0,D.aB,null,null,null,null,9.5,null,null,null,null,null,1.15,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fin=new C.F(!0,D.ae,null,null,null,null,12.5,null,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fio=new C.F(!0,D.fh,null,null,null,null,12,null,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fj0=new C.F(!0,null,null,null,null,null,9,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.JQ=new C.F(!0,D.aD,null,null,null,null,12.5,D.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fjv=new C.F(!0,D.c,null,null,null,null,11.5,D.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.aSs=new C.F(!0,D.c,null,null,null,null,14,null,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fjO=new C.F(!0,D.bM,null,null,null,null,13,D.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fkN=new C.F(!0,D.mw,null,null,null,null,12,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fkT=new C.F(!0,D.ae,null,null,null,null,13.5,null,D.cD,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fl3=new C.F(!0,D.fh,null,null,null,null,11.5,D.P,null,null,null,null,1.25,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fl8=new C.F(!0,D.eF,null,null,null,null,14,D.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.flG=new C.F(!0,D.bG,null,null,null,null,18,D.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fmd=new C.F(!0,D.aR,null,null,null,null,12,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fmX=new C.F(!0,D.bG,null,null,null,null,null,D.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.aSV=new C.F(!0,D.ae,null,null,null,null,13.5,null,null,null,null,null,1.5,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fnQ=new C.F(!0,D.aD,null,null,null,null,null,D.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.foi=new C.F(!0,D.aB,null,null,null,null,11,D.u,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fqF=new C.F(!0,D.bG,null,null,null,null,44,D.u,null,2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.aTq=new C.F(!0,D.c,null,null,null,null,13.5,D.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fr3=new C.F(!0,D.aR,null,null,null,null,11.5,null,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.frB=new C.F(!0,D.b1,null,null,null,null,14.5,D.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.frL=new C.F(!0,F.fw,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fs1=new C.F(!0,D.fh,null,null,null,null,12,D.P,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fsm=new C.y("Wire guide (U.S. houses)",null,D.de,null,null,null,null,null,null,null,null,null)
B.fsz=new C.y("Which wall?",null,D.UP,null,null,null,null,null,null,null,null,null)
B.fdl=new C.F(!0,D.w,null,null,null,null,12,D.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fsU=new C.y("Open the 3D lesson",null,B.fdl,null,null,null,null,null,null,null,null,null)
B.ftF=new C.y("Never rely on color alone. With the power off, prove what each wire does with a tester and the device diagram. A licensed electrician does real house wiring.",null,L.a9g,null,null,null,null,null,null,null,null,null)
B.ftP=new C.y("Tip: pick a part, then tap its glowing spot. Joints on hoses, bolts and the drain are only loose: pick the Wrench and tap them. Use your Hand on the main water valve: turn the water OFF before you cut into a pipe, and ON to test for leaks.",null,E.a98,null,null,null,null,null,null,null,null,null)
B.fu9=new C.y("Answer, then submit. Nothing is marked until you submit.",null,H.vb,null,null,null,null,null,null,null,null,null)
B.fuY=new C.y("You used all three lives. Electricity does not give second chances, so in real life you turn the breaker OFF and test the wires every single time. Try the job again.",null,D.wV,null,null,null,null,null,null,null,null,null)
B.fve=new C.y("A different house",null,null,null,null,null,null,null,null,null,null,null)
B.fvF=new C.y("\ud83c\udf5e",null,D.wT,null,null,null,null,null,null,null,null,null)
B.fvG=new C.y("Show me",null,D.mj,null,null,null,null,null,null,null,null,null)
B.fvV=new C.y("Connect it to...",null,D.lN,null,null,null,null,null,null,null,null,null)
B.fw5=new C.y("Start this job again",null,null,null,null,null,null,null,null,null,null,null)
B.fn9=new C.F(!0,D.cs,null,null,null,null,12.5,D.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fwo=new C.y("Give back",null,B.fn9,null,null,null,null,null,null,null,null,null)
B.fx3=new C.y("Edit your billboard",null,D.de,null,null,null,null,null,null,null,null,null)
B.fyb=new C.y("L is the lobby. On every level there is a balcony with a view of the town.",null,H.DY,null,null,null,null,null,null,null,null,null)
B.fyq=new C.y("Submit the test",null,null,null,null,null,null,null,null,null,null,null)
B.fyO=new C.y("\ud83e\udeaa",null,D.wT,null,null,null,null,null,null,null,null,null)
B.fz0=new C.y("Start from a bare house (wire everything)",null,null,null,null,null,null,null,null,null,null,null)
B.fzI=new C.y("THE RACE",null,P.t6,null,null,null,null,null,null,null,null,null)
B.fzN=new C.y("What should the drone show you?",null,B.aS_,null,null,null,null,null,null,null,null,null)
B.fAq=new C.y("Diagram lessons",null,null,null,null,null,null,null,null,null,null,null)
B.fAu=new C.y("Go through",null,null,null,null,null,null,null,null,null,null,null)
B.fBh=new C.y("The customer says\u2026",null,D.de,null,null,null,null,null,null,null,null,null)
B.fBO=new C.y("Submit for inspection",null,null,null,null,null,null,null,null,null,null,null)
B.fC1=new C.y("What the house needs",null,D.de,null,null,null,null,null,null,null,null,null)
B.fCd=new C.y("Next job",null,null,null,null,null,null,null,null,null,null,null)
B.feR=new C.F(!0,D.w,null,null,null,null,14,D.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fCl=new C.y("Go in",null,B.feR,null,null,null,null,null,null,null,null,null)
B.fob=new C.F(!0,D.aD,null,null,null,null,22,D.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fCp=new C.y("My House",null,B.fob,null,D.L,null,null,null,null,null,null,null)
B.fCw=new C.y("New job",null,null,null,null,null,null,null,null,null,null,null)
B.aSx=new C.F(!0,D.cs,null,null,null,null,null,D.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fCD=new C.y("Job over",null,B.aSx,null,null,null,null,null,null,null,null,null)
B.fCT=new C.y("Three shocks. In real life you switch the breaker off and test the wires, every time. Try another call.",null,D.wV,null,null,null,null,null,null,null,null,null)
B.fCZ=new C.y("Learn the trades",null,Q.t4,null,null,null,null,null,null,null,null,null)
B.fDx=new C.y("Practice mode: no hints. You will only hear from me when something is wrong.",null,H.DY,null,null,null,null,null,null,null,null,null)
B.fDL=new C.y("New call",null,null,null,null,null,null,null,null,null,null,null)
B.fDQ=new C.y("Job done! \ud83c\udf89",null,L.JW,null,null,null,null,null,null,null,null,null)
B.fDT=new C.y("Wire guide",null,null,null,null,null,null,null,null,null,null,null)
B.fF0=new C.y("Next call",null,null,null,null,null,null,null,null,null,null,null)
B.fFo=new C.y("Plug in",null,D.de,null,null,null,null,null,null,null,null,null)
B.fFO=new C.y("Look around",null,null,null,null,null,null,null,null,null,null,null)
B.fG8=new C.y("\ud83d\udef5",null,D.wS,null,null,null,null,null,null,null,null,null)
B.fGn=new C.y("The customer wants:",null,D.UA,null,null,null,null,null,null,null,null,null)
B.fGy=new C.y('Tip: pick "Look and test" and tap things to find out what is wrong. Then pick the right tool. Turn the breaker off (hand) before you touch any wire.',null,E.a98,null,null,null,null,null,null,null,null,null)
B.fjP=new C.F(!0,D.aB,null,null,null,null,11.5,D.H,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fGP=new C.y("INCOMING CALL",null,B.fjP,null,null,null,null,null,null,null,null,null)
B.fGV=new C.y("Elevator",null,D.ft,null,null,null,null,null,null,null,null,null)
B.fHW=new C.y("Deliveries",null,D.ft,null,null,null,null,null,null,null,null,null)
B.fI9=new C.y("Every connection is on the right terminal and every safety check passes.",null,D.t7,null,null,null,null,null,null,null,null,null)
B.fIi=new C.y("Message \xb7 now",null,D.va,null,null,null,null,null,null,null,null,null)
B.fJ6=new C.y("5 bedrooms, 3 bathrooms and a garden. Walk in, look all round, fix what is wrong.",null,A5.Ul,null,D.L,null,null,null,null,null,null,null)
B.fJb=new C.y("Call over",null,B.aSx,null,null,null,null,null,null,null,null,null)
B.fJi=new C.y("\ud83d\udd12",null,Y.UB,null,null,null,null,null,null,null,null,null)
B.fJj=new C.y("\u23cf Unplug",null,F.A8,null,null,null,null,null,null,null,null,null)
B.fJp=new C.y("The game is closed for now",null,D.mY,null,D.L,null,null,null,null,null,null,null)
B.feA=new C.F(!0,D.ae,null,null,null,null,14.5,null,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fJC=new C.y("You missed 3 jobs in a row. The City office needs people who answer the phone and finish the job.",null,B.feA,null,D.L,null,null,null,null,null,null,null)
B.fJE=new C.y("A different call",null,null,null,null,null,null,null,null,null,null,null)
B.fJW=new C.y("One board on its own, or several boards standing apart.",null,H.vb,null,null,null,null,null,null,null,null,null)
B.fK6=new C.y("\ud83d\udecf\ufe0f",null,D.nE,null,null,null,null,null,null,null,null,null)
B.fKw=new C.y("Job complete! \ud83c\udf89",null,L.JW,null,null,null,null,null,null,null,null,null)
B.fKJ=new C.y("OPEN ORDERS",null,P.t6,null,null,null,null,null,null,null,null,null)
B.fL2=new C.y("Colours",null,D.A7,null,null,null,null,null,null,null,null,null)
B.fL6=new C.y("How you are doing",null,D.hB,null,null,null,null,null,null,null,null,null)
B.fLC=new C.y("All fixed! \ud83c\udf89",null,L.JW,null,null,null,null,null,null,null,null,null)
B.fLG=new C.y("These are the usual U.S. house wiring colors. Colors are a hint, not proof: old work, switch loops and other countries differ. A real installer proves what each wire does with a tester, with the power off, and follows the device diagram.",null,A9.a9f,null,null,null,null,null,null,null,null,null)
B.fLP=new C.y("Test (marked on submit)",null,null,null,null,null,null,null,null,null,null,null)
B.fM1=new C.y("Messages",null,D.va,null,null,null,null,null,null,null,null,null)
B.aU2=new C.y("Stay",null,null,null,null,null,null,null,null,null,null,null)
B.fMO=new C.y("\ud83d\ude81",null,D.wS,null,null,null,null,null,null,null,null,null)
B.fN0=new C.y("Choose a level. A red one has an office with no power.",null,D.DW,null,null,null,null,null,null,null,null,null)
B.aU4=new C.y("A different job",null,null,null,null,null,null,null,null,null,null,null)
B.fNP=new C.y("It goes on the back wall, not wired yet. Tap the red one to wire it yourself.",null,H.vb,null,null,null,null,null,null,null,null,null)
B.fOL=new C.y("\ud83d\uded7",null,D.wS,null,null,null,null,null,null,null,null,null)
B.fP5=new C.y("\u26a1",null,D.pv,null,null,null,null,null,null,null,null,null)
B.fPC=new C.y("Practice (instant feedback)",null,null,null,null,null,null,null,null,null,null,null)
B.fPH=new C.y("The job",null,D.de,null,null,null,null,null,null,null,null,null)
B.fQz=new C.y("Stay in the room",null,null,null,null,null,null,null,null,null,null,null)
B.fq4=new C.F(!0,F.fw,null,null,null,null,12,D.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fQQ=new C.y("\ud83e\udea7 Billboards",null,B.fq4,null,null,null,null,null,null,null,null,null)
B.fQW=new C.y("Choose a billboard",null,D.de,null,null,null,null,null,null,null,null,null)
B.fR0=new C.y("Which sign?",null,D.A7,null,null,null,null,null,null,null,null,null)
B.fR7=new C.y("\ud83d\udc8a",null,D.wT,null,null,null,null,null,null,null,null,null)
B.fUa=new A.r(3.6,2.6,0.6)
B.fUc=new A.r(0,56,0.9)
B.fUd=new A.r(-146.4,62,84)
B.ip=new A.r(0,0,1)
B.fUg=new A.r(0,0,3)
B.aab=new A.r(0,0,4)
B.fUi=new A.r(0,0,500)
B.fUj=new A.r(0,0,640)
B.fUk=new A.r(0,0,800)
B.tb=new A.r(0,0,-1)
B.aac=new A.r(0,0,-60)
B.fUn=new A.r(0,101,38)
B.fUo=new A.r(0,105,280)
B.aUT=new A.r(0,10,0)
B.fUp=new A.r(0,10,3)
B.fUq=new A.r(0,110,10)
B.fUr=new A.r(0,110,95)
B.fUs=new A.r(0,112,36)
B.fUt=new A.r(0,116,0)
B.fUu=new A.r(0,11,-15)
B.fUv=new A.r(0,120,0)
B.fUw=new A.r(0,122,0)
B.fUx=new A.r(0,124,0)
B.fUy=new A.r(0,126,4)
B.aUV=new A.r(0,12,0)
B.fUz=new A.r(0,12,3)
B.fUA=new A.r(0,130,-3)
B.aad=new A.r(0,13,0)
B.fUB=new A.r(0,13,56)
B.fUC=new A.r(0,13,-8)
B.fUD=new A.r(0,142,0)
B.Kj=new A.r(0,14,0)
B.fUE=new A.r(0,14,11)
B.fUF=new A.r(0,14,150)
B.fUG=new A.r(0,14,2)
B.fUH=new A.r(0,14,32)
B.aUW=new A.r(0,14,40)
B.fUI=new A.r(0,14,5)
B.fUK=new A.r(0,14,-9)
B.fUL=new A.r(0,150,-150)
B.fUM=new A.r(0,159,0)
B.fUN=new A.r(0,165,3)
B.fUO=new A.r(0,165,-63)
B.fUP=new A.r(0,16,0)
B.fUQ=new A.r(0,178,-30)
B.aae=new A.r(0,17,0)
B.fUR=new A.r(0,17,21)
B.fUS=new A.r(0,188,0)
B.fUT=new A.r(0,19,0)
B.fUU=new A.r(0,19,14)
B.fUW=new A.r(0,19,-30)
B.e8=new A.r(0,1,0)
B.fUY=new A.r(0,202,0)
B.fUZ=new A.r(0,20,0)
B.fV_=new A.r(0,20,16)
B.fV2=new A.r(0,20,-14)
B.fV3=new A.r(0,20,-6)
B.fV4=new A.r(0,210,-150)
B.fV5=new A.r(0,216,-30)
B.fV6=new A.r(0,21,0)
B.fV7=new A.r(0,22,-11)
B.fV8=new A.r(0,22,-12)
B.fV9=new A.r(0,22,-39)
B.fVc=new A.r(0,23,0)
B.fVf=new A.r(0,24,0)
B.fVg=new A.r(0,24,13)
B.fVi=new A.r(0,250,640)
B.Ah=new A.r(0,250,-118)
B.fVk=new A.r(0,252,0)
B.fVl=new A.r(0,25,-15)
B.fVm=new A.r(0,26,-24)
B.V9=new A.r(0,28,0)
B.fVn=new A.r(0,28,-8)
B.aUY=new A.r(0,29,40)
B.fVo=new A.r(0,2,14)
B.fVp=new A.r(0,304,-150)
B.aaf=new A.r(0,30,0)
B.fVq=new A.r(0,30,110)
B.fVr=new A.r(0,316,0)
B.fVs=new A.r(0,31,46)
B.fVt=new A.r(0,31,-6)
B.fVu=new A.r(0,330,260)
B.fVv=new A.r(0,34,0)
B.fVw=new A.r(0,36,0)
B.fVx=new A.r(0,36,19)
B.fVy=new A.r(0,36,-3)
B.fVz=new A.r(0,37,22)
B.fVA=new A.r(0,3,0)
B.fVB=new A.r(0,3,150)
B.fVC=new A.r(0,3,-30)
B.fVE=new A.r(0,400,60)
B.fVF=new A.r(0,40,100)
B.fVH=new A.r(0,40,150)
B.fVI=new A.r(0,40,17)
B.fVK=new A.r(0,40,40)
B.fVL=new A.r(0,40,45)
B.fVM=new A.r(0,40,50)
B.fVO=new A.r(0,40,-6)
B.aV_=new A.r(0,44,46)
B.fVP=new A.r(0,44,55)
B.fVQ=new A.r(0,46,0)
B.fVR=new A.r(0,47,0)
B.aV0=new A.r(0,48,0)
B.fVT=new A.r(0,48,20)
B.fVU=new A.r(0,48,82)
B.Va=new A.r(0,4,-2)
B.fVY=new A.r(0,520,1450)
B.aV1=new A.r(0,52,0)
B.fVZ=new A.r(0,52,52)
B.fW0=new A.r(0,55,0)
B.aag=new A.r(0,58,0)
B.fW1=new A.r(0,5,4)
B.fW3=new A.r(0,66,0)
B.fW4=new A.r(0,66,1)
B.fW5=new A.r(0,6,-15)
B.fW6=new A.r(0,75,-30)
B.aV2=new A.r(0,76,36)
B.aah=new A.r(0,7,0)
B.fW7=new A.r(0,7,-5)
B.aV3=new A.r(0,82,0)
B.x2=new A.r(0,8,0)
B.fW8=new A.r(0,8,6)
B.fW9=new A.r(0,8,90)
B.fWa=new A.r(0,8,-16)
B.fWb=new A.r(0,8,-19)
B.fWc=new A.r(0,8,-4)
B.fWd=new A.r(0,900,1600)
B.fWe=new A.r(0,91,80)
B.aV4=new A.r(0,92,1)
B.fWf=new A.r(0,94,13)
B.fWg=new A.r(0,98,8)
B.fWh=new A.r(0,99,38)
B.aai=new A.r(0,9,0)
B.aV5=new A.r(0,9,-3)
B.aaj=new A.r(0,-4,28)
B.fWi=new A.r(0,-4,-20)
B.fWm=new A.r(-100,38,0.7)
B.fWp=new A.r(100,100,320)
B.fWq=new A.r(100,14,36)
B.fWr=new A.r(100,24,36)
B.fWs=new A.r(100,24,8)
B.fWt=new A.r(100,290,-330)
B.fWu=new A.r(100,7,7)
B.fWv=new A.r(101,4,37)
B.fWy=new A.r(10,12,10)
B.fWz=new A.r(10,12,16)
B.fWA=new A.r(10,16,3)
B.fWB=new A.r(10,26,2)
B.fWC=new A.r(10,34,1)
B.fWD=new A.r(10,3,7)
B.fWE=new A.r(10,60,14)
B.fWF=new A.r(10,8,10)
B.fWG=new A.r(10,8,15)
B.fWI=new A.r(110,0,20)
B.fWJ=new A.r(110,130,20)
B.fWK=new A.r(110,14,2)
B.fWL=new A.r(110,8,34)
B.fWM=new A.r(110,96,120)
B.aV6=new A.r(112,22,3)
B.fWN=new A.r(112,46,2)
B.fWO=new A.r(11,12,30)
B.aV7=new A.r(11,16,7)
B.fWP=new A.r(11,1,11)
B.fWQ=new A.r(120,0,-30)
B.fWR=new A.r(120,28,22)
B.fWS=new A.r(120,40,100)
B.fWT=new A.r(124,2,26)
B.fWU=new A.r(124,4,60)
B.fWV=new A.r(125,8,54)
B.fWW=new A.r(126,2,62)
B.aV8=new A.r(12,3,9)
B.fWX=new A.r(12,4,22)
B.fWY=new A.r(12,86,0)
B.fWZ=new A.r(130,18,12)
B.fX_=new A.r(130,28,24)
B.aV9=new A.r(130,4,14)
B.aVa=new A.r(130,56,80)
B.fX0=new A.r(130,5,50)
B.fX1=new A.r(132,14,150)
B.fX2=new A.r(132,2,52)
B.aVb=new A.r(134,4,84)
B.fX3=new A.r(13,0,0)
B.fX4=new A.r(13,12,13)
B.fX5=new A.r(13,15,2)
B.aVc=new A.r(13,18,8)
B.fX6=new A.r(13,28,3)
B.fX7=new A.r(0,0.52,2.35)
B.fX8=new A.r(140,28,22)
B.fX9=new A.r(140,9,43)
B.fXa=new A.r(144,2,26)
B.fXb=new A.r(146,3,40)
B.fXc=new A.r(148,60,120)
B.fXd=new A.r(14,10,2)
B.aVd=new A.r(14,11,14)
B.fXe=new A.r(14,13,28)
B.fXf=new A.r(14,14,3)
B.fXg=new A.r(14,17,4)
B.fXh=new A.r(14,20,-28)
B.fXi=new A.r(14,30,14)
B.fXj=new A.r(14,36,14)
B.fXk=new A.r(14,3,14)
B.fXl=new A.r(150,30,42)
B.fXm=new A.r(150,70,5)
B.fXn=new A.r(151,3,43)
B.fXo=new A.r(152,4,7)
B.fXq=new A.r(16,10,10)
B.fXr=new A.r(16,16,16)
B.fXs=new A.r(16,3,11)
B.fXt=new A.r(16,80,60)
B.fXu=new A.r(16,9,2)
B.fXv=new A.r(17,1,0)
B.aVe=new A.r(17,3,17)
B.fXw=new A.r(27,1.4,27)
B.fXx=new A.r(18,18,14)
B.fXy=new A.r(18,20,18)
B.fXz=new A.r(18,22,2)
B.fXA=new A.r(18,28,16)
B.fXB=new A.r(18,2,18)
B.fXC=new A.r(18,3,0)
B.fXD=new A.r(18,6,0)
B.fXE=new A.r(18,80,2)
B.fXF=new A.r(18,90,5)
B.fXG=new A.r(18,9,11)
B.fXH=new A.r(190,20,60)
B.fXI=new A.r(190,320,100)
B.fXJ=new A.r(19,13,7)
B.fXK=new A.r(70,0.6,50)
B.fXL=new A.r(0,3,-6.5)
B.fXM=new A.r(-4,20.4,0)
B.fXN=new A.r(1,1,0.64)
B.fXO=new A.r(-4.6,1.5,-3.6)
B.fXP=new A.r(0,-13.5,-1.5)
B.fXQ=new A.r(4,10,3.5)
B.aVf=new A.r(0.95,1.7,0.85)
B.hC=new A.r(1,0,0)
B.fXR=new A.r(1,16,36)
B.fXS=new A.r(1,18,18)
B.aVg=new A.r(1,22,11)
B.fXT=new A.r(1,26,14)
B.fXU=new A.r(1,28,14)
B.aVh=new A.r(1,2,1)
B.aVi=new A.r(1,3,1)
B.aak=new A.r(1,3,6)
B.fXW=new A.r(1,0.9,0.06)
B.fXX=new A.r(1.2,44,34)
B.fXZ=new A.r(200,0,500)
B.fY_=new A.r(200,0,900)
B.fY0=new A.r(200,140,200)
B.fY4=new A.r(1.6,15,1.6)
B.fY5=new A.r(20,12,14)
B.aVj=new A.r(20,14,7)
B.fY6=new A.r(20,2,2)
B.fY7=new A.r(20,2,8)
B.fY8=new A.r(20,30,26)
B.fY9=new A.r(20,3,14)
B.fYa=new A.r(20,4,26)
B.fYb=new A.r(20,92,26)
B.fYc=new A.r(216,8,216)
B.fYd=new A.r(22,12,34)
B.fYe=new A.r(22,14,0)
B.fYf=new A.r(22,14,2)
B.fYg=new A.r(22,14,3)
B.fYh=new A.r(22,16,3)
B.fYi=new A.r(22,18,14)
B.fYj=new A.r(22,2,28)
B.fYk=new A.r(22,3,10)
B.fYl=new A.r(22,3,22)
B.fYm=new A.r(22,4,20)
B.fYn=new A.r(230,330,-210)
B.fYo=new A.r(230,-40,100)
B.fYp=new A.r(240,150,60)
B.fYq=new A.r(244,6,64)
B.fYr=new A.r(140,15,3.6)
B.fYs=new A.r(24,12,34)
B.fYt=new A.r(24,14,22)
B.fYu=new A.r(24,38,0)
B.aVk=new A.r(24,6,14)
B.fYv=new A.r(250,92,6)
B.fYw=new A.r(260,300,-160)
B.fYx=new A.r(262,3,5)
B.fYy=new A.r(262,3,56)
B.fYz=new A.r(26,14,26)
B.fYA=new A.r(26,2,26)
B.aVl=new A.r(26,4,22)
B.fYB=new A.r(26,72,26)
B.fYC=new A.r(26,8,18)
B.fYD=new A.r(26,-34,96)
B.fYF=new A.r(7.4,6,10.4)
B.fYG=new A.r(-0.1,0,0)
B.aVm=new A.r(2,100,90)
B.fYH=new A.r(2,10,2)
B.aVn=new A.r(2,12,60)
B.fYI=new A.r(2,13,2)
B.aVo=new A.r(2,23,12)
B.aVp=new A.r(2,28,22)
B.fYJ=new A.r(2,5,1)
B.fYK=new A.r(2,700,900)
B.aVq=new A.r(2,8,2)
B.fYM=new A.r(64,10,-1.4)
B.aVr=new A.r(0,9.4,-1.5)
B.fYN=new A.r(47,48,3.5)
B.fYO=new A.r(19.6,0,-1.5)
B.aVs=new A.r(0,56,1.3)
B.fYP=new A.r(0,15.5,0)
B.fYQ=new A.r(3000,0,3000)
B.fYR=new A.r(3000,0,-3000)
B.fYT=new A.r(300,6,3)
B.fYV=new A.r(30,16,30)
B.aVt=new A.r(30,16,72)
B.fYW=new A.r(30,22,0)
B.fYX=new A.r(30,24,8)
B.fYY=new A.r(30,28,18)
B.fYZ=new A.r(30,29,0)
B.fZ_=new A.r(30,34,40)
B.fZ0=new A.r(30,40,100)
B.fZ2=new A.r(30,6,12)
B.fZ3=new A.r(324,114,6)
B.aVu=new A.r(324,6,10)
B.fZ4=new A.r(32,2,20)
B.fZ5=new A.r(33,11,10)
B.fZ6=new A.r(34,10,1)
B.fZ7=new A.r(34,22,3)
B.aVv=new A.r(34,25,18)
B.fZ8=new A.r(34,30,1)
B.aVw=new A.r(34,39,18)
B.aVx=new A.r(34,42,18)
B.fZ9=new A.r(34,4,28)
B.aVz=new A.r(34,8,18)
B.fZa=new A.r(-1,-1.7,2.3)
B.fZb=new A.r(366,124,6)
B.aVA=new A.r(366,6,10)
B.fZc=new A.r(36,22,0)
B.fZd=new A.r(36,30,0)
B.fZe=new A.r(36,30,1)
B.fZf=new A.r(36,4,3)
B.fZg=new A.r(36,60,12)
B.fZh=new A.r(0,93,3.5)
B.fZi=new A.r(37,16,0)
B.fZj=new A.r(37,50,38)
B.fZk=new A.r(38,10,24)
B.fZl=new A.r(38,20,3)
B.fZm=new A.r(38,2,6)
B.fZn=new A.r(-0.2,-0.3,-0.4)
B.fZo=new A.r(60,62,3.6)
B.fZp=new A.r(0,9.5,-1.5)
B.fZq=new A.r(0,48.6,55)
B.aVB=new A.r(3,12,12)
B.aVC=new A.r(3,14,18)
B.fZr=new A.r(3,16,3)
B.fZt=new A.r(3,22,2)
B.fZu=new A.r(3,26,3)
B.aal=new A.r(3,3,3)
B.fZv=new A.r(3,42,70)
B.fZw=new A.r(3,46,90)
B.fZx=new A.r(3,5,3)
B.fZz=new A.r(40,12,2)
B.fZA=new A.r(40,16,18)
B.fZB=new A.r(40,1,14)
B.fZC=new A.r(40,28,1)
B.fZD=new A.r(40,2,104)
B.fZE=new A.r(40,2,24)
B.fZF=new A.r(40,30,26)
B.fZG=new A.r(40,60,40)
B.fZH=new A.r(40,80,3)
B.fZI=new A.r(40,8,104)
B.fZJ=new A.r(42,2,28)
B.fZK=new A.r(44,10,2)
B.aVE=new A.r(44,2,14)
B.fZL=new A.r(44,3,22)
B.fZM=new A.r(44,72,20)
B.fZN=new A.r(0.9,0,4.4)
B.fZO=new A.r(8.2,1.9,-7.55)
B.fZP=new A.r(46,10,34)
B.fZQ=new A.r(46,3,10)
B.fZR=new A.r(46,3,3)
B.fZS=new A.r(48,2,24)
B.fZT=new A.r(120.6,140,-52)
B.fZU=new A.r(0,-47.25,-2.25)
B.fZV=new A.r(-147.6,54,45)
B.fZW=new A.r(0.6,68,0.4)
B.fZX=new A.r(64,49,8.4)
B.fZY=new A.r(1.5,28,120)
B.fZZ=new A.r(0,1.59,0.14)
B.h__=new A.r(4,108,0)
B.h_0=new A.r(4,80,104)
B.h_1=new A.r(4,96,0)
B.h_2=new A.r(0,-3.4,1)
B.h_3=new A.r(25,79,1.4)
B.h_4=new A.r(1,0,-1.2)
B.h_5=new A.r(0.6,4,2.4)
B.h_6=new A.r(50,12,32)
B.h_7=new A.r(50,1,2)
B.h_8=new A.r(50,28,42)
B.h_9=new A.r(50,4,28)
B.h_a=new A.r(51,7,33)
B.h_b=new A.r(52,10,22)
B.h_c=new A.r(52,56,1)
B.h_d=new A.r(54,5,18)
B.h_g=new A.r(56,18,18)
B.h_h=new A.r(56,2,36)
B.h_i=new A.r(56,3,32)
B.h_j=new A.r(56,3,48)
B.h_k=new A.r(58,0,30)
B.h_l=new A.r(58,14,9)
B.h_m=new A.r(58,64,22)
B.h_n=new A.r(58,92,30)
B.h_o=new A.r(58,96,30)
B.h_p=new A.r(58,9,74)
B.h_q=new A.r(0,-0.8,0.9)
B.h_r=new A.r(11.9,0,-8)
B.h_s=new A.r(20,7,34.4)
B.h_t=new A.r(-47,48,3.5)
B.aVF=new A.r(1.6,1.6,0.4)
B.h_v=new A.r(0.16,0.32,0.07)
B.h_w=new A.r(5,10,5)
B.aVG=new A.r(5,12,26)
B.h_x=new A.r(5,17,2)
B.h_y=new A.r(5,1,2)
B.h_z=new A.r(5,34,24)
B.h_A=new A.r(5,5,5)
B.h_B=new A.r(5,6,10)
B.h_C=new A.r(5,6,3)
B.h_D=new A.r(5,9,8)
B.h_E=new A.r(-120.1,150,0)
B.h_F=new A.r(0,14.3,-1.5)
B.h_G=new A.r(0,0,3.2)
B.aVH=new A.r(-13,8.6,-9.5)
B.h_H=new A.r(60,12,56)
B.h_I=new A.r(60,12,80)
B.h_J=new A.r(60,16,28)
B.h_K=new A.r(60,30,3)
B.h_M=new A.r(620,300,270)
B.h_N=new A.r(62,11,0)
B.h_O=new A.r(62,18,20)
B.h_P=new A.r(62,22,6)
B.h_Q=new A.r(62,5,0)
B.h_R=new A.r(632,10,282)
B.h_S=new A.r(640,8,290)
B.h_T=new A.r(64,10,0)
B.h_W=new A.r(14,9,0.5)
B.aVI=new A.r(6,14,20)
B.aVJ=new A.r(6,14,32)
B.h_X=new A.r(6,28,6)
B.h_Y=new A.r(6,4,4)
B.h_Z=new A.r(6,6,6)
B.h00=new A.r(-150.6,70,160)
B.h01=new A.r(0,-0.2,0.14)
B.h03=new A.r(120.6,140,-8)
B.h04=new A.r(0.3,38,2)
B.h06=new A.r(700,430,1150)
B.h07=new A.r(70,175,-45)
B.h08=new A.r(70,194,-45)
B.h09=new A.r(70,6,36)
B.h0a=new A.r(720,100,105)
B.h0b=new A.r(720,360,320)
B.h0c=new A.r(72,32,3)
B.h0d=new A.r(72,-17,70)
B.h0e=new A.r(12,5,0.4)
B.h0f=new A.r(74,20,5)
B.h0g=new A.r(76,2,90)
B.h0h=new A.r(76,8,3)
B.h0i=new A.r(34,30,0.6)
B.h0j=new A.r(1.6,1.7,3.6)
B.h0l=new A.r(-72.8,0,55)
B.h0m=new A.r(-146.4,15,84)
B.h0o=new A.r(25,79,0.2)
B.h0p=new A.r(7,0,-8)
B.h0q=new A.r(7,18,10)
B.h0r=new A.r(7,27,10)
B.h0s=new A.r(7,2,7)
B.aVK=new A.r(7,3,0)
B.h0t=new A.r(7,6,3)
B.h0u=new A.r(7,8,3)
B.aVL=new A.r(7,96,7)
B.h0v=new A.r(2200,0.4,560)
B.h0x=new A.r(0,11,9.2)
B.h0y=new A.r(-3.2,1.3,-7.82)
B.h0z=new A.r(20,0.8,12)
B.h0A=new A.r(80,16,32)
B.h0B=new A.r(80,26,8)
B.h0C=new A.r(80,38,26)
B.h0E=new A.r(80,4,14)
B.h0F=new A.r(80,6,32)
B.aVM=new A.r(147,1.5,3.5)
B.h0G=new A.r(82,46,3)
B.aVN=new A.r(-6.5,6.9,-3)
B.h0H=new A.r(84,10,38)
B.h0I=new A.r(84,18,38)
B.h0J=new A.r(84,84,120)
B.h0K=new A.r(84,8,36)
B.h0L=new A.r(0.93,0.92,1)
B.h0M=new A.r(4.6,4.2,9.5)
B.h0N=new A.r(88,24,28)
B.h0O=new A.r(88,84,3)
B.h0P=new A.r(0.4,6,8)
B.h0Q=new A.r(0,-48.6,55)
B.h0R=new A.r(2.6,2,2.6)
B.h0S=new A.r(5.5,8.5,3)
B.h0T=new A.r(0,0,0.26)
B.h0U=new A.r(120.6,96,-52)
B.h0V=new A.r(8,18,8)
B.aVO=new A.r(8,2,16)
B.h0W=new A.r(8,2,6)
B.aVP=new A.r(8,2,8)
B.h0X=new A.r(8,6,6)
B.h0Y=new A.r(8,8,12)
B.h0Z=new A.r(8,9,8)
B.h1_=new A.r(8,9,9)
B.h10=new A.r(-140,62,3.6)
B.h12=new A.r(15,19,0.5)
B.h13=new A.r(900,2,700)
B.h15=new A.r(92,2,32)
B.h16=new A.r(95,26,1)
B.h17=new A.r(95,50,6)
B.h18=new A.r(96,14,38)
B.h19=new A.r(0.4,0.38,0.12)
B.h1a=new A.r(0,0,-0.43)
B.aVQ=new A.r(11.2,4.5,-6)
B.aVR=new A.r(1.2,96,112)
B.aVS=new A.r(0.08,3.8,2.4)
B.aVT=new A.r(9,1,9)
B.h1b=new A.r(9,40,4)
B.h1c=new A.r(9,5,9)
B.h1d=new A.r(0,70,-0.6)
B.h1e=new A.r(-34.6,86,69)
B.h1f=new A.r(-3.5,26,15)
B.h1g=new A.r(34,6,0.6)
B.h1h=new A.r(1.5,1.3,0.6)
B.h1i=new A.r(-120.6,96,-8)
B.h1k=new A.r(0,-1.78,0.27)
B.aVU=new A.r(1.2,9,1.2)
B.h1l=new A.r(0,0.62,0)
B.h1m=new A.r(5.5,1.4,12)
B.h1n=new A.r(-50,0.6,50)
B.h1q=new A.r(20,11.5,0)
B.h1r=new A.r(20,66,1.4)
B.h1s=new A.r(3.2,0.12,-6.7)
B.h1t=new A.r(12,0,-8.1)
B.h1v=new A.r(-34.6,86,7)
B.aVV=new A.r(0,0,3.4)
B.h1w=new A.r(1.25,0.28,0.1)
B.h1x=new A.r(100,38,0.7)
B.h1y=new A.r(0,36,10.2)
B.h1z=new A.r(24,0.08,16)
B.h1A=new A.r(34,1.4,1.4)
B.h1C=new A.r(0,4,-7.9)
B.h1D=new A.r(11.9,0,8)
B.h1E=new A.r(0,41.5,-4.9)
B.h1F=new A.r(-26,146,0.6)
B.aVW=new A.r(0.8,1.7,0.78)
B.h1H=new A.r(21,1.4,8)
B.h1I=new A.r(0.8,0.8,1.6)
B.h1J=new A.r(1.4,1,1)
B.h1K=new A.r(30,36,0.8)
B.h1M=new A.r(71.2,46.6,55)
B.h1N=new A.r(3,3.28,-7.2)
B.h1O=new A.r(1.4,0.3,1)
B.h1P=new A.r(0,42,1.5)
B.h1Q=new A.r(-6.1,1.2,-6.4)
B.h1R=new A.r(1.4,26,0.4)
B.h1S=new A.r(76,0.6,4)
B.h1U=new A.r(26,0.3,130)
B.h1V=new A.r(0,-45.5,0.5)
B.h1W=new A.r(1.8,4,1)
B.h1X=new A.r(5,1.6,0.5)
B.h1Z=new A.r(18,10,0.6)
B.h2_=new A.r(0,11,8.5)
B.h20=new A.r(0.1,-2,2.4)
B.h21=new A.r(302.4,1.2,322)
B.h22=new A.r(-1,33.4,-4.9)
B.h23=new A.r(0,0.2,2.8)
B.h24=new A.r(6,10,1.4)
B.h26=new A.r(24,32,0.8)
B.h27=new A.r(0,10,5.2)
B.h28=new A.r(0,-1.2,4.7)
B.h29=new A.r(18.9,2.6,0)
B.h2a=new A.r(-2200,0.4,720)
B.h2b=new A.r(66,89,3.8)
B.h2c=new A.r(-12,0,-8.1)
B.h2d=new A.r(3,11,0.5)
B.h2e=new A.r(0,70,320.6)
B.h2f=new A.r(11.8,4,0)
B.h2g=new A.r(0.97,0.18,2.25)
B.h2h=new A.r(58,96,31.7)
B.h2i=new A.r(14,20,1.2)
B.aVX=new A.r(-71.7,6,55)
B.h2k=new A.r(64,57,8.4)
B.h2l=new A.r(5.6,0.3,1.9)
B.h2o=new A.r(52,8,0.4)
B.h2p=new A.r(0,14,51.2)
B.h2q=new A.r(4.6,7.6,3)
B.h2r=new A.r(-1,0,-1.2)
B.h2s=new A.r(0,1.7,0)
B.h2u=new A.r(-1,0,1.5)
B.h2v=new A.r(27,19,0.4)
B.h2w=new A.r(90,2,0.5)
B.h2x=new A.r(-17,98,77.2)
B.h2y=new A.r(5,8,0.4)
B.h2z=new A.r(0,98,6.6)
B.h2A=new A.r(5,14,8.5)
B.h2B=new A.r(5,2.2,0.8)
B.h2C=new A.r(-120.6,140,-52)
B.h2D=new A.r(-2200,0.4,560)
B.h2E=new A.r(0.18,0.12,0.08)
B.h2F=new A.r(50,0.6,50)
B.h2G=new A.r(147,3,1.4)
B.h2H=new A.r(20,0.6,50)
B.h2I=new A.r(0,6.6,0)
B.h2J=new A.r(4,16.2,0)
B.h2K=new A.r(60,0.4,12)
B.h2L=new A.r(10,15,0.5)
B.h2M=new A.r(144,5,0.7)
B.h2N=new A.r(1.2,-1.7,2.3)
B.h2O=new A.r(31.5,23,0)
B.h2P=new A.r(0,0.9,0)
B.h2Q=new A.r(2.4,2.4,70)
B.h2R=new A.r(-120.6,140,-8)
B.h2T=new A.r(-146.4,15,172)
B.h2U=new A.r(0.82,1.7,0.3)
B.h2V=new A.r(47,7,34.4)
B.h2W=new A.r(-0.12,0,0)
B.h2Y=new A.r(3.5,94,0.2)
B.h2Z=new A.r(1.1,2.05,0.04)
B.h3_=new A.r(25,79,1.2)
B.h30=new A.r(1.12,0.78,0.76)
B.h31=new A.r(1.2,3.6,18)
B.h32=new A.r(10,14,0.5)
B.h33=new A.r(0,138.8,95)
B.h34=new A.r(0,35.5,-4.9)
B.h35=new A.r(5,8,0.5)
B.h36=new A.r(1.1,0.5,0.7)
B.h37=new A.r(-20,11.5,0)
B.h38=new A.r(0,1.1,0)
B.h39=new A.r(0,-0.5,0.6)
B.h3a=new A.r(32,6,0.5)
B.h3b=new A.r(0,9.8,-1.5)
B.h3c=new A.r(0,1.4,0)
B.h3e=new A.r(1,3,0.8)
B.h3f=new A.r(0,3.4,0.8)
B.h3h=new A.r(0.1,0.1,0.1)
B.h3i=new A.r(0,-0.6,38)
B.h3j=new A.r(-0.85,4,-3.2)
B.h3l=new A.r(-7.1,19,4)
B.h3m=new A.r(0,58,-14.2)
B.h3n=new A.r(40,7.2,1.2)
B.aVY=new A.r(0.42,0.34,0.12)
B.h3o=new A.r(1.7,0.08,1.2)
B.h3p=new A.r(0,0,0.38)
B.h3r=new A.r(5.2,3.9,-7.76)
B.h3t=new A.r(146.2,52,120)
B.h3u=new A.r(30,22,0.8)
B.h3v=new A.r(2.6,0.45,0.5)
B.h3w=new A.r(0.07,0.3,0.03)
B.h3y=new A.r(41.5,11,12)
B.h3z=new A.r(36.2,60,38)
B.h3B=new A.r(20,1.4,8)
B.h3C=new A.r(75.4,24,0)
B.h3D=new A.r(0,-0.2,0.19)
B.h3E=new A.r(-20,0.6,-50)
B.h3G=new A.r(1.2,49,36)
B.h3H=new A.r(0,9.3,0)
B.h3J=new A.r(9,12,0.6)
B.h3K=new A.r(0,-0.6,160)
B.aVZ=new A.r(1.4,3,1.6)
B.h3L=new A.r(0,40,0.95)
B.h3M=new A.r(11,3,0.5)
B.h3N=new A.r(34.6,34,7)
B.h3O=new A.r(190,0.6,90)
B.h3Q=new A.r(0,-1.9,-1.2)
B.h3R=new A.r(-3.2,1.15,-7.78)
B.h3S=new A.r(0,-3.4,1.2)
B.h3T=new A.r(64,10,0.2)
B.h3U=new A.r(0,-1.78,0.53)
B.h3V=new A.r(0.8,2.6,0.3)
B.aW_=new A.r(-6.5,7.4,-3)
B.h3W=new A.r(0,76,1.1)
B.h3X=new A.r(-4.6,-2,1.2)
B.h3Z=new A.r(0,40,1.4)
B.aW1=new A.r(0.6,32,34)
B.h4_=new A.r(-3,36,10.6)
B.h40=new A.r(0,14.5,-1.5)
B.h42=new A.r(0,0.2,0)
B.h44=new A.r(2.5,30,2.5)
B.h45=new A.r(160,1.2,120)
B.h46=new A.r(7,40,2.4)
B.h47=new A.r(30,26,0.6)
B.h48=new A.r(3.4,3.25,-7.85)
B.h49=new A.r(1.12,0.5,0.62)
B.h4a=new A.r(72.8,0,55)
B.h4b=new A.r(0.5,62,30)
B.h4c=new A.r(0,76,37.8)
B.h4d=new A.r(146.4,62,120)
B.h4e=new A.r(34.6,86,7)
B.h4f=new A.r(2.2,1.1,6.4)
B.h4g=new A.r(17,98,77.2)
B.h4h=new A.r(3,1.55,-7.1)
B.h4i=new A.r(0.4,3,3)
B.aW3=new A.r(0,-0.1,0.1)
B.h4j=new A.r(-52,96,-60.6)
B.h4k=new A.r(0,0,0.04)
B.h4m=new A.r(0,14,-19.3)
B.h4n=new A.r(2.4,11.6,-3.6)
B.h4o=new A.r(4,11,3.5)
B.h4q=new A.r(5,8.6,-2.25)
B.h4r=new A.r(0,-1.78,0.3)
B.h4s=new A.r(2.2,2.2,1.8)
B.h4t=new A.r(0,1.9,-1.2)
B.h4u=new A.r(0,56,2.1)
B.h4v=new A.r(0.26,0.04,0.02)
B.h4w=new A.r(-2.4,11.6,-3.6)
B.h4x=new A.r(11.25,0,-2.25)
B.h4y=new A.r(1,-1.8,2.4)
B.h4z=new A.r(-26,43,3.8)
B.h4A=new A.r(-60,15,3.6)
B.h4B=new A.r(20,0.6,-50)
B.h4C=new A.r(-11.8,4,0)
B.h4D=new A.r(1.2,4,7)
B.h4E=new A.r(11.2,4.7,-6)
B.h4F=new A.r(66,43,3.8)
B.aW4=new A.r(0,2.8,0)
B.h4G=new A.r(24,8,0.05)
B.aW5=new A.r(86,52,1.4)
B.h4I=new A.r(0.12,0,0)
B.h4J=new A.r(1.1,1.1,0.03)
B.h4K=new A.r(-50,0.6,-50)
B.h4L=new A.r(-26,94,0.6)
B.h4M=new A.r(0,32,320.9)
B.h4N=new A.r(0,5,1.1)
B.h4O=new A.r(4.6,5.4,3.2)
B.h4P=new A.r(3.4,3.55,-7.85)
B.h4R=new A.r(71.6,-22,62)
B.h4S=new A.r(0,3,1.2)
B.h4T=new A.r(22,18,0.4)
B.h4U=new A.r(-20,0.6,50)
B.h4W=new A.r(1,1,0.62)
B.aW6=new A.r(1.5,18,3.5)
B.h4Y=new A.r(3.5,3.1,-7.15)
B.h4Z=new A.r(0,1.5,-0.9)
B.h5_=new A.r(-0.28,0.55,-0.8)
B.h50=new A.r(0,-0.2,0.24000000000000002)
B.h52=new A.r(0,-3.3,4)
B.h53=new A.r(46,0.8,46)
B.h54=new A.r(1,-0.2,0.14)
B.h55=new A.r(0,137,1.6)
B.aW7=new A.r(84,3,0.5)
B.h56=new A.r(-1.9,0,-2.25)
B.h57=new A.r(0,-0.9,1.1)
B.h58=new A.r(8.2,1.05,-6.7)
B.h59=new A.r(0,9.6,11.6)
B.h5b=new A.r(34.6,34,69)
B.h5d=new A.r(-149.3,38,128)
B.h5e=new A.r(0.07,0.4,0.03)
B.h5f=new A.r(2,3.8,0.08)
B.h5g=new A.r(31,83,0.9)
B.h5h=new A.r(64,40,-3.2)
B.h5i=new A.r(0.95,0.62,2.2)
B.aW8=new A.r(1.4,3,112)
B.h5j=new A.r(1,33.4,-4.9)
B.h5k=new A.r(0,0.3,314)
B.aW9=new A.r(302.4,140,1.2)
B.h5l=new A.r(0,46.6,0.8)
B.h5n=new A.r(6.5,6.4,13)
B.h5o=new A.r(0,0,-8.8)
B.h5p=new A.r(0,0.7,-1)
B.h5s=new A.r(-11.9,0,8)
B.h5t=new A.r(7,0,1.5)
B.h5u=new A.r(-8.4,0.7,-6.4)
B.h5v=new A.r(-3.2,1.45,-7.78)
B.h5w=new A.r(34,25,21.6)
B.h5x=new A.r(0,41,0.45)
B.h5y=new A.r(-6.575,0,-0.25)
B.aWb=new A.r(0,0,-2.3)
B.aan=new A.r(-13,12.5,0)
B.h5B=new A.r(0,0,0.62)
B.h5C=new A.r(-60,62,3.6)
B.h5D=new A.r(0.2,-0.3,-0.4)
B.aWc=new A.r(10.85,18,0.5)
B.h5E=new A.r(120.1,174,-30)
B.h5F=new A.r(0.6,70,0.6)
B.h5G=new A.r(1.4,1.3,0.02)
B.h5H=new A.r(30,1.4,0.4)
B.h5I=new A.r(6.3,1.5,-7.2)
B.h5J=new A.r(8,14,1.2)
B.h5K=new A.r(-120.1,150,-60)
B.h5L=new A.r(0,5,11.2)
B.aWd=new A.r(0,0.62,2.85)
B.h5M=new A.r(37.5,23,0)
B.aWe=new A.r(0.05,8,16)
B.h5N=new A.r(0,-1.2,5)
B.h5O=new A.r(0.2,-2,2.6)
B.h5R=new A.r(11.2,2.4,-5.18)
B.h5T=new A.r(-1,-0.2,0.14)
B.h5U=new A.r(-17,83,77.2)
B.h5V=new A.r(0.5,8,6)
B.h5W=new A.r(1.2,1.2,0.3)
B.aWg=new A.r(2,0.08,2.4)
B.h5Y=new A.r(9.5,13.5,1.4)
B.h5Z=new A.r(2.2,18,2.2)
B.h6_=new A.r(22,0.2,0.8)
B.h60=new A.r(-0.32,0,0.5)
B.aWh=new A.r(1.3,4,0.8)
B.h62=new A.r(-26,89,3.8)
B.h63=new A.r(-120.1,174,-30)
B.h64=new A.r(1,0.8,0.95)
B.h65=new A.r(0.8,0.55,0.05)
B.h66=new A.r(0.14,0.35,17)
B.h67=new A.r(1.4,2.4,0.3)
B.h68=new A.r(0,11,8.2)
B.h69=new A.r(52,96,-60.6)
B.h6a=new A.r(26,146,0.6)
B.h6b=new A.r(3.2,5,0.8)
B.h6c=new A.r(0,24,-0.6)
B.h6d=new A.r(40,1.6,14)
B.h6g=new A.r(150,0.6,90)
B.h6h=new A.r(0,11.5,19.3)
B.h6i=new A.r(0,1.95,0.31)
B.h6j=new A.r(150,1.2,112)
B.aWi=new A.r(0.75,4.5,0.1)
B.h6l=new A.r(0.12,0,0.05)
B.h6n=new A.r(-34.6,34,69)
B.h6o=new A.r(-11.5,4,-1.5)
B.h6p=new A.r(9,1.2,9)
B.h6q=new A.r(120.1,150,-60)
B.h6r=new A.r(0,-0.5,0)
B.h6u=new A.r(0,37.5,-4.9)
B.h6v=new A.r(-2.4,14,8)
B.h6w=new A.r(-190,160,-14.2)
B.h6x=new A.r(0,0,3.6)
B.h6y=new A.r(3,14,1.5)
B.h6z=new A.r(5.5,8.5,0.5)
B.aWj=new A.r(0.05,8,9.6)
B.h6B=new A.r(1.5,94,3.5)
B.h6C=new A.r(0,8.2,0)
B.h6D=new A.r(-120.6,96,-52)
B.h6F=new A.r(4,94,0.4)
B.aWk=new A.r(1.4,8,1)
B.h6G=new A.r(120.6,96,-8)
B.h6H=new A.r(114,30,0.4)
B.h6I=new A.r(3.7,1.2,-7.1)
B.h6J=new A.r(1.5,1.35,1.5)
B.h6K=new A.r(8.2,0.05,-6.7)
B.h6L=new A.r(0,-0.3,0)
B.h6M=new A.r(6.575,0,-0.25)
B.aWl=new A.r(150.6,70,160)
B.h6N=new A.r(52,140,-60.6)
B.aWm=new A.r(0,1.8,0)
B.h6O=new A.r(3,3.21,-7.2)
B.h6P=new A.r(100,14,0.6)
B.h6Q=new A.r(9,5,0.6)
B.h6S=new A.r(26,94,0.6)
B.h6T=new A.r(9.8,5,-7.75)
B.aWn=new A.r(0,2.4,0)
B.h6U=new A.r(1.5,3.5,112)
B.h6V=new A.r(-8,31.5,6)
B.h6X=new A.r(22,7,34.4)
B.h6Y=new A.r(0,9.6,-1.5)
B.h6Z=new A.r(3,1.85,-7.1)
B.h70=new A.r(40,1.4,60)
B.h73=new A.r(16,0.4,16)
B.aap=new A.r(13,12.5,0)
B.h75=new A.r(0.34,0.66,0.9)
B.h77=new A.r(0.9,1.08,0.98)
B.h78=new A.r(12,0.4,6)
B.h79=new A.r(-6.5,7.9,-3)
B.h7a=new A.r(1.5,1.5,0.05)
B.h7b=new A.r(-6.5,5,-3)
B.h7c=new A.r(58.4,1.6,50)
B.h7d=new A.r(16,22,0.6)
B.h7e=new A.r(0.02,0.28,0.05)
B.h7g=new A.r(0,0.7,1)
B.h7h=new A.r(26,22,1.4)
B.h7i=new A.r(0,9.5,-7)
B.aWp=new A.r(13,8.6,9.5)
B.h7j=new A.r(-140,15,3.6)
B.h7k=new A.r(5,5,0.8)
B.h7l=new A.r(-3.6,4,-7.76)
B.h7m=new A.r(0.82,0.9,0.05)
B.h7n=new A.r(0,-5.5,-0.25)
B.h7o=new A.r(0,11,21.2)
B.h7q=new A.r(34.6,86,69)
B.h7r=new A.r(64,50,6.6)
B.h7s=new A.r(-34,40,36.4)
B.h7t=new A.r(2.2,1.8,2)
B.h7v=new A.r(190,160,-14.2)
B.h7x=new A.r(0,0.6,0)
B.h7A=new A.r(1.9,0,0)
B.h7B=new A.r(0.45,0.72,0.06)
B.h7C=new A.r(95,26,1.8)
B.h7E=new A.r(14,0.4,7)
B.h7F=new A.r(64,24,-3.2)
B.aaq=new A.r(1.2,140,320)
B.h7G=new A.r(1,4.5,0.8)
B.h7H=new A.r(0,9.2,0)
B.h7I=new A.r(120.1,150,0)
B.h7J=new A.r(0,0.03,0)
B.h7K=new A.r(-100,100,320)
B.h7M=new A.r(-100,400,350)
B.h7N=new A.r(-10,22,0)
B.h7Q=new A.r(-110,96,120)
B.h7R=new A.r(-112,38,24)
B.h7S=new A.r(-120,0,-30)
B.h7T=new A.r(-120,300,-320)
B.h7U=new A.r(-125,16,30)
B.h7V=new A.r(-13,15,2)
B.h7W=new A.r(-144,82,45)
B.h7X=new A.r(-147,54,45)
B.h7Y=new A.r(-148,56,120)
B.h7Z=new A.r(-14,17,4)
B.h8_=new A.r(-14,20,-28)
B.h80=new A.r(-18,6,0)
B.qL=new A.r(-1,0,0)
B.h81=new A.r(-1,0,-8)
B.h82=new A.r(-200,0,500)
B.h83=new A.r(-200,0,900)
B.h84=new A.r(-200,100,480)
B.h86=new A.r(-20,4,26)
B.h87=new A.r(-20,92,26)
B.h88=new A.r(-22,14,0)
B.h89=new A.r(-24,38,0)
B.h8a=new A.r(-260,330,-80)
B.h8b=new A.r(-3000,0,3000)
B.h8c=new A.r(-3000,0,-3000)
B.h8f=new A.r(-30,36,38)
B.h8g=new A.r(-30,40,100)
B.h8h=new A.r(-30,44,33)
B.h8j=new A.r(-330,40,760)
B.h8k=new A.r(-34,34,38)
B.h8l=new A.r(-34,40,38)
B.h8m=new A.r(-37,16,0)
B.h8n=new A.r(-37,50,38)
B.h8o=new A.r(-380,470,1300)
B.h8p=new A.r(-390,144,-120)
B.h8q=new A.r(-390,70,-120)
B.h8r=new A.r(-40,12,150)
B.h8s=new A.r(-40,30,164)
B.h8u=new A.r(-42,-34,96)
B.h8v=new A.r(0,-0.6,22)
B.h8w=new A.r(-4,20,0)
B.h8x=new A.r(-4,22,150)
B.aWq=new A.r(-4,22,8)
B.h8A=new A.r(-5,17,0)
B.h8B=new A.r(0,36.5,0)
B.h8C=new A.r(-60,28,56)
B.h8F=new A.r(-60,50,1)
B.h8G=new A.r(-60,70,6)
B.h8H=new A.r(-700,430,1150)
B.h8J=new A.r(-70,0,34)
B.h8K=new A.r(-70,95,34)
B.h8L=new A.r(-70,96,34)
B.h8M=new A.r(-720,360,320)
B.h8N=new A.r(-72,6,55)
B.h8O=new A.r(-80,12,30)
B.h8P=new A.r(-80,25,30)
B.h8T=new A.r(-8,24,0)
B.h8U=new A.r(-8,25,0)
B.h8V=new A.r(-8,42,-5)
B.h8W=new A.r(-8,-28,104)
B.h8X=new A.r(-8,-39,96)
B.h8Z=new A.r(0,0.35,0.78)
B.h9_=new A.r(0.6,6,14)
B.h90=new A.r(-11.9,0,-8)
B.h91=new A.r(32,3,0.5)
B.h92=new A.r(38,1.4,12)
B.h93=new A.r(25,0.5,66)
B.h94=new A.r(-8.4,1.9,-7.2)
B.h95=new A.r(1.6,8,5)
B.h96=new A.r(0.8,1.6,1.4)
B.h97=new A.r(0.85,1.15,0.9)
B.h99=new A.r(25,6,0.2)
B.aWr=new A.r(1.25,1,0.1)
B.h9a=new A.r(11.2,0,-6)
B.h9b=new A.r(-146.4,62,172)
B.h9c=new A.r(0.4,7,9)
B.h9d=new A.r(1.2,1.1,0.8)
B.h9f=new A.r(150,49,1.2)
B.h9g=new A.r(41.5,11,-12)
B.h9h=new A.r(62,0.2,42)
B.h9i=new A.r(4.6,1.5,-3.6)
B.h9j=new A.r(0,-0.7,0.8)
B.h9k=new A.r(0.6,9,9)
B.h9l=new A.r(8.9,1.9,0.9)
B.h9m=new A.r(42,84,1.2)
B.h9n=new A.r(-34.6,34,7)
B.h9o=new A.r(60,15,3.6)
B.aWs=new A.r(1.6,58,66)
B.h9p=new A.r(0,-1.55,-0.6)
B.h9q=new A.r(36.2,32.2,0.6)
B.h9r=new A.r(1.78,4.25,0.08)
B.h9s=new A.r(27,0.6,19)
B.h9t=new A.r(1.4,52,96)
B.h9u=new A.r(0,5.5,-0.25)
B.h9v=new A.r(28,2.5,26)
B.h9w=new A.r(0,0.7,0)
B.h9x=new A.r(-1.2,-1.6,2.2)
B.h9y=new A.r(11,25,0.3)
B.h9z=new A.r(17,83,77.2)
B.aWt=new A.r(-12,14,19.4)
B.aWu=new A.r(13,8.6,-9.5)
B.aWv=new A.r(0.05,0.12,0.03)
B.aWw=new A.r(8.2,0.95,-6.7)
B.h9A=new A.r(40,1.2,22)
B.h9B=new A.r(0.7,1.5,-7.2)
B.h9C=new A.r(0,15.3,-3.6)
B.h9D=new A.r(62,2.4,8)
B.h9E=new A.r(-1.6,11,6)
B.h9F=new A.r(0.1,0,0)
B.h9G=new A.r(0.32,0,0.5)
B.h9H=new A.r(2200,0.4,720)
B.h9I=new A.r(1.6,11,6)
B.h9J=new A.r(-10,0.5,150)
B.h9K=new A.r(1.1,0.8,0.6)
B.h9M=new A.r(-60,50,1.8)
B.h9N=new A.r(-0.9,0,4.4)
B.h9O=new A.r(-6.5,7.2,-3)
B.h9Q=new A.r(300,6,1.6)
B.h9R=new A.r(6.2,0.18,2.1)
B.h9S=new A.r(76,64,0.6)
B.h9T=new A.r(7.1,18,-3)
B.h9V=new A.r(74,1.2,90)
B.h9W=new A.r(36,1.6,12)
B.h9X=new A.r(15.5,2.6,0)
B.h9Z=new A.r(-8,-47.8,70)
B.ha_=new A.r(14,1.5,3.5)
B.aWx=new A.r(17,24,0.3)
B.ha0=new A.r(5.2,3.9,-7.82)
B.ha1=new A.r(0,0.7,2.4)
B.ha2=new A.r(0,0.3,0)
B.aWy=new A.r(2.3,7,0.5)
B.ha4=new A.r(0,66,1.8)
B.aWz=new A.r(-13,8.6,9.5)
B.ha7=new A.r(0.6,28,52)
B.ha8=new A.r(6.5,6,14)
B.ha9=new A.r(0,-1.99,0.14)
B.haa=new A.r(0.4,36,34)
B.hac=new A.r(4.6,-2,1.2)
B.had=new A.r(11.5,4,-1.5)
B.hae=new A.r(0,14,19.3)
B.aWA=new A.r(0,0,-2.4)
B.haf=new A.r(-36.2,60,38)
B.hag=new A.r(110,18,0.6)
B.hah=new A.r(0,-1.78,0.52)
B.hai=new A.r(0.12,0.1,0.03)
B.haj=new A.r(9.8,5,-7.58)
B.hak=new A.r(14,1.5,5)
B.aWB=new A.r(0.5,1.4,2)
B.hal=new A.r(3.5,0.15,-7.2)
B.aWC=new A.r(64,2,1.2)
B.ham=new A.r(1.2,26.4,20)
B.han=new A.r(-3.6,4,-7.82)
B.hao=new A.r(-3,37,-4.9)
B.hap=new A.r(0.3,2,36)
B.has=new A.r(24,0.8,6.5)
B.hat=new A.r(-28,76,38.3)
B.hav=new A.r(22,0.5,5)
B.haw=new A.r(9,10,0.6)
B.hax=new A.r(0,22,2.1)
B.haA=new A.r(0,56,0.5)
B.haB=new A.r(150,1.2,70)
B.haC=new A.r(58,104,31.7)
B.haD=new A.r(100,52,2.4)
B.haE=new A.r(2.1,0.4,0.5)
B.haF=new A.r(0,14.7,-1.5)
B.aWD=new A.r(0.4,29,31)
B.haG=new A.r(-19.5,-1,-1.5)
B.haH=new A.r(80,0.5,60)
B.haI=new A.r(6.85,4,-3.2)
B.haJ=new A.r(52,58,0.6)
B.haK=new A.r(0,14.4,0)
B.aWF=new A.r(0.12,3,1.9)
B.haL=new A.r(0.06,0.62,0.8)
B.haM=new A.r(0,18.5,0)
B.haN=new A.r(50,0.6,-50)
B.haP=new A.r(9.55,5.7,-7.5)
B.haR=new A.r(-400,80,-19.2)
B.haS=new A.r(0.8,2.4,0.3)
B.aWG=new A.r(0,0.7,2)
B.haT=new A.r(3.5,26,15)
B.aWH=new A.r(0,24,40.2)
B.haU=new A.r(0.8,1.1,1.2)
B.haV=new A.r(0,51.5,20)
B.haW=new A.r(-20,0.5,145)
B.haX=new A.r(2.4,14,8)
B.haY=new A.r(0,47.25,-2.25)
B.haZ=new A.r(-8,31.5,-6)
B.hb_=new A.r(0.5,0.5,0.04)
B.hb0=new A.r(12.5,39,0.6)
B.hb1=new A.r(140,62,3.6)
B.hb2=new A.r(0,3,0.9)
B.hb3=new A.r(9,0.7,15)
B.hb4=new A.r(3,36,10.6)
B.hb5=new A.r(25,10,0.2)
B.hb7=new A.r(0.14,8,0.3)
B.hb8=new A.r(1.9,0.05,1.35)
B.hbb=new A.r(0.6,0.12,0.03)
B.hbc=new A.r(-10.7,1.2,-6.4)
B.hbd=new A.r(-52,140,-60.6)
B.hbe=new A.r(-71.2,46.6,55)
B.hbf=new A.r(5,4.5,3)
B.hbg=new A.r(120,36,1.4)
B.hbh=new A.r(0,3.7,2.6)
B.Vh=new A.FL(0,"hot")
B.Vi=new A.FL(1,"neutral")
B.Vj=new A.FL(2,"ground")
B.aWV=new A.FL(3,"unknown")
B.eKZ=new C.z(-20,46)
B.heV=new A.Aw(B.eKZ,0,2.4,"Having the drink",!0,!1,!1,"")
B.etq=new C.z(34,62)
B.heW=new A.Aw(B.etq,3.141592653589793,2.2,"Picking up the remote",!1,!0,!1,"")
B.hf3=new A.aBf(null)
B.hpH=new A.eVu(0,"material")})();(function staticFields(){$.dR=0
$.aj6=!1
$.aj7=!0
$.h8E=!1
$.fWR=C.U(x.N,C.av("Mv"))
$.fWQ=C.U(x.N,C.av("aA<Mv?>"))
$.i2b=C.U(x.N,C.av("ai<+(r,r)>"))
$.i29=C.U(x.N,x.dg)
$.hoq=C.U(x.N,C.av("jQ"))
$.ajH=null
$.E3=null
$.W1=null
$.heO=null
$.ahs="xbot"})();(function lazyInitializers(){var w=a.lazyFinal
w($,"imt","hwu",()=>C.fWA())
w($,"ihn","hu_",()=>new A.aSV($.ax()))
w($,"ip0","bEG",()=>{var v,u,t=C.av("O<aSU>"),s=C.a([],t)
for(v=0;v<2;++v){u=v*9
D.d.v(s,C.a([A.fW1(v,175,u),A.fW1(v,612,u+14),A.fW1(v,1013,u+7)],t))}return s})
w($,"ioD","fVb",()=>C.a([A.hjP(-80,80,400,565),A.hjP(-80,80,715,885)],C.av("O<bwl>")))
w($,"iho","aQX",()=>A.hzQ())
w($,"ip_","hxT",()=>{var v=C.a([A.vL("Wire a standard 120 volt receptacle: black to brass, white to silver, bare copper to green.",B.Rm,B.dod,"outlet","",!0,B.Id,B.cW6,!1,"Wall outlet",new A.fxx()),A.vL("A single-pole switch breaks the hot wire to the light: two black wires go on the two brass screws.",B.da6,B.dbA,"switch","",!0,B.Id,B.cUx,!1,"Light switch",new A.fxy()),A.vL("A GFCI protects you near water. Power comes in on LINE. The LOAD screws (covered with tape) feed other outlets.",B.Rm,B.det,"gfci","",!0,B.Id,B.dd0,!1,"GFCI outlet",new A.fxz()),A.vL("Join the house wires to the fixture wires with wire nuts: black to black, white to white, ground to ground.",B.Rm,B.d59,"light","",!0,B.Id,B.dpV,!1,"Ceiling light",new A.fxA()),A.vL("A fan hangs from a strong fan-rated box. Join black, white and ground with wire nuts, then fasten the canopy.",B.Rm,B.dco,"fan","",!0,B.Id,B.d19,!1,"Ceiling fan",new A.fxB())],C.av("O<SW>"))
D.d.v(v,$.fVh())
return v})
w($,"ip1","fVh",()=>{var v="switch",u="outlet"
return C.a([A.vL("Breaks BOTH hot legs of a 240 volt circuit at once: water heaters and baseboard heat.",B.dsR,B.c4p,"switch2p",v,!0,B.dvl,B.d5l,!0,"Double-pole switch (240 V)",new A.fxC()),A.vL("One light, two switches. One COMMON screw and two TRAVELER screws; it pairs with a second three-way.",B.dm9,B.cVQ,"switch3",v,!0,B.dvD,B.dd3,!0,"Three-way switch",new A.fxD()),A.vL("Sits in the middle of two three-way switches: two traveler wires in on one side, two out on the other.",B.dre,B.dfU,"switch4",v,!0,B.dvm,B.dl_,!0,"Four-way switch",new A.fxE()),A.vL("Needs a NEUTRAL wire in the box as well: hot in, hot out to the light, neutral and ground.",B.d_V,B.d2K,"switchsmart",v,!0,B.dvE,B.d0c,!0,"Smart, motion or timer switch",new A.fxF()),A.vL("Two switches in one device: one hot feed is split between them, and two separate lights come out.",B.cIO,B.djh,"switchcombo",v,!0,B.dxk,B.cvX,!0,"Combination (double) switch",new A.fxG()),A.vL("The tab between the brass screws is broken off: the top half is switched, the bottom half is always on.",B.dcX,B.cvl,"split",u,!0,B.dvF,B.die,!0,"Split (half-switched) outlet",new A.fxH()),A.vL("Two hots, a neutral and a ground: the dryer 14-30, and the range and car charger 14-50.",B.doV,B.cZB,"v240four",u,!0,B.dvC,B.cNb,!0,"4-wire 240 V outlet (dryer, range, EV)",new A.fxI()),A.vL("Two hots and a neutral, with no separate ground: the old 10-30 and 10-50, from before 1996.",B.d65,B.drL,"v240three",u,!1,B.dxi,B.dqW,!0,"3-wire 240 V outlet (old dryer or range)",new A.fxJ()),A.vL("Two hots and a ground, and no neutral at all: the 6-series outlets.",B.dpB,B.d9U,"v240only",u,!0,B.dvS,B.doj,!0,"240 V only outlet (window AC, welder)",new A.fxK()),A.vL("Hot and neutral as usual, but the ground goes on its own wire straight back to the panel: shops and offices.",B.drz,B.db_,"isolated",u,!0,B.dwJ,B.d6u,!0,"Isolated-ground outlet",new A.fxL())],C.av("O<SW>"))})
w($,"ipc","H7",()=>{var v,u=C.a([],x.n)
for(v=0;v<10;++v)u.push(-72+16*v)
return u})})()};
(a=>{a["XNbB7TgmvmmHVQL9LywqrJNbSo4="]=a.current})($__dart_deferred_initializers__);