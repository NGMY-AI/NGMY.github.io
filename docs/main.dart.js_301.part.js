((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,C,D,Y,F,Z,N,T,A_,U,L,A0,O,G,A1,A2,V,W,P,A3,A4,Q,K,A5,A6,M,A={
uU(d,e,f){var w=d.a,v=d.b,u=d.c
return new A.D(w+(e.a-w)*f,v+(e.b-v)*f,u+(e.c-u)*f)},
bBX(d,e){var w=Math.cos(e),v=Math.sin(e),u=d.a,t=d.c
return new A.D(u*w+t*v,d.b,-u*v+t*w)},
rO(d,e,f,g){var w,v,u,t,s,r,q,p,o=new A.fLB(Math.cos(e),Math.sin(e)),n=new A.fLz(f),m=new A.fLA(n,e,o,g),l=new A.fLy(n,e,o),k=C.a([],x.z)
for(w=d.length,v=x.o,u=0;u<d.length;d.length===w||(0,C.L)(d),++u){t=d[u]
s=C.a([],v)
for(r=t.a,q=r.length,p=0;p<r.length;r.length===q||(0,C.L)(r),++p)s.push(m.$1(r[p]))
k.push(new A.mt(s,l.$1(t.b),t.c,t.d,t.e,t.f,t.r,t.w,t.x,t.y,t.z))}return k},
Gj(d,e,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
if(d.length<3)return d
w=C.a([D.d.gL(d)],x.o)
for(v=1;u=v+1,u<d.length;v=u){t=d[v-1]
s=d[v]
r=d[u]
q=s.a
p=s.b
o=s.c
n=new A.D(q-t.a,p-t.b,o-t.c)
m=new A.D(r.a-q,r.b-p,r.c-o)
l=Math.min(e,n.gTf()*0.5)
k=Math.min(e,m.gTf()*0.5)
j=n.goy(0)
i=new A.D(q-j.a*l,p-j.b*l,o-j.c*l)
j=m.goy(0)
h=new A.D(q+j.a*k,p+j.b*k,o+j.c*k)
for(g=0;g<=a0;++g){f=g/a0
w.push(A.uU(A.uU(i,s,f),A.uU(s,h,f),f))}}w.push(D.d.gal(d))
return w},
agM(a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2
if(a3.length<3)return a3
w=C.a([],x.o)
for(v=0;u=v+1,t=a3.length,u<t;v=u){s=v===0?a3[v]:a3[v-1]
r=a3[v]
q=a3[u]
p=v+2
o=p<t?a3[p]:q
for(t=s.a,p=r.a,n=q.a,m=o.a,l=s.b,k=r.b,j=q.b,i=o.b,h=s.c,g=r.c,f=q.c,e=o.c,d=0;d<a4;++d){a0=d/a4
a1=a0*a0
a2=new A.fLr(a0,a1,a1*a0)
w.push(new A.D(a2.$4(t,p,n,m),a2.$4(l,k,j,i),a2.$4(h,g,f,e)))}}w.push(D.d.gal(a3))
return w},
hKs(d){var w,v,u,t,s,r,q,p,o,n
for(w=d.length,v=!0,u=!0,t=0;t<w;++t)if(d[t].c>=0.5)u=!1
else v=!1
if(v)return d
if(u)return B.d31
s=C.a([],x.o)
for(r=0;w=d.length,r<w;){q=d[r];++r
p=d[r%w]
w=q.c
o=w>=0.5
n=p.c
if(o)s.push(q)
if(o!==n>=0.5)s.push(A.uU(q,p,(0.5-w)/(n-w)))}return s},
he7(a2,a3,a4){var w,v,u,t,s,r,q,p=J.a5(a2),o=p.h(a2,0).a,n=p.h(a2,0).b,m=p.h(a2,1).a,l=p.h(a2,1).b,k=p.h(a2,2).a,j=p.h(a2,2).b,i=p.h(a2,3).a,h=p.h(a2,3).b,g=m-k,f=i-k,e=o-m+k-i,d=l-j,a0=h-j,a1=n-l+j-h
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
hLf(d,e,f,g){var w,v=e.d,u=e.e,t=A.he7(f,v,u)
if(t==null)return
w=d.a
J.by(w.save())
d.aw(0,t.a)
w.clipRect(C.c0(new C.a9(0,0,v,0+u)),$.q6()[1],!0)
e.c.$3(d,new C.at(v,u),g)
w.restore()},
hLg(d,e,f,g,h,i){var w,v,u,t,s,r,q,p,o,n,m,l,k=e.d,j=e.e
$.W()
w=new C.qS()
e.c.$3(C.D0(w,null),new C.at(k,j),i)
v=w.pu()
u=k/g
t=j/h
for(s=f.length,r=d.a,q=0+u,p=0+t,o=0;o<f.length;f.length===s||(0,C.L)(f),++o){n=f[o]
m=A.he7(n.c,u,t)
if(m==null)continue
J.by(r.save())
l=m.a
r.concat(C.fLx(C.Gn(l)))
r.clipRect(C.c0(new C.a9(0,0,q,p)),$.q6()[1],!0)
r.translate(-n.a*u,-n.b*t)
n=v.b
n===$&&C.c()
n=n.a
n===$&&C.c()
n=n.a
n.toString
r.drawPicture(n)
r.restore()}v.q()},
D:function D(d,e,f){this.a=d
this.b=e
this.c=f},
mt:function mt(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
d1:function d1(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
nc:function nc(d,e,f){this.a=d
this.b=e
this.c=f},
xB:function xB(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
IQ:function IQ(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
iK:function iK(d){var _=this
_.a=d
_.c=_.b=0
_.d=1
_.e=0
_.f=2
_.r=!1
_.x=_.w=0},
bVB:function bVB(d,e){this.a=d
this.b=e},
bVC:function bVC(d){this.a=d},
bVA:function bVA(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
bVD:function bVD(d,e,f){this.a=d
this.b=e
this.c=f},
bVz:function bVz(d,e){this.a=d
this.b=e},
bVE:function bVE(d,e,f){this.a=d
this.b=e
this.c=f},
fLB:function fLB(d,e){this.a=d
this.b=e},
fLz:function fLz(d){this.a=d},
fLA:function fLA(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fLy:function fLy(d,e,f){this.a=d
this.b=e
this.c=f},
fLr:function fLr(d,e,f){this.a=d
this.b=e
this.c=f},
AG:function AG(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=6
_.f=160
_.r=-1.25
_.w=1.35
_.x=0
_.y=1.25
_.z=!1
_.ax=_.at=_.as=_.Q=null
_.P$=0
_.T$=h
_.bt$=_.bN$=0},
bGr:function bGr(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bGq:function bGq(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bPH:function bPH(d){this.a=d},
b3X:function b3X(d,e,f,g,h,i,j,k,l,m){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.w=j
_.x=k
_.y=l
_.a=m},
cm9:function cm9(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cma:function cma(d,e){this.a=d
this.b=e},
cm3:function cm3(){},
cm4:function cm4(d,e,f){this.a=d
this.b=e
this.c=f},
cm2:function cm2(d){this.a=d},
cm5:function cm5(){},
cm6:function cm6(d,e,f){this.a=d
this.b=e
this.c=f},
cm8:function cm8(d,e){this.a=d
this.b=e},
cm7:function cm7(d){this.a=d},
zV:function zV(d,e,f,g,h,i,j,k,l){var _=this
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
atv:function atv(d,e,f,g,h,i,j,k,l,m){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.z=k
_.Q=l
_.a=m},
bp6:function bp6(d,e,f,g,h,i){var _=this
_.d=$
_.e=d
_.f=e
_.r=f
_.w=40
_.x=g
_.bq$=h
_.a8$=i
_.c=_.a=null},
eSX:function eSX(d){this.a=d},
eSW:function eSW(d){this.a=d},
eST:function eST(d){this.a=d},
eSU:function eSU(d){this.a=d},
eSV:function eSV(d){this.a=d},
eSR:function eSR(d){this.a=d},
eSS:function eSS(d,e){this.a=d
this.b=e},
aLH:function aLH(){},
fO2(d){var w,v,u=$.fO1.h(0,d)
if(u!=null)return C.f7(u,x.d)
w=B.a33.h(0,d)
if(w==null)return C.f7(null,x.d)
v=$.fO0.h(0,d)
if(v==null){v=new A.bOD(w,d).$0()
$.fO0.n(0,d,v)}return v},
aTO(d){var w=0,v=C.j(x.H),u
var $async$aTO=C.e(function(e,f){if(e===1)return C.f(f,v)
for(;;)switch(w){case 0:w=2
return C.b(A.fO2(d),$async$aTO)
case 2:u=J.aV(B.a33.gee(B.a33))
case 3:if(!u.C()){w=4
break}w=5
return C.b(A.fO2(u.gS(u)),$async$aTO)
case 5:w=3
break
case 4:return C.h(null,v)}})
return C.i($async$aTO,v)},
hsI(d){var w,v,u=new Float64Array(d*16)
for(w=0;w<d;++w){v=w*16
u[v+15]=1
u[v+10]=1
u[v+5]=1
u[v]=1}return u},
h0V(d,e,f){var w,v,u,t
if(d>e){w=d
v=e}else{w=e
v=d}if(w>f){u=w
w=f}else u=f
if(v>w){t=w
w=v
v=t}return(v*65536+w)*65536+u},
hsJ(d,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=d.c,g=d.b===1,f=g?4:3,e=h.length
if(e===0)return
w=d.a*f
if(a0<=h[0]||e===1){for(g=d.d,v=a1.$flags|0,u=0;u<f;++u){t=g[u]
v&2&&C.aj(a1)
a1[w+u]=t}return}s=e-1
if(a0>=h[s]){for(g=d.d,v=s*f,t=a1.$flags|0,u=0;u<f;++u){r=g[v+u]
t&2&&C.aj(a1)
a1[w+u]=r}return}for(q=0;s-q>1;){p=D.o.aA(q+s,1)
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
h0W(d,a0,a1,a2,a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
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
b9v:function b9v(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
b9Q:function b9Q(d,e){this.b=d
this.c=e},
beR:function beR(d,e,f){this.a=d
this.b=e
this.c=f},
dgF:function dgF(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=$},
LJ:function LJ(d,e,f,g,h){var _=this
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
bOD:function bOD(d,e){this.a=d
this.b=e},
bOv:function bOv(){},
bOs:function bOs(d,e){this.a=d
this.b=e},
bOr:function bOr(){},
bOx:function bOx(d,e,f){this.a=d
this.b=e
this.c=f},
bOy:function bOy(d){this.a=d},
bOz:function bOz(d){this.a=d},
bOw:function bOw(d,e){this.a=d
this.b=e},
bOt:function bOt(d){this.a=d},
bOu:function bOu(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
bOC:function bOC(d){this.a=d},
bOA:function bOA(){},
bOB:function bOB(d){this.a=d},
bOE:function bOE(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
dmc:function dmc(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
daP:function daP(d,e){this.a=d
this.b=e},
JX:function JX(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bGW:function bGW(d,e,f){var _=this
_.a=d
_.b=e
_.e=_.d=_.c=$
_.f=f},
bGX:function bGX(){},
fNj(d,e){var w=C.a([],x.ha),v=C.a([new A.La(),new A.La(),new A.La()],x.gQ),u=C.a([],x.s),t=new C.eJ()
t.dB(e)
w=new A.aRC(d,t,w,v,u)
w.bvE(d,e)
return w},
h_H(d,e){var w,v,u,t,s,r,q,p,o=J.a5(e),n=x.Y,m=n.a(o.h(e,"wired"))
if(m==null)m=D.rd
w=n.a(o.h(e,"plumbed"))
if(w==null)w=D.rd
for(o=d.gqr(),n=o.length,v=J.a5(w),u=J.a5(m),t=0;t<o.length;o.length===n||(0,C.L)(o),++t){s=o[t]
r=""+s.a
q=u.h(m,r)
if(C.qH(q)){s.ay=!q
s.CW=null}p=v.h(w,r)
if(C.qH(p)){r=s.c
r=r==="bathroom"||r==="kitchen"}else r=!1
if(r){s.ch=!p
s.cx=null}}},
fNk(d){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=J.a5(d),j=C.aJ(k.h(d,"seed"))
j=j==null?l:D.k.N(j)
if(j==null)j=1
w=C.aJ(k.h(d,"clock"))
w=w==null?l:D.k.N(w)
v=A.fNj(j,(w==null?0:w)+7)
j=C.aJ(k.h(d,"points"))
j=j==null?l:D.k.N(j)
v.r=j==null?10:j
j=C.aJ(k.h(d,"food"))
j=j==null?l:D.k.N(j)
v.w=j==null?8:j
j=C.aJ(k.h(d,"medicine"))
j=j==null?l:D.k.N(j)
v.x=j==null?4:j
j=C.aJ(k.h(d,"served"))
j=j==null?l:D.k.N(j)
v.y=j==null?0:j
j=C.aJ(k.h(d,"saved"))
j=j==null?l:D.k.N(j)
v.z=j==null?0:j
j=C.aJ(k.h(d,"clock"))
if(j==null)j=l
v.as=j==null?0:j
j=C.aJ(k.h(d,"nextCall"))
j=j==null?l:D.k.N(j)
v.Q=j==null?1:j
j=x.g
u=j.a(k.h(d,"res"))
if(u==null)u=D.cu
w=J.a5(u)
t=x.G
s=0
for(;;){r=v.c
r===$&&C.c()
if(!(s<r.length&&s<w.gM(u)))break
q=t.a(w.h(u,s))
r=v.c[s]
p=J.a5(q)
r.b=C.dQ(p.h(q,"hunger"))
r.c=C.dQ(p.h(q,"health"))
r.d=C.dQ(p.h(q,"comfort"))
r.e=J.z(p.h(q,"sick"),!0)
r.f=!J.z(p.h(q,"alive"),!1)
p=C.aJ(p.h(q,"bed"))
p=p==null?l:D.k.N(p)
r.r=p==null?-1:p;++s}o=j.a(k.h(d,"beds"))
if(o==null)o=D.cu
w=J.a5(o)
r=v.e
s=0
for(;;){if(!(s<r.length&&s<w.gM(o)))break
q=t.a(w.h(o,s))
p=r[s]
n=J.a5(q)
p.a=D.k.N(C.dQ(n.h(q,"res")))
p.b=C.dQ(n.h(q,"care"))
p.c=C.dQ(n.h(q,"heal"));++s}k=j.a(k.h(d,"calls"))
k=J.aV(k==null?D.cu:k)
j=v.d
while(k.C()){m=t.a(k.gS(k))
w=J.a5(m)
r=new A.Hh(D.k.N(C.dQ(w.h(m,"id"))),D.k.N(C.dQ(w.h(m,"res"))),C.cO(w.h(m,"kind")),C.cO(w.h(m,"msg")),D.k.N(C.dQ(w.h(m,"reward"))))
r.f=C.dQ(w.h(m,"age"))
j.push(r)}return v},
aRE(){var w=0,v=C.j(x.dy),u,t=2,s=[],r,q,p,o,n
var $async$aRE=C.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return C.b(C.az(),$async$aRE)
case 7:r=e
q=C.aT(J.q(r.a,"ngmy_community_v1"))
if(q==null){u=null
w=1
break}p=x.c.a(D.R.aG(0,q,null))
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
return C.i($async$aRE,v)},
aRD(){var w=0,v=C.j(x.H),u=1,t=[],s,r,q
var $async$aRD=C.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:u=3
w=6
return C.b(C.az(),$async$aRD)
case 6:s=e
w=7
return C.b(J.hC(s,"ngmy_community_v1"),$async$aRD)
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
return C.i($async$aRD,v)},
EH:function EH(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
a8N:function a8N(d){var _=this
_.a=d
_.b=25
_.d=_.c=100
_.e=!1
_.f=!0
_.r=-1},
Hh:function Hh(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=0},
La:function La(){this.a=-1
this.b=100
this.c=0},
aRC:function aRC(d,e,f,g,h){var _=this
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
bHx:function bHx(){},
bHu:function bHu(d){this.a=d},
bHv:function bHv(d,e){this.a=d
this.b=e},
bHw:function bHw(){},
bHy:function bHy(d){this.a=d},
bHz:function bHz(){},
a5Y:function a5Y(d,e){this.c=d
this.a=e},
bi_:function bi_(){var _=this
_.d=null
_.e=$
_.f=null
_.r=$
_.x=_.w=null
_.y=0
_.c=_.a=null},
dKn:function dKn(d,e){this.a=d
this.b=e},
dKo:function dKo(d){this.a=d},
dKA:function dKA(){},
dKu:function dKu(d,e){this.a=d
this.b=e},
dKv:function dKv(d){this.a=d},
dKt:function dKt(d){this.a=d},
dKj:function dKj(){},
dKk:function dKk(){},
dKD:function dKD(){},
dKE:function dKE(){},
dKC:function dKC(d,e){this.a=d
this.b=e},
dKB:function dKB(d,e){this.a=d
this.b=e},
dKi:function dKi(d,e){this.a=d
this.b=e},
dKp:function dKp(d,e,f){this.a=d
this.b=e
this.c=f},
dKq:function dKq(d,e,f){this.a=d
this.b=e
this.c=f},
dKr:function dKr(d,e,f){this.a=d
this.b=e
this.c=f},
dKs:function dKs(d,e){this.a=d
this.b=e},
dKm:function dKm(d,e,f){this.a=d
this.b=e
this.c=f},
dKl:function dKl(d,e,f){this.a=d
this.b=e
this.c=f},
dKx:function dKx(d,e){this.a=d
this.b=e},
dKy:function dKy(d,e){this.a=d
this.b=e},
dKz:function dKz(d){this.a=d},
dKw:function dKw(d){this.a=d},
dKF:function dKF(d){this.a=d},
dKG:function dKG(){},
abx:function abx(d,e,f){this.c=d
this.d=e
this.a=f},
bcU:function bcU(d,e){this.b=d
this.a=e},
aSL(d,e,f,g,h,i,j){return new A.a3C(g,i,h,e,f,j)},
Ak(d){return D.d.iD($.ho6(),new A.foq(d))},
bCl(d,e){var w,v,u=d.e,t=new C.K(u,new A.fLU(),C.U(u).k("K<1,n>")).fJ(0)
u=e.b
w=C.a3(u).k("bc<2>")
v=C.db(new C.bc(u,w),w.k("J.E"))
return t.da(0,v.gkV(v))},
hk0(d,e,f,g,h){var w,v
if(e.a&&e.c===0){if(e.r)return"SHOCK! The breaker was still ON and you touched a live wire. Always turn the power OFF and test the wires first."
return"STOP! The breaker is still ON, so these wires are live (120 volts). Turn the breaker OFF first. This can shock you badly."}if(e.c!==0)return"The device is already in the box. Pull it out again to change the wires."
if(!e.r&&!h&&!g.c.t(0,f))return d.r.$2(f,g)
w=e.b
v=g.a
if(w.h(0,v)!=null)return"That place already has a wire. Tap the wire to take it off first."
if(new C.bc(w,C.a3(w).k("bc<2>")).t(0,f))return"That wire is already fastened. Tap it to take it off if you want to move it."
w.n(0,v,f)
return null},
afy(b1,b2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8=null,a9=new A.fox(b1),b0=new A.fov(b1)
for(w=b2.b,w=new C.cK(w,C.a3(w).k("cK<1,2>")).gae(0),v=0,u=0,t=0,s=0,r=0,q=0,p=0,o=0,n=0,m=0;w.C();){l=w.d
k=a9.$1(l.a)
j=b0.$1(l.b)
if(k==="load"){++m
continue}A:{i="hot"===j
h=i
g=a8
if(h){g="hot"===k
h=g
f=k
e=!0
d=!0}else{f=a8
e=!1
d=!1
h=!1}if(h){++v
break A}a0=a8
if(i){if(d)h=f
else{h=k
f=h
d=!0}a0="neutral"===h
h=a0
a1=!0}else{a1=!1
h=!1}if(h){++u
break A}a2=a8
if(i){if(d)h=f
else{h=k
f=h
d=!0}a2="ground"===h
h=a2
a3=!0}else{a3=!1
h=!1}if(h){++t
break A}a4="neutral"===j
h=a4
if(h)if(a1)h=a0
else{if(d)h=f
else{h=k
f=h
d=!0}a0="neutral"===h
h=a0
a1=!0}else h=!1
if(h){++s
break A}if(a4)if(e)h=g
else{if(d)h=f
else{h=k
f=h
d=!0}g="hot"===h
h=g
e=!0}else h=!1
if(h){++r
break A}if(a4)if(a3)h=a2
else{if(d)h=f
else{h=k
f=h
d=!0}a2="ground"===h
h=a2
a3=!0}else h=!1
if(h){++q
break A}a5="ground"===j
h=a5
if(h)if(a3)h=a2
else{if(d)h=f
else{h=k
f=h
d=!0}a2="ground"===h
h=a2}else h=!1
if(h){++p
break A}if(a5)if(e)h=g
else{if(d)h=f
else{h=k
f=h
d=!0}g="hot"===h
h=g}else h=!1
if(h){++o
break A}if(a5)if(a1)h=a0
else{a0="neutral"===(d?f:k)
h=a0}else h=!1
if(h)++n}}w=b1.e
h=C.U(w).k("a2<1>")
a6=new C.a2(w,new A.fot(),h).gM(0)
a7=new C.a2(w,new A.fou(),h).gM(0)
if(t>0||o>0)return B.fKr
w=u>0
if(!(w&&s>0))h=r>0&&v>0
else h=!0
if(h)return B.fKy
if(w&&r>0)return B.fKs
if(q>0||n>0)return B.fKv
if(m>0&&v<a6)return B.fKx
if(v<a6)return B.fKt
if(a7>0&&s<a7)return B.fKw
if(p===0)return B.fKq
return B.fKu},
bxU(d,e){var w
if(d==="light"||d==="fan")w=e.c===0?6.4:0.6
else w=e.c===0?4.7:-0.25
return w},
bA3(d,e,f){var w,v
if(d==="light"||d==="fan"){w=A.bxU(d,f)
v=f.c===0?w-3.2:w
switch(e){case 51:return new A.D(-1.5,-0.3,v)
case 52:return new A.D(0,-0.3,v)
default:return new A.D(1.5,-0.3,v)}}w=A.bxU(d,f)
switch(e){case 21:return new A.D(0.98,-0.2+(d==="gfci"?0.95:0.85),w-0.45)
case 22:return new A.D(0.98,-0.2+(d==="gfci"?-0.75:-0.55),w-0.45)
case 23:return new A.D(-0.98,-0.2+(d==="gfci"?0.95:0.85),w-0.45)
case 24:return new A.D(-0.98,-0.2+(d==="gfci"?-0.75:-0.55),w-0.45)
default:return new A.D(0,-1.98,w+0.52)}},
fVc(a9,b0,b1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=C.a([],x.z),a6=new A.iK(a5),a7=a9.a,a8=a7==="light"||a7==="fan"
if(b1){a6.b=1
a6.hX(B.fFV,B.aS_,B.uT,3)
a6.hX(B.fGZ,B.aS_,B.uT,3)
a6.hX(B.fIw,B.aSk,B.uT,2)
a6.hX(B.fHt,B.aSk,B.uT,2)
a6.b=2
a6.pl(B.fFz,B.aRV,B.m7,0.05,3)
a6.pl(B.fFa,B.aRV,B.m7,0.05,3)
a6.pl(B.fF3,B.fIV,B.m7,0.05,2)}w=A.haY(a6,a7,!0)
v=new A.fmt(a6,b0,a7,a8)
u=D.d.gL(w)
t=a7==="switch"
if(t){s=D.d.gal(w)
v.$5(10,u.ad(0,B.fAC),B.fIz,"blackLine",B.Kl)
v.$5(13,s.ad(0,B.fIG),B.fDS,"blackLoad",B.Kl)
v.$5(12,u.ad(0,B.fGE),B.fDk,"ground",B.x4)
a6.b=6
r=x.o
a6.jV(C.a([u.ad(0,B.aRU),B.fAY,B.TH],r),0.075,B.wM,!1,0.3,8)
a6.jV(C.a([s.ad(0,B.aRU),B.fG_,B.TH],r),0.075,B.wM,!1,0.3,8)
a6.Kn(B.TH,B.fIt,0.28,B.abH,0.18,0.3,10)}else{v.$5(10,u.ad(0,B.fDY),B.fAS,"black",B.Kl)
v.$5(11,u.ad(0,B.fEZ),B.fGb,"white",B.wM)
v.$5(12,u.ad(0,B.fFh),B.fFb,"ground",B.x4)}if(a8)A.hbX(a6,a7,b0)
else A.hbC(a6,a7,A.bxU(a7,b0),b0.w,!1)
if(b0.e&&b0.c===0){a6.b=0
a6.d=0.5
for(r=a9.f,q=r.length,p=0;p<q;++p){o=r[p]
n=A.bA3(a7,o.a,b0)
if(o.e)m=D.cj
else{l=o.f
if(l==="ground")m=D.bo
else{l=l==="neutral"?D.c:B.VU
m=l}}if(a8)l=0
else{l=n.a
if(l>0.4)l=0.12
else l=l<-0.4?-0.12:0}if(a8)k=0.6
else k=Math.abs(n.a)<0.4?0.2:0
a6.iR(new A.D(n.a+l,n.b+0,n.c+k),0.36,m,4,8,0.1)}a6.d=1}if(b0.c>=2&&!a8)A.hdZ(a6,b0.w)
r=!1
if(b0.c>=2)if(b0.d)r=a7==="outlet"||a7==="gfci"
if(r)A.hSL(a6,b0.a&&!b0.w)
r=a8?"Ceiling box":"Electrical box"
q=a7==="fan"
l=q?' A fan needs a box that says "fan rated".':""
k=t?"Cable from the breaker panel (LINE)":"NM-B cable (Romex)"
j=a8?"It joins the fixture black wire with a wire nut.":"It goes on a brass screw."
i=a8?"It joins the fixture white wire.":"It goes on a silver screw."
h=a8?"It joins the green fixture ground wire.":"It goes on the green screw."
g=a7==="gfci"
if(g)f="GFCI outlet"
else f=t?"Light switch":"Receptacle (outlet)"
if(g)t="It checks that the current going out equals the current coming back. If some leaks (through water or a person) it shuts off in a fraction of a second."
else t=t?"A rocker that opens and closes the black wire to the light.":"The outlet. Each side has two slots and a ground hole. The short slot is hot, the long slot is neutral."
g=A.bxU(a7,b0)
e=q?"Ceiling fan":"Ceiling light"
q=q?"The motor housing with blades. It has three wires: black (motor), white (neutral) and green (ground).":"The light fixture with a frosted dome. It has three wires: black, white and green."
d=C.F([1,B.dXI,2,B.dXW,3,new A.d1(r,"A box that holds the wire connections. Every connection must be inside a box, never loose in the wall or the ceiling."+l,new A.D(0,0,-1.2),9),4,new A.d1(k,"The yellow jacket holds three wires: black (hot), white (neutral) and bare copper (ground). Yellow means 12 gauge wire for a 20 amp circuit. White jackets are 14 gauge for 15 amps.",new A.D(-0.4,1.5,-1.8),8),5,B.dYi,10,new A.d1("Black wire: hot","The hot wire brings the power from the breaker. It is the dangerous one. "+j,new A.D(-0.8,-0.8,1.2),7),13,B.dXu,11,new A.d1("White wire: neutral","The neutral wire carries the power back to the panel. "+i,new A.D(0,-0.8,1.2),7),12,new A.d1("Bare copper wire: ground","The ground wire is a safety path. If a wire touches metal, the current runs down the ground instead of through you. "+h,new A.D(0.5,-0.8,1.2),7),6,B.dXU,20,new A.d1(f,t,new A.D(0,-0.2,g),9),21,B.dXZ,22,B.dYh,23,B.dXS,24,B.dXX,25,B.dXL,26,B.dY_,27,B.dYb,28,B.dXG,30,B.dXp,31,B.dXn,51,B.dXV,52,B.dXr,53,B.dY3,54,new A.d1(e,q,new A.D(0,0,6.4),9),55,B.dYd],x.S,x.q)
a0=C.a([],x.E)
if(b0.f&&b0.c===0)for(t=a9.f,r=t.length,p=0;p<r;++p){o=t[p]
n=A.bA3(a7,o.a,b0)
a1=o.f
A:{q="hot"===a1
if(q){l=B.ey1
break A}if("neutral"===a1){l=B.ep6
break A}if("ground"===a1){l=B.erD
break A}l=B.ef0
break A}a2=l.a
if(a8){B:{if(q){k="BLACK NUT \xb7 HOT"
break B}if("neutral"===a1){k="WHITE NUT \xb7 NEUTRAL"
break B}k="GROUND"
break B}a3=k}else a3=a2
if(a8){C:{if(q){q=B.fEH
break C}if("neutral"===a1){q=B.fEC
break C}q=B.fJ6
break C}a4=q}else{q=n.a
if(q>0.4)k=3.8
else k=q<-0.4?-4.2:0
a4=new A.D(k,Math.abs(q)<0.4?-3:-0.4,1)}a0.push(new A.nc(new A.D(n.a+a4.a,n.b+a4.b,n.c+a4.c),a3,l.b))}if(b0.a&&b0.c===0)a0.push(B.bQU)
return new A.xB(a5,d,a0,B.vK,null)},
haY(d,e,f){var w,v,u=e==="light"||e==="fan"
d.b=3
if(u){d.e5(B.aSm,B.aRZ,2.2,B.x3,0.3,18)
d.a32(B.aRZ,B.fC,2.2,B.x3,!1,!0,0.3,18)}else{d.bB(B.aSm,B.fFG,B.x3,0.3)
d.bB(B.fDC,B.aRM,B.x3,0.3)
d.bB(B.fBn,B.aRM,B.x3,0.3)
d.bB(B.fF6,B.aS3,B.x3,0.3)
d.bB(B.fEA,B.aS3,B.x3,0.3)}w=C.a([],x.o)
v=new A.f8C(d,f,w)
if(e==="switch"){v.$2(4,B.cRn)
v.$2(5,B.cPA)}else v.$2(4,B.d1G)
return w},
hk5(d,e){var w
A:{if(10===e){w=d==="switch"?"blackLine":"black"
break A}if(13===e){w="blackLoad"
break A}if(11===e){w="white"
break A}if(12===e){w="ground"
break A}w=null
break A}return w},
hbC(d,e,f,g,h){var w,v,u,t,s,r,q,p,o,n,m,l,k=new A.D(0,-0.2,f),j=e==="switch",i=e==="gfci"
if(g)w=B.wZ
else w=j?B.bcr:B.Wx
v=i?3.1:2.95
d.e=0
d.b=20
if(!h){d.bB(k.ad(0,B.fCG),new A.D(1.5,v,1.3),w,0.25)
d.e=0.15
d.b=26
u=k.ad(0,B.fCu)
d.bB(u,B.fIu,g?B.b9y:B.KB,0.8)
d.bH(k.ad(0,B.fGB),B.fJO,B.E1)}d.e=0.3
d.b=27
u=k.ad(0,B.fEh)
d.bB(u,new A.D(1.3,i?2.85:2.7,0.16),w,0.3)
if(j){d.e=0.7
d.b=28
u=k.ad(0,B.fFZ)
d.bB(u,B.fDW,g?B.wZ:F.WH,0.35)
u=k.ad(0,B.fI8)
d.bB(u,B.fHs,g?B.wZ:B.acq,0.35)}else{d.e=0.6
u=i?E.arH:B.ddO
t=u.length
s=f+0.47
r=f+0.46
q=f+0.5
p=0
for(;p<t;++p){o=u[p]
d.b=27
n=-0.2+(o+0.04)
d.bH(new A.D(-0.28,n,s),B.fFF,B.Ea)
d.bH(new A.D(0.28,n,s),B.fEm,B.Ea)
n=-0.2+(o-0.32)
d.h7(new A.D(0,n,r),new A.D(0,n,q),0.11,B.Ea,10)}if(i){d.e=0.7
d.b=28
d.bB(k.ad(0,B.fGm),B.aRP,B.bfI,0.3)
d.bB(k.ad(0,B.fIH),B.aRP,B.af2,0.3)}}if(h){d.e=0
return}m=i?0.95:0.85
l=i?-0.75:-0.55
u=new A.f9W(d,k)
if(!j){u.$6$taped(23,-1,m,B.acM,B.adf,i)
u.$5(24,-1,l,B.acM,B.adf)}u.$6$taped(21,1,m,B.VU,B.aex,i)
u.$5(22,1,l,B.VU,B.aex)
d.e=0.9
d.b=25
d.e5(k.ad(0,B.fF4),k.ad(0,B.fJ8),0.18,B.bhB,0.7,12)
d.bH(k.ad(0,B.fEE),B.fF8,D.e3)
d.bB(k.ad(0,B.fCN),B.fGq,B.b6n,0.6)
d.e=0},
hbX(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k=e==="fan",j=A.bxU(e,f)
d.e=0
d.b=55
w=j-0.3
v=j+0.3
u=k?3.3:3.5
t=f.w?B.wZ:B.bcU
d.e5(new A.D(0,0,w),new A.D(0,0,v),u,t,0.45,20)
d.b=54
if(k){u=j+4.2
d.e5(new A.D(0,0,v),new A.D(0,0,u),0.45,B.b9u,0.5,10)
v=j+7.4
d.e5(new A.D(0,0,u),new A.D(0,0,v),3.6,B.Vt,0.5,18)
d.e5(new A.D(0,0,v),new A.D(0,0,j+8.6),1.6,B.bgX,0.7,14)}else{d.d=0.92
v=f.w?B.wZ:B.ban
d.iR(new A.D(0,0,j+1.2),3.6,v,6,14,0.7)
d.d=1}d.b=54
s=[B.epf,B.ecc,B.evO]
for(v=x.o,r=j-3.2,q=0;q<3;++q){u=s[q]
p=f.c===0?r:j
t=u.b.a
d.jV(C.a([new A.D(t,-0.3,w),new A.D(t,-0.3,p+0.4)],v),0.07,u.a,!1,0.3,6)}if(f.c===0)for(w=[B.eir,B.eqL,B.eyu],v=f.b,q=0;q<3;++q){o=w[q]
u=o.a
n=A.bA3(e,u,f)
d.b=u
d.e=0.8
t=n.a+0
m=n.b+0
l=n.c
d.e5(new A.D(t,m,l+-0.2),new A.D(t,m,l+0.3),0.09,B.x4,0.6,6)
if(v.ai(0,u))d.Kn(new A.D(t,m,l+-0.5),new A.D(t,m,l+0.9),0.4,o.b,0.26,0.4,8)
d.e=0}},
hdZ(d,e){var w
d.e=0.4
d.b=30
w=e?B.wZ:B.b5A
d.bB(B.fGg,B.aS4,w,0.3)
d.bB(B.fFy,B.aS4,w,0.3)
d.bB(B.fBj,B.aSc,w,0.3)
d.bB(B.fBX,B.fCV,w,0.3)
d.bB(B.fJ3,B.aSc,w,0.3)
d.e5(B.fEr,B.fFv,0.1,B.KB,0.8,10)
d.e=0},
hSL(d,e){var w,v
d.b=31
for(w=0;w<2;++w){v=B.cTR[w]
d.e5(new A.D(v,0.52,0.2),new A.D(v,0.52,1.9),0.04,B.KB,0.8,6)}d.bB(B.fzO,B.fIk,B.ba5,0.35)
d.b8V(B.aS0,0.2,e?D.VW:B.bdz,0.9)
if(e){d.d=0.35
d.iR(B.aS0,0.5,D.VW,4,8,0)
d.d=1}},
mj:function mj(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.e=g
_.f=h},
XG:function XG(d){var _=this
_.a=!0
_.b=d
_.c=0
_.w=_.r=_.f=_.e=_.d=!1},
zO:function zO(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
a3C:function a3C(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.d=f
_.e=g
_.f=h
_.r=i},
fpz:function fpz(){},
fpA:function fpA(){},
fpB:function fpB(){},
fpC:function fpC(){},
fpD:function fpD(){},
foq:function foq(d){this.a=d},
fLU:function fLU(){},
BS:function BS(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fox:function fox(d){this.a=d},
foy:function foy(d){this.a=d},
fov:function fov(d){this.a=d},
fow:function fow(d){this.a=d},
fot:function fot(){},
fou:function fou(){},
fmt:function fmt(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fmu:function fmu(d){this.a=d},
f8C:function f8C(d,e,f){this.a=d
this.b=e
this.c=f},
f9W:function f9W(d,e){this.a=d
this.b=e},
bzF(d){return D.d.dL(B.a1a,new A.fmi(d),new A.fmj())},
hk4(d,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i={},h=new A.fLT(),g=new A.fLQ(),f=d.c,e=f==="hall"
if(e&&a1<2){w=a0.e?d.gjm(0)-14:Math.min(a0.d,d.gjm(0)-14)
v=h.$1(w)
return new A.avN(w,v,d.gjm(0)/2,g.$1(v))}if(e){f=C.a([],x.n)
for(e=d.w,u=e.length,t=0;t<e.length;e.length===u||(0,C.L)(e),++t){s=e[t]
if(s.b==="back"&&!s.a)f.push(s.c)}r=f.length===0?-40:D.d.fo(f,D.uM)-19-8
q=f.length===0?40:D.d.fo(f,D.pc)+19+8
p=d.gfq(0)/2-8
f=a1===2?(-p+r)/2:(q+p)/2
return new A.avN(p-q,106,f,61)}e=d.gfq(0)
q=d.gfq(0)/2-6
if(f==="bathroom")q=14
f=C.a([],x.f)
for(u=d.w,o=u.length,t=0;t<u.length;u.length===o||(0,C.L)(u),++t){s=u[t]
if(s.b==="back"&&!s.a){n=s.c
f.push(new C.y(n-19,n+19))}}D.d.b_(f,new A.fLR())
m=i.a=i.b=-e/2+6
l=new A.fLS(i)
for(e=f.length,t=0;t<f.length;f.length===e||(0,C.L)(f),++t){u=f[t]
k=u.a
if(k>m)l.$2(m,Math.min(k,q))
m=Math.max(m,u.b)}if(m<q)l.$2(m,q)
j=Math.max(30,i.a-i.b-4)
w=a0.e?j:Math.min(a0.d,j)
v=h.$1(w)
return new A.avN(w,v,(i.b+i.a)/2,g.$1(v))},
yE(d,e,f,g,h,i,j,k){var w=x.S
return new A.a46(d,e,f,g,h,i,j,k,C.a([],x._),C.a([0,0,0],x.t),C.aX(w),C.T(w,x.i),C.T(w,x.N),C.a([],x.cX))},
aU2(d){var w=new A.aU1(d)
w.c3g()
return w},
hsX(d){var w=new A.aU1(7)
w.bvP(d)
return w},
i6j(d){var w,v=d.c
A:{if("bedroom"===v){w=1
break A}if("kitchen"===v||"bathroom"===v){w=2
break A}w=0
break A}return w},
a43:function a43(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.f=_.e=0},
hk:function hk(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
Dq:function Dq(d,e,f){this.a=d
this.b=e
this.c=f},
py:function py(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fmi:function fmi(d){this.a=d},
fmj:function fmj(){},
avN:function avN(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fLT:function fLT(){},
fLQ:function fLQ(){},
fLR:function fLR(){},
fLS:function fLS(d){this.a=d},
o4:function o4(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aTX:function aTX(d,e,f){this.a=d
this.b=e
this.c=f},
a46:function a46(d,e,f,g,h,i,j,k,l,m,n,o,p,q){var _=this
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
_.cx=_.CW=null
_.cy=p
_.db=!1
_.dx="light"
_.dy=q
_.fx=_.fr=null
_.fy=!1
_.go=0
_.id=""
_.k2=_.k1=null},
bP8:function bP8(){},
aU1:function aU1(d){var _=this
_.a=""
_.b=d
_.c=!1
_.d=$
_.e=0},
bPJ:function bPJ(){},
bPK:function bPK(){},
bPO:function bPO(){},
bPN:function bPN(){},
bPM:function bPM(){},
bPL:function bPL(){},
aZr(d,e,f){return new A.N7(f,d,e,null)},
N7:function N7(d,e,f,g){var _=this
_.d=d
_.f=e
_.r=f
_.a=g},
aCw:function aCw(d,e,f,g,h,i){var _=this
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
_.go=f
_.id=!1
_.k1=g
_.k2=null
_.k3=0
_.k4=!1
_.p1=_.ok=null
_.p4=_.p3=_.p2=0
_.R8=null
_.RG=!1
_.ry=_.rx=null
_.to=h
_.x2=_.x1=null
_.xr=0
_.y1=i
_.y2=null
_.bh=0
_.b5=!1
_.c=_.a=null},
e2V:function e2V(){},
e2S:function e2S(d){this.a=d},
e2T:function e2T(d){this.a=d},
e2U:function e2U(d){this.a=d},
e29:function e29(d,e,f){this.a=d
this.b=e
this.c=f},
e2a:function e2a(d){this.a=d},
e28:function e28(d){this.a=d},
e2b:function e2b(d,e){this.a=d
this.b=e},
e1r:function e1r(d,e){this.a=d
this.b=e},
e2m:function e2m(d){this.a=d},
e1H:function e1H(d,e){this.a=d
this.b=e},
e1I:function e1I(d,e){this.a=d
this.b=e},
e1J:function e1J(d,e){this.a=d
this.b=e},
e1K:function e1K(d){this.a=d},
e1p:function e1p(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e1n:function e1n(d,e,f){this.a=d
this.b=e
this.c=f},
e1m:function e1m(d,e){this.a=d
this.b=e},
e1o:function e1o(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e1k:function e1k(d,e){this.a=d
this.b=e},
e1l:function e1l(d,e,f){this.a=d
this.b=e
this.c=f},
e1j:function e1j(d,e){this.a=d
this.b=e},
e11:function e11(d){this.a=d},
e12:function e12(d){this.a=d},
e25:function e25(d,e,f){this.a=d
this.b=e
this.c=f},
e23:function e23(d,e,f){this.a=d
this.b=e
this.c=f},
e24:function e24(d,e){this.a=d
this.b=e},
e2_:function e2_(d,e,f){this.a=d
this.b=e
this.c=f},
e1Z:function e1Z(){},
e20:function e20(d,e){this.a=d
this.b=e},
e21:function e21(d,e){this.a=d
this.b=e},
e22:function e22(d,e){this.a=d
this.b=e},
e1Q:function e1Q(d,e){this.a=d
this.b=e},
e1N:function e1N(){},
e1O:function e1O(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e1M:function e1M(d,e,f){this.a=d
this.b=e
this.c=f},
e1P:function e1P(d,e,f){this.a=d
this.b=e
this.c=f},
e1L:function e1L(d,e){this.a=d
this.b=e},
e2J:function e2J(d){this.a=d},
e2H:function e2H(d){this.a=d},
e2I:function e2I(d,e){this.a=d
this.b=e},
e2A:function e2A(d,e,f){this.a=d
this.b=e
this.c=f},
e2z:function e2z(){},
e2B:function e2B(){},
e2C:function e2C(d,e){this.a=d
this.b=e},
e2D:function e2D(d){this.a=d},
e2E:function e2E(d){this.a=d},
e2F:function e2F(d){this.a=d},
e2G:function e2G(d){this.a=d},
e2w:function e2w(d){this.a=d},
e2v:function e2v(d){this.a=d},
e2r:function e2r(d,e,f){this.a=d
this.b=e
this.c=f},
e2p:function e2p(d){this.a=d},
e2q:function e2q(){},
e2s:function e2s(d,e,f){this.a=d
this.b=e
this.c=f},
e2o:function e2o(d,e){this.a=d
this.b=e},
e2t:function e2t(d,e){this.a=d
this.b=e},
e2u:function e2u(d,e){this.a=d
this.b=e},
e2g:function e2g(d,e){this.a=d
this.b=e},
e2h:function e2h(d){this.a=d},
e2i:function e2i(){},
e2x:function e2x(d,e){this.a=d
this.b=e},
e2n:function e2n(d,e){this.a=d
this.b=e},
e2l:function e2l(d){this.a=d},
e2e:function e2e(d){this.a=d},
e2f:function e2f(){},
e2k:function e2k(){},
e2N:function e2N(){},
e2K:function e2K(d,e){this.a=d
this.b=e},
e2L:function e2L(d,e){this.a=d
this.b=e},
e2M:function e2M(d,e){this.a=d
this.b=e},
e1q:function e1q(){},
e2c:function e2c(d){this.a=d},
e2d:function e2d(d){this.a=d},
e1t:function e1t(d){this.a=d},
e1s:function e1s(d){this.a=d},
e1u:function e1u(d){this.a=d},
e26:function e26(d){this.a=d},
e27:function e27(){},
e2j:function e2j(d){this.a=d},
e1B:function e1B(){},
e1C:function e1C(d){this.a=d},
e1D:function e1D(d){this.a=d},
e1G:function e1G(d){this.a=d},
e1E:function e1E(d){this.a=d},
e1A:function e1A(d){this.a=d},
e1F:function e1F(d){this.a=d},
e1w:function e1w(d){this.a=d},
e1x:function e1x(d){this.a=d},
e2O:function e2O(d){this.a=d},
e1z:function e1z(d){this.a=d},
e1y:function e1y(d){this.a=d},
e0v:function e0v(d){this.a=d},
e0u:function e0u(d,e,f){this.a=d
this.b=e
this.c=f},
e0p:function e0p(){},
e0q:function e0q(){},
e0r:function e0r(d){this.a=d},
e0s:function e0s(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e1v:function e1v(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
e2y:function e2y(d,e){this.a=d
this.b=e},
e1X:function e1X(d,e){this.a=d
this.b=e},
e1Y:function e1Y(d,e){this.a=d
this.b=e},
e0t:function e0t(d,e){this.a=d
this.b=e},
e18:function e18(d){this.a=d},
e19:function e19(d){this.a=d},
e1a:function e1a(d){this.a=d},
e1b:function e1b(d){this.a=d},
e1c:function e1c(d,e){this.a=d
this.b=e},
e1d:function e1d(d){this.a=d},
e17:function e17(d){this.a=d},
e1e:function e1e(d,e){this.a=d
this.b=e},
e16:function e16(d,e){this.a=d
this.b=e},
e1f:function e1f(d,e){this.a=d
this.b=e},
e15:function e15(d,e){this.a=d
this.b=e},
e1g:function e1g(d){this.a=d},
e14:function e14(d){this.a=d},
e1h:function e1h(d,e){this.a=d
this.b=e},
e13:function e13(d,e){this.a=d
this.b=e},
e1i:function e1i(d,e){this.a=d
this.b=e},
e2R:function e2R(d){this.a=d},
e2P:function e2P(d){this.a=d},
e2Q:function e2Q(d){this.a=d},
e0W:function e0W(d){this.a=d},
e0X:function e0X(d){this.a=d},
e0Y:function e0Y(d){this.a=d},
e0Z:function e0Z(d){this.a=d},
e1_:function e1_(d){this.a=d},
e10:function e10(d){this.a=d},
e0V:function e0V(d){this.a=d},
e0M:function e0M(d,e){this.a=d
this.b=e},
e0E:function e0E(d){this.a=d},
e0D:function e0D(){},
e0C:function e0C(d){this.a=d},
e0N:function e0N(d){this.a=d},
e0B:function e0B(d){this.a=d},
e0O:function e0O(d){this.a=d},
e0P:function e0P(d){this.a=d},
e0A:function e0A(d){this.a=d},
e0Q:function e0Q(d){this.a=d},
e0R:function e0R(d){this.a=d},
e0S:function e0S(d){this.a=d},
e0z:function e0z(d){this.a=d},
e0T:function e0T(d){this.a=d},
e0y:function e0y(d){this.a=d},
e0U:function e0U(d){this.a=d},
e0F:function e0F(d){this.a=d},
e0G:function e0G(d){this.a=d},
e0H:function e0H(d){this.a=d},
e0I:function e0I(d){this.a=d},
e0J:function e0J(d){this.a=d},
e0K:function e0K(d){this.a=d},
e0x:function e0x(){},
e0L:function e0L(d){this.a=d},
e0w:function e0w(d){this.a=d},
e1W:function e1W(d){this.a=d},
e1T:function e1T(d,e,f){this.a=d
this.b=e
this.c=f},
e1U:function e1U(d,e){this.a=d
this.b=e},
e1S:function e1S(d){this.a=d},
e1V:function e1V(d,e){this.a=d
this.b=e},
e1R:function e1R(d){this.a=d},
bh3:function bh3(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
dmC:function dmC(d,e){this.a=d
this.b=e},
bgs:function bgs(d,e){this.b=d
this.a=e},
aGJ:function aGJ(d,e){this.c=d
this.a=e},
bqV:function bqV(){this.c=this.a=this.d=null},
eX6:function eX6(d,e){this.a=d
this.b=e},
eX5:function eX5(d){this.a=d},
eX8:function eX8(d){this.a=d},
eX9:function eX9(d){this.a=d},
eXa:function eXa(d){this.a=d},
eX7:function eX7(d){this.a=d},
hAn(){var w=$.h5q
return w==null?$.h5q=new A.cai().$0():w},
i3h(d,e,f){var w,v,u,t,s,r,q,p,o,n=null,m=e.a,l=e.b,k=new C.a9(0,0,0+m,0+l),j=C.bA(k,D.jG)
$.W()
w=C.M()
w.saq(B.bV7.av(0,k))
d.aD(j,w)
v=C.M()
v.b=D.ae
v.r=B.WI.gp(0)
v.c=l*0.025
w=l*0.05
j=l*0.08
d.aD(C.bA(k.cF(-w),new C.aW(j,j)),v)
w=C.bA(k.cF(-(l*0.1)),new C.aW(w,w))
v.c=l*0.01
d.aD(w,v)
u=new C.u(m/2,l/2)
t=l*0.36
l=C.M()
l.r=F.ady.gp(0)
d.af(u,t*1.1,l)
l=C.M()
l.r=B.WI.gp(0)
d.af(u,t,l)
l=C.M()
l.r=B.abJ.gp(0)
d.af(u,t*0.9,l)
l=C.M()
l.b=D.ae
l.r=B.Eq.gp(0)
l.c=t*0.04
d.af(u,t*0.95,l)
s=$.cah
r=C.cm(u,t*1.2,t*1.5)
if(s!=null){m=s.c
l=s.d
q=Math.min((r.c-r.a)/m,(r.d-r.b)/l)
p=C.cm(r.gbR(),l*q,m*q)
j=C.M()
j.Q=D.ck
d.w9(s,new C.a9(0,0,m,l),p,j)}else{o=C.i1(n,n,n,n,C.dn(n,n,n,n,n,n,n,n,n,C.l(n,n,B.Eq,n,n,n,n,n,n,n,n,t*0.6,n,n,D.u,n,n,!0,n,n,n,n,n,n,n,n),"NGMY"),D.a4,D.cc,n,D.eh,D.ca)
o.eH()
m=o.b
l=m.c
m=m.a.c
o.a5(d,u.aC(0,new C.u(l/2,m.gbc(m)/2)))}},
i3i(d,e,f){var w,v,u,t,s,r,q,p,o=null,n=e.ed(D.J),m=e.geb()/2
$.W()
w=C.M()
w.r=B.WI.gp(0)
d.af(n,m,w)
w=C.M()
w.r=B.abJ.gp(0)
d.af(n,m*0.9,w)
w=C.M()
w.b=D.ae
w.r=B.Eq.gp(0)
w.c=m*0.04
d.af(n,m*0.93,w)
v=$.cah
u=C.cm(n,m*1.2,m*1.5)
if(v!=null){w=v.c
t=v.d
s=Math.min((u.c-u.a)/w,(u.d-u.b)/t)
r=C.cm(u.gbR(),t*s,w*s)
q=C.M()
q.Q=D.ck
d.w9(v,new C.a9(0,0,w,t),r,q)}else{p=C.i1(o,o,o,o,C.dn(o,o,o,o,o,o,o,o,o,C.l(o,o,B.Eq,o,o,o,o,o,o,o,o,m*0.6,o,o,D.u,o,o,!0,o,o,o,o,o,o,o,o),"NGMY"),D.a4,D.cc,o,D.eh,D.ca)
p.eH()
w=p.b
t=w.c
w=w.a.c
p.a5(d,n.aC(0,new C.u(t/2,w.gbc(w)/2)))}},
hfi(e9,f0,f1,f2,f3,f4,f5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6,d7,d8,d9,e0,e1,e2,e3,e4="walls",e5="GFCI outlet",e6="Wall outlet",e7="\ud83d\udeb0 Needs plumbing",e8=e9.c
if(e8==="outside")return A.hPg(e9,f3,f2,f5,f4,f1)
w=x.z
v=C.a([],w)
u=new A.iK(v)
t=C.T(x.S,x.q)
s=C.a([],x.E)
r=C.a([],x.h)
q=e9.gfq(0)
p=e9.gjm(0)
o=C.a([],x.O)
for(n=e9.z,m=n.length,l=0;l<n.length;n.length===m||(0,C.L)(n),++l)o.push(B.avK[n[l]])
k=B.avx[e9.Q]
j=new A.fmI(f2)
u.f=-1
u.b=j.$2("floor",310)
n=p/2
m=q+2.4
i=p+2
h=k.b
g=k.c
f=g==="tile"
if(f)e=0.35
else e=g==="wood"?0.15:0
u.pl(new A.D(0,-0.6,n),new A.D(m,1.2,i),h,e,3)
t.n(0,310,new A.d1("Floor","The "+k.a.toLowerCase()+" floor.",new A.D(0,0,n),140))
u.b=0
if(g==="wood")for(g=-q/2,d=1;d<8;++d){f=C.aq(h,D.w,0.25)
f.toString
u.bH(new A.D(g+d*q/8,0.05,n),new A.D(0.3,0.2,p),f)}else if(f)for(h=-q/2,d=1;d<6;++d){u.bH(new A.D(h+d*q/6,0.05,n),new A.D(0.3,0.2,p),B.abn)
u.bH(new A.D(0,0.05,d*p/6),new A.D(q,0.2,0.3),B.abn)}h=e8==="hall"
if(h){a0=Math.min(q*0.5,p*1.5)
a1=p-14
g=-a0/2
f=a0/2
r.push(new A.IQ(C.a([new A.D(g,0.5,14),new A.D(f,0.5,14),new A.D(f,0.5,a1),new A.D(g,0.5,a1)],x.o),0,A.i2j(),900,900*(a1-14)/a0,60,-1,0))}u.f=0
u.b=j.$2(e4,300)
a2=u.x=$.jO=$.jO+1
u.hX(new A.D(0,65,-0.6),new A.D(m,130,1.2),o[0],3)
u.x=0
u.b=j.$2(e4,301)
a3=u.x=$.jO=$.jO+1
g=-q
f=g/2
u.hX(new A.D(f-0.6,65,n),new A.D(1.2,130,p),o[1],3)
u.x=0
u.b=j.$2(e4,302)
a4=u.x=$.jO=$.jO+1
e=q/2
u.hX(new A.D(e+0.6,65,n),new A.D(1.2,130,p),o[2],3)
u.x=0
t.n(0,300,B.dXw)
t.n(0,301,B.dXA)
t.n(0,302,B.dXJ)
if(f0){u.b=0
u.hX(new A.D(0,65,p+0.6),new A.D(m,130,1.2),o[0],3)}u.f=u.b=0
u.x=a2
u.bB(new A.D(0,2.5,0.4),new A.D(q,5,0.8),B.m9,0.1)
u.x=a3
u.bB(new A.D(f+0.4,2.5,n),new A.D(0.8,5,p),B.m9,0.1)
u.x=a4
u.bB(new A.D(e-0.4,2.5,n),new A.D(0.8,5,p),B.m9,0.1)
u.x=0
u.f=f0?0:3
u.b=j.$2("ceiling",320)
if(f0)o=1
else o=f2==="ceiling"?0.6:0.4
u.d=o
u.hX(new A.D(0,130.6,n),new A.D(m,1.2,i),B.auo[e9.as],2)
u.d=1
u.b=u.f=0
u.x=a2
u.bB(new A.D(0,128,1),new A.D(q,3,1.4),D.c,0.2)
u.x=a3
u.bB(new A.D(f+1,128,n),new A.D(1.4,3,p),D.c,0.2)
u.x=a4
u.bB(new A.D(e-1,128,n),new A.D(1.4,3,p),D.c,0.2)
u.x=0
t.n(0,320,new A.d1("Ceiling","Pick a colour above to paint the ceiling.",new A.D(0,130,n),140))
n=e9.w
a5=D.d.b7(n,new A.fmw())?"left":"right"
if(!h){o=new A.fmF()
a6=p*0.55
if(f0)D.d.v(v,A.rO(o.$0(),0,3.141592653589793,new A.D(0,0,p+0.2)))
D.d.v(v,a5==="right"?A.rO(o.$0(),0,-1.5707963267948966,new A.D(e,0,a6)):A.rO(o.$0(),0,1.5707963267948966,new A.D(f,0,a6)))}for(o=e9.ax,m=e9.at,d=0;d<n.length;++d){a7=n[d]
if(a7.a)continue
a8=o.h(0,d)
if(a8==null)a8=m.t(0,d)?1.25:0
i=C.a([],w)
a9=new A.iK(i)
a9.f=1
a9.x=$.jO=$.jO+1
b0=a9.b=600+d
a9.bH(B.fFU,B.fFH,B.m9)
b1=C.a([],w)
b2=new A.iK(b1)
b2.r=!0
b2.b=b0
if(a8>0.04){a9.b=0
b3=A.hMn(a7.d)
b4=b3.a
a9.bH(B.fEw,B.fCa,b4)
a9.bH(B.fFl,B.fJI,b3.b)
b5=C.aq(b4,D.w,0.25)
b5.toString
a9.bH(B.fEG,B.fIh,b5)
b6=-a8
b5=A.bBX(B.fJF,b6)
b2.ajj(new A.D(-12.5+b5.a,0+b5.b,1.2+b5.c),B.fBm,B.wL,0.15,b6)}else{a9.bB(B.fEJ,B.fE1,B.wL,0.15)
a9.bB(B.fEP,B.fF5,B.DT,0.8)
a9.bH(B.fF7,B.aSi,B.L1)
a9.bH(B.fJl,B.aSi,B.L1)}b5=new A.fmG(a7,q,p)
D.d.v(v,b5.$1(i))
D.d.v(v,b5.$1(b1))
t.n(0,b0,new A.d1("Door","Tap the door to go through it.",B.aRh,90))}for(o=e9.x,m=o.length,l=0;l<o.length;o.length===m||(0,C.L)(o),++l){b7=o[l]
i=b7.b
b0=B.lT.h(0,i)
b0.toString
b1=C.a([],w)
b8=new A.iK(b1)
b8.r=!0
b8.f=i==="rug"?1:2
b5=100+b7.a
b8.b=j.$2("furniture",b5)
A.fTr(b8,i,B.P3[b7.f])
D.d.v(v,A.rO(b1,0,b7.e*3.141592653589793/2,new A.D(b7.c,0,b7.d)))
t.n(0,b5,new A.d1(b0.a,y.b,new A.D(b7.c,12,b7.d),90))}u.f=2
u.r=!0
b9=p*0.5
w=C.U(n)
o=e-10
c0=D.k.D(new C.cQ(new C.a2(n,new A.fmx(),w.k("a2<1>")),new A.fmy(),w.k("cQ<1,N>")).cI(0,f+30,new A.fmz())+24,f+10,o)
c1=e9.dx==="fan"
c2=e9.ga4I()
c3=c2&&e9.gTm()&&e9.db
u.b=703
if(c1){u.h7(new A.D(0,129.5,b9),new A.D(0,120,b9),1,B.iL,8)
u.e5(new A.D(0,120,b9),new A.D(0,113,b9),6,D.ti,0.5,14)
w=c3?B.t6:D.dA
u.e5(new A.D(0,113,b9),new A.D(0,110,b9),3.6,w,0.6,12)}else{w=c3?B.t6:D.dA
u.e5(new A.D(0,129.5,b9),new A.D(0,127,b9),7,w,0.6,16)}if(c3&&!c1){u.b=0
u.f=3
u.d=0.2
u.baQ(new A.D(0,127,b9),new A.D(0,0.5,b9),36,B.t6,!1,14)
u.d=1
u.f=2}c4=c1?"Ceiling fan":"Ceiling light"
if(!c2)c5="It has no power yet. "+(e9.id.length!==0?"Tap it to wire it.":"The room still needs wiring: use the Wiring button.")
else if(!e9.gTm())c5="It is ready: wire the wall switch to turn it on."
else{w=e9.db?"It is on. Tap the wall switch (or tap this) to turn it off.":"It is off. Tap the wall switch (or tap this) to turn it on."
c5=w}t.n(0,703,new A.d1(c4,c5,new A.D(0,122,b9),80))
w=e8==="bathroom"
n=!w
c6=!n||e8==="kitchen"||e9.id==="gfci"
m=e9.gaFx()
i=c6?e5:e6
b0=e9.id.length!==0||e9.gjB()
b1=c6?e5:e6
b1=C.a([new C.eq([0,700,g/4,m,i]),new C.eq([1,701,q/4,b0,b1])],x.az)
for(m=e9.dy,d=0;d<m.length;++d){i=m[d]
g=i.a
if(g!=="switch"){b0=i.c
g=b0.c>=2&&A.afy(A.Ak(g),b0).a==="ok"
b0=m[d].a==="gfci"?"Added GFCI outlet":"Added outlet"
b1.push(new C.eq([2+d,800+d,i.b,g,b0]))}}u.f=1
u.r=!1
for(i=b1.length,g=e9.cy,l=0;l<b1.length;b1.length===i||(0,C.L)(b1),++l){b0=b1[l].a
d=b0[0]
c7=b0[1]
c8=b0[2]
c9=b0[3]
d0=b0[4]
u.x=$.jO=$.jO+1
u.b=c7
u.e=0.4
u.d=0.55
b0=c9?D.b8:D.ay
u.bH(new A.D(c8,14,0.25),B.fCC,b0)
u.d=1
u.e=0
b0=c9?B.aep:D.ti
u.bB(new A.D(c8,14,0.9),B.fGj,b0,0.25)
u.b=0
for(d1=0;d1<2;++d1)for(b0=14+E.oO[d1]*2.8,d2=0;d2<2;++d2)u.bH(new A.D(c8+B.cZb[d2],b0,1.7),B.fJz,B.bdM)
u.bH(new A.D(c8,14,1.7),B.fGh,D.dA)
u.x=0
if(!c9)b0="This one is not wired yet. Tap it to wire it."
else b0=g.h(0,d)==null?"Tap it to plug something in.":"Tap it to plug something else in, or to unplug."
t.n(0,c7,new A.d1(d0,b0,new A.D(c8,14,2),60))}i=C.a([new C.bt(702,c0,e9.gTm())],x.al)
for(d=0;d<m.length;++d){b0=m[d]
b5=b0.a
if(b5==="switch"){d3=b0.c
b5=d3.c>=2&&A.afy(A.Ak(b5),d3).a==="ok"
i.push(new C.bt(800+d,b0.b,b5))}}for(m=i.length,l=0;l<i.length;i.length===m||(0,C.L)(i),++l){b0=i[l]
c7=b0.a
c8=b0.b
c9=b0.c
u.x=$.jO=$.jO+1
u.b=c7
u.e=0.4
u.d=0.55
b0=c9?D.b8:D.ay
u.bH(new A.D(c8,48,0.25),B.fDP,b0)
u.d=1
u.e=0
b0=c9?B.aep:D.ti
u.bB(new A.D(c8,48,0.9),B.fDm,b0,0.25)
u.bH(new A.D(c8,e9.db&&c9?49.2:46.8,1.9),B.fDg,B.bjB)
u.x=0
if(!c9)b0="Not wired yet. Tap it to wire it."
else if(e9.db)b0="On. Tap to turn the "+(c1?"fan":"light")+" off."
else b0="Off. Tap to turn the "+(c1?"fan":"light")+" on."
t.n(0,c7,new A.d1("Light switch",b0,new A.D(c8,48,2),60))}if(!e9.ga4I()&&e9.id.length===0)s.push(new A.nc(new A.D(0,104,b9),"\u26a1 No power: needs wiring",D.bI))
m=!1
if(e9.id.length!==0)if(!e9.gyD()){m=e9.id
m=!(m==="ptrap"||m==="faucet")}if(m)s.push(new A.nc(new A.D(0,40,14),"\ud83d\udc46 Tap the red one to wire it",D.bI))
u.f=2
u.r=!0
for(m=b1.length,i=x.o,b0=e9.a,l=0;l<b1.length;b1.length===m||(0,C.L)(b1),++l){b5=b1[l].a
d=b5[0]
c8=b5[2]
c9=b5[3]
d4=g.h(0,d)
if(d4==null||!c9)continue
d5=A.bzF(d4)
b5=u.b=720+d
u.jV(C.a([new A.D(c8,12,1.8),new A.D(c8,6,3),new A.D(c8,2,11)],i),0.3,B.Wr,!1,0.2,6)
d3=d5.d
d6=d3<=0
if(!d6||d5.e){b6=d3*0.56
d7=$.jO+1
u.x=$.jO=d7
u.bB(new A.D(c8,2,15),new A.D(d3*0.45,4,14),B.iL,0.3)
u.bB(new A.D(c8,8,15),B.fCd,B.iL,0.3)
d8=12+b6/2
u.bB(new A.D(c8,d8,15),new A.D(d3,b6,3),E.Ed,0.5)
d3=(d3-3.5)/2
d9=c8-d3
e0=(b6-3.5)/2
e1=d8+e0
d3=c8+d3
e0=d8-e0
r.push(new A.IQ(C.a([new A.D(d9,e1,16.6),new A.D(d3,e1,16.6),new A.D(d3,e0,16.6),new A.D(d9,e0,16.6)],i),b5,new A.fmA(d*7+b0),320,180,9,2,d7))
u.x=0}else{d3=d5.a
if(d3==="lamp"){u.e5(new A.D(c8,0,14),new A.D(c8,1,14),6,B.Vt,0.4,14)
u.e5(new A.D(c8,1,14),new A.D(c8,22,14),1,B.Av,0.5,8)
d3=e9.db?B.t6:X.Wz
u.yk(new A.D(c8,20,14),new A.D(c8,32,14),9,d3,!1,!0,5.5,0.2,16)}else{u.bB(new A.D(c8,9,15),B.fzX,B.wN,0.1)
if(d3==="toaster"){u.bB(new A.D(c8,23,15),B.fzV,B.kD,0.8)
u.bH(new A.D(c8,28.2,15),B.fHg,B.aeD)}else{u.Kn(new A.D(c8-7,21,15),new A.D(c8+7,21,15),3.6,B.KL,3,0.6,12)
u.bB(new A.D(c8-8,14.5,15),B.fF1,B.KL,0.6)}}}d3=!d6||d5.e?"It is playing NGMY ads. Tap it to watch full screen with the remote.":"It is plugged in and running. Tap the outlet to unplug it or plug in something else."
t.n(0,b5,new A.d1(d5.b,d3,new A.D(c8,16,14),90))}u.f=1
u.r=!1
e2=new A.fmC(e9,u,q,r,t)
e2.$2(e9.fr,0)
if(h){e2.$2(e9.fx,1)
e2.$2(e9.fr,2)
m=e9.fx
e2.$2(m==null?e9.fr:m,3)}u.f=2
m=u.r=!0
if(n?e8==="kitchen":m){c9=e9.gl3()
e8=new A.fmH(u)
if(w){e3=f+17
if(c9){u.b=710
u.Kn(new A.D(6,0.5,14),new A.D(6,15,14),8,B.Af,5.6,0.8,18)
u.e5(new A.D(6,15,14),new A.D(6,16,14),9,B.KU,0.8,18)
u.bB(new A.D(6,21,5),B.fA3,B.Af,0.8)
u.bB(new A.D(6,28,5),B.fEq,B.KU,0.8)}else{u.b=710
u.d=0.3
u.f=3
u.bH(new A.D(6,14,9),B.fA_,D.b1)
u.d=1
u.f=2
e8.$2(-4,8)}u.b=711
u.bB(new A.D(34,14,10),B.fAL,B.wN,0.1)
u.bB(new A.D(34,29,10),B.fAO,B.W1,0.4)
if(c9){u.e5(new A.D(34,29.3,10),new A.D(34,30.1,10),6.5,D.c,0.6,18)
u.bh1(C.a([new A.D(34,30,4),new A.D(34,36,4),new A.D(34,38,7)],i),0.6,B.kD,0.9,8)}else{e8.$2(28,18)
e8.$2(40,18)}u.b=712
if(c9){u.bB(new A.D(e3,8,38),B.aRw,B.aeR,0.7)
u.bB(new A.D(e3,16.2,38),B.fIb,B.VM,0.8)
u.e5(new A.D(e3,30,3),new A.D(e3,52,3),0.7,B.kD,0.9,8)
u.e5(new A.D(e3,52,3),new A.D(e3,52,10),0.7,B.kD,0.9,8)}else{u.d=0.3
u.f=3
u.bH(new A.D(e3,8,38),B.aRw,D.b1)
u.d=1
u.f=2
e8.$2(e3-4,34)
e8.$2(e3+4,34)}e8=c9?"Fitted on its flange with a wax ring, and the supply hose joins the shut-off valve.":"There is no toilet yet: only the flange and the water stub. Use the Plumbing button to fit it."
t.n(0,710,new A.d1("Toilet",e8,new A.D(6,14,10),70))
e8=c9?"The faucet, the hoses and the P-trap are fitted.":"The sink is not plumbed. Use the Plumbing button."
t.n(0,711,new A.d1("Vanity sink",e8,new A.D(34,28,10),70))
e8=c9?"The bath is in and connected.":"The bath is not connected yet."
t.n(0,712,new A.d1("Bath",e8,new A.D(e3,10,38),90))
if(!c9)s.push(new A.nc(new A.D(0,40,14),e7,D.bk))}else{u.b=0
u.bB(new A.D(f+15,36,14),B.fAy,B.adi,0.6)
u.bH(new A.D(f+28.5,36,14.4),B.fG1,D.dA)
u.bB(new A.D(o,15,14),B.fAh,B.abR,0.1)
u.bB(new A.D(o,31,14),B.fAn,B.iL,0.5)
u.bB(new A.D(e-15,32.4,14),B.aRN,D.lE,0.3)
u.bB(new A.D(e-5,32.4,14),B.aRN,D.lE,0.3)
u.b=713
u.bB(new A.D(30,15,14),B.fB7,B.wN,0.1)
u.bB(new A.D(30,31,14),B.fB8,B.El,0.5)
if(c9){u.e5(new A.D(30,32.1,14),new A.D(30,32.7,14),8,B.E8,0.8,18)
u.bh1(C.a([new A.D(30,32,5),new A.D(30,42,5),new A.D(30,44,9),new A.D(30,44,13)],i),0.7,B.kD,0.9,8)}else{e8.$2(22,18)
e8.$2(38,18)}e8=c9?"The faucet, the hoses and the drain are fitted.":"The kitchen sink is not plumbed yet. Use the Plumbing button."
t.n(0,713,new A.d1("Kitchen sink",e8,new A.D(30,30,14),70))
if(!c9)s.push(new A.nc(new A.D(30,48,14),e7,D.bk))}}for(e8=D.d.gae(f4),w=new C.fh(e8,new A.fmB(e9));w.C();){o=e8.gS(0)
t.n(0,900+o.a,new A.d1(o.r,"Tap to see how they are, feed them or give medicine.",new A.D(o.c,36,o.d),90))}return new A.xB(v,t,s,r,new C.cH([f,e,0,p]))},
nl(d,e,f,g,h,i,j,k,l){var w=-h/2,v=i/2,u=h/2,t=-i/2
d.cQU(e.ad(0,f.aF(0,w)).ad(0,g.aF(0,v)),e.ad(0,f.aF(0,u)).ad(0,g.aF(0,v)),e.ad(0,f.aF(0,u)).ad(0,g.aF(0,t)),e.ad(0,f.aF(0,w)).ad(0,g.aF(0,t)),j,k,l)},
hPg(a7,a8,a9,b0,b1,b2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=x.z,a0=C.a([],d),a1=new A.iK(a0),a2=C.T(x.S,x.q),a3=C.a([],x.E),a4=a7.gfq(0),a5=a7.gjm(0),a6=new A.fgD(a9)
a1.f=0
a1.b=a6.$2("floor",310)
a1.hX(new A.D(0,-0.6,a5/2-60),new A.D(a4*2.5,1.2,a5*2.5),B.abG,5)
a2.n(0,310,B.dXE)
a1.b=0
a1.f=1
a1.bH(new A.D(0,0.15,60),B.fDe,E.DW)
for(w=0;w<6;++w)a1.bH(new A.D(0,0.35,8+w*22),B.fGl,B.bgm)
a1.f=2
v=$.jO+1
a1.x=$.jO=v
a1.hX(B.fzq,B.fAq,B.Kv,3)
a1.bH(B.fzb,B.fAr,B.ab7)
u=new A.fgE(a1)
t=new A.fgB(a1)
for(s=0;s<4;++s){r=B.d7z[s]
u.$5(B.fC,B.iH,B.l1,r,62)
u.$5(B.fC,B.iH,B.l1,r,122)}t.$5(B.fC,B.iH,B.l1,0,600)
for(s=0;s<2;++s){r=B.d7w[s]
u.$5(B.a7Q,B.uB,B.wg,r,62)
u.$5(B.a7Q,B.uB,B.wg,r,122)}t.$5(B.a7Q,B.uB,B.wg,0,0)
for(s=0;s<2;++s){q=B.d7o[s]
u.$5(B.fzH,B.wg,B.iH,q,62)
u.$5(B.fHL,B.l1,B.uB,-q,62)}p=C.a([],d)
new A.iK(p).pl(B.fC,B.fAw,B.Ky,0.1,2)
a1.a5C(B.fHG,B.fGH,B.fG0,B.Kv,B.iH,!1)
a1.a5C(B.fG6,B.fBI,B.fGo,B.Kv,B.uB,!1)
a1.x=0
a1.r=!0
D.d.v(a0,A.rO(p,0.5,0,B.fyI))
D.d.v(a0,A.rO(p,-0.5,0,B.fyJ))
a1.bH(B.fyL,B.fAv,B.VY)
a1.bH(B.fC0,B.fzT,B.aed)
a1.bH(B.fC1,B.aRm,B.x8)
a1.bH(B.fz5,B.fBq,E.DW)
a1.h7(B.fHR,B.fHS,2.2,B.m9,8)
a1.h7(B.fAi,B.fAj,2.2,B.m9,8)
a1.bB(B.fzx,B.fBv,B.Ky,0.1)
a2.n(0,600,B.dYf)
o=C.a([],x.h)
n=new A.fgC(o,v)
n.$4(B.fD0,B.fGu,B.fH2,B.fFj)
n.$4(B.fBZ,B.fBg,B.fCv,B.fGV)
n.$4(B.fDJ,B.fDU,B.fCL,B.fGR)
n.$4(B.fD5,B.fBA,B.fJ0,B.fHb)
a1.r=!0
for(p=a7.x,m=p.length,s=0;s<p.length;p.length===m||(0,C.L)(p),++s){l=p[s]
k=100+l.a
if(b2.t(0,k))continue
j=l.b
if(D.d.t(B.Pq,j)){a2.n(0,k,new A.d1(B.lT.h(0,j).a,"It wanders about. Move it with the arrow buttons or take it out.",new A.D(l.c,12,l.d),140))
continue}i=B.lT.h(0,j)
i.toString
h=C.a([],d)
g=new A.iK(h)
f=g.r=!0
g.f=D.d.t(B.awl,j)?1:2
e=j==="hospital"
g.b=(!e?j==="shop":f)?k:a6.$2("furniture",k)
A.fTr(g,j,B.P3[l.f])
D.d.v(a0,A.rO(h,0,l.e*3.141592653589793/2,new A.D(l.c,0,l.d)))
if(e)j="The hospital: tap it to see the beds and treat the patients."
else j=j==="shop"?"The shop: tap it to buy food and medicine.":y.b
a2.n(0,k,new A.d1(i.a,j,new A.D(l.c,12,l.d),140))}for(d=D.d.gae(b1),p=new C.fh(d,new A.fgA(a7));p.C();){m=d.gS(0)
a3.push(new A.nc(new A.D(m.c,80,m.d),"\ud83d\udcde Help!",D.bI))}d=a8===0
p=d?"\u2705 The house is finished":"\ud83c\udfe0 "+a8+" rooms still need work"
a3.push(new A.nc(B.fyH,p,d?D.cZ:D.dT))
return new A.xB(a0,a2,a3,o,null)},
hVP(a2,a3,a4,a5,a6,a7,a8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=x.z,a0=C.a([],d),a1=new A.iK(a0)
a1.r=!0
if(a2.c==="outside"){if(a6!=null&&a6.a===a2.a)A.aMA(a1,a6,a3,a7,!0,0)
if(a4!=null){w=C.a([],d)
v=new A.iK(w)
v.r=!0
u=a4.a
A.fTr(v,u[0],B.P3[u[4]])
D.d.v(a0,A.rO(w,0,u[3]-1.5707963267948966,new A.D(u[1],0,u[2])))}for(w=D.d.gae(a2.x),u=new C.fh(w,new A.fpm()),t=a3*6,s=a5==="furniture";u.C();){r=w.gS(0)
q=r.a
p=a3*(0.25+D.o.F(q,5)*0.04)+q*1.7
o=r.c
n=Math.cos(p)
m=r.d
l=Math.sin(p)
k=Math.atan2(-Math.sin(p),Math.cos(p))
j=C.a([],d)
i=new A.iK(j)
i.r=!0
i.b=s?100+q:0
A.haw(i,r.b,B.P3[r.f],Math.sin(t+q)*0.5)
D.d.v(a0,A.rO(j,0,k,new A.D(o+n*10,0,m+l*10)))}for(d=D.d.gae(a8),w=new C.fh(d,new A.fpn(a2)),u=a3*0.5,t=a2.a;w.C();){s=d.gS(0)
r=s.a
q=u+r
o=Math.sin(q)
n=s.y
m=s.c
l=s.d
q=Math.cos(q)>=0?1.5707963267948966:-1.5707963267948966
A.aMA(a1,new A.a84(t,m+o*n,l,q,!0,!1,!1,!1,!1,0,!1,"","",-1,0,-1,0),a3,s.f,!1,900+r)}return a0}if(a6!=null&&a6.a===a2.a)A.aMA(a1,a6,a3,a7,!0,0)
for(d=D.d.gae(a8),w=new C.fh(d,new A.fpo(a2)),u=a2.a,t=a3*0.5;w.C();){s=d.gS(0)
r=s.y
q=r>0
h=q?Math.sin(t+s.a)*r:0
r=s.c
o=s.d
if(q)n=Math.cos(t+s.a)>=0?1.5707963267948966:-1.5707963267948966
else n=s.x?0.5:s.e
A.aMA(a1,new A.a84(u,r+h,o,n,q,!1,!1,!1,s.x,0,!1,"","",-1,0,-1,0),a3,s.f,!1,900+s.a)}g=a2.gjm(0)
if(a2.dx==="fan"){f=a2.ga4I()&&a2.gTm()&&a2.db?a3*7:0
a1.b=703
for(d=g*0.5,e=0;e<4;++e){p=f+e*3.141592653589793/2
a1.ajj(new A.D(Math.cos(p)*15,115,d+Math.sin(p)*15),B.fJh,B.wN,0.1,-p)}}return a0},
hMn(d){var w
A:{if(5===d){w=B.esi
break A}if(9===d){w=B.ewq
break A}if(10===d){w=B.el0
break A}if(11===d){w=B.exh
break A}if(2===d||4===d||8===d){w=B.ebT
break A}w=B.env
break A}return w},
fm5(b0,b1,b2,b3,b4,b5,b6,b7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9
for(w=b2.a,v=b2.b,u=b2.c,t=b1.a,s=b1.b,r=b1.c,q=b3.a,p=q*0.1,o=b3.b,n=o*0.1,m=b3.c,l=m*0.1,k=q*0.2,j=o*0.2,i=m*0.2,q*=0.3,o*=0.3,m*=0.3,h=-b4/2,g=b5-1,f=b5===1,e=0;e<b5;++e){d=f?0:h+b4*e/g
for(a0=b6.length,a1=s+v*d,a2=t+w*d+0,a3=r+u*d+0,a4=a2+p,a5=a3+l,a6=a2+k,a7=a3+i,a2+=q,a3+=m,a8=0;a8<b6.length;b6.length===a0||(0,C.L)(b6),++a8){a9=a1+b6[a8]
A.nl(b0,new A.D(a4,a9+n,a5),b2,B.fP,14,17,B.m9,b3,0)
A.nl(b0,new A.D(a6,a9+j,a7),b2,B.fP,11,14,b7,b3,0.6)
A.nl(b0,new A.D(a2,a9+o,a3),b2,B.fP,11,0.9,B.m9,b3,0)}}},
hJL(a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0
A:{if("shop"===a2){w=B.eEF
break A}if("hospital"===a2){w=B.eEA
break A}if("firestation"===a2){w=B.eEh
break A}if("school"===a2){w=B.eEa
break A}w=B.eDU
break A}w=w.a
v=w[0]
u=w[1]
t=w[2]
s=w[3]
r=w[4]
q=u/2
p=v/2
a1.x=$.jO=$.jO+1
a1.hX(new A.D(0,t/2,0),new A.D(v,t,u),s,2)
a1.bH(new A.D(0,2.5,0),new A.D(v+3,5,u+3),B.ab7)
w=a2==="hospital"
if(w)o=C.a([14,30,46],x.n)
else if(a2==="school"){n=C.a([14,32],x.n)
o=n}else{n=x.n
n=a2==="house2"?C.a([26],n):C.a([22],n)
o=n}m=D.o.D(D.k.bu(v/24),2,5)
n=a2==="firestation"
l=n?C.a([34],x.n):o
k=v-30
A.fm5(a1,new A.D(0,0,q).ad(0,B.fC),B.iH,B.l1,k,m,l,B.px)
j=q+0.4
if(n){A.nl(a1,new A.D(-14,17,j),B.iH,B.fP,34,34,D.jt,B.l1,0.2)
for(i=q+0.5,h=0;h<6;++h)A.nl(a1,new A.D(-14,4+h*6,i),B.iH,B.fP,33,0.8,D.dA,B.l1,0)
A.nl(a1,new A.D(24,15,j),B.iH,B.fP,14,30,B.wL,B.l1,0)}else{A.nl(a1,new A.D(0,14,q+0.3),B.iH,B.fP,18,28,B.m9,B.l1,0)
A.nl(a1,new A.D(0,13,j),B.iH,B.fP,14,26,B.wL,B.l1,0.2)}switch(a2){case"hospital":i=t-8
A.nl(a1,new A.D(0,i,j),B.iH,B.fP,30,9,D.bI,B.l1,0)
j=q+0.5
A.nl(a1,new A.D(0,i,j),B.iH,B.fP,24,2.6,D.c,B.l1,0)
A.nl(a1,new A.D(0,i,j),B.iH,B.fP,2.6,7,D.c,B.l1,0)
break
case"shop":for(i=q+3,h=0;h<6;++h){g=(h&1)===0?D.ay:D.c
A.nl(a1,new A.D(-30+h*12,33,i),B.iH,B.fP,6,6,g,B.l1,0)}A.nl(a1,new A.D(0,t-4,j),B.iH,B.fP,36,6,a3,B.l1,0)
break
case"firestation":A.nl(a1,new A.D(0,t-5,j),B.iH,B.fP,40,7,D.cj,B.l1,0)
break
case"school":A.nl(a1,new A.D(0,t-5,j),B.iH,B.fP,40,7,D.bk,B.l1,0)
break}j=-q
A.fm5(a1,new A.D(0,0,j),B.uB,B.wg,k,m,l,B.px)
A.nl(a1,new A.D(0,13,j-0.4),B.uB,B.fP,14,26,B.wL,B.wg,0)
f=D.o.D(D.k.bu(u/24),1,3)
k=u-26
A.fm5(a1,new A.D(p,0,0),B.wg,B.iH,k,f,l,B.px)
i=-p
A.fm5(a1,new A.D(i,0,0),B.l1,B.uB,k,f,l,B.px)
a1.x=0
k=x.z
g=C.a([],k)
e=new A.iK(g)
e.r=!0
e.b=a1.b
e.f=a1.f
if(a2==="house2"||a2==="school"){w=C.a([],k)
d=new A.iK(w)
d.r=!0
d.b=a1.b
d.f=a1.f
d.bB(B.fC,new A.D(v+6,2.5,u*0.58),r,0.1)
n=a1.a
k=t+5
D.d.v(n,A.rO(w,0.42,0,new A.D(0,k,u*0.25)))
a0=-u
D.d.v(n,A.rO(w,-0.42,0,new A.D(0,k,a0*0.25)))
k=p+0.2
w=t+12
a1.a5C(new A.D(k,t,q),new A.D(k,t,j),new A.D(k,w,0),s,B.iH,!1)
i-=0.2
a1.a5C(new A.D(i,t,j),new A.D(i,t,q),new A.D(i,w,0),s,B.uB,!1)
if(a2==="school"){w=q-10
e.bH(new A.D(0,t+18,w),B.fzY,D.acL)
e.bH(new A.D(0,t+30,w),B.fAp,r)
e.h7(new A.D(0,t+31,w),new A.D(0,t+46,w),0.6,D.dA,6)
e.bH(new A.D(5,t+44,w),B.fH0,D.ay)}else e.bH(new A.D(v*0.28,t+14,a0*0.1),B.fCw,B.aed)}else{k=v+2
e.bB(new A.D(0,t+1.5,0),new A.D(k,3,u+2),r,0.05)
e.bH(new A.D(0,t+4,q+0.5),new A.D(k,4,1.4),a3)
if(w){w=v*0.25
k=-u*0.15
e.bH(new A.D(w,t+5,k),B.fAx,D.bu)
e.bH(new A.D(w,t+6.2,k),B.fHa,D.c)}if(n){w=p-10
n=-u*0.2
e.bH(new A.D(w,t+16,n),B.fzS,B.adb)
e.bH(new A.D(w,t+32,n),B.aRm,r)}}D.d.v(a1.a,g)},
hR8(d,e){var w,v,u,t,s,r,q,p,o,n,m
d.bH(B.aSj,B.fJT,B.bfz)
d.bH(B.fFk,B.aSa,D.bn)
d.bH(B.fys,B.aSa,D.bn)
A:{if("roadturn"===e){w=B.d6q
break A}if("roadtee"===e){w=B.cQg
break A}if("roadcross"===e){w=B.c7C
break A}w=B.d4K
break A}for(v=w.length,u=0;u<v;++u){t=w[u]
s=t.a
r=t.b
for(t=r!==0,q=s!==0,p=0;p<2;++p){o=5+p*10.5
n=q?6:1.6
m=t?6:1.6
d.bH(new A.D(s*o,0.7,r*o),new A.D(n,0.2,m),B.Ws)}}if(e!=="road")d.bH(B.aSd,B.fEF,B.Ws)
if(e==="roadcross")for(p=-2;p<=2;++p)d.bH(new A.D(p*4,0.7,15),B.fIy,D.c)},
haw(d,e,f,g){var w=new A.f7r(d,g)
switch(e){case"dog":d.bB(B.Db,B.fJ2,f,0.05)
d.i4(B.fDj,3.4,f,4,8)
d.bH(B.fFC,B.fCs,D.KC)
d.bH(B.fGL,B.aRQ,B.iL)
d.bH(B.fJC,B.aRQ,B.iL)
d.h7(B.fHp,B.fyG,0.8,f,5)
w.$5(B.d5f,6,6,1.7,f)
break
case"cat":d.bB(B.zw,B.fCo,f,0.05)
d.i4(B.fzt,2.7,f,4,8)
d.bH(B.fIF,B.aRn,f)
d.bH(B.fII,B.aRn,f)
d.h7(B.fzs,B.fyA,0.7,f,5)
w.$5(B.d3a,4,4,1.2,f)
break
case"cow":d.bB(B.a7R,B.fzP,D.bM,0.05)
d.bH(B.fIP,B.fIj,B.iL)
d.bH(B.fEe,B.fCq,B.iL)
d.bH(B.fyQ,B.fCB,D.bM)
d.bH(B.fyM,B.fJR,D.mM)
d.bH(B.fCJ,B.aRo,D.bR)
d.bH(B.fJA,B.aRo,D.bR)
d.h7(B.fyT,B.fzu,0.7,B.iL,5)
w.$5(B.cTQ,11,11,3.2,D.bR)
break
case"sheep":d.i4(B.aRd,8.5,D.pp,4,8)
d.i4(B.fyE,7,D.pp,4,8)
d.i4(B.fyB,3.4,B.iL,4,8)
w.$5(B.d5b,8,8,1.8,B.iL)
break
case"chicken":d.i4(B.zw,4,f,4,8)
d.i4(B.fyx,2.2,f,3,6)
d.bH(B.fyz,B.fIe,D.bI)
d.bH(B.fDp,B.fD3,D.aH)
d.bH(B.fzw,B.fBo,f)
w.$5(B.cRZ,3,3,0.8,D.aH)
break
case"horse":d.bB(B.fyV,B.fzF,f,0.1)
d.ak5(B.fz0,B.fz8,4.2,f,3,8)
d.bH(B.fz9,B.fBF,f)
d.bH(B.fzf,B.fId,B.iL)
d.h7(B.fz1,B.fzv,1.8,B.iL,6)
w.$5(B.cRl,16,16,2.6,f)
break
default:d.bH(B.zw,B.fCz,f)}},
heQ(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=C.a([],x.z)
for(w=d.length,v=e.a,u=e.b,t=e.c,s=f.a,r=f.b,q=f.c,p=x.o,o=0;o<d.length;d.length===w||(0,C.L)(d),++o){n=d[o]
m=C.a([],p)
for(l=n.a,k=l.length,j=0;j<l.length;l.length===k||(0,C.L)(l),++j){i=l[j]
m.push(new A.D(s+(i.a-s)*v,r+(i.b-r)*u,q+(i.c-q)*t))}l=n.b
h.push(new A.mt(m,new A.D(l.a/v,l.b/u,l.c/t).goy(0),n.c,n.d,n.e,n.f,n.r,n.w,n.x,n.y,n.z))}return h},
aMA(d,e,f,g,h,i){var w,v,u=g.e,t=$.fO1.h(0,u)
if(t==null){A.hPY(d,e,f,i,u==="xbot"?B.RD:new A.uA(g.a,g.b,g.c,g.d,"human"))
return}u=e.e
w=e.z
v=u&&!w&&e.ch>0?e.ch*12:null
D.d.v(d.a,t.cQn(h,i,e.y,w,f,v,u,e.b,e.d,e.c))},
hPY(b2,b3,b4,b5,b6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0=C.a([],x.z),b1=new A.iK(b0)
b1.b=b5
b1.r=!0
w=b6.a
v=C.aq(w,D.w,0.16)
v.toString
u=b6.b
t=b6.c
s=b6.d
r=b3.e
q=r?Math.sin(b3.ch*3.141592653589793):0
p=x.n
o=C.a([],p)
for(n=0;n<2;++n)o.push(q*E.oO[n]*0.6)
m=C.a([],p)
for(l=o.length,n=0;n<o.length;o.length===l||(0,C.L)(o),++n){k=o[n]
m.push(r?Math.max(0,-k)*1.5+0.1:0.04)}p=C.a([],p)
for(j=0;j<2;++j)p.push(16*Math.cos(o[j])+15.5*Math.cos(o[j]+m[j]))
i=Math.max(p[0],p[1])+3.3
h=new A.fhb(b5,b1)
g=new A.fgY(b1)
for(j=0;j<2;++j){p=(j===0?-1:1)*2.9
f=new A.D(p,i,0)
p+=0
l=i+-16*Math.cos(o[j])
e=0+-16*Math.sin(o[j])
d=new A.D(p,l,e)
a0=o[j]+m[j]
p+=0
l+=-15.5*Math.cos(a0)
e+=-15.5*Math.sin(a0)
b1.i4(f,3.6,s,4,8)
g.$5(f,d,3.5,2.7,s)
g.$5(d,new A.D(p,l,e),2.6,1.9,s)
p+=0
e+=2
h.$3(new A.fgZ(),B.fFJ,new A.D(p,l+-1.6,e))
h.$3(new A.fh_(),B.fDv,new A.D(p,l+-2.9,e))}h.$3(new A.fh0(s),B.fE2,new A.D(0,i+1.2,0))
h.$3(new A.fh3(t),B.fFq,new A.D(0,i+2.5,0))
h.$3(new A.fh4(),B.fA7,new A.D(0,i+2.4,0))
h.$3(new A.fh5(t),B.fET,new A.D(0,i+19.6,0))
b1.h7(new A.D(0,i+20.5,0.2),new A.D(0,i+24.2,0.5),2,w,8)
p=i+29
a1=new A.D(0,p,0.6)
h.$3(new A.fh6(w),B.fHf,a1)
h.$3(new A.fh7(w),B.fGp,a1.ad(0,B.fBl))
h.$3(new A.fh8(u),B.fCn,a1.ad(0,B.fFt))
h.$3(new A.fh9(u),B.fE5,a1.ad(0,B.fJS))
for(o=p+-0.2,m=p+0.4,p+=1.9,n=0;n<2;++n){a2=E.oO[n]
b1.i4(new A.D(0+a2*4.2,o,0.6),1,w,3,6)
l=0+a2*1.8
h.$3(new A.fha(),B.fIJ,new A.D(l,m,4.75))
b1.i4(new A.D(l,m,5.1),0.5,D.pu,3,6)
b1.bH(new A.D(l,p,4.8),B.fJq,u)}h.$3(new A.fh1(v),B.fJB,a1.ad(0,B.fDq))
b1.bH(a1.ad(0,B.fFx),B.fEl,B.bdS)
for(v=i+19.3,p=-q,o=b3.f,m=b3.r,l=b3.w,n=0;n<2;++n){a2=E.oO[n]
e=a2*7
a3=p*a2*0.5
a4=r?-0.45:-0.12
a5=a2>0
if(a5&&o){a3=-0.8
a4=-1.2}if(a5&&m){a3=-1
a4=-0.6}if(a5&&l){a3=-1.55
a4=-0.1}a6=v+-11.5*Math.cos(a3)
a7=0+-11.5*Math.sin(a3)
a8=new A.D(e,a6,a7)
a0=a3+a4
a6+=-10.5*Math.cos(a0)
a7+=-10.5*Math.sin(a0)
g.$5(new A.D(e,v,0),a8,2.8,2.3,t)
g.$5(a8,new A.D(e,a6,a7),2.1,1.6,w)
h.$3(new A.fh2(w),B.fIf,new A.D(e,a6+-1.3,a7+0.2))
if(a5&&o){a9=a7+0
b1.e5(new A.D(e,a6+-2.6,a9),new A.D(e,a6+2.6,a9),1.7,D.aS,0.5,8)}if(a5&&m){b1.bB(new A.D(e,a6+-0.4,a7+2.6),B.fEW,D.pu,0.3)
b1.bH(new A.D(e,a6+0.2,a7+3.8),B.fD9,D.ay)}}D.d.v(b2.a,A.rO(b0,0,b3.d,new A.D(b3.b,b3.y,b3.c)))},
fTr(d,e,f){var w,v,u,t,s,r,q=C.aq(f,D.w,Math.abs(-0.25))
q.toString
w=C.aq(f,D.c,Math.abs(0.2))
w.toString
A:{if("bed"===e){d.bB(B.zw,B.fBK,B.x8,0.1)
d.bB(B.fyC,B.fBx,f,0.05)
d.bH(B.fHO,B.aRr,B.adO)
d.bH(B.fzR,B.aRr,B.adO)
d.bB(B.fyY,B.fBL,B.x8,0.1)
d.bH(B.fyN,B.fHl,w)
break A}if("nightstand"===e){d.bB(B.Db,B.fzW,f,0.1)
d.bH(B.fGt,B.fC4,q)
d.bH(B.fJv,B.fB2,B.adt)
d.bH(B.fyZ,B.fCI,B.t6)
break A}if("wardrobe"===e){d.bB(B.fz7,B.fBa,f,0.1)
d.bH(B.fCW,B.fBi,q)
d.bB(B.fEK,B.aS6,B.DT,0.8)
d.bB(B.fJH,B.aS6,B.DT,0.8)
break A}if("desk"===e){d.bB(B.aRe,B.fBf,f,0.1)
d.bH(B.fHT,B.aRu,q)
d.bH(B.fAl,B.aRu,q)
d.bB(B.fzi,B.fAm,B.Kj,0.5)
d.bH(B.fz6,B.fBU,D.ti)
break A}if("rug"===e){d.hX(B.aSj,B.fA4,f,2)
d.bH(B.fCO,B.fIo,w)
break A}if("sofa"===e){d.bB(B.Db,B.fCi,f,0.05)
d.bB(B.fyX,B.fCj,q,0.05)
d.bB(B.fHW,B.aRE,q,0.05)
d.bB(B.fAX,B.aRE,q,0.05)
d.bH(B.fHN,B.aRs,w)
d.bH(B.fzQ,B.aRs,w)
break A}if("armchair"===e){d.bB(B.Db,B.fAI,f,0.05)
d.bB(B.fyW,B.fAK,q,0.05)
d.bH(B.fHM,B.aRB,q)
d.bH(B.fzM,B.aRB,q)
break A}if("coffee"===e){d.bB(B.J2,B.fB6,f,0.2)
for(v=0;v<4;++v){w=B.d7i[v]
d.bH(new A.D(w.a,6.5,w.b),B.fAD,q)}d.bB(B.fDN,B.fCx,D.bR,0.5)
break A}if("tvstand"===e){d.bB(B.aRk,B.fBt,f,0.1)
d.bH(B.fCg,B.fDA,q)
d.bB(B.aRg,B.fBe,E.Ed,0.7)
d.bB(B.fDR,B.fDo,D.fm,0.9)
d.bH(B.fyP,B.fCy,B.iL)
break A}if("dining"===e){d.bB(B.aRe,B.fBu,f,0.2)
for(v=0;v<4;++v){w=B.cCn[v]
d.bH(new A.D(w.a,13,w.b),B.fB1,q)}break A}if("chair"===e){d.bB(B.fyK,B.fA0,f,0.1)
d.bB(B.fz3,B.fzZ,f,0.1)
for(v=0;v<4;++v){w=B.cYT[v]
d.bH(new A.D(w.a,7.5,w.b),B.fAg,q)}break A}if("plant"===e){d.h7(B.fC,B.aRk,5,D.d8,10)
d.i4(B.a7R,8,B.aba,5,8)
d.i4(B.fB0,5,B.VH,4,8)
break A}if("lamp"===e){d.h7(B.fC,B.fP,4.5,B.iL,10)
d.h7(B.fP,B.aRi,0.7,B.iL,6)
d.ak5(B.fzj,B.fzo,6,B.t6,3.5,12)
break A}if("console"===e){d.bB(B.fz_,B.aRz,f,0.15)
d.bH(B.fE6,B.aRt,q)
d.bH(B.fCR,B.aRt,q)
d.bH(B.Db,B.fIa,q)
break A}if("shelf"===e){d.bB(B.aRf,B.fAW,f,0.1)
for(u=0;u<4;++u){q=10+u*15
d.bH(new A.D(0,q,1),B.fAP,B.iL)
w=D.o.F(u,2)
d.bH(new A.D(-8+w*6,q,2),B.fBH,[D.eM,D.dS,D.f6,D.dT][u])
d.bH(new A.D(4+w*4,q,2),B.fCA,[D.dT,D.f6,D.eM,D.dS][u])}break A}if("tree"===e){d.ak5(B.fC,B.aRg,4.2,B.x8,3,8)
d.i4(B.aRi,17,B.aba,5,9)
d.i4(B.fCH,11,B.VH,4,8)
d.i4(B.fI5,12,B.bdw,4,8)
break A}if("pine"===e){d.h7(B.fC,B.aRb,3,B.x8,8)
for(u=0;u<3;++u){q=u*14
d.ak5(new A.D(0,8+q,0),new A.D(0,26+q,0),14-u*3.5,B.abA,1.5,10)}break A}if("bush"===e){d.i4(B.Db,9,B.baJ,4,8)
d.i4(B.fBG,6.5,B.VH,4,8)
break A}if("flowers"===e){for(v=0;v<5;++v){q=B.d5Z[v]
t=q.a
s=q.b
d.h7(new A.D(t,0,s),new A.D(t,7,s),0.4,B.abA,5)
d.i4(new A.D(t,8,s),2.2,q.c,3,6)}break A}if("fence"===e){for(v=0;v<4;++v)d.bB(new A.D(B.d7s[v],9,0),B.fGk,f,0.05)
d.bH(B.zw,B.aSo,q)
d.bH(B.aRd,B.aSo,q)
break A}if("lamppost"===e){d.h7(B.fC,B.fzm,1.3,B.iL,8)
d.h7(B.fC,B.fza,3.5,B.iL,8)
d.i4(B.fzn,4,B.t6,4,8)
break A}if("bench"===e){d.bB(B.fyy,B.aRz,f,0.1)
d.bB(B.fyU,B.fB9,f,0.1)
d.bH(B.fHP,B.aRx,B.iL)
d.bH(B.fA1,B.aRx,B.iL)
break A}if("car"===e){d.bB(B.aRb,B.fCl,f,0.4)
d.bB(B.fHZ,B.fBd,f,0.4)
d.bB(B.fA6,B.fDX,B.px,0.6)
d.bH(B.fIn,B.aRp,B.t6)
d.bH(B.fEo,B.aRp,B.t6)
for(v=0;v<2;++v){t=B.awD[v]
d.h7(new A.D(t,5,-18),new A.D(t,5,-21),5.5,D.pu,12)
d.h7(new A.D(t,5,18),new A.D(t,5,21),5.5,D.pu,12)}break A}if("road"===e||"roadturn"===e||"roadtee"===e||"roadcross"===e){A.hR8(d,e)
break A}if("house2"===e||"shop"===e||"hospital"===e||"firestation"===e||"school"===e){A.hJL(d,e,f)
break A}if("firetruck"===e){d.bB(B.aRc,B.fCE,D.bI,0.3)
d.bB(B.fAT,B.fAk,D.bI,0.3)
d.bB(B.fG8,B.fBB,B.px,0.6)
d.bH(B.fHJ,B.fIE,D.dA)
for(u=0;u<6;++u)d.bH(new A.D(-34+u*11,24,0),B.fFd,D.dA)
d.bH(B.fAU,B.aRI,D.d6)
d.bH(B.fGA,B.fDG,B.Ws)
for(v=0;v<3;++v){t=B.d7t[v]
d.h7(new A.D(t,6,-19),new A.D(t,6,-22.5),6,D.pu,12)
d.h7(new A.D(t,6,19),new A.D(t,6,22.5),6,D.pu,12)}break A}if("ambulance"===e){d.bB(B.J2,B.fCm,D.c,0.4)
d.bB(B.fAJ,B.fAs,D.c,0.4)
d.bB(B.fDT,B.fH5,B.px,0.6)
d.bH(B.fJ7,B.aRW,D.bI)
d.bH(B.fF_,B.aRW,D.bI)
d.bH(B.aSe,B.fEx,D.bI)
d.bH(B.aSe,B.fDt,D.bI)
d.bH(B.fAM,B.aRI,D.ay)
for(v=0;v<2;++v){t=B.awD[v]
d.h7(new A.D(t,6,-19),new A.D(t,6,-22.5),6,D.pu,12)
d.h7(new A.D(t,6,19),new A.D(t,6,22.5),6,D.pu,12)}break A}if("dog"===e||"cat"===e||"cow"===e||"sheep"===e||"chicken"===e||"horse"===e){A.haw(d,e,f,0)
break A}if("pond"===e){q=C.a([],x.z)
r=new A.iK(q)
r.b=d.b
r.f=d.f
r.r=!0
r.e5(B.fC,B.fHy,28,B.bfx,0.8,22)
D.d.v(d.a,A.heQ(q,B.fD4,B.fC))
for(v=0;v<3;++v){q=B.cUR[v]
d.i4(new A.D(q.a,1.2,q.b),2.6,B.ad0,3,6)}break A}if("swing"===e){d.h7(B.fHU,B.fAu,1.6,D.d8,8)
for(v=0;v<2;++v){t=E.a2l[v]
d.h7(new A.D(t,38,0),new A.D(t,0,14),1.4,D.d8,6)
d.h7(new A.D(t,38,0),new A.D(t,0,-14),1.4,D.d8,6)}for(v=0;v<2;++v){t=E.a2m[v]
d.h7(new A.D(t,38,0),new A.D(t,15,0),0.3,B.iL,4)}d.bH(B.J2,B.fJb,f)
break A}if("shed"===e){d.bB(B.J2,B.fBp,f,0.05)
d.bH(B.aRf,B.fBw,B.VY)
d.bH(B.fHu,B.fHm,q)
break A}if("doghouse"===e){d.bB(B.fzr,B.fAt,f,0.05)
d.bH(B.fAH,B.fIx,B.VY)
d.bH(B.fG7,B.fJk,B.Kj)
break A}d.bH(B.zw,B.fzC,f)}},
cai:function cai(){},
fmI:function fmI(d){this.a=d},
fmw:function fmw(){},
fmF:function fmF(){},
fmG:function fmG(d,e,f){this.a=d
this.b=e
this.c=f},
fmx:function fmx(){},
fmy:function fmy(){},
fmz:function fmz(){},
fmA:function fmA(d){this.a=d},
fmC:function fmC(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fmD:function fmD(d,e,f){this.a=d
this.b=e
this.c=f},
fmE:function fmE(d,e,f){this.a=d
this.b=e
this.c=f},
fmH:function fmH(d){this.a=d},
fmB:function fmB(d){this.a=d},
fgD:function fgD(d){this.a=d},
fgE:function fgE(d){this.a=d},
fgB:function fgB(d){this.a=d},
fgC:function fgC(d,e){this.a=d
this.b=e},
fgA:function fgA(d){this.a=d},
fpm:function fpm(){},
fpn:function fpn(d){this.a=d},
fpo:function fpo(d){this.a=d},
f7r:function f7r(d,e){this.a=d
this.b=e},
fhb:function fhb(d,e){this.a=d
this.b=e},
fgY:function fgY(d){this.a=d},
fgZ:function fgZ(){},
fh_:function fh_(){},
fh0:function fh0(d){this.a=d},
fh3:function fh3(d){this.a=d},
fh4:function fh4(){},
fh5:function fh5(d){this.a=d},
fh6:function fh6(d){this.a=d},
fh7:function fh7(d){this.a=d},
fh8:function fh8(d){this.a=d},
fh9:function fh9(d){this.a=d},
fha:function fha(){},
fh1:function fh1(d){this.a=d},
fh2:function fh2(d){this.a=d},
h15(){var w=x.S
return new A.bPR(C.et([72],w),C.aX(w),C.aX(w),C.aX(w))},
hVQ(d){var w
A:{if(81===d){w="outlet"
break A}if(82===d){w="switch"
break A}if(84===d){w="gfci"
break A}if(86===d||87===d){w="ptrap"
break A}if(85===d){w="faucet"
break A}w=null
break A}return w},
afm(a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=C.a([],x.z),a0=new A.iK(d)
a0.b=70
a0.hX(B.fGY,B.fIv,B.bcF,4)
a0.c=1
a0.b=91
w=new A.fmN(a0)
w.$3(B.fDs,B.fCT,15)
w.$4$alongX(B.fI9,B.fFQ,11,!1)
w.$4$alongX(B.fBz,B.fD_,11,!1)
w.$4$alongX(B.fHQ,B.fDF,6,!1)
w.$4$alongX(B.fCb,B.fFR,6,!1)
for(v=0;v<=12;++v)a0.aBM(new A.D(-12+v*2,8.4,0),B.fGr,B.Wf,!1,0.05)
a0.c=2
a0.b=92
u=new A.fmK(a0)
u.$2(B.cf3,B.t8)
u.$2(B.d4G,B.nH)
u.$2(B.d94,B.nH)
t=new A.fmJ(a0)
t.$1(B.cO8)
t.$1(B.cTF)
a0.c=3
a0.b=93
s=new A.fmM(a0)
s.$1(B.cN9)
s.$2$col(B.cLB,B.wM)
s.$2$col(B.cKR,B.wM)
s.$1(B.d1M)
a0.c=4
a0.b=0
a0.d=0.22
a0.hX(B.fCZ,B.fFf,B.A8,4)
a0.hX(B.fFc,B.aS1,B.A8,4)
a0.hX(B.fDu,B.aS1,B.A8,4)
a0.hX(B.fEc,B.aS5,B.A8,3)
a0.hX(B.fJt,B.aS5,B.A8,3)
a0.d=1
a0.c=5
a0.e=0.3
a0.b=0
a0.pl(B.fHI,B.fCX,B.bav,0.1,4)
a0.b=71
a0.bB(B.fH3,B.fGs,B.abL,0.5)
a0.bH(B.fJa,B.fE0,B.E1)
r=[72,73,74,75,76]
for(q=a1.d,p=a1.e,v=0;v<5;++v){o=D.o.F(v,2)
n=D.o.an(v,2)
m=r[v]
l=q.t(0,m)
k=p.t(0,m)
a0.b=m
m=9.55+o*0.5
j=5.7-n*0.5
a0.bB(new A.D(m,j,-7.5),B.fCF,B.af8,0.3)
if(l)i=0
else i=k?-0.07:0.07
if(l)h=D.cd
else h=k?D.bn:D.bR
a0.bB(new A.D(m+0,j+i,-7.42),B.fDK,h,0.4)}a0.b=90
a0.bB(B.fFS,B.fBE,B.bjs,0.1)
a0.bB(B.fIc,B.fDh,B.WN,0.1)
a0.bB(B.fJP,B.aSn,B.WN,0.1)
a0.bB(B.fDa,B.aSn,B.WN,0.1)
g=new A.fmL(a0)
g.$3(81,B.fCh,a1.x?B.wZ:B.Wx)
a0.b=81
a0.bH(B.fFT,B.aSg,B.Ea)
a0.bH(B.fEB,B.aSg,B.Ea)
g.$5$h$w(82,B.fJe,F.WH,0.65,0.4)
a0.b=82
a0.bB(B.fHq,B.fBD,B.acq,0.4)
f=!q.t(0,72)
a0.b=83
a0.e5(B.fHh,B.aRR,0.5,B.bhf,0.4,14)
a0.b8V(B.fIM,0.3,f?A4.WA:B.bcp,0.7)
if(f){a0.b=0
a0.d=0.22
a0.iR(B.aRH,1.5,B.VR,4,10,0)
a0.d=1}a0.b=94
a0.bB(B.fIC,B.aSq,B.m7,0.1)
a0.bB(B.fG4,B.aSq,B.m7,0.1)
a0.bB(B.fJc,B.fDx,B.m7,0.1)
a0.pl(B.fFs,B.fIO,B.El,0.5,2)
a0.bB(B.fH_,B.fJL,B.E8,0.7)
a0.b=85
a0.jV(A.Gj(B.cWZ,0.2,6),0.055,B.kD,!1,0.9,8)
a0.b=84
a0.bB(B.fIW,B.fHB,B.Wx,0.3)
a0.bH(B.fEj,B.fJ9,a1.y?B.ad_:B.af2)
a0.b=86
a0.jV(A.Gj(B.cOA,0.35,3),0.11,B.pm,!1,0.3,8)
a0.b=87
a0.e5(B.fEX,B.fH6,0.19,a1.c?B.VD:B.bfh,0.3,8)
a0.b=88
a0.bB(B.fBc,B.fCK,B.Af,0.7)
a0.Kn(B.fGX,B.aSh,0.72,B.Af,0.55,0.7,16)
a0.e5(B.aSh,B.fFB,0.78,B.bgS,0.7,16)
a0.b=89
a0.e5(B.fIi,B.aRK,0.85,B.b6f,0.6,18)
a0.e5(B.aRK,B.fFe,0.5,B.b6g,0.5,12)
a0.bH(B.fGe,B.fJE,B.bfb)
a0.b=95
for(p=a1.f,m=a1.r,v=0;v<3;++v){e=B.cv2[v]
if(m.t(0,v)){j=e.a
i=e.b
a0.bH(new A.D(j,i,-7.82),B.fHj,B.A8)
a0.bH(new A.D(j,i,-7.79),B.fFi,B.b9c)}else if(p.t(0,v)){j=e.a
i=e.b
a0.bH(new A.D(j,i,-7.82),B.fAe,B.ae5)
a0.bH(new A.D(j,i,-7.8),B.fG2,B.bjJ)}}if(a1.w){a0.b=96
a0.e5(B.fFm,B.fES,0.1,D.d8,0.7,8)}a0.e=0
a0.c=6
a0.b=0
a0.d=0.4
a0.bfS(B.aRC,B.aSf,B.a7X,B.a7V,B.abS,B.fFN,!0)
a0.bfS(B.aS9,B.aSl,B.a7V,B.a7X,B.abS,B.fHo,!0)
a0.bh_(B.aRC,B.aSl,B.a7V,B.ac5)
a0.bh_(B.aSf,B.aS9,B.a7X,B.ac5)
a0.d=1
p=q.t(0,72)?"This breaker has TRIPPED (it is in the middle, orange). The living room has no power. Tap it to flip it off and on again.":"This breaker is ON. The living room has power."
q=q.t(0,72)?"The light is off because the living room breaker has tripped.":"The ceiling light is on."
m=a1.b
j=m&&!a1.c?"Water is dripping from the slip nut here. Pick the wrench, then tap the nut to tighten it.":"The P-trap holds a water seal that blocks sewer gas. Tap Open lesson to build one."
m=m&&!a1.c?"This slip nut is loose and the trap is dripping. Pick the wrench and tap here to tighten it.":"The slip nut is tight."
return new A.xB(d,C.F([70,B.dYe,91,B.dXF,92,B.dXY,93,B.dY5,71,B.dYj,72,new A.d1("Living room breaker",p,B.fJx,3.5),73,B.dXQ,74,B.dY7,75,B.dXv,76,B.dY0,81,B.dY2,82,B.dXm,83,new A.d1("Ceiling light",q,B.aRR,7),84,B.dY8,85,B.dXx,86,new A.d1("P-trap under the sink",j,B.fGW,4.5),87,new A.d1("Slip nut (leaking?)",m,B.aRT,3.5),88,B.dXj,89,B.dY6,90,B.dYa,94,B.dXP,95,B.dYc,96,B.dXo],x.S,x.q),B.GS,B.vK,null)},
hfY(d,e){var w,v,u,t,s,r,q,p=C.a([],x.z),o=new A.iK(p)
o.c=5
o.e=0.8
if(d.w)for(w=e*1.5,v=0;v<6;++v){u=D.k.F(w+v/6,1)
o.iR(new A.D(3.4+Math.sin(v*2)*0.12,3.3-u*u*2.8,-7.7),0.05,D.Ki,3,6,0.9)}if(d.as){u=D.k.F(e*1.1,1)
o.iR(new A.D(3,3.9-u*u*0.7,-6.95),0.05,B.VO,3,6,0.9)}if(d.Q)for(w=e*1.6,v=0;v<6;++v){u=D.k.F(w+v/6,1)
o.iR(new A.D(8.2+Math.sin(v*1.7)*0.15,2.2-u*1.5,-7.2),0.05,B.VO,3,6,0.9)}if(d.at){o.d=0.55
o.bB(B.fD8,B.fEg,B.bh4,0.8)
o.d=1}if(d.x)for(w=e*2,t=e*6,v=0;v<8;++v){u=D.k.F(w+v*0.13,1)
s=v*2.4+t
r=Math.cos(s)
s=Math.sin(s)
q=C.aq(E.WP,E.WU,1-u)
q.toString
o.iR(new A.D(-3.2+r*u*0.7,1.3+s*u*0.7,-7.6+u*0.3),0.05,q,3,5,0)}if(d.z&&!d.d.t(0,72)){o.b=0
o.d=D.k.D((Math.sin(e*17)+Math.sin(e*29)+2)/4*0.5,0,0.6)
o.iR(B.aRH,1.5,B.VR,4,10,0)
o.d=1}if(d.b&&!d.c){for(w=e*1.3,v=0;v<5;++v){u=D.k.F(w+v*0.2,1)
o.iR(new A.D(3.05,1.45-u*u*1.4,-6.95),0.05,B.KX,3,6,0.9)}o.d=0.5
o.bB(B.fCS,new A.D(0.7+0.3*Math.sin(e),0.02,0.5),B.KX,0.9)
o.d=1}return p},
bPR:function bPR(d,e,f,g){var _=this
_.a=5
_.b=!0
_.c=!1
_.d=d
_.e=e
_.f=f
_.r=g
_.at=_.as=_.Q=_.z=_.y=_.x=_.w=!1},
fmN:function fmN(d){this.a=d},
fmK:function fmK(d){this.a=d},
fmJ:function fmJ(d){this.a=d},
fmM:function fmM(d){this.a=d},
fmL:function fmL(d){this.a=d},
ku(d,e,f,g){var w
try{H.dF(d,"",e,0,f,g)}catch(w){}},
yb(){A.ku(880,80,0.25,"tri")
C.bN(W.afQ,new A.fnH(),x.H)},
hxH(){return new A.MP(null)},
X2(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){return new A.b5e(r,q,e,p,o,h,f,k,l,g,i,s,t,j,m,n,d,null)},
Qo(d,e,f,g,h){var w=null,v=g?e.j(0.25):D.w.j(0.5),u=C.m(18),t=C.I(g?e:D.b2,D.q,1),s=x.p,r=C.a([],s)
D.d.v(r,C.a([C.X(f,g?e:D.ad,w,w,w,16),D.eb],s))
r.push(C.d(d,w,w,w,w,w,w,C.l(w,w,g?e:D.ad,w,w,w,w,w,w,w,w,12,w,w,D.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w))
return C.aE(w,C.p(w,C.A(r,D.m,w,D.e,D.Q,0,w,w),D.f,w,w,new C.o(v,w,t,u,w,w,D.n),w,w,w,w,D.h6,w,w,w),D.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,h,w,w,w,w,w,w,!1,D.a8)},
ya(d,e,f,g){var w=null,v=f==null,u=v?D.dp:g.j(0.9),t=C.m(14),s=C.X(e,v?D.c_:D.w,w,w,w,18)
return C.E(C.aE(w,C.p(w,C.A(C.a([s,D.bp,new C.dq(1,D.cl,C.d(d,w,w,w,w,w,w,C.l(w,w,v?D.c_:D.w,w,w,w,w,w,w,w,w,12.5,w,w,D.u,w,w,!0,w,w,w,w,w,w,w,w),D.L,w,w),w)],x.p),D.m,w,D.bb,D.j,0,w,w),D.f,w,w,new C.o(u,w,w,t,w,w,D.n),w,w,w,w,D.v5,w,w,w),D.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,!1,D.a8),1)},
fDX(d,e,f,g){return C.bV(E.mb,null,new A.fDZ(e,g,f),d,!0,!0,!0,D.kY,!1,!1,x.H)},
fnH:function fnH(){},
Fl:function Fl(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
MP:function MP(d){this.a=d},
bi0:function bi0(){this.d=!1
this.c=this.a=null},
dKH:function dKH(d){this.a=d},
dKK:function dKK(d){this.a=d},
dKL:function dKL(d){this.a=d},
dKJ:function dKJ(d){this.a=d},
dKM:function dKM(d){this.a=d},
dKI:function dKI(d){this.a=d},
dKP:function dKP(d){this.a=d},
dKQ:function dKQ(d){this.a=d},
dKR:function dKR(d){this.a=d},
dKS:function dKS(d){this.a=d},
dKT:function dKT(d){this.a=d},
dKU:function dKU(d){this.a=d},
dKV:function dKV(d){this.a=d},
dKW:function dKW(d){this.a=d},
dKN:function dKN(d,e){this.a=d
this.b=e},
dKO:function dKO(d){this.a=d},
b5e:function b5e(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u){var _=this
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
_.a=u},
cpO:function cpO(d){this.a=d},
cpP:function cpP(d){this.a=d},
fDZ:function fDZ(d,e,f){this.a=d
this.b=e
this.c=f},
fDY:function fDY(){},
B0:function B0(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
bRW:function bRW(d){this.a=d},
GZ:function GZ(d,e,f){this.c=d
this.d=e
this.a=f},
ayn:function ayn(){var _=this
_.r=_.f=_.e=_.d=$
_.w=""
_.x=0
_.y=null
_.z=!1
_.Q=0
_.c=_.a=_.as=null},
d2s:function d2s(d,e,f){this.a=d
this.b=e
this.c=f},
d2t:function d2t(d){this.a=d},
d2r:function d2r(d){this.a=d},
d2l:function d2l(d){this.a=d},
d2k:function d2k(d){this.a=d},
d2m:function d2m(d){this.a=d},
d2n:function d2n(d){this.a=d},
d2o:function d2o(d,e){this.a=d
this.b=e},
d2p:function d2p(d,e){this.a=d
this.b=e},
d2q:function d2q(d){this.a=d},
d2u:function d2u(d){this.a=d},
d2C:function d2C(){},
d2F:function d2F(d,e,f){this.a=d
this.b=e
this.c=f},
d2D:function d2D(d){this.a=d},
d2B:function d2B(d){this.a=d},
d2E:function d2E(d){this.a=d},
d2A:function d2A(d){this.a=d},
d2G:function d2G(d){this.a=d},
d2H:function d2H(d){this.a=d},
d2I:function d2I(d){this.a=d},
d2J:function d2J(d,e){this.a=d
this.b=e},
d2z:function d2z(d,e){this.a=d
this.b=e},
d2K:function d2K(d){this.a=d},
d2y:function d2y(d){this.a=d},
d2L:function d2L(d){this.a=d},
d2x:function d2x(d){this.a=d},
d2M:function d2M(d){this.a=d},
d2w:function d2w(d){this.a=d},
d2N:function d2N(d){this.a=d},
d2v:function d2v(d){this.a=d},
a8t:function a8t(d,e){this.c=d
this.a=e},
aEi:function aEi(){var _=this
_.f=_.e=_.d=$
_.r=""
_.w=0
_.x=null
_.y=!1
_.c=_.a=_.z=null},
eMB:function eMB(d,e,f){this.a=d
this.b=e
this.c=f},
eMC:function eMC(d){this.a=d},
eMA:function eMA(d){this.a=d},
eMu:function eMu(d){this.a=d},
eMv:function eMv(d,e){this.a=d
this.b=e},
eMw:function eMw(d,e){this.a=d
this.b=e},
eMx:function eMx(d,e){this.a=d
this.b=e},
eMy:function eMy(d){this.a=d},
eMz:function eMz(d,e){this.a=d
this.b=e},
eMG:function eMG(){},
eMK:function eMK(d,e){this.a=d
this.b=e},
eMH:function eMH(d){this.a=d},
eMI:function eMI(d,e){this.a=d
this.b=e},
eMF:function eMF(d,e){this.a=d
this.b=e},
eMJ:function eMJ(d){this.a=d},
eME:function eME(d){this.a=d},
eMD:function eMD(){},
a3T:function a3T(d,e){this.c=d
this.a=e},
ayC:function ayC(){var _=this
_.f=_.e=_.d=$
_.r=""
_.w=0
_.x=null
_.y=!1
_.c=_.a=_.z=null},
d5n:function d5n(d,e,f){this.a=d
this.b=e
this.c=f},
d5o:function d5o(d){this.a=d},
d5m:function d5m(d){this.a=d},
d5f:function d5f(d){this.a=d},
d5i:function d5i(d){this.a=d},
d5j:function d5j(d,e){this.a=d
this.b=e},
d5k:function d5k(d,e){this.a=d
this.b=e},
d5h:function d5h(d){this.a=d},
d5l:function d5l(d,e){this.a=d
this.b=e},
d5g:function d5g(d){this.a=d},
d5s:function d5s(){},
d5y:function d5y(d,e){this.a=d
this.b=e},
d5t:function d5t(d){this.a=d},
d5u:function d5u(d){this.a=d},
d5r:function d5r(d){this.a=d},
d5w:function d5w(d,e){this.a=d
this.b=e},
d5q:function d5q(d,e){this.a=d
this.b=e},
d5v:function d5v(d){this.a=d},
d5x:function d5x(d){this.a=d},
d5p:function d5p(d){this.a=d},
azu:function azu(d){this.a=d},
azv:function azv(d){var _=this
_.d=d
_.f=_.e=$
_.r=0
_.w=""
_.x=null
_.y=!1
_.c=_.a=_.z=null},
dcs:function dcs(d,e,f){this.a=d
this.b=e
this.c=f},
dct:function dct(d){this.a=d},
dcr:function dcr(d){this.a=d},
dcm:function dcm(d){this.a=d},
dco:function dco(d,e){this.a=d
this.b=e},
dcp:function dcp(d,e){this.a=d
this.b=e},
dcq:function dcq(d,e){this.a=d
this.b=e},
dcn:function dcn(d){this.a=d},
dcB:function dcB(d,e){this.a=d
this.b=e},
dcw:function dcw(d,e){this.a=d
this.b=e},
dcy:function dcy(d){this.a=d},
dcx:function dcx(d){this.a=d},
dcz:function dcz(d){this.a=d},
dcv:function dcv(d){this.a=d},
dcA:function dcA(d){this.a=d},
dcu:function dcu(d,e){this.a=d
this.b=e},
jy:function jy(d,e){this.a=d
this.b=e},
Mb:function Mb(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a5Z:function a5Z(d){this.a=d},
c5B:function c5B(d){this.a=d},
fR_(){var w=x.N
return new A.cgr(C.aX(w),C.F(["n1",!1,"n2",!1],w,x.R),C.T(x.S,w))},
i5w(d,e,f){var w,v
if(!f.c.t(0,e)){w=f.d
return e==="hot"?"The red (hot) hose goes on the LEFT side only. "+w:"The blue (cold) hose goes on the RIGHT side only. "+w}w=d.e
v=f.a
if(w.h(0,v)!=null)return"That connection already has a hose."
w.n(0,v,e)
return null},
fDl(){var w,v,u=C.a([B.aRy,B.fEM],x.o)
for(w=1;w<=12;++w){v=3.141592653589793+3.141592653589793*w/12
u.push(new A.D(3+3*Math.cos(v),0.2+3*Math.sin(v),0))}D.d.v(u,A.Gj(B.cYd,1,6))
return u},
bzK(d){var w,v,u,t,s="trap",r=C.a([],x.z),q=new A.iK(r)
q.b=49
q.pl(B.fA9,B.fB4,B.m7,0.1,2)
q.pl(B.fJr,B.fAb,B.m7,0.1,2)
q.b=47
q.hX(B.fFM,B.fB5,B.uT,3)
q.hX(B.fAG,B.fAc,B.uT,3)
q.b=46
q.pl(B.fBJ,B.fGw,B.El,0.5,3)
q.baS(B.fHF,B.J2,6.5,B.E8,!0,0.7,20)
q.e5(B.fGQ,B.fEu,1.5,B.kD,0.85,14)
q.b=48
q.a32(B.a7Y,B.fDr,0.92,B.pm,!1,!0,0.3,14)
q.cSi(B.a7Y,B.fIS,1,0.72,B.pm,0.3)
w=new A.fnn(d,q)
w.$5(41,B.a1H,B.kD,0.85,"tail")
w.$5(42,A.fDl(),B.pm,0.3,s)
w.$5(43,B.a2y,B.pm,0.3,"arm")
w=new A.fnm(d,q)
v=d.a
w.$6(44,"n1",B.a7U,B.fP,B.fDD,v.t(0,"tail")&&v.t(0,s))
w.$6(45,"n2",B.a7W,B.iH,B.fHA,v.t(0,s)&&v.t(0,"arm"))
if(v.t(0,s)){q.b=0
q.d=0.55
q.e=0.4
u=A.fDl()
w=C.U(u).k("a2<1>")
t=C.B(new C.a2(u,new A.fnl(),w),w.k("J.E"))
if(t.length>1)q.aHi(t,0.4092,B.bjt,!1,!0,0.6,8)
q.d=1
q.e=0}return new A.xB(r,C.F([41,B.dXz,42,B.dXB,43,B.dY4,44,B.dXT,45,B.dYg,46,B.dXH,47,B.dXN,48,B.dXh,49,B.dXD],x.S,x.q),B.GS,B.vK,null)},
i3v(d,e){var w,v,u,t,s,r,q,p=C.a([],x.z),o=new A.iK(p),n=d.d
if(n.length!==0){w=n==="n1"?B.fJG:B.fIr
for(n=e*1.4,v=w.a+0,u=w.b,t=w.c+0,s=0;s<5;++s){r=D.k.F(n+s*0.2,1)
o.iR(new A.D(v,u+(-r*6*r-r*1.5),t),0.22*(1-r*0.3),B.KX,3,6,0.9)}}else if(d.c){n=x.Q
v=C.B(B.a1H,n)
u=A.fDl()
D.d.v(v,C.dd(u,1,null,C.U(u).c))
D.d.v(v,C.dd(B.a2y,1,null,n))
for(n=e*0.45,s=0;s<18;++s){r=D.k.F(n+s/18,1)
q=D.o.D(D.k.bu(r*(v.length-1)),0,v.length-2)
u=v.length
o.iR(A.uU(v[q],v[q+1],r*(u-1)-q),0.38,B.biT,3,6,0.9)}for(n=e*2.2,s=0;s<6;++s)o.iR(new A.D(0,14-D.k.F(n+s/6,1)*5.4,0),0.3,B.VO,3,6,0.9)}return p},
afz(d){switch(d){case 61:return B.fA8
case 62:return B.fIp
case 63:return B.fF9
default:return B.fF0}},
fVD(d){var w=d==="hot",v=A.afz(w?61:62),u=A.afz(w?63:64),t=w?-1:1
return A.agM(C.a([v,v.ad(0,new A.D(t*0.6,2.2,1.2)),A.uU(v,u,0.5).ad(0,new A.D(t*1.4,0,2.6)),u.ad(0,new A.D(-t*0.2,-2,1)),u],x.o),6)},
aNz(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=C.a([],x.z),e=new A.iK(f)
e.b=67
e.hX(B.fA5,B.fAV,B.uT,3)
e.b=66
e.pl(B.fEL,B.fIR,B.El,0.5,3)
e.h7(B.fHi,B.fFX,5.5,E.Ed,16)
e.b=65
e.e5(B.fID,B.aS8,3.4,B.kD,0.9,20)
e.jV(A.Gj(B.d2l,1.4,6),0.5,B.kD,!0,0.9,12)
for(w=0;w<2;++w){v=B.cYV[w]
u=v*1.2
e.e5(new A.D(u,15.5,-3.6),new A.D(u,17.7,-3.6),0.38,B.kD,0.9,10)
t=v<0?B.t8:B.nH
e.e5(new A.D(u,17.7,-3.6),new A.D(u,18.6,-3.6),0.6,t,0.6,12)}for(u=[B.ehI,B.edu],w=0;w<2;++w){t=u[w]
v=t.b
e.b=t.a
e.e5(new A.D(v,15.3,-3.6),new A.D(v,11.4,-3.6),0.45,B.kD,0.9,10)
e.e5(new A.D(v,11.4,-3.6),new A.D(v,10.7,-3.6),0.3,B.beU,0.6,8)
e.yY(new A.D(v,11.3,-3.6),new A.D(v,11.9,-3.6),0.78,0.48,B.bgQ,0.7,8)}for(u=[B.ez7,B.eAT],w=0;w<2;++w){t=u[w]
v=t.b
e.b=t.a
e.e5(new A.D(v,-1.5,-6),new A.D(v,-1.5,-3.6),0.4,B.K9,0.7,12)
e.e5(new A.D(v,-1.5,-4.4),new A.D(v,0.7,-4.4),0.78,B.rY,0.8,12)
e.e5(new A.D(v,0.7,-4.4),new A.D(v,1.5,-3.6),0.38,B.rY,0.8,10)
e.e5(new A.D(v,-0.2,-4.4),new A.D(v,-0.2,-3.1),0.2,B.abt,0.7,8)
e.e5(new A.D(v,-0.2,-3.1),new A.D(v,-0.2,-2.8),0.95,t.c,0.5,12)
e.yY(new A.D(v,1.2,-3.6),new A.D(v,1.9,-3.6),0.78,0.4,B.rY,0.8,8)}for(u=x.o,w=0;w<2;++w){s=B.d4L[w]
t=s==="hot"
r=t?B.cvX:B.cw9
q=C.U(r).k("a2<1>")
p=C.B(new C.a2(r,new A.fmv(d,s),q),q.k("J.E"))
e.b=t?68:69
o=t?B.t8:B.nH
t=p.length
if(t===2){n=A.fVD(s)
e.jV(n,0.34,B.KO,!1,0.7,8)
m=n.length/2|0
e.jV(C.a([n[m-1],n[m],n[m+1]],u),0.4,o,!1,0.4,8)
for(t=r.length,l=0;l<t;++l){k=A.afz(r[l])
q=k.a+0
j=k.b
i=k.c+0
e.yY(new A.D(q,j+-0.2,i),new A.D(q,j+0.6,i),0.62,0.3,B.rY,0.8,8)}}else if(t===1){k=A.afz(D.d.gL(p))
h=D.d.gL(p)===D.d.gL(r)?1:-1
t=k.a+0
q=k.b
j=k.c
e.jV(C.a([k,new A.D(t,q+h*1.4,j+1),new A.D(t,q+h*3,j+2.4)],u),0.34,B.KO,!1,0.7,8)
j+=0
e.yY(new A.D(t,q+-0.2,j),new A.D(t,q+0.6,j),0.62,0.3,B.rY,0.8,8)}}if(d.r){e.b=0
e.d=0.5
for(u=d.e,w=0;w<4;++w){g=B.a2t[w]
t=g.a
if(u.h(0,t)!=null)continue
t=A.afz(t)
q=g.c.t(0,"hot")?B.t8:B.nH
e.iR(new A.D(t.a+0,t.b+0,t.c+0.9),0.65,q,4,8,0.1)}e.d=1}return new A.xB(f,C.F([61,B.dXq,62,B.dXs,63,B.dXl,64,B.dXt,65,B.dXO,66,B.dXK,67,B.dXi,68,B.dYk,69,B.dXR],x.S,x.q),B.GS,B.vK,null)},
hVn(d,e){var w,v,u,t,s,r,q,p,o,n=C.a([],x.z),m=new A.iK(n)
if(!d.f)return n
w=d.e
v=w.h(0,61)==="hot"&&w.h(0,63)==="hot"
u=w.h(0,62)==="cold"&&w.h(0,64)==="cold"
t=new A.foQ(e,m)
if(v){s=A.fVD("hot")
for(r=e*0.5,q=0;q<10;++q){p=D.k.F(r+q/10,1)
o=D.o.D(D.k.bu(p*(s.length-1)),0,s.length-2)
m.iR(A.uU(s[o],s[o+1],p*(s.length-1)-o),0.2,D.Ki,3,6,0.9)}}else if(w.h(0,61)==null)t.$2(61,D.Ki)
if(u){s=A.fVD("cold")
for(w=e*0.5,q=0;q<10;++q){p=D.k.F(w+q/10,1)
o=D.o.D(D.k.bu(p*(s.length-1)),0,s.length-2)
m.iR(A.uU(s[o],s[o+1],p*(s.length-1)-o),0.2,B.Wk,3,6,0.9)}}else if(w.h(0,62)==null)t.$2(62,B.Wk)
if(v&&u)for(w=e*2,q=0;q<8;++q){p=D.k.F(w+q/8,1)
r=C.aq(B.biZ,B.Wk,0.5)
r.toString
m.iR(new A.D(0,21-p*6.5,1.6),0.26,r,3,6,0.9)}return n},
foO(d){return D.d.da(B.a2t,new A.foP(d))},
cgr:function cgr(d,e,f){var _=this
_.a=d
_.b=e
_.c=!1
_.d=""
_.e=f
_.r=_.f=!1},
Ew:function Ew(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fnn:function fnn(d,e){this.a=d
this.b=e},
fnm:function fnm(d,e){this.a=d
this.b=e},
fnl:function fnl(){},
fmv:function fmv(d,e){this.a=d
this.b=e},
foQ:function foQ(d,e){this.a=d
this.b=e},
foP:function foP(d){this.a=d},
fQZ(d,e,f){var w=x.N
w=new A.cgh(e,d,C.aX(w),C.T(w,x.S),C.aX(w))
w.bwd(d,e,f)
return w},
hfk(b7,b8,b9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2=C.a([],x.z),b3=new A.iK(b2),b4=C.T(x.S,x.q),b5=C.a([],x.E),b6=b7.c
b6===$&&C.c()
w=b6.a==="bathroom"
v=w?28:0
b3.b=9199
b3.hX(B.fHY,B.fJp,B.b8Q,4)
b3.hX(B.fGv,B.fIm,B.VM,4)
b3.hX(new A.D(v+19.8+0.6,24,16),B.fEt,B.uT,2)
b4.n(0,9199,B.dXC)
b3.b=9198
b3.bB(new A.D(v,0.6,10),B.fIB,B.m7,0.1)
b3.bB(new A.D(v,29.4,18.6),B.fEf,B.m7,0.1)
b3.bB(new A.D(v-19.4,13.6,10.5),B.fJd,B.m7,0.1)
for(u=[B.eDL,B.eDH,B.eCE,B.eCB],t=0;t<4;++t){s=u[t].a
b3.bB(new A.D(v+s[0],33,s[1]),new A.D(s[2],2.4,s[3]),B.El,0.5)}b3.a32(new A.D(v,27,8),new A.D(v,34.3,8),8,B.aeR,!1,!0,0.7,20)
b3.e5(new A.D(v,27,8),new A.D(v,27.2,8),8,B.bbi,0.5,20)
b3.h7(new A.D(v,27.1,8),new A.D(v,27.3,8),1.4,B.iL,12)
b3.a32(new A.D(v+15,23.6,8),new A.D(v+19.4,23.6,8),0.92,B.pm,!1,!0,0.3,12)
b4.n(0,9198,B.dY1)
b3.b=9400
b3.e5(new A.D(-56,18,0),new A.D(-56,18,6),1.5,B.rY,0.8,12)
u=b7.r?B.nH:D.bn
b3.e5(new A.D(-57,18,6),new A.D(-55,18,6.5),4,u,0.5,14)
b3.e5(new A.D(-56,16,0),new A.D(-56,20,0),1,B.K9,0.7,10)
u=b7.r?"The water is ON. Turn it OFF with your hand before you cut into any pipe, and turn it ON to test your work.":"The water is OFF. Turn it ON to test your work."
b4.n(0,9400,new A.d1("Main water valve",u,new A.D(-56,18,4),22))
u=b7.r
s=u?"MAIN WATER: ON":"MAIN WATER: OFF"
u=u?D.dS:D.bn
b5.push(new A.nc(new A.D(-56,24,6),s,u))
r=new A.fnk(b3)
u=v-8
r.$1(u)
s=v+8
r.$1(s)
if(w)r.$1(-40)
q=new A.D(v,21,8)
p=new A.fni(q)
o=new A.fnc(b3,b7)
n=new A.fnd(b3,b7)
m=new A.fnj(b7,b4,b9,b8,b5)
l=b6.c
for(b6=l.length,k=b7.x,j=b7.e,i=b7.f,h=x.o,t=0;t<b6;++t){g=l[t]
f=g.a
e=j.t(0,f)
if(e){d=b7.uQ(0,f)
a0=i.h(0,f)
if(a0==null)a0=0
a1=d.r-a0>0}else a1=!1
a2=D.d.cJ(l,g)
a3=9100+a2
k.t(0,f)
switch(f){case"flange":a4=new A.D(-30,0.3,14)
if(e){b3.b=a3
b3.e5(a4,new A.D(-30,0.8999999999999999,14),5.5,B.pm,0.4,18)
b3.yY(new A.D(-30,0.8,14),new A.D(-30,1.2,14),5.5,3.2,B.rY,0.8,18)}else n.$3(f,new A.D(-30,0.8,14),B.fzG)
m.$3(g,a4,"Flange spot")
break
case"wax":a4=new A.D(-30,1.2,14)
if(e){b3.b=a3
b3.yY(a4,new A.D(-30,2.3,14),4.2,2.4,B.bjS,0.2,18)}else n.$3(f,new A.D(-30,1.7,14),B.fGG)
m.$3(g,a4,"Wax ring spot")
break
case"toilet":if(e){b3.b=a3
b3.Kn(new A.D(-30,0.5,14),new A.D(-30,16,14),8.5,B.Af,6,0.8,20)
b3.e5(new A.D(-30,16,14),new A.D(-30,17,14),9.5,B.KU,0.8,20)
b3.bB(new A.D(-30,22,4.5),B.aRq,B.Af,0.8)
b3.bB(new A.D(-30,29.2,4.5),B.fD2,B.KU,0.8)}else{b3.b=a3
b3.d=0.32
b3.h7(new A.D(-30,0.5,14),new A.D(-30,17,14),8.5,D.b1,16)
b3.bH(new A.D(-30,22,4.5),B.aRq,D.b1)
b3.d=1}m.$3(g,new A.D(-30,12,12),"Toilet spot")
break
case"bolts":if(e){for(f=9200+a2*2,a5=0;a5<2;++a5){a6=B.awG[a5]
b3.b=f+(a6<0?0:1)
d=-30+a6
b3.e5(new A.D(d,0.5,17),new A.D(d,3.6,17),0.45,B.E8,0.8,8)
a0=a1?D.ct:B.E8
b3.e5(new A.D(d,3.4,17),new A.D(d,4.6,17),1.2,a0,0.8,6)}f=a1?"The nuts are loose. Tighten them with the wrench, a little at a time so the porcelain does not crack.":"The toilet is bolted down."
b4.n(0,a3,new A.d1(g.c,f,new A.D(-30,3,17),20))}else for(a5=0;a5<2;++a5){a6=B.awG[a5]
b3.b=a3
b3.d=0.4
f=-30+a6
b3.h7(new A.D(f,0.5,17),new A.D(f,4.6,17),1.2,D.b1,8)
b3.d=1}m.$3(g,new A.D(-30,3,17),"Bolts")
break
case"tvalve":A.fV5(b3,a3,new A.D(-40,8,1.6),e,B.nH,new A.fn9(n,g,-30))
m.$3(g,new A.D(-40,8,2),"Valve")
break
case"those":if(e){b3.b=a3
b3.jV(A.agM(C.a([new A.D(-40,10,1.6),new A.D(-42,14,3.5),new A.D(-36,17,3.6),new A.D(-32,21,2.5)],h),6),0.55,B.KO,!1,0.7,8)
b3.jV(C.a([new A.D(-36.8,15.5,3.6),new A.D(-35,16.4,3.6)],h),0.62,B.nH,!1,0.4,8)
if(a1)b3.h7(new A.D(-40,10,1.6),new A.D(-40,11.2,1.6),0.9,D.ct,8)}else o.$3$r(f,A.agM(C.a([new A.D(-40,10,1.6),new A.D(-42,14,3.5),new A.D(-36,17,3.6),new A.D(-32,21,2.5)],h),6),0.9)
m.$3(g,new A.D(-36,15,3),"Toilet hose")
break
case"faucet":if(e){b3.b=a3
b3.e5(new A.D(v,34.2,8),new A.D(v,34.6,8),3.6,B.kD,0.9,20)
b3.jV(A.Gj(C.a([new A.D(v,34.6,8),new A.D(v,40,8),new A.D(v,43,10),new A.D(v,43,14),new A.D(v,41.2,14.6)],h),1.4,6),0.5,B.kD,!0,0.9,10)
for(a5=0;a5<2;++a5){a6=E.a2m[a5]
f=v+a6
b3.e5(new A.D(f,34.6,8),new A.D(f,36.6,8),0.5,B.kD,0.9,8)
d=a6<0?B.t8:B.nH
b3.e5(new A.D(f,36.6,8),new A.D(f,37.6,8),0.8,d,0.6,10)}for(a5=0;a5<2;++a5){f=v+B.d7u[a5]
b3.e5(new A.D(f,34,8),new A.D(f,28.4,8),0.45,B.kD,0.9,8)}}else n.$3(f,new A.D(v,38,9),B.fzE)
m.$3(g,new A.D(v,38,8),"Faucet spot")
break
case"vhot":A.fV5(b3,a3,new A.D(u,8,1.6),e,B.t8,new A.fna(n,g,v))
m.$3(g,new A.D(u,8,2),"Hot valve")
break
case"vcold":A.fV5(b3,a3,new A.D(s,8,1.6),e,B.nH,new A.fnb(n,g,v))
m.$3(g,new A.D(s,8,2),"Cold valve")
break
case"hhot":case"hcold":a7=f==="hhot"
a8=a7?-1:1
d=v+a8*3
a9=A.agM(C.a([new A.D(v+a8*8,10.5,1.8),new A.D(v+a8*9,16,3.5),new A.D(v+a8*6,22,4.2),new A.D(d,27.5,6),new A.D(d,28.6,8)],h),6)
if(e){b3.b=a3
b3.jV(a9,0.5,B.KO,!1,0.7,8)
b0=a9.length/2|0
f=C.a([a9[b0-1],a9[b0],a9[b0+1]],h)
b3.jV(f,0.58,a7?B.t8:B.nH,!1,0.4,8)
if(a1){f=D.d.gL(a9)
d=D.d.gL(a9)
b3.h7(f,new A.D(d.a+0,d.b+1.4,d.c+0),0.9,D.ct,8)
d=D.d.gal(a9)
b3.h7(new A.D(d.a,d.b-1.4,d.c),D.d.gal(a9),0.9,D.ct,8)}}else o.$3$r(f,a9,0.9)
f=a9[a9.length/2|0]
m.$3(g,f,a7?"Hot hose":"Cold hose")
break
case"tail":case"trap":case"arm":d=f==="tail"
if(d)a0=B.a1H
else a0=f==="trap"?A.fDl():B.a2y
b1=p.$1(a0)
if(e){b3.b=a3
a0=d?B.kD:B.pm
b3.a5E(b1,0.66,a0,!1,!0,!0,d?0.85:0.3,12)}else o.$3$r(f,b1,0.78)
a0=J.a5(b1)
a0=a0.h(b1,a0.gM(b1)/2|0)
if(d)f="Tailpiece"
else f=f==="trap"?"P-trap":"Trap arm"
m.$3(g,a0,f)
break}}b6=new A.fng(l,b7,b3,b4)
b6.$4("trap",q.ad(0,B.a7U),B.fP,0)
b6.$4("arm",q.ad(0,B.a7W),B.iH,1)
return new A.xB(b2,b4,b5,B.vK,null)},
fV5(d,e,f,g,h,i){if(!g){i.$0()
return}d.b=e
d.e5(f.ad(0,B.fGI),f.ad(0,B.aS7),0.9,B.rY,0.8,12)
d.e5(f.ad(0,B.aS7),f.ad(0,B.fEa),0.45,B.rY,0.8,10)
d.e5(f.ad(0,B.aSd),f.ad(0,B.aSr),0.3,B.abt,0.7,8)
d.e5(f.ad(0,B.aSr),f.ad(0,B.fIY),1.2,h,0.5,12)},
i3p(a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=C.a([],x.z),e=new A.iK(f),d=a0.x
if(d.a===0)return f
w=a0.c
w===$&&C.c()
v=new A.fDa(w.a==="bathroom"?28:0,-30)
for(d=C.ec(d,d.r,C.a3(d).c),u=d.$ti.c,t=a0.e;d.C();){s=d.d
if(s==null)s=u.a(s)
r=v.$1(s)
q=D.d.iD(w.c,new A.fD9(s)).b==="valve"||!t.t(0,s)
s=r.a
p=r.b
o=r.c
n=0
for(;;){if(!(n<(q?10:5)))break
m=q?1.8:1.2
l=q?10:5
k=D.k.F(a1*m+n/l,1)
l=Math.sin(n*2.1)
m=q?3:0.6
j=q?4:-0.5
i=q?14:8
h=q?6:0.8
g=q?0.5:0.35
e.iR(new A.D(s+l*k*m,p+(k*j-k*k*i),o+(1.5+k*h)),g,B.KX,3,6,0.9);++n}}return f},
ng:function ng(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
Wa:function Wa(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cgh:function cgh(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.d=_.c=$
_.e=f
_.f=g
_.r=!0
_.w=0
_.x=h
_.y=!1},
cgl:function cgl(d){this.a=d},
cgm:function cgm(d){this.a=d},
cgi:function cgi(d){this.a=d},
cgn:function cgn(d){this.a=d},
cgo:function cgo(d){this.a=d},
cgp:function cgp(){},
cgq:function cgq(){},
cgj:function cgj(d){this.a=d},
cgk:function cgk(d){this.a=d},
fnk:function fnk(d){this.a=d},
fni:function fni(d){this.a=d},
fnc:function fnc(d,e){this.a=d
this.b=e},
fnf:function fnf(d){this.a=d},
fnd:function fnd(d,e){this.a=d
this.b=e},
fne:function fne(d){this.a=d},
fnj:function fnj(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fn9:function fn9(d,e,f){this.a=d
this.b=e
this.c=f},
fna:function fna(d,e,f){this.a=d
this.b=e
this.c=f},
fnb:function fnb(d,e,f){this.a=d
this.b=e
this.c=f},
fng:function fng(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fnh:function fnh(d){this.a=d},
fDa:function fDa(d,e){this.a=d
this.b=e},
fD9:function fD9(d){this.a=d},
Va:function Va(d,e){this.d=d
this.a=e},
aD0:function aD0(d,e){var _=this
_.e=_.d=$
_.f=d
_.r=$
_.w=e
_.x=""
_.y=0
_.z=null
_.as=_.Q=!1
_.c=_.a=_.at=null},
egu:function egu(d,e,f){this.a=d
this.b=e
this.c=f},
egv:function egv(d){this.a=d},
egt:function egt(d){this.a=d},
egn:function egn(d){this.a=d},
egw:function egw(d){this.a=d},
egf:function egf(d,e){this.a=d
this.b=e},
egg:function egg(d,e){this.a=d
this.b=e},
egh:function egh(d){this.a=d},
egm:function egm(d){this.a=d},
egk:function egk(d){this.a=d},
egl:function egl(d,e){this.a=d
this.b=e},
egs:function egs(d){this.a=d},
egj:function egj(d,e,f){this.a=d
this.b=e
this.c=f},
egi:function egi(d,e,f){this.a=d
this.b=e
this.c=f},
egx:function egx(d){this.a=d},
egB:function egB(d,e){this.a=d
this.b=e},
egz:function egz(){},
egy:function egy(d){this.a=d},
egA:function egA(d,e){this.a=d
this.b=e},
egr:function egr(d){this.a=d},
egp:function egp(d,e){this.a=d
this.b=e},
ego:function ego(d,e){this.a=d
this.b=e},
egq:function egq(d,e){this.a=d
this.b=e},
l2(d){return D.d.iD(B.tV,new A.fLq(d))},
fRo(d,e,f,g){var w=x.S,v=x.N
w=new A.b3K(g,f,C.T(w,v),C.aX(w),C.aX(w),C.T(w,x.cH),C.a([new A.WP(),new A.WP()],x.gD),C.T(w,x.m),C.aX(w),C.T(w,v),C.aX(w),C.a([],x.s))
w.cgA(d,e)
return w},
hDy(d){var w
A:{if("tv"===d){w="The TV"
break A}if("lamp"===d){w="The lamp"
break A}if("toaster"===d){w="The toaster"
break A}w="The hair dryer"
break A}return w},
yv:function yv(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fLq:function fLq(d){this.a=d},
pL:function pL(d,e,f){this.a=d
this.b=e
this.c=f},
WP:function WP(){var _=this
_.a=!1
_.b=0
_.c=!0
_.d=!1},
atY:function atY(d,e){var _=this
_.a=!1
_.b=d
_.c=e
_.e=_.d=!1},
aSp:function aSp(d,e){this.a=d
this.b=e
this.c=!1},
eF:function eF(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
b3K:function b3K(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
_.cy=o},
clf:function clf(){},
clm:function clm(d){this.a=d},
cln:function cln(d){this.a=d},
clo:function clo(d,e){this.a=d
this.b=e},
clp:function clp(d,e){this.a=d
this.b=e},
clr:function clr(d){this.a=d},
clq:function clq(d,e){this.a=d
this.b=e},
cle:function cle(d){this.a=d},
clc:function clc(){},
cld:function cld(d){this.a=d},
clk:function clk(){},
cll:function cll(){},
clg:function clg(){},
clh:function clh(d){this.a=d},
cli:function cli(d){this.a=d},
cls:function cls(d){this.a=d},
clj:function clj(d){this.a=d},
fQh(d,e,f){return new A.Vd(e,f,d,null)},
kY:function kY(d,e,f){this.a=d
this.b=e
this.c=f},
Vd:function Vd(d,e,f,g){var _=this
_.d=d
_.e=e
_.f=f
_.a=g},
aD7:function aD7(d,e,f){var _=this
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
ekR:function ekR(d,e,f){this.a=d
this.b=e
this.c=f},
ekS:function ekS(d){this.a=d},
ekQ:function ekQ(d){this.a=d},
ek5:function ek5(d){this.a=d},
ek6:function ek6(d){this.a=d},
ek4:function ek4(d){this.a=d},
ek7:function ek7(d){this.a=d},
ek8:function ek8(d){this.a=d},
ekg:function ekg(d){this.a=d},
ek9:function ek9(d){this.a=d},
eky:function eky(d,e){this.a=d
this.b=e},
ekh:function ekh(d){this.a=d},
ekN:function ekN(d){this.a=d},
ekO:function ekO(d){this.a=d},
ekP:function ekP(d,e){this.a=d
this.b=e},
ekL:function ekL(d){this.a=d},
ekM:function ekM(d,e){this.a=d
this.b=e},
ekK:function ekK(d){this.a=d},
ekG:function ekG(d){this.a=d},
ekH:function ekH(d,e,f){this.a=d
this.b=e
this.c=f},
ekI:function ekI(d){this.a=d},
ekJ:function ekJ(d,e,f){this.a=d
this.b=e
this.c=f},
ekT:function ekT(d,e){this.a=d
this.b=e},
ekf:function ekf(d){this.a=d},
ekd:function ekd(d){this.a=d},
eke:function eke(d,e){this.a=d
this.b=e},
ekc:function ekc(d){this.a=d},
eka:function eka(d){this.a=d},
ekb:function ekb(d,e){this.a=d
this.b=e},
eki:function eki(d,e){this.a=d
this.b=e},
ekw:function ekw(){},
ekx:function ekx(){},
ekj:function ekj(d){this.a=d},
ekk:function ekk(d){this.a=d},
ekl:function ekl(d){this.a=d},
eko:function eko(){},
ekp:function ekp(){},
ekq:function ekq(){},
ekr:function ekr(){},
eks:function eks(){},
ekt:function ekt(d){this.a=d},
eku:function eku(){},
ekv:function ekv(d){this.a=d},
ekm:function ekm(d){this.a=d},
ekn:function ekn(){},
el9:function el9(d,e){this.a=d
this.b=e},
elb:function elb(d){this.a=d},
ekY:function ekY(d){this.a=d},
ela:function ela(d){this.a=d},
el0:function el0(d){this.a=d},
el1:function el1(d,e){this.a=d
this.b=e},
el_:function el_(d,e){this.a=d
this.b=e},
el2:function el2(d,e){this.a=d
this.b=e},
ekZ:function ekZ(d,e){this.a=d
this.b=e},
elc:function elc(d,e){this.a=d
this.b=e},
ekX:function ekX(d,e){this.a=d
this.b=e},
eld:function eld(d){this.a=d},
ekW:function ekW(d){this.a=d},
ele:function ele(d,e){this.a=d
this.b=e},
ekV:function ekV(d,e){this.a=d
this.b=e},
elf:function elf(d){this.a=d},
elg:function elg(d){this.a=d},
elh:function elh(d,e,f){this.a=d
this.b=e
this.c=f},
ekU:function ekU(d,e,f){this.a=d
this.b=e
this.c=f},
el3:function el3(d){this.a=d},
el4:function el4(d,e){this.a=d
this.b=e},
el5:function el5(d){this.a=d},
el6:function el6(d){this.a=d},
el7:function el7(d){this.a=d},
el8:function el8(d){this.a=d},
ekF:function ekF(d){this.a=d},
ekE:function ekE(d){this.a=d},
ekB:function ekB(d,e){this.a=d
this.b=e},
ekz:function ekz(){},
ekA:function ekA(){},
ekC:function ekC(d,e){this.a=d
this.b=e},
ekD:function ekD(d,e){this.a=d
this.b=e},
a1T(d,e){var w=d.d,v=e.a,u=e.c,t=e.b,s=w.a,r=w.b
w=w.c
return d.c?new A.D(s+v,r-u,w+t):new A.D(s+v,r+t,w+u)},
fUo(d,e,f,g){var w,v,u,t,s,r=d.a,q=e.d,p=e.c?A.rO(r,1.5707963267948966,0,q):A.rO(r,0,0,q)
r=C.a([],x.z)
for(q=p.length,w=0;w<p.length;p.length===q||(0,C.L)(p),++w){v=p[w]
u=v.d
u=u===0?0:f.$1(u)
t=v.f
s=t<0.99?3:2
r.push(new A.mt(v.a,v.b,v.c,u,v.e,t,v.r,v.w,v.x,s,g))}q=C.T(x.S,x.q)
for(u=d.b,u=u.gdK(u),u=u.gae(u);u.C();){t=u.gS(u)
s=f.$1(t.a)
t=t.b
q.n(0,s,new A.d1(t.a,t.b,A.a1T(e,t.c),t.d))}return new C.y(r,q)},
hPh(a3,a4,a5,a6,a7,a8,a9,b0,b1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=x.i,a2=C.et([a4,a5],a1)
for(w=b1.length,v=0;v<b1.length;b1.length===w||(0,C.L)(b1),++v){u=b1[v].a
a2.K(0,D.k.D(u[0],a4,a5))
a2.K(0,D.k.D(u[1],a4,a5))}t=C.B(a2,a2.$ti.k("co.E"))
D.d.fi(t)
for(w=C.U(b1).k("a2<1>"),u=w.k("J.E"),s=0;r=s+1,r<t.length;s=r){q=t[s]
p=t[r]
o=p-q
if(o<0.01)continue
n=(q+p)/2
m=C.B(new C.a2(b1,new A.fgG(n),w),u)
l=C.et([a6,a7],a1)
for(k=m.length,v=0;v<m.length;m.length===k||(0,C.L)(m),++v){j=m[v].a
l.K(0,D.k.D(j[2],a6,a7))
l.K(0,D.k.D(j[3],a6,a7))}i=C.B(l,l.$ti.k("co.E"))
D.d.fi(i)
for(k=!(o>30),h=0;g=h+1,g<i.length;h=g){f=i[h]
e=i[g]
j=e-f
if(j<0.01)continue
d=(f+e)/2
if(D.d.b7(m,new A.fgH(d)))continue
a0=!k||j>60?2:1
a3.hX(new A.D(n,d,a8),new A.D(o,j,a9),b0,a0)}}},
Cr(d1,d2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1=null,c2=x.z,c3=C.a([],c2),c4=new A.iK(c3),c5=C.a([],x.h),c6=x.E,c7=C.a([],c6),c8=x.S,c9=C.T(c8,x.q),d0=$.jO=$.jO+1
c4.f=-1
c4.b=8001
c4.pl(B.fCr,B.fEO,B.Av,0.15,4)
c4.f=0
c4.hX(B.fC8,B.aRL,B.abp,3)
c4.bB(B.fI1,B.fJ4,B.px,0.5)
c4.bH(B.aRO,B.fC_,B.Ak)
c4.bH(B.aRO,B.fJf,B.Ak)
c4.hX(B.fEU,B.aRL,B.abp,3)
c4.bB(B.fC3,B.fEV,B.wL,0.15)
c4.bB(B.fFo,B.fEY,B.DT,0.8)
c4.b=0
c4.f=3
c4.d=d1.gym()?0.42:0.1
c4.hX(B.fAZ,B.fGC,d1.gym()?B.m9:B.b5p,3)
c4.d=1
c4.f=2
c4.b=8001
if(!d1.gym())for(w=0;w<10;++w)c4.aBM(new A.D(-72+w*16,51.3,55),B.fH4,B.m7,!1,0.05)
else{c4.x=d0
c4.bB(B.fFK,B.fDM,D.c,0.2)
c4.bB(B.fJQ,B.aRX,D.c,0.2)
c4.bB(B.fD7,B.aRX,D.c,0.2)}if(d1.gym()){c4.x=d0
c4.bB(B.fDf,B.fDQ,B.m9,0.2)}c4.x=0
c4.b=8001
c4.r=!0
c4.hX(B.fIU,B.fJs,B.bc5,2)
c4.bB(B.fI7,B.fBN,B.ado,0.1)
c4.bB(B.fI6,B.fBO,B.VN,0.1)
c4.bB(B.fHX,B.aRD,B.VN,0.1)
c4.bB(B.fAz,B.aRD,B.VN,0.1)
c4.r=!1
c9.n(0,8001,B.dXk)
c4.x=d0
c4.b=8002
c4.pl(B.fJD,B.aRG,B.m7,0.05,3)
c4.pl(B.fBh,B.aRG,B.m7,0.05,3)
c9.n(0,8002,B.dXM)
for(v=d1.y,w=0;u=$.Gr(),w<u.length;++w){t=1000+w
c4.b=t
c4.cCG(new A.D(u[w],0,-2.25),B.fGP,B.m7,!1,0.05,2)
s=v.t(0,w)?"This one has a hole for the cable.":"Tap it with the drill to put a hole through it."
c9.n(0,t,new A.d1("Wall stud","A 2x4 stud, one of the vertical posts in the wall. They stand 16 inches apart. "+s,new A.D(u[w],20,-2),60))
if(v.t(0,w)){c4.b=0
c4.e=0.6
c4.bH(new A.D(u[w],40,-2.25),B.fC6,B.ae5)
c4.e=0}}c4.b=8000
c4.bB(B.fAF,B.fzN,B.abL,0.5)
c4.e=0.4
c4.bH(B.fED,B.fIA,B.E1)
for(r=0;r<6;++r)for(v=19.5-r*3.6,q=0;q<2;++q)c4.bB(new A.D(61.6+q*4.8,v,0.5),B.fyo,B.af8,0.3)
p=d1.ax&&!d1.ay
v=p?0.6:0
if(d1.ay)u=D.cd
else u=p?D.bI:D.jt
c4.bB(new A.D(64,-2.5+v,0.9),B.fDI,u,0.4)
c4.e=0
if(d1.ay)v="The main breaker has TRIPPED (orange). Tap it to flip it fully OFF, fix the problem, then turn it ON."
else v=d1.ax?"The power is ON. Tap to turn it OFF. Always turn it OFF before you touch any wire.":"The power is OFF. Tap to turn it ON."
c9.n(0,8000,new A.d1("Breaker panel",v,B.fBP,60))
c4.b=8003
for(v=d1.z,u=C.ec(v,v.r,C.a3(v).c),t=x.o,s=u.$ti.c;u.C();){o=u.d
n=A.l2(o==null?s.a(o):o)
o=n.d
m=o.a-0.35
l=C.a([B.fHE,B.fFI,new A.D(m,40,-3.2)],t)
if(n.c)D.d.v(l,C.a([new A.D(m,51.4,-3.2),new A.D(m,51.4,o.c+11)],t))
else l.push(new A.D(m,o.b+11,-3.4))
c4.jV(A.Gj(l,3,6),0.2,B.Wn,!1,0.35,6)}c9.n(0,8003,B.dY9)
for(u=x.U,s=d1.Q,k=0;k<3;++k){j=B.o2[k]
i=s.h(0,j)
if(i==null||!i.a)continue
if(i.e)h=B.bht
else h=i.d?B.biR:B.big
o=C.a([],u)
for(m=i.b,l=C.a3(m),g=new C.mW(m,m.r,l.k("mW<1>")),g.c=m.e,l=l.c;g.C();){m=g.d
if(m==null)m=l.a(m)
o.push(new C.cH([A.l2(m).d.a-1.15,A.l2(m).d.a+1.15,A.l2(m).d.b-2,A.l2(m).d.b+2]))}m=6100+k
c4.b=m
A.hPh(c4,j,j+48,-47,47,-0.25,0.5,h,o)
o=i.e?"Painted and finished.":"A 4 by 8 foot sheet of drywall (gypsum between two layers of paper). It is screwed to the studs."
c9.n(0,m,new A.d1("Drywall sheet",o,new A.D(j+24,0,0),90))
c4.b=0
c4.e=0.3
for(o=i.c,m=C.a3(o),l=new C.mW(o,o.r,m.k("mW<1>")),l.c=o.e,m=m.c;l.C();){o=l.d
if(o==null)o=m.a(o)
f=D.o.an(o,10)
e=D.o.F(o,10)
c4.iR(new A.D($.Gr()[f],-40+e*16,0.1),0.34,B.E1,3,5,0.3)}c4.e=0}for(u=d2.a,o=u!=="tape",m=d1.as,l=u!=="mud",g=u==="sand",w=0;w<2;w=a1){d=-24+48*w
a0=s.h(0,B.o2[w])
a0=a0==null?c1:a0.a
a1=w+1
a2=s.h(0,B.o2[a1])
a2=a2==null?c1:a2.a
if(a0!==!0||a2!==!0)continue
a3=m[w]
a0=6200+w
c4.b=a0
if(a3.a&&!a3.d){a2=a3.b
if(a2===0)h=B.bhw
else h=a3.c?B.bdT:B.b9G
c4.e=0.5
c4.bH(new A.D(d,0,0.08+0.02*a2),new A.D(2.2+a2*1.4,94,0.12),h)
c4.e=0}else if(!o||!l||g){c4.d=0.45
c4.e=0.6
c4.bH(new A.D(d,0,0.12),B.fE_,D.b1)
c4.e=0
c4.d=1}if(a3.d)a2="Smooth and ready for paint."
else if(!a3.a)a2="The joint between two sheets. It needs tape and three coats of joint compound."
else{a2=a3.b
a4=a2===1?"":"s"
a4="Taped, with "+a2+" coat"+a4+" of mud."
a2=a4}c9.n(0,a0,new A.d1("Seam",a2,new A.D(d,0,0),70))}for(o=d2.b,m=d1.x,l=d1.at,g=x.N,a5=0;a5<7;++a5){n=B.tV[a5]
a0=n.a
a6=m.ai(0,a0)
a7=l.h(0,a0)
a8=o===a0&&a7!=null
if(!a6)continue
a2=n.c
if(a2)a9=n.e==="fan"?"fan":"light"
else{a4=a7==null?c1:a7.a
a9=a4==null?"outlet":a4}if(a8){b0=A.Ak(a7.a)
a0=a7.b
b1=A.fVc(b0,a0,!1)
b2=A.fUo(b1,n,new A.fno(n),d0)
D.d.v(c3,b2.a)
c9.v(0,b2.b)
if(a0.f&&a0.c===0){a0=C.a([],c6)
for(a2=b1.c,a4=a2.length,b3=0;b3<a2.length;a2.length===a4||(0,C.L)(a2),++b3){b4=a2[b3]
a0.push(new A.nc(A.a1T(n,b4.a),b4.b,b4.c))}D.d.v(c7,a0)}}else if(a7!=null&&a7.b.c>=2){a4=a7.a
b5=a7.b
b6=b5.w
b7=C.a([],c2)
b8=new A.iK(b7)
b9=new A.XG(C.T(c8,g))
b9.c=2
b9.w=b6
if(a4==="light"||a4==="fan")A.hbX(b8,a4,b9)
else{A.hbC(b8,a4,-0.25,b6,!0)
A.hdZ(b8,b6)}D.d.v(c3,A.fUo(new A.xB(b7,B.aCM,B.GS,B.vK,c1),n,new A.fnp(n),d0).a)
if(!a2){c4.f=3
c4.b=3000+a0
c4.e=0.4
c4.d=0.55
a2=n.d
b5=b5.w?D.ay:D.b8
c4.bH(new A.D(a2.a,a2.b,a2.c+0.2),B.fE3,b5)
c4.d=1
c4.f=2
c4.e=0}c9.n(0,3000+a0,new A.d1(A.hL9(a4),A.hL8(d1,a0),A.a1T(n,B.a7P),22))}else{a4=C.a([],c2)
A.haY(new A.iK(a4),a9,!1)
D.d.v(c3,A.fUo(new A.xB(a4,B.djU,B.GS,B.vK,c1),n,new A.fnq(n),d0).a)
a2=a2?"Ceiling box":"Electrical box"
a4=v.t(0,a0)?"The box is mounted and the cable is in. A device can be wired here.":"The box is mounted. Pull the cable to it."
c9.n(0,2000+a0,new A.d1(a2,a4,A.a1T(n,B.a7P),24))}}c4.x=0
c0=new A.fnt(c4)
if(u==="wall"||u==="ceiling"||u==="fanbox")for(a5=0;a5<7;++a5){n=B.tV[a5]
c2=n.a
if(m.ai(0,c2))continue
c6=n.c
c8=n.d
s=c8.a
o=c8.b
a0=c6?new A.D(s,o-1,c8.c):new A.D(s,o,1.5)
a2=c6?B.fCc:B.fDB
c0.$4$round(2000+c2,a0,a2,c6)
c2=c6?new A.D(s,o-8,c8.c):new A.D(s,o+7,3)
c7.push(new A.nc(c2,n.b,D.fb))}else if(u==="cable")for(a5=0;a5<7;++a5){n=B.tV[a5]
c2=n.a
if(!m.ai(0,c2)||v.t(0,c2))continue
c6=n.c
c8=n.d
s=c8.a
o=c8.b
c8=c6?new A.D(s,o-1,c8.c):new A.D(s,o,1.5)
s=c6?B.aRJ:B.fCt
c0.$5$col$round(2000+c2,c8,s,D.cj,c6)}else if(u==="knife")for(a5=0;a5<7;++a5){n=B.tV[a5]
if(n.c||!m.ai(0,n.a))continue
c2=n.d
c6=c2.a
i=d1.aon(c6)
if(i==null||i.b.t(0,n.a))continue
c0.$4$col(2000+n.a,new A.D(c6,c2.b,0.5),B.fDH,D.ct)}else if(u==="sheet")for(w=0;w<5;){j=B.a2v[w]
c0.$3(6000+w,new A.D(j,0,0.3),B.fGU);++w
c7.push(new A.nc(new A.D(j,50,1),"edge "+w,D.fb))}else if(u==="screw")for(a5=0;a5<3;++a5){j=B.o2[a5]
i=s.h(0,j)
if(i==null||!i.a)continue
for(c2=d1.aoG(j),c6=c2.length,c8=i.c,o=j+48,b3=0;b3<c2.length;c2.length===c6||(0,C.L)(c2),++b3){f=c2[b3]
for(a0=f*10,a2=7000+a0,r=0;r<6;++r){if(c8.t(0,a0+r))continue
c0.$3(a2+r,new A.D($.Gr()[f],-40+r*16,0.5),B.aRA)}a2=$.Gr()
if(f+1<a2.length&&a2[f]+16<=o)for(a0=7500+a0,r=0;r<6;r+=2)c0.$4$col(a0+r,new A.D(a2[f]+8,-40+r*16+8,0.5),B.aRA,D.dw)}}if(!C.et(["wall","ceiling","fanbox","cable","knife","sheet","screw",""],g).t(0,u))c2=D.d.t(B.GW,u)||C.et(["outlet","gfci","switch","light","fan"],g).t(0,u)
else c2=!1
if(c2)for(c2=d1.CW,a5=0;a5<7;++a5){n=B.tV[a5]
if(D.d.t(B.GW,u)){c6=n.a
a7=l.h(0,c6)
if(a7!=null){c8=a7.a
c8=(c8==="outlet"||c8==="gfci")&&a7.b.c>=2&&!c2.ai(0,c6)}else c8=!1
if(c8){c8=n.d
c0.$4$col(3000+c6,new A.D(c8.a,c8.b,1.2),B.fE4,D.b4)}}else{c6=n.a
if(m.ai(0,c6)&&v.t(0,c6)&&!l.ai(0,c6)){c8=n.c
s=n.d
o=s.a
g=s.b
s=c8?new A.D(o,g-1,s.c):new A.D(o,g,1.2)
o=c8?B.aRJ:B.fGN
c0.$4$round(2000+c6,s,o,c8)}}}c4.r=!0
for(c2=d1.CW,c6=new C.cK(c2,C.a3(c2).k("cK<1,2>")).gae(0);c6.C();){j=c6.d
c8=j.a
n=A.l2(c8)
v=c4.b=8100+c8
u=n.d
d=u.a
u=u.b
c4.jV(A.Gj(C.a([new A.D(d,u,2.5),new A.D(d,-46,3.5),new A.D(d,-46,22)],t),4,6),0.28,B.Wr,!1,0.2,6)
c4.bB(new A.D(d,u,1.6),B.fDd,B.b6T,0.3)
u=j.b
switch(u){case"tv":c4.bB(new A.D(d,-45,24),B.fBs,B.ads,0.2)
c4.bB(new A.D(d,-19,24),B.fCk,E.Ed,0.4)
if(c2.ai(0,c8))c8=d1.ax&&!d1.ay&&d1.a3e(c8)
else c8=!1
if(c8){c8=d-38.5
s=d+38.5
c5.push(new A.IQ(C.a([new A.D(c8,1.5,25.7),new A.D(s,1.5,25.7),new A.D(s,-39.5,25.7),new A.D(c8,-39.5,25.7)],t),v,new A.fnr(j),320,180,9,2,0))}break
case"lamp":c4.e5(new A.D(d,-47.5,24),new A.D(d,-46.5,24),6,B.Vt,0.4,14)
c4.e5(new A.D(d,-46.5,24),new A.D(d,-22,24),1,B.Av,0.5,8)
c4.yk(new A.D(d,-26,24),new A.D(d,-12,24),9,X.Wz,!1,!0,5.5,0.2,16)
break
case"toaster":c4.bB(new A.D(d,-42.5,24),B.fA2,B.kD,0.8)
c4.bH(new A.D(d,-38,24),B.fHD,B.aeD)
break
default:c4.bB(new A.D(d,-43.5,24),B.fAo,B.ads,0.2)
c4.Kn(new A.D(d-6,-38,24),new A.D(d+8,-38,24),3.4,B.KL,3,0.6,12)
c4.ajj(new A.D(d-8,-43,24),B.fAa,B.KL,0.6,0)}c8=A.hJj(u)
s="Plugged into "+n.b
u=u==="tv"?s+". Tap it to watch NGMY ads full screen. Use the Unplug tool to unplug it.":s+". Tap it to unplug."
c9.n(0,v,new A.d1(c8,u,new A.D(d,-35,20),60))}c4.r=!1
for(a5=0;a5<7;++a5){n=B.tV[a5]
c9.cg(0,2000+n.a,new A.fns(n))}return new A.xB(c3,c9,c7,c5,c1)},
hL9(d){var w
A:{if("gfci"===d){w="GFCI outlet"
break A}if("switch"===d){w="Light switch"
break A}if("light"===d){w="Ceiling light"
break A}if("fan"===d){w="Ceiling fan"
break A}w="Outlet"
break A}return w},
hJj(d){var w
A:{if("tv"===d){w="TV"
break A}if("lamp"===d){w="Lamp"
break A}if("toaster"===d){w="Toaster"
break A}w="Hair dryer"
break A}return w},
hL8(d,e){var w,v=d.at.h(0,e)
if(v==null)return""
if(v.b.w)return"BURNT. It was wired wrong and it burnt out. Pull it out and put in a new one."
w=v.a
if(w==="switch")return d.ch.t(0,e)?"The switch is ON. Tap to turn it off.":"The switch is OFF. Tap to flip it on."
if(w==="light"||w==="fan")return d.alF(e)?"It is running.":"It is off. Flip its switch (breaker on)."
w=d.CW.h(0,e)
return"Tap with a TV, lamp, toaster or hair dryer in your hand to plug it in. Plugged: "+(w==null?"nothing":w)+"."},
i3E(a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=C.a([],x.z),a0=new A.iK(d)
for(w=D.d.gae(B.tV),v=new C.fh(w,new A.fDu()),u=a1.at,t=a2*7;v.C();){s=w.gS(0)
r=s.a
q=u.h(0,r)
if(q==null||q.b.c<1)continue
p=a1.alF(r)?t:0.4
a0.b=3000+r
s=s.d
r=s.a
o=s.b-6.6
s=s.c
for(n=0;n<4;++n){m=p+n*3.141592653589793/2
l=A.bBX(B.fzL,m)
a0.ajj(new A.D(r+l.a,o+l.b,s+l.c),B.fJj,B.b7T,0.3,m)}}w=a1.d
w===$&&C.c()
w=D.d.gae(w)
v=new C.fh(w,new A.fDv())
u=a2*5
while(v.C()){s=w.gS(0).a
if(a1.alF(s)){k=A.l2(s)
a0.b=0
a0.d=0.25+0.05*Math.sin(u)
s=k.d
a0.iR(new A.D(s.a,s.b-5,s.c),11,B.VR,4,10,0)
a0.d=1}}for(w=a1.CW,v=new C.cK(w,C.a3(w).k("cK<1,2>")).gae(0),u=a2*1.6,s=a2*6;v.C();){j=v.d
r=j.a
if(w.ai(0,r))o=a1.ax&&!a1.ay&&a1.a3e(r)
else o=!1
if(!o)continue
i=A.l2(r).d.a
a0.b=8100+r
switch(j.b){case"tv":break
case"lamp":a0.b=0
a0.d=0.3+0.05*Math.sin(s)
a0.iR(new A.D(i,-19,24),11,T.Vv,4,10,0)
a0.d=1
break
case"toaster":a0.e=0.8
r=C.aq(B.ad_,T.WD,(Math.sin(s)+1)/2)
r.toString
a0.bH(new A.D(i,-38.2,24),new A.D(13,0.3,6),r)
a0.e=0
break
default:for(r=i+9,h=0;h<6;++h)a0.iR(new A.D(r+D.k.F(u+h/6,1)*22,-38+Math.sin(h*2)*2,24),0.6,B.bee,3,5,0.2)}}for(w=new C.cK(a3,C.a3(a3).k("cK<1,2>")).gae(0),v=a2*0.7,u=a2*2.2;w.C();){j=w.d
s=j.b
if(a2>s)continue
k=A.l2(j.a)
g=D.k.D(s-a2,0,3)
a0.b=0
for(h=0;h<14;++h){f=D.k.F(u+h*0.137,1)
m=h*2.4+t
e=A.a1T(k,new A.D(Math.cos(m)*f*7,Math.sin(m)*f*7-f*f*6,3+f*4))
s=D.k.D(g,0.3,1)
r=C.aq(E.WP,E.WU,1-f)
r.toString
a0.iR(e,0.35*s,r,3,5,0)}a0.d=0.35
for(h=0;h<5;++h){f=D.k.F(v+h*0.2,1)
s=f*3
a0.iR(A.a1T(k,new A.D(Math.sin(h*1.7)*2,f*10,5+s)),1.2+s,B.bjD,3,6,0)}a0.d=1}return d},
vV:function vV(d,e,f){this.a=d
this.b=e
this.c=f},
fgG:function fgG(d){this.a=d},
fgH:function fgH(d){this.a=d},
fno:function fno(d){this.a=d},
fnp:function fnp(d){this.a=d},
fnq:function fnq(d){this.a=d},
fnt:function fnt(d){this.a=d},
fnr:function fnr(d){this.a=d},
fns:function fns(d){this.a=d},
fDu:function fDu(){},
fDv:function fDv(){},
h7D(d,e){var w=new A.coA(e,d,A.h15())
w.bwq(4,d,e)
return w},
qY:function qY(d,e){this.a=d
this.b=e},
u4:function u4(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
LC:function LC(d,e){this.a=d
this.b=e
this.c=!1},
coA:function coA(d,e,f){var _=this
_.a=d
_.b=e
_.c=$
_.d=f
_.e=3
_.r=_.f=0
_.w=!1},
coF:function coF(d){this.a=d},
coB:function coB(){},
coD:function coD(){},
coE:function coE(){},
coC:function coC(d){this.a=d},
aq3:function aq3(d,e){this.d=d
this.a=e},
aDb:function aDb(d,e){var _=this
_.e=_.d=$
_.f=d
_.r=$
_.w=e
_.x="inspect"
_.y=0
_.z=null
_.at=_.as=_.Q=!1
_.c=_.a=_.ax=null},
emE:function emE(d,e,f){this.a=d
this.b=e
this.c=f},
emF:function emF(d){this.a=d},
emD:function emD(d){this.a=d},
emt:function emt(d){this.a=d},
emy:function emy(d){this.a=d},
emz:function emz(d){this.a=d},
emx:function emx(d){this.a=d},
emA:function emA(d,e){this.a=d
this.b=e},
emB:function emB(d){this.a=d},
emC:function emC(d){this.a=d},
emw:function emw(d){this.a=d},
emv:function emv(d,e){this.a=d
this.b=e},
ems:function ems(d){this.a=d},
emq:function emq(d){this.a=d},
emr:function emr(d,e){this.a=d
this.b=e},
emu:function emu(d){this.a=d},
emR:function emR(d,e){this.a=d
this.b=e},
emN:function emN(){},
emM:function emM(d){this.a=d},
emO:function emO(){},
emP:function emP(){},
emQ:function emQ(d,e){this.a=d
this.b=e},
emL:function emL(d,e){this.a=d
this.b=e},
emK:function emK(d){this.a=d},
emJ:function emJ(d){this.a=d},
emH:function emH(d,e){this.a=d
this.b=e},
emG:function emG(){},
emI:function emI(d,e){this.a=d
this.b=e},
cfP(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){return new A.a84(o,r,t,s,q,g,n,m,l,h,p,i,f,j,d,e,k)},
i38(d){var w,v,u,t,s,r,q,p,o,n,m=d.gfq(0),l=C.a([],x.T)
for(w=d.x,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u){t=w[u]
s=t.b
if(s==="rug")continue
s=B.lT.h(0,s)
s.toString
r=(t.e&1)===1
q=r?s.d:s.c
p=r?s.c:s.d
s=t.c
r=q/2
o=t.d
n=p/2
l.push(new A.qj(s-r,s+r,o-n,o+n))}switch(d.c){case"kitchen":w=-m/2
l.push(new A.qj(w,w+28,0,28))
l.push(new A.qj(10,m/2,0,28))
break
case"bathroom":l.push(B.dkV)
l.push(B.dkN)
w=-m/2
l.push(new A.qj(w,w+33,0,75))
break}return l},
bpj(d,e,f,g,h,i,j,k,l,m,n,o){var w=new A.bpi(d,i,m,o,n,l,g,f,k,j,e,h,C.a([],x.n))
w.bwF(d,e,f,g,h,i,j,k,l,m,n,o)
return w},
hbF(d,e){var w,v,u,t=d.w,s=D.d.bd(t,new A.f9X(e))
if(s<0)s=0
w=t[s]
v=d.gfq(0)
u=d.gjm(0)
t=w.c
switch(w.b){case"left":return new C.bt(new C.y(-v/2+18,D.k.D(t+u/2-40,10,u-10)),1.5707963267948966,s)
case"right":return new C.bt(new C.y(v/2-18,D.k.D(t+u/2-40,10,u-10)),-1.5707963267948966,s)
default:return new C.bt(new C.y(D.o.D(t,-v/2+12,v/2-12),18),0,s)}},
a84:function a84(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){var _=this
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
_.ch=t},
uA:function uA(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
a8O:function a8O(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.x=k
_.y=l},
qj:function qj(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
clb:function clb(d,e){var _=this
_.a=d
_.b=e
_.d=_.c=$},
zX:function zX(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
bpi:function bpi(d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
f9X:function f9X(d){this.a=d},
aU3:function aU3(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=$},
bPP:function bPP(d,e){this.a=d
this.b=e},
bPQ:function bPQ(d){this.a=d},
i39(d,e){var w,v,u,t,s,r,q,p,o,n,m=C.a([B.dkU],x.T)
for(w=d.x,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u){t=w[u]
if(t.a===e)continue
s=t.b
if(D.d.t(B.awl,s)||D.d.t(B.Pq,s)||s==="bush")continue
r=B.lT.h(0,s)
r.toString
q=(t.e&1)===1
p=q?r.d:r.c
o=q?r.c:r.d
if(s==="tree"||s==="pine"){p=10
o=10}s=t.c
r=p/2
q=t.d
n=o/2
m.push(new A.qj(s-r,s+r,q-n,q+n))}return m},
h8R(d,e,f){var w=new A.b7b(d,-d.gfq(0)/2+10,d.gfq(0)/2-10,-300,d.gjm(0)-10,e,f,0,B.d2V)
w.TF(0)
return w},
b7b:function b7b(d,e,f,g,h,i,j,k,l){var _=this
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
_.CW=null}},B,H,E,A7,I,X,R,S,A8,A9
J=c[1]
C=c[0]
D=c[2]
Y=c[81]
F=c[89]
Z=c[112]
N=c[96]
T=c[116]
A_=c[111]
U=c[113]
L=c[101]
A0=c[105]
O=c[84]
G=c[106]
A1=c[100]
A2=c[109]
V=c[108]
W=c[110]
P=c[102]
A3=c[94]
A4=c[115]
Q=c[91]
K=c[95]
A5=c[107]
A6=c[90]
M=c[92]
A=a.updateHolder(c[24],A)
B=c[88]
H=c[26]
E=c[93]
A7=c[61]
I=c[103]
X=c[114]
R=c[99]
S=c[98]
A8=c[97]
A9=c[104]
A.D.prototype={
ad(d,e){return new A.D(this.a+e.a,this.b+e.b,this.c+e.c)},
aC(d,e){return new A.D(this.a-e.a,this.b-e.b,this.c-e.c)},
aF(d,e){return new A.D(this.a*e,this.b*e,this.c*e)},
Km(d){var w=this.b,v=d.c,u=this.c,t=d.b,s=d.a,r=this.a
return new A.D(w*v-u*t,u*s-r*v,r*t-w*s)},
gTf(){var w=this.a,v=this.b,u=this.c
return Math.sqrt(w*w+v*v+u*u)},
goy(d){var w=this,v=w.gTf()
return v<1e-9?w:new A.D(w.a/v,w.b/v,w.c/v)}}
A.mt.prototype={}
A.d1.prototype={}
A.nc.prototype={}
A.xB.prototype={}
A.IQ.prototype={}
A.iK.prototype={
Vv(){var w=this.x
if(!(w!==0))if(this.r){w=$.jO+1
$.jO=w}else w=0
this.w=w},
bfT(d,e,f,g,h,i,j,k){var w=this,v=i.goy(0)
w.a.push(new A.mt(C.a([d,e,f,g],x.o),v,h,w.b,j,w.d,k,w.c,w.e,w.f,w.w))},
bfS(d,e,f,g,h,i,j){return this.bfT(d,e,f,g,h,i,0,j)},
cQU(d,e,f,g,h,i,j){return this.bfT(d,e,f,g,h,i,j,!1)},
a5C(d,e,f,g,h,i){var w=this,v=(h==null?e.aC(0,d).Km(f.aC(0,d)):h).goy(0)
w.a.push(new A.mt(C.a([d,e,f],x.o),v,g,w.b,0,w.d,i,w.c,w.e,w.f,w.w))},
bh_(d,e,f,g){return this.a5C(d,e,f,g,null,!0)},
K3(d,e,f,g,h,i,j){var w,v,u,t,s,r,q,p,o,n,m
this.Vv()
w=e.a/2
v=e.b/2
u=e.c/2
t=new A.bVA(this,i,new A.bVB(j,d),new A.bVC(j),f,h)
s=-w
r=-v
q=2*w
p=2*v
t.$4(new A.D(0,0,1),new A.D(s,r,u),new A.D(q,0,0),new A.D(0,p,0))
o=-u
t.$4(new A.D(0,0,-1),new A.D(w,r,o),new A.D(-2*w,0,0),new A.D(0,p,0))
n=-2*u
t.$4(new A.D(1,0,0),new A.D(w,r,u),new A.D(0,0,n),new A.D(0,p,0))
m=2*u
t.$4(new A.D(-1,0,0),new A.D(s,r,o),new A.D(0,0,m),new A.D(0,p,0))
if(g){t.$4(new A.D(0,1,0),new A.D(s,v,u),new A.D(q,0,0),new A.D(0,0,n))
t.$4(new A.D(0,-1,0),new A.D(s,r,o),new A.D(q,0,0),new A.D(0,0,m))}},
hX(d,e,f,g){return this.K3(d,e,f,!0,0,g,0)},
aBM(d,e,f,g,h){return this.K3(d,e,f,g,h,1,0)},
pl(d,e,f,g,h){return this.K3(d,e,f,!0,g,h,0)},
bB(d,e,f,g){return this.K3(d,e,f,!0,g,1,0)},
bH(d,e,f){return this.K3(d,e,f,!0,0,1,0)},
ajj(d,e,f,g,h){return this.K3(d,e,f,!0,g,1,h)},
cCG(d,e,f,g,h,i){return this.K3(d,e,f,g,h,i,0)},
yk(b3,b4,b5,b6,b7,b8,b9,c0,c1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2=this
b2.Vv()
w=b4.aC(0,b3).goy(0)
v=w.b
u=w.Km(Math.abs(v)<0.9?B.fP:B.iH).goy(0)
t=w.Km(u).goy(0)
s=b9<0?b5:b9
r=new A.bVD(u,c1,t)
for(q=b2.a,p=b3.a,o=b3.b,n=b3.c,m=b4.a,l=b4.b,k=b4.c,j=x.o,i=w.a*-1,v*=-1,h=w.c*-1,g=0;g<c1;){f=r.$1(g);++g
e=r.$1(g)
d=f.a
a0=e.a
a1=f.b
a2=e.b
a3=f.c
a4=e.c
a5=new A.D(d+a0,a1+a2,a3+a4).goy(0)
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
q.push(new A.mt(C.a([new A.D(a6,a7,a8),new A.D(a9,b0,b1),new A.D(a0,a2,a4),new A.D(d,a1,a3)],j),a5,b6,b2.b,c0,b2.d,b8,b2.c,b2.e,b2.f,b2.w))
if(b7){q.push(new A.mt(C.a([b3,new A.D(a9,b0,b1),new A.D(a6,a7,a8)],j),new A.D(i,v,h),b6,b2.b,c0,b2.d,!1,b2.c,b2.e,b2.f,b2.w))
q.push(new A.mt(C.a([b4,new A.D(d,a1,a3),new A.D(a0,a2,a4)],j),w,b6,b2.b,c0,b2.d,!1,b2.c,b2.e,b2.f,b2.w))}}},
e5(d,e,f,g,h,i){return this.yk(d,e,f,g,!0,!1,-1,h,i)},
Kn(d,e,f,g,h,i,j){return this.yk(d,e,f,g,!0,!1,h,i,j)},
a32(d,e,f,g,h,i,j,k){return this.yk(d,e,f,g,h,i,-1,j,k)},
h7(d,e,f,g,h){return this.yk(d,e,f,g,!0,!1,-1,0,h)},
baS(d,e,f,g,h,i,j){return this.yk(d,e,f,g,h,!1,-1,i,j)},
baQ(d,e,f,g,h,i){return this.yk(d,e,f,g,h,!1,-1,0,i)},
ak5(d,e,f,g,h,i){return this.yk(d,e,f,g,!0,!1,h,0,i)},
baR(d,e,f,g,h,i,j){return this.yk(d,e,f,g,h,!1,i,0,j)},
iR(a7,a8,a9,b0,b1,b2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6=this
a6.Vv()
w=new A.bVz(b0,b1)
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
v.push(new A.mt(C.a([new A.D(u+i*a8,t+h*a8,s+g*a8),new A.D(u+f*a8,t+e*a8,s+d*a8),new A.D(u+a0*a8,t+a1*a8,s+a2*a8),new A.D(u+a3*a8,t+a4*a8,s+a5*a8)],r),new A.D(i+f+a0+a3,h+e+a1+a4,g+d+a2+a5).goy(0),a9,a6.b,b2,a6.d,!1,a6.c,a6.e,a6.f,a6.w))}},
b8V(d,e,f,g){return this.iR(d,e,f,6,10,g)},
i4(d,e,f,g,h){return this.iR(d,e,f,g,h,0.4)},
a5E(d,e,f,g,h,i,j,k){var w,v,u,t,s
this.Vv()
for(w=0;v=w+1,v<d.length;w=v){u=d[v]
t=d[w]
if(new A.D(u.a-t.a,u.b-t.b,u.c-t.c).gTf()<0.000001)continue
u=d[w]
t=d[v]
if(g)s=w===0||w===d.length-2
else s=!1
this.a32(u,t,e,f,s,h,j,k)}if(i)for(u=e*0.98,w=1;v=w+1,v<d.length;w=v)this.iR(d[w],u,f,4,k,j)},
jV(d,e,f,g,h,i){return this.a5E(d,e,f,!0,!1,g,h,i)},
aHi(d,e,f,g,h,i,j){return this.a5E(d,e,f,g,!1,h,i,j)},
bh1(d,e,f,g,h){return this.a5E(d,e,f,!0,!1,!0,g,h)},
yY(a4,a5,a6,a7,a8,a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=this
a3.Vv()
a3.baS(a4,a5,a6,a8,!1,a9,b0)
w=a5.aC(0,a4).goy(0)
v=w.Km(Math.abs(w.b)<0.9?B.fP:B.iH).goy(0)
u=new A.bVE(v,b0,w.Km(v).goy(0))
for(t=[new C.y(a4,w.aF(0,-1)),new C.y(a5,w)],s=a3.a,r=x.o,q=0;q<2;++q){p=t[q]
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
s.push(new A.mt(C.a([new A.D(p+i*a7,m+h*a7,l+j*a7),new A.D(p+f*a6,m+e*a6,l+g*a6),new A.D(p+a0*a6,m+a1*a6,l+d*a6),new A.D(p+a2.a*a7,m+a2.b*a7,l+a2.c*a7)],r),n,a8,a3.b,a9,a3.d,!1,a3.c,a3.e,a3.f,a3.w))}}},
cSi(d,e,f,g,h,i){return this.yY(d,e,f,g,h,i,16)}}
A.AG.prototype={
Cn(d){var w,v,u,t=this
t.z=d
if(!d){w=t.a
v=t.x
u=t.y
t.a=D.k.D(w,v-u,v+u)}t.aZ()},
lW(d,e,f,g){var w=this
w.Q=f
w.as=d
w.at=g
w.ax=e
w.aZ()},
zg(d,e){return this.lW(d,null,e,null)},
ao2(d){return this.lW(null,null,d,null)},
aH5(d){var w,v,u,t=this
if(!(t.Q!=null||t.as!=null||t.at!=null||t.ax!=null))return
w=1-Math.exp(-d*7)
v=t.Q
if(v!=null){u=A.uU(t.d,v,w)
t.d=u
if(u.aC(0,v).gTf()<0.02){v=t.Q
v.toString
t.d=v
t.Q=null}}v=t.as
if(v!=null){u=t.c
u+=(v-u)*w
t.c=u
if(Math.abs(u-v)<0.05){t.c=v
t.as=null}}v=t.at
if(v!=null){u=t.a
u+=(v-u)*w
t.a=u
if(Math.abs(u-v)<0.003){t.a=v
t.at=null}}v=t.ax
if(v!=null){u=t.b
u+=(v-u)*w
t.b=u
if(Math.abs(u-v)<0.003){t.b=v
t.ax=null}}t.aZ()},
cJi(d,e){var w,v,u,t,s=this,r=e.a,q=e.b,p=Math.min(r,q)*1.15,o=Math.cos(s.a),n=Math.sin(s.a)
q=new A.bGq(s,new A.bGr(Math.cos(s.b),Math.sin(s.b),o,n),(d.a-r/2)/p,-(d.b-q/2)/p)
w=q.$1(0)
r=q.$1(1).b
v=w.b
u=r-v
if(Math.abs(u)<1e-9)return null
t=(0-v)/u
if(t<=0)return null
return q.$1(t)},
anE(d){var w=this
w.as=null
w.c=D.k.D(w.c*d,w.e,w.f)
w.aZ()}}
A.bPH.prototype={
cQ8(d){var w,v,u,t
for(w=this.a,v=w.length-1,u=d.a,t=d.b;v>=0;--v)if(w[v].a.gbK().a.contains(u,t))return w[v].b
return 0}}
A.b3X.prototype={
gana(d){var w=this.r.a
return w==null?0:w},
cdn(b1,b2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=null,a8=b2.a,a9=b2.b,b0=new C.a9(0,0,0+a8,0+a9)
$.W()
w=C.M()
w.saq(B.bTI.av(0,b0))
b1.aX(b0,w)
v=this.c.a*90
w=b1.a
J.by(w.save())
w.translate(a8*0.45-v,a9*0.3)
b1.iX(0,-0.45)
for(u=x.O,t=0;t<3;++t){s=C.cm(D.J,a9*(0.2-t*0.05),a8*(1.9-t*0.4))
r=[B.b9g,D.aS,D.qI][t]
q=new C.as(D.X,D.V,D.a_,D.a0,D.Z)
q.saq(new C.bS(D.A,0.5,D.x,a7,0,C.a([r.j(0.3-t*0.07),r.j(0)],u),a7,a7).av(0,s))
p=q.H()
w.drawOval(C.c0(s),p)
p.delete()}w.restore()
o=new C.eJ()
o.dB(11)
n=C.M()
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
i=new C.u(l,j)
h=Math.min(a8,a9)*0.12
g=h*1.5
f=$.W()
e=C.M()
e.saq(new C.bS(D.A,0.5,D.x,a7,0,C.a([D.aS.j(0.28),B.bf4],u),a7,a7).av(0,C.bT(i,g)))
b1.af(i,g,e)
J.by(w.save())
f=new C.aO(f.r,D.ap,a7,a7,C.a([],x.v))
f.E(new C.kf(C.bT(i,h)))
b1.qh(0,f)
f=C.M()
f.saq(B.eba.av(0,C.bT(i,h)))
b1.af(i,h,f)
d=C.M()
d.r=B.b9A.gp(0)
for(a0=0;a0<4;++a0){u=B.cPe[a0].a
a1=u[0]
a2=u[1]
a3=u[2]
a4=u[3]
u=q.a
u=C.cm(new C.u(l+(a1*h+Math.sin((u==null?0:u)*0.05)*h*0.08),j+a2*h),a4*h*2,a3*h*2)
p=d.H()
w.drawOval(C.c0(u),p)
p.delete()}$.W()
a5=C.M()
a5.r=D.c.j(0.55).gp(0)
for(u=h*0.16,a0=0;a0<3;++a0){q=B.cMo[a0]
q=C.cm(new C.u(l+q.a*h,j+q.b*h),u,q.c*h*2)
p=a5.H()
w.drawOval(C.c0(q),p)
p.delete()}u=i.ad(0,new C.u(h*0.45,h*0.35))
$.W()
q=C.M()
q.r=D.w.j(0.38).gp(0)
b1.af(u,h,q)
w.restore()
a6=new C.u(a8*0.18-v*0.2,a9*0.12)
w=C.M()
w.r=B.baz.gp(0)
b1.af(a6,h*0.28,w)
w=h*0.05
q=a6.ad(0,new C.u(h*0.08,w))
u=C.M()
u.r=B.acu.gp(0)
b1.af(q,h*0.07,u)
u=-h
u=a6.ad(0,new C.u(u*0.1,u*0.09))
q=C.M()
q.r=B.acu.gp(0)
b1.af(u,w,q)},
a5(f4,f5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6,d7,d8,d9,e0,e1,e2,e3,e4,e5,e6,e7,e8,e9,f0,f1,f2=this,f3=null
if(f2.y)f2.cdn(f4,f5)
else{w=0+f5.a
v=0+f5.b
$.W()
u=C.M()
t=f2.x
s=C.aq(t,D.c,0.06)
s.toString
u.saq(new C.a8(D.b0,D.b6,D.x,C.a([s,t],x.O),f3,f3).av(0,new C.a9(0,0,w,v)))
f4.aX(new C.a9(0,0,w,v),u)}r=f5.a
q=f5.b
p=Math.min(r,q)*1.15
o=r/2
n=q/2
w=f2.c
m=Math.cos(w.a)
l=Math.sin(w.a)
k=Math.cos(w.b)
j=new A.cm9(m,l,k,Math.sin(w.b))
i=new A.cma(f2,j)
v=f2.b
h=v.e
if(h!=null){u=w.d
w=w.c*k
g=u.a-w*l
t=h.a
f=g<t[0]-1||g>t[1]+1||u.c+w*m<t[2]-1}else f=!1
e=B.fFu.goy(0)
d=e.ad(0,B.wg).goy(0)
a0=C.a([],x.bl)
w=f2.w
a1=v.a
if(!(w==null)){u=C.B(a1,x.fX)
D.d.v(u,w.$1(f2.gana(0)))
a1=u}for(w=a1.length,u=f2.e,t=x.v,s=u!==0,a2=e.a,a3=e.b,a4=e.c,a5=x.o,a6=f2.f,a7=a6!=null,a8=d.a,a9=d.b,b0=d.c,b1=f2.r,b2=0;b2<a1.length;a1.length===w||(0,C.L)(a1),++b2){b3=a1[b2]
if(a7&&!a6.$1(b3.w))continue
b4=C.a([],a5)
for(b5=b3.a,b6=b5.length,b7=0;b7<b5.length;b5.length===b6||(0,C.L)(b5),++b7)b4.push(i.$1(b5[b7]))
b8=A.hKs(b4)
b4=b8.length
if(b4<3)continue
for(b9=0,c0=B.fC,b7=0;b7<b4;++b7){c1=b8[b7]
b5=c1.c
b9+=b5
c0=new A.D(c0.a+c1.a,c0.b+c1.b,c0.c+b5)}b4=1/b4
c2=j.$1(b3.b)
b5=c2.a
b6=c2.b
c3=c2.c
if(b5*(c0.a*b4)+b6*(c0.b*b4)+c3*(c0.c*b4)>0){if(!b3.r)continue
c2=new A.D(b5*-1,b6*-1,c3*-1)}b4=c2.a
b5=c2.b
b6=c2.c
c4=0.56+0.58*Math.max(0,b4*a2+b5*a3+b6*a4)
c3=b3.e
c5=c3>0?Math.pow(Math.max(0,b4*a8+b5*a9+b6*b0),28)*c3:0
c6=b3.c
if(s&&b3.d===u){b4=b1.a
b4=C.aq(c6,D.b1,0.28+0.14*Math.sin((b4==null?0:b4)*6))
b4.toString
c4+=0.12
c6=b4}b4=255*c5*0.55
c7=D.k.V(D.k.D(c6.gb4(c6)*255*c4+b4,0,255))
c8=D.k.V(D.k.D(c6.gbb()*255*c4+b4,0,255))
c9=D.k.V(D.k.D(c6.gba(c6)*255*c4+b4,0,255))
b4=$.W()
b5=C.a([],t)
d0=new C.aO(b4.r,D.ap,f3,f3,b5)
for(d1=0;d1<b8.length;++d1){c1=b8[d1]
b4=c1.c
d2=o+c1.a*p/b4
d3=n-c1.b*p/b4
if(d1===0){b4=new C.b5(d2,d3)
b5.push(b4)
b6=d0.f
if(b6!=null)b4.bx(b6)
b4=d0.e
if(b4!=null)b4.a.delete()
d0.e=null}else{b4=new C.ap(d2,d3)
b5.push(b4)
b6=d0.f
if(b6!=null)b4.bx(b6)
b4=d0.e
if(b4!=null)b4.a.delete()
d0.e=null}}b4=new C.bF()
b5.push(b4)
b5=d0.f
if(b5!=null)b4.bx(b5)
b4=d0.e
if(b4!=null)b4.a.delete()
d0.e=null
b4=b3.f
b5=b8.length
b6=b3.d
c3=b6===u&&s
d4=f&&b3.y===0?3:b3.y
a0.push(new A.zV(d4,b3.z,f3,d0,new C.w(b4,(c7&255)/255,(c8&255)/255,(c9&255)/255,D.t),b9/b5-b3.x,b6,b4<0.99,c3))}for(w=v.d,u=w.length,a2=x.dx,a3=x.dN,a4=x.gp,b2=0;b2<w.length;w.length===u||(0,C.L)(w),++b2){d5=w[b2]
a6=C.a([],a5)
for(a7=d5.a,b7=0;b7<4;++b7)a6.push(i.$1(a7[b7]))
a8=a6[0]
a9=a6[1]
b0=a6[2]
b1=a6[3]
b4=(a8.c+a9.c+b0.c+b1.c)*0.25
b5=a7[3]
b6=a7[0]
c3=b6.a
d4=b6.b
b6=b6.c
a7=a7[1]
c2=j.$1(new A.D(b5.a-c3,b5.b-d4,b5.c-b6).Km(new A.D(a7.a-c3,a7.b-d4,a7.c-b6)))
if(c2.a*((a8.a+a9.a+b0.a+b1.a)*0.25)+c2.b*((a8.b+a9.b+b0.b+b1.b)*0.25)+c2.c*b4>0)continue
if(D.d.da(a6,new A.cm3())){a7=C.a([],a3)
for(a8=a6.length,b7=0;b7<a6.length;a6.length===a8||(0,C.L)(a6),++b7){c1=a6[b7]
a9=c1.c
a7.push(new C.u(o+c1.a*p/a9,n-c1.b*p/a9))}a6=$.W()
a8=C.a([],t)
a9=C.B(a7,a2)
a8.push(new C.KX(a9,!0))
a0.push(new A.zV(d5.r,d5.w,new A.cm4(f2,d5,a7),new C.aO(a6.r,D.ap,f3,f3,a8),D.K,b4-d5.f,d5.b,!1,!1))
continue}d6=new A.cm2(a6)
d7=C.a([],a4)
a6=$.W()
a7=C.a([],t)
d0=new C.aO(a6.r,D.ap,f3,f3,a7)
for(d8=0;d8<6;d8=d9)for(a6=d8/6,d9=d8+1,a8=d9/6,d1=0;d1<8;d1=e0){a9=d1/8
e0=d1+1
b0=e0/8
e1=C.a([d6.$2(a9,a6),d6.$2(b0,a6),d6.$2(b0,a8),d6.$2(a9,a8)],a5)
if(D.d.b7(e1,new A.cm5()))continue
a9=C.a([],a3)
for(b7=0;b7<4;++b7){c1=e1[b7]
b0=c1.c
a9.push(new C.u(o+c1.a*p/b0,n-c1.b*p/b0))}d7.push(new C.bt(d1,d8,a9))
a9=C.B(a9,a2)
a9=new C.KX(a9,!0)
a7.push(a9)
b0=d0.f
if(b0!=null)a9.bx(b0)
a9=d0.e
if(a9!=null)a9.a.delete()
d0.e=null}if(d7.length===0)continue
a0.push(new A.zV(d5.r,d5.w,new A.cm6(f2,d5,d7),d0,D.K,b4-d5.f,d5.b,!1,!1))}w=x.S
e2=C.T(w,x.i)
e3=C.T(w,w)
for(w=a0.length,b2=0;u=a0.length,b2<u;a0.length===w||(0,C.L)(a0),++b2){e4=a0[b2]
u=e4.b
if(u!==0){t=e2.h(0,u)
if(t==null)t=0
e2.n(0,u,t+e4.r)
t=e3.h(0,u)
e3.n(0,u,(t==null?0:t)+1)}}for(d1=0;d1<u;++d1)a0[d1].c=d1
D.d.b_(a0,new A.cm7(new A.cm8(e2,e3)))
w=f2.d.a
D.d.a9(w)
$.W()
e5=C.M()
e5.b=D.V
e6=C.M()
e6.b=D.ae
e6.c=0.8
for(u=a0.length,t=f4.a,b2=0;b2<a0.length;a0.length===u||(0,C.L)(a0),++b2){e7=a0[b2]
a2=e7.d
if(a2!=null){a2.$1(f4)
a2=e7.w
if(a2!==0)w.push(new C.y(e7.e,a2))
continue}a2=e7.f
e5.r=a2.gp(0)
a3=e7.e
e8=e5.H()
a4=a3.e
t.drawPath((a4==null?a3.e=new C.cF(a3.gbK().a.snapshot()):a4).a,e8)
e8.delete()
if(!e7.x){e6.r=a2.gp(0)
e8=e6.H()
a2=a3.e
t.drawPath((a2==null?a3.e=new C.cF(a3.gbK().a.snapshot()):a2).a,e8)
e8.delete()}a2=e7.w
if(a2!==0)w.push(new C.y(a3,a2))}if(s){$.W()
e9=C.M()
e9.b=D.ae
e9.c=1.4
e9.r=D.c.j(0.35+0.25*Math.sin(f2.gana(0)*6)).gp(0)
for(w=a0.length,b2=0;b2<a0.length;a0.length===w||(0,C.L)(a0),++b2){e7=a0[b2]
if(e7.y){u=e7.e
e8=e9.H()
s=u.e
t.drawPath((s==null?u.e=new C.cF(u.gbK().a.snapshot()):s).a,e8)
e8.delete()}}}for(w=v.c,v=w.length,b2=0;b2<w.length;w.length===v||(0,C.L)(w),++b2){f0=w[b2]
c1=i.$1(f0.a)
u=c1.c
if(u<1)continue
s=o+c1.a*p/u
u=n-c1.b*p/u
f1=new C.kq(new C.ep(f0.b,f3,f3,D.cO,f3,f3,f3,f3,f3,f3,new C.G(!0,D.c,f3,f3,f3,f3,11,D.u,f3,f3,f3,f3,f3,f3,f3,f3,f3,f3,f3,f3,f3,f3,f3,f3,f3,f3)),D.a4,D.cc,new C.jo(1),f3,f3,f3,f3,D.ca,f3)
f1.eH()
a2=f1.b
a3=a2.c
a2=a2.a.c
c7=C.bA(C.cm(new C.u(s,u),a2.gbc(a2)+8,a3+14),D.iE)
$.W()
a3=new C.as(D.X,D.V,D.a_,D.a0,D.Z)
a3.r=f0.c.j(0.92).gp(0)
e8=a3.H()
t.drawRRect(C.er(c7),e8)
e8.delete()
a3=new C.as(D.X,D.V,D.a_,D.a0,D.Z)
a3.b=D.ae
a3.c=1
a3.r=D.ad.gp(0)
e8=a3.H()
t.drawRRect(C.er(c7),e8)
e8.delete()
a3=f1.b
a2=a3.c
a3=a3.a.c
f1.a5(f4,new C.u(s-a2/2,u-a3.gbc(a3)/2))}},
ar(d){return!0}}
A.zV.prototype={}
A.atv.prototype={
U(){return new A.bp6(new A.bPH(C.a([],x.a6)),new C.eP(0,$.aw()),D.bw,D.J,null,null)}}
A.bp6.prototype={
a_(){var w,v=this
v.a1()
w=v.qk(new A.eSX(v))
w.j2(0)
v.d!==$&&C.aP()
v.d=w},
q(){var w=this.d
w===$&&C.c()
w.q()
w=this.f
w.T$=$.aw()
w.P$=0
this.buW()},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=p.a,m=n.Q==null,l=m?o:new A.eSR(p)
m=m?o:new A.eSS(p,d)
w=n.c
v=n.d
u=n.e
t=n.r
s=p.f
n=n.w
r=C.a([v,s],x.dS)
q=p.a
r=C.a([C.jt(new C.ev(C.b3(o,o,o,new A.b3X(w,v,p.e,u,t,s,n,q.x,q.z,new C.h3(r)),D.f0),o),D.r,o)],x.p)
p.a.toString
return C.o9(D.jx,C.aE(D.c3,new C.an(D.W,o,D.b_,D.r,r,o),D.y,!1,o,m,l,o,o,o,o,o,o,o,o,o,o,o,o,o,o,new A.eST(p),new A.eSU(p),o,o,o,o,o,o,o,new A.eSV(p),o,o,o,!1,D.a8),o,o,o,o,o,o,new A.eSW(p),o)}}
A.aLH.prototype={
q(){var w=this,v=w.a8$
if(v!=null)v.a3(0,w.gbv())
w.a8$=null
w.a2()},
aQ(){this.aY()
this.aW()
this.bw()}}
A.b9v.prototype={}
A.b9Q.prototype={}
A.beR.prototype={}
A.dgF.prototype={}
A.LJ.prototype={
OH(d){return this.cjv(d)},
cjv(e4){var w=0,v=C.j(x.H),u=this,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6,d7,d8,d9,e0,e1,e2,e3
var $async$OH=C.e(function(e6,e7){if(e6===1)return C.f(e7,v)
for(;;)switch(w){case 0:if(e4.getUint32(0,!0)!==1179937895)throw C.V("not a glb file")
for(n=x.c,m=12,l=null,k=null;m+8<=e4.byteLength;){j=e4.getUint32(m,!0)
i=e4.getUint32(m+4,!0)
h=J.eY(D.dD.gaM(e4),e4.byteOffset+m+8,j)
if(i===1313821514)l=n.a(D.R.aG(0,new C.FC(!1).D6(h,0,null,!0),null))
if(i===5130562)k=h
m+=8+j}if(l==null||k==null)throw C.V("empty glb")
g=new A.daP(l,k)
f=J.a5(l)
e=x.j
d=J.kw(e.a(f.h(l,"nodes")),n)
n=d.a
a0=J.a5(n)
a1=a0.gM(n)
a2=x.S
u.b=C.c2(a1,-1,!1,a2)
a3=C.a([],x.s)
for(a4=d.$ti,a5=a4.k("bR<bU.E>"),a6=new C.bR(d,d.gM(0),a5),a7=a4.k("bU.E");a6.C();){a8=a6.d
a8=C.aT(J.q(a8==null?a7.a(a8):a8,"name"))
if(a8==null)a8=""
a3.push(a8.toLowerCase())}u.c=a3
u.d=D.d.bd(a3,new A.bOv())
a3=x.gL
a6=C.a([],a3)
for(a5=new C.bR(d,d.gM(0),a5),a8=x.g,a9=x.t;a5.C();){b0=a5.d
if(b0==null)b0=a7.a(b0)
b1=C.a([],a9)
b0=a8.a(J.q(b0,"children"))
b0=J.aV(b0==null?D.cu:b0)
while(b0.C())b1.push(D.k.N(C.dQ(b0.gS(b0))))
a6.push(b1)}u.f=a6
for(a5=u.b,b2=0;b2<a1;++b2)for(a7=a6[b2],b0=a7.length,b3=0;b3<b0;++b3)a5[a7[b3]]=b2
a5=C.a([],a9)
a6=e.a(f.h(l,"scenes"))
a7=C.aJ(f.h(l,"scene"))
a7=a7==null?null:D.k.N(a7)
a6=J.aV(e.a(J.q(J.q(a6,a7==null?0:a7),"nodes")))
while(a6.C())a5.push(D.k.N(C.dQ(a6.gS(a6))))
u.r=a5
a5=a1*3
u.w=new Float64Array(a5)
u.x=new Float64Array(a1*4)
u.y=new Float64Array(a5)
for(a5=x.x,a4=a4.y[1],b2=0;b2<a1;++b2){b4=a4.a(a0.h(n,b2))
a6=J.a5(b4)
a7=a8.a(a6.h(b4,"translation"))
b5=a7==null?null:J.kw(a7,a5)
if(b5==null)b5=F.ao_
a7=a8.a(a6.h(b4,"rotation"))
b6=a7==null?null:J.kw(a7,a5)
if(b6==null)b6=B.bVT
a6=a8.a(a6.h(b4,"scale"))
b7=a6==null?null:J.kw(a6,a5)
if(b7==null)b7=B.c7O
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
n=J.aV(n==null?D.cu:n)
while(n.C()){b7=n.gS(n)
a0=C.a([],a9)
for(a3=J.a5(b7),a4=J.aV(e.a(a3.h(b7,"joints")));a4.C();)a0.push(D.k.N(C.dQ(a4.gS(a4))))
u.Q.push(a0)
c1=a3.h(b7,"inverseBindMatrices")!=null?g.EZ(D.k.N(C.dQ(a3.h(b7,"inverseBindMatrices")))).a:null
a3=u.as
a3.push(c1==null?A.hsI(a0.length):c1)}n=a8.a(f.h(l,"animations"))
n=J.aV(n==null?D.cu:n)
a0=u.z
a3=x.G
a4=x.fJ
while(n.C()){c2=n.gS(n)
c3=C.a([],a4)
a5=J.a5(c2)
c4=e.a(a5.h(c2,"samplers"))
for(a6=J.aV(e.a(a5.h(c2,"channels"))),a7=J.a5(c4),c5=0;a6.C();){c6=a6.gS(a6)
a9=J.a5(c6)
c7=a3.a(a9.h(c6,"target"))
b0=J.a5(c7)
b1=C.aJ(b0.h(c7,"node"))
c8=b1==null?null:D.k.N(b1)
c9=b0.h(c7,"path")
A:{if("translation"===c9){b0=0
break A}if("rotation"===c9){b0=1
break A}if("scale"===c9){b0=2
break A}b0=-1
break A}if(c8==null||b0<0)continue
b7=a3.a(a7.h(c4,D.k.N(C.dQ(a9.h(c6,"sampler")))))
a9=J.a5(b7)
d0=g.EZ(D.k.N(C.dQ(a9.h(b7,"input")))).a
d1=g.EZ(D.k.N(C.dQ(a9.h(b7,"output")))).a
d2=a9.h(b7,"interpolation")
if(d2==null)d2="LINEAR"
d3=b0===1?4:3
a9=J.l0(d2)
if(a9.A(d2,"CUBICSPLINE")){b1=d0.length
d4=new Float64Array(b1*d3)
for(b2=0;b2<b1;++b2)for(b9=b2*d3,c0=(b2*3+1)*d3,b8=0;b8<d3;++b8)d4[b9+b8]=d1[c0+b8]
d1=d4}if(!D.o3.gam(d0)){b1=d0.length
if(b1===0)C.ba(C.fA())
c5=Math.max(c5,d0[b1-1])}c3.push(new A.b9v(c8,b0,d0,d1,a9.A(d2,"STEP")))}d5=C.aT(a5.h(c2,"name"))
if(d5==null)d5="clip"+a0.a
a0.n(0,d5,new A.b9Q(c5,c3))}t=C.T(a2,x.c9)
s=0
n=x.H
e="Could not read a picture of "+u.a+": "
case 2:a0=s
a2=a8.a(f.h(l,"images"))
a2=a2==null?null:J.ad(a2)
if(!(a0<(a2==null?0:a2))){w=3
break}r=g.cLk(s)
if(r==null){w=4
break}try{a0=r
d6=C.fVx(a0)
q=d6==null?null:d6.pr(0,a0,null)
if(q!=null){p=q.cDY(D.c7,4)
a0=s
a2=p.a
a2=a2==null?null:a2.a
if(a2==null)a2=0
a3=p.a
a3=a3==null?null:a3.b
if(a3==null)a3=0
d7=p
a4=d7.gqx()
d8=4!==a4?d7.cDX(null,4):d7
a4=d8.a
a4=a4==null?null:a4.bjX(d8!==d7,D.b4d)
if(a4==null){a4=d7.a
a4=a4==null?null:J.eR(a4.gaM(a4))
if(a4==null){a4=d7.a
a4=a4==null?null:a4.gaM(a4)
if(a4==null)a4=D.aG.gaM(new Uint8Array(0))
a4=J.eR(a4)}}J.aF(t,a0,new A.beR(a2,a3,new Uint8Array(C.ce(a4))))}}catch(e5){o=C.aa(e5)
$.am.$1(e+C.t(o))}w=5
return C.b(C.bN(D.bw,null,n),$async$OH)
case 5:case 4:++s
w=2
break
case 3:e0=u.bOa(l,g,d,t)
w=6
return C.b(C.bN(D.bw,null,n),$async$OH)
case 6:u.at=u.b5K(e0,5000)
w=7
return C.b(C.bN(D.bw,null,n),$async$OH)
case 7:u.ax=u.b5K(e0,2000)
n=u.at
n.r=u.b18(n)
n=u.ax
n.r=u.b18(n)
e1=u.axp(null,0)
e2=u.b4_(u.at,e1)
for(n=e2.length,e3=1/0,s=1;s<n;s+=3)e3=Math.min(e3,e2[s])
u.ay=isFinite(e3)?e3:0
return C.h(null,v)}})
return C.i($async$OH,v)},
ckV(d){var w,v,u
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
b18(d){var w,v,u,t,s,r,q,p,o,n,m=d.a.length/3|0,l=new Uint8Array(m)
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
l[t]=o<n.length?this.ckV(n[o]):5}return l},
bOa(e9,f0,f1,f2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6,d7,d8,d9,e0,e1,e2=null,e3="POSITION",e4="JOINTS_0",e5="WEIGHTS_0",e6=J.a5(e9),e7=x.g,e8=e7.a(e6.h(e9,"materials"))
if(e8==null)e8=D.cu
w=x.c
v=J.kw(e8,w)
e8=e7.a(e6.h(e9,"textures"))
u=J.kw(e8==null?D.cu:e8,w)
e8=x.j
t=J.kw(e8.a(e6.h(e9,"meshes")),w)
e6=x.n
s=C.a([],e6)
r=x.t
q=C.a([],r)
p=C.a([],e6)
o=C.a([],r)
n=C.a([],r)
m=C.a([],r)
for(e6=f1.a,r=J.a5(e6),l=t.a,k=J.a5(l),j=t.$ti.y[1],i=x.N,h=x.C,g=x.Y,f=x.x,e=x.G,d=v.a,a0=J.a5(d),a1=v.$ti.y[1],a2=u.a,a3=J.a5(a2),a4=u.$ti.y[1],a5=this.ch,a6=f1.$ti.y[1],a7=0;a7<r.gM(e6);++a7){a8=a6.a(r.h(e6,a7))
a9=J.a5(a8)
b0=C.aJ(a9.h(a8,"mesh"))
b1=b0==null?e2:D.k.N(b0)
if(b1==null)continue
a9=C.aJ(a9.h(a8,"skin"))
b2=a9==null?e2:D.k.N(a9)
for(a9=J.kw(e8.a(J.q(j.a(k.h(l,b1)),"primitives")),w),b0=a9.$ti,a9=new C.bR(a9,a9.gM(0),b0.k("bR<bU.E>")),b3=b2==null,b0=b0.k("bU.E");a9.C();){b4=a9.d
if(b4==null)b4=b0.a(b4)
b5=J.a5(b4)
b6=J.Gs(e.a(b5.h(b4,"attributes")),i,h)
if(b6.h(0,e3)==null||b5.h(b4,"indices")==null)continue
b7=f0.EZ(D.k.N(C.dQ(b6.h(0,e3)))).a
b8=b7.length/3|0
b9=b6.h(0,e4)!=null?f0.EZ(D.k.N(C.dQ(b6.h(0,e4)))).a:e2
c0=b6.h(0,e5)!=null?f0.EZ(D.k.N(C.dQ(b6.h(0,e5)))).a:e2
c1=C.aJ(b5.h(b4,"material"))
c2=c1==null?e2:D.k.N(c1)
c1=g.a(J.q(c2!=null?a1.a(a0.h(d,c2)):D.cz,"pbrMetallicRoughness"))
c3=c1==null?e2:J.Gs(c1,i,h)
if(c3==null)c3=D.cz
c1=e7.a(c3.h(0,"baseColorFactor"))
c4=c1==null?e2:J.kw(c1,f)
if(c4==null)c4=B.c7P
c1=g.a(c3.h(0,"baseColorTexture"))
c5=c1==null?e2:J.Gs(c1,i,h)
c1=c5==null
c6=C.aJ(c1?e2:c5.h(0,"texCoord"))
c7=c6==null?e2:D.k.N(c6)
c8=b6.h(0,"TEXCOORD_"+(c7==null?0:c7))
c9=c8!=null?f0.EZ(D.k.N(C.dQ(c8))).a:e2
if(!c1){c1=C.aJ(J.q(a4.a(a3.h(a2,D.k.N(C.dQ(c5.h(0,"index"))))),"source"))
d0=c1==null?e2:D.k.N(c1)
d1=d0!=null?f2.h(0,d0):e2}else d1=e2
d2=s.length/3|0
D.d.v(s,b7)
for(c1=c0!=null,c6=b9!=null,d3=0;d3<b8;++d3){o.push(b3?255:b2)
for(d4=d3*4,d5=0;d5<4;++d5){q.push(c6?D.k.N(b9[d4+d5]):0)
if(c1)d6=c0[d4+d5]
else d6=d5===0?1:0
p.push(d6)}}d7=f0.EZ(D.k.N(C.dQ(b5.h(b4,"indices")))).a
for(b4=d7.length,d8=0;b5=d8+2,b5<b4;d8+=3){d9=D.k.N(d7[d8])
e0=D.k.N(d7[d8+1])
e1=D.k.N(d7[b5])
n.push(d2+d9)
n.push(d2+e0)
n.push(d2+e1)
m.push(this.bMn(d1,c9,d9,e0,e1,c4))}if(b3)a5.push(new C.bt(d2,b8,a7))}}return new A.dmc(new Float64Array(C.ce(s)),new Uint16Array(C.ce(q)),new Float64Array(C.ce(p)),new Uint8Array(C.ce(o)),new Int32Array(C.ce(n)),new Int32Array(C.ce(m)))},
bMn(d,e,f,g,h,i){var w,v,u,t,s,r,q,p=J.a5(i),o=p.h(i,0),n=p.h(i,1),m=p.h(i,2)
if(d!=null&&e!=null){w={}
p=f*2
v=g*2
u=h*2
t=(e[p]+e[v]+e[u])/3
s=(e[p+1]+e[v+1]+e[u+1])/3
r=w.a=w.b=w.c=0
q=new A.bOs(w,d)
q.$2(t,s)
for(p=[f,g,h];r<3;++r){v=p[r]*2
q.$2((t+e[v])/2,(s+e[v+1])/2)}o*=w.c/4/255
n*=w.b/4/255
m*=w.a/4/255}p=new A.bOr()
return(p.$1(o)<<16|p.$1(n)<<8|p.$1(m)|4278190080)>>>0},
b5K(d7,d8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4={},d5=d7.a,d6=d5.length/3|0
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
h=new A.bOx(d4,d6,d7)
g=new A.bOz(d7)
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
D.jB.fZ(b0,0,a3,-1)
b1=new Float64Array(a3)
D.o3.fZ(b1,0,a3,1/0)
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
c3=A.h0V(c1,c2,a9)
c4=q[D.o.an(c0,3)]
c5=b8.h(0,c3)
b2=c4&255
if(c5==null){b8.n(0,c3,C.a([D.o.aA(c4,16)&255,D.o.aA(c4,8)&255,b2,1],p))
b9.n(0,c3,b7.length/3|0)
b7.push(c1)
b7.push(c2)
b7.push(a9)}else{c5[0]=c5[0]+(D.o.aA(c4,16)&255)
c5[1]=c5[1]+(D.o.aA(c4,8)&255)
c5[2]=c5[2]+b2
c5[3]=c5[3]+1}}s=b7.length
c6=new Int32Array(s/3|0)
b8.bJ(0,new A.bOw(c6,b9))
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
c9[d2]=q[d3]}d0[a9]=s[d1]}return new A.dgF(c7,c8,c9,d0,new Int32Array(C.ce(b7)),c6)},
axp(a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0=d.b
a0===$&&C.c()
w=d.w
w===$&&C.c()
v=new Float64Array(C.ce(w))
w=d.x
w===$&&C.c()
u=new Float64Array(C.ce(w))
w=d.y
w===$&&C.c()
t=new Float64Array(C.ce(w))
s=a1==null?null:d.z.h(0,a1)
if(s!=null&&s.b>0){w=s.b
r=a2-Math.floor(a2/w)*w
for(w=s.c,q=w.length,p=0;p<w.length;w.length===q||(0,C.L)(w),++p){o=w[p]
n=o.b
if(n===0)n=v
else n=n===1?u:t
A.hsJ(o,r,n)}}m=d.CW.cg(0,"world",new A.bOt(a0.length))
l=new A.bOu(d,v,u,t,new Float64Array(16),m)
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
A.h0W(m,w*16,q[h],f*16,j,i)
i+=16}}for(w=a0.length,p=0;p<a0.length;a0.length===w||(0,C.L)(a0),++p,i=e){e=i+16
D.o3.ea(j,i,e,m,a0[p].c*16)}return j},
b4_(b8,b9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3=b8.a,b4=b3.length/3|0,b5=new Float64Array(b4*3),b6=C.a([],x.t),b7=this.Q
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
cDl(d,e){var w,v,u=new A.bOC(this)
if(d){w=u.$1("run")
v=w==null?u.$1("walk"):w}else if(e){w=u.$1("walk")
v=w}else{w=u.$1("idle")
if(w==null)w=u.$1("samba")
v=w}if(v!=null)return v
u=u.$1("samba")
if(u==null){u=this.z
u=new C.cu(u,C.a3(u).k("cu<1>")).dL(0,new A.bOA(),new A.bOB(this))}return u},
cQn(a7,a8,a9,b0,b1,b2,b3,b4,b5,b6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=this,a5="world",a6={}
if(a7){w=a4.at
w===$&&C.c()
v=w}else{w=a4.ax
w===$&&C.c()
v=w}u=a4.cDl(b0,b3)
w=a4.z.h(0,u)
t=w==null?null:w.b
if(t==null)t=1
if(b3&&b2!=null&&D.a.t(u.toLowerCase(),"walk"))s=b2/50*t
else{w=B.djb.h(0,a4.a)
s=b1*(w==null?1:w)}w=a4.e
r=w.h(0,u)
if(r==null){a4.axp(u,0)
if(a4.d>=0){q=a4.CW
r=new C.y(q.h(0,a5)[a4.d*16+12],q.h(0,a5)[a4.d*16+14])}else r=D.z5
w.n(0,u,r)}p=a4.axp(u,s)
a6.a=a6.b=0
if(a4.d>=0){w=a4.CW
a6.b=w.h(0,a5)[a4.d*16+12]-r.a
a6.a=w.h(0,a5)[a4.d*16+14]-r.b}o=a4.b4_(v,p)
w=B.djS.h(0,a4.a)
n=b5+(w==null?0:w)
m=C.ig(v.a.length/3|0,new A.bOE(a6,a4,o,36,a9,Math.cos(n),Math.sin(n),b4,b6),!0,x.Q)
w=C.a([],x.t)
for(l=0;l<6;++l){q=$.jO+1
$.jO=q
w.push(q)}k=C.a([],x.z)
for(q=v.e,j=q.length,i=x.o,h=v.f,g=0;g<j;g+=3){f=m[q[g]]
e=m[q[g+1]]
d=m[q[g+2]]
a0=f.a
a1=f.b
a2=f.c
a3=new A.D(e.a-a0,e.b-a1,e.c-a2).Km(new A.D(d.a-a0,d.b-a1,d.c-a2)).goy(0)
a2=C.a([f,e,d],i)
a1=C.b0(h[D.o.an(g,3)])
a0=v.r
a0===$&&C.c()
k.push(new A.mt(a2,a3,a1,a8,0.08,1,!1,0,0,2,w[a0[q[g]]]))}return k}}
A.dmc.prototype={}
A.daP.prototype={
cLk(d){var w,v,u=this.a,t=J.a5(u),s=x.j,r=x.G,q=C.aJ(J.q(r.a(J.q(s.a(t.h(u,"images")),d)),"bufferView")),p=q==null?null:D.k.N(q)
if(p==null)return null
w=r.a(J.q(s.a(t.h(u,"bufferViews")),p))
u=J.a5(w)
t=C.aJ(u.h(w,"byteOffset"))
v=t==null?null:D.k.N(t)
if(v==null)v=0
return C.zG(this.b,v,v+D.k.N(C.dQ(u.h(w,"byteLength"))))},
EZ(a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=null,g="byteOffset",f=this.a,e=J.a5(f),d=x.j,a0=x.G,a1=a0.a(J.q(d.a(e.h(f,"accessors")),a5)),a2=J.a5(a1),a3=D.k.N(C.dQ(a2.h(a1,"count"))),a4=a2.h(a1,"type")
A:{w=1
if("SCALAR"===a4)break A
if("VEC2"===a4){w=2
break A}if("VEC3"===a4){w=3
break A}if("VEC4"===a4){w=4
break A}if("MAT2"===a4){w=4
break A}if("MAT3"===a4){w=9
break A}if("MAT4"===a4){w=16
break A}break A}v=D.k.N(C.dQ(a2.h(a1,"componentType")))
B:{if(5120===v||5121===v){u=1
break B}if(5122===v||5123===v){u=2
break B}u=4
break B}t=J.z(a2.h(a1,"normalized"),!0)
s=new Float64Array(a3*w)
r=C.aJ(a2.h(a1,"bufferView"))
q=r==null?h:D.k.N(r)
if(q==null)return new C.y(s,w)
p=a0.a(J.q(d.a(e.h(f,"bufferViews")),q))
f=J.a5(p)
e=C.aJ(f.h(p,g))
e=e==null?h:D.k.N(e)
if(e==null)e=0
a2=C.aJ(a2.h(a1,g))
d=a2==null?h:D.k.N(a2)
o=e+(d==null?0:d)
f=C.aJ(f.h(p,"byteStride"))
n=f==null?h:D.k.N(f)
if(n==null)n=w*u
m=C.aR2(this.b)
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
default:i=m.getFloat32(j,!0)}s[f+k]=i}return new C.y(s,w)}}
A.JX.prototype={}
A.bGW.prototype={
fA(d,e){var w,v,u,t,s,r,q=this,p=q.d
p===$&&C.c()
w=p.length
v=q.f
u=null
t=0
for(;t<w;++t){s=p[t]
r=q.c
r===$&&C.c()
if(!(Math.sqrt(Math.pow(r.f-s.b,2)+Math.pow(r.r-s.c,2))<s.d)){v.W(0,s.a)
continue}r=s.a
if(!v.K(0,r))continue
u=q.c3c(r,e)}if(u!=null)q.B(e)
return u},
c3c(d,e){var w,v,u,t
if(e==null)return"The city is still loading."
if(this.a==="hospital"){if(d===0){w=e.gFL()
v=C.U(w).k("a2<1>")
u=C.B(new C.a2(w,new A.bGX(),v),v.k("J.E"))
if(u.length===0)return"The desk: nobody needs the hospital right now. "+e.x+" doses of medicine in stock."
return e.aBp(D.d.gL(u))}t=d-1
if(e.e[t].a<0)return"This bed is empty. Admit someone at the desk first."
return e.bgZ(t)}return d===0?e.ajr("food"):e.ajr("medicine")},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=C.a([],x.z),h=new A.iK(i),g=C.a([],x.E)
h.f=-1
w=this.a==="hospital"
h.pl(B.fGS,B.fER,w?B.b84:B.bbk,0.2,3)
h.f=0
h.x=$.jO=$.jO+1
h.hX(B.fHH,B.fBV,w?B.Vx:B.b8M,3)
h.x=0
h.x=$.jO=$.jO+1
h.hX(B.fGz,B.aSs,w?B.Vx:B.adN,3)
h.x=0
h.x=$.jO=$.jO+1
h.hX(B.fHr,B.aSs,w?B.Vx:B.adN,3)
h.x=0
h.f=2
h.r=!0
if(w){h.f=1
h.bH(B.aRj,B.fAQ,D.bI)
h.bH(B.aRj,B.fzD,D.bI)
h.f=2
h.bB(B.fI2,B.fCp,B.wN,0.15)
h.bB(B.fI3,B.fCD,D.bM,0.3)
h.bH(B.fHK,B.fBT,D.aS)
h.f=1
h.h7(B.fIs,B.fCf,22,D.cr,20)
h.f=2
g.push(B.bQT)
for(w=d!=null,v=0;v<3;++v){u=48+v*50
h.bH(new A.D(70,8,u),B.fC5,D.cp)
h.bH(new A.D(70,14,u),B.fC2,D.aP)
h.bH(new A.D(98,18,u),B.fzK,D.c)
t=w&&v<d.e.length?d.e[v]:null
if(t!=null&&t.a>=0){s=d.c
s===$&&C.c()
r=s[t.a]
s=t.b>70?D.b4:D.cg
h.bH(new A.D(62,19,u),B.fBr,s)
s=r.a
h.i4(new A.D(96,22,u),7,s.e.a,4,8)
q=t.b>70
p=q?"cared for":"needs treatment"
q=q?D.f6:D.bI
g.push(new A.nc(new A.D(70,40,u),s.b+"  "+p,q))}else g.push(new A.nc(new A.D(70,30,u),"Free bed "+(v+1),D.bu))
h.f=1
s=u-2
h.h7(new A.D(20,0.2,s),new A.D(20,0.6,s),16,D.aH,16)
h.f=2}}else{h.bB(B.fyD,B.fzI,B.wN,0.15)
h.bB(B.fz4,B.fzJ,D.bM,0.3)
for(o=0;o<2;++o){w=B.dbW[o]
n=w.a
m=w.b
h.bB(new A.D(n,40,120),B.fAA,B.bep,0.05)
for(w=n<0,l=0;l<4;++l)for(s=12+l*18,k=0;k<5;++k){if(m)j=[D.aH,D.ay,D.nF,D.wX][D.o.F(l+k,4)]
else j=(k&1)===0?D.c:D.dw
h.bH(new A.D(n+(w?15:-15),s,78+k*20),B.fBk,j)}}h.f=1
h.h7(B.fIX,B.fG5,24,D.cj,20)
h.h7(B.fGM,B.fEz,24,D.by,20)
h.f=2
g.push(B.bQW)
g.push(B.bQV)}h.f=1
h.bH(B.fDL,B.fDO,D.cZ)
g.push(B.bQS)
if(d!=null)g.push(new A.nc(B.fzy,"\u2b50 "+d.r+"   \ud83c\udf5e "+d.w+"   \ud83d\udc8a "+d.x,D.M))
this.e=new A.xB(i,B.aCM,g,B.vK,null)}}
A.EH.prototype={}
A.a8N.prototype={
gTj(){var w,v=this
if(!v.f)return"has died"
if(v.r>=0)return"in hospital"
if(v.c<30)return"in danger"
if(v.e)return"sick"
w=v.b
if(w>80)return"starving"
if(w>55)return"hungry"
if(v.d<40)return"unhappy at home"
return"fine"},
gaBI(d){var w,v=this.gTj()
A:{if("has died"===v){w="\ud83d\udd6f"
break A}if("in hospital"===v){w="\ud83c\udfe5"
break A}if("in danger"===v){w="\ud83c\udd98"
break A}if("sick"===v){w="\ud83e\udd12"
break A}if("starving"===v||"hungry"===v){w="\ud83c\udf7d"
break A}if("unhappy at home"===v){w="\ud83d\ude1f"
break A}w="\ud83d\ude42"
break A}return w}}
A.Hh.prototype={}
A.La.prototype={}
A.aRC.prototype={
bvE(d,e){var w,v=C.a([],x.y)
for(w=0;w<7;++w)v.push(new A.a8N(B.Gx[w]))
this.c=v
v[1].b=55
v[4].b=40},
gFL(){var w,v,u,t=C.a([],x.y),s=this.c
s===$&&C.c()
w=s.length
v=0
for(;v<s.length;s.length===w||(0,C.L)(s),++v){u=s[v]
if(u.f)t.push(u)}return t},
gcHe(){var w=this.c
w===$&&C.c()
return new C.a2(w,new A.bHx(),C.U(w).k("a2<1>")).gM(0)},
OW(d){var w=this.f
D.d.ck(w,0,d)
if(w.length>12)w.pop()},
aBq(a2,a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=this
a1.as+=a3
for(w=a1.gFL(),v=w.length,u=-0.6*a3,t=0.8*a3,s=0.2*a3,r=a1.b,q=0.012*a3,p=a1.f,o=0.15*a3,n=0;n<w.length;w.length===v||(0,C.L)(w),++n){m=w[n]
l=a4.d
l===$&&C.c()
k=m.a
j=l[k.c]
i=j.gjB()
l=k.d
if(l>=0)h=!a4.d[l].gl3()
else{l=j.c
h=(l==="bathroom"||l==="kitchen")&&!j.gl3()}if(m.r<0){m.b=Math.min(100,m.b+s)
l=i?0:45
g=h?35:0
f=m.d
f+=D.k.D(100-l-g-f,u,t)
m.d=f
if(!m.e)l=(f<40||m.b>85)&&r.aj()<q
else l=!1
if(l){m.e=!0
D.d.ck(p,0,k.b+" has fallen sick. Give medicine, or send them to the hospital.")
if(p.length>12)p.pop()}e=m.b>=95?0.9:0
if(m.e)e+=0.55
if(m.d<15)e+=0.4
if(e>0)l=m.c=m.c-e*a3
else{l=m.c
if(l<100){l=Math.min(100,l+o)
m.c=l}}if(l<=0)a1.aPT(m)}}for(w=a1.e,v=1.2*a3,u=2.2*a3,d=0;d<w.length;++d){a0=w[d]
t=a0.a
if(t<0)continue
s=a1.c
s===$&&C.c()
m=s[t]
if(!m.f){a0.a=-1
continue}t=a0.b=Math.max(0,a0.b-a3)
if(t>30)a0.c=Math.min(100,a0.c+u)
else if(t<=0)if((m.c-=v)<=0){a1.aPT(m)
a0.a=-1
continue}if(a0.c>=100){m.e=!1
m.r=-1
m.c=Math.max(m.c,80)
m.b=Math.min(m.b,30)
a0.a=-1
a0.c=0
a0.b=100
a1.r+=8;++a1.z
D.d.ck(p,0,m.a.b+" is better and went home. +8 points.")
if(p.length>12)p.pop()}}for(w=a1.d,v=w.length,n=0;n<v;++n)w[n].f+=a3
a1.MN(a4)
if((a1.at-=a3)<=0){a1.at=60+r.aj()*50
a1.cCI(a4)}},
aPT(d){var w
d.f=!1
d.c=0
w=d.r
if(w>=0)this.e[w].a=-1
d.r=-1
D.d.bn(this.d,new A.bHu(d))
this.OW(d.a.b+" has died. Keep up with everybody's needs: food, medicine and a home that works.")},
aTw(d,e){return D.d.b7(this.d,new A.bHv(d,e))},
MN(d){var w,v,u,t,s,r,q,p,o,n=this,m=n.d,l=C.B(m,x.fC),k=l.length,j=n.f,i=0
for(;i<l.length;l.length===k||(0,C.L)(l),++i){w=l[i]
v=B.Gx[w.b]
u=w.c==="power"
if(u){t=d.d
t===$&&C.c()
s=t[v.c].gjB()}else{t=v.d
r=d.d
if(t>=0){r===$&&C.c()
t=r[t].gl3()
s=t}else{r===$&&C.c()
t=r[v.c].gl3()
s=t}}if(s){D.d.W(m,w)
t=w.e
n.r=n.r+t;++n.y
u=u?"power is back":"leak is fixed"
D.d.ck(j,0,v.b+"'s "+u+". +"+t+" points. Thank you!")
if(j.length>12)j.pop()}}for(l=n.gFL(),k=l.length,u=n.b,i=0;i<l.length;l.length===k||(0,C.L)(l),++i){q=l[i]
if(m.length>=4)break
t=d.d
t===$&&C.c()
r=q.a
p=t[r.c]
if(!p.gjB()&&!n.aTw(r.a,"power")){m.push(new A.Hh(n.Q++,r.a,"power",B.cP2[u.aB(3)],15))
D.d.ck(j,0,r.b+" is calling for help: no power.")
if(j.length>12)j.pop()}t=r.d
o=t>=0?d.d[t]:p
t=o.c
if((t==="bathroom"||t==="kitchen")&&!o.gl3()&&!n.aTw(r.a,"leak")&&m.length<4){m.push(new A.Hh(n.Q++,r.a,"leak",B.cX0[u.aB(3)],15))
D.d.ck(j,0,r.b+" is calling for help: a leak.")
if(j.length>12)j.pop()}}},
cCI(d){var w,v,u,t,s,r,q=this
if(q.d.length>=3||q.gFL().length===0)return
w=q.b
v=q.gFL()[w.aB(q.gFL().length)]
u=d.d
u===$&&C.c()
t=v.a
s=u[t.c]
t=t.d
r=t>=0?u[t]:s
u=r.c
if((u==="bathroom"||u==="kitchen")&&r.gl3()&&w.ha()){r.ch=!0
r.cx=null}else if(s.gjB()){s.ay=!0
s.CW=null
s.db=!1
s.cy.a9(0)}else return
q.MN(d)},
bbO(d){var w,v,u,t=this
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
t.OW(u)
return u},
aID(d){var w,v,u=this
if(!d.f)return d.a.b+" has died."
if(!d.e)return d.a.b+" is not sick."
w=u.x
if(w<=0)return y.k
u.x=w-1
d.e=!1
d.c=Math.min(100,d.c+20)
u.r+=3
v=d.a.b+" took the medicine and is better. +3 points."
u.OW(v)
return v},
aBp(d){var w,v,u,t
if(!d.f)return d.a.b+" has died."
if(d.r>=0)return d.a.b+" is already in hospital."
if(!d.e&&d.c>60)return d.a.b+" is not ill enough for the hospital."
w=this.e
v=D.d.bd(w,new A.bHw())
if(v<0)return"The hospital is full. Treat the patients first, they go home when they are better."
w=w[v]
u=d.a
w.a=u.a
w.b=100
w.c=0
d.r=v
t=u.b+" is in bed "+(v+1)+" of the hospital. Keep up with their care."
this.OW(t)
return t},
bgZ(d){var w,v,u=this,t=u.e[d],s=t.a
if(s<0)return"This bed is empty."
if(t.b>70)return"The patient is cared for already."
w=u.x
if(w<=0)return y.k
u.x=w-1
t.b=100;++u.r
w=u.c
w===$&&C.c()
v=w[s].a.b+" was treated. +1 point."
u.OW(v)
return v},
ajr(d){var w,v=this
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
cMa(d){return d.r<0},
cJ_(d,e){var w,v,u,t,s,r,q,p,o,n=C.a([],x.I),m=d.d
m===$&&C.c()
if(m[e].c!=="outside")return n
for(m=D.d.gae(this.gFL()),w=new C.fh(m,this.gcM9()),v=this.d,u=0;w.C();){t=m.gS(0)
s=D.d.b7(v,new A.bHy(t))
r=t.a
q=(u&1)===1?22:0
p=s?"\ud83d\udcde ":""
o=t.gaBI(0)
t.gTj()
t=s?0:34
n.push(new A.a8O(r.a,e,-270+u*90,205+q,0,r.e,p+r.b+" "+o,s,t));++u}return n},
cSL(a2){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=l.r,j=l.w,i=l.x,h=l.y,g=l.z,f=l.as,e=l.Q,d=x.ez,a0=C.a([],d),a1=l.c
a1===$&&C.c()
w=a1.length
v=x.N
u=x.aU
t=0
for(;t<a1.length;a1.length===w||(0,C.L)(a1),++t){s=a1[t]
a0.push(C.F(["hunger",s.b,"health",s.c,"comfort",s.d,"sick",s.e,"alive",s.f,"bed",s.r],v,u))}a1=C.a([],x.f4)
for(w=l.e,r=w.length,q=x.x,t=0;t<w.length;w.length===r||(0,C.L)(w),++t){p=w[t]
a1.push(C.F(["res",p.a,"care",p.b,"heal",p.c],v,q))}d=C.a([],d)
for(w=l.d,r=w.length,t=0;t<w.length;w.length===r||(0,C.L)(w),++t){o=w[t]
d.push(C.F(["id",o.a,"res",o.b,"kind",o.c,"msg",o.d,"reward",o.e,"age",o.f],v,u))}w=x.R
u=C.T(v,w)
for(r=a2.gqr(),q=r.length,t=0;t<r.length;r.length===q||(0,C.L)(r),++t){n=r[t]
u.n(0,""+n.a,n.gjB())}w=C.T(v,w)
for(r=D.d.gae(a2.gqr()),q=new C.fh(r,new A.bHz());q.C();){m=r.gS(0)
w.n(0,""+m.a,m.gl3())}return C.F(["v",1,"seed",l.a,"points",k,"food",j,"medicine",i,"served",h,"saved",g,"clock",f,"nextCall",e,"res",a0,"beds",a1,"calls",d,"wired",u,"plumbed",w],v,x.C)},
Ck(d,e){return this.bkU(0,e)},
bkU(d,e){var w=0,v=C.j(x.H),u=1,t=[],s=this,r,q,p,o
var $async$Ck=C.e(function(f,g){if(f===1){t.push(g)
w=u}for(;;)switch(w){case 0:u=3
w=6
return C.b(C.az(),$async$Ck)
case 6:r=g
q=C.dV(s.cSL(e),x.N,x.C)
J.aF(q,"at",Date.now())
w=7
return C.b(r.au("String","ngmy_community_v1",D.R.ao(q,null)),$async$Ck)
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
return C.i($async$Ck,v)}}
A.a5Y.prototype={
U(){return new A.bi_()}}
A.bi_.prototype={
gbgL(){var w=this.r
return w===$?this.r=this.a.c:w},
a_(){this.a1()
this.YK()},
YK(){return this.bZ1()},
bZ1(){var w=0,v=C.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$YK=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:m={}
w=3
return C.b(A.aRE(),$async$YK)
case 3:l=e
if(t.c==null){w=1
break}m.a=null
if(l!=null){s=J.a5(l)
r=C.aJ(s.h(l,"seed"))
q=r==null?null:D.k.N(r)
if(q==null)q=1
r=$.Dv
if((r==null?null:r.b)===q){r.toString
t.e=r}else{r=A.aU2(q)
t.e=$.Dv=r
A.h_H(r,l)}m.a=A.fNk(l)
r=Date.now()
s=C.aJ(s.h(l,"at"))
s=s==null?null:D.k.N(s)
p=D.k.D((r-(s==null?Date.now():s))/1000*0.15,0,90)
while(p>0){o=p>5?5:p
s=m.a
r=t.e
r===$&&C.c()
s.aBq(0,o,r)
p-=o}}else{s=$.Dv
if(s==null)s=$.Dv=A.aU2(D.o.F(Date.now(),1e5))
t.e=s
s=s.b
n=A.fNj(s,s)
m.a=n
n.MN(t.e)}$.a34=m.a
t.m(new A.dKn(m,t))
t.f=C.du(D.fT,new A.dKo(t))
case 1:return C.h(u,v)}})
return C.i($async$YK,v)},
c3f(){var w,v,u,t=this,s=t.d
if(s==null||t.c==null)return
w=s.f
v=w.length===0?"":D.d.gL(w)
u=t.e
u===$&&C.c()
s.aBq(0,1,u)
if(w.length!==0&&D.d.gL(w)!==v)t.Il(D.d.gL(w))
if(++t.y%8===0)s.Ck(0,t.e)
t.m(new A.dKA())},
q(){var w,v=this,u=v.f
if(u!=null)u.a7(0)
u=v.x
if(u!=null)u.a7(0)
u=v.d
if(u!=null){w=v.e
w===$&&C.c()
u.Ck(0,w)}v.a2()},
Il(d){var w=this,v=w.x
if(v!=null)v.a7(0)
w.m(new A.dKu(w,d))
w.x=C.cM(D.tr,new A.dKv(w))},
aam(d){return this.bPJ(d)},
bPJ(d){var w=0,v=C.j(x.H),u,t=this,s,r,q
var $async$aam=C.e(function(e,f){if(e===1)return C.f(f,v)
for(;;)switch(w){case 0:q=B.Gx[d.b]
if(d.c==="power")s=q.c
else{r=q.d
s=r>=0?r:q.c}r=t.e
r===$&&C.c()
r.e=s
r=t.c
r.toString
w=3
return C.b(C.a6(r,!1).c8(C.e8(new A.dKj(),!1,null,x.H)),$async$aam)
case 3:if(t.c==null){w=1
break}r=t.d
if(r!=null)r.MN(t.e)
r=t.d
if(r!=null)r.Ck(0,t.e)
t.m(new A.dKk())
case 1:return C.h(u,v)}})
return C.i($async$aam,v)},
aiv(d){return this.cAo(d)},
cAo(d){var w=0,v=C.j(x.H),u,t=this,s
var $async$aiv=C.e(function(e,f){if(e===1)return C.f(f,v)
for(;;)switch(w){case 0:s=t.e
s===$&&C.c()
s.e=d.a.c
s=t.c
s.toString
w=3
return C.b(C.a6(s,!1).c8(C.e8(new A.dKD(),!1,null,x.H)),$async$aiv)
case 3:if(t.c==null){w=1
break}s=t.d
if(s!=null)s.MN(t.e)
t.m(new A.dKE())
case 1:return C.h(u,v)}})
return C.i($async$aiv,v)},
YL(d,e){var w=null,v=e.j(0.18),u=C.m(14),t=C.I(e.j(0.7),D.q,1)
return C.p(w,C.d(d,w,w,w,w,w,w,C.l(w,w,e,w,w,w,w,w,w,w,w,12.5,w,w,D.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),D.f,w,w,new C.o(v,w,t,u,w,w,D.n),w,w,w,w,A6.aga,w,w,w)},
Vt(d,e,f){var w=null
return new C.C(D.n3,C.A(C.a([new C.a7(62,w,C.d(d,w,w,w,w,w,w,Q.a6X,w,w,w),w),C.E(C.bw(C.m(6),C.m_(D.bF,w,w,8,w,D.k.D(e/100,0,1),new C.lT(f,x.e)),D.aq),1)],x.p),D.m,w,D.e,D.j,0,w,w),w)},
OX(d,e,f){var w=null,v=e==null,u=v?D.dp:f.j(0.22),t=C.m(12),s=C.I(v?D.b2:f,D.q,1)
return C.aE(w,C.p(w,C.d(d,w,w,w,w,w,w,C.l(w,w,v?D.c_:f,w,w,w,w,w,w,w,w,12.5,w,w,D.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),D.f,w,w,new C.o(u,w,s,t,w,w,D.n),w,w,w,w,D.nS,w,w,w),D.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,e,w,w,w,w,w,w,!1,D.a8)},
acK(d,e){return this.OX(d,e,D.aH)},
OY(d,e){var w=null,v=C.a([e.j(0.1),B.Ej],x.O),u=C.m(18)
return C.p(w,d,D.f,w,w,new C.o(w,w,C.I(e.j(0.5),D.q,1),u,w,new C.a8(D.b0,D.b6,D.x,v,w,w),D.n),w,w,w,D.dc,D.bj,w,w,w)},
c3d(d){return this.OY(d,D.b2)},
aXd(d,e,f){var w,v=null,u=this.gbgL()===d,t=u?D.aH.j(0.22):D.c.j(0.06),s=C.m(14),r=u?D.aH:D.b2
r=C.I(r,D.q,u?2:1)
w=f>0?e+" ("+f+")":e
return C.E(C.aE(v,C.p(v,C.av(C.d(w,v,v,v,v,v,v,C.l(v,v,u?D.aH:D.ad,v,v,v,v,v,v,v,v,12.5,v,v,D.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v,v,v),D.f,v,v,new C.o(t,v,r,s,v,v,D.n),v,v,v,D.jf,D.jw,v,v,v),D.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new A.dKC(this,d),v,v,v,v,v,v,!1,D.a8),1)},
avE(d,e){return this.aXd(d,e,0)},
bCN(d){var w,v,u,t,s,r,q,p,o,n=this,m=null,l=d.d
if(l.length===0)return new C.C(D.ew,C.v(B.d4k,D.m,m,D.e,D.j,0,D.p),m)
w=x.p
v=C.a([],w)
for(u=l.length,t=0;t<l.length;l.length===u||(0,C.L)(l),++t){s=l[t]
r=s.c==="power"
q=r?D.cj:D.cr
p=B.Gx[s.b]
o=r?"\u26a1 Power":"\ud83d\udeb0 Leak"
r=r?D.cj:D.cr
v.push(n.OY(C.v(C.a([new C.cn(D.aO,D.e,D.j,D.m,m,D.p,m,0,C.a([new A.abx(p.e,44,m),D.av,new C.bD(1,D.bi,new C.x(p.b,m,D.i4,m,m,m,m,m,m,m,m,m),m),n.YL(o+"  +"+s.e,r)],w),m),D.O,new C.x('"'+s.d+'"',m,B.f0y,m,m,m,m,m,m,m,m,m),D.S,new C.bH(D.a7,m,m,n.acK("\ud83d\udd27 Go and fix it",new A.dKi(n,s)),m)],w),D.F,m,D.e,D.j,0,D.p),q))}return C.v(v,D.m,m,D.e,D.j,0,D.p)},
c3e(d){var w,v,u,t,s,r,q,p,o,n=this,m=null,l=x.p,k=C.a([],l),j=d.c
j===$&&C.c()
w=j.length
v=0
for(;v<j.length;j.length===w||(0,C.L)(j),++v){u=j[v]
t=u.f
if(!t)s=D.b2
else s=u.gTj()==="fine"?D.b4:D.cg
t=t?1:0.5
r=u.a
q=u.gaBI(0)
p=u.gTj()
o=u.gTj()==="fine"?D.es:D.f3
r=C.a([new C.cn(D.aO,D.e,D.j,D.m,m,D.p,m,0,C.a([new A.abx(r.e,50,m),D.av,new C.bD(1,D.bi,C.v(C.a([new C.x(r.b+"  "+q,m,D.i4,m,m,m,m,m,m,m,m,m),new C.x(r.f,m,B.eVI,m,m,m,m,m,m,m,m,m),new C.x("Now: "+p,m,new C.G(!0,o,m,m,m,m,12.5,D.H,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m,m,m,m,m,m,m,m,m)],l),D.F,m,D.e,D.j,0,D.p),m)],l),m),D.O,n.Vt("Food",100-u.b,D.ct),n.Vt("Health",u.c,D.b4),n.Vt("Home",u.d,D.cr)],l)
if(u.f){q=n.acK("\ud83c\udf5e Feed",new A.dKp(n,d,u))
p=n.OX("\ud83d\udc8a Medicine",u.e?new A.dKq(n,d,u):m,D.by)
D.d.v(r,C.a([D.an,new C.BU(D.bz,8,8,D.br,C.a([q,p,n.OX("\ud83c\udfe5 Hospital",u.r>=0?m:new A.dKr(n,d,u),D.cg),n.OX("\ud83c\udfe0 Visit",new A.dKs(n,u),D.b1)],l),m)],l))}k.push(n.OY(new C.kC(t,C.v(r,D.F,m,D.e,D.j,0,D.p),m),s))}return C.v(k,D.m,m,D.e,D.j,0,D.p)},
bW8(d){var w,v,u,t,s=null,r=x.p,q=C.a([B.e4a],r)
for(w=d.e,v=0;v<w.length;++v){u=w[v].a<0
t=u?D.b2:D.cg
q.push(this.OY(u?new C.cn(D.aO,D.e,D.j,D.m,s,D.p,s,0,C.a([B.foG,D.av,new C.x("Bed "+(v+1)+": empty",s,B.eVu,s,s,s,s,s,s,s,s,s)],r),s):new C.fi(new A.dKm(this,d,v),s),t))}return C.v(q,D.m,s,D.e,D.j,0,D.p)},
cqJ(d){var w=this,v=null,u=x.p,t=w.OY(C.A(C.a([B.faT,D.av,B.bvC,w.acK("Buy",new A.dKx(w,d))],u),D.m,v,D.e,D.j,0,v,v),D.ct),s=w.OY(C.A(C.a([B.fvm,D.av,B.bvQ,w.OX("Buy",new A.dKy(w,d),D.by)],u),D.m,v,D.e,D.j,0,v,v),D.by),r=C.a([B.fpF,D.an,C.d("Calls answered: "+d.y+"\nPatients sent home better: "+d.z+"\nPeople lost: "+d.gcHe(),v,v,v,v,v,v,B.aPi,v,v,v)],u)
if(d.gFL().length===0)D.d.v(r,C.a([D.S,w.acK("Start a new community",new A.dKz(w))],u))
return C.v(C.a([t,s,w.c3d(C.v(r,D.F,v,D.e,D.j,0,D.p))],u),D.m,v,D.e,D.j,0,D.p)},
B(d){var w,v,u,t,s,r,q=this,p=null,o=q.d
if(o==null)w=D.lz
else{w=x.p
v=C.A(C.a([C.aH(p,p,p,p,M.ne,p,p,p,new A.dKF(d),p,p,p,p,p,p),B.bvk,q.YL("\u2b50 "+o.r,D.aH)],w),D.m,p,D.e,D.j,0,p,p)
u=q.YL("\ud83c\udf5e "+o.w,D.ct)
t=q.YL("\ud83d\udc8a "+o.x,D.by)
s=o.e
s=C.A(C.a([u,D.ab,t,D.ab,q.YL("\ud83c\udfe5 "+new C.a2(s,new A.dKG(),C.U(s).k("a2<1>")).gM(0)+"/"+s.length,D.cg)],w),D.m,p,D.bb,D.j,0,p,p)
t=C.A(C.a([q.aXd("calls","\ud83d\udcde Calls",o.d.length),q.avE("people","\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc67 People"),q.avE("hospital","\ud83c\udfe5 Hospital"),q.avE("shop","\ud83d\uded2 Shop")],w),D.m,p,D.e,D.j,0,p,p)
r=q.gbgL()
A:{if("people"===r){u=q.c3e(o)
break A}if("hospital"===r){u=q.bW8(o)
break A}if("shop"===r){u=q.cqJ(o)
break A}u=q.bCN(o)
break A}w=C.a([new C.C(B.btP,v,p),new C.C(D.AK,s,p),new C.C(B.buH,t,p),D.O,C.E(C.cB(C.a([u],w),p,D.LA,p,p,D.ah,!1),1)],w)
if(q.w!=null){v=D.e3.j(0.96)
u=C.m(14)
t=C.I(D.b4,D.q,1)
s=q.w
s.toString
w.push(C.p(p,C.d(s,p,p,p,p,p,p,B.eXS,p,p,p),D.f,p,p,new C.o(v,p,t,u,p,p,D.n),p,p,p,F.agc,D.bj,p,p,1/0))}w=C.v(w,D.m,p,D.e,D.j,0,D.p)}return C.c8(p,D.bX,C.bn(!0,w,!0,!1,D.af,!0,!0),p,!1,!1,p,p)}}
A.abx.prototype={
B(d){var w=null,v=this.d
return new C.a7(v,v,C.b3(w,w,w,new A.bcU(this.c,w),D.au),w)},
gY(d){return this.d}}
A.bcU.prototype={
a5(d,e){var w,v,u,t,s=e.a,r=s/2,q=$.W(),p=C.M()
p.r=D.dp.gp(0)
d.af(new C.u(r,r),r,p)
p=d.a
J.by(p.save())
q=new C.aO(q.r,D.ap,null,null,C.a([],x.v))
r=0+s
q.E(new C.kf(new C.a9(0,0,r,r)))
d.qh(0,q)
q=s*0.1
r=s*0.78
w=s*0.5
v=C.M()
u=this.b
v.r=u.c.gp(0)
d.hM(new C.a9(q,r,q+s*0.8,r+w),v)
v=s*0.27
r=s*0.16
t=C.M()
t.r=u.a.gp(0)
d.hM(new C.a9(v,r,v+s*0.46,r+s*0.56),t)
t=s*0.24
r=C.M()
r.r=u.b.gp(0)
d.f4(new C.a9(t,q,t+s*0.52,q+w),3.14,3.14,!0,r)
r=s*0.44
q=s*0.035
t=C.M()
t.r=D.pu.gp(0)
d.af(new C.u(s*0.42,r),q,t)
t=C.M()
t.r=D.pu.gp(0)
d.af(new C.u(s*0.58,r),q,t)
t=s*0.4
q=C.M()
q.b=D.ae
q.c=1.4
q.r=D.er.gp(0)
d.f4(new C.a9(t,w,t+s*0.2,w+s*0.12),0.2,2.7,!1,q)
p.restore()},
ar(d){return!1}}
A.mj.prototype={}
A.XG.prototype={}
A.zO.prototype={}
A.a3C.prototype={}
A.BS.prototype={
gjc(){return this.a==="ok"}}
A.a43.prototype={}
A.hk.prototype={}
A.Dq.prototype={}
A.py.prototype={}
A.avN.prototype={}
A.o4.prototype={}
A.aTX.prototype={
gBf(){var w=this.c
return w.c>=2&&A.afy(A.Ak(this.a),w).a==="ok"},
gdc(d){return this.c}}
A.a46.prototype={
gyD(){var w,v,u=this.id,t=u==="ptrap"
if(t||u==="faucet"){w=this.k2
if(w==null)return!1
if(t)if(w.a.a===3){u=w.b
u=new C.bc(u,C.a3(u).k("bc<2>")).da(0,new A.bP8())&&w.c}else u=!1
else u=A.foO(w)&&w.f
return u}v=this.k1
return v!=null&&v.c>=2&&A.afy(A.Ak(u),v).a==="ok"},
ga4I(){var w=this.id
if(w.length===0)w=this.gjB()
else w=w!=="fan"||this.gyD()
return w},
gTm(){var w=this.id
if(w.length===0)w=this.gjB()
else w=w!=="switch"||this.gyD()
return w},
gaFx(){var w=this.id
if(w.length===0)w=this.gjB()
else w=!(w==="outlet"||w==="gfci")||this.gyD()
return w},
gfq(d){var w,v=this.c
A:{if("bathroom"===v){w=110
break A}if("kitchen"===v){w=140
break A}if("living"===v){w=180
break A}if("hall"===v){w=480
break A}if("outside"===v){w=1200
break A}w=130
break A}return w},
gjm(d){var w,v=this.c
A:{if("bathroom"===v){w=100
break A}if("kitchen"===v){w=110
break A}if("living"===v){w=120
break A}if("hall"===v){w=180
break A}if("outside"===v){w=900
break A}w=112
break A}return w},
gjB(){var w,v=this
if(v.c!=="outside"){w=v.id
if(w.length!==0)w=w==="ptrap"||w==="faucet"||v.gyD()
else{w=v.CW
w=w==null?null:w.gaD5()
if(w==null)w=!v.ay}}else w=!0
return w},
gl3(){var w=this,v=w.c
if(v==="bathroom"||v==="kitchen"){v=w.id
if(v.length!==0)v=!(v==="ptrap"||v==="faucet")||w.gyD()
else{v=w.cx
v=v==null?null:v.gBf()
if(v==null)v=!w.ch}}else v=!0
return v},
KZ(d){var w,v,u,t
for(w=this.x,v=w.length,u=0;u<v;++u){t=w[u]
if(t.a===d)return t}return null},
eN(d,e,f,g){var w=this,v=w.y++,u=f==null?0:f,t=new A.a43(v,e,u,g==null?w.gjm(0)*0.6:g)
w.x.push(t)
w.aC5(0,t)
return t},
K(d,e){return this.eN(0,e,null,null)},
aC5(d,e){var w,v,u,t=e.b,s=B.lT.h(0,t)
s.toString
w=(e.e&1)===1
v=w?s.d:s.c
u=w?s.c:s.d
s=v/2
e.c=D.k.D(e.c,-this.gfq(0)/2+s+1,this.gfq(0)/2-s-1)
s=u/2
e.d=D.k.D(e.d,s+1,this.gjm(0)-s-1)
if(D.d.t(B.ax2,t)){e.c=D.k.V(e.c/40)*40
e.d=D.k.V(e.d/40)*40}}}
A.aU1.prototype={
bvP(d){var w,v,u
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
break B}u=A.yE(0,w,v,0,0,1,1,C.a([],x.D))
u.id=d
u.dx=d==="fan"?"fan":"light"
if(d==="gfci")u.Q=5
u.ch=u.ay=!1
u.Q=v==="bathroom"||v==="kitchen"?5:0
this.asD(u)
u.fr="bangtv"
u.fy=!0
u.go=Math.max(0,D.d.bd(E.k_,new A.bPJ()))
this.d=C.a([u],x.A)},
cN2(){var w,v,u,t,s,r
for(w=this.gqr(),v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u){t=w[u]
t.cx=t.CW=null
s=t.ay=!0
r=t.c
t.ch=r!=="bathroom"?r==="kitchen":s
t.db=!1
t.cy.a9(0)
D.d.a9(t.dy)}},
c3g(){var w,v,u,t,s,r,q,p=this,o="back",n="bedroom",m="bathroom",l=new C.eJ()
l.dB(p.b)
w=new A.bPK()
v=x.D
u=C.a([B.byz,B.byw,B.byx],v)
for(t=0;t<7;++t){s=B.c8f[t]
u.push(new A.o4(!0,o,-150+s.a*50,s.b))}r=C.a([A.yE(0,"Bedroom 1",n,0,0,2,2,C.a([w.$1(-48)],v)),A.yE(1,"Bedroom 2",n,2,0,2,2,C.a([w.$1(-48)],v)),A.yE(2,"Bathroom 1",m,4,0,1,2,C.a([B.Zm],v)),A.yE(3,"Bedroom 3",n,5,0,2,2,C.a([w.$1(-48)],v)),A.yE(4,"Bathroom 2",m,7,0,2,2,C.a([B.Zm],v)),A.yE(5,"Hall","hall",0,2,9,1,u),A.yE(6,"Bedroom 4",n,0,3,2,2,C.a([w.$1(-48)],v)),A.yE(7,"Bedroom 5",n,2,3,2,2,C.a([w.$1(-48)],v)),A.yE(8,"Bathroom 3",m,4,3,1,2,C.a([B.Zm],v)),A.yE(9,"Kitchen","kitchen",5,3,2,2,C.a([new A.o4(!1,o,-26,5),B.byB],v)),A.yE(10,"Living room","living",7,3,2,2,C.a([new A.o4(!1,o,-70,5),B.byA,B.byy],v)),A.yE(11,"Garden","outside",0,5,9,1,C.a([B.byv],v))],x.A)
p.d=r
for(t=0;t<12;++t){q=r[t]
v=q.c
if(v==="outside"){p.asD(q)
continue}q.dx=v==="bedroom"?"fan":"light"
q.ay=l.aj()<0.6
q.ch=(v==="bathroom"||v==="kitchen")&&l.aj()<0.7
D.d.fZ(q.z,0,3,l.aB(8))
A:{if("bathroom"===v){v=5+l.aB(2)
break A}if("kitchen"===v){v=5+l.aB(2)
break A}if("bedroom"===v){v=2+l.aB(3)
break A}if("living"===v){v=l.aB(2)
break A}v=l.aB(2)
break A}q.Q=v
q.as=l.aB(4)
p.asD(q)}v=p.d
u=v[5]
u.fx=u.fr="tv100"
u.fy=!0
v[3].ay=!0
v[2].ch=!0},
asD(d){var w,v,u="plant",t="lamppost",s="fence",r=d.gfq(0)/2
switch(d.c){case"bedroom":d.eN(0,"rug",0,d.gjm(0)*0.55)
d.eN(0,"bed",24,46)
d.eN(0,"nightstand",-8,14)
d.eN(0,"wardrobe",-r+12,70).e=1
d.eN(0,"desk",r-14,100).e=3
break
case"living":d.eN(0,"rug",0,70)
d.eN(0,"sofa",0,100)
d.eN(0,"coffee",0,68)
d.eN(0,"armchair",66,70)
d.eN(0,u,76,14)
d.eN(0,"lamp",-76,14)
break
case"kitchen":d.eN(0,"dining",0,78)
d.eN(0,"chair",-24,78).e=1
d.eN(0,"chair",24,78).e=3
d.eN(0,u,58,20)
break
case"bathroom":d.eN(0,"rug",0,62).e=0
d.eN(0,u,d.gfq(0)/2-12,d.gjm(0)-12)
break
case"outside":for(w=-320;w<=320;w+=40)d.eN(0,w===0?"roadcross":"road",w,360)
for(v=320;v>=160;v-=40)d.eN(0,"road",0,v).e=1
d.eN(0,"shop",-200,270)
d.eN(0,"hospital",210,275)
d.eN(0,"firestation",-340,275)
d.eN(0,"school",360,275)
d.eN(0,"house2",-140,150)
d.eN(0,"car",-120,360)
d.eN(0,"ambulance",120,360).e=2
d.eN(0,"firetruck",-340,318)
d.eN(0,"tree",-190,60)
d.eN(0,"tree",190,90)
d.eN(0,"pine",250,40)
d.eN(0,"pine",-260,30)
d.eN(0,"bush",-70,20)
d.eN(0,"bush",70,20)
d.eN(0,"flowers",-30,24)
d.eN(0,"flowers",30,24)
d.eN(0,t,40,330)
d.eN(0,t,-80,330)
d.eN(0,"bench",120,190)
d.eN(0,"pond",160,470)
d.eN(0,"dog",60,60)
d.eN(0,"cat",-50,80)
d.eN(0,"cow",-300,520)
d.eN(0,"cow",-240,560)
d.eN(0,"sheep",-180,540)
d.eN(0,"horse",260,560)
d.eN(0,"chicken",-100,500)
d.eN(0,s,-270,480)
d.eN(0,s,-206,480)
d.eN(0,s,-142,480)
break
case"hall":default:}},
gqr(){var w,v,u,t=C.a([],x.A),s=this.d
s===$&&C.c()
w=s.length
v=0
for(;v<s.length;s.length===w||(0,C.L)(s),++v){u=s[v]
if(u.c!=="outside")t.push(u)}return t},
gcTv(){var w=this.gqr()
return new C.a2(w,new A.bPO(),C.U(w).k("a2<1>")).gM(0)},
gcQm(){var w=this.d
w===$&&C.c()
return new C.a2(w,new A.bPN(),C.U(w).k("a2<1>")).gM(0)},
gcQl(){var w=this.d
w===$&&C.c()
return new C.a2(w,new A.bPM(),C.U(w).k("a2<1>")).gM(0)},
gcJa(){var w=this.gqr()
return new C.a2(w,new A.bPL(),C.U(w).k("a2<1>")).gM(0)}}
A.N7.prototype={
U(){var w,v=new C.BJ()
$.CE()
v.j2(0)
w=x.S
return new A.aCw(v,B.aw7,C.aX(x.N),new C.cs(null,x.eF),C.T(w,x.i),C.aX(w))}}
A.aCw.prototype={
gFe(){var w,v,u=$.a34
if(u!=null){w=u.a
v=this.d
v===$&&C.c()
v=w===v.b
w=v}else w=!1
return w?u:null},
axM(){var w,v,u=this.gFe()
if(u==null)u=null
else{w=this.d
w===$&&C.c()
v=w.d
v===$&&C.c()
w=u.cJ_(w,v[w.e].a)
u=w}this.fr=u==null?B.aw7:u},
gbfJ(){var w=this.d
w===$&&C.c()
w=w.gqr()
return new C.a2(w,new A.e2V(),C.U(w).k("a2<1>")).gM(0)},
a_(){var w,v,u,t,s=this
s.a1()
w=s.a.r
if(w.length!==0)w=s.d=A.hsX(w)
else{w=$.Dv==null
if(w){w=D.o.F(Date.now(),1e5)
$.Dv=A.aU2(w)
s.b5=!0}w=$.Dv
w.toString
w=s.d=w}v=s.a
w.c=v.d||w.c
u=new A.AG(-0.05,0.1,120,B.fzg,$.aw())
u.f=560
s.e=u
if(v.f.length!==0){w=w.gqr()
t=new C.a2(w,new A.e2S(s),C.U(w).k("a2<1>"))
if(!t.gam(0)){w=s.d
w===$&&C.c()
w.e=t.gL(0).a}}A.aTO($.aOA)
A.hAn()
s.ahj()
s.axM()
w=s.d
w===$&&C.c()
v=w.d
v===$&&C.c()
s.f=A.hfi(v[w.e],!1,B.aMh,"look",s.gbfJ(),s.fr,0)
s.acL(!0)
s.fx=C.du(D.fH,new A.e2T(s))
$.aU.x1$.push(new A.e2U(s))},
q(){var w=this,v=w.p1
if(v!=null)v.a7(0)
v=w.ch
if(v!=null)v.a7(0)
v=w.dx
if(v!=null)v.a7(0)
v=w.fx
if(v!=null)v.a7(0)
v=w.y2
if(v!=null)v.a7(0)
v=w.x2
if(v!=null)v.a7(0)
w.a2()},
bYx(){var w,v=this.d
v===$&&C.c()
w=v.a
A:{if("switch"===w){v="The ceiling light is already in. Tap the red switch on the wall and wire it. Then flip it to see the light work."
break A}if("outlet"===w){v="Tap the red outlet on the wall and wire it. Then plug in a lamp or a TV to test it."
break A}if("gfci"===w){v="Tap the red GFCI outlet and wire it. Then plug in a hair dryer to test it."
break A}if("fan"===w){v="Tap the ceiling fan and wire it. Then flip the wall switch and watch it spin."
break A}if("ptrap"===w){v="The sink has no drain yet. Tap the sink and build the drain under it."
break A}v="The faucet is not connected yet. Tap the sink and connect the hoses."
break A}return v},
acL(d){var w,v,u,t,s,r,q=this,p=q.d
p===$&&C.c()
w=p.d
w===$&&C.c()
v=w[p.e]
u=-0.05
if(q.z){t=new A.D(0,40,v.gjm(0)*0.5)
s=Math.max(v.gfq(0),v.gjm(0))*0.6
p=q.e
p===$&&C.c()
p.e=20
p.f=260
p.r=-1.2
p.w=1.2
p.Cn(!0)
r=0.12}else if(v.c==="outside"){p=q.e
p===$&&C.c()
p.e=30
p.f=1100
p.r=0.03
p.w=1.35
p.Cn(!0)
t=B.fze
s=540
r=0.35
u=-0.25}else if(q.x){t=new A.D(0,40,v.gjm(0)*0.3)
s=Math.max(v.gfq(0)*0.8,v.gjm(0)*0.9)+10
p=q.e
p===$&&C.c()
p.e=6
p.f=s*1.6
p.r=0.03
p.w=1.35
p.Cn(!0)
r=0.1}else{t=new A.D(0,30,v.gjm(0)*0.45)
s=(v.gfq(0)*1.2>v.gjm(0)*1.4?v.gfq(0)*1.2:v.gjm(0)*1.4)+30
p=q.e
p===$&&C.c()
p.e=6
p.f=560
p.r=0.1
p.w=1.35
p.Cn(!0)
r=0.5
u=-0.12}p=q.e
if(d){p===$&&C.c()
p.d=t
p.c=s
p.a=u
p.b=r}else{p===$&&C.c()
p.lW(s,r,t,u)}},
In(){return this.acL(!1)},
bK_(d,e){var w,v,u,t,s,r,q,p,o=this,n=o.e
n===$&&C.c()
w=n.cJi(d,e)
if(w==null)return
n=o.d
n===$&&C.c()
v=n.d
v===$&&C.c()
u=v[n.e]
t=o.R8
if(t!=null){n=t.c
n===$&&C.c()
n.at=new C.y(D.k.D(w.a,-118,118),D.k.D(w.c,12,186))}else if(o.z){s=D.k.D(w.a,-u.gfq(0)/2+10,u.gfq(0)/2-10)
r=D.k.D(w.c,10,u.gjm(0)-10)
o.e.ao2(new A.D(s,48,r))}else{n=u.c==="outside"
if(n&&o.k4&&o.ok!=null){n=o.ok
n.toString
n.at=new C.y(D.k.D(w.a,-u.gfq(0)/2+12,u.gfq(0)/2-12),D.k.D(w.c,-290,u.gjm(0)-12))}else{v=o.e
q=w.a
p=w.c
if(n)v.zg(Math.max(60,v.c*0.55),new A.D(q,30,p))
else{n=D.k.D(q,-u.gfq(0)/2,u.gfq(0)/2)
p=D.k.D(p,0,u.gjm(0))
v.zg(Math.max(40,o.e.c*0.6),new A.D(n,36,p))}}}A.ku(560,50,0.25,"tri")},
j4(){var w,v,u,t,s,r,q,p,o=this
o.axM()
w=o.R8
if(w!=null){v=w.e
v===$&&C.c()}else{v=o.d
v===$&&C.c()
u=v.d
u===$&&C.c()
v=u[v.e]
u=o.r
t=o.Q
s=o.gbfJ()
r=o.z
q=o.fr
p=o.rx
v=A.hfi(v,r,p!=null?C.et([100+p.a],x.S):B.aMh,u,s,q,t)}o.f=v},
Io(d,e){var w=this,v=w.ch
if(v!=null)v.a7(0)
w.m(new A.e29(w,d,e))
w.ch=C.cM(D.ed,new A.e2a(w))},
il(d){return this.Io(d,!0)},
QT(d){this.m(new A.e2b(this,d))
A.ku(660,50,0.25,"tri")},
avF(d,e){var w,v=this,u=v.d
u===$&&C.c()
if(d!==u.e){u=u.d
u===$&&C.c()
u=d>=u.length}else u=!0
if(u)return
if(v.k4&&d!==11)v.azG()
v.ry=v.rx=v.R8=null
if(!e&&v.cx!=null)v.a1s()
v.m(new A.e1r(v,d))
u=v.d
w=u.d
w===$&&C.c()
u=w[u.e]
if(u.c==="outside")v.ok=A.h8R(u,0,24)
v.In()
A.ku(520,60,0.25,"tri")},
DM(d){return this.avF(d,!1)},
aV4(d){var w,v,u,t=this
if(d===700){w=t.d
w===$&&C.c()
v=w.d
v===$&&C.c()
return v[w.e].gaFx()}if(d===701){w=t.d
w===$&&C.c()
v=w.d
v===$&&C.c()
w=v[w.e]
return w.id.length!==0||w.gjB()}if(d===702){w=t.d
w===$&&C.c()
v=w.d
v===$&&C.c()
return v[w.e].gTm()}if(d===703){w=t.d
w===$&&C.c()
v=w.d
v===$&&C.c()
return v[w.e].ga4I()}if(d>=800&&d<820){u=d-800
w=t.d
w===$&&C.c()
v=w.d
v===$&&C.c()
w=v[w.e].dy
return u<w.length&&w[u].gBf()}if(d===720){w=t.d
w===$&&C.c()
v=w.d
v===$&&C.c()
return v[w.e].gaFx()}if(d===721){w=t.d
w===$&&C.c()
v=w.d
v===$&&C.c()
w=v[w.e]
return w.id.length!==0||w.gjB()}if(d>=722&&d<728){u=d-720-2
w=t.d
w===$&&C.c()
v=w.d
v===$&&C.c()
w=v[w.e].dy
return u<w.length&&w[u].gBf()}w=t.d
w===$&&C.c()
v=w.d
v===$&&C.c()
return v[w.e].gjB()},
b5W(){var w,v,u=this,t=u.d
t===$&&C.c()
w=t.d
w===$&&C.c()
v=w[t.e].dx==="fan"
u.m(new A.e2m(u))
t=u.d
w=t.d
w===$&&C.c()
if(w[t.e].db)t=v?"The fan spins.":"The light is on."
else t=v?"The fan stops.":"The light is off."
u.il(t)
t=u.d
w=t.d
w===$&&C.c()
A.ku(w[t.e].db?900:500,60,0.25,"tri")},
c3l(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this
if(d===0)return
if(d>=900&&d<920){j.cm9(d-900)
return}if(d>=100&&d<200){w=j.d
w===$&&C.c()
v=w.d
v===$&&C.c()
u=v[w.e].KZ(d-100)
w=j.d
v=w.d
v===$&&C.c()
t=!1
if(v[w.e].c==="outside")if(j.r!=="furniture")if(u!=null){w=u.b
w=w==="hospital"||w==="shop"}else w=t
else w=t
else w=t
if(w){j.x9(u.b)
return}if(j.r!=="furniture")return
j.m(new A.e1H(j,d))
w=j.d
v=w.d
v===$&&C.c()
s=v[w.e].KZ(j.Q)
if(s!=null)j.il(B.lT.h(0,s.b).a+": move it with the arrows.")
return}if(d===300||d===301||d===302){if(j.r!=="walls")return
j.m(new A.e1I(j,d))
j.il("Wall picked. Choose a paint colour.")
return}if(d>=600&&d<620){r=d-600
w=j.d
w===$&&C.c()
v=w.d
v===$&&C.c()
if(r>=v[w.e].w.length)return
if(j.r==="doors"){j.m(new A.e1J(j,r))
w=j.d
v=w.d
v===$&&C.c()
A.ku(v[w.e].at.t(0,r)?700:450,70,0.25,"tri")
return}j.bJU(r)
return}w=d===700
v=!w
q=!0
if(v)if(d!==701){if(d!==702)if(d!==703)if(!(d>=800&&d<820))t=d>=720&&d<728
else t=q
else t=q
else t=q
q=t}if(j.w&&q){p=j.aV4(d)
A.ku(p?1400:500,160,0.25,"tri")
w=p?"The tester glows and beeps: LIVE, 120 volts. Never touch a live wire. Switch the breaker off first.":"The tester stays dark: no power here. It still needs wiring."
j.Io(w,!p)
return}if(!v||d===701){if(j.aV4(d))j.axn(w?0:1)
else j.aRt()
return}if(d>=800&&d<820){r=d-800
w=j.d
w===$&&C.c()
v=w.d
v===$&&C.c()
w=v[w.e].dy
if(r>=w.length)return
o=w[r]
if(!o.gBf())j.aiC(r)
else if(o.a==="switch")j.b5W()
else j.axn(2+r)
return}if(d===702||d===703){w=j.d
w===$&&C.c()
v=w.d
v===$&&C.c()
if(v[w.e].gTm()){w=j.d
v=w.d
v===$&&C.c()
w=!v[w.e].ga4I()}else w=!0
if(w)j.aRt()
else j.b5W()
return}if(d>=730&&d<=733){w=d===730||d===732
v=j.d
if(w){v===$&&C.c()
w=v.d
w===$&&C.c()
t=v.e
n=w[t].fr}else{v===$&&C.c()
w=v.d
w===$&&C.c()
t=v.e
m=w[t]
l=m.fx
n=l==null?m.fr:l}if(n==null)return
v===$&&C.c()
if(!w[t].fy){j.m(new A.e1K(j))
w=j.d
v=w.d
v===$&&C.c()
j.il("The TV is on and playing "+E.k_[v[w.e].go].a+".")}else{k=A.bzF(n)
w=j.c
w.toString
H.fKS(w,0,k.a,!0,D.v3,k.b)}return}if(d>=720&&d<728){w=j.d
w===$&&C.c()
v=w.d
v===$&&C.c()
t=d-720
n=v[w.e].cy.h(0,t)
if(n==null)return
k=A.bzF(n)
if(k.d>0||k.e){w=j.c
w.toString
H.fKS(w,0,k.a,!0,D.v3,k.b)}else j.axn(t)
return}if(d===710||d===711||d===712||d===713){w=j.d
w===$&&C.c()
v=w.d
v===$&&C.c()
if(!v[w.e].gl3())if(j.d.a.length!==0)j.DN()
else j.a_0()
else{w=j.f
w===$&&C.c()
r=w.b.h(0,d)
if(r!=null)j.il(r.a+": "+r.b)}}},
bJU(d){var w,v,u,t=this.d
t===$&&C.c()
w=t.d
w===$&&C.c()
v=w[t.e].w[d].d
u=v<w.length?w[v].b:"the next room"
t=this.c
t.toString
return C.bV(E.mb,null,new A.e1p(this,u,d,v),t,!0,!0,!1,D.kY,!1,!1,x.H)},
x9(d){return this.bE9(d)},
bE9(d){var w=0,v=C.j(x.H),u,t=this,s
var $async$x9=C.e(function(e,f){if(e===1)return C.f(f,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=3
return C.b(C.bV(D.K,null,new A.e11(d),s,!0,!0,!0,null,!1,!1,x.H),$async$x9)
case 3:if(t.c==null){w=1
break}t.m(new A.e12(t))
case 1:return C.h(u,v)}})
return C.i($async$x9,v)},
cm9(d){var w,v,u=this.gFe()
if(u!=null){w=u.c
w===$&&C.c()
w=d>=w.length}else w=!0
if(w)return C.f7(null,x.H)
w=u.c
w===$&&C.c()
v=w[d]
w=this.c
w.toString
return C.bV(E.mb,null,new A.e25(this,v,u),w,!0,!0,!0,D.kY,!1,!1,x.H)},
axn(d){var w=this.c
w.toString
return C.bV(E.mb,null,new A.e1Q(this,d),w,!0,!0,!1,D.kY,!1,!1,x.H)},
cys(){var w=this.c
w.toString
return C.bV(E.mb,null,new A.e2J(this),w,!0,!0,!0,D.kY,!1,!1,x.H)},
cxU(){var w=this.c
w.toString
return C.bV(E.mb,null,new A.e2w(this),w,!0,!0,!0,D.kY,!1,!1,x.H)},
b4E(d,e){var w,v,u,t=this,s=t.dx
if(s!=null)s.a7(0)
s=t.d
s===$&&C.c()
s=s.gqr()
w=s.length
v=0
for(;v<w;++v){u=s[v]
if(u.fr==null)u.fr="tv100"
if(u.c==="hall")if(u.fx==null)u.fx="tv100"
u.fy=!0}t.z=!1
s=x.fG
w=t.d
if(e){s=new A.aU3(!0,w,d,C.a([],s))
s.aXp()}else{s=new A.aU3(!1,w,d,C.a([],s))
s.aXp()}t.cx=s
t.cy=t.CW.gpt()/1000
t.x=!0
t.r="look"
t.w=!1
s=D.d.gL(t.cx.d)
t.go.a9(0)
t.id=!1
t.m(new A.e2g(t,s.a))
t.In()
t.dx=C.du(D.jb,new A.e2h(t))
t.m(new A.e2i())},
ctI(d){return this.b4E(d,!1)},
bJV(d,e){var w,v=d.w[e],u=v.b
A:{if("left"===u){w=new A.D(-d.gfq(0)/2,40,v.c+d.gjm(0)/2-40)
break A}if("right"===u){w=new A.D(d.gfq(0)/2,40,v.c+d.gjm(0)/2-40)
break A}w=new A.D(v.c,40,0)
break A}return w},
cxV(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=i.cx
if(h==null||i.c==null)return
w=i.CW.gpt()/1000-i.cy
v=h.e
v===$&&C.c()
if(w>=v){i.a1s()
i.il("The tour is over. Press Tour to walk the house again.")
return}if(i.id)return
u=h.b8Q(w)
v=i.d
v===$&&C.c()
t=v.e
if(u.a!==t){i.ai0(u)
return}v=v.d
v===$&&C.c()
s=v[t]
v=u.ay
if(v>=0&&v<s.w.length){t=s.ax
r=t.h(0,v)
if(r==null)r=0
q=u.e
if(!q&&u.at<0){p=r<1.25
if(p)t.n(0,v,1.25)}else{p=q&&r>0
if(p)t.n(0,v,Math.max(0,r-0.3))}}else p=!1
v=u.at
t=v>=0
if(t&&v<s.w.length){o=1.25*D.dV.aw(0,D.k.D(u.ax,0,1))
q=s.ax
n=q.h(0,v)
if((n==null?0:n)!==o){q.n(0,v,o)
p=!0}}q=u.as
if(D.a.a0(q,"ad")&&i.go.K(0,q)){s.go=D.o.F(s.go+1,8)
A.ku(1000,50,0.25,"tri")
p=!0}if(p)i.m(i.gr2())
m=Math.max(s.gfq(0)*0.95,s.gjm(0)*1.15)+20
t=t&&v<s.w.length
q=u.b
if(t){l=i.bJV(s,v)
k=D.dC.aw(0,D.k.D(u.ax,0,1))
j=s.w[v].b
v=i.e
v===$&&C.c()
t=j==="back"?14:0
if(j==="left")n=0.55*k
else n=j==="right"?-0.55*k:-0.03
v.lW(m+(70-m)*k,0.2-0.07*k,new A.D(l.a*0.9+q*0.1,36,l.c+t),n)}else{v=i.e
v===$&&C.c()
v.lW(m,0.24,new A.D(q*0.7,30,u.c*0.6+8),-0.05-q/(s.gfq(0)/2)*0.2)}if(u.Q!==i.dy)i.m(new A.e2x(i,u))},
ai0(d){return this.cxT(d)},
cxT(d){var w=0,v=C.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j
var $async$ai0=C.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:l={}
r.id=!0
l.a=null
t=4
p=$.aU.ak$.x.h(0,r.k1)
p=p==null?null:p.gb8()
q=x.cU.a(p)
p=q
p=p==null?null:p.lT(0.6).cM(0,D.kg)
j=l
w=7
return C.b(x.fa.b(p)?p:C.dP(p,x.eT),$async$ai0)
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
case 6:if(r.c==null||r.cx==null){r.id=!1
w=1
break}p=r.d
p===$&&C.c()
n=p.d
n===$&&C.c()
n[p.e].ax.a9(0)
r.avF(d.a,!0)
p=r.d
n=p.d
n===$&&C.c()
m=n[p.e]
p=d.ay
if(p>=0&&p<m.w.length)m.ax.n(0,p,1.25)
r.m(new A.e2n(l,r))
l=r.e
l===$&&C.c()
l.d=new A.D(d.b,36,d.c+4)
l.c=70
l.a=-0.03
l.b=0.15
r.id=!1
case 1:return C.h(u,v)
case 2:return C.f(s.at(-1),v)}})
return C.i($async$ai0,v)},
a1s(){var w,v,u,t=this,s=t.dx
if(s!=null)s.a7(0)
t.dx=null
s=t.d
s===$&&C.c()
s=s.d
s===$&&C.c()
w=s.length
v=0
for(;v<s.length;s.length===w||(0,C.L)(s),++v){u=s[v]
u.at.a9(0)
u.ax.a9(0)}t.k2=null
t.id=!1
t.m(new A.e2l(t))
t.In()},
cgX(){var w,v,u,t,s,r,q,p,o=this,n=o.cx
if(n!=null)return n.b8Q(o.CW.gpt()/1000-o.cy)
w=o.ok
if(o.rx!=null)return null
if(w!=null){v=o.d
v===$&&C.c()
u=v.d
u===$&&C.c()
v=u[v.e].c==="outside"}else v=!1
if(v){v=o.d
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
return A.cfP(0,-1,"",!1,w.Q,"",-1,q,!1,!1,!1,v.a,p,r,u,s,t)}return null},
ctF(){var w,v=this,u=v.d
u===$&&C.c()
w=u.d
w===$&&C.c()
u=w[u.e]
if(u.c!=="outside")return
w=v.ok;(w==null?v.ok=A.h8R(u,0,24):w).TF(0)
v.k4=!0
v.p4=Date.now()
u=v.p1
if(u!=null)u.a7(0)
v.p1=C.du(D.Xr,new A.e2e(v))
v.m(new A.e2f())
v.il("Slide the round stick to walk. Walk up to a door to go in: the house, the hospital or the shop. Double tap a spot to go there.")},
azG(){var w,v=this
v.k4=!1
v.p3=v.p2=0
v.RG=!1
w=v.p1
if(w!=null)w.a7(0)
v.p1=null
w=v.ok
if(w!=null)w.x=!1
v.m(new A.e2k())},
cAu(){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=l.R8,j=k==null
if(j)w=null
else{v=k.c
v===$&&C.c()
w=v}if(w==null)w=l.ok
v=!0
if(w!=null)if(l.c!=null)if(j){v=l.d
v===$&&C.c()
u=v.d
u===$&&C.c()
v=u[v.e].c!=="outside"}else v=!1
if(v)return
t=Date.now()
s=D.k.D((t-l.p4)/1000,0,0.1)
l.p4=t
w.TF(0)
w.z=l.RG&&l.rx==null
w.cIR(s)
v=l.e
v===$&&C.c()
r=Math.sin(v.a)
q=Math.cos(l.e.a)
v=l.p3
u=l.p2
if(u!==0||v!==0){w.at=null
p=w.aJw(0,r*v+q*u,-q*v+r*u,s)}else p=w.cBU(0,s)
v=!p
if(v)w.x=!1
if(!v||w.Q>0)l.e.ao2(new A.D(w.f,30,w.r))
if(!j){o=k.fA(0,l.gFe())
if(o!=null){l.il(o)
l.m(l.gr2())}j=k.c
j===$&&C.c()
if(j.r>178&&Math.abs(j.f)<36)l.bYo()
return}if(p&&l.rx==null){if(Math.abs(w.f)<24){j=w.r
j=j>-2&&j<14}else j=!1
if(j)if(!(Math.abs(w.w)>2.2)){j=w.at
j=j!=null&&j.b<4}else j=!0
else j=!1
if(j){l.azG()
l.DM(10)
l.il("You are inside the living room. Use Go outside to come back out.")
return}j=l.d
j===$&&C.c()
v=j.d
v===$&&C.c()
j=D.d.gae(v[j.e].x)
v=new C.fh(j,new A.e2N())
while(v.C()){u=j.gS(0)
n=u.b
m=B.lT.h(0,n)
m.toString
if(Math.abs(w.f-u.c)<20&&Math.abs(w.r-(u.d+m.d/2+10))<12&&Math.abs(w.w)>2){l.p3=l.p2=0
k=new A.bGW(n,u,C.aX(x.S))
j=n==="hospital"
k.c=new A.b7b(null,-118,118,12,186,0,166,3.141592653589793,j?B.d73:B.cY7)
k.d=j?B.clM:B.cQX
v=$.a34
k.B(v!=null&&v.a===l.d.b?v:null)
l.R8=k
l.ry=null
v=l.e
v.e=60
v.f=420
v.r=0.15
v.w=1.35
v.Cn(!0)
v=l.e
v.Q=new A.D(0,30,110)
v.as=260
v.at=0
v.ax=0.55
v.aZ()
l.gr2().$0()
l.c.e7()
l.il(j?"The hospital. Walk onto the blue mat to admit the sick, and up to a bed to treat the patient. Walk to the green mat to go out.":"The shop. Walk onto the yellow mat for food and the purple mat for medicine. Walk to the green mat to go out.")
A.ku(660,80,0.25,"tri")
return}}}l.cyP(w)},
bYo(){var w,v,u=this,t=u.R8,s=u.ok
if(t==null||s==null)return
w=t.b
v=B.lT.h(0,w.b)
v.toString
u.R8=null
u.p3=u.p2=0
s.f=w.c
s.r=w.d+v.d/2+28
s.w=0
s.at=null
s.TF(0)
u.m(u.gr2())
u.In()
v=u.e
v===$&&C.c()
v.ao2(new A.D(s.f,30,s.r))
u.il("You are back in the city.")},
cyP(d){var w,v,u,t,s,r,q,p=this,o={}
o.a=null
if(p.rx!=null)o.a=new C.add(p.gbPb(),"\ud83d\udeaa Get out")
else{w=p.d
w===$&&C.c()
v=w.d
v===$&&C.c()
w=v[w.e].x
v=w.length
u=0
for(;u<w.length;w.length===v||(0,C.L)(w),++u){t=w[u]
s=Math.sqrt(Math.pow(d.f-t.c,2)+Math.pow(d.r-t.d,2))
r=t.b
q=B.lT.h(0,r).a.toLowerCase()
if(D.d.t(B.Pq,r)&&s<36){o.a=new C.add(new A.e2K(p,t),"\ud83c\udf4e Feed the "+q)
break}if(D.d.t(B.d1k,r)&&s<60){o.a=new C.add(new A.e2L(p,t),"\ud83d\ude97 Get in the "+q)
break}}}w=o.a
w=w==null?null:w.b
v=p.ry
if(w!=(v==null?null:v.b))p.m(new A.e2M(o,p))},
bMs(d){var w,v=this,u=v.to,t=d.a,s=u.h(0,t),r=B.lT.h(0,d.b).a
if(s!=null&&v.CW.gpt()/1000-s<30){v.Io("The "+r.toLowerCase()+" has just eaten. Come back in a little while.",!1)
return}u.n(0,t,v.CW.gpt()/1000)
u=v.gFe()
if(u==null)w=null
else{++u.r
w="You fed the "+r.toLowerCase()+". +1 point."
u.OW(w)}if(w==null)w="You fed the "+r.toLowerCase()+"."
A.ku(880,90,0.25,"tri")
v.m(new A.e1q())
v.il(w)},
bP0(d){var w=this,v=w.ok
if(v==null)return
w.rx=d
v.CW=d.a
v.ay=22
v.ch=2.4
v.f=d.c
v.r=d.d
v.w=Math.atan2(Math.cos(d.e*3.141592653589793/2),-Math.sin(d.e*3.141592653589793/2))
v.at=null
v.TF(0)
w.m(w.gr2())
w.il("You are driving the "+B.lT.h(0,d.b).a.toLowerCase()+". Slide the stick to drive. Press Get out to stop.")
A.ku(300,120,0.25,"tri")},
bPc(){var w,v,u,t,s,r,q=this,p=q.rx,o=q.ok
if(p==null||o==null)return
p.c=o.f
p.d=o.r
w=o.w
p.e=D.o.F(D.k.V((w-1.5707963267948966)/1.5707963267948966),4)
v=w+1.5707963267948966
o.CW=q.rx=null
o.ay=7
o.ch=1
o.z=!1
o.TF(0)
for(w=[46,62,80],u=0;u<3;++u){t=w[u]
s=o.f+Math.sin(v)*t
r=o.r+Math.cos(v)*t
if(!o.ajh(s,r)){o.f=s
o.r=r
break}}q.m(q.gr2())
q.il("You got out.")},
bKA(){var w=this.rx,v=this.ok
if(w==null||v==null)return null
return new C.eq([w.b,v.f,v.r,v.w,w.f])},
ahj(){var w=0,v=C.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g
var $async$ahj=C.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:h=r.d
h===$&&C.c()
if(h.a.length!==0){w=1
break}q=null
p=$.a34
w=p==null||p.a!==h.b?3:4
break
case 3:t=6
w=9
return C.b(A.aRE(),$async$ahj)
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
break}n=$.a34
if(n!=null&&n.a===r.d.b)m=n
else{if(q!=null){h=C.aJ(J.q(q,"seed"))
h=h==null?null:D.k.N(h)
if(h==null)h=-1
h=h===r.d.b}else h=!1
if(h)m=A.fNk(q)
else if(q!=null&&r.b5){h=C.aJ(J.q(q,"seed"))
l=h==null?null:D.k.N(h)
h=A.aU2(l==null?r.d.b:l)
r.d=$.Dv=h
A.h_H(h,q)
m=A.fNk(q)}else{h=r.d.b
m=A.fNj(h,h)
m.MN(r.d)}}$.a34=m
for(h=m.d,k=h.length,j=r.y1,i=0;i<h.length;h.length===k||(0,C.L)(h),++i)j.K(0,h[i].a)
r.m(new A.e2c(r))
r.y2=C.du(D.fT,new A.e2d(r))
case 1:return C.h(u,v)
case 2:return C.f(s.at(-1),v)}})
return C.i($async$ahj,v)},
c3i(){var w,v,u,t,s,r,q=this,p=q.gFe()
if(p==null||q.c==null)return
if(q.cx==null){w=q.d
w===$&&C.c()
p.aBq(0,1,w)}if(++q.bh%8===0){w=q.d
w===$&&C.c()
p.Ck(0,w)}for(w=p.d,v=w.length,u=q.y1,t=0;t<w.length;w.length===v||(0,C.L)(w),++t){s=w[t]
if(u.K(0,s.a))q.c3o(s)}u.oV(new A.e1t(p),!0)
r=q.x1
if(r!=null&&!D.d.b7(w,new A.e1u(r)))q.ahv()},
c3o(d){var w,v=this
v.x1=d
v.xr=0
w=v.x2
if(w!=null)w.a7(0)
v.x2=C.du(D.qO,new A.e26(v))
v.m(new A.e27())},
ahv(){var w=this,v=w.x2
if(v!=null)v.a7(0)
w.x2=null
if(w.c==null)return
w.m(new A.e2j(w))},
ccu(){var w,v,u,t,s,r,q,p,o,n,m=this,l=null
if(m.k4){w=m.d
w===$&&C.c()
v=w.d
v===$&&C.c()
u=v[w.e].c==="outside"}else u=!1
t=m.x1
if(!u&&t==null)return l
w=m.c
w.toString
w=C.aI(w,l,x.w).w
v=new A.e1B()
s=x.p
r=C.a([],s)
if(t!=null){q=D.e3.j(0.97)
p=C.m(18)
o=C.I(D.b4,D.q,2)
r.push(C.p(l,C.A(C.a([B.feX,D.av,C.E(C.d(B.Gx[t.b].b+" is calling\n"+t.d,l,l,l,l,l,l,B.f1v,l,l,l),1),v.$2("Answer",new A.e1D(m)),v.$3$col("Later",m.gcu0(),D.az)],s),D.m,l,D.e,D.j,0,l,l),D.f,l,l,new C.o(q,l,o,p,l,l,D.n),l,l,l,D.agp,D.bj,l,l,l))}if(u){q=C.a([],s)
p=m.ry
if(p!=null)q.push(v.$3$col("\u270b "+p.b,p.a,D.cj))
p=C.a([],s)
if(m.rx==null){o=m.RG
n=o?"\ud83c\udfc3 Run: on":"\ud83c\udfc3 Run"
p.push(v.$3$on(n,new A.e1E(m),o))}if(m.rx==null)p.push(v.$3$col("\u2b06 Jump",new A.e1F(m),D.cr))
q.push(C.A(p,D.m,l,D.e,D.Q,0,l,l))
r.push(new C.C(D.hw,C.A(C.a([new A.aGJ(new A.e1G(m),l),C.v(q,D.dz,l,D.e,D.Q,0,D.p)],s),D.dz,l,D.hB,D.j,0,l,l),l))}return new C.a7(w.a.a,l,C.v(r,D.m,l,D.e,D.Q,0,D.p),l)},
aRt(){var w=this.d
w===$&&C.c()
if(w.a.length!==0)this.DN()
else this.a_9()},
DN(){var w=0,v=C.j(x.H),u,t=this,s,r,q,p
var $async$DN=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:p=t.d
p===$&&C.c()
s=p.d
s===$&&C.c()
r=s[p.e]
if(r.gyD()){t.il("This lesson is done. Try everything: it all works.")
w=1
break}p=r.id
w=p==="ptrap"||p==="faucet"?3:5
break
case 3:if(r.k2==null)r.k2=A.fR_()
p=t.c
p.toString
w=6
return C.b(C.a6(p,!1).c8(C.e8(new A.e1w(r),!1,null,x.H)),$async$DN)
case 6:w=4
break
case 5:if(r.k1==null)r.k1=new A.XG(C.T(x.S,x.N))
p=t.c
p.toString
w=7
return C.b(C.a6(p,!1).c8(C.e8(new A.e1x(r),!1,null,x.H)),$async$DN)
case 7:case 4:if(t.c==null){w=1
break}t.m(t.gr2())
if(r.gyD()){q=r.id
A:{if("switch"===q){p="Done! Tap the switch on the wall: the light comes on."
break A}if("fan"===q){p="Done! Tap the wall switch and the fan spins."
break A}if("outlet"===q||"gfci"===q){p="Done! Tap the outlet and plug something in."
break A}p="Done! The sink works."
break A}t.il(p)}case 1:return C.h(u,v)}})
return C.i($async$DN,v)},
aiC(d){return this.cAR(d)},
cAR(d){var w=0,v=C.j(x.H),u,t=this,s,r,q
var $async$aiC=C.e(function(e,f){if(e===1)return C.f(f,v)
for(;;)switch(w){case 0:q=t.d
q===$&&C.c()
s=q.d
s===$&&C.c()
r=s[q.e].dy[d]
q=t.c
q.toString
w=3
return C.b(C.a6(q,!1).c8(C.e8(new A.e2O(r),!1,null,x.H)),$async$aiC)
case 3:if(t.c==null){w=1
break}t.m(t.gr2())
if(r.gBf())t.il("Wired! "+(r.a==="switch"?"Tap it to turn the light on and off.":"Tap it to plug something in."))
case 1:return C.h(u,v)}})
return C.i($async$aiC,v)},
a_9(){var w=0,v=C.j(x.H),u,t=this,s,r,q,p
var $async$a_9=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:p=t.d
p===$&&C.c()
s=p.d
s===$&&C.c()
r=s[p.e]
if(r.c==="outside"){w=1
break}s=r.CW
if(s==null){q=A.fRo(A.i6j(r),r.b,!1,p.b*37+r.a)
q.aDE()
if(!r.ay)q.cDH()
r.CW=q
p=q}else p=s
p.b=t.d.c
p=t.c
p.toString
w=3
return C.b(C.a6(p,!1).c8(C.e8(new A.e1z(r),!1,null,x.H)),$async$a_9)
case 3:if(t.c==null){w=1
break}t.m(t.gr2())
if(r.gjB())t.il(r.b+": the wiring is finished. The light has power.")
case 1:return C.h(u,v)}})
return C.i($async$a_9,v)},
a_0(){var w=0,v=C.j(x.H),u,t=this,s,r,q,p
var $async$a_0=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:p=t.d
p===$&&C.c()
s=p.d
s===$&&C.c()
r=s[p.e]
s=r.c
if(!(s==="bathroom"||s==="kitchen")){t.Io("This room has no plumbing. Bathrooms and the kitchen do.",!1)
w=1
break}q=r.cx
if(q==null){s=s==="kitchen"?"kitchen":"bathroom"
s=r.cx=A.fQZ(!1,p.b*41+r.a,s)
p=s}else p=q
if(!r.ch&&!p.gaj6())r.cx.cDG()
r.cx.b=t.d.c
p=t.c
p.toString
w=3
return C.b(C.a6(p,!1).c8(C.e8(new A.e1y(r),!1,null,x.H)),$async$a_0)
case 3:if(t.c==null){w=1
break}t.m(t.gr2())
if(r.gl3())t.il(r.b+": the plumbing is finished and nothing leaks.")
case 1:return C.h(u,v)}})
return C.i($async$a_0,v)},
bxS(){var w=this.c
w.toString
return C.bV(E.mb,null,new A.e0v(this),w,!0,!0,!1,D.kY,!1,!1,x.H)},
bxw(d){var w,v,u,t,s,r,q,p,o=this,n=o.d
n===$&&C.c()
w=n.d
w===$&&C.c()
v=w[n.e]
n=v.c
if(n==="outside"||n==="hall"){o.Io("Add devices in a room, not in the hall or the garden.",!1)
return}n=v.dy
if(n.length>=4){o.Io("This room already has four added devices.",!1)
return}w=C.a([-v.gfq(0)/4,v.gfq(0)/4],x.n)
for(u=v.w,t=D.d.gae(u),s=new C.fh(t,new A.e0p());s.C();)w.push(t.gS(0).c)
for(u=D.d.gae(u),t=new C.fh(u,new A.e0q());t.C();)w.push(u.gS(0).c+24)
for(u=n.length,r=0;r<n.length;n.length===u||(0,C.L)(n),++r)w.push(n[r].b)
p=-v.gfq(0)/2+14
for(;;){if(!(p<=v.gfq(0)/2-14)){q=null
break}if(D.d.da(w,new A.e0r(p))){q=p
break}p+=6}if(q==null){o.Io("There is no free place left on the back wall.",!1)
return}o.m(new A.e0s(o,v,d,q))
o.il("Added. It is red because it is not wired: tap it to wire it.")},
acM(d,e){var w,v,u=this,t=u.d
t===$&&C.c()
w=t.d
w===$&&C.c()
v=w[t.e].KZ(u.Q)
if(v==null)return
u.m(new A.e1v(u,v,D.d.t(B.ax2,v.b),d,e))},
c3q(){var w,v,u=this,t=u.d
t===$&&C.c()
w=t.d
w===$&&C.c()
v=w[t.e].KZ(u.Q)
if(v==null)return
u.m(new A.e2y(u,v))},
ck4(){var w,v,u=this,t=u.d
t===$&&C.c()
w=t.d
w===$&&C.c()
v=w[t.e].KZ(u.Q)
if(v==null)return
u.m(new A.e1X(u,v))
u.il(B.lT.h(0,v.b).a+": "+B.cKz[v.f]+".")},
c3n(d){var w,v,u=this,t=u.d
t===$&&C.c()
w=t.d
w===$&&C.c()
v=w[t.e].KZ(u.Q)
if(v==null)return
u.m(new A.e1Y(u,v))},
bxz(d){var w,v=this,u=v.d
u===$&&C.c()
w=u.d
w===$&&C.c()
v.m(new A.e0t(v,w[u.e].K(0,d)))
v.il(B.lT.h(0,d).a+" added. Move it with the arrows.")},
DL(d,e,f,g,h){var w=null,v=e?g.j(0.25):D.c.j(0.07),u=C.m(14),t=e?g:D.b2
t=C.I(t,D.q,e?2:1)
v=C.a([C.p(w,C.d(d,w,w,w,w,w,w,C.l(w,w,e?g:D.c,w,w,w,w,w,w,w,w,12.5,w,w,D.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),D.f,w,w,new C.o(v,w,t,u,w,w,D.n),w,w,w,w,A3.XM,w,w,w)],x.p)
if(h)v.push(C.ao(w,C.p(w,w,D.f,w,w,new C.o(D.ay,w,C.I(B.Ej,D.q,2),w,w,w,D.a6),w,11,w,w,w,w,w,11),w,w,w,-2,-3,w))
return new C.C(D.fx,C.aE(w,new C.an(D.W,w,D.aa,D.f,v,w),D.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,!1,D.a8),w)},
lA(d,e,f,g){return this.DL(d,e,f,g,!1)},
Im(d,e,f){return this.DL(d,e,f,D.aH,!1)},
azV(d,e,f,g){var w=null,v=g==null,u=v?34:w,t=v?w:D.lb,s=C.m(10),r=e?D.c:D.b2
r=C.I(r,D.q,e?3:1)
if(v)v=w
else v=C.av(C.d(g,w,w,w,w,w,w,C.l(w,w,d.j8()>0.5?D.w:D.c,w,w,w,w,w,w,w,w,12,w,w,D.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w,w,w)
return new C.C(E.ts,C.aE(w,C.p(w,v,D.f,w,w,new C.o(d,w,r,s,w,w,D.n),w,34,w,w,t,w,w,u),D.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,!1,D.a8),w)},
cuS(d,e,f){return this.azV(d,e,f,null)},
H0(d,e){var w=null,v=D.c.j(0.1),u=C.m(10),t=C.I(D.b2,D.q,1)
return new C.C(D.fx,C.aE(w,C.p(w,C.X(d,D.c,w,w,w,20),D.f,w,w,new C.o(v,w,t,u,w,w,D.n),w,36,w,w,w,w,w,40),D.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,e,w,w,w,w,w,w,!1,D.a8),w)},
bFU(){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null
if(k.cx!=null){w=k.dy
return C.A(C.a([C.E(C.d("\ud83c\udfac "+(w.length===0?"Walking in":w),j,1,D.a2,j,j,j,B.f_x,j,j,j),1),k.lA("\u23f9 Stop the tour",!0,k.gcu1(),D.cg)],x.p),D.m,j,D.e,D.j,0,j,j)}switch(k.r){case"furniture":w=k.d
w===$&&C.c()
v=w.d
v===$&&C.c()
u=v[w.e].KZ(k.Q)
w=x.p
v=C.a([],w)
if(u!=null)v.push(new C.a7(j,40,C.cB(C.a([k.H0(D.pI,new A.e18(k)),k.H0(D.iU,new A.e19(k)),k.H0(D.vp,new A.e1a(k)),k.H0(D.tF,new A.e1b(k)),k.H0(F.alt,k.gc3p()),k.H0(D.na,k.gck3()),k.H0(D.e5,k.gc3m(k))],w),j,j,j,j,D.aO,!1),j))
else v.push(B.aUV)
w=C.a([],w)
for(t=B.lT.gdK(B.lT),t=t.gae(t);t.C();){s=t.gS(t)
r=D.d.t(B.cQO,s.a)
q=k.d
p=q.d
p===$&&C.c()
if(r===(p[q.e].c==="outside")){r=s.b
w.push(k.lA(r.b+" "+r.a,!1,new A.e1c(k,s),D.b1))}}v.push(new C.a7(j,40,C.cB(w,j,j,j,j,D.aO,!1),j))
return C.v(v,D.m,j,D.e,D.Q,0,D.p)
case"walls":w=k.as
v=w<0
w=v?"All walls":"Wall "+(w+1)+": tap Look to reset"
v=C.a([k.Im(w,v,new A.e1d(k))],x.p)
for(o=0;o<8;++o)v.push(k.azV(B.avK[o],!1,new A.e1e(k,o),B.ddD[o]))
return new C.a7(j,40,C.cB(v,j,j,j,j,D.aO,!1),j)
case"floor":w=C.a([],x.p)
for(o=0;o<7;++o){v=B.avx[o]
t=k.d
t===$&&C.c()
s=t.d
s===$&&C.c()
w.push(k.azV(v.b,s[t.e].Q===o,new A.e1f(k,o),v.a))}return new C.a7(j,40,C.cB(w,j,j,j,j,D.aO,!1),j)
case"ceiling":w=k.d
w===$&&C.c()
v=w.d
v===$&&C.c()
w=v[w.e].dx==="fan"?"\ud83c\udf00 Fan (tap for light)":"\ud83d\udca1 Light (tap for fan)"
w=C.a([k.lA(w,!1,new A.e1g(k),D.b8)],x.p)
for(o=0;o<4;++o){v=B.auo[o]
t=k.d
s=t.d
s===$&&C.c()
w.push(k.cuS(v,s[t.e].as===o,new A.e1h(k,o)))}return new C.a7(j,40,C.cB(w,j,j,j,j,D.aO,!1),j)
default:n=C.aX(x.S)
w=C.a([],x.p)
v=k.d
v===$&&C.c()
t=v.d
t===$&&C.c()
v=t[v.e].w
t=v.length
m=0
for(;m<v.length;v.length===t||(0,C.L)(v),++m){l=v[m]
s=l.d
if(n.K(0,s)){r=k.d.d
r===$&&C.c()
s=r[s]
r=s.gjB()&&s.gl3()
w.push(k.DL("\ud83d\udeaa "+s.b,!1,new A.e1i(k,l),D.b1,!r))}}return new C.a7(j,40,C.cB(w,j,j,j,j,D.aO,!1),j)}},
B(d){var w=this,v=null,u=C.a([C.bZ(0,new C.ev(w.bBR(d),w.k1),0,0,0)],x.p)
if(w.k2!=null)u.push(C.bZ(0,C.e1(C.mz(new A.e2Q(w),v,D.dC,D.ia,new C.cx(w.k3,x.ac),new A.e2R(w),new C.bo(1,0,x.e7),x.i),!0,v),0,0,0))
return new C.an(D.W,v,D.aa,D.r,u,v)},
bE8(){var w,v=this,u=v.k4,t=u?"\u23f9 Stop walking":"\ud83d\udeb6 Walk the city"
u=v.lA(t,u,u?v.gb4P():v.gb4B(),D.b4)
t=v.lA("\ud83c\udfd7 Build",!1,v.gaLh(),D.b4)
w=v.gFe()
w=w==null?null:w.d.length
if(w==null)w=0
return C.a([u,t,v.DL("\ud83d\udcde Calls",!1,new A.e0W(v),D.bU,w>0),v.lA("\ud83c\udfe5 Hospital",!1,new A.e0X(v),D.cg),v.lA("\ud83d\uded2 Shop",!1,new A.e0Y(v),D.ct),v.lA("\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc67 People",!1,new A.e0Z(v),D.cr),v.lA("\ud83c\udfe0 Go inside",!1,new A.e1_(v),D.b4),v.lA("\ud83d\uddfa Map",v.y,new A.e10(v),D.by)],x.p)},
bBR(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.d
h===$&&C.c()
w=h.d
w===$&&C.c()
v=w[h.e]
h=C.aI(d,i,x.w).w
w=j.d
if(w.a.length!==0)w=v.gyD()?"Done \u2713":"To do"
else w=""+w.gcJa()+"/"+j.d.gqr().length+" done"
u=j.d
t=u.d
t===$&&C.c()
t=t[u.e].c==="outside"&&j.R8==null
s=j.f
s===$&&C.c()
r=j.e
r===$&&C.c()
q=j.at
p=j.ax
o=j.ay
u=j.y&&u.a.length===0?104:10
n=j.ccu()
m=x.p
l=C.a([],m)
if(j.y&&j.d.a.length===0)l.push(new A.bh3(j.d,j.gc3h(),Math.min(138,h.a.a*0.36),i))
h=A.X2(n,r,new A.e0C(j),o,q,i,i,new A.e0D(),p,u,j.gbJZ(),new A.e0E(j),j.gc3k(),s,t,l,i)
u=j.d
t=u.d
t===$&&C.c()
if(t[u.e].c==="outside")u=j.bE8()
else{u=j.x?"\ud83d\udd2d See the whole room":"\ud83c\udfe0 Be inside"
u=C.a([j.lA(u,!1,new A.e0N(j),D.b1)],m)
if(j.d.a.length===0){t=j.cx!=null
s=t?"\u23f9 Stop tour":"\ud83c\udfac Tour"
u.push(j.lA(s,t,new A.e0O(j),D.bU))}t=j.z
s=t?"\ud83d\udeb6 Stop looking round":"\ud83d\udd04 Look all round (360)"
u.push(j.lA(s,t,new A.e0P(j),D.ct))
u.push(j.lA("\ud83d\udcfa TV",!1,j.gcyr(),D.cr))
t=j.d
if(t.a.length===0){s=t.d
s===$&&C.c()
t=s[t.e].c!=="outside"?"\ud83c\udf33 Go outside":"\ud83c\udfe0 Go inside"
u.push(j.lA(t,!1,new A.e0Q(j),D.b4))}t=j.d
s=t.d
s===$&&C.c()
if(s[t.e].c==="outside"){t=j.k4
s=t?"\u23f9 Stop walking":"\ud83d\udeb6 Walk about"
u.push(j.lA(s,t,t?j.gb4P():j.gb4B(),D.b4))}if(j.d.a.length===0)u.push(j.lA("\u2795 Add",!1,j.gaLh(),D.b4))
if(j.d.a.length===0){t=j.gFe()
t=t==null?i:t.d.length
if(t==null)t=0
u.push(j.DL("\ud83c\udfd8 Community",!1,new A.e0R(j),D.bU,t>0))}u.push(j.lA("\ud83d\udd26 Tester",j.w,new A.e0S(j),D.ct))
if(j.d.a.length!==0)u.push(j.DL("\ud83d\udd27 Do the lesson",!1,j.gc3j(),D.cj,!v.gyD()))
else{t=j.DL("\u26a1 Wiring",!1,j.gccb(),D.cj,!v.gjB())
s=v.c
s=(s==="bathroom"||s==="kitchen")&&!v.gl3()
D.d.v(u,C.a([t,j.DL("\ud83d\udeb0 Plumbing",!1,j.gcbB(),D.cr,s),j.lA("\ud83d\uddfa Map",j.y,new A.e0T(j),D.by)],m))}}u=C.cB(u,i,i,i,i,D.aO,!1)
t=j.Im("\ud83d\udc41 Look",j.r==="look",new A.e0U(j))
s=j.Im("\ud83d\udecb Furniture",j.r==="furniture",new A.e0F(j))
r=j.Im("\ud83e\uddf1 Walls",j.r==="walls",new A.e0G(j))
q=j.Im("\ud83d\udfeb Floor",j.r==="floor",new A.e0H(j))
p=j.Im("\u2b1c Ceiling",j.r==="ceiling",new A.e0I(j))
o=j.Im("\ud83d\udeaa Doors",j.r==="doors",new A.e0J(j))
n=j.lA("\ud83d\udcd8 Learn",!1,new A.e0K(d),D.by)
l=j.d.c
k=l?"\ud83d\udd25 Practice":"\ud83c\udf93 Learn mode"
return new A.B0(v.b,D.aH,h,C.v(C.a([new C.a7(i,40,u,i),D.at,new C.a7(i,40,C.cB(C.a([t,s,r,q,p,o,n,j.lA(k,l,new A.e0L(j),D.cg)],m),i,i,i,i,D.aO,!1),i),D.at,j.bFU()],m),D.F,i,D.e,D.Q,0,D.p),new A.e0M(j,d),w,i)},
cic(d){return C.bV(E.mb,null,new A.e1W(this),d,!0,!0,!0,D.kY,!1,!1,x.H)}}
A.bh3.prototype={
B(d){var w=null,v=D.k.D((this.e-10)/126,0.5,1),u=D.w.j(0.6),t=C.m(12),s=C.I(D.b2,D.q,1)
return C.p(w,new C.a7(126*v,84*v,C.aE(w,C.f3(D.A,C.b3(w,w,w,new A.bgs(this.c,w),B.eKw),D.f,D.wA),D.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new A.dmC(this,v),w,w,w,w,!1,D.a8),w),D.f,w,w,new C.o(u,w,s,t,w,w,D.n),w,w,w,w,D.lJ,w,w,w)}}
A.bgs.prototype={
a5(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=this.b,e=f.d
e===$&&C.c()
w=e.length
v=d.a
u=0
for(;u<e.length;e.length===w||(0,C.L)(e),++u){t=e[u]
s=t.d*14+1
r=t.e*14+1
q=s+(t.f*14-2)
p=r+(t.r*14-2)
o=new C.a9(s,r,q,p)
n=t.a===f.e
if(t.gjB()&&t.gl3())m=D.bo
else m=!t.gjB()?D.ay:D.d6
l=C.bA(o,D.hC)
$.W()
k=new C.as(D.X,D.V,D.a_,D.a0,D.Z)
k.r=m.j(t.gjB()&&t.gl3()?0.35:0.5).gp(0)
j=k.H()
v.drawRRect(C.er(l),j)
j.delete()
l=C.bA(o,D.hC)
k=new C.as(D.X,D.V,D.a_,D.a0,D.Z)
k.b=D.ae
k.c=n?2.2:0.8
k.r=(n?D.c:D.c_).gp(0)
j=k.H()
v.drawRRect(C.er(l),j)
j.delete()
i=t.c
A:{if("bedroom"===i){l="\ud83d\udecf"
break A}if("bathroom"===i){l="\ud83d\udebf"
break A}if("kitchen"===i){l="\ud83c\udf73"
break A}if("living"===i){l="\ud83d\udecb"
break A}if("outside"===i){l="\ud83c\udf33"
break A}l=""
break A}h=new C.kq(new C.ep(l,g,g,D.cO,g,g,g,g,g,g,B.eZK),D.a4,D.cc,new C.jo(1),g,g,g,g,D.ca,g)
h.eH()
l=h.b
k=l.c
l=l.a.c
h.a5(d,new C.u(s+(q-s)/2-k/2,r+(p-r)/2-l.gbc(l)/2))}},
ar(d){return!0}}
A.aGJ.prototype={
U(){return new A.bqV()},
bf2(d,e){return this.c.$2(d,e)}}
A.bqV.prototype={
aXf(d){var w,v,u={},t=u.a=d.aC(0,B.e10),s=t.gcl()>46?u.a=t.ev(0,t.gcl()).aF(0,46):t,r=s.a/46,q=-s.b/46,p=Math.sqrt(r*r+q*q)
s=this.a
s.toString
w=p<0.15
v=w?0:r
s.bf2(v,w?0:q)
this.m(new A.eX6(u,this))},
aXe(){this.a.bf2(0,0)
this.m(new A.eX5(this))},
B(d){var w=this,v=null,u=C.p(v,v,D.f,v,v,new C.o(D.w.j(0.42),v,C.I(D.b4.j(0.9),D.q,2.4),v,v,v,D.a6),v,132,v,v,v,v,v,132),t=C.p(v,v,D.f,v,v,new C.o(v,v,C.I(D.b4.j(0.25),D.q,1.5),v,v,v,D.a6),v,66,v,v,v,v,v,66),s=w.d,r=s==null
if(r)s=D.J
return C.o9(D.c3,new C.a7(132,132,new C.an(D.A,v,D.aa,D.r,C.a([u,t,C.dT(C.p(v,v,D.f,v,v,new C.o(D.b4.j(r?0.55:0.9),v,C.I(D.c,D.q,2),v,v,v,D.a6),v,56,v,v,v,v,v,56),s)],x.p),v),v),v,new A.eX7(w),new A.eX8(w),v,new A.eX9(w),v,v,new A.eXa(w))}}
A.bPR.prototype={}
A.Fl.prototype={}
A.MP.prototype={
U(){return new A.bi0()}}
A.bi0.prototype={
xq(d){var w=this.c
w.toString
return C.a6(w,!1).c8(C.e8(new A.dKH(d),!1,null,x.H))},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null
$.aqI="tech"
w=C.aH(k,k,k,k,M.ne,k,k,k,new A.dKK(d),k,k,k,k,k,k)
v=D.aH.j(0.16)
u=C.m(13)
t=x.p
u=C.A(C.a([w,C.p(k,B.b3G,D.f,k,k,new C.o(v,k,C.I(D.aH.j(0.6),D.q,1),u,k,k,D.n),k,40,k,k,k,k,k,40),D.av,B.bvx],t),D.m,k,D.e,D.j,0,k,k)
v=C.A(C.a([C.E(l.aXi("Learn mode",!l.d,D.b4,new A.dKL(l)),1),D.ab,C.E(l.aXi("Practice mode",l.d,D.cg,new A.dKM(l)),1)],t),D.m,k,D.e,D.j,0,k,k)
w=C.m(26)
s=C.I(D.aH,D.q,1.8)
r=x.V
q=C.a([new C.ac(0,D.G,D.aH.j(0.28),D.dk,26)],r)
q=C.aE(k,C.p(k,C.v(C.a([C.p(k,B.b45,D.f,k,k,new C.o(D.aH.j(0.2),k,C.I(D.aH,D.q,2),k,C.a([new C.ac(0,D.G,D.aH.j(0.5),D.J,22)],r),k,D.a6),k,78,k,k,k,k,k,78),D.ac,B.fhh,D.at,B.fnL,D.aA,C.p(k,B.fhd,D.f,k,k,new C.o(D.aH,k,k,C.m(20),k,k,D.n),k,k,k,k,K.ahq,k,k,k)],t),D.m,k,D.e,D.j,0,D.p),D.f,k,k,new C.o(k,k,s,w,q,B.bSU,D.n),k,k,k,k,D.vf,k,k,k),D.y,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,new A.dKP(l),k,k,k,k,k,k,!1,D.a8)
w=C.m(22)
s=C.I(D.bU,D.q,1.5)
r=C.a([new C.ac(0,D.G,D.bU.j(0.22),D.cw,20)],r)
r=C.aE(k,C.p(k,C.v(B.d1O,D.m,k,D.e,D.j,0,D.p),D.f,k,k,new C.o(k,k,s,w,r,B.bTz,D.n),k,k,k,k,N.LL,k,k,k),D.y,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,new A.dKQ(l),k,k,k,k,k,k,!1,D.a8)
w=l.aXh("JOBS")
s=l.aXg(C.a([l.DO("\ud83d\udd0c","Wire a room","Go to a room that needs wiring",D.bo,new A.dKR(l)),l.DO("\ud83d\udebd","Plumb a room","Go to a bathroom or kitchen",D.aS,new A.dKS(l)),l.DO("\ud83d\udd27","Fix a house","Walk the house and fix every sign",D.aH,new A.dKT(l)),l.DO("\ud83e\uddf1","Build a room","Frame, drywall, then wire",D.b4,new A.dKU(l)),l.DO("\u26a1","Wiring bench","Just the wiring, one room",D.cj,new A.dKV(l)),l.DO("\ud83d\udcde","Service calls","A customer rings with problems",D.j6,new A.dKW(l))],t))
p=l.aXh("LESSONS")
o=C.a([],t)
for(n=0;n<7;++n){m=B.cRh[n]
o.push(l.DO(m.b,m.c,m.d,m.e,new A.dKN(l,m)))}o.push(l.DO("\ud83d\udcd8","Learn the trades","Short cards for beginners",D.by,new A.dKO(l)))
return C.c8(k,D.bX,C.bn(!0,C.cB(C.a([u,D.ac,v,D.ac,q,D.ac,r,w,s,p,l.aXg(o)],t),k,B.agJ,k,k,D.ah,!1),!0,!1,D.af,!0,!0),k,!1,!1,k,k)},
aXh(d){var w=null
return new C.C(B.btz,C.A(C.a([C.E(C.p(w,w,D.f,D.aH.j(0.35),w,w,w,1,w,w,w,w,w,w),1),new C.C(D.fU,C.d(d,w,w,w,w,w,w,B.eWs,w,w,w),w),C.E(C.p(w,w,D.f,D.aH.j(0.35),w,w,w,1,w,w,w,w,w,w),1)],x.p),D.m,w,D.e,D.j,0,w,w),w)},
aXi(d,e,f,g){var w=null,v=e?f.j(0.2):D.c.j(0.06),u=C.m(18),t=e?f:D.b2
t=C.I(t,D.q,e?2:1)
return C.aE(w,C.p(w,C.av(C.d(d,w,w,w,w,w,w,C.l(w,w,e?f:D.ad,w,w,w,w,w,w,w,w,13,w,w,D.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w,w,w),D.f,w,w,new C.o(v,w,t,u,w,w,D.n),w,w,w,w,D.eZ,w,w,w),D.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,g,w,w,w,w,w,w,!1,D.a8)},
aXg(d){var w,v,u,t,s=null,r=x.p,q=C.a([],r)
for(w=0;v=d.length,w<v;w+=2){u=d[w]
t=w+1
v=t<v?d[t]:D.bH
q.push(new C.C(D.cH,new C.DF(new C.cn(D.aO,D.e,D.j,D.aj,s,D.p,s,0,C.a([new C.bD(1,D.bi,u,s),D.ab,new C.bD(1,D.bi,v,s)],r),s),s),s))}return C.v(q,D.m,s,D.e,D.j,0,D.p)},
DO(d,e,f,g,h){var w=null,v=C.a([g.j(0.2),B.Ej],x.O),u=C.m(22),t=C.I(g.j(0.55),D.q,1.4),s=x.V,r=C.a([new C.ac(0,D.G,g.j(0.18),D.cw,16)],s),q=g.j(0.22),p=C.I(g.j(0.7),D.q,1.5)
s=C.a([new C.ac(0,D.G,g.j(0.35),D.J,14)],s)
return C.aE(w,C.p(w,C.v(C.a([C.p(w,C.av(C.d(d,w,w,w,w,w,w,D.a7a,w,w,w),w,w,w),D.f,w,w,new C.o(q,w,p,w,s,w,D.a6),w,56,w,w,w,w,w,56),D.S,C.d(e,w,w,w,w,w,w,D.j1,D.L,w,w),D.cX,C.d(f,w,2,D.a2,w,w,w,B.f6v,D.L,w,w)],x.p),D.m,w,D.bb,D.j,0,D.p),D.f,w,w,new C.o(w,w,t,u,r,new C.a8(D.b0,D.b6,D.x,v,w,w),D.n),w,w,w,w,B.boT,w,w,w),D.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,h,w,w,w,w,w,w,!1,D.a8)}}
A.b5e.prototype={
B(d){var w,v,u,t,s,r=this,q=null,p=x.p,o=C.a([C.bZ(0,new A.atv(r.d,r.e,r.w,r.f,r.y,r.x,E.Wh,r.c,r.CW,q),0,0,0)],p),n=r.at,m=n!=null
if(m)o.push(C.ao(q,C.v(n,D.F,q,D.e,D.j,0,D.p),q,q,8,q,8,q))
n=C.a([],p)
w=r.ax
if(w!=null)D.d.v(n,w)
n.push(r.avG(D.hy,"Zoom in",new A.cpO(r)))
n.push(r.avG(D.y3,"Zoom out",new A.cpP(r)))
w=r.r
n.push(r.avG(B.bBl,"Back to the whole view",w))
o.push(C.ao(q,C.v(n,D.m,q,D.e,D.j,0,D.p),q,q,q,8,8,q))
n=r.cx
if(n!=null)o.push(C.ao(14,C.av(n,q,q,q),q,q,0,0,q,q))
n=r.z
if(n!=null){v=r.ch
if(v==null)m=m?60:10
else m=v
v=r.Q
u=(v?D.e3:D.er).j(0.95)
t=C.m(14)
s=C.I(v?D.b4:D.cg,D.q,1)
o.push(C.ao(q,C.p(q,C.d(n,q,q,q,q,q,q,B.eX1,q,q,q),D.f,q,q,new C.o(u,q,s,t,q,q,D.n),q,q,q,q,D.nS,q,q,q),q,q,10,62,m,q))}n=r.as
if(n!=null){m=C.m(16)
v=C.I(D.b2,D.q,1)
n=C.a([C.d(n.a,q,q,q,q,q,q,B.f71,q,q,q),D.cX,C.d(n.b,q,q,q,q,q,q,E.Tb,q,q,q)],p)
u=r.ay
if(u!=null)D.d.v(n,C.a([D.an,u],p))
o.push(C.ao(8,C.p(q,C.A(C.a([C.E(C.v(n,D.F,q,D.e,D.j,0,D.p),1),C.aH(q,q,q,q,D.Gb,q,q,q,w,q,q,q,q,q,D.c8)],p),D.F,q,D.e,D.j,0,q,q),D.f,q,q,new C.o(E.ab5,q,v,m,q,q,D.n),q,q,q,q,E.agr,q,q,q),q,q,10,10,q,q))}return new C.an(D.W,q,D.aa,D.r,o,q)},
avG(d,e,f){var w=null,v=D.w.j(0.55),u=C.I(D.b2,D.q,1)
return new C.C(D.eO,C.hp(C.aE(w,C.p(w,C.X(d,D.c,w,w,w,20),D.f,w,w,new C.o(v,w,u,w,w,w,D.a6),w,38,w,w,w,w,w,38),D.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,!1,D.a8),w,e,w,w),w)}}
A.B0.prototype={
B(d){var w=this,v=null,u=C.aH(v,v,v,v,M.ne,v,v,v,new A.bRW(d),v,v,v,v,v,v),t=w.d,s=C.E(C.d(w.c,v,v,v,v,v,v,C.l(v,v,t,v,v,v,v,v,v,v,v,16,v,v,D.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),1),r=t.j(0.15),q=C.m(16),p=C.I(t.j(0.6),D.q,1),o=x.p
q=C.A(C.a([u,s,C.aE(v,C.p(v,C.A(C.a([C.X(A8.ajV,t,v,v,v,17),D.eb,C.d(w.w,v,v,v,v,v,v,C.l(v,v,t,v,v,v,v,v,v,v,v,12,v,v,D.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],o),D.m,v,D.e,D.Q,0,v,v),D.f,v,v,new C.o(r,v,p,q,v,v,D.n),v,v,v,v,D.tu,v,v,v),D.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,w.r,v,v,v,v,v,v,!1,D.a8)],o),D.m,v,D.e,D.j,0,v,v)
p=C.aI(d,v,x.w).w
return C.c8(v,D.bX,C.bn(!0,C.v(C.a([new C.C(B.btM,q,v),C.p(v,C.cd(w.f,D.r,v,D.y,v,v,v,v,D.ah),D.f,v,new C.aY(0,1/0,0,p.a.b*0.34),B.b_g,v,v,v,v,E.XK,v,v,1/0),C.E(C.bw(A7.a9m,w.e,D.aq),1)],o),D.m,v,D.e,D.j,0,D.p),!0,!1,D.af,!0,!0),v,!1,!1,v,v)}}
A.GZ.prototype={
U(){return new A.ayn()},
gdc(d){return this.d}}
A.ayn.prototype={
gFK(){var w,v=this,u=v.d
if(u===$){w=A.Ak(v.a.c)
v.d!==$&&C.bM()
v.d=w
u=w}return u},
geS(d){var w,v=this.e
if(v===$){w=this.a.d
v=this.e=w==null?new A.XG(C.T(x.S,x.N)):w}return v},
gkT(){var w=this.f
return w===$?this.f=new A.AG(0.42,0.26,12,B.fDl,$.aw()):w},
goF(){var w=this,v=w.r
return v===$?w.r=A.fVc(w.gFK(),w.geS(0),!0):v},
q(){var w=this.as
if(w!=null)w.a7(0)
this.a2()},
kw(d,e){var w=this,v=w.as
if(v!=null)v.a7(0)
w.m(new A.d2s(w,d,e))
w.as=C.cM(D.la,new A.d2t(w))},
p_(d){return this.kw(d,!1)},
xs(){var w=this.geS(0)
w.d=w.d&&w.a&&w.c>=2
this.r=A.fVc(this.gFK(),w,!0)},
nX(){var w=this,v=w.gkT(),u=w.geS(0).c===0,t=u?2.8:0.4
u=u?12:10
v.lW(u,0.26,new A.D(0,0.1,t),0.42)
w.m(new A.d2l(w))},
c3r(){var w,v,u,t="ground",s=this.geS(0),r=!s.a||s.c>0,q=new A.d2k(this)
switch(this.gFK().a){case"switch":w=q.$1(t)
v=q.$1("blackLine")
q=q.$1("blackLoad")
return C.a([r,r,r,w,v,q,s.c>=2&&s.d],x.u)
case"gfci":w=q.$1(t)
v=q.$1("white")
q=q.$1("black")
u=s.c>=2
return C.a([r,r,w,v,q,u,u&&s.d],x.u)
default:w=q.$1(t)
v=q.$1("white")
q=q.$1("black")
u=s.c
s=u>=2&&s.d
return C.a([r,r,w,v,q,u>=1,s],x.u)}},
Ir(d){var w,v,u,t,s,r,q,p=this
if(d===0){p.nX()
return}w=p.gFK()
v=w.f
u=C.U(v).k("a2<1>")
t=C.B(new C.a2(v,new A.d2m(d),u),u.k("J.E"))
v=w.a
s=A.hk5(v,d)
if(s!=null){u=p.geS(0)
u=u.c===0&&u.b.iS(0,s)}else u=!1
if(u){w=p.geS(0)
if(w.a){A.ku(180,220,0.25,"square")
p.p_("STOP! The power is still on. Turn the breaker OFF before you touch any wire.")
return}w=w.b
w.bn(w,new A.d2n(s))
p.m(p.gc3u())
p.kw("Wire taken off the screw.",!0)
return}if(t.length!==0&&p.w.length!==0&&p.geS(0).c===0){u=p.geS(0)
r=A.hk0(w,u,p.w,D.d.gL(t),!1)
if(r!=null){++p.Q
A.ku(180,220,0.25,"square")
p.p_(r)}else{A.yb()
p.m(new A.d2o(p,d))
if(A.bCl(w,u))p.kw("Every wire is on the right screw. Now push the device into the box.",!0)
else p.kw(D.d.gL(t).b+": fastened correctly.",!0)
p.gkT().zg(7,A.bA3(v,d,u))
p.w=""}return}q=p.goF().b.h(0,d)
if(q!=null){p.m(new A.d2p(p,d))
w=p.gkT()
v=q.c
w.zg(q.d,v)}},
cha(){var w,v=this
v.m(new A.d2q(v))
w=v.geS(0)
if(w.a){A.ku(120,200,0.25,"saw")
if(w.c===0)v.p_("The breaker is ON. The wires are LIVE at 120 volts. Turn it OFF before you touch anything.")}else{A.ku(600,100,0.25,"tri")
v.kw("Breaker OFF. It is safe to work on the wires. (In real life, always test them with a tester first.)",!0)}},
cw7(){var w,v,u=this
u.m(new A.d2u(u))
A.yb()
w=u.gFK().a
A:{if("switch"===w){v="Power on. Flip the switch and the light turns on: both black wires are on brass screws, so the switch opens and closes the hot wire. The lesson is complete! Mistakes: "+u.Q+"."
break A}if("gfci"===w){v="Power on. Press RESET (it clicks), then TEST: it must shut the outlet off. Wired on LINE, it protects the whole circuit. The lesson is complete! Mistakes: "+u.Q+"."
break A}v="The tester glows: this outlet has 120 volts and is wired correctly. The lesson is complete! Mistakes: "+u.Q+"."
break A}u.kw(v,!0)},
B(a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null,d=f.c3r(),a0=D.d.bd(d,new A.d2C())
if(a0<0)w="All done"
else{f.gFK()
w="Step "+(a0+1)+"/7"}v=f.gFK()
u=f.geS(0)
t=A.bCl(v,u)&&!u.a
s=f.goF()
r=f.gkT()
q=f.x
p=f.y
o=f.z
n=q!==0?f.goF().b.h(0,f.x):e
m=(u.a?D.er:D.e3).j(0.95)
l=C.m(18)
k=u.a
j=C.I(k?D.cg:D.b4,D.q,1.5)
i=C.X(k?D.h7:B.akM,D.c,e,e,e,18)
h=x.p
l=A.X2(e,r,e,o,q,n,e,e,p,e,e,f.gIp(),f.gIq(),s,!1,C.a([C.aE(e,C.p(e,C.A(C.a([i,D.eb,C.d(k?"Breaker ON (live)":"Breaker OFF (safe)",e,e,e,e,e,e,D.np,e,e,e)],h),D.m,e,D.e,D.Q,0,e,e),D.f,e,e,new C.o(m,e,j,l,e,e,D.n),e,e,e,e,D.h6,e,e,e),D.y,!1,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,f.gch9(),e,e,e,e,e,e,!1,D.a8)],h),C.a([A.Qo("Hints",D.aH,D.r0,u.e,new A.d2D(f)),D.an,A.Qo("Labels",D.aS,S.N7,u.f,new A.d2E(f)),D.an,A.Qo("Brass side",B.bhD,E.akS,!1,new A.d2G(f)),D.an,A.Qo("Silver side",B.KB,D.Ne,!1,new A.d2H(f)),D.O],h))
j=C.a([],h)
s=u.c
if(s===0){s=C.a([],h)
for(r=D.d.gae(v.e),q=new C.fh(r,new A.d2I(f));q.C();){p=r.gS(0)
o=p.c
n=new C.aW(14,14)
m=f.w
k=p.a
m=m===k
i=m?D.b1:D.b2
g=new C.aA(i,m?3:1,D.q,-1)
i=C.a([],h)
if(u.b.iS(0,k))i.push(new C.C(D.fx,C.X(D.ee,p.d,e,e,e,18),e))
m=p.b
k=p.d
i.push(new C.x(m,e,new C.G(!0,k,e,e,e,e,13,D.u,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e),e,e,e,e,e,e,e,e,e))
s.push(new C.C(D.jd,C.aE(e,C.p(e,new C.cn(D.aO,D.e,D.j,D.m,e,D.p,e,0,i,e),D.f,e,e,new C.o(o,e,new C.bP(g,g,g,g),new C.bq(n,n,n,n),e,e,D.n),e,e,e,e,D.hw,e,e,e),D.y,!1,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,new A.d2J(f,p),e,e,e,e,e,e,!1,D.a8),e))}s=C.bY(D.bz,s,D.br,6,8)
if(t)u="Push it into the box"
else u=u.a?"Turn the breaker OFF first":"Fasten every wire first"
D.d.v(j,C.a([s,D.O,C.A(C.a([A.ya(u,B.alr,t?new A.d2K(f):e,D.aH)],h),D.m,e,D.e,D.j,0,e,e)],h))}else if(s===1)D.d.v(j,C.a([C.A(C.a([A.ya("Pull it back out",D.r3,new A.d2L(f),D.ad),D.ab,A.ya("Put the cover plate on",R.vq,new A.d2M(f),D.aH)],h),D.m,e,D.e,D.j,0,e,e)],h))
else{s=A.ya("Start over",D.lh,new A.d2N(f),D.ad)
u=u.d
r=u?"Tested \u2713":"Power on and test"
D.d.v(j,C.a([C.A(C.a([s,D.ab,A.ya(r,D.h7,u?e:f.gcw6(),D.aH)],h),D.m,e,D.e,D.j,0,e,e)],h))}return new A.B0(v.b,D.aH,l,C.v(j,D.m,e,D.e,D.Q,0,D.p),new A.d2F(f,a1,d),w,e)}}
A.a8t.prototype={
U(){return new A.aEi()},
gdc(d){return this.c}}
A.aEi.prototype={
geS(d){var w,v=this.d
if(v===$){w=this.a.c
v=this.d=w==null?A.fR_():w}return v},
gkT(){var w=this.e
return w===$?this.e=new A.AG(-0.3,0.18,40,B.aRF,$.aw()):w},
goF(){var w=this.f
return w===$?this.f=A.bzK(this.geS(0)):w},
q(){var w=this.z
if(w!=null)w.a7(0)
this.a2()},
kw(d,e){var w=this,v=w.z
if(v!=null)v.a7(0)
w.m(new A.eMB(w,d,e))
w.z=C.cM(D.la,new A.eMC(w))},
p_(d){return this.kw(d,!1)},
nX(){this.gkT().lW(40,0.18,B.aRF,-0.3)
this.m(new A.eMu(this))},
Ir(d){var w,v,u,t,s,r,q=this,p="square"
if(d===0){q.nX()
return}w=C.F([41,"tail",42,"trap",43,"arm"],x.S,x.N).h(0,d)
if(w!=null&&!q.geS(0).a.t(0,w)){v=q.r
if(v.length===0){if(w==="tail")v="tailpiece"
else v=w==="trap"?"P-trap":"trap arm"
q.p_("Pick the "+v+" from the buttons below first, then tap its glowing outline.")
return}if(v!==w){A.ku(180,220,0.25,p)
u=q.r
A:{if("tail"===u){v="The tailpiece is the straight pipe that hangs from the sink. It goes at the very top, under the drain."
break A}if("trap"===u){v="The P-trap is the U-shaped bend. It goes right under the tailpiece, in the middle."
break A}v="The trap arm is the long straight pipe that goes into the wall. It goes last, on the right."
break A}q.p_(v)
return}if(w==="trap"&&!q.geS(0).a.t(0,"tail")){A.ku(180,220,0.25,p)
q.p_("Start from the top: put the tailpiece on first, then the trap under it.")
return}if(w==="arm"&&!q.geS(0).a.t(0,"trap")){A.ku(180,220,0.25,p)
q.p_("The trap arm joins the trap. Put the P-trap on first.")
return}q.m(new A.eMv(q,w))
A.yb()
q.kw("Piece in place. "+(q.geS(0).a.a===3?"Now tighten the two slip nuts: tap each nut.":"Pick the next piece."),!0)
return}v=d===44
if(v||d===45){t=v?"n1":"n2"
if(q.geS(0).b.h(0,t)!==!0){q.m(new A.eMw(q,t))
A.yb()
q.kw("Slip nut hand tightened. In real life give it a quarter turn more with pliers, but never over-tighten plastic.",!0)
return}}s=q.goF().b.h(0,d)
if(s!=null){q.m(new A.eMx(q,d))
v=q.gkT()
r=s.c
v.zg(s.d,r)}},
c3w(){var w=this,v=x.cc,u=C.B(new C.a2(C.a(["n1","n2"],x.s),new A.eMy(w),v),v.k("J.E"))
w.m(new A.eMz(w,u))
if(u.length!==0){A.ku(180,220,0.25,"square")
w.p_("It is dripping from a loose slip nut! Tap the nut and tighten it, then run the water again.")}else{A.yb()
w.kw("No leaks. The water flows through the trap and into the wall. The little pool in the U-bend stays there and blocks sewer gas. The lesson is complete!",!0)}},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.geS(0),i=j.a,h=i.t(0,"tail"),g=i.t(0,"trap"),f=i.t(0,"arm"),e=j.b
e=e.h(0,"n1")===!0&&e.h(0,"n2")===!0
w=C.a([h,g,f,e,j.c&&j.d.length===0],x.u)
v=D.d.bd(w,new A.eMG())
u=i.a===3
j=v<0?"All done":"Step "+(v+1)+"/5"
h=l.goF()
g=l.gkT()
f=l.w
e=l.x
t=l.y
s=f!==0?l.goF().b.h(0,l.w):k
h=A.X2(k,g,new A.eMH(l),t,f,s,k,k,e,k,k,l.gIp(),l.gIq(),h,!1,k,k)
e=x.p
s=C.a([],e)
for(r=0;r<3;++r){q=B.dbO[r]
g=i.t(0,q)?k:new A.eMI(l,q)
f=i.t(0,q)?D.dp:D.fm
t=new C.aW(14,14)
p=l.r===q
o=p?D.b1:D.b2
n=new C.aA(o,p?3:1,D.q,-1)
o=C.a([],e)
if(i.t(0,q))o.push(B.e4q)
p=B.djw.h(0,q)
p.toString
m=i.t(0,q)?D.c_:D.c
o.push(new C.x(p,k,new C.G(!0,m,k,k,k,k,13,D.u,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k),k,k,k,k,k,k,k,k,k))
s.push(new C.C(D.jd,C.aE(k,C.p(k,new C.cn(D.aO,D.e,D.j,D.m,k,D.p,k,0,o,k),D.f,k,k,new C.o(f,k,new C.bP(n,n,n,n),new C.bq(t,t,t,t),k,k,D.n),k,k,k,k,D.hw,k,k,k),D.y,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,g,k,k,k,k,k,k,!1,D.a8),k))}i=C.bY(D.bz,s,D.br,6,8)
g=A.ya("Start over",D.lh,new A.eMJ(l),D.ad)
f=u?"Run the water":"Build the drain first"
return new A.B0("Sink drain (P-trap)",D.cr,h,C.v(C.a([i,D.O,C.A(C.a([g,D.ab,A.ya(f,D.pU,u?l.gc3v():k,D.cr)],e),D.m,k,D.e,D.j,0,k,k)],e),D.m,k,D.e,D.Q,0,D.p),new A.eMK(d,w),j,k)}}
A.a3T.prototype={
U(){return new A.ayC()},
gdc(d){return this.c}}
A.ayC.prototype={
geS(d){var w,v=this.d
if(v===$){w=this.a.c
v=this.d=w==null?A.fR_():w}return v},
gkT(){var w=this.e
return w===$?this.e=new A.AG(-0.25,0.2,36,B.aRl,$.aw()):w},
goF(){var w=this.f
return w===$?this.f=A.aNz(this.geS(0)):w},
q(){var w=this.z
if(w!=null)w.a7(0)
this.a2()},
kw(d,e){var w=this,v=w.z
if(v!=null)v.a7(0)
w.m(new A.d5n(w,d,e))
w.z=C.cM(D.la,new A.d5o(w))},
p_(d){return this.kw(d,!1)},
nX(){this.gkT().lW(36,0.2,B.aRl,-0.25)
this.m(new A.d5f(this))},
Ir(d){var w,v,u,t,s,r,q=this
if(d===0){q.nX()
return}w=x.fZ
v=C.B(new C.a2(B.a2t,new A.d5i(d),w),w.k("J.E"))
if(v.length!==0&&q.r.length!==0){w=q.geS(0)
u=A.i5w(w,q.r,D.d.gL(v))
if(u!=null){A.ku(180,220,0.25,"square")
q.p_(u)}else{A.yb()
q.m(new A.d5j(q,d))
q.gkT().zg(12,A.afz(d))
q.kw(A.foO(w)?"All four ends are connected. Now open the valves.":D.d.gL(v).b+": connected.",!0)}return}w=d===68
if(w||d===69){t=w?"hot":"cold"
if(q.geS(0).e.iS(0,t)){q.m(new A.d5k(q,t))
q.kw("Hose taken off.",!0)
return}}s=q.goF().b.h(0,d)
if(s!=null){q.m(new A.d5l(q,d))
w=q.gkT()
r=s.c
w.zg(s.d,r)}},
c3t(d){var w,v=this
v.m(new A.d5g(v))
w=v.geS(0)
if(!w.f){v.kw("Valves closed.",!0)
return}if(A.foO(w)){A.yb()
v.kw("Hot and cold flow through the hoses and out of the faucet. No leaks. The lesson is complete!",!0)}else{A.ku(180,220,0.25,"square")
v.p_("Water is spraying out of a valve that has no hose! Close the valves and finish connecting the hoses first.")}},
B(d){var w,v,u,t,s,r,q,p,o,n=this,m=null,l=n.geS(0),k=l.r||l.e.a!==0,j=l.e,i=j.h(0,61)==="hot"&&j.h(0,63)==="hot",h=j.h(0,62)==="cold"&&j.h(0,64)==="cold",g=C.a([k,i,h,l.f&&A.foO(l)],x.u),f=D.d.bd(g,new A.d5s())
k=f<0?"All done":"Step "+(f+1)+"/4"
i=n.goF()
h=n.gkT()
w=n.w
v=n.x
u=n.y
t=w!==0?n.goF().b.h(0,n.w):m
s=x.p
i=A.X2(m,h,new A.d5t(n),u,w,t,m,m,v,m,m,n.gIp(),n.gIq(),i,!1,m,C.a([A.Qo("Hints",D.aH,D.r0,l.r,new A.d5u(n)),D.O],s))
v=C.a([],s)
for(r=0;r<2;++r){h={}
w=B.dbi[r]
h.a=null
q=w.a
h.a=q
u=new C.aW(14,14)
t=n.r===q
p=t?D.b1:D.b2
o=new C.aA(p,t?3:1,D.q,-1)
p=C.a([],s)
t=C.a3(j).k("bc<2>")
if(new C.a2(new C.bc(j,t),new A.d5v(h),t.k("a2<J.E>")).gM(0)===2)p.push(B.e4s)
p.push(new C.x(w.b,m,D.rD,m,m,m,m,m,m,m,m,m))
v.push(new C.C(D.jd,C.aE(m,C.p(m,new C.cn(D.aO,D.e,D.j,D.m,m,D.p,m,0,p,m),D.f,m,m,new C.o(w.c,m,new C.bP(o,o,o,o),new C.bq(u,u,u,u),m,m,D.n),m,m,m,m,D.hw,m,m,m),D.y,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new A.d5w(h,n),m,m,m,m,m,m,!1,D.a8),m))}j=C.bY(D.bz,v,D.br,6,8)
h=A.ya("Start over",D.lh,new A.d5x(n),D.ad)
l=l.f?"Close the valves":"Open the valves"
return new A.B0("Faucet supply lines",D.cg,i,C.v(C.a([j,D.O,C.A(C.a([h,D.ab,A.ya(l,D.pU,n.gc3s(n),D.cg)],s),D.m,m,D.e,D.j,0,m,m)],s),D.m,m,D.e,D.Q,0,D.p),new A.d5y(d,g),k,m)}}
A.azu.prototype={
U(){return new A.azv(A.h15())}}
A.azv.prototype={
gkT(){var w,v=this.e
if(v===$){w=new A.AG(-0.3,0.48,46,B.TG,$.aw())
w.f=80
this.e=w
v=w}return v},
goF(){var w=this.f
return w===$?this.f=A.afm(this.d):w},
q(){var w=this.z
if(w!=null)w.a7(0)
this.a2()},
kw(d,e){var w=this,v=w.z
if(v!=null)v.a7(0)
w.m(new A.dcs(w,d,e))
w.z=C.cM(D.la,new A.dct(w))},
p_(d){return this.kw(d,!1)},
nX(){this.gkT().lW(46,0.48,B.TG,-0.3)
this.m(new A.dcm(this))},
Ir(d){var w,v,u,t=this
if(d===0){t.nX()
return}if(d===72){w=t.d
w=w.d.t(0,72)&&w.a>=5}else w=!1
if(w){t.m(new A.dco(t,d))
A.yb()
t.kw("You flipped the breaker fully OFF and then ON. The living room light is back on. A breaker trips when a circuit is overloaded: find out why before it trips again.",!0)
t.gkT().zg(22,B.fHk)
return}w=d===87
if(w||d===86){v=t.d
v=v.b&&!v.c&&v.a>=5}else v=!1
if(v){if(t.w==="wrench"&&w){t.m(new A.dcp(t,d))
A.yb()
t.kw("You tightened the slip nut with the wrench. The drip has stopped.",!0)
return}A.ku(180,220,0.25,"square")
t.p_(w?"Hand tightening is not enough here. Pick the wrench first, then tap the nut.":"The water is dripping from the slip nut on the trap. Pick the wrench, then tap the nut.")}u=t.goF().b.h(0,d)
if(u!=null){t.m(new A.dcq(t,d))
w=t.gkT()
v=u.c
w.zg(u.d,v)}},
cbf(d){var w,v
A:{if("ptrap"===d){w=B.eaq
break A}if("faucet"===d){w=B.bwY
break A}w=new A.GZ(d,null,null)
break A}v=this.c
v.toString
C.a6(v,!1).c8(C.e8(new A.dcn(w),!1,null,x.H))},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.d,l=B.d6I[m.a],k=o.r,j=k===0?n:A.hVQ(k)
k=m.d.t(0,72)
w=!m.b||m.c
v=C.a([!k,w],x.u)
w=m.a
k=o.goF()
u=o.gkT()
t=o.r
s=o.x
r=o.y
q=t!==0?o.goF().b.h(0,o.r):n
p=j==null?n:C.aE(n,C.p(n,B.f8c,D.f,n,n,new C.o(D.aH,n,n,C.m(12),n,n,D.n),n,n,n,n,D.tu,n,n,n),D.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new A.dcw(o,j),n,n,n,n,n,n,!1,D.a8)
k=A.X2(n,u,new A.dcx(o),r,t,q,p,new A.dcy(o),s,n,n,o.gIp(),o.gIq(),k,!1,n,n)
s=l.a
p=x.p
q=C.A(C.a([C.E(C.d(""+(m.a+1)+". "+s,n,n,n,n,n,n,B.f0O,n,n,n),1),A.Qo("Wrench",D.aS,D.qW,o.w==="wrench",new A.dcz(o))],p),D.m,n,D.e,D.j,0,n,n)
t=C.d(l.b,n,3,D.a2,n,n,n,B.f1U,n,n,n)
m=C.kW(D.by,6,s,6,0,new A.dcA(o),m.a)
u=v[0]
s=u?"\u2705 Living room power fixed":"\u26a0 Living room has no power"
s=C.E(C.d(s,n,n,n,n,n,n,C.l(n,n,u?D.es:D.f3,n,n,n,n,n,n,n,n,11.5,n,n,D.H,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),1)
u=v[1]
r=u?"\u2705 Sink leak fixed":"\u26a0 Kitchen sink drips"
return new A.B0("Build and fix a house",D.by,k,C.v(C.a([q,D.bB,t,m,C.A(C.a([s,C.E(C.d(r,n,n,n,n,n,n,C.l(n,n,u?D.es:D.f3,n,n,n,n,n,n,n,n,11.5,n,n,D.H,n,n,!0,n,n,n,n,n,n,n,n),D.dL,n,n),1)],p),D.m,n,D.e,D.j,0,n,n)],p),D.m,n,D.e,D.Q,0,D.p),new A.dcB(d,v),"Stage "+(w+1)+"/7",n)}}
A.jy.prototype={}
A.Mb.prototype={}
A.a5Z.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m=null,l=x.p,k=C.a([C.A(C.a([C.aH(m,m,m,m,M.ne,m,m,m,new A.c5B(d),m,m,m,m,m,m),B.fhR],l),D.m,m,D.e,D.j,0,m,m)],l)
for(w=0;w<5;++w){v=B.ddm[w]
u=v.c
t=C.a([new C.C(D.ahF,new C.x(v.b+"  "+v.a.toUpperCase(),m,new C.G(!0,u,m,m,m,m,12,D.u,m,1.1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m,m,m,m,m,m,m,m,m),m)],l)
for(s=v.d,r=s.length,q=0;q<r;++q){p=s[q]
o=new C.aW(14,14)
n=new C.aA(u.j(0.35),1,D.q,-1)
t.push(C.p(m,C.v(C.a([new C.x(p.a,m,D.j1,m,m,m,m,m,m,m,m,m),D.cX,new C.x(p.b,m,E.Tb,m,m,m,m,m,m,m,m,m)],l),D.F,m,D.e,D.j,0,D.p),D.f,m,m,new C.o(B.Ej,m,new C.bP(n,n,n,n),new C.bq(o,o,o,o),m,m,D.n),m,m,m,D.cH,D.bj,m,m,m))}D.d.v(k,t)}return C.c8(m,D.bX,C.bn(!0,C.cB(k,m,B.agJ,m,m,D.ah,!1),!0,!1,D.af,!0,!0),m,!1,!1,m,m)}}
A.cgr.prototype={}
A.Ew.prototype={}
A.ng.prototype={}
A.Wa.prototype={}
A.cgh.prototype={
bwd(d,e,f){var w,v=this
if(f!=null)w=D.d.iD(B.ava,new A.cgl(f))
else{w=new C.eJ()
w.dB(v.a)
w=B.ava[w.aB(2)]}v.c!==$&&C.aP()
v.c=w
w=new C.eJ()
w.dB(v.a+7)
w=w.ha()
v.d!==$&&C.aP()
v.d=w},
uQ(d,e){var w=this.c
w===$&&C.c()
return D.d.iD(w.c,new A.cgm(e))},
Oz(d){++this.w
return new A.eF(!1,d,!1,"")},
c0X(d){var w=d.d
return new C.K(w,new A.cgi(this),C.U(w).k("K<1,n>")).aI(0," and ")},
bfu(d,e){var w,v,u,t,s=this,r=s.uQ(0,e),q=s.e
if(q.t(0,e))return s.Oz("The "+r.c.toLowerCase()+" is already there.")
if(d!==r.b)return s.Oz(s.b?"That does not go here.":"That does not go here. This spot is for the "+r.c.toLowerCase()+".")
for(w=r.d,v=w.length,u=0;u<v;++u)if(!q.t(0,w[u])){q=s.b?"Not yet: something has to go in first.":"Not yet. "+r.e+" Put in the "+s.c0X(r)+" first.";++s.w
return new A.eF(!1,q,!1,"")}if(r.f&&s.r)return s.Oz(s.b?"The water is still on!":"Stop! The water is still on. Cutting into a pipe with the water on floods the room. Turn the water off at the main valve first (pick the hand and tap the main valve).")
q.K(0,e)
s.y=!1
s.x.a9(0)
if(r.r>0)t=s.b?"":" It is only loose. Pick the wrench and tap it to tighten the joints."
else t=""
return new A.eF(!0,r.c+" fitted."+t,!1,"")},
bgM(d){var w,v,u,t,s=this,r=s.uQ(0,d)
if(!s.e.t(0,d))return s.Oz(s.b?"Nothing to tighten yet.":"There is nothing to tighten yet: the "+r.c.toLowerCase()+" is not fitted.")
w=r.r
if(w===0)return s.Oz(s.b?"That does not need tightening.":"The "+r.c.toLowerCase()+" does not have joints to tighten. It just sits in place.")
v=s.f
u=v.h(0,d)
if(u==null)u=0
if(u>=w)return s.Oz("Already tight. More force would crack it.")
t=u+1
v.n(0,d,t)
s.x.a9(0)
s.y=!1
v=r.c
return new A.eF(!0,t>=w?v+": every joint is tight now.":v+": one joint tightened, one to go.",!1,"")},
beq(d){var w=this.uQ(0,d),v=this.f.h(0,d)
if(v==null)v=0
return w.r-v},
aHd(){var w,v,u,t,s,r,q=this
q.r=!q.r
w=q.x
w.a9(0)
if(!q.r)return B.aUA
v=q.c
v===$&&C.c()
u=v.c
t=C.U(u).k("a2<1>")
s=C.B(new C.a2(u,new A.cgn(q),t),t.k("J.E"))
v=v.c
u=C.U(v).k("a2<1>")
r=C.B(new C.a2(v,new A.cgo(q),u),u.k("J.E"))
q.y=!0
if(s.length!==0){w.v(0,new C.K(s,new A.cgp(),C.U(s).k("K<1,n>")));++q.w
return new A.eF(!1,"Water is spraying from an open pipe where the "+D.d.gL(s).c.toLowerCase()+" should be! Turn the water off and finish the job.",!0,"")}if(r.length!==0){w.v(0,new C.K(r,new A.cgq(),C.U(r).k("K<1,n>")));++q.w
return new A.eF(!1,"The "+D.d.gL(r).c.toLowerCase()+" is leaking from a loose joint. Turn the water off, tighten it with the wrench, then test again.",!0,"")}if(!q.gaj6())return B.aUq
return B.aUd},
cDG(){var w,v,u,t,s,r,q,p=this
p.r=!0
p.aHd()
w=p.c
w===$&&C.c()
v=w.c
u=v.length
t=0
for(;t<u;++t){s=v[t]
p.bfu(s.b,s.a)}for(w=w.c,v=w.length,t=0;t<v;++t){s=w[t]
for(u=s.r,r=s.a,q=0;q<u;++q)p.bgM(r)}p.aHd()
p.w=0},
gaj6(){var w=this.c
w===$&&C.c()
return D.d.da(w.c,new A.cgj(this))},
gcC_(){var w=this.c
w===$&&C.c()
return D.d.da(w.c,new A.cgk(this))},
gBf(){var w=this
return w.gaj6()&&w.gcC_()&&w.r&&w.y&&w.x.a===0}}
A.Va.prototype={
U(){var w,v=new A.AG(-0.25,0.4,175,B.aSb,$.aw())
v.f=200
w=new C.BJ()
$.CE()
w.j2(0)
return new A.aD0(v,w)}}
A.aD0.prototype={
gCl(d){var w=this.d
if(w===$){this.a.toString
w=D.o.F(Date.now(),1e5)
this.d=w}return w},
a_(){var w,v=this
v.a1()
w=v.a.d
if(w==null){w=v.gCl(0)
v.a.toString
w=A.fQZ(!1,w,null)}v.e=w
v.r=A.hfk(w,v.x,!w.b)},
q(){var w=this.at
if(w!=null)w.a7(0)
this.a2()},
acN(){var w=this.e
w===$&&C.c()
return this.r=A.hfk(w,this.x,!w.b)},
aXl(d,e){var w=this,v=w.at
if(v!=null)v.a7(0)
w.m(new A.egu(w,d,e))
w.at=C.cM(D.ju,new A.egv(w))},
aXk(){this.f.lW(175,0.4,B.aSb,-0.25)
this.m(new A.egn(this))},
ctR(d){var w,v,u=this.e
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
awz(d){var w=this.e
w===$&&C.c();++w.w
return new A.eF(!1,d,!1,"")},
c3A(d){return this.aXj(d)},
ct9(d){var w
A:{if("main"===d){w=9400
break A}w=this.e
w===$&&C.c()
w=w.c
w===$&&C.c()
w=9100+D.d.bd(w.c,new A.egw(d))
break A}this.aXj(w)},
b4m(){var w,v,u,t,s,r,q,p=this,o=p.x
if(o==="hand")return C.a([B.esz],x.L)
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
q=r.uQ(0,s)
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
if(t.b===p.x&&!p.e.e.t(0,t.a))o.push(new C.y(t.a,t.c))}return o},
aXj(d){var w,v,u,t,s,r=this
if(d===0)return
w=r.r
w===$&&C.c()
v=w.b.h(0,d)
if(r.x.length===0){r.m(new A.egf(r,d))
if(v!=null)r.aXl(v.a+": "+v.b,!0)
return}u=r.ctR(d)
w=r.x
if(w==="hand")if(d===9400){w=r.e
w===$&&C.c()
t=w.aHd()}else{w=r.e
w===$&&C.c()
t=r.awz(w.b?"Your hand is only for the main water valve.":"Your hand is for the main water valve. Parts are placed by picking them from the tray.")}else if(w==="wrench")if(u==null){w=r.e
w===$&&C.c()
t=r.awz(w.b?"Nothing to tighten.":"There is nothing to tighten there.")}else{w=r.e
w===$&&C.c()
t=w.bgM(u)}else if(u==null){w=r.e
w===$&&C.c()
t=r.awz(w.b?"Not there.":"That does not go there. Tap one of the glowing spots.")}else{s=r.e
s===$&&C.c()
t=s.bfu(w,u)}w=t.a
if(w)A.yb()
else A.ku(180,220,0.25,"square")
r.m(new A.egg(r,d))
w=w&&!t.c
r.aXl(t.b,w)
w=r.e
w===$&&C.c()
if(w.gBf()&&!r.as){r.as=!0
$.aU.x1$.push(new A.egh(r))}},
c3x(){var w=null,v=this.c
v.toString
C.ca(w,w,!0,w,new A.egm(this),v,w,!0,!0,x.H)},
aWf(){this.m(new A.egs(this))
this.aXk()},
avH(d,e,f){var w,v=null,u=this.x===d,t=u?D.aH.j(0.25):D.c.j(0.07),s=C.m(14),r=u?D.aH:D.b2
r=C.I(r,D.q,u?2:1)
w=C.X(f,u?D.aH:D.ad,v,v,v,19)
return new C.C(E.ts,C.aE(v,C.p(v,C.A(C.a([w,D.bp,C.d(e,v,v,v,v,v,v,C.l(v,v,u?D.aH:D.c,v,v,v,v,v,v,v,v,12.5,v,v,D.H,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),D.m,v,D.e,D.j,0,v,v),D.f,v,v,new C.o(t,v,r,s,v,v,D.n),v,v,v,v,D.fU,v,v,v),D.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new A.egj(this,u,d),v,v,v,v,v,v,!1,D.a8),v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.e
h===$&&C.c()
h=h.c
h===$&&C.c()
h=h.c
w=new C.a2(h,new A.egx(j),C.U(h).k("a2<1>")).gM(0)
h=j.e.c
h===$&&C.c()
v=j.r
v===$&&C.c()
u=j.y
t=j.z
s=j.Q
r=u!==0?v.b.h(0,u):i
v=A.X2(i,j.f,new A.egy(j),s,u,r,i,new A.egz(),t,i,i,j.gc3y(),j.gc3z(),v,!1,i,i)
t=x.p
r=C.a([],t)
if(j.x.length!==0&&j.b4m().length!==0){u=C.a([],t)
for(s=j.b4m(),q=s.length,p=0;p<s.length;s.length===q||(0,C.L)(s),++p){o={}
n=s[p]
o.a=null
o.a=n.a
m=new C.aW(12,12)
l=new C.aA(D.b1,1,D.q,-1)
u.push(C.aE(i,C.p(i,new C.x("\ud83d\udccd "+n.b,i,D.ob,i,i,i,i,i,i,i,i,i),D.f,i,i,new C.o(D.fb.j(0.35),i,new C.bP(l,l,l,l),new C.bq(m,m,m,m),i,i,D.n),i,i,i,i,B.XN,i,i,i),D.y,!1,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,new A.egA(o,j),i,i,i,i,i,i,!1,D.a8))}r.push(new C.C(D.eO,C.bY(D.bz,u,D.br,6,6),i))}u=j.e
if(u.b)u="Practice mode: no hints. Build it in the right order."
else if(u.gaj6())u="Everything is fitted. Tighten every joint, then turn the main water on to test."
else{u=j.e.c
u===$&&C.c()
u="Job: "+u.d}r.push(new C.bH(D.a3,i,i,C.d(u,i,2,D.a2,i,i,i,B.aOB,i,i,i),i))
r.push(D.O)
t=C.a([j.avH("hand","Hand",B.all),j.avH("wrench","Wrench",D.qW)],t)
for(p=0;p<11;++p){k=B.bVK[p]
u=B.dhs.h(0,k)
u.toString
t.push(j.avH(k,u,A1.akK))}r.push(new C.a7(i,52,C.cB(t,i,i,i,i,D.aO,!1),i))
return new A.B0("Plumbing job: "+h.b,D.aS,v,C.v(r,D.m,i,D.e,D.Q,0,D.p),new A.egB(j,d),""+w+"/"+h.c.length+" fitted",i)},
bYQ(d){return C.bV(E.mb,null,new A.egr(this),d,!0,!0,!0,D.kY,!1,!1,x.H)}}
A.yv.prototype={}
A.pL.prototype={}
A.WP.prototype={}
A.atY.prototype={}
A.aSp.prototype={}
A.eF.prototype={
gjc(){return this.a}}
A.b3K.prototype={
cgA(d,e){var w,v,u,t,s=this,r=null,q="outlet",p="switch",o=new C.eJ()
o.dB(s.a)
w=d==null?o.aB(3):d
v=C.a([0,1,2],x.t)
D.d.ft(v,o)
u=3+o.aB(2)
switch(w){case 0:t=e==null?"Living room":e
s.c!==$&&C.aP()
s.c=t
t=C.a([new A.pL(v[0],q,r),new A.pL(v[1],q,r),new A.pL(5,"light",u),new A.pL(u,p,r)],x.B)
s.d!==$&&C.aP()
s.d=t
break
case 1:t=e==null?"Bedroom":e
s.c!==$&&C.aP()
s.c=t
t=C.a([new A.pL(v[0],q,r),new A.pL(v[1],q,r),new A.pL(6,"fan",u),new A.pL(u,p,r)],x.B)
s.d!==$&&C.aP()
s.d=t
break
default:t=e==null?"Kitchen":e
s.c!==$&&C.aP()
s.c=t
t=C.a([new A.pL(v[0],"gfci",r),new A.pL(v[1],"gfci",r),new A.pL(5,"light",u),new A.pL(u,p,r)],x.B)
s.d!==$&&C.aP()
s.d=t}},
galR(){var w,v=C.aX(x.S),u=this.d
u===$&&C.c()
w=0
for(;w<4;++w)v.K(0,u[w].a)
return v},
cPD(d){var w,v,u=this.d
u===$&&C.c()
w=0
for(;w<4;++w){v=u[w]
if(v.a===d)return v}return null},
fN(d){++this.f
return new A.eF(!1,d,!1,"")},
aDE(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.d
g===$&&C.c()
w=h.x
v=0
for(;v<4;++v){u=g[v].a
t=A.l2(u)
if(t.e==="fan")s="fan"
else s=t.c?"ceiling":"wall"
w.n(0,u,s)}g=C.a([],x.t)
for(r=0;r<$.Gr().length;++r)g.push(r)
h.y.v(0,g)
h.z.v(0,h.galR())
for(g=h.Q,w=x.S,v=0;v<3;++v){q=B.o2[v]
u=C.aX(w)
s=C.aX(w)
p=new A.atY(u,s)
p.d=p.e=p.a=!0
for(o=h.aoG(q),n=o.length,m=0;m<o.length;o.length===n||(0,C.L)(o),++m)for(l=o[m]*10,k=0;k<6;++k)s.K(0,l+k)
for(s=h.galR(),o=C.a3(s),n=new C.mW(s,s.r,o.k("mW<1>")),n.c=s.e,o=o.c,s=q+48;n.C();){l=n.d
if(l==null)l=o.a(l)
t=A.l2(l)
if(!t.c){j=t.d.a
j=j>=q&&j<=s}else j=!1
if(j)u.K(0,l)}g.n(0,q,p)}for(g=h.as,v=0;v<2;++v){i=g[v]
i.a=!0
i.b=3
i.d=i.c=!0}},
cDH(){var w,v,u,t,s,r,q,p,o,n,m=this,l=m.d
l===$&&C.c()
w=0
for(;w<4;++w){v=l[w]
m.bds(v.a,v.b)}for(u=x.S,t=x.N,s=m.at,w=0;w<4;++w){r=l[w].a
q=s.h(0,r)
if(q==null)continue
p=q.a
A:{if("outlet"===p){o=C.F([25,"ground",23,"white",21,"black"],u,t)
break A}if("gfci"===p){o=C.F([25,"ground",24,"white",22,"black"],u,t)
break A}if("switch"===p){o=C.F([25,"ground",21,"blackLine",22,"blackLoad"],u,t)
break A}o=C.F([53,"ground",52,"white",51,"black"],u,t)
break A}for(o=new C.Mf(o,o.r,o.e,C.a3(o).k("Mf<1,2>"));o.C();){n=o.d
m.bbN(r,n.b,n.a)}m.bfN(r)
m.baD(r)}if(!m.ax)m.aHb()
for(w=0;w<4;++w){v=l[w]
u=v.b
if(u==="outlet"||u==="gfci"){u=v.a
m.bfw(u,"lamp")
m.bh4(u)}}for(l=D.d.gae(l),u=new C.fh(l,new A.clf());u.C();){t=l.gS(0).a
m.aDP(t)
m.aDP(t)}},
aJz(d){var w,v,u=A.l2(d).d.a,t=C.a([],x.t)
for(w=0;v=$.Gr(),w<v.length;++w){v=v[w]
if(v>u&&v<64)t.push(w)}return t},
cNx(d,e){var w,v,u=this,t=u.x
if(t.ai(0,d))return u.fN("There is already a box at "+A.l2(d).b+".")
w=A.l2(d)
v=w.c
if(!v&&e!=="wall")return u.fN("That is a ceiling box. On the wall you use a plain wall box (the blue one with ears).")
if(v&&e==="wall")return u.fN("A wall box cannot go in the ceiling. Use a round ceiling box.")
if(w.e==="fan"&&e!=="fan"){if(!u.b)return u.fN('A fan is heavy and it shakes. It needs a box that says "fan rated". A plain ceiling box can let the fan fall.')
t.n(0,d,e);++u.f
return B.aUO}t.n(0,d,e)
t=v?"ceiling joist":"side of the stud"
return new A.eF(!0,w.b+": box fixed to the "+t+".",!1,"")},
cIa(d){var w,v=this
if(d<0||d>=$.Gr().length)return B.aUI
w=v.y
if(w.t(0,d))return v.fN("That stud already has a hole.")
if(v.x.a===0)return v.fN("Mount the boxes first. Then you know where the cable has to go and which studs need a hole.")
w.K(0,d)
return B.aUs},
cQF(d){var w,v,u,t,s=this,r=A.l2(d)
if(!s.x.ai(0,d))return s.fN("There is no box at "+r.b+". Mount the box first, then pull the cable to it.")
w=s.z
if(w.t(0,d))return s.fN("The cable is already there.")
v=s.aJz(d)
u=C.U(v).k("a2<1>")
t=C.B(new C.a2(v,new A.clm(s),u),u.k("J.E"))
if(t.length!==0){w=D.o.V($.Gr()[D.d.gL(t)])
v=t.length
u=v===1?"it":"the studs"
return s.fN("The cable is stuck: the stud at "+w+" inches has no hole. Drill "+u+" first ("+v+" left on the way).")}w.K(0,d)
return new A.eF(!0,"Cable pulled from the panel to "+r.b+", through the studs and along the ceiling.",!1,"")},
gaH1(){return this.galR().da(0,new A.cln(this))},
aon(d){var w,v,u,t
for(w=this.Q,w=new C.cK(w,C.a3(w).k("cK<1,2>")).gae(0);w.C();){v=w.d
u=v.b
if(u.a){t=v.a
t=d>=t&&d<=t+48}else t=!1
if(t)return u}return null},
cKU(d){var w,v,u=this
if(!u.gaH1())return u.fN("Finish the rough-in first. The cable and the boxes must be in before the drywall hides the studs.")
if(!D.d.t(B.a2v,d))return B.aUg
if(!D.d.t(B.o2,d))return u.fN("The edge of the sheet would land between two studs. The sheet needs a stud under every edge, so there is nothing to screw it to. Start at the left corner (a stud) and move one sheet width (48 inches) at a time.")
w=u.Q
v=w.h(0,d)
if((v==null?null:v.a)===!0)return u.fN("There is already a sheet there.")
v=w.h(0,d)
if(v==null){v=x.S
v=new A.atY(C.aX(v),C.aX(v))}v.a=!0
w.n(0,d,v)
return B.aUr},
aoG(d){var w,v,u,t=C.a([],x.t)
for(w=d+48,v=0;u=$.Gr(),v<u.length;++v){u=u[v]
if(u>=d&&u<=w)t.push(v)}return t},
cH6(d){var w,v,u=this,t=A.l2(d)
if(t.c)return u.fN("Ceiling fixtures do not need an opening in the wall.")
if(!u.x.ai(0,d))return u.fN("There is no box at "+t.b+".")
w=u.aon(t.d.a)
if(w==null)return u.fN("There is no sheet over this box yet. Hang the sheet first, then cut the opening.")
v=w.b
if(v.t(0,d))return u.fN("The opening is already cut.")
v.K(0,d)
return B.aUB},
aIP(d,e,f){var w,v,u,t,s,r=this
if(f)return r.fN("Missed the stud! There is only air behind the sheet here. The screw would pull through the paper. Screw only where a stud is behind the sheet (every 16 inches).")
w=x.dD
v=C.B(new C.a2(B.o2,new A.clo(r,d),w),w.k("J.E"))
if(v.length===0)return r.fN("There is no sheet here yet.")
u=d*10+e
if(D.d.da(v,new A.clp(r,u)))return r.fN("There is already a screw there.")
for(w=v.length,t=r.Q,s=0;s<v.length;v.length===w||(0,C.L)(v),++s)t.h(0,v[s]).c.K(0,u)
return B.aUD},
bl2(d,e){return this.aIP(d,e,!1)},
bmz(d){var w=this.Q.h(0,d)
if(w==null||!w.a)return!1
return D.d.da(this.aoG(d),new A.clr(w))},
gaBs(){return D.d.da(B.o2,new A.cle(this))},
gaBr(){var w=this.galR()
return new C.a2(w,new A.clc(),C.a3(w).k("a2<co.E>")).da(0,new A.cld(this))},
cSw(d){var w,v=this
if(!v.gaBs())return v.fN("Hang all the sheets first.")
if(!D.d.da(B.o2,v.gaoo()))return v.fN("Finish screwing every sheet to the studs first. Tape goes on a solid wall.")
w=v.as[d]
if(w.a)return v.fN("This seam already has tape.")
w.c=w.a=!0
return B.aUk},
cNA(d){var w,v=this,u=v.as[d]
if(!u.a)return v.fN("Tape first. The mud goes over the tape.")
if(!u.c)return v.fN("The last coat is still wet. Let it dry before the next coat.")
w=u.b
if(w>=3)return v.fN("Three coats are enough. Now sand it.");++w
u.b=w
u.c=!1
return new A.eF(!0,"Coat "+w+" of joint compound spread. Let it dry.",!1,"")},
cMv(){var w,v=this.as
if(D.d.da(v,new A.clk()))return B.aUy
for(w=0;w<2;++w)v[w].c=!0
return B.aUM},
bkQ(d){var w=this,v=w.as[d]
if(v.b<3)return w.fN("Put on all three coats of mud first. Sanding now would just rub off the tape.")
if(!v.c)return w.fN("The mud is still wet. Let it dry first.")
if(v.d)return w.fN("Already sanded.")
v.d=!0
return B.aUh},
cPS(d){var w=this,v=w.Q.h(0,d)
if(v==null||!v.a)return w.fN("There is no sheet there.")
if(!w.gaBr())return w.fN("Cut the openings for the boxes before you paint. Otherwise the paint covers the boxes.")
if(!D.d.da(w.as,new A.cll()))return w.fN("Sand the seams first. Paint shows every bump.")
if(v.e)return w.fN("This sheet is already painted.")
v.e=!0
return B.aUe},
gym(){var w=this
return w.gaBs()&&D.d.da(B.o2,w.gaoo())&&w.gaBr()&&D.d.da(w.as,new A.clg())&&D.d.da(B.o2,new A.clh(w))},
MO(){var w,v
for(w=this.at,w=new C.dt(w,w.r,w.e);w.C();){v=w.d.b
v.a=this.ax&&!this.ay}},
bY3(d,e){if(d.c)return e==="light"||e==="fan"?"":"A ceiling box holds a light or a fan, not an outlet or a switch."
return e==="outlet"||e==="gfci"||e==="switch"?"":"A light or a fan hangs from the ceiling. A wall box holds an outlet, a GFCI or a switch."},
bds(d,e){var w,v,u,t,s,r=this,q=A.l2(d)
if(!r.gym())return r.fN("Finish the drywall first. Devices go in after the walls are painted.")
w=r.x
if(!w.ai(0,d)||!r.z.t(0,d))return r.fN("There is no box with cable at "+q.b+".")
v=r.at
if(v.ai(0,d))return r.fN("There is already a device there. Pull it out first if you want to move it.")
u=r.bY3(q,e)
if(u.length!==0)return r.fN(u)
t=e==="switch"
if(!(t&&q.e==="low"))s=!t&&!q.c&&q.e==="switch"
else s=!0
if(s){if(!r.b)return r.fN(t?"A switch goes about 48 inches from the floor, where a hand falls naturally. This box is down at outlet height.":"Outlets go low, about 16 inches from the floor. This box is up at switch height.");++r.f
r.cy.push("Wrong height at "+q.b+".")}s=e==="fan"
if(s&&w.h(0,d)!=="fan")if(!r.b)return r.fN("This box is not fan rated. A fan on it can fall. Take the box out and put in a fan-rated one.")
w=new A.XG(C.T(x.S,x.N))
w.r=r.b
w.a=r.ax&&!r.ay
v.n(0,d,new A.aSp(e,w))
if(e==="light")w="Light fixture"
else if(s)w="Ceiling fan"
else if(e==="gfci")w="GFCI outlet"
else w=t?"Switch":"Outlet"
return new A.eF(!0,w+" is held up to "+q.b+". Turn the breaker OFF, then wire it.",!1,"")},
cRH(d){var w=this,v=w.at,u=v.h(0,d)
if(u==null)return B.aUo
if(w.ax&&!w.ay&&!u.b.w){if(w.b)return w.a15()
return w.a1k()}v.W(0,d)
w.CW.W(0,d)
w.cx.W(0,d)
w.ch.W(0,d)
return B.aUG},
a1k(){++this.r;++this.f
return B.aUE},
a15(){var w,v,u=this;++u.r;--u.e
u.ax=!1
u.MO()
w=u.e
if(w<=0){u.w=!0
return B.aUn}v=w===1?"life":"lives"
return new A.eF(!1,"ZAP! You touched a live wire and got a shock. The breaker is now off. "+w+" "+v+" left. Always turn the breaker OFF and test the wires first.",!0,"shock")},
bbN(d,e,f){var w,v,u,t=this,s=t.at.h(0,d)
if(s==null)return B.a8P
t.MO()
w=A.Ak(s.a)
v=D.d.iD(w.f,new A.cli(f))
u=A.hk0(w,s.b,e,v,!0)
if(u==null){if(!t.b&&!v.c.t(0,e)){++t.f
return new A.eF(!0,v.b+": fastened. Careful: "+C.t(w.r.$2(e,v))+" It will burn or trip the breaker when the power comes on.",!0,"")}return new A.eF(!0,v.b+": wire fastened.",!1,"")}if(D.a.a0(u,"SHOCK"))return t.a15()
if(D.a.a0(u,"STOP"))return t.a1k();++t.f
return new A.eF(!1,u,!1,"")},
cT1(d,e){var w,v=this,u=v.at.h(0,d)
if(u==null)return B.Uu
v.MO()
w=u.b
if(w.a&&w.c===0){if(v.b)return v.a15()
return v.a1k()}w=w.b
w.bn(w,new A.cls(e))
return B.aUL},
bfN(d){var w,v,u=this,t=u.at.h(0,d)
if(t==null)return B.a8P
w=A.Ak(t.a)
v=t.b
if(!A.bCl(w,v))return u.fN("Every wire must be fastened first.")
if(u.ax&&!u.ay){if(u.b)return u.a15()
return u.a1k()}v.c=1
return B.aUw},
cQG(d){var w,v=this,u=v.at.h(0,d)
if(u==null)return B.Uu
if(v.ax&&!v.ay){if(v.b)return v.a15()
return v.a1k()}w=u.b
w.c=0
w.d=!1
return B.aUC},
baD(d){var w=this.at.h(0,d)
if(w==null||w.b.c!==1)return this.fN("Push the device into the box first.")
w.b.c=2
return B.aUF},
aHC(d){var w=this.at
return A.afy(A.Ak(w.h(0,d).a),w.h(0,d).b)},
aHb(){var w=this
if(w.ay){w.ax=w.ay=!1
w.MO()
return B.aUu}w.ax=!w.ax
w.MO()
if(!w.ax)return B.aUm
return w.c3B()},
c3B(){var w,v,u,t,s,r,q,p,o,n=this,m=C.a([],x.s)
for(w=n.at,v=new C.cK(w,C.a3(w).k("cK<1,2>")).gae(0),u=n.cx,t=!1,s=!1;v.C();){r=v.d
q=r.b.b
if(q.c===0)continue
p=r.a
o=A.afy(A.Ak(w.h(0,p).a),w.h(0,p).b)
q.d=q.c>=2
if(o.d)t=!0
if(o.e){q.w=!0
u.K(0,p)
s=!0}if(o.a!=="ok")m.push(A.l2(p).b+": "+o.b)}if(t){n.ay=!0
n.MO()
w=s?"BANG! Sparks and smoke. ":""
v=D.d.aI(m," ")
u=s?"burn":"trip"
return new A.eF(!1,w+"The breaker tripped. "+v+" Fix it, then flip the breaker OFF and ON again.",!0,u)}if(m.length!==0)return new A.eF(!0,"Power is on. "+D.d.aI(m," "),!0,"")
return B.aUz},
aDP(d){var w,v,u,t,s,r,q=this,p=q.at,o=p.h(0,d)
if(o==null||o.a!=="switch"||o.b.c<2)return B.aUK
w=q.ch
if(w.t(0,d))w.W(0,d)
else w.K(0,d)
v=q.d
v===$&&C.c()
u=C.U(v).k("a2<1>")
t=C.B(new C.a2(v,new A.clj(d),u),u.k("J.E"))
if(t.length===0)return B.aUv
s=D.d.gL(t)
v=s.a
r=q.alF(v)
if(w.t(0,d)&&r){p=p.h(0,v)
if(p!=null)p.c=!0
return new A.eF(!0,(s.b==="fan"?"The fan spins":"The light turns on")+". The switch works.",!1,"")}if(w.t(0,d)){p=s.b
return new A.eF(!1,(p==="fan"?"The fan":"The light")+" did not come on. Check the breaker and the wires on the switch and on the "+p+".",!1,"")}return B.aUJ},
a3e(d){var w,v=this.at.h(0,d)
if(v!=null){w=v.b
w=w.c<2||w.w}else w=!0
if(w)return!1
return this.aHC(d).c},
alF(d){var w=this,v=w.cPD(d),u=v==null,t=u?null:v.c,s=!0
if(!u)if(t!=null)u=!(w.ax&&!w.ay)||!w.a3e(d)||!w.a3e(t)
else u=s
else u=s
if(u)return!1
return w.ch.t(0,t)},
bfw(d,e){var w,v,u=this,t=u.at.h(0,d)
if(t!=null){w=t.a
w=w!=="outlet"&&w!=="gfci"||t.b.c<2}else w=!0
if(w)return u.fN("There is no finished outlet there to plug into.")
w=u.CW
if(w.ai(0,d))return u.fN("Something is already plugged in.")
w.n(0,d,e)
if(t.b.w)return B.aUp
if(u.ax&&!u.ay&&u.a3e(d)){t.c=!0
v=u.aHC(d)
w=v.a
if(w==="reversed"||w==="noGround")return new A.eF(!0,"It runs, but be careful: "+v.b,!0,"")
return new A.eF(!0,A.hDy(e)+" runs. The outlet works.",!1,"")}if(!(u.ax&&!u.ay))return B.aUt
return new A.eF(!1,"Nothing happens. "+u.aHC(d).b,!0,"")},
bh4(d){if(this.CW.W(0,d)==null)return B.Uu
return B.aUl},
gaD5(){var w,v,u,t,s,r=this.d
r===$&&C.c()
w=this.at
v=0
for(;v<4;++v){u=r[v]
t=u.a
s=w.h(0,t)
if(s==null||s.a!==u.b||s.b.c<2)return!1
if(A.afy(A.Ak(w.h(0,t).a),w.h(0,t).b).a!=="ok")return!1
t=u.b
if(t==="outlet"||t==="gfci"){if(!s.c)return!1}else if(t!=="switch"&&!s.c)return!1}return!0}}
A.kY.prototype={}
A.Vd.prototype={
U(){var w,v=new A.AG(-0.12,0.4,205,B.a7S,$.aw())
v.f=300
v.y=0.7
v.r=0.05
w=new C.BJ()
$.CE()
w.j2(0)
return new A.aD7(v,w,C.T(x.S,x.i))}}
A.aD7.prototype={
gCl(d){var w=this.e
if(w===$){this.a.toString
w=D.o.F(Date.now(),1e5)
this.e=w}return w},
a_(){var w,v=this
v.a1()
w=v.a.d
if(w==null){w=v.gCl(0)
w=A.fRo(null,null,v.a.f,w)}v.d=w
if(v.a.d!=null&&w.gym())v.y=2
if(v.a.e){v.d.aDE()
v.y=2}v.r=A.Cr(v.d,new A.vV(v.z,v.Q,!1))
w=v.f
w.x=0
w.y=1.1},
q(){var w=this.cy
if(w!=null)w.a7(0)
this.a2()},
A7(d,e){var w=this,v=w.cy
if(v!=null)v.a7(0)
w.m(new A.ekR(w,d,e))
w.cy=C.cM(D.ju,new A.ekS(w))},
avK(d){return this.A7(d,!1)},
kx(d){var w,v,u,t,s,r=this,q=d.a
if(q)A.yb()
else A.ku(180,220,0.25,"square")
w=d.d
if(w==="shock"){C.fK()
r.m(new A.ek5(r))
C.bN(D.n2,new A.ek6(r),x.P)}if(w==="burn"||w==="trip"){w=r.d
w===$&&C.c()
w=w.cx
w=C.ec(w,w.r,C.a3(w).c)
v=r.x
u=r.w
t=w.$ti.c
while(w.C()){s=w.d
if(s==null)s=t.a(s)
v.n(0,s,u.gpt()/1000+3.5)}C.fK()
A.ku(150,300,0.5,"noise")}w=r.d
w===$&&C.c()
r.r=A.Cr(w,new A.vV(r.z,r.Q,!1))
q=q&&!d.c
r.A7(d.b,q)
if(r.d.w&&r.c!=null)$.aU.x1$.push(new A.ek7(r))
if(r.d.gaD5()&&!r.cx){r.cx=!0
$.aU.x1$.push(new A.ek8(r))}},
b1U(){var w=this.ch?3.141592653589793:-0.12
this.f.lW(205,0.4,B.a7S,w)},
aRL(){var w,v,u=this
u.ch=!1
w=u.f
w.Cn(!1)
w.x=0
u.m(new A.ekg(u))
v=u.d
v===$&&C.c()
u.r=A.Cr(v,new A.vV(u.z,u.Q,!1))
w.lW(205,0.4,B.a7S,-0.12)},
bAo(){var w,v,u=this
u.ch=!0
w=u.f
w.Cn(!0)
u.m(new A.ek9(u))
v=u.d
v===$&&C.c()
u.r=A.Cr(v,new A.vV(u.z,u.Q,!1))
w.lW(190,0.3,B.fzz,3.141592653589793)},
YM(d,e){var w,v,u,t=this,s=A.l2(e),r=t.f
r.Cn(!1)
r.x=0
t.m(new A.eky(t,e))
w=t.d
w===$&&C.c()
t.r=A.Cr(w,new A.vV(t.z,t.Q,!1))
v=A.a1T(s,B.fyu)
w=s.c
u=w?22:15
r.lW(u,w?-0.8:0.26,v,0.3)},
avI(){var w,v=this
v.m(new A.ekh(v))
w=v.d
w===$&&C.c()
v.r=A.Cr(w,new A.vV(v.z,v.Q,!1))
v.b1U()},
c3G(d){var w,v,u,t,s,r,q=this
if(d===0){if(q.Q<0)q.m(new A.ekN(q))
return}w=q.Q
if(w>=0)v=!(d>=5000&&d<5700)
else v=!1
if(v)return
if(d>=5000&&d<5700){v=d-5000
u=D.o.an(v,100)
if(w!==u){if(q.z==="tester")q.aA9(u)
else{q.m(new A.ekO(q))
q.YM(0,u)}return}q.b_E(u,D.o.F(v,100))
return}if(d>=1000&&d<1010)if(q.z==="drill"){w=q.d
w===$&&C.c()
q.kx(w.cIa(d-1000))
return}if(d>=2000&&d<2007){q.b_H(d-2000)
return}if(d>=3000&&d<3007){q.b_F(d-3000)
return}if(d>=6000&&d<6005){if(q.z==="sheet"){w=q.d
w===$&&C.c()
q.kx(w.cKU(B.a2v[d-6000]))}return}if(d>=6100&&d<6103){t=B.o2[d-6100]
if(q.z==="paint"){w=q.d
w===$&&C.c()
q.kx(w.cPS(t))
return}}if(d>=6200&&d<6202){s=d-6200
switch(q.z){case"tape":w=q.d
w===$&&C.c()
q.kx(w.cSw(s))
return
case"mud":w=q.d
w===$&&C.c()
q.kx(w.cNA(s))
return
case"sand":w=q.d
w===$&&C.c()
q.kx(w.bkQ(s))
return}}if(d>=7000&&d<7100){if(q.z==="screw"){w=q.d
w===$&&C.c()
v=d-7000
q.kx(w.bl2(D.o.an(v,10),D.o.F(v,10)))}return}if(d>=7500&&d<7600){if(q.z==="screw"){w=q.d
w===$&&C.c()
v=d-7500
q.kx(w.aIP(D.o.an(v,10),D.o.F(v,10),!0))}return}if(d===8000){w=q.d
w===$&&C.c()
q.kx(w.aHb())
return}if(d>=8100&&d<8107){u=d-8100
w=q.d
w===$&&C.c()
if(w.CW.h(0,u)==="tv"&&q.z!=="unplug"){w=q.c
w.toString
H.fKS(w,0,"tv",!0,D.v3,"Samsung Neo QLED 8K")
return}q.kx(q.d.bh4(u))
return}if(q.z==="look"){w=q.r
w===$&&C.c()
r=w.b.h(0,d)
if(r!=null){q.m(new A.ekP(q,d))
q.A7(r.a+": "+r.b,!0)}}},
b_H(d){var w,v,u,t=this,s=t.d
s===$&&C.c()
if(s.at.ai(0,d)){s=t.z
s=s!=="tester"&&s!=="look"&&!D.d.t(B.GW,s)}else s=!1
if(s){t.m(new A.ekL(t))
t.YM(0,d)
return}s=t.z
switch(s){case"wall":case"ceiling":case"fanbox":w=t.d
t.kx(w.cNx(d,s==="fanbox"?"fan":s))
return
case"cable":t.kx(t.d.cQF(d))
return
case"knife":t.kx(t.d.cH6(d))
return
case"outlet":case"gfci":case"switch":case"light":case"fan":v=t.d.bds(d,s)
t.kx(v)
if(v.a){t.d.at.h(0,d).b.f=!t.d.b
t.z=""
t.YM(0,d)}return
case"tester":t.aA9(d)
return}if(t.d.at.ai(0,d)){t.YM(0,d)
return}s=t.r
s===$&&C.c()
u=s.b.h(0,2000+d)
if(u!=null){t.m(new A.ekM(t,d))
t.A7(u.a+": "+u.b,!0)}},
aA9(d){var w,v=this.d
v===$&&C.c()
w=v.ax&&!v.ay&&v.x.ai(0,d)&&this.d.z.t(0,d)
v=w?"The tester glows: this box is LIVE (120 volts). Turn the breaker OFF before you touch any wire.":"The tester stays dark: no power here. It is safe to work. (Test again after you turn the breaker off, every time.)"
this.A7(v,!w)
A.ku(w?1400:500,120,0.25,"tri")},
b_F(d){var w,v=this,u=v.d
u===$&&C.c()
w=u.at.h(0,d)
if(w==null)return
if(D.d.t(B.GW,v.z)){v.kx(v.d.bfw(d,v.z))
return}u=v.z
if(u==="tester"){v.aA9(d)
return}if(u==="flip"){if(w.a==="switch"&&w.b.c>=2)v.kx(v.d.aDP(d))
else v.avK("Only a finished switch can be flipped.")
return}v.m(new A.ekK(v))
v.YM(0,d)},
b_E(d,e){var w,v,u,t,s,r,q,p=this,o=p.d
o===$&&C.c()
w=o.at.h(0,d)
if(w==null)return
o=w.a
v=A.Ak(o).f
u=C.U(v).k("a2<1>")
t=C.B(new C.a2(v,new A.ekG(e),u),u.k("J.E"))
s=A.hk5(o,e)
if(s!=null){o=w.b
o=o.b.iS(0,s)&&o.c===0}else o=!1
if(o){p.kx(p.d.cT1(d,s))
return}if(t.length!==0&&w.b.c===0){o=p.at
if(o.length===0){p.avK("Pick a wire below first, then tap "+D.d.gL(t).b+".")
p.m(new A.ekH(p,d,e))
return}r=p.d.bbN(d,o,e)
p.kx(r)
if(r.a)p.m(new A.ekI(p))
return}o=p.r
o===$&&C.c()
q=o.b.h(0,5000+d*100+e)
if(q!=null){p.m(new A.ekJ(p,d,e))
p.A7(q.a+": "+q.b,!0)}},
c3H(){var w,v,u,t,s,r,q=this,p=C.a([],x.ek)
for(w=0;w<7;++w){v=B.tV[w]
u=q.d
u===$&&C.c()
t=v.a
s=u.at.ai(0,t)
r=q.z
A:{u=!1
if("wall"===r){u=!v.c&&!q.d.x.ai(0,t)
break A}if("ceiling"===r||"fanbox"===r){u=v.c&&!q.d.x.ai(0,t)
break A}if("cable"===r){u=q.d.x.ai(0,t)&&!q.d.z.t(0,t)
break A}if("knife"===r){u=!v.c&&q.d.x.ai(0,t)
break A}if("outlet"===r||"gfci"===r||"switch"===r){u=!v.c&&q.d.x.ai(0,t)&&!s
break A}if("light"===r||"fan"===r){u=v.c&&q.d.x.ai(0,t)&&!s
break A}if("tv"===r||"lamp"===r||"toaster"===r||"hairdryer"===r){if(s)u=q.d.at.h(0,t).a==="outlet"||q.d.at.h(0,t).a==="gfci"
break A}if("tester"===r){u=q.d.x.ai(0,t)
break A}break A}if(u)p.push(new C.y(t,v.b))}return p},
cta(){var w,v,u,t,s,r,q,p=null,o=this.c3H()
if(o.length===0)return D.bH
w=C.a([],x.p)
for(v=o.length,u=0;u<o.length;o.length===v||(0,C.L)(o),++u){t={}
s=o[u]
t.a=null
t.a=s.a
r=new C.aW(12,12)
q=new C.aA(D.b1,1,D.q,-1)
w.push(C.aE(p,C.p(p,new C.x("\ud83d\udccd "+s.b,p,D.ob,p,p,p,p,p,p,p,p,p),D.f,p,p,new C.o(D.fb.j(0.35),p,new C.bP(q,q,q,q),new C.bq(r,r,r,r),p,p,D.n),p,p,p,p,B.XN,p,p,p),D.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new A.ekT(t,this),p,p,p,p,p,p,!1,D.a8))}return new C.C(D.ib,C.bY(D.bz,w,D.br,6,6),p)},
bMr(){var w=null,v=this.c
v.toString
C.ca(w,w,!1,w,new A.ekf(this),v,w,!0,!0,x.H)},
c3C(){var w=null,v=this.c
v.toString
C.ca(w,w,!0,w,new A.ekc(this),v,w,!0,!0,x.H)},
avJ(d){this.m(new A.eki(this,d))
this.aRL()},
aXm(){return this.avJ(!1)},
c3E(){var w,v,u,t,s,r,q,p,o,n=this,m=n.d
m===$&&C.c()
if(m.w)return"The job is over."
switch(n.y){case 0:m=m.d
m===$&&C.c()
w=C.U(m).k("a2<1>")
v=C.B(new C.a2(m,new A.ekj(n),w),w.k("J.E"))
if(v.length!==0){u=D.d.gL(v)
t=A.l2(u.a)
m=u.b
if(m==="gfci")m="a GFCI"
if(t.c)w=t.e==="fan"?"fan box":"ceiling box"
else w="wall box"
return"Mount a box at "+t.b+" ("+m+" goes here): pick a "+w+", then tap the glowing spot."}m=n.d.d
m===$&&C.c()
w=C.U(m).k("a2<1>")
s=C.B(new C.a2(m,new A.ekk(n),w),w.k("J.E"))
if(s.length!==0){t=D.d.gL(s).a
m=n.d.aJz(t)
r=new C.a2(m,new A.ekl(n),C.U(m).k("a2<1>")).gM(0)
return r>0?"The cable comes from the panel on the right. Pick the drill and tap each stud on the way to "+A.l2(t).b+" ("+r+" left).":"Pick the cable roll and tap "+A.l2(t).b+"."}return"Rough-in done! Open 2 Drywall."
case 1:if(!m.gaH1())return"Finish the rough-in first (tab 1). Drywall hides the wires."
if(!n.d.gaBs())return"Pick a drywall sheet and tap a stud edge to hang it. Three sheets cover the wall."
if(!n.d.gaBr())return"Pick the drywall saw and tap each box to cut its opening."
if(!D.d.da(B.o2,n.d.gaoo()))return"Pick the screw gun and put a screw in every glowing spot on the studs."
if(D.d.b7(n.d.as,new A.eko()))return"Pick the tape and tap each seam between two sheets."
if(D.d.b7(n.d.as,new A.ekp()))return D.d.b7(n.d.as,new A.ekq())?'The mud is wet. Press "Let it dry", then the next coat.':"Pick the mud and tap each seam. It needs three coats, with drying in between."
if(D.d.b7(n.d.as,new A.ekr()))return D.d.b7(n.d.as,new A.eks())?'Press "Let it dry", then sand.':"Pick the sander and tap each seam."
if(!n.d.gym())return"Pick the roller and paint each sheet."
return"Drywall done! Open 3 Devices."
default:if(!m.gym())return"Finish the drywall first (tab 2)."
m=n.d.d
m===$&&C.c()
w=C.U(m).k("a2<1>")
q=C.B(new C.a2(m,new A.ekt(n),w),w.k("J.E"))
if(q.length!==0){u=D.d.gL(q)
m=u.b
if(m==="gfci")m="GFCI"
return"Pick the "+m+" and tap "+A.l2(u.a).b+". ("+C.t(new A.ekw().$1(new C.K(q,new A.eku(),C.U(q).k("K<1,H>"))))+" still need a device.)"}m=n.d.d
m===$&&C.c()
w=C.U(m).k("a2<1>")
p=C.B(new C.a2(m,new A.ekv(n),w),w.k("J.E"))
if(p.length!==0)return"Tap "+A.l2(D.d.gL(p).a).b+" to work on it: breaker OFF, wires, push in, cover on."
m=n.d
if(!m.ax)return"Turn the breaker ON (tap the panel or the breaker button) and test."
m=m.d
m===$&&C.c()
w=C.U(m).k("a2<1>")
o=C.B(new C.a2(m,new A.ekm(n),w),w.k("J.E"))
if(o.length!==0)return"Pick the TV or the lamp and plug it into "+A.l2(D.d.gL(o).a).b+" to test it."
m=n.d.d
m===$&&C.c()
return"Flip the wall switch to test the "+(D.d.b7(m,new A.ekn())?"fan":"light")+"."}},
B(a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=this,a2=null,a3=B.d1Q[a1.y],a4=a1.Q
if(a4>=0){w=a1.d
w===$&&C.c()
v=w.at.h(0,a4)}else v=a2
a4=v==null
u=a4?a2:A.Ak(v.a)
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
for(l=0;l<3;++l)m.push(new C.C(D.Lu,new C.x(l<a1.d.e?"\u2764\ufe0f":"\ud83d\udda4",a2,D.zo,a2,a2,a2,a2,a2,a2,a2,a2,a2),a2))
m.push(D.bp)
k=a1.d
if(k.ay)k=D.jQ
else{k=k.ax
k=k?D.er:D.e3}k=k.j(0.95)
j=C.m(16)
i=a1.d
h=i.ay
if(h)g=D.ct
else{g=i.ax
g=g?D.cg:D.b4}g=C.I(g,D.q,1.4)
if(h)i="TRIPPED: tap to reset"
else{i=i.ax
i=i?"Breaker ON":"Breaker OFF"}m.push(C.aE(a2,C.p(a2,C.d(i,a2,a2,a2,a2,a2,a2,B.f_f,a2,a2,a2),D.f,a2,a2,new C.o(k,a2,g,j,a2,a2,D.n),a2,a2,a2,a2,D.qR,a2,a2,a2),D.y,!1,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,new A.el0(a1),a2,a2,a2,a2,a2,a2,!1,D.a8))
m=C.a([C.A(m,D.m,a2,D.e,D.Q,0,a2,a2)],n)
k=a1.ch
j=k?"In front":"Behind the wall"
i=k?F.akh:F.akg
k=C.a([A.Qo(j,D.by,i,k,k?a1.gbNW():a1.gbAn()),D.an],n)
if(!a4){j=v.b
D.d.v(k,C.a([A.Qo("Labels",D.aS,S.N7,j.f,new A.el1(a1,v)),D.an,A.Qo("Hints",D.aH,D.r0,j.e,new A.el2(a1,v)),D.O],n))}s=A.X2(a2,a1.f,new A.ela(a1),p,r,o,a2,a2,q,a2,a2,new A.elb(a1),a1.gc3F(),s,!1,m,k)
r=C.a([],n)
if(a4){a4=C.a([],n)
for(l=0;l<3;++l){q=l<2?6:0
p=a1.y===l?D.aH.j(0.2):D.dp
o=new C.aW(12,12)
f=new C.aA(a1.y===l?D.aH:D.bF,1,D.q,-1)
if(l===0)m=a1.d.gaH1()
else{m=a1.d
m=l===1?m.gym():m.gaD5()}m=m?"\u2705 ":""
k=B.dan[l]
j=a1.y===l?D.aH:D.ad
a4.push(new C.bD(1,D.bi,C.aE(a2,C.p(a2,new C.cr(D.A,a2,a2,new C.x(m+k,a2,new C.G(!0,j,a2,a2,a2,a2,12,D.u,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2),a2,a2,a2,a2,a2,a2,a2,a2,a2),a2),D.f,a2,a2,new C.o(p,a2,new C.bP(f,f,f,f),new C.bq(o,o,o,o),a2,a2,D.n),a2,a2,a2,new C.Q(0,0,q,0),Q.Lx,a2,a2,a2),D.y,!1,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,new A.elc(a1,l),a2,a2,a2,a2,a2,a2,!1,D.a8),a2))}a4=C.a([C.A(a4,D.m,a2,D.e,D.j,0,a2,a2),D.an],n)
if(!a1.d.b){q=D.aS.j(0.1)
p=C.m(10)
o=C.I(D.aS.j(0.4),D.q,1)
a4.push(C.p(a2,C.d("\ud83d\udc49 "+a1.c3E(),a2,2,D.a2,a2,a2,a2,B.f0J,a2,a2,a2),D.f,a2,a2,new C.o(q,a2,o,p,a2,a2,D.n),a2,a2,a2,a2,D.cm,a2,a2,1/0))}else a4.push(B.fir)
a4.push(D.an)
q=C.a([],n)
if(a1.y<2&&!a1.d.gym())q.push(new C.C(E.ts,C.aE(a2,C.p(a2,B.b3r,D.f,a2,a2,new C.o(D.dS,a2,a2,C.m(14),a2,a2,D.n),a2,a2,a2,a2,D.fU,a2,a2,a2),D.y,!1,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,new A.eld(a1),a2,a2,a2,a2,a2,a2,!1,D.a8),a2))
for(p=a3.length,e=0;e<p;++e){d=a3[e]
o=d.a
m=a1.z===o?D.aH.j(0.25):D.c.j(0.07)
k=new C.aW(14,14)
o=a1.z===o
j=o?D.aH:D.b2
f=new C.aA(j,o?2:1,D.q,-1)
j=o?D.aH:D.ad
j=C.X(d.c,j,a2,a2,a2,19)
o=o?D.aH:D.c
q.push(new C.C(E.ts,C.aE(a2,C.p(a2,new C.cn(D.aO,D.e,D.j,D.m,a2,D.p,a2,0,C.a([j,D.bp,new C.x(d.b,a2,new C.G(!0,o,a2,a2,a2,a2,12.5,D.H,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2),a2,a2,a2,a2,a2,a2,a2,a2,a2)],n),a2),D.f,a2,a2,new C.o(m,a2,new C.bP(f,f,f,f),new C.bq(k,k,k,k),a2,a2,D.n),a2,a2,a2,a2,D.fU,a2,a2,a2),D.y,!1,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,new A.ele(a1,d),a2,a2,a2,a2,a2,a2,!1,D.a8),a2))}if(a1.y===1)q.push(new C.C(E.ts,C.aE(a2,C.p(a2,B.b3j,D.f,a2,a2,new C.o(D.e3,a2,a2,C.m(14),a2,a2,D.n),a2,a2,a2,a2,D.fU,a2,a2,a2),D.y,!1,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,new A.elf(a1),a2,a2,a2,a2,a2,a2,!1,D.a8),a2))
a4.push(new C.a7(a2,52,C.cB(q,a2,a2,a2,a2,D.aO,!1),a2))
if(a1.z.length!==0)a4.push(a1.cta())
D.d.v(r,a4)}else{a4=C.a([],n)
q=v.b
if(q.c===0)for(p=D.d.gae(u.e),o=new C.fh(p,new A.elg(v)),m=q.b;o.C();){k=p.gS(0)
j=k.c
i=new C.aW(14,14)
h=a1.at
g=k.a
h=h===g
a0=h?D.b1:D.b2
f=new C.aA(a0,h?3:1,D.q,-1)
a0=C.a([],n)
if(m.iS(0,g))a0.push(new C.C(D.Lv,C.X(D.ee,k.d,a2,a2,a2,17),a2))
h=k.b
g=k.d
a0.push(new C.x(h,a2,new C.G(!0,g,a2,a2,a2,a2,12.5,D.u,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2),a2,a2,a2,a2,a2,a2,a2,a2,a2))
a4.push(C.aE(a2,C.p(a2,new C.cn(D.aO,D.e,D.Q,D.m,a2,D.p,a2,0,a0,a2),D.f,a2,a2,new C.o(j,a2,new C.bP(f,f,f,f),new C.bq(i,i,i,i),a2,a2,D.n),a2,a2,a2,a2,D.xn,a2,a2,a2),D.y,!1,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,new A.elh(a1,v,k),a2,a2,a2,a2,a2,a2,!1,D.a8))}a4=C.a([C.bY(D.bz,a4,D.br,6,8)],n)
if(q.c===0&&a1.at.length!==0){p=C.a([],n)
for(o=D.d.gae(u.f),m=new C.fh(o,new A.el3(v));m.C();){k=o.gS(0)
j=D.fb.j(0.35)
i=new C.aW(12,12)
f=new C.aA(D.b1,1,D.q,-1)
p.push(C.aE(a2,C.p(a2,new C.x("\u279c "+k.b,a2,D.ob,a2,a2,a2,a2,a2,a2,a2,a2,a2),D.f,a2,a2,new C.o(j,a2,new C.bP(f,f,f,f),new C.bq(i,i,i,i),a2,a2,D.n),a2,a2,a2,a2,B.XN,a2,a2,a2),D.y,!1,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,new A.el4(a1,k),a2,a2,a2,a2,a2,a2,!1,D.a8))}a4.push(new C.C(D.kh,C.bY(D.bz,p,D.br,6,6),a2))}a4.push(D.O)
p=C.a([A.ya("Back to the room",D.pI,a1.gc3D(),D.ad),D.ab],n)
if(q.c===0){u.toString
o=A.bCl(u,q)?"Push it into the box":"Fasten every wire"
p.push(A.ya(o,B.alr,A.bCl(u,q)?new A.el5(a1):a2,D.aH))}if(q.c===1)D.d.v(p,C.a([A.ya("Pull it out",D.r3,new A.el6(a1),D.ad),D.ab,A.ya("Cover on",R.vq,new A.el7(a1),D.aH)],n))
if(q.c>=2){q=q.w
o=q?"Take out the burnt one":"Pull it out again"
q=q?D.cg:D.ad
p.push(A.ya(o,B.bBP,new A.el8(a1),q))}a4.push(C.A(p,D.m,a2,D.e,D.j,0,a2,a2))
D.d.v(r,a4)}a4=C.a([new A.B0(t+" job",D.aH,s,C.v(r,D.m,a2,D.e,D.Q,0,D.p),new A.el9(a1,a5),"Phase "+(w+1)+"/3",a2)],n)
if(a1.CW)a4.push(C.bZ(0,C.e1(C.p(a2,a2,D.f,B.aeF,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2),!0,a2),0,0,0))
return new C.an(D.W,a2,D.aa,D.r,a4,a2)},
cmZ(d){var w=this.d
w===$&&C.c()
if(w.b)return
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
break A}this.A7(w,!0)},
cch(d){return C.bV(E.mb,null,new A.ekF(this),d,!0,!0,!0,D.kY,!1,!1,x.H)}}
A.vV.prototype={}
A.qY.prototype={
a4(){return"FaultKind."+this.b}}
A.u4.prototype={}
A.LC.prototype={}
A.coA.prototype={
bwq(d,e,f){var w,v,u,t,s,r,q,p=this,o=new C.eJ()
o.dB(p.a)
w=C.B(B.d0q,x.eP)
D.d.ft(w,o)
v=C.aX(x.S)
u=C.a([],x.gw)
for(t=w.length,s=0;s<w.length;w.length===t||(0,C.L)(w),++s){r=w[s]
q=B.vO.h(0,r).e
if(v.t(0,q))continue
v.K(0,q)
u.push(new A.LC(r,o.aB(3)))
if(u.length>=d)break}p.c!==$&&C.aP()
p.c=u
p.avL()},
pz(d,e){var w=this.c
w===$&&C.c()
return D.d.b7(w,new A.coF(e))},
avL(){var w,v,u,t,s=this,r=s.d,q=r.d
q.a9(0)
if(s.pz(0,B.Z6))q.K(0,72)
if(s.pz(0,B.Z7))q.K(0,75)
q=s.pz(0,B.Mc)
r.b=q
r.c=!q
r.w=s.pz(0,B.Md)
r.x=s.pz(0,B.Zb)
r.y=s.pz(0,B.Zc)
r.z=s.pz(0,B.Za)
r.Q=s.pz(0,B.Zd)
r.as=s.pz(0,B.Ze)
r.at=s.pz(0,B.Z9)
q=r.f
q.a9(0)
r=r.r
r.a9(0)
w=s.c
w===$&&C.c()
w=D.d.gae(w)
v=new C.fh(w,new A.coB())
while(v.C()){u=w.gS(0)
t=u.c
u=u.b
if(t)r.K(0,u)
else q.K(0,u)}},
gcBY(){var w=this.c
w===$&&C.c()
return D.d.da(w,new A.coD())},
gcJf(){var w=this.c
w===$&&C.c()
return new C.a2(w,new A.coE(),C.U(w).k("a2<1>")).gM(0)},
cIS(d){var w,v,u,t,s,r,q,p=this.c
p===$&&C.c()
w=p.length
v=d===86
u=d===92
t=0
for(;t<p.length;p.length===w||(0,C.L)(p),++t){s=p[t]
r=s.a
q=!0
if(B.vO.h(0,r).e!==d)if(!(r===B.Mc&&v))r=r===B.Md&&u
else r=q
else r=q
if(r)return s}return null},
aXn(d){++this.f
return new A.eF(!1,d,!1,"")},
c3I(){var w,v,u,t,s=this;++s.r;--s.e
for(w=s.d,v=w.d,w=w.e,u=0;u<4;++u){t=B.atL[u]
if(!v.t(0,t))w.K(0,t)}w=s.e
if(w<=0){s.w=!0
return B.aUj}v=w===1?"life":"lives"
return new A.eF(!1,"ZAP! You touched a live wire and got a shock. All the breakers were knocked off. "+w+" "+v+" left. Turn the breaker OFF first.",!0,"shock")},
cTh(d,e){var w,v,u,t,s=this
if(s.w)return B.aUf
if(D.d.t(B.atL,e))return s.bAS(d,e)
w=s.cIS(e)
if(d==="inspect"){if(w==null||w.c)return B.aUi
return new A.eF(!0,"You look and test: "+B.vO.h(0,w.a).b,!1,"")}if(w==null||w.c)return new A.eF(!1,s.b?"Nothing needs fixing there.":"There is nothing wrong with this, so the "+C.t(B.Qx.h(0,d))+' is not needed. Use "Look and test" on things to find the problem.',!1,"")
v=B.vO.h(0,w.a)
if(d!==v.c){++s.f
return new A.eF(!1,s.b?"That is not the right tool for this problem.":"The "+C.t(B.Qx.h(0,d))+" does not fix this. "+v.b,!1,"")}u=v.f
if(u!==0){t=s.d
u=!t.d.t(0,u)&&!t.e.t(0,u)}else u=!1
if(u){if(s.b)return s.c3I()
return s.aXn("STOP! "+v.r+" The wires here are live (120 volts). Tap the breaker in the panel (with your hand) to switch it off.")}w.c=!0
s.avL()
return new A.eF(!0,v.d,!1,"")},
bAS(d,e){var w,v,u,t,s=this
if(d==="inspect"){w=s.d
if(w.d.t(0,e))w="This breaker has tripped: it sits in the middle (orange)."
else w=w.e.t(0,e)?"This breaker is switched OFF.":"This breaker is ON."
return new A.eF(!0,w,!1,"")}if(d!=="hand")return s.aXn(s.b?"Use your hand on a breaker.":"A breaker is switched with your hand, not with a "+C.t(B.Qx.h(0,d))+".")
w=s.d
v=w.d
if(v.t(0,e)){w=s.c
w===$&&C.c()
u=C.U(w).k("a2<1>")
t=C.B(new C.a2(w,new A.coC(e),u),u.k("J.E"))
if(t.length!==0){D.d.gL(t).c=!0
s.avL()
return new A.eF(!0,B.vO.h(0,D.d.gL(t).a).d,!1,"")}v.W(0,e)
return B.aUN}w=w.e
if(w.t(0,e)){w.W(0,e)
return B.aUH}w.K(0,e)
return B.aUx}}
A.aq3.prototype={
U(){var w,v=new A.AG(-0.3,0.48,46,B.TG,$.aw())
v.f=80
w=new C.BJ()
$.CE()
w.j2(0)
return new A.aDb(v,w)}}
A.aDb.prototype={
gJ(){var w=this.d
w===$&&C.c()
return w},
gCl(d){var w=this.e
if(w===$){this.a.toString
w=D.o.F(Date.now(),1e5)
this.e=w}return w},
a_(){var w,v=this
v.a1()
w=v.gCl(0)
w=A.h7D(v.a.d,w)
v.d=w
v.r=A.afm(w.d)},
q(){var w=this.ax
if(w!=null)w.a7(0)
this.a2()},
c3N(d,e){var w=this,v=w.ax
if(v!=null)v.a7(0)
w.m(new A.emE(w,d,e))
w.ax=C.cM(D.ju,new A.emF(w))},
aXo(){this.f.lW(46,0.48,B.TG,-0.3)
this.m(new A.emt(this))},
c3M(d){var w,v,u=this
if(d===0)return
w=u.d
w===$&&C.c()
v=w.cTh(u.x,d)
w=v.a
if(w)A.yb()
else A.ku(180,220,0.25,"square")
if(v.d==="shock"){C.fK()
u.m(new A.emy(u))
C.bN(D.n2,new A.emz(u),x.P)}u.m(new A.emA(u,d))
w=w&&!v.c
u.c3N(v.b,w)
w=u.d
if(w.w)$.aU.x1$.push(new A.emB(u))
else if(w.gcBY()&&!u.at){u.at=!0
$.aU.x1$.push(new A.emC(u))}},
cco(){var w=null,v=this.c
v.toString
C.ca(w,w,!1,w,new A.emw(this),v,w,!0,!0,x.H)},
c3J(){var w=null,v=this.c
v.toString
C.ca(w,w,!0,w,new A.ems(this),v,w,!0,!0,x.H)},
av7(){this.m(new A.emu(this))
this.aXo()},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.d
g===$&&C.c()
g=g.gcJf()
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
for(o=0;o<3;++o)p.push(new C.C(D.Lu,new C.x(o<i.d.e?"\u2764\ufe0f":"\ud83d\udda4",h,D.zo,h,h,h,h,h,h,h,h,h),h))
v=A.X2(h,i.f,new A.emM(i),s,u,r,h,new A.emN(),t,h,h,i.gc3K(),i.gc3L(),v,!1,C.a([C.A(p,D.m,h,D.e,D.Q,0,h,h)],q),h)
u=i.d.c
u===$&&C.c()
t=C.U(u)
t=new C.cQ(new C.a2(u,new A.emO(),t.k("a2<1>")),new A.emP(),t.k("cQ<1,n>")).aI(0,"  \xb7  ")
u=C.d("Customer: "+(t.length===0?"All fixed!":t),h,2,D.a2,h,h,h,B.aOB,h,h,h)
t=C.a([],q)
for(n=0;n<10;++n){m=B.def[n]
s=i.x===m?D.aH.j(0.25):D.c.j(0.07)
r=new C.aW(14,14)
p=i.x===m
l=p?D.aH:D.b2
k=new C.aA(l,p?2:1,D.q,-1)
l=B.djY.h(0,m)
p=C.X(l,i.x===m?D.aH:D.ad,h,h,h,19)
l=B.Qx.h(0,m)
l.toString
j=i.x===m?D.aH:D.c
t.push(new C.C(E.ts,C.aE(h,C.p(h,new C.cn(D.aO,D.e,D.j,D.m,h,D.p,h,0,C.a([p,D.bp,new C.x(l,h,new C.G(!0,j,h,h,h,h,12.5,D.H,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h),h,h,h,h,h,h,h,h,h)],q),h),D.f,h,h,new C.o(s,h,new C.bP(k,k,k,k),new C.bq(r,r,r,r),h,h,D.n),h,h,h,h,D.fU,h,h,h),D.y,!1,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,new A.emQ(i,m),h,h,h,h,h,h,!1,D.a8),h))}g=C.a([new A.B0("Service call",D.aS,v,C.v(C.a([new C.bH(D.a3,h,h,u,h),D.O,new C.a7(h,52,C.cB(t,h,h,h,h,D.aO,!1),h)],q),D.m,h,D.e,D.Q,0,D.p),new A.emR(i,d),""+g+"/"+w+" fixed",h)],q)
if(i.as)g.push(C.bZ(0,C.e1(C.p(h,h,D.f,B.aeF,h,h,h,h,h,h,h,h,h,h),!0,h),0,0,0))
return new C.an(D.W,h,D.aa,D.r,g,h)},
cwF(d){return C.bV(E.mb,null,new A.emK(this),d,!0,!0,!0,D.kY,!1,!1,x.H)},
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
$3$allowedExtensions$type$withData(d,e,f){return this.gJ().$3$allowedExtensions$type$withData(d,e,f)},
$1$ownerEmail(d){return this.gJ().$1$ownerEmail(d)},
$3$cancelOnError$onError(d,e,f){return this.gJ().$3$cancelOnError$onError(d,e,f)},
$6$availableCameras$cameraDirection$isInitialized$isRunning$size$torchState(d,e,f,g,h,i){return this.gJ().$6$availableCameras$cameraDirection$isInitialized$isRunning$size$torchState(d,e,f,g,h,i)},
$7$cameraDirection$error$isInitialized$isRunning$size$torchState$zoomScale(d,e,f,g,h,i,j){return this.gJ().$7$cameraDirection$error$isInitialized$isRunning$size$torchState$zoomScale(d,e,f,g,h,i,j)},
$3$cancelOnError$onDone(d,e,f){return this.gJ().$3$cancelOnError$onDone(d,e,f)},
$1$zoomScale(d){return this.gJ().$1$zoomScale(d)},
$1$torchState(d){return this.gJ().$1$torchState(d)},
$1$visibleChildrenPerParent(d){return this.gJ().$1$visibleChildrenPerParent(d)},
$1$contentPadding(d){return this.gJ().$1$contentPadding(d)},
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
$2$body$title(d,e){return this.gJ().$2$body$title(d,e)},
$1$chapters(d){return this.gJ().$1$chapters(d)},
$1$picture(d){return this.gJ().$1$picture(d)},
$1$photo(d){return this.gJ().$1$photo(d)},
$3$composing$selection$text(d,e,f){return this.gJ().$3$composing$selection$text(d,e,f)},
$1$scrollbars(d){return this.gJ().$1$scrollbars(d)},
$3$rect(d,e,f){return this.gJ().$3$rect(d,e,f)},
$2$hitTest$paintTransform(d,e){return this.gJ().$2$hitTest$paintTransform(d,e)},
$3$crossAxisPosition$mainAxisPosition(d,e,f){return this.gJ().$3$crossAxisPosition$mainAxisPosition(d,e,f)},
$2$padding$viewPadding(d,e){return this.gJ().$2$padding$viewPadding(d,e)},
$2$isClosing(d,e){return this.gJ().$2$isClosing(d,e)},
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
$1$task(d){return this.gJ().$1$task(d)},
$1$oldWidget(d){return this.gJ().$1$oldWidget(d)},
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
$2$defaultColor(d,e){return this.gJ().$2$defaultColor(d,e)},
$2$child$context(d,e){return this.gJ().$2$child$context(d,e)},
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
$3$onTap$selected(d,e,f){return this.gJ().$3$onTap$selected(d,e,f)},
$1$period(d){return this.gJ().$1$period(d)},
$4$activeTrackColor$inactiveTrackColor$thumbColor$trackHeight(d,e,f,g){return this.gJ().$4$activeTrackColor$inactiveTrackColor$thumbColor$trackHeight(d,e,f,g)},
$5$fileNameOverrides$sharePositionOrigin$subject$text(d,e,f,g,h){return this.gJ().$5$fileNameOverrides$sharePositionOrigin$subject$text(d,e,f,g,h)},
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
$3$eccentric(d,e,f){return this.gJ().$3$eccentric(d,e,f)},
$4$vol(d,e,f,g){return this.gJ().$4$vol(d,e,f,g)},
$4$sweep(d,e,f,g){return this.gJ().$4$sweep(d,e,f,g)},
$4$iconOnly(d,e,f,g){return this.gJ().$4$iconOnly(d,e,f,g)},
$3$ghost(d,e,f){return this.gJ().$3$ghost(d,e,f)},
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
$5$sides(d,e,f,g,h){return this.gJ().$5$sides(d,e,f,g,h)},
$7$caps$shine$sides(d,e,f,g,h,i,j){return this.gJ().$7$caps$shine$sides(d,e,f,g,h,i,j)},
$6$shine(d,e,f,g,h,i){return this.gJ().$6$shine(d,e,f,g,h,i)},
$7$endCaps$joints$shine$sides(d,e,f,g,h,i,j){return this.gJ().$7$endCaps$joints$shine$sides(d,e,f,g,h,i,j)},
$6$taped(d,e,f,g,h,i){return this.gJ().$6$taped(d,e,f,g,h,i)},
$4$color(d,e,f,g){return this.gJ().$4$color(d,e,f,g)},
$5$shine$yaw(d,e,f,g,h){return this.gJ().$5$shine$yaw(d,e,f,g,h)},
$6$caps$sides(d,e,f,g,h,i){return this.gJ().$6$caps$sides(d,e,f,g,h,i)},
$5$shine$sides(d,e,f,g,h){return this.gJ().$5$shine$sides(d,e,f,g,h)},
$5$lat$lon(d,e,f,g,h){return this.gJ().$5$lat$lon(d,e,f,g,h)},
$6$r1$sides(d,e,f,g,h,i){return this.gJ().$6$r1$sides(d,e,f,g,h,i)},
$7$normal$shine(d,e,f,g,h,i,j){return this.gJ().$7$normal$shine(d,e,f,g,h,i,j)},
$3$r(d,e,f){return this.gJ().$3$r(d,e,f)},
$6$ends$shine$split(d,e,f,g,h,i){return this.gJ().$6$ends$shine$split(d,e,f,g,h,i)},
$4$round(d,e,f,g){return this.gJ().$4$round(d,e,f,g)},
$5$col$round(d,e,f,g,h){return this.gJ().$5$col$round(d,e,f,g,h)},
$4$col(d,e,f,g){return this.gJ().$4$col(d,e,f,g)},
$1$target(d){return this.gJ().$1$target(d)},
$3$col(d,e,f){return this.gJ().$3$col(d,e,f)},
$1$pixelRatio(d){return this.gJ().$1$pixelRatio(d)},
$2$format$numChannels(d,e){return this.gJ().$2$format$numChannels(d,e)},
$2$alpha$numChannels(d,e){return this.gJ().$2$alpha$numChannels(d,e)},
$7$caps$r1$sides(d,e,f,g,h,i,j){return this.gJ().$7$caps$r1$sides(d,e,f,g,h,i,j)},
$3$on(d,e,f){return this.gJ().$3$on(d,e,f)},
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
$1$baseUrl(d){return this.gJ().$1$baseUrl(d)},
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
$6$back(d,e,f,g,h,i){return this.gJ().$6$back(d,e,f,g,h,i)},
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
A.a84.prototype={
gkn(d){return this.x}}
A.uA.prototype={}
A.a8O.prototype={}
A.qj.prototype={
bd5(d,e,f){var w=this
return d>w.a-f&&d<w.b+f&&e>w.c-f&&e<w.d+f}}
A.clb.prototype={
c3O(d){return-this.a.gfq(0)/2+d*4},
a3O(d,e){var w,v,u=this.a
if(d<-u.gfq(0)/2+6||d>u.gfq(0)/2-6||e<6||e>u.gjm(0)-6)return!1
for(u=this.b,w=u.length,v=0;v<w;++v)if(u[v].bd5(d,e,9))return!1
return!0},
aXq(d,e,f){var w,v,u=e.a,t=f.a-u,s=e.b,r=f.b-s,q=Math.max(1,D.k.dw(Math.sqrt(Math.pow(t,2)+Math.pow(r,2))/2))
for(w=0;w<=q;++w){v=w/q
if(!this.a3O(u+t*v,s+r*v))return!1}return!0},
aW6(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=a0.a,f=h.a,e=D.k.V((g+f.gfq(0)/2)/4),d=h.c
d===$&&C.c()
w=D.o.D(e,0,d-1)
e=a0.b
v=D.k.V(e/4)
u=h.d
u===$&&C.c()
t=D.o.D(v,0,u-1)
for(s=0;s<16;++s){for(r=-s,q=r,p=null,o=1/0;q<=s;++q)for(n=w+q,v=Math.abs(q),m=r;m<=s;++m){if(Math.max(v,Math.abs(m))!==s)continue
l=t+m
if(n<0||l<0||n>=d||l>=u)continue
k=n*4
j=l*4
if(!h.a3O(-f.gfq(0)/2+k,j))continue
i=Math.pow(-f.gfq(0)/2+k-g,2)+Math.pow(j-e,2)
if(i<o){p=new C.y(n,l)
o=i}}if(p!=null)return p}return null},
bgE(b9,c0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5=this,b6=1e9,b7=b5.aW6(b9),b8=b5.aW6(c0)
if(b7==null||b8==null)return C.a([b9,c0],x.f)
w=b8.a
v=b5.c3O(w)
u=b8.b
t=new C.y(v,u*4)
if(b5.aXq(0,b9,t))return C.a([b9,t],x.f)
v=b7.a
s=b5.d
s===$&&C.c()
r=b7.b
q=x.S
p=C.et([v*s+r],q)
o=C.T(q,q)
n=x.i
m=C.F([v*s+r,0],q,n)
l=C.F([v*s+r,b5.bPZ(v,r,b8)],q,n)
k=w*s+u
v=b5.a
r=p.$ti
q=r.k("mW<1>")
r=r.c
i=0
for(;;){if(p.a!==0){h=i+1
n=i<6000
i=h}else n=!1
if(!n){j=!1
break}g=p.e
if(g==null)C.ba(C.bd("No elements"))
f=g.a
for(n=new C.mW(p,p.r,q),n.c=g;n.C();){e=n.d
d=e==null?r.a(e):e
e=l.h(0,d)
if(e==null)e=b6
a0=l.h(0,f)
if(e<(a0==null?b6:a0))f=d}if(f===k){j=!0
break}p.W(0,f)
a1=D.o.e3(f,s)
a2=D.o.F(f,s)
for(n=a2*4,e=a1*4,a3=-1;a3<=1;++a3)for(a0=a3===0,a4=!a0,a5=a1+a3,a6=a5*4,a7=a5-w,a8=-1;a8<=1;++a8){if(a0&&a8===0)continue
a9=a2+a8
b0=!0
if(a5>=0)if(a9>=0){b0=b5.c
b0===$&&C.c()
b0=a5>=b0||a9>=s||!b5.a3O(-v.gfq(0)/2+a6,a9*4)}if(b0)continue
b0=!1
if(a4)if(a8!==0)b0=!b5.a3O(-v.gfq(0)/2+a6,n)||!b5.a3O(-v.gfq(0)/2+e,a9*4)
if(b0)continue
b1=a5*s+a9
b0=m.h(0,f)
b0.toString
b2=b0+(a4&&a8!==0?1.4142:1)
b0=m.h(0,b1)
if(b2<(b0==null?b6:b0)){o.n(0,b1,f)
m.n(0,b1,b2)
l.n(0,b1,b2+Math.sqrt(Math.pow(a7,2)+Math.pow(a9-u,2)))
p.K(0,b1)}}}if(!j)return C.a([b9,t],x.f)
b3=C.a([k],x.t)
while(o.ai(0,D.d.gal(b3))){w=o.h(0,D.d.gal(b3))
w.toString
b3.push(w)}w=x.f
u=C.a([b9],w)
for(r=x.c5,q=new C.dx(b3,r),q=new C.bR(q,q.gM(0),r.k("bR<ak.E>")),r=r.k("ak.E");q.C();){n=q.d
if(n==null)n=r.a(n)
e=D.o.e3(n,s)
u.push(new C.y(-v.gfq(0)/2+e*4,D.o.F(n,s)*4))}b4=C.a([D.d.gL(u)],w)
for(a5=0;a9=u.length-1,a5<a9;a5=a9){w=a5+1
for(;;){if(!(a9>w&&!b5.aXq(0,u[a5],u[a9])))break;--a9}b4.push(u[a9])}return b4},
bPZ(d,e,f){return Math.sqrt(Math.pow(d-f.a,2)+Math.pow(e-f.b,2))}}
A.zX.prototype={}
A.bpi.prototype={
bwF(d,e,f,g,h,i,j,k,l,m,n,o){var w,v,u,t,s=this.b
if(s!=null)for(w=this.as,v=1;v<s.length;++v){u=v-1
t=Math.sqrt(Math.pow(s[v].a-s[u].a,2)+Math.pow(s[v].b-s[u].b,2))
w.push(t)
this.at+=t}}}
A.aU3.prototype={
at3(d){var w,v,u=d.gfq(0),t=new A.bPP(d,u)
switch(d.c){case"living":w=t.$1(46)
return C.a([B.fN9,new A.zX(w.a,w.b,4,"Switching the ad on the big TV",!1,!0,!0,"ad")],x.a)
case"kitchen":return C.a([new A.zX(new C.y(-u/2+40,42),3.141592653589793,2.8,"Getting a drink from the fridge",!0,!1,!1,""),B.fN8],x.a)
case"bathroom":return B.dbk
case"bedroom":v=t.$1(44)
return C.a([new A.zX(v.a,v.b,3.4,"Switching the ad on the TV",!1,!0,!0,"ad")],x.a)
case"hall":if(!this.a)return B.aw9
return C.a([new A.zX(new C.y(-d.gfq(0)/2+80,90),3.141592653589793,3,"Looking at the left video wall",!1,!1,!0,""),new A.zX(B.ec0,0,2.4,"Looking over the lounge and the logo carpet",!1,!1,!1,""),new A.zX(new C.y(d.gfq(0)/2-80,90),3.141592653589793,3,"Looking at the right video wall",!1,!1,!0,"")],x.a)
default:return B.aw9}},
abe(a0,a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=e.b.d
d===$&&C.c()
w=d[a0]
v=new A.clb(w,A.i38(w))
v.c=D.k.dw(w.gfq(0)/4)+1
v.d=D.k.dw(w.gjm(0)/4)+1
u=A.hbF(w,a1)
t=u.a
s=u.c
d=e.d
r=d.length
q=a3.length===0?"Walking in":a3
d.push(A.bpj(a0,"",!1,q,-1,null,!1,!1,0.5,t.a,u.b,t.b))
for(q=e.at3(w),p=q.length,o=t,n=0;n<q.length;q.length===p||(0,C.L)(q),++n){m=q[n]
l=v.bgE(o,m.a)
k=m.e
if(k)j=C.cU(m.d,"Having",0)
else j=!1
d.push(A.bpj(a0,"",j,"Walking",-1,l,!1,!1,0,0,0,0))
o=D.d.gal(l)
d.push(A.bpj(a0,m.w,k,m.d,-1,null,m.r,m.f,m.c,o.a,m.b,o.b))}if(a2!=null){i=A.hbF(w,a2)
h=i.c
l=v.bgE(o,i.a)
g=e.at3(w).length!==0&&D.d.gal(e.at3(w)).e
d.push(A.bpj(a0,"",g,"Walking to the next room",-1,l,!1,!1,0,0,0,0))
o=D.d.gal(l)
d.push(A.bpj(a0,"",g,"Opening the door",h,null,!1,!1,1.8,o.a,e.bJW(w,h),o.b))}for(f=r;f<d.length;++f)d[f].ay=s},
aUU(d,e,f){return this.abe(d,e,f,"")},
bJW(d,e){var w,v=d.w[e].b
A:{if("left"===v){w=-1.5707963267948966
break A}if("right"===v){w=1.5707963267948966
break A}w=3.141592653589793
break A}return w},
aXp(){var w,v,u=this
if(u.a){u.abe(5,10,9,"Walking into the hall")
u.aXr()
return}u.abe(10,11,9,"Coming in through the front door")
u.aUU(9,10,5)
u.abe(5,9,0,"Walking down the hall")
for(w=0;w<8;++w){v=B.cMi[w]
u.aUU(v,5,w===7?null:5)}u.aXr()},
aXr(){var w,v,u,t,s,r,q,p,o=this,n=o.c,m=Math.min(1,n/120)
for(w=o.d,v=w.length,u=0,t=0,s=0;s<v;++s){r=w[s]
if(r.b==null)u+=r.f*=m
else t+=r.at}q=t/Math.max(4,n-u)
for(n=q<=0,p=0,s=0;s<v;++s){r=w[s]
if(r.b!=null)r.f=n?0.1:Math.max(0.05,r.at/q)
r.ax=p
p+=r.f}o.e!==$&&C.aP()
o.e=p},
b8Q(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g={},f=this.e
f===$&&C.c()
w=D.k.D(d,0,f-0.001)
f=this.d
g.a=D.d.gal(f)
for(v=f.length,u=0;u<v;++u){t=f[u]
s=t.ax
if(w>=s&&w<s+t.f){g.a=t
break}}f=g.a
v=f.f
r=v<=0?0:D.k.D((w-f.ax)/v,0,1)
f=g.a
if(f.b==null){q=r>0.5
v=f.a
s=f.y&&q
p=q&&f.z.length!==0?f.z+":"+v:""
o=f.Q
n=o>=0?r:0
return A.cfP(n,f.ay,p,f.w,0,f.r,o,0,!1,s,f.x,v,!1,!1,f.c,f.e,f.d)}v=new A.bPQ(g)
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
i=f.a-D.d.gL(v).a
v=g.a.b
v.toString
v=D.d.gal(v)
f=g.a.b
f.toString
h=v.b-D.d.gL(f).b}f=g.a
v=l.a
s=l.b
p=Math.atan2(i,h)
o=g.a
return A.cfP(0,o.ay,"",o.w,0,o.r,-1,m/12,!1,!1,!1,f.a,!1,!0,v,p,s)}}
A.b7b.prototype={
TF(d){var w=this.a
if(w!=null)this.ax=A.i39(w,this.CW)},
ajh(d,e){var w,v,u,t,s=this
if(d<s.b||d>s.c||e<s.d||e>s.e)return!0
for(w=s.ax,v=w.length,u=s.ay,t=0;t<v;++t)if(w[t].bd5(d,e,u))return!0
return!1},
aJw(d,e,f,g){var w,v,u,t,s,r,q,p,o=this,n=Math.sqrt(e*e+f*f)
if(n<0.000001)return o.x=!1
w=e/n
v=f/n
u=o.ch
t=o.z?1.9:1
s=70*u*t*Math.min(1,n)*g
r=o.f+w*s
q=o.r+v*s
p=!0
if(o.ajh(r,q))if(!o.ajh(r,o.r))q=o.r
else{p=!o.ajh(o.f,q)
if(p)r=o.f}if(p){o.f=r
o.r=q
o.w=Math.atan2(w,v)
o.y=o.y+s/12}return o.x=p},
cIR(d){var w,v=this,u=v.Q
if(u<=0&&v.as<=0)return
w=v.as
u+=w*d
v.Q=u
v.as=w-560*d
if(u<=0)v.as=v.Q=0},
cBU(d,e){var w,v,u,t=this,s=t.at
if(s==null)return!1
w=s.a-t.f
v=s.b-t.r
if(Math.sqrt(w*w+v*v)<4){t.at=null
return t.x=!1}u=t.aJw(0,w,v,e)
if(!u){t.at=null
t.x=!1}return u}}
var z=a.updateTypes(["~()","~(iK)","R(ng)","D(D)","R(pL)","~(H)","R(WP)","ai<mt>(N)","R(a46)","R(LC)","R(Hh)","n(n,mj)","R(mj)","R(zO)","ay<~>()","R(o4)","R(a8O)","D(H)","R(D)","R(a8N)","R(py)","R(La)","R(yv)","~(D,D,D,D)","R(Ew)","~(AH,at,N)","GZ(Y)","n(ng)","R(a43)","N7(Y)","D(N,N)","~(H{keepTour:R})","~(u,at)","Vd(Y)","Va(Y)","N(zV)","R(vB)","a5Z(Y)","ai<mt>()","D(H,H)","N(o4)","R(a3C)","~(D,D,D,N,N)","~(D,D,D,N,H)","~(~(iK),D,D)","~(D,D,N,N,w)","n(zO)","ai<mt>(ai<mt>)","o4(N)","~(ai<D>)","~(ai<D>{col:w})","~(H,D,w{h:N,w:N})","D(N)","~(H,ai<D>,w,N,n)","~(H,n,D,D,D,R)","n(LC)","H(zV,zV)","py()","ai<D>(ai<D>)","~(n,ai<D>{r:N})","~(n,D,D)","~(ng,D,n)","~(n,D,D,H)","D(n)","R(Wa)","R(H)","ay<LJ?>()","~(H,D,D,n,w)","H(pL)","~(H,D,D{col:w,round:R})","d1()","~(H,ai<D>)","~(D,D,H{alongX:R})","~(ai<D>,w)"])
A.bVB.prototype={
$1(d){var w=this.a
w=w===0?d:A.bBX(d,w)
return w.ad(0,this.b)},
$S:z+3}
A.bVC.prototype={
$1(d){var w=this.a
return w===0?d:A.bBX(d,w)},
$S:z+3}
A.bVA.prototype={
$4(b5,b6,b7,b8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4=this
for(w=b4.b,v=b7.a,u=b7.b,t=b7.c,s=b6.a,r=b6.b,q=b6.c,p=b8.a,o=b8.b,n=b8.c,m=1/w,l=v*m,k=u*m,j=t*m,i=p*m,h=o*m,m=n*m,g=b4.a,f=g.a,e=b4.c,d=x.o,a0=b4.d,a1=b4.e,a2=b4.f,a3=0;a3<w;++a3)for(a4=a3/w,a5=s+v*a4,a6=r+u*a4,a4=q+t*a4,a7=0;a7<w;++a7){a8=a7/w
a9=a5+p*a8
b0=a6+o*a8
a8=a4+n*a8
b1=a9+l
b2=b0+k
b3=a8+j
f.push(new A.mt(C.a([e.$1(new A.D(a9,b0,a8)),e.$1(new A.D(b1,b2,b3)),e.$1(new A.D(b1+i,b2+h,b3+m)),e.$1(new A.D(a9+i,b0+h,a8+m))],d),a0.$1(b5),a1,g.b,a2,g.d,!1,g.c,g.e,g.f,g.w))}},
$S:z+23}
A.bVD.prototype={
$1(d){var w=d*2*3.141592653589793/this.b
return this.a.aF(0,Math.cos(w)).ad(0,this.c.aF(0,Math.sin(w)))},
$S:z+17}
A.bVz.prototype={
$2(d,e){var w=3.141592653589793*d/this.a,v=6.283185307179586*e/this.b
return new A.D(Math.sin(w)*Math.cos(v),Math.cos(w),Math.sin(w)*Math.sin(v))},
$S:z+39}
A.bVE.prototype={
$1(d){var w=d*2*3.141592653589793/this.b
return this.a.aF(0,Math.cos(w)).ad(0,this.c.aF(0,Math.sin(w)))},
$S:z+17}
A.fLB.prototype={
$1(d){var w=d.b,v=this.a,u=d.c,t=this.b
return new A.D(d.a,w*v-u*t,w*t+u*v)},
$S:z+3}
A.fLz.prototype={
$1(d){var w=this.a
return w===0?d:A.bBX(d,w)},
$S:z+3}
A.fLA.prototype={
$1(d){var w=this,v=w.b===0?d:w.c.$1(d)
return J.fMz(w.a.$1(v),w.d)},
$S:z+3}
A.fLy.prototype={
$1(d){var w=this.b===0?d:this.c.$1(d)
return this.a.$1(w)},
$S:z+3}
A.fLr.prototype={
$4(d,e,f,g){var w=-d
return 0.5*(2*e+(w+f)*this.a+(2*d-5*e+4*f-g)*this.b+(w+3*e-3*f+g)*this.c)},
$S:1783}
A.bGr.prototype={
$1(d){var w=this,v=-d.c,u=d.b,t=w.a,s=w.b,r=v*t-u*s,q=d.a,p=w.c,o=w.d
return new A.D(q*p-r*o,u*t+v*s,q*o+r*p)},
$S:z+3}
A.bGq.prototype={
$1(d){var w=this,v=w.a
return v.d.ad(0,w.b.$1(new A.D(w.c*d,w.d*d,d-v.c)))},
$S:z+52}
A.cm9.prototype={
$1(d){var w=this,v=d.a,u=w.a,t=d.c,s=w.b,r=-v*s+t*u,q=d.b,p=w.c,o=w.d
return new A.D(v*u+t*s,q*p-r*o,-(q*o+r*p))},
$S:z+3}
A.cma.prototype={
$1(d){var w=this.a.c,v=this.b.$1(d.aC(0,w.d))
return new A.D(v.a,v.b,v.c+w.c)},
$S:z+3}
A.cm3.prototype={
$1(d){return d.c>=1},
$S:z+18}
A.cm4.prototype={
$1(d){return A.hLf(d,this.b,this.c,this.a.gana(0))},
$S:702}
A.cm2.prototype={
$2(d,e){var w=this.a
return A.uU(A.uU(w[0],w[1],d),A.uU(w[3],w[2],d),e)},
$S:z+30}
A.cm5.prototype={
$1(d){return d.c<1},
$S:z+18}
A.cm6.prototype={
$1(d){return A.hLg(d,this.b,this.c,8,6,this.a.gana(0))},
$S:702}
A.cm8.prototype={
$1(d){var w,v=d.b
if(v!==0){w=this.a.h(0,v)
w.toString
v=this.b.h(0,v)
v.toString
v=w/v}else v=d.r
return v},
$S:z+35}
A.cm7.prototype={
$2(d,e){var w,v,u=D.o.aL(d.a,e.a)
if(u!==0)return u
w=this.a
v=J.CG(w.$1(e),w.$1(d))
return v!==0?v:D.o.aL(d.c,e.c)},
$S:z+56}
A.eSX.prototype={
$1(d){var w=this.a,v=w.r,u=d.a
w.r=d
w.a.d.aH5(D.k.D((u-v.a)/1e6,0,0.1))
w.f.sp(0,u/1e6)},
$S:8}
A.eSW.prototype={
$1(d){if(x.ej.b(d))this.a.a.d.anE(1+d.gt_().b*0.0012)},
$S:252}
A.eST.prototype={
$1(d){var w=this.a
return w.w=w.a.d.c},
$S:255}
A.eSU.prototype={
$1(d){var w,v,u,t=this.a,s=t.a
if(d.w>=2){s=s.d
s.anE(t.w/d.d/s.c)}else{t=s.d
s=d.a
t.ax=t.at=null
w=t.a+=-s.a*0.009
if(!t.z){v=t.x
u=t.y
t.a=D.k.D(w,v-u,v+u)}t.b=D.k.D(t.b+s.b*0.009,t.r,t.w)
t.aZ()}},
$S:207}
A.eSV.prototype={
$1(d){var w=this.a
w=w.a.f.$1(w.e.cQ8(d.b))
return w},
$S:51}
A.eSR.prototype={
$1(d){return this.a.x=d.b},
$S:23}
A.eSS.prototype={
$0(){var w,v=this.a,u=v.a.Q
u.toString
v=v.x
w=this.b.gY(0)
return u.$2(v,w==null?D.au:w)},
$S:0}
A.bOD.prototype={
$0(){var w=0,v=C.j(x.d),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j
var $async$$0=C.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return C.b($.qM().jt(0,q.a),$async$$0)
case 7:p=e
m=q.b
l=x.N
o=new A.LJ(m,C.T(l,x.aB),C.T(l,x.bB),C.a([],x.X),C.T(l,x.gN))
w=8
return C.b(o.OH(p),$async$$0)
case 8:$.fO1.n(0,m,o)
u=o
r=[1]
w=5
break
r.push(6)
w=5
break
case 4:t=3
j=s.pop()
n=C.aa(j)
$.am.$1("Could not read the character "+q.b+": "+C.t(n))
u=null
r=[1]
w=5
break
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
$.fO0.W(0,q.b)
w=r.pop()
break
case 6:case 1:return C.h(u,v)
case 2:return C.f(s.at(-1),v)}})
return C.i($async$$0,v)},
$S:z+66}
A.bOv.prototype={
$1(d){return D.a.t(d,"hips")},
$S:3}
A.bOs.prototype={
$2(d,e){var w,v=Math.floor(d),u=Math.floor(e),t=this.b,s=t.a,r=Math.min(s-1,D.k.bu((d-v)*s))
v=t.b
w=(Math.min(v-1,D.k.bu((e-u)*v))*s+r)*4
s=this.a
t=t.c
s.c=s.c+t[w]
s.b=s.b+t[w+1]
s.a=s.a+t[w+2]},
$S:338}
A.bOr.prototype={
$1(d){return D.k.V(D.k.D(d,0,1)*255)},
$S:269}
A.bOx.prototype={
$2(d,e){var w,v,u,t,s,r=x.S,q=C.T(r,r)
r=this.b
w=new Int32Array(r)
for(v=this.c.a,u=this.a,t=0;t<r;++t){s=t*3
w[t]=q.cg(0,(D.k.bu((v[s]-u.c)/d)*1024+D.k.bu((v[s+1]-u.b)/d))*1024+D.k.bu((v[s+2]-u.a)/d),new A.bOy(q))}e[0]=q.a
return w},
$S:1786}
A.bOy.prototype={
$0(){return this.a.a},
$S:109}
A.bOz.prototype={
$1(d){var w,v,u,t,s,r,q=C.aX(x.S)
for(w=this.a.e,v=w.length,u=0;u<v;u+=3){t=d[w[u]]
s=d[w[u+1]]
r=d[w[u+2]]
if(t===s||s===r||t===r)continue
q.K(0,A.h0V(t,s,r))}return q.a},
$S:1787}
A.bOw.prototype={
$2(d,e){var w,v,u,t=this.a,s=this.b.h(0,d)
s.toString
w=J.a5(e)
v=D.k.V(w.h(e,0)/w.h(e,3))
u=D.k.V(w.h(e,1)/w.h(e,3))
w=D.k.V(w.h(e,2)/w.h(e,3))
t.$flags&2&&C.aj(t)
t[s]=(v<<16|u<<8|w|4278190080)>>>0},
$S:1788}
A.bOt.prototype={
$0(){return new Float64Array(this.a*16)},
$S:704}
A.bOu.prototype={
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
if(n<0)D.o3.he(k,j,j+16,h)
else A.h0W(k,n*16,h,0,k,j)
k=u.f
k===$&&C.c()
k=k[a1]
j=k.length
m=0
for(;m<k.length;k.length===j||(0,C.L)(k),++m)l.$1(k[m])},
$S:27}
A.bOC.prototype={
$1(d){var w,v,u
for(w=this.a.z,w=new C.hG(w,w.r,w.e);w.C();){v=w.d
u=v.toLowerCase()
if(C.cU(u,d,0))return v}return null},
$S:330}
A.bOA.prototype={
$1(d){return!D.a.t(d.toLowerCase(),"pose")},
$S:3}
A.bOB.prototype={
$0(){var w=this.a.z
return new C.cu(w,C.a3(w).k("cu<1>")).gL(0)},
$S:22}
A.bOE.prototype={
$1(d){var w=this,v=w.c,u=d*3,t=w.a,s=w.d,r=(v[u]-t.b)*s,q=v[u+1],p=w.b.ay,o=(v[u+2]-t.a)*s
t=w.f
u=w.r
return new A.D(r*t+o*u+w.w,(q-p)*s+w.e,-r*u+o*t+w.x)},
$S:z+17}
A.bGX.prototype={
$1(d){var w
if(d.r<0)w=d.e||d.c<60
else w=!1
return w},
$S:z+19}
A.bHx.prototype={
$1(d){return!d.f},
$S:z+19}
A.bHu.prototype={
$1(d){return d.b===this.a.a.a},
$S:z+10}
A.bHv.prototype={
$1(d){return d.b===this.a&&d.c===this.b},
$S:z+10}
A.bHw.prototype={
$1(d){return d.a<0},
$S:z+21}
A.bHy.prototype={
$1(d){return d.b===this.a.a.a},
$S:z+10}
A.bHz.prototype={
$1(d){var w=d.c
return w==="bathroom"||w==="kitchen"},
$S:z+8}
A.dKn.prototype={
$0(){return this.b.d=this.a.a},
$S:0}
A.dKo.prototype={
$1(d){return this.a.c3f()},
$S:12}
A.dKA.prototype={
$0(){},
$S:0}
A.dKu.prototype={
$0(){return this.a.w=this.b},
$S:0}
A.dKv.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new A.dKt(w))},
$S:0}
A.dKt.prototype={
$0(){return this.a.w=null},
$S:0}
A.dKj.prototype={
$1(d){return B.aE6},
$S:z+29}
A.dKk.prototype={
$0(){},
$S:0}
A.dKD.prototype={
$1(d){return B.aE6},
$S:z+29}
A.dKE.prototype={
$0(){},
$S:0}
A.dKC.prototype={
$0(){var w=this.a
return w.m(new A.dKB(w,this.b))},
$S:0}
A.dKB.prototype={
$0(){return this.a.r=this.b},
$S:0}
A.dKi.prototype={
$0(){return this.a.aam(this.b)},
$S:0}
A.dKp.prototype={
$0(){return this.a.Il(this.b.bbO(this.c))},
$S:0}
A.dKq.prototype={
$0(){return this.a.Il(this.b.aID(this.c))},
$S:0}
A.dKr.prototype={
$0(){return this.a.Il(this.b.aBp(this.c))},
$S:0}
A.dKs.prototype={
$0(){return this.a.aiv(this.b)},
$S:0}
A.dKm.prototype={
$1(d){var w,v,u=null,t=this.b,s=this.c,r=t.e[s],q=t.c
q===$&&C.c()
q=q[r.a].a
w=this.a
v=x.p
s=C.A(C.a([new A.abx(q.e,44,u),D.av,C.E(C.d("Bed "+(s+1)+": "+q.b,u,u,u,u,u,u,D.i4,u,u,u),1),w.OX("\ud83d\udc89 Treat",new A.dKl(w,t,s),D.cg)],v),D.m,u,D.e,D.j,0,u,u)
t=r.b
return C.v(C.a([s,D.O,w.Vt("Care",t,t<30?D.ay:D.aS),w.Vt("Getting better",r.c,D.b4)],v),D.F,u,D.e,D.j,0,D.p)},
$S:274}
A.dKl.prototype={
$0(){return this.a.Il(this.b.bgZ(this.c))},
$S:0}
A.dKx.prototype={
$0(){return this.a.Il(this.b.ajr("food"))},
$S:0}
A.dKy.prototype={
$0(){return this.a.Il(this.b.ajr("medicine"))},
$S:0}
A.dKz.prototype={
$0(){var w=0,v=C.j(x.H),u,t=this,s,r
var $async$$0=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:w=3
return C.b(A.aRD(),$async$$0)
case 3:$.Dv=null
s=t.a
if(s.c==null){w=1
break}r=s.f
if(r!=null)r.a7(0)
$.a34=null
s.m(new A.dKw(s))
s.YK()
case 1:return C.h(u,v)}})
return C.i($async$$0,v)},
$S:1}
A.dKw.prototype={
$0(){return this.a.d=null},
$S:0}
A.dKF.prototype={
$0(){return C.a6(this.a,!1).lN()},
$S:0}
A.dKG.prototype={
$1(d){return d.a>=0},
$S:z+21}
A.fpz.prototype={
$2(d,e){var w
A:{if("black"===d){w=e.a===25?"The black wire carries the power (hot). It never goes on the green ground screw. Hot goes to a BRASS screw.":"The black (hot) wire goes on a BRASS screw, not on the silver one. Silver is for white (neutral)."
break A}if("white"===d){w=e.a===25?"The white wire is the neutral. The green screw is only for the ground wire. Neutral goes to a SILVER screw.":"The white (neutral) wire goes on a SILVER screw, not on brass. Brass is for the black (hot) wire."
break A}w="The bare copper ground wire only goes on the GREEN screw. It keeps you safe if something goes wrong."
break A}return w},
$S:z+11}
A.fpA.prototype={
$2(d,e){return d==="ground"?y.j:"A black (hot) wire never goes on the green ground screw. The two black wires go on the two BRASS screws."},
$S:z+11}
A.fpB.prototype={
$2(d,e){var w
if(e.e)w="Those are the LOAD screws. They are covered with tape because power must come in on the LINE side. If you wire the LOAD side the GFCI will not protect you."
else A:{if("black"===d){w="The black (hot) wire goes on the BRASS LINE screw."
break A}if("white"===d){w="The white (neutral) wire goes on the SILVER LINE screw."
break A}w=y.j
break A}return w},
$S:z+11}
A.fpC.prototype={
$2(d,e){var w
A:{if("black"===d){w="The black (hot) wire joins the fixture BLACK wire. Not the white one, and never the green ground."
break A}if("white"===d){w="The white (neutral) wire joins the fixture WHITE wire. Not the black one, and never the green ground."
break A}w="The bare copper ground wire joins the fixture GREEN ground wire only."
break A}return w},
$S:z+11}
A.fpD.prototype={
$2(d,e){var w
A:{if("black"===d){w="The black (hot) wire joins the fan BLACK wire. Not the white one, and never the green ground."
break A}if("white"===d){w="The white (neutral) wire joins the fan WHITE wire. Not the black one, and never the green ground."
break A}w="The bare copper ground wire joins the fan GREEN ground wire only."
break A}return w},
$S:z+11}
A.foq.prototype={
$1(d){return d.a===this.a},
$S:z+41}
A.fLU.prototype={
$1(d){return d.a},
$S:z+46}
A.fox.prototype={
$1(d){return D.d.iD(this.a.f,new A.foy(d)).f},
$S:73}
A.foy.prototype={
$1(d){return d.a===this.a},
$S:z+12}
A.fov.prototype={
$1(d){return D.d.iD(this.a.e,new A.fow(d)).e},
$S:14}
A.fow.prototype={
$1(d){return d.a===this.a},
$S:z+13}
A.fot.prototype={
$1(d){return d.e==="hot"},
$S:z+13}
A.fou.prototype={
$1(d){return d.e==="neutral"},
$S:z+13}
A.fmt.prototype={
$5(d,e,f,g,h){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=j.a
i.b=d
w=j.b
v=w.b
u=C.a3(v).k("cK<1,2>")
t=u.k("a2<J.E>")
s=C.B(new C.a2(new C.cK(v,u),new A.fmu(g),t),t.k("J.E"))
r=g==="ground"
q=r?B.x4:h
p=r?0.6:0.3
if(w.c>0){o=e.ad(0,B.fFA)
i.jV(A.agM(C.a([e,e.ad(0,B.fE7),o],x.o),4),0.085,q,!1,p,8)
return}if(s.length!==0){n=A.bA3(j.c,D.d.gL(s).a,w)
w=A.uU(e,n,0.5)
v=n.a>0
m=w.ad(0,new A.D(v?0.5:-0.5,0.2,0.9))
w=e.ad(0,B.fIq)
if(j.d)v=0
else v=v?0.06:-0.06
l=A.agM(C.a([e,w,m,n.ad(0,new A.D(v,0,0.08)),n],x.o),5)
k=D.d.dq(l,0,D.k.bu(l.length*0.8))
i.jV(k,0.085,q,!1,p,8)
if(!r)i.jV(D.d.fK(l,k.length-1),0.061200000000000004,B.x4,!1,0.6,8)}else{l=A.agM(C.a([e,e.ad(0,B.fBy),A.uU(e,f,0.6),f],x.o),5)
k=r?l:D.d.dq(l,0,D.k.bu(l.length*0.86))
i.jV(k,0.085,q,!1,p,8)
if(!r)i.jV(D.d.fK(l,k.length-1),0.061200000000000004,B.x4,!1,0.6,8)}},
$S:z+67}
A.fmu.prototype={
$1(d){return d.b===this.a},
$S:1790}
A.f8C.prototype={
$2(d,e){var w,v=this.a
v.b=d
w=A.Gj(e,0.9,6)
if(this.b)v.jV(w,0.2,B.Wn,!1,0.35,10)
this.c.push(D.d.gal(w))},
$S:z+71}
A.f9W.prototype={
$6$taped(d,e,f,g,h,i){var w,v,u,t=this.a
t.e=0.9
t.b=d
w=this.b
v=w.a+e*0.75
u=w.b+f
w=w.c-0.45
t.bB(new A.D(v,u,w),B.fJu,h,0.7)
t.e5(new A.D(v,u,w),new A.D(v+e*0.22,u,w),0.17,g,0.9,12)
t.bH(new A.D(v+e*0.23,u,w),B.fHn,B.E1)
if(i)t.bB(new A.D(v+e*0.05,u,w),B.fHd,D.cj,0.2)},
$5(d,e,f,g,h){return this.$6$taped(d,e,f,g,h,!1)},
$S:1791}
A.fmi.prototype={
$1(d){return d.a===this.a},
$S:z+20}
A.fmj.prototype={
$0(){return B.aiM},
$S:z+57}
A.fLT.prototype={
$1(d){var w=d>60?62:99
return Math.min(d*0.5625,w)},
$S:5}
A.fLQ.prototype={
$1(d){return d>40?30+d/2:58},
$S:5}
A.fLR.prototype={
$2(d,e){return D.k.aL(d.a,e.a)},
$S:1792}
A.fLS.prototype={
$2(d,e){var w=this.a
if(e-d>w.a-w.b){w.b=d
w.a=e}},
$S:338}
A.bP8.prototype={
$1(d){return d},
$S:144}
A.bPJ.prototype={
$1(d){return d.a==="Jobs"},
$S:z+36}
A.bPK.prototype={
$1(d){return new A.o4(!1,"back",d,5)},
$S:z+48}
A.bPO.prototype={
$1(d){return d.gjB()},
$S:z+8}
A.bPN.prototype={
$1(d){var w=d.c
return(w==="bathroom"||w==="kitchen")&&d.gl3()},
$S:z+8}
A.bPM.prototype={
$1(d){var w=d.c
return w==="bathroom"||w==="kitchen"},
$S:z+8}
A.bPL.prototype={
$1(d){return d.gjB()&&d.gl3()},
$S:z+8}
A.e2V.prototype={
$1(d){return!(d.gjB()&&d.gl3())},
$S:z+8}
A.e2S.prototype={
$1(d){var w,v=this.a.a.f
A:{if("wiring"===v){w=!d.gjB()
break A}if("plumbing"===v){w=!d.gl3()
break A}w=!(d.gjB()&&d.gl3())
break A}return w},
$S:z+8}
A.e2T.prototype={
$1(d){var w,v=this.a,u=v.gFe()
if(u==null||v.c==null||v.cx!=null)return
v.m(v.gr2())
w=u.f
if(w.length!==0&&D.d.gL(w)!==v.fy){w=D.d.gL(w)
v.fy=w
v.il(w)}},
$S:12}
A.e2U.prototype={
$1(d){var w,v=this.a
if(v.c==null)return
w=v.d
w===$&&C.c()
if(w.a.length!==0)v.il(v.bYx())
else{w=v.a.f
if(w.length!==0){A:{if("wiring"===w){w="This room needs wiring: press the Wiring button, or tap the red outlet or the light."
break A}if("plumbing"===w){w="This room needs plumbing: press the Plumbing button, or tap the toilet or the sink."
break A}w="Walk through the house and fix what the signs say is wrong."
break A}v.il(w)}}},
$S:8}
A.e29.prototype={
$0(){var w=this.a
w.ax=this.b
w.ay=this.c},
$S:0}
A.e2a.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new A.e28(w))},
$S:0}
A.e28.prototype={
$0(){return this.a.ax=null},
$S:0}
A.e2b.prototype={
$0(){var w=this.a
w.r=this.b
w.Q=0
w.as=-1
w.at=0
w.j4()},
$S:0}
A.e1r.prototype={
$0(){var w=this.a,v=w.d
v===$&&C.c()
v.e=this.b
w.Q=0
w.as=-1
w.at=0
w.ax=null
w.j4()},
$S:0}
A.e2m.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&C.c()
w=u.d
w===$&&C.c()
u=w[u.e]
u.db=!u.db
v.j4()},
$S:0}
A.e1H.prototype={
$0(){var w=this.a,v=this.b
w.Q=v-100
w.at=v
w.j4()},
$S:0}
A.e1I.prototype={
$0(){var w=this.a,v=this.b
w.as=v-300
w.at=v},
$S:0}
A.e1J.prototype={
$0(){var w,v,u=this.a,t=u.d
t===$&&C.c()
w=t.d
w===$&&C.c()
v=this.b
if(!w[t.e].at.W(0,v)){t=u.d
w=t.d
w===$&&C.c()
w[t.e].at.K(0,v)}u.j4()},
$S:0}
A.e1K.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&C.c()
w=u.d
w===$&&C.c()
w[u.e].fy=!0
v.j4()},
$S:0}
A.e1p.prototype={
$1(d){var w,v,u,t,s,r=this,q=null,p=C.d("Door to "+r.b,q,q,q,q,q,q,D.ds,q,q,q),o=r.a,n=o.d
n===$&&C.c()
w=n.d
w===$&&C.c()
v=r.c
u=C.d(w[n.e].at.t(0,v)?"The door is open.":"The door is closed.",q,q,q,q,q,q,D.l_,q,q,q)
n=o.d
w=n.d
w===$&&C.c()
t=C.X(w[n.e].at.t(0,v)?B.bAi:B.bAu,q,q,q,q,q)
n=o.d
w=n.d
w===$&&C.c()
s=x.p
return C.bn(!0,new C.C(D.bV,C.v(C.a([p,D.at,u,D.ac,C.bY(D.bz,C.a([C.dp(t,C.d(w[n.e].at.t(0,v)?"Close the door":"Open the door",q,q,q,q,q,q,q,q,q,q),new A.e1n(o,d,v),q),C.ex(B.bGR,B.ffp,new A.e1o(o,d,v,r.d),q)],s),D.br,10,10)],s),D.F,q,D.e,D.Q,0,D.p),q),!0,!1,D.af,!0,!0)},
$S:28}
A.e1n.prototype={
$0(){var w,v,u
C.a6(this.b,!1).O(null)
w=this.a
v=this.c
w.m(new A.e1m(w,v))
w=w.d
w===$&&C.c()
u=w.d
u===$&&C.c()
A.ku(u[w.e].at.t(0,v)?700:450,70,0.25,"tri")},
$S:0}
A.e1m.prototype={
$0(){var w,v,u=this.a,t=u.d
t===$&&C.c()
w=t.d
w===$&&C.c()
v=this.b
if(!w[t.e].at.W(0,v)){t=u.d
w=t.d
w===$&&C.c()
w[t.e].at.K(0,v)}u.j4()},
$S:0}
A.e1o.prototype={
$0(){var w,v,u=this
C.a6(u.b,!1).O(null)
w=u.a
v=u.c
w.m(new A.e1k(w,v))
A.ku(700,70,0.25,"tri")
C.bN(D.n2,new A.e1l(w,v,u.d),x.P)},
$S:0}
A.e1k.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&C.c()
w=u.d
w===$&&C.c()
w[u.e].at.K(0,this.b)
v.j4()},
$S:0}
A.e1l.prototype={
$0(){var w=this.a
if(w.c==null)return
w.m(new A.e1j(w,this.b))
w.DM(this.c)},
$S:11}
A.e1j.prototype={
$0(){var w,v=this.a.d
v===$&&C.c()
w=v.d
w===$&&C.c()
return w[v.e].at.W(0,this.b)},
$S:0}
A.e11.prototype={
$1(d){var w=null
return C.bw(D.qq,new C.a7(w,C.aI(d,w,x.w).w.a.b*0.82,new A.a5Y(this.a,w),w),D.aq)},
$S:1793}
A.e12.prototype={
$0(){var w=this.a
w.axM()
w.j4()},
$S:0}
A.e25.prototype={
$1(d){return new C.e0(new A.e23(this.a,this.b,this.c),null)},
$S:20}
A.e23.prototype={
$2(d,e){var w,v,u,t,s=null,r=new A.e24(this.a,e),q=this.b,p=q.a,o=C.d(p.b+" "+q.gaBI(0),s,s,s,s,s,s,L.rA,s,s,s)
p=C.d(p.f,s,s,s,s,s,s,D.D4,s,s,s)
w=C.d("Now: "+q.gTj()+"\nFood "+D.k.V(100-q.b)+"%   Health "+D.k.V(q.c)+"%   Home "+D.k.V(q.d)+"%",s,s,s,s,s,s,B.aPi,s,s,s)
v=this.c
u=x.p
t=C.a([r.$2("\ud83c\udf5e Feed",new A.e20(v,q))],u)
if(q.e)t.push(r.$3$col("\ud83d\udc8a Medicine",new A.e21(v,q),D.by))
if(q.e||q.c<60)t.push(r.$3$col("\ud83c\udfe5 Hospital",new A.e22(v,q),D.cg))
return C.bn(!0,new C.C(D.bV,C.v(C.a([o,p,D.O,w,D.ac,C.bY(D.bz,t,D.br,8,8)],u),D.F,s,D.e,D.Q,0,D.p),s),!0,!1,D.af,!0,!0)},
$S:84}
A.e24.prototype={
$3$col(d,e,f){var w=null,v=f.j(0.22),u=C.m(12),t=C.I(f,D.q,1)
return C.aE(w,C.p(w,C.d(d,w,w,w,w,w,w,C.l(w,w,f,w,w,w,w,w,w,w,w,13,w,w,D.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),D.f,w,w,new C.o(v,w,t,u,w,w,D.n),w,w,w,w,P.AO,w,w,w),D.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new A.e2_(this.a,e,this.b),w,w,w,w,w,w,!1,D.a8)},
$2(d,e){return this.$3$col(d,e,D.aH)},
$S:1794}
A.e2_.prototype={
$0(){var w,v=this.b.$0()
this.c.$1(new A.e1Z())
w=this.a
w.m(w.gr2())
w.il(v)},
$S:0}
A.e1Z.prototype={
$0(){},
$S:0}
A.e20.prototype={
$0(){return this.a.bbO(this.b)},
$S:22}
A.e21.prototype={
$0(){return this.a.aID(this.b)},
$S:22}
A.e22.prototype={
$0(){return this.a.aBp(this.b)},
$S:22}
A.e1Q.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m=null,l=x.p,k=C.a([],l)
for(w=D.d.gae(B.a1a),v=new C.fh(w,new A.e1N()),u=this.a,t=this.b;v.C();){s=w.gS(0)
r=D.c.j(0.08)
q=new C.aW(12,12)
p=u.d
p===$&&C.c()
o=p.d
o===$&&C.c()
n=new C.aA(o[p.e].cy.h(0,t)===s.a?D.aH:D.b2,1,D.q,-1)
k.push(C.aE(m,C.p(m,new C.x(s.c+" "+s.b,m,D.Tm,m,m,m,m,m,m,m,m,m),D.f,m,m,new C.o(r,m,new C.bP(n,n,n,n),new C.bq(q,q,q,q),m,m,D.n),m,m,m,m,D.ei,m,m,m),D.y,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new A.e1O(u,d,t,s),m,m,m,m,m,m,!1,D.a8))}w=u.d
w===$&&C.c()
v=w.d
v===$&&C.c()
if(v[w.e].cy.h(0,t)!=null)k.push(C.aE(m,C.p(m,B.fnX,D.f,m,m,new C.o(D.er,m,m,C.m(12),m,m,D.n),m,m,m,m,D.ei,m,m,m),D.y,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new A.e1P(u,d,t),m,m,m,m,m,m,!1,D.a8))
return C.bn(!0,new C.C(D.bV,C.v(C.a([B.fke,D.S,C.bY(D.bz,k,D.br,8,8)],l),D.F,m,D.e,D.Q,0,D.p),m),!0,!1,D.af,!0,!0)},
$S:28}
A.e1N.prototype={
$1(d){return!(d.d>70||d.e)},
$S:z+20}
A.e1O.prototype={
$0(){var w,v,u,t=this
C.a6(t.b,!1).O(null)
w=t.a
v=t.d
w.m(new A.e1M(w,t.c,v))
u=v.d>0||v.e
v=v.b
w.il(u?v+" is on and playing NGMY ads. Tap it to watch full screen.":v+" is plugged in and running.")
A.ku(820,70,0.25,"tri")},
$S:0}
A.e1M.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&C.c()
w=u.d
w===$&&C.c()
w[u.e].cy.n(0,this.b,this.c.a)
v.j4()},
$S:0}
A.e1P.prototype={
$0(){C.a6(this.b,!1).O(null)
var w=this.a
w.m(new A.e1L(w,this.c))
w.il("Unplugged.")},
$S:0}
A.e1L.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&C.c()
w=u.d
w===$&&C.c()
w[u.e].cy.W(0,this.b)
v.j4()},
$S:0}
A.e2J.prototype={
$1(d){return new C.e0(new A.e2H(this.a),null)},
$S:20}
A.e2H.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o=null,n=this.a,m=new A.e2I(n,e),l=n.d
l===$&&C.c()
w=l.d
w===$&&C.c()
l=C.d("TV in "+w[l.e].b,o,o,o,o,o,o,D.ds,o,o,o)
w=x.p
v=C.a([],w)
for(u=D.d.gae(B.a1a),t=new C.fh(u,new A.e2B());t.C();){s=u.gS(0)
r=s.b
q=n.d
p=q.d
p===$&&C.c()
q=p[q.e].fr===s.a?D.aH:D.fb
v.push(m.$3$color(r,new A.e2C(n,s),q))}v=C.bY(D.bz,v,D.br,8,8)
u=C.a([],w)
t=n.d
s=t.d
s===$&&C.c()
t=s[t.e]
if(t.fr!=null){t=t.fy?"\u23fb Turn this TV off":"\u23fb Turn this TV on"
u.push(m.$2(t,new A.e2D(n)))}t=n.d
s=t.d
s===$&&C.c()
if(s[t.e].fr!=null&&t.a.length===0)u.push(m.$3$color("\ud83d\uddd1 Take it down",new A.e2E(n),D.er))
if(n.d.a.length===0)u.push(m.$3$color("\ud83d\udcfa A TV in every room, all on",new A.e2F(n),D.cZ))
if(n.d.a.length===0)u.push(m.$3$color("\u23fb All TVs off",new A.e2G(n),D.bn))
return C.bn(!0,new C.C(D.bV,C.v(C.a([l,D.S,v,D.S,C.bY(D.bz,u,D.br,8,8)],w),D.F,o,D.e,D.Q,0,D.p),o),!0,!1,D.af,!0,!0)},
$S:84}
A.e2I.prototype={
$3$color(d,e,f){var w=null,v=f.j(0.4),u=C.m(12),t=C.I(f,D.q,1)
return C.aE(w,C.p(w,C.d(d,w,w,w,w,w,w,I.zm,w,w,w),D.f,w,w,new C.o(v,w,t,u,w,w,D.n),w,w,w,w,P.AO,w,w,w),D.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new A.e2A(this.a,e,this.b),w,w,w,w,w,w,!1,D.a8)},
$2(d,e){return this.$3$color(d,e,D.fb)},
$S:1795}
A.e2A.prototype={
$0(){this.b.$0()
this.c.$1(new A.e2z())
var w=this.a
w.m(w.gr2())},
$S:0}
A.e2z.prototype={
$0(){},
$S:0}
A.e2B.prototype={
$1(d){return d.d>0||d.e},
$S:z+20}
A.e2C.prototype={
$0(){var w,v=this.a.d
v===$&&C.c()
w=v.d
w===$&&C.c()
v=w[v.e]
w=this.b.a
v.fr=w
if(v.c==="hall")v.fx=w
v.fy=!0},
$S:0}
A.e2D.prototype={
$0(){var w,v=this.a.d
v===$&&C.c()
w=v.d
w===$&&C.c()
v=w[v.e]
return v.fy=!v.fy},
$S:0}
A.e2E.prototype={
$0(){var w,v=this.a.d
v===$&&C.c()
w=v.d
w===$&&C.c()
v=w[v.e]
v.fr=null
v.fy=!1},
$S:0}
A.e2F.prototype={
$0(){var w,v,u,t=this.a.d
t===$&&C.c()
t=t.gqr()
w=t.length
v=0
for(;v<w;++v){u=t[v]
if(u.fr==null)u.fr="tv100"
if(u.c==="hall")if(u.fx==null)u.fx="tv100"
u.fy=!0}},
$S:0}
A.e2G.prototype={
$0(){var w,v,u=this.a.d
u===$&&C.c()
u=u.gqr()
w=u.length
v=0
for(;v<w;++v)u[v].fy=!1},
$S:0}
A.e2w.prototype={
$1(d){return new C.e0(new A.e2v(this.a),null)},
$S:20}
A.e2v.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m=null,l=x.p,k=C.a([],l)
for(w=B.aCX.gdK(B.aCX),w=w.gae(w),v=this.a;w.C();){u=w.gS(w)
t=$.aOA
s=u.a
t=t===s?D.aS.j(0.25):D.c.j(0.07)
r=new C.aW(12,12)
s=$.aOA===s
q=s?D.aS:D.b2
p=new C.aA(q,s?2:1,D.q,-1)
q=u.b
s=s?D.aS:D.c
k.push(C.aE(m,C.p(m,new C.x(q,m,new C.G(!0,s,m,m,m,m,13,D.u,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m,m,m,m,m,m,m,m,m),D.f,m,m,new C.o(t,m,new C.bP(p,p,p,p),new C.bq(r,r,r,r),m,m,D.n),m,m,m,m,D.ix,m,m,m),D.y,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new A.e2r(v,e,u),m,m,m,m,m,m,!1,D.a8))}k=C.bY(D.bz,k,D.br,8,8)
w=C.a([],l)
for(o=0;o<5;++o){n=B.dcB[o]
u=v.db===n?D.aH.j(0.25):D.c.j(0.07)
t=new C.aW(12,12)
s=v.db===n
r=s?D.aH:D.b2
p=new C.aA(r,s?2:1,D.q,-1)
if(n<60)r=""+n+" seconds"
else r=n===60?"1 minute":""+(n/60|0)+" minutes"
s=s?D.aH:D.c
w.push(C.aE(m,C.p(m,new C.x(r,m,new C.G(!0,s,m,m,m,m,13,D.u,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m,m,m,m,m,m,m,m,m),D.f,m,m,new C.o(u,m,new C.bP(p,p,p,p),new C.bq(t,t,t,t),m,m,D.n),m,m,m,m,D.ix,m,m,m),D.y,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new A.e2s(v,e,n),m,m,m,m,m,m,!1,D.a8))}return C.bn(!0,new C.C(D.bV,C.v(C.a([B.fq1,D.at,B.fur,D.S,B.fna,D.an,k,D.ac,C.bY(D.bz,w,D.br,8,8),D.aA,C.dp(A9.alJ,B.fbc,new A.e2t(v,d),m),D.O,C.ex(B.bOc,B.fhW,new A.e2u(v,d),m)],l),D.F,m,D.e,D.Q,0,D.p),m),!0,!1,D.af,!0,!0)},
$S:84}
A.e2r.prototype={
$0(){var w=this.c
this.b.$1(new A.e2p(w))
A.fO2(w.a)
this.a.m(new A.e2q())},
$S:0}
A.e2p.prototype={
$0(){return $.aOA=this.a.a},
$S:0}
A.e2q.prototype={
$0(){},
$S:0}
A.e2s.prototype={
$0(){return this.b.$1(new A.e2o(this.a,this.c))},
$S:0}
A.e2o.prototype={
$0(){return this.a.db=this.b},
$S:0}
A.e2t.prototype={
$0(){C.a6(this.b,!1).O(null)
var w=this.a
w.ctI(w.db)},
$S:0}
A.e2u.prototype={
$0(){C.a6(this.b,!1).O(null)
this.a.b4E(45,!0)},
$S:0}
A.e2g.prototype={
$0(){var w=this.a,v=w.d
v===$&&C.c()
v.e=this.b
w.ax=null
w.j4()},
$S:0}
A.e2h.prototype={
$1(d){return this.a.cxV()},
$S:12}
A.e2i.prototype={
$0(){},
$S:0}
A.e2x.prototype={
$0(){return this.a.dy=this.b.Q},
$S:0}
A.e2n.prototype={
$0(){var w=this.b
w.j4()
w.k2=this.a.a;++w.k3},
$S:0}
A.e2l.prototype={
$0(){var w=this.a
w.cx=null
w.dy=""},
$S:0}
A.e2e.prototype={
$1(d){return this.a.cAu()},
$S:12}
A.e2f.prototype={
$0(){},
$S:0}
A.e2k.prototype={
$0(){},
$S:0}
A.e2N.prototype={
$1(d){var w=d.b
return w==="hospital"||w==="shop"},
$S:z+28}
A.e2K.prototype={
$0(){return this.a.bMs(this.b)},
$S:0}
A.e2L.prototype={
$0(){return this.a.bP0(this.b)},
$S:0}
A.e2M.prototype={
$0(){return this.b.ry=this.a.a},
$S:0}
A.e1q.prototype={
$0(){},
$S:0}
A.e2c.prototype={
$0(){var w=this.a
w.j4()
w.acL(!0)},
$S:0}
A.e2d.prototype={
$1(d){return this.a.c3i()},
$S:12}
A.e1t.prototype={
$1(d){return!D.d.b7(this.a.d,new A.e1s(d))},
$S:32}
A.e1s.prototype={
$1(d){return d.a===this.a},
$S:z+10}
A.e1u.prototype={
$1(d){return d.a===this.a.a},
$S:z+10}
A.e26.prototype={
$1(d){var w,v=this.a
if(v.c==null)return
w=++v.xr
if(w>36){v.ahv()
return}if(w%8<4){A.ku((w&1)===0?1046:1318,160,0.3,"sine")
if(D.o.F(v.xr,8)===0)C.Sm()}},
$S:12}
A.e27.prototype={
$0(){},
$S:0}
A.e2j.prototype={
$0(){return this.a.x1=null},
$S:0}
A.e1B.prototype={
$4$col$on(d,e,f,g){var w=null,v=g?f.j(0.45):D.w.j(0.62),u=C.m(18),t=C.I(f,D.q,1.8)
return C.aE(w,C.p(w,C.d(d,w,w,w,w,w,w,D.j1,w,w,w),D.f,w,w,new C.o(v,w,t,u,w,w,D.n),w,w,w,B.bu8,D.agB,w,w,w),D.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new A.e1C(e),w,w,w,w,!1,D.a8)},
$2(d,e){return this.$4$col$on(d,e,D.b4,!1)},
$3$col(d,e,f){return this.$4$col$on(d,e,f,!1)},
$3$on(d,e,f){return this.$4$col$on(d,e,D.b4,f)},
$S:1796}
A.e1C.prototype={
$1(d){return this.a.$0()},
$S:23}
A.e1D.prototype={
$0(){var w=this.a
w.ahv()
w.x9("calls")},
$S:0}
A.e1G.prototype={
$2(d,e){var w=this.a
w.p2=d
w.p3=e},
$S:338}
A.e1E.prototype={
$0(){var w=this.a
return w.m(new A.e1A(w))},
$S:0}
A.e1A.prototype={
$0(){var w=this.a
return w.RG=!w.RG},
$S:0}
A.e1F.prototype={
$0(){var w=this.a,v=w.R8
if(v==null)v=null
else{v=v.c
v===$&&C.c()}w=v==null?w.ok:v
if(w!=null)if(w.Q<=0.01)w.as=160
return null},
$S:0}
A.e1w.prototype={
$1(d){var w=this.a,v=w.id
w=w.k2
return v==="ptrap"?new A.a8t(w,null):new A.a3T(w,null)},
$S:1797}
A.e1x.prototype={
$1(d){var w=this.a
return new A.GZ(w.id,w.k1,null)},
$S:z+26}
A.e2O.prototype={
$1(d){var w=this.a
return new A.GZ(w.a,w.c,null)},
$S:z+26}
A.e1z.prototype={
$1(d){return A.fQh(!1,this.a.CW,!1)},
$S:z+33}
A.e1y.prototype={
$1(d){return new A.Va(this.a.cx,null)},
$S:z+34}
A.e0v.prototype={
$1(d){var w,v,u,t,s,r,q,p=null,o=this.a,n=o.d
n===$&&C.c()
w=n.d
w===$&&C.c()
n=C.d("Add to "+w[n.e].b,p,p,p,p,p,p,D.ds,p,p,p)
w=x.p
v=C.a([],w)
for(u=0;u<3;++u){t={}
s=B.de5[u]
t.a=null
t.a=s.a
r=new C.aW(12,12)
q=new C.aA(D.b1,1,D.q,-1)
v.push(C.aE(p,C.p(p,new C.x(s.b,p,D.rD,p,p,p,p,p,p,p,p,p),D.f,p,p,new C.o(D.fb.j(0.4),p,new C.bP(q,q,q,q),new C.bq(r,r,r,r),p,p,D.n),p,p,p,p,P.AO,p,p,p),D.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new A.e0u(t,o,d),p,p,p,p,p,p,!1,D.a8))}return C.bn(!0,new C.C(D.bV,C.v(C.a([n,D.at,B.fse,D.ac,C.bY(D.bz,v,D.br,8,8)],w),D.F,p,D.e,D.Q,0,D.p),p),!0,!1,D.af,!0,!0)},
$S:28}
A.e0u.prototype={
$0(){C.a6(this.c,!1).O(null)
this.b.bxw(this.a.a)},
$S:0}
A.e0p.prototype={
$1(d){return d.b==="back"},
$S:z+15}
A.e0q.prototype={
$1(d){return d.b==="back"},
$S:z+15}
A.e0r.prototype={
$1(d){return Math.abs(d-this.a)>13},
$S:117}
A.e0s.prototype={
$0(){var w=this
w.b.dy.push(new A.aTX(w.c,w.d,new A.XG(C.T(x.S,x.N))))
w.a.j4()},
$S:0}
A.e1v.prototype={
$0(){var w,v=this,u=v.b,t=u.c,s=v.c,r=v.d
u.c=t+(s?D.o.gUL(r)*40:r)
t=u.d
r=v.e
u.d=t+(s?D.o.gUL(r)*40:r)
t=v.a
r=t.d
r===$&&C.c()
w=r.d
w===$&&C.c()
w[r.e].aC5(0,u)
t.j4()},
$S:0}
A.e2y.prototype={
$0(){var w,v,u,t=this.b
t.e=D.o.F(t.e+1,4)
w=this.a
v=w.d
v===$&&C.c()
u=v.d
u===$&&C.c()
u[v.e].aC5(0,t)
w.j4()},
$S:0}
A.e1X.prototype={
$0(){var w=this.b
w.f=(w.f+1)%6
this.a.j4()},
$S:0}
A.e1Y.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&C.c()
w=u.d
w===$&&C.c()
D.d.W(w[u.e].x,this.b)
v.at=v.Q=0
v.j4()},
$S:0}
A.e0t.prototype={
$0(){var w=this.a,v=this.b.a
w.Q=v
w.at=100+v
w.j4()},
$S:0}
A.e18.prototype={
$0(){return this.a.acM(-6,0)},
$S:0}
A.e19.prototype={
$0(){return this.a.acM(6,0)},
$S:0}
A.e1a.prototype={
$0(){return this.a.acM(0,-6)},
$S:0}
A.e1b.prototype={
$0(){return this.a.acM(0,6)},
$S:0}
A.e1c.prototype={
$0(){return this.a.bxz(this.b.a)},
$S:0}
A.e1d.prototype={
$0(){var w=this.a
return w.m(new A.e17(w))},
$S:0}
A.e17.prototype={
$0(){return this.a.as=-1},
$S:0}
A.e1e.prototype={
$0(){var w=this.a
w.m(new A.e16(w,this.b))},
$S:0}
A.e16.prototype={
$0(){var w,v=this.a,u=v.as,t=this.b,s=v.d
if(u<0){s===$&&C.c()
u=s.d
u===$&&C.c()
D.d.fZ(u[s.e].z,0,3,t)}else{s===$&&C.c()
w=s.d
w===$&&C.c()
w[s.e].z[u]=t}v.j4()},
$S:0}
A.e1f.prototype={
$0(){var w=this.a
w.m(new A.e15(w,this.b))},
$S:0}
A.e15.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&C.c()
w=u.d
w===$&&C.c()
w[u.e].Q=this.b
v.j4()},
$S:0}
A.e1g.prototype={
$0(){var w=this.a
w.m(new A.e14(w))},
$S:0}
A.e14.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&C.c()
w=u.d
w===$&&C.c()
u=w[u.e]
u.dx=u.dx==="fan"?"light":"fan"
v.j4()},
$S:0}
A.e1h.prototype={
$0(){var w=this.a
w.m(new A.e13(w,this.b))},
$S:0}
A.e13.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&C.c()
w=u.d
w===$&&C.c()
w[u.e].as=this.b
v.j4()},
$S:0}
A.e1i.prototype={
$0(){return this.a.DM(this.b.d)},
$S:0}
A.e2R.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new A.e2P(w))},
$S:0}
A.e2P.prototype={
$0(){return this.a.k2=null},
$S:0}
A.e2Q.prototype={
$3(d,e,f){var w=null
return C.dc(C.chM(D.A,w,w,w,w,D.ck,D.wA,w,this.a.k2,!1,!1,!1,w,D.oJ,1,w),e)},
$S:100}
A.e0W.prototype={
$0(){return this.a.x9("calls")},
$S:0}
A.e0X.prototype={
$0(){return this.a.x9("hospital")},
$S:0}
A.e0Y.prototype={
$0(){return this.a.x9("shop")},
$S:0}
A.e0Z.prototype={
$0(){return this.a.x9("people")},
$S:0}
A.e1_.prototype={
$0(){return this.a.DM(10)},
$S:0}
A.e10.prototype={
$0(){var w=this.a
return w.m(new A.e0V(w))},
$S:0}
A.e0V.prototype={
$0(){var w=this.a
return w.y=!w.y},
$S:0}
A.e0M.prototype={
$0(){var w=this.a,v=w.d
v===$&&C.c()
return v.a.length!==0?w.DN():w.cic(this.b)},
$S:0}
A.e0E.prototype={
$0(){return this.a.In()},
$S:0}
A.e0D.prototype={
$1(d){return d<=5},
$S:32}
A.e0C.prototype={
$1(d){var w,v,u,t,s,r,q,p,o=this.a,n=o.R8,m=o.CW
if(n!=null){o=m.gpt()/1000
m=B.aCY.h(0,$.aOA)
if(m==null)m=B.RD
w=C.a([],x.z)
v=new A.iK(w)
if(n.a!=="hospital")A.aMA(v,B.e8m,o,B.aGz,!1,0)
n=n.c
n===$&&C.c()
u=n.f
t=n.r
s=n.w
r=n.x
q=n.y
p=n.z&&r
A.aMA(v,A.cfP(0,-1,"",!1,n.Q,"",-1,q,!1,!1,!1,0,p,r,u,s,t),o,m,!0,0)
o=w}else{n=o.d
n===$&&C.c()
w=n.d
w===$&&C.c()
n=w[n.e]
m=m.gpt()
w=o.cgX()
u=B.aCY.h(0,$.aOA)
if(u==null)u=B.RD
t=o.fr
s=o.r
t=A.hVP(n,m/1000,o.bKA(),s,w,u,t)
o=t}return o},
$S:z+7}
A.e0N.prototype={
$0(){var w=this.a
w.m(new A.e0B(w))
w.In()},
$S:0}
A.e0B.prototype={
$0(){var w=this.a
return w.x=!w.x},
$S:0}
A.e0O.prototype={
$0(){var w=this.a
return w.cx!=null?w.a1s():w.cxU()},
$S:0}
A.e0P.prototype={
$0(){var w=this.a
w.m(new A.e0A(w))
w.In()
if(w.z)w.il("Drag to turn all the way round. Double tap a spot on the floor to walk there.")},
$S:0}
A.e0A.prototype={
$0(){var w=this.a,v=!w.z
w.z=v
if(v&&w.cx!=null)w.a1s()
w.j4()},
$S:0}
A.e0Q.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&C.c()
w=u.d
w===$&&C.c()
return v.DM(w[u.e].c!=="outside"?11:10)},
$S:0}
A.e0R.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&C.c()
w=u.d
w===$&&C.c()
if(w[u.e].c!=="outside")v.DM(11)
v.x9("calls")},
$S:0}
A.e0S.prototype={
$0(){var w=this.a
return w.m(new A.e0z(w))},
$S:0}
A.e0z.prototype={
$0(){var w=this.a,v=!w.w
w.w=v
if(v)w.il("Voltage tester in your hand: tap an outlet, a switch or the light.")},
$S:0}
A.e0T.prototype={
$0(){var w=this.a
return w.m(new A.e0y(w))},
$S:0}
A.e0y.prototype={
$0(){var w=this.a
return w.y=!w.y},
$S:0}
A.e0U.prototype={
$0(){return this.a.QT("look")},
$S:0}
A.e0F.prototype={
$0(){return this.a.QT("furniture")},
$S:0}
A.e0G.prototype={
$0(){return this.a.QT("walls")},
$S:0}
A.e0H.prototype={
$0(){return this.a.QT("floor")},
$S:0}
A.e0I.prototype={
$0(){return this.a.QT("ceiling")},
$S:0}
A.e0J.prototype={
$0(){return this.a.QT("doors")},
$S:0}
A.e0K.prototype={
$0(){return C.a6(this.a,!1).c8(C.e8(new A.e0x(),!1,null,x.H))},
$S:0}
A.e0x.prototype={
$1(d){return B.aDX},
$S:z+37}
A.e0L.prototype={
$0(){var w=this.a
return w.m(new A.e0w(w))},
$S:0}
A.e0w.prototype={
$0(){var w=this.a.d
w===$&&C.c()
return w.c=!w.c},
$S:0}
A.e1W.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m=null,l=C.aI(d,m,x.w).w,k=this.a,j=k.d
j===$&&C.c()
w=x.p
j=C.a([B.fgV,D.at,C.d("Wiring "+j.gcTv()+"/"+k.d.gqr().length+" \xb7 Plumbing "+k.d.gcQm()+"/"+k.d.gcQl(),m,m,m,m,m,m,B.ID,m,m,m),D.S],w)
for(v=k.d.gqr(),u=v.length,t=0;t<v.length;v.length===u||(0,C.L)(v),++t){s=v[t]
r=D.c.j(0.05)
q=new C.aW(12,12)
p=new C.aA(s.gjB()&&s.gl3()?D.b4.j(0.5):D.bF,1,D.q,-1)
if(s.gjB()&&s.gl3())o="\u2705 finished"
else{o=s.gjB()?"":"\u26a1 wiring  "
o+=s.gl3()?"":"\ud83d\udeb0 plumbing"}n=s.gjB()&&s.gl3()?D.es:D.ad
j.push(C.aE(m,C.p(m,new C.cn(D.aO,D.e,D.j,D.m,m,D.p,m,0,C.a([new C.bD(1,D.bi,new C.x(s.b,m,B.f6l,m,m,m,m,m,m,m,m,m),m),new C.x(o,m,new C.G(!0,n,m,m,m,m,12,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m,m,m,m,m,m,m,m,m)],w),m),D.f,m,m,new C.o(r,m,new C.bP(p,p,p,p),new C.bq(q,q,q,q),m,m,D.n),m,m,m,D.eO,D.bS,m,m,m),D.y,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new A.e1T(k,d,s),m,m,m,m,m,m,!1,D.a8))}j.push(D.O)
j.push(C.dW(B.fe2,new A.e1U(k,d),m))
j.push(D.O)
j.push(C.bJ(B.far,new A.e1V(k,d),m))
return C.bn(!0,new C.cV(new C.aY(0,1/0,0,l.a.b*0.75),C.cB(j,m,D.bV,m,m,D.ah,!0),m),!0,!1,D.af,!0,!0)},
$S:28}
A.e1T.prototype={
$0(){C.a6(this.b,!1).O(null)
this.a.DM(this.c.a)},
$S:0}
A.e1U.prototype={
$0(){C.a6(this.b,!1).O(null)
var w=this.a
w.m(new A.e1S(w))
w.il("Every room needs its wiring and plumbing again. Wire the whole house from the start.")},
$S:0}
A.e1S.prototype={
$0(){var w=this.a,v=w.d
v===$&&C.c()
v.cN2()
w.j4()},
$S:0}
A.e1V.prototype={
$0(){C.a6(this.b,!1).O(null)
$.Dv=A.aU2(D.o.F(Date.now(),1e5))
var w=this.a
w.m(new A.e1R(w))
w.acL(!0)},
$S:0}
A.e1R.prototype={
$0(){var w=this.a,v=$.Dv
v.toString
w.d=v
w.r="look"
w.Q=0
w.as=-1
w.at=0
w.j4()},
$S:0}
A.dmC.prototype={
$1(d){var w,v,u,t,s,r=d.b,q=14*this.b,p=D.k.e3(r.a,q),o=D.k.e3(r.b,q)
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
A.eX6.prototype={
$0(){return this.b.d=this.a.a},
$S:0}
A.eX5.prototype={
$0(){return this.a.d=null},
$S:0}
A.eX8.prototype={
$1(d){return this.a.aXf(d.gf7())},
$S:82}
A.eX9.prototype={
$1(d){return this.a.aXf(d.gf7())},
$S:256}
A.eXa.prototype={
$1(d){return this.a.aXe()},
$S:138}
A.eX7.prototype={
$1(d){return this.a.aXe()},
$S:185}
A.cai.prototype={
$0(){var w=0,v=C.j(x.P),u=1,t=[],s,r,q,p,o,n
var $async$$0=C.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:u=3
w=6
return C.b($.qM().jt(0,"assets/images/ngmy_logo.png"),$async$$0)
case 6:s=e
w=7
return C.b(C.fVG(J.eR(J.vc(s)),null),$async$$0)
case 7:r=e
o=$
n=J
w=8
return C.b(r.lV(),$async$$0)
case 8:o.cah=n.ah1(e)
u=1
w=5
break
case 3:u=2
p=t.pop()
$.cah=null
w=5
break
case 2:w=1
break
case 5:return C.h(null,v)
case 1:return C.f(t.at(-1),v)}})
return C.i($async$$0,v)},
$S:50}
A.fmI.prototype={
$2(d,e){return this.a===d?e:0},
$S:705}
A.fmw.prototype={
$1(d){return d.b==="right"},
$S:z+15}
A.fmF.prototype={
$0(){var w=C.a([],x.z),v=new A.iK(w)
v.f=1
v.x=$.jO=$.jO+1
v.bH(B.fJo,B.fAR,B.Ak)
v.bB(B.fyq,B.fEQ,B.px,0.5)
v.bH(B.aRv,B.fG3,B.Ak)
v.bH(B.aRv,B.fDb,B.Ak)
return w},
$S:z+38}
A.fmG.prototype={
$1(d){var w=this,v=w.a,u=v.b
A:{if("left"===u){v=A.rO(d,0,1.5707963267948966,new A.D(-w.b/2,0,v.c+w.c/2-40))
break A}if("right"===u){v=A.rO(d,0,-1.5707963267948966,new A.D(w.b/2,0,v.c+w.c/2-40))
break A}v=A.rO(d,0,0,new A.D(v.c,0,0))
break A}return v},
$S:z+47}
A.fmx.prototype={
$1(d){return d.b==="back"},
$S:z+15}
A.fmy.prototype={
$1(d){return d.c},
$S:z+40}
A.fmz.prototype={
$2(d,e){return e},
$S:86}
A.fmA.prototype={
$3(d,e,f){return H.aOY(d,e,0,f+this.a)},
$S:339}
A.fmC.prototype={
$2(a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=this
if(a4==null)return
w=A.bzF(a4)
v=a3.a
u=A.hk4(v,w,a5)
t=u.a
s=u.b
r=u.d
q=t-2.5
p=s-2.5
o=v.go+a5*2
n=a3.b
m=n.b=730+a5
l=n.x=$.jO=$.jO+1
n.e=5
if(v.c==="hall"&&a5<2){k=a5===1
j=a3.c
i=k?-j/2:j/2
h=k?1:-1
g=u.c
n.bB(new A.D(i+h*1.4,r,g),new A.D(2.6,s+3,t+3),B.Kj,0.5)
n.bB(new A.D(i+h*2.8,r,g),new A.D(0.2,s,t),I.mV,0.7)
if(v.fy){f=i+h*2.95
j=q/2
e=k?g+j:g-j
d=k?g-j:g+j
j=p/2
a0=r+j
j=r-j
a3.d.push(new A.IQ(C.a([new A.D(f,a0,e),new A.D(f,a0,d),new A.D(f,j,d),new A.D(f,j,e)],x.o),m,new A.fmD(o,v,a5),320,320*p/q,9,1,l))}}else{i=u.c
n.bB(new A.D(i,r,1.4),new A.D(t+3,s+3,2.6),B.Kj,0.5)
n.bB(new A.D(i,r,2.8),new A.D(t,s,0.2),I.mV,0.7)
if(v.fy){j=q/2
a0=i-j
a1=p/2
a2=r+a1
j=i+j
a1=r-a1
a3.d.push(new A.IQ(C.a([new A.D(a0,a2,2.95),new A.D(j,a2,2.95),new A.D(j,a1,2.95),new A.D(a0,a1,2.95)],x.o),m,new A.fmE(o,v,a5),320,320*p/q,9,1,l))}}n.e=n.x=0
v=v.fy?"It is on and playing "+E.k_[D.o.F(o,8)].a+". Tap it to watch full screen with the remote.":"The TV is off. Tap it to turn it on."
a3.e.n(0,m,new A.d1(w.b,v,new A.D(0,r,4),110))},
$S:1800}
A.fmD.prototype={
$3(d,e,f){return H.aOY(d,e,this.a,f+this.b.a+this.c*3)},
$S:339}
A.fmE.prototype={
$3(d,e,f){return H.aOY(d,e,this.a,f+this.b.a+this.c*3)},
$S:339}
A.fmH.prototype={
$2(d,e){var w=this.a,v=w.f,u=w.r
w.f=1
w.r=!1
w.b=0
w.e5(new A.D(d,e,0),new A.D(d,e,2.2),0.7,B.K9,0.7,10)
w.f=v
w.r=u},
$S:338}
A.fmB.prototype={
$1(d){return d.b===this.a.a},
$S:z+16}
A.fgD.prototype={
$2(d,e){return this.a===d?e:0},
$S:705}
A.fgE.prototype={
$5(d,e,f,g,h){var w=d.ad(0,e.aF(0,g)).ad(0,new A.D(0,h,0)),v=this.a
A.nl(v,w.ad(0,f.aF(0,0.1)),e,B.fP,26,30,B.m9,f,0)
A.nl(v,w.ad(0,f.aF(0,0.2)),e,B.fP,22,26,B.px,f,0.6)
A.nl(v,w.ad(0,f.aF(0,0.3)),e,B.fP,22,1.2,B.m9,f,0)
A.nl(v,w.ad(0,f.aF(0,0.3)),e,B.fP,1.2,26,B.m9,f,0)},
$S:z+42}
A.fgB.prototype={
$5(d,e,f,g,h){var w=d.ad(0,e.aF(0,g)),v=this.a,u=v.b
A.nl(v,w.ad(0,new A.D(0,42,0)).ad(0,f.aF(0,0.1)),e,B.fP,34,84,B.m9,f,0)
v.b=h
A.nl(v,w.ad(0,new A.D(0,41,0)).ad(0,f.aF(0,0.2)),e,B.fP,28,80,B.wL,f,0.2)
v.b=0
A.nl(v,w.ad(0,new A.D(0,58,0)).ad(0,f.aF(0,0.3)),e,B.fP,20,26,B.L1,f,0)
A.nl(v,w.ad(0,new A.D(0,22,0)).ad(0,f.aF(0,0.3)),e,B.fP,20,26,B.L1,f,0)
v.bB(w.ad(0,e.aF(0,9)).ad(0,new A.D(0,40,0)).ad(0,f.aF(0,1)),new A.D(2.6,2.6,2.6),B.DT,0.8)
v.b=u},
$S:z+43}
A.fgC.prototype={
$4(d,e,f,g){return this.a.push(new A.IQ(C.a([d,e,f,g],x.o),0,A.i2k(),256,256,1,2,this.b))},
$S:z+23}
A.fgA.prototype={
$1(d){return d.b===this.a.a&&d.x},
$S:z+16}
A.fpm.prototype={
$1(d){return D.d.t(B.Pq,d.b)},
$S:z+28}
A.fpn.prototype={
$1(d){return d.b===this.a.a},
$S:z+16}
A.fpo.prototype={
$1(d){return d.b===this.a.a},
$S:z+16}
A.f7r.prototype={
$5(d,e,f,g,h){var w,v,u,t,s,r,q,p,o,n,m,l,k,j
for(w=d.length,v=x.z,u=this.a,t=-f/2,s=u.a,r=this.b,q=0,p=0;p<w;++p){o=d[p]
n=o.a
m=C.a([],v)
l=new A.iK(m)
l.b=u.b
l.f=u.f
l.r=!0
l.bH(new A.D(0,t,0),new A.D(g,f,g),h)
k=(q&1)===0?1:-1
j=n>0?1:-1
D.d.v(s,A.rO(m,r*k*j,0,new A.D(n,e,o.b)));++q}},
$S:1801}
A.fhb.prototype={
$3(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k=x.z,j=C.a([],k),i=new A.iK(j)
i.b=this.a
i.r=!0
d.$1(i)
k=C.a([],k)
for(j=A.heQ(j,e,B.fC),w=j.length,v=f.a,u=f.b,t=f.c,s=x.o,r=0;r<j.length;j.length===w||(0,C.L)(j),++r){q=j[r]
p=C.a([],s)
for(o=q.a,n=o.length,m=0;m<o.length;o.length===n||(0,C.L)(o),++m){l=o[m]
p.push(new A.D(l.a+v,l.b+u,l.c+t))}k.push(new A.mt(p,q.b,q.c,q.d,q.e,q.f,q.r,q.w,q.x,q.y,q.z))}D.d.v(this.b.a,k)},
$S:z+44}
A.fgY.prototype={
$5(d,e,f,g,h){var w=this.a
w.baR(d,e,f,h,!1,g,10)
w.i4(e,g*1.04,h,4,8)},
$S:z+45}
A.fgZ.prototype={
$1(d){return d.iR(B.fC,2.6,B.Wr,4,8,0.15)},
$S:z+1}
A.fh_.prototype={
$1(d){return d.i4(B.fC,2.6,D.bR,3,8)},
$S:z+1}
A.fh0.prototype={
$1(d){return d.i4(B.fC,5.2,this.a,4,10)},
$S:z+1}
A.fh3.prototype={
$1(d){return d.baR(B.fC,B.a7R,4.9,this.a,!1,6.5,12)},
$S:z+1}
A.fh4.prototype={
$1(d){return d.baQ(B.fC,B.fE8,5.1,B.b8J,!1,12)},
$S:z+1}
A.fh5.prototype={
$1(d){return d.i4(B.fC,6.7,this.a,4,10)},
$S:z+1}
A.fh6.prototype={
$1(d){return d.i4(B.fC,4.7,this.a,6,12)},
$S:z+1}
A.fh7.prototype={
$1(d){return d.i4(B.fC,3,this.a,4,8)},
$S:z+1}
A.fh8.prototype={
$1(d){return d.i4(B.fC,5,this.a,5,10)},
$S:z+1}
A.fh9.prototype={
$1(d){return d.i4(B.fC,3.6,this.a,3,8)},
$S:z+1}
A.fha.prototype={
$1(d){return d.i4(B.fC,1,D.c,3,6)},
$S:z+1}
A.fh1.prototype={
$1(d){return d.i4(B.fC,1,this.a,3,6)},
$S:z+1}
A.fh2.prototype={
$1(d){return d.i4(B.fC,1.9,this.a,4,8)},
$S:z+1}
A.fmN.prototype={
$4$alongX(d,e,f,g){var w,v,u,t,s,r,q,p,o,n
for(w=this.a,v=0;v<=f;++v){u=A.uU(d,e,v/f)
w.aBM(new A.D(u.a,4,u.c),B.fJK,B.Wf,!1,0.05)}t=A.uU(d,e,0.5)
for(s=e.aC(0,d).gTf()+0.15,r=t.a,q=t.c,p=0;p<2;++p){o=B.d1s[p]
n=g?new A.D(s,0.16,0.3):new A.D(0.3,0.16,s)
w.bB(new A.D(r,o,q),n,B.Wf,0.05)}},
$3(d,e,f){return this.$4$alongX(d,e,f,!0)},
$S:z+72}
A.fmK.prototype={
$2(d,e){return this.a.jV(A.Gj(d,0.35,3),0.06,e,!1,0.4,6)},
$S:z+73}
A.fmJ.prototype={
$1(d){return this.a.jV(A.Gj(d,0.5,3),0.14,B.pm,!1,0.3,8)},
$S:z+49}
A.fmM.prototype={
$2$col(d,e){return this.a.jV(A.Gj(d,0.4,3),0.055,e,!1,0.35,6)},
$1(d){return this.$2$col(d,B.Wn)},
$S:z+50}
A.fmL.prototype={
$5$h$w(d,e,f,g,h){var w=this.a
w.b=d
w.bB(e,new A.D(h,g,0.06),f,0.3)},
$3(d,e,f){return this.$5$h$w(d,e,f,0.7,0.45)},
$S:z+51}
A.fnH.prototype={
$0(){return A.ku(1320,120,0.25,"tri")},
$S:0}
A.dKH.prototype={
$1(d){return this.a},
$S:39}
A.dKK.prototype={
$0(){return C.a6(this.a,!1).lN()},
$S:0}
A.dKL.prototype={
$0(){var w=this.a
return w.m(new A.dKJ(w))},
$S:0}
A.dKJ.prototype={
$0(){return this.a.d=!1},
$S:0}
A.dKM.prototype={
$0(){var w=this.a
return w.m(new A.dKI(w))},
$S:0}
A.dKI.prototype={
$0(){return this.a.d=!0},
$S:0}
A.dKP.prototype={
$0(){var w=this.a
return w.xq(A.aZr("","",w.d))},
$S:0}
A.dKQ.prototype={
$0(){return this.a.xq(B.dtJ)},
$S:0}
A.dKR.prototype={
$0(){var w=this.a
return w.xq(A.aZr("wiring","",w.d))},
$S:0}
A.dKS.prototype={
$0(){var w=this.a
return w.xq(A.aZr("plumbing","",w.d))},
$S:0}
A.dKT.prototype={
$0(){var w=this.a
return w.xq(A.aZr("fix","",w.d))},
$S:0}
A.dKU.prototype={
$0(){var w=this.a
return w.xq(A.fQh(w.d,null,!1))},
$S:0}
A.dKV.prototype={
$0(){var w=this.a
return w.xq(A.fQh(w.d,null,!0))},
$S:0}
A.dKW.prototype={
$0(){var w=this.a
return w.xq(new A.aq3(w.d,null))},
$S:0}
A.dKN.prototype={
$0(){var w=this.b.a
w=w==="house"?B.fNh:A.aZr("",w,!1)
return this.a.xq(w)},
$S:0}
A.dKO.prototype={
$0(){return this.a.xq(B.aDX)},
$S:0}
A.cpO.prototype={
$0(){return this.a.e.anE(0.8)},
$S:0}
A.cpP.prototype={
$0(){return this.a.e.anE(1.25)},
$S:0}
A.fDZ.prototype={
$1(d){var w,v,u,t,s,r,q,p,o=null,n=C.aI(d,o,x.w).w,m=this.b,l=this.c,k=l.length,j=x.p,i=C.a([C.d(this.a,o,o,o,o,o,o,D.ds,o,o,o),D.at,C.d(""+new C.a2(m,new A.fDY(),C.U(m).k("a2<1>")).gM(0)+" of "+k+" steps done",o,o,o,o,o,o,B.ID,o,o,o),D.S],j)
for(w=0;w<k;++w){v=D.c.j(0.05)
u=new C.aW(14,14)
t=new C.aA(m[w]?D.b4.j(0.6):D.bF,1,D.q,-1)
s=m[w]
r=s?"\u2705":""+(w+1)+"."
q=s?D.c:D.aH
p=l[w]
s=s?D.az:D.c
i.push(C.p(o,new C.cn(D.aO,D.e,D.j,D.F,o,D.p,o,0,C.a([new C.x(r,o,new C.G(!0,q,o,o,o,o,14,D.u,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o),o,o,o,o,o,o,o,o,o),D.av,new C.bD(1,D.bi,new C.x(p,o,new C.G(!0,s,o,o,o,o,13,o,o,o,o,o,1.4,o,o,o,o,o,o,o,o,o,o,o,o,o),o,o,o,o,o,o,o,o,o),o)],j),o),D.f,o,o,new C.o(v,o,new C.bP(t,t,t,t),new C.bq(u,u,u,u),o,o,D.n),o,o,o,D.cH,D.bj,o,o,o))}return C.bn(!0,new C.cV(new C.aY(0,1/0,0,n.a.b*0.75),C.cB(i,o,D.bV,o,o,D.ah,!0),o),!0,!1,D.af,!0,!0)},
$S:28}
A.fDY.prototype={
$1(d){return d},
$S:144}
A.bRW.prototype={
$0(){return C.a6(this.a,!1).lN()},
$S:0}
A.d2s.prototype={
$0(){var w=this.a
w.y=this.b
w.z=this.c},
$S:0}
A.d2t.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new A.d2r(w))},
$S:0}
A.d2r.prototype={
$0(){return this.a.y=null},
$S:0}
A.d2l.prototype={
$0(){return this.a.x=0},
$S:0}
A.d2k.prototype={
$1(d){var w=this.a.geS(0).b
return new C.bc(w,C.a3(w).k("bc<2>")).t(0,d)},
$S:3}
A.d2m.prototype={
$1(d){return d.a===this.a},
$S:z+12}
A.d2n.prototype={
$2(d,e){return e===this.a},
$S:455}
A.d2o.prototype={
$0(){var w=this.a
w.xs()
w.x=this.b},
$S:0}
A.d2p.prototype={
$0(){return this.a.x=this.b},
$S:0}
A.d2q.prototype={
$0(){var w=this.a,v=w.geS(0),u=v.a
v.a=!u
if(u)v.d=!1
w.xs()},
$S:0}
A.d2u.prototype={
$0(){var w=this.a,v=w.geS(0)
v.d=v.a=!0
w.xs()},
$S:0}
A.d2C.prototype={
$1(d){return!d},
$S:144}
A.d2F.prototype={
$0(){var w=this.a.gFK()
return A.fDX(this.b,w.b,w.d,this.c)},
$S:0}
A.d2D.prototype={
$0(){var w=this.a
return w.m(new A.d2B(w))},
$S:0}
A.d2B.prototype={
$0(){var w=this.a,v=w.geS(0)
v.e=!v.e
w.xs()},
$S:0}
A.d2E.prototype={
$0(){var w=this.a
return w.m(new A.d2A(w))},
$S:0}
A.d2A.prototype={
$0(){var w=this.a,v=w.geS(0)
v.f=!v.f
w.xs()},
$S:0}
A.d2G.prototype={
$0(){var w=this.a,v=w.gkT()
return v.lW(10,0.2,new A.D(0.6,0,w.geS(0).c===0?4.2:0.4),-0.95)},
$S:0}
A.d2H.prototype={
$0(){var w=this.a,v=w.gkT()
return v.lW(10,0.2,new A.D(-0.6,0,w.geS(0).c===0?4.2:0.4),0.95)},
$S:0}
A.d2I.prototype={
$1(d){return!this.a.geS(0).b.iS(0,d.a)},
$S:z+13}
A.d2J.prototype={
$0(){var w=this.a,v=this.b,u=v.a
if(w.geS(0).b.iS(0,u)){w.p_("That wire is already fastened. Tap the wire in the 3D view to take it off if you want to move it.")
return}w.m(new A.d2z(w,v))
if(w.w.length!==0){if(u==="ground")w.gkT().lW(8,0.55,B.fG9,0.15)
else if(u==="white")w.gkT().lW(8.5,0.2,B.fIL,0.95)
else w.gkT().lW(8.5,0.2,B.fBb,-0.95)
w.kw(v.b+": now tap the screw it belongs on.",!0)}},
$S:0}
A.d2z.prototype={
$0(){var w=this.a,v=this.b.a
return w.w=w.w===v?"":v},
$S:0}
A.d2K.prototype={
$0(){var w=this.a
w.m(new A.d2y(w))
A.yb()
w.kw("The wires are folded back and the device is pushed into the box. Now put the cover plate on.",!0)
w.nX()},
$S:0}
A.d2y.prototype={
$0(){var w=this.a
w.geS(0).c=1
w.xs()},
$S:0}
A.d2L.prototype={
$0(){var w=this.a
w.m(new A.d2x(w))
w.nX()},
$S:0}
A.d2x.prototype={
$0(){var w=this.a
w.geS(0).c=0
w.xs()},
$S:0}
A.d2M.prototype={
$0(){var w=this.a
w.m(new A.d2w(w))
A.yb()
w.kw("Cover plate on. Now turn the power on and test.",!0)},
$S:0}
A.d2w.prototype={
$0(){var w=this.a
w.geS(0).c=2
w.xs()},
$S:0}
A.d2N.prototype={
$0(){var w=this.a
w.m(new A.d2v(w))
w.nX()},
$S:0}
A.d2v.prototype={
$0(){var w=this.a,v=w.geS(0)
v.c=0
v.b.a9(0)
v.a=!0
v.d=!1
w.Q=0
w.w=""
w.x=0
w.xs()},
$S:0}
A.eMB.prototype={
$0(){var w=this.a
w.x=this.b
w.y=this.c},
$S:0}
A.eMC.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new A.eMA(w))},
$S:0}
A.eMA.prototype={
$0(){return this.a.x=null},
$S:0}
A.eMu.prototype={
$0(){return this.a.w=0},
$S:0}
A.eMv.prototype={
$0(){var w=this.a,v=w.geS(0)
v.a.K(0,this.b)
v.c=!1
v.d=""
w.f=A.bzK(v)
w.r=""},
$S:0}
A.eMw.prototype={
$0(){var w=this.a,v=w.geS(0)
v.b.n(0,this.b,!0)
v.d=""
w.f=A.bzK(v)},
$S:0}
A.eMx.prototype={
$0(){return this.a.w=this.b},
$S:0}
A.eMy.prototype={
$1(d){return this.a.geS(0).b.h(0,d)!==!0},
$S:3}
A.eMz.prototype={
$0(){var w,v=this.a,u=v.geS(0)
u.c=!0
w=this.b
u.d=w.length===0?"":D.d.gL(w)
v.f=A.bzK(u)},
$S:0}
A.eMG.prototype={
$1(d){return!d},
$S:144}
A.eMK.prototype={
$0(){return A.fDX(this.a,"Sink drain (P-trap)",B.d3W,this.b)},
$S:0}
A.eMH.prototype={
$1(d){return A.i3v(this.a.geS(0),d)},
$S:z+7}
A.eMI.prototype={
$0(){var w=this.a
return w.m(new A.eMF(w,this.b))},
$S:0}
A.eMF.prototype={
$0(){var w=this.a,v=this.b
return w.r=w.r===v?"":v},
$S:0}
A.eMJ.prototype={
$0(){var w=this.a
w.m(new A.eME(w))
w.nX()},
$S:0}
A.eME.prototype={
$0(){var w,v=this.a,u=v.geS(0)
u.a.a9(0)
w=u.b
w.aHk(w,new A.eMD())
u.c=!1
v.r=u.d=""
v.w=0
v.f=A.bzK(u)},
$S:0}
A.eMD.prototype={
$2(d,e){return!1},
$S:1803}
A.d5n.prototype={
$0(){var w=this.a
w.x=this.b
w.y=this.c},
$S:0}
A.d5o.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new A.d5m(w))},
$S:0}
A.d5m.prototype={
$0(){return this.a.x=null},
$S:0}
A.d5f.prototype={
$0(){return this.a.w=0},
$S:0}
A.d5i.prototype={
$1(d){return d.a===this.a},
$S:z+24}
A.d5j.prototype={
$0(){var w=this.a,v=w.geS(0)
v.f=!1
w.f=A.aNz(v)
w.w=this.b},
$S:0}
A.d5k.prototype={
$0(){var w=this.a,v=w.geS(0),u=v.e
u.bn(u,new A.d5h(this.b))
v.f=!1
w.f=A.aNz(v)},
$S:0}
A.d5h.prototype={
$2(d,e){return e===this.a},
$S:455}
A.d5l.prototype={
$0(){return this.a.w=this.b},
$S:0}
A.d5g.prototype={
$0(){var w=this.a,v=w.geS(0)
v.f=!v.f
w.f=A.aNz(v)},
$S:0}
A.d5s.prototype={
$1(d){return!d},
$S:144}
A.d5y.prototype={
$0(){return A.fDX(this.a,"Faucet supply lines",B.dfe,this.b)},
$S:0}
A.d5t.prototype={
$1(d){return A.hVn(this.a.geS(0),d)},
$S:z+7}
A.d5u.prototype={
$0(){var w=this.a
return w.m(new A.d5r(w))},
$S:0}
A.d5r.prototype={
$0(){var w=this.a,v=w.geS(0)
v.r=!v.r
w.f=A.aNz(v)},
$S:0}
A.d5w.prototype={
$0(){var w=this.b
return w.m(new A.d5q(this.a,w))},
$S:0}
A.d5q.prototype={
$0(){var w=this.b,v=w.r,u=this.a.a
return w.r=v===u?"":u},
$S:0}
A.d5v.prototype={
$1(d){return d===this.a.a},
$S:3}
A.d5x.prototype={
$0(){var w=this.a
w.m(new A.d5p(w))
w.nX()},
$S:0}
A.d5p.prototype={
$0(){var w=this.a,v=w.geS(0)
v.e.a9(0)
v.f=!1
w.r=""
w.w=0
w.f=A.aNz(v)},
$S:0}
A.dcs.prototype={
$0(){var w=this.a
w.x=this.b
w.y=this.c},
$S:0}
A.dct.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new A.dcr(w))},
$S:0}
A.dcr.prototype={
$0(){return this.a.x=null},
$S:0}
A.dcm.prototype={
$0(){return this.a.r=0},
$S:0}
A.dco.prototype={
$0(){var w=this.a,v=w.d
v.d.W(0,72)
w.f=A.afm(v)
w.r=this.b},
$S:0}
A.dcp.prototype={
$0(){var w=this.a,v=w.d
v.c=!0
v.b=!1
w.f=A.afm(v)
w.r=this.b},
$S:0}
A.dcq.prototype={
$0(){return this.a.r=this.b},
$S:0}
A.dcn.prototype={
$1(d){return this.a},
$S:39}
A.dcB.prototype={
$0(){return A.fDX(this.a,"Fix the house",B.cf1,this.b)},
$S:0}
A.dcw.prototype={
$0(){return this.a.cbf(this.b)},
$S:0}
A.dcy.prototype={
$1(d){return d<=this.a.d.a},
$S:32}
A.dcx.prototype={
$1(d){return A.hfY(this.a.d,d)},
$S:z+7}
A.dcz.prototype={
$0(){var w=this.a
return w.m(new A.dcv(w))},
$S:0}
A.dcv.prototype={
$0(){var w=this.a
return w.w=w.w==="wrench"?"":"wrench"},
$S:0}
A.dcA.prototype={
$1(d){var w=this.a
return w.m(new A.dcu(w,d))},
$S:6}
A.dcu.prototype={
$0(){var w=this.a,v=w.d,u=D.k.V(this.b)
v.a=u
if(u<5)w.r=0
w.f=A.afm(v)},
$S:0}
A.c5B.prototype={
$0(){return C.a6(this.a,!1).lN()},
$S:0}
A.fnn.prototype={
$5(d,e,f,g,h){var w=this.a.a.t(0,h),v=this.b
v.b=d
if(w)v.a5E(e,0.66,f,!1,!0,!0,g,14)
else{v.d=0.3
v.aHi(e,0.74,D.b1,!1,!0,0,8)
v.d=1}},
$S:z+53}
A.fnm.prototype={
$6(d,e,f,g,h,i){var w,v
if(!i)return
w=this.a.b.h(0,e)
v=w===!0?f:f.ad(0,h)
w=this.b
w.e=0.5
w.b=d
w.e5(v.aC(0,g.aF(0,0.6)),v.ad(0,g.aF(0,0.6)),1.12,B.pm,0.35,8)
w.yY(v.aC(0,g.aF(0,0.62)),v.aC(0,g.aF(0,0.5)),1.2,0.5,B.VD,0.2,8)
w.b=0
w.yY(f.aC(0,g.aF(0,0.05)),f.ad(0,g.aF(0,0.08)),0.82,0.55,B.bgL,0.1,12)
w.e=0},
$S:z+54}
A.fnl.prototype={
$1(d){return d.b<-0.6},
$S:z+18}
A.fmv.prototype={
$1(d){return this.a.e.h(0,d)===this.b},
$S:32}
A.foQ.prototype={
$2(d,e){var w,v,u,t,s,r,q,p=A.afz(d)
for(w=this.a*1.6,v=this.b,u=p.a,t=p.b,s=p.c,r=0;r<7;++r){q=D.k.F(w+r/7,1)
v.iR(new A.D(u+Math.sin(r*2.1)*q*1.4,t+(q*2.4-q*q*6.5),s+(1+q*2.5)),0.2,e,3,6,0.9)}},
$S:1804}
A.foP.prototype={
$1(d){return this.a.e.h(0,d.a)!=null},
$S:z+24}
A.cgl.prototype={
$1(d){return d.a===this.a},
$S:z+64}
A.cgm.prototype={
$1(d){return d.a===this.a},
$S:z+2}
A.cgi.prototype={
$1(d){return this.a.uQ(0,d).c.toLowerCase()},
$S:14}
A.cgn.prototype={
$1(d){var w
if(!this.a.e.t(0,d.a)){w=d.b
w=w==="valve"||D.a.a0(w,"hose")}else w=!1
return w},
$S:z+2}
A.cgo.prototype={
$1(d){var w=this.a,v=d.a
return w.e.t(0,v)&&w.beq(v)>0},
$S:z+2}
A.cgp.prototype={
$1(d){return d.a},
$S:z+27}
A.cgq.prototype={
$1(d){return d.a},
$S:z+27}
A.cgj.prototype={
$1(d){return this.a.e.t(0,d.a)},
$S:z+2}
A.cgk.prototype={
$1(d){var w=this.a,v=d.a
return w.beq(v)<=0||!w.e.t(0,v)},
$S:z+2}
A.fnk.prototype={
$1(d){var w=this.a
w.b=0
w.e5(new A.D(d,8,0),new A.D(d,8,1.6),0.5,B.K9,0.7,10)},
$S:6}
A.fni.prototype={
$1(d){var w,v,u,t,s,r,q=C.a([],x.o)
for(w=d.length,v=this.a,u=v.a,t=v.b,v=v.c,s=0;s<d.length;d.length===w||(0,C.L)(d),++s){r=d[s]
q.push(new A.D(r.a+u,r.b+t,r.c+v))}return q},
$S:z+58}
A.fnc.prototype={
$3$r(d,e,f){var w=this.a,v=this.b.c
v===$&&C.c()
w.b=9100+D.d.bd(v.c,new A.fnf(d))
w.d=0.32
w.aHi(e,f,D.b1,!1,!0,0,8)
w.d=1},
$2(d,e){return this.$3$r(d,e,1.2)},
$S:z+59}
A.fnf.prototype={
$1(d){return d.a===this.a},
$S:z+2}
A.fnd.prototype={
$3(d,e,f){var w=this.a,v=this.b.c
v===$&&C.c()
w.b=9100+D.d.bd(v.c,new A.fne(d))
w.d=0.32
w.bH(e,f,D.b1)
w.d=1},
$S:z+60}
A.fne.prototype={
$1(d){return d.a===this.a},
$S:z+2}
A.fnj.prototype={
$3(d,e,f){var w,v,u,t=this,s=t.a,r=s.c
r===$&&C.c()
w=D.d.cJ(r.c,d)
r=d.c
v=s.e
u=d.a
if(v.t(0,u))s="Fitted."
else{s=s.b?"":d.e
s="A spot for the "+r.toLowerCase()+". "+s}t.b.n(0,9100+w,new A.d1(r,s,e,26))
if(t.c&&!v.t(0,u)&&t.d.length!==0)t.e.push(new A.nc(e.ad(0,B.fzp),f,D.fb))},
$S:z+61}
A.fn9.prototype={
$0(){return this.a.$3(this.b.a,new A.D(this.c-10,9,2.4),B.a7T)},
$S:0}
A.fna.prototype={
$0(){return this.a.$3(this.b.a,new A.D(this.c-8,9,2.4),B.a7T)},
$S:0}
A.fnb.prototype={
$0(){return this.a.$3(this.b.a,new A.D(this.c+8,9,2.4),B.a7T)},
$S:0}
A.fng.prototype={
$4(d,e,f,g){var w,v,u,t,s=this
if(D.d.bd(s.a,new A.fnh(d))<0||!s.b.e.t(0,d))return
w=s.b.f.h(0,d)
v=(w==null?0:w)>=1
w=s.c
u=9260+g
w.b=u
t=v?e:e.ad(0,f.aF(0,1.7))
w.e5(t.aC(0,f.aF(0,0.6)),t.ad(0,f.aF(0,0.6)),1.12,B.pm,0.35,8)
w.yY(t.aC(0,f.aF(0,0.62)),t.aC(0,f.aF(0,0.5)),1.2,0.5,B.VD,0.2,8)
w=v?"Tight.":"Loose. Tap it with the wrench to tighten it."
s.d.n(0,u,new A.d1("Slip nut",w,e,10))},
$S:z+62}
A.fnh.prototype={
$1(d){return d.a===this.a},
$S:z+2}
A.fDa.prototype={
$1(d){var w,v=this
A:{if("vhot"===d||"hhot"===d){w=new A.D(v.a-8,9,2)
break A}if("vcold"===d||"hcold"===d){w=new A.D(v.a+8,9,2)
break A}if("tvalve"===d||"those"===d){w=new A.D(v.b-10,9,2)
break A}if("bolts"===d){w=new A.D(v.b,2,17)
break A}if("faucet"===d){w=new A.D(v.a,30,8)
break A}if("tail"===d){w=new A.D(v.a,22,8)
break A}if("trap"===d){w=new A.D(v.a,24.7,8)
break A}w=new A.D(v.a+8.9,23.6,8)
break A}return w},
$S:z+63}
A.fD9.prototype={
$1(d){return d.a===this.a},
$S:z+2}
A.egu.prototype={
$0(){var w=this.a
w.z=this.b
w.Q=this.c},
$S:0}
A.egv.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new A.egt(w))},
$S:0}
A.egt.prototype={
$0(){return this.a.z=null},
$S:0}
A.egn.prototype={
$0(){return this.a.y=0},
$S:0}
A.egw.prototype={
$1(d){return d.a===this.a},
$S:z+2}
A.egf.prototype={
$0(){return this.a.y=this.b},
$S:0}
A.egg.prototype={
$0(){var w=this.a
w.acN()
w.y=this.b},
$S:0}
A.egh.prototype={
$1(d){return this.a.c3x()},
$S:8}
A.egm.prototype={
$1(d){var w,v=null,u=this.a,t=u.e
t===$&&C.c()
w=t.c
w===$&&C.c()
t=C.d("The "+w.b.toLowerCase()+" is finished and nothing leaks.\n\nMistakes: "+t.w+"\n\nThe next job is different.",v,v,v,v,v,v,B.a6R,v,v,v)
return C.ej(C.a([C.bK(!1,B.aQn,v,v,!0,v,v,new A.egk(d),v,v),C.bJ(B.fh5,new A.egl(u,d),v)],x.p),v,v,E.mY,t,v,v,v,v,B.fiJ,v)},
$S:19}
A.egk.prototype={
$0(){C.a6(this.a,!1).O(null)
return null},
$S:0}
A.egl.prototype={
$0(){C.a6(this.b,!1).O(null)
this.a.aWf()},
$S:0}
A.egs.prototype={
$0(){var w,v,u=this.a
u.d=D.o.F(Date.now(),1e5)
w=u.gCl(0)
v=u.e
v===$&&C.c()
u.e=A.fQZ(v.b,w,null)
u.x=""
u.as=!1
u.z=null
u.y=0
u.acN()},
$S:0}
A.egj.prototype={
$0(){var w=this.a
return w.m(new A.egi(w,this.b,this.c))},
$S:0}
A.egi.prototype={
$0(){var w=this.a
w.x=this.b?"":this.c
w.acN()},
$S:0}
A.egx.prototype={
$1(d){var w=this.a.e
w===$&&C.c()
return w.e.t(0,d.a)},
$S:z+2}
A.egB.prototype={
$0(){return this.a.bYQ(this.b)},
$S:0}
A.egz.prototype={
$1(d){return d<=5},
$S:32}
A.egy.prototype={
$1(d){var w=this.a,v=w.e
v===$&&C.c()
return A.i3p(v,w.w.gpt()/1000)},
$S:z+7}
A.egA.prototype={
$0(){return this.b.ct9(this.a.a)},
$S:0}
A.egr.prototype={
$1(d){var w,v,u,t,s,r,q,p=null,o=this.a,n=o.e
n===$&&C.c()
w=x.p
n=C.a([B.fu1,D.at,C.d("Mistakes "+n.w,p,p,p,p,p,p,B.ID,p,p,p),D.S],w)
v=o.e.c
v===$&&C.c()
v=v.c
u=v.length
t=0
for(;t<u;++t){s=v[t]
r=D.c.j(0.05)
q=new C.aW(12,12)
n.push(C.p(p,new C.x((o.e.e.t(0,s.a)?"\u2705":"\ud83d\udd27")+" "+s.c,p,B.eUe,p,p,p,p,p,p,p,p,p),D.f,p,p,new C.o(r,p,p,new C.bq(q,q,q,q),p,p,D.n),p,p,p,D.eO,D.bS,p,p,p))}n.push(D.an)
n.push(B.f93)
n.push(D.O)
n.push(C.A(C.a([B.bvd,C.auD(p,p,p,p,!1,D.y,p,p,p,p,p,p,new A.egp(o,d),p,p,p,p,p,p,p,p,o.e.b)],w),D.m,p,D.e,D.j,0,p,p))
n.push(C.bJ(B.aQp,new A.egq(o,d),p))
return C.bn(!0,C.cB(n,p,D.bV,p,p,D.ah,!0),!0,!1,D.af,!0,!0)},
$S:28}
A.egp.prototype={
$1(d){var w=this.a
w.m(new A.ego(w,d))
C.a6(this.b,!1).O(null)},
$S:9}
A.ego.prototype={
$0(){var w=this.a,v=w.e
v===$&&C.c()
v.b=this.b
w.acN()},
$S:0}
A.egq.prototype={
$0(){C.a6(this.b,!1).O(null)
this.a.aWf()},
$S:0}
A.fLq.prototype={
$1(d){return d.a===this.a},
$S:z+22}
A.clf.prototype={
$1(d){return d.b==="switch"},
$S:z+4}
A.clm.prototype={
$1(d){return!this.a.y.t(0,d)},
$S:32}
A.cln.prototype={
$1(d){var w=this.a
return w.x.ai(0,d)&&w.z.t(0,d)},
$S:32}
A.clo.prototype={
$1(d){var w=$.Gr()[this.b],v=!1
if(w>=d)if(w<=d+48){w=this.a.Q.h(0,d)
w=(w==null?null:w.a)===!0}else w=v
else w=v
return w},
$S:32}
A.clp.prototype={
$1(d){return this.a.Q.h(0,d).c.t(0,this.b)},
$S:32}
A.clr.prototype={
$1(d){var w,v=J.e3(6,x.S)
for(w=0;w<6;++w)v[w]=w
return D.d.da(v,new A.clq(this.a,d))},
$S:32}
A.clq.prototype={
$1(d){return this.a.c.t(0,this.b*10+d)},
$S:32}
A.cle.prototype={
$1(d){var w=this.a.Q.h(0,d)
return(w==null?null:w.a)===!0},
$S:32}
A.clc.prototype={
$1(d){return!A.l2(d).c},
$S:32}
A.cld.prototype={
$1(d){var w=this.a.aon(A.l2(d).d.a)
return(w==null?null:w.b.t(0,d))===!0},
$S:32}
A.clk.prototype={
$1(d){return d.c},
$S:z+6}
A.cll.prototype={
$1(d){return d.d},
$S:z+6}
A.clg.prototype={
$1(d){return d.d},
$S:z+6}
A.clh.prototype={
$1(d){var w=this.a.Q.h(0,d)
return(w==null?null:w.e)===!0},
$S:32}
A.cli.prototype={
$1(d){return d.a===this.a},
$S:z+12}
A.cls.prototype={
$2(d,e){return e===this.a},
$S:455}
A.clj.prototype={
$1(d){return d.c===this.a},
$S:z+4}
A.ekR.prototype={
$0(){var w=this.a
w.ax=this.b
w.ay=this.c},
$S:0}
A.ekS.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new A.ekQ(w))},
$S:0}
A.ekQ.prototype={
$0(){return this.a.ax=null},
$S:0}
A.ek5.prototype={
$0(){return this.a.CW=!0},
$S:0}
A.ek6.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new A.ek4(w))},
$S:11}
A.ek4.prototype={
$0(){return this.a.CW=!1},
$S:0}
A.ek7.prototype={
$1(d){return this.a.bMr()},
$S:8}
A.ek8.prototype={
$1(d){return this.a.c3C()},
$S:8}
A.ekg.prototype={
$0(){return this.a.Q=-1},
$S:0}
A.ek9.prototype={
$0(){return this.a.Q=-1},
$S:0}
A.eky.prototype={
$0(){var w=this.a
w.Q=this.b
w.z=w.at=""
w.ch=!1},
$S:0}
A.ekh.prototype={
$0(){var w=this.a
w.Q=-1
w.at=""},
$S:0}
A.ekN.prototype={
$0(){return this.a.as=0},
$S:0}
A.ekO.prototype={
$0(){return this.a.z=""},
$S:0}
A.ekP.prototype={
$0(){return this.a.as=this.b},
$S:0}
A.ekL.prototype={
$0(){return this.a.z=""},
$S:0}
A.ekM.prototype={
$0(){return this.a.as=2000+this.b},
$S:0}
A.ekK.prototype={
$0(){return this.a.z=""},
$S:0}
A.ekG.prototype={
$1(d){return d.a===this.a},
$S:z+12}
A.ekH.prototype={
$0(){return this.a.as=5000+this.b*100+this.c},
$S:0}
A.ekI.prototype={
$0(){var w=this.a
w.at=""
w.as=0},
$S:0}
A.ekJ.prototype={
$0(){return this.a.as=5000+this.b*100+this.c},
$S:0}
A.ekT.prototype={
$0(){var w=this.b,v=D.d.t(B.GW,w.z),u=this.a.a
if(v)w.b_F(u)
else w.b_H(u)},
$S:0}
A.ekf.prototype={
$1(d){var w=null
return C.ej(C.a([C.bK(!1,B.fkE,w,w,!0,w,w,new A.ekd(d),w,w),C.bJ(D.IR,new A.eke(this.a,d),w)],x.p),w,w,E.mY,B.faa,w,w,w,w,B.fhv,w)},
$S:19}
A.ekd.prototype={
$0(){C.a6(this.a,!1).O(null)
return null},
$S:0}
A.eke.prototype={
$0(){C.a6(this.b,!1).O(null)
this.a.avJ(!0)},
$S:0}
A.ekc.prototype={
$1(d){var w,v=null,u=this.a,t=u.d
t===$&&C.c()
w=t.c
w===$&&C.c()
t=C.d("The "+w.toLowerCase()+" is built, wired, painted and tested.\n\nMistakes: "+t.f+"\nShocks: "+t.r+"\nLives left: "+t.e+"\n\nEvery job is a little different. Ready for another one?",v,v,v,v,v,v,B.a6R,v,v,v)
return C.ej(C.a([C.bK(!1,B.fuS,v,v,!0,v,v,new A.eka(d),v,v),C.bJ(B.fho,new A.ekb(u,d),v)],x.p),v,v,E.mY,t,v,v,v,v,B.fp5,v)},
$S:19}
A.eka.prototype={
$0(){C.a6(this.a,!1).O(null)
return null},
$S:0}
A.ekb.prototype={
$0(){C.a6(this.b,!1).O(null)
this.a.aXm()},
$S:0}
A.eki.prototype={
$0(){var w,v,u
if(!this.b)this.a.e=D.o.F(Date.now(),1e5)
w=this.a
v=w.gCl(0)
u=w.d
u===$&&C.c()
w.d=A.fRo(null,null,u.b,v)
w.y=0
w.z=""
w.Q=-1
w.at=""
w.as=0
w.cx=!1
w.x.a9(0)
w.ax=null
w.r=A.Cr(w.d,new A.vV(w.z,w.Q,!1))},
$S:0}
A.ekw.prototype={
$1(d){return new C.K(d,new A.ekx(),d.$ti.k("K<ak.E,n>")).aI(0,", ")},
$S:1805}
A.ekx.prototype={
$1(d){return A.l2(d).b},
$S:73}
A.ekj.prototype={
$1(d){var w=this.a.d
w===$&&C.c()
return!w.x.ai(0,d.a)},
$S:z+4}
A.ekk.prototype={
$1(d){var w=this.a.d
w===$&&C.c()
return!w.z.t(0,d.a)},
$S:z+4}
A.ekl.prototype={
$1(d){var w=this.a.d
w===$&&C.c()
return!w.y.t(0,d)},
$S:32}
A.eko.prototype={
$1(d){return!d.a},
$S:z+6}
A.ekp.prototype={
$1(d){return d.b<3},
$S:z+6}
A.ekq.prototype={
$1(d){return!d.c},
$S:z+6}
A.ekr.prototype={
$1(d){return!d.d},
$S:z+6}
A.eks.prototype={
$1(d){return!d.c},
$S:z+6}
A.ekt.prototype={
$1(d){var w=this.a.d
w===$&&C.c()
w=w.at.h(0,d.a)
w=w==null?null:w.a
return w!==d.b},
$S:z+4}
A.eku.prototype={
$1(d){return d.a},
$S:z+68}
A.ekv.prototype={
$1(d){var w=this.a.d
w===$&&C.c()
w=w.at.h(0,d.a)
w=w==null?null:w.b.c
return(w==null?0:w)<2},
$S:z+4}
A.ekm.prototype={
$1(d){var w=d.b
if(w==="outlet"||w==="gfci"){w=this.a.d
w===$&&C.c()
w=w.at.h(0,d.a)
w=(w==null?null:w.c)!==!0}else w=!1
return w},
$S:z+4}
A.ekn.prototype={
$1(d){return d.b==="fan"},
$S:z+4}
A.el9.prototype={
$0(){return this.a.cch(this.b)},
$S:0}
A.elb.prototype={
$0(){var w=this.a
if(w.Q>=0)w.avI()
else{w.m(new A.ekY(w))
w.b1U()}},
$S:0}
A.ekY.prototype={
$0(){return this.a.as=0},
$S:0}
A.ela.prototype={
$1(d){var w=this.a,v=w.d
v===$&&C.c()
return A.i3E(v,w.w.gpt()/1000,w.x)},
$S:z+7}
A.el0.prototype={
$0(){var w=this.a,v=w.d
v===$&&C.c()
return w.kx(v.aHb())},
$S:0}
A.el1.prototype={
$0(){var w=this.a
return w.m(new A.el_(w,this.b))},
$S:0}
A.el_.prototype={
$0(){var w,v=this.b.b
v.f=!v.f
v=this.a
w=v.d
w===$&&C.c()
v.r=A.Cr(w,new A.vV(v.z,v.Q,!1))},
$S:0}
A.el2.prototype={
$0(){var w=this.a
return w.m(new A.ekZ(w,this.b))},
$S:0}
A.ekZ.prototype={
$0(){var w,v=this.b.b
v.e=!v.e
v=this.a
w=v.d
w===$&&C.c()
v.r=A.Cr(w,new A.vV(v.z,v.Q,!1))},
$S:0}
A.elc.prototype={
$0(){var w=this.a
return w.m(new A.ekX(w,this.b))},
$S:0}
A.ekX.prototype={
$0(){var w,v=this.a
v.y=this.b
v.z=""
w=v.d
w===$&&C.c()
v.r=A.Cr(w,new A.vV("",v.Q,!1))},
$S:0}
A.eld.prototype={
$0(){var w=this.a
return w.m(new A.ekW(w))},
$S:0}
A.ekW.prototype={
$0(){var w=this.a,v=w.d
v===$&&C.c()
v.aDE()
w.y=2
w.z=""
w.r=A.Cr(w.d,new A.vV("",w.Q,!1))
w.A7("The boxes, the cable and the walls are done. Now the wiring: pick an Outlet or a Switch from the tray, then tap its box on the wall.",!0)},
$S:0}
A.ele.prototype={
$0(){var w=this.a
return w.m(new A.ekV(w,this.b))},
$S:0}
A.ekV.prototype={
$0(){var w,v=this.a,u=this.b.a,t=v.z===u?"":u
v.z=t
v.as=0
w=v.d
w===$&&C.c()
v.r=A.Cr(w,new A.vV(t,v.Q,!1))
if(v.z.length!==0)v.cmZ(u)},
$S:0}
A.elf.prototype={
$0(){var w=this.a,v=w.d
v===$&&C.c()
return w.kx(v.cMv())},
$S:0}
A.elg.prototype={
$1(d){return!this.a.b.b.iS(0,d.a)},
$S:z+13}
A.elh.prototype={
$0(){var w=this.a
return w.m(new A.ekU(w,this.b,this.c))},
$S:0}
A.ekU.prototype={
$0(){var w,v=this,u=v.c,t=u.a
if(v.b.b.b.iS(0,t)){v.a.avK("That wire is already fastened. Tap the wire in the 3D view to take it off.")
return}w=v.a
if(w.at===t)t=""
w.at=t
if(t.length!==0)w.A7(u.b+": now tap the screw it belongs on, or press the matching button below.",!0)},
$S:0}
A.el3.prototype={
$1(d){return!this.a.b.b.ai(0,d.a)},
$S:z+12}
A.el4.prototype={
$0(){var w=this.a
return w.b_E(w.Q,this.b.a)},
$S:0}
A.el5.prototype={
$0(){var w=this.a,v=w.d
v===$&&C.c()
return w.kx(v.bfN(w.Q))},
$S:0}
A.el6.prototype={
$0(){var w=this.a,v=w.d
v===$&&C.c()
return w.kx(v.cQG(w.Q))},
$S:0}
A.el7.prototype={
$0(){var w=this.a,v=w.d
v===$&&C.c()
return w.kx(v.baD(w.Q))},
$S:0}
A.el8.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&C.c()
w=u.cRH(v.Q)
v.kx(w)
if(w.a)v.avI()},
$S:0}
A.ekF.prototype={
$1(d){return new C.e0(new A.ekE(this.a),null)},
$S:20}
A.ekE.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=C.aI(d,l,x.w).w,j=this.a,i=j.d
i===$&&C.c()
w=i.c
w===$&&C.c()
v=x.p
i=C.a([C.d("Job: "+w,l,l,l,l,l,l,D.ds,l,l,l),D.at,C.d("Mistakes "+i.f+" \xb7 Shocks "+i.r+" \xb7 Lives "+i.e,l,l,l,l,l,l,B.ID,l,l,l),D.S,B.flc,D.an],v)
w=j.d.d
w===$&&C.c()
u=0
for(;u<4;++u){t=w[u]
s=D.c.j(0.05)
r=new C.aW(12,12)
q=new C.aA(D.bF,1,D.q,-1)
p=t.a
o=j.d.at.h(0,p)
o=(o==null?l:o.b.c)===2?"\u2705":"\u2b1c"
n=t.b
if(n==="gfci")n="A GFCI outlet"
else if(n==="outlet")n="An outlet"
else if(n==="switch")n="A light switch"
else n=n==="light"?"A ceiling light":"A ceiling fan"
p=A.l2(p)
m=t.c
m=m!=null?", turned on by "+A.l2(m).b:""
i.push(C.p(l,new C.x(o+" "+n+" at "+p.b+m,l,D.rB,l,l,l,l,l,l,l,l,l),D.f,l,l,new C.o(s,l,new C.bP(q,q,q,q),new C.bq(r,r,r,r),l,l,D.n),l,l,l,D.eO,D.bS,l,l,l))}i.push(D.S)
i.push(C.A(C.a([B.bwe,C.auD(l,l,l,l,!1,D.y,l,l,l,l,l,l,new A.ekB(j,e),l,l,l,l,l,l,l,l,j.d.b)],v),D.m,l,D.e,D.j,0,l,l))
i.push(D.an)
i.push(C.A(C.a([C.E(C.dW(B.fbj,new A.ekC(j,d),l),1),D.ab,C.E(C.bJ(B.aQp,new A.ekD(j,d),l),1)],v),D.m,l,D.e,D.j,0,l,l))
return C.bn(!0,new C.cV(new C.aY(0,1/0,0,k.a.b*0.8),C.cB(i,l,D.bV,l,l,D.ah,!0),l),!0,!1,D.af,!0,!0)},
$S:84}
A.ekB.prototype={
$1(d){var w=this.a,v=w.d
v===$&&C.c()
v.b=d
for(v=v.at,v=new C.dt(v,v.r,v.e);v.C();)v.d.b.r=d
this.b.$1(new A.ekz())
w.m(new A.ekA())},
$S:9}
A.ekz.prototype={
$0(){},
$S:0}
A.ekA.prototype={
$0(){},
$S:0}
A.ekC.prototype={
$0(){C.a6(this.b,!1).O(null)
this.a.avJ(!0)},
$S:0}
A.ekD.prototype={
$0(){C.a6(this.b,!1).O(null)
this.a.aXm()},
$S:0}
A.fgG.prototype={
$1(d){var w=this.a,v=d.a
return w>v[0]&&w<v[1]},
$S:708}
A.fgH.prototype={
$1(d){var w=this.a,v=d.a
return w>v[2]&&w<v[3]},
$S:708}
A.fno.prototype={
$1(d){return 5000+this.a.a*100+d},
$S:76}
A.fnp.prototype={
$1(d){return 3000+this.a.a},
$S:76}
A.fnq.prototype={
$1(d){return 2000+this.a.a},
$S:76}
A.fnt.prototype={
$5$col$round(d,e,f,g,h){var w=this.a
w.f=3
w.b=d
w.d=0.5
w.e=0.9
if(h)w.h7(e.aC(0,B.fP),e.ad(0,B.fP),f.a/2,g,14)
else w.bH(e,f,g)
w.e=0
w.d=1
w.f=2},
$3(d,e,f){return this.$5$col$round(d,e,f,D.b1,!1)},
$4$round(d,e,f,g){return this.$5$col$round(d,e,f,D.b1,g)},
$4$col(d,e,f,g){return this.$5$col$round(d,e,f,g,!1)},
$S:z+69}
A.fnr.prototype={
$3(d,e,f){return H.aOY(d,e,0,f+this.a.a*5)},
$S:339}
A.fns.prototype={
$0(){var w,v=this.a
if(v.c)w="A place in the ceiling for a "+(v.e==="fan"?"fan (needs a fan-rated box)":"light")+"."
else w="A place on the wall at "+(v.e==="switch"?"switch height, about 48 inches from the floor":"outlet height, about 16 inches from the floor")+"."
return new A.d1(v.b,w,A.a1T(v,B.a7P),26)},
$S:z+70}
A.fDu.prototype={
$1(d){return d.e==="fan"},
$S:z+22}
A.fDv.prototype={
$1(d){return d.b==="light"},
$S:z+4}
A.coF.prototype={
$1(d){return d.a===this.a&&!d.c},
$S:z+9}
A.coB.prototype={
$1(d){return d.a===B.Z8},
$S:z+9}
A.coD.prototype={
$1(d){return d.c},
$S:z+9}
A.coE.prototype={
$1(d){return d.c},
$S:z+9}
A.coC.prototype={
$1(d){return B.vO.h(0,d.a).e===this.a&&!d.c},
$S:z+9}
A.emE.prototype={
$0(){var w=this.a
w.z=this.b
w.Q=this.c},
$S:0}
A.emF.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new A.emD(w))},
$S:0}
A.emD.prototype={
$0(){return this.a.z=null},
$S:0}
A.emt.prototype={
$0(){return this.a.y=0},
$S:0}
A.emy.prototype={
$0(){return this.a.as=!0},
$S:0}
A.emz.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new A.emx(w))},
$S:11}
A.emx.prototype={
$0(){return this.a.as=!1},
$S:0}
A.emA.prototype={
$0(){var w=this.a,v=w.d
v===$&&C.c()
w.r=A.afm(v.d)
w.y=this.b},
$S:0}
A.emB.prototype={
$1(d){return this.a.cco()},
$S:8}
A.emC.prototype={
$1(d){return this.a.c3J()},
$S:8}
A.emw.prototype={
$1(d){var w=null
return C.ej(C.a([C.bJ(B.fiE,new A.emv(this.a,d),w)],x.p),w,w,E.mY,B.fhL,w,w,w,w,B.fnQ,w)},
$S:19}
A.emv.prototype={
$0(){C.a6(this.b,!1).O(null)
this.a.av7()},
$S:0}
A.ems.prototype={
$1(d){var w=null,v=this.a,u=v.d
u===$&&C.c()
u=C.d("Every problem on the customer's list is fixed.\n\nMistakes: "+u.f+"\nShocks: "+u.r+"\nLives left: "+u.e+"\n\nThe next call will have different problems.",w,w,w,w,w,w,B.a6R,w,w,w)
return C.ej(C.a([C.bK(!1,B.aQn,w,w,!0,w,w,new A.emq(d),w,w),C.bJ(B.fjR,new A.emr(v,d),w)],x.p),w,w,E.mY,u,w,w,w,w,B.fqa,w)},
$S:19}
A.emq.prototype={
$0(){C.a6(this.a,!1).O(null)
return null},
$S:0}
A.emr.prototype={
$0(){C.a6(this.b,!1).O(null)
this.a.av7()},
$S:0}
A.emu.prototype={
$0(){var w,v,u=this.a
u.e=D.o.F(Date.now(),1e5)
w=u.gCl(0)
v=u.d
v===$&&C.c()
w=A.h7D(v.b,w)
u.d=w
u.r=A.afm(w.d)
u.at=!1
u.z=null
u.y=0},
$S:0}
A.emR.prototype={
$0(){return this.a.cwF(this.b)},
$S:0}
A.emN.prototype={
$1(d){return d<=5},
$S:32}
A.emM.prototype={
$1(d){var w=this.a,v=w.d
v===$&&C.c()
return A.hfY(v.d,w.w.gpt()/1000)},
$S:z+7}
A.emO.prototype={
$1(d){return!d.c},
$S:z+9}
A.emP.prototype={
$1(d){return B.vO.h(0,d.a).a},
$S:z+55}
A.emQ.prototype={
$0(){var w=this.a
return w.m(new A.emL(w,this.b))},
$S:0}
A.emL.prototype={
$0(){return this.a.x=this.b},
$S:0}
A.emK.prototype={
$1(d){return new C.e0(new A.emJ(this.a),null)},
$S:20}
A.emJ.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=this.a,j=k.d
j===$&&C.c()
w=x.p
j=C.a([B.fgc,D.at,C.d("Mistakes "+j.f+" \xb7 Shocks "+j.r+" \xb7 Lives "+j.e,l,l,l,l,l,l,B.ID,l,l,l),D.S],w)
v=k.d.c
v===$&&C.c()
u=v.length
t=0
for(;t<v.length;v.length===u||(0,C.L)(v),++t){s=v[t]
r=D.c.j(0.05)
q=new C.aW(14,14)
p=new C.aA(s.c?D.b4.j(0.6):D.bF,1,D.q,-1)
o=s.c?"\u2705":"\ud83d\udd27"
n=B.vO.h(0,s.a).a
m=s.c?D.az:D.c
j.push(C.p(l,new C.x(o+" "+n,l,new C.G(!0,m,l,l,l,l,13.5,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l),l,l,l,l,l,l,l,l,l),D.f,l,l,new C.o(r,l,new C.bP(p,p,p,p),new C.bq(q,q,q,q),l,l,D.n),l,l,l,D.cH,D.bj,l,l,l))}j.push(D.an)
j.push(B.flm)
j.push(D.O)
j.push(C.A(C.a([B.bvc,C.auD(l,l,l,l,!1,D.y,l,l,l,l,l,l,new A.emH(k,e),l,l,l,l,l,l,l,l,k.d.b)],w),D.m,l,D.e,D.j,0,l,l))
j.push(C.bJ(B.fof,new A.emI(k,d),l))
return C.bn(!0,C.cB(j,l,D.bV,l,l,D.ah,!0),!0,!1,D.af,!0,!0)},
$S:84}
A.emH.prototype={
$1(d){var w=this.a.d
w===$&&C.c()
w.b=d
this.b.$1(new A.emG())},
$S:9}
A.emG.prototype={
$0(){},
$S:0}
A.emI.prototype={
$0(){C.a6(this.b,!1).O(null)
this.a.av7()},
$S:0}
A.f9X.prototype={
$1(d){return d.d===this.a},
$S:z+15}
A.bPP.prototype={
$1(d){var w,v,u,t=this.a,s=t.fr,r=A.hk4(t,A.bzF(s==null?"tv100":s),0)
t=r.c
s=r.a/2
w=t-s-18
v=this.b
u=-v/2+14
if(w<u)w=t+s+18
w=D.k.D(w,u,v/2-14)
return new C.y(new C.y(w,d),Math.atan2(t-w,-d))},
$S:1807}
A.bPQ.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n
for(w=this.a,v=w.a,u=v.as,t=u.length,s=t-1,r=0,q=0;q<t;++q,r=o){p=u[q]
o=r+p
if(d<=o||q===s){n=p===0?0:D.k.D((d-r)/p,0,1)
v=w.a.b
u=v[q]
t=u.a
v=v[q+1]
u=u.b
return new C.y(t+(v.a-t)*n,u+(v.b-u)*n)}}w=v.b
w.toString
return D.d.gal(w)},
$S:1808};(function aliases(){var w=A.aLH.prototype
w.buW=w.q})();(function installTearOffs(){var w=a._instance_1u,v=a._instance_2u,u=a._instance_0u,t=a.installInstanceTearOff,s=a._instance_0i,r=a.installStaticTearOff
w(A.aRC.prototype,"gcM9","cMa",19)
var q
v(q=A.aCw.prototype,"gbJZ","bK_",32)
u(q,"gr2","j4",0)
t(q,"gc3h",0,1,null,["$2$keepTour","$1"],["avF","DM"],31,0,0)
w(q,"gc3k","c3l",5)
u(q,"gcyr","cys",14)
u(q,"gcu1","a1s",0)
u(q,"gb4B","ctF",0)
u(q,"gb4P","azG",0)
u(q,"gbPb","bPc",0)
u(q,"gcu0","ahv",0)
u(q,"gc3j","DN",14)
u(q,"gccb","a_9",14)
u(q,"gcbB","a_0",14)
u(q,"gaLh","bxS",14)
u(q,"gc3p","c3q",0)
u(q,"gck3","ck4",0)
s(q,"gc3m","c3n",0)
r(A,"i2j",3,null,["$3"],["i3h"],25,0)
r(A,"i2k",3,null,["$3"],["i3i"],25,0)
u(q=A.ayn.prototype,"gc3u","xs",0)
u(q,"gIp","nX",0)
w(q,"gIq","Ir",5)
u(q,"gch9","cha",0)
u(q,"gcw6","cw7",0)
u(q=A.aEi.prototype,"gIp","nX",0)
w(q,"gIq","Ir",5)
u(q,"gc3v","c3w",0)
u(q=A.ayC.prototype,"gIp","nX",0)
w(q,"gIq","Ir",5)
s(q,"gc3s","c3t",0)
u(q=A.azv.prototype,"gIp","nX",0)
w(q,"gIq","Ir",5)
u(q=A.aD0.prototype,"gc3y","aXk",0)
w(q,"gc3z","c3A",5)
w(A.b3K.prototype,"gaoo","bmz",65)
u(q=A.aD7.prototype,"gbNW","aRL",0)
u(q,"gbAn","bAo",0)
u(q,"gc3D","avI",0)
w(q,"gc3F","c3G",5)
u(q=A.aDb.prototype,"gc3K","aXo",0)
w(q,"gc3L","c3M",5)})();(function inheritance(){var w=a.mixinHard,v=a.inheritMany,u=a.inherit
v(C.aC,[A.D,A.mt,A.d1,A.nc,A.xB,A.IQ,A.iK,A.bPH,A.zV,A.b9v,A.b9Q,A.beR,A.dgF,A.LJ,A.dmc,A.daP,A.JX,A.bGW,A.EH,A.a8N,A.Hh,A.La,A.aRC,A.mj,A.XG,A.zO,A.a3C,A.BS,A.a43,A.hk,A.Dq,A.py,A.avN,A.o4,A.aTX,A.a46,A.aU1,A.bPR,A.Fl,A.jy,A.Mb,A.cgr,A.Ew,A.ng,A.Wa,A.cgh,A.yv,A.pL,A.WP,A.atY,A.aSp,A.eF,A.b3K,A.kY,A.vV,A.u4,A.LC,A.coA,A.a84,A.uA,A.a8O,A.qj,A.clb,A.zX,A.bpi,A.aU3,A.b7b])
v(C.hT,[A.bVB,A.bVC,A.bVA,A.bVD,A.bVE,A.fLB,A.fLz,A.fLA,A.fLy,A.fLr,A.bGr,A.bGq,A.cm9,A.cma,A.cm3,A.cm4,A.cm5,A.cm6,A.cm8,A.eSX,A.eSW,A.eST,A.eSU,A.eSV,A.eSR,A.bOv,A.bOr,A.bOz,A.bOu,A.bOC,A.bOA,A.bOE,A.bGX,A.bHx,A.bHu,A.bHv,A.bHw,A.bHy,A.bHz,A.dKo,A.dKj,A.dKD,A.dKm,A.dKG,A.foq,A.fLU,A.fox,A.foy,A.fov,A.fow,A.fot,A.fou,A.fmt,A.fmu,A.f9W,A.fmi,A.fLT,A.fLQ,A.bP8,A.bPJ,A.bPK,A.bPO,A.bPN,A.bPM,A.bPL,A.e2V,A.e2S,A.e2T,A.e2U,A.e1p,A.e11,A.e25,A.e24,A.e1Q,A.e1N,A.e2J,A.e2I,A.e2B,A.e2w,A.e2h,A.e2e,A.e2N,A.e2d,A.e1t,A.e1s,A.e1u,A.e26,A.e1B,A.e1C,A.e1w,A.e1x,A.e2O,A.e1z,A.e1y,A.e0v,A.e0p,A.e0q,A.e0r,A.e2Q,A.e0D,A.e0C,A.e0x,A.e1W,A.dmC,A.eX8,A.eX9,A.eXa,A.eX7,A.fmw,A.fmG,A.fmx,A.fmy,A.fmA,A.fmD,A.fmE,A.fmB,A.fgE,A.fgB,A.fgC,A.fgA,A.fpm,A.fpn,A.fpo,A.f7r,A.fhb,A.fgY,A.fgZ,A.fh_,A.fh0,A.fh3,A.fh4,A.fh5,A.fh6,A.fh7,A.fh8,A.fh9,A.fha,A.fh1,A.fh2,A.fmN,A.fmJ,A.fmM,A.fmL,A.dKH,A.fDZ,A.fDY,A.d2k,A.d2m,A.d2C,A.d2I,A.eMy,A.eMG,A.eMH,A.d5i,A.d5s,A.d5t,A.d5v,A.dcn,A.dcy,A.dcx,A.dcA,A.fnn,A.fnm,A.fnl,A.fmv,A.foP,A.cgl,A.cgm,A.cgi,A.cgn,A.cgo,A.cgp,A.cgq,A.cgj,A.cgk,A.fnk,A.fni,A.fnc,A.fnf,A.fnd,A.fne,A.fnj,A.fng,A.fnh,A.fDa,A.fD9,A.egw,A.egh,A.egm,A.egx,A.egz,A.egy,A.egr,A.egp,A.fLq,A.clf,A.clm,A.cln,A.clo,A.clp,A.clr,A.clq,A.cle,A.clc,A.cld,A.clk,A.cll,A.clg,A.clh,A.cli,A.clj,A.ek7,A.ek8,A.ekG,A.ekf,A.ekc,A.ekw,A.ekx,A.ekj,A.ekk,A.ekl,A.eko,A.ekp,A.ekq,A.ekr,A.eks,A.ekt,A.eku,A.ekv,A.ekm,A.ekn,A.ela,A.elg,A.el3,A.ekF,A.ekB,A.fgG,A.fgH,A.fno,A.fnp,A.fnq,A.fnt,A.fnr,A.fDu,A.fDv,A.coF,A.coB,A.coD,A.coE,A.coC,A.emB,A.emC,A.emw,A.ems,A.emN,A.emM,A.emO,A.emP,A.emK,A.emH,A.f9X,A.bPP,A.bPQ])
v(C.kg,[A.bVz,A.cm2,A.cm7,A.bOs,A.bOx,A.bOw,A.fpz,A.fpA,A.fpB,A.fpC,A.fpD,A.f8C,A.fLR,A.fLS,A.e23,A.e2H,A.e2v,A.e1G,A.fmI,A.fmz,A.fmC,A.fmH,A.fgD,A.fmK,A.d2n,A.eMD,A.d5h,A.foQ,A.cls,A.ekE,A.emJ])
u(A.AG,C.oH)
v(C.mJ,[A.b3X,A.bcU,A.bgs])
v(C.ag,[A.atv,A.a5Y,A.N7,A.aGJ,A.MP,A.GZ,A.a8t,A.a3T,A.azu,A.Va,A.Vd,A.aq3])
v(C.ah,[A.aLH,A.bi_,A.aCw,A.bqV,A.bi0,A.ayn,A.aEi,A.ayC,A.azv,A.aD0,A.aD7,A.aDb])
u(A.bp6,A.aLH)
v(C.j4,[A.eSS,A.bOD,A.bOy,A.bOt,A.bOB,A.dKn,A.dKA,A.dKu,A.dKv,A.dKt,A.dKk,A.dKE,A.dKC,A.dKB,A.dKi,A.dKp,A.dKq,A.dKr,A.dKs,A.dKl,A.dKx,A.dKy,A.dKz,A.dKw,A.dKF,A.fmj,A.e29,A.e2a,A.e28,A.e2b,A.e1r,A.e2m,A.e1H,A.e1I,A.e1J,A.e1K,A.e1n,A.e1m,A.e1o,A.e1k,A.e1l,A.e1j,A.e12,A.e2_,A.e1Z,A.e20,A.e21,A.e22,A.e1O,A.e1M,A.e1P,A.e1L,A.e2A,A.e2z,A.e2C,A.e2D,A.e2E,A.e2F,A.e2G,A.e2r,A.e2p,A.e2q,A.e2s,A.e2o,A.e2t,A.e2u,A.e2g,A.e2i,A.e2x,A.e2n,A.e2l,A.e2f,A.e2k,A.e2K,A.e2L,A.e2M,A.e1q,A.e2c,A.e27,A.e2j,A.e1D,A.e1E,A.e1A,A.e1F,A.e0u,A.e0s,A.e1v,A.e2y,A.e1X,A.e1Y,A.e0t,A.e18,A.e19,A.e1a,A.e1b,A.e1c,A.e1d,A.e17,A.e1e,A.e16,A.e1f,A.e15,A.e1g,A.e14,A.e1h,A.e13,A.e1i,A.e2R,A.e2P,A.e0W,A.e0X,A.e0Y,A.e0Z,A.e1_,A.e10,A.e0V,A.e0M,A.e0E,A.e0N,A.e0B,A.e0O,A.e0P,A.e0A,A.e0Q,A.e0R,A.e0S,A.e0z,A.e0T,A.e0y,A.e0U,A.e0F,A.e0G,A.e0H,A.e0I,A.e0J,A.e0K,A.e0L,A.e0w,A.e1T,A.e1U,A.e1S,A.e1V,A.e1R,A.eX6,A.eX5,A.cai,A.fmF,A.fnH,A.dKK,A.dKL,A.dKJ,A.dKM,A.dKI,A.dKP,A.dKQ,A.dKR,A.dKS,A.dKT,A.dKU,A.dKV,A.dKW,A.dKN,A.dKO,A.cpO,A.cpP,A.bRW,A.d2s,A.d2t,A.d2r,A.d2l,A.d2o,A.d2p,A.d2q,A.d2u,A.d2F,A.d2D,A.d2B,A.d2E,A.d2A,A.d2G,A.d2H,A.d2J,A.d2z,A.d2K,A.d2y,A.d2L,A.d2x,A.d2M,A.d2w,A.d2N,A.d2v,A.eMB,A.eMC,A.eMA,A.eMu,A.eMv,A.eMw,A.eMx,A.eMz,A.eMK,A.eMI,A.eMF,A.eMJ,A.eME,A.d5n,A.d5o,A.d5m,A.d5f,A.d5j,A.d5k,A.d5l,A.d5g,A.d5y,A.d5u,A.d5r,A.d5w,A.d5q,A.d5x,A.d5p,A.dcs,A.dct,A.dcr,A.dcm,A.dco,A.dcp,A.dcq,A.dcB,A.dcw,A.dcz,A.dcv,A.dcu,A.c5B,A.fn9,A.fna,A.fnb,A.egu,A.egv,A.egt,A.egn,A.egf,A.egg,A.egk,A.egl,A.egs,A.egj,A.egi,A.egB,A.egA,A.ego,A.egq,A.ekR,A.ekS,A.ekQ,A.ek5,A.ek6,A.ek4,A.ekg,A.ek9,A.eky,A.ekh,A.ekN,A.ekO,A.ekP,A.ekL,A.ekM,A.ekK,A.ekH,A.ekI,A.ekJ,A.ekT,A.ekd,A.eke,A.eka,A.ekb,A.eki,A.el9,A.elb,A.ekY,A.el0,A.el1,A.el_,A.el2,A.ekZ,A.elc,A.ekX,A.eld,A.ekW,A.ele,A.ekV,A.elf,A.elh,A.ekU,A.el4,A.el5,A.el6,A.el7,A.el8,A.ekz,A.ekA,A.ekC,A.ekD,A.fns,A.emE,A.emF,A.emD,A.emt,A.emy,A.emz,A.emx,A.emA,A.emv,A.emq,A.emr,A.emu,A.emR,A.emQ,A.emL,A.emG,A.emI])
v(C.au,[A.abx,A.bh3,A.b5e,A.B0,A.a5Z])
u(A.qY,C.m6)
w(A.aLH,C.c9)})()
C.jU(b.typeUniverse,JSON.parse('{"atv":{"ag":[],"r":[]},"AG":{"aB":[]},"b3X":{"aB":[]},"bp6":{"ah":["atv"]},"a5Y":{"ag":[],"r":[]},"bi_":{"ah":["a5Y"]},"abx":{"au":[],"r":[]},"bcU":{"aB":[]},"N7":{"ag":[],"r":[]},"aGJ":{"ag":[],"r":[]},"aCw":{"ah":["N7"]},"bh3":{"au":[],"r":[]},"bgs":{"aB":[]},"bqV":{"ah":["aGJ"]},"GZ":{"ag":[],"r":[]},"a8t":{"ag":[],"r":[]},"a3T":{"ag":[],"r":[]},"azu":{"ag":[],"r":[]},"MP":{"ag":[],"r":[]},"bi0":{"ah":["MP"]},"b5e":{"au":[],"r":[]},"B0":{"au":[],"r":[]},"ayn":{"ah":["GZ"]},"aEi":{"ah":["a8t"]},"ayC":{"ah":["a3T"]},"azv":{"ah":["azu"]},"a5Z":{"au":[],"r":[]},"Va":{"ag":[],"r":[]},"aD0":{"ah":["Va"]},"Vd":{"ag":[],"r":[]},"aD7":{"ah":["Vd"]},"aq3":{"ag":[],"r":[]},"aDb":{"ah":["aq3"]}}'))
var y={g:"A shut-off valve goes on the pipe that comes out of the wall.",x:"Fasten the bare copper ground to the GREEN screw.",b:"Move it with the arrow buttons, turn it, change its colour or take it out.",s:"Pick a paint colour above to change this wall.",E:"Switch the power on and flip the wall switch.",j:"The bare copper ground wire only goes on the GREEN screw.",u:"The gold screws are BRASS. They are for the HOT wire (black).",o:"The white-silver screws are NICKEL. They are for the NEUTRAL wire (white).",k:"There is no medicine left. Buy some in the shop.",r:"Turn the breaker OFF and test that the wires are dead."}
var x=(function rtii(){var w=C.ax
return{e:w("lT<w?>"),l:w("bm<n,n>"),J:w("bm<n,N>"),M:w("eK<n>"),m:w("aSp"),eP:w("qY"),gN:w("Hb"),fa:w("ay<LU?>"),fC:w("Hh"),gQ:w("O<La>"),V:w("O<ac>"),O:w("O<w>"),gw:w("O<LC>"),dh:w("O<Hb>"),_:w("O<a43>"),D:w("O<o4>"),cX:w("O<aTX>"),A:w("O<a46>"),ha:w("O<Hh>"),r:w("O<mj>"),E:w("O<nc>"),Z:w("O<jy>"),gL:w("O<ai<H>>"),ez:w("O<a4<n,aC>>"),f4:w("O<a4<n,cf>>"),T:w("O<qj>"),dN:w("O<u>"),B:w("O<pL>"),F:w("O<ng>"),v:w("O<hn>"),z:w("O<mt>"),a6:w("O<+(a7T,H)>"),L:w("O<+(n,n)>"),f:w("O<+(N,N)>"),ek:w("O<+(H,n)>"),al:w("O<+(H,N,R)>"),gp:w("O<+(H,H,ai<u>)>"),X:w("O<+(H,H,H)>"),U:w("O<+(N,N,N,N)>"),az:w("O<+(H,H,N,R,n)>"),y:w("O<a8N>"),I:w("O<a8O>"),h:w("O<IQ>"),gD:w("O<WP>"),s:w("O<n>"),o:w("O<D>"),p:w("O<r>"),K:w("O<zO>"),fJ:w("O<b9v>"),bl:w("O<zV>"),a:w("O<zX>"),b:w("O<kY>"),fG:w("O<bpi>"),W:w("O<JX>"),u:w("O<R>"),n:w("O<N>"),t:w("O<H>"),dS:w("O<aB?>"),k:w("O<cf>"),eF:w("cs<ah<ag>>"),dg:w("ai<N>"),j:w("ai<@>"),c:w("a4<n,@>"),G:w("a4<@,@>"),w:w("iz"),P:w("cq"),q:w("d1"),aU:w("aC"),dx:w("u"),ej:w("IA"),fX:w("mt"),aB:w("+(N,N)"),c5:w("dx<H>"),cH:w("atY"),N:w("n"),e7:w("bo<N>"),Q:w("D"),ac:w("cx<H>"),fZ:w("a2<Ew>"),cc:w("a2<n>"),dD:w("a2<H>"),bB:w("b9Q"),c9:w("beR"),R:w("R"),i:w("N"),C:w("@"),S:w("H"),d:w("LJ?"),eT:w("LU?"),g:w("ai<@>?"),dy:w("a4<n,@>?"),Y:w("a4<@,@>?"),cU:w("pO?"),x:w("cf"),H:w("~")}})();(function constants(){var w=a.makeConstList
B.aUd=new A.eF(!0,"The water is on and nothing leaks. Perfect job!",!1,"")
B.aUe=new A.eF(!0,"Primer and paint rolled on.",!1,"")
B.aUf=new A.eF(!1,"This call is over. Start a new one.",!1,"")
B.aUg=new A.eF(!1,"That is not a place for a sheet.",!1,"")
B.aUh=new A.eF(!0,"Sanded smooth. Wear a mask: the dust is bad to breathe.",!1,"")
B.a8P=new A.eF(!1,"There is no device here.",!1,"")
B.aUi=new A.eF(!0,"You look closely. Everything looks fine here.",!1,"")
B.aUj=new A.eF(!1,"ZAP! You were shocked badly and it was your last life. Always turn the breaker OFF and test before you touch wires.",!0,"shock")
B.aUk=new A.eF(!0,"Paper tape pressed into the seam.",!1,"")
B.aUl=new A.eF(!0,"Unplugged.",!1,"")
B.aUm=new A.eF(!0,"Breaker OFF. It is safe to work on the wires.",!1,"")
B.aUn=new A.eF(!1,"ZAP! You were shocked badly. That was your last life: the job is over. Lesson: ALWAYS turn the breaker OFF and test the wires before you touch them.",!0,"shock")
B.aUo=new A.eF(!1,"There is nothing there.",!1,"")
B.aUp=new A.eF(!1,"The outlet is burnt. Nothing works. Pull it out and put in a new one.",!0,"")
B.aUq=new A.eF(!0,"The water is on and nothing leaks yet, but the job is not finished.",!1,"")
B.aUr=new A.eF(!0,"Sheet hung. Now screw it to the studs.",!1,"")
B.aUs=new A.eF(!0,"Hole drilled through the middle of the stud, at the cable height. Holes go in the center so a nail cannot reach the cable.",!1,"")
B.aUt=new A.eF(!0,"Plugged in. Nothing happens because the breaker is off. Turn it on to test.",!1,"")
B.aUu=new A.eF(!0,"You flipped the tripped breaker fully OFF. Fix the problem before you turn it on again.",!1,"")
B.aUv=new A.eF(!0,"Click.",!1,"")
B.aUw=new A.eF(!0,"The wires are folded back and the device is in the box. Now put the cover on.",!1,"")
B.aUx=new A.eF(!0,"Breaker OFF. The wires on this circuit are dead now. (Always test them to be sure.)",!1,"")
B.aUy=new A.eF(!1,"Nothing is wet.",!1,"")
B.aUz=new A.eF(!0,"Power is on.",!1,"")
B.aUA=new A.eF(!0,"Water OFF at the main valve. You can cut into the pipes safely now.",!1,"")
B.aUB=new A.eF(!0,"Opening cut around the box with the drywall saw. Keep it tight: the plate has to cover the edge.",!1,"")
B.aUC=new A.eF(!0,"Device pulled out of the box.",!1,"")
B.aUD=new A.eF(!0,"Screw set just below the paper, not through it.",!1,"")
B.aUE=new A.eF(!1,"ZAP! You touched a live wire. In Learn mode you are not hurt, but in real life this can kill. Switch the breaker OFF and test the wires first.",!0,"shock")
B.aUF=new A.eF(!0,"Cover on. Now you can turn the breaker on and test.",!1,"")
B.Uu=new A.eF(!1,"",!1,"")
B.aUG=new A.eF(!0,"Device taken out. You can put it somewhere else, or put in a new one.",!1,"")
B.aUH=new A.eF(!0,"Breaker back ON.",!1,"")
B.aUI=new A.eF(!1,"That is not a stud.",!1,"")
B.aUJ=new A.eF(!0,"Off.",!1,"")
B.aUK=new A.eF(!1,"Nothing to flip yet.",!1,"")
B.aUL=new A.eF(!0,"Wire taken off.",!1,"")
B.aUM=new A.eF(!0,"The mud is dry.",!1,"")
B.aUN=new A.eF(!0,"Breaker reset.",!1,"")
B.aUO=new A.eF(!0,"Box mounted. (Careful: this is not a fan-rated box. A fan on it could fall.)",!1,"")
B.fpG=new C.x("Tap a piece of furniture, or add one:",null,N.SU,null,null,null,null,null,null,null,null,null)
B.e4P=new C.C(D.n3,B.fpG,null)
B.aUV=new C.bH(D.a3,null,null,B.e4P,null)
B.Ej=new C.w(1,0.08627450980392157,0.10588235294117647,0.1411764705882353,D.t)
B.aXP=new C.bP(D.Y,D.Y,A0.uJ,D.Y)
B.b_g=new C.o(B.Ej,null,B.aXP,null,null,null,D.n)
B.fqh=new C.x("\u2600\ufe0f Let it dry",null,I.zm,null,null,null,null,null,null,null,null,null)
B.b3j=new C.cr(D.A,null,null,B.fqh,null)
B.fq3=new C.x("\u23e9 Skip to the wiring",null,I.zm,null,null,null,null,null,null,null,null,null)
B.b3r=new C.cr(D.A,null,null,B.fq3,null)
B.feS=new C.x("\ud83c\udfd7\ufe0f",null,D.uv,null,null,null,null,null,null,null,null,null)
B.b3G=new C.cr(D.A,null,null,B.feS,null)
B.feH=new C.x("\ud83c\udfe0",null,D.aPk,null,null,null,null,null,null,null,null,null)
B.b45=new C.cr(D.A,null,null,B.feH,null)
B.b5p=new C.w(1,0.9294117647058824,0.9098039215686274,0.8627450980392157,D.t)
B.b5A=new C.w(1,0.9725490196078431,0.9647058823529412,0.9333333333333333,D.t)
B.wL=new C.w(1,0.5450980392156862,0.3686274509803922,0.20392156862745098,D.t)
B.ab7=new C.w(1,0.611764705882353,0.5568627450980392,0.4588235294117647,D.t)
B.aba=new C.w(1,0.24705882352941178,0.5607843137254902,0.30980392156862746,D.t)
B.wM=new C.w(1,0.9450980392156862,0.9450980392156862,0.9176470588235294,D.t)
B.b6f=new C.w(1,0.9098039215686274,0.9254901960784314,0.9372549019607843,D.t)
B.b6g=new C.w(1,0.4823529411764706,0.5098039215686274,0.5450980392156862,D.t)
B.b6n=new C.w(1,0.10588235294117647,0.4980392156862745,0.20392156862745098,D.t)
B.abn=new C.w(1,0.7215686274509804,0.7450980392156863,0.7725490196078432,D.t)
B.wN=new C.w(1,0.5450980392156862,0.3686274509803922,0.23529411764705882,D.t)
B.abp=new C.w(1,0.8509803921568627,0.8274509803921568,0.7725490196078432,D.t)
B.abt=new C.w(1,0.6549019607843137,0.6784313725490196,0.7098039215686275,D.t)
B.iL=new C.w(1,0.16862745098039217,0.17647058823529413,0.2,D.t)
B.b6T=new C.w(1,0.13333333333333333,0.13725490196078433,0.14901960784313725,D.t)
B.DT=new C.w(1,0.8980392156862745,0.7529411764705882,0.4823529411764706,D.t)
B.K9=new C.w(1,0.8156862745098039,0.5098039215686274,0.27450980392156865,D.t)
B.Vt=new C.w(1,0.5411764705882353,0.41568627450980394,0.2784313725490196,D.t)
B.abA=new C.w(1,0.1843137254901961,0.4196078431372549,0.23529411764705882,D.t)
B.abG=new C.w(1,0.2980392156862745,0.5450980392156862,0.2901960784313726,D.t)
B.rY=new C.w(1,0.788235294117647,0.6274509803921569,0.22745098039215686,D.t)
B.Vx=new C.w(1,0.9137254901960784,0.9372549019607843,0.9490196078431372,D.t)
B.abH=new C.w(1,0.9411764705882353,0.5411764705882353,0.1411764705882353,D.t)
B.abJ=new C.w(1,0.9921568627450981,0.9882352941176471,0.9686274509803922,D.t)
B.abL=new C.w(1,0.5568627450980392,0.5843137254901961,0.6196078431372549,D.t)
B.b7T=new C.w(1,0.47843137254901963,0.35294117647058826,0.22745098039215686,D.t)
B.b84=new C.w(1,0.8509803921568627,0.8941176470588236,0.9098039215686274,D.t)
B.kD=new C.w(1,0.788235294117647,0.807843137254902,0.8392156862745098,D.t)
B.abR=new C.w(1,0.4196078431372549,0.45098039215686275,0.5019607843137255,D.t)
B.abS=new C.w(1,0.5568627450980392,0.35294117647058826,0.2901960784313726,D.t)
B.A8=new C.w(1,0.9294117647058824,0.9176470588235294,0.8784313725490196,D.t)
B.b8J=new C.w(1,0.22745098039215686,0.22745098039215686,0.24705882352941178,D.t)
B.b8M=new C.w(1,0.9450980392156862,0.8901960784313725,0.7764705882352941,D.t)
B.b8Q=new C.w(1,0.5490196078431373,0.5764705882352941,0.6078431372549019,D.t)
B.E1=new C.w(1,0.22745098039215686,0.24705882352941178,0.2784313725490196,D.t)
B.VD=new C.w(1,0.8980392156862745,0.8980392156862745,0.8666666666666667,D.t)
B.Kj=new C.w(1,0.10588235294117647,0.11372549019607843,0.13333333333333333,D.t)
B.VH=new C.w(1,0.30980392156862746,0.6588235294117647,0.3764705882352941,D.t)
B.ac5=new C.w(1,0.8509803921568627,0.803921568627451,0.7215686274509804,D.t)
B.Kl=new C.w(1,0.11764705882352941,0.11764705882352941,0.12549019607843137,D.t)
B.b9c=new C.w(1,0.8862745098039215,0.8745098039215686,0.8235294117647058,D.t)
B.b9g=new C.w(1,0.42745098039215684,0.2901960784313726,1,D.t)
B.b9u=new C.w(1,0.5411764705882353,0.4823529411764706,0.41568627450980394,D.t)
B.b9y=new C.w(1,0.34901960784313724,0.3176470588235294,0.29411764705882354,D.t)
B.b9A=new C.w(1,0.24705882352941178,0.6470588235294118,0.3568627450980392,D.t)
B.b9G=new C.w(1,0.8117647058823529,0.792156862745098,0.7411764705882353,D.t)
B.VM=new C.w(1,0.8117647058823529,0.8901960784313725,0.9176470588235294,D.t)
B.VN=new C.w(1,0.3333333333333333,0.396078431372549,0.4823529411764706,D.t)
B.VO=new C.w(1,0.5529411764705883,0.7843137254901961,1,D.t)
B.VR=new C.w(1,1,0.9019607843137255,0.5019607843137255,D.t)
B.ba5=new C.w(1,0.9490196078431372,0.7607843137254902,0.10588235294117647,D.t)
B.acq=new C.w(1,0.9490196078431372,0.9411764705882353,0.9019607843137255,D.t)
B.ban=new C.w(1,0.9686274509803922,0.9607843137254902,0.9333333333333333,D.t)
B.acu=new C.w(1,0.6823529411764706,0.6941176470588235,0.7372549019607844,D.t)
B.nH=new C.w(1,0.1843137254901961,0.49019607843137253,0.8823529411764706,D.t)
B.bav=new C.w(1,0.788235294117647,0.7176470588235294,0.6078431372549019,D.t)
B.VU=new C.w(1,0.8901960784313725,0.6627450980392157,0.10980392156862745,D.t)
B.E8=new C.w(1,0.7137254901960784,0.7372549019607844,0.7686274509803922,D.t)
B.baz=new C.w(1,0.8431372549019608,0.8509803921568627,0.8784313725490196,D.t)
B.baJ=new C.w(1,0.22745098039215686,0.49019607843137253,0.26666666666666666,D.t)
B.uT=new C.w(1,0.9019607843137255,0.8823529411764706,0.8352941176470589,D.t)
B.VY=new C.w(1,0.3686274509803922,0.17647058823529413,0.13725490196078433,D.t)
B.Ea=new C.w(1,0.09019607843137255,0.09411764705882353,0.10588235294117647,D.t)
B.Af=new C.w(1,0.9725490196078431,0.9725490196078431,0.9568627450980393,D.t)
B.acM=new C.w(1,0.9450980392156862,0.9568627450980393,0.9725490196078431,D.t)
B.bbi=new C.w(1,0.9019607843137255,0.9019607843137255,0.8784313725490196,D.t)
B.bbk=new C.w(1,0.8470588235294118,0.7686274509803922,0.6274509803921569,D.t)
B.W1=new C.w(1,0.8941176470588236,0.9058823529411765,0.9176470588235294,D.t)
B.m7=new C.w(1,0.7686274509803922,0.6039215686274509,0.3843137254901961,D.t)
B.ad_=new C.w(1,1,0.35294117647058826,0.12156862745098039,D.t)
B.ad0=new C.w(1,0.5411764705882353,0.5607843137254902,0.596078431372549,D.t)
B.bc5=new C.w(1,0.5411764705882353,0.29411764705882354,0.29411764705882354,D.t)
B.Kv=new C.w(1,0.9098039215686274,0.8509803921568627,0.7372549019607844,D.t)
B.t6=new C.w(1,1,0.9450980392156862,0.6588235294117647,D.t)
B.bcp=new C.w(1,0.5411764705882353,0.5411764705882353,0.5176470588235295,D.t)
B.bcr=new C.w(1,0.9647058823529412,0.9568627450980393,0.9254901960784314,D.t)
B.Ky=new C.w(1,0.47843137254901963,0.23137254901960785,0.1803921568627451,D.t)
B.adb=new C.w(1,0.7058823529411765,0.3254901960784314,0.3254901960784314,D.t)
B.bcF=new C.w(1,0.6078431372549019,0.6078431372549019,0.592156862745098,D.t)
B.Ak=new C.w(1,0.9568627450980393,0.9450980392156862,0.9176470588235294,D.t)
B.t8=new C.w(1,0.8862745098039215,0.23137254901960785,0.23137254901960785,D.t)
B.pm=new C.w(1,0.9490196078431372,0.9490196078431372,0.9254901960784314,D.t)
B.adf=new C.w(1,0.788235294117647,0.8117647058823529,0.8392156862745098,D.t)
B.bcU=new C.w(1,0.9294117647058824,0.9215686274509803,0.8941176470588236,D.t)
B.Wf=new C.w(1,0.8392156862745098,0.6823529411764706,0.4470588235294118,D.t)
B.adi=new C.w(1,0.9098039215686274,0.9098039215686274,0.9098039215686274,D.t)
B.El=new C.w(1,0.2901960784313726,0.2980392156862745,0.32941176470588235,D.t)
B.ado=new C.w(1,0.3686274509803922,0.43137254901960786,0.5176470588235295,D.t)
B.bdw=new C.w(1,0.20784313725490197,0.47843137254901963,0.26666666666666666,D.t)
B.bdz=new C.w(1,0.3568627450980392,0.10196078431372549,0.09019607843137255,D.t)
B.ads=new C.w(1,0.23137254901960785,0.1843137254901961,0.14901960784313725,D.t)
B.adt=new C.w(1,0.8509803921568627,0.788235294117647,0.6588235294117647,D.t)
B.m9=new C.w(1,0.9686274509803922,0.9568627450980393,0.9254901960784314,D.t)
B.bdM=new C.w(1,0.13333333333333333,0.1450980392156863,0.16862745098039217,D.t)
B.Wk=new C.w(1,0.4980392156862745,0.7215686274509804,1,D.t)
B.wZ=new C.w(1,0.16470588235294117,0.1450980392156863,0.13725490196078433,D.t)
B.bdS=new C.w(1,0.5411764705882353,0.23137254901960785,0.23137254901960785,D.t)
B.bdT=new C.w(1,0.9450980392156862,0.9294117647058824,0.8784313725490196,D.t)
B.KB=new C.w(1,0.796078431372549,0.8156862745098039,0.8392156862745098,D.t)
B.Wn=new C.w(1,0.8980392156862745,0.7254901960784313,0.11764705882352941,D.t)
B.bee=new C.w(1,0.7490196078431373,0.8901960784313725,1,D.t)
B.bep=new C.w(1,0.6039215686274509,0.4196078431372549,0.24705882352941178,D.t)
B.Wr=new C.w(1,0.10588235294117647,0.10588235294117647,0.11372549019607843,D.t)
B.Ws=new C.w(1,0.9529411764705882,0.9058823529411765,0.6313725490196078,D.t)
B.adN=new C.w(1,0.9176470588235294,0.8509803921568627,0.7215686274509804,D.t)
B.adO=new C.w(1,0.9490196078431372,0.9490196078431372,0.9333333333333333,D.t)
B.Eq=new C.w(1,0.043137254901960784,0.12156862745098039,0.29411764705882354,D.t)
B.beU=new C.w(1,0.6274509803921569,0.6509803921568628,0.6823529411764706,D.t)
B.bf4=new C.w(0,0.2196078431372549,0.7411764705882353,0.9725490196078431,D.t)
B.bfb=new C.w(1,0.8156862745098039,0.35294117647058826,0.22745098039215686,D.t)
B.bfh=new C.w(1,0.8509803921568627,0.788235294117647,0.6274509803921569,D.t)
B.Wx=new C.w(1,0.9490196078431372,0.9176470588235294,0.8274509803921568,D.t)
B.ae5=new C.w(1,0.10588235294117647,0.07058823529411765,0.03529411764705882,D.t)
B.bfx=new C.w(1,0.3607843137254902,0.7019607843137254,0.9098039215686274,D.t)
B.bfz=new C.w(1,0.24705882352941178,0.26666666666666666,0.3137254901960784,D.t)
B.bfI=new C.w(1,0.12549019607843137,0.13333333333333333,0.14901960784313725,D.t)
B.KL=new C.w(1,0.8862745098039215,0.27058823529411763,0.35294117647058826,D.t)
B.x3=new C.w(1,0.17254901960784313,0.4196078431372549,0.8392156862745098,D.t)
B.x4=new C.w(1,0.7607843137254902,0.4627450980392157,0.22745098039215686,D.t)
B.KO=new C.w(1,0.7254901960784313,0.7450980392156863,0.7764705882352941,D.t)
B.aed=new C.w(1,0.611764705882353,0.35294117647058826,0.27058823529411763,D.t)
B.bgm=new C.w(1,0.611764705882353,0.5882352941176471,0.5450980392156862,D.t)
B.aep=new C.w(1,0.9686274509803922,0.9490196078431372,0.9019607843137255,D.t)
B.bgL=new C.w(1,0.2,0.21176470588235294,0.23137254901960785,D.t)
B.bgQ=new C.w(1,0.7098039215686275,0.7333333333333333,0.7647058823529411,D.t)
B.bgS=new C.w(1,0.9294117647058824,0.9294117647058824,0.9098039215686274,D.t)
B.bgX=new C.w(1,0.9098039215686274,0.8941176470588236,0.8549019607843137,D.t)
B.WI=new C.w(1,0.9607843137254902,0.7568627450980392,0.29411764705882354,D.t)
B.aex=new C.w(1,0.7686274509803922,0.5411764705882353,0.11764705882352941,D.t)
B.bh4=new C.w(1,0.43529411764705883,0.7137254901960784,1,D.t)
B.bhf=new C.w(1,0.9137254901960784,0.8980392156862745,0.8549019607843137,D.t)
B.aeD=new C.w(1,0.18823529411764706,0.2,0.22745098039215686,D.t)
B.KU=new C.w(1,0.9372549019607843,0.9372549019607843,0.9176470588235294,D.t)
B.aeF=new C.w(0.6666666666666666,1,0.16470588235294117,0.10196078431372549,D.t)
B.bht=new C.w(1,0.9372549019607843,0.9137254901960784,0.8627450980392157,D.t)
B.bhw=new C.w(1,0.9294117647058824,0.9019607843137255,0.8156862745098039,D.t)
B.WN=new C.w(1,0.4196078431372549,0.24705882352941178,0.19215686274509805,D.t)
B.bhB=new C.w(1,0.12156862745098039,0.6392156862745098,0.2627450980392157,D.t)
B.bhD=new C.w(1,0.803921568627451,0.6274509803921569,0.2,D.t)
B.KX=new C.w(1,0.3607843137254902,0.7019607843137254,1,D.t)
B.aeR=new C.w(1,0.9568627450980393,0.9568627450980393,0.9411764705882353,D.t)
B.big=new C.w(1,0.8431372549019608,0.8,0.6588235294117647,D.t)
B.biR=new C.w(1,0.9019607843137255,0.8745098039215686,0.796078431372549,D.t)
B.biT=new C.w(1,0.30980392156862746,0.6588235294117647,1,D.t)
B.biZ=new C.w(1,1,0.6196078431372549,0.6196078431372549,D.t)
B.af2=new C.w(1,0.8431372549019608,0.16470588235294117,0.16470588235294117,D.t)
B.L1=new C.w(1,0.47843137254901963,0.30980392156862746,0.1568627450980392,D.t)
B.Av=new C.w(1,0.6901960784313725,0.5411764705882353,0.3568627450980392,D.t)
B.px=new C.w(1,0.6078431372549019,0.8274509803921568,0.9607843137254902,D.t)
B.bjs=new C.w(1,0.48627450980392156,0.2901960784313726,0.22745098039215686,D.t)
B.bjt=new C.w(1,0.23137254901960785,0.6078431372549019,1,D.t)
B.bjB=new C.w(1,0.8509803921568627,0.8235294117647058,0.7607843137254902,D.t)
B.bjD=new C.w(1,0.29411764705882354,0.29411764705882354,0.3137254901960784,D.t)
B.x8=new C.w(1,0.4196078431372549,0.2901960784313726,0.19607843137254902,D.t)
B.af8=new C.w(1,0.13333333333333333,0.14901960784313725,0.17254901960784313,D.t)
B.bjJ=new C.w(1,0.8117647058823529,0.788235294117647,0.7215686274509804,D.t)
B.bjS=new C.w(1,0.5450980392156862,0.4196078431372549,0.24705882352941178,D.t)
B.boT=new C.Q(10,16,10,14)
B.XN=new C.Q(11,9,11,9)
B.agJ=new C.Q(14,8,14,24)
B.btz=new C.Q(4,22,4,12)
B.btM=new C.Q(4,4,8,4)
B.btP=new C.Q(4,6,12,4)
B.bu8=new C.Q(6,6,0,0)
B.buH=new C.Q(9,0,9,0)
B.fve=new C.x("Practice mode (no explanations, real shocks)",null,D.Tj,null,null,null,null,null,null,null,null,null)
B.bvc=new C.bD(1,D.bi,B.fve,null)
B.fr1=new C.x("Practice mode (no hints, no labels)",null,D.Tj,null,null,null,null,null,null,null,null,null)
B.bvd=new C.bD(1,D.bi,B.fr1,null)
B.f8U=new C.x("\ud83c\udfd8 Community",null,L.rA,null,null,null,null,null,null,null,null,null)
B.b3d=new C.cr(D.A,null,null,B.f8U,null)
B.bvk=new C.bD(1,D.bi,B.b3d,null)
B.fj2=new C.x("Construction Lab",null,L.rA,null,null,null,null,null,null,null,null,null)
B.f8m=new C.x("Wire it. Plumb it. Fix a house.",null,D.hp,null,null,null,null,null,null,null,null,null)
B.cZA=w([B.fj2,B.f8m],x.p)
B.bkB=new C.fq(D.ah,D.e,D.j,D.F,null,D.p,null,0,B.cZA,null)
B.bvx=new C.bD(1,D.bi,B.bkB,null)
B.aOO=new C.G(!0,D.c,null,null,null,null,14,D.H,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fqT=new C.x("5 portions of food\n10 points",null,B.aOO,null,null,null,null,null,null,null,null,null)
B.bvC=new C.bD(1,D.bi,B.fqT,null)
B.fdL=new C.x("3 doses of medicine\n12 points",null,B.aOO,null,null,null,null,null,null,null,null,null)
B.bvQ=new C.bD(1,D.bi,B.fdL,null)
B.fqG=new C.x("Practice mode (no hints, real shocks and fires)",null,D.Tj,null,null,null,null,null,null,null,null,null)
B.bwe=new C.bD(1,D.bi,B.fqG,null)
B.bwY=new A.a3T(null,null)
B.Z6=new A.qY(0,"tripped")
B.Z7=new A.qY(1,"noHotWater")
B.Z8=new A.qY(10,"wallHole")
B.Z9=new A.qY(11,"clogged")
B.Mc=new A.qY(2,"nutLeak")
B.Md=new A.qY(3,"pexLeak")
B.Za=new A.qY(5,"flicker")
B.Zb=new A.qY(6,"burntOutlet")
B.Zc=new A.qY(7,"gfciTripped")
B.Zd=new A.qY(8,"runningToilet")
B.Ze=new A.qY(9,"dripFaucet")
B.byv=new A.o4(!1,"back",0,10)
B.byw=new A.o4(!1,"back",0,9)
B.byx=new A.o4(!1,"back",50,0)
B.byy=new A.o4(!1,"back",56,11)
B.byz=new A.o4(!1,"back",-50,10)
B.byA=new A.o4(!1,"left",40,9)
B.byB=new A.o4(!1,"right",40,10)
B.Zm=new A.o4(!1,"right",50,5)
B.aiM=new A.py("tv100",'Giant 100"',"\ud83d\udcfa",89,!1)
B.bAi=new C.a0(61419,"MaterialIcons",!1)
B.bAu=new C.a0(61888,"MaterialIcons",!1)
B.bBl=new C.a0(63015,"MaterialIcons",!1)
B.bBP=new C.a0(63228,"MaterialIcons",!1)
B.akM=new C.a0(983222,"MaterialIcons",!1)
B.all=new C.a0(983775,"MaterialIcons",!1)
B.alr=new C.a0(983894,"MaterialIcons",!1)
B.bGR=new C.ae(D.iU,null,null,null,null,null)
B.bOc=new C.ae(D.N9,null,null,null,null,null)
B.fz2=new A.D(0,26,182)
B.bQS=new A.nc(B.fz2,"\u2b07 Walk here to go out",D.f6)
B.fI4=new A.D(-80,52,66)
B.bQT=new A.nc(B.fI4,"\ud83c\udfe5 Walk here to admit the sick",D.fb)
B.fHC=new A.D(-0.4,4.2,-2.4)
B.bQU=new A.nc(B.fHC,"LIVE 120 V",D.bI)
B.fBQ=new A.D(64,62,120)
B.bQV=new A.nc(B.fBQ,"\ud83d\udc8a Medicine: walk here, 12 \u2b50 for 3",D.iR)
B.fI0=new A.D(-64,62,120)
B.bQW=new A.nc(B.fI0,"\ud83c\udf5e Food: walk here, 10 \u2b50 for 5",D.d8)
B.bh6=new C.w(1,0.2901960784313726,0.20392156862745098,0.0784313725490196,D.t)
B.beg=new C.w(1,0.12156862745098039,0.10196078431372549,0.07058823529411765,D.t)
B.b85=new C.w(1,0.16470588235294117,0.12156862745098039,0.07058823529411765,D.t)
B.d8L=w([B.bh6,B.beg,B.b85],x.O)
B.bSU=new C.a8(D.ax,D.aC,D.x,B.d8L,null,null)
B.biD=new C.w(1,0.12156862745098039,0.10196078431372549,0.1411764705882353,D.t)
B.db3=w([D.adQ,B.biD],x.O)
B.bTz=new C.a8(D.ax,D.aC,D.x,B.db3,null,null)
B.bgp=new C.w(1,0.0392156862745098,0.058823529411764705,0.1803921568627451,D.t)
B.biS=new C.w(1,0.1411764705882353,0.08235294117647059,0.3215686274509804,D.t)
B.cA3=w([E.act,B.bgp,B.biS],x.O)
B.bTI=new C.a8(D.b0,D.b6,D.x,B.cA3,null,null)
B.bjK=new C.w(1,0.07058823529411765,0.22745098039215686,0.47843137254901963,D.t)
B.cN6=w([B.Eq,B.bjK],x.O)
B.bV7=new C.a8(D.ax,D.aC,D.x,B.cN6,null,null)
B.bVK=w(["flange","wax","toilet","bolts","valve","hosehot","hosecold","faucet","tail","trap","arm"],x.s)
B.bVT=w([0,0,0,1],x.k)
B.c7C=w([G.my,K.RW,G.kX,K.aL0],x.f)
B.c7O=w([1,1,1],x.k)
B.c7P=w([1,1,1,1],x.k)
B.fFY=new A.D(-57.8,-32,0)
B.b0N=new A.yv(0,"Outlet spot 1",!1,B.fFY,"low")
B.fGD=new A.D(-9.8,-32,0)
B.b0K=new A.yv(1,"Outlet spot 2",!1,B.fGD,"low")
B.fH1=new A.D(38.2,-32,0)
B.b0Q=new A.yv(2,"Outlet spot 3",!1,B.fH1,"low")
B.fFE=new A.D(-25.8,0,0)
B.b0O=new A.yv(3,"Switch spot 1",!1,B.fFE,"switch")
B.fGx=new A.D(22.2,0,0)
B.b0M=new A.yv(4,"Switch spot 2",!1,B.fGx,"switch")
B.fHV=new A.D(-30,48,40)
B.b0P=new A.yv(5,"Ceiling light spot",!0,B.fHV,"light")
B.fAN=new A.D(30,48,40)
B.b0L=new A.yv(6,"Ceiling fan spot",!0,B.fAN,"fan")
B.tV=w([B.b0N,B.b0K,B.b0Q,B.b0O,B.b0M,B.b0P,B.b0L],C.ax("O<yv>"))
B.efa=new C.y(4,6)
B.efD=new C.y(5,7)
B.efV=new C.y(6,8)
B.c8f=w([G.kX,A5.ul,E.RU,E.RV,B.efa,B.efD,B.efV],C.ax("O<+(H,H)>"))
B.cf1=w(["The living room has no power: find the tripped breaker in the panel and reset it.","The kitchen sink drips: pick the wrench and tighten the slip nut under the sink. (Build the house up to Fixtures to see the problems.)"],x.s)
B.fGO=new A.D(11,4.6,-6)
B.fCQ=new A.D(11,5.4,-7.85)
B.fGf=new A.D(3.4,5.4,-7.85)
B.aRS=new A.D(3.4,3.4,-7.85)
B.cf3=w([B.fGO,B.fCQ,B.fGf,B.aRS],x.o)
B.fUD=new A.JX(0,-80,66,24)
B.fUE=new A.JX(1,20,48,20)
B.fUG=new A.JX(2,20,98,20)
B.fUH=new A.JX(3,20,148,20)
B.clM=w([B.fUD,B.fUE,B.fUG,B.fUH],x.W)
B.bay=new C.w(1,0.5411764705882353,0.35294117647058826,0.23529411764705882,D.t)
B.acd=new C.w(1,0.10588235294117647,0.07058823529411765,0.06274509803921569,D.t)
B.bjF=new C.w(1,0.8509803921568627,0.27450980392156865,0.49411764705882355,D.t)
B.ab3=new C.w(1,0.23137254901960785,0.24705882352941178,0.3607843137254902,D.t)
B.e8o=new A.uA(B.bay,B.acd,B.bjF,B.ab3,"michelle")
B.eGc=new A.EH(0,"Ama",0,2,B.e8o,"A nurse who works nights.")
B.bcm=new C.w(1,0.4196078431372549,0.27058823529411763,0.18823529411764706,D.t)
B.b9T=new C.w(1,0.08627450980392157,0.06274509803921569,0.06274509803921569,D.t)
B.bhh=new C.w(1,0.1803921568627451,0.5607843137254902,0.3568627450980392,D.t)
B.Vl=new C.w(1,0.1803921568627451,0.20392156862745098,0.25098039215686274,D.t)
B.e8u=new A.uA(B.bcm,B.b9T,B.bhh,B.Vl,"soldier")
B.eGb=new A.EH(1,"Joseph",1,2,B.e8u,"A student who is always hungry.")
B.bft=new C.w(1,0.6274509803921569,0.4196078431372549,0.2784313725490196,D.t)
B.ad1=new C.w(1,0.16470588235294117,0.10196078431372549,0.06274509803921569,D.t)
B.baP=new C.w(1,0.2901960784313726,0.24705882352941178,0.4196078431372549,D.t)
B.e8q=new A.uA(B.bft,B.ad1,D.aH,B.baP,"xbot")
B.eGa=new A.EH(2,"Grace",3,4,B.e8q,"A teacher who marks papers late.")
B.abg=new C.w(1,0.8784313725490196,0.6431372549019608,0.48627450980392156,D.t)
B.af_=new C.w(1,0.1843137254901961,0.43529411764705883,0.7098039215686275,D.t)
B.e8r=new A.uA(B.abg,D.ad9,B.af_,B.Vl,"soldier")
B.eG6=new A.EH(3,"Daniel",6,8,B.e8r,"A driver who sleeps in the day.")
B.bhR=new C.w(1,0.788235294117647,0.5450980392156862,0.3686274509803922,D.t)
B.baY=new C.w(1,0.16862745098039217,0.17647058823529413,0.22745098039215686,D.t)
B.e8p=new A.uA(B.bhR,B.acd,D.aE,B.baY,"michelle")
B.eG7=new A.EH(4,"Fatima",7,8,B.e8p,"A baker who gets up at four.")
B.aeQ=new C.w(1,0.47843137254901963,0.29411764705882354,0.18823529411764706,D.t)
B.bgx=new C.w(1,0.24705882352941178,0.22745098039215686,0.2,D.t)
B.e8v=new A.uA(B.aeQ,D.e_,D.d8,B.bgx,"soldier")
B.eG9=new A.EH(5,"Papa Moses",10,-1,B.e8v,"The oldest in the house. He watches TV all day.")
B.beu=new C.w(1,0.5490196078431373,0.3568627450980392,0.23137254901960785,D.t)
B.e8n=new A.uA(B.beu,B.ad0,D.ay,B.ab3,"michelle")
B.eG8=new A.EH(6,"Mama Rose",9,-1,B.e8n,"Cooks for everybody in the kitchen.")
B.Gx=w([B.eGc,B.eGb,B.eGa,B.eG6,B.eG7,B.eG9,B.eG8],C.ax("O<EH>"))
B.eke=new C.y(-9.5,4.6)
B.emy=new C.y(-5.9,2.3)
B.esk=new C.y(8.8,4.4)
B.cv2=w([B.eke,B.emy,B.esk],x.f)
B.cvX=w([61,63],x.t)
B.cw9=w([62,64],x.t)
B.b9Z=new C.w(1,0.6039215686274509,0.30980392156862746,0.30980392156862746,D.t)
B.bjM=new C.w(1,0.30980392156862746,0.47843137254901963,0.3686274509803922,D.t)
B.P3=w([B.wN,B.ado,B.b9Z,B.bjM,B.adt,D.ti],x.O)
B.atL=w([72,73,74,75],x.t)
B.etC=new C.y(-25,-15)
B.ed2=new C.y(25,-15)
B.etB=new C.y(-25,15)
B.ed1=new C.y(25,15)
B.cCn=w([B.etC,B.ed2,B.etB,B.ed1],x.f)
B.byD=new A.py("wall","Whole-wall TV","\ud83c\udfac",0,!0)
B.byL=new A.py("tv200",'Cinema 200"',"\ud83c\udfac",175,!1)
B.byG=new A.py("tv150",'Cinema 150"',"\ud83c\udfac",130,!1)
B.byH=new A.py("bangtv",'Beovision TV 77"',"\ud83d\udcfa",66,!1)
B.byC=new A.py("sonytv",'Sony Bravia 75"',"\ud83d\udcfa",64,!1)
B.byM=new A.py("lgtv",'LG OLED 65"',"\ud83d\udcfa",56,!1)
B.byF=new A.py("tv",'Samsung Neo QLED 55"',"\ud83d\udcfa",48,!1)
B.byK=new A.py("appletv",'Apple TV 4K 50"',"\ud83d\udcfa",44,!1)
B.byJ=new A.py("lamp","Table lamp","\ud83d\udca1",0,!1)
B.byI=new A.py("toaster","Toaster","\ud83c\udf5e",0,!1)
B.byE=new A.py("hairdryer","Hair dryer","\ud83d\udc87",0,!1)
B.a1a=w([B.byD,B.byL,B.byG,B.aiM,B.byH,B.byC,B.byM,B.byF,B.byK,B.byJ,B.byI,B.byE],C.ax("O<py>"))
B.cK4=w([y.r,"Two cables come into the box: one from the breaker panel (LINE) and one going to the light (LOAD).","Twist the two white wires together with a wire nut. A switch does not cut the neutral.",y.x,"Fasten the black wire from the panel to one BRASS screw.","Fasten the black wire that goes to the light to the other BRASS screw.","Push the switch into the box, put the plate on and test with the power on."],x.s)
B.dZC={black:0}
B.Ig=new C.eK(B.dZC,1,x.M)
B.bz1=new A.mj(51,"Black wire nut: HOT",B.Ig,!1,"hot")
B.e_p={white:0}
B.Ie=new C.eK(B.e_p,1,x.M)
B.byR=new A.mj(52,"White wire nut: NEUTRAL",B.Ie,!1,"neutral")
B.dZS={ground:0}
B.Sg=new C.eK(B.dZS,1,x.M)
B.byO=new A.mj(53,"Green ground connection",B.Sg,!1,"ground")
B.cKd=w([B.bz1,B.byR,B.byO],x.r)
B.bz2=new A.mj(51,"Black wire nut: HOT",B.Ig,!1,"hot")
B.byS=new A.mj(52,"White wire nut: NEUTRAL",B.Ie,!1,"neutral")
B.byP=new A.mj(53,"Green ground connection",B.Sg,!1,"ground")
B.cKc=w([B.bz2,B.byS,B.byP],x.r)
B.cKz=w(["Walnut","Blue grey","Brick red","Sage green","Sand","Charcoal"],x.s)
B.fDV=new A.D(-6.5,7.5,-7.85)
B.fDZ=new A.D(-6.5,7.8,-3)
B.cKR=w([B.fDV,B.fDZ],x.o)
B.baH=new C.w(1,0.9176470588235294,0.9490196078431372,0.9686274509803922,D.t)
B.bfq=new C.w(1,0.9647058823529412,0.9098039215686274,0.9098039215686274,D.t)
B.bez=new C.w(1,0.9529411764705882,0.9215686274509803,0.7843137254901961,D.t)
B.auo=w([B.Ak,B.baH,B.bfq,B.bez],x.O)
B.cLu=w([y.r,"The cable comes in through the top of the box. Strip about 3/4 inch of insulation from each wire.","Fasten the bare copper ground wire to the GREEN screw.","Fasten the white (neutral) wire to a SILVER screw.","Fasten the black (hot) wire to a BRASS screw. Wrap each wire clockwise under its screw.","Fold the wires back and push the outlet into the box.","Put the cover plate on, then turn the power on and test."],x.s)
B.fJ_=new A.D(-3.6,7.5,-7.85)
B.fDw=new A.D(-3.6,4.2,-7.85)
B.cLB=w([B.fJ_,B.fDw],x.o)
B.dZB={blackLine:0,blackLoad:1}
B.aM8=new C.eK(B.dZB,2,x.M)
B.bz_=new A.mj(21,"Brass screw (top)",B.aM8,!1,"hot")
B.bz0=new A.mj(22,"Brass screw (bottom)",B.aM8,!1,"hot")
B.aiN=new A.mj(25,"Green screw: GROUND",B.Sg,!1,"ground")
B.cM5=w([B.bz_,B.bz0,B.aiN],x.r)
B.cMi=w([0,2,1,3,4,6,7,8],x.t)
B.ezE=new C.bt(-0.1,0,0.5)
B.eBr=new C.bt(0.35,-0.4,0.3)
B.eAp=new C.bt(-0.4,0.55,0.35)
B.cMo=w([B.ezE,B.eBr,B.eAp],C.ax("O<+(N,N,N)>"))
B.fH9=new A.D(9.8,6,-7.85)
B.fCU=new A.D(9.8,7.5,-7.85)
B.fJg=new A.D(-8,7.5,-7.85)
B.fEN=new A.D(-8,1.5,-7.85)
B.cN9=w([B.fH9,B.fCU,B.fJg,B.fEN],x.o)
B.aRY=new A.D(5,1.8,-7.85)
B.fFw=new A.D(5,-0.1,-7.85)
B.fGn=new A.D(12.5,-0.1,-7.85)
B.cO8=w([B.aRY,B.fFw,B.fGn],x.o)
B.fyr=new A.D(3,3.1,-7.1)
B.aRT=new A.D(3,1.7,-7.1)
B.fGi=new A.D(3,1,-7.1)
B.fAB=new A.D(3.65,0.5,-7.1)
B.fBC=new A.D(4.3,1,-7.1)
B.fFr=new A.D(4.3,1.8,-7.1)
B.fJi=new A.D(5,1.8,-7.1)
B.cOA=w([B.fyr,B.aRT,B.fGi,B.fAB,B.fBC,B.fFr,B.fJi,B.aRY],x.o)
B.cP2=w(["My outlet is dead and it is dark in here. Please come and wire it.","The light in my room does not work, and my phone will not charge. Can you fix the wiring?","I have no power in my room at all. Can an electrician come?"],x.s)
B.eD3=new C.cH([-0.35,-0.2,0.42,0.3])
B.eDg=new C.cH([0.3,0.25,0.32,0.38])
B.eC6=new C.cH([0.05,-0.55,0.22,0.14])
B.eCz=new C.cH([-0.5,0.45,0.2,0.16])
B.cPe=w([B.eD3,B.eDg,B.eC6,B.eCz],x.U)
B.fIK=new A.D(0.6,11,-3.4)
B.fC9=new A.D(0.6,3.2,-3.2)
B.fIl=new A.D(0.6,2.2,-1.9)
B.fBW=new A.D(0.6,0.7,-1.5)
B.cPA=w([B.fIK,B.fC9,B.fIl,B.fBW],x.o)
B.cQg=w([G.my,K.RW,G.kX],x.f)
B.cQO=w(["road","roadturn","roadtee","roadcross","house2","shop","hospital","firestation","school","car","firetruck","ambulance","dog","cat","cow","sheep","chicken","horse","tree","pine","bush","flowers","fence","lamppost","bench","pond","swing","shed","doghouse"],x.s)
B.fB3=new A.D(0,8.3,0)
B.aRy=new A.D(0,3.9,0)
B.a1H=w([B.fB3,B.aRy],x.o)
B.fUC=new A.JX(0,-64,120,26)
B.fUF=new A.JX(1,64,120,26)
B.cQX=w([B.fUC,B.fUF],x.W)
B.cR3=w([y.r,"Make sure the box is rated for a fan. A plain light box cannot carry the weight and the shaking.","Join the house ground wire to the fan ground.","Join the house white wire to the fan white wire with a wire nut.","Join the house black wire to the fan black wire with a wire nut.","Push the wires up into the box and fasten the canopy to the ceiling.",y.E],x.s)
B.fOm=new A.Fl("outlet","\ud83d\udd0c","Wall outlet","Black to brass, white to silver",D.aH)
B.fOj=new A.Fl("switch","\ud83d\udca1","Light switch","Two blacks and a wire nut",D.aS)
B.fOk=new A.Fl("gfci","\ud83d\udee1\ufe0f","GFCI outlet","LINE and LOAD near water",D.bt)
B.fOn=new A.Fl("fan","\ud83c\udf00","Ceiling fan","Black, white, green and a fan box",D.b8)
B.fOl=new A.Fl("ptrap","\ud83e\udea0","Sink drain (P-trap)","Build a drain with a water seal",D.cr)
B.fOi=new A.Fl("faucet","\ud83d\udeb0","Faucet supply lines","Hot left, cold right",D.cg)
B.fOh=new A.Fl("house","\ud83c\udfd7\ufe0f","Build and fix a house","Stage by stage, then repair",D.by)
B.cRh=w([B.fOm,B.fOj,B.fOk,B.fOn,B.fOl,B.fOi,B.fOh],C.ax("O<Fl>"))
B.esC=new C.y(-3.5,11)
B.eiF=new C.y(3.5,11)
B.eh3=new C.y(-3.5,-11)
B.ef4=new C.y(3.5,-11)
B.cRl=w([B.esC,B.eiF,B.eh3,B.ef4],x.f)
B.fHv=new A.D(-0.6,11,-3.4)
B.fCY=new A.D(-0.6,3.2,-3.2)
B.fGJ=new A.D(-0.6,2.2,-1.9)
B.fJw=new A.D(-0.6,0.7,-1.5)
B.cRn=w([B.fHv,B.fCY,B.fGJ,B.fJw],x.o)
B.Pq=w(["dog","cat","cow","sheep","chicken","horse"],x.s)
B.epF=new C.y(-1.2,0)
B.ext=new C.y(1.2,0)
B.cRZ=w([B.epF,B.ext],x.f)
B.e3H=new A.ng("flange","flange","Toilet flange",D.T,"The flange is fixed to the floor over the drain. Everything else sits on it.",!1,0)
B.d3D=w(["flange"],x.s)
B.e3F=new A.ng("wax","wax","Wax ring",B.d3D,"The wax ring goes on the flange before the toilet. It makes the seal against sewer gas and water.",!1,0)
B.ddq=w(["wax"],x.s)
B.e3C=new A.ng("toilet","toilet","Toilet",B.ddq,"The toilet is lowered straight down onto the wax ring. The ring has to be there first.",!1,0)
B.dbU=w(["toilet"],x.s)
B.e3G=new A.ng("bolts","bolts","Toilet bolts",B.dbU,"The two bolts hold the toilet to the flange. Set the toilet first.",!1,2)
B.e3D=new A.ng("tvalve","valve","Toilet shut-off valve",D.T,"The shut-off valve goes on the pipe that comes out of the wall.",!0,0)
B.dc0=w(["tvalve","toilet"],x.s)
B.e3E=new A.ng("those","hosecold","Toilet supply hose",B.dc0,"The hose joins the valve to the toilet tank, so both must be there first.",!1,2)
B.aGc=new A.ng("faucet","faucet","Faucet",D.T,"The faucet goes through the hole in the counter.",!1,0)
B.aGf=new A.ng("vhot","valve","Hot shut-off valve (left)",D.T,y.g,!0,0)
B.aGd=new A.ng("vcold","valve","Cold shut-off valve (right)",D.T,y.g,!0,0)
B.dcR=w(["vhot","faucet"],x.s)
B.aGg=new A.ng("hhot","hosehot","Hot supply hose",B.dcR,"The hose joins the hot valve to the faucet, so the valve and the faucet must be there first.",!1,2)
B.dcO=w(["vcold","faucet"],x.s)
B.aGe=new A.ng("hcold","hosecold","Cold supply hose",B.dcO,"The hose joins the cold valve to the faucet, so the valve and the faucet must be there first.",!1,2)
B.aGb=new A.ng("tail","tail","Tailpiece",D.T,"The tailpiece hangs from the sink drain. It is the first piece of the drain.",!1,0)
B.dbN=w(["tail"],x.s)
B.aGh=new A.ng("trap","trap","P-trap",B.dbN,"The P-trap joins the tailpiece. Build the drain from the top down.",!1,1)
B.dbV=w(["trap"],x.s)
B.aGi=new A.ng("arm","arm","Trap arm",B.dbV,"The trap arm joins the trap and goes into the wall.",!1,1)
B.cNG=w([B.e3H,B.e3F,B.e3C,B.e3G,B.e3D,B.e3E,B.aGc,B.aGf,B.aGd,B.aGg,B.aGe,B.aGb,B.aGh,B.aGi],x.F)
B.e9i=new A.Wa("bathroom","Bathroom",B.cNG,"Fit out a bathroom: a toilet and a sink with its faucet, supply hoses and drain.")
B.d5k=w([B.aGc,B.aGf,B.aGd,B.aGg,B.aGe,B.aGb,B.aGh,B.aGi],x.F)
B.e9j=new A.Wa("kitchen","Kitchen",B.d5k,"Fit out a kitchen sink: the faucet, the hot and cold supplies and the drain.")
B.ava=w([B.e9i,B.e9j],C.ax("O<Wa>"))
B.byW=new A.mj(21,"LOAD hot (brass, taped)",D.If,!0,"load")
B.byY=new A.mj(22,"LINE hot (brass)",B.Ig,!1,"hot")
B.byX=new A.mj(23,"LOAD neutral (silver, taped)",D.If,!0,"load")
B.byQ=new A.mj(24,"LINE neutral (silver)",B.Ie,!1,"neutral")
B.cTl=w([B.byW,B.byY,B.byX,B.byQ,B.aiN],x.r)
B.fyp=new A.D(8.2,0.9,-6.3)
B.fGT=new A.D(8.2,-0.1,-6.3)
B.fAf=new A.D(8.2,-0.1,-7.85)
B.cTF=w([B.fyp,B.fGT,B.fAf],x.o)
B.efL=new C.y(-4.5,10)
B.eur=new C.y(4.5,10)
B.exr=new C.y(-4.5,-10)
B.eun=new C.y(4.5,-10)
B.cTQ=w([B.efL,B.eur,B.exr,B.eun],x.f)
B.cTR=w([-0.28,0.28],x.n)
B.etD=new C.y(-34,-6)
B.edq=new C.y(30,10)
B.etw=new C.y(-10,24)
B.cUR=w([B.etD,B.edq,B.etw],x.f)
B.bxC=new A.Dq("Oak",B.Av,"wood")
B.bxE=new A.Dq("Dark wood",B.x8,"wood")
B.aeS=new C.w(1,0.5529411764705883,0.5647058823529412,0.5882352941176471,D.t)
B.bxG=new A.Dq("Grey carpet",B.aeS,"carpet")
B.bhL=new C.w(1,0.3568627450980392,0.4980392156862745,0.6509803921568628,D.t)
B.bxD=new A.Dq("Blue carpet",B.bhL,"carpet")
B.bfp=new C.w(1,0.8470588235294118,0.803921568627451,0.7058823529411765,D.t)
B.bxA=new A.Dq("Cream carpet",B.bfp,"carpet")
B.bxF=new A.Dq("White tile",B.W1,"tile")
B.bxB=new A.Dq("Slate tile",B.abR,"tile")
B.avx=w([B.bxC,B.bxE,B.bxG,B.bxD,B.bxA,B.bxF,B.bxB],C.ax("O<Dq>"))
B.fGK=new A.D(3,3.2,-7.85)
B.fJy=new A.D(3,4,-7.85)
B.fJ1=new A.D(3,4.2,-7.4)
B.fzB=new A.D(3,3.95,-7)
B.cWZ=w([B.fGK,B.fJy,B.fJ1,B.fzB],x.o)
B.cX0=w(["The sink leaks and there is water on the floor. Please fix the plumbing.","The toilet is not connected and the water is running everywhere. Help!","There is no water at my sink and the pipes are open. Can a plumber come?"],x.s)
B.dkW=new A.qj(-60,60,28,50)
B.dkT=new A.qj(-124,-80,70,170)
B.dkR=new A.qj(80,124,70,170)
B.cY7=w([B.dkW,B.dkT,B.dkR],x.T)
B.fHe=new A.D(6,0.2,0)
B.fFP=new A.D(6,2.6,0)
B.aSp=new A.D(8.6,2.6,0)
B.cYd=w([B.fHe,B.fFP,B.aSp],x.o)
B.etH=new C.y(-7,-7)
B.egb=new C.y(7,-7)
B.etG=new C.y(-7,7)
B.ega=new C.y(7,7)
B.cYT=w([B.etH,B.egb,B.etG,B.ega],x.f)
B.cYV=w([-2.4,2.4],x.n)
B.cZb=w([-1.6,1.6],x.n)
B.aeo=new C.w(1,0.14901960784313725,0.14901960784313725,0.16470588235294117,D.t)
B.fKU=new A.zO("blackLine","Black \xb7 from the breaker",B.aeo,D.c,"hot")
B.bdg=new C.w(1,0.22745098039215686,0.1803921568627451,0.1803921568627451,D.t)
B.fKX=new A.zO("blackLoad","Black \xb7 to the light",B.bdg,D.c,"hot")
B.aSG=new A.zO("ground","Bare copper \xb7 ground",B.x4,D.c,"ground")
B.cZe=w([B.fKU,B.fKX,B.aSG],x.K)
B.b7Q=new C.w(1,0.9294117647058824,0.9019607843137255,0.8392156862745098,D.t)
B.b67=new C.w(1,0.9137254901960784,0.8274509803921568,0.8274509803921568,D.t)
B.b5o=new C.w(1,0.8352941176470589,0.8941176470588236,0.8156862745098039,D.t)
B.add=new C.w(1,0.9529411764705882,0.8901960784313725,0.6549019607843137,D.t)
B.ba8=new C.w(1,0.7254901960784313,0.7647058823529411,0.8666666666666667,D.t)
B.bhT=new C.w(1,0.5607843137254902,0.6392156862745098,0.6588235294117647,D.t)
B.avK=w([B.b7Q,B.VM,B.b67,B.b5o,B.add,B.ba8,B.adi,B.bhT],x.O)
B.aix=new A.qY(4,"deadOutlet")
B.d0q=w([B.Z6,B.Z7,B.Mc,B.Md,B.aix,B.Za,B.Zb,B.Zc,B.Zd,B.Ze,B.Z8,B.Z9],C.ax("O<qY>"))
B.d0T=w([y.r,"Find the LINE and LOAD screws. LOAD is covered with yellow tape. Leave it covered unless you feed another outlet.",y.x,"Fasten the white wire to the silver LINE screw.","Fasten the black wire to the brass LINE screw.","Push the GFCI into the box and put the plate on.","Turn the power on, press RESET, then press TEST. It must click off."],x.s)
B.d1k=w(["car","ambulance","firetruck"],x.s)
B.d1s=w([0.1,8.05],x.n)
B.fEi=new A.D(-0.35,11,-3.4)
B.fD6=new A.D(-0.35,3.2,-3.2)
B.fFW=new A.D(-0.35,2.2,-1.9)
B.fBR=new A.D(-0.35,0.7,-1.5)
B.d1G=w([B.fEi,B.fD6,B.fFW,B.fBR],x.o)
B.fIT=new A.D(5.2,7.5,-7.85)
B.fFL=new A.D(5.2,4,-7.85)
B.d1M=w([B.fIT,B.fFL],x.o)
B.fpz=new C.x("\ud83c\udfd8",null,D.SQ,null,null,null,null,null,null,null,null,null)
B.eUh=new C.G(!0,D.mM,null,null,null,null,19,D.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fi5=new C.x("Community",null,B.eUh,null,null,null,null,null,null,null,null,null)
B.f8l=new C.x("The people who live in the house get hungry and sick, and their wiring and plumbing break. Look after them and answer their calls for help.",null,E.D5,null,D.L,null,null,null,null,null,null,null)
B.d1O=w([B.fpz,D.an,B.fi5,D.cX,B.f8l],x.p)
B.a8i=new A.kY("look","Look",D.fc)
B.fNI=new A.kY("wall","Wall box",N.ak3)
B.fNH=new A.kY("ceiling","Ceiling box",D.qV)
B.fNR=new A.kY("fanbox","Fan box",S.MI)
B.fNY=new A.kY("drill","Drill",D.xQ)
B.fNS=new A.kY("cable","Cable roll",E.ajT)
B.d3Z=w([B.a8i,B.fNI,B.fNH,B.fNR,B.fNY,B.fNS],x.b)
B.fNX=new A.kY("sheet","Drywall sheet",D.Bx)
B.fNL=new A.kY("knife","Drywall saw",D.FF)
B.fNJ=new A.kY("screw","Screw gun",V.FP)
B.fO_=new A.kY("tape","Tape",D.tK)
B.fNW=new A.kY("mud","Mud",A2.a_g)
B.fO3=new A.kY("sand","Sander",D.FD)
B.bEb=new C.a0(985109,"MaterialIcons",!1)
B.fNP=new A.kY("paint","Roller",B.bEb)
B.d0y=w([B.a8i,B.fNX,B.fNL,B.fNJ,B.fO_,B.fNW,B.fO3,B.fNP],x.b)
B.fNT=new A.kY("tester","Voltage tester",D.qZ)
B.akN=new C.a0(983223,"MaterialIcons",!1)
B.fO0=new A.kY("outlet","Outlet",B.akN)
B.fNN=new A.kY("gfci","GFCI",D.tR)
B.fNZ=new A.kY("switch","Switch",E.Nk)
B.fNV=new A.kY("light","Light",D.r0)
B.bE9=new C.a0(985094,"MaterialIcons",!1)
B.fNQ=new A.kY("fan","Fan",B.bE9)
B.fNU=new A.kY("tv","TV",W.ala)
B.bCq=new C.a0(63571,"MaterialIcons",!1)
B.fNO=new A.kY("lamp","Lamp",B.bCq)
B.bBd=new C.a0(62944,"MaterialIcons",!1)
B.fNM=new A.kY("toaster","Toaster",B.bBd)
B.bBN=new C.a0(63209,"MaterialIcons",!1)
B.fO2=new A.kY("hairdryer","Hair dryer",B.bBN)
B.fO1=new A.kY("flip","Flip switch",E.Nk)
B.fNK=new A.kY("unplug","Unplug",B.akM)
B.d6w=w([B.a8i,B.fNT,B.fO0,B.fNN,B.fNZ,B.fNV,B.fNQ,B.fNU,B.fNO,B.fNM,B.fO2,B.fO1,B.fNK],x.b)
B.d1Q=w([B.d3Z,B.d0y,B.d6w],C.ax("O<ai<kY>>"))
B.aS8=new A.D(0,15.5,-3.6)
B.fEs=new A.D(0,20,-3.6)
B.fJn=new A.D(0,22.5,-2)
B.fCM=new A.D(0,22.5,1.1999999999999997)
B.fEy=new A.D(0,21.1,1.6)
B.d2l=w([B.aS8,B.fEs,B.fJn,B.fCM,B.fEy],x.o)
B.GS=w([],x.E)
B.d2V=w([],x.T)
B.aw7=w([],x.I)
B.vK=w([],x.h)
B.d31=w([],x.o)
B.aw9=w([],x.a)
B.ekh=new C.y(-1.6,3.5)
B.ejV=new C.y(1.6,3.5)
B.elM=new C.y(-1.6,-3.5)
B.eiD=new C.y(1.6,-3.5)
B.d3a=w([B.ekh,B.ejV,B.elM,B.eiD],x.f)
B.d3W=w(["Look at the pieces: the tailpiece, the P-trap and the trap arm. Pick the tailpiece first and tap its glowing outline under the sink.","Pick the P-trap (the U-shaped bend) and tap its glowing outline. It joins the tailpiece.","Pick the trap arm and tap its outline. It joins the trap to the wall drain.","Slide each slip nut up to its joint and hand tighten it: tap the nuts.","Run the water and look for leaks. The U-bend keeps a plug of water that blocks sewer gas."],x.s)
B.fkH=new C.x("\u2728",null,D.aOn,null,null,null,null,null,null,null,null,null)
B.fuA=new C.x("Nobody needs help right now.",null,D.fO,null,D.L,null,null,null,null,null,null,null)
B.f5r=new C.G(!0,D.aR,null,null,null,null,13,null,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fmV=new C.x("Everybody's wiring and plumbing works. Keep an eye on food and health: things break when you least expect it.",null,B.f5r,null,D.L,null,null,null,null,null,null,null)
B.d4k=w([B.fkH,D.O,B.fuA,D.at,B.fmV],x.p)
B.awl=w(["rug","road","roadturn","roadtee","roadcross","pond","flowers"],x.s)
B.fzU=new A.D(11.4,4.6,-6)
B.fEI=new A.D(11.4,5,-7.85)
B.fBS=new A.D(2.6,5,-7.85)
B.fCe=new A.D(2.6,3.4,-7.85)
B.d4G=w([B.fzU,B.fEI,B.fBS,B.fCe],x.o)
B.d4K=w([G.my,K.RW],x.f)
B.d4L=w(["hot","cold"],x.s)
B.fKW=new A.zO("black","Black \xb7 hot",B.aeo,D.c,"hot")
B.fKV=new A.zO("white","White \xb7 neutral",B.wM,D.aB,"neutral")
B.PZ=w([B.fKW,B.fKV,B.aSG],x.K)
B.eh1=new C.y(-3.5,4)
B.enB=new C.y(3.5,4)
B.ej4=new C.y(-3.5,-4)
B.ebW=new C.y(3.5,-4)
B.d5b=w([B.eh1,B.enB,B.ej4,B.ebW],x.f)
B.exg=new C.y(-2.4,5)
B.eoT=new C.y(2.4,5)
B.emj=new C.y(-2.4,-5)
B.el6=new C.y(2.4,-5)
B.d5f=w([B.exg,B.eoT,B.emj,B.el6],x.f)
B.eB0=new C.bt(-6,-4,D.bU)
B.ezI=new C.bt(5,-5,D.cj)
B.eAZ=new C.bt(0,1,D.ay)
B.eBs=new C.bt(-5,5,D.by)
B.eyZ=new C.bt(6,4,D.c)
B.d5Z=w([B.eB0,B.ezI,B.eAZ,B.eBs,B.eyZ],C.ax("O<+(N,N,w)>"))
B.d6q=w([G.my,G.kX],x.f)
B.et4=new C.y("Slab","First the concrete slab (the foundation) is poured and left to cure. Every wall sits on it.")
B.evd=new C.y("Framing","The carpenters build the wall frames from 2x4 studs, spaced 16 inches apart, with plates on the top and bottom.")
B.ekQ=new C.y("Plumbing rough-in","The plumber runs the hot (red) and cold (blue) water lines and the white drain pipes inside the walls and floor before anything is closed up.")
B.erk=new C.y("Electrical rough-in","The electrician runs the yellow and white cables from the breaker panel to every box, and fixes the boxes to the studs.")
B.esn=new C.y("Drywall","Drywall covers the frame. Here it is see-through so you can still look at the pipes and wires behind it.")
B.elg=new C.y("Fixtures","Last come the outlets, switches, light, sink, toilet and water heater. This is where most repairs happen.")
B.emu=new C.y("Roof","The roof goes on to keep everything dry. It is see-through here so you can keep looking inside.")
B.d6I=w([B.et4,B.evd,B.ekQ,B.erk,B.esn,B.elg,B.emu],x.L)
B.dkS=new A.qj(-124,-36,16,44)
B.dkP=new A.qj(34,108,30,66)
B.dkQ=new A.qj(34,108,80,116)
B.dkO=new A.qj(34,108,130,166)
B.d73=w([B.dkS,B.dkP,B.dkQ,B.dkO],x.T)
B.ety=new C.y(-17,-9)
B.ecq=new C.y(17,-9)
B.etx=new C.y(-17,9)
B.ecp=new C.y(17,9)
B.d7i=w([B.ety,B.ecq,B.etx,B.ecp],x.f)
B.d7o=w([-14,14],x.n)
B.awD=w([-26,26],x.n)
B.d7s=w([-30,-10,10,30],x.n)
B.d7t=w([-32,-8,34],x.n)
B.d7u=w([-3,3],x.n)
B.o2=w([-72,-24,24],x.t)
B.d7w=w([-80,80],x.n)
B.d7z=w([-90,-52,52,90],x.n)
B.awG=w([-9,9],x.n)
B.fBY=new A.D(8.2,5,-7.85)
B.fFO=new A.D(8.2,1.2,-7.85)
B.fHw=new A.D(8.2,1,-7.4)
B.d94=w([B.fBY,B.fFO,B.fHw],x.o)
B.dZT={hot:0}
B.aMc=new C.eK(B.dZT,1,x.M)
B.e9g=new A.Ew(61,"Hot shut-off valve (left)",B.aMc,"Hot is always on the LEFT. The red hose goes on the left valve.")
B.dZH={cold:0}
B.aMl=new C.eK(B.dZH,1,x.M)
B.e9h=new A.Ew(62,"Cold shut-off valve (right)",B.aMl,"Cold is always on the RIGHT. The blue hose goes on the right valve.")
B.e9e=new A.Ew(63,"Hot faucet inlet (left)",B.aMc,"The left faucet inlet takes the hot (red) hose.")
B.e9f=new A.Ew(64,"Cold faucet inlet (right)",B.aMl,"The right faucet inlet takes the cold (blue) hose.")
B.a2t=w([B.e9g,B.e9h,B.e9e,B.e9f],C.ax("O<Ew>"))
B.a2v=w([-72,-48,-24,0,24],x.t)
B.dan=w(["1 Rough-in","2 Drywall","3 Devices"],x.s)
B.ax2=w(["road","roadturn","roadtee","roadcross"],x.s)
B.ezh=new C.bt("hot","Hot hose (red)",B.t8)
B.ezY=new C.bt("cold","Cold hose (blue)",B.nH)
B.dbi=w([B.ezh,B.ezY],C.ax("O<+(n,n,w)>"))
B.eds=new C.y(34,40)
B.fNa=new A.zX(B.eds,3.141592653589793,2.6,"Washing hands at the sink",!1,!1,!1,"")
B.dbk=w([B.fNa],x.a)
B.a7Y=new A.D(15,2.6,0)
B.a2y=w([B.aSp,B.a7Y],x.o)
B.dbO=w(["tail","trap","arm"],x.s)
B.etv=new C.y(-102,!0)
B.ech=new C.y(102,!1)
B.dbW=w([B.etv,B.ech],C.ax("O<+(N,R)>"))
B.GW=w(["tv","lamp","toaster","hairdryer"],x.s)
B.dct=w([y.r,"Hold the fixture up to the ceiling box. It has three short wires: black, white and green.","Join the house ground wire to the fixture ground.","Join the house white wire to the fixture white wire with a wire nut.","Join the house black wire to the fixture black wire with a wire nut.","Push the wires into the box and fasten the fixture to the ceiling.",y.E],x.s)
B.dcB=w([30,60,120,180,300],x.t)
B.bRf=new A.jy("Breaker off, then test","Before you touch any wire, switch its breaker OFF, then check with a voltage tester that the wire is dead. A switch on the wall is not enough.")
B.bR2=new A.jy("Lock out, tag out","On a real job you put a lock or a note on the panel so nobody switches the power back on while you work.")
B.bRm=new A.jy("Water and power","Water carries electricity. Near sinks, tubs and outdoors the outlets must be GFCI, and wet hands never touch wires.")
B.bR7=new A.jy("Eyes, ears, lungs","Safety glasses for drilling and cutting, ear protection for loud tools, and a mask when you sand drywall dust or cut tile.")
B.bRl=new A.jy("Shut the water off","Before you cut or loosen a pipe, close the main water valve and open a faucet to drain the line.")
B.d6c=w([B.bRf,B.bR2,B.bRm,B.bR7,B.bRl],x.Z)
B.bRy=new A.Mb("Safety first","\ud83e\uddba",D.cg,B.d6c)
B.bRn=new A.jy("Wire colours","Black is hot (it carries the power), white is neutral (the way back), bare copper or green is ground (the safety path). Red is a second hot, often used for a switched line.")
B.bRu=new A.jy("Screw colours","On an outlet the brass screw takes the hot wire, the silver screw takes the neutral and the green screw takes the ground.")
B.bRh=new A.jy("Wire size","14 gauge wire is for 15 amp circuits (lights and outlets). 12 gauge is for 20 amp circuits (kitchens). A thinner wire than the breaker allows can overheat and start a fire.")
B.bRb=new A.jy("Breakers","A breaker is a safety switch. It trips when a circuit carries too much current, so the wires never get hot enough to burn.")
B.bRp=new A.jy("Wire nuts","Strip about 3/4 inch, twist the bare ends together clockwise, and screw on the nut until no bare copper shows. Give each wire a gentle tug.")
B.bRv=new A.jy("Switches","A switch cuts the hot wire only. The neutral goes straight through to the light.")
B.bRw=new A.jy("GFCI","A GFCI outlet watches the current going out and coming back. If a little leaks (through water or a person) it cuts the power in a fraction of a second.")
B.bR4=new A.jy("Ceiling fans","A fan shakes and is heavy. It needs a box that says fan rated, fixed to the joist, not a plain light box.")
B.bR6=new A.jy("Heights","Outlets sit about 16 inches from the floor. Switches sit about 48 inches up, where your hand falls.")
B.d_2=w([B.bRn,B.bRu,B.bRh,B.bRb,B.bRp,B.bRv,B.bRw,B.bR4,B.bR6],x.Z)
B.bRB=new A.Mb("Wiring basics","\u26a1",D.cj,B.d_2)
B.bR3=new A.jy("Hot left, cold right","On a faucet, hot is on the left and cold on the right. Hot lines are marked red and cold lines blue.")
B.bRg=new A.jy("The P-trap","The curved pipe under a sink always holds a little water. That water seal stops sewer gas coming up the drain.")
B.bRr=new A.jy("Shut-off valves","Every sink and toilet has its own small valve, so you can stop the water to one fixture without turning off the whole house.")
B.bR9=new A.jy("Slip nuts","Drain joints are sealed by a washer and a slip nut. Tighten by hand and a quarter turn: too much force cracks plastic.")
B.bR8=new A.jy("Wax ring","A toilet sits on a wax ring that seals it to the floor drain. A toilet is lowered straight down once, and cannot be slid around.")
B.bRo=new A.jy("Drain slope","Drains fall about 1/4 inch per foot so water and waste keep moving. Too flat and it clogs, too steep and the water leaves the solids behind.")
B.bRt=new A.jy("Order of work","Plumbing goes from the top down on the drain (tailpiece, trap, arm) and from the wall out on the supply (valve, hose, fixture).")
B.c85=w([B.bR3,B.bRg,B.bRr,B.bR9,B.bR8,B.bRo,B.bRt],x.Z)
B.bRz=new A.Mb("Plumbing basics","\ud83d\udeb0",D.cr,B.c85)
B.bR5=new A.jy("Studs","Studs are the vertical 2x4 posts inside a wall, 16 inches apart from centre to centre. Everything is fixed to them.")
B.bRj=new A.jy("Drilling studs","Holes for cable go through the middle of the stud, so a nail or screw cannot reach the wire.")
B.bRa=new A.jy("Drywall","A sheet is 4 feet wide, so its edges land on studs 48 inches apart. Screws go into studs only, just under the paper.")
B.bRd=new A.jy("Taping and mud","Seams get paper tape and three thin coats of joint compound, sanded smooth between coats, then primer and paint.")
B.bRs=new A.jy("Order of a build","Frame, run the pipes and wires (rough-in), inspect, hang drywall, finish it, paint, then fit the fixtures and devices.")
B.cM2=w([B.bR5,B.bRj,B.bRa,B.bRd,B.bRs],x.Z)
B.bRx=new A.Mb("Framing and walls","\ud83c\udfe0",D.dT,B.cM2)
B.bRe=new A.jy("Voltage tester","A pen that glows or beeps near live wires. Test it on a known live outlet first, so you know it works.")
B.bRk=new A.jy("Wire strippers","Strip the plastic off without nicking the copper. A nick weakens the wire.")
B.bRq=new A.jy("Adjustable wrench","For nuts on valves and hoses. Hold the fitting steady with a second wrench so you do not twist the pipe.")
B.bRi=new A.jy("Drill and screw gun","A drill makes holes through studs. A screw gun sets drywall screws to the right depth.")
B.bRc=new A.jy("Level and tape measure","Measure twice, cut once. A level makes sure outlets, shelves and pipes are straight.")
B.ddI=w([B.bRe,B.bRk,B.bRq,B.bRi,B.bRc],x.Z)
B.bRA=new A.Mb("Tools","\ud83e\uddf0",D.bt,B.ddI)
B.ddm=w([B.bRy,B.bRB,B.bRz,B.bRx,B.bRA],C.ax("O<Mb>"))
B.byU=new A.mj(21,"Brass screw (top): HOT side",B.Ig,!1,"hot")
B.byT=new A.mj(22,"Brass screw (bottom): HOT side",B.Ig,!1,"hot")
B.byV=new A.mj(23,"Silver screw (top): NEUTRAL side",B.Ie,!1,"neutral")
B.byZ=new A.mj(24,"Silver screw (bottom): NEUTRAL side",B.Ie,!1,"neutral")
B.byN=new A.mj(25,"Green screw: GROUND",B.Sg,!1,"ground")
B.ddn=w([B.byU,B.byT,B.byV,B.byZ,B.byN],x.r)
B.ddD=w(["Cream","Sky","Blush","Mint","Butter","Periwinkle","White","Slate"],x.s)
B.ddO=w([0.72,-0.72],x.n)
B.ehr=new C.y("outlet","\ud83d\udd0c Outlet")
B.eui=new C.y("gfci","\ud83d\udee1\ufe0f GFCI outlet")
B.eqH=new C.y("switch","\ud83d\udca1 Light switch")
B.de5=w([B.ehr,B.eui,B.eqH],x.L)
B.def=w(["inspect","hand","screwdriver","pliers","wrench","crimper","plunger","flapper","newoutlet","patch"],x.s)
B.dfe=w(["Look under the sink. The wall has two shut-off valves: hot on the LEFT (red handle) and cold on the RIGHT (blue handle).","Pick the red hot hose. Tap the left shut-off valve, then the left faucet inlet.","Pick the blue cold hose. Tap the right shut-off valve, then the right faucet inlet.","Open the valves slowly and turn on the faucet. Check every connection for drips."],x.s)
B.dZR={flange:0,wax:1,toilet:2,bolts:3,valve:4,hosehot:5,hosecold:6,faucet:7,tail:8,trap:9,arm:10}
B.dhs=new C.bm(B.dZR,["Flange","Wax ring","Toilet","Bolts","Shut-off valve","Hot hose","Cold hose","Faucet","Tailpiece","P-trap","Trap arm"],x.l)
B.dZp={xbot:0,michelle:1,soldier:2}
B.a33=new C.bm(B.dZp,["assets/avatars/Xbot.glb","assets/avatars/Michelle.glb","assets/avatars/Soldier.glb"],x.l)
B.bx_=new A.u4("The living room has no power at all.","The living room breaker is sitting in the middle (orange). It has tripped. Flip it fully OFF and ON again, by hand.","hand","Breaker reset. The living room has power again.",72,0,"")
B.bx9=new A.u4("There is no hot water.","The water heater breaker has tripped (orange). Reset it by hand.","hand","Breaker reset. The water heater is heating again.",75,0,"")
B.bx6=new A.u4("Water is dripping under the kitchen sink.","The slip nut on the P-trap is loose and the joint drips. Tighten it with the wrench.","wrench","Slip nut tightened. The drip stopped.",87,0,"")
B.bwZ=new A.u4("There is a wet spot on the wall behind the kitchen.","A crimped joint in the hot water line is leaking. A crimp joint is squeezed with a crimping tool, not tightened with a wrench.","crimper","The joint is crimped again and it does not leak.",96,0,"")
B.bx3=new A.u4("The outlet by the sofa does not work, but the lights do.","The tester finds power at the box but the outlet is dead: a screw on the outlet has come loose. Turn the breaker off first, then tighten the screws with the screwdriver.","screwdriver","You tightened the loose screw. The outlet works again.",81,72,"Turn the living room breaker OFF first.")
B.bx0=new A.u4("The living room light flickers.","A wire nut in the light box has worked loose. Turn the breaker off, then twist the wire nut tight with the pliers.","pliers","You twisted the wire nut tight. The light is steady.",83,72,"Turn the living room breaker OFF first.")
B.bx1=new A.u4("The kitchen outlet sparks and smells burnt.","The outlet has burnt. Turn the breaker off and replace it with a new outlet.","newoutlet","New outlet fitted. No more sparks.",84,73,"Turn the kitchen breaker OFF first.")
B.bx7=new A.u4("The kitchen outlets are dead.","The GFCI outlet has tripped. Press its RESET button by hand.","hand","You pressed RESET. The kitchen outlets work.",84,0,"")
B.bx2=new A.u4("The toilet keeps running.","The rubber flapper in the tank no longer seals, so water leaks into the bowl all the time. Replace the flapper.","flapper","New flapper fitted. The toilet stops running.",88,0,"")
B.bx5=new A.u4("The kitchen faucet drips.","The faucet washer is worn. Tighten the packing nut with the wrench, then check.","wrench","The faucet is sealed. No more drips.",85,0,"")
B.bx4=new A.u4("There is a hole in the wall.","A hole in the drywall. Stick a drywall patch over it, then tape, mud, sand and paint it.","patch","Patch fitted. Now it only needs mud, sanding and paint.",95,0,"")
B.bx8=new A.u4("The kitchen sink drains very slowly.","The drain is clogged. Use the plunger.","plunger","The clog is gone. The sink drains fast.",94,0,"")
B.vO=new C.dS([B.Z6,B.bx_,B.Z7,B.bx9,B.Mc,B.bx6,B.Md,B.bwZ,B.aix,B.bx3,B.Za,B.bx0,B.Zb,B.bx1,B.Zc,B.bx7,B.Zd,B.bx2,B.Ze,B.bx5,B.Z8,B.bx4,B.Z9,B.bx8],C.ax("dS<qY,u4>"))
B.e_3={michelle:0}
B.djb=new C.bm(B.e_3,[0.55],x.J)
B.aCM=new C.bm(D.i2,[],C.ax("bm<H,d1>"))
B.dZP={tail:0,trap:1,arm:2}
B.djw=new C.bm(B.dZP,["Tailpiece","P-trap","Trap arm"],x.l)
B.aFn={xbot:0,michelle:1,soldier:2,human:3}
B.aCX=new C.bm(B.aFn,["\ud83e\udd16 X Bot","\ud83d\udc83 Dancer","\ud83e\ude96 Soldier","\ud83d\ude42 Person"],x.l)
B.abI=new C.w(1,0.9137254901960784,0.9215686274509803,0.9372549019607843,D.t)
B.bde=new C.w(1,0.8549019607843137,0.8666666666666667,0.8901960784313725,D.t)
B.e8t=new A.uA(B.abI,E.abc,B.abI,B.bde,"xbot")
B.bf_=new C.w(1,0.0784313725490196,0.047058823529411764,0.03137254901960784,D.t)
B.aGz=new A.uA(B.aeQ,B.bf_,D.cC,D.aB,"michelle")
B.bjm=new C.w(1,0.8509803921568627,0.6470588235294118,0.48627450980392156,D.t)
B.bim=new C.w(1,0.3568627450980392,0.4196078431372549,0.22745098039215686,D.t)
B.b8N=new C.w(1,0.5411764705882353,0.4823529411764706,0.3333333333333333,D.t)
B.e8s=new A.uA(B.bjm,D.KC,B.bim,B.b8N,"soldier")
B.RD=new A.uA(B.abg,B.ad1,B.af_,B.Vl,"human")
B.aCY=new C.bm(B.aFn,[B.e8t,B.aGz,B.e8s,B.RD],C.ax("bm<n,uA>"))
B.e_j={soldier:0}
B.djS=new C.bm(B.e_j,[3.141592653589793],x.J)
B.dYz={bed:0,nightstand:1,wardrobe:2,desk:3,rug:4,sofa:5,armchair:6,coffee:7,tvstand:8,dining:9,chair:10,plant:11,lamp:12,console:13,shelf:14,tree:15,pine:16,bush:17,flowers:18,fence:19,lamppost:20,bench:21,car:22,road:23,roadturn:24,roadtee:25,roadcross:26,house2:27,shop:28,hospital:29,firestation:30,school:31,firetruck:32,ambulance:33,dog:34,cat:35,cow:36,sheep:37,chicken:38,horse:39,pond:40,swing:41,shed:42,doghouse:43}
B.by8=new A.hk("Bed","\ud83d\udecf\ufe0f",60,80)
B.byj=new A.hk("Night table","\ud83e\ude91",16,16)
B.byq=new A.hk("Wardrobe","\ud83d\udeaa",44,20)
B.by5=new A.hk("Desk","\ud83d\udda5\ufe0f",48,24)
B.bxN=new A.hk("Rug","\ud83d\udfe5",70,50)
B.byc=new A.hk("Sofa","\ud83d\udecb\ufe0f",80,32)
B.byo=new A.hk("Armchair","\ud83d\udcba",30,30)
B.by0=new A.hk("Coffee table","\u2615",40,24)
B.byk=new A.hk("TV stand","\ud83d\udcfa",56,18)
B.bxU=new A.hk("Dining table","\ud83c\udf7d\ufe0f",56,36)
B.bxX=new A.hk("Chair","\ud83e\ude91",18,18)
B.byl=new A.hk("Plant","\ud83e\udeb4",14,14)
B.bye=new A.hk("Floor lamp","\ud83d\udca1",10,10)
B.by6=new A.hk("Console table","\ud83d\uddc4\ufe0f",44,14)
B.byh=new A.hk("Bookshelf","\ud83d\udcda",36,12)
B.byp=new A.hk("Tree","\ud83c\udf33",36,36)
B.by2=new A.hk("Pine tree","\ud83c\udf32",30,30)
B.bxS=new A.hk("Bush","\ud83c\udf3f",18,18)
B.byb=new A.hk("Flowers","\ud83c\udf37",22,22)
B.bxO=new A.hk("Fence","\ud83d\udea7",64,6)
B.bxV=new A.hk("Street lamp","\ud83c\udfee",8,8)
B.by7=new A.hk("Bench","\ud83e\ude91",44,16)
B.bxP=new A.hk("Car","\ud83d\ude97",84,40)
B.by_=new A.hk("Road","\ud83d\udee3\ufe0f",40,40)
B.bxR=new A.hk("Road corner","\u21aa\ufe0f",40,40)
B.byr=new A.hk("Road T-junction","\u22a4",40,40)
B.by1=new A.hk("Crossroads","\u271a",40,40)
B.byd=new A.hk("House","\ud83c\udfe0",72,60)
B.bxM=new A.hk("Shop","\ud83c\udfea",84,60)
B.bxY=new A.hk("Hospital","\ud83c\udfe5",110,70)
B.bya=new A.hk("Fire station","\ud83d\ude92",90,64)
B.by3=new A.hk("School","\ud83c\udfeb",124,70)
B.byi=new A.hk("Fire truck","\ud83d\ude92",96,40)
B.by4=new A.hk("Ambulance","\ud83d\ude91",84,40)
B.bxW=new A.hk("Dog","\ud83d\udc15",22,10)
B.bxZ=new A.hk("Cat","\ud83d\udc08",16,8)
B.byf=new A.hk("Cow","\ud83d\udc04",38,16)
B.bxT=new A.hk("Sheep","\ud83d\udc11",26,14)
B.byg=new A.hk("Chicken","\ud83d\udc14",12,8)
B.bxQ=new A.hk("Horse","\ud83d\udc0e",46,16)
B.bym=new A.hk("Pond","\ud83d\udca7",80,56)
B.by9=new A.hk("Swing set","\ud83c\udfa0",56,40)
B.byn=new A.hk("Shed","\ud83d\uded6",50,42)
B.bys=new A.hk("Dog house","\ud83d\udc15",24,22)
B.lT=new C.bm(B.dYz,[B.by8,B.byj,B.byq,B.by5,B.bxN,B.byc,B.byo,B.by0,B.byk,B.bxU,B.bxX,B.byl,B.bye,B.by6,B.byh,B.byp,B.by2,B.bxS,B.byb,B.bxO,B.bxV,B.by7,B.bxP,B.by_,B.bxR,B.byr,B.by1,B.byd,B.bxM,B.bxY,B.bya,B.by3,B.byi,B.by4,B.bxW,B.bxZ,B.byf,B.bxT,B.byg,B.bxQ,B.bym,B.by9,B.byn,B.bys],C.ax("bm<n,hk>"))
B.fH8=new A.D(0,0,-1.2)
B.dXy=new A.d1("Electrical box","The box is ready. Pull a cable to it, then wire a device.",B.fH8,9)
B.djU=new C.dS([3,B.dXy],C.ax("dS<H,d1>"))
B.aFe={inspect:0,hand:1,screwdriver:2,pliers:3,wrench:4,crimper:5,plunger:6,flapper:7,newoutlet:8,patch:9}
B.Qx=new C.bm(B.aFe,["Look and test","Hand","Screwdriver","Pliers","Wrench","Crimp tool","Plunger","New flapper","New outlet","Drywall patch"],x.l)
B.bBy=new C.a0(63072,"MaterialIcons",!1)
B.djY=new C.bm(B.aFe,[D.fc,B.all,V.FP,D.FF,D.qW,B.bBy,A_.a_L,D.pU,B.akN,R.vq],C.ax("bm<n,a0>"))
B.dkN=new A.qj(18,50,0,20)
B.dkU=new A.qj(-126,126,-66,5)
B.dkV=new A.qj(-4,16,0,24)
B.dtJ=new A.a5Y("calls",null)
B.aDX=new A.a5Z(null)
B.aE6=new A.N7(!1,"","",null)
B.fJ5=new A.D(16,2.6,0)
B.dXh=new A.d1("Wall drain","The pipe stub that comes out of the wall. The trap arm slides into it.",B.fJ5,8)
B.fzc=new A.D(0,3,-6)
B.dXi=new A.d1("Wall","The copper supply pipes come out of the wall here.",B.fzc,24)
B.fGF=new A.D(8.2,1,-7)
B.dXj=new A.d1("Toilet","The tank fills from the cold supply on the wall. The bowl drains into the white pipe in the floor.",B.fGF,7)
B.fyv=new A.D(0,0,40)
B.dXk=new A.d1("The room","A room to build from bare studs to finished, working electrics. The walls hold the cable, the boxes and the devices.",B.fyv,190)
B.fEd=new A.D(-2.4,11.5,-3.6)
B.dXl=new A.d1("Hot faucet inlet","The threaded tail under the faucet where the hot supply hose screws on.",B.fEd,7)
B.fAE=new A.D(-3.6,4,-7.8)
B.dXm=new A.d1("Light switch","Controls the ceiling light. Tap Open lesson to wire one.",B.fAE,4.5)
B.fFp=new A.D(0,0.5,2)
B.dXn=new A.d1("Voltage tester","A tester that glows when it touches live power.",B.fFp,6)
B.dXo=new A.d1("Pipe joint","A crimped joint in the hot water line.",B.aRS,4)
B.fEv=new A.D(0,-0.2,0.2)
B.dXp=new A.d1("Cover plate","The plate covers the box and the edges of the drywall so nobody touches the wires.",B.fEv,8)
B.fIg=new A.D(-4.6,0.5,-3.4)
B.dXq=new A.d1("Hot shut-off valve","The angle stop valve on the hot pipe. Turn the handle to stop the water to the faucet without shutting off the whole house. Hot is always on the left.",B.fIg,8)
B.fGa=new A.D(0,-0.3,3.2)
B.dXr=new A.d1("White wire nut: NEUTRAL","Twist the house white wire and the fixture white wire together under this cap.",B.fGa,6)
B.fFg=new A.D(4.6,0.5,-3.4)
B.dXs=new A.d1("Cold shut-off valve","The angle stop valve on the cold pipe. Cold is always on the right.",B.fFg,8)
B.fAd=new A.D(2.4,11.5,-3.6)
B.dXt=new A.d1("Cold faucet inlet","The threaded tail under the faucet where the cold supply hose screws on.",B.fAd,7)
B.fJM=new A.D(0.8,-0.8,1.2)
B.dXu=new A.d1("Black wire to the light","This black wire carries power to the light once the switch is on. It goes on the other brass screw.",B.fJM,7)
B.fEb=new A.D(10.05,5.2,-7.5)
B.dXv=new A.d1("Water heater breaker","A big circuit for the water heater. It is ON.",B.fEb,3.5)
B.aRh=new A.D(0,40,0)
B.dXw=new A.d1("Back wall",y.s,B.aRh,140)
B.fGy=new A.D(3,3.8,-7.4)
B.dXx=new A.d1("Kitchen faucet","Hot on the left, cold on the right. Tap Open lesson to connect the supply hoses.",B.fGy,4.5)
B.zw=new A.D(0,6,0)
B.dXz=new A.d1("Tailpiece","The straight pipe that hangs from the sink drain. Its bottom end is smooth so the slip nut can slide on and grip it.",B.zw,10)
B.fI_=new A.D(-60,40,50)
B.dXA=new A.d1("Left wall",y.s,B.fI_,140)
B.fB_=new A.D(3,1,0)
B.dXB=new A.d1("P-trap","The U-shaped bend. It always keeps a little water inside, and that water plug blocks sewer gas from coming back up into the house.",B.fB_,11)
B.fyR=new A.D(0,20,5)
B.dXC=new A.d1("The room","A bare room with the water supply stubs and the drain stub already in the wall and floor.",B.fyR,120)
B.fzA=new A.D(0,-8,0)
B.dXD=new A.d1("Cabinet","The cabinet under the sink where the drain is built.",B.fzA,22)
B.fyt=new A.D(0,0,150)
B.dXE=new A.d1("Lawn","The grass. Walls, floors and the sky stay as they are, but you can add things to the garden with the Furniture button.",B.fyt,400)
B.fzl=new A.D(0,4,-8)
B.dXF=new A.d1("Wall framing","2x4 studs 16 inches apart. Pipes and cables run through holes drilled in the middle of the studs, never along the edge where a nail could hit them.",B.fzl,18)
B.aS2=new A.D(0,-0.2,5.1)
B.dXG=new A.d1("TEST and RESET buttons","Press TEST to make the GFCI trip. Press RESET to turn it back on. Test it once a month.",B.aS2,5)
B.aRc=new A.D(0,11,0)
B.dXH=new A.d1("Sink","The sink bowl and the counter. The drain flange at the bottom is where the tailpiece starts.",B.aRc,16)
B.fC=new A.D(0,0,0)
B.dXI=new A.d1("Drywall","The wall surface. A hole is cut in it for the electrical box.",B.fC,22)
B.fBM=new A.D(60,40,50)
B.dXJ=new A.d1("Right wall",y.s,B.fBM,140)
B.fyF=new A.D(0,14,-3)
B.dXK=new A.d1("Counter and sink","The faucet is mounted through a hole in the counter.",B.fyF,20)
B.fDi=new A.D(0,-1.9,5)
B.dXL=new A.d1("GREEN screw: GROUND","The green screw is for the bare copper ground wire.",B.fDi,5)
B.fzk=new A.D(0,47,-2)
B.dXM=new A.d1("Top and bottom plate","The horizontal 2x4s at the top and the bottom of the wall. The studs stand between them.",B.fzk,70)
B.fyw=new A.D(0,0,-8)
B.dXN=new A.d1("Wall","Behind the wall the drain pipe goes down to the sewer line.",B.fyw,22)
B.fyO=new A.D(0,19,-3)
B.dXO=new A.d1("Faucet","The faucet with hot on the left (red) and cold on the right (blue).",B.fyO,14)
B.fC7=new A.D(3.5,2,-7.2)
B.dXP=new A.d1("Kitchen counter and cabinet","The cabinet under the sink is where the drain and the shut-off valves live.",B.fC7,9)
B.fDz=new A.D(10.05,5.7,-7.5)
B.dXQ=new A.d1("Kitchen breaker","Protects the kitchen outlets. It is ON.",B.fDz,3.5)
B.fEk=new A.D(4,6,-2.5)
B.dXR=new A.d1("Cold supply hose","A braided steel hose with a rubber liner and a blue band.",B.fEk,9)
B.fFn=new A.D(-1,0.6,4.3)
B.dXS=new A.d1("SILVER screw: NEUTRAL side",y.o,B.fFn,5)
B.a7U=new A.D(0,3.7,0)
B.dXT=new A.d1("Slip nut","A big plastic nut. Slide it on the pipe first, then the washer, then join the pieces and hand tighten. A rubber washer inside makes the seal.",B.a7U,7)
B.TH=new A.D(0,-1,-0.6)
B.dXU=new A.d1("Wire nut","A twist-on cap that joins wires safely. The two white wires are joined here because a switch only cuts the hot wire.",B.TH,5)
B.fEp=new A.D(-1.5,-0.3,3.2)
B.dXV=new A.d1("Black wire nut: HOT","Twist the house black wire and the fixture black wire together under this cap.",B.fEp,6)
B.fDy=new A.D(-1.9,0,-2)
B.dXW=new A.d1("Wood stud","The 2x4 frame inside the wall. The electrical box is nailed or screwed to a stud so it cannot move.",B.fDy,16)
B.fH7=new A.D(-1,-0.8,4.3)
B.dXX=new A.d1("SILVER screw: NEUTRAL side",y.o,B.fH7,5)
B.fJm=new A.D(6,3,-7.8)
B.dXY=new A.d1("Water and drain pipes","Red is hot water, blue is cold water (PEX tubing). The white pipes are drains. They slope down so the waste flows away.",B.fJm,14)
B.fHc=new A.D(1,0.6,4.3)
B.dXZ=new A.d1("BRASS screw: HOT side",y.u,B.fHc,5)
B.fHx=new A.D(0,-0.2,4.9)
B.dY_=new A.d1("Mounting strap (yoke)","The metal strap with two screw slots. Long screws through the ears hold the device in the box.",B.fHx,7)
B.fJJ=new A.D(9.55,4.7,-7.5)
B.dY0=new A.d1("Spare breaker","A spare circuit.",B.fJJ,3.5)
B.fyS=new A.D(0,20,8)
B.dY1=new A.d1("Vanity and counter","The cabinet that holds the sink. The pipes live inside it.",B.fyS,70)
B.fIN=new A.D(-3.2,1.3,-7.8)
B.dY2=new A.d1("Living room outlet","A standard outlet. Tap Open lesson to wire one in 3D.",B.fIN,4.5)
B.fHz=new A.D(1.5,-0.3,3.2)
B.dY3=new A.d1("Green ground connection","Join the bare copper house ground wire to the green fixture ground wire.",B.fHz,6)
B.fDn=new A.D(12,2.6,0)
B.dY4=new A.d1("Trap arm","The pipe that carries the waste water from the trap into the wall. It must slope down toward the wall, about 1/4 inch per foot.",B.fDn,9)
B.fF2=new A.D(0,6.5,-7.8)
B.dY5=new A.d1("Electrical cables","Cables run from the breaker panel to every outlet, switch and light. Yellow is 12 gauge for 20 amps. White is 14 gauge for 15 amps.",B.fF2,16)
B.fFD=new A.D(11.2,2.3,-6)
B.dY6=new A.d1("Water heater","Heats the water. The cold line goes in at the top and the hot line comes out at the top.",B.fFD,9)
B.fGd=new A.D(9.55,5.2,-7.5)
B.dY7=new A.d1("Bathroom breaker","Protects the bathroom. It is ON.",B.fGd,3.5)
B.fDE=new A.D(5.2,3.9,-7.8)
B.dY8=new A.d1("Kitchen GFCI outlet","Outlets near water must be GFCI. Tap Open lesson to wire one.",B.fDE,4.5)
B.fzh=new A.D(0,40,-3)
B.dY9=new A.d1("Electrical cable","Yellow 12/2 cable with ground: it carries power from the breaker panel through the holes in the studs to each box.",B.fzh,80)
B.fE9=new A.D(-8.4,1.2,-6.4)
B.dYa=new A.d1("Sofa","Just furniture, to show the size of the room.",B.fE9,10)
B.dYb=new A.d1("Outlet face","Two outlets. The short slot is hot, the long slot is neutral, and the round hole is ground.",B.aS2,6)
B.fD1=new A.D(0,4,-7.8)
B.dYc=new A.d1("Wall","The drywall of the back wall.",B.fD1,16)
B.fIQ=new A.D(0,0,0.6)
B.dYd=new A.d1("Canopy","The round cover that hides the box and the wire connections against the ceiling.",B.fIQ,8)
B.dYe=new A.d1("Concrete slab","The foundation. It carries the whole weight of the house. Plumbing drains are placed before it is poured.",B.fC,30)
B.fzd=new A.D(0,40,12)
B.dYf=new A.d1("Front door","Tap the door to go inside the house.",B.fzd,260)
B.a7W=new A.D(8.9,2.6,0)
B.dYg=new A.d1("Slip nut","Hand tighten it, then about a quarter turn with pliers. Over-tightening cracks the plastic.",B.a7W,7)
B.fGc=new A.D(1,-0.8,4.3)
B.dYh=new A.d1("BRASS screw: HOT side",y.u,B.fGc,5)
B.fCP=new A.D(0.6,1.5,-1.8)
B.dYi=new A.d1("Cable to the light (LOAD)","This cable carries the switched power on to the light. The black wire here only has power when the switch is on.",B.fCP,8)
B.fDc=new A.D(9.8,5,-7.5)
B.dYj=new A.d1("Breaker panel","The main electrical panel. Each breaker protects one circuit. A breaker that is in the middle position has TRIPPED. Flip it fully OFF and then ON to reset.",B.fDc,6)
B.fEn=new A.D(-4,6,-2.5)
B.dYk=new A.d1("Hot supply hose","A braided steel hose with a rubber liner and a red band. Hand tighten the nuts, then a quarter turn with a wrench.",B.fEn,9)
B.e10=new C.u(66,66)
B.fn1=new C.x("Sick people can stay in a hospital bed. Treat each patient before their care runs out, and they go home better.",null,D.IJ,null,D.L,null,null,null,null,null,null,null)
B.e4a=new C.C(D.ahR,B.fn1,null)
B.bHB=new C.ae(D.ee,18,D.b4,null,null,null)
B.e4q=new C.C(D.fx,B.bHB,null)
B.e4s=new C.C(D.fx,F.amS,null)
B.e8m=new A.a84(0,0,14,0,!1,!1,!1,!1,!1,0,!1,"","",-1,0,-1,0)
B.eaq=new A.a8t(null,null)
B.bbB=new C.w(1,0.30980392156862746,0.7019607843137254,0.9647058823529412,D.t)
B.biY=new C.w(1,0.11372549019607843,0.37254901960784315,0.7686274509803922,D.t)
B.bg4=new C.w(1,0.043137254901960784,0.16470588235294117,0.4196078431372549,D.t)
B.cPV=w([B.bbB,B.biY,B.bg4],x.O)
B.eba=new C.bS(Z.pa,0.5,D.x,null,0,B.cPV,null,null)
B.bjd=new C.w(1,0.8392156862745098,0.9019607843137255,0.9176470588235294,D.t)
B.ebT=new C.y(B.bjd,B.W1)
B.ec0=new C.y(0,120)
B.ecc=new C.y(B.wM,B.fC)
B.edu=new C.y(64,2.4)
B.ef0=new C.y("LOAD (taped)",D.d8)
B.ehI=new C.y(63,-2.4)
B.eir=new C.y(51,B.abH)
B.b7g=new C.w(1,0.9137254901960784,0.8705882352941177,0.7607843137254902,D.t)
B.el0=new C.y(B.b7g,B.Av)
B.b5G=new C.w(1,0.7647058823529411,0.8117647058823529,0.9019607843137255,D.t)
B.env=new C.y(B.b5G,B.aeS)
B.be2=new C.w(1,0.3568627450980392,0.39215686274509803,0.4392156862745098,D.t)
B.ep6=new C.y("SILVER \xb7 NEUTRAL",B.be2)
B.fIZ=new A.D(-1.5,0,0)
B.epf=new C.y(B.Kl,B.fIZ)
B.b6q=new C.w(1,0.8196078431372549,0.29411764705882354,0.22745098039215686,D.t)
B.eqL=new C.y(52,B.b6q)
B.bb_=new C.w(1,0.12156862745098039,0.47843137254901963,0.22745098039215686,D.t)
B.erD=new C.y("GREEN \xb7 GROUND",B.bb_)
B.bia=new C.w(1,0.9450980392156862,0.9098039215686274,0.8235294117647058,D.t)
B.esi=new C.y(B.bia,B.Av)
B.esz=new C.y("main","Main water valve")
B.aec=new C.w(1,0.1843137254901961,0.6352941176470588,0.30980392156862746,D.t)
B.fJN=new A.D(1.5,0,0)
B.evO=new C.y(B.aec,B.fJN)
B.b7N=new C.w(1,0.9529411764705882,0.9411764705882353,0.9098039215686274,D.t)
B.bdB=new C.w(1,0.4823529411764706,0.5294117647058824,0.5803921568627451,D.t)
B.ewq=new C.y(B.b7N,B.bdB)
B.exh=new C.y(B.px,B.abG)
B.b7t=new C.w(1,0.6039215686274509,0.4196078431372549,0.047058823529411764,D.t)
B.ey1=new C.y("BRASS \xb7 HOT",B.b7t)
B.eyu=new C.y(53,B.aec)
B.ez7=new C.bt(61,-4.6,B.t8)
B.eAT=new C.bt(62,4.6,B.nH)
B.eCB=new C.cH([0,17.1,16.4,5.8])
B.eCE=new C.cH([0,-0.1,16.4,4.2])
B.eDH=new C.cH([15.6,9,14.8,22])
B.eDL=new C.cH([-15.6,9,14.8,22])
B.eDU=new C.eq([72,60,44,B.Kv,B.Ky])
B.biU=new C.w(1,0.8941176470588236,0.6901960784313725,0.47843137254901963,D.t)
B.eEa=new C.eq([124,70,44,B.biU,B.x8])
B.eEh=new C.eq([90,64,46,B.adb,D.jt])
B.eEA=new C.eq([110,70,62,D.bM,D.ak])
B.eEF=new C.eq([84,60,40,B.add,B.Ky])
B.aMh=new C.eK(D.i2,0,C.ax("eK<H>"))
B.eKw=new C.at(126,84)
B.eUe=new C.G(!0,D.c,null,null,null,null,13.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.eVu=new C.G(!0,D.az,null,null,null,null,14,D.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.eVI=new C.G(!0,D.az,null,null,null,null,11.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.eWs=new C.G(!0,D.aH,null,null,null,null,12.5,D.u,null,2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.eX1=new C.G(!0,D.c,null,null,null,null,12.5,D.P,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.aOB=new C.G(!0,D.ad,null,null,null,null,12,D.P,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.eXS=new C.G(!0,D.c,null,null,null,null,13,D.P,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.a6R=new C.G(!0,D.ad,null,null,null,null,null,null,null,null,null,null,1.45,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.eZK=new C.G(!0,null,null,null,null,null,9,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.ID=new C.G(!0,D.aH,null,null,null,null,12.5,D.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.f_f=new C.G(!0,D.c,null,null,null,null,11.5,D.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.f_x=new C.G(!0,D.bK,null,null,null,null,13,D.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.f0y=new C.G(!0,D.ad,null,null,null,null,13.5,null,D.cD,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.f0J=new C.G(!0,D.fi,null,null,null,null,11.5,D.P,null,null,null,null,1.25,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.f0O=new C.G(!0,D.ez,null,null,null,null,14,D.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.f1v=new C.G(!0,D.c,null,null,null,null,13.5,D.H,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.f1U=new C.G(!0,D.aR,null,null,null,null,12,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.aPi=new C.G(!0,D.ad,null,null,null,null,13.5,null,null,null,null,null,1.5,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.f6l=new C.G(!0,D.c,null,null,null,null,13.5,D.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.f6v=new C.G(!0,D.aR,null,null,null,null,11.5,null,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.f71=new C.G(!0,D.b1,null,null,null,null,14.5,D.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.eUt=new C.G(!0,D.w,null,null,null,null,12,D.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.f8c=new C.x("Open the 3D lesson",null,B.eUt,null,null,null,null,null,null,null,null,null)
B.f93=new C.x("Tip: pick a part, then tap its glowing spot. Joints on hoses, bolts and the drain are only loose: pick the Wrench and tap them. Use your Hand on the main water valve: turn the water OFF before you cut into a pipe, and ON to test for leaks.",null,E.a6J,null,null,null,null,null,null,null,null,null)
B.faa=new C.x("You used all three lives. Electricity does not give second chances, so in real life you turn the breaker OFF and test the wires every single time. Try the job again.",null,D.zq,null,null,null,null,null,null,null,null,null)
B.far=new C.x("A different house",null,null,null,null,null,null,null,null,null,null,null)
B.faT=new C.x("\ud83c\udf5e",null,D.zp,null,null,null,null,null,null,null,null,null)
B.fbc=new C.x("Play the tour",null,null,null,null,null,null,null,null,null,null,null)
B.fbj=new C.x("Start this job again",null,null,null,null,null,null,null,null,null,null,null)
B.fe2=new C.x("Start from a bare house (wire everything)",null,null,null,null,null,null,null,null,null,null,null)
B.feX=new C.x("\ud83d\udcde",null,D.zp,null,null,null,null,null,null,null,null,null)
B.ffp=new C.x("Go through",null,null,null,null,null,null,null,null,null,null,null)
B.fgc=new C.x("The customer says\u2026",null,D.ds,null,null,null,null,null,null,null,null,null)
B.fgV=new C.x("What the house needs",null,D.ds,null,null,null,null,null,null,null,null,null)
B.fh5=new C.x("Next job",null,null,null,null,null,null,null,null,null,null,null)
B.eVU=new C.G(!0,D.w,null,null,null,null,14,D.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fhd=new C.x("Go in",null,B.eVU,null,null,null,null,null,null,null,null,null)
B.f3J=new C.G(!0,D.aH,null,null,null,null,22,D.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fhh=new C.x("My House",null,B.f3J,null,D.L,null,null,null,null,null,null,null)
B.fho=new C.x("New job",null,null,null,null,null,null,null,null,null,null,null)
B.aOX=new C.G(!0,D.cg,null,null,null,null,null,D.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fhv=new C.x("Job over",null,B.aOX,null,null,null,null,null,null,null,null,null)
B.fhL=new C.x("Three shocks. In real life you switch the breaker off and test the wires, every time. Try another call.",null,D.zq,null,null,null,null,null,null,null,null,null)
B.fhR=new C.x("Learn the trades",null,L.rA,null,null,null,null,null,null,null,null,null)
B.fhW=new C.x("Book a hallway tour (just the hall)",null,null,null,null,null,null,null,null,null,null,null)
B.fir=new C.x("Practice mode: no hints. You will only hear from me when something is wrong.",null,U.T4,null,null,null,null,null,null,null,null,null)
B.fiE=new C.x("New call",null,null,null,null,null,null,null,null,null,null,null)
B.fiJ=new C.x("Job done! \ud83c\udf89",null,O.T8,null,null,null,null,null,null,null,null,null)
B.fjR=new C.x("Next call",null,null,null,null,null,null,null,null,null,null,null)
B.fke=new C.x("Plug in",null,D.ds,null,null,null,null,null,null,null,null,null)
B.fkE=new C.x("Look around",null,null,null,null,null,null,null,null,null,null,null)
B.flc=new C.x("The customer wants:",null,D.a71,null,null,null,null,null,null,null,null,null)
B.flm=new C.x('Tip: pick "Look and test" and tap things to find out what is wrong. Then pick the right tool. Turn the breaker off (hand) before you touch any wire.',null,E.a6J,null,null,null,null,null,null,null,null,null)
B.fna=new C.x("Who walks the house?",null,Q.SO,null,null,null,null,null,null,null,null,null)
B.fnL=new C.x("5 bedrooms, 3 bathrooms and a garden. Walk in, look all round, fix what is wrong.",null,Y.SP,null,D.L,null,null,null,null,null,null,null)
B.fnQ=new C.x("Call over",null,B.aOX,null,null,null,null,null,null,null,null,null)
B.fnX=new C.x("\u23cf Unplug",null,I.zm,null,null,null,null,null,null,null,null,null)
B.fof=new C.x("A different call",null,null,null,null,null,null,null,null,null,null,null)
B.foG=new C.x("\ud83d\udecf\ufe0f",null,D.us,null,null,null,null,null,null,null,null,null)
B.fp5=new C.x("Job complete! \ud83c\udf89",null,O.T8,null,null,null,null,null,null,null,null,null)
B.fpF=new C.x("How you are doing",null,D.i4,null,null,null,null,null,null,null,null,null)
B.fq1=new C.x("House tour \ud83c\udfac",null,D.ds,null,null,null,null,null,null,null,null,null)
B.fqa=new C.x("All fixed! \ud83c\udf89",null,O.T8,null,null,null,null,null,null,null,null,null)
B.aQn=new C.x("Stay",null,null,null,null,null,null,null,null,null,null,null)
B.aQp=new C.x("A different job",null,null,null,null,null,null,null,null,null,null,null)
B.fse=new C.x("It goes on the back wall, not wired yet. Tap the red one to wire it yourself.",null,U.SW,null,null,null,null,null,null,null,null,null)
B.fu1=new C.x("The job",null,D.ds,null,null,null,null,null,null,null,null,null)
B.fur=new C.x("A little person walks through the whole house: the living room, the kitchen (a drink from the fridge), the hall, the bedrooms and the bathrooms. Every TV is switched on first. Choose how long it takes.",null,D.IJ,null,null,null,null,null,null,null,null,null)
B.fuS=new C.x("Stay in the room",null,null,null,null,null,null,null,null,null,null,null)
B.fvm=new C.x("\ud83d\udc8a",null,D.zp,null,null,null,null,null,null,null,null,null)
B.fyo=new A.D(3.6,2.6,0.6)
B.fyq=new A.D(0,56,0.9)
B.fys=new A.D(0,0.62,-19.2)
B.l1=new A.D(0,0,1)
B.fyu=new A.D(0,0,3)
B.a7P=new A.D(0,0,4)
B.wg=new A.D(0,0,-1)
B.a7Q=new A.D(0,0,-60)
B.aRb=new A.D(0,10,0)
B.fyx=new A.D(0,10,3)
B.fyy=new A.D(0,12,0)
B.fyz=new A.D(0,12,3)
B.aRd=new A.D(0,13,0)
B.fyA=new A.D(0,13,-8)
B.J2=new A.D(0,14,0)
B.fyB=new A.D(0,14,11)
B.fyC=new A.D(0,14,2)
B.fyD=new A.D(0,14,40)
B.fyE=new A.D(0,14,5)
B.fyG=new A.D(0,14,-9)
B.fyH=new A.D(0,150,8)
B.fyI=new A.D(0,165,3)
B.fyJ=new A.D(0,165,-63)
B.fyK=new A.D(0,16,0)
B.fyL=new A.D(0,178,-30)
B.a7R=new A.D(0,17,0)
B.fyM=new A.D(0,17,21)
B.fyN=new A.D(0,19,14)
B.fP=new A.D(0,1,0)
B.fyP=new A.D(0,20,0)
B.fyQ=new A.D(0,20,16)
B.fyT=new A.D(0,20,-14)
B.fyU=new A.D(0,20,-6)
B.fyV=new A.D(0,21,0)
B.fyW=new A.D(0,22,-11)
B.fyX=new A.D(0,22,-12)
B.fyY=new A.D(0,22,-39)
B.fyZ=new A.D(0,23,0)
B.fz_=new A.D(0,24,0)
B.fz0=new A.D(0,24,13)
B.fz1=new A.D(0,25,-15)
B.aRe=new A.D(0,28,0)
B.fz3=new A.D(0,28,-8)
B.fz4=new A.D(0,29,40)
B.fz5=new A.D(0,2,14)
B.aRf=new A.D(0,30,0)
B.fz6=new A.D(0,31,-6)
B.aRg=new A.D(0,34,0)
B.fz7=new A.D(0,36,0)
B.fz8=new A.D(0,36,19)
B.fz9=new A.D(0,37,22)
B.fza=new A.D(0,3,0)
B.fzb=new A.D(0,3,-30)
B.fze=new A.D(0,40,150)
B.fzf=new A.D(0,40,17)
B.fzg=new A.D(0,40,40)
B.fzi=new A.D(0,40,-6)
B.fzj=new A.D(0,46,0)
B.aRi=new A.D(0,48,0)
B.TG=new A.D(0,4,-2)
B.fzm=new A.D(0,52,0)
B.fzn=new A.D(0,55,0)
B.fzo=new A.D(0,58,0)
B.fzp=new A.D(0,5,4)
B.fzq=new A.D(0,75,-30)
B.fzr=new A.D(0,7,0)
B.fzs=new A.D(0,7,-5)
B.aRj=new A.D(0,84,1)
B.Db=new A.D(0,8,0)
B.fzt=new A.D(0,8,6)
B.fzu=new A.D(0,8,-16)
B.fzv=new A.D(0,8,-19)
B.fzw=new A.D(0,8,-4)
B.fzx=new A.D(0,94,13)
B.fzy=new A.D(0,98,4)
B.aRk=new A.D(0,9,0)
B.aRl=new A.D(0,9,-3)
B.a7S=new A.D(0,-4,28)
B.fzz=new A.D(0,-4,-20)
B.fzC=new A.D(10,12,10)
B.fzD=new A.D(10,34,1)
B.fzE=new A.D(10,8,10)
B.fzF=new A.D(11,12,30)
B.fzG=new A.D(11,1,11)
B.fzH=new A.D(120,0,-30)
B.fzI=new A.D(120,28,22)
B.fzJ=new A.D(124,2,26)
B.fzK=new A.D(12,4,22)
B.fzL=new A.D(13,0,0)
B.fzM=new A.D(13,15,2)
B.fzN=new A.D(13,28,3)
B.fzO=new A.D(0,0.52,2.35)
B.fzP=new A.D(14,13,28)
B.fzQ=new A.D(14,17,4)
B.fzR=new A.D(14,20,-28)
B.fzS=new A.D(14,30,14)
B.fzT=new A.D(14,36,14)
B.fzV=new A.D(16,10,10)
B.fzW=new A.D(16,16,16)
B.aRm=new A.D(17,3,17)
B.fzX=new A.D(18,18,14)
B.fzY=new A.D(18,20,18)
B.fzZ=new A.D(18,22,2)
B.fA_=new A.D(18,28,16)
B.fA0=new A.D(18,2,18)
B.fA1=new A.D(18,6,0)
B.fA2=new A.D(18,9,11)
B.fA3=new A.D(19,13,7)
B.fA4=new A.D(70,0.6,50)
B.fA5=new A.D(0,3,-6.5)
B.fA6=new A.D(-4,20.4,0)
B.fA7=new A.D(1,1,0.64)
B.fA8=new A.D(-4.6,1.5,-3.6)
B.fA9=new A.D(0,-13.5,-1.5)
B.fAa=new A.D(4,10,3.5)
B.iH=new A.D(1,0,0)
B.fAb=new A.D(1,26,14)
B.fAc=new A.D(1,28,14)
B.aRn=new A.D(1,2,1)
B.aRo=new A.D(1,3,1)
B.aRp=new A.D(1,3,6)
B.fAe=new A.D(1,0.9,0.06)
B.fAg=new A.D(1.6,15,1.6)
B.aRq=new A.D(20,14,7)
B.fAh=new A.D(20,30,26)
B.fAi=new A.D(20,4,26)
B.fAj=new A.D(20,92,26)
B.fAk=new A.D(22,12,34)
B.fAl=new A.D(22,14,0)
B.fAm=new A.D(22,14,2)
B.fAn=new A.D(22,2,28)
B.fAo=new A.D(22,3,10)
B.fAp=new A.D(22,3,22)
B.fAq=new A.D(240,150,60)
B.fAr=new A.D(244,6,64)
B.fAs=new A.D(24,12,34)
B.fAt=new A.D(24,14,22)
B.fAu=new A.D(24,38,0)
B.aRr=new A.D(24,6,14)
B.fAv=new A.D(262,3,5)
B.fAw=new A.D(262,3,56)
B.fAx=new A.D(26,2,26)
B.aRs=new A.D(26,4,22)
B.fAy=new A.D(26,72,26)
B.fAz=new A.D(26,-34,96)
B.fAA=new A.D(28,80,100)
B.fAC=new A.D(-0.1,0,0)
B.fAD=new A.D(2,13,2)
B.aRt=new A.D(2,23,12)
B.aRu=new A.D(2,28,22)
B.fAF=new A.D(64,10,-1.4)
B.fAG=new A.D(19.6,0,-1.5)
B.aRv=new A.D(0,56,1.3)
B.fAH=new A.D(0,15.5,0)
B.fAI=new A.D(30,16,30)
B.aRw=new A.D(30,16,72)
B.fAJ=new A.D(30,22,0)
B.fAK=new A.D(30,24,8)
B.fAL=new A.D(30,28,18)
B.fAM=new A.D(30,29,0)
B.fAO=new A.D(32,2,20)
B.fAP=new A.D(33,11,10)
B.fAQ=new A.D(34,10,1)
B.fAR=new A.D(34,30,1)
B.fAS=new A.D(-1,-1.7,2.3)
B.fAT=new A.D(36,22,0)
B.fAU=new A.D(36,30,0)
B.fAV=new A.D(36,30,1)
B.fAW=new A.D(36,60,12)
B.fAX=new A.D(37,16,0)
B.fAY=new A.D(-0.2,-0.3,-0.4)
B.fAZ=new A.D(0,48.6,55)
B.aRx=new A.D(3,12,12)
B.fB0=new A.D(3,22,2)
B.fB1=new A.D(3,26,3)
B.a7T=new A.D(3,3,3)
B.fB2=new A.D(3,5,3)
B.fB4=new A.D(40,1,14)
B.fB5=new A.D(40,28,1)
B.fB6=new A.D(40,2,24)
B.fB7=new A.D(40,30,26)
B.fB8=new A.D(42,2,28)
B.fB9=new A.D(44,10,2)
B.aRz=new A.D(44,2,14)
B.fBa=new A.D(44,72,20)
B.fBb=new A.D(0.9,0,4.4)
B.fBc=new A.D(8.2,1.9,-7.55)
B.fBd=new A.D(46,10,34)
B.fBe=new A.D(46,26,2)
B.fBf=new A.D(48,2,24)
B.fBg=new A.D(120.6,140,-52)
B.fBh=new A.D(0,-47.25,-2.25)
B.fBi=new A.D(0.6,68,0.4)
B.fBj=new A.D(0,1.59,0.14)
B.fBk=new A.D(4,10,14)
B.fBl=new A.D(0,-3.4,1)
B.fBm=new A.D(25,79,1.4)
B.fBn=new A.D(1,0,-1.2)
B.fBo=new A.D(0.6,4,2.4)
B.fBp=new A.D(50,28,42)
B.fBq=new A.D(50,4,28)
B.fBr=new A.D(50,6,28)
B.fBs=new A.D(54,5,18)
B.fBt=new A.D(56,18,18)
B.fBu=new A.D(56,2,36)
B.fBv=new A.D(56,3,32)
B.fBw=new A.D(56,3,48)
B.fBx=new A.D(58,9,74)
B.fBy=new A.D(0,-0.8,0.9)
B.fBz=new A.D(11.9,0,-8)
B.fBA=new A.D(-26,146,-60.6)
B.fBB=new A.D(20,7,34.4)
B.aRA=new A.D(1.6,1.6,0.4)
B.fBD=new A.D(0.16,0.32,0.07)
B.aRB=new A.D(5,12,26)
B.fBE=new A.D(5,1,2)
B.fBF=new A.D(5,6,10)
B.fBG=new A.D(5,6,3)
B.fBH=new A.D(5,9,8)
B.fBI=new A.D(-120.1,150,0)
B.fBJ=new A.D(0,14.3,-1.5)
B.aRC=new A.D(-13,8.6,-9.5)
B.fBK=new A.D(60,12,80)
B.fBL=new A.D(60,30,3)
B.fBN=new A.D(62,18,20)
B.fBO=new A.D(62,22,6)
B.fBP=new A.D(64,10,0)
B.aRD=new A.D(6,14,20)
B.aRE=new A.D(6,14,32)
B.fBT=new A.D(6,28,6)
B.fBU=new A.D(6,4,4)
B.fBV=new A.D(262.4,112,1.2)
B.fBX=new A.D(0,-0.2,0.14)
B.fBZ=new A.D(120.6,140,-8)
B.fC_=new A.D(0.3,38,2)
B.fC0=new A.D(70,175,-45)
B.fC1=new A.D(70,194,-45)
B.fC2=new A.D(72,6,32)
B.fC3=new A.D(72,-17,70)
B.fC4=new A.D(12,5,0.4)
B.fC5=new A.D(76,8,36)
B.fC6=new A.D(1.6,1.7,3.6)
B.fC8=new A.D(-72.8,0,55)
B.fCa=new A.D(25,79,0.2)
B.fCb=new A.D(7,0,-8)
B.fCc=new A.D(7,2,7)
B.aRF=new A.D(7,3,0)
B.fCd=new A.D(7,8,3)
B.fCf=new A.D(-80,0.6,66)
B.fCg=new A.D(0,11,9.2)
B.fCh=new A.D(-3.2,1.3,-7.82)
B.fCi=new A.D(80,16,32)
B.fCj=new A.D(80,26,8)
B.aRG=new A.D(147,1.5,3.5)
B.fCk=new A.D(82,46,3)
B.aRH=new A.D(-6.5,6.9,-3)
B.fCl=new A.D(84,10,38)
B.fCm=new A.D(84,18,38)
B.fCn=new A.D(0.93,0.92,1)
B.fCo=new A.D(4.6,4.2,9.5)
B.fCp=new A.D(88,24,28)
B.fCq=new A.D(0.4,6,8)
B.fCr=new A.D(0,-48.6,55)
B.fCs=new A.D(2.6,2,2.6)
B.fCt=new A.D(5.5,8.5,3)
B.fCu=new A.D(0,0,0.26)
B.fCv=new A.D(120.6,96,-52)
B.fCw=new A.D(8,18,8)
B.aRI=new A.D(8,2,16)
B.fCx=new A.D(8,2,6)
B.aRJ=new A.D(8,2,8)
B.fCy=new A.D(8,4,4)
B.fCz=new A.D(8,8,12)
B.fCA=new A.D(8,9,8)
B.fCB=new A.D(8,9,9)
B.fCC=new A.D(15,19,0.5)
B.fCD=new A.D(92,2,32)
B.fCE=new A.D(96,14,38)
B.fCF=new A.D(0.4,0.38,0.12)
B.fCG=new A.D(0,0,-0.43)
B.aRK=new A.D(11.2,4.5,-6)
B.aRL=new A.D(1.2,96,112)
B.aRM=new A.D(0.08,3.8,2.4)
B.aRN=new A.D(9,1,9)
B.fCH=new A.D(9,40,4)
B.fCI=new A.D(9,5,9)
B.fCJ=new A.D(-3.5,26,15)
B.fCK=new A.D(1.5,1.3,0.6)
B.fCL=new A.D(-120.6,96,-8)
B.fCN=new A.D(0,-1.78,0.27)
B.fCO=new A.D(0,0.62,0)
B.fCR=new A.D(20,11.5,0)
B.fCS=new A.D(3.2,0.12,-6.7)
B.fCT=new A.D(12,0,-8.1)
B.fCV=new A.D(1.25,0.28,0.1)
B.fCW=new A.D(0,36,10.2)
B.fCX=new A.D(24,0.08,16)
B.fCZ=new A.D(0,4,-7.9)
B.fD_=new A.D(11.9,0,8)
B.fD0=new A.D(-26,146,0.6)
B.fD2=new A.D(21,1.4,8)
B.fD3=new A.D(0.8,0.8,1.6)
B.fD4=new A.D(1.4,1,1)
B.fD5=new A.D(26,146,-60.6)
B.fD7=new A.D(71.2,46.6,55)
B.fD8=new A.D(3,3.28,-7.2)
B.fD9=new A.D(1.4,0.3,1)
B.fDa=new A.D(-6.1,1.2,-6.4)
B.fDb=new A.D(1.4,26,0.4)
B.fDd=new A.D(2.8,3.4,2.4)
B.fDe=new A.D(26,0.3,130)
B.fDf=new A.D(0,-45.5,0.5)
B.fDg=new A.D(1.8,4,1)
B.fDh=new A.D(5,1.6,0.5)
B.fDj=new A.D(0,11,8.5)
B.fDk=new A.D(0.1,-2,2.4)
B.fDl=new A.D(0,0.2,2.8)
B.fDm=new A.D(6,10,1.4)
B.fDo=new A.D(43,23,0.3)
B.fDp=new A.D(0,10,5.2)
B.fDq=new A.D(0,-1.2,4.7)
B.fDr=new A.D(18.9,2.6,0)
B.fDs=new A.D(-12,0,-8.1)
B.fDt=new A.D(3,11,0.5)
B.fDu=new A.D(11.8,4,0)
B.fDv=new A.D(0.97,0.18,2.25)
B.aRO=new A.D(-71.7,6,55)
B.fDx=new A.D(5.6,0.3,1.9)
B.fDA=new A.D(52,8,0.4)
B.fDB=new A.D(4.6,7.6,3)
B.fDC=new A.D(-1,0,-1.2)
B.fDD=new A.D(0,1.7,0)
B.fDF=new A.D(-1,0,1.5)
B.fDG=new A.D(90,2,0.5)
B.fDH=new A.D(5,8,0.4)
B.fDI=new A.D(5,2.2,0.8)
B.fDJ=new A.D(-120.6,140,-52)
B.fDK=new A.D(0.18,0.12,0.08)
B.fDL=new A.D(0,0.3,184)
B.fDM=new A.D(147,3,1.4)
B.fDN=new A.D(4,16.2,0)
B.fDO=new A.D(60,0.4,12)
B.fDP=new A.D(10,15,0.5)
B.fDQ=new A.D(144,5,0.7)
B.fDR=new A.D(0,34,1.1)
B.fDS=new A.D(1.2,-1.7,2.3)
B.fDT=new A.D(31.5,23,0)
B.fDU=new A.D(-120.6,140,-8)
B.fDW=new A.D(0.82,1.7,0.3)
B.fDX=new A.D(47,7,34.4)
B.fDY=new A.D(-0.12,0,0)
B.fE_=new A.D(3.5,94,0.2)
B.fE0=new A.D(1.1,2.05,0.04)
B.fE1=new A.D(25,79,1.2)
B.fE2=new A.D(1.12,0.78,0.76)
B.fE3=new A.D(10,14,0.5)
B.fE4=new A.D(5,8,0.5)
B.fE5=new A.D(1.1,0.5,0.7)
B.fE6=new A.D(-20,11.5,0)
B.fE7=new A.D(0,-0.5,0.6)
B.fE8=new A.D(0,1.4,0)
B.fEa=new A.D(0,3.4,0.8)
B.fEc=new A.D(-0.85,4,-3.2)
B.fEe=new A.D(-7.1,19,4)
B.fEf=new A.D(40,7.2,1.2)
B.aRP=new A.D(0.42,0.34,0.12)
B.fEg=new A.D(1.7,0.08,1.2)
B.fEh=new A.D(0,0,0.38)
B.fEj=new A.D(5.2,3.9,-7.76)
B.fEl=new A.D(2.6,0.45,0.5)
B.fEm=new A.D(0.07,0.3,0.03)
B.fEo=new A.D(41.5,11,12)
B.fEq=new A.D(20,1.4,8)
B.fEr=new A.D(0,-0.2,0.19)
B.fEt=new A.D(1.2,49,36)
B.fEu=new A.D(0,9.3,0)
B.aRQ=new A.D(1.4,3,1.6)
B.fEw=new A.D(0,40,0.95)
B.fEx=new A.D(11,3,0.5)
B.fEz=new A.D(64,0.6,120)
B.fEA=new A.D(0,-1.9,-1.2)
B.fEB=new A.D(-3.2,1.15,-7.78)
B.fEC=new A.D(0,-3.4,1.2)
B.fED=new A.D(64,10,0.2)
B.fEE=new A.D(0,-1.78,0.53)
B.fEF=new A.D(3,0.2,3)
B.aRR=new A.D(-6.5,7.4,-3)
B.fEG=new A.D(0,76,1.1)
B.fEH=new A.D(-4.6,-2,1.2)
B.fEJ=new A.D(0,40,1.4)
B.fEK=new A.D(-3,36,10.6)
B.fEL=new A.D(0,14.5,-1.5)
B.fEM=new A.D(0,0.2,0)
B.fEO=new A.D(160,1.2,120)
B.fEP=new A.D(7,40,2.4)
B.fEQ=new A.D(30,26,0.6)
B.fER=new A.D(262.4,1.2,192)
B.fES=new A.D(3.4,3.25,-7.85)
B.fET=new A.D(1.12,0.5,0.62)
B.fEU=new A.D(72.8,0,55)
B.fEV=new A.D(0.5,62,30)
B.fEW=new A.D(2.2,1.1,6.4)
B.fEX=new A.D(3,1.55,-7.1)
B.fEY=new A.D(0.4,3,3)
B.aRU=new A.D(0,-0.1,0.1)
B.fEZ=new A.D(0,0,0.04)
B.fF_=new A.D(0,14,-19.3)
B.fF0=new A.D(2.4,11.6,-3.6)
B.fF1=new A.D(4,11,3.5)
B.fF3=new A.D(5,8.6,-2.25)
B.fF4=new A.D(0,-1.78,0.3)
B.fF5=new A.D(2.2,2.2,1.8)
B.fF6=new A.D(0,1.9,-1.2)
B.fF7=new A.D(0,56,2.1)
B.fF8=new A.D(0.26,0.04,0.02)
B.fF9=new A.D(-2.4,11.6,-3.6)
B.fFa=new A.D(11.25,0,-2.25)
B.fFb=new A.D(1,-1.8,2.4)
B.fFc=new A.D(-11.8,4,0)
B.fFd=new A.D(1.2,4,7)
B.fFe=new A.D(11.2,4.7,-6)
B.fFf=new A.D(24,8,0.05)
B.fFh=new A.D(0.12,0,0)
B.fFi=new A.D(1.1,1.1,0.03)
B.fFj=new A.D(-26,94,0.6)
B.fFk=new A.D(0,0.62,19.2)
B.fFl=new A.D(0,5,1.1)
B.fFm=new A.D(3.4,3.55,-7.85)
B.fFo=new A.D(71.6,-22,62)
B.fFq=new A.D(1,1,0.62)
B.aRV=new A.D(1.5,18,3.5)
B.fFs=new A.D(3.5,3.1,-7.15)
B.fFt=new A.D(0,1.5,-0.9)
B.fFu=new A.D(-0.28,0.55,-0.8)
B.fFv=new A.D(0,-0.2,0.24000000000000002)
B.fFx=new A.D(0,-3.3,4)
B.fFy=new A.D(1,-0.2,0.14)
B.aRW=new A.D(84,3,0.5)
B.fFz=new A.D(-1.9,0,-2.25)
B.fFA=new A.D(0,-0.9,1.1)
B.fFB=new A.D(8.2,1.05,-6.7)
B.fFC=new A.D(0,9.6,11.6)
B.fFF=new A.D(0.07,0.4,0.03)
B.fFG=new A.D(2,3.8,0.08)
B.fFH=new A.D(31,83,0.9)
B.fFI=new A.D(64,40,-3.2)
B.fFJ=new A.D(0.95,0.62,2.2)
B.aRX=new A.D(1.4,3,112)
B.fFK=new A.D(0,46.6,0.8)
B.fFM=new A.D(0,0,-8.8)
B.fFN=new A.D(0,0.7,-1)
B.fFQ=new A.D(-11.9,0,8)
B.fFR=new A.D(7,0,1.5)
B.fFS=new A.D(-8.4,0.7,-6.4)
B.fFT=new A.D(-3.2,1.45,-7.78)
B.fFU=new A.D(0,41,0.45)
B.fFV=new A.D(-6.575,0,-0.25)
B.fFX=new A.D(0,14.6,-1.5)
B.aRZ=new A.D(0,0,-2.3)
B.a7V=new A.D(-13,12.5,0)
B.fFZ=new A.D(0,0,0.62)
B.fG_=new A.D(0.2,-0.3,-0.4)
B.aS_=new A.D(10.85,18,0.5)
B.fG0=new A.D(120.1,174,-30)
B.fG1=new A.D(0.6,70,0.6)
B.fG2=new A.D(1.4,1.3,0.02)
B.fG3=new A.D(30,1.4,0.4)
B.fG4=new A.D(6.3,1.5,-7.2)
B.fG5=new A.D(-64,0.6,120)
B.fG6=new A.D(-120.1,150,-60)
B.fG7=new A.D(0,5,11.2)
B.aS0=new A.D(0,0.62,2.85)
B.fG8=new A.D(37.5,23,0)
B.aS1=new A.D(0.05,8,16)
B.fG9=new A.D(0,-1.2,5)
B.fGb=new A.D(0.2,-2,2.6)
B.fGe=new A.D(11.2,2.4,-5.18)
B.fGg=new A.D(-1,-0.2,0.14)
B.fGh=new A.D(1.2,1.2,0.3)
B.aS3=new A.D(2,0.08,2.4)
B.fGj=new A.D(9.5,13.5,1.4)
B.fGk=new A.D(2.2,18,2.2)
B.fGl=new A.D(22,0.2,0.8)
B.fGm=new A.D(-0.32,0,0.5)
B.fGo=new A.D(-120.1,174,-30)
B.fGp=new A.D(1,0.8,0.95)
B.fGq=new A.D(0.8,0.55,0.05)
B.fGr=new A.D(0.14,0.35,17)
B.fGs=new A.D(1.4,2.4,0.3)
B.fGt=new A.D(0,11,8.2)
B.fGu=new A.D(26,146,0.6)
B.fGv=new A.D(0,24,-0.6)
B.fGw=new A.D(40,1.6,14)
B.fGz=new A.D(-130.6,56,95)
B.fGA=new A.D(0,11.5,19.3)
B.fGB=new A.D(0,1.95,0.31)
B.fGC=new A.D(150,1.2,112)
B.aS4=new A.D(0.75,4.5,0.1)
B.fGE=new A.D(0.12,0,0.05)
B.fGG=new A.D(9,1.2,9)
B.fGH=new A.D(120.1,150,-60)
B.fGI=new A.D(0,-0.5,0)
B.fGL=new A.D(-2.4,14,8)
B.fGM=new A.D(64,0.2,120)
B.fGN=new A.D(5.5,8.5,0.5)
B.aS5=new A.D(0.05,8,9.6)
B.fGP=new A.D(1.5,94,3.5)
B.fGQ=new A.D(0,8.2,0)
B.fGR=new A.D(-120.6,96,-52)
B.fGS=new A.D(0,-0.6,95)
B.fGU=new A.D(4,94,0.4)
B.aS6=new A.D(1.4,8,1)
B.fGV=new A.D(120.6,96,-8)
B.fGW=new A.D(3.7,1.2,-7.1)
B.fGX=new A.D(8.2,0.05,-6.7)
B.fGY=new A.D(0,-0.3,0)
B.fGZ=new A.D(6.575,0,-0.25)
B.aS7=new A.D(0,1.8,0)
B.fH_=new A.D(3,3.21,-7.2)
B.fH0=new A.D(9,5,0.6)
B.fH2=new A.D(26,94,0.6)
B.fH3=new A.D(9.8,5,-7.75)
B.fH4=new A.D(1.5,3.5,112)
B.fH5=new A.D(22,7,34.4)
B.fH6=new A.D(3,1.85,-7.1)
B.fHa=new A.D(16,0.4,16)
B.fHb=new A.D(26,94,-60.6)
B.a7X=new A.D(13,12.5,0)
B.fHd=new A.D(0.34,0.66,0.9)
B.fHf=new A.D(0.9,1.08,0.98)
B.fHg=new A.D(12,0.4,6)
B.fHh=new A.D(-6.5,7.9,-3)
B.fHi=new A.D(0,13.6,-1.5)
B.fHj=new A.D(1.5,1.5,0.05)
B.fHk=new A.D(-6.5,5,-3)
B.fHl=new A.D(58.4,1.6,50)
B.fHm=new A.D(16,22,0.6)
B.fHn=new A.D(0.02,0.28,0.05)
B.fHo=new A.D(0,0.7,1)
B.fHp=new A.D(0,9.5,-7)
B.aS9=new A.D(13,8.6,9.5)
B.fHq=new A.D(-3.6,4,-7.76)
B.fHr=new A.D(130.6,56,95)
B.fHs=new A.D(0.82,0.9,0.05)
B.fHt=new A.D(0,-5.5,-0.25)
B.fHu=new A.D(0,11,21.2)
B.fHy=new A.D(0,0.6,0)
B.fHA=new A.D(1.9,0,0)
B.fHB=new A.D(0.45,0.72,0.06)
B.fHD=new A.D(14,0.4,7)
B.fHE=new A.D(64,24,-3.2)
B.aSa=new A.D(40,0.12,1.2)
B.fHF=new A.D(0,9.2,0)
B.fHG=new A.D(120.1,150,0)
B.fHH=new A.D(0,56,-0.6)
B.fHI=new A.D(0,0.03,0)
B.fHJ=new A.D(-10,22,0)
B.fHK=new A.D(-112,38,24)
B.fHL=new A.D(-120,0,-30)
B.fHM=new A.D(-13,15,2)
B.fHN=new A.D(-14,17,4)
B.fHO=new A.D(-14,20,-28)
B.fHP=new A.D(-18,6,0)
B.uB=new A.D(-1,0,0)
B.fHQ=new A.D(-1,0,-8)
B.fHR=new A.D(-20,4,26)
B.fHS=new A.D(-20,92,26)
B.fHT=new A.D(-22,14,0)
B.fHU=new A.D(-24,38,0)
B.fHW=new A.D(-37,16,0)
B.fHX=new A.D(-42,-34,96)
B.fHY=new A.D(0,-0.6,22)
B.fHZ=new A.D(-4,20,0)
B.aSb=new A.D(-4,20,8)
B.fI1=new A.D(-72,6,55)
B.fI2=new A.D(-80,12,30)
B.fI3=new A.D(-80,25,30)
B.fI5=new A.D(-8,42,-5)
B.fI6=new A.D(-8,-28,104)
B.fI7=new A.D(-8,-39,96)
B.fI8=new A.D(0,0.35,0.78)
B.fI9=new A.D(-11.9,0,-8)
B.fIa=new A.D(38,1.4,12)
B.fIb=new A.D(25,0.5,66)
B.fIc=new A.D(-8.4,1.9,-7.2)
B.fId=new A.D(1.6,8,5)
B.fIe=new A.D(0.8,1.6,1.4)
B.fIf=new A.D(0.85,1.15,0.9)
B.fIh=new A.D(25,6,0.2)
B.aSc=new A.D(1.25,1,0.1)
B.fIi=new A.D(11.2,0,-6)
B.fIj=new A.D(0.4,7,9)
B.fIk=new A.D(1.2,1.1,0.8)
B.fIm=new A.D(150,49,1.2)
B.fIn=new A.D(41.5,11,-12)
B.fIo=new A.D(62,0.2,42)
B.fIp=new A.D(4.6,1.5,-3.6)
B.fIq=new A.D(0,-0.7,0.8)
B.fIr=new A.D(8.9,1.9,0.9)
B.fIs=new A.D(-80,0.2,66)
B.fIt=new A.D(0,-1.55,-0.6)
B.fIu=new A.D(1.78,4.25,0.08)
B.fIv=new A.D(27,0.6,19)
B.fIw=new A.D(0,5.5,-0.25)
B.fIx=new A.D(28,2.5,26)
B.fIy=new A.D(2,0.2,6)
B.aSd=new A.D(0,0.7,0)
B.fIz=new A.D(-1.2,-1.6,2.2)
B.fIA=new A.D(11,25,0.3)
B.aSe=new A.D(-12,14,19.4)
B.aSf=new A.D(13,8.6,-9.5)
B.aSg=new A.D(0.05,0.12,0.03)
B.aSh=new A.D(8.2,0.95,-6.7)
B.fIB=new A.D(40,1.2,22)
B.fIC=new A.D(0.7,1.5,-7.2)
B.fID=new A.D(0,15.3,-3.6)
B.fIE=new A.D(62,2.4,8)
B.fIF=new A.D(-1.6,11,6)
B.fIG=new A.D(0.1,0,0)
B.fIH=new A.D(0.32,0,0.5)
B.fII=new A.D(1.6,11,6)
B.fIJ=new A.D(1.1,0.8,0.6)
B.fIL=new A.D(-0.9,0,4.4)
B.fIM=new A.D(-6.5,7.2,-3)
B.fIO=new A.D(6.2,0.18,2.1)
B.fIP=new A.D(7.1,18,-3)
B.fIR=new A.D(36,1.6,12)
B.fIS=new A.D(15.5,2.6,0)
B.fIU=new A.D(-8,-47.8,70)
B.fIV=new A.D(14,1.5,3.5)
B.aSi=new A.D(17,24,0.3)
B.fIW=new A.D(5.2,3.9,-7.82)
B.fIX=new A.D(-64,0.2,120)
B.fIY=new A.D(0,0.7,2.4)
B.aSj=new A.D(0,0.3,0)
B.aSk=new A.D(2.3,7,0.5)
B.aSl=new A.D(-13,8.6,9.5)
B.fJ0=new A.D(-26,94,-60.6)
B.fJ2=new A.D(6.5,6,14)
B.fJ3=new A.D(0,-1.99,0.14)
B.fJ4=new A.D(0.4,36,34)
B.fJ6=new A.D(4.6,-2,1.2)
B.fJ7=new A.D(0,14,19.3)
B.aSm=new A.D(0,0,-2.4)
B.fJ8=new A.D(0,-1.78,0.52)
B.fJ9=new A.D(0.12,0.1,0.03)
B.fJa=new A.D(9.8,5,-7.58)
B.fJb=new A.D(14,1.5,5)
B.aSn=new A.D(0.5,1.4,2)
B.fJc=new A.D(3.5,0.15,-7.2)
B.aSo=new A.D(64,2,1.2)
B.fJd=new A.D(1.2,26.4,20)
B.fJe=new A.D(-3.6,4,-7.82)
B.fJf=new A.D(0.3,2,36)
B.fJh=new A.D(24,0.8,6.5)
B.fJj=new A.D(22,0.5,5)
B.fJk=new A.D(9,10,0.6)
B.fJl=new A.D(0,22,2.1)
B.fJo=new A.D(0,56,0.5)
B.fJp=new A.D(150,1.2,70)
B.fJq=new A.D(2.1,0.4,0.5)
B.fJr=new A.D(-19.5,-1,-1.5)
B.fJs=new A.D(80,0.5,60)
B.fJt=new A.D(6.85,4,-3.2)
B.aSq=new A.D(0.12,3,1.9)
B.fJu=new A.D(0.06,0.62,0.8)
B.fJv=new A.D(0,18.5,0)
B.fJx=new A.D(9.55,5.7,-7.5)
B.fJz=new A.D(0.8,2.4,0.3)
B.aSr=new A.D(0,0.7,2)
B.fJA=new A.D(3.5,26,15)
B.fJB=new A.D(0.8,1.1,1.2)
B.fJC=new A.D(2.4,14,8)
B.aSs=new A.D(1.2,112,190)
B.fJD=new A.D(0,47.25,-2.25)
B.fJE=new A.D(0.5,0.5,0.04)
B.fJF=new A.D(12.5,39,0.6)
B.fJG=new A.D(0,3,0.9)
B.fJH=new A.D(3,36,10.6)
B.fJI=new A.D(25,10,0.2)
B.fJK=new A.D(0.14,8,0.3)
B.fJL=new A.D(1.9,0.05,1.35)
B.fJO=new A.D(0.6,0.12,0.03)
B.fJP=new A.D(-10.7,1.2,-6.4)
B.fJQ=new A.D(-71.2,46.6,55)
B.fJR=new A.D(5,4.5,3)
B.fJS=new A.D(0,3.7,2.6)
B.fJT=new A.D(40,0.6,40)
B.fKq=new A.BS("noGround","It works, but there is no ground wire. Without a ground nothing protects you if an appliance fails.",!0,!1,!1)
B.fKr=new A.BS("short","A hot wire touched the ground. That is a short circuit: huge current, sparks and fire. The breaker slams off.",!1,!0,!0)
B.fKs=new A.BS("reversed","Hot and neutral are swapped (reversed polarity). Things still run, but the metal part of a lamp or appliance is live. That can shock someone. Black goes on brass, white on silver.",!0,!1,!1)
B.fKt=new A.BS("dead","The hot wire is not connected to the right place, so nothing gets power. The device is dead.",!1,!1,!1)
B.fKu=new A.BS("ok","Wired correctly. Hot, neutral and ground are all in the right place.",!0,!1,!1)
B.fKv=new A.BS("bonded","The neutral and the ground were joined. A GFCI or the breaker may trip for no reason, and current can flow where it should not.",!0,!0,!1)
B.fKw=new A.BS("openNeutral","The neutral wire is not connected. Nothing runs, but the hot wire is still connected, so the slots can still be live. That is dangerous.",!1,!1,!1)
B.fKx=new A.BS("dead","The wires are on the taped LOAD screws, so no power reaches the outlet. Power comes in on LINE.",!1,!1,!1)
B.fKy=new A.BS("short","The hot and the neutral were joined together. That is a short circuit: a bang, sparks and a tripped breaker.",!1,!0,!0)
B.etA=new C.y(-20,46)
B.fN8=new A.zX(B.etA,0,2.4,"Having the drink",!0,!1,!1,"")
B.edt=new C.y(34,62)
B.fN9=new A.zX(B.edt,3.141592653589793,2.2,"Picking up the remote",!1,!0,!1,"")
B.fNh=new A.azu(null)})();(function staticFields(){$.jO=0
$.fO1=C.T(x.N,C.ax("LJ"))
$.fO0=C.T(x.N,C.ax("ay<LJ?>"))
$.a34=null
$.Dv=null
$.cah=null
$.h5q=null
$.aOA="xbot"})();(function lazyInitializers(){var w=a.lazyFinal
w($,"ieo","ho6",()=>C.a([A.aSL("Wire a standard 120 volt receptacle: black to brass, white to silver, bare copper to green.",B.PZ,B.ddn,"outlet",B.cLu,"Wall outlet",new A.fpz()),A.aSL("A single-pole switch breaks the hot wire to the light: two black wires go on the two brass screws.",B.cZe,B.cM5,"switch",B.cK4,"Light switch",new A.fpA()),A.aSL("A GFCI protects you near water. Power comes in on LINE. The LOAD screws (covered with tape) feed other outlets.",B.PZ,B.cTl,"gfci",B.d0T,"GFCI outlet",new A.fpB()),A.aSL("Join the house wires to the fixture wires with wire nuts: black to black, white to white, ground to ground.",B.PZ,B.cKc,"light",B.dct,"Ceiling light",new A.fpC()),A.aSL("A fan hangs from a strong fan-rated box. Join black, white and ground with wire nuts, then fasten the canopy.",B.PZ,B.cKd,"fan",B.cR3,"Ceiling fan",new A.fpD())],C.ax("O<a3C>")))
w($,"iez","Gr",()=>{var v,u=C.a([],x.n)
for(v=0;v<10;++v)u.push(-72+16*v)
return u})})()};
(a=>{a["rhDzpKPRthGPSQpNpuUwduA8fU4="]=a.current})($__dart_deferred_initializers__);