((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,C,D,A1,A7,A8,A9,G,Q,I,Aa,Ab,Ac,R,Ad,Ae,Af,M,A2,S,Ag,V,Ah,W,A3,Ai,X,Y,Aj,Ak,H,Al,T,U,Z,A4,A5,A_,A6,Am,N,A={eZV:function eZV(d,e){this.a=d
this.b=e},a9N:function a9N(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.at=g
_.CW=h
_.a=i
_.$ti=j},aeg:function aeg(d,e){var _=this
_.d=null
_.e=$
_.Gc$=d
_.c=_.a=null
_.$ti=e},bpu:function bpu(d){this.a=d},aNP:function aNP(){},
o5(d,e,f){var w=d.a,v=d.b,u=d.c
return new A.q(w+(e.a-w)*f,v+(e.b-v)*f,u+(e.c-u)*f)},
vD(d,e){var w=Math.cos(e),v=Math.sin(e),u=d.a,t=d.c
return new A.q(u*w+t*v,d.b,-u*v+t*w)},
nC(d,e,f,g){var w,v,u,t,s,r,q,p,o=new A.fZk(Math.cos(e),Math.sin(e)),n=new A.fZi(f),m=new A.fZj(n,e,o,g),l=new A.fZh(n,e,o),k=C.a([],x.z)
for(w=d.length,v=x.o,u=0;u<d.length;d.length===w||(0,C.L)(d),++u){t=d[u]
s=C.a([],v)
for(r=t.a,q=r.length,p=0;p<r.length;r.length===q||(0,C.L)(r),++p)s.push(m.$1(r[p]))
k.push(new A.kp(s,l.$1(t.b),t.c,t.d,t.e,t.f,t.r,t.w,t.x,t.y,t.z))}return k},
H7(d,e,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
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
l=Math.min(e,n.guV()*0.5)
k=Math.min(e,m.guV()*0.5)
j=n.gmU(0)
i=new A.q(q-j.a*l,p-j.b*l,o-j.c*l)
j=m.gmU(0)
h=new A.q(q+j.a*k,p+j.b*k,o+j.c*k)
for(g=0;g<=a0;++g){f=g/a0
w.push(A.o5(A.o5(i,s,f),A.o5(s,h,f),f))}}w.push(D.d.gak(d))
return w},
ai8(a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2
if(a3.length<3)return a3
w=C.a([],x.o)
for(v=0;u=v+1,t=a3.length,u<t;v=u){s=v===0?a3[v]:a3[v-1]
r=a3[v]
q=a3[u]
p=v+2
o=p<t?a3[p]:q
for(t=s.a,p=r.a,n=q.a,m=o.a,l=s.b,k=r.b,j=q.b,i=o.b,h=s.c,g=r.c,f=q.c,e=o.c,d=0;d<a4;++d){a0=d/a4
a1=a0*a0
a2=new A.fZ6(a0,a1,a1*a0)
w.push(new A.q(a2.$4(t,p,n,m),a2.$4(l,k,j,i),a2.$4(h,g,f,e)))}}w.push(D.d.gak(a3))
return w},
hEO(){if($.hdS)return
$.hdS=!0
C.az().bM(new A.bJF(),x.P).eR(new A.bJG())},
hdT(){C.az().bM(new A.bJH(),x.P).eR(new A.bJI())},
hZI(d){var w,v,u,t,s,r,q,p,o,n
for(w=d.length,v=!0,u=!0,t=0;t<w;++t)if(d[t].c>=0.5)u=!1
else v=!1
if(v)return d
if(u)return B.rK
s=C.a([],x.o)
for(r=0;w=d.length,r<w;){q=d[r];++r
p=d[r%w]
w=q.c
o=w>=0.5
n=p.c
if(o)s.push(q)
if(o!==n>=0.5)s.push(A.o5(q,p,(0.5-w)/(n-w)))}return s},
h7L(a2,a3,a4){var w,v,u,t,s,r,q,p=J.a6(a2),o=p.h(a2,0).a,n=p.h(a2,0).b,m=p.h(a2,1).a,l=p.h(a2,1).b,k=p.h(a2,2).a,j=p.h(a2,2).b,i=p.h(a2,3).a,h=p.h(a2,3).b,g=m-k,f=i-k,e=o-m+k-i,d=l-j,a0=h-j,a1=n-l+j-h
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
i_A(d,e,f,g){var w,v=e.d,u=e.e,t=A.h7L(f,v,u)
if(t==null)return
w=d.a
J.bl(w.save())
d.aw(0,t.a)
w.clipRect(C.bG(new C.a3(0,0,v,0+u)),$.mw()[1],!0)
e.c.$3(d,new C.av(v,u),g)
w.restore()},
i_B(d,e,f,g,h,i){var w,v,u,t,s,r,q,p,o,n,m,l,k=e.d,j=e.e
$.S()
w=new C.p0()
e.c.$3(C.z8(w,null),new C.av(k,j),i)
v=w.ni()
u=k/g
t=j/h
for(s=f.length,r=d.a,q=0+u,p=0+t,o=0;o<f.length;f.length===s||(0,C.L)(f),++o){n=f[o]
m=A.h7L(n.c,u,t)
if(m==null)continue
J.bl(r.save())
l=m.a
r.concat(C.fZc(C.Hb(l)))
r.clipRect(C.bG(new C.a3(0,0,q,p)),$.mw()[1],!0)
r.translate(-n.a*u,-n.b*t)
n=v.b
n===$&&C.c()
n=n.a
n===$&&C.c()
n=n.a
n.toString
r.drawPicture(n)
r.restore()}v.q()},
h4t(d,e,f,g,h,i,j,k,l,m){return new A.avz(l,e,h,k,i,f,g,d,m,j,null)},
hYW(a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=$.hcc()
C.E2(a4)
w=a3.a.get(a4)
if(w!=null)return w
v=new A.PQ(!0,C.a([],x.z),C.a([],x.t))
a3=x.S
u=x.gf
t=C.U(a3,u)
s=C.U(a3,u)
r=a4.a
for(q=0;q<r.length;++q){p=r[q]
a3=p.z
u=a3!==0
if(u&&s.h(0,a3)!=null){s.h(0,a3).rW(0,p,q)
continue}for(o=p.a,n=o.length,m=1/0,l=-1/0,k=1/0,j=-1/0,i=1/0,h=-1/0,g=0;g<n;++g){f=o[g]
e=f.a
if(e<m)m=e
if(e>l)l=e
d=f.b
if(d<k)k=d
if(d>j)j=d
a0=f.c
if(a0<i)i=a0
if(a0>h)h=a0}if(l-m>90||j-k>90||h-i>90){v.rW(0,p,q)
continue}a1=t.c3(0,((D.k.bf(m/60)+4096)*8192+(D.k.bf(k/60)+4096))*8192+(D.k.bf(i/60)+4096),new A.fjN())
a1.rW(0,p,q)
if(u)s.n(0,a3,a1)}a3=C.a([v],x.f5)
D.d.v(a3,new C.bd(t,t.$ti.k("bd<2>")))
a2=new A.cLo(a3)
$.hcc().n(0,a4,a2)
return a2},
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
cX:function cX(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
hh:function hh(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
tT:function tT(d,e,f,g,h,i){var _=this
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
fl:function fl(d){var _=this
_.a=d
_.c=_.b=0
_.d=1
_.e=0
_.f=2
_.r=!1
_.x=_.w=0},
c_Y:function c_Y(d,e){this.a=d
this.b=e},
c_Z:function c_Z(d){this.a=d},
c_X:function c_X(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
c0_:function c0_(d,e,f){this.a=d
this.b=e
this.c=f},
c_W:function c_W(d,e){this.a=d
this.b=e},
c00:function c00(d,e,f){this.a=d
this.b=e
this.c=f},
fZk:function fZk(d,e){this.a=d
this.b=e},
fZi:function fZi(d){this.a=d},
fZj:function fZj(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fZh:function fZh(d,e,f){this.a=d
this.b=e
this.c=f},
fZ6:function fZ6(d,e,f){this.a=d
this.b=e
this.c=f},
xg:function xg(d,e,f,g,h){var _=this
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
_.T$=h
_.by$=_.bJ$=0},
bJF:function bJF(){},
bJG:function bJG(){},
bJH:function bJH(){},
bJI:function bJI(){},
bJK:function bJK(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bJJ:function bJJ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
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
bUW:function bUW(d){this.a=d},
b6s:function b6s(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
cDr:function cDr(d,e){this.a=d
this.b=e},
G3:function G3(d,e,f,g,h,i,j,k,l){var _=this
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
avz:function avz(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
bs4:function bs4(d,e,f,g,h,i){var _=this
_.d=$
_.e=d
_.f=e
_.r=f
_.w=1
_.x=0
_.y=g
_.bx$=h
_.a8$=i
_.c=_.a=null},
f2o:function f2o(d){this.a=d},
f2n:function f2n(d){this.a=d},
f2k:function f2k(d){this.a=d},
f2l:function f2l(d){this.a=d},
f2m:function f2m(d){this.a=d},
f2i:function f2i(d){this.a=d},
f2j:function f2j(d,e){this.a=d
this.b=e},
PQ:function PQ(d,e,f){var _=this
_.a=d
_.b=e
_.c=f
_.d=1/0
_.e=-1/0
_.f=1/0
_.r=-1/0
_.w=1/0
_.x=-1/0},
cLo:function cLo(d){this.a=d},
fjN:function fjN(){},
aNY:function aNY(){},
bTQ(d){var w,v,u=$.h12.h(0,d)
if(u!=null)return C.f8(u,x.c)
w=B.Sa.h(0,d)
if(w==null)return C.f8(null,x.c)
v=$.h11.h(0,d)
if(v==null){v=new A.bTR(w,d).$0()
$.h11.n(0,d,v)}return v},
aWf(d){var w=0,v=C.j(x.H),u
var $async$aWf=C.e(function(e,f){if(e===1)return C.f(f,v)
for(;;)switch(w){case 0:w=2
return C.b(A.bTQ(d),$async$aWf)
case 2:u=J.aW(B.Sa.gev(B.Sa))
case 3:if(!u.C()){w=4
break}w=5
return C.b(A.bTQ(u.gS(u)),$async$aWf)
case 5:w=3
break
case 4:return C.h(null,v)}})
return C.i($async$aWf,v)},
hHU(d){var w,v,u=new Float64Array(d*16)
for(w=0;w<d;++w){v=w*16
u[v+15]=1
u[v+10]=1
u[v+5]=1
u[v]=1}return u},
hfq(d,e,f){var w,v,u,t
if(d>e){w=d
v=e}else{w=e
v=d}if(w>f){u=w
w=f}else u=f
if(v>w){t=w
w=v
v=t}return(v*65536+w)*65536+u},
hHV(d,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=d.c,g=d.b===1,f=g?4:3,e=h.length
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
hfr(d,a0,a1,a2,a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
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
i7m(d,e){var w=D.o.aD(d,16)&255,v=D.o.aD(d,8)&255,u=d&255,t=0.35+(0.299*w+0.587*v+0.114*u)/255,s=new A.fxt()
return C.a_(255,s.$2(w,e.gb6(e)*255*t),s.$2(v,e.gbc()*255*t),s.$2(u,e.gb9(e)*255*t))},
bc7:function bc7(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
bcs:function bcs(d,e){this.b=d
this.c=e},
bhB:function bhB(d,e,f){this.a=d
this.b=e
this.c=f},
dp7:function dp7(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=$},
MC:function MC(d,e,f,g,h){var _=this
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
bTR:function bTR(d,e){this.a=d
this.b=e},
bTI:function bTI(){},
bTC:function bTC(d,e){this.a=d
this.b=e},
bTB:function bTB(){},
bTK:function bTK(d,e,f){this.a=d
this.b=e
this.c=f},
bTL:function bTL(d){this.a=d},
bTM:function bTM(d){this.a=d},
bTJ:function bTJ(d,e){this.a=d
this.b=e},
bTG:function bTG(d){this.a=d},
bTH:function bTH(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
bTP:function bTP(d){this.a=d},
bTN:function bTN(){},
bTO:function bTO(d){this.a=d},
bTS:function bTS(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
bTD:function bTD(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
bTF:function bTF(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bTE:function bTE(d,e){this.a=d
this.b=e},
fxt:function fxt(){},
duF:function duF(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
djj:function djj(d,e){this.a=d
this.b=e},
hEu(){var w,v=J.e_(6,x.ff)
for(w=0;w<6;++w)v[w]=new A.aT6()
return new A.bHY(v)},
afW(d){return A.i_9(d)},
i_9(d){var w=0,v=C.j(x.eT),u,t=2,s=[],r,q,p,o,n
var $async$afW=C.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:if(d==null){u=null
w=1
break}t=4
w=7
return C.b(C.fCz(d,null),$async$afW)
case 7:r=f
n=J
w=8
return C.b(r.lL(),$async$afW)
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
return C.i($async$afW,v)},
hy_(a5,a6,a7,a8,a9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
if(a8.a){w=a7/8
if(a9===0){v=D.k.bf(w)
A.nh(a5,a6,a7,D.o.F(v,2)===0?0:1+D.o.ao(v,2))}else A.nh(a5,a6,a7,a9+1+D.k.bf(w))
return}u=B.a5i[a8.e]
w=a6.a
t=a6.b
s=0+t
r=new C.a3(0,0,0+w,s)
$.S()
q=C.I()
q.sam(new C.a9(D.a5,D.a8,D.x,C.a([u.b,u.c],x.O),null,null).aA(0,r))
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
g=C.bK(new C.t(i/2,h/2),o/v,j/v)
j=a5.a
J.bl(j.save())
o=t*0.05
j.clipRRect(C.e6(C.br(k,new C.aP(o,o))),$.nD(),!0)
o=C.I()
o.Q=D.ci
a5.oC(l,g,k,o)
j.restore()
f=p+m*0.8}else f=m
e=a8.w
if(e==null)e=$.W9
p=t*0.3
o=f+p
p=m+p
d=new C.a3(f,m,o,p)
j=d.gbK()
o-=f
i=C.I()
i.r=B.F7.gp(0)
a5.ad(j,o/2,i)
if(e!=null){j=e.c
i=e.d
v=Math.min(o*0.8/j,(p-m)*0.8/i)
o=C.bK(d.gbK(),i*v,j*v)
h=C.I()
h.Q=D.ci
a5.oC(e,new C.a3(0,0,j,i),o,h)}o=new A.fQe()
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
j.clipRect(C.bG(r),$.mw()[1],!0)
t=C.I()
t.r=D.c.j(0.1).gp(0)
a5.aO(new C.a3(a4,0,a4+w*0.1,s),t)
j.restore()},
i8F(d,e){var w,v,u,t,s=d.w
if(s.length===0){s=d.e
w=d.r
return new C.cy([-s/2,s/2,w+d.f,w])}v=s[e]
s=v.e
u=d.e*s
t=d.r+v.d
return new C.cy([-u/2,u/2,t+d.f*s,t])},
bBK(d,e,f,g){var w,v,u,t,s,r,q,p,o=new C.a3(0,0,0+e.a,0+e.b)
$.S()
w=C.I()
w.r=B.bii.gp(0)
d.aO(o,w)
v=o.cq(-(e.gdC()*0.06))
w=d.a
J.bl(w.save())
w.clipRect(C.bG(v),$.mw()[1],!0)
u=v.a
t=v.b
w.translate(u,t)
u=v.c-u
t=v.d-t
if((g&1)===0){s=0+u
r=0+t
q=C.I()
q.sam(B.c5q.aA(0,new C.a3(0,0,s,r)))
d.aO(new C.a3(0,0,s,r),q)
p=t*0.82
J.bl(w.save())
w.translate((u-p)/2,(t-p)/2)
A.hy4(d,new C.av(p,p),f)
w.restore()}else A.nh(d,new C.av(u,t),f,g)
w.restore()},
i3K(d,e,f){var w,v,u,t,s=e.a,r=e.b
$.S()
w=C.I()
w.r=B.bqH.gp(0)
d.aO(new C.a3(0,0,0+s,0+r),w)
v=C.I()
v.r=L.ahg.gp(0)
w=s*0.12
u=r*0.07
t=w+s*0.76
d.aO(new C.a3(w,u,t,u+r*0.38),v)
u=r*0.52
d.aO(new C.a3(w,u,t,u+r*0.4),v)
u=C.I()
u.r=F.fz.gp(0)
d.ad(new C.t(s*0.82,r*0.5),s*0.05,u)},
h8r(d9,e0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6=x.z,d7=C.a([],d6),d8=new A.fl(d7)
d8.f=0
d8.GD(B.hcm,B.h1N,B.h1M,B.hcl,B.bkh,B.ea)
d8.f=1
d8.GD(B.h6G,B.h4t,B.hdR,B.h6a,B.Mr,B.ea)
for(w=-2100;w<2100;w+=90){v=w+45
d8.GD(new A.q(w,0.8,637),new A.q(v,0.8,637),new A.q(v,0.8,643),new A.q(w,0.8,643),L.M5,B.ea)}d8.f=2
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
case"far3":n=D.aE
break
case"skyline":n=D.br
break
case"lines6":n=D.aP
break
case"scatter":n=D.b8
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
b2=new A.fyS(a8)
b3=C.a([],d6)
b4=new A.fl(b3)
b4.f=l
b5=C.a([],d6)
b6=new A.fl(b5)
b6.f=l
b7=A.i8F(d9,a7).a
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
c7=new A.fl(b5)
c8=Math.max(6,b0*0.018)
c9=new A.fyT(i,l)
switch(q?"sep":p){case"tower":c7.dN(new A.q(0,0,a0),new A.q(0,a6,a0),c8*1.9,D.hi,12)
c7.dN(new A.q(0,0,a0),new A.q(0,14,a0),c8*2.8,D.av,12)
break
case"screen":c7.aP(new A.q(0,7,-10),new A.q(b0*0.6,14,70),D.av)
c7.aP(new A.q(0,a4,a0),new A.q(60,a5,14),D.hi)
break
case"roof":c7.nc(B.fYG,B.h3J,B.bgk,0.1,4)
c7.nc(B.fZk,B.h3P,D.dv,0.15,4)
c7.hr(B.fZ_,B.h3O,D.dv,4)
c7.nc(B.hcA,B.h0W,B.bhA,0.1,2)
c7.hr(B.hcz,B.h17,D.dv,2)
c7.aP(B.h1i,B.h2C,B.nT)
c7.aP(B.fYv,B.h_G,D.ek)
c9.$6$px(B.haE,0,210,126,new A.fyL(),360)
c9.$6$px(B.hbF,0,210,126,new A.fyM(),360)
c9.$6$px(B.h7o,0,72,116,A.ihX(),140)
c9.$6$px(B.hf5,0,130,80,new A.fyN(),300)
for(d0=0;d0<3;++d0){d1=-60-d0*90
c9.$6$px(new A.q(310.8,140,d1),1.5707963267948966,80,64,new A.fyO(d0),240)
c9.$6$px(new A.q(310.8,55,d1),1.5707963267948966,60,60,A.haS(),200)}for(d0=0;d0<2;++d0){d1=-65-d0*110
c9.$6$px(new A.q(-490.8,95,d1),-1.5707963267948966,90,60,new A.fyP(d0),240)
c9.$6$px(new A.q(-490.8,40,d1),-1.5707963267948966,50,50,A.haS(),180)}c9.$6$px(new A.q(0,100,-285.8),3.141592653589793,580,170,A.hxR(),900)
break
case"gate":for(b3=b0/2+25,b7=s+b1,c4=b7+26,c5=c8*1.6,d2=0;d2<2;++d2){d3=F.hB[d2]*b3
c7.dN(new A.q(d3,0,a0),new A.q(d3,c4,a0),c5,D.hi,12)}c7.aZ(new A.q(0,b7+17,a0),new A.q(b0+80,18,22),D.hi,0.2)
break
default:for(b3=s+a8.d-7,d2=0;d2<2;++d2){b7=F.hB[d2]*b0*0.3
c7.dN(b2.$1(new A.q(b7,0,a0)),b2.$1(new A.q(b7,b3,a0)),c8,D.hi,10)}if(d)c7.aP(new A.q(0,a3,14),new A.q(c4,3,24),D.hi)}D.d.v(d7,b5)
d4=h[a7]
i.push(new A.fP(C.a([b2.$1(new A.q(b8,c0,0.8)),b2.$1(new A.q(b9,c0,0.8)),b2.$1(new A.q(b9,c1,0.8)),b2.$1(new A.q(b8,c1,0.8))],g),0,new A.fyQ(d4,a7),k,j,60,l,0,!1))
i.push(new A.fP(C.a([b2.$1(new A.q(b9,c0,e)),b2.$1(new A.q(b8,c0,e)),b2.$1(new A.q(b8,c1,e)),b2.$1(new A.q(b9,c1,e))],g),0,new A.fyR(d4,a7),k,j,60,l,0,!1))}d6=C.a([],d6)
d5=new A.fl(d6)
for(d2=0;d2<9;++d2){v=B.d1M[d2]
w=v.a
d1=v.b
if(m&&d1>200)continue
d5.dN(new A.q(w,0,d1),new A.q(w,55,d1),7,B.q7,6)
d5.ec(new A.q(w,98,d1),46,E.Xw,3,6)}for(d2=0;d2<6;++d2){w=B.drv[d2]
d5.dN(new A.q(w,0,580),new A.q(w,90,580),3,D.hi,5)
d5.ec(new A.q(w,95,580),8,B.o4,3,6)}D.d.v(d7,d6)
return new A.tT(d7,B.Sf,B.zs,i,null,6000)},
hqk(d){return d*d*(3-2*d)},
fkV(d,e,f,g,h){var w=new A.fkW(h)
return new A.q(w.$4(d.a,e.a,f.a,g.a),w.$4(d.b,e.b,f.b,g.b),w.$4(d.c,e.c,f.c,g.c))},
hrg(d,e,f){var w,v,u,t,s,r,q,p,o,n,m=D.k.E(e,0,30)
if(f==null){w=C.a([],x.n)
for(v=J.a6(d),u=0;u<v.gL(d);++u)w.push(30*u/(v.gL(d)-1))
t=w}else t=f
w=J.a6(d)
v=J.a6(t)
s=0
for(;;){r=s+2
if(!(r<w.gL(d)&&v.h(t,s+1)<=m))break;++s}w=s+1
q=A.hqk(D.k.E((m-v.h(t,s))/(v.h(t,w)-v.h(t,s)),0,1))
v=new A.foj(d)
p=s-1
o=A.fkV(v.$1(p).a,v.$1(s).a,v.$1(w).a,v.$1(r).a,q)
n=A.fkV(v.$1(p).b,v.$1(s).b,v.$1(w).b,v.$1(r).b,q)
r=Math.sin(m*1.3)
v=Math.sin(m*1.9)
w=Math.cos(m*1.1)
return new C.z(new A.q(o.a+r*3,Math.max(o.b+v*2.5,18),o.c+w*3),n)},
i7u(d){return $.i7t.c3(0,d.a,new A.fxz(d))},
htI(d){return $.i7v.c3(0,d.a,new A.fxw(d))},
i8E(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=d.a
if(i==="scatter")return A.hrg(B.dfA,e,null)
if(d.w.length!==0)return A.hrg(A.htI(d),e,A.i7u(d))
w=B.dxj.h(0,i)
if(w==null)w=B.aP8
v=B.cvs[w.a]
u=w.b?-1:1
t=new A.q(d.ga4w(0),d.r+d.gGP()/2,d.ga4x())
s=new A.fyD(t,u,d)
r=new A.fyE(t,u,d)
q=D.k.E(e,0,30)
i=v.length
p=0
for(;;){o=p+2
if(!(o<i&&v[p+1].a<=q))break;++p}i=v[p].a
n=p+1
m=A.hqk(D.k.E((q-i)/(v[n].a-i),0,1))
i=new A.fyF(v)
l=p-1
k=A.fkV(s.$1(i.$1(l)),s.$1(i.$1(p)),s.$1(i.$1(n)),s.$1(i.$1(o)),m)
j=A.fkV(r.$1(i.$1(l)),r.$1(i.$1(p)),r.$1(i.$1(n)),r.$1(i.$1(o)),m)
return new C.z(new A.q(k.a,Math.max(k.b,18),k.c),j)},
lG:function lG(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
rc:function rc(d,e,f,g,h,i,j,k,l,m){var _=this
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
bI_:function bI_(d){this.a=d},
Hq:function Hq(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
aT6:function aT6(){var _=this
_.a=!0
_.b="NEW GLOBAL MOVEMENT FOR YOUTH"
_.c="Videos, slides, blogs and books."
_.d="ngmy.org"
_.e=0
_.x=_.w=_.r=_.f=null},
bHY:function bHY(d){this.a="highway"
this.b=d},
bHZ:function bHZ(d){this.a=d},
fQe:function fQe(){},
fyS:function fyS(d){this.a=d},
fyT:function fyT(d,e){this.a=d
this.b=e},
fyU:function fyU(d,e){this.a=d
this.b=e},
fyL:function fyL(){},
fyM:function fyM(){},
fyN:function fyN(){},
fyO:function fyO(d){this.a=d},
fyP:function fyP(d){this.a=d},
fyQ:function fyQ(d,e){this.a=d
this.b=e},
fyR:function fyR(d,e){this.a=d
this.b=e},
ho:function ho(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
fkW:function fkW(d){this.a=d},
foj:function foj(d){this.a=d},
fxz:function fxz(d){this.a=d},
fxy:function fxy(){},
fxw:function fxw(d){this.a=d},
fxx:function fxx(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fyD:function fyD(d,e,f){this.a=d
this.b=e
this.c=f},
fyE:function fyE(d,e,f){this.a=d
this.b=e
this.c=f},
fyF:function fyF(d){this.a=d},
aoJ:function aoJ(d){this.a=d},
aoK:function aoK(d,e){var _=this
_.d=d
_.r=_.f=_.e=$
_.w=e
_.x=-1
_.y=!1
_.z=""
_.c=_.a=null},
c3Z:function c3Z(d){this.a=d},
c3X:function c3X(d){this.a=d},
c3W:function c3W(){},
c3K:function c3K(d){this.a=d},
c3Q:function c3Q(d,e){this.a=d
this.b=e},
c3Y:function c3Y(d){this.a=d},
c3N:function c3N(d,e){this.a=d
this.b=e},
c3M:function c3M(d){this.a=d},
c3k:function c3k(){},
c3L:function c3L(d){this.a=d},
c3P:function c3P(d){this.a=d},
c3O:function c3O(d,e,f){this.a=d
this.b=e
this.c=f},
c3J:function c3J(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
c3I:function c3I(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
c3F:function c3F(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
c3G:function c3G(d,e){this.a=d
this.b=e},
c3A:function c3A(d,e,f){this.a=d
this.b=e
this.c=f},
c3H:function c3H(d){this.a=d},
c3D:function c3D(d,e){this.a=d
this.b=e},
c3C:function c3C(){},
c3E:function c3E(d,e){this.a=d
this.b=e},
c3B:function c3B(){},
c3p:function c3p(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
c3o:function c3o(){},
c3q:function c3q(d){this.a=d},
c3r:function c3r(d){this.a=d},
c3s:function c3s(d){this.a=d},
c3t:function c3t(d,e){this.a=d
this.b=e},
c3u:function c3u(d,e,f){this.a=d
this.b=e
this.c=f},
c3v:function c3v(d,e){this.a=d
this.b=e},
c3w:function c3w(d,e,f){this.a=d
this.b=e
this.c=f},
c3x:function c3x(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
c3n:function c3n(){},
c3y:function c3y(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
c3l:function c3l(){},
c3m:function c3m(){},
c3z:function c3z(d){this.a=d},
c3T:function c3T(d){this.a=d},
c3U:function c3U(d){this.a=d},
c3S:function c3S(d){this.a=d},
c3V:function c3V(d){this.a=d},
c3R:function c3R(d){this.a=d},
h8g(d,e,f,g){var w,v,u,t=null,s=e.r
s=s==null?t:D.k.V(s)
w=D.k.V(f)
v=e.b
v=v==null?t:v.l()
u=d+"|"+C.w(s)+"|"+w+"|"+C.w(v)
v=$.htE.h(0,u)
if(v==null){s=C.fw(t,t,g,t,C.cS(t,t,t,t,t,t,t,t,t,e,d),D.a4,D.bX,t,D.dA,D.bV)
s.o0(f)
$.htE.n(0,u,s)}else s=v
return s},
nh(a5,a6,a7,a8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=null,a4=D.o.F(a8,17)
if(a4===0){A.fQl(a5,a6,a7,0)
w=a6.a
v=(D.k.F(a7*0.35,1.6)-0.3)*w
u=a5.a
J.bl(u.save())
t=0+a6.b
u.clipRect(C.bG(new C.a3(0,0,0+w,t)),$.mw()[1],!0)
$.S()
s=C.I()
s.r=D.c.j(0.12).gp(0)
a5.aO(new C.a3(v,0,v+w*0.12,t),s)
u.restore()
return}if(a4>=8){K.RX(a5,a6,a4-8,a7)
return}r=B.cWR[a4-1]
w=a6.a
u=a6.b
q=new C.a3(0,0,0+w,0+u)
t=$.S()
s=C.I()
s.sam(new C.a9(D.ay,D.aD,D.x,C.a([r.c,r.d],x.O),a3,a3).aA(0,q))
a5.aO(q,s)
s=a5.a
J.bl(s.save())
s.clipRect(C.bG(q),$.mw()[1],!0)
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
h.push(new C.bs())
e=p.G()
h=g.gbv().a.snapshot()
s.drawPath((g.e=new C.ce(h)).a,e)
e.delete()}t=Math.sin(a7*2)
n=C.I()
m=r.e
n.r=m.j(0.18).gp(0)
a5.ad(new C.t(w*0.88,u*0.3),u*(0.22+0.03*t),n)
s.restore()
s=w*0.06
A.h8g(r.a,C.l(a3,a3,D.c,a3,a3,a3,a3,a3,a3,a3,a3,u*0.22,a3,a3,D.u,a3,a3,!0,a3,u*0.012,a3,a3,a3,a3,a3,a3),w*0.9,1).a3(a5,new C.t(s,u*0.2))
A.h8g(r.b,C.l(a3,a3,m,a3,a3,a3,a3,a3,a3,a3,a3,u*0.1,a3,a3,D.U,a3,a3,!0,a3,a3,a3,a3,a3,a3,a3,a3),w*0.8,2).a3(a5,new C.t(s,u*0.5))
d=$.W9
m=u*0.76
if(d!=null){t=d.c
n=d.d
a0=Math.min((s+o-s)/t,(m+u*0.16-m)/n)
o=C.I()
o.Q=D.ci
a5.oC(d,new C.a3(0,0,t,n),new C.a3(s,m,s+t*a0,m+n*a0),o)}else{a1=C.fw(a3,a3,a3,a3,C.cS(a3,a3,a3,a3,a3,a3,a3,a3,a3,C.l(a3,a3,D.c,a3,a3,a3,a3,a3,a3,a3,a3,u*0.12,a3,a3,D.u,a3,a3,!0,a3,a3,a3,a3,a3,a3,a3,a3),"NGMY"),D.a4,D.bX,a3,D.dA,D.bV)
a1.ej()
a1.a3(a5,new C.t(s,m))}a2=A.h8g("ngmy.org",C.l(a3,a3,D.ad,a3,a3,a3,a3,a3,a3,a3,a3,u*0.08,a3,a3,D.H,a3,a3,!0,a3,a3,a3,a3,a3,a3,a3,a3),400,1)
a2.a3(a5,new C.t(w-a2.b.c-w*0.05,u*0.82))},
FW:function FW(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
L9(d){return D.d.dK(B.R9,new A.fB9(d),new A.fBa())},
yO(d){var w=B.hC.h(0,d.b),v=d.e*3.141592653589793/2,u=w.d/2+30
return new C.z(d.c+Math.sin(v)*u,d.d+Math.cos(v)*u)},
hFY(d){var w=C.a([],x.C),v=C.a([],x.fW),u=new C.e5()
u.cY(7)
w=new A.bMk(d,u,w,v)
w.bzq(d,7)
return w},
zc:function zc(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fB9:function fB9(d){this.a=d},
fBa:function fBa(){},
xl:function xl(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=null
_.w=_.r=!1
_.x=0},
aUf:function aUf(d,e,f,g,h,i,j){var _=this
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
a4p:function a4p(d,e,f,g,h,i,j,k){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.w=j
_.x=k},
akm:function akm(d,e,f){this.a=d
this.b=e
this.c=f},
bMk:function bMk(d,e,f,g){var _=this
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
bMm:function bMm(d){this.a=d},
bMo:function bMo(d,e){this.a=d
this.b=e},
bMp:function bMp(){},
bMl:function bMl(d,e){this.a=d
this.b=e},
bMq:function bMq(){},
bMn:function bMn(d,e,f){this.a=d
this.b=e
this.c=f},
hdY(d){var w=d.x
return C.bv(w.length,D.d.cI(w,0,new A.bKr()),D.h,D.h,D.h,D.h,D.h,D.h,D.h,D.h,D.h,D.h,D.h,D.h,D.h,D.h,D.h,D.h,D.h,D.h)},
ij8(d){var w,v,u
for(w=0,v=0;u=v+1,u<d.length;v=u)w+=Math.sqrt(Math.pow(d[u].a-d[v].a,2)+Math.pow(d[u].b-d[v].b,2))
return w},
ije(d,e){var w,v,u,t,s,r,q,p,o
for(w=e,v=0;u=v+1,u<d.length;v=u){t=d[u]
s=d[v]
r=t.a-s.a
q=t.b-s.b
p=Math.sqrt(r*r+q*q)
if(p<0.000001)continue
if(w<=p||v+2===d.length){o=D.k.E(w/p,0,1)
t=d[v]
return new C.b7(t.a+r*o,t.b+q*o,Math.atan2(r,q))}w-=p}return new C.b7(D.d.gak(d).a,D.d.gak(d).b,0)},
bKq:function bKq(d){var _=this
_.a=d
_.e=_.d=_.c=_.b=$
_.f=-1},
bKr:function bKr(){},
djM:function djM(d,e){this.a=d
this.b=e},
h1y(d,e,f){return new A.aYS(f,d,e,null)},
h8M(d){return D.k.dd((1-D.k.E(d,0,1))*12)},
aTC:function aTC(d){var _=this
_.b=_.a=1
_.d=_.c=0
_.e=1
_.f=!1
_.r=0
_.w=!1
_.P$=0
_.T$=d
_.by$=_.bJ$=0},
aYS:function aYS(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
Uw:function Uw(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
c1A:function c1A(d){this.a=d},
rP:function rP(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
fpn(d){var w=d.d-d.b-200
return new C.bqA([157.07963267948966,2*w+380+628.3185307179587,w,190])},
Le(d,e){var w,v=A.fpn(d).a,u=v[2],t=v[3],s=v[0]
v=v[1]
w=D.k.F(e,v)
if(w<0)w+=v
v=new A.fEt()
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
h0c(d,e,f){return new A.aTB(d,e,f)},
h92(d,e){var w=D.k.F(e+d.c,28)
if(w<12)return 0
if(w<15)return 1
return 2},
hp0(d,e,f,g){var w=x.n
w=new A.bxl(d,e,f,g,C.a([],w),C.a([],w))
w.bAw(d,e,f,g)
return w},
hF5(){var w,v=C.a([],x.n)
for(w=0;w<4;++w)v.push(B.kn[w].r)
return new A.bKs(v,C.bZ(4,0,!1,x.i),B.aA1)},
i61(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k=C.a([],x.z)
for(w=d.length,v=e.a,u=e.b,t=e.c,s=x.o,r=0;r<d.length;d.length===w||(0,C.L)(d),++r){q=d[r]
p=C.a([],s)
for(o=q.a,n=o.length,m=0;m<o.length;o.length===n||(0,C.L)(o),++m){l=o[m]
p.push(new A.q(l.a*v,l.b*u,l.c*t))}k.push(new A.kp(p,q.b,q.c,q.d,q.e,q.f,q.r,q.w,q.x,q.y,q.z))}return k},
hZ5(){var w,v,u,t,s=new A.fl(C.a([],x.z))
s.r=!0
s.aZ(B.fYU,B.h0g,D.d7,0.3)
s.aZ(B.hcL,B.h06,D.bN,0.2)
s.aZ(B.aaL,B.h04,B.i0,0.6)
s.aZ(B.h7F,B.h0M,B.i0,0.6)
s.aP(B.h6L,B.h0i,D.bu)
for(w=0;w<2;++w)s.aP(new A.q(75.5,9,B.a51[w]),B.aaQ,B.o4)
for(w=0;w<2;++w){v=B.dm2[w]
for(u=0;u<2;++u){t=B.dlU[u]
s.dN(new A.q(v,7,t-1.5),new A.q(v,7,t+1.5),7.5,D.nh,12)}}return s},
i4A(d,e){var w,v,u,t,s,r=new A.fl(C.a([],x.z))
r.r=!0
r.aZ(B.aVK,B.h_l,D.bN,0.4)
r.aZ(B.hd2,B.h32,D.bN,0.4)
r.aZ(B.hd3,B.h36,B.i0,0.6)
r.aP(B.xa,B.h_q,D.dF)
w=D.k.F(d*5+e,2)<1
r.aZ(B.hff,B.aVY,w?D.ax:D.ej,0.6)
r.aZ(B.hb2,B.aVY,w?D.d7:D.d3,0.6)
for(v=0;v<2;++v){u=B.dlZ[v]
for(t=0;t<2;++t){s=B.dlS[t]
r.dN(new A.q(u,6.5,s-1.5),new A.q(u,6.5,s+1.5),6.5,D.nh,12)}}return r},
ill(a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=x.z,a5=C.a([],a4)
for(w=0;w<4;++w){v=B.kn[w]
u=$.aRE()
t=D.d.cu(B.kn,v)
u.FF(0,a6)
t=A.Le(B.kn[t],u.a[t]).a
s=t[0]
r=t[1]
q=t[2]
p=t[3]
u=v.a==="bus"
o=u?A.hZ5():A.i4A(a6,w)
u=u?B.aWL:B.aW4
D.d.v(a5,A.nC(A.i61(o.a,u),0,Math.atan2(q,p)-1.5707963267948966,new A.q(s,0,r)))}for(u=$.bFL(),t=u.length,n=0;n<u.length;u.length===t||(0,C.L)(u),++n)D.d.v(a5,A.i2_(u[n],a6))
for(u=a6*0.9,t=x.o,m=a6*22,l=a6*0.09,w=0;w<2;++w){k=B.a4C[w].a
j=k[0]
i=k[1]
h=k[2]
g=l+w*3.141592653589793
k=Math.cos(g)
f=Math.sin(g)
e=Math.atan2(-Math.sin(g),Math.cos(g))
d=C.a([],a4)
a0=new A.fl(d)
a0.r=!0
a0.aZ(B.dX,B.h2w,D.bz,0.4)
a0.aZ(B.h0q,B.h_u,B.i0,0.7)
a0.dN(B.h0x,B.h3N,2.6,D.bz,8)
a0.aP(B.h3K,B.haG,D.bN)
a0.dN(B.xa,B.aaJ,1.2,B.hs,8)
for(a1=0;a1<2;++a1)a0.aDR(new A.q(0,13.4,0),B.h5R,B.hs,m+a1*3.141592653589793/2)
for(n=0;n<2;++n){a2=E.aAz[n]
a0.aP(new A.q(0,-11,a2),B.h5z,B.hs)
a0.aP(new A.q(-10,-6,a2),B.aWJ,B.hs)
a0.aP(new A.q(10,-6,a2),B.aWJ,B.hs)}for(n=0;n<2;++n){a3=B.aAv[n]
a0.jk(C.a([new A.q(a3*0.45,-10,0),new A.q(a3,-22,0)],t),0.3,B.hs,!1,0,4)}D.d.v(a5,A.nC(d,0,e-1.5707963267948966,new A.q(j+520*k,h+Math.sin(u+w)*5,i+520*f)))}return a5},
ilm(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=C.a([],x.a),f=new A.fZf()
for(w=0;w<4;++w){v={}
u=B.kn[w]
v.a=v.b=null
t=$.aRE()
s=D.d.cu(B.kn,u)
t.FF(0,d)
s=A.Le(B.kn[s],t.a[s]).a
v.b=s[0]
v.a=s[1]
s=new A.fZd(v,Math.atan2(s[2],s[3])-1.5707963267948966)
v=u.a==="bus"
r=v?B.aWL:B.aW4
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
g.push(f.$7(s.$3(q,o,p),s.$3(v,o,p),s.$3(v,n,p),s.$3(q,n,p),t+5,1200,220))}for(v=d*0.09,t=d*0.9,w=0;w<2;++w){s=B.a4C[w].a
l=s[0]
k=s[1]
j=s[2]
i=s[3]
h=v+w*3.141592653589793
s=Math.cos(h)
p=Math.sin(h)
p=new A.fZe(Math.atan2(-Math.sin(h),Math.cos(h))-1.5707963267948966,l+520*s,j+Math.sin(t+w)*5,k+520*p)
g.push(f.$7(p.$2(-42,-22),p.$2(42,-22),p.$2(42,-44),p.$2(-42,-44),i,900,230))
g.push(f.$7(p.$2(42,-22.3),p.$2(-42,-22.3),p.$2(-42,-44.3),p.$2(42,-44.3),i,900,230))}return g},
i2_(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k=B.kn[d.a*2],j=d.b,i=A.Le(k,j).a,h=i[0],g=i[1],f=i[2],e=i[3]
j=A.Le(k,j+22).a
j=[j[0],j[1],f,e,h+-e*56,g+f*56]
w=A.h92(d,a0)
v=D.k.F(a0+d.c,28)
u=v>=17&&v<26
i=C.a([],x.z)
t=new A.fl(i)
t.r=!0
t.dN(B.dX,B.aVT,1.7,D.hi,6)
t.aZ(B.fZZ,B.h4p,D.av,0.3)
for(s=w===2,r=w===1,q=w===0,p=0;p<3;++p){o=!0
if(!(p===0&&s))if(!(p===1&&r)){n=p===2&&q
o=n}n=o?B.diJ[p]:B.cJG[p]
m=o?0.9:0.1
t.fV(new A.q(-3.9,74-p*8,0),3.3,n,4,7,m)}t.aZ(B.fZt,B.h_v,D.av,0.3)
if(u){t.ec(B.h5D,1.6,D.bf,4,6)
t.aP(B.haC,B.haj,D.bf)
t.aP(B.h61,B.aX7,D.bf)
t.aP(B.h9p,B.aX7,D.bf)}else{t.aP(B.h77,B.hbu,D.ax)
for(l=-2;l<=1;++l)t.aP(new A.q(l*1.25+0.6,40,-4.9),B.hbQ,D.ax)
t.aP(B.heB,B.h7g,D.ax)}return A.nC(i,0,Math.atan2(j[2],j[3])-1.5707963267948966,new A.q(j[4],0,j[5]))},
i9A(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=C.a([],x.z),i=new A.fl(j)
i.f=1
i.e=90
w=new A.fAI(i)
for(v=$.bFL(),u=v.length,t=0;t<v.length;v.length===u||(0,C.L)(v),++t){s=v[t]
r=B.kn[s.a*2]
q=s.b
p=A.Le(r,q+22).a
o=p[0]
n=p[1]
m=p[2]
l=p[3]
for(k=-4;k<=4;++k)w.$8(o,n,m,l,0,-25+k*11,18,5)
q=A.Le(r,q-6).a
w.$8(q[0],q[1],m,l,0,0,2.2,46)}return j},
Sy:function Sy(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.d=f
_.r=g
_.w=h},
fEt:function fEt(){},
aTB:function aTB(d,e,f){this.a=d
this.b=e
this.c=f},
bxl:function bxl(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=-1},
fi8:function fi8(d,e){this.a=d
this.b=e},
bKs:function bKs(d,e,f){var _=this
_.a=d
_.b=e
_.c=0
_.d=f},
bKt:function bKt(){},
fZf:function fZf(){},
fZg:function fZg(d){this.a=d},
fZd:function fZd(d,e){this.a=d
this.b=e},
fZe:function fZe(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fAI:function fAI(d){this.a=d},
fAJ:function fAJ(d,e,f,g,h,i){var _=this
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
cAS:function cAS(d,e,f){var _=this
_.a=d
_.b=e
_.d=_.c=$
_.e=f
_.f=null
_.w=_.r=0
_.x=1
_.y=0},
cAU:function cAU(d){this.a=d},
cAV:function cAV(){},
cAT:function cAT(){},
hyZ(d){return d.b==="hq"?12:D.o.E(D.k.bf((210+D.o.F(B.zk[d.f].l(),5)*24)/22),8,14)},
h0b(d,e,f){var w=new A.bKe(d,e,f,B.aA9,B.a31,C.a([],x.a),C.aX(x.S))
w.at=new A.b9O(null,-138,138,12,316,0,296,3.141592653589793,w.ccg())
w.ax=w.cH8()
return w},
pD:function pD(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bKe:function bKe(d,e,f,g,h,i,j){var _=this
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
bKf:function bKf(){},
bKm:function bKm(d){this.a=d},
bKn:function bKn(d){this.a=d},
bKo:function bKo(d){this.a=d},
bKp:function bKp(d){this.a=d},
bKg:function bKg(d){this.a=d},
bKh:function bKh(){},
bKi:function bKi(){},
bKj:function bKj(d){this.a=d},
bKk:function bKk(d){this.a=d},
bKl:function bKl(d){this.a=d},
h0i(d,e){var w=C.a([],x.ha),v=C.a([new A.M0(),new A.M0(),new A.M0()],x.gQ),u=C.a([],x.s),t=new C.e5()
t.cY(e)
w=new A.aU0(d,t,w,v,u)
w.bzo(d,e)
return w},
hea(d,e){var w,v,u,t,s,r,q,p,o=J.a6(e),n=x.fF,m=n.a(o.h(e,"wired"))
if(m==null)m=D.uL
w=n.a(o.h(e,"plumbed"))
if(w==null)w=D.uL
for(o=d.gqT(),n=o.length,v=J.a6(w),u=J.a6(m),t=0;t<o.length;o.length===n||(0,C.L)(o),++t){s=o[t]
r=""+s.a
q=u.h(m,r)
if(C.r4(q)){s.ay=!q
s.CW=null}p=v.h(w,r)
if(C.r4(p)){r=s.c
r=r==="bathroom"||r==="kitchen"}else r=!1
if(r){s.ch=!p
s.fr=null}}},
h0j(d){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=J.a6(d),j=C.aK(k.h(d,"seed"))
j=j==null?l:D.k.N(j)
if(j==null)j=1
w=C.aK(k.h(d,"clock"))
w=w==null?l:D.k.N(w)
v=A.h0i(j,(w==null?0:w)+7)
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
aU2(){var w=0,v=C.j(x.dy),u,t=2,s=[],r,q,p,o,n
var $async$aU2=C.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return C.b(C.az(),$async$aU2)
case 7:r=e
q=C.aT(J.r(r.a,"ngmy_community_v1"))
if(q==null){u=null
w=1
break}p=x.b.a(D.X.aL(0,q,null))
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
return C.i($async$aU2,v)},
aU1(){var w=0,v=C.j(x.H),u=1,t=[],s,r,q
var $async$aU1=C.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:u=3
w=6
return C.b(C.az(),$async$aU1)
case 6:s=e
w=7
return C.b(J.hC(s,"ngmy_community_v1"),$async$aU1)
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
return C.i($async$aU1,v)},
Fp:function Fp(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
P0:function P0(d){var _=this
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
aU0:function aU0(d,e,f,g,h){var _=this
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
bL3:function bL3(){},
bL0:function bL0(d){this.a=d},
bL1:function bL1(d,e){this.a=d
this.b=e},
bL2:function bL2(){},
bL7:function bL7(d){this.a=d},
bL5:function bL5(d){this.a=d},
bL6:function bL6(){},
bL4:function bL4(d){this.a=d},
bL8:function bL8(){},
apJ:function apJ(d,e){this.c=d
this.a=e},
bkN:function bkN(){var _=this
_.d=null
_.e=$
_.f=null
_.r=$
_.x=_.w=null
_.y=0
_.c=_.a=null},
dSn:function dSn(d,e){this.a=d
this.b=e},
dSo:function dSo(d){this.a=d},
dSA:function dSA(){},
dSu:function dSu(d,e){this.a=d
this.b=e},
dSv:function dSv(d){this.a=d},
dSt:function dSt(d){this.a=d},
dSj:function dSj(){},
dSk:function dSk(){},
dSD:function dSD(){},
dSE:function dSE(){},
dSC:function dSC(d,e){this.a=d
this.b=e},
dSB:function dSB(d,e){this.a=d
this.b=e},
dSi:function dSi(d,e){this.a=d
this.b=e},
dSp:function dSp(d,e,f){this.a=d
this.b=e
this.c=f},
dSq:function dSq(d,e,f){this.a=d
this.b=e
this.c=f},
dSr:function dSr(d,e,f){this.a=d
this.b=e
this.c=f},
dSs:function dSs(d,e){this.a=d
this.b=e},
dSm:function dSm(d,e,f){this.a=d
this.b=e
this.c=f},
dSl:function dSl(d,e,f){this.a=d
this.b=e
this.c=f},
dSx:function dSx(d,e){this.a=d
this.b=e},
dSy:function dSy(d,e){this.a=d
this.b=e},
dSz:function dSz(d){this.a=d},
dSw:function dSw(d){this.a=d},
dSF:function dSF(d){this.a=d},
dSG:function dSG(){},
acM:function acM(d,e,f){this.c=d
this.d=e
this.a=f},
bfx:function bfx(d,e){this.b=d
this.a=e},
vS(d,e,f,g,h,i,j,k,l,m,n){return new A.T3(g,m,d,k,e,f,n,h,l,i,j)},
t5(d){return D.d.fY($.hD8(),new A.fBj(d))},
bFl(d,e){var w,v,u=d.e,t=new C.N(u,new A.fZQ(),C.T(u).k("N<1,m>")).fJ(0)
u=e.b
w=C.a7(u).k("bd<2>")
v=C.df(new C.bd(u,w),w.k("M.E"))
return t.d5(0,v.gkU(v))},
hz0(d,e,f,g,h){var w,v
if(e.a&&e.c===0){if(e.r)return"SHOCK! The breaker was still ON and you touched a live wire. Always turn the power OFF and test the wires first."
return"STOP! The breaker is still ON, so these wires are live (120 volts). Turn the breaker OFF first. This can shock you badly."}if(e.c!==0)return"The device is already in the box. Pull it out again to change the wires."
if(!e.r&&!e.y&&!h&&!g.c.t(0,f))return d.r.$2(f,g)
w=e.b
v=g.a
if(w.h(0,v)!=null)return"That place already has a wire. Tap the wire to take it off first."
if(new C.bd(w,C.a7(w).k("bd<2>")).t(0,f))return"That wire is already fastened. Tap it to take it off if you want to move it."
w.n(0,v,f)
return null},
h8C(d,e){var w,v,u,t,s,r,q=new A.fAv(),p=new A.fAw(),o=C.a([],x.bm)
for(w=e.b,w=new C.cI(w,C.a7(w).k("cI<1,2>")).gag(0),v=d.f,u=d.e;w.C();){t=w.d
t.toString
s=D.d.fY(v,new A.fAt(t))
r=D.d.fY(u,new A.fAu(t))
o.push(new A.a4k(new A.cCG(r.a,q.$1(r.e)),new A.cz5(p.$1(s.f))))}return o},
fR6(d){var w=d.e,v=C.T(w).k("Z<1>")
return new A.bMu(new C.Z(w,new A.fR7(),v).gL(0),new C.Z(w,new A.fR8(),v).gL(0),d.y)},
La(d,e){var w,v,u,t,s,r,q=A.huq(A.fR6(d),A.h8C(d,e),e.x),p=q.c,o=new A.fBw(q),n=q.b,m=n.length===0?null:D.d.f3(n,new A.fBt())
n=q.a===B.v9
if(n)w="ok"
else if(o.$1("SHORT")||o.$1("HOT_TO_GROUND"))w="short"
else{if(o.$1("REVERSED"))v="reversed"
else if(o.$1("NEUTRAL_GROUND"))v="bonded"
else if(o.$1("GROUND_AS_CURRENT"))v="groundWire"
else if(o.$1("OPEN_NEUTRAL"))v="openNeutral"
else if(o.$1("UNVERIFIED"))v="unverified"
else v=o.$1("MISSING_GROUND")?"noGround":"dead"
w=v}if(d.x&&!e.y)for(v=e.b,v=new C.cI(v,C.a7(v).k("cI<1,2>")).gag(0),u=d.f;v.C();){t=v.d
t.toString
s=D.d.fY(u,new A.fBu(t))
if(!s.c.t(0,t.b)){n=s.d
return new A.b9k("dead","The "+D.d.fY(d.e,new A.fBv(t)).b+" is on the wrong terminal ("+s.b+"). "+n,!1,!1,!1,"none",n)}}r=n?"Wired correctly. Hot, neutral and ground are all in the right place, and every safety check passes.":m.c+" "+p.c
n=m==null?null:m.e
if(n==null)n=""
return new A.b9k(w,r,p.d,p.e,p.f,p.b,n)},
h93(d){var w,v,u
for(w=$.h_t(),v=0;v<10;++v){u=w[v]
if(u.a===d)return u.w}return d},
aOJ(d,e){var w
if(d==="light"||d==="fan")w=e.c===0?6.4:0.6
else w=e.c===0?4.7:-0.25
return w},
aQ0(d,e,f){var w,v
if(d==="light"||d==="fan"){w=A.aOJ(d,f)
v=f.c===0?w-3.2:w
switch(e){case 51:return new A.q(-1.5,-0.3,v)
case 52:return new A.q(0,-0.3,v)
default:return new A.q(1.5,-0.3,v)}}w=A.aOJ(d,f)
switch(e){case 21:return new A.q(0.98,-0.2+(d==="gfci"?0.95:0.85),w-0.45)
case 22:return new A.q(0.98,-0.2+(d==="gfci"?-0.75:-0.55),w-0.45)
case 23:return new A.q(-0.98,-0.2+(d==="gfci"?0.95:0.85),w-0.45)
case 24:return new A.q(-0.98,-0.2+(d==="gfci"?-0.75:-0.55),w-0.45)
default:return new A.q(0,-1.98,w+0.52)}},
h8q(b5,b6,b7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=C.a([],x.z),b2=new A.fl(b1),b3=A.h93(b5.a),b4=b3==="light"||b3==="fan"
if(b7){b2.b=1
b2.hr(B.h9E,B.aX2,B.vI,3)
b2.hr(B.haU,B.aX2,B.vI,3)
b2.hr(B.hdD,B.aXo,B.vI,2)
b2.hr(B.hbx,B.aXo,B.vI,2)
b2.b=2
b2.nc(B.h9b,B.aWW,B.jr,0.05,3)
b2.nc(B.h8C,B.aWW,B.jr,0.05,3)
b2.nc(B.h8v,B.he9,B.jr,0.05,2)}w=b5.w.length===0
v=A.hpy(b2,w?b3:"outlet",!0)
u=new A.fyJ(b2,b6,b3,b4)
t=D.d.gI(v)
s=!w
if(s){r=b5.e
q=r.length
for(p=t.a,o=t.b+0,n=t.c,m=q-1,l=q===1,k=0;k<q;++k){j=r[k]
i=l?0:k/m-0.5
h=D.o.F(k,2)
if(j.e==="ground")g=B.vO
else{g=j.c
if(g.A(0,B.oV))g=B.oV}u.$5(60+k,new A.q(p+i*0.5,o,n+0.04*k),new A.q(i*3.6,-1.7-0.12*h,2.3+0.15*k),j.a,g)}}else if(b3==="switch"){f=D.d.gak(v)
u.$5(10,t.a9(0,B.h1B),B.hdG,"blackLine",B.M_)
u.$5(13,f.a9(0,B.hdP),B.h6Q,"blackLoad",B.M_)
u.$5(12,t.a9(0,B.hat),B.h6_,"ground",B.vO)
b2.b=6
r=x.o
b2.jk(C.a([t.a9(0,B.aWT),B.h2j,B.Vy],r),0.075,B.oV,!1,0.3,8)
b2.jk(C.a([f.a9(0,B.aWT),B.h9K,B.Vy],r),0.075,B.oV,!1,0.3,8)
b2.BE(B.Vy,B.hdy,0.28,B.aeW,0.18,0.3,10)}else{u.$5(10,t.a9(0,B.h7_),B.h26,"black",B.M_)
u.$5(11,t.a9(0,B.h8p),B.h9V,"white",B.oV)
u.$5(12,t.a9(0,B.h8O),B.h8E,"ground",B.vO)}if(b4)A.hqA(b2,b3,b6)
else A.hqd(b2,b3,A.aOJ(b3,b6),b6.w,!1,s)
if(b6.e&&b6.c===0){b2.b=0
b2.d=0.5
for(r=b5.f,p=r.length,e=0;e<p;++e){d=r[e]
a0=A.aQ0(b3,d.a,b6)
if(d.e)a1=D.bu
else{o=d.f
if(o==="ground")a1=D.bf
else{o=o==="neutral"?D.c:B.XZ
a1=o}}if(b4)o=0
else{o=a0.a
if(o>0.4)o=0.12
else o=o<-0.4?-0.12:0}if(b4)n=0.6
else n=Math.abs(a0.a)<0.4?0.2:0
b2.fV(new A.q(a0.a+o,a0.b+0,a0.c+n),0.36,a1,4,8,0.1)}b2.d=1}if(b6.c>=2&&!b4)A.hsE(b2,b6.w)
r=!1
if(b6.c>=2)if(b6.d)r=b3==="outlet"||b3==="gfci"
if(r)A.i7j(b2,b6.a&&!b6.w)
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
a2=A.aOJ(b3,b6)
a4=p?"Ceiling fan":"Ceiling light"
p=p?"The motor housing with blades. It has three wires: black (motor), white (neutral) and green (ground).":"The light fixture with a frosted dome. It has three wires: black, white and green."
a5=C.H([1,B.ecw,2,B.ecK,3,new A.cX(r,"A box that holds the wire connections. Every connection must be inside a box, never loose in the wall or the ceiling."+o,new A.q(0,0,-1.2),9),4,new A.cX(m,"The yellow jacket holds three wires: black (hot), white (neutral) and bare copper (ground). Yellow means 12 gauge wire for a 20 amp circuit. White jackets are 14 gauge for 15 amps.",new A.q(-0.4,1.5,-1.8),8),5,B.ed6,10,new A.cX("Black wire: hot","The hot wire brings the power from the breaker. It is the dangerous one. "+l,new A.q(-0.8,-0.8,1.2),7),13,B.eci,11,new A.cX("White wire: neutral","The neutral wire carries the power back to the panel. "+h,new A.q(0,-0.8,1.2),7),12,new A.cX("Bare copper wire: ground","The ground wire is a safety path. If a wire touches metal, the current runs down the ground instead of through you. "+g,new A.q(0.5,-0.8,1.2),7),6,B.ecI,20,new A.cX(a3,n,new A.q(0,-0.2,a2),9),21,B.ecN,22,B.ed5,23,B.ecG,24,B.ecL,25,B.ecz,26,B.ecO,27,B.ed_,28,B.ecu,30,B.ecd,31,B.ecb,51,B.ecJ,52,B.ecf,53,B.ecS,54,new A.cX(a4,p,new A.q(0,0,6.4),9),55,B.ed1],x.S,x.q)
if(s){a5.n(0,20,new A.cX(b5.b,b5.c,new A.q(0,-0.2,A.aOJ(b3,b6)),9))
for(s=b5.e,r=s.length,k=0;k<r;++k)a5.n(0,60+k,new A.cX(s[k].b,"Pick this wire up, then tap the screw it belongs on. Tap it again on the screw to take it off.",new A.q(-0.8+k*0.5,-0.8,1.2),7))
for(s=b5.f,r=s.length,e=0;e<r;++e){a6=s[e]
p=a6.a
a5.n(0,p,new A.cX(a6.b,a6.d,A.aQ0(b3,p,b6),5))}}a7=C.a([],x.E)
if(b6.f&&b6.c===0)for(s=b5.f,r=s.length,e=0;e<r;++e){d=s[e]
a0=A.aQ0(b3,d.a,b6)
a8=d.f
A:{p="hot"===a8
if(p){o=B.eT5
break A}if("neutral"===a8){o=B.eIV
break A}if("ground"===a8){o=B.eLw
break A}o=B.exK
break A}a9=o.a
if(b4){B:{if(p){n="BLACK NUT \xb7 HOT"
break B}if("neutral"===a8){n="WHITE NUT \xb7 NEUTRAL"
break B}n="GROUND"
break B}i=n}else i=w?a9:d.b
if(b4){C:{if(p){p=B.h82
break C}if("neutral"===a8){p=B.h7W
break C}p=B.hen
break C}b0=p}else{p=a0.a
if(p>0.4)n=3.8
else n=p<-0.4?-4.2:0
b0=new A.q(n,Math.abs(p)<0.4?-3:-0.4,1)}a7.push(new A.hh(new A.q(a0.a+b0.a,a0.b+b0.b,a0.c+b0.c),i,o.b,0))}if(b6.a&&b6.c===0)a7.push(B.c0Q)
return new A.tT(b1,a5,a7,B.wC,null,0)},
hpy(d,e,f){var w,v,u=e==="light"||e==="fan"
d.b=3
if(u){d.dR(B.aXq,B.aX1,2.2,B.y_,0.3,18)
d.Ti(B.aX1,B.dX,2.2,B.y_,!1,!0,0.3,18)}else{d.aZ(B.aXq,B.h9l,B.y_,0.3)
d.aZ(B.h6t,B.aWH,B.y_,0.3)
d.aZ(B.h30,B.aWH,B.y_,0.3)
d.aZ(B.h8y,B.aX6,B.y_,0.3)
d.aZ(B.h7U,B.aX6,B.y_,0.3)}w=C.a([],x.o)
v=new A.fjT(d,f,w)
if(e==="switch"){v.$2(4,B.d30)
v.$2(5,B.d13)}else v.$2(4,B.dfB)
return w},
hz5(d,e){var w,v=$.h_t(),u=new C.Z(v,new A.fZP(d),C.T(v).k("Z<1>"))
if(!u.gan(0)){w=e-60
return w>=0&&w<u.gI(0).e.length?u.gI(0).e[w].a:null}return A.i1X(d,e)},
i1X(d,e){var w
A:{if(10===e){w=d==="switch"?"blackLine":"black"
break A}if(13===e){w="blackLoad"
break A}if(11===e){w="white"
break A}if(12===e){w="ground"
break A}w=null
break A}return w},
hqd(d,e,f,g,h,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k=new A.q(0,-0.2,f),j=e==="switch",i=e==="gfci"
if(g)w=B.xV
else w=j?B.bk7:B.YC
v=i?3.1:2.95
d.e=0
d.b=20
if(!h){d.aZ(k.a9(0,B.h58),new A.q(1.5,v,1.3),w,0.25)
d.e=0.15
d.b=26
u=k.a9(0,B.h4R)
d.aZ(u,B.hdA,g?B.bgA:B.Mk,0.8)
d.aP(k.a9(0,B.haq),B.hfs,B.Fb)}d.e=0.3
d.b=27
u=k.a9(0,B.h7r)
d.aZ(u,new A.q(1.3,i?2.85:2.7,0.16),w,0.3)
if(j){d.e=0.7
d.b=28
u=k.a9(0,B.h9I)
d.aZ(u,B.h6X,g?B.xV:G.YN,0.35)
u=k.a9(0,B.hd8)
d.aZ(u,B.hbw,g?B.xV:B.afJ,0.35)}else{d.e=0.6
u=i?H.avl:B.dte
t=u.length
s=f+0.47
r=f+0.46
q=f+0.5
p=0
for(;p<t;++p){o=u[p]
d.b=27
n=-0.2+(o+0.04)
d.aP(new A.q(-0.28,n,s),B.h9k,B.Fn)
d.aP(new A.q(0.28,n,s),B.h7z,B.Fn)
n=-0.2+(o-0.32)
d.dN(new A.q(0,n,r),new A.q(0,n,q),0.11,B.Fn,10)}if(i){d.e=0.7
d.b=28
d.aZ(k.a9(0,B.ha9),B.aWN,B.bnR,0.3)
d.aZ(k.a9(0,B.hdQ),B.aWN,B.aiB,0.3)}}if(h){d.e=0
return}m=i?0.95:0.85
l=i?-0.75:-0.55
u=new A.flc(d,k)
if(!j||a0){u.$6$taped(23,-1,m,B.ag6,B.agF,i)
u.$5(24,-1,l,B.ag6,B.agF)}u.$6$taped(21,1,m,B.XZ,B.ai2,i)
u.$5(22,1,l,B.XZ,B.ai2)
d.e=0.9
d.b=25
d.dR(k.a9(0,B.h8w),k.a9(0,B.het),0.18,B.bpZ,0.7,12)
d.aP(k.a9(0,B.h7Y),B.h8A,D.e_)
d.aZ(k.a9(0,B.h5j),B.had,B.bcO,0.6)
d.e=0},
hqA(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=e==="fan",i=A.aOJ(e,f)
d.e=0
d.b=55
w=i-0.3
v=i+0.3
u=j?3.3:3.5
t=f.w?B.xV:B.bkF
d.dR(new A.q(0,0,w),new A.q(0,0,v),u,t,0.45,20)
d.b=54
if(j){u=i+4.2
d.dR(new A.q(0,0,v),new A.q(0,0,u),0.45,B.bgu,0.5,10)
v=i+7.4
d.dR(new A.q(0,0,u),new A.q(0,0,v),3.6,B.Xv,0.5,18)
d.dR(new A.q(0,0,v),new A.q(0,0,i+8.6),1.6,B.bpd,0.7,14)}else{d.d=0.92
v=f.w?B.xV:B.bhE
d.fV(new A.q(0,0,i+1.2),3.6,v,6,14,0.7)
d.d=1}v=d.b=54
s=[B.eJ3,B.eur,B.eQC]
for(u=x.o,r=i-3.2,q=0,p=0;p<3;++p){t=s[p]
o=f.c===0
d.b=o?B.cFo[q]:v;++q
n=o?r:i
o=t.b.a
d.jk(C.a([new A.q(o,-0.3,w),new A.q(o,-0.3,n+0.4)],u),0.07,t.a,!1,0.3,6)}if(f.c===0)for(w=[B.eBL,B.eKD,B.eTx],v=f.b,p=0;p<3;++p){m=w[p]
u=m.a
l=A.aQ0(e,u,f)
d.b=u
d.e=0.8
t=l.a+0
o=l.b+0
k=l.c
d.dR(new A.q(t,o,k+-0.2),new A.q(t,o,k+0.3),0.09,B.vO,0.6,6)
if(v.aj(0,u))d.BE(new A.q(t,o,k+-0.5),new A.q(t,o,k+0.9),0.4,m.b,0.26,0.4,8)
d.e=0}},
hsE(d,e){var w
d.e=0.4
d.b=30
w=e?B.xV:B.bbS
d.aZ(B.ha0,B.aX8,w,0.3)
d.aZ(B.h99,B.aX8,w,0.3)
d.aZ(B.h2V,B.aXh,w,0.3)
d.aZ(B.h4_,B.h5v,w,0.3)
d.aZ(B.hek,B.aXh,w,0.3)
d.dR(B.h7G,B.h95,0.1,B.Mk,0.8,10)
d.e=0},
i7j(d,e){var w,v
d.b=31
for(w=0;w<2;++w){v=B.d5E[w]
d.dR(new A.q(v,0.52,0.2),new A.q(v,0.52,1.9),0.04,B.Mk,0.8,6)}d.aZ(B.h02,B.hdm,B.bhh,0.35)
d.bc0(B.aX3,0.2,e?D.Y0:B.blr,0.9)
if(e){d.d=0.35
d.fV(B.aX3,0.5,D.Y0,4,8,0)
d.d=1}},
fM:function fM(d,e,f,g,h,i){var _=this
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
_.w=_.r=_.f=_.e=_.d=!1
_.x=!0
_.y=!1
_.z=""},
jE:function jE(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
T3:function T3(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
fCD:function fCD(){},
fCE:function fCE(){},
fCF:function fCF(){},
fCG:function fCG(){},
fCH:function fCH(){},
fBj:function fBj(d){this.a=d},
fZQ:function fZQ(){},
b9k:function b9k(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.r=i
_.w=j},
fAv:function fAv(){},
fAw:function fAw(){},
fAt:function fAt(d){this.a=d},
fAu:function fAu(d){this.a=d},
fR7:function fR7(){},
fR8:function fR8(){},
fBw:function fBw(d){this.a=d},
fBx:function fBx(d){this.a=d},
fBt:function fBt(){},
fBu:function fBu(d){this.a=d},
fBv:function fBv(d){this.a=d},
fyJ:function fyJ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fyK:function fyK(d){this.a=d},
fjT:function fjT(d,e,f){this.a=d
this.b=e
this.c=f},
fZP:function fZP(d){this.a=d},
flc:function flc(d,e){this.a=d
this.b=e},
agR(d){var w
A:{if("outlet"===d){w="Outlet"
break A}if("gfci"===d){w="GFCI outlet"
break A}if("switch"===d){w="Light switch"
break A}if("light"===d){w="Ceiling light"
break A}if("fan"===d){w="Ceiling fan"
break A}w=A.t5(d).b
break A}return w},
fCI:function fCI(){},
fCJ:function fCJ(){},
fCK:function fCK(){},
fCL:function fCL(){},
fCM:function fCM(){},
fCN:function fCN(){},
fCO:function fCO(){},
fCP:function fCP(){},
fCQ:function fCQ(){},
fCR:function fCR(){},
aPP(d){return D.d.dK(B.a3O,new A.fyv(d),new A.fyw())},
hbp(d,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i={},h=new A.fZM(),g=new A.fZJ(),f=d.c,e=f==="hall"
if(!e&&d.p1!=="back"){w=a0.e?d.ghs(0)-14:Math.min(a0.d,d.ghs(0)-14)
v=h.$1(w)
return new A.abK(w,v,d.ghs(0)/2,g.$1(v))}if(e&&a1<2){w=a0.e?d.ghs(0)-14:Math.min(a0.d,d.ghs(0)-14)
v=h.$1(w)
return new A.abK(w,v,d.ghs(0)/2,g.$1(v))}if(e){f=C.a([],x.n)
for(e=d.w,u=e.length,t=0;t<e.length;e.length===u||(0,C.L)(e),++t){s=e[t]
if(s.b==="back"&&!s.a)f.push(s.c)}r=f.length===0?-40:D.d.f3(f,D.vC)-19-8
q=f.length===0?40:D.d.f3(f,D.pL)+19+8
p=d.gex(0)/2-8
f=a1===2?(-p+r)/2:(q+p)/2
return new A.abK(p-q,106,f,61)}e=d.gex(0)
q=d.gex(0)/2-6
if(f==="bathroom"&&!d.ok)q=14
f=C.a([],x.f)
for(u=d.w,o=u.length,t=0;t<u.length;u.length===o||(0,C.L)(u),++t){s=u[t]
if(s.b==="back"&&!s.a){n=s.c
f.push(new C.z(n-19,n+19))}}D.d.aY(f,new A.fZK())
m=i.a=i.b=-e/2+6
l=new A.fZL(i)
for(e=f.length,t=0;t<f.length;f.length===e||(0,C.L)(f),++t){u=f[t]
k=u.a
if(k>m)l.$2(m,Math.min(k,q))
m=Math.max(m,u.b)}if(m<q)l.$2(m,q)
j=Math.max(30,i.a-i.b-4)
w=a0.e?j:Math.min(a0.d,j)
v=h.$1(w)
return new A.abK(w,v,(i.b+i.a)/2,g.$1(v))},
zj(d,e,f,g,h,i,j,k){var w=x.S
return new A.a5l(d,e,f,g,h,i,j,k,C.a([],x._),C.a([0,0,0],x.t),C.aX(w),C.U(w,x.i),C.U(w,x.cR),C.U(w,w),C.U(w,x.gh),C.U(w,x.N),C.a([],x.cX),C.aX(w),C.aX(w))},
aWt(d){var w=new A.aWs(d)
w.c88()
return w},
hI8(d){var w=new A.aWs(7)
w.bzB(d)
return w},
imc(d){var w,v=d.c
A:{if("bedroom"===v){w=1
break A}if("kitchen"===v||"bathroom"===v){w=2
break A}w=0
break A}return w},
me:function me(d,e,f,g){var _=this
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
E7:function E7(d,e,f){this.a=d
this.b=e
this.c=f},
pS:function pS(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fyv:function fyv(d){this.a=d},
fyw:function fyw(){},
abK:function abK(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fZM:function fZM(){},
fZJ:function fZJ(){},
fZK:function fZK(){},
fZL:function fZL(d){this.a=d},
on:function on(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aWn:function aWn(d,e,f){this.a=d
this.b=e
this.c=f},
a5l:function a5l(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v){var _=this
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
bUn:function bUn(){},
bUm:function bUm(){},
aWs:function aWs(d){var _=this
_.a=""
_.b=d
_.c=!1
_.d=$
_.e=0},
bUY:function bUY(){},
bUZ:function bUZ(){},
bV_:function bV_(d){this.a=d},
bV0:function bV0(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bV1:function bV1(d,e){this.a=d
this.b=e},
bV5:function bV5(d){this.a=d},
bV2:function bV2(d,e){this.a=d
this.b=e},
bV4:function bV4(d,e,f){this.a=d
this.b=e
this.c=f},
bV3:function bV3(d,e,f){this.a=d
this.b=e
this.c=f},
bV9:function bV9(){},
bV8:function bV8(){},
bV7:function bV7(){},
bV6:function bV6(){},
b0U(d,e,f){return new A.IW(!1,d,e,null)},
hup(d){var w=A.vD(B.iu,d.e*3.141592653589793/2)
return new C.z(w.a,w.c)},
i8L(b3,b4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8=null,a9="A helicopter with its billboard",b0={},b1=C.a([],x.dI),b2=x.o
b0.a=C.a([],b2)
b0.b=C.a([],b2)
b0.c=C.a([],x.s)
b0.d=!1
w=new A.fz3(b0,b1)
v=new A.fza(b0)
u=new A.fz5(b3)
t=new A.fzb(b3)
s=new A.fyW(new A.fz4(t),new A.fz1(t,u))
r=new A.fz7(b0,u,s,v)
q=new A.fz8(b0,new A.fz9(r),s)
p=new A.fz6(b0,w,b1)
b2=D.d.t(B.dhL,b4)
o=!b2
n=x._
m=C.a([],n)
for(l=b3.x,k=l.length,j=0;j<l.length;l.length===k||(0,C.L)(l),++j){i=l[j]
h=i.b
if(h==="billboard"||h==="cornersign"||h==="adboard"||h==="tower"||h==="hq")m.push(i)}k=C.T(l).k("Z<1>")
g=new C.Z(l,new A.fyX(),k)
h=C.a([],n)
for(f=l.length,j=0;j<l.length;l.length===f||(0,C.L)(l),++j){i=l[j]
e=i.b
if(e==="house2"||e==="bighouse")h.push(i)}v.$3$note(B.h_8,B.fZd,"Welcome to NGMY Town")
if(!g.gan(0))q.$1(g.gI(0))
if(b4==="city"||o){v.$2(B.hcR,B.hcd)
v.$2(B.hcW,B.hcc)
v.$2(B.fZz,B.fYd)
v.$2(B.h49,B.h0U)
v.$2(B.h44,B.h0V)
v.$2(B.fZT,B.fYf)
w.$1$speed(200)}if(b4==="billboards"||o){d={}
v.$2(B.hcy,B.hct)
v.$3$note(B.fZp,B.Ar,"The big NGMY logo board: New Global Movement for Youth")
v.$2(B.h0D,B.Ar)
v.$2(B.h1r,B.Ar)
v.$2(B.h_o,B.Ar)
v.$2(B.hc2,B.Ar)
v.$2(B.hck,B.Ar)
v.$2(B.hbW,B.hce)
d.a=!g.gag(0).C()?B.fYe:new A.q(g.gI(0).c,0,g.gI(0).d)
a0=C.C(m,x.eB)
a1=0
for(;;){if(a0.length!==0)m=a1<(o?8:80)
else m=!1
if(!m)break
D.d.aY(a0,new A.fyY(d))
i=D.d.cz(a0,0)
q.$1(i)
d.a=new A.q(i.c,0,i.d);++a1}w.$1$speed(105)
for(a2=0;a2<2;++a2)b1.push(new A.Mn(B.rK,B.rK,130,6,a9,a8,!1,a8,a2))}if(b4==="edges"){n=C.a([],n)
for(m=l.length,j=0;j<l.length;l.length===m||(0,C.L)(l),++j){i=l[j]
f=i.b
if(f==="adboard"||f==="cornersign")n.push(i)}D.d.aY(n,new A.fyZ(new A.fyV()))
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
r.$7$note(i,150,50,270,330,70,i.b==="bighouse"?"A big house with TV windows":"A house");++a2}a4=new C.Z(h,new A.fz_(),x.am)
if(!a4.gan(0)){i=a4.gI(0)
a5=A.hup(i)
n=i.c
m=i.d
v.$2(new A.q(n+a5.a*220,110,m+a5.b*220),new A.q(n,45,m))
p.$1(i)}}if(b4==="hospital"||o)for(j=0;j<3;++j){a6=B.diT[j]
i=new C.Z(l,new A.fz0(a6),k)
if(!i.gag(0).C())continue
a7=i.gag(0)
if(!a7.C())C.b9(C.ft())
r.$7$note(a7.gS(0),160,50,300,360,60,"The "+a6)
a7=i.gag(0)
if(!a7.C())C.b9(C.ft())
p.$1(a7.gS(0))}w.$0()
if(b4==="traffic"||o){if(b2){for(a2=0;a2<2;++a2)b1.push(new A.Mn(B.rK,B.rK,130,6,a9,a8,!1,a8,a2))
o=!1}a2=0
for(;;){if(a2<4)b2=a2<(o?2:4)
else b2=!1
if(!b2)break
b1.push(new A.Mn(B.rK,B.rK,130,6,B.kn[a2].a==="bus"?"A self-driving bus with its billboards":"A self-driving police car",a8,!1,a2,a8));++a2}}return b1},
IW:function IW(d,e,f,g){var _=this
_.d=d
_.f=e
_.r=f
_.a=g},
aEJ:function aEJ(d,e,f,g,h,i,j,k,l,m,n,o,p,q){var _=this
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
_.aM=!1
_.b4=_.aC=null
_.bL=_.be=_.b2=0
_.aJ=null
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
_.f1=_.eu=_.ei=!1
_.ab=1
_.ez=400
_.ai=_.fB=!1
_.bE=_.al=null
_.bZ=0
_.du=""
_.cJ=null
_.eK=p
_.hO=_.hN=0
_.jf=-1
_.iN=q
_.h8=!1
_.mM=_.lg=-1e5
_.lA=0
_.c=_.a=_.qS=_.t7=null},
edY:function edY(){},
edV:function edV(d){this.a=d},
edW:function edW(d){this.a=d},
edU:function edU(){},
edX:function edX(d){this.a=d},
ecI:function ecI(d,e,f){this.a=d
this.b=e
this.c=f},
ecJ:function ecJ(d){this.a=d},
ecH:function ecH(d){this.a=d},
ecK:function ecK(d,e){this.a=d
this.b=e},
ebg:function ebg(d,e){this.a=d
this.b=e},
eda:function eda(d){this.a=d},
ecd:function ecd(d){this.a=d},
ece:function ece(d,e){this.a=d
this.b=e},
ecf:function ecf(d,e){this.a=d
this.b=e},
ecg:function ecg(d,e){this.a=d
this.b=e},
ech:function ech(d){this.a=d},
eaK:function eaK(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eaI:function eaI(d,e,f){this.a=d
this.b=e
this.c=f},
eaH:function eaH(d,e){this.a=d
this.b=e},
eaJ:function eaJ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eaF:function eaF(d,e){this.a=d
this.b=e},
eaG:function eaG(d,e,f){this.a=d
this.b=e
this.c=f},
eaE:function eaE(d,e){this.a=d
this.b=e},
eaT:function eaT(d){this.a=d},
eaU:function eaU(d){this.a=d},
eaV:function eaV(d){this.a=d},
ec6:function ec6(d){this.a=d},
ec8:function ec8(d){this.a=d},
ec7:function ec7(d){this.a=d},
ec9:function ec9(d){this.a=d},
ec5:function ec5(d){this.a=d},
eca:function eca(d){this.a=d},
ec4:function ec4(d){this.a=d},
ecb:function ecb(d){this.a=d},
ec3:function ec3(d){this.a=d},
ecc:function ecc(d){this.a=d},
ec2:function ec2(d){this.a=d},
eak:function eak(d){this.a=d},
eal:function eal(d){this.a=d},
eb4:function eb4(d){this.a=d},
eb6:function eb6(d){this.a=d},
eb5:function eb5(d){this.a=d},
eb7:function eb7(d){this.a=d},
eb3:function eb3(d){this.a=d},
eb8:function eb8(d){this.a=d},
eb2:function eb2(d){this.a=d},
eb9:function eb9(d){this.a=d},
eb1:function eb1(d){this.a=d},
eba:function eba(d){this.a=d},
eb0:function eb0(d){this.a=d},
ebb:function ebb(d){this.a=d},
eb_:function eb_(d){this.a=d},
ebc:function ebc(d){this.a=d},
eaZ:function eaZ(d){this.a=d},
ed8:function ed8(){},
ed9:function ed9(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
ed6:function ed6(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ed5:function ed5(d){this.a=d},
ed7:function ed7(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ebu:function ebu(d){this.a=d},
e9j:function e9j(){},
edB:function edB(){},
e9K:function e9K(){},
ebp:function ebp(d){this.a=d},
ebo:function ebo(d){this.a=d},
ebq:function ebq(d){this.a=d},
ebn:function ebn(d){this.a=d},
edC:function edC(d,e){this.a=d
this.b=e},
edA:function edA(d){this.a=d},
ecO:function ecO(d,e,f){this.a=d
this.b=e
this.c=f},
ecP:function ecP(d,e){this.a=d
this.b=e},
ecN:function ecN(d,e){this.a=d
this.b=e},
ecM:function ecM(d){this.a=d},
ecL:function ecL(d){this.a=d},
ebO:function ebO(){},
ebP:function ebP(){},
ebL:function ebL(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
ebN:function ebN(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ebM:function ebM(d){this.a=d},
ebJ:function ebJ(d){this.a=d},
ebI:function ebI(d){this.a=d},
ebK:function ebK(d,e){this.a=d
this.b=e},
ebH:function ebH(d,e){this.a=d
this.b=e},
ebd:function ebd(d){this.a=d},
ebe:function ebe(d){this.a=d},
ecE:function ecE(){},
eaR:function eaR(d){this.a=d},
eaQ:function eaQ(d){this.a=d},
eaS:function eaS(d,e){this.a=d
this.b=e},
eaD:function eaD(d){this.a=d},
ebv:function ebv(){},
ecQ:function ecQ(d,e){this.a=d
this.b=e},
eaP:function eaP(){},
ed0:function ed0(d){this.a=d},
eaN:function eaN(d){this.a=d},
eaO:function eaO(d,e){this.a=d
this.b=e},
eaM:function eaM(d){this.a=d},
eaL:function eaL(d){this.a=d},
ebk:function ebk(){},
ed_:function ed_(d,e){this.a=d
this.b=e},
edP:function edP(){},
eam:function eam(){},
ebh:function ebh(d,e){this.a=d
this.b=e},
ebi:function ebi(d){this.a=d},
ebj:function ebj(){},
eaX:function eaX(){},
eaY:function eaY(d){this.a=d},
ebx:function ebx(){},
eby:function eby(d,e){this.a=d
this.b=e},
e9R:function e9R(){},
e9Q:function e9Q(){},
e9S:function e9S(d){this.a=d},
e9P:function e9P(d){this.a=d},
e9T:function e9T(d){this.a=d},
e9O:function e9O(d){this.a=d},
e9U:function e9U(d,e){this.a=d
this.b=e},
e9N:function e9N(d){this.a=d},
e9V:function e9V(d,e){this.a=d
this.b=e},
e9M:function e9M(d,e){this.a=d
this.b=e},
e9W:function e9W(d){this.a=d},
e9L:function e9L(d){this.a=d},
eai:function eai(d){this.a=d},
eaj:function eaj(d){this.a=d},
ecD:function ecD(d,e,f){this.a=d
this.b=e
this.c=f},
ecB:function ecB(d,e,f){this.a=d
this.b=e
this.c=f},
ecC:function ecC(d,e){this.a=d
this.b=e},
ecx:function ecx(d,e,f){this.a=d
this.b=e
this.c=f},
ecw:function ecw(){},
ecy:function ecy(d,e){this.a=d
this.b=e},
ecz:function ecz(d,e){this.a=d
this.b=e},
ecA:function ecA(d,e){this.a=d
this.b=e},
ecn:function ecn(d,e){this.a=d
this.b=e},
eck:function eck(){},
ecl:function ecl(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ecj:function ecj(d,e,f){this.a=d
this.b=e
this.c=f},
ecm:function ecm(d,e,f){this.a=d
this.b=e
this.c=f},
eci:function eci(d,e){this.a=d
this.b=e},
edz:function edz(d){this.a=d},
edx:function edx(d){this.a=d},
edy:function edy(d,e){this.a=d
this.b=e},
edp:function edp(d,e,f){this.a=d
this.b=e
this.c=f},
edo:function edo(){},
edq:function edq(){},
edr:function edr(d,e){this.a=d
this.b=e},
eds:function eds(d,e){this.a=d
this.b=e},
edt:function edt(d){this.a=d},
edu:function edu(d){this.a=d},
edv:function edv(d){this.a=d},
edw:function edw(d){this.a=d},
edl:function edl(d){this.a=d},
edj:function edj(d){this.a=d},
edk:function edk(){},
edf:function edf(d,e,f){this.a=d
this.b=e
this.c=f},
edd:function edd(d){this.a=d},
ede:function ede(){},
edg:function edg(d,e,f){this.a=d
this.b=e
this.c=f},
edc:function edc(d,e){this.a=d
this.b=e},
edh:function edh(d,e){this.a=d
this.b=e},
edi:function edi(d,e){this.a=d
this.b=e},
ecX:function ecX(d,e){this.a=d
this.b=e},
ecY:function ecY(d){this.a=d},
ecZ:function ecZ(){},
edm:function edm(d,e){this.a=d
this.b=e},
edb:function edb(d,e){this.a=d
this.b=e},
ed3:function ed3(d){this.a=d},
ed4:function ed4(){},
ecW:function ecW(){},
ed2:function ed2(){},
edK:function edK(d){this.a=d},
edL:function edL(d){this.a=d},
edM:function edM(d){this.a=d},
edN:function edN(){},
edD:function edD(d){this.a=d},
edE:function edE(d){this.a=d},
edF:function edF(d,e){this.a=d
this.b=e},
edG:function edG(d,e){this.a=d
this.b=e},
edH:function edH(d,e){this.a=d
this.b=e},
edI:function edI(d,e){this.a=d
this.b=e},
edJ:function edJ(d,e){this.a=d
this.b=e},
eaW:function eaW(){},
ebC:function ebC(d){this.a=d},
ebz:function ebz(){},
ebA:function ebA(){},
ebB:function ebB(){},
ebl:function ebl(){},
ebm:function ebm(d){this.a=d},
ecR:function ecR(){},
ebf:function ebf(d){this.a=d},
ecF:function ecF(){},
ecG:function ecG(d){this.a=d},
ecS:function ecS(d){this.a=d},
ecT:function ecT(d){this.a=d},
ebs:function ebs(d){this.a=d},
ebr:function ebr(d){this.a=d},
ebt:function ebt(d){this.a=d},
ecU:function ecU(d){this.a=d},
ecV:function ecV(){},
ed1:function ed1(d){this.a=d},
ebR:function ebR(){},
ebS:function ebS(d){this.a=d},
ec_:function ec_(d){this.a=d},
ec0:function ec0(){},
ec1:function ec1(d){this.a=d},
ebU:function ebU(d){this.a=d},
ebV:function ebV(d,e){this.a=d
this.b=e},
ebT:function ebT(d,e){this.a=d
this.b=e},
ebW:function ebW(d,e){this.a=d
this.b=e},
ebZ:function ebZ(d){this.a=d},
ebX:function ebX(d){this.a=d},
ebQ:function ebQ(d){this.a=d},
ebY:function ebY(d){this.a=d},
ebD:function ebD(d){this.a=d},
ebE:function ebE(d){this.a=d},
edO:function edO(d){this.a=d},
ebG:function ebG(d){this.a=d},
ebF:function ebF(d){this.a=d},
e9i:function e9i(d){this.a=d},
e9h:function e9h(d,e,f){this.a=d
this.b=e
this.c=f},
e9c:function e9c(){},
e9d:function e9d(){},
e9e:function e9e(d){this.a=d},
e9f:function e9f(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ebw:function ebw(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
edn:function edn(d,e){this.a=d
this.b=e},
ecu:function ecu(d,e){this.a=d
this.b=e},
ecv:function ecv(d,e){this.a=d
this.b=e},
e9g:function e9g(d,e){this.a=d
this.b=e},
eas:function eas(d){this.a=d},
eat:function eat(d){this.a=d},
eau:function eau(d){this.a=d},
eav:function eav(d){this.a=d},
eaw:function eaw(d,e){this.a=d
this.b=e},
eax:function eax(d){this.a=d},
ear:function ear(d){this.a=d},
eay:function eay(d,e){this.a=d
this.b=e},
eaq:function eaq(d,e){this.a=d
this.b=e},
eaz:function eaz(d,e){this.a=d
this.b=e},
eap:function eap(d,e){this.a=d
this.b=e},
eaA:function eaA(d){this.a=d},
eao:function eao(d){this.a=d},
eaB:function eaB(d,e){this.a=d
this.b=e},
ean:function ean(d,e){this.a=d
this.b=e},
eaC:function eaC(d,e){this.a=d
this.b=e},
edR:function edR(d){this.a=d},
edT:function edT(d){this.a=d},
edQ:function edQ(d){this.a=d},
edS:function edS(d){this.a=d},
ea4:function ea4(d){this.a=d},
ea5:function ea5(d){this.a=d},
ea6:function ea6(d){this.a=d},
eaa:function eaa(d){this.a=d},
eab:function eab(d){this.a=d},
eac:function eac(d){this.a=d},
ea3:function ea3(d){this.a=d},
ead:function ead(d){this.a=d},
ea2:function ea2(d){this.a=d},
eae:function eae(d){this.a=d},
ea1:function ea1(d){this.a=d},
eaf:function eaf(d){this.a=d},
eag:function eag(d){this.a=d},
ea0:function ea0(d){this.a=d},
eah:function eah(d){this.a=d},
ea_:function ea_(d){this.a=d},
ea7:function ea7(d){this.a=d},
e9Z:function e9Z(d){this.a=d},
ea8:function ea8(d){this.a=d},
e9Y:function e9Y(d){this.a=d},
ea9:function ea9(d){this.a=d},
e9X:function e9X(d){this.a=d},
e9p:function e9p(d){this.a=d},
e9D:function e9D(d){this.a=d},
e9C:function e9C(){},
e9q:function e9q(d){this.a=d},
e9r:function e9r(d){this.a=d},
e9E:function e9E(){},
e9u:function e9u(d,e){this.a=d
this.b=e},
e9F:function e9F(d){this.a=d},
e9o:function e9o(d){this.a=d},
e9G:function e9G(d){this.a=d},
e9H:function e9H(d){this.a=d},
e9n:function e9n(d){this.a=d},
e9I:function e9I(d){this.a=d},
e9J:function e9J(d){this.a=d},
e9s:function e9s(d){this.a=d},
e9m:function e9m(d){this.a=d},
e9t:function e9t(d){this.a=d},
e9l:function e9l(d){this.a=d},
e9v:function e9v(d){this.a=d},
e9w:function e9w(d){this.a=d},
e9x:function e9x(d){this.a=d},
e9y:function e9y(d){this.a=d},
e9z:function e9z(d){this.a=d},
e9A:function e9A(d){this.a=d},
e9B:function e9B(d){this.a=d},
e9k:function e9k(){},
ect:function ect(d){this.a=d},
ecq:function ecq(d,e,f){this.a=d
this.b=e
this.c=f},
ecr:function ecr(d,e){this.a=d
this.b=e},
ecp:function ecp(d){this.a=d},
ecs:function ecs(d,e){this.a=d
this.b=e},
eco:function eco(d){this.a=d},
bjS:function bjS(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
dv4:function dv4(d,e){this.a=d
this.b=e},
bjh:function bjh(d,e){this.b=d
this.a=e},
aIY:function aIY(d,e){this.c=d
this.a=e},
btW:function btW(){this.c=this.a=this.d=null},
f6L:function f6L(d,e){this.a=d
this.b=e},
f6K:function f6K(d){this.a=d},
f6N:function f6N(d){this.a=d},
f6O:function f6O(d){this.a=d},
f6P:function f6P(d){this.a=d},
f6M:function f6M(d){this.a=d},
f1i:function f1i(d,e,f){var _=this
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
Qj:function Qj(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fz3:function fz3(d,e){this.a=d
this.b=e},
fza:function fza(d){this.a=d},
fz5:function fz5(d){this.a=d},
fzb:function fzb(d){this.a=d},
fz4:function fz4(d){this.a=d},
fz1:function fz1(d,e){this.a=d
this.b=e},
fz2:function fz2(d,e){this.a=d
this.b=e},
fyW:function fyW(d,e){this.a=d
this.b=e},
fz7:function fz7(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fz9:function fz9(d){this.a=d},
fz8:function fz8(d,e,f){this.a=d
this.b=e
this.c=f},
fz6:function fz6(d,e,f){this.a=d
this.b=e
this.c=f},
fyX:function fyX(){},
fyY:function fyY(d){this.a=d},
fyV:function fyV(){},
fyZ:function fyZ(d){this.a=d},
fz_:function fz_(){},
fz0:function fz0(d){this.a=d},
hk1(){var w=$.hk0
return w==null?$.hk0=new A.cgo().$0():w},
ij4(d,e,f){var w,v,u,t,s,r,q,p,o,n=null,m=e.a,l=e.b,k=new C.a3(0,0,0+m,0+l),j=C.br(k,D.is)
$.S()
w=C.I()
w.sam(B.c5b.aA(0,k))
d.az(j,w)
v=C.I()
v.b=D.a9
v.r=F.fz.gp(0)
v.c=l*0.025
w=l*0.05
j=l*0.08
d.az(C.br(k.cq(-w),new C.aP(j,j)),v)
w=C.br(k.cq(-(l*0.1)),new C.aP(w,w))
v.c=l*0.01
d.az(w,v)
u=new C.t(m/2,l/2)
t=l*0.36
l=C.I()
l.r=G.ah_.gp(0)
d.ad(u,t*1.1,l)
l=C.I()
l.r=F.fz.gp(0)
d.ad(u,t,l)
l=C.I()
l.r=B.F7.gp(0)
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
p=C.bK(r.gbK(),l*q,m*q)
j=C.I()
j.Q=D.ci
d.oC(s,new C.a3(0,0,m,l),p,j)}else{o=C.fw(n,n,n,n,C.cS(n,n,n,n,n,n,n,n,n,C.l(n,n,E.jL,n,n,n,n,n,n,n,n,t*0.6,n,n,D.u,n,n,!0,n,n,n,n,n,n,n,n),"NGMY"),D.a4,D.bX,n,D.dA,D.bV)
o.ej()
m=o.b
l=m.c
m=m.a.c
o.a3(d,u.aE(0,new C.t(l/2,m.gbb(m)/2)))}},
hy4(d,e,f){var w,v,u,t,s,r,q,p,o=null,n=e.eh(D.I),m=e.gdC()/2
$.S()
w=C.I()
w.r=F.fz.gp(0)
d.ad(n,m,w)
w=C.I()
w.r=B.F7.gp(0)
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
r=C.bK(u.gbK(),t*s,w*s)
q=C.I()
q.Q=D.ci
d.oC(v,new C.a3(0,0,w,t),r,q)}else{p=C.fw(o,o,o,o,C.cS(o,o,o,o,o,o,o,o,o,C.l(o,o,E.jL,o,o,o,o,o,o,o,o,m*0.6,o,o,D.u,o,o,!0,o,o,o,o,o,o,o,o),"NGMY"),D.a4,D.bX,o,D.dA,D.bV)
p.ej()
w=p.b
t=w.c
w=w.a.c
p.a3(d,n.aE(0,new C.t(t/2,w.gbb(w)/2)))}},
H6(d,e,f,g,h){var w,v,u,t,s,r,q,p,o,n,m=null,l=e.a,k=e.b,j=new C.a3(0,0,0+l,0+k),i=e.gdC()*0.08
i=C.br(j,new C.aP(i,i))
$.S()
w=C.I()
w.sam(B.ari.aA(0,j))
d.az(i,w)
w=j.cq(-(e.gdC()*0.045))
i=e.gdC()*0.06
i=C.br(w,new C.aP(i,i))
w=C.I()
w.b=D.a9
w.r=F.fz.gp(0)
w.c=e.gdC()*0.035
d.az(i,w)
v=k*0.33
u=new C.t(k*0.6,k*0.5)
w=C.I()
w.r=F.fz.gp(0)
d.ad(u,v,w)
w=C.I()
w.r=B.F7.gp(0)
d.ad(u,v*0.88,w)
t=$.W9
s=C.bK(u,v*1.15,v*1.4)
if(t!=null){i=t.c
w=t.d
r=Math.min((s.c-s.a)/i,(s.d-s.b)/w)
q=C.bK(s.gbK(),w*r,i*r)
p=C.I()
p.Q=D.ci
d.oC(t,new C.a3(0,0,i,w),q,p)}else{o=C.fw(m,m,m,m,C.cS(m,m,m,m,m,m,m,m,m,C.l(m,m,E.jL,m,m,m,m,m,m,m,m,v*0.55,m,m,D.u,m,m,!0,m,m,m,m,m,m,m,m),"NGMY"),D.a4,D.bX,m,D.dA,D.bV)
o.ej()
i=o.b
w=i.c
i=i.a.c
o.a3(d,u.aE(0,new C.t(w/2,i.gbb(i)/2)))}n=k*1.08
l=new A.fQp(l-n-k*0.2,d,n)
l.$4(g,k*0.36,D.c,k*0.16)
l.$4(h,k*0.14,F.fz,k*0.62)},
htJ(d){return 210+D.o.F(d.l(),5)*24},
fQl(d,e,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k="NEW GLOBAL",j="MOVEMENT",i="FOR YOUTH",h=e.a,g=e.b,f=new C.a3(0,0,0+h,0+g)
A:{if(0===a1){w=B.ari
break A}if(1===a1){w=B.c50
break A}w=B.c32
break A}v=e.gdC()*0.06
v=C.br(f,new C.aP(v,v))
$.S()
u=C.I()
u.sam(w.aA(0,f))
d.az(v,u)
t=C.I()
t.b=D.a9
w=a1===2
t.r=(w?E.jL:F.fz).gp(0)
t.c=e.gdC()*0.04
v=f.cq(-(e.gdC()*0.05))
u=e.gdC()*0.05
d.az(C.br(v,new C.aP(u,u)),t)
u=f.cq(-(e.gdC()*0.1))
v=e.gdC()*0.03
v=C.br(u,new C.aP(v,v))
t.c=e.gdC()*0.012
d.az(v,t)
if(a1===1)s=E.jL
else s=w?E.jL:D.c
w=new A.fQn($.W9,d,s)
v=new A.fQm(s,e,d)
u=g*0.4
r=g*0.12
if(a1===0){q=g*0.5
p=new C.t(g*0.62,q)
o=C.I()
o.r=F.fz.gp(0)
d.ad(p,g*0.34,o)
o=C.I()
o.r=B.F7.gp(0)
d.ad(p,g*0.3,o)
w.$1(C.bK(p,u,q))
n=g*1.04
m=h-r
r=new A.fQo(e)
h=r.$1(k)
q=r.$1(j)
r=r.$1(i)
r=Math.max(C.jY(q),C.jY(r))
l=(n+m)/2
r=g*0.16*Math.min(1,(m-n)/Math.max(C.jY(h),r))
v.$3(k,new C.t(l,g*0.2),r)
v.$3(j,new C.t(l,u),r)
v.$3(i,new C.t(l,g*0.6),r)}else{q=h/2
w.$1(C.bK(new C.t(q,g*0.42),u,h*0.6))
v.$3("NGMY",new C.t(q,g*0.68),r)
v.$4$w(i,new C.t(q,g*0.82),g*0.06,D.U)}},
hu0(f8,f9,g0,g1,g2,g3,g4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6,d7,d8,d9,e0,e1,e2,e3,e4,e5,e6,e7,e8,e9,f0,f1,f2,f3="walls",f4="GFCI outlet",f5="Wall outlet",f6="\ud83d\udeb0 Needs plumbing",f7=f8.c
if(f7==="outside")return A.i3J(f8,g2,g1,g4,g3,g0)
f8.cJc()
w=x.z
v=C.a([],w)
u=new A.fl(v)
t=C.U(x.S,x.q)
s=C.a([],x.E)
r=C.a([],x.a)
q=f8.gex(0)
p=f8.ghs(0)
o=C.a([],x.O)
for(n=f8.z,m=n.length,l=0;l<n.length;n.length===m||(0,C.L)(n),++l)o.push(B.azy[n[l]])
k=B.azh[f8.Q]
j=new A.fzs(g1)
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
u.nc(new A.q(0,-0.6,n),new A.q(m,1.2,h),g,d,3)
t.n(0,310,new A.cX("Floor","The "+k.a.toLowerCase()+" floor.",new A.q(0,0,n),140))
u.b=0
if(f==="wood")for(f=-q/2,a0=1;a0<8;++a0){e=C.ar(g,D.w,0.25)
e.toString
u.aP(new A.q(f+a0*q/8,0.05,n),new A.q(0.3,0.2,p),e)}else if(e)for(g=-q/2,a0=1;a0<6;++a0){u.aP(new A.q(g+a0*q/6,0.05,n),new A.q(0.3,0.2,p),B.aeD)
u.aP(new A.q(0,0.05,a0*p/6),new A.q(q,0.2,0.3),B.aeD)}u.x=0
g=f7==="hall"
if(g){a1=Math.min(q*0.5,p*1.5)
a2=p-14
f=-a1/2
e=a1/2
r.push(new A.fP(C.a([new A.q(f,0.5,14),new A.q(e,0.5,14),new A.q(e,0.5,a2),new A.q(f,0.5,a2)],x.o),0,A.hxR(),900,900*(a2-14)/a1,60,-1,i,!1))}u.f=0
u.b=j.$2(f3,300)
a3=u.x=$.dS=$.dS+1
u.hr(new A.q(0,65,-0.6),new A.q(m,130,1.2),o[0],3)
u.x=0
u.b=j.$2(f3,301)
a4=u.x=$.dS=$.dS+1
f=-q
e=f/2
u.hr(new A.q(e-0.6,65,n),new A.q(1.2,130,p),o[1],3)
u.x=0
u.b=j.$2(f3,302)
a5=u.x=$.dS=$.dS+1
d=q/2
u.hr(new A.q(d+0.6,65,n),new A.q(1.2,130,p),o[2],3)
u.x=0
t.n(0,300,B.eck)
t.n(0,301,B.eco)
t.n(0,302,B.ecx)
if(f9){u.b=0
u.hr(new A.q(0,65,p+0.6),new A.q(m,130,1.2),o[0],3)}u.f=u.b=0
u.x=a3
u.aZ(new A.q(0,2.5,0.4),new A.q(q,5,0.8),B.kD,0.1)
u.x=a4
u.aZ(new A.q(e+0.4,2.5,n),new A.q(0.8,5,p),B.kD,0.1)
u.x=a5
u.aZ(new A.q(d-0.4,2.5,n),new A.q(0.8,5,p),B.kD,0.1)
u.x=0
u.f=f9?0:3
u.b=j.$2("ceiling",320)
if(f9)o=1
else o=g1==="ceiling"?0.6:0.4
u.d=o
u.hr(new A.q(0,130.6,n),new A.q(m,1.2,h),B.ay3[f8.as],2)
u.d=1
u.b=u.f=0
u.x=a3
u.aZ(new A.q(0,128,1),new A.q(q,3,1.4),D.c,0.2)
u.x=a4
u.aZ(new A.q(e+1,128,n),new A.q(1.4,3,p),D.c,0.2)
u.x=a5
u.aZ(new A.q(d-1,128,n),new A.q(1.4,3,p),D.c,0.2)
u.x=0
t.n(0,320,new A.cX("Ceiling","Pick a colour above to paint the ceiling.",new A.q(0,130,n),140))
h=f8.w
a6=D.d.b3(h,new A.fze())?"left":"right"
if(!g){o=new A.fzp()
a7=p*0.55
if(f9)D.d.v(v,A.nC(o.$0(),0,3.141592653589793,new A.q(0,0,p+0.2)))
D.d.v(v,a6==="right"?A.nC(o.$0(),0,-1.5707963267948966,new A.q(d,0,a7)):A.nC(o.$0(),0,1.5707963267948966,new A.q(e,0,a7)))}for(o=f8.ax,m=f8.at,a0=0;a0<h.length;++a0){a8=h[a0]
if(a8.a)continue
a9=o.h(0,a0)
if(a9==null)a9=m.t(0,a0)?1.25:0
b0=C.a([],w)
b1=new A.fl(b0)
b1.f=1
b1.x=$.dS=$.dS+1
b2=b1.b=600+a0
b1.aP(B.h9D,B.h9m,B.kD)
b3=C.a([],w)
b4=new A.fl(b3)
b4.r=!0
b4.b=b2
if(a9>0.04){b1.b=0
b5=A.i0K(a8.d)
b6=b5.a
b1.aP(B.h7P,B.h4m,b6)
b1.aP(B.h8U,B.hfm,b5.b)
b7=C.ar(b6,D.w,0.25)
b7.toString
b1.aP(B.h80,B.hdi,b7)
b8=-a9
b7=A.vD(B.hfh,b8)
b4.wr(new A.q(-12.5+b7.a,0+b7.b,1.2+b7.c),B.h3_,B.vE,0.15,b8)}else{b1.aZ(B.h84,B.h73,B.vE,0.15)
b1.aZ(B.h8c,B.h8x,B.F1,0.8)
b1.aP(B.h8z,B.aXn,B.MN)
b1.aP(B.heK,B.aXn,B.MN)}b7=new A.fzq(a8,q,p)
D.d.v(v,b7.$1(b0))
D.d.v(v,b7.$1(b3))
t.n(0,b2,new A.cX("Door","Tap the door to go through it.",B.aVO,90))}for(o=f8.x,m=o.length,l=0;l<o.length;o.length===m||(0,C.L)(o),++l){b9=o[l]
b0=b9.b
b2=B.hC.h(0,b0)
b2.toString
b3=C.a([],w)
c0=new A.fl(b3)
c0.r=!0
c0.f=b0==="rug"?1:2
b7=100+b9.a
c0.b=j.$2("furniture",b7)
A.h6B(c0,b0,B.zk[b9.f])
D.d.v(v,A.nC(A.i6C(b3,0.8),0,b9.e*3.141592653589793/2,new A.q(b9.c,0,b9.d)))
t.n(0,b7,new A.cX(b2.a,y.M,new A.q(b9.c,12,b9.d),90))}u.f=2
u.r=!0
c1=p*0.5
w=C.T(h)
o=d-10
c2=D.k.E(new C.cQ(new C.Z(h,new A.fzf(),w.k("Z<1>")),new A.fzg(),w.k("cQ<1,K>")).cI(0,e+30,new A.fzh())+24,e+10,o)
c3=f8.go==="fan"
c4=f8.ga6b()
c5=c4&&f8.gMh()&&f8.fy
u.b=703
if(c3){u.dN(new A.q(0,129.5,c1),new A.q(0,120,c1),1,B.hs,8)
u.dR(new A.q(0,120,c1),new A.q(0,113,c1),6,D.jd,0.5,14)
w=c5?B.o4:D.dv
u.dR(new A.q(0,113,c1),new A.q(0,110,c1),3.6,w,0.6,12)}else{w=c5?B.o4:D.dv
u.dR(new A.q(0,129.5,c1),new A.q(0,127,c1),7,w,0.6,16)}if(c5&&!c3){u.b=0
u.f=3
u.d=0.2
u.L8(new A.q(0,127,c1),new A.q(0,0.5,c1),36,B.o4,!1,14)
u.d=1
u.f=2}c6=c3?"Ceiling fan":"Ceiling light"
if(!c4)c7="It has no power yet. "+(f8.p4.length!==0?"Tap it to wire it.":"The room still needs wiring: use the Wiring button.")
else if(!f8.gMh())c7="It is ready: wire the wall switch to turn it on."
else{w=f8.fy?"It is on. Tap the wall switch (or tap this) to turn it off.":"It is off. Tap the wall switch (or tap this) to turn it on."
c7=w}t.n(0,703,new A.cX(c6,c7,new A.q(0,122,c1),80))
w=f7==="bathroom"
m=!w
c8=!m||f7==="kitchen"||f8.p4==="gfci"
h=f8.ganC()
b0=c8?f4:f5
b2=f8.p4.length!==0||f8.Ip(1)
b3=c8?f4:f5
b3=C.a([new C.ec([0,700,f/4,h,b0]),new C.ec([1,701,q/4,b2,b3])],x.az)
for(h=f8.id,a0=0;a0<h.length;++a0){f=h[a0]
b0=f.a
if(b0!=="switch"){b2=f.c
b0=b2.c>=2&&A.La(A.t5(b0),b2).a==="ok"
b2=h[a0].a==="gfci"?"Added GFCI outlet":"Added outlet"
b3.push(new C.ec([2+a0,800+a0,f.b,b0,b2]))}}u.f=1
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
if(b2!=null)b2=b2.bim(a0)
else b2=f8.ay?0:2}d3=b2}else d3=0
if(d1)b2=D.bf
else b2=d3===1?D.aE:D.ax
u.aP(new A.q(d0,14,0.25),B.h50,b2)
u.d=1
u.e=0
b2=d1?B.MC:D.jd
u.aZ(new A.q(d0,14,0.9),B.ha6,b2,0.25)
u.b=0
for(d4=0;d4<2;++d4)for(b2=14+F.hB[d4]*2.8,d5=0;d5<2;++d5)u.aP(new A.q(d0+B.Rh[d5],b2,1.7),B.hf6,B.agX)
u.aP(new A.q(d0,14,1.7),B.ha4,D.dv)
u.x=0
if(!d1)b2="This one is not wired yet. Tap it to wire it."
else b2=b0.h(0,a0)==null?"Tap it to plug something in.":"Tap it to plug something else in, or to unplug."
t.n(0,c9,new A.cX(d2,b2,new A.q(d0,14,2),60))}f=C.a([new C.b7(702,c2,f8.gMh())],x.al)
for(a0=0;a0<h.length;++a0){b2=h[a0]
b7=b2.a
if(b7==="switch"){d6=b2.c
b7=d6.c>=2&&A.La(A.t5(b7),d6).a==="ok"
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
if(b2!=null)b2=b2.bim(3)
else b2=f8.ay?0:2}d7=b2}else d7=0
if(d1)b2=D.bf
else b2=d7===1?D.aE:D.ax
u.aP(new A.q(d0,48,0.25),B.h6O,b2)
u.d=1
u.e=0
b2=d1?B.MC:D.jd
u.aZ(new A.q(d0,48,0.9),B.h63,b2,0.25)
u.aP(new A.q(d0,f8.fy&&d1?49.2:46.8,1.9),B.h5V,B.aiJ)
u.x=0
if(!d1)b2="Not wired yet. Tap it to wire it."
else if(f8.fy)b2="On. Tap to turn the "+(c3?"fan":"light")+" off."
else b2="Off. Tap to turn the "+(c3?"fan":"light")+" on."
t.n(0,c9,new A.cX("Light switch",b2,new A.q(d0,48,2),60))}if(f8.p4.length===0&&!f8.gkO()){if(f8.p4.length===0)h=f8.gkO()
else h=!0
if(h)d8=D.Y
else{h=C.a([],x.s)
if(!f8.ganC())h.push("outlet 1")
if(!(f8.p4.length!==0||f8.Ip(1)))h.push("outlet 2")
if(!f8.ga6b())h.push(f8.go==="fan"?"ceiling fan":"ceiling light")
if(!f8.gMh())h.push("switch")
d8=h}h=d8.length===0?"\u26a1 No power: needs wiring":"\u26a1 Still to wire: "+D.d.aG(d8,", ")
s.push(new A.hh(new A.q(0,104,c1),h,D.bz,0))}h=!1
if(f8.p4.length!==0)if(!f8.gz9()){h=f8.p4
h=!(h==="ptrap"||h==="faucet")}if(h)s.push(new A.hh(new A.q(0,40,14),"\ud83d\udc46 Tap the red one to wire it",D.bz,0))
u.f=2
u.r=!0
for(h=b3.length,f=x.o,b2=f8.a,l=0;l<b3.length;b3.length===h||(0,C.L)(b3),++l){b7=b3[l].a
a0=b7[0]
d0=b7[2]
d1=b7[3]
d9=b0.h(0,a0)
if(d9==null||!d1)continue
e0=A.aPP(d9)
b7=u.b=720+a0
u.jk(C.a([new A.q(d0,12,1.8),new A.q(d0,6,3),new A.q(d0,2,11)],f),0.3,B.Yx,!1,0.2,6)
d6=e0.d
e1=d6<=0
if(!e1||e0.e){b8=d6*0.56
e2=$.dS+1
u.x=$.dS=e2
u.aZ(new A.q(d0,2,15),new A.q(d6*0.45,4,14),B.hs,0.3)
u.aZ(new A.q(d0,8,15),B.h4s,B.hs,0.3)
e3=12+b8/2
u.aZ(new A.q(d0,e3,15),new A.q(d6,b8,3),E.Fr,0.5)
d6=(d6-3.5)/2
e4=d0-d6
e5=(b8-3.5)/2
e6=e3+e5
d6=d0+d6
e5=e3-e5
r.push(new A.fP(C.a([new A.q(e4,e6,16.6),new A.q(d6,e6,16.6),new A.q(d6,e5,16.6),new A.q(e4,e5,16.6)],f),b7,new A.fzi(a0*7+b2),320,180,9,2,e2,!0))
u.x=0}else{d6=e0.a
if(d6==="lamp"){u.dR(new A.q(d0,0,14),new A.q(d0,1,14),6,B.Xv,0.4,14)
u.dR(new A.q(d0,1,14),new A.q(d0,22,14),1,B.Bv,0.5,8)
d6=f8.fy?B.o4:L.YE
u.yT(new A.q(d0,20,14),new A.q(d0,32,14),9,d6,!1,!0,5.5,0.2,16)}else{u.aZ(new A.q(d0,9,15),B.h0s,B.nT,0.1)
if(d6==="toaster"){u.aZ(new A.q(d0,23,15),B.h0l,B.jI,0.8)
u.aP(new A.q(d0,28.2,15),B.hbg,B.aia)}else{u.BE(new A.q(d0-7,21,15),new A.q(d0+7,21,15),3.6,B.Mv,3,0.6,12)
u.aZ(new A.q(d0-8,14.5,15),B.h8t,B.Mv,0.6)}}}d6=!e1||e0.e?"It is playing NGMY ads. Tap it to watch full screen with the remote.":"It is plugged in and running. Tap the outlet to unplug it or plug in something else."
t.n(0,b7,new A.cX(e0.b,d6,new A.q(d0,16,14),90))}u.f=1
u.r=!1
e7=new A.fzk(f8,u,q,r,t)
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
u.aP(new A.q(e9,125,f0),B.h3t,D.jd)
u.wr(new A.q(e9,118,f0),B.h_B,D.bO,0.4,f1)
u.wr(new A.q(e9+Math.sin(f1)*8.5,118,f0+Math.cos(f1)*8.5),B.h4r,D.av,0.6,f1)
u.ec(new A.q(e9-Math.sin(f1)*5+Math.cos(f1)*3,122,f0-Math.cos(f1)*5-Math.sin(f1)*3),1.4,D.ax,3,5)
u.b=u.x=0
t.n(0,g,new A.cX("Hall camera","Tap it and you look from here, like your eyes.",new A.q(e9,118,f0),60))}u.f=2
u.r=!0
if(!m||f7==="kitchen"){f7=f8.p4
f7=f7.length===0||f7==="ptrap"||f7==="faucet"}else f7=!1
if(f7){d1=f8.gjR()
f7=new A.fzr(u)
if(w){f2=e+17
if(d1){u.b=710
u.BE(new A.q(6,0.5,14),new A.q(6,15,14),8,B.Bc,5.6,0.8,18)
u.dR(new A.q(6,15,14),new A.q(6,16,14),9,B.ME,0.8,18)
u.aZ(new A.q(6,21,5),B.h0E,B.Bc,0.8)
u.aZ(new A.q(6,28,5),B.h7E,B.ME,0.8)}else{u.b=710
u.d=0.3
u.f=3
u.aP(new A.q(6,14,9),B.h0v,D.b4)
u.d=1
u.f=2
f7.$2(-4,8)}u.b=711
u.aZ(new A.q(34,14,10),B.h1U,B.nT,0.1)
u.aZ(new A.q(34,29,10),B.h20,B.Y6,0.4)
if(d1){u.dR(new A.q(34,29.3,10),new A.q(34,30.1,10),6.5,D.c,0.6,18)
u.bka(C.a([new A.q(34,30,4),new A.q(34,36,4),new A.q(34,38,7)],f),0.6,B.jI,0.9,8)}else{f7.$2(28,18)
f7.$2(40,18)}u.b=712
if(d1){u.aZ(new A.q(f2,8,38),B.aWi,B.YY,0.7)
u.aZ(new A.q(f2,16.2,38),B.hdd,B.XS,0.8)
u.dR(new A.q(f2,30,3),new A.q(f2,52,3),0.7,B.jI,0.9,8)
u.dR(new A.q(f2,52,3),new A.q(f2,52,10),0.7,B.jI,0.9,8)}else{u.d=0.3
u.f=3
u.aP(new A.q(f2,8,38),B.aWi,D.b4)
u.d=1
u.f=2
f7.$2(f2-4,34)
f7.$2(f2+4,34)}f7=d1?"Fitted on its flange with a wax ring, and the supply hose joins the shut-off valve.":"There is no toilet yet: only the flange and the water stub. Use the Plumbing button to fit it."
t.n(0,710,new A.cX("Toilet",f7,new A.q(6,14,10),70))
f7=d1?"The faucet, the hoses and the P-trap are fitted.":"The sink is not plumbed. Use the Plumbing button."
t.n(0,711,new A.cX("Vanity sink",f7,new A.q(34,28,10),70))
f7=d1?"The bath is in and connected.":"The bath is not connected yet."
t.n(0,712,new A.cX("Bath",f7,new A.q(f2,10,38),90))
if(!d1)s.push(new A.hh(new A.q(0,40,14),f6,D.bl,0))}else{u.b=0
u.aZ(new A.q(e+15,36,14),B.h1w,B.agI,0.6)
u.aP(new A.q(e+28.5,36,14.4),B.h9M,D.dv)
u.aZ(new A.q(o,15,14),B.h13,B.af5,0.1)
u.aZ(new A.q(o,31,14),B.h1e,B.hs,0.5)
u.aZ(new A.q(d-15,32.4,14),B.aWI,D.i1,0.3)
u.aZ(new A.q(d-5,32.4,14),B.aWI,D.i1,0.3)
u.b=713
u.aZ(new A.q(30,15,14),B.h2B,B.nT,0.1)
u.aZ(new A.q(30,31,14),B.h2F,B.Mh,0.5)
if(d1){u.dR(new A.q(30,32.1,14),new A.q(30,32.7,14),8,B.Fl,0.8,18)
u.bka(C.a([new A.q(30,32,5),new A.q(30,42,5),new A.q(30,44,9),new A.q(30,44,13)],f),0.7,B.jI,0.9,8)}else{f7.$2(22,18)
f7.$2(38,18)}f7=d1?"The faucet, the hoses and the drain are fitted.":"The kitchen sink is not plumbed yet. Use the Plumbing button."
t.n(0,713,new A.cX("Kitchen sink",f7,new A.q(30,30,14),70))
if(!d1)s.push(new A.hh(new A.q(30,48,14),f6,D.bl,0))}}for(f7=D.d.gag(g3),w=new C.f5(f7,new A.fzj(f8));w.C();){o=f7.gS(0)
t.n(0,900+o.a,new A.cX(o.r,"Tap to see how they are, feed them or give medicine.",new A.q(o.c,36,o.d),90))}return new A.tT(v,t,s,r,new C.cy([e,d,0,p]),0)},
kI(d,e,f,g,h,i,j,k,l){var w=-h/2,v=i/2,u=h/2,t=-i/2
d.cX4(e.a9(0,f.aI(0,w)).a9(0,g.aI(0,v)),e.a9(0,f.aI(0,u)).a9(0,g.aI(0,v)),e.a9(0,f.aI(0,u)).a9(0,g.aI(0,t)),e.a9(0,f.aI(0,w)).a9(0,g.aI(0,t)),j,k,l)},
i3J(d6,d7,d8,d9,e0,e1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5=-158,c6=1000,c7=x.z,c8=C.a([],c7),c9=new A.fl(c8),d0=x.S,d1=C.U(d0,x.q),d2=C.a([],x.E),d3=d6.gex(0),d4=d6.ghs(0),d5=new A.fsn(d8)
c9.f=0
c9.b=d5.$2("floor",310)
c9.hr(new A.q(0,-0.6,d4/2-60),new A.q(d3*2.5,1.2,d4*2.5),B.Xy,5)
d1.n(0,310,B.ecs)
c9.b=0
c9.f=1
c9.aP(new A.q(0,0.15,60),B.h5T,E.F4)
for(w=0;w<6;++w)c9.aP(new A.q(0,0.35,8+w*22),B.ha8,B.boz)
c9.f=2
v=$.dS+1
c9.x=$.dS=v
c9.hr(B.h_1,B.h1k,B.Mc,3)
c9.aP(B.fZx,B.h1l,B.ael)
u=new A.fso(c9)
t=new A.fsj(c9)
for(s=0;s<4;++s){r=B.dmd[s]
u.$5(B.dX,B.hI,B.iu,r,62)
u.$5(B.dX,B.hI,B.iu,r,122)}t.$5(B.dX,B.hI,B.iu,0,600)
for(s=0;s<2;++s){r=B.aAy[s]
u.$5(B.aaI,B.qV,B.tj,r,62)
u.$5(B.aaI,B.qV,B.tj,r,122)}t.$5(B.aaI,B.qV,B.tj,0,0)
for(s=0;s<2;++s){q=B.a51[s]
u.$5(B.h_L,B.tj,B.hI,q,62)
u.$5(B.hc1,B.iu,B.qV,-q,62)}p=C.a([],c7)
new A.fl(p).nc(B.dX,B.h1t,B.Mf,0.1,2)
c9.a7a(B.hbS,B.hay,B.h9L,B.Mc,B.hI,!1)
c9.a7a(B.h9R,B.h3B,B.hac,B.Mc,B.qV,!1)
c9.x=0
c9.r=!0
D.d.v(c8,A.nC(p,0.5,0,B.fYI))
D.d.v(c8,A.nC(p,-0.5,0,B.fYJ))
c9.aP(B.fYL,B.h1s,B.Y2)
c9.aP(B.h45,B.h0e,B.ahK)
c9.aP(B.h46,B.aW3,B.q7)
c9.aP(B.fZj,B.h35,E.F4)
c9.dN(B.hcg,B.hch,2.2,B.kD,8)
c9.dN(B.h15,B.h16,2.2,B.kD,8)
c9.aZ(B.h_a,B.h3e,B.Mf,0.1)
d1.n(0,600,B.ed3)
p=x.a
o=C.a([],p)
n=new A.fsk(o,v)
n.$4(B.h5E,B.hai,B.hb_,B.h8S)
n.$5$poster(B.h41,B.h2P,B.h4S,B.haO,1)
n.$5$poster(B.h6F,B.h6U,B.h5g,B.haL,2)
n.$5$poster(B.haV,B.hfu,B.h8o,B.hah,0)
c9.r=!0
m=C.U(d0,d0)
for(d0=d6.x,l=d0.length,s=0;s<d0.length;d0.length===l||(0,C.L)(d0),++s){k=d0[s]
j=k.a
i=100+j
if(e1.t(0,i))continue
h=k.b
if(D.d.t(B.HY,h)){d1.n(0,i,new A.cX(B.hC.h(0,h).a,"It wanders about. Move it with the arrow buttons or take it out.",new A.q(k.c,12,k.d),140))
continue}g=B.hC.h(0,h)
g.toString
f=C.a([],c7)
e=new A.fl(f)
d=e.r=!0
e.f=D.d.t(B.a5c,h)?1:2
a0=h==="hospital"
e.b=(!a0?h==="shop":d)?i:d5.$2("furniture",i)
A.h6B(e,h,B.zk[k.f])
if(f.length!==0)m.n(0,j,D.d.gI(f).z)
D.d.v(c8,A.nC(f,0,k.e*3.141592653589793/2,new A.q(k.c,0,k.d)))
if(a0)j="The hospital: tap it to see the beds and treat the patients."
else j=h==="shop"?"The shop: tap it to buy food and medicine.":y.M
d1.n(0,i,new A.cX(g.a,j,new A.q(k.c,12,k.d),140))}a1=C.a([],x._)
for(l=D.d.gag(d0),j=new C.f5(l,new A.frL()),i=d6.k3;j.C();){h=l.gS(0)
g=h.a
a2=i.t(0,g)
f=h.b==="pole"
d=h.c
a0=h.d
a3=f?new A.q(d+20,86,a0):new A.q(d,55,a0)
d=C.a([],c7)
a4=new A.fl(d)
a0=f?4.6:4.2
a5=a2?D.e7:B.o4
a4.fV(a3,a0,a5,3,6,a2?0.1:0)
if(!a2){a4.d=0.2
a4.fV(a3,10,B.o4,2,6,0)
a4.d=1}D.d.v(c8,d)
if(a2)d2.push(new A.hh(new A.q(a3.a+0,a3.b+14,a3.c+0),"\u26a1 Light out: tap to go and fix it",D.bz,2e4+g))
if(f)a1.push(h)}D.d.aY(a1,new A.frM())
for(l=x.o,w=0;a6=w+1,a6<a1.length;w=a6){a7=a1[w]
a8=a1[a6]
if(Math.abs(a7.d-a8.d)>1||Math.abs(a8.c-a7.c)>170)continue
j=C.a([],c7)
a9=new A.fl(j)
for(s=0;s<3;++s){b0=B.aAu[s]
i=a7.c
h=a7.d
g=a8.c
a9.jk(C.a([new A.q(i+b0,121,h),new A.q((i+g)/2+b0,117,h),new A.q(g+b0,121,h)],l),0.35,D.av,!1,0,4)}D.d.v(c8,j)}for(j=D.d.gag(d0),i=new C.f5(j,new A.frN(d6)),h=d6.cy;i.C();){g=j.gS(0)
f=g.c
d=g.b==="hq"?190:130
a0=g.d
g=g.a
d2.push(new A.hh(new A.q(f,d,a0+40),"\u26a1 Level "+C.w(h.h(0,g))+" has no power: tap to go and fix it",D.bz,2e4+g))}for(j=D.d.gag(d0),i=new C.f5(j,new A.frY(d6));i.C();){h=j.gS(0)
g=h.b
f=B.hC.h(0,g)
f.toString
d=h.c
g=g==="bighouse"?120:82
d2.push(new A.hh(new A.q(d,g,h.d),"\u26a1 No power: tap to go in and fix it",D.bz,2e4+h.a))
g=C.a([],c7)
b1=new A.fl(g)
b1.d=0.45
d=h.c
b1.aP(new A.q(d,30,h.d),new A.q(f.c+2,60,f.d+2),D.de)
b1.d=1
D.d.v(c8,g)}if(d6.c==="outside")D.d.v(c8,A.i9A())
b2=C.a([],p)
for(c7=D.d.gag(d0),d0=new C.f5(c7,new A.fs8());d0.C();){p=c7.gS(0)
d3=new A.fsm(p.e*3.141592653589793/2,p)
b3=m.h(0,p.a)
if(b3==null)b3=0
j=p.b
if(j==="billboard"){b2.push(new A.fP(C.a([d3.$3(-33,62.5,2),d3.$3(33,62.5,2),d3.$3(33,31.5,2),d3.$3(-33,31.5,2)],l),0,new A.fsd(p),960,450,4,2,b3,!1))
b2.push(new A.fP(C.a([d3.$3(33,62.5,-2),d3.$3(-33,62.5,-2),d3.$3(-33,31.5,-2),d3.$3(33,31.5,-2)],l),0,new A.fse(p),960,450,4,2,b3,!1))}else{i=j==="townsign"
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
b2.push(new A.fP(C.a([d3.$3(p,j,b7),d3.$3(b4,j,b7),d3.$3(b4,i,b7),d3.$3(p,i,b7)],l),0,new A.fsf(b8),b9,c0,4,2,b3,!1))
h=-b7
b2.push(new A.fP(C.a([d3.$3(b4,j,h),d3.$3(p,j,h),d3.$3(p,i,h),d3.$3(b4,i,h)],l),0,new A.fsg(b8),b9,c0,4,2,b3,!1))}else if(j==="adboard"){b2.push(new A.fP(C.a([d3.$3(c5,195,3.6),d3.$3(158,195,3.6),d3.$3(158,90,3.6),d3.$3(c5,90,3.6)],l),0,new A.fsh(p),1280,424,4,2,b3,!1))
b2.push(new A.fP(C.a([d3.$3(158,195,-3.6),d3.$3(c5,195,-3.6),d3.$3(c5,90,-3.6),d3.$3(158,90,-3.6)],l),0,new A.fsi(p),1280,424,4,2,b3,!1))}else if(j==="tower"){c1=210+D.o.F(B.zk[p.f].l(),5)*24
j=c1-8
i=c1-54
b2.push(new A.fP(C.a([d3.$3(-40,j,35.9),d3.$3(40,j,35.9),d3.$3(40,i,35.9),d3.$3(-40,i,35.9)],l),0,new A.frO(p),800,460,8,2,b3,!1))
b2.push(new A.fP(C.a([d3.$3(40,j,-35.9),d3.$3(-40,j,-35.9),d3.$3(-40,i,-35.9),d3.$3(40,i,-35.9)],l),0,new A.frP(p),800,460,8,2,b3,!1))
b2.push(new A.fP(C.a([d3.$3(50.9,j,28),d3.$3(50.9,j,-28),d3.$3(50.9,i,-28),d3.$3(50.9,i,28)],l),0,new A.frQ(p),640,460,8,2,b3,!1))
b2.push(new A.fP(C.a([d3.$3(-50.9,j,-28),d3.$3(-50.9,j,28),d3.$3(-50.9,i,28),d3.$3(-50.9,i,-28)],l),0,new A.frR(p),640,460,8,2,b3,!1))
i=c1+58
j=c1+22
b2.push(new A.fP(C.a([d3.$3(-40,i,1.7),d3.$3(40,i,1.7),d3.$3(40,j,1.7),d3.$3(-40,j,1.7)],l),0,new A.frS(p),960,400,8,2,b3,!1))
b2.push(new A.fP(C.a([d3.$3(40,i,-1.7),d3.$3(-40,i,-1.7),d3.$3(-40,j,-1.7),d3.$3(40,j,-1.7)],l),0,new A.frT(p),960,400,8,2,b3,!1))}else if(j==="hq"){b2.push(new A.fP(C.a([d3.$3(-70,108,45.9),d3.$3(70,108,45.9),d3.$3(70,52,45.9),d3.$3(-70,52,45.9)],l),0,new A.frU(),c6,400,8,2,b3,!1))
b2.push(new A.fP(C.a([d3.$3(-48,215,30.2),d3.$3(48,215,30.2),d3.$3(48,175,30.2),d3.$3(-48,175,30.2)],l),0,new A.frV(),900,380,8,2,b3,!1))
b2.push(new A.fP(C.a([d3.$3(70,108,-45.9),d3.$3(-70,108,-45.9),d3.$3(-70,52,-45.9),d3.$3(70,52,-45.9)],l),0,new A.frW(),c6,400,8,2,b3,!1))
b2.push(new A.fP(C.a([d3.$3(48,215,-30.2),d3.$3(-48,215,-30.2),d3.$3(-48,175,-30.2),d3.$3(48,175,-30.2)],l),0,new A.frX(),900,380,8,2,b3,!1))
b2.push(new A.fP(C.a([d3.$3(-54,328,1.7),d3.$3(54,328,1.7),d3.$3(54,294,1.7),d3.$3(-54,294,1.7)],l),0,new A.frZ(p),c6,360,8,2,b3,!1))
b2.push(new A.fP(C.a([d3.$3(54,328,-1.7),d3.$3(-54,328,-1.7),d3.$3(-54,294,-1.7),d3.$3(54,294,-1.7)],l),0,new A.fs_(p),c6,360,8,2,b3,!1))
b2.push(new A.fP(C.a([d3.$3(85.9,118,36),d3.$3(85.9,118,-36),d3.$3(85.9,62,-36),d3.$3(85.9,62,36)],l),0,new A.fs0(p),720,560,8,2,b3,!1))
b2.push(new A.fP(C.a([d3.$3(-85.9,118,-36),d3.$3(-85.9,118,36),d3.$3(-85.9,62,36),d3.$3(-85.9,62,-36)],l),0,new A.fs1(p),720,560,8,2,b3,!1))}else if(j==="store")b2.push(new A.fP(C.a([d3.$3(-54,85,37.7),d3.$3(54,85,37.7),d3.$3(54,67,37.7),d3.$3(-54,67,37.7)],l),0,new A.fs2(),900,150,6,2,b3,!1))
else if(j==="ubstation"){b2.push(new A.fP(C.a([d3.$3(40,106,31.9),d3.$3(76,106,31.9),d3.$3(76,86,31.9),d3.$3(40,86,31.9)],l),0,new A.fs3(),480,270,8,2,b3,!1))
b2.push(new A.fP(C.a([d3.$3(76,106,28.1),d3.$3(40,106,28.1),d3.$3(40,86,28.1),d3.$3(76,86,28.1)],l),0,new A.fs4(),480,270,8,2,b3,!1))}else if(j==="dmv")b2.push(new A.fP(C.a([d3.$3(-50,85,38.6),d3.$3(50,85,38.6),d3.$3(50,67,38.6),d3.$3(-50,67,38.6)],l),0,new A.fs5(),900,160,8,2,b3,!1))
else if(j==="gasstation")b2.push(new A.fP(C.a([d3.$3(-86,107,35.7),d3.$3(-54,107,35.7),d3.$3(-54,85,35.7),d3.$3(-86,85,35.7)],l),0,new A.fs6(),480,330,6,2,b3,!1))
else for(c2=0;c2<2;++c2){c3=c2===0?-40:40
j=c3-26
i=c3+26
b2.push(new A.fP(C.a([d3.$3(j,70,60.7),d3.$3(i,70,60.7),d3.$3(i,40,60.7),d3.$3(j,40,60.7)],l),0,new A.fs7(p,c2),720,520,9,2,b3,!1))}}}for(c7=D.d.gag(e0),d0=new C.f5(c7,new A.fs9(d6));d0.C();){p=c7.gS(0)
d2.push(new A.hh(new A.q(p.c,82,p.d),p.Q,D.cR,0))}for(c7=D.d.gag(e0),d0=new C.f5(c7,new A.fsa(d6));d0.C();){p=c7.gS(0)
d2.push(new A.hh(new A.q(p.c,80,p.d),"\ud83d\udcde Help!",D.bz,0))}c7=d7===0
d0=c7?"\u2705 The house is finished":"\ud83c\udfe0 "+d7+" rooms still need work"
d2.push(new A.hh(B.fZ0,d0,c7?D.cT:D.dY,0))
c4=c9.x=$.dS=$.dS+1
for(s=0;s<2;++s){r=B.aAy[s]
c9.dN(new A.q(r,0,-118),new A.q(r,215,-118),3,D.jd,8)}c9.aZ(B.Ar,B.h1q,D.av,0.3)
c9.x=0
o.push(new A.fP(B.cOq,0,new A.fsb(),c6,336,4,2,c4,!1))
o.push(new A.fP(B.diN,0,new A.fsc(),c6,336,4,2,c4,!1))
c7=C.C(o,x.K)
D.d.v(c7,b2)
return new A.tT(c8,d1,d2,c7,null,4000)},
iaw(a5,a6,a7,a8,a9,b0,b1,b2,b3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=x.z,a3=C.a([],a2),a4=new A.fl(a3)
a4.r=!0
if(a5.c==="outside"){w=new A.fCr(b1)
v=b1!=null
if(v&&b1.a===a5.a)A.wN(a4,b1,a6,b2,!0,0,null)
if(a7&&v&&b1.a===a5.a){v=C.a([],a2)
u=b1.b
t=b1.d
new A.fl(v).aP(new A.q(u+Math.sin(t)*9,46+b1.y,b1.c+Math.cos(t)*9),B.aW2,B.jr)
D.d.v(a3,v)}if(a9!=null){v=C.a([],a2)
s=new A.fl(v)
s.r=!0
u=a9.a
A.h6B(s,u[0],B.zk[u[4]])
D.d.v(a3,A.nC(v,0,u[3]-1.5707963267948966,new A.q(u[1],0,u[2])))}for(v=D.d.gag(a5.x),u=new C.f5(v,new A.fCo()),t=a6*6,r=b0==="furniture";u.C();){q=v.gS(0)
p=q.a
o=a6*(0.25+D.o.F(p,5)*0.04)+p*1.7
n=q.c
m=Math.cos(o)
l=q.d
k=Math.sin(o)
j=Math.atan2(-Math.sin(o),Math.cos(o))
i=C.a([],a2)
h=new A.fl(i)
h.r=!0
h.b=r?100+p:0
A.hp5(h,q.b,B.zk[q.f],Math.sin(t+p)*0.5)
D.d.v(a3,A.nC(i,0,j,new A.q(n+m*10,0,l+k*10)))}for(v=D.d.gag(b3),u=new C.f5(v,new A.fCp(a5)),t=a5.a;u.C();){r=v.gS(0)
q=r.c
p=r.d
n=r.e
m=r.f
l=r.a
A.wN(a4,new A.y3(t,q,p,n,!1,!1,!1,!1,!1,0,!1,!1,"","",-1,0,-1,0),a6,m,w.$2(q,p),900+l,m.c)
A.hYt(a4,r,a6)}for(v=a8.length,g=0;g<a8.length;a8.length===v||(0,C.L)(a8),++g){f=a8[g]
u=f.b
r=f.c
q=f.d
A.wN(a4,new A.y3(t,u,r,q,f.f,!1,!1,!1,!1,0,!1,!1,"","",-1,0,-1,f.e),a6,f.w,w.$2(u,r),0,f.x)
if(f.r){p=C.a([],a2)
new A.fl(p).aP(new A.q(u+Math.sin(q)*9,46,r+Math.cos(q)*9),B.h0_,F.fz)
D.d.v(a3,p)}}return a3}if(b1!=null&&b1.a===a5.a)A.wN(a4,b1,a6,b2,!0,0,null)
for(a2=D.d.gag(b3),v=new C.f5(a2,new A.fCq(a5)),u=a5.a,t=a6*0.5;v.C();){r=a2.gS(0)
q=r.y
p=q>0
e=p?Math.sin(t+r.a)*q:0
q=r.c
n=r.d
if(p)m=Math.cos(t+r.a)>=0?1.5707963267948966:-1.5707963267948966
else m=r.x?0.5:r.e
A.wN(a4,new A.y3(u,q+e,n,m,p,!1,!1,!1,r.x,0,!1,!1,"","",-1,0,-1,0),a6,r.f,!0,900+r.a,null)}d=a5.ghs(0)
if(a5.go==="fan"){a0=a5.ga6b()&&a5.gMh()&&a5.fy?a6*7:0
a4.b=703
for(a2=d*0.5,a1=0;a1<4;++a1){o=a0+a1*3.141592653589793/2
a4.wr(new A.q(Math.cos(o)*15,115,a2+Math.sin(o)*15),B.heF,B.nT,0.1,-o)}}return a3},
i0K(d){var w
A:{if(5===d){w=B.eMd
break A}if(9===d){w=B.eRj
break A}if(10===d){w=B.eEt
break A}if(11===d){w=B.eSi
break A}if(2===d||4===d||8===d){w=B.eu1
break A}w=B.eH7
break A}return w},
fyi(b0,b1,b2,b3,b4,b5,b6,b7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9
for(w=b2.a,v=b2.b,u=b2.c,t=b1.a,s=b1.b,r=b1.c,q=b3.a,p=q*0.1,o=b3.b,n=o*0.1,m=b3.c,l=m*0.1,k=q*0.2,j=o*0.2,i=m*0.2,q*=0.3,o*=0.3,m*=0.3,h=-b4/2,g=b5-1,f=b5===1,e=0;e<b5;++e){d=f?0:h+b4*e/g
for(a0=b6.length,a1=s+v*d,a2=t+w*d+0,a3=r+u*d+0,a4=a2+p,a5=a3+l,a6=a2+k,a7=a3+i,a2+=q,a3+=m,a8=0;a8<b6.length;b6.length===a0||(0,C.L)(b6),++a8){a9=a1+b6[a8]
A.kI(b0,new A.q(a4,a9+n,a5),b2,B.ea,14,17,B.kD,b3,0)
A.kI(b0,new A.q(a6,a9+j,a7),b2,B.ea,11,14,b7,b3,0.6)
A.kI(b0,new A.q(a2,a9+o,a3),b2,B.ea,11,0.9,B.kD,b3,0)}}},
hpA(a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0
A:{if("shop"===a2){w=B.f_r
break A}if("hospital"===a2){w=B.f_m
break A}if("firestation"===a2){w=B.f_3
break A}if("school"===a2){w=B.eZX
break A}w=B.eZG
break A}w=w.a
v=w[0]
u=w[1]
t=w[2]
s=w[3]
r=w[4]
q=u/2
p=v/2
a1.x=$.dS=$.dS+1
a1.hr(new A.q(0,t/2,0),new A.q(v,t,u),s,2)
a1.aP(new A.q(0,2.5,0),new A.q(v+3,5,u+3),B.ael)
w=a2==="hospital"
if(w)o=C.a([14,30,46],x.n)
else if(a2==="school"){n=C.a([14,32],x.n)
o=n}else{n=x.n
n=a2==="house2"?C.a([26],n):C.a([22],n)
o=n}m=D.o.E(D.k.bf(v/24),2,5)
n=a2==="firestation"
l=n?C.a([34],x.n):o
k=v-30
A.fyi(a1,new A.q(0,0,q).a9(0,B.dX),B.hI,B.iu,k,m,l,B.i0)
j=q+0.4
if(n){A.kI(a1,new A.q(-14,17,j),B.hI,B.ea,34,34,D.hi,B.iu,0.2)
for(i=q+0.5,h=0;h<6;++h)A.kI(a1,new A.q(-14,4+h*6,i),B.hI,B.ea,33,0.8,D.dv,B.iu,0)
A.kI(a1,new A.q(24,15,j),B.hI,B.ea,14,30,B.vE,B.iu,0)}else{A.kI(a1,new A.q(0,14,q+0.3),B.hI,B.ea,18,28,B.kD,B.iu,0)
A.kI(a1,new A.q(0,13,j),B.hI,B.ea,14,26,B.vE,B.iu,0.2)}switch(a2){case"hospital":i=t-8
A.kI(a1,new A.q(0,i,j),B.hI,B.ea,30,9,D.bz,B.iu,0)
j=q+0.5
A.kI(a1,new A.q(0,i,j),B.hI,B.ea,24,2.6,D.c,B.iu,0)
A.kI(a1,new A.q(0,i,j),B.hI,B.ea,2.6,7,D.c,B.iu,0)
break
case"shop":for(i=q+3,h=0;h<6;++h){g=(h&1)===0?D.ax:D.c
A.kI(a1,new A.q(-30+h*12,33,i),B.hI,B.ea,6,6,g,B.iu,0)}A.kI(a1,new A.q(0,t-4,j),B.hI,B.ea,36,6,a3,B.iu,0)
break
case"firestation":A.kI(a1,new A.q(0,t-5,j),B.hI,B.ea,40,7,D.bu,B.iu,0)
break
case"school":A.kI(a1,new A.q(0,t-5,j),B.hI,B.ea,40,7,D.bl,B.iu,0)
break}j=-q
A.fyi(a1,new A.q(0,0,j),B.qV,B.tj,k,m,l,B.i0)
A.kI(a1,new A.q(0,13,j-0.4),B.qV,B.ea,14,26,B.vE,B.tj,0)
f=D.o.E(D.k.bf(u/24),1,3)
k=u-26
A.fyi(a1,new A.q(p,0,0),B.tj,B.hI,k,f,l,B.i0)
i=-p
A.fyi(a1,new A.q(i,0,0),B.iu,B.qV,k,f,l,B.i0)
a1.x=0
k=x.z
g=C.a([],k)
e=new A.fl(g)
e.r=!0
e.b=a1.b
e.f=a1.f
if(a2==="house2"||a2==="school"){w=C.a([],k)
d=new A.fl(w)
d.r=!0
d.b=a1.b
d.f=a1.f
d.aZ(B.dX,new A.q(v+6,2.5,u*0.58),r,0.1)
n=a1.a
k=t+5
D.d.v(n,A.nC(w,0.42,0,new A.q(0,k,u*0.25)))
a0=-u
D.d.v(n,A.nC(w,-0.42,0,new A.q(0,k,a0*0.25)))
k=p+0.2
w=t+12
a1.a7a(new A.q(k,t,q),new A.q(k,t,j),new A.q(k,w,0),s,B.hI,!1)
i-=0.2
a1.a7a(new A.q(i,t,j),new A.q(i,t,q),new A.q(i,w,0),s,B.qV,!1)
if(a2==="school"){w=q-10
e.aP(new A.q(0,t+18,w),B.h0t,D.ag5)
e.aP(new A.q(0,t+30,w),B.h1g,r)
e.dN(new A.q(0,t+31,w),new A.q(0,t+46,w),0.6,D.dv,6)
e.aP(new A.q(5,t+44,w),B.haY,D.ax)}else e.aP(new A.q(v*0.28,t+14,a0*0.1),B.h4T,B.ahK)}else{k=v+2
e.aZ(new A.q(0,t+1.5,0),new A.q(k,3,u+2),r,0.05)
e.aP(new A.q(0,t+4,q+0.5),new A.q(k,4,1.4),a3)
if(w){w=v*0.25
k=-u*0.15
e.aP(new A.q(w,t+5,k),B.h1v,D.bs)
e.aP(new A.q(w,t+6.2,k),B.hbb,D.c)}if(n){w=p-10
n=-u*0.2
e.aP(new A.q(w,t+16,n),B.h0d,B.agA)
e.aP(new A.q(w,t+32,n),B.aW3,r)}}D.d.v(a1.a,g)},
i5F(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=d.f,f=d.e
d.f=1
d.e=0
if(e==="road"){d.GD(B.h7H,B.h8H,B.h6K,B.h90,B.Mr,B.ea)
d.e=90
for(w=0;w<2;++w){v=B.Rh[w]
u=v-0.7
t=v+0.7
d.GD(new A.q(-20,0.9,u),new A.q(20,0.9,u),new A.q(20,0.9,t),new A.q(-20,0.9,t),L.M5,B.ea)}for(w=0;w<2;++w){v=B.dm1[w]
u=v-0.8
t=v+0.8
d.GD(new A.q(-20,0.9,u),new A.q(20,0.9,u),new A.q(20,0.9,t),new A.q(-20,0.9,t),D.bO,B.ea)}d.f=g
d.e=f
return}d.GD(B.h8R,B.hf1,B.h6I,B.h5m,B.Mr,B.ea)
d.e=90
A:{if("roadturn"===e){u=B.dkJ
break A}if("roadtee"===e){u=B.d1S
break A}u=B.ciP
break A}for(t=u.length,w=0;w<t;++w){s=u[w]
r=s.a
q=s.b
for(s=q!==0,p=r!==0,o=30*r,n=30*q,m=0;m<2;++m){l=B.Rh[m]
k=p?o:l
j=s?n:l
i=p?36:1.4
h=s?36:1.4
d.aP(new A.q(k,0.95,j),new A.q(i,0.1,h),L.M5)}}d.f=g
d.e=f},
hp5(d,e,f,g){var w=new A.fiE(d,g)
switch(e){case"dog":d.aZ(B.xa,B.hei,f,0.05)
d.ec(B.h5Z,3.4,f,4,8)
d.aP(B.h9f,B.h4P,D.Ml)
d.aP(B.haD,B.aWO,B.hs)
d.aP(B.hfd,B.aWO,B.hs)
d.dN(B.hbr,B.fYF,0.8,f,5)
w.$5(B.djt,6,6,1.7,f)
break
case"cat":d.aZ(B.As,B.h4K,f,0.05)
d.ec(B.h_3,2.7,f,4,8)
d.aP(B.hdO,B.aW6,f)
d.aP(B.hdS,B.aW6,f)
d.dN(B.h_2,B.fYx,0.7,f,5)
w.$5(B.dh8,4,4,1.2,f)
break
case"cow":d.aZ(B.aaK,B.h09,D.bN,0.05)
d.aP(B.he1,B.hdl,B.hs)
d.aP(B.h7n,B.h4N,B.hs)
d.aP(B.fYV,B.h4Y,D.bN)
d.aP(B.fYM,B.hfw,D.nS)
d.aP(B.h5d,B.aW7,D.bO)
d.aP(B.hf7,B.aW7,D.bO)
d.dN(B.fYY,B.h_5,0.7,B.hs,5)
w.$5(B.d5D,11,11,3.2,D.bO)
break
case"sheep":d.ec(B.aaJ,8.5,D.q_,4,8)
d.ec(B.fYD,7,D.q_,4,8)
d.ec(B.fYz,3.4,B.hs,4,8)
w.$5(B.djn,8,8,1.8,B.hs)
break
case"chicken":d.ec(B.As,4,f,4,8)
d.ec(B.fYk,2.2,f,3,6)
d.aP(B.fYu,B.hdg,D.bz)
d.aP(B.h67,B.h5H,D.aE)
d.aP(B.h_7,B.h31,f)
w.$5(B.d3G,3,3,0.8,D.aE)
break
case"horse":d.aZ(B.fZ1,B.h_J,f,0.1)
d.L9(B.fZb,B.fZs,4.2,f,3,8)
d.aP(B.fZu,B.h3y,f)
d.aP(B.fZD,B.hdf,B.hs)
d.dN(B.fZg,B.h_6,1.8,B.hs,6)
w.$5(B.d3_,16,16,2.6,f)
break
default:d.aP(B.As,B.h4W,f)}},
bCr(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=C.a([],x.z)
for(w=d.length,v=e.a,u=e.b,t=e.c,s=f.a,r=f.b,q=f.c,p=x.o,o=0;o<d.length;d.length===w||(0,C.L)(d),++o){n=d[o]
m=C.a([],p)
for(l=n.a,k=l.length,j=0;j<l.length;l.length===k||(0,C.L)(l),++j){i=l[j]
m.push(new A.q(s+(i.a-s)*v,r+(i.b-r)*u,q+(i.c-q)*t))}l=n.b
h.push(new A.kp(m,new A.q(l.a/v,l.b/u,l.c/t).gmU(0),n.c,n.d,n.e,n.f,n.r,n.w,n.x,n.y,n.z))}return h},
hYt(d,e,f){var w,v,u,t,s,r=e.z
if(r.length===0)return
w=e.e
v=new A.fiu(e,Math.sin(w),Math.cos(w))
u=d.b
d.b=0
switch(r){case"feed":d.L9(v.$3(14,0,8),v.$3(14,9,8),4.5,B.nT,5.5,10)
for(r=f*0.9,t=0;t<9;++t){s=D.k.F(r+t/9,1)
d.fV(v.$3(10+s*26,26-s*22,Math.sin(t*2.1)*4),0.9,D.m0,3,5,0)}break
case"cook":d.aZ(v.$2(18,9),B.h1d,D.jd,0.2)
d.aP(v.$2(18,18.4),B.h4x,D.fr)
d.d=0.3
for(r=f*0.5,t=0;t<6;++t){s=D.k.F(r+t/6,1)
d.fV(v.$2(18+Math.sin(t*1.9)*3,22+s*22),2+s*4,D.F8,3,6,0)}d.d=1
break
case"wash":d.L9(v.$3(20,0,-10),v.$3(20,8,-10),4,D.aK,5,10)
for(r=f*1.4,t=0;t<12;++t){s=D.k.F(r+t/12,1)
d.fV(v.$3(8+s*24,30-s*s*26,6),0.8,D.hh,3,5,0.3)}break
case"water":d.aZ(v.$3(12,22,7),B.h4V,D.ei,0.2)
for(r=f*1.2,t=0;t<10;++t){s=D.k.F(r+t/10,1)
d.fV(v.$3(18+s*8,22-s*22,7),0.7,D.hh,3,5,0.3)}break
case"teach":d.aZ(v.$2(22,26),B.hbq,D.e_,0.1)
d.aP(v.$2(22.8,26),B.h9_,D.bN)
break
case"duty":d.aP(v.$3(0,74,0),B.h7j,D.L)
break}d.b=u},
wN(d,e,f,g,h,i,j){var w,v,u,t,s,r
if(e.Q){w=C.a([],x.z)
A.wN(new A.fl(w),A.atR(!1,0,-1,"",!1,0,"",-1,e.CW*0.5,!1,!1,!1,e.a,!1,e.e,0,0,0),f,g,h,i,j)
D.d.v(d.a,A.nC(w,1.5707963267948966,e.d,new A.q(e.b,9,e.c)))
return}w=g.e
v=$.h12.h(0,w)
if(v==null){if(B.Sa.aj(0,w)&&!$.h10.t(0,w)){A.bTQ(w)
return}A.i4s(d,e,f,h,i,g)
return}w=e.e
u=e.z
t=w&&!u&&e.CW>0?e.CW*12:null
s=j==null
r=s?null:g.a
s=s?null:g.d
D.d.v(d.a,v.cWy(h,i,e.y,s,u,r,f,j,t,w,e.b,e.d,e.c))},
i4s(e6,e7,e8,e9,f0,f1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2=e7.e,d3=d2?D.k.V(e7.CW*24):-1,d4=f1.a,d5=f1.b,d6=f1.c,d7=f1.d,d8=f1.f,d9=f1.r,e0=f1.w,e1=e7.f,e2=e7.r,e3=e7.w,e4=C.bv(d4.l(),d5.l(),d6.l(),d7.l(),d8,d9,e0,e9,d3,e1,e2,e3,f0,D.h,D.h,D.h,D.h,D.h,D.h,D.h),e5=$.fsK.h(0,e4)
if(e5!=null){D.d.v(e6.a,A.nC(e5,0,e7.d,new A.q(e7.b,e7.y,e7.c)))
return}w=C.a([],x.z)
v=new A.fl(w)
v.b=f0
v.r=!0
u=C.ar(d4,D.w,0.16)
u.toString
t=C.ar(d4,B.bkv,0.55)
t.toString
s=d2?Math.sin(e7.CW*3.141592653589793):0
r=e9?8:6
q=e9?4:3
p=e9?8:6
o=e9?4:3
n=e9?9:6
m=x.n
l=C.a([],m)
for(k=0;k<2;++k)l.push(s*F.hB[k]*0.6)
j=C.a([],m)
for(i=l.length,k=0;k<l.length;l.length===i||(0,C.L)(l),++k){h=l[k]
j.push(d2?Math.max(0,-h)*1.5+0.1:0.04)}m=C.a([],m)
for(g=0;g<2;++g)m.push(16*Math.cos(l[g])+15.5*Math.cos(l[g]+j[g]))
f=Math.max(m[0],m[1])+3.3
e=new A.fte(f0,v)
d=new A.fsM(v,r,e9)
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
e.$3(new A.fsN(q,p),B.h9o,new A.q(a1,a2+-1.6,i))
if(e9)e.$3(new A.fsO(p),B.h6g,new A.q(a1,a2+-2.9,i))
if(e9){i=C.ar(d7,D.c,m)
i.toString
v.ec(new A.q(a1,a2+1.2,a3+0),2.1,i,3,p)}}m=d8?1.22:1.12
e.$3(new A.fsP(d7,q,p),new A.q(m,0.78,0.76),new A.q(0,f+1.2,0))
if(d8){d7=C.ar(d7,D.c,Math.abs(0.05))
d7.toString
m=e9?12:8
v.Th(new A.q(0,f+3.4,0),new A.q(0,f-9.5,0),5.9,d7,!1,7.8,m)}a6=d8?5.8:6.5
a7=d8?4.2:4.9
d7=d8?0.66:0.62
e.$3(new A.ft_(a7,d6,a6,e9),new A.q(1,1,d7),new A.q(0,f+2.5,0))
if(!d8)e.$3(new A.ft7(),B.h0I,new A.q(0,f+2.4,0))
if(d8&&e9)for(d7=f+14.3,k=0;k<2;++k)e.$3(new A.ft8(d6,q,p),B.h1G,new A.q(F.hB[k]*2.7,d7,2.7))
d7=d8?1.1:1.2
e.$3(new A.ft9(d8,d6,o,n),new A.q(d7,0.5,0.62),new A.q(0,f+19.6,0))
d7=d8?1.8:2.1
v.dN(new A.q(0,f+20.5,0.2),new A.q(0,f+24.2,0.5),d7,d4,8)
if(e9){d7=C.ar(d6,D.c,Math.abs(0.12))
d7.toString
v.Th(new A.q(0,f+20,0.1),new A.q(0,f+21.4,0.2),3.1,d7,!1,2.5,10)}d7=f+29
a8=new A.q(0,d7,0.6)
e.$3(new A.fta(d4,e9),B.hbf,a8)
m=d8?0.95:1.05
e.$3(new A.ftb(d4,q,p),new A.q(m,0.8,0.95),a8.a9(0,B.h2Z))
if(e9)for(m=d7+-0.3,k=0;k<2;++k)e.$3(new A.ftc(d4),B.he3,new A.q(0+F.hB[k]*4.35,m,0.7))
else for(m=d7+-0.2,k=0;k<2;++k)v.ec(new A.q(0+F.hB[k]*4.2,m,0.6),1,d4,2,5)
for(m=d7+1.9,l=d7+0.4,j=d7+2.05,i=d7+0.7,a1=d7+1.25,a2=d7+0.95,k=0;k<2;++k){a0=F.hB[k]
a3=a0*1.8
a9=0+a3
if(e9){e.$3(new A.ftd(),B.hbt,new A.q(a9,l,4.75))
v.ec(new A.q(a9,l,5.1),0.55,B.aee,2,5)}else v.aP(new A.q(a9,l,5),B.h9F,B.aee)
a3=0+a3
if(e9){v.ec(new A.q(0+a0*1.6,i,5.55),0.18,D.c,2,4)
e.$3(new A.fsQ(u),B.h7I,new A.q(a3,a1,4.8))
a9=d8?0.28:0.18
v.aP(new A.q(a3,a2,5.22),new A.q(2.3,a9,0.2),D.nh)
a9=d8?0.34:0.5
v.aP(new A.q(a3,j,4.75),new A.q(2.4,a9,0.55),d5)}else v.aP(new A.q(a3,m,4.8),B.heS,d5)}e.$3(new A.fsR(u),B.hf9,a8.a9(0,B.h68))
if(e9){v.L8(a8.a9(0,B.hfb),a8.a9(0,B.hdM),0.55,d4,!1,5)
for(m=d7+-1.8,k=0;k<2;++k)v.aP(new A.q(0+F.hB[k]*0.55,m,5.1),B.h6Y,u)}if(e9){v.aP(a8.a9(0,B.h3T),B.h8P,B.biw)
e.$3(new A.fsS(t),B.h81,a8.a9(0,B.h9X))
e.$3(new A.fsT(t),B.h3g,a8.a9(0,B.h6k))}else v.aP(a8.a9(0,B.h97),B.h7y,B.blL)
switch(d9){case 1:e.$3(new A.fsU(d5,e9),B.h64,a8.a9(0,B.aWX))
e.$3(new A.fsV(d5,p),B.aaS,a8.a9(0,B.aXy))
e.$3(new A.fsW(d5,q,p),B.hex,a8.a9(0,B.heP))
for(d9=d7+1.5,d7+=-7.2,k=0;k<2;++k){a0=F.hB[k]
v.L8(new A.q(0+a0*4.4,d9,1),new A.q(0+a0*4.3,d7,1),1.2,d5,!1,6)}break
case 2:e.$3(new A.fsX(d5,e9),B.hbl,a8.a9(0,B.h6v))
e.$3(new A.fsY(d5,p),B.h7u,a8.a9(0,B.hej))
break
case 3:d5=C.ar(d6,D.c,Math.abs(0.18))
d5.toString
e.$3(new A.fsZ(d5,e9),B.ha1,a8.a9(0,B.h5h))
e.$3(new A.ft0(d5,p),B.aaS,a8.a9(0,B.hfy))
e.$3(new A.ft1(d5,q,p),B.heq,a8.a9(0,B.h6h))
break
case 4:e.$3(new A.ft2(d5,q,p),B.hf8,a8.a9(0,B.heU))
e.$3(new A.ft3(d5,p),B.h9d,a8.a9(0,B.h8D))
break
default:e.$3(new A.ft4(d5,e9),B.h4J,a8.a9(0,B.aWX))
e.$3(new A.ft5(d5,p),B.aaS,a8.a9(0,B.aXy))}b0=d8?6.2:7
for(d5=f+19.3,d7=-s,k=0;k<2;++k){a0=F.hB[k]
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
e.$3(new A.ft6(d4),B.h8_,new A.q(t,i,a1))
if(e9){a2=d9<0?-1:1
a3=0*a2
a9=-j*a2
a2=d9*a2
for(b4=t+0,b5=i+d9*1.5+0,b6=a1+j*1.5+0,b7=a3*0.25,b8=a9*0.25,b9=a2*0.25,c0=0+a3*0.8,c1=d9*0.6+a9*0.8,c2=j*0.6+a2*0.8,c3=0;c3<4;++c3){c4=u?1:-1
c4=b4+(-1.5+c3)*c4
c5=B.ayA[c3]
c6=c4+0*c5*0.55+b7
c7=b5+d9*c5*0.55+b8
c5=b6+j*c5*0.55+b9
c8=new A.q(c6,c7,c5)
c9=new A.q(c0,c1,c2).gmU(0)
d0=B.ayA[c3]
v.Th(new A.q(c4,b5,b6),c8,0.62,d4,!1,0.58,4)
v.Th(c8,new A.q(c6+c9.a*d0*0.45,c7+c9.b*d0*0.45,c5+c9.c*d0*0.45),0.56,d4,!1,0.48,4)}b5=-a0
b4+=b5*2
i=i+d9*0.4+0
a1=a1+j*0.4+0.5
b5=new A.q(0+b5*0.5,d9*0.7+0,j*0.7+0.5).gmU(0)
b6=b4+b5.a*1.7
b7=i+b5.b*1.7
b5=a1+b5.c*1.7
d1=new A.q(b6,b7,b5)
a2=new A.q(0+a3*0.4,d9*0.8+a9*0.4,j*0.8+a2*0.4).gmU(0)
v.L8(new A.q(b4,i,a1),d1,0.7,d4,!1,4)
v.L8(d1,new A.q(b6+a2.a*1.4,b7+a2.b*1.4,b5+a2.c*1.4),0.6,d4,!1,4)}if(u&&e1){d9=l+0
v.dR(new A.q(t,m+-2.6,d9),new A.q(t,m+2.6,d9),1.7,D.aK,0.5,8)}if(u&&e2){v.aZ(new A.q(t,m+-0.4,l+2.6),B.h8k,D.nh,0.3)
v.aP(new A.q(t,m+0.2,l+3.8),B.h5N,D.ax)}}if(e0!==1)w=A.bCr(w,new A.q(e0,e0,e0),B.dX)
if($.fsK.a>900)$.fsK.aa(0)
$.fsK.n(0,e4,w)
D.d.v(e6.a,A.nC(w,0,e7.d,new A.q(e7.b,e7.y,e7.c)))},
i6C(d,e){var w,v,u,t,s,r,q,p,o,n=C.a([],x.z)
for(w=d.length,v=x.o,u=0;u<d.length;d.length===w||(0,C.L)(d),++u){t=d[u]
s=C.a([],v)
for(r=t.a,q=r.length,p=0;p<r.length;r.length===q||(0,C.L)(r),++p){o=r[p]
s.push(new A.q(o.a*e,o.b*e,o.c*e))}n.push(new A.kp(s,t.b,t.c,t.d,t.e,t.f,t.r,t.w,t.x,t.y,t.z))}return n},
h6B(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=C.ar(f,D.w,Math.abs(-0.25))
h.toString
w=C.ar(f,D.c,Math.abs(0.2))
w.toString
A:{if("bed"===e){d.aZ(B.As,B.h3F,B.q7,0.1)
d.aZ(B.fYB,B.h3m,f,0.05)
d.aP(B.hc9,B.aW9,B.ahh)
d.aP(B.h0c,B.aW9,B.ahh)
d.aZ(B.fZ4,B.h3H,B.q7,0.1)
d.aP(B.fYP,B.hbk,w)
break A}if("nightstand"===e){d.aZ(B.xa,B.h0m,f,0.1)
d.aP(B.hag,B.h4c,h)
d.aP(B.hf0,B.h2t,B.agU)
d.aP(B.fZ7,B.h5a,B.o4)
break A}if("wardrobe"===e){d.aZ(B.fZr,B.h2I,f,0.1)
d.aP(B.h5x,B.h2S,h)
d.aZ(B.h85,B.aXa,B.F1,0.8)
d.aZ(B.hfl,B.aXa,B.F1,0.8)
break A}if("desk"===e){d.aZ(B.Vw,B.h2O,f,0.1)
d.aP(B.hci,B.aWe,h)
d.aP(B.h19,B.aWe,h)
d.aZ(B.fZJ,B.h1a,B.LY,0.5)
d.aP(B.fZo,B.h3W,D.jd)
break A}if("rug"===e){d.hr(B.hec,B.h0F,f,2)
d.aP(B.h5k,B.hdq,w)
break A}if("sofa"===e){d.aZ(B.xa,B.h4y,f,0.05)
d.aZ(B.fZ3,B.h4z,h,0.05)
d.aZ(B.hcw,B.aWy,h,0.05)
d.aZ(B.h2e,B.aWy,h,0.05)
d.aP(B.hc8,B.aWa,w)
d.aP(B.h0b,B.aWa,w)
break A}if("armchair"===e){d.aZ(B.xa,B.h1R,f,0.05)
d.aZ(B.fZ2,B.h1T,h,0.05)
d.aP(B.hc4,B.aWv,h)
d.aP(B.h00,B.aWv,h)
break A}if("coffee"===e){d.aZ(B.KA,B.h2A,f,0.2)
for(v=0;v<4;++v){w=B.dlG[v]
d.aP(new A.q(w.a,6.5,w.b),B.h1D,h)}d.aZ(B.h6M,B.h4U,D.bO,0.5)
break A}if("tvstand"===e){d.aZ(B.aaO,B.h3c,f,0.1)
d.aP(B.h4v,B.h6q,h)
d.aP(B.fYO,B.h12,B.hs)
break A}if("dining"===e){d.aZ(B.Vw,B.h3d,f,0.2)
for(v=0;v<4;++v){w=B.cO9[v]
d.aP(new A.q(w.a,13,w.b),B.h2q,h)}break A}if("chair"===e){d.aZ(B.fYK,B.h0w,f,0.1)
d.aZ(B.fZi,B.h0u,f,0.1)
for(v=0;v<4;++v){w=B.dbj[v]
d.aP(new A.q(w.a,7.5,w.b),B.h1_,h)}break A}if("plant"===e){d.dN(B.dX,B.aaO,5,D.d1,10)
d.ec(B.aaK,8,B.F_,5,8)
d.ec(B.h2p,5,B.XN,4,8)
break A}if("lamp"===e){d.dN(B.dX,B.ea,4.5,B.hs,10)
d.dN(B.ea,B.aVQ,0.7,B.hs,6)
d.L9(B.fZL,B.aaM,6,B.o4,3.5,12)
break A}if("console"===e){d.aZ(B.fZa,B.aWt,f,0.15)
d.aP(B.h79,B.aWd,h)
d.aP(B.h5p,B.aWd,h)
d.aP(B.xa,B.hdc,h)
break A}if("shelf"===e){d.aZ(B.aaL,B.h2c,f,0.1)
for(u=0;u<4;++u){h=10+u*15
d.aP(new A.q(0,h,1),B.h21,B.hs)
w=D.o.F(u,2)
d.aP(new A.q(-8+w*6,h,2),B.h3A,[D.ek,D.dF,D.ei,D.dY][u])
d.aP(new A.q(4+w*4,h,2),B.h4X,[D.dY,D.ei,D.ek,D.dF][u])}break A}if("tree"===e){d.L9(B.dX,B.fZq,4.2,B.q7,3,8)
d.ec(B.aVQ,17,B.F_,5,9)
d.ec(B.h59,11,B.XN,4,8)
d.ec(B.hd4,12,B.blo,4,8)
break A}if("pine"===e){d.dN(B.dX,B.aVI,3,B.q7,8)
for(u=0;u<3;++u){h=u*14
d.L9(new A.q(0,8+h,0),new A.q(0,26+h,0),14-u*3.5,B.aeQ,1.5,10)}break A}if("bush"===e){d.ec(B.xa,9,B.bi4,4,8)
d.ec(B.h3z,6.5,B.XN,4,8)
break A}if("flowers"===e){for(v=0;v<5;++v){h=B.dkf[v]
t=h.a
s=h.b
d.dN(new A.q(t,0,s),new A.q(t,7,s),0.4,B.aeQ,5)
d.ec(new A.q(t,8,s),2.2,h.c,3,6)}break A}if("fence"===e){for(v=0;v<4;++v)d.aZ(new A.q(B.dlY[v],9,0),B.ha7,f,0.05)
d.aP(B.As,B.aXs,h)
d.aP(B.aaJ,B.aXs,h)
break A}if("lamppost"===e){d.dN(B.dX,B.aVR,1.3,B.hs,5)
d.dN(B.dX,B.fZv,3.5,B.hs,6)
break A}if("bench"===e){d.aZ(B.aVK,B.aWt,f,0.1)
d.aZ(B.fYZ,B.h2G,f,0.1)
d.aP(B.hca,B.aWq,B.hs)
d.aP(B.h0y,B.aWq,B.hs)
break A}if("car"===e){d.aZ(B.aVI,B.h4F,f,0.4)
d.aZ(B.hcG,B.h2L,f,0.4)
d.aZ(B.h0H,B.h6Z,B.i0,0.6)
d.aP(B.hdp,B.aaQ,B.o4)
d.aP(B.h7B,B.aaQ,B.o4)
for(v=0;v<2;++v){t=B.a53[v]
d.dN(new A.q(t,5,-18),new A.q(t,5,-21),5.5,D.nh,12)
d.dN(new A.q(t,5,18),new A.q(t,5,21),5.5,D.nh,12)}break A}if("road"===e||"roadturn"===e||"roadtee"===e||"roadcross"===e){A.i5F(d,e)
break A}if("roundabout"===e){d.dN(B.dX,B.h6S,72,B.Mr,16)
d.dN(B.h7a,B.aXd,17,D.bm,10)
d.dN(B.aXd,B.aWU,15,B.bkA,10)
d.ec(B.aaO,6,E.Xw,3,6)
d.dN(B.aWU,B.aaN,0.9,B.q7,5)
break A}if("house2"===e||"shop"===e||"hospital"===e||"firestation"===e||"school"===e){h=C.a([],x.z)
r=new A.fl(h)
r.b=d.b
r.r=!0
r.f=d.f
A.hpA(r,e,f)
D.d.v(d.a,A.bCr(h,B.haR,B.dX))
break A}if("bighouse"===e){h=C.a([],x.z)
q=new A.fl(h)
q.b=d.b
q.r=!0
q.f=d.f
A.hpA(q,"house2",f)
D.d.v(d.a,A.bCr(h,B.hbD,B.dX))
break A}if("pole"===e){d.L9(B.dX,B.fYs,2.6,B.q7,2,5)
d.aP(B.fYo,B.h2N,B.bgh)
for(v=0;v<3;++v){t=B.aAu[v]
d.dN(new A.q(t,116,0),new A.q(t,121,0),1.1,D.bN,4)}d.dN(B.h2Y,B.h2W,5.5,D.bm,6)
d.aP(B.h_T,B.h11,D.jd)
break A}if("crate"===e){d.aZ(B.aaN,B.h1u,B.jr,0.05)
d.aP(B.heZ,B.h0r,B.vE)
d.fV(B.hcK,3.4,D.ax,3,5,0.3)
d.fV(B.h3u,3.4,D.aE,3,5,0.3)
break A}if("billboard"===e){d.x=$.dS=$.dS+1
for(v=0;v<2;++v){t=B.a53[v]
d.dN(new A.q(t,0,-1),new A.q(t,40,-1),1.6,D.jd,8)}d.aZ(B.fZM,B.h4a,D.cr,0.3)
d.x=0
break A}if("tower"===e||"hq"===e){d.x=$.dS=$.dS+1
p=e==="hq"
o=p?170:100
n=p?90:70
m=p?150:A.htJ(f)
l=p?D.bO:B.drn[D.o.F(f.l()>>>4,6)]
k=new A.fmt(d)
d.aZ(new A.q(0,m/2,0),new A.q(o,m,n),l,0.25)
k.$4(o,n,20,m-8)
if(p){h=o*0.66
w=n*0.66
d.aZ(new A.q(0,m+60,0),new A.q(h,120,w),D.bN,0.25)
k.$4(h,w,m+16,m+112)
d.aZ(new A.q(0,m+124,0),new A.q(o*0.7,8,n*0.7),F.fz,0.4)}else{d.aP(new A.q(0,m+3,0),new A.q(o+4,6,n+4),D.cr)
d.aP(new A.q(o*0.2,m+12,0),new A.q(o*0.3,12,n*0.3),D.dv)}j=p?m+128:m+6
for(h=o*0.3,h=[-h,h],w=j+8,v=0;v<2;++v)d.aP(new A.q(h[v],w,0),B.h2n,D.jd)
h=p?112:84
d.aZ(new A.q(0,j+34,0),new A.q(h,38,3),E.jL,0.3)
h=n/2
A.kI(d,new A.q(0,17,h+0.6),B.hI,B.ea,34,34,D.cr,B.iu,0.5)
A.kI(d,new A.q(0,17,h+0.7),B.ea.FX(B.iu),B.ea,1.2,34,B.i0,B.iu,0.6)
d.aZ(new A.q(0,38,h+5),B.h2M,F.fz,0.3)
d.x=0
break A}if("store"===e){d.x=$.dS=$.dS+1
d.aZ(B.Vw,B.aW_,f,0.2)
d.aP(B.aaM,B.aW0,D.cr)
A.kI(d,B.aXx,B.hI,B.ea,112,30,B.i0,B.iu,0.6)
d.aP(B.aVP,B.aVZ,D.bz)
d.aP(B.aVS,B.aVW,D.av)
d.x=0
break A}if("dmv"===e){d.x=$.dS=$.dS+1
d.aZ(B.Vw,B.aW_,D.aN,0.2)
d.aP(B.aaM,B.aW0,D.d7)
A.kI(d,B.aXx,B.hI,B.ea,112,30,B.i0,B.iu,0.6)
d.aP(B.aVP,B.aVZ,D.bl)
d.aP(B.aVS,B.aVW,D.d7)
d.aP(B.h8h,B.haX,D.bu)
d.aP(B.heG,B.h3U,D.d7)
d.x=0
break A}if("ubstation"===e){d.x=$.dS=$.dS+1
for(v=0;v<2;++v){t=B.dm3[v]
for(i=0;i<2;++i){s=E.RL[i]
d.dN(new A.q(t,0,s),new A.q(t,50,s),2.2,D.aJ,6)}}d.aZ(B.aVR,B.h_P,D.av,0.3)
d.aP(B.fZW,B.h_R,D.bu)
d.aZ(B.fZh,B.h_I,D.dt,0.6)
d.aP(B.fYp,B.h4C,D.bs)
d.aP(B.h_0,B.h4f,D.aJ)
d.dN(B.h3h,B.h3k,2,D.jd,6)
d.aP(B.h3l,B.h2h,D.av)
d.aP(B.h6i,B.h7c,D.bu)
d.aP(B.heQ,B.hdb,D.c)
d.x=0
break A}if("gasstation"===e){d.x=$.dS=$.dS+1
for(v=0;v<2;++v){t=B.aAx[v]
for(i=0;i<2;++i){s=B.cH1[i]
d.dN(new A.q(t,0,s),new A.q(t,46,s),2.4,D.bO,6)}}d.aZ(B.fZO,B.h_W,D.bz,0.3)
d.aP(B.hfa,B.h_Y,F.fz)
for(v=0;v<2;++v){t=E.RL[v]
d.aZ(new A.q(t,9,20),B.h4o,D.iy,0.3)
d.aP(new A.q(t,15,20.2),B.h1A,D.bz)}d.aZ(B.fYR,B.h4A,f,0.2)
d.dN(B.hcT,B.hcU,2.2,D.jd,6)
d.aP(B.hcV,B.h23,D.av)
d.x=0
break A}if("townsign"===e){d.x=$.dS=$.dS+1
for(v=0;v<2;++v){t=B.dlQ[v]
d.dN(new A.q(t,0,0),new A.q(t,316,0),5.5,D.jd,6)}d.aZ(B.fZf,B.h27,E.jL,0.3)
d.aP(B.fZm,B.aWp,F.fz)
d.aP(B.fYN,B.aWp,F.fz)
d.x=0
break A}if("adboard"===e){d.x=$.dS=$.dS+1
for(v=0;v<2;++v){t=B.dlP[v]
d.dN(new A.q(t,0,0),new A.q(t,205,0),4.5,D.jd,6)}d.aZ(B.fYy,B.h2_,E.jL,0.3)
d.aP(B.fYT,B.aWj,F.fz)
d.aP(B.aVT,B.aWj,F.fz)
d.x=0
break A}if("cornersign"===e){d.x=$.dS=$.dS+1
for(v=0;v<2;++v){t=B.aAx[v]
d.dN(new A.q(t,0,0),new A.q(t,125,0),3,D.jd,6)}d.aZ(B.fYr,B.h0h,E.jL,0.3)
d.aP(B.fYH,B.h0j,F.fz)
d.x=0
break A}if("firetruck"===e){d.aZ(B.aVJ,B.h56,D.bz,0.3)
d.aZ(B.h28,B.h18,D.bz,0.3)
d.aZ(B.h9T,B.h3p,B.i0,0.6)
d.aP(B.hbX,B.hdN,D.dv)
for(u=0;u<6;++u)d.aP(new A.q(-34+u*11,24,0),B.h8J,D.dv)
d.aP(B.h29,B.aWD,D.d3)
d.aP(B.hap,B.h6z,B.bmw)
for(v=0;v<3;++v){t=B.dm_[v]
d.dN(new A.q(t,6,-19),new A.q(t,6,-22.5),6,D.nh,12)
d.dN(new A.q(t,6,19),new A.q(t,6,22.5),6,D.nh,12)}break A}if("ambulance"===e){d.aZ(B.KA,B.h4G,D.c,0.4)
d.aZ(B.h1S,B.h1n,D.c,0.4)
d.aZ(B.h6R,B.hb4,B.i0,0.6)
d.aP(B.hep,B.aWY,D.bz)
d.aP(B.h8r,B.aWY,D.bz)
d.aP(B.aXj,B.h7Q,D.bz)
d.aP(B.aXj,B.h6d,D.bz)
d.aP(B.h1V,B.aWD,D.ax)
for(v=0;v<2;++v){t=B.a53[v]
d.dN(new A.q(t,6,-19),new A.q(t,6,-22.5),6,D.nh,12)
d.dN(new A.q(t,6,19),new A.q(t,6,22.5),6,D.nh,12)}break A}if("dog"===e||"cat"===e||"cow"===e||"sheep"===e||"chicken"===e||"horse"===e){A.hp5(d,e,f,0)
break A}if("pond"===e){h=C.a([],x.z)
q=new A.fl(h)
q.b=d.b
q.f=d.f
q.r=!0
q.dR(B.dX,B.hbH,28,B.bnH,0.8,22)
D.d.v(d.a,A.bCr(h,B.h5I,B.dX))
for(v=0;v<3;++v){h=B.d6P[v]
d.ec(new A.q(h.a,1.2,h.b),2.6,B.ago,3,6)}break A}if("swing"===e){d.dN(B.hcj,B.h1p,1.6,D.d1,8)
for(v=0;v<2;++v){t=E.a52[v]
d.dN(new A.q(t,38,0),new A.q(t,0,14),1.4,D.d1,6)
d.dN(new A.q(t,38,0),new A.q(t,0,-14),1.4,D.d1,6)}for(v=0;v<2;++v){t=E.a54[v]
d.dN(new A.q(t,38,0),new A.q(t,15,0),0.3,B.hs,4)}d.aP(B.KA,B.hew,f)
break A}if("shed"===e){d.aZ(B.KA,B.h34,f,0.05)
d.aP(B.aaL,B.h3f,B.Y2)
d.aP(B.hby,B.hbm,h)
break A}if("doghouse"===e){d.aZ(B.aaN,B.h1o,f,0.05)
d.aP(B.h1L,B.hdE,B.Y2)
d.aP(B.h9S,B.heJ,B.LY)
break A}d.aP(B.As,B.h_t,f)}},
cgo:function cgo(){},
fQp:function fQp(d,e,f){this.a=d
this.b=e
this.c=f},
fQn:function fQn(d,e,f){this.a=d
this.b=e
this.c=f},
fQm:function fQm(d,e,f){this.a=d
this.b=e
this.c=f},
fQo:function fQo(d){this.a=d},
fzs:function fzs(d){this.a=d},
fze:function fze(){},
fzp:function fzp(){},
fzq:function fzq(d,e,f){this.a=d
this.b=e
this.c=f},
fzf:function fzf(){},
fzg:function fzg(){},
fzh:function fzh(){},
fzi:function fzi(d){this.a=d},
fzk:function fzk(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fzl:function fzl(d,e,f){this.a=d
this.b=e
this.c=f},
fzm:function fzm(d,e,f){this.a=d
this.b=e
this.c=f},
fzn:function fzn(d,e,f){this.a=d
this.b=e
this.c=f},
fzo:function fzo(d,e,f){this.a=d
this.b=e
this.c=f},
fzr:function fzr(d){this.a=d},
fzj:function fzj(d){this.a=d},
fsn:function fsn(d){this.a=d},
fso:function fso(d){this.a=d},
fsj:function fsj(d){this.a=d},
fsk:function fsk(d,e){this.a=d
this.b=e},
fsl:function fsl(d){this.a=d},
frL:function frL(){},
frM:function frM(){},
frN:function frN(d){this.a=d},
frY:function frY(d){this.a=d},
fs8:function fs8(){},
fsm:function fsm(d,e){this.a=d
this.b=e},
fsd:function fsd(d){this.a=d},
fse:function fse(d){this.a=d},
fsf:function fsf(d){this.a=d},
fsg:function fsg(d){this.a=d},
fsh:function fsh(d){this.a=d},
fsi:function fsi(d){this.a=d},
frO:function frO(d){this.a=d},
frP:function frP(d){this.a=d},
frQ:function frQ(d){this.a=d},
frR:function frR(d){this.a=d},
frS:function frS(d){this.a=d},
frT:function frT(d){this.a=d},
frU:function frU(){},
frV:function frV(){},
frW:function frW(){},
frX:function frX(){},
frZ:function frZ(d){this.a=d},
fs_:function fs_(d){this.a=d},
fs0:function fs0(d){this.a=d},
fs1:function fs1(d){this.a=d},
fs2:function fs2(){},
fs3:function fs3(){},
fs4:function fs4(){},
fs5:function fs5(){},
fs6:function fs6(){},
fs7:function fs7(d,e){this.a=d
this.b=e},
fs9:function fs9(d){this.a=d},
fsa:function fsa(d){this.a=d},
fsb:function fsb(){},
fsc:function fsc(){},
fCr:function fCr(d){this.a=d},
fCo:function fCo(){},
fCp:function fCp(d){this.a=d},
fCq:function fCq(d){this.a=d},
fiE:function fiE(d,e){this.a=d
this.b=e},
fiu:function fiu(d,e,f){this.a=d
this.b=e
this.c=f},
fte:function fte(d,e){this.a=d
this.b=e},
fsM:function fsM(d,e,f){this.a=d
this.b=e
this.c=f},
fsN:function fsN(d,e){this.a=d
this.b=e},
fsO:function fsO(d){this.a=d},
fsP:function fsP(d,e,f){this.a=d
this.b=e
this.c=f},
ft_:function ft_(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ft7:function ft7(){},
ft8:function ft8(d,e,f){this.a=d
this.b=e
this.c=f},
ft9:function ft9(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fta:function fta(d,e){this.a=d
this.b=e},
ftb:function ftb(d,e,f){this.a=d
this.b=e
this.c=f},
ftc:function ftc(d){this.a=d},
ftd:function ftd(){},
fsQ:function fsQ(d){this.a=d},
fsR:function fsR(d){this.a=d},
fsS:function fsS(d){this.a=d},
fsT:function fsT(d){this.a=d},
fsU:function fsU(d,e){this.a=d
this.b=e},
fsV:function fsV(d,e){this.a=d
this.b=e},
fsW:function fsW(d,e,f){this.a=d
this.b=e
this.c=f},
fsX:function fsX(d,e){this.a=d
this.b=e},
fsY:function fsY(d,e){this.a=d
this.b=e},
fsZ:function fsZ(d,e){this.a=d
this.b=e},
ft0:function ft0(d,e){this.a=d
this.b=e},
ft1:function ft1(d,e,f){this.a=d
this.b=e
this.c=f},
ft2:function ft2(d,e,f){this.a=d
this.b=e
this.c=f},
ft3:function ft3(d,e){this.a=d
this.b=e},
ft4:function ft4(d,e){this.a=d
this.b=e},
ft5:function ft5(d,e){this.a=d
this.b=e},
ft6:function ft6(d){this.a=d},
fmt:function fmt(d){this.a=d},
hfB(){var w=x.S
return new A.bVc(C.eE([72],w),C.aX(w),C.aX(w),C.aX(w))},
iax(d){var w
A:{if(81===d){w="outlet"
break A}if(82===d){w="switch"
break A}if(84===d){w="gfci"
break A}if(86===d||87===d){w="ptrap"
break A}if(85===d){w="faucet"
break A}w=null
break A}return w},
agI(a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=C.a([],x.z),a0=new A.fl(d)
a0.b=70
a0.hr(B.haT,B.hdB,B.bkp,4)
a0.c=1
a0.b=91
w=new A.fzx(a0)
w.$3(B.h6c,B.h5s,15)
w.$4$alongX(B.hda,B.h9y,11,!1)
w.$4$alongX(B.h3o,B.h5C,11,!1)
w.$4$alongX(B.hcb,B.h6x,6,!1)
w.$4$alongX(B.h4n,B.h9z,6,!1)
for(v=0;v<=12;++v)a0.aDS(new A.q(-12+v*2,8.4,0),B.hae,B.Yk,!1,0.05)
a0.c=2
a0.b=92
u=new A.fzu(a0)
u.$2(B.cqg,B.tM)
u.$2(B.diP,B.o0)
u.$2(B.dnU,B.o0)
t=new A.fzt(a0)
t.$1(B.d_s)
t.$1(B.d5r)
a0.c=3
a0.b=93
s=new A.fzw(a0)
s.$1(B.cZl)
s.$2$col(B.cXI,B.oV)
s.$2$col(B.cWN,B.oV)
s.$1(B.dfH)
a0.c=4
a0.b=0
a0.d=0.22
a0.hr(B.h5B,B.h8M,B.B7,4)
a0.hr(B.h8I,B.aX4,B.B7,4)
a0.hr(B.h6f,B.aX4,B.B7,4)
a0.hr(B.h7l,B.aX9,B.B7,3)
a0.hr(B.heX,B.aX9,B.B7,3)
a0.d=1
a0.c=5
a0.e=0.3
a0.b=0
a0.nc(B.hbT,B.h5y,B.bhP,0.1,4)
a0.b=71
a0.aZ(B.hb0,B.haf,B.XC,0.5)
a0.aP(B.hev,B.h72,B.Fb)
r=[72,73,74,75,76]
for(q=a1.d,p=a1.e,v=0;v<5;++v){o=D.o.F(v,2)
n=D.o.ao(v,2)
m=r[v]
l=q.t(0,m)
k=p.t(0,m)
a0.b=m
m=9.55+o*0.5
j=5.7-n*0.5
a0.aZ(new A.q(m,j,-7.5),B.h57,B.Zb,0.3)
if(l)i=0
else i=k?-0.07:0.07
if(l)h=D.cd
else h=k?D.bm:D.bO
a0.aZ(new A.q(m+0,j+i,-7.42),B.h6H,h,0.4)}a0.b=90
a0.aZ(B.h9A,B.h3v,B.bs3,0.1)
a0.aZ(B.hde,B.h5W,B.YU,0.1)
a0.aZ(B.hft,B.aXr,B.YU,0.1)
a0.aZ(B.h5P,B.aXr,B.YU,0.1)
g=new A.fzv(a0)
g.$3(81,B.h4w,a1.x?B.xV:B.YC)
a0.b=81
a0.aP(B.h9B,B.aXl,B.Fn)
a0.aP(B.h7V,B.aXl,B.Fn)
g.$5$h$w(82,B.heA,G.YN,0.65,0.4)
a0.b=82
a0.aZ(B.hbv,B.h3s,B.afJ,0.4)
f=!q.t(0,72)
a0.b=83
a0.dR(B.hbh,B.aWP,0.5,B.bpA,0.4,14)
a0.bc0(B.hdX,0.3,f?Al.FH:B.bk5,0.7)
if(f){a0.b=0
a0.d=0.22
a0.fV(B.aWC,1.5,B.XW,4,10,0)
a0.d=1}a0.b=94
a0.aZ(B.hdK,B.aXv,B.jr,0.1)
a0.aZ(B.h9P,B.aXv,B.jr,0.1)
a0.aZ(B.hey,B.h6n,B.jr,0.1)
a0.nc(B.h93,B.he_,B.Mh,0.5,2)
a0.aZ(B.haW,B.hfp,B.Fl,0.7)
a0.b=85
a0.jk(A.H7(B.d9c,0.2,6),0.055,B.jI,!1,0.9,8)
a0.b=84
a0.aZ(B.hea,B.hbL,B.YC,0.3)
a0.aP(B.h7t,B.heu,a1.y?B.agn:B.aiB)
a0.b=86
a0.jk(A.H7(B.d_W,0.35,3),0.11,B.pX,!1,0.3,8)
a0.b=87
a0.dR(B.h8m,B.hb6,0.19,a1.c?B.XJ:B.bnl,0.3,8)
a0.b=88
a0.aZ(B.h2K,B.h5f,B.Bc,0.7)
a0.BE(B.haS,B.aXm,0.72,B.Bc,0.55,0.7,16)
a0.dR(B.aXm,B.h9e,0.78,B.bp7,0.7,16)
a0.b=89
a0.dR(B.hdj,B.aWF,0.85,B.bcD,0.6,18)
a0.dR(B.aWF,B.h8K,0.5,B.bcF,0.5,12)
a0.aP(B.h9Z,B.hfg,B.bnf)
a0.b=95
for(p=a1.f,m=a1.r,v=0;v<3;++v){e=B.cGF[v]
if(m.t(0,v)){j=e.a
i=e.b
a0.aP(new A.q(j,i,-7.82),B.hbi,B.B7)
a0.aP(new A.q(j,i,-7.79),B.h8Q,B.bg8)}else if(p.t(0,v)){j=e.a
i=e.b
a0.aP(new A.q(j,i,-7.82),B.h0R,B.ahB)
a0.aP(new A.q(j,i,-7.8),B.h9N,B.bsk)}}if(a1.w){a0.b=96
a0.dR(B.h8W,B.h8e,0.1,D.d1,0.7,8)}a0.e=0
a0.c=6
a0.b=0
a0.d=0.4
a0.biZ(B.aWw,B.aXk,B.aaW,B.aaU,B.af6,B.h9v,!0)
a0.biZ(B.aXf,B.aXp,B.aaU,B.aaW,B.af6,B.hbp,!0)
a0.bk8(B.aWw,B.aXp,B.aaU,B.afk)
a0.bk8(B.aXk,B.aXf,B.aaW,B.afk)
a0.d=1
p=q.t(0,72)?"This breaker has TRIPPED (it is in the middle, orange). The living room has no power. Tap it to flip it off and on again.":"This breaker is ON. The living room has power."
q=q.t(0,72)?"The light is off because the living room breaker has tripped.":"The ceiling light is on."
m=a1.b
j=m&&!a1.c?"Water is dripping from the slip nut here. Pick the wrench, then tap the nut to tighten it.":"The P-trap holds a water seal that blocks sewer gas. Tap Open lesson to build one."
m=m&&!a1.c?"This slip nut is loose and the trap is dripping. Pick the wrench and tap here to tighten it.":"The slip nut is tight."
return new A.tT(d,C.H([70,B.ed2,91,B.ect,92,B.ecM,93,B.ecU,71,B.ed7,72,new A.cX("Living room breaker",p,B.hf3,3.5),73,B.ecE,74,B.ecW,75,B.ecj,76,B.ecP,81,B.ecR,82,B.eca,83,new A.cX("Ceiling light",q,B.aWP,7),84,B.ecX,85,B.ecl,86,new A.cX("P-trap under the sink",j,B.haQ,4.5),87,new A.cX("Slip nut (leaking?)",m,B.aWS,3.5),88,B.ec7,89,B.ecV,90,B.ecZ,94,B.ecD,95,B.ed0,96,B.ecc],x.S,x.q),B.zs,B.wC,null,0)},
huM(d,e){var w,v,u,t,s,r,q,p=C.a([],x.z),o=new A.fl(p)
o.c=5
o.e=0.8
if(d.w)for(w=e*1.5,v=0;v<6;++v){u=D.k.F(w+v/6,1)
o.fV(new A.q(3.4+Math.sin(v*2)*0.12,3.3-u*u*2.8,-7.7),0.05,D.LX,3,6,0.9)}if(d.as){u=D.k.F(e*1.1,1)
o.fV(new A.q(3,3.9-u*u*0.7,-6.95),0.05,B.XT,3,6,0.9)}if(d.Q)for(w=e*1.6,v=0;v<6;++v){u=D.k.F(w+v/6,1)
o.fV(new A.q(8.2+Math.sin(v*1.7)*0.15,2.2-u*1.5,-7.2),0.05,B.XT,3,6,0.9)}if(d.at){o.d=0.55
o.aZ(B.h5M,B.h7q,B.bpo,0.8)
o.d=1}if(d.x)for(w=e*2,t=e*6,v=0;v<8;++v){u=D.k.F(w+v*0.13,1)
s=v*2.4+t
r=Math.cos(s)
s=Math.sin(s)
q=C.ar(F.MH,E.Z4,1-u)
q.toString
o.fV(new A.q(-3.2+r*u*0.7,1.3+s*u*0.7,-7.6+u*0.3),0.05,q,3,5,0)}if(d.z&&!d.d.t(0,72)){o.b=0
o.d=D.k.E((Math.sin(e*17)+Math.sin(e*29)+2)/4*0.5,0,0.6)
o.fV(B.aWC,1.5,B.XW,4,10,0)
o.d=1}if(d.b&&!d.c){for(w=e*1.3,v=0;v<5;++v){u=D.k.F(w+v*0.2,1)
o.fV(new A.q(3.05,1.45-u*u*1.4,-6.95),0.05,B.YX,3,6,0.9)}o.d=0.5
o.aZ(B.h5r,new A.q(0.7+0.3*Math.sin(e),0.02,0.5),B.YX,0.9)
o.d=1}return p},
bVc:function bVc(d,e,f,g){var _=this
_.a=5
_.b=!0
_.c=!1
_.d=d
_.e=e
_.f=f
_.r=g
_.at=_.as=_.Q=_.z=_.y=_.x=_.w=!1},
fzx:function fzx(d){this.a=d},
fzu:function fzu(d){this.a=d},
fzt:function fzt(d){this.a=d},
fzw:function fzw(d){this.a=d},
fzv:function fzv(d){this.a=d},
fX(d,e,f,g){var w
try{Ak.dF(d,"",e,0,f,g)}catch(w){}},
yM(){A.fX(880,80,0.25,"tri")
C.bP(Y.ajv,new A.fAs(),x.H)},
hMU(){return new A.NH(null)},
Y9(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w){return new A.b7K(t,d,u,s,f,r,q,j,g,h,m,n,i,k,v,w,l,o,p,e,null)},
wV(d,e,f,g,h){var w=null,v=g?e.j(0.25):D.w.j(0.5),u=C.n(18),t=C.J(g?e:D.aY,D.r,1),s=x.p,r=C.a([],s)
D.d.v(r,C.a([C.X(f,g?e:D.ad,w,w,w,16),D.en],s))
r.push(C.d(d,w,w,w,w,w,w,C.l(w,w,g?e:D.ad,w,w,w,w,w,w,w,w,12,w,w,D.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w))
return C.aB(w,C.p(w,C.B(r,D.m,w,D.e,D.O,0,w,w),D.f,w,w,new C.o(v,w,t,u,w,w,D.n),w,w,w,w,D.h6,w,w,w),D.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,h,w,w,w,w,w,w,!1,D.a3)},
ui(d,e,f,g){var w=null,v=f==null,u=v?D.ds:g.j(0.9),t=C.n(14),s=C.X(e,v?D.bZ:D.w,w,w,w,18)
return C.E(C.aB(w,C.p(w,C.B(C.a([s,D.bn,new C.ds(1,D.cp,C.d(d,w,w,w,w,w,w,C.l(w,w,v?D.bZ:D.w,w,w,w,w,w,w,w,w,12.5,w,w,D.u,w,w,!0,w,w,w,w,w,w,w,w),D.K,w,w),w)],x.p),D.m,w,D.b9,D.i,0,w,w),D.f,w,w,new C.o(u,w,w,t,w,w,D.n),w,w,w,w,D.u5,w,w,w),D.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,!1,D.a3),1)},
fRz(d,e,f,g){return C.bU(E.lA,null,new A.fRB(e,g,f),d,!0,!0,!0,D.k2,!1,!1,x.H)},
U1(d,e,f,g,h,i,j){return new A.aXS(i,d,g,f,e,h,j,null)},
fAs:function fAs(){},
pA:function pA(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
NH:function NH(d){this.a=d},
bkO:function bkO(){this.c=this.a=null},
dSH:function dSH(d){this.a=d},
dSI:function dSI(d){this.a=d},
dSJ:function dSJ(d){this.a=d},
dSK:function dSK(d){this.a=d},
dSO:function dSO(d){this.a=d},
dSP:function dSP(d){this.a=d},
dSQ:function dSQ(d){this.a=d},
dSR:function dSR(d){this.a=d},
dSS:function dSS(d){this.a=d},
dST:function dST(d){this.a=d},
dSU:function dSU(d){this.a=d},
dSV:function dSV(d){this.a=d},
dSL:function dSL(d,e){this.a=d
this.b=e},
dSM:function dSM(d){this.a=d},
dSN:function dSN(d){this.a=d},
awu:function awu(d,e){this.c=d
this.a=e},
btK:function btK(){this.c=this.a=this.d=null},
f6B:function f6B(d){this.a=d},
f6A:function f6A(){},
b7K:function b7K(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,a0){var _=this
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
fRB:function fRB(d,e,f){this.a=d
this.b=e
this.c=f},
fRA:function fRA(){},
aXS:function aXS(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
bXi:function bXi(d){this.a=d},
DZ:function DZ(d,e,f){this.c=d
this.d=e
this.a=f},
aAy:function aAy(d){var _=this
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
daS:function daS(d,e){this.a=d
this.b=e},
daQ:function daQ(d,e,f){this.a=d
this.b=e
this.c=f},
daR:function daR(d){this.a=d},
daP:function daP(d){this.a=d},
daD:function daD(d){this.a=d},
daE:function daE(d){this.a=d},
daC:function daC(d){this.a=d},
daF:function daF(d){this.a=d},
daG:function daG(d){this.a=d},
daH:function daH(d){this.a=d},
daI:function daI(d){this.a=d},
daJ:function daJ(d,e,f){this.a=d
this.b=e
this.c=f},
daK:function daK(d){this.a=d},
daL:function daL(d,e){this.a=d
this.b=e},
daM:function daM(d,e){this.a=d
this.b=e},
daN:function daN(d,e){this.a=d
this.b=e},
daO:function daO(d){this.a=d},
daT:function daT(d,e){this.a=d
this.b=e},
daU:function daU(d){this.a=d},
db2:function db2(){},
dbb:function dbb(d,e,f){this.a=d
this.b=e
this.c=f},
dbi:function dbi(d){this.a=d},
db_:function db_(){},
db3:function db3(d){this.a=d},
db4:function db4(d){this.a=d},
dbc:function dbc(d){this.a=d},
dbd:function dbd(d){this.a=d},
db1:function db1(d){this.a=d},
dbe:function dbe(d){this.a=d},
db0:function db0(d){this.a=d},
dbf:function dbf(d){this.a=d},
dbg:function dbg(d){this.a=d},
dbh:function dbh(d){this.a=d},
dbj:function dbj(d){this.a=d},
db5:function db5(d,e){this.a=d
this.b=e},
daZ:function daZ(d,e){this.a=d
this.b=e},
db6:function db6(d,e){this.a=d
this.b=e},
db7:function db7(d){this.a=d},
daY:function daY(d){this.a=d},
db8:function db8(d){this.a=d},
daX:function daX(d){this.a=d},
db9:function db9(d){this.a=d},
daW:function daW(d){this.a=d},
dba:function dba(d){this.a=d},
daV:function daV(d){this.a=d},
a9G:function a9G(d,e){this.c=d
this.a=e},
aGu:function aGu(){var _=this
_.f=_.e=_.d=$
_.r=""
_.w=0
_.x=null
_.y=!1
_.c=_.a=_.z=null},
eWR:function eWR(d,e,f){this.a=d
this.b=e
this.c=f},
eWS:function eWS(d){this.a=d},
eWQ:function eWQ(d){this.a=d},
eWK:function eWK(d){this.a=d},
eWL:function eWL(d,e){this.a=d
this.b=e},
eWM:function eWM(d,e){this.a=d
this.b=e},
eWN:function eWN(d,e){this.a=d
this.b=e},
eWO:function eWO(d){this.a=d},
eWP:function eWP(d,e){this.a=d
this.b=e},
eWW:function eWW(){},
eX_:function eX_(d,e){this.a=d
this.b=e},
eWX:function eWX(d){this.a=d},
eWY:function eWY(d,e){this.a=d
this.b=e},
eWV:function eWV(d,e){this.a=d
this.b=e},
eWZ:function eWZ(d){this.a=d},
eWU:function eWU(d){this.a=d},
eWT:function eWT(){},
a57:function a57(d,e){this.c=d
this.a=e},
aAS:function aAS(){var _=this
_.f=_.e=_.d=$
_.r=""
_.w=0
_.x=null
_.y=!1
_.c=_.a=_.z=null},
ddU:function ddU(d,e,f){this.a=d
this.b=e
this.c=f},
ddV:function ddV(d){this.a=d},
ddT:function ddT(d){this.a=d},
ddM:function ddM(d){this.a=d},
ddP:function ddP(d){this.a=d},
ddQ:function ddQ(d,e){this.a=d
this.b=e},
ddR:function ddR(d,e){this.a=d
this.b=e},
ddO:function ddO(d){this.a=d},
ddS:function ddS(d,e){this.a=d
this.b=e},
ddN:function ddN(d){this.a=d},
ddZ:function ddZ(){},
de4:function de4(d,e){this.a=d
this.b=e},
de_:function de_(d){this.a=d},
de0:function de0(d){this.a=d},
ddY:function ddY(d){this.a=d},
de2:function de2(d,e){this.a=d
this.b=e},
ddX:function ddX(d,e){this.a=d
this.b=e},
de1:function de1(d){this.a=d},
de3:function de3(d){this.a=d},
ddW:function ddW(d){this.a=d},
aBK:function aBK(d){this.a=d},
aBL:function aBL(d){var _=this
_.d=d
_.f=_.e=$
_.r=0
_.w=""
_.x=null
_.y=!1
_.c=_.a=_.z=null},
dkY:function dkY(d,e,f){this.a=d
this.b=e
this.c=f},
dkZ:function dkZ(d){this.a=d},
dkX:function dkX(d){this.a=d},
dkS:function dkS(d){this.a=d},
dkU:function dkU(d,e){this.a=d
this.b=e},
dkV:function dkV(d,e){this.a=d
this.b=e},
dkW:function dkW(d,e){this.a=d
this.b=e},
dkT:function dkT(d){this.a=d},
dl6:function dl6(d,e){this.a=d
this.b=e},
dl1:function dl1(d,e){this.a=d
this.b=e},
dl3:function dl3(d){this.a=d},
dl2:function dl2(d){this.a=d},
dl4:function dl4(d){this.a=d},
dl0:function dl0(d){this.a=d},
dl5:function dl5(d){this.a=d},
dl_:function dl_(d,e){this.a=d
this.b=e},
afL:function afL(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bxo:function bxo(){var _=this
_.d=null
_.e=!1
_.c=_.a=null},
fic:function fic(d){this.a=d},
fia:function fia(d){this.a=d},
fib:function fib(d){this.a=d},
fi9:function fi9(d){this.a=d},
fie:function fie(d){this.a=d},
fif:function fif(d){this.a=d},
fid:function fid(d){this.a=d},
jQ:function jQ(d,e){this.a=d
this.b=e},
N3:function N3(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a79:function a79(d){this.a=d},
cbJ:function cbJ(d){this.a=d},
h4_(){var w=x.N
return new A.cnT(C.aX(w),C.H(["n1",!1,"n2",!1],w,x.R),C.U(x.S,w))},
ilq(d,e,f){var w,v
if(!f.c.t(0,e)){w=f.d
return e==="hot"?"The red (hot) hose goes on the LEFT side only. "+w:"The blue (cold) hose goes on the RIGHT side only. "+w}w=d.e
v=f.a
if(w.h(0,v)!=null)return"That connection already has a hose."
w.n(0,v,e)
return null},
fQU(){var w,v,u=C.a([B.aWs,B.h88],x.o)
for(w=1;w<=12;++w){v=3.141592653589793+3.141592653589793*w/12
u.push(new A.q(3+3*Math.cos(v),0.2+3*Math.sin(v),0))}D.d.v(u,A.H7(B.daz,1,6))
return u},
bCL(d){var w,v,u,t,s="trap",r=C.a([],x.z),q=new A.fl(r)
q.b=49
q.nc(B.h0K,B.h2x,B.jr,0.1,2)
q.nc(B.heV,B.h0O,B.jr,0.1,2)
q.b=47
q.hr(B.h9u,B.h2y,B.vI,3)
q.hr(B.h1K,B.h0P,B.vI,3)
q.b=46
q.nc(B.h3C,B.hal,B.Mh,0.5,3)
q.bdW(B.hbR,B.KA,6.5,B.Fl,!0,0.7,20)
q.dR(B.haK,B.h7L,1.5,B.jI,0.85,14)
q.b=48
q.Ti(B.aaY,B.h69,0.92,B.pX,!1,!0,0.3,14)
q.cYz(B.aaY,B.he6,1,0.72,B.pX,0.3)
w=new A.fA8(d,q)
w.$5(41,B.a4m,B.jI,0.85,"tail")
w.$5(42,A.fQU(),B.pX,0.3,s)
w.$5(43,B.a5j,B.pX,0.3,"arm")
w=new A.fA7(d,q)
v=d.a
w.$6(44,"n1",B.aaT,B.ea,B.h6u,v.t(0,"tail")&&v.t(0,s))
w.$6(45,"n2",B.aaV,B.hI,B.hbK,v.t(0,s)&&v.t(0,"arm"))
if(v.t(0,s)){q.b=0
q.d=0.55
q.e=0.4
u=A.fQU()
w=C.T(u).k("Z<1>")
t=C.C(new C.Z(u,new A.fA6(),w),w.k("M.E"))
if(t.length>1)q.aJv(t,0.4092,B.Z9,!1,!0,0.6,8)
q.d=1
q.e=0}return new A.tT(r,C.H([41,B.ecn,42,B.ecp,43,B.ecT,44,B.ecH,45,B.ed4,46,B.ecv,47,B.ecB,48,B.ec5,49,B.ecr],x.S,x.q),B.zs,B.wC,null,0)},
ijl(d,e){var w,v,u,t,s,r,q,p=C.a([],x.z),o=new A.fl(p),n=d.d
if(n.length!==0){w=n==="n1"?B.hfj:B.hdu
for(n=e*1.4,v=w.a+0,u=w.b,t=w.c+0,s=0;s<5;++s){r=D.k.F(n+s*0.2,1)
o.fV(new A.q(v,u+(-r*6*r-r*1.5),t),0.22*(1-r*0.3),B.YX,3,6,0.9)}}else if(d.c){n=x.Q
v=C.C(B.a4m,n)
u=A.fQU()
D.d.v(v,C.d_(u,1,null,C.T(u).c))
D.d.v(v,C.d_(B.a5j,1,null,n))
for(n=e*0.45,s=0;s<18;++s){r=D.k.F(n+s/18,1)
q=D.o.E(D.k.bf(r*(v.length-1)),0,v.length-2)
u=v.length
o.fV(A.o5(v[q],v[q+1],r*(u-1)-q),0.38,B.brq,3,6,0.9)}for(n=e*2.2,s=0;s<6;++s)o.fV(new A.q(0,14-D.k.F(n+s/6,1)*5.4,0),0.3,B.XT,3,6,0.9)}return p},
agV(d){switch(d){case 61:return B.h0J
case 62:return B.hdr
case 63:return B.h8B
default:return B.h8s}},
h8U(d){var w=d==="hot",v=A.agV(w?61:62),u=A.agV(w?63:64),t=w?-1:1
return A.ai8(C.a([v,v.a9(0,new A.q(t*0.6,2.2,1.2)),A.o5(v,u,0.5).a9(0,new A.q(t*1.4,0,2.6)),u.a9(0,new A.q(-t*0.2,-2,1)),u],x.o),6)},
aPS(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=C.a([],x.z),e=new A.fl(f)
e.b=67
e.hr(B.h0G,B.h2a,B.vI,3)
e.b=66
e.nc(B.h86,B.he5,B.Mh,0.5,3)
e.Ti(B.aWg,B.heT,7.6,B.YY,!1,!0,0.7,28)
e.dR(B.aWg,B.hb5,7.6,B.ag8,0.5,28)
e.dR(B.h2l,B.h7d,1.2,B.jI,0.9,14)
e.aZ(B.haw,B.aW5,B.jr,0.1)
e.aZ(B.heo,B.aW5,B.jr,0.1)
e.b=65
e.dR(B.hdL,B.aXe,3.4,B.jI,0.9,20)
e.jk(A.H7(B.dgf,1.4,6),0.5,B.jI,!0,0.9,12)
for(w=0;w<2;++w){v=B.dbl[w]
u=v*1.2
e.dR(new A.q(u,15.5,-3.6),new A.q(u,17.7,-3.6),0.38,B.jI,0.9,10)
t=v<0?B.tM:B.o0
e.dR(new A.q(u,17.7,-3.6),new A.q(u,18.6,-3.6),0.6,t,0.6,12)}for(u=[B.eAX,B.ew4],w=0;w<2;++w){t=u[w]
v=t.b
e.b=t.a
e.dR(new A.q(v,15.3,-3.6),new A.q(v,11.4,-3.6),0.45,B.jI,0.9,10)
e.dR(new A.q(v,11.4,-3.6),new A.q(v,10.7,-3.6),0.3,B.bmV,0.6,8)
e.zt(new A.q(v,11.3,-3.6),new A.q(v,11.9,-3.6),0.78,0.48,B.bp6,0.7,8)}for(u=[B.eUm,B.eWo],w=0;w<2;++w){t=u[w]
v=t.b
e.b=t.a
e.dR(new A.q(v,-1.5,-6),new A.q(v,-1.5,-3.6),0.4,B.LO,0.7,12)
e.dR(new A.q(v,-1.5,-4.4),new A.q(v,0.7,-4.4),1,B.jI,0.9,14)
e.dR(new A.q(v,0.7,-4.4),new A.q(v,1.5,-3.6),0.45,B.jI,0.9,10)
e.dR(new A.q(v,-0.2,-4.4),new A.q(v,-0.2,-3.1),0.2,B.aeJ,0.7,8)
e.dR(new A.q(v,-0.2,-3.1),new A.q(v,-0.2,-2.4000000000000004),1.45,t.c,0.5,14)
e.zt(new A.q(v,1.2,-3.6),new A.q(v,1.9,-3.6),0.78,0.4,B.xJ,0.8,8)}for(u=x.o,w=0;w<2;++w){s=B.diU[w]
t=s==="hot"
r=t?B.cHC:B.cHP
q=C.T(r).k("Z<1>")
p=C.C(new C.Z(r,new A.fzd(d,s),q),q.k("M.E"))
e.b=t?68:69
o=t?B.tM:B.o0
t=p.length
if(t===2){n=A.h8U(s)
e.jk(n,0.34,B.My,!1,0.7,8)
m=n.length/2|0
e.jk(C.a([n[m-1],n[m],n[m+1]],u),0.4,o,!1,0.4,8)
for(t=r.length,l=0;l<t;++l){k=A.agV(r[l])
q=k.a+0
j=k.b
i=k.c+0
e.zt(new A.q(q,j+-0.2,i),new A.q(q,j+0.6,i),0.62,0.3,B.xJ,0.8,8)}}else if(t===1){k=A.agV(D.d.gI(p))
h=D.d.gI(p)===D.d.gI(r)?1:-1
t=k.a+0
q=k.b
j=k.c
e.jk(C.a([k,new A.q(t,q+h*1.4,j+1),new A.q(t,q+h*3,j+2.4)],u),0.34,B.My,!1,0.7,8)
j+=0
e.zt(new A.q(t,q+-0.2,j),new A.q(t,q+0.6,j),0.62,0.3,B.xJ,0.8,8)}}if(d.r){e.b=0
e.d=0.5
for(u=d.e,w=0;w<4;++w){g=B.a5d[w]
t=g.a
if(u.h(0,t)!=null)continue
t=A.agV(t)
q=g.c.t(0,"hot")?B.tM:B.o0
e.fV(new A.q(t.a+0,t.b+0,t.c+0.9),0.65,q,4,8,0.1)}e.d=1}return new A.tT(f,C.H([61,B.ece,62,B.ecg,63,B.ec9,64,B.ech,65,B.ecC,66,B.ecy,67,B.ec6,68,B.ed8,69,B.ecF],x.S,x.q),B.zs,B.wC,null,0)},
ia4(d,e){var w,v,u,t,s,r,q,p,o,n=C.a([],x.z),m=new A.fl(n)
if(!d.f)return n
w=d.e
v=w.h(0,61)==="hot"&&w.h(0,63)==="hot"
u=w.h(0,62)==="cold"&&w.h(0,64)==="cold"
t=new A.fBP(e,m)
if(v){s=A.h8U("hot")
for(r=e*0.5,q=0;q<10;++q){p=D.k.F(r+q/10,1)
o=D.o.E(D.k.bf(p*(s.length-1)),0,s.length-2)
m.fV(A.o5(s[o],s[o+1],p*(s.length-1)-o),0.2,D.LX,3,6,0.9)}}else if(w.h(0,61)==null)t.$2(61,D.LX)
if(u){s=A.h8U("cold")
for(w=e*0.5,q=0;q<10;++q){p=D.k.F(w+q/10,1)
o=D.o.E(D.k.bf(p*(s.length-1)),0,s.length-2)
m.fV(A.o5(s[o],s[o+1],p*(s.length-1)-o),0.2,B.Yq,3,6,0.9)}}else if(w.h(0,62)==null)t.$2(62,B.Yq)
if(v&&u)for(w=e*2,q=0;q<8;++q){p=D.k.F(w+q/8,1)
r=C.ar(B.brw,B.Yq,0.5)
r.toString
m.fV(new A.q(0,21-p*6.5,1.6),0.26,r,3,6,0.9)}return n},
fBN(d){return D.d.d5(B.a5d,new A.fBO(d))},
cnT:function cnT(d,e,f){var _=this
_.a=d
_.b=e
_.c=!1
_.d=""
_.e=f
_.r=_.f=!1},
Fe:function Fe(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fA8:function fA8(d,e){this.a=d
this.b=e},
fA7:function fA7(d,e){this.a=d
this.b=e},
fA6:function fA6(){},
fzd:function fzd(d,e){this.a=d
this.b=e},
fBP:function fBP(d,e){this.a=d
this.b=e},
fBO:function fBO(d){this.a=d},
h3Z(d,e,f){var w=x.N
w=new A.cnJ(e,d,C.aX(w),C.U(w,x.S),C.aX(w))
w.bA0(d,e,f)
return w},
hu2(c0,c1,c2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5=C.a([],x.z),b6=new A.fl(b5),b7=C.U(x.S,x.q),b8=C.a([],x.E),b9=c0.c
b9===$&&C.c()
w=b9.a==="bathroom"
v=w?28:0
b6.b=9199
b6.hr(B.hcF,B.heO,B.bfI,4)
b6.hr(B.hak,B.hdo,B.XS,4)
b6.hr(new A.q(v+19.8+0.6,24,16),B.h7K,B.vI,2)
b7.n(0,9199,B.ecq)
b6.b=9198
b6.aZ(new A.q(v,0.6,10),B.hdJ,B.jr,0.1)
b6.aZ(new A.q(v,29.4,18.6),B.h7p,B.jr,0.1)
b6.aZ(new A.q(v-19.4,13.6,10.5),B.hez,B.jr,0.1)
for(u=[B.eZx,B.eZt,B.eYq,B.eYn],t=0;t<4;++t){s=u[t].a
b6.aZ(new A.q(v+s[0],33,s[1]),new A.q(s[2],2.4,s[3]),B.bsu,0.6)}b6.Ti(new A.q(v,27,8),new A.q(v,34.3,8),10.5,B.YY,!1,!0,0.7,24)
b6.dR(new A.q(v,27,8),new A.q(v,27.2,8),10.5,B.ag8,0.5,24)
if(w){b6.aZ(new A.q(v,46,0.6),B.h7x,D.bO,0.3)
b6.aZ(new A.q(v,46,1.1),B.h6y,B.i0,0.9)}b6.dN(new A.q(v,27.1,8),new A.q(v,27.3,8),1.4,B.hs,12)
b6.Ti(new A.q(v+15,23.6,8),new A.q(v+19.4,23.6,8),0.92,B.pX,!1,!0,0.3,12)
b7.n(0,9198,B.ecQ)
b6.b=9400
b6.dR(new A.q(-56,18,0),new A.q(-56,18,6),1.5,B.xJ,0.8,12)
u=c0.r?B.o0:D.bm
b6.dR(new A.q(-57,18,6),new A.q(-55,18,6.5),4,u,0.5,14)
b6.dR(new A.q(-56,16,0),new A.q(-56,20,0),1,B.LO,0.7,10)
u=c0.r?"The water is ON. Turn it OFF with your hand before you cut into any pipe, and turn it ON to test your work.":"The water is OFF. Turn it ON to test your work."
b7.n(0,9400,new A.cX("Main water valve",u,new A.q(-56,18,4),22))
u=c0.r
s=u?"MAIN WATER: ON":"MAIN WATER: OFF"
u=u?D.dF:D.bm
b8.push(new A.hh(new A.q(-56,24,6),s,u,0))
r=new A.fA5(b6)
u=v-8
r.$1(u)
s=v+8
r.$1(s)
if(w)r.$1(-40)
q=new A.q(v,21,8)
p=new A.fA3(q)
o=new A.fzY(b6,c0)
n=new A.fzZ(b6,c0)
m=new A.fA4(c0,b7,c2,c1,b8)
l=b9.c
for(k=l.length,j=c0.x,i=c0.e,h=c0.f,g=x.o,t=0;t<k;++t){f=l[t]
e=f.a
d=i.t(0,e)
if(d){a0=c0.vn(0,e)
a1=h.h(0,e)
if(a1==null)a1=0
a2=a0.r-a1>0}else a2=!1
a3=D.d.cu(l,f)
a4=9100+a3
j.t(0,e)
switch(e){case"flange":a5=new A.q(-30,0.3,14)
if(d){b6.b=a4
b6.dR(a5,new A.q(-30,0.8999999999999999,14),5.5,B.pX,0.4,18)
b6.zt(new A.q(-30,0.8,14),new A.q(-30,1.2,14),5.5,3.2,B.xJ,0.8,18)}else n.$3(e,new A.q(-30,0.8,14),B.h_K)
m.$3(f,a5,"Flange spot")
break
case"wax":a5=new A.q(-30,1.2,14)
if(d){b6.b=a4
b6.zt(a5,new A.q(-30,2.3,14),4.2,2.4,B.bsx,0.2,18)}else n.$3(e,new A.q(-30,1.7,14),B.hax)
m.$3(f,a5,"Wax ring spot")
break
case"toilet":if(d){b6.b=a4
b6.BE(new A.q(-30,0.5,14),new A.q(-30,16,14),8.5,B.Bc,6,0.8,20)
b6.dR(new A.q(-30,16,14),new A.q(-30,17,14),9.5,B.ME,0.8,20)
b6.aZ(new A.q(-30,22,4.5),B.aW8,B.Bc,0.8)
b6.aZ(new A.q(-30,29.2,4.5),B.h5G,B.ME,0.8)}else{b6.b=a4
b6.d=0.32
b6.dN(new A.q(-30,0.5,14),new A.q(-30,17,14),8.5,D.b4,16)
b6.aP(new A.q(-30,22,4.5),B.aW8,D.b4)
b6.d=1}m.$3(f,new A.q(-30,12,12),"Toilet spot")
break
case"bolts":if(d){for(e=9200+a3*2,a6=0;a6<2;++a6){a7=B.aAB[a6]
b6.b=e+(a7<0?0:1)
a0=-30+a7
b6.dR(new A.q(a0,0.5,17),new A.q(a0,3.6,17),0.45,B.Fl,0.8,8)
a1=a2?D.cQ:B.Fl
b6.dR(new A.q(a0,3.4,17),new A.q(a0,4.6,17),1.2,a1,0.8,6)}e=a2?"The nuts are loose. Tighten them with the wrench, a little at a time so the porcelain does not crack.":"The toilet is bolted down."
b7.n(0,a4,new A.cX(f.c,e,new A.q(-30,3,17),20))}else for(a6=0;a6<2;++a6){a7=B.aAB[a6]
b6.b=a4
b6.d=0.4
e=-30+a7
b6.dN(new A.q(e,0.5,17),new A.q(e,4.6,17),1.2,D.b4,8)
b6.d=1}m.$3(f,new A.q(-30,3,17),"Bolts")
break
case"tvalve":A.h8j(b6,a4,new A.q(-40,8,1.6),d,B.o0,new A.fzU(n,f,-30))
m.$3(f,new A.q(-40,8,2),"Valve")
break
case"those":if(d){b6.b=a4
b6.jk(A.ai8(C.a([new A.q(-40,10,1.6),new A.q(-42,14,3.5),new A.q(-36,17,3.6),new A.q(-32,21,2.5)],g),6),0.55,B.My,!1,0.7,8)
b6.jk(C.a([new A.q(-36.8,15.5,3.6),new A.q(-35,16.4,3.6)],g),0.62,B.o0,!1,0.4,8)
if(a2)b6.dN(new A.q(-40,10,1.6),new A.q(-40,11.2,1.6),0.9,D.cQ,8)}else o.$3$r(e,A.ai8(C.a([new A.q(-40,10,1.6),new A.q(-42,14,3.5),new A.q(-36,17,3.6),new A.q(-32,21,2.5)],g),6),0.9)
m.$3(f,new A.q(-36,15,3),"Toilet hose")
break
case"faucet":if(d){b6.b=a4
b6.dR(new A.q(v,34.2,8),new A.q(v,34.6,8),3.6,B.jI,0.9,20)
b6.jk(A.H7(C.a([new A.q(v,34.6,8),new A.q(v,40,8),new A.q(v,43,10),new A.q(v,43,14),new A.q(v,41.2,14.6)],g),1.4,6),0.5,B.jI,!0,0.9,10)
for(a6=0;a6<2;++a6){a7=E.a54[a6]
e=v+a7
b6.dR(new A.q(e,34.6,8),new A.q(e,36.6,8),0.5,B.jI,0.9,8)
a0=a7<0?B.tM:B.o0
b6.dR(new A.q(e,36.6,8),new A.q(e,37.6,8),0.8,a0,0.6,10)}for(a6=0;a6<2;++a6){e=v+B.dm0[a6]
b6.dR(new A.q(e,34,8),new A.q(e,28.4,8),0.45,B.jI,0.9,8)}}else n.$3(e,new A.q(v,38,9),B.h_A)
m.$3(f,new A.q(v,38,8),"Faucet spot")
break
case"vhot":A.h8j(b6,a4,new A.q(u,8,1.6),d,B.tM,new A.fzV(n,f,v))
m.$3(f,new A.q(u,8,2),"Hot valve")
break
case"vcold":A.h8j(b6,a4,new A.q(s,8,1.6),d,B.o0,new A.fzW(n,f,v))
m.$3(f,new A.q(s,8,2),"Cold valve")
break
case"hhot":case"hcold":a8=e==="hhot"
a9=a8?-1:1
a0=v+a9*3
b0=A.ai8(C.a([new A.q(v+a9*8,10.5,1.8),new A.q(v+a9*9,16,3.5),new A.q(v+a9*6,22,4.2),new A.q(a0,27.5,6),new A.q(a0,28.6,8)],g),6)
if(d){b6.b=a4
b6.jk(b0,0.5,B.My,!1,0.7,8)
b1=b0.length/2|0
e=C.a([b0[b1-1],b0[b1],b0[b1+1]],g)
b6.jk(e,0.58,a8?B.tM:B.o0,!1,0.4,8)
if(a2){e=D.d.gI(b0)
a0=D.d.gI(b0)
b6.dN(e,new A.q(a0.a+0,a0.b+1.4,a0.c+0),0.9,D.cQ,8)
a0=D.d.gak(b0)
b6.dN(new A.q(a0.a,a0.b-1.4,a0.c),D.d.gak(b0),0.9,D.cQ,8)}}else o.$3$r(e,b0,0.9)
e=b0[b0.length/2|0]
m.$3(f,e,a8?"Hot hose":"Cold hose")
break
case"tail":case"trap":case"arm":a0=e==="tail"
if(a0)a1=B.a4m
else a1=e==="trap"?A.fQU():B.a5j
b2=p.$1(a1)
if(d){b6.b=a4
a1=a0?B.jI:B.pX
b6.a7b(b2,0.66,a1,!1,!0,!0,a0?0.85:0.3,12)}else o.$3$r(e,b2,0.78)
a1=J.a6(b2)
a1=a1.h(b2,a1.gL(b2)/2|0)
if(a0)e="Tailpiece"
else e=e==="trap"?"P-trap":"Trap arm"
m.$3(f,a1,e)
break}}b3=new A.fA1(l,c0,b6,b7)
b3.$4("trap",q.a9(0,B.aaT),B.ea,0)
b3.$4("arm",q.a9(0,B.aaV),B.hI,1)
for(u=C.en(j,j.r,C.a7(j).c),s=u.$ti.c;u.C();){k=u.d
if(k==null)k=s.a(k)
b4=D.d.fY(b9.c,new A.fzX(k))
k=A.hyc(c0,k)
b8.push(new A.hh(new A.q(k.a+0,k.b+6,k.c+4),"\ud83d\udca7 LEAK: "+b4.c,D.bz,0))}return new A.tT(b5,b7,b8,B.wC,null,0)},
h8j(d,e,f,g,h,i){if(!g){i.$0()
return}d.b=e
d.dR(f.a9(0,B.haz),f.a9(0,B.aXc),0.9,B.xJ,0.8,12)
d.dR(f.a9(0,B.aXc),f.a9(0,B.h7h),0.45,B.xJ,0.8,10)
d.dR(f.a9(0,B.hdF),f.a9(0,B.aXw),0.3,B.aeJ,0.7,8)
d.dR(f.a9(0,B.aXw),f.a9(0,B.heb),1.2,h,0.5,12)},
hyc(d,e){var w,v=d.c
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
ijd(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=C.a([],x.z),f=new A.fl(g),e=d.x
if(e.a===0)return g
for(e=C.en(e,e.r,C.a7(e).c),w=a0*2,v=e.$ti.c,u=d.e;e.C();){t=e.d
if(t==null)t=v.a(t)
s=A.hyc(d,t)
r=d.c
r===$&&C.c()
q=D.d.fY(r.c,new A.fQJ(t)).b==="valve"||!u.t(0,t)
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
f.fV(new A.q(t+m*l*n,r+(l*k-l*l*j),p+(1.5+l*i)),h,B.Z9,3,6,0.5);++o}f.d=0.55
f.dR(new A.q(t,0.3,11),new A.q(t,0.5,11),7+2*Math.sin(w),B.Z9,0.6,18)
f.d=1}return g},
nu:function nu(d,e,f,g,h,i,j){var _=this
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
fA5:function fA5(d){this.a=d},
fA3:function fA3(d){this.a=d},
fzY:function fzY(d,e){this.a=d
this.b=e},
fA0:function fA0(d){this.a=d},
fzZ:function fzZ(d,e){this.a=d
this.b=e},
fA_:function fA_(d){this.a=d},
fA4:function fA4(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fzU:function fzU(d,e,f){this.a=d
this.b=e
this.c=f},
fzV:function fzV(d,e,f){this.a=d
this.b=e
this.c=f},
fzW:function fzW(d,e,f){this.a=d
this.b=e
this.c=f},
fA1:function fA1(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fA2:function fA2(d){this.a=d},
fzX:function fzX(d){this.a=d},
fQJ:function fQJ(d){this.a=d},
Wf:function Wf(d,e){this.d=d
this.a=e},
aFb:function aFb(d,e){var _=this
_.e=_.d=$
_.f=d
_.r=$
_.w=e
_.x=""
_.y=0
_.z=null
_.as=_.Q=!1
_.c=_.a=_.at=null},
eqP:function eqP(d,e,f){this.a=d
this.b=e
this.c=f},
eqQ:function eqQ(d){this.a=d},
eqO:function eqO(d){this.a=d},
eqI:function eqI(d){this.a=d},
eqU:function eqU(d){this.a=d},
eqx:function eqx(d,e){this.a=d
this.b=e},
eqy:function eqy(d,e){this.a=d
this.b=e},
eqz:function eqz(d){this.a=d},
eqE:function eqE(d){this.a=d},
eqC:function eqC(d){this.a=d},
eqD:function eqD(d,e){this.a=d
this.b=e},
eqN:function eqN(d){this.a=d},
eqV:function eqV(d){this.a=d},
eqF:function eqF(d){this.a=d},
eqG:function eqG(){},
eqH:function eqH(d){this.a=d},
eqR:function eqR(d,e){this.a=d
this.b=e},
eqS:function eqS(d){this.a=d},
eqT:function eqT(d,e){this.a=d
this.b=e},
eqB:function eqB(d,e,f){this.a=d
this.b=e
this.c=f},
eqA:function eqA(d,e,f){this.a=d
this.b=e
this.c=f},
eqW:function eqW(d){this.a=d},
er_:function er_(d,e){this.a=d
this.b=e},
eqY:function eqY(){},
eqX:function eqX(d){this.a=d},
eqZ:function eqZ(d,e){this.a=d
this.b=e},
eqM:function eqM(d){this.a=d},
eqK:function eqK(d,e){this.a=d
this.b=e},
eqJ:function eqJ(d,e){this.a=d
this.b=e},
eqL:function eqL(d,e){this.a=d
this.b=e},
k_(d){return D.d.fY(B.uF,new A.fZ5(d))},
csF(d,e,f,g,h){var w=x.S,v=x.N
v=new A.XK(g,f,C.U(w,v),C.aX(w),C.aX(w),C.U(w,x.cH),C.a([new A.XW(),new A.XW()],x.gD),C.U(w,x.cD),C.aX(w),C.U(w,v),C.aX(w),C.a([],x.s),C.U(w,v))
v.clL(d,e,h)
return v},
csG(d){var w
A:{if("tv"===d){w="The TV"
break A}if("lamp"===d){w="The lamp"
break A}if("toaster"===d){w="The toaster"
break A}w="The hair dryer"
break A}return w},
h4q(d,e){var w=!0
if(d!==e)if(!(D.d.t(B.lM,d)&&D.d.t(B.lM,e)))if(!(D.d.t(B.jV,d)&&D.d.t(B.jV,e)))if(d==="light"||d==="fan")w=e==="light"||e==="fan"
else w=!1
return w},
z7:function z7(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fZ5:function fZ5(d){this.a=d},
oy:function oy(d,e,f){this.a=d
this.b=e
this.c=f},
XW:function XW(){var _=this
_.a=!1
_.b=0
_.c=!0
_.d=!1},
aw2:function aw2(d,e){var _=this
_.a=!1
_.b=d
_.c=e
_.e=_.d=!1},
aUP:function aUP(d,e){this.a=d
this.b=e
this.c=!1},
eD:function eD(d,e,f,g){var _=this
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
cig(d,e,f){return new A.Oj(!1,e,f,!1,null)},
j_:function j_(d,e,f){this.a=d
this.b=e
this.c=f},
Oj:function Oj(d,e,f,g,h){var _=this
_.c=d
_.e=e
_.f=f
_.r=g
_.a=h},
aFi:function aFi(d,e,f){var _=this
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
evt:function evt(d,e,f){this.a=d
this.b=e
this.c=f},
evu:function evu(d){this.a=d},
evs:function evs(d){this.a=d},
euv:function euv(d){this.a=d},
euw:function euw(d){this.a=d},
euu:function euu(d){this.a=d},
eux:function eux(d){this.a=d},
euy:function euy(d){this.a=d},
eut:function eut(d){this.a=d},
euz:function euz(d){this.a=d},
euA:function euA(d){this.a=d},
euK:function euK(d){this.a=d},
euM:function euM(d){this.a=d},
euB:function euB(){},
euC:function euC(d){this.a=d},
euD:function euD(d){this.a=d},
ev2:function ev2(d,e){this.a=d
this.b=e},
euL:function euL(d){this.a=d},
evp:function evp(d){this.a=d},
evq:function evq(d){this.a=d},
evr:function evr(d,e){this.a=d
this.b=e},
evn:function evn(d){this.a=d},
evo:function evo(d,e){this.a=d
this.b=e},
evm:function evm(d){this.a=d},
eve:function eve(d){this.a=d},
evf:function evf(d){this.a=d},
evg:function evg(d){this.a=d},
evh:function evh(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
evi:function evi(d){this.a=d},
evj:function evj(d,e,f){this.a=d
this.b=e
this.c=f},
evk:function evk(d){this.a=d},
evl:function evl(d,e,f){this.a=d
this.b=e
this.c=f},
evv:function evv(d,e){this.a=d
this.b=e},
euJ:function euJ(d){this.a=d},
euH:function euH(d){this.a=d},
euI:function euI(d,e){this.a=d
this.b=e},
euG:function euG(d){this.a=d},
euE:function euE(d){this.a=d},
euF:function euF(d,e){this.a=d
this.b=e},
euN:function euN(d,e){this.a=d
this.b=e},
ev0:function ev0(){},
ev1:function ev1(){},
euO:function euO(d){this.a=d},
euP:function euP(d){this.a=d},
euQ:function euQ(d){this.a=d},
euT:function euT(){},
euU:function euU(){},
euV:function euV(){},
euW:function euW(){},
euX:function euX(){},
euY:function euY(d){this.a=d},
euZ:function euZ(){},
ev_:function ev_(d){this.a=d},
euR:function euR(d){this.a=d},
euS:function euS(){},
evO:function evO(d,e){this.a=d
this.b=e},
evQ:function evQ(d){this.a=d},
evA:function evA(d){this.a=d},
evP:function evP(d){this.a=d},
evD:function evD(d){this.a=d},
evE:function evE(d,e){this.a=d
this.b=e},
evC:function evC(d,e){this.a=d
this.b=e},
evF:function evF(d,e){this.a=d
this.b=e},
evB:function evB(d,e){this.a=d
this.b=e},
evR:function evR(d,e){this.a=d
this.b=e},
evz:function evz(d,e){this.a=d
this.b=e},
evS:function evS(d){this.a=d},
evy:function evy(d){this.a=d},
evT:function evT(d,e){this.a=d
this.b=e},
evx:function evx(d,e){this.a=d
this.b=e},
evU:function evU(d){this.a=d},
evV:function evV(d){this.a=d},
evW:function evW(d,e,f){this.a=d
this.b=e
this.c=f},
evw:function evw(d,e,f){this.a=d
this.b=e
this.c=f},
evG:function evG(d){this.a=d},
evH:function evH(d,e){this.a=d
this.b=e},
evI:function evI(d){this.a=d},
evJ:function evJ(d){this.a=d},
evK:function evK(d){this.a=d},
evL:function evL(d){this.a=d},
evM:function evM(d){this.a=d},
evN:function evN(d,e){this.a=d
this.b=e},
evd:function evd(d,e){this.a=d
this.b=e},
evc:function evc(d,e){this.a=d
this.b=e},
ev6:function ev6(d,e){this.a=d
this.b=e},
ev4:function ev4(){},
ev5:function ev5(){},
ev7:function ev7(d,e){this.a=d
this.b=e},
ev3:function ev3(){},
ev8:function ev8(d){this.a=d},
ev9:function ev9(d,e,f){this.a=d
this.b=e
this.c=f},
eva:function eva(d,e){this.a=d
this.b=e},
evb:function evb(d,e){this.a=d
this.b=e},
ai7(d,e){var w=d.d,v=e.a,u=e.c,t=e.b,s=w.a,r=w.b
w=w.c
return d.c?new A.q(s+v,r-u,w+t):new A.q(s+v,r+t,w+u)},
h7z(d,e,f,g){var w,v,u,t,s,r=d.a,q=e.d,p=e.c?A.nC(r,1.5707963267948966,0,q):A.nC(r,0,0,q)
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
q.n(0,s,new A.cX(t.a,t.b,A.ai7(e,t.c),t.d))}return new C.z(r,q)},
i3M(a3,a4,a5,a6,a7,a8,a9,b0,b1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=x.i,a2=C.eE([a4,a5],a1)
for(w=b1.length,v=0;v<b1.length;b1.length===w||(0,C.L)(b1),++v){u=b1[v].a
a2.M(0,D.k.E(u[0],a4,a5))
a2.M(0,D.k.E(u[1],a4,a5))}t=C.C(a2,a2.$ti.k("cs.E"))
D.d.ff(t)
for(w=C.T(b1).k("Z<1>"),u=w.k("M.E"),s=0;r=s+1,r<t.length;s=r){q=t[s]
p=t[r]
o=p-q
if(o<0.01)continue
n=(q+p)/2
m=C.C(new C.Z(b1,new A.fsr(n),w),u)
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
if(D.d.b3(m,new A.fss(d)))continue
a0=!k||j>60?2:1
a3.hr(new A.q(n,d,a8),new A.q(o,j,a9),b0,a0)}}},
wU(d1,d2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1=null,c2=x.z,c3=C.a([],c2),c4=new A.fl(c3),c5=C.a([],x.a),c6=x.E,c7=C.a([],c6),c8=x.S,c9=C.U(c8,x.q),d0=$.dS=$.dS+1
c4.f=-1
c4.b=8001
c4.nc(B.h4O,B.h8b,B.Bv,0.15,4)
c4.f=0
c4.hr(B.h4j,B.aWG,B.aeF,3)
c4.aZ(B.hcX,B.hel,B.i0,0.5)
c4.aP(B.aWM,B.h42,B.Bh)
c4.aP(B.aWM,B.heC,B.Bh)
c4.hr(B.h8f,B.aWG,B.aeF,3)
c4.aZ(B.h4b,B.h8g,B.vE,0.15)
c4.aZ(B.h8Y,B.h8n,B.F1,0.8)
c4.b=0
c4.f=3
c4.d=d1.gwI()?0.42:0.1
c4.hr(B.h2m,B.har,d1.gwI()?B.kD:B.bbG,3)
c4.d=1
c4.f=2
c4.b=8001
if(!d1.gwI())for(w=0;w<10;++w)c4.aDS(new A.q(-72+w*16,51.3,55),B.hb1,B.jr,!1,0.05)
else{c4.x=d0
c4.aZ(B.h9r,B.h6J,D.c,0.2)
c4.aZ(B.hfv,B.aWZ,D.c,0.2)
c4.aZ(B.h5L,B.aWZ,D.c,0.2)}if(d1.gwI()){c4.x=d0
c4.aZ(B.h5U,B.h6P,B.kD,0.2)}c4.x=0
c4.b=8001
c4.r=!0
c4.hr(B.he8,B.heW,B.agq,2)
c4.aZ(B.hd6,B.h3L,B.Ym,0.1)
c4.aZ(B.hd5,B.h3M,B.M1,0.1)
c4.aZ(B.hcE,B.aWx,B.M1,0.1)
c4.aZ(B.h1y,B.aWx,B.M1,0.1)
c4.r=!1
c9.n(0,8001,B.ec8)
c4.x=d0
c4.b=8002
c4.nc(B.hfe,B.aWB,B.jr,0.05,3)
c4.nc(B.h2Q,B.aWB,B.jr,0.05,3)
c9.n(0,8002,B.ecA)
for(v=d1.y,w=0;u=$.Hf(),w<u.length;++w){t=1000+w
c4.b=t
c4.cIy(new A.q(u[w],0,-2.25),B.haJ,B.jr,!1,0.05,2)
s=v.t(0,w)?"This one has a hole for the cable.":"Tap it with the drill to put a hole through it."
c9.n(0,t,new A.cX("Wall stud","A 2x4 stud, one of the vertical posts in the wall. They stand 16 inches apart. "+s,new A.q(u[w],20,-2),60))
if(v.t(0,w)){c4.b=0
c4.e=0.6
c4.aP(new A.q(u[w],40,-2.25),B.h4h,B.ahB)
c4.e=0}}c4.b=8000
c4.aZ(B.h1I,B.h01,B.XC,0.5)
c4.e=0.4
c4.aP(B.h7X,B.hdH,B.Fb)
for(r=0;r<6;++r)for(v=19.5-r*3.6,q=0;q<2;++q)c4.aZ(new A.q(61.6+q*4.8,v,0.5),B.fY5,B.Zb,0.3)
p=d1.ax&&!d1.ay
v=p?0.6:0
if(d1.ay)u=D.cd
else u=p?D.bz:D.hi
c4.aZ(new A.q(64,-2.5+v,0.9),B.h6E,u,0.4)
c4.e=0
if(d1.ay)v="The main breaker has TRIPPED (orange). Tap it to flip it fully OFF, fix the problem, then turn it ON."
else v=d1.ax?"The power is ON. Tap to turn it OFF. Always turn it OFF before you touch any wire.":"The power is OFF. Tap to turn it ON."
c9.n(0,8000,new A.cX("Breaker panel",v,B.h3Q,60))
c4.b=8003
for(v=d1.z,u=C.en(v,v.r,C.a7(v).c),t=x.o,s=u.$ti.c;u.C();){o=u.d
n=A.k_(o==null?s.a(o):o)
o=n.d
m=o.a-0.35
l=C.a([B.hbP,B.h9n,new A.q(m,40,-3.2)],t)
if(n.c)D.d.v(l,C.a([new A.q(m,51.4,-3.2),new A.q(m,51.4,o.c+11)],t))
else l.push(new A.q(m,o.b+11,-3.4))
c4.jk(A.H7(l,3,6),0.2,B.Yt,!1,0.35,6)}c9.n(0,8003,B.ecY)
for(u=x.eV,s=d1.Q,k=0;k<3;++k){j=B.ow[k]
i=s.h(0,j)
if(i==null||!i.a)continue
if(i.e)h=B.bpR
else h=i.d?B.brn:B.bqJ
o=C.a([],u)
for(m=i.b,l=C.a7(m),g=new C.mp(m,m.r,l.k("mp<1>")),g.c=m.e,l=l.c;g.C();){m=g.d
if(m==null)m=l.a(m)
o.push(new C.cy([A.k_(m).d.a-1.15,A.k_(m).d.a+1.15,A.k_(m).d.b-2,A.k_(m).d.b+2]))}m=6100+k
c4.b=m
A.i3M(c4,j,j+48,-47,47,-0.25,0.5,h,o)
o=i.e?"Painted and finished.":"A 4 by 8 foot sheet of drywall (gypsum between two layers of paper). It is screwed to the studs."
c9.n(0,m,new A.cX("Drywall sheet",o,new A.q(j+24,0,0),90))
c4.b=0
c4.e=0.3
for(o=i.c,m=C.a7(o),l=new C.mp(o,o.r,m.k("mp<1>")),l.c=o.e,m=m.c;l.C();){o=l.d
if(o==null)o=m.a(o)
f=D.o.ao(o,10)
e=D.o.F(o,10)
c4.fV(new A.q($.Hf()[f],-40+e*16,0.1),0.34,B.Fb,3,5,0.3)}c4.e=0}for(u=d2.a,o=u!=="tape",m=d1.as,l=u!=="mud",g=u==="sand",w=0;w<2;w=a1){d=-24+48*w
a0=s.h(0,B.ow[w])
a0=a0==null?c1:a0.a
a1=w+1
a2=s.h(0,B.ow[a1])
a2=a2==null?c1:a2.a
if(a0!==!0||a2!==!0)continue
a3=m[w]
a0=6200+w
c4.b=a0
if(a3.a&&!a3.d){a2=a3.b
if(a2===0)h=B.bpU
else h=a3.c?B.blM:B.bgK
c4.e=0.5
c4.aP(new A.q(d,0,0.08+0.02*a2),new A.q(2.2+a2*1.4,94,0.12),h)
c4.e=0}else if(!o||!l||g){c4.d=0.45
c4.e=0.6
c4.aP(new A.q(d,0,0.12),B.h71,D.b4)
c4.e=0
c4.d=1}if(a3.d)a2="Smooth and ready for paint."
else if(!a3.a)a2="The joint between two sheets. It needs tape and three coats of joint compound."
else{a2=a3.b
a4=a2===1?"":"s"
a4="Taped, with "+a2+" coat"+a4+" of mud."
a2=a4}c9.n(0,a0,new A.cX("Seam",a2,new A.q(d,0,0),70))}for(o=d2.b,m=d1.x,l=d1.at,g=x.N,a5=0;a5<7;++a5){n=B.uF[a5]
a0=n.a
a6=m.aj(0,a0)
a7=l.h(0,a0)
a8=o===a0&&a7!=null
if(!a6)continue
a2=n.c
if(a2)a9=n.e==="fan"?"fan":"light"
else{a4=a7==null?c1:a7.a
a9=a4==null?"outlet":a4}if(a8){b0=A.t5(a7.a)
a0=a7.b
b1=A.h8q(b0,a0,!1)
b2=A.h7z(b1,n,new A.fA9(n),d0)
D.d.v(c3,b2.a)
c9.v(0,b2.b)
if(a0.f&&a0.c===0){a0=C.a([],c6)
for(a2=b1.c,a4=a2.length,b3=0;b3<a2.length;a2.length===a4||(0,C.L)(a2),++b3){b4=a2[b3]
a0.push(new A.hh(A.ai7(n,b4.a),b4.b,b4.c,0))}D.d.v(c7,a0)}}else if(a7!=null&&a7.b.c>=2){a4=a7.a
b5=a7.b
b6=b5.w
b7=C.a([],c2)
b8=new A.fl(b7)
b9=new A.CA(C.U(c8,g))
b9.c=2
b9.w=b6
if(a4==="light"||a4==="fan")A.hqA(b8,a4,b9)
else{A.hqd(b8,A.h93(a4),-0.25,b6,!0,!1)
A.hsE(b8,b6)}D.d.v(c3,A.h7z(new A.tT(b7,B.Sf,B.zs,B.wC,c1,0),n,new A.fAa(n),d0).a)
if(!a2){c4.f=3
c4.b=3000+a0
c4.e=0.4
c4.d=0.55
a2=n.d
b5=b5.w?D.ax:D.b8
c4.aP(new A.q(a2.a,a2.b,a2.c+0.2),B.h75,b5)
c4.d=1
c4.f=2
c4.e=0}c9.n(0,3000+a0,new A.cX(A.i_s(a4),A.i_r(d1,a0),A.ai7(n,B.aaH),22))}else{a4=C.a([],c2)
b5=A.h93(a9)===a9?a9:"outlet"
A.hpy(new A.fl(a4),b5,!1)
D.d.v(c3,A.h7z(new A.tT(a4,B.dzu,B.zs,B.wC,c1,0),n,new A.fAb(n),d0).a)
a2=a2?"Ceiling box":"Electrical box"
a4=v.t(0,a0)?"The box is mounted and the cable is in. A device can be wired here.":"The box is mounted. Pull the cable to it."
c9.n(0,2000+a0,new A.cX(a2,a4,A.ai7(n,B.aaH),24))}}c4.x=0
c0=new A.fAe(c4)
if(u==="wall"||u==="ceiling"||u==="fanbox")for(a5=0;a5<7;++a5){n=B.uF[a5]
c2=n.a
if(m.aj(0,c2))continue
c6=n.c
c8=n.d
s=c8.a
o=c8.b
a0=c6?new A.q(s,o-1,c8.c):new A.q(s,o,1.5)
a2=c6?B.h4q:B.h6s
c0.$4$round(2000+c2,a0,a2,c6)
c2=c6?new A.q(s,o-8,c8.c):new A.q(s,o+7,3)
c7.push(new A.hh(c2,n.b,D.eQ,0))}else if(u==="cable")for(a5=0;a5<7;++a5){n=B.uF[a5]
c2=n.a
if(!m.aj(0,c2)||v.t(0,c2))continue
c6=n.c
c8=n.d
s=c8.a
o=c8.b
c8=c6?new A.q(s,o-1,c8.c):new A.q(s,o,1.5)
s=c6?B.aWE:B.h4Q
c0.$5$col$round(2000+c2,c8,s,D.bu,c6)}else if(u==="knife")for(a5=0;a5<7;++a5){n=B.uF[a5]
if(n.c||!m.aj(0,n.a))continue
c2=n.d
c6=c2.a
i=d1.aqe(c6)
if(i==null||i.b.t(0,n.a))continue
c0.$4$col(2000+n.a,new A.q(c6,c2.b,0.5),B.h6B,D.cQ)}else if(u==="sheet")for(w=0;w<5;){j=B.a5f[w]
c0.$3(6000+w,new A.q(j,0,0.3),B.haN);++w
c7.push(new A.hh(new A.q(j,50,1),"edge "+w,D.eQ,0))}else if(u==="screw")for(a5=0;a5<3;++a5){j=B.ow[a5]
i=s.h(0,j)
if(i==null||!i.a)continue
for(c2=d1.aqz(j),c6=c2.length,c8=i.c,o=j+48,b3=0;b3<c2.length;c2.length===c6||(0,C.L)(c2),++b3){f=c2[b3]
for(a0=f*10,a2=7000+a0,r=0;r<6;++r){if(c8.t(0,a0+r))continue
c0.$3(a2+r,new A.q($.Hf()[f],-40+r*16,0.5),B.aWu)}a2=$.Hf()
if(f+1<a2.length&&a2[f]+16<=o)for(a0=7500+a0,r=0;r<6;r+=2)c0.$4$col(a0+r,new A.q(a2[f]+8,-40+r*16+8,0.5),B.aWu,D.dt)}}if(!C.eE(["wall","ceiling","fanbox","cable","knife","sheet","screw",""],g).t(0,u))c2=D.d.t(B.Ia,u)||C.eE(["outlet","gfci","switch","light","fan"],g).t(0,u)||D.d.t(B.lM,u)||D.d.t(B.jV,u)
else c2=!1
if(c2)for(c2=d1.CW,a5=0;a5<7;++a5){n=B.uF[a5]
if(D.d.t(B.Ia,u)){c6=n.a
a7=l.h(0,c6)
if(a7!=null&&D.d.t(B.lM,a7.a)&&a7.b.c>=2&&!c2.aj(0,c6)){c8=n.d
c0.$4$col(3000+c6,new A.q(c8.a,c8.b,1.2),B.h78,D.be)}}else{c6=n.a
if(m.aj(0,c6)&&v.t(0,c6)&&!l.aj(0,c6)){c8=n.c
s=n.d
o=s.a
g=s.b
s=c8?new A.q(o,g-1,s.c):new A.q(o,g,1.2)
o=c8?B.aWE:B.haH
c0.$4$round(2000+c6,s,o,c8)}}}c4.r=!0
for(c2=d1.CW,c6=new C.cI(c2,C.a7(c2).k("cI<1,2>")).gag(0);c6.C();){j=c6.d
c8=j.a
n=A.k_(c8)
v=n.d
d=v.a
c4.b=8200+c8
v=v.b
c4.jk(A.H7(C.a([new A.q(d,v,2.5),new A.q(d,-46,3.5),new A.q(d,-46,22)],t),4,6),0.55,B.Yx,!1,0.2,6)
c4.aZ(new A.q(d,v,1.8),B.h8V,B.bfW,0.3)
v=c4.b=8100+c8
u=j.b
switch(u){case"tv":c4.aZ(new A.q(d,-45,24),B.h39,B.agT,0.2)
c4.aZ(new A.q(d,-19,24),B.h4E,E.Fr,0.4)
if(c2.aj(0,c8))c8=d1.ax&&!d1.ay&&d1.a4J(c8)
else c8=!1
if(c8){c8=d-38.5
s=d+38.5
c5.push(new A.fP(C.a([new A.q(c8,1.5,25.7),new A.q(s,1.5,25.7),new A.q(s,-39.5,25.7),new A.q(c8,-39.5,25.7)],t),v,new A.fAc(j),320,180,9,2,0,!1))}break
case"lamp":c4.dR(new A.q(d,-47.5,24),new A.q(d,-46.5,24),6,B.Xv,0.4,14)
c4.dR(new A.q(d,-46.5,24),new A.q(d,-22,24),1,B.Bv,0.5,8)
c4.yT(new A.q(d,-26,24),new A.q(d,-12,24),9,L.YE,!1,!0,5.5,0.2,16)
break
case"toaster":c4.aZ(new A.q(d,-42.5,24),B.h0B,B.jI,0.8)
c4.aP(new A.q(d,-38,24),B.hbO,B.aia)
break
default:c4.aZ(new A.q(d,-43.5,24),B.h1f,B.agT,0.2)
c4.BE(new A.q(d-6,-38,24),new A.q(d+8,-38,24),3.4,B.Mv,3,0.6,12)
c4.wr(new A.q(d-8,-43,24),B.h0L,B.Mv,0.6,0)}c8=A.hYB(u)
s="Plugged into "+n.b
u=u==="tv"?s+". To unplug it, go behind it (the Behind the TV button) and tap the plug on the wall.":s+". Tap it to unplug."
c9.n(0,v,new A.cX(c8,u,new A.q(d,-35,20),60))}c4.r=!1
for(a5=0;a5<7;++a5){n=B.uF[a5]
c9.c3(0,2000+n.a,new A.fAd(n))}return new A.tT(c3,c9,c7,c5,c1,0)},
i_s(d){var w
A:{if("gfci"===d){w="GFCI outlet"
break A}if("switch"===d){w="Light switch"
break A}if("light"===d){w="Ceiling light"
break A}if("fan"===d){w="Ceiling fan"
break A}if("outlet"===d){w="Outlet"
break A}w=A.agR(d)
break A}return w},
hYB(d){var w
A:{if("tv"===d){w="TV"
break A}if("lamp"===d){w="Lamp"
break A}if("toaster"===d){w="Toaster"
break A}w="Hair dryer"
break A}return w},
i_r(d,e){var w,v=d.at.h(0,e)
if(v==null)return""
if(v.b.w)return"BURNT. It was wired wrong and it burnt out. Pull it out and put in a new one."
w=v.a
if(D.d.t(B.jV,w))return d.ch.t(0,e)?"The switch is ON. Tap to turn it off.":"The switch is OFF. Tap to flip it on."
if(w==="light"||w==="fan")return d.anm(e)?"It is running.":"It is off. Flip its switch (breaker on)."
w=d.CW.h(0,e)
return"Tap with a TV, lamp, toaster or hair dryer in your hand to plug it in. Plugged: "+(w==null?"nothing":w)+"."},
iju(a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=C.a([],x.z),a0=new A.fl(d)
for(w=D.d.gag(B.uF),v=new C.f5(w,new A.fR2()),u=a1.at,t=a2*7;v.C();){s=w.gS(0)
r=s.a
q=u.h(0,r)
if(q==null||q.b.c<1)continue
p=a1.anm(r)?t:0.4
a0.b=3000+r
s=s.d
r=s.a
o=s.b-6.6
s=s.c
for(n=0;n<4;++n){m=p+n*3.141592653589793/2
l=A.vD(B.h_Z,m)
a0.wr(new A.q(r+l.a,o+l.b,s+l.c),B.heI,B.bez,0.3,m)}}w=a1.d
w===$&&C.c()
w=D.d.gag(w)
v=new C.f5(w,new A.fR3())
u=a2*5
while(v.C()){s=w.gS(0).a
if(a1.anm(s)){k=A.k_(s)
a0.b=0
a0.d=0.25+0.05*Math.sin(u)
s=k.d
a0.fV(new A.q(s.a,s.b-5,s.c),11,B.XW,4,10,0)
a0.d=1}}for(w=a1.CW,v=new C.cI(w,C.a7(w).k("cI<1,2>")).gag(0),u=a2*1.6,s=a2*6;v.C();){j=v.d
r=j.a
if(w.aj(0,r))o=a1.ax&&!a1.ay&&a1.a4J(r)
else o=!1
if(!o)continue
i=A.k_(r).d.a
a0.b=8100+r
switch(j.b){case"tv":break
case"lamp":a0.b=0
a0.d=0.3+0.05*Math.sin(s)
a0.fV(new A.q(i,-19,24),11,I.xH,4,10,0)
a0.d=1
break
case"toaster":a0.e=0.8
r=C.ar(B.agn,Aa.MA,(Math.sin(s)+1)/2)
r.toString
a0.aP(new A.q(i,-38.2,24),new A.q(13,0.3,6),r)
a0.e=0
break
default:for(r=i+9,h=0;h<6;++h)a0.fV(new A.q(r+D.k.F(u+h/6,1)*22,-38+Math.sin(h*2)*2,24),0.6,B.bma,3,5,0.2)}}for(w=a1.db,w=new C.cI(w,C.a7(w).k("cI<1,2>")).gag(0),v=a1.cx;w.C();){j=w.d
u=j.a
k=A.k_(u)
g=a3.h(0,u)
f=a2<=(g==null?0:g)
e=v.t(0,u)
if(!f&&!e)continue
u=f?j.b:"smolder"
A.huu(a0,u,new A.fR4(k),1,a2)}return d},
rN:function rN(d,e,f){this.a=d
this.b=e
this.c=f},
fsr:function fsr(d){this.a=d},
fss:function fss(d){this.a=d},
fA9:function fA9(d){this.a=d},
fAa:function fAa(d){this.a=d},
fAb:function fAb(d){this.a=d},
fAe:function fAe(d){this.a=d},
fAc:function fAc(d){this.a=d},
fAd:function fAd(d){this.a=d},
fR2:function fR2(){},
fR3:function fR3(){},
fR4:function fR4(d){this.a=d},
hme(d,e){var w=new A.cw5(e,d,A.hfB())
w.bAd(4,d,e)
return w},
rl:function rl(d,e){this.a=d
this.b=e},
uD:function uD(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
Mv:function Mv(d,e){this.a=d
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
as_:function as_(d,e){this.d=d
this.a=e},
aFm:function aFm(d,e){var _=this
_.e=_.d=$
_.f=d
_.r=$
_.w=e
_.x="inspect"
_.y=0
_.z=null
_.at=_.as=_.Q=!1
_.c=_.a=_.ax=null},
exi:function exi(d,e,f){this.a=d
this.b=e
this.c=f},
exj:function exj(d){this.a=d},
exh:function exh(d){this.a=d},
ex7:function ex7(d){this.a=d},
exc:function exc(d){this.a=d},
exd:function exd(d){this.a=d},
exb:function exb(d){this.a=d},
exe:function exe(d,e){this.a=d
this.b=e},
exf:function exf(d){this.a=d},
exg:function exg(d){this.a=d},
exa:function exa(d){this.a=d},
ex9:function ex9(d,e){this.a=d
this.b=e},
ex6:function ex6(d){this.a=d},
ex4:function ex4(d){this.a=d},
ex5:function ex5(d,e){this.a=d
this.b=e},
ex8:function ex8(d){this.a=d},
exv:function exv(d,e){this.a=d
this.b=e},
exr:function exr(){},
exq:function exq(d){this.a=d},
exs:function exs(){},
ext:function ext(){},
exu:function exu(d,e){this.a=d
this.b=e},
exp:function exp(d,e){this.a=d
this.b=e},
exo:function exo(d){this.a=d},
exn:function exn(d){this.a=d},
exl:function exl(d,e){this.a=d
this.b=e},
exk:function exk(){},
exm:function exm(d,e){this.a=d
this.b=e},
atR(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u){return new A.y3(p,s,u,t,r,h,o,n,m,i,q,d,j,g,k,e,f,l)},
iiW(d){var w,v,u,t,s,r,q,p,o,n,m=d.gex(0),l=C.a([],x.T)
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
l.push(new A.i9(s-r,s+r,o-n,o+n))}switch(d.c){case"kitchen":w=-m/2
l.push(new A.i9(w,w+28,0,28))
l.push(new A.i9(10,m/2,0,28))
break
case"bathroom":l.push(B.dAx)
l.push(B.dAd)
w=-m/2
l.push(new A.i9(w,w+33,0,75))
break}return l},
bsi(d,e,f,g,h,i,j,k,l,m,n,o){var w=new A.bsh(d,i,m,o,n,l,g,f,k,j,e,h,C.a([],x.n))
w.bAt(d,e,f,g,h,i,j,k,l,m,n,o)
return w},
hqg(d,e){var w,v,u,t=d.w,s=D.d.bh(t,new A.fld(e))
if(s<0)s=0
w=t[s]
v=d.gex(0)
u=d.ghs(0)
t=w.c
switch(w.b){case"left":return new C.b7(new C.z(-v/2+18,D.k.E(t+u/2-40,10,u-10)),1.5707963267948966,s)
case"right":return new C.b7(new C.z(v/2-18,D.k.E(t+u/2-40,10,u-10)),-1.5707963267948966,s)
default:return new C.b7(new C.z(D.o.E(t,-v/2+12,v/2-12),18),0,s)}},
y3:function y3(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u){var _=this
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
tN:function tN(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
aa1:function aa1(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
csE:function csE(d,e){var _=this
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
bsh:function bsh(d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
fld:function fld(d){this.a=d},
aWu:function aWu(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=$},
bVa:function bVa(d,e){this.a=d
this.b=e},
bVb:function bVb(d){this.a=d},
hxX(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=C.a([B.dAq],x.T)
for(w=d.x,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u){t=w[u]
if(t.a===e)continue
s=t.b
if(D.d.t(B.a5c,s)||D.d.t(B.HY,s)||s==="bush")continue
r=s==="townsign"
if(r||s==="adboard"){q=r?178:150
for(s=[-q,q],p=0;p<2;++p){o=s[p]
n=t.e*3.141592653589793/2
r=Math.cos(n)
m=Math.sin(n)
r=t.c+o*r
m=t.d+-o*m
i.push(new A.i9(r-8,r+8,m-8,m+8))}continue}r=B.hC.h(0,s)
r.toString
m=(t.e&1)===1
l=m?r.d:r.c
k=m?r.c:r.d
if(s==="tree"||s==="pine"){l=10
k=10}s=t.c
r=l/2
m=t.d
j=k/2
i.push(new A.i9(s-r,s+r,m-j,m+j))}return i},
hnr(d,e,f){var w=new A.b9O(d,-d.gex(0)/2+10,d.gex(0)/2-10,-760,d.ghs(0)-10,e,f,0,B.dgU)
w.MC(0)
return w},
b9O:function b9O(d,e,f,g,h,i,j,k,l){var _=this
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
akr:function akr(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h},
aq5:function aq5(d){this.a=d},
ben:function ben(d){var _=this
_.d=0
_.e=!1
_.f=d
_.c=_.a=_.r=null},
d7s:function d7s(d){this.a=d},
d7t:function d7t(d,e){this.a=d
this.b=e},
d7r:function d7r(d,e){this.a=d
this.b=e},
d7u:function d7u(d){this.a=d},
d7q:function d7q(d){this.a=d},
d7v:function d7v(d){this.a=d},
d7p:function d7p(d){this.a=d},
d7w:function d7w(d,e){this.a=d
this.b=e},
d7o:function d7o(d,e,f){this.a=d
this.b=e
this.c=f},
d7x:function d7x(d,e){this.a=d
this.b=e},
d7y:function d7y(d){this.a=d},
d7n:function d7n(d){this.a=d},
huu(d,e,a0,a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
if(e==="none"||e.length===0)return
d.b=0
w=new A.fBR(a2,d,a0,a1)
v=new A.fBQ(d,a2,a0,a1)
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
d.jk(m,t,o,!1,0,4)}d.d=0.16+0.1*Math.sin(a2*31)
d.fV(a0.$1(B.haF),3.2*a1,D.dt,4,8,0)
d.d=1
break
case"spark":w.$2(22,7)
d.d=0.2+0.1*Math.sin(a2*26)
d.fV(a0.$1(B.aWK),2.4*a1,I.xH,4,8,0)
d.d=1
break
case"smoke":d.d=0.3+0.08*Math.sin(a2*7)
d.fV(a0.$1(B.h3D),2.6*a1,D.ax,4,8,0)
d.d=1
v.$3(9,0.8,11)
w.$2(5,3)
break
case"fire":d.d=0.3+0.12*Math.sin(a2*20)
d.fV(a0.$1(B.aWK),4.4*a1,D.cQ,4,8,0)
d.d=1
h=D.k.bf(a2*11)
for(t=0.85*a1,s=0.05*a1,r=0.5*a1,o=0.04*a1,k=0;k<6;++k){p=-2.2+k*0.88
g=Math.sin((h+k*5)*12.9898)*43758.5453
f=2.4+(g-Math.floor(g))*3.6
l=a0.$1(new A.q(p,-2.2,3))
g=Math.sin((h+k)*12.9898)*43758.5453
d.BE(l,a0.$1(new A.q(p+(g-Math.floor(g)-0.5)*1.2,-2.2+f,3.4)),t,D.fr,s,0,6)
d.BE(a0.$1(new A.q(p,-2.2,3.1)),a0.$1(new A.q(p,-2.2+f*0.62,3.5)),r,D.bu,o,0,6)}w.$2(16,6)
v.$3(10,1,13)
break
case"smolder":v.$3(4,0.9,9)
break}},
fBR:function fBR(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fBQ:function fBQ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
h4s(d){var w
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
avu(d){var w
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
huq(d,e,a0){var w,v,u,t,s=C.a([],x.fB),r=new A.fBl(s),q=new A.fBq(e),p=q.$2(B.VF,B.JV),o=q.$2(B.VF,B.JW),n=q.$2(B.VF,B.JX),m=q.$2(B.VG,B.JW),l=q.$2(B.VG,B.JV),k=q.$2(B.VG,B.JX),j=q.$2(B.VH,B.JX),i=q.$2(B.VH,B.JV),h=q.$2(B.VH,B.JW),g=new C.Z(e,new A.fBm(),C.T(e).k("Z<1>")).gL(0),f=D.d.b3(e,new A.fBn())
if(f)r.$5("UNVERIFIED",B.f2A,"A conductor is in use whose function was never verified. A wire color alone does not prove what a wire does.","Verify every conductor with a tester before you connect it.","Identify each wire with a tester and the device diagram, then connect it.")
if(D.d.b3(e,new A.fBo()))r.$5("LOOSE",B.t1,"A connection is loose. A loose connection heats up and can arc.","Every conductor must be fastened tightly under its screw or connector.","Tighten the connection.")
if(D.d.b3(e,new A.fBp()))r.$5("EXPOSED",B.t1,"Bare copper is showing outside the terminal. An exposed energized conductor can shock or short.","No conductor may be left exposed.","Trim the wire so only the part under the screw is bare.")
if(!a0)r.$5("SUPPORT",B.t1,"The box or support is not rated for this device. It can fall.","A fixture or fan must hang from a box or bracket rated for its weight.","Use a box rated for this fixture (a fan-rated box for a fan).")
if(n>0||i>0)r.$5("HOT_TO_GROUND",B.t1,"The hot wire is connected to the ground. That is a short circuit to ground: a very large current.","The equipment ground never carries current in normal use, and the hot wire never touches it.","Hot goes on the hot terminal (brass). Ground goes only on the green screw.")
f=o>0
if(!(f&&m>0))w=l>0&&p>0
else w=!0
if(w)r.$5("SHORT",B.t1,"The hot and the neutral are connected together. That is a short circuit.","Hot and neutral must never touch each other.","Put each wire on its own terminal.")
else if(f||l>0)r.$5("REVERSED",B.t1,"Hot and neutral are reversed (reversed polarity). The device may still seem to work, but the parts that should be dead are live. This is a shock hazard.","Hot goes to the brass (hot) terminal and neutral to the silver (neutral) terminal.","Swap them: black (hot) to brass, white (neutral) to silver.")
if(k>0||h>0)r.$5("NEUTRAL_GROUND",B.t1,"The neutral and the equipment ground are joined at the device. Current can flow on the ground path and trip protective devices.","The neutral is never used as the equipment ground, and the two are not joined at the device.","Neutral to the silver terminal only. Ground to the green screw only.")
if(!(i>0&&n===0))f=h>0&&k===0
else f=!0
if(f)r.$5("GROUND_AS_CURRENT",B.t1,"The equipment ground was fastened to a terminal that carries current. The ground must never be used as a normal conductor.","The equipment ground goes only to the ground terminal.","Move the bare copper (ground) wire to the green screw.")
if(g>0&&p<d.b)r.$5("LOAD_SIDE",B.aPV,"The wires are on the LOAD screws. Power must come in on LINE; on LOAD the device would not protect or feed anything.","Supply (line) conductors go to the LINE terminals.","Move the wires to the LINE screws.")
f=d.b
if(p<f&&g===0&&o===0&&l===0&&n===0)r.$5("MISSING_HOT",B.TO,"The hot wire is not on the hot terminal, so the device gets no power.","The device needs its hot connection.","Connect the black (hot) wire to the brass terminal.")
if(p>=f){f=d.c
f=m<f&&f>0&&l===0&&k===0}else f=!1
if(f)r.$5("OPEN_NEUTRAL",B.t1,"The neutral is not connected, but the hot wire is. The device will not run, and parts of it can still be live. There may be nothing to see.","The neutral return conductor must be connected.","Connect the white (neutral) wire to the silver terminal.")
if(d.d&&j===0)r.$5("MISSING_GROUND",B.t1,"There is no equipment ground. It may seem to work, but nothing protects you if a fault happens.","A required equipment ground must be connected to the ground terminal.","Connect the bare copper (ground) wire to the green screw.")
for(f=s.length,v=B.v9,u=0;u<f;++u){t=s[u].b
if(A.avu(t)>A.avu(v))v=t}return new A.b6p(v,s,A.hZZ(s,e))},
hZZ(d,e){var w=new A.fkL(d)
if(w.$1("SHORT")||w.$1("HOT_TO_GROUND"))return B.btK
if(w.$1("LOOSE"))return B.btC
if(w.$1("EXPOSED"))return B.btI
if(w.$1("GROUND_AS_CURRENT"))return B.btM
if(w.$1("REVERSED"))return B.btL
if(w.$1("NEUTRAL_GROUND"))return B.btN
if(w.$1("SUPPORT"))return B.btJ
if(w.$1("OPEN_NEUTRAL"))return B.btH
if(w.$1("LOAD_SIDE")||w.$1("MISSING_HOT"))return B.btA
if(w.$1("UNVERIFIED"))return B.btB
if(w.$1("MISSING_GROUND"))return B.btE
return B.btG},
hTY(d){var w
switch(d.a.c.a){case 0:w=d.b.c===B.JV
break
case 1:w=d.b.c===B.JW
break
case 2:w=d.b.c===B.JX
break
case 3:w=!1
break
default:w=null}return w},
hur(d,e,f){var w,v,u,t,s=C.a([],x.fB)
e.bQ(0,new A.fBs(f,s))
for(w=s.length,v=B.v9,u=0;u<w;++u){t=s[u].b
if(A.avu(t)>A.avu(v))v=t}return new A.b6p(v,s,v===B.v9?B.btF:B.btD)},
JH:function JH(d,e){this.a=d
this.b=e},
FL:function FL(d,e){this.a=d
this.b=e},
FS:function FS(d,e){this.a=d
this.b=e},
cz5:function cz5(d){this.c=d},
cCG:function cCG(d,e){this.a=d
this.c=e},
a4k:function a4k(d,e){this.a=d
this.b=e},
bMu:function bMu(d,e,f){this.b=d
this.c=e
this.d=f},
wp:function wp(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
tl:function tl(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h},
b6p:function b6p(d,e,f){this.a=d
this.b=e
this.c=f},
fBl:function fBl(d){this.a=d},
fBq:function fBq(d){this.a=d},
fBr:function fBr(d,e){this.a=d
this.b=e},
fBm:function fBm(){},
fBn:function fBn(){},
fBo:function fBo(){},
fBp:function fBp(){},
fkL:function fkL(d){this.a=d},
fkM:function fkM(d){this.a=d},
ab9:function ab9(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aba:function aba(d,e,f){this.a=d
this.b=e
this.c=f},
vg:function vg(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
b57:function b57(d,e){this.a=d
this.b=e},
b8h:function b8h(d,e,f,g){var _=this
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
PL:function PL(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fBs:function fBs(d,e){this.a=d
this.b=e},
h85(d){var w
switch(d.a){case 0:w=D.be
break
case 1:w=D.cQ
break
case 2:w=D.c7
break
case 3:w=D.bu
break
case 4:w=D.br
break
default:w=null}return w},
hbf(d){return C.bU(E.lA,null,new A.fZ2(),d,!0,!0,!0,D.k2,!1,!1,x.H)},
hyR(d,e,f,g){var w=x.S
return C.bU(E.lA,null,new A.fZ0(new A.cz7(e,f,C.U(w,w)),g),d,!0,!0,!0,D.k2,!1,!1,x.dZ)},
fZ2:function fZ2(){},
fZ0:function fZ0(d,e){this.a=d
this.b=e},
a1h:function a1h(d,e,f){this.c=d
this.d=e
this.a=f},
bv0:function bv0(d){var _=this
_.d=d
_.c=_.a=_.e=null},
faz:function faz(d,e){this.a=d
this.b=e},
fay:function fay(d,e,f){this.a=d
this.b=e
this.c=f},
faA:function faA(d){this.a=d},
fax:function fax(d,e){this.a=d
this.b=e},
faB:function faB(){},
faC:function faC(d){this.a=d},
a5g:function a5g(d,e){var _=this
_.a=d
_.b=e
_.c=!1
_.d=null},
bSH:function bSH(d){this.a=d},
bSG:function bSG(d){this.a=d}},B,K,E,An,F,O,L,Ao,A0,P,Ap
J=c[1]
C=c[0]
D=c[2]
A1=c[108]
A7=c[118]
A8=c[88]
A9=c[133]
G=c[97]
Q=c[122]
I=c[107]
Aa=c[135]
Ab=c[117]
Ac=c[132]
R=c[119]
Ad=c[95]
Ae=c[124]
Af=c[94]
M=c[92]
A2=c[85]
S=c[127]
Ag=c[114]
V=c[131]
Ah=c[130]
W=c[125]
A3=c[129]
Ai=c[123]
X=c[99]
Y=c[115]
Aj=c[105]
Ak=c[38]
H=c[109]
Al=c[134]
T=c[103]
U=c[121]
Z=c[120]
A4=c[116]
A5=c[102]
A_=c[110]
A6=c[126]
Am=c[128]
N=c[101]
A=a.updateHolder(c[26],A)
B=c[96]
K=c[28]
E=c[100]
An=c[69]
F=c[98]
O=c[33]
L=c[106]
Ao=c[111]
A0=c[113]
P=c[104]
Ap=c[112]
A.eZV.prototype={
a6(){return"_RadioType."+this.b}}
A.a9N.prototype={
R(){return new A.aeg(null,this.$ti.k("aeg<1>"))}}
A.aeg.prototype={
gcov(){var w=this.e
return w===$?this.e=new A.bpu(this):w},
gam5(){var w=this.Gc$
w=w==null?null:w.gapV()
return w==null?this.a.d:w},
gazD(){this.a.toString
return!0},
bWx(){var w=this,v=w.a.c,u=w.gam5()
if(v===u)return
w.a5j(v===w.gam5()?null:v)},
a5j(d){var w=this.Gc$
if(w!=null)w.glG().$1(d)
this.a.e.$1(d)},
d4(){var w,v=this
v.eG()
w=v.c
w.toString
v.sa6N(O.h4g(w,v.$ti.c))},
q(){this.sa6N(null)
var w=this.d
if(w!=null)w.q()
this.a1()},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.a
m.toString
switch(0){case 0:w=o.gcov()
v=w.a.gam5()
o.a.toString
u=new C.HR(!0,O.hS8(n,!1,n,o.gazD(),n,w,v,n,n,D.ko,n,n,n,n,n,!1,m.c,o.$ti.c),n)
break}C.an2(d)
o.a.toString
A:{m=new C.z(u,n)
break A}t=C.P(d)
s=O.h4h(d)
o.a.toString
w=s.b
w=w==null?n:w.aT(C.aX(x.c1))
r=w
if(r==null)r=t.ax.y
w=o.a.at
v=o.gazD()
q=o.gazD()?o.gbWw():n
p=o.d
if(p==null){p=C.k4(!0,n,!0,!0,n,n,!1)
o.d=p}return new C.zw(C.dG(!1,n,!0,n,v,p,n,n,!1,n,n,m.a,n,n,n,n,q,!1,r,n,n,n,n,n,n,w,n,m.b,n),n)}}
A.bpu.prototype={
gapV(){return this.a.gam5()},
glG(){return this.a.gLN()},
bj9(d){},
bkh(d){},
gdc(d){return this.a}}
A.aNP.prototype={}
A.q.prototype={
a9(d,e){return new A.q(this.a+e.a,this.b+e.b,this.c+e.c)},
aE(d,e){return new A.q(this.a-e.a,this.b-e.b,this.c-e.c)},
aI(d,e){return new A.q(this.a*e,this.b*e,this.c*e)},
FX(d){var w=this.b,v=d.c,u=this.c,t=d.b,s=d.a,r=this.a
return new A.q(w*v-u*t,u*s-r*v,r*t-w*s)},
guV(){var w=this.a,v=this.b,u=this.c
return Math.sqrt(w*w+v*v+u*u)},
gmU(d){var w=this,v=w.guV()
return v<1e-9?w:new A.q(w.a/v,w.b/v,w.c/v)}}
A.kp.prototype={}
A.cX.prototype={}
A.hh.prototype={}
A.tT.prototype={}
A.fP.prototype={}
A.fl.prototype={
WF(){var w=this.x
if(!(w!==0))if(this.r){w=$.dS+1
$.dS=w}else w=0
this.w=w},
aIH(d,e,f,g,h,i,j,k){var w=this,v=i.gmU(0)
w.a.push(new A.kp(C.a([d,e,f,g],x.o),v,h,w.b,j,w.d,k,w.c,w.e,w.f,w.w))},
biZ(d,e,f,g,h,i,j){return this.aIH(d,e,f,g,h,i,0,j)},
cX4(d,e,f,g,h,i,j){return this.aIH(d,e,f,g,h,i,j,!1)},
GD(d,e,f,g,h,i){return this.aIH(d,e,f,g,h,i,0,!1)},
a7a(d,e,f,g,h,i){var w=this,v=(h==null?e.aE(0,d).FX(f.aE(0,d)):h).gmU(0)
w.a.push(new A.kp(C.a([d,e,f],x.o),v,g,w.b,0,w.d,i,w.c,w.e,w.f,w.w))},
bk8(d,e,f,g){return this.a7a(d,e,f,g,null,!0)},
FK(d,e,f,g,h,i,j){var w,v,u,t,s,r,q,p,o,n,m
this.WF()
w=e.a/2
v=e.b/2
u=e.c/2
t=new A.c_X(this,i,new A.c_Y(j,d),new A.c_Z(j),f,h)
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
hr(d,e,f,g){return this.FK(d,e,f,!0,0,g,0)},
aDS(d,e,f,g,h){return this.FK(d,e,f,g,h,1,0)},
nc(d,e,f,g,h){return this.FK(d,e,f,!0,g,h,0)},
aZ(d,e,f,g){return this.FK(d,e,f,!0,g,1,0)},
aP(d,e,f){return this.FK(d,e,f,!0,0,1,0)},
wr(d,e,f,g,h){return this.FK(d,e,f,!0,g,1,h)},
cIy(d,e,f,g,h,i){return this.FK(d,e,f,g,h,i,0)},
aDR(d,e,f,g){return this.FK(d,e,f,!0,0,1,g)},
yT(b3,b4,b5,b6,b7,b8,b9,c0,c1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2=this
b2.WF()
w=b4.aE(0,b3).gmU(0)
v=w.b
u=w.FX(Math.abs(v)<0.9?B.ea:B.hI).gmU(0)
t=w.FX(u).gmU(0)
s=b9<0?b5:b9
r=new A.c0_(u,c1,t)
for(q=b2.a,p=b3.a,o=b3.b,n=b3.c,m=b4.a,l=b4.b,k=b4.c,j=x.o,i=w.a*-1,v*=-1,h=w.c*-1,g=0;g<c1;){f=r.$1(g);++g
e=r.$1(g)
d=f.a
a0=e.a
a1=f.b
a2=e.b
a3=f.c
a4=e.c
a5=new A.q(d+a0,a1+a2,a3+a4).gmU(0)
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
BE(d,e,f,g,h,i,j){return this.yT(d,e,f,g,!0,!1,h,i,j)},
Ti(d,e,f,g,h,i,j,k){return this.yT(d,e,f,g,h,i,-1,j,k)},
bdW(d,e,f,g,h,i,j){return this.yT(d,e,f,g,h,!1,-1,i,j)},
dN(d,e,f,g,h){return this.yT(d,e,f,g,!0,!1,-1,0,h)},
L8(d,e,f,g,h,i){return this.yT(d,e,f,g,h,!1,-1,0,i)},
L9(d,e,f,g,h,i){return this.yT(d,e,f,g,!0,!1,h,0,i)},
Th(d,e,f,g,h,i,j){return this.yT(d,e,f,g,h,!1,i,0,j)},
fV(a7,a8,a9,b0,b1,b2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6=this
a6.WF()
w=new A.c_W(b0,b1)
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
v.push(new A.kp(C.a([new A.q(u+i*a8,t+h*a8,s+g*a8),new A.q(u+f*a8,t+e*a8,s+d*a8),new A.q(u+a0*a8,t+a1*a8,s+a2*a8),new A.q(u+a3*a8,t+a4*a8,s+a5*a8)],r),new A.q(i+f+a0+a3,h+e+a1+a4,g+d+a2+a5).gmU(0),a9,a6.b,b2,a6.d,!1,a6.c,a6.e,a6.f,a6.w))}},
bc0(d,e,f,g){return this.fV(d,e,f,6,10,g)},
ec(d,e,f,g,h){return this.fV(d,e,f,g,h,0.4)},
a7b(d,e,f,g,h,i,j,k){var w,v,u,t,s
this.WF()
for(w=0;v=w+1,v<d.length;w=v){u=d[v]
t=d[w]
if(new A.q(u.a-t.a,u.b-t.b,u.c-t.c).guV()<0.000001)continue
u=d[w]
t=d[v]
if(g)s=w===0||w===d.length-2
else s=!1
this.Ti(u,t,e,f,s,h,j,k)}if(i)for(u=e*0.98,w=1;v=w+1,v<d.length;w=v)this.fV(d[w],u,f,4,k,j)},
jk(d,e,f,g,h,i){return this.a7b(d,e,f,!0,!1,g,h,i)},
aJv(d,e,f,g,h,i,j){return this.a7b(d,e,f,g,!1,h,i,j)},
bka(d,e,f,g,h){return this.a7b(d,e,f,!0,!1,!0,g,h)},
zt(a4,a5,a6,a7,a8,a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=this
a3.WF()
a3.bdW(a4,a5,a6,a8,!1,a9,b0)
w=a5.aE(0,a4).gmU(0)
v=w.FX(Math.abs(w.b)<0.9?B.ea:B.hI).gmU(0)
u=new A.c00(v,b0,w.FX(v).gmU(0))
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
cYz(d,e,f,g,h,i){return this.zt(d,e,f,g,h,i,16)}}
A.xg.prototype={
r8(d){var w,v,u,t=this
t.Q=d
if(!d){w=t.a
v=t.y
u=t.z
t.a=D.k.E(w,v-u,v+u)}t.aV()},
hT(d,e,f,g){var w=this
w.as=f
w.at=d
w.ax=g
w.ay=e
w.aV()},
xl(d,e){return this.hT(d,null,e,null)},
bo2(d){return this.hT(d,null,null,null)},
apR(d){return this.hT(null,null,d,null)},
apS(d,e,f){return this.hT(d,e,f,null)},
Np(d,e,f,g){var w=this
w.ay=w.ax=w.at=w.as=null
w.d=f
w.c=d
w.a=g
w.b=e
w.aV()},
a6Z(d){var w,v,u,t=this
if(!(t.as!=null||t.at!=null||t.ax!=null||t.ay!=null))return
w=1-Math.exp(-d*7)
v=t.as
if(v!=null){u=A.o5(t.d,v,w)
t.d=u
if(u.aE(0,v).guV()<0.02){v=t.as
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
cZQ(d,e){var w,v,u,t,s=this,r=e.a,q=e.b,p=Math.min(r,q)*1.15,o=Math.cos(s.a),n=Math.sin(s.a)
q=new A.bJJ(s,new A.bJK(Math.cos(s.b),Math.sin(s.b),o,n),(d.a-r/2)/p,-(d.b-q/2)/p)
w=q.$1(0)
r=q.$1(1).c
v=w.c
u=r-v
if(Math.abs(u)<1e-9)return null
t=(0-v)/u
if(t<=0)return null
return q.$1(t)},
bfg(d,e,f){var w,v,u,t,s=this,r=e.a,q=e.b,p=Math.min(r,q)*1.15,o=Math.cos(s.a),n=Math.sin(s.a)
q=new A.bJD(s,new A.bJE(Math.cos(s.b),Math.sin(s.b),o,n),(d.a-r/2)/p,-(d.b-q/2)/p)
w=q.$1(0)
r=q.$1(1).b
v=w.b
u=r-v
if(Math.abs(u)<1e-9)return null
t=(f-v)/u
if(t<=0)return null
return q.$1(t)},
cPl(d,e){return this.bfg(d,e,0)},
aps(d){var w=this
w.at=null
w.c=D.k.E(w.c*d,w.e,w.f)
w.aV()}}
A.bUW.prototype={
cWi(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this.a,f=g.length-1,e=a0.a,d=a0.b
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
A.b6s.prototype={
gGR(d){var w=this.r.a
return w==null?0:w},
civ(b1,b2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=null,a8=b2.a,a9=b2.b,b0=new C.a3(0,0,0+a8,0+a9)
$.S()
w=C.I()
w.sam(B.c3K.aA(0,b0))
b1.aO(b0,w)
v=this.c.a*90
w=b1.a
J.bl(w.save())
w.translate(a8*0.45-v,a9*0.3)
b1.ih(0,-0.45)
for(u=x.O,t=0;t<3;++t){s=C.bK(D.I,a9*(0.2-t*0.05),a8*(1.9-t*0.4))
r=[B.bgc,D.aK,D.rh][t]
q=new C.ao(D.Q,D.M,D.S,D.T,D.R)
q.sam(new C.c2(D.A,0.5,D.x,a7,0,C.a([r.j(0.3-t*0.07),r.j(0)],u),a7,a7).aA(0,s))
p=q.G()
w.drawOval(C.bG(s),p)
p.delete()}w.restore()
o=new C.e5()
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
e.sam(new C.c2(D.A,0.5,D.x,a7,0,C.a([D.aK.j(0.28),B.bn7],u),a7,a7).aA(0,C.bY(i,g)))
b1.ad(i,g,e)
J.bl(w.save())
f=new C.aF(f.r,D.ag,a7,a7,C.a([],x.g))
f.D(new C.jJ(C.bY(i,h)))
b1.mI(0,f)
f=C.I()
f.sam(B.etj.aA(0,C.bY(i,h)))
b1.ad(i,h,f)
d=C.I()
d.r=B.bgC.gp(0)
for(a0=0;a0<4;++a0){u=B.d0E[a0].a
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
for(u=h*0.16,a0=0;a0<3;++a0){q=B.cYz[a0]
q=C.bK(new C.t(l+q.a*h,j+q.b*h),u,q.c*h*2)
p=a5.G()
w.drawOval(C.bG(q),p)
p.delete()}u=i.a9(0,new C.t(h*0.45,h*0.35))
$.S()
q=C.I()
q.r=D.w.j(0.38).gp(0)
b1.ad(u,h,q)
w.restore()
a6=new C.t(a8*0.18-v*0.2,a9*0.12)
w=C.I()
w.r=B.bhU.gp(0)
b1.ad(a6,h*0.28,w)
w=h*0.05
q=a6.a9(0,new C.t(h*0.08,w))
u=C.I()
u.r=B.afO.gp(0)
b1.ad(q,h*0.07,u)
u=-h
u=a6.a9(0,new C.t(u*0.1,u*0.09))
q=C.I()
q.r=B.afO.gp(0)
b1.ad(u,w,q)},
a3(j3,j4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6,d7,d8,d9,e0,e1,e2,e3,e4,e5,e6,e7,e8,e9,f0,f1,f2,f3,f4,f5,f6,f7,f8,f9,g0,g1,g2,g3,g4,g5,g6,g7,g8,g9,h0,h1,h2,h3,h4,h5,h6,h7,h8,h9,i0,i1,i2,i3,i4,i5,i6,i7,i8,i9,j0=this,j1=null,j2={}
if(j0.z)j0.civ(j3,j4)
else{w=0+j4.a
v=0+j4.b
$.S()
u=C.I()
t=j0.y
s=C.ar(t,D.c,0.06)
s.toString
u.sam(new C.a9(D.b_,D.b5,D.x,C.a([s,t],x.O),j1,j1).aA(0,new C.a3(0,0,w,v)))
j3.aO(new C.a3(0,0,w,v),u)}r=j4.a
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
b0=Math.max(Math.max(w.c*2.4+450,a9),w.r)
b1=C.U(t,s)
b2=C.U(t,t)
b3=B.h94.gmU(0)
b4=b3.a9(0,B.tj).gmU(0)
b5=C.a([],x.bl)
u=j0.w
b6=u==null?B.I7:u.$1(j0.gGR(0))
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
c3=c2.length>1500?A.hYW(v):j1
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
g1=i.$1(new A.q(f7.a-f9,f7.b-g0,f7.c-f8).FX(new A.q(c9.a-f9,c9.b-g0,c9.c-f8)))
if(g1.a*((f2.a+f3.a+f4.a+f5.a)*0.25)+g1.b*((f2.b+f3.b+f4.b+f5.b)*0.25)+g1.c*f6>0&&!f1.x)continue
if(f6>b0)continue
if(D.d.d5(c8,new A.cty())){c9=C.a([],e)
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
b5.push(new A.G3(f1.r,f1.w,new A.ctz(j2,j0,f0<e9,h1,e8,f1,c9,h0),h0,D.L,f6-f1.f,f1.b,!1,!1))
continue}h2=new A.ctx(c8)
h3=C.a([],a5)
c8=$.S()
c9=C.a([],a8)
h0=new C.aF(c8.r,D.ag,j1,j1,c9)
for(h4=0;h4<6;h4=h5)for(c8=h4/6,h5=h4+1,f2=h5/6,c4=0;c4<8;c4=h6){f3=c4/8
h6=c4+1
f4=h6/8
h7=C.a([h2.$2(f3,c8),h2.$2(f4,c8),h2.$2(f4,f2),h2.$2(f3,f2)],a4)
if(D.d.b3(h7,new A.ctA()))continue
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
b5.push(new A.G3(f1.r,f1.w,new A.ctB(j0,f1,h3),h0,D.L,f6-f1.f,f1.b,!1,!1))}D.d.aY(e7,new A.ctC())
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
i2.d=w}D.d.aY(b5,new A.ctD())
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
t.drawPath((a4==null?e.e=new C.ce(e.gbv().a.snapshot()):a4).a,i6)
i6.delete()
if(!i2.z&&!i2.e){i5.r=s.gp(0)
i6=i5.G()
s=e.e
t.drawPath((s==null?e.e=new C.ce(e.gbv().a.snapshot()):s).a,i6)
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
t.drawPath((e==null?s.e=new C.ce(s.gbv().a.snapshot()):e).a,i6)
i6.delete()}}}for(v=v.c,u=v.length,a2=0;a2<v.length;v.length===u||(0,C.L)(v),++a2){i7=v[a2]
g2=h.$1(i7.a)
s=g2.c
if(s<1)continue
e=o+g2.a*p/s
s=n-g2.b*p/s
i8=new C.iM(new C.eu(i7.b,j1,j1,D.cN,j1,j1,j1,j1,j1,j1,new C.F(!0,D.c,j1,j1,j1,j1,11,D.u,j1,j1,j1,j1,j1,j1,j1,j1,j1,j1,j1,j1,j1,j1,j1,j1,j1,j1)),D.a4,D.bX,new C.jp(1),j1,j1,j1,j1,D.bV,j1)
i8.ej()
a4=i8.b
a5=a4.c
a4=a4.a.c
i9=C.br(C.bK(new C.t(e,s),a4.gbb(a4)+8,a5+14),D.hD)
a5=$.S()
a4=new C.ao(D.Q,D.M,D.S,D.T,D.R)
a4.r=i7.c.j(0.92).gp(0)
i6=a4.G()
t.drawRRect(C.e6(i9),i6)
i6.delete()
a4=new C.ao(D.Q,D.M,D.S,D.T,D.R)
a4.b=D.a9
a4.c=1
a4.r=D.ad.gp(0)
i6=a4.G()
t.drawRRect(C.e6(i9),i6)
i6.delete()
a4=i8.b
c6=a4.c
a4=a4.a.c
i8.a3(j3,new C.t(e-c6/2,s-a4.gbb(a4)/2))
s=i7.d
if(s!==0){e=C.a([],a8)
e.push(new C.iR(i9))
w.push(new C.z(new C.aF(a5.r,D.ag,j1,j1,e),s))}}},
av(d){return!0}}
A.cDr.prototype={}
A.G3.prototype={}
A.avz.prototype={
R(){return new A.bs4(new A.bUW(C.a([],x.a6)),new C.eB(0,$.ax()),D.bB,D.I,null,null)}}
A.bs4.prototype={
Z(){var w,v=this
v.a2()
A.hEO()
w=v.pQ(new A.f2o(v))
w.h5(0)
v.d!==$&&C.aQ()
v.d=w},
q(){var w=this.d
w===$&&C.c()
w.q()
w=this.f
w.T$=$.ax()
w.P$=0
this.byG()},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.a,l=m.as==null,k=l?n:new A.f2i(o)
l=l?n:new A.f2j(o,d)
w=m.c
v=m.d
u=m.e
t=m.r
s=o.f
r=m.w
m=m.x
q=C.a([v,s],x.dS)
p=o.a
q=C.a([C.jh(new C.er(C.b4(n,n,n,new A.b6s(w,v,o.e,u,t,s,r,m,p.y,p.Q,new C.h8(q)),D.fF),n),D.t,n)],x.p)
o.a.toString
return C.n1(D.iW,C.aB(D.c5,new C.an(D.a_,n,D.b2,D.t,q,n),D.y,!1,n,l,k,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new A.f2k(o),new A.f2l(o),n,n,n,n,n,n,n,new A.f2m(o),n,n,n,!1,D.a3),n,n,n,n,n,n,new A.f2n(o),n)}}
A.PQ.prototype={
rW(d,e,f){var w,v,u,t,s,r=this
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
A.cLo.prototype={}
A.aNY.prototype={
q(){var w=this,v=w.a8$
if(v!=null)v.a5(0,w.gbB())
w.a8$=null
w.a1()},
aU(){this.b1()
this.b0()
this.bC()}}
A.bc7.prototype={}
A.bcs.prototype={}
A.bhB.prototype={}
A.dp7.prototype={}
A.MC.prototype={
PA(d){return this.coN(d)},
coN(e4){var w=0,v=C.j(x.H),u=this,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6,d7,d8,d9,e0,e1,e2,e3
var $async$PA=C.e(function(e6,e7){if(e6===1)return C.f(e7,v)
for(;;)switch(w){case 0:if(e4.getUint32(0,!0)!==1179937895)throw C.W("not a glb file")
for(n=x.b,m=12,l=null,k=null;m+8<=e4.byteLength;){j=e4.getUint32(m,!0)
i=e4.getUint32(m+4,!0)
h=J.eI(D.dK.gaR(e4),e4.byteOffset+m+8,j)
if(i===1313821514)l=n.a(D.X.aL(0,new C.Gp(!1).DI(h,0,null,!0),null))
if(i===5130562)k=h
m+=8+j}if(l==null||k==null)throw C.W("empty glb")
g=new A.djj(l,k)
f=J.a6(l)
e=x.j
d=J.kK(e.a(f.h(l,"nodes")),n)
n=d.a
a0=J.a6(n)
a1=a0.gL(n)
a2=x.S
u.b=C.bZ(a1,-1,!1,a2)
a3=C.a([],x.s)
for(a4=d.$ti,a5=a4.k("bR<c1.E>"),a6=new C.bR(d,d.gL(0),a5),a7=a4.k("c1.E");a6.C();){a8=a6.d
a8=C.aT(J.r(a8==null?a7.a(a8):a8,"name"))
if(a8==null)a8=""
a3.push(a8.toLowerCase())}u.c=a3
u.d=D.d.bh(a3,new A.bTI())
a3=x.gL
a6=C.a([],a3)
for(a5=new C.bR(d,d.gL(0),a5),a8=x.U,a9=x.t;a5.C();){b0=a5.d
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
if(b5==null)b5=G.arE
a7=a8.a(a6.h(b4,"rotation"))
b6=a7==null?null:J.kK(a7,a5)
if(b6==null)b6=B.c6_
a6=a8.a(a6.h(b4,"scale"))
b7=a6==null?null:J.kK(a6,a5)
if(b7==null)b7=B.cj0
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
c1=a3.h(b7,"inverseBindMatrices")!=null?g.Fz(D.k.N(C.e8(a3.h(b7,"inverseBindMatrices")))).a:null
a3=u.as
a3.push(c1==null?A.hHU(a0.length):c1)}n=a8.a(f.h(l,"animations"))
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
d0=g.Fz(D.k.N(C.e8(a9.h(b7,"input")))).a
d1=g.Fz(D.k.N(C.e8(a9.h(b7,"output")))).a
d2=a9.h(b7,"interpolation")
if(d2==null)d2="LINEAR"
d3=b0===1?4:3
a9=J.kW(d2)
if(a9.A(d2,"CUBICSPLINE")){b1=d0.length
d4=new Float64Array(b1*d3)
for(b2=0;b2<b1;++b2)for(b9=b2*d3,c0=(b2*3+1)*d3,b8=0;b8<d3;++b8)d4[b9+b8]=d1[c0+b8]
d1=d4}if(!D.oy.gan(d0)){b1=d0.length
if(b1===0)C.b9(C.ft())
c5=Math.max(c5,d0[b1-1])}c3.push(new A.bc7(c8,b0,d0,d1,a9.A(d2,"STEP")))}d5=C.aT(a5.h(c2,"name"))
if(d5==null)d5="clip"+a0.a
a0.n(0,d5,new A.bcs(c5,c3))}t=C.U(a2,x.c9)
s=0
n=x.H
e="Could not read a picture of "+u.a+": "
case 2:a0=s
a2=a8.a(f.h(l,"images"))
a2=a2==null?null:J.ad(a2)
if(!(a0<(a2==null?0:a2))){w=3
break}r=g.cRn(s)
if(r==null){w=4
break}try{a0=r
d6=C.h8O(a0)
q=d6==null?null:d6.pR(0,a0,null)
if(q!=null){p=q.cJU(D.c9,4)
a0=s
a2=p.a
a2=a2==null?null:a2.a
if(a2==null)a2=0
a3=p.a
a3=a3==null?null:a3.b
if(a3==null)a3=0
d7=p
a4=d7.gr_()
d8=4!==a4?d7.cJT(null,4):d7
a4=d8.a
a4=a4==null?null:a4.bnb(d8!==d7,D.Lw)
if(a4==null){a4=d7.a
a4=a4==null?null:J.eS(a4.gaR(a4))
if(a4==null){a4=d7.a
a4=a4==null?null:a4.gaR(a4)
if(a4==null)a4=D.aG.gaR(new Uint8Array(0))
a4=J.eS(a4)}}J.aI(t,a0,new A.bhB(a2,a3,new Uint8Array(C.cm(a4))))}}catch(e5){o=C.ab(e5)
$.am.$1(e+C.w(o))}w=5
return C.b(C.bP(D.bB,null,n),$async$PA)
case 5:case 4:++s
w=2
break
case 3:e0=u.bSy(l,g,d,t)
w=6
return C.b(C.bP(D.bB,null,n),$async$PA)
case 6:u.at=u.b8M(e0,5000)
w=7
return C.b(C.bP(D.bB,null,n),$async$PA)
case 7:u.ax=u.b8M(e0,1800)
n=u.at
n.r=u.b3Z(n)
n=u.ax
n.r=u.b3Z(n)
e1=u.azp(null,0)
e2=u.b6R(u.at,e1)
for(n=e2.length,e3=1/0,s=1;s<n;s+=3)e3=Math.min(e3,e2[s])
u.ay=isFinite(e3)?e3:0
return C.h(null,v)}})
return C.i($async$PA,v)},
cqc(d){var w,v,u
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
b3Z(d){var w,v,u,t,s,r,q,p,o,n,m=d.a.length/3|0,l=new Uint8Array(m)
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
l[t]=o<n.length?this.cqc(n[o]):5}return l},
bSy(e9,f0,f1,f2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6,d7,d8,d9,e0,e1,e2=null,e3="POSITION",e4="JOINTS_0",e5="WEIGHTS_0",e6=J.a6(e9),e7=x.U,e8=e7.a(e6.h(e9,"materials"))
if(e8==null)e8=D.cv
w=x.b
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
for(a9=J.kK(e8.a(J.r(j.a(k.h(l,b1)),"primitives")),w),b0=a9.$ti,a9=new C.bR(a9,a9.gL(0),b0.k("bR<c1.E>")),b3=b2==null,b0=b0.k("c1.E");a9.C();){b4=a9.d
if(b4==null)b4=b0.a(b4)
b5=J.a6(b4)
b6=J.Dl(e.a(b5.h(b4,"attributes")),i,h)
if(b6.h(0,e3)==null||b5.h(b4,"indices")==null)continue
b7=f0.Fz(D.k.N(C.e8(b6.h(0,e3)))).a
b8=b7.length/3|0
b9=b6.h(0,e4)!=null?f0.Fz(D.k.N(C.e8(b6.h(0,e4)))).a:e2
c0=b6.h(0,e5)!=null?f0.Fz(D.k.N(C.e8(b6.h(0,e5)))).a:e2
c1=C.aK(b5.h(b4,"material"))
c2=c1==null?e2:D.k.N(c1)
c1=g.a(J.r(c2!=null?a1.a(a0.h(d,c2)):D.cA,"pbrMetallicRoughness"))
c3=c1==null?e2:J.Dl(c1,i,h)
if(c3==null)c3=D.cA
c1=e7.a(c3.h(0,"baseColorFactor"))
c4=c1==null?e2:J.kK(c1,f)
if(c4==null)c4=B.cj1
c1=g.a(c3.h(0,"baseColorTexture"))
c5=c1==null?e2:J.Dl(c1,i,h)
c1=c5==null
c6=C.aK(c1?e2:c5.h(0,"texCoord"))
c7=c6==null?e2:D.k.N(c6)
c8=b6.h(0,"TEXCOORD_"+(c7==null?0:c7))
c9=c8!=null?f0.Fz(D.k.N(C.e8(c8))).a:e2
if(!c1){c1=C.aK(J.r(a4.a(a3.h(a2,D.k.N(C.e8(c5.h(0,"index"))))),"source"))
d0=c1==null?e2:D.k.N(c1)
d1=d0!=null?f2.h(0,d0):e2}else d1=e2
d2=s.length/3|0
D.d.v(s,b7)
for(c1=c0!=null,c6=b9!=null,d3=0;d3<b8;++d3){o.push(b3?255:b2)
for(d4=d3*4,d5=0;d5<4;++d5){q.push(c6?D.k.N(b9[d4+d5]):0)
if(c1)d6=c0[d4+d5]
else d6=d5===0?1:0
p.push(d6)}}d7=f0.Fz(D.k.N(C.e8(b5.h(b4,"indices")))).a
for(b4=d7.length,d8=0;b5=d8+2,b5<b4;d8+=3){d9=D.k.N(d7[d8])
e0=D.k.N(d7[d8+1])
e1=D.k.N(d7[b5])
n.push(d2+d9)
n.push(d2+e0)
n.push(d2+e1)
m.push(this.bQE(d1,c9,d9,e0,e1,c4))}if(b3)a5.push(new C.b7(d2,b8,a7))}}return new A.duF(new Float64Array(C.cm(s)),new Uint16Array(C.cm(q)),new Float64Array(C.cm(p)),new Uint8Array(C.cm(o)),new Int32Array(C.cm(n)),new Int32Array(C.cm(m)))},
bQE(d,e,f,g,h,i){var w,v,u,t,s,r,q,p=J.a6(i),o=p.h(i,0),n=p.h(i,1),m=p.h(i,2)
if(d!=null&&e!=null){w={}
p=f*2
v=g*2
u=h*2
t=(e[p]+e[v]+e[u])/3
s=(e[p+1]+e[v+1]+e[u+1])/3
r=w.a=w.b=w.c=0
q=new A.bTC(w,d)
q.$2(t,s)
for(p=[f,g,h];r<3;++r){v=p[r]*2
q.$2((t+e[v])/2,(s+e[v+1])/2)}o*=w.c/4/255
n*=w.b/4/255
m*=w.a/4/255}p=new A.bTB()
return(p.$1(o)<<16|p.$1(n)<<8|p.$1(m)|4278190080)>>>0},
b8M(d7,d8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4={},d5=d7.a,d6=d5.length/3|0
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
f=new A.bTK(d4,d6,d7)
e=new A.bTM(d7)
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
D.jX.ht(b2,0,a5,-1)
b3=new Float64Array(a5)
D.oy.ht(b3,0,a5,1/0)
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
c4=A.hfq(c2,c3,b1)
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
b9.bQ(0,new A.bTJ(c7,c0))
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
d0[p]=s[d3]}d1[b1]=u[d2]}return new A.dp7(c8,c9,d0,d1,new Int32Array(C.cm(b8)),c7)},
azp(a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0=d.b
a0===$&&C.c()
w=d.w
w===$&&C.c()
v=new Float64Array(C.cm(w))
w=d.x
w===$&&C.c()
u=new Float64Array(C.cm(w))
w=d.y
w===$&&C.c()
t=new Float64Array(C.cm(w))
s=a1==null?null:d.z.h(0,a1)
if(s!=null&&s.b>0){w=s.b
r=a2-Math.floor(a2/w)*w
for(w=s.c,q=w.length,p=0;p<w.length;w.length===q||(0,C.L)(w),++p){o=w[p]
n=o.b
if(n===0)n=v
else n=n===1?u:t
A.hHV(o,r,n)}}m=d.CW.c3(0,"world",new A.bTG(a0.length))
l=new A.bTH(d,v,u,t,new Float64Array(16),m)
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
A.hfr(m,w*16,q[h],f*16,j,i)
i+=16}}for(w=a0.length,p=0;p<a0.length;a0.length===w||(0,C.L)(a0),++p,i=e){e=i+16
D.oy.em(j,i,e,m,a0[p].c*16)}return j},
b6R(b8,b9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3=b8.a,b4=b3.length/3|0,b5=new Float64Array(b4*3),b6=C.a([],x.t),b7=this.Q
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
cJi(d,e){var w,v,u=new A.bTP(this)
if(d){w=u.$1("run")
v=w==null?u.$1("walk"):w}else if(e){w=u.$1("walk")
v=w}else{w=u.$1("idle")
if(w==null)w=u.$1("samba")
v=w}if(v!=null)return v
u=u.$1("samba")
if(u==null){u=this.z
u=new C.cx(u,C.a7(u).k("cx<1>")).dK(0,new A.bTN(),new A.bTO(this))}return u},
cWy(b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3=this,b4="world",b5={}
if(b6){w=b3.at
w===$&&C.c()
v=w}else{w=b3.ax
w===$&&C.c()
v=w}u=b3.cJi(c0,c5)
w=b3.z.h(0,u)
t=w==null?null:w.b
if(t==null)t=1
if(c5&&c4!=null&&D.a.t(u.toLowerCase(),"walk"))s=c4/50*t
else{w=B.dyP.h(0,b3.a)
s=c2*(w==null?1:w)}w=b3.e
r=w.h(0,u)
if(r==null){b3.azp(u,0)
if(b3.d>=0){q=b3.CW
r=new C.z(q.h(0,b4)[b3.d*16+12],q.h(0,b4)[b3.d*16+14])}else r=D.A0
w.n(0,u,r)}p=b3.azp(u,s)
b5.a=b5.b=0
if(b3.d>=0){w=b3.CW
b5.b=w.h(0,b4)[b3.d*16+12]-r.a
b5.a=w.h(0,b4)[b3.d*16+14]-r.b}o=b3.b6R(v,p)
w=b3.a
q=B.dzr.h(0,w)
n=c7+(q==null?0:q)
m=C.ip(v.a.length/3|0,new A.bTS(b5,b3,o,36,b8,Math.cos(n),Math.sin(n),c6,c8),!0,x.Q)
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
a9=new A.q(a2.a-a4,a5-a6,a2.c-a7).FX(new A.q(a3.a-a4,a8-a6,a3.c-a7)).gmU(0)
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
a5=b2==null?C.b1(h[D.o.ao(a0,3)]):A.i7m(h[D.o.ao(a0,3)],b2)
j.push(new A.kp(a4,a9,a5,b7,0.08,1,!1,0,0,2,q[b0]))}if(e&&f&&w!=="michelle")D.d.v(j,b3.bQF(v,m,n,c1,b7,q[0]))
return j},
bQF(a6,a7,a8,a9,b0,b1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5={}
for(w=a6.a.length/3|0,v=a6.r,u=-1e9,t=1e9,s=0;s<w;++s){v===$&&C.c()
if(v[s]!==0)continue
r=a7[s].b
if(r>u)u=r
if(r<t)t=r}if(u<t)return B.I7
q=Math.cos(a8)
p=Math.sin(a8)
o=new A.q(p,0,q)
v=-p
n=Math.max(t,u-(u-t)*0.75)
for(m=a6.r,l=0,k=0,j=0,s=0;s<w;++s){m===$&&C.c()
if(m[s]!==0||a7[s].b<n)continue
i=a7[s]
l+=i.a
k+=i.c;++j}if(j===0)return B.I7
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
d=new A.bTD(a5,new A.q(m,(u+n)/2,i),o,new A.q(q,0,v),e,new A.q(0,1,0))
w=C.ar(a9,B.bjr,0.88)
w.toString
v=C.ar(a9,D.w,0.25)
v.toString
m=C.ar(a9,B.bhe,0.6)
m.toString
a0=C.a([],x.z)
a1=new A.bTF(a0,o,b0,b1)
a2=new A.bTE(a1,d)
for(a3=0;a3<2;++a3){a4=F.hB[a3]
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
A.duF.prototype={}
A.djj.prototype={
cRn(d){var w,v,u=this.a,t=J.a6(u),s=x.j,r=x.G,q=C.aK(J.r(r.a(J.r(s.a(t.h(u,"images")),d)),"bufferView")),p=q==null?null:D.k.N(q)
if(p==null)return null
w=r.a(J.r(s.a(t.h(u,"bufferViews")),p))
u=J.a6(w)
t=C.aK(u.h(w,"byteOffset"))
v=t==null?null:D.k.N(t)
if(v==null)v=0
return C.yl(this.b,v,v+D.k.N(C.e8(u.h(w,"byteLength"))))},
Fz(a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=null,g="byteOffset",f=this.a,e=J.a6(f),d=x.j,a0=x.G,a1=a0.a(J.r(d.a(e.h(f,"accessors")),a5)),a2=J.a6(a1),a3=D.k.N(C.e8(a2.h(a1,"count"))),a4=a2.h(a1,"type")
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
m=C.aTp(this.b)
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
A.lG.prototype={}
A.rc.prototype={
gDr(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=1e9,d=-1e9,a0=this.w,a1=a0.length
if(a1===0){a0=this.e
return new C.cy([-a0/2,a0/2,-12,0])}for(w=this.e,v=-w,u=d,t=e,s=u,r=t,q=0;q<a1;++q){p=a0[q]
for(o=p.e,o=[v*o/2,w*o/2],n=p.c,m=p.a,l=p.b,k=0;k<2;++k){j=o[k]
for(i=[-12,0],h=0;h<2;++h){g=A.vD(new A.q(j,0,i[h]),n)
f=g.a+m
r=Math.min(r,f)
s=Math.max(s,f)
f=g.c+l
t=Math.min(t,f)
u=Math.max(u,f)}}}return new C.cy([r,s,t,u])},
gapa(){return this.gDr().a[1]-this.gDr().a[0]},
gGP(){var w=this.w
return w.length===0?this.f:new C.N(w,new A.bI_(this),C.T(w).k("N<1,K>")).f3(0,D.pL)},
gbe9(){return this.gDr().a[3]-this.gDr().a[2]},
ga4w(d){return this.w.length===0?0:(this.gDr().a[0]+this.gDr().a[1])/2},
ga4x(){return this.w.length===0?0:(this.gDr().a[2]+this.gDr().a[3])/2},
gef(d){var w=this
return Math.max(Math.max(w.gapa(),w.gbe9()),Math.max(w.gGP()*1.3,w.x))*w.y}}
A.Hq.prototype={}
A.aT6.prototype={
bjx(){var w=this
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
if(w!=null)u.n(0,"logo",D.cJ.gct().aN(w))
w=v.r
if(w!=null)u.n(0,"pic",D.cJ.gct().aN(w))
return u},
TW(d){var w,v=this,u=J.a6(d)
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
v.f=typeof u.h(d,"logo")=="string"?D.cF.aN(C.cP(u.h(d,"logo"))):null
v.r=typeof u.h(d,"pic")=="string"?D.cF.aN(C.cP(u.h(d,"pic"))):null}}
A.bHY.prototype={
cYh(){var w,v,u
for(w=this.b,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u)w[u].bjx()},
ah(){var w,v,u,t=this.a,s=C.a([],x.c7)
for(w=this.b,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u)s.push(w[u].ah())
return C.H(["template",t,"signs",s],x.N,x.A)},
TW(d){var w,v,u,t,s,r,q
this.a=D.d.b3(B.a3v,new A.bHZ(d))?C.cP(J.r(d,"template")):"highway"
w=J.r(d,"signs")
if(x.j.b(w)){v=J.a6(w)
u=x.G
t=this.b
s=x.N
r=x.A
q=0
for(;;){if(!(q<6&&q<v.gL(w)))break
if(u.b(v.h(w,q)))t[q].TW(C.a2(u.a(v.h(w,q)),s,r));++q}}else this.b[0].TW(d)}}
A.ho.prototype={}
A.aoJ.prototype={
R(){var w=A.hEu()
$.yY()
return new A.aoK(w,new C.yd())}}
A.aoK.prototype={
gio(){var w,v=this.e
if(v===$){w=new A.xg(0.5,0.25,420,B.fYq,$.ax())
w.e=30
w.f=5000
w.w=0.02
w.x=1.4
w.r8(!0)
this.e!==$&&C.bF()
this.e=w
v=w}return v},
gaxr(){var w=this.r
return w===$?this.r=new A.a5g(this.gc6W(),X.BC):w},
gzz(){return D.d.fY(B.a3v,new A.c3Z(this))},
Z(){var w=this
w.a2()
w.f=A.h8r(w.gzz(),w.d)
w.abv()
A.hk1().bM(new A.c3X(w),x.P)
w.PE()},
q(){this.gaxr().bR(0)
var w=this.gio()
w.T$=$.ax()
w.P$=0
this.a1()},
abv(){var w=this.gzz(),v=this.gio(),u=w.ga4w(0),t=w.gGP(),s=w.ga4x()
v.Np(w.gef(0)*1.9,0.22,new A.q(u,w.r+t/2,s),0.45)},
PE(){var w=0,v=C.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i
var $async$PE=C.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return C.b(C.az(),$async$PE)
case 7:q=e
p=C.aT(J.r(q.a,"ngmy_billboard_studio_v1"))
if(p==null){w=1
break}n=r.d
n.TW(x.b.a(D.X.aL(0,p,null)))
n=n.b,m=n.length,l=0
case 8:if(!(l<n.length)){w=10
break}o=n[l]
i=o
w=11
return C.b(A.afW(o.f),$async$PE)
case 11:i.w=e
i=o
w=12
return C.b(A.afW(o.r),$async$PE)
case 12:i.x=e
case 9:n.length===m||(0,C.L)(n),++l
w=8
break
case 10:if(r.c==null){w=1
break}r.m(new A.c3K(r))
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
c6X(){var w,v,u,t,s,r,q,p=this
if(!(p.x>=0)||p.c==null)return
w=p.w.gip()/1000
if(w>=30){p.aBH(!0)
return}v=A.i8E(p.gzz(),w)
u=v.b
t=u.aE(0,v.a)
s=Math.max(8,t.guV())
r=p.gio()
q=Math.atan2(t.a,-t.c)
r.Np(s,Math.asin(D.k.E(-t.b/s,-1,1)),u,q)
p.m(new A.c3Q(p,w))},
bqV(){var w,v=this
v.gio().w=-1.4
w=v.w
w.kK(0)
w.h5(0)
v.m(new A.c3Y(v))
v.gaxr().h5(0)},
aBH(d){var w,v=this
v.gaxr().bR(0)
w=v.w
if(w.b==null)w.b=$.a9B.$0()
v.gio().w=0.02
v.m(new A.c3N(v,d))
v.abv()},
czC(){return this.aBH(!1)},
cvx(d){var w=this
w.d.a=d
w.m(new A.c3M(w))
w.abv()
w.IW()},
ZJ(d){this.d.b[d].a=!1
this.m(new A.c3k())
this.IW()},
IV(d,e){return this.cld(d,e)},
cld(d,e){var w=0,v=C.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k
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
return C.b(A.afW(p),$async$IV)
case 9:o=g
if(o==null){w=1
break}n=r.d.b[d]
if(e){n.f=p
n.w=o}else{n.r=p
n.x=o}r.ZJ(d)
t=2
w=6
break
case 4:t=3
k=s.pop()
if(r.c!=null)r.m(new A.c3L(r))
w=6
break
case 3:w=2
break
case 6:case 1:return C.h(u,v)
case 2:return C.f(s.at(-1),v)}})
return C.i($async$IV,v)},
cBF(){var w=this.c
w.toString
C.bU(D.av,null,new A.c3P(this),w,!0,!0,!0,D.k2,!1,!1,x.H)},
bOW(){var w,v,u,t,s,r,q=this,p={}
p.a=0
w=q.d.b[0]
v=w.b
u=$.ax()
t=new C.as(new C.ba(v,D.b3,D.aO),u)
v=w.c
s=new C.as(new C.ba(v,D.b3,D.aO),u)
w=w.d
r=new C.as(new C.ba(w,D.b3,D.aO),u)
w=q.c
w.toString
C.bU(D.av,null,new A.c3I(p,q,new A.c3J(p,q,t,s,r),t,s,r),w,!0,!0,!0,D.k2,!1,!1,x.H)},
axt(d,e,f,g){var w=null,v=g?f.j(0.3):D.w.j(0.6),u=C.n(20),t=C.J(f,D.r,1)
return C.aB(w,C.p(w,C.d(d,w,w,w,w,w,w,C.l(w,w,f,w,w,w,w,w,w,w,w,13,w,w,D.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),D.f,w,w,new C.o(v,w,t,u,w,w,D.n),w,w,w,w,D.ip,w,w,w),D.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,e,w,w,w,w,w,w,!1,D.a3)},
axs(d,e,f){return this.axt(d,e,f,!1)},
c6V(d,e,f){return this.axt(d,e,D.aK,f)},
B(d){var w,v,u,t,s,r=this,q=null,p=C.aJ(d,q,x.w).w.r,o=r.f
o===$&&C.c()
w=x.p
o=C.a([C.bS(0,A.h4t(E.Bk,r.gio(),q,q,0,q,q,q,o,!0),0,0,0)],w)
if(!(r.x>=0))o.push(C.ap(q,C.B(C.a([C.aB(q,C.p(q,D.a2r,D.f,q,q,new C.o(D.w.j(0.55),q,C.J(D.bZ,D.r,1),q,q,q,D.a6),q,40,q,q,q,q,q,40),D.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new A.c3T(d),q,q,q,q,q,q,!1,D.a3),D.as,C.E(C.d("Billboard studio \xb7 "+r.gzz().c,q,q,q,q,q,q,B.fgu,q,q,q),1)],w),D.m,q,D.e,D.i,0,q,q),q,q,8,8,p.b+8,q))
if(r.x>=0&&r.y)o.push(C.bS(0,C.aB(D.c5,q,D.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new A.c3U(r),q,q,q,q,q,q,!1,D.a3),0,0,0))
if(!(r.x>=0&&r.y)){v=C.a([],w)
if(r.z.length!==0&&!(r.x>=0)){u=D.e_.j(0.95)
t=C.n(12)
s=C.J(D.be,D.r,1)
v.push(C.p(q,C.d(r.z,q,q,q,q,q,q,D.UL,q,q,q),D.f,q,q,new C.o(u,q,s,t,q,q,D.n),q,q,q,D.cu,D.bT,q,q,q))}w=C.a([],w)
if(!(r.x>=0))w.push(r.axs("\ud83e\udea7 Choose billboard",r.gcBE(),F.fz))
if(!(r.x>=0))w.push(r.axs("\u270f\ufe0f Edit",r.gbOV(),D.be))
if(r.x>=0)w.push(r.axt("\u23f9 Stop the drone",r.gczB(),D.c7,!0))
if(r.x>=0)w.push(r.axs("\ud83d\udc41 Hide everything",new A.c3V(r),D.aN))
if(!(r.x>=0))w.push(r.c6V("\ud83c\udfac 30 second drone shot",r.gbqU(),!0))
v.push(C.bX(D.fI,w,D.bq,q,8,8))
o.push(C.ap(p.d+12,C.x(v,D.m,q,D.e,D.O,0,D.p),q,q,10,10,q,q))}return C.c7(q,D.w,new C.an(D.a_,q,D.ab,D.t,o,q),q,!1,!1,q,q)}}
A.FW.prototype={}
A.zc.prototype={}
A.xl.prototype={}
A.aUf.prototype={}
A.a4p.prototype={}
A.akm.prototype={}
A.bMk.prototype={
bzq(d,e){var w,v,u,t,s,r,q,p=this,o=x._,n=C.a([],o)
for(w=p.a.x,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u){t=w[u]
s=t.b
if(s==="house2"||s==="bighouse")n.push(t)}p.b!==$&&C.aQ()
p.b=n
o=C.a([],o)
for(n=w.length,u=0;u<w.length;w.length===n||(0,C.L)(w),++u){t=w[u]
if(D.d.b3(B.R9,new A.bMm(t)))o.push(t)}p.c!==$&&C.aQ()
p.c=o
for(o=p.f,r=0;r<5;++r){q=p.cox()
n=B.duK[r]
w=B.diX[r]
o.push(new A.aUf(n,w,new A.tN(B.axH[r],B.Mb,w,B.LE,B.do7[r],!1,0,1),58+r*7.5,q.a,q.b,B.aA1))}p.UK(0)},
cox(){var w,v=this.c
v===$&&C.c()
w=v.length
if(w===0)return B.eub
return A.yO(v[this.d.ap(w)])},
cWK(d){var w,v,u,t,s,r,q,p=this,o=C.a([],x._),n=p.c
n===$&&C.c()
w=n.length
v=0
for(;v<n.length;n.length===w||(0,C.L)(n),++v){u=n[v]
t=u.b
if(t==="store"||t==="shop"||t==="gasstation")o.push(u)}if(o.length===0)return
D.d.aY(o,new A.bMo(p,d))
for(n=p.e,s=0,v=0;v<2;++v){r=B.dmx[v]
q=o[D.o.F(s,o.length)];++s;++p.r
w=new A.xl(r,q,d,r==="medicine"?30:24)
w.w=!0
D.d.c6(n,0,w)}},
UK(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=j.d,h=j.e,g=x._,f=C.T(h).k("Z<1>"),e=0
for(;;){if(new C.Z(h,new A.bMp(),f).gL(0)<7){w=e+1
v=e<30
e=w}else v=!1
if(!v)break
u=B.R9[i.ap(5)]
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
h.push(new A.xl(u.a,o,n,6+D.o.E(D.k.V(k/70),0,22)))}},
cYM(d,e,f){if(this.x!=null||e.f!=null||!D.d.t(this.e,e))return!1
e.f=-1
e.x=f
this.x=e
return!0},
a4(d){var w=this.x
if(w==null)return
w.f=null
w.r=!1
this.x=null},
ga6X(d){var w=this.x
if(w==null)return null
return A.yO(w.r?w.d:w.c)},
bkt(d,e,f){var w,v,u,t,s,r,q,p=this,o=p.x
if(o==null)return null
if(f-o.x>360){p.a4(0)
return B.buF}w=p.ga6X(0)
if(Math.sqrt(Math.pow(w.a-d,2)+Math.pow(w.b-e,2))>58)return null
if(!o.r){o.r=!0
v=o.b
u=A.L9(v)
v=A.L9(v)
t=B.hC.h(0,o.c.b).a
s=o.w?"hospital":"house"
return new A.akm("pickup",u.b+" You picked up the "+v.c.toLowerCase()+" at the "+t.toLowerCase()+". Now take it to the "+s+".",0)}D.d.W(p.e,o)
p.x=null;++p.z;++p.y
v=p.Q
u=o.e
p.Q=v+u
p.UK(f)
r=A.L9(o.b).b+" Delivered! +"+u+" points."
if(p.y>=8){p.Q+=40
r+=" You won the race with 8 deliveries: +40 points!"
p.aZ_()
q=40}else q=0
v=q>0?"won":"delivered"
return new A.akm(v,r,u+q)},
aZ_(){var w,v,u;++this.as
this.y=0
for(w=this.f,v=w.length,u=0;u<v;++u)w[u].r=0},
FF(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this
for(w=j.f,v=w.length,u=j.e,t=e+2,s=j.d,r=x.C,q=null,p=0;p<w.length;w.length===v||(0,C.L)(w),++p){o=w[p]
n=o.ch
if(n===0){if(e<o.CW)continue
n=C.a([],r)
for(m=u.length,l=0;l<u.length;u.length===m||(0,C.L)(u),++l){k=u[l]
if(k.f==null)n.push(k)}if(n.length===0)continue
D.d.aY(n,new A.bMl(j,o))
k=n[Math.min(n.length-1,s.ap(3))]
k.f=D.d.cu(w,o)
o.y=k
j.b7o(o,e,1,k.c)}else if(e>=o.Q){if(!o.db){o.e=o.ax
o.f=o.ay
o.db=!0
o.dx=e+(n===1?1.6:1.3)
continue}if(e<o.dx)continue
o.db=!1
m=o.y
m.toString
if(n===1)j.b7o(o,e,2,m.d)
else{D.d.W(u,m)
o.y=null
o.ch=0;++o.w;++o.r
o.x=o.x+m.e
o.CW=t+s.af()*5
j.UK(e)
if(o.r>=8){q=o.a+" won the race with 8 deliveries! A new round starts."
j.aZ_()}}}}return q},
aZN(d,e){return Math.sqrt(Math.pow(e.a-d.e,2)+Math.pow(e.b-d.f,2))},
b7o(d,e,f,g){var w,v,u,t=this,s=A.yO(g),r=B.hC.h(0,g.b),q=g.e*3.141592653589793/2,p=r.d/2-2,o=g.c+Math.sin(q)*p,n=g.d+Math.cos(q)*p
d.ch=f
d.ax=o
d.ay=n
w=t.w
if(w===$){v=new A.bKq(t.a)
v.aZO()
t.w!==$&&C.bF()
t.w=v
w=v}u=C.C(w.aoR(new C.z(d.e,d.f),s),x.J)
u.push(new C.z(o,n))
d.cx=u
o=A.ij8(u)
d.cy=o
d.z=e
d.Q=e+Math.max(1,o/d.d)},
amr(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=C.a([],x.B)
for(w=this.f,v=w.length,u=d*2.2,t=0;t<w.length;w.length===v||(0,C.L)(w),++t){s=w[t]
r=s.e
q=s.f
if(s.db)continue
if(s.ch!==0&&d>=s.z&&s.cx.length>1){p=s.z
o=D.k.E((d-p)/Math.max(0.01,s.Q-p),0,1)
n=A.ije(s.cx,s.cy*o)
r=n.a
q=n.b
m=n.c
l=o<1}else{m=0
l=!1}k.push(new A.a4p(r,q,m,u+s.d,l,s.ch===2,s.c,s.b))}return k},
cYK(){var w,v,u,t,s=C.a([new C.b7("You",this.y,this.Q)],x.aJ)
for(w=this.f,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u){t=w[u]
s.push(new C.b7(t.a,t.r,t.x))}D.d.aY(s,new A.bMq())
return s},
r0(d,e,f){var w,v,u,t,s=C.a([],x.C)
for(w=this.e,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u){t=w[u]
if(t.f==null)s.push(t)}D.d.aY(s,new A.bMn(this,e,f))
return s},
aau(d,e,f){return Math.sqrt(Math.pow(f.a-d,2)+Math.pow(f.b-e,2))}}
A.bKq.prototype={
aZR(d){return-this.a.gex(0)/2+8+d*24},
aZO(){var w,v,u,t,s=this,r=s.a
s.d=A.hxX(r,null)
s.b=D.k.dd((r.gex(0)-16)/24)+1
w=D.k.dd((r.ghs(0)-10- -750)/24)+1
s.c=w
s.e=C.bZ(s.b*w,!1,!1,x.R)
for(v=0;v<s.b;++v)for(w=v*24,u=0;t=s.c,u<t;++u)s.e[v*t+u]=s.acn(-r.gex(0)/2+8+w,-750+u*24)
s.f=A.hdY(r)},
acn(d,e){var w,v,u=this.a
if(d<-u.gex(0)/2+12||d>u.gex(0)/2-12||e<-756||e>u.ghs(0)-14)return!0
u=this.d
u===$&&C.c()
w=u.length
v=0
for(;v<w;++v)if(u[v].aGF(d,e,14))return!0
return!1},
aZP(d,e,f){var w,v,u=e.a,t=f.a-u,s=e.b,r=f.b-s,q=Math.max(1,D.k.dd(Math.sqrt(Math.pow(t,2)+Math.pow(r,2))/8))
for(w=0;w<=q;++w){v=w/q
if(this.acn(u+t*v,s+r*v))return!1}return!0},
aZQ(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=d.a,h=j.a,g=D.k.V((i+h.gex(0)/2-8)/24),f=j.b
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
aoR(d,e){var w,v,u,t,s,r,q,p,o,n,m=this
if(A.hdY(m.a)!==m.f)m.aZO()
w=m.aZQ(d)
v=m.aZQ(e)
if(w==null||v==null)return C.a([d,e],x.f)
u=new C.z(m.aZR(w.a),-750+w.b*24)
t=new C.z(m.aZR(v.a),-750+v.b*24)
s=x.f
r=m.acn(d.a,d.b)?C.a([d],s):C.a([],s)
q=m.acn(e.a,e.b)?C.a([e],s):C.a([],s)
p=C.a([],s)
o=r.length===0?d:u
n=q.length===0?e:t
if(m.aZP(0,o,n))D.d.v(p,C.a([o,n],s))
else D.d.v(p,m.cuk(w,v,o,n))
s=C.C(r,x.J)
D.d.v(s,p)
D.d.v(s,q)
return s},
cuk(a9,b0,b1,b2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this,a3=x.t,a4=C.a([],a3),a5=new A.djM(a4,C.a([],x.n)),a6=x.S,a7=C.U(a6,a6),a8=C.U(a6,x.i)
a6=a9.a
w=a2.c
w===$&&C.c()
v=a9.b
u=a6*w+v
t=b0.a
s=b0.b
r=t*w+s
a8.n(0,u,0)
a5.aom(u,a2.c7r(a6,v,b0))
p=0
for(;;){if(a4.length!==0){o=p+1
a6=p<4e4
p=o}else a6=!1
if(!a6){q=!1
break}n=a5.eM()
if(n===r){q=!0
break}a6=a2.c
m=D.o.ea(n,a6)
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
a5.aom(e,d+Math.sqrt(Math.pow(v,2)+Math.pow(h-s,2)))}}}if(!q)return C.a([b1,b2],x.f)
a0=C.a([r],a3)
while(a7.aj(0,D.d.gak(a0))){a3=a7.h(0,D.d.gak(a0))
a3.toString
a0.push(a3)}a3=x.f
a4=C.a([b1],a3)
for(a6=x.c5,w=new C.dw(a0,a6),w=new C.bR(w,w.gL(0),a6.k("bR<ak.E>")),v=a2.a,a6=a6.k("ak.E");w.C();){t=w.d
if(t==null)t=a6.a(t)
s=a2.c
g=D.o.ea(t,s)
a4.push(new C.z(-v.gex(0)/2+8+g*24,-750+D.o.F(t,s)*24))}a4.push(b2)
a1=C.a([D.d.gI(a4)],a3)
for(j=0;h=a4.length-1,j<h;j=h){a3=j+1
for(;;){if(!(h>a3&&!a2.aZP(0,a4[j],a4[h])))break;--h}a1.push(a4[h])}return a1},
c7r(d,e,f){return Math.sqrt(Math.pow(d-f.a,2)+Math.pow(e-f.b,2))}}
A.djM.prototype={
gcm(d){return this.a.length!==0},
aom(d,e){var w,v,u,t=this.a
t.push(d)
w=this.b
w.push(e)
v=t.length-1
for(;v>0;v=u){u=D.o.ao(v-1,2)
if(w[u]<=w[v])break
this.b84(v,u)}},
eM(){var w,v,u,t,s,r=this.a,q=D.d.gI(r),p=r.pop(),o=this.b,n=o.pop()
if(r.length!==0){r[0]=p
o[0]=n
for(w=0;;w=s){v=2*w+1
u=v+1
t=r.length
s=v<t&&o[v]<o[w]?v:w
if(u<t&&o[u]<o[s])s=u
if(s===w)break
this.b84(w,s)}}return q},
b84(d,e){var w,v=this.a,u=v[d]
v[d]=v[e]
v[e]=u
v=this.b
w=v[d]
v[d]=v[e]
v[e]=w}}
A.aTC.prototype={
bjU(d,e,f){var w,v,u,t,s=this,r=null,q=s.d
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
a6Z(d){return this.bjU(d,!1,!1)}}
A.aYS.prototype={
B(d){var w,v,u,t,s,r=null,q=D.k.E(this.c,0,1)
if(q>0.5)w=D.bf
else w=q>0.25?D.bu:D.ax
v=C.a([],x.p)
u=this.d
v.push(new C.D(D.qf,C.d(this.e,r,r,r,r,r,r,C.l(r,r,r,r,r,r,r,r,r,r,r,u,r,r,r,r,r,!0,r,r,r,r,r,r,r,r),r,r,r),r))
t=C.n(u/3)
s=C.J(D.ad,D.r,1.5)
v.push(C.E(C.p(r,new C.bM(D.a5,r,r,C.Bx(D.A,C.c3(r,new C.o(w,r,r,C.n(u/4),r,r,D.n),D.bh),1,q),r),D.f,r,r,new C.o(D.aS,r,s,t,r,r,D.n),r,u,r,r,D.ns,r,r,r),1))
v.push(C.p(r,r,D.f,r,r,new C.o(D.ad,r,r,C.n(1),r,r,D.n),r,u*0.45,r,B.bAV,r,r,r,3))
return C.B(v,D.m,r,D.e,D.O,0,r,r)}}
A.Uw.prototype={
B(d){return new C.tx(new A.c1A(this),null,this.c,null)}}
A.rP.prototype={}
A.Sy.prototype={
gL(d){return this.a==="bus"?120:95.94999999999999}}
A.aTB.prototype={}
A.bxl.prototype={
bAw(d,e,f,g){var w,v,u,t,s,r,q,p,o,n,m
for(w=this.e,v=this.f,u=0;u<4;++u){t=B.kn[u]
s=A.fpn(t).a[1]
r=new A.fi8(this,t)
q=0
for(;;){if(!(r.$1(q)&&q<s))break;++q}for(p=-1,o=0,n=0;n<s;++n){m=D.o.F(q+n,s)
if(r.$1(m)){if(p<0)p=m;++o}else if(p>=0)break}w.push(p)
v.push(o)}}}
A.bKs.prototype={
kK(d){var w,v,u,t
for(w=this.a,v=this.b,u=0;u<4;++u){w[u]=B.kn[u].r
v[u]=0}t=this.c=0
for(w=$.h_n();t<2;++t)w[t].r=-1},
FF(d,e){var w,v,u,t=this
if(e<t.c-0.0001)t.kK(0)
w=t.c
if(e-w>90){w=e-2
t.c=w}for(v=e-1e-9;w<v;){u=Math.min(0.05,e-w)
t.czr(u)
w=t.c+=u}},
czr(b8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7=this
for(w=$.h_n(),v=b7.a,u=0;u<2;++u){t=w[u]
s=t.r
if(s<0)continue
r=A.fpn(B.kn[s]).a[1]
q=D.k.F(v[s]-t.e[s],r)
if(q<0)q+=r
if(q>=t.f[s]&&q<r/2)t.r=-1}for(w=b7.b,p=110*b8,o=40*b8,n=0;n<4;++n){m=B.kn[n]
r=A.fpn(m).a[1]
l=m.a==="bus"
k=(l?120:95.94999999999999)/2
j=new A.bKt()
for(i=34,h=0;h<4;++h){if(h===n||D.o.ao(n,2)!==D.o.ao(h,2))continue
g=D.k.F(v[h]-v[n],r)
if(g<0)g+=r
g-=k+(B.kn[h].a==="bus"?120:95.94999999999999)/2
if(g<400)i=Math.min(i,C.jY(j.$1(g-18)))}for(f=$.bFL(),e=f.length,d=r-30,u=0;u<f.length;f.length===e||(0,C.L)(f),++u){a0=f[u]
if(a0.a!==D.o.ao(n,2))continue
a1=A.h92(a0,b7.c)
if(a1===0)continue
a2=D.k.F(a0.b-(v[n]+k),r)
if(a2<0)a2+=r
if(a2>d)continue
if(a2<260)a3=!(a1===1&&a2<w[n]*1.2)
else a3=!1
if(a3)i=Math.min(i,C.jY(j.$1(a2-4)))}for(f=$.h_n(),u=0;u<2;++u){t=f[u]
a4=t.e[n]
if(a4<0)continue
e=v[n]
a2=D.k.F(a4-e,r)
if(a2<0)a2+=r
if(D.k.F(e-a4,r)<t.f[n]){if(t.r<0)t.r=n
continue}if(t.r===n)continue
e=w[n]
for(d=$.bFL(),a3=d.length,a5=b7.c,a6=!1,a7=0;a7<a3;++a7){a0=d[a7]
if(a0.a!==D.o.ao(n,2)||A.h92(a0,a5)===0)continue
a8=D.k.F(a0.b-(v[n]+k),r)
if((a8<0?a8+r:a8)<a2)a6=!0}if(t.r<0&&a2<40+e*e/220+20&&!a6){t.r=n
continue}if(a2<400)i=Math.min(i,C.jY(j.$1(a2-10)))}f=A.Le(m,v[n]).a
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
a5=Math.abs(-b3*b2+b4*b1)<a5/2+16}if(a5)i=Math.min(i,C.jY(j.$1(b5-k-10)))}b6=w[n]
l=b6<i?Math.min(i,b6+o):Math.max(i,b6-p)
w[n]=l
if(l<0){w[n]=0
l=0}v[n]=v[n]+l*b8}},
cWD(d,e,f){this.FF(0,f)
return A.Le(B.kn[e],this.a[e])},
cRf(d,e){var w,v,u,t,s,r,q,p,o,n,m,l
for(w=this.a,v=this.b,u=0;u<4;++u){if(v[u]<4)continue
t=B.kn[u]
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
A.cAS.prototype={
bAl(d,e){var w,v,u,t,s=this,r=x._,q=C.a([],r)
for(w=s.a.x,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u){t=w[u]
if(t.b==="ubstation")q.push(t)}s.c!==$&&C.aQ()
s.c=q
r=C.a([],r)
for(q=w.length,u=0;u<w.length;w.length===q||(0,C.L)(w),++u){t=w[u]
v=t.b
if(v==="house2"||v==="bighouse")r.push(t)}s.d!==$&&C.aQ()
s.d=r
s.UK(0)},
UK(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=g.d
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
n=C.pX(q)
n.v(0,new C.cQ(new C.Z(t,new A.cAU(o),r),new A.cAV(),s))
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
l=new A.Aj(l,B.djs[u.ap(12)],new A.tN(B.axH[u.ap(5)],B.Mb,B.drt[u.ap(6)],D.aJ,"human",!1,0,1),o,j,6+D.o.E(D.k.V(h/45),0,30),m)
l.x=d
t.push(l)}}},
aqv(d,e){var w,v,u,t=this.c
t===$&&C.c()
w=t.length
v=0
for(;v<t.length;t.length===w||(0,C.L)(t),++v){u=t[v]
if(Math.sqrt(Math.pow(u.c-d,2)+Math.pow(u.d-e,2))<150)return u}return null},
cWo(d,e){var w,v,u,t,s,r,q=this
if(q.f!=null)return null
w=q.aqv(d,e)
if(w==null)return null
v=C.a([],x.bz)
for(u=q.e,t=u.length,s=0;s<u.length;u.length===t||(0,C.L)(u),++s){r=u[s]
if(r.d===w)v.push(r)}if(v.length===0)return null
D.d.aY(v,new A.cAT())
r=D.d.gI(v)
D.d.W(u,r)
return q.f=r},
ga6X(d){var w=this.f
return w==null?null:A.yO(w.e)},
cOb(d,e,f){var w,v,u=this,t=u.f,s=u.ga6X(0)
if(t==null||s==null)return 0
if(Math.sqrt(Math.pow(s.a-d,2)+Math.pow(s.b-e,2))>70)return 0
u.f=null;++u.r
w=u.w
v=t.f
u.w=w+v
u.y=f+4
u.UK(f)
return v},
amr(d){var w,v,u,t,s,r,q,p
if(d<this.y)return B.I6
w=C.a([],x.B)
for(v=this.e,u=v.length,t=d*1.4,s=0;s<v.length;v.length===u||(0,C.L)(v),++s){r=v[s]
q=r.d
p=r.c
w.push(new A.a4p(r.ga8p().a,r.ga8p().b,Math.atan2(q.c-r.ga8p().a,q.d-r.ga8p().b)+3.141592653589793,t+r.a,!1,!1,p,p.c))}return w}}
A.pD.prototype={}
A.bKe.prototype={
gM7(){var w,v=this,u=v.r
if(u===$){w=A.hyZ(v.b)
v.r!==$&&C.bF()
v.r=w
u=w}return u},
ccg(){var w,v=this.a
A:{if("hospital"===v){w=B.cxe
break A}if("dmv"===v){w=B.drP
break A}if("shop"===v){w=B.cXy
break A}if("school"===v){w=B.d5R
break A}if("firestation"===v){w=B.dl5
break A}if("tower"===v){w=B.dfg
break A}w=B.dpO
break A}return w},
cH8(){var w,v=this.a
A:{if("hospital"===v){w=B.cxa
break A}if("dmv"===v){w=B.d7R
break A}if("shop"===v){w=B.d2q
break A}if("school"===v){w=B.df1
break A}if("firestation"===v){w=B.dc2
break A}if("tower"===v){w=B.dui
break A}w=B.cX2
break A}return w},
fv(d,e){var w,v,u,t,s,r,q,p=this,o=p.ax
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
t=p.c82(q,e)}if(t!=null)p.B(e)
return t},
c82(d,e){var w,v,u,t,s,r=this,q="The city is still loading.",p="The breaker panel on level "
switch(r.a){case"hospital":if(e==null)return q
if(d===0){w=e.gC6()
v=C.T(w).k("Z<1>")
u=C.C(new C.Z(w,new A.bKf(),v),v.k("M.E"))
if(u.length===0)return"The desk: nobody needs the hospital right now. "+e.x+" doses of medicine in stock."
return e.aDt(D.d.gI(u))}t=d-1
if(e.e[t].a<0)return"This bed is empty. Admit someone at the desk first."
return e.bk7(t)
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
return"The elevator: choose your level (you are on level "+r.f+" of "+r.gM7()+")."}if(d===2){r.x=!0
return"The balcony on level "+r.f+": the whole town is below you."}if(r.c){r.cy=!0
return p+r.f+". This office has no power. Let us find the wiring fault."}return p+r.f+": every breaker is on and the office has power."
default:if(d===0){if(r.c){r.cy=!0
return"The breaker panel. This house has no power. Let us find the wiring fault."}return"The breaker panel: every breaker is on and the house has power."}return r.c?"The outlet is dead: there is no power in this house.":"The outlet works. Everything here is wired right."}},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this
g.ch=d
w=g.a
if(w==="cabin"){g.bF4()
return}v=C.a([],x.z)
u=new A.fl(v)
t=C.a([],x.E)
A:{if("hospital"===w){s=B.eFi
break A}if("shop"===w){s=B.ez6
break A}if("dmv"===w){s=B.eBu
break A}if("school"===w){s=B.eSB
break A}if("firestation"===w){s=B.eGh
break A}if("tower"===w){s=new C.z(g.c?B.ag1:B.brK,B.bgP)
break A}s=new C.z(g.c?B.ag1:B.bpy,B.jr)
break A}r=s.a
u.f=-1
u.nc(B.h7O,B.h60,s.b,0.2,3)
u.f=0
u.x=$.dS=$.dS+1
u.hr(B.h5b,B.aX_,r,3)
u.x=0
u.x=$.dS=$.dS+1
u.hr(B.h3Z,B.aaX,r,3)
u.x=0
s=w==="tower"
if(s){u.f=3
u.d=0.18
u.aP(B.aXb,B.aaX,B.Z8)
u.d=1
u.f=0}else{u.x=$.dS=$.dS+1
u.hr(B.aXb,B.aaX,r,3)
u.x=0}u.f=0
q=s&&g.f>1
p=$.dS+1
if(q){u.x=$.dS=p
u.hr(B.h6e,B.aX_,r,3)
u.x=0}else{u.x=$.dS=p
u.hr(new A.q(-94,70,320.6),new A.q(113.2,140,1.2),r,2)
u.x=0
u.x=$.dS=$.dS+1
u.hr(new A.q(94,70,320.6),new A.q(113.2,140,1.2),r,2)
u.x=0
u.x=$.dS=$.dS+1
u.aP(new A.q(0,102,320.6),new A.q(76,76,1.2),r)
u.x=0
u.x=$.dS=$.dS+1
u.aZ(B.h8T,B.he0,B.bcd,0.5)
u.x=0}u.f=1
for(o=0;o<3;++o){n=B.dlM[o]
u.aP(new A.q(n,78,0.6),B.hdz,B.kD)
u.aZ(new A.q(n,78,0.8),B.h4g,B.i0,0.6)}for(q=!s,o=0;o<2;++o){m=B.cEB[o]
u.aP(new A.q(-149.6,78,m),B.aWR,B.kD)
u.aZ(new A.q(-149.2,78,m),B.aXt,B.i0,0.6)
if(q){u.aP(new A.q(149.6,78,m),B.aWR,B.kD)
u.aZ(new A.q(149.2,78,m),B.aXt,B.i0,0.6)}}u.aP(B.h8Z,B.hdZ,B.kD)
u.aP(B.h9a,B.h1P,D.bO)
u.f=2
u.r=!0
for(q=w!=="house2",p=w==="bighouse",o=0;o<3;++o){n=B.dmc[o]
for(l=0;l<2;++l){m=B.cEC[l]
u.dN(new A.q(n,138,m),new A.q(n,122,m),0.5,D.jd,4)
k=(!q||p||s)&&g.c?D.hi:B.o4
u.ec(new A.q(n,120,m),5,k,3,6)}}switch(w){case"hospital":g.c_C(u,t,d)
break
case"shop":g.cw9(u,t)
break
case"dmv":g.bNK(u,t)
break
case"school":g.ctR(u,t)
break
case"firestation":g.czn(u,t)
break
case"tower":g.cDt(u,t)
break
default:u.f=1
u.aP(B.hfc,B.hao,g.c?B.q7:B.agq)
u.f=2
u.aZ(B.hcB,B.h_m,B.Ym,0.1)
u.aZ(B.hcC,B.h_n,B.M1,0.1)
u.aZ(B.h_4,B.h3G,B.nT,0.2)
u.aZ(B.h5q,B.heR,E.Fr,0.4)
u.aP(B.h_N,B.h0o,B.aha)
u.ec(B.hc3,10,B.F_,3,6)
g.baV(u,t)}u.f=1
if(s&&g.f>1)t.push(B.c0L)
else{u.aP(B.h9q,B.h6N,D.cT)
t.push(B.c0K)}if(d!=null){w=d.r
k=d.w
j=d.x
i=g.cx!=null?"   \ud83d\udce6 carrying":""
t.push(new A.hh(B.fYt,"\u2b50 "+w+"   \ud83c\udf5e "+k+"   \ud83d\udc8a "+j+i,D.N,0))}h=C.a([],x.a)
if(s){u.f=2
u.e=0
u.aZ(B.h_h,B.aWV,D.av,0.3)
u.aZ(B.h5w,B.aWV,D.av,0.3)
u.aZ(B.h9j,B.hdC,D.av,0.3)
w=x.o
h.push(new A.fP(C.a([B.h4Z,B.h9J,B.h8G,B.hbs],w),0,new A.bKm(g),960,560,60,2,0,!1))
h.push(new A.fP(C.a([B.h2k,B.hfi,B.h1m,B.hdx],w),0,new A.bKn(g),960,560,60,2,0,!1))
h.push(new A.fP(C.a([B.hdk,B.fY8,B.h4k,B.h6W],w),0,new A.bKo(g),960,560,60,2,0,!1))}if((!q||p)&&!g.c)h.push(new A.fP(C.a([B.hab,B.h6b,B.h8L,B.h8F],x.o),0,new A.bKp(g),960,480,60,2,0,!1))
g.ay=new A.tT(v,B.Sf,t,h,null,0)},
rw(d,e,f,g,h){var w=d.f
d.f=1
d.dN(new A.q(e,0.2,f),new A.q(e,0.6,f),g,h,20)
d.f=w},
c_C(d,e,f){var w,v,u,t,s,r,q,p,o
d.f=1
d.aP(B.aVU,B.h22,D.bz)
d.aP(B.aVU,B.h_x,D.bz)
d.f=2
d.aZ(B.hcY,B.h4L,B.nT,0.15)
d.aZ(B.hcZ,B.h53,D.bN,0.3)
d.aP(B.hc0,B.h3V,D.aK)
this.rw(d,-80,66,22,D.co)
e.push(B.c0R)
e.push(B.c0G)
for(w=0;w<2;++w)d.aP(new A.q(-105,8,B.cf8[w]),B.h3i,D.bs)
d.ec(B.h_U,9,B.F_,3,6)
for(v=f!=null,u=0;u<3;++u){t=48+u*50
d.aP(new A.q(76,8,t),B.h4I,D.cq)
d.aP(new A.q(76,14,t),B.h4D,D.aP)
d.aP(new A.q(108,18,t),B.h_S,D.c)
s=v&&u<f.e.length?f.e[u]:null
if(s!=null&&s.a>=0){r=f.c
r===$&&C.c()
q=r[s.a]
r=s.b>70?D.be:D.c7
d.aP(new A.q(54,24,t),B.h25,r)
r=s.b>70
p=r?"cared for":"needs treatment"
r=r?D.ei:D.bz
e.push(new A.hh(new A.q(76,40,t),q.a.b+"  "+p,r,0))}else e.push(new A.hh(new A.q(76,30,t),"Free bed "+(u+1),D.bs,0))
r=t-2
o=d.f
d.f=1
d.dN(new A.q(20,0.2,r),new A.q(20,0.6,r),16,D.aE,20)
d.f=o}},
bNK(d,e){var w,v,u,t,s
d.f=2
d.r=!0
d.x=$.dS=$.dS+1
d.aZ(B.aVL,B.h03,D.bs,0.15)
d.aZ(B.aVN,B.h05,D.bN,0.3)
d.aZ(B.hcv,B.h1b,D.av,0.3)
d.aZ(B.hbC,B.h5Y,D.b8,0.5)
d.aP(B.hcu,B.h3X,D.aJ)
d.aP(B.h1W,B.h0n,D.bu)
d.x=0
d.x=$.dS=$.dS+1
d.aP(B.aWo,B.aVX,D.cr)
d.aP(B.aWk,B.aW1,D.bl)
d.ec(B.aWl,5.5,B.afo,5,8)
d.ec(B.aWm,5.7,D.av,3,8)
d.x=0
d.x=$.dS=$.dS+1
d.aP(B.hc7,B.h2s,D.aP)
for(w=0;w<3;++w){v=90+w*30
d.aDR(new A.q(-146,62,v),B.h0N,[D.bz,D.bu,D.bl][w],0)
d.aP(new A.q(-145.6,62,v),B.hdt,D.c)}d.aP(B.h07,B.h2r,D.fU)
d.aP(B.h8i,B.heh,D.c)
d.aP(B.h7w,B.hd9,D.bz)
d.x=0
for(u=0;u<4;++u){t=B.dlN[u]
d.x=$.dS=$.dS+1
d.aP(new A.q(t,9,150),B.h1h,D.bl)
d.aP(new A.q(t,17,160),B.h1c,D.bl)
d.aP(new A.q(t-8,4,150),B.aWf,D.aJ)
d.aP(new A.q(t+8,4,150),B.aWf,D.aJ)
d.x=0}d.x=$.dS=$.dS+1
d.aP(B.fZw,B.h47,D.bM)
d.aZ(B.fYA,B.h37,D.ax,0.4)
d.aZ(B.hcH,B.h1x,D.dt,0.5)
for(u=0;u<2;++u){t=E.aAt[u]
for(s=0;s<2;++s){v=B.cf1[s]
d.dN(new A.q(t,9,v-1.5),new A.q(t,9,v+1.5),5,D.av,8)}}d.x=0
this.rw(d,0,78,24,D.aK)
e.push(B.c0O)
e.push(B.c0H)
e.push(B.c0P)},
aVe(a5,a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=a6*128
A:{if(1===a7){w=B.db4
break A}if(2===a7){w=B.dcs
break A}w=B.d67
break A}a5.x=$.dS=$.dS+1
a5.aP(new A.q(a6*148,40,120),B.h2X,B.afl)
for(v=0;v<2;++v)a5.aP(new A.q(a4,40,B.cIP[v]),B.h2D,B.afl)
a5.aP(new A.q(a4,4,120),B.h2E,B.biW)
for(u=0;u<4;++u)a5.aZ(new A.q(a4,11+u*18,120),B.h2z,B.bsh,0.1)
for(t=a7===0,s=w.length,r=a6*2.7,u=0;u<4;++u){q=12+u*18
for(p=q+6.6,o=q+3.2,n=u*7,m=q+10,l=q+12.5,k=q+7,j=q+8,i=q+2.5,h=q+5.5,g=0;g<9;++g){f=76+g*11
for(e=n+g*3,d=u+g+a7,a0=0;a0<2;++a0){a1=a6*(114+a0*14)
a2=w[D.o.F(e+a0*5+a7,s)]
switch(D.o.F(d+a0,4)){case 0:a5.dR(new A.q(a1,q,f),new A.q(a1,j,f),3.2,a2,0.3,8)
a5.L8(new A.q(a1,i,f),new A.q(a1,h,f),3.3,D.c,!1,8)
break
case 1:a5.aZ(new A.q(a1,k,f),B.h6D,a2,0.1)
a5.aP(new A.q(a1-r,j,f),B.ha3,D.c)
break
case 2:a5.dR(new A.q(a1,q,f),new A.q(a1,m,f),2.4,a2,0.45,8)
a5.dN(new A.q(a1,m,f),new A.q(a1,l,f),1.2,D.c,6)
break
default:a3=t?B.bso:a2
a5.aZ(new A.q(a1,o,f),B.h9t,a3,0.05)
a3=t?B.bfp:D.c
a5.aP(new A.q(a1,p,f),B.h5l,a3)}}}}a5.x=0},
aUb(d,e){var w,v,u,t,s,r,q,p
d.x=$.dS=$.dS+1
d.aZ(new A.q(e,32,11),B.h3j,D.bO,0.3)
d.aP(new A.q(e,33,22.4),B.h38,D.bo)
for(w=e-21,v=0;v<3;++v){u=v*17
d.aP(new A.q(e,15+u,21),B.h33,D.bM)
for(t=16+u,u=27+u,s=v*2,r=0;r<7;++r){q=w+r*7
d.dR(new A.q(q,t,21.6),new A.q(q,u,21.6),2.2,B.d0F[D.o.F(r+s,6)],0.5,6)}}d.x=0
p=d.f
d.f=3
d.d=0.2
d.aP(new A.q(e,33,23.2),B.heY,B.Z8)
d.d=1
d.f=p},
cw9(d,e){var w,v,u,t,s,r,q,p,o,n=this,m=n.b.b==="gasstation"
d.f=2
d.r=!0
d.x=$.dS=$.dS+1
d.aZ(B.aVL,B.h_M,B.nT,0.15)
d.aZ(B.aVN,B.h_O,D.bN,0.3)
d.aP(B.h6r,B.hes,B.bsv)
d.aZ(B.hcp,B.h10,D.e7,0.3)
d.aZ(B.hcr,B.h0p,D.b8,0.5)
d.aP(B.fZn,B.h_y,D.av)
for(w=0;w<6;++w)d.aP(new A.q(14+w*7.5,33,47),B.h3x,B.drw[D.o.F(w,4)])
d.x=0
d.x=$.dS=$.dS+1
d.aP(B.aWo,B.aVX,D.cr)
d.aP(B.aWk,B.aW1,D.cT)
d.aP(B.h9C,B.h7N,D.vN)
d.ec(B.aWl,5.5,B.afo,5,8)
d.ec(B.aWm,5.7,B.bgy,3,8)
d.x=0
n.aVe(d,-1,0)
n.aVe(d,1,m?2:1)
n.aUb(d,-104)
n.aUb(d,104)
for(v=[B.ezv,B.eON],u=0;u<2;++u){t=v[u]
s=t.a
r=t.b
d.x=$.dS=$.dS+1
d.aP(new A.q(s,5,170),B.h2g,B.aha)
d.aP(new A.q(s,11,160),B.h2i,B.bjG)
for(t=s-13.5,q=J.a6(r),w=0;w<4;++w)for(p=t+w*9,o=0;o<3;++o)d.ec(new A.q(p,12.5,163+o*7.5),4.2,q.h(r,D.o.F(w+o,3)),4,6)
d.x=0}d.x=$.dS=$.dS+1
d.aP(B.aVH,B.h_F,m?D.bz:D.cT)
d.aP(B.hc_,B.aWc,D.aE)
d.aP(B.h_H,B.aWc,m?D.bo:D.aK)
d.x=0
n.rw(d,-64,120,24,D.bu)
n.rw(d,64,120,24,D.br)
n.rw(d,0,84,22,D.bf)
e.push(new A.hh(B.fYn,m?"\u26fd NGMY Gas shop":"\ud83d\uded2 NGMY Mart",D.N,0))
e.push(B.c0I)
e.push(new A.hh(B.h4H,m?"\ud83d\udee2 For the car":"\ud83d\udc8a Medicine and health",D.iR,0))
e.push(B.c0S)
e.push(B.c0J)
e.push(B.c0T)},
ctR(d,e){var w,v,u,t,s
d.aZ(B.h__,B.hfx,D.e_,0.1)
d.aP(B.hee,B.haP,B.bo6)
d.aZ(B.fYC,B.h_V,B.nT,0.15)
for(w=0;w<4;++w){v=B.ddX[w]
u=v.a
t=v.b
for(s=0;s<2;++s){v=u+B.a51[s]
d.aP(new A.q(v,10,t),B.h14,B.jr)
d.aP(new A.q(v,5,t),B.h1C,D.bm)}}this.rw(d,0,80,24,D.bu)
this.rw(d,90,56,20,D.co)
e.push(B.c0E)
e.push(B.c0M)},
czn(d,e){var w,v,u,t,s
d.aZ(B.fYw,B.h0C,D.bz,0.3)
d.aZ(B.hcM,B.h3E,D.bz,0.3)
for(w=0;w<2;++w){v=B.dm8[w]
for(u=0;u<2;++u){t=B.ct8[u]
d.dN(new A.q(v,6,t-1.5),new A.q(v,6,t+1.5),8,D.nh,10)}}for(s=0;s<5;++s)d.aP(new A.q(-142,30,110+s*18),B.h_z,D.al)
d.dN(B.h_D,B.h_E,2,D.bu,6)
this.rw(d,-60,130,24,D.aE)
this.rw(d,80,56,20,D.co)
e.push(B.c0C)
e.push(B.c0N)},
cDt(d,e){var w,v,u,t,s,r,q,p,o,n=this
d.f=1
d.aP(B.hdT,B.h7S,B.dsP[D.o.F(n.f,5)])
d.f=2
d.b=19502
d.aP(B.h5O,B.h4M,D.N)
d.aZ(B.h3q,B.aWA,D.bs,0.5)
d.aZ(B.h1J,B.aWA,D.bs,0.5)
d.aZ(B.h2d,B.h_p,D.bs,0.5)
d.e=16
d.aZ(B.h_b,B.h5e,D.b8,0.4)
d.aP(B.h6C,B.h2v,D.av)
d.aP(B.hbB,B.h_w,D.e7)
d.ec(B.h6m,2,D.bu,3,5)
d.ec(B.h2T,2,D.bf,3,5)
d.b=d.e=0
n.rw(d,0,70,26,D.aK)
for(w=0;w<3;++w){v=B.cX7[w]
u=v.a
t=v.b
d.aZ(new A.q(u,15,t),B.h2H,B.nT,0.2)
d.aP(new A.q(u-19,7,t),B.aWr,D.jd)
d.aP(new A.q(u+19,7,t),B.aWr,D.jd)
d.aZ(new A.q(u,24,t-4),B.h08,E.Fr,0.5)
d.aP(new A.q(u,9,t+18),B.h0f,D.cr)
d.aP(new A.q(u,16,t+25),B.h0a,D.cr)}n.rw(d,105,100,26,D.bf)
d.d=0.3
d.f=3
d.aP(new A.q(144,14,100),B.h2U,B.Z8)
d.d=1
d.f=2
for(w=0;w<5;++w)d.aZ(new A.q(144,14,B.d48[w]),B.h8a,D.dv,0.5)
d.ec(B.h_X,10,B.F_,3,6)
d.aP(B.h_Q,B.h1Z,B.nT)
s=-(n.f*22)
d.f=-1
d.aP(new A.q(520,s-1,105),B.h51,B.Xy)
d.aP(B.h48,B.h1F,B.i0)
d.f=1
for(v=n.b.a,r=v*7,q=0;q<15;++q){p=30+D.o.F(r+q*13,90)
o=B.d9p[D.o.F(v+q,4)]
d.aP(new A.q(215+D.o.F(q,5)*80,s+p/2,-60+D.o.ao(q,5)*135),new A.q(38,p,38),o)}e.push(new A.hh(B.fYl,"\ud83c\udfe2 LEVEL "+n.f+" of "+n.gM7(),D.dF,19502))
e.push(B.c0D)
e.push(B.c0F)
n.baV(d,e)},
bF4(){var w,v,u,t=C.a([],x.z),s=new A.fl(t)
s.f=-1
s.aZ(B.h7k,B.he4,D.bs,0.3)
s.f=0
s.x=$.dS=$.dS+1
s.aZ(B.hcx,B.aWb,B.afT,0.4)
s.x=0
s.x=$.dS=$.dS+1
s.aZ(B.h2f,B.aWb,B.afT,0.4)
s.x=0
s.f=1
s.aP(B.fYi,B.h4e,D.aN)
s.f=2
s.r=!0
for(w=0;w<2;++w)s.aZ(new A.q(B.aAv[w],40,38),B.h6T,D.bM,0.7)
s.aZ(B.h_c,B.hb8,D.xS,0.2)
for(w=0;w<2;++w)s.aZ(new A.q(B.dlV[w],45,80),B.h0A,D.aJ,0.3)
s.aZ(B.h_9,B.h4d,D.aJ,0.3)
s.aP(B.fZP,B.h2b,D.al)
s.aZ(B.her,B.aXi,D.av,0.3)
s.aZ(B.h7C,B.aXi,D.av,0.3)
v=this.as
D.d.aa(v)
u=x.o
v.push(new A.fP(C.a([B.h8l,B.h6A,B.ha2,B.hdI],u),0,new A.bKg(this),520,230,6,2,0,!1))
v.push(new A.fP(C.a([B.h5c,B.h5u,B.hdw,B.hav],u),0,new A.bKh(),720,600,30,2,0,!1))
v.push(new A.fP(C.a([B.h8j,B.hbA,B.h9h,B.h7R],u),0,new A.bKi(),720,600,30,2,0,!1))
v=C.C(v,x.K)
this.ay=new A.tT(t,B.Sf,B.zs,v,null,0)},
baV(d,e){var w,v,u,t,s,r,q,p,o=this,n="dead, tap to fix it"
d.b=19500
d.aZ(B.hc6,B.h3w,B.XC,0.5)
for(w=0;w<4;++w){v=o.c&&w===0?D.cd:B.Zb
d.aP(new A.q(-144.2,62-w*6,45),B.h74,v)}d.b=0
o.rw(d,-100,100,22,o.c?D.ax:D.bf)
o.rw(d,90,100,22,D.co)
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
d.aP(B.h2R,B.h0S,o.c?D.ax:D.bf)
d.b=19501
d.aP(B.h54,B.h5J,t?D.bf:D.ax)
d.aP(B.hcP,B.h66,s?D.bf:D.ax)
d.aP(B.h76,B.h98,r?D.bf:D.ax)
d.d=1
d.aZ(B.hbM,B.h6j,B.MC,0.25)
for(q=0;q<2;++q)for(u=26+F.hB[q]*3.4,p=0;p<2;++p)d.aP(new A.q(95+B.Rh[p],u,2.6),B.h7Z,B.agX)
d.aZ(B.hdV,B.h9Q,B.MC,0.25)
d.aP(new A.q(-60,s?52:48,2.8),B.h1E,B.aiJ)
d.b=0
d.f=2
if(o.c)v=v.length===0?"\u26a1 Breaker panel: tap to switch the power on":"\u26a1 Breaker panel: still to fix: "+D.d.aG(v,", ")
else v="\u26a1 Breaker panel: all fine"
e.push(new A.hh(B.hc5,v,o.c?D.bz:D.ei,19500))
v=new A.bKj(o)
u=t?"\ud83d\udd0c Outlets: fixed":"\ud83d\udd0c Outlet: "+C.w(v.$2(D.a32,n))
e.push(new A.hh(B.h55,u,t?D.ei:D.bz,19501))
u=s?"\ud83d\udca1 Switch: fixed":"\ud83d\udca1 Switch: "+C.w(v.$2(B.cqZ,"no power, tap to fix it"))
e.push(new A.hh(B.hcQ,u,s?D.ei:D.bz,19501))
v=r?"\ud83d\udca1 Ceiling light: fixed":"\ud83d\udca1 Ceiling light: "+C.w(v.$2(B.cjv,n))
e.push(new A.hh(B.fYm,v,r?D.ei:D.bz,19501))
if(o.c)e.push(B.c0B)},
cOf(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=x.z,i=C.a([],j),h=new A.fl(i),g=k.a,f=g==="tower"
if(f||g==="cabin"){w=C.a([],j)
v=new A.fl(w)
if(f){v.e=16
for(u=0;u<2;++u)v.aZ(new A.q(F.hB[u]*(24+21*k.y),42,6.6),B.hdv,D.aP,0.7)}else{v.e=16
for(u=0;u<2;++u)v.aZ(new A.q(F.hB[u]*(9+18*k.y),40,78.6),B.h0z,D.aN,0.7)}D.d.v(i,w)}switch(g){case"shop":A.wN(h,B.epZ,d,B.Jh,!1,0,D.b6)
break
case"hospital":A.wN(h,B.eq2,d,B.Tk,!1,0,D.bP)
t=D.k.F(d*12,220)
g=t<110
f=g?t:220-t
g=g?0:3.141592653589793
A.wN(h,A.atR(!1,0,-1,"",!1,0,"",-1,t/12,!1,!1,!1,0,!1,!0,6,g,40+f),d,B.Jh,!1,0,D.bO)
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
A.wN(new A.fl(f),B.eq1,d,p,!1,0,p.c)
D.d.v(i,A.nC(f,-1.5707963267948966,-1.5707963267948966,new A.q(46,27,48+r*50)))}++r}}break
case"school":A.wN(h,B.eq3,d,B.Tk,!1,0,D.bl)
for(u=0;u<3;++u){g=B.d7J[u]
A.wN(h,new A.y3(0,g.a,g.b,3.141592653589793,!1,!1,!1,!1,!1,0,!1,!1,"","",-1,0,-1,0),d,B.Jh,!1,0,g.c)}break
case"firestation":A.wN(h,B.eq_,d,B.Jh,!1,0,D.bz)
A.wN(h,B.eq0,d,B.Tk,!1,0,D.aE)
break
default:break}g=k.at
g===$&&C.c()
f=g.f
w=g.r
o=g.w
n=g.x
m=g.y
l=g.z&&n
A.wN(h,A.atR(!1,0,-1,"",!1,g.Q,"",-1,m,!1,!1,!1,0,l,n,f,o,w),d,e,!0,0,null)
if(k.cx!=null){j=C.a([],j)
new A.fl(j).aP(new A.q(g.f+Math.sin(g.w)*9,48+g.Q,g.r+Math.cos(g.w)*9),B.aW2,B.jr)
D.d.v(i,j)}return i},
gdc(d){return this.e}}
A.Fp.prototype={}
A.P0.prototype={
gUo(){var w,v=this
if(!v.f)return"has died"
if(v.r>=0)return"in hospital"
if(v.c<30)return"in danger"
if(v.e)return"sick"
w=v.b
if(w>80)return"starving"
if(w>55)return"hungry"
if(v.d<40)return"unhappy at home"
return"fine"},
gaDM(d){var w,v=this.gUo()
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
A.aU0.prototype={
bzo(d,e){var w,v=C.a([],x.fP)
for(w=0;w<7;++w)v.push(new A.P0(B.CK[w]))
this.c=v
v[1].b=55
v[4].b=40},
gC6(){var w,v,u,t=C.a([],x.fP),s=this.c
s===$&&C.c()
w=s.length
v=0
for(;v<s.length;s.length===w||(0,C.L)(s),++v){u=s[v]
if(u.f)t.push(u)}return t},
gcNa(){var w=this.c
w===$&&C.c()
return new C.Z(w,new A.bL3(),C.T(w).k("Z<1>")).gL(0)},
PR(d){var w=this.f
D.d.c6(w,0,d)
if(w.length>12)w.pop()},
aDu(a2,a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=this
a1.as+=a3
for(w=a1.gC6(),v=w.length,u=-0.6*a3,t=0.8*a3,s=0.2*a3,r=a1.b,q=0.012*a3,p=a1.f,o=0.15*a3,n=0;n<w.length;w.length===v||(0,C.L)(w),++n){m=w[n]
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
m.c=l}}if(l<=0)a1.aSf(m)}}for(w=a1.e,v=1.2*a3,u=2.2*a3,d=0;d<w.length;++d){a0=w[d]
t=a0.a
if(t<0)continue
s=a1.c
s===$&&C.c()
m=s[t]
if(!m.f){a0.a=-1
continue}t=a0.b=Math.max(0,a0.b-a3)
if(t>30)a0.c=Math.min(100,a0.c+u)
else if(t<=0)if((m.c-=v)<=0){a1.aSf(m)
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
a1.cIA(a4)}},
aSf(d){var w
d.f=!1
d.c=0
w=d.r
if(w>=0)this.e[w].a=-1
d.r=-1
D.d.bs(this.d,new A.bL0(d))
this.PR(d.a.b+" has died. Keep up with everybody's needs: food, medicine and a home that works.")},
aW2(d,e){return D.d.b3(this.d,new A.bL1(d,e))},
NE(d){var w,v,u,t,s,r,q,p,o,n=this,m=n.d,l=C.C(m,x.fC),k=l.length,j=n.f,i=0
for(;i<l.length;l.length===k||(0,C.L)(l),++i){w=l[i]
v=B.CK[w.b]
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
if(j.length>12)j.pop()}}for(l=n.gC6(),k=l.length,u=n.b,i=0;i<l.length;l.length===k||(0,C.L)(l),++i){q=l[i]
if(m.length>=4)break
t=d.d
t===$&&C.c()
r=q.a
p=t[r.c]
if(!p.gkO()&&!n.aW2(r.a,"power")){m.push(new A.I7(n.Q++,r.a,"power",B.d0s[u.ap(3)],15))
D.d.c6(j,0,r.b+" is calling for help: no power.")
if(j.length>12)j.pop()}t=r.d
o=t>=0?d.d[t]:p
t=o.c
if((t==="bathroom"||t==="kitchen")&&!o.gjR()&&!n.aW2(r.a,"leak")&&m.length<4){m.push(new A.I7(n.Q++,r.a,"leak",B.d9e[u.ap(3)],15))
D.d.c6(j,0,r.b+" is calling for help: a leak.")
if(j.length>12)j.pop()}}},
cIA(d){var w,v,u,t,s,r,q=this
if(q.d.length>=3||q.gC6().length===0)return
w=q.b
v=q.gC6()[w.ap(q.gC6().length)]
u=d.d
u===$&&C.c()
t=v.a
s=u[t.c]
t=t.d
r=t>=0?u[t]:s
u=r.c
if((u==="bathroom"||u==="kitchen")&&r.gjR()&&w.hl()){r.ch=!0
r.fr=null}else if(s.gkO()){s.ay=!0
s.CW=null
s.fy=!1
s.fx.aa(0)}else return
q.NE(d)},
beV(d){var w,v,u,t=this
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
aKS(d){var w,v,u=this
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
aDt(d){var w,v,u,t
if(!d.f)return d.a.b+" has died."
if(d.r>=0)return d.a.b+" is already in hospital."
if(!d.e&&d.c>60)return d.a.b+" is not ill enough for the hospital."
w=this.e
v=D.d.bh(w,new A.bL2())
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
bk7(d){var w,v,u=this,t=u.e[d],s=t.a
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
aDZ(d){var w,v=this
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
cSe(d){return d.r<0},
bf5(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=C.a([],x.e3),e=d.d
e===$&&C.c()
w=e[a0]
if(w.c!=="outside")return f
v=new A.bL5(new A.bL7(w))
for(e=D.d.gag(this.gC6()),u=new C.f5(e,this.gcSd()),t=this.d,s=0;u.C();){r=e.gS(0)
q=D.d.b3(t,new A.bL4(r))
p=v.$2(r,s).a
o=p[0]
n=p[1]
m=p[2]
l=p[3]
k=p[4]
p=r.a
j=q?0.4:m
i=q?"\ud83d\udcde ":""
h=r.gaDM(0)
r.gUo()
r=q?"":l
g=q?"":k
f.push(new A.aa1(p.a,a0,o,n,j,p.e,i+p.b+" "+h,q,0,r,g));++s}return f},
cZ6(a2){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=l.r,j=l.w,i=l.x,h=l.y,g=l.z,f=l.as,e=l.Q,d=x.ez,a0=C.a([],d),a1=l.c
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
for(r=D.d.gag(a2.gqT()),q=new C.f5(r,new A.bL8());q.C();){m=r.gS(0)
w.n(0,""+m.a,m.gjR())}return C.H(["v",1,"seed",l.a,"points",k,"food",j,"medicine",i,"served",h,"saved",g,"clock",f,"nextCall",e,"res",a0,"beds",a1,"calls",d,"wired",u,"plumbed",w],v,x.A)},
CU(d,e){return this.bog(0,e)},
bog(d,e){var w=0,v=C.j(x.H),u=1,t=[],s=this,r,q,p,o
var $async$CU=C.e(function(f,g){if(f===1){t.push(g)
w=u}for(;;)switch(w){case 0:u=3
w=6
return C.b(C.az(),$async$CU)
case 6:r=g
q=C.dR(s.cZ6(e),x.N,x.A)
J.aI(q,"at",Date.now())
w=7
return C.b(r.au("String","ngmy_community_v1",D.X.aq(q,null)),$async$CU)
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
A.apJ.prototype={
R(){return new A.bkN()}}
A.bkN.prototype={
gbjS(){var w=this.r
return w===$?this.r=this.a.c:w},
Z(){this.a2()
this.a_2()},
a_2(){return this.c2x()},
c2x(){var w=0,v=C.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$a_2=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:m={}
w=3
return C.b(A.aU2(),$async$a_2)
case 3:l=e
if(t.c==null){w=1
break}m.a=null
if(l!=null){s=J.a6(l)
r=C.aK(s.h(l,"seed"))
q=r==null?null:D.k.N(r)
if(q==null)q=1
r=$.Eb
if((r==null?null:r.b)===q){r.toString
t.e=r}else{r=A.aWt(q)
t.e=$.Eb=r
A.hea(r,l)}m.a=A.h0j(l)
r=Date.now()
s=C.aK(s.h(l,"at"))
s=s==null?null:D.k.N(s)
p=D.k.E((r-(s==null?Date.now():s))/1000*0.15,0,90)
while(p>0){o=p>5?5:p
s=m.a
r=t.e
r===$&&C.c()
s.aDu(0,o,r)
p-=o}}else{s=$.Eb
if(s==null)s=$.Eb=A.aWt(D.o.F(Date.now(),1e5))
t.e=s
s=s.b
n=A.h0i(s,s)
m.a=n
n.NE(t.e)}$.ajX=m.a
t.m(new A.dSn(m,t))
t.f=C.dh(D.fA,new A.dSo(t))
case 1:return C.h(u,v)}})
return C.i($async$a_2,v)},
c87(){var w,v,u,t=this,s=t.d
if(s==null||t.c==null)return
w=s.f
v=w.length===0?"":D.d.gI(w)
u=t.e
u===$&&C.c()
s.aDu(0,1,u)
if(w.length!==0&&D.d.gI(w)!==v)t.J5(D.d.gI(w))
if(++t.y%8===0)s.CU(0,t.e)
t.m(new A.dSA())},
q(){var w,v=this,u=v.f
if(u!=null)u.a4(0)
u=v.x
if(u!=null)u.a4(0)
u=v.d
if(u!=null){w=v.e
w===$&&C.c()
u.CU(0,w)}v.a1()},
J5(d){var w=this,v=w.x
if(v!=null)v.a4(0)
w.m(new A.dSu(w,d))
w.x=C.cG(D.u3,new A.dSv(w))},
abW(d){return this.bU5(d)},
bU5(d){var w=0,v=C.j(x.H),u,t=this,s,r,q
var $async$abW=C.e(function(e,f){if(e===1)return C.f(f,v)
for(;;)switch(w){case 0:q=B.CK[d.b]
if(d.c==="power")s=q.c
else{r=q.d
s=r>=0?r:q.c}r=t.e
r===$&&C.c()
r.e=s
r=t.c
r.toString
w=3
return C.b(C.a4(r,!1).cc(C.e0(new A.dSj(),!1,null,x.H)),$async$abW)
case 3:if(t.c==null){w=1
break}r=t.d
if(r!=null)r.NE(t.e)
r=t.d
if(r!=null)r.CU(0,t.e)
t.m(new A.dSk())
case 1:return C.h(u,v)}})
return C.i($async$abW,v)},
akc(d){return this.cG1(d)},
cG1(d){var w=0,v=C.j(x.H),u,t=this,s
var $async$akc=C.e(function(e,f){if(e===1)return C.f(f,v)
for(;;)switch(w){case 0:s=t.e
s===$&&C.c()
s.e=d.a.c
s=t.c
s.toString
w=3
return C.b(C.a4(s,!1).cc(C.e0(new A.dSD(),!1,null,x.H)),$async$akc)
case 3:if(t.c==null){w=1
break}s=t.d
if(s!=null)s.NE(t.e)
t.m(new A.dSE())
case 1:return C.h(u,v)}})
return C.i($async$akc,v)},
a_3(d,e){var w=null,v=e.j(0.18),u=C.n(14),t=C.J(e.j(0.7),D.r,1)
return C.p(w,C.d(d,w,w,w,w,w,w,C.l(w,w,e,w,w,w,w,w,w,w,w,12.5,w,w,D.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),D.f,w,w,new C.o(v,w,t,u,w,w,D.n),w,w,w,w,N.ajQ,w,w,w)},
WD(d,e,f){var w=null
return new C.D(D.no,C.B(C.a([new C.a5(62,w,C.d(d,w,w,w,w,w,w,A5.a9S,w,w,w),w),C.E(C.bx(C.n(6),C.kx(D.bC,w,w,8,w,D.k.E(e/100,0,1),new C.m8(f,x.dw)),D.ap),1)],x.p),D.m,w,D.e,D.i,0,w,w),w)},
PS(d,e,f){var w=null,v=e==null,u=v?D.ds:f.j(0.22),t=C.n(12),s=C.J(v?D.aY:f,D.r,1)
return C.aB(w,C.p(w,C.d(d,w,w,w,w,w,w,C.l(w,w,v?D.bZ:f,w,w,w,w,w,w,w,w,12.5,w,w,D.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),D.f,w,w,new C.o(u,w,s,t,w,w,D.n),w,w,w,w,D.nq,w,w,w),D.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,e,w,w,w,w,w,w,!1,D.a3)},
aes(d,e){return this.PS(d,e,D.aE)},
PT(d,e){var w=null,v=C.a([e.j(0.1),B.Fw],x.O),u=C.n(18)
return C.p(w,d,D.f,w,w,new C.o(w,w,C.J(e.j(0.5),D.r,1),u,w,new C.a9(D.b_,D.b5,D.x,v,w,w),D.n),w,w,w,D.d2,D.bg,w,w,w)},
c83(d){return this.PT(d,D.aY)},
b__(d,e,f){var w,v=null,u=this.gbjS()===d,t=u?D.aE.j(0.22):D.c.j(0.06),s=C.n(14),r=u?D.aE:D.aY
r=C.J(r,D.r,u?2:1)
w=f>0?e+" ("+f+")":e
return C.E(C.aB(v,C.p(v,C.au(C.d(w,v,v,v,v,v,v,C.l(v,v,u?D.aE:D.ad,v,v,v,v,v,v,v,v,12.5,v,v,D.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v,v,v),D.f,v,v,new C.o(t,v,r,s,v,v,D.n),v,v,v,D.jz,D.jQ,v,v,v),D.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new A.dSC(this,d),v,v,v,v,v,v,!1,D.a3),1)},
axE(d,e){return this.b__(d,e,0)},
bGK(d){var w,v,u,t,s,r,q,p,o,n=this,m=null,l=d.d
if(l.length===0)return new C.D(D.eu,C.x(B.dim,D.m,m,D.e,D.i,0,D.p),m)
w=x.p
v=C.a([],w)
for(u=l.length,t=0;t<l.length;l.length===u||(0,C.L)(l),++t){s=l[t]
r=s.c==="power"
q=r?D.bu:D.co
p=B.CK[s.b]
o=r?"\u26a1 Power":"\ud83d\udeb0 Leak"
r=r?D.bu:D.co
v.push(n.PT(C.x(C.a([new C.cd(D.aM,D.e,D.i,D.m,m,D.p,m,0,C.a([new A.acM(p.e,44,m),D.as,new C.bz(1,D.ba,new C.y(p.b,m,D.hp,m,m,m,m,m,m,m,m,m),m),n.a_3(o+"  +"+s.e,r)],w),m),D.P,new C.y('"'+s.d+'"',m,B.fog,m,m,m,m,m,m,m,m,m),D.W,new C.bM(D.a8,m,m,n.aes("\ud83d\udd27 Go and fix it",new A.dSi(n,s)),m)],w),D.E,m,D.e,D.i,0,D.p),q))}return C.x(v,D.m,m,D.e,D.i,0,D.p)},
c85(d){var w,v,u,t,s,r,q,p,o,n=this,m=null,l=x.p,k=C.a([],l),j=d.c
j===$&&C.c()
w=j.length
v=0
for(;v<j.length;j.length===w||(0,C.L)(j),++v){u=j[v]
t=u.f
if(!t)s=D.aY
else s=u.gUo()==="fine"?D.be:D.c7
t=t?1:0.5
r=u.a
q=u.gaDM(0)
p=u.gUo()
o=u.gUo()==="fine"?D.es:D.eO
r=C.a([new C.cd(D.aM,D.e,D.i,D.m,m,D.p,m,0,C.a([new A.acM(r.e,50,m),D.as,new C.bz(1,D.ba,C.x(C.a([new C.y(r.b+"  "+q,m,D.hp,m,m,m,m,m,m,m,m,m),new C.y(r.f,m,B.aSM,m,m,m,m,m,m,m,m,m),new C.y("Now: "+p,m,new C.F(!0,o,m,m,m,m,12.5,D.H,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m,m,m,m,m,m,m,m,m)],l),D.E,m,D.e,D.i,0,D.p),m)],l),m),D.P,n.WD("Food",100-u.b,D.cQ),n.WD("Health",u.c,D.be),n.WD("Home",u.d,D.co)],l)
if(u.f){q=n.aes("\ud83c\udf5e Feed",new A.dSp(n,d,u))
p=n.PS("\ud83d\udc8a Medicine",u.e?new A.dSq(n,d,u):m,D.br)
D.d.v(r,C.a([D.am,new C.CB(D.bG,8,8,D.bq,C.a([q,p,n.PS("\ud83c\udfe5 Hospital",u.r>=0?m:new A.dSr(n,d,u),D.c7),n.PS("\ud83c\udfe0 Visit",new A.dSs(n,u),D.b4)],l),m)],l))}k.push(n.PT(new C.kB(t,C.x(r,D.E,m,D.e,D.i,0,D.p),m),s))}return C.x(k,D.m,m,D.e,D.i,0,D.p)},
c84(d){var w,v,u,t,s=null,r=x.p,q=C.a([B.elJ],r)
for(w=d.e,v=0;v<w.length;++v){u=w[v].a<0
t=u?D.aY:D.c7
q.push(this.PT(u?new C.cd(D.aM,D.e,D.i,D.m,s,D.p,s,0,C.a([B.fNV,D.as,new C.y("Bed "+(v+1)+": empty",s,B.fhI,s,s,s,s,s,s,s,s,s)],r),s):new C.fe(new A.dSm(this,d,v),s),t))}return C.x(q,D.m,s,D.e,D.i,0,D.p)},
c86(d){var w=this,v=null,u=x.p,t=w.PT(C.B(C.a([B.fzf,D.as,B.bF_,w.aes("Buy",new A.dSx(w,d))],u),D.m,v,D.e,D.i,0,v,v),D.cQ),s=w.PT(C.B(C.a([B.fV1,D.as,B.bFf,w.PS("Buy",new A.dSy(w,d),D.br)],u),D.m,v,D.e,D.i,0,v,v),D.br),r=C.a([B.fOW,D.am,C.d("Calls answered: "+d.y+"\nPatients sent home better: "+d.z+"\nPeople lost: "+d.gcNa(),v,v,v,v,v,v,B.aTM,v,v,v)],u)
if(d.gC6().length===0)D.d.v(r,C.a([D.W,w.aes("Start a new community",new A.dSz(w))],u))
return C.x(C.a([t,s,w.c83(C.x(r,D.E,v,D.e,D.i,0,D.p))],u),D.m,v,D.e,D.i,0,D.p)},
B(d){var w,v,u,t,s,r,q=this,p=null,o=q.d
if(o==null)w=D.m_
else{w=x.p
v=C.B(C.a([C.aG(p,p,p,p,T.nw,p,p,p,new A.dSF(d),p,p,p,p,p,p),B.bEG,q.a_3("\u2b50 "+o.r,D.aE)],w),D.m,p,D.e,D.i,0,p,p)
u=q.a_3("\ud83c\udf5e "+o.w,D.cQ)
t=q.a_3("\ud83d\udc8a "+o.x,D.br)
s=o.e
s=C.B(C.a([u,D.ac,t,D.ac,q.a_3("\ud83c\udfe5 "+new C.Z(s,new A.dSG(),C.T(s).k("Z<1>")).gL(0)+"/"+s.length,D.c7)],w),D.m,p,D.b9,D.i,0,p,p)
t=C.B(C.a([q.b__("calls","\ud83d\udcde Calls",o.d.length),q.axE("people","\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc67 People"),q.axE("hospital","\ud83c\udfe5 Hospital"),q.axE("shop","\ud83d\uded2 Shop")],w),D.m,p,D.e,D.i,0,p,p)
r=q.gbjS()
A:{if("people"===r){u=q.c85(o)
break A}if("hospital"===r){u=q.c84(o)
break A}if("shop"===r){u=q.c86(o)
break A}u=q.bGK(o)
break A}w=C.a([new C.D(B.bD4,v,p),new C.D(D.BK,s,p),new C.D(B.bE0,t,p),D.P,C.E(C.cn(C.a([u],w),p,D.G9,p,p,D.ah,!1),1)],w)
if(q.w!=null){v=D.e_.j(0.96)
u=C.n(14)
t=C.J(D.be,D.r,1)
s=q.w
s.toString
w.push(C.p(p,C.d(s,p,p,p,p,p,p,B.fkm,p,p,p),D.f,p,p,new C.o(v,p,t,u,p,p,D.n),p,p,p,G.ajT,D.bg,p,p,1/0))}w=C.x(w,D.m,p,D.e,D.i,0,D.p)}return C.c7(p,D.c1,C.bm(!0,w,!0,!1,D.af,!0,!0),p,!1,!1,p,p)}}
A.acM.prototype={
B(d){var w=null,v=this.d
return new C.a5(v,v,C.b4(w,w,w,new A.bfx(this.c,w),D.aw),w)},
gY(d){return this.d}}
A.bfx.prototype={
a3(d,e){var w,v,u,t,s=e.a,r=s/2,q=$.S(),p=C.I()
p.r=D.ds.gp(0)
d.ad(new C.t(r,r),r,p)
p=d.a
J.bl(p.save())
q=new C.aF(q.r,D.ag,null,null,C.a([],x.g))
r=0+s
q.D(new C.jJ(new C.a3(0,0,r,r)))
d.mI(0,q)
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
q.b=D.a9
q.c=1.4
q.r=D.ej.gp(0)
d.e3(new C.a3(t,w,t+s*0.2,w+s*0.12),0.2,2.7,!1,q)
p.restore()},
av(d){return!1}}
A.fM.prototype={}
A.CA.prototype={}
A.jE.prototype={}
A.T3.prototype={}
A.b9k.prototype={
gjP(){return this.a==="ok"}}
A.me.prototype={}
A.fo.prototype={}
A.E7.prototype={}
A.pS.prototype={}
A.abK.prototype={}
A.on.prototype={}
A.aWn.prototype={
gwG(){var w=this.c
return w.c>=2&&A.La(A.t5(this.a),w).a==="ok"},
gdc(d){return this.c}}
A.a5l.prototype={
gz9(){var w,v,u=this.p4,t=u==="ptrap"
if(t||u==="faucet"){w=this.RG
if(w==null)return!1
if(t)if(w.a.a===3){u=w.b
u=new C.bd(u,C.a7(u).k("bd<2>")).d5(0,new A.bUn())&&w.c}else u=!1
else u=A.fBN(w)&&w.f
return u}v=this.R8
return v!=null&&v.c>=2&&A.La(A.t5(u),v).a==="ok"},
Ip(d){var w
if(this.c!=="outside"){w=this.CW
w=w!=null?w.ti(d):!this.ay}else w=!0
return w},
ga6b(){var w=this.p4
if(w.length===0)w=this.Ip(2)
else w=w!=="fan"||this.gz9()
return w},
gMh(){var w=this.p4
if(w.length===0)w=this.Ip(3)
else w=!D.d.t(B.jV,w)||this.gz9()
return w},
ganC(){var w=this.p4
if(w.length===0)w=this.Ip(0)
else w=!D.d.t(B.lM,w)||this.gz9()
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
ghs(d){var w,v=180
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
w=w==null?null:w.gbkF()
if(w==null)w=!v.ay}}else w=!0
return w},
gjR(){var w=this,v=w.c
if(v==="bathroom"||v==="kitchen"){v=w.p4
if(v.length!==0)v=!(v==="ptrap"||v==="faucet")||w.gz9()
else{v=w.fr
v=v==null?null:v.gwG()
if(v==null)v=!w.ch}}else v=!0
return v},
BU(d){var w,v,u,t
for(w=this.x,v=w.length,u=0;u<v;++u){t=w[u]
if(t.a===d)return t}return null},
dz(d,e,f,g){var w=this,v=w.y++,u=f==null?0:f,t=new A.me(v,e,u,g==null?w.ghs(0)*0.6:g)
w.x.push(t)
w.a47(0,t)
return t},
M(d,e){return this.dz(0,e,null,null)},
cJc(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0=d.k1
if(a0!=null){w=d.c
w=w==="outside"||w==="hall"}else w=!0
if(w)return
v=A.hbp(d,A.aPP(a0),0)
w=v.c
u=v.a/2
t=w-u-6
s=w+u+6
for(w=D.d.gag(d.x),u=new C.f5(w,new A.bUm());u.C();){r=w.gS(0)
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
if(f<=d.ghs(0)-m-1)r.d=f
else if(e>=m+1)r.d=e
else r.c=q?h+52+l+1:h-52-l-1}}},
a47(d,e){var w,v,u,t,s,r=this,q=e.b,p=B.hC.h(0,q)
p.toString
w=(e.e&1)===1
v=w?p.d:p.c
u=w?p.c:p.d
p=v/2
e.c=D.k.E(e.c,-r.gex(0)/2+p+1,r.gex(0)/2-p-1)
p=e.d
t=u/2
s=r.c==="outside"?-760+t:t+1
e.d=D.k.E(p,s,r.ghs(0)-t-1)
if(D.d.t(B.RO,q)){e.c=D.k.V(e.c/40)*40
e.d=D.k.V(e.d/40)*40}}}
A.aWs.prototype={
bzB(d){var w,v,u
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
u.p3=Math.max(0,D.d.bh(E.km,new A.bUY()))
this.d=C.a([u],x.D)},
cT8(){var w,v,u,t,s,r
for(w=this.gqT(),v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u){t=w[u]
t.fr=t.CW=null
s=t.ay=!0
r=t.c
t.ch=r!=="bathroom"?r==="kitchen":s
t.fy=!1
t.fx.aa(0)
D.d.aa(t.id)}},
c88(){var w,v,u,t,s,r,q,p=this,o="back",n="bedroom",m="bathroom",l=new C.e5()
l.cY(p.b)
w=new A.bUZ()
v=x.dY
u=C.a([B.bIz,B.bIw,B.bIx],v)
for(t=0;t<7;++t){s=B.cjs[t]
u.push(new A.on(!0,o,-150+s.a*50,s.b))}r=p.d=C.a([A.zj(0,"Bedroom 1",n,0,0,2,2,C.a([w.$1(-48)],v)),A.zj(1,"Bedroom 2",n,2,0,2,2,C.a([w.$1(-48)],v)),A.zj(2,"Bathroom 1",m,4,0,1,2,C.a([B.a0N],v)),A.zj(3,"Bedroom 3",n,5,0,2,2,C.a([w.$1(-48)],v)),A.zj(4,"Bathroom 2",m,7,0,2,2,C.a([B.a0N],v)),A.zj(5,"Hall","hall",0,2,9,1,u),A.zj(6,"Bedroom 4",n,0,3,2,2,C.a([w.$1(-48)],v)),A.zj(7,"Bedroom 5",n,2,3,2,2,C.a([w.$1(-48)],v)),A.zj(8,"Bathroom 3",m,4,3,1,2,C.a([B.a0N],v)),A.zj(9,"Kitchen","kitchen",5,3,2,2,C.a([new A.on(!1,o,-26,5),B.bIB],v)),A.zj(10,"Living room","living",7,3,2,2,C.a([new A.on(!1,o,-70,5),B.bIA,B.bIy],v)),A.zj(11,"Garden","outside",0,5,9,1,C.a([B.bIv],v))],x.D)
for(v=r.length,t=0;t<r.length;r.length===v||(0,C.L)(r),++t){q=r[t]
u=q.c
if(u==="outside"){p.aUd(q)
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
p.aUd(q)}v=p.d
u=v[5]
u.k2=u.k1="tv100"
u.p2=!0
v[3].ay=!0
v[2].ch=!0},
aUd(b3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4="plant",a5="roadcross",a6="road",a7="roundabout",a8="house2",a9="bighouse",b0="adboard",b1="flowers",b2=b3.gex(0)/2
switch(b3.c){case"bedroom":b3.dz(0,"rug",0,b3.ghs(0)*0.55)
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
b3.dz(0,a4,b3.gex(0)/2-12,b3.ghs(0)-12)
break
case"outside":for(w=-780;w<=780;w+=40){v=Math.abs(w)<1
b3.dz(0,v?a5:a6,w,420)
b3.dz(0,v?a5:a6,w,860)}for(u=200;u<=820;u+=40){if(Math.abs(u-420)<1||Math.abs(u-860)<1)continue
b3.dz(0,a6,0,u).e=1}for(t=0;t<2;++t){s=B.dm6[t]
for(u=460;u<859;u+=40)b3.dz(0,a6,s,u).e=1}for(t=0;t<3;++t){s=B.dm5[t]
b3.dz(0,a7,s,420)
b3.dz(0,a7,s,860)}r=new A.bV_(b3)
b3.dz(0,"shop",-250,225)
b3.dz(0,"hospital",250,215)
b3.dz(0,"firestation",-480,225)
b3.dz(0,"school",520,210)
for(t=0;t<14;++t){v=B.da4[t]
w=v.a
u=v.b
if(r.$4(w,u,60,40))b3.dz(0,"billboard",w,u)}for(t=0;t<4;++t){v=B.dqk[t]
w=v.a
u=v.b
if(r.$2(w,u))b3.dz(0,a8,w,u)}for(t=0;t<3;++t){v=B.cYd[t]
u=v.a
q=v.b
p=v.c
for(v=u<900,w=-800;w<=800;w+=q){o=Math.abs(w)
if(o<100)continue
if(v&&o>400)continue
if(r.$2(w,u))b3.dz(0,p&&D.o.F(D.k.ea(w,q),2)===0?a9:a8,w,u)}}for(t=0;t<2;++t){v=B.cwL[t]
w=v.a
u=v.b
if(r.$2(w,u))b3.dz(0,a9,w,u)}for(w=-1220;w<=1220;w+=40){if(Math.abs(w)>780){b3.dz(0,a6,w,420)
b3.dz(0,a6,w,860)}b3.dz(0,a6,w,1460)
b3.dz(0,a6,w,1700)}for(u=900;u<1459;u+=40)b3.dz(0,a6,0,u).e=1
v=C.a([],x._)
for(o=b3.x,n=o.length,t=0;t<o.length;o.length===n||(0,C.L)(o),++t){m=o[t]
l=m.b
if(D.d.t(B.RO,l)||l==="roundabout")v.push(m)}k=new A.bV1(v,b3)
j=new A.bV2(b3,new A.bV5(b3))
j.$3("gasstation",6,B.d4O)
j.$3("dmv",1,B.dt6)
j.$3("ubstation",3,B.cWm)
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
if(k.$4(w,u,e.c,e.d)){b3.dz(0,f,w,u);++i}}++g}++h}for(d=0,t=0;t<11;++t,d=a0){v=B.cZ8[t]
a0=d+1
b3.dz(0,v.b,v.a,1560).f=D.o.F(d,6)}for(t=0;t<11;++t,d=a0){v=B.dob[t]
a0=d+1
b3.dz(0,v.b,v.a,1860).f=D.o.F(d,6)}b3.dz(0,"townsign",0,640)
for(t=0;t<4;++t){v=B.diC[t]
b3.dz(0,"cornersign",v.a,v.b)}for(t=0;t<5;++t)b3.dz(0,b0,B.d8c[t],2045)
for(t=0;t<4;++t)b3.dz(0,b0,B.dmb[t],-690)
for(t=0;t<4;++t){u=B.cr8[t]
a1=b3.dz(0,b0,-1245,u)
a1.e=1
a1.c=-1245
b3.a47(0,a1)
a2=b3.dz(0,b0,1245,u)
a2.e=3
a2.c=1245
b3.a47(0,a2)}for(w=-1200;w<=1200;w+=480){for(t=0;t<4;++t)b3.dz(0,"pole",w,B.cvt[t])
for(v=Math.abs(w)<1100,o=w+240,t=0;t<4;++t){u=B.cCB[t]
if(v)b3.dz(0,"lamppost",o,u)}}b3.dz(0,"car",-300,490).e=2
b3.dz(0,"ambulance",110,345)
b3.dz(0,"firetruck",-385,345)
for(t=0;t<10;++t){v=B.drZ[t]
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
for(t=0;t<6;++t){v=B.cC9[t]
b3.dz(0,"crate",v.a,v.b)}break
case"hall":default:}},
gqT(){var w,v,u,t=C.a([],x.D),s=this.d
s===$&&C.c()
w=s.length
v=0
for(;v<s.length;s.length===w||(0,C.L)(s),++v){u=s[v]
if(u.c!=="outside")t.push(u)}return t},
gcZU(){var w=this.gqT()
return new C.Z(w,new A.bV9(),C.T(w).k("Z<1>")).gL(0)},
gcWx(){var w=this.d
w===$&&C.c()
return new C.Z(w,new A.bV8(),C.T(w).k("Z<1>")).gL(0)},
gcWw(){var w=this.d
w===$&&C.c()
return new C.Z(w,new A.bV7(),C.T(w).k("Z<1>")).gL(0)},
gcPd(){var w=this.gqT()
return new C.Z(w,new A.bV6(),C.T(w).k("Z<1>")).gL(0)}}
A.IW.prototype={
R(){var w,v,u,t,s=new C.yd()
$.yY()
s.h5(0)
w=$.ax()
v=$.hzf()
u=x.S
t=C.a([],x.aQ)
return new A.aEJ(s,B.aA0,new C.eB("",w),B.dgS,B.rK,B.rK,D.D1,C.aX(x.N),new C.cw(null,x.eF),v,C.U(u,x.i),C.aX(u),t,D.cK)}}
A.aEJ.prototype={
ghL(){var w,v,u=$.ajX
if(u!=null){w=u.a
v=this.d
v===$&&C.c()
v=w===v.b
w=v}else w=!1
return w?u:null},
azM(){var w,v,u=this.ghL()
if(u==null)u=null
else{w=this.d
w===$&&C.c()
v=w.d
v===$&&C.c()
w=u.bf5(w,v[w.e].a)
u=w}this.fr=u==null?B.aA0:u},
gbiP(){var w=this.d
w===$&&C.c()
w=w.gqT()
return new C.Z(w,new A.edY(),C.T(w).k("Z<1>")).gL(0)},
Z(){var w,v,u,t,s,r=this
r.a2()
w=r.a.r
if(w.length!==0)w=r.d=A.hI8(w)
else{w=$.Eb==null
if(w){w=D.o.F(Date.now(),1e5)
$.Eb=A.aWt(w)
r.ei=!0}w=$.Eb
w.toString
w=r.d=w}v=r.a
v.toString
u=w.c
w.c=u
u=new A.xg(-0.05,0.1,120,B.fZF,$.ax())
u.f=560
r.e=u
v=v.f
if(v==="city")w.e=11
if(v.length!==0){w=w.gqT()
t=new C.Z(w,new A.edV(r),C.T(w).k("Z<1>"))
if(!t.gan(0)){w=r.d
w===$&&C.c()
w.e=t.gI(0).a}}A.aWf($.ahH)
A.hk1()
r.aj3()
r.azM()
w=r.d
w===$&&C.c()
v=w.d
v===$&&C.c()
w=v[w.e]
v=r.gbiP()
u=r.d
s=u.d
s===$&&C.c()
r.f=A.hu0(w,s[u.e].c!=="outside",B.aQF,"look",v,r.fr,0)
r.aet(!0)
r.Z5()
r.fx=C.dh(D.fY,new A.edW(r))
$.aV.x1$.push(new A.edX(r))},
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
c21(){var w,v=this.d
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
if(q.z){u=new A.q(0,40,v.ghs(0)*0.5)
t=Math.max(v.gex(0),v.ghs(0))*0.6
p=q.e
p===$&&C.c()
p.e=20
p.f=260
p.w=-1.2
p.x=1.2
p.r8(!0)
s=0.12
r=-0.05}else if(v.c==="outside"){p=q.e
p===$&&C.c()
p.e=30
p.f=2400
p.w=0.03
p.x=1.35
p.r8(!0)
u=B.fZC
t=540
s=0.35
r=-0.25}else if(q.x){u=new A.q(0,46,v.ghs(0)*0.1)
t=v.ghs(0)*0.74
p=q.e
p===$&&C.c()
p.e=6
p.f=v.ghs(0)*0.78
p.w=0.02
p.x=1.35
p.r8(!0)
s=0.05
r=0}else{u=new A.q(0,30,v.ghs(0)*0.45)
t=(v.gex(0)*1.2>v.ghs(0)*1.4?v.gex(0)*1.2:v.ghs(0)*1.4)+30
p=q.e
p===$&&C.c()
p.e=6
p.f=560
p.w=0.1
p.x=1.35
p.r8(!0)
s=0.5
r=-0.12}p=q.e
if(d){p===$&&C.c()
p.d=u
p.c=t
p.a=r
p.b=s}else{p===$&&C.c()
p.hT(t,s,u,r)}},
y0(){return this.aet(!1)},
bNZ(d,e){var w,v,u,t,s,r,q,p,o=this,n=o.e
n===$&&C.c()
w=n.cPl(d,e)
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
r=D.k.E(w.c,10,u.ghs(0)-10)
o.e.apR(new A.q(s,48,r))}else{n=u.c==="outside"
if(n&&o.aM&&o.aC!=null){n=o.aC
n.toString
n.at=new C.z(D.k.E(w.a,-u.gex(0)/2+12,u.gex(0)/2-12),D.k.E(w.c,-290,u.ghs(0)-12))}else{v=o.e
q=w.a
p=w.c
if(n)v.apS(Math.max(70,v.c*0.4),0.32,new A.q(q,30,p))
else{n=D.k.E(q,-u.gex(0)/2+8,u.gex(0)/2-8)
p=D.k.E(p,8,u.ghs(0)-8)
v.apS(Math.max(36,o.e.c*0.35),0.2,new A.q(n,40,p))}}}A.fX(560,50,0.25,"tri")},
iF(){var w,v,u,t,s,r,q,p,o=this
o.azM()
w=o.aJ
if(w!=null){v=w.ay
v===$&&C.c()}else{v=o.d
v===$&&C.c()
u=v.d
u===$&&C.c()
v=u[v.e]
u=o.r
t=o.Q
s=o.gbiP()
if(!o.z)if(o.x){r=o.d
q=r.d
q===$&&C.c()
r=q[r.e].c!=="outside"&&o.cx==null}else r=!1
else r=!0
q=o.fr
p=o.bG
v=A.hu0(v,r,p!=null?C.eE([100+p.a],x.S):B.aQF,u,s,q,t)}o.f=v},
eg(d,e){var w=this,v=w.ch
if(v!=null)v.a4(0)
w.m(new A.ecI(w,d,e))
w.ch=C.cG(D.ep,new A.ecJ(w))},
iG(d){return this.eg(d,!0)},
PU(d){this.m(new A.ecK(this,d))
A.fX(660,50,0.25,"tri")},
axF(d,e){var w,v=this,u=v.d
u===$&&C.c()
if(d!==u.e){u=u.d
u===$&&C.c()
u=d>=u.length}else u=!0
if(u)return
if(v.aM&&d!==11)v.a2Q()
v.cL=v.bG=v.aJ=null
if(!e&&v.cx!=null)v.Sb()
v.m(new A.ebg(v,d))
u=v.d
w=u.d
w===$&&C.c()
u=w[u.e]
if(u.c==="outside")v.aC=A.hnr(u,0,24)
v.y0()
A.fX(520,60,0.25,"tri")},
AC(d){return this.axF(d,!1)},
aXJ(d){var w,v,u,t=this
if(d===700){w=t.d
w===$&&C.c()
v=w.d
v===$&&C.c()
return v[w.e].ganC()}if(d===701){w=t.d
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
return v[w.e].ga6b()}if(d>=800&&d<820){u=d-800
w=t.d
w===$&&C.c()
v=w.d
v===$&&C.c()
w=v[w.e].id
return u<w.length&&w[u].gwG()}if(d===720){w=t.d
w===$&&C.c()
v=w.d
v===$&&C.c()
return v[w.e].ganC()}if(d===721){w=t.d
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
b8Z(){var w,v,u=this,t=u.d
t===$&&C.c()
w=t.d
w===$&&C.c()
v=w[t.e].go==="fan"
u.m(new A.eda(u))
t=u.d
w=t.d
w===$&&C.c()
if(w[t.e].fy)t=v?"The fan spins.":"The light is on."
else t=v?"The fan stops.":"The light is off."
u.iG(t)
t=u.d
w=t.d
w===$&&C.c()
A.fX(w[t.e].fy?900:500,60,0.25,"tri")},
c8g(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this
if(a0===0)return
if(a0>=19e3&&a0<19004){w=a0-19e3
v=d.d
v===$&&C.c()
u=v.d
u===$&&C.c()
t=u[v.e]
v=D.o.F(w,2)===0?-1:1
s=v*(t.gex(0)/2-14)
r=w<2?14:t.ghs(0)-14
q=Math.atan2(-s,-(t.ghs(0)/2-r))
w=Math.cos(0.12)
v=Math.sin(q)
u=Math.sin(0.12)
p=Math.cos(0.12)
o=Math.cos(q)
n=d.e
n===$&&C.c()
n.e=6
n.hT(26,0.12,new A.q(s+26*w*v,106-26*u,r-26*p*o),q)
d.eg("You are looking from the camera in the corner. Drag to look round, or tap a camera for another corner.",!0)
A.fX(700,70,0.25,"tri")
return}if(a0>=2e4&&a0<23e3){w=d.d
w===$&&C.c()
v=w.d
v===$&&C.c()
m=v[w.e].BU(a0-2e4)
if(m!=null)d.bU7(m)
return}if(a0===19502){w=d.aJ
if((w==null?null:w.a==="tower")===!0)d.m(new A.ecd(d))
return}if(a0===19500||a0===19501){l=d.aJ
if(l!=null)if(l.c)d.YE(l)
else d.eg("This one works: the house has power.",!0)
return}if(a0>=900&&a0<920){d.crp(a0-900)
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
if(w){d.A5(k.b)
return}if(d.r!=="furniture")return
d.m(new A.ece(d,a0))
w=d.d
v=w.d
v===$&&C.c()
m=v[w.e].BU(d.Q)
if(m!=null)d.iG(B.hC.h(0,m.b).a+": move it with the arrows.")
return}if(a0===300||a0===301||a0===302){if(d.r!=="walls")return
d.m(new A.ecf(d,a0))
d.iG("Wall picked. Choose a paint colour.")
return}if(a0>=600&&a0<620){j=a0-600
w=d.d
w===$&&C.c()
v=w.d
v===$&&C.c()
if(j>=v[w.e].w.length)return
if(d.r==="doors"){d.m(new A.ecg(d,j))
w=d.d
v=w.d
v===$&&C.c()
A.fX(v[w.e].at.t(0,j)?700:450,70,0.25,"tri")
return}d.bNS(j)
return}w=a0===700
v=!w
i=!0
if(v)if(a0!==701){if(a0!==702)if(a0!==703)if(!(a0>=800&&a0<820))u=a0>=720&&a0<728
else u=i
else u=i
else u=i
i=u}if(d.w&&i){h=d.aXJ(a0)
A.fX(h?1400:500,160,0.25,"tri")
w=h?"The tester glows and beeps: LIVE, 120 volts. Never touch a live wire. Switch the breaker off first.":"The tester stays dark: no power here. It still needs wiring."
d.eg(w,!h)
return}if(!v||a0===701){if(d.aXJ(a0))d.azn(w?0:1)
else d.aTU()
return}if(a0>=800&&a0<820){j=a0-800
w=d.d
w===$&&C.c()
v=w.d
v===$&&C.c()
w=v[w.e].id
if(j>=w.length)return
g=w[j]
if(!g.gwG())d.akk(j)
else if(g.a==="switch")d.b8Z()
else d.azn(2+j)
return}if(a0===702||a0===703){w=d.d
w===$&&C.c()
v=w.d
v===$&&C.c()
if(v[w.e].gMh()){w=d.d
v=w.d
v===$&&C.c()
w=!v[w.e].ga6b()}else w=!0
if(w)d.aTU()
else d.b8Z()
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
if(!w[u].p2){d.m(new A.ech(d))
w=d.d
v=w.d
v===$&&C.c()
d.iG("The TV is on and playing "+E.km[v[w.e].p3].a+".")}else{e=A.aPP(f)
w=d.c
w.toString
K.hbe(w,0,e.a,!0,D.yb,e.b)}return}if(a0>=720&&a0<728){w=d.d
w===$&&C.c()
v=w.d
v===$&&C.c()
u=a0-720
f=v[w.e].fx.h(0,u)
if(f==null)return
e=A.aPP(f)
if(e.d>0||e.e){w=d.c
w.toString
K.hbe(w,0,e.a,!0,D.yb,e.b)}else d.azn(u)
return}if(a0===710||a0===711||a0===712||a0===713){w=d.d
w===$&&C.c()
v=w.d
v===$&&C.c()
if(!v[w.e].gjR())if(d.d.a.length!==0)d.En()
else d.a0l()
else{w=d.f
w===$&&C.c()
j=w.b.h(0,a0)
if(j!=null)d.iG(j.a+": "+j.b)}}},
bNS(d){var w,v,u,t=this.d
t===$&&C.c()
w=t.d
w===$&&C.c()
v=w[t.e].w[d].d
u=v<w.length?w[v].b:"the next room"
t=this.c
t.toString
return C.bU(E.lA,null,new A.eaK(this,u,d,v),t,!0,!0,!1,D.k2,!1,!1,x.H)},
bPV(){var w,v,u=this
u.m(new A.eaT(u))
if(!u.aM){w=u.d
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
bPX(){this.m(new A.eaU(this))
this.eg("Phone view: the city fills your phone standing up. Pick a drone film and start filming.",!0)},
bQg(){var w=this
if(w.p4)w.a2P()
w.m(new A.eaV(w))},
ckN(d){var w,v,u,t,s,r,q,p=this,o=null,n=p.c
n.toString
w=C.aJ(n,o,x.w).w
n=new A.ec6(p)
v=x.p
u=C.a([C.bS(0,d,0,0,0)],v)
t=w.r.b
if(p.fB)u.push(C.ap(o,C.aB(D.iE,B.f7g,D.y,!1,o,new A.ec9(p),o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,!1,D.a3),o,o,0,o,t,o))
else{s=n.$2(D.cz,p.gbQf())
r=p.p4?D.z_:D.Cg
r=n.$2(r,new A.eca(p))
q=p.h8?B.aoc:P.Cj
u.push(C.ap(o,C.B(C.a([s,r,n.$2(q,new A.ecb(p)),n.$2(D.uB,new A.ecc(p))],v),D.m,o,D.e,D.i,0,o,o),o,o,10,o,t+8,o))}return C.c7(o,D.w,new C.an(D.a_,o,D.ab,D.t,u,o),o,!1,!1,o,o)},
bIg(d){var w,v,u,t,s,r,q=this,p=null,o=q.c
o.toString
w=C.aJ(o,p,x.w).w
o=new A.eak(q)
if(q.eu){v=w.a
u=v.b
v=v.a
t=q.ab
s=w.aEW(D.af,new C.av(u,v),D.af)
return C.c7(p,D.w,C.au(new C.y9(t,C.qF(new C.a5(u,v,new C.an(D.a_,p,D.ab,D.t,C.a([C.bS(0,d,0,0,0),C.ap(p,C.aB(D.iE,B.f7m,D.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,o,p,p,p,p,p,p,!1,D.a3),p,p,0,p,0,p)],x.p),p),p),s),p),p,p,p),p,!1,!1,p,p)}r=q.f1?w.r.b:0
return C.c7(p,D.w,new C.an(D.a_,p,D.ab,D.t,C.a([C.bS(0,d,0,0,0),C.ap(p,C.aB(D.iE,B.f7n,D.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,o,p,p,p,p,p,p,!1,D.a3),p,p,0,p,r,p)],x.p),p),p,!1,!1,p,p)},
bSk(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=m.c
k.toString
w=C.aJ(k,l,x.w).w
k=w.a
v=k.b
k=k.a
u=new A.eb4(m)
t=m.ab
s=w.aEW(D.af,new C.av(v,k),D.af)
r=x.p
q=C.a([C.bS(0,d,0,0,0)],r)
if(m.fB)q.push(C.ap(l,C.aB(D.iE,B.f7f,D.y,!1,l,new A.eb7(m),l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,!1,D.a3),l,l,0,l,0,l))
else{p=u.$2(Aj.a1L,new A.eb8(m))
o=u.$2(D.a28,new A.eb9(m))
n=m.h8?B.aoc:P.Cj
r=C.a([p,o,u.$2(n,new A.eba(m)),u.$2(D.uB,new A.ebb(m))],r)
p=m.d
p===$&&C.c()
o=p.d
o===$&&C.c()
if(o[p.e].c==="outside"){p=m.p4?D.z_:D.Cg
r.push(u.$2(p,new A.ebc(m)))}if(m.gakl())r.push(C.aB(l,C.p(l,B.bWf,D.f,l,l,new C.o(D.cT,l,C.J(D.c,D.r,1),l,l,l,D.a6),l,40,l,D.iD,l,l,l,40),D.y,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,m.gaQL(),l,l,l,l,l,l,!1,D.a3))
q.push(C.ap(l,C.B(r,D.m,l,D.e,D.i,0,l,l),l,l,10,l,10,l))}return C.c7(l,D.w,C.au(new C.y9(t,C.qF(new C.a5(v,k,new C.an(D.a_,l,D.ab,D.t,q,l),l),s),l),l,l,l),l,!1,!1,l,l)},
cBN(d){var w,v,u,t=B.CK[d.b]
if(d.c==="power")w=t.c
else{v=t.d
w=v>=0?v:t.c}v=this.d
v===$&&C.c()
v=v.d
v===$&&C.c()
u=w<v.length?v[w].b:"the house"
v=this.c
v.toString
return C.bU(D.av,null,new A.ed9(this,t,new A.ed8(),d,u,w),v,!0,!0,!0,L.a8o,!1,!1,x.H)},
c3a(){var w,v,u=this,t=u.d
t===$&&C.c()
w=t.d
w===$&&C.c()
v=w[t.e]
if(v.c==="outside")return
u.m(new A.ebu(u))
t=u.e
t===$&&C.c()
t.e=20
t.f=300
t.w=-0.95
t.x=1.35
t.r8(!0)
t=u.e
w=v.ghs(0)
t.hT(Math.max(v.gex(0),v.ghs(0))*0.75,-0.5,new A.q(0,118,w*0.5),-0.05)
u.eg("Looking up at the ceiling from the floor. Drag to look round.",!0)},
gpm(){var w,v,u=this.d
u===$&&C.c()
u=u.d
u===$&&C.c()
w=new C.Z(u,new A.e9j(),C.T(u).k("Z<1>"))
if(!w.gag(0).C())return null
v=w.gI(0)
u=v.dx
return u==null?v.dx=A.hFY(v):u},
aS1(d){var w,v,u=this
if(d==null)return
w=d.c
if(w>0){v=u.ghL()
if(v!=null)v.r+=w}w=d.a
A.fX(w==="pickup"?700:940,120,0.25,"tri")
u.eg(d.b,w!=="expired")
u.m(u.giW())},
gKx(){var w,v,u,t=this.d
t===$&&C.c()
t=t.d
t===$&&C.c()
w=new C.Z(t,new A.edB(),C.T(t).k("Z<1>"))
if(!w.gag(0).C())return null
v=w.gI(0)
t=v.dy
if(t==null){t=C.a([],x.bz)
u=new C.e5()
u.cY(11)
t=new A.cAS(v,u,t)
t.bAl(v,11)
v.dy=t}return t},
bGn(){var w,v,u=this,t=u.ghL()
if(t==null)return
w=u.c5
if(w.w)u.eg("You already have your Uber licence.",!0)
else{v=t.r
if(v<40)u.eg("The licence costs 40 points. You have "+v+". Earn more with jobs and deliveries.",!1)
else{t.r=v-40
w.w=!0
A.fX(880,140,0.25,"tri")
u.eg("You passed! Here is your Uber licence. Drive a car to an Uber station and the people waiting will get in.",!0)}}u.m(new A.e9K())
w=u.aJ
if(w!=null)w.B(u.ghL())},
c25(){var w,v,u,t,s=this,r=null,q=s.ghL(),p=s.c5.w,o=D.w.j(0.55),n=C.n(28),m=C.J(D.aY,D.r,1),l=x.p,k=C.B(C.a([B.fCt,D.as,B.bFN,C.aB(r,D.rG,D.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new A.ebp(s),r,r,r,r,r,r,!1,D.a3)],l),D.m,r,D.e,D.i,0,r,r),j=C.d(p?"You are a licensed Uber driver. Drive a car to an Uber station (the yellow and black shelter): the people waiting get in, and you take them to their house. The fare is paid when you get there.":"With the Uber licence you can take the people waiting at the Uber stations home and be paid for every ride. The car needs gas, so watch the gas bar.",r,r,r,r,r,r,B.fio,r,r,r),i=q==null,h=i?r:q.r
h=C.d("You have "+(h==null?0:h)+" \u2b50",r,r,r,r,r,r,B.fqn,r,r,r)
w=p?new A.ebq(s):s.gbGm()
if(p)v=D.bf
else{v=i?r:q.r
v=(v==null?0:v)>=40?D.bu:D.bC}u=C.n(16)
t=p?"\u2713 Licensed":"Get the licence \xb7 40 \u2b50"
if(!p){i=i?r:q.r
i=(i==null?0:i)>=40}else i=!0
return C.p(D.A,C.p(r,C.x(C.a([k,D.W,j,D.W,h,D.W,C.aB(r,C.p(D.A,C.d(t,r,r,r,r,r,r,C.l(r,r,i?D.w:D.bZ,r,r,r,r,r,r,r,r,16,r,r,D.u,r,r,!0,r,r,r,r,r,r,r,r),r,r,r),D.f,r,r,new C.o(v,r,r,u,r,r,D.n),r,50,r,r,r,r,r,r),D.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,w,r,r,r,r,r,r,!1,D.a3)],l),D.ak,r,D.e,D.O,0,D.p),D.f,r,r,new C.o(r,r,m,n,r,B.zh,D.n),r,r,r,D.bE,D.bQ,r,r,330),D.f,o,r,r,r,r,r,r,r,r,r,r)},
cE9(d){var w,v,u,t=this,s=t.gKx()
if(s!=null){w=s.c
w===$&&C.c()
w=w.length===0}else w=!0
if(w)return
v=s.cOb(d.f,d.r,t.CW.gip()/1000)
if(v>0){w=t.ghL()
if(w!=null)w.r+=v
A.fX(940,140,0.25,"tri")
t.eg("\ud83d\ude96 You dropped the passenger at the house. Fare: +"+v+" points. Thank you!",!0)
t.m(t.giW())
return}if(s.f==null&&s.aqv(d.f,d.r)!=null&&D.d.b3(s.e,new A.edC(s,d))){w=t.c5
if(!w.w){if(Date.now()-t.k1>2e4){t.k1=Date.now()
t.eg("People are waiting for a ride, but you need an Uber licence first. Get it at the licence office.",!1)}return}if(w.b<=0)return
u=s.cWo(d.f,d.r)
if(u!=null){A.fX(700,100,0.25,"tri")
t.eg("\ud83d\ude96 "+u.b+" got in. Take them to their house (follow the yellow line): "+u.f+" points.",!0)
t.m(t.giW())}}},
cE8(){var w,v,u,t,s,r,q,p=this,o=p.gKx()
if(o==null)return
w=o.f
if(w!=null){p.eg("\ud83d\ude96 "+w.b+" is in the car and wants to go home: "+w.f+" points. Follow the yellow line to the house.",!0)
return}if(!p.c5.w){v=C.a([],x._)
u=p.d
u===$&&C.c()
t=u.d
t===$&&C.c()
u=t[u.e].x
t=u.length
s=0
for(;s<u.length;u.length===t||(0,C.L)(u),++s){r=u[s]
if(r.b==="dmv")v.push(r)}if(v.length===0){p.eg("There is no licence office in this town yet.",!1)
return}p.Sp(D.d.gI(v))
p.eg("You are at the licence office. Walk in through the door and onto the blue mat to get your Uber licence.",!0)
return}v=o.c
v===$&&C.c()
if(v.length===0){p.eg("There is no Uber station in this town yet.",!1)
return}q=p.aC
v=C.C(v,x.eB)
D.d.aY(v,new A.edA(q))
p.Sp(D.d.gI(v))
p.eg("You are at an Uber station. Get in the car parked next to it and drive up to the people waiting. They get in by themselves.",!0)},
aPo(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=" points for the ",i=k.ghL()
if(i==null)return
w=d.a
v=w==="bread"
if(v||w==="medicine"){u=i.aDZ(v?"food":"medicine")
t=!D.a.a0(u,"You need")}else{v=d.r
t=!1
if(v>0){w=w==="tank"
s=w?A.h8M(k.c5.b):d.e
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
u="You had the "+d.c.toLowerCase()+". "+w}t=!l}}}A.fX(t?880:300,90,0.25,"tri")
k.eg(u,t)
w=k.aJ
if(w!=null)w.B(k.ghL())
k.m(k.giW())},
cwa(){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.ghL(),i=l.aJ
i=i==null?k:i.b.b==="gasstation"
w=i===!0
i=l.c
i.toString
v=C.aJ(i,k,x.w).w.a
i=v.a
u=i>v.b*1.15
t=new A.ecN(u,new A.ecO(l,j,u))
s=C.d(w?"\u26fd":"\ud83d\uded2",k,k,k,k,k,k,D.x_,k,k,k)
r=C.d(w?"NGMY Gas shop":"NGMY Mart",k,k,k,k,k,k,D.fv,k,k,k)
q=j==null?k:j.r
p=x.p
q=C.a([s,D.as,C.E(C.x(C.a([r,C.d("You have "+(q==null?0:q)+" \u2b50",k,k,k,k,k,k,B.fkP,k,k,k)],p),D.E,k,D.e,D.i,0,D.p),1)],p)
if(u)q.push(new C.a5(190,k,new A.Uw(l.c5,w,14,k),k))
q.push(D.bc)
q.push(C.aB(k,B.bSU,D.y,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,new A.ecM(l),k,k,k,k,k,k,!1,D.a3))
o=C.B(q,D.m,k,D.e,D.i,0,k,k)
n=t.$2("FOOD AND DRINKS (energy)",B.d9s)
s=w?"GAS":"HEALTH AND THE TOWN"
m=t.$2(s,w?B.dlW:B.diG)
t=D.w.j(0.55)
i=u?Math.min(i-24,820):340
s=C.n(28)
r=C.J(D.aY,D.r,1)
q=C.a([o,D.W],p)
if(!u)D.d.v(q,C.a([new A.Uw(l.c5,w,14,k),D.P],p))
if(u)q.push(C.B(C.a([C.E(n,5),D.er,C.E(m,3)],p),D.E,k,D.e,D.i,0,k,k))
else D.d.v(q,C.a([n,m],p))
return C.p(D.A,C.eO(D.A,C.p(k,C.x(q,D.ak,k,D.e,D.O,0,D.p),D.f,k,k,new C.o(k,k,r,s,k,B.zh,D.n),k,k,k,D.bg,D.bQ,k,k,i),D.f,D.e2),D.f,t,k,k,k,k,k,k,k,k,k,k)},
chp(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=this,a1=null,a2=a0.gpm()
a2.toString
w=a0.aC
v=w==null
u=v?a1:w.f
if(u==null)u=0
t=v?a1:w.r
if(t==null)t=300
s=a2.x
r=new A.ebP()
q=new A.ebL(a0,u,t,r,new A.ebO(),s,a2)
p=a2.cYK()
o=["\ud83e\udd47","\ud83e\udd48","\ud83e\udd49","4","5","6"]
v=D.w.j(0.55)
n=C.n(28)
m=C.J(D.aY,D.r,1)
l=x.p
k=C.a([C.B(C.a([B.fJV,D.as,C.E(C.x(C.a([B.fLJ,C.d("Race "+a2.as+": first to 8 wins +40",a1,a1,a1,a1,a1,a1,I.tc,a1,a1,a1)],l),D.E,a1,D.e,D.i,0,D.p),1),C.aB(a1,D.rG,D.y,!1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,new A.ebJ(a0),a1,a1,a1,a1,a1,a1,!1,D.a3)],l),D.m,a1,D.e,D.i,0,a1,a1),D.ae],l)
if(s!=null){j=D.bu.j(0.14)
i=C.n(16)
h=C.J(D.bu,D.r,1)
g=s.b
f=C.d(A.L9(g).b,a1,a1,a1,a1,a1,a1,D.Ka,a1,a1,a1)
k.push(C.p(a1,C.B(C.a([f,D.as,C.E(C.d(s.r?"You have the "+A.L9(g).c.toLowerCase()+". Take it to the house (follow the yellow line).":"Go to the "+r.$1(s.c).toLowerCase()+" to pick up the "+A.L9(g).c.toLowerCase()+".",a1,a1,a1,a1,a1,a1,D.oK,a1,a1,a1),1),C.aB(a1,B.fA0,D.y,!1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,new A.ebK(a0,a2),a1,a1,a1,a1,a1,a1,!1,D.a3)],l),D.m,a1,D.e,D.i,0,a1,a1),D.f,a1,a1,new C.o(j,a1,h,i,a1,a1,D.n),a1,a1,a1,D.d2,D.bg,a1,a1,a1))}else{j=C.a([B.fOy,D.P],l)
for(a2=a2.r0(0,u,t),a2=C.d_(a2,0,C.dA(6,"count",x.S),C.T(a2).c),i=a2.$ti,a2=new C.bR(a2,a2.gL(0),i.k("bR<ak.E>")),i=i.k("ak.E");a2.C();){h=a2.d
j.push(q.$1(h==null?i.a(h):h))}D.d.v(k,j)}k.push(D.am)
k.push(B.fDo)
k.push(D.P)
for(e=0;e<p.length;++e){a2=p[e].a==="You"?D.aK.j(0.18):D.c.j(0.05)
j=new C.aP(12,12)
i=p[e]
h=i.a
g=h==="You"
d=new C.ay(g?D.aK:D.ds,1,D.r,-1)
f=o[e]
g=g?D.u:D.U
k.push(C.p(a1,new C.cd(D.aM,D.e,D.i,D.m,a1,D.p,a1,0,C.a([new C.a5(26,a1,new C.y(f,a1,D.aSC,a1,a1,a1,a1,a1,a1,a1,a1,a1),a1),new C.bz(1,D.ba,new C.y(h,a1,new C.F(!0,D.c,a1,a1,a1,a1,a1,g,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1,a1,a1,a1,a1,a1,a1),a1),new C.y(""+i.b+"/8",a1,M.Kc,a1,a1,a1,a1,a1,a1,a1,a1,a1),D.as,new C.y(""+i.c+" pts",a1,B.fie,a1,a1,a1,a1,a1,a1,a1,a1,a1)],l),a1),D.f,a1,a1,new C.o(a2,a1,new C.bI(d,d,d,d),new C.bj(j,j,j,j),a1,a1,D.n),a1,a1,a1,D.eH,D.l8,a1,a1,a1))}return C.p(D.A,C.eO(D.A,C.p(a1,C.x(k,D.ak,a1,D.e,D.O,0,D.p),D.f,a1,a1,new C.o(a1,a1,m,n,a1,B.zh,D.n),a1,a1,a1,D.bE,D.bQ,a1,a1,340),D.f,D.e2),D.f,v,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1)},
bU6(d){var w,v,u=this,t=u.aJ
if(t==null||t.a!=="tower"||u.ok!=null)return
w=t.f
if(d===w){u.m(new A.ebd(u))
return}u.p2=t
w=new A.f1i(w,d,Date.now())
v=t.at
v===$&&C.c()
w.r=v.f
w.w=v.r
u.ok=w
t.y=u.be=u.b2=0
u.m(new A.ebe(u))
w=u.e
w===$&&C.c()
w.hT(175,0.28,B.fZG,0)
u.eg("Going to level "+d+": walking to the elevator.",!0)
w=u.p1
if(w!=null)w.bR(0)
w=new A.a5g(u.gcs8(),X.BC)
w.h5(0)
u.p1=w},
DP(d){var w=D.k.E(d,0,1)
return w*w*(3-2*w)},
cs9(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d="tri",a0=e.ok,a1=e.p2
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
m=A.h0b("cabin",a1.b,!1)
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
e.m(e.giW())
w=e.e
w===$&&C.c()
w.Np(54,0.1,B.fZU,3.141592653589793)
A.fX(520,70,0.25,d)}break
case 1:m=e.aJ
if(m==null||m.a!=="cabin")return
l=a0.f
if(u<0.9)r=1-e.DP(u/0.9)
else{r=l-0.9
r=u>r?e.DP((u-r)/0.9):0}m.y=r
k=u>0.9&&u<l-0.9
if(k){j=D.o.E(t+D.k.V((w-t)*e.DP((u-0.9)/(l-1.8))),1,m.gM7())
if(j!==a0.e){m.z=a0.e=j
t=s?"\u25b2":"\u25bc"
e.p3.sp(0,t+"  "+C.w(j===1?"L":j))
A.fX(500+j*22,45,0.2,d)}}i=k?1:0.25
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
A.fX(880,140,0.3,d)
C.bP(D.fO,new A.ecE(),x.H)}if(u>=l){a0.d=2
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
a1.B(e.ghL())
w.f=0
w.r=16
w.w=0
w.x=!1
a1.y=1
e.aJ=a1
e.m(e.giW())
e.e.Np(175,0.28,B.fZH,0)}break
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
t.apR(new A.q(0,40,w.r*0.7+14))
if(u>=2.2){f=a1.c
t=e.p1
if(t!=null)t.bR(0)
e.ok=null
w.x=!1
a1.y=0
e.m(e.giW())
e.e.hT(170,0.4,B.fZl,0)
A.fX(660,80,0.25,d)
w=""+a1.f
e.eg(f?"Level "+w+". This office has no power: walk onto the red mat at the breaker panel, or tap the red frames.":"Level "+w+" of "+a1.gM7()+".",!0)}}},
bPl(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.aJ
if(g==null||g.a!=="tower")return D.bJ
w=i.d
w===$&&C.c()
v=w.d
v===$&&C.c()
u=v[w.e].cy.h(0,g.b.a)
w=D.w.j(0.55)
v=C.n(28)
t=C.J(D.aY,D.r,1)
s=g.f
r=g.gM7()
q=x.p
s=C.B(C.a([B.fSD,D.as,C.E(C.x(C.a([B.fKI,C.d("You are on level "+s+" of "+r,h,h,h,h,h,h,I.tc,h,h,h)],q),D.E,h,D.e,D.i,0,D.p),1),C.aB(h,D.rG,D.y,!1,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,new A.eaR(i),h,h,h,h,h,h,!1,D.a3)],q),D.m,h,D.e,D.i,0,h,h)
p=C.a([],q)
for(;r>=1;--r){if(r===g.f)o=D.aK
else o=r===u?D.bz.j(0.35):D.c.j(0.08)
n=new C.aP(14,14)
m=r===u
if(m)l=D.ax
else l=r===g.f?D.c:D.aY
k=r===g.f
j=new C.ay(l,k||m?2:1,D.r,-1)
l=r===1?"L":""+r
k=k?D.w:D.c
l=C.a([new C.y(l,h,new C.F(!0,k,h,h,h,h,19,D.u,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h),h,h,h,h,h,h,h,h,h)],q)
if(m)l.push(B.fSY)
p.push(C.aB(h,C.p(D.A,C.x(l,D.m,h,D.b9,D.i,0,D.p),D.f,h,h,new C.o(o,h,new C.bI(j,j,j,j),new C.bj(n,n,n,n),h,h,D.n),h,52,h,h,h,h,h,58),D.y,!1,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,new A.eaS(i,r),h,h,h,h,h,h,!1,D.a3))}return C.p(D.A,C.eO(D.A,C.p(h,C.x(C.a([s,D.ae,B.fQS,D.W,C.bX(D.bG,p,D.bq,h,8,8),D.am,B.fBR],q),D.ak,h,D.e,D.O,0,D.p),D.f,h,h,new C.o(h,h,t,v,h,B.zh,D.n),h,h,h,D.bE,D.bQ,h,h,330),D.f,D.e2),D.f,w,h,h,h,h,h,h,h,h,h,h)},
au4(){var w,v,u,t,s,r,q=this,p=q.e
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
aRl(d,e,f,g,h){var w=new A.eaD(h)
return new A.q(w.$4(d.a,e.a,f.a,g.a),w.$4(d.b,e.b,f.b,g.b),w.$4(d.c,e.c,f.c,g.c))},
c3I(d){var w=this.d
w===$&&C.c()
w=w.d
w===$&&C.c()
return A.i8L(D.d.fY(w,new A.ebv()),d)},
cyV(d){var w,v,u=this
u.B5()
u.Sb()
if(u.aM)u.a2Q()
u.aJ=null
w=u.c3I(d)
if(w.length===0)return
u.m(new A.ecQ(u,w))
v=u.e
v===$&&C.c()
v.r=4800
v.e=6
v.f=2600
v.w=-1.2
v.x=1.4
v.r8(!0)
u.adP()
v=u.RG
if(v!=null)v.bR(0)
v=new A.a5g(u.gbOB(),X.BC)
v.h5(0)
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
u=A.h0b(v,o,u.k4.t(0,t))
u.B(p.ghL())
p.aJ=u
p.ajm(u,p.gIA().h(0,t))
t=p.aJ
t.toString
t.B(p.ghL())
p.m(p.giW())}s=w.r
if(s&&p.aJ!=null){p.aJ=null
p.m(p.giW())}if(w.w==null&&w.x==null){s=!n||s
r=p.au4()
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
D.d.M(o,n+Math.max(1,new A.q(u.a-v.a,u.b-v.b,u.c-v.c).guV()))}}o=w.e
if(o!=null)p.eg("\ud83d\ude81 "+o,!0)},
bOC(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this
if(!a2.p4||a2.c==null)return
w=a2.rx[a2.ry]
v=(Date.now()-a2.to)/1000
u=w.x
if(u!=null){t=a2.CW.gip()/1000
s=B.a4C[u].a
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
h=a2.au4()
k=A.o5(h.a,k,i)
m=A.o5(h.b,m,i)}if(v>=w.d){a2.adP()
return}}else{u=w.w
if(u!=null){u=B.kn[u]
t=a2.CW.gip()
t=$.aRE().cWD(0,D.d.cu(B.kn,u),t/1000).a
u=t[0]
m=new A.q(u,26,t[1])
l=v*0.6+0.8
k=new A.q(u+Math.sin(l)*190,85,t[1]+Math.cos(l)*190)
if(v<2.5){j=v/2.5
i=j*j*(3-2*j)
g=a2.au4()
k=A.o5(g.a,k,i)
m=A.o5(g.b,m,i)}if(v>=w.d){a2.adP()
return}}else{f=v*w.c
if(a2.x1.length<2||f>=D.d.gak(a2.xr)){a2.adP()
return}u=a2.xr
t=u.length
e=0
for(;;){s=e+2
if(!(s<t&&u[e+1]<=f))break;++e}t=u[e]
n=e+1
d=D.k.E((f-t)/(u[n]-t),0,1)
t=new A.eaP()
u=e-1
k=a2.aRl(t.$2(a2.x1,u),t.$2(a2.x1,e),t.$2(a2.x1,n),t.$2(a2.x1,s),d)
m=a2.aRl(t.$2(a2.x2,u),t.$2(a2.x2,e),t.$2(a2.x2,n),t.$2(a2.x2,s),d)}}a0=m.aE(0,k)
a1=Math.max(8,a0.guV())
u=a2.e
u===$&&C.c()
t=Math.atan2(a0.a,-a0.c)
u.Np(a1,Math.asin(D.k.E(-a0.b/a1,-1,1)),m,t)},
a2P(){var w=this,v=w.e
v===$&&C.c()
v.r=0
v=w.RG
if(v!=null)v.bR(0)
w.RG=null
if(w.c==null)return
w.m(new A.ed0(w))
w.y0()
w.eg("The drone has landed.",!0)},
bOA(){var w=null,v=new A.eaN(this),u=D.w.j(0.55),t=C.n(28),s=C.J(D.aY,D.r,1),r=x.p
return C.p(D.A,C.eO(D.A,C.p(w,C.x(C.a([C.B(C.a([B.fQF,D.as,B.bFk,C.aB(w,D.rG,D.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new A.eaM(this),w,w,w,w,w,w,!1,D.a3)],r),D.m,w,D.e,D.i,0,w,w),B.fDt,v.$4("\ud83c\udf06","The whole city","High flights over every street","city"),v.$4("\ud83e\udea7","Billboards and NGMY logos","Close to every ad, and the big logo board","billboards"),v.$4("\ud83c\udfc1","Edge billboards only","A tour round the big boards at the edges of the city","edges"),v.$4("\ud83c\udfe0","Houses","Fly by the houses, then go inside a big one","houses"),v.$4("\ud83c\udfe5","Hospital, shop and school","Fly in and look round inside each","hospital"),v.$4("\ud83d\ude8c","Traffic","Follow the self-driving buses and police cars","traffic"),v.$4("\ud83c\udfac","Everything","A little of all of it","all")],r),D.ak,w,D.e,D.O,0,D.p),D.f,w,w,new C.o(w,w,s,t,w,B.zh,D.n),w,w,w,D.bE,D.bQ,w,w,330),D.f,D.e2),D.f,u,w,w,w,w,w,w,w,w,w,w)},
gIA(){var w=this.d
w===$&&C.c()
w=w.d
w===$&&C.c()
return D.d.fY(w,new A.ebk()).cx},
aug(d){var w,v=C.a([],x.u)
for(w=0;w<4;++w)v.push(d.ti(w))
return v},
czj(d){var w,v,u=C.a([],x.t)
for(w=0;w<4;++w){if(!d.ti(w)){v=d.d
v===$&&C.c()
v=w>=v.length}else v=!0
u.push(v?0:new A.ed_(d,w).$0())}return u},
cGq(d,e){var w,v,u,t,s,r=d.d
r===$&&C.c()
if(e>=r.length)return""
w=r[e]
r=w.a
v=d.at.h(0,r)
u=v==null
t=u?null:v.a
s=A.agR(t==null?w.b:t).toLowerCase()
if(u||!A.h4q(w.b,v.a))return"nothing put in yet at "+A.k_(r).b
if(v.b.c<2)return"the "+s+" at "+A.k_(r).b+" is not finished: fasten every wire and close it"
return"the "+s+" at "+A.k_(r).b+" works but is NOT wired safely: "+d.apo(r).b},
ajm(d,e){var w=e==null
d.d=w?B.aA9:this.aug(e)
d.e=w?B.a31:this.czj(e)},
gbaX(){var w,v,u=this.aJ
if(u==null||!u.c)return null
w=u.a
v=u.b.a
return w==="tower"?v*100+u.f:v},
gakl(){var w,v=this.gbaX(),u=v==null?null:this.gIA().h(0,v)
if(u!=null)w=u.gbkF()||D.d.d5(this.aug(u),new A.edP())
else w=!1
return w},
asG(){var w,v,u,t,s,r=this,q=r.aJ,p=r.gbaX(),o=p==null,n=o?null:r.gIA().h(0,p)
if(q==null||o||n==null)return
if(!D.d.d5(r.aug(n),new A.eam())){r.eg("Not quite done: the wiring is not right yet. Open the wiring bench again (tap the panel) and check every wire.",!1)
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
s=10+r.iN.ap(26)
v=r.ghL()
if(v!=null)v.r+=s
r.lg=Date.now()
r.lA=0
q.d=B.dr2
q.e=B.a31
q.B(r.ghL())
r.m(r.giW())
A.fX(880,120,0.3,"tri")
v=r.d
v===$&&C.c()
u=v.d
u===$&&C.c()
v=u[v.e]
u=v.k4.a
v=v.cy.a
o=o?"The power is back on level "+q.f+".":"The power is back in the house."
v=u+v>0?" The other red tags in the city are different places that still have no power.":""
r.eg("\u2705 JOB COMPLETE! "+o+" +"+s+" stars."+v,!0)},
YE(d){return this.c_E(d)},
c_E(d){var w=0,v=C.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k
var $async$YE=C.e(function(e,f){if(e===1)return C.f(f,v)
for(;;)switch(w){case 0:l=d.b
k=l.a
if(d.a==="tower")k=k*100+d.f
s=t.gIA().c3(0,k,new A.ebh(l,d))
w=3
return C.b(t.yg(C.e0(new A.ebi(s),!1,null,x.H)),$async$YE)
case 3:if(t.c==null){w=1
break}t.ajm(d,s)
if(t.gakl())t.asG()
else{d.B(t.ghL())
t.m(t.giW())
r=x.s
q=C.a([],r)
if(s.ti(0))q.push("outlet 1")
if(s.ti(1))q.push("outlet 2")
if(s.ti(2))q.push("the ceiling light")
if(s.ti(3))q.push("the switch")
p=C.a([],r)
if(!s.ti(0))p.push("outlet 1")
if(!s.ti(1))p.push("outlet 2")
if(!s.ti(2))p.push("the ceiling light")
if(!s.ti(3))p.push("the switch")
r=C.a([],r)
for(o=0;o<4;++o)if(!s.ti(o))r.push(t.cGq(s,o))
n=x.cc
m=C.C(new C.Z(r,new A.ebj(),n),n.k("M.E"))
r=q.length===0?"Nothing is fixed yet":"Fixed so far: "+D.d.aG(q,", ")
p=D.d.aG(p,", ")
q=m.length===0?"":"Why: "+C.d_(m,0,C.dA(2,"count",x.S),C.T(m).c).aG(0,"; ")+". "
t.eg(r+". Still to do: "+p+". "+q+"Tap the red frames to carry on.",!1)}case 1:return C.h(u,v)}})
return C.i($async$YE,v)},
abn(d){return this.bRt(d)},
bRt(d){var w=0,v=C.j(x.H),u,t=this,s,r,q,p,o
var $async$abn=C.e(function(e,f){if(e===1)return C.f(f,v)
for(;;)switch(w){case 0:o=t.d
o===$&&C.c()
s=o.d
s===$&&C.c()
r=d.a
q=s[o.e].db.c3(0,r,new A.eaX())
w=3
return C.b(t.yg(C.e0(new A.eaY(q),!1,null,x.H)),$async$abn)
case 3:if(t.c==null){w=1
break}if(q.c>=2&&A.La(A.t5("light"),q).a==="ok"){o=t.d
s=o.d
s===$&&C.c()
s[o.e].db.W(0,r)
o=t.d
s=o.d
s===$&&C.c()
s[o.e].k3.W(0,r)
p=10+t.iN.ap(26)
r=t.ghL()
if(r!=null)r.r+=p
t.m(t.giW())
t.eg("The street light is on again. You wired it correctly: black to black, white to white, ground to ground. +"+p+" stars.",!0)}else t.eg("The light is still out: finish the wiring and fit the cover, then it comes on.",!1)
case 1:return C.h(u,v)}})
return C.i($async$abn,v)},
c8a(){var w,v,u=this,t=u.aC
if(t==null)return
w=u.d
w===$&&C.c()
v=w.d
v===$&&C.c()
v[w.e].dz(0,"crate",t.f+Math.sin(t.w)*34,t.r+Math.cos(t.w)*34)
u.al=null
u.m(u.giW())
u.eg("You put the crate down.",!0)},
c5C(){var w,v,u,t,s,r,q,p,o=this,n=o.d
n===$&&C.c()
n=n.d
n===$&&C.c()
w=D.d.fY(n,new A.ebx())
if(o.gaX4())return
n=x._
v=C.a([],n)
for(u=w.x,t=u.length,s=w.k4,r=0;r<u.length;u.length===t||(0,C.L)(u),++r){q=u[r]
p=q.b
if(p==="house2"||p==="bighouse"){p=q.a
p=!s.t(0,p)&&p!==o.jf}else p=!1
if(p)v.push(q)}if(s.a<2&&v.length!==0&&o.bD==null&&o.bE==null){q=v[o.iN.ap(v.length)]
v=q.a
s.M(0,v)
o.jf=v
o.b4I(new A.Qj(q,q.b==="bighouse"?"the big house":"the house","power","",0))}n=C.a([],n)
for(v=u.length,t=w.k3,r=0;r<u.length;u.length===v||(0,C.L)(u),++r){q=u[r]
s=q.b
if((s==="pole"||s==="lamppost")&&!t.t(0,q.a))n.push(q)}if(t.a<3&&n.length!==0&&D.o.F(o.bX,90)===0){t.M(0,n[D.o.F(o.bX*5,n.length)].a)
o.eg("\u26a1 A street light went out in the town. Find it (it is dark, with a red sign) and fix it.",!1)}n=o.d
v=n.d
v===$&&C.c()
if(v[n.e].c==="outside"&&o.aJ==null)o.m(o.giW())},
ax5(d){return this.c5D(d)},
c5D(d){var w=0,v=C.j(x.H),u=this
var $async$ax5=C.e(function(e,f){if(e===1)return C.f(f,v)
for(;;)switch(w){case 0:u.m(new A.eby(u,d))
return C.h(null,v)}})
return C.i($async$ax5,v)},
aXf(){var w,v=this.cJ,u=v==null?null:v.a
if(u==null)return null
w=A.vD(new A.q(0,0,B.hC.h(0,u.b).d/2+60),u.e*3.141592653589793/2)
return new C.z(u.c+w.a,u.d+w.c)},
awd(){var w=this.aC,v=this.aXf()
if(w==null||v==null)return null
return D.k.V(Math.sqrt(Math.pow(v.a-w.f,2)+Math.pow(v.b-w.r,2))/10)},
css(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.aC,g=j.gKx()
g=g==null?i:g.ga6X(0)
if(g==null){g=j.gpm()
g=g==null?i:g.ga6X(0)
w=g}else w=g
if(w==null)w=j.aXf()
g=!1
if(j.cJ==null){v=j.gpm()
if((v==null?i:v.x)==null){g=j.gKx()
g=(g==null?i:g.f)==null}}v=!0
if(!g)if(h!=null)if(w!=null){g=j.d
g===$&&C.c()
v=g.d
v===$&&C.c()
g=v[g.e].c!=="outside"||j.aJ!=null}else g=v
else g=v
else g=v
if(g)return B.I7
g=C.a([],x.z)
u=new A.fl(g)
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
u.aDR(new A.q(h.f+o*k,1.4,h.r+n*k),B.hfk,D.bu,p)
k+=26;++l}}u.f=3
u.d=0.4
u.dN(new A.q(v,0,s),new A.q(v,170,s),4,D.bu,8)
u.dN(new A.q(v,0,s),new A.q(v,1.6,s),24,D.bu,14)
return g},
bH_(){var w,v,u,t,s,r,q,p=this,o=null,n=p.y1,m=new A.e9R(),l=new A.e9Q(),k=x.p
if(n!=null){w=p.awd()
v=C.a([C.B(C.a([C.ha(D.aE,o,C.d(n.gbeI(),o,o,o,o,o,o,D.pD,o,o,o),o,24),D.bc,C.E(C.x(C.a([C.d(n.gaE0(),o,o,o,o,o,o,D.dd,o,o,o),B.fM5],k),D.E,o,D.e,D.i,0,D.p),1),C.aB(o,D.rG,D.y,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,new A.e9S(p),o,o,o,o,o,o,!1,D.a3)],k),D.m,o,D.e,D.i,0,o,o),D.ae],k)
for(u=n.gaHf(0),t=0;t<3;++t)v.push(m.$1(u[t]))
u=D.bu.j(0.12)
s=C.n(14)
r=C.J(D.bu.j(0.5),D.r,1)
v.push(C.p(o,C.B(C.a([B.bZI,D.as,C.E(C.d(w==null?"A yellow line on the ground will show you the way.":"Follow the yellow line on the ground. It is about "+C.w(w)+" metres away.",o,o,o,o,o,o,D.oK,o,o,o),1)],k),D.m,o,D.e,D.i,0,o,o),D.f,o,o,new C.o(u,o,r,s,o,o,D.n),o,o,o,D.l6,D.bT,o,o,o))
v.push(l.$5$primary(A1.Hb,"Show me the way",D.bu,new A.e9T(p),!0))
v.push(l.$4(B.bM5,"Take me there",D.be,new A.e9U(p,n)))
v.push(l.$4(D.jU,"Later",D.aE,new A.e9V(p,n)))
q=C.x(v,D.ak,o,D.e,D.O,0,D.p)}else q=C.x(C.a([B.f2d,D.ae,m.$1("Hello, this is the City office. A few calls were missed."),m.$1("Please answer the phone, so you can keep working."),m.$1("Every call is a person who needs help. Thank you for answering!"),l.$5$primary(D.hx,"OK, I will answer",D.be,new A.e9W(p),!0)],k),D.ak,o,D.e,D.O,0,D.p)
k=D.w.j(0.55)
v=C.n(28)
return C.p(D.A,C.eO(D.A,C.p(o,q,D.f,o,o,new C.o(o,o,C.J(D.aY,D.r,1),v,B.dqH,B.zh,D.n),o,o,o,D.bE,D.bQ,o,o,330),D.f,D.e2),D.f,k,o,o,o,o,o,o,o,o,o,o)},
cuL(){var w,v,u,t,s=this,r=s.d
r===$&&C.c()
w=r.d
w===$&&C.c()
v=w[r.e].BU(s.Q)
if(v==null)return
u=B.dyy.h(0,v.b)
if(u==null){s.eg("This cannot be sold.",!1)
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
w=s.ghL()
if(w!=null)w.r+=u
s.m(s.giW())
s.eg("Sold for "+C.w(u)+" points.",!0)},
A5(d){return this.bI4(d)},
bI4(d){var w=0,v=C.j(x.H),u,t=this,s
var $async$A5=C.e(function(e,f){if(e===1)return C.f(f,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=3
return C.b(C.bU(D.L,null,new A.eai(d),s,!0,!0,!0,null,!1,!1,x.H),$async$A5)
case 3:if(t.c==null){w=1
break}t.m(new A.eaj(t))
case 1:return C.h(u,v)}})
return C.i($async$A5,v)},
crp(d){var w,v,u=this.ghL()
if(u!=null){w=u.c
w===$&&C.c()
w=d>=w.length}else w=!0
if(w)return C.f8(null,x.H)
w=u.c
w===$&&C.c()
v=w[d]
w=this.c
w.toString
return C.bU(E.lA,null,new A.ecD(this,v,u),w,!0,!0,!0,D.k2,!1,!1,x.H)},
azn(d){var w=this.c
w.toString
return C.bU(E.lA,null,new A.ecn(this,d),w,!0,!0,!1,D.k2,!1,!1,x.H)},
cE2(){var w=this.c
w.toString
return C.bU(E.lA,null,new A.edz(this),w,!0,!0,!0,D.k2,!1,!1,x.H)},
cDr(){var w=this.c
w.toString
return C.bU(D.L,null,new A.edl(this),w,!0,!0,!0,null,!1,!1,x.H)},
b7B(d,e){var w,v,u,t=this,s=t.dx
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
if(e){s=new A.aWu(!0,w,d,C.a([],s))
s.b_9()}else{s=new A.aWu(!1,w,d,C.a([],s))
s.b_9()}t.cx=s
t.cy=t.CW.gip()/1000
t.x=!0
t.r="look"
t.w=!1
s=D.d.gI(t.cx.d)
t.bj.aa(0)
t.b8=!1
t.m(new A.ecX(t,s.a))
t.y0()
t.dx=C.dh(D.je,new A.ecY(t))
t.m(new A.ecZ())},
czf(d){return this.b7B(d,!1)},
bNT(d,e){var w,v=d.w[e],u=v.b
A:{if("left"===u){w=new A.q(-d.gex(0)/2,40,v.c+d.ghs(0)/2-40)
break A}if("right"===u){w=new A.q(d.gex(0)/2,40,v.c+d.ghs(0)/2-40)
break A}w=new A.q(v.c,40,0)
break A}return w},
cDs(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=i.cx
if(h==null||i.c==null)return
w=i.CW.gip()/1000-i.cy
v=h.e
v===$&&C.c()
if(w>=v){i.Sb()
i.iG("The tour is over. Press Tour to walk the house again.")
return}if(i.b8)return
u=h.bbW(w)
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
A.fX(1000,50,0.25,"tri")
p=!0}if(p)i.m(i.giW())
m=Math.max(s.gex(0)*0.95,s.ghs(0)*1.15)+20
t=t&&v<s.w.length
q=u.b
if(t){l=i.bNT(s,v)
k=D.dw.aw(0,D.k.E(u.ay,0,1))
j=s.w[v].b
v=i.e
v===$&&C.c()
t=j==="back"?14:0
if(j==="left")n=0.55*k
else n=j==="right"?-0.55*k:-0.03
v.hT(m+(70-m)*k,0.2-0.07*k,new A.q(l.a*0.9+q*0.1,36,l.c+t),n)}else{v=i.e
v===$&&C.c()
v.hT(m,0.24,new A.q(q*0.7,30,u.c*0.6+8),-0.05-q/(s.gex(0)/2)*0.2)}if(u.as!==i.dy)i.m(new A.edm(i,u))},
ajK(d){return this.cDq(d)},
cDq(d){var w=0,v=C.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j
var $async$ajK=C.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:l={}
r.b8=!0
l.a=null
t=4
p=$.aV.al$.x.h(0,r.a_)
p=p==null?null:p.gbd()
q=x.cU.a(p)
p=q
p=p==null?null:p.m6(0.6).da(0,D.iU)
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
r.axF(d.a,!0)
p=r.d
n=p.d
n===$&&C.c()
m=n[p.e]
p=d.ch
if(p>=0&&p<m.w.length)m.ax.n(0,p,1.25)
r.m(new A.edb(l,r))
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
Sb(){var w,v,u,t=this,s=t.dx
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
t.m(new A.ed3(t))
t.y0()},
cm7(){var w,v,u,t,s,r,q,p,o,n=this,m=n.cx
if(m!=null)return m.bbW(n.CW.gip()/1000-n.cy)
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
return A.atR(n.c5.d>0,0,-1,"",!1,o,"",-1,q,!1,!1,!1,v.a,p,r,u,s,t)}return null},
b8k(){var w,v=this,u=v.c5,t=u.r
if(t<=0)return
u.r=0
w=v.ghL()
if(w!=null)w.r=Math.max(0,w.r-t)
if(v.c!=null)v.m(new A.ed4())},
a2M(){var w,v=this,u=v.d
u===$&&C.c()
w=u.d
w===$&&C.c()
u=w[u.e]
if(u.c!=="outside")return
w=v.aC;(w==null?v.aC=A.hnr(u,0,24):w).MC(0)
v.aM=!0
v.bL=Date.now()
u=v.b4
if(u!=null)u.bR(0)
u=new A.a5g(v.gcG7(),D.ZO)
u.h5(0)
v.b4=u
v.m(new A.ecW())
v.iG("Slide the round stick to walk. Walk up to a door to go in: the house, the hospital or the shop. Double tap a spot to go there.")},
a2Q(){var w,v=this
v.aM=!1
v.be=v.b2=0
v.bi=!1
w=v.b4
if(w!=null)w.bR(0)
v.b4=null
w=v.aC
if(w!=null)w.x=!1
v.m(new A.ed2())},
cG8(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=g.aJ,e=f==null
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
w.MC(0)
w.z=g.bi&&g.bG==null
if(g.bG==null)w.aJx()
w.cOW(s)
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
g.eg(p?"You are too tired to walk. Rest a little, or buy some food in a shop.":"The car has no gas. Get out, walk to a gas station and buy gas.",!1)}w.at=null
m=!1}else if(u!==0||v!==0){w.at=null
m=w.aLO(0,r*v+q*u,-q*v+r*u,s)}else m=w.FF(0,s)
v=!m
if(v)w.x=!1
if(g.bZ===0){u=g.d
u===$&&C.c()
p=u.d
p===$&&C.c()
l=p[u.e].c==="outside"}else l=!1
if(l){u=m&&g.bG==null
k=o.bjU(s,m&&g.bG!=null,u)}else k=null
if(k!=null)g.eg(k,!1)
g.b8k()
if(!v||w.Q>0){v=g.e
u=w.f
p=w.r
v.as=null
v.d=new A.q(u,30,p)
v.aV()}if(!e){f.cx=g.al
j=f.fv(0,g.ghL())
g.al=f.cx
if(j!=null){g.iG(j)
g.m(g.giW())}if(f.cy){f.cy=!1
g.YE(f)}if(f.dx){f.dx=!1
if(!g.id)g.m(new A.edK(g))}if(f.db){f.db=!1
if(!g.k2)g.m(new A.edL(g))}if(f.w){f.w=!1
if(!g.k3)g.m(new A.edM(g))}e=f.x
if(e!==g.k4){g.k4=e
v=g.e
if(e)v.hT(330,0.35,B.h1j,1.35)
else v.hT(170,0.4,new A.q(0,30,110),0)}e=f.at
e===$&&C.c()
v=!1
if(e.r>308)if(Math.abs(e.f)<36)e=!(f.a==="tower"&&f.f>1)
else e=v
else e=v
if(e)g.aXx()
if(!g.k4&&g.ok==null)g.c1r()
return}e=!1
if(g.bG==null){e=g.gpm()
e=(e==null?null:e.x)!=null}if(e){e=g.gpm()
e.toString
g.aS1(e.bkt(w.f,w.r,g.CW.gip()/1000))}e=!1
if(g.bG==null){e=g.d
e===$&&C.c()
v=e.d
v===$&&C.c()
e=v[e.e].c==="outside"&&g.ok==null&&g.bZ===0}if(e){e=$.aRE()
e.FF(0,g.CW.gip()/1000)
i=e.cRf(w.f,w.r)
if(i>=0)g.csd(i)}e=g.bG
if(e!=null)g.cE9(w)
if(m&&g.bG==null){if(Math.abs(w.f)<24){e=w.r
e=e>-2&&e<14}else e=!1
if(e)if(!(Math.abs(w.w)>2.2)){e=w.at
e=e!=null&&e.b<4}else e=!0
else e=!1
if(e){g.a2Q()
g.AC(10)
g.iG("You are inside the living room. Use Go outside to come back out.")
return}e=g.d
e===$&&C.c()
v=e.d
v===$&&C.c()
e=D.d.gag(v[e.e].x)
v=new C.f5(e,new A.edN())
while(v.C()){u=e.gS(0)
h=A.vD(new A.q(0,0,B.hC.h(0,u.b).d/2+10),u.e*3.141592653589793/2)
if(Math.abs(w.f-(u.c+h.a))<22&&Math.abs(w.r-(u.d+h.c))<16){g.ab6(u)
return}}}g.cEs(w)},
c1r(){var w,v,u,t,s,r,q,p,o,n,m=this,l=m.e
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
if(s!==w)l.bo2(s)},
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
s=A.h0b(w,d,u[v.e].k4.t(0,t))
s.cx=q.al
s.B(q.ghL())
q.ajm(s,q.gIA().h(0,t))
s.B(q.ghL())
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
v.r8(!0)
q.e.hT(170,0.4,new A.q(0,30,110),0)
q.m(q.giW())
A:{if("hospital"===w){w="The hospital. Walk onto the blue mat to admit the sick, and up to a bed to treat the patient. Walk to the green mat to go out."
break A}if("dmv"===w){w="The licence office. Walk onto the blue mat at the desk to get your Uber licence. Walk to the green mat to go out."
break A}if("tower"===w){w="The lobby of an office tower. Walk onto the blue mat (or tap the elevator) to choose a level. Walk to the green mat to go out."
break A}if("house2"===w||"bighouse"===w){w="The house. Walk onto the red or green mat at the breaker panel. Walk to the green mat to go out."
break A}if("school"===w){w="The school. Walk onto the mats to teach the class or read in the library. Walk to the green mat to go out."
break A}if("firestation"===w){w="The fire station. Walk onto the mats to check the equipment. Walk to the green mat to go out."
break A}w="The shop. Walk onto the yellow mat for food and the purple mat for medicine. Walk to the green mat to go out."
break A}q.iG(w)
A.fX(660,80,0.25,"tri")},
aXx(){var w,v,u,t=this,s=t.aJ,r=t.aC
if(s==null||r==null)return
w=s.b
v=B.hC.h(0,w.b)
v.toString
t.al=s.cx
t.aJ=null
t.be=t.b2=0
u=A.vD(new A.q(0,0,v.d/2+30),w.e*3.141592653589793/2)
r.f=w.c+u.a
r.r=w.d+u.c
r.w=0
r.at=null
r.MC(0)
t.m(t.giW())
t.y0()
v=t.e
v===$&&C.c()
v.apR(new A.q(r.f,30,r.r))
t.iG("You are back in the city.")},
cEs(d){var w,v,u,t,s,r,q,p,o,n,m=this,l={}
l.a=null
w=m.bG==null
v=!1
if(!w||m.al==null){u=m.c5.b
if(u<(!w?0.7:0.99)){u=m.d
u===$&&C.c()
t=u.d
t===$&&C.c()
u=D.d.b3(t[u.e].x,new A.edD(d))
v=u}}if(v)l.a=new C.Gh(new A.edE(m),"\u26fd Buy gas ("+A.h8M(m.c5.b)+" \u2b50)")
else if(!w)l.a=new C.Gh(m.gbTy(),"\ud83d\udeaa Get out")
else{if(m.al!=null)l.a=new C.Gh(m.gc89(),"\u2b07 Put the crate down")
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
if(t==="crate"&&q<46){l.a=new C.Gh(new A.edF(m,r),"\ud83d\udce6 Pick up the crate")
break}if(t==="pole"||t==="lamppost"){o=m.d
n=o.d
n===$&&C.c()
o=n[o.e].k3.t(0,r.a)&&q<60}else o=!1
if(o){l.a=new C.Gh(new A.edG(m,r),"\ud83d\udd27 Fix the street light")
break}if(D.d.t(B.HY,t)&&q<36){l.a=new C.Gh(new A.edH(m,r),"\ud83c\udf4e Feed the "+p)
break}if(D.d.t(B.dfb,t)&&q<60){l.a=new C.Gh(new A.edI(m,r),"\ud83d\ude97 Get in the "+p)
break}}}w=l.a
w=w==null?null:w.b
u=m.cL
if(w!=(u==null?null:u.b))m.m(new A.edJ(l,m))},
bQK(d){var w,v=this,u=v.cl,t=d.a,s=u.h(0,t),r=B.hC.h(0,d.b).a
if(s!=null&&v.CW.gip()/1000-s<30){v.eg("The "+r.toLowerCase()+" has just eaten. Come back in a little while.",!1)
return}u.n(0,t,v.CW.gip()/1000)
u=v.ghL()
if(u==null)w=null
else{++u.r
w="You fed the "+r.toLowerCase()+". +1 point."
u.PR(w)}if(w==null)w="You fed the "+r.toLowerCase()+"."
A.fX(880,90,0.25,"tri")
v.m(new A.eaW())
v.iG(w)},
bTn(d){var w=this,v=w.aC
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
w.m(w.giW())
w.iG("You are driving the "+B.hC.h(0,d.b).a.toLowerCase()+". Slide the stick to drive. Press Get out to stop.")
A.fX(300,120,0.25,"tri")},
bTz(){var w,v,u,t,s,r,q=this,p=q.bG,o=q.aC
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
break}}o.aJx()
q.m(q.giW())
q.iG("You got out.")},
bOz(){var w=this.bG,v=this.aC
if(w==null||v==null)return null
return new C.ec([w.b,v.f,v.r,v.w,w.f])},
yg(d){return this.cod(d)},
cod(d){var w=0,v=C.j(x.H),u=1,t=[],s=[],r=this,q
var $async$yg=C.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:++r.bZ
u=2
q=r.c
q.toString
w=5
return C.b(C.a4(q,!1).cc(d),$async$yg)
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
Z5(){var w=0,v=C.j(x.H),u=1,t=[],s,r,q
var $async$Z5=C.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:u=3
w=6
return C.b(C.az(),$async$Z5)
case 6:s=e
w=C.eC(J.r(s.a,"ngmy_city_locked_until"))!=null?7:8
break
case 7:w=9
return C.b(J.hC(s,"ngmy_city_locked_until"),$async$Z5)
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
return C.i($async$Z5,v)},
aBQ(d){var w=this,v=++w.hN
if(v>=3){w.hN=0
w.B5()
w.b0F()}else if(v===2){w.eg(d+". That is two in a row.",!1)
w.b0F()}else w.eg(d+". Answer the phone and finish the job, or you lose your place.",!1)},
b0F(){A.fX(1046,160,0.3,"sine")
this.m(new A.ebC(this))},
gaX4(){return this.bZ>0||this.cJ!=null||Date.now()<0||this.p4},
c8d(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=this,a2=a1.d
a2===$&&C.c()
a2=a2.d
a2===$&&C.c()
w=D.d.fY(a2,new A.ebz())
v=a1.ghL()
a2=x._
u=C.a([],a2)
for(t=w.x,s=t.length,r=w.k4,q=0;q<t.length;t.length===s||(0,C.L)(t),++q){p=t[q]
o=p.b
if(o==="house2"||o==="bighouse"){o=p.a
o=!r.t(0,o)&&o!==a1.jf}else o=!1
if(o)u.push(p)}s=C.a([],a2)
for(o=t.length,n=w.k3,q=0;q<t.length;t.length===o||(0,C.L)(t),++q){p=t[q]
m=p.b
if((m==="pole"||m==="lamppost")&&!n.t(0,p.a))s.push(p)}l=new C.Z(t,new A.ebA(),C.T(t).k("Z<1>"))
k=C.a([0,1,2,3],x.t)
o=a1.iN
D.d.dZ(k,o)
a2=C.a([],a2)
for(m=t.length,j=w.cy,q=0;q<t.length;t.length===m||(0,C.L)(t),++q){p=t[q]
i=p.b
if((i==="tower"||i==="hq")&&!j.aj(0,p.a))a2.push(p)}for(t=k.length,m=v!=null,q=0;q<k.length;k.length===t||(0,C.L)(k),++q){h=k[q]
if(h===0&&u.length!==0&&r.a<4){p=u[o.ap(u.length)]
a2=p.a
r.M(0,a2)
a1.jf=a2
return new A.Qj(p,p.b==="bighouse"?"the big house":"the house","power","",0)}if(h===1&&m&&!l.gan(0)){i=v.gC6()
g=C.T(i).k("Z<1>")
f=C.C(new C.Z(i,new A.ebB(),g),g.k("M.E"))
i=f.length
if(i!==0){e=f[o.ap(i)]
e.e=!0
e.c=Math.min(e.c,70)
d=l.gag(0)
if(!d.C())C.b9(C.ft())
return new A.Qj(d.gS(0),"the hospital","sick",e.a.b,0)}}if(h===3&&a2.length!==0&&j.a<3){p=a2[o.ap(a2.length)]
a0=2+o.ap(A.hyZ(p)-1)
j.n(0,p.a,a0)
return new A.Qj(p,p.b==="hq"?"the NGMY company building":"the office tower","office","",a0)}if(h===2&&s.length!==0&&n.a<4){p=s[o.ap(s.length)]
n.M(0,p.a)
return new A.Qj(p,"the street","light","",0)}}return null},
aXe(d){var w,v,u,t=this.d
t===$&&C.c()
t=t.d
t===$&&C.c()
w=D.d.fY(t,new A.ebl())
switch(d.c){case"power":return!w.k4.t(0,d.a.a)
case"light":return!w.k3.t(0,d.a.a)
case"office":return!w.cy.aj(0,d.a.a)
default:v=this.ghL()
if(v==null)return!1
t=v.c
t===$&&C.c()
u=new C.Z(t,new A.ebm(d),C.T(t).k("Z<1>"))
if(!u.gag(0).C())return!0
return u.gI(0).r>=0||!u.gI(0).e||!u.gI(0).f}},
Sp(d){var w,v,u,t=this,s=t.aC
if(s!=null){w=t.d
w===$&&C.c()
v=w.d
v===$&&C.c()
w=v[w.e].c!=="outside"}else w=!0
if(w)return
if(t.aJ!=null)t.aXx()
s.at=null
s.MC(0)
u=t.bSh(d,s)
s.f=u.a
s.r=u.b
s.aJx()
w=t.e
w===$&&C.c()
w.xl(170,new A.q(s.f,30,s.r))
if(!t.aM)t.a2M()},
bSh(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=d.b,i=B.hC.h(0,j)
i.toString
w=B.aQw.t(0,j)
v=w?i.d/2+32:34
u=A.vD(new A.q(0,0,1),d.e*3.141592653589793/2)
j=u.c
i=u.a
t=-i
s=C.a([],x.f)
if(w)for(r=0;r<5;++r)for(q=v+B.dc1[r],p=i*q,q=j*q,o=0;o<5;++o){n=B.d1f[o]
s.push(new C.z(d.c+p+j*n,d.d+q+t*n))}else for(m=0;m<12;++m){l=m*3.141592653589793/6
s.push(new C.z(d.c+Math.cos(l)*v,d.d+Math.sin(l)*v))}for(j=s.length,r=0;r<s.length;s.length===j||(0,C.L)(s),++r){k=s[r]
if(!e.KP(k.a,k.b))return k}return D.d.gI(s)},
cz2(d){var w,v,u=this
u.cJ=d
u.hO=0
u.Sp(d.a)
w=d.c
A:{if("sick"===w){v="New job: "+d.d+" is sick. Go into the hospital and onto the desk."
break A}if("light"===w){v="New job: a street light is out. Tap the dark light to fix it."
break A}v="New job: a house has no power. Walk in and fix it at the panel."
break A}u.eg(v,!0)
u.m(new A.ecR())},
bU7(d){var w,v=this,u=v.d
u===$&&C.c()
w=u.d
w===$&&C.c()
if(w[u.e].c!=="outside")return
v.Sp(d)
u=d.b
if(u==="house2"||u==="bighouse")v.ab6(d)
else if(u==="tower"||u==="hq"){v.ab6(d)
v.m(new A.ebf(v))}else v.eg(y.Y,!0)},
cDA(){var w,v,u,t=$.aRE(),s=C.a([],x.f),r=this.gpm()
r=r==null?null:r.amr(this.CW.gip()/1000)
if(r==null)r=B.I6
w=r.length
v=0
for(;v<r.length;r.length===w||(0,C.L)(r),++v){u=r[v]
s.push(new C.z(u.b,u.c))}t.d=s
return A.ill(this.CW.gip()/1000)},
csd(d){var w,v,u,t,s,r=this,q=Date.now()
if(q-r.mM<1e4)return
r.mM=q
w=r.aC
if(w==null)return
A.fX(110,600,0.5,"noise")
C.fL()
r.be=r.b2=0
w.at=null
v=r.c5
v.a=Math.min(v.a,0.2)
v.c=v.d=0
u=B.kn[d].a==="bus"?"bus":"police car"
v=r.d
v===$&&C.c()
t=v.d
t===$&&C.c()
v=t[v.e].x
t=C.T(v).k("Z<1>")
s=C.C(new C.Z(v,new A.ecF(),t),t.k("M.E"))
if(s.length===0){r.eg("A "+u+" ran you over! Always cross at the zebra crossing when the green walking person shows.",!1)
return}v=r.gpm()
if(v!=null)v.cWK(D.d.gI(s))
r.Sp(D.d.gI(s))
r.ab6(D.d.gI(s))
r.eg("\ud83d\ude91 A "+u+" ran you over! An ambulance brought you to the hospital. Medicine and food are being ordered for you: they are on the Orders board. Cross at the zebra crossing when the green walking person shows.",!1)
r.m(new A.ecG(r))},
aj3(){var w=0,v=C.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g
var $async$aj3=C.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:h=r.d
h===$&&C.c()
if(h.a.length!==0){w=1
break}q=null
p=$.ajX
w=p==null||p.a!==h.b?3:4
break
case 3:t=6
w=9
return C.b(A.aU2(),$async$aj3)
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
break}n=$.ajX
if(n!=null&&n.a===r.d.b)m=n
else{if(q!=null){h=C.aK(J.r(q,"seed"))
h=h==null?null:D.k.N(h)
if(h==null)h=-1
h=h===r.d.b}else h=!1
if(h)m=A.h0j(q)
else if(q!=null&&r.ei){h=C.aK(J.r(q,"seed"))
l=h==null?null:D.k.N(h)
h=A.aWt(l==null?r.d.b:l)
r.d=$.Eb=h
A.hea(h,q)
m=A.h0j(q)}else{h=r.d.b
m=A.h0i(h,h)
m.NE(r.d)}}$.ajX=m
for(h=m.d,k=h.length,j=r.bJ,i=0;i<h.length;h.length===k||(0,C.L)(h),++i)j.M(0,h[i].a)
r.m(new A.ecS(r))
r.by=C.dh(D.fA,new A.ecT(r))
case 1:return C.h(u,v)
case 2:return C.f(s.at(-1),v)}})
return C.i($async$aj3,v)},
c8c(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=i.ghL()
if(h==null||i.c==null)return
if(i.cx==null){w=i.d
w===$&&C.c()
h.aDu(0,1,w)}if(++i.bX%8===0){w=i.d
w===$&&C.c()
h.CU(0,w)}if(i.aJ!=null&&i.gakl())i.asG()
w=!1
if(!i.aM)if(i.bZ===0){v=i.d
v===$&&C.c()
u=v.d
u===$&&C.c()
if(u[v.e].c==="outside"){w=i.c5
w=w.c>0||w.d>0}}if(w){t=i.c5.a6Z(1)
if(t!=null)i.eg(t,!1)
i.b8k()}if(i.aM){w=i.d
w===$&&C.c()
v=w.d
v===$&&C.c()
w=v[w.e].c==="outside"&&!i.c5.f&&i.iN.ap(240)===0}else w=!1
if(w){w=i.c5
w.f=!0
w.aV()
i.eg("You feel unwell: a headache. You tire faster until you take pills from a shop.",!1)}if(Date.now()<0||i.bZ>0)return
w=!1
if(D.o.F(i.bX,45)===20){v=i.d
v===$&&C.c()
if(v.a.length===0){w=v.d
w===$&&C.c()
v=w[v.e].c==="outside"
w=v}}if(w)i.c5C()
w=i.d
w===$&&C.c()
if(w.a.length===0){v=w.d
v===$&&C.c()
v=v[w.e].c==="outside"}else v=!1
if(v){w=i.gpm()
s=w==null?null:w.FF(0,i.CW.gip()/1000)
if(s!=null)i.eg("\ud83c\udfc1 "+s,!0)
r=i.aC
if(r!=null){w=i.gpm()
w=(w==null?null:w.x)!=null&&i.aJ==null}else w=!1
if(w){w=i.gpm()
w.toString
i.aS1(w.bkt(r.f,r.r,i.CW.gip()/1000))}q=i.cJ
if(q!=null){++i.hO
if(i.aXe(q)){i.hN=0
i.lg=Date.now()
i.lA=0
i.cJ=null
i.hO=0
if(q.c==="sick"){p=10+i.iN.ap(26)
w=i.ghL()
if(w!=null)w.r+=p
i.eg("The sick person is at the hospital. +"+p+" stars. Well done.",!0)}if(i.c!=null)i.m(i.giW())}else if(i.hO>=240){i.cJ=null
i.hO=0
i.aBQ("The job was not finished in time")}}else{w=i.eK
if(w.length!==0&&i.aJ==null&&i.bD==null&&i.bE==null&&Date.now()-i.lg>1e4){o=D.d.cz(w,0)
if(!i.aXe(o))i.cz2(o)}else if(i.bD==null&&i.bE==null&&++i.lA>=45)i.cv5()}}else{v=w.d
v===$&&C.c()
if(v[w.e].c!=="outside")i.lA=0}for(w=h.d,v=w.length,u=i.bJ,n=0;n<w.length;w.length===v||(0,C.L)(w),++n){m=w[n]
l=i.d
k=l.d
k===$&&C.c()
if(k[l.e].c!=="outside")continue
if((i.bZ>0||i.cJ!=null||Date.now()<0||i.p4)&&!u.t(0,m.a))continue
if(u.M(0,m.a)){i.lA=0
i.bD=m
i.bE=null
i.b7u()}}u.pp(new A.ebs(h),!0)
j=i.bD
if(j!=null&&!D.d.b3(w,new A.ebt(j)))i.B5()},
cv5(){var w,v,u=this
u.lA=0
w=u.c8d()
if(w==null)return
if(u.gaX4()){v=u.eK
if(v.length<3)v.push(w)
return}u.b4I(w)},
b4I(d){var w=this
w.lA=0
w.bD=null
w.bE=d
w.b7u()},
b7u(){var w,v=this
v.T=0
w=v.P
if(w!=null)w.a4(0)
v.P=C.dh(D.rr,new A.ecU(v))
v.m(new A.ecV())},
B5(){var w=this,v=w.P
if(v!=null)v.a4(0)
w.P=null
if(w.c==null)return
w.m(new A.ed1(w))},
chC(){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null
if(l.ok!=null)return k
if(l.aM){w=l.d
w===$&&C.c()
v=w.d
v===$&&C.c()
u=v[w.e].c==="outside"}else u=!1
t=l.bD
s=l.bE
if(!u&&t==null&&s==null)return k
r=l.ez
w=new A.ebR()
v=new A.ec_(r)
q=x.p
p=C.a([],q)
if(s!=null){o=C.ha(D.aE,k,C.d(s.gbeI(),k,k,k,k,k,k,D.nI,k,k,k),k,28)
n=s.gaE0()
p.push(v.$7$about$avatar$glow$onAnswer$onDecline$onLater$who(s.gbr2(),o,D.bu,new A.ebT(l,s),new A.ebU(l),new A.ebV(l,s),n))}if(t!=null){o=B.CK[t.b]
n=o.b
p.push(v.$6$about$avatar$glow$onAnswer$onDecline$who("NGMY City \xb7 mobile",C.ha(o.e.c,k,C.d(n[0],k,k,k,k,k,k,D.K3,k,k,k),k,28),D.be,new A.ebW(l,t),l.gczA(),n))}if(u){v=C.a([],q)
o=l.cL
if(o!=null)v.push(w.$3$col("\u270b "+o.b,o.a,D.bu))
o=C.a([],q)
if(l.bG==null){n=l.bi
m=n?"\ud83c\udfc3 Run: on":"\ud83c\udfc3 Run"
o.push(w.$3$on(m,new A.ebX(l),n))}if(l.bG==null)o.push(w.$3$col("\u2b06 Jump",new A.ebY(l),D.co))
v.push(C.B(o,D.m,k,D.e,D.O,0,k,k))
w=l.bG==null
o=w?206:140
v.push(new C.D(D.a_O,new C.a5(o,k,new A.Uw(l.c5,!w,12,k),k),k))
p.push(new C.D(B.bBw,C.B(C.a([new A.aIY(new A.ebZ(l),k),C.x(v,D.dI,k,D.e,D.O,0,D.p)],q),D.dI,k,D.iI,D.i,0,k,k),k))}return new C.a5(r,k,C.x(p,D.m,k,D.e,D.O,0,D.p),k)},
aTU(){var w=this.d
w===$&&C.c()
if(w.a.length!==0)this.En()
else this.a0u()},
En(){var w=0,v=C.j(x.H),u,t=this,s,r,q,p
var $async$En=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:p=t.d
p===$&&C.c()
s=p.d
s===$&&C.c()
r=s[p.e]
if(r.gz9()){t.iG("This lesson is done. Try everything: it all works.")
w=1
break}p=r.p4
w=p==="ptrap"||p==="faucet"?3:5
break
case 3:if(r.RG==null)r.RG=A.h4_()
w=6
return C.b(t.yg(C.e0(new A.ebD(r),!1,null,x.H)),$async$En)
case 6:w=4
break
case 5:if(r.R8==null)r.R8=new A.CA(C.U(x.S,x.N))
w=7
return C.b(t.yg(C.e0(new A.ebE(r),!1,null,x.H)),$async$En)
case 7:case 4:if(t.c==null){w=1
break}t.m(t.giW())
if(r.gz9()){p=t.ghL()
if(p!=null)p.r+=10
q=r.p4
A:{p="Done! Tap the outlet and plug something in."
if("switch"===q){p="Done! Tap the switch on the wall: the light comes on."
break A}if("fan"===q){p="Done! Tap the wall switch and the fan spins."
break A}if("outlet"===q||"gfci"===q)break A
s=D.d.t(B.jV,q)
if(s){p="Done! Tap the switch on the wall: it works."
break A}s=D.d.t(B.lM,r.p4)
if(s)break A
p="Done! The sink works."
break A}t.iG(p)}case 1:return C.h(u,v)}})
return C.i($async$En,v)},
akk(d){return this.cGz(d)},
cGz(d){var w=0,v=C.j(x.H),u,t=this,s,r,q,p
var $async$akk=C.e(function(e,f){if(e===1)return C.f(f,v)
for(;;)switch(w){case 0:p=t.d
p===$&&C.c()
s=p.d
s===$&&C.c()
r=s[p.e].id[d]
q=r.gwG()
w=3
return C.b(t.yg(C.e0(new A.edO(r),!1,null,x.H)),$async$akk)
case 3:if(t.c==null){w=1
break}t.m(t.giW())
if(r.gwG()&&!q){p=t.ghL()
if(p!=null)p.r+=8}if(r.gwG()){p=q?"":"You are paid 8 stars. "
s=r.a==="switch"?"Tap it to turn the light on and off.":"Tap it to plug something in."
t.iG("Wired! "+p+s)}case 1:return C.h(u,v)}})
return C.i($async$akk,v)},
a0u(){var w=0,v=C.j(x.H),u,t=this,s,r,q,p,o,n
var $async$a0u=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:n=t.d
n===$&&C.c()
s=n.d
s===$&&C.c()
r=s[n.e]
if(r.c==="outside"){w=1
break}s=r.CW
if(s==null){q=A.csF(A.imc(r),r.b,!1,n.b*37+r.a,!1)
q.amf()
if(!r.ay)q.cJD()
r.CW=q
n=q}else n=s
n.b=t.d.c
p=r.gkO()
w=3
return C.b(t.yg(C.e0(new A.ebG(r),!1,null,x.H)),$async$a0u)
case 3:if(t.c==null){w=1
break}t.m(t.giW())
if(r.gkO()&&!p){o=10+t.iN.ap(26)
n=t.ghL()
if(n!=null)n.r+=o
n=r.gjR()?"":" The room still needs its plumbing, so it stays red until the pipes are done too."
t.eg(r.b+": the wiring is finished and the light has power. You are paid "+o+" stars!"+n,!0)}else if(r.gkO()){n=r.gjR()?"":" The room still needs its plumbing."
t.iG(r.b+": the wiring is finished. The light has power."+n)}case 1:return C.h(u,v)}})
return C.i($async$a0u,v)},
a0l(){var w=0,v=C.j(x.H),u,t=this,s,r,q,p,o,n
var $async$a0l=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:n=t.d
n===$&&C.c()
s=n.d
s===$&&C.c()
r=s[n.e]
s=r.c
if(!(s==="bathroom"||s==="kitchen")){t.eg("This room has no plumbing. Bathrooms and the kitchen do.",!1)
w=1
break}q=r.fr
if(q==null){s=s==="kitchen"?"kitchen":"bathroom"
s=r.fr=A.h3Z(!1,n.b*41+r.a,s)
n=s}else n=q
if(!r.ch&&!n.ga3M())r.fr.cJC()
r.fr.b=t.d.c
p=r.gjR()
w=3
return C.b(t.yg(C.e0(new A.ebF(r),!1,null,x.H)),$async$a0l)
case 3:if(t.c==null){w=1
break}t.m(t.giW())
if(r.gjR()&&!p){o=10+t.iN.ap(26)
n=t.ghL()
if(n!=null)n.r+=o
t.eg(r.b+": the plumbing is finished and nothing leaks. You are paid "+o+" stars!",!0)}else if(r.gjR())t.iG(r.b+": the plumbing is finished and nothing leaks.")
case 1:return C.h(u,v)}})
return C.i($async$a0l,v)},
bBH(){var w=this.c
w.toString
return C.bU(E.lA,null,new A.e9i(this),w,!0,!0,!1,D.k2,!1,!1,x.H)},
bBl(d){var w,v,u,t,s,r,q,p,o=this,n=o.d
n===$&&C.c()
w=n.d
w===$&&C.c()
v=w[n.e]
n=v.c
if(n==="outside"||n==="hall"){o.eg("Add devices in a room, not in the hall or the garden.",!1)
return}n=v.id
if(n.length>=4){o.eg("This room already has four added devices.",!1)
return}w=C.a([-v.gex(0)/4,v.gex(0)/4],x.n)
for(u=v.w,t=D.d.gag(u),s=new C.f5(t,new A.e9c());s.C();)w.push(t.gS(0).c)
for(u=D.d.gag(u),t=new C.f5(u,new A.e9d());t.C();)w.push(u.gS(0).c+24)
for(u=n.length,r=0;r<n.length;n.length===u||(0,C.L)(n),++r)w.push(n[r].b)
p=-v.gex(0)/2+14
for(;;){if(!(p<=v.gex(0)/2-14)){q=null
break}if(D.d.d5(w,new A.e9e(p))){q=p
break}p+=6}if(q==null){o.eg("There is no free place left on the back wall.",!1)
return}o.m(new A.e9f(o,v,d,q))
o.iG("Added. It is red because it is not wired: tap it to wire it.")},
aeu(d,e){var w,v,u=this,t=u.d
t===$&&C.c()
w=t.d
w===$&&C.c()
v=w[t.e].BU(u.Q)
if(v==null)return
u.m(new A.ebw(u,v,D.d.t(B.RO,v.b),d,e))},
c8k(){var w,v,u=this,t=u.d
t===$&&C.c()
w=t.d
w===$&&C.c()
v=w[t.e].BU(u.Q)
if(v==null)return
u.m(new A.edn(u,v))},
cpm(){var w,v,u=this,t=u.d
t===$&&C.c()
w=t.d
w===$&&C.c()
v=w[t.e].BU(u.Q)
if(v==null)return
u.m(new A.ecu(u,v))
u.iG(B.hC.h(0,v.b).a+": "+B.cWs[v.f]+".")},
c8i(d){var w,v,u=this,t=u.d
t===$&&C.c()
w=t.d
w===$&&C.c()
v=w[t.e].BU(u.Q)
if(v==null)return
u.m(new A.ecv(u,v))},
bBo(d){var w,v=this,u=v.d
u===$&&C.c()
w=u.d
w===$&&C.c()
v.m(new A.e9g(v,w[u.e].M(0,d)))
v.iG(B.hC.h(0,d).a+" added. Move it with the arrows.")},
AB(d,e,f,g,h){var w=null,v=e?g.j(0.25):D.c.j(0.07),u=C.n(14),t=e?g:D.aY
t=C.J(t,D.r,e?2:1)
v=C.a([C.p(w,C.d(d,w,w,w,w,w,w,C.l(w,w,e?g:D.c,w,w,w,w,w,w,w,w,11,w,w,D.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),D.f,w,w,new C.o(v,w,t,u,w,w,D.n),w,w,w,w,D.eI,w,w,w)],x.p)
if(h)v.push(C.ap(w,C.p(w,w,D.f,w,w,new C.o(D.ax,w,C.J(B.Fw,D.r,2),w,w,w,D.a6),w,11,w,w,w,w,w,11),w,w,w,-2,-3,w))
return new C.D(D.fB,C.aB(w,new C.an(D.a_,w,D.ab,D.f,v,w),D.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,!1,D.a3),w)},
ik(d,e,f,g){return this.AB(d,e,f,g,!1)},
J6(d,e,f){return this.AB(d,e,f,D.aE,!1)},
aBX(d,e,f,g){var w=null,v=g==null,u=v?34:w,t=v?w:D.kJ,s=C.n(10),r=e?D.c:D.aY
r=C.J(r,D.r,e?3:1)
if(v)v=w
else v=C.au(C.d(g,w,w,w,w,w,w,C.l(w,w,d.j_()>0.5?D.w:D.c,w,w,w,w,w,w,w,w,12,w,w,D.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w,w,w)
return new C.D(H.u4,C.aB(w,C.p(w,v,D.f,w,w,new C.o(d,w,r,s,w,w,D.n),w,34,w,w,t,w,w,u),D.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,!1,D.a3),w)},
cAt(d,e,f){return this.aBX(d,e,f,null)},
Do(d,e){var w=null,v=D.c.j(0.1),u=C.n(10),t=C.J(D.aY,D.r,1)
return new C.D(D.fB,C.aB(w,C.p(w,C.X(d,D.c,w,w,w,20),D.f,w,w,new C.o(v,w,t,u,w,w,D.n),w,36,w,w,w,w,w,40),D.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,e,w,w,w,w,w,w,!1,D.a3),w)},
bJO(){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null
if(k.cx!=null){w=k.dy
return C.B(C.a([C.E(C.d("\ud83c\udfac "+(w.length===0?"Walking in":w),j,1,D.a1,j,j,j,B.fna,j,j,j),1),k.ik("\u23f9 Stop the tour",!0,k.gczD(),D.c7)],x.p),D.m,j,D.e,D.i,0,j,j)}switch(k.r){case"furniture":w=k.d
w===$&&C.c()
v=w.d
v===$&&C.c()
u=v[w.e].BU(k.Q)
w=x.p
v=C.a([],w)
if(u!=null){t=C.a([k.Do(D.kL,new A.eas(k)),k.Do(D.jA,new A.eat(k)),k.Do(D.rx,new A.eau(k)),k.Do(D.qo,new A.eav(k)),k.Do(G.ap5,k.gc8j()),k.Do(D.mb,k.gcpl())],w)
s=k.d
r=s.d
r===$&&C.c()
if(r[s.e].c==="outside")t.push(k.Do(D.OV,k.gcuK()))
t.push(k.Do(D.e9,k.gc8h(k)))
v.push(new C.a5(j,30,C.cn(t,j,j,j,j,D.aM,!1),j))}else v.push(B.b_e)
w=C.a([],w)
for(t=B.hC.gdV(B.hC),t=t.gag(t);t.C();){s=t.gS(t)
r=D.d.t(B.dit,s.a)
q=k.d
p=q.d
p===$&&C.c()
if(r===(p[q.e].c==="outside")){r=s.b
w.push(k.ik(r.b+" "+r.a,!1,new A.eaw(k,s),D.b4))}}v.push(new C.a5(j,30,C.cn(w,j,j,j,j,D.aM,!1),j))
return C.x(v,D.m,j,D.e,D.O,0,D.p)
case"walls":w=k.as
v=w<0
w=v?"All walls":"Wall "+(w+1)+": tap Look to reset"
v=C.a([k.J6(w,v,new A.eax(k))],x.p)
for(o=0;o<8;++o)v.push(k.aBX(B.azy[o],!1,new A.eay(k,o),B.dt0[o]))
return new C.a5(j,30,C.cn(v,j,j,j,j,D.aM,!1),j)
case"floor":w=C.a([],x.p)
for(o=0;o<7;++o){v=B.azh[o]
t=k.d
t===$&&C.c()
s=t.d
s===$&&C.c()
w.push(k.aBX(v.b,s[t.e].Q===o,new A.eaz(k,o),v.a))}return new C.a5(j,30,C.cn(w,j,j,j,j,D.aM,!1),j)
case"ceiling":w=k.d
w===$&&C.c()
v=w.d
v===$&&C.c()
w=v[w.e].go==="fan"?"\ud83c\udf00 Fan (tap for light)":"\ud83d\udca1 Light (tap for fan)"
w=C.a([k.ik(w,!1,new A.eaA(k),D.b8)],x.p)
for(o=0;o<4;++o){v=B.ay3[o]
t=k.d
s=t.d
s===$&&C.c()
w.push(k.cAt(v,s[t.e].as===o,new A.eaB(k,o)))}return new C.a5(j,30,C.cn(w,j,j,j,j,D.aM,!1),j)
default:n=C.aX(x.S)
w=C.a([k.ik("\u26f6 Full screen",!1,k.gbPU(),D.aK)],x.p)
v=k.d
v===$&&C.c()
t=v.d
t===$&&C.c()
if(t[v.e].c==="outside")w.push(k.ik("\ud83d\udcf1 Phone",!1,k.gbPW(),D.c_))
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
w.push(k.AB("\ud83d\udeaa "+s.b,!1,new A.eaC(k,l),D.b4,!r))}}return new C.a5(j,30,C.cn(w,j,j,j,j,D.aM,!1),j)}},
B(d){var w,v=this,u=null
if(Date.now()<0){w=C.dC(0,0,0,0-Date.now(),0,0).a
return C.c7(u,F.nf,C.bm(!0,C.au(new C.D(D.qi,C.x(C.a([B.fN6,D.ae,B.fNd,D.W,B.fNq,D.aA,C.d("It opens again in "+D.o.ao(w,36e8)+"h "+D.o.F(D.o.ao(w,6e7),60)+"m",u,u,u,u,u,u,B.fp5,u,u,u),D.dT,C.bH(D.aUm,u,new A.edR(d),u)],x.p),D.m,u,D.e,D.O,0,D.p),u),u,u,u),!0,!1,D.af,!0,!0),u,!1,!1,u,u)}w=C.a([C.bS(0,new C.er(v.bFM(d),v.a_),0,0,0)],x.p)
if(v.aB!=null)w.push(C.bS(0,C.dZ(C.lw(new A.edS(v),u,D.dw,D.hu,new C.bV(v.aF,x.ac),new A.edT(v),new C.bp(1,0,x.g6),x.i),!0,u),0,0,0))
return new C.an(D.a_,u,D.ab,D.t,w,u)},
bI3(){var w,v,u=this,t=null,s=C.a([],x.p)
if(u.gakl())s.push(u.ik("\u2705 Complete work",!0,u.gaQL(),D.bf))
w=u.aM
v=w?"\u23f9 Stop walking":"\ud83d\udeb6 Walk the city"
s.push(u.ik(v,w,w?u.gb7N():u.gb7y(),D.be))
s.push(u.ik("\ud83c\udfd7 Build",!1,u.gaNz(),D.be))
w=u.ghL()
w=w==null?t:w.d.length
if(w==null)w=0
s.push(u.AB("\ud83d\udcde Calls",!1,new A.ea4(u),D.c_,w>0))
s.push(u.ik("\ud83c\udfe5 Hospital",!1,new A.ea5(u),D.c7))
s.push(u.ik("\ud83d\uded2 Shop",!1,new A.ea6(u),D.cQ))
s.push(u.ik("\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc67 People",!1,new A.eaa(u),D.co))
s.push(u.ik("\ud83c\udfe0 Go inside",!1,new A.eab(u),D.be))
w=u.aJ
if((w==null?t:w.a==="shop")===!0)s.push(u.ik("\ud83d\uded2 Buy things",u.k2,new A.eac(u),D.bu))
w=u.aJ
if((w==null?t:w.a==="tower")===!0)s.push(u.ik("\ud83c\udfe2 Level "+w.f+" of "+w.gM7(),!1,new A.ead(u),D.co))
if(u.cJ!=null)s.push(u.ik("\ud83d\udccb My job"+(u.awd()==null?"":" \xb7 "+C.w(u.awd())+" m"),!1,new A.eae(u),D.bu))
w=u.eK.length
if(w!==0)s.push(u.ik("\u23f3 Waiting: "+w,!1,new A.eaf(u),D.aE))
s.push(u.AB("\ud83d\udef5 Orders",u.gpm().x!=null,new A.eag(u),D.bu,u.gpm().x==null))
w=u.p4
v=w?"\u23f9 Stop drone":"\ud83d\ude81 Drone"
s.push(u.ik(v,w,new A.eah(u),D.aK))
w=u.h8
v=w?"\ud83c\udff7 Show tags":"\ud83c\udff7 Hide tags"
s.push(u.ik(v,w,new A.ea7(u),D.c7))
s.push(u.ik("\ud83d\udc41 Hide all",!1,new A.ea8(u),D.bM))
w=u.gKx()
s.push(u.ik("\ud83d\ude96 Uber",(w==null?t:w.f)!=null,u.gcE7(),D.bu))
s.push(u.ik("\ud83d\uddfa Map",u.y,new A.ea9(u),D.br))
return s},
gcxJ(){var w,v,u,t,s,r,q,p,o=this
if(!o.h8){w=o.f
w===$&&C.c()
return w}w=o.t7
v=o.f
v===$&&C.c()
if(w===v&&o.qS!=null){w=o.qS
w.toString
return w}o.t7=v
w=C.a([],x.E)
for(u=o.f.c,t=u.length,s=0;s<u.length;u.length===t||(0,C.L)(u),++s){r=u[s]
q=!1
if(r.d===0)if(!r.c.A(0,D.bz)){p=r.b
if(!C.cT(p,"rooms still need work",0))q=!C.cT(p,"house is finished",0)}if(q)w.push(r)}u=o.f
return o.qS=new A.tT(v.a,v.b,w,u.d,u.e,0)},
bFM(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null,d=f.d
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
w=w.a.length!==0?e:new A.e9p(f)
s=f.gcxJ()
r=f.e
r===$&&C.c()
q=f.at
p=f.ax
o=f.ay
n=f.ai
if(f.eu)d=62
else if(f.f1)d=C.aJ(a0,e,d).w.r.b+66
else d=f.y&&f.d.a.length===0?104:10
m=f.chC()
l=x.p
k=C.a([],l)
if(f.y&&f.d.a.length===0&&!f.eu)k.push(new A.bjS(f.d,f.gc8b(),Math.min(138,u*0.36),e))
j=A.Y9(n,m,r,new A.e9q(f),new A.e9r(f),o,q,e,e,new A.e9C(),p,d,f.gbNY(),new A.e9D(f),f.gc8f(),s,t,w,k,e)
i=f.y1!=null||f.y2||f.R8||f.k3||f.go||f.k2||f.id
d=f.ok
h=(d==null?e:d.d)===1
if((i||h)&&!f.ai){d=C.a([j],l)
if(i){if(f.id)w=f.c25()
else if(f.k2)w=f.cwa()
else if(f.go)w=f.chp()
else if(f.k3)w=f.bPl()
else w=f.R8?f.bOA():f.bH_()
d.push(C.bS(0,w,0,0,0))}if(h)d.push(C.ap(e,C.dZ(C.au(new C.jV(f.p3,new A.e9E(),e,e,x.cI),e,e,e),!0,e),e,e,0,0,74,e))
g=new C.an(D.a_,e,D.b2,D.t,d,e)}else g=j
if(f.ai)return f.bIg(g)
if(f.eu)return f.bSk(g)
if(f.f1)return f.ckN(g)
d=f.d
if(d.a.length!==0)d=v.gz9()?"Done \u2713":"To do"
else d=""+d.gcPd()+"/"+f.d.gqT().length+" done"
w=f.d
t=w.d
t===$&&C.c()
w=t[w.e].c==="outside"
t=!w?e:new A.Uw(f.c5,f.bG!=null,12,e)
if(w)w=f.bI3()
else{w=f.x?"\ud83d\udd2d See the whole room":"\ud83c\udfe0 Be inside"
w=C.a([f.ik(w,!1,new A.e9F(f),D.b4)],l)
if(f.d.a.length===0){s=f.cx!=null
r=s?"\u23f9 Stop tour":"\ud83c\udfac Tour"
w.push(f.ik(r,s,new A.e9G(f),D.c_))}w.push(f.ik("\u2b06 Look up at the ceiling",!1,f.gc39(),D.b4))
s=f.z
r=s?"\ud83d\udeb6 Stop looking round":"\ud83d\udd04 Look all round (360)"
w.push(f.ik(r,s,new A.e9H(f),D.cQ))
w.push(f.ik("\ud83d\udcfa TV",!1,f.gcE1(),D.co))
s=f.d
if(s.a.length===0){r=s.d
r===$&&C.c()
s=r[s.e].c!=="outside"?"\ud83c\udf33 Go outside":"\ud83c\udfe0 Go inside"
w.push(f.ik(s,!1,new A.e9I(f),D.be))}s=f.d
r=s.d
r===$&&C.c()
if(r[s.e].c==="outside"){s=f.aM
r=s?"\u23f9 Stop walking":"\ud83d\udeb6 Walk about"
w.push(f.ik(r,s,s?f.gb7N():f.gb7y(),D.be))}if(f.d.a.length===0)w.push(f.ik("\u2795 Add",!1,f.gaNz(),D.be))
if(f.d.a.length===0){s=f.ghL()
s=s==null?e:s.d.length
if(s==null)s=0
w.push(f.AB("\ud83c\udfd8 Community",!1,new A.e9J(f),D.c_,s>0))}w.push(f.ik("\ud83d\udd26 Tester",f.w,new A.e9s(f),D.cQ))
if(f.d.a.length!==0)w.push(f.AB("\ud83d\udd27 Do the lesson",!1,f.gc8e(),D.bu,!v.gz9()))
else{s=f.AB("\u26a1 Wiring",!1,f.gchi(),D.bu,!v.gkO())
r=v.c
r=(r==="bathroom"||r==="kitchen")&&!v.gjR()
D.d.v(w,C.a([s,f.AB("\ud83d\udeb0 Plumbing",!1,f.gcgI(),D.co,r),f.ik("\ud83d\uddfa Map",f.y,new A.e9t(f),D.br)],l))}}return A.U1(D.aE,new A.e9u(f,a0),C.x(C.a([new C.a5(e,30,C.cn(w,e,e,e,e,D.aM,!1),e),D.au,new C.a5(e,30,C.cn(C.a([f.J6("\ud83d\udc41 Look",f.r==="look",new A.e9v(f)),f.J6("\ud83d\udecb Furniture",f.r==="furniture",new A.e9w(f)),f.J6("\ud83e\uddf1 Walls",f.r==="walls",new A.e9x(f)),f.J6("\ud83d\udfeb Floor",f.r==="floor",new A.e9y(f)),f.J6("\u2b1c Ceiling",f.r==="ceiling",new A.e9z(f)),f.J6("\ud83d\udeaa Doors",f.r==="doors",new A.e9A(f)),f.ik("\ud83d\udcd8 Learn",!1,new A.e9B(a0),D.br)],l),e,e,e,e,D.aM,!1),e),D.au,f.bJO()],l),D.E,e,D.e,D.O,0,D.p),g,d,v.b,t)},
cnn(d){return C.bU(E.lA,null,new A.ect(this),d,!0,!0,!0,D.k2,!1,!1,x.H)}}
A.bjS.prototype={
B(d){var w=null,v=D.k.E((this.e-10)/126,0.5,1),u=D.w.j(0.6),t=C.n(12),s=C.J(D.aY,D.r,1)
return C.p(w,new C.a5(126*v,84*v,C.aB(w,C.eO(D.A,C.b4(w,w,w,new A.bjh(this.c,w),B.f6h),D.f,D.vA),D.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new A.dv4(this,v),w,w,w,w,!1,D.a3),w),D.f,w,w,new C.o(u,w,s,t,w,w,D.n),w,w,w,w,D.m9,w,w,w)}}
A.bjh.prototype={
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
l=C.br(o,D.hE)
$.S()
k=new C.ao(D.Q,D.M,D.S,D.T,D.R)
k.r=m.j(t.gkO()&&t.gjR()?0.35:0.5).gp(0)
j=k.G()
v.drawRRect(C.e6(l),j)
j.delete()
l=C.br(o,D.hE)
k=new C.ao(D.Q,D.M,D.S,D.T,D.R)
k.b=D.a9
k.c=n?2.2:0.8
k.r=(n?D.c:D.bZ).gp(0)
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
break A}h=new C.iM(new C.eu(l,g,g,D.cN,g,g,g,g,g,g,B.fmn),D.a4,D.bX,new C.jp(1),g,g,g,g,D.bV,g)
h.ej()
l=h.b
k=l.c
l=l.a.c
h.a3(d,new C.t(s+(q-s)/2-k/2,r+(p-r)/2-l.gbb(l)/2))}},
av(d){return!0}}
A.aIY.prototype={
R(){return new A.btW()},
bi7(d,e){return this.c.$2(d,e)}}
A.btW.prototype={
b_1(d){var w,v,u={},t=u.a=d.aE(0,B.ehS),s=t.gcF()>46?u.a=t.eV(0,t.gcF()).aI(0,46):t,r=s.a/46,q=-s.b/46,p=Math.sqrt(r*r+q*q)
s=this.a
s.toString
w=p<0.15
v=w?0:r
s.bi7(v,w?0:q)
this.m(new A.f6L(u,this))},
b_0(){this.a.bi7(0,0)
this.m(new A.f6K(this))},
B(d){var w=this,v=null,u=C.p(v,v,D.f,v,v,new C.o(D.w.j(0.42),v,C.J(D.be.j(0.9),D.r,2.4),v,v,v,D.a6),v,132,v,v,v,v,v,132),t=C.p(v,v,D.f,v,v,new C.o(v,v,C.J(D.be.j(0.25),D.r,1.5),v,v,v,D.a6),v,66,v,v,v,v,v,66),s=w.d,r=s==null
if(r)s=D.I
return C.n1(D.c5,new C.a5(132,132,new C.an(D.A,v,D.ab,D.t,C.a([u,t,C.dP(C.p(v,v,D.f,v,v,new C.o(D.be.j(r?0.55:0.9),v,C.J(D.c,D.r,2),v,v,v,D.a6),v,56,v,v,v,v,v,56),s)],x.p),v),v),v,new A.f6M(w),new A.f6N(w),v,new A.f6O(w),v,v,new A.f6P(w))}}
A.f1i.prototype={}
A.Mn.prototype={}
A.Qj.prototype={
gbeI(){var w,v=this.c
A:{if("sick"===v){w="\ud83e\udd12"
break A}if("light"===v){w="\ud83d\udca1"
break A}if("office"===v){w="\ud83c\udfe2"
break A}w="\u26a1"
break A}return w},
gaE0(){var w,v=this.c
A:{if("sick"===v){w=this.d
if(w.length===0)w="A neighbour"
break A}if("light"===v){w="City lights office"
break A}if("office"===v){w="Office manager"
break A}w="Your neighbour"
break A}return w},
gbr2(){var w,v=this.c
A:{if("sick"===v){w="Needs a doctor"
break A}if("light"===v){w="A street light is out"
break A}if("office"===v){w="No power in an office"
break A}w="No power at a house"
break A}return w},
gaHf(d){var w,v=this,u="I will pay you between 10 and 35 stars. Thank you!",t=v.c
A:{if("sick"===t){w=C.a(["Hello! "+v.gaE0()+" is very sick and cannot get up.","Please take them to the hospital: walk into the hospital and onto the desk to admit them.",u],x.s)
break A}if("office"===t){w=""+v.e
w=C.a(["Hello, this is the office manager. The office on level "+w+" of "+v.b+" has lost its power and nobody can work.","Please take the elevator up to level "+w+", and fix the wiring at the breaker panel there.",u],x.s)
break A}if("light"===t){w=C.a(["Hello! A street light is out and the street is dark.","It is the dark one with the red sign. Could you fix its wiring?",u],x.s)
break A}w=C.a(["Hello! All the lights went out in "+v.b+". The power is off in the whole house.","Could you check the breaker panel inside and fix the wiring? Switch the power off before you touch anything.",u],x.s)
break A}return w}}
A.bVc.prototype={}
A.pA.prototype={}
A.NH.prototype={
R(){return new A.bkO()}}
A.bkO.prototype={
rC(d){var w=this.c
w.toString
return C.a4(w,!1).cc(C.e0(new A.dSH(d),!1,null,x.H))},
B(d){var w,v,u,t,s,r,q,p,o,n=this,m=null
$.asD="tech"
w=C.aG(m,m,m,m,T.nw,m,m,m,new A.dSI(d),m,m,m,m,m,m)
v=D.aE.j(0.16)
u=C.n(13)
t=x.p
u=C.B(C.a([w,C.p(m,B.b9P,D.f,m,m,new C.o(v,m,C.J(D.aE.j(0.6),D.r,1),u,m,m,D.n),m,40,m,m,m,m,m,40),D.as,B.bEU],t),D.m,m,D.e,D.i,0,m,m)
v=C.n(26)
w=C.J(D.aE,D.r,1.8)
s=x.V
r=C.a([new C.ac(0,D.G,D.aE.j(0.28),D.dq,26)],s)
r=C.aB(m,C.p(m,C.x(C.a([C.p(m,B.bag,D.f,m,m,new C.o(D.aE.j(0.2),m,C.J(D.aE,D.r,2),m,C.a([new C.ac(0,D.G,D.aE.j(0.5),D.I,22)],s),m,D.a6),m,78,m,m,m,m,m,78),D.ae,B.fG7,D.au,B.fMV,D.aA,C.p(m,B.fG3,D.f,m,m,new C.o(D.aE,m,m,C.n(20),m,m,D.n),m,m,m,m,A_.al2,m,m,m)],t),D.m,m,D.e,D.i,0,D.p),D.f,m,m,new C.o(m,m,w,v,r,B.c2V,D.n),m,m,m,m,D.w2,m,m,m),D.y,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new A.dSJ(n),m,m,m,m,m,m,!1,D.a3)
v=D.w.j(0.6)
w=C.n(16)
w=C.a([r,C.ap(m,C.aB(m,C.p(m,B.fUK,D.f,m,m,new C.o(v,m,C.J(F.fz,D.r,1.4),w,m,m,D.n),m,m,m,m,B.bye,m,m,m),D.y,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new A.dSK(n),m,m,m,m,m,m,!1,D.a3),m,m,m,10,10,m)],t)
v=n.b_3("JOBS")
r=n.b_2(C.a([n.vO("\ud83d\udd0c","Wire a room","Go to a room that needs wiring",D.bf,new A.dSO(n)),n.vO("\ud83d\udebd","Plumb a room","Go to a bathroom or kitchen",D.aK,new A.dSP(n)),n.vO("\ud83d\udd27","Fix a house","Walk the house and fix every sign",D.aE,new A.dSQ(n)),n.vO("\ud83e\uddf1","Build a room","Frame, drywall, then wire",D.be,new A.dSR(n)),n.vO("\u26a1","Wiring bench","Just the wiring, one room",D.bu,new A.dSS(n)),n.vO("\ud83e\uddea","Safety inspection","A test job: marked when you submit",D.br,new A.dST(n)),n.vO("\ud83d\udcde","Service calls","A customer rings with problems",D.ij,new A.dSU(n)),n.vO("\ud83c\udfd8","Neighbourhood jobs","Fix lights and wiring around the city",D.aK,new A.dSV(n))],t))
s=n.b_3("LESSONS")
q=C.a([],t)
for(p=0;p<17;++p){o=B.dh7[p]
q.push(n.vO(o.b,o.c,o.d,o.e,new A.dSL(n,o)))}q.push(n.vO("\ud83e\udde0","Diagram lessons","Three-way switch, fan with light",D.br,new A.dSM(n)))
q.push(n.vO("\ud83d\udcd8","Learn the trades","Short cards for beginners",D.br,new A.dSN(n)))
return C.c7(m,D.c1,C.bm(!0,C.cn(C.a([u,D.ae,new C.an(D.a_,m,D.ab,D.t,w,m),v,r,s,n.b_2(q)],t),m,B.aki,m,m,D.ah,!1),!0,!1,D.af,!0,!0),m,!1,!1,m,m)},
b_3(d){var w=null
return new C.D(B.bCQ,C.B(C.a([C.E(C.p(w,w,D.f,D.aE.j(0.35),w,w,w,1,w,w,w,w,w,w),1),new C.D(D.fj,C.d(d,w,w,w,w,w,w,B.fiO,w,w,w),w),C.E(C.p(w,w,D.f,D.aE.j(0.35),w,w,w,1,w,w,w,w,w,w),1)],x.p),D.m,w,D.e,D.i,0,w,w),w)},
b_2(d){var w,v,u,t,s=null,r=x.p,q=C.a([],r)
for(w=0;v=d.length,w<v;w+=2){u=d[w]
t=w+1
v=t<v?d[t]:D.bJ
q.push(new C.D(D.cu,new C.Ek(new C.cd(D.aM,D.e,D.i,D.ak,s,D.p,s,0,C.a([new C.bz(1,D.ba,u,s),D.ac,new C.bz(1,D.ba,v,s)],r),s),s),s))}return C.x(q,D.m,s,D.e,D.i,0,D.p)},
vO(d,e,f,g,h){var w=null,v=C.a([g.j(0.2),B.Fw],x.O),u=C.n(22),t=C.J(g.j(0.55),D.r,1.4),s=x.V,r=C.a([new C.ac(0,D.G,g.j(0.18),D.cx,16)],s),q=g.j(0.22),p=C.J(g.j(0.7),D.r,1.5)
s=C.a([new C.ac(0,D.G,g.j(0.35),D.I,14)],s)
return C.aB(w,C.p(w,C.x(C.a([C.p(w,C.au(C.d(d,w,w,w,w,w,w,D.x_,w,w,w),w,w,w),D.f,w,w,new C.o(q,w,p,w,s,w,D.a6),w,56,w,w,w,w,w,56),D.W,C.d(e,w,w,w,w,w,w,D.j3,D.K,w,w),D.cM,C.d(f,w,2,D.a1,w,w,w,B.fuA,D.K,w,w)],x.p),D.m,w,D.b9,D.i,0,D.p),D.f,w,w,new C.o(w,w,t,u,r,new C.a9(D.b_,D.b5,D.x,v,w,w),D.n),w,w,w,w,B.bxX,w,w,w),D.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,h,w,w,w,w,w,w,!1,D.a3)}}
A.awu.prototype={
R(){return new A.btK()},
bqI(){return this.c.$0()}}
A.btK.prototype={
Z(){this.a2()
this.d=C.dh(D.nn,new A.f6B(this))},
q(){var w=this.d
if(w!=null)w.a4(0)
this.a1()},
B(d){var w=null,v=D.w.j(0.6),u=C.n(18),t=C.J(D.bu,D.r,1.5)
return C.p(w,C.d("\u2b50 "+C.w(this.a.bqI()),w,w,w,w,w,w,B.fj9,w,w,w),D.f,w,w,new C.o(v,w,t,u,w,w,D.n),w,w,w,D.iD,D.qg,w,w,w)}}
A.b7K.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n=this,m=null
if(n.d)return A.h4t(E.Bk,n.r,n.z,n.Q,n.y,n.as,n.db,n.w,n.f,n.c)
w=n.r
v=x.p
u=C.a([C.bS(0,A.h4t(E.Bk,w,n.z,n.Q,n.y,n.as,n.db,n.w,n.f,n.c),0,0,0)],v)
t=n.ch
s=t!=null
if(s)u.push(C.ap(m,C.x(t,D.E,m,D.e,D.i,0,D.p),m,m,8,m,8,m))
t=C.a([],v)
r=n.CW
if(r!=null)D.d.v(t,r)
r=C.a([],v)
q=n.e
if(q!=null)r.push(new A.awu(q,m))
r.push(new A.afL(D.hQ,"Zoom in",w,!1,m))
t.push(C.B(r,D.m,m,D.e,D.O,0,m,m))
t.push(new A.afL(D.yY,"Zoom out",w,!0,m))
w=n.x
t.push(n.axG(B.bLJ,"Back to the whole view",w))
t.push(n.axG(Ao.Cs,"Flip up and down swiping",new A.cxi()))
t.push(n.axG(D.kk,"Flip left and right swiping",new A.cxj()))
u.push(C.ap(m,C.x(t,D.dI,m,D.e,D.i,0,D.p),m,m,m,8,8,m))
t=n.dx
if(t!=null)u.push(C.ap(14,C.au(t,m,m,m),m,m,0,0,m,m))
t=n.at
if(t!=null){r=n.cy
if(r==null)s=s?60:10
else s=r
r=n.ax
q=(r?D.e_:D.ej).j(0.95)
p=C.n(14)
o=C.J(r?D.be:D.c7,D.r,1)
u.push(C.ap(m,C.p(m,C.d(t,m,m,m,m,m,m,B.fjq,m,m,m),D.f,m,m,new C.o(q,m,o,p,m,m,D.n),m,m,m,m,D.nq,m,m,m),m,m,10,62,s,m))}t=n.ay
if(t!=null){s=C.n(16)
r=C.J(D.aY,D.r,1)
t=C.a([C.d(t.a,m,m,m,m,m,m,B.fv7,m,m,m),D.cM,C.d(t.b,m,m,m,m,m,m,E.V_,m,m,m)],v)
q=n.cx
if(q!=null)D.d.v(t,C.a([D.am,q],v))
u.push(C.ap(8,C.p(m,C.B(C.a([C.E(C.x(t,D.E,m,D.e,D.i,0,D.p),1),C.aG(m,m,m,m,D.Hs,m,m,m,w,m,m,m,m,m,D.cc)],v),D.E,m,D.e,D.i,0,m,m),D.f,m,m,new C.o(E.aej,m,r,s,m,m,D.n),m,m,m,m,E.ak3,m,m,m),m,m,10,10,m,m))}return new C.an(D.a_,m,D.ab,D.t,u,m)},
axG(d,e,f){var w=null,v=D.w.j(0.55),u=C.J(D.aY,D.r,1)
return new C.D(D.eH,C.he(C.aB(w,C.p(w,C.X(d,D.c,w,w,w,20),D.f,w,w,new C.o(v,w,u,w,w,w,D.a6),w,38,w,w,w,w,w,38),D.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,!1,D.a3),w,e,w,w),w)}}
A.aXS.prototype={
B(d){var w,v=this,u=null,t=x.p,s=C.a([C.aG(u,u,u,u,T.nw,u,u,u,new A.bXi(d),u,u,u,u,u,u)],t),r=v.x,q=v.c,p=v.d
if(r==null)s.push(C.E(C.d(q,u,u,u,u,u,u,C.l(u,u,p,u,u,u,u,u,u,u,u,16,u,u,D.u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),1))
else D.d.v(s,C.a([C.d(q,u,u,u,u,u,u,C.l(u,u,p,u,u,u,u,u,u,u,u,16,u,u,D.u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),D.as,C.E(r,1),D.as],t))
r=p.j(0.15)
q=C.n(16)
w=C.J(p.j(0.6),D.r,1)
s.push(C.aB(u,C.p(u,C.B(C.a([C.X(Ap.anB,p,u,u,u,17),D.en,C.d(v.w,u,u,u,u,u,u,C.l(u,u,p,u,u,u,u,u,u,u,u,12,u,u,D.u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],t),D.m,u,D.e,D.O,0,u,u),D.f,u,u,new C.o(r,u,w,q,u,u,D.n),u,u,u,u,D.qg,u,u,u),D.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,v.r,u,u,u,u,u,u,!1,D.a3))
s=C.B(s,D.m,u,D.e,D.i,0,u,u)
q=C.aJ(d,u,x.w).w
return C.c7(u,D.c1,C.bm(!0,C.x(C.a([new C.D(B.bD2,s,u),C.p(u,C.cg(v.f,D.t,u,D.y,u,u,u,u,D.ah),D.f,u,new C.aZ(0,1/0,0,q.a.b*0.34),B.b5e,u,u,u,u,E.a_5,u,u,1/0),C.E(C.bx(An.acv,v.e,D.ap),1)],t),D.m,u,D.e,D.i,0,D.p),!0,!1,D.af,!0,!0),u,!1,!1,u,u)}}
A.DZ.prototype={
R(){var w=new C.yd()
$.yY()
w.h5(0)
return new A.aAy(w)},
gdc(d){return this.d}}
A.aAy.prototype={
gz8(){var w,v=this,u=v.d
if(u===$){w=A.t5(v.a.c)
v.d!==$&&C.bF()
v.d=w
u=w}return u},
ger(d){var w,v=this.e
if(v===$){w=this.a.d
v=this.e=w==null?new A.CA(C.U(x.S,x.N)):w}return v},
gas5(){var w=this.gz8().a
return w==="light"||w==="fan"},
gio(){var w,v=this,u=v.f
if(u===$){w=v.gas5()?new A.xg(1.15,0.12,11,B.Vz,$.ax()):new A.xg(0.42,0.26,12,B.h62,$.ax())
v.f!==$&&C.bF()
u=v.f=w}return u},
gp9(){var w=this,v=w.r
return v===$?w.r=A.h8q(w.gz8(),w.ger(0),!0):v},
aAU(d){var w
this.m(new A.daS(this,d))
A:{if("practice"===d){w="Practice: you can put a wire anywhere. The mistake shows when the power goes on."
break A}if("test"===d){w="Test: put every wire where you think it goes. Nothing is marked until you submit."
break A}w="Learn: a wrong wire is refused and explained."
break A}this.jc(w,!0)},
q(){var w=this.as
if(w!=null)w.a4(0)
this.a1()},
jc(d,e){var w=this,v=w.as
if(v!=null)v.a4(0)
w.m(new A.daQ(w,d,e))
w.as=C.cG(D.lD,new A.daR(w))},
nD(d){return this.jc(d,!1)},
qC(){var w=this.ger(0)
w.d=w.d&&w.a&&w.c>=2
this.r=A.h8q(this.gz8(),w,!0)},
ol(){var w,v,u,t=this
if(t.gas5()&&t.ger(0).c===0){t.gio().hT(11,0.12,B.Vz,1.15)
t.m(new A.daD(t))
return}w=t.gio()
v=t.ger(0).c===0
u=v?2.8:0.4
v=v?12:10
w.hT(v,0.26,new A.q(0,0.1,u),0.42)
t.m(new A.daE(t))},
aXU(d){var w=this
if(w.gas5()){w.gio().hT(9,0.12,B.Vz,1.15)
return}if(d==="ground")w.gio().hT(8,0.55,B.h9U,0.15)
else if(d==="white")w.gio().hT(8.5,0.2,B.hdW,0.95)
else w.gio().hT(8.5,0.2,B.h2J,-0.95)},
c8l(){var w,v,u,t,s="ground",r=this.ger(0),q=!r.a||r.c>0,p=new A.daC(this),o=this.gz8()
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
J9(d){var w,v,u,t,s,r,q,p,o,n=this,m="square",l="STOP! The power is still on. Turn the breaker OFF before you touch any wire.",k="Recorded."
if(d===0){n.ol()
return}if(B.aQA.t(0,d))return
w=n.gz8()
v=w.f
u=C.T(v).k("Z<1>")
t=C.C(new C.Z(v,new A.daF(d),u),u.k("M.E"))
v=w.a
s=A.hz5(v,d)
u=s!=null
if(u){r=n.ger(0)
r=r.c===0&&r.b.iL(0,s)}else r=!1
if(r){w=n.ger(0)
if(w.a){A.fX(180,220,0.25,m)
n.nD(l)
return}w=w.b
w.bs(w,new A.daG(s))
n.m(n.gc8o())
n.jc("Wire taken off the screw.",!0)
return}r=!1
if(t.length!==0){q=n.ger(0)
if(q.c===0){q=q.b
if(q.aj(0,d))r=n.w.length===0||q.h(0,d)===n.w}}if(r){w=n.ger(0)
if(w.a){A.fX(180,220,0.25,m)
n.nD(l)
return}w.b.W(0,d)
n.m(new A.daH(n))
n.jc(w.y?k:"Wire taken off.",!0)
return}if(u){u=n.ger(0)
u=u.c===0&&!u.b.iL(0,s)&&D.d.b3(w.e,new A.daI(s))}else u=!1
if(u){n.m(new A.daJ(n,s,d))
if(n.w.length!==0){n.aXU(s)
n.jc(D.d.fY(w.e,new A.daK(s)).b+": picked up. Now tap the screw, nut or wire it joins.",!0)}return}if(t.length!==0&&n.w.length!==0&&n.ger(0).c===0){u=n.ger(0)
p=A.hz0(w,u,n.w,D.d.gI(t),!1)
if(p!=null){++n.Q
A.fX(180,220,0.25,m)
n.nD(p)}else if(u.y){A.fX(520,60,0.25,"tri")
n.m(new A.daL(n,d))
n.jc(k,!0)
n.w=""}else{A.yM()
n.m(new A.daM(n,d))
if(u.r)n.jc(D.d.gI(t).b+": fastened.",!0)
else if(A.bFl(w,u))n.jc("Every wire is on the right screw. Now push the device into the box.",!0)
else n.jc(D.d.gI(t).b+": fastened correctly.",!0)
n.gio().xl(7,A.aQ0(v,d,u))
n.w=""}return}o=n.gp9().b.h(0,d)
if(o!=null){n.m(new A.daN(n,d))
w=n.gio()
v=o.c
w.xl(o.d,v)}},
cml(){var w,v=this
v.m(new A.daO(v))
w=v.ger(0)
if(w.a){A.fX(120,200,0.25,"saw")
if(w.c===0)v.nD("The breaker is ON. The wires are LIVE at 120 volts. Turn it OFF before you touch anything.")}else{A.fX(600,100,0.25,"tri")
v.jc("Breaker OFF. It is safe to work on the wires. (In real life, always test them with a tester first.)",!0)}},
cBI(){var w,v,u=this,t="The tester glows: this outlet has 120 volts and is wired correctly. The lesson is complete! Mistakes: ",s=" is wired correctly: every wire is on the terminal that belongs to it. The lesson is complete! Mistakes: ",r=u.gz8(),q=u.ger(0),p=A.La(r,q)
if(p.a!=="ok"){u.m(new A.daT(u,p));++u.Q
A.fX(180,220,0.25,"square")
C.fL()
r=p.r==="arc"
w=r?95:150
A.fX(w,450,0.5,r?"saw":"noise")
if(q.y)r=p.d?"The breaker tripped.":"Power is on."
else r=p.b+"\nHow to fix it: "+p.w
u.nD(r)
return}u.m(new A.daU(u))
A.yM()
v=r.a
A:{if("switch"===v){r="Power on. Flip the switch and the light turns on: both black wires are on brass screws, so the switch opens and closes the hot wire. The lesson is complete! Mistakes: "+u.Q+"."
break A}if("gfci"===v){r="Power on. Press RESET (it clicks), then TEST: it must shut the outlet off. Wired on LINE, it protects the whole circuit. The lesson is complete! Mistakes: "+u.Q+"."
break A}if("outlet"===v){r=t+u.Q+"."
break A}q=D.d.t(B.jV,v)
if(q){r="Power on. "+r.b+(s+u.Q+".")
break A}if(v!=="light"&&v!=="fan"){r="Power on. The "+r.b.toLowerCase()+(s+u.Q+".")
break A}r=t+u.Q+"."
break A}u.jc(r,!0)},
B(a1){var w,v=this,u=null,t=v.c8l(),s=D.d.bh(t,new A.db2()),r=s<0?"All done":"Step "+(s+1)+"/"+v.gz8().d.length,q=v.gz8(),p=v.ger(0),o=A.bFl(q,p)&&!p.a,n=v.gp9(),m=v.gio(),l=v.x,k=v.y,j=v.z,i=l!==0?v.gp9().b.h(0,v.x):u,h=(p.a?D.ej:D.e_).j(0.95),g=C.n(18),f=p.a,e=C.J(f?D.c7:D.be,D.r,1.5),d=C.X(f?D.hw:B.bNm,D.c,u,u,u,18),a0=x.p
g=C.a([C.aB(u,C.p(u,C.B(C.a([d,D.en,C.d(f?"Breaker ON (live)":"Breaker OFF (safe)",u,u,u,u,u,u,D.nJ,u,u,u)],a0),D.m,u,D.e,D.O,0,u,u),D.f,u,u,new C.o(h,u,e,g,u,u,D.n),u,u,u,u,D.h6,u,u,u),D.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,v.gcmk(),u,u,u,u,u,u,!1,D.a3)],a0)
h=!p.r&&!p.y
h=C.a([A.wV("Learn",D.be,D.ux,h,new A.db3(v)),D.am,A.wV("Practice",D.c7,D.pd,p.r,new A.db4(v)),D.am,A.wV("Test",D.br,D.um,p.y,new A.dbc(v)),D.am],a0)
if(!p.y)D.d.v(h,C.a([A.wV("Hints",D.aE,D.rA,p.e,new A.dbd(v)),D.am,A.wV("Labels",D.aK,P.Cj,p.f,new A.dbe(v)),D.am,A.wV("Wire guide",D.mA,D.og,!1,new A.dbf(a1)),D.am],a0))
h.push(A.wV("Brass side",B.bq0,E.aox,!1,new A.dbg(v)))
h.push(D.am)
h.push(A.wV("Silver side",B.Mk,D.OT,!1,new A.dbh(v)))
h.push(D.P)
n=A.Y9(!1,u,m,new A.dbi(v),u,j,l,i,u,u,k,u,u,v.gJ7(),v.gJ8(),n,!1,u,g,h)
m=C.a([],a0)
l=p.c
if(l===0){l=C.a([],a0)
for(k=D.d.gag(q.e),j=new C.f5(k,new A.dbj(v));j.C();){i=k.gS(0)
h=i.c
g=new C.aP(14,14)
f=v.w
e=i.a
f=f===e
d=f?D.b4:D.aY
w=new C.ay(d,f?3:1,D.r,-1)
d=C.a([],a0)
if(p.b.iL(0,e))d.push(new C.D(D.fB,C.X(D.ed,i.d,u,u,u,18),u))
f=i.b
e=i.d
d.push(new C.y(f,u,new C.F(!0,e,u,u,u,u,13,D.u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u),u,u,u,u,u,u,u,u,u))
l.push(new C.D(D.iD,C.aB(u,C.p(u,new C.cd(D.aM,D.e,D.i,D.m,u,D.p,u,0,d,u),D.f,u,u,new C.o(h,u,new C.bI(w,w,w,w),new C.bj(g,g,g,g),u,u,D.n),u,u,u,u,D.hO,u,u,u),D.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new A.db5(v,i),u,u,u,u,u,u,!1,D.a3),u))}l=C.a([C.bX(D.bG,l,D.bq,u,6,8)],a0)
if(p.y)D.d.v(l,C.a([C.B(C.a([A.ui("Submit the test",D.um,new A.db6(v,a1),D.br)],a0),D.m,u,D.e,D.i,0,u,u),D.P],a0))
l.push(D.P)
if(o)p="Push it into the box"
else p=p.a?"Turn the breaker OFF first":"Fasten every wire first"
l.push(C.B(C.a([A.ui(p,B.ap3,o?new A.db7(v):u,D.aE)],a0),D.m,u,D.e,D.i,0,u,u))
D.d.v(m,l)}else if(l===1)D.d.v(m,C.a([C.B(C.a([A.ui("Pull it back out",D.qx,new A.db8(v),D.ad),D.ac,A.ui("Put the cover plate on",A0.wg,new A.db9(v),D.aE)],a0),D.m,u,D.e,D.i,0,u,u)],a0))
else{l=A.ui("Start over",D.kM,new A.dba(v),D.ad)
p=p.d
k=p?"Tested \u2713":"Power on and test"
D.d.v(m,C.a([C.B(C.a([l,D.ac,A.ui(k,D.hw,p?u:v.gcBH(),D.aE)],a0),D.m,u,D.e,D.i,0,u,u)],a0))}return A.U1(D.aE,new A.dbb(v,a1,t),C.x(m,D.m,u,D.e,D.O,0,D.p),n,r,q.b,u)}}
A.a9G.prototype={
R(){return new A.aGu()},
gdc(d){return this.c}}
A.aGu.prototype={
ger(d){var w,v=this.d
if(v===$){w=this.a.c
v=this.d=w==null?A.h4_():w}return v},
gio(){var w=this.e
return w===$?this.e=new A.xg(-0.3,0.18,40,B.aWz,$.ax()):w},
gp9(){var w=this.f
return w===$?this.f=A.bCL(this.ger(0)):w},
q(){var w=this.z
if(w!=null)w.a4(0)
this.a1()},
jc(d,e){var w=this,v=w.z
if(v!=null)v.a4(0)
w.m(new A.eWR(w,d,e))
w.z=C.cG(D.lD,new A.eWS(w))},
nD(d){return this.jc(d,!1)},
ol(){this.gio().hT(40,0.18,B.aWz,-0.3)
this.m(new A.eWK(this))},
J9(d){var w,v,u,t,s,r,q=this,p="square"
if(d===0){q.ol()
return}w=C.H([41,"tail",42,"trap",43,"arm"],x.S,x.N).h(0,d)
if(w!=null&&!q.ger(0).a.t(0,w)){v=q.r
if(v.length===0){if(w==="tail")v="tailpiece"
else v=w==="trap"?"P-trap":"trap arm"
q.nD("Pick the "+v+" from the buttons below first, then tap its glowing outline.")
return}if(v!==w){A.fX(180,220,0.25,p)
u=q.r
A:{if("tail"===u){v="The tailpiece is the straight pipe that hangs from the sink. It goes at the very top, under the drain."
break A}if("trap"===u){v="The P-trap is the U-shaped bend. It goes right under the tailpiece, in the middle."
break A}v="The trap arm is the long straight pipe that goes into the wall. It goes last, on the right."
break A}q.nD(v)
return}if(w==="trap"&&!q.ger(0).a.t(0,"tail")){A.fX(180,220,0.25,p)
q.nD("Start from the top: put the tailpiece on first, then the trap under it.")
return}if(w==="arm"&&!q.ger(0).a.t(0,"trap")){A.fX(180,220,0.25,p)
q.nD("The trap arm joins the trap. Put the P-trap on first.")
return}q.m(new A.eWL(q,w))
A.yM()
q.jc("Piece in place. "+(q.ger(0).a.a===3?"Now tighten the two slip nuts: tap each nut.":"Pick the next piece."),!0)
return}v=d===44
if(v||d===45){t=v?"n1":"n2"
if(q.ger(0).b.h(0,t)!==!0){q.m(new A.eWM(q,t))
A.yM()
q.jc("Slip nut hand tightened. In real life give it a quarter turn more with pliers, but never over-tighten plastic.",!0)
return}}s=q.gp9().b.h(0,d)
if(s!=null){q.m(new A.eWN(q,d))
v=q.gio()
r=s.c
v.xl(s.d,r)}},
c8q(){var w=this,v=x.cc,u=C.C(new C.Z(C.a(["n1","n2"],x.s),new A.eWO(w),v),v.k("M.E"))
w.m(new A.eWP(w,u))
if(u.length!==0){A.fX(180,220,0.25,"square")
w.nD("It is dripping from a loose slip nut! Tap the nut and tighten it, then run the water again.")}else{A.yM()
w.jc("No leaks. The water flows through the trap and into the wall. The little pool in the U-bend stays there and blocks sewer gas. The lesson is complete!",!0)}},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.ger(0),i=j.a,h=i.t(0,"tail"),g=i.t(0,"trap"),f=i.t(0,"arm"),e=j.b
e=e.h(0,"n1")===!0&&e.h(0,"n2")===!0
w=C.a([h,g,f,e,j.c&&j.d.length===0],x.u)
v=D.d.bh(w,new A.eWW())
u=i.a===3
j=v<0?"All done":"Step "+(v+1)+"/5"
h=l.gp9()
g=l.gio()
f=l.w
e=l.x
t=l.y
s=f!==0?l.gp9().b.h(0,l.w):k
h=A.Y9(!1,k,g,new A.eWX(l),k,t,f,s,k,k,e,k,k,l.gJ7(),l.gJ8(),h,!1,k,k,k)
e=x.p
s=C.a([],e)
for(r=0;r<3;++r){q=B.dqV[r]
g=i.t(0,q)?k:new A.eWY(l,q)
f=i.t(0,q)?D.ds:D.fN
t=new C.aP(14,14)
p=l.r===q
o=p?D.b4:D.aY
n=new C.ay(o,p?3:1,D.r,-1)
o=C.a([],e)
if(i.t(0,q))o.push(B.em_)
p=B.dz8.h(0,q)
p.toString
m=i.t(0,q)?D.bZ:D.c
o.push(new C.y(p,k,new C.F(!0,m,k,k,k,k,13,D.u,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k),k,k,k,k,k,k,k,k,k))
s.push(new C.D(D.iD,C.aB(k,C.p(k,new C.cd(D.aM,D.e,D.i,D.m,k,D.p,k,0,o,k),D.f,k,k,new C.o(f,k,new C.bI(n,n,n,n),new C.bj(t,t,t,t),k,k,D.n),k,k,k,k,D.hO,k,k,k),D.y,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,g,k,k,k,k,k,k,!1,D.a3),k))}i=C.bX(D.bG,s,D.bq,k,6,8)
g=A.ui("Start over",D.kM,new A.eWZ(l),D.ad)
f=u?"Run the water":"Build the drain first"
return A.U1(D.co,new A.eX_(d,w),C.x(C.a([i,D.P,C.B(C.a([g,D.ac,A.ui(f,D.pk,u?l.gc8p():k,D.co)],e),D.m,k,D.e,D.i,0,k,k)],e),D.m,k,D.e,D.O,0,D.p),h,j,"Sink drain (P-trap)",k)}}
A.a57.prototype={
R(){return new A.aAS()},
gdc(d){return this.c}}
A.aAS.prototype={
ger(d){var w,v=this.d
if(v===$){w=this.a.c
v=this.d=w==null?A.h4_():w}return v},
gio(){var w=this.e
return w===$?this.e=new A.xg(-0.25,0.2,36,B.aVV,$.ax()):w},
gp9(){var w=this.f
return w===$?this.f=A.aPS(this.ger(0)):w},
q(){var w=this.z
if(w!=null)w.a4(0)
this.a1()},
jc(d,e){var w=this,v=w.z
if(v!=null)v.a4(0)
w.m(new A.ddU(w,d,e))
w.z=C.cG(D.lD,new A.ddV(w))},
nD(d){return this.jc(d,!1)},
ol(){this.gio().hT(36,0.2,B.aVV,-0.25)
this.m(new A.ddM(this))},
J9(d){var w,v,u,t,s,r,q=this
if(d===0){q.ol()
return}w=x.fZ
v=C.C(new C.Z(B.a5d,new A.ddP(d),w),w.k("M.E"))
if(v.length!==0&&q.r.length!==0){w=q.ger(0)
u=A.ilq(w,q.r,D.d.gI(v))
if(u!=null){A.fX(180,220,0.25,"square")
q.nD(u)}else{A.yM()
q.m(new A.ddQ(q,d))
q.gio().xl(12,A.agV(d))
q.jc(A.fBN(w)?"All four ends are connected. Now open the valves.":D.d.gI(v).b+": connected.",!0)}return}w=d===68
if(w||d===69){t=w?"hot":"cold"
if(q.ger(0).e.iL(0,t)){q.m(new A.ddR(q,t))
q.jc("Hose taken off.",!0)
return}}s=q.gp9().b.h(0,d)
if(s!=null){q.m(new A.ddS(q,d))
w=q.gio()
r=s.c
w.xl(s.d,r)}},
c8n(d){var w,v=this
v.m(new A.ddN(v))
w=v.ger(0)
if(!w.f){v.jc("Valves closed.",!0)
return}if(A.fBN(w)){A.yM()
v.jc("Hot and cold flow through the hoses and out of the faucet. No leaks. The lesson is complete!",!0)}else{A.fX(180,220,0.25,"square")
v.nD("Water is spraying out of a valve that has no hose! Close the valves and finish connecting the hoses first.")}},
B(d){var w,v,u,t,s,r,q,p,o,n=this,m=null,l=n.ger(0),k=l.r||l.e.a!==0,j=l.e,i=j.h(0,61)==="hot"&&j.h(0,63)==="hot",h=j.h(0,62)==="cold"&&j.h(0,64)==="cold",g=C.a([k,i,h,l.f&&A.fBN(l)],x.u),f=D.d.bh(g,new A.ddZ())
k=f<0?"All done":"Step "+(f+1)+"/4"
i=n.gp9()
h=n.gio()
w=n.w
v=n.x
u=n.y
t=w!==0?n.gp9().b.h(0,n.w):m
s=x.p
i=A.Y9(!1,m,h,new A.de_(n),m,u,w,t,m,m,v,m,m,n.gJ7(),n.gJ8(),i,!1,m,m,C.a([A.wV("Hints",D.aE,D.rA,l.r,new A.de0(n)),D.P],s))
v=C.a([],s)
for(r=0;r<2;++r){h={}
w=B.dqm[r]
h.a=null
q=w.a
h.a=q
u=new C.aP(14,14)
t=n.r===q
p=t?D.b4:D.aY
o=new C.ay(p,t?3:1,D.r,-1)
p=C.a([],s)
t=C.a7(j).k("bd<2>")
if(new C.Z(new C.bd(j,t),new A.de1(h),t.k("Z<M.E>")).gL(0)===2)p.push(B.em1)
p.push(new C.y(w.b,m,D.tg,m,m,m,m,m,m,m,m,m))
v.push(new C.D(D.iD,C.aB(m,C.p(m,new C.cd(D.aM,D.e,D.i,D.m,m,D.p,m,0,p,m),D.f,m,m,new C.o(w.c,m,new C.bI(o,o,o,o),new C.bj(u,u,u,u),m,m,D.n),m,m,m,m,D.hO,m,m,m),D.y,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new A.de2(h,n),m,m,m,m,m,m,!1,D.a3),m))}j=C.bX(D.bG,v,D.bq,m,6,8)
h=A.ui("Start over",D.kM,new A.de3(n),D.ad)
l=l.f?"Close the valves":"Open the valves"
return A.U1(D.c7,new A.de4(d,g),C.x(C.a([j,D.P,C.B(C.a([h,D.ac,A.ui(l,D.pk,n.gc8m(n),D.c7)],s),D.m,m,D.e,D.i,0,m,m)],s),D.m,m,D.e,D.O,0,D.p),i,k,"Faucet supply lines",m)}}
A.aBK.prototype={
R(){return new A.aBL(A.hfB())}}
A.aBL.prototype={
gio(){var w,v=this.e
if(v===$){w=new A.xg(-0.3,0.48,46,B.Vx,$.ax())
w.f=80
this.e=w
v=w}return v},
gp9(){var w=this.f
return w===$?this.f=A.agI(this.d):w},
q(){var w=this.z
if(w!=null)w.a4(0)
this.a1()},
jc(d,e){var w=this,v=w.z
if(v!=null)v.a4(0)
w.m(new A.dkY(w,d,e))
w.z=C.cG(D.lD,new A.dkZ(w))},
nD(d){return this.jc(d,!1)},
ol(){this.gio().hT(46,0.48,B.Vx,-0.3)
this.m(new A.dkS(this))},
J9(d){var w,v,u,t=this
if(d===0){t.ol()
return}if(d===72){w=t.d
w=w.d.t(0,72)&&w.a>=5}else w=!1
if(w){t.m(new A.dkU(t,d))
A.yM()
t.jc("You flipped the breaker fully OFF and then ON. The living room light is back on. A breaker trips when a circuit is overloaded: find out why before it trips again.",!0)
t.gio().xl(22,B.hbj)
return}w=d===87
if(w||d===86){v=t.d
v=v.b&&!v.c&&v.a>=5}else v=!1
if(v){if(t.w==="wrench"&&w){t.m(new A.dkV(t,d))
A.yM()
t.jc("You tightened the slip nut with the wrench. The drip has stopped.",!0)
return}A.fX(180,220,0.25,"square")
t.nD(w?"Hand tightening is not enough here. Pick the wrench first, then tap the nut.":"The water is dripping from the slip nut on the trap. Pick the wrench, then tap the nut.")}u=t.gp9().b.h(0,d)
if(u!=null){t.m(new A.dkW(t,d))
w=t.gio()
v=u.c
w.xl(u.d,v)}},
cgm(d){var w,v
A:{if("ptrap"===d){w=B.esA
break A}if("faucet"===d){w=B.bGK
break A}w=new A.DZ(d,null,null)
break A}v=this.c
v.toString
C.a4(v,!1).cc(C.e0(new A.dkT(w),!1,null,x.H))},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.d,l=B.dl1[m.a],k=o.r,j=k===0?n:A.iax(k)
k=m.d.t(0,72)
w=!m.b||m.c
v=C.a([!k,w],x.u)
w=m.a
k=o.gp9()
u=o.gio()
t=o.r
s=o.x
r=o.y
q=t!==0?o.gp9().b.h(0,o.r):n
p=j==null?n:C.aB(n,C.p(n,B.fwr,D.f,n,n,new C.o(D.aE,n,n,C.n(12),n,n,D.n),n,n,n,n,D.qg,n,n,n),D.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new A.dl1(o,j),n,n,n,n,n,n,!1,D.a3)
k=A.Y9(!1,n,u,new A.dl2(o),n,r,t,q,p,new A.dl3(o),s,n,n,o.gJ7(),o.gJ8(),k,!1,n,n,n)
s=l.a
p=x.p
q=C.B(C.a([C.E(C.d(""+(m.a+1)+". "+s,n,n,n,n,n,n,B.fox,n,n,n),1),A.wV("Wrench",D.aK,D.pd,o.w==="wrench",new A.dl4(o))],p),D.m,n,D.e,D.i,0,n,n)
t=C.d(l.b,n,3,D.a1,n,n,n,B.fpD,n,n,n)
m=C.kQ(D.br,6,s,6,0,new A.dl5(o),m.a)
u=v[0]
s=u?"\u2705 Living room power fixed":"\u26a0 Living room has no power"
s=C.E(C.d(s,n,n,n,n,n,n,C.l(n,n,u?D.es:D.eO,n,n,n,n,n,n,n,n,11.5,n,n,D.H,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),1)
u=v[1]
r=u?"\u2705 Sink leak fixed":"\u26a0 Kitchen sink drips"
return A.U1(D.br,new A.dl6(d,v),C.x(C.a([q,D.bF,t,m,C.B(C.a([s,C.E(C.d(r,n,n,n,n,n,n,C.l(n,n,u?D.es:D.eO,n,n,n,n,n,n,n,n,11.5,n,n,D.H,n,n,!0,n,n,n,n,n,n,n,n),D.dV,n,n),1)],p),D.m,n,D.e,D.i,0,n,n)],p),D.m,n,D.e,D.O,0,D.p),k,"Stage "+(w+1)+"/7","Build and fix a house",n)}}
A.afL.prototype={
R(){return new A.bxo()}}
A.bxo.prototype={
b7J(){var w=this,v=w.d
if(v!=null)v.a4(0)
w.d=null
if(w.e&&w.c!=null)w.m(new A.fic(w))},
c8r(d){var w,v,u=this
u.m(new A.fia(u))
w=u.a
v=w.e
v.aps(w.f?1.45:0.69)
v=u.d
if(v!=null)v.a4(0)
u.d=C.cG(D.kG,new A.fib(u))},
q(){var w=this.d
if(w!=null)w.a4(0)
this.a1()},
B(d){var w=this,v=null,u=w.a.d,t=D.w.j(w.e?0.8:0.55),s=w.e,r=s?D.bu:D.aY
r=C.J(r,D.r,s?2:1)
return new C.D(D.eH,C.he(C.n1(D.c5,C.p(v,C.X(w.a.c,D.c,v,v,v,22),D.f,v,v,new C.o(t,v,r,v,v,v,D.a6),v,44,v,v,v,v,v,44),v,new A.fid(w),new A.fie(w),v,v,v,v,new A.fif(w)),v,u,v,v),v)}}
A.jQ.prototype={}
A.N3.prototype={}
A.a79.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m=null,l=x.p,k=C.a([C.B(C.a([C.aG(m,m,m,m,T.nw,m,m,m,new A.cbJ(d),m,m,m,m,m,m),B.fGH],l),D.m,m,D.e,D.i,0,m,m)],l)
for(w=0;w<5;++w){v=B.dsI[w]
u=v.c
t=C.a([new C.D(D.alh,new C.y(v.b+"  "+v.a.toUpperCase(),m,new C.F(!0,u,m,m,m,m,12,D.u,m,1.1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m,m,m,m,m,m,m,m,m),m)],l)
for(s=v.d,r=s.length,q=0;q<r;++q){p=s[q]
o=new C.aP(14,14)
n=new C.ay(u.j(0.35),1,D.r,-1)
t.push(C.p(m,C.x(C.a([new C.y(p.a,m,D.j3,m,m,m,m,m,m,m,m,m),D.cM,new C.y(p.b,m,E.V_,m,m,m,m,m,m,m,m,m)],l),D.E,m,D.e,D.i,0,D.p),D.f,m,m,new C.o(B.Fw,m,new C.bI(n,n,n,n),new C.bj(o,o,o,o),m,m,D.n),m,m,m,D.cu,D.bg,m,m,m))}D.d.v(k,t)}return C.c7(m,D.c1,C.bm(!0,C.cn(k,m,B.aki,m,m,D.ah,!1),!0,!1,D.af,!0,!0),m,!1,!1,m,m)}}
A.cnT.prototype={}
A.Fe.prototype={}
A.nu.prototype={}
A.Xg.prototype={}
A.cnJ.prototype={
bA0(d,e,f){var w,v=this
if(f!=null)w=D.d.fY(B.ayV,new A.cnN(f))
else{w=new C.e5()
w.cY(v.a)
w=B.ayV[w.ap(2)]}v.c!==$&&C.aQ()
v.c=w
w=new C.e5()
w.cY(v.a+7)
w=w.hl()
v.d!==$&&C.aQ()
v.d=w},
vn(d,e){var w=this.c
w===$&&C.c()
return D.d.fY(w.c,new A.cnO(e))},
Pr(d){++this.w
return new A.eD(!1,d,!1,"")},
c5B(d){var w=d.d
return new C.N(w,new A.cnK(this),C.T(w).k("N<1,m>")).aG(0," and ")},
biA(d,e){var w,v,u,t,s=this,r=s.vn(0,e),q=s.e
if(q.t(0,e))return s.Pr("The "+r.c.toLowerCase()+" is already there.")
if(d!==r.b)return s.Pr(s.b?"That does not go here.":"That does not go here. This spot is for the "+r.c.toLowerCase()+".")
for(w=r.d,v=w.length,u=0;u<v;++u)if(!q.t(0,w[u])){q=s.b?"Not yet: something has to go in first.":"Not yet. "+r.e+" Put in the "+s.c5B(r)+" first.";++s.w
return new A.eD(!1,q,!1,"")}if(r.f&&s.r)return s.Pr(s.b?"The water is still on!":"Stop! The water is still on. Cutting into a pipe with the water on floods the room. Turn the water off at the main valve first (pick the hand and tap the main valve).")
q.M(0,e)
s.y=!1
s.x.aa(0)
if(r.r>0)t=s.b?"":" It is only loose. Pick the wrench and tap it to tighten the joints."
else t=""
return new A.eD(!0,r.c+" fitted."+t,!1,"")},
bjV(d){var w,v,u,t,s=this,r=s.vn(0,d)
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
return new A.eD(!0,t>=w?v+": every joint is tight now.":v+": one joint tightened, one to go.",!1,"")},
aHm(d){var w=this.vn(0,d),v=this.f.h(0,d)
if(v==null)v=0
return w.r-v},
aJp(){var w,v,u,t,s,r,q=this
q.r=!q.r
w=q.x
w.aa(0)
if(!q.r)return B.aZU
v=q.c
v===$&&C.c()
u=v.c
t=C.T(u).k("Z<1>")
s=C.C(new C.Z(u,new A.cnP(q),t),t.k("M.E"))
v=v.c
u=C.T(v).k("Z<1>")
r=C.C(new C.Z(v,new A.cnQ(q),u),u.k("M.E"))
q.y=!0
if(s.length!==0){w.v(0,new C.N(s,new A.cnR(),C.T(s).k("N<1,m>")));++q.w
return new A.eD(!1,"Water is spraying from an open pipe where the "+D.d.gI(s).c.toLowerCase()+" should be! Turn the water off and finish the job.",!0,"")}if(r.length!==0){w.v(0,new C.N(r,new A.cnS(),C.T(r).k("N<1,m>")));++q.w
return new A.eD(!1,"The "+D.d.gI(r).c.toLowerCase()+" is leaking from a loose joint. Turn the water off, tighten it with the wrench, then test again.",!0,"")}if(!q.ga3M())return B.aZK
return B.aZw},
cJC(){var w,v,u,t,s,r,q,p=this
p.r=!0
p.aJp()
w=p.c
w===$&&C.c()
v=w.c
u=v.length
t=0
for(;t<u;++t){s=v[t]
p.biA(s.b,s.a)}for(w=w.c,v=w.length,t=0;t<v;++t){s=w[t]
for(u=s.r,r=s.a,q=0;q<u;++q)p.bjV(r)}p.aJp()
p.w=0},
ga3M(){var w=this.c
w===$&&C.c()
return D.d.d5(w.c,new A.cnL(this))},
gcHN(){var w=this.c
w===$&&C.c()
return D.d.d5(w.c,new A.cnM(this))},
gwG(){var w=this
return w.ga3M()&&w.gcHN()&&w.r&&w.y&&w.x.a===0}}
A.Wf.prototype={
R(){var w,v=new A.xg(-0.25,0.4,135,B.aXg,$.ax())
v.f=200
w=new C.yd()
$.yY()
w.h5(0)
return new A.aFb(v,w)}}
A.aFb.prototype={
gCV(d){var w=this.d
if(w===$){this.a.toString
w=D.o.F(Date.now(),1e5)
this.d=w}return w},
Z(){var w,v=this
v.a2()
w=v.a.d
if(w==null){w=v.gCV(0)
v.a.toString
w=A.h3Z(!1,w,null)}v.e=w
v.r=A.hu2(w,v.x,!w.b)},
q(){var w=this.at
if(w!=null)w.a4(0)
this.a1()},
a_4(){var w=this.e
w===$&&C.c()
return this.r=A.hu2(w,this.x,!w.b)},
axI(d,e){var w=this,v=w.at
if(v!=null)v.a4(0)
w.m(new A.eqP(w,d,e))
w.at=C.cG(D.jw,new A.eqQ(w))},
b_5(){this.f.hT(135,0.4,B.aXg,-0.25)
this.m(new A.eqI(this))},
czq(d){var w,v,u=this.e
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
ayz(d){var w=this.e
w===$&&C.c();++w.w
return new A.eD(!1,d,!1,"")},
c8v(d){return this.b_4(d)},
cyF(d){var w
A:{if("main"===d){w=9400
break A}w=this.e
w===$&&C.c()
w=w.c
w===$&&C.c()
w=9100+D.d.bh(w.c,new A.eqU(d))
break A}this.b_4(w)},
b7e(){var w,v,u,t,s,r,q,p=this,o=p.x
if(o==="hand")return C.a([B.eMu],x.L)
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
q=r.vn(0,s)
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
b_4(d){var w,v,u,t,s,r=this
if(d===0)return
w=r.r
w===$&&C.c()
v=w.b.h(0,d)
if(r.x.length===0){r.m(new A.eqx(r,d))
if(v!=null)r.axI(v.a+": "+v.b,!0)
return}u=r.czq(d)
w=r.x
if(w==="hand")if(d===9400){w=r.e
w===$&&C.c()
t=w.aJp()}else{w=r.e
w===$&&C.c()
t=r.ayz(w.b?"Your hand is only for the main water valve.":"Your hand is for the main water valve. Parts are placed by picking them from the tray.")}else if(w==="wrench")if(u==null){w=r.e
w===$&&C.c()
t=r.ayz(w.b?"Nothing to tighten.":"There is nothing to tighten there.")}else{w=r.e
w===$&&C.c()
t=w.bjV(u)}else if(u==null){w=r.e
w===$&&C.c()
t=r.ayz(w.b?"Not there.":"That does not go there. Tap one of the glowing spots.")}else{s=r.e
s===$&&C.c()
t=s.biA(w,u)}w=t.a
if(w)A.yM()
else A.fX(180,220,0.25,"square")
r.m(new A.eqy(r,d))
w=w&&!t.c
r.axI(t.b,w)
w=r.e
w===$&&C.c()
if(w.gwG()&&!r.as){r.as=!0
$.aV.x1$.push(new A.eqz(r))}},
c8s(){var w=null,v=this.c
v.toString
C.ck(w,w,!0,w,new A.eqE(this),v,w,!0,!0,x.H)},
aYW(){this.m(new A.eqN(this))
this.b_5()},
gcDN(){var w,v,u,t=C.a([],x.s)
for(w=0;w<11;++w){v=B.c5P[w]
u=this.e
u===$&&C.c()
u=u.c
u===$&&C.c()
if(D.d.b3(u.c,new A.eqV(v)))t.push(v)}return t},
c5Z(){var w,v,u,t,s=this.e
s===$&&C.c()
s=s.c
s===$&&C.c()
s=s.c
w=s.length
v=0
for(;v<w;++v){u=s[v]
if(!this.e.e.t(0,u.a)){t=this.e.e
t=D.d.d5(u.d,t.gkU(t))}else t=!1
if(t)return u}return null},
aVi(){var w,v,u,t=this,s=t.e
s===$&&C.c()
if(s.x.a!==0){s=s.c
s===$&&C.c()
s=s.c
w=C.T(s)
v=new C.cQ(new C.Z(s,new A.eqF(t),w.k("Z<1>")),new A.eqG(),w.k("cQ<1,m>")).aG(0,", ")
s=t.e
if(s.r)return new C.b7("\ud83d\udca7 Water is leaking at: "+v+". First turn the main water OFF: pick Hand and tap the main valve.","hand","main")
return new C.b7("\ud83d\udca7 It leaked at: "+v+". Pick the Wrench and tap it to tighten the joint. Then turn the water ON again to test.","wrench",s.x.gI(0))}if(!s.ga3M()){u=t.c5Z()
if(u==null)return B.eX3
if(u.f&&t.e.r)return B.eWz
s=u.b
w=B.aGw.h(0,s)
if(w==null)w=s
return new C.b7("Next: pick "+w+" from the tray, then tap "+u.c.toLowerCase()+" (the glowing spot). "+u.e,s,u.a)}s=t.e.c
s===$&&C.c()
s=s.c
w=C.T(s).k("Z<1>")
v=C.C(new C.Z(s,new A.eqH(t),w),w.k("M.E"))
if(v.length!==0)return new C.b7("Everything is fitted. Now tighten each joint: pick the Wrench and tap "+D.d.gI(v).c.toLowerCase()+".","wrench",D.d.gI(v).a)
if(!t.e.r)return B.eVm
return B.eXu},
cx0(){var w,v,u,t,s=this,r={}
r.a=r.b=null
w=s.aVi()
r.b=w.b
r.a=w.c
s.m(new A.eqR(r,s))
v=r.a
if(v!=null){if(v==="main")u=9400
else{v=s.e
v===$&&C.c()
v=v.c
v===$&&C.c()
u=9100+D.d.bh(v.c,new A.eqS(r))}r=s.r
r===$&&C.c()
t=r.b.h(0,u)
if(t!=null)s.f.hT(70,0.3,t.c,-0.2)
s.m(new A.eqT(s,u))}s.axI(w.a,!0)},
axH(d,e,f){var w,v=null,u=this.x===d,t=u?D.aE.j(0.25):D.c.j(0.07),s=C.n(14),r=u?D.aE:D.aY
r=C.J(r,D.r,u?2:1)
w=C.X(f,u?D.aE:D.ad,v,v,v,19)
return new C.D(H.u4,C.aB(v,C.p(v,C.B(C.a([w,D.bn,C.d(e,v,v,v,v,v,v,C.l(v,v,u?D.aE:D.c,v,v,v,v,v,v,v,v,12.5,v,v,D.H,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),D.m,v,D.e,D.i,0,v,v),D.f,v,v,new C.o(t,v,r,s,v,v,D.n),v,v,v,v,D.fj,v,v,v),D.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new A.eqB(this,u,d),v,v,v,v,v,v,!1,D.a3),v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.e
h===$&&C.c()
h=h.c
h===$&&C.c()
h=h.c
w=new C.Z(h,new A.eqW(j),C.T(h).k("Z<1>")).gL(0)
h=j.e.c
h===$&&C.c()
v=j.r
v===$&&C.c()
u=j.y
t=j.z
s=j.Q
r=u!==0?v.b.h(0,u):i
v=A.Y9(!1,i,j.f,new A.eqX(j),i,s,u,r,i,new A.eqY(),t,i,i,j.gc8t(),j.gc8u(),v,!1,i,i,i)
t=x.p
r=C.a([],t)
if(!j.e.b){u=D.aK.j(0.12)
s=C.n(12)
q=C.J(D.aK.j(0.6),D.r,1)
r.push(C.p(i,C.B(C.a([C.E(C.d("\ud83d\udc49 "+j.aVi().a,i,4,D.a1,i,i,i,B.fvz,i,i,i),1),D.bn,C.bH(B.fzg,i,j.gcx_(),C.bo(i,i,i,i,i,B.f67,D.kJ,i,i,i,i,i))],t),D.m,i,D.e,D.i,0,i,i),D.f,i,i,new C.o(u,i,q,s,i,i,D.n),i,i,i,D.eH,D.a_7,i,i,1/0))}if(j.x.length!==0&&j.b7e().length!==0){u=C.a([],t)
for(s=j.b7e(),q=s.length,p=0;p<s.length;s.length===q||(0,C.L)(s),++p){o={}
n=s[p]
o.a=null
o.a=n.a
m=new C.aP(12,12)
l=new C.ay(D.b4,1,D.r,-1)
u.push(C.aB(i,C.p(i,new C.y("\ud83d\udccd "+n.b,i,D.oH,i,i,i,i,i,i,i,i,i),D.f,i,i,new C.o(D.eQ.j(0.35),i,new C.bI(l,l,l,l),new C.bj(m,m,m,m),i,i,D.n),i,i,i,i,B.a_8,i,i,i),D.y,!1,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,new A.eqZ(o,j),i,i,i,i,i,i,!1,D.a3))}r.push(new C.D(D.eH,C.bX(D.bG,u,D.bq,i,6,6),i))}u=j.e
if(u.b)u="Practice mode: no hints. Build it in the right order."
else if(u.ga3M())u="Everything is fitted. Tighten every joint, then turn the main water on to test."
else{u=j.e.c
u===$&&C.c()
u="Job: "+u.d}r.push(new C.bM(D.a5,i,i,C.d(u,i,2,D.a1,i,i,i,B.aT0,i,i,i),i))
r.push(D.P)
t=C.a([j.axH("hand","Hand",B.aoY),j.axH("wrench","Wrench",D.pd)],t)
for(u=j.gcDN(),s=u.length,p=0;p<u.length;u.length===s||(0,C.L)(u),++p){k=u[p]
q=B.aGw.h(0,k)
q.toString
t.push(j.axH(k,q,Ag.aor))}r.push(new C.a5(i,52,C.cn(t,i,i,i,i,D.aM,!1),i))
return A.U1(D.aK,new A.er_(j,d),C.x(r,D.m,i,D.e,D.O,0,D.p),v,""+w+"/"+h.c.length+" fitted","Plumbing job: "+h.b,i)},
c2k(d){return C.bU(E.lA,null,new A.eqM(this),d,!0,!0,!0,D.k2,!1,!1,x.H)}}
A.z7.prototype={}
A.oy.prototype={}
A.XW.prototype={}
A.aw2.prototype={}
A.aUP.prototype={}
A.eD.prototype={
gjP(){return this.a}}
A.XK.prototype={
clL(d,e,f){var w,v,u,t,s=this,r=null,q="outlet",p="switch",o=new C.e5()
o.cY(s.a)
w=d==null?o.ap(3):d
v=C.a([0,1,2],x.t)
D.d.dZ(v,o)
u=3+o.ap(2)
switch(w){case 0:t=e==null?"Living room":e
s.c!==$&&C.aQ()
s.c=t
t=C.a([new A.oy(v[0],q,r),new A.oy(v[1],q,r),new A.oy(5,"light",u),new A.oy(u,p,r)],x.F)
s.d!==$&&C.aQ()
s.d=t
break
case 1:t=e==null?"Bedroom":e
s.c!==$&&C.aQ()
s.c=t
t=C.a([new A.oy(v[0],q,r),new A.oy(v[1],q,r),new A.oy(6,"fan",u),new A.oy(u,p,r)],x.F)
s.d!==$&&C.aQ()
s.d=t
break
default:t=e==null?"Kitchen":e
s.c!==$&&C.aQ()
s.c=t
t=C.a([new A.oy(v[0],"gfci",r),new A.oy(v[1],"gfci",r),new A.oy(5,"light",u),new A.oy(u,p,r)],x.F)
s.d!==$&&C.aQ()
s.d=t}if(f){t[1]=new A.oy(t[1].a,B.dkN[o.ap(5)],r)
t=s.d
t===$&&C.c()
t[3]=new A.oy(t[3].a,B.dmp[o.ap(5)],r)}},
ganz(){var w,v,u=C.aX(x.S),t=this.d
t===$&&C.c()
w=t.length
v=0
for(;v<t.length;t.length===w||(0,C.L)(t),++v)u.M(0,t[v].a)
return u},
cVN(d){var w,v,u,t=this.d
t===$&&C.c()
w=t.length
v=0
for(;v<w;++v){u=t[v]
if(u.a===d)return u}return null},
fU(d){++this.f
return new A.eD(!1,d,!1,"")},
amf(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.d
g===$&&C.c()
w=g.length
v=h.x
u=0
for(;u<g.length;g.length===w||(0,C.L)(g),++u){t=g[u].a
s=A.k_(t)
if(s.e==="fan")r="fan"
else r=s.c?"ceiling":"wall"
v.n(0,t,r)}g=C.a([],x.t)
for(q=0;q<$.Hf().length;++q)g.push(q)
h.y.v(0,g)
h.z.v(0,h.ganz())
for(g=h.Q,w=x.S,u=0;u<3;++u){p=B.ow[u]
v=C.aX(w)
t=C.aX(w)
o=new A.aw2(v,t)
o.d=o.e=o.a=!0
for(r=h.aqz(p),n=r.length,m=0;m<r.length;r.length===n||(0,C.L)(r),++m)for(l=r[m]*10,k=0;k<6;++k)t.M(0,l+k)
for(t=h.ganz(),r=C.a7(t),n=new C.mp(t,t.r,r.k("mp<1>")),n.c=t.e,r=r.c,t=p+48;n.C();){l=n.d
if(l==null)l=r.a(l)
s=A.k_(l)
if(!s.c){j=s.d.a
j=j>=p&&j<=t}else j=!1
if(j)v.M(0,l)}g.n(0,p,o)}for(g=h.as,u=0;u<2;++u){i=g[u]
i.a=!0
i.b=3
i.d=i.c=!0}},
cJD(){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=k.d
j===$&&C.c()
w=j.length
v=0
for(;v<j.length;j.length===w||(0,C.L)(j),++v){u=j[v]
k.bgy(u.a,u.b)}for(w=j.length,t=x.S,s=x.N,r=k.at,v=0;v<j.length;j.length===w||(0,C.L)(j),++v){q=j[v].a
p=r.h(0,q)
if(p==null)continue
o=p.a
n=A.t5(o)
if(n.w.length!==0)m=n.z
else{A:{if("outlet"===o){o=C.H([25,"ground",23,"white",21,"black"],t,s)
break A}if("gfci"===o){o=C.H([25,"ground",24,"white",22,"black"],t,s)
break A}if("switch"===o){o=C.H([25,"ground",21,"blackLine",22,"blackLoad"],t,s)
break A}o=C.H([53,"ground",52,"white",51,"black"],t,s)
break A}m=o}for(o=m.gdV(m),o=o.gag(o);o.C();){l=o.gS(o)
k.beU(q,l.b,l.a)}k.biU(q)
k.bdJ(q)}if(!k.ax)k.aJn()
for(w=j.length,v=0;v<j.length;j.length===w||(0,C.L)(j),++v){u=j[v]
if(D.d.t(B.lM,u.b)){t=u.a
k.biC(t,"lamp")
k.bkf(t)}}for(j=D.d.gag(j),w=new C.f5(j,new A.csK());w.C();){t=j.gS(0).a
k.aG_(t)
k.aG_(t)}},
aLR(d){var w,v,u=A.k_(d).d.a,t=C.a([],x.t)
for(w=0;v=$.Hf(),w<v.length;++w){v=v[w]
if(v>u&&v<64)t.push(w)}return t},
cTF(d,e){var w,v,u=this,t=u.x
if(t.aj(0,d))return u.fU("There is already a box at "+A.k_(d).b+".")
w=A.k_(d)
v=w.c
if(!v&&e!=="wall")return u.fU("That is a ceiling box. On the wall you use a plain wall box (the blue one with ears).")
if(v&&e==="wall")return u.fU("A wall box cannot go in the ceiling. Use a round ceiling box.")
if(w.e==="fan"&&e!=="fan"){if(!u.b)return u.fU('A fan is heavy and it shakes. It needs a box that says "fan rated". A plain ceiling box can let the fan fall.')
t.n(0,d,e);++u.f
return B.b_7}t.n(0,d,e)
t=v?"ceiling joist":"side of the stud"
return new A.eD(!0,w.b+": box fixed to the "+t+".",!1,"")},
cO7(d){var w,v=this
if(d<0||d>=$.Hf().length)return B.b_1
w=v.y
if(w.t(0,d))return v.fU("That stud already has a hole.")
if(v.x.a===0)return v.fU("Mount the boxes first. Then you know where the cable has to go and which studs need a hole.")
w.M(0,d)
return B.aZM},
cWS(d){var w,v,u,t,s=this,r=A.k_(d)
if(!s.x.aj(0,d))return s.fU("There is no box at "+r.b+". Mount the box first, then pull the cable to it.")
w=s.z
if(w.t(0,d))return s.fU("The cable is already there.")
v=s.aLR(d)
u=C.T(v).k("Z<1>")
t=C.C(new C.Z(v,new A.csR(s),u),u.k("M.E"))
if(t.length!==0){w=D.o.V($.Hf()[D.d.gI(t)])
v=t.length
u=v===1?"it":"the studs"
return s.fU("The cable is stuck: the stud at "+w+" inches has no hole. Drill "+u+" first ("+v+" left on the way).")}w.M(0,d)
return new A.eD(!0,"Cable pulled from the panel to "+r.b+", through the studs and along the ceiling.",!1,"")},
gaJe(){return this.ganz().d5(0,new A.csS(this))},
aqe(d){var w,v,u,t
for(w=this.Q,w=new C.cI(w,C.a7(w).k("cI<1,2>")).gag(0);w.C();){v=w.d
u=v.b
if(u.a){t=v.a
t=d>=t&&d<=t+48}else t=!1
if(t)return u}return null},
cQW(d){var w,v,u=this
if(!u.gaJe())return u.fU("Finish the rough-in first. The cable and the boxes must be in before the drywall hides the studs.")
if(!D.d.t(B.a5f,d))return B.aZA
if(!D.d.t(B.ow,d))return u.fU("The edge of the sheet would land between two studs. The sheet needs a stud under every edge, so there is nothing to screw it to. Start at the left corner (a stud) and move one sheet width (48 inches) at a time.")
w=u.Q
v=w.h(0,d)
if((v==null?null:v.a)===!0)return u.fU("There is already a sheet there.")
v=w.h(0,d)
if(v==null){v=x.S
v=new A.aw2(C.aX(v),C.aX(v))}v.a=!0
w.n(0,d,v)
return B.aZL},
aqz(d){var w,v,u,t=C.a([],x.t)
for(w=d+48,v=0;u=$.Hf(),v<u.length;++v){u=u[v]
if(u>=d&&u<=w)t.push(v)}return t},
cN2(d){var w,v,u=this,t=A.k_(d)
if(t.c)return u.fU("Ceiling fixtures do not need an opening in the wall.")
if(!u.x.aj(0,d))return u.fU("There is no box at "+t.b+".")
w=u.aqe(t.d.a)
if(w==null)return u.fU("There is no sheet over this box yet. Hang the sheet first, then cut the opening.")
v=w.b
if(v.t(0,d))return u.fU("The opening is already cut.")
v.M(0,d)
return B.aZV},
aL5(d,e,f){var w,v,u,t,s,r=this
if(f)return r.fU("Missed the stud! There is only air behind the sheet here. The screw would pull through the paper. Screw only where a stud is behind the sheet (every 16 inches).")
w=x.dD
v=C.C(new C.Z(B.ow,new A.csT(r,d),w),w.k("M.E"))
if(v.length===0)return r.fU("There is no sheet here yet.")
u=d*10+e
if(D.d.d5(v,new A.csU(r,u)))return r.fU("There is already a screw there.")
for(w=v.length,t=r.Q,s=0;s<v.length;v.length===w||(0,C.L)(v),++s)t.h(0,v[s]).c.M(0,u)
return B.aZX},
bop(d,e){return this.aL5(d,e,!1)},
bq2(d){var w=this.Q.h(0,d)
if(w==null||!w.a)return!1
return D.d.d5(this.aqz(d),new A.csW(w))},
gaDw(){return D.d.d5(B.ow,new A.csJ(this))},
gaDv(){var w=this.ganz()
return new C.Z(w,new A.csH(),C.a7(w).k("Z<cs.E>")).d5(0,new A.csI(this))},
cYQ(d){var w,v=this
if(!v.gaDw())return v.fU("Hang all the sheets first.")
if(!D.d.d5(B.ow,v.gaqf()))return v.fU("Finish screwing every sheet to the studs first. Tape goes on a solid wall.")
w=v.as[d]
if(w.a)return v.fU("This seam already has tape.")
w.c=w.a=!0
return B.aZE},
cTI(d){var w,v=this,u=v.as[d]
if(!u.a)return v.fU("Tape first. The mud goes over the tape.")
if(!u.c)return v.fU("The last coat is still wet. Let it dry before the next coat.")
w=u.b
if(w>=3)return v.fU("Three coats are enough. Now sand it.");++w
u.b=w
u.c=!1
return new A.eD(!0,"Coat "+w+" of joint compound spread. Let it dry.",!1,"")},
cSz(){var w,v=this.as
if(D.d.d5(v,new A.csP()))return B.aZS
for(w=0;w<2;++w)v[w].c=!0
return B.b_5},
bob(d){var w=this,v=w.as[d]
if(v.b<3)return w.fU("Put on all three coats of mud first. Sanding now would just rub off the tape.")
if(!v.c)return w.fU("The mud is still wet. Let it dry first.")
if(v.d)return w.fU("Already sanded.")
v.d=!0
return B.aZB},
cW1(d){var w=this,v=w.Q.h(0,d)
if(v==null||!v.a)return w.fU("There is no sheet there.")
if(!w.gaDv())return w.fU("Cut the openings for the boxes before you paint. Otherwise the paint covers the boxes.")
if(!D.d.d5(w.as,new A.csQ()))return w.fU("Sand the seams first. Paint shows every bump.")
if(v.e)return w.fU("This sheet is already painted.")
v.e=!0
return B.aZx},
gwI(){var w=this
return w.gaDw()&&D.d.d5(B.ow,w.gaqf())&&w.gaDv()&&D.d.d5(w.as,new A.csL())&&D.d.d5(B.ow,new A.csM(w))},
NF(){var w,v
for(w=this.at,w=new C.dq(w,w.r,w.e);w.C();){v=w.d.b
v.a=this.ax&&!this.ay}},
c1z(d,e){if(d.c)return e==="light"||e==="fan"?"":"A ceiling box holds a light or a fan, not an outlet or a switch."
return D.d.t(B.lM,e)||D.d.t(B.jV,e)?"":"A light or a fan hangs from the ceiling. A wall box holds an outlet, a GFCI or a switch."},
bgy(d,e){var w,v,u,t,s,r=this,q=A.k_(d)
if(!r.gwI())return r.fU("Finish the drywall first. Devices go in after the walls are painted.")
w=r.x
if(!w.aj(0,d)||!r.z.t(0,d))return r.fU("There is no box with cable at "+q.b+".")
v=r.at
if(v.aj(0,d))return r.fU("There is already a device there. Pull it out first if you want to move it.")
u=r.c1z(q,e)
if(u.length!==0)return r.fU(u)
if(!(D.d.t(B.jV,e)&&q.e==="low"))t=!D.d.t(B.jV,e)&&!q.c&&q.e==="switch"
else t=!0
if(t){if(!r.b)return r.fU(D.d.t(B.jV,e)?"A switch goes about 48 inches from the floor, where a hand falls naturally. This box is down at outlet height.":"Outlets go low, about 16 inches from the floor. This box is up at switch height.");++r.f
r.cy.push("Wrong height at "+q.b+".")}t=e==="fan"
if(t&&w.h(0,d)!=="fan")if(!r.b)return r.fU("This box is not fan rated. A fan on it can fall. Take the box out and put in a fan-rated one.")
s=new A.CA(C.U(x.S,x.N))
s.r=r.b
s.y=r.dx
s.x=!(t&&w.h(0,d)!=="fan")
s.a=r.ax&&!r.ay
v.n(0,d,new A.aUP(e,s))
if(e==="light")w="Light fixture"
else if(t)w="Ceiling fan"
else if(e==="gfci")w="GFCI outlet"
else w=e==="switch"?"Switch":A.agR(e)
return new A.eD(!0,w+" is held up to "+q.b+". Turn the breaker OFF, then wire it.",!1,"")},
bje(d){var w=this,v=w.at,u=v.h(0,d)
if(u==null)return B.aZI
if(w.ax&&!w.ay&&!u.b.w){if(w.b)return w.a2s()
return w.a2H()}v.W(0,d)
w.CW.W(0,d)
w.cx.W(0,d)
w.ch.W(0,d)
return B.b__},
a2H(){++this.r;++this.f
return B.aZY},
a2s(){var w,v,u=this;++u.r;--u.e
u.ax=!1
u.NF()
w=u.e
if(w<=0){u.w=!0
return B.aZH}v=w===1?"life":"lives"
return new A.eD(!1,"ZAP! You touched a live wire and got a shock. The breaker is now off. "+w+" "+v+" left. Always turn the breaker OFF and test the wires first.",!0,"shock")},
beU(d,e,f){var w,v,u,t,s=this,r=s.at.h(0,d)
if(r==null)return B.abY
s.NF()
w=A.t5(r.a)
v=D.d.fY(w.f,new A.csN(f))
u=A.hz0(w,r.b,e,v,!0)
t=u==null
if(t&&s.dx)return B.aZz
if(t){if(!s.b&&!v.c.t(0,e)){++s.f
return new A.eD(!0,v.b+": fastened. Careful: "+C.w(w.r.$2(e,v))+" It will burn or trip the breaker when the power comes on.",!0,"")}return new A.eD(!0,v.b+": wire fastened.",!1,"")}if(D.a.a0(u,"SHOCK"))return s.a2s()
if(D.a.a0(u,"STOP"))return s.a2H();++s.f
return new A.eD(!1,u,!1,"")},
bkc(d,e){var w,v=this,u=v.at.h(0,d)
if(u==null)return B.Wu
v.NF()
w=u.b
if(w.a&&w.c===0){if(v.b)return v.a2s()
return v.a2H()}w=w.b
w.bs(w,new A.csX(e))
return B.b_4},
biU(d){var w,v,u=this,t=u.at.h(0,d)
if(t==null)return B.abY
w=A.t5(t.a)
v=t.b
if(!A.bFl(w,v))return u.fU("Every wire must be fastened first.")
if(u.ax&&!u.ay){if(u.b)return u.a2s()
return u.a2H()}v.c=1
return B.aZQ},
biS(d){var w,v=this,u=v.at.h(0,d)
if(u==null)return B.Wu
if(v.ax&&!v.ay){if(v.b)return v.a2s()
return v.a2H()}w=u.b
w.c=0
w.d=!1
return B.aZW},
bdJ(d){var w=this.at.h(0,d)
if(w==null||w.b.c!==1)return this.fU("Push the device into the box first.")
w.b.c=2
return B.aZZ},
cYR(){var w,v,u,t,s,r,q,p,o,n=C.a([],x.fJ),m=this.d
m===$&&C.c()
w=m.length
v=this.at
u=0
for(;u<m.length;m.length===w||(0,C.L)(m),++u){t=m[u]
s=t.a
r=v.h(0,s)
q=t.b
p=A.t5(q)
o=A.k_(s).b+": "+p.b
if(r==null||r.a!==q){n.push(new A.ab9(o,A.fR6(p),B.dgT,!0))
continue}s=A.fR6(p)
q=r.b
n.push(new A.ab9(o,s,A.h8C(p,q),q.x))}return n},
cYS(){var w,v,u,t,s,r=C.aX(x.N),q=this.d
q===$&&C.c()
w=q.length
v=0
for(;v<q.length;q.length===w||(0,C.L)(q),++v)r.M(0,q[v].b)
q=C.a([],x.W)
for(r=C.en(r,r.r,r.$ti.c),w=r.$ti.c;r.C();){u=r.d
u=B.aGK.h(0,u==null?w.a(u):u)
if(u==null)u=B.aA_
t=C.T(u)
s=new C.jc(u,0,2,t.k("jc<1>"))
s.od(u,0,2,t.c)
D.d.v(q,s)}return q},
apo(d){var w=this.at
return A.La(A.t5(w.h(0,d).a),w.h(0,d).b)},
aJn(){var w=this
if(w.ay){w.ax=w.ay=!1
w.NF()
return B.aZO}w.ax=!w.ax
w.NF()
if(!w.ax)return B.aZG
return w.c8w()},
c8w(){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=C.a([],x.s),i=k.db
i.aa(0)
for(w=k.at,v=new C.cI(w,C.a7(w).k("cI<1,2>")).gag(0),u=k.cx,t=!1,s=!1,r=!1;v.C();){q=v.d
p=q.b.b
if(p.c===0)continue
o=q.a
n=A.La(A.t5(w.h(0,o).a),w.h(0,o).b)
p.d=p.c>=2
m=n.r
if(m!=="none"){i.n(0,o,m)
p.z=m
r=!0}if(n.d)t=!0
if(n.e){p.w=!0
u.M(0,o)
s=!0}if(n.a!=="ok"&&!k.dx)j.push(A.k_(o).b+": "+n.b)}if(t){k.ay=!0
k.NF()
l=s?"BANG! Sparks, smoke and flames. ":"Snap! "
i=k.dx?"The breaker tripped.":l+" The breaker tripped. "+D.d.aG(j," ")+" Fix it, then flip the breaker OFF and ON again."
return new A.eD(!1,i,!0,s?"burn":"trip")}if(r)return new A.eD(!1,k.dx?"Power is on.":"Power is on, and something is wrong. "+D.d.aG(j," "),!0,"arc")
if(j.length!==0)return new A.eD(!0,"Power is on. "+D.d.aG(j," "),!0,"")
return B.aZT},
aG_(d){var w,v,u,t,s,r,q=this,p=q.at,o=p.h(0,d)
if(o==null||!D.d.t(B.jV,o.a)||o.b.c<2)return B.b_3
w=q.ch
if(w.t(0,d))w.W(0,d)
else w.M(0,d)
v=q.d
v===$&&C.c()
u=C.T(v).k("Z<1>")
t=C.C(new C.Z(v,new A.csO(d),u),u.k("M.E"))
if(t.length===0)return B.aZP
s=D.d.gI(t)
v=s.a
r=q.anm(v)
if(w.t(0,d)&&r){p=p.h(0,v)
if(p!=null)p.c=!0
return new A.eD(!0,(s.b==="fan"?"The fan spins":"The light turns on")+". The switch works.",!1,"")}if(w.t(0,d)){p=s.b
return new A.eD(!1,(p==="fan"?"The fan":"The light")+" did not come on. Check the breaker and the wires on the switch and on the "+p+".",!1,"")}return B.b_2},
a4J(d){var w,v=this.at.h(0,d)
if(v!=null){w=v.b
w=w.c<2||w.w}else w=!0
if(w)return!1
return this.apo(d).c},
anm(d){var w=this,v=w.cVN(d),u=v==null,t=u?null:v.c,s=!0
if(!u)if(t!=null)u=!(w.ax&&!w.ay)||!w.a4J(d)||!w.a4J(t)
else u=s
else u=s
if(u)return!1
return w.ch.t(0,t)},
biC(d,e){var w,v,u,t=this,s="Nothing happens.",r=t.at.h(0,d)
if(r==null||!D.d.t(B.lM,r.a)||r.b.c<2)return t.fU("There is no finished outlet there to plug into.")
w=t.CW
if(w.aj(0,d))return t.fU("Something is already plugged in.")
w.n(0,d,e)
w=r.b
if(w.w)return B.aZJ
v=t.apo(d)
if(t.ax&&!t.ay&&t.a4J(d)){r.c=!0
if(v.a!=="ok"){w=t.dx
u=w?A.csG(e)+" runs.":A.csG(e)+" runs, but this outlet is NOT safe. "+v.b
return new A.eD(!0,u,!w,"")}return new A.eD(!0,A.csG(e)+" runs. The outlet works.",!1,"")}if(!(t.ax&&!t.ay))return B.aZN
u=v.r
if(u!=="none"){t.db.n(0,d,u)
w.z=u
w=t.dx?s:A.csG(e)+" does not run. "+v.b
return new A.eD(!1,w,!0,u==="fire"?"burn":"arc")}return new A.eD(!1,t.dx?s:"Nothing happens. "+v.b,!0,"")},
bkf(d){if(this.CW.W(0,d)==null)return B.Wu
return B.aZF},
bim(d){var w,v=this
if(d>=0){w=v.d
w===$&&C.c()
w=d>=w.length}else w=!0
if(w)return 2
if(v.ti(d))return 2
w=v.d
w===$&&C.c()
return v.at.h(0,w[d].a)==null?0:1},
ti(d){var w,v,u,t=this
if(d>=0){w=t.d
w===$&&C.c()
w=d>=w.length}else w=!0
if(w)return!0
w=t.d
w===$&&C.c()
v=w[d]
w=v.a
u=t.at.h(0,w)
if(u==null||!A.h4q(v.b,u.a)||u.b.c<2)return!1
return t.apo(w).a==="ok"},
gbkF(){var w,v,u,t,s,r,q,p,o,n=this.d
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
if(q!==p)if(!(D.d.t(B.lM,q)&&D.d.t(B.lM,p)))if(!(D.d.t(B.jV,q)&&D.d.t(B.jV,p)))if(q==="light"||q==="fan")q=p==="light"||p==="fan"
else q=!1
else q=o
else q=o
else q=o
q=!q||r.b.c<2}else q=!0
if(q)return!1
if(A.La(A.t5(v.h(0,s).a),v.h(0,s).b).a!=="ok")return!1}return!0},
gbec(){var w,v,u,t,s,r,q,p,o,n=this.d
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
if(q!==p)if(!(D.d.t(B.lM,q)&&D.d.t(B.lM,p)))if(!(D.d.t(B.jV,q)&&D.d.t(B.jV,p)))if(q==="light"||q==="fan")q=p==="light"||p==="fan"
else q=!1
else q=o
else q=o
else q=o
q=!q||r.b.c<2}else q=!0
if(q)return!1
if(A.La(A.t5(v.h(0,s).a),v.h(0,s).b).a!=="ok")return!1
s=t.b
if(D.d.t(B.lM,s)){if(!r.c)return!1}else if(!D.d.t(B.jV,s)&&!r.c)return!1}return!0}}
A.j_.prototype={}
A.Oj.prototype={
R(){var w,v=new A.xg(-0.12,0.4,205,B.aaP,$.ax())
v.f=300
v.z=0.7
v.w=0.05
w=new C.yd()
$.yY()
w.h5(0)
return new A.aFi(v,w,C.U(x.S,x.i))}}
A.aFi.prototype={
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
if(v.e!=null&&w.gwI())u.y=2
if(u.a.f){u.d.amf()
u.y=2}u.r=A.wU(u.d,new A.rN(u.z,u.Q,!1))
w=u.f
w.y=0
w.z=1.1},
q(){var w=this.cy
if(w!=null)w.a4(0)
this.a1()},
c8F(){var w=this,v=w.d
v===$&&C.c()
w.r=A.wU(v,new A.rN(w.z,w.Q,!1))},
qD(d,e){var w=this,v=w.cy
if(v!=null)v.a4(0)
w.m(new A.evt(w,d,e))
w.cy=C.cG(D.jw,new A.evu(w))},
aew(d){return this.qD(d,!1)},
jF(d){var w,v,u,t,s,r,q,p,o=this,n=d.a
if(n)A.yM()
else A.fX(180,220,0.25,"square")
w=d.d
if(w==="shock"){C.fL()
o.m(new A.euv(o))
C.bP(D.mF,new A.euw(o),x.P)}v=w==="burn"
if(v||w==="trip"||w==="arc"){u=o.d
u===$&&C.c()
u=u.db
u=new C.hF(u,u.r,u.e)
t=o.x
s=o.w
while(u.C()){r=u.d
q=s.gip()
p=o.d.db.h(0,r)==="fire"?7:4.5
t.n(0,r,q/1000+p)}C.fL()
w=w==="arc"
u=w?95:150
t=w?500:300
A.fX(u,t,0.5,w?"saw":"noise")
if(v){o.m(new A.eux(o))
C.bP(D.eR,new A.euy(o),x.P)}}w=o.d
w===$&&C.c()
o.r=A.wU(w,new A.rN(o.z,o.Q,!1))
n=n&&!d.c
o.qD(d.b,n)
if(o.d.w&&o.c!=null)$.aV.x1$.push(new A.euz(o))
if(o.d.gbec()&&!o.cx){o.cx=!0
$.aV.x1$.push(new A.euA(o))}},
b4L(){var w=this.ch?3.141592653589793:-0.12
this.f.hT(205,0.4,B.aaP,w)},
c8z(d,e){var w,v,u,t,s
if(this.Q>=0)return
w=this.f
v=w.cZQ(d,e)
if(v==null||Math.abs(v.a)>78||Math.abs(v.b)>52)v=w.bfg(d,e,-47)
if(v==null)return
u=D.k.E(v.a,-70,70)
t=D.k.E(v.b,-46,48)
s=D.k.E(v.c,-6,100)
w.xl(Math.max(34,w.c*0.45),new A.q(u,t,s))
A.fX(560,50,0.25,"tri")},
aUc(){var w,v,u=this
u.ch=!1
w=u.f
w.w=0.05
w.z=0.7
w.r8(!1)
w.y=0
u.m(new A.euK(u))
v=u.d
v===$&&C.c()
u.r=A.wU(v,new A.rN(u.z,u.Q,!1))
w.hT(205,0.4,B.aaP,-0.12)},
c38(){var w,v,u=this
u.ch=!1
w=u.f
w.r8(!1)
w.w=-0.95
w.y=0
w.z=1
u.m(new A.euM(u))
v=u.d
v===$&&C.c()
u.r=A.wU(v,new A.rN(u.z,u.Q,!1))
w.hT(82,-0.55,B.fZK,-0.12)},
bEf(){var w,v,u,t,s=this,r=s.d
r===$&&C.c()
r=r.CW
w=C.a7(r).k("cI<1,2>")
v=w.k("Z<M.E>")
u=C.C(new C.Z(new C.cI(r,w),new A.euB(),v),v.k("M.E"))
if(u.length===0){s.aew("Plug a TV into an outlet first. Then you can look behind it.")
return}t=A.k_(D.d.gI(u).a).d.a
s.ch=!1
r=s.f
r.r8(!1)
r.w=0.02
r.y=0
r.z=1.7
s.m(new A.euC(s))
s.r=A.wU(s.d,new A.rN(s.z,s.Q,!1))
w=t<0?-1.4:1.4
r.hT(60,0.12,new A.q(t,-30,14),w)
s.qD("This is the back of the TV. Tap the TV or its plug to pull the plug.",!0)},
bEd(){var w,v,u=this
u.ch=!0
w=u.f
w.r8(!0)
u.m(new A.euD(u))
v=u.d
v===$&&C.c()
u.r=A.wU(v,new A.rN(u.z,u.Q,!1))
w.hT(190,0.3,B.h_d,3.141592653589793)},
a_5(d,e){var w,v,u,t,s=this,r=A.k_(e),q=s.f
q.r8(!1)
q.y=0
s.m(new A.ev2(s,e))
w=s.d
w===$&&C.c()
s.r=A.wU(w,new A.rN(s.z,s.Q,!1))
v=A.ai7(r,B.fYb)
w=r.c
u=w?20:15
t=w?1.2:0.3
q.hT(u,w?-0.12:0.26,v,t)},
aev(){var w,v=this
v.m(new A.euL(v))
w=v.d
w===$&&C.c()
v.r=A.wU(w,new A.rN(v.z,v.Q,!1))
v.b4L()},
c8D(d){var w,v,u,t,s,r,q,p=this
if(d===0){if(p.Q<0)p.m(new A.evp(p))
return}w=p.Q
if(w>=0)v=!(d>=5000&&d<5700)
else v=!1
if(v)return
if(d>=5000&&d<5700){v=d-5000
u=D.o.ao(v,100)
if(w!==u){if(p.z==="tester")p.aCc(u)
else{p.m(new A.evq(p))
p.a_5(0,u)}return}p.b2t(u,D.o.F(v,100))
return}if(d>=1000&&d<1010)if(p.z==="drill"){w=p.d
w===$&&C.c()
p.jF(w.cO7(d-1000))
return}if(d>=2000&&d<2007){p.b2v(d-2000)
return}if(d>=3000&&d<3007){p.b2u(d-3000)
return}if(d>=6000&&d<6005){if(p.z==="sheet"){w=p.d
w===$&&C.c()
p.jF(w.cQW(B.a5f[d-6000]))}return}if(d>=6100&&d<6103){t=B.ow[d-6100]
if(p.z==="paint"){w=p.d
w===$&&C.c()
p.jF(w.cW1(t))
return}}if(d>=6200&&d<6202){s=d-6200
switch(p.z){case"tape":w=p.d
w===$&&C.c()
p.jF(w.cYQ(s))
return
case"mud":w=p.d
w===$&&C.c()
p.jF(w.cTI(s))
return
case"sand":w=p.d
w===$&&C.c()
p.jF(w.bob(s))
return}}if(d>=7000&&d<7100){if(p.z==="screw"){w=p.d
w===$&&C.c()
v=d-7000
p.jF(w.bop(D.o.ao(v,10),D.o.F(v,10)))}return}if(d>=7500&&d<7600){if(p.z==="screw"){w=p.d
w===$&&C.c()
v=d-7500
p.jF(w.aL5(D.o.ao(v,10),D.o.F(v,10),!0))}return}if(d===8000){w=p.d
w===$&&C.c()
p.jF(w.aJn())
return}if(d>=8200&&d<8207){w=p.d
w===$&&C.c()
p.jF(w.bkf(d-8200))
return}if(d>=8100&&d<8107){w=p.d
w===$&&C.c()
r=w.CW.h(0,d-8100)
A:{if("tv"===r){w="The TV"
break A}if("lamp"===r){w="The lamp"
break A}if("toaster"===r){w="The toaster"
break A}w="The hair dryer"
break A}p.qD(w+" is plugged in. To pull the plug, go behind it (the Behind the TV button) and tap the plug on the wall.",!0)
return}if(p.z==="look"){w=p.r
w===$&&C.c()
q=w.b.h(0,d)
if(q!=null){p.m(new A.evr(p,d))
p.qD(q.a+": "+q.b,!0)}}},
b2v(d){var w,v,u,t=this,s=t.d
s===$&&C.c()
if(s.at.aj(0,d)){s=t.z
s=s!=="tester"&&s!=="look"&&!D.d.t(B.Ia,s)}else s=!1
if(s){t.m(new A.evn(t))
t.a_5(0,d)
return}s=t.z
switch(s){case"wall":case"ceiling":case"fanbox":w=t.d
t.jF(w.cTF(d,s==="fanbox"?"fan":s))
return
case"cable":t.jF(t.d.cWS(d))
return
case"knife":t.jF(t.d.cN2(d))
return
case"outlet":case"gfci":case"switch":case"split":case"v240four":case"v240three":case"v240only":case"isolated":case"switch2p":case"switch3":case"switch4":case"switchsmart":case"switchcombo":case"light":case"fan":v=t.d.bgy(d,s)
t.jF(v)
if(v.a){s=t.d.at.h(0,d).b
w=t.d
s.f=!w.b&&!w.dx
t.z=""
t.a_5(0,d)}return
case"tester":t.aCc(d)
return}if(t.d.at.aj(0,d)){t.a_5(0,d)
return}if(t.d.gwI()&&t.d.x.aj(0,d)&&!t.d.at.aj(0,d)){t.qD("This box is empty. Pick what you want to put in (an outlet, a switch, a light or a fan) from the tray, then tap the box.",!0)
return}s=t.r
s===$&&C.c()
u=s.b.h(0,2000+d)
if(u!=null){t.m(new A.evo(t,d))
t.qD(u.a+": "+u.b,!0)}},
aCc(d){var w,v=this.d
v===$&&C.c()
w=v.ax&&!v.ay&&v.x.aj(0,d)&&this.d.z.t(0,d)
v=w?"The tester glows: this box is LIVE (120 volts). Turn the breaker OFF before you touch any wire.":"The tester stays dark: no power here. It is safe to work. (Test again after you turn the breaker off, every time.)"
this.qD(v,!w)
A.fX(w?1400:500,120,0.25,"tri")},
b2u(d){var w,v=this,u=v.d
u===$&&C.c()
w=u.at.h(0,d)
if(w==null)return
if(D.d.t(B.Ia,v.z)){v.jF(v.d.biC(d,v.z))
return}u=v.z
if(u==="tester"){v.aCc(d)
return}if(u==="flip"){if(D.d.t(B.jV,w.a)&&w.b.c>=2)v.jF(v.d.aG_(d))
else v.aew("Only a finished switch can be flipped.")
return}v.m(new A.evm(v))
v.a_5(0,d)},
b2t(d,e){var w,v,u,t,s,r,q,p,o=this,n=o.d
n===$&&C.c()
w=n.at.h(0,d)
if(w==null)return
if(B.aQA.t(0,e))return
n=w.a
v=A.t5(n)
u=v.f
t=C.T(u).k("Z<1>")
s=C.C(new C.Z(u,new A.eve(e),t),t.k("M.E"))
r=A.hz5(n,e)
n=r!=null
if(n){u=w.b
u=u.b.iL(0,r)&&u.c===0}else u=!1
if(u){o.jF(o.d.bkc(d,r))
return}u=!1
if(s.length!==0){t=w.b
if(t.c===0){t=t.b
if(t.h(0,e)!=null)u=o.at.length===0||t.h(0,e)===o.at}}if(u){n=o.d
u=w.b.b.h(0,e)
u.toString
o.jF(n.bkc(d,u))
o.m(new A.evf(o))
return}if(n){n=w.b
n=n.c===0&&!n.b.iL(0,r)&&D.d.b3(v.e,new A.evg(r))}else n=!1
if(n){o.m(new A.evh(o,r,d,e))
if(o.at.length!==0)o.qD(D.d.fY(v.e,new A.evi(r)).b+": picked up. Now tap where it joins.",!0)
return}if(s.length!==0&&w.b.c===0){n=o.at
if(n.length===0){o.aew("Pick a wire below first, then tap "+D.d.gI(s).b+".")
o.m(new A.evj(o,d,e))
return}q=o.d.beU(d,n,e)
o.jF(q)
if(q.a)o.m(new A.evk(o))
return}n=o.r
n===$&&C.c()
p=n.b.h(0,5000+d*100+e)
if(p!=null){o.m(new A.evl(o,d,e))
o.qD(p.a+": "+p.b,!0)}},
c8G(){var w,v,u,t,s,r,q=this,p=C.a([],x.ek)
for(w=0;w<7;++w){v=B.uF[w]
u=q.d
u===$&&C.c()
t=v.a
s=u.at.aj(0,t)
r=q.z
A:{if("wall"===r){u=!v.c&&!q.d.x.aj(0,t)
break A}if("ceiling"===r||"fanbox"===r){u=v.c&&!q.d.x.aj(0,t)
break A}if("cable"===r){u=q.d.x.aj(0,t)&&!q.d.z.t(0,t)
break A}if("knife"===r){u=!v.c&&q.d.x.aj(0,t)
break A}u=D.d.t(B.lM,r)||D.d.t(B.jV,q.z)
if(u){u=!v.c&&q.d.x.aj(0,t)&&!s
break A}if("light"===r||"fan"===r){u=v.c&&q.d.x.aj(0,t)&&!s
break A}if("tv"===r||"lamp"===r||"toaster"===r||"hairdryer"===r){u=s&&D.d.t(B.lM,q.d.at.h(0,t).a)
break A}if("tester"===r){u=q.d.x.aj(0,t)
break A}u=!1
break A}if(u)p.push(new C.z(t,v.b))}return p},
cyG(){var w,v,u,t,s,r,q,p=null,o=this.c8G()
if(o.length===0)return D.bJ
w=C.a([],x.p)
for(v=o.length,u=0;u<o.length;o.length===v||(0,C.L)(o),++u){t={}
s=o[u]
t.a=null
t.a=s.a
r=new C.aP(12,12)
q=new C.ay(D.b4,1,D.r,-1)
w.push(C.aB(p,C.p(p,new C.y("\ud83d\udccd "+s.b,p,D.oH,p,p,p,p,p,p,p,p,p),D.f,p,p,new C.o(D.eQ.j(0.35),p,new C.bI(q,q,q,q),new C.bj(r,r,r,r),p,p,D.n),p,p,p,p,B.a_8,p,p,p),D.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new A.evv(t,this),p,p,p,p,p,p,!1,D.a3))}return new C.D(D.i3,C.bX(D.bG,w,D.bq,p,6,6),p)},
bQJ(){var w=null,v=this.c
v.toString
C.ck(w,w,!1,w,new A.euJ(this),v,w,!0,!0,x.H)},
c8x(){var w=null,v=this.c
v.toString
C.ck(w,w,!0,w,new A.euG(this),v,w,!0,!0,x.H)},
axJ(d){this.m(new A.euN(this,d))
this.aUc()},
b_6(){return this.axJ(!1)},
c8B(){var w,v,u,t,s,r,q,p,o,n=this,m=n.d
m===$&&C.c()
if(m.w)return"The job is over."
switch(n.y){case 0:m=m.d
m===$&&C.c()
w=C.T(m).k("Z<1>")
v=C.C(new C.Z(m,new A.euO(n),w),w.k("M.E"))
if(v.length!==0){u=D.d.gI(v)
t=A.k_(u.a)
m=A.agR(u.b)
if(t.c)w=t.e==="fan"?"fan box":"ceiling box"
else w="wall box"
return"Mount a box at "+t.b+" ("+m.toLowerCase()+" goes here): pick a "+w+", then tap the glowing spot."}m=n.d.d
m===$&&C.c()
w=C.T(m).k("Z<1>")
s=C.C(new C.Z(m,new A.euP(n),w),w.k("M.E"))
if(s.length!==0){t=D.d.gI(s).a
m=n.d.aLR(t)
r=new C.Z(m,new A.euQ(n),C.T(m).k("Z<1>")).gL(0)
return r>0?"The cable comes from the panel on the right. Pick the drill and tap each stud on the way to "+A.k_(t).b+" ("+r+" left).":"Pick the cable roll and tap "+A.k_(t).b+"."}return"Rough-in done! Open 2 Drywall."
case 1:if(!m.gaJe())return"Finish the rough-in first (tab 1). Drywall hides the wires."
if(!n.d.gaDw())return"Pick a drywall sheet and tap a stud edge to hang it. Three sheets cover the wall."
if(!n.d.gaDv())return"Pick the drywall saw and tap each box to cut its opening."
if(!D.d.d5(B.ow,n.d.gaqf()))return"Pick the screw gun and put a screw in every glowing spot on the studs."
if(D.d.b3(n.d.as,new A.euT()))return"Pick the tape and tap each seam between two sheets."
if(D.d.b3(n.d.as,new A.euU()))return D.d.b3(n.d.as,new A.euV())?'The mud is wet. Press "Let it dry", then the next coat.':"Pick the mud and tap each seam. It needs three coats, with drying in between."
if(D.d.b3(n.d.as,new A.euW()))return D.d.b3(n.d.as,new A.euX())?'Press "Let it dry", then sand.':"Pick the sander and tap each seam."
if(!n.d.gwI())return"Pick the roller and paint each sheet."
return"Drywall done! Open 3 Devices."
default:if(!m.gwI())return"Finish the drywall first (tab 2)."
m=n.d.d
m===$&&C.c()
w=C.T(m).k("Z<1>")
q=C.C(new C.Z(m,new A.euY(n),w),w.k("M.E"))
if(q.length!==0){u=D.d.gI(q)
return"The breaker being on is not the end: the job is done only when every device is in and wired. Tap the blue square at "+A.k_(u.a).b+" to put in the "+A.agR(u.b).toLowerCase()+". ("+C.w(new A.ev0().$1(new C.N(q,new A.euZ(),C.T(q).k("N<1,G>"))))+" still need a device.)"}m=n.d.d
m===$&&C.c()
w=C.T(m).k("Z<1>")
p=C.C(new C.Z(m,new A.ev_(n),w),w.k("M.E"))
if(p.length!==0)return"Tap "+A.k_(D.d.gI(p).a).b+" to work on it: breaker OFF, wires, push in, cover on."
m=n.d
if(!m.ax)return"Turn the breaker ON (tap the panel or the breaker button) and test."
m=m.d
m===$&&C.c()
w=C.T(m).k("Z<1>")
o=C.C(new C.Z(m,new A.euR(n),w),w.k("M.E"))
if(o.length!==0)return"Pick the TV or the lamp and plug it into "+A.k_(D.d.gI(o).a).b+" to test it."
m=n.d.d
m===$&&C.c()
return"Flip the wall switch to test the "+(D.d.b3(m,new A.euS())?"fan":"light")+"."}},
B(a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=this,a2=null,a3=B.dr8[a1.y],a4=a1.Q
if(a4>=0){w=a1.d
w===$&&C.c()
v=w.at.h(0,a4)}else v=a2
a4=v==null
u=a4?a2:A.t5(v.a)
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
for(l=0;l<3;++l)m.push(new C.D(D.Ng,new C.y(l<a1.d.e?"\u2764\ufe0f":"\ud83d\udda4",a2,D.Am,a2,a2,a2,a2,a2,a2,a2,a2,a2),a2))
m.push(D.bn)
k=a1.d
if(k.ay)k=D.ke
else{k=k.ax
k=k?D.ej:D.e_}k=k.j(0.95)
j=C.n(16)
i=a1.d
h=i.ay
if(h)g=D.cQ
else{g=i.ax
g=g?D.c7:D.be}g=C.J(g,D.r,1.4)
if(h)i="TRIPPED: tap to reset"
else{i=i.ax
i=i?"Breaker ON":"Breaker OFF"}m.push(C.aB(a2,C.p(a2,C.d(i,a2,a2,a2,a2,a2,a2,B.fmS,a2,a2,a2),D.f,a2,a2,new C.o(k,a2,g,j,a2,a2,D.n),a2,a2,a2,a2,D.rt,a2,a2,a2),D.y,!1,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,new A.evD(a1),a2,a2,a2,a2,a2,a2,!1,D.a3))
m=C.a([C.B(m,D.m,a2,D.e,D.O,0,a2,a2)],n)
k=a1.ch
j=k?"In front":"Behind the wall"
i=k?G.anX:G.anW
k=C.a([A.wV(j,D.br,i,k,k?a1.gbSg():a1.gbEc()),D.am,A.wV("Look up",D.b4,B.bNW,!1,a1.gc37()),D.am,A.wV("Behind the TV",D.cQ,Y.a2e,!1,a1.gbEe()),D.am],n)
if(!a4){j=v.b
D.d.v(k,C.a([A.wV("Labels",D.aK,P.Cj,j.f,new A.evE(a1,v)),D.am,A.wV("Hints",D.aE,D.rA,j.e,new A.evF(a1,v)),D.P],n))}s=A.Y9(!1,a2,a1.f,new A.evP(a1),a2,p,r,o,a2,a2,q,a2,a1.gc8y(),new A.evQ(a1),a1.gc8C(),s,!1,a2,m,k)
r=C.a([],n)
if(a4){a4=C.a([],n)
for(l=0;l<3;++l){q=l<2?6:0
p=a1.y===l?D.aE.j(0.2):D.ds
o=new C.aP(12,12)
f=new C.ay(a1.y===l?D.aE:D.bC,1,D.r,-1)
if(l===0)m=a1.d.gaJe()
else{m=a1.d
m=l===1?m.gwI():m.gbec()}m=m?"\u2705 ":""
k=B.dpk[l]
j=a1.y===l?D.aE:D.ad
a4.push(new C.bz(1,D.ba,C.aB(a2,C.p(a2,new C.ci(D.A,a2,a2,new C.y(m+k,a2,new C.F(!0,j,a2,a2,a2,a2,12,D.u,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2),a2,a2,a2,a2,a2,a2,a2,a2,a2),a2),D.f,a2,a2,new C.o(p,a2,new C.bI(f,f,f,f),new C.bj(o,o,o,o),a2,a2,D.n),a2,a2,a2,new C.Q(0,0,q,0),A5.Nj,a2,a2,a2),D.y,!1,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,new A.evR(a1,l),a2,a2,a2,a2,a2,a2,!1,D.a3),a2))}a4=C.a([C.B(a4,D.m,a2,D.e,D.i,0,a2,a2),D.am],n)
if(!a1.d.b){q=D.aK.j(0.1)
p=C.n(10)
o=C.J(D.aK.j(0.4),D.r,1)
a4.push(C.p(a2,C.d("\ud83d\udc49 "+a1.c8B(),a2,2,D.a1,a2,a2,a2,B.fos,a2,a2,a2),D.f,a2,a2,new C.o(q,a2,o,p,a2,a2,D.n),a2,a2,a2,a2,D.cm,a2,a2,1/0))}else a4.push(B.fHg)
a4.push(D.am)
q=C.a([],n)
if(a1.y<2&&!a1.d.gwI())q.push(new C.D(H.u4,C.aB(a2,C.p(a2,B.b9y,D.f,a2,a2,new C.o(D.dF,a2,a2,C.n(14),a2,a2,D.n),a2,a2,a2,a2,D.fj,a2,a2,a2),D.y,!1,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,new A.evS(a1),a2,a2,a2,a2,a2,a2,!1,D.a3),a2))
for(p=a3.length,e=0;e<p;++e){d=a3[e]
o=d.a
m=a1.z===o?D.aE.j(0.25):D.c.j(0.07)
k=new C.aP(14,14)
o=a1.z===o
j=o?D.aE:D.aY
f=new C.ay(j,o?2:1,D.r,-1)
j=o?D.aE:D.ad
j=C.X(d.c,j,a2,a2,a2,19)
o=o?D.aE:D.c
q.push(new C.D(H.u4,C.aB(a2,C.p(a2,new C.cd(D.aM,D.e,D.i,D.m,a2,D.p,a2,0,C.a([j,D.bn,new C.y(d.b,a2,new C.F(!0,o,a2,a2,a2,a2,12.5,D.H,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2),a2,a2,a2,a2,a2,a2,a2,a2,a2)],n),a2),D.f,a2,a2,new C.o(m,a2,new C.bI(f,f,f,f),new C.bj(k,k,k,k),a2,a2,D.n),a2,a2,a2,a2,D.fj,a2,a2,a2),D.y,!1,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,new A.evT(a1,d),a2,a2,a2,a2,a2,a2,!1,D.a3),a2))}if(a1.y===1)q.push(new C.D(H.u4,C.aB(a2,C.p(a2,B.b9q,D.f,a2,a2,new C.o(D.e_,a2,a2,C.n(14),a2,a2,D.n),a2,a2,a2,a2,D.fj,a2,a2,a2),D.y,!1,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,new A.evU(a1),a2,a2,a2,a2,a2,a2,!1,D.a3),a2))
a4.push(new C.a5(a2,52,C.cn(q,a2,a2,a2,a2,D.aM,!1),a2))
if(a1.z.length!==0)a4.push(a1.cyG())
D.d.v(r,a4)}else{a4=C.a([],n)
q=v.b
if(q.c===0)for(p=D.d.gag(u.e),o=new C.f5(p,new A.evV(v)),m=q.b;o.C();){k=p.gS(0)
j=k.c
i=new C.aP(14,14)
h=a1.at
g=k.a
h=h===g
a0=h?D.b4:D.aY
f=new C.ay(a0,h?3:1,D.r,-1)
a0=C.a([],n)
if(m.iL(0,g))a0.push(new C.D(D.Nh,C.X(D.ed,k.d,a2,a2,a2,17),a2))
h=k.b
g=k.d
a0.push(new C.y(h,a2,new C.F(!0,g,a2,a2,a2,a2,12.5,D.u,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2),a2,a2,a2,a2,a2,a2,a2,a2,a2))
a4.push(C.aB(a2,C.p(a2,new C.cd(D.aM,D.e,D.O,D.m,a2,D.p,a2,0,a0,a2),D.f,a2,a2,new C.o(j,a2,new C.bI(f,f,f,f),new C.bj(i,i,i,i),a2,a2,D.n),a2,a2,a2,a2,D.yi,a2,a2,a2),D.y,!1,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,new A.evW(a1,v,k),a2,a2,a2,a2,a2,a2,!1,D.a3))}a4=C.a([C.bX(D.bG,a4,D.bq,a2,6,8)],n)
if(q.c===0&&a1.at.length!==0){p=C.a([],n)
for(o=D.d.gag(u.f),m=new C.f5(o,new A.evG(v));m.C();){k=o.gS(0)
j=D.eQ.j(0.35)
i=new C.aP(12,12)
f=new C.ay(D.b4,1,D.r,-1)
p.push(C.aB(a2,C.p(a2,new C.y("\u279c "+k.b,a2,D.oH,a2,a2,a2,a2,a2,a2,a2,a2,a2),D.f,a2,a2,new C.o(j,a2,new C.bI(f,f,f,f),new C.bj(i,i,i,i),a2,a2,D.n),a2,a2,a2,a2,B.a_8,a2,a2,a2),D.y,!1,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,new A.evH(a1,k),a2,a2,a2,a2,a2,a2,!1,D.a3))}a4.push(new C.D(D.jy,C.bX(D.bG,p,D.bq,a2,6,6),a2))}a4.push(D.P)
p=C.a([A.ui("Back to the room",D.kL,a1.gc8A(),D.ad),D.ac],n)
if(q.c===0){u.toString
o=A.bFl(u,q)?"Push it into the box":"Fasten every wire"
p.push(A.ui(o,B.ap3,A.bFl(u,q)?new A.evI(a1):a2,D.aE))}if(q.c===1)D.d.v(p,C.a([A.ui("Pull it out",D.qx,new A.evJ(a1),D.ad),D.ac,A.ui("Cover on",A0.wg,new A.evK(a1),D.aE)],n))
o=q.c>=2
if(o&&q.w)p.push(A.ui("Take out the burnt one",B.anO,new A.evL(a1),D.c7))
else if(o)p.push(A.ui("Pull it out of the wall",B.anO,new A.evM(a1),D.ad))
a4.push(C.B(p,D.m,a2,D.e,D.i,0,a2,a2))
if(!q.w)D.d.v(a4,C.a([D.P,C.B(C.a([A.ui("Take it out and put in a different "+(D.d.t(B.jV,v.a)?"switch":"one"),D.kk,new A.evN(a1,v),D.aK)],n),D.m,a2,D.e,D.i,0,a2,a2)],n))
D.d.v(r,a4)}a4=C.a([A.U1(D.aE,new A.evO(a1,a5),C.x(r,D.m,a2,D.e,D.O,0,D.p),s,"Phase "+(w+1)+"/3",t+" job",a2)],n)
if(a1.CW)a4.push(C.bS(0,C.dZ(C.p(a2,a2,D.f,B.aic,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2),!0,a2),0,0,0))
return new C.an(D.a_,a2,D.ab,D.t,a4,a2)},
csg(d){var w=this.d
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
break A}this.qD(w,!0)},
cho(d){return C.bU(E.lA,null,new A.evd(this,d),d,!0,!0,!0,D.k2,!1,!1,x.H)}}
A.rN.prototype={}
A.rl.prototype={
a6(){return"FaultKind."+this.b}}
A.uD.prototype={}
A.Mv.prototype={}
A.cw5.prototype={
bAd(d,e,f){var w,v,u,t,s,r,q,p=this,o=new C.e5()
o.cY(p.a)
w=C.C(B.deb,x.eP)
D.d.dZ(w,o)
v=C.aX(x.S)
u=C.a([],x.gw)
for(t=w.length,s=0;s<w.length;w.length===t||(0,C.L)(w),++s){r=w[s]
q=B.wG.h(0,r).e
if(v.t(0,q))continue
v.M(0,q)
u.push(new A.Mv(r,o.ap(3)))
if(u.length>=d)break}p.c!==$&&C.aQ()
p.c=u
p.axK()},
q_(d,e){var w=this.c
w===$&&C.c()
return D.d.b3(w,new A.cwa(e))},
axK(){var w,v,u,t,s=this,r=s.d,q=r.d
q.aa(0)
if(s.q_(0,B.a0w))q.M(0,72)
if(s.q_(0,B.a0x))q.M(0,75)
q=s.q_(0,B.NW)
r.b=q
r.c=!q
r.w=s.q_(0,B.NX)
r.x=s.q_(0,B.a0B)
r.y=s.q_(0,B.a0C)
r.z=s.q_(0,B.a0A)
r.Q=s.q_(0,B.a0D)
r.as=s.q_(0,B.a0E)
r.at=s.q_(0,B.a0z)
q=r.f
q.aa(0)
r=r.r
r.aa(0)
w=s.c
w===$&&C.c()
w=D.d.gag(w)
v=new C.f5(w,new A.cw6())
while(v.C()){u=w.gS(0)
t=u.c
u=u.b
if(t)r.M(0,u)
else q.M(0,u)}},
gcHL(){var w=this.c
w===$&&C.c()
return D.d.d5(w,new A.cw8())},
gcPi(){var w=this.c
w===$&&C.c()
return new C.Z(w,new A.cw9(),C.T(w).k("Z<1>")).gL(0)},
cOX(d){var w,v,u,t,s,r,q,p=this.c
p===$&&C.c()
w=p.length
v=d===86
u=d===92
t=0
for(;t<p.length;p.length===w||(0,C.L)(p),++t){s=p[t]
r=s.a
q=!0
if(B.wG.h(0,r).e!==d)if(!(r===B.NW&&v))r=r===B.NX&&u
else r=q
else r=q
if(r)return s}return null},
b_7(d){++this.f
return new A.eD(!1,d,!1,"")},
c8H(){var w,v,u,t,s=this;++s.r;--s.e
for(w=s.d,v=w.d,w=w.e,u=0;u<4;++u){t=B.axo[u]
if(!v.t(0,t))w.M(0,t)}w=s.e
if(w<=0){s.w=!0
return B.aZD}v=w===1?"life":"lives"
return new A.eD(!1,"ZAP! You touched a live wire and got a shock. All the breakers were knocked off. "+w+" "+v+" left. Turn the breaker OFF first.",!0,"shock")},
cZF(d,e){var w,v,u,t,s=this
if(s.w)return B.aZy
if(D.d.t(B.axo,e))return s.bEJ(d,e)
w=s.cOX(e)
if(d==="inspect"){if(w==null||w.c)return B.aZC
return new A.eD(!0,"You look and test: "+B.wG.h(0,w.a).b,!1,"")}if(w==null||w.c)return new A.eD(!1,s.b?"Nothing needs fixing there.":"There is nothing wrong with this, so the "+C.w(B.Sh.h(0,d))+' is not needed. Use "Look and test" on things to find the problem.',!1,"")
v=B.wG.h(0,w.a)
if(d!==v.c){++s.f
return new A.eD(!1,s.b?"That is not the right tool for this problem.":"The "+C.w(B.Sh.h(0,d))+" does not fix this. "+v.b,!1,"")}u=v.f
if(u!==0){t=s.d
u=!t.d.t(0,u)&&!t.e.t(0,u)}else u=!1
if(u){if(s.b)return s.c8H()
return s.b_7("STOP! "+v.r+" The wires here are live (120 volts). Tap the breaker in the panel (with your hand) to switch it off.")}w.c=!0
s.axK()
return new A.eD(!0,v.d,!1,"")},
bEJ(d,e){var w,v,u,t,s=this
if(d==="inspect"){w=s.d
if(w.d.t(0,e))w="This breaker has tripped: it sits in the middle (orange)."
else w=w.e.t(0,e)?"This breaker is switched OFF.":"This breaker is ON."
return new A.eD(!0,w,!1,"")}if(d!=="hand")return s.b_7(s.b?"Use your hand on a breaker.":"A breaker is switched with your hand, not with a "+C.w(B.Sh.h(0,d))+".")
w=s.d
v=w.d
if(v.t(0,e)){w=s.c
w===$&&C.c()
u=C.T(w).k("Z<1>")
t=C.C(new C.Z(w,new A.cw7(e),u),u.k("M.E"))
if(t.length!==0){D.d.gI(t).c=!0
s.axK()
return new A.eD(!0,B.wG.h(0,D.d.gI(t).a).d,!1,"")}v.W(0,e)
return B.b_6}w=w.e
if(w.t(0,e)){w.W(0,e)
return B.b_0}w.M(0,e)
return B.aZR}}
A.as_.prototype={
R(){var w,v=new A.xg(-0.3,0.48,46,B.Vx,$.ax())
v.f=80
w=new C.yd()
$.yY()
w.h5(0)
return new A.aFm(v,w)}}
A.aFm.prototype={
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
w=A.hme(!1,w)
v.d=w
v.r=A.agI(w.d)},
q(){var w=this.ax
if(w!=null)w.a4(0)
this.a1()},
c8M(d,e){var w=this,v=w.ax
if(v!=null)v.a4(0)
w.m(new A.exi(w,d,e))
w.ax=C.cG(D.jw,new A.exj(w))},
b_8(){this.f.hT(46,0.48,B.Vx,-0.3)
this.m(new A.ex7(this))},
c8L(d){var w,v,u=this
if(d===0)return
w=u.d
w===$&&C.c()
v=w.cZF(u.x,d)
w=v.a
if(w)A.yM()
else A.fX(180,220,0.25,"square")
if(v.d==="shock"){C.fL()
u.m(new A.exc(u))
C.bP(D.mF,new A.exd(u),x.P)}u.m(new A.exe(u,d))
w=w&&!v.c
u.c8M(v.b,w)
w=u.d
if(w.w)$.aV.x1$.push(new A.exf(u))
else if(w.gcHL()&&!u.at){u.at=!0
$.aV.x1$.push(new A.exg(u))}},
chw(){var w=null,v=this.c
v.toString
C.ck(w,w,!1,w,new A.exa(this),v,w,!0,!0,x.H)},
c8I(){var w=null,v=this.c
v.toString
C.ck(w,w,!0,w,new A.ex6(this),v,w,!0,!0,x.H)},
ax7(){this.m(new A.ex8(this))
this.b_8()},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.d
g===$&&C.c()
g=g.gcPi()
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
for(o=0;o<3;++o)p.push(new C.D(D.Ng,new C.y(o<i.d.e?"\u2764\ufe0f":"\ud83d\udda4",h,D.Am,h,h,h,h,h,h,h,h,h),h))
v=A.Y9(!1,h,i.f,new A.exq(i),h,s,u,r,h,new A.exr(),t,h,h,i.gc8J(),i.gc8K(),v,!1,h,C.a([C.B(p,D.m,h,D.e,D.O,0,h,h)],q),h)
u=i.d.c
u===$&&C.c()
t=C.T(u)
t=new C.cQ(new C.Z(u,new A.exs(),t.k("Z<1>")),new A.ext(),t.k("cQ<1,m>")).aG(0,"  \xb7  ")
u=C.d("Customer: "+(t.length===0?"All fixed!":t),h,2,D.a1,h,h,h,B.aT0,h,h,h)
t=C.a([],q)
for(n=0;n<10;++n){m=B.dtL[n]
s=i.x===m?D.aE.j(0.25):D.c.j(0.07)
r=new C.aP(14,14)
p=i.x===m
l=p?D.aE:D.aY
k=new C.ay(l,p?2:1,D.r,-1)
l=B.dzy.h(0,m)
p=C.X(l,i.x===m?D.aE:D.ad,h,h,h,19)
l=B.Sh.h(0,m)
l.toString
j=i.x===m?D.aE:D.c
t.push(new C.D(H.u4,C.aB(h,C.p(h,new C.cd(D.aM,D.e,D.i,D.m,h,D.p,h,0,C.a([p,D.bn,new C.y(l,h,new C.F(!0,j,h,h,h,h,12.5,D.H,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h),h,h,h,h,h,h,h,h,h)],q),h),D.f,h,h,new C.o(s,h,new C.bI(k,k,k,k),new C.bj(r,r,r,r),h,h,D.n),h,h,h,h,D.fj,h,h,h),D.y,!1,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,new A.exu(i,m),h,h,h,h,h,h,!1,D.a3),h))}g=C.a([A.U1(D.aK,new A.exv(i,d),C.x(C.a([new C.bM(D.a5,h,h,u,h),D.P,new C.a5(h,52,C.cn(t,h,h,h,h,D.aM,!1),h)],q),D.m,h,D.e,D.O,0,D.p),v,""+g+"/"+w+" fixed","Service call",h)],q)
if(i.as)g.push(C.bS(0,C.dZ(C.p(h,h,D.f,B.aic,h,h,h,h,h,h,h,h,h,h),!0,h),0,0,0))
return new C.an(D.a_,h,D.ab,D.t,g,h)},
cCg(d){return C.bU(E.lA,null,new A.exo(this),d,!0,!0,!0,D.k2,!1,!1,x.H)},
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
A.y3.prototype={
giQ(d){return this.x}}
A.tN.prototype={}
A.aa1.prototype={}
A.i9.prototype={
aGF(d,e,f){var w=this
return d>w.a-f&&d<w.b+f&&e>w.c-f&&e<w.d+f}}
A.csE.prototype={
c8N(d){return-this.a.gex(0)/2+d*4},
a5i(d,e){var w,v,u=this.a
if(d<-u.gex(0)/2+6||d>u.gex(0)/2-6||e<6||e>u.ghs(0)-6)return!1
for(u=this.b,w=u.length,v=0;v<w;++v)if(u[v].aGF(d,e,9))return!1
return!0},
b_a(d,e,f){var w,v,u=e.a,t=f.a-u,s=e.b,r=f.b-s,q=Math.max(1,D.k.dd(Math.sqrt(Math.pow(t,2)+Math.pow(r,2))/2))
for(w=0;w<=q;++w){v=w/q
if(!this.a5i(u+t*v,s+r*v))return!1}return!0},
aYN(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=a0.a,f=h.a,e=D.k.V((g+f.gex(0)/2)/4),d=h.c
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
if(!h.a5i(-f.gex(0)/2+k,j))continue
i=Math.pow(-f.gex(0)/2+k-g,2)+Math.pow(j-e,2)
if(i<o){p=new C.z(n,l)
o=i}}if(p!=null)return p}return null},
aoR(b9,c0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5=this,b6=1e9,b7=b5.aYN(b9),b8=b5.aYN(c0)
if(b7==null||b8==null)return C.a([b9,c0],x.f)
w=b8.a
v=b5.c8N(w)
u=b8.b
t=new C.z(v,u*4)
if(b5.b_a(0,b9,t))return C.a([b9,t],x.f)
v=b7.a
s=b5.d
s===$&&C.c()
r=b7.b
q=x.S
p=C.eE([v*s+r],q)
o=C.U(q,q)
n=x.i
m=C.H([v*s+r,0],q,n)
l=C.H([v*s+r,b5.bUo(v,r,b8)],q,n)
k=w*s+u
v=b5.a
r=p.$ti
q=r.k("mp<1>")
r=r.c
i=0
for(;;){if(p.a!==0){h=i+1
n=i<6000
i=h}else n=!1
if(!n){j=!1
break}g=p.e
if(g==null)C.b9(C.be("No elements"))
f=g.a
for(n=new C.mp(p,p.r,q),n.c=g;n.C();){e=n.d
d=e==null?r.a(e):e
e=l.h(0,d)
if(e==null)e=b6
a0=l.h(0,f)
if(e<(a0==null?b6:a0))f=d}if(f===k){j=!0
break}p.W(0,f)
a1=D.o.ea(f,s)
a2=D.o.F(f,s)
for(n=a2*4,e=a1*4,a3=-1;a3<=1;++a3)for(a0=a3===0,a4=!a0,a5=a1+a3,a6=a5*4,a7=a5-w,a8=-1;a8<=1;++a8){if(a0&&a8===0)continue
a9=a2+a8
b0=!0
if(a5>=0)if(a9>=0){b0=b5.c
b0===$&&C.c()
b0=a5>=b0||a9>=s||!b5.a5i(-v.gex(0)/2+a6,a9*4)}if(b0)continue
b0=!1
if(a4)if(a8!==0)b0=!b5.a5i(-v.gex(0)/2+a6,n)||!b5.a5i(-v.gex(0)/2+e,a9*4)
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
e=D.o.ea(n,s)
u.push(new C.z(-v.gex(0)/2+e*4,D.o.F(n,s)*4))}b4=C.a([D.d.gI(u)],w)
for(a5=0;a9=u.length-1,a5<a9;a5=a9){w=a5+1
for(;;){if(!(a9>w&&!b5.b_a(0,u[a5],u[a9])))break;--a9}b4.push(u[a9])}return b4},
bUo(d,e,f){return Math.sqrt(Math.pow(d-f.a,2)+Math.pow(e-f.b,2))}}
A.Az.prototype={}
A.bsh.prototype={
bAt(d,e,f,g,h,i,j,k,l,m,n,o){var w,v,u,t,s=this.b
if(s!=null)for(w=this.as,v=1;v<s.length;++v){u=v-1
t=Math.sqrt(Math.pow(s[v].a-s[u].a,2)+Math.pow(s[v].b-s[u].b,2))
w.push(t)
this.at+=t}}}
A.aWu.prototype={
av0(d){var w,v,u=d.gex(0),t=new A.bVa(d,u)
switch(d.c){case"living":w=t.$1(46)
return C.a([B.hjv,new A.Az(w.a,w.b,4,"Switching the ad on the big TV",!1,!0,!0,"ad")],x.h)
case"kitchen":return C.a([new A.Az(new C.z(-u/2+40,42),3.141592653589793,2.8,"Getting a drink from the fridge",!0,!1,!1,""),B.hju],x.h)
case"bathroom":return B.dqo
case"bedroom":v=t.$1(44)
return C.a([new A.Az(v.a,v.b,3.4,"Switching the ad on the TV",!1,!0,!0,"ad")],x.h)
case"hall":if(!this.a)return B.aA2
return C.a([new A.Az(new C.z(-d.gex(0)/2+80,90),3.141592653589793,3,"Looking at the left video wall",!1,!1,!0,""),new A.Az(B.eua,0,2.4,"Looking over the lounge and the logo carpet",!1,!1,!1,""),new A.Az(new C.z(d.gex(0)/2-80,90),3.141592653589793,3,"Looking at the right video wall",!1,!1,!0,"")],x.h)
default:return B.aA2}},
acQ(a0,a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=e.b.d
d===$&&C.c()
w=d[a0]
v=new A.csE(w,A.iiW(w))
v.c=D.k.dd(w.gex(0)/4)+1
v.d=D.k.dd(w.ghs(0)/4)+1
u=A.hqg(w,a1)
t=u.a
s=u.c
d=e.d
r=d.length
q=a3.length===0?"Walking in":a3
d.push(A.bsi(a0,"",!1,q,-1,null,!1,!1,0.5,t.a,u.b,t.b))
for(q=e.av0(w),p=q.length,o=t,n=0;n<q.length;q.length===p||(0,C.L)(q),++n){m=q[n]
l=v.aoR(o,m.a)
k=m.e
if(k)j=C.cT(m.d,"Having",0)
else j=!1
d.push(A.bsi(a0,"",j,"Walking",-1,l,!1,!1,0,0,0,0))
o=D.d.gak(l)
d.push(A.bsi(a0,m.w,k,m.d,-1,null,m.r,m.f,m.c,o.a,m.b,o.b))}if(a2!=null){i=A.hqg(w,a2)
h=i.c
l=v.aoR(o,i.a)
g=e.av0(w).length!==0&&D.d.gak(e.av0(w)).e
d.push(A.bsi(a0,"",g,"Walking to the next room",-1,l,!1,!1,0,0,0,0))
o=D.d.gak(l)
d.push(A.bsi(a0,"",g,"Opening the door",h,null,!1,!1,1.8,o.a,e.bNU(w,h),o.b))}for(f=r;f<d.length;++f)d[f].ay=s},
aXz(d,e,f){return this.acQ(d,e,f,"")},
bNU(d,e){var w,v=d.w[e].b
A:{if("left"===v){w=-1.5707963267948966
break A}if("right"===v){w=1.5707963267948966
break A}w=3.141592653589793
break A}return w},
b_9(){var w,v,u=this
if(u.a){u.acQ(5,10,9,"Walking into the hall")
u.b_b()
return}u.acQ(10,11,9,"Coming in through the front door")
u.aXz(9,10,5)
u.acQ(5,9,0,"Walking down the hall")
for(w=0;w<8;++w){v=B.cYt[w]
u.aXz(v,5,w===7?null:5)}u.b_b()},
b_b(){var w,v,u,t,s,r,q,p,o=this,n=o.c,m=Math.min(1,n/120)
for(w=o.d,v=w.length,u=0,t=0,s=0;s<v;++s){r=w[s]
if(r.b==null)u+=r.f*=m
else t+=r.at}q=t/Math.max(4,n-u)
for(n=q<=0,p=0,s=0;s<v;++s){r=w[s]
if(r.b!=null)r.f=n?0.1:Math.max(0.05,r.at/q)
r.ax=p
p+=r.f}o.e!==$&&C.aQ()
o.e=p},
bbW(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g={},f=this.e
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
return A.atR(!1,n,f.ay,p,f.w,0,f.r,o,0,!1,s,f.x,v,!1,!1,f.c,f.e,f.d)}v=new A.bVb(g)
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
return A.atR(!1,0,o.ay,"",o.w,0,o.r,-1,m/12,!1,!1,!1,f.a,!1,!0,v,p,s)}}
A.b9O.prototype={
MC(d){var w=this.a
if(w!=null)this.ax=A.hxX(w,this.CW)},
aJx(){var w,v,u,t,s,r,q=this
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
for(w=s.ax,v=w.length,u=s.ay,t=0;t<v;++t)if(w[t].aGF(d,e,u))return!0
return!1},
aLO(d,e,f,g){var w,v,u,t,s,r,q,p,o=this,n=Math.sqrt(e*e+f*f)
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
cOW(d){var w,v=this,u=v.Q
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
return t.x=!1}u=t.aLO(0,w,v,e)
if(!u){t.at=null
t.x=!1}return u}}
A.akr.prototype={}
A.aq5.prototype={
R(){var w=x.N
return new A.ben(C.U(w,w))}}
A.ben.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=x.p,g=C.eJ(C.a([C.aG(i,i,i,i,B.bRq,i,i,i,new A.d7s(d),i,i,i,i,i,i)],h),i,i,!0,!0,E.lA,i,1,i,i,i,!1,i,!1,i,i,i,i,!0,i,i,i,i,i,B.fE7,i,i,i,1,i,!0),f=C.a([],h)
for(w=0;w<2;++w)f.push(C.iS(i,i,i,new C.y(D.d.gI(B.zt[w].b.split(" (")),i,i,i,i,i,i,i,i,i,i,i),i,new A.d7t(j,w),j.d===w,i,i,i,i))
f=C.bX(D.bG,f,D.bq,i,0,8)
v=j.e
v=C.bX(D.bG,C.a([C.iS(i,i,i,B.fTu,i,new A.d7u(j),!v,i,i,i,i),C.iS(i,i,i,B.fPG,i,new A.d7v(j),v,i,i,i,i)],h),D.bq,i,0,8)
u=B.zt[j.d]
u=C.a([f,D.P,v,D.W,C.d(u.b,i,i,i,i,i,i,D.dd,i,i,i),D.au,C.d(u.c,i,i,i,i,i,i,Af.Ea,i,i,i),D.W],h)
for(f=B.zt[j.d].e,f=J.aW(f.gev(f)),v=x.N,t=x.e7,s=j.f,r=x.bP;f.C();){q=f.gS(f)
p=s.h(0,q)
o=C.a([],r)
for(n=B.zt[j.d].d,m=0;m<5;++m){l=n[m]
o.push(new C.ex(l,new C.y(l,i,D.oK,i,i,i,i,i,i,i,i,i),D.eY,i,t))}p=C.a([new C.y(q,i,B.frh,i,i,i,i,i,i,i,i,i),C.T1(i,E.lA,B.fzw,i,!1,!0,o,new A.d7w(j,q),i,i,p,v)],h)
if(!j.e&&s.h(0,q)!=null)p.push(new C.fe(new A.d7x(j,q),i))
p.push(D.am)
D.d.v(u,p)}u.push(C.bH(C.d(j.e?"Submit the test":"Check my wiring",i,i,i,i,i,i,i,i,i,i),i,new A.d7y(j),i))
f=j.r
if(f!=null){f=f.a
v=f===B.v9
t=v?"CORRECT: every lead follows the diagram.":A.h4s(f)+": not passed"
if(v)f=D.be
else f=f===B.TO?D.bu:D.c7
h=C.a([D.W,C.d(t,i,i,i,i,i,i,C.l(i,i,f,i,i,i,i,i,i,i,i,16,i,i,D.u,i,i,!0,i,i,i,i,i,i,i,i),i,i,i)],h)
for(f=j.r.b,v=f.length,m=0;m<f.length;f.length===v||(0,C.L)(f),++m){k=f[m]
h.push(new C.y(k.c+"\nRule: "+k.d+"\nFix: "+k.e+"\n",i,B.flL,i,i,i,i,i,i,i,i,i))}for(f=B.zt[j.d].f,m=0;m<2;++m)h.push(new C.y("\u2022 "+f[m],i,D.vl,i,i,i,i,i,i,i,i,i))
D.d.v(u,h)}return C.c7(g,E.Bk,C.cn(u,i,D.bE,i,i,D.ah,!1),i,!1,!1,i,i)}}
A.JH.prototype={
a6(){return"SafetyStatus."+this.b}}
A.FL.prototype={
a6(){return"TerminalRole."+this.b}}
A.FS.prototype={
a6(){return"WireFunction."+this.b}}
A.cz5.prototype={}
A.cCG.prototype={}
A.a4k.prototype={}
A.bMu.prototype={}
A.wp.prototype={}
A.tl.prototype={}
A.b6p.prototype={}
A.ab9.prototype={}
A.aba.prototype={}
A.vg.prototype={}
A.b57.prototype={}
A.b8h.prototype={}
A.cz7.prototype={
br0(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=C.a([],x.dH)
for(w=this.a,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u){t=w[u]
s=t.b
r=t.c
q=A.huq(s,r,t.d)
p=new C.Z(r,new A.cz8(),C.T(r).k("Z<1>")).gL(0)
r=s.d?1:0
o=s.b+s.c+r
n=o===0?0:D.o.E(D.k.V(p*100/o),0,100)
if(q.a!==B.v9)n=D.o.E(n,0,79)
i.push(new A.aba(t.a,q,n))}w=C.a([],x.gl)
for(v=this.b,s=this.c,m=0;m<v.length;++m){r=v[m]
l=s.h(0,m)
w.push(new A.b57(r,l==null?-1:l))}v=C.a([],x.t)
for(s=i.length,u=0;u<i.length;i.length===s||(0,C.L)(i),++u)v.push(i[u].c)
for(s=w.length,u=0;u<w.length;w.length===s||(0,C.L)(w),++u){k=w[u]
v.push(k.b===k.a.c?100:0)}j=v.length===0?0:D.k.V(D.d.f3(v,new A.cz9())/v.length)
return new A.b8h(i,w,j,D.d.d5(i,new A.cza())&&j>=80)}}
A.PL.prototype={}
A.a1h.prototype={
R(){var w=x.S
return new A.bv0(C.U(w,w))}}
A.bv0.prototype={
B(d){var w=null,v=this.e,u=C.aJ(d,w,x.w).w
return C.bm(!0,new C.cU(new C.aZ(0,1/0,0,u.a.b*0.9),C.cn(v==null?this.cor():this.crQ(v),w,D.bQ,w,w,D.ah,!0),w),!0,!1,D.af,!0,!0)},
cor(){var w,v,u,t,s,r,q=this,p=null,o=q.a,n=o.c.b,m=x.p
o=C.a([C.d("Test: "+o.d,p,p,p,p,p,p,D.dd,p,p,p),D.au,B.fxI,D.W],m)
for(w=q.d,v=x.cE,u=0;u<n.length;u=t){t=u+1
s=C.a([new C.y(""+t+". "+n[u].a,p,D.nG,p,p,p,p,p,p,p,p,p)],m)
for(r=0;r<3;++r)s.push(new A.a9N(r,w.h(0,u),new A.faz(q,u),new C.y(n[u].b[r],p,D.Al,p,p,p,p,p,p,p,p,p),!0,p,v))
s.push(D.au)
D.d.v(o,s)}o.push(D.P)
o.push(C.bH(B.fC5,p,new A.faA(q),p))
return o},
crQ(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null,h=d.d,g=h?D.be:D.c7
h=h?"Passed":"Not passed"
w=x.p
h=C.a([C.d(h,i,i,i,i,i,i,C.l(i,i,g,i,i,i,i,i,i,i,i,22,i,i,D.u,i,i,!0,i,i,i,i,i,i,i,i),i,i,i),C.d("Score "+d.c+"%  (pass mark 80%)",i,i,i,i,i,i,D.UW,i,i,i)],w)
v=d.a
if(D.d.b3(v,new A.faB()))h.push(B.elD)
h.push(D.W)
for(u=v.length,t=0;t<v.length;v.length===u||(0,C.L)(v),++t){s=v[t]
r=s.b
q=r.a
p=A.h85(q).j(0.1)
o=new C.aP(12,12)
n=new C.ay(A.h85(q).j(0.6),1,D.r,-1)
m=A.h4s(q)
q=A.h85(q)
q=C.a([new C.y(s.a+": "+m+" ("+s.c+"%)",i,new C.F(!0,q,i,i,i,i,13.5,D.u,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i),i,i,i,i,i,i,i,i,i)],w)
r=r.b
if(r.length===0)q.push(B.fLX)
for(m=r.length,l=0;l<r.length;r.length===m||(0,C.L)(r),++l){k=r[l]
D.d.v(q,C.a([D.au,new C.y(A.h4s(k.b)+": "+k.c,i,B.ffM,i,i,i,i,i,i,i,i,i),new C.y("Rule: "+k.d,i,N.aa6,i,i,i,i,i,i,i,i,i),new C.y("Fix: "+k.e,i,B.flM,i,i,i,i,i,i,i,i,i)],w))}h.push(C.p(i,C.x(q,D.E,i,D.e,D.i,0,D.p),D.f,i,i,new C.o(p,i,new C.bI(n,n,n,n),new C.bj(o,o,o,o),i,i,D.n),i,i,i,D.cu,D.yg,i,i,i))}for(v=d.b,u=v.length,t=0;t<v.length;v.length===u||(0,C.L)(v),++t){j=v[t]
r=D.c.j(0.05)
q=new C.aP(12,12)
p=j.a
o=p.c
m=j.b===o
n=new C.ay(m?D.be:D.c7,1,D.r,-1)
m=m?"\u2705":"\u274c"
h.push(C.p(i,C.x(C.a([new C.y(m+" "+p.a,i,D.lo,i,i,i,i,i,i,i,i,i),new C.y("Correct answer: "+p.b[o],i,D.tf,i,i,i,i,i,i,i,i,i),new C.y(p.d,i,N.aa6,i,i,i,i,i,i,i,i,i)],w),D.E,i,D.e,D.i,0,D.p),D.f,i,i,new C.o(r,i,new C.bI(n,n,n,n),new C.bj(q,q,q,q),i,i,D.n),i,i,i,D.cu,D.yg,i,i,i))}h.push(D.au)
h.push(C.bH(D.pF,i,new A.faC(this),i))
return h}}
A.a5g.prototype={
h5(d){var w,v=this
if(v.c)return
v.c=!0
w=$.aV
w.toString
if(D.a.t(C.vx(C.b0(w).a,null),"Test"))v.d=C.dh(v.b,new A.bSH(v))
else v.b_u()},
b_u(){$.eX.Hd(new A.bSG(this))},
bR(d){var w
this.c=!1
w=this.d
if(w!=null)w.a4(0)
this.d=null}}
var z=a.updateTypes(["~()","~(fl)","R(nu)","m(m,fM)","R(me)","R(a5l)","q(q)","R(jE)","R(oy)","~(G)","ai<kp>(K)","R(XW)","R(a4k)","R(fM)","R(aa1)","R(Mv)","G(me,me)","R(P0)","R(I7)","aA<~>()","R(on)","R(q)","q(K,K)","m(nu)","q(K,K,K)","q(G)","R(pS)","DZ(Y)","~(xh,av,K)","~(me)","~(t,av)","R(Aj)","q(K)","R(M0)","IW(Y)","R(aba)","q(ho)","R(Fe)","G(xl,xl)","R(rc)","R(z7)","Oj(Y)","R(T3)","q(K,K[K])","R(zc)","R(wp)","G(G3,G3)","PQ()","FL(m)","wp(wp,wp)","~(G,q,q,m,u)","~(G,ai<q>)","zc()","pS()","aA<MC?>()","R(w6)","on(K)","FS(m)","~(G{keepTour:R})","m(jE)","~(q,q,q,q,u,K)","K(lG)","~(q,q,q,q)","v(m,ai<rP>)","m(me)","v(xl)","q(ai<q>,G)","XK()","~(aD?)","CA()","R(xl)","Wf(Y)","~(kp,G)","~(q,K,K,K,~(xh,av,K){px:K})","ai<fP>(K)","a79(Y)","~(q,q{note:m?})","me?(q,q)","R(q,q)","q?(q,q)","K(q)","ai<q>(q,q[G])","+(K,K,K,m,m)(P0,G)","G(G,me)","K(me)","ai<kp>()","ai<kp>(ai<kp>)","K(on)","~(q,q,q,K,K)","a1h(Y)","~(q,q,q,q{poster:G})","~(~(fl),q,q)","~(q,q,K,K,u{joint:R})","+(q,q)(G)","~(q,q,G{alongX:R})","~(ai<q>,u)","~(ai<q>)","~(ai<q>{col:u})","~(G,q,u{h:K,w:K})","me?(m)","~(G,ai<q>,u,K,m)","~(G,m,q,q,q,R)","R(Xg)","ai<+(q,q)>()","~(me,K,K,K,K,K{note:m?})","ai<q>(ai<q>)","~(m,ai<q>{r:K})","~(m,q,q)","~(nu,q,m)","~(m,q,q,G)","q(G,G)","R(G)","fP(q,q,q,q,G,K,K)","G(Aj,Aj)","G(oy)","~(G,q,q{col:u,round:R})","cX()","ho(G)","m(Mv)","~(m,JH,m,m,m)","G(FS,FL)","~({done:R})","G(Aj)","~(q,q,q,K,G)","v(rP)"])
A.c_Y.prototype={
$1(d){var w=this.a
w=w===0?d:A.vD(d,w)
return w.a9(0,this.b)},
$S:z+6}
A.c_Z.prototype={
$1(d){var w=this.a
return w===0?d:A.vD(d,w)},
$S:z+6}
A.c_X.prototype={
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
A.c0_.prototype={
$1(d){var w=d*2*3.141592653589793/this.b
return this.a.aI(0,Math.cos(w)).a9(0,this.c.aI(0,Math.sin(w)))},
$S:z+25}
A.c_W.prototype={
$2(d,e){var w=3.141592653589793*d/this.a,v=6.283185307179586*e/this.b
return new A.q(Math.sin(w)*Math.cos(v),Math.cos(w),Math.sin(w)*Math.sin(v))},
$S:z+110}
A.c00.prototype={
$1(d){var w=d*2*3.141592653589793/this.b
return this.a.aI(0,Math.cos(w)).a9(0,this.c.aI(0,Math.sin(w)))},
$S:z+25}
A.fZk.prototype={
$1(d){var w=d.b,v=this.a,u=d.c,t=this.b
return new A.q(d.a,w*v-u*t,w*t+u*v)},
$S:z+6}
A.fZi.prototype={
$1(d){var w=this.a
return w===0?d:A.vD(d,w)},
$S:z+6}
A.fZj.prototype={
$1(d){var w=this,v=w.b===0?d:w.c.$1(d)
return J.h_x(w.a.$1(v),w.d)},
$S:z+6}
A.fZh.prototype={
$1(d){var w=this.b===0?d:this.c.$1(d)
return this.a.$1(w)},
$S:z+6}
A.fZ6.prototype={
$4(d,e,f,g){var w=-d
return 0.5*(2*e+(w+f)*this.a+(2*d-5*e+4*f-g)*this.b+(w+3*e-3*f+g)*this.c)},
$S:296}
A.bJF.prototype={
$1(d){var w=d.a,v=J.a6(w),u=C.jW(v.h(w,"ngmy_swipe_x3"))
$.ajm=u===!0
w=C.jW(v.h(w,"ngmy_swipe_y3"))
$.ajn=w!==!1},
$S:295}
A.bJG.prototype={
$1(d){},
$S:29}
A.bJH.prototype={
$1(d){d.au("Bool","ngmy_swipe_x3",$.ajm)
d.au("Bool","ngmy_swipe_y3",$.ajn)},
$S:295}
A.bJI.prototype={
$1(d){},
$S:29}
A.bJK.prototype={
$1(d){var w=this,v=-d.c,u=d.b,t=w.a,s=w.b,r=v*t-u*s,q=d.a,p=w.c,o=w.d
return new A.q(q*p-r*o,u*t+v*s,q*o+r*p)},
$S:z+6}
A.bJJ.prototype={
$1(d){var w=this,v=w.a
return v.d.a9(0,w.b.$1(new A.q(w.c*d,w.d*d,d-v.c)))},
$S:z+32}
A.bJE.prototype={
$1(d){var w=this,v=-d.c,u=d.b,t=w.a,s=w.b,r=v*t-u*s,q=d.a,p=w.c,o=w.d
return new A.q(q*p-r*o,u*t+v*s,q*o+r*p)},
$S:z+6}
A.bJD.prototype={
$1(d){var w=this,v=w.a
return v.d.a9(0,w.b.$1(new A.q(w.c*d,w.d*d,d-v.c)))},
$S:z+32}
A.ctF.prototype={
$1(d){var w=this,v=d.a,u=w.a,t=d.c,s=w.b,r=-v*s+t*u,q=d.b,p=w.c,o=w.d
return new A.q(v*u+t*s,q*p-r*o,-(q*o+r*p))},
$S:z+6}
A.ctG.prototype={
$1(d){var w=this.a.c,v=this.b.$1(d.aE(0,w.d))
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
b0=A.hZI(u)
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
if(t&&d4.d===u){d2=C.ar(c5,D.b4,0.28+0.14*Math.sin(d2.gGR(0)*6))
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
c9.e=null}c9.D(new C.bs())
d2=d4.f
d3=C.h0e(c6,c7,c8,d2)
s=d4.d
u=s===u&&t
d0=new A.G3(d4.y,d4.z,null,c9,d3,c0-d4.x,s,d2<0.99,u)
d0.e=c1<2&&c2<2
d1.go.push(d0)
d0.c=d5},
$S:z+72}
A.cty.prototype={
$1(d){return d.c>=1},
$S:z+21}
A.ctz.prototype={
$1(d){var w,v,u,t,s,r,q,p,o=this,n=!o.c||o.d>=o.e[0],m=o.f,l=o.b
if(n)A.i_A(d,m,o.r,l.gGR(0))
else{n=$.hBK()
C.E2(m)
w=n.a
v=w.get(m)
u=D.k.bf(l.gGR(0)*5)
t=v==null
if(t)s=o.a.x<10
else s=v.a!==u&&o.a.w<3
if(s){$.S()
r=new C.p0()
m.c.$3(C.z8(r,null),new C.av(m.d,m.e),l.gGR(0))
if(!t)v.b.q()
n.n(0,m,new A.cDr(u,r.ni()))
n=o.a
if(t)++n.x
else ++n.w}C.E2(m)
n=w.get(m)
q=n==null?null:n.b
if(q!=null){n=m.d
m=m.e
p=A.h7L(o.r,n,m)
if(p!=null){l=d.a
J.bl(l.save())
d.aw(0,p.a)
l.clipRect(C.bG(new C.a3(0,0,n,0+m)),$.mw()[1],!0)
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
$S:585}
A.ctx.prototype={
$2(d,e){var w=this.a
return A.o5(A.o5(w[0],w[1],d),A.o5(w[3],w[2],d),e)},
$S:z+22}
A.ctA.prototype={
$1(d){return d.c<1},
$S:z+21}
A.ctB.prototype={
$1(d){return A.i_B(d,this.b,this.c,8,6,this.a.gGR(0))},
$S:585}
A.ctC.prototype={
$2(d,e){return D.k.aK(e,d)},
$S:1775}
A.ctD.prototype={
$2(d,e){var w,v=D.o.aK(d.a,e.a)
if(v!==0)return v
w=D.k.aK(e.d,d.d)
return w!==0?w:D.o.aK(d.c,e.c)},
$S:z+46}
A.f2o.prototype={
$1(d){var w=this.a,v=w.r,u=d.a
w.r=d
w.a.d.a6Z(D.k.E((u-v.a)/1e6,0,0.1))
w.f.sp(0,u/1e6)},
$S:9}
A.f2n.prototype={
$1(d){if(x.ej.b(d))this.a.a.d.aps(1+d.gtB().b*0.0012)},
$S:257}
A.f2k.prototype={
$1(d){var w=this.a
w.w=1
w.x=d.c},
$S:263}
A.f2l.prototype={
$1(d){var w,v,u,t,s,r=d.w,q=this.a
if(r!==q.x){q.x=r
q.w=d.d}if(r>=2){r=d.d
w=q.w/r
q.w=r
if(isFinite(w)&&w>0)q.a.d.aps(w)}else{r=q.a.d
q=d.a
v=$.ajm?-1:1
v=q.a*0.009*v
u=$.ajn?-1:1
r.ay=r.ax=null
v=r.a+=v
if(!r.Q){t=r.y
s=r.z
r.a=D.k.E(v,t-s,t+s)}r.b=D.k.E(r.b+-q.b*0.009*u,r.w,r.x)
r.aV()}},
$S:217}
A.f2m.prototype={
$1(d){var w=this.a,v=w.a.f
return v==null?null:v.$1(w.e.cWi(d.b))},
$S:67}
A.f2i.prototype={
$1(d){return this.a.y=d.b},
$S:22}
A.f2j.prototype={
$0(){var w,v=this.a,u=v.a.as
u.toString
v=v.y
w=this.b.gY(0)
return u.$2(v,w==null?D.aw:w)},
$S:0}
A.fjN.prototype={
$0(){return new A.PQ(!1,C.a([],x.z),C.a([],x.t))},
$S:z+47}
A.bTR.prototype={
$0(){var w=0,v=C.j(x.c),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j
var $async$$0=C.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return C.b($.r9().jg(0,q.a),$async$$0)
case 7:p=e
m=q.b
l=x.N
o=new A.MC(m,C.U(l,x.J),C.U(l,x.bB),C.a([],x.dQ),C.U(l,x.gN))
w=8
return C.b(o.PA(p),$async$$0)
case 8:$.h12.n(0,m,o)
$.h10.W(0,m)
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
$.h10.M(0,m)
u=null
r=[1]
w=5
break
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
$.h11.W(0,q.b)
w=r.pop()
break
case 6:case 1:return C.h(u,v)
case 2:return C.f(s.at(-1),v)}})
return C.i($async$$0,v)},
$S:z+54}
A.bTI.prototype={
$1(d){return D.a.t(d,"hips")},
$S:3}
A.bTC.prototype={
$2(d,e){var w,v=Math.floor(d),u=Math.floor(e),t=this.b,s=t.a,r=Math.min(s-1,D.k.bf((d-v)*s))
v=t.b
w=(Math.min(v-1,D.k.bf((e-u)*v))*s+r)*4
s=this.a
t=t.c
s.c=s.c+t[w]
s.b=s.b+t[w+1]
s.a=s.a+t[w+2]},
$S:246}
A.bTB.prototype={
$1(d){return D.k.V(D.k.E(d,0,1)*255)},
$S:240}
A.bTK.prototype={
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
w[s]=g.c3(0,((k*1024+j)*1024+i)*2+r,new A.bTL(g))}e[0]=g.a
return w},
$S:1777}
A.bTL.prototype={
$0(){return this.a.a},
$S:94}
A.bTM.prototype={
$1(d){var w,v,u,t,s,r,q=C.aX(x.S)
for(w=this.a.e,v=w.length,u=0;u<v;u+=3){t=d[w[u]]
s=d[w[u+1]]
r=d[w[u+2]]
if(t===s||s===r||t===r)continue
q.M(0,A.hfq(t,s,r))}return q.a},
$S:1778}
A.bTJ.prototype={
$2(d,e){var w,v,u,t=this.a,s=this.b.h(0,d)
s.toString
w=J.a6(e)
v=D.k.V(w.h(e,0)/w.h(e,3))
u=D.k.V(w.h(e,1)/w.h(e,3))
w=D.k.V(w.h(e,2)/w.h(e,3))
t.$flags&2&&C.aj(t)
t[s]=(v<<16|u<<8|w|4278190080)>>>0},
$S:1779}
A.bTG.prototype={
$0(){return new Float64Array(this.a*16)},
$S:566}
A.bTH.prototype={
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
if(n<0)D.oy.hc(k,j,j+16,h)
else A.hfr(k,n*16,h,0,k,j)
k=u.f
k===$&&C.c()
k=k[a1]
j=k.length
m=0
for(;m<k.length;k.length===j||(0,C.L)(k),++m)l.$1(k[m])},
$S:28}
A.bTP.prototype={
$1(d){var w,v,u
for(w=this.a.z,w=new C.hF(w,w.r,w.e);w.C();){v=w.d
u=v.toLowerCase()
if(C.cT(u,d,0))return v}return null},
$S:274}
A.bTN.prototype={
$1(d){return!D.a.t(d.toLowerCase(),"pose")},
$S:3}
A.bTO.prototype={
$0(){var w=this.a.z
return new C.cx(w,C.a7(w).k("cx<1>")).gI(0)},
$S:23}
A.bTS.prototype={
$1(d){var w=this,v=w.c,u=d*3,t=w.a,s=w.d,r=(v[u]-t.b)*s,q=v[u+1],p=w.b.ay,o=(v[u+2]-t.a)*s
t=w.f
u=w.r
return new A.q(r*t+o*u+w.w,(q-p)*s+w.e,-r*u+o*t+w.x)},
$S:z+25}
A.bTD.prototype={
$3(d,e,f){var w=this,v=w.e
return w.b.a9(0,w.c.aI(0,w.a.a*f+0.25)).a9(0,w.d.aI(0,d*v)).a9(0,w.f.aI(0,e*v))},
$2(d,e){return this.$3(d,e,1)},
$S:z+43}
A.bTF.prototype={
$6(d,e,f,g,h,i){var w=this
return w.a.push(new A.kp(C.a([d,e,f,g],x.o),w.b,h,w.c,0,1,!1,0,i,2,w.d))},
$S:z+60}
A.bTE.prototype={
$6(d,e,f,g,h,i){var w=this.b
return this.a.$6(w.$2(d-f,e),w.$2(d,e-g),w.$2(d+f,e),w.$2(d,e+g),h,i)},
$S:1781}
A.fxt.prototype={
$2(d,e){return D.k.V(d+(D.k.E(e,0,255)-d)*0.8)},
$S:1782}
A.bI_.prototype={
$1(d){return d.d+this.a.f*d.e},
$S:z+61}
A.bHZ.prototype={
$1(d){return d.a===J.r(this.a,"template")},
$S:z+39}
A.fQe.prototype={
$6$lines$w(d,e,f,g,h,i){var w=null,v=C.fw("\u2026",w,h,w,C.cS(w,w,w,w,w,w,w,w,w,C.l(w,w,f,w,w,w,w,w,w,w,w,e,w,w,i,w,1.1,!0,w,w,w,w,w,w,w,w),d),D.a4,D.bX,w,D.dA,D.bV)
v.o0(g)
return v},
$4(d,e,f,g){return this.$6$lines$w(d,e,f,g,2,D.u)},
$5$w(d,e,f,g,h){return this.$6$lines$w(d,e,f,g,2,h)},
$S:1783}
A.fyS.prototype={
$1(d){var w=this.a
return A.vD(d,w.c).a9(0,new A.q(w.a,0,w.b))},
$S:z+6}
A.fyT.prototype={
$6$px(d,e,f,g,h,i){var w=new A.fyU(e,d),v=-f/2,u=g/2,t=f/2,s=-g/2
this.a.push(new A.fP(C.a([w.$2(v,u),w.$2(t,u),w.$2(t,s),w.$2(v,s)],x.o),0,h,i,i*g/f,30,this.b,0,!1))},
$5(d,e,f,g,h){return this.$6$px(d,e,f,g,h,260)},
$S:z+73}
A.fyU.prototype={
$2(d,e){return A.vD(new A.q(d,e,0),this.a).a9(0,this.b)},
$S:z+22}
A.fyL.prototype={
$3(d,e,f){return A.bBK(d,e,f,0)},
$S:24}
A.fyM.prototype={
$3(d,e,f){return A.bBK(d,e,f,3)},
$S:24}
A.fyN.prototype={
$3(d,e,f){return A.bBK(d,e,f,8)},
$S:24}
A.fyO.prototype={
$3(d,e,f){return A.bBK(d,e,f,9+this.a)},
$S:24}
A.fyP.prototype={
$3(d,e,f){return A.bBK(d,e,f,12+this.a)},
$S:24}
A.fyQ.prototype={
$3(d,e,f){return A.hy_(d,e,f,this.a,this.b)},
$S:24}
A.fyR.prototype={
$3(d,e,f){return A.hy_(d,e,f,this.a,this.b)},
$S:24}
A.fkW.prototype={
$4(d,e,f,g){var w=-d,v=this.a
return 0.5*(2*e+(w+f)*v+(2*d-5*e+4*f-g)*v*v+(w+3*e-3*f+g)*v*v*v)},
$S:296}
A.foj.prototype={
$1(d){var w=this.a,v=J.a6(w)
return v.h(w,D.o.E(d,0,v.gL(w)-1))},
$S:z+93}
A.fxz.prototype={
$0(){var w,v,u,t,s,r,q,p,o,n=A.htI(this.a),m=x.n,l=C.a([],m)
for(w=J.a6(n),v=0;v<w.gL(n)-1;v=u){u=v+1
t=w.h(n,u).a
s=w.h(n,v).a
l.push(Math.pow(Math.max(new A.q(t.a-s.a,t.b-s.b,t.c-s.c).guV(),250),0.75))}r=D.d.f3(l,new A.fxy())
q=C.a([0],m)
for(m=l.length,p=0;p<l.length;l.length===m||(0,C.L)(l),++p){o=l[p]
q.push(D.d.gak(q)+30*o/r)}return q},
$S:1785}
A.fxy.prototype={
$2(d,e){return d+e},
$S:79}
A.fxw.prototype={
$0(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8=this.a,a9=B.dyO.h(0,a8.a)
if(a9==null){w=C.a([],x.t)
v=a8.w.length
u=v===0
t=0
for(;;){if(!(t<(u?1:v)))break
w.push(t);++t}a9=new C.z(w,0)}s=Math.max(Math.max(a8.gapa(),a8.gbe9()),a8.gGP()*1.3)
w=a8.r
r=new A.q(a8.ga4w(0),w+a8.gGP()/2,a8.ga4x())
q=w+a8.gGP()
v=s*0.55
p=C.a([new C.z(new A.q(a8.ga4w(0)+v,q+s*0.5,a8.ga4x()+s*1.15),r)],x.dt)
for(u=a9.a,o=x.o,n=a8.w,m=a8.e,l=a8.f,k=a9.b,v=q+v,j=null,i=0;i<u.length;++i,j=a2){h=n[u[i]]
g=h.e
f=m*g
e=l*g
d=new A.q(h.a,w+h.d+e/2,h.b)
g=h.c
a0=Math.sin(g)
a1=Math.cos(g)
a2=new A.q(a0,0,a1)
a3=new A.fxx(d,a2,f*1.5,new A.q(Math.cos(g),0,-Math.sin(g)),f,e)
a4=D.o.F(k+i,3)
A:{if(0===a4){g=C.a([a3.$3(1.8,0,1.1),a3.$3(1,-0.22,-0.35),a3.$3(0.9,0.3,-0.2)],o)
break A}if(1===a4){g=C.a([a3.$3(0.9,1.5,-0.25),a3.$3(1.05,0,0.05),a3.$3(0.85,-1.3,0.15)],o)
break A}g=C.a([a3.$3(1.3,0.2,-0.45),a3.$3(1.1,0,0.45),a3.$3(1.7,-0.3,1.3)],o)
break A}if(j!=null&&j.a*a0+j.c*a1<0.3){a0=D.d.gak(p).a
a1=D.d.gI(g)
p.push(new C.z(new A.q((a0.a+a1.a)*0.5+j.c*s*0.5,v,(a0.c+a1.c)*0.5-j.a*s*0.5),r))}for(a5=0;a5<3;++a5)p.push(new C.z(g[a5],d))}a6=new A.q(a8.ga4w(0)-s*0.7,q+s*0.6,a8.ga4x()-s)
if(j!=null){a7=D.d.gak(p).a.a9(0,a6).aI(0,0.5)
p.push(new C.z(new A.q(a7.a+j.c*s*0.5,v,a7.c-j.a*s*0.5),r))}p.push(new C.z(a6,r))
return p},
$S:z+103}
A.fxx.prototype={
$3(d,e,f){var w=this
return w.a.a9(0,w.b.aI(0,w.c*d)).a9(0,w.d.aI(0,w.e*e)).a9(0,new A.q(0,w.f*f,0))},
$S:z+24}
A.fyD.prototype={
$1(d){var w=this.b,v=w*d.b,u=d.c,t=this.c
return this.a.a9(0,new A.q(Math.sin(v)*u*t.gef(0)+w*d.e*t.gapa(),d.d*t.gGP(),Math.cos(v)*u*t.gef(0)))},
$S:z+36}
A.fyE.prototype={
$1(d){var w=this.c
return this.a.a9(0,new A.q(this.b*d.f*w.gapa(),d.r*w.gGP(),0))},
$S:z+36}
A.fyF.prototype={
$1(d){var w=this.a
return w[D.o.E(d,0,w.length-1)]},
$S:z+117}
A.c3Z.prototype={
$1(d){return d.a===this.a.d.a},
$S:z+39}
A.c3X.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new A.c3W())},
$S:32}
A.c3W.prototype={
$0(){},
$S:0}
A.c3K.prototype={
$0(){var w=this.a
w.f=A.h8r(w.gzz(),w.d)
w.abv()},
$S:0}
A.c3Q.prototype={
$0(){return this.a.x=this.b},
$S:0}
A.c3Y.prototype={
$0(){var w=this.a
w.x=0
w.y=!1
w.z=""},
$S:0}
A.c3N.prototype={
$0(){var w=this.a
w.x=-1
w.y=!1
w.z=this.b?"That was the 30 second drone shot. Press it again any time, or change the board and film it again.":""},
$S:0}
A.c3M.prototype={
$0(){var w=this.a
return w.f=A.h8r(w.gzz(),w.d)},
$S:0}
A.c3k.prototype={
$0(){},
$S:0}
A.c3L.prototype={
$0(){return this.a.z="That picture could not be opened."},
$S:0}
A.c3P.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=C.aJ(d,k,x.w).w,i=x.p,h=C.a([],i)
for(w=this.a,v=w.d,u=0;u<12;++u){t=B.a3v[u]
s=t.a
r=v.a===s
q=r?D.d7:D.cr
p=new C.aP(16,16)
o=r?F.fz:D.bC
n=new C.ay(o,r?2:1,D.r,-1)
o=C.a([new C.y(t.b,k,D.nI,k,k,k,k,k,k,k,k,k),D.b1],i)
r=t.w.length
m=r===0
if((m?1:r)>1){l=new C.aP(10,10)
o.push(C.p(k,new C.y(""+(m?1:r)+" boards",k,A4.aTi,k,k,k,k,k,k,k,k,k),D.f,k,k,new C.o(D.e_,k,k,new C.bj(l,l,l,l),k,k,D.n),k,k,k,k,D.yt,k,k,k))}if(v.a===s)o.push(B.elr)
h.push(C.aB(k,C.p(k,C.x(C.a([new C.cd(D.aM,D.e,D.i,D.m,k,D.p,k,0,o,k),D.am,new C.y(t.c,k,D.j3,k,k,k,k,D.a1,k,2,k,k),D.cM,new C.bz(1,D.ba,new C.y(t.d,k,B.fiY,k,k,k,k,D.Uz,k,k,k,k),k)],i),D.E,k,D.e,D.i,0,D.p),D.f,k,k,new C.o(q,k,new C.bI(n,n,n,n),new C.bj(p,p,p,p),k,k,D.n),k,k,k,k,B.bxR,k,k,k),D.y,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,new A.c3O(w,d,t),k,k,k,k,k,k,!1,D.a3))}return C.bm(!0,new C.D(B.bzg,C.x(C.a([B.fUQ,D.au,B.fNK,D.ae,new C.cU(new C.aZ(0,1/0,0,j.a.b*0.66),C.kP(1.05,h,2,10,10,k,k,!0),k)],i),D.E,k,D.e,D.O,0,D.p),k),!0,!1,D.af,!0,!0)},
$S:27}
A.c3O.prototype={
$0(){C.a4(this.b,!1).O(null)
this.a.cvx(this.c.a)},
$S:0}
A.c3J.prototype={
$0(){var w=this,v=w.b.d.b[w.a.a]
w.c.saX(0,v.b)
w.d.saX(0,v.c)
w.e.saX(0,v.d)},
$S:0}
A.c3I.prototype={
$1(d){var w=this
return new C.e1(new A.c3F(w.a,w.b,w.c,w.d,w.e,w.f),null)},
$S:21}
A.c3F.prototype={
$2(d,e){var w,v,u,t,s,r,q,p=this,o=null,n=p.b,m=p.a,l=n.d.b[m.a],k=new A.c3G(m,n),j=new A.c3H(e),i=C.aJ(d,o,x.w).w,h=x.p,g=C.a([B.fAI,D.au,C.d(l.a?"Now it shows the NGMY logo, words and ads. Change anything and it becomes yours.":"This sign is your own.",o,o,o,o,o,o,I.tc,o,o,o)],h),f=n.gzz().w.length
if((f===0?1:f)>1){f=C.a([],h)
w=p.c
v=0
for(;;){u=n.gzz().w.length
if(!(v<(u===0?1:u)))break
u=m.a===v
t=u?D.d7:D.cr
s=new C.aP(18,18)
r=new C.ay(u?F.fz:D.aY,2,D.r,-1)
q=v+1
f.push(C.aB(o,C.p(o,new C.y("Sign "+q,o,D.lo,o,o,o,o,o,o,o,o,o),D.f,o,o,new C.o(t,o,new C.bI(r,r,r,r),new C.bj(s,s,s,s),o,o,D.n),o,o,o,o,D.lE,o,o,o),D.y,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,new A.c3p(m,v,w,e),o,o,o,o,o,o,!1,D.a3))
v=q}D.d.v(g,C.a([D.W,B.fUV,D.am,C.bX(D.bG,f,D.bq,o,8,8)],h))}g.push(D.ae)
g.push(k.$3("Big words",p.d,new A.c3q(l)))
g.push(k.$3("Smaller words",p.e,new A.c3r(l)))
g.push(k.$3("Bottom line (web address)",p.f,new A.c3s(l)))
f=l.f!=null
w=f?"Your logo is on (change)":"Put your own logo (default: NGMY logo)"
g.push(j.$4(w,f,new A.c3t(m,n),new A.c3u(m,n,l)))
f=l.r!=null
w=f?"Your picture is on (change)":"Put your own picture"
g.push(j.$4(w,f,new A.c3v(m,n),new A.c3w(m,n,l)))
g.push(D.au)
g.push(B.fOS)
g.push(D.am)
f=C.a([],h)
for(w=x.O,v=0;v<6;++v){u=B.a5i[v]
u=C.a([u.b,u.c],w)
t=new C.aP(10,10)
r=new C.ay(l.e===v&&!l.a?F.fz:D.aY,2,D.r,-1)
s=B.a5i[v]
f.push(C.aB(o,C.p(o,new C.ci(D.A,o,o,new C.y(s.a,o,new C.F(!0,s.d,o,o,o,o,11,D.H,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o),o,o,o,o,o,o,o,o,o),o),D.f,o,o,new C.o(o,o,new C.bI(r,r,r,r),new C.bj(t,t,t,t),o,new C.a9(D.a5,D.a8,D.x,u,o,o),D.n),o,o,o,o,D.hv,o,o,74),D.y,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,new A.c3x(m,n,l,v,e),o,o,o,o,o,o,!1,D.a3))}g.push(C.bX(D.bG,f,D.bq,o,8,8))
g.push(D.aA)
m=n.gzz().w.length
g.push(C.B(C.a([C.E(C.ew(B.bWk,C.d((m===0?1:m)>1?"All signs back to the NGMY default":"Back to the NGMY default",o,o,o,o,o,o,B.fvi,o,o,o),new A.c3y(n,l,p.c,e),o),1),D.as,C.bH(D.x3,o,new A.c3z(d),o)],h),D.m,o,D.e,D.i,0,o,o))
return new C.D(new C.Q(16,16,16,i.f.d+16),C.cg(C.x(g,D.E,o,D.e,D.O,0,D.p),D.t,o,D.y,o,o,o,o,D.ah),o)},
$S:108}
A.c3G.prototype={
$3(d,e,f){var w=null
return new C.D(D.d2,C.aM(w,D.Y,!1,w,!0,D.t,w,C.aN(),e,w,w,w,w,w,2,C.bt(w,new C.b5(4,C.n(12),D.a0),w,w,w,w,w,w,!0,w,w,w,w,w,w,D.cr,!0,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,D.UV,d,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w),D.y,!0,w,!0,w,!1,w,D.aj,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,new A.c3A(this.a,this.b,f),w,w,w,!1,w,w,!1,w,!0,w,D.aa,w,w,w,w,w,w,w,w,w,w,w,D.df,!0,D.a4,w,D.ao,w,w,w,w),w)},
$S:1786}
A.c3A.prototype={
$1(d){this.c.$1(d)
this.b.ZJ(this.a.a)},
$S:2}
A.c3H.prototype={
$4(d,e,f,g){var w=null,v=this.a,u=e?D.ed:D.uh
u=C.a([C.E(C.ew(C.X(u,e?D.be:D.ad,w,w,w,w),C.d(d,w,w,w,w,w,w,D.df,w,w,w),new A.c3D(f,v),w),1)],x.p)
if(e)u.push(C.aG(w,w,w,w,D.rG,w,w,w,new A.c3E(g,v),w,w,w,w,w,w))
return new C.D(D.cu,C.B(u,D.m,w,D.e,D.i,0,w,w),w)},
$S:1787}
A.c3D.prototype={
$0(){var w=0,v=C.j(x.H),u=this
var $async$$0=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:u.a.$0()
w=2
return C.b(C.bP(D.nn,null,x.H),$async$$0)
case 2:u.b.$1(new A.c3C())
return C.h(null,v)}})
return C.i($async$$0,v)},
$S:1}
A.c3C.prototype={
$0(){},
$S:0}
A.c3E.prototype={
$0(){this.a.$0()
this.b.$1(new A.c3B())},
$S:0}
A.c3B.prototype={
$0(){},
$S:0}
A.c3p.prototype={
$0(){var w=this
w.a.a=w.b
w.c.$0()
w.d.$1(new A.c3o())},
$S:0}
A.c3o.prototype={
$0(){},
$S:0}
A.c3q.prototype={
$1(d){return this.a.b=d},
$S:2}
A.c3r.prototype={
$1(d){return this.a.c=d},
$S:2}
A.c3s.prototype={
$1(d){return this.a.d=d},
$S:2}
A.c3t.prototype={
$0(){return this.b.IV(this.a.a,!0)},
$S:0}
A.c3u.prototype={
$0(){var w=this.c
w.w=w.f=null
this.b.ZJ(this.a.a)},
$S:0}
A.c3v.prototype={
$0(){return this.b.IV(this.a.a,!1)},
$S:0}
A.c3w.prototype={
$0(){var w=this.c
w.x=w.r=null
this.b.ZJ(this.a.a)},
$S:0}
A.c3x.prototype={
$0(){var w=this
w.c.e=w.d
w.b.ZJ(w.a.a)
w.e.$1(new A.c3n())},
$S:0}
A.c3n.prototype={
$0(){},
$S:0}
A.c3y.prototype={
$0(){var w=this,v=w.a,u=v.gzz().w.length
if((u===0?1:u)>1)v.d.cYh()
else w.b.bjx()
w.c.$0()
v.m(new A.c3l())
v.IW()
w.d.$1(new A.c3m())},
$S:0}
A.c3l.prototype={
$0(){},
$S:0}
A.c3m.prototype={
$0(){},
$S:0}
A.c3z.prototype={
$0(){C.a4(this.a,!1).O(null)
return null},
$S:0}
A.c3T.prototype={
$0(){return C.a4(this.a,!1).ig()},
$S:0}
A.c3U.prototype={
$0(){var w=this.a
return w.m(new A.c3S(w))},
$S:0}
A.c3S.prototype={
$0(){return this.a.y=!1},
$S:0}
A.c3V.prototype={
$0(){var w=this.a
return w.m(new A.c3R(w))},
$S:0}
A.c3R.prototype={
$0(){return this.a.y=!0},
$S:0}
A.fB9.prototype={
$1(d){return d.a===this.a},
$S:z+44}
A.fBa.prototype={
$0(){return D.d.gI(B.R9)},
$S:z+52}
A.bMm.prototype={
$1(d){return d.d.t(0,this.a.b)},
$S:z+44}
A.bMo.prototype={
$2(d,e){var w=this.a,v=this.b
return D.k.aK(w.aau(d.c,d.d,new C.z(v.c,v.d)),w.aau(e.c,e.d,new C.z(v.c,v.d)))},
$S:z+16}
A.bMp.prototype={
$1(d){return d.f==null},
$S:z+70}
A.bMl.prototype={
$2(d,e){var w,v=d.w
if(v!==e.w)return v?-1:1
v=this.a
w=this.b
return D.k.aK(v.aZN(w,A.yO(d.c)),v.aZN(w,A.yO(e.c)))},
$S:z+38}
A.bMq.prototype={
$2(d,e){var w=D.o.aK(e.b,d.b)
return w!==0?w:D.o.aK(e.c,d.c)},
$S:1788}
A.bMn.prototype={
$2(d,e){var w,v,u=d.w
if(u!==e.w)return u?-1:1
u=this.a
w=this.b
v=this.c
return D.k.aK(u.aau(w,v,A.yO(d.c)),u.aau(w,v,A.yO(e.c)))},
$S:z+38}
A.bKr.prototype={
$2(d,e){return(d^D.k.V(e.c)*31+D.k.V(e.d))>>>0},
$S:z+83}
A.c1A.prototype={
$2(d,e){var w,v,u,t,s=null,r=this.a,q=r.c,p=q.d>0
if(p)w=0
else{w=q.c
w=w>0?(1-w/180)*0.5:q.a}v=r.e
if(p)p="\ud83d\udc1b"
else p=q.c>0?"\ud83d\ude34":"\u26a1"
u=x.p
w=C.a([A.h1y(v,p,w)],u)
p=q.e
if(p<0.3||q.f){t=q.f
if(t)p=0.2
t=t?"\ud83e\udd12":"\ud83d\udca7"
D.d.v(w,C.a([new C.a5(s,v/4,s,s),A.h1y(v*0.7,t,p)],u))}if(r.d)D.d.v(w,C.a([new C.a5(s,v/3,s,s),A.h1y(v,"\u26fd",q.b)],u))
return C.x(w,D.m,s,D.e,D.O,0,D.p)},
$S:392}
A.fEt.prototype={
$4(d,e,f,g){var w=f+g/100
return new C.cy([d+100*Math.cos(w),e+100*Math.sin(w),-Math.sin(w),Math.cos(w)])},
$S:1789}
A.fi8.prototype={
$1(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this.b,h=A.Le(i,a0).a,g=h[0],f=h[1],e=h[2],d=h[3]
for(h=this.a,w=h.a,v=h.b,u=h.c,h=h.d,t=0;t<5;++t){s=B.cXK[t]
for(r=d*s,q=e*s,p=0;p<3;++p){o=B.dbm[p]
n=i.a==="bus"
m=n?120:95.94999999999999
l=n?33.54:31.45
k=g+q*m-d*o*l
m=n?120:95.94999999999999
n=n?33.54:31.45
j=f+r*m+e*o*n
if(k>w&&k<v&&j>u&&j<h)return!0}}return!1},
$S:121}
A.bKt.prototype={
$1(d){return d<=0?0:Math.sqrt(220*d)},
$S:5}
A.fZf.prototype={
$7(d,e,f,g,h,i,j){return new A.fP(C.a([d,e,f,g],x.o),0,new A.fZg(h),i,j,6,2,0,!1)},
$S:z+112}
A.fZg.prototype={
$3(d,e,f){return A.nh(d,e,f,this.a+D.k.bf(f/7))},
$S:24}
A.fZd.prototype={
$3(d,e,f){var w=this.a,v=w.b
w=w.a
return A.vD(new A.q(d,e,f),this.b).a9(0,new A.q(v,0,w))},
$S:z+24}
A.fZe.prototype={
$2(d,e){var w=this
return A.vD(new A.q(d,e,0),w.a).a9(0,new A.q(w.b,w.c,w.d))},
$S:z+22}
A.fAI.prototype={
$8(d,e,f,g,h,i,j,k){var w=-g,v=new A.fAJ(d+f*h+w*i,f,w,e+g*h+f*i,g,f),u=-j/2,t=-k/2,s=j/2,r=k/2
this.a.GD(v.$2(u,t),v.$2(s,t),v.$2(s,r),v.$2(u,r),D.bO,B.ea)},
$S:1790}
A.fAJ.prototype={
$2(d,e){var w=this
return new A.q(w.a+w.b*d+w.c*e,0.95,w.d+w.e*d+w.f*e)},
$S:z+22}
A.cAU.prototype={
$1(d){return d.d===this.a},
$S:z+31}
A.cAV.prototype={
$1(d){return d.r},
$S:z+122}
A.cAT.prototype={
$2(d,e){return D.k.aK(d.x,e.x)},
$S:z+113}
A.bKf.prototype={
$1(d){var w
if(d.r<0)w=d.e||d.c<60
else w=!1
return w},
$S:z+17}
A.bKm.prototype={
$3(d,e,f){var w=this.a
return A.nh(d,e,f,w.b.a+w.f+D.k.bf(f/7))},
$S:24}
A.bKn.prototype={
$3(d,e,f){var w=this.a
return A.nh(d,e,f,w.b.a+w.f+3+D.k.bf(f/7))},
$S:24}
A.bKo.prototype={
$3(d,e,f){var w=this.a
return A.nh(d,e,f,w.b.a+w.f+7+D.k.bf(f/7))},
$S:24}
A.bKp.prototype={
$3(d,e,f){return A.nh(d,e,f,this.a.b.a+2+D.k.bf(f/7))},
$S:24}
A.bKg.prototype={
$3(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=this.a,i=j.z
j=j.Q
w=e.a
v=e.b
u=new C.a3(0,0,0+w,0+v)
t=C.br(u,D.is)
s=$.S()
r=C.I()
r.r=D.dG.gp(0)
d.az(t,r)
r=C.br(u.cq(-6),D.k1)
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
q.D(new C.bs())}else{q.D(new C.aY(p,o+n))
j=o-r
q.D(new C.aq(s,j))
q.D(new C.aq(m,j))
q.D(new C.bs())}j=C.I()
j.r=((t&1)===0?D.b8:D.eQ).gp(0)
d.aH(q,j)
j=i===1?"L":""+i
l=C.fw(k,k,k,k,C.cS(k,k,k,k,k,k,k,k,k,C.l(k,k,D.bu,k,k,k,k,k,k,k,k,v*0.78,k,k,D.u,k,k,!0,k,k,k,k,k,k,k,k),j),D.a4,D.bX,k,D.dA,D.bV)
l.ej()
j=l.b
i=j.c
j=j.a.c
l.a3(d,new C.t(w*0.62-i/2,v/2-j.gbb(j)/2))
return k},
$S:24}
A.bKh.prototype={
$3(d,e,f){return A.nh(d,e,f,1+D.k.bf(f/7))},
$S:24}
A.bKi.prototype={
$3(d,e,f){return A.nh(d,e,f,4+D.k.bf(f/7))},
$S:24}
A.bKj.prototype={
$2(d,e){var w=this.a,v=C.T(d),u=new C.cQ(new C.Z(d,new A.bKk(w),v.k("Z<1>")),new A.bKl(w),v.k("cQ<1,G>")).cI(0,0,D.xy)
if(u===2)w="works but is NOT wired safely: open it and check every wire"
else w=u===1?"started: finish the wiring":e
return w},
$S:1791}
A.bKk.prototype={
$1(d){return!this.a.d[d]},
$S:35}
A.bKl.prototype={
$1(d){return this.a.e[d]},
$S:76}
A.bL3.prototype={
$1(d){return!d.f},
$S:z+17}
A.bL0.prototype={
$1(d){return d.b===this.a.a.a},
$S:z+18}
A.bL1.prototype={
$1(d){return d.b===this.a&&d.c===this.b},
$S:z+18}
A.bL2.prototype={
$1(d){return d.a<0},
$S:z+33}
A.bL7.prototype={
$1(d){var w,v,u,t
for(w=this.a.x,v=w.length,u=0;u<v;++u){t=w[u]
if(t.b===d)return t}return null},
$S:z+99}
A.bL5.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n=this,m=new A.bL6()
switch(d.a.a){case 0:w=n.a.$1("hospital")
if(w!=null)return new C.ec([w.c-34,w.d+52.5+26,3.141592653589793,"duty","\ud83e\ude7a On duty at the hospital"])
break
case 1:v=n.a
u=v.$1("cow")
t=u==null?v.$1("sheep"):u
if(t==null)t=v.$1("horse")
if(t!=null){v=t.c
u=v+34
s=t.d
r=s+22
return new C.ec([u,r,m.$4(u,r,v,s),"feed","\ud83c\udf3e Feeding the animals"])}break
case 2:q=n.a.$1("school")
if(q!=null)return new C.ec([q.c-24,q.d+52.5+26,3.141592653589793,"teach","\ud83d\udcda Teaching"])
break
case 3:t=n.a.$1("car")
if(t!=null)return new C.ec([t.c,t.d+34,3.141592653589793,"wash","\ud83e\uddfd Washing the car"])
break
case 4:q=n.a.$1("shop")
if(q!=null)return new C.ec([q.c+62,q.d+56,2.356194490192345,"cook","\ud83c\udf73 Cooking"])
break
case 5:p=n.a.$1("bench")
if(p!=null)return new C.ec([p.c,p.d+26,3.141592653589793,"rest","\ud83e\ude91 Resting"])
break
case 6:o=n.a.$1("flowers")
if(o!=null){v=o.c
u=v+30
s=o.d
r=s+28
return new C.ec([u,r,m.$4(u,r,v,s),"water","\ud83d\udca7 Watering the flowers"])}break}return new C.ec([-270+e*90,205,0,"",""])},
$S:z+82}
A.bL6.prototype={
$4(d,e,f,g){return Math.atan2(f-d,g-e)},
$S:296}
A.bL4.prototype={
$1(d){return d.b===this.a.a.a},
$S:z+18}
A.bL8.prototype={
$1(d){var w=d.c
return w==="bathroom"||w==="kitchen"},
$S:z+5}
A.dSn.prototype={
$0(){return this.b.d=this.a.a},
$S:0}
A.dSo.prototype={
$1(d){return this.a.c87()},
$S:11}
A.dSA.prototype={
$0(){},
$S:0}
A.dSu.prototype={
$0(){return this.a.w=this.b},
$S:0}
A.dSv.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new A.dSt(w))},
$S:0}
A.dSt.prototype={
$0(){return this.a.w=null},
$S:0}
A.dSj.prototype={
$1(d){return B.aI8},
$S:z+34}
A.dSk.prototype={
$0(){},
$S:0}
A.dSD.prototype={
$1(d){return B.aI8},
$S:z+34}
A.dSE.prototype={
$0(){},
$S:0}
A.dSC.prototype={
$0(){var w=this.a
return w.m(new A.dSB(w,this.b))},
$S:0}
A.dSB.prototype={
$0(){return this.a.r=this.b},
$S:0}
A.dSi.prototype={
$0(){return this.a.abW(this.b)},
$S:0}
A.dSp.prototype={
$0(){return this.a.J5(this.b.beV(this.c))},
$S:0}
A.dSq.prototype={
$0(){return this.a.J5(this.b.aKS(this.c))},
$S:0}
A.dSr.prototype={
$0(){return this.a.J5(this.b.aDt(this.c))},
$S:0}
A.dSs.prototype={
$0(){return this.a.akc(this.b)},
$S:0}
A.dSm.prototype={
$1(d){var w,v,u=null,t=this.b,s=this.c,r=t.e[s],q=t.c
q===$&&C.c()
q=q[r.a].a
w=this.a
v=x.p
s=C.B(C.a([new A.acM(q.e,44,u),D.as,C.E(C.d("Bed "+(s+1)+": "+q.b,u,u,u,u,u,u,D.hp,u,u,u),1),w.PS("\ud83d\udc89 Treat",new A.dSl(w,t,s),D.c7)],v),D.m,u,D.e,D.i,0,u,u)
t=r.b
return C.x(C.a([s,D.P,w.WD("Care",t,t<30?D.ax:D.aK),w.WD("Getting better",r.c,D.be)],v),D.E,u,D.e,D.i,0,D.p)},
$S:319}
A.dSl.prototype={
$0(){return this.a.J5(this.b.bk7(this.c))},
$S:0}
A.dSx.prototype={
$0(){return this.a.J5(this.b.aDZ("food"))},
$S:0}
A.dSy.prototype={
$0(){return this.a.J5(this.b.aDZ("medicine"))},
$S:0}
A.dSz.prototype={
$0(){var w=0,v=C.j(x.H),u,t=this,s,r
var $async$$0=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:w=3
return C.b(A.aU1(),$async$$0)
case 3:$.Eb=null
s=t.a
if(s.c==null){w=1
break}r=s.f
if(r!=null)r.a4(0)
$.ajX=null
s.m(new A.dSw(s))
s.a_2()
case 1:return C.h(u,v)}})
return C.i($async$$0,v)},
$S:1}
A.dSw.prototype={
$0(){return this.a.d=null},
$S:0}
A.dSF.prototype={
$0(){return C.a4(this.a,!1).ig()},
$S:0}
A.dSG.prototype={
$1(d){return d.a>=0},
$S:z+33}
A.fCD.prototype={
$2(d,e){var w
A:{if("black"===d){w=e.a===25?"The black wire carries the power (hot). It never goes on the green ground screw. Hot goes to a BRASS screw.":"The black (hot) wire goes on a BRASS screw, not on the silver one. Silver is for white (neutral)."
break A}if("white"===d){w=e.a===25?"The white wire is the neutral. The green screw is only for the ground wire. Neutral goes to a SILVER screw.":"The white (neutral) wire goes on a SILVER screw, not on brass. Brass is for the black (hot) wire."
break A}w="The bare copper ground wire only goes on the GREEN screw. It keeps you safe if something goes wrong."
break A}return w},
$S:z+3}
A.fCE.prototype={
$2(d,e){return d==="ground"?y.t:"A black (hot) wire never goes on the green ground screw. The two black wires go on the two BRASS screws."},
$S:z+3}
A.fCF.prototype={
$2(d,e){var w
if(e.e)w="Those are the LOAD screws. They are covered with tape because power must come in on the LINE side. If you wire the LOAD side the GFCI will not protect you."
else A:{if("black"===d){w="The black (hot) wire goes on the BRASS LINE screw."
break A}if("white"===d){w="The white (neutral) wire goes on the SILVER LINE screw."
break A}w=y.t
break A}return w},
$S:z+3}
A.fCG.prototype={
$2(d,e){var w
A:{if("black"===d){w="The black (hot) wire joins the fixture BLACK wire. Not the white one, and never the green ground."
break A}if("white"===d){w="The white (neutral) wire joins the fixture WHITE wire. Not the black one, and never the green ground."
break A}w="The bare copper ground wire joins the fixture GREEN ground wire only."
break A}return w},
$S:z+3}
A.fCH.prototype={
$2(d,e){var w
A:{if("black"===d){w="The black (hot) wire joins the fan BLACK wire. Not the white one, and never the green ground."
break A}if("white"===d){w="The white (neutral) wire joins the fan WHITE wire. Not the black one, and never the green ground."
break A}w="The bare copper ground wire joins the fan GREEN ground wire only."
break A}return w},
$S:z+3}
A.fBj.prototype={
$1(d){return d.a===this.a},
$S:z+42}
A.fZQ.prototype={
$1(d){return d.a},
$S:z+59}
A.fAv.prototype={
$1(d){var w
A:{if("hot"===d){w=B.VF
break A}if("neutral"===d){w=B.VG
break A}if("ground"===d){w=B.VH
break A}w=B.aXN
break A}return w},
$S:z+57}
A.fAw.prototype={
$1(d){var w
A:{if("hot"===d){w=B.JV
break A}if("neutral"===d){w=B.JW
break A}if("ground"===d){w=B.JX
break A}w=B.aSk
break A}return w},
$S:z+48}
A.fAt.prototype={
$1(d){return d.a===this.a.a},
$S:z+13}
A.fAu.prototype={
$1(d){return d.a===this.a.b},
$S:z+7}
A.fR7.prototype={
$1(d){return d.e==="hot"},
$S:z+7}
A.fR8.prototype={
$1(d){return d.e==="neutral"},
$S:z+7}
A.fBw.prototype={
$1(d){return D.d.b3(this.a.b,new A.fBx(d))},
$S:3}
A.fBx.prototype={
$1(d){return d.a===this.a},
$S:z+45}
A.fBt.prototype={
$2(d,e){return A.avu(e.b)>A.avu(d.b)?e:d},
$S:z+49}
A.fBu.prototype={
$1(d){return d.a===this.a.a},
$S:z+13}
A.fBv.prototype={
$1(d){return d.a===this.a.b},
$S:z+7}
A.fyJ.prototype={
$5(d,e,f,g,h){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=j.a
i.b=d
w=j.b
v=w.b
u=C.a7(v).k("cI<1,2>")
t=u.k("Z<M.E>")
s=C.C(new C.Z(new C.cI(v,u),new A.fyK(g),t),t.k("M.E"))
r=g==="ground"
q=r?B.vO:h
p=r?0.6:0.3
if(w.c>0){o=e.a9(0,B.h9c)
i.jk(A.ai8(C.a([e,e.a9(0,B.h7b),o],x.o),4),0.12,q,!1,p,8)
return}if(s.length!==0){n=A.aQ0(j.c,D.d.gI(s).a,w)
w=A.o5(e,n,0.5)
v=n.a>0
m=w.a9(0,new A.q(v?0.5:-0.5,0.2,0.9))
w=e.a9(0,B.hds)
if(j.d)v=0
else v=v?0.06:-0.06
l=A.ai8(C.a([e,w,m,n.a9(0,new A.q(v,0,0.08)),n],x.o),5)
k=D.d.ds(l,0,D.k.bf(l.length*0.8))
i.jk(k,0.12,q,!1,p,8)
if(!r)i.jk(D.d.fL(l,k.length-1),0.08639999999999999,B.vO,!1,0.6,8)}else{l=A.ai8(C.a([e,e.a9(0,B.h3n),A.o5(e,f,0.6),f],x.o),5)
k=r?l:D.d.ds(l,0,D.k.bf(l.length*0.86))
i.jk(k,0.12,q,!1,p,8)
if(!r)i.jk(D.d.fL(l,k.length-1),0.08639999999999999,B.vO,!1,0.6,8)}},
$S:z+50}
A.fyK.prototype={
$1(d){return d.b===this.a},
$S:535}
A.fjT.prototype={
$2(d,e){var w,v=this.a
v.b=d
w=A.H7(e,0.9,6)
if(this.b)v.jk(w,0.2,B.Yt,!1,0.35,10)
this.c.push(D.d.gak(w))},
$S:z+51}
A.fZP.prototype={
$1(d){return d.a===this.a},
$S:z+42}
A.flc.prototype={
$6$taped(d,e,f,g,h,i){var w,v,u,t=this.a
t.e=0.9
t.b=d
w=this.b
v=w.a+e*0.75
u=w.b+f
w=w.c-0.45
t.aZ(new A.q(v,u,w),B.hf_,h,0.7)
t.dR(new A.q(v,u,w),new A.q(v+e*0.22,u,w),0.17,g,0.9,12)
t.aP(new A.q(v+e*0.23,u,w),B.hbn,B.Fb)
if(i)t.aZ(new A.q(v+e*0.05,u,w),B.hbd,D.bu,0.2)},
$5(d,e,f,g,h){return this.$6$taped(d,e,f,g,h,!1)},
$S:1793}
A.fCI.prototype={
$2(d,e){var w
if(d==="ground")w=y.t
else w=e.a===25?y.T:"A double-pole switch has two LINE screws on top (power in) and two LOAD screws on the bottom (power out to the heater). Each leg goes straight down the same side: left leg on the left screws, right leg on the right ones."
return w},
$S:z+3}
A.fCJ.prototype={
$2(d,e){var w
if(d==="ground")w=y.t
else if(e.a===25)w=y.T
else w=d==="common"?"The COMMON wire does not go on a traveler screw. It goes on the odd-coloured COMMON screw.":"The travelers go on the two brass TRAVELER screws. The COMMON screw is for the black power wire only."
return w},
$S:z+3}
A.fCK.prototype={
$2(d,e){var w
if(d==="ground")w=y.t
else w=e.a===25?"A traveler never goes on the green ground screw.":"A four-way has a pair of screws for the travelers coming IN (top) and a pair for the travelers going OUT (bottom). Do not mix the two pairs."
return w},
$S:z+3}
A.fCL.prototype={
$2(d,e){var w
A:{if("ground"===d){w=y.t
break A}if("neutral"===d){w="The white neutral wire goes on the silver NEUTRAL screw only."
break A}if(e.a===25)w=y.T
else w=d==="line"?"The wire from the panel is the LINE: it goes on the LINE screw.":"The wire to the light is the LOAD: it goes on the LOAD screw."
break A}return w},
$S:z+3}
A.fCM.prototype={
$2(d,e){var w
if(d==="ground")w=y.t
else if(e.a===25)w=y.T
else w=d==="feed"?"The feed goes on the FEED screw, where the two switches are joined.":"The wires to the lights go on the separate screws, one for each switch."
return w},
$S:z+3}
A.fCN.prototype={
$2(d,e){var w,v=y.T
A:{if("ground"===d){w=y.t
break A}if("neutral"===d){w="The white neutral wire goes on a SILVER screw."
break A}if("always"===d){w=e.a===25?v:"The always-hot wire goes on the BOTTOM brass screw. The top one is for the switched wire."
break A}w=e.a===25?v:"The switched hot wire (red) goes on the TOP brass screw."
break A}return w},
$S:z+3}
A.fCO.prototype={
$2(d,e){var w
A:{if("ground"===d){w=y.t
break A}if("neutral"===d){w=y.I
break A}w=e.a===25?y.T:"The black and red hot wires go on the two brass screws, X and Y. The silver W screw is for the neutral."
break A}return w},
$S:z+3}
A.fCP.prototype={
$2(d,e){return d==="neutral"?y.I:"The black and red hot wires go on the two brass screws, X and Y."},
$S:z+3}
A.fCQ.prototype={
$2(d,e){var w
if(d==="ground")w=y.t
else w=e.a===25?y.T:"Both hot wires go on the two brass screws."
return w},
$S:z+3}
A.fCR.prototype={
$2(d,e){var w
A:{if("isoground"===d){w="The isolated ground wire only goes on the green screw with the orange triangle."
break A}if("neutral"===d){w=y.c
break A}w=e.a===25?"A hot wire never goes on the ground screw.":y.u
break A}return w},
$S:z+3}
A.fyv.prototype={
$1(d){return d.a===this.a},
$S:z+26}
A.fyw.prototype={
$0(){return B.amm},
$S:z+53}
A.fZM.prototype={
$1(d){var w=d>60?62:99
return Math.min(d*0.5625,w)},
$S:5}
A.fZJ.prototype={
$1(d){return d>40?30+d/2:58},
$S:5}
A.fZK.prototype={
$2(d,e){return D.k.aK(d.a,e.a)},
$S:1794}
A.fZL.prototype={
$2(d,e){var w=this.a
if(e-d>w.a-w.b){w.b=d
w.a=e}},
$S:246}
A.bUn.prototype={
$1(d){return d},
$S:112}
A.bUm.prototype={
$1(d){return B.f3Y.t(0,d.b)},
$S:z+4}
A.bUY.prototype={
$1(d){return d.a==="Jobs"},
$S:z+55}
A.bUZ.prototype={
$1(d){return new A.on(!1,"back",d,5)},
$S:z+56}
A.bV_.prototype={
$4(d,e,f,g){return!D.d.b3(this.a.x,new A.bV0(d,f,e,g))},
$2(d,e){return this.$4(d,e,135,115)},
$3(d,e,f){return this.$4(d,e,f,115)},
$S:1795}
A.bV0.prototype={
$1(d){var w=this,v=d.b
return!D.d.t(B.a5c,v)&&!D.d.t(B.HY,v)&&Math.abs(d.c-w.a)<w.b&&Math.abs(d.d-w.c)<w.d},
$S:z+4}
A.bV1.prototype={
$4(d,e,f,g){var w,v,u,t,s,r,q,p,o,n
for(w=this.a,v=w.length,u=f/2+90,t=g/2+20,s=0;s<v;++s){r=w[s]
if(Math.abs(r.c-d)<u){q=r.d
p=q>e?70:30
p=Math.abs(q-e)<t+p
q=p}else q=!1
if(q)return!1}for(w=this.b.x,v=w.length,s=0;s<w.length;w.length===v||(0,C.L)(w),++s){o=w[s]
u=o.b
if(D.d.t(B.RO,u)||u==="roundabout"||u==="rug"||u==="flowers")continue
n=B.hC.h(0,u)
if(Math.abs(o.c-d)<(f+n.c)/2+130){u=o.d
t=n.d
q=u>e?150:110
q=Math.abs(u-e)<(g+t)/2+q
u=q}else u=!1
if(u)return!1}return!0},
$S:529}
A.bV5.prototype={
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
if(B.f4a.t(0,q)){l=r.e*3.141592653589793/2
q=r.c
o=Math.sin(l)
p=p.d/2+30
k=r.d
j=Math.cos(l)
if(Math.abs(q+o*p-d)<u&&Math.abs(k+j*p-e)<t)return!1}}return!0},
$S:529}
A.bV2.prototype={
$3(d,e,f){var w,v,u,t,s,r,q,p,o,n={},m=B.hC.h(0,d)
m.toString
w=n.a=0
v=this.a
u=new A.bV4(n,v,d)
for(t=f.length,s=this.b,r=m.c,m=m.d;w<t;++w){q=f[w]
p=q.a
o=q.b
if(n.a>=e)return
if(s.$4(p,o,r,m))u.$2(p,o)}v=v.x
o=-500
for(;;){if(!(o<1400&&n.a<e))break
p=-1100
for(;;){if(!(p<=1100&&n.a<e))break
A:{if(D.d.b3(v,new A.bV3(d,p,o)))break A
if(s.$4(p,o,r,m))u.$2(p,o)}p+=110}o+=100}},
$S:1797}
A.bV4.prototype={
$2(d,e){var w=this.b,v=this.c
w.dz(0,v,d,e)
if(v==="ubstation")w.dz(0,"car",d+96,e+6);++this.a.a},
$S:246}
A.bV3.prototype={
$1(d){return d.b===this.a&&Math.abs(d.c-this.b)<420&&Math.abs(d.d-this.c)<420},
$S:z+4}
A.bV9.prototype={
$1(d){return d.gkO()},
$S:z+5}
A.bV8.prototype={
$1(d){var w=d.c
return(w==="bathroom"||w==="kitchen")&&d.gjR()},
$S:z+5}
A.bV7.prototype={
$1(d){var w=d.c
return w==="bathroom"||w==="kitchen"},
$S:z+5}
A.bV6.prototype={
$1(d){return d.gkO()&&d.gjR()},
$S:z+5}
A.edY.prototype={
$1(d){return!(d.gkO()&&d.gjR())},
$S:z+5}
A.edV.prototype={
$1(d){var w,v=this.a.a.f
A:{if("wiring"===v){w=!d.gkO()
break A}if("plumbing"===v){w=!d.gjR()
break A}w=!(d.gkO()&&d.gjR())
break A}return w},
$S:z+5}
A.edW.prototype={
$1(d){var w,v,u,t,s,r,q=this.a,p=q.ghL()
if(Date.now()<0){if(q.c!=null)q.m(new A.edU())
return}if(p==null||q.c==null||q.cx!=null||q.bZ>0)return
w=q.d
w===$&&C.c()
v=w.d
v===$&&C.c()
u=p.bf5(w,v[w.e].a)
w=C.a([],x.s)
for(v=u.length,t=0;t<u.length;u.length===v||(0,C.L)(u),++t){s=u[t]
w.push(""+s.a+":"+D.k.V(s.c)+":"+D.k.V(s.d)+":"+s.x+":"+s.Q)}r=D.d.aG(w,"|")
if(q.aJ==null&&r!==q.du){q.du=r
q.m(q.giW())}w=p.f
if(w.length!==0&&D.d.gI(w)!==q.fy){w=D.d.gI(w)
q.fy=w
q.iG(w)}},
$S:11}
A.edU.prototype={
$0(){},
$S:0}
A.edX.prototype={
$1(d){var w,v=this.a
if(v.c==null)return
w=v.d
w===$&&C.c()
if(w.a.length!==0)v.iG(v.c21())
else{w=v.a.f
if(w.length!==0){A:{if("wiring"===w){w="This room needs wiring: press the Wiring button, or tap the red outlet or the light."
break A}if("plumbing"===w){w="This room needs plumbing: press the Plumbing button, or tap the toilet or the sink."
break A}w="Walk through the house and fix what the signs say is wrong."
break A}v.iG(w)}}},
$S:9}
A.ecI.prototype={
$0(){var w=this.a
w.ax=this.b
w.ay=this.c},
$S:0}
A.ecJ.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new A.ecH(w))},
$S:0}
A.ecH.prototype={
$0(){return this.a.ax=null},
$S:0}
A.ecK.prototype={
$0(){var w=this.a
w.r=this.b
w.Q=0
w.as=-1
w.at=0
w.iF()},
$S:0}
A.ebg.prototype={
$0(){var w=this.a,v=w.d
v===$&&C.c()
v.e=this.b
w.Q=0
w.as=-1
w.at=0
w.ax=null
w.iF()},
$S:0}
A.eda.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&C.c()
w=u.d
w===$&&C.c()
u=w[u.e]
u.fy=!u.fy
v.iF()},
$S:0}
A.ecd.prototype={
$0(){return this.a.k3=!0},
$S:0}
A.ece.prototype={
$0(){var w=this.a,v=this.b
w.Q=v-100
w.at=v
w.iF()},
$S:0}
A.ecf.prototype={
$0(){var w=this.a,v=this.b
w.as=v-300
w.at=v},
$S:0}
A.ecg.prototype={
$0(){var w,v,u=this.a,t=u.d
t===$&&C.c()
w=t.d
w===$&&C.c()
v=this.b
if(!w[t.e].at.W(0,v)){t=u.d
w=t.d
w===$&&C.c()
w[t.e].at.M(0,v)}u.iF()},
$S:0}
A.ech.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&C.c()
w=u.d
w===$&&C.c()
w[u.e].p2=!0
v.iF()},
$S:0}
A.eaK.prototype={
$1(d){var w,v,u,t,s,r=this,q=null,p=C.d("Door to "+r.b,q,q,q,q,q,q,D.dd,q,q,q),o=r.a,n=o.d
n===$&&C.c()
w=n.d
w===$&&C.c()
v=r.c
u=C.d(w[n.e].at.t(0,v)?"The door is open.":"The door is closed.",q,q,q,q,q,q,D.lR,q,q,q)
n=o.d
w=n.d
w===$&&C.c()
t=C.X(w[n.e].at.t(0,v)?B.bKI:B.bKU,q,q,q,q,q)
n=o.d
w=n.d
w===$&&C.c()
s=x.p
return C.bm(!0,new C.D(D.bQ,C.x(C.a([p,D.au,u,D.ae,C.bX(D.bG,C.a([C.dl(t,C.d(w[n.e].at.t(0,v)?"Close the door":"Open the door",q,q,q,q,q,q,q,q,q,q),new A.eaI(o,d,v),q),C.ew(D.apz,B.fEb,new A.eaJ(o,d,v,r.d),q)],s),D.bq,q,10,10)],s),D.E,q,D.e,D.O,0,D.p),q),!0,!1,D.af,!0,!0)},
$S:27}
A.eaI.prototype={
$0(){var w,v,u
C.a4(this.b,!1).O(null)
w=this.a
v=this.c
w.m(new A.eaH(w,v))
w=w.d
w===$&&C.c()
u=w.d
u===$&&C.c()
A.fX(u[w.e].at.t(0,v)?700:450,70,0.25,"tri")},
$S:0}
A.eaH.prototype={
$0(){var w,v,u=this.a,t=u.d
t===$&&C.c()
w=t.d
w===$&&C.c()
v=this.b
if(!w[t.e].at.W(0,v)){t=u.d
w=t.d
w===$&&C.c()
w[t.e].at.M(0,v)}u.iF()},
$S:0}
A.eaJ.prototype={
$0(){var w,v,u=this
C.a4(u.b,!1).O(null)
w=u.a
v=u.c
w.m(new A.eaF(w,v))
A.fX(700,70,0.25,"tri")
C.bP(D.mF,new A.eaG(w,v,u.d),x.P)},
$S:0}
A.eaF.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&C.c()
w=u.d
w===$&&C.c()
w[u.e].at.M(0,this.b)
v.iF()},
$S:0}
A.eaG.prototype={
$0(){var w=this.a
if(w.c==null)return
w.m(new A.eaE(w,this.b))
w.AC(this.c)},
$S:12}
A.eaE.prototype={
$0(){var w,v=this.a.d
v===$&&C.c()
w=v.d
w===$&&C.c()
return w[v.e].at.W(0,this.b)},
$S:0}
A.eaT.prototype={
$0(){return this.a.eu=!0},
$S:0}
A.eaU.prototype={
$0(){var w=this.a
w.f1=!0
w.fB=!1
w.R8=!w.p4},
$S:0}
A.eaV.prototype={
$0(){var w=this.a
w.R8=w.f1=!1},
$S:0}
A.ec6.prototype={
$2(d,e){var w=null,v=D.w.j(0.55),u=C.J(D.bZ,D.r,1)
return C.aB(w,C.p(w,C.X(d,D.c,w,w,w,22),D.f,w,w,new C.o(v,w,u,w,w,w,D.a6),w,44,w,D.G8,w,w,w,44),D.y,!1,w,new A.ec8(this.a),w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,e,w,w,w,w,w,w,!1,D.a3)},
$S:347}
A.ec8.prototype={
$0(){var w=this.a
return w.m(new A.ec7(w))},
$S:0}
A.ec7.prototype={
$0(){return this.a.fB=!0},
$S:0}
A.ec9.prototype={
$0(){var w=this.a
return w.m(new A.ec5(w))},
$S:0}
A.ec5.prototype={
$0(){return this.a.fB=!1},
$S:0}
A.eca.prototype={
$0(){var w=this.a
return w.p4?w.a2P():w.m(new A.ec4(w))},
$S:0}
A.ec4.prototype={
$0(){return this.a.R8=!0},
$S:0}
A.ecb.prototype={
$0(){var w=this.a
return w.m(new A.ec3(w))},
$S:0}
A.ec3.prototype={
$0(){var w=this.a
return w.h8=!w.h8},
$S:0}
A.ecc.prototype={
$0(){var w=this.a
return w.m(new A.ec2(w))},
$S:0}
A.ec2.prototype={
$0(){return this.a.ai=!0},
$S:0}
A.eak.prototype={
$0(){var w=this.a
return w.m(new A.eal(w))},
$S:0}
A.eal.prototype={
$0(){return this.a.ai=!1},
$S:0}
A.eb4.prototype={
$2(d,e){var w=null,v=D.w.j(0.55),u=C.J(D.bZ,D.r,1)
return C.aB(w,C.p(w,C.X(d,D.c,w,w,w,20),D.f,w,w,new C.o(v,w,u,w,w,w,D.a6),w,40,w,D.iD,w,w,w,40),D.y,!1,w,new A.eb6(this.a),w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,e,w,w,w,w,w,w,!1,D.a3)},
$S:347}
A.eb6.prototype={
$0(){var w=this.a
return w.m(new A.eb5(w))},
$S:0}
A.eb5.prototype={
$0(){return this.a.fB=!0},
$S:0}
A.eb7.prototype={
$0(){var w=this.a
return w.m(new A.eb3(w))},
$S:0}
A.eb3.prototype={
$0(){return this.a.fB=!1},
$S:0}
A.eb8.prototype={
$0(){var w,v,u=this.a
u.m(new A.eb2(u))
w=u.d
w===$&&C.c()
v=w.d
v===$&&C.c()
if(v[w.e].c!=="outside")u.y0()},
$S:0}
A.eb2.prototype={
$0(){return this.a.eu=!1},
$S:0}
A.eb9.prototype={
$0(){var w=this.a
return w.m(new A.eb1(w))},
$S:0}
A.eb1.prototype={
$0(){var w=this.a
return w.ab=w.ab===1?3:1},
$S:0}
A.eba.prototype={
$0(){var w=this.a
return w.m(new A.eb0(w))},
$S:0}
A.eb0.prototype={
$0(){var w=this.a
return w.h8=!w.h8},
$S:0}
A.ebb.prototype={
$0(){var w=this.a
return w.m(new A.eb_(w))},
$S:0}
A.eb_.prototype={
$0(){return this.a.ai=!0},
$S:0}
A.ebc.prototype={
$0(){var w=this.a
return w.p4?w.a2P():w.m(new A.eaZ(w))},
$S:0}
A.eaZ.prototype={
$0(){return this.a.R8=!0},
$S:0}
A.ed8.prototype={
$2$mine(d,e){var w=null,v=e?D.a8:D.a5,u=e?D.bl:D.e7,t=C.n(18)
return new C.bM(v,w,w,C.p(w,C.d(d,w,w,w,w,w,w,B.aTj,w,w,w),D.f,w,B.ad1,new C.o(u,w,w,t,w,w,D.n),w,w,w,D.cu,D.ip,w,w,w),w)},
$1(d){return this.$2$mine(d,!1)},
$S:1798}
A.ed9.prototype={
$1(d){var w=this,v=null,u=w.b,t=u.b,s=x.p,r=C.B(C.a([C.ha(u.e.c,v,C.d(t[0],v,v,v,v,v,v,D.it,v,v,v),v,18),D.as,C.d(t,v,v,v,v,v,v,D.k5,v,v,v),D.b1,B.fPT],s),D.m,v,D.e,D.i,0,v,v),q=w.c,p=w.d,o=q.$1("Hi, it's "+t+". "+p.d),n=w.e,m="Please come to "+n,l=w.a
return C.bm(!0,new C.D(Ab.yn,C.x(C.a([r,A7.N4,o,q.$1(p.c==="power"?m+" and fix the wiring. I can't stay in the dark.":m+" and fix the leak before it floods."),q.$1("I'll pay "+p.e+" points. Thank you!"),q.$2$mine("On my way!",!0),D.am,C.bX(D.bG,C.a([C.dl(B.bVo,C.d("Show me where "+t+" is",v,v,v,v,v,v,v,v,v,v),new A.ed6(l,d,p,u),v),C.dl(B.bYh,C.d("Go and fix it ("+n+")",v,v,v,v,v,v,v,v,v,v),new A.ed7(l,d,w.f,n),v)],s),D.bq,v,8,10)],s),D.E,v,D.e,D.O,0,D.p),v),!0,!1,D.af,!0,!0)},
$S:27}
A.ed6.prototype={
$0(){var w,v,u,t,s=this
C.a4(s.b,!1).O(null)
w=s.a
v=w.fr
u=C.T(v).k("Z<1>")
t=C.C(new C.Z(v,new A.ed5(s.c),u),u.k("M.E"))
if(t.length!==0){v=w.d
v===$&&C.c()
u=v.d
u===$&&C.c()
v=u[v.e].c==="outside"}else v=!1
if(v){v=w.e
v===$&&C.c()
v.xl(160,new A.q(D.d.gI(t).c,30,D.d.gI(t).d))}w.eg(s.d.b+" is the one with the phone sign.",!0)},
$S:0}
A.ed5.prototype={
$1(d){return d.a===this.a.b},
$S:z+14}
A.ed7.prototype={
$0(){var w,v=this
C.a4(v.b,!1).O(null)
w=v.a
if(w.aM)w.a2Q()
w.eu=!1
w.AC(v.c)
w.eg("You are in "+v.d+". Fix the problem with the Wiring or Plumbing button.",!0)},
$S:0}
A.ebu.prototype={
$0(){var w=this.a
w.x=!0
w.z=!1
w.r="ceiling"
w.iF()},
$S:0}
A.e9j.prototype={
$1(d){return d.c==="outside"},
$S:z+5}
A.edB.prototype={
$1(d){return d.c==="outside"},
$S:z+5}
A.e9K.prototype={
$0(){},
$S:0}
A.ebp.prototype={
$0(){var w=this.a
return w.m(new A.ebo(w))},
$S:0}
A.ebo.prototype={
$0(){return this.a.id=!1},
$S:0}
A.ebq.prototype={
$0(){var w=this.a
return w.m(new A.ebn(w))},
$S:0}
A.ebn.prototype={
$0(){return this.a.id=!1},
$S:0}
A.edC.prototype={
$1(d){var w=this.b
return d.d===this.a.aqv(w.f,w.r)},
$S:z+31}
A.edA.prototype={
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
A.ecO.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=d.a==="tank"?A.h8M(l.a.c5.b):d.e,i=l.b
i=i==null?k:i.r
w=(i==null?0:i)>=j
i=l.c
v=i?112:1/0
u=i?8:12
t=i?8:10
s=D.c.j(0.07)
r=C.n(16)
q=C.J(w?D.bu.j(0.5):D.bC,D.r,1)
p=d.b
o=d.c
n=d.d
if(i){i=C.d(p,k,k,k,k,k,k,D.x_,k,k,k)
o=C.d(o,k,1,D.a1,k,k,k,D.Kk,D.K,k,k)
n=C.d(n,k,2,D.a1,k,k,k,B.flu,D.K,k,k)
p=w?D.bu:D.bC
m=C.n(12)
i=C.x(C.a([i,D.bF,o,n,D.fG,C.p(k,C.d(""+j+" \u2b50",k,k,k,k,k,k,C.l(k,k,w?D.w:D.bZ,k,k,k,k,k,k,k,k,13,k,k,D.u,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),D.f,k,k,new C.o(p,k,k,m,k,k,D.n),k,k,k,k,D.Gb,k,k,k)],x.p),D.m,k,D.e,D.O,0,D.p)}else{i=C.d(p,k,k,k,k,k,k,D.nI,k,k,k)
p=x.p
n=C.E(C.x(C.a([C.d(o,k,k,k,k,k,k,D.nG,k,k,k),C.d(n,k,k,k,k,k,k,B.aSM,k,k,k)],p),D.E,k,D.e,D.i,0,D.p),1)
o=w?D.bu:D.bC
m=C.n(14)
i=C.B(C.a([i,D.as,n,C.p(k,C.d(""+j+" \u2b50",k,k,k,k,k,k,C.l(k,k,w?D.w:D.bZ,k,k,k,k,k,k,k,k,k,k,k,D.u,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),D.f,k,k,new C.o(o,k,k,m,k,k,D.n),k,k,k,k,D.nq,k,k,k)],p),D.m,k,D.e,D.i,0,k,k)}return C.aB(k,C.p(k,i,D.f,k,k,new C.o(s,k,q,r,k,k,D.n),k,k,k,D.cu,new C.Q(u,t,u,t),k,k,v),D.y,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,new A.ecP(l.a,d),k,k,k,k,k,k,!1,D.a3)},
$S:z+124}
A.ecP.prototype={
$0(){return this.a.aPo(this.b)},
$S:0}
A.ecN.prototype={
$2(d,e){var w,v,u,t=null,s=x.p,r=C.a([new C.D(B.bxr,C.d(d,t,t,t,t,t,t,B.frL,t,t,t),t)],s)
if(this.a){s=C.a([],s)
for(w=e.length,v=this.b,u=0;u<w;++u)s.push(v.$1(e[u]))
r.push(C.bX(D.bG,s,D.bq,t,0,8))}else for(s=e.length,w=this.b,u=0;u<s;++u)r.push(w.$1(e[u]))
return C.x(r,D.E,t,D.e,D.O,0,D.p)},
$S:z+63}
A.ecM.prototype={
$0(){var w=this.a
return w.m(new A.ecL(w))},
$S:0}
A.ecL.prototype={
$0(){return this.a.k2=!1},
$S:0}
A.ebO.prototype={
$2(d,e){var w=null,v=e.j(0.2),u=C.n(10)
return C.p(w,C.d(d,w,w,w,w,w,w,C.l(w,w,e,w,w,w,w,w,w,w,w,11.5,w,w,D.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),D.f,w,w,new C.o(v,w,w,u,w,w,D.n),w,w,w,w,D.fP,w,w,w)},
$S:1799}
A.ebP.prototype={
$1(d){return B.hC.h(0,d.b).a},
$S:z+64}
A.ebL.prototype={
$1(d){var w,v,u,t,s=this,r=null,q=d.c,p=A.yO(q),o=D.k.V(Math.sqrt(Math.pow(p.a-s.b,2)+Math.pow(p.b-s.c,2))/10),n=D.c.j(0.07),m=C.n(16),l=C.J(D.bC,D.r,1),k=d.b,j=C.d(A.L9(k).b,r,r,r,r,r,r,D.nI,r,r,r),i=s.d
k=C.d(d.w?"\ud83d\ude91 "+A.L9(k).c+": "+C.w(i.$1(q))+" \u2192 "+C.w(i.$1(d.d))+" (somebody was run over)":A.L9(k).c+": "+C.w(i.$1(q))+" \u2192 a house",r,r,r,r,r,r,B.aUg,r,r,r)
w=s.e
v=w.$2(""+d.e+" points",D.bu)
u=w.$2(""+o+" m to the shop",D.aK)
p=A.yO(q)
t=A.yO(d.d)
q=x.p
w=C.E(C.x(C.a([k,D.cM,C.bX(D.bG,C.a([v,u,w.$2(""+D.k.V(Math.sqrt(Math.pow(p.a-t.a,2)+Math.pow(p.b-t.b,2))/10)+" m trip",D.be)],q),D.bq,r,0,6)],q),D.E,r,D.e,D.i,0,D.p),1)
k=s.f!=null
i=k?r:new A.ebN(s.a,s.r,d,i)
v=k?D.bC:D.bu
u=C.n(14)
return C.p(r,C.B(C.a([j,D.as,w,D.ac,C.aB(r,C.p(r,C.d("Take",r,r,r,r,r,r,C.l(r,r,k?D.bZ:D.w,r,r,r,r,r,r,r,r,r,r,r,D.u,r,r,!0,r,r,r,r,r,r,r,r),r,r,r),D.f,r,r,new C.o(v,r,r,u,r,r,D.n),r,r,r,r,D.ip,r,r,r),D.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,i,r,r,r,r,r,r,!1,D.a3)],q),D.m,r,D.e,D.i,0,r,r),D.f,r,r,new C.o(n,r,l,m,r,r,D.n),r,r,r,D.cu,D.bT,r,r,r)},
$S:z+65}
A.ebN.prototype={
$0(){var w=this,v=w.c,u=w.a
if(w.b.cYM(0,v,u.CW.gip()/1000)){u.m(new A.ebM(u))
if(!u.aM)u.a2M()
u.eg(A.L9(v.b).b+" Order taken: go to the "+w.d.$1(v.c).toLowerCase()+" (follow the yellow line), then to the house.",!0)}},
$S:0}
A.ebM.prototype={
$0(){return this.a.go=!1},
$S:0}
A.ebJ.prototype={
$0(){var w=this.a
return w.m(new A.ebI(w))},
$S:0}
A.ebI.prototype={
$0(){return this.a.go=!1},
$S:0}
A.ebK.prototype={
$0(){var w=this.a
return w.m(new A.ebH(w,this.b))},
$S:0}
A.ebH.prototype={
$0(){this.b.a4(0)
this.a.eg("Order given back.",!0)},
$S:0}
A.ebd.prototype={
$0(){return this.a.k3=!1},
$S:0}
A.ebe.prototype={
$0(){return this.a.k3=!1},
$S:0}
A.ecE.prototype={
$0(){return A.fX(1175,220,0.3,"tri")},
$S:0}
A.eaR.prototype={
$0(){var w=this.a
return w.m(new A.eaQ(w))},
$S:0}
A.eaQ.prototype={
$0(){return this.a.k3=!1},
$S:0}
A.eaS.prototype={
$0(){return this.a.bU6(this.b)},
$S:0}
A.eaD.prototype={
$4(d,e,f,g){var w=-d,v=this.a
return 0.5*(2*e+(w+f)*v+(2*d-5*e+4*f-g)*v*v+(w+3*e-3*f+g)*v*v*v)},
$S:296}
A.ebv.prototype={
$1(d){return d.c==="outside"},
$S:z+5}
A.ecQ.prototype={
$0(){var w=this.a
w.R8=!1
w.y1=null
w.p4=!0
w.rx=this.b
w.ry=-1},
$S:0}
A.eaP.prototype={
$2(d,e){return d[D.o.E(e,0,d.length-1)]},
$S:z+66}
A.ed0.prototype={
$0(){var w=this.a
w.p4=!1
w.aJ=null
w.iF()},
$S:0}
A.eaN.prototype={
$4(d,e,f,g){var w=null,v=D.c.j(0.07),u=C.n(16),t=C.J(D.bC,D.r,1),s=x.p
return C.aB(w,C.p(w,C.B(C.a([C.d(d,w,w,w,w,w,w,D.nI,w,w,w),D.bc,C.E(C.x(C.a([C.d(e,w,w,w,w,w,w,D.hp,w,w,w),C.d(f,w,w,w,w,w,w,D.ho,w,w,w)],s),D.E,w,D.e,D.i,0,D.p),1),A2.P4],s),D.m,w,D.e,D.i,0,w,w),D.f,w,w,new C.o(v,w,t,u,w,w,D.n),w,w,w,D.jy,D.bg,w,w,w),D.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new A.eaO(this.a,g),w,w,w,w,w,w,!1,D.a3)},
$S:1800}
A.eaO.prototype={
$0(){return this.a.cyV(this.b)},
$S:0}
A.eaM.prototype={
$0(){var w=this.a
return w.m(new A.eaL(w))},
$S:0}
A.eaL.prototype={
$0(){return this.a.R8=!1},
$S:0}
A.ebk.prototype={
$1(d){return d.c==="outside"},
$S:z+5}
A.ed_.prototype={
$0(){var w,v,u=this.a,t=u.d
t===$&&C.c()
w=t[this.b]
v=u.at.h(0,w.a)
if(v==null||!A.h4q(w.b,v.a))return 0
return v.b.c<2?1:2},
$S:94}
A.edP.prototype={
$1(d){return d},
$S:112}
A.eam.prototype={
$1(d){return d},
$S:112}
A.ebh.prototype={
$0(){var w=A.csF(0,null,!1,this.a.a*13+5+this.b.f,!0)
w.amf()
return w},
$S:z+67}
A.ebi.prototype={
$1(d){return A.cig(!1,this.a,!1)},
$S:z+41}
A.ebj.prototype={
$1(d){return d.length!==0},
$S:3}
A.eaX.prototype={
$0(){return new A.CA(C.U(x.S,x.N))},
$S:z+69}
A.eaY.prototype={
$1(d){return new A.DZ("light",this.a,null)},
$S:z+27}
A.ebx.prototype={
$1(d){return d.c==="outside"},
$S:z+5}
A.eby.prototype={
$0(){return this.a.y1=this.b},
$S:0}
A.e9R.prototype={
$1(d){var w=null
return new C.bM(D.a5,w,w,C.p(w,C.d(d,w,w,w,w,w,w,B.aTj,w,w,w),D.f,w,B.ad1,B.b5k,w,w,w,D.cu,D.ip,w,w,w),w)},
$S:133}
A.e9Q.prototype={
$5$primary(d,e,f,g,h){var w=null,v=h?f:f.j(0.14),u=C.n(16),t=C.J(f,D.r,1),s=C.X(d,h?D.w:f,w,w,w,21)
return C.aB(w,C.p(w,C.B(C.a([s,D.ac,C.d(e,w,w,w,w,w,w,C.l(w,w,h?D.w:D.c,w,w,w,w,w,w,w,w,14.5,w,w,D.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),D.m,w,D.b9,D.i,0,w,w),D.f,w,w,new C.o(v,w,t,u,w,w,D.n),w,48,w,D.jy,w,w,w,w),D.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,g,w,w,w,w,w,w,!1,D.a3)},
$4(d,e,f,g){return this.$5$primary(d,e,f,g,!1)},
$S:1801}
A.e9S.prototype={
$0(){var w=this.a
return w.m(new A.e9P(w))},
$S:0}
A.e9P.prototype={
$0(){return this.a.y1=null},
$S:0}
A.e9T.prototype={
$0(){var w,v,u=this.a
u.m(new A.e9O(u))
if(!u.aM)u.a2M()
w=u.aC
if(w!=null){v=u.e
v===$&&C.c()
v.apS(220,0.5,new A.q(w.f,30,w.r))}u.eg("Follow the yellow line on the ground to get there.",!0)},
$S:0}
A.e9O.prototype={
$0(){return this.a.y1=null},
$S:0}
A.e9U.prototype={
$0(){var w,v=this.a
v.m(new A.e9N(v))
if(v.cJ==null){v.cJ=this.b
v.hO=0}w=this.b
v.Sp(w.a)
w=w.c
if(w==="power")w="You are at the house. Walk in and onto the red mat at the breaker panel."
else w=w==="sick"?"You are at the hospital. Walk in and onto the desk.":y.Y
v.eg(w,!0)},
$S:0}
A.e9N.prototype={
$0(){return this.a.y1=null},
$S:0}
A.e9V.prototype={
$0(){var w=this.a
w.m(new A.e9M(w,this.b))
w.eg("Saved on your waiting list.",!0)},
$S:0}
A.e9M.prototype={
$0(){var w,v=this.a
v.y1=null
w=this.b
if(v.cJ===w)v.cJ=null
v=v.eK
if(!D.d.t(v,w))v.push(w)},
$S:0}
A.e9W.prototype={
$0(){var w=this.a
return w.m(new A.e9L(w))},
$S:0}
A.e9L.prototype={
$0(){return this.a.y2=!1},
$S:0}
A.eai.prototype={
$1(d){var w=null
return C.bx(D.r3,new C.a5(w,C.aJ(d,w,x.w).w.a.b*0.82,new A.apJ(this.a,w),w),D.ap)},
$S:1802}
A.eaj.prototype={
$0(){var w=this.a
w.azM()
w.iF()},
$S:0}
A.ecD.prototype={
$1(d){return new C.e1(new A.ecB(this.a,this.b,this.c),null)},
$S:21}
A.ecB.prototype={
$2(d,e){var w,v,u,t,s=null,r=new A.ecC(this.a,e),q=this.b,p=q.a,o=C.d(p.b+" "+q.gaDM(0),s,s,s,s,s,s,R.tb,s,s,s)
p=C.d(p.f,s,s,s,s,s,s,D.vl,s,s,s)
w=C.d("Now: "+q.gUo()+"\nFood "+D.k.V(100-q.b)+"%   Health "+D.k.V(q.c)+"%   Home "+D.k.V(q.d)+"%",s,s,s,s,s,s,B.aTM,s,s,s)
v=this.c
u=x.p
t=C.a([r.$2("\ud83c\udf5e Feed",new A.ecy(v,q))],u)
if(q.e)t.push(r.$3$col("\ud83d\udc8a Medicine",new A.ecz(v,q),D.br))
if(q.e||q.c<60)t.push(r.$3$col("\ud83c\udfe5 Hospital",new A.ecA(v,q),D.c7))
return C.bm(!0,new C.D(D.bQ,C.x(C.a([o,p,D.P,w,D.ae,C.bX(D.bG,t,D.bq,s,8,8)],u),D.E,s,D.e,D.O,0,D.p),s),!0,!1,D.af,!0,!0)},
$S:86}
A.ecC.prototype={
$3$col(d,e,f){var w=null,v=f.j(0.22),u=C.n(12),t=C.J(f,D.r,1)
return C.aB(w,C.p(w,C.d(d,w,w,w,w,w,w,C.l(w,w,f,w,w,w,w,w,w,w,w,13,w,w,D.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),D.f,w,w,new C.o(v,w,t,u,w,w,D.n),w,w,w,w,Z.w_,w,w,w),D.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new A.ecx(this.a,e,this.b),w,w,w,w,w,w,!1,D.a3)},
$2(d,e){return this.$3$col(d,e,D.aE)},
$S:1803}
A.ecx.prototype={
$0(){var w,v=this.b.$0()
this.c.$1(new A.ecw())
w=this.a
w.m(w.giW())
w.iG(v)},
$S:0}
A.ecw.prototype={
$0(){},
$S:0}
A.ecy.prototype={
$0(){return this.a.beV(this.b)},
$S:23}
A.ecz.prototype={
$0(){return this.a.aKS(this.b)},
$S:23}
A.ecA.prototype={
$0(){return this.a.aDt(this.b)},
$S:23}
A.ecn.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m=null,l=x.p,k=C.a([],l)
for(w=D.d.gag(B.a3O),v=new C.f5(w,new A.eck()),u=this.a,t=this.b;v.C();){s=w.gS(0)
r=D.c.j(0.08)
q=new C.aP(12,12)
p=u.d
p===$&&C.c()
o=p.d
o===$&&C.c()
n=new C.ay(o[p.e].fx.h(0,t)===s.a?D.aE:D.aY,1,D.r,-1)
k.push(C.aB(m,C.p(m,new C.y(s.c+" "+s.b,m,D.Kk,m,m,m,m,m,m,m,m,m),D.f,m,m,new C.o(r,m,new C.bI(n,n,n,n),new C.bj(q,q,q,q),m,m,D.n),m,m,m,m,D.eB,m,m,m),D.y,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new A.ecl(u,d,t,s),m,m,m,m,m,m,!1,D.a3))}w=u.d
w===$&&C.c()
v=w.d
v===$&&C.c()
if(v[w.e].fx.h(0,t)!=null)k.push(C.aB(m,C.p(m,B.fN7,D.f,m,m,new C.o(D.ej,m,m,C.n(12),m,m,D.n),m,m,m,m,D.eB,m,m,m),D.y,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new A.ecm(u,d,t),m,m,m,m,m,m,!1,D.a3))
return C.bm(!0,new C.D(D.bQ,C.x(C.a([B.fJa,D.W,C.bX(D.bG,k,D.bq,m,8,8)],l),D.E,m,D.e,D.O,0,D.p),m),!0,!1,D.af,!0,!0)},
$S:27}
A.eck.prototype={
$1(d){return!(d.d>70||d.e)},
$S:z+26}
A.ecl.prototype={
$0(){var w,v,u,t=this
C.a4(t.b,!1).O(null)
w=t.a
v=t.d
w.m(new A.ecj(w,t.c,v))
u=v.d>0||v.e
v=v.b
w.iG(u?v+" is on and playing NGMY ads. Tap it to watch full screen.":v+" is plugged in and running.")
A.fX(820,70,0.25,"tri")},
$S:0}
A.ecj.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&C.c()
w=u.d
w===$&&C.c()
w[u.e].fx.n(0,this.b,this.c.a)
v.iF()},
$S:0}
A.ecm.prototype={
$0(){C.a4(this.b,!1).O(null)
var w=this.a
w.m(new A.eci(w,this.c))
w.iG("Unplugged.")},
$S:0}
A.eci.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&C.c()
w=u.d
w===$&&C.c()
w[u.e].fx.W(0,this.b)
v.iF()},
$S:0}
A.edz.prototype={
$1(d){return new C.e1(new A.edx(this.a),null)},
$S:21}
A.edx.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m=null,l=this.a,k=new A.edy(l,e),j=l.d
j===$&&C.c()
w=j.d
w===$&&C.c()
j=C.d("TV in "+w[j.e].b,m,m,m,m,m,m,D.dd,m,m,m)
w=x.p
v=C.a([],w)
for(u=D.d.gag(B.a3O),t=new C.f5(u,new A.edq());t.C();){s=u.gS(0)
r=s.b
q=l.d
p=q.d
p===$&&C.c()
q=p[q.e].k1===s.a?D.aE:D.eQ
v.push(k.$3$color(r,new A.edr(l,s),q))}j=C.a([j,D.W,C.bX(D.bG,v,D.bq,m,8,8)],w)
if(l.d.a.length!==0){v=C.a([],w)
for(o=0;o<3;++o){u={}
t=B.d6z[o]
u.a=null
n=t.a
u.a=n
s=l.d
r=s.d
r===$&&C.c()
s=r[s.e].p1===n?D.aE:D.eQ
v.push(k.$3$color(t.b,new A.eds(u,l),s))}D.d.v(j,C.a([B.fw6,D.am,C.bX(D.bG,v,D.bq,m,8,8)],w))}j.push(D.W)
w=C.a([],w)
v=l.d
u=v.d
u===$&&C.c()
v=u[v.e]
if(v.k1!=null){v=v.p2?"\u23fb Turn this TV off":"\u23fb Turn this TV on"
w.push(k.$2(v,new A.edt(l)))}v=l.d
u=v.d
u===$&&C.c()
if(u[v.e].k1!=null&&v.a.length===0)w.push(k.$3$color("\ud83d\uddd1 Take it down",new A.edu(l),D.ej))
if(l.d.a.length===0)w.push(k.$3$color("\ud83d\udcfa A TV in every room, all on",new A.edv(l),D.cT))
if(l.d.a.length===0)w.push(k.$3$color("\u23fb All TVs off",new A.edw(l),D.bm))
j.push(C.bX(D.bG,w,D.bq,m,8,8))
return C.bm(!0,new C.D(D.bQ,C.x(j,D.E,m,D.e,D.O,0,D.p),m),!0,!1,D.af,!0,!0)},
$S:86}
A.edy.prototype={
$3$color(d,e,f){var w=null,v=f.j(0.4),u=C.n(12),t=C.J(f,D.r,1)
return C.aB(w,C.p(w,C.d(d,w,w,w,w,w,w,U.Ag,w,w,w),D.f,w,w,new C.o(v,w,t,u,w,w,D.n),w,w,w,w,Z.w_,w,w,w),D.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new A.edp(this.a,e,this.b),w,w,w,w,w,w,!1,D.a3)},
$2(d,e){return this.$3$color(d,e,D.eQ)},
$S:1804}
A.edp.prototype={
$0(){this.b.$0()
this.c.$1(new A.edo())
var w=this.a
w.m(w.giW())},
$S:0}
A.edo.prototype={
$0(){},
$S:0}
A.edq.prototype={
$1(d){return d.d>0||d.e},
$S:z+26}
A.edr.prototype={
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
A.eds.prototype={
$0(){var w,v=this.b.d
v===$&&C.c()
w=v.d
w===$&&C.c()
return w[v.e].p1=this.a.a},
$S:0}
A.edt.prototype={
$0(){var w,v=this.a.d
v===$&&C.c()
w=v.d
w===$&&C.c()
v=w[v.e]
return v.p2=!v.p2},
$S:0}
A.edu.prototype={
$0(){var w,v=this.a.d
v===$&&C.c()
w=v.d
w===$&&C.c()
v=w[v.e]
v.k1=null
v.p2=!1},
$S:0}
A.edv.prototype={
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
A.edw.prototype={
$0(){var w,v,u=this.a.d
u===$&&C.c()
u=u.gqT()
w=u.length
v=0
for(;v<w;++v)u[v].p2=!1},
$S:0}
A.edl.prototype={
$1(d){return new C.e1(new A.edj(this.a),null)},
$S:21}
A.edj.prototype={
$2(a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=new A.edk(),e=C.au(C.p(g,g,D.f,g,g,new C.o(D.aY,g,g,C.n(2),g,g,D.n),g,4,g,g,g,g,g,42),g,g,g),d=x.p,a0=C.B(C.a([C.p(g,G.apB,D.f,g,g,new C.o(g,g,g,C.n(16),g,B.c1S,D.n),g,52,g,g,g,g,g,52),D.er,B.bEL],d),D.m,g,D.e,D.i,0,g,g),a1=f.$1("Who walks the house"),a2=C.a([],d)
for(w=B.aGY.gdV(B.aGY),w=w.gag(w),v=x.s,u=x.N,t=x.ec,s=this.a;w.C();){r=w.gS(w)
q=$.ahH
p=r.a
q=q===p?D.aK.j(0.18):D.c.j(0.06)
o=new C.aP(18,18)
n=$.ahH===p
m=n?D.aK:D.bC
l=new C.ay(m,n?2:1,D.r,-1)
n=n?D.aK:D.aY
m=r.b
k=D.d.gI(m.split(" "))
m=C.a(m.split(" "),v)
j=new C.jc(m,1,g,t)
j.od(m,1,g,u)
j=j.aG(0," ")
p=$.ahH===p?D.aK:D.c
a2.push(new C.D(D.G8,C.aB(g,C.da(g,C.x(C.a([new C.qx(new C.y(k,g,D.pD,g,g,g,g,g,g,g,g,g),n,g,20,g),D.am,new C.y(j,g,new C.F(!0,p,g,g,g,g,12.5,D.H,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g),g,g,g,g,D.a1,g,1,g,g)],d),D.m,g,D.b9,D.i,0,D.p),g,g,D.b7,new C.o(q,g,new C.bI(l,l,l,l),new C.bj(o,o,o,o),g,g,D.n),D.ht,g,g,g,g,D.Gp,g,g,92),D.y,!1,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,new A.edf(s,a4,r),g,g,g,g,g,g,!1,D.a3),g))}a2=C.cn(a2,g,g,g,g,D.aM,!1)
w=f.$1("How long")
v=D.c.j(0.06)
u=C.n(16)
t=C.a([],d)
for(i=0;i<5;++i){h=B.drQ[i]
r=s.db===h
q=r?D.aE:D.L
p=new C.aP(12,12)
if(h<60)o=""+h+" seconds"
else o=h===60?"1 minute":""+(h/60|0)+" minutes"
r=r?D.w:D.ad
t.push(new C.bz(1,D.ba,C.aB(g,C.da(g,new C.ci(D.A,g,g,new C.y(o,g,new C.F(!0,r,g,g,g,g,12.5,D.u,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g),g,D.K,g,g,g,g,g,g,g),g),g,g,D.b7,new C.o(q,g,g,new C.bj(p,p,p,p),g,g,D.n),D.ht,g,g,g,g,D.u5,g,g,g),D.y,!1,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,new A.edg(s,a4,h),g,g,g,g,g,g,!1,D.a3),g))}v=C.p(g,C.B(t,D.m,g,D.e,D.i,0,g,g),D.f,g,g,new C.o(v,g,g,u,g,g,D.n),g,g,g,g,D.ev,g,g,g)
u=C.aB(g,C.p(g,B.f2m,D.f,g,g,new C.o(g,g,g,C.n(18),C.a([new C.ac(0,D.G,D.ax.j(0.35),D.cx,16)],x.V),B.c2Q,D.n),g,56,g,g,g,g,g,g),D.y,!1,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,new A.edh(s,a3),g,g,g,g,g,g,!1,D.a3)
t=D.c.j(0.06)
r=C.n(18)
return C.p(g,C.bm(!0,C.cg(C.x(C.a([e,D.aQ,a0,a1,new C.a5(g,96,a2,g),w,v,D.dT,u,D.ae,C.aB(g,C.p(g,B.f2g,D.f,g,g,new C.o(t,g,C.J(D.bC,D.r,1),r,g,g,D.n),g,g,g,g,D.bE,g,g,g),D.y,!1,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,new A.edi(s,a3),g,g,g,g,g,g,!1,D.a3)],d),D.E,g,D.e,D.O,0,D.p),D.t,g,D.y,g,D.akW,g,g,D.ah),!0,!1,D.af,!0,!0),D.f,g,g,B.b4o,g,g,g,g,g,g,g,g)},
$S:165}
A.edk.prototype={
$1(d){var w=null
return new C.D(G.ajF,C.d(d.toUpperCase(),w,w,w,w,w,w,Q.te,w,w,w),w)},
$S:133}
A.edf.prototype={
$0(){var w=this.c
this.b.$1(new A.edd(w))
A.bTQ(w.a)
this.a.m(new A.ede())},
$S:0}
A.edd.prototype={
$0(){return $.ahH=this.a.a},
$S:0}
A.ede.prototype={
$0(){},
$S:0}
A.edg.prototype={
$0(){return this.b.$1(new A.edc(this.a,this.c))},
$S:0}
A.edc.prototype={
$0(){return this.a.db=this.b},
$S:0}
A.edh.prototype={
$0(){C.a4(this.b,!1).O(null)
var w=this.a
w.czf(w.db)},
$S:0}
A.edi.prototype={
$0(){C.a4(this.b,!1).O(null)
this.a.b7B(45,!0)},
$S:0}
A.ecX.prototype={
$0(){var w=this.a,v=w.d
v===$&&C.c()
v.e=this.b
w.ax=null
w.iF()},
$S:0}
A.ecY.prototype={
$1(d){return this.a.cDs()},
$S:11}
A.ecZ.prototype={
$0(){},
$S:0}
A.edm.prototype={
$0(){return this.a.dy=this.b.as},
$S:0}
A.edb.prototype={
$0(){var w=this.b
w.iF()
w.aB=this.a.a;++w.aF},
$S:0}
A.ed3.prototype={
$0(){var w=this.a
w.cx=null
w.dy=""},
$S:0}
A.ed4.prototype={
$0(){},
$S:0}
A.ecW.prototype={
$0(){},
$S:0}
A.ed2.prototype={
$0(){},
$S:0}
A.edK.prototype={
$0(){return this.a.id=!0},
$S:0}
A.edL.prototype={
$0(){return this.a.k2=!0},
$S:0}
A.edM.prototype={
$0(){return this.a.k3=!0},
$S:0}
A.edN.prototype={
$1(d){return B.aQw.t(0,d.b)},
$S:z+4}
A.edD.prototype={
$1(d){var w
if(d.b==="gasstation"){w=this.a
w=Math.sqrt(Math.pow(w.f-d.c,2)+Math.pow(w.r-d.d,2))<135}else w=!1
return w},
$S:z+4}
A.edE.prototype={
$0(){return this.a.aPo(B.aQN)},
$S:0}
A.edF.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&C.c()
w=u.d
w===$&&C.c()
D.d.W(w[u.e].x,this.b)
v.al="crate"
v.m(v.giW())
v.eg("You picked up a crate. Carry it to the shop and walk onto the green mat by the counter to sell it at the market.",!0)
A.fX(700,60,0.25,"tri")
return null},
$S:0}
A.edG.prototype={
$0(){return this.a.abn(this.b)},
$S:0}
A.edH.prototype={
$0(){return this.a.bQK(this.b)},
$S:0}
A.edI.prototype={
$0(){return this.a.bTn(this.b)},
$S:0}
A.edJ.prototype={
$0(){return this.b.cL=this.a.a},
$S:0}
A.eaW.prototype={
$0(){},
$S:0}
A.ebC.prototype={
$0(){var w=this.a
w.y1=null
w.y2=!0},
$S:0}
A.ebz.prototype={
$1(d){return d.c==="outside"},
$S:z+5}
A.ebA.prototype={
$1(d){return d.b==="hospital"},
$S:z+4}
A.ebB.prototype={
$1(d){return!d.e&&d.r<0},
$S:z+17}
A.ebl.prototype={
$1(d){return d.c==="outside"},
$S:z+5}
A.ebm.prototype={
$1(d){return d.a.b===this.a.d},
$S:z+17}
A.ecR.prototype={
$0(){},
$S:0}
A.ebf.prototype={
$0(){return this.a.k3=!0},
$S:0}
A.ecF.prototype={
$1(d){return d.b==="hospital"},
$S:z+4}
A.ecG.prototype={
$0(){return this.a.go=!1},
$S:0}
A.ecS.prototype={
$0(){var w=this.a
w.iF()
w.aet(!0)},
$S:0}
A.ecT.prototype={
$1(d){return this.a.c8c()},
$S:11}
A.ebs.prototype={
$1(d){return!D.d.b3(this.a.d,new A.ebr(d))},
$S:35}
A.ebr.prototype={
$1(d){return d.a===this.a},
$S:z+18}
A.ebt.prototype={
$1(d){return d.a===this.a.a},
$S:z+18}
A.ecU.prototype={
$1(d){var w,v,u=this.a
if(u.c==null)return
w=++u.T
if(w>36){v=u.bE
u.B5()
if(v!=null)u.aBQ("Nobody answered the phone")
return}if(w%8<4){A.fX((w&1)===0?1046:1318,160,0.3,"sine")
if(D.o.F(u.T,8)===0)C.Tu()}},
$S:11}
A.ecV.prototype={
$0(){},
$S:0}
A.ed1.prototype={
$0(){var w=this.a
w.bE=w.bD=null},
$S:0}
A.ebR.prototype={
$4$col$on(d,e,f,g){var w=null,v=g?f.j(0.45):D.w.j(0.62),u=C.n(18),t=C.J(f,D.r,1.8)
return C.aB(w,C.p(w,C.d(d,w,w,w,w,w,w,D.j3,w,w,w),D.f,w,w,new C.o(v,w,t,u,w,w,D.n),w,w,w,D.a_O,B.bE1,w,w,w),D.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new A.ebS(e),w,w,w,w,!1,D.a3)},
$2(d,e){return this.$4$col$on(d,e,D.be,!1)},
$3$col(d,e,f){return this.$4$col$on(d,e,f,!1)},
$3$on(d,e,f){return this.$4$col$on(d,e,D.be,f)},
$S:1805}
A.ebS.prototype={
$1(d){return this.a.$0()},
$S:22}
A.ec_.prototype={
$7$about$avatar$glow$onAnswer$onDecline$onLater$who(d,e,f,g,h,i,j){var w=null,v=new A.ec0(),u=Math.min(this.a-28,340),t=C.n(30),s=C.J(D.aY,D.r,2),r=C.a([new C.ac(0,D.G,f.j(0.35),D.I,24)],x.V),q=x.p,p=C.B(C.a([e,D.er,C.E(C.x(C.a([B.fKC,D.bF,C.d(j,w,1,D.a1,w,w,w,D.a9D,w,w,w),D.bF,C.d(d,w,2,D.a1,w,w,w,M.aa8,w,w,w)],q),D.E,w,D.e,D.O,0,D.p),1)],q),D.m,w,D.e,D.i,0,w,w),o=C.a([v.$4(B.bLE,"Decline",D.ax,h)],q)
if(i!=null)o.push(v.$4(D.jU,"Later",D.aE,i))
o.push(v.$5$big(D.iF,"Answer",D.bf,g,!0))
return C.p(w,C.x(C.a([p,D.aA,C.B(o,D.E,w,D.e,D.i,0,w,w)],q),D.ak,w,D.e,D.O,0,D.p),D.f,w,w,new C.o(w,w,s,t,r,B.zh,D.n),w,w,w,D.d2,Ai.a_u,w,w,u)},
$6$about$avatar$glow$onAnswer$onDecline$who(d,e,f,g,h,i){return this.$7$about$avatar$glow$onAnswer$onDecline$onLater$who(d,e,f,g,h,null,i)},
$S:1806}
A.ec0.prototype={
$5$big(d,e,f,g,h){var w=null,v=h?58:50,u=h?58:50
return C.E(C.aB(w,C.x(C.a([C.p(w,C.X(d,D.c,w,w,w,h?30:26),D.f,w,w,new C.o(f,w,w,w,w,w,D.a6),w,u,w,w,w,w,w,v),D.fG,C.d(e,w,w,w,w,w,w,N.Ak,w,w,w)],x.p),D.m,w,D.e,D.O,0,D.p),D.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new A.ec1(g),w,w,w,w,!1,D.a3),1)},
$4(d,e,f,g){return this.$5$big(d,e,f,g,!1)},
$S:1807}
A.ec1.prototype={
$1(d){return this.a.$0()},
$S:22}
A.ebU.prototype={
$0(){var w=this.a
w.B5()
w.aBQ("You turned the call down")},
$S:0}
A.ebV.prototype={
$0(){var w=this.a
w.B5()
w.eK.push(this.b)
w.eg("Saved on your waiting list. You will be taken there when you are free.",!0)},
$S:0}
A.ebT.prototype={
$0(){var w=this.b,v=this.a
v.B5()
v.cJ=w
v.hO=0
v.ax5(w)},
$S:0}
A.ebW.prototype={
$0(){var w=this.a
w.B5()
w.cBN(this.b)},
$S:0}
A.ebZ.prototype={
$2(d,e){var w=this.a
w.b2=d
w.be=e},
$S:246}
A.ebX.prototype={
$0(){var w=this.a
return w.m(new A.ebQ(w))},
$S:0}
A.ebQ.prototype={
$0(){var w=this.a
return w.bi=!w.bi},
$S:0}
A.ebY.prototype={
$0(){var w=this.a,v=w.aJ
if(v==null)v=null
else{v=v.at
v===$&&C.c()}w=v==null?w.aC:v
if(w!=null)if(w.Q<=0.01)w.as=160
return null},
$S:0}
A.ebD.prototype={
$1(d){var w=this.a,v=w.p4
w=w.RG
return v==="ptrap"?new A.a9G(w,null):new A.a57(w,null)},
$S:1808}
A.ebE.prototype={
$1(d){var w=this.a
return new A.DZ(w.p4,w.R8,null)},
$S:z+27}
A.edO.prototype={
$1(d){var w=this.a
return new A.DZ(w.a,w.c,null)},
$S:z+27}
A.ebG.prototype={
$1(d){return A.cig(!1,this.a.CW,!1)},
$S:z+41}
A.ebF.prototype={
$1(d){return new A.Wf(this.a.fr,null)},
$S:z+71}
A.e9i.prototype={
$1(d){var w,v,u,t,s,r,q,p=null,o=this.a,n=o.d
n===$&&C.c()
w=n.d
w===$&&C.c()
n=C.d("Add to "+w[n.e].b,p,p,p,p,p,p,D.dd,p,p,p)
w=x.p
v=C.a([],w)
for(u=0;u<3;++u){t={}
s=B.dtA[u]
t.a=null
t.a=s.a
r=new C.aP(12,12)
q=new C.ay(D.b4,1,D.r,-1)
v.push(C.aB(p,C.p(p,new C.y(s.b,p,D.tg,p,p,p,p,p,p,p,p,p),D.f,p,p,new C.o(D.eQ.j(0.4),p,new C.bI(q,q,q,q),new C.bj(r,r,r,r),p,p,D.n),p,p,p,p,Z.w_,p,p,p),D.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new A.e9h(t,o,d),p,p,p,p,p,p,!1,D.a3))}return C.bm(!0,new C.D(D.bQ,C.x(C.a([n,D.au,B.fRG,D.ae,C.bX(D.bG,v,D.bq,p,8,8)],w),D.E,p,D.e,D.O,0,D.p),p),!0,!1,D.af,!0,!0)},
$S:27}
A.e9h.prototype={
$0(){C.a4(this.c,!1).O(null)
this.b.bBl(this.a.a)},
$S:0}
A.e9c.prototype={
$1(d){return d.b==="back"},
$S:z+20}
A.e9d.prototype={
$1(d){return d.b==="back"},
$S:z+20}
A.e9e.prototype={
$1(d){return Math.abs(d-this.a)>13},
$S:121}
A.e9f.prototype={
$0(){var w=this
w.b.id.push(new A.aWn(w.c,w.d,new A.CA(C.U(x.S,x.N))))
w.a.iF()},
$S:0}
A.ebw.prototype={
$0(){var w,v=this,u=v.b,t=u.c,s=v.c,r=v.d
u.c=t+(s?D.o.gVU(r)*40:r)
t=u.d
r=v.e
u.d=t+(s?D.o.gVU(r)*40:r)
t=v.a
r=t.d
r===$&&C.c()
w=r.d
w===$&&C.c()
w[r.e].a47(0,u)
t.iF()},
$S:0}
A.edn.prototype={
$0(){var w,v,u,t=this.b
t.e=D.o.F(t.e+1,4)
w=this.a
v=w.d
v===$&&C.c()
u=v.d
u===$&&C.c()
u[v.e].a47(0,t)
w.iF()},
$S:0}
A.ecu.prototype={
$0(){var w=this.b
w.f=(w.f+1)%6
this.a.iF()},
$S:0}
A.ecv.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&C.c()
w=u.d
w===$&&C.c()
D.d.W(w[u.e].x,this.b)
v.at=v.Q=0
v.iF()},
$S:0}
A.e9g.prototype={
$0(){var w=this.a,v=this.b.a
w.Q=v
w.at=100+v
w.iF()},
$S:0}
A.eas.prototype={
$0(){return this.a.aeu(-6,0)},
$S:0}
A.eat.prototype={
$0(){return this.a.aeu(6,0)},
$S:0}
A.eau.prototype={
$0(){return this.a.aeu(0,-6)},
$S:0}
A.eav.prototype={
$0(){return this.a.aeu(0,6)},
$S:0}
A.eaw.prototype={
$0(){return this.a.bBo(this.b.a)},
$S:0}
A.eax.prototype={
$0(){var w=this.a
return w.m(new A.ear(w))},
$S:0}
A.ear.prototype={
$0(){return this.a.as=-1},
$S:0}
A.eay.prototype={
$0(){var w=this.a
w.m(new A.eaq(w,this.b))},
$S:0}
A.eaq.prototype={
$0(){var w,v=this.a,u=v.as,t=this.b,s=v.d
if(u<0){s===$&&C.c()
u=s.d
u===$&&C.c()
D.d.ht(u[s.e].z,0,3,t)}else{s===$&&C.c()
w=s.d
w===$&&C.c()
w[s.e].z[u]=t}v.iF()},
$S:0}
A.eaz.prototype={
$0(){var w=this.a
w.m(new A.eap(w,this.b))},
$S:0}
A.eap.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&C.c()
w=u.d
w===$&&C.c()
w[u.e].Q=this.b
v.iF()},
$S:0}
A.eaA.prototype={
$0(){var w=this.a
w.m(new A.eao(w))},
$S:0}
A.eao.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&C.c()
w=u.d
w===$&&C.c()
u=w[u.e]
u.go=u.go==="fan"?"light":"fan"
v.iF()},
$S:0}
A.eaB.prototype={
$0(){var w=this.a
w.m(new A.ean(w,this.b))},
$S:0}
A.ean.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&C.c()
w=u.d
w===$&&C.c()
w[u.e].as=this.b
v.iF()},
$S:0}
A.eaC.prototype={
$0(){return this.a.AC(this.b.d)},
$S:0}
A.edR.prototype={
$0(){return C.a4(this.a,!1).ig()},
$S:0}
A.edT.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new A.edQ(w))},
$S:0}
A.edQ.prototype={
$0(){return this.a.aB=null},
$S:0}
A.edS.prototype={
$3(d,e,f){var w=null
return C.db(C.cpe(D.A,w,w,w,w,D.ci,D.vA,w,this.a.aB,!1,!1,!1,w,D.pl,1,w),e)},
$S:101}
A.ea4.prototype={
$0(){return this.a.A5("calls")},
$S:0}
A.ea5.prototype={
$0(){return this.a.A5("hospital")},
$S:0}
A.ea6.prototype={
$0(){return this.a.A5("shop")},
$S:0}
A.eaa.prototype={
$0(){return this.a.A5("people")},
$S:0}
A.eab.prototype={
$0(){return this.a.AC(10)},
$S:0}
A.eac.prototype={
$0(){var w=this.a
return w.m(new A.ea3(w))},
$S:0}
A.ea3.prototype={
$0(){return this.a.k2=!0},
$S:0}
A.ead.prototype={
$0(){var w=this.a
return w.m(new A.ea2(w))},
$S:0}
A.ea2.prototype={
$0(){return this.a.k3=!0},
$S:0}
A.eae.prototype={
$0(){var w=this.a
return w.m(new A.ea1(w))},
$S:0}
A.ea1.prototype={
$0(){var w=this.a
return w.y1=w.cJ},
$S:0}
A.eaf.prototype={
$0(){var w=this.a,v=w.eK.length,u=v===1?"":"s"
return w.eg(""+v+" job"+u+" waiting. You are taken to the next one when you finish this one.",!0)},
$S:0}
A.eag.prototype={
$0(){var w=this.a
return w.m(new A.ea0(w))},
$S:0}
A.ea0.prototype={
$0(){return this.a.go=!0},
$S:0}
A.eah.prototype={
$0(){var w=this.a
return w.p4?w.a2P():w.m(new A.ea_(w))},
$S:0}
A.ea_.prototype={
$0(){return this.a.R8=!0},
$S:0}
A.ea7.prototype={
$0(){var w=this.a
return w.m(new A.e9Z(w))},
$S:0}
A.e9Z.prototype={
$0(){var w=this.a
return w.h8=!w.h8},
$S:0}
A.ea8.prototype={
$0(){var w=this.a
return w.m(new A.e9Y(w))},
$S:0}
A.e9Y.prototype={
$0(){return this.a.ai=!0},
$S:0}
A.ea9.prototype={
$0(){var w=this.a
return w.m(new A.e9X(w))},
$S:0}
A.e9X.prototype={
$0(){var w=this.a
return w.y=!w.y},
$S:0}
A.e9p.prototype={
$0(){var w=this.a.ghL()
w=w==null?null:w.r
return w==null?0:w},
$S:94}
A.e9D.prototype={
$0(){return this.a.y0()},
$S:0}
A.e9C.prototype={
$1(d){return d<=5},
$S:35}
A.e9q.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n=null,m=this.a,l=m.aJ,k=m.CW
if(l!=null){m=k.gip()
k=B.aGZ.h(0,$.ahH)
if(k==null)k=B.a7J
k=l.cOf(m/1000,k)
m=k}else{l=m.d
l===$&&C.c()
w=l.d
w===$&&C.c()
l=w[l.e]
w=k.gip()
v=m.cm7()
u=B.aGZ.h(0,$.ahH)
if(u==null)u=B.a7J
t=m.fr
s=m.r
r=m.bOz()
if(m.al==null){q=m.gpm()
if(q==null)q=n
else{q=q.x
q=(q==null?n:q.r)===!0}q=q===!0}else q=!0
p=m.d
o=p.d
o===$&&C.c()
if(o[p.e].c!=="outside")k=B.I6
else{p=m.gpm()
p=p==null?n:p.amr(k.gip()/1000)
if(p==null)p=B.I6
p=C.C(p,x.hg)
o=m.gKx()
k=o==null?n:o.amr(k.gip()/1000)
D.d.v(p,k==null?B.I6:k)
k=p}l=C.C(A.iaw(l,w/1000,q,k,r,s,v,u,t),x.fX)
k=m.d
w=k.d
w===$&&C.c()
if(w[k.e].c==="outside")D.d.v(l,m.cDA())
k=!0
if(m.cJ==null){w=m.gpm()
if((w==null?n:w.x)==null){k=m.gKx()
k=(k==null?n:k.f)!=null}}D.d.v(l,k?m.css():B.I7)
m=l}return m},
$S:z+10}
A.e9r.prototype={
$1(d){var w,v,u=this.a
if(u.aJ==null){w=u.d
w===$&&C.c()
v=w.d
v===$&&C.c()
w=v[w.e].c==="outside"}else w=!1
return w?A.ilm(u.CW.gip()/1000):B.wC},
$S:z+74}
A.e9E.prototype={
$3(d,e,f){var w=null,v=D.dG.j(0.82),u=C.n(18),t=C.J(D.b8,D.r,2)
return C.p(w,C.d(e,w,w,w,w,w,w,B.fub,w,w,w),D.f,w,w,new C.o(v,w,t,u,w,w,D.n),w,w,w,w,B.bCd,w,w,w)},
$S:1809}
A.e9u.prototype={
$0(){var w=this.a,v=w.d
v===$&&C.c()
return v.a.length!==0?w.En():w.cnn(this.b)},
$S:0}
A.e9F.prototype={
$0(){var w=this.a
w.m(new A.e9o(w))
w.y0()},
$S:0}
A.e9o.prototype={
$0(){var w=this.a
w.x=!w.x
w.iF()},
$S:0}
A.e9G.prototype={
$0(){var w=this.a
return w.cx!=null?w.Sb():w.cDr()},
$S:0}
A.e9H.prototype={
$0(){var w=this.a
w.m(new A.e9n(w))
w.y0()
if(w.z)w.iG("Drag to turn all the way round. Double tap a spot on the floor to walk there.")},
$S:0}
A.e9n.prototype={
$0(){var w=this.a,v=!w.z
w.z=v
if(v&&w.cx!=null)w.Sb()
w.iF()},
$S:0}
A.e9I.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&C.c()
w=u.d
w===$&&C.c()
return v.AC(w[u.e].c!=="outside"?11:10)},
$S:0}
A.e9J.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&C.c()
w=u.d
w===$&&C.c()
if(w[u.e].c!=="outside")v.AC(11)
v.A5("calls")},
$S:0}
A.e9s.prototype={
$0(){var w=this.a
return w.m(new A.e9m(w))},
$S:0}
A.e9m.prototype={
$0(){var w=this.a,v=!w.w
w.w=v
if(v)w.iG("Voltage tester in your hand: tap an outlet, a switch or the light.")},
$S:0}
A.e9t.prototype={
$0(){var w=this.a
return w.m(new A.e9l(w))},
$S:0}
A.e9l.prototype={
$0(){var w=this.a
return w.y=!w.y},
$S:0}
A.e9v.prototype={
$0(){return this.a.PU("look")},
$S:0}
A.e9w.prototype={
$0(){return this.a.PU("furniture")},
$S:0}
A.e9x.prototype={
$0(){return this.a.PU("walls")},
$S:0}
A.e9y.prototype={
$0(){return this.a.PU("floor")},
$S:0}
A.e9z.prototype={
$0(){return this.a.PU("ceiling")},
$S:0}
A.e9A.prototype={
$0(){return this.a.PU("doors")},
$S:0}
A.e9B.prototype={
$0(){return C.a4(this.a,!1).cc(C.e0(new A.e9k(),!1,null,x.H))},
$S:0}
A.e9k.prototype={
$1(d){return B.aHZ},
$S:z+75}
A.ect.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m=null,l=C.aJ(d,m,x.w).w,k=this.a,j=k.d
j===$&&C.c()
w=x.p
j=C.a([B.fFK,D.au,C.d("Wiring "+j.gcZU()+"/"+k.d.gqT().length+" \xb7 Plumbing "+k.d.gcWx()+"/"+k.d.gcWw(),m,m,m,m,m,m,B.K6,m,m,m),D.W],w)
for(v=k.d.gqT(),u=v.length,t=0;t<v.length;v.length===u||(0,C.L)(v),++t){s=v[t]
r=D.c.j(0.05)
q=new C.aP(12,12)
p=new C.ay(s.gkO()&&s.gjR()?D.be.j(0.5):D.bC,1,D.r,-1)
if(s.gkO()&&s.gjR())o="\u2705 finished"
else{o=s.gkO()?"":"\u26a1 wiring  "
o+=s.gjR()?"":"\ud83d\udeb0 plumbing"}n=s.gkO()&&s.gjR()?D.es:D.ad
j.push(C.aB(m,C.p(m,new C.cd(D.aM,D.e,D.i,D.m,m,D.p,m,0,C.a([new C.bz(1,D.ba,new C.y(s.b,m,B.aUg,m,m,m,m,m,m,m,m,m),m),new C.y(o,m,new C.F(!0,n,m,m,m,m,12,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m,m,m,m,m,m,m,m,m)],w),m),D.f,m,m,new C.o(r,m,new C.bI(p,p,p,p),new C.bj(q,q,q,q),m,m,D.n),m,m,m,D.eH,D.bT,m,m,m),D.y,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new A.ecq(k,d,s),m,m,m,m,m,m,!1,D.a3))}j.push(D.P)
j.push(C.dT(B.fCG,new A.ecr(k,d),m))
j.push(D.P)
j.push(C.bH(B.fyO,m,new A.ecs(k,d),m))
return C.bm(!0,new C.cU(new C.aZ(0,1/0,0,l.a.b*0.75),C.cn(j,m,D.bQ,m,m,D.ah,!0),m),!0,!1,D.af,!0,!0)},
$S:27}
A.ecq.prototype={
$0(){C.a4(this.b,!1).O(null)
this.a.AC(this.c.a)},
$S:0}
A.ecr.prototype={
$0(){C.a4(this.b,!1).O(null)
var w=this.a
w.m(new A.ecp(w))
w.iG("Every room needs its wiring and plumbing again. Wire the whole house from the start.")},
$S:0}
A.ecp.prototype={
$0(){var w=this.a,v=w.d
v===$&&C.c()
v.cT8()
w.iF()},
$S:0}
A.ecs.prototype={
$0(){C.a4(this.b,!1).O(null)
$.Eb=A.aWt(D.o.F(Date.now(),1e5))
var w=this.a
w.m(new A.eco(w))
w.aet(!0)},
$S:0}
A.eco.prototype={
$0(){var w=this.a,v=$.Eb
v.toString
w.d=v
w.r="look"
w.Q=0
w.as=-1
w.at=0
w.iF()},
$S:0}
A.dv4.prototype={
$1(d){var w,v,u,t,s,r=d.b,q=14*this.b,p=D.k.ea(r.a,q),o=D.k.ea(r.b,q)
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
A.f6L.prototype={
$0(){return this.b.d=this.a.a},
$S:0}
A.f6K.prototype={
$0(){return this.a.d=null},
$S:0}
A.f6N.prototype={
$1(d){return this.a.b_1(d.gf8())},
$S:72}
A.f6O.prototype={
$1(d){return this.a.b_1(d.gf8())},
$S:208}
A.f6P.prototype={
$1(d){return this.a.b_0()},
$S:118}
A.f6M.prototype={
$1(d){return this.a.b_0()},
$S:146}
A.fz3.prototype={
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
$S:1810}
A.fza.prototype={
$3$note(d,e,f){var w=this.a
w.a.push(d)
w.b.push(e)
if(f!=null)w.c.push(f)},
$2(d,e){return this.$3$note(d,e,null)},
$S:z+76}
A.fz5.prototype={
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
A.fzb.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
for(w=this.a.x,v=w.length,u=0;u<=1;u+=0.02){t=A.o5(d,e,u)
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
A.fz4.prototype={
$2(d,e){return this.a.$2(d,e)!=null},
$S:z+78}
A.fz1.prototype={
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
n=new A.fz2(d,e)
o=this.b
k=!o.$1(m)
j=!o.$1(l)
if(k&&j)return n.$1(m)<=n.$1(l)?m:l
if(k)v=m
else v=j?l:null
return v},
$S:z+79}
A.fz2.prototype={
$1(d){return d.aE(0,this.a).guV()+this.b.aE(0,d).guV()},
$S:z+80}
A.fyW.prototype={
$3(d,e,f){var w,v,u,t=this
if(!t.a.$2(d,e))return B.rK
w=f>=3?null:t.b.$2(d,e)
if(w==null)return C.a([new A.q((d.a+e.a)/2,430,(d.c+e.c)/2)],x.o)
v=f+1
u=C.C(t.$3(d,w,v),x.Q)
u.push(w)
D.d.v(u,t.$3(w,e,v))
return u},
$2(d,e){return this.$3(d,e,0)},
$S:z+81}
A.fz7.prototype={
$7$note(a2,a3,a4,a5,a6,a7,a8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0=A.hup(a2),a1=new A.q(a2.c,a4,a2.d)
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
g=u.$1(A.o5(h,i,f))
f+=0.02}if(g)for(m=r.$2(h,i),l=m.length,e=0;e<m.length;m.length===l||(0,C.L)(m),++e)w.$2(m[e],D.d.gak(v.b))}w.$3$note(i,a1,k?a8:q)
q=null}},
$6(d,e,f,g,h,i){return this.$7$note(d,e,f,g,h,i,null)},
$S:z+104}
A.fz9.prototype={
$1(d){var w=d.b,v=this.a
switch(w){case"townsign":v.$7$note(d,255,250,430,520,60,"The biggest billboard in the city: NGMY Town")
break
case"cornersign":v.$7$note(d,115,120,210,260,50,"A corner billboard: NGMY Town")
break
case"adboard":v.$7$note(d,160,142,330,410,55,"A big NGMY ad billboard")
break
case"tower":v.$7$note(d,430,(w==="hq"?278:A.htJ(B.zk[d.f]))+40,150,210,20,"A tower with NGMY ad boards")
break
case"hq":v.$7$note(d,440,312,190,250,20,"The NGMY company building")
break
default:v.$7$note(d,75,48,130,175,45,"An NGMY billboard")}},
$S:z+29}
A.fz8.prototype={
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
D.d.c6(p.b,v,A.o5(s,r,q/(w.gL(u)+1)))}}}},
$S:z+29}
A.fz6.prototype={
$1(d){var w
this.b.$0()
w=x.o
this.c.push(new A.Mn(C.a([B.hbU,B.fYj,B.h_k],w),C.a([B.hcq,B.fZA,B.h1X],w),55,8,"Inside the "+B.hC.h(0,d.b).a.toLowerCase(),d,!1,null,null))
this.a.d=!0},
$S:z+29}
A.fyX.prototype={
$1(d){return d.b==="townsign"},
$S:z+4}
A.fyY.prototype={
$2(d,e){var w=this.a
return D.k.aK(Math.pow(d.c-w.a.a,2)+Math.pow(d.d-w.a.c,2),Math.pow(e.c-w.a.a,2)+Math.pow(e.d-w.a.c,2))},
$S:z+16}
A.fyV.prototype={
$1(d){return Math.atan2(d.d-1000,d.c)},
$S:z+84}
A.fyZ.prototype={
$2(d,e){var w=this.a
return J.Dm(w.$1(d),w.$1(e))},
$S:z+16}
A.fz_.prototype={
$1(d){return d.b==="bighouse"},
$S:z+4}
A.fz0.prototype={
$1(d){return d.b===this.a},
$S:z+4}
A.cgo.prototype={
$0(){var w=0,v=C.j(x.P),u=1,t=[],s,r,q,p,o,n
var $async$$0=C.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:u=3
w=6
return C.b($.r9().jg(0,"assets/images/ngmy_logo.png"),$async$$0)
case 6:s=e
w=7
return C.b(C.fCz(J.eS(J.vH(s)),null),$async$$0)
case 7:r=e
o=$
n=J
w=8
return C.b(r.lL(),$async$$0)
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
$S:50}
A.fQp.prototype={
$4(d,e,f,g){var w,v,u=null,t=e*0.05,s=C.fw(u,u,1,u,C.cS(u,u,u,u,u,u,u,u,u,C.l(u,u,f,u,u,u,u,u,u,u,u,e,u,u,D.u,u,u,!0,u,t,u,u,u,u,u,u),d),D.a4,D.bX,u,D.dA,D.bV)
s.ej()
w=s.b.c
v=this.a
if(w>v){s=C.fw(u,u,1,u,C.cS(u,u,u,u,u,u,u,u,u,C.l(u,u,f,u,u,u,u,u,u,u,u,e*v/w,u,u,D.u,u,u,!0,u,t,u,u,u,u,u,u),d),D.a4,D.bX,u,D.dA,D.bV)
s.ej()}s.a3(this.b,new C.t(this.c+v/2-s.b.c/2,g))},
$S:1811}
A.fQn.prototype={
$1(d){var w,v,u,t,s,r=null,q=this.a,p=this.b,o=d.d-d.b
if(q!=null){w=q.c
v=q.d
u=Math.min((d.c-d.a)/w,o/v)
o=C.bK(d.gbK(),v*u,w*u)
$.S()
t=C.I()
t.Q=D.ci
p.oC(q,new C.a3(0,0,w,v),o,t)}else{s=C.fw(r,r,r,r,C.cS(r,r,r,r,r,r,r,r,r,C.l(r,r,this.c,r,r,r,r,r,r,r,r,o*0.6,r,r,D.u,r,r,!0,r,r,r,r,r,r,r,r),"NGMY"),D.a4,D.bX,r,D.dA,D.bV)
s.ej()
q=d.gbK()
o=s.b
w=o.c
o=o.a.c
s.a3(p,q.aE(0,new C.t(w/2,o.gbb(o)/2)))}},
$S:1812}
A.fQm.prototype={
$4$w(d,e,f,g){var w=null,v=C.fw(w,w,w,w,C.cS(w,w,w,w,w,w,w,w,w,C.l(w,w,this.a,w,w,w,w,w,w,w,w,f,w,w,g,w,w,!0,w,f*0.08,w,w,w,w,w,w),d),D.a4,D.bX,w,D.dA,D.bV)
v.o0(this.b.a*0.9)
v.a3(this.c,e.aE(0,new C.t(v.b.c/2,0)))},
$3(d,e,f){return this.$4$w(d,e,f,D.u)},
$S:1813}
A.fQo.prototype={
$1(d){var w=null,v=this.a.b*0.16
v=C.fw(w,w,w,w,C.cS(w,w,w,w,w,w,w,w,w,C.l(w,w,w,w,w,w,w,w,w,w,w,v,w,w,D.u,w,w,!0,w,v*0.08,w,w,w,w,w,w),d),D.a4,D.bX,w,D.dA,D.bV)
v.ej()
return v.b.c},
$S:507}
A.fzs.prototype={
$2(d,e){return this.a===d?e:0},
$S:506}
A.fze.prototype={
$1(d){return d.b==="right"},
$S:z+20}
A.fzp.prototype={
$0(){var w=C.a([],x.z),v=new A.fl(w)
v.f=1
v.x=$.dS=$.dS+1
v.aP(B.heN,B.h24,B.Bh)
v.aZ(B.fY7,B.h8d,B.i0,0.5)
v.aP(B.aWh,B.h9O,B.Bh)
v.aP(B.aWh,B.h5Q,B.Bh)
return w},
$S:z+85}
A.fzq.prototype={
$1(d){var w=this,v=w.a,u=v.b
A:{if("left"===u){v=A.nC(d,0,1.5707963267948966,new A.q(-w.b/2,0,v.c+w.c/2-40))
break A}if("right"===u){v=A.nC(d,0,-1.5707963267948966,new A.q(w.b/2,0,v.c+w.c/2-40))
break A}v=A.nC(d,0,0,new A.q(v.c,0,0))
break A}return v},
$S:z+86}
A.fzf.prototype={
$1(d){return d.b==="back"},
$S:z+20}
A.fzg.prototype={
$1(d){return d.c},
$S:z+87}
A.fzh.prototype={
$2(d,e){return e},
$S:79}
A.fzi.prototype={
$3(d,e,f){return K.RX(d,e,0,f+this.a)},
$S:24}
A.fzk.prototype={
$2(a8,a9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=this
if(a8==null)return
w=A.aPP(a8)
v=a7.a
u=A.hbp(v,w,a9)
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
n.aZ(new A.q(h+g*1.4,r,f),new A.q(2.6,s+3,t+3),B.LY,0.5)
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
k.push(new A.fP(C.a([new A.q(e,a1,d),new A.q(e,a1,a0),new A.q(e,j,a0),new A.q(e,j,d)],a2),m,new A.fzl(o,v,a9),320,a3,9,1,l,!1))
a4=h+g*0.05
k.push(new A.fP(C.a([new A.q(a4,a1,a0),new A.q(a4,a1,d),new A.q(a4,j,d),new A.q(a4,j,a0)],a2),m,new A.fzm(o,v,a9),320,a3,9,1,l,!1))}}else{h=u.c
n.aZ(new A.q(h,r,1.4),new A.q(t+3,s+3,2.6),B.LY,0.5)
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
k.push(new A.fP(C.a([new A.q(a1,a3,2.95),new A.q(j,a3,2.95),new A.q(j,a2,2.95),new A.q(a1,a2,2.95)],a5),m,new A.fzn(o,v,a9),320,a6,9,1,l,!1))
k.push(new A.fP(C.a([new A.q(j,a3,0.05),new A.q(a1,a3,0.05),new A.q(a1,a2,0.05),new A.q(j,a2,0.05)],a5),m,new A.fzo(o,v,a9),320,a6,9,1,l,!1))}}n.e=n.x=0
v=v.p2?"It is on and playing "+E.km[D.o.F(o,8)].a+". Tap it to watch full screen with the remote.":"The TV is off. Tap it to turn it on."
a7.e.n(0,m,new A.cX(w.b,v,new A.q(0,r,4),110))},
$S:1816}
A.fzl.prototype={
$3(d,e,f){return K.RX(d,e,this.a,f+this.b.a+this.c*3)},
$S:24}
A.fzm.prototype={
$3(d,e,f){return K.RX(d,e,this.a,f+this.b.a+this.c*3)},
$S:24}
A.fzn.prototype={
$3(d,e,f){return K.RX(d,e,this.a,f+this.b.a+this.c*3)},
$S:24}
A.fzo.prototype={
$3(d,e,f){return K.RX(d,e,this.a,f+this.b.a+this.c*3)},
$S:24}
A.fzr.prototype={
$2(d,e){var w=this.a,v=w.f,u=w.r
w.f=1
w.r=!1
w.b=0
w.dR(new A.q(d,e,0),new A.q(d,e,2.2),0.7,B.LO,0.7,10)
w.f=v
w.r=u},
$S:246}
A.fzj.prototype={
$1(d){return d.b===this.a.a},
$S:z+14}
A.fsn.prototype={
$2(d,e){return this.a===d?e:0},
$S:506}
A.fso.prototype={
$5(d,e,f,g,h){var w=d.a9(0,e.aI(0,g)).a9(0,new A.q(0,h,0)),v=this.a
A.kI(v,w.a9(0,f.aI(0,0.1)),e,B.ea,26,30,B.kD,f,0)
A.kI(v,w.a9(0,f.aI(0,0.2)),e,B.ea,22,26,B.i0,f,0.6)
A.kI(v,w.a9(0,f.aI(0,0.3)),e,B.ea,22,1.2,B.kD,f,0)
A.kI(v,w.a9(0,f.aI(0,0.3)),e,B.ea,1.2,26,B.kD,f,0)},
$S:z+88}
A.fsj.prototype={
$5(d,e,f,g,h){var w=d.a9(0,e.aI(0,g)),v=this.a,u=v.b
A.kI(v,w.a9(0,new A.q(0,42,0)).a9(0,f.aI(0,0.1)),e,B.ea,34,84,B.kD,f,0)
v.b=h
A.kI(v,w.a9(0,new A.q(0,41,0)).a9(0,f.aI(0,0.2)),e,B.ea,28,80,B.vE,f,0.2)
v.b=0
A.kI(v,w.a9(0,new A.q(0,58,0)).a9(0,f.aI(0,0.3)),e,B.ea,20,26,B.MN,f,0)
A.kI(v,w.a9(0,new A.q(0,22,0)).a9(0,f.aI(0,0.3)),e,B.ea,20,26,B.MN,f,0)
v.aZ(w.a9(0,e.aI(0,9)).a9(0,new A.q(0,40,0)).a9(0,f.aI(0,1)),new A.q(2.6,2.6,2.6),B.F1,0.8)
v.b=u},
$S:z+123}
A.fsk.prototype={
$5$poster(d,e,f,g,h){var w=C.a([d,e,f,g],x.o),v=h<0?A.haS():new A.fsl(h),u=h===0,t=u?1000:256
u=u?424:256
return this.a.push(new A.fP(w,0,v,t,u,1,2,this.b,!1))},
$4(d,e,f,g){return this.$5$poster(d,e,f,g,-1)},
$S:z+90}
A.fsl.prototype={
$3(d,e,f){return A.fQl(d,e,f,this.a)},
$S:24}
A.frL.prototype={
$1(d){var w=d.b
return w==="pole"||w==="lamppost"},
$S:z+4}
A.frM.prototype={
$2(d,e){return D.k.aK(d.c,e.c)},
$S:z+16}
A.frN.prototype={
$1(d){return this.a.cy.aj(0,d.a)},
$S:z+4}
A.frY.prototype={
$1(d){return this.a.k4.t(0,d.a)},
$S:z+4}
A.fs8.prototype={
$1(d){return B.f4d.t(0,d.b)},
$S:z+4}
A.fsm.prototype={
$3(d,e,f){var w=this.b
return A.vD(new A.q(d,e,f),this.a).a9(0,new A.q(w.c,0,w.d))},
$S:z+24}
A.fsd.prototype={
$3(d,e,f){return A.nh(d,e,f,this.a.a+D.k.bf(f/7))},
$S:24}
A.fse.prototype={
$3(d,e,f){return A.nh(d,e,f,this.a.a+D.k.bf(f/7))},
$S:24}
A.fsf.prototype={
$3(d,e,f){return A.H6(d,e,f,"NGMY TOWN",this.a)},
$S:24}
A.fsg.prototype={
$3(d,e,f){return A.H6(d,e,f,"NGMY TOWN",this.a)},
$S:24}
A.fsh.prototype={
$3(d,e,f){return A.nh(d,e,f,this.a.a+D.k.bf(f/7))},
$S:24}
A.fsi.prototype={
$3(d,e,f){return A.nh(d,e,f,this.a.a+4+D.k.bf(f/7))},
$S:24}
A.frO.prototype={
$3(d,e,f){return A.nh(d,e,f,this.a.a+D.k.bf(f/7))},
$S:24}
A.frP.prototype={
$3(d,e,f){return A.nh(d,e,f,this.a.a+7+D.k.bf(f/7))},
$S:24}
A.frQ.prototype={
$3(d,e,f){return A.nh(d,e,f,this.a.a+3+D.k.bf(f/7))},
$S:24}
A.frR.prototype={
$3(d,e,f){return A.nh(d,e,f,this.a.a+5+D.k.bf(f/7))},
$S:24}
A.frS.prototype={
$3(d,e,f){return A.nh(d,e,f,this.a.a+1+D.k.bf(f/7))},
$S:24}
A.frT.prototype={
$3(d,e,f){return A.nh(d,e,f,this.a.a+2+D.k.bf(f/7))},
$S:24}
A.frU.prototype={
$3(d,e,f){return A.H6(d,e,f,"NGMY COMPANY","Building the movement")},
$S:24}
A.frV.prototype={
$3(d,e,f){return A.H6(d,e,f,"NGMY","New Global Movement for Youth")},
$S:24}
A.frW.prototype={
$3(d,e,f){return A.H6(d,e,f,"NGMY COMPANY","Building the movement")},
$S:24}
A.frX.prototype={
$3(d,e,f){return A.H6(d,e,f,"NGMY","New Global Movement for Youth")},
$S:24}
A.frZ.prototype={
$3(d,e,f){return A.nh(d,e,f,this.a.a+4+D.k.bf(f/7))},
$S:24}
A.fs_.prototype={
$3(d,e,f){return A.nh(d,e,f,this.a.a+6+D.k.bf(f/7))},
$S:24}
A.fs0.prototype={
$3(d,e,f){return A.nh(d,e,f,this.a.a+2+D.k.bf(f/7))},
$S:24}
A.fs1.prototype={
$3(d,e,f){return A.nh(d,e,f,this.a.a+3+D.k.bf(f/7))},
$S:24}
A.fs2.prototype={
$3(d,e,f){return A.H6(d,e,f,"NGMY STORE","Everything you need")},
$S:24}
A.fs3.prototype={
$3(d,e,f){return A.H6(d,e,f,"NGMY UBER","Rides home")},
$S:24}
A.fs4.prototype={
$3(d,e,f){return A.H6(d,e,f,"NGMY UBER","Rides home")},
$S:24}
A.fs5.prototype={
$3(d,e,f){return A.H6(d,e,f,"NGMY LICENCE","Get your Uber licence")},
$S:24}
A.fs6.prototype={
$3(d,e,f){return A.H6(d,e,f,"NGMY GAS","Open 24 hours")},
$S:24}
A.fs7.prototype={
$3(d,e,f){return A.nh(d,e,f,this.a.a*2+this.b+1)},
$S:24}
A.fs9.prototype={
$1(d){return d.b===this.a.a&&!d.x&&d.Q.length!==0},
$S:z+14}
A.fsa.prototype={
$1(d){return d.b===this.a.a&&d.x},
$S:z+14}
A.fsb.prototype={
$3(d,e,f){return A.fQl(d,e,f,0)},
$S:24}
A.fsc.prototype={
$3(d,e,f){return A.fQl(d,e,f,0)},
$S:24}
A.fCr.prototype={
$2(d,e){var w,v=this.a
if(v!=null){w=v.b-d
v=v.c-e
v=w*w+v*v<1e4}else v=!0
return v},
$S:1817}
A.fCo.prototype={
$1(d){return D.d.t(B.HY,d.b)},
$S:z+4}
A.fCp.prototype={
$1(d){return d.b===this.a.a},
$S:z+14}
A.fCq.prototype={
$1(d){return d.b===this.a.a},
$S:z+14}
A.fiE.prototype={
$5(d,e,f,g,h){var w,v,u,t,s,r,q,p,o,n,m,l,k,j
for(w=d.length,v=x.z,u=this.a,t=-f/2,s=u.a,r=this.b,q=0,p=0;p<w;++p){o=d[p]
n=o.a
m=C.a([],v)
l=new A.fl(m)
l.b=u.b
l.f=u.f
l.r=!0
l.aP(new A.q(0,t,0),new A.q(g,f,g),h)
k=(q&1)===0?1:-1
j=n>0?1:-1
D.d.v(s,A.nC(m,r*k*j,0,new A.q(n,e,o.b)));++q}},
$S:1818}
A.fiu.prototype={
$3(d,e,f){var w=this.a,v=this.b,u=this.c
return new A.q(w.c+v*d+u*f,e,w.d+u*d-v*f)},
$2(d,e){return this.$3(d,e,0)},
$S:z+43}
A.fte.prototype={
$3(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k=x.z,j=C.a([],k),i=new A.fl(j)
i.b=this.a
i.r=!0
d.$1(i)
k=C.a([],k)
for(j=A.bCr(j,e,B.dX),w=j.length,v=f.a,u=f.b,t=f.c,s=x.o,r=0;r<j.length;j.length===w||(0,C.L)(j),++r){q=j[r]
p=C.a([],s)
for(o=q.a,n=o.length,m=0;m<o.length;o.length===n||(0,C.L)(o),++m){l=o[m]
p.push(new A.q(l.a+v,l.b+u,l.c+t))}k.push(new A.kp(p,q.b,q.c,q.d,q.e,q.f,q.r,q.w,q.x,q.y,q.z))}D.d.v(this.b.a,k)},
$S:z+91}
A.fsM.prototype={
$6$joint(d,e,f,g,h,i){var w=this.a
w.Th(d,e,f,h,!1,g,this.b)
if(this.c&&i)w.ec(e,g*1.04,h,3,6)},
$5(d,e,f,g,h){return this.$6$joint(d,e,f,g,h,!0)},
$S:z+92}
A.fsN.prototype={
$1(d){return d.fV(B.dX,2.6,B.Yx,this.a,this.b,0.15)},
$S:z+1}
A.fsO.prototype={
$1(d){return d.ec(B.dX,2.6,D.bO,3,this.a)},
$S:z+1}
A.fsP.prototype={
$1(d){return d.ec(B.dX,5.2,this.a,this.b,this.c+2)},
$S:z+1}
A.ft_.prototype={
$1(d){var w=this,v=w.d?12:8
return d.Th(B.dX,B.aaK,w.a,w.b,!1,w.c,v)},
$S:z+1}
A.ft7.prototype={
$1(d){return d.L8(B.dX,B.h7e,5.1,B.bfA,!1,12)},
$S:z+1}
A.ft8.prototype={
$1(d){return d.ec(B.dX,2.7,this.a,this.b,this.c)},
$S:z+1}
A.ft9.prototype={
$1(d){var w=this,v=w.a?6.2:6.7,u=w.c
if(u<4)u=4
return d.ec(B.dX,v,w.b,u,w.d)},
$S:z+1}
A.fta.prototype={
$1(d){var w=this.b,v=w?6:4
w=w?12:8
return d.ec(B.dX,4.7,this.a,v,w)},
$S:z+1}
A.ftb.prototype={
$1(d){return d.ec(B.dX,3,this.a,this.b,this.c)},
$S:z+1}
A.ftc.prototype={
$1(d){return d.ec(B.dX,1.25,this.a,3,6)},
$S:z+1}
A.ftd.prototype={
$1(d){return d.ec(B.dX,1,D.c,3,6)},
$S:z+1}
A.fsQ.prototype={
$1(d){return d.ec(B.dX,1.15,this.a,2,6)},
$S:z+1}
A.fsR.prototype={
$1(d){return d.ec(B.dX,1,this.a,3,6)},
$S:z+1}
A.fsS.prototype={
$1(d){return d.ec(B.dX,1,this.a,2,6)},
$S:z+1}
A.fsT.prototype={
$1(d){var w=C.ar(this.a,D.c,0.1)
w.toString
return d.ec(B.dX,1,w,2,6)},
$S:z+1}
A.fsU.prototype={
$1(d){var w=this.b,v=w?4:3
w=w?9:6
return d.ec(B.dX,5,this.a,v,w)},
$S:z+1}
A.fsV.prototype={
$1(d){return d.ec(B.dX,3.6,this.a,3,this.b)},
$S:z+1}
A.fsW.prototype={
$1(d){return d.ec(B.dX,4.8,this.a,this.b,this.c)},
$S:z+1}
A.fsX.prototype={
$1(d){var w=this.b,v=w?4:3
w=w?9:6
return d.ec(B.dX,6.2,this.a,v,w)},
$S:z+1}
A.fsY.prototype={
$1(d){return d.ec(B.dX,4.2,this.a,3,this.b)},
$S:z+1}
A.fsZ.prototype={
$1(d){var w=this.b,v=w?4:3
w=w?9:6
return d.ec(B.dX,5.1,this.a,v,w)},
$S:z+1}
A.ft0.prototype={
$1(d){return d.ec(B.dX,3.4,this.a,3,this.b)},
$S:z+1}
A.ft1.prototype={
$1(d){var w=C.ar(this.a,D.c,Math.abs(0.08))
w.toString
return d.ec(B.dX,2.6,w,this.b,this.c)},
$S:z+1}
A.ft2.prototype={
$1(d){return d.ec(B.dX,4.9,this.a,this.b,this.c)},
$S:z+1}
A.ft3.prototype={
$1(d){return d.ec(B.dX,3,this.a,3,this.b)},
$S:z+1}
A.ft4.prototype={
$1(d){var w=this.b,v=w?4:3
w=w?9:6
return d.ec(B.dX,5,this.a,v,w)},
$S:z+1}
A.ft5.prototype={
$1(d){return d.ec(B.dX,3.6,this.a,3,this.b)},
$S:z+1}
A.ft6.prototype={
$1(d){return d.ec(B.dX,2.3,this.a,3,6)},
$S:z+1}
A.fmt.prototype={
$4(d,e,f,g){var w,v,u,t,s,r,q,p
for(w=this.a,v=e/2+0.2,u=d-8,t=-e/2-0.2,s=d/2+0.2,r=e-8,q=-d/2-0.2,p=f;p<g;p+=22){A.kI(w,new A.q(0,p,v),B.hI,B.ea,u,9,B.i0,B.iu,0.6)
A.kI(w,new A.q(0,p,t),B.qV,B.ea,u,9,B.i0,B.tj,0.6)
A.kI(w,new A.q(s,p,0),B.tj,B.ea,r,9,B.i0,B.hI,0.6)
A.kI(w,new A.q(q,p,0),B.iu,B.ea,r,9,B.i0,B.qV,0.6)}},
$S:1819}
A.fzx.prototype={
$4$alongX(d,e,f,g){var w,v,u,t,s,r,q,p,o,n
for(w=this.a,v=0;v<=f;++v){u=A.o5(d,e,v/f)
w.aDS(new A.q(u.a,4,u.c),B.hfo,B.Yk,!1,0.05)}t=A.o5(d,e,0.5)
for(s=e.aE(0,d).guV()+0.15,r=t.a,q=t.c,p=0;p<2;++p){o=B.dfk[p]
n=g?new A.q(s,0.16,0.3):new A.q(0.3,0.16,s)
w.aZ(new A.q(r,o,q),n,B.Yk,0.05)}},
$3(d,e,f){return this.$4$alongX(d,e,f,!0)},
$S:z+94}
A.fzu.prototype={
$2(d,e){return this.a.jk(A.H7(d,0.35,3),0.06,e,!1,0.4,6)},
$S:z+95}
A.fzt.prototype={
$1(d){return this.a.jk(A.H7(d,0.5,3),0.14,B.pX,!1,0.3,8)},
$S:z+96}
A.fzw.prototype={
$2$col(d,e){return this.a.jk(A.H7(d,0.4,3),0.055,e,!1,0.35,6)},
$1(d){return this.$2$col(d,B.Yt)},
$S:z+97}
A.fzv.prototype={
$5$h$w(d,e,f,g,h){var w=this.a
w.b=d
w.aZ(e,new A.q(h,g,0.06),f,0.3)},
$3(d,e,f){return this.$5$h$w(d,e,f,0.7,0.45)},
$4$w(d,e,f,g){return this.$5$h$w(d,e,f,0.7,g)},
$S:z+98}
A.fAs.prototype={
$0(){return A.fX(1320,120,0.25,"tri")},
$S:0}
A.dSH.prototype={
$1(d){return this.a},
$S:40}
A.dSI.prototype={
$0(){return C.a4(this.a,!1).ig()},
$S:0}
A.dSJ.prototype={
$0(){return this.a.rC(A.b0U("","",!1))},
$S:0}
A.dSK.prototype={
$0(){return this.a.rC(B.dD2)},
$S:0}
A.dSO.prototype={
$0(){return this.a.rC(A.b0U("wiring","",!1))},
$S:0}
A.dSP.prototype={
$0(){return this.a.rC(A.b0U("plumbing","",!1))},
$S:0}
A.dSQ.prototype={
$0(){return this.a.rC(A.b0U("fix","",!1))},
$S:0}
A.dSR.prototype={
$0(){return this.a.rC(A.cig(!1,null,!1))},
$S:0}
A.dSS.prototype={
$0(){return this.a.rC(A.cig(!1,null,!0))},
$S:0}
A.dST.prototype={
$0(){return this.a.rC(B.e7P)},
$S:0}
A.dSU.prototype={
$0(){return this.a.rC(new A.as_(!1,null))},
$S:0}
A.dSV.prototype={
$0(){return this.a.rC(B.dN6)},
$S:0}
A.dSL.prototype={
$0(){var w=this.b.a
w=w==="house"?B.hjD:A.b0U("",w,!1)
return this.a.rC(w)},
$S:0}
A.dSM.prototype={
$0(){return this.a.rC(B.dJO)},
$S:0}
A.dSN.prototype={
$0(){return this.a.rC(B.aHZ)},
$S:0}
A.f6B.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new A.f6A())},
$S:11}
A.f6A.prototype={
$0(){},
$S:0}
A.cxi.prototype={
$0(){$.ajn=!$.ajn
A.hdT()
A.fX($.ajn?520:420,60,0.25,"tri")},
$S:0}
A.cxj.prototype={
$0(){$.ajm=!$.ajm
A.hdT()
A.fX($.ajm?520:420,60,0.25,"tri")},
$S:0}
A.fRB.prototype={
$1(d){var w,v,u,t,s,r,q,p,o=null,n=C.aJ(d,o,x.w).w,m=this.b,l=this.c,k=l.length,j=x.p,i=C.a([C.d(this.a,o,o,o,o,o,o,D.dd,o,o,o),D.au,C.d(""+new C.Z(m,new A.fRA(),C.T(m).k("Z<1>")).gL(0)+" of "+k+" steps done",o,o,o,o,o,o,B.K6,o,o,o),D.W],j)
for(w=0;w<k;++w){v=D.c.j(0.05)
u=new C.aP(14,14)
t=new C.ay(m[w]?D.be.j(0.6):D.bC,1,D.r,-1)
s=m[w]
r=s?"\u2705":""+(w+1)+"."
q=s?D.c:D.aE
p=l[w]
s=s?D.aB:D.c
i.push(C.p(o,new C.cd(D.aM,D.e,D.i,D.E,o,D.p,o,0,C.a([new C.y(r,o,new C.F(!0,q,o,o,o,o,14,D.u,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o),o,o,o,o,o,o,o,o,o),D.as,new C.bz(1,D.ba,new C.y(p,o,new C.F(!0,s,o,o,o,o,13,o,o,o,o,o,1.4,o,o,o,o,o,o,o,o,o,o,o,o,o),o,o,o,o,o,o,o,o,o),o)],j),o),D.f,o,o,new C.o(v,o,new C.bI(t,t,t,t),new C.bj(u,u,u,u),o,o,D.n),o,o,o,D.cu,D.bg,o,o,o))}return C.bm(!0,new C.cU(new C.aZ(0,1/0,0,n.a.b*0.75),C.cn(i,o,D.bQ,o,o,D.ah,!0),o),!0,!1,D.af,!0,!0)},
$S:27}
A.fRA.prototype={
$1(d){return d},
$S:112}
A.bXi.prototype={
$0(){return C.a4(this.a,!1).ig()},
$S:0}
A.daS.prototype={
$0(){var w=this.a,v=w.ger(0),u=this.b
v.r=u==="practice"
u=u==="test"
v.y=u
if(u)v.f=v.e=!1
w.qC()},
$S:0}
A.daQ.prototype={
$0(){var w=this.a
w.y=this.b
w.z=this.c},
$S:0}
A.daR.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new A.daP(w))},
$S:0}
A.daP.prototype={
$0(){return this.a.y=null},
$S:0}
A.daD.prototype={
$0(){return this.a.x=0},
$S:0}
A.daE.prototype={
$0(){return this.a.x=0},
$S:0}
A.daC.prototype={
$1(d){var w=this.a.ger(0).b
return new C.bd(w,C.a7(w).k("bd<2>")).t(0,d)},
$S:3}
A.daF.prototype={
$1(d){return d.a===this.a},
$S:z+13}
A.daG.prototype={
$2(d,e){return e===this.a},
$S:457}
A.daH.prototype={
$0(){var w=this.a
w.w=""
w.qC()},
$S:0}
A.daI.prototype={
$1(d){return d.a===this.a},
$S:z+7}
A.daJ.prototype={
$0(){var w=this.a,v=this.b
if(w.w===v)v=""
w.w=v
w.x=v.length===0?0:this.c},
$S:0}
A.daK.prototype={
$1(d){return d.a===this.a},
$S:z+7}
A.daL.prototype={
$0(){var w=this.a
w.qC()
w.x=this.b},
$S:0}
A.daM.prototype={
$0(){var w=this.a
w.qC()
w.x=this.b},
$S:0}
A.daN.prototype={
$0(){return this.a.x=this.b},
$S:0}
A.daO.prototype={
$0(){var w=this.a,v=w.ger(0),u=v.a
v.a=!u
if(u)v.d=!1
w.qC()},
$S:0}
A.daT.prototype={
$0(){var w,v=this.a,u=v.ger(0)
u.a=!0
u.d=!1
w=this.b
if(w.e)u.w=!0
u.z=w.r
v.ax=v.at.gip()/1000
v.qC()},
$S:0}
A.daU.prototype={
$0(){var w=this.a,v=w.ger(0)
v.d=v.a=!0
w.qC()},
$S:0}
A.db2.prototype={
$1(d){return!d},
$S:112}
A.dbb.prototype={
$0(){var w=this.a.gz8()
return A.fRz(this.b,w.b,w.d,this.c)},
$S:0}
A.dbi.prototype={
$1(d){var w,v,u,t,s=C.a([],x.z),r=this.a,q=r.ger(0),p=q.z
if(p.length!==0){p=r.at.gip()
w=r.ax
v=q.z
u=v==="fire"?7:4.5
t=p/1000-w<u
p=v}else t=!1
if(!t)q=q.w&&p.length!==0
else q=!0
if(q){q=t?p:"smolder"
A.huu(new A.fl(s),q,new A.db_(),0.32,r.at.gip()/1000)}return s},
$S:z+10}
A.db_.prototype={
$1(d){return new A.q(d.a*0.32,-0.2+d.b*0.32,0.8+d.c*0.32)},
$S:z+6}
A.db3.prototype={
$0(){return this.a.aAU("learn")},
$S:0}
A.db4.prototype={
$0(){return this.a.aAU("practice")},
$S:0}
A.dbc.prototype={
$0(){return this.a.aAU("test")},
$S:0}
A.dbd.prototype={
$0(){var w=this.a
return w.m(new A.db1(w))},
$S:0}
A.db1.prototype={
$0(){var w=this.a,v=w.ger(0)
v.e=!v.e
w.qC()},
$S:0}
A.dbe.prototype={
$0(){var w=this.a
return w.m(new A.db0(w))},
$S:0}
A.db0.prototype={
$0(){var w=this.a,v=w.ger(0)
v.f=!v.f
w.qC()},
$S:0}
A.dbf.prototype={
$0(){return A.hbf(this.a)},
$S:0}
A.dbg.prototype={
$0(){var w=this.a,v=w.gio()
return v.hT(10,0.2,new A.q(0.6,0,w.ger(0).c===0?4.2:0.4),-0.95)},
$S:0}
A.dbh.prototype={
$0(){var w=this.a,v=w.gio()
return v.hT(10,0.2,new A.q(-0.6,0,w.ger(0).c===0?4.2:0.4),0.95)},
$S:0}
A.dbj.prototype={
$1(d){return!this.a.ger(0).b.iL(0,d.a)},
$S:z+7}
A.db5.prototype={
$0(){var w=this.a,v=this.b,u=v.a
if(w.ger(0).b.iL(0,u)){w.nD("That wire is already fastened. Tap the wire in the 3D view to take it off if you want to move it.")
return}w.m(new A.daZ(w,v))
if(w.w.length!==0){w.aXU(u)
w.jc(v.b+": now tap the screw it belongs on.",!0)}},
$S:0}
A.daZ.prototype={
$0(){var w=this.a,v=this.b.a
return w.w=w.w===v?"":v},
$S:0}
A.db6.prototype={
$0(){var w=this.a,v=w.gz8(),u=v.b,t=A.fR6(v)
w=w.ger(0)
w=C.a([new A.ab9(u,t,A.h8C(v,w),w.x)],x.fJ)
v=B.aGK.h(0,v.a)
if(v==null)v=B.aA_
return A.hyR(this.b,w,v,u)},
$S:0}
A.db7.prototype={
$0(){var w=this.a
w.m(new A.daY(w))
A.yM()
w.jc("The wires are folded back and the device is pushed into the box. Now put the cover plate on.",!0)
w.ol()},
$S:0}
A.daY.prototype={
$0(){var w=this.a
w.ger(0).c=1
w.qC()},
$S:0}
A.db8.prototype={
$0(){var w=this.a
w.m(new A.daX(w))
w.ol()},
$S:0}
A.daX.prototype={
$0(){var w=this.a
w.ger(0).c=0
w.qC()},
$S:0}
A.db9.prototype={
$0(){var w=this.a
w.m(new A.daW(w))
A.yM()
w.jc("Cover plate on. Now turn the power on and test.",!0)},
$S:0}
A.daW.prototype={
$0(){var w=this.a
w.ger(0).c=2
w.qC()},
$S:0}
A.dba.prototype={
$0(){var w=this.a
w.m(new A.daV(w))
w.ol()},
$S:0}
A.daV.prototype={
$0(){var w=this.a,v=w.ger(0)
v.c=0
v.b.aa(0)
v.a=!0
v.w=v.d=!1
v.z=""
w.Q=0
w.w=""
w.x=0
w.qC()},
$S:0}
A.eWR.prototype={
$0(){var w=this.a
w.x=this.b
w.y=this.c},
$S:0}
A.eWS.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new A.eWQ(w))},
$S:0}
A.eWQ.prototype={
$0(){return this.a.x=null},
$S:0}
A.eWK.prototype={
$0(){return this.a.w=0},
$S:0}
A.eWL.prototype={
$0(){var w=this.a,v=w.ger(0)
v.a.M(0,this.b)
v.c=!1
v.d=""
w.f=A.bCL(v)
w.r=""},
$S:0}
A.eWM.prototype={
$0(){var w=this.a,v=w.ger(0)
v.b.n(0,this.b,!0)
v.d=""
w.f=A.bCL(v)},
$S:0}
A.eWN.prototype={
$0(){return this.a.w=this.b},
$S:0}
A.eWO.prototype={
$1(d){return this.a.ger(0).b.h(0,d)!==!0},
$S:3}
A.eWP.prototype={
$0(){var w,v=this.a,u=v.ger(0)
u.c=!0
w=this.b
u.d=w.length===0?"":D.d.gI(w)
v.f=A.bCL(u)},
$S:0}
A.eWW.prototype={
$1(d){return!d},
$S:112}
A.eX_.prototype={
$0(){return A.fRz(this.a,"Sink drain (P-trap)",B.dhX,this.b)},
$S:0}
A.eWX.prototype={
$1(d){return A.ijl(this.a.ger(0),d)},
$S:z+10}
A.eWY.prototype={
$0(){var w=this.a
return w.m(new A.eWV(w,this.b))},
$S:0}
A.eWV.prototype={
$0(){var w=this.a,v=this.b
return w.r=w.r===v?"":v},
$S:0}
A.eWZ.prototype={
$0(){var w=this.a
w.m(new A.eWU(w))
w.ol()},
$S:0}
A.eWU.prototype={
$0(){var w,v=this.a,u=v.ger(0)
u.a.aa(0)
w=u.b
w.aJy(w,new A.eWT())
u.c=!1
v.r=u.d=""
v.w=0
v.f=A.bCL(u)},
$S:0}
A.eWT.prototype={
$2(d,e){return!1},
$S:1821}
A.ddU.prototype={
$0(){var w=this.a
w.x=this.b
w.y=this.c},
$S:0}
A.ddV.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new A.ddT(w))},
$S:0}
A.ddT.prototype={
$0(){return this.a.x=null},
$S:0}
A.ddM.prototype={
$0(){return this.a.w=0},
$S:0}
A.ddP.prototype={
$1(d){return d.a===this.a},
$S:z+37}
A.ddQ.prototype={
$0(){var w=this.a,v=w.ger(0)
v.f=!1
w.f=A.aPS(v)
w.w=this.b},
$S:0}
A.ddR.prototype={
$0(){var w=this.a,v=w.ger(0),u=v.e
u.bs(u,new A.ddO(this.b))
v.f=!1
w.f=A.aPS(v)},
$S:0}
A.ddO.prototype={
$2(d,e){return e===this.a},
$S:457}
A.ddS.prototype={
$0(){return this.a.w=this.b},
$S:0}
A.ddN.prototype={
$0(){var w=this.a,v=w.ger(0)
v.f=!v.f
w.f=A.aPS(v)},
$S:0}
A.ddZ.prototype={
$1(d){return!d},
$S:112}
A.de4.prototype={
$0(){return A.fRz(this.a,"Faucet supply lines",B.duM,this.b)},
$S:0}
A.de_.prototype={
$1(d){return A.ia4(this.a.ger(0),d)},
$S:z+10}
A.de0.prototype={
$0(){var w=this.a
return w.m(new A.ddY(w))},
$S:0}
A.ddY.prototype={
$0(){var w=this.a,v=w.ger(0)
v.r=!v.r
w.f=A.aPS(v)},
$S:0}
A.de2.prototype={
$0(){var w=this.b
return w.m(new A.ddX(this.a,w))},
$S:0}
A.ddX.prototype={
$0(){var w=this.b,v=w.r,u=this.a.a
return w.r=v===u?"":u},
$S:0}
A.de1.prototype={
$1(d){return d===this.a.a},
$S:3}
A.de3.prototype={
$0(){var w=this.a
w.m(new A.ddW(w))
w.ol()},
$S:0}
A.ddW.prototype={
$0(){var w=this.a,v=w.ger(0)
v.e.aa(0)
v.f=!1
w.r=""
w.w=0
w.f=A.aPS(v)},
$S:0}
A.dkY.prototype={
$0(){var w=this.a
w.x=this.b
w.y=this.c},
$S:0}
A.dkZ.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new A.dkX(w))},
$S:0}
A.dkX.prototype={
$0(){return this.a.x=null},
$S:0}
A.dkS.prototype={
$0(){return this.a.r=0},
$S:0}
A.dkU.prototype={
$0(){var w=this.a,v=w.d
v.d.W(0,72)
w.f=A.agI(v)
w.r=this.b},
$S:0}
A.dkV.prototype={
$0(){var w=this.a,v=w.d
v.c=!0
v.b=!1
w.f=A.agI(v)
w.r=this.b},
$S:0}
A.dkW.prototype={
$0(){return this.a.r=this.b},
$S:0}
A.dkT.prototype={
$1(d){return this.a},
$S:40}
A.dl6.prototype={
$0(){return A.fRz(this.a,"Fix the house",B.cqe,this.b)},
$S:0}
A.dl1.prototype={
$0(){return this.a.cgm(this.b)},
$S:0}
A.dl3.prototype={
$1(d){return d<=this.a.d.a},
$S:35}
A.dl2.prototype={
$1(d){return A.huM(this.a.d,d)},
$S:z+10}
A.dl4.prototype={
$0(){var w=this.a
return w.m(new A.dl0(w))},
$S:0}
A.dl0.prototype={
$0(){var w=this.a
return w.w=w.w==="wrench"?"":"wrench"},
$S:0}
A.dl5.prototype={
$1(d){var w=this.a
return w.m(new A.dl_(w,d))},
$S:6}
A.dl_.prototype={
$0(){var w=this.a,v=w.d,u=D.k.V(this.b)
v.a=u
if(u<5)w.r=0
w.f=A.agI(v)},
$S:0}
A.fic.prototype={
$0(){return this.a.e=!1},
$S:0}
A.fia.prototype={
$0(){return this.a.e=!0},
$S:0}
A.fib.prototype={
$0(){var w=this.a
w.d=C.dh(B.bwB,new A.fi9(w))},
$S:0}
A.fi9.prototype={
$1(d){var w=this.a.a,v=w.e
return v.aps(w.f?1.06:0.94)},
$S:11}
A.fie.prototype={
$1(d){return this.a.c8r(0)},
$S:72}
A.fif.prototype={
$1(d){return this.a.b7J()},
$S:118}
A.fid.prototype={
$1(d){return this.a.b7J()},
$S:146}
A.cbJ.prototype={
$0(){return C.a4(this.a,!1).ig()},
$S:0}
A.fA8.prototype={
$5(d,e,f,g,h){var w=this.a.a.t(0,h),v=this.b
v.b=d
if(w)v.a7b(e,0.66,f,!1,!0,!0,g,14)
else{v.d=0.3
v.aJv(e,0.74,D.b4,!1,!0,0,8)
v.d=1}},
$S:z+100}
A.fA7.prototype={
$6(d,e,f,g,h,i){var w,v
if(!i)return
w=this.a.b.h(0,e)
v=w===!0?f:f.a9(0,h)
w=this.b
w.e=0.5
w.b=d
w.dR(v.aE(0,g.aI(0,0.6)),v.a9(0,g.aI(0,0.6)),1.12,B.pX,0.35,8)
w.zt(v.aE(0,g.aI(0,0.62)),v.aE(0,g.aI(0,0.5)),1.2,0.5,B.XJ,0.2,8)
w.b=0
w.zt(f.aE(0,g.aI(0,0.05)),f.a9(0,g.aI(0,0.08)),0.82,0.55,B.bp1,0.1,12)
w.e=0},
$S:z+101}
A.fA6.prototype={
$1(d){return d.b<-0.6},
$S:z+21}
A.fzd.prototype={
$1(d){return this.a.e.h(0,d)===this.b},
$S:35}
A.fBP.prototype={
$2(d,e){var w,v,u,t,s,r,q,p=A.agV(d)
for(w=this.a*1.6,v=this.b,u=p.a,t=p.b,s=p.c,r=0;r<7;++r){q=D.k.F(w+r/7,1)
v.fV(new A.q(u+Math.sin(r*2.1)*q*1.4,t+(q*2.4-q*q*6.5),s+(1+q*2.5)),0.2,e,3,6,0.9)}},
$S:1822}
A.fBO.prototype={
$1(d){return this.a.e.h(0,d.a)!=null},
$S:z+37}
A.cnN.prototype={
$1(d){return d.a===this.a},
$S:z+102}
A.cnO.prototype={
$1(d){return d.a===this.a},
$S:z+2}
A.cnK.prototype={
$1(d){return this.a.vn(0,d).c.toLowerCase()},
$S:14}
A.cnP.prototype={
$1(d){var w
if(!this.a.e.t(0,d.a)){w=d.b
w=w==="valve"||D.a.a0(w,"hose")}else w=!1
return w},
$S:z+2}
A.cnQ.prototype={
$1(d){var w=this.a,v=d.a
return w.e.t(0,v)&&w.aHm(v)>0},
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
return w.aHm(v)<=0||!w.e.t(0,v)},
$S:z+2}
A.fA5.prototype={
$1(d){var w=this.a
w.b=0
w.dR(new A.q(d,8,0),new A.q(d,8,1.6),0.5,B.LO,0.7,10)},
$S:6}
A.fA3.prototype={
$1(d){var w,v,u,t,s,r,q=C.a([],x.o)
for(w=d.length,v=this.a,u=v.a,t=v.b,v=v.c,s=0;s<d.length;d.length===w||(0,C.L)(d),++s){r=d[s]
q.push(new A.q(r.a+u,r.b+t,r.c+v))}return q},
$S:z+105}
A.fzY.prototype={
$3$r(d,e,f){var w=this.a,v=this.b.c
v===$&&C.c()
w.b=9100+D.d.bh(v.c,new A.fA0(d))
w.d=0.32
w.aJv(e,f,D.b4,!1,!0,0,8)
w.d=1},
$2(d,e){return this.$3$r(d,e,1.2)},
$S:z+106}
A.fA0.prototype={
$1(d){return d.a===this.a},
$S:z+2}
A.fzZ.prototype={
$3(d,e,f){var w=this.a,v=this.b.c
v===$&&C.c()
w.b=9100+D.d.bh(v.c,new A.fA_(d))
w.d=0.32
w.aP(e,f,D.b4)
w.d=1},
$S:z+107}
A.fA_.prototype={
$1(d){return d.a===this.a},
$S:z+2}
A.fA4.prototype={
$3(d,e,f){var w,v,u,t=this,s=t.a,r=s.c
r===$&&C.c()
w=D.d.cu(r.c,d)
r=d.c
v=s.e
u=d.a
if(v.t(0,u))s="Fitted."
else{s=s.b?"":d.e
s="A spot for the "+r.toLowerCase()+". "+s}t.b.n(0,9100+w,new A.cX(r,s,e,26))
if(t.c&&!v.t(0,u)&&t.d.length!==0)t.e.push(new A.hh(e.a9(0,B.fZX),f,D.eQ,0))},
$S:z+108}
A.fzU.prototype={
$0(){return this.a.$3(this.b.a,new A.q(this.c-10,9,2.4),B.aaR)},
$S:0}
A.fzV.prototype={
$0(){return this.a.$3(this.b.a,new A.q(this.c-8,9,2.4),B.aaR)},
$S:0}
A.fzW.prototype={
$0(){return this.a.$3(this.b.a,new A.q(this.c+8,9,2.4),B.aaR)},
$S:0}
A.fA1.prototype={
$4(d,e,f,g){var w,v,u,t,s=this
if(D.d.bh(s.a,new A.fA2(d))<0||!s.b.e.t(0,d))return
w=s.b.f.h(0,d)
v=(w==null?0:w)>=1
w=s.c
u=9260+g
w.b=u
t=v?e:e.a9(0,f.aI(0,1.7))
w.dR(t.aE(0,f.aI(0,0.6)),t.a9(0,f.aI(0,0.6)),1.12,B.pX,0.35,8)
w.zt(t.aE(0,f.aI(0,0.62)),t.aE(0,f.aI(0,0.5)),1.2,0.5,B.XJ,0.2,8)
w=v?"Tight.":"Loose. Tap it with the wrench to tighten it."
s.d.n(0,u,new A.cX("Slip nut",w,e,10))},
$S:z+109}
A.fA2.prototype={
$1(d){return d.a===this.a},
$S:z+2}
A.fzX.prototype={
$1(d){return d.a===this.a},
$S:z+2}
A.fQJ.prototype={
$1(d){return d.a===this.a},
$S:z+2}
A.eqP.prototype={
$0(){var w=this.a
w.z=this.b
w.Q=this.c},
$S:0}
A.eqQ.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new A.eqO(w))},
$S:0}
A.eqO.prototype={
$0(){return this.a.z=null},
$S:0}
A.eqI.prototype={
$0(){return this.a.y=0},
$S:0}
A.eqU.prototype={
$1(d){return d.a===this.a},
$S:z+2}
A.eqx.prototype={
$0(){return this.a.y=this.b},
$S:0}
A.eqy.prototype={
$0(){var w=this.a
w.a_4()
w.y=this.b},
$S:0}
A.eqz.prototype={
$1(d){return this.a.c8s()},
$S:9}
A.eqE.prototype={
$1(d){var w,v=null,u=this.a,t=u.e
t===$&&C.c()
w=t.c
w===$&&C.c()
t=C.d("The "+w.b.toLowerCase()+" is finished and nothing leaks.\n\nMistakes: "+t.w+"\n\nThe next job is different.",v,v,v,v,v,v,B.a9J,v,v,v)
return C.ep(C.a([C.bN(!1,B.aUS,v,v,!0,v,v,v,new A.eqC(d),v,v),C.bH(B.fFW,v,new A.eqD(u,d),v)],x.p),v,v,H.ni,t,v,v,v,v,B.fHz,v)},
$S:19}
A.eqC.prototype={
$0(){C.a4(this.a,!1).O(null)
return null},
$S:0}
A.eqD.prototype={
$0(){C.a4(this.b,!1).O(null)
this.a.aYW()},
$S:0}
A.eqN.prototype={
$0(){var w,v,u=this.a
u.d=D.o.F(Date.now(),1e5)
w=u.gCV(0)
v=u.e
v===$&&C.c()
u.e=A.h3Z(v.b,w,null)
u.x=""
u.as=!1
u.z=null
u.y=0
u.a_4()},
$S:0}
A.eqV.prototype={
$1(d){return d.b===this.a},
$S:z+2}
A.eqF.prototype={
$1(d){var w=this.a.e
w===$&&C.c()
return w.x.t(0,d.a)},
$S:z+2}
A.eqG.prototype={
$1(d){return d.c.toLowerCase()},
$S:z+23}
A.eqH.prototype={
$1(d){var w=this.a.e
w===$&&C.c()
return w.aHm(d.a)>0},
$S:z+2}
A.eqR.prototype={
$0(){var w=this.b
w.x=this.a.b
w.a_4()},
$S:0}
A.eqS.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
A.eqT.prototype={
$0(){return this.a.y=this.b},
$S:0}
A.eqB.prototype={
$0(){var w=this.a
return w.m(new A.eqA(w,this.b,this.c))},
$S:0}
A.eqA.prototype={
$0(){var w=this.a
w.x=this.b?"":this.c
w.a_4()},
$S:0}
A.eqW.prototype={
$1(d){var w=this.a.e
w===$&&C.c()
return w.e.t(0,d.a)},
$S:z+2}
A.er_.prototype={
$0(){return this.a.c2k(this.b)},
$S:0}
A.eqY.prototype={
$1(d){return d<=5},
$S:35}
A.eqX.prototype={
$1(d){var w=this.a,v=w.e
v===$&&C.c()
return A.ijd(v,w.w.gip()/1000)},
$S:z+10}
A.eqZ.prototype={
$0(){return this.b.cyF(this.a.a)},
$S:0}
A.eqM.prototype={
$1(d){var w,v,u,t,s,r,q,p=null,o=this.a,n=o.e
n===$&&C.c()
w=x.p
n=C.a([B.fTz,D.au,C.d("Mistakes "+n.w,p,p,p,p,p,p,B.K6,p,p,p),D.W],w)
v=o.e.c
v===$&&C.c()
v=v.c
u=v.length
t=0
for(;t<u;++t){s=v[t]
r=D.c.j(0.05)
q=new C.aP(12,12)
n.push(C.p(p,new C.y((o.e.e.t(0,s.a)?"\u2705":"\ud83d\udd27")+" "+s.c,p,B.fgp,p,p,p,p,p,p,p,p,p),D.f,p,p,new C.o(r,p,p,new C.bj(q,q,q,q),p,p,D.n),p,p,p,D.eH,D.bT,p,p,p))}n.push(D.am)
n.push(B.fxn)
n.push(D.P)
n.push(C.B(C.a([B.bEz,C.Yd(p,p,p,p,!1,D.y,p,p,p,p,p,p,new A.eqK(o,d),p,p,p,p,p,p,p,p,o.e.b)],w),D.m,p,D.e,D.i,0,p,p))
n.push(C.bH(B.aUU,p,new A.eqL(o,d),p))
return C.bm(!0,C.cn(n,p,D.bQ,p,p,D.ah,!0),!0,!1,D.af,!0,!0)},
$S:27}
A.eqK.prototype={
$1(d){var w=this.a
w.m(new A.eqJ(w,d))
C.a4(this.b,!1).O(null)},
$S:8}
A.eqJ.prototype={
$0(){var w=this.a,v=w.e
v===$&&C.c()
v.b=this.b
w.a_4()},
$S:0}
A.eqL.prototype={
$0(){C.a4(this.b,!1).O(null)
this.a.aYW()},
$S:0}
A.fZ5.prototype={
$1(d){return d.a===this.a},
$S:z+40}
A.csK.prototype={
$1(d){return D.d.t(B.jV,d.b)},
$S:z+8}
A.csR.prototype={
$1(d){return!this.a.y.t(0,d)},
$S:35}
A.csS.prototype={
$1(d){var w=this.a
return w.x.aj(0,d)&&w.z.t(0,d)},
$S:35}
A.csT.prototype={
$1(d){var w=$.Hf()[this.b],v=!1
if(w>=d)if(w<=d+48){w=this.a.Q.h(0,d)
w=(w==null?null:w.a)===!0}else w=v
else w=v
return w},
$S:35}
A.csU.prototype={
$1(d){return this.a.Q.h(0,d).c.t(0,this.b)},
$S:35}
A.csW.prototype={
$1(d){var w,v=J.e_(6,x.S)
for(w=0;w<6;++w)v[w]=w
return D.d.d5(v,new A.csV(this.a,d))},
$S:35}
A.csV.prototype={
$1(d){return this.a.c.t(0,this.b*10+d)},
$S:35}
A.csJ.prototype={
$1(d){var w=this.a.Q.h(0,d)
return(w==null?null:w.a)===!0},
$S:35}
A.csH.prototype={
$1(d){return!A.k_(d).c},
$S:35}
A.csI.prototype={
$1(d){var w=this.a.aqe(A.k_(d).d.a)
return(w==null?null:w.b.t(0,d))===!0},
$S:35}
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
$S:35}
A.csN.prototype={
$1(d){return d.a===this.a},
$S:z+13}
A.csX.prototype={
$2(d,e){return e===this.a},
$S:457}
A.csO.prototype={
$1(d){return d.c===this.a},
$S:z+8}
A.evt.prototype={
$0(){var w=this.a
w.ax=this.b
w.ay=this.c},
$S:0}
A.evu.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new A.evs(w))},
$S:0}
A.evs.prototype={
$0(){return this.a.ax=null},
$S:0}
A.euv.prototype={
$0(){return this.a.CW=!0},
$S:0}
A.euw.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new A.euu(w))},
$S:12}
A.euu.prototype={
$0(){return this.a.CW=!1},
$S:0}
A.eux.prototype={
$0(){return this.a.CW=!0},
$S:0}
A.euy.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new A.eut(w))},
$S:12}
A.eut.prototype={
$0(){return this.a.CW=!1},
$S:0}
A.euz.prototype={
$1(d){return this.a.bQJ()},
$S:9}
A.euA.prototype={
$1(d){return this.a.c8x()},
$S:9}
A.euK.prototype={
$0(){return this.a.Q=-1},
$S:0}
A.euM.prototype={
$0(){return this.a.Q=-1},
$S:0}
A.euB.prototype={
$1(d){return d.b==="tv"},
$S:535}
A.euC.prototype={
$0(){return this.a.Q=-1},
$S:0}
A.euD.prototype={
$0(){return this.a.Q=-1},
$S:0}
A.ev2.prototype={
$0(){var w=this.a
w.Q=this.b
w.z=w.at=""
w.ch=!1},
$S:0}
A.euL.prototype={
$0(){var w=this.a
w.Q=-1
w.at=""},
$S:0}
A.evp.prototype={
$0(){return this.a.as=0},
$S:0}
A.evq.prototype={
$0(){return this.a.z=""},
$S:0}
A.evr.prototype={
$0(){return this.a.as=this.b},
$S:0}
A.evn.prototype={
$0(){return this.a.z=""},
$S:0}
A.evo.prototype={
$0(){return this.a.as=2000+this.b},
$S:0}
A.evm.prototype={
$0(){return this.a.z=""},
$S:0}
A.eve.prototype={
$1(d){return d.a===this.a},
$S:z+13}
A.evf.prototype={
$0(){return this.a.at=""},
$S:0}
A.evg.prototype={
$1(d){return d.a===this.a},
$S:z+7}
A.evh.prototype={
$0(){var w=this,v=w.a,u=w.b
if(v.at===u)u=""
v.at=u
v.as=u.length===0?0:5000+w.c*100+w.d},
$S:0}
A.evi.prototype={
$1(d){return d.a===this.a},
$S:z+7}
A.evj.prototype={
$0(){return this.a.as=5000+this.b*100+this.c},
$S:0}
A.evk.prototype={
$0(){var w=this.a
w.at=""
w.as=0},
$S:0}
A.evl.prototype={
$0(){return this.a.as=5000+this.b*100+this.c},
$S:0}
A.evv.prototype={
$0(){var w=this.b,v=D.d.t(B.Ia,w.z),u=this.a.a
if(v)w.b2u(u)
else w.b2v(u)},
$S:0}
A.euJ.prototype={
$1(d){var w=null
return C.ep(C.a([C.bN(!1,B.fJA,w,w,!0,w,w,w,new A.euH(d),w,w),C.bH(D.Eg,w,new A.euI(this.a,d),w)],x.p),w,w,H.ni,B.fyx,w,w,w,w,B.fGl,w)},
$S:19}
A.euH.prototype={
$0(){C.a4(this.a,!1).O(null)
return null},
$S:0}
A.euI.prototype={
$0(){C.a4(this.b,!1).O(null)
this.a.axJ(!0)},
$S:0}
A.euG.prototype={
$1(d){var w,v=null,u=this.a,t=u.d
t===$&&C.c()
w=t.c
w===$&&C.c()
t=C.d("The "+w.toLowerCase()+" is built, wired, painted and tested.\n\nMistakes: "+t.f+"\nShocks: "+t.r+"\nLives left: "+t.e+"\n\nEvery job is a little different. Ready for another one?",v,v,v,v,v,v,B.a9J,v,v,v)
return C.ep(C.a([C.bN(!1,B.fUt,v,v,!0,v,v,v,new A.euE(d),v,v),C.bH(B.fGe,v,new A.euF(u,d),v)],x.p),v,v,H.ni,t,v,v,v,v,B.fOl,v)},
$S:19}
A.euE.prototype={
$0(){C.a4(this.a,!1).O(null)
return null},
$S:0}
A.euF.prototype={
$0(){C.a4(this.b,!1).O(null)
this.a.b_6()},
$S:0}
A.euN.prototype={
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
w.x.aa(0)
w.ax=null
w.r=A.wU(w.d,new A.rN(w.z,w.Q,!1))},
$S:0}
A.ev0.prototype={
$1(d){return new C.N(d,new A.ev1(),d.$ti.k("N<ak.E,m>")).aG(0,", ")},
$S:1823}
A.ev1.prototype={
$1(d){return A.k_(d).b},
$S:73}
A.euO.prototype={
$1(d){var w=this.a.d
w===$&&C.c()
return!w.x.aj(0,d.a)},
$S:z+8}
A.euP.prototype={
$1(d){var w=this.a.d
w===$&&C.c()
return!w.z.t(0,d.a)},
$S:z+8}
A.euQ.prototype={
$1(d){var w=this.a.d
w===$&&C.c()
return!w.y.t(0,d)},
$S:35}
A.euT.prototype={
$1(d){return!d.a},
$S:z+11}
A.euU.prototype={
$1(d){return d.b<3},
$S:z+11}
A.euV.prototype={
$1(d){return!d.c},
$S:z+11}
A.euW.prototype={
$1(d){return!d.d},
$S:z+11}
A.euX.prototype={
$1(d){return!d.c},
$S:z+11}
A.euY.prototype={
$1(d){var w=this.a.d
w===$&&C.c()
w=w.at.h(0,d.a)
w=w==null?null:w.a
return w!==d.b},
$S:z+8}
A.euZ.prototype={
$1(d){return d.a},
$S:z+114}
A.ev_.prototype={
$1(d){var w=this.a.d
w===$&&C.c()
w=w.at.h(0,d.a)
w=w==null?null:w.b.c
return(w==null?0:w)<2},
$S:z+8}
A.euR.prototype={
$1(d){var w
if(D.d.t(B.lM,d.b)){w=this.a.d
w===$&&C.c()
w=w.at.h(0,d.a)
w=(w==null?null:w.c)!==!0}else w=!1
return w},
$S:z+8}
A.euS.prototype={
$1(d){return d.b==="fan"},
$S:z+8}
A.evO.prototype={
$0(){return this.a.cho(this.b)},
$S:0}
A.evQ.prototype={
$0(){var w=this.a
if(w.Q>=0)w.aev()
else{w.m(new A.evA(w))
w.b4L()}},
$S:0}
A.evA.prototype={
$0(){return this.a.as=0},
$S:0}
A.evP.prototype={
$1(d){var w=this.a,v=w.d
v===$&&C.c()
return A.iju(v,w.w.gip()/1000,w.x)},
$S:z+10}
A.evD.prototype={
$0(){var w=this.a,v=w.d
v===$&&C.c()
return w.jF(v.aJn())},
$S:0}
A.evE.prototype={
$0(){var w=this.a
return w.m(new A.evC(w,this.b))},
$S:0}
A.evC.prototype={
$0(){var w,v=this.b.b
v.f=!v.f
v=this.a
w=v.d
w===$&&C.c()
v.r=A.wU(w,new A.rN(v.z,v.Q,!1))},
$S:0}
A.evF.prototype={
$0(){var w=this.a
return w.m(new A.evB(w,this.b))},
$S:0}
A.evB.prototype={
$0(){var w,v=this.b.b
v.e=!v.e
v=this.a
w=v.d
w===$&&C.c()
v.r=A.wU(w,new A.rN(v.z,v.Q,!1))},
$S:0}
A.evR.prototype={
$0(){var w=this.a
return w.m(new A.evz(w,this.b))},
$S:0}
A.evz.prototype={
$0(){var w,v=this.a
v.y=this.b
v.z=""
w=v.d
w===$&&C.c()
v.r=A.wU(w,new A.rN("",v.Q,!1))},
$S:0}
A.evS.prototype={
$0(){var w=this.a
return w.m(new A.evy(w))},
$S:0}
A.evy.prototype={
$0(){var w=this.a,v=w.d
v===$&&C.c()
v.amf()
w.y=2
w.z=""
w.r=A.wU(w.d,new A.rN("",w.Q,!1))
w.qD("The boxes, the cable and the walls are done. Now the wiring: pick an Outlet or a Switch from the tray, then tap its box on the wall.",!0)},
$S:0}
A.evT.prototype={
$0(){var w=this.a
return w.m(new A.evx(w,this.b))},
$S:0}
A.evx.prototype={
$0(){var w,v=this.a,u=this.b.a,t=v.z===u?"":u
v.z=t
v.as=0
w=v.d
w===$&&C.c()
v.r=A.wU(w,new A.rN(t,v.Q,!1))
if(v.z.length!==0)v.csg(u)},
$S:0}
A.evU.prototype={
$0(){var w=this.a,v=w.d
v===$&&C.c()
return w.jF(v.cSz())},
$S:0}
A.evV.prototype={
$1(d){return!this.a.b.b.iL(0,d.a)},
$S:z+7}
A.evW.prototype={
$0(){var w=this.a
return w.m(new A.evw(w,this.b,this.c))},
$S:0}
A.evw.prototype={
$0(){var w,v=this,u=v.c,t=u.a
if(v.b.b.b.iL(0,t)){v.a.aew("That wire is already fastened. Tap the wire in the 3D view to take it off.")
return}w=v.a
if(w.at===t)t=""
w.at=t
if(t.length!==0)w.qD(u.b+": now tap the screw it belongs on, or press the matching button below.",!0)},
$S:0}
A.evG.prototype={
$1(d){return!this.a.b.b.aj(0,d.a)},
$S:z+13}
A.evH.prototype={
$0(){var w=this.a
return w.b2t(w.Q,this.b.a)},
$S:0}
A.evI.prototype={
$0(){var w=this.a,v=w.d
v===$&&C.c()
return w.jF(v.biU(w.Q))},
$S:0}
A.evJ.prototype={
$0(){var w=this.a,v=w.d
v===$&&C.c()
return w.jF(v.biS(w.Q))},
$S:0}
A.evK.prototype={
$0(){var w=this.a,v=w.d
v===$&&C.c()
return w.jF(v.bdJ(w.Q))},
$S:0}
A.evL.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&C.c()
w=u.bje(v.Q)
v.jF(w)
if(w.a)v.aev()},
$S:0}
A.evM.prototype={
$0(){var w=this.a,v=w.d
v===$&&C.c()
return w.jF(v.biS(w.Q))},
$S:0}
A.evN.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&C.c()
w=u.bje(v.Q)
v.jF(w)
if(w.a){v.aev()
v.qD("The "+A.agR(this.b.a)+" is out and the box is empty. Pick the kind you want from the tray (a different outlet or switch is fine), then tap the box.",!0)}},
$S:0}
A.evd.prototype={
$1(d){return new C.e1(new A.evc(this.a,this.b),null)},
$S:21}
A.evc.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=C.aJ(d,k,x.w).w,i=this.a,h=i.d
h===$&&C.c()
w=h.c
w===$&&C.c()
v=x.p
h=C.a([C.d("Job: "+w,k,k,k,k,k,k,D.dd,k,k,k),D.au,C.d("Mistakes "+h.f+" \xb7 Shocks "+h.r+" \xb7 Lives "+h.e,k,k,k,k,k,k,B.K6,k,k,k),D.W,B.fK9,D.am],v)
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
else m=m==="fan"?"A ceiling fan":"A "+A.agR(m).toLowerCase()
o=A.k_(o)
l=s.c
l=l!=null?", turned on by "+A.k_(l).b:""
h.push(C.p(k,new C.y(n+" "+m+" at "+o.b+l,k,D.oK,k,k,k,k,k,k,k,k,k),D.f,k,k,new C.o(r,k,new C.bI(p,p,p,p),new C.bj(q,q,q,q),k,k,D.n),k,k,k,D.eH,D.bT,k,k,k))}h.push(D.W)
h.push(C.B(C.a([B.bFG,C.Yd(k,k,k,k,!1,D.y,k,k,k,k,k,k,new A.ev6(i,e),k,k,k,k,k,k,k,k,i.d.b)],v),D.m,k,D.e,D.i,0,k,k))
h.push(C.B(C.a([B.bEW,C.Yd(k,k,k,k,!1,D.y,k,k,k,k,k,k,new A.ev7(i,e),k,k,k,k,k,k,k,k,i.d.dx)],v),D.m,k,D.e,D.i,0,k,k))
h.push(D.am)
w=this.b
h.push(C.B(C.a([C.E(C.dT(B.fHD,new A.ev8(w),k),1),D.ac,C.E(C.bH(B.fFw,k,new A.ev9(i,d,w),k),1)],v),D.m,k,D.e,D.i,0,k,k))
h.push(D.am)
h.push(D.am)
h.push(C.B(C.a([C.E(C.dT(B.fzH,new A.eva(i,d),k),1),D.ac,C.E(C.bH(B.aUU,k,new A.evb(i,d),k),1)],v),D.m,k,D.e,D.i,0,k,k))
return C.bm(!0,new C.cU(new C.aZ(0,1/0,0,j.a.b*0.8),C.cn(h,k,D.bQ,k,k,D.ah,!0),k),!0,!1,D.af,!0,!0)},
$S:86}
A.ev6.prototype={
$1(d){var w=this.a,v=w.d
v===$&&C.c()
v.b=d
for(v=v.at,v=new C.dq(v,v.r,v.e);v.C();)v.d.b.r=d
this.b.$1(new A.ev4())
w.m(new A.ev5())},
$S:8}
A.ev4.prototype={
$0(){},
$S:0}
A.ev5.prototype={
$0(){},
$S:0}
A.ev7.prototype={
$1(d){var w,v=this.a,u=v.d
u===$&&C.c()
u.dx=d
for(u=u.at,u=new C.dq(u,u.r,u.e);u.C();){w=u.d.b
w.y=d
if(d)w.f=!1}this.b.$1(new A.ev3())
v.m(v.gc8E())},
$S:8}
A.ev3.prototype={
$0(){},
$S:0}
A.ev8.prototype={
$0(){return A.hbf(this.a)},
$S:0}
A.ev9.prototype={
$0(){var w=0,v=C.j(x.H),u=this,t,s,r
var $async$$0=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:C.a4(u.b,!1).O(null)
t=u.a
s=t.d
s===$&&C.c()
r=s.c
r===$&&C.c()
w=2
return C.b(A.hyR(u.c,s.cYR(),t.d.cYS(),r),$async$$0)
case 2:return C.h(null,v)}})
return C.i($async$$0,v)},
$S:1}
A.eva.prototype={
$0(){C.a4(this.b,!1).O(null)
this.a.axJ(!0)},
$S:0}
A.evb.prototype={
$0(){C.a4(this.b,!1).O(null)
this.a.b_6()},
$S:0}
A.fsr.prototype={
$1(d){var w=this.a,v=d.a
return w>v[0]&&w<v[1]},
$S:499}
A.fss.prototype={
$1(d){var w=this.a,v=d.a
return w>v[2]&&w<v[3]},
$S:499}
A.fA9.prototype={
$1(d){return 5000+this.a.a*100+d},
$S:76}
A.fAa.prototype={
$1(d){return 3000+this.a.a},
$S:76}
A.fAb.prototype={
$1(d){return 2000+this.a.a},
$S:76}
A.fAe.prototype={
$5$col$round(d,e,f,g,h){var w=this.a
w.f=3
w.b=d
w.d=0.5
w.e=0.9
if(h)w.dN(e.aE(0,B.ea),e.a9(0,B.ea),f.a/2,g,14)
else w.aP(e,f,g)
w.e=0
w.d=1
w.f=2},
$3(d,e,f){return this.$5$col$round(d,e,f,D.b4,!1)},
$4$round(d,e,f,g){return this.$5$col$round(d,e,f,D.b4,g)},
$4$col(d,e,f,g){return this.$5$col$round(d,e,f,g,!1)},
$S:z+115}
A.fAc.prototype={
$3(d,e,f){return K.RX(d,e,0,f+this.a.a*5)},
$S:24}
A.fAd.prototype={
$0(){var w,v=this.a
if(v.c)w="A place in the ceiling for a "+(v.e==="fan"?"fan (needs a fan-rated box)":"light")+"."
else w="A place on the wall at "+(v.e==="switch"?"switch height, about 48 inches from the floor":"outlet height, about 16 inches from the floor")+"."
return new A.cX(v.b,w,A.ai7(v,B.aaH),26)},
$S:z+116}
A.fR2.prototype={
$1(d){return d.e==="fan"},
$S:z+40}
A.fR3.prototype={
$1(d){return d.b==="light"},
$S:z+8}
A.fR4.prototype={
$1(d){return A.ai7(this.a,d)},
$S:z+6}
A.cwa.prototype={
$1(d){return d.a===this.a&&!d.c},
$S:z+15}
A.cw6.prototype={
$1(d){return d.a===B.a0y},
$S:z+15}
A.cw8.prototype={
$1(d){return d.c},
$S:z+15}
A.cw9.prototype={
$1(d){return d.c},
$S:z+15}
A.cw7.prototype={
$1(d){return B.wG.h(0,d.a).e===this.a&&!d.c},
$S:z+15}
A.exi.prototype={
$0(){var w=this.a
w.z=this.b
w.Q=this.c},
$S:0}
A.exj.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new A.exh(w))},
$S:0}
A.exh.prototype={
$0(){return this.a.z=null},
$S:0}
A.ex7.prototype={
$0(){return this.a.y=0},
$S:0}
A.exc.prototype={
$0(){return this.a.as=!0},
$S:0}
A.exd.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new A.exb(w))},
$S:12}
A.exb.prototype={
$0(){return this.a.as=!1},
$S:0}
A.exe.prototype={
$0(){var w=this.a,v=w.d
v===$&&C.c()
w.r=A.agI(v.d)
w.y=this.b},
$S:0}
A.exf.prototype={
$1(d){return this.a.chw()},
$S:9}
A.exg.prototype={
$1(d){return this.a.c8I()},
$S:9}
A.exa.prototype={
$1(d){var w=null
return C.ep(C.a([C.bH(B.fHu,w,new A.ex9(this.a,d),w)],x.p),w,w,H.ni,B.fGB,w,w,w,w,B.fN_,w)},
$S:19}
A.ex9.prototype={
$0(){C.a4(this.b,!1).O(null)
this.a.ax7()},
$S:0}
A.ex6.prototype={
$1(d){var w=null,v=this.a,u=v.d
u===$&&C.c()
u=C.d("Every problem on the customer's list is fixed.\n\nMistakes: "+u.f+"\nShocks: "+u.r+"\nLives left: "+u.e+"\n\nThe next call will have different problems.",w,w,w,w,w,w,B.a9J,w,w,w)
return C.ep(C.a([C.bN(!1,B.aUS,w,w,!0,w,w,w,new A.ex4(d),w,w),C.bH(B.fIN,w,new A.ex5(v,d),w)],x.p),w,w,H.ni,u,w,w,w,w,B.fPt,w)},
$S:19}
A.ex4.prototype={
$0(){C.a4(this.a,!1).O(null)
return null},
$S:0}
A.ex5.prototype={
$0(){C.a4(this.b,!1).O(null)
this.a.ax7()},
$S:0}
A.ex8.prototype={
$0(){var w,v,u=this.a
u.e=D.o.F(Date.now(),1e5)
w=u.gCV(0)
v=u.d
v===$&&C.c()
w=A.hme(v.b,w)
u.d=w
u.r=A.agI(w.d)
u.at=!1
u.z=null
u.y=0},
$S:0}
A.exv.prototype={
$0(){return this.a.cCg(this.b)},
$S:0}
A.exr.prototype={
$1(d){return d<=5},
$S:35}
A.exq.prototype={
$1(d){var w=this.a,v=w.d
v===$&&C.c()
return A.huM(v.d,w.w.gip()/1000)},
$S:z+10}
A.exs.prototype={
$1(d){return!d.c},
$S:z+15}
A.ext.prototype={
$1(d){return B.wG.h(0,d.a).a},
$S:z+118}
A.exu.prototype={
$0(){var w=this.a
return w.m(new A.exp(w,this.b))},
$S:0}
A.exp.prototype={
$0(){return this.a.x=this.b},
$S:0}
A.exo.prototype={
$1(d){return new C.e1(new A.exn(this.a),null)},
$S:21}
A.exn.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=this.a,j=k.d
j===$&&C.c()
w=x.p
j=C.a([B.fF_,D.au,C.d("Mistakes "+j.f+" \xb7 Shocks "+j.r+" \xb7 Lives "+j.e,l,l,l,l,l,l,B.K6,l,l,l),D.W],w)
v=k.d.c
v===$&&C.c()
u=v.length
t=0
for(;t<v.length;v.length===u||(0,C.L)(v),++t){s=v[t]
r=D.c.j(0.05)
q=new C.aP(14,14)
p=new C.ay(s.c?D.be.j(0.6):D.bC,1,D.r,-1)
o=s.c?"\u2705":"\ud83d\udd27"
n=B.wG.h(0,s.a).a
m=s.c?D.aB:D.c
j.push(C.p(l,new C.y(o+" "+n,l,new C.F(!0,m,l,l,l,l,13.5,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l),l,l,l,l,l,l,l,l,l),D.f,l,l,new C.o(r,l,new C.bI(p,p,p,p),new C.bj(q,q,q,q),l,l,D.n),l,l,l,D.cu,D.bg,l,l,l))}j.push(D.am)
j.push(B.fKk)
j.push(D.P)
j.push(C.B(C.a([B.bEx,C.Yd(l,l,l,l,!1,D.y,l,l,l,l,l,l,new A.exl(k,e),l,l,l,l,l,l,l,l,k.d.b)],w),D.m,l,D.e,D.i,0,l,l))
j.push(C.bH(B.fNs,l,new A.exm(k,d),l))
return C.bm(!0,C.cn(j,l,D.bQ,l,l,D.ah,!0),!0,!1,D.af,!0,!0)},
$S:86}
A.exl.prototype={
$1(d){var w=this.a.d
w===$&&C.c()
w.b=d
this.b.$1(new A.exk())},
$S:8}
A.exk.prototype={
$0(){},
$S:0}
A.exm.prototype={
$0(){C.a4(this.b,!1).O(null)
this.a.ax7()},
$S:0}
A.fld.prototype={
$1(d){return d.d===this.a},
$S:z+20}
A.bVa.prototype={
$1(d){var w,v,u,t,s=this.a,r=s.p1
if(r!=="back"){s=r==="left"?-1.5707963267948966:1.5707963267948966
return new C.z(new C.z(0,d),s)}r=s.k1
w=A.hbp(s,A.aPP(r==null?"tv100":r),0)
s=w.c
r=w.a/2
v=s-r-18
u=this.b
t=-u/2+14
if(v<t)v=s+r+18
v=D.k.E(v,t,u/2-14)
return new C.z(new C.z(v,d),Math.atan2(s-v,-d))},
$S:1825}
A.bVb.prototype={
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
$S:1826}
A.d7s.prototype={
$0(){return A.hbf(this.a)},
$S:0}
A.d7t.prototype={
$1(d){var w=this.a
return w.m(new A.d7r(w,this.b))},
$S:8}
A.d7r.prototype={
$0(){var w=this.a
w.d=this.b
w.f.aa(0)
w.r=null},
$S:0}
A.d7u.prototype={
$1(d){var w=this.a
return w.m(new A.d7q(w))},
$S:8}
A.d7q.prototype={
$0(){var w=this.a
w.e=!1
w.r=null},
$S:0}
A.d7v.prototype={
$1(d){var w=this.a
return w.m(new A.d7p(w))},
$S:8}
A.d7p.prototype={
$0(){var w=this.a
w.e=!0
w.r=null},
$S:0}
A.d7w.prototype={
$1(d){var w=this.a
return w.m(new A.d7o(w,this.b,d))},
$S:34}
A.d7o.prototype={
$0(){var w=this.a,v=this.c
v.toString
w.f.n(0,this.b,v)
w.r=null},
$S:0}
A.d7x.prototype={
$1(d){var w,v,u=null,t=this.a,s=B.zt[t.d],r=this.b,q=s.e.h(0,r)
q.toString
w=x.N
q=C.H([r,q],w,w)
t=t.f.h(0,r)
t.toString
v=A.hur(s.b,q,C.H([r,t],w,w))
t=v.a
s=t===B.v9
if(s)r="Right: this follows the diagram."
else{r=v.b
r=D.d.gI(r).c+" "+D.d.gI(r).e}if(s)t=D.be
else t=t===B.TO?D.bu:D.c7
return C.d(r,u,u,u,u,u,u,C.l(u,u,t,u,u,u,u,u,u,u,u,12.5,u,u,u,u,1.3,!0,u,u,u,u,u,u,u,u),u,u,u)},
$S:395}
A.d7y.prototype={
$0(){var w=this.a
return w.m(new A.d7n(w))},
$S:0}
A.d7n.prototype={
$0(){var w=this.a,v=B.zt[w.d]
return w.r=A.hur(v.b,v.e,w.f)},
$S:0}
A.fBR.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k=this
for(w=k.a*1.8,v=k.b,u=k.c,t=k.d,s=0.3*t,t=0.05*t,r=0;r<d;++r){q=w+r*0.173
p=D.k.F(q,1)
o=Math.sin((r*3.1+D.k.bf(q))*12.9898)*43758.5453
n=(o-Math.floor(o))*3.141592653589793*2
o=Math.sin((r+5)*12.9898)*43758.5453
m=e*(0.6+(o-Math.floor(o))*0.8)
q=u.$1(new A.q(Math.cos(n)*p*m,Math.sin(n)*p*m-p*p*6,3+p*3))
l=C.ar(E.Z4,F.MH,p)
l.toString
v.fV(q,s*(1-p*0.6)+t,l,3,5,0)}},
$S:1827}
A.fBQ.prototype={
$3(d,e,f){var w,v,u,t,s,r,q,p,o,n=this,m=n.a
m.d=0.34
for(w=n.b,v=w*0.45,u=n.c,t=n.d,s=1-e,r=0;r<d;++r){q=D.k.F(v+r/d,1)
p=u.$1(new A.q(Math.sin(r*1.7+w)*1.4+q*1.5,q*f-1,3.5+q*4))
o=C.ar(H.Bi,B.bpi,s)
o.toString
o=C.ar(o,B.bbY,q)
o.toString
m.fV(p,(1.1+q*3.4)*t,o,3,6,0)}m.d=1},
$S:1828}
A.fBl.prototype={
$5(d,e,f,g,h){return this.a.push(new A.wp(d,e,f,g,h))},
$S:z+119}
A.fBq.prototype={
$2(d,e){var w=this.a
return new C.Z(w,new A.fBr(d,e),C.T(w).k("Z<1>")).gL(0)},
$S:z+120}
A.fBr.prototype={
$1(d){return d.a.c===this.a&&d.b.c===this.b},
$S:z+12}
A.fBm.prototype={
$1(d){return d.b.c===B.aSk},
$S:z+12}
A.fBn.prototype={
$1(d){return d.a.c===B.aXN},
$S:z+12}
A.fBo.prototype={
$1(d){return!1},
$S:z+12}
A.fBp.prototype={
$1(d){return!1},
$S:z+12}
A.fkL.prototype={
$1(d){return D.d.b3(this.a,new A.fkM(d))},
$S:3}
A.fkM.prototype={
$1(d){return d.a===this.a},
$S:z+45}
A.cz8.prototype={
$1(d){return A.hTY(d)},
$S:z+12}
A.cz9.prototype={
$2(d,e){return d+e},
$S:70}
A.cza.prototype={
$1(d){return d.b.a===B.v9},
$S:z+35}
A.fBs.prototype={
$2(d,e){var w=this.a.h(0,d)
if(w==null)this.b.push(new A.wp("LEAD_MISSING",B.TO,"The "+d+" lead is not connected.","Every lead on the diagram needs its connection.","Connect the "+d+" lead to "+e+"."))
else if(w!==e)this.b.push(new A.wp("LEAD_WRONG",B.aPV,"The "+d+" lead is connected to "+w+", but the diagram says "+e+".","Connections follow the approved wiring diagram.","Move the "+d+" lead to "+e+"."))},
$S:117}
A.fZ2.prototype={
$1(d){var w,v,u,t,s,r=null,q=C.aJ(d,r,x.w).w,p=x.p,o=C.a([B.fvU,D.am,B.fPx,D.W],p)
for(w=0;w<5;++w){v=B.dbB[w]
u=D.c.j(0.05)
t=new C.aP(12,12)
s=new C.ay(D.bC,1,D.r,-1)
o.push(C.p(r,C.x(C.a([new C.y(v.a+": "+v.b,r,D.aTB,r,r,r,r,r,r,r,r,r),D.cM,new C.y("Goes to: "+v.c+"\nCircuit: "+v.d,r,H.Ee,r,r,r,r,r,r,r,r,r),D.cM,new C.y(v.e,r,D.aUi,r,r,r,r,r,r,r,r,r),D.cM,new C.y("Exception: "+v.f,r,B.foa,r,r,r,r,r,r,r,r,r)],p),D.E,r,D.e,D.i,0,D.p),D.f,r,r,new C.o(u,r,new C.bI(s,s,s,s),new C.bj(t,t,t,t),r,r,D.n),r,r,r,D.cu,D.yg,r,r,r))}o.push(D.am)
o.push(B.fxd)
return C.bm(!0,new C.cU(new C.aZ(0,1/0,0,q.a.b*0.85),C.cn(o,r,D.bQ,r,r,D.ah,!0),r),!0,!1,D.af,!0,!0)},
$S:27}
A.fZ0.prototype={
$1(d){return new A.a1h(this.a,this.b,null)},
$S:z+89}
A.faz.prototype={
$1(d){var w=this.a,v=w.a.c,u=this.b
d.toString
v.c.n(0,u,d)
w.m(new A.fay(w,u,d))},
$S:174}
A.fay.prototype={
$0(){var w=this.c
this.a.d.n(0,this.b,w)
return w},
$S:0}
A.faA.prototype={
$0(){var w=this.a
w.m(new A.fax(w,w.a.c.br0(0)))},
$S:0}
A.fax.prototype={
$0(){return this.a.e=this.b},
$S:0}
A.faB.prototype={
$1(d){return d.b.a!==B.v9},
$S:z+35}
A.faC.prototype={
$0(){var w=this.a,v=w.c
v.toString
w=w.e
C.a4(v,!1).O(w)
return null},
$S:0}
A.bSH.prototype={
$1(d){return this.a.a.$0()},
$S:11}
A.bSG.prototype={
$1(d){var w=this.a
if(!w.c)return
w.a.$0()
if(w.c)w.b_u()},
$S:9};(function aliases(){var w=A.aNY.prototype
w.byG=w.q})();(function installTearOffs(){var w=a._instance_0u,v=a._instance_1u,u=a.installStaticTearOff,t=a.installInstanceTearOff,s=a._instance_2u,r=a._instance_0i
var q
w(q=A.aeg.prototype,"gbWw","bWx",0)
v(q,"gLN","a5j",68)
u(A,"ihX",3,null,["$3"],["i3K"],28,0)
w(q=A.aoK.prototype,"gc6W","c6X",0)
w(q,"gbqU","bqV",0)
t(q,"gczB",0,0,null,["$1$done","$0"],["aBH","czC"],121,0,0)
w(q,"gcBE","cBF",0)
w(q,"gbOV","bOW",0)
v(A.aU0.prototype,"gcSd","cSe",17)
s(q=A.aEJ.prototype,"gbNY","bNZ",30)
w(q,"giW","iF",0)
t(q,"gc8b",0,1,null,["$2$keepTour","$1"],["axF","AC"],58,0,0)
v(q,"gc8f","c8g",9)
w(q,"gbPU","bPV",0)
w(q,"gbPW","bPX",0)
w(q,"gbQf","bQg",0)
w(q,"gc39","c3a",0)
w(q,"gbGm","bGn",0)
w(q,"gcE7","cE8",0)
w(q,"gcs8","cs9",0)
w(q,"gbOB","bOC",0)
w(q,"gaQL","asG",0)
w(q,"gc89","c8a",0)
w(q,"gcuK","cuL",0)
w(q,"gcE1","cE2",19)
w(q,"gczD","Sb",0)
w(q,"gb7y","a2M",0)
w(q,"gb7N","a2Q",0)
w(q,"gcG7","cG8",0)
w(q,"gbTy","bTz",0)
w(q,"gczA","B5",0)
w(q,"gc8e","En",19)
w(q,"gchi","a0u",19)
w(q,"gcgI","a0l",19)
w(q,"gaNz","bBH",19)
w(q,"gc8j","c8k",0)
w(q,"gcpl","cpm",0)
r(q,"gc8h","c8i",0)
u(A,"hxR",3,null,["$3"],["ij4"],28,0)
u(A,"haS",3,null,["$3"],["hy4"],28,0)
w(q=A.aAy.prototype,"gc8o","qC",0)
w(q,"gJ7","ol",0)
v(q,"gJ8","J9",9)
w(q,"gcmk","cml",0)
w(q,"gcBH","cBI",0)
w(q=A.aGu.prototype,"gJ7","ol",0)
v(q,"gJ8","J9",9)
w(q,"gc8p","c8q",0)
w(q=A.aAS.prototype,"gJ7","ol",0)
v(q,"gJ8","J9",9)
r(q,"gc8m","c8n",0)
w(q=A.aBL.prototype,"gJ7","ol",0)
v(q,"gJ8","J9",9)
w(q=A.aFb.prototype,"gc8t","b_5",0)
v(q,"gc8u","c8v",9)
w(q,"gcx_","cx0",0)
v(A.XK.prototype,"gaqf","bq2",111)
w(q=A.aFi.prototype,"gc8E","c8F",0)
s(q,"gc8y","c8z",30)
w(q,"gbSg","aUc",0)
w(q,"gc37","c38",0)
w(q,"gbEe","bEf",0)
w(q,"gbEc","bEd",0)
w(q,"gc8A","aev",0)
v(q,"gc8C","c8D",9)
w(q=A.aFm.prototype,"gc8J","b_8",0)
v(q,"gc8K","c8L",9)})();(function inheritance(){var w=a.mixin,v=a.mixinHard,u=a.inheritMany,t=a.inherit
u(C.lz,[A.eZV,A.rl,A.JH,A.FL,A.FS])
u(C.af,[A.a9N,A.avz,A.aoJ,A.apJ,A.IW,A.aIY,A.NH,A.awu,A.DZ,A.a9G,A.a57,A.aBK,A.afL,A.Wf,A.Oj,A.as_,A.aq5,A.a1h])
u(C.ah,[A.aNP,A.aNY,A.aoK,A.bkN,A.aEJ,A.btW,A.bkO,A.btK,A.aAy,A.aGu,A.aAS,A.aBL,A.bxo,A.aFb,A.aFi,A.aFm,A.ben,A.bv0])
t(A.aeg,A.aNP)
t(A.bpu,O.auu)
u(C.aD,[A.q,A.kp,A.cX,A.hh,A.tT,A.fP,A.fl,A.bUW,A.cDr,A.G3,A.PQ,A.cLo,A.bc7,A.bcs,A.bhB,A.dp7,A.MC,A.duF,A.djj,A.lG,A.rc,A.Hq,A.aT6,A.bHY,A.ho,A.FW,A.zc,A.xl,A.aUf,A.a4p,A.akm,A.bMk,A.bKq,A.djM,A.rP,A.Sy,A.aTB,A.bxl,A.bKs,A.Aj,A.cAS,A.pD,A.bKe,A.Fp,A.P0,A.I7,A.M0,A.aU0,A.fM,A.CA,A.jE,A.T3,A.b9k,A.me,A.fo,A.E7,A.pS,A.abK,A.on,A.aWn,A.a5l,A.aWs,A.f1i,A.Mn,A.Qj,A.bVc,A.pA,A.jQ,A.N3,A.cnT,A.Fe,A.nu,A.Xg,A.cnJ,A.z7,A.oy,A.XW,A.aw2,A.aUP,A.eD,A.XK,A.j_,A.rN,A.uD,A.Mv,A.cw5,A.y3,A.tN,A.aa1,A.i9,A.csE,A.Az,A.bsh,A.aWu,A.b9O,A.akr,A.cz5,A.cCG,A.a4k,A.bMu,A.wp,A.tl,A.b6p,A.ab9,A.aba,A.vg,A.b57,A.b8h,A.cz7,A.PL,A.a5g])
u(C.hx,[A.c_Y,A.c_Z,A.c_X,A.c0_,A.c00,A.fZk,A.fZi,A.fZj,A.fZh,A.fZ6,A.bJF,A.bJG,A.bJH,A.bJI,A.bJK,A.bJJ,A.bJE,A.bJD,A.ctF,A.ctG,A.cty,A.ctz,A.ctA,A.ctB,A.f2o,A.f2n,A.f2k,A.f2l,A.f2m,A.f2i,A.bTI,A.bTB,A.bTM,A.bTH,A.bTP,A.bTN,A.bTS,A.bTD,A.bTF,A.bTE,A.bI_,A.bHZ,A.fQe,A.fyS,A.fyT,A.fyL,A.fyM,A.fyN,A.fyO,A.fyP,A.fyQ,A.fyR,A.fkW,A.foj,A.fxx,A.fyD,A.fyE,A.fyF,A.c3Z,A.c3X,A.c3P,A.c3I,A.c3G,A.c3A,A.c3H,A.c3q,A.c3r,A.c3s,A.fB9,A.bMm,A.bMp,A.fEt,A.fi8,A.bKt,A.fZf,A.fZg,A.fZd,A.fAI,A.cAU,A.cAV,A.bKf,A.bKm,A.bKn,A.bKo,A.bKp,A.bKg,A.bKh,A.bKi,A.bKk,A.bKl,A.bL3,A.bL0,A.bL1,A.bL2,A.bL7,A.bL6,A.bL4,A.bL8,A.dSo,A.dSj,A.dSD,A.dSm,A.dSG,A.fBj,A.fZQ,A.fAv,A.fAw,A.fAt,A.fAu,A.fR7,A.fR8,A.fBw,A.fBx,A.fBu,A.fBv,A.fyJ,A.fyK,A.fZP,A.flc,A.fyv,A.fZM,A.fZJ,A.bUn,A.bUm,A.bUY,A.bUZ,A.bV_,A.bV0,A.bV1,A.bV5,A.bV2,A.bV3,A.bV9,A.bV8,A.bV7,A.bV6,A.edY,A.edV,A.edW,A.edX,A.eaK,A.ed8,A.ed9,A.ed5,A.e9j,A.edB,A.edC,A.ecO,A.ebP,A.ebL,A.eaD,A.ebv,A.eaN,A.ebk,A.edP,A.eam,A.ebi,A.ebj,A.eaY,A.ebx,A.e9R,A.e9Q,A.eai,A.ecD,A.ecC,A.ecn,A.eck,A.edz,A.edy,A.edq,A.edl,A.edk,A.ecY,A.edN,A.edD,A.ebz,A.ebA,A.ebB,A.ebl,A.ebm,A.ecF,A.ecT,A.ebs,A.ebr,A.ebt,A.ecU,A.ebR,A.ebS,A.ec_,A.ec0,A.ec1,A.ebD,A.ebE,A.edO,A.ebG,A.ebF,A.e9i,A.e9c,A.e9d,A.e9e,A.edS,A.e9C,A.e9q,A.e9r,A.e9E,A.e9k,A.ect,A.dv4,A.f6N,A.f6O,A.f6P,A.f6M,A.fz3,A.fza,A.fz5,A.fz2,A.fyW,A.fz7,A.fz9,A.fz8,A.fz6,A.fyX,A.fyV,A.fz_,A.fz0,A.fQp,A.fQn,A.fQm,A.fQo,A.fze,A.fzq,A.fzf,A.fzg,A.fzi,A.fzl,A.fzm,A.fzn,A.fzo,A.fzj,A.fso,A.fsj,A.fsk,A.fsl,A.frL,A.frN,A.frY,A.fs8,A.fsm,A.fsd,A.fse,A.fsf,A.fsg,A.fsh,A.fsi,A.frO,A.frP,A.frQ,A.frR,A.frS,A.frT,A.frU,A.frV,A.frW,A.frX,A.frZ,A.fs_,A.fs0,A.fs1,A.fs2,A.fs3,A.fs4,A.fs5,A.fs6,A.fs7,A.fs9,A.fsa,A.fsb,A.fsc,A.fCo,A.fCp,A.fCq,A.fiE,A.fiu,A.fte,A.fsM,A.fsN,A.fsO,A.fsP,A.ft_,A.ft7,A.ft8,A.ft9,A.fta,A.ftb,A.ftc,A.ftd,A.fsQ,A.fsR,A.fsS,A.fsT,A.fsU,A.fsV,A.fsW,A.fsX,A.fsY,A.fsZ,A.ft0,A.ft1,A.ft2,A.ft3,A.ft4,A.ft5,A.ft6,A.fmt,A.fzx,A.fzt,A.fzw,A.fzv,A.dSH,A.f6B,A.fRB,A.fRA,A.daC,A.daF,A.daI,A.daK,A.db2,A.dbi,A.db_,A.dbj,A.eWO,A.eWW,A.eWX,A.ddP,A.ddZ,A.de_,A.de1,A.dkT,A.dl3,A.dl2,A.dl5,A.fi9,A.fie,A.fif,A.fid,A.fA8,A.fA7,A.fA6,A.fzd,A.fBO,A.cnN,A.cnO,A.cnK,A.cnP,A.cnQ,A.cnR,A.cnS,A.cnL,A.cnM,A.fA5,A.fA3,A.fzY,A.fA0,A.fzZ,A.fA_,A.fA4,A.fA1,A.fA2,A.fzX,A.fQJ,A.eqU,A.eqz,A.eqE,A.eqV,A.eqF,A.eqG,A.eqH,A.eqS,A.eqW,A.eqY,A.eqX,A.eqM,A.eqK,A.fZ5,A.csK,A.csR,A.csS,A.csT,A.csU,A.csW,A.csV,A.csJ,A.csH,A.csI,A.csP,A.csQ,A.csL,A.csM,A.csN,A.csO,A.euz,A.euA,A.euB,A.eve,A.evg,A.evi,A.euJ,A.euG,A.ev0,A.ev1,A.euO,A.euP,A.euQ,A.euT,A.euU,A.euV,A.euW,A.euX,A.euY,A.euZ,A.ev_,A.euR,A.euS,A.evP,A.evV,A.evG,A.evd,A.ev6,A.ev7,A.fsr,A.fss,A.fA9,A.fAa,A.fAb,A.fAe,A.fAc,A.fR2,A.fR3,A.fR4,A.cwa,A.cw6,A.cw8,A.cw9,A.cw7,A.exf,A.exg,A.exa,A.ex6,A.exr,A.exq,A.exs,A.ext,A.exo,A.exl,A.fld,A.bVa,A.bVb,A.d7t,A.d7u,A.d7v,A.d7w,A.d7x,A.fBQ,A.fBl,A.fBr,A.fBm,A.fBn,A.fBo,A.fBp,A.fkL,A.fkM,A.cz8,A.cza,A.fZ2,A.fZ0,A.faz,A.faB,A.bSH,A.bSG])
u(C.js,[A.c_W,A.ctE,A.ctx,A.ctC,A.ctD,A.bTC,A.bTK,A.bTJ,A.fxt,A.fyU,A.fxy,A.c3F,A.bMo,A.bMl,A.bMq,A.bMn,A.bKr,A.c1A,A.fZe,A.fAJ,A.cAT,A.bKj,A.bL5,A.fCD,A.fCE,A.fCF,A.fCG,A.fCH,A.fBt,A.fjT,A.fCI,A.fCJ,A.fCK,A.fCL,A.fCM,A.fCN,A.fCO,A.fCP,A.fCQ,A.fCR,A.fZK,A.fZL,A.bV4,A.ec6,A.eb4,A.edA,A.ecN,A.ebO,A.eaP,A.ecB,A.edx,A.edj,A.ebZ,A.fzb,A.fz4,A.fz1,A.fyY,A.fyZ,A.fzs,A.fzh,A.fzk,A.fzr,A.fsn,A.frM,A.fCr,A.fzu,A.daG,A.eWT,A.ddO,A.fBP,A.csX,A.evc,A.exn,A.fBR,A.fBq,A.cz9,A.fBs])
u(C.p_,[A.xg,A.aTC])
u(C.md,[A.b6s,A.bfx,A.bjh])
t(A.bs4,A.aNY)
u(C.iF,[A.f2j,A.fjN,A.bTR,A.bTL,A.bTG,A.bTO,A.fxz,A.fxw,A.c3W,A.c3K,A.c3Q,A.c3Y,A.c3N,A.c3M,A.c3k,A.c3L,A.c3O,A.c3J,A.c3D,A.c3C,A.c3E,A.c3B,A.c3p,A.c3o,A.c3t,A.c3u,A.c3v,A.c3w,A.c3x,A.c3n,A.c3y,A.c3l,A.c3m,A.c3z,A.c3T,A.c3U,A.c3S,A.c3V,A.c3R,A.fBa,A.dSn,A.dSA,A.dSu,A.dSv,A.dSt,A.dSk,A.dSE,A.dSC,A.dSB,A.dSi,A.dSp,A.dSq,A.dSr,A.dSs,A.dSl,A.dSx,A.dSy,A.dSz,A.dSw,A.dSF,A.fyw,A.edU,A.ecI,A.ecJ,A.ecH,A.ecK,A.ebg,A.eda,A.ecd,A.ece,A.ecf,A.ecg,A.ech,A.eaI,A.eaH,A.eaJ,A.eaF,A.eaG,A.eaE,A.eaT,A.eaU,A.eaV,A.ec8,A.ec7,A.ec9,A.ec5,A.eca,A.ec4,A.ecb,A.ec3,A.ecc,A.ec2,A.eak,A.eal,A.eb6,A.eb5,A.eb7,A.eb3,A.eb8,A.eb2,A.eb9,A.eb1,A.eba,A.eb0,A.ebb,A.eb_,A.ebc,A.eaZ,A.ed6,A.ed7,A.ebu,A.e9K,A.ebp,A.ebo,A.ebq,A.ebn,A.ecP,A.ecM,A.ecL,A.ebN,A.ebM,A.ebJ,A.ebI,A.ebK,A.ebH,A.ebd,A.ebe,A.ecE,A.eaR,A.eaQ,A.eaS,A.ecQ,A.ed0,A.eaO,A.eaM,A.eaL,A.ed_,A.ebh,A.eaX,A.eby,A.e9S,A.e9P,A.e9T,A.e9O,A.e9U,A.e9N,A.e9V,A.e9M,A.e9W,A.e9L,A.eaj,A.ecx,A.ecw,A.ecy,A.ecz,A.ecA,A.ecl,A.ecj,A.ecm,A.eci,A.edp,A.edo,A.edr,A.eds,A.edt,A.edu,A.edv,A.edw,A.edf,A.edd,A.ede,A.edg,A.edc,A.edh,A.edi,A.ecX,A.ecZ,A.edm,A.edb,A.ed3,A.ed4,A.ecW,A.ed2,A.edK,A.edL,A.edM,A.edE,A.edF,A.edG,A.edH,A.edI,A.edJ,A.eaW,A.ebC,A.ecR,A.ebf,A.ecG,A.ecS,A.ecV,A.ed1,A.ebU,A.ebV,A.ebT,A.ebW,A.ebX,A.ebQ,A.ebY,A.e9h,A.e9f,A.ebw,A.edn,A.ecu,A.ecv,A.e9g,A.eas,A.eat,A.eau,A.eav,A.eaw,A.eax,A.ear,A.eay,A.eaq,A.eaz,A.eap,A.eaA,A.eao,A.eaB,A.ean,A.eaC,A.edR,A.edT,A.edQ,A.ea4,A.ea5,A.ea6,A.eaa,A.eab,A.eac,A.ea3,A.ead,A.ea2,A.eae,A.ea1,A.eaf,A.eag,A.ea0,A.eah,A.ea_,A.ea7,A.e9Z,A.ea8,A.e9Y,A.ea9,A.e9X,A.e9p,A.e9D,A.e9u,A.e9F,A.e9o,A.e9G,A.e9H,A.e9n,A.e9I,A.e9J,A.e9s,A.e9m,A.e9t,A.e9l,A.e9v,A.e9w,A.e9x,A.e9y,A.e9z,A.e9A,A.e9B,A.ecq,A.ecr,A.ecp,A.ecs,A.eco,A.f6L,A.f6K,A.cgo,A.fzp,A.fAs,A.dSI,A.dSJ,A.dSK,A.dSO,A.dSP,A.dSQ,A.dSR,A.dSS,A.dST,A.dSU,A.dSV,A.dSL,A.dSM,A.dSN,A.f6A,A.cxi,A.cxj,A.bXi,A.daS,A.daQ,A.daR,A.daP,A.daD,A.daE,A.daH,A.daJ,A.daL,A.daM,A.daN,A.daO,A.daT,A.daU,A.dbb,A.db3,A.db4,A.dbc,A.dbd,A.db1,A.dbe,A.db0,A.dbf,A.dbg,A.dbh,A.db5,A.daZ,A.db6,A.db7,A.daY,A.db8,A.daX,A.db9,A.daW,A.dba,A.daV,A.eWR,A.eWS,A.eWQ,A.eWK,A.eWL,A.eWM,A.eWN,A.eWP,A.eX_,A.eWY,A.eWV,A.eWZ,A.eWU,A.ddU,A.ddV,A.ddT,A.ddM,A.ddQ,A.ddR,A.ddS,A.ddN,A.de4,A.de0,A.ddY,A.de2,A.ddX,A.de3,A.ddW,A.dkY,A.dkZ,A.dkX,A.dkS,A.dkU,A.dkV,A.dkW,A.dl6,A.dl1,A.dl4,A.dl0,A.dl_,A.fic,A.fia,A.fib,A.cbJ,A.fzU,A.fzV,A.fzW,A.eqP,A.eqQ,A.eqO,A.eqI,A.eqx,A.eqy,A.eqC,A.eqD,A.eqN,A.eqR,A.eqT,A.eqB,A.eqA,A.er_,A.eqZ,A.eqJ,A.eqL,A.evt,A.evu,A.evs,A.euv,A.euw,A.euu,A.eux,A.euy,A.eut,A.euK,A.euM,A.euC,A.euD,A.ev2,A.euL,A.evp,A.evq,A.evr,A.evn,A.evo,A.evm,A.evf,A.evh,A.evj,A.evk,A.evl,A.evv,A.euH,A.euI,A.euE,A.euF,A.euN,A.evO,A.evQ,A.evA,A.evD,A.evE,A.evC,A.evF,A.evB,A.evR,A.evz,A.evS,A.evy,A.evT,A.evx,A.evU,A.evW,A.evw,A.evH,A.evI,A.evJ,A.evK,A.evL,A.evM,A.evN,A.ev4,A.ev5,A.ev3,A.ev8,A.ev9,A.eva,A.evb,A.fAd,A.exi,A.exj,A.exh,A.ex7,A.exc,A.exd,A.exb,A.exe,A.ex9,A.ex4,A.ex5,A.ex8,A.exv,A.exu,A.exp,A.exk,A.exm,A.d7s,A.d7r,A.d7q,A.d7p,A.d7o,A.d7y,A.d7n,A.fay,A.faA,A.fax,A.faC])
u(C.aw,[A.aYS,A.Uw,A.acM,A.bjS,A.b7K,A.aXS,A.a79])
w(A.aNP,O.aut)
v(A.aNY,C.cf)})()
C.j0(b.typeUniverse,JSON.parse('{"a9N":{"af":[],"v":[]},"aeg":{"ah":["a9N<1>"]},"avz":{"af":[],"v":[]},"xg":{"aC":[]},"b6s":{"aC":[]},"bs4":{"ah":["avz"]},"aoJ":{"af":[],"v":[]},"aoK":{"ah":["aoJ"]},"aTC":{"aC":[]},"aYS":{"aw":[],"v":[]},"Uw":{"aw":[],"v":[]},"apJ":{"af":[],"v":[]},"bkN":{"ah":["apJ"]},"acM":{"aw":[],"v":[]},"bfx":{"aC":[]},"IW":{"af":[],"v":[]},"aIY":{"af":[],"v":[]},"aEJ":{"ah":["IW"]},"bjS":{"aw":[],"v":[]},"bjh":{"aC":[]},"btW":{"ah":["aIY"]},"awu":{"af":[],"v":[]},"DZ":{"af":[],"v":[]},"a9G":{"af":[],"v":[]},"a57":{"af":[],"v":[]},"aBK":{"af":[],"v":[]},"afL":{"af":[],"v":[]},"NH":{"af":[],"v":[]},"bkO":{"ah":["NH"]},"btK":{"ah":["awu"]},"b7K":{"aw":[],"v":[]},"aXS":{"aw":[],"v":[]},"aAy":{"ah":["DZ"]},"aGu":{"ah":["a9G"]},"aAS":{"ah":["a57"]},"aBL":{"ah":["aBK"]},"bxo":{"ah":["afL"]},"a79":{"aw":[],"v":[]},"Wf":{"af":[],"v":[]},"aFb":{"ah":["Wf"]},"Oj":{"af":[],"v":[]},"aFi":{"ah":["Oj"]},"as_":{"af":[],"v":[]},"aFm":{"ah":["as_"]},"aq5":{"af":[],"v":[]},"ben":{"ah":["aq5"]},"a1h":{"af":[],"v":[]},"bv0":{"ah":["a1h"]}}'))
C.CU(b.typeUniverse,JSON.parse('{"bpu":1,"aNP":1}'))
var y={T:"A hot wire never goes on the green ground screw.",W:"A shut-off valve goes on the pipe that comes out of the wall.",v:"Both black wires go on brass screws. It does not matter which one.",r:"Brass screws are for the HOT wire (black).",q:"Each switch has its own screw on the other side, and each goes to its own light.",R:"Fasten the bare copper ground to the GREEN screw.",E:"Fasten the black hot to one HOT (X or Y) brass screw.",k:"Fasten the red hot to the other HOT brass screw.",N:"Fasten the white neutral to the silver NEUTRAL (W) screw.",b:"Fold the wires back and push the device into the box.",P:"LOAD is for feeding other outlets further down the line. It is covered with tape. Power comes in on the LINE screws.",x:"Look at the device and the wires. Learn which wire is which before you touch a screw.",M:"Move it with the arrow buttons, turn it, change its colour or take it out.",G:"Neutral goes on a silver screw. The silver screws stay joined, so one wire feeds both halves.",o:"Pick a paint colour above to change this wall.",n:"Put the cover plate on, turn the power on and test.",Q:"Silver screws are for the NEUTRAL wire (white).",f:"Switch the power on and flip the wall switch.",t:"The bare copper ground wire only goes on the GREEN screw.",u:"The black hot wire goes on a brass screw.",C:"The gold screws are BRASS. They are for the HOT wire (black).",Z:"The green screw is for the bare copper ground wire.",l:"The two hot wires (black and red) go on the two brass screws, X and Y, in either order.",p:"The two hot wires go on the two brass screws, in either order.",X:"The two traveler wires go on the two brass traveler screws, in either order.",g:"The two travelers coming from the first three-way go on the two top screws.",_:"The two travelers going to the second three-way go on the two bottom screws.",c:"The white neutral wire goes on a silver screw.",I:"The white neutral wire goes on the silver W screw.",B:"The white-silver screws are NICKEL. They are for the NEUTRAL wire (white).",D:"There is no medicine left. Buy some in the shop.",O:"Turn the breaker OFF and test that the wires are dead.",Y:"You are at the street light. Press Fix the street light."}
var x=(function rtii(){var w=C.at
return{dw:w("m8<u?>"),ff:w("aT6"),l:w("bw<m,m>"),e:w("bw<m,K>"),M:w("dE<m>"),hg:w("a4p"),cD:w("aUP"),e7:w("ex<m>"),eP:w("rl"),gN:w("I1"),eB:w("me"),fa:w("aA<MM?>"),v:w("du<G,m>"),fC:w("I7"),m:w("O<lG>"),gQ:w("O<M0>"),V:w("O<ac>"),O:w("O<u>"),bm:w("O<a4k>"),fW:w("O<aUf>"),B:w("O<a4p>"),C:w("O<xl>"),dI:w("O<Mn>"),bP:w("O<ex<m>>"),gw:w("O<Mv>"),dh:w("O<I1>"),_:w("O<me>"),dY:w("O<on>"),cX:w("O<aWn>"),D:w("O<a5l>"),ha:w("O<I7>"),r:w("O<fM>"),E:w("O<hh>"),Z:w("O<jQ>"),gL:w("O<ai<G>>"),ez:w("O<a8<m,aD>>"),c7:w("O<a8<m,@>>"),f4:w("O<a8<m,ch>>"),T:w("O<i9>"),dN:w("O<t>"),F:w("O<oy>"),fI:w("O<nu>"),g:w("O<h_>"),z:w("O<kp>"),gl:w("O<b57>"),a6:w("O<+(a94,G)>"),L:w("O<+(m,m)>"),dt:w("O<+(q,q)>"),d6:w("O<+(K,m)>"),f:w("O<+(K,K)>"),ek:w("O<+(G,m)>"),aJ:w("O<+(m,G,G)>"),dV:w("O<+(K,K,u)>"),al:w("O<+(G,K,R)>"),gp:w("O<+(G,G,ai<t>)>"),dQ:w("O<+(G,G,G)>"),eV:w("O<+(K,K,K,K)>"),az:w("O<+(G,G,K,R,m)>"),fP:w("O<P0>"),e3:w("O<aa1>"),fB:w("O<wp>"),a:w("O<fP>"),gD:w("O<XW>"),y:w("O<rP>"),s:w("O<m>"),fJ:w("O<ab9>"),dH:w("O<aba>"),W:w("O<vg>"),bz:w("O<Aj>"),o:w("O<q>"),p:w("O<v>"),d:w("O<jE>"),f5:w("O<PQ>"),gR:w("O<bc7>"),bl:w("O<G3>"),h:w("O<Az>"),I:w("O<j_>"),x:w("O<ho>"),aQ:w("O<Qj>"),fG:w("O<bsh>"),X:w("O<pD>"),u:w("O<R>"),n:w("O<K>"),t:w("O<G>"),dS:w("O<aC?>"),k:w("O<ch>"),eF:w("cw<ah<af>>"),dg:w("ai<K>"),j:w("ai<@>"),b:w("a8<m,@>"),G:w("a8<@,@>"),w:w("iA"),P:w("cv"),q:w("cX"),aU:w("aD"),dx:w("t"),ej:w("Jr"),fX:w("kp"),cE:w("a9N<G>"),J:w("+(K,K)"),c5:w("dw<G>"),cR:w("XK"),K:w("fP"),cH:w("aw2"),N:w("m"),ec:w("jc<m>"),dZ:w("b8h"),g6:w("bp<K>"),Q:w("q"),ac:w("bV<G>"),cI:w("jV<m>"),am:w("Z<me>"),fZ:w("Z<Fe>"),cc:w("Z<m>"),dD:w("Z<G>"),c1:w("hn"),gh:w("CA"),gf:w("PQ"),bB:w("bcs"),c9:w("bhB"),R:w("R"),i:w("K"),A:w("@"),S:w("G"),c:w("MC?"),eT:w("MM?"),U:w("ai<@>?"),dy:w("a8<m,@>?"),fF:w("a8<@,@>?"),cU:w("q8?"),Y:w("ch"),H:w("~")}})();(function constants(){var w=a.makeConstList
B.aZw=new A.eD(!0,"The water is on and nothing leaks. Perfect job!",!1,"")
B.aZx=new A.eD(!0,"Primer and paint rolled on.",!1,"")
B.aZy=new A.eD(!1,"This call is over. Start a new one.",!1,"")
B.aZz=new A.eD(!0,"Recorded.",!1,"")
B.aZA=new A.eD(!1,"That is not a place for a sheet.",!1,"")
B.aZB=new A.eD(!0,"Sanded smooth. Wear a mask: the dust is bad to breathe.",!1,"")
B.abY=new A.eD(!1,"There is no device here.",!1,"")
B.aZC=new A.eD(!0,"You look closely. Everything looks fine here.",!1,"")
B.aZD=new A.eD(!1,"ZAP! You were shocked badly and it was your last life. Always turn the breaker OFF and test before you touch wires.",!0,"shock")
B.aZE=new A.eD(!0,"Paper tape pressed into the seam.",!1,"")
B.aZF=new A.eD(!0,"Unplugged.",!1,"")
B.aZG=new A.eD(!0,"Breaker OFF. It is safe to work on the wires.",!1,"")
B.aZH=new A.eD(!1,"ZAP! You were shocked badly. That was your last life: the job is over. Lesson: ALWAYS turn the breaker OFF and test the wires before you touch them.",!0,"shock")
B.aZI=new A.eD(!1,"There is nothing there.",!1,"")
B.aZJ=new A.eD(!1,"The outlet is burnt. Nothing works. Pull it out and put in a new one.",!0,"")
B.aZK=new A.eD(!0,"The water is on and nothing leaks yet, but the job is not finished.",!1,"")
B.aZL=new A.eD(!0,"Sheet hung. Now screw it to the studs.",!1,"")
B.aZM=new A.eD(!0,"Hole drilled through the middle of the stud, at the cable height. Holes go in the center so a nail cannot reach the cable.",!1,"")
B.aZN=new A.eD(!0,"Plugged in. Nothing happens because the breaker is off. Turn it on to test.",!1,"")
B.aZO=new A.eD(!0,"You flipped the tripped breaker fully OFF. Fix the problem before you turn it on again.",!1,"")
B.aZP=new A.eD(!0,"Click.",!1,"")
B.aZQ=new A.eD(!0,"The wires are folded back and the device is in the box. Now put the cover on.",!1,"")
B.aZR=new A.eD(!0,"Breaker OFF. The wires on this circuit are dead now. (Always test them to be sure.)",!1,"")
B.aZS=new A.eD(!1,"Nothing is wet.",!1,"")
B.aZT=new A.eD(!0,"Power is on.",!1,"")
B.aZU=new A.eD(!0,"Water OFF at the main valve. You can cut into the pipes safely now.",!1,"")
B.aZV=new A.eD(!0,"Opening cut around the box with the drywall saw. Keep it tight: the plate has to cover the edge.",!1,"")
B.aZW=new A.eD(!0,"Device pulled out of the box.",!1,"")
B.aZX=new A.eD(!0,"Screw set just below the paper, not through it.",!1,"")
B.aZY=new A.eD(!1,"ZAP! You touched a live wire. In Learn mode you are not hurt, but in real life this can kill. Switch the breaker OFF and test the wires first.",!0,"shock")
B.aZZ=new A.eD(!0,"Cover on. Now you can turn the breaker on and test.",!1,"")
B.Wu=new A.eD(!1,"",!1,"")
B.b__=new A.eD(!0,"Device taken out. You can put it somewhere else, or put in a new one.",!1,"")
B.b_0=new A.eD(!0,"Breaker back ON.",!1,"")
B.b_1=new A.eD(!1,"That is not a stud.",!1,"")
B.b_2=new A.eD(!0,"Off.",!1,"")
B.b_3=new A.eD(!1,"Nothing to flip yet.",!1,"")
B.b_4=new A.eD(!0,"Wire taken off.",!1,"")
B.b_5=new A.eD(!0,"The mud is dry.",!1,"")
B.b_6=new A.eD(!0,"Breaker reset.",!1,"")
B.b_7=new A.eD(!0,"Box mounted. (Careful: this is not a fan-rated box. A fan on it could fall.)",!1,"")
B.fOX=new C.y("Tap a piece of furniture, or add one:",null,D.Aj,null,null,null,null,null,null,null,null,null)
B.emq=new C.D(D.no,B.fOX,null)
B.b_e=new C.bM(D.a5,null,null,B.emq,null)
B.acq=new A.lG(0,0,0,0,1)
B.ad1=new C.aZ(0,290,0,1/0)
B.b1p=new C.bj(G.TA,G.TA,D.bH,D.bH)
B.bs1=new C.u(1,0.12156862745098039,0.13725490196078433,0.18823529411764706,D.q)
B.bs9=new C.u(1,0.054901960784313725,0.06274509803921569,0.09411764705882353,D.q)
B.d5J=w([B.bs1,B.bs9],x.O)
B.c1B=new C.a9(D.b_,D.b5,D.x,B.d5J,null,null)
B.b4o=new C.o(null,null,G.acQ,B.b1p,null,B.c1B,D.n)
B.Fw=new C.u(1,0.08627450980392157,0.10588235294117647,0.1411764705882353,D.q)
B.b2M=new C.bI(D.a0,D.a0,Ae.vy,D.a0)
B.b5e=new C.o(B.Fw,null,B.b2M,null,null,null,D.n)
B.b1A=new C.bj(D.mW,D.is,D.is,D.is)
B.b5k=new C.o(D.aJ,null,null,B.b1A,null,null,D.n)
B.fPC=new C.y("\u2600\ufe0f Let it dry",null,U.Ag,null,null,null,null,null,null,null,null,null)
B.b9q=new C.ci(D.A,null,null,B.fPC,null)
B.fPm=new C.y("\u23e9 Skip to the wiring",null,U.Ag,null,null,null,null,null,null,null,null,null)
B.b9y=new C.ci(D.A,null,null,B.fPm,null)
B.fDD=new C.y("\ud83c\udfd7\ufe0f",null,D.pD,null,null,null,null,null,null,null,null,null)
B.b9P=new C.ci(D.A,null,null,B.fDD,null)
B.fDq=new C.y("\ud83c\udfe0",null,D.aTQ,null,null,null,null,null,null,null,null,null)
B.bag=new C.ci(D.A,null,null,B.fDq,null)
B.bbG=new C.u(1,0.9294117647058824,0.9098039215686274,0.8627450980392157,D.q)
B.LE=new C.u(1,0.1803921568627451,0.20392156862745098,0.25098039215686274,D.q)
B.aee=new C.u(1,0.16470588235294117,0.10588235294117647,0.07058823529411765,D.q)
B.bbS=new C.u(1,0.9725490196078431,0.9647058823529412,0.9333333333333333,D.q)
B.vE=new C.u(1,0.5450980392156862,0.3686274509803922,0.20392156862745098,D.q)
B.bbY=new C.u(1,0.5568627450980392,0.5568627450980392,0.5882352941176471,D.q)
B.ael=new C.u(1,0.611764705882353,0.5568627450980392,0.4588235294117647,D.q)
B.F_=new C.u(1,0.24705882352941178,0.5607843137254902,0.30980392156862746,D.q)
B.bcd=new C.u(1,0.8392156862745098,0.9333333333333333,0.984313725490196,D.q)
B.oV=new C.u(1,0.9450980392156862,0.9450980392156862,0.9176470588235294,D.q)
B.bcD=new C.u(1,0.9098039215686274,0.9254901960784314,0.9372549019607843,D.q)
B.bcF=new C.u(1,0.4823529411764706,0.5098039215686274,0.5450980392156862,D.q)
B.bcO=new C.u(1,0.10588235294117647,0.4980392156862745,0.20392156862745098,D.q)
B.aeD=new C.u(1,0.7215686274509804,0.7450980392156863,0.7725490196078432,D.q)
B.nT=new C.u(1,0.5450980392156862,0.3686274509803922,0.23529411764705882,D.q)
B.aeF=new C.u(1,0.8509803921568627,0.8274509803921568,0.7725490196078432,D.q)
B.aeJ=new C.u(1,0.6549019607843137,0.6784313725490196,0.7098039215686275,D.q)
B.hs=new C.u(1,0.16862745098039217,0.17647058823529413,0.2,D.q)
B.F1=new C.u(1,0.8980392156862745,0.7529411764705882,0.4823529411764706,D.q)
B.LO=new C.u(1,0.8156862745098039,0.5098039215686274,0.27450980392156865,D.q)
B.Xv=new C.u(1,0.5411764705882353,0.41568627450980394,0.2784313725490196,D.q)
B.aeQ=new C.u(1,0.1843137254901961,0.4196078431372549,0.23529411764705882,D.q)
B.Xy=new C.u(1,0.2980392156862745,0.5450980392156862,0.2901960784313726,D.q)
B.xJ=new C.u(1,0.788235294117647,0.6274509803921569,0.22745098039215686,D.q)
B.aeW=new C.u(1,0.9411764705882353,0.5411764705882353,0.1411764705882353,D.q)
B.F7=new C.u(1,0.9921568627450981,0.9882352941176471,0.9686274509803922,D.q)
B.XC=new C.u(1,0.5568627450980392,0.5843137254901961,0.6196078431372549,D.q)
B.bez=new C.u(1,0.47843137254901963,0.35294117647058826,0.22745098039215686,D.q)
B.jI=new C.u(1,0.788235294117647,0.807843137254902,0.8392156862745098,D.q)
B.af5=new C.u(1,0.4196078431372549,0.45098039215686275,0.5019607843137255,D.q)
B.af6=new C.u(1,0.5568627450980392,0.35294117647058826,0.2901960784313726,D.q)
B.B7=new C.u(1,0.9294117647058824,0.9176470588235294,0.8784313725490196,D.q)
B.bfp=new C.u(1,0.9137254901960784,0.7254901960784313,0.28627450980392155,D.q)
B.bfA=new C.u(1,0.22745098039215686,0.22745098039215686,0.24705882352941178,D.q)
B.bfI=new C.u(1,0.5490196078431373,0.5764705882352941,0.6078431372549019,D.q)
B.Fb=new C.u(1,0.22745098039215686,0.24705882352941178,0.2784313725490196,D.q)
B.XJ=new C.u(1,0.8980392156862745,0.8980392156862745,0.8666666666666667,D.q)
B.LY=new C.u(1,0.10588235294117647,0.11372549019607843,0.13333333333333333,D.q)
B.bfW=new C.u(1,0.22745098039215686,0.23529411764705882,0.25882352941176473,D.q)
B.XN=new C.u(1,0.30980392156862746,0.6588235294117647,0.3764705882352941,D.q)
B.afk=new C.u(1,0.8509803921568627,0.803921568627451,0.7215686274509804,D.q)
B.afl=new C.u(1,0.4196078431372549,0.2901960784313726,0.16862745098039217,D.q)
B.M_=new C.u(1,0.11764705882352941,0.11764705882352941,0.12549019607843137,D.q)
B.bg8=new C.u(1,0.8862745098039215,0.8745098039215686,0.8235294117647058,D.q)
B.afo=new C.u(1,0.9490196078431372,0.7803921568627451,0.611764705882353,D.q)
B.bgc=new C.u(1,0.42745098039215684,0.2901960784313726,1,D.q)
B.bgh=new C.u(1,0.3686274509803922,0.27450980392156865,0.18823529411764706,D.q)
B.bgk=new C.u(1,0.9058823529411765,0.8470588235294118,0.7450980392156863,D.q)
B.bgu=new C.u(1,0.5411764705882353,0.4823529411764706,0.41568627450980394,D.q)
B.bgy=new C.u(1,0.24705882352941178,0.16470588235294117,0.10980392156862745,D.q)
B.bgA=new C.u(1,0.34901960784313724,0.3176470588235294,0.29411764705882354,D.q)
B.bgC=new C.u(1,0.24705882352941178,0.6470588235294118,0.3568627450980392,D.q)
B.bgK=new C.u(1,0.8117647058823529,0.792156862745098,0.7411764705882353,D.q)
B.XS=new C.u(1,0.8117647058823529,0.8901960784313725,0.9176470588235294,D.q)
B.bgP=new C.u(1,0.7215686274509804,0.7450980392156863,0.7843137254901961,D.q)
B.M1=new C.u(1,0.3333333333333333,0.396078431372549,0.4823529411764706,D.q)
B.XT=new C.u(1,0.5529411764705883,0.7843137254901961,1,D.q)
B.XW=new C.u(1,1,0.9019607843137255,0.5019607843137255,D.q)
B.bhe=new C.u(1,0.5411764705882353,0.1843137254901961,0.22745098039215686,D.q)
B.bhh=new C.u(1,0.9490196078431372,0.7607843137254902,0.10588235294117647,D.q)
B.afJ=new C.u(1,0.9490196078431372,0.9411764705882353,0.9019607843137255,D.q)
B.bhA=new C.u(1,0.8509803921568627,0.7725490196078432,0.6392156862745098,D.q)
B.bhE=new C.u(1,0.9686274509803922,0.9607843137254902,0.9333333333333333,D.q)
B.afO=new C.u(1,0.6823529411764706,0.6941176470588235,0.7372549019607844,D.q)
B.o0=new C.u(1,0.1843137254901961,0.49019607843137253,0.8823529411764706,D.q)
B.bhP=new C.u(1,0.788235294117647,0.7176470588235294,0.6078431372549019,D.q)
B.XZ=new C.u(1,0.8901960784313725,0.6627450980392157,0.10980392156862745,D.q)
B.Fl=new C.u(1,0.7137254901960784,0.7372549019607844,0.7686274509803922,D.q)
B.bhU=new C.u(1,0.8431372549019608,0.8509803921568627,0.8784313725490196,D.q)
B.afT=new C.u(1,0.7215686274509804,0.7529411764705882,0.8,D.q)
B.bi4=new C.u(1,0.22745098039215686,0.49019607843137253,0.26666666666666666,D.q)
B.vI=new C.u(1,0.9019607843137255,0.8823529411764706,0.8352941176470589,D.q)
B.Y2=new C.u(1,0.3686274509803922,0.17647058823529413,0.13725490196078433,D.q)
B.bii=new C.u(1,0.0196078431372549,0.027450980392156862,0.050980392156862744,D.q)
B.ag1=new C.u(1,0.6039215686274509,0.6274509803921569,0.6588235294117647,D.q)
B.Fn=new C.u(1,0.09019607843137255,0.09411764705882353,0.10588235294117647,D.q)
B.Bc=new C.u(1,0.9725490196078431,0.9725490196078431,0.9568627450980393,D.q)
B.biw=new C.u(1,0.2901960784313726,0.12156862745098039,0.15294117647058825,D.q)
B.ag6=new C.u(1,0.9450980392156862,0.9568627450980393,0.9725490196078431,D.q)
B.ag8=new C.u(1,0.9019607843137255,0.9019607843137255,0.8784313725490196,D.q)
B.biW=new C.u(1,0.29411764705882354,0.21176470588235294,0.12941176470588237,D.q)
B.Y6=new C.u(1,0.8941176470588236,0.9058823529411765,0.9176470588235294,D.q)
B.jr=new C.u(1,0.7686274509803922,0.6039215686274509,0.3843137254901961,D.q)
B.bjr=new C.u(1,0.08235294117647059,0.06274509803921569,0.047058823529411764,D.q)
B.agn=new C.u(1,1,0.35294117647058826,0.12156862745098039,D.q)
B.ago=new C.u(1,0.5411764705882353,0.5607843137254902,0.596078431372549,D.q)
B.Mb=new C.u(1,0.16470588235294117,0.10196078431372549,0.06274509803921569,D.q)
B.agq=new C.u(1,0.5411764705882353,0.29411764705882354,0.29411764705882354,D.q)
B.Mc=new C.u(1,0.9098039215686274,0.8509803921568627,0.7372549019607844,D.q)
B.bjG=new C.u(1,0.48627450980392156,0.3215686274509804,0.18823529411764706,D.q)
B.o4=new C.u(1,1,0.9450980392156862,0.6588235294117647,D.q)
B.bk5=new C.u(1,0.5411764705882353,0.5411764705882353,0.5176470588235295,D.q)
B.bk7=new C.u(1,0.9647058823529412,0.9568627450980393,0.9254901960784314,D.q)
B.Mf=new C.u(1,0.47843137254901963,0.23137254901960785,0.1803921568627451,D.q)
B.bkh=new C.u(1,0.3333333333333333,0.6274509803921569,0.3333333333333333,D.q)
B.agA=new C.u(1,0.7058823529411765,0.3254901960784314,0.3254901960784314,D.q)
B.bkp=new C.u(1,0.6078431372549019,0.6078431372549019,0.592156862745098,D.q)
B.Bh=new C.u(1,0.9568627450980393,0.9450980392156862,0.9176470588235294,D.q)
B.bkv=new C.u(1,0.6078431372549019,0.23137254901960785,0.2901960784313726,D.q)
B.tM=new C.u(1,0.8862745098039215,0.23137254901960785,0.23137254901960785,D.q)
B.pX=new C.u(1,0.9490196078431372,0.9490196078431372,0.9254901960784314,D.q)
B.bkA=new C.u(1,0.30980392156862746,0.615686274509804,0.3568627450980392,D.q)
B.agF=new C.u(1,0.788235294117647,0.8117647058823529,0.8392156862745098,D.q)
B.bkF=new C.u(1,0.9294117647058824,0.9215686274509803,0.8941176470588236,D.q)
B.Yk=new C.u(1,0.8392156862745098,0.6823529411764706,0.4470588235294118,D.q)
B.agI=new C.u(1,0.9098039215686274,0.9098039215686274,0.9098039215686274,D.q)
B.Mh=new C.u(1,0.2901960784313726,0.2980392156862745,0.32941176470588235,D.q)
B.Ym=new C.u(1,0.3686274509803922,0.43137254901960786,0.5176470588235295,D.q)
B.blo=new C.u(1,0.20784313725490197,0.47843137254901963,0.26666666666666666,D.q)
B.blr=new C.u(1,0.3568627450980392,0.10196078431372549,0.09019607843137255,D.q)
B.agT=new C.u(1,0.23137254901960785,0.1843137254901961,0.14901960784313725,D.q)
B.agU=new C.u(1,0.8509803921568627,0.788235294117647,0.6588235294117647,D.q)
B.kD=new C.u(1,0.9686274509803922,0.9568627450980393,0.9254901960784314,D.q)
B.agX=new C.u(1,0.13333333333333333,0.1450980392156863,0.16862745098039217,D.q)
B.Yq=new C.u(1,0.4980392156862745,0.7215686274509804,1,D.q)
B.xV=new C.u(1,0.16470588235294117,0.1450980392156863,0.13725490196078433,D.q)
B.blL=new C.u(1,0.5411764705882353,0.23137254901960785,0.23137254901960785,D.q)
B.blM=new C.u(1,0.9450980392156862,0.9294117647058824,0.8784313725490196,D.q)
B.Mk=new C.u(1,0.796078431372549,0.8156862745098039,0.8392156862745098,D.q)
B.Yt=new C.u(1,0.8980392156862745,0.7254901960784313,0.11764705882352941,D.q)
B.bma=new C.u(1,0.7490196078431373,0.8901960784313725,1,D.q)
B.aha=new C.u(1,0.6039215686274509,0.4196078431372549,0.24705882352941178,D.q)
B.Yx=new C.u(1,0.10588235294117647,0.10588235294117647,0.11372549019607843,D.q)
B.bmw=new C.u(1,0.9529411764705882,0.9058823529411765,0.6313725490196078,D.q)
B.ahh=new C.u(1,0.9490196078431372,0.9490196078431372,0.9333333333333333,D.q)
B.bmV=new C.u(1,0.6274509803921569,0.6509803921568628,0.6823529411764706,D.q)
B.bn7=new C.u(0,0.2196078431372549,0.7411764705882353,0.9725490196078431,D.q)
B.bnf=new C.u(1,0.8156862745098039,0.35294117647058826,0.22745098039215686,D.q)
B.bnl=new C.u(1,0.8509803921568627,0.788235294117647,0.6274509803921569,D.q)
B.YC=new C.u(1,0.9490196078431372,0.9176470588235294,0.8274509803921568,D.q)
B.ahB=new C.u(1,0.10588235294117647,0.07058823529411765,0.03529411764705882,D.q)
B.bnH=new C.u(1,0.3607843137254902,0.7019607843137254,0.9098039215686274,D.q)
B.Mr=new C.u(1,0.24705882352941178,0.26666666666666666,0.3137254901960784,D.q)
B.bnR=new C.u(1,0.12549019607843137,0.13333333333333333,0.14901960784313725,D.q)
B.Mv=new C.u(1,0.8862745098039215,0.27058823529411763,0.35294117647058826,D.q)
B.bo6=new C.u(1,0.12156862745098039,0.43529411764705883,0.2627450980392157,D.q)
B.y_=new C.u(1,0.17254901960784313,0.4196078431372549,0.8392156862745098,D.q)
B.vO=new C.u(1,0.7607843137254902,0.4627450980392157,0.22745098039215686,D.q)
B.My=new C.u(1,0.7254901960784313,0.7450980392156863,0.7764705882352941,D.q)
B.ahK=new C.u(1,0.611764705882353,0.35294117647058826,0.27058823529411763,D.q)
B.boz=new C.u(1,0.611764705882353,0.5882352941176471,0.5450980392156862,D.q)
B.MC=new C.u(1,0.9686274509803922,0.9490196078431372,0.9019607843137255,D.q)
B.bp1=new C.u(1,0.2,0.21176470588235294,0.23137254901960785,D.q)
B.bp6=new C.u(1,0.7098039215686275,0.7333333333333333,0.7647058823529411,D.q)
B.bp7=new C.u(1,0.9294117647058824,0.9294117647058824,0.9098039215686274,D.q)
B.bpd=new C.u(1,0.9098039215686274,0.8941176470588236,0.8549019607843137,D.q)
B.bpi=new C.u(1,0.23137254901960785,0.23137254901960785,0.25098039215686274,D.q)
B.ai2=new C.u(1,0.7686274509803922,0.5411764705882353,0.11764705882352941,D.q)
B.bpo=new C.u(1,0.43529411764705883,0.7137254901960784,1,D.q)
B.bpy=new C.u(1,0.9450980392156862,0.9019607843137255,0.8156862745098039,D.q)
B.bpA=new C.u(1,0.9137254901960784,0.8980392156862745,0.8549019607843137,D.q)
B.aia=new C.u(1,0.18823529411764706,0.2,0.22745098039215686,D.q)
B.ME=new C.u(1,0.9372549019607843,0.9372549019607843,0.9176470588235294,D.q)
B.aic=new C.u(0.6666666666666666,1,0.16470588235294117,0.10196078431372549,D.q)
B.bpR=new C.u(1,0.9372549019607843,0.9137254901960784,0.8627450980392157,D.q)
B.bpU=new C.u(1,0.9294117647058824,0.9019607843137255,0.8156862745098039,D.q)
B.YU=new C.u(1,0.4196078431372549,0.24705882352941178,0.19215686274509805,D.q)
B.bpZ=new C.u(1,0.12156862745098039,0.6392156862745098,0.2627450980392157,D.q)
B.bq0=new C.u(1,0.803921568627451,0.6274509803921569,0.2,D.q)
B.YX=new C.u(1,0.3607843137254902,0.7019607843137254,1,D.q)
B.bqH=new C.u(1,0.48627450980392156,0.2901960784313726,0.17647058823529413,D.q)
B.YY=new C.u(1,0.9568627450980393,0.9568627450980393,0.9411764705882353,D.q)
B.bqJ=new C.u(1,0.8431372549019608,0.8,0.6588235294117647,D.q)
B.brn=new C.u(1,0.9019607843137255,0.8745098039215686,0.796078431372549,D.q)
B.brq=new C.u(1,0.30980392156862746,0.6588235294117647,1,D.q)
B.brw=new C.u(1,1,0.6196078431372549,0.6196078431372549,D.q)
B.aiB=new C.u(1,0.8431372549019608,0.16470588235294117,0.16470588235294117,D.q)
B.MN=new C.u(1,0.47843137254901963,0.30980392156862746,0.1568627450980392,D.q)
B.brK=new C.u(1,0.9294117647058824,0.9372549019607843,0.9529411764705882,D.q)
B.Bv=new C.u(1,0.6901960784313725,0.5411764705882353,0.3568627450980392,D.q)
B.i0=new C.u(1,0.6078431372549019,0.8274509803921568,0.9607843137254902,D.q)
B.bs3=new C.u(1,0.48627450980392156,0.2901960784313726,0.22745098039215686,D.q)
B.Z8=new C.u(1,0.7490196078431373,0.8901960784313725,0.9686274509803922,D.q)
B.Z9=new C.u(1,0.23137254901960785,0.6078431372549019,1,D.q)
B.aiJ=new C.u(1,0.8509803921568627,0.8235294117647058,0.7607843137254902,D.q)
B.q7=new C.u(1,0.4196078431372549,0.2901960784313726,0.19607843137254902,D.q)
B.bsh=new C.u(1,0.8509803921568627,0.7450980392156863,0.5725490196078431,D.q)
B.Zb=new C.u(1,0.13333333333333333,0.14901960784313725,0.17254901960784313,D.q)
B.bsk=new C.u(1,0.8117647058823529,0.788235294117647,0.7215686274509804,D.q)
B.bso=new C.u(1,0.7176470588235294,0.4745098039215686,0.12156862745098039,D.q)
B.bsu=new C.u(1,0.9294117647058824,0.9294117647058824,0.9176470588235294,D.q)
B.bsv=new C.u(1,0.7529411764705882,0.5411764705882353,0.35294117647058826,D.q)
B.bsx=new C.u(1,0.5450980392156862,0.4196078431372549,0.24705882352941178,D.q)
B.btA=new A.tl("none","Nothing happens: the device gets no power.",!1,!1,!1)
B.btB=new A.tl("none","It cannot be judged: the wire functions were not verified.",!1,!1,!1)
B.btC=new A.tl("smoke","The loose connection overheats: it glows, smokes and chars the device. In a real wall this can start a fire.",!1,!1,!0)
B.btD=new A.tl("none","It does not work as it should: some part runs wrongly or not at all. That does not tell you what is wrong, so check against the diagram.",!1,!1,!1)
B.btE=new A.tl("none","It runs. There is nothing to see, and that is the danger: with no ground, a fault would energize the metal parts.",!0,!1,!1)
B.btF=new A.tl("none","It works as the diagram says.",!0,!1,!1)
B.btG=new A.tl("none","It works, and every safety rule is met.",!0,!1,!1)
B.btH=new A.tl("none","Nothing happens: it is dead. But the hot wire is connected, so it can still be live. No sparks, no smoke: that does not make it safe.",!1,!1,!1)
B.btI=new A.tl("spark","Bare copper touches something it should not: sparks. The circuit is not safe.",!1,!1,!1)
B.btJ=new A.tl("none","It looks fine for now. But the support cannot carry the weight, and it can fall later.",!1,!1,!1)
B.btK=new A.tl("fire","BANG. A short circuit: a flash, sparks, smoke and a flame at the device. The breaker trips and the device is ruined. The wires and the device are not safe to use.",!1,!0,!0)
B.btL=new A.tl("arc","Hot and neutral are reversed: the parts that should be dead are live. Blue arcs show the energized metal. The simulator does not let anything run on this: it is unsafe, even if a real appliance might seem to work.",!1,!1,!1)
B.btM=new A.tl("arc","Current flows through the ground wire and the metal parts it joins. Arcs crackle at the box. This is a shock hazard.",!1,!1,!1)
B.btN=new A.tl("spark","The neutral and ground are joined: the protective device trips with a snap of sparks.",!1,!0,!1)
B.buF=new A.akm("expired","That order took too long and went back on the board.",0)
B.bwB=new C.bb(55e3)
B.bxr=new C.Q(0,2,0,6)
B.bxR=new C.Q(10,10,10,8)
B.bxX=new C.Q(10,16,10,14)
B.bye=new C.Q(11,7,11,7)
B.a_8=new C.Q(11,9,11,9)
B.bzg=new C.Q(14,16,14,10)
B.aki=new C.Q(14,8,14,24)
B.bAV=new C.Q(1,0,0,0)
B.bBw=new C.Q(22,0,22,44)
B.bCd=new C.Q(26,8,26,8)
B.bCQ=new C.Q(4,22,4,12)
B.bD2=new C.Q(4,4,8,4)
B.bD4=new C.Q(4,6,12,4)
B.bE0=new C.Q(9,0,9,0)
B.bE1=new C.Q(9,12,9,12)
B.fUS=new C.y("Practice mode (no explanations, real shocks)",null,D.Ki,null,null,null,null,null,null,null,null,null)
B.bEx=new C.bz(1,D.ba,B.fUS,null)
B.fQp=new C.y("Practice mode (no hints, no labels)",null,D.Ki,null,null,null,null,null,null,null,null,null)
B.bEz=new C.bz(1,D.ba,B.fQp,null)
B.fxc=new C.y("\ud83c\udfd8 Community",null,R.tb,null,null,null,null,null,null,null,null,null)
B.b9k=new C.ci(D.A,null,null,B.fxc,null)
B.bEG=new C.bz(1,D.ba,B.b9k,null)
B.fBO=new C.y("House tour",null,D.n0,null,null,null,null,null,null,null,null,null)
B.fIm=new C.y("A film of your whole house, with every TV on.",null,D.a9C,null,null,null,null,null,null,null,null,null)
B.dlD=w([B.fBO,D.bF,B.fIm],x.p)
B.bty=new C.fj(D.ah,D.e,D.i,D.E,null,D.p,null,0,B.dlD,null)
B.bEL=new C.bz(1,D.ba,B.bty,null)
B.fHY=new C.y("Construction Lab",null,R.tb,null,null,null,null,null,null,null,null,null)
B.fwB=new C.y("Wire it. Plumb it. Fix a house.",null,D.ho,null,null,null,null,null,null,null,null,null)
B.dc8=w([B.fHY,B.fwB],x.p)
B.bth=new C.fj(D.ah,D.e,D.i,D.E,null,D.p,null,0,B.dc8,null)
B.bEU=new C.bz(1,D.ba,B.bth,null)
B.fPd=new C.y("Test mode (an inspection: nothing is explained until you submit)",null,D.Ki,null,null,null,null,null,null,null,null,null)
B.bEW=new C.bz(1,D.ba,B.fPd,null)
B.aTd=new C.F(!0,D.c,null,null,null,null,14,D.H,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fQg=new C.y("5 portions of food\n10 points",null,B.aTd,null,null,null,null,null,null,null,null,null)
B.bF_=new C.bz(1,D.ba,B.fQg,null)
B.fCl=new C.y("3 doses of medicine\n12 points",null,B.aTd,null,null,null,null,null,null,null,null,null)
B.bFf=new C.bz(1,D.ba,B.fCl,null)
B.fNU=new C.y("Drone film",null,D.fv,null,null,null,null,null,null,null,null,null)
B.bFk=new C.bz(1,D.ba,B.fNU,null)
B.fQ2=new C.y("Practice mode (no hints, real shocks and fires)",null,D.Ki,null,null,null,null,null,null,null,null,null)
B.bFG=new C.bz(1,D.ba,B.fQ2,null)
B.fUs=new C.y("Uber licence",null,D.fv,null,null,null,null,null,null,null,null,null)
B.bFN=new C.bz(1,D.ba,B.fUs,null)
B.bGK=new A.a57(null,null)
B.a0w=new A.rl(0,"tripped")
B.a0x=new A.rl(1,"noHotWater")
B.a0y=new A.rl(10,"wallHole")
B.a0z=new A.rl(11,"clogged")
B.NW=new A.rl(2,"nutLeak")
B.NX=new A.rl(3,"pexLeak")
B.a0A=new A.rl(5,"flicker")
B.a0B=new A.rl(6,"burntOutlet")
B.a0C=new A.rl(7,"gfciTripped")
B.a0D=new A.rl(8,"runningToilet")
B.a0E=new A.rl(9,"dripFaucet")
B.bIv=new A.on(!1,"back",0,10)
B.bIw=new A.on(!1,"back",0,9)
B.bIx=new A.on(!1,"back",50,0)
B.bIy=new A.on(!1,"back",56,11)
B.bIz=new A.on(!1,"back",-50,10)
B.bIA=new A.on(!1,"left",40,9)
B.bIB=new A.on(!1,"right",40,10)
B.a0N=new A.on(!1,"right",50,5)
B.amm=new A.pS("tv100",'Giant 100"',"\ud83d\udcfa",89,!1)
B.bKI=new C.a0(61419,"MaterialIcons",!1)
B.bKU=new C.a0(61888,"MaterialIcons",!1)
B.bLE=new C.a0(62978,"MaterialIcons",!1)
B.bLJ=new C.a0(63015,"MaterialIcons",!1)
B.bM5=new C.a0(63165,"MaterialIcons",!1)
B.anO=new C.a0(63228,"MaterialIcons",!1)
B.aoc=new C.a0(63547,"MaterialIcons",!0)
B.bNm=new C.a0(983222,"MaterialIcons",!1)
B.bNW=new C.a0(983666,"MaterialIcons",!1)
B.aoY=new C.a0(983775,"MaterialIcons",!1)
B.ap3=new C.a0(983894,"MaterialIcons",!1)
B.bRq=new C.ae(D.og,null,null,null,null,null)
B.bSU=new C.ae(D.cz,26,D.aB,null,null,null)
B.bVo=new C.ae(D.mN,null,null,null,null,null)
B.bWf=new C.ae(D.Ct,22,D.c,null,null,null)
B.bWk=new C.ae(D.kM,null,F.fz,null,null,null)
B.bYh=new C.ae(D.pd,null,null,null,null,null)
B.bZI=new C.ae(A1.Hb,null,D.bu,null,null,null)
B.fYh=new A.q(0,100,20)
B.c0B=new A.hh(B.fYh,"No power in this house",D.bz,0)
B.hcN=new A.q(-60,40,130)
B.c0C=new A.hh(B.hcN,"\ud83e\uddef Walk here to check the equipment",D.d1,0)
B.fZY=new A.q(0,62,12)
B.c0D=new A.hh(B.fZY,"\ud83d\uded7 Elevator: walk onto the blue mat or tap",D.jv,19502)
B.fZR=new A.q(0,50,80)
B.c0E=new A.hh(B.fZR,"\ud83d\udcda Walk here to teach the class",D.d1,0)
B.h_r=new A.q(105,52,100)
B.c0F=new A.hh(B.h_r,"\ud83c\udf06 Balcony: step here to see the city",D.ei,0)
B.hd0=new A.q(-80,70,40)
B.c0G=new A.hh(B.hd0,"\ud83d\udc69\u200d\u2695\ufe0f Nurse",D.cR,0)
B.fZV=new A.q(0,52,78)
B.c0H=new A.hh(B.fZV,"\ud83e\udeaa Walk here to get your Uber licence",D.jv,0)
B.hd1=new A.q(-84,84,120)
B.c0I=new A.hh(B.hd1,"\ud83c\udf5e Food and drinks",D.d1,0)
B.fZE=new A.q(0,40,176)
B.c0J=new A.hh(B.fZE,"\ud83c\udf4e Fresh fruit",D.ek,0)
B.aVM=new A.q(0,26,312)
B.c0K=new A.hh(B.aVM,"\u2b07 Walk here to go out",D.ei,0)
B.c0L=new A.hh(B.aVM,"\ud83d\uded7 Take the elevator down to go out",D.jv,0)
B.h52=new A.q(90,40,56)
B.c0M=new A.hh(B.h52,"\ud83d\udcd6 Library",D.dF,0)
B.h4B=new A.q(80,40,56)
B.c0N=new A.hh(B.h4B,"\ud83d\udd25 Fire drill",D.bz,0)
B.aVH=new A.q(0,100,36)
B.c0O=new A.hh(B.aVH,"\ud83e\udeaa NGMY Licence office",D.N,0)
B.aWn=new A.q(34,56,18)
B.c0P=new A.hh(B.aWn,"\ud83e\uddd1\u200d\ud83d\udcbc Clerk",D.cR,0)
B.hbN=new A.q(-0.4,4.2,-2.4)
B.c0Q=new A.hh(B.hbN,"LIVE 120 V",D.bz,0)
B.hd_=new A.q(-80,52,66)
B.c0R=new A.hh(B.hd_,"\ud83c\udfe5 Walk here to admit the sick",D.eQ,0)
B.fZS=new A.q(0,50,84)
B.c0S=new A.hh(B.fZS,"\ud83d\udcb0 Counter: walk here to pay or sell",D.ei,0)
B.c0T=new A.hh(B.aWn,"\ud83e\uddd1\u200d\ud83d\udcbc Cashier",D.cR,0)
B.c1S=new C.a9(D.a5,D.a8,D.x,N.az5,null,null)
B.c2Q=new C.a9(D.a5,D.a8,D.x,N.axv,null,null)
B.bpq=new C.u(1,0.2901960784313726,0.20392156862745098,0.0784313725490196,D.q)
B.bmc=new C.u(1,0.12156862745098039,0.10196078431372549,0.07058823529411765,D.q)
B.beP=new C.u(1,0.16470588235294117,0.12156862745098039,0.07058823529411765,D.q)
B.dnA=w([B.bpq,B.bmc,B.beP],x.O)
B.c2V=new C.a9(D.ay,D.aD,D.x,B.dnA,null,null)
B.bgN=new C.u(1,0.8509803921568627,0.6039215686274509,0.11764705882352941,D.q)
B.da2=w([F.fz,B.bgN],x.O)
B.c32=new C.a9(D.ay,D.aD,D.x,B.da2,null,null)
B.boC=new C.u(1,0.0392156862745098,0.058823529411764705,0.1803921568627451,D.q)
B.brp=new C.u(1,0.1411764705882353,0.08235294117647059,0.3215686274509804,D.q)
B.cLQ=w([E.afM,B.boC,B.brp],x.O)
B.c3K=new C.a9(D.b_,D.b5,D.x,B.cLQ,null,null)
B.d6w=w([E.jL,E.LV,E.jL],x.O)
B.ari=new C.a9(D.a5,D.a8,D.x,B.d6w,null,null)
B.bm1=new C.u(1,0.8901960784313725,0.9254901960784314,0.9803921568627451,D.q)
B.d5_=w([D.c,B.bm1],x.O)
B.c50=new C.a9(D.b_,D.b5,D.x,B.d5_,null,null)
B.bsl=new C.u(1,0.07058823529411765,0.22745098039215686,0.47843137254901963,D.q)
B.cZi=w([E.jL,B.bsl],x.O)
B.c5b=new C.a9(D.ay,D.aD,D.x,B.cZi,null,null)
B.doh=w([D.cr,D.de],x.O)
B.zh=new C.a9(D.b_,D.b5,D.x,B.doh,null,null)
B.ciX=w([E.jL,E.LV],x.O)
B.c5q=new C.a9(D.a5,D.a8,D.x,B.ciX,null,null)
B.eeI={ground:0}
B.JC=new C.dE(B.eeI,1,x.M)
B.wa=new A.fM(25,"Green screw: GROUND",B.JC,"The bare copper ground goes on the green screw.",!1,"ground")
B.eeY={lineA:0}
B.f41=new C.dE(B.eeY,1,x.M)
B.bJs=new A.fM(23,"LINE screw 1 (top left)",B.f41,"Hot leg 1 from the panel goes on the top left screw.",!1,"hot")
B.eeZ={lineB:0}
B.f3Q=new C.dE(B.eeZ,1,x.M)
B.bJk=new A.fM(21,"LINE screw 2 (top right)",B.f3Q,"Hot leg 2 from the panel goes on the top right screw.",!1,"hot")
B.ef0={loadA:0}
B.f40=new C.dE(B.ef0,1,x.M)
B.bJ1=new A.fM(24,"LOAD screw 1 (bottom left)",B.f40,"Hot leg 1 to the heater goes on the bottom left screw: it is switched through from the top left one.",!1,"hot")
B.ef2={loadB:0}
B.f4z=new C.dE(B.ef2,1,x.M)
B.bJc=new A.fM(22,"LOAD screw 2 (bottom right)",B.f4z,"Hot leg 2 to the heater goes on the bottom right screw.",!1,"hot")
B.c5L=w([B.wa,B.bJs,B.bJk,B.bJ1,B.bJc],x.r)
B.c5P=w(["flange","wax","toilet","bolts","valve","hosehot","hosecold","faucet","tail","trap","arm"],x.s)
B.a31=w([0,0,0,0],x.t)
B.c6_=w([0,0,0,1],x.k)
B.cf1=w([139,161],x.n)
B.cf8=w([145,158],x.n)
B.ciP=w([W.qL,A6.TH,S.ln,A_.aP9],x.f)
B.cj0=w([1,1,1],x.k)
B.cj1=w([1,1,1,1],x.k)
B.h9H=new A.q(-57.8,-32,0)
B.b6P=new A.z7(0,"Outlet spot 1",!1,B.h9H,"low")
B.has=new A.q(-9.8,-32,0)
B.b6M=new A.z7(1,"Outlet spot 2",!1,B.has,"low")
B.haZ=new A.q(38.2,-32,0)
B.b6S=new A.z7(2,"Outlet spot 3",!1,B.haZ,"low")
B.h9i=new A.q(-25.8,0,0)
B.b6Q=new A.z7(3,"Switch spot 1",!1,B.h9i,"switch")
B.ham=new A.q(22.2,0,0)
B.b6O=new A.z7(4,"Switch spot 2",!1,B.ham,"switch")
B.hcs=new A.q(-30,48,40)
B.b6R=new A.z7(5,"Ceiling light spot",!0,B.hcs,"light")
B.h1Y=new A.q(30,48,40)
B.b6N=new A.z7(6,"Ceiling fan spot",!0,B.h1Y,"fan")
B.uF=w([B.b6P,B.b6M,B.b6S,B.b6Q,B.b6O,B.b6R,B.b6N],C.at("O<z7>"))
B.exU=new C.z(4,6)
B.eyq=new C.z(5,7)
B.eyP=new C.z(6,8)
B.cjs=w([S.ln,Am.v6,E.TE,E.TF,B.exU,B.eyq,B.eyP],C.at("O<+(G,G)>"))
B.cjv=w([2],x.t)
B.cqe=w(["The living room has no power: find the tripped breaker in the panel and reset it.","The kitchen sink drips: pick the wrench and tighten the slip nut under the sink. (Build the house up to Fixtures to see the problems.)"],x.s)
B.haI=new A.q(11,4.6,-6)
B.h5o=new A.q(11,5.4,-7.85)
B.ha_=new A.q(3.4,5.4,-7.85)
B.aWQ=new A.q(3.4,3.4,-7.85)
B.cqg=w([B.haI,B.h5o,B.ha_,B.aWQ],x.o)
B.cqZ=w([3],x.t)
B.cr8=w([300,800,1300,1800],x.n)
B.ct8=w([32,80],x.n)
B.hl6=new A.ho(0,0.7,2.2,2,0,0,0)
B.hkW=new A.ho(3,0.1,0.95,-0.42,-0.3,-0.2,0.05)
B.hlf=new A.ho(6.5,0,0.9,-0.38,0.3,0.2,0.05)
B.hlo=new A.ho(9.5,-0.9,1.15,0.1,0,0,0)
B.hll=new A.ho(12.5,-1.7,1.45,1.6,0,0,0)
B.hkV=new A.ho(15.5,-2.8,1,-0.35,0,0,0)
B.hle=new A.ho(18.5,-3.6,0.9,0.05,0,0,0)
B.hli=new A.ho(21.5,-4.6,1.5,1.5,0,0,0)
B.hl7=new A.ho(24.5,-5.4,0.9,-0.4,0,0,0)
B.hlq=new A.ho(27.5,-6.28,0.75,0.05,0,0,0)
B.hl8=new A.ho(30,-6,2.4,1.7,0,0,0)
B.d3o=w([B.hl6,B.hkW,B.hlf,B.hlo,B.hll,B.hkV,B.hle,B.hli,B.hl7,B.hlq,B.hl8],x.x)
B.hkZ=new A.ho(0,-3.14,1.2,-0.3,0,0,0)
B.hkS=new A.ho(4,-2.2,1.1,0,0,0,0)
B.hlp=new A.ho(8,-1.2,1,0.4,0,0,0)
B.hkX=new A.ho(12,-0.4,1,0.9,0,0,0)
B.hl_=new A.ho(15,0.1,0.85,1.7,0,0,0)
B.hkR=new A.ho(18,0.3,0.8,0,0,0,0)
B.hkY=new A.ho(21,0,0.9,-0.2,0.35,0.25,0)
B.hl3=new A.ho(24,0.6,1.4,0.1,-0.2,0,0)
B.hl4=new A.ho(27,1.4,1.2,0.8,0,0,0)
B.hl2=new A.ho(30,2.4,2.3,1.5,0,0,0)
B.daH=w([B.hkZ,B.hkS,B.hlp,B.hkX,B.hl_,B.hkR,B.hkY,B.hl3,B.hl4,B.hl2],x.x)
B.hl0=new A.ho(0,0.3,2.6,0.5,0,0,0)
B.hlk=new A.ho(3,0.1,1,0,0,0,0)
B.hln=new A.ho(6,0,0.95,0.05,0.2,0.15,0)
B.hlb=new A.ho(9,-0.8,1.6,0.3,0,0,0)
B.hlg=new A.ho(12,-1.57,1,-0.2,0,0,0)
B.hl9=new A.ho(15,-2.4,1.5,0.9,0,0,0)
B.hld=new A.ho(18,-3.14,1,0.1,0,0,0)
B.hl5=new A.ho(21,-3.9,1.5,0.6,0,0,0)
B.hlr=new A.ho(24,-4.71,1,-0.3,0,0,0)
B.hkT=new A.ho(27,-5.5,1.3,0.5,0,0,0)
B.hkQ=new A.ho(30,-6.28,2.6,0.9,0,0,0)
B.cGT=w([B.hl0,B.hlk,B.hln,B.hlb,B.hlg,B.hl9,B.hld,B.hl5,B.hlr,B.hkT,B.hkQ],x.x)
B.hlj=new A.ho(0,0,0.5,3.5,0,0,0)
B.hkU=new A.ho(4,0.2,1,-0.3,0,0,0)
B.hlm=new A.ho(8,1,1,0,0,0,0)
B.hkO=new A.ho(12,1.57,1.2,0.3,0,0,0)
B.hlh=new A.ho(16,3.14,1.4,1.2,0,0,0)
B.hkP=new A.ho(20,3.5,0.9,-0.35,0,0,0)
B.hl1=new A.ho(24,4.7,1.1,0,0,0,0)
B.hla=new A.ho(28,6,1,0.3,0,0,0)
B.hlc=new A.ho(30,6.3,2.2,1.4,0,0,0)
B.d32=w([B.hlj,B.hkU,B.hlm,B.hkO,B.hlh,B.hkP,B.hl1,B.hla,B.hlc],x.x)
B.cvs=w([B.d3o,B.daH,B.cGT,B.d32],C.at("O<ai<ho>>"))
B.cvt=w([380,820,1420,1660],x.n)
B.ef9={neutral:0}
B.JD=new C.dE(B.ef9,1,x.M)
B.bJj=new A.fM(23,"Silver screw (top): NEUTRAL",B.JD,y.G,!1,"neutral")
B.bIT=new A.fM(24,"Silver screw (bottom): NEUTRAL",B.JD,y.G,!1,"neutral")
B.efp={switched:0}
B.f4E=new C.dE(B.efp,1,x.M)
B.bIR=new A.fM(21,"Brass screw (top): SWITCHED hot",B.f4E,"The top half is the switched one: the red wire that comes back from the wall switch goes here.",!1,"hot")
B.een={always:0}
B.f3N=new C.dE(B.een,1,x.M)
B.bJf=new A.fM(22,"Brass screw (bottom): ALWAYS hot",B.f3N,"The bottom half is always on: the black wire straight from the panel goes here.",!1,"hot")
B.cwG=w([B.wa,B.bJj,B.bIT,B.bIR,B.bJf],x.r)
B.eOi=new C.z(-820,640)
B.ezs=new C.z(820,640)
B.cwL=w([B.eOi,B.ezs],x.f)
B.hsw=new A.pD(0,-80,66,24)
B.hsx=new A.pD(1,20,48,20)
B.hsF=new A.pD(2,20,98,20)
B.hsG=new A.pD(3,20,148,20)
B.cxa=w([B.hsw,B.hsx,B.hsF,B.hsG],x.X)
B.D4=w([],x.m)
B.b0S=new A.rc("highway","\ud83d\udee3\ufe0f","Highway board","Huge and wide, on two thick poles, with a walkway under it",420,170,150,B.D4,0,1)
B.b0P=new A.rc("tower","\ud83d\uddfc","Tall tower sign","A big sign high up on one very thick pole",400,210,270,B.D4,0,1)
B.b0V=new A.rc("neon","\ud83c\udf03","Neon board","A big black board with a glowing neon edge",380,190,120,B.D4,0,1)
B.b0U=new A.rc("roof","\ud83c\udfe0","Rooftop board","A tall house with two big TVs, the NGMY carpet on its back, and a huge board on its roof",460,180,308,B.D4,800,1)
B.b0O=new A.rc("screen","\ud83d\udcfa","Big screen","A giant TV screen on a stand",440,250,60,B.D4,0,1)
B.b0W=new A.rc("gate","\ud83d\udeaa","Town gate","A huge arch with the board across it",600,200,200,B.D4,0,1)
B.b0A=new A.lG(-420,140,0.35,0,1)
B.b0y=new A.lG(460,-420,-0.3,160,1.35)
B.d1h=w([B.b0A,B.b0y],x.m)
B.b0N=new A.rc("duo","\ud83e\udea7","Two far apart","Two separate boards: a near one and a taller one far behind it",320,160,140,B.d1h,0,0.7)
B.b0t=new A.lG(-460,0,0,0,1)
B.b0B=new A.lG(460,0,0,0,1)
B.dmL=w([B.b0t,B.acq,B.b0B],x.m)
B.b0Y=new A.rc("line3","\u2194\ufe0f","Three in a row","Three separate boards standing in one straight line",300,150,150,B.dmL,0,0.6)
B.b0r=new A.lG(-950,250,0.5,0,1)
B.b0q=new A.lG(150,-700,-0.2,220,1.55)
B.b0u=new A.lG(1000,60,-0.55,0,0.9)
B.cSg=w([B.b0r,B.b0q,B.b0u],x.m)
B.b0Q=new A.rc("far3","\ud83d\udef0\ufe0f","Three scattered far","Three separate boards far from each other, one of them tall and far behind",320,160,140,B.cSg,0,0.6)
B.b0G=new A.lG(-360,300,0.15,0,1)
B.b0v=new A.lG(360,300,-0.15,0,1)
B.b0D=new A.lG(0,-120,0,100,1.25)
B.b0x=new A.lG(-160,-640,0.1,260,1.6)
B.c6s=w([B.b0G,B.b0v,B.b0D,B.b0x],x.m)
B.b0T=new A.rc("skyline","\ud83c\udf06","Skyline","Four separate boards, the taller ones standing behind the shorter ones",300,150,130,B.c6s,0,0.6)
B.b0p=new A.lG(-440,160,0,0,1)
B.b0E=new A.lG(0,160,0,0,1)
B.b0o=new A.lG(440,160,0,0,1)
B.b0F=new A.lG(-440,-420,3.141592653589793,130,1.2)
B.b0s=new A.lG(0,-420,3.141592653589793,130,1.2)
B.b0C=new A.lG(440,-420,3.141592653589793,130,1.2)
B.doq=w([B.b0p,B.b0E,B.b0o,B.b0F,B.b0s,B.b0C],x.m)
B.b0R=new A.rc("lines6","\ud83d\udee4\ufe0f","Two lines of three","Six separate boards: a straight line of three facing front, and a taller line of three behind it facing back",280,140,140,B.doq,0,0.6)
B.b0z=new A.lG(0,300,0,0,1)
B.b0m=new A.lG(0,-300,3.141592653589793,0,1)
B.b0w=new A.lG(-560,0,-1.5707963267948966,0,1)
B.b0n=new A.lG(560,0,1.5707963267948966,0,1)
B.dtw=w([B.b0z,B.b0m,B.b0w,B.b0n],x.m)
B.b0X=new A.rc("scatter","\ud83c\udf10","Billboard park","Four separate boards: one at the front, one at the back and one on each side, all facing out",320,160,150,B.dtw,0,0.6)
B.a3v=w([B.b0S,B.b0P,B.b0V,B.b0U,B.b0O,B.b0W,B.b0N,B.b0Y,B.b0Q,B.b0T,B.b0R,B.b0X],C.at("O<rc>"))
B.dAt=new A.i9(-134,-36,16,44)
B.dAg=new A.i9(34,118,30,66)
B.dAh=new A.i9(34,118,80,116)
B.dAf=new A.i9(34,118,130,166)
B.dAu=new A.i9(-134,-76,140,160)
B.cxe=w([B.dAt,B.dAg,B.dAh,B.dAf,B.dAu],x.T)
B.cxh=w([y.O,y.x,y.R,"Fasten the single black feed from the panel to the FEED screw (it powers both switches through a joined tab).","Fasten the black wire to the first light to the screw of switch 1.","Fasten the black wire to the second light to the screw of switch 2.",y.b,y.n],x.s)
B.eO2=new C.z(-600,1250)
B.eO0=new C.z(-520,1260)
B.eNZ=new C.z(-460,1250)
B.eyb=new C.z(520,1280)
B.eyz=new C.z(600,1270)
B.eNN=new C.z(-300,1300)
B.cC9=w([B.eO2,B.eO0,B.eNZ,B.eyb,B.eyz,B.eNN],x.f)
B.cCB=w([460,900,1500,1740],x.n)
B.bhT=new C.u(1,0.5411764705882353,0.35294117647058826,0.23529411764705882,D.q)
B.aft=new C.u(1,0.10588235294117647,0.07058823529411765,0.06274509803921569,D.q)
B.bse=new C.u(1,0.8509803921568627,0.27450980392156865,0.49411764705882355,D.q)
B.aeh=new C.u(1,0.23137254901960785,0.24705882352941178,0.3607843137254902,D.q)
B.eq6=new A.tN(B.bhT,B.aft,B.bse,B.aeh,"xbot",!1,0,1)
B.f1m=new A.Fp(0,"Ama",0,2,B.eq6,"A nurse who works nights.")
B.bk_=new C.u(1,0.4196078431372549,0.27058823529411763,0.18823529411764706,D.q)
B.bh2=new C.u(1,0.08627450980392157,0.06274509803921569,0.06274509803921569,D.q)
B.bpC=new C.u(1,0.1803921568627451,0.5607843137254902,0.3568627450980392,D.q)
B.eqa=new A.tN(B.bk_,B.bh2,B.bpC,B.LE,"soldier",!1,0,1)
B.f1k=new A.Fp(1,"Joseph",1,2,B.eqa,"A student who is always hungry.")
B.bnC=new C.u(1,0.6274509803921569,0.4196078431372549,0.2784313725490196,D.q)
B.bib=new C.u(1,0.2901960784313726,0.24705882352941178,0.4196078431372549,D.q)
B.eqb=new A.tN(B.bnC,B.Mb,D.aE,B.bib,"xbot",!1,0,1)
B.f1o=new A.Fp(2,"Grace",3,4,B.eqb,"A teacher who marks papers late.")
B.aev=new C.u(1,0.8784313725490196,0.6431372549019608,0.48627450980392156,D.q)
B.aiy=new C.u(1,0.1843137254901961,0.43529411764705883,0.7098039215686275,D.q)
B.eq8=new A.tN(B.aev,D.agy,B.aiy,B.LE,"soldier",!1,0,1)
B.f1l=new A.Fp(3,"Daniel",6,8,B.eq8,"A driver who sleeps in the day.")
B.bqf=new C.u(1,0.788235294117647,0.5450980392156862,0.3686274509803922,D.q)
B.bin=new C.u(1,0.16862745098039217,0.17647058823529413,0.22745098039215686,D.q)
B.eq4=new A.tN(B.bqf,B.aft,D.aC,B.bin,"xbot",!1,0,1)
B.f1q=new A.Fp(4,"Fatima",7,8,B.eq4,"A baker who gets up at four.")
B.aip=new C.u(1,0.47843137254901963,0.29411764705882354,0.18823529411764706,D.q)
B.boL=new C.u(1,0.24705882352941178,0.22745098039215686,0.2,D.q)
B.eq7=new A.tN(B.aip,D.e4,D.d1,B.boL,"soldier",!1,0,1)
B.f1n=new A.Fp(5,"Papa Moses",10,-1,B.eq7,"The oldest in the house. He watches TV all day.")
B.bmq=new C.u(1,0.5490196078431373,0.3568627450980392,0.23137254901960785,D.q)
B.eq9=new A.tN(B.bmq,B.ago,D.ax,B.aeh,"xbot",!1,0,1)
B.f1p=new A.Fp(6,"Mama Rose",9,-1,B.eq9,"Cooks for everybody in the kitchen.")
B.CK=w([B.f1m,B.f1k,B.f1o,B.f1l,B.f1q,B.f1n,B.f1p],C.at("O<Fp>"))
B.cEB=w([50,130],x.n)
B.cEC=w([50,140],x.n)
B.cFo=w([51,52,53],x.t)
B.eDF=new C.z(-9.5,4.6)
B.eG7=new C.z(-5.9,2.3)
B.eMf=new C.z(8.8,4.4)
B.cGF=w([B.eDF,B.eG7,B.eMf],x.f)
B.cH1=w([5,35],x.n)
B.cHC=w([61,63],x.t)
B.cHP=w([62,64],x.t)
B.cIP=w([68,172],x.n)
B.bh8=new C.u(1,0.6039215686274509,0.30980392156862746,0.30980392156862746,D.q)
B.bsn=new C.u(1,0.30980392156862746,0.47843137254901963,0.3686274509803922,D.q)
B.zk=w([B.nT,B.Ym,B.bh8,B.bsn,B.agU,D.jd],x.O)
B.boS=new C.u(1,0.23137254901960785,0.07058823529411765,0.07058823529411765,D.q)
B.bim=new C.u(1,0.23137254901960785,0.1843137254901961,0.0392156862745098,D.q)
B.bfo=new C.u(1,0.043137254901960784,0.1803921568627451,0.09019607843137255,D.q)
B.cJG=w([B.boS,B.bim,B.bfo],x.O)
B.tm=new A.jE("ground","Bare copper \xb7 ground",B.vO,D.c,"ground")
B.tT=new C.u(1,0.14901960784313725,0.14901960784313725,0.16470588235294117,D.q)
B.hh5=new A.jE("feed","Black \xb7 hot feed from the panel",B.tT,D.c,"hot")
B.Mi=new C.u(1,0.22745098039215686,0.1803921568627451,0.1803921568627451,D.q)
B.hh0=new A.jE("loadA","Black \xb7 to light 1",B.Mi,D.c,"hot")
B.beD=new C.u(1,0.16862745098039217,0.16862745098039217,0.2,D.q)
B.hh2=new A.jE("loadB","Black \xb7 to light 2",B.beD,D.c,"hot")
B.cKd=w([B.tm,B.hh5,B.hh0,B.hh2],x.d)
B.axo=w([72,73,74,75],x.t)
B.eNK=new C.z(-25,-15)
B.evv=new C.z(25,-15)
B.eNJ=new C.z(-25,15)
B.evu=new C.z(25,15)
B.cO9=w([B.eNK,B.evv,B.eNJ,B.evu],x.f)
B.h5_=new A.q(-125,292,-114.5)
B.h8q=new A.q(125,292,-114.5)
B.hb3=new A.q(125,208,-114.5)
B.h87=new A.q(-125,208,-114.5)
B.cOq=w([B.h5_,B.h8q,B.hb3,B.h87],x.o)
B.bID=new A.pS("wall","Whole-wall TV","\ud83c\udfac",0,!0)
B.bIL=new A.pS("tv200",'Cinema 200"',"\ud83c\udfac",175,!1)
B.bIG=new A.pS("tv150",'Cinema 150"',"\ud83c\udfac",130,!1)
B.bIH=new A.pS("bangtv",'Beovision TV 77"',"\ud83d\udcfa",66,!1)
B.bIC=new A.pS("sonytv",'Sony Bravia 75"',"\ud83d\udcfa",64,!1)
B.bIM=new A.pS("lgtv",'LG OLED 65"',"\ud83d\udcfa",56,!1)
B.bIF=new A.pS("tv",'Samsung Neo QLED 55"',"\ud83d\udcfa",48,!1)
B.bIK=new A.pS("appletv",'Apple TV 4K 50"',"\ud83d\udcfa",44,!1)
B.bIJ=new A.pS("lamp","Table lamp","\ud83d\udca1",0,!1)
B.bII=new A.pS("toaster","Toaster","\ud83c\udf5e",0,!1)
B.bIE=new A.pS("hairdryer","Hair dryer","\ud83d\udc87",0,!1)
B.a3O=w([B.bID,B.bIL,B.bIG,B.amm,B.bIH,B.bIC,B.bIM,B.bIF,B.bIK,B.bIJ,B.bII,B.bIE],C.at("O<pS>"))
B.cOB=w([y.O,y.x,y.R,y.N,y.E,y.k,y.b,y.n],x.s)
B.bhy=new C.u(1,0.7764705882352941,0.5254901960784314,0.25882352941176473,D.q)
B.biu=new C.u(1,0.43529411764705883,0.2901960784313726,0.1803921568627451,D.q)
B.bpN=new C.u(1,0.6627450980392157,0.44313725490196076,0.29411764705882354,D.q)
B.axH=w([F.mD,B.bhy,E.afs,B.biu,B.bpN],x.O)
B.cVZ=w([y.O,"Two cables come into the box: one from the breaker panel (LINE) and one going to the light (LOAD).","Twist the two white wires together with a wire nut. A switch does not cut the neutral.",y.R,"Fasten the black wire from the panel to one BRASS screw.","Fasten the black wire that goes to the light to the other BRASS screw.","Push the switch into the box, put the plate on and test with the power on."],x.s)
B.euc=new C.z(0,330)
B.eNA=new C.z(-120,1080)
B.euH=new C.z(120,1080)
B.eNL=new C.z(-300,1000)
B.evU=new C.z(300,1000)
B.eOc=new C.z(-700,800)
B.eyY=new C.z(700,800)
B.cWm=w([B.euc,B.eNA,B.euH,B.eNL,B.evU,B.eOc,B.eyY],x.f)
B.cWs=w(["Walnut","Blue grey","Brick red","Sage green","Sand","Charcoal"],x.s)
B.jV=w(["switch","switch2p","switch3","switch4","switchsmart","switchcombo"],x.s)
B.h6V=new A.q(-6.5,7.5,-7.85)
B.h70=new A.q(-6.5,7.8,-3)
B.cWN=w([B.h6V,B.h70],x.o)
B.hhv=new A.FW("NGMY JOBS","Find work. Get hired. Get paid.",D.aE,D.il,D.tH)
B.hhD=new A.FW("NGMY LOANS","Help when you need it most.",D.cT,D.e_,D.vN)
B.hhy=new A.FW("KISWAHILI SCHOOL","Learn Swahili and English, step by step.",D.bP,D.tE,D.vR)
B.hhA=new A.FW("CIVIC REGISTRY","Your family, your community, registered.",D.d3,D.d7,D.nV)
B.hhu=new A.FW("CORE PROTOCOL","Studios for curious minds.",D.b6,D.jq,D.pV)
B.hhz=new A.FW("BUILD AND FIX","The Construction Lab: wire it, plumb it.",D.fr,D.hM,D.tR)
B.hho=new A.FW("CREATE WITH NGMY","Videos, slides, bios and books.",D.bD,D.ka,D.pS)
B.cWR=w([B.hhv,B.hhD,B.hhy,B.hhA,B.hhu,B.hhz,B.hho],C.at("O<FW>"))
B.hst=new A.pD(0,-100,100,24)
B.hsA=new A.pD(1,90,100,24)
B.cX2=w([B.hst,B.hsA],x.X)
B.eOm=new C.z(-95,160)
B.eNT=new C.z(-35,175)
B.ezM=new C.z(95,170)
B.cX7=w([B.eOm,B.eNT,B.ezM],x.f)
B.bi2=new C.u(1,0.9176470588235294,0.9490196078431372,0.9686274509803922,D.q)
B.bnz=new C.u(1,0.9647058823529412,0.9098039215686274,0.9098039215686274,D.q)
B.bmv=new C.u(1,0.9529411764705882,0.9215686274509803,0.7843137254901961,D.q)
B.ay3=w([B.Bh,B.bi2,B.bnz,B.bmv],x.O)
B.eew={common:0}
B.f4q=new C.dE(B.eew,1,x.M)
B.bJ0=new A.fM(23,"COMMON screw (the odd one)",B.f4q,"The COMMON screw is the one with a different colour. The black wire that brings the power in, or goes to the light, belongs here.",!1,"hot")
B.efr={trav1:0,trav2:1}
B.aQK=new C.dE(B.efr,2,x.M)
B.bJ6=new A.fM(21,"Traveler screw (top)",B.aQK,y.X,!1,"hot")
B.bJl=new A.fM(22,"Traveler screw (bottom)",B.aQK,y.X,!1,"hot")
B.cXj=w([B.wa,B.bJ0,B.bJ6,B.bJl],x.r)
B.dAA=new A.i9(-60,60,28,50)
B.dAw=new A.i9(-150,-100,70,170)
B.dA9=new A.i9(100,150,70,170)
B.dAB=new A.i9(-60,-20,156,186)
B.dAe=new A.i9(20,60,156,186)
B.cXy=w([B.dAA,B.dAw,B.dA9,B.dAB,B.dAe],x.T)
B.cXA=w([y.O,"The cable comes in through the top of the box. Strip about 3/4 inch of insulation from each wire.","Fasten the bare copper ground wire to the GREEN screw.","Fasten the white (neutral) wire to a SILVER screw.","Fasten the black (hot) wire to a BRASS screw. Wrap each wire clockwise under its screw.","Fold the wires back and push the outlet into the box.","Put the cover plate on, then turn the power on and test."],x.s)
B.hef=new A.q(-3.6,7.5,-7.85)
B.h6l=new A.q(-3.6,4.2,-7.85)
B.cXI=w([B.hef,B.h6l],x.o)
B.cXK=w([-0.5,-0.25,0,0.25,0.5],x.n)
B.eUc=new C.b7(600,400,!0)
B.eTH=new C.b7(1030,400,!0)
B.eTI=new C.b7(1210,400,!0)
B.cYd=w([B.eUc,B.eTH,B.eTI],C.at("O<+(K,K,R)>"))
B.cYt=w([0,2,1,3,4,6,7,8],x.t)
B.eUV=new C.b7(-0.1,0,0.5)
B.eX2=new C.b7(0.35,-0.4,0.3)
B.eVT=new C.b7(-0.4,0.55,0.35)
B.cYz=w([B.eUV,B.eX2,B.eVT],C.at("O<+(K,K,K)>"))
B.eNu=new C.z(-1050,"store")
B.aPn=new C.z(-840,"tower")
B.eO4=new C.z(-630,"tower")
B.eNV=new C.z(-420,"gasstation")
B.aPm=new C.z(-210,"tower")
B.euh=new C.z(0,"hq")
B.aPa=new C.z(210,"tower")
B.ews=new C.z(420,"store")
B.eyB=new C.z(630,"tower")
B.aPc=new C.z(840,"tower")
B.eux=new C.z(1050,"gasstation")
B.cZ8=w([B.eNu,B.aPn,B.eO4,B.eNV,B.aPm,B.euh,B.aPa,B.ews,B.eyB,B.aPc,B.eux],x.d6)
B.a4c=w(["Always switch the breaker OFF and test the wires with a tester before you touch them.","Never use water on an electrical fire: switch the power off at the breaker first.","Reversed hot and neutral can look fine and still be a shock hazard.","A GFCI outlet protects you near water: press TEST every month.","A ceiling fan needs a fan-rated box, because it is heavy and it shakes."],x.s)
B.hba=new A.q(9.8,6,-7.85)
B.h5t=new A.q(9.8,7.5,-7.85)
B.heE=new A.q(-8,7.5,-7.85)
B.h89=new A.q(-8,1.5,-7.85)
B.cZl=w([B.hba,B.h5t,B.heE,B.h89],x.o)
B.aX0=new A.q(5,1.8,-7.85)
B.h96=new A.q(5,-0.1,-7.85)
B.haa=new A.q(12.5,-0.1,-7.85)
B.d_s=w([B.aX0,B.h96,B.haa],x.o)
B.lM=w(["outlet","gfci","split","v240four","v240three","v240only","isolated"],x.s)
B.fY9=new A.q(3,3.1,-7.1)
B.aWS=new A.q(3,1.7,-7.1)
B.ha5=new A.q(3,1,-7.1)
B.h1z=new A.q(3.65,0.5,-7.1)
B.h3r=new A.q(4.3,1,-7.1)
B.h92=new A.q(4.3,1.8,-7.1)
B.heH=new A.q(5,1.8,-7.1)
B.d_W=w([B.fY9,B.aWS,B.ha5,B.h1z,B.h3r,B.h92,B.heH,B.aX0],x.o)
B.amq=new A.fM(23,"Silver screw W: NEUTRAL",B.JD,y.I,!1,"neutral")
B.eeK={hot1:0,hot2:1}
B.U3=new C.dE(B.eeK,2,x.M)
B.bIN=new A.fM(21,"Brass screw X: HOT",B.U3,y.l,!1,"hot")
B.bJr=new A.fM(22,"Brass screw Y: HOT",B.U3,y.l,!1,"hot")
B.d06=w([B.wa,B.amq,B.bIN,B.bJr],x.r)
B.d0s=w(["My outlet is dead and it is dark in here. Please come and wire it.","The light in my room does not work, and my phone will not charge. Can you fix the wiring?","I have no power in my room at all. Can an electrician come?"],x.s)
B.eYQ=new C.cy([-0.35,-0.2,0.42,0.3])
B.eZ2=new C.cy([0.3,0.25,0.32,0.38])
B.eXT=new C.cy([0.05,-0.55,0.22,0.14])
B.eYl=new C.cy([-0.5,0.45,0.2,0.16])
B.d0E=w([B.eYQ,B.eZ2,B.eXT,B.eYl],x.eV)
B.d0F=w([D.ax,D.bf,D.aE,D.d3,D.bO,D.f5],x.O)
B.hdU=new A.q(0.6,11,-3.4)
B.h4l=new A.q(0.6,3.2,-3.2)
B.hdn=new A.q(0.6,2.2,-1.9)
B.h3Y=new A.q(0.6,0.7,-1.5)
B.d13=w([B.hdU,B.h4l,B.hdn,B.h3Y],x.o)
B.d1f=w([0,24,-24,48,-48],x.n)
B.KI=new A.jE("neutral","White \xb7 neutral",B.oV,D.av,"neutral")
B.hgP=new A.jE("line","Black \xb7 hot from the panel (LINE)",B.tT,D.c,"hot")
B.hh6=new A.jE("load","Black \xb7 hot to the light (LOAD)",B.Mi,D.c,"hot")
B.d1s=w([B.tm,B.KI,B.hgP,B.hh6],x.d)
B.ayA=w([3,3.6,3.3,2.6],x.n)
B.d1J=w([y.O,y.x,y.R,"Fasten the white NEUTRAL wire to the NEUTRAL (silver) screw. A regular switch never touches the neutral, this one does.","Fasten the black wire from the panel to the LINE screw.","Fasten the black wire that goes to the light to the LOAD screw.",y.b,y.n],x.s)
B.eOb=new C.z(-700,330)
B.eyX=new C.z(700,380)
B.eNw=new C.z(-1100,-420)
B.euD=new C.z(1100,-480)
B.eNC=new C.z(-1300,100)
B.euK=new C.z(1350,30)
B.eui=new C.z(0,-900)
B.eND=new C.z(-1500,-300)
B.euL=new C.z(1550,-200)
B.d1M=w([B.eOb,B.eyX,B.eNw,B.euD,B.eNC,B.euK,B.eui,B.eND,B.euL],x.f)
B.d1S=w([W.qL,A6.TH,S.ln],x.f)
B.hsv=new A.pD(0,-64,120,26)
B.hsy=new A.pD(1,64,120,26)
B.hsD=new A.pD(2,0,84,24)
B.d2q=w([B.hsv,B.hsy,B.hsD],x.X)
B.h2u=new A.q(0,8.3,0)
B.aWs=new A.q(0,3.9,0)
B.a4m=w([B.h2u,B.aWs],x.o)
B.d2H=w([y.O,"Make sure the box is rated for a fan. A plain light box cannot carry the weight and the shaking.","Join the house ground wire to the fan ground.","Join the house white wire to the fan white wire with a wire nut.","Join the house black wire to the fan black wire with a wire nut.","Push the wires up into the box and fasten the canopy to the ceiling.",y.f],x.s)
B.eMx=new C.z(-3.5,11)
B.eC_=new C.z(3.5,11)
B.eAe=new C.z(-3.5,-11)
B.exO=new C.z(3.5,-11)
B.d3_=w([B.eMx,B.eC_,B.eAe,B.exO],x.f)
B.hbz=new A.q(-0.6,11,-3.4)
B.h5A=new A.q(-0.6,3.2,-3.2)
B.haA=new A.q(-0.6,2.2,-1.9)
B.hf2=new A.q(-0.6,0.7,-1.5)
B.d30=w([B.hbz,B.h5A,B.haA,B.hf2],x.o)
B.HY=w(["dog","cat","cow","sheep","chicken","horse"],x.s)
B.eJw=new C.z(-1.2,0)
B.eSu=new C.z(1.2,0)
B.d3G=w([B.eJw,B.eSu],x.f)
B.d48=w([40,70,100,130,160],x.n)
B.bJ2=new A.fM(23,"NEUTRAL screw (silver)",B.JD,"The electronics inside need the neutral wire to run. White goes on the silver screw.",!1,"neutral")
B.ef_={line:0}
B.f4y=new C.dE(B.ef_,1,x.M)
B.bJe=new A.fM(21,"LINE screw (brass, hot in)",B.f4y,"The black wire from the breaker panel goes on the LINE screw.",!1,"hot")
B.ef3={load:0}
B.f3H=new C.dE(B.ef3,1,x.M)
B.bJh=new A.fM(22,"LOAD screw (brass, hot out)",B.f3H,"The black wire that goes to the light goes on the LOAD screw.",!1,"hot")
B.d4i=w([B.wa,B.bJ2,B.bJe,B.bJh],x.r)
B.el9=new A.nu("flange","flange","Toilet flange",D.Y,"The flange is fixed to the floor over the drain. Everything else sits on it.",!1,0)
B.dhD=w(["flange"],x.s)
B.el7=new A.nu("wax","wax","Wax ring",B.dhD,"The wax ring goes on the flange before the toilet. It makes the seal against sewer gas and water.",!1,0)
B.dsN=w(["wax"],x.s)
B.el4=new A.nu("toilet","toilet","Toilet",B.dsN,"The toilet is lowered straight down onto the wax ring. The ring has to be there first.",!1,0)
B.dr0=w(["toilet"],x.s)
B.el8=new A.nu("bolts","bolts","Toilet bolts",B.dr0,"The two bolts hold the toilet to the flange. Set the toilet first.",!1,2)
B.el5=new A.nu("tvalve","valve","Toilet shut-off valve",D.Y,"The shut-off valve goes on the pipe that comes out of the wall.",!0,0)
B.dr7=w(["tvalve","toilet"],x.s)
B.el6=new A.nu("those","hosecold","Toilet supply hose",B.dr7,"The hose joins the valve to the toilet tank, so both must be there first.",!1,2)
B.aKm=new A.nu("faucet","faucet","Faucet",D.Y,"The faucet goes through the hole in the counter.",!1,0)
B.aKp=new A.nu("vhot","valve","Hot shut-off valve (left)",D.Y,y.W,!0,0)
B.aKn=new A.nu("vcold","valve","Cold shut-off valve (right)",D.Y,y.W,!0,0)
B.ds9=w(["vhot","faucet"],x.s)
B.aKq=new A.nu("hhot","hosehot","Hot supply hose",B.ds9,"The hose joins the hot valve to the faucet, so the valve and the faucet must be there first.",!1,2)
B.ds6=w(["vcold","faucet"],x.s)
B.aKo=new A.nu("hcold","hosecold","Cold supply hose",B.ds6,"The hose joins the cold valve to the faucet, so the valve and the faucet must be there first.",!1,2)
B.aKl=new A.nu("tail","tail","Tailpiece",D.Y,"The tailpiece hangs from the sink drain. It is the first piece of the drain.",!1,0)
B.dqU=w(["tail"],x.s)
B.aKr=new A.nu("trap","trap","P-trap",B.dqU,"The P-trap joins the tailpiece. Build the drain from the top down.",!1,1)
B.dr1=w(["trap"],x.s)
B.aKs=new A.nu("arm","arm","Trap arm",B.dr1,"The trap arm joins the trap and goes into the wall.",!1,1)
B.cZV=w([B.el9,B.el7,B.el4,B.el8,B.el5,B.el6,B.aKm,B.aKp,B.aKn,B.aKq,B.aKo,B.aKl,B.aKr,B.aKs],x.fI)
B.err=new A.Xg("bathroom","Bathroom",B.cZV,"Fit out a bathroom: a toilet and a sink with its faucet, supply hoses and drain.")
B.djy=w([B.aKm,B.aKp,B.aKn,B.aKq,B.aKo,B.aKl,B.aKr,B.aKs],x.fI)
B.ers=new A.Xg("kitchen","Kitchen",B.djy,"Fit out a kitchen sink: the faucet, the hot and cold supplies and the drain.")
B.ayV=w([B.err,B.ers],C.at("O<Xg>"))
B.eOl=new C.z(-900,400)
B.ezI=new C.z(900,400)
B.eOj=new C.z(-900,1000)
B.ezG=new C.z(900,1000)
B.eNM=new C.z(-300,1260)
B.evV=new C.z(300,1260)
B.eNs=new C.z(-1000,700)
B.euu=new C.z(1000,700)
B.eO5=new C.z(-640,90)
B.eyC=new C.z(640,90)
B.eOk=new C.z(-900,1400)
B.ezH=new C.z(900,1400)
B.d4O=w([B.eOl,B.ezI,B.eOj,B.ezG,B.eNM,B.evV,B.eNs,B.euu,B.eO5,B.eyC,B.eOk,B.ezH],x.f)
B.fY6=new A.q(8.2,0.9,-6.3)
B.haM=new A.q(8.2,-0.1,-6.3)
B.h0T=new A.q(8.2,-0.1,-7.85)
B.d5r=w([B.fY6,B.haM,B.h0T],x.o)
B.eyy=new C.z(-4.5,10)
B.ePb=new C.z(4.5,10)
B.eSs=new C.z(-4.5,-10)
B.eP7=new C.z(4.5,-10)
B.d5D=w([B.eyy,B.ePb,B.eSs,B.eP7],x.f)
B.d5E=w([-0.28,0.28],x.n)
B.dAD=new A.i9(-70,70,20,44)
B.dAo=new A.i9(-110,-50,80,100)
B.dAj=new A.i9(50,110,80,100)
B.dAn=new A.i9(-110,-50,130,150)
B.dAi=new A.i9(50,110,130,150)
B.d5R=w([B.dAD,B.dAo,B.dAj,B.dAn,B.dAi],x.T)
B.d67=w([D.ax,D.aE,D.bf,D.m0,D.d3,D.cd,D.f5],x.O)
B.eHW=new C.z("back","Back wall")
B.eSd=new C.z("left","Left wall")
B.eKa=new C.z("right","Right wall")
B.d6z=w([B.eHW,B.eSd,B.eKa],x.L)
B.eeq={black:0}
B.JE=new C.dE(B.eeq,1,x.M)
B.bIU=new A.fM(51,"Black wire nut: HOT",B.JE,"The house black wire joins the fixture black wire.",!1,"hot")
B.efx={white:0}
B.JB=new C.dE(B.efx,1,x.M)
B.bJo=new A.fM(52,"White wire nut: NEUTRAL",B.JB,"The house white wire joins the fixture white wire.",!1,"neutral")
B.bIP=new A.fM(53,"Green ground connection",B.JC,"The bare copper house ground joins the green fixture ground wire.",!1,"ground")
B.d6K=w([B.bIU,B.bJo,B.bIP],x.r)
B.eNS=new C.z(-34,-6)
B.evX=new C.z(30,10)
B.eNv=new C.z(-10,24)
B.d6P=w([B.eNS,B.evX,B.eNv],x.f)
B.d6W=w([y.O,y.x,y.R,"Fasten hot leg 1 from the panel (black) to the top LEFT screw.","Fasten hot leg 2 from the panel (red) to the top RIGHT screw.","Fasten hot leg 1 to the heater (black) to the bottom LEFT screw.","Fasten hot leg 2 to the heater (red) to the bottom RIGHT screw.",y.b,y.n],x.s)
B.bHo=new A.E7("Oak",B.Bv,"wood")
B.bHq=new A.E7("Dark wood",B.q7,"wood")
B.aiq=new C.u(1,0.5529411764705883,0.5647058823529412,0.5882352941176471,D.q)
B.bHs=new A.E7("Grey carpet",B.aiq,"carpet")
B.bq8=new C.u(1,0.3568627450980392,0.4980392156862745,0.6509803921568628,D.q)
B.bHp=new A.E7("Blue carpet",B.bq8,"carpet")
B.bny=new C.u(1,0.8470588235294118,0.803921568627451,0.7058823529411765,D.q)
B.bHm=new A.E7("Cream carpet",B.bny,"carpet")
B.bHr=new A.E7("White tile",B.Y6,"tile")
B.bHn=new A.E7("Slate tile",B.af5,"tile")
B.azh=w([B.bHo,B.bHq,B.bHs,B.bHp,B.bHm,B.bHr,B.bHn],C.at("O<E7>"))
B.ab4=new A.jE("hot1","Black \xb7 hot 1",B.tT,D.c,"hot")
B.B2=new C.u(1,0.8196078431372549,0.29411764705882354,0.22745098039215686,D.q)
B.ab5=new A.jE("hot2","Red \xb7 hot 2",B.B2,D.c,"hot")
B.d7H=w([B.KI,B.ab4,B.ab5],x.d)
B.eUj=new C.b7(-80,100,D.ax)
B.eWs=new C.b7(80,100,D.bf)
B.eVr=new C.b7(-80,150,D.aE)
B.d7J=w([B.eUj,B.eWs,B.eVr],x.dV)
B.hsr=new A.pD(0,0,78,26)
B.d7R=w([B.hsr],x.X)
B.efo={store:0,gasstation:1}
B.f4A=new C.dE(B.efo,2,x.M)
B.buI=new A.zc("food","\ud83c\udf54","Food",B.f4A)
B.efl={shop:0,store:1}
B.f49=new C.dE(B.efl,2,x.M)
B.buH=new A.zc("groceries","\ud83d\uded2","Groceries",B.f49)
B.eeJ={hospital:0}
B.f44=new C.dE(B.eeJ,1,x.M)
B.buK=new A.zc("medicine","\ud83d\udc8a","Medicine",B.f44)
B.eeM={hq:0,tower:1}
B.f4w=new C.dE(B.eeM,2,x.M)
B.buG=new A.zc("package","\ud83d\udce6","Package",B.f4w)
B.edU={school:0,firestation:1,hq:2}
B.f3S=new C.dE(B.edU,3,x.M)
B.buJ=new A.zc("letters","\u2709\ufe0f","Letters",B.f3S)
B.R9=w([B.buI,B.buH,B.buK,B.buG,B.buJ],C.at("O<zc>"))
B.d85=w([y.O,y.x,"Fasten the white neutral to a SILVER screw.","Fasten the black hot to a BRASS screw.","Fasten the green wire with the yellow stripe (the isolated ground, which runs all the way to the panel) to the GREEN screw with the orange triangle. The box itself is grounded with its own bare copper wire.",y.b,y.n],x.s)
B.d8c=w([-1000,-500,0,500,1000],x.n)
B.haB=new A.q(3,3.2,-7.85)
B.hf4=new A.q(3,4,-7.85)
B.heg=new A.q(3,4.2,-7.4)
B.h_f=new A.q(3,3.95,-7)
B.d9c=w([B.haB,B.hf4,B.heg,B.h_f],x.o)
B.d9e=w(["The sink leaks and there is water on the floor. Please fix the plumbing.","The toilet is not connected and the water is running everywhere. Help!","There is no water at my sink and the pipes are open. Can a plumber come?"],x.s)
B.Xx=new C.u(1,0.23137254901960785,0.3568627450980392,0.47843137254901963,D.q)
B.d9p=w([D.al,B.Xx,D.bM,D.bs],x.O)
B.f54=new A.rP("apple","\ud83c\udf4e","Apple","A little energy",3,0.12,0,0.1,!1)
B.f55=new A.rP("water","\ud83d\udca7","Water","Quenches your thirst",2,0,0,0.8,!1)
B.f56=new A.rP("juice","\ud83e\udd64","Juice","Some energy and a drink",4,0.18,0,0.5,!1)
B.f5b=new A.rP("sandwich","\ud83e\udd6a","Sandwich","A good bit of energy",6,0.3,0,0,!1)
B.f53=new A.rP("meal","\ud83c\udf54","Burger meal","Lots of energy",10,0.55,0,0,!1)
B.d9s=w([B.f54,B.f55,B.f56,B.f5b,B.f53],x.y)
B.eO6=new C.z(-660,340)
B.eNP=new C.z(-330,340)
B.evY=new C.z(330,340)
B.eyE=new C.z(660,340)
B.eO7=new C.z(-660,500)
B.eNQ=new C.z(-330,500)
B.evZ=new C.z(330,500)
B.eyF=new C.z(660,500)
B.eO8=new C.z(-660,780)
B.eNR=new C.z(-330,780)
B.ew0=new C.z(330,780)
B.eyG=new C.z(660,780)
B.eO_=new C.z(-500,940)
B.ey8=new C.z(500,940)
B.da4=w([B.eO6,B.eNP,B.evY,B.eyE,B.eO7,B.eNQ,B.evZ,B.eyF,B.eO8,B.eNR,B.ew0,B.eyG,B.eO_,B.ey8],x.f)
B.hbe=new A.q(6,0.2,0)
B.h9x=new A.q(6,2.6,0)
B.aXu=new A.q(8.6,2.6,0)
B.daz=w([B.hbe,B.h9x,B.aXu],x.o)
B.db4=w([D.c,D.dt,D.es,D.eO,D.bN,D.bL],x.O)
B.eOf=new C.z(-7,-7)
B.ezc=new C.z(7,-7)
B.eOe=new C.z(-7,7)
B.ezb=new C.z(7,7)
B.dbj=w([B.eOf,B.ezc,B.eOe,B.ezb],x.f)
B.dbl=w([-2.4,2.4],x.n)
B.dbm=w([-0.5,0,0.5],x.n)
B.amp=new A.fM(21,"Brass screw X: HOT",B.U3,y.p,!1,"hot")
B.amn=new A.fM(22,"Brass screw Y: HOT",B.U3,y.p,!1,"hot")
B.dbx=w([B.wa,B.amp,B.amn],x.r)
B.hhb=new A.PL("Black","Hot (line or switched)","Brass terminal","120 V branch circuit","Carries the power from the breaker. Treat it as live until it is tested dead.","Can be a traveler in a three-way switch, or a switched hot. Verify with a tester.")
B.hh9=new A.PL("Red","Hot (second hot or traveler)","Brass or the marked traveler terminal","Switch legs, travelers, fan and light controls","Often the switched wire to a fan or light, or a traveler.","Check the diagram: red can be a traveler or a second circuit.")
B.hh8=new A.PL("White","Neutral","Silver terminal","120 V branch circuit","The return path for the current. It can still be live if something is wrong.","In a switch loop a white wire can be re-marked as a hot. A white wire is not always neutral.")
B.hh7=new A.PL("Bare copper or green","Equipment ground","Green screw or the ground lead","Every grounded device","Not for current in normal use. It is the safety path if a fault happens.","Never use the neutral as a ground. Older homes may have no ground at all: that needs verification.")
B.hha=new A.PL("Gray / blue / others","Depends on the installation","See the device diagram","Low voltage, control wires, other systems","Do not guess what a wire does from its color.","Colors and their meaning are not the same everywhere. REQUIRES VERIFICATION.")
B.dbB=w([B.hhb,B.hh9,B.hh8,B.hh7,B.hha],C.at("O<PL>"))
B.Rh=w([-1.6,1.6],x.n)
B.hgN=new A.jE("blackLine","Black \xb7 from the breaker",B.tT,D.c,"hot")
B.hh3=new A.jE("blackLoad","Black \xb7 to the light",B.Mi,D.c,"hot")
B.dbK=w([B.hgN,B.hh3,B.tm],x.d)
B.dc1=w([0,10,22,36,52],x.n)
B.hsu=new A.pD(0,-60,130,26)
B.hsz=new A.pD(1,80,56,22)
B.dc2=w([B.hsu,B.hsz],x.X)
B.dcs=w([D.bo,D.bu,D.ax,D.aK,D.bs],x.O)
B.eeR={isoground:0}
B.f3L=new C.dE(B.eeR,1,x.M)
B.bJn=new A.fM(25,"Isolated-ground screw (green, orange triangle)",B.f3L,"The dedicated ground wire goes on the green screw with the orange triangle. It does not touch the box or the strap.",!1,"ground")
B.bJg=new A.fM(23,"Silver screw: NEUTRAL",B.JD,y.c,!1,"neutral")
B.eeL={hot:0}
B.a8K=new C.dE(B.eeL,1,x.M)
B.bIY=new A.fM(21,"Brass screw: HOT",B.a8K,y.u,!1,"hot")
B.dcD=w([B.bJn,B.bJg,B.bIY],x.r)
B.bew=new C.u(1,0.9294117647058824,0.9019607843137255,0.8392156862745098,D.q)
B.bcu=new C.u(1,0.9137254901960784,0.8274509803921568,0.8274509803921568,D.q)
B.bbF=new C.u(1,0.8352941176470589,0.8941176470588236,0.8156862745098039,D.q)
B.agD=new C.u(1,0.9529411764705882,0.8901960784313725,0.6549019607843137,D.q)
B.bhk=new C.u(1,0.7254901960784313,0.7647058823529411,0.8666666666666667,D.q)
B.bqh=new C.u(1,0.5607843137254902,0.6392156862745098,0.6588235294117647,D.q)
B.azy=w([B.bew,B.XS,B.bcu,B.bbF,B.agD,B.bhk,B.agI,B.bqh],x.O)
B.eep={blackLine:0,blackLoad:1}
B.aQt=new C.dE(B.eep,2,x.M)
B.bJ3=new A.fM(21,"Brass screw (top)",B.aQt,y.v,!1,"hot")
B.bIQ=new A.fM(22,"Brass screw (bottom)",B.aQt,y.v,!1,"hot")
B.amo=new A.fM(25,"Green screw: GROUND",B.JC,y.Z,!1,"ground")
B.dde=w([B.bJ3,B.bIQ,B.amo],x.r)
B.eOh=new C.z(-80,90)
B.ezq=new C.z(80,90)
B.eOg=new C.z(-80,140)
B.ezp=new C.z(80,140)
B.ddX=w([B.eOh,B.ezq,B.eOg,B.ezp],x.f)
B.bJp=new A.fM(51,"Black wire nut: HOT",B.JE,"The house black wire joins the fan black wire.",!1,"hot")
B.bIO=new A.fM(52,"White wire nut: NEUTRAL",B.JB,"The house white wire joins the fan white wire.",!1,"neutral")
B.bJa=new A.fM(53,"Green ground connection",B.JC,"The bare copper house ground joins the green fan ground wire.",!1,"ground")
B.de3=w([B.bJp,B.bIO,B.bJa],x.r)
B.bbq=new A.Sy("bus",-575,-25,0,1)
B.bbs=new A.Sy("police",-575,-25,854,5)
B.bbr=new A.Sy("bus",25,575,850,3)
B.bbt=new A.Sy("police",25,575,1704,6)
B.kn=w([B.bbq,B.bbs,B.bbr,B.bbt],C.at("O<Sy>"))
B.am8=new A.rl(4,"deadOutlet")
B.deb=w([B.a0w,B.a0x,B.NW,B.NX,B.am8,B.a0A,B.a0B,B.a0C,B.a0D,B.a0E,B.a0y,B.a0z],C.at("O<rl>"))
B.eXM=new C.cy([0,560,240,7])
B.eXN=new C.cy([0,560,300,9])
B.a4C=w([B.eXM,B.eXN],C.at("O<+(K,K,K,G)>"))
B.hh1=new A.jE("always","Black \xb7 always hot (from the panel)",B.tT,D.c,"hot")
B.hgV=new A.jE("switched","Red \xb7 switched hot (from the wall switch)",B.B2,D.c,"hot")
B.deC=w([B.tm,B.KI,B.hh1,B.hgV],x.d)
B.deG=w([y.O,"Find the LINE and LOAD screws. LOAD is covered with yellow tape. Leave it covered unless you feed another outlet.",y.R,"Fasten the white wire to the silver LINE screw.","Fasten the black wire to the brass LINE screw.","Push the GFCI into the box and put the plate on.","Turn the power on, press RESET, then press TEST. It must click off."],x.s)
B.deJ=w([y.O,y.x,y.R,"Fasten the black wire (power in, or to the light) to the COMMON screw: the odd-coloured one.","Fasten the first traveler (red) to a TRAVELER screw.","Fasten the second traveler (white wire taped black) to the other TRAVELER screw.",y.b,y.n],x.s)
B.hss=new A.pD(0,0,80,26)
B.hsB=new A.pD(1,90,56,22)
B.df1=w([B.hss,B.hsB],x.X)
B.dfb=w(["car","ambulance","firetruck"],x.s)
B.dAC=new A.i9(-62,62,6,46)
B.dAp=new A.i9(-117,-73,149,171)
B.dAz=new A.i9(-57,-13,164,186)
B.dAk=new A.i9(73,117,159,181)
B.dAc=new A.i9(120,144,140,160)
B.dAa=new A.i9(108,142,48,60)
B.dfg=w([B.dAC,B.dAp,B.dAz,B.dAk,B.dAc,B.dAa],x.T)
B.dfk=w([0.1,8.05],x.n)
B.h_j=new A.q(1000,900,1500)
B.fYS=new A.q(0,200,0)
B.aPl=new C.z(B.h_j,B.fYS)
B.h1Q=new A.q(300,70,1000)
B.fZc=new A.q(0,250,300)
B.eId=new C.z(B.h1Q,B.fZc)
B.hcf=new A.q(-200,90,780)
B.fZ8=new A.q(0,240,300)
B.eEd=new C.z(B.hcf,B.fZ8)
B.hcD=new A.q(-420,520,1000)
B.fZ6=new A.q(0,230,300)
B.ezP=new C.z(B.hcD,B.fZ6)
B.h43=new A.q(700,330,900)
B.h1O=new A.q(300,230,200)
B.eN0=new C.z(B.h43,B.h1O)
B.h_C=new A.q(1100,80,300)
B.h3b=new A.q(560,250,0)
B.eM_=new C.z(B.h_C,B.h3b)
B.h_s=new A.q(1080,100,-250)
B.h3a=new A.q(560,240,-100)
B.ePX=new C.z(B.h_s,B.h3a)
B.h_i=new A.q(1000,700,-700)
B.h0Y=new A.q(200,230,-300)
B.eS9=new C.z(B.h_i,B.h0Y)
B.h0Z=new A.q(200,90,-860)
B.fZe=new A.q(0,250,-300)
B.eOw=new C.z(B.h0Z,B.fZe)
B.hcn=new A.q(-300,110,-820)
B.fZ9=new A.q(0,240,-300)
B.eEP=new C.z(B.hcn,B.fZ9)
B.hd7=new A.q(-900,600,-600)
B.hco=new A.q(-300,230,-100)
B.eDp=new C.z(B.hd7,B.hco)
B.hbZ=new A.q(-1100,90,-200)
B.hcJ=new A.q(-560,250,0)
B.eS7=new C.z(B.hbZ,B.hcJ)
B.hbY=new A.q(-1100,120,250)
B.hcI=new A.q(-560,240,0)
B.eHE=new C.z(B.hbY,B.hcI)
B.hcS=new A.q(-700,520,1000)
B.hbV=new A.q(-100,230,100)
B.eBo=new C.z(B.hcS,B.hbV)
B.h0X=new A.q(200,170,1300)
B.fZ5=new A.q(0,230,150)
B.eRU=new C.z(B.h0X,B.fZ5)
B.dfA=w([B.aPl,B.eId,B.eEd,B.ezP,B.eN0,B.eM_,B.ePX,B.eS9,B.eOw,B.eEP,B.eDp,B.eS7,B.eHE,B.eBo,B.eRU,B.aPl],x.dt)
B.h7s=new A.q(-0.35,11,-3.4)
B.h5K=new A.q(-0.35,3.2,-3.2)
B.h9G=new A.q(-0.35,2.2,-1.9)
B.h3R=new A.q(-0.35,0.7,-1.5)
B.dfB=w([B.h7s,B.h5K,B.h9G,B.h3R],x.o)
B.he7=new A.q(5.2,7.5,-7.85)
B.h9s=new A.q(5.2,4,-7.85)
B.dfH=w([B.he7,B.h9s],x.o)
B.bIX=new A.fM(21,"LOAD hot (brass, taped)",D.vc,y.P,!0,"load")
B.bJ_=new A.fM(22,"LINE hot (brass)",B.JE,"The black (hot) wire from the breaker goes on the brass LINE screw.",!1,"hot")
B.bIW=new A.fM(23,"LOAD neutral (silver, taped)",D.vc,y.P,!0,"load")
B.bJ7=new A.fM(24,"LINE neutral (silver)",B.JB,"The white (neutral) wire from the breaker goes on the silver LINE screw.",!1,"neutral")
B.dg9=w([B.bIX,B.bJ_,B.bIW,B.bJ7,B.amo],x.r)
B.aXe=new A.q(0,15.5,-3.6)
B.h7J=new A.q(0,20,-3.6)
B.heM=new A.q(0,22.5,-2)
B.h5i=new A.q(0,22.5,1.1999999999999997)
B.h7T=new A.q(0,21.1,1.6)
B.dgf=w([B.aXe,B.h7J,B.heM,B.h5i,B.h7T],x.o)
B.dgT=w([],x.bm)
B.I6=w([],x.B)
B.dgS=w([],x.dI)
B.zs=w([],x.E)
B.dgU=w([],x.T)
B.I7=w([],x.z)
B.aA0=w([],x.e3)
B.wC=w([],x.a)
B.aA_=w([],x.W)
B.rK=w([],x.o)
B.aA2=w([],x.h)
B.aA1=w([],x.f)
B.hlE=new A.pA("outlet","\ud83d\udd0c","Wall outlet","Black to brass, white to silver",D.aE)
B.hly=new A.pA("switch","\ud83d\udca1","Light switch","Two blacks and a wire nut",D.aK)
B.hlz=new A.pA("gfci","\ud83d\udee1\ufe0f","GFCI outlet","LINE and LOAD near water",D.bv)
B.hlF=new A.pA("fan","\ud83c\udf00","Ceiling fan","Black, white, green and a fan box",D.b8)
B.hlt=new A.pA("switch2p","\ud83d\udd25","Double-pole switch","240 V: breaks both hot legs",D.ij)
B.hlA=new A.pA("switch3","\ud83d\udd00","Three-way switch","Common and two travelers",D.aK)
B.hlJ=new A.pA("switch4","\ud83d\udd01","Four-way switch","Between two three-ways",D.co)
B.hlI=new A.pA("switchsmart","\ud83d\udcf6","Smart, motion or timer switch","Needs the neutral wire",D.br)
B.hlB=new A.pA("switchcombo","\ud83c\udf9a\ufe0f","Combination switch","Two switches, one feed",D.hf)
B.hlw=new A.pA("split","\ud83c\udf17","Split (half-switched) outlet","Break the tab: switched and always-on",D.aT)
B.hlG=new A.pA("v240four","\ud83e\uddfa","4-wire 240 V outlet","Dryer, range and EV: two hots, neutral, ground",D.c7)
B.hlH=new A.pA("v240three","\ud83d\udd70\ufe0f","3-wire 240 V outlet","Old dryer or range: no separate ground",D.cQ)
B.hlv=new A.pA("v240only","\u2744\ufe0f","240 V only outlet","Window AC, welder: two hots and ground",D.b8)
B.hlC=new A.pA("isolated","\ud83c\udfed","Isolated-ground outlet","Its own ground wire to the panel",D.bv)
B.hlD=new A.pA("ptrap","\ud83e\udea0","Sink drain (P-trap)","Build a drain with a water seal",D.co)
B.hlx=new A.pA("faucet","\ud83d\udeb0","Faucet supply lines","Hot left, cold right",D.c7)
B.hlu=new A.pA("house","\ud83c\udfd7\ufe0f","Build and fix a house","Stage by stage, then repair",D.br)
B.dh7=w([B.hlE,B.hly,B.hlz,B.hlF,B.hlt,B.hlA,B.hlJ,B.hlI,B.hlB,B.hlw,B.hlG,B.hlH,B.hlv,B.hlC,B.hlD,B.hlx,B.hlu],C.at("O<pA>"))
B.eDJ=new C.z(-1.6,3.5)
B.eDh=new C.z(1.6,3.5)
B.eFh=new C.z(-1.6,-3.5)
B.eBY=new C.z(1.6,-3.5)
B.dh8=w([B.eDJ,B.eDh,B.eFh,B.eBY],x.f)
B.aA9=w([!1,!1,!1,!1],x.u)
B.eeQ={in1:0,in2:1}
B.aQs=new C.dE(B.eeQ,2,x.M)
B.bIS=new A.fM(23,"IN screw (top left)",B.aQs,y.g,!1,"hot")
B.bJi=new A.fM(21,"IN screw (top right)",B.aQs,y.g,!1,"hot")
B.efe={out1:0,out2:1}
B.aQz=new C.dE(B.efe,2,x.M)
B.bJ9=new A.fM(24,"OUT screw (bottom left)",B.aQz,y._,!1,"hot")
B.bJb=new A.fM(22,"OUT screw (bottom right)",B.aQz,y._,!1,"hot")
B.dhB=w([B.wa,B.bIS,B.bJi,B.bJ9,B.bJb],x.r)
B.dhL=w(["city","billboards","edges","houses","hospital","traffic"],x.s)
B.dhX=w(["Look at the pieces: the tailpiece, the P-trap and the trap arm. Pick the tailpiece first and tap its glowing outline under the sink.","Pick the P-trap (the U-shaped bend) and tap its glowing outline. It joins the tailpiece.","Pick the trap arm and tap its outline. It joins the trap to the wall drain.","Slide each slip nut up to its joint and hand tighten it: tap the nuts.","Run the water and look for leaks. The U-bend keeps a plug of water that blocks sewer gas."],x.s)
B.dtk=w(["Switch 1 common","Switch 2 common","Traveler terminal (both switches)","Green ground screw","Neutral splice (not on a switch)"],x.s)
B.eed={"Line (from the breaker)":0,"Load (to the light)":1,"Traveler A":2,"Traveler B":3,Ground:4,Neutral:5}
B.dxt=new C.bw(B.eed,["Switch 1 common","Switch 2 common","Traveler terminal (both switches)","Traveler terminal (both switches)","Green ground screw","Neutral splice (not on a switch)"],x.l)
B.dng=w(["Never assume the dark screw is the same on every brand: read the diagram on the switch.","A switch loop or an old house may not follow the colors: verify the wires."],x.s)
B.bvE=new A.akr("Three-way switch (two switches, one light)","Two three-way switches control one light from two places. Each switch has a COMMON terminal (dark screw) and two TRAVELER terminals. Power (line) goes to the common of the first switch, the light (load) to the common of the second, and two travelers join the switches. The ground goes to the green screw. A standard single-pole switch cannot do this job.",B.dtk,B.dxt,B.dng)
B.cXL=w(["Fan (motor) control wire","Light control wire","Neutral","Ground","Fan-rated support"],x.s)
B.eeS={"Motor lead (black)":0,"Light lead (blue)":1,"Neutral (white)":2,"Ground (green)":3,Support:4}
B.dy0=new C.bw(B.eeS,["Fan (motor) control wire","Light control wire","Neutral","Ground","Fan-rated support"],x.l)
B.d1g=w(["A blue wire is a light-kit lead on many fans, but not on all: read the diagram.","A fan that spins does not prove the installation is safe."],x.s)
B.bvD=new A.akr("Ceiling fan with a light kit","A fan has a motor and often a light kit, and they are not always switched together. Follow the fan maker's diagram: the motor lead goes to the fan control (or switched hot), the light lead to the light control, the white to neutral and the green to the ground. The box must be fan rated.",B.cXL,B.dy0,B.d1g)
B.zt=w([B.bvE,B.bvD],C.at("O<akr>"))
B.fJD=new C.y("\u2728",null,D.a9A,null,null,null,null,null,null,null,null,null)
B.fU9=new C.y("Nobody needs help right now.",null,D.fw,null,D.K,null,null,null,null,null,null,null)
B.ftu=new C.F(!0,D.aR,null,null,null,null,13,null,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fM_=new C.y("Everybody's wiring and plumbing works. Keep an eye on food and health: things break when you least expect it.",null,B.ftu,null,D.K,null,null,null,null,null,null,null)
B.dim=w([B.fJD,D.P,B.fU9,D.au,B.fM_],x.p)
B.dit=w(["road","roundabout","roadturn","roadtee","roadcross","house2","bighouse","billboard","tower","hq","store","gasstation","dmv","ubstation","townsign","cornersign","adboard","shop","hospital","firestation","school","car","firetruck","ambulance","dog","cat","cow","sheep","chicken","horse","tree","pine","bush","flowers","fence","lamppost","bench","pond","swing","shed","doghouse"],x.s)
B.eNz=new C.z(-1150,80)
B.euG=new C.z(1150,80)
B.eNy=new C.z(-1150,1990)
B.euF=new C.z(1150,1990)
B.diC=w([B.eNz,B.euG,B.eNy,B.euF],x.f)
B.f59=new A.rP("pills","\ud83e\ude79","Pain pills","Cures a headache or a cold: you walk normally again",8,0,0,0,!0)
B.f58=new A.rP("bread","\ud83c\udf5e","Food for the town","5 portions for the people who live here",10,0,0,0,!1)
B.f57=new A.rP("medicine","\ud83d\udc8a","Medicine","3 doses for the sick",12,0,0,0,!1)
B.diG=w([B.f59,B.f58,B.f57],x.y)
B.diJ=w([D.ax,D.bu,D.bf],x.O)
B.hbI=new A.q(125,292,-121.5)
B.heD=new A.q(-125,292,-121.5)
B.h_g=new A.q(-125,208,-121.5)
B.hbo=new A.q(125,208,-121.5)
B.diN=w([B.hbI,B.heD,B.h_g,B.hbo],x.o)
B.h0k=new A.q(11.4,4.6,-6)
B.h83=new A.q(11.4,5,-7.85)
B.h3S=new A.q(2.6,5,-7.85)
B.h4u=new A.q(2.6,3.4,-7.85)
B.diP=w([B.h0k,B.h83,B.h3S,B.h4u],x.o)
B.diT=w(["hospital","shop","school"],x.s)
B.diU=w(["hot","cold"],x.s)
B.diX=w([D.ax,D.bf,D.aE,D.f5,D.bS],x.O)
B.hh_=new A.jE("black","Black \xb7 hot",B.tT,D.c,"hot")
B.hgT=new A.jE("white","White \xb7 neutral",B.oV,D.av,"neutral")
B.RG=w([B.hh_,B.hgT,B.tm],x.d)
B.eAc=new C.z(-3.5,4)
B.eHe=new C.z(3.5,4)
B.eCq=new C.z(-3.5,-4)
B.eu4=new C.z(3.5,-4)
B.djn=w([B.eAc,B.eHe,B.eCq,B.eu4],x.f)
B.djs=w(["Ada","Ben","Chidi","Dina","Efe","Farah","Gus","Halima","Ivo","Jamal","Kemi","Lola"],x.s)
B.eSh=new C.z(-2.4,5)
B.eIG=new C.z(2.4,5)
B.eFS=new C.z(-2.4,-5)
B.eEz=new C.z(2.4,-5)
B.djt=w([B.eSh,B.eIG,B.eFS,B.eEz],x.f)
B.djW=w([y.O,"Break off the little brass tab between the two brass screws, so the two halves are separate.",y.R,"Fasten the white neutral to a SILVER screw (the silver tab stays joined).","Fasten the always-hot black wire to the bottom BRASS screw.","Fasten the switched hot (red, from the wall switch) to the top BRASS screw.",y.b,y.n],x.s)
B.eWy=new C.b7(-6,-4,D.c_)
B.eUZ=new C.b7(5,-5,D.bu)
B.eWw=new C.b7(0,1,D.ax)
B.eX4=new C.b7(-5,5,D.br)
B.eU7=new C.b7(6,4,D.c)
B.dkf=w([B.eWy,B.eUZ,B.eWw,B.eX4,B.eU7],x.dV)
B.dkJ=w([W.qL,S.ln],x.f)
B.dkN=w(["split","v240four","v240three","v240only","isolated"],x.s)
B.eeE={feed:0}
B.f4f=new C.dE(B.eeE,1,x.M)
B.bIV=new A.fM(21,"FEED screw (joined tab)",B.f4f,"The one feed wire goes on the side where the brass screws are joined by a tab: it powers both switches.",!1,"hot")
B.ef1={loadA:0,loadB:1}
B.aQy=new C.dE(B.ef1,2,x.M)
B.bJm=new A.fM(22,"Switch 1 screw \u2192 light 1",B.aQy,y.q,!1,"hot")
B.bJq=new A.fM(24,"Switch 2 screw \u2192 light 2",B.aQy,y.q,!1,"hot")
B.dkZ=w([B.wa,B.bIV,B.bJm,B.bJq],x.r)
B.eN2=new C.z("Slab","First the concrete slab (the foundation) is poured and left to cure. Every wall sits on it.")
B.eQ0=new C.z("Framing","The carpenters build the wall frames from 2x4 studs, spaced 16 inches apart, with plates on the top and bottom.")
B.eEi=new C.z("Plumbing rough-in","The plumber runs the hot (red) and cold (blue) water lines and the white drain pipes inside the walls and floor before anything is closed up.")
B.eLc=new C.z("Electrical rough-in","The electrician runs the yellow and white cables from the breaker panel to every box, and fixes the boxes to the studs.")
B.eMi=new C.z("Drywall","Drywall covers the frame. Here it is see-through so you can still look at the pipes and wires behind it.")
B.eEK=new C.z("Fixtures","Last come the outlets, switches, light, sink, toilet and water heater. This is where most repairs happen.")
B.eG2=new C.z("Roof","The roof goes on to keep everything dry. It is see-through here so you can keep looking inside.")
B.dl1=w([B.eN2,B.eQ0,B.eEi,B.eLc,B.eMi,B.eEK,B.eG2],x.L)
B.dAm=new A.i9(-100,100,24,90)
B.dAr=new A.i9(-134,-110,100,190)
B.dAb=new A.i9(110,134,100,190)
B.dl5=w([B.dAm,B.dAr,B.dAb],x.T)
B.eNF=new C.z(-17,-9)
B.euP=new C.z(17,-9)
B.eNE=new C.z(-17,9)
B.euO=new C.z(17,9)
B.dlG=w([B.eNF,B.euP,B.eNE,B.euO],x.f)
B.dlM=w([-100,0,100],x.n)
B.dlN=w([-110,-80,80,110],x.n)
B.a51=w([-14,14],x.n)
B.dlP=w([-150,150],x.n)
B.dlQ=w([-178,178],x.n)
B.dlS=w([-18,18],x.n)
B.aAu=w([-20,0,20],x.n)
B.dlU=w([-21,21],x.n)
B.a53=w([-26,26],x.n)
B.dlV=w([-27,27],x.n)
B.f5a=new A.rP("can","\ud83d\udee2","Gas can","Half a tank of gas",8,0,0.5,0,!1)
B.aQN=new A.rP("tank","\u26fd","Fill the tank","A full tank",12,0,1,0,!1)
B.dlW=w([B.f5a,B.aQN],x.y)
B.dlY=w([-30,-10,10,30],x.n)
B.dlZ=w([-32,32],x.n)
B.dm_=w([-32,-8,34],x.n)
B.aAv=w([-34,34],x.n)
B.dm0=w([-3,3],x.n)
B.dm1=w([-47,47],x.n)
B.dm2=w([-48,48],x.n)
B.dm3=w([-52,52],x.n)
B.aAx=w([-55,55],x.n)
B.dm5=w([-600,0,600],x.n)
B.dm6=w([-600,600],x.n)
B.dm8=w([-70,70],x.n)
B.ow=w([-72,-24,24],x.t)
B.aAy=w([-80,80],x.n)
B.dmb=w([-900,-300,300,900],x.n)
B.dmc=w([-90,0,90],x.n)
B.dmd=w([-90,-52,52,90],x.n)
B.aAB=w([-9,9],x.n)
B.dmp=w(["switch2p","switch3","switch4","switchsmart","switchcombo"],x.s)
B.dmx=w(["medicine","food"],x.s)
B.dmK=w([y.O,y.x,y.R,"The first traveler from the FIRST three-way goes on a top screw (IN).","The second traveler from the FIRST three-way goes on the other top screw (IN).","The first traveler to the SECOND three-way goes on a bottom screw (OUT).","The second traveler to the SECOND three-way goes on the other bottom screw (OUT).",y.b,y.n],x.s)
B.h40=new A.q(8.2,5,-7.85)
B.h9w=new A.q(8.2,1.2,-7.85)
B.hbE=new A.q(8.2,1,-7.4)
B.dnU=w([B.h40,B.h9w,B.hbE],x.o)
B.hgM=new A.jE("common","Black \xb7 COMMON (power in or to the light)",B.tT,D.c,"hot")
B.hgK=new A.jE("trav1","Red \xb7 traveler 1",B.B2,D.c,"hot")
B.hgX=new A.jE("trav2","White taped black \xb7 traveler 2",B.oV,D.av,"hot")
B.dnV=w([B.tm,B.hgM,B.hgK,B.hgX],x.d)
B.a5c=w(["rug","road","roundabout","roadturn","roadtee","roadcross","pond","flowers"],x.s)
B.do7=w(["human","soldier","michelle","xbot","human"],x.s)
B.eNt=new C.z(-1050,"hospital")
B.eO3=new C.z(-630,"store")
B.eNW=new C.z(-420,"tower")
B.euj=new C.z(0,"tower")
B.ewt=new C.z(420,"tower")
B.eyA=new C.z(630,"store")
B.euy=new C.z(1050,"hospital")
B.dob=w([B.eNt,B.aPn,B.eO3,B.eNW,B.aPm,B.euj,B.aPa,B.ewt,B.eyA,B.aPc,B.euy],x.d6)
B.erp=new A.Fe(61,"Hot shut-off valve (left)",B.a8K,"Hot is always on the LEFT. The red hose goes on the left valve.")
B.eev={cold:0}
B.aQJ=new C.dE(B.eev,1,x.M)
B.erq=new A.Fe(62,"Cold shut-off valve (right)",B.aQJ,"Cold is always on the RIGHT. The blue hose goes on the right valve.")
B.ern=new A.Fe(63,"Hot faucet inlet (left)",B.a8K,"The left faucet inlet takes the hot (red) hose.")
B.ero=new A.Fe(64,"Cold faucet inlet (right)",B.aQJ,"The right faucet inlet takes the cold (blue) hose.")
B.a5d=w([B.erp,B.erq,B.ern,B.ero],C.at("O<Fe>"))
B.a5f=w([-72,-48,-24,0,24],x.t)
B.dpk=w(["1 Rough-in","2 Drywall","3 Devices"],x.s)
B.dAF=new A.i9(-90,10,130,160)
B.dAy=new A.i9(-50,50,70,100)
B.dAs=new A.i9(-134,-110,20,70)
B.dpO=w([B.dAF,B.dAy,B.dAs],x.T)
B.RO=w(["road","roadturn","roadtee","roadcross"],x.s)
B.bJ4=new A.fM(21,"Brass screw (top): HOT side",B.JE,y.r,!1,"hot")
B.bJd=new A.fM(22,"Brass screw (bottom): HOT side",B.JE,y.r,!1,"hot")
B.bJ8=new A.fM(23,"Silver screw (top): NEUTRAL side",B.JB,y.Q,!1,"neutral")
B.bIZ=new A.fM(24,"Silver screw (bottom): NEUTRAL side",B.JB,y.Q,!1,"neutral")
B.bJ5=new A.fM(25,"Green screw: GROUND",B.JC,"The green screw is for the bare copper or green GROUND wire.",!1,"ground")
B.dpZ=w([B.bJ4,B.bJd,B.bJ8,B.bIZ,B.bJ5],x.r)
B.dq4=w([y.O,y.x,y.R,"Fasten the black hot to one HOT brass screw.","Fasten the red hot to the other HOT brass screw. There is no neutral and no silver screw in use.",y.b,y.n],x.s)
B.eOa=new C.z(-700,225)
B.eNB=new C.z(-120,160)
B.euI=new C.z(120,160)
B.ez_=new C.z(720,225)
B.dqk=w([B.eOa,B.eNB,B.euI,B.ez_],x.f)
B.eUz=new C.b7("hot","Hot hose (red)",B.tM)
B.eVi=new C.b7("cold","Cold hose (blue)",B.o0)
B.dqm=w([B.eUz,B.eVi],C.at("O<+(m,m,u)>"))
B.ew2=new C.z(34,40)
B.hjw=new A.Az(B.ew2,3.141592653589793,2.6,"Washing hands at the sink",!1,!1,!1,"")
B.dqo=w([B.hjw],x.h)
B.b0H=new A.Hq("NGMY navy",E.jL,E.LV,D.c,F.fz)
B.b0M=new A.Hq("Purple",D.o5,D.dH,D.c,D.bL)
B.b0K=new A.Hq("Green",D.h3,D.bP,D.c,D.m1)
B.b0I=new A.Hq("Sunset",D.ek,D.aE,D.c,D.hY)
B.b0J=new A.Hq("Night",D.N,D.aJ,D.b4,D.c_)
B.b0L=new A.Hq("Light",D.c,D.nV,E.jL,D.dY)
B.a5i=w([B.b0H,B.b0M,B.b0K,B.b0I,B.b0J,B.b0L],C.at("O<Hq>"))
B.aaY=new A.q(15,2.6,0)
B.a5j=w([B.aXu,B.aaY],x.o)
B.dqG=w([B.tm,B.KI,B.ab4,B.ab5],x.d)
B.b69=new C.ac(0,D.G,D.aS,D.I,24)
B.dqH=w([B.b69],x.V)
B.dqV=w(["tail","trap","arm"],x.s)
B.dr2=w([!0,!0,!0,!0],x.u)
B.Ia=w(["tv","lamp","toaster","hairdryer"],x.s)
B.abl=new A.j_("look","Look",D.fl)
B.hk8=new A.j_("wall","Wall box",Q.anI)
B.hk6=new A.j_("ceiling","Ceiling box",D.qm)
B.hkl=new A.j_("fanbox","Fan box",P.GM)
B.hku=new A.j_("drill","Drill",D.yP)
B.hkm=new A.j_("cable","Cable roll",E.anA)
B.di_=w([B.abl,B.hk8,B.hk6,B.hkl,B.hku,B.hkm],x.I)
B.hks=new A.j_("sheet","Drywall sheet",D.Cx)
B.hkc=new A.j_("knife","Drywall saw",D.GV)
B.hka=new A.j_("screw","Screw gun",A3.H4)
B.hkw=new A.j_("tape","Tape",D.uq)
B.hkq=new A.j_("mud","Mud",Ah.a1J)
B.hkB=new A.j_("sand","Sander",D.GT)
B.bOx=new C.a0(985109,"MaterialIcons",!1)
B.hkg=new A.j_("paint","Roller",B.bOx)
B.dej=w([B.abl,B.hks,B.hkc,B.hka,B.hkw,B.hkq,B.hkB,B.hkg],x.I)
B.OR=new C.a0(983223,"MaterialIcons",!1)
B.hkx=new A.j_("outlet","Outlet",B.OR)
B.hke=new A.j_("gfci","GFCI",D.uy)
B.hkv=new A.j_("switch","Switch",E.uA)
B.hk9=new A.j_("split","Split outlet",B.OR)
B.hkz=new A.j_("v240four","240 V 4-wire",V.Cd)
B.hk7=new A.j_("v240three","240 V 3-wire",V.Cd)
B.hkj=new A.j_("v240only","240 V only",V.Cd)
B.hkb=new A.j_("isolated","Isolated ground",B.OR)
B.hkr=new A.j_("switch2p","Double-pole",E.uA)
B.hkt=new A.j_("switch3","3-way switch",E.uA)
B.hkk=new A.j_("switch4","4-way switch",E.uA)
B.hki=new A.j_("switchsmart","Smart switch",E.uA)
B.hk5=new A.j_("switchcombo","Double switch",E.uA)
B.hkp=new A.j_("light","Light",D.rA)
B.bOv=new C.a0(985094,"MaterialIcons",!1)
B.hkh=new A.j_("fan","Fan",B.bOv)
B.hko=new A.j_("tv","TV",Y.a2e)
B.bMN=new C.a0(63571,"MaterialIcons",!1)
B.hkf=new A.j_("lamp","Lamp",B.bMN)
B.bLB=new C.a0(62944,"MaterialIcons",!1)
B.hkd=new A.j_("toaster","Toaster",B.bLB)
B.bMa=new C.a0(63209,"MaterialIcons",!1)
B.hkA=new A.j_("hairdryer","Hair dryer",B.bMa)
B.hky=new A.j_("flip","Flip switch",E.uA)
B.hkn=new A.j_("tester","Voltage tester",D.un)
B.d7v=w([B.abl,B.hkx,B.hke,B.hkv,B.hk9,B.hkz,B.hk7,B.hkj,B.hkb,B.hkr,B.hkt,B.hkk,B.hki,B.hk5,B.hkp,B.hkh,B.hko,B.hkf,B.hkd,B.hkA,B.hky,B.hkn],x.I)
B.dr8=w([B.di_,B.dej,B.d7v],C.at("O<ai<j_>>"))
B.drm=w([B.tm,B.ab4,B.ab5],x.d)
B.brQ=new C.u(1,0.1843137254901961,0.30980392156862746,0.30980392156862746,D.q)
B.bpf=new C.u(1,0.3568627450980392,0.4196078431372549,0.5490196078431373,D.q)
B.drn=w([B.Xx,D.bs,B.brQ,B.bpf,D.bm,D.aJ],x.O)
B.drt=w([D.bD,D.bP,D.cf,D.cd,D.vK,D.cw],x.O)
B.drv=w([-400,400,-900,900,-1400,1400],x.n)
B.drw=w([D.ax,D.bu,D.bf,D.d3],x.O)
B.drH=w([y.O,"Hold the fixture up to the ceiling box. It has three short wires: black, white and green.","Join the house ground wire to the fixture ground.","Join the house white wire to the fixture white wire with a wire nut.","Join the house black wire to the fixture black wire with a wire nut.","Push the wires into the box and fasten the fixture to the ceiling.",y.f],x.s)
B.dAE=new A.i9(-70,70,28,52)
B.dAv=new A.i9(-134,-96,100,170)
B.dAl=new A.i9(96,134,100,170)
B.drP=w([B.dAE,B.dAv,B.dAl],x.T)
B.drQ=w([30,60,120,180,300],x.t)
B.eNI=new C.z(-210,60)
B.evr=new C.z(210,90)
B.eNO=new C.z(-330,120)
B.ew_=new C.z(330,60)
B.eNx=new C.z(-110,330)
B.euE=new C.z(110,330)
B.eO1=new C.z(-560,640)
B.eyg=new C.z(560,640)
B.eNU=new C.z(-420,1100)
B.ewr=new C.z(420,1100)
B.drZ=w([B.eNI,B.evr,B.eNO,B.ew_,B.eNx,B.euE,B.eO1,B.eyg,B.eNU,B.ewr],x.f)
B.c1c=new A.jQ("Breaker off, then test","Before you touch any wire, switch its breaker OFF, then check with a voltage tester that the wire is dead. A switch on the wall is not enough.")
B.c1_=new A.jQ("Lock out, tag out","On a real job you put a lock or a note on the panel so nobody switches the power back on while you work.")
B.c1j=new A.jQ("Water and power","Water carries electricity. Near sinks, tubs and outdoors the outlets must be GFCI, and wet hands never touch wires.")
B.c14=new A.jQ("Eyes, ears, lungs","Safety glasses for drilling and cutting, ear protection for loud tools, and a mask when you sand drywall dust or cut tile.")
B.c1i=new A.jQ("Shut the water off","Before you cut or loosen a pipe, close the main water valve and open a faucet to drain the line.")
B.dkv=w([B.c1c,B.c1_,B.c1j,B.c14,B.c1i],x.Z)
B.c1v=new A.N3("Safety first","\ud83e\uddba",D.c7,B.dkv)
B.c1k=new A.jQ("Wire colours","Black is hot (it carries the power), white is neutral (the way back), bare copper or green is ground (the safety path). Red is a second hot, often used for a switched line.")
B.c1r=new A.jQ("Screw colours","On an outlet the brass screw takes the hot wire, the silver screw takes the neutral and the green screw takes the ground.")
B.c1e=new A.jQ("Wire size","14 gauge wire is for 15 amp circuits (lights and outlets). 12 gauge is for 20 amp circuits (kitchens). A thinner wire than the breaker allows can overheat and start a fire.")
B.c18=new A.jQ("Breakers","A breaker is a safety switch. It trips when a circuit carries too much current, so the wires never get hot enough to burn.")
B.c1m=new A.jQ("Wire nuts","Strip about 3/4 inch, twist the bare ends together clockwise, and screw on the nut until no bare copper shows. Give each wire a gentle tug.")
B.c1s=new A.jQ("Switches","A switch cuts the hot wire only. The neutral goes straight through to the light.")
B.c1t=new A.jQ("GFCI","A GFCI outlet watches the current going out and coming back. If a little leaks (through water or a person) it cuts the power in a fraction of a second.")
B.c11=new A.jQ("Ceiling fans","A fan shakes and is heavy. It needs a box that says fan rated, fixed to the joist, not a plain light box.")
B.c13=new A.jQ("Heights","Outlets sit about 16 inches from the floor. Switches sit about 48 inches up, where your hand falls.")
B.dcG=w([B.c1k,B.c1r,B.c1e,B.c18,B.c1m,B.c1s,B.c1t,B.c11,B.c13],x.Z)
B.c1y=new A.N3("Wiring basics","\u26a1",D.bu,B.dcG)
B.c10=new A.jQ("Hot left, cold right","On a faucet, hot is on the left and cold on the right. Hot lines are marked red and cold lines blue.")
B.c1d=new A.jQ("The P-trap","The curved pipe under a sink always holds a little water. That water seal stops sewer gas coming up the drain.")
B.c1o=new A.jQ("Shut-off valves","Every sink and toilet has its own small valve, so you can stop the water to one fixture without turning off the whole house.")
B.c16=new A.jQ("Slip nuts","Drain joints are sealed by a washer and a slip nut. Tighten by hand and a quarter turn: too much force cracks plastic.")
B.c15=new A.jQ("Wax ring","A toilet sits on a wax ring that seals it to the floor drain. A toilet is lowered straight down once, and cannot be slid around.")
B.c1l=new A.jQ("Drain slope","Drains fall about 1/4 inch per foot so water and waste keep moving. Too flat and it clogs, too steep and the water leaves the solids behind.")
B.c1q=new A.jQ("Order of work","Plumbing goes from the top down on the drain (tailpiece, trap, arm) and from the wall out on the supply (valve, hose, fixture).")
B.cji=w([B.c10,B.c1d,B.c1o,B.c16,B.c15,B.c1l,B.c1q],x.Z)
B.c1w=new A.N3("Plumbing basics","\ud83d\udeb0",D.co,B.cji)
B.c12=new A.jQ("Studs","Studs are the vertical 2x4 posts inside a wall, 16 inches apart from centre to centre. Everything is fixed to them.")
B.c1g=new A.jQ("Drilling studs","Holes for cable go through the middle of the stud, so a nail or screw cannot reach the wire.")
B.c17=new A.jQ("Drywall","A sheet is 4 feet wide, so its edges land on studs 48 inches apart. Screws go into studs only, just under the paper.")
B.c1a=new A.jQ("Taping and mud","Seams get paper tape and three thin coats of joint compound, sanded smooth between coats, then primer and paint.")
B.c1p=new A.jQ("Order of a build","Frame, run the pipes and wires (rough-in), inspect, hang drywall, finish it, paint, then fit the fixtures and devices.")
B.cYb=w([B.c12,B.c1g,B.c17,B.c1a,B.c1p],x.Z)
B.c1u=new A.N3("Framing and walls","\ud83c\udfe0",D.dY,B.cYb)
B.c1b=new A.jQ("Voltage tester","A pen that glows or beeps near live wires. Test it on a known live outlet first, so you know it works.")
B.c1h=new A.jQ("Wire strippers","Strip the plastic off without nicking the copper. A nick weakens the wire.")
B.c1n=new A.jQ("Adjustable wrench","For nuts on valves and hoses. Hold the fitting steady with a second wrench so you do not twist the pipe.")
B.c1f=new A.jQ("Drill and screw gun","A drill makes holes through studs. A screw gun sets drywall screws to the right depth.")
B.c19=new A.jQ("Level and tape measure","Measure twice, cut once. A level makes sure outlets, shelves and pipes are straight.")
B.dt7=w([B.c1b,B.c1h,B.c1n,B.c1f,B.c19],x.Z)
B.c1x=new A.N3("Tools","\ud83e\uddf0",D.bv,B.dt7)
B.dsI=w([B.c1v,B.c1y,B.c1w,B.c1u,B.c1x],C.at("O<N3>"))
B.dsL=w([y.O,"There is no separate ground wire here: the neutral also grounds the frame of the old appliance. This is only allowed in old installations.",y.N,y.E,y.k,y.b,y.n],x.s)
B.bfE=new C.u(1,0.48627450980392156,0.22745098039215686,0.22745098039215686,D.q)
B.bnq=new C.u(1,0.24705882352941178,0.4196078431372549,0.30980392156862746,D.q)
B.blJ=new C.u(1,0.4196078431372549,0.30980392156862746,0.48627450980392156,D.q)
B.biE=new C.u(1,0.47843137254901963,0.41568627450980394,0.23137254901960785,D.q)
B.dsP=w([B.Xx,B.bfE,B.bnq,B.blJ,B.biE],x.O)
B.dt0=w(["Cream","Sky","Blush","Mint","Butter","Periwinkle","White","Slate"],x.s)
B.hgO=new A.jE("in1","Red \xb7 traveler in 1 (from the first 3-way)",B.B2,D.c,"hot")
B.hgU=new A.jE("in2","White taped red \xb7 traveler in 2",B.oV,D.av,"hot")
B.aeq=new C.u(1,0.6901960784313725,0.22745098039215686,0.16862745098039217,D.q)
B.hgL=new A.jE("out1","Red \xb7 traveler out 1 (to the second 3-way)",B.aeq,D.c,"hot")
B.hgZ=new A.jE("out2","White taped red \xb7 traveler out 2",D.bO,D.av,"hot")
B.dt3=w([B.tm,B.hgO,B.hgU,B.hgL,B.hgZ],x.d)
B.eOd=new C.z(-760,330)
B.ez0=new C.z(760,330)
B.eNY=new C.z(-450,1080)
B.exG=new C.z(450,1080)
B.dt6=w([B.eOd,B.ez0,B.eNY,B.exG],x.f)
B.dte=w([0.72,-0.72],x.n)
B.hgW=new A.jE("hot","Black \xb7 hot",B.tT,D.c,"hot")
B.YG=new C.u(1,0.1843137254901961,0.6352941176470588,0.30980392156862746,D.q)
B.hgR=new A.jE("isoground","Green with yellow stripe \xb7 isolated ground",B.YG,D.c,"ground")
B.dtn=w([B.KI,B.hgW,B.hgR],x.d)
B.dtz=w([B.amq,B.amp,B.amn],x.r)
B.eAF=new C.z("outlet","\ud83d\udd0c Outlet")
B.eP1=new C.z("gfci","\ud83d\udee1\ufe0f GFCI outlet")
B.eKz=new C.z("switch","\ud83d\udca1 Light switch")
B.dtA=w([B.eAF,B.eP1,B.eKz],x.L)
B.dtL=w(["inspect","hand","screwdriver","pliers","wrench","crimper","plunger","flapper","newoutlet","patch"],x.s)
B.hsq=new A.pD(0,0,70,26)
B.hsC=new A.pD(1,-100,110,24)
B.hsE=new A.pD(2,105,100,26)
B.dui=w([B.hsq,B.hsC,B.hsE],x.X)
B.hgS=new A.jE("lineA","Black \xb7 hot leg 1 (from the panel)",B.tT,D.c,"hot")
B.hgY=new A.jE("lineB","Red \xb7 hot leg 2 (from the panel)",B.B2,D.c,"hot")
B.hh4=new A.jE("loadA","Black \xb7 hot leg 1 (to the heater)",B.Mi,D.c,"hot")
B.hgQ=new A.jE("loadB","Red \xb7 hot leg 2 (to the heater)",B.aeq,D.c,"hot")
B.duE=w([B.tm,B.hgS,B.hgY,B.hh4,B.hgQ],x.d)
B.duK=w(["Maya","Kofi","Amara","Tunde","Zawadi"],x.s)
B.duM=w(["Look under the sink. The wall has two shut-off valves: hot on the LEFT (red handle) and cold on the RIGHT (blue handle).","Pick the red hot hose. Tap the left shut-off valve, then the left faucet inlet.","Pick the blue cold hose. Tap the right shut-off valve, then the right faucet inlet.","Open the valves slowly and turn on the faucet. Check every connection for drips."],x.s)
B.eeH={flange:0,wax:1,toilet:2,bolts:3,valve:4,hosehot:5,hosecold:6,faucet:7,tail:8,trap:9,arm:10}
B.aGw=new C.bw(B.eeH,["Flange","Wax ring","Toilet","Bolts","Shut-off valve","Hot hose","Cold hose","Faucet","Tailpiece","P-trap","Trap arm"],x.l)
B.dx7=new C.du([25,"ground",23,"lineA",21,"lineB",24,"loadA",22,"loadB"],x.v)
B.dx8=new C.du([25,"ground",23,"in1",21,"in2",24,"out1",22,"out2"],x.v)
B.eeb={xbot:0,michelle:1,soldier:2}
B.Sa=new C.bw(B.eeb,["assets/avatars/Xbot.glb","assets/avatars/Michelle.glb","assets/avatars/Soldier.glb"],x.l)
B.edl={highway:0,tower:1,neon:2,roof:3,screen:4,gate:5}
B.aP8=new C.z(0,!1)
B.ev9=new C.z(1,!1)
B.ewf=new C.z(3,!1)
B.evM=new C.z(2,!0)
B.evb=new C.z(1,!0)
B.ewg=new C.z(3,!0)
B.dxj=new C.bw(B.edl,[B.aP8,B.ev9,B.ewf,B.evM,B.evb,B.ewg],C.at("bw<m,+(G,R)>"))
B.dxo=new C.du([25,"ground",23,"neutral",21,"hot1",22,"hot2"],x.v)
B.dxp=new C.du([25,"ground",23,"common",21,"trav1",22,"trav2"],x.v)
B.dxq=new C.du([25,"ground",23,"neutral",21,"line",22,"load"],x.v)
B.dxr=new C.du([25,"ground",23,"neutral",21,"switched",22,"always"],x.v)
B.dxE=new C.du([25,"ground",21,"hot1",22,"hot2"],x.v)
B.ee7={bed:0,nightstand:1,wardrobe:2,desk:3,rug:4,sofa:5,armchair:6,coffee:7,tvstand:8,dining:9,chair:10,plant:11,lamp:12,console:13,shelf:14,tree:15,pine:16,bush:17,flowers:18,fence:19,lamppost:20,bench:21,car:22,road:23,roundabout:24,roadturn:25,roadtee:26,roadcross:27,house2:28,bighouse:29,pole:30,crate:31,billboard:32,tower:33,hq:34,store:35,gasstation:36,dmv:37,ubstation:38,townsign:39,cornersign:40,adboard:41,shop:42,hospital:43,firestation:44,school:45,firetruck:46,ambulance:47,dog:48,cat:49,cow:50,sheep:51,chicken:52,horse:53,pond:54,swing:55,shed:56,doghouse:57}
B.bI1=new A.fo("Bed","\ud83d\udecf\ufe0f",48,64)
B.bId=new A.fo("Night table","\ud83e\ude91",13,13)
B.bHL=new A.fo("Wardrobe","\ud83d\udeaa",35,16)
B.bHX=new A.fo("Desk","\ud83d\udda5\ufe0f",38,19)
B.bHM=new A.fo("Rug","\ud83d\udfe5",56,40)
B.bHH=new A.fo("Sofa","\ud83d\udecb\ufe0f",64,26)
B.bI5=new A.fo("Armchair","\ud83d\udcba",24,24)
B.bIk=new A.fo("Coffee table","\u2615",32,19)
B.bHJ=new A.fo("Media cabinet","\ud83d\uddc4\ufe0f",45,14)
B.bIi=new A.fo("Dining table","\ud83c\udf7d\ufe0f",45,29)
B.bIc=new A.fo("Chair","\ud83e\ude91",14,14)
B.bIj=new A.fo("Plant","\ud83e\udeb4",14,14)
B.bIe=new A.fo("Floor lamp","\ud83d\udca1",10,10)
B.bI2=new A.fo("Console table","\ud83d\uddc4\ufe0f",35,11)
B.bIb=new A.fo("Bookshelf","\ud83d\udcda",29,10)
B.bIo=new A.fo("Tree","\ud83c\udf33",36,36)
B.bI_=new A.fo("Pine tree","\ud83c\udf32",30,30)
B.bHG=new A.fo("Bush","\ud83c\udf3f",18,18)
B.bI8=new A.fo("Flowers","\ud83c\udf37",22,22)
B.bHz=new A.fo("Fence","\ud83d\udea7",64,6)
B.bHN=new A.fo("Street lamp","\ud83c\udfee",8,8)
B.bI4=new A.fo("Bench","\ud83e\ude91",44,16)
B.bHA=new A.fo("Car","\ud83d\ude97",84,40)
B.bHW=new A.fo("Road","\ud83d\udee3\ufe0f",40,40)
B.bIp=new A.fo("Roundabout","\ud83d\udd04",80,80)
B.bHF=new A.fo("Road corner","\u21aa\ufe0f",40,40)
B.bIr=new A.fo("Road T-junction","\u22a4",40,40)
B.bHY=new A.fo("Crossroads","\u271a",40,40)
B.bHI=new A.fo("House","\ud83c\udfe0",108,90)
B.bI0=new A.fo("Big house","\ud83c\udfe2",158,120)
B.bHB=new A.fo("Electric pole","\ud83d\udd0c",10,10)
B.bHV=new A.fo("Crate","\ud83d\udce6",28,28)
B.bIn=new A.fo("Billboard","\ud83e\udea7",72,10)
B.bHE=new A.fo("Office tower","\ud83c\udfe2",100,70)
B.bHQ=new A.fo("NGMY company","\ud83c\udfdb\ufe0f",170,90)
B.bHP=new A.fo("NGMY store","\ud83c\udfec",130,80)
B.bIq=new A.fo("NGMY gas station","\u26fd",150,90)
B.bIa=new A.fo("NGMY licence office","\ud83e\udeaa",130,80)
B.bHS=new A.fo("NGMY Uber","\ud83d\ude96",120,60)
B.bHC=new A.fo("NGMY Town sign","\ud83e\udea7",380,14)
B.bI6=new A.fo("NGMY Town billboard","\ud83e\udea7",150,10)
B.bHU=new A.fo("NGMY ad billboard","\ud83d\udcfa",330,14)
B.bHZ=new A.fo("Shop","\ud83c\udfea",126,90)
B.bHR=new A.fo("Hospital","\ud83c\udfe5",165,105)
B.bHy=new A.fo("Fire station","\ud83d\ude92",135,96)
B.bI9=new A.fo("School","\ud83c\udfeb",186,105)
B.bIh=new A.fo("Fire truck","\ud83d\ude92",96,40)
B.bI3=new A.fo("Ambulance","\ud83d\ude91",84,40)
B.bHO=new A.fo("Dog","\ud83d\udc15",22,10)
B.bHT=new A.fo("Cat","\ud83d\udc08",16,8)
B.bIf=new A.fo("Cow","\ud83d\udc04",38,16)
B.bHK=new A.fo("Sheep","\ud83d\udc11",26,14)
B.bIg=new A.fo("Chicken","\ud83d\udc14",12,8)
B.bHD=new A.fo("Horse","\ud83d\udc0e",46,16)
B.bIl=new A.fo("Pond","\ud83d\udca7",80,56)
B.bI7=new A.fo("Swing set","\ud83c\udfa0",56,40)
B.bIm=new A.fo("Shed","\ud83d\uded6",50,42)
B.bIs=new A.fo("Dog house","\ud83d\udc15",24,22)
B.hC=new C.bw(B.ee7,[B.bI1,B.bId,B.bHL,B.bHX,B.bHM,B.bHH,B.bI5,B.bIk,B.bHJ,B.bIi,B.bIc,B.bIj,B.bIe,B.bI2,B.bIb,B.bIo,B.bI_,B.bHG,B.bI8,B.bHz,B.bHN,B.bI4,B.bHA,B.bHW,B.bIp,B.bHF,B.bIr,B.bHY,B.bHI,B.bI0,B.bHB,B.bHV,B.bIn,B.bHE,B.bHQ,B.bHP,B.bIq,B.bIa,B.bHS,B.bHC,B.bI6,B.bHU,B.bHZ,B.bHR,B.bHy,B.bI9,B.bIh,B.bI3,B.bHO,B.bHT,B.bIf,B.bHK,B.bIg,B.bHD,B.bIl,B.bI7,B.bIm,B.bIs],C.at("bw<m,fo>"))
B.dyv=new C.du([25,"isoground",23,"neutral",21,"hot"],x.v)
B.edt={outlet:0,switch:1,light:2,fan:3,gfci:4}
B.d7W=w(["Silver","Brass","Green"],x.s)
B.feS=new A.vg("On a standard receptacle, which terminal does the hot wire go on?",B.d7W,1,"Brass is the hot side. Silver is neutral and green is the ground.")
B.cJu=w(["Yes, it works","No: reversed polarity leaves live parts that should be dead","Yes if there is a ground"],x.s)
B.feQ=new A.vg("The outlet works with hot and neutral swapped. Is it safe?",B.cJu,1,"Working is not the same as safe. Reversed polarity energizes the wrong parts.")
B.d1x=w(["Yes","No, never","Only in old houses"],x.s)
B.feM=new A.vg("May the neutral be used as the equipment ground?",B.d1x,1,"The ground is a separate safety path. The neutral carries current in normal use.")
B.ddg=w([B.feS,B.feQ,B.feM],x.W)
B.c5Y=w(["The hot to the light","The neutral","The ground"],x.s)
B.feT=new A.vg("A single-pole switch opens and closes which conductor?",B.c5Y,0,"The switch breaks the hot conductor to the load.")
B.d_8=w(["Yes","No, never","If the wire is thick"],x.s)
B.feU=new A.vg("May the ground wire be used to carry current to the light?",B.d_8,1,"The equipment ground is only for safety.")
B.d6R=w(["Yes","No: never assume it does","Only new houses"],x.s)
B.feN=new A.vg("Does every switch box have a neutral?",B.d6R,1,"Many switch boxes have no neutral. Smart switches need to be chosen for that.")
B.dsM=w([B.feT,B.feU,B.feN],x.W)
B.dki=w(["Yes","No: the wires, the ground and the support must be right","Only with a switch"],x.s)
B.feR=new A.vg("Does a light that turns on prove the fixture is wired safely?",B.dki,1,"A fixture can light up with an unsafe connection.")
B.djl=w(["Its wires","A box or mount rated for its weight","Tape"],x.s)
B.feV=new A.vg("A fixture must hang from:",B.djl,1,"The box carries the weight. The wires never do.")
B.d7g=w([B.feR,B.feV],x.W)
B.d8l=w(["Any ceiling box","Rated for a fan","Plastic only"],x.s)
B.feP=new A.vg("A ceiling fan needs a box that is:",B.d8l,1,"A fan shakes and is heavy. A plain light box can let it fall.")
B.dnl=w(["Yes","No: support, ground and wiring must all be right","Yes if it is quiet"],x.s)
B.feO=new A.vg("The fan spins. Is the installation safe?",B.dnl,1,"A spinning fan says nothing about the box, the ground or the connections.")
B.d7A=w([B.feP,B.feO],x.W)
B.d3d=w(["LINE","LOAD","Either"],x.s)
B.feL=new A.vg("On a GFCI, power from the breaker goes on:",B.d3d,0,"LINE is the supply. LOAD feeds outlets further down the line.")
B.cOc=w([B.feL],x.W)
B.aGK=new C.bw(B.edt,[B.ddg,B.dsM,B.d7g,B.d7A,B.cOc],C.at("bw<m,ai<vg>>"))
B.ee6={house2:0,bighouse:1,shop:2,billboard:3,crate:4,car:5,tree:6,bench:7,tower:8,hq:9,store:10,gasstation:11,cornersign:12}
B.dyy=new C.bw(B.ee6,[40,80,70,15,4,25,5,4,120,200,90,90,30],C.at("bw<m,G>"))
B.bGM=new A.uD("The living room has no power at all.","The living room breaker is sitting in the middle (orange). It has tripped. Flip it fully OFF and ON again, by hand.","hand","Breaker reset. The living room has power again.",72,0,"")
B.bGW=new A.uD("There is no hot water.","The water heater breaker has tripped (orange). Reset it by hand.","hand","Breaker reset. The water heater is heating again.",75,0,"")
B.bGT=new A.uD("Water is dripping under the kitchen sink.","The slip nut on the P-trap is loose and the joint drips. Tighten it with the wrench.","wrench","Slip nut tightened. The drip stopped.",87,0,"")
B.bGL=new A.uD("There is a wet spot on the wall behind the kitchen.","A crimped joint in the hot water line is leaking. A crimp joint is squeezed with a crimping tool, not tightened with a wrench.","crimper","The joint is crimped again and it does not leak.",96,0,"")
B.bGQ=new A.uD("The outlet by the sofa does not work, but the lights do.","The tester finds power at the box but the outlet is dead: a screw on the outlet has come loose. Turn the breaker off first, then tighten the screws with the screwdriver.","screwdriver","You tightened the loose screw. The outlet works again.",81,72,"Turn the living room breaker OFF first.")
B.bGN=new A.uD("The living room light flickers.","A wire nut in the light box has worked loose. Turn the breaker off, then twist the wire nut tight with the pliers.","pliers","You twisted the wire nut tight. The light is steady.",83,72,"Turn the living room breaker OFF first.")
B.bGO=new A.uD("The kitchen outlet sparks and smells burnt.","The outlet has burnt. Turn the breaker off and replace it with a new outlet.","newoutlet","New outlet fitted. No more sparks.",84,73,"Turn the kitchen breaker OFF first.")
B.bGU=new A.uD("The kitchen outlets are dead.","The GFCI outlet has tripped. Press its RESET button by hand.","hand","You pressed RESET. The kitchen outlets work.",84,0,"")
B.bGP=new A.uD("The toilet keeps running.","The rubber flapper in the tank no longer seals, so water leaks into the bowl all the time. Replace the flapper.","flapper","New flapper fitted. The toilet stops running.",88,0,"")
B.bGS=new A.uD("The kitchen faucet drips.","The faucet washer is worn. Tighten the packing nut with the wrench, then check.","wrench","The faucet is sealed. No more drips.",85,0,"")
B.bGR=new A.uD("There is a hole in the wall.","A hole in the drywall. Stick a drywall patch over it, then tape, mud, sand and paint it.","patch","Patch fitted. Now it only needs mud, sanding and paint.",95,0,"")
B.bGV=new A.uD("The kitchen sink drains very slowly.","The drain is clogged. Use the plunger.","plunger","The clog is gone. The sink drains fast.",94,0,"")
B.wG=new C.du([B.a0w,B.bGM,B.a0x,B.bGW,B.NW,B.bGT,B.NX,B.bGL,B.am8,B.bGQ,B.a0A,B.bGN,B.a0B,B.bGO,B.a0C,B.bGU,B.a0D,B.bGP,B.a0E,B.bGS,B.a0y,B.bGR,B.a0z,B.bGV],C.at("du<rl,uD>"))
B.efC={duo:0,line3:1,far3:2,skyline:3,lines6:4}
B.eEf=new C.z(D.a32,0)
B.eRL=new C.z(A4.arF,1)
B.cqu=w([2,0,1],x.t)
B.ez2=new C.z(B.cqu,2)
B.c61=w([0,1,2,3],x.t)
B.eQK=new C.z(B.c61,0)
B.dln=w([0,1,2,5,4,3],x.t)
B.eHm=new C.z(B.dln,1)
B.dyO=new C.bw(B.efC,[B.eEf,B.eRL,B.ez2,B.eQK,B.eHm],C.at("bw<m,+(ai<G>,G)>"))
B.ef6={michelle:0}
B.dyP=new C.bw(B.ef6,[0.55],x.e)
B.Sf=new C.bw(D.hT,[],C.at("bw<G,cX>"))
B.It=new C.bw(D.hT,[],C.at("bw<G,m>"))
B.dz4=new C.du([23,"neutral",21,"hot1",22,"hot2"],x.v)
B.dz6=new C.du([25,"ground",21,"feed",22,"loadA",24,"loadB"],x.v)
B.eeF={tail:0,trap:1,arm:2}
B.dz8=new C.bw(B.eeF,["Tailpiece","P-trap","Trap arm"],x.l)
B.aJq={xbot:0,michelle:1,soldier:2,human:3}
B.aGY=new C.bw(B.aJq,["\ud83e\udd16 X Bot","\ud83d\udc83 Dancer","\ud83e\ude96 Soldier","\ud83d\ude42 Person"],x.l)
B.aeY=new C.u(1,0.9137254901960784,0.9215686274509803,0.9372549019607843,D.q)
B.bl2=new C.u(1,0.8549019607843137,0.8666666666666667,0.8901960784313725,D.q)
B.Tk=new A.tN(B.aeY,E.aer,B.aeY,B.bl2,"xbot",!1,0,1)
B.bn1=new C.u(1,0.0784313725490196,0.047058823529411764,0.03137254901960784,D.q)
B.bde=new C.u(1,0.9607843137254902,0.7725490196078432,0.09411764705882353,D.q)
B.eq5=new A.tN(B.aip,B.bn1,D.dv,B.bde,"michelle",!0,2,1)
B.brW=new C.u(1,0.8509803921568627,0.6470588235294118,0.48627450980392156,D.q)
B.bqQ=new C.u(1,0.3568627450980392,0.4196078431372549,0.22745098039215686,D.q)
B.bfF=new C.u(1,0.5411764705882353,0.4823529411764706,0.3333333333333333,D.q)
B.Jh=new A.tN(B.brW,D.Ml,B.bqQ,B.bfF,"soldier",!1,0,1.04)
B.a7J=new A.tN(B.aev,B.Mb,B.aiy,B.LE,"human",!1,0,1)
B.aGZ=new C.bw(B.aJq,[B.Tk,B.eq5,B.Jh,B.a7J],C.at("bw<m,tN>"))
B.efn={soldier:0}
B.dzr=new C.bw(B.efn,[3.141592653589793],x.e)
B.hb9=new A.q(0,0,-1.2)
B.ecm=new A.cX("Electrical box","The box is ready. Pull a cable to it, then wire a device.",B.hb9,9)
B.dzu=new C.du([3,B.ecm],C.at("du<G,cX>"))
B.aJj={inspect:0,hand:1,screwdriver:2,pliers:3,wrench:4,crimper:5,plunger:6,flapper:7,newoutlet:8,patch:9}
B.Sh=new C.bw(B.aJj,["Look and test","Hand","Screwdriver","Pliers","Wrench","Crimp tool","Plunger","New flapper","New outlet","Drywall patch"],x.l)
B.bLU=new C.a0(63072,"MaterialIcons",!1)
B.dzy=new C.bw(B.aJj,[D.fl,B.aoY,A3.H4,D.GV,D.pd,B.bLU,Ac.a2f,D.pk,B.OR,A0.wg],C.at("bw<m,a0>"))
B.dAd=new A.i9(18,50,0,20)
B.dAq=new A.i9(-126,126,-66,5)
B.dAx=new A.i9(-4,16,0,24)
B.dD2=new A.aoJ(null)
B.aHZ=new A.a79(null)
B.dJO=new A.aq5(null)
B.dN6=new A.IW(!1,"city","",null)
B.aI8=new A.IW(!1,"","",null)
B.e7P=new A.Oj(!0,null,!0,!1,null)
B.hem=new A.q(16,2.6,0)
B.ec5=new A.cX("Wall drain","The pipe stub that comes out of the wall. The trap arm slides into it.",B.hem,8)
B.fZy=new A.q(0,3,-6)
B.ec6=new A.cX("Wall","The copper supply pipes come out of the wall here.",B.fZy,24)
B.hau=new A.q(8.2,1,-7)
B.ec7=new A.cX("Toilet","The tank fills from the cold supply on the wall. The bowl drains into the white pipe in the floor.",B.hau,7)
B.fYc=new A.q(0,0,40)
B.ec8=new A.cX("The room","A room to build from bare studs to finished, working electrics. The walls hold the cable, the boxes and the devices.",B.fYc,190)
B.h7m=new A.q(-2.4,11.5,-3.6)
B.ec9=new A.cX("Hot faucet inlet","The threaded tail under the faucet where the hot supply hose screws on.",B.h7m,7)
B.h1H=new A.q(-3.6,4,-7.8)
B.eca=new A.cX("Light switch","Controls the ceiling light. Tap Open lesson to wire one.",B.h1H,4.5)
B.h91=new A.q(0,0.5,2)
B.ecb=new A.cX("Voltage tester","A tester that glows when it touches live power.",B.h91,6)
B.ecc=new A.cX("Pipe joint","A crimped joint in the hot water line.",B.aWQ,4)
B.h7M=new A.q(0,-0.2,0.2)
B.ecd=new A.cX("Cover plate","The plate covers the box and the edges of the drywall so nobody touches the wires.",B.h7M,8)
B.hdh=new A.q(-4.6,0.5,-3.4)
B.ece=new A.cX("Hot shut-off valve","The angle stop valve on the hot pipe. Turn the handle to stop the water to the faucet without shutting off the whole house. Hot is always on the left.",B.hdh,8)
B.Vz=new A.q(0,-0.3,3.2)
B.ecf=new A.cX("White wire nut: NEUTRAL","Twist the house white wire and the fixture white wire together under this cap.",B.Vz,6)
B.h8N=new A.q(4.6,0.5,-3.4)
B.ecg=new A.cX("Cold shut-off valve","The angle stop valve on the cold pipe. Cold is always on the right.",B.h8N,8)
B.h0Q=new A.q(2.4,11.5,-3.6)
B.ech=new A.cX("Cold faucet inlet","The threaded tail under the faucet where the cold supply hose screws on.",B.h0Q,7)
B.hfq=new A.q(0.8,-0.8,1.2)
B.eci=new A.cX("Black wire to the light","This black wire carries power to the light once the switch is on. It goes on the other brass screw.",B.hfq,7)
B.h7i=new A.q(10.05,5.2,-7.5)
B.ecj=new A.cX("Water heater breaker","A big circuit for the water heater. It is ON.",B.h7i,3.5)
B.aVO=new A.q(0,40,0)
B.eck=new A.cX("Back wall",y.o,B.aVO,140)
B.han=new A.q(3,3.8,-7.4)
B.ecl=new A.cX("Kitchen faucet","Hot on the left, cold on the right. Tap Open lesson to connect the supply hoses.",B.han,4.5)
B.As=new A.q(0,6,0)
B.ecn=new A.cX("Tailpiece","The straight pipe that hangs from the sink drain. Its bottom end is smooth so the slip nut can slide on and grip it.",B.As,10)
B.hcO=new A.q(-60,40,50)
B.eco=new A.cX("Left wall",y.o,B.hcO,140)
B.h2o=new A.q(3,1,0)
B.ecp=new A.cX("P-trap","The U-shaped bend. It always keeps a little water inside, and that water plug blocks sewer gas from coming back up into the house.",B.h2o,11)
B.fYW=new A.q(0,20,5)
B.ecq=new A.cX("The room","A bare room with the water supply stubs and the drain stub already in the wall and floor.",B.fYW,120)
B.h_e=new A.q(0,-8,0)
B.ecr=new A.cX("Cabinet","The cabinet under the sink where the drain is built.",B.h_e,22)
B.fYa=new A.q(0,0,150)
B.ecs=new A.cX("Lawn","The grass. Walls, floors and the sky stay as they are, but you can add things to the garden with the Furniture button.",B.fYa,400)
B.fZQ=new A.q(0,4,-8)
B.ect=new A.cX("Wall framing","2x4 studs 16 inches apart. Pipes and cables run through holes drilled in the middle of the studs, never along the edge where a nail could hit them.",B.fZQ,18)
B.aX5=new A.q(0,-0.2,5.1)
B.ecu=new A.cX("TEST and RESET buttons","Press TEST to make the GFCI trip. Press RESET to turn it back on. Test it once a month.",B.aX5,5)
B.aVJ=new A.q(0,11,0)
B.ecv=new A.cX("Sink","The sink bowl and the counter. The drain flange at the bottom is where the tailpiece starts.",B.aVJ,16)
B.dX=new A.q(0,0,0)
B.ecw=new A.cX("Drywall","The wall surface. A hole is cut in it for the electrical box.",B.dX,22)
B.h3I=new A.q(60,40,50)
B.ecx=new A.cX("Right wall",y.o,B.h3I,140)
B.fYE=new A.q(0,14,-3)
B.ecy=new A.cX("Counter and sink","The faucet is mounted through a hole in the counter.",B.fYE,20)
B.h5X=new A.q(0,-1.9,5)
B.ecz=new A.cX("GREEN screw: GROUND",y.Z,B.h5X,5)
B.fZN=new A.q(0,47,-2)
B.ecA=new A.cX("Top and bottom plate","The horizontal 2x4s at the top and the bottom of the wall. The studs stand between them.",B.fZN,70)
B.fYg=new A.q(0,0,-8)
B.ecB=new A.cX("Wall","Behind the wall the drain pipe goes down to the sewer line.",B.fYg,22)
B.fYQ=new A.q(0,19,-3)
B.ecC=new A.cX("Faucet","The faucet with hot on the left (red) and cold on the right (blue).",B.fYQ,14)
B.h4i=new A.q(3.5,2,-7.2)
B.ecD=new A.cX("Kitchen counter and cabinet","The cabinet under the sink is where the drain and the shut-off valves live.",B.h4i,9)
B.h6p=new A.q(10.05,5.7,-7.5)
B.ecE=new A.cX("Kitchen breaker","Protects the kitchen outlets. It is ON.",B.h6p,3.5)
B.h7v=new A.q(4,6,-2.5)
B.ecF=new A.cX("Cold supply hose","A braided steel hose with a rubber liner and a blue band.",B.h7v,9)
B.h8X=new A.q(-1,0.6,4.3)
B.ecG=new A.cX("SILVER screw: NEUTRAL side",y.B,B.h8X,5)
B.aaT=new A.q(0,3.7,0)
B.ecH=new A.cX("Slip nut","A big plastic nut. Slide it on the pipe first, then the washer, then join the pieces and hand tighten. A rubber washer inside makes the seal.",B.aaT,7)
B.Vy=new A.q(0,-1,-0.6)
B.ecI=new A.cX("Wire nut","A twist-on cap that joins wires safely. The two white wires are joined here because a switch only cuts the hot wire.",B.Vy,5)
B.h7D=new A.q(-1.5,-0.3,3.2)
B.ecJ=new A.cX("Black wire nut: HOT","Twist the house black wire and the fixture black wire together under this cap.",B.h7D,6)
B.h6o=new A.q(-1.9,0,-2)
B.ecK=new A.cX("Wood stud","The 2x4 frame inside the wall. The electrical box is nailed or screwed to a stud so it cannot move.",B.h6o,16)
B.hb7=new A.q(-1,-0.8,4.3)
B.ecL=new A.cX("SILVER screw: NEUTRAL side",y.B,B.hb7,5)
B.heL=new A.q(6,3,-7.8)
B.ecM=new A.cX("Water and drain pipes","Red is hot water, blue is cold water (PEX tubing). The white pipes are drains. They slope down so the waste flows away.",B.heL,14)
B.hbc=new A.q(1,0.6,4.3)
B.ecN=new A.cX("BRASS screw: HOT side",y.C,B.hbc,5)
B.hbG=new A.q(0,-0.2,4.9)
B.ecO=new A.cX("Mounting strap (yoke)","The metal strap with two screw slots. Long screws through the ears hold the device in the box.",B.hbG,7)
B.hfn=new A.q(9.55,4.7,-7.5)
B.ecP=new A.cX("Spare breaker","A spare circuit.",B.hfn,3.5)
B.fYX=new A.q(0,20,8)
B.ecQ=new A.cX("Vanity and counter","The cabinet that holds the sink. The pipes live inside it.",B.fYX,70)
B.hdY=new A.q(-3.2,1.3,-7.8)
B.ecR=new A.cX("Living room outlet","A standard outlet. Tap Open lesson to wire one in 3D.",B.hdY,4.5)
B.hbJ=new A.q(1.5,-0.3,3.2)
B.ecS=new A.cX("Green ground connection","Join the bare copper house ground wire to the green fixture ground wire.",B.hbJ,6)
B.h65=new A.q(12,2.6,0)
B.ecT=new A.cX("Trap arm","The pipe that carries the waste water from the trap into the wall. It must slope down toward the wall, about 1/4 inch per foot.",B.h65,9)
B.h8u=new A.q(0,6.5,-7.8)
B.ecU=new A.cX("Electrical cables","Cables run from the breaker panel to every outlet, switch and light. Yellow is 12 gauge for 20 amps. White is 14 gauge for 15 amps.",B.h8u,16)
B.h9g=new A.q(11.2,2.3,-6)
B.ecV=new A.cX("Water heater","Heats the water. The cold line goes in at the top and the hot line comes out at the top.",B.h9g,9)
B.h9Y=new A.q(9.55,5.2,-7.5)
B.ecW=new A.cX("Bathroom breaker","Protects the bathroom. It is ON.",B.h9Y,3.5)
B.h6w=new A.q(5.2,3.9,-7.8)
B.ecX=new A.cX("Kitchen GFCI outlet","Outlets near water must be GFCI. Tap Open lesson to wire one.",B.h6w,4.5)
B.fZI=new A.q(0,40,-3)
B.ecY=new A.cX("Electrical cable","Yellow 12/2 cable with ground: it carries power from the breaker panel through the holes in the studs to each box.",B.fZI,80)
B.h7f=new A.q(-8.4,1.2,-6.4)
B.ecZ=new A.cX("Sofa","Just furniture, to show the size of the room.",B.h7f,10)
B.ed_=new A.cX("Outlet face","Two outlets. The short slot is hot, the long slot is neutral, and the round hole is ground.",B.aX5,6)
B.h5F=new A.q(0,4,-7.8)
B.ed0=new A.cX("Wall","The drywall of the back wall.",B.h5F,16)
B.he2=new A.q(0,0,0.6)
B.ed1=new A.cX("Canopy","The round cover that hides the box and the wire connections against the ceiling.",B.he2,8)
B.ed2=new A.cX("Concrete slab","The foundation. It carries the whole weight of the house. Plumbing drains are placed before it is poured.",B.dX,30)
B.fZB=new A.q(0,40,12)
B.ed3=new A.cX("Front door","Tap the door to go inside the house.",B.fZB,260)
B.aaV=new A.q(8.9,2.6,0)
B.ed4=new A.cX("Slip nut","Hand tighten it, then about a quarter turn with pliers. Over-tightening cracks the plastic.",B.aaV,7)
B.h9W=new A.q(1,-0.8,4.3)
B.ed5=new A.cX("BRASS screw: HOT side",y.C,B.h9W,5)
B.h5n=new A.q(0.6,1.5,-1.8)
B.ed6=new A.cX("Cable to the light (LOAD)","This cable carries the switched power on to the light. The black wire here only has power when the switch is on.",B.h5n,8)
B.h5S=new A.q(9.8,5,-7.5)
B.ed7=new A.cX("Breaker panel","The main electrical panel. Each breaker protects one circuit. A breaker that is in the middle position has TRIPPED. Flip it fully OFF and then ON to reset.",B.h5S,6)
B.h7A=new A.q(-4,6,-2.5)
B.ed8=new A.cX("Hot supply hose","A braided steel hose with a rubber liner and a red band. Hand tighten the nuts, then a quarter turn with a wrench.",B.h7A,9)
B.ehS=new C.t(66,66)
B.bSO=new C.ae(D.ed,20,F.fz,null,null,null)
B.elr=new C.D(D.w4,B.bSO,null)
B.fvu=new C.F(!0,D.mA,null,null,null,null,12.5,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fC8=new C.y("A circuit that is not CORRECT and safe can never pass, even if the light or fan would have worked.",null,B.fvu,null,null,null,null,null,null,null,null,null)
B.elD=new C.D(D.i3,B.fC8,null)
B.fMa=new C.y("Sick people can stay in a hospital bed. Treat each patient before their care runs out, and they go home better.",null,D.V1,null,D.K,null,null,null,null,null,null,null)
B.elJ=new C.D(D.alt,B.fMa,null)
B.bRZ=new C.ae(D.ed,18,D.be,null,null,null)
B.em_=new C.D(D.fB,B.bRZ,null)
B.em1=new C.D(D.fB,G.aqx,null)
B.epZ=new A.y3(0,0,18,0,!1,!1,!1,!1,!1,0,!1,!1,"","",-1,0,-1,0)
B.eq_=new A.y3(0,100,120,-2.2,!1,!1,!1,!1,!1,0,!1,!1,"","",-1,0,-1,0)
B.eq0=new A.y3(0,40,150,0.5,!1,!1,!1,!1,!1,0,!1,!1,"","",-1,0,-1,0)
B.eq1=new A.y3(0,0,0,0,!1,!1,!1,!1,!1,0,!1,!1,"","",-1,0,-1,0)
B.eq2=new A.y3(0,-80,50,0,!1,!1,!1,!1,!1,0,!1,!1,"","",-1,0,-1,0)
B.eq3=new A.y3(0,0,56,0,!1,!1,!1,!1,!1,0,!1,!1,"","",-1,0,-1,0)
B.esA=new A.a9G(null,null)
B.bj7=new C.u(1,0.30980392156862746,0.7019607843137254,0.9647058823529412,D.q)
B.brv=new C.u(1,0.11372549019607843,0.37254901960784315,0.7686274509803922,D.q)
B.bod=new C.u(1,0.043137254901960784,0.16470588235294117,0.4196078431372549,D.q)
B.d1t=w([B.bj7,B.brv,B.bod],x.O)
B.etj=new C.c2(A9.xp,0.5,D.x,null,0,B.d1t,null,null)
B.brM=new C.u(1,0.8392156862745098,0.9019607843137255,0.9176470588235294,D.q)
B.eu1=new C.z(B.brM,B.Y6)
B.eua=new C.z(0,120)
B.eub=new C.z(0,300)
B.eur=new C.z(B.oV,B.dX)
B.ew4=new C.z(64,2.4)
B.exK=new C.z("LOAD (taped)",D.d1)
B.bfD=new C.u(1,0.9450980392156862,0.8901960784313725,0.7764705882352941,D.q)
B.biO=new C.u(1,0.8470588235294118,0.7686274509803922,0.6274509803921569,D.q)
B.ez6=new C.z(B.bfD,B.biO)
B.djo=w([D.ax,D.cd,D.ax],x.O)
B.ezv=new C.z(-40,B.djo)
B.eAX=new C.z(63,-2.4)
B.bhN=new C.u(1,0.8901960784313725,0.9254901960784314,0.9607843137254902,D.q)
B.bcB=new C.u(1,0.7372549019607844,0.7843137254901961,0.8392156862745098,D.q)
B.eBu=new C.z(B.bhN,B.bcB)
B.eBL=new C.z(51,B.aeW)
B.bdP=new C.u(1,0.9137254901960784,0.8705882352941177,0.7607843137254902,D.q)
B.eEt=new C.z(B.bdP,B.Bv)
B.bec=new C.u(1,0.9137254901960784,0.9372549019607843,0.9490196078431372,D.q)
B.beN=new C.u(1,0.8509803921568627,0.8941176470588236,0.9098039215686274,D.q)
B.eFi=new C.z(B.bec,B.beN)
B.bns=new C.u(1,0.9058823529411765,0.8235294117647058,0.8156862745098039,D.q)
B.beO=new C.u(1,0.7058823529411765,0.7176470588235294,0.7411764705882353,D.q)
B.eGh=new C.z(B.bns,B.beO)
B.bbZ=new C.u(1,0.7647058823529411,0.8117647058823529,0.9019607843137255,D.q)
B.eH7=new C.z(B.bbZ,B.aiq)
B.blX=new C.u(1,0.3568627450980392,0.39215686274509803,0.4392156862745098,D.q)
B.eIV=new C.z("SILVER \xb7 NEUTRAL",B.blX)
B.hed=new A.q(-1.5,0,0)
B.eJ3=new C.z(B.M_,B.hed)
B.eKD=new C.z(52,B.B2)
B.bip=new C.u(1,0.12156862745098039,0.47843137254901963,0.22745098039215686,D.q)
B.eLw=new C.z("GREEN \xb7 GROUND",B.bip)
B.bqC=new C.u(1,0.9450980392156862,0.9098039215686274,0.8235294117647058,D.q)
B.eMd=new C.z(B.bqC,B.Bv)
B.eMu=new C.z("main","Main water valve")
B.cNZ=w([D.vK,D.bu,D.bf],x.O)
B.eON=new C.z(40,B.cNZ)
B.hfr=new A.q(1.5,0,0)
B.eQC=new C.z(B.YG,B.hfr)
B.bet=new C.u(1,0.9529411764705882,0.9411764705882353,0.9098039215686274,D.q)
B.blt=new C.u(1,0.4823529411764706,0.5294117647058824,0.5803921568627451,D.q)
B.eRj=new C.z(B.bet,B.blt)
B.eSi=new C.z(B.i0,B.Xy)
B.bhs=new C.u(1,0.9529411764705882,0.9019607843137255,0.7843137254901961,D.q)
B.bok=new C.u(1,0.788235294117647,0.7098039215686275,0.5490196078431373,D.q)
B.eSB=new C.z(B.bhs,B.bok)
B.be3=new C.u(1,0.6039215686274509,0.4196078431372549,0.047058823529411764,D.q)
B.eT5=new C.z("BRASS \xb7 HOT",B.be3)
B.eTx=new C.z(53,B.YG)
B.a8b=new C.b7(180,40,215)
B.a8c=new C.b7(215,40,345)
B.a8d=new C.b7(60,60,90)
B.eUm=new C.b7(61,-4.6,B.tM)
B.a8e=new C.b7(95,40,185)
B.eVm=new C.b7("Turn the main water ON to test for leaks: pick Hand and tap the main valve.","hand","main")
B.eWo=new C.b7(62,4.6,B.o0)
B.eWz=new C.b7("The water must be OFF before you cut into the pipes: pick Hand and tap the main valve.","hand","main")
B.eX3=new C.b7("Fit the parts in the order of the job list.","",null)
B.eXu=new C.b7("Looks good. Watch for leaks; if none, the job is done.","",null)
B.eYn=new C.cy([0,17.1,16.4,5.8])
B.eYq=new C.cy([0,-0.1,16.4,4.2])
B.eZt=new C.cy([15.6,9,14.8,22])
B.eZx=new C.cy([-15.6,9,14.8,22])
B.eZG=new C.ec([72,60,44,B.Mc,B.Mf])
B.brr=new C.u(1,0.8941176470588236,0.6901960784313725,0.47843137254901963,D.q)
B.eZX=new C.ec([124,70,44,B.brr,B.q7])
B.f_3=new C.ec([90,64,46,B.agA,D.hi])
B.f_m=new C.ec([110,70,62,D.bN,D.al])
B.f_r=new C.ec([84,60,40,B.agD,B.Mf])
B.fAL=new C.y("\u260e",null,D.pD,null,null,null,null,null,null,null,null,null)
B.baL=new C.qx(B.fAL,D.ax,null,24,null)
B.fDg=new C.y("City office",null,D.dd,null,null,null,null,null,null,null,null,null)
B.daE=w([B.baL,D.bc,B.fDg],x.p)
B.f2d=new C.cd(D.aM,D.e,D.i,D.m,null,D.p,null,0,B.daE,null)
B.bTy=new C.ae(D.OO,26,D.c_,null,null,null)
B.fQA=new C.y("Hallway tour",null,D.hp,null,null,null,null,null,null,null,null,null)
B.fBK=new C.y("Just the hall and its big TVs, 45 seconds",null,D.vl,null,null,null,null,null,null,null,null,null)
B.dsx=w([B.fQA,B.fBK],x.p)
B.bte=new C.fj(D.ah,D.e,D.i,D.E,null,D.p,null,0,B.dsx,null)
B.bFu=new C.bz(1,D.ba,B.bte,null)
B.cYi=w([B.bTy,D.bc,B.bFu,A2.P4],x.p)
B.f2g=new C.cd(D.aM,D.e,D.i,D.m,null,D.p,null,0,B.cYi,null)
B.bRc=new C.ae(D.hk,30,D.c,null,null,null)
B.fSB=new C.y("Play the tour",null,D.k5,null,null,null,null,null,null,null,null,null)
B.d6h=w([B.bRc,D.bn,B.fSB],x.p)
B.f2m=new C.cd(D.aM,D.b9,D.i,D.m,null,D.p,null,0,B.d6h,null)
B.v9=new A.JH(0,"correct")
B.aPV=new A.JH(1,"incorrect")
B.t1=new A.JH(2,"unsafe")
B.TO=new A.JH(3,"incomplete")
B.f2A=new A.JH(4,"requiresVerification")
B.edF={hospital:0,shop:1,school:2,firestation:3,house2:4,bighouse:5,store:6,gasstation:7,dmv:8,tower:9,hq:10}
B.aQw=new C.dE(B.edF,11,x.M)
B.edp={wardrobe:0,shelf:1,lamp:2,console:3}
B.f3Y=new C.dE(B.edp,4,x.M)
B.aQA=new C.jt([1,2,3,4,5],C.at("jt<G>"))
B.ed9={house2:0,bighouse:1,shop:2,hospital:3,school:4,firestation:5,store:6,gasstation:7,tower:8,hq:9,dmv:10}
B.f4a=new C.dE(B.ed9,11,x.M)
B.efq={billboard:0,bighouse:1,townsign:2,cornersign:3,adboard:4,tower:5,hq:6,store:7,gasstation:8,ubstation:9,dmv:10}
B.f4d=new C.dE(B.efq,11,x.M)
B.aQF=new C.dE(D.hT,0,C.at("dE<G>"))
B.f67=new C.av(0,36)
B.f6h=new C.av(126,84)
B.f7f=new C.a5(110,64,null,null)
B.f7g=new C.a5(120,70,null,null)
B.f7m=new C.a5(270,64,null,null)
B.f7n=new C.a5(270,70,null,null)
B.JV=new A.FL(0,"hot")
B.JW=new A.FL(1,"neutral")
B.JX=new A.FL(2,"ground")
B.aSk=new A.FL(3,"load")
B.ffM=new C.F(!0,D.c,null,null,null,null,12.5,null,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fgp=new C.F(!0,D.c,null,null,null,null,13.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fgu=new C.F(!0,D.c,null,null,null,null,16,D.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,L.CS,null,null,null)
B.fhI=new C.F(!0,D.aB,null,null,null,null,14,D.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.aSM=new C.F(!0,D.aB,null,null,null,null,11.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fie=new C.F(!0,D.bu,null,null,null,null,12,D.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fio=new C.F(!0,D.ad,null,null,null,null,13.5,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fiO=new C.F(!0,D.aE,null,null,null,null,12.5,D.u,null,2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fiY=new C.F(!0,D.aR,null,null,null,null,11.5,null,null,null,null,null,1.25,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fj9=new C.F(!0,D.bu,null,null,null,null,15,D.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fjq=new C.F(!0,D.c,null,null,null,null,12.5,D.U,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.aT0=new C.F(!0,D.ad,null,null,null,null,12,D.U,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fkm=new C.F(!0,D.c,null,null,null,null,13,D.U,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.a9J=new C.F(!0,D.ad,null,null,null,null,null,null,null,null,null,null,1.45,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fkP=new C.F(!0,D.bu,null,null,null,null,13,D.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.flu=new C.F(!0,D.aB,null,null,null,null,9.5,null,null,null,null,null,1.15,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.flL=new C.F(!0,D.ad,null,null,null,null,12.5,null,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.flM=new C.F(!0,D.fi,null,null,null,null,12,null,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fmn=new C.F(!0,null,null,null,null,null,9,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.K6=new C.F(!0,D.aE,null,null,null,null,12.5,D.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fmS=new C.F(!0,D.c,null,null,null,null,11.5,D.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.aTj=new C.F(!0,D.c,null,null,null,null,14,null,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fna=new C.F(!0,D.bL,null,null,null,null,13,D.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.foa=new C.F(!0,D.mA,null,null,null,null,12,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fog=new C.F(!0,D.ad,null,null,null,null,13.5,null,D.cD,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fos=new C.F(!0,D.fi,null,null,null,null,11.5,D.U,null,null,null,null,1.25,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fox=new C.F(!0,D.eG,null,null,null,null,14,D.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fp5=new C.F(!0,D.bu,null,null,null,null,18,D.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fpD=new C.F(!0,D.aR,null,null,null,null,12,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fqn=new C.F(!0,D.bu,null,null,null,null,null,D.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.aTM=new C.F(!0,D.ad,null,null,null,null,13.5,null,null,null,null,null,1.5,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.frh=new C.F(!0,D.aE,null,null,null,null,null,D.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.frL=new C.F(!0,D.aB,null,null,null,null,11,D.u,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fub=new C.F(!0,D.bu,null,null,null,null,44,D.u,null,2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.aUg=new C.F(!0,D.c,null,null,null,null,13.5,D.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fuA=new C.F(!0,D.aR,null,null,null,null,11.5,null,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fv7=new C.F(!0,D.b4,null,null,null,null,14.5,D.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fvi=new C.F(!0,F.fz,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fvz=new C.F(!0,D.fi,null,null,null,null,12,D.U,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fvU=new C.y("Wire guide (U.S. houses)",null,D.dd,null,null,null,null,null,null,null,null,null)
B.fw6=new C.y("Which wall?",null,D.Va,null,null,null,null,null,null,null,null,null)
B.fgE=new C.F(!0,D.w,null,null,null,null,12,D.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fwr=new C.y("Open the 3D lesson",null,B.fgE,null,null,null,null,null,null,null,null,null)
B.fxd=new C.y("Never rely on color alone. With the power off, prove what each wire does with a tester and the device diagram. A licensed electrician does real house wiring.",null,M.a9L,null,null,null,null,null,null,null,null,null)
B.fxn=new C.y("Tip: pick a part, then tap its glowing spot. Joints on hoses, bolts and the drain are only loose: pick the Wrench and tap them. Use your Hand on the main water valve: turn the water OFF before you cut into a pipe, and ON to test for leaks.",null,D.UK,null,null,null,null,null,null,null,null,null)
B.fxI=new C.y("Answer, then submit. Nothing is marked until you submit.",null,I.tc,null,null,null,null,null,null,null,null,null)
B.fyx=new C.y("You used all three lives. Electricity does not give second chances, so in real life you turn the breaker OFF and test the wires every single time. Try the job again.",null,D.x2,null,null,null,null,null,null,null,null,null)
B.fyO=new C.y("A different house",null,null,null,null,null,null,null,null,null,null,null)
B.fzf=new C.y("\ud83c\udf5e",null,D.x0,null,null,null,null,null,null,null,null,null)
B.fzg=new C.y("Show me",null,D.lS,null,null,null,null,null,null,null,null,null)
B.fzw=new C.y("Connect it to...",null,D.lR,null,null,null,null,null,null,null,null,null)
B.fzH=new C.y("Start this job again",null,null,null,null,null,null,null,null,null,null,null)
B.fqA=new C.F(!0,D.c7,null,null,null,null,12.5,D.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fA0=new C.y("Give back",null,B.fqA,null,null,null,null,null,null,null,null,null)
B.fAI=new C.y("Edit your billboard",null,D.dd,null,null,null,null,null,null,null,null,null)
B.fBR=new C.y("L is the lobby. On every level there is a balcony with a view of the town.",null,I.E9,null,null,null,null,null,null,null,null,null)
B.fC5=new C.y("Submit the test",null,null,null,null,null,null,null,null,null,null,null)
B.fCt=new C.y("\ud83e\udeaa",null,D.x0,null,null,null,null,null,null,null,null,null)
B.fCG=new C.y("Start from a bare house (wire everything)",null,null,null,null,null,null,null,null,null,null,null)
B.fDo=new C.y("THE RACE",null,Q.te,null,null,null,null,null,null,null,null,null)
B.fDt=new C.y("What should the drone show you?",null,D.a9C,null,null,null,null,null,null,null,null,null)
B.fE7=new C.y("Diagram lessons",null,null,null,null,null,null,null,null,null,null,null)
B.fEb=new C.y("Go through",null,null,null,null,null,null,null,null,null,null,null)
B.fF_=new C.y("The customer says\u2026",null,D.dd,null,null,null,null,null,null,null,null,null)
B.fFw=new C.y("Submit for inspection",null,null,null,null,null,null,null,null,null,null,null)
B.fFK=new C.y("What the house needs",null,D.dd,null,null,null,null,null,null,null,null,null)
B.fFW=new C.y("Next job",null,null,null,null,null,null,null,null,null,null,null)
B.fi9=new C.F(!0,D.w,null,null,null,null,14,D.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fG3=new C.y("Go in",null,B.fi9,null,null,null,null,null,null,null,null,null)
B.frE=new C.F(!0,D.aE,null,null,null,null,22,D.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fG7=new C.y("My House",null,B.frE,null,D.K,null,null,null,null,null,null,null)
B.fGe=new C.y("New job",null,null,null,null,null,null,null,null,null,null,null)
B.aTo=new C.F(!0,D.c7,null,null,null,null,null,D.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fGl=new C.y("Job over",null,B.aTo,null,null,null,null,null,null,null,null,null)
B.fGB=new C.y("Three shocks. In real life you switch the breaker off and test the wires, every time. Try another call.",null,D.x2,null,null,null,null,null,null,null,null,null)
B.fGH=new C.y("Learn the trades",null,R.tb,null,null,null,null,null,null,null,null,null)
B.fHg=new C.y("Practice mode: no hints. You will only hear from me when something is wrong.",null,I.E9,null,null,null,null,null,null,null,null,null)
B.fHu=new C.y("New call",null,null,null,null,null,null,null,null,null,null,null)
B.fHz=new C.y("Job done! \ud83c\udf89",null,M.Kc,null,null,null,null,null,null,null,null,null)
B.fHD=new C.y("Wire guide",null,null,null,null,null,null,null,null,null,null,null)
B.fIN=new C.y("Next call",null,null,null,null,null,null,null,null,null,null,null)
B.fJa=new C.y("Plug in",null,D.dd,null,null,null,null,null,null,null,null,null)
B.fJA=new C.y("Look around",null,null,null,null,null,null,null,null,null,null,null)
B.fJV=new C.y("\ud83d\udef5",null,D.x_,null,null,null,null,null,null,null,null,null)
B.fK9=new C.y("The customer wants:",null,D.UW,null,null,null,null,null,null,null,null,null)
B.fKk=new C.y('Tip: pick "Look and test" and tap things to find out what is wrong. Then pick the right tool. Turn the breaker off (hand) before you touch any wire.',null,D.UK,null,null,null,null,null,null,null,null,null)
B.fnb=new C.F(!0,D.aB,null,null,null,null,11.5,D.H,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fKC=new C.y("INCOMING CALL",null,B.fnb,null,null,null,null,null,null,null,null,null)
B.fKI=new C.y("Elevator",null,D.fv,null,null,null,null,null,null,null,null,null)
B.fLJ=new C.y("Deliveries",null,D.fv,null,null,null,null,null,null,null,null,null)
B.fLX=new C.y("Every connection is on the right terminal and every safety check passes.",null,D.tf,null,null,null,null,null,null,null,null,null)
B.fM5=new C.y("Message \xb7 now",null,D.vg,null,null,null,null,null,null,null,null,null)
B.fMV=new C.y("5 bedrooms, 3 bathrooms and a garden. Walk in, look all round, fix what is wrong.",null,A8.UF,null,D.K,null,null,null,null,null,null,null)
B.fN_=new C.y("Call over",null,B.aTo,null,null,null,null,null,null,null,null,null)
B.fN6=new C.y("\ud83d\udd12",null,A_.UX,null,null,null,null,null,null,null,null,null)
B.fN7=new C.y("\u23cf Unplug",null,U.Ag,null,null,null,null,null,null,null,null,null)
B.fNd=new C.y("The game is closed for now",null,D.n0,null,D.K,null,null,null,null,null,null,null)
B.fhT=new C.F(!0,D.ad,null,null,null,null,14.5,null,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fNq=new C.y("You missed 3 jobs in a row. The City office needs people who answer the phone and finish the job.",null,B.fhT,null,D.K,null,null,null,null,null,null,null)
B.fNs=new C.y("A different call",null,null,null,null,null,null,null,null,null,null,null)
B.fNK=new C.y("One board on its own, or several boards standing apart.",null,I.tc,null,null,null,null,null,null,null,null,null)
B.fNV=new C.y("\ud83d\udecf\ufe0f",null,D.nI,null,null,null,null,null,null,null,null,null)
B.fOl=new C.y("Job complete! \ud83c\udf89",null,M.Kc,null,null,null,null,null,null,null,null,null)
B.fOy=new C.y("OPEN ORDERS",null,Q.te,null,null,null,null,null,null,null,null,null)
B.fOS=new C.y("Colours",null,D.Af,null,null,null,null,null,null,null,null,null)
B.fOW=new C.y("How you are doing",null,D.hp,null,null,null,null,null,null,null,null,null)
B.fPt=new C.y("All fixed! \ud83c\udf89",null,M.Kc,null,null,null,null,null,null,null,null,null)
B.fPx=new C.y("These are the usual U.S. house wiring colors. Colors are a hint, not proof: old work, switch loops and other countries differ. A real installer proves what each wire does with a tester, with the power off, and follows the device diagram.",null,Ad.a9K,null,null,null,null,null,null,null,null,null)
B.fPG=new C.y("Test (marked on submit)",null,null,null,null,null,null,null,null,null,null,null)
B.fPT=new C.y("Messages",null,D.vg,null,null,null,null,null,null,null,null,null)
B.aUS=new C.y("Stay",null,null,null,null,null,null,null,null,null,null,null)
B.fQF=new C.y("\ud83d\ude81",null,D.x_,null,null,null,null,null,null,null,null,null)
B.fQS=new C.y("Choose a level. A red one has an office with no power.",null,D.Al,null,null,null,null,null,null,null,null,null)
B.aUU=new C.y("A different job",null,null,null,null,null,null,null,null,null,null,null)
B.fRG=new C.y("It goes on the back wall, not wired yet. Tap the red one to wire it yourself.",null,I.tc,null,null,null,null,null,null,null,null,null)
B.fSD=new C.y("\ud83d\uded7",null,D.x_,null,null,null,null,null,null,null,null,null)
B.fSY=new C.y("\u26a1",null,D.pC,null,null,null,null,null,null,null,null,null)
B.fTu=new C.y("Practice (instant feedback)",null,null,null,null,null,null,null,null,null,null,null)
B.fTz=new C.y("The job",null,D.dd,null,null,null,null,null,null,null,null,null)
B.fUt=new C.y("Stay in the room",null,null,null,null,null,null,null,null,null,null,null)
B.ftz=new C.F(!0,F.fz,null,null,null,null,12,D.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fUK=new C.y("\ud83e\udea7 Billboards",null,B.ftz,null,null,null,null,null,null,null,null,null)
B.fUQ=new C.y("Choose a billboard",null,D.dd,null,null,null,null,null,null,null,null,null)
B.fUV=new C.y("Which sign?",null,D.Af,null,null,null,null,null,null,null,null,null)
B.fV1=new C.y("\ud83d\udc8a",null,D.x0,null,null,null,null,null,null,null,null,null)
B.fY5=new A.q(3.6,2.6,0.6)
B.fY7=new A.q(0,56,0.9)
B.fY8=new A.q(-146.4,62,84)
B.iu=new A.q(0,0,1)
B.fYb=new A.q(0,0,3)
B.aaH=new A.q(0,0,4)
B.fYd=new A.q(0,0,500)
B.fYe=new A.q(0,0,640)
B.fYf=new A.q(0,0,800)
B.tj=new A.q(0,0,-1)
B.aaI=new A.q(0,0,-60)
B.fYi=new A.q(0,101,38)
B.fYj=new A.q(0,105,280)
B.aVI=new A.q(0,10,0)
B.fYk=new A.q(0,10,3)
B.fYl=new A.q(0,110,10)
B.fYm=new A.q(0,110,95)
B.fYn=new A.q(0,112,36)
B.fYo=new A.q(0,116,0)
B.fYp=new A.q(0,11,-15)
B.fYq=new A.q(0,120,0)
B.fYr=new A.q(0,122,0)
B.fYs=new A.q(0,124,0)
B.fYt=new A.q(0,126,4)
B.aVK=new A.q(0,12,0)
B.fYu=new A.q(0,12,3)
B.fYv=new A.q(0,130,-3)
B.aaJ=new A.q(0,13,0)
B.fYw=new A.q(0,13,56)
B.fYx=new A.q(0,13,-8)
B.fYy=new A.q(0,142,0)
B.KA=new A.q(0,14,0)
B.fYz=new A.q(0,14,11)
B.fYA=new A.q(0,14,150)
B.fYB=new A.q(0,14,2)
B.fYC=new A.q(0,14,32)
B.aVL=new A.q(0,14,40)
B.fYD=new A.q(0,14,5)
B.fYF=new A.q(0,14,-9)
B.fYG=new A.q(0,150,-150)
B.fYH=new A.q(0,159,0)
B.fYI=new A.q(0,165,3)
B.fYJ=new A.q(0,165,-63)
B.fYK=new A.q(0,16,0)
B.fYL=new A.q(0,178,-30)
B.aaK=new A.q(0,17,0)
B.fYM=new A.q(0,17,21)
B.fYN=new A.q(0,188,0)
B.fYO=new A.q(0,19,0)
B.fYP=new A.q(0,19,14)
B.fYR=new A.q(0,19,-30)
B.ea=new A.q(0,1,0)
B.fYT=new A.q(0,202,0)
B.fYU=new A.q(0,20,0)
B.fYV=new A.q(0,20,16)
B.fYY=new A.q(0,20,-14)
B.fYZ=new A.q(0,20,-6)
B.fZ_=new A.q(0,210,-150)
B.fZ0=new A.q(0,216,-30)
B.fZ1=new A.q(0,21,0)
B.fZ2=new A.q(0,22,-11)
B.fZ3=new A.q(0,22,-12)
B.fZ4=new A.q(0,22,-39)
B.fZ7=new A.q(0,23,0)
B.fZa=new A.q(0,24,0)
B.fZb=new A.q(0,24,13)
B.fZd=new A.q(0,250,640)
B.Ar=new A.q(0,250,-118)
B.fZf=new A.q(0,252,0)
B.fZg=new A.q(0,25,-15)
B.fZh=new A.q(0,26,-24)
B.Vw=new A.q(0,28,0)
B.fZi=new A.q(0,28,-8)
B.aVN=new A.q(0,29,40)
B.fZj=new A.q(0,2,14)
B.fZk=new A.q(0,304,-150)
B.aaL=new A.q(0,30,0)
B.fZl=new A.q(0,30,110)
B.fZm=new A.q(0,316,0)
B.fZn=new A.q(0,31,46)
B.fZo=new A.q(0,31,-6)
B.fZp=new A.q(0,330,260)
B.fZq=new A.q(0,34,0)
B.fZr=new A.q(0,36,0)
B.fZs=new A.q(0,36,19)
B.fZt=new A.q(0,36,-3)
B.fZu=new A.q(0,37,22)
B.fZv=new A.q(0,3,0)
B.fZw=new A.q(0,3,150)
B.fZx=new A.q(0,3,-30)
B.fZz=new A.q(0,400,60)
B.fZA=new A.q(0,40,100)
B.fZC=new A.q(0,40,150)
B.fZD=new A.q(0,40,17)
B.fZF=new A.q(0,40,40)
B.fZG=new A.q(0,40,45)
B.fZH=new A.q(0,40,50)
B.fZJ=new A.q(0,40,-6)
B.aVP=new A.q(0,44,46)
B.fZK=new A.q(0,44,55)
B.fZL=new A.q(0,46,0)
B.fZM=new A.q(0,47,0)
B.aVQ=new A.q(0,48,0)
B.fZO=new A.q(0,48,20)
B.fZP=new A.q(0,48,82)
B.Vx=new A.q(0,4,-2)
B.fZT=new A.q(0,520,1450)
B.aVR=new A.q(0,52,0)
B.fZU=new A.q(0,52,52)
B.fZW=new A.q(0,55,0)
B.aaM=new A.q(0,58,0)
B.fZX=new A.q(0,5,4)
B.fZZ=new A.q(0,66,0)
B.h__=new A.q(0,66,1)
B.h_0=new A.q(0,6,-15)
B.h_1=new A.q(0,75,-30)
B.aVS=new A.q(0,76,36)
B.aaN=new A.q(0,7,0)
B.h_2=new A.q(0,7,-5)
B.aVT=new A.q(0,82,0)
B.xa=new A.q(0,8,0)
B.h_3=new A.q(0,8,6)
B.h_4=new A.q(0,8,90)
B.h_5=new A.q(0,8,-16)
B.h_6=new A.q(0,8,-19)
B.h_7=new A.q(0,8,-4)
B.h_8=new A.q(0,900,1600)
B.h_9=new A.q(0,91,80)
B.aVU=new A.q(0,92,1)
B.h_a=new A.q(0,94,13)
B.h_b=new A.q(0,98,8)
B.h_c=new A.q(0,99,38)
B.aaO=new A.q(0,9,0)
B.aVV=new A.q(0,9,-3)
B.aaP=new A.q(0,-4,28)
B.h_d=new A.q(0,-4,-20)
B.h_h=new A.q(-100,38,0.7)
B.h_k=new A.q(100,100,320)
B.h_l=new A.q(100,14,36)
B.h_m=new A.q(100,24,36)
B.h_n=new A.q(100,24,8)
B.h_o=new A.q(100,290,-330)
B.h_p=new A.q(100,7,7)
B.h_q=new A.q(101,4,37)
B.h_t=new A.q(10,12,10)
B.h_u=new A.q(10,12,16)
B.h_v=new A.q(10,16,3)
B.h_w=new A.q(10,26,2)
B.h_x=new A.q(10,34,1)
B.h_y=new A.q(10,3,7)
B.h_z=new A.q(10,60,14)
B.h_A=new A.q(10,8,10)
B.h_B=new A.q(10,8,15)
B.h_D=new A.q(110,0,20)
B.h_E=new A.q(110,130,20)
B.h_F=new A.q(110,14,2)
B.h_G=new A.q(110,8,34)
B.h_H=new A.q(110,96,120)
B.aVW=new A.q(112,22,3)
B.h_I=new A.q(112,46,2)
B.h_J=new A.q(11,12,30)
B.aVX=new A.q(11,16,7)
B.h_K=new A.q(11,1,11)
B.h_L=new A.q(120,0,-30)
B.h_M=new A.q(120,28,22)
B.h_N=new A.q(120,40,100)
B.h_O=new A.q(124,2,26)
B.h_P=new A.q(124,4,60)
B.h_Q=new A.q(125,8,54)
B.h_R=new A.q(126,2,62)
B.aVY=new A.q(12,3,9)
B.h_S=new A.q(12,4,22)
B.h_T=new A.q(12,86,0)
B.h_U=new A.q(130,18,12)
B.h_V=new A.q(130,28,24)
B.aVZ=new A.q(130,4,14)
B.aW_=new A.q(130,56,80)
B.h_W=new A.q(130,5,50)
B.h_X=new A.q(132,14,150)
B.h_Y=new A.q(132,2,52)
B.aW0=new A.q(134,4,84)
B.h_Z=new A.q(13,0,0)
B.h0_=new A.q(13,12,13)
B.h00=new A.q(13,15,2)
B.aW1=new A.q(13,18,8)
B.h01=new A.q(13,28,3)
B.h02=new A.q(0,0.52,2.35)
B.h03=new A.q(140,28,22)
B.h04=new A.q(140,9,43)
B.h05=new A.q(144,2,26)
B.h06=new A.q(146,3,40)
B.h07=new A.q(148,60,120)
B.h08=new A.q(14,10,2)
B.aW2=new A.q(14,11,14)
B.h09=new A.q(14,13,28)
B.h0a=new A.q(14,14,3)
B.h0b=new A.q(14,17,4)
B.h0c=new A.q(14,20,-28)
B.h0d=new A.q(14,30,14)
B.h0e=new A.q(14,36,14)
B.h0f=new A.q(14,3,14)
B.h0g=new A.q(150,30,42)
B.h0h=new A.q(150,70,5)
B.h0i=new A.q(151,3,43)
B.h0j=new A.q(152,4,7)
B.h0l=new A.q(16,10,10)
B.h0m=new A.q(16,16,16)
B.h0n=new A.q(16,3,11)
B.h0o=new A.q(16,80,60)
B.h0p=new A.q(16,9,2)
B.h0q=new A.q(17,1,0)
B.aW3=new A.q(17,3,17)
B.h0r=new A.q(27,1.4,27)
B.h0s=new A.q(18,18,14)
B.h0t=new A.q(18,20,18)
B.h0u=new A.q(18,22,2)
B.h0v=new A.q(18,28,16)
B.h0w=new A.q(18,2,18)
B.h0x=new A.q(18,3,0)
B.h0y=new A.q(18,6,0)
B.h0z=new A.q(18,80,2)
B.h0A=new A.q(18,90,5)
B.h0B=new A.q(18,9,11)
B.h0C=new A.q(190,20,60)
B.h0D=new A.q(190,320,100)
B.h0E=new A.q(19,13,7)
B.h0F=new A.q(70,0.6,50)
B.h0G=new A.q(0,3,-6.5)
B.h0H=new A.q(-4,20.4,0)
B.h0I=new A.q(1,1,0.64)
B.h0J=new A.q(-4.6,1.5,-3.6)
B.h0K=new A.q(0,-13.5,-1.5)
B.h0L=new A.q(4,10,3.5)
B.aW4=new A.q(0.95,1.7,0.85)
B.hI=new A.q(1,0,0)
B.h0M=new A.q(1,16,36)
B.h0N=new A.q(1,18,18)
B.aW5=new A.q(1,22,11)
B.h0O=new A.q(1,26,14)
B.h0P=new A.q(1,28,14)
B.aW6=new A.q(1,2,1)
B.aW7=new A.q(1,3,1)
B.aaQ=new A.q(1,3,6)
B.h0R=new A.q(1,0.9,0.06)
B.h0S=new A.q(1.2,44,34)
B.h0U=new A.q(200,0,500)
B.h0V=new A.q(200,0,900)
B.h0W=new A.q(200,140,200)
B.h1_=new A.q(1.6,15,1.6)
B.h10=new A.q(20,12,14)
B.aW8=new A.q(20,14,7)
B.h11=new A.q(20,2,2)
B.h12=new A.q(20,2,8)
B.h13=new A.q(20,30,26)
B.h14=new A.q(20,3,14)
B.h15=new A.q(20,4,26)
B.h16=new A.q(20,92,26)
B.h17=new A.q(216,8,216)
B.h18=new A.q(22,12,34)
B.h19=new A.q(22,14,0)
B.h1a=new A.q(22,14,2)
B.h1b=new A.q(22,14,3)
B.h1c=new A.q(22,16,3)
B.h1d=new A.q(22,18,14)
B.h1e=new A.q(22,2,28)
B.h1f=new A.q(22,3,10)
B.h1g=new A.q(22,3,22)
B.h1h=new A.q(22,4,20)
B.h1i=new A.q(230,330,-210)
B.h1j=new A.q(230,-40,100)
B.h1k=new A.q(240,150,60)
B.h1l=new A.q(244,6,64)
B.h1m=new A.q(140,15,3.6)
B.h1n=new A.q(24,12,34)
B.h1o=new A.q(24,14,22)
B.h1p=new A.q(24,38,0)
B.aW9=new A.q(24,6,14)
B.h1q=new A.q(250,92,6)
B.h1r=new A.q(260,300,-160)
B.h1s=new A.q(262,3,5)
B.h1t=new A.q(262,3,56)
B.h1u=new A.q(26,14,26)
B.h1v=new A.q(26,2,26)
B.aWa=new A.q(26,4,22)
B.h1w=new A.q(26,72,26)
B.h1x=new A.q(26,8,18)
B.h1y=new A.q(26,-34,96)
B.h1A=new A.q(7.4,6,10.4)
B.h1B=new A.q(-0.1,0,0)
B.aWb=new A.q(2,100,90)
B.h1C=new A.q(2,10,2)
B.aWc=new A.q(2,12,60)
B.h1D=new A.q(2,13,2)
B.aWd=new A.q(2,23,12)
B.aWe=new A.q(2,28,22)
B.h1E=new A.q(2,5,1)
B.h1F=new A.q(2,700,900)
B.aWf=new A.q(2,8,2)
B.h1G=new A.q(1,0.9,0.8)
B.h1I=new A.q(64,10,-1.4)
B.aWg=new A.q(0,9.4,-1.5)
B.h1J=new A.q(47,48,3.5)
B.h1K=new A.q(19.6,0,-1.5)
B.aWh=new A.q(0,56,1.3)
B.h1L=new A.q(0,15.5,0)
B.h1M=new A.q(3000,0,3000)
B.h1N=new A.q(3000,0,-3000)
B.h1P=new A.q(300,6,3)
B.h1R=new A.q(30,16,30)
B.aWi=new A.q(30,16,72)
B.h1S=new A.q(30,22,0)
B.h1T=new A.q(30,24,8)
B.h1U=new A.q(30,28,18)
B.h1V=new A.q(30,29,0)
B.h1W=new A.q(30,34,40)
B.h1X=new A.q(30,40,100)
B.h1Z=new A.q(30,6,12)
B.h2_=new A.q(324,114,6)
B.aWj=new A.q(324,6,10)
B.h20=new A.q(32,2,20)
B.h21=new A.q(33,11,10)
B.h22=new A.q(34,10,1)
B.h23=new A.q(34,22,3)
B.aWk=new A.q(34,25,18)
B.h24=new A.q(34,30,1)
B.aWl=new A.q(34,39,18)
B.aWm=new A.q(34,42,18)
B.h25=new A.q(34,4,28)
B.aWo=new A.q(34,8,18)
B.h26=new A.q(-1,-1.7,2.3)
B.h27=new A.q(366,124,6)
B.aWp=new A.q(366,6,10)
B.h28=new A.q(36,22,0)
B.h29=new A.q(36,30,0)
B.h2a=new A.q(36,30,1)
B.h2b=new A.q(36,4,3)
B.h2c=new A.q(36,60,12)
B.h2d=new A.q(0,93,3.5)
B.h2e=new A.q(37,16,0)
B.h2f=new A.q(37,50,38)
B.h2g=new A.q(38,10,24)
B.h2h=new A.q(38,20,3)
B.h2i=new A.q(38,2,6)
B.h2j=new A.q(-0.2,-0.3,-0.4)
B.h2k=new A.q(60,62,3.6)
B.h2l=new A.q(0,9.5,-1.5)
B.h2m=new A.q(0,48.6,55)
B.aWq=new A.q(3,12,12)
B.aWr=new A.q(3,14,18)
B.h2n=new A.q(3,16,3)
B.h2p=new A.q(3,22,2)
B.h2q=new A.q(3,26,3)
B.aaR=new A.q(3,3,3)
B.h2r=new A.q(3,42,70)
B.h2s=new A.q(3,46,90)
B.h2t=new A.q(3,5,3)
B.h2v=new A.q(40,12,2)
B.h2w=new A.q(40,16,18)
B.h2x=new A.q(40,1,14)
B.h2y=new A.q(40,28,1)
B.h2z=new A.q(40,2,104)
B.h2A=new A.q(40,2,24)
B.h2B=new A.q(40,30,26)
B.h2C=new A.q(40,60,40)
B.h2D=new A.q(40,80,3)
B.h2E=new A.q(40,8,104)
B.h2F=new A.q(42,2,28)
B.h2G=new A.q(44,10,2)
B.aWt=new A.q(44,2,14)
B.h2H=new A.q(44,3,22)
B.h2I=new A.q(44,72,20)
B.h2J=new A.q(0.9,0,4.4)
B.h2K=new A.q(8.2,1.9,-7.55)
B.h2L=new A.q(46,10,34)
B.h2M=new A.q(46,3,10)
B.h2N=new A.q(46,3,3)
B.h2O=new A.q(48,2,24)
B.h2P=new A.q(120.6,140,-52)
B.h2Q=new A.q(0,-47.25,-2.25)
B.h2R=new A.q(-147.6,54,45)
B.h2S=new A.q(0.6,68,0.4)
B.h2T=new A.q(64,49,8.4)
B.h2U=new A.q(1.5,28,120)
B.h2V=new A.q(0,1.59,0.14)
B.h2W=new A.q(4,108,0)
B.h2X=new A.q(4,80,104)
B.h2Y=new A.q(4,96,0)
B.h2Z=new A.q(0,-3.4,1)
B.h3_=new A.q(25,79,1.4)
B.h30=new A.q(1,0,-1.2)
B.h31=new A.q(0.6,4,2.4)
B.h32=new A.q(50,12,32)
B.h33=new A.q(50,1,2)
B.h34=new A.q(50,28,42)
B.h35=new A.q(50,4,28)
B.h36=new A.q(51,7,33)
B.h37=new A.q(52,10,22)
B.h38=new A.q(52,56,1)
B.h39=new A.q(54,5,18)
B.h3c=new A.q(56,18,18)
B.h3d=new A.q(56,2,36)
B.h3e=new A.q(56,3,32)
B.h3f=new A.q(56,3,48)
B.h3g=new A.q(1.3,0.4,0.55)
B.h3h=new A.q(58,0,30)
B.h3i=new A.q(58,14,9)
B.h3j=new A.q(58,64,22)
B.h3k=new A.q(58,92,30)
B.h3l=new A.q(58,96,30)
B.h3m=new A.q(58,9,74)
B.h3n=new A.q(0,-0.8,0.9)
B.h3o=new A.q(11.9,0,-8)
B.h3p=new A.q(20,7,34.4)
B.h3q=new A.q(-47,48,3.5)
B.aWu=new A.q(1.6,1.6,0.4)
B.h3s=new A.q(0.16,0.32,0.07)
B.h3t=new A.q(5,10,5)
B.aWv=new A.q(5,12,26)
B.h3u=new A.q(5,17,2)
B.h3v=new A.q(5,1,2)
B.h3w=new A.q(5,34,24)
B.h3x=new A.q(5,5,5)
B.h3y=new A.q(5,6,10)
B.h3z=new A.q(5,6,3)
B.h3A=new A.q(5,9,8)
B.h3B=new A.q(-120.1,150,0)
B.h3C=new A.q(0,14.3,-1.5)
B.h3D=new A.q(0,0,3.2)
B.aWw=new A.q(-13,8.6,-9.5)
B.h3E=new A.q(60,12,56)
B.h3F=new A.q(60,12,80)
B.h3G=new A.q(60,16,28)
B.h3H=new A.q(60,30,3)
B.h3J=new A.q(620,300,270)
B.h3K=new A.q(62,11,0)
B.h3L=new A.q(62,18,20)
B.h3M=new A.q(62,22,6)
B.h3N=new A.q(62,5,0)
B.h3O=new A.q(632,10,282)
B.h3P=new A.q(640,8,290)
B.h3Q=new A.q(64,10,0)
B.h3T=new A.q(0,-3.45,4)
B.h3U=new A.q(14,9,0.5)
B.aWx=new A.q(6,14,20)
B.aWy=new A.q(6,14,32)
B.h3V=new A.q(6,28,6)
B.h3W=new A.q(6,4,4)
B.h3X=new A.q(6,6,6)
B.h3Z=new A.q(-150.6,70,160)
B.h4_=new A.q(0,-0.2,0.14)
B.h41=new A.q(120.6,140,-8)
B.h42=new A.q(0.3,38,2)
B.h44=new A.q(700,430,1150)
B.h45=new A.q(70,175,-45)
B.h46=new A.q(70,194,-45)
B.h47=new A.q(70,6,36)
B.h48=new A.q(720,100,105)
B.h49=new A.q(720,360,320)
B.h4a=new A.q(72,32,3)
B.h4b=new A.q(72,-17,70)
B.h4c=new A.q(12,5,0.4)
B.h4d=new A.q(74,20,5)
B.h4e=new A.q(76,2,90)
B.h4f=new A.q(76,8,3)
B.h4g=new A.q(34,30,0.6)
B.h4h=new A.q(1.6,1.7,3.6)
B.h4j=new A.q(-72.8,0,55)
B.h4k=new A.q(-146.4,15,84)
B.h4m=new A.q(25,79,0.2)
B.h4n=new A.q(7,0,-8)
B.h4o=new A.q(7,18,10)
B.h4p=new A.q(7,27,10)
B.h4q=new A.q(7,2,7)
B.aWz=new A.q(7,3,0)
B.h4r=new A.q(7,6,3)
B.h4s=new A.q(7,8,3)
B.aWA=new A.q(7,96,7)
B.h4t=new A.q(2200,0.4,560)
B.h4v=new A.q(0,11,9.2)
B.h4w=new A.q(-3.2,1.3,-7.82)
B.h4x=new A.q(20,0.8,12)
B.h4y=new A.q(80,16,32)
B.h4z=new A.q(80,26,8)
B.h4A=new A.q(80,38,26)
B.h4C=new A.q(80,4,14)
B.h4D=new A.q(80,6,32)
B.aWB=new A.q(147,1.5,3.5)
B.h4E=new A.q(82,46,3)
B.aWC=new A.q(-6.5,6.9,-3)
B.h4F=new A.q(84,10,38)
B.h4G=new A.q(84,18,38)
B.h4H=new A.q(84,84,120)
B.h4I=new A.q(84,8,36)
B.h4J=new A.q(0.93,0.92,1)
B.h4K=new A.q(4.6,4.2,9.5)
B.h4L=new A.q(88,24,28)
B.h4M=new A.q(88,84,3)
B.h4N=new A.q(0.4,6,8)
B.h4O=new A.q(0,-48.6,55)
B.h4P=new A.q(2.6,2,2.6)
B.h4Q=new A.q(5.5,8.5,3)
B.h4R=new A.q(0,0,0.26)
B.h4S=new A.q(120.6,96,-52)
B.h4T=new A.q(8,18,8)
B.aWD=new A.q(8,2,16)
B.h4U=new A.q(8,2,6)
B.aWE=new A.q(8,2,8)
B.h4V=new A.q(8,6,6)
B.h4W=new A.q(8,8,12)
B.h4X=new A.q(8,9,8)
B.h4Y=new A.q(8,9,9)
B.h4Z=new A.q(-140,62,3.6)
B.h50=new A.q(15,19,0.5)
B.h51=new A.q(900,2,700)
B.h53=new A.q(92,2,32)
B.h54=new A.q(95,26,1)
B.h55=new A.q(95,50,6)
B.h56=new A.q(96,14,38)
B.h57=new A.q(0.4,0.38,0.12)
B.h58=new A.q(0,0,-0.43)
B.aWF=new A.q(11.2,4.5,-6)
B.aWG=new A.q(1.2,96,112)
B.aWH=new A.q(0.08,3.8,2.4)
B.aWI=new A.q(9,1,9)
B.h59=new A.q(9,40,4)
B.h5a=new A.q(9,5,9)
B.h5b=new A.q(0,70,-0.6)
B.h5c=new A.q(-34.6,86,69)
B.h5d=new A.q(-3.5,26,15)
B.h5e=new A.q(34,6,0.6)
B.h5f=new A.q(1.5,1.3,0.6)
B.h5g=new A.q(-120.6,96,-8)
B.h5h=new A.q(0,1.9,-0.7)
B.h5j=new A.q(0,-1.78,0.27)
B.aWJ=new A.q(1.2,9,1.2)
B.h5k=new A.q(0,0.62,0)
B.h5l=new A.q(5.5,1.4,12)
B.h5m=new A.q(-50,0.6,50)
B.h5p=new A.q(20,11.5,0)
B.h5q=new A.q(20,66,1.4)
B.h5r=new A.q(3.2,0.12,-6.7)
B.h5s=new A.q(12,0,-8.1)
B.h5u=new A.q(-34.6,86,7)
B.aWK=new A.q(0,0,3.4)
B.h5v=new A.q(1.25,0.28,0.1)
B.h5w=new A.q(100,38,0.7)
B.h5x=new A.q(0,36,10.2)
B.h5y=new A.q(24,0.08,16)
B.h5z=new A.q(34,1.4,1.4)
B.h5B=new A.q(0,4,-7.9)
B.h5C=new A.q(11.9,0,8)
B.h5D=new A.q(0,41.5,-4.9)
B.h5E=new A.q(-26,146,0.6)
B.aWL=new A.q(0.8,1.7,0.78)
B.h5G=new A.q(21,1.4,8)
B.h5H=new A.q(0.8,0.8,1.6)
B.h5I=new A.q(1.4,1,1)
B.h5J=new A.q(30,36,0.8)
B.h5L=new A.q(71.2,46.6,55)
B.h5M=new A.q(3,3.28,-7.2)
B.h5N=new A.q(1.4,0.3,1)
B.h5O=new A.q(0,42,1.5)
B.h5P=new A.q(-6.1,1.2,-6.4)
B.h5Q=new A.q(1.4,26,0.4)
B.h5R=new A.q(76,0.6,4)
B.h5T=new A.q(26,0.3,130)
B.h5U=new A.q(0,-45.5,0.5)
B.h5V=new A.q(1.8,4,1)
B.h5W=new A.q(5,1.6,0.5)
B.h5Y=new A.q(18,10,0.6)
B.h5Z=new A.q(0,11,8.5)
B.h6_=new A.q(0.1,-2,2.4)
B.h60=new A.q(302.4,1.2,322)
B.h61=new A.q(-1,33.4,-4.9)
B.h62=new A.q(0,0.2,2.8)
B.h63=new A.q(6,10,1.4)
B.h64=new A.q(0.95,0.95,1)
B.h66=new A.q(24,32,0.8)
B.h67=new A.q(0,10,5.2)
B.h68=new A.q(0,-1.2,4.7)
B.h69=new A.q(18.9,2.6,0)
B.h6a=new A.q(-2200,0.4,720)
B.h6b=new A.q(66,89,3.8)
B.h6c=new A.q(-12,0,-8.1)
B.h6d=new A.q(3,11,0.5)
B.h6e=new A.q(0,70,320.6)
B.h6f=new A.q(11.8,4,0)
B.h6g=new A.q(0.97,0.18,2.25)
B.h6h=new A.q(0,6.6,-0.6)
B.h6i=new A.q(58,96,31.7)
B.h6j=new A.q(14,20,1.2)
B.aWM=new A.q(-71.7,6,55)
B.h6k=new A.q(0,-3.75,4.15)
B.h6m=new A.q(64,57,8.4)
B.h6n=new A.q(5.6,0.3,1.9)
B.h6q=new A.q(52,8,0.4)
B.h6r=new A.q(0,14,51.2)
B.h6s=new A.q(4.6,7.6,3)
B.h6t=new A.q(-1,0,-1.2)
B.h6u=new A.q(0,1.7,0)
B.h6v=new A.q(0,1.8,-0.9)
B.h6x=new A.q(-1,0,1.5)
B.h6y=new A.q(27,19,0.4)
B.h6z=new A.q(90,2,0.5)
B.h6A=new A.q(-17,98,77.2)
B.h6B=new A.q(5,8,0.4)
B.h6C=new A.q(0,98,6.6)
B.h6D=new A.q(5,14,8.5)
B.h6E=new A.q(5,2.2,0.8)
B.h6F=new A.q(-120.6,140,-52)
B.h6G=new A.q(-2200,0.4,560)
B.h6H=new A.q(0.18,0.12,0.08)
B.h6I=new A.q(50,0.6,50)
B.h6J=new A.q(147,3,1.4)
B.h6K=new A.q(20,0.6,50)
B.h6L=new A.q(0,6.6,0)
B.h6M=new A.q(4,16.2,0)
B.h6N=new A.q(60,0.4,12)
B.h6O=new A.q(10,15,0.5)
B.h6P=new A.q(144,5,0.7)
B.h6Q=new A.q(1.2,-1.7,2.3)
B.h6R=new A.q(31.5,23,0)
B.h6S=new A.q(0,0.9,0)
B.h6T=new A.q(2.4,2.4,70)
B.h6U=new A.q(-120.6,140,-8)
B.h6W=new A.q(-146.4,15,172)
B.h6X=new A.q(0.82,1.7,0.3)
B.h6Y=new A.q(0.55,0.45,0.35)
B.h6Z=new A.q(47,7,34.4)
B.h7_=new A.q(-0.12,0,0)
B.h71=new A.q(3.5,94,0.2)
B.h72=new A.q(1.1,2.05,0.04)
B.h73=new A.q(25,79,1.2)
B.h74=new A.q(1.2,3.6,18)
B.h75=new A.q(10,14,0.5)
B.h76=new A.q(0,138.8,95)
B.h77=new A.q(0,35.5,-4.9)
B.h78=new A.q(5,8,0.5)
B.aaS=new A.q(1.1,0.5,0.7)
B.h79=new A.q(-20,11.5,0)
B.h7a=new A.q(0,1.1,0)
B.h7b=new A.q(0,-0.5,0.6)
B.h7c=new A.q(32,6,0.5)
B.h7d=new A.q(0,9.8,-1.5)
B.h7e=new A.q(0,1.4,0)
B.h7g=new A.q(1,3,0.8)
B.h7h=new A.q(0,3.4,0.8)
B.h7j=new A.q(0.1,0.1,0.1)
B.h7k=new A.q(0,-0.6,38)
B.h7l=new A.q(-0.85,4,-3.2)
B.h7n=new A.q(-7.1,19,4)
B.h7o=new A.q(0,58,-14.2)
B.h7p=new A.q(40,7.2,1.2)
B.aWN=new A.q(0.42,0.34,0.12)
B.h7q=new A.q(1.7,0.08,1.2)
B.h7r=new A.q(0,0,0.38)
B.h7t=new A.q(5.2,3.9,-7.76)
B.h7u=new A.q(1.15,0.42,0.7)
B.h7w=new A.q(146.2,52,120)
B.h7x=new A.q(30,22,0.8)
B.h7y=new A.q(2.6,0.45,0.5)
B.h7z=new A.q(0.07,0.3,0.03)
B.h7B=new A.q(41.5,11,12)
B.h7C=new A.q(36.2,60,38)
B.h7E=new A.q(20,1.4,8)
B.h7F=new A.q(75.4,24,0)
B.h7G=new A.q(0,-0.2,0.19)
B.h7H=new A.q(-20,0.6,-50)
B.h7I=new A.q(1.3,0.26,0.6)
B.h7K=new A.q(1.2,49,36)
B.h7L=new A.q(0,9.3,0)
B.h7N=new A.q(9,12,0.6)
B.h7O=new A.q(0,-0.6,160)
B.aWO=new A.q(1.4,3,1.6)
B.h7P=new A.q(0,40,0.95)
B.h7Q=new A.q(11,3,0.5)
B.h7R=new A.q(34.6,34,7)
B.h7S=new A.q(190,0.6,90)
B.h7U=new A.q(0,-1.9,-1.2)
B.h7V=new A.q(-3.2,1.15,-7.78)
B.h7W=new A.q(0,-3.4,1.2)
B.h7X=new A.q(64,10,0.2)
B.h7Y=new A.q(0,-1.78,0.53)
B.h7Z=new A.q(0.8,2.6,0.3)
B.aWP=new A.q(-6.5,7.4,-3)
B.h8_=new A.q(1,1.05,0.75)
B.h80=new A.q(0,76,1.1)
B.h81=new A.q(1.35,0.32,0.5)
B.h82=new A.q(-4.6,-2,1.2)
B.h84=new A.q(0,40,1.4)
B.aWR=new A.q(0.6,32,34)
B.h85=new A.q(-3,36,10.6)
B.h86=new A.q(0,14.5,-1.5)
B.h88=new A.q(0,0.2,0)
B.h8a=new A.q(2.5,30,2.5)
B.h8b=new A.q(160,1.2,120)
B.h8c=new A.q(7,40,2.4)
B.h8d=new A.q(30,26,0.6)
B.h8e=new A.q(3.4,3.25,-7.85)
B.h8f=new A.q(72.8,0,55)
B.h8g=new A.q(0.5,62,30)
B.h8h=new A.q(0,76,37.8)
B.h8i=new A.q(146.4,62,120)
B.h8j=new A.q(34.6,86,7)
B.h8k=new A.q(2.2,1.1,6.4)
B.h8l=new A.q(17,98,77.2)
B.h8m=new A.q(3,1.55,-7.1)
B.h8n=new A.q(0.4,3,3)
B.aWT=new A.q(0,-0.1,0.1)
B.h8o=new A.q(-52,96,-60.6)
B.h8p=new A.q(0,0,0.04)
B.h8r=new A.q(0,14,-19.3)
B.h8s=new A.q(2.4,11.6,-3.6)
B.h8t=new A.q(4,11,3.5)
B.h8v=new A.q(5,8.6,-2.25)
B.h8w=new A.q(0,-1.78,0.3)
B.h8x=new A.q(2.2,2.2,1.8)
B.h8y=new A.q(0,1.9,-1.2)
B.h8z=new A.q(0,56,2.1)
B.h8A=new A.q(0.26,0.04,0.02)
B.h8B=new A.q(-2.4,11.6,-3.6)
B.h8C=new A.q(11.25,0,-2.25)
B.h8D=new A.q(0,3.7,1.4)
B.h8E=new A.q(1,-1.8,2.4)
B.h8F=new A.q(-26,43,3.8)
B.h8G=new A.q(-60,15,3.6)
B.h8H=new A.q(20,0.6,-50)
B.h8I=new A.q(-11.8,4,0)
B.h8J=new A.q(1.2,4,7)
B.h8K=new A.q(11.2,4.7,-6)
B.h8L=new A.q(66,43,3.8)
B.aWU=new A.q(0,2.8,0)
B.h8M=new A.q(24,8,0.05)
B.aWV=new A.q(86,52,1.4)
B.h8O=new A.q(0.12,0,0)
B.h8P=new A.q(2.7,0.22,0.45)
B.h8Q=new A.q(1.1,1.1,0.03)
B.h8R=new A.q(-50,0.6,-50)
B.h8S=new A.q(-26,94,0.6)
B.h8T=new A.q(0,32,320.9)
B.h8U=new A.q(0,5,1.1)
B.h8V=new A.q(4.6,5.4,3.2)
B.h8W=new A.q(3.4,3.55,-7.85)
B.h8Y=new A.q(71.6,-22,62)
B.h8Z=new A.q(0,3,1.2)
B.h9_=new A.q(22,18,0.4)
B.h90=new A.q(-20,0.6,50)
B.aWW=new A.q(1.5,18,3.5)
B.h93=new A.q(3.5,3.1,-7.15)
B.aWX=new A.q(0,1.5,-0.9)
B.h94=new A.q(-0.28,0.55,-0.8)
B.h95=new A.q(0,-0.2,0.24000000000000002)
B.h97=new A.q(0,-3.3,4)
B.h98=new A.q(46,0.8,46)
B.h99=new A.q(1,-0.2,0.14)
B.h9a=new A.q(0,137,1.6)
B.aWY=new A.q(84,3,0.5)
B.h9b=new A.q(-1.9,0,-2.25)
B.h9c=new A.q(0,-0.9,1.1)
B.h9d=new A.q(1.1,0.4,0.6)
B.h9e=new A.q(8.2,1.05,-6.7)
B.h9f=new A.q(0,9.6,11.6)
B.h9h=new A.q(34.6,34,69)
B.h9j=new A.q(-149.3,38,128)
B.h9k=new A.q(0.07,0.4,0.03)
B.h9l=new A.q(2,3.8,0.08)
B.h9m=new A.q(31,83,0.9)
B.h9n=new A.q(64,40,-3.2)
B.h9o=new A.q(0.95,0.62,2.2)
B.aWZ=new A.q(1.4,3,112)
B.h9p=new A.q(1,33.4,-4.9)
B.h9q=new A.q(0,0.3,314)
B.aX_=new A.q(302.4,140,1.2)
B.h9r=new A.q(0,46.6,0.8)
B.h9t=new A.q(6.5,6.4,13)
B.h9u=new A.q(0,0,-8.8)
B.h9v=new A.q(0,0.7,-1)
B.h9y=new A.q(-11.9,0,8)
B.h9z=new A.q(7,0,1.5)
B.h9A=new A.q(-8.4,0.7,-6.4)
B.h9B=new A.q(-3.2,1.45,-7.78)
B.h9C=new A.q(34,25,21.6)
B.h9D=new A.q(0,41,0.45)
B.h9E=new A.q(-6.575,0,-0.25)
B.h9F=new A.q(1.7,1,0.6)
B.aX1=new A.q(0,0,-2.3)
B.aaU=new A.q(-13,12.5,0)
B.h9I=new A.q(0,0,0.62)
B.h9J=new A.q(-60,62,3.6)
B.h9K=new A.q(0.2,-0.3,-0.4)
B.aX2=new A.q(10.85,18,0.5)
B.h9L=new A.q(120.1,174,-30)
B.h9M=new A.q(0.6,70,0.6)
B.h9N=new A.q(1.4,1.3,0.02)
B.h9O=new A.q(30,1.4,0.4)
B.h9P=new A.q(6.3,1.5,-7.2)
B.h9Q=new A.q(8,14,1.2)
B.h9R=new A.q(-120.1,150,-60)
B.h9S=new A.q(0,5,11.2)
B.aX3=new A.q(0,0.62,2.85)
B.h9T=new A.q(37.5,23,0)
B.aX4=new A.q(0.05,8,16)
B.h9U=new A.q(0,-1.2,5)
B.h9V=new A.q(0.2,-2,2.6)
B.h9X=new A.q(0,-3.15,4.2)
B.h9Z=new A.q(11.2,2.4,-5.18)
B.ha0=new A.q(-1,-0.2,0.14)
B.ha1=new A.q(0.97,0.9,1.04)
B.ha2=new A.q(-17,83,77.2)
B.ha3=new A.q(0.5,8,6)
B.ha4=new A.q(1.2,1.2,0.3)
B.aX6=new A.q(2,0.08,2.4)
B.ha6=new A.q(9.5,13.5,1.4)
B.ha7=new A.q(2.2,18,2.2)
B.ha8=new A.q(22,0.2,0.8)
B.ha9=new A.q(-0.32,0,0.5)
B.aX7=new A.q(1.3,4,0.8)
B.hab=new A.q(-26,89,3.8)
B.hac=new A.q(-120.1,174,-30)
B.had=new A.q(0.8,0.55,0.05)
B.hae=new A.q(0.14,0.35,17)
B.haf=new A.q(1.4,2.4,0.3)
B.hag=new A.q(0,11,8.2)
B.hah=new A.q(52,96,-60.6)
B.hai=new A.q(26,146,0.6)
B.haj=new A.q(3.2,5,0.8)
B.hak=new A.q(0,24,-0.6)
B.hal=new A.q(40,1.6,14)
B.hao=new A.q(150,0.6,90)
B.hap=new A.q(0,11.5,19.3)
B.haq=new A.q(0,1.95,0.31)
B.har=new A.q(150,1.2,112)
B.aX8=new A.q(0.75,4.5,0.1)
B.hat=new A.q(0.12,0,0.05)
B.hav=new A.q(-34.6,34,69)
B.haw=new A.q(-11.5,4,-1.5)
B.hax=new A.q(9,1.2,9)
B.hay=new A.q(120.1,150,-60)
B.haz=new A.q(0,-0.5,0)
B.haC=new A.q(0,37.5,-4.9)
B.haD=new A.q(-2.4,14,8)
B.haE=new A.q(-190,160,-14.2)
B.haF=new A.q(0,0,3.6)
B.haG=new A.q(3,14,1.5)
B.haH=new A.q(5.5,8.5,0.5)
B.aX9=new A.q(0.05,8,9.6)
B.haJ=new A.q(1.5,94,3.5)
B.haK=new A.q(0,8.2,0)
B.haL=new A.q(-120.6,96,-52)
B.haN=new A.q(4,94,0.4)
B.aXa=new A.q(1.4,8,1)
B.haO=new A.q(120.6,96,-8)
B.haP=new A.q(114,30,0.4)
B.haQ=new A.q(3.7,1.2,-7.1)
B.haR=new A.q(1.5,1.35,1.5)
B.haS=new A.q(8.2,0.05,-6.7)
B.haT=new A.q(0,-0.3,0)
B.haU=new A.q(6.575,0,-0.25)
B.aXb=new A.q(150.6,70,160)
B.haV=new A.q(52,140,-60.6)
B.aXc=new A.q(0,1.8,0)
B.haW=new A.q(3,3.21,-7.2)
B.haX=new A.q(100,14,0.6)
B.haY=new A.q(9,5,0.6)
B.hb_=new A.q(26,94,0.6)
B.hb0=new A.q(9.8,5,-7.75)
B.aXd=new A.q(0,2.4,0)
B.hb1=new A.q(1.5,3.5,112)
B.hb2=new A.q(-8,31.5,6)
B.hb4=new A.q(22,7,34.4)
B.hb5=new A.q(0,9.6,-1.5)
B.hb6=new A.q(3,1.85,-7.1)
B.hb8=new A.q(40,1.4,60)
B.hbb=new A.q(16,0.4,16)
B.aaW=new A.q(13,12.5,0)
B.hbd=new A.q(0.34,0.66,0.9)
B.hbf=new A.q(0.9,1.08,0.98)
B.hbg=new A.q(12,0.4,6)
B.hbh=new A.q(-6.5,7.9,-3)
B.hbi=new A.q(1.5,1.5,0.05)
B.hbj=new A.q(-6.5,5,-3)
B.hbk=new A.q(58.4,1.6,50)
B.hbl=new A.q(1.05,0.95,1)
B.hbm=new A.q(16,22,0.6)
B.hbn=new A.q(0.02,0.28,0.05)
B.hbp=new A.q(0,0.7,1)
B.hbq=new A.q(26,22,1.4)
B.hbr=new A.q(0,9.5,-7)
B.aXf=new A.q(13,8.6,9.5)
B.hbs=new A.q(-140,15,3.6)
B.hbt=new A.q(1.3,0.95,0.6)
B.hbu=new A.q(5,5,0.8)
B.hbv=new A.q(-3.6,4,-7.76)
B.hbw=new A.q(0.82,0.9,0.05)
B.hbx=new A.q(0,-5.5,-0.25)
B.hby=new A.q(0,11,21.2)
B.hbA=new A.q(34.6,86,69)
B.hbB=new A.q(64,50,6.6)
B.hbC=new A.q(-34,40,36.4)
B.hbD=new A.q(2.2,1.8,2)
B.hbF=new A.q(190,160,-14.2)
B.hbH=new A.q(0,0.6,0)
B.hbK=new A.q(1.9,0,0)
B.hbL=new A.q(0.45,0.72,0.06)
B.hbM=new A.q(95,26,1.8)
B.hbO=new A.q(14,0.4,7)
B.hbP=new A.q(64,24,-3.2)
B.aaX=new A.q(1.2,140,320)
B.hbQ=new A.q(1,4.5,0.8)
B.hbR=new A.q(0,9.2,0)
B.hbS=new A.q(120.1,150,0)
B.hbT=new A.q(0,0.03,0)
B.hbU=new A.q(-100,100,320)
B.hbW=new A.q(-100,400,350)
B.hbX=new A.q(-10,22,0)
B.hc_=new A.q(-110,96,120)
B.hc0=new A.q(-112,38,24)
B.hc1=new A.q(-120,0,-30)
B.hc2=new A.q(-120,300,-320)
B.hc3=new A.q(-125,16,30)
B.hc4=new A.q(-13,15,2)
B.hc5=new A.q(-144,82,45)
B.hc6=new A.q(-147,54,45)
B.hc7=new A.q(-148,56,120)
B.hc8=new A.q(-14,17,4)
B.hc9=new A.q(-14,20,-28)
B.hca=new A.q(-18,6,0)
B.qV=new A.q(-1,0,0)
B.hcb=new A.q(-1,0,-8)
B.hcc=new A.q(-200,0,500)
B.hcd=new A.q(-200,0,900)
B.hce=new A.q(-200,100,480)
B.hcg=new A.q(-20,4,26)
B.hch=new A.q(-20,92,26)
B.hci=new A.q(-22,14,0)
B.hcj=new A.q(-24,38,0)
B.hck=new A.q(-260,330,-80)
B.hcl=new A.q(-3000,0,3000)
B.hcm=new A.q(-3000,0,-3000)
B.hcp=new A.q(-30,36,38)
B.hcq=new A.q(-30,40,100)
B.hcr=new A.q(-30,44,33)
B.hct=new A.q(-330,40,760)
B.hcu=new A.q(-34,34,38)
B.hcv=new A.q(-34,40,38)
B.hcw=new A.q(-37,16,0)
B.hcx=new A.q(-37,50,38)
B.hcy=new A.q(-380,470,1300)
B.hcz=new A.q(-390,144,-120)
B.hcA=new A.q(-390,70,-120)
B.hcB=new A.q(-40,12,150)
B.hcC=new A.q(-40,30,164)
B.hcE=new A.q(-42,-34,96)
B.hcF=new A.q(0,-0.6,22)
B.hcG=new A.q(-4,20,0)
B.hcH=new A.q(-4,22,150)
B.aXg=new A.q(-4,22,8)
B.hcK=new A.q(-5,17,0)
B.hcL=new A.q(0,36.5,0)
B.hcM=new A.q(-60,28,56)
B.hcP=new A.q(-60,50,1)
B.hcQ=new A.q(-60,70,6)
B.hcR=new A.q(-700,430,1150)
B.hcT=new A.q(-70,0,34)
B.hcU=new A.q(-70,95,34)
B.hcV=new A.q(-70,96,34)
B.hcW=new A.q(-720,360,320)
B.hcX=new A.q(-72,6,55)
B.hcY=new A.q(-80,12,30)
B.hcZ=new A.q(-80,25,30)
B.hd2=new A.q(-8,24,0)
B.hd3=new A.q(-8,25,0)
B.hd4=new A.q(-8,42,-5)
B.hd5=new A.q(-8,-28,104)
B.hd6=new A.q(-8,-39,96)
B.hd8=new A.q(0,0.35,0.78)
B.hd9=new A.q(0.6,6,14)
B.hda=new A.q(-11.9,0,-8)
B.hdb=new A.q(32,3,0.5)
B.hdc=new A.q(38,1.4,12)
B.hdd=new A.q(25,0.5,66)
B.hde=new A.q(-8.4,1.9,-7.2)
B.hdf=new A.q(1.6,8,5)
B.hdg=new A.q(0.8,1.6,1.4)
B.hdi=new A.q(25,6,0.2)
B.aXh=new A.q(1.25,1,0.1)
B.hdj=new A.q(11.2,0,-6)
B.hdk=new A.q(-146.4,62,172)
B.hdl=new A.q(0.4,7,9)
B.hdm=new A.q(1.2,1.1,0.8)
B.hdo=new A.q(150,49,1.2)
B.hdp=new A.q(41.5,11,-12)
B.hdq=new A.q(62,0.2,42)
B.hdr=new A.q(4.6,1.5,-3.6)
B.hds=new A.q(0,-0.7,0.8)
B.hdt=new A.q(0.6,9,9)
B.hdu=new A.q(8.9,1.9,0.9)
B.hdv=new A.q(42,84,1.2)
B.hdw=new A.q(-34.6,34,7)
B.hdx=new A.q(60,15,3.6)
B.aXi=new A.q(1.6,58,66)
B.hdy=new A.q(0,-1.55,-0.6)
B.hdz=new A.q(36.2,32.2,0.6)
B.hdA=new A.q(1.78,4.25,0.08)
B.hdB=new A.q(27,0.6,19)
B.hdC=new A.q(1.4,52,96)
B.hdD=new A.q(0,5.5,-0.25)
B.hdE=new A.q(28,2.5,26)
B.hdF=new A.q(0,0.7,0)
B.hdG=new A.q(-1.2,-1.6,2.2)
B.hdH=new A.q(11,25,0.3)
B.hdI=new A.q(17,83,77.2)
B.aXj=new A.q(-12,14,19.4)
B.aXk=new A.q(13,8.6,-9.5)
B.aXl=new A.q(0.05,0.12,0.03)
B.aXm=new A.q(8.2,0.95,-6.7)
B.hdJ=new A.q(40,1.2,22)
B.hdK=new A.q(0.7,1.5,-7.2)
B.hdL=new A.q(0,15.3,-3.6)
B.hdM=new A.q(0,-1,4.9)
B.hdN=new A.q(62,2.4,8)
B.hdO=new A.q(-1.6,11,6)
B.hdP=new A.q(0.1,0,0)
B.hdQ=new A.q(0.32,0,0.5)
B.hdR=new A.q(2200,0.4,720)
B.hdS=new A.q(1.6,11,6)
B.hdT=new A.q(-10,0.5,150)
B.hdV=new A.q(-60,50,1.8)
B.hdW=new A.q(-0.9,0,4.4)
B.hdX=new A.q(-6.5,7.2,-3)
B.hdZ=new A.q(300,6,1.6)
B.he_=new A.q(6.2,0.18,2.1)
B.he0=new A.q(76,64,0.6)
B.he1=new A.q(7.1,18,-3)
B.he3=new A.q(0.45,1.3,0.9)
B.he4=new A.q(74,1.2,90)
B.he5=new A.q(36,1.6,12)
B.he6=new A.q(15.5,2.6,0)
B.he8=new A.q(-8,-47.8,70)
B.he9=new A.q(14,1.5,3.5)
B.aXn=new A.q(17,24,0.3)
B.hea=new A.q(5.2,3.9,-7.82)
B.heb=new A.q(0,0.7,2.4)
B.hec=new A.q(0,0.3,0)
B.aXo=new A.q(2.3,7,0.5)
B.hee=new A.q(0,66,1.8)
B.aXp=new A.q(-13,8.6,9.5)
B.heh=new A.q(0.6,28,52)
B.hei=new A.q(6.5,6,14)
B.hej=new A.q(0,4.2,2.4)
B.hek=new A.q(0,-1.99,0.14)
B.hel=new A.q(0.4,36,34)
B.hen=new A.q(4.6,-2,1.2)
B.heo=new A.q(11.5,4,-1.5)
B.hep=new A.q(0,14,19.3)
B.aXq=new A.q(0,0,-2.4)
B.heq=new A.q(1.3,0.8,0.9)
B.her=new A.q(-36.2,60,38)
B.hes=new A.q(110,18,0.6)
B.het=new A.q(0,-1.78,0.52)
B.heu=new A.q(0.12,0.1,0.03)
B.hev=new A.q(9.8,5,-7.58)
B.hew=new A.q(14,1.5,5)
B.hex=new A.q(0.95,2.3,0.5)
B.aXr=new A.q(0.5,1.4,2)
B.hey=new A.q(3.5,0.15,-7.2)
B.aXs=new A.q(64,2,1.2)
B.hez=new A.q(1.2,26.4,20)
B.heA=new A.q(-3.6,4,-7.82)
B.heB=new A.q(-3,37,-4.9)
B.heC=new A.q(0.3,2,36)
B.heF=new A.q(24,0.8,6.5)
B.heG=new A.q(-28,76,38.3)
B.heI=new A.q(22,0.5,5)
B.heJ=new A.q(9,10,0.6)
B.heK=new A.q(0,22,2.1)
B.heN=new A.q(0,56,0.5)
B.heO=new A.q(150,1.2,70)
B.heP=new A.q(0,-5.5,-3.4)
B.heQ=new A.q(58,104,31.7)
B.heR=new A.q(100,52,2.4)
B.heS=new A.q(2.1,0.4,0.5)
B.heT=new A.q(0,14.7,-1.5)
B.aXt=new A.q(0.4,29,31)
B.heU=new A.q(0,0.8,-1.3)
B.heV=new A.q(-19.5,-1,-1.5)
B.heW=new A.q(80,0.5,60)
B.heX=new A.q(6.85,4,-3.2)
B.heY=new A.q(52,58,0.6)
B.heZ=new A.q(0,14.4,0)
B.aXv=new A.q(0.12,3,1.9)
B.hf_=new A.q(0.06,0.62,0.8)
B.hf0=new A.q(0,18.5,0)
B.hf1=new A.q(50,0.6,-50)
B.hf3=new A.q(9.55,5.7,-7.5)
B.hf5=new A.q(-400,80,-19.2)
B.hf6=new A.q(0.8,2.4,0.3)
B.aXw=new A.q(0,0.7,2)
B.hf7=new A.q(3.5,26,15)
B.hf8=new A.q(0.95,0.62,1)
B.aXx=new A.q(0,24,40.2)
B.hf9=new A.q(0.8,1.1,1.2)
B.hfa=new A.q(0,51.5,20)
B.hfb=new A.q(0,0.3,4.3)
B.hfc=new A.q(-20,0.5,145)
B.hfd=new A.q(2.4,14,8)
B.hfe=new A.q(0,47.25,-2.25)
B.hff=new A.q(-8,31.5,-6)
B.hfg=new A.q(0.5,0.5,0.04)
B.hfh=new A.q(12.5,39,0.6)
B.hfi=new A.q(140,62,3.6)
B.hfj=new A.q(0,3,0.9)
B.hfk=new A.q(9,0.7,15)
B.hfl=new A.q(3,36,10.6)
B.hfm=new A.q(25,10,0.2)
B.hfo=new A.q(0.14,8,0.3)
B.hfp=new A.q(1.9,0.05,1.35)
B.hfs=new A.q(0.6,0.12,0.03)
B.hft=new A.q(-10.7,1.2,-6.4)
B.hfu=new A.q(-52,140,-60.6)
B.hfv=new A.q(-71.2,46.6,55)
B.hfw=new A.q(5,4.5,3)
B.hfx=new A.q(120,36,1.4)
B.hfy=new A.q(0,3.9,2.5)
B.aXy=new A.q(0,3.7,2.6)
B.VF=new A.FS(0,"hot")
B.VG=new A.FS(1,"neutral")
B.VH=new A.FS(2,"ground")
B.aXN=new A.FS(3,"unknown")
B.eNH=new C.z(-20,46)
B.hju=new A.Az(B.eNH,0,2.4,"Having the drink",!0,!1,!1,"")
B.ew3=new C.z(34,62)
B.hjv=new A.Az(B.ew3,3.141592653589793,2.2,"Picking up the remote",!1,!0,!1,"")
B.hjD=new A.aBK(null)
B.huy=new A.eZV(0,"material")})();(function staticFields(){$.dS=0
$.ajm=!1
$.ajn=!0
$.hdS=!1
$.h12=C.U(x.N,C.at("MC"))
$.h11=C.U(x.N,C.at("aA<MC?>"))
$.h10=C.aX(x.N)
$.i7v=C.U(x.N,C.at("ai<+(q,q)>"))
$.i7t=C.U(x.N,x.dg)
$.htE=C.U(x.N,C.at("iM"))
$.ajX=null
$.Eb=null
$.W9=null
$.hk0=null
$.fsK=C.U(x.S,C.at("ai<kp>"))
$.ahH="xbot"})();(function lazyInitializers(){var w=a.lazyFinal
w($,"irQ","hBK",()=>C.bPv())
w($,"is1","hcc",()=>C.bPv())
w($,"imK","hzf",()=>new A.aTC($.ax()))
w($,"iuo","bFL",()=>{var v,u,t=C.at("O<aTB>"),s=C.a([],t)
for(v=0;v<2;++v){u=v*9
D.d.v(s,C.a([A.h0c(v,175,u),A.h0c(v,612,u+14),A.h0c(v,1013,u+7)],t))}return s})
w($,"iu0","h_n",()=>C.a([A.hp0(-80,80,400,565),A.hp0(-80,80,715,885)],C.at("O<bxl>")))
w($,"imL","aRE",()=>A.hF5())
w($,"iun","hD8",()=>{var v=C.a([A.vS("Wire a standard 120 volt receptacle: black to brass, white to silver, bare copper to green.",B.RG,B.dpZ,"outlet","",!0,B.It,B.cXA,!1,"Wall outlet",new A.fCD()),A.vS("A single-pole switch breaks the hot wire to the light: two black wires go on the two brass screws.",B.dbK,B.dde,"switch","",!0,B.It,B.cVZ,!1,"Light switch",new A.fCE()),A.vS("A GFCI protects you near water. Power comes in on LINE. The LOAD screws (covered with tape) feed other outlets.",B.RG,B.dg9,"gfci","",!0,B.It,B.deG,!1,"GFCI outlet",new A.fCF()),A.vS("Join the house wires to the fixture wires with wire nuts: black to black, white to white, ground to ground.",B.RG,B.d6K,"light","",!0,B.It,B.drH,!1,"Ceiling light",new A.fCG()),A.vS("A fan hangs from a strong fan-rated box. Join black, white and ground with wire nuts, then fasten the canopy.",B.RG,B.de3,"fan","",!0,B.It,B.d2H,!1,"Ceiling fan",new A.fCH())],C.at("O<T3>"))
D.d.v(v,$.h_t())
return v})
w($,"iup","h_t",()=>{var v="switch",u="outlet"
return C.a([A.vS("Breaks BOTH hot legs of a 240 volt circuit at once: water heaters and baseboard heat.",B.duE,B.c5L,"switch2p",v,!0,B.dx7,B.d6W,!0,"Double-pole switch (240 V)",new A.fCI()),A.vS("One light, two switches. One COMMON screw and two TRAVELER screws; it pairs with a second three-way.",B.dnV,B.cXj,"switch3",v,!0,B.dxp,B.deJ,!0,"Three-way switch",new A.fCJ()),A.vS("Sits in the middle of two three-way switches: two traveler wires in on one side, two out on the other.",B.dt3,B.dhB,"switch4",v,!0,B.dx8,B.dmK,!0,"Four-way switch",new A.fCK()),A.vS("Needs a NEUTRAL wire in the box as well: hot in, hot out to the light, neutral and ground.",B.d1s,B.d4i,"switchsmart",v,!0,B.dxq,B.d1J,!0,"Smart, motion or timer switch",new A.fCL()),A.vS("Two switches in one device: one hot feed is split between them, and two separate lights come out.",B.cKd,B.dkZ,"switchcombo",v,!0,B.dz6,B.cxh,!0,"Combination (double) switch",new A.fCM()),A.vS("The tab between the brass screws is broken off: the top half is switched, the bottom half is always on.",B.deC,B.cwG,"split",u,!0,B.dxr,B.djW,!0,"Split (half-switched) outlet",new A.fCN()),A.vS("Two hots, a neutral and a ground: the dryer 14-30, and the range and car charger 14-50.",B.dqG,B.d06,"v240four",u,!0,B.dxo,B.cOB,!0,"4-wire 240 V outlet (dryer, range, EV)",new A.fCO()),A.vS("Two hots and a neutral, with no separate ground: the old 10-30 and 10-50, from before 1996.",B.d7H,B.dtz,"v240three",u,!1,B.dz4,B.dsL,!0,"3-wire 240 V outlet (old dryer or range)",new A.fCP()),A.vS("Two hots and a ground, and no neutral at all: the 6-series outlets.",B.drm,B.dbx,"v240only",u,!0,B.dxE,B.dq4,!0,"240 V only outlet (window AC, welder)",new A.fCQ()),A.vS("Hot and neutral as usual, but the ground goes on its own wire straight back to the panel: shops and offices.",B.dtn,B.dcD,"isolated",u,!0,B.dyv,B.d85,!0,"Isolated-ground outlet",new A.fCR())],C.at("O<T3>"))})
w($,"iuA","Hf",()=>{var v,u=C.a([],x.n)
for(v=0;v<10;++v)u.push(-72+16*v)
return u})})()};
(a=>{a["pGGmD6NXG/bO7MTqCNPoz+gBHAk="]=a.current})($__dart_deferred_initializers__);