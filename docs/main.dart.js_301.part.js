((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,C,D,Y,F,Z,N,T,A_,U,L,A0,O,G,A1,A2,V,W,P,A3,A4,Q,I,A5,M,A={
zH(d,e,f){var w=d.a,v=d.b,u=d.c
return new A.E(w+(e.a-w)*f,v+(e.b-v)*f,u+(e.c-u)*f)},
bBO(d,e){var w=Math.cos(e),v=Math.sin(e),u=d.a,t=d.c
return new A.E(u*w+t*v,d.b,-u*v+t*w)},
tS(d,e,f,g){var w,v,u,t,s,r,q,p,o=new A.fL0(Math.cos(e),Math.sin(e)),n=new A.fKZ(f),m=new A.fL_(n,e,o,g),l=new A.fKY(n,e,o),k=C.a([],x.z)
for(w=d.length,v=x.o,u=0;u<d.length;d.length===w||(0,C.L)(d),++u){t=d[u]
s=C.a([],v)
for(r=t.a,q=r.length,p=0;p<r.length;r.length===q||(0,C.L)(r),++p)s.push(m.$1(r[p]))
k.push(new A.mt(s,l.$1(t.b),t.c,t.d,t.e,t.f,t.r,t.w,t.x,t.y,t.z))}return k},
Gh(d,e,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
if(d.length<3)return d
w=C.a([D.d.gL(d)],x.o)
for(v=1;u=v+1,u<d.length;v=u){t=d[v-1]
s=d[v]
r=d[u]
q=s.a
p=s.b
o=s.c
n=new A.E(q-t.a,p-t.b,o-t.c)
m=new A.E(r.a-q,r.b-p,r.c-o)
l=Math.min(e,n.gTc()*0.5)
k=Math.min(e,m.gTc()*0.5)
j=n.goy(0)
i=new A.E(q-j.a*l,p-j.b*l,o-j.c*l)
j=m.goy(0)
h=new A.E(q+j.a*k,p+j.b*k,o+j.c*k)
for(g=0;g<=a0;++g){f=g/a0
w.push(A.zH(A.zH(i,s,f),A.zH(s,h,f),f))}}w.push(D.d.gal(d))
return w},
agJ(a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2
if(a3.length<3)return a3
w=C.a([],x.o)
for(v=0;u=v+1,t=a3.length,u<t;v=u){s=v===0?a3[v]:a3[v-1]
r=a3[v]
q=a3[u]
p=v+2
o=p<t?a3[p]:q
for(t=s.a,p=r.a,n=q.a,m=o.a,l=s.b,k=r.b,j=q.b,i=o.b,h=s.c,g=r.c,f=q.c,e=o.c,d=0;d<a4;++d){a0=d/a4
a1=a0*a0
a2=new A.fKS(a0,a1,a1*a0)
w.push(new A.E(a2.$4(t,p,n,m),a2.$4(l,k,j,i),a2.$4(h,g,f,e)))}}w.push(D.d.gal(a3))
return w},
hJV(d){var w,v,u,t,s,r,q,p,o,n
for(w=d.length,v=!0,u=!0,t=0;t<w;++t)if(d[t].c>=0.5)u=!1
else v=!1
if(v)return d
if(u)return B.d2F
s=C.a([],x.o)
for(r=0;w=d.length,r<w;){q=d[r];++r
p=d[r%w]
w=q.c
o=w>=0.5
n=p.c
if(o)s.push(q)
if(o!==n>=0.5)s.push(A.zH(q,p,(0.5-w)/(n-w)))}return s},
hKI(a5,a6,a7,a8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=a7[0],a3=a2.a,a4=a2.b
a2=a7[1]
w=a2.a
v=a2.b
a2=a7[2]
u=a2.a
t=a2.b
a2=a7[3]
s=a2.a
r=a2.b
q=w-u
p=s-u
o=a3-w+u-s
n=v-t
m=r-t
l=a4-v+t-r
if(Math.abs(o)<1e-9&&Math.abs(l)<1e-9){k=w-a3
j=s-a3
i=v-a4
h=r-a4
g=0
f=0}else{e=q*m-p*n
if(Math.abs(e)<1e-9)return
g=(o*m-p*l)/e
f=(q*l-o*n)/e
k=w-a3+g*w
j=s-a3+f*s
i=v-a4+g*v
h=r-a4+f*r}d=a6.d
a0=a6.e
a2=new Float64Array(16)
a2[15]=1
a2[14]=0
a2[13]=a4
a2[12]=a3
a2[11]=0
a2[10]=1
a2[9]=0
a2[8]=0
a2[7]=f/a0
a2[6]=0
a2[5]=h/a0
a2[4]=j/a0
a2[3]=g/d
a2[2]=0
a2[1]=i/d
a2[0]=k/d
a1=a5.a
J.bA(a1.save())
a5.aw(0,a2)
a1.clipRect(C.c1(new C.a9(0,0,d,0+a0)),$.qJ()[1],!0)
a6.c.$3(a5,new C.at(d,a0),a8)
a1.restore()},
E:function E(d,e,f){this.a=d
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
t2:function t2(d,e,f){this.a=d
this.b=e
this.c=f},
zo:function zo(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
WI:function WI(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
jf:function jf(d){var _=this
_.a=d
_.c=_.b=0
_.d=1
_.e=0
_.f=2
_.r=!1
_.x=_.w=0},
bVs:function bVs(d,e){this.a=d
this.b=e},
bVt:function bVt(d){this.a=d},
bVr:function bVr(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
bVu:function bVu(d,e,f){this.a=d
this.b=e
this.c=f},
bVq:function bVq(d,e){this.a=d
this.b=e},
bVv:function bVv(d,e,f){this.a=d
this.b=e
this.c=f},
fL0:function fL0(d,e){this.a=d
this.b=e},
fKZ:function fKZ(d){this.a=d},
fL_:function fL_(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fKY:function fKY(d,e,f){this.a=d
this.b=e
this.c=f},
fKS:function fKS(d,e,f){this.a=d
this.b=e
this.c=f},
AE:function AE(d,e,f,g,h){var _=this
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
_.bt$=_.bM$=0},
bGi:function bGi(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bGh:function bGh(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bPx:function bPx(d){this.a=d},
b3N:function b3N(d,e,f,g,h,i,j,k,l,m){var _=this
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
clW:function clW(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
clX:function clX(d,e){this.a=d
this.b=e},
clS:function clS(){},
clT:function clT(d,e,f){this.a=d
this.b=e
this.c=f},
clV:function clV(d,e){this.a=d
this.b=e},
clU:function clU(d){this.a=d},
C0:function C0(d,e,f,g,h,i,j,k,l){var _=this
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
ats:function ats(d,e,f,g,h,i,j,k,l,m){var _=this
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
boX:function boX(d,e,f,g,h,i){var _=this
_.d=$
_.e=d
_.f=e
_.r=f
_.w=40
_.x=g
_.bq$=h
_.a7$=i
_.c=_.a=null},
eSu:function eSu(d){this.a=d},
eSt:function eSt(d){this.a=d},
eSq:function eSq(d){this.a=d},
eSr:function eSr(d){this.a=d},
eSs:function eSs(d){this.a=d},
eSo:function eSo(d){this.a=d},
eSp:function eSp(d,e){this.a=d
this.b=e},
aLC:function aLC(){},
fNr(d){var w,v,u=$.fNq.h(0,d)
if(u!=null)return C.f7(u,x.d)
w=B.a2Y.h(0,d)
if(w==null)return C.f7(null,x.d)
v=$.fNp.h(0,d)
if(v==null){v=new A.bOt(w,d).$0()
$.fNp.n(0,d,v)}return v},
aTF(d){var w=0,v=C.j(x.H),u
var $async$aTF=C.e(function(e,f){if(e===1)return C.f(f,v)
for(;;)switch(w){case 0:w=2
return C.b(A.fNr(d),$async$aTF)
case 2:u=J.aV(B.a2Y.ged(B.a2Y))
case 3:if(!u.C()){w=4
break}w=5
return C.b(A.fNr(u.gS(u)),$async$aTF)
case 5:w=3
break
case 4:return C.h(null,v)}})
return C.i($async$aTF,v)},
hsa(d){var w,v,u=new Float64Array(d*16)
for(w=0;w<d;++w){v=w*16
u[v+15]=1
u[v+10]=1
u[v+5]=1
u[v]=1}return u},
h0l(d,e,f){var w,v,u,t
if(d>e){w=d
v=e}else{w=e
v=d}if(w>f){u=w
w=f}else u=f
if(v>w){t=w
w=v
v=t}return(v*65536+w)*65536+u},
hsb(d,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=d.c,g=d.b===1,f=g?4:3,e=h.length
if(e===0)return
w=d.a*f
if(a0<=h[0]||e===1){for(g=d.d,v=a1.$flags|0,u=0;u<f;++u){t=g[u]
v&2&&C.ai(a1)
a1[w+u]=t}return}s=e-1
if(a0>=h[s]){for(g=d.d,v=s*f,t=a1.$flags|0,u=0;u<f;++u){r=g[v+u]
t&2&&C.ai(a1)
a1[w+u]=r}return}for(q=0;s-q>1;){p=D.o.aA(q+s,1)
if(h[p]<=a0)q=p
else s=p}if(d.e)o=0
else{v=h[q]
o=(a0-v)/(h[s]-v)}n=d.d
if(!g){for(g=q*3,v=s*3,t=a1.$flags|0,u=0;u<3;++u){r=n[g+u]
m=n[v+u]
t&2&&C.ai(a1)
a1[w+u]=r+(m-r)*o}return}for(g=q*4,v=s*4,l=0,u=0;u<4;++u)l+=n[g+u]*n[v+u]
k=l<0?-1:1
for(t=a1.$flags|0,j=0,u=0;u<4;++u){r=n[g+u]
i=r+(k*n[v+u]-r)*o
t&2&&C.ai(a1)
a1[w+u]=i
j+=i*i}j=Math.sqrt(j)
if(j>1e-9)for(u=0;u<4;++u){g=w+u
v=a1[g]
t&2&&C.ai(a1)
a1[g]=v/j}},
h0m(d,a0,a1,a2,a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
for(w=a0+4,v=a0+8,u=a0+12,t=a3.$flags|0,s=0;s<4;++s)for(r=s*4,q=a4+r,r=a2+r,p=r+1,o=r+2,n=r+3,m=0;m<4;++m){l=d[a0+m]
k=a1[r]
j=d[w+m]
i=a1[p]
h=d[v+m]
g=a1[o]
f=d[u+m]
e=a1[n]
t&2&&C.ai(a3)
a3[q+m]=l*k+j*i+h*g+f*e}},
b9l:function b9l(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
b9G:function b9G(d,e){this.b=d
this.c=e},
beH:function beH(d,e,f){this.a=d
this.b=e
this.c=f},
dgs:function dgs(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=$},
LG:function LG(d,e,f,g,h){var _=this
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
bOt:function bOt(d,e){this.a=d
this.b=e},
bOl:function bOl(){},
bOi:function bOi(d,e){this.a=d
this.b=e},
bOh:function bOh(){},
bOn:function bOn(d,e,f){this.a=d
this.b=e
this.c=f},
bOo:function bOo(d){this.a=d},
bOp:function bOp(d){this.a=d},
bOm:function bOm(d,e){this.a=d
this.b=e},
bOj:function bOj(d){this.a=d},
bOk:function bOk(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
bOs:function bOs(d){this.a=d},
bOq:function bOq(){},
bOr:function bOr(d){this.a=d},
bOu:function bOu(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
dm_:function dm_(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
daC:function daC(d,e){this.a=d
this.b=e},
h_7(d,e){var w=C.a([],x.ha),v=C.a([new A.L7(),new A.L7(),new A.L7()],x.gQ),u=C.a([],x.s),t=new C.eJ()
t.dB(e)
w=new A.aRu(d,t,w,v,u)
w.bvx(d,e)
return w},
hpG(d,e){var w,v,u,t,s,r,q,p,o=J.a5(e),n=x.Y,m=n.a(o.h(e,"wired"))
if(m==null)m=D.rd
w=n.a(o.h(e,"plumbed"))
if(w==null)w=D.rd
for(o=d.gqq(),n=o.length,v=J.a5(w),u=J.a5(m),t=0;t<o.length;o.length===n||(0,C.L)(o),++t){s=o[t]
r=""+s.a
q=u.h(m,r)
if(C.qE(q)){s.ay=!q
s.CW=null}p=v.h(w,r)
if(C.qE(p)){r=s.c
r=r==="bathroom"||r==="kitchen"}else r=!1
if(r){s.ch=!p
s.cx=null}}},
hpH(d){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=J.a5(d),j=C.aJ(k.h(d,"seed"))
j=j==null?l:D.k.N(j)
if(j==null)j=1
w=C.aJ(k.h(d,"clock"))
w=w==null?l:D.k.N(w)
v=A.h_7(j,(w==null?0:w)+7)
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
r=new A.Hf(D.k.N(C.dQ(w.h(m,"id"))),D.k.N(C.dQ(w.h(m,"res"))),C.cO(w.h(m,"kind")),C.cO(w.h(m,"msg")),D.k.N(C.dQ(w.h(m,"reward"))))
r.f=C.dQ(w.h(m,"age"))
j.push(r)}return v},
bHo(){var w=0,v=C.j(x.dy),u,t=2,s=[],r,q,p,o,n
var $async$bHo=C.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return C.b(C.az(),$async$bHo)
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
return C.i($async$bHo,v)},
aRv(){var w=0,v=C.j(x.H),u=1,t=[],s,r,q
var $async$aRv=C.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:u=3
w=6
return C.b(C.az(),$async$aRv)
case 6:s=e
w=7
return C.b(J.hC(s,"ngmy_community_v1"),$async$aRv)
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
return C.i($async$aRv,v)},
EF:function EF(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
a8L:function a8L(d){var _=this
_.a=d
_.b=25
_.d=_.c=100
_.e=!1
_.f=!0
_.r=-1},
Hf:function Hf(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=0},
L7:function L7(){this.a=-1
this.b=100
this.c=0},
aRu:function aRu(d,e,f,g,h){var _=this
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
bHm:function bHm(){},
bHj:function bHj(d){this.a=d},
bHk:function bHk(d,e){this.a=d
this.b=e},
bHl:function bHl(){},
bHn:function bHn(d){this.a=d},
bHp:function bHp(){},
a5X:function a5X(d,e){this.c=d
this.a=e},
bhQ:function bhQ(){var _=this
_.d=null
_.e=$
_.f=null
_.r=$
_.x=_.w=null
_.y=0
_.c=_.a=null},
dKa:function dKa(d,e){this.a=d
this.b=e},
dKb:function dKb(d){this.a=d},
dKn:function dKn(){},
dKh:function dKh(d,e){this.a=d
this.b=e},
dKi:function dKi(d){this.a=d},
dKg:function dKg(d){this.a=d},
dK6:function dK6(){},
dK7:function dK7(){},
dKq:function dKq(){},
dKr:function dKr(){},
dKp:function dKp(d,e){this.a=d
this.b=e},
dKo:function dKo(d,e){this.a=d
this.b=e},
dK5:function dK5(d,e){this.a=d
this.b=e},
dKc:function dKc(d,e,f){this.a=d
this.b=e
this.c=f},
dKd:function dKd(d,e,f){this.a=d
this.b=e
this.c=f},
dKe:function dKe(d,e,f){this.a=d
this.b=e
this.c=f},
dKf:function dKf(d,e){this.a=d
this.b=e},
dK9:function dK9(d,e,f){this.a=d
this.b=e
this.c=f},
dK8:function dK8(d,e,f){this.a=d
this.b=e
this.c=f},
dKk:function dKk(d,e){this.a=d
this.b=e},
dKl:function dKl(d,e){this.a=d
this.b=e},
dKm:function dKm(d){this.a=d},
dKj:function dKj(d){this.a=d},
dKs:function dKs(d){this.a=d},
dKt:function dKt(){},
abv:function abv(d,e,f){this.c=d
this.d=e
this.a=f},
bcK:function bcK(d,e){this.b=d
this.a=e},
aSC(d,e,f,g,h,i,j){return new A.a3A(g,i,h,e,f,j)},
Ai(d){return D.d.iC($.hnx(),new A.fnR(d))},
bCc(d,e){var w,v,u=d.e,t=new C.K(u,new A.fLj(),C.U(u).k("K<1,n>")).fI(0)
u=e.b
w=C.a3(u).k("bc<2>")
v=C.db(new C.bc(u,w),w.k("J.E"))
return t.da(0,v.gkV(v))},
hjr(d,e,f,g,h){var w,v
if(e.a&&e.c===0){if(e.r)return"SHOCK! The breaker was still ON and you touched a live wire. Always turn the power OFF and test the wires first."
return"STOP! The breaker is still ON, so these wires are live (120 volts). Turn the breaker OFF first. This can shock you badly."}if(e.c!==0)return"The device is already in the box. Pull it out again to change the wires."
if(!e.r&&!h&&!g.c.t(0,f))return d.r.$2(f,g)
w=e.b
v=g.a
if(w.h(0,v)!=null)return"That place already has a wire. Tap the wire to take it off first."
if(new C.bc(w,C.a3(w).k("bc<2>")).t(0,f))return"That wire is already fastened. Tap it to take it off if you want to move it."
w.n(0,v,f)
return null},
afv(b1,b2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8=null,a9=new A.fnX(b1),b0=new A.fnV(b1)
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
a6=new C.a2(w,new A.fnT(),h).gM(0)
a7=new C.a2(w,new A.fnU(),h).gM(0)
if(t>0||o>0)return B.fJa
w=u>0
if(!(w&&s>0))h=r>0&&v>0
else h=!0
if(h)return B.fJh
if(w&&r>0)return B.fJb
if(q>0||n>0)return B.fJe
if(m>0&&v<a6)return B.fJg
if(v<a6)return B.fJc
if(a7>0&&s<a7)return B.fJf
if(p===0)return B.fJ9
return B.fJd},
bxJ(d,e){var w
if(d==="light"||d==="fan")w=e.c===0?6.4:0.6
else w=e.c===0?4.7:-0.25
return w},
bzT(d,e,f){var w,v
if(d==="light"||d==="fan"){w=A.bxJ(d,f)
v=f.c===0?w-3.2:w
switch(e){case 51:return new A.E(-1.5,-0.3,v)
case 52:return new A.E(0,-0.3,v)
default:return new A.E(1.5,-0.3,v)}}w=A.bxJ(d,f)
switch(e){case 21:return new A.E(0.98,-0.2+(d==="gfci"?0.95:0.85),w-0.45)
case 22:return new A.E(0.98,-0.2+(d==="gfci"?-0.75:-0.55),w-0.45)
case 23:return new A.E(-0.98,-0.2+(d==="gfci"?0.95:0.85),w-0.45)
case 24:return new A.E(-0.98,-0.2+(d==="gfci"?-0.75:-0.55),w-0.45)
default:return new A.E(0,-1.98,w+0.52)}},
fUB(a9,b0,b1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=C.a([],x.z),a6=new A.jf(a5),a7=a9.a,a8=a7==="light"||a7==="fan"
if(b1){a6.b=1
a6.iy(B.fEZ,B.aRO,B.uS,3)
a6.iy(B.fFU,B.aRO,B.uS,3)
a6.iy(B.fHg,B.aS8,B.uS,2)
a6.iy(B.fGl,B.aS8,B.uS,2)
a6.b=2
a6.qe(B.fED,B.aRJ,B.m6,0.05,3)
a6.qe(B.fEf,B.aRJ,B.m6,0.05,3)
a6.qe(B.fE8,B.fHF,B.m6,0.05,2)}w=A.hao(a6,a7,!0)
v=new A.flV(a6,b0,a7,a8)
u=D.d.gL(w)
t=a7==="switch"
if(t){s=D.d.gal(w)
v.$5(10,u.ad(0,B.fA2),B.fHj,"blackLine",B.Ki)
v.$5(13,s.ad(0,B.fHq),B.fD_,"blackLoad",B.Ki)
v.$5(12,u.ad(0,B.fFC),B.fCu,"ground",B.x1)
a6.b=6
r=x.o
a6.jT(C.a([u.ad(0,B.aRI),B.fAn,B.TA],r),0.075,B.wL,!1,0.3,8)
a6.jT(C.a([s.ad(0,B.aRI),B.fF3,B.TA],r),0.075,B.wL,!1,0.3,8)
a6.Kj(B.TA,B.fHd,0.28,B.abD,0.18,0.3,10)}else{v.$5(10,u.ad(0,B.fD4),B.fAh,"black",B.Ki)
v.$5(11,u.ad(0,B.fE3),B.fFc,"white",B.wL)
v.$5(12,u.ad(0,B.fEm),B.fEg,"ground",B.x1)}if(a8)A.hbn(a6,a7,b0)
else A.hb2(a6,a7,A.bxJ(a7,b0),b0.w,!1)
if(b0.e&&b0.c===0){a6.b=0
a6.d=0.5
for(r=a9.f,q=r.length,p=0;p<q;++p){o=r[p]
n=A.bzT(a7,o.a,b0)
if(o.e)m=D.co
else{l=o.f
if(l==="ground")m=D.bo
else{l=l==="neutral"?D.c:B.VN
m=l}}if(a8)l=0
else{l=n.a
if(l>0.4)l=0.12
else l=l<-0.4?-0.12:0}if(a8)k=0.6
else k=Math.abs(n.a)<0.4?0.2:0
a6.iQ(new A.E(n.a+l,n.b+0,n.c+k),0.36,m,4,8,0.1)}a6.d=1}if(b0.c>=2&&!a8)A.hdq(a6,b0.w)
r=!1
if(b0.c>=2)if(b0.d)r=a7==="outlet"||a7==="gfci"
if(r)A.hSc(a6,b0.a&&!b0.w)
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
g=A.bxJ(a7,b0)
e=q?"Ceiling fan":"Ceiling light"
q=q?"The motor housing with blades. It has three wires: black (motor), white (neutral) and green (ground).":"The light fixture with a frosted dome. It has three wires: black, white and green."
d=C.F([1,B.dXg,2,B.dXu,3,new A.d1(r,"A box that holds the wire connections. Every connection must be inside a box, never loose in the wall or the ceiling."+l,new A.E(0,0,-1.2),9),4,new A.d1(k,"The yellow jacket holds three wires: black (hot), white (neutral) and bare copper (ground). Yellow means 12 gauge wire for a 20 amp circuit. White jackets are 14 gauge for 15 amps.",new A.E(-0.4,1.5,-1.8),8),5,B.dXR,10,new A.d1("Black wire: hot","The hot wire brings the power from the breaker. It is the dangerous one. "+j,new A.E(-0.8,-0.8,1.2),7),13,B.dX2,11,new A.d1("White wire: neutral","The neutral wire carries the power back to the panel. "+i,new A.E(0,-0.8,1.2),7),12,new A.d1("Bare copper wire: ground","The ground wire is a safety path. If a wire touches metal, the current runs down the ground instead of through you. "+h,new A.E(0.5,-0.8,1.2),7),6,B.dXs,20,new A.d1(f,t,new A.E(0,-0.2,g),9),21,B.dXx,22,B.dXQ,23,B.dXq,24,B.dXv,25,B.dXj,26,B.dXy,27,B.dXK,28,B.dXe,30,B.dWY,31,B.dWW,51,B.dXt,52,B.dX_,53,B.dXC,54,new A.d1(e,q,new A.E(0,0,6.4),9),55,B.dXM],x.S,x.q)
a0=C.a([],x.E)
if(b0.f&&b0.c===0)for(t=a9.f,r=t.length,p=0;p<r;++p){o=t[p]
n=A.bzT(a7,o.a,b0)
a1=o.f
A:{q="hot"===a1
if(q){l=B.exB
break A}if("neutral"===a1){l=B.eoH
break A}if("ground"===a1){l=B.erd
break A}l=B.eeC
break A}a2=l.a
if(a8){B:{if(q){k="BLACK NUT \xb7 HOT"
break B}if("neutral"===a1){k="WHITE NUT \xb7 NEUTRAL"
break B}k="GROUND"
break B}a3=k}else a3=a2
if(a8){C:{if(q){q=B.fDN
break C}if("neutral"===a1){q=B.fDI
break C}q=B.fHP
break C}a4=q}else{q=n.a
if(q>0.4)k=3.8
else k=q<-0.4?-4.2:0
a4=new A.E(k,Math.abs(q)<0.4?-3:-0.4,1)}a0.push(new A.t2(new A.E(n.a+a4.a,n.b+a4.b,n.c+a4.c),a3,l.b))}if(b0.a&&b0.c===0)a0.push(B.bQE)
return new A.zo(a5,d,a0,B.vI,null)},
hao(d,e,f){var w,v,u=e==="light"||e==="fan"
d.b=3
if(u){d.e5(B.aSa,B.aRN,2.2,B.x0,0.3,18)
d.a31(B.aRN,B.fO,2.2,B.x0,!1,!0,0.3,18)}else{d.bJ(B.aSa,B.fEK,B.x0,0.3)
d.bJ(B.fCN,B.aRA,B.x0,0.3)
d.bJ(B.fAM,B.aRA,B.x0,0.3)
d.bJ(B.fEb,B.aRS,B.x0,0.3)
d.bJ(B.fDG,B.aRS,B.x0,0.3)}w=C.a([],x.o)
v=new A.f83(d,f,w)
if(e==="switch"){v.$2(4,B.cR2)
v.$2(5,B.cPg)}else v.$2(4,B.d1j)
return w},
hjw(d,e){var w
A:{if(10===e){w=d==="switch"?"blackLine":"black"
break A}if(13===e){w="blackLoad"
break A}if(11===e){w="white"
break A}if(12===e){w="ground"
break A}w=null
break A}return w},
hb2(d,e,f,g,h){var w,v,u,t,s,r,q,p,o,n,m,l,k=new A.E(0,-0.2,f),j=e==="switch",i=e==="gfci"
if(g)w=B.wW
else w=j?B.bcb:B.Wq
v=i?3.1:2.95
d.e=0
d.b=20
if(!h){d.bJ(k.ad(0,B.fBT),new A.E(1.5,v,1.3),w,0.25)
d.e=0.15
d.b=26
u=k.ad(0,B.fBJ)
d.bJ(u,B.fHe,g?B.b9j:B.Ky,0.8)
d.bO(k.ad(0,B.fFz),B.fIx,B.E1)}d.e=0.3
d.b=27
u=k.ad(0,B.fDo)
d.bJ(u,new A.E(1.3,i?2.85:2.7,0.16),w,0.3)
if(j){d.e=0.7
d.b=28
u=k.ad(0,B.fF2)
d.bJ(u,B.fD2,g?B.wW:F.WA,0.35)
u=k.ad(0,B.fGU)
d.bJ(u,B.fGk,g?B.wW:B.acl,0.35)}else{d.e=0.6
u=i?E.arz:B.ddr
t=u.length
s=f+0.47
r=f+0.46
q=f+0.5
p=0
for(;p<t;++p){o=u[p]
d.b=27
n=-0.2+(o+0.04)
d.bO(new A.E(-0.28,n,s),B.fEJ,B.Ea)
d.bO(new A.E(0.28,n,s),B.fDt,B.Ea)
n=-0.2+(o-0.32)
d.hB(new A.E(0,n,r),new A.E(0,n,q),0.11,B.Ea,10)}if(i){d.e=0.7
d.b=28
d.bJ(k.ad(0,B.fFn),B.aRD,B.bft,0.3)
d.bJ(k.ad(0,B.fHr),B.aRD,B.aeX,0.3)}}if(h){d.e=0
return}m=i?0.95:0.85
l=i?-0.75:-0.55
u=new A.f9n(d,k)
if(!j){u.$6$taped(23,-1,m,B.acH,B.ada,i)
u.$5(24,-1,l,B.acH,B.ada)}u.$6$taped(21,1,m,B.VN,B.aer,i)
u.$5(22,1,l,B.VN,B.aer)
d.e=0.9
d.b=25
d.e5(k.ad(0,B.fE9),k.ad(0,B.fHR),0.18,B.bhm,0.7,12)
d.bO(k.ad(0,B.fDK),B.fEd,D.e9)
d.bJ(k.ad(0,B.fBZ),B.fFq,B.b6a,0.6)
d.e=0},
hbn(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k=e==="fan",j=A.bxJ(e,f)
d.e=0
d.b=55
w=j-0.3
v=j+0.3
u=k?3.3:3.5
t=f.w?B.wW:B.bcE
d.e5(new A.E(0,0,w),new A.E(0,0,v),u,t,0.45,20)
d.b=54
if(k){u=j+4.2
d.e5(new A.E(0,0,v),new A.E(0,0,u),0.45,B.b9f,0.5,10)
v=j+7.4
d.e5(new A.E(0,0,u),new A.E(0,0,v),3.6,B.Vm,0.5,18)
d.e5(new A.E(0,0,v),new A.E(0,0,j+8.6),1.6,B.bgI,0.7,14)}else{d.d=0.92
v=f.w?B.wW:B.ba8
d.iQ(new A.E(0,0,j+1.2),3.6,v,6,14,0.7)
d.d=1}d.b=54
s=[B.eoQ,B.ebK,B.evn]
for(v=x.o,r=j-3.2,q=0;q<3;++q){u=s[q]
p=f.c===0?r:j
t=u.b.a
d.jT(C.a([new A.E(t,-0.3,w),new A.E(t,-0.3,p+0.4)],v),0.07,u.a,!1,0.3,6)}if(f.c===0)for(w=[B.ei1,B.eql,B.ey3],v=f.b,q=0;q<3;++q){o=w[q]
u=o.a
n=A.bzT(e,u,f)
d.b=u
d.e=0.8
t=n.a+0
m=n.b+0
l=n.c
d.e5(new A.E(t,m,l+-0.2),new A.E(t,m,l+0.3),0.09,B.x1,0.6,6)
if(v.ai(0,u))d.Kj(new A.E(t,m,l+-0.5),new A.E(t,m,l+0.9),0.4,o.b,0.26,0.4,8)
d.e=0}},
hdq(d,e){var w
d.e=0.4
d.b=30
w=e?B.wW:B.b5n
d.bJ(B.fFh,B.aRT,w,0.3)
d.bJ(B.fEC,B.aRT,w,0.3)
d.bJ(B.fAJ,B.aS0,w,0.3)
d.bJ(B.fBf,B.fC6,w,0.3)
d.bJ(B.fHM,B.aS0,w,0.3)
d.e5(B.fDy,B.fEz,0.1,B.Ky,0.8,10)
d.e=0},
hSc(d,e){var w,v
d.b=31
for(w=0;w<2;++w){v=B.cTv[w]
d.e5(new A.E(v,0.52,0.2),new A.E(v,0.52,1.9),0.04,B.Ky,0.8,6)}d.bJ(B.fzf,B.fH5,B.b9R,0.35)
d.b8P(B.aRP,0.2,e?D.VP:B.bdj,0.9)
if(e){d.d=0.35
d.iQ(B.aRP,0.5,D.VP,4,8,0)
d.d=1}},
mi:function mi(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.e=g
_.f=h},
XF:function XF(d){var _=this
_.a=!0
_.b=d
_.c=0
_.w=_.r=_.f=_.e=_.d=!1},
zN:function zN(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
a3A:function a3A(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.d=f
_.e=g
_.f=h
_.r=i},
fp_:function fp_(){},
fp0:function fp0(){},
fp1:function fp1(){},
fp2:function fp2(){},
fp3:function fp3(){},
fnR:function fnR(d){this.a=d},
fLj:function fLj(){},
BR:function BR(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fnX:function fnX(d){this.a=d},
fnY:function fnY(d){this.a=d},
fnV:function fnV(d){this.a=d},
fnW:function fnW(d){this.a=d},
fnT:function fnT(){},
fnU:function fnU(){},
flV:function flV(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
flW:function flW(d){this.a=d},
f83:function f83(d,e,f){this.a=d
this.b=e
this.c=f},
f9n:function f9n(d,e){this.a=d
this.b=e},
bzu(d){return D.d.dL(B.a13,new A.flK(d),new A.flL())},
hjv(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h={},g=d.c
if(g==="hall"){g=C.a([],x.n)
for(w=d.w,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u){t=w[u]
if(t.a==="back")g.push(t.b)}s=g.length===0?-40:D.d.fo(g,D.uL)-19-8
r=g.length===0?40:D.d.fo(g,D.pc)+19+8
q=d.gfq(0)/2-8
g=f===0?(-q+s)/2:(r+q)/2
return new A.b6N(q-r,78,g,45)}w=d.gfq(0)
r=d.gfq(0)/2-6
if(g==="bathroom")r=14
g=C.a([],x.f)
for(v=d.w,p=v.length,u=0;u<v.length;v.length===p||(0,C.L)(v),++u){t=v[u]
if(t.a==="back"){o=t.b
g.push(new C.y(o-19,o+19))}}D.d.b_(g,new A.fLg())
n=h.a=h.b=-w/2+6
m=new A.fLh(h)
for(w=g.length,u=0;u<g.length;g.length===w||(0,C.L)(g),++u){v=g[u]
l=v.a
if(l>n)m.$2(n,Math.min(l,r))
n=Math.max(n,v.b)}if(n<r)m.$2(n,r)
k=Math.max(30,h.a-h.b-4)
j=e.e?k:Math.min(e.d,k)
i=new A.fLi().$1(j)
return new A.b6N(j,i,(h.b+h.a)/2,new A.fLf().$1(i))},
yB(d,e,f,g,h,i,j,k){var w=x.S
return new A.a44(d,e,f,g,h,i,j,k,C.a([],x._),C.a([0,0,0],x.t),C.aX(w),C.T(w,x.i),C.T(w,x.N),C.a([],x.cX))},
bPz(d){var w=new A.aTT(d)
w.c32()
return w},
hsp(d){var w=new A.aTT(7)
w.bvI(d)
return w},
i5I(d){var w,v=d.c
A:{if("bedroom"===v){w=1
break A}if("kitchen"===v||"bathroom"===v){w=2
break A}w=0
break A}return w},
a41:function a41(d,e,f,g){var _=this
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
Dp:function Dp(d,e,f){this.a=d
this.b=e
this.c=f},
px:function px(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
flK:function flK(d){this.a=d},
flL:function flL(){},
b6N:function b6N(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fLi:function fLi(){},
fLf:function fLf(){},
fLg:function fLg(){},
fLh:function fLh(d){this.a=d},
nv:function nv(d,e,f){this.a=d
this.b=e
this.c=f},
aTO:function aTO(d,e,f){this.a=d
this.b=e
this.c=f},
a44:function a44(d,e,f,g,h,i,j,k,l,m,n,o,p,q){var _=this
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
bOZ:function bOZ(){},
aTT:function aTT(d){var _=this
_.a=""
_.b=d
_.c=!1
_.d=$
_.e=0},
bPA:function bPA(){},
bPB:function bPB(){},
bPF:function bPF(){},
bPE:function bPE(){},
bPD:function bPD(){},
bPC:function bPC(){},
aZh(d,e,f){return new A.N4(f,d,e,null)},
N4:function N4(d,e,f,g){var _=this
_.d=d
_.f=e
_.r=f
_.a=g},
aCs:function aCs(d,e,f,g){var _=this
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
_.c=_.a=null},
e2s:function e2s(){},
e2p:function e2p(d){this.a=d},
e2q:function e2q(d){this.a=d},
e2r:function e2r(d){this.a=d},
e1O:function e1O(d,e,f){this.a=d
this.b=e
this.c=f},
e1P:function e1P(d){this.a=d},
e1N:function e1N(d){this.a=d},
e1Q:function e1Q(d,e){this.a=d
this.b=e},
e1d:function e1d(d,e){this.a=d
this.b=e},
e1Y:function e1Y(d){this.a=d},
e1n:function e1n(d,e){this.a=d
this.b=e},
e1o:function e1o(d,e){this.a=d
this.b=e},
e1p:function e1p(d,e){this.a=d
this.b=e},
e1q:function e1q(d){this.a=d},
e1c:function e1c(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e1a:function e1a(d,e,f){this.a=d
this.b=e
this.c=f},
e19:function e19(d,e){this.a=d
this.b=e},
e1b:function e1b(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e17:function e17(d,e){this.a=d
this.b=e},
e18:function e18(d,e,f){this.a=d
this.b=e
this.c=f},
e16:function e16(d,e){this.a=d
this.b=e},
e0P:function e0P(d){this.a=d},
e0Q:function e0Q(d){this.a=d},
e1M:function e1M(d,e,f){this.a=d
this.b=e
this.c=f},
e1K:function e1K(d,e,f){this.a=d
this.b=e
this.c=f},
e1L:function e1L(d,e){this.a=d
this.b=e},
e1G:function e1G(d,e,f){this.a=d
this.b=e
this.c=f},
e1F:function e1F(){},
e1H:function e1H(d,e){this.a=d
this.b=e},
e1I:function e1I(d,e){this.a=d
this.b=e},
e1J:function e1J(d,e){this.a=d
this.b=e},
e1w:function e1w(d,e){this.a=d
this.b=e},
e1t:function e1t(){},
e1u:function e1u(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e1s:function e1s(d,e,f){this.a=d
this.b=e
this.c=f},
e1v:function e1v(d,e,f){this.a=d
this.b=e
this.c=f},
e1r:function e1r(d,e){this.a=d
this.b=e},
e2k:function e2k(d){this.a=d},
e2i:function e2i(d){this.a=d},
e2j:function e2j(d,e){this.a=d
this.b=e},
e2b:function e2b(d,e,f){this.a=d
this.b=e
this.c=f},
e2a:function e2a(){},
e2c:function e2c(){},
e2d:function e2d(d,e){this.a=d
this.b=e},
e2e:function e2e(d){this.a=d},
e2f:function e2f(d){this.a=d},
e2g:function e2g(d){this.a=d},
e2h:function e2h(d){this.a=d},
e27:function e27(d){this.a=d},
e26:function e26(d){this.a=d},
e22:function e22(d,e,f){this.a=d
this.b=e
this.c=f},
e20:function e20(d){this.a=d},
e21:function e21(){},
e23:function e23(d,e,f){this.a=d
this.b=e
this.c=f},
e2_:function e2_(d,e){this.a=d
this.b=e},
e24:function e24(d,e){this.a=d
this.b=e},
e25:function e25(d,e){this.a=d
this.b=e},
e1T:function e1T(d,e){this.a=d
this.b=e},
e1U:function e1U(d){this.a=d},
e1V:function e1V(){},
e28:function e28(d,e){this.a=d
this.b=e},
e1Z:function e1Z(d,e){this.a=d
this.b=e},
e1X:function e1X(d){this.a=d},
e1R:function e1R(d){this.a=d},
e1S:function e1S(){},
e1W:function e1W(){},
e1j:function e1j(d){this.a=d},
e1l:function e1l(d,e,f){this.a=d
this.b=e
this.c=f},
e1m:function e1m(d){this.a=d},
e1k:function e1k(d){this.a=d},
e1f:function e1f(d){this.a=d},
e1g:function e1g(d){this.a=d},
e2l:function e2l(d){this.a=d},
e1i:function e1i(d){this.a=d},
e1h:function e1h(d){this.a=d},
e0i:function e0i(d){this.a=d},
e0h:function e0h(d,e,f){this.a=d
this.b=e
this.c=f},
e0c:function e0c(){},
e0d:function e0d(){},
e0e:function e0e(d){this.a=d},
e0f:function e0f(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e1e:function e1e(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
e29:function e29(d,e){this.a=d
this.b=e},
e1D:function e1D(d,e){this.a=d
this.b=e},
e1E:function e1E(d,e){this.a=d
this.b=e},
e0g:function e0g(d,e){this.a=d
this.b=e},
e0W:function e0W(d){this.a=d},
e0X:function e0X(d){this.a=d},
e0Y:function e0Y(d){this.a=d},
e0Z:function e0Z(d){this.a=d},
e1_:function e1_(d,e){this.a=d
this.b=e},
e10:function e10(d){this.a=d},
e0V:function e0V(d){this.a=d},
e11:function e11(d,e){this.a=d
this.b=e},
e0U:function e0U(d,e){this.a=d
this.b=e},
e12:function e12(d,e){this.a=d
this.b=e},
e0T:function e0T(d,e){this.a=d
this.b=e},
e13:function e13(d){this.a=d},
e0S:function e0S(d){this.a=d},
e14:function e14(d,e){this.a=d
this.b=e},
e0R:function e0R(d,e){this.a=d
this.b=e},
e15:function e15(d,e){this.a=d
this.b=e},
e2o:function e2o(d){this.a=d},
e2m:function e2m(d){this.a=d},
e2n:function e2n(d){this.a=d},
e0J:function e0J(d){this.a=d},
e0K:function e0K(d){this.a=d},
e0L:function e0L(d){this.a=d},
e0M:function e0M(d){this.a=d},
e0N:function e0N(d){this.a=d},
e0O:function e0O(d){this.a=d},
e0I:function e0I(d){this.a=d},
e0z:function e0z(d,e){this.a=d
this.b=e},
e0r:function e0r(d){this.a=d},
e0q:function e0q(){},
e0p:function e0p(d){this.a=d},
e0A:function e0A(d){this.a=d},
e0o:function e0o(d){this.a=d},
e0B:function e0B(d){this.a=d},
e0C:function e0C(d){this.a=d},
e0n:function e0n(d){this.a=d},
e0D:function e0D(d){this.a=d},
e0E:function e0E(d){this.a=d},
e0F:function e0F(d){this.a=d},
e0m:function e0m(d){this.a=d},
e0G:function e0G(d){this.a=d},
e0l:function e0l(d){this.a=d},
e0H:function e0H(d){this.a=d},
e0s:function e0s(d){this.a=d},
e0t:function e0t(d){this.a=d},
e0u:function e0u(d){this.a=d},
e0v:function e0v(d){this.a=d},
e0w:function e0w(d){this.a=d},
e0x:function e0x(d){this.a=d},
e0k:function e0k(){},
e0y:function e0y(d){this.a=d},
e0j:function e0j(d){this.a=d},
e1C:function e1C(d){this.a=d},
e1z:function e1z(d,e,f){this.a=d
this.b=e
this.c=f},
e1A:function e1A(d,e){this.a=d
this.b=e},
e1y:function e1y(d){this.a=d},
e1B:function e1B(d,e){this.a=d
this.b=e},
e1x:function e1x(d){this.a=d},
bgU:function bgU(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
dmp:function dmp(d,e){this.a=d
this.b=e},
bgi:function bgi(d,e){this.b=d
this.a=e},
hzQ(){var w=$.h4R
return w==null?$.h4R=new A.ca8().$0():w},
i2H(d,e,f){var w,v,u,t,s,r,q,p,o,n=null,m=e.a,l=e.b,k=new C.a9(0,0,0+m,0+l),j=C.bz(k,D.jG)
$.X()
w=C.M()
w.saq(B.bUQ.av(0,k))
d.aD(j,w)
v=C.M()
v.b=D.ae
v.r=B.aem.gp(0)
v.c=l*0.025
w=l*0.05
j=l*0.08
d.aD(C.bz(k.cF(-w),new C.aW(j,j)),v)
w=C.bz(k.cF(-(l*0.1)),new C.aW(w,w))
v.c=l*0.01
d.aD(w,v)
u=$.fPr
t=C.co(new C.u(m/2,l*0.44),l*0.5,m*0.55)
if(u!=null){j=u.c
w=u.d
s=Math.min((t.c-t.a)/j,(t.d-t.b)/w)
r=C.co(t.gbR(),w*s,j*s)
q=C.M()
q.Q=D.cl
d.yj(u,new C.a9(0,0,j,w),r,q)}else{p=C.i1(n,n,n,n,C.dn(n,n,n,n,n,n,n,n,n,C.l(n,n,D.c,n,n,n,n,n,n,n,n,l*0.32,n,n,D.u,n,n,!0,n,l*0.02,n,n,n,n,n,n),"NGMY"),D.a4,D.cc,n,D.eh,D.ca)
p.eI()
j=t.gbR()
w=p.b
q=w.c
w=w.a.c
p.a5(d,j.aC(0,new C.u(q/2,w.gbd(w)/2)))}o=C.i1(n,n,n,n,C.dn(n,n,n,n,n,n,n,n,n,C.l(n,n,B.aem,n,n,n,n,n,n,n,n,l*0.075,n,n,D.u,n,n,!0,n,l*0.012,n,n,n,n,n,n),"NEW GLOBAL MOVEMENT FOR YOUTH"),D.a4,D.cc,n,D.eh,D.ca)
o.eI()
o.a5(d,new C.u((m-o.b.c)/2,l*0.76))},
heJ(e8,e9,f0,f1,f2,f3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6,d7,d8,d9,e0,e1,e2,e3="walls",e4="GFCI outlet",e5="Wall outlet",e6="\ud83d\udeb0 Needs plumbing",e7=e8.c
if(e7==="outside")return A.hOI(e8,f1,f0,f3,f2)
w=x.z
v=C.a([],w)
u=new A.jf(v)
t=C.T(x.S,x.q)
s=C.a([],x.E)
r=C.a([],x.h)
q=e8.gfq(0)
p=e8.gkz(0)
o=C.a([],x.O)
for(n=e8.z,m=n.length,l=0;l<n.length;n.length===m||(0,C.L)(n),++l)o.push(B.avC[n[l]])
k=B.avp[e8.Q]
j=new A.fm8(f0)
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
u.qe(new A.E(0,-0.6,n),new A.E(m,1.2,i),h,e,3)
t.n(0,310,new A.d1("Floor","The "+k.a.toLowerCase()+" floor.",new A.E(0,0,n),140))
u.b=0
if(g==="wood")for(g=-q/2,d=1;d<8;++d){f=C.aq(h,D.w,0.25)
f.toString
u.bO(new A.E(g+d*q/8,0.05,n),new A.E(0.3,0.2,p),f)}else if(f)for(h=-q/2,d=1;d<6;++d){u.bO(new A.E(h+d*q/6,0.05,n),new A.E(0.3,0.2,p),B.abj)
u.bO(new A.E(0,0.05,d*p/6),new A.E(q,0.2,0.3),B.abj)}h=e7==="hall"
if(h){a0=q*0.72
a1=p-20
g=-a0/2
f=a0/2
r.push(new A.WI(C.a([new A.E(g,0.5,24),new A.E(f,0.5,24),new A.E(f,0.5,a1),new A.E(g,0.5,a1)],x.o),0,A.i1L(),900,900*(a1-24)/a0,60,-1))}u.f=0
u.b=j.$2(e3,300)
a2=u.x=$.ml=$.ml+1
u.iy(new A.E(0,48,-0.6),new A.E(m,96,1.2),o[0],3)
u.x=0
u.b=j.$2(e3,301)
a3=u.x=$.ml=$.ml+1
g=-q
f=g/2
u.iy(new A.E(f-0.6,48,n),new A.E(1.2,96,p),o[1],3)
u.x=0
u.b=j.$2(e3,302)
a4=u.x=$.ml=$.ml+1
e=q/2
u.iy(new A.E(e+0.6,48,n),new A.E(1.2,96,p),o[2],3)
u.x=0
t.n(0,300,B.dX4)
t.n(0,301,B.dX8)
t.n(0,302,B.dXh)
if(e9){u.b=0
u.iy(new A.E(0,48,p+0.6),new A.E(m,96,1.2),o[0],3)}u.f=u.b=0
u.x=a2
u.bJ(new A.E(0,2.5,0.4),new A.E(q,5,0.8),B.m8,0.1)
u.x=a3
u.bJ(new A.E(f+0.4,2.5,n),new A.E(0.8,5,p),B.m8,0.1)
u.x=a4
u.bJ(new A.E(e-0.4,2.5,n),new A.E(0.8,5,p),B.m8,0.1)
u.x=0
u.f=e9?0:3
u.b=j.$2("ceiling",320)
if(e9)o=1
else o=f0==="ceiling"?0.6:0.4
u.d=o
u.iy(new A.E(0,96.6,n),new A.E(m,1.2,i),B.aug[e8.as],2)
u.d=1
u.b=u.f=0
u.x=a2
u.bJ(new A.E(0,94,1),new A.E(q,3,1.4),D.c,0.2)
u.x=a3
u.bJ(new A.E(f+1,94,n),new A.E(1.4,3,p),D.c,0.2)
u.x=a4
u.bJ(new A.E(e-1,94,n),new A.E(1.4,3,p),D.c,0.2)
u.x=0
t.n(0,320,new A.d1("Ceiling","Pick a colour above to paint the ceiling.",new A.E(0,96,n),140))
n=e8.w
a5=D.d.b8(n,new A.flY())?"left":"right"
if(!h){o=new A.fm5()
a6=p*0.55
if(e9)D.d.v(v,A.tS(o.$0(),0,3.141592653589793,new A.E(0,0,p+0.2)))
D.d.v(v,a5==="right"?A.tS(o.$0(),0,-1.5707963267948966,new A.E(e,0,a6)):A.tS(o.$0(),0,1.5707963267948966,new A.E(f,0,a6)))}for(o=e8.ax,m=e8.at,d=0;d<n.length;++d){a7=n[d]
a8=o.h(0,d)
if(a8==null)a8=m.t(0,d)?1.25:0
i=C.a([],w)
a9=new A.jf(i)
a9.f=1
a9.x=$.ml=$.ml+1
b0=a9.b=600+d
a9.bO(B.fEY,B.fEL,B.m8)
b1=C.a([],w)
b2=new A.jf(b1)
b2.r=!0
b2.b=b0
if(a8>0.04){a9.b=0
b3=A.hLP(a7.c)
b4=b3.a
a9.bO(B.fDD,B.fBq,b4)
a9.bO(B.fEp,B.fIr,b3.b)
b5=C.aq(b4,D.w,0.25)
b5.toString
a9.bO(B.fDM,B.fH2,b5)
b6=-a8
b5=A.bBO(B.fIo,b6)
b2.aje(new A.E(-12.5+b5.a,0+b5.b,1.2+b5.c),B.fAL,B.wK,0.15,b6)}else{a9.bJ(B.fDP,B.fD8,B.wK,0.15)
a9.bJ(B.fDV,B.fEa,B.DT,0.8)
a9.bO(B.fEc,B.aS6,B.KZ)
a9.bO(B.fI3,B.aS6,B.KZ)}b5=new A.fm6(a7,q,p)
D.d.v(v,b5.$1(i))
D.d.v(v,b5.$1(b1))
t.n(0,b0,new A.d1("Door","Tap the door to go through it.",B.aR6,90))}for(o=e8.x,m=o.length,l=0;l<o.length;o.length===m||(0,C.L)(o),++l){b7=o[l]
i=b7.b
b0=B.pY.h(0,i)
b0.toString
b1=C.a([],w)
b8=new A.jf(b1)
b8.r=!0
b8.f=i==="rug"?1:2
b5=100+b7.a
b8.b=j.$2("furniture",b5)
A.hby(b8,i,B.a0W[b7.f])
D.d.v(v,A.tS(b1,0,b7.e*3.141592653589793/2,new A.E(b7.c,0,b7.d)))
t.n(0,b5,new A.d1(b0.a,y.b,new A.E(b7.c,12,b7.d),90))}u.f=2
u.r=!0
b9=p*0.5
w=C.U(n)
o=e-10
c0=D.k.D(new C.cQ(new C.a2(n,new A.flZ(),w.k("a2<1>")),new A.fm_(),w.k("cQ<1,N>")).cI(0,f+30,new A.fm0())+24,f+10,o)
c1=e8.dx==="fan"
c2=e8.ga4H()
c3=c2&&e8.gTj()&&e8.db
u.b=703
if(c1){u.hB(new A.E(0,95.5,b9),new A.E(0,86,b9),1,B.iL,8)
u.e5(new A.E(0,86,b9),new A.E(0,79,b9),6,D.ti,0.5,14)
w=c3?B.t6:D.dz
u.e5(new A.E(0,79,b9),new A.E(0,76,b9),3.6,w,0.6,12)}else{w=c3?B.t6:D.dz
u.e5(new A.E(0,95.5,b9),new A.E(0,93,b9),7,w,0.6,16)}if(c3&&!c1){u.b=0
u.f=3
u.d=0.2
u.baL(new A.E(0,93,b9),new A.E(0,0.5,b9),36,B.t6,!1,14)
u.d=1
u.f=2}c4=c1?"Ceiling fan":"Ceiling light"
if(!c2)c5="It has no power yet. "+(e8.id.length!==0?"Tap it to wire it.":"The room still needs wiring: use the Wiring button.")
else if(!e8.gTj())c5="It is ready: wire the wall switch to turn it on."
else{w=e8.db?"It is on. Tap the wall switch (or tap this) to turn it off.":"It is off. Tap the wall switch (or tap this) to turn it on."
c5=w}t.n(0,703,new A.d1(c4,c5,new A.E(0,88,b9),80))
w=e7==="bathroom"
n=!w
c6=!n||e7==="kitchen"||e8.id==="gfci"
m=e8.gaFp()
i=c6?e4:e5
b0=e8.id.length!==0||e8.gjz()
b1=c6?e4:e5
b1=C.a([new C.ev([0,700,g/4,m,i]),new C.ev([1,701,q/4,b0,b1])],x.az)
for(m=e8.dy,d=0;d<m.length;++d){i=m[d]
g=i.a
if(g!=="switch"){b0=i.c
g=b0.c>=2&&A.afv(A.Ai(g),b0).a==="ok"
b0=m[d].a==="gfci"?"Added GFCI outlet":"Added outlet"
b1.push(new C.ev([2+d,800+d,i.b,g,b0]))}}u.f=1
u.r=!1
for(i=b1.length,g=e8.cy,l=0;l<b1.length;b1.length===i||(0,C.L)(b1),++l){b0=b1[l].a
d=b0[0]
c7=b0[1]
c8=b0[2]
c9=b0[3]
d0=b0[4]
u.x=$.ml=$.ml+1
u.b=c7
u.e=0.4
u.d=0.55
b0=c9?D.b8:D.ay
u.bO(new A.E(c8,14,0.25),B.fBQ,b0)
u.d=1
u.e=0
b0=c9?B.aei:D.ti
u.bJ(new A.E(c8,14,0.9),B.fFk,b0,0.25)
u.b=0
for(d1=0;d1<2;++d1)for(b0=14+E.oO[d1]*2.8,d2=0;d2<2;++d2)u.bO(new A.E(c8+B.cYP[d2],b0,1.7),B.fIh,B.bdw)
u.bO(new A.E(c8,14,1.7),B.fFi,D.dz)
u.x=0
if(!c9)b0="This one is not wired yet. Tap it to wire it."
else b0=g.h(0,d)==null?"Tap it to plug something in.":"Tap it to plug something else in, or to unplug."
t.n(0,c7,new A.d1(d0,b0,new A.E(c8,14,2),60))}i=C.a([new C.bt(702,c0,e8.gTj())],x.al)
for(d=0;d<m.length;++d){b0=m[d]
b5=b0.a
if(b5==="switch"){d3=b0.c
b5=d3.c>=2&&A.afv(A.Ai(b5),d3).a==="ok"
i.push(new C.bt(800+d,b0.b,b5))}}for(m=i.length,l=0;l<i.length;i.length===m||(0,C.L)(i),++l){b0=i[l]
c7=b0.a
c8=b0.b
c9=b0.c
u.x=$.ml=$.ml+1
u.b=c7
u.e=0.4
u.d=0.55
b0=c9?D.b8:D.ay
u.bO(new A.E(c8,48,0.25),B.fCX,b0)
u.d=1
u.e=0
b0=c9?B.aei:D.ti
u.bJ(new A.E(c8,48,0.9),B.fCw,b0,0.25)
u.bO(new A.E(c8,e8.db&&c9?49.2:46.8,1.9),B.fCq,B.bjm)
u.x=0
if(!c9)b0="Not wired yet. Tap it to wire it."
else if(e8.db)b0="On. Tap to turn the "+(c1?"fan":"light")+" off."
else b0="Off. Tap to turn the "+(c1?"fan":"light")+" on."
t.n(0,c7,new A.d1("Light switch",b0,new A.E(c8,48,2),60))}if(!e8.ga4H()&&e8.id.length===0)s.push(new A.t2(new A.E(0,70,b9),"\u26a1 No power: needs wiring",D.bI))
m=!1
if(e8.id.length!==0)if(!e8.gyB()){m=e8.id
m=!(m==="ptrap"||m==="faucet")}if(m)s.push(new A.t2(new A.E(0,40,14),"\ud83d\udc46 Tap the red one to wire it",D.bI))
u.f=2
u.r=!0
for(m=b1.length,i=x.o,b0=e8.a,l=0;l<b1.length;b1.length===m||(0,C.L)(b1),++l){b5=b1[l].a
d=b5[0]
c8=b5[2]
c9=b5[3]
d4=g.h(0,d)
if(d4==null||!c9)continue
d5=A.bzu(d4)
b5=u.b=720+d
u.jT(C.a([new A.E(c8,12,1.8),new A.E(c8,6,3),new A.E(c8,2,11)],i),0.3,B.Wk,!1,0.2,6)
d3=d5.d
d6=d3<=0
if(!d6||d5.e){b6=d3*0.56
u.bJ(new A.E(c8,2,15),new A.E(d3*0.45,4,14),B.iL,0.3)
u.bJ(new A.E(c8,8,15),B.fBt,B.iL,0.3)
d7=12+b6/2
u.bJ(new A.E(c8,d7,15),new A.E(d3,b6,3),E.Ed,0.5)
d3=(d3-3.5)/2
d8=c8-d3
d9=(b6-3.5)/2
e0=d7+d9
d3=c8+d3
d9=d7-d9
r.push(new A.WI(C.a([new A.E(d8,e0,16.6),new A.E(d3,e0,16.6),new A.E(d3,d9,16.6),new A.E(d8,d9,16.6)],i),b5,new A.fm1(d*7+b0),320,180,9,2))}else{d3=d5.a
if(d3==="lamp"){u.e5(new A.E(c8,0,14),new A.E(c8,1,14),6,B.Vm,0.4,14)
u.e5(new A.E(c8,1,14),new A.E(c8,22,14),1,B.At,0.5,8)
d3=e8.db?B.t6:X.Ws
u.yh(new A.E(c8,20,14),new A.E(c8,32,14),9,d3,!1,!0,5.5,0.2,16)}else{u.bJ(new A.E(c8,9,15),B.fzo,B.DR,0.1)
if(d3==="toaster"){u.bJ(new A.E(c8,23,15),B.fzm,B.kD,0.8)
u.bO(new A.E(c8,28.2,15),B.fG9,B.aex)}else{u.Kj(new A.E(c8-7,21,15),new A.E(c8+7,21,15),3.6,B.KI,3,0.6,12)
u.bJ(new A.E(c8-8,14.5,15),B.fE6,B.KI,0.6)}}}d3=!d6||d5.e?"It is playing NGMY ads. Tap it to watch full screen with the remote.":"It is plugged in and running. Tap the outlet to unplug it or plug in something else."
t.n(0,b5,new A.d1(d5.b,d3,new A.E(c8,16,14),90))}u.f=1
u.r=!1
e1=new A.fm3(e8,u,r,t)
e1.$2(e8.fr,0)
if(h)e1.$2(e8.fx,1)
u.f=2
m=u.r=!0
if(n?e7==="kitchen":m){c9=e8.gl3()
e7=new A.fm7(u)
if(w){e2=f+17
if(c9){u.b=710
u.Kj(new A.E(6,0.5,14),new A.E(6,15,14),8,B.Ac,5.6,0.8,18)
u.e5(new A.E(6,15,14),new A.E(6,16,14),9,B.KR,0.8,18)
u.bJ(new A.E(6,21,5),B.fzv,B.Ac,0.8)
u.bJ(new A.E(6,28,5),B.fDx,B.KR,0.8)}else{u.b=710
u.d=0.3
u.f=3
u.bO(new A.E(6,14,9),B.fzr,D.b1)
u.d=1
u.f=2
e7.$2(-4,8)}u.b=711
u.bJ(new A.E(34,14,10),B.fAb,B.DR,0.1)
u.bJ(new A.E(34,29,10),B.fAe,B.VV,0.4)
if(c9){u.e5(new A.E(34,29.3,10),new A.E(34,30.1,10),6.5,D.c,0.6,18)
u.bgV(C.a([new A.E(34,30,4),new A.E(34,36,4),new A.E(34,38,7)],i),0.6,B.kD,0.9,8)}else{e7.$2(28,18)
e7.$2(40,18)}u.b=712
if(c9){u.bJ(new A.E(e2,8,38),B.aRk,B.aeL,0.7)
u.bJ(new A.E(e2,16.2,38),B.fGX,B.VF,0.8)
u.e5(new A.E(e2,30,3),new A.E(e2,52,3),0.7,B.kD,0.9,8)
u.e5(new A.E(e2,52,3),new A.E(e2,52,10),0.7,B.kD,0.9,8)}else{u.d=0.3
u.f=3
u.bO(new A.E(e2,8,38),B.aRk,D.b1)
u.d=1
u.f=2
e7.$2(e2-4,34)
e7.$2(e2+4,34)}e7=c9?"Fitted on its flange with a wax ring, and the supply hose joins the shut-off valve.":"There is no toilet yet: only the flange and the water stub. Use the Plumbing button to fit it."
t.n(0,710,new A.d1("Toilet",e7,new A.E(6,14,10),70))
e7=c9?"The faucet, the hoses and the P-trap are fitted.":"The sink is not plumbed. Use the Plumbing button."
t.n(0,711,new A.d1("Vanity sink",e7,new A.E(34,28,10),70))
e7=c9?"The bath is in and connected.":"The bath is not connected yet."
t.n(0,712,new A.d1("Bath",e7,new A.E(e2,10,38),90))
if(!c9)s.push(new A.t2(new A.E(0,40,14),e6,D.bj))}else{u.b=0
u.bJ(new A.E(f+15,36,14),B.fA_,B.add,0.6)
u.bO(new A.E(f+28.5,36,14.4),B.fF4,D.dz)
u.bJ(new A.E(o,15,14),B.fzJ,B.abM,0.1)
u.bJ(new A.E(o,31,14),B.fzP,B.iL,0.5)
u.bJ(new A.E(e-15,32.4,14),B.aRB,D.lE,0.3)
u.bJ(new A.E(e-5,32.4,14),B.aRB,D.lE,0.3)
u.b=713
u.bJ(new A.E(30,15,14),B.fAx,B.DR,0.1)
u.bJ(new A.E(30,31,14),B.fAy,B.El,0.5)
if(c9){u.e5(new A.E(30,32.1,14),new A.E(30,32.7,14),8,B.E8,0.8,18)
u.bgV(C.a([new A.E(30,32,5),new A.E(30,42,5),new A.E(30,44,9),new A.E(30,44,13)],i),0.7,B.kD,0.9,8)}else{e7.$2(22,18)
e7.$2(38,18)}e7=c9?"The faucet, the hoses and the drain are fitted.":"The kitchen sink is not plumbed yet. Use the Plumbing button."
t.n(0,713,new A.d1("Kitchen sink",e7,new A.E(30,30,14),70))
if(!c9)s.push(new A.t2(new A.E(30,48,14),e6,D.bj))}}for(e7=D.d.gae(f2),w=new C.fk(e7,new A.fm2(e8));w.C();){o=e7.gS(0)
t.n(0,900+o.a,new A.d1(o.r,"Tap to see how they are, feed them or give medicine.",new A.E(o.c,36,o.d),90))}return new A.zo(v,t,s,r,new C.cH([f,e,0,p]))},
nk(d,e,f,g,h,i,j,k,l){var w=-h/2,v=i/2,u=h/2,t=-i/2
d.cQB(e.ad(0,f.aF(0,w)).ad(0,g.aF(0,v)),e.ad(0,f.aF(0,u)).ad(0,g.aF(0,v)),e.ad(0,f.aF(0,u)).ad(0,g.aF(0,t)),e.ad(0,f.aF(0,w)).ad(0,g.aF(0,t)),j,k,l)},
hOI(a4,a5,a6,a7,a8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=x.z,f=C.a([],g),e=new A.jf(f),d=C.T(x.S,x.q),a0=C.a([],x.E),a1=a4.gfq(0),a2=a4.gkz(0),a3=new A.fg4(a6)
e.f=0
e.b=a3.$2("floor",310)
e.iy(new A.E(0,-0.6,a2/2-60),new A.E(a1*2.5,1.2,a2*2.5),B.abC,5)
d.n(0,310,B.dXc)
e.b=0
e.f=1
e.bO(new A.E(0,0.15,60),B.fCo,E.DW)
for(w=0;w<6;++w)e.bO(new A.E(0,0.35,8+w*22),B.fFm,B.bg7)
e.f=2
e.x=$.ml=$.ml+1
e.iy(B.fyT,B.fzS,B.Ks,3)
e.bO(B.fyI,B.fzT,B.ab3)
v=new A.fg5(e)
u=new A.fg3(e)
for(t=0;t<4;++t)v.$5(B.fO,B.j_,B.lr,B.d7c[t],62)
u.$5(B.fO,B.j_,B.lr,0,600)
for(t=0;t<2;++t)v.$5(B.aR_,B.wf,B.zs,B.d79[t],62)
u.$5(B.aR_,B.wf,B.zs,0,0)
for(t=0;t<2;++t){s=B.d71[t]
v.$5(B.fzb,B.zs,B.j_,s,62)
v.$5(B.fGA,B.lr,B.wf,-s,62)}r=C.a([],g)
new A.jf(r).qe(B.fO,B.fzY,B.Kv,0.1,2)
e.a5B(B.fBI,B.fIl,B.fCB,B.Ks,B.j_,!1)
e.a5B(B.fAD,B.fFM,B.fFD,B.Ks,B.wf,!1)
e.x=0
e.r=!0
D.d.v(f,A.tS(r,0.5,0,B.fy7))
D.d.v(f,A.tS(r,-0.5,0,B.fy8))
e.bO(B.fy9,B.fzX,B.VR)
e.bO(B.fBi,B.fzk,B.ae6)
e.bO(B.fBj,B.aRa,B.x5)
e.bO(B.fyC,B.fAP,E.DW)
e.hB(B.fGG,B.fGH,2.2,B.m8,8)
e.hB(B.fzK,B.fzL,2.2,B.m8,8)
e.bJ(B.fz3,B.fAT,B.Kv,0.1)
d.n(0,600,B.dXO)
e.r=!0
for(r=a4.x,q=r.length,t=0;t<r.length;r.length===q||(0,C.L)(r),++t){p=r[t]
o=p.b
if(D.d.t(B.a1B,o)){d.n(0,100+p.a,new A.d1(B.pY.h(0,o).a,"It wanders about. Move it with the arrow buttons or take it out.",new A.E(p.c,12,p.d),140))
continue}n=B.pY.h(0,o)
n.toString
m=C.a([],g)
l=new A.jf(m)
k=l.r=!0
l.f=D.d.t(B.awd,o)?1:2
j=o==="hospital"
if(!j)k=o==="shop"
i=p.a
h=100+i
l.b=k?h:a3.$2("furniture",h)
A.hby(l,o,B.a0W[p.f])
D.d.v(f,A.tS(m,0,p.e*3.141592653589793/2,new A.E(p.c,0,p.d)))
if(j)o="The hospital: tap it to see the beds and treat the patients."
else o=o==="shop"?"The shop: tap it to buy food and medicine.":y.b
d.n(0,100+i,new A.d1(n.a,o,new A.E(p.c,12,p.d),140))}for(g=D.d.gae(a8),r=new C.fk(g,new A.fg2(a4));r.C();){q=g.gS(0)
a0.push(new A.t2(new A.E(q.c,80,q.d),"\ud83d\udcde Help!",D.bI))}g=a5===0
r=g?"\u2705 The house is finished":"\ud83c\udfe0 "+a5+" rooms still need work"
a0.push(new A.t2(B.fyi,r,g?D.d_:D.dT))
return new A.zo(f,d,a0,B.vI,null)},
hVg(a1,a2,a3,a4,a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=x.z,d=C.a([],e),a0=new A.jf(d)
a0.r=!0
if(a1.c==="outside"){if(a4!=null&&a4.a===a1.a)A.fad(a0,a4,a2,a5,!0,0)
for(w=D.d.gae(a1.x),v=new C.fk(w,new A.foN()),u=a2*6,t=a3==="furniture";v.C();){s=w.gS(0)
r=s.a
q=a2*(0.25+D.o.G(r,5)*0.04)+r*1.7
p=s.c
o=Math.cos(q)
n=s.d
m=Math.sin(q)
l=Math.atan2(-Math.sin(q),Math.cos(q))
k=C.a([],e)
j=new A.jf(k)
j.r=!0
j.b=t?100+r:0
A.h9X(j,s.b,B.a0W[s.f],Math.sin(u+r)*0.5)
D.d.v(d,A.tS(k,0,l,new A.E(p+o*10,0,n+m*10)))}for(e=D.d.gae(a6),w=new C.fk(e,new A.foO(a1)),v=a2*0.5,u=a1.a;w.C();){t=e.gS(0)
s=t.a
r=v+s
p=Math.sin(r)
o=t.y
n=t.c
m=t.d
r=Math.cos(r)>=0?1.5707963267948966:-1.5707963267948966
A.fad(a0,new A.VS(u,n+p*o,m,r,!0,!1,!1,!1,!1,"","",-1,0,-1,0),a2,t.f,!1,900+s)}return d}if(a4!=null&&a4.a===a1.a)A.fad(a0,a4,a2,a5,!0,0)
for(e=D.d.gae(a6),w=new C.fk(e,new A.foP(a1)),v=a1.a,u=a2*0.5;w.C();){t=e.gS(0)
s=t.y
r=s>0
i=r?Math.sin(u+t.a)*s:0
s=t.c
p=t.d
if(r)o=Math.cos(u+t.a)>=0?1.5707963267948966:-1.5707963267948966
else o=t.x?0.5:t.e
A.fad(a0,new A.VS(v,s+i,p,o,r,!1,!1,!1,t.x,"","",-1,0,-1,0),a2,t.f,!1,900+t.a)}h=a1.gkz(0)
if(a1.dx==="fan"){g=a1.ga4H()&&a1.gTj()&&a1.db?a2*7:0
a0.b=703
for(e=h*0.5,f=0;f<4;++f){q=g+f*3.141592653589793/2
a0.aje(new A.E(Math.cos(q)*15,81,e+Math.sin(q)*15),B.fI_,B.DR,0.1,-q)}}return d},
hLP(d){var w
A:{if(5===d){w=B.erT
break A}if(9===d){w=B.ew_
break A}if(10===d){w=B.ekB
break A}if(11===d){w=B.ewR
break A}if(2===d||4===d||8===d){w=B.ebq
break A}w=B.en5
break A}return w},
flx(b0,b1,b2,b3,b4,b5,b6,b7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9
for(w=b2.a,v=b2.b,u=b2.c,t=b1.a,s=b1.b,r=b1.c,q=b3.a,p=q*0.1,o=b3.b,n=o*0.1,m=b3.c,l=m*0.1,k=q*0.2,j=o*0.2,i=m*0.2,q*=0.3,o*=0.3,m*=0.3,h=-b4/2,g=b5-1,f=b5===1,e=0;e<b5;++e){d=f?0:h+b4*e/g
for(a0=b6.length,a1=s+v*d,a2=t+w*d+0,a3=r+u*d+0,a4=a2+p,a5=a3+l,a6=a2+k,a7=a3+i,a2+=q,a3+=m,a8=0;a8<b6.length;b6.length===a0||(0,C.L)(b6),++a8){a9=a1+b6[a8]
A.nk(b0,new A.E(a4,a9+n,a5),b2,B.fP,14,17,B.m8,b3,0)
A.nk(b0,new A.E(a6,a9+j,a7),b2,B.fP,11,14,b7,b3,0.6)
A.nk(b0,new A.E(a2,a9+o,a3),b2,B.fP,11,0.9,B.m8,b3,0)}}},
hJd(a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0
A:{if("shop"===a2){w=B.eEf
break A}if("hospital"===a2){w=B.eEa
break A}if("firestation"===a2){w=B.eDS
break A}if("school"===a2){w=B.eDL
break A}w=B.eDu
break A}w=w.a
v=w[0]
u=w[1]
t=w[2]
s=w[3]
r=w[4]
q=u/2
p=v/2
a1.x=$.ml=$.ml+1
a1.iy(new A.E(0,t/2,0),new A.E(v,t,u),s,2)
a1.bO(new A.E(0,2.5,0),new A.E(v+3,5,u+3),B.ab3)
w=a2==="hospital"
if(w)o=C.a([14,30,46],x.n)
else if(a2==="school"){n=C.a([14,32],x.n)
o=n}else{n=x.n
n=a2==="house2"?C.a([26],n):C.a([22],n)
o=n}m=D.o.D(D.k.bu(v/24),2,5)
n=a2==="firestation"
l=n?C.a([34],x.n):o
k=v-30
A.flx(a1,new A.E(0,0,q).ad(0,B.fO),B.j_,B.lr,k,m,l,B.px)
j=q+0.4
if(n){A.nk(a1,new A.E(-14,17,j),B.j_,B.fP,34,34,D.ju,B.lr,0.2)
for(i=q+0.5,h=0;h<6;++h)A.nk(a1,new A.E(-14,4+h*6,i),B.j_,B.fP,33,0.8,D.dz,B.lr,0)
A.nk(a1,new A.E(24,15,j),B.j_,B.fP,14,30,B.wK,B.lr,0)}else{A.nk(a1,new A.E(0,14,q+0.3),B.j_,B.fP,18,28,B.m8,B.lr,0)
A.nk(a1,new A.E(0,13,j),B.j_,B.fP,14,26,B.wK,B.lr,0.2)}switch(a2){case"hospital":i=t-8
A.nk(a1,new A.E(0,i,j),B.j_,B.fP,30,9,D.bI,B.lr,0)
j=q+0.5
A.nk(a1,new A.E(0,i,j),B.j_,B.fP,24,2.6,D.c,B.lr,0)
A.nk(a1,new A.E(0,i,j),B.j_,B.fP,2.6,7,D.c,B.lr,0)
break
case"shop":for(i=q+3,h=0;h<6;++h){g=(h&1)===0?D.ay:D.c
A.nk(a1,new A.E(-30+h*12,33,i),B.j_,B.fP,6,6,g,B.lr,0)}A.nk(a1,new A.E(0,t-4,j),B.j_,B.fP,36,6,a3,B.lr,0)
break
case"firestation":A.nk(a1,new A.E(0,t-5,j),B.j_,B.fP,40,7,D.co,B.lr,0)
break
case"school":A.nk(a1,new A.E(0,t-5,j),B.j_,B.fP,40,7,D.bj,B.lr,0)
break}j=-q
A.flx(a1,new A.E(0,0,j),B.wf,B.zs,k,m,l,B.px)
A.nk(a1,new A.E(0,13,j-0.4),B.wf,B.fP,14,26,B.wK,B.zs,0)
f=D.o.D(D.k.bu(u/24),1,3)
k=u-26
A.flx(a1,new A.E(p,0,0),B.zs,B.j_,k,f,l,B.px)
i=-p
A.flx(a1,new A.E(i,0,0),B.lr,B.wf,k,f,l,B.px)
a1.x=0
k=x.z
g=C.a([],k)
e=new A.jf(g)
e.r=!0
e.b=a1.b
e.f=a1.f
if(a2==="house2"||a2==="school"){w=C.a([],k)
d=new A.jf(w)
d.r=!0
d.b=a1.b
d.f=a1.f
d.bJ(B.fO,new A.E(v+6,2.5,u*0.58),r,0.1)
n=a1.a
k=t+5
D.d.v(n,A.tS(w,0.42,0,new A.E(0,k,u*0.25)))
a0=-u
D.d.v(n,A.tS(w,-0.42,0,new A.E(0,k,a0*0.25)))
k=p+0.2
w=t+12
a1.a5B(new A.E(k,t,q),new A.E(k,t,j),new A.E(k,w,0),s,B.j_,!1)
i-=0.2
a1.a5B(new A.E(i,t,j),new A.E(i,t,q),new A.E(i,w,0),s,B.wf,!1)
if(a2==="school"){w=q-10
e.bO(new A.E(0,t+18,w),B.fzp,D.acG)
e.bO(new A.E(0,t+30,w),B.fzR,r)
e.hB(new A.E(0,t+31,w),new A.E(0,t+46,w),0.6,D.dz,6)
e.bO(new A.E(5,t+44,w),B.fFW,D.ay)}else e.bO(new A.E(v*0.28,t+14,a0*0.1),B.fBK,B.ae6)}else{k=v+2
e.bJ(new A.E(0,t+1.5,0),new A.E(k,3,u+2),r,0.05)
e.bO(new A.E(0,t+4,q+0.5),new A.E(k,4,1.4),a3)
if(w){w=v*0.25
k=-u*0.15
e.bO(new A.E(w,t+5,k),B.fzZ,D.bv)
e.bO(new A.E(w,t+6.2,k),B.fG4,D.c)}if(n){w=p-10
n=-u*0.2
e.bO(new A.E(w,t+16,n),B.fzj,B.ad6)
e.bO(new A.E(w,t+32,n),B.aRa,r)}}D.d.v(a1.a,g)},
hQA(d,e){var w,v,u,t,s,r,q,p,o,n,m
d.bO(B.aS7,B.fIC,B.bfk)
d.bO(B.fEo,B.aRZ,D.bn)
d.bO(B.fy1,B.aRZ,D.bn)
A:{if("roadturn"===e){w=B.d63
break A}if("roadtee"===e){w=B.cPX
break A}if("roadcross"===e){w=B.c7k
break A}w=B.d4n
break A}for(v=w.length,u=0;u<v;++u){t=w[u]
s=t.a
r=t.b
for(t=r!==0,q=s!==0,p=0;p<2;++p){o=5+p*10.5
n=q?6:1.6
m=t?6:1.6
d.bO(new A.E(s*o,0.7,r*o),new A.E(n,0.2,m),B.Wl)}}if(e!=="road")d.bO(B.aS1,B.fDL,B.Wl)
if(e==="roadcross")for(p=-2;p<=2;++p)d.bO(new A.E(p*4,0.7,15),B.fHi,D.c)},
h9X(d,e,f,g){var w=new A.f6T(d,g)
switch(e){case"dog":d.bJ(B.Da,B.fHL,f,0.05)
d.io(B.fCt,3.4,f,4,8)
d.bO(B.fEG,B.fBG,D.Kz)
d.bO(B.fFJ,B.aRE,B.iL)
d.bO(B.fIk,B.aRE,B.iL)
d.hB(B.fGi,B.fyh,0.8,f,5)
w.$5(B.d4T,6,6,1.7,f)
break
case"cat":d.bJ(B.zt,B.fBD,f,0.05)
d.io(B.fz_,2.7,f,4,8)
d.bO(B.fHp,B.aRb,f)
d.bO(B.fHs,B.aRb,f)
d.hB(B.fyZ,B.fyc,0.7,f,5)
w.$5(B.d2O,4,4,1.2,f)
break
case"cow":d.bJ(B.a7N,B.fzg,D.bM,0.05)
d.bO(B.fHz,B.fH4,B.iL)
d.bO(B.fDl,B.fBE,B.iL)
d.bO(B.fyo,B.fBP,D.bM)
d.bO(B.fyk,B.fIA,D.mL)
d.bO(B.fBW,B.aRc,D.bR)
d.bO(B.fIi,B.aRc,D.bR)
d.hB(B.fyr,B.fz0,0.7,B.iL,5)
w.$5(B.cTu,11,11,3.2,D.bR)
break
case"sheep":d.io(B.aR2,8.5,D.pp,4,8)
d.io(B.fyf,7,D.pp,4,8)
d.io(B.fyd,3.4,B.iL,4,8)
w.$5(B.d4P,8,8,1.8,B.iL)
break
case"chicken":d.io(B.zt,4,f,4,8)
d.io(B.fy6,2.2,f,3,6)
d.bO(B.fyb,B.fH_,D.bI)
d.bO(B.fCz,B.fCe,D.aH)
d.bO(B.fz2,B.fAN,f)
w.$5(B.cRE,3,3,0.8,D.aH)
break
case"horse":d.bJ(B.fyt,B.fz9,f,0.1)
d.ak_(B.fyz,B.fyF,4.2,f,3,8)
d.bO(B.fyG,B.fB1,f)
d.bO(B.fyM,B.fGZ,B.iL)
d.hB(B.fyA,B.fz1,1.8,B.iL,6)
w.$5(B.cR0,16,16,2.6,f)
break
default:d.bO(B.zt,B.fBN,f)}},
heg(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=C.a([],x.z)
for(w=d.length,v=e.a,u=e.b,t=e.c,s=f.a,r=f.b,q=f.c,p=x.o,o=0;o<d.length;d.length===w||(0,C.L)(d),++o){n=d[o]
m=C.a([],p)
for(l=n.a,k=l.length,j=0;j<l.length;l.length===k||(0,C.L)(l),++j){i=l[j]
m.push(new A.E(s+(i.a-s)*v,r+(i.b-r)*u,q+(i.c-q)*t))}l=n.b
h.push(new A.mt(m,new A.E(l.a/v,l.b/u,l.c/t).goy(0),n.c,n.d,n.e,n.f,n.r,n.w,n.x,n.y,n.z))}return h},
fad(d,e,f,g,h,i){var w,v=g.e,u=$.fNq.h(0,v)
if(u==null){A.hPp(d,e,f,i,v==="xbot"?B.a4M:new A.uz(g.a,g.b,g.c,g.d,"human"))
return}v=e.e
w=v&&e.ax>0?e.ax*12:null
D.d.v(d.a,u.cQ4(h,i,f,w,v,e.b,e.d,e.c))},
hPp(b2,b3,b4,b5,b6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0=C.a([],x.z),b1=new A.jf(b0)
b1.b=b5
b1.r=!0
w=b6.a
v=C.aq(w,D.w,0.16)
v.toString
u=b6.b
t=b6.c
s=b6.d
r=b3.e
q=r?Math.sin(b3.ax*3.141592653589793):0
p=x.n
o=C.a([],p)
for(n=0;n<2;++n)o.push(q*E.oO[n]*0.6)
m=C.a([],p)
for(l=o.length,n=0;n<o.length;o.length===l||(0,C.L)(o),++n){k=o[n]
m.push(r?Math.max(0,-k)*1.5+0.1:0.04)}p=C.a([],p)
for(j=0;j<2;++j)p.push(16*Math.cos(o[j])+15.5*Math.cos(o[j]+m[j]))
i=Math.max(p[0],p[1])+3.3
h=new A.fgD(b5,b1)
g=new A.fgp(b1)
for(j=0;j<2;++j){p=(j===0?-1:1)*2.9
f=new A.E(p,i,0)
p+=0
l=i+-16*Math.cos(o[j])
e=0+-16*Math.sin(o[j])
d=new A.E(p,l,e)
a0=o[j]+m[j]
p+=0
l+=-15.5*Math.cos(a0)
e+=-15.5*Math.sin(a0)
b1.io(f,3.6,s,4,8)
g.$5(f,d,3.5,2.7,s)
g.$5(d,new A.E(p,l,e),2.6,1.9,s)
p+=0
e+=2
h.$3(new A.fgq(),B.fEN,new A.E(p,l+-1.6,e))
h.$3(new A.fgr(),B.fCG,new A.E(p,l+-2.9,e))}h.$3(new A.fgs(s),B.fD9,new A.E(0,i+1.2,0))
h.$3(new A.fgv(t),B.fEu,new A.E(0,i+2.5,0))
h.$3(new A.fgw(),B.fzz,new A.E(0,i+2.4,0))
h.$3(new A.fgx(t),B.fDY,new A.E(0,i+19.6,0))
b1.hB(new A.E(0,i+20.5,0.2),new A.E(0,i+24.2,0.5),2,w,8)
p=i+29
a1=new A.E(0,p,0.6)
h.$3(new A.fgy(w),B.fG8,a1)
h.$3(new A.fgz(w),B.fFp,a1.ad(0,B.fAK))
h.$3(new A.fgA(u),B.fBC,a1.ad(0,B.fEx))
h.$3(new A.fgB(u),B.fDc,a1.ad(0,B.fIB))
for(o=p+-0.2,m=p+0.4,p+=1.9,n=0;n<2;++n){a2=E.oO[n]
b1.io(new A.E(0+a2*4.2,o,0.6),1,w,3,6)
l=0+a2*1.8
h.$3(new A.fgC(),B.fHt,new A.E(l,m,4.75))
b1.io(new A.E(l,m,5.1),0.5,D.pu,3,6)
b1.bO(new A.E(l,p,4.8),B.fI8,u)}h.$3(new A.fgt(v),B.fIj,a1.ad(0,B.fCA))
b1.bO(a1.ad(0,B.fEB),B.fDs,B.bdD)
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
a8=new A.E(e,a6,a7)
a0=a3+a4
a6+=-10.5*Math.cos(a0)
a7+=-10.5*Math.sin(a0)
g.$5(new A.E(e,v,0),a8,2.8,2.3,t)
g.$5(a8,new A.E(e,a6,a7),2.1,1.6,w)
h.$3(new A.fgu(w),B.fH0,new A.E(e,a6+-1.3,a7+0.2))
if(a5&&o){a9=a7+0
b1.e5(new A.E(e,a6+-2.6,a9),new A.E(e,a6+2.6,a9),1.7,D.aT,0.5,8)}if(a5&&m){b1.bJ(new A.E(e,a6+-0.4,a7+2.6),B.fE0,D.pu,0.3)
b1.bO(new A.E(e,a6+0.2,a7+3.8),B.fCj,D.ay)}}D.d.v(b2.a,A.tS(b0,0,b3.d,new A.E(b3.b,0,b3.c)))},
hby(d,e,f){var w,v,u,t,s,r,q=C.aq(f,D.w,Math.abs(-0.25))
q.toString
w=C.aq(f,D.c,Math.abs(0.2))
w.toString
A:{if("bed"===e){d.bJ(B.zt,B.fB5,B.x5,0.1)
d.bJ(B.fye,B.fAV,f,0.05)
d.bO(B.fGD,B.aRf,B.adH)
d.bO(B.fzi,B.aRf,B.adH)
d.bJ(B.fyw,B.fB6,B.x5,0.1)
d.bO(B.fyl,B.fGe,w)
break A}if("nightstand"===e){d.bJ(B.Da,B.fzn,f,0.1)
d.bO(B.fFt,B.fBl,q)
d.bO(B.fId,B.fAs,B.ado)
d.bO(B.fyx,B.fBV,B.t6)
break A}if("wardrobe"===e){d.bJ(B.fyE,B.fAA,f,0.1)
d.bO(B.fC7,B.fAI,q)
d.bJ(B.fDQ,B.aRV,B.DT,0.8)
d.bJ(B.fIq,B.aRV,B.DT,0.8)
break A}if("desk"===e){d.bJ(B.aR3,B.fAG,f,0.1)
d.bO(B.fGI,B.aRi,q)
d.bO(B.fzN,B.aRi,q)
d.bJ(B.fyP,B.fzO,B.Vx,0.5)
d.bO(B.fyD,B.fBd,D.ti)
break A}if("rug"===e){d.iy(B.aS7,B.fzw,f,2)
d.bO(B.fC_,B.fH9,w)
break A}if("sofa"===e){d.bJ(B.Da,B.fBx,f,0.05)
d.bJ(B.fyv,B.fBy,q,0.05)
d.bJ(B.fGL,B.aRs,q,0.05)
d.bJ(B.fAm,B.aRs,q,0.05)
d.bO(B.fGC,B.aRg,w)
d.bO(B.fzh,B.aRg,w)
break A}if("armchair"===e){d.bJ(B.Da,B.fA8,f,0.05)
d.bJ(B.fyu,B.fAa,q,0.05)
d.bO(B.fGB,B.aRp,q)
d.bO(B.fzd,B.aRp,q)
break A}if("coffee"===e){d.bJ(B.J0,B.fAw,f,0.2)
for(v=0;v<4;++v){w=B.d6W[v]
d.bO(new A.E(w.a,6.5,w.b),B.fA3,q)}d.bJ(B.fCW,B.fBL,D.bR,0.5)
break A}if("tvstand"===e){d.bJ(B.aR8,B.fAR,f,0.1)
d.bO(B.fBv,B.fCL,q)
d.bJ(B.aR5,B.fAF,E.Ed,0.7)
d.bJ(B.fCZ,B.fCy,D.fl,0.9)
d.bO(B.fyn,B.fBM,B.iL)
break A}if("dining"===e){d.bJ(B.aR3,B.fAS,f,0.2)
for(v=0;v<4;++v){w=B.cC3[v]
d.bO(new A.E(w.a,13,w.b),B.fAr,q)}break A}if("chair"===e){d.bJ(B.fyj,B.fzs,f,0.1)
d.bJ(B.fyB,B.fzq,f,0.1)
for(v=0;v<4;++v){w=B.cYw[v]
d.bO(new A.E(w.a,7.5,w.b),B.fzI,q)}break A}if("plant"===e){d.hB(B.fO,B.aR8,5,D.d9,10)
d.io(B.a7N,8,B.ab6,5,8)
d.io(B.fAq,5,B.VA,4,8)
break A}if("lamp"===e){d.hB(B.fO,B.fP,4.5,B.iL,10)
d.hB(B.fP,B.aR7,0.7,B.iL,6)
d.ak_(B.fyQ,B.fyW,6,B.t6,3.5,12)
break A}if("console"===e){d.bJ(B.fyy,B.aRn,f,0.15)
d.bO(B.fDd,B.aRh,q)
d.bO(B.fC2,B.aRh,q)
d.bO(B.Da,B.fGW,q)
break A}if("shelf"===e){d.bJ(B.aR4,B.fAl,f,0.1)
for(u=0;u<4;++u){q=10+u*15
d.bO(new A.E(0,q,1),B.fAf,B.iL)
w=D.o.G(u,2)
d.bO(new A.E(-8+w*6,q,2),B.fB3,[D.eM,D.dS,D.fm,D.dT][u])
d.bO(new A.E(4+w*4,q,2),B.fBO,[D.dT,D.fm,D.eM,D.dS][u])}break A}if("tree"===e){d.ak_(B.fO,B.aR5,4.2,B.x5,3,8)
d.io(B.aR7,17,B.ab6,5,9)
d.io(B.fBU,11,B.VA,4,8)
d.io(B.fGR,12,B.bdg,4,8)
break A}if("pine"===e){d.hB(B.fO,B.aR0,3,B.x5,8)
for(u=0;u<3;++u){q=u*14
d.ak_(new A.E(0,8+q,0),new A.E(0,26+q,0),14-u*3.5,B.abw,1.5,10)}break A}if("bush"===e){d.io(B.Da,9,B.bau,4,8)
d.io(B.fB2,6.5,B.VA,4,8)
break A}if("flowers"===e){for(v=0;v<5;++v){q=B.d5C[v]
t=q.a
s=q.b
d.hB(new A.E(t,0,s),new A.E(t,7,s),0.4,B.abw,5)
d.io(new A.E(t,8,s),2.2,q.c,3,6)}break A}if("fence"===e){for(v=0;v<4;++v)d.bJ(new A.E(B.d75[v],9,0),B.fFl,f,0.05)
d.bO(B.zt,B.aSc,q)
d.bO(B.aR2,B.aSc,q)
break A}if("lamppost"===e){d.hB(B.fO,B.fyU,1.3,B.iL,8)
d.hB(B.fO,B.fyH,3.5,B.iL,8)
d.io(B.fyV,4,B.t6,4,8)
break A}if("bench"===e){d.bJ(B.fya,B.aRn,f,0.1)
d.bJ(B.fys,B.fAz,f,0.1)
d.bO(B.fGE,B.aRl,B.iL)
d.bO(B.fzt,B.aRl,B.iL)
break A}if("car"===e){d.bJ(B.aR0,B.fBA,f,0.4)
d.bJ(B.fGO,B.fAE,f,0.4)
d.bJ(B.fzy,B.fD3,B.px,0.6)
d.bO(B.fH8,B.aRd,B.t6)
d.bO(B.fDv,B.aRd,B.t6)
for(v=0;v<2;++v){t=B.awv[v]
d.hB(new A.E(t,5,-18),new A.E(t,5,-21),5.5,D.pu,12)
d.hB(new A.E(t,5,18),new A.E(t,5,21),5.5,D.pu,12)}break A}if("road"===e||"roadturn"===e||"roadtee"===e||"roadcross"===e){A.hQA(d,e)
break A}if("house2"===e||"shop"===e||"hospital"===e||"firestation"===e||"school"===e){A.hJd(d,e,f)
break A}if("firetruck"===e){d.bJ(B.aR1,B.fBR,D.bI,0.3)
d.bJ(B.fAi,B.fzM,D.bI,0.3)
d.bJ(B.fF9,B.fAY,B.px,0.6)
d.bO(B.fGz,B.fHo,D.dz)
for(u=0;u<6;++u)d.bO(new A.E(-34+u*11,24,0),B.fEi,D.dz)
d.bO(B.fAj,B.aRw,D.d6)
d.bO(B.fFy,B.fCR,B.Wl)
for(v=0;v<3;++v){t=B.d76[v]
d.hB(new A.E(t,6,-19),new A.E(t,6,-22.5),6,D.pu,12)
d.hB(new A.E(t,6,19),new A.E(t,6,22.5),6,D.pu,12)}break A}if("ambulance"===e){d.bJ(B.J0,B.fBB,D.c,0.4)
d.bJ(B.fA9,B.fzU,D.c,0.4)
d.bJ(B.fD0,B.fG_,B.px,0.6)
d.bO(B.fHQ,B.aRK,D.bI)
d.bO(B.fE4,B.aRK,D.bI)
d.bO(B.aS2,B.fDE,D.bI)
d.bO(B.aS2,B.fCE,D.bI)
d.bO(B.fAc,B.aRw,D.ay)
for(v=0;v<2;++v){t=B.awv[v]
d.hB(new A.E(t,6,-19),new A.E(t,6,-22.5),6,D.pu,12)
d.hB(new A.E(t,6,19),new A.E(t,6,22.5),6,D.pu,12)}break A}if("dog"===e||"cat"===e||"cow"===e||"sheep"===e||"chicken"===e||"horse"===e){A.h9X(d,e,f,0)
break A}if("pond"===e){q=C.a([],x.z)
r=new A.jf(q)
r.b=d.b
r.f=d.f
r.r=!0
r.e5(B.fO,B.fGq,28,B.bfi,0.8,22)
D.d.v(d.a,A.heg(q,B.fCf,B.fO))
for(v=0;v<3;++v){q=B.cUv[v]
d.io(new A.E(q.a,1.2,q.b),2.6,B.acW,3,6)}break A}if("swing"===e){d.hB(B.fGJ,B.fzW,1.6,D.d9,8)
for(v=0;v<2;++v){t=E.a2f[v]
d.hB(new A.E(t,38,0),new A.E(t,0,14),1.4,D.d9,6)
d.hB(new A.E(t,38,0),new A.E(t,0,-14),1.4,D.d9,6)}for(v=0;v<2;++v){t=E.a2g[v]
d.hB(new A.E(t,38,0),new A.E(t,15,0),0.3,B.iL,4)}d.bO(B.J0,B.fHU,f)
break A}if("shed"===e){d.bJ(B.J0,B.fAO,f,0.05)
d.bO(B.aR4,B.fAU,B.VR)
d.bO(B.fGm,B.fGf,q)
break A}if("doghouse"===e){d.bJ(B.fyY,B.fzV,f,0.05)
d.bO(B.fA7,B.fHh,B.VR)
d.bO(B.fF8,B.fI2,B.Vx)
break A}d.bO(B.zt,B.fz7,f)}},
ca8:function ca8(){},
fm8:function fm8(d){this.a=d},
flY:function flY(){},
fm5:function fm5(){},
fm6:function fm6(d,e,f){this.a=d
this.b=e
this.c=f},
flZ:function flZ(){},
fm_:function fm_(){},
fm0:function fm0(){},
fm1:function fm1(d){this.a=d},
fm3:function fm3(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fm4:function fm4(d){this.a=d},
fm7:function fm7(d){this.a=d},
fm2:function fm2(d){this.a=d},
fg4:function fg4(d){this.a=d},
fg5:function fg5(d){this.a=d},
fg3:function fg3(d){this.a=d},
fg2:function fg2(d){this.a=d},
foN:function foN(){},
foO:function foO(d){this.a=d},
foP:function foP(d){this.a=d},
f6T:function f6T(d,e){this.a=d
this.b=e},
fgD:function fgD(d,e){this.a=d
this.b=e},
fgp:function fgp(d){this.a=d},
fgq:function fgq(){},
fgr:function fgr(){},
fgs:function fgs(d){this.a=d},
fgv:function fgv(d){this.a=d},
fgw:function fgw(){},
fgx:function fgx(d){this.a=d},
fgy:function fgy(d){this.a=d},
fgz:function fgz(d){this.a=d},
fgA:function fgA(d){this.a=d},
fgB:function fgB(d){this.a=d},
fgC:function fgC(){},
fgt:function fgt(d){this.a=d},
fgu:function fgu(d){this.a=d},
h0w(){var w=x.S
return new A.bPI(C.ew([72],w),C.aX(w),C.aX(w),C.aX(w))},
hVh(d){var w
A:{if(81===d){w="outlet"
break A}if(82===d){w="switch"
break A}if(84===d){w="gfci"
break A}if(86===d||87===d){w="ptrap"
break A}if(85===d){w="faucet"
break A}w=null
break A}return w},
afj(a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=C.a([],x.z),a0=new A.jf(d)
a0.b=70
a0.iy(B.fFT,B.fHf,B.bcp,4)
a0.c=1
a0.b=91
w=new A.fmd(a0)
w.$3(B.fCD,B.fC4,15)
w.$4$alongX(B.fGV,B.fEU,11,!1)
w.$4$alongX(B.fAX,B.fCb,11,!1)
w.$4$alongX(B.fGF,B.fCQ,6,!1)
w.$4$alongX(B.fBr,B.fEV,6,!1)
for(v=0;v<=12;++v)a0.aBE(new A.E(-12+v*2,8.4,0),B.fFr,B.W8,!1,0.05)
a0.c=2
a0.b=92
u=new A.fma(a0)
u.$2(B.ceL,B.t8)
u.$2(B.d4j,B.nE)
u.$2(B.d8I,B.nE)
t=new A.fm9(a0)
t.$1(B.cNP)
t.$1(B.cTj)
a0.c=3
a0.b=93
s=new A.fmc(a0)
s.$1(B.cMQ)
s.$2$col(B.cLh,B.wL)
s.$2$col(B.cKx,B.wL)
s.$1(B.d1p)
a0.c=4
a0.b=0
a0.d=0.22
a0.iy(B.fCa,B.fEk,B.A5,4)
a0.iy(B.fEh,B.aRQ,B.A5,4)
a0.iy(B.fCF,B.aRQ,B.A5,4)
a0.iy(B.fDj,B.aRU,B.A5,3)
a0.iy(B.fIb,B.aRU,B.A5,3)
a0.d=1
a0.c=5
a0.e=0.3
a0.b=0
a0.qe(B.fGy,B.fC8,B.bag,0.1,4)
a0.b=71
a0.bJ(B.fFY,B.fFs,B.abG,0.5)
a0.bO(B.fHT,B.fD7,B.E1)
r=[72,73,74,75,76]
for(q=a1.d,p=a1.e,v=0;v<5;++v){o=D.o.G(v,2)
n=D.o.an(v,2)
m=r[v]
l=q.t(0,m)
k=p.t(0,m)
a0.b=m
m=9.55+o*0.5
j=5.7-n*0.5
a0.bJ(new A.E(m,j,-7.5),B.fBS,B.af2,0.3)
if(l)i=0
else i=k?-0.07:0.07
if(l)h=D.cd
else h=k?D.bn:D.bR
a0.bJ(new A.E(m+0,j+i,-7.42),B.fCU,h,0.4)}a0.b=90
a0.bJ(B.fEW,B.fB0,B.bjd,0.1)
a0.bJ(B.fGY,B.fCr,B.WF,0.1)
a0.bJ(B.fIy,B.aSb,B.WF,0.1)
a0.bJ(B.fCk,B.aSb,B.WF,0.1)
g=new A.fmb(a0)
g.$3(81,B.fBw,a1.x?B.wW:B.Wq)
a0.b=81
a0.bO(B.fEX,B.aS4,B.Ea)
a0.bO(B.fDH,B.aS4,B.Ea)
g.$5$h$w(82,B.fHX,F.WA,0.65,0.4)
a0.b=82
a0.bJ(B.fGj,B.fB_,B.acl,0.4)
f=!q.t(0,72)
a0.b=83
a0.e5(B.fGa,B.aRF,0.5,B.bh0,0.4,14)
a0.b8P(B.fHw,0.3,f?A4.Wt:B.bc9,0.7)
if(f){a0.b=0
a0.d=0.22
a0.iQ(B.aRv,1.5,B.VK,4,10,0)
a0.d=1}a0.b=94
a0.bJ(B.fHm,B.aSe,B.m6,0.1)
a0.bJ(B.fF7,B.aSe,B.m6,0.1)
a0.bJ(B.fHV,B.fCI,B.m6,0.1)
a0.qe(B.fEw,B.fHy,B.El,0.5,2)
a0.bJ(B.fFV,B.fIu,B.E8,0.7)
a0.b=85
a0.jT(A.Gh(B.cWD,0.2,6),0.055,B.kD,!1,0.9,8)
a0.b=84
a0.bJ(B.fHG,B.fGt,B.Wq,0.3)
a0.bO(B.fDq,B.fHS,a1.y?B.acV:B.aeX)
a0.b=86
a0.jT(A.Gh(B.cOg,0.35,3),0.11,B.pm,!1,0.3,8)
a0.b=87
a0.e5(B.fE1,B.fG0,0.19,a1.c?B.Vv:B.bf2,0.3,8)
a0.b=88
a0.bJ(B.fAC,B.fBX,B.Ac,0.7)
a0.Kj(B.fFS,B.aS5,0.72,B.Ac,0.55,0.7,16)
a0.e5(B.aS5,B.fEF,0.78,B.bgD,0.7,16)
a0.b=89
a0.e5(B.fH3,B.aRy,0.85,B.b62,0.6,18)
a0.e5(B.aRy,B.fEj,0.5,B.b63,0.5,12)
a0.bO(B.fFf,B.fIn,B.beX)
a0.b=95
for(p=a1.f,m=a1.r,v=0;v<3;++v){e=B.cuJ[v]
if(m.t(0,v)){j=e.a
i=e.b
a0.bO(new A.E(j,i,-7.82),B.fGc,B.A5)
a0.bO(new A.E(j,i,-7.79),B.fEn,B.b8Y)}else if(p.t(0,v)){j=e.a
i=e.b
a0.bO(new A.E(j,i,-7.82),B.fzG,B.adZ)
a0.bO(new A.E(j,i,-7.8),B.fF5,B.bju)}}if(a1.w){a0.b=96
a0.e5(B.fEq,B.fDX,0.1,D.d9,0.7,8)}a0.e=0
a0.c=6
a0.b=0
a0.d=0.4
a0.bfM(B.aRq,B.aS3,B.a7T,B.a7R,B.abN,B.fER,!0)
a0.bfM(B.aRY,B.aS9,B.a7R,B.a7T,B.abN,B.fGh,!0)
a0.bgT(B.aRq,B.aS9,B.a7R,B.ac0)
a0.bgT(B.aS3,B.aRY,B.a7T,B.ac0)
a0.d=1
p=q.t(0,72)?"This breaker has TRIPPED (it is in the middle, orange). The living room has no power. Tap it to flip it off and on again.":"This breaker is ON. The living room has power."
q=q.t(0,72)?"The light is off because the living room breaker has tripped.":"The ceiling light is on."
m=a1.b
j=m&&!a1.c?"Water is dripping from the slip nut here. Pick the wrench, then tap the nut to tighten it.":"The P-trap holds a water seal that blocks sewer gas. Tap Open lesson to build one."
m=m&&!a1.c?"This slip nut is loose and the trap is dripping. Pick the wrench and tap here to tighten it.":"The slip nut is tight."
return new A.zo(d,C.F([70,B.dXN,91,B.dXd,92,B.dXw,93,B.dXE,71,B.dXS,72,new A.d1("Living room breaker",p,B.fIf,3.5),73,B.dXo,74,B.dXG,75,B.dX3,76,B.dXz,81,B.dXB,82,B.dWV,83,new A.d1("Ceiling light",q,B.aRF,7),84,B.dXH,85,B.dX5,86,new A.d1("P-trap under the sink",j,B.fFR,4.5),87,new A.d1("Slip nut (leaking?)",m,B.aRH,3.5),88,B.dWS,89,B.dXF,90,B.dXJ,94,B.dXn,95,B.dXL,96,B.dWX],x.S,x.q),B.GQ,B.vI,null)},
hfo(d,e){var w,v,u,t,s,r,q,p=C.a([],x.z),o=new A.jf(p)
o.c=5
o.e=0.8
if(d.w)for(w=e*1.5,v=0;v<6;++v){u=D.k.G(w+v/6,1)
o.iQ(new A.E(3.4+Math.sin(v*2)*0.12,3.3-u*u*2.8,-7.7),0.05,D.Kg,3,6,0.9)}if(d.as){u=D.k.G(e*1.1,1)
o.iQ(new A.E(3,3.9-u*u*0.7,-6.95),0.05,B.VH,3,6,0.9)}if(d.Q)for(w=e*1.6,v=0;v<6;++v){u=D.k.G(w+v/6,1)
o.iQ(new A.E(8.2+Math.sin(v*1.7)*0.15,2.2-u*1.5,-7.2),0.05,B.VH,3,6,0.9)}if(d.at){o.d=0.55
o.bJ(B.fCi,B.fDn,B.bgQ,0.8)
o.d=1}if(d.x)for(w=e*2,t=e*6,v=0;v<8;++v){u=D.k.G(w+v*0.13,1)
s=v*2.4+t
r=Math.cos(s)
s=Math.sin(s)
q=C.aq(E.WH,E.WM,1-u)
q.toString
o.iQ(new A.E(-3.2+r*u*0.7,1.3+s*u*0.7,-7.6+u*0.3),0.05,q,3,5,0)}if(d.z&&!d.d.t(0,72)){o.b=0
o.d=D.k.D((Math.sin(e*17)+Math.sin(e*29)+2)/4*0.5,0,0.6)
o.iQ(B.aRv,1.5,B.VK,4,10,0)
o.d=1}if(d.b&&!d.c){for(w=e*1.3,v=0;v<5;++v){u=D.k.G(w+v*0.2,1)
o.iQ(new A.E(3.05,1.45-u*u*1.4,-6.95),0.05,B.KU,3,6,0.9)}o.d=0.5
o.bJ(B.fC3,new A.E(0.7+0.3*Math.sin(e),0.02,0.5),B.KU,0.9)
o.d=1}return p},
bPI:function bPI(d,e,f,g){var _=this
_.a=5
_.b=!0
_.c=!1
_.d=d
_.e=e
_.f=f
_.r=g
_.at=_.as=_.Q=_.z=_.y=_.x=_.w=!1},
fmd:function fmd(d){this.a=d},
fma:function fma(d){this.a=d},
fm9:function fm9(d){this.a=d},
fmc:function fmc(d){this.a=d},
fmb:function fmb(d){this.a=d},
lL(d,e,f,g){var w
try{H.dF(d,"",e,0,f,g)}catch(w){}},
y8(){A.lL(880,80,0.25,"tri")
C.bN(W.afK,new A.fn7(),x.H)},
hx9(){return new A.MM(null)},
X1(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){return new A.b54(r,q,e,p,o,h,f,k,l,g,i,s,t,j,m,n,d,null)},
Ql(d,e,f,g,h){var w=null,v=g?e.j(0.25):D.w.j(0.5),u=C.m(18),t=C.I(g?e:D.b2,D.q,1),s=x.p,r=C.a([],s)
D.d.v(r,C.a([C.W(f,g?e:D.ad,w,w,w,16),D.eb],s))
r.push(C.d(d,w,w,w,w,w,w,C.l(w,w,g?e:D.ad,w,w,w,w,w,w,w,w,12,w,w,D.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w))
return C.aE(w,C.p(w,C.A(r,D.m,w,D.e,D.Q,0,w,w),D.f,w,w,new C.o(v,w,t,u,w,w,D.n),w,w,w,w,D.h6,w,w,w),D.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,h,w,w,w,w,w,w,!1,D.a8)},
y7(d,e,f,g){var w=null,v=f==null,u=v?D.dp:g.j(0.9),t=C.m(14),s=C.W(e,v?D.c_:D.w,w,w,w,18)
return C.D(C.aE(w,C.p(w,C.A(C.a([s,D.bp,new C.dq(1,D.cj,C.d(d,w,w,w,w,w,w,C.l(w,w,v?D.c_:D.w,w,w,w,w,w,w,w,w,12.5,w,w,D.u,w,w,!0,w,w,w,w,w,w,w,w),D.L,w,w),w)],x.p),D.m,w,D.bb,D.j,0,w,w),D.f,w,w,new C.o(u,w,w,t,w,w,D.n),w,w,w,w,D.v4,w,w,w),D.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,!1,D.a8),1)},
fDn(d,e,f,g){return C.bV(E.ma,null,new A.fDp(e,g,f),d,!0,!0,!0,D.kX,!1,!1,x.H)},
fn7:function fn7(){},
Fj:function Fj(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
MM:function MM(d){this.a=d},
bhR:function bhR(){this.d=!1
this.c=this.a=null},
dKu:function dKu(d){this.a=d},
dKx:function dKx(d){this.a=d},
dKy:function dKy(d){this.a=d},
dKw:function dKw(d){this.a=d},
dKz:function dKz(d){this.a=d},
dKv:function dKv(d){this.a=d},
dKC:function dKC(d){this.a=d},
dKD:function dKD(d){this.a=d},
dKE:function dKE(d){this.a=d},
dKF:function dKF(d){this.a=d},
dKG:function dKG(d){this.a=d},
dKH:function dKH(d){this.a=d},
dKI:function dKI(d){this.a=d},
dKJ:function dKJ(d){this.a=d},
dKA:function dKA(d,e){this.a=d
this.b=e},
dKB:function dKB(d){this.a=d},
b54:function b54(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u){var _=this
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
cpA:function cpA(d){this.a=d},
cpB:function cpB(d){this.a=d},
fDp:function fDp(d,e,f){this.a=d
this.b=e
this.c=f},
fDo:function fDo(){},
AZ:function AZ(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
bRN:function bRN(d){this.a=d},
GX:function GX(d,e,f){this.c=d
this.d=e
this.a=f},
ayj:function ayj(){var _=this
_.r=_.f=_.e=_.d=$
_.w=""
_.x=0
_.y=null
_.z=!1
_.Q=0
_.c=_.a=_.as=null},
d2f:function d2f(d,e,f){this.a=d
this.b=e
this.c=f},
d2g:function d2g(d){this.a=d},
d2e:function d2e(d){this.a=d},
d28:function d28(d){this.a=d},
d27:function d27(d){this.a=d},
d29:function d29(d){this.a=d},
d2a:function d2a(d){this.a=d},
d2b:function d2b(d,e){this.a=d
this.b=e},
d2c:function d2c(d,e){this.a=d
this.b=e},
d2d:function d2d(d){this.a=d},
d2h:function d2h(d){this.a=d},
d2p:function d2p(){},
d2s:function d2s(d,e,f){this.a=d
this.b=e
this.c=f},
d2q:function d2q(d){this.a=d},
d2o:function d2o(d){this.a=d},
d2r:function d2r(d){this.a=d},
d2n:function d2n(d){this.a=d},
d2t:function d2t(d){this.a=d},
d2u:function d2u(d){this.a=d},
d2v:function d2v(d){this.a=d},
d2w:function d2w(d,e){this.a=d
this.b=e},
d2m:function d2m(d,e){this.a=d
this.b=e},
d2x:function d2x(d){this.a=d},
d2l:function d2l(d){this.a=d},
d2y:function d2y(d){this.a=d},
d2k:function d2k(d){this.a=d},
d2z:function d2z(d){this.a=d},
d2j:function d2j(d){this.a=d},
d2A:function d2A(d){this.a=d},
d2i:function d2i(d){this.a=d},
a8r:function a8r(d,e){this.c=d
this.a=e},
aEe:function aEe(){var _=this
_.f=_.e=_.d=$
_.r=""
_.w=0
_.x=null
_.y=!1
_.c=_.a=_.z=null},
eM8:function eM8(d,e,f){this.a=d
this.b=e
this.c=f},
eM9:function eM9(d){this.a=d},
eM7:function eM7(d){this.a=d},
eM1:function eM1(d){this.a=d},
eM2:function eM2(d,e){this.a=d
this.b=e},
eM3:function eM3(d,e){this.a=d
this.b=e},
eM4:function eM4(d,e){this.a=d
this.b=e},
eM5:function eM5(d){this.a=d},
eM6:function eM6(d,e){this.a=d
this.b=e},
eMd:function eMd(){},
eMh:function eMh(d,e){this.a=d
this.b=e},
eMe:function eMe(d){this.a=d},
eMf:function eMf(d,e){this.a=d
this.b=e},
eMc:function eMc(d,e){this.a=d
this.b=e},
eMg:function eMg(d){this.a=d},
eMb:function eMb(d){this.a=d},
eMa:function eMa(){},
a3R:function a3R(d,e){this.c=d
this.a=e},
ayy:function ayy(){var _=this
_.f=_.e=_.d=$
_.r=""
_.w=0
_.x=null
_.y=!1
_.c=_.a=_.z=null},
d5a:function d5a(d,e,f){this.a=d
this.b=e
this.c=f},
d5b:function d5b(d){this.a=d},
d59:function d59(d){this.a=d},
d52:function d52(d){this.a=d},
d55:function d55(d){this.a=d},
d56:function d56(d,e){this.a=d
this.b=e},
d57:function d57(d,e){this.a=d
this.b=e},
d54:function d54(d){this.a=d},
d58:function d58(d,e){this.a=d
this.b=e},
d53:function d53(d){this.a=d},
d5f:function d5f(){},
d5l:function d5l(d,e){this.a=d
this.b=e},
d5g:function d5g(d){this.a=d},
d5h:function d5h(d){this.a=d},
d5e:function d5e(d){this.a=d},
d5j:function d5j(d,e){this.a=d
this.b=e},
d5d:function d5d(d,e){this.a=d
this.b=e},
d5i:function d5i(d){this.a=d},
d5k:function d5k(d){this.a=d},
d5c:function d5c(d){this.a=d},
azq:function azq(d){this.a=d},
azr:function azr(d){var _=this
_.d=d
_.f=_.e=$
_.r=0
_.w=""
_.x=null
_.y=!1
_.c=_.a=_.z=null},
dcf:function dcf(d,e,f){this.a=d
this.b=e
this.c=f},
dcg:function dcg(d){this.a=d},
dce:function dce(d){this.a=d},
dc9:function dc9(d){this.a=d},
dcb:function dcb(d,e){this.a=d
this.b=e},
dcc:function dcc(d,e){this.a=d
this.b=e},
dcd:function dcd(d,e){this.a=d
this.b=e},
dca:function dca(d){this.a=d},
dco:function dco(d,e){this.a=d
this.b=e},
dcj:function dcj(d,e){this.a=d
this.b=e},
dcl:function dcl(d){this.a=d},
dck:function dck(d){this.a=d},
dcm:function dcm(d){this.a=d},
dci:function dci(d){this.a=d},
dcn:function dcn(d){this.a=d},
dch:function dch(d,e){this.a=d
this.b=e},
jy:function jy(d,e){this.a=d
this.b=e},
M8:function M8(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a5Y:function a5Y(d){this.a=d},
c5s:function c5s(d){this.a=d},
fQp(){var w=x.N
return new A.cgg(C.aX(w),C.F(["n1",!1,"n2",!1],w,x.W),C.T(x.S,w))},
i4V(d,e,f){var w,v
if(!f.c.t(0,e)){w=f.d
return e==="hot"?"The red (hot) hose goes on the LEFT side only. "+w:"The blue (cold) hose goes on the RIGHT side only. "+w}w=d.e
v=f.a
if(w.h(0,v)!=null)return"That connection already has a hose."
w.n(0,v,e)
return null},
fCM(){var w,v,u=C.a([B.aRm,B.fDS],x.o)
for(w=1;w<=12;++w){v=3.141592653589793+3.141592653589793*w/12
u.push(new A.E(3+3*Math.cos(v),0.2+3*Math.sin(v),0))}D.d.v(u,A.Gh(B.cXR,1,6))
return u},
bzz(d){var w,v,u,t,s="trap",r=C.a([],x.z),q=new A.jf(r)
q.b=49
q.qe(B.fzB,B.fAu,B.m6,0.1,2)
q.qe(B.fI9,B.fzD,B.m6,0.1,2)
q.b=47
q.iy(B.fEQ,B.fAv,B.uS,3)
q.iy(B.fA6,B.fzE,B.uS,3)
q.b=46
q.qe(B.fB4,B.fFv,B.El,0.5,3)
q.baN(B.fGx,B.J0,6.5,B.E8,!0,0.7,20)
q.e5(B.fFO,B.fDB,1.5,B.kD,0.85,14)
q.b=48
q.a31(B.a7U,B.fCC,0.92,B.pm,!1,!0,0.3,14)
q.cS_(B.a7U,B.fHC,1,0.72,B.pm,0.3)
w=new A.fmO(d,q)
w.$5(41,B.a1A,B.kD,0.85,"tail")
w.$5(42,A.fCM(),B.pm,0.3,s)
w.$5(43,B.a2s,B.pm,0.3,"arm")
w=new A.fmN(d,q)
v=d.a
w.$6(44,"n1",B.a7Q,B.fP,B.fCO,v.t(0,"tail")&&v.t(0,s))
w.$6(45,"n2",B.a7S,B.j_,B.fGs,v.t(0,s)&&v.t(0,"arm"))
if(v.t(0,s)){q.b=0
q.d=0.55
q.e=0.4
u=A.fCM()
w=C.U(u).k("a2<1>")
t=C.B(new C.a2(u,new A.fmM(),w),w.k("J.E"))
if(t.length>1)q.aHb(t,0.4092,B.bje,!1,!0,0.6,8)
q.d=1
q.e=0}return new A.zo(r,C.F([41,B.dX7,42,B.dX9,43,B.dXD,44,B.dXr,45,B.dXP,46,B.dXf,47,B.dXl,48,B.dWQ,49,B.dXb],x.S,x.q),B.GQ,B.vI,null)},
i2U(d,e){var w,v,u,t,s,r,q,p=C.a([],x.z),o=new A.jf(p),n=d.d
if(n.length!==0){w=n==="n1"?B.fIp:B.fHc
for(n=e*1.4,v=w.a+0,u=w.b,t=w.c+0,s=0;s<5;++s){r=D.k.G(n+s*0.2,1)
o.iQ(new A.E(v,u+(-r*6*r-r*1.5),t),0.22*(1-r*0.3),B.KU,3,6,0.9)}}else if(d.c){n=x.R
v=C.B(B.a1A,n)
u=A.fCM()
D.d.v(v,C.dd(u,1,null,C.U(u).c))
D.d.v(v,C.dd(B.a2s,1,null,n))
for(n=e*0.45,s=0;s<18;++s){r=D.k.G(n+s/18,1)
q=D.o.D(D.k.bu(r*(v.length-1)),0,v.length-2)
u=v.length
o.iQ(A.zH(v[q],v[q+1],r*(u-1)-q),0.38,B.biE,3,6,0.9)}for(n=e*2.2,s=0;s<6;++s)o.iQ(new A.E(0,14-D.k.G(n+s/6,1)*5.4,0),0.3,B.VH,3,6,0.9)}return p},
afw(d){switch(d){case 61:return B.fzA
case 62:return B.fHa
case 63:return B.fEe
default:return B.fE5}},
fV1(d){var w=d==="hot",v=A.afw(w?61:62),u=A.afw(w?63:64),t=w?-1:1
return A.agJ(C.a([v,v.ad(0,new A.E(t*0.6,2.2,1.2)),A.zH(v,u,0.5).ad(0,new A.E(t*1.4,0,2.6)),u.ad(0,new A.E(-t*0.2,-2,1)),u],x.o),6)},
aNt(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=C.a([],x.z),e=new A.jf(f)
e.b=67
e.iy(B.fzx,B.fAk,B.uS,3)
e.b=66
e.qe(B.fDR,B.fHB,B.El,0.5,3)
e.hB(B.fGb,B.fF0,5.5,E.Ed,16)
e.b=65
e.e5(B.fHn,B.aRX,3.4,B.kD,0.9,20)
e.jT(A.Gh(B.d1Z,1.4,6),0.5,B.kD,!0,0.9,12)
for(w=0;w<2;++w){v=B.cYy[w]
u=v*1.2
e.e5(new A.E(u,15.5,-3.6),new A.E(u,17.7,-3.6),0.38,B.kD,0.9,10)
t=v<0?B.t8:B.nE
e.e5(new A.E(u,17.7,-3.6),new A.E(u,18.6,-3.6),0.6,t,0.6,12)}for(u=[B.ehi,B.ed4],w=0;w<2;++w){t=u[w]
v=t.b
e.b=t.a
e.e5(new A.E(v,15.3,-3.6),new A.E(v,11.4,-3.6),0.45,B.kD,0.9,10)
e.e5(new A.E(v,11.4,-3.6),new A.E(v,10.7,-3.6),0.3,B.beF,0.6,8)
e.yW(new A.E(v,11.3,-3.6),new A.E(v,11.9,-3.6),0.78,0.48,B.bgB,0.7,8)}for(u=[B.eyH,B.eAs],w=0;w<2;++w){t=u[w]
v=t.b
e.b=t.a
e.e5(new A.E(v,-1.5,-6),new A.E(v,-1.5,-3.6),0.4,B.K7,0.7,12)
e.e5(new A.E(v,-1.5,-4.4),new A.E(v,0.7,-4.4),0.78,B.rY,0.8,12)
e.e5(new A.E(v,0.7,-4.4),new A.E(v,1.5,-3.6),0.38,B.rY,0.8,10)
e.e5(new A.E(v,-0.2,-4.4),new A.E(v,-0.2,-3.1),0.2,B.abp,0.7,8)
e.e5(new A.E(v,-0.2,-3.1),new A.E(v,-0.2,-2.8),0.95,t.c,0.5,12)
e.yW(new A.E(v,1.2,-3.6),new A.E(v,1.9,-3.6),0.78,0.4,B.rY,0.8,8)}for(u=x.o,w=0;w<2;++w){s=B.d4o[w]
t=s==="hot"
r=t?B.cvD:B.cvQ
q=C.U(r).k("a2<1>")
p=C.B(new C.a2(r,new A.flX(d,s),q),q.k("J.E"))
e.b=t?68:69
o=t?B.t8:B.nE
t=p.length
if(t===2){n=A.fV1(s)
e.jT(n,0.34,B.KL,!1,0.7,8)
m=n.length/2|0
e.jT(C.a([n[m-1],n[m],n[m+1]],u),0.4,o,!1,0.4,8)
for(t=r.length,l=0;l<t;++l){k=A.afw(r[l])
q=k.a+0
j=k.b
i=k.c+0
e.yW(new A.E(q,j+-0.2,i),new A.E(q,j+0.6,i),0.62,0.3,B.rY,0.8,8)}}else if(t===1){k=A.afw(D.d.gL(p))
h=D.d.gL(p)===D.d.gL(r)?1:-1
t=k.a+0
q=k.b
j=k.c
e.jT(C.a([k,new A.E(t,q+h*1.4,j+1),new A.E(t,q+h*3,j+2.4)],u),0.34,B.KL,!1,0.7,8)
j+=0
e.yW(new A.E(t,q+-0.2,j),new A.E(t,q+0.6,j),0.62,0.3,B.rY,0.8,8)}}if(d.r){e.b=0
e.d=0.5
for(u=d.e,w=0;w<4;++w){g=B.a2n[w]
t=g.a
if(u.h(0,t)!=null)continue
t=A.afw(t)
q=g.c.t(0,"hot")?B.t8:B.nE
e.iQ(new A.E(t.a+0,t.b+0,t.c+0.9),0.65,q,4,8,0.1)}e.d=1}return new A.zo(f,C.F([61,B.dWZ,62,B.dX0,63,B.dWU,64,B.dX1,65,B.dXm,66,B.dXi,67,B.dWR,68,B.dXT,69,B.dXp],x.S,x.q),B.GQ,B.vI,null)},
hUP(d,e){var w,v,u,t,s,r,q,p,o,n=C.a([],x.z),m=new A.jf(n)
if(!d.f)return n
w=d.e
v=w.h(0,61)==="hot"&&w.h(0,63)==="hot"
u=w.h(0,62)==="cold"&&w.h(0,64)==="cold"
t=new A.fof(e,m)
if(v){s=A.fV1("hot")
for(r=e*0.5,q=0;q<10;++q){p=D.k.G(r+q/10,1)
o=D.o.D(D.k.bu(p*(s.length-1)),0,s.length-2)
m.iQ(A.zH(s[o],s[o+1],p*(s.length-1)-o),0.2,D.Kg,3,6,0.9)}}else if(w.h(0,61)==null)t.$2(61,D.Kg)
if(u){s=A.fV1("cold")
for(w=e*0.5,q=0;q<10;++q){p=D.k.G(w+q/10,1)
o=D.o.D(D.k.bu(p*(s.length-1)),0,s.length-2)
m.iQ(A.zH(s[o],s[o+1],p*(s.length-1)-o),0.2,B.Wd,3,6,0.9)}}else if(w.h(0,62)==null)t.$2(62,B.Wd)
if(v&&u)for(w=e*2,q=0;q<8;++q){p=D.k.G(w+q/8,1)
r=C.aq(B.biK,B.Wd,0.5)
r.toString
m.iQ(new A.E(0,21-p*6.5,1.6),0.26,r,3,6,0.9)}return n},
fod(d){return D.d.da(B.a2n,new A.foe(d))},
cgg:function cgg(d,e,f){var _=this
_.a=d
_.b=e
_.c=!1
_.d=""
_.e=f
_.r=_.f=!1},
Eu:function Eu(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fmO:function fmO(d,e){this.a=d
this.b=e},
fmN:function fmN(d,e){this.a=d
this.b=e},
fmM:function fmM(){},
flX:function flX(d,e){this.a=d
this.b=e},
fof:function fof(d,e){this.a=d
this.b=e},
foe:function foe(d){this.a=d},
fQo(d,e,f){var w=x.N
w=new A.cg6(e,d,C.aX(w),C.T(w,x.S),C.aX(w))
w.bw6(d,e,f)
return w},
heL(b7,b8,b9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2=C.a([],x.z),b3=new A.jf(b2),b4=C.T(x.S,x.q),b5=C.a([],x.E),b6=b7.c
b6===$&&C.c()
w=b6.a==="bathroom"
v=w?28:0
b3.b=9199
b3.iy(B.fGN,B.fI7,B.b8B,4)
b3.iy(B.fFu,B.fH7,B.VF,4)
b3.iy(new A.E(v+19.8+0.6,24,16),B.fDA,B.uS,2)
b4.n(0,9199,B.dXa)
b3.b=9198
b3.bJ(new A.E(v,0.6,10),B.fHl,B.m6,0.1)
b3.bJ(new A.E(v,29.4,18.6),B.fDm,B.m6,0.1)
b3.bJ(new A.E(v-19.4,13.6,10.5),B.fHW,B.m6,0.1)
for(u=[B.eDl,B.eDh,B.eCd,B.eCa],t=0;t<4;++t){s=u[t].a
b3.bJ(new A.E(v+s[0],33,s[1]),new A.E(s[2],2.4,s[3]),B.El,0.5)}b3.a31(new A.E(v,27,8),new A.E(v,34.3,8),8,B.aeL,!1,!0,0.7,20)
b3.e5(new A.E(v,27,8),new A.E(v,27.2,8),8,B.bb3,0.5,20)
b3.hB(new A.E(v,27.1,8),new A.E(v,27.3,8),1.4,B.iL,12)
b3.a31(new A.E(v+15,23.6,8),new A.E(v+19.4,23.6,8),0.92,B.pm,!1,!0,0.3,12)
b4.n(0,9198,B.dXA)
b3.b=9400
b3.e5(new A.E(-56,18,0),new A.E(-56,18,6),1.5,B.rY,0.8,12)
u=b7.r?B.nE:D.bn
b3.e5(new A.E(-57,18,6),new A.E(-55,18,6.5),4,u,0.5,14)
b3.e5(new A.E(-56,16,0),new A.E(-56,20,0),1,B.K7,0.7,10)
u=b7.r?"The water is ON. Turn it OFF with your hand before you cut into any pipe, and turn it ON to test your work.":"The water is OFF. Turn it ON to test your work."
b4.n(0,9400,new A.d1("Main water valve",u,new A.E(-56,18,4),22))
u=b7.r
s=u?"MAIN WATER: ON":"MAIN WATER: OFF"
u=u?D.dS:D.bn
b5.push(new A.t2(new A.E(-56,24,6),s,u))
r=new A.fmL(b3)
u=v-8
r.$1(u)
s=v+8
r.$1(s)
if(w)r.$1(-40)
q=new A.E(v,21,8)
p=new A.fmJ(q)
o=new A.fmD(b3,b7)
n=new A.fmE(b3,b7)
m=new A.fmK(b7,b4,b9,b8,b5)
l=b6.c
for(b6=l.length,k=b7.x,j=b7.e,i=b7.f,h=x.o,t=0;t<b6;++t){g=l[t]
f=g.a
e=j.t(0,f)
if(e){d=b7.uP(0,f)
a0=i.h(0,f)
if(a0==null)a0=0
a1=d.r-a0>0}else a1=!1
a2=D.d.cJ(l,g)
a3=9100+a2
k.t(0,f)
switch(f){case"flange":a4=new A.E(-30,0.3,14)
if(e){b3.b=a3
b3.e5(a4,new A.E(-30,0.8999999999999999,14),5.5,B.pm,0.4,18)
b3.yW(new A.E(-30,0.8,14),new A.E(-30,1.2,14),5.5,3.2,B.rY,0.8,18)}else n.$3(f,new A.E(-30,0.8,14),B.fza)
m.$3(g,a4,"Flange spot")
break
case"wax":a4=new A.E(-30,1.2,14)
if(e){b3.b=a3
b3.yW(a4,new A.E(-30,2.3,14),4.2,2.4,B.bjD,0.2,18)}else n.$3(f,new A.E(-30,1.7,14),B.fFF)
m.$3(g,a4,"Wax ring spot")
break
case"toilet":if(e){b3.b=a3
b3.Kj(new A.E(-30,0.5,14),new A.E(-30,16,14),8.5,B.Ac,6,0.8,20)
b3.e5(new A.E(-30,16,14),new A.E(-30,17,14),9.5,B.KR,0.8,20)
b3.bJ(new A.E(-30,22,4.5),B.aRe,B.Ac,0.8)
b3.bJ(new A.E(-30,29.2,4.5),B.fCd,B.KR,0.8)}else{b3.b=a3
b3.d=0.32
b3.hB(new A.E(-30,0.5,14),new A.E(-30,17,14),8.5,D.b1,16)
b3.bO(new A.E(-30,22,4.5),B.aRe,D.b1)
b3.d=1}m.$3(g,new A.E(-30,12,12),"Toilet spot")
break
case"bolts":if(e){for(f=9200+a2*2,a5=0;a5<2;++a5){a6=B.awy[a5]
b3.b=f+(a6<0?0:1)
d=-30+a6
b3.e5(new A.E(d,0.5,17),new A.E(d,3.6,17),0.45,B.E8,0.8,8)
a0=a1?D.ct:B.E8
b3.e5(new A.E(d,3.4,17),new A.E(d,4.6,17),1.2,a0,0.8,6)}f=a1?"The nuts are loose. Tighten them with the wrench, a little at a time so the porcelain does not crack.":"The toilet is bolted down."
b4.n(0,a3,new A.d1(g.c,f,new A.E(-30,3,17),20))}else for(a5=0;a5<2;++a5){a6=B.awy[a5]
b3.b=a3
b3.d=0.4
f=-30+a6
b3.hB(new A.E(f,0.5,17),new A.E(f,4.6,17),1.2,D.b1,8)
b3.d=1}m.$3(g,new A.E(-30,3,17),"Bolts")
break
case"tvalve":A.fUu(b3,a3,new A.E(-40,8,1.6),e,B.nE,new A.fmA(n,g,-30))
m.$3(g,new A.E(-40,8,2),"Valve")
break
case"those":if(e){b3.b=a3
b3.jT(A.agJ(C.a([new A.E(-40,10,1.6),new A.E(-42,14,3.5),new A.E(-36,17,3.6),new A.E(-32,21,2.5)],h),6),0.55,B.KL,!1,0.7,8)
b3.jT(C.a([new A.E(-36.8,15.5,3.6),new A.E(-35,16.4,3.6)],h),0.62,B.nE,!1,0.4,8)
if(a1)b3.hB(new A.E(-40,10,1.6),new A.E(-40,11.2,1.6),0.9,D.ct,8)}else o.$3$r(f,A.agJ(C.a([new A.E(-40,10,1.6),new A.E(-42,14,3.5),new A.E(-36,17,3.6),new A.E(-32,21,2.5)],h),6),0.9)
m.$3(g,new A.E(-36,15,3),"Toilet hose")
break
case"faucet":if(e){b3.b=a3
b3.e5(new A.E(v,34.2,8),new A.E(v,34.6,8),3.6,B.kD,0.9,20)
b3.jT(A.Gh(C.a([new A.E(v,34.6,8),new A.E(v,40,8),new A.E(v,43,10),new A.E(v,43,14),new A.E(v,41.2,14.6)],h),1.4,6),0.5,B.kD,!0,0.9,10)
for(a5=0;a5<2;++a5){a6=E.a2g[a5]
f=v+a6
b3.e5(new A.E(f,34.6,8),new A.E(f,36.6,8),0.5,B.kD,0.9,8)
d=a6<0?B.t8:B.nE
b3.e5(new A.E(f,36.6,8),new A.E(f,37.6,8),0.8,d,0.6,10)}for(a5=0;a5<2;++a5){f=v+B.d77[a5]
b3.e5(new A.E(f,34,8),new A.E(f,28.4,8),0.45,B.kD,0.9,8)}}else n.$3(f,new A.E(v,38,9),B.fz8)
m.$3(g,new A.E(v,38,8),"Faucet spot")
break
case"vhot":A.fUu(b3,a3,new A.E(u,8,1.6),e,B.t8,new A.fmB(n,g,v))
m.$3(g,new A.E(u,8,2),"Hot valve")
break
case"vcold":A.fUu(b3,a3,new A.E(s,8,1.6),e,B.nE,new A.fmC(n,g,v))
m.$3(g,new A.E(s,8,2),"Cold valve")
break
case"hhot":case"hcold":a7=f==="hhot"
a8=a7?-1:1
d=v+a8*3
a9=A.agJ(C.a([new A.E(v+a8*8,10.5,1.8),new A.E(v+a8*9,16,3.5),new A.E(v+a8*6,22,4.2),new A.E(d,27.5,6),new A.E(d,28.6,8)],h),6)
if(e){b3.b=a3
b3.jT(a9,0.5,B.KL,!1,0.7,8)
b0=a9.length/2|0
f=C.a([a9[b0-1],a9[b0],a9[b0+1]],h)
b3.jT(f,0.58,a7?B.t8:B.nE,!1,0.4,8)
if(a1){f=D.d.gL(a9)
d=D.d.gL(a9)
b3.hB(f,new A.E(d.a+0,d.b+1.4,d.c+0),0.9,D.ct,8)
d=D.d.gal(a9)
b3.hB(new A.E(d.a,d.b-1.4,d.c),D.d.gal(a9),0.9,D.ct,8)}}else o.$3$r(f,a9,0.9)
f=a9[a9.length/2|0]
m.$3(g,f,a7?"Hot hose":"Cold hose")
break
case"tail":case"trap":case"arm":d=f==="tail"
if(d)a0=B.a1A
else a0=f==="trap"?A.fCM():B.a2s
b1=p.$1(a0)
if(e){b3.b=a3
a0=d?B.kD:B.pm
b3.a5D(b1,0.66,a0,!1,!0,!0,d?0.85:0.3,12)}else o.$3$r(f,b1,0.78)
a0=J.a5(b1)
a0=a0.h(b1,a0.gM(b1)/2|0)
if(d)f="Tailpiece"
else f=f==="trap"?"P-trap":"Trap arm"
m.$3(g,a0,f)
break}}b6=new A.fmH(l,b7,b3,b4)
b6.$4("trap",q.ad(0,B.a7Q),B.fP,0)
b6.$4("arm",q.ad(0,B.a7S),B.j_,1)
return new A.zo(b2,b4,b5,B.vI,null)},
fUu(d,e,f,g,h,i){if(!g){i.$0()
return}d.b=e
d.e5(f.ad(0,B.fFG),f.ad(0,B.aRW),0.9,B.rY,0.8,12)
d.e5(f.ad(0,B.aRW),f.ad(0,B.fDh),0.45,B.rY,0.8,10)
d.e5(f.ad(0,B.aS1),f.ad(0,B.aSf),0.3,B.abp,0.7,8)
d.e5(f.ad(0,B.aSf),f.ad(0,B.fHH),1.2,h,0.5,12)},
i2O(a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=C.a([],x.z),e=new A.jf(f),d=a0.x
if(d.a===0)return f
w=a0.c
w===$&&C.c()
v=new A.fCB(w.a==="bathroom"?28:0,-30)
for(d=C.ec(d,d.r,C.a3(d).c),u=d.$ti.c,t=a0.e;d.C();){s=d.d
if(s==null)s=u.a(s)
r=v.$1(s)
q=D.d.iC(w.c,new A.fCA(s)).b==="valve"||!t.t(0,s)
s=r.a
p=r.b
o=r.c
n=0
for(;;){if(!(n<(q?10:5)))break
m=q?1.8:1.2
l=q?10:5
k=D.k.G(a1*m+n/l,1)
l=Math.sin(n*2.1)
m=q?3:0.6
j=q?4:-0.5
i=q?14:8
h=q?6:0.8
g=q?0.5:0.35
e.iQ(new A.E(s+l*k*m,p+(k*j-k*k*i),o+(1.5+k*h)),g,B.KU,3,6,0.9);++n}}return f},
nf:function nf(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
W8:function W8(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cg6:function cg6(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.d=_.c=$
_.e=f
_.f=g
_.r=!0
_.w=0
_.x=h
_.y=!1},
cga:function cga(d){this.a=d},
cgb:function cgb(d){this.a=d},
cg7:function cg7(d){this.a=d},
cgc:function cgc(d){this.a=d},
cgd:function cgd(d){this.a=d},
cge:function cge(){},
cgf:function cgf(){},
cg8:function cg8(d){this.a=d},
cg9:function cg9(d){this.a=d},
fmL:function fmL(d){this.a=d},
fmJ:function fmJ(d){this.a=d},
fmD:function fmD(d,e){this.a=d
this.b=e},
fmG:function fmG(d){this.a=d},
fmE:function fmE(d,e){this.a=d
this.b=e},
fmF:function fmF(d){this.a=d},
fmK:function fmK(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fmA:function fmA(d,e,f){this.a=d
this.b=e
this.c=f},
fmB:function fmB(d,e,f){this.a=d
this.b=e
this.c=f},
fmC:function fmC(d,e,f){this.a=d
this.b=e
this.c=f},
fmH:function fmH(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fmI:function fmI(d){this.a=d},
fCB:function fCB(d,e){this.a=d
this.b=e},
fCA:function fCA(d){this.a=d},
V7:function V7(d,e){this.d=d
this.a=e},
aCX:function aCX(d,e){var _=this
_.e=_.d=$
_.f=d
_.r=$
_.w=e
_.x=""
_.y=0
_.z=null
_.as=_.Q=!1
_.c=_.a=_.at=null},
eg1:function eg1(d,e,f){this.a=d
this.b=e
this.c=f},
eg2:function eg2(d){this.a=d},
eg0:function eg0(d){this.a=d},
efV:function efV(d){this.a=d},
eg3:function eg3(d){this.a=d},
efN:function efN(d,e){this.a=d
this.b=e},
efO:function efO(d,e){this.a=d
this.b=e},
efP:function efP(d){this.a=d},
efU:function efU(d){this.a=d},
efS:function efS(d){this.a=d},
efT:function efT(d,e){this.a=d
this.b=e},
eg_:function eg_(d){this.a=d},
efR:function efR(d,e,f){this.a=d
this.b=e
this.c=f},
efQ:function efQ(d,e,f){this.a=d
this.b=e
this.c=f},
eg4:function eg4(d){this.a=d},
eg8:function eg8(d,e){this.a=d
this.b=e},
eg6:function eg6(){},
eg5:function eg5(d){this.a=d},
eg7:function eg7(d,e){this.a=d
this.b=e},
efZ:function efZ(d){this.a=d},
efX:function efX(d,e){this.a=d
this.b=e},
efW:function efW(d,e){this.a=d
this.b=e},
efY:function efY(d,e){this.a=d
this.b=e},
l0(d){return D.d.iC(B.tW,new A.fKR(d))},
fQO(d,e,f,g){var w=x.S,v=x.N
w=new A.b3A(g,f,C.T(w,v),C.aX(w),C.aX(w),C.T(w,x.cH),C.a([new A.WO(),new A.WO()],x.gD),C.T(w,x.m),C.aX(w),C.T(w,v),C.aX(w),C.a([],x.s))
w.cgk(d,e)
return w},
hD0(d){var w
A:{if("tv"===d){w="The TV"
break A}if("lamp"===d){w="The lamp"
break A}if("toaster"===d){w="The toaster"
break A}w="The hair dryer"
break A}return w},
ys:function ys(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fKR:function fKR(d){this.a=d},
pK:function pK(d,e,f){this.a=d
this.b=e
this.c=f},
WO:function WO(){var _=this
_.a=!1
_.b=0
_.c=!0
_.d=!1},
atV:function atV(d,e){var _=this
_.a=!1
_.b=d
_.c=e
_.e=_.d=!1},
aSg:function aSg(d,e){this.a=d
this.b=e
this.c=!1},
eE:function eE(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
b3A:function b3A(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
cl4:function cl4(){},
clb:function clb(d){this.a=d},
clc:function clc(d){this.a=d},
cld:function cld(d,e){this.a=d
this.b=e},
cle:function cle(d,e){this.a=d
this.b=e},
clg:function clg(d){this.a=d},
clf:function clf(d,e){this.a=d
this.b=e},
cl3:function cl3(d){this.a=d},
cl1:function cl1(){},
cl2:function cl2(d){this.a=d},
cl9:function cl9(){},
cla:function cla(){},
cl5:function cl5(){},
cl6:function cl6(d){this.a=d},
cl7:function cl7(d){this.a=d},
clh:function clh(d){this.a=d},
cl8:function cl8(d){this.a=d},
fPH(d,e,f){return new A.Va(e,f,d,null)},
kW:function kW(d,e,f){this.a=d
this.b=e
this.c=f},
Va:function Va(d,e,f,g){var _=this
_.d=d
_.e=e
_.f=f
_.a=g},
aD3:function aD3(d,e,f){var _=this
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
eko:function eko(d,e,f){this.a=d
this.b=e
this.c=f},
ekp:function ekp(d){this.a=d},
ekn:function ekn(d){this.a=d},
ejD:function ejD(d){this.a=d},
ejE:function ejE(d){this.a=d},
ejC:function ejC(d){this.a=d},
ejF:function ejF(d){this.a=d},
ejG:function ejG(d){this.a=d},
ejO:function ejO(d){this.a=d},
ejH:function ejH(d){this.a=d},
ek5:function ek5(d,e){this.a=d
this.b=e},
ejP:function ejP(d){this.a=d},
ekk:function ekk(d){this.a=d},
ekl:function ekl(d){this.a=d},
ekm:function ekm(d,e){this.a=d
this.b=e},
eki:function eki(d){this.a=d},
ekj:function ekj(d,e){this.a=d
this.b=e},
ekh:function ekh(d){this.a=d},
ekd:function ekd(d){this.a=d},
eke:function eke(d,e,f){this.a=d
this.b=e
this.c=f},
ekf:function ekf(d){this.a=d},
ekg:function ekg(d,e,f){this.a=d
this.b=e
this.c=f},
ekq:function ekq(d,e){this.a=d
this.b=e},
ejN:function ejN(d){this.a=d},
ejL:function ejL(d){this.a=d},
ejM:function ejM(d,e){this.a=d
this.b=e},
ejK:function ejK(d){this.a=d},
ejI:function ejI(d){this.a=d},
ejJ:function ejJ(d,e){this.a=d
this.b=e},
ejQ:function ejQ(d,e){this.a=d
this.b=e},
ek3:function ek3(){},
ek4:function ek4(){},
ejR:function ejR(d){this.a=d},
ejS:function ejS(d){this.a=d},
ejT:function ejT(d){this.a=d},
ejW:function ejW(){},
ejX:function ejX(){},
ejY:function ejY(){},
ejZ:function ejZ(){},
ek_:function ek_(){},
ek0:function ek0(d){this.a=d},
ek1:function ek1(){},
ek2:function ek2(d){this.a=d},
ejU:function ejU(d){this.a=d},
ejV:function ejV(){},
ekH:function ekH(d,e){this.a=d
this.b=e},
ekJ:function ekJ(d){this.a=d},
ekv:function ekv(d){this.a=d},
ekI:function ekI(d){this.a=d},
eky:function eky(d){this.a=d},
ekz:function ekz(d,e){this.a=d
this.b=e},
ekx:function ekx(d,e){this.a=d
this.b=e},
ekA:function ekA(d,e){this.a=d
this.b=e},
ekw:function ekw(d,e){this.a=d
this.b=e},
ekK:function ekK(d,e){this.a=d
this.b=e},
eku:function eku(d,e){this.a=d
this.b=e},
ekL:function ekL(d){this.a=d},
ekt:function ekt(d){this.a=d},
ekM:function ekM(d,e){this.a=d
this.b=e},
eks:function eks(d,e){this.a=d
this.b=e},
ekN:function ekN(d){this.a=d},
ekO:function ekO(d){this.a=d},
ekP:function ekP(d,e,f){this.a=d
this.b=e
this.c=f},
ekr:function ekr(d,e,f){this.a=d
this.b=e
this.c=f},
ekB:function ekB(d){this.a=d},
ekC:function ekC(d,e){this.a=d
this.b=e},
ekD:function ekD(d){this.a=d},
ekE:function ekE(d){this.a=d},
ekF:function ekF(d){this.a=d},
ekG:function ekG(d){this.a=d},
ekc:function ekc(d){this.a=d},
ekb:function ekb(d){this.a=d},
ek8:function ek8(d,e){this.a=d
this.b=e},
ek6:function ek6(){},
ek7:function ek7(){},
ek9:function ek9(d,e){this.a=d
this.b=e},
eka:function eka(d,e){this.a=d
this.b=e},
a1S(d,e){var w=d.d,v=e.a,u=e.c,t=e.b,s=w.a,r=w.b
w=w.c
return d.c?new A.E(s+v,r-u,w+t):new A.E(s+v,r+t,w+u)},
fTN(d,e,f,g){var w,v,u,t,s,r=d.a,q=e.d,p=e.c?A.tS(r,1.5707963267948966,0,q):A.tS(r,0,0,q)
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
q.n(0,s,new A.d1(t.a,t.b,A.a1S(e,t.c),t.d))}return new C.y(r,q)},
hOJ(a3,a4,a5,a6,a7,a8,a9,b0,b1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=x.i,a2=C.ew([a4,a5],a1)
for(w=b1.length,v=0;v<b1.length;b1.length===w||(0,C.L)(b1),++v){u=b1[v].a
a2.K(0,D.k.D(u[0],a4,a5))
a2.K(0,D.k.D(u[1],a4,a5))}t=C.B(a2,a2.$ti.k("cn.E"))
D.d.fh(t)
for(w=C.U(b1).k("a2<1>"),u=w.k("J.E"),s=0;r=s+1,r<t.length;s=r){q=t[s]
p=t[r]
o=p-q
if(o<0.01)continue
n=(q+p)/2
m=C.B(new C.a2(b1,new A.fg7(n),w),u)
l=C.ew([a6,a7],a1)
for(k=m.length,v=0;v<m.length;m.length===k||(0,C.L)(m),++v){j=m[v].a
l.K(0,D.k.D(j[2],a6,a7))
l.K(0,D.k.D(j[3],a6,a7))}i=C.B(l,l.$ti.k("cn.E"))
D.d.fh(i)
for(k=!(o>30),h=0;g=h+1,g<i.length;h=g){f=i[h]
e=i[g]
j=e-f
if(j<0.01)continue
d=(f+e)/2
if(D.d.b8(m,new A.fg8(d)))continue
a0=!k||j>60?2:1
a3.iy(new A.E(n,d,a8),new A.E(o,j,a9),b0,a0)}}},
Cr(d1,d2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1=null,c2=x.z,c3=C.a([],c2),c4=new A.jf(c3),c5=C.a([],x.h),c6=x.E,c7=C.a([],c6),c8=x.S,c9=C.T(c8,x.q),d0=$.ml=$.ml+1
c4.f=-1
c4.b=8001
c4.qe(B.fBF,B.fDU,B.At,0.15,4)
c4.f=0
c4.iy(B.fBo,B.aRz,B.abl,3)
c4.bJ(B.fGQ,B.fHN,B.px,0.5)
c4.bO(B.aRC,B.fBh,B.Ai)
c4.bO(B.aRC,B.fHY,B.Ai)
c4.iy(B.fDZ,B.aRz,B.abl,3)
c4.bJ(B.fBk,B.fE_,B.wK,0.15)
c4.bJ(B.fEs,B.fE2,B.DT,0.8)
c4.b=0
c4.f=3
c4.d=d1.gyk()?0.42:0.1
c4.iy(B.fAo,B.fFA,d1.gyk()?B.m8:B.b5c,3)
c4.d=1
c4.f=2
c4.b=8001
if(!d1.gyk())for(w=0;w<10;++w)c4.aBE(new A.E(-72+w*16,51.3,55),B.fFZ,B.m6,!1,0.05)
else{c4.x=d0
c4.bJ(B.fEO,B.fCV,D.c,0.2)
c4.bJ(B.fIz,B.aRL,D.c,0.2)
c4.bJ(B.fCh,B.aRL,D.c,0.2)}if(d1.gyk()){c4.x=d0
c4.bJ(B.fCp,B.fCY,B.m8,0.2)}c4.x=0
c4.b=8001
c4.r=!0
c4.iy(B.fHE,B.fIa,B.bbQ,2)
c4.bJ(B.fGT,B.fB8,B.adj,0.1)
c4.bJ(B.fGS,B.fB9,B.VG,0.1)
c4.bJ(B.fGM,B.aRr,B.VG,0.1)
c4.bJ(B.fA0,B.aRr,B.VG,0.1)
c4.r=!1
c9.n(0,8001,B.dWT)
c4.x=d0
c4.b=8002
c4.qe(B.fIm,B.aRu,B.m6,0.05,3)
c4.qe(B.fAH,B.aRu,B.m6,0.05,3)
c9.n(0,8002,B.dXk)
for(v=d1.y,w=0;u=$.Go(),w<u.length;++w){t=1000+w
c4.b=t
c4.cCo(new A.E(u[w],0,-2.25),B.fFN,B.m6,!1,0.05,2)
s=v.t(0,w)?"This one has a hole for the cable.":"Tap it with the drill to put a hole through it."
c9.n(0,t,new A.d1("Wall stud","A 2x4 stud, one of the vertical posts in the wall. They stand 16 inches apart. "+s,new A.E(u[w],20,-2),60))
if(v.t(0,w)){c4.b=0
c4.e=0.6
c4.bO(new A.E(u[w],40,-2.25),B.fBm,B.adZ)
c4.e=0}}c4.b=8000
c4.bJ(B.fA5,B.fze,B.abG,0.5)
c4.e=0.4
c4.bO(B.fDJ,B.fHk,B.E1)
for(r=0;r<6;++r)for(v=19.5-r*3.6,q=0;q<2;++q)c4.bJ(new A.E(61.6+q*4.8,v,0.5),B.fxY,B.af2,0.3)
p=d1.ax&&!d1.ay
v=p?0.6:0
if(d1.ay)u=D.cd
else u=p?D.bI:D.ju
c4.bJ(new A.E(64,-2.5+v,0.9),B.fCT,u,0.4)
c4.e=0
if(d1.ay)v="The main breaker has TRIPPED (orange). Tap it to flip it fully OFF, fix the problem, then turn it ON."
else v=d1.ax?"The power is ON. Tap to turn it OFF. Always turn it OFF before you touch any wire.":"The power is OFF. Tap to turn it ON."
c9.n(0,8000,new A.d1("Breaker panel",v,B.fBa,60))
c4.b=8003
for(v=d1.z,u=C.ec(v,v.r,C.a3(v).c),t=x.o,s=u.$ti.c;u.C();){o=u.d
n=A.l0(o==null?s.a(o):o)
o=n.d
m=o.a-0.35
l=C.a([B.fGw,B.fEM,new A.E(m,40,-3.2)],t)
if(n.c)D.d.v(l,C.a([new A.E(m,51.4,-3.2),new A.E(m,51.4,o.c+11)],t))
else l.push(new A.E(m,o.b+11,-3.4))
c4.jT(A.Gh(l,3,6),0.2,B.Wg,!1,0.35,6)}c9.n(0,8003,B.dXI)
for(u=x.U,s=d1.Q,k=0;k<3;++k){j=B.o0[k]
i=s.h(0,j)
if(i==null||!i.a)continue
if(i.e)h=B.bhe
else h=i.d?B.biC:B.bi1
o=C.a([],u)
for(m=i.b,l=C.a3(m),g=new C.mW(m,m.r,l.k("mW<1>")),g.c=m.e,l=l.c;g.C();){m=g.d
if(m==null)m=l.a(m)
o.push(new C.cH([A.l0(m).d.a-1.15,A.l0(m).d.a+1.15,A.l0(m).d.b-2,A.l0(m).d.b+2]))}m=6100+k
c4.b=m
A.hOJ(c4,j,j+48,-47,47,-0.25,0.5,h,o)
o=i.e?"Painted and finished.":"A 4 by 8 foot sheet of drywall (gypsum between two layers of paper). It is screwed to the studs."
c9.n(0,m,new A.d1("Drywall sheet",o,new A.E(j+24,0,0),90))
c4.b=0
c4.e=0.3
for(o=i.c,m=C.a3(o),l=new C.mW(o,o.r,m.k("mW<1>")),l.c=o.e,m=m.c;l.C();){o=l.d
if(o==null)o=m.a(o)
f=D.o.an(o,10)
e=D.o.G(o,10)
c4.iQ(new A.E($.Go()[f],-40+e*16,0.1),0.34,B.E1,3,5,0.3)}c4.e=0}for(u=d2.a,o=u!=="tape",m=d1.as,l=u!=="mud",g=u==="sand",w=0;w<2;w=a1){d=-24+48*w
a0=s.h(0,B.o0[w])
a0=a0==null?c1:a0.a
a1=w+1
a2=s.h(0,B.o0[a1])
a2=a2==null?c1:a2.a
if(a0!==!0||a2!==!0)continue
a3=m[w]
a0=6200+w
c4.b=a0
if(a3.a&&!a3.d){a2=a3.b
if(a2===0)h=B.bhh
else h=a3.c?B.bdE:B.b9r
c4.e=0.5
c4.bO(new A.E(d,0,0.08+0.02*a2),new A.E(2.2+a2*1.4,94,0.12),h)
c4.e=0}else if(!o||!l||g){c4.d=0.45
c4.e=0.6
c4.bO(new A.E(d,0,0.12),B.fD6,D.b1)
c4.e=0
c4.d=1}if(a3.d)a2="Smooth and ready for paint."
else if(!a3.a)a2="The joint between two sheets. It needs tape and three coats of joint compound."
else{a2=a3.b
a4=a2===1?"":"s"
a4="Taped, with "+a2+" coat"+a4+" of mud."
a2=a4}c9.n(0,a0,new A.d1("Seam",a2,new A.E(d,0,0),70))}for(o=d2.b,m=d1.x,l=d1.at,g=x.N,a5=0;a5<7;++a5){n=B.tW[a5]
a0=n.a
a6=m.ai(0,a0)
a7=l.h(0,a0)
a8=o===a0&&a7!=null
if(!a6)continue
a2=n.c
if(a2)a9=n.e==="fan"?"fan":"light"
else{a4=a7==null?c1:a7.a
a9=a4==null?"outlet":a4}if(a8){b0=A.Ai(a7.a)
a0=a7.b
b1=A.fUB(b0,a0,!1)
b2=A.fTN(b1,n,new A.fmP(n),d0)
D.d.v(c3,b2.a)
c9.v(0,b2.b)
if(a0.f&&a0.c===0){a0=C.a([],c6)
for(a2=b1.c,a4=a2.length,b3=0;b3<a2.length;a2.length===a4||(0,C.L)(a2),++b3){b4=a2[b3]
a0.push(new A.t2(A.a1S(n,b4.a),b4.b,b4.c))}D.d.v(c7,a0)}}else if(a7!=null&&a7.b.c>=2){a4=a7.a
b5=a7.b
b6=b5.w
b7=C.a([],c2)
b8=new A.jf(b7)
b9=new A.XF(C.T(c8,g))
b9.c=2
b9.w=b6
if(a4==="light"||a4==="fan")A.hbn(b8,a4,b9)
else{A.hb2(b8,a4,-0.25,b6,!0)
A.hdq(b8,b6)}D.d.v(c3,A.fTN(new A.zo(b7,B.diW,B.GQ,B.vI,c1),n,new A.fmQ(n),d0).a)
if(!a2){c4.f=3
c4.b=3000+a0
c4.e=0.4
c4.d=0.55
a2=n.d
b5=b5.w?D.ay:D.b8
c4.bO(new A.E(a2.a,a2.b,a2.c+0.2),B.fDa,b5)
c4.d=1
c4.f=2
c4.e=0}c9.n(0,3000+a0,new A.d1(A.hKC(a4),A.hKB(d1,a0),A.a1S(n,B.a7M),22))}else{a4=C.a([],c2)
A.hao(new A.jf(a4),a9,!1)
D.d.v(c3,A.fTN(new A.zo(a4,B.djz,B.GQ,B.vI,c1),n,new A.fmR(n),d0).a)
a2=a2?"Ceiling box":"Electrical box"
a4=v.t(0,a0)?"The box is mounted and the cable is in. A device can be wired here.":"The box is mounted. Pull the cable to it."
c9.n(0,2000+a0,new A.d1(a2,a4,A.a1S(n,B.a7M),24))}}c4.x=0
c0=new A.fmU(c4)
if(u==="wall"||u==="ceiling"||u==="fanbox")for(a5=0;a5<7;++a5){n=B.tW[a5]
c2=n.a
if(m.ai(0,c2))continue
c6=n.c
c8=n.d
s=c8.a
o=c8.b
a0=c6?new A.E(s,o-1,c8.c):new A.E(s,o,1.5)
a2=c6?B.fBs:B.fCM
c0.$4$round(2000+c2,a0,a2,c6)
c2=c6?new A.E(s,o-8,c8.c):new A.E(s,o+7,3)
c7.push(new A.t2(c2,n.b,D.fh))}else if(u==="cable")for(a5=0;a5<7;++a5){n=B.tW[a5]
c2=n.a
if(!m.ai(0,c2)||v.t(0,c2))continue
c6=n.c
c8=n.d
s=c8.a
o=c8.b
c8=c6?new A.E(s,o-1,c8.c):new A.E(s,o,1.5)
s=c6?B.aRx:B.fBH
c0.$5$col$round(2000+c2,c8,s,D.co,c6)}else if(u==="knife")for(a5=0;a5<7;++a5){n=B.tW[a5]
if(n.c||!m.ai(0,n.a))continue
c2=n.d
c6=c2.a
i=d1.aof(c6)
if(i==null||i.b.t(0,n.a))continue
c0.$4$col(2000+n.a,new A.E(c6,c2.b,0.5),B.fCS,D.ct)}else if(u==="sheet")for(w=0;w<5;){j=B.a2p[w]
c0.$3(6000+w,new A.E(j,0,0.3),B.fFQ);++w
c7.push(new A.t2(new A.E(j,50,1),"edge "+w,D.fh))}else if(u==="screw")for(a5=0;a5<3;++a5){j=B.o0[a5]
i=s.h(0,j)
if(i==null||!i.a)continue
for(c2=d1.aoy(j),c6=c2.length,c8=i.c,o=j+48,b3=0;b3<c2.length;c2.length===c6||(0,C.L)(c2),++b3){f=c2[b3]
for(a0=f*10,a2=7000+a0,r=0;r<6;++r){if(c8.t(0,a0+r))continue
c0.$3(a2+r,new A.E($.Go()[f],-40+r*16,0.5),B.aRo)}a2=$.Go()
if(f+1<a2.length&&a2[f]+16<=o)for(a0=7500+a0,r=0;r<6;r+=2)c0.$4$col(a0+r,new A.E(a2[f]+8,-40+r*16+8,0.5),B.aRo,D.dy)}}if(!C.ew(["wall","ceiling","fanbox","cable","knife","sheet","screw",""],g).t(0,u))c2=D.d.t(B.GU,u)||C.ew(["outlet","gfci","switch","light","fan"],g).t(0,u)
else c2=!1
if(c2)for(c2=d1.CW,a5=0;a5<7;++a5){n=B.tW[a5]
if(D.d.t(B.GU,u)){c6=n.a
a7=l.h(0,c6)
if(a7!=null){c8=a7.a
c8=(c8==="outlet"||c8==="gfci")&&a7.b.c>=2&&!c2.ai(0,c6)}else c8=!1
if(c8){c8=n.d
c0.$4$col(3000+c6,new A.E(c8.a,c8.b,1.2),B.fDb,D.b7)}}else{c6=n.a
if(m.ai(0,c6)&&v.t(0,c6)&&!l.ai(0,c6)){c8=n.c
s=n.d
o=s.a
g=s.b
s=c8?new A.E(o,g-1,s.c):new A.E(o,g,1.2)
o=c8?B.aRx:B.fFK
c0.$4$round(2000+c6,s,o,c8)}}}c4.r=!0
for(c2=d1.CW,c6=new C.cK(c2,C.a3(c2).k("cK<1,2>")).gae(0);c6.C();){j=c6.d
c8=j.a
n=A.l0(c8)
v=c4.b=8100+c8
u=n.d
d=u.a
u=u.b
c4.jT(A.Gh(C.a([new A.E(d,u,2.5),new A.E(d,-46,3.5),new A.E(d,-46,22)],t),4,6),0.28,B.Wk,!1,0.2,6)
c4.bJ(new A.E(d,u,1.6),B.fCn,B.b6G,0.3)
u=j.b
switch(u){case"tv":c4.bJ(new A.E(d,-45,24),B.fAQ,B.adn,0.2)
c4.bJ(new A.E(d,-19,24),B.fBz,E.Ed,0.4)
if(c2.ai(0,c8))c8=d1.ax&&!d1.ay&&d1.a3d(c8)
else c8=!1
if(c8){c8=d-38.5
s=d+38.5
c5.push(new A.WI(C.a([new A.E(c8,1.5,25.7),new A.E(s,1.5,25.7),new A.E(s,-39.5,25.7),new A.E(c8,-39.5,25.7)],t),v,new A.fmS(j),320,180,9,2))}break
case"lamp":c4.e5(new A.E(d,-47.5,24),new A.E(d,-46.5,24),6,B.Vm,0.4,14)
c4.e5(new A.E(d,-46.5,24),new A.E(d,-22,24),1,B.At,0.5,8)
c4.yh(new A.E(d,-26,24),new A.E(d,-12,24),9,X.Ws,!1,!0,5.5,0.2,16)
break
case"toaster":c4.bJ(new A.E(d,-42.5,24),B.fzu,B.kD,0.8)
c4.bO(new A.E(d,-38,24),B.fGv,B.aex)
break
default:c4.bJ(new A.E(d,-43.5,24),B.fzQ,B.adn,0.2)
c4.Kj(new A.E(d-6,-38,24),new A.E(d+8,-38,24),3.4,B.KI,3,0.6,12)
c4.aje(new A.E(d-8,-43,24),B.fzC,B.KI,0.6,0)}c8=A.hIM(u)
s="Plugged into "+n.b
u=u==="tv"?s+". Tap it to watch NGMY ads full screen. Use the Unplug tool to unplug it.":s+". Tap it to unplug."
c9.n(0,v,new A.d1(c8,u,new A.E(d,-35,20),60))}c4.r=!1
for(a5=0;a5<7;++a5){n=B.tW[a5]
c9.cg(0,2000+n.a,new A.fmT(n))}return new A.zo(c3,c9,c7,c5,B.eCO)},
hKC(d){var w
A:{if("gfci"===d){w="GFCI outlet"
break A}if("switch"===d){w="Light switch"
break A}if("light"===d){w="Ceiling light"
break A}if("fan"===d){w="Ceiling fan"
break A}w="Outlet"
break A}return w},
hIM(d){var w
A:{if("tv"===d){w="TV"
break A}if("lamp"===d){w="Lamp"
break A}if("toaster"===d){w="Toaster"
break A}w="Hair dryer"
break A}return w},
hKB(d,e){var w,v=d.at.h(0,e)
if(v==null)return""
if(v.b.w)return"BURNT. It was wired wrong and it burnt out. Pull it out and put in a new one."
w=v.a
if(w==="switch")return d.ch.t(0,e)?"The switch is ON. Tap to turn it off.":"The switch is OFF. Tap to flip it on."
if(w==="light"||w==="fan")return d.alz(e)?"It is running.":"It is off. Flip its switch (breaker on)."
w=d.CW.h(0,e)
return"Tap with a TV, lamp, toaster or hair dryer in your hand to plug it in. Plugged: "+(w==null?"nothing":w)+"."},
i32(a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=C.a([],x.z),a0=new A.jf(d)
for(w=D.d.gae(B.tW),v=new C.fk(w,new A.fCV()),u=a1.at,t=a2*7;v.C();){s=w.gS(0)
r=s.a
q=u.h(0,r)
if(q==null||q.b.c<1)continue
p=a1.alz(r)?t:0.4
a0.b=3000+r
s=s.d
r=s.a
o=s.b-6.6
s=s.c
for(n=0;n<4;++n){m=p+n*3.141592653589793/2
l=A.bBO(B.fzc,m)
a0.aje(new A.E(r+l.a,o+l.b,s+l.c),B.fI1,B.b7G,0.3,m)}}w=a1.d
w===$&&C.c()
w=D.d.gae(w)
v=new C.fk(w,new A.fCW())
u=a2*5
while(v.C()){s=w.gS(0).a
if(a1.alz(s)){k=A.l0(s)
a0.b=0
a0.d=0.25+0.05*Math.sin(u)
s=k.d
a0.iQ(new A.E(s.a,s.b-5,s.c),11,B.VK,4,10,0)
a0.d=1}}for(w=a1.CW,v=new C.cK(w,C.a3(w).k("cK<1,2>")).gae(0),u=a2*1.6,s=a2*6;v.C();){j=v.d
r=j.a
if(w.ai(0,r))o=a1.ax&&!a1.ay&&a1.a3d(r)
else o=!1
if(!o)continue
i=A.l0(r).d.a
a0.b=8100+r
switch(j.b){case"tv":break
case"lamp":a0.b=0
a0.d=0.3+0.05*Math.sin(s)
a0.iQ(new A.E(i,-19,24),11,T.Vo,4,10,0)
a0.d=1
break
case"toaster":a0.e=0.8
r=C.aq(B.acV,T.Ww,(Math.sin(s)+1)/2)
r.toString
a0.bO(new A.E(i,-38.2,24),new A.E(13,0.3,6),r)
a0.e=0
break
default:for(r=i+9,h=0;h<6;++h)a0.iQ(new A.E(r+D.k.G(u+h/6,1)*22,-38+Math.sin(h*2)*2,24),0.6,B.be_,3,5,0.2)}}for(w=new C.cK(a3,C.a3(a3).k("cK<1,2>")).gae(0),v=a2*0.7,u=a2*2.2;w.C();){j=w.d
s=j.b
if(a2>s)continue
k=A.l0(j.a)
g=D.k.D(s-a2,0,3)
a0.b=0
for(h=0;h<14;++h){f=D.k.G(u+h*0.137,1)
m=h*2.4+t
e=A.a1S(k,new A.E(Math.cos(m)*f*7,Math.sin(m)*f*7-f*f*6,3+f*4))
s=D.k.D(g,0.3,1)
r=C.aq(E.WH,E.WM,1-f)
r.toString
a0.iQ(e,0.35*s,r,3,5,0)}a0.d=0.35
for(h=0;h<5;++h){f=D.k.G(v+h*0.2,1)
s=f*3
a0.iQ(A.a1S(k,new A.E(Math.sin(h*1.7)*2,f*10,5+s)),1.2+s,B.bjo,3,6,0)}a0.d=1}return d},
vT:function vT(d,e,f){this.a=d
this.b=e
this.c=f},
fg7:function fg7(d){this.a=d},
fg8:function fg8(d){this.a=d},
fmP:function fmP(d){this.a=d},
fmQ:function fmQ(d){this.a=d},
fmR:function fmR(d){this.a=d},
fmU:function fmU(d){this.a=d},
fmS:function fmS(d){this.a=d},
fmT:function fmT(d){this.a=d},
fCV:function fCV(){},
fCW:function fCW(){},
h73(d,e){var w=new A.com(e,d,A.h0w())
w.bwj(4,d,e)
return w},
qV:function qV(d,e){this.a=d
this.b=e},
u3:function u3(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
Lz:function Lz(d,e){this.a=d
this.b=e
this.c=!1},
com:function com(d,e,f){var _=this
_.a=d
_.b=e
_.c=$
_.d=f
_.e=3
_.r=_.f=0
_.w=!1},
cor:function cor(d){this.a=d},
con:function con(){},
cop:function cop(){},
coq:function coq(){},
coo:function coo(d){this.a=d},
aq0:function aq0(d,e){this.d=d
this.a=e},
aD7:function aD7(d,e){var _=this
_.e=_.d=$
_.f=d
_.r=$
_.w=e
_.x="inspect"
_.y=0
_.z=null
_.at=_.as=_.Q=!1
_.c=_.a=_.ax=null},
emb:function emb(d,e,f){this.a=d
this.b=e
this.c=f},
emc:function emc(d){this.a=d},
ema:function ema(d){this.a=d},
em0:function em0(d){this.a=d},
em5:function em5(d){this.a=d},
em6:function em6(d){this.a=d},
em4:function em4(d){this.a=d},
em7:function em7(d,e){this.a=d
this.b=e},
em8:function em8(d){this.a=d},
em9:function em9(d){this.a=d},
em3:function em3(d){this.a=d},
em2:function em2(d,e){this.a=d
this.b=e},
em_:function em_(d){this.a=d},
elY:function elY(d){this.a=d},
elZ:function elZ(d,e){this.a=d
this.b=e},
em1:function em1(d){this.a=d},
emo:function emo(d,e){this.a=d
this.b=e},
emk:function emk(){},
emj:function emj(d){this.a=d},
eml:function eml(){},
emm:function emm(){},
emn:function emn(d,e){this.a=d
this.b=e},
emi:function emi(d,e){this.a=d
this.b=e},
emh:function emh(d){this.a=d},
emg:function emg(d){this.a=d},
eme:function eme(d,e){this.a=d
this.b=e},
emd:function emd(){},
emf:function emf(d,e){this.a=d
this.b=e},
i2z(d){var w,v,u,t,s,r,q,p,o,n,m=d.gfq(0),l=C.a([],x.T)
for(w=d.x,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u){t=w[u]
s=t.b
if(s==="rug")continue
s=B.pY.h(0,s)
s.toString
r=(t.e&1)===1
q=r?s.d:s.c
p=r?s.c:s.d
s=t.c
r=q/2
o=t.d
n=p/2
l.push(new A.B2(s-r,s+r,o-n,o+n))}switch(d.c){case"kitchen":w=-m/2
l.push(new A.B2(w,w+28,0,28))
l.push(new A.B2(10,m/2,0,28))
break
case"bathroom":l.push(B.dku)
l.push(B.dks)
w=-m/2
l.push(new A.B2(w,w+33,0,75))
break}return l},
bp9(d,e,f,g,h,i,j,k,l,m,n,o){var w=new A.bp8(d,i,m,o,n,l,g,f,k,j,e,h,C.a([],x.n))
w.bwy(d,e,f,g,h,i,j,k,l,m,n,o)
return w},
hb5(d,e){var w,v,u,t=d.w,s=D.d.bc(t,new A.f9o(e))
if(s<0)s=0
w=t[s]
v=d.gfq(0)
u=d.gkz(0)
t=w.b
switch(w.a){case"left":return new C.bt(new C.y(-v/2+18,D.k.D(t+u/2-40,10,u-10)),1.5707963267948966,s)
case"right":return new C.bt(new C.y(v/2-18,D.k.D(t+u/2-40,10,u-10)),-1.5707963267948966,s)
default:return new C.bt(new C.y(D.k.D(t,-v/2+12,v/2-12),18),0,s)}},
VS:function VS(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var _=this
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
_.ax=r},
uz:function uz(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
a8M:function a8M(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.x=k
_.y=l},
B2:function B2(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cl0:function cl0(d,e){var _=this
_.a=d
_.b=e
_.d=_.c=$},
zV:function zV(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
bp8:function bp8(d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
f9o:function f9o(d){this.a=d},
aTU:function aTU(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=$},
bPG:function bPG(d,e){this.a=d
this.b=e},
bPH:function bPH(d){this.a=d},
fX0(d){var w,v,u,t,s,r,q,p,o,n,m=C.a([B.dkt],x.T)
for(w=d.x,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u){t=w[u]
s=t.b
if(D.d.t(B.awd,s)||D.d.t(B.a1B,s)||s==="bush")continue
r=B.pY.h(0,s)
r.toString
q=(t.e&1)===1
p=q?r.d:r.c
o=q?r.c:r.d
if(s==="tree"||s==="pine"){p=10
o=10}s=t.c
r=p/2
q=t.d
n=o/2
m.push(new A.B2(s-r,s+r,q-n,q+n))}return m},
h8h(d,e,f){var w=new A.cuL(d,e,f,B.d2y)
w.w=A.fX0(d)
return w},
cuL:function cuL(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=0
_.e=!1
_.f=0
_.r=null
_.w=g}},B,H,E,K,A6,X,R,S,A7,A8
J=c[1]
C=c[0]
D=c[2]
Y=c[81]
F=c[89]
Z=c[111]
N=c[96]
T=c[115]
A_=c[110]
U=c[112]
L=c[101]
A0=c[105]
O=c[84]
G=c[106]
A1=c[100]
A2=c[108]
V=c[107]
W=c[109]
P=c[102]
A3=c[94]
A4=c[114]
Q=c[91]
I=c[95]
A5=c[90]
M=c[92]
A=a.updateHolder(c[24],A)
B=c[88]
H=c[26]
E=c[93]
K=c[103]
A6=c[61]
X=c[113]
R=c[99]
S=c[98]
A7=c[97]
A8=c[104]
A.E.prototype={
ad(d,e){return new A.E(this.a+e.a,this.b+e.b,this.c+e.c)},
aC(d,e){return new A.E(this.a-e.a,this.b-e.b,this.c-e.c)},
aF(d,e){return new A.E(this.a*e,this.b*e,this.c*e)},
Ki(d){var w=this.b,v=d.c,u=this.c,t=d.b,s=d.a,r=this.a
return new A.E(w*v-u*t,u*s-r*v,r*t-w*s)},
gTc(){var w=this.a,v=this.b,u=this.c
return Math.sqrt(w*w+v*v+u*u)},
goy(d){var w=this,v=w.gTc()
return v<1e-9?w:new A.E(w.a/v,w.b/v,w.c/v)}}
A.mt.prototype={}
A.d1.prototype={}
A.t2.prototype={}
A.zo.prototype={}
A.WI.prototype={}
A.jf.prototype={
Vs(){var w=this.x
if(!(w!==0))if(this.r){w=$.ml+1
$.ml=w}else w=0
this.w=w},
bfN(d,e,f,g,h,i,j,k){var w=this,v=i.goy(0)
w.a.push(new A.mt(C.a([d,e,f,g],x.o),v,h,w.b,j,w.d,k,w.c,w.e,w.f,w.w))},
bfM(d,e,f,g,h,i,j){return this.bfN(d,e,f,g,h,i,0,j)},
cQB(d,e,f,g,h,i,j){return this.bfN(d,e,f,g,h,i,j,!1)},
a5B(d,e,f,g,h,i){var w=this,v=(h==null?e.aC(0,d).Ki(f.aC(0,d)):h).goy(0)
w.a.push(new A.mt(C.a([d,e,f],x.o),v,g,w.b,0,w.d,i,w.c,w.e,w.f,w.w))},
bgT(d,e,f,g){return this.a5B(d,e,f,g,null,!0)},
K_(d,e,f,g,h,i,j){var w,v,u,t,s,r,q,p,o,n,m
this.Vs()
w=e.a/2
v=e.b/2
u=e.c/2
t=new A.bVr(this,i,new A.bVs(j,d),new A.bVt(j),f,h)
s=-w
r=-v
q=2*w
p=2*v
t.$4(new A.E(0,0,1),new A.E(s,r,u),new A.E(q,0,0),new A.E(0,p,0))
o=-u
t.$4(new A.E(0,0,-1),new A.E(w,r,o),new A.E(-2*w,0,0),new A.E(0,p,0))
n=-2*u
t.$4(new A.E(1,0,0),new A.E(w,r,u),new A.E(0,0,n),new A.E(0,p,0))
m=2*u
t.$4(new A.E(-1,0,0),new A.E(s,r,o),new A.E(0,0,m),new A.E(0,p,0))
if(g){t.$4(new A.E(0,1,0),new A.E(s,v,u),new A.E(q,0,0),new A.E(0,0,n))
t.$4(new A.E(0,-1,0),new A.E(s,r,o),new A.E(q,0,0),new A.E(0,0,m))}},
iy(d,e,f,g){return this.K_(d,e,f,!0,0,g,0)},
aBE(d,e,f,g,h){return this.K_(d,e,f,g,h,1,0)},
qe(d,e,f,g,h){return this.K_(d,e,f,!0,g,h,0)},
bJ(d,e,f,g){return this.K_(d,e,f,!0,g,1,0)},
bO(d,e,f){return this.K_(d,e,f,!0,0,1,0)},
aje(d,e,f,g,h){return this.K_(d,e,f,!0,g,1,h)},
cCo(d,e,f,g,h,i){return this.K_(d,e,f,g,h,i,0)},
yh(b3,b4,b5,b6,b7,b8,b9,c0,c1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2=this
b2.Vs()
w=b4.aC(0,b3).goy(0)
v=w.b
u=w.Ki(Math.abs(v)<0.9?B.fP:B.j_).goy(0)
t=w.Ki(u).goy(0)
s=b9<0?b5:b9
r=new A.bVu(u,c1,t)
for(q=b2.a,p=b3.a,o=b3.b,n=b3.c,m=b4.a,l=b4.b,k=b4.c,j=x.o,i=w.a*-1,v*=-1,h=w.c*-1,g=0;g<c1;){f=r.$1(g);++g
e=r.$1(g)
d=f.a
a0=e.a
a1=f.b
a2=e.b
a3=f.c
a4=e.c
a5=new A.E(d+a0,a1+a2,a3+a4).goy(0)
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
q.push(new A.mt(C.a([new A.E(a6,a7,a8),new A.E(a9,b0,b1),new A.E(a0,a2,a4),new A.E(d,a1,a3)],j),a5,b6,b2.b,c0,b2.d,b8,b2.c,b2.e,b2.f,b2.w))
if(b7){q.push(new A.mt(C.a([b3,new A.E(a9,b0,b1),new A.E(a6,a7,a8)],j),new A.E(i,v,h),b6,b2.b,c0,b2.d,!1,b2.c,b2.e,b2.f,b2.w))
q.push(new A.mt(C.a([b4,new A.E(d,a1,a3),new A.E(a0,a2,a4)],j),w,b6,b2.b,c0,b2.d,!1,b2.c,b2.e,b2.f,b2.w))}}},
e5(d,e,f,g,h,i){return this.yh(d,e,f,g,!0,!1,-1,h,i)},
Kj(d,e,f,g,h,i,j){return this.yh(d,e,f,g,!0,!1,h,i,j)},
a31(d,e,f,g,h,i,j,k){return this.yh(d,e,f,g,h,i,-1,j,k)},
hB(d,e,f,g,h){return this.yh(d,e,f,g,!0,!1,-1,0,h)},
baN(d,e,f,g,h,i,j){return this.yh(d,e,f,g,h,!1,-1,i,j)},
baL(d,e,f,g,h,i){return this.yh(d,e,f,g,h,!1,-1,0,i)},
ak_(d,e,f,g,h,i){return this.yh(d,e,f,g,!0,!1,h,0,i)},
baM(d,e,f,g,h,i,j){return this.yh(d,e,f,g,h,!1,i,0,j)},
iQ(a7,a8,a9,b0,b1,b2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6=this
a6.Vs()
w=new A.bVq(b0,b1)
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
v.push(new A.mt(C.a([new A.E(u+i*a8,t+h*a8,s+g*a8),new A.E(u+f*a8,t+e*a8,s+d*a8),new A.E(u+a0*a8,t+a1*a8,s+a2*a8),new A.E(u+a3*a8,t+a4*a8,s+a5*a8)],r),new A.E(i+f+a0+a3,h+e+a1+a4,g+d+a2+a5).goy(0),a9,a6.b,b2,a6.d,!1,a6.c,a6.e,a6.f,a6.w))}},
b8P(d,e,f,g){return this.iQ(d,e,f,6,10,g)},
io(d,e,f,g,h){return this.iQ(d,e,f,g,h,0.4)},
a5D(d,e,f,g,h,i,j,k){var w,v,u,t,s
this.Vs()
for(w=0;v=w+1,v<d.length;w=v){u=d[v]
t=d[w]
if(new A.E(u.a-t.a,u.b-t.b,u.c-t.c).gTc()<0.000001)continue
u=d[w]
t=d[v]
if(g)s=w===0||w===d.length-2
else s=!1
this.a31(u,t,e,f,s,h,j,k)}if(i)for(u=e*0.98,w=1;v=w+1,v<d.length;w=v)this.iQ(d[w],u,f,4,k,j)},
jT(d,e,f,g,h,i){return this.a5D(d,e,f,!0,!1,g,h,i)},
aHb(d,e,f,g,h,i,j){return this.a5D(d,e,f,g,!1,h,i,j)},
bgV(d,e,f,g,h){return this.a5D(d,e,f,!0,!1,!0,g,h)},
yW(a4,a5,a6,a7,a8,a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=this
a3.Vs()
a3.baN(a4,a5,a6,a8,!1,a9,b0)
w=a5.aC(0,a4).goy(0)
v=w.Ki(Math.abs(w.b)<0.9?B.fP:B.j_).goy(0)
u=new A.bVv(v,b0,w.Ki(v).goy(0))
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
s.push(new A.mt(C.a([new A.E(p+i*a7,m+h*a7,l+j*a7),new A.E(p+f*a6,m+e*a6,l+g*a6),new A.E(p+a0*a6,m+a1*a6,l+d*a6),new A.E(p+a2.a*a7,m+a2.b*a7,l+a2.c*a7)],r),n,a8,a3.b,a9,a3.d,!1,a3.c,a3.e,a3.f,a3.w))}}},
cS_(d,e,f,g,h,i){return this.yW(d,e,f,g,h,i,16)}}
A.AE.prototype={
GA(d){var w,v,u,t=this
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
ze(d,e){return this.lW(d,null,e,null)},
aIx(d){return this.lW(null,null,d,null)},
aGY(d){var w,v,u,t=this
if(!(t.Q!=null||t.as!=null||t.at!=null||t.ax!=null))return
w=1-Math.exp(-d*7)
v=t.Q
if(v!=null){u=A.zH(t.d,v,w)
t.d=u
if(u.aC(0,v).gTc()<0.02){v=t.Q
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
cJ_(d,e){var w,v,u,t,s=this,r=e.a,q=e.b,p=Math.min(r,q)*1.15,o=Math.cos(s.a),n=Math.sin(s.a)
q=new A.bGh(s,new A.bGi(Math.cos(s.b),Math.sin(s.b),o,n),(d.a-r/2)/p,-(d.b-q/2)/p)
w=q.$1(0)
r=q.$1(1).b
v=w.b
u=r-v
if(Math.abs(u)<1e-9)return null
t=(0-v)/u
if(t<=0)return null
return q.$1(t)},
anx(d){var w=this
w.as=null
w.c=D.k.D(w.c*d,w.e,w.f)
w.aZ()}}
A.bPx.prototype={
cPQ(d){var w,v,u,t
for(w=this.a,v=w.length-1,u=d.a,t=d.b;v>=0;--v)if(w[v].a.gbI().a.contains(u,t))return w[v].b
return 0}}
A.b3N.prototype={
gaH_(d){var w=this.r.a
return w==null?0:w},
cd7(b1,b2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=null,a8=b2.a,a9=b2.b,b0=new C.a9(0,0,0+a8,0+a9)
$.X()
w=C.M()
w.saq(B.bTq.av(0,b0))
b1.aX(b0,w)
v=this.c.a*90
w=b1.a
J.bA(w.save())
w.translate(a8*0.45-v,a9*0.3)
b1.iW(0,-0.45)
for(u=x.O,t=0;t<3;++t){s=C.co(D.J,a9*(0.2-t*0.05),a8*(1.9-t*0.4))
r=[B.b91,D.aT,D.qI][t]
q=new C.as(D.X,D.V,D.a_,D.a0,D.Z)
q.saq(new C.bS(D.A,0.5,D.x,a7,0,C.a([r.j(0.3-t*0.07),r.j(0)],u),a7,a7).av(0,s))
p=q.H()
w.drawOval(C.c1(s),p)
p.delete()}w.restore()
o=new C.eJ()
o.dB(11)
n=C.M()
for(q=this.r,t=0;t<170;++t){m=D.k.G(D.k.G(o.aj()*a8*1.5-v*(0.4+o.aj()*0.6),a8)+a8,a8)
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
f=$.X()
e=C.M()
e.saq(new C.bS(D.A,0.5,D.x,a7,0,C.a([D.aT.j(0.28),B.beQ],u),a7,a7).av(0,C.bT(i,g)))
b1.ah(i,g,e)
J.bA(w.save())
f=new C.aP(f.r,D.ap,a7,a7,C.a([],x.v))
f.E(new C.ke(C.bT(i,h)))
b1.qf(0,f)
f=C.M()
f.saq(B.eaI.av(0,C.bT(i,h)))
b1.ah(i,h,f)
d=C.M()
d.r=B.b9l.gp(0)
for(a0=0;a0<4;++a0){u=B.cOV[a0].a
a1=u[0]
a2=u[1]
a3=u[2]
a4=u[3]
u=q.a
u=C.co(new C.u(l+(a1*h+Math.sin((u==null?0:u)*0.05)*h*0.08),j+a2*h),a4*h*2,a3*h*2)
p=d.H()
w.drawOval(C.c1(u),p)
p.delete()}$.X()
a5=C.M()
a5.r=D.c.j(0.55).gp(0)
for(u=h*0.16,a0=0;a0<3;++a0){q=B.cM4[a0]
q=C.co(new C.u(l+q.a*h,j+q.b*h),u,q.c*h*2)
p=a5.H()
w.drawOval(C.c1(q),p)
p.delete()}u=i.ad(0,new C.u(h*0.45,h*0.35))
$.X()
q=C.M()
q.r=D.w.j(0.38).gp(0)
b1.ah(u,h,q)
w.restore()
a6=new C.u(a8*0.18-v*0.2,a9*0.12)
w=C.M()
w.r=B.bak.gp(0)
b1.ah(a6,h*0.28,w)
w=h*0.05
q=a6.ad(0,new C.u(h*0.08,w))
u=C.M()
u.r=B.acp.gp(0)
b1.ah(q,h*0.07,u)
u=-h
u=a6.ad(0,new C.u(u*0.1,u*0.09))
q=C.M()
q.r=B.acp.gp(0)
b1.ah(u,w,q)},
a5(e8,e9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6,d7,d8,d9,e0,e1,e2,e3,e4,e5,e6=this,e7=null
if(e6.y)e6.cd7(e8,e9)
else{w=0+e9.a
v=0+e9.b
$.X()
u=C.M()
t=e6.x
s=C.aq(t,D.c,0.06)
s.toString
u.saq(new C.a8(D.b0,D.b5,D.x,C.a([s,t],x.O),e7,e7).av(0,new C.a9(0,0,w,v)))
e8.aX(new C.a9(0,0,w,v),u)}r=e9.a
q=e9.b
p=Math.min(r,q)*1.15
o=r/2
n=q/2
w=e6.c
m=Math.cos(w.a)
l=Math.sin(w.a)
k=Math.cos(w.b)
j=new A.clW(m,l,k,Math.sin(w.b))
i=new A.clX(e6,j)
v=e6.b
h=v.e
if(h!=null){u=w.d
w=w.c*k
g=u.a-w*l
t=h.a
f=g<t[0]-1||g>t[1]+1||u.c+w*m<t[2]-1}else f=!1
e=B.fEy.goy(0)
d=e.ad(0,B.zs).goy(0)
a0=C.a([],x.bl)
w=e6.w
a1=v.a
if(!(w==null)){u=C.B(a1,x.fX)
D.d.v(u,w.$1(e6.gaH_(0)))
a1=u}for(w=a1.length,u=e6.e,t=x.v,s=u!==0,a2=e.a,a3=e.b,a4=e.c,a5=x.o,a6=e6.f,a7=a6!=null,a8=d.a,a9=d.b,b0=d.c,b1=e6.r,b2=0;b2<a1.length;a1.length===w||(0,C.L)(a1),++b2){b3=a1[b2]
if(a7&&!a6.$1(b3.w))continue
b4=C.a([],a5)
for(b5=b3.a,b6=b5.length,b7=0;b7<b5.length;b5.length===b6||(0,C.L)(b5),++b7)b4.push(i.$1(b5[b7]))
b8=A.hJV(b4)
b4=b8.length
if(b4<3)continue
for(b9=0,c0=B.fO,b7=0;b7<b4;++b7){c1=b8[b7]
b5=c1.c
b9+=b5
c0=new A.E(c0.a+c1.a,c0.b+c1.b,c0.c+b5)}b4=1/b4
c2=j.$1(b3.b)
b5=c2.a
b6=c2.b
c3=c2.c
if(b5*(c0.a*b4)+b6*(c0.b*b4)+c3*(c0.c*b4)>0){if(!b3.r)continue
c2=new A.E(b5*-1,b6*-1,c3*-1)}b4=c2.a
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
b4=$.X()
b5=C.a([],t)
d0=new C.aP(b4.r,D.ap,e7,e7,b5)
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
a0.push(new A.C0(d4,b3.z,e7,d0,new C.w(b4,(c7&255)/255,(c8&255)/255,(c9&255)/255,D.t),b9/b5-b3.x,b6,b4<0.99,c3))}for(w=v.d,u=w.length,a2=x.dx,a3=x.dN,b2=0;b2<w.length;w.length===u||(0,C.L)(w),++b2){d5=w[b2]
a4=C.a([],a5)
for(a6=d5.a,b7=0;b7<4;++b7)a4.push(i.$1(a6[b7]))
if(D.d.b8(a4,new A.clS()))continue
a7=a4[0]
a8=a4[1]
a9=a4[2]
b0=a4[3]
b1=(a7.c+a8.c+a9.c+b0.c)*0.25
b4=a6[3]
b5=a6[0]
b6=b5.a
c3=b5.b
b5=b5.c
a6=a6[1]
c2=j.$1(new A.E(b4.a-b6,b4.b-c3,b4.c-b5).Ki(new A.E(a6.a-b6,a6.b-c3,a6.c-b5)))
if(c2.a*((a7.a+a8.a+a9.a+b0.a)*0.25)+c2.b*((a7.b+a8.b+a9.b+b0.b)*0.25)+c2.c*b1>0)continue
a6=C.a([],a3)
for(a7=a4.length,b7=0;b7<a4.length;a4.length===a7||(0,C.L)(a4),++b7){c1=a4[b7]
a8=c1.c
a6.push(new C.u(o+c1.a*p/a8,n-c1.b*p/a8))}a4=$.X()
a7=C.a([],t)
a8=C.B(a6,a2)
a7.push(new C.R3(a8,!0))
a0.push(new A.C0(d5.r,0,new A.clT(e6,d5,a6),new C.aP(a4.r,D.ap,e7,e7,a7),D.K,b1-d5.f,d5.b,!1,!1))}w=x.S
d6=C.T(w,x.i)
d7=C.T(w,w)
for(w=a0.length,b2=0;u=a0.length,b2<u;a0.length===w||(0,C.L)(a0),++b2){d8=a0[b2]
u=d8.b
if(u!==0){t=d6.h(0,u)
if(t==null)t=0
d6.n(0,u,t+d8.r)
t=d7.h(0,u)
d7.n(0,u,(t==null?0:t)+1)}}for(d1=0;d1<u;++d1)a0[d1].c=d1
D.d.b_(a0,new A.clU(new A.clV(d6,d7)))
w=e6.d.a
D.d.a9(w)
$.X()
d9=C.M()
d9.b=D.V
e0=C.M()
e0.b=D.ae
e0.c=0.8
for(u=a0.length,t=e8.a,b2=0;b2<a0.length;a0.length===u||(0,C.L)(a0),++b2){e1=a0[b2]
a2=e1.d
if(a2!=null){a2.$1(e8)
a2=e1.w
if(a2!==0)w.push(new C.y(e1.e,a2))
continue}a2=e1.f
d9.r=a2.gp(0)
a3=e1.e
e2=d9.H()
a4=a3.e
t.drawPath((a4==null?a3.e=new C.cF(a3.gbI().a.snapshot()):a4).a,e2)
e2.delete()
if(!e1.x){e0.r=a2.gp(0)
e2=e0.H()
a2=a3.e
t.drawPath((a2==null?a3.e=new C.cF(a3.gbI().a.snapshot()):a2).a,e2)
e2.delete()}a2=e1.w
if(a2!==0)w.push(new C.y(a3,a2))}if(s){$.X()
e3=C.M()
e3.b=D.ae
e3.c=1.4
e3.r=D.c.j(0.35+0.25*Math.sin(e6.gaH_(0)*6)).gp(0)
for(w=a0.length,b2=0;b2<a0.length;a0.length===w||(0,C.L)(a0),++b2){e1=a0[b2]
if(e1.y){u=e1.e
e2=e3.H()
s=u.e
t.drawPath((s==null?u.e=new C.cF(u.gbI().a.snapshot()):s).a,e2)
e2.delete()}}}for(w=v.c,v=w.length,b2=0;b2<w.length;w.length===v||(0,C.L)(w),++b2){e4=w[b2]
c1=i.$1(e4.a)
u=c1.c
if(u<1)continue
s=o+c1.a*p/u
u=n-c1.b*p/u
e5=new C.kp(new C.ep(e4.b,e7,e7,D.cO,e7,e7,e7,e7,e7,e7,new C.G(!0,D.c,e7,e7,e7,e7,11,D.u,e7,e7,e7,e7,e7,e7,e7,e7,e7,e7,e7,e7,e7,e7,e7,e7,e7,e7)),D.a4,D.cc,new C.jo(1),e7,e7,e7,e7,D.ca,e7)
e5.eI()
a2=e5.b
a3=a2.c
a2=a2.a.c
c7=C.bz(C.co(new C.u(s,u),a2.gbd(a2)+8,a3+14),D.iF)
$.X()
a3=new C.as(D.X,D.V,D.a_,D.a0,D.Z)
a3.r=e4.c.j(0.92).gp(0)
e2=a3.H()
t.drawRRect(C.eq(c7),e2)
e2.delete()
a3=new C.as(D.X,D.V,D.a_,D.a0,D.Z)
a3.b=D.ae
a3.c=1
a3.r=D.ad.gp(0)
e2=a3.H()
t.drawRRect(C.eq(c7),e2)
e2.delete()
a3=e5.b
a2=a3.c
a3=a3.a.c
e5.a5(e8,new C.u(s-a2/2,u-a3.gbd(a3)/2))}},
ar(d){return!0}}
A.C0.prototype={}
A.ats.prototype={
U(){return new A.boX(new A.bPx(C.a([],x.a6)),new C.eO(0,$.aw()),D.bw,D.J,null,null)}}
A.boX.prototype={
a_(){var w,v=this
v.a1()
w=v.qi(new A.eSu(v))
w.j1(0)
v.d!==$&&C.aO()
v.d=w},
q(){var w=this.d
w===$&&C.c()
w.q()
w=this.f
w.T$=$.aw()
w.P$=0
this.buP()},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=p.a,m=n.Q==null,l=m?o:new A.eSo(p)
m=m?o:new A.eSp(p,d)
w=n.c
v=n.d
u=n.e
t=n.r
s=p.f
n=n.w
r=C.a([v,s],x.dS)
q=p.a
r=C.a([C.jt(new C.et(C.b3(o,o,o,new A.b3N(w,v,p.e,u,t,s,n,q.x,q.z,new C.h3(r)),D.f0),o),D.r,o)],x.p)
p.a.toString
return C.o8(D.jf,C.aE(D.c5,new C.an(D.W,o,D.b_,D.r,r,o),D.y,!1,o,m,l,o,o,o,o,o,o,o,o,o,o,o,o,o,o,new A.eSq(p),new A.eSr(p),o,o,o,o,o,o,o,new A.eSs(p),o,o,o,!1,D.a8),o,o,o,o,o,o,new A.eSt(p),o)}}
A.aLC.prototype={
q(){var w=this,v=w.a7$
if(v!=null)v.a3(0,w.gbv())
w.a7$=null
w.a2()},
aQ(){this.aY()
this.aW()
this.bw()}}
A.b9l.prototype={}
A.b9G.prototype={}
A.beH.prototype={}
A.dgs.prototype={}
A.LG.prototype={
OD(d){return this.cjf(d)},
cjf(e4){var w=0,v=C.j(x.H),u=this,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6,d7,d8,d9,e0,e1,e2,e3
var $async$OD=C.e(function(e6,e7){if(e6===1)return C.f(e7,v)
for(;;)switch(w){case 0:if(e4.getUint32(0,!0)!==1179937895)throw C.V("not a glb file")
for(n=x.c,m=12,l=null,k=null;m+8<=e4.byteLength;){j=e4.getUint32(m,!0)
i=e4.getUint32(m+4,!0)
h=J.eX(D.dC.gaM(e4),e4.byteOffset+m+8,j)
if(i===1313821514)l=n.a(D.R.aG(0,new C.FA(!1).D3(h,0,null,!0),null))
if(i===5130562)k=h
m+=8+j}if(l==null||k==null)throw C.V("empty glb")
g=new A.daC(l,k)
f=J.a5(l)
e=x.j
d=J.ku(e.a(f.h(l,"nodes")),n)
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
u.d=D.d.bc(a3,new A.bOl())
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
b5=a7==null?null:J.ku(a7,a5)
if(b5==null)b5=F.anS
a7=a8.a(a6.h(b4,"rotation"))
b6=a7==null?null:J.ku(a7,a5)
if(b6==null)b6=B.bVB
a6=a8.a(a6.h(b4,"scale"))
b7=a6==null?null:J.ku(a6,a5)
if(b7==null)b7=B.c7w
for(a6=b2*3,a7=J.a5(b5),b0=J.a5(b7),b8=0;b8<3;++b8){b1=u.w
b9=a6+b8
c0=a7.h(b5,b8)
b1.$flags&2&&C.ai(b1)
b1[b9]=c0
c0=u.y
b1=b0.h(b7,b8)
c0.$flags&2&&C.ai(c0)
c0[b9]=b1}for(a6=b2*4,a7=J.a5(b6),b8=0;b8<4;++b8){b0=u.x
b1=a7.h(b6,b8)
b0.$flags&2&&C.ai(b0)
b0[a6+b8]=b1}}u.Q=C.a([],a3)
u.as=C.a([],x.dh)
n=a8.a(f.h(l,"skins"))
n=J.aV(n==null?D.cu:n)
while(n.C()){b7=n.gS(n)
a0=C.a([],a9)
for(a3=J.a5(b7),a4=J.aV(e.a(a3.h(b7,"joints")));a4.C();)a0.push(D.k.N(C.dQ(a4.gS(a4))))
u.Q.push(a0)
c1=a3.h(b7,"inverseBindMatrices")!=null?g.EX(D.k.N(C.dQ(a3.h(b7,"inverseBindMatrices")))).a:null
a3=u.as
a3.push(c1==null?A.hsa(a0.length):c1)}n=a8.a(f.h(l,"animations"))
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
d0=g.EX(D.k.N(C.dQ(a9.h(b7,"input")))).a
d1=g.EX(D.k.N(C.dQ(a9.h(b7,"output")))).a
d2=a9.h(b7,"interpolation")
if(d2==null)d2="LINEAR"
d3=b0===1?4:3
a9=J.kZ(d2)
if(a9.A(d2,"CUBICSPLINE")){b1=d0.length
d4=new Float64Array(b1*d3)
for(b2=0;b2<b1;++b2)for(b9=b2*d3,c0=(b2*3+1)*d3,b8=0;b8<d3;++b8)d4[b9+b8]=d1[c0+b8]
d1=d4}if(!D.o1.gam(d0)){b1=d0.length
if(b1===0)C.ba(C.fA())
c5=Math.max(c5,d0[b1-1])}c3.push(new A.b9l(c8,b0,d0,d1,a9.A(d2,"STEP")))}d5=C.aT(a5.h(c2,"name"))
if(d5==null)d5="clip"+a0.a
a0.n(0,d5,new A.b9G(c5,c3))}t=C.T(a2,x.c9)
s=0
n=x.H
e="Could not read a picture of "+u.a+": "
case 2:a0=s
a2=a8.a(f.h(l,"images"))
a2=a2==null?null:J.ad(a2)
if(!(a0<(a2==null?0:a2))){w=3
break}r=g.cL1(s)
if(r==null){w=4
break}try{a0=r
d6=C.fUW(a0)
q=d6==null?null:d6.pp(0,a0,null)
if(q!=null){p=q.cDG(D.c7,4)
a0=s
a2=p.a
a2=a2==null?null:a2.a
if(a2==null)a2=0
a3=p.a
a3=a3==null?null:a3.b
if(a3==null)a3=0
d7=p
a4=d7.gqw()
d8=4!==a4?d7.cDF(null,4):d7
a4=d8.a
a4=a4==null?null:a4.bjQ(d8!==d7,D.b40)
if(a4==null){a4=d7.a
a4=a4==null?null:J.eQ(a4.gaM(a4))
if(a4==null){a4=d7.a
a4=a4==null?null:a4.gaM(a4)
if(a4==null)a4=D.aG.gaM(new Uint8Array(0))
a4=J.eQ(a4)}}J.aF(t,a0,new A.beH(a2,a3,new Uint8Array(C.ce(a4))))}}catch(e5){o=C.aa(e5)
$.am.$1(e+C.t(o))}w=5
return C.b(C.bN(D.bw,null,n),$async$OD)
case 5:case 4:++s
w=2
break
case 3:e0=u.bO1(l,g,d,t)
w=6
return C.b(C.bN(D.bw,null,n),$async$OD)
case 6:u.at=u.b5C(e0,5000)
w=7
return C.b(C.bN(D.bw,null,n),$async$OD)
case 7:u.ax=u.b5C(e0,2000)
n=u.at
n.r=u.b10(n)
n=u.ax
n.r=u.b10(n)
e1=u.axi(null,0)
e2=u.b3S(u.at,e1)
for(n=e2.length,e3=1/0,s=1;s<n;s+=3)e3=Math.min(e3,e2[s])
u.ay=isFinite(e3)?e3:0
return C.h(null,v)}})
return C.i($async$OD,v)},
ckF(d){var w,v,u
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
b10(d){var w,v,u,t,s,r,q,p,o,n,m=d.a.length/3|0,l=new Uint8Array(m)
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
l[t]=o<n.length?this.ckF(n[o]):5}return l},
bO1(e9,f0,f1,f2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6,d7,d8,d9,e0,e1,e2=null,e3="POSITION",e4="JOINTS_0",e5="WEIGHTS_0",e6=J.a5(e9),e7=x.g,e8=e7.a(e6.h(e9,"materials"))
if(e8==null)e8=D.cu
w=x.c
v=J.ku(e8,w)
e8=e7.a(e6.h(e9,"textures"))
u=J.ku(e8==null?D.cu:e8,w)
e8=x.j
t=J.ku(e8.a(e6.h(e9,"meshes")),w)
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
for(a9=J.ku(e8.a(J.q(j.a(k.h(l,b1)),"primitives")),w),b0=a9.$ti,a9=new C.bR(a9,a9.gM(0),b0.k("bR<bU.E>")),b3=b2==null,b0=b0.k("bU.E");a9.C();){b4=a9.d
if(b4==null)b4=b0.a(b4)
b5=J.a5(b4)
b6=J.Gp(e.a(b5.h(b4,"attributes")),i,h)
if(b6.h(0,e3)==null||b5.h(b4,"indices")==null)continue
b7=f0.EX(D.k.N(C.dQ(b6.h(0,e3)))).a
b8=b7.length/3|0
b9=b6.h(0,e4)!=null?f0.EX(D.k.N(C.dQ(b6.h(0,e4)))).a:e2
c0=b6.h(0,e5)!=null?f0.EX(D.k.N(C.dQ(b6.h(0,e5)))).a:e2
c1=C.aJ(b5.h(b4,"material"))
c2=c1==null?e2:D.k.N(c1)
c1=g.a(J.q(c2!=null?a1.a(a0.h(d,c2)):D.cz,"pbrMetallicRoughness"))
c3=c1==null?e2:J.Gp(c1,i,h)
if(c3==null)c3=D.cz
c1=e7.a(c3.h(0,"baseColorFactor"))
c4=c1==null?e2:J.ku(c1,f)
if(c4==null)c4=B.c7x
c1=g.a(c3.h(0,"baseColorTexture"))
c5=c1==null?e2:J.Gp(c1,i,h)
c1=c5==null
c6=C.aJ(c1?e2:c5.h(0,"texCoord"))
c7=c6==null?e2:D.k.N(c6)
c8=b6.h(0,"TEXCOORD_"+(c7==null?0:c7))
c9=c8!=null?f0.EX(D.k.N(C.dQ(c8))).a:e2
if(!c1){c1=C.aJ(J.q(a4.a(a3.h(a2,D.k.N(C.dQ(c5.h(0,"index"))))),"source"))
d0=c1==null?e2:D.k.N(c1)
d1=d0!=null?f2.h(0,d0):e2}else d1=e2
d2=s.length/3|0
D.d.v(s,b7)
for(c1=c0!=null,c6=b9!=null,d3=0;d3<b8;++d3){o.push(b3?255:b2)
for(d4=d3*4,d5=0;d5<4;++d5){q.push(c6?D.k.N(b9[d4+d5]):0)
if(c1)d6=c0[d4+d5]
else d6=d5===0?1:0
p.push(d6)}}d7=f0.EX(D.k.N(C.dQ(b5.h(b4,"indices")))).a
for(b4=d7.length,d8=0;b5=d8+2,b5<b4;d8+=3){d9=D.k.N(d7[d8])
e0=D.k.N(d7[d8+1])
e1=D.k.N(d7[b5])
n.push(d2+d9)
n.push(d2+e0)
n.push(d2+e1)
m.push(this.bMf(d1,c9,d9,e0,e1,c4))}if(b3)a5.push(new C.bt(d2,b8,a7))}}return new A.dm_(new Float64Array(C.ce(s)),new Uint16Array(C.ce(q)),new Float64Array(C.ce(p)),new Uint8Array(C.ce(o)),new Int32Array(C.ce(n)),new Int32Array(C.ce(m)))},
bMf(d,e,f,g,h,i){var w,v,u,t,s,r,q,p=J.a5(i),o=p.h(i,0),n=p.h(i,1),m=p.h(i,2)
if(d!=null&&e!=null){w={}
p=f*2
v=g*2
u=h*2
t=(e[p]+e[v]+e[u])/3
s=(e[p+1]+e[v+1]+e[u+1])/3
r=w.a=w.b=w.c=0
q=new A.bOi(w,d)
q.$2(t,s)
for(p=[f,g,h];r<3;++r){v=p[r]*2
q.$2((t+e[v])/2,(s+e[v+1])/2)}o*=w.c/4/255
n*=w.b/4/255
m*=w.a/4/255}p=new A.bOh()
return(p.$1(o)<<16|p.$1(n)<<8|p.$1(m)|4278190080)>>>0},
b5C(d7,d8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4={},d5=d7.a,d6=d5.length/3|0
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
h=new A.bOn(d4,d6,d7)
g=new A.bOp(d7)
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
D.o1.fZ(b1,0,a3,1/0)
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
c3=A.h0l(c1,c2,a9)
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
b8.bH(0,new A.bOm(c6,b9))
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
c9[d2]=q[d3]}d0[a9]=s[d1]}return new A.dgs(c7,c8,c9,d0,new Int32Array(C.ce(b7)),c6)},
axi(a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0=d.b
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
A.hsb(o,r,n)}}m=d.CW.cg(0,"world",new A.bOj(a0.length))
l=new A.bOk(d,v,u,t,new Float64Array(16),m)
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
A.h0m(m,w*16,q[h],f*16,j,i)
i+=16}}for(w=a0.length,p=0;p<a0.length;a0.length===w||(0,C.L)(a0),++p,i=e){e=i+16
D.o1.eb(j,i,e,m,a0[p].c*16)}return j},
b3S(b8,b9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3=b8.a,b4=b3.length/3|0,b5=new Float64Array(b4*3),b6=C.a([],x.t),b7=this.Q
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
cD3(d){var w,v,u=new A.bOs(this)
if(d)w=u.$1("walk")
else{v=u.$1("idle")
w=v==null?u.$1("samba"):v}if(w!=null)return w
u=u.$1("samba")
if(u==null){u=this.z
u=new C.cu(u,C.a3(u).k("cu<1>")).dL(0,new A.bOq(),new A.bOr(this))}return u},
cQ4(a7,a8,a9,b0,b1,b2,b3,b4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=this,a5="world",a6={}
if(a7){w=a4.at
w===$&&C.c()
v=w}else{w=a4.ax
w===$&&C.c()
v=w}u=a4.cD3(b1)
w=a4.z.h(0,u)
t=w==null?null:w.b
if(t==null)t=1
if(b1&&b0!=null&&D.a.t(u.toLowerCase(),"walk"))s=b0/50*t
else{w=B.diP.h(0,a4.a)
s=a9*(w==null?1:w)}w=a4.e
r=w.h(0,u)
if(r==null){a4.axi(u,0)
if(a4.d>=0){q=a4.CW
r=new C.y(q.h(0,a5)[a4.d*16+12],q.h(0,a5)[a4.d*16+14])}else r=D.z2
w.n(0,u,r)}p=a4.axi(u,s)
a6.a=a6.b=0
if(a4.d>=0){w=a4.CW
a6.b=w.h(0,a5)[a4.d*16+12]-r.a
a6.a=w.h(0,a5)[a4.d*16+14]-r.b}o=a4.b3S(v,p)
w=B.djx.h(0,a4.a)
n=b3+(w==null?0:w)
m=C.ig(v.a.length/3|0,new A.bOu(a6,a4,o,36,Math.cos(n),Math.sin(n),b2,b4),!0,x.R)
w=C.a([],x.t)
for(l=0;l<6;++l){q=$.ml+1
$.ml=q
w.push(q)}k=C.a([],x.z)
for(q=v.e,j=q.length,i=x.o,h=v.f,g=0;g<j;g+=3){f=m[q[g]]
e=m[q[g+1]]
d=m[q[g+2]]
a0=f.a
a1=f.b
a2=f.c
a3=new A.E(e.a-a0,e.b-a1,e.c-a2).Ki(new A.E(d.a-a0,d.b-a1,d.c-a2)).goy(0)
a2=C.a([f,e,d],i)
a1=C.b0(h[D.o.an(g,3)])
a0=v.r
a0===$&&C.c()
k.push(new A.mt(a2,a3,a1,a8,0.08,1,!1,0,0,2,w[a0[q[g]]]))}return k}}
A.dm_.prototype={}
A.daC.prototype={
cL1(d){var w,v,u=this.a,t=J.a5(u),s=x.j,r=x.G,q=C.aJ(J.q(r.a(J.q(s.a(t.h(u,"images")),d)),"bufferView")),p=q==null?null:D.k.N(q)
if(p==null)return null
w=r.a(J.q(s.a(t.h(u,"bufferViews")),p))
u=J.a5(w)
t=C.aJ(u.h(w,"byteOffset"))
v=t==null?null:D.k.N(t)
if(v==null)v=0
return C.zE(this.b,v,v+D.k.N(C.dQ(u.h(w,"byteLength"))))},
EX(a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=null,g="byteOffset",f=this.a,e=J.a5(f),d=x.j,a0=x.G,a1=a0.a(J.q(d.a(e.h(f,"accessors")),a5)),a2=J.a5(a1),a3=D.k.N(C.dQ(a2.h(a1,"count"))),a4=a2.h(a1,"type")
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
m=C.aQV(this.b)
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
A.EF.prototype={}
A.a8L.prototype={
gTg(){var w,v=this
if(!v.f)return"has died"
if(v.r>=0)return"in hospital"
if(v.c<30)return"in danger"
if(v.e)return"sick"
w=v.b
if(w>80)return"starving"
if(w>55)return"hungry"
if(v.d<40)return"unhappy at home"
return"fine"},
gaBz(d){var w,v=this.gTg()
A:{if("has died"===v){w="\ud83d\udd6f"
break A}if("in hospital"===v){w="\ud83c\udfe5"
break A}if("in danger"===v){w="\ud83c\udd98"
break A}if("sick"===v){w="\ud83e\udd12"
break A}if("starving"===v||"hungry"===v){w="\ud83c\udf7d"
break A}if("unhappy at home"===v){w="\ud83d\ude1f"
break A}w="\ud83d\ude42"
break A}return w}}
A.Hf.prototype={}
A.L7.prototype={}
A.aRu.prototype={
bvx(d,e){var w,v=C.a([],x.y)
for(w=0;w<7;++w)v.push(new A.a8L(B.ON[w]))
this.c=v
v[1].b=55
v[4].b=40},
gLh(){var w,v,u,t=C.a([],x.y),s=this.c
s===$&&C.c()
w=s.length
v=0
for(;v<s.length;s.length===w||(0,C.L)(s),++v){u=s[v]
if(u.f)t.push(u)}return t},
gcGX(){var w=this.c
w===$&&C.c()
return new C.a2(w,new A.bHm(),C.U(w).k("a2<1>")).gM(0)},
YH(d){var w=this.f
D.d.ck(w,0,d)
if(w.length>12)w.pop()},
b8h(a2,a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=this
a1.as+=a3
for(w=a1.gLh(),v=w.length,u=-0.6*a3,t=0.8*a3,s=0.2*a3,r=a1.b,q=0.012*a3,p=a1.f,o=0.15*a3,n=0;n<w.length;w.length===v||(0,C.L)(w),++n){m=w[n]
l=a4.d
l===$&&C.c()
k=m.a
j=l[k.c]
i=j.gjz()
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
m.c=l}}if(l<=0)a1.aPN(m)}}for(w=a1.e,v=1.2*a3,u=2.2*a3,d=0;d<w.length;++d){a0=w[d]
t=a0.a
if(t<0)continue
s=a1.c
s===$&&C.c()
m=s[t]
if(!m.f){a0.a=-1
continue}t=a0.b=Math.max(0,a0.b-a3)
if(t>30)a0.c=Math.min(100,a0.c+u)
else if(t<=0)if((m.c-=v)<=0){a1.aPN(m)
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
a1.UY(a4)
if((a1.at-=a3)<=0){a1.at=60+r.aj()*50
a1.cCq(a4)}},
aPN(d){var w
d.f=!1
d.c=0
w=d.r
if(w>=0)this.e[w].a=-1
d.r=-1
D.d.bn(this.d,new A.bHj(d))
this.YH(d.a.b+" has died. Keep up with everybody's needs: food, medicine and a home that works.")},
aTq(d,e){return D.d.b8(this.d,new A.bHk(d,e))},
UY(d){var w,v,u,t,s,r,q,p,o,n=this,m=n.d,l=C.B(m,x.fC),k=l.length,j=n.f,i=0
for(;i<l.length;l.length===k||(0,C.L)(l),++i){w=l[i]
v=B.ON[w.b]
u=w.c==="power"
if(u){t=d.d
t===$&&C.c()
s=t[v.c].gjz()}else{t=v.d
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
if(j.length>12)j.pop()}}for(l=n.gLh(),k=l.length,u=n.b,i=0;i<l.length;l.length===k||(0,C.L)(l),++i){q=l[i]
if(m.length>=4)break
t=d.d
t===$&&C.c()
r=q.a
p=t[r.c]
if(!p.gjz()&&!n.aTq(r.a,"power")){m.push(new A.Hf(n.Q++,r.a,"power",B.cOJ[u.aB(3)],15))
D.d.ck(j,0,r.b+" is calling for help: no power.")
if(j.length>12)j.pop()}t=r.d
o=t>=0?d.d[t]:p
t=o.c
if((t==="bathroom"||t==="kitchen")&&!o.gl3()&&!n.aTq(r.a,"leak")&&m.length<4){m.push(new A.Hf(n.Q++,r.a,"leak",B.cWF[u.aB(3)],15))
D.d.ck(j,0,r.b+" is calling for help: a leak.")
if(j.length>12)j.pop()}}},
cCq(d){var w,v,u,t,s,r,q=this
if(q.d.length>=3||q.gLh().length===0)return
w=q.b
v=q.gLh()[w.aB(q.gLh().length)]
u=d.d
u===$&&C.c()
t=v.a
s=u[t.c]
t=t.d
r=t>=0?u[t]:s
u=r.c
if((u==="bathroom"||u==="kitchen")&&r.gl3()&&w.h9()){r.ch=!0
r.cx=null}else if(s.gjz()){s.ay=!0
s.CW=null
s.db=!1
s.cy.a9(0)}else return
q.UY(d)},
bbJ(d){var w,v,u,t=this
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
t.YH(u)
return u},
aIw(d){var w,v,u=this
if(!d.f)return d.a.b+" has died."
if(!d.e)return d.a.b+" is not sick."
w=u.x
if(w<=0)return y.k
u.x=w-1
d.e=!1
d.c=Math.min(100,d.c+20)
u.r+=3
v=d.a.b+" took the medicine and is better. +3 points."
u.YH(v)
return v},
b8g(d){var w,v,u,t
if(!d.f)return d.a.b+" has died."
if(d.r>=0)return d.a.b+" is already in hospital."
if(!d.e&&d.c>60)return d.a.b+" is not ill enough for the hospital."
w=this.e
v=D.d.bc(w,new A.bHl())
if(v<0)return"The hospital is full. Treat the patients first, they go home when they are better."
w=w[v]
u=d.a
w.a=u.a
w.b=100
w.c=0
d.r=v
t=u.b+" is in bed "+(v+1)+" of the hospital. Keep up with their care."
this.YH(t)
return t},
cSI(d){var w,v,u=this,t=u.e[d],s=t.a
if(s<0)return"This bed is empty."
if(t.b>70)return"The patient is cared for already."
w=u.x
if(w<=0)return y.k
u.x=w-1
t.b=100;++u.r
w=u.c
w===$&&C.c()
v=w[s].a.b+" was treated. +1 point."
u.YH(v)
return v},
b98(d){var w,v=this
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
cLS(d){return d.r<0},
cIH(d,e){var w,v,u,t,s,r,q,p,o,n=C.a([],x.K),m=d.d
m===$&&C.c()
if(m[e].c!=="outside")return n
for(m=D.d.gae(this.gLh()),w=new C.fk(m,this.gcLR()),v=this.d,u=0;w.C();){t=m.gS(0)
s=D.d.b8(v,new A.bHn(t))
r=t.a
q=(u&1)===1?22:0
p=s?"\ud83d\udcde ":""
o=t.gaBz(0)
t.gTg()
t=s?0:34
n.push(new A.a8M(r.a,e,-270+u*90,205+q,0,r.e,p+r.b+" "+o,s,t));++u}return n},
cSs(a2){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=l.r,j=l.w,i=l.x,h=l.y,g=l.z,f=l.as,e=l.Q,d=x.ez,a0=C.a([],d),a1=l.c
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
d.push(C.F(["id",o.a,"res",o.b,"kind",o.c,"msg",o.d,"reward",o.e,"age",o.f],v,u))}w=x.W
u=C.T(v,w)
for(r=a2.gqq(),q=r.length,t=0;t<r.length;r.length===q||(0,C.L)(r),++t){n=r[t]
u.n(0,""+n.a,n.gjz())}w=C.T(v,w)
for(r=D.d.gae(a2.gqq()),q=new C.fk(r,new A.bHp());q.C();){m=r.gS(0)
w.n(0,""+m.a,m.gl3())}return C.F(["v",1,"seed",l.a,"points",k,"food",j,"medicine",i,"served",h,"saved",g,"clock",f,"nextCall",e,"res",a0,"beds",a1,"calls",d,"wired",u,"plumbed",w],v,x.C)},
Gu(d,e){return this.bkN(0,e)},
bkN(d,e){var w=0,v=C.j(x.H),u=1,t=[],s=this,r,q,p,o
var $async$Gu=C.e(function(f,g){if(f===1){t.push(g)
w=u}for(;;)switch(w){case 0:u=3
w=6
return C.b(C.az(),$async$Gu)
case 6:r=g
q=C.dU(s.cSs(e),x.N,x.C)
J.aF(q,"at",Date.now())
w=7
return C.b(r.au("String","ngmy_community_v1",D.R.ao(q,null)),$async$Gu)
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
return C.i($async$Gu,v)}}
A.a5X.prototype={
U(){return new A.bhQ()}}
A.bhQ.prototype={
gbgF(){var w=this.r
return w===$?this.r=this.a.c:w},
a_(){this.a1()
this.YI()},
YI(){return this.bYP()},
bYP(){var w=0,v=C.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$YI=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:m={}
w=3
return C.b(A.bHo(),$async$YI)
case 3:l=e
if(t.c==null){w=1
break}m.a=null
if(l!=null){s=J.a5(l)
r=C.aJ(s.h(l,"seed"))
q=r==null?null:D.k.N(r)
if(q==null)q=1
r=$.Hh
if((r==null?null:r.b)===q){r.toString
t.e=r}else{r=A.bPz(q)
t.e=$.Hh=r
A.hpG(r,l)}m.a=A.hpH(l)
r=Date.now()
s=C.aJ(s.h(l,"at"))
s=s==null?null:D.k.N(s)
p=D.k.D((r-(s==null?Date.now():s))/1000*0.15,0,90)
while(p>0){o=p>5?5:p
s=m.a
r=t.e
r===$&&C.c()
s.b8h(0,o,r)
p-=o}}else{s=$.Hh
if(s==null)s=$.Hh=A.bPz(D.o.G(Date.now(),1e5))
t.e=s
s=s.b
n=A.h_7(s,s)
m.a=n
n.UY(t.e)}$.fMJ=m.a
t.m(new A.dKa(m,t))
t.f=C.dA(D.h4,new A.dKb(t))
case 1:return C.h(u,v)}})
return C.i($async$YI,v)},
c31(){var w,v,u,t=this,s=t.d
if(s==null||t.c==null)return
w=s.f
v=w.length===0?"":D.d.gL(w)
u=t.e
u===$&&C.c()
s.b8h(0,1,u)
if(w.length!==0&&D.d.gL(w)!==v)t.Ij(D.d.gL(w))
if(++t.y%8===0)s.Gu(0,t.e)
t.m(new A.dKn())},
q(){var w,v=this,u=v.f
if(u!=null)u.a8(0)
u=v.x
if(u!=null)u.a8(0)
u=v.d
if(u!=null){w=v.e
w===$&&C.c()
u.Gu(0,w)}v.a2()},
Ij(d){var w=this,v=w.x
if(v!=null)v.a8(0)
w.m(new A.dKh(w,d))
w.x=C.cM(D.ts,new A.dKi(w))},
aal(d){return this.bPx(d)},
bPx(d){var w=0,v=C.j(x.H),u,t=this,s,r,q
var $async$aal=C.e(function(e,f){if(e===1)return C.f(f,v)
for(;;)switch(w){case 0:q=B.ON[d.b]
if(d.c==="power")s=q.c
else{r=q.d
s=r>=0?r:q.c}r=t.e
r===$&&C.c()
r.e=s
r=t.c
r.toString
w=3
return C.b(C.a6(r,!1).c8(C.e8(new A.dK6(),!1,null,x.H)),$async$aal)
case 3:if(t.c==null){w=1
break}r=t.d
if(r!=null)r.UY(t.e)
r=t.d
if(r!=null)r.Gu(0,t.e)
t.m(new A.dK7())
case 1:return C.h(u,v)}})
return C.i($async$aal,v)},
air(d){return this.cA6(d)},
cA6(d){var w=0,v=C.j(x.H),u,t=this,s
var $async$air=C.e(function(e,f){if(e===1)return C.f(f,v)
for(;;)switch(w){case 0:s=t.e
s===$&&C.c()
s.e=d.a.c
s=t.c
s.toString
w=3
return C.b(C.a6(s,!1).c8(C.e8(new A.dKq(),!1,null,x.H)),$async$air)
case 3:if(t.c==null){w=1
break}s=t.d
if(s!=null)s.UY(t.e)
t.m(new A.dKr())
case 1:return C.h(u,v)}})
return C.i($async$air,v)},
YJ(d,e){var w=null,v=e.j(0.18),u=C.m(14),t=C.I(e.j(0.7),D.q,1)
return C.p(w,C.d(d,w,w,w,w,w,w,C.l(w,w,e,w,w,w,w,w,w,w,w,12.5,w,w,D.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),D.f,w,w,new C.o(v,w,t,u,w,w,D.n),w,w,w,w,A5.ag4,w,w,w)},
Vq(d,e,f){var w=null
return new C.C(D.n1,C.A(C.a([new C.a7(62,w,C.d(d,w,w,w,w,w,w,Q.a6U,w,w,w),w),C.D(C.bw(C.m(6),C.lZ(D.bF,w,w,8,w,D.k.D(e/100,0,1),new C.lS(f,x.e)),D.aq),1)],x.p),D.m,w,D.e,D.j,0,w,w),w)},
OS(d,e,f){var w=null,v=e==null,u=v?D.dp:f.j(0.22),t=C.m(12),s=C.I(v?D.b2:f,D.q,1)
return C.aE(w,C.p(w,C.d(d,w,w,w,w,w,w,C.l(w,w,v?D.c_:f,w,w,w,w,w,w,w,w,12.5,w,w,D.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),D.f,w,w,new C.o(u,w,s,t,w,w,D.n),w,w,w,w,D.nQ,w,w,w),D.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,e,w,w,w,w,w,w,!1,D.a8)},
acJ(d,e){return this.OS(d,e,D.aH)},
OT(d,e){var w=null,v=C.a([e.j(0.1),B.Ej],x.O),u=C.m(18)
return C.p(w,d,D.f,w,w,new C.o(w,w,C.I(e.j(0.5),D.q,1),u,w,new C.a8(D.b0,D.b5,D.x,v,w,w),D.n),w,w,w,D.dc,D.bk,w,w,w)},
c3_(d){return this.OT(d,D.b2)},
aX7(d,e,f){var w,v=null,u=this.gbgF()===d,t=u?D.aH.j(0.22):D.c.j(0.06),s=C.m(14),r=u?D.aH:D.b2
r=C.I(r,D.q,u?2:1)
w=f>0?e+" ("+f+")":e
return C.D(C.aE(v,C.p(v,C.av(C.d(w,v,v,v,v,v,v,C.l(v,v,u?D.aH:D.ad,v,v,v,v,v,v,v,v,12.5,v,v,D.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v,v,v),D.f,v,v,new C.o(t,v,r,s,v,v,D.n),v,v,v,D.je,D.jx,v,v,v),D.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new A.dKp(this,d),v,v,v,v,v,v,!1,D.a8),1)},
avw(d,e){return this.aX7(d,e,0)},
bCG(d){var w,v,u,t,s,r,q,p,o,n=this,m=null,l=d.d
if(l.length===0)return new C.C(D.ew,C.v(B.d3Y,D.m,m,D.e,D.j,0,D.p),m)
w=x.p
v=C.a([],w)
for(u=l.length,t=0;t<l.length;l.length===u||(0,C.L)(l),++t){s=l[t]
r=s.c==="power"
q=r?D.co:D.cs
p=B.ON[s.b]
o=r?"\u26a1 Power":"\ud83d\udeb0 Leak"
r=r?D.co:D.cs
v.push(n.OT(C.v(C.a([new C.cm(D.aO,D.e,D.j,D.m,m,D.p,m,0,C.a([new A.abv(p.e,44,m),D.av,new C.bD(1,D.bi,new C.x(p.b,m,D.i3,m,m,m,m,m,m,m,m,m),m),n.YJ(o+"  +"+s.e,r)],w),m),D.O,new C.x('"'+s.d+'"',m,B.f09,m,m,m,m,m,m,m,m,m),D.S,new C.bH(D.a7,m,m,n.acJ("\ud83d\udd27 Go and fix it",new A.dK5(n,s)),m)],w),D.F,m,D.e,D.j,0,D.p),q))}return C.v(v,D.m,m,D.e,D.j,0,D.p)},
c30(d){var w,v,u,t,s,r,q,p,o,n=this,m=null,l=x.p,k=C.a([],l),j=d.c
j===$&&C.c()
w=j.length
v=0
for(;v<j.length;j.length===w||(0,C.L)(j),++v){u=j[v]
t=u.f
if(!t)s=D.b2
else s=u.gTg()==="fine"?D.b7:D.ci
t=t?1:0.5
r=u.a
q=u.gaBz(0)
p=u.gTg()
o=u.gTg()==="fine"?D.es:D.f3
r=C.a([new C.cm(D.aO,D.e,D.j,D.m,m,D.p,m,0,C.a([new A.abv(r.e,50,m),D.av,new C.bD(1,D.bi,C.v(C.a([new C.x(r.b+"  "+q,m,D.i3,m,m,m,m,m,m,m,m,m),new C.x(r.f,m,B.eVj,m,m,m,m,m,m,m,m,m),new C.x("Now: "+p,m,new C.G(!0,o,m,m,m,m,12.5,D.H,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m,m,m,m,m,m,m,m,m)],l),D.F,m,D.e,D.j,0,D.p),m)],l),m),D.O,n.Vq("Food",100-u.b,D.ct),n.Vq("Health",u.c,D.b7),n.Vq("Home",u.d,D.cs)],l)
if(u.f){q=n.acJ("\ud83c\udf5e Feed",new A.dKc(n,d,u))
p=n.OS("\ud83d\udc8a Medicine",u.e?new A.dKd(n,d,u):m,D.by)
D.d.v(r,C.a([D.an,new C.BT(D.bz,8,8,D.br,C.a([q,p,n.OS("\ud83c\udfe5 Hospital",u.r>=0?m:new A.dKe(n,d,u),D.ci),n.OS("\ud83c\udfe0 Visit",new A.dKf(n,u),D.b1)],l),m)],l))}k.push(n.OT(new C.kA(t,C.v(r,D.F,m,D.e,D.j,0,D.p),m),s))}return C.v(k,D.m,m,D.e,D.j,0,D.p)},
bVX(d){var w,v,u,t,s=null,r=x.p,q=C.a([B.e3I],r)
for(w=d.e,v=0;v<w.length;++v){u=w[v].a<0
t=u?D.b2:D.ci
q.push(this.OT(u?new C.cm(D.aO,D.e,D.j,D.m,s,D.p,s,0,C.a([B.foe,D.av,new C.x("Bed "+(v+1)+": empty",s,B.eV5,s,s,s,s,s,s,s,s,s)],r),s):new C.fh(new A.dK9(this,d,v),s),t))}return C.v(q,D.m,s,D.e,D.j,0,D.p)},
cqt(d){var w=this,v=null,u=x.p,t=w.OT(C.A(C.a([B.fat,D.av,B.bvo,w.acJ("Buy",new A.dKk(w,d))],u),D.m,v,D.e,D.j,0,v,v),D.ct),s=w.OT(C.A(C.a([B.fuW,D.av,B.bvC,w.OS("Buy",new A.dKl(w,d),D.by)],u),D.m,v,D.e,D.j,0,v,v),D.by),r=C.a([B.fpe,D.an,C.d("Calls answered: "+d.y+"\nPatients sent home better: "+d.z+"\nPeople lost: "+d.gcGX(),v,v,v,v,v,v,B.aP6,v,v,v)],u)
if(d.gLh().length===0)D.d.v(r,C.a([D.S,w.acJ("Start a new community",new A.dKm(w))],u))
return C.v(C.a([t,s,w.c3_(C.v(r,D.F,v,D.e,D.j,0,D.p))],u),D.m,v,D.e,D.j,0,D.p)},
B(d){var w,v,u,t,s,r,q=this,p=null,o=q.d
if(o==null)w=D.lz
else{w=x.p
v=C.A(C.a([C.aH(p,p,p,p,M.nc,p,p,p,new A.dKs(d),p,p,p,p,p,p),B.bv6,q.YJ("\u2b50 "+o.r,D.aH)],w),D.m,p,D.e,D.j,0,p,p)
u=q.YJ("\ud83c\udf5e "+o.w,D.ct)
t=q.YJ("\ud83d\udc8a "+o.x,D.by)
s=o.e
s=C.A(C.a([u,D.ab,t,D.ab,q.YJ("\ud83c\udfe5 "+new C.a2(s,new A.dKt(),C.U(s).k("a2<1>")).gM(0)+"/"+s.length,D.ci)],w),D.m,p,D.bb,D.j,0,p,p)
t=C.A(C.a([q.aX7("calls","\ud83d\udcde Calls",o.d.length),q.avw("people","\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc67 People"),q.avw("hospital","\ud83c\udfe5 Hospital"),q.avw("shop","\ud83d\uded2 Shop")],w),D.m,p,D.e,D.j,0,p,p)
r=q.gbgF()
A:{if("people"===r){u=q.c30(o)
break A}if("hospital"===r){u=q.bVX(o)
break A}if("shop"===r){u=q.cqt(o)
break A}u=q.bCG(o)
break A}w=C.a([new C.C(B.btC,v,p),new C.C(D.AI,s,p),new C.C(B.but,t,p),D.O,C.D(C.cB(C.a([u],w),p,D.Lx,p,p,D.ah,!1),1)],w)
if(q.w!=null){v=D.e9.j(0.96)
u=C.m(14)
t=C.I(D.b7,D.q,1)
s=q.w
s.toString
w.push(C.p(p,C.d(s,p,p,p,p,p,p,B.eXt,p,p,p),D.f,p,p,new C.o(v,p,t,u,p,p,D.n),p,p,p,F.ag6,D.bk,p,p,1/0))}w=C.v(w,D.m,p,D.e,D.j,0,D.p)}return C.c8(p,D.bX,C.bn(!0,w,!0,!1,D.af,!0,!0),p,!1,!1,p,p)}}
A.abv.prototype={
B(d){var w=null,v=this.d
return new C.a7(v,v,C.b3(w,w,w,new A.bcK(this.c,w),D.au),w)},
gY(d){return this.d}}
A.bcK.prototype={
a5(d,e){var w,v,u,t,s=e.a,r=s/2,q=$.X(),p=C.M()
p.r=D.dp.gp(0)
d.ah(new C.u(r,r),r,p)
p=d.a
J.bA(p.save())
q=new C.aP(q.r,D.ap,null,null,C.a([],x.v))
r=0+s
q.E(new C.ke(new C.a9(0,0,r,r)))
d.qf(0,q)
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
d.ah(new C.u(s*0.42,r),q,t)
t=C.M()
t.r=D.pu.gp(0)
d.ah(new C.u(s*0.58,r),q,t)
t=s*0.4
q=C.M()
q.b=D.ae
q.c=1.4
q.r=D.er.gp(0)
d.f4(new C.a9(t,w,t+s*0.2,w+s*0.12),0.2,2.7,!1,q)
p.restore()},
ar(d){return!1}}
A.mi.prototype={}
A.XF.prototype={}
A.zN.prototype={}
A.a3A.prototype={}
A.BR.prototype={
gja(){return this.a==="ok"}}
A.a41.prototype={}
A.hk.prototype={}
A.Dp.prototype={}
A.px.prototype={}
A.b6N.prototype={}
A.nv.prototype={}
A.aTO.prototype={
gBe(){var w=this.c
return w.c>=2&&A.afv(A.Ai(this.a),w).a==="ok"},
gdc(d){return this.c}}
A.a44.prototype={
gyB(){var w,v,u=this.id,t=u==="ptrap"
if(t||u==="faucet"){w=this.k2
if(w==null)return!1
if(t)if(w.a.a===3){u=w.b
u=new C.bc(u,C.a3(u).k("bc<2>")).da(0,new A.bOZ())&&w.c}else u=!1
else u=A.fod(w)&&w.f
return u}v=this.k1
return v!=null&&v.c>=2&&A.afv(A.Ai(u),v).a==="ok"},
ga4H(){var w=this.id
if(w.length===0)w=this.gjz()
else w=w!=="fan"||this.gyB()
return w},
gTj(){var w=this.id
if(w.length===0)w=this.gjz()
else w=w!=="switch"||this.gyB()
return w},
gaFp(){var w=this.id
if(w.length===0)w=this.gjz()
else w=!(w==="outlet"||w==="gfci")||this.gyB()
return w},
gfq(d){var w,v=this.c
A:{if("bathroom"===v){w=110
break A}if("kitchen"===v){w=140
break A}if("living"===v){w=180
break A}if("hall"===v){w=480
break A}if("outside"===v){w=1200
break A}w=130
break A}return w},
gkz(d){var w,v=this.c
A:{if("bathroom"===v){w=100
break A}if("kitchen"===v){w=110
break A}if("living"===v){w=120
break A}if("hall"===v){w=180
break A}if("outside"===v){w=900
break A}w=112
break A}return w},
gjz(){var w,v=this
if(v.c!=="outside"){w=v.id
if(w.length!==0)w=w==="ptrap"||w==="faucet"||v.gyB()
else{w=v.CW
w=w==null?null:w.gaCY()
if(w==null)w=!v.ay}}else w=!0
return w},
gl3(){var w=this,v=w.c
if(v==="bathroom"||v==="kitchen"){v=w.id
if(v.length!==0)v=!(v==="ptrap"||v==="faucet")||w.gyB()
else{v=w.cx
v=v==null?null:v.gBe()
if(v==null)v=!w.ch}}else v=!0
return v},
KV(d){var w,v,u,t
for(w=this.x,v=w.length,u=0;u<v;++u){t=w[u]
if(t.a===d)return t}return null},
e7(d,e,f,g){var w=this,v=w.y++,u=f==null?0:f,t=new A.a41(v,e,u,g==null?w.gkz(0)*0.6:g)
w.x.push(t)
w.aBY(0,t)
return t},
K(d,e){return this.e7(0,e,null,null)},
aBY(d,e){var w,v,u,t=e.b,s=B.pY.h(0,t)
s.toString
w=(e.e&1)===1
v=w?s.d:s.c
u=w?s.c:s.d
s=v/2
e.c=D.k.D(e.c,-this.gfq(0)/2+s+1,this.gfq(0)/2-s-1)
s=u/2
e.d=D.k.D(e.d,s+1,this.gkz(0)-s-1)
if(D.d.t(B.awV,t)){e.c=D.k.V(e.c/40)*40
e.d=D.k.V(e.d/40)*40}}}
A.aTT.prototype={
bvI(d){var w,v,u
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
break B}u=A.yB(0,w,v,0,0,1,1,C.a([],x.D))
u.id=d
u.dx=d==="fan"?"fan":"light"
if(d==="gfci")u.Q=5
u.ch=u.ay=!1
u.Q=v==="bathroom"||v==="kitchen"?5:0
this.asv(u)
u.fr="bangtv"
u.fy=!0
u.go=Math.max(0,D.d.bc(E.k_,new A.bPA()))
this.d=C.a([u],x.A)},
cMK(){var w,v,u,t,s,r
for(w=this.gqq(),v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u){t=w[u]
t.cx=t.CW=null
s=t.ay=!0
r=t.c
t.ch=r!=="bathroom"?r==="kitchen":s
t.db=!1
t.cy.a9(0)
D.d.a9(t.dy)}},
c32(){var w,v,u,t,s,r,q,p=this,o="bedroom",n="bathroom",m=new C.eJ()
m.dB(p.b)
w=new A.bPB()
v=x.D
u=C.a([B.byl,B.byi,B.byj],v)
for(t=0;t<3;++t){s=B.d6P[t]
u.push(new A.nv("left",s.a-50,s.b))}for(t=0;t<4;++t){s=B.db6[t]
u.push(new A.nv("right",s.a-50,s.b))}r=C.a([A.yB(0,"Bedroom 1",o,0,0,2,2,C.a([w.$1(-48)],v)),A.yB(1,"Bedroom 2",o,2,0,2,2,C.a([w.$1(-48)],v)),A.yB(2,"Bathroom 1",n,4,0,1,2,C.a([B.Ze],v)),A.yB(3,"Bedroom 3",o,5,0,2,2,C.a([w.$1(-48)],v)),A.yB(4,"Bathroom 2",n,7,0,2,2,C.a([B.Ze],v)),A.yB(5,"Hall","hall",0,2,9,1,u),A.yB(6,"Bedroom 4",o,0,3,2,2,C.a([w.$1(-48)],v)),A.yB(7,"Bedroom 5",o,2,3,2,2,C.a([w.$1(-48)],v)),A.yB(8,"Bathroom 3",n,4,3,1,2,C.a([B.Ze],v)),A.yB(9,"Kitchen","kitchen",5,3,2,2,C.a([new A.nv("back",-26,5),B.byn],v)),A.yB(10,"Living room","living",7,3,2,2,C.a([new A.nv("back",-70,5),B.bym,B.byk],v)),A.yB(11,"Garden","outside",0,5,9,1,C.a([B.byh],v))],x.A)
p.d=r
for(t=0;t<12;++t){q=r[t]
v=q.c
if(v==="outside"){p.asv(q)
continue}q.dx=v==="bedroom"?"fan":"light"
q.ay=m.aj()<0.6
q.ch=(v==="bathroom"||v==="kitchen")&&m.aj()<0.7
D.d.fZ(q.z,0,3,m.aB(8))
A:{if("bathroom"===v){v=5+m.aB(2)
break A}if("kitchen"===v){v=5+m.aB(2)
break A}if("bedroom"===v){v=2+m.aB(3)
break A}if("living"===v){v=m.aB(2)
break A}v=m.aB(2)
break A}q.Q=v
q.as=m.aB(4)
p.asv(q)}v=p.d
u=v[5]
u.fx=u.fr="tv100"
u.fy=!0
v[3].ay=!0
v[2].ch=!0},
asv(d){var w,v,u,t,s="sofa",r="armchair",q="plant",p="lamppost",o="fence",n=d.gfq(0)/2
switch(d.c){case"bedroom":d.e7(0,"rug",0,d.gkz(0)*0.55)
d.e7(0,"bed",24,46)
d.e7(0,"nightstand",-8,14)
d.e7(0,"wardrobe",-n+12,70).e=1
d.e7(0,"desk",n-14,100).e=3
break
case"living":d.e7(0,"rug",0,70)
d.e7(0,s,0,100)
d.e7(0,"coffee",0,68)
d.e7(0,r,66,70)
d.e7(0,q,76,14)
d.e7(0,"lamp",-76,14)
break
case"kitchen":d.e7(0,"dining",0,78)
d.e7(0,"chair",-24,78).e=1
d.e7(0,"chair",24,78).e=3
d.e7(0,q,58,20)
break
case"bathroom":d.e7(0,"rug",0,62).e=0
d.e7(0,q,d.gfq(0)/2-12,d.gkz(0)-12)
break
case"outside":for(w=-320;w<=320;w+=40)d.e7(0,w===0?"roadcross":"road",w,360)
for(v=320;v>=160;v-=40)d.e7(0,"road",0,v).e=1
d.e7(0,"shop",-200,270)
d.e7(0,"hospital",210,275)
d.e7(0,"firestation",-340,275)
d.e7(0,"school",360,275)
d.e7(0,"house2",-140,150)
d.e7(0,"car",-120,360)
d.e7(0,"ambulance",120,360).e=2
d.e7(0,"firetruck",-340,318)
d.e7(0,"tree",-190,60)
d.e7(0,"tree",190,90)
d.e7(0,"pine",250,40)
d.e7(0,"pine",-260,30)
d.e7(0,"bush",-70,20)
d.e7(0,"bush",70,20)
d.e7(0,"flowers",-30,24)
d.e7(0,"flowers",30,24)
d.e7(0,p,40,330)
d.e7(0,p,-80,330)
d.e7(0,"bench",120,190)
d.e7(0,"pond",160,470)
d.e7(0,"dog",60,60)
d.e7(0,"cat",-50,80)
d.e7(0,"cow",-300,520)
d.e7(0,"cow",-240,560)
d.e7(0,"sheep",-180,540)
d.e7(0,"horse",260,560)
d.e7(0,"chicken",-100,500)
d.e7(0,o,-270,480)
d.e7(0,o,-206,480)
d.e7(0,o,-142,480)
break
case"hall":d.e7(0,s,-140,140)
d.e7(0,s,140,140)
d.e7(0,r,-80,150).e=2
d.e7(0,r,80,150).e=2
for(u=[-n+14,n-14],t=0;t<2;++t){w=u[t]
d.e7(0,q,w,168)
d.e7(0,"lamp",w,14)}d.e7(0,q,-180,12)
d.e7(0,q,180,12)
d.e7(0,"console",-104,10)
d.e7(0,"console",104,10)
break}},
gqq(){var w,v,u,t=C.a([],x.A),s=this.d
s===$&&C.c()
w=s.length
v=0
for(;v<s.length;s.length===w||(0,C.L)(s),++v){u=s[v]
if(u.c!=="outside")t.push(u)}return t},
gcTd(){var w=this.gqq()
return new C.a2(w,new A.bPF(),C.U(w).k("a2<1>")).gM(0)},
gcQ3(){var w=this.d
w===$&&C.c()
return new C.a2(w,new A.bPE(),C.U(w).k("a2<1>")).gM(0)},
gcQ2(){var w=this.d
w===$&&C.c()
return new C.a2(w,new A.bPD(),C.U(w).k("a2<1>")).gM(0)},
gcIS(){var w=this.gqq()
return new C.a2(w,new A.bPC(),C.U(w).k("a2<1>")).gM(0)}}
A.N4.prototype={
U(){var w=new C.BI()
$.CE()
w.j1(0)
return new A.aCs(w,B.aw_,C.aX(x.N),new C.cs(null,x.eF))}}
A.aCs.prototype={
ga2G(){var w,v,u=$.fMJ
if(u!=null){w=u.a
v=this.d
v===$&&C.c()
v=w===v.b
w=v}else w=!1
return w?u:null},
axF(){var w,v,u=this.ga2G()
if(u==null)u=null
else{w=this.d
w===$&&C.c()
v=w.d
v===$&&C.c()
w=u.cIH(w,v[w.e].a)
u=w}this.fr=u==null?B.aw_:u},
gbfD(){var w=this.d
w===$&&C.c()
w=w.gqq()
return new C.a2(w,new A.e2s(),C.U(w).k("a2<1>")).gM(0)},
a_(){var w,v,u,t,s=this
s.a1()
w=s.a.r
if(w.length!==0)w=s.d=A.hsp(w)
else{w=$.Hh==null
if(w){w=D.o.G(Date.now(),1e5)
$.Hh=A.bPz(w)}w=$.Hh
w.toString
w=s.d=w}v=s.a
w.c=v.d||w.c
u=new A.AE(-0.05,0.1,120,B.fyN,$.aw())
u.f=560
s.e=u
if(v.f.length!==0){w=w.gqq()
t=new C.a2(w,new A.e2p(s),C.U(w).k("a2<1>"))
if(!t.gam(0)){w=s.d
w===$&&C.c()
w.e=t.gL(0).a}}A.aTF($.bB2)
A.hzQ()
s.axF()
w=s.d
w===$&&C.c()
v=w.d
v===$&&C.c()
s.f=A.heJ(v[w.e],!1,"look",s.gbfD(),s.fr,0)
s.avx(!0)
s.fx=C.dA(D.fG,new A.e2q(s))
$.aU.x1$.push(new A.e2r(s))},
q(){var w=this,v=w.p1
if(v!=null)v.a8(0)
v=w.ch
if(v!=null)v.a8(0)
v=w.dx
if(v!=null)v.a8(0)
v=w.fx
if(v!=null)v.a8(0)
w.a2()},
bYk(){var w,v=this.d
v===$&&C.c()
w=v.a
A:{if("switch"===w){v="The ceiling light is already in. Tap the red switch on the wall and wire it. Then flip it to see the light work."
break A}if("outlet"===w){v="Tap the red outlet on the wall and wire it. Then plug in a lamp or a TV to test it."
break A}if("gfci"===w){v="Tap the red GFCI outlet and wire it. Then plug in a hair dryer to test it."
break A}if("fan"===w){v="Tap the ceiling fan and wire it. Then flip the wall switch and watch it spin."
break A}if("ptrap"===w){v="The sink has no drain yet. Tap the sink and build the drain under it."
break A}v="The faucet is not connected yet. Tap the sink and connect the hoses."
break A}return v},
avx(d){var w,v,u,t,s,r,q=this,p=q.d
p===$&&C.c()
w=p.d
w===$&&C.c()
v=w[p.e]
u=-0.05
if(q.z){t=new A.E(0,40,v.gkz(0)*0.5)
s=Math.max(v.gfq(0),v.gkz(0))*0.6
p=q.e
p===$&&C.c()
p.e=20
p.f=260
p.r=-1.2
p.w=1.2
p.GA(!0)
r=0.12}else if(v.c==="outside"){p=q.e
p===$&&C.c()
p.e=30
p.f=1100
p.r=0.03
p.w=1.35
p.GA(!0)
t=B.fyL
s=540
r=0.35
u=-0.25}else if(q.x){t=new A.E(0,40,v.gkz(0)*0.3)
s=Math.max(v.gfq(0)*0.8,v.gkz(0)*0.9)+10
p=q.e
p===$&&C.c()
p.e=6
p.f=s*1.6
p.r=0.03
p.w=1.35
p.GA(!0)
r=0.1}else{t=new A.E(0,30,v.gkz(0)*0.45)
s=(v.gfq(0)*1.2>v.gkz(0)*1.4?v.gfq(0)*1.2:v.gkz(0)*1.4)+30
p=q.e
p===$&&C.c()
p.e=6
p.f=560
p.r=0.1
p.w=1.35
p.GA(!0)
r=0.5
u=-0.12}p=q.e
if(d){p===$&&C.c()
p.d=t
p.c=s
p.a=u
p.b=r}else{p===$&&C.c()
p.lW(s,r,t,u)}},
OU(){return this.avx(!1)},
bJT(d,e){var w,v,u,t,s,r,q,p=this,o=p.e
o===$&&C.c()
w=o.cJ_(d,e)
if(w==null)return
o=p.d
o===$&&C.c()
v=o.d
v===$&&C.c()
u=v[o.e]
if(p.z){t=D.k.D(w.a,-u.gfq(0)/2+10,u.gfq(0)/2-10)
s=D.k.D(w.c,10,u.gkz(0)-10)
p.e.aIx(new A.E(t,48,s))}else{o=u.c==="outside"
if(o&&p.k4&&p.ok!=null){o=p.ok
o.toString
o.r=new C.y(D.k.D(w.a,-u.gfq(0)/2+12,u.gfq(0)/2-12),D.k.D(w.c,-290,u.gkz(0)-12))}else{v=p.e
r=w.a
q=w.c
if(o)v.ze(Math.max(60,v.c*0.55),new A.E(r,30,q))
else{o=D.k.D(r,-u.gfq(0)/2,u.gfq(0)/2)
q=D.k.D(q,0,u.gkz(0))
v.ze(Math.max(40,p.e.c*0.6),new A.E(o,36,q))}}}A.lL(560,50,0.25,"tri")},
jg(){var w,v,u,t,s=this
s.axF()
w=s.d
w===$&&C.c()
v=w.d
v===$&&C.c()
w=v[w.e]
v=s.r
u=s.Q
t=s.gbfD()
s.f=A.heJ(w,s.z,v,t,s.fr,u)},
OV(d,e){var w=this,v=w.ch
if(v!=null)v.a8(0)
w.m(new A.e1O(w,d,e))
w.ch=C.cM(D.ed,new A.e1P(w))},
k9(d){return this.OV(d,!0)},
QQ(d){this.m(new A.e1Q(this,d))
A.lL(660,50,0.25,"tri")},
avy(d,e){var w,v=this,u=v.d
u===$&&C.c()
if(d!==u.e){u=u.d
u===$&&C.c()
u=d>=u.length}else u=!0
if(u)return
if(v.k4&&d!==11)v.azz()
if(!e&&v.cx!=null)v.a1q()
v.m(new A.e1d(v,d))
u=v.d
w=u.d
w===$&&C.c()
u=w[u.e]
if(u.c==="outside")v.ok=A.h8h(u,0,24)
v.OU()
A.lL(520,60,0.25,"tri")},
DJ(d){return this.avy(d,!1)},
aUZ(d){var w,v,u,t=this
if(d===700){w=t.d
w===$&&C.c()
v=w.d
v===$&&C.c()
return v[w.e].gaFp()}if(d===701){w=t.d
w===$&&C.c()
v=w.d
v===$&&C.c()
w=v[w.e]
return w.id.length!==0||w.gjz()}if(d===702){w=t.d
w===$&&C.c()
v=w.d
v===$&&C.c()
return v[w.e].gTj()}if(d===703){w=t.d
w===$&&C.c()
v=w.d
v===$&&C.c()
return v[w.e].ga4H()}if(d>=800&&d<820){u=d-800
w=t.d
w===$&&C.c()
v=w.d
v===$&&C.c()
w=v[w.e].dy
return u<w.length&&w[u].gBe()}if(d===720){w=t.d
w===$&&C.c()
v=w.d
v===$&&C.c()
return v[w.e].gaFp()}if(d===721){w=t.d
w===$&&C.c()
v=w.d
v===$&&C.c()
w=v[w.e]
return w.id.length!==0||w.gjz()}if(d>=722&&d<728){u=d-720-2
w=t.d
w===$&&C.c()
v=w.d
v===$&&C.c()
w=v[w.e].dy
return u<w.length&&w[u].gBe()}w=t.d
w===$&&C.c()
v=w.d
v===$&&C.c()
return v[w.e].gjz()},
b5O(){var w,v,u=this,t=u.d
t===$&&C.c()
w=t.d
w===$&&C.c()
v=w[t.e].dx==="fan"
u.m(new A.e1Y(u))
t=u.d
w=t.d
w===$&&C.c()
if(w[t.e].db)t=v?"The fan spins.":"The light is on."
else t=v?"The fan stops.":"The light is off."
u.k9(t)
t=u.d
w=t.d
w===$&&C.c()
A.lL(w[t.e].db?900:500,60,0.25,"tri")},
c36(d){var w,v,u,t,s,r,q,p,o,n,m,l=this
if(d===0)return
if(d>=900&&d<920){l.clU(d-900)
return}if(d>=100&&d<200){w=l.d
w===$&&C.c()
v=w.d
v===$&&C.c()
u=v[w.e].KV(d-100)
w=l.d
v=w.d
v===$&&C.c()
t=!1
if(v[w.e].c==="outside")if(l.r!=="furniture")if(u!=null){w=u.b
w=w==="hospital"||w==="shop"}else w=t
else w=t
else w=t
if(w){l.zB(u.b)
return}if(l.r!=="furniture")return
l.m(new A.e1n(l,d))
w=l.d
v=w.d
v===$&&C.c()
s=v[w.e].KV(l.Q)
if(s!=null)l.k9(B.pY.h(0,s.b).a+": move it with the arrows.")
return}if(d===300||d===301||d===302){if(l.r!=="walls")return
l.m(new A.e1o(l,d))
l.k9("Wall picked. Choose a paint colour.")
return}if(d>=600&&d<620){r=d-600
w=l.d
w===$&&C.c()
v=w.d
v===$&&C.c()
if(r>=v[w.e].w.length)return
if(l.r==="doors"){l.m(new A.e1p(l,r))
w=l.d
v=w.d
v===$&&C.c()
A.lL(v[w.e].at.t(0,r)?700:450,70,0.25,"tri")
return}l.bJN(r)
return}w=d===700
v=!w
q=!0
if(v)if(d!==701){if(d!==702)if(d!==703)if(!(d>=800&&d<820))t=d>=720&&d<728
else t=q
else t=q
else t=q
q=t}if(l.w&&q){p=l.aUZ(d)
A.lL(p?1400:500,160,0.25,"tri")
w=p?"The tester glows and beeps: LIVE, 120 volts. Never touch a live wire. Switch the breaker off first.":"The tester stays dark: no power here. It still needs wiring."
l.OV(w,!p)
return}if(!v||d===701){if(l.aUZ(d))l.axg(w?0:1)
else l.aRn()
return}if(d>=800&&d<820){r=d-800
w=l.d
w===$&&C.c()
v=w.d
v===$&&C.c()
w=v[w.e].dy
if(r>=w.length)return
o=w[r]
if(!o.gBe())l.aiy(r)
else if(o.a==="switch")l.b5O()
else l.axg(2+r)
return}if(d===702||d===703){w=l.d
w===$&&C.c()
v=w.d
v===$&&C.c()
if(v[w.e].gTj()){w=l.d
v=w.d
v===$&&C.c()
w=!v[w.e].ga4H()}else w=!0
if(w)l.aRn()
else l.b5O()
return}w=d===730
if(w||d===731){v=l.d
if(w){v===$&&C.c()
w=v.d
w===$&&C.c()
t=v.e
n=w[t].fr}else{v===$&&C.c()
w=v.d
w===$&&C.c()
t=v.e
n=w[t].fx}if(n==null)return
v===$&&C.c()
if(!w[t].fy){l.m(new A.e1q(l))
w=l.d
v=w.d
v===$&&C.c()
l.k9("The TV is on and playing "+E.k_[v[w.e].go].a+".")}else{m=A.bzu(n)
w=l.c
w.toString
H.fKi(w,0,m.a,!0,D.v2,m.b)}return}if(d>=720&&d<728){w=l.d
w===$&&C.c()
v=w.d
v===$&&C.c()
t=d-720
n=v[w.e].cy.h(0,t)
if(n==null)return
m=A.bzu(n)
if(m.d>0||m.e){w=l.c
w.toString
H.fKi(w,0,m.a,!0,D.v2,m.b)}else l.axg(t)
return}if(d===710||d===711||d===712||d===713){w=l.d
w===$&&C.c()
v=w.d
v===$&&C.c()
if(!v[w.e].gl3())if(l.d.a.length!==0)l.DK()
else l.ZZ()
else{w=l.f
w===$&&C.c()
r=w.b.h(0,d)
if(r!=null)l.k9(r.a+": "+r.b)}}},
bJN(d){var w,v,u,t=this.d
t===$&&C.c()
w=t.d
w===$&&C.c()
v=w[t.e].w[d].c
u=v<w.length?w[v].b:"the next room"
t=this.c
t.toString
return C.bV(E.ma,null,new A.e1c(this,u,d,v),t,!0,!0,!1,D.kX,!1,!1,x.H)},
zB(d){return this.bE2(d)},
bE2(d){var w=0,v=C.j(x.H),u,t=this,s
var $async$zB=C.e(function(e,f){if(e===1)return C.f(f,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=3
return C.b(C.bV(D.K,null,new A.e0P(d),s,!0,!0,!0,null,!1,!1,x.H),$async$zB)
case 3:if(t.c==null){w=1
break}t.m(new A.e0Q(t))
case 1:return C.h(u,v)}})
return C.i($async$zB,v)},
clU(d){var w,v,u=this.ga2G()
if(u!=null){w=u.c
w===$&&C.c()
w=d>=w.length}else w=!0
if(w)return C.f7(null,x.H)
w=u.c
w===$&&C.c()
v=w[d]
w=this.c
w.toString
return C.bV(E.ma,null,new A.e1M(this,v,u),w,!0,!0,!0,D.kX,!1,!1,x.H)},
axg(d){var w=this.c
w.toString
return C.bV(E.ma,null,new A.e1w(this,d),w,!0,!0,!1,D.kX,!1,!1,x.H)},
cyb(){var w=this.c
w.toString
return C.bV(E.ma,null,new A.e2k(this),w,!0,!0,!0,D.kX,!1,!1,x.H)},
cxD(){var w=this.c
w.toString
return C.bV(E.ma,null,new A.e27(this),w,!0,!0,!0,D.kX,!1,!1,x.H)},
b4w(d,e){var w,v,u,t=this,s=t.dx
if(s!=null)s.a8(0)
s=t.d
s===$&&C.c()
s=s.gqq()
w=s.length
v=0
for(;v<w;++v){u=s[v]
if(u.fr==null)u.fr="tv100"
if(u.c==="hall")if(u.fx==null)u.fx="tv100"
u.fy=!0}t.z=!1
s=x.fG
w=t.d
if(e){s=new A.aTU(!0,w,d,C.a([],s))
s.aXh()}else{s=new A.aTU(!1,w,d,C.a([],s))
s.aXh()}t.cx=s
t.cy=t.CW.gu2()/1000
t.x=!0
t.r="look"
t.w=!1
s=D.d.gL(t.cx.d)
t.go.a9(0)
t.id=!1
t.m(new A.e1T(t,s.a))
t.OU()
t.dx=C.dA(D.ja,new A.e1U(t))
t.m(new A.e1V())},
cts(d){return this.b4w(d,!1)},
bJO(d,e){var w,v=d.w[e],u=v.a
A:{if("left"===u){w=new A.E(-d.gfq(0)/2,40,v.b+d.gkz(0)/2-40)
break A}if("right"===u){w=new A.E(d.gfq(0)/2,40,v.b+d.gkz(0)/2-40)
break A}w=new A.E(v.b,40,0)
break A}return w},
cxE(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=i.cx
if(h==null||i.c==null)return
w=i.CW.gu2()/1000-i.cy
v=h.e
v===$&&C.c()
if(w>=v){i.a1q()
i.k9("The tour is over. Press Tour to walk the house again.")
return}if(i.id)return
u=h.b8K(w)
v=i.d
v===$&&C.c()
t=v.e
if(u.a!==t){i.ahX(u)
return}v=v.d
v===$&&C.c()
s=v[t]
v=u.at
if(v>=0&&v<s.w.length){t=s.ax
r=t.h(0,v)
if(r==null)r=0
q=u.e
if(!q&&u.Q<0){p=r<1.25
if(p)t.n(0,v,1.25)}else{p=q&&r>0
if(p)t.n(0,v,Math.max(0,r-0.3))}}else p=!1
v=u.Q
t=v>=0
if(t&&v<s.w.length){o=1.25*D.dV.aw(0,D.k.D(u.as,0,1))
q=s.ax
n=q.h(0,v)
if((n==null?0:n)!==o){q.n(0,v,o)
p=!0}}q=u.z
if(D.a.a0(q,"ad")&&i.go.K(0,q)){s.go=D.o.G(s.go+1,8)
A.lL(1000,50,0.25,"tri")
p=!0}if(p)i.m(i.gDL())
m=Math.max(s.gfq(0)*0.95,s.gkz(0)*1.15)+20
t=t&&v<s.w.length
q=u.b
if(t){l=i.bJO(s,v)
k=D.dB.aw(0,D.k.D(u.as,0,1))
j=s.w[v].a
v=i.e
v===$&&C.c()
t=j==="back"?14:0
if(j==="left")n=0.55*k
else n=j==="right"?-0.55*k:-0.03
v.lW(m+(70-m)*k,0.2-0.07*k,new A.E(l.a*0.9+q*0.1,36,l.c+t),n)}else{v=i.e
v===$&&C.c()
v.lW(m,0.24,new A.E(q*0.7,30,u.c*0.6+8),-0.05-q/(s.gfq(0)/2)*0.2)}if(u.y!==i.dy)i.m(new A.e28(i,u))},
ahX(d){return this.cxC(d)},
cxC(d){var w=0,v=C.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j
var $async$ahX=C.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:l={}
r.id=!0
l.a=null
t=4
p=$.aU.ak$.x.h(0,r.k1)
p=p==null?null:p.gb7()
q=x.cU.a(p)
p=q
p=p==null?null:p.lT(0.6).cM(0,D.kg)
j=l
w=7
return C.b(x.fa.b(p)?p:C.dP(p,x.eT),$async$ahX)
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
r.avy(d.a,!0)
p=r.d
n=p.d
n===$&&C.c()
m=n[p.e]
p=d.at
if(p>=0&&p<m.w.length)m.ax.n(0,p,1.25)
r.m(new A.e1Z(l,r))
l=r.e
l===$&&C.c()
l.d=new A.E(d.b,36,d.c+4)
l.c=70
l.a=-0.03
l.b=0.15
r.id=!1
case 1:return C.h(u,v)
case 2:return C.f(s.at(-1),v)}})
return C.i($async$ahX,v)},
a1q(){var w,v,u,t=this,s=t.dx
if(s!=null)s.a8(0)
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
t.m(new A.e1X(t))
t.OU()},
cgH(){var w,v,u,t=this,s=t.cx
if(s!=null)return s.b8K(t.CW.gu2()/1000-t.cy)
w=t.ok
if(w!=null){v=t.d
v===$&&C.c()
u=v.d
u===$&&C.c()
v=u[v.e].c==="outside"}else v=!1
if(v){v=t.d
v===$&&C.c()
u=v.d
u===$&&C.c()
return new A.VS(u[v.e].a,w.b,w.c,w.d,w.e,!1,!1,!1,!1,"","",-1,0,-1,w.f)}return null},
cto(){var w,v=this,u=v.d
u===$&&C.c()
w=u.d
w===$&&C.c()
u=w[u.e]
if(u.c!=="outside")return
w=v.ok
u=w==null?v.ok=A.h8h(u,0,24):w
u.w=A.fX0(u.a)
v.k4=!0
v.p4=Date.now()
u=v.p1
if(u!=null)u.a8(0)
v.p1=C.dA(D.Xj,new A.e1R(v))
v.m(new A.e1S())
v.k9("Hold the arrows to walk. Double tap a spot to go there. Walk up to the front door to go inside.")},
azz(){var w,v=this
v.k4=!1
v.p3=v.p2=0
w=v.p1
if(w!=null)w.a8(0)
v.p1=null
w=v.ok
if(w!=null)w.e=!1
v.m(new A.e1W())},
cAc(){var w,v,u,t,s,r,q=this,p=q.ok,o=!0
if(p!=null)if(q.c!=null){o=q.d
o===$&&C.c()
w=o.d
w===$&&C.c()
o=w[o.e].c!=="outside"}if(o)return
v=Date.now()
u=D.k.D((v-q.p4)/1000,0,0.1)
q.p4=v
p.w=A.fX0(p.a)
o=q.e
o===$&&C.c()
t=Math.sin(o.a)
s=Math.cos(q.e.a)
o=q.p3
w=q.p2
if(w!==0||o!==0){p.r=null
r=p.aJq(0,t*o+s*w,-s*o+t*w,u)}else r=p.cBC(0,u)
if(!r)p.e=!1
if(r){q.e.aIx(new A.E(p.b,30,p.c))
if(Math.abs(p.b)<24){o=p.c
o=o>-2&&o<14}else o=!1
if(o)if(!(Math.abs(p.d)>2.2)){o=p.r
o=o!=null&&o.b<4}else o=!0
else o=!1
if(o){q.azz()
q.DJ(10)
q.k9("You are inside the living room. Use Go outside to come back out.")}}},
cce(){var w,v,u=null
if(this.k4){w=this.d
w===$&&C.c()
v=w.d
v===$&&C.c()
w=v[w.e].c!=="outside"}else w=!0
if(w)return u
w=new A.e1j(this)
v=x.p
return C.v(C.a([w.$3(D.tG,0,1),C.A(C.a([w.$3(D.oA,-1,0),B.eLi,w.$3(D.iz,1,0)],v),D.m,u,D.e,D.Q,0,u,u),w.$3(D.qV,0,-1)],v),D.m,u,D.e,D.Q,0,D.p)},
aRn(){var w=this.d
w===$&&C.c()
if(w.a.length!==0)this.DK()
else this.a_7()},
DK(){var w=0,v=C.j(x.H),u,t=this,s,r,q,p
var $async$DK=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:p=t.d
p===$&&C.c()
s=p.d
s===$&&C.c()
r=s[p.e]
if(r.gyB()){t.k9("This lesson is done. Try everything: it all works.")
w=1
break}p=r.id
w=p==="ptrap"||p==="faucet"?3:5
break
case 3:if(r.k2==null)r.k2=A.fQp()
p=t.c
p.toString
w=6
return C.b(C.a6(p,!1).c8(C.e8(new A.e1f(r),!1,null,x.H)),$async$DK)
case 6:w=4
break
case 5:if(r.k1==null)r.k1=new A.XF(C.T(x.S,x.N))
p=t.c
p.toString
w=7
return C.b(C.a6(p,!1).c8(C.e8(new A.e1g(r),!1,null,x.H)),$async$DK)
case 7:case 4:if(t.c==null){w=1
break}t.m(t.gDL())
if(r.gyB()){q=r.id
A:{if("switch"===q){p="Done! Tap the switch on the wall: the light comes on."
break A}if("fan"===q){p="Done! Tap the wall switch and the fan spins."
break A}if("outlet"===q||"gfci"===q){p="Done! Tap the outlet and plug something in."
break A}p="Done! The sink works."
break A}t.k9(p)}case 1:return C.h(u,v)}})
return C.i($async$DK,v)},
aiy(d){return this.cAz(d)},
cAz(d){var w=0,v=C.j(x.H),u,t=this,s,r,q
var $async$aiy=C.e(function(e,f){if(e===1)return C.f(f,v)
for(;;)switch(w){case 0:q=t.d
q===$&&C.c()
s=q.d
s===$&&C.c()
r=s[q.e].dy[d]
q=t.c
q.toString
w=3
return C.b(C.a6(q,!1).c8(C.e8(new A.e2l(r),!1,null,x.H)),$async$aiy)
case 3:if(t.c==null){w=1
break}t.m(t.gDL())
if(r.gBe())t.k9("Wired! "+(r.a==="switch"?"Tap it to turn the light on and off.":"Tap it to plug something in."))
case 1:return C.h(u,v)}})
return C.i($async$aiy,v)},
a_7(){var w=0,v=C.j(x.H),u,t=this,s,r,q,p
var $async$a_7=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:p=t.d
p===$&&C.c()
s=p.d
s===$&&C.c()
r=s[p.e]
if(r.c==="outside"){w=1
break}s=r.CW
if(s==null){q=A.fQO(A.i5I(r),r.b,!1,p.b*37+r.a)
q.aDw()
if(!r.ay)q.cDp()
r.CW=q
p=q}else p=s
p.b=t.d.c
p=t.c
p.toString
w=3
return C.b(C.a6(p,!1).c8(C.e8(new A.e1i(r),!1,null,x.H)),$async$a_7)
case 3:if(t.c==null){w=1
break}t.m(t.gDL())
if(r.gjz())t.k9(r.b+": the wiring is finished. The light has power.")
case 1:return C.h(u,v)}})
return C.i($async$a_7,v)},
ZZ(){var w=0,v=C.j(x.H),u,t=this,s,r,q,p
var $async$ZZ=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:p=t.d
p===$&&C.c()
s=p.d
s===$&&C.c()
r=s[p.e]
s=r.c
if(!(s==="bathroom"||s==="kitchen")){t.OV("This room has no plumbing. Bathrooms and the kitchen do.",!1)
w=1
break}q=r.cx
if(q==null){s=s==="kitchen"?"kitchen":"bathroom"
s=r.cx=A.fQo(!1,p.b*41+r.a,s)
p=s}else p=q
if(!r.ch&&!p.gaj2())r.cx.cDo()
r.cx.b=t.d.c
p=t.c
p.toString
w=3
return C.b(C.a6(p,!1).c8(C.e8(new A.e1h(r),!1,null,x.H)),$async$ZZ)
case 3:if(t.c==null){w=1
break}t.m(t.gDL())
if(r.gl3())t.k9(r.b+": the plumbing is finished and nothing leaks.")
case 1:return C.h(u,v)}})
return C.i($async$ZZ,v)},
bxL(){var w=this.c
w.toString
return C.bV(E.ma,null,new A.e0i(this),w,!0,!0,!1,D.kX,!1,!1,x.H)},
bxp(d){var w,v,u,t,s,r,q,p,o=this,n=o.d
n===$&&C.c()
w=n.d
w===$&&C.c()
v=w[n.e]
n=v.c
if(n==="outside"||n==="hall"){o.OV("Add devices in a room, not in the hall or the garden.",!1)
return}n=v.dy
if(n.length>=4){o.OV("This room already has four added devices.",!1)
return}w=C.a([-v.gfq(0)/4,v.gfq(0)/4],x.n)
for(u=v.w,t=D.d.gae(u),s=new C.fk(t,new A.e0c());s.C();)w.push(t.gS(0).b)
for(u=D.d.gae(u),t=new C.fk(u,new A.e0d());t.C();)w.push(u.gS(0).b+24)
for(u=n.length,r=0;r<n.length;n.length===u||(0,C.L)(n),++r)w.push(n[r].b)
p=-v.gfq(0)/2+14
for(;;){if(!(p<=v.gfq(0)/2-14)){q=null
break}if(D.d.da(w,new A.e0e(p))){q=p
break}p+=6}if(q==null){o.OV("There is no free place left on the back wall.",!1)
return}o.m(new A.e0f(o,v,d,q))
o.k9("Added. It is red because it is not wired: tap it to wire it.")},
acK(d,e){var w,v,u=this,t=u.d
t===$&&C.c()
w=t.d
w===$&&C.c()
v=w[t.e].KV(u.Q)
if(v==null)return
u.m(new A.e1e(u,v,D.d.t(B.awV,v.b),d,e))},
c3a(){var w,v,u=this,t=u.d
t===$&&C.c()
w=t.d
w===$&&C.c()
v=w[t.e].KV(u.Q)
if(v==null)return
u.m(new A.e29(u,v))},
cjP(){var w,v,u=this,t=u.d
t===$&&C.c()
w=t.d
w===$&&C.c()
v=w[t.e].KV(u.Q)
if(v==null)return
u.m(new A.e1D(u,v))
u.k9(B.pY.h(0,v.b).a+": "+B.cKf[v.f]+".")},
c38(d){var w,v,u=this,t=u.d
t===$&&C.c()
w=t.d
w===$&&C.c()
v=w[t.e].KV(u.Q)
if(v==null)return
u.m(new A.e1E(u,v))},
bxs(d){var w,v=this,u=v.d
u===$&&C.c()
w=u.d
w===$&&C.c()
v.m(new A.e0g(v,w[u.e].K(0,d)))
v.k9(B.pY.h(0,d).a+" added. Move it with the arrows.")},
DI(d,e,f,g,h){var w=null,v=e?g.j(0.25):D.c.j(0.07),u=C.m(14),t=e?g:D.b2
t=C.I(t,D.q,e?2:1)
v=C.a([C.p(w,C.d(d,w,w,w,w,w,w,C.l(w,w,e?g:D.c,w,w,w,w,w,w,w,w,12.5,w,w,D.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),D.f,w,w,new C.o(v,w,t,u,w,w,D.n),w,w,w,w,A3.XE,w,w,w)],x.p)
if(h)v.push(C.ao(w,C.p(w,w,D.f,w,w,new C.o(D.ay,w,C.I(B.Ej,D.q,2),w,w,w,D.a6),w,11,w,w,w,w,w,11),w,w,w,-2,-3,w))
return new C.C(D.fx,C.aE(w,new C.an(D.W,w,D.aa,D.f,v,w),D.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,!1,D.a8),w)},
lA(d,e,f,g){return this.DI(d,e,f,g,!1)},
Ik(d,e,f){return this.DI(d,e,f,D.aH,!1)},
azO(d,e,f,g){var w=null,v=g==null,u=v?34:w,t=v?w:D.l9,s=C.m(10),r=e?D.c:D.b2
r=C.I(r,D.q,e?3:1)
if(v)v=w
else v=C.av(C.d(g,w,w,w,w,w,w,C.l(w,w,d.j6()>0.5?D.w:D.c,w,w,w,w,w,w,w,w,12,w,w,D.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w,w,w)
return new C.C(E.tt,C.aE(w,C.p(w,v,D.f,w,w,new C.o(d,w,r,s,w,w,D.n),w,34,w,w,t,w,w,u),D.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,!1,D.a8),w)},
cuB(d,e,f){return this.azO(d,e,f,null)},
GZ(d,e){var w=null,v=D.c.j(0.1),u=C.m(10),t=C.I(D.b2,D.q,1)
return new C.C(D.fx,C.aE(w,C.p(w,C.W(d,D.c,w,w,w,20),D.f,w,w,new C.o(v,w,t,u,w,w,D.n),w,36,w,w,w,w,w,40),D.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,e,w,w,w,w,w,w,!1,D.a8),w)},
bFN(){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null
if(k.cx!=null){w=k.dy
return C.A(C.a([C.D(C.d("\ud83c\udfac "+(w.length===0?"Walking in":w),j,1,D.a2,j,j,j,B.f_8,j,j,j),1),k.lA("\u23f9 Stop the tour",!0,k.gctL(),D.ci)],x.p),D.m,j,D.e,D.j,0,j,j)}switch(k.r){case"furniture":w=k.d
w===$&&C.c()
v=w.d
v===$&&C.c()
u=v[w.e].KV(k.Q)
w=x.p
v=C.a([],w)
if(u!=null)v.push(new C.a7(j,40,C.cB(C.a([k.GZ(D.oA,new A.e0W(k)),k.GZ(D.iz,new A.e0X(k)),k.GZ(D.tG,new A.e0Y(k)),k.GZ(D.qV,new A.e0Z(k)),k.GZ(F.all,k.gc39()),k.GZ(D.n8,k.gcjO()),k.GZ(D.e4,k.gc37(k))],w),j,j,j,j,D.aO,!1),j))
else v.push(B.aUI)
w=C.a([],w)
for(t=B.pY.gdK(B.pY),t=t.gae(t);t.C();){s=t.gS(t)
r=D.d.t(B.cQu,s.a)
q=k.d
p=q.d
p===$&&C.c()
if(r===(p[q.e].c==="outside")){r=s.b
w.push(k.lA(r.b+" "+r.a,!1,new A.e1_(k,s),D.b1))}}v.push(new C.a7(j,40,C.cB(w,j,j,j,j,D.aO,!1),j))
return C.v(v,D.m,j,D.e,D.Q,0,D.p)
case"walls":w=k.as
v=w<0
w=v?"All walls":"Wall "+(w+1)+": tap Look to reset"
v=C.a([k.Ik(w,v,new A.e10(k))],x.p)
for(o=0;o<8;++o)v.push(k.azO(B.avC[o],!1,new A.e11(k,o),B.ddg[o]))
return new C.a7(j,40,C.cB(v,j,j,j,j,D.aO,!1),j)
case"floor":w=C.a([],x.p)
for(o=0;o<7;++o){v=B.avp[o]
t=k.d
t===$&&C.c()
s=t.d
s===$&&C.c()
w.push(k.azO(v.b,s[t.e].Q===o,new A.e12(k,o),v.a))}return new C.a7(j,40,C.cB(w,j,j,j,j,D.aO,!1),j)
case"ceiling":w=k.d
w===$&&C.c()
v=w.d
v===$&&C.c()
w=v[w.e].dx==="fan"?"\ud83c\udf00 Fan (tap for light)":"\ud83d\udca1 Light (tap for fan)"
w=C.a([k.lA(w,!1,new A.e13(k),D.b8)],x.p)
for(o=0;o<4;++o){v=B.aug[o]
t=k.d
s=t.d
s===$&&C.c()
w.push(k.cuB(v,s[t.e].as===o,new A.e14(k,o)))}return new C.a7(j,40,C.cB(w,j,j,j,j,D.aO,!1),j)
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
s=l.c
if(n.K(0,s)){r=k.d.d
r===$&&C.c()
s=r[s]
r=s.gjz()&&s.gl3()
w.push(k.DI("\ud83d\udeaa "+s.b,!1,new A.e15(k,l),D.b1,!r))}}return new C.a7(j,40,C.cB(w,j,j,j,j,D.aO,!1),j)}},
B(d){var w=this,v=null,u=C.a([C.bZ(0,new C.et(w.bBK(d),w.k1),0,0,0)],x.p)
if(w.k2!=null)u.push(C.bZ(0,C.e1(C.mz(new A.e2n(w),v,D.dB,D.i9,new C.cx(w.k3,x.ac),new A.e2o(w),new C.bo(1,0,x.e7),x.i),!0,v),0,0,0))
return new C.an(D.W,v,D.aa,D.r,u,v)},
bE1(){var w,v=this,u=v.k4,t=u?"\u23f9 Stop walking":"\ud83d\udeb6 Walk the city"
u=v.lA(t,u,u?v.gb4H():v.gb4t(),D.b7)
t=v.lA("\ud83c\udfd7 Build",!1,v.gaLb(),D.b7)
w=v.ga2G()
w=w==null?null:w.d.length
if(w==null)w=0
return C.a([u,t,v.DI("\ud83d\udcde Calls",!1,new A.e0J(v),D.bU,w>0),v.lA("\ud83c\udfe5 Hospital",!1,new A.e0K(v),D.ci),v.lA("\ud83d\uded2 Shop",!1,new A.e0L(v),D.ct),v.lA("\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc67 People",!1,new A.e0M(v),D.cs),v.lA("\ud83c\udfe0 Go inside",!1,new A.e0N(v),D.b7),v.lA("\ud83d\uddfa Map",v.y,new A.e0O(v),D.by)],x.p)},
bBK(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.d
h===$&&C.c()
w=h.d
w===$&&C.c()
v=w[h.e]
h=C.aI(d,i,x.w).w
w=j.d
if(w.a.length!==0)w=v.gyB()?"Done \u2713":"To do"
else w=""+w.gcIS()+"/"+j.d.gqq().length+" done"
u=j.d
t=u.d
t===$&&C.c()
t=t[u.e]
s=j.f
s===$&&C.c()
r=j.e
r===$&&C.c()
q=j.at
p=j.ax
o=j.ay
u=j.y&&u.a.length===0?104:10
n=j.cce()
m=x.p
l=C.a([],m)
if(j.y&&j.d.a.length===0)l.push(new A.bgU(j.d,j.gc33(),Math.min(138,h.a.a*0.36),i))
h=A.X1(n,r,new A.e0p(j),o,q,i,i,new A.e0q(),p,u,j.gbJS(),new A.e0r(j),j.gc35(),s,t.c==="outside",l,i)
u=j.d
t=u.d
t===$&&C.c()
if(t[u.e].c==="outside")u=j.bE1()
else{u=j.x?"\ud83d\udd2d See the whole room":"\ud83c\udfe0 Be inside"
u=C.a([j.lA(u,!1,new A.e0A(j),D.b1)],m)
if(j.d.a.length===0){t=j.cx!=null
s=t?"\u23f9 Stop tour":"\ud83c\udfac Tour"
u.push(j.lA(s,t,new A.e0B(j),D.bU))}t=j.z
s=t?"\ud83d\udeb6 Stop looking round":"\ud83d\udd04 Look all round (360)"
u.push(j.lA(s,t,new A.e0C(j),D.ct))
u.push(j.lA("\ud83d\udcfa TV",!1,j.gcya(),D.cs))
t=j.d
if(t.a.length===0){s=t.d
s===$&&C.c()
t=s[t.e].c!=="outside"?"\ud83c\udf33 Go outside":"\ud83c\udfe0 Go inside"
u.push(j.lA(t,!1,new A.e0D(j),D.b7))}t=j.d
s=t.d
s===$&&C.c()
if(s[t.e].c==="outside"){t=j.k4
s=t?"\u23f9 Stop walking":"\ud83d\udeb6 Walk about"
u.push(j.lA(s,t,t?j.gb4H():j.gb4t(),D.b7))}if(j.d.a.length===0)u.push(j.lA("\u2795 Add",!1,j.gaLb(),D.b7))
if(j.d.a.length===0){t=j.ga2G()
t=t==null?i:t.d.length
if(t==null)t=0
u.push(j.DI("\ud83c\udfd8 Community",!1,new A.e0E(j),D.bU,t>0))}u.push(j.lA("\ud83d\udd26 Tester",j.w,new A.e0F(j),D.ct))
if(j.d.a.length!==0)u.push(j.DI("\ud83d\udd27 Do the lesson",!1,j.gc34(),D.co,!v.gyB()))
else{t=j.DI("\u26a1 Wiring",!1,j.gcbW(),D.co,!v.gjz())
s=v.c
s=(s==="bathroom"||s==="kitchen")&&!v.gl3()
D.d.v(u,C.a([t,j.DI("\ud83d\udeb0 Plumbing",!1,j.gcbl(),D.cs,s),j.lA("\ud83d\uddfa Map",j.y,new A.e0G(j),D.by)],m))}}u=C.cB(u,i,i,i,i,D.aO,!1)
t=j.Ik("\ud83d\udc41 Look",j.r==="look",new A.e0H(j))
s=j.Ik("\ud83d\udecb Furniture",j.r==="furniture",new A.e0s(j))
r=j.Ik("\ud83e\uddf1 Walls",j.r==="walls",new A.e0t(j))
q=j.Ik("\ud83d\udfeb Floor",j.r==="floor",new A.e0u(j))
p=j.Ik("\u2b1c Ceiling",j.r==="ceiling",new A.e0v(j))
o=j.Ik("\ud83d\udeaa Doors",j.r==="doors",new A.e0w(j))
n=j.lA("\ud83d\udcd8 Learn",!1,new A.e0x(d),D.by)
l=j.d.c
k=l?"\ud83d\udd25 Practice":"\ud83c\udf93 Learn mode"
return new A.AZ(v.b,D.aH,h,C.v(C.a([new C.a7(i,40,u,i),D.at,new C.a7(i,40,C.cB(C.a([t,s,r,q,p,o,n,j.lA(k,l,new A.e0y(j),D.ci)],m),i,i,i,i,D.aO,!1),i),D.at,j.bFN()],m),D.F,i,D.e,D.Q,0,D.p),new A.e0z(j,d),w,i)},
chX(d){return C.bV(E.ma,null,new A.e1C(this),d,!0,!0,!0,D.kX,!1,!1,x.H)}}
A.bgU.prototype={
B(d){var w=null,v=D.k.D((this.e-10)/126,0.5,1),u=D.w.j(0.6),t=C.m(12),s=C.I(D.b2,D.q,1)
return C.p(w,new C.a7(126*v,84*v,C.aE(w,C.f3(D.A,C.b3(w,w,w,new A.bgi(this.c,w),B.eK6),D.f,D.wz),D.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new A.dmp(this,v),w,w,w,w,!1,D.a8),w),D.f,w,w,new C.o(u,w,s,t,w,w,D.n),w,w,w,w,D.lJ,w,w,w)}}
A.bgi.prototype={
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
if(t.gjz()&&t.gl3())m=D.bo
else m=!t.gjz()?D.ay:D.d6
l=C.bz(o,D.hA)
$.X()
k=new C.as(D.X,D.V,D.a_,D.a0,D.Z)
k.r=m.j(t.gjz()&&t.gl3()?0.35:0.5).gp(0)
j=k.H()
v.drawRRect(C.eq(l),j)
j.delete()
l=C.bz(o,D.hA)
k=new C.as(D.X,D.V,D.a_,D.a0,D.Z)
k.b=D.ae
k.c=n?2.2:0.8
k.r=(n?D.c:D.c_).gp(0)
j=k.H()
v.drawRRect(C.eq(l),j)
j.delete()
i=t.c
A:{if("bedroom"===i){l="\ud83d\udecf"
break A}if("bathroom"===i){l="\ud83d\udebf"
break A}if("kitchen"===i){l="\ud83c\udf73"
break A}if("living"===i){l="\ud83d\udecb"
break A}if("outside"===i){l="\ud83c\udf33"
break A}l=""
break A}h=new C.kp(new C.ep(l,g,g,D.cO,g,g,g,g,g,g,B.eZl),D.a4,D.cc,new C.jo(1),g,g,g,g,D.ca,g)
h.eI()
l=h.b
k=l.c
l=l.a.c
h.a5(d,new C.u(s+(q-s)/2-k/2,r+(p-r)/2-l.gbd(l)/2))}},
ar(d){return!0}}
A.bPI.prototype={}
A.Fj.prototype={}
A.MM.prototype={
U(){return new A.bhR()}}
A.bhR.prototype={
xn(d){var w=this.c
w.toString
return C.a6(w,!1).c8(C.e8(new A.dKu(d),!1,null,x.H))},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null
$.aqF="tech"
w=C.aH(k,k,k,k,M.nc,k,k,k,new A.dKx(d),k,k,k,k,k,k)
v=D.aH.j(0.16)
u=C.m(13)
t=x.p
u=C.A(C.a([w,C.p(k,B.b3t,D.f,k,k,new C.o(v,k,C.I(D.aH.j(0.6),D.q,1),u,k,k,D.n),k,40,k,k,k,k,k,40),D.av,B.bvj],t),D.m,k,D.e,D.j,0,k,k)
v=C.A(C.a([C.D(l.aXa("Learn mode",!l.d,D.b7,new A.dKy(l)),1),D.ab,C.D(l.aXa("Practice mode",l.d,D.ci,new A.dKz(l)),1)],t),D.m,k,D.e,D.j,0,k,k)
w=C.m(26)
s=C.I(D.aH,D.q,1.8)
r=x.V
q=C.a([new C.ac(0,D.G,D.aH.j(0.28),D.dk,26)],r)
q=C.aE(k,C.p(k,C.v(C.a([C.p(k,B.b3T,D.f,k,k,new C.o(D.aH.j(0.2),k,C.I(D.aH,D.q,2),k,C.a([new C.ac(0,D.G,D.aH.j(0.5),D.J,22)],r),k,D.a6),k,78,k,k,k,k,k,78),D.ac,B.fgR,D.at,B.fnk,D.aA,C.p(k,B.fgN,D.f,k,k,new C.o(D.aH,k,k,C.m(20),k,k,D.n),k,k,k,k,I.ahi,k,k,k)],t),D.m,k,D.e,D.j,0,D.p),D.f,k,k,new C.o(k,k,s,w,q,B.bSC,D.n),k,k,k,k,D.ve,k,k,k),D.y,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,new A.dKC(l),k,k,k,k,k,k,!1,D.a8)
w=C.m(22)
s=C.I(D.bU,D.q,1.5)
r=C.a([new C.ac(0,D.G,D.bU.j(0.22),D.cw,20)],r)
r=C.aE(k,C.p(k,C.v(B.d1r,D.m,k,D.e,D.j,0,D.p),D.f,k,k,new C.o(k,k,s,w,r,B.bTh,D.n),k,k,k,k,N.LI,k,k,k),D.y,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,new A.dKD(l),k,k,k,k,k,k,!1,D.a8)
w=l.aX9("JOBS")
s=l.aX8(C.a([l.DM("\ud83d\udd0c","Wire a room","Go to a room that needs wiring",D.bo,new A.dKE(l)),l.DM("\ud83d\udebd","Plumb a room","Go to a bathroom or kitchen",D.aT,new A.dKF(l)),l.DM("\ud83d\udd27","Fix a house","Walk the house and fix every sign",D.aH,new A.dKG(l)),l.DM("\ud83e\uddf1","Build a room","Frame, drywall, then wire",D.b7,new A.dKH(l)),l.DM("\u26a1","Wiring bench","Just the wiring, one room",D.co,new A.dKI(l)),l.DM("\ud83d\udcde","Service calls","A customer rings with problems",D.j4,new A.dKJ(l))],t))
p=l.aX9("LESSONS")
o=C.a([],t)
for(n=0;n<7;++n){m=B.cQX[n]
o.push(l.DM(m.b,m.c,m.d,m.e,new A.dKA(l,m)))}o.push(l.DM("\ud83d\udcd8","Learn the trades","Short cards for beginners",D.by,new A.dKB(l)))
return C.c8(k,D.bX,C.bn(!0,C.cB(C.a([u,D.ac,v,D.ac,q,D.ac,r,w,s,p,l.aX8(o)],t),k,B.agB,k,k,D.ah,!1),!0,!1,D.af,!0,!0),k,!1,!1,k,k)},
aX9(d){var w=null
return new C.C(B.btm,C.A(C.a([C.D(C.p(w,w,D.f,D.aH.j(0.35),w,w,w,1,w,w,w,w,w,w),1),new C.C(D.fT,C.d(d,w,w,w,w,w,w,B.eW3,w,w,w),w),C.D(C.p(w,w,D.f,D.aH.j(0.35),w,w,w,1,w,w,w,w,w,w),1)],x.p),D.m,w,D.e,D.j,0,w,w),w)},
aXa(d,e,f,g){var w=null,v=e?f.j(0.2):D.c.j(0.06),u=C.m(18),t=e?f:D.b2
t=C.I(t,D.q,e?2:1)
return C.aE(w,C.p(w,C.av(C.d(d,w,w,w,w,w,w,C.l(w,w,e?f:D.ad,w,w,w,w,w,w,w,w,13,w,w,D.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w,w,w),D.f,w,w,new C.o(v,w,t,u,w,w,D.n),w,w,w,w,D.eZ,w,w,w),D.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,g,w,w,w,w,w,w,!1,D.a8)},
aX8(d){var w,v,u,t,s=null,r=x.p,q=C.a([],r)
for(w=0;v=d.length,w<v;w+=2){u=d[w]
t=w+1
v=t<v?d[t]:D.bH
q.push(new C.C(D.cH,new C.DD(new C.cm(D.aO,D.e,D.j,D.aj,s,D.p,s,0,C.a([new C.bD(1,D.bi,u,s),D.ab,new C.bD(1,D.bi,v,s)],r),s),s),s))}return C.v(q,D.m,s,D.e,D.j,0,D.p)},
DM(d,e,f,g,h){var w=null,v=C.a([g.j(0.2),B.Ej],x.O),u=C.m(22),t=C.I(g.j(0.55),D.q,1.4),s=x.V,r=C.a([new C.ac(0,D.G,g.j(0.18),D.cw,16)],s),q=g.j(0.22),p=C.I(g.j(0.7),D.q,1.5)
s=C.a([new C.ac(0,D.G,g.j(0.35),D.J,14)],s)
return C.aE(w,C.p(w,C.v(C.a([C.p(w,C.av(C.d(d,w,w,w,w,w,w,D.a77,w,w,w),w,w,w),D.f,w,w,new C.o(q,w,p,w,s,w,D.a6),w,56,w,w,w,w,w,56),D.S,C.d(e,w,w,w,w,w,w,D.jn,D.L,w,w),D.cX,C.d(f,w,2,D.a2,w,w,w,B.f65,D.L,w,w)],x.p),D.m,w,D.bb,D.j,0,D.p),D.f,w,w,new C.o(w,w,t,u,r,new C.a8(D.b0,D.b5,D.x,v,w,w),D.n),w,w,w,w,B.boE,w,w,w),D.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,h,w,w,w,w,w,w,!1,D.a8)}}
A.b54.prototype={
B(d){var w,v,u,t,s,r=this,q=null,p=x.p,o=C.a([C.bZ(0,new A.ats(r.d,r.e,r.w,r.f,r.y,r.x,E.Wa,r.c,r.CW,q),0,0,0)],p),n=r.at,m=n!=null
if(m)o.push(C.ao(q,C.v(n,D.F,q,D.e,D.j,0,D.p),q,q,8,q,8,q))
n=C.a([],p)
w=r.ax
if(w!=null)D.d.v(n,w)
n.push(r.avz(D.hx,"Zoom in",new A.cpA(r)))
n.push(r.avz(D.y0,"Zoom out",new A.cpB(r)))
w=r.r
n.push(r.avz(B.bB7,"Back to the whole view",w))
o.push(C.ao(q,C.v(n,D.m,q,D.e,D.j,0,D.p),q,q,q,8,8,q))
n=r.cx
if(n!=null)o.push(C.ao(14,C.av(n,q,q,q),q,q,0,0,q,q))
n=r.z
if(n!=null){v=r.ch
if(v==null)m=m?60:10
else m=v
v=r.Q
u=(v?D.e9:D.er).j(0.95)
t=C.m(14)
s=C.I(v?D.b7:D.ci,D.q,1)
o.push(C.ao(q,C.p(q,C.d(n,q,q,q,q,q,q,B.eWD,q,q,q),D.f,q,q,new C.o(u,q,s,t,q,q,D.n),q,q,q,q,D.nQ,q,q,q),q,q,10,62,m,q))}n=r.as
if(n!=null){m=C.m(16)
v=C.I(D.b2,D.q,1)
n=C.a([C.d(n.a,q,q,q,q,q,q,B.f6C,q,q,q),D.cX,C.d(n.b,q,q,q,q,q,q,E.T4,q,q,q)],p)
u=r.ay
if(u!=null)D.d.v(n,C.a([D.an,u],p))
o.push(C.ao(8,C.p(q,C.A(C.a([C.D(C.v(n,D.F,q,D.e,D.j,0,D.p),1),C.aH(q,q,q,q,D.Ga,q,q,q,w,q,q,q,q,q,D.c8)],p),D.F,q,D.e,D.j,0,q,q),D.f,q,q,new C.o(E.ab1,q,v,m,q,q,D.n),q,q,q,q,E.agk,q,q,q),q,q,10,10,q,q))}return new C.an(D.W,q,D.aa,D.r,o,q)},
avz(d,e,f){var w=null,v=D.w.j(0.55),u=C.I(D.b2,D.q,1)
return new C.C(D.eO,C.hp(C.aE(w,C.p(w,C.W(d,D.c,w,w,w,20),D.f,w,w,new C.o(v,w,u,w,w,w,D.a6),w,38,w,w,w,w,w,38),D.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,!1,D.a8),w,e,w,w),w)}}
A.AZ.prototype={
B(d){var w=this,v=null,u=C.aH(v,v,v,v,M.nc,v,v,v,new A.bRN(d),v,v,v,v,v,v),t=w.d,s=C.D(C.d(w.c,v,v,v,v,v,v,C.l(v,v,t,v,v,v,v,v,v,v,v,16,v,v,D.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),1),r=t.j(0.15),q=C.m(16),p=C.I(t.j(0.6),D.q,1),o=x.p
q=C.A(C.a([u,s,C.aE(v,C.p(v,C.A(C.a([C.W(A7.ajN,t,v,v,v,17),D.eb,C.d(w.w,v,v,v,v,v,v,C.l(v,v,t,v,v,v,v,v,v,v,v,12,v,v,D.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],o),D.m,v,D.e,D.Q,0,v,v),D.f,v,v,new C.o(r,v,p,q,v,v,D.n),v,v,v,v,D.tv,v,v,v),D.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,w.r,v,v,v,v,v,v,!1,D.a8)],o),D.m,v,D.e,D.j,0,v,v)
p=C.aI(d,v,x.w).w
return C.c8(v,D.bX,C.bn(!0,C.v(C.a([new C.C(B.btz,q,v),C.p(v,C.cd(w.f,D.r,v,D.y,v,v,v,v,D.ah),D.f,v,new C.aY(0,1/0,0,p.a.b*0.34),B.b_3,v,v,v,v,E.XC,v,v,1/0),C.D(C.bw(A6.a9i,w.e,D.aq),1)],o),D.m,v,D.e,D.j,0,D.p),!0,!1,D.af,!0,!0),v,!1,!1,v,v)}}
A.GX.prototype={
U(){return new A.ayj()},
gdc(d){return this.d}}
A.ayj.prototype={
gFH(){var w,v=this,u=v.d
if(u===$){w=A.Ai(v.a.c)
v.d!==$&&C.bM()
v.d=w
u=w}return u},
geS(d){var w,v=this.e
if(v===$){w=this.a.d
v=this.e=w==null?new A.XF(C.T(x.S,x.N)):w}return v},
gkT(){var w=this.f
return w===$?this.f=new A.AE(0.42,0.26,12,B.fCv,$.aw()):w},
goF(){var w=this,v=w.r
return v===$?w.r=A.fUB(w.gFH(),w.geS(0),!0):v},
q(){var w=this.as
if(w!=null)w.a8(0)
this.a2()},
kv(d,e){var w=this,v=w.as
if(v!=null)v.a8(0)
w.m(new A.d2f(w,d,e))
w.as=C.cM(D.l8,new A.d2g(w))},
oZ(d){return this.kv(d,!1)},
xo(){var w=this.geS(0)
w.d=w.d&&w.a&&w.c>=2
this.r=A.fUB(this.gFH(),w,!0)},
nX(){var w=this,v=w.gkT(),u=w.geS(0).c===0,t=u?2.8:0.4
u=u?12:10
v.lW(u,0.26,new A.E(0,0.1,t),0.42)
w.m(new A.d28(w))},
c3b(){var w,v,u,t="ground",s=this.geS(0),r=!s.a||s.c>0,q=new A.d27(this)
switch(this.gFH().a){case"switch":w=q.$1(t)
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
In(d){var w,v,u,t,s,r,q,p=this
if(d===0){p.nX()
return}w=p.gFH()
v=w.f
u=C.U(v).k("a2<1>")
t=C.B(new C.a2(v,new A.d29(d),u),u.k("J.E"))
v=w.a
s=A.hjw(v,d)
if(s!=null){u=p.geS(0)
u=u.c===0&&u.b.iR(0,s)}else u=!1
if(u){w=p.geS(0)
if(w.a){A.lL(180,220,0.25,"square")
p.oZ("STOP! The power is still on. Turn the breaker OFF before you touch any wire.")
return}w=w.b
w.bn(w,new A.d2a(s))
p.m(p.gc3e())
p.kv("Wire taken off the screw.",!0)
return}if(t.length!==0&&p.w.length!==0&&p.geS(0).c===0){u=p.geS(0)
r=A.hjr(w,u,p.w,D.d.gL(t),!1)
if(r!=null){++p.Q
A.lL(180,220,0.25,"square")
p.oZ(r)}else{A.y8()
p.m(new A.d2b(p,d))
if(A.bCc(w,u))p.kv("Every wire is on the right screw. Now push the device into the box.",!0)
else p.kv(D.d.gL(t).b+": fastened correctly.",!0)
p.gkT().ze(7,A.bzT(v,d,u))
p.w=""}return}q=p.goF().b.h(0,d)
if(q!=null){p.m(new A.d2c(p,d))
w=p.gkT()
v=q.c
w.ze(q.d,v)}},
cgV(){var w,v=this
v.m(new A.d2d(v))
w=v.geS(0)
if(w.a){A.lL(120,200,0.25,"saw")
if(w.c===0)v.oZ("The breaker is ON. The wires are LIVE at 120 volts. Turn it OFF before you touch anything.")}else{A.lL(600,100,0.25,"tri")
v.kv("Breaker OFF. It is safe to work on the wires. (In real life, always test them with a tester first.)",!0)}},
cvR(){var w,v,u=this
u.m(new A.d2h(u))
A.y8()
w=u.gFH().a
A:{if("switch"===w){v="Power on. Flip the switch and the light turns on: both black wires are on brass screws, so the switch opens and closes the hot wire. The lesson is complete! Mistakes: "+u.Q+"."
break A}if("gfci"===w){v="Power on. Press RESET (it clicks), then TEST: it must shut the outlet off. Wired on LINE, it protects the whole circuit. The lesson is complete! Mistakes: "+u.Q+"."
break A}v="The tester glows: this outlet has 120 volts and is wired correctly. The lesson is complete! Mistakes: "+u.Q+"."
break A}u.kv(v,!0)},
B(a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null,d=f.c3b(),a0=D.d.bc(d,new A.d2p())
if(a0<0)w="All done"
else{f.gFH()
w="Step "+(a0+1)+"/7"}v=f.gFH()
u=f.geS(0)
t=A.bCc(v,u)&&!u.a
s=f.goF()
r=f.gkT()
q=f.x
p=f.y
o=f.z
n=q!==0?f.goF().b.h(0,f.x):e
m=(u.a?D.er:D.e9).j(0.95)
l=C.m(18)
k=u.a
j=C.I(k?D.ci:D.b7,D.q,1.5)
i=C.W(k?D.h8:B.akE,D.c,e,e,e,18)
h=x.p
l=A.X1(e,r,e,o,q,n,e,e,p,e,e,f.gIl(),f.gIm(),s,!1,C.a([C.aE(e,C.p(e,C.A(C.a([i,D.eb,C.d(k?"Breaker ON (live)":"Breaker OFF (safe)",e,e,e,e,e,e,D.nn,e,e,e)],h),D.m,e,D.e,D.Q,0,e,e),D.f,e,e,new C.o(m,e,j,l,e,e,D.n),e,e,e,e,D.h6,e,e,e),D.y,!1,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,f.gcgU(),e,e,e,e,e,e,!1,D.a8)],h),C.a([A.Ql("Hints",D.aH,D.r0,u.e,new A.d2q(f)),D.an,A.Ql("Labels",D.aT,S.N4,u.f,new A.d2r(f)),D.an,A.Ql("Brass side",B.bho,E.akK,!1,new A.d2t(f)),D.an,A.Ql("Silver side",B.Ky,D.Nb,!1,new A.d2u(f)),D.O],h))
j=C.a([],h)
s=u.c
if(s===0){s=C.a([],h)
for(r=D.d.gae(v.e),q=new C.fk(r,new A.d2v(f));q.C();){p=r.gS(0)
o=p.c
n=new C.aW(14,14)
m=f.w
k=p.a
m=m===k
i=m?D.b1:D.b2
g=new C.aA(i,m?3:1,D.q,-1)
i=C.a([],h)
if(u.b.iR(0,k))i.push(new C.C(D.fx,C.W(D.ee,p.d,e,e,e,18),e))
m=p.b
k=p.d
i.push(new C.x(m,e,new C.G(!0,k,e,e,e,e,13,D.u,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e),e,e,e,e,e,e,e,e,e))
s.push(new C.C(D.jc,C.aE(e,C.p(e,new C.cm(D.aO,D.e,D.j,D.m,e,D.p,e,0,i,e),D.f,e,e,new C.o(o,e,new C.bP(g,g,g,g),new C.bq(n,n,n,n),e,e,D.n),e,e,e,e,D.hJ,e,e,e),D.y,!1,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,new A.d2w(f,p),e,e,e,e,e,e,!1,D.a8),e))}s=C.bY(D.bz,s,D.br,6,8)
if(t)u="Push it into the box"
else u=u.a?"Turn the breaker OFF first":"Fasten every wire first"
D.d.v(j,C.a([s,D.O,C.A(C.a([A.y7(u,B.alj,t?new A.d2x(f):e,D.aH)],h),D.m,e,D.e,D.j,0,e,e)],h))}else if(s===1)D.d.v(j,C.a([C.A(C.a([A.y7("Pull it back out",D.r3,new A.d2y(f),D.ad),D.ab,A.y7("Put the cover plate on",R.vo,new A.d2z(f),D.aH)],h),D.m,e,D.e,D.j,0,e,e)],h))
else{s=A.y7("Start over",D.lf,new A.d2A(f),D.ad)
u=u.d
r=u?"Tested \u2713":"Power on and test"
D.d.v(j,C.a([C.A(C.a([s,D.ab,A.y7(r,D.h8,u?e:f.gcvQ(),D.aH)],h),D.m,e,D.e,D.j,0,e,e)],h))}return new A.AZ(v.b,D.aH,l,C.v(j,D.m,e,D.e,D.Q,0,D.p),new A.d2s(f,a1,d),w,e)}}
A.a8r.prototype={
U(){return new A.aEe()},
gdc(d){return this.c}}
A.aEe.prototype={
geS(d){var w,v=this.d
if(v===$){w=this.a.c
v=this.d=w==null?A.fQp():w}return v},
gkT(){var w=this.e
return w===$?this.e=new A.AE(-0.3,0.18,40,B.aRt,$.aw()):w},
goF(){var w=this.f
return w===$?this.f=A.bzz(this.geS(0)):w},
q(){var w=this.z
if(w!=null)w.a8(0)
this.a2()},
kv(d,e){var w=this,v=w.z
if(v!=null)v.a8(0)
w.m(new A.eM8(w,d,e))
w.z=C.cM(D.l8,new A.eM9(w))},
oZ(d){return this.kv(d,!1)},
nX(){this.gkT().lW(40,0.18,B.aRt,-0.3)
this.m(new A.eM1(this))},
In(d){var w,v,u,t,s,r,q=this,p="square"
if(d===0){q.nX()
return}w=C.F([41,"tail",42,"trap",43,"arm"],x.S,x.N).h(0,d)
if(w!=null&&!q.geS(0).a.t(0,w)){v=q.r
if(v.length===0){if(w==="tail")v="tailpiece"
else v=w==="trap"?"P-trap":"trap arm"
q.oZ("Pick the "+v+" from the buttons below first, then tap its glowing outline.")
return}if(v!==w){A.lL(180,220,0.25,p)
u=q.r
A:{if("tail"===u){v="The tailpiece is the straight pipe that hangs from the sink. It goes at the very top, under the drain."
break A}if("trap"===u){v="The P-trap is the U-shaped bend. It goes right under the tailpiece, in the middle."
break A}v="The trap arm is the long straight pipe that goes into the wall. It goes last, on the right."
break A}q.oZ(v)
return}if(w==="trap"&&!q.geS(0).a.t(0,"tail")){A.lL(180,220,0.25,p)
q.oZ("Start from the top: put the tailpiece on first, then the trap under it.")
return}if(w==="arm"&&!q.geS(0).a.t(0,"trap")){A.lL(180,220,0.25,p)
q.oZ("The trap arm joins the trap. Put the P-trap on first.")
return}q.m(new A.eM2(q,w))
A.y8()
q.kv("Piece in place. "+(q.geS(0).a.a===3?"Now tighten the two slip nuts: tap each nut.":"Pick the next piece."),!0)
return}v=d===44
if(v||d===45){t=v?"n1":"n2"
if(q.geS(0).b.h(0,t)!==!0){q.m(new A.eM3(q,t))
A.y8()
q.kv("Slip nut hand tightened. In real life give it a quarter turn more with pliers, but never over-tighten plastic.",!0)
return}}s=q.goF().b.h(0,d)
if(s!=null){q.m(new A.eM4(q,d))
v=q.gkT()
r=s.c
v.ze(s.d,r)}},
c3g(){var w=this,v=x.cc,u=C.B(new C.a2(C.a(["n1","n2"],x.s),new A.eM5(w),v),v.k("J.E"))
w.m(new A.eM6(w,u))
if(u.length!==0){A.lL(180,220,0.25,"square")
w.oZ("It is dripping from a loose slip nut! Tap the nut and tighten it, then run the water again.")}else{A.y8()
w.kv("No leaks. The water flows through the trap and into the wall. The little pool in the U-bend stays there and blocks sewer gas. The lesson is complete!",!0)}},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.geS(0),i=j.a,h=i.t(0,"tail"),g=i.t(0,"trap"),f=i.t(0,"arm"),e=j.b
e=e.h(0,"n1")===!0&&e.h(0,"n2")===!0
w=C.a([h,g,f,e,j.c&&j.d.length===0],x.u)
v=D.d.bc(w,new A.eMd())
u=i.a===3
j=v<0?"All done":"Step "+(v+1)+"/5"
h=l.goF()
g=l.gkT()
f=l.w
e=l.x
t=l.y
s=f!==0?l.goF().b.h(0,l.w):k
h=A.X1(k,g,new A.eMe(l),t,f,s,k,k,e,k,k,l.gIl(),l.gIm(),h,!1,k,k)
e=x.p
s=C.a([],e)
for(r=0;r<3;++r){q=B.dbs[r]
g=i.t(0,q)?k:new A.eMf(l,q)
f=i.t(0,q)?D.dp:D.fl
t=new C.aW(14,14)
p=l.r===q
o=p?D.b1:D.b2
n=new C.aA(o,p?3:1,D.q,-1)
o=C.a([],e)
if(i.t(0,q))o.push(B.e3Y)
p=B.dja.h(0,q)
p.toString
m=i.t(0,q)?D.c_:D.c
o.push(new C.x(p,k,new C.G(!0,m,k,k,k,k,13,D.u,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k),k,k,k,k,k,k,k,k,k))
s.push(new C.C(D.jc,C.aE(k,C.p(k,new C.cm(D.aO,D.e,D.j,D.m,k,D.p,k,0,o,k),D.f,k,k,new C.o(f,k,new C.bP(n,n,n,n),new C.bq(t,t,t,t),k,k,D.n),k,k,k,k,D.hJ,k,k,k),D.y,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,g,k,k,k,k,k,k,!1,D.a8),k))}i=C.bY(D.bz,s,D.br,6,8)
g=A.y7("Start over",D.lf,new A.eMg(l),D.ad)
f=u?"Run the water":"Build the drain first"
return new A.AZ("Sink drain (P-trap)",D.cs,h,C.v(C.a([i,D.O,C.A(C.a([g,D.ab,A.y7(f,D.pT,u?l.gc3f():k,D.cs)],e),D.m,k,D.e,D.j,0,k,k)],e),D.m,k,D.e,D.Q,0,D.p),new A.eMh(d,w),j,k)}}
A.a3R.prototype={
U(){return new A.ayy()},
gdc(d){return this.c}}
A.ayy.prototype={
geS(d){var w,v=this.d
if(v===$){w=this.a.c
v=this.d=w==null?A.fQp():w}return v},
gkT(){var w=this.e
return w===$?this.e=new A.AE(-0.25,0.2,36,B.aR9,$.aw()):w},
goF(){var w=this.f
return w===$?this.f=A.aNt(this.geS(0)):w},
q(){var w=this.z
if(w!=null)w.a8(0)
this.a2()},
kv(d,e){var w=this,v=w.z
if(v!=null)v.a8(0)
w.m(new A.d5a(w,d,e))
w.z=C.cM(D.l8,new A.d5b(w))},
oZ(d){return this.kv(d,!1)},
nX(){this.gkT().lW(36,0.2,B.aR9,-0.25)
this.m(new A.d52(this))},
In(d){var w,v,u,t,s,r,q=this
if(d===0){q.nX()
return}w=x.fZ
v=C.B(new C.a2(B.a2n,new A.d55(d),w),w.k("J.E"))
if(v.length!==0&&q.r.length!==0){w=q.geS(0)
u=A.i4V(w,q.r,D.d.gL(v))
if(u!=null){A.lL(180,220,0.25,"square")
q.oZ(u)}else{A.y8()
q.m(new A.d56(q,d))
q.gkT().ze(12,A.afw(d))
q.kv(A.fod(w)?"All four ends are connected. Now open the valves.":D.d.gL(v).b+": connected.",!0)}return}w=d===68
if(w||d===69){t=w?"hot":"cold"
if(q.geS(0).e.iR(0,t)){q.m(new A.d57(q,t))
q.kv("Hose taken off.",!0)
return}}s=q.goF().b.h(0,d)
if(s!=null){q.m(new A.d58(q,d))
w=q.gkT()
r=s.c
w.ze(s.d,r)}},
c3d(d){var w,v=this
v.m(new A.d53(v))
w=v.geS(0)
if(!w.f){v.kv("Valves closed.",!0)
return}if(A.fod(w)){A.y8()
v.kv("Hot and cold flow through the hoses and out of the faucet. No leaks. The lesson is complete!",!0)}else{A.lL(180,220,0.25,"square")
v.oZ("Water is spraying out of a valve that has no hose! Close the valves and finish connecting the hoses first.")}},
B(d){var w,v,u,t,s,r,q,p,o,n=this,m=null,l=n.geS(0),k=l.r||l.e.a!==0,j=l.e,i=j.h(0,61)==="hot"&&j.h(0,63)==="hot",h=j.h(0,62)==="cold"&&j.h(0,64)==="cold",g=C.a([k,i,h,l.f&&A.fod(l)],x.u),f=D.d.bc(g,new A.d5f())
k=f<0?"All done":"Step "+(f+1)+"/4"
i=n.goF()
h=n.gkT()
w=n.w
v=n.x
u=n.y
t=w!==0?n.goF().b.h(0,n.w):m
s=x.p
i=A.X1(m,h,new A.d5g(n),u,w,t,m,m,v,m,m,n.gIl(),n.gIm(),i,!1,m,C.a([A.Ql("Hints",D.aH,D.r0,l.r,new A.d5h(n)),D.O],s))
v=C.a([],s)
for(r=0;r<2;++r){h={}
w=B.daW[r]
h.a=null
q=w.a
h.a=q
u=new C.aW(14,14)
t=n.r===q
p=t?D.b1:D.b2
o=new C.aA(p,t?3:1,D.q,-1)
p=C.a([],s)
t=C.a3(j).k("bc<2>")
if(new C.a2(new C.bc(j,t),new A.d5i(h),t.k("a2<J.E>")).gM(0)===2)p.push(B.e4_)
p.push(new C.x(w.b,m,D.rD,m,m,m,m,m,m,m,m,m))
v.push(new C.C(D.jc,C.aE(m,C.p(m,new C.cm(D.aO,D.e,D.j,D.m,m,D.p,m,0,p,m),D.f,m,m,new C.o(w.c,m,new C.bP(o,o,o,o),new C.bq(u,u,u,u),m,m,D.n),m,m,m,m,D.hJ,m,m,m),D.y,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new A.d5j(h,n),m,m,m,m,m,m,!1,D.a8),m))}j=C.bY(D.bz,v,D.br,6,8)
h=A.y7("Start over",D.lf,new A.d5k(n),D.ad)
l=l.f?"Close the valves":"Open the valves"
return new A.AZ("Faucet supply lines",D.ci,i,C.v(C.a([j,D.O,C.A(C.a([h,D.ab,A.y7(l,D.pT,n.gc3c(n),D.ci)],s),D.m,m,D.e,D.j,0,m,m)],s),D.m,m,D.e,D.Q,0,D.p),new A.d5l(d,g),k,m)}}
A.azq.prototype={
U(){return new A.azr(A.h0w())}}
A.azr.prototype={
gkT(){var w,v=this.e
if(v===$){w=new A.AE(-0.3,0.48,46,B.Tz,$.aw())
w.f=80
this.e=w
v=w}return v},
goF(){var w=this.f
return w===$?this.f=A.afj(this.d):w},
q(){var w=this.z
if(w!=null)w.a8(0)
this.a2()},
kv(d,e){var w=this,v=w.z
if(v!=null)v.a8(0)
w.m(new A.dcf(w,d,e))
w.z=C.cM(D.l8,new A.dcg(w))},
oZ(d){return this.kv(d,!1)},
nX(){this.gkT().lW(46,0.48,B.Tz,-0.3)
this.m(new A.dc9(this))},
In(d){var w,v,u,t=this
if(d===0){t.nX()
return}if(d===72){w=t.d
w=w.d.t(0,72)&&w.a>=5}else w=!1
if(w){t.m(new A.dcb(t,d))
A.y8()
t.kv("You flipped the breaker fully OFF and then ON. The living room light is back on. A breaker trips when a circuit is overloaded: find out why before it trips again.",!0)
t.gkT().ze(22,B.fGd)
return}w=d===87
if(w||d===86){v=t.d
v=v.b&&!v.c&&v.a>=5}else v=!1
if(v){if(t.w==="wrench"&&w){t.m(new A.dcc(t,d))
A.y8()
t.kv("You tightened the slip nut with the wrench. The drip has stopped.",!0)
return}A.lL(180,220,0.25,"square")
t.oZ(w?"Hand tightening is not enough here. Pick the wrench first, then tap the nut.":"The water is dripping from the slip nut on the trap. Pick the wrench, then tap the nut.")}u=t.goF().b.h(0,d)
if(u!=null){t.m(new A.dcd(t,d))
w=t.gkT()
v=u.c
w.ze(u.d,v)}},
cb_(d){var w,v
A:{if("ptrap"===d){w=B.e9Y
break A}if("faucet"===d){w=B.bwK
break A}w=new A.GX(d,null,null)
break A}v=this.c
v.toString
C.a6(v,!1).c8(C.e8(new A.dca(w),!1,null,x.H))},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.d,l=B.d6l[m.a],k=o.r,j=k===0?n:A.hVh(k)
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
p=j==null?n:C.aE(n,C.p(n,B.f7N,D.f,n,n,new C.o(D.aH,n,n,C.m(12),n,n,D.n),n,n,n,n,D.tv,n,n,n),D.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new A.dcj(o,j),n,n,n,n,n,n,!1,D.a8)
k=A.X1(n,u,new A.dck(o),r,t,q,p,new A.dcl(o),s,n,n,o.gIl(),o.gIm(),k,!1,n,n)
s=l.a
p=x.p
q=C.A(C.a([C.D(C.d(""+(m.a+1)+". "+s,n,n,n,n,n,n,B.f0p,n,n,n),1),A.Ql("Wrench",D.aT,D.qW,o.w==="wrench",new A.dcm(o))],p),D.m,n,D.e,D.j,0,n,n)
t=C.d(l.b,n,3,D.a2,n,n,n,B.f1u,n,n,n)
m=C.kU(D.by,6,s,6,0,new A.dcn(o),m.a)
u=v[0]
s=u?"\u2705 Living room power fixed":"\u26a0 Living room has no power"
s=C.D(C.d(s,n,n,n,n,n,n,C.l(n,n,u?D.es:D.f3,n,n,n,n,n,n,n,n,11.5,n,n,D.H,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),1)
u=v[1]
r=u?"\u2705 Sink leak fixed":"\u26a0 Kitchen sink drips"
return new A.AZ("Build and fix a house",D.by,k,C.v(C.a([q,D.bB,t,m,C.A(C.a([s,C.D(C.d(r,n,n,n,n,n,n,C.l(n,n,u?D.es:D.f3,n,n,n,n,n,n,n,n,11.5,n,n,D.H,n,n,!0,n,n,n,n,n,n,n,n),D.dL,n,n),1)],p),D.m,n,D.e,D.j,0,n,n)],p),D.m,n,D.e,D.Q,0,D.p),new A.dco(d,v),"Stage "+(w+1)+"/7",n)}}
A.jy.prototype={}
A.M8.prototype={}
A.a5Y.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m=null,l=x.p,k=C.a([C.A(C.a([C.aH(m,m,m,m,M.nc,m,m,m,new A.c5s(d),m,m,m,m,m,m),B.fhq],l),D.m,m,D.e,D.j,0,m,m)],l)
for(w=0;w<5;++w){v=B.dd_[w]
u=v.c
t=C.a([new C.C(D.ahx,new C.x(v.b+"  "+v.a.toUpperCase(),m,new C.G(!0,u,m,m,m,m,12,D.u,m,1.1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m,m,m,m,m,m,m,m,m),m)],l)
for(s=v.d,r=s.length,q=0;q<r;++q){p=s[q]
o=new C.aW(14,14)
n=new C.aA(u.j(0.35),1,D.q,-1)
t.push(C.p(m,C.v(C.a([new C.x(p.a,m,D.jn,m,m,m,m,m,m,m,m,m),D.cX,new C.x(p.b,m,E.T4,m,m,m,m,m,m,m,m,m)],l),D.F,m,D.e,D.j,0,D.p),D.f,m,m,new C.o(B.Ej,m,new C.bP(n,n,n,n),new C.bq(o,o,o,o),m,m,D.n),m,m,m,D.cH,D.bk,m,m,m))}D.d.v(k,t)}return C.c8(m,D.bX,C.bn(!0,C.cB(k,m,B.agB,m,m,D.ah,!1),!0,!1,D.af,!0,!0),m,!1,!1,m,m)}}
A.cgg.prototype={}
A.Eu.prototype={}
A.nf.prototype={}
A.W8.prototype={}
A.cg6.prototype={
bw6(d,e,f){var w,v=this
if(f!=null)w=D.d.iC(B.av2,new A.cga(f))
else{w=new C.eJ()
w.dB(v.a)
w=B.av2[w.aB(2)]}v.c!==$&&C.aO()
v.c=w
w=new C.eJ()
w.dB(v.a+7)
w=w.h9()
v.d!==$&&C.aO()
v.d=w},
uP(d,e){var w=this.c
w===$&&C.c()
return D.d.iC(w.c,new A.cgb(e))},
Ov(d){++this.w
return new A.eE(!1,d,!1,"")},
c0K(d){var w=d.d
return new C.K(w,new A.cg7(this),C.U(w).k("K<1,n>")).aI(0," and ")},
bfo(d,e){var w,v,u,t,s=this,r=s.uP(0,e),q=s.e
if(q.t(0,e))return s.Ov("The "+r.c.toLowerCase()+" is already there.")
if(d!==r.b)return s.Ov(s.b?"That does not go here.":"That does not go here. This spot is for the "+r.c.toLowerCase()+".")
for(w=r.d,v=w.length,u=0;u<v;++u)if(!q.t(0,w[u])){q=s.b?"Not yet: something has to go in first.":"Not yet. "+r.e+" Put in the "+s.c0K(r)+" first.";++s.w
return new A.eE(!1,q,!1,"")}if(r.f&&s.r)return s.Ov(s.b?"The water is still on!":"Stop! The water is still on. Cutting into a pipe with the water on floods the room. Turn the water off at the main valve first (pick the hand and tap the main valve).")
q.K(0,e)
s.y=!1
s.x.a9(0)
if(r.r>0)t=s.b?"":" It is only loose. Pick the wrench and tap it to tighten the joints."
else t=""
return new A.eE(!0,r.c+" fitted."+t,!1,"")},
bgG(d){var w,v,u,t,s=this,r=s.uP(0,d)
if(!s.e.t(0,d))return s.Ov(s.b?"Nothing to tighten yet.":"There is nothing to tighten yet: the "+r.c.toLowerCase()+" is not fitted.")
w=r.r
if(w===0)return s.Ov(s.b?"That does not need tightening.":"The "+r.c.toLowerCase()+" does not have joints to tighten. It just sits in place.")
v=s.f
u=v.h(0,d)
if(u==null)u=0
if(u>=w)return s.Ov("Already tight. More force would crack it.")
t=u+1
v.n(0,d,t)
s.x.a9(0)
s.y=!1
v=r.c
return new A.eE(!0,t>=w?v+": every joint is tight now.":v+": one joint tightened, one to go.",!1,"")},
bel(d){var w=this.uP(0,d),v=this.f.h(0,d)
if(v==null)v=0
return w.r-v},
aH6(){var w,v,u,t,s,r,q=this
q.r=!q.r
w=q.x
w.a9(0)
if(!q.r)return B.aUn
v=q.c
v===$&&C.c()
u=v.c
t=C.U(u).k("a2<1>")
s=C.B(new C.a2(u,new A.cgc(q),t),t.k("J.E"))
v=v.c
u=C.U(v).k("a2<1>")
r=C.B(new C.a2(v,new A.cgd(q),u),u.k("J.E"))
q.y=!0
if(s.length!==0){w.v(0,new C.K(s,new A.cge(),C.U(s).k("K<1,n>")));++q.w
return new A.eE(!1,"Water is spraying from an open pipe where the "+D.d.gL(s).c.toLowerCase()+" should be! Turn the water off and finish the job.",!0,"")}if(r.length!==0){w.v(0,new C.K(r,new A.cgf(),C.U(r).k("K<1,n>")));++q.w
return new A.eE(!1,"The "+D.d.gL(r).c.toLowerCase()+" is leaking from a loose joint. Turn the water off, tighten it with the wrench, then test again.",!0,"")}if(!q.gaj2())return B.aUd
return B.aU0},
cDo(){var w,v,u,t,s,r,q,p=this
p.r=!0
p.aH6()
w=p.c
w===$&&C.c()
v=w.c
u=v.length
t=0
for(;t<u;++t){s=v[t]
p.bfo(s.b,s.a)}for(w=w.c,v=w.length,t=0;t<v;++t){s=w[t]
for(u=s.r,r=s.a,q=0;q<u;++q)p.bgG(r)}p.aH6()
p.w=0},
gaj2(){var w=this.c
w===$&&C.c()
return D.d.da(w.c,new A.cg8(this))},
gcBI(){var w=this.c
w===$&&C.c()
return D.d.da(w.c,new A.cg9(this))},
gBe(){var w=this
return w.gaj2()&&w.gcBI()&&w.r&&w.y&&w.x.a===0}}
A.V7.prototype={
U(){var w,v=new A.AE(-0.25,0.4,175,B.aS_,$.aw())
v.f=200
w=new C.BI()
$.CE()
w.j1(0)
return new A.aCX(v,w)}}
A.aCX.prototype={
gCj(d){var w=this.d
if(w===$){this.a.toString
w=D.o.G(Date.now(),1e5)
this.d=w}return w},
a_(){var w,v=this
v.a1()
w=v.a.d
if(w==null){w=v.gCj(0)
v.a.toString
w=A.fQo(!1,w,null)}v.e=w
v.r=A.heL(w,v.x,!w.b)},
q(){var w=this.at
if(w!=null)w.a8(0)
this.a2()},
acL(){var w=this.e
w===$&&C.c()
return this.r=A.heL(w,this.x,!w.b)},
aXd(d,e){var w=this,v=w.at
if(v!=null)v.a8(0)
w.m(new A.eg1(w,d,e))
w.at=C.cM(D.jv,new A.eg2(w))},
aXc(){this.f.lW(175,0.4,B.aS_,-0.25)
this.m(new A.efV(this))},
ctB(d){var w,v,u=this.e
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
aws(d){var w=this.e
w===$&&C.c();++w.w
return new A.eE(!1,d,!1,"")},
c3k(d){return this.aXb(d)},
csU(d){var w
A:{if("main"===d){w=9400
break A}w=this.e
w===$&&C.c()
w=w.c
w===$&&C.c()
w=9100+D.d.bc(w.c,new A.eg3(d))
break A}this.aXb(w)},
b4e(){var w,v,u,t,s,r,q,p=this,o=p.x
if(o==="hand")return C.a([B.es9],x.L)
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
q=r.uP(0,s)
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
aXb(d){var w,v,u,t,s,r=this
if(d===0)return
w=r.r
w===$&&C.c()
v=w.b.h(0,d)
if(r.x.length===0){r.m(new A.efN(r,d))
if(v!=null)r.aXd(v.a+": "+v.b,!0)
return}u=r.ctB(d)
w=r.x
if(w==="hand")if(d===9400){w=r.e
w===$&&C.c()
t=w.aH6()}else{w=r.e
w===$&&C.c()
t=r.aws(w.b?"Your hand is only for the main water valve.":"Your hand is for the main water valve. Parts are placed by picking them from the tray.")}else if(w==="wrench")if(u==null){w=r.e
w===$&&C.c()
t=r.aws(w.b?"Nothing to tighten.":"There is nothing to tighten there.")}else{w=r.e
w===$&&C.c()
t=w.bgG(u)}else if(u==null){w=r.e
w===$&&C.c()
t=r.aws(w.b?"Not there.":"That does not go there. Tap one of the glowing spots.")}else{s=r.e
s===$&&C.c()
t=s.bfo(w,u)}w=t.a
if(w)A.y8()
else A.lL(180,220,0.25,"square")
r.m(new A.efO(r,d))
w=w&&!t.c
r.aXd(t.b,w)
w=r.e
w===$&&C.c()
if(w.gBe()&&!r.as){r.as=!0
$.aU.x1$.push(new A.efP(r))}},
c3h(){var w=null,v=this.c
v.toString
C.ca(w,w,!0,w,new A.efU(this),v,w,!0,!0,x.H)},
aW9(){this.m(new A.eg_(this))
this.aXc()},
avA(d,e,f){var w,v=null,u=this.x===d,t=u?D.aH.j(0.25):D.c.j(0.07),s=C.m(14),r=u?D.aH:D.b2
r=C.I(r,D.q,u?2:1)
w=C.W(f,u?D.aH:D.ad,v,v,v,19)
return new C.C(E.tt,C.aE(v,C.p(v,C.A(C.a([w,D.bp,C.d(e,v,v,v,v,v,v,C.l(v,v,u?D.aH:D.c,v,v,v,v,v,v,v,v,12.5,v,v,D.H,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),D.m,v,D.e,D.j,0,v,v),D.f,v,v,new C.o(t,v,r,s,v,v,D.n),v,v,v,v,D.fT,v,v,v),D.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new A.efR(this,u,d),v,v,v,v,v,v,!1,D.a8),v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.e
h===$&&C.c()
h=h.c
h===$&&C.c()
h=h.c
w=new C.a2(h,new A.eg4(j),C.U(h).k("a2<1>")).gM(0)
h=j.e.c
h===$&&C.c()
v=j.r
v===$&&C.c()
u=j.y
t=j.z
s=j.Q
r=u!==0?v.b.h(0,u):i
v=A.X1(i,j.f,new A.eg5(j),s,u,r,i,new A.eg6(),t,i,i,j.gc3i(),j.gc3j(),v,!1,i,i)
t=x.p
r=C.a([],t)
if(j.x.length!==0&&j.b4e().length!==0){u=C.a([],t)
for(s=j.b4e(),q=s.length,p=0;p<s.length;s.length===q||(0,C.L)(s),++p){o={}
n=s[p]
o.a=null
o.a=n.a
m=new C.aW(12,12)
l=new C.aA(D.b1,1,D.q,-1)
u.push(C.aE(i,C.p(i,new C.x("\ud83d\udccd "+n.b,i,D.o9,i,i,i,i,i,i,i,i,i),D.f,i,i,new C.o(D.fh.j(0.35),i,new C.bP(l,l,l,l),new C.bq(m,m,m,m),i,i,D.n),i,i,i,i,B.XF,i,i,i),D.y,!1,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,new A.eg7(o,j),i,i,i,i,i,i,!1,D.a8))}r.push(new C.C(D.eO,C.bY(D.bz,u,D.br,6,6),i))}u=j.e
if(u.b)u="Practice mode: no hints. Build it in the right order."
else if(u.gaj2())u="Everything is fitted. Tighten every joint, then turn the main water on to test."
else{u=j.e.c
u===$&&C.c()
u="Job: "+u.d}r.push(new C.bH(D.a3,i,i,C.d(u,i,2,D.a2,i,i,i,B.aOp,i,i,i),i))
r.push(D.O)
t=C.a([j.avA("hand","Hand",B.ald),j.avA("wrench","Wrench",D.qW)],t)
for(p=0;p<11;++p){k=B.bVs[p]
u=B.dh5.h(0,k)
u.toString
t.push(j.avA(k,u,A1.akC))}r.push(new C.a7(i,52,C.cB(t,i,i,i,i,D.aO,!1),i))
return new A.AZ("Plumbing job: "+h.b,D.aT,v,C.v(r,D.m,i,D.e,D.Q,0,D.p),new A.eg8(j,d),""+w+"/"+h.c.length+" fitted",i)},
bYD(d){return C.bV(E.ma,null,new A.efZ(this),d,!0,!0,!0,D.kX,!1,!1,x.H)}}
A.ys.prototype={}
A.pK.prototype={}
A.WO.prototype={}
A.atV.prototype={}
A.aSg.prototype={}
A.eE.prototype={
gja(){return this.a}}
A.b3A.prototype={
cgk(d,e){var w,v,u,t,s=this,r=null,q="outlet",p="switch",o=new C.eJ()
o.dB(s.a)
w=d==null?o.aB(3):d
v=C.a([0,1,2],x.t)
D.d.ft(v,o)
u=3+o.aB(2)
switch(w){case 0:t=e==null?"Living room":e
s.c!==$&&C.aO()
s.c=t
t=C.a([new A.pK(v[0],q,r),new A.pK(v[1],q,r),new A.pK(5,"light",u),new A.pK(u,p,r)],x.B)
s.d!==$&&C.aO()
s.d=t
break
case 1:t=e==null?"Bedroom":e
s.c!==$&&C.aO()
s.c=t
t=C.a([new A.pK(v[0],q,r),new A.pK(v[1],q,r),new A.pK(6,"fan",u),new A.pK(u,p,r)],x.B)
s.d!==$&&C.aO()
s.d=t
break
default:t=e==null?"Kitchen":e
s.c!==$&&C.aO()
s.c=t
t=C.a([new A.pK(v[0],"gfci",r),new A.pK(v[1],"gfci",r),new A.pK(5,"light",u),new A.pK(u,p,r)],x.B)
s.d!==$&&C.aO()
s.d=t}},
galL(){var w,v=C.aX(x.S),u=this.d
u===$&&C.c()
w=0
for(;w<4;++w)v.K(0,u[w].a)
return v},
cPk(d){var w,v,u=this.d
u===$&&C.c()
w=0
for(;w<4;++w){v=u[w]
if(v.a===d)return v}return null},
fM(d){++this.f
return new A.eE(!1,d,!1,"")},
aDw(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.d
g===$&&C.c()
w=h.x
v=0
for(;v<4;++v){u=g[v].a
t=A.l0(u)
if(t.e==="fan")s="fan"
else s=t.c?"ceiling":"wall"
w.n(0,u,s)}g=C.a([],x.t)
for(r=0;r<$.Go().length;++r)g.push(r)
h.y.v(0,g)
h.z.v(0,h.galL())
for(g=h.Q,w=x.S,v=0;v<3;++v){q=B.o0[v]
u=C.aX(w)
s=C.aX(w)
p=new A.atV(u,s)
p.d=p.e=p.a=!0
for(o=h.aoy(q),n=o.length,m=0;m<o.length;o.length===n||(0,C.L)(o),++m)for(l=o[m]*10,k=0;k<6;++k)s.K(0,l+k)
for(s=h.galL(),o=C.a3(s),n=new C.mW(s,s.r,o.k("mW<1>")),n.c=s.e,o=o.c,s=q+48;n.C();){l=n.d
if(l==null)l=o.a(l)
t=A.l0(l)
if(!t.c){j=t.d.a
j=j>=q&&j<=s}else j=!1
if(j)u.K(0,l)}g.n(0,q,p)}for(g=h.as,v=0;v<2;++v){i=g[v]
i.a=!0
i.b=3
i.d=i.c=!0}},
cDp(){var w,v,u,t,s,r,q,p,o,n,m=this,l=m.d
l===$&&C.c()
w=0
for(;w<4;++w){v=l[w]
m.bdn(v.a,v.b)}for(u=x.S,t=x.N,s=m.at,w=0;w<4;++w){r=l[w].a
q=s.h(0,r)
if(q==null)continue
p=q.a
A:{if("outlet"===p){o=C.F([25,"ground",23,"white",21,"black"],u,t)
break A}if("gfci"===p){o=C.F([25,"ground",24,"white",22,"black"],u,t)
break A}if("switch"===p){o=C.F([25,"ground",21,"blackLine",22,"blackLoad"],u,t)
break A}o=C.F([53,"ground",52,"white",51,"black"],u,t)
break A}for(o=new C.Mc(o,o.r,o.e,C.a3(o).k("Mc<1,2>"));o.C();){n=o.d
m.bbI(r,n.b,n.a)}m.bfH(r)
m.bay(r)}if(!m.ax)m.aH4()
for(w=0;w<4;++w){v=l[w]
u=v.b
if(u==="outlet"||u==="gfci"){u=v.a
m.bfq(u,"lamp")
m.bgY(u)}}for(l=D.d.gae(l),u=new C.fk(l,new A.cl4());u.C();){t=l.gS(0).a
m.aDH(t)
m.aDH(t)}},
aJt(d){var w,v,u=A.l0(d).d.a,t=C.a([],x.t)
for(w=0;v=$.Go(),w<v.length;++w){v=v[w]
if(v>u&&v<64)t.push(w)}return t},
cNe(d,e){var w,v,u=this,t=u.x
if(t.ai(0,d))return u.fM("There is already a box at "+A.l0(d).b+".")
w=A.l0(d)
v=w.c
if(!v&&e!=="wall")return u.fM("That is a ceiling box. On the wall you use a plain wall box (the blue one with ears).")
if(v&&e==="wall")return u.fM("A wall box cannot go in the ceiling. Use a round ceiling box.")
if(w.e==="fan"&&e!=="fan"){if(!u.b)return u.fM('A fan is heavy and it shakes. It needs a box that says "fan rated". A plain ceiling box can let the fan fall.')
t.n(0,d,e);++u.f
return B.aUB}t.n(0,d,e)
t=v?"ceiling joist":"side of the stud"
return new A.eE(!0,w.b+": box fixed to the "+t+".",!1,"")},
cHT(d){var w,v=this
if(d<0||d>=$.Go().length)return B.aUv
w=v.y
if(w.t(0,d))return v.fM("That stud already has a hole.")
if(v.x.a===0)return v.fM("Mount the boxes first. Then you know where the cable has to go and which studs need a hole.")
w.K(0,d)
return B.aUf},
cQm(d){var w,v,u,t,s=this,r=A.l0(d)
if(!s.x.ai(0,d))return s.fM("There is no box at "+r.b+". Mount the box first, then pull the cable to it.")
w=s.z
if(w.t(0,d))return s.fM("The cable is already there.")
v=s.aJt(d)
u=C.U(v).k("a2<1>")
t=C.B(new C.a2(v,new A.clb(s),u),u.k("J.E"))
if(t.length!==0){w=D.o.V($.Go()[D.d.gL(t)])
v=t.length
u=v===1?"it":"the studs"
return s.fM("The cable is stuck: the stud at "+w+" inches has no hole. Drill "+u+" first ("+v+" left on the way).")}w.K(0,d)
return new A.eE(!0,"Cable pulled from the panel to "+r.b+", through the studs and along the ceiling.",!1,"")},
gaGU(){return this.galL().da(0,new A.clc(this))},
aof(d){var w,v,u,t
for(w=this.Q,w=new C.cK(w,C.a3(w).k("cK<1,2>")).gae(0);w.C();){v=w.d
u=v.b
if(u.a){t=v.a
t=d>=t&&d<=t+48}else t=!1
if(t)return u}return null},
cKB(d){var w,v,u=this
if(!u.gaGU())return u.fM("Finish the rough-in first. The cable and the boxes must be in before the drywall hides the studs.")
if(!D.d.t(B.a2p,d))return B.aU3
if(!D.d.t(B.o0,d))return u.fM("The edge of the sheet would land between two studs. The sheet needs a stud under every edge, so there is nothing to screw it to. Start at the left corner (a stud) and move one sheet width (48 inches) at a time.")
w=u.Q
v=w.h(0,d)
if((v==null?null:v.a)===!0)return u.fM("There is already a sheet there.")
v=w.h(0,d)
if(v==null){v=x.S
v=new A.atV(C.aX(v),C.aX(v))}v.a=!0
w.n(0,d,v)
return B.aUe},
aoy(d){var w,v,u,t=C.a([],x.t)
for(w=d+48,v=0;u=$.Go(),v<u.length;++v){u=u[v]
if(u>=d&&u<=w)t.push(v)}return t},
cGP(d){var w,v,u=this,t=A.l0(d)
if(t.c)return u.fM("Ceiling fixtures do not need an opening in the wall.")
if(!u.x.ai(0,d))return u.fM("There is no box at "+t.b+".")
w=u.aof(t.d.a)
if(w==null)return u.fM("There is no sheet over this box yet. Hang the sheet first, then cut the opening.")
v=w.b
if(v.t(0,d))return u.fM("The opening is already cut.")
v.K(0,d)
return B.aUo},
aIJ(d,e,f){var w,v,u,t,s,r=this
if(f)return r.fM("Missed the stud! There is only air behind the sheet here. The screw would pull through the paper. Screw only where a stud is behind the sheet (every 16 inches).")
w=x.dD
v=C.B(new C.a2(B.o0,new A.cld(r,d),w),w.k("J.E"))
if(v.length===0)return r.fM("There is no sheet here yet.")
u=d*10+e
if(D.d.da(v,new A.cle(r,u)))return r.fM("There is already a screw there.")
for(w=v.length,t=r.Q,s=0;s<v.length;v.length===w||(0,C.L)(v),++s)t.h(0,v[s]).c.K(0,u)
return B.aUq},
bkW(d,e){return this.aIJ(d,e,!1)},
bms(d){var w=this.Q.h(0,d)
if(w==null||!w.a)return!1
return D.d.da(this.aoy(d),new A.clg(w))},
gaBj(){return D.d.da(B.o0,new A.cl3(this))},
gaBi(){var w=this.galL()
return new C.a2(w,new A.cl1(),C.a3(w).k("a2<cn.E>")).da(0,new A.cl2(this))},
cSd(d){var w,v=this
if(!v.gaBj())return v.fM("Hang all the sheets first.")
if(!D.d.da(B.o0,v.gaog()))return v.fM("Finish screwing every sheet to the studs first. Tape goes on a solid wall.")
w=v.as[d]
if(w.a)return v.fM("This seam already has tape.")
w.c=w.a=!0
return B.aU7},
cNh(d){var w,v=this,u=v.as[d]
if(!u.a)return v.fM("Tape first. The mud goes over the tape.")
if(!u.c)return v.fM("The last coat is still wet. Let it dry before the next coat.")
w=u.b
if(w>=3)return v.fM("Three coats are enough. Now sand it.");++w
u.b=w
u.c=!1
return new A.eE(!0,"Coat "+w+" of joint compound spread. Let it dry.",!1,"")},
cMc(){var w,v=this.as
if(D.d.da(v,new A.cl9()))return B.aUl
for(w=0;w<2;++w)v[w].c=!0
return B.aUz},
bkJ(d){var w=this,v=w.as[d]
if(v.b<3)return w.fM("Put on all three coats of mud first. Sanding now would just rub off the tape.")
if(!v.c)return w.fM("The mud is still wet. Let it dry first.")
if(v.d)return w.fM("Already sanded.")
v.d=!0
return B.aU4},
cPz(d){var w=this,v=w.Q.h(0,d)
if(v==null||!v.a)return w.fM("There is no sheet there.")
if(!w.gaBi())return w.fM("Cut the openings for the boxes before you paint. Otherwise the paint covers the boxes.")
if(!D.d.da(w.as,new A.cla()))return w.fM("Sand the seams first. Paint shows every bump.")
if(v.e)return w.fM("This sheet is already painted.")
v.e=!0
return B.aU1},
gyk(){var w=this
return w.gaBj()&&D.d.da(B.o0,w.gaog())&&w.gaBi()&&D.d.da(w.as,new A.cl5())&&D.d.da(B.o0,new A.cl6(w))},
MK(){var w,v
for(w=this.at,w=new C.dt(w,w.r,w.e);w.C();){v=w.d.b
v.a=this.ax&&!this.ay}},
bXS(d,e){if(d.c)return e==="light"||e==="fan"?"":"A ceiling box holds a light or a fan, not an outlet or a switch."
return e==="outlet"||e==="gfci"||e==="switch"?"":"A light or a fan hangs from the ceiling. A wall box holds an outlet, a GFCI or a switch."},
bdn(d,e){var w,v,u,t,s,r=this,q=A.l0(d)
if(!r.gyk())return r.fM("Finish the drywall first. Devices go in after the walls are painted.")
w=r.x
if(!w.ai(0,d)||!r.z.t(0,d))return r.fM("There is no box with cable at "+q.b+".")
v=r.at
if(v.ai(0,d))return r.fM("There is already a device there. Pull it out first if you want to move it.")
u=r.bXS(q,e)
if(u.length!==0)return r.fM(u)
t=e==="switch"
if(!(t&&q.e==="low"))s=!t&&!q.c&&q.e==="switch"
else s=!0
if(s){if(!r.b)return r.fM(t?"A switch goes about 48 inches from the floor, where a hand falls naturally. This box is down at outlet height.":"Outlets go low, about 16 inches from the floor. This box is up at switch height.");++r.f
r.cy.push("Wrong height at "+q.b+".")}s=e==="fan"
if(s&&w.h(0,d)!=="fan")if(!r.b)return r.fM("This box is not fan rated. A fan on it can fall. Take the box out and put in a fan-rated one.")
w=new A.XF(C.T(x.S,x.N))
w.r=r.b
w.a=r.ax&&!r.ay
v.n(0,d,new A.aSg(e,w))
if(e==="light")w="Light fixture"
else if(s)w="Ceiling fan"
else if(e==="gfci")w="GFCI outlet"
else w=t?"Switch":"Outlet"
return new A.eE(!0,w+" is held up to "+q.b+". Turn the breaker OFF, then wire it.",!1,"")},
cRo(d){var w=this,v=w.at,u=v.h(0,d)
if(u==null)return B.aUb
if(w.ax&&!w.ay&&!u.b.w){if(w.b)return w.a13()
return w.a1i()}v.W(0,d)
w.CW.W(0,d)
w.cx.W(0,d)
w.ch.W(0,d)
return B.aUt},
a1i(){++this.r;++this.f
return B.aUr},
a13(){var w,v,u=this;++u.r;--u.e
u.ax=!1
u.MK()
w=u.e
if(w<=0){u.w=!0
return B.aUa}v=w===1?"life":"lives"
return new A.eE(!1,"ZAP! You touched a live wire and got a shock. The breaker is now off. "+w+" "+v+" left. Always turn the breaker OFF and test the wires first.",!0,"shock")},
bbI(d,e,f){var w,v,u,t=this,s=t.at.h(0,d)
if(s==null)return B.a8L
t.MK()
w=A.Ai(s.a)
v=D.d.iC(w.f,new A.cl7(f))
u=A.hjr(w,s.b,e,v,!0)
if(u==null){if(!t.b&&!v.c.t(0,e)){++t.f
return new A.eE(!0,v.b+": fastened. Careful: "+C.t(w.r.$2(e,v))+" It will burn or trip the breaker when the power comes on.",!0,"")}return new A.eE(!0,v.b+": wire fastened.",!1,"")}if(D.a.a0(u,"SHOCK"))return t.a13()
if(D.a.a0(u,"STOP"))return t.a1i();++t.f
return new A.eE(!1,u,!1,"")},
cSK(d,e){var w,v=this,u=v.at.h(0,d)
if(u==null)return B.Un
v.MK()
w=u.b
if(w.a&&w.c===0){if(v.b)return v.a13()
return v.a1i()}w=w.b
w.bn(w,new A.clh(e))
return B.aUy},
bfH(d){var w,v,u=this,t=u.at.h(0,d)
if(t==null)return B.a8L
w=A.Ai(t.a)
v=t.b
if(!A.bCc(w,v))return u.fM("Every wire must be fastened first.")
if(u.ax&&!u.ay){if(u.b)return u.a13()
return u.a1i()}v.c=1
return B.aUj},
cQn(d){var w,v=this,u=v.at.h(0,d)
if(u==null)return B.Un
if(v.ax&&!v.ay){if(v.b)return v.a13()
return v.a1i()}w=u.b
w.c=0
w.d=!1
return B.aUp},
bay(d){var w=this.at.h(0,d)
if(w==null||w.b.c!==1)return this.fM("Push the device into the box first.")
w.b.c=2
return B.aUs},
aHv(d){var w=this.at
return A.afv(A.Ai(w.h(0,d).a),w.h(0,d).b)},
aH4(){var w=this
if(w.ay){w.ax=w.ay=!1
w.MK()
return B.aUh}w.ax=!w.ax
w.MK()
if(!w.ax)return B.aU9
return w.c3l()},
c3l(){var w,v,u,t,s,r,q,p,o,n=this,m=C.a([],x.s)
for(w=n.at,v=new C.cK(w,C.a3(w).k("cK<1,2>")).gae(0),u=n.cx,t=!1,s=!1;v.C();){r=v.d
q=r.b.b
if(q.c===0)continue
p=r.a
o=A.afv(A.Ai(w.h(0,p).a),w.h(0,p).b)
q.d=q.c>=2
if(o.d)t=!0
if(o.e){q.w=!0
u.K(0,p)
s=!0}if(o.a!=="ok")m.push(A.l0(p).b+": "+o.b)}if(t){n.ay=!0
n.MK()
w=s?"BANG! Sparks and smoke. ":""
v=D.d.aI(m," ")
u=s?"burn":"trip"
return new A.eE(!1,w+"The breaker tripped. "+v+" Fix it, then flip the breaker OFF and ON again.",!0,u)}if(m.length!==0)return new A.eE(!0,"Power is on. "+D.d.aI(m," "),!0,"")
return B.aUm},
aDH(d){var w,v,u,t,s,r,q=this,p=q.at,o=p.h(0,d)
if(o==null||o.a!=="switch"||o.b.c<2)return B.aUx
w=q.ch
if(w.t(0,d))w.W(0,d)
else w.K(0,d)
v=q.d
v===$&&C.c()
u=C.U(v).k("a2<1>")
t=C.B(new C.a2(v,new A.cl8(d),u),u.k("J.E"))
if(t.length===0)return B.aUi
s=D.d.gL(t)
v=s.a
r=q.alz(v)
if(w.t(0,d)&&r){p=p.h(0,v)
if(p!=null)p.c=!0
return new A.eE(!0,(s.b==="fan"?"The fan spins":"The light turns on")+". The switch works.",!1,"")}if(w.t(0,d)){p=s.b
return new A.eE(!1,(p==="fan"?"The fan":"The light")+" did not come on. Check the breaker and the wires on the switch and on the "+p+".",!1,"")}return B.aUw},
a3d(d){var w,v=this.at.h(0,d)
if(v!=null){w=v.b
w=w.c<2||w.w}else w=!0
if(w)return!1
return this.aHv(d).c},
alz(d){var w=this,v=w.cPk(d),u=v==null,t=u?null:v.c,s=!0
if(!u)if(t!=null)u=!(w.ax&&!w.ay)||!w.a3d(d)||!w.a3d(t)
else u=s
else u=s
if(u)return!1
return w.ch.t(0,t)},
bfq(d,e){var w,v,u=this,t=u.at.h(0,d)
if(t!=null){w=t.a
w=w!=="outlet"&&w!=="gfci"||t.b.c<2}else w=!0
if(w)return u.fM("There is no finished outlet there to plug into.")
w=u.CW
if(w.ai(0,d))return u.fM("Something is already plugged in.")
w.n(0,d,e)
if(t.b.w)return B.aUc
if(u.ax&&!u.ay&&u.a3d(d)){t.c=!0
v=u.aHv(d)
w=v.a
if(w==="reversed"||w==="noGround")return new A.eE(!0,"It runs, but be careful: "+v.b,!0,"")
return new A.eE(!0,A.hD0(e)+" runs. The outlet works.",!1,"")}if(!(u.ax&&!u.ay))return B.aUg
return new A.eE(!1,"Nothing happens. "+u.aHv(d).b,!0,"")},
bgY(d){if(this.CW.W(0,d)==null)return B.Un
return B.aU8},
gaCY(){var w,v,u,t,s,r=this.d
r===$&&C.c()
w=this.at
v=0
for(;v<4;++v){u=r[v]
t=u.a
s=w.h(0,t)
if(s==null||s.a!==u.b||s.b.c<2)return!1
if(A.afv(A.Ai(w.h(0,t).a),w.h(0,t).b).a!=="ok")return!1
t=u.b
if(t==="outlet"||t==="gfci"){if(!s.c)return!1}else if(t!=="switch"&&!s.c)return!1}return!0}}
A.kW.prototype={}
A.Va.prototype={
U(){var w,v=new A.AE(-0.12,0.4,205,B.a7O,$.aw())
v.f=300
w=new C.BI()
$.CE()
w.j1(0)
return new A.aD3(v,w,C.T(x.S,x.i))}}
A.aD3.prototype={
gCj(d){var w=this.e
if(w===$){this.a.toString
w=D.o.G(Date.now(),1e5)
this.e=w}return w},
a_(){var w,v=this
v.a1()
w=v.a.d
if(w==null){w=v.gCj(0)
w=A.fQO(null,null,v.a.f,w)}v.d=w
if(v.a.d!=null&&w.gyk())v.y=2
if(v.a.e){v.d.aDw()
v.y=2}v.r=A.Cr(v.d,new A.vT(v.z,v.Q,!1))
w=v.f
w.x=0
w.y=1.1},
q(){var w=this.cy
if(w!=null)w.a8(0)
this.a2()},
A6(d,e){var w=this,v=w.cy
if(v!=null)v.a8(0)
w.m(new A.eko(w,d,e))
w.cy=C.cM(D.jv,new A.ekp(w))},
avD(d){return this.A6(d,!1)},
kw(d){var w,v,u,t,s,r=this,q=d.a
if(q)A.y8()
else A.lL(180,220,0.25,"square")
w=d.d
if(w==="shock"){C.fK()
r.m(new A.ejD(r))
C.bN(D.n0,new A.ejE(r),x.P)}if(w==="burn"||w==="trip"){w=r.d
w===$&&C.c()
w=w.cx
w=C.ec(w,w.r,C.a3(w).c)
v=r.x
u=r.w
t=w.$ti.c
while(w.C()){s=w.d
if(s==null)s=t.a(s)
v.n(0,s,u.gu2()/1000+3.5)}C.fK()
A.lL(150,300,0.5,"noise")}w=r.d
w===$&&C.c()
r.r=A.Cr(w,new A.vT(r.z,r.Q,!1))
q=q&&!d.c
r.A6(d.b,q)
if(r.d.w&&r.c!=null)$.aU.x1$.push(new A.ejF(r))
if(r.d.gaCY()&&!r.cx){r.cx=!0
$.aU.x1$.push(new A.ejG(r))}},
b1M(){var w=this.ch?3.141592653589793:-0.12
this.f.lW(205,0.4,B.a7O,w)},
aRF(){var w,v,u=this
u.ch=!1
w=u.f
w.GA(!1)
w.x=0
u.m(new A.ejO(u))
v=u.d
v===$&&C.c()
u.r=A.Cr(v,new A.vT(u.z,u.Q,!1))
w.lW(205,0.4,B.a7O,-0.12)},
bAh(){var w,v,u=this
u.ch=!0
w=u.f
w.GA(!0)
u.m(new A.ejH(u))
v=u.d
v===$&&C.c()
u.r=A.Cr(v,new A.vT(u.z,u.Q,!1))
w.lW(190,0.3,B.fz4,3.141592653589793)},
YK(d,e){var w,v,u,t=this,s=A.l0(e),r=t.f
r.GA(!1)
r.x=0
t.m(new A.ek5(t,e))
w=t.d
w===$&&C.c()
t.r=A.Cr(w,new A.vT(t.z,t.Q,!1))
v=A.a1S(s,B.fy3)
w=s.c
u=w?22:15
r.lW(u,w?-0.8:0.26,v,0.3)},
avB(){var w,v=this
v.m(new A.ejP(v))
w=v.d
w===$&&C.c()
v.r=A.Cr(w,new A.vT(v.z,v.Q,!1))
v.b1M()},
c3q(d){var w,v,u,t,s,r,q=this
if(d===0){if(q.Q<0)q.m(new A.ekk(q))
return}w=q.Q
if(w>=0)v=!(d>=5000&&d<5700)
else v=!1
if(v)return
if(d>=5000&&d<5700){v=d-5000
u=D.o.an(v,100)
if(w!==u){if(q.z==="tester")q.aA2(u)
else{q.m(new A.ekl(q))
q.YK(0,u)}return}q.b_w(u,D.o.G(v,100))
return}if(d>=1000&&d<1010)if(q.z==="drill"){w=q.d
w===$&&C.c()
q.kw(w.cHT(d-1000))
return}if(d>=2000&&d<2007){q.b_z(d-2000)
return}if(d>=3000&&d<3007){q.b_x(d-3000)
return}if(d>=6000&&d<6005){if(q.z==="sheet"){w=q.d
w===$&&C.c()
q.kw(w.cKB(B.a2p[d-6000]))}return}if(d>=6100&&d<6103){t=B.o0[d-6100]
if(q.z==="paint"){w=q.d
w===$&&C.c()
q.kw(w.cPz(t))
return}}if(d>=6200&&d<6202){s=d-6200
switch(q.z){case"tape":w=q.d
w===$&&C.c()
q.kw(w.cSd(s))
return
case"mud":w=q.d
w===$&&C.c()
q.kw(w.cNh(s))
return
case"sand":w=q.d
w===$&&C.c()
q.kw(w.bkJ(s))
return}}if(d>=7000&&d<7100){if(q.z==="screw"){w=q.d
w===$&&C.c()
v=d-7000
q.kw(w.bkW(D.o.an(v,10),D.o.G(v,10)))}return}if(d>=7500&&d<7600){if(q.z==="screw"){w=q.d
w===$&&C.c()
v=d-7500
q.kw(w.aIJ(D.o.an(v,10),D.o.G(v,10),!0))}return}if(d===8000){w=q.d
w===$&&C.c()
q.kw(w.aH4())
return}if(d>=8100&&d<8107){u=d-8100
w=q.d
w===$&&C.c()
if(w.CW.h(0,u)==="tv"&&q.z!=="unplug"){w=q.c
w.toString
H.fKi(w,0,"tv",!0,D.v2,"Samsung Neo QLED 8K")
return}q.kw(q.d.bgY(u))
return}if(q.z==="look"){w=q.r
w===$&&C.c()
r=w.b.h(0,d)
if(r!=null){q.m(new A.ekm(q,d))
q.A6(r.a+": "+r.b,!0)}}},
b_z(d){var w,v,u,t=this,s=t.d
s===$&&C.c()
if(s.at.ai(0,d)){s=t.z
s=s!=="tester"&&s!=="look"&&!D.d.t(B.GU,s)}else s=!1
if(s){t.m(new A.eki(t))
t.YK(0,d)
return}s=t.z
switch(s){case"wall":case"ceiling":case"fanbox":w=t.d
t.kw(w.cNe(d,s==="fanbox"?"fan":s))
return
case"cable":t.kw(t.d.cQm(d))
return
case"knife":t.kw(t.d.cGP(d))
return
case"outlet":case"gfci":case"switch":case"light":case"fan":v=t.d.bdn(d,s)
t.kw(v)
if(v.a){t.d.at.h(0,d).b.f=!t.d.b
t.z=""
t.YK(0,d)}return
case"tester":t.aA2(d)
return}if(t.d.at.ai(0,d)){t.YK(0,d)
return}s=t.r
s===$&&C.c()
u=s.b.h(0,2000+d)
if(u!=null){t.m(new A.ekj(t,d))
t.A6(u.a+": "+u.b,!0)}},
aA2(d){var w,v=this.d
v===$&&C.c()
w=v.ax&&!v.ay&&v.x.ai(0,d)&&this.d.z.t(0,d)
v=w?"The tester glows: this box is LIVE (120 volts). Turn the breaker OFF before you touch any wire.":"The tester stays dark: no power here. It is safe to work. (Test again after you turn the breaker off, every time.)"
this.A6(v,!w)
A.lL(w?1400:500,120,0.25,"tri")},
b_x(d){var w,v=this,u=v.d
u===$&&C.c()
w=u.at.h(0,d)
if(w==null)return
if(D.d.t(B.GU,v.z)){v.kw(v.d.bfq(d,v.z))
return}u=v.z
if(u==="tester"){v.aA2(d)
return}if(u==="flip"){if(w.a==="switch"&&w.b.c>=2)v.kw(v.d.aDH(d))
else v.avD("Only a finished switch can be flipped.")
return}v.m(new A.ekh(v))
v.YK(0,d)},
b_w(d,e){var w,v,u,t,s,r,q,p=this,o=p.d
o===$&&C.c()
w=o.at.h(0,d)
if(w==null)return
o=w.a
v=A.Ai(o).f
u=C.U(v).k("a2<1>")
t=C.B(new C.a2(v,new A.ekd(e),u),u.k("J.E"))
s=A.hjw(o,e)
if(s!=null){o=w.b
o=o.b.iR(0,s)&&o.c===0}else o=!1
if(o){p.kw(p.d.cSK(d,s))
return}if(t.length!==0&&w.b.c===0){o=p.at
if(o.length===0){p.avD("Pick a wire below first, then tap "+D.d.gL(t).b+".")
p.m(new A.eke(p,d,e))
return}r=p.d.bbI(d,o,e)
p.kw(r)
if(r.a)p.m(new A.ekf(p))
return}o=p.r
o===$&&C.c()
q=o.b.h(0,5000+d*100+e)
if(q!=null){p.m(new A.ekg(p,d,e))
p.A6(q.a+": "+q.b,!0)}},
c3r(){var w,v,u,t,s,r,q=this,p=C.a([],x.ek)
for(w=0;w<7;++w){v=B.tW[w]
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
csV(){var w,v,u,t,s,r,q,p=null,o=this.c3r()
if(o.length===0)return D.bH
w=C.a([],x.p)
for(v=o.length,u=0;u<o.length;o.length===v||(0,C.L)(o),++u){t={}
s=o[u]
t.a=null
t.a=s.a
r=new C.aW(12,12)
q=new C.aA(D.b1,1,D.q,-1)
w.push(C.aE(p,C.p(p,new C.x("\ud83d\udccd "+s.b,p,D.o9,p,p,p,p,p,p,p,p,p),D.f,p,p,new C.o(D.fh.j(0.35),p,new C.bP(q,q,q,q),new C.bq(r,r,r,r),p,p,D.n),p,p,p,p,B.XF,p,p,p),D.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new A.ekq(t,this),p,p,p,p,p,p,!1,D.a8))}return new C.C(D.ia,C.bY(D.bz,w,D.br,6,6),p)},
bMj(){var w=null,v=this.c
v.toString
C.ca(w,w,!1,w,new A.ejN(this),v,w,!0,!0,x.H)},
c3m(){var w=null,v=this.c
v.toString
C.ca(w,w,!0,w,new A.ejK(this),v,w,!0,!0,x.H)},
avC(d){this.m(new A.ejQ(this,d))
this.aRF()},
aXe(){return this.avC(!1)},
c3o(){var w,v,u,t,s,r,q,p,o,n=this,m=n.d
m===$&&C.c()
if(m.w)return"The job is over."
switch(n.y){case 0:m=m.d
m===$&&C.c()
w=C.U(m).k("a2<1>")
v=C.B(new C.a2(m,new A.ejR(n),w),w.k("J.E"))
if(v.length!==0){u=D.d.gL(v)
t=A.l0(u.a)
m=u.b
if(m==="gfci")m="a GFCI"
if(t.c)w=t.e==="fan"?"fan box":"ceiling box"
else w="wall box"
return"Mount a box at "+t.b+" ("+m+" goes here): pick a "+w+", then tap the glowing spot."}m=n.d.d
m===$&&C.c()
w=C.U(m).k("a2<1>")
s=C.B(new C.a2(m,new A.ejS(n),w),w.k("J.E"))
if(s.length!==0){t=D.d.gL(s).a
m=n.d.aJt(t)
r=new C.a2(m,new A.ejT(n),C.U(m).k("a2<1>")).gM(0)
return r>0?"The cable comes from the panel on the right. Pick the drill and tap each stud on the way to "+A.l0(t).b+" ("+r+" left).":"Pick the cable roll and tap "+A.l0(t).b+"."}return"Rough-in done! Open 2 Drywall."
case 1:if(!m.gaGU())return"Finish the rough-in first (tab 1). Drywall hides the wires."
if(!n.d.gaBj())return"Pick a drywall sheet and tap a stud edge to hang it. Three sheets cover the wall."
if(!n.d.gaBi())return"Pick the drywall saw and tap each box to cut its opening."
if(!D.d.da(B.o0,n.d.gaog()))return"Pick the screw gun and put a screw in every glowing spot on the studs."
if(D.d.b8(n.d.as,new A.ejW()))return"Pick the tape and tap each seam between two sheets."
if(D.d.b8(n.d.as,new A.ejX()))return D.d.b8(n.d.as,new A.ejY())?'The mud is wet. Press "Let it dry", then the next coat.':"Pick the mud and tap each seam. It needs three coats, with drying in between."
if(D.d.b8(n.d.as,new A.ejZ()))return D.d.b8(n.d.as,new A.ek_())?'Press "Let it dry", then sand.':"Pick the sander and tap each seam."
if(!n.d.gyk())return"Pick the roller and paint each sheet."
return"Drywall done! Open 3 Devices."
default:if(!m.gyk())return"Finish the drywall first (tab 2)."
m=n.d.d
m===$&&C.c()
w=C.U(m).k("a2<1>")
q=C.B(new C.a2(m,new A.ek0(n),w),w.k("J.E"))
if(q.length!==0){u=D.d.gL(q)
m=u.b
if(m==="gfci")m="GFCI"
return"Pick the "+m+" and tap "+A.l0(u.a).b+". ("+C.t(new A.ek3().$1(new C.K(q,new A.ek1(),C.U(q).k("K<1,H>"))))+" still need a device.)"}m=n.d.d
m===$&&C.c()
w=C.U(m).k("a2<1>")
p=C.B(new C.a2(m,new A.ek2(n),w),w.k("J.E"))
if(p.length!==0)return"Tap "+A.l0(D.d.gL(p).a).b+" to work on it: breaker OFF, wires, push in, cover on."
m=n.d
if(!m.ax)return"Turn the breaker ON (tap the panel or the breaker button) and test."
m=m.d
m===$&&C.c()
w=C.U(m).k("a2<1>")
o=C.B(new C.a2(m,new A.ejU(n),w),w.k("J.E"))
if(o.length!==0)return"Pick the TV or the lamp and plug it into "+A.l0(D.d.gL(o).a).b+" to test it."
m=n.d.d
m===$&&C.c()
return"Flip the wall switch to test the "+(D.d.b8(m,new A.ejV())?"fan":"light")+"."}},
B(a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=this,a2=null,a3=B.d1t[a1.y],a4=a1.Q
if(a4>=0){w=a1.d
w===$&&C.c()
v=w.at.h(0,a4)}else v=a2
a4=v==null
u=a4?a2:A.Ai(v.a)
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
for(l=0;l<3;++l)m.push(new C.C(D.Lr,new C.x(l<a1.d.e?"\u2764\ufe0f":"\ud83d\udda4",a2,D.zl,a2,a2,a2,a2,a2,a2,a2,a2,a2),a2))
m.push(D.bp)
k=a1.d
if(k.ay)k=D.jQ
else{k=k.ax
k=k?D.er:D.e9}k=k.j(0.95)
j=C.m(16)
i=a1.d
h=i.ay
if(h)g=D.ct
else{g=i.ax
g=g?D.ci:D.b7}g=C.I(g,D.q,1.4)
if(h)i="TRIPPED: tap to reset"
else{i=i.ax
i=i?"Breaker ON":"Breaker OFF"}m.push(C.aE(a2,C.p(a2,C.d(i,a2,a2,a2,a2,a2,a2,B.eZR,a2,a2,a2),D.f,a2,a2,new C.o(k,a2,g,j,a2,a2,D.n),a2,a2,a2,a2,D.qQ,a2,a2,a2),D.y,!1,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,new A.eky(a1),a2,a2,a2,a2,a2,a2,!1,D.a8))
m=C.a([C.A(m,D.m,a2,D.e,D.Q,0,a2,a2)],n)
k=a1.ch
j=k?"In front":"Behind the wall"
i=k?F.ak9:F.ak8
k=C.a([A.Ql(j,D.by,i,k,k?a1.gbNN():a1.gbAg()),D.an],n)
if(!a4){j=v.b
D.d.v(k,C.a([A.Ql("Labels",D.aT,S.N4,j.f,new A.ekz(a1,v)),D.an,A.Ql("Hints",D.aH,D.r0,j.e,new A.ekA(a1,v)),D.O],n))}s=A.X1(a2,a1.f,new A.ekI(a1),p,r,o,a2,a2,q,a2,a2,new A.ekJ(a1),a1.gc3p(),s,!1,m,k)
r=C.a([],n)
if(a4){a4=C.a([],n)
for(l=0;l<3;++l){q=l<2?6:0
p=a1.y===l?D.aH.j(0.2):D.dp
o=new C.aW(12,12)
f=new C.aA(a1.y===l?D.aH:D.bF,1,D.q,-1)
if(l===0)m=a1.d.gaGU()
else{m=a1.d
m=l===1?m.gyk():m.gaCY()}m=m?"\u2705 ":""
k=B.da0[l]
j=a1.y===l?D.aH:D.ad
a4.push(new C.bD(1,D.bi,C.aE(a2,C.p(a2,new C.cr(D.A,a2,a2,new C.x(m+k,a2,new C.G(!0,j,a2,a2,a2,a2,12,D.u,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2),a2,a2,a2,a2,a2,a2,a2,a2,a2),a2),D.f,a2,a2,new C.o(p,a2,new C.bP(f,f,f,f),new C.bq(o,o,o,o),a2,a2,D.n),a2,a2,a2,new C.Q(0,0,q,0),Q.Lu,a2,a2,a2),D.y,!1,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,new A.ekK(a1,l),a2,a2,a2,a2,a2,a2,!1,D.a8),a2))}a4=C.a([C.A(a4,D.m,a2,D.e,D.j,0,a2,a2),D.an],n)
if(!a1.d.b){q=D.aT.j(0.1)
p=C.m(10)
o=C.I(D.aT.j(0.4),D.q,1)
a4.push(C.p(a2,C.d("\ud83d\udc49 "+a1.c3o(),a2,2,D.a2,a2,a2,a2,B.f0k,a2,a2,a2),D.f,a2,a2,new C.o(q,a2,o,p,a2,a2,D.n),a2,a2,a2,a2,D.ck,a2,a2,1/0))}else a4.push(B.fi0)
a4.push(D.an)
q=C.a([],n)
if(a1.y<2&&!a1.d.gyk())q.push(new C.C(E.tt,C.aE(a2,C.p(a2,B.b3e,D.f,a2,a2,new C.o(D.dS,a2,a2,C.m(14),a2,a2,D.n),a2,a2,a2,a2,D.fT,a2,a2,a2),D.y,!1,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,new A.ekL(a1),a2,a2,a2,a2,a2,a2,!1,D.a8),a2))
for(p=a3.length,e=0;e<p;++e){d=a3[e]
o=d.a
m=a1.z===o?D.aH.j(0.25):D.c.j(0.07)
k=new C.aW(14,14)
o=a1.z===o
j=o?D.aH:D.b2
f=new C.aA(j,o?2:1,D.q,-1)
j=o?D.aH:D.ad
j=C.W(d.c,j,a2,a2,a2,19)
o=o?D.aH:D.c
q.push(new C.C(E.tt,C.aE(a2,C.p(a2,new C.cm(D.aO,D.e,D.j,D.m,a2,D.p,a2,0,C.a([j,D.bp,new C.x(d.b,a2,new C.G(!0,o,a2,a2,a2,a2,12.5,D.H,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2),a2,a2,a2,a2,a2,a2,a2,a2,a2)],n),a2),D.f,a2,a2,new C.o(m,a2,new C.bP(f,f,f,f),new C.bq(k,k,k,k),a2,a2,D.n),a2,a2,a2,a2,D.fT,a2,a2,a2),D.y,!1,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,new A.ekM(a1,d),a2,a2,a2,a2,a2,a2,!1,D.a8),a2))}if(a1.y===1)q.push(new C.C(E.tt,C.aE(a2,C.p(a2,B.b36,D.f,a2,a2,new C.o(D.e9,a2,a2,C.m(14),a2,a2,D.n),a2,a2,a2,a2,D.fT,a2,a2,a2),D.y,!1,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,new A.ekN(a1),a2,a2,a2,a2,a2,a2,!1,D.a8),a2))
a4.push(new C.a7(a2,52,C.cB(q,a2,a2,a2,a2,D.aO,!1),a2))
if(a1.z.length!==0)a4.push(a1.csV())
D.d.v(r,a4)}else{a4=C.a([],n)
q=v.b
if(q.c===0)for(p=D.d.gae(u.e),o=new C.fk(p,new A.ekO(v)),m=q.b;o.C();){k=p.gS(0)
j=k.c
i=new C.aW(14,14)
h=a1.at
g=k.a
h=h===g
a0=h?D.b1:D.b2
f=new C.aA(a0,h?3:1,D.q,-1)
a0=C.a([],n)
if(m.iR(0,g))a0.push(new C.C(D.Ls,C.W(D.ee,k.d,a2,a2,a2,17),a2))
h=k.b
g=k.d
a0.push(new C.x(h,a2,new C.G(!0,g,a2,a2,a2,a2,12.5,D.u,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2),a2,a2,a2,a2,a2,a2,a2,a2,a2))
a4.push(C.aE(a2,C.p(a2,new C.cm(D.aO,D.e,D.Q,D.m,a2,D.p,a2,0,a0,a2),D.f,a2,a2,new C.o(j,a2,new C.bP(f,f,f,f),new C.bq(i,i,i,i),a2,a2,D.n),a2,a2,a2,a2,D.xk,a2,a2,a2),D.y,!1,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,new A.ekP(a1,v,k),a2,a2,a2,a2,a2,a2,!1,D.a8))}a4=C.a([C.bY(D.bz,a4,D.br,6,8)],n)
if(q.c===0&&a1.at.length!==0){p=C.a([],n)
for(o=D.d.gae(u.f),m=new C.fk(o,new A.ekB(v));m.C();){k=o.gS(0)
j=D.fh.j(0.35)
i=new C.aW(12,12)
f=new C.aA(D.b1,1,D.q,-1)
p.push(C.aE(a2,C.p(a2,new C.x("\u279c "+k.b,a2,D.o9,a2,a2,a2,a2,a2,a2,a2,a2,a2),D.f,a2,a2,new C.o(j,a2,new C.bP(f,f,f,f),new C.bq(i,i,i,i),a2,a2,D.n),a2,a2,a2,a2,B.XF,a2,a2,a2),D.y,!1,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,new A.ekC(a1,k),a2,a2,a2,a2,a2,a2,!1,D.a8))}a4.push(new C.C(D.kh,C.bY(D.bz,p,D.br,6,6),a2))}a4.push(D.O)
p=C.a([A.y7("Back to the room",D.oA,a1.gc3n(),D.ad),D.ab],n)
if(q.c===0){u.toString
o=A.bCc(u,q)?"Push it into the box":"Fasten every wire"
p.push(A.y7(o,B.alj,A.bCc(u,q)?new A.ekD(a1):a2,D.aH))}if(q.c===1)D.d.v(p,C.a([A.y7("Pull it out",D.r3,new A.ekE(a1),D.ad),D.ab,A.y7("Cover on",R.vo,new A.ekF(a1),D.aH)],n))
if(q.c>=2){q=q.w
o=q?"Take out the burnt one":"Pull it out again"
q=q?D.ci:D.ad
p.push(A.y7(o,B.bBB,new A.ekG(a1),q))}a4.push(C.A(p,D.m,a2,D.e,D.j,0,a2,a2))
D.d.v(r,a4)}a4=C.a([new A.AZ(t+" job",D.aH,s,C.v(r,D.m,a2,D.e,D.Q,0,D.p),new A.ekH(a1,a5),"Phase "+(w+1)+"/3",a2)],n)
if(a1.CW)a4.push(C.bZ(0,C.e1(C.p(a2,a2,D.f,B.aez,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2),!0,a2),0,0,0))
return new C.an(D.W,a2,D.aa,D.r,a4,a2)},
cmJ(d){var w=this.d
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
break A}this.A6(w,!0)},
cc1(d){return C.bV(E.ma,null,new A.ekc(this),d,!0,!0,!0,D.kX,!1,!1,x.H)}}
A.vT.prototype={}
A.qV.prototype={
a4(){return"FaultKind."+this.b}}
A.u3.prototype={}
A.Lz.prototype={}
A.com.prototype={
bwj(d,e,f){var w,v,u,t,s,r,q,p=this,o=new C.eJ()
o.dB(p.a)
w=C.B(B.d04,x.eP)
D.d.ft(w,o)
v=C.aX(x.S)
u=C.a([],x.gw)
for(t=w.length,s=0;s<w.length;w.length===t||(0,C.L)(w),++s){r=w[s]
q=B.vM.h(0,r).e
if(v.t(0,q))continue
v.K(0,q)
u.push(new A.Lz(r,o.aB(3)))
if(u.length>=d)break}p.c!==$&&C.aO()
p.c=u
p.avE()},
pv(d,e){var w=this.c
w===$&&C.c()
return D.d.b8(w,new A.cor(e))},
avE(){var w,v,u,t,s=this,r=s.d,q=r.d
q.a9(0)
if(s.pv(0,B.YZ))q.K(0,72)
if(s.pv(0,B.Z_))q.K(0,75)
q=s.pv(0,B.M9)
r.b=q
r.c=!q
r.w=s.pv(0,B.Ma)
r.x=s.pv(0,B.Z3)
r.y=s.pv(0,B.Z4)
r.z=s.pv(0,B.Z2)
r.Q=s.pv(0,B.Z5)
r.as=s.pv(0,B.Z6)
r.at=s.pv(0,B.Z1)
q=r.f
q.a9(0)
r=r.r
r.a9(0)
w=s.c
w===$&&C.c()
w=D.d.gae(w)
v=new C.fk(w,new A.con())
while(v.C()){u=w.gS(0)
t=u.c
u=u.b
if(t)r.K(0,u)
else q.K(0,u)}},
gcBG(){var w=this.c
w===$&&C.c()
return D.d.da(w,new A.cop())},
gcIX(){var w=this.c
w===$&&C.c()
return new C.a2(w,new A.coq(),C.U(w).k("a2<1>")).gM(0)},
cIz(d){var w,v,u,t,s,r,q,p=this.c
p===$&&C.c()
w=p.length
v=d===86
u=d===92
t=0
for(;t<p.length;p.length===w||(0,C.L)(p),++t){s=p[t]
r=s.a
q=!0
if(B.vM.h(0,r).e!==d)if(!(r===B.M9&&v))r=r===B.Ma&&u
else r=q
else r=q
if(r)return s}return null},
aXf(d){++this.f
return new A.eE(!1,d,!1,"")},
c3s(){var w,v,u,t,s=this;++s.r;--s.e
for(w=s.d,v=w.d,w=w.e,u=0;u<4;++u){t=B.atD[u]
if(!v.t(0,t))w.K(0,t)}w=s.e
if(w<=0){s.w=!0
return B.aU6}v=w===1?"life":"lives"
return new A.eE(!1,"ZAP! You touched a live wire and got a shock. All the breakers were knocked off. "+w+" "+v+" left. Turn the breaker OFF first.",!0,"shock")},
cT_(d,e){var w,v,u,t,s=this
if(s.w)return B.aU2
if(D.d.t(B.atD,e))return s.bAL(d,e)
w=s.cIz(e)
if(d==="inspect"){if(w==null||w.c)return B.aU5
return new A.eE(!0,"You look and test: "+B.vM.h(0,w.a).b,!1,"")}if(w==null||w.c)return new A.eE(!1,s.b?"Nothing needs fixing there.":"There is nothing wrong with this, so the "+C.t(B.Qt.h(0,d))+' is not needed. Use "Look and test" on things to find the problem.',!1,"")
v=B.vM.h(0,w.a)
if(d!==v.c){++s.f
return new A.eE(!1,s.b?"That is not the right tool for this problem.":"The "+C.t(B.Qt.h(0,d))+" does not fix this. "+v.b,!1,"")}u=v.f
if(u!==0){t=s.d
u=!t.d.t(0,u)&&!t.e.t(0,u)}else u=!1
if(u){if(s.b)return s.c3s()
return s.aXf("STOP! "+v.r+" The wires here are live (120 volts). Tap the breaker in the panel (with your hand) to switch it off.")}w.c=!0
s.avE()
return new A.eE(!0,v.d,!1,"")},
bAL(d,e){var w,v,u,t,s=this
if(d==="inspect"){w=s.d
if(w.d.t(0,e))w="This breaker has tripped: it sits in the middle (orange)."
else w=w.e.t(0,e)?"This breaker is switched OFF.":"This breaker is ON."
return new A.eE(!0,w,!1,"")}if(d!=="hand")return s.aXf(s.b?"Use your hand on a breaker.":"A breaker is switched with your hand, not with a "+C.t(B.Qt.h(0,d))+".")
w=s.d
v=w.d
if(v.t(0,e)){w=s.c
w===$&&C.c()
u=C.U(w).k("a2<1>")
t=C.B(new C.a2(w,new A.coo(e),u),u.k("J.E"))
if(t.length!==0){D.d.gL(t).c=!0
s.avE()
return new A.eE(!0,B.vM.h(0,D.d.gL(t).a).d,!1,"")}v.W(0,e)
return B.aUA}w=w.e
if(w.t(0,e)){w.W(0,e)
return B.aUu}w.K(0,e)
return B.aUk}}
A.aq0.prototype={
U(){var w,v=new A.AE(-0.3,0.48,46,B.Tz,$.aw())
v.f=80
w=new C.BI()
$.CE()
w.j1(0)
return new A.aD7(v,w)}}
A.aD7.prototype={
gJ(){var w=this.d
w===$&&C.c()
return w},
gCj(d){var w=this.e
if(w===$){this.a.toString
w=D.o.G(Date.now(),1e5)
this.e=w}return w},
a_(){var w,v=this
v.a1()
w=v.gCj(0)
w=A.h73(v.a.d,w)
v.d=w
v.r=A.afj(w.d)},
q(){var w=this.ax
if(w!=null)w.a8(0)
this.a2()},
c3x(d,e){var w=this,v=w.ax
if(v!=null)v.a8(0)
w.m(new A.emb(w,d,e))
w.ax=C.cM(D.jv,new A.emc(w))},
aXg(){this.f.lW(46,0.48,B.Tz,-0.3)
this.m(new A.em0(this))},
c3w(d){var w,v,u=this
if(d===0)return
w=u.d
w===$&&C.c()
v=w.cT_(u.x,d)
w=v.a
if(w)A.y8()
else A.lL(180,220,0.25,"square")
if(v.d==="shock"){C.fK()
u.m(new A.em5(u))
C.bN(D.n0,new A.em6(u),x.P)}u.m(new A.em7(u,d))
w=w&&!v.c
u.c3x(v.b,w)
w=u.d
if(w.w)$.aU.x1$.push(new A.em8(u))
else if(w.gcBG()&&!u.at){u.at=!0
$.aU.x1$.push(new A.em9(u))}},
cc8(){var w=null,v=this.c
v.toString
C.ca(w,w,!1,w,new A.em3(this),v,w,!0,!0,x.H)},
c3t(){var w=null,v=this.c
v.toString
C.ca(w,w,!0,w,new A.em_(this),v,w,!0,!0,x.H)},
av_(){this.m(new A.em1(this))
this.aXg()},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.d
g===$&&C.c()
g=g.gcIX()
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
for(o=0;o<3;++o)p.push(new C.C(D.Lr,new C.x(o<i.d.e?"\u2764\ufe0f":"\ud83d\udda4",h,D.zl,h,h,h,h,h,h,h,h,h),h))
v=A.X1(h,i.f,new A.emj(i),s,u,r,h,new A.emk(),t,h,h,i.gc3u(),i.gc3v(),v,!1,C.a([C.A(p,D.m,h,D.e,D.Q,0,h,h)],q),h)
u=i.d.c
u===$&&C.c()
t=C.U(u)
t=new C.cQ(new C.a2(u,new A.eml(),t.k("a2<1>")),new A.emm(),t.k("cQ<1,n>")).aI(0,"  \xb7  ")
u=C.d("Customer: "+(t.length===0?"All fixed!":t),h,2,D.a2,h,h,h,B.aOp,h,h,h)
t=C.a([],q)
for(n=0;n<10;++n){m=B.ddT[n]
s=i.x===m?D.aH.j(0.25):D.c.j(0.07)
r=new C.aW(14,14)
p=i.x===m
l=p?D.aH:D.b2
k=new C.aA(l,p?2:1,D.q,-1)
l=B.djD.h(0,m)
p=C.W(l,i.x===m?D.aH:D.ad,h,h,h,19)
l=B.Qt.h(0,m)
l.toString
j=i.x===m?D.aH:D.c
t.push(new C.C(E.tt,C.aE(h,C.p(h,new C.cm(D.aO,D.e,D.j,D.m,h,D.p,h,0,C.a([p,D.bp,new C.x(l,h,new C.G(!0,j,h,h,h,h,12.5,D.H,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h),h,h,h,h,h,h,h,h,h)],q),h),D.f,h,h,new C.o(s,h,new C.bP(k,k,k,k),new C.bq(r,r,r,r),h,h,D.n),h,h,h,h,D.fT,h,h,h),D.y,!1,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,new A.emn(i,m),h,h,h,h,h,h,!1,D.a8),h))}g=C.a([new A.AZ("Service call",D.aT,v,C.v(C.a([new C.bH(D.a3,h,h,u,h),D.O,new C.a7(h,52,C.cB(t,h,h,h,h,D.aO,!1),h)],q),D.m,h,D.e,D.Q,0,D.p),new A.emo(i,d),""+g+"/"+w+" fixed",h)],q)
if(i.as)g.push(C.bZ(0,C.e1(C.p(h,h,D.f,B.aez,h,h,h,h,h,h,h,h,h,h),!0,h),0,0,0))
return new C.an(D.W,h,D.aa,D.r,g,h)},
cwo(d){return C.bV(E.ma,null,new A.emh(this),d,!0,!0,!0,D.kX,!1,!1,x.H)},
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
$5$max$min(d,e,f,g,h){return this.gJ().$5$max$min(d,e,f,g,h)},
$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){return this.gJ().$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r)},
$2$f$r(d,e){return this.gJ().$2$f$r(d,e)},
$1$radius(d){return this.gJ().$1$radius(d)},
$4$gender$phone(d,e,f,g){return this.gJ().$4$gender$phone(d,e,f,g)},
$3$hint$prefix(d,e,f){return this.gJ().$3$hint$prefix(d,e,f)},
$3$helperText$prefixText(d,e,f){return this.gJ().$3$helperText$prefixText(d,e,f)},
$1$verifyUrls(d){return this.gJ().$1$verifyUrls(d)},
$2$wrapWidth(d,e){return this.gJ().$2$wrapWidth(d,e)}}
A.VS.prototype={
gkm(d){return this.x}}
A.uz.prototype={}
A.a8M.prototype={}
A.B2.prototype={
bd0(d,e,f){var w=this
return d>w.a-f&&d<w.b+f&&e>w.c-f&&e<w.d+f}}
A.cl0.prototype={
c3y(d){return-this.a.gfq(0)/2+d*4},
a3N(d,e){var w,v,u=this.a
if(d<-u.gfq(0)/2+6||d>u.gfq(0)/2-6||e<6||e>u.gkz(0)-6)return!1
for(u=this.b,w=u.length,v=0;v<w;++v)if(u[v].bd0(d,e,9))return!1
return!0},
aXi(d,e,f){var w,v,u=e.a,t=f.a-u,s=e.b,r=f.b-s,q=Math.max(1,D.k.dw(Math.sqrt(Math.pow(t,2)+Math.pow(r,2))/2))
for(w=0;w<=q;++w){v=w/q
if(!this.a3N(u+t*v,s+r*v))return!1}return!0},
aW0(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=a0.a,f=h.a,e=D.k.V((g+f.gfq(0)/2)/4),d=h.c
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
if(!h.a3N(-f.gfq(0)/2+k,j))continue
i=Math.pow(-f.gfq(0)/2+k-g,2)+Math.pow(j-e,2)
if(i<o){p=new C.y(n,l)
o=i}}if(p!=null)return p}return null},
bgy(b9,c0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5=this,b6=1e9,b7=b5.aW0(b9),b8=b5.aW0(c0)
if(b7==null||b8==null)return C.a([b9,c0],x.f)
w=b8.a
v=b5.c3y(w)
u=b8.b
t=new C.y(v,u*4)
if(b5.aXi(0,b9,t))return C.a([b9,t],x.f)
v=b7.a
s=b5.d
s===$&&C.c()
r=b7.b
q=x.S
p=C.ew([v*s+r],q)
o=C.T(q,q)
n=x.i
m=C.F([v*s+r,0],q,n)
l=C.F([v*s+r,b5.bPN(v,r,b8)],q,n)
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
a2=D.o.G(f,s)
for(n=a2*4,e=a1*4,a3=-1;a3<=1;++a3)for(a0=a3===0,a4=!a0,a5=a1+a3,a6=a5*4,a7=a5-w,a8=-1;a8<=1;++a8){if(a0&&a8===0)continue
a9=a2+a8
b0=!0
if(a5>=0)if(a9>=0){b0=b5.c
b0===$&&C.c()
b0=a5>=b0||a9>=s||!b5.a3N(-v.gfq(0)/2+a6,a9*4)}if(b0)continue
b0=!1
if(a4)if(a8!==0)b0=!b5.a3N(-v.gfq(0)/2+a6,n)||!b5.a3N(-v.gfq(0)/2+e,a9*4)
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
for(r=x.c5,q=new C.dw(b3,r),q=new C.bR(q,q.gM(0),r.k("bR<ak.E>")),r=r.k("ak.E");q.C();){n=q.d
if(n==null)n=r.a(n)
e=D.o.e3(n,s)
u.push(new C.y(-v.gfq(0)/2+e*4,D.o.G(n,s)*4))}b4=C.a([D.d.gL(u)],w)
for(a5=0;a9=u.length-1,a5<a9;a5=a9){w=a5+1
for(;;){if(!(a9>w&&!b5.aXi(0,u[a5],u[a9])))break;--a9}b4.push(u[a9])}return b4},
bPN(d,e,f){return Math.sqrt(Math.pow(d-f.a,2)+Math.pow(e-f.b,2))}}
A.zV.prototype={}
A.bp8.prototype={
bwy(d,e,f,g,h,i,j,k,l,m,n,o){var w,v,u,t,s=this.b
if(s!=null)for(w=this.as,v=1;v<s.length;++v){u=v-1
t=Math.sqrt(Math.pow(s[v].a-s[u].a,2)+Math.pow(s[v].b-s[u].b,2))
w.push(t)
this.at+=t}}}
A.aTU.prototype={
asW(d){var w,v,u=d.gfq(0),t=new A.bPG(d,u)
switch(d.c){case"living":w=t.$1(46)
return C.a([B.fLT,new A.zV(w.a,w.b,4,"Switching the ad on the big TV",!1,!0,!0,"ad")],x.a)
case"kitchen":return C.a([new A.zV(new C.y(-u/2+40,42),3.141592653589793,2.8,"Getting a drink from the fridge",!0,!1,!1,""),B.fLS],x.a)
case"bathroom":return B.daY
case"bedroom":v=t.$1(44)
return C.a([new A.zV(v.a,v.b,3.4,"Switching the ad on the TV",!1,!0,!0,"ad")],x.a)
case"hall":if(!this.a)return B.aw1
return C.a([new A.zV(new C.y(-d.gfq(0)/2+80,90),3.141592653589793,3,"Looking at the left video wall",!1,!1,!0,""),new A.zV(B.eby,0,2.4,"Looking over the lounge and the logo carpet",!1,!1,!1,""),new A.zV(new C.y(d.gfq(0)/2-80,90),3.141592653589793,3,"Looking at the right video wall",!1,!1,!0,"")],x.a)
default:return B.aw1}},
abd(a0,a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=e.b.d
d===$&&C.c()
w=d[a0]
v=new A.cl0(w,A.i2z(w))
v.c=D.k.dw(w.gfq(0)/4)+1
v.d=D.k.dw(w.gkz(0)/4)+1
u=A.hb5(w,a1)
t=u.a
s=u.c
d=e.d
r=d.length
q=a3.length===0?"Walking in":a3
d.push(A.bp9(a0,"",!1,q,-1,null,!1,!1,0.5,t.a,u.b,t.b))
for(q=e.asW(w),p=q.length,o=t,n=0;n<q.length;q.length===p||(0,C.L)(q),++n){m=q[n]
l=v.bgy(o,m.a)
k=m.e
if(k)j=C.cU(m.d,"Having",0)
else j=!1
d.push(A.bp9(a0,"",j,"Walking",-1,l,!1,!1,0,0,0,0))
o=D.d.gal(l)
d.push(A.bp9(a0,m.w,k,m.d,-1,null,m.r,m.f,m.c,o.a,m.b,o.b))}if(a2!=null){i=A.hb5(w,a2)
h=i.c
l=v.bgy(o,i.a)
g=e.asW(w).length!==0&&D.d.gal(e.asW(w)).e
d.push(A.bp9(a0,"",g,"Walking to the next room",-1,l,!1,!1,0,0,0,0))
o=D.d.gal(l)
d.push(A.bp9(a0,"",g,"Opening the door",h,null,!1,!1,1.8,o.a,e.bJP(w,h),o.b))}for(f=r;f<d.length;++f)d[f].ay=s},
aUO(d,e,f){return this.abd(d,e,f,"")},
bJP(d,e){var w,v=d.w[e].a
A:{if("left"===v){w=-1.5707963267948966
break A}if("right"===v){w=1.5707963267948966
break A}w=3.141592653589793
break A}return w},
aXh(){var w,v,u,t=this
if(t.a){t.abd(5,10,9,"Walking into the hall")
t.aXj()
return}t.abd(10,11,9,"Coming in through the front door")
t.aUO(9,10,5)
for(w=9,v=0;v<8;++v,w=u){u=B.cLZ[v]
t.abd(5,w,u,"Walking down the hall")
t.aUO(u,5,v===7?null:5)}t.aXj()},
aXj(){var w,v,u,t,s,r,q,p,o=this,n=o.c,m=Math.min(1,n/120)
for(w=o.d,v=w.length,u=0,t=0,s=0;s<v;++s){r=w[s]
if(r.b==null)u+=r.f*=m
else t+=r.at}q=t/Math.max(4,n-u)
for(n=q<=0,p=0,s=0;s<v;++s){r=w[s]
if(r.b!=null)r.f=n?0.1:Math.max(0.05,r.at/q)
r.ax=p
p+=r.f}o.e!==$&&C.aO()
o.e=p},
b8K(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g={},f=this.e
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
return new A.VS(v,f.c,f.d,f.e,!1,f.w,f.x,s,!1,f.r,p,o,n,f.ay,0)}v=new A.bPH(g)
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
return new A.VS(f.a,v,s,p,!0,o.w,!1,!1,!1,o.r,"",-1,0,o.ay,m/12)}}
A.cuL.prototype={
aBD(d,e){var w,v,u=this.a
if(d<-u.gfq(0)/2+10||d>u.gfq(0)/2-10||e<-300||e>u.gkz(0)-10)return!0
for(u=this.w,w=u.length,v=0;v<w;++v)if(u[v].bd0(d,e,7))return!0
return!1},
aJq(d,e,f,g){var w,v,u,t,s,r,q=this,p=Math.sqrt(e*e+f*f)
if(p<0.000001)return q.e=!1
w=e/p
v=f/p
u=70*g
t=q.b+w*u
s=q.c+v*u
r=!0
if(q.aBD(t,s))if(!q.aBD(t,q.c))s=q.c
else{r=!q.aBD(q.b,s)
if(r)t=q.b}if(r){q.b=t
q.c=s
q.d=Math.atan2(w,v)
q.f=q.f+u/12}return q.e=r},
cBC(d,e){var w,v,u,t=this,s=t.r
if(s==null)return!1
w=s.a-t.b
v=s.b-t.c
if(Math.sqrt(w*w+v*v)<4){t.r=null
return t.e=!1}u=t.aJq(0,w,v,e)
if(!u){t.r=null
t.e=!1}return u}}
var z=a.updateTypes(["~()","~(jf)","R(nf)","E(E)","R(pK)","~(H)","R(WO)","R(a44)","aj<mt>(N)","R(Lz)","n(n,mi)","R(mi)","R(zN)","ay<~>()","R(nv)","R(a8M)","E(H)","R(Hf)","R(px)","R(E)","R(a8L)","R(L7)","N4(Y)","GX(Y)","R(Eu)","n(nf)","R(ys)","nv(N)","ay<LG?>()","R(a3A)","n(zN)","Va(Y)","V7(Y)","E(H,H)","E(N)","a5Y(Y)","aj<mt>()","aj<mt>(aj<mt>)","N(nv)","~(H,E,E,n,w)","~(E,E,E,N,N)","~(E,E,E,N,H)","R(a41)","~(~(jf),E,E)","~(E,E,N,N,w)","~(H,aj<E>)","~(E,E,H{alongX:R})","~(aj<E>,w)","~(AF,at,N)","~(aj<E>{col:w})","~(H,E,w{h:N,w:N})","~(E,E,E,E)","~(H,aj<E>,w,N,n)","~(H,n,E,E,E,R)","R(W8)","px()","R(vz)","aj<E>(aj<E>)","~(n,aj<E>{r:N})","~(n,E,E)","~(nf,E,n)","~(n,E,E,H)","E(n)","N(C0)","R(H)","~(u,at)","H(C0,C0)","H(pK)","~(H,E,E{col:w,round:R})","d1()","~(H{keepTour:R})","n(Lz)","~(aj<E>)"])
A.bVs.prototype={
$1(d){var w=this.a
w=w===0?d:A.bBO(d,w)
return w.ad(0,this.b)},
$S:z+3}
A.bVt.prototype={
$1(d){var w=this.a
return w===0?d:A.bBO(d,w)},
$S:z+3}
A.bVr.prototype={
$4(b5,b6,b7,b8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4=this
for(w=b4.b,v=b7.a,u=b7.b,t=b7.c,s=b6.a,r=b6.b,q=b6.c,p=b8.a,o=b8.b,n=b8.c,m=1/w,l=v*m,k=u*m,j=t*m,i=p*m,h=o*m,m=n*m,g=b4.a,f=g.a,e=b4.c,d=x.o,a0=b4.d,a1=b4.e,a2=b4.f,a3=0;a3<w;++a3)for(a4=a3/w,a5=s+v*a4,a6=r+u*a4,a4=q+t*a4,a7=0;a7<w;++a7){a8=a7/w
a9=a5+p*a8
b0=a6+o*a8
a8=a4+n*a8
b1=a9+l
b2=b0+k
b3=a8+j
f.push(new A.mt(C.a([e.$1(new A.E(a9,b0,a8)),e.$1(new A.E(b1,b2,b3)),e.$1(new A.E(b1+i,b2+h,b3+m)),e.$1(new A.E(a9+i,b0+h,a8+m))],d),a0.$1(b5),a1,g.b,a2,g.d,!1,g.c,g.e,g.f,g.w))}},
$S:z+51}
A.bVu.prototype={
$1(d){var w=d*2*3.141592653589793/this.b
return this.a.aF(0,Math.cos(w)).ad(0,this.c.aF(0,Math.sin(w)))},
$S:z+16}
A.bVq.prototype={
$2(d,e){var w=3.141592653589793*d/this.a,v=6.283185307179586*e/this.b
return new A.E(Math.sin(w)*Math.cos(v),Math.cos(w),Math.sin(w)*Math.sin(v))},
$S:z+33}
A.bVv.prototype={
$1(d){var w=d*2*3.141592653589793/this.b
return this.a.aF(0,Math.cos(w)).ad(0,this.c.aF(0,Math.sin(w)))},
$S:z+16}
A.fL0.prototype={
$1(d){var w=d.b,v=this.a,u=d.c,t=this.b
return new A.E(d.a,w*v-u*t,w*t+u*v)},
$S:z+3}
A.fKZ.prototype={
$1(d){var w=this.a
return w===0?d:A.bBO(d,w)},
$S:z+3}
A.fL_.prototype={
$1(d){var w=this,v=w.b===0?d:w.c.$1(d)
return J.fLZ(w.a.$1(v),w.d)},
$S:z+3}
A.fKY.prototype={
$1(d){var w=this.b===0?d:this.c.$1(d)
return this.a.$1(w)},
$S:z+3}
A.fKS.prototype={
$4(d,e,f,g){var w=-d
return 0.5*(2*e+(w+f)*this.a+(2*d-5*e+4*f-g)*this.b+(w+3*e-3*f+g)*this.c)},
$S:1783}
A.bGi.prototype={
$1(d){var w=this,v=-d.c,u=d.b,t=w.a,s=w.b,r=v*t-u*s,q=d.a,p=w.c,o=w.d
return new A.E(q*p-r*o,u*t+v*s,q*o+r*p)},
$S:z+3}
A.bGh.prototype={
$1(d){var w=this,v=w.a
return v.d.ad(0,w.b.$1(new A.E(w.c*d,w.d*d,d-v.c)))},
$S:z+34}
A.clW.prototype={
$1(d){var w=this,v=d.a,u=w.a,t=d.c,s=w.b,r=-v*s+t*u,q=d.b,p=w.c,o=w.d
return new A.E(v*u+t*s,q*p-r*o,-(q*o+r*p))},
$S:z+3}
A.clX.prototype={
$1(d){var w=this.a.c,v=this.b.$1(d.aC(0,w.d))
return new A.E(v.a,v.b,v.c+w.c)},
$S:z+3}
A.clS.prototype={
$1(d){return d.c<1},
$S:z+19}
A.clT.prototype={
$1(d){return A.hKI(d,this.b,this.c,this.a.gaH_(0))},
$S:1784}
A.clV.prototype={
$1(d){var w,v=d.b
if(v!==0){w=this.a.h(0,v)
w.toString
v=this.b.h(0,v)
v.toString
v=w/v}else v=d.r
return v},
$S:z+63}
A.clU.prototype={
$2(d,e){var w,v,u=D.o.aL(d.a,e.a)
if(u!==0)return u
w=this.a
v=J.CG(w.$1(e),w.$1(d))
return v!==0?v:D.o.aL(d.c,e.c)},
$S:z+66}
A.eSu.prototype={
$1(d){var w=this.a,v=w.r,u=d.a
w.r=d
w.a.d.aGY(D.k.D((u-v.a)/1e6,0,0.1))
w.f.sp(0,u/1e6)},
$S:8}
A.eSt.prototype={
$1(d){if(x.ej.b(d))this.a.a.d.anx(1+d.grY().b*0.0012)},
$S:244}
A.eSq.prototype={
$1(d){var w=this.a
return w.w=w.a.d.c},
$S:234}
A.eSr.prototype={
$1(d){var w,v,u,t=this.a,s=t.a
if(d.w>=2){s=s.d
s.anx(t.w/d.d/s.c)}else{t=s.d
s=d.a
t.ax=t.at=null
w=t.a+=-s.a*0.009
if(!t.z){v=t.x
u=t.y
t.a=D.k.D(w,v-u,v+u)}t.b=D.k.D(t.b+s.b*0.009,t.r,t.w)
t.aZ()}},
$S:211}
A.eSs.prototype={
$1(d){var w=this.a
w=w.a.f.$1(w.e.cPQ(d.b))
return w},
$S:49}
A.eSo.prototype={
$1(d){return this.a.x=d.b},
$S:23}
A.eSp.prototype={
$0(){var w,v=this.a,u=v.a.Q
u.toString
v=v.x
w=this.b.gY(0)
return u.$2(v,w==null?D.au:w)},
$S:0}
A.bOt.prototype={
$0(){var w=0,v=C.j(x.d),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j
var $async$$0=C.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return C.b($.qK().jr(0,q.a),$async$$0)
case 7:p=e
m=q.b
l=x.N
o=new A.LG(m,C.T(l,x.aB),C.T(l,x.bB),C.a([],x.X),C.T(l,x.gN))
w=8
return C.b(o.OD(p),$async$$0)
case 8:$.fNq.n(0,m,o)
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
$.fNp.W(0,q.b)
w=r.pop()
break
case 6:case 1:return C.h(u,v)
case 2:return C.f(s.at(-1),v)}})
return C.i($async$$0,v)},
$S:z+28}
A.bOl.prototype={
$1(d){return D.a.t(d,"hips")},
$S:3}
A.bOi.prototype={
$2(d,e){var w,v=Math.floor(d),u=Math.floor(e),t=this.b,s=t.a,r=Math.min(s-1,D.k.bu((d-v)*s))
v=t.b
w=(Math.min(v-1,D.k.bu((e-u)*v))*s+r)*4
s=this.a
t=t.c
s.c=s.c+t[w]
s.b=s.b+t[w+1]
s.a=s.a+t[w+2]},
$S:441}
A.bOh.prototype={
$1(d){return D.k.V(D.k.D(d,0,1)*255)},
$S:255}
A.bOn.prototype={
$2(d,e){var w,v,u,t,s,r=x.S,q=C.T(r,r)
r=this.b
w=new Int32Array(r)
for(v=this.c.a,u=this.a,t=0;t<r;++t){s=t*3
w[t]=q.cg(0,(D.k.bu((v[s]-u.c)/d)*1024+D.k.bu((v[s+1]-u.b)/d))*1024+D.k.bu((v[s+2]-u.a)/d),new A.bOo(q))}e[0]=q.a
return w},
$S:1786}
A.bOo.prototype={
$0(){return this.a.a},
$S:109}
A.bOp.prototype={
$1(d){var w,v,u,t,s,r,q=C.aX(x.S)
for(w=this.a.e,v=w.length,u=0;u<v;u+=3){t=d[w[u]]
s=d[w[u+1]]
r=d[w[u+2]]
if(t===s||s===r||t===r)continue
q.K(0,A.h0l(t,s,r))}return q.a},
$S:1787}
A.bOm.prototype={
$2(d,e){var w,v,u,t=this.a,s=this.b.h(0,d)
s.toString
w=J.a5(e)
v=D.k.V(w.h(e,0)/w.h(e,3))
u=D.k.V(w.h(e,1)/w.h(e,3))
w=D.k.V(w.h(e,2)/w.h(e,3))
t.$flags&2&&C.ai(t)
t[s]=(v<<16|u<<8|w|4278190080)>>>0},
$S:1788}
A.bOj.prototype={
$0(){return new Float64Array(this.a*16)},
$S:703}
A.bOk.prototype={
$1(a1){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=l.b,j=l.c,i=l.d,h=l.e,g=a1*4,f=j[g],e=j[g+1],d=j[g+2],a0=j[g+3]
g=a1*3
w=i[g]
j=g+1
v=i[j]
u=g+2
t=i[u]
i=e*e
s=d*d
h.$flags&2&&C.ai(h)
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
if(n<0)D.o1.hd(k,j,j+16,h)
else A.h0m(k,n*16,h,0,k,j)
k=u.f
k===$&&C.c()
k=k[a1]
j=k.length
m=0
for(;m<k.length;k.length===j||(0,C.L)(k),++m)l.$1(k[m])},
$S:26}
A.bOs.prototype={
$1(d){var w,v,u
for(w=this.a.z,w=new C.hG(w,w.r,w.e);w.C();){v=w.d
u=v.toLowerCase()
if(C.cU(u,d,0))return v}return null},
$S:279}
A.bOq.prototype={
$1(d){return!D.a.t(d.toLowerCase(),"pose")},
$S:3}
A.bOr.prototype={
$0(){var w=this.a.z
return new C.cu(w,C.a3(w).k("cu<1>")).gL(0)},
$S:22}
A.bOu.prototype={
$1(d){var w=this,v=w.c,u=d*3,t=w.a,s=w.d,r=(v[u]-t.b)*s,q=v[u+1],p=w.b.ay,o=(v[u+2]-t.a)*s
t=w.e
u=w.f
return new A.E(r*t+o*u+w.r,(q-p)*s,-r*u+o*t+w.w)},
$S:z+16}
A.bHm.prototype={
$1(d){return!d.f},
$S:z+20}
A.bHj.prototype={
$1(d){return d.b===this.a.a.a},
$S:z+17}
A.bHk.prototype={
$1(d){return d.b===this.a&&d.c===this.b},
$S:z+17}
A.bHl.prototype={
$1(d){return d.a<0},
$S:z+21}
A.bHn.prototype={
$1(d){return d.b===this.a.a.a},
$S:z+17}
A.bHp.prototype={
$1(d){var w=d.c
return w==="bathroom"||w==="kitchen"},
$S:z+7}
A.dKa.prototype={
$0(){return this.b.d=this.a.a},
$S:0}
A.dKb.prototype={
$1(d){return this.a.c31()},
$S:13}
A.dKn.prototype={
$0(){},
$S:0}
A.dKh.prototype={
$0(){return this.a.w=this.b},
$S:0}
A.dKi.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new A.dKg(w))},
$S:0}
A.dKg.prototype={
$0(){return this.a.w=null},
$S:0}
A.dK6.prototype={
$1(d){return B.aDX},
$S:z+22}
A.dK7.prototype={
$0(){},
$S:0}
A.dKq.prototype={
$1(d){return B.aDX},
$S:z+22}
A.dKr.prototype={
$0(){},
$S:0}
A.dKp.prototype={
$0(){var w=this.a
return w.m(new A.dKo(w,this.b))},
$S:0}
A.dKo.prototype={
$0(){return this.a.r=this.b},
$S:0}
A.dK5.prototype={
$0(){return this.a.aal(this.b)},
$S:0}
A.dKc.prototype={
$0(){return this.a.Ij(this.b.bbJ(this.c))},
$S:0}
A.dKd.prototype={
$0(){return this.a.Ij(this.b.aIw(this.c))},
$S:0}
A.dKe.prototype={
$0(){return this.a.Ij(this.b.b8g(this.c))},
$S:0}
A.dKf.prototype={
$0(){return this.a.air(this.b)},
$S:0}
A.dK9.prototype={
$1(d){var w,v,u=null,t=this.b,s=this.c,r=t.e[s],q=t.c
q===$&&C.c()
q=q[r.a].a
w=this.a
v=x.p
s=C.A(C.a([new A.abv(q.e,44,u),D.av,C.D(C.d("Bed "+(s+1)+": "+q.b,u,u,u,u,u,u,D.i3,u,u,u),1),w.OS("\ud83d\udc89 Treat",new A.dK8(w,t,s),D.ci)],v),D.m,u,D.e,D.j,0,u,u)
t=r.b
return C.v(C.a([s,D.O,w.Vq("Care",t,t<30?D.ay:D.aT),w.Vq("Getting better",r.c,D.b7)],v),D.F,u,D.e,D.j,0,D.p)},
$S:327}
A.dK8.prototype={
$0(){return this.a.Ij(this.b.cSI(this.c))},
$S:0}
A.dKk.prototype={
$0(){return this.a.Ij(this.b.b98("food"))},
$S:0}
A.dKl.prototype={
$0(){return this.a.Ij(this.b.b98("medicine"))},
$S:0}
A.dKm.prototype={
$0(){var w=0,v=C.j(x.H),u,t=this,s,r
var $async$$0=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:w=3
return C.b(A.aRv(),$async$$0)
case 3:$.Hh=null
s=t.a
if(s.c==null){w=1
break}r=s.f
if(r!=null)r.a8(0)
$.fMJ=null
s.m(new A.dKj(s))
s.YI()
case 1:return C.h(u,v)}})
return C.i($async$$0,v)},
$S:1}
A.dKj.prototype={
$0(){return this.a.d=null},
$S:0}
A.dKs.prototype={
$0(){return C.a6(this.a,!1).lN()},
$S:0}
A.dKt.prototype={
$1(d){return d.a>=0},
$S:z+21}
A.fp_.prototype={
$2(d,e){var w
A:{if("black"===d){w=e.a===25?"The black wire carries the power (hot). It never goes on the green ground screw. Hot goes to a BRASS screw.":"The black (hot) wire goes on a BRASS screw, not on the silver one. Silver is for white (neutral)."
break A}if("white"===d){w=e.a===25?"The white wire is the neutral. The green screw is only for the ground wire. Neutral goes to a SILVER screw.":"The white (neutral) wire goes on a SILVER screw, not on brass. Brass is for the black (hot) wire."
break A}w="The bare copper ground wire only goes on the GREEN screw. It keeps you safe if something goes wrong."
break A}return w},
$S:z+10}
A.fp0.prototype={
$2(d,e){return d==="ground"?y.j:"A black (hot) wire never goes on the green ground screw. The two black wires go on the two BRASS screws."},
$S:z+10}
A.fp1.prototype={
$2(d,e){var w
if(e.e)w="Those are the LOAD screws. They are covered with tape because power must come in on the LINE side. If you wire the LOAD side the GFCI will not protect you."
else A:{if("black"===d){w="The black (hot) wire goes on the BRASS LINE screw."
break A}if("white"===d){w="The white (neutral) wire goes on the SILVER LINE screw."
break A}w=y.j
break A}return w},
$S:z+10}
A.fp2.prototype={
$2(d,e){var w
A:{if("black"===d){w="The black (hot) wire joins the fixture BLACK wire. Not the white one, and never the green ground."
break A}if("white"===d){w="The white (neutral) wire joins the fixture WHITE wire. Not the black one, and never the green ground."
break A}w="The bare copper ground wire joins the fixture GREEN ground wire only."
break A}return w},
$S:z+10}
A.fp3.prototype={
$2(d,e){var w
A:{if("black"===d){w="The black (hot) wire joins the fan BLACK wire. Not the white one, and never the green ground."
break A}if("white"===d){w="The white (neutral) wire joins the fan WHITE wire. Not the black one, and never the green ground."
break A}w="The bare copper ground wire joins the fan GREEN ground wire only."
break A}return w},
$S:z+10}
A.fnR.prototype={
$1(d){return d.a===this.a},
$S:z+29}
A.fLj.prototype={
$1(d){return d.a},
$S:z+30}
A.fnX.prototype={
$1(d){return D.d.iC(this.a.f,new A.fnY(d)).f},
$S:77}
A.fnY.prototype={
$1(d){return d.a===this.a},
$S:z+11}
A.fnV.prototype={
$1(d){return D.d.iC(this.a.e,new A.fnW(d)).e},
$S:14}
A.fnW.prototype={
$1(d){return d.a===this.a},
$S:z+12}
A.fnT.prototype={
$1(d){return d.e==="hot"},
$S:z+12}
A.fnU.prototype={
$1(d){return d.e==="neutral"},
$S:z+12}
A.flV.prototype={
$5(d,e,f,g,h){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=j.a
i.b=d
w=j.b
v=w.b
u=C.a3(v).k("cK<1,2>")
t=u.k("a2<J.E>")
s=C.B(new C.a2(new C.cK(v,u),new A.flW(g),t),t.k("J.E"))
r=g==="ground"
q=r?B.x1:h
p=r?0.6:0.3
if(w.c>0){o=e.ad(0,B.fEE)
i.jT(A.agJ(C.a([e,e.ad(0,B.fDe),o],x.o),4),0.085,q,!1,p,8)
return}if(s.length!==0){n=A.bzT(j.c,D.d.gL(s).a,w)
w=A.zH(e,n,0.5)
v=n.a>0
m=w.ad(0,new A.E(v?0.5:-0.5,0.2,0.9))
w=e.ad(0,B.fHb)
if(j.d)v=0
else v=v?0.06:-0.06
l=A.agJ(C.a([e,w,m,n.ad(0,new A.E(v,0,0.08)),n],x.o),5)
k=D.d.dq(l,0,D.k.bu(l.length*0.8))
i.jT(k,0.085,q,!1,p,8)
if(!r)i.jT(D.d.fJ(l,k.length-1),0.061200000000000004,B.x1,!1,0.6,8)}else{l=A.agJ(C.a([e,e.ad(0,B.fAW),A.zH(e,f,0.6),f],x.o),5)
k=r?l:D.d.dq(l,0,D.k.bu(l.length*0.86))
i.jT(k,0.085,q,!1,p,8)
if(!r)i.jT(D.d.fJ(l,k.length-1),0.061200000000000004,B.x1,!1,0.6,8)}},
$S:z+39}
A.flW.prototype={
$1(d){return d.b===this.a},
$S:1790}
A.f83.prototype={
$2(d,e){var w,v=this.a
v.b=d
w=A.Gh(e,0.9,6)
if(this.b)v.jT(w,0.2,B.Wg,!1,0.35,10)
this.c.push(D.d.gal(w))},
$S:z+45}
A.f9n.prototype={
$6$taped(d,e,f,g,h,i){var w,v,u,t=this.a
t.e=0.9
t.b=d
w=this.b
v=w.a+e*0.75
u=w.b+f
w=w.c-0.45
t.bJ(new A.E(v,u,w),B.fIc,h,0.7)
t.e5(new A.E(v,u,w),new A.E(v+e*0.22,u,w),0.17,g,0.9,12)
t.bO(new A.E(v+e*0.23,u,w),B.fGg,B.E1)
if(i)t.bJ(new A.E(v+e*0.05,u,w),B.fG6,D.co,0.2)},
$5(d,e,f,g,h){return this.$6$taped(d,e,f,g,h,!1)},
$S:1791}
A.flK.prototype={
$1(d){return d.a===this.a},
$S:z+18}
A.flL.prototype={
$0(){return B.aiE},
$S:z+55}
A.fLi.prototype={
$1(d){var w=d>60?62:99
return Math.min(d*0.5625,w)},
$S:5}
A.fLf.prototype={
$1(d){return d>40?30+d/2:58},
$S:5}
A.fLg.prototype={
$2(d,e){return D.k.aL(d.a,e.a)},
$S:1792}
A.fLh.prototype={
$2(d,e){var w=this.a
if(e-d>w.a-w.b){w.b=d
w.a=e}},
$S:441}
A.bOZ.prototype={
$1(d){return d},
$S:142}
A.bPA.prototype={
$1(d){return d.a==="Jobs"},
$S:z+56}
A.bPB.prototype={
$1(d){return new A.nv("back",d,5)},
$S:z+27}
A.bPF.prototype={
$1(d){return d.gjz()},
$S:z+7}
A.bPE.prototype={
$1(d){var w=d.c
return(w==="bathroom"||w==="kitchen")&&d.gl3()},
$S:z+7}
A.bPD.prototype={
$1(d){var w=d.c
return w==="bathroom"||w==="kitchen"},
$S:z+7}
A.bPC.prototype={
$1(d){return d.gjz()&&d.gl3()},
$S:z+7}
A.e2s.prototype={
$1(d){return!(d.gjz()&&d.gl3())},
$S:z+7}
A.e2p.prototype={
$1(d){var w,v=this.a.a.f
A:{if("wiring"===v){w=!d.gjz()
break A}if("plumbing"===v){w=!d.gl3()
break A}w=!(d.gjz()&&d.gl3())
break A}return w},
$S:z+7}
A.e2q.prototype={
$1(d){var w,v=this.a,u=v.ga2G()
if(u==null||v.c==null||v.cx!=null)return
v.m(v.gDL())
w=u.f
if(w.length!==0&&D.d.gL(w)!==v.fy){w=D.d.gL(w)
v.fy=w
v.k9(w)}},
$S:13}
A.e2r.prototype={
$1(d){var w,v=this.a
if(v.c==null)return
w=v.d
w===$&&C.c()
if(w.a.length!==0)v.k9(v.bYk())
else{w=v.a.f
if(w.length!==0){A:{if("wiring"===w){w="This room needs wiring: press the Wiring button, or tap the red outlet or the light."
break A}if("plumbing"===w){w="This room needs plumbing: press the Plumbing button, or tap the toilet or the sink."
break A}w="Walk through the house and fix what the signs say is wrong."
break A}v.k9(w)}}},
$S:8}
A.e1O.prototype={
$0(){var w=this.a
w.ax=this.b
w.ay=this.c},
$S:0}
A.e1P.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new A.e1N(w))},
$S:0}
A.e1N.prototype={
$0(){return this.a.ax=null},
$S:0}
A.e1Q.prototype={
$0(){var w=this.a
w.r=this.b
w.Q=0
w.as=-1
w.at=0
w.jg()},
$S:0}
A.e1d.prototype={
$0(){var w=this.a,v=w.d
v===$&&C.c()
v.e=this.b
w.Q=0
w.as=-1
w.at=0
w.ax=null
w.jg()},
$S:0}
A.e1Y.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&C.c()
w=u.d
w===$&&C.c()
u=w[u.e]
u.db=!u.db
v.jg()},
$S:0}
A.e1n.prototype={
$0(){var w=this.a,v=this.b
w.Q=v-100
w.at=v
w.jg()},
$S:0}
A.e1o.prototype={
$0(){var w=this.a,v=this.b
w.as=v-300
w.at=v},
$S:0}
A.e1p.prototype={
$0(){var w,v,u=this.a,t=u.d
t===$&&C.c()
w=t.d
w===$&&C.c()
v=this.b
if(!w[t.e].at.W(0,v)){t=u.d
w=t.d
w===$&&C.c()
w[t.e].at.K(0,v)}u.jg()},
$S:0}
A.e1q.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&C.c()
w=u.d
w===$&&C.c()
w[u.e].fy=!0
v.jg()},
$S:0}
A.e1c.prototype={
$1(d){var w,v,u,t,s,r=this,q=null,p=C.d("Door to "+r.b,q,q,q,q,q,q,D.ds,q,q,q),o=r.a,n=o.d
n===$&&C.c()
w=n.d
w===$&&C.c()
v=r.c
u=C.d(w[n.e].at.t(0,v)?"The door is open.":"The door is closed.",q,q,q,q,q,q,D.kZ,q,q,q)
n=o.d
w=n.d
w===$&&C.c()
t=C.W(w[n.e].at.t(0,v)?B.bA4:B.bAg,q,q,q,q,q)
n=o.d
w=n.d
w===$&&C.c()
s=x.p
return C.bn(!0,new C.C(D.bV,C.v(C.a([p,D.at,u,D.ac,C.bY(D.bz,C.a([C.dp(t,C.d(w[n.e].at.t(0,v)?"Close the door":"Open the door",q,q,q,q,q,q,q,q,q,q),new A.e1a(o,d,v),q),C.ex(B.bGD,B.feZ,new A.e1b(o,d,v,r.d),q)],s),D.br,10,10)],s),D.F,q,D.e,D.Q,0,D.p),q),!0,!1,D.af,!0,!0)},
$S:28}
A.e1a.prototype={
$0(){var w,v,u
C.a6(this.b,!1).O(null)
w=this.a
v=this.c
w.m(new A.e19(w,v))
w=w.d
w===$&&C.c()
u=w.d
u===$&&C.c()
A.lL(u[w.e].at.t(0,v)?700:450,70,0.25,"tri")},
$S:0}
A.e19.prototype={
$0(){var w,v,u=this.a,t=u.d
t===$&&C.c()
w=t.d
w===$&&C.c()
v=this.b
if(!w[t.e].at.W(0,v)){t=u.d
w=t.d
w===$&&C.c()
w[t.e].at.K(0,v)}u.jg()},
$S:0}
A.e1b.prototype={
$0(){var w,v,u=this
C.a6(u.b,!1).O(null)
w=u.a
v=u.c
w.m(new A.e17(w,v))
A.lL(700,70,0.25,"tri")
C.bN(D.n0,new A.e18(w,v,u.d),x.P)},
$S:0}
A.e17.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&C.c()
w=u.d
w===$&&C.c()
w[u.e].at.K(0,this.b)
v.jg()},
$S:0}
A.e18.prototype={
$0(){var w=this.a
if(w.c==null)return
w.m(new A.e16(w,this.b))
w.DJ(this.c)},
$S:11}
A.e16.prototype={
$0(){var w,v=this.a.d
v===$&&C.c()
w=v.d
w===$&&C.c()
return w[v.e].at.W(0,this.b)},
$S:0}
A.e0P.prototype={
$1(d){var w=null
return C.bw(D.qq,new C.a7(w,C.aI(d,w,x.w).w.a.b*0.82,new A.a5X(this.a,w),w),D.aq)},
$S:1793}
A.e0Q.prototype={
$0(){var w=this.a
w.axF()
w.jg()},
$S:0}
A.e1M.prototype={
$1(d){return new C.e0(new A.e1K(this.a,this.b,this.c),null)},
$S:20}
A.e1K.prototype={
$2(d,e){var w,v,u,t,s=null,r=new A.e1L(this.a,e),q=this.b,p=q.a,o=C.d(p.b+" "+q.gaBz(0),s,s,s,s,s,s,L.rA,s,s,s)
p=C.d(p.f,s,s,s,s,s,s,D.D2,s,s,s)
w=C.d("Now: "+q.gTg()+"\nFood "+D.k.V(100-q.b)+"%   Health "+D.k.V(q.c)+"%   Home "+D.k.V(q.d)+"%",s,s,s,s,s,s,B.aP6,s,s,s)
v=this.c
u=x.p
t=C.a([r.$2("\ud83c\udf5e Feed",new A.e1H(v,q))],u)
if(q.e)t.push(r.$3$col("\ud83d\udc8a Medicine",new A.e1I(v,q),D.by))
if(q.e||q.c<60)t.push(r.$3$col("\ud83c\udfe5 Hospital",new A.e1J(v,q),D.ci))
return C.bn(!0,new C.C(D.bV,C.v(C.a([o,p,D.O,w,D.ac,C.bY(D.bz,t,D.br,8,8)],u),D.F,s,D.e,D.Q,0,D.p),s),!0,!1,D.af,!0,!0)},
$S:83}
A.e1L.prototype={
$3$col(d,e,f){var w=null,v=f.j(0.22),u=C.m(12),t=C.I(f,D.q,1)
return C.aE(w,C.p(w,C.d(d,w,w,w,w,w,w,C.l(w,w,f,w,w,w,w,w,w,w,w,13,w,w,D.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),D.f,w,w,new C.o(v,w,t,u,w,w,D.n),w,w,w,w,P.AM,w,w,w),D.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new A.e1G(this.a,e,this.b),w,w,w,w,w,w,!1,D.a8)},
$2(d,e){return this.$3$col(d,e,D.aH)},
$S:1794}
A.e1G.prototype={
$0(){var w,v=this.b.$0()
this.c.$1(new A.e1F())
w=this.a
w.m(w.gDL())
w.k9(v)},
$S:0}
A.e1F.prototype={
$0(){},
$S:0}
A.e1H.prototype={
$0(){return this.a.bbJ(this.b)},
$S:22}
A.e1I.prototype={
$0(){return this.a.aIw(this.b)},
$S:22}
A.e1J.prototype={
$0(){return this.a.b8g(this.b)},
$S:22}
A.e1w.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m=null,l=x.p,k=C.a([],l)
for(w=D.d.gae(B.a13),v=new C.fk(w,new A.e1t()),u=this.a,t=this.b;v.C();){s=w.gS(0)
r=D.c.j(0.08)
q=new C.aW(12,12)
p=u.d
p===$&&C.c()
o=p.d
o===$&&C.c()
n=new C.aA(o[p.e].cy.h(0,t)===s.a?D.aH:D.b2,1,D.q,-1)
k.push(C.aE(m,C.p(m,new C.x(s.c+" "+s.b,m,D.Tf,m,m,m,m,m,m,m,m,m),D.f,m,m,new C.o(r,m,new C.bP(n,n,n,n),new C.bq(q,q,q,q),m,m,D.n),m,m,m,m,D.ei,m,m,m),D.y,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new A.e1u(u,d,t,s),m,m,m,m,m,m,!1,D.a8))}w=u.d
w===$&&C.c()
v=w.d
v===$&&C.c()
if(v[w.e].cy.h(0,t)!=null)k.push(C.aE(m,C.p(m,B.fnw,D.f,m,m,new C.o(D.er,m,m,C.m(12),m,m,D.n),m,m,m,m,D.ei,m,m,m),D.y,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new A.e1v(u,d,t),m,m,m,m,m,m,!1,D.a8))
return C.bn(!0,new C.C(D.bV,C.v(C.a([B.fjO,D.S,C.bY(D.bz,k,D.br,8,8)],l),D.F,m,D.e,D.Q,0,D.p),m),!0,!1,D.af,!0,!0)},
$S:28}
A.e1t.prototype={
$1(d){return!(d.d>70||d.e)},
$S:z+18}
A.e1u.prototype={
$0(){var w,v,u,t=this
C.a6(t.b,!1).O(null)
w=t.a
v=t.d
w.m(new A.e1s(w,t.c,v))
u=v.d>0||v.e
v=v.b
w.k9(u?v+" is on and playing NGMY ads. Tap it to watch full screen.":v+" is plugged in and running.")
A.lL(820,70,0.25,"tri")},
$S:0}
A.e1s.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&C.c()
w=u.d
w===$&&C.c()
w[u.e].cy.n(0,this.b,this.c.a)
v.jg()},
$S:0}
A.e1v.prototype={
$0(){C.a6(this.b,!1).O(null)
var w=this.a
w.m(new A.e1r(w,this.c))
w.k9("Unplugged.")},
$S:0}
A.e1r.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&C.c()
w=u.d
w===$&&C.c()
w[u.e].cy.W(0,this.b)
v.jg()},
$S:0}
A.e2k.prototype={
$1(d){return new C.e0(new A.e2i(this.a),null)},
$S:20}
A.e2i.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o=null,n=this.a,m=new A.e2j(n,e),l=n.d
l===$&&C.c()
w=l.d
w===$&&C.c()
l=C.d("TV in "+w[l.e].b,o,o,o,o,o,o,D.ds,o,o,o)
w=x.p
v=C.a([],w)
for(u=D.d.gae(B.a13),t=new C.fk(u,new A.e2c());t.C();){s=u.gS(0)
r=s.b
q=n.d
p=q.d
p===$&&C.c()
q=p[q.e].fr===s.a?D.aH:D.fh
v.push(m.$3$color(r,new A.e2d(n,s),q))}v=C.bY(D.bz,v,D.br,8,8)
u=C.a([],w)
t=n.d
s=t.d
s===$&&C.c()
t=s[t.e]
if(t.fr!=null){t=t.fy?"\u23fb Turn this TV off":"\u23fb Turn this TV on"
u.push(m.$2(t,new A.e2e(n)))}t=n.d
s=t.d
s===$&&C.c()
if(s[t.e].fr!=null&&t.a.length===0)u.push(m.$3$color("\ud83d\uddd1 Take it down",new A.e2f(n),D.er))
if(n.d.a.length===0)u.push(m.$3$color("\ud83d\udcfa A TV in every room, all on",new A.e2g(n),D.d_))
if(n.d.a.length===0)u.push(m.$3$color("\u23fb All TVs off",new A.e2h(n),D.bn))
return C.bn(!0,new C.C(D.bV,C.v(C.a([l,D.S,v,D.S,C.bY(D.bz,u,D.br,8,8)],w),D.F,o,D.e,D.Q,0,D.p),o),!0,!1,D.af,!0,!0)},
$S:83}
A.e2j.prototype={
$3$color(d,e,f){var w=null,v=f.j(0.4),u=C.m(12),t=C.I(f,D.q,1)
return C.aE(w,C.p(w,C.d(d,w,w,w,w,w,w,K.zj,w,w,w),D.f,w,w,new C.o(v,w,t,u,w,w,D.n),w,w,w,w,P.AM,w,w,w),D.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new A.e2b(this.a,e,this.b),w,w,w,w,w,w,!1,D.a8)},
$2(d,e){return this.$3$color(d,e,D.fh)},
$S:1795}
A.e2b.prototype={
$0(){this.b.$0()
this.c.$1(new A.e2a())
var w=this.a
w.m(w.gDL())},
$S:0}
A.e2a.prototype={
$0(){},
$S:0}
A.e2c.prototype={
$1(d){return d.d>0||d.e},
$S:z+18}
A.e2d.prototype={
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
A.e2e.prototype={
$0(){var w,v=this.a.d
v===$&&C.c()
w=v.d
w===$&&C.c()
v=w[v.e]
return v.fy=!v.fy},
$S:0}
A.e2f.prototype={
$0(){var w,v=this.a.d
v===$&&C.c()
w=v.d
w===$&&C.c()
v=w[v.e]
v.fr=null
v.fy=!1},
$S:0}
A.e2g.prototype={
$0(){var w,v,u,t=this.a.d
t===$&&C.c()
t=t.gqq()
w=t.length
v=0
for(;v<w;++v){u=t[v]
if(u.fr==null)u.fr="tv100"
if(u.c==="hall")if(u.fx==null)u.fx="tv100"
u.fy=!0}},
$S:0}
A.e2h.prototype={
$0(){var w,v,u=this.a.d
u===$&&C.c()
u=u.gqq()
w=u.length
v=0
for(;v<w;++v)u[v].fy=!1},
$S:0}
A.e27.prototype={
$1(d){return new C.e0(new A.e26(this.a),null)},
$S:20}
A.e26.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m=null,l=x.p,k=C.a([],l)
for(w=B.aCO.gdK(B.aCO),w=w.gae(w),v=this.a;w.C();){u=w.gS(w)
t=$.bB2
s=u.a
t=t===s?D.aT.j(0.25):D.c.j(0.07)
r=new C.aW(12,12)
s=$.bB2===s
q=s?D.aT:D.b2
p=new C.aA(q,s?2:1,D.q,-1)
q=u.b
s=s?D.aT:D.c
k.push(C.aE(m,C.p(m,new C.x(q,m,new C.G(!0,s,m,m,m,m,13,D.u,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m,m,m,m,m,m,m,m,m),D.f,m,m,new C.o(t,m,new C.bP(p,p,p,p),new C.bq(r,r,r,r),m,m,D.n),m,m,m,m,D.ix,m,m,m),D.y,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new A.e22(v,e,u),m,m,m,m,m,m,!1,D.a8))}k=C.bY(D.bz,k,D.br,8,8)
w=C.a([],l)
for(o=0;o<5;++o){n=B.dce[o]
u=v.db===n?D.aH.j(0.25):D.c.j(0.07)
t=new C.aW(12,12)
s=v.db===n
r=s?D.aH:D.b2
p=new C.aA(r,s?2:1,D.q,-1)
if(n<60)r=""+n+" seconds"
else r=n===60?"1 minute":""+(n/60|0)+" minutes"
s=s?D.aH:D.c
w.push(C.aE(m,C.p(m,new C.x(r,m,new C.G(!0,s,m,m,m,m,13,D.u,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m,m,m,m,m,m,m,m,m),D.f,m,m,new C.o(u,m,new C.bP(p,p,p,p),new C.bq(t,t,t,t),m,m,D.n),m,m,m,m,D.ix,m,m,m),D.y,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new A.e23(v,e,n),m,m,m,m,m,m,!1,D.a8))}return C.bn(!0,new C.C(D.bV,C.v(C.a([B.fpB,D.at,B.fu0,D.S,B.fmK,D.an,k,D.ac,C.bY(D.bz,w,D.br,8,8),D.aA,C.dp(A8.alB,B.faN,new A.e24(v,d),m),D.O,C.ex(B.bNZ,B.fhv,new A.e25(v,d),m)],l),D.F,m,D.e,D.Q,0,D.p),m),!0,!1,D.af,!0,!0)},
$S:83}
A.e22.prototype={
$0(){var w=this.c
this.b.$1(new A.e20(w))
A.fNr(w.a)
this.a.m(new A.e21())},
$S:0}
A.e20.prototype={
$0(){return $.bB2=this.a.a},
$S:0}
A.e21.prototype={
$0(){},
$S:0}
A.e23.prototype={
$0(){return this.b.$1(new A.e2_(this.a,this.c))},
$S:0}
A.e2_.prototype={
$0(){return this.a.db=this.b},
$S:0}
A.e24.prototype={
$0(){C.a6(this.b,!1).O(null)
var w=this.a
w.cts(w.db)},
$S:0}
A.e25.prototype={
$0(){C.a6(this.b,!1).O(null)
this.a.b4w(45,!0)},
$S:0}
A.e1T.prototype={
$0(){var w=this.a,v=w.d
v===$&&C.c()
v.e=this.b
w.ax=null
w.jg()},
$S:0}
A.e1U.prototype={
$1(d){return this.a.cxE()},
$S:13}
A.e1V.prototype={
$0(){},
$S:0}
A.e28.prototype={
$0(){return this.a.dy=this.b.y},
$S:0}
A.e1Z.prototype={
$0(){var w=this.b
w.jg()
w.k2=this.a.a;++w.k3},
$S:0}
A.e1X.prototype={
$0(){var w=this.a
w.cx=null
w.dy=""},
$S:0}
A.e1R.prototype={
$1(d){return this.a.cAc()},
$S:13}
A.e1S.prototype={
$0(){},
$S:0}
A.e1W.prototype={
$0(){},
$S:0}
A.e1j.prototype={
$3(d,e,f){var w=null,v=this.a,u=D.w.j(0.6),t=C.m(16),s=C.I(D.b7,D.q,1.6)
return C.o8(D.jf,C.p(w,C.W(d,D.c,w,w,w,28),D.f,w,w,new C.o(u,w,s,t,w,w,D.n),w,58,w,D.h7,w,w,w,58),w,new A.e1k(v),new A.e1l(v,e,f),w,w,w,w,new A.e1m(v))},
$S:1796}
A.e1l.prototype={
$1(d){var w=this.a
w.p2=this.b
w.p3=this.c},
$S:82}
A.e1m.prototype={
$1(d){var w=this.a
w.p3=w.p2=0},
$S:136}
A.e1k.prototype={
$1(d){var w=this.a
w.p3=w.p2=0},
$S:184}
A.e1f.prototype={
$1(d){var w=this.a,v=w.id
w=w.k2
return v==="ptrap"?new A.a8r(w,null):new A.a3R(w,null)},
$S:1797}
A.e1g.prototype={
$1(d){var w=this.a
return new A.GX(w.id,w.k1,null)},
$S:z+23}
A.e2l.prototype={
$1(d){var w=this.a
return new A.GX(w.a,w.c,null)},
$S:z+23}
A.e1i.prototype={
$1(d){return A.fPH(!1,this.a.CW,!1)},
$S:z+31}
A.e1h.prototype={
$1(d){return new A.V7(this.a.cx,null)},
$S:z+32}
A.e0i.prototype={
$1(d){var w,v,u,t,s,r,q,p=null,o=this.a,n=o.d
n===$&&C.c()
w=n.d
w===$&&C.c()
n=C.d("Add to "+w[n.e].b,p,p,p,p,p,p,D.ds,p,p,p)
w=x.p
v=C.a([],w)
for(u=0;u<3;++u){t={}
s=B.ddJ[u]
t.a=null
t.a=s.a
r=new C.aW(12,12)
q=new C.aA(D.b1,1,D.q,-1)
v.push(C.aE(p,C.p(p,new C.x(s.b,p,D.rD,p,p,p,p,p,p,p,p,p),D.f,p,p,new C.o(D.fh.j(0.4),p,new C.bP(q,q,q,q),new C.bq(r,r,r,r),p,p,D.n),p,p,p,p,P.AM,p,p,p),D.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new A.e0h(t,o,d),p,p,p,p,p,p,!1,D.a8))}return C.bn(!0,new C.C(D.bV,C.v(C.a([n,D.at,B.frO,D.ac,C.bY(D.bz,v,D.br,8,8)],w),D.F,p,D.e,D.Q,0,D.p),p),!0,!1,D.af,!0,!0)},
$S:28}
A.e0h.prototype={
$0(){C.a6(this.c,!1).O(null)
this.b.bxp(this.a.a)},
$S:0}
A.e0c.prototype={
$1(d){return d.a==="back"},
$S:z+14}
A.e0d.prototype={
$1(d){return d.a==="back"},
$S:z+14}
A.e0e.prototype={
$1(d){return Math.abs(d-this.a)>13},
$S:125}
A.e0f.prototype={
$0(){var w=this
w.b.dy.push(new A.aTO(w.c,w.d,new A.XF(C.T(x.S,x.N))))
w.a.jg()},
$S:0}
A.e1e.prototype={
$0(){var w,v=this,u=v.b,t=u.c,s=v.c,r=v.d
u.c=t+(s?D.o.gUH(r)*40:r)
t=u.d
r=v.e
u.d=t+(s?D.o.gUH(r)*40:r)
t=v.a
r=t.d
r===$&&C.c()
w=r.d
w===$&&C.c()
w[r.e].aBY(0,u)
t.jg()},
$S:0}
A.e29.prototype={
$0(){var w,v,u,t=this.b
t.e=(t.e+1)%4
w=this.a
v=w.d
v===$&&C.c()
u=v.d
u===$&&C.c()
u[v.e].aBY(0,t)
w.jg()},
$S:0}
A.e1D.prototype={
$0(){var w=this.b
w.f=(w.f+1)%6
this.a.jg()},
$S:0}
A.e1E.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&C.c()
w=u.d
w===$&&C.c()
D.d.W(w[u.e].x,this.b)
v.at=v.Q=0
v.jg()},
$S:0}
A.e0g.prototype={
$0(){var w=this.a,v=this.b.a
w.Q=v
w.at=100+v
w.jg()},
$S:0}
A.e0W.prototype={
$0(){return this.a.acK(-6,0)},
$S:0}
A.e0X.prototype={
$0(){return this.a.acK(6,0)},
$S:0}
A.e0Y.prototype={
$0(){return this.a.acK(0,-6)},
$S:0}
A.e0Z.prototype={
$0(){return this.a.acK(0,6)},
$S:0}
A.e1_.prototype={
$0(){return this.a.bxs(this.b.a)},
$S:0}
A.e10.prototype={
$0(){var w=this.a
return w.m(new A.e0V(w))},
$S:0}
A.e0V.prototype={
$0(){return this.a.as=-1},
$S:0}
A.e11.prototype={
$0(){var w=this.a
w.m(new A.e0U(w,this.b))},
$S:0}
A.e0U.prototype={
$0(){var w,v=this.a,u=v.as,t=this.b,s=v.d
if(u<0){s===$&&C.c()
u=s.d
u===$&&C.c()
D.d.fZ(u[s.e].z,0,3,t)}else{s===$&&C.c()
w=s.d
w===$&&C.c()
w[s.e].z[u]=t}v.jg()},
$S:0}
A.e12.prototype={
$0(){var w=this.a
w.m(new A.e0T(w,this.b))},
$S:0}
A.e0T.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&C.c()
w=u.d
w===$&&C.c()
w[u.e].Q=this.b
v.jg()},
$S:0}
A.e13.prototype={
$0(){var w=this.a
w.m(new A.e0S(w))},
$S:0}
A.e0S.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&C.c()
w=u.d
w===$&&C.c()
u=w[u.e]
u.dx=u.dx==="fan"?"light":"fan"
v.jg()},
$S:0}
A.e14.prototype={
$0(){var w=this.a
w.m(new A.e0R(w,this.b))},
$S:0}
A.e0R.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&C.c()
w=u.d
w===$&&C.c()
w[u.e].as=this.b
v.jg()},
$S:0}
A.e15.prototype={
$0(){return this.a.DJ(this.b.c)},
$S:0}
A.e2o.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new A.e2m(w))},
$S:0}
A.e2m.prototype={
$0(){return this.a.k2=null},
$S:0}
A.e2n.prototype={
$3(d,e,f){var w=null
return C.dc(C.chB(D.A,w,w,w,w,D.cl,D.wz,w,this.a.k2,!1,!1,!1,w,D.oJ,1,w),e)},
$S:102}
A.e0J.prototype={
$0(){return this.a.zB("calls")},
$S:0}
A.e0K.prototype={
$0(){return this.a.zB("hospital")},
$S:0}
A.e0L.prototype={
$0(){return this.a.zB("shop")},
$S:0}
A.e0M.prototype={
$0(){return this.a.zB("people")},
$S:0}
A.e0N.prototype={
$0(){return this.a.DJ(10)},
$S:0}
A.e0O.prototype={
$0(){var w=this.a
return w.m(new A.e0I(w))},
$S:0}
A.e0I.prototype={
$0(){var w=this.a
return w.y=!w.y},
$S:0}
A.e0z.prototype={
$0(){var w=this.a,v=w.d
v===$&&C.c()
return v.a.length!==0?w.DK():w.chX(this.b)},
$S:0}
A.e0r.prototype={
$0(){return this.a.OU()},
$S:0}
A.e0q.prototype={
$1(d){return d<=5},
$S:33}
A.e0p.prototype={
$1(d){var w,v,u,t,s=this.a,r=s.d
r===$&&C.c()
w=r.d
w===$&&C.c()
r=w[r.e]
w=s.CW.gu2()
v=s.cgH()
u=B.dje.h(0,$.bB2)
if(u==null)u=B.a4M
t=s.fr
return A.hVg(r,w/1000,s.r,v,u,t)},
$S:z+8}
A.e0A.prototype={
$0(){var w=this.a
w.m(new A.e0o(w))
w.OU()},
$S:0}
A.e0o.prototype={
$0(){var w=this.a
return w.x=!w.x},
$S:0}
A.e0B.prototype={
$0(){var w=this.a
return w.cx!=null?w.a1q():w.cxD()},
$S:0}
A.e0C.prototype={
$0(){var w=this.a
w.m(new A.e0n(w))
w.OU()
if(w.z)w.k9("Drag to turn all the way round. Double tap a spot on the floor to walk there.")},
$S:0}
A.e0n.prototype={
$0(){var w=this.a,v=!w.z
w.z=v
if(v&&w.cx!=null)w.a1q()
w.jg()},
$S:0}
A.e0D.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&C.c()
w=u.d
w===$&&C.c()
return v.DJ(w[u.e].c!=="outside"?11:10)},
$S:0}
A.e0E.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&C.c()
w=u.d
w===$&&C.c()
if(w[u.e].c!=="outside")v.DJ(11)
v.zB("calls")},
$S:0}
A.e0F.prototype={
$0(){var w=this.a
return w.m(new A.e0m(w))},
$S:0}
A.e0m.prototype={
$0(){var w=this.a,v=!w.w
w.w=v
if(v)w.k9("Voltage tester in your hand: tap an outlet, a switch or the light.")},
$S:0}
A.e0G.prototype={
$0(){var w=this.a
return w.m(new A.e0l(w))},
$S:0}
A.e0l.prototype={
$0(){var w=this.a
return w.y=!w.y},
$S:0}
A.e0H.prototype={
$0(){return this.a.QQ("look")},
$S:0}
A.e0s.prototype={
$0(){return this.a.QQ("furniture")},
$S:0}
A.e0t.prototype={
$0(){return this.a.QQ("walls")},
$S:0}
A.e0u.prototype={
$0(){return this.a.QQ("floor")},
$S:0}
A.e0v.prototype={
$0(){return this.a.QQ("ceiling")},
$S:0}
A.e0w.prototype={
$0(){return this.a.QQ("doors")},
$S:0}
A.e0x.prototype={
$0(){return C.a6(this.a,!1).c8(C.e8(new A.e0k(),!1,null,x.H))},
$S:0}
A.e0k.prototype={
$1(d){return B.aDN},
$S:z+35}
A.e0y.prototype={
$0(){var w=this.a
return w.m(new A.e0j(w))},
$S:0}
A.e0j.prototype={
$0(){var w=this.a.d
w===$&&C.c()
return w.c=!w.c},
$S:0}
A.e1C.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m=null,l=C.aI(d,m,x.w).w,k=this.a,j=k.d
j===$&&C.c()
w=x.p
j=C.a([B.fgu,D.at,C.d("Wiring "+j.gcTd()+"/"+k.d.gqq().length+" \xb7 Plumbing "+k.d.gcQ3()+"/"+k.d.gcQ2(),m,m,m,m,m,m,B.IB,m,m,m),D.S],w)
for(v=k.d.gqq(),u=v.length,t=0;t<v.length;v.length===u||(0,C.L)(v),++t){s=v[t]
r=D.c.j(0.05)
q=new C.aW(12,12)
p=new C.aA(s.gjz()&&s.gl3()?D.b7.j(0.5):D.bF,1,D.q,-1)
if(s.gjz()&&s.gl3())o="\u2705 finished"
else{o=s.gjz()?"":"\u26a1 wiring  "
o+=s.gl3()?"":"\ud83d\udeb0 plumbing"}n=s.gjz()&&s.gl3()?D.es:D.ad
j.push(C.aE(m,C.p(m,new C.cm(D.aO,D.e,D.j,D.m,m,D.p,m,0,C.a([new C.bD(1,D.bi,new C.x(s.b,m,B.f5W,m,m,m,m,m,m,m,m,m),m),new C.x(o,m,new C.G(!0,n,m,m,m,m,12,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m,m,m,m,m,m,m,m,m)],w),m),D.f,m,m,new C.o(r,m,new C.bP(p,p,p,p),new C.bq(q,q,q,q),m,m,D.n),m,m,m,D.eO,D.bS,m,m,m),D.y,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new A.e1z(k,d,s),m,m,m,m,m,m,!1,D.a8))}j.push(D.O)
j.push(C.dV(B.fdD,new A.e1A(k,d),m))
j.push(D.O)
j.push(C.bJ(B.fa1,new A.e1B(k,d),m))
return C.bn(!0,new C.cV(new C.aY(0,1/0,0,l.a.b*0.75),C.cB(j,m,D.bV,m,m,D.ah,!0),m),!0,!1,D.af,!0,!0)},
$S:28}
A.e1z.prototype={
$0(){C.a6(this.b,!1).O(null)
this.a.DJ(this.c.a)},
$S:0}
A.e1A.prototype={
$0(){C.a6(this.b,!1).O(null)
var w=this.a
w.m(new A.e1y(w))
w.k9("Every room needs its wiring and plumbing again. Wire the whole house from the start.")},
$S:0}
A.e1y.prototype={
$0(){var w=this.a,v=w.d
v===$&&C.c()
v.cMK()
w.jg()},
$S:0}
A.e1B.prototype={
$0(){C.a6(this.b,!1).O(null)
$.Hh=A.bPz(D.o.G(Date.now(),1e5))
var w=this.a
w.m(new A.e1x(w))
w.avx(!0)},
$S:0}
A.e1x.prototype={
$0(){var w=this.a,v=$.Hh
v.toString
w.d=v
w.r="look"
w.Q=0
w.as=-1
w.at=0
w.jg()},
$S:0}
A.dmp.prototype={
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
A.ca8.prototype={
$0(){var w=0,v=C.j(x.P),u=1,t=[],s,r,q,p,o,n
var $async$$0=C.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:u=3
w=6
return C.b($.qK().jr(0,"assets/images/ngmy_logo.png"),$async$$0)
case 6:s=e
w=7
return C.b(C.fV4(J.eQ(J.va(s)),null),$async$$0)
case 7:r=e
o=$
n=J
w=8
return C.b(r.lV(),$async$$0)
case 8:o.fPr=n.agZ(e)
u=1
w=5
break
case 3:u=2
p=t.pop()
$.fPr=null
w=5
break
case 2:w=1
break
case 5:return C.h(null,v)
case 1:return C.f(t.at(-1),v)}})
return C.i($async$$0,v)},
$S:50}
A.fm8.prototype={
$2(d,e){return this.a===d?e:0},
$S:704}
A.flY.prototype={
$1(d){return d.a==="right"},
$S:z+14}
A.fm5.prototype={
$0(){var w=C.a([],x.z),v=new A.jf(w)
v.f=1
v.x=$.ml=$.ml+1
v.bO(B.fI6,B.fAg,B.Ai)
v.bJ(B.fy_,B.fDW,B.px,0.5)
v.bO(B.aRj,B.fF6,B.Ai)
v.bO(B.aRj,B.fCl,B.Ai)
return w},
$S:z+36}
A.fm6.prototype={
$1(d){var w=this,v=w.a,u=v.a
A:{if("left"===u){v=A.tS(d,0,1.5707963267948966,new A.E(-w.b/2,0,v.b+w.c/2-40))
break A}if("right"===u){v=A.tS(d,0,-1.5707963267948966,new A.E(w.b/2,0,v.b+w.c/2-40))
break A}v=A.tS(d,0,0,new A.E(v.b,0,0))
break A}return v},
$S:z+37}
A.flZ.prototype={
$1(d){return d.a==="back"},
$S:z+14}
A.fm_.prototype={
$1(d){return d.b},
$S:z+38}
A.fm0.prototype={
$2(d,e){return e},
$S:87}
A.fm1.prototype={
$3(d,e,f){return H.bBE(d,e,0,f+this.a)},
$S:440}
A.fm3.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this
if(d==null)return
w=A.bzu(d)
v=h.a
u=A.hjv(v,w,e)
t=u.a
s=u.b
r=u.d
q=t-2.5
p=s-2.5
o=h.b
n=o.b=730+e
o.x=$.ml=$.ml+1
o.e=5
m=u.c
o.bJ(new A.E(m,r,1.4),new A.E(t+3,s+3,2.6),B.Vx,0.5)
o.bJ(new A.E(m,r,2.8),new A.E(t,s,0.2),K.nI,0.7)
if(v.fy){l=q/2
k=m-l
j=p/2
i=r+j
l=m+l
j=r-j
h.c.push(new A.WI(C.a([new A.E(k,i,2.95),new A.E(l,i,2.95),new A.E(l,j,2.95),new A.E(k,j,2.95)],x.o),n,new A.fm4(v),320,320*p/q,9,1))}o.e=o.x=0
v=v.fy?"It is on and playing "+E.k_[v.go].a+". Tap it to watch full screen with the remote.":"The TV is off. Tap it to turn it on."
h.d.n(0,n,new A.d1(w.b,v,new A.E(0,r,4),110))},
$S:1800}
A.fm4.prototype={
$3(d,e,f){var w=this.a
return H.bBE(d,e,w.go,f+w.a)},
$S:440}
A.fm7.prototype={
$2(d,e){var w=this.a,v=w.f,u=w.r
w.f=1
w.r=!1
w.b=0
w.e5(new A.E(d,e,0),new A.E(d,e,2.2),0.7,B.K7,0.7,10)
w.f=v
w.r=u},
$S:441}
A.fm2.prototype={
$1(d){return d.b===this.a.a},
$S:z+15}
A.fg4.prototype={
$2(d,e){return this.a===d?e:0},
$S:704}
A.fg5.prototype={
$5(d,e,f,g,h){var w=d.ad(0,e.aF(0,g)).ad(0,new A.E(0,h,0)),v=this.a
A.nk(v,w.ad(0,f.aF(0,0.1)),e,B.fP,26,30,B.m8,f,0)
A.nk(v,w.ad(0,f.aF(0,0.2)),e,B.fP,22,26,B.px,f,0.6)
A.nk(v,w.ad(0,f.aF(0,0.3)),e,B.fP,22,1.2,B.m8,f,0)
A.nk(v,w.ad(0,f.aF(0,0.3)),e,B.fP,1.2,26,B.m8,f,0)},
$S:z+40}
A.fg3.prototype={
$5(d,e,f,g,h){var w=d.ad(0,e.aF(0,g)),v=this.a,u=v.b
A.nk(v,w.ad(0,new A.E(0,42,0)).ad(0,f.aF(0,0.1)),e,B.fP,34,84,B.m8,f,0)
v.b=h
A.nk(v,w.ad(0,new A.E(0,41,0)).ad(0,f.aF(0,0.2)),e,B.fP,28,80,B.wK,f,0.2)
v.b=0
A.nk(v,w.ad(0,new A.E(0,58,0)).ad(0,f.aF(0,0.3)),e,B.fP,20,26,B.KZ,f,0)
A.nk(v,w.ad(0,new A.E(0,22,0)).ad(0,f.aF(0,0.3)),e,B.fP,20,26,B.KZ,f,0)
v.bJ(w.ad(0,e.aF(0,9)).ad(0,new A.E(0,40,0)).ad(0,f.aF(0,1)),new A.E(2.6,2.6,2.6),B.DT,0.8)
v.b=u},
$S:z+41}
A.fg2.prototype={
$1(d){return d.b===this.a.a&&d.x},
$S:z+15}
A.foN.prototype={
$1(d){return D.d.t(B.a1B,d.b)},
$S:z+42}
A.foO.prototype={
$1(d){return d.b===this.a.a},
$S:z+15}
A.foP.prototype={
$1(d){return d.b===this.a.a},
$S:z+15}
A.f6T.prototype={
$5(d,e,f,g,h){var w,v,u,t,s,r,q,p,o,n,m,l,k,j
for(w=d.length,v=x.z,u=this.a,t=-f/2,s=u.a,r=this.b,q=0,p=0;p<w;++p){o=d[p]
n=o.a
m=C.a([],v)
l=new A.jf(m)
l.b=u.b
l.f=u.f
l.r=!0
l.bO(new A.E(0,t,0),new A.E(g,f,g),h)
k=(q&1)===0?1:-1
j=n>0?1:-1
D.d.v(s,A.tS(m,r*k*j,0,new A.E(n,e,o.b)));++q}},
$S:1801}
A.fgD.prototype={
$3(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k=x.z,j=C.a([],k),i=new A.jf(j)
i.b=this.a
i.r=!0
d.$1(i)
k=C.a([],k)
for(j=A.heg(j,e,B.fO),w=j.length,v=f.a,u=f.b,t=f.c,s=x.o,r=0;r<j.length;j.length===w||(0,C.L)(j),++r){q=j[r]
p=C.a([],s)
for(o=q.a,n=o.length,m=0;m<o.length;o.length===n||(0,C.L)(o),++m){l=o[m]
p.push(new A.E(l.a+v,l.b+u,l.c+t))}k.push(new A.mt(p,q.b,q.c,q.d,q.e,q.f,q.r,q.w,q.x,q.y,q.z))}D.d.v(this.b.a,k)},
$S:z+43}
A.fgp.prototype={
$5(d,e,f,g,h){var w=this.a
w.baM(d,e,f,h,!1,g,10)
w.io(e,g*1.04,h,4,8)},
$S:z+44}
A.fgq.prototype={
$1(d){return d.iQ(B.fO,2.6,B.Wk,4,8,0.15)},
$S:z+1}
A.fgr.prototype={
$1(d){return d.io(B.fO,2.6,D.bR,3,8)},
$S:z+1}
A.fgs.prototype={
$1(d){return d.io(B.fO,5.2,this.a,4,10)},
$S:z+1}
A.fgv.prototype={
$1(d){return d.baM(B.fO,B.a7N,4.9,this.a,!1,6.5,12)},
$S:z+1}
A.fgw.prototype={
$1(d){return d.baL(B.fO,B.fDf,5.1,B.b8v,!1,12)},
$S:z+1}
A.fgx.prototype={
$1(d){return d.io(B.fO,6.7,this.a,4,10)},
$S:z+1}
A.fgy.prototype={
$1(d){return d.io(B.fO,4.7,this.a,6,12)},
$S:z+1}
A.fgz.prototype={
$1(d){return d.io(B.fO,3,this.a,4,8)},
$S:z+1}
A.fgA.prototype={
$1(d){return d.io(B.fO,5,this.a,5,10)},
$S:z+1}
A.fgB.prototype={
$1(d){return d.io(B.fO,3.6,this.a,3,8)},
$S:z+1}
A.fgC.prototype={
$1(d){return d.io(B.fO,1,D.c,3,6)},
$S:z+1}
A.fgt.prototype={
$1(d){return d.io(B.fO,1,this.a,3,6)},
$S:z+1}
A.fgu.prototype={
$1(d){return d.io(B.fO,1.9,this.a,4,8)},
$S:z+1}
A.fmd.prototype={
$4$alongX(d,e,f,g){var w,v,u,t,s,r,q,p,o,n
for(w=this.a,v=0;v<=f;++v){u=A.zH(d,e,v/f)
w.aBE(new A.E(u.a,4,u.c),B.fIt,B.W8,!1,0.05)}t=A.zH(d,e,0.5)
for(s=e.aC(0,d).gTc()+0.15,r=t.a,q=t.c,p=0;p<2;++p){o=B.d15[p]
n=g?new A.E(s,0.16,0.3):new A.E(0.3,0.16,s)
w.bJ(new A.E(r,o,q),n,B.W8,0.05)}},
$3(d,e,f){return this.$4$alongX(d,e,f,!0)},
$S:z+46}
A.fma.prototype={
$2(d,e){return this.a.jT(A.Gh(d,0.35,3),0.06,e,!1,0.4,6)},
$S:z+47}
A.fm9.prototype={
$1(d){return this.a.jT(A.Gh(d,0.5,3),0.14,B.pm,!1,0.3,8)},
$S:z+72}
A.fmc.prototype={
$2$col(d,e){return this.a.jT(A.Gh(d,0.4,3),0.055,e,!1,0.35,6)},
$1(d){return this.$2$col(d,B.Wg)},
$S:z+49}
A.fmb.prototype={
$5$h$w(d,e,f,g,h){var w=this.a
w.b=d
w.bJ(e,new A.E(h,g,0.06),f,0.3)},
$3(d,e,f){return this.$5$h$w(d,e,f,0.7,0.45)},
$S:z+50}
A.fn7.prototype={
$0(){return A.lL(1320,120,0.25,"tri")},
$S:0}
A.dKu.prototype={
$1(d){return this.a},
$S:40}
A.dKx.prototype={
$0(){return C.a6(this.a,!1).lN()},
$S:0}
A.dKy.prototype={
$0(){var w=this.a
return w.m(new A.dKw(w))},
$S:0}
A.dKw.prototype={
$0(){return this.a.d=!1},
$S:0}
A.dKz.prototype={
$0(){var w=this.a
return w.m(new A.dKv(w))},
$S:0}
A.dKv.prototype={
$0(){return this.a.d=!0},
$S:0}
A.dKC.prototype={
$0(){var w=this.a
return w.xn(A.aZh("","",w.d))},
$S:0}
A.dKD.prototype={
$0(){return this.a.xn(B.dth)},
$S:0}
A.dKE.prototype={
$0(){var w=this.a
return w.xn(A.aZh("wiring","",w.d))},
$S:0}
A.dKF.prototype={
$0(){var w=this.a
return w.xn(A.aZh("plumbing","",w.d))},
$S:0}
A.dKG.prototype={
$0(){var w=this.a
return w.xn(A.aZh("fix","",w.d))},
$S:0}
A.dKH.prototype={
$0(){var w=this.a
return w.xn(A.fPH(w.d,null,!1))},
$S:0}
A.dKI.prototype={
$0(){var w=this.a
return w.xn(A.fPH(w.d,null,!0))},
$S:0}
A.dKJ.prototype={
$0(){var w=this.a
return w.xn(new A.aq0(w.d,null))},
$S:0}
A.dKA.prototype={
$0(){var w=this.b.a
w=w==="house"?B.fM0:A.aZh("",w,!1)
return this.a.xn(w)},
$S:0}
A.dKB.prototype={
$0(){return this.a.xn(B.aDN)},
$S:0}
A.cpA.prototype={
$0(){return this.a.e.anx(0.8)},
$S:0}
A.cpB.prototype={
$0(){return this.a.e.anx(1.25)},
$S:0}
A.fDp.prototype={
$1(d){var w,v,u,t,s,r,q,p,o=null,n=C.aI(d,o,x.w).w,m=this.b,l=this.c,k=l.length,j=x.p,i=C.a([C.d(this.a,o,o,o,o,o,o,D.ds,o,o,o),D.at,C.d(""+new C.a2(m,new A.fDo(),C.U(m).k("a2<1>")).gM(0)+" of "+k+" steps done",o,o,o,o,o,o,B.IB,o,o,o),D.S],j)
for(w=0;w<k;++w){v=D.c.j(0.05)
u=new C.aW(14,14)
t=new C.aA(m[w]?D.b7.j(0.6):D.bF,1,D.q,-1)
s=m[w]
r=s?"\u2705":""+(w+1)+"."
q=s?D.c:D.aH
p=l[w]
s=s?D.az:D.c
i.push(C.p(o,new C.cm(D.aO,D.e,D.j,D.F,o,D.p,o,0,C.a([new C.x(r,o,new C.G(!0,q,o,o,o,o,14,D.u,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o),o,o,o,o,o,o,o,o,o),D.av,new C.bD(1,D.bi,new C.x(p,o,new C.G(!0,s,o,o,o,o,13,o,o,o,o,o,1.4,o,o,o,o,o,o,o,o,o,o,o,o,o),o,o,o,o,o,o,o,o,o),o)],j),o),D.f,o,o,new C.o(v,o,new C.bP(t,t,t,t),new C.bq(u,u,u,u),o,o,D.n),o,o,o,D.cH,D.bk,o,o,o))}return C.bn(!0,new C.cV(new C.aY(0,1/0,0,n.a.b*0.75),C.cB(i,o,D.bV,o,o,D.ah,!0),o),!0,!1,D.af,!0,!0)},
$S:28}
A.fDo.prototype={
$1(d){return d},
$S:142}
A.bRN.prototype={
$0(){return C.a6(this.a,!1).lN()},
$S:0}
A.d2f.prototype={
$0(){var w=this.a
w.y=this.b
w.z=this.c},
$S:0}
A.d2g.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new A.d2e(w))},
$S:0}
A.d2e.prototype={
$0(){return this.a.y=null},
$S:0}
A.d28.prototype={
$0(){return this.a.x=0},
$S:0}
A.d27.prototype={
$1(d){var w=this.a.geS(0).b
return new C.bc(w,C.a3(w).k("bc<2>")).t(0,d)},
$S:3}
A.d29.prototype={
$1(d){return d.a===this.a},
$S:z+11}
A.d2a.prototype={
$2(d,e){return e===this.a},
$S:425}
A.d2b.prototype={
$0(){var w=this.a
w.xo()
w.x=this.b},
$S:0}
A.d2c.prototype={
$0(){return this.a.x=this.b},
$S:0}
A.d2d.prototype={
$0(){var w=this.a,v=w.geS(0),u=v.a
v.a=!u
if(u)v.d=!1
w.xo()},
$S:0}
A.d2h.prototype={
$0(){var w=this.a,v=w.geS(0)
v.d=v.a=!0
w.xo()},
$S:0}
A.d2p.prototype={
$1(d){return!d},
$S:142}
A.d2s.prototype={
$0(){var w=this.a.gFH()
return A.fDn(this.b,w.b,w.d,this.c)},
$S:0}
A.d2q.prototype={
$0(){var w=this.a
return w.m(new A.d2o(w))},
$S:0}
A.d2o.prototype={
$0(){var w=this.a,v=w.geS(0)
v.e=!v.e
w.xo()},
$S:0}
A.d2r.prototype={
$0(){var w=this.a
return w.m(new A.d2n(w))},
$S:0}
A.d2n.prototype={
$0(){var w=this.a,v=w.geS(0)
v.f=!v.f
w.xo()},
$S:0}
A.d2t.prototype={
$0(){var w=this.a,v=w.gkT()
return v.lW(10,0.2,new A.E(0.6,0,w.geS(0).c===0?4.2:0.4),-0.95)},
$S:0}
A.d2u.prototype={
$0(){var w=this.a,v=w.gkT()
return v.lW(10,0.2,new A.E(-0.6,0,w.geS(0).c===0?4.2:0.4),0.95)},
$S:0}
A.d2v.prototype={
$1(d){return!this.a.geS(0).b.iR(0,d.a)},
$S:z+12}
A.d2w.prototype={
$0(){var w=this.a,v=this.b,u=v.a
if(w.geS(0).b.iR(0,u)){w.oZ("That wire is already fastened. Tap the wire in the 3D view to take it off if you want to move it.")
return}w.m(new A.d2m(w,v))
if(w.w.length!==0){if(u==="ground")w.gkT().lW(8,0.55,B.fFa,0.15)
else if(u==="white")w.gkT().lW(8.5,0.2,B.fHv,0.95)
else w.gkT().lW(8.5,0.2,B.fAB,-0.95)
w.kv(v.b+": now tap the screw it belongs on.",!0)}},
$S:0}
A.d2m.prototype={
$0(){var w=this.a,v=this.b.a
return w.w=w.w===v?"":v},
$S:0}
A.d2x.prototype={
$0(){var w=this.a
w.m(new A.d2l(w))
A.y8()
w.kv("The wires are folded back and the device is pushed into the box. Now put the cover plate on.",!0)
w.nX()},
$S:0}
A.d2l.prototype={
$0(){var w=this.a
w.geS(0).c=1
w.xo()},
$S:0}
A.d2y.prototype={
$0(){var w=this.a
w.m(new A.d2k(w))
w.nX()},
$S:0}
A.d2k.prototype={
$0(){var w=this.a
w.geS(0).c=0
w.xo()},
$S:0}
A.d2z.prototype={
$0(){var w=this.a
w.m(new A.d2j(w))
A.y8()
w.kv("Cover plate on. Now turn the power on and test.",!0)},
$S:0}
A.d2j.prototype={
$0(){var w=this.a
w.geS(0).c=2
w.xo()},
$S:0}
A.d2A.prototype={
$0(){var w=this.a
w.m(new A.d2i(w))
w.nX()},
$S:0}
A.d2i.prototype={
$0(){var w=this.a,v=w.geS(0)
v.c=0
v.b.a9(0)
v.a=!0
v.d=!1
w.Q=0
w.w=""
w.x=0
w.xo()},
$S:0}
A.eM8.prototype={
$0(){var w=this.a
w.x=this.b
w.y=this.c},
$S:0}
A.eM9.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new A.eM7(w))},
$S:0}
A.eM7.prototype={
$0(){return this.a.x=null},
$S:0}
A.eM1.prototype={
$0(){return this.a.w=0},
$S:0}
A.eM2.prototype={
$0(){var w=this.a,v=w.geS(0)
v.a.K(0,this.b)
v.c=!1
v.d=""
w.f=A.bzz(v)
w.r=""},
$S:0}
A.eM3.prototype={
$0(){var w=this.a,v=w.geS(0)
v.b.n(0,this.b,!0)
v.d=""
w.f=A.bzz(v)},
$S:0}
A.eM4.prototype={
$0(){return this.a.w=this.b},
$S:0}
A.eM5.prototype={
$1(d){return this.a.geS(0).b.h(0,d)!==!0},
$S:3}
A.eM6.prototype={
$0(){var w,v=this.a,u=v.geS(0)
u.c=!0
w=this.b
u.d=w.length===0?"":D.d.gL(w)
v.f=A.bzz(u)},
$S:0}
A.eMd.prototype={
$1(d){return!d},
$S:142}
A.eMh.prototype={
$0(){return A.fDn(this.a,"Sink drain (P-trap)",B.d3z,this.b)},
$S:0}
A.eMe.prototype={
$1(d){return A.i2U(this.a.geS(0),d)},
$S:z+8}
A.eMf.prototype={
$0(){var w=this.a
return w.m(new A.eMc(w,this.b))},
$S:0}
A.eMc.prototype={
$0(){var w=this.a,v=this.b
return w.r=w.r===v?"":v},
$S:0}
A.eMg.prototype={
$0(){var w=this.a
w.m(new A.eMb(w))
w.nX()},
$S:0}
A.eMb.prototype={
$0(){var w,v=this.a,u=v.geS(0)
u.a.a9(0)
w=u.b
w.aHd(w,new A.eMa())
u.c=!1
v.r=u.d=""
v.w=0
v.f=A.bzz(u)},
$S:0}
A.eMa.prototype={
$2(d,e){return!1},
$S:1803}
A.d5a.prototype={
$0(){var w=this.a
w.x=this.b
w.y=this.c},
$S:0}
A.d5b.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new A.d59(w))},
$S:0}
A.d59.prototype={
$0(){return this.a.x=null},
$S:0}
A.d52.prototype={
$0(){return this.a.w=0},
$S:0}
A.d55.prototype={
$1(d){return d.a===this.a},
$S:z+24}
A.d56.prototype={
$0(){var w=this.a,v=w.geS(0)
v.f=!1
w.f=A.aNt(v)
w.w=this.b},
$S:0}
A.d57.prototype={
$0(){var w=this.a,v=w.geS(0),u=v.e
u.bn(u,new A.d54(this.b))
v.f=!1
w.f=A.aNt(v)},
$S:0}
A.d54.prototype={
$2(d,e){return e===this.a},
$S:425}
A.d58.prototype={
$0(){return this.a.w=this.b},
$S:0}
A.d53.prototype={
$0(){var w=this.a,v=w.geS(0)
v.f=!v.f
w.f=A.aNt(v)},
$S:0}
A.d5f.prototype={
$1(d){return!d},
$S:142}
A.d5l.prototype={
$0(){return A.fDn(this.a,"Faucet supply lines",B.deS,this.b)},
$S:0}
A.d5g.prototype={
$1(d){return A.hUP(this.a.geS(0),d)},
$S:z+8}
A.d5h.prototype={
$0(){var w=this.a
return w.m(new A.d5e(w))},
$S:0}
A.d5e.prototype={
$0(){var w=this.a,v=w.geS(0)
v.r=!v.r
w.f=A.aNt(v)},
$S:0}
A.d5j.prototype={
$0(){var w=this.b
return w.m(new A.d5d(this.a,w))},
$S:0}
A.d5d.prototype={
$0(){var w=this.b,v=w.r,u=this.a.a
return w.r=v===u?"":u},
$S:0}
A.d5i.prototype={
$1(d){return d===this.a.a},
$S:3}
A.d5k.prototype={
$0(){var w=this.a
w.m(new A.d5c(w))
w.nX()},
$S:0}
A.d5c.prototype={
$0(){var w=this.a,v=w.geS(0)
v.e.a9(0)
v.f=!1
w.r=""
w.w=0
w.f=A.aNt(v)},
$S:0}
A.dcf.prototype={
$0(){var w=this.a
w.x=this.b
w.y=this.c},
$S:0}
A.dcg.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new A.dce(w))},
$S:0}
A.dce.prototype={
$0(){return this.a.x=null},
$S:0}
A.dc9.prototype={
$0(){return this.a.r=0},
$S:0}
A.dcb.prototype={
$0(){var w=this.a,v=w.d
v.d.W(0,72)
w.f=A.afj(v)
w.r=this.b},
$S:0}
A.dcc.prototype={
$0(){var w=this.a,v=w.d
v.c=!0
v.b=!1
w.f=A.afj(v)
w.r=this.b},
$S:0}
A.dcd.prototype={
$0(){return this.a.r=this.b},
$S:0}
A.dca.prototype={
$1(d){return this.a},
$S:40}
A.dco.prototype={
$0(){return A.fDn(this.a,"Fix the house",B.ceJ,this.b)},
$S:0}
A.dcj.prototype={
$0(){return this.a.cb_(this.b)},
$S:0}
A.dcl.prototype={
$1(d){return d<=this.a.d.a},
$S:33}
A.dck.prototype={
$1(d){return A.hfo(this.a.d,d)},
$S:z+8}
A.dcm.prototype={
$0(){var w=this.a
return w.m(new A.dci(w))},
$S:0}
A.dci.prototype={
$0(){var w=this.a
return w.w=w.w==="wrench"?"":"wrench"},
$S:0}
A.dcn.prototype={
$1(d){var w=this.a
return w.m(new A.dch(w,d))},
$S:6}
A.dch.prototype={
$0(){var w=this.a,v=w.d,u=D.k.V(this.b)
v.a=u
if(u<5)w.r=0
w.f=A.afj(v)},
$S:0}
A.c5s.prototype={
$0(){return C.a6(this.a,!1).lN()},
$S:0}
A.fmO.prototype={
$5(d,e,f,g,h){var w=this.a.a.t(0,h),v=this.b
v.b=d
if(w)v.a5D(e,0.66,f,!1,!0,!0,g,14)
else{v.d=0.3
v.aHb(e,0.74,D.b1,!1,!0,0,8)
v.d=1}},
$S:z+52}
A.fmN.prototype={
$6(d,e,f,g,h,i){var w,v
if(!i)return
w=this.a.b.h(0,e)
v=w===!0?f:f.ad(0,h)
w=this.b
w.e=0.5
w.b=d
w.e5(v.aC(0,g.aF(0,0.6)),v.ad(0,g.aF(0,0.6)),1.12,B.pm,0.35,8)
w.yW(v.aC(0,g.aF(0,0.62)),v.aC(0,g.aF(0,0.5)),1.2,0.5,B.Vv,0.2,8)
w.b=0
w.yW(f.aC(0,g.aF(0,0.05)),f.ad(0,g.aF(0,0.08)),0.82,0.55,B.bgw,0.1,12)
w.e=0},
$S:z+53}
A.fmM.prototype={
$1(d){return d.b<-0.6},
$S:z+19}
A.flX.prototype={
$1(d){return this.a.e.h(0,d)===this.b},
$S:33}
A.fof.prototype={
$2(d,e){var w,v,u,t,s,r,q,p=A.afw(d)
for(w=this.a*1.6,v=this.b,u=p.a,t=p.b,s=p.c,r=0;r<7;++r){q=D.k.G(w+r/7,1)
v.iQ(new A.E(u+Math.sin(r*2.1)*q*1.4,t+(q*2.4-q*q*6.5),s+(1+q*2.5)),0.2,e,3,6,0.9)}},
$S:1804}
A.foe.prototype={
$1(d){return this.a.e.h(0,d.a)!=null},
$S:z+24}
A.cga.prototype={
$1(d){return d.a===this.a},
$S:z+54}
A.cgb.prototype={
$1(d){return d.a===this.a},
$S:z+2}
A.cg7.prototype={
$1(d){return this.a.uP(0,d).c.toLowerCase()},
$S:14}
A.cgc.prototype={
$1(d){var w
if(!this.a.e.t(0,d.a)){w=d.b
w=w==="valve"||D.a.a0(w,"hose")}else w=!1
return w},
$S:z+2}
A.cgd.prototype={
$1(d){var w=this.a,v=d.a
return w.e.t(0,v)&&w.bel(v)>0},
$S:z+2}
A.cge.prototype={
$1(d){return d.a},
$S:z+25}
A.cgf.prototype={
$1(d){return d.a},
$S:z+25}
A.cg8.prototype={
$1(d){return this.a.e.t(0,d.a)},
$S:z+2}
A.cg9.prototype={
$1(d){var w=this.a,v=d.a
return w.bel(v)<=0||!w.e.t(0,v)},
$S:z+2}
A.fmL.prototype={
$1(d){var w=this.a
w.b=0
w.e5(new A.E(d,8,0),new A.E(d,8,1.6),0.5,B.K7,0.7,10)},
$S:6}
A.fmJ.prototype={
$1(d){var w,v,u,t,s,r,q=C.a([],x.o)
for(w=d.length,v=this.a,u=v.a,t=v.b,v=v.c,s=0;s<d.length;d.length===w||(0,C.L)(d),++s){r=d[s]
q.push(new A.E(r.a+u,r.b+t,r.c+v))}return q},
$S:z+57}
A.fmD.prototype={
$3$r(d,e,f){var w=this.a,v=this.b.c
v===$&&C.c()
w.b=9100+D.d.bc(v.c,new A.fmG(d))
w.d=0.32
w.aHb(e,f,D.b1,!1,!0,0,8)
w.d=1},
$2(d,e){return this.$3$r(d,e,1.2)},
$S:z+58}
A.fmG.prototype={
$1(d){return d.a===this.a},
$S:z+2}
A.fmE.prototype={
$3(d,e,f){var w=this.a,v=this.b.c
v===$&&C.c()
w.b=9100+D.d.bc(v.c,new A.fmF(d))
w.d=0.32
w.bO(e,f,D.b1)
w.d=1},
$S:z+59}
A.fmF.prototype={
$1(d){return d.a===this.a},
$S:z+2}
A.fmK.prototype={
$3(d,e,f){var w,v,u,t=this,s=t.a,r=s.c
r===$&&C.c()
w=D.d.cJ(r.c,d)
r=d.c
v=s.e
u=d.a
if(v.t(0,u))s="Fitted."
else{s=s.b?"":d.e
s="A spot for the "+r.toLowerCase()+". "+s}t.b.n(0,9100+w,new A.d1(r,s,e,26))
if(t.c&&!v.t(0,u)&&t.d.length!==0)t.e.push(new A.t2(e.ad(0,B.fyX),f,D.fh))},
$S:z+60}
A.fmA.prototype={
$0(){return this.a.$3(this.b.a,new A.E(this.c-10,9,2.4),B.a7P)},
$S:0}
A.fmB.prototype={
$0(){return this.a.$3(this.b.a,new A.E(this.c-8,9,2.4),B.a7P)},
$S:0}
A.fmC.prototype={
$0(){return this.a.$3(this.b.a,new A.E(this.c+8,9,2.4),B.a7P)},
$S:0}
A.fmH.prototype={
$4(d,e,f,g){var w,v,u,t,s=this
if(D.d.bc(s.a,new A.fmI(d))<0||!s.b.e.t(0,d))return
w=s.b.f.h(0,d)
v=(w==null?0:w)>=1
w=s.c
u=9260+g
w.b=u
t=v?e:e.ad(0,f.aF(0,1.7))
w.e5(t.aC(0,f.aF(0,0.6)),t.ad(0,f.aF(0,0.6)),1.12,B.pm,0.35,8)
w.yW(t.aC(0,f.aF(0,0.62)),t.aC(0,f.aF(0,0.5)),1.2,0.5,B.Vv,0.2,8)
w=v?"Tight.":"Loose. Tap it with the wrench to tighten it."
s.d.n(0,u,new A.d1("Slip nut",w,e,10))},
$S:z+61}
A.fmI.prototype={
$1(d){return d.a===this.a},
$S:z+2}
A.fCB.prototype={
$1(d){var w,v=this
A:{if("vhot"===d||"hhot"===d){w=new A.E(v.a-8,9,2)
break A}if("vcold"===d||"hcold"===d){w=new A.E(v.a+8,9,2)
break A}if("tvalve"===d||"those"===d){w=new A.E(v.b-10,9,2)
break A}if("bolts"===d){w=new A.E(v.b,2,17)
break A}if("faucet"===d){w=new A.E(v.a,30,8)
break A}if("tail"===d){w=new A.E(v.a,22,8)
break A}if("trap"===d){w=new A.E(v.a,24.7,8)
break A}w=new A.E(v.a+8.9,23.6,8)
break A}return w},
$S:z+62}
A.fCA.prototype={
$1(d){return d.a===this.a},
$S:z+2}
A.eg1.prototype={
$0(){var w=this.a
w.z=this.b
w.Q=this.c},
$S:0}
A.eg2.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new A.eg0(w))},
$S:0}
A.eg0.prototype={
$0(){return this.a.z=null},
$S:0}
A.efV.prototype={
$0(){return this.a.y=0},
$S:0}
A.eg3.prototype={
$1(d){return d.a===this.a},
$S:z+2}
A.efN.prototype={
$0(){return this.a.y=this.b},
$S:0}
A.efO.prototype={
$0(){var w=this.a
w.acL()
w.y=this.b},
$S:0}
A.efP.prototype={
$1(d){return this.a.c3h()},
$S:8}
A.efU.prototype={
$1(d){var w,v=null,u=this.a,t=u.e
t===$&&C.c()
w=t.c
w===$&&C.c()
t=C.d("The "+w.b.toLowerCase()+" is finished and nothing leaks.\n\nMistakes: "+t.w+"\n\nThe next job is different.",v,v,v,v,v,v,B.a6O,v,v,v)
return C.ej(C.a([C.bK(!1,B.aQb,v,v,!0,v,v,new A.efS(d),v,v),C.bJ(B.fgF,new A.efT(u,d),v)],x.p),v,v,E.mW,t,v,v,v,v,B.fii,v)},
$S:19}
A.efS.prototype={
$0(){C.a6(this.a,!1).O(null)
return null},
$S:0}
A.efT.prototype={
$0(){C.a6(this.b,!1).O(null)
this.a.aW9()},
$S:0}
A.eg_.prototype={
$0(){var w,v,u=this.a
u.d=D.o.G(Date.now(),1e5)
w=u.gCj(0)
v=u.e
v===$&&C.c()
u.e=A.fQo(v.b,w,null)
u.x=""
u.as=!1
u.z=null
u.y=0
u.acL()},
$S:0}
A.efR.prototype={
$0(){var w=this.a
return w.m(new A.efQ(w,this.b,this.c))},
$S:0}
A.efQ.prototype={
$0(){var w=this.a
w.x=this.b?"":this.c
w.acL()},
$S:0}
A.eg4.prototype={
$1(d){var w=this.a.e
w===$&&C.c()
return w.e.t(0,d.a)},
$S:z+2}
A.eg8.prototype={
$0(){return this.a.bYD(this.b)},
$S:0}
A.eg6.prototype={
$1(d){return d<=5},
$S:33}
A.eg5.prototype={
$1(d){var w=this.a,v=w.e
v===$&&C.c()
return A.i2O(v,w.w.gu2()/1000)},
$S:z+8}
A.eg7.prototype={
$0(){return this.b.csU(this.a.a)},
$S:0}
A.efZ.prototype={
$1(d){var w,v,u,t,s,r,q,p=null,o=this.a,n=o.e
n===$&&C.c()
w=x.p
n=C.a([B.ftB,D.at,C.d("Mistakes "+n.w,p,p,p,p,p,p,B.IB,p,p,p),D.S],w)
v=o.e.c
v===$&&C.c()
v=v.c
u=v.length
t=0
for(;t<u;++t){s=v[t]
r=D.c.j(0.05)
q=new C.aW(12,12)
n.push(C.p(p,new C.x((o.e.e.t(0,s.a)?"\u2705":"\ud83d\udd27")+" "+s.c,p,B.eTQ,p,p,p,p,p,p,p,p,p),D.f,p,p,new C.o(r,p,p,new C.bq(q,q,q,q),p,p,D.n),p,p,p,D.eO,D.bS,p,p,p))}n.push(D.an)
n.push(B.f8E)
n.push(D.O)
n.push(C.A(C.a([B.bv_,C.auA(p,p,p,p,!1,D.y,p,p,p,p,p,p,new A.efX(o,d),p,p,p,p,p,p,p,p,o.e.b)],w),D.m,p,D.e,D.j,0,p,p))
n.push(C.bJ(B.aQd,new A.efY(o,d),p))
return C.bn(!0,C.cB(n,p,D.bV,p,p,D.ah,!0),!0,!1,D.af,!0,!0)},
$S:28}
A.efX.prototype={
$1(d){var w=this.a
w.m(new A.efW(w,d))
C.a6(this.b,!1).O(null)},
$S:9}
A.efW.prototype={
$0(){var w=this.a,v=w.e
v===$&&C.c()
v.b=this.b
w.acL()},
$S:0}
A.efY.prototype={
$0(){C.a6(this.b,!1).O(null)
this.a.aW9()},
$S:0}
A.fKR.prototype={
$1(d){return d.a===this.a},
$S:z+26}
A.cl4.prototype={
$1(d){return d.b==="switch"},
$S:z+4}
A.clb.prototype={
$1(d){return!this.a.y.t(0,d)},
$S:33}
A.clc.prototype={
$1(d){var w=this.a
return w.x.ai(0,d)&&w.z.t(0,d)},
$S:33}
A.cld.prototype={
$1(d){var w=$.Go()[this.b],v=!1
if(w>=d)if(w<=d+48){w=this.a.Q.h(0,d)
w=(w==null?null:w.a)===!0}else w=v
else w=v
return w},
$S:33}
A.cle.prototype={
$1(d){return this.a.Q.h(0,d).c.t(0,this.b)},
$S:33}
A.clg.prototype={
$1(d){var w,v=J.e3(6,x.S)
for(w=0;w<6;++w)v[w]=w
return D.d.da(v,new A.clf(this.a,d))},
$S:33}
A.clf.prototype={
$1(d){return this.a.c.t(0,this.b*10+d)},
$S:33}
A.cl3.prototype={
$1(d){var w=this.a.Q.h(0,d)
return(w==null?null:w.a)===!0},
$S:33}
A.cl1.prototype={
$1(d){return!A.l0(d).c},
$S:33}
A.cl2.prototype={
$1(d){var w=this.a.aof(A.l0(d).d.a)
return(w==null?null:w.b.t(0,d))===!0},
$S:33}
A.cl9.prototype={
$1(d){return d.c},
$S:z+6}
A.cla.prototype={
$1(d){return d.d},
$S:z+6}
A.cl5.prototype={
$1(d){return d.d},
$S:z+6}
A.cl6.prototype={
$1(d){var w=this.a.Q.h(0,d)
return(w==null?null:w.e)===!0},
$S:33}
A.cl7.prototype={
$1(d){return d.a===this.a},
$S:z+11}
A.clh.prototype={
$2(d,e){return e===this.a},
$S:425}
A.cl8.prototype={
$1(d){return d.c===this.a},
$S:z+4}
A.eko.prototype={
$0(){var w=this.a
w.ax=this.b
w.ay=this.c},
$S:0}
A.ekp.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new A.ekn(w))},
$S:0}
A.ekn.prototype={
$0(){return this.a.ax=null},
$S:0}
A.ejD.prototype={
$0(){return this.a.CW=!0},
$S:0}
A.ejE.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new A.ejC(w))},
$S:11}
A.ejC.prototype={
$0(){return this.a.CW=!1},
$S:0}
A.ejF.prototype={
$1(d){return this.a.bMj()},
$S:8}
A.ejG.prototype={
$1(d){return this.a.c3m()},
$S:8}
A.ejO.prototype={
$0(){return this.a.Q=-1},
$S:0}
A.ejH.prototype={
$0(){return this.a.Q=-1},
$S:0}
A.ek5.prototype={
$0(){var w=this.a
w.Q=this.b
w.z=w.at=""
w.ch=!1},
$S:0}
A.ejP.prototype={
$0(){var w=this.a
w.Q=-1
w.at=""},
$S:0}
A.ekk.prototype={
$0(){return this.a.as=0},
$S:0}
A.ekl.prototype={
$0(){return this.a.z=""},
$S:0}
A.ekm.prototype={
$0(){return this.a.as=this.b},
$S:0}
A.eki.prototype={
$0(){return this.a.z=""},
$S:0}
A.ekj.prototype={
$0(){return this.a.as=2000+this.b},
$S:0}
A.ekh.prototype={
$0(){return this.a.z=""},
$S:0}
A.ekd.prototype={
$1(d){return d.a===this.a},
$S:z+11}
A.eke.prototype={
$0(){return this.a.as=5000+this.b*100+this.c},
$S:0}
A.ekf.prototype={
$0(){var w=this.a
w.at=""
w.as=0},
$S:0}
A.ekg.prototype={
$0(){return this.a.as=5000+this.b*100+this.c},
$S:0}
A.ekq.prototype={
$0(){var w=this.b,v=D.d.t(B.GU,w.z),u=this.a.a
if(v)w.b_x(u)
else w.b_z(u)},
$S:0}
A.ejN.prototype={
$1(d){var w=null
return C.ej(C.a([C.bK(!1,B.fkd,w,w,!0,w,w,new A.ejL(d),w,w),C.bJ(D.IP,new A.ejM(this.a,d),w)],x.p),w,w,E.mW,B.f9L,w,w,w,w,B.fh4,w)},
$S:19}
A.ejL.prototype={
$0(){C.a6(this.a,!1).O(null)
return null},
$S:0}
A.ejM.prototype={
$0(){C.a6(this.b,!1).O(null)
this.a.avC(!0)},
$S:0}
A.ejK.prototype={
$1(d){var w,v=null,u=this.a,t=u.d
t===$&&C.c()
w=t.c
w===$&&C.c()
t=C.d("The "+w.toLowerCase()+" is built, wired, painted and tested.\n\nMistakes: "+t.f+"\nShocks: "+t.r+"\nLives left: "+t.e+"\n\nEvery job is a little different. Ready for another one?",v,v,v,v,v,v,B.a6O,v,v,v)
return C.ej(C.a([C.bK(!1,B.fur,v,v,!0,v,v,new A.ejI(d),v,v),C.bJ(B.fgY,new A.ejJ(u,d),v)],x.p),v,v,E.mW,t,v,v,v,v,B.foF,v)},
$S:19}
A.ejI.prototype={
$0(){C.a6(this.a,!1).O(null)
return null},
$S:0}
A.ejJ.prototype={
$0(){C.a6(this.b,!1).O(null)
this.a.aXe()},
$S:0}
A.ejQ.prototype={
$0(){var w,v,u
if(!this.b)this.a.e=D.o.G(Date.now(),1e5)
w=this.a
v=w.gCj(0)
u=w.d
u===$&&C.c()
w.d=A.fQO(null,null,u.b,v)
w.y=0
w.z=""
w.Q=-1
w.at=""
w.as=0
w.cx=!1
w.x.a9(0)
w.ax=null
w.r=A.Cr(w.d,new A.vT(w.z,w.Q,!1))},
$S:0}
A.ek3.prototype={
$1(d){return new C.K(d,new A.ek4(),d.$ti.k("K<ak.E,n>")).aI(0,", ")},
$S:1805}
A.ek4.prototype={
$1(d){return A.l0(d).b},
$S:77}
A.ejR.prototype={
$1(d){var w=this.a.d
w===$&&C.c()
return!w.x.ai(0,d.a)},
$S:z+4}
A.ejS.prototype={
$1(d){var w=this.a.d
w===$&&C.c()
return!w.z.t(0,d.a)},
$S:z+4}
A.ejT.prototype={
$1(d){var w=this.a.d
w===$&&C.c()
return!w.y.t(0,d)},
$S:33}
A.ejW.prototype={
$1(d){return!d.a},
$S:z+6}
A.ejX.prototype={
$1(d){return d.b<3},
$S:z+6}
A.ejY.prototype={
$1(d){return!d.c},
$S:z+6}
A.ejZ.prototype={
$1(d){return!d.d},
$S:z+6}
A.ek_.prototype={
$1(d){return!d.c},
$S:z+6}
A.ek0.prototype={
$1(d){var w=this.a.d
w===$&&C.c()
w=w.at.h(0,d.a)
w=w==null?null:w.a
return w!==d.b},
$S:z+4}
A.ek1.prototype={
$1(d){return d.a},
$S:z+67}
A.ek2.prototype={
$1(d){var w=this.a.d
w===$&&C.c()
w=w.at.h(0,d.a)
w=w==null?null:w.b.c
return(w==null?0:w)<2},
$S:z+4}
A.ejU.prototype={
$1(d){var w=d.b
if(w==="outlet"||w==="gfci"){w=this.a.d
w===$&&C.c()
w=w.at.h(0,d.a)
w=(w==null?null:w.c)!==!0}else w=!1
return w},
$S:z+4}
A.ejV.prototype={
$1(d){return d.b==="fan"},
$S:z+4}
A.ekH.prototype={
$0(){return this.a.cc1(this.b)},
$S:0}
A.ekJ.prototype={
$0(){var w=this.a
if(w.Q>=0)w.avB()
else{w.m(new A.ekv(w))
w.b1M()}},
$S:0}
A.ekv.prototype={
$0(){return this.a.as=0},
$S:0}
A.ekI.prototype={
$1(d){var w=this.a,v=w.d
v===$&&C.c()
return A.i32(v,w.w.gu2()/1000,w.x)},
$S:z+8}
A.eky.prototype={
$0(){var w=this.a,v=w.d
v===$&&C.c()
return w.kw(v.aH4())},
$S:0}
A.ekz.prototype={
$0(){var w=this.a
return w.m(new A.ekx(w,this.b))},
$S:0}
A.ekx.prototype={
$0(){var w,v=this.b.b
v.f=!v.f
v=this.a
w=v.d
w===$&&C.c()
v.r=A.Cr(w,new A.vT(v.z,v.Q,!1))},
$S:0}
A.ekA.prototype={
$0(){var w=this.a
return w.m(new A.ekw(w,this.b))},
$S:0}
A.ekw.prototype={
$0(){var w,v=this.b.b
v.e=!v.e
v=this.a
w=v.d
w===$&&C.c()
v.r=A.Cr(w,new A.vT(v.z,v.Q,!1))},
$S:0}
A.ekK.prototype={
$0(){var w=this.a
return w.m(new A.eku(w,this.b))},
$S:0}
A.eku.prototype={
$0(){var w,v=this.a
v.y=this.b
v.z=""
w=v.d
w===$&&C.c()
v.r=A.Cr(w,new A.vT("",v.Q,!1))},
$S:0}
A.ekL.prototype={
$0(){var w=this.a
return w.m(new A.ekt(w))},
$S:0}
A.ekt.prototype={
$0(){var w=this.a,v=w.d
v===$&&C.c()
v.aDw()
w.y=2
w.z=""
w.r=A.Cr(w.d,new A.vT("",w.Q,!1))
w.A6("The boxes, the cable and the walls are done. Now the wiring: pick an Outlet or a Switch from the tray, then tap its box on the wall.",!0)},
$S:0}
A.ekM.prototype={
$0(){var w=this.a
return w.m(new A.eks(w,this.b))},
$S:0}
A.eks.prototype={
$0(){var w,v=this.a,u=this.b.a,t=v.z===u?"":u
v.z=t
v.as=0
w=v.d
w===$&&C.c()
v.r=A.Cr(w,new A.vT(t,v.Q,!1))
if(v.z.length!==0)v.cmJ(u)},
$S:0}
A.ekN.prototype={
$0(){var w=this.a,v=w.d
v===$&&C.c()
return w.kw(v.cMc())},
$S:0}
A.ekO.prototype={
$1(d){return!this.a.b.b.iR(0,d.a)},
$S:z+12}
A.ekP.prototype={
$0(){var w=this.a
return w.m(new A.ekr(w,this.b,this.c))},
$S:0}
A.ekr.prototype={
$0(){var w,v=this,u=v.c,t=u.a
if(v.b.b.b.iR(0,t)){v.a.avD("That wire is already fastened. Tap the wire in the 3D view to take it off.")
return}w=v.a
if(w.at===t)t=""
w.at=t
if(t.length!==0)w.A6(u.b+": now tap the screw it belongs on, or press the matching button below.",!0)},
$S:0}
A.ekB.prototype={
$1(d){return!this.a.b.b.ai(0,d.a)},
$S:z+11}
A.ekC.prototype={
$0(){var w=this.a
return w.b_w(w.Q,this.b.a)},
$S:0}
A.ekD.prototype={
$0(){var w=this.a,v=w.d
v===$&&C.c()
return w.kw(v.bfH(w.Q))},
$S:0}
A.ekE.prototype={
$0(){var w=this.a,v=w.d
v===$&&C.c()
return w.kw(v.cQn(w.Q))},
$S:0}
A.ekF.prototype={
$0(){var w=this.a,v=w.d
v===$&&C.c()
return w.kw(v.bay(w.Q))},
$S:0}
A.ekG.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&C.c()
w=u.cRo(v.Q)
v.kw(w)
if(w.a)v.avB()},
$S:0}
A.ekc.prototype={
$1(d){return new C.e0(new A.ekb(this.a),null)},
$S:20}
A.ekb.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=C.aI(d,l,x.w).w,j=this.a,i=j.d
i===$&&C.c()
w=i.c
w===$&&C.c()
v=x.p
i=C.a([C.d("Job: "+w,l,l,l,l,l,l,D.ds,l,l,l),D.at,C.d("Mistakes "+i.f+" \xb7 Shocks "+i.r+" \xb7 Lives "+i.e,l,l,l,l,l,l,B.IB,l,l,l),D.S,B.fkM,D.an],v)
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
p=A.l0(p)
m=t.c
m=m!=null?", turned on by "+A.l0(m).b:""
i.push(C.p(l,new C.x(o+" "+n+" at "+p.b+m,l,D.rB,l,l,l,l,l,l,l,l,l),D.f,l,l,new C.o(s,l,new C.bP(q,q,q,q),new C.bq(r,r,r,r),l,l,D.n),l,l,l,D.eO,D.bS,l,l,l))}i.push(D.S)
i.push(C.A(C.a([B.bw0,C.auA(l,l,l,l,!1,D.y,l,l,l,l,l,l,new A.ek8(j,e),l,l,l,l,l,l,l,l,j.d.b)],v),D.m,l,D.e,D.j,0,l,l))
i.push(D.an)
i.push(C.A(C.a([C.D(C.dV(B.faU,new A.ek9(j,d),l),1),D.ab,C.D(C.bJ(B.aQd,new A.eka(j,d),l),1)],v),D.m,l,D.e,D.j,0,l,l))
return C.bn(!0,new C.cV(new C.aY(0,1/0,0,k.a.b*0.8),C.cB(i,l,D.bV,l,l,D.ah,!0),l),!0,!1,D.af,!0,!0)},
$S:83}
A.ek8.prototype={
$1(d){var w=this.a,v=w.d
v===$&&C.c()
v.b=d
for(v=v.at,v=new C.dt(v,v.r,v.e);v.C();)v.d.b.r=d
this.b.$1(new A.ek6())
w.m(new A.ek7())},
$S:9}
A.ek6.prototype={
$0(){},
$S:0}
A.ek7.prototype={
$0(){},
$S:0}
A.ek9.prototype={
$0(){C.a6(this.b,!1).O(null)
this.a.avC(!0)},
$S:0}
A.eka.prototype={
$0(){C.a6(this.b,!1).O(null)
this.a.aXe()},
$S:0}
A.fg7.prototype={
$1(d){var w=this.a,v=d.a
return w>v[0]&&w<v[1]},
$S:707}
A.fg8.prototype={
$1(d){var w=this.a,v=d.a
return w>v[2]&&w<v[3]},
$S:707}
A.fmP.prototype={
$1(d){return 5000+this.a.a*100+d},
$S:76}
A.fmQ.prototype={
$1(d){return 3000+this.a.a},
$S:76}
A.fmR.prototype={
$1(d){return 2000+this.a.a},
$S:76}
A.fmU.prototype={
$5$col$round(d,e,f,g,h){var w=this.a
w.f=3
w.b=d
w.d=0.5
w.e=0.9
if(h)w.hB(e.aC(0,B.fP),e.ad(0,B.fP),f.a/2,g,14)
else w.bO(e,f,g)
w.e=0
w.d=1
w.f=2},
$3(d,e,f){return this.$5$col$round(d,e,f,D.b1,!1)},
$4$round(d,e,f,g){return this.$5$col$round(d,e,f,D.b1,g)},
$4$col(d,e,f,g){return this.$5$col$round(d,e,f,g,!1)},
$S:z+68}
A.fmS.prototype={
$3(d,e,f){return H.bBE(d,e,0,f+this.a.a*5)},
$S:440}
A.fmT.prototype={
$0(){var w,v=this.a
if(v.c)w="A place in the ceiling for a "+(v.e==="fan"?"fan (needs a fan-rated box)":"light")+"."
else w="A place on the wall at "+(v.e==="switch"?"switch height, about 48 inches from the floor":"outlet height, about 16 inches from the floor")+"."
return new A.d1(v.b,w,A.a1S(v,B.a7M),26)},
$S:z+69}
A.fCV.prototype={
$1(d){return d.e==="fan"},
$S:z+26}
A.fCW.prototype={
$1(d){return d.b==="light"},
$S:z+4}
A.cor.prototype={
$1(d){return d.a===this.a&&!d.c},
$S:z+9}
A.con.prototype={
$1(d){return d.a===B.Z0},
$S:z+9}
A.cop.prototype={
$1(d){return d.c},
$S:z+9}
A.coq.prototype={
$1(d){return d.c},
$S:z+9}
A.coo.prototype={
$1(d){return B.vM.h(0,d.a).e===this.a&&!d.c},
$S:z+9}
A.emb.prototype={
$0(){var w=this.a
w.z=this.b
w.Q=this.c},
$S:0}
A.emc.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new A.ema(w))},
$S:0}
A.ema.prototype={
$0(){return this.a.z=null},
$S:0}
A.em0.prototype={
$0(){return this.a.y=0},
$S:0}
A.em5.prototype={
$0(){return this.a.as=!0},
$S:0}
A.em6.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new A.em4(w))},
$S:11}
A.em4.prototype={
$0(){return this.a.as=!1},
$S:0}
A.em7.prototype={
$0(){var w=this.a,v=w.d
v===$&&C.c()
w.r=A.afj(v.d)
w.y=this.b},
$S:0}
A.em8.prototype={
$1(d){return this.a.cc8()},
$S:8}
A.em9.prototype={
$1(d){return this.a.c3t()},
$S:8}
A.em3.prototype={
$1(d){var w=null
return C.ej(C.a([C.bJ(B.fid,new A.em2(this.a,d),w)],x.p),w,w,E.mW,B.fhk,w,w,w,w,B.fnp,w)},
$S:19}
A.em2.prototype={
$0(){C.a6(this.b,!1).O(null)
this.a.av_()},
$S:0}
A.em_.prototype={
$1(d){var w=null,v=this.a,u=v.d
u===$&&C.c()
u=C.d("Every problem on the customer's list is fixed.\n\nMistakes: "+u.f+"\nShocks: "+u.r+"\nLives left: "+u.e+"\n\nThe next call will have different problems.",w,w,w,w,w,w,B.a6O,w,w,w)
return C.ej(C.a([C.bK(!1,B.aQb,w,w,!0,w,w,new A.elY(d),w,w),C.bJ(B.fjq,new A.elZ(v,d),w)],x.p),w,w,E.mW,u,w,w,w,w,B.fpK,w)},
$S:19}
A.elY.prototype={
$0(){C.a6(this.a,!1).O(null)
return null},
$S:0}
A.elZ.prototype={
$0(){C.a6(this.b,!1).O(null)
this.a.av_()},
$S:0}
A.em1.prototype={
$0(){var w,v,u=this.a
u.e=D.o.G(Date.now(),1e5)
w=u.gCj(0)
v=u.d
v===$&&C.c()
w=A.h73(v.b,w)
u.d=w
u.r=A.afj(w.d)
u.at=!1
u.z=null
u.y=0},
$S:0}
A.emo.prototype={
$0(){return this.a.cwo(this.b)},
$S:0}
A.emk.prototype={
$1(d){return d<=5},
$S:33}
A.emj.prototype={
$1(d){var w=this.a,v=w.d
v===$&&C.c()
return A.hfo(v.d,w.w.gu2()/1000)},
$S:z+8}
A.eml.prototype={
$1(d){return!d.c},
$S:z+9}
A.emm.prototype={
$1(d){return B.vM.h(0,d.a).a},
$S:z+71}
A.emn.prototype={
$0(){var w=this.a
return w.m(new A.emi(w,this.b))},
$S:0}
A.emi.prototype={
$0(){return this.a.x=this.b},
$S:0}
A.emh.prototype={
$1(d){return new C.e0(new A.emg(this.a),null)},
$S:20}
A.emg.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=this.a,j=k.d
j===$&&C.c()
w=x.p
j=C.a([B.ffM,D.at,C.d("Mistakes "+j.f+" \xb7 Shocks "+j.r+" \xb7 Lives "+j.e,l,l,l,l,l,l,B.IB,l,l,l),D.S],w)
v=k.d.c
v===$&&C.c()
u=v.length
t=0
for(;t<v.length;v.length===u||(0,C.L)(v),++t){s=v[t]
r=D.c.j(0.05)
q=new C.aW(14,14)
p=new C.aA(s.c?D.b7.j(0.6):D.bF,1,D.q,-1)
o=s.c?"\u2705":"\ud83d\udd27"
n=B.vM.h(0,s.a).a
m=s.c?D.az:D.c
j.push(C.p(l,new C.x(o+" "+n,l,new C.G(!0,m,l,l,l,l,13.5,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l),l,l,l,l,l,l,l,l,l),D.f,l,l,new C.o(r,l,new C.bP(p,p,p,p),new C.bq(q,q,q,q),l,l,D.n),l,l,l,D.cH,D.bk,l,l,l))}j.push(D.an)
j.push(B.fkW)
j.push(D.O)
j.push(C.A(C.a([B.buZ,C.auA(l,l,l,l,!1,D.y,l,l,l,l,l,l,new A.eme(k,e),l,l,l,l,l,l,l,l,k.d.b)],w),D.m,l,D.e,D.j,0,l,l))
j.push(C.bJ(B.fnP,new A.emf(k,d),l))
return C.bn(!0,C.cB(j,l,D.bV,l,l,D.ah,!0),!0,!1,D.af,!0,!0)},
$S:83}
A.eme.prototype={
$1(d){var w=this.a.d
w===$&&C.c()
w.b=d
this.b.$1(new A.emd())},
$S:9}
A.emd.prototype={
$0(){},
$S:0}
A.emf.prototype={
$0(){C.a6(this.b,!1).O(null)
this.a.av_()},
$S:0}
A.f9o.prototype={
$1(d){return d.c===this.a},
$S:z+14}
A.bPG.prototype={
$1(d){var w,v,u,t=this.a,s=t.fr,r=A.hjv(t,A.bzu(s==null?"tv100":s),0)
t=r.c
s=r.a/2
w=t-s-18
v=this.b
u=-v/2+14
if(w<u)w=t+s+18
w=D.k.D(w,u,v/2-14)
return new C.y(new C.y(w,d),Math.atan2(t-w,-d))},
$S:1807}
A.bPH.prototype={
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
$S:1808};(function aliases(){var w=A.aLC.prototype
w.buP=w.q})();(function installTearOffs(){var w=a._instance_1u,v=a._instance_2u,u=a._instance_0u,t=a.installInstanceTearOff,s=a._instance_0i,r=a.installStaticTearOff
w(A.aRu.prototype,"gcLR","cLS",20)
var q
v(q=A.aCs.prototype,"gbJS","bJT",65)
u(q,"gDL","jg",0)
t(q,"gc33",0,1,null,["$2$keepTour","$1"],["avy","DJ"],70,0,0)
w(q,"gc35","c36",5)
u(q,"gcya","cyb",13)
u(q,"gctL","a1q",0)
u(q,"gb4t","cto",0)
u(q,"gb4H","azz",0)
u(q,"gc34","DK",13)
u(q,"gcbW","a_7",13)
u(q,"gcbl","ZZ",13)
u(q,"gaLb","bxL",13)
u(q,"gc39","c3a",0)
u(q,"gcjO","cjP",0)
s(q,"gc37","c38",0)
r(A,"i1L",3,null,["$3"],["i2H"],48,0)
u(q=A.ayj.prototype,"gc3e","xo",0)
u(q,"gIl","nX",0)
w(q,"gIm","In",5)
u(q,"gcgU","cgV",0)
u(q,"gcvQ","cvR",0)
u(q=A.aEe.prototype,"gIl","nX",0)
w(q,"gIm","In",5)
u(q,"gc3f","c3g",0)
u(q=A.ayy.prototype,"gIl","nX",0)
w(q,"gIm","In",5)
s(q,"gc3c","c3d",0)
u(q=A.azr.prototype,"gIl","nX",0)
w(q,"gIm","In",5)
u(q=A.aCX.prototype,"gc3i","aXc",0)
w(q,"gc3j","c3k",5)
w(A.b3A.prototype,"gaog","bms",64)
u(q=A.aD3.prototype,"gbNN","aRF",0)
u(q,"gbAg","bAh",0)
u(q,"gc3n","avB",0)
w(q,"gc3p","c3q",5)
u(q=A.aD7.prototype,"gc3u","aXg",0)
w(q,"gc3v","c3w",5)})();(function inheritance(){var w=a.mixinHard,v=a.inheritMany,u=a.inherit
v(C.aC,[A.E,A.mt,A.d1,A.t2,A.zo,A.WI,A.jf,A.bPx,A.C0,A.b9l,A.b9G,A.beH,A.dgs,A.LG,A.dm_,A.daC,A.EF,A.a8L,A.Hf,A.L7,A.aRu,A.mi,A.XF,A.zN,A.a3A,A.BR,A.a41,A.hk,A.Dp,A.px,A.b6N,A.nv,A.aTO,A.a44,A.aTT,A.bPI,A.Fj,A.jy,A.M8,A.cgg,A.Eu,A.nf,A.W8,A.cg6,A.ys,A.pK,A.WO,A.atV,A.aSg,A.eE,A.b3A,A.kW,A.vT,A.u3,A.Lz,A.com,A.VS,A.uz,A.a8M,A.B2,A.cl0,A.zV,A.bp8,A.aTU,A.cuL])
v(C.hT,[A.bVs,A.bVt,A.bVr,A.bVu,A.bVv,A.fL0,A.fKZ,A.fL_,A.fKY,A.fKS,A.bGi,A.bGh,A.clW,A.clX,A.clS,A.clT,A.clV,A.eSu,A.eSt,A.eSq,A.eSr,A.eSs,A.eSo,A.bOl,A.bOh,A.bOp,A.bOk,A.bOs,A.bOq,A.bOu,A.bHm,A.bHj,A.bHk,A.bHl,A.bHn,A.bHp,A.dKb,A.dK6,A.dKq,A.dK9,A.dKt,A.fnR,A.fLj,A.fnX,A.fnY,A.fnV,A.fnW,A.fnT,A.fnU,A.flV,A.flW,A.f9n,A.flK,A.fLi,A.fLf,A.bOZ,A.bPA,A.bPB,A.bPF,A.bPE,A.bPD,A.bPC,A.e2s,A.e2p,A.e2q,A.e2r,A.e1c,A.e0P,A.e1M,A.e1L,A.e1w,A.e1t,A.e2k,A.e2j,A.e2c,A.e27,A.e1U,A.e1R,A.e1j,A.e1l,A.e1m,A.e1k,A.e1f,A.e1g,A.e2l,A.e1i,A.e1h,A.e0i,A.e0c,A.e0d,A.e0e,A.e2n,A.e0q,A.e0p,A.e0k,A.e1C,A.dmp,A.flY,A.fm6,A.flZ,A.fm_,A.fm1,A.fm4,A.fm2,A.fg5,A.fg3,A.fg2,A.foN,A.foO,A.foP,A.f6T,A.fgD,A.fgp,A.fgq,A.fgr,A.fgs,A.fgv,A.fgw,A.fgx,A.fgy,A.fgz,A.fgA,A.fgB,A.fgC,A.fgt,A.fgu,A.fmd,A.fm9,A.fmc,A.fmb,A.dKu,A.fDp,A.fDo,A.d27,A.d29,A.d2p,A.d2v,A.eM5,A.eMd,A.eMe,A.d55,A.d5f,A.d5g,A.d5i,A.dca,A.dcl,A.dck,A.dcn,A.fmO,A.fmN,A.fmM,A.flX,A.foe,A.cga,A.cgb,A.cg7,A.cgc,A.cgd,A.cge,A.cgf,A.cg8,A.cg9,A.fmL,A.fmJ,A.fmD,A.fmG,A.fmE,A.fmF,A.fmK,A.fmH,A.fmI,A.fCB,A.fCA,A.eg3,A.efP,A.efU,A.eg4,A.eg6,A.eg5,A.efZ,A.efX,A.fKR,A.cl4,A.clb,A.clc,A.cld,A.cle,A.clg,A.clf,A.cl3,A.cl1,A.cl2,A.cl9,A.cla,A.cl5,A.cl6,A.cl7,A.cl8,A.ejF,A.ejG,A.ekd,A.ejN,A.ejK,A.ek3,A.ek4,A.ejR,A.ejS,A.ejT,A.ejW,A.ejX,A.ejY,A.ejZ,A.ek_,A.ek0,A.ek1,A.ek2,A.ejU,A.ejV,A.ekI,A.ekO,A.ekB,A.ekc,A.ek8,A.fg7,A.fg8,A.fmP,A.fmQ,A.fmR,A.fmU,A.fmS,A.fCV,A.fCW,A.cor,A.con,A.cop,A.coq,A.coo,A.em8,A.em9,A.em3,A.em_,A.emk,A.emj,A.eml,A.emm,A.emh,A.eme,A.f9o,A.bPG,A.bPH])
v(C.kf,[A.bVq,A.clU,A.bOi,A.bOn,A.bOm,A.fp_,A.fp0,A.fp1,A.fp2,A.fp3,A.f83,A.fLg,A.fLh,A.e1K,A.e2i,A.e26,A.fm8,A.fm0,A.fm3,A.fm7,A.fg4,A.fma,A.d2a,A.eMa,A.d54,A.fof,A.clh,A.ekb,A.emg])
u(A.AE,C.oG)
v(C.mJ,[A.b3N,A.bcK,A.bgi])
v(C.ag,[A.ats,A.a5X,A.N4,A.MM,A.GX,A.a8r,A.a3R,A.azq,A.V7,A.Va,A.aq0])
v(C.ah,[A.aLC,A.bhQ,A.aCs,A.bhR,A.ayj,A.aEe,A.ayy,A.azr,A.aCX,A.aD3,A.aD7])
u(A.boX,A.aLC)
v(C.j3,[A.eSp,A.bOt,A.bOo,A.bOj,A.bOr,A.dKa,A.dKn,A.dKh,A.dKi,A.dKg,A.dK7,A.dKr,A.dKp,A.dKo,A.dK5,A.dKc,A.dKd,A.dKe,A.dKf,A.dK8,A.dKk,A.dKl,A.dKm,A.dKj,A.dKs,A.flL,A.e1O,A.e1P,A.e1N,A.e1Q,A.e1d,A.e1Y,A.e1n,A.e1o,A.e1p,A.e1q,A.e1a,A.e19,A.e1b,A.e17,A.e18,A.e16,A.e0Q,A.e1G,A.e1F,A.e1H,A.e1I,A.e1J,A.e1u,A.e1s,A.e1v,A.e1r,A.e2b,A.e2a,A.e2d,A.e2e,A.e2f,A.e2g,A.e2h,A.e22,A.e20,A.e21,A.e23,A.e2_,A.e24,A.e25,A.e1T,A.e1V,A.e28,A.e1Z,A.e1X,A.e1S,A.e1W,A.e0h,A.e0f,A.e1e,A.e29,A.e1D,A.e1E,A.e0g,A.e0W,A.e0X,A.e0Y,A.e0Z,A.e1_,A.e10,A.e0V,A.e11,A.e0U,A.e12,A.e0T,A.e13,A.e0S,A.e14,A.e0R,A.e15,A.e2o,A.e2m,A.e0J,A.e0K,A.e0L,A.e0M,A.e0N,A.e0O,A.e0I,A.e0z,A.e0r,A.e0A,A.e0o,A.e0B,A.e0C,A.e0n,A.e0D,A.e0E,A.e0F,A.e0m,A.e0G,A.e0l,A.e0H,A.e0s,A.e0t,A.e0u,A.e0v,A.e0w,A.e0x,A.e0y,A.e0j,A.e1z,A.e1A,A.e1y,A.e1B,A.e1x,A.ca8,A.fm5,A.fn7,A.dKx,A.dKy,A.dKw,A.dKz,A.dKv,A.dKC,A.dKD,A.dKE,A.dKF,A.dKG,A.dKH,A.dKI,A.dKJ,A.dKA,A.dKB,A.cpA,A.cpB,A.bRN,A.d2f,A.d2g,A.d2e,A.d28,A.d2b,A.d2c,A.d2d,A.d2h,A.d2s,A.d2q,A.d2o,A.d2r,A.d2n,A.d2t,A.d2u,A.d2w,A.d2m,A.d2x,A.d2l,A.d2y,A.d2k,A.d2z,A.d2j,A.d2A,A.d2i,A.eM8,A.eM9,A.eM7,A.eM1,A.eM2,A.eM3,A.eM4,A.eM6,A.eMh,A.eMf,A.eMc,A.eMg,A.eMb,A.d5a,A.d5b,A.d59,A.d52,A.d56,A.d57,A.d58,A.d53,A.d5l,A.d5h,A.d5e,A.d5j,A.d5d,A.d5k,A.d5c,A.dcf,A.dcg,A.dce,A.dc9,A.dcb,A.dcc,A.dcd,A.dco,A.dcj,A.dcm,A.dci,A.dch,A.c5s,A.fmA,A.fmB,A.fmC,A.eg1,A.eg2,A.eg0,A.efV,A.efN,A.efO,A.efS,A.efT,A.eg_,A.efR,A.efQ,A.eg8,A.eg7,A.efW,A.efY,A.eko,A.ekp,A.ekn,A.ejD,A.ejE,A.ejC,A.ejO,A.ejH,A.ek5,A.ejP,A.ekk,A.ekl,A.ekm,A.eki,A.ekj,A.ekh,A.eke,A.ekf,A.ekg,A.ekq,A.ejL,A.ejM,A.ejI,A.ejJ,A.ejQ,A.ekH,A.ekJ,A.ekv,A.eky,A.ekz,A.ekx,A.ekA,A.ekw,A.ekK,A.eku,A.ekL,A.ekt,A.ekM,A.eks,A.ekN,A.ekP,A.ekr,A.ekC,A.ekD,A.ekE,A.ekF,A.ekG,A.ek6,A.ek7,A.ek9,A.eka,A.fmT,A.emb,A.emc,A.ema,A.em0,A.em5,A.em6,A.em4,A.em7,A.em2,A.elY,A.elZ,A.em1,A.emo,A.emn,A.emi,A.emd,A.emf])
v(C.au,[A.abv,A.bgU,A.b54,A.AZ,A.a5Y])
u(A.qV,C.m5)
w(A.aLC,C.c9)})()
C.jT(b.typeUniverse,JSON.parse('{"ats":{"ag":[],"r":[]},"AE":{"aB":[]},"b3N":{"aB":[]},"boX":{"ah":["ats"]},"a5X":{"ag":[],"r":[]},"bhQ":{"ah":["a5X"]},"abv":{"au":[],"r":[]},"bcK":{"aB":[]},"N4":{"ag":[],"r":[]},"aCs":{"ah":["N4"]},"bgU":{"au":[],"r":[]},"bgi":{"aB":[]},"GX":{"ag":[],"r":[]},"a8r":{"ag":[],"r":[]},"a3R":{"ag":[],"r":[]},"azq":{"ag":[],"r":[]},"MM":{"ag":[],"r":[]},"bhR":{"ah":["MM"]},"b54":{"au":[],"r":[]},"AZ":{"au":[],"r":[]},"ayj":{"ah":["GX"]},"aEe":{"ah":["a8r"]},"ayy":{"ah":["a3R"]},"azr":{"ah":["azq"]},"a5Y":{"au":[],"r":[]},"V7":{"ag":[],"r":[]},"aCX":{"ah":["V7"]},"Va":{"ag":[],"r":[]},"aD3":{"ah":["Va"]},"aq0":{"ag":[],"r":[]},"aD7":{"ah":["aq0"]}}'))
var y={g:"A shut-off valve goes on the pipe that comes out of the wall.",x:"Fasten the bare copper ground to the GREEN screw.",b:"Move it with the arrow buttons, turn it, change its colour or take it out.",s:"Pick a paint colour above to change this wall.",E:"Switch the power on and flip the wall switch.",j:"The bare copper ground wire only goes on the GREEN screw.",u:"The gold screws are BRASS. They are for the HOT wire (black).",o:"The white-silver screws are NICKEL. They are for the NEUTRAL wire (white).",k:"There is no medicine left. Buy some in the shop.",r:"Turn the breaker OFF and test that the wires are dead."}
var x=(function rtii(){var w=C.ax
return{e:w("lS<w?>"),l:w("bm<n,n>"),J:w("bm<n,N>"),M:w("eY<n>"),m:w("aSg"),eP:w("qV"),gN:w("H9"),fa:w("ay<LR?>"),fC:w("Hf"),gQ:w("O<L7>"),V:w("O<ac>"),O:w("O<w>"),gw:w("O<Lz>"),dh:w("O<H9>"),_:w("O<a41>"),D:w("O<nv>"),cX:w("O<aTO>"),A:w("O<a44>"),ha:w("O<Hf>"),r:w("O<mi>"),E:w("O<t2>"),Z:w("O<jy>"),gL:w("O<aj<H>>"),ez:w("O<a4<n,aC>>"),f4:w("O<a4<n,cf>>"),T:w("O<B2>"),dN:w("O<u>"),B:w("O<pK>"),F:w("O<nf>"),v:w("O<hn>"),z:w("O<mt>"),a6:w("O<+(a7S,H)>"),L:w("O<+(n,n)>"),f:w("O<+(N,N)>"),I:w("O<+(N,H)>"),ek:w("O<+(H,n)>"),al:w("O<+(H,N,R)>"),X:w("O<+(H,H,H)>"),U:w("O<+(N,N,N,N)>"),az:w("O<+(H,H,N,R,n)>"),y:w("O<a8L>"),K:w("O<a8M>"),h:w("O<WI>"),gD:w("O<WO>"),s:w("O<n>"),o:w("O<E>"),p:w("O<r>"),Q:w("O<zN>"),fJ:w("O<b9l>"),bl:w("O<C0>"),a:w("O<zV>"),b:w("O<kW>"),fG:w("O<bp8>"),u:w("O<R>"),n:w("O<N>"),t:w("O<H>"),dS:w("O<aB?>"),k:w("O<cf>"),eF:w("cs<ah<ag>>"),dg:w("aj<N>"),j:w("aj<@>"),c:w("a4<n,@>"),G:w("a4<@,@>"),w:w("iz"),P:w("cq"),q:w("d1"),aU:w("aC"),dx:w("u"),ej:w("Iz"),fX:w("mt"),aB:w("+(N,N)"),c5:w("dw<H>"),cH:w("atV"),N:w("n"),e7:w("bo<N>"),R:w("E"),ac:w("cx<H>"),fZ:w("a2<Eu>"),cc:w("a2<n>"),dD:w("a2<H>"),bB:w("b9G"),c9:w("beH"),W:w("R"),i:w("N"),C:w("@"),S:w("H"),d:w("LG?"),eT:w("LR?"),g:w("aj<@>?"),dy:w("a4<n,@>?"),Y:w("a4<@,@>?"),cU:w("pN?"),x:w("cf"),H:w("~")}})();(function constants(){var w=a.makeConstList
B.aU0=new A.eE(!0,"The water is on and nothing leaks. Perfect job!",!1,"")
B.aU1=new A.eE(!0,"Primer and paint rolled on.",!1,"")
B.aU2=new A.eE(!1,"This call is over. Start a new one.",!1,"")
B.aU3=new A.eE(!1,"That is not a place for a sheet.",!1,"")
B.aU4=new A.eE(!0,"Sanded smooth. Wear a mask: the dust is bad to breathe.",!1,"")
B.a8L=new A.eE(!1,"There is no device here.",!1,"")
B.aU5=new A.eE(!0,"You look closely. Everything looks fine here.",!1,"")
B.aU6=new A.eE(!1,"ZAP! You were shocked badly and it was your last life. Always turn the breaker OFF and test before you touch wires.",!0,"shock")
B.aU7=new A.eE(!0,"Paper tape pressed into the seam.",!1,"")
B.aU8=new A.eE(!0,"Unplugged.",!1,"")
B.aU9=new A.eE(!0,"Breaker OFF. It is safe to work on the wires.",!1,"")
B.aUa=new A.eE(!1,"ZAP! You were shocked badly. That was your last life: the job is over. Lesson: ALWAYS turn the breaker OFF and test the wires before you touch them.",!0,"shock")
B.aUb=new A.eE(!1,"There is nothing there.",!1,"")
B.aUc=new A.eE(!1,"The outlet is burnt. Nothing works. Pull it out and put in a new one.",!0,"")
B.aUd=new A.eE(!0,"The water is on and nothing leaks yet, but the job is not finished.",!1,"")
B.aUe=new A.eE(!0,"Sheet hung. Now screw it to the studs.",!1,"")
B.aUf=new A.eE(!0,"Hole drilled through the middle of the stud, at the cable height. Holes go in the center so a nail cannot reach the cable.",!1,"")
B.aUg=new A.eE(!0,"Plugged in. Nothing happens because the breaker is off. Turn it on to test.",!1,"")
B.aUh=new A.eE(!0,"You flipped the tripped breaker fully OFF. Fix the problem before you turn it on again.",!1,"")
B.aUi=new A.eE(!0,"Click.",!1,"")
B.aUj=new A.eE(!0,"The wires are folded back and the device is in the box. Now put the cover on.",!1,"")
B.aUk=new A.eE(!0,"Breaker OFF. The wires on this circuit are dead now. (Always test them to be sure.)",!1,"")
B.aUl=new A.eE(!1,"Nothing is wet.",!1,"")
B.aUm=new A.eE(!0,"Power is on.",!1,"")
B.aUn=new A.eE(!0,"Water OFF at the main valve. You can cut into the pipes safely now.",!1,"")
B.aUo=new A.eE(!0,"Opening cut around the box with the drywall saw. Keep it tight: the plate has to cover the edge.",!1,"")
B.aUp=new A.eE(!0,"Device pulled out of the box.",!1,"")
B.aUq=new A.eE(!0,"Screw set just below the paper, not through it.",!1,"")
B.aUr=new A.eE(!1,"ZAP! You touched a live wire. In Learn mode you are not hurt, but in real life this can kill. Switch the breaker OFF and test the wires first.",!0,"shock")
B.aUs=new A.eE(!0,"Cover on. Now you can turn the breaker on and test.",!1,"")
B.Un=new A.eE(!1,"",!1,"")
B.aUt=new A.eE(!0,"Device taken out. You can put it somewhere else, or put in a new one.",!1,"")
B.aUu=new A.eE(!0,"Breaker back ON.",!1,"")
B.aUv=new A.eE(!1,"That is not a stud.",!1,"")
B.aUw=new A.eE(!0,"Off.",!1,"")
B.aUx=new A.eE(!1,"Nothing to flip yet.",!1,"")
B.aUy=new A.eE(!0,"Wire taken off.",!1,"")
B.aUz=new A.eE(!0,"The mud is dry.",!1,"")
B.aUA=new A.eE(!0,"Breaker reset.",!1,"")
B.aUB=new A.eE(!0,"Box mounted. (Careful: this is not a fan-rated box. A fan on it could fall.)",!1,"")
B.fpf=new C.x("Tap a piece of furniture, or add one:",null,N.SN,null,null,null,null,null,null,null,null,null)
B.e4m=new C.C(D.n1,B.fpf,null)
B.aUI=new C.bH(D.a3,null,null,B.e4m,null)
B.Ej=new C.w(1,0.08627450980392157,0.10588235294117647,0.1411764705882353,D.t)
B.aXC=new C.bP(D.Y,D.Y,A0.uI,D.Y)
B.b_3=new C.o(B.Ej,null,B.aXC,null,null,null,D.n)
B.fpR=new C.x("\u2600\ufe0f Let it dry",null,K.zj,null,null,null,null,null,null,null,null,null)
B.b36=new C.cr(D.A,null,null,B.fpR,null)
B.fpD=new C.x("\u23e9 Skip to the wiring",null,K.zj,null,null,null,null,null,null,null,null,null)
B.b3e=new C.cr(D.A,null,null,B.fpD,null)
B.fes=new C.x("\ud83c\udfd7\ufe0f",null,D.uv,null,null,null,null,null,null,null,null,null)
B.b3t=new C.cr(D.A,null,null,B.fes,null)
B.feh=new C.x("\ud83c\udfe0",null,D.aP8,null,null,null,null,null,null,null,null,null)
B.b3T=new C.cr(D.A,null,null,B.feh,null)
B.b5c=new C.w(1,0.9294117647058824,0.9098039215686274,0.8627450980392157,D.t)
B.b5n=new C.w(1,0.9725490196078431,0.9647058823529412,0.9333333333333333,D.t)
B.wK=new C.w(1,0.5450980392156862,0.3686274509803922,0.20392156862745098,D.t)
B.ab3=new C.w(1,0.611764705882353,0.5568627450980392,0.4588235294117647,D.t)
B.ab6=new C.w(1,0.24705882352941178,0.5607843137254902,0.30980392156862746,D.t)
B.wL=new C.w(1,0.9450980392156862,0.9450980392156862,0.9176470588235294,D.t)
B.b62=new C.w(1,0.9098039215686274,0.9254901960784314,0.9372549019607843,D.t)
B.b63=new C.w(1,0.4823529411764706,0.5098039215686274,0.5450980392156862,D.t)
B.b6a=new C.w(1,0.10588235294117647,0.4980392156862745,0.20392156862745098,D.t)
B.abj=new C.w(1,0.7215686274509804,0.7450980392156863,0.7725490196078432,D.t)
B.DR=new C.w(1,0.5450980392156862,0.3686274509803922,0.23529411764705882,D.t)
B.abl=new C.w(1,0.8509803921568627,0.8274509803921568,0.7725490196078432,D.t)
B.abp=new C.w(1,0.6549019607843137,0.6784313725490196,0.7098039215686275,D.t)
B.iL=new C.w(1,0.16862745098039217,0.17647058823529413,0.2,D.t)
B.b6G=new C.w(1,0.13333333333333333,0.13725490196078433,0.14901960784313725,D.t)
B.DT=new C.w(1,0.8980392156862745,0.7529411764705882,0.4823529411764706,D.t)
B.K7=new C.w(1,0.8156862745098039,0.5098039215686274,0.27450980392156865,D.t)
B.Vm=new C.w(1,0.5411764705882353,0.41568627450980394,0.2784313725490196,D.t)
B.abw=new C.w(1,0.1843137254901961,0.4196078431372549,0.23529411764705882,D.t)
B.abC=new C.w(1,0.2980392156862745,0.5450980392156862,0.2901960784313726,D.t)
B.rY=new C.w(1,0.788235294117647,0.6274509803921569,0.22745098039215686,D.t)
B.abD=new C.w(1,0.9411764705882353,0.5411764705882353,0.1411764705882353,D.t)
B.abG=new C.w(1,0.5568627450980392,0.5843137254901961,0.6196078431372549,D.t)
B.b7G=new C.w(1,0.47843137254901963,0.35294117647058826,0.22745098039215686,D.t)
B.kD=new C.w(1,0.788235294117647,0.807843137254902,0.8392156862745098,D.t)
B.abM=new C.w(1,0.4196078431372549,0.45098039215686275,0.5019607843137255,D.t)
B.abN=new C.w(1,0.5568627450980392,0.35294117647058826,0.2901960784313726,D.t)
B.A5=new C.w(1,0.9294117647058824,0.9176470588235294,0.8784313725490196,D.t)
B.b8v=new C.w(1,0.22745098039215686,0.22745098039215686,0.24705882352941178,D.t)
B.b8B=new C.w(1,0.5490196078431373,0.5764705882352941,0.6078431372549019,D.t)
B.E1=new C.w(1,0.22745098039215686,0.24705882352941178,0.2784313725490196,D.t)
B.Vv=new C.w(1,0.8980392156862745,0.8980392156862745,0.8666666666666667,D.t)
B.Vx=new C.w(1,0.10588235294117647,0.11372549019607843,0.13333333333333333,D.t)
B.VA=new C.w(1,0.30980392156862746,0.6588235294117647,0.3764705882352941,D.t)
B.ac0=new C.w(1,0.8509803921568627,0.803921568627451,0.7215686274509804,D.t)
B.Ki=new C.w(1,0.11764705882352941,0.11764705882352941,0.12549019607843137,D.t)
B.b8Y=new C.w(1,0.8862745098039215,0.8745098039215686,0.8235294117647058,D.t)
B.b91=new C.w(1,0.42745098039215684,0.2901960784313726,1,D.t)
B.b9f=new C.w(1,0.5411764705882353,0.4823529411764706,0.41568627450980394,D.t)
B.b9j=new C.w(1,0.34901960784313724,0.3176470588235294,0.29411764705882354,D.t)
B.b9l=new C.w(1,0.24705882352941178,0.6470588235294118,0.3568627450980392,D.t)
B.b9r=new C.w(1,0.8117647058823529,0.792156862745098,0.7411764705882353,D.t)
B.VF=new C.w(1,0.8117647058823529,0.8901960784313725,0.9176470588235294,D.t)
B.VG=new C.w(1,0.3333333333333333,0.396078431372549,0.4823529411764706,D.t)
B.VH=new C.w(1,0.5529411764705883,0.7843137254901961,1,D.t)
B.VK=new C.w(1,1,0.9019607843137255,0.5019607843137255,D.t)
B.b9R=new C.w(1,0.9490196078431372,0.7607843137254902,0.10588235294117647,D.t)
B.acl=new C.w(1,0.9490196078431372,0.9411764705882353,0.9019607843137255,D.t)
B.ba8=new C.w(1,0.9686274509803922,0.9607843137254902,0.9333333333333333,D.t)
B.acp=new C.w(1,0.6823529411764706,0.6941176470588235,0.7372549019607844,D.t)
B.nE=new C.w(1,0.1843137254901961,0.49019607843137253,0.8823529411764706,D.t)
B.bag=new C.w(1,0.788235294117647,0.7176470588235294,0.6078431372549019,D.t)
B.VN=new C.w(1,0.8901960784313725,0.6627450980392157,0.10980392156862745,D.t)
B.E8=new C.w(1,0.7137254901960784,0.7372549019607844,0.7686274509803922,D.t)
B.bak=new C.w(1,0.8431372549019608,0.8509803921568627,0.8784313725490196,D.t)
B.bau=new C.w(1,0.22745098039215686,0.49019607843137253,0.26666666666666666,D.t)
B.uS=new C.w(1,0.9019607843137255,0.8823529411764706,0.8352941176470589,D.t)
B.VR=new C.w(1,0.3686274509803922,0.17647058823529413,0.13725490196078433,D.t)
B.Ea=new C.w(1,0.09019607843137255,0.09411764705882353,0.10588235294117647,D.t)
B.Ac=new C.w(1,0.9725490196078431,0.9725490196078431,0.9568627450980393,D.t)
B.acH=new C.w(1,0.9450980392156862,0.9568627450980393,0.9725490196078431,D.t)
B.bb3=new C.w(1,0.9019607843137255,0.9019607843137255,0.8784313725490196,D.t)
B.VV=new C.w(1,0.8941176470588236,0.9058823529411765,0.9176470588235294,D.t)
B.m6=new C.w(1,0.7686274509803922,0.6039215686274509,0.3843137254901961,D.t)
B.acV=new C.w(1,1,0.35294117647058826,0.12156862745098039,D.t)
B.acW=new C.w(1,0.5411764705882353,0.5607843137254902,0.596078431372549,D.t)
B.bbQ=new C.w(1,0.5411764705882353,0.29411764705882354,0.29411764705882354,D.t)
B.Ks=new C.w(1,0.9098039215686274,0.8509803921568627,0.7372549019607844,D.t)
B.t6=new C.w(1,1,0.9450980392156862,0.6588235294117647,D.t)
B.bc9=new C.w(1,0.5411764705882353,0.5411764705882353,0.5176470588235295,D.t)
B.bcb=new C.w(1,0.9647058823529412,0.9568627450980393,0.9254901960784314,D.t)
B.Kv=new C.w(1,0.47843137254901963,0.23137254901960785,0.1803921568627451,D.t)
B.ad6=new C.w(1,0.7058823529411765,0.3254901960784314,0.3254901960784314,D.t)
B.bcp=new C.w(1,0.6078431372549019,0.6078431372549019,0.592156862745098,D.t)
B.Ai=new C.w(1,0.9568627450980393,0.9450980392156862,0.9176470588235294,D.t)
B.t8=new C.w(1,0.8862745098039215,0.23137254901960785,0.23137254901960785,D.t)
B.pm=new C.w(1,0.9490196078431372,0.9490196078431372,0.9254901960784314,D.t)
B.ada=new C.w(1,0.788235294117647,0.8117647058823529,0.8392156862745098,D.t)
B.bcE=new C.w(1,0.9294117647058824,0.9215686274509803,0.8941176470588236,D.t)
B.W8=new C.w(1,0.8392156862745098,0.6823529411764706,0.4470588235294118,D.t)
B.add=new C.w(1,0.9098039215686274,0.9098039215686274,0.9098039215686274,D.t)
B.El=new C.w(1,0.2901960784313726,0.2980392156862745,0.32941176470588235,D.t)
B.adj=new C.w(1,0.3686274509803922,0.43137254901960786,0.5176470588235295,D.t)
B.bdg=new C.w(1,0.20784313725490197,0.47843137254901963,0.26666666666666666,D.t)
B.bdj=new C.w(1,0.3568627450980392,0.10196078431372549,0.09019607843137255,D.t)
B.adn=new C.w(1,0.23137254901960785,0.1843137254901961,0.14901960784313725,D.t)
B.ado=new C.w(1,0.8509803921568627,0.788235294117647,0.6588235294117647,D.t)
B.m8=new C.w(1,0.9686274509803922,0.9568627450980393,0.9254901960784314,D.t)
B.bdw=new C.w(1,0.13333333333333333,0.1450980392156863,0.16862745098039217,D.t)
B.Wd=new C.w(1,0.4980392156862745,0.7215686274509804,1,D.t)
B.wW=new C.w(1,0.16470588235294117,0.1450980392156863,0.13725490196078433,D.t)
B.bdD=new C.w(1,0.5411764705882353,0.23137254901960785,0.23137254901960785,D.t)
B.bdE=new C.w(1,0.9450980392156862,0.9294117647058824,0.8784313725490196,D.t)
B.Ky=new C.w(1,0.796078431372549,0.8156862745098039,0.8392156862745098,D.t)
B.Wg=new C.w(1,0.8980392156862745,0.7254901960784313,0.11764705882352941,D.t)
B.be_=new C.w(1,0.7490196078431373,0.8901960784313725,1,D.t)
B.Wk=new C.w(1,0.10588235294117647,0.10588235294117647,0.11372549019607843,D.t)
B.Wl=new C.w(1,0.9529411764705882,0.9058823529411765,0.6313725490196078,D.t)
B.adH=new C.w(1,0.9490196078431372,0.9490196078431372,0.9333333333333333,D.t)
B.beF=new C.w(1,0.6274509803921569,0.6509803921568628,0.6823529411764706,D.t)
B.beQ=new C.w(0,0.2196078431372549,0.7411764705882353,0.9725490196078431,D.t)
B.beX=new C.w(1,0.8156862745098039,0.35294117647058826,0.22745098039215686,D.t)
B.bf2=new C.w(1,0.8509803921568627,0.788235294117647,0.6274509803921569,D.t)
B.Wq=new C.w(1,0.9490196078431372,0.9176470588235294,0.8274509803921568,D.t)
B.adZ=new C.w(1,0.10588235294117647,0.07058823529411765,0.03529411764705882,D.t)
B.bfi=new C.w(1,0.3607843137254902,0.7019607843137254,0.9098039215686274,D.t)
B.bfk=new C.w(1,0.24705882352941178,0.26666666666666666,0.3137254901960784,D.t)
B.bft=new C.w(1,0.12549019607843137,0.13333333333333333,0.14901960784313725,D.t)
B.KI=new C.w(1,0.8862745098039215,0.27058823529411763,0.35294117647058826,D.t)
B.x0=new C.w(1,0.17254901960784313,0.4196078431372549,0.8392156862745098,D.t)
B.x1=new C.w(1,0.7607843137254902,0.4627450980392157,0.22745098039215686,D.t)
B.KL=new C.w(1,0.7254901960784313,0.7450980392156863,0.7764705882352941,D.t)
B.ae6=new C.w(1,0.611764705882353,0.35294117647058826,0.27058823529411763,D.t)
B.bg7=new C.w(1,0.611764705882353,0.5882352941176471,0.5450980392156862,D.t)
B.aei=new C.w(1,0.9686274509803922,0.9490196078431372,0.9019607843137255,D.t)
B.bgw=new C.w(1,0.2,0.21176470588235294,0.23137254901960785,D.t)
B.bgB=new C.w(1,0.7098039215686275,0.7333333333333333,0.7647058823529411,D.t)
B.bgD=new C.w(1,0.9294117647058824,0.9294117647058824,0.9098039215686274,D.t)
B.bgI=new C.w(1,0.9098039215686274,0.8941176470588236,0.8549019607843137,D.t)
B.aem=new C.w(1,0.9607843137254902,0.7568627450980392,0.29411764705882354,D.t)
B.aer=new C.w(1,0.7686274509803922,0.5411764705882353,0.11764705882352941,D.t)
B.bgQ=new C.w(1,0.43529411764705883,0.7137254901960784,1,D.t)
B.bh0=new C.w(1,0.9137254901960784,0.8980392156862745,0.8549019607843137,D.t)
B.aex=new C.w(1,0.18823529411764706,0.2,0.22745098039215686,D.t)
B.KR=new C.w(1,0.9372549019607843,0.9372549019607843,0.9176470588235294,D.t)
B.aez=new C.w(0.6666666666666666,1,0.16470588235294117,0.10196078431372549,D.t)
B.bhe=new C.w(1,0.9372549019607843,0.9137254901960784,0.8627450980392157,D.t)
B.bhh=new C.w(1,0.9294117647058824,0.9019607843137255,0.8156862745098039,D.t)
B.WF=new C.w(1,0.4196078431372549,0.24705882352941178,0.19215686274509805,D.t)
B.bhm=new C.w(1,0.12156862745098039,0.6392156862745098,0.2627450980392157,D.t)
B.bho=new C.w(1,0.803921568627451,0.6274509803921569,0.2,D.t)
B.KU=new C.w(1,0.3607843137254902,0.7019607843137254,1,D.t)
B.aeL=new C.w(1,0.9568627450980393,0.9568627450980393,0.9411764705882353,D.t)
B.bi1=new C.w(1,0.8431372549019608,0.8,0.6588235294117647,D.t)
B.biC=new C.w(1,0.9019607843137255,0.8745098039215686,0.796078431372549,D.t)
B.biE=new C.w(1,0.30980392156862746,0.6588235294117647,1,D.t)
B.biK=new C.w(1,1,0.6196078431372549,0.6196078431372549,D.t)
B.aeX=new C.w(1,0.8431372549019608,0.16470588235294117,0.16470588235294117,D.t)
B.KZ=new C.w(1,0.47843137254901963,0.30980392156862746,0.1568627450980392,D.t)
B.At=new C.w(1,0.6901960784313725,0.5411764705882353,0.3568627450980392,D.t)
B.px=new C.w(1,0.6078431372549019,0.8274509803921568,0.9607843137254902,D.t)
B.bjd=new C.w(1,0.48627450980392156,0.2901960784313726,0.22745098039215686,D.t)
B.bje=new C.w(1,0.23137254901960785,0.6078431372549019,1,D.t)
B.bjm=new C.w(1,0.8509803921568627,0.8235294117647058,0.7607843137254902,D.t)
B.bjo=new C.w(1,0.29411764705882354,0.29411764705882354,0.3137254901960784,D.t)
B.x5=new C.w(1,0.4196078431372549,0.2901960784313726,0.19607843137254902,D.t)
B.af2=new C.w(1,0.13333333333333333,0.14901960784313725,0.17254901960784313,D.t)
B.bju=new C.w(1,0.8117647058823529,0.788235294117647,0.7215686274509804,D.t)
B.bjD=new C.w(1,0.5450980392156862,0.4196078431372549,0.24705882352941178,D.t)
B.boE=new C.Q(10,16,10,14)
B.XF=new C.Q(11,9,11,9)
B.agB=new C.Q(14,8,14,24)
B.btm=new C.Q(4,22,4,12)
B.btz=new C.Q(4,4,8,4)
B.btC=new C.Q(4,6,12,4)
B.but=new C.Q(9,0,9,0)
B.fuO=new C.x("Practice mode (no explanations, real shocks)",null,D.Tc,null,null,null,null,null,null,null,null,null)
B.buZ=new C.bD(1,D.bi,B.fuO,null)
B.fqB=new C.x("Practice mode (no hints, no labels)",null,D.Tc,null,null,null,null,null,null,null,null,null)
B.bv_=new C.bD(1,D.bi,B.fqB,null)
B.f8u=new C.x("\ud83c\udfd8 Community",null,L.rA,null,null,null,null,null,null,null,null,null)
B.b30=new C.cr(D.A,null,null,B.f8u,null)
B.bv6=new C.bD(1,D.bi,B.b30,null)
B.fiC=new C.x("Construction Lab",null,L.rA,null,null,null,null,null,null,null,null,null)
B.f7X=new C.x("Wire it. Plumb it. Fix a house.",null,D.hp,null,null,null,null,null,null,null,null,null)
B.cZd=w([B.fiC,B.f7X],x.p)
B.bkm=new C.fq(D.ah,D.e,D.j,D.F,null,D.p,null,0,B.cZd,null)
B.bvj=new C.bD(1,D.bi,B.bkm,null)
B.aOC=new C.G(!0,D.c,null,null,null,null,14,D.H,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fqs=new C.x("5 portions of food\n10 points",null,B.aOC,null,null,null,null,null,null,null,null,null)
B.bvo=new C.bD(1,D.bi,B.fqs,null)
B.fdl=new C.x("3 doses of medicine\n12 points",null,B.aOC,null,null,null,null,null,null,null,null,null)
B.bvC=new C.bD(1,D.bi,B.fdl,null)
B.fqf=new C.x("Practice mode (no hints, real shocks and fires)",null,D.Tc,null,null,null,null,null,null,null,null,null)
B.bw0=new C.bD(1,D.bi,B.fqf,null)
B.bwK=new A.a3R(null,null)
B.YZ=new A.qV(0,"tripped")
B.Z_=new A.qV(1,"noHotWater")
B.Z0=new A.qV(10,"wallHole")
B.Z1=new A.qV(11,"clogged")
B.M9=new A.qV(2,"nutLeak")
B.Ma=new A.qV(3,"pexLeak")
B.Z2=new A.qV(5,"flicker")
B.Z3=new A.qV(6,"burntOutlet")
B.Z4=new A.qV(7,"gfciTripped")
B.Z5=new A.qV(8,"runningToilet")
B.Z6=new A.qV(9,"dripFaucet")
B.byh=new A.nv("back",0,10)
B.byi=new A.nv("back",0,9)
B.byj=new A.nv("back",50,0)
B.byk=new A.nv("back",56,11)
B.byl=new A.nv("back",-50,10)
B.bym=new A.nv("left",40,9)
B.byn=new A.nv("right",40,10)
B.Ze=new A.nv("right",50,5)
B.aiE=new A.px("tv100",'Giant 100"',"\ud83d\udcfa",89,!1)
B.bA4=new C.a_(61419,"MaterialIcons",!1)
B.bAg=new C.a_(61888,"MaterialIcons",!1)
B.bB7=new C.a_(63015,"MaterialIcons",!1)
B.bBB=new C.a_(63228,"MaterialIcons",!1)
B.akE=new C.a_(983222,"MaterialIcons",!1)
B.ald=new C.a_(983775,"MaterialIcons",!1)
B.alj=new C.a_(983894,"MaterialIcons",!1)
B.bGD=new C.ae(D.iz,null,null,null,null,null)
B.bNZ=new C.ae(D.N6,null,null,null,null,null)
B.fGu=new A.E(-0.4,4.2,-2.4)
B.bQE=new A.t2(B.fGu,"LIVE 120 V",D.bI)
B.bgS=new C.w(1,0.2901960784313726,0.20392156862745098,0.0784313725490196,D.t)
B.be1=new C.w(1,0.12156862745098039,0.10196078431372549,0.07058823529411765,D.t)
B.b7S=new C.w(1,0.16470588235294117,0.12156862745098039,0.07058823529411765,D.t)
B.d8o=w([B.bgS,B.be1,B.b7S],x.O)
B.bSC=new C.a8(D.ax,D.aC,D.x,B.d8o,null,null)
B.bio=new C.w(1,0.12156862745098039,0.10196078431372549,0.1411764705882353,D.t)
B.daH=w([D.adJ,B.bio],x.O)
B.bTh=new C.a8(D.ax,D.aC,D.x,B.daH,null,null)
B.bga=new C.w(1,0.0392156862745098,0.058823529411764705,0.1803921568627451,D.t)
B.biD=new C.w(1,0.1411764705882353,0.08235294117647059,0.3215686274509804,D.t)
B.czK=w([E.aco,B.bga,B.biD],x.O)
B.bTq=new C.a8(D.b0,D.b5,D.x,B.czK,null,null)
B.beA=new C.w(1,0.043137254901960784,0.12156862745098039,0.29411764705882354,D.t)
B.bjv=new C.w(1,0.07058823529411765,0.22745098039215686,0.47843137254901963,D.t)
B.cMN=w([B.beA,B.bjv],x.O)
B.bUQ=new C.a8(D.ax,D.aC,D.x,B.cMN,null,null)
B.bVs=w(["flange","wax","toilet","bolts","valve","hosehot","hosecold","faucet","tail","trap","arm"],x.s)
B.bVB=w([0,0,0,1],x.k)
B.c7k=w([G.mx,I.RP,G.ln,I.aKQ],x.f)
B.c7w=w([1,1,1],x.k)
B.c7x=w([1,1,1,1],x.k)
B.fF1=new A.E(-57.8,-32,0)
B.b0A=new A.ys(0,"Outlet spot 1",!1,B.fF1,"low")
B.fFB=new A.E(-9.8,-32,0)
B.b0x=new A.ys(1,"Outlet spot 2",!1,B.fFB,"low")
B.fFX=new A.E(38.2,-32,0)
B.b0D=new A.ys(2,"Outlet spot 3",!1,B.fFX,"low")
B.fEI=new A.E(-25.8,0,0)
B.b0B=new A.ys(3,"Switch spot 1",!1,B.fEI,"switch")
B.fFw=new A.E(22.2,0,0)
B.b0z=new A.ys(4,"Switch spot 2",!1,B.fFw,"switch")
B.fGK=new A.E(-30,48,40)
B.b0C=new A.ys(5,"Ceiling light spot",!0,B.fGK,"light")
B.fAd=new A.E(30,48,40)
B.b0y=new A.ys(6,"Ceiling fan spot",!0,B.fAd,"fan")
B.tW=w([B.b0A,B.b0x,B.b0D,B.b0B,B.b0z,B.b0C,B.b0y],C.ax("O<ys>"))
B.ceJ=w(["The living room has no power: find the tripped breaker in the panel and reset it.","The kitchen sink drips: pick the wrench and tighten the slip nut under the sink. (Build the house up to Fixtures to see the problems.)"],x.s)
B.fFL=new A.E(11,4.6,-6)
B.fC1=new A.E(11,5.4,-7.85)
B.fFg=new A.E(3.4,5.4,-7.85)
B.aRG=new A.E(3.4,3.4,-7.85)
B.ceL=w([B.fFL,B.fC1,B.fFg,B.aRG],x.o)
B.baj=new C.w(1,0.5411764705882353,0.35294117647058826,0.23529411764705882,D.t)
B.ac8=new C.w(1,0.10588235294117647,0.07058823529411765,0.06274509803921569,D.t)
B.bjq=new C.w(1,0.8509803921568627,0.27450980392156865,0.49411764705882355,D.t)
B.ab_=new C.w(1,0.23137254901960785,0.24705882352941178,0.3607843137254902,D.t)
B.e7V=new A.uz(B.baj,B.ac8,B.bjq,B.ab_,"michelle")
B.eFN=new A.EF(0,"Ama",0,2,B.e7V,"A nurse who works nights.")
B.bc6=new C.w(1,0.4196078431372549,0.27058823529411763,0.18823529411764706,D.t)
B.b9E=new C.w(1,0.08627450980392157,0.06274509803921569,0.06274509803921569,D.t)
B.bh2=new C.w(1,0.1803921568627451,0.5607843137254902,0.3568627450980392,D.t)
B.Ve=new C.w(1,0.1803921568627451,0.20392156862745098,0.25098039215686274,D.t)
B.e81=new A.uz(B.bc6,B.b9E,B.bh2,B.Ve,"soldier")
B.eFM=new A.EF(1,"Joseph",1,2,B.e81,"A student who is always hungry.")
B.bfe=new C.w(1,0.6274509803921569,0.4196078431372549,0.2784313725490196,D.t)
B.acX=new C.w(1,0.16470588235294117,0.10196078431372549,0.06274509803921569,D.t)
B.baA=new C.w(1,0.2901960784313726,0.24705882352941178,0.4196078431372549,D.t)
B.e7X=new A.uz(B.bfe,B.acX,D.aH,B.baA,"xbot")
B.eFL=new A.EF(2,"Grace",3,4,B.e7X,"A teacher who marks papers late.")
B.abc=new C.w(1,0.8784313725490196,0.6431372549019608,0.48627450980392156,D.t)
B.aeU=new C.w(1,0.1843137254901961,0.43529411764705883,0.7098039215686275,D.t)
B.e7Y=new A.uz(B.abc,D.ad4,B.aeU,B.Ve,"soldier")
B.eFH=new A.EF(3,"Daniel",6,8,B.e7Y,"A driver who sleeps in the day.")
B.bhC=new C.w(1,0.788235294117647,0.5450980392156862,0.3686274509803922,D.t)
B.baJ=new C.w(1,0.16862745098039217,0.17647058823529413,0.22745098039215686,D.t)
B.e7W=new A.uz(B.bhC,B.ac8,D.aE,B.baJ,"michelle")
B.eFI=new A.EF(4,"Fatima",7,8,B.e7W,"A baker who gets up at four.")
B.aeK=new C.w(1,0.47843137254901963,0.29411764705882354,0.18823529411764706,D.t)
B.bgi=new C.w(1,0.24705882352941178,0.22745098039215686,0.2,D.t)
B.e82=new A.uz(B.aeK,D.e_,D.d9,B.bgi,"soldier")
B.eFK=new A.EF(5,"Papa Moses",10,-1,B.e82,"The oldest in the house. He watches TV all day.")
B.bee=new C.w(1,0.5490196078431373,0.3568627450980392,0.23137254901960785,D.t)
B.e7U=new A.uz(B.bee,B.acW,D.ay,B.ab_,"michelle")
B.eFJ=new A.EF(6,"Mama Rose",9,-1,B.e7U,"Cooks for everybody in the kitchen.")
B.ON=w([B.eFN,B.eFM,B.eFL,B.eFH,B.eFI,B.eFK,B.eFJ],C.ax("O<EF>"))
B.ejP=new C.y(-9.5,4.6)
B.em8=new C.y(-5.9,2.3)
B.erV=new C.y(8.8,4.4)
B.cuJ=w([B.ejP,B.em8,B.erV],x.f)
B.cvD=w([61,63],x.t)
B.cvQ=w([62,64],x.t)
B.b9K=new C.w(1,0.6039215686274509,0.30980392156862746,0.30980392156862746,D.t)
B.bjx=new C.w(1,0.30980392156862746,0.47843137254901963,0.3686274509803922,D.t)
B.a0W=w([B.DR,B.adj,B.b9K,B.bjx,B.ado,D.ti],x.O)
B.atD=w([72,73,74,75],x.t)
B.etb=new C.y(-25,-15)
B.ecC=new C.y(25,-15)
B.eta=new C.y(-25,15)
B.ecB=new C.y(25,15)
B.cC3=w([B.etb,B.ecC,B.eta,B.ecB],x.f)
B.byp=new A.px("wall","Whole-wall TV","\ud83c\udfac",0,!0)
B.byx=new A.px("tv200",'Cinema 200"',"\ud83c\udfac",175,!1)
B.bys=new A.px("tv150",'Cinema 150"',"\ud83c\udfac",130,!1)
B.byt=new A.px("bangtv",'Beovision TV 77"',"\ud83d\udcfa",66,!1)
B.byo=new A.px("sonytv",'Sony Bravia 75"',"\ud83d\udcfa",64,!1)
B.byy=new A.px("lgtv",'LG OLED 65"',"\ud83d\udcfa",56,!1)
B.byr=new A.px("tv",'Samsung Neo QLED 55"',"\ud83d\udcfa",48,!1)
B.byw=new A.px("appletv",'Apple TV 4K 50"',"\ud83d\udcfa",44,!1)
B.byv=new A.px("lamp","Table lamp","\ud83d\udca1",0,!1)
B.byu=new A.px("toaster","Toaster","\ud83c\udf5e",0,!1)
B.byq=new A.px("hairdryer","Hair dryer","\ud83d\udc87",0,!1)
B.a13=w([B.byp,B.byx,B.bys,B.aiE,B.byt,B.byo,B.byy,B.byr,B.byw,B.byv,B.byu,B.byq],C.ax("O<px>"))
B.cJL=w([y.r,"Two cables come into the box: one from the breaker panel (LINE) and one going to the light (LOAD).","Twist the two white wires together with a wire nut. A switch does not cut the neutral.",y.x,"Fasten the black wire from the panel to one BRASS screw.","Fasten the black wire that goes to the light to the other BRASS screw.","Push the switch into the box, put the plate on and test with the power on."],x.s)
B.dZa={black:0}
B.Ie=new C.eY(B.dZa,1,x.M)
B.byO=new A.mi(51,"Black wire nut: HOT",B.Ie,!1,"hot")
B.dZY={white:0}
B.Ic=new C.eY(B.dZY,1,x.M)
B.byD=new A.mi(52,"White wire nut: NEUTRAL",B.Ic,!1,"neutral")
B.dZq={ground:0}
B.S9=new C.eY(B.dZq,1,x.M)
B.byA=new A.mi(53,"Green ground connection",B.S9,!1,"ground")
B.cJU=w([B.byO,B.byD,B.byA],x.r)
B.byP=new A.mi(51,"Black wire nut: HOT",B.Ie,!1,"hot")
B.byE=new A.mi(52,"White wire nut: NEUTRAL",B.Ic,!1,"neutral")
B.byB=new A.mi(53,"Green ground connection",B.S9,!1,"ground")
B.cJT=w([B.byP,B.byE,B.byB],x.r)
B.cKf=w(["Walnut","Blue grey","Brick red","Sage green","Sand","Charcoal"],x.s)
B.fD1=new A.E(-6.5,7.5,-7.85)
B.fD5=new A.E(-6.5,7.8,-3)
B.cKx=w([B.fD1,B.fD5],x.o)
B.bas=new C.w(1,0.9176470588235294,0.9490196078431372,0.9686274509803922,D.t)
B.bfb=new C.w(1,0.9647058823529412,0.9098039215686274,0.9098039215686274,D.t)
B.bej=new C.w(1,0.9529411764705882,0.9215686274509803,0.7843137254901961,D.t)
B.aug=w([B.Ai,B.bas,B.bfb,B.bej],x.O)
B.cLa=w([y.r,"The cable comes in through the top of the box. Strip about 3/4 inch of insulation from each wire.","Fasten the bare copper ground wire to the GREEN screw.","Fasten the white (neutral) wire to a SILVER screw.","Fasten the black (hot) wire to a BRASS screw. Wrap each wire clockwise under its screw.","Fold the wires back and push the outlet into the box.","Put the cover plate on, then turn the power on and test."],x.s)
B.fHJ=new A.E(-3.6,7.5,-7.85)
B.fCH=new A.E(-3.6,4.2,-7.85)
B.cLh=w([B.fHJ,B.fCH],x.o)
B.dZ9={blackLine:0,blackLoad:1}
B.aLY=new C.eY(B.dZ9,2,x.M)
B.byM=new A.mi(21,"Brass screw (top)",B.aLY,!1,"hot")
B.byN=new A.mi(22,"Brass screw (bottom)",B.aLY,!1,"hot")
B.aiF=new A.mi(25,"Green screw: GROUND",B.S9,!1,"ground")
B.cLM=w([B.byM,B.byN,B.aiF],x.r)
B.cLZ=w([0,2,1,3,4,6,7,8],x.t)
B.ezd=new C.bt(-0.1,0,0.5)
B.eB0=new C.bt(0.35,-0.4,0.3)
B.ezZ=new C.bt(-0.4,0.55,0.35)
B.cM4=w([B.ezd,B.eB0,B.ezZ],C.ax("O<+(N,N,N)>"))
B.fG3=new A.E(9.8,6,-7.85)
B.fC5=new A.E(9.8,7.5,-7.85)
B.fHZ=new A.E(-8,7.5,-7.85)
B.fDT=new A.E(-8,1.5,-7.85)
B.cMQ=w([B.fG3,B.fC5,B.fHZ,B.fDT],x.o)
B.aRM=new A.E(5,1.8,-7.85)
B.fEA=new A.E(5,-0.1,-7.85)
B.fFo=new A.E(12.5,-0.1,-7.85)
B.cNP=w([B.aRM,B.fEA,B.fFo],x.o)
B.fy0=new A.E(3,3.1,-7.1)
B.aRH=new A.E(3,1.7,-7.1)
B.fFj=new A.E(3,1,-7.1)
B.fA1=new A.E(3.65,0.5,-7.1)
B.fAZ=new A.E(4.3,1,-7.1)
B.fEv=new A.E(4.3,1.8,-7.1)
B.fI0=new A.E(5,1.8,-7.1)
B.cOg=w([B.fy0,B.aRH,B.fFj,B.fA1,B.fAZ,B.fEv,B.fI0,B.aRM],x.o)
B.cOJ=w(["My outlet is dead and it is dark in here. Please come and wire it.","The light in my room does not work, and my phone will not charge. Can you fix the wiring?","I have no power in my room at all. Can an electrician come?"],x.s)
B.eCD=new C.cH([-0.35,-0.2,0.42,0.3])
B.eCR=new C.cH([0.3,0.25,0.32,0.38])
B.eBG=new C.cH([0.05,-0.55,0.22,0.14])
B.eC8=new C.cH([-0.5,0.45,0.2,0.16])
B.cOV=w([B.eCD,B.eCR,B.eBG,B.eC8],x.U)
B.fHu=new A.E(0.6,11,-3.4)
B.fBp=new A.E(0.6,3.2,-3.2)
B.fH6=new A.E(0.6,2.2,-1.9)
B.fBe=new A.E(0.6,0.7,-1.5)
B.cPg=w([B.fHu,B.fBp,B.fH6,B.fBe],x.o)
B.cPX=w([G.mx,I.RP,G.ln],x.f)
B.cQu=w(["road","roadturn","roadtee","roadcross","house2","shop","hospital","firestation","school","car","firetruck","ambulance","dog","cat","cow","sheep","chicken","horse","tree","pine","bush","flowers","fence","lamppost","bench","pond","swing","shed","doghouse"],x.s)
B.fAt=new A.E(0,8.3,0)
B.aRm=new A.E(0,3.9,0)
B.a1A=w([B.fAt,B.aRm],x.o)
B.cQJ=w([y.r,"Make sure the box is rated for a fan. A plain light box cannot carry the weight and the shaking.","Join the house ground wire to the fan ground.","Join the house white wire to the fan white wire with a wire nut.","Join the house black wire to the fan black wire with a wire nut.","Push the wires up into the box and fasten the canopy to the ceiling.",y.E],x.s)
B.fN5=new A.Fj("outlet","\ud83d\udd0c","Wall outlet","Black to brass, white to silver",D.aH)
B.fN2=new A.Fj("switch","\ud83d\udca1","Light switch","Two blacks and a wire nut",D.aT)
B.fN3=new A.Fj("gfci","\ud83d\udee1\ufe0f","GFCI outlet","LINE and LOAD near water",D.bt)
B.fN6=new A.Fj("fan","\ud83c\udf00","Ceiling fan","Black, white, green and a fan box",D.b8)
B.fN4=new A.Fj("ptrap","\ud83e\udea0","Sink drain (P-trap)","Build a drain with a water seal",D.cs)
B.fN1=new A.Fj("faucet","\ud83d\udeb0","Faucet supply lines","Hot left, cold right",D.ci)
B.fN0=new A.Fj("house","\ud83c\udfd7\ufe0f","Build and fix a house","Stage by stage, then repair",D.by)
B.cQX=w([B.fN5,B.fN2,B.fN3,B.fN6,B.fN4,B.fN1,B.fN0],C.ax("O<Fj>"))
B.esc=new C.y(-3.5,11)
B.eif=new C.y(3.5,11)
B.egE=new C.y(-3.5,-11)
B.eeG=new C.y(3.5,-11)
B.cR0=w([B.esc,B.eif,B.egE,B.eeG],x.f)
B.fGn=new A.E(-0.6,11,-3.4)
B.fC9=new A.E(-0.6,3.2,-3.2)
B.fFH=new A.E(-0.6,2.2,-1.9)
B.fIe=new A.E(-0.6,0.7,-1.5)
B.cR2=w([B.fGn,B.fC9,B.fFH,B.fIe],x.o)
B.a1B=w(["dog","cat","cow","sheep","chicken","horse"],x.s)
B.epf=new C.y(-1.2,0)
B.ex2=new C.y(1.2,0)
B.cRE=w([B.epf,B.ex2],x.f)
B.e3e=new A.nf("flange","flange","Toilet flange",D.T,"The flange is fixed to the floor over the drain. Everything else sits on it.",!1,0)
B.d3g=w(["flange"],x.s)
B.e3c=new A.nf("wax","wax","Wax ring",B.d3g,"The wax ring goes on the flange before the toilet. It makes the seal against sewer gas and water.",!1,0)
B.dd3=w(["wax"],x.s)
B.e39=new A.nf("toilet","toilet","Toilet",B.dd3,"The toilet is lowered straight down onto the wax ring. The ring has to be there first.",!1,0)
B.dby=w(["toilet"],x.s)
B.e3d=new A.nf("bolts","bolts","Toilet bolts",B.dby,"The two bolts hold the toilet to the flange. Set the toilet first.",!1,2)
B.e3a=new A.nf("tvalve","valve","Toilet shut-off valve",D.T,"The shut-off valve goes on the pipe that comes out of the wall.",!0,0)
B.dbE=w(["tvalve","toilet"],x.s)
B.e3b=new A.nf("those","hosecold","Toilet supply hose",B.dbE,"The hose joins the valve to the toilet tank, so both must be there first.",!1,2)
B.aG2=new A.nf("faucet","faucet","Faucet",D.T,"The faucet goes through the hole in the counter.",!1,0)
B.aG5=new A.nf("vhot","valve","Hot shut-off valve (left)",D.T,y.g,!0,0)
B.aG3=new A.nf("vcold","valve","Cold shut-off valve (right)",D.T,y.g,!0,0)
B.dcu=w(["vhot","faucet"],x.s)
B.aG6=new A.nf("hhot","hosehot","Hot supply hose",B.dcu,"The hose joins the hot valve to the faucet, so the valve and the faucet must be there first.",!1,2)
B.dcr=w(["vcold","faucet"],x.s)
B.aG4=new A.nf("hcold","hosecold","Cold supply hose",B.dcr,"The hose joins the cold valve to the faucet, so the valve and the faucet must be there first.",!1,2)
B.aG1=new A.nf("tail","tail","Tailpiece",D.T,"The tailpiece hangs from the sink drain. It is the first piece of the drain.",!1,0)
B.dbr=w(["tail"],x.s)
B.aG7=new A.nf("trap","trap","P-trap",B.dbr,"The P-trap joins the tailpiece. Build the drain from the top down.",!1,1)
B.dbz=w(["trap"],x.s)
B.aG8=new A.nf("arm","arm","Trap arm",B.dbz,"The trap arm joins the trap and goes into the wall.",!1,1)
B.cNm=w([B.e3e,B.e3c,B.e39,B.e3d,B.e3a,B.e3b,B.aG2,B.aG5,B.aG3,B.aG6,B.aG4,B.aG1,B.aG7,B.aG8],x.F)
B.e8Q=new A.W8("bathroom","Bathroom",B.cNm,"Fit out a bathroom: a toilet and a sink with its faucet, supply hoses and drain.")
B.d4Y=w([B.aG2,B.aG5,B.aG3,B.aG6,B.aG4,B.aG1,B.aG7,B.aG8],x.F)
B.e8R=new A.W8("kitchen","Kitchen",B.d4Y,"Fit out a kitchen sink: the faucet, the hot and cold supplies and the drain.")
B.av2=w([B.e8Q,B.e8R],C.ax("O<W8>"))
B.byI=new A.mi(21,"LOAD hot (brass, taped)",D.Id,!0,"load")
B.byK=new A.mi(22,"LINE hot (brass)",B.Ie,!1,"hot")
B.byJ=new A.mi(23,"LOAD neutral (silver, taped)",D.Id,!0,"load")
B.byC=new A.mi(24,"LINE neutral (silver)",B.Ic,!1,"neutral")
B.cT0=w([B.byI,B.byK,B.byJ,B.byC,B.aiF],x.r)
B.fxZ=new A.E(8.2,0.9,-6.3)
B.fFP=new A.E(8.2,-0.1,-6.3)
B.fzH=new A.E(8.2,-0.1,-7.85)
B.cTj=w([B.fxZ,B.fFP,B.fzH],x.o)
B.efk=new C.y(-4.5,10)
B.eu0=new C.y(4.5,10)
B.ex0=new C.y(-4.5,-10)
B.etX=new C.y(4.5,-10)
B.cTu=w([B.efk,B.eu0,B.ex0,B.etX],x.f)
B.cTv=w([-0.28,0.28],x.n)
B.etc=new C.y(-34,-6)
B.ed_=new C.y(30,10)
B.et5=new C.y(-10,24)
B.cUv=w([B.etc,B.ed_,B.et5],x.f)
B.bxo=new A.Dp("Oak",B.At,"wood")
B.bxq=new A.Dp("Dark wood",B.x5,"wood")
B.aeM=new C.w(1,0.5529411764705883,0.5647058823529412,0.5882352941176471,D.t)
B.bxs=new A.Dp("Grey carpet",B.aeM,"carpet")
B.bhw=new C.w(1,0.3568627450980392,0.4980392156862745,0.6509803921568628,D.t)
B.bxp=new A.Dp("Blue carpet",B.bhw,"carpet")
B.bfa=new C.w(1,0.8470588235294118,0.803921568627451,0.7058823529411765,D.t)
B.bxm=new A.Dp("Cream carpet",B.bfa,"carpet")
B.bxr=new A.Dp("White tile",B.VV,"tile")
B.bxn=new A.Dp("Slate tile",B.abM,"tile")
B.avp=w([B.bxo,B.bxq,B.bxs,B.bxp,B.bxm,B.bxr,B.bxn],C.ax("O<Dp>"))
B.fFI=new A.E(3,3.2,-7.85)
B.fIg=new A.E(3,4,-7.85)
B.fHK=new A.E(3,4.2,-7.4)
B.fz6=new A.E(3,3.95,-7)
B.cWD=w([B.fFI,B.fIg,B.fHK,B.fz6],x.o)
B.cWF=w(["The sink leaks and there is water on the floor. Please fix the plumbing.","The toilet is not connected and the water is running everywhere. Help!","There is no water at my sink and the pipes are open. Can a plumber come?"],x.s)
B.fG7=new A.E(6,0.2,0)
B.fET=new A.E(6,2.6,0)
B.aSd=new A.E(8.6,2.6,0)
B.cXR=w([B.fG7,B.fET,B.aSd],x.o)
B.etg=new C.y(-7,-7)
B.efL=new C.y(7,-7)
B.etf=new C.y(-7,7)
B.efK=new C.y(7,7)
B.cYw=w([B.etg,B.efL,B.etf,B.efK],x.f)
B.cYy=w([-2.4,2.4],x.n)
B.cYP=w([-1.6,1.6],x.n)
B.aeh=new C.w(1,0.14901960784313725,0.14901960784313725,0.16470588235294117,D.t)
B.fJD=new A.zN("blackLine","Black \xb7 from the breaker",B.aeh,D.c,"hot")
B.bd0=new C.w(1,0.22745098039215686,0.1803921568627451,0.1803921568627451,D.t)
B.fJG=new A.zN("blackLoad","Black \xb7 to the light",B.bd0,D.c,"hot")
B.aSt=new A.zN("ground","Bare copper \xb7 ground",B.x1,D.c,"ground")
B.cYS=w([B.fJD,B.fJG,B.aSt],x.Q)
B.b7D=new C.w(1,0.9294117647058824,0.9019607843137255,0.8392156862745098,D.t)
B.b5V=new C.w(1,0.9137254901960784,0.8274509803921568,0.8274509803921568,D.t)
B.b5b=new C.w(1,0.8352941176470589,0.8941176470588236,0.8156862745098039,D.t)
B.ad8=new C.w(1,0.9529411764705882,0.8901960784313725,0.6549019607843137,D.t)
B.b9U=new C.w(1,0.7254901960784313,0.7647058823529411,0.8666666666666667,D.t)
B.bhE=new C.w(1,0.5607843137254902,0.6392156862745098,0.6588235294117647,D.t)
B.avC=w([B.b7D,B.VF,B.b5V,B.b5b,B.ad8,B.b9U,B.add,B.bhE],x.O)
B.aip=new A.qV(4,"deadOutlet")
B.d04=w([B.YZ,B.Z_,B.M9,B.Ma,B.aip,B.Z2,B.Z3,B.Z4,B.Z5,B.Z6,B.Z0,B.Z1],C.ax("O<qV>"))
B.d0x=w([y.r,"Find the LINE and LOAD screws. LOAD is covered with yellow tape. Leave it covered unless you feed another outlet.",y.x,"Fasten the white wire to the silver LINE screw.","Fasten the black wire to the brass LINE screw.","Push the GFCI into the box and put the plate on.","Turn the power on, press RESET, then press TEST. It must click off."],x.s)
B.d15=w([0.1,8.05],x.n)
B.fDp=new A.E(-0.35,11,-3.4)
B.fCg=new A.E(-0.35,3.2,-3.2)
B.fF_=new A.E(-0.35,2.2,-1.9)
B.fBb=new A.E(-0.35,0.7,-1.5)
B.d1j=w([B.fDp,B.fCg,B.fF_,B.fBb],x.o)
B.fHD=new A.E(5.2,7.5,-7.85)
B.fEP=new A.E(5.2,4,-7.85)
B.d1p=w([B.fHD,B.fEP],x.o)
B.fp8=new C.x("\ud83c\udfd8",null,D.SJ,null,null,null,null,null,null,null,null,null)
B.eTT=new C.G(!0,D.mL,null,null,null,null,19,D.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fhF=new C.x("Community",null,B.eTT,null,null,null,null,null,null,null,null,null)
B.f7W=new C.x("The people who live in the house get hungry and sick, and their wiring and plumbing break. Look after them and answer their calls for help.",null,E.D3,null,D.L,null,null,null,null,null,null,null)
B.d1r=w([B.fp8,D.an,B.fhF,D.cX,B.f7W],x.p)
B.a8e=new A.kW("look","Look",D.fa)
B.fMr=new A.kW("wall","Wall box",N.ajW)
B.fMq=new A.kW("ceiling","Ceiling box",D.qU)
B.fMA=new A.kW("fanbox","Fan box",S.MF)
B.fMH=new A.kW("drill","Drill",D.xN)
B.fMB=new A.kW("cable","Cable roll",E.ajL)
B.d3C=w([B.a8e,B.fMr,B.fMq,B.fMA,B.fMH,B.fMB],x.b)
B.fMG=new A.kW("sheet","Drywall sheet",D.Bv)
B.fMu=new A.kW("knife","Drywall saw",D.FE)
B.fMs=new A.kW("screw","Screw gun",V.FO)
B.fMJ=new A.kW("tape","Tape",D.tL)
B.fMF=new A.kW("mud","Mud",A2.a_8)
B.fMN=new A.kW("sand","Sander",D.FC)
B.bDY=new C.a_(985109,"MaterialIcons",!1)
B.fMy=new A.kW("paint","Roller",B.bDY)
B.d0c=w([B.a8e,B.fMG,B.fMu,B.fMs,B.fMJ,B.fMF,B.fMN,B.fMy],x.b)
B.fMC=new A.kW("tester","Voltage tester",D.qZ)
B.akF=new C.a_(983223,"MaterialIcons",!1)
B.fMK=new A.kW("outlet","Outlet",B.akF)
B.fMw=new A.kW("gfci","GFCI",D.tS)
B.fMI=new A.kW("switch","Switch",E.Nh)
B.fME=new A.kW("light","Light",D.r0)
B.bDW=new C.a_(985094,"MaterialIcons",!1)
B.fMz=new A.kW("fan","Fan",B.bDW)
B.fMD=new A.kW("tv","TV",W.al2)
B.bCc=new C.a_(63571,"MaterialIcons",!1)
B.fMx=new A.kW("lamp","Lamp",B.bCc)
B.bB_=new C.a_(62944,"MaterialIcons",!1)
B.fMv=new A.kW("toaster","Toaster",B.bB_)
B.bBz=new C.a_(63209,"MaterialIcons",!1)
B.fMM=new A.kW("hairdryer","Hair dryer",B.bBz)
B.fML=new A.kW("flip","Flip switch",E.Nh)
B.fMt=new A.kW("unplug","Unplug",B.akE)
B.d69=w([B.a8e,B.fMC,B.fMK,B.fMw,B.fMI,B.fME,B.fMz,B.fMD,B.fMx,B.fMv,B.fMM,B.fML,B.fMt],x.b)
B.d1t=w([B.d3C,B.d0c,B.d69],C.ax("O<aj<kW>>"))
B.aRX=new A.E(0,15.5,-3.6)
B.fDz=new A.E(0,20,-3.6)
B.fI5=new A.E(0,22.5,-2)
B.fBY=new A.E(0,22.5,1.1999999999999997)
B.fDF=new A.E(0,21.1,1.6)
B.d1Z=w([B.aRX,B.fDz,B.fI5,B.fBY,B.fDF],x.o)
B.GQ=w([],x.E)
B.d2y=w([],x.T)
B.aw_=w([],x.K)
B.vI=w([],x.h)
B.d2F=w([],x.o)
B.aw1=w([],x.a)
B.ejS=new C.y(-1.6,3.5)
B.ejv=new C.y(1.6,3.5)
B.elm=new C.y(-1.6,-3.5)
B.eid=new C.y(1.6,-3.5)
B.d2O=w([B.ejS,B.ejv,B.elm,B.eid],x.f)
B.d3z=w(["Look at the pieces: the tailpiece, the P-trap and the trap arm. Pick the tailpiece first and tap its glowing outline under the sink.","Pick the P-trap (the U-shaped bend) and tap its glowing outline. It joins the tailpiece.","Pick the trap arm and tap its outline. It joins the trap to the wall drain.","Slide each slip nut up to its joint and hand tighten it: tap the nuts.","Run the water and look for leaks. The U-bend keeps a plug of water that blocks sewer gas."],x.s)
B.fkg=new C.x("\u2728",null,D.aOb,null,null,null,null,null,null,null,null,null)
B.fu9=new C.x("Nobody needs help right now.",null,D.fN,null,D.L,null,null,null,null,null,null,null)
B.f51=new C.G(!0,D.aR,null,null,null,null,13,null,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fmu=new C.x("Everybody's wiring and plumbing works. Keep an eye on food and health: things break when you least expect it.",null,B.f51,null,D.L,null,null,null,null,null,null,null)
B.d3Y=w([B.fkg,D.O,B.fu9,D.at,B.fmu],x.p)
B.awd=w(["rug","road","roadturn","roadtee","roadcross","pond","flowers"],x.s)
B.fzl=new A.E(11.4,4.6,-6)
B.fDO=new A.E(11.4,5,-7.85)
B.fBc=new A.E(2.6,5,-7.85)
B.fBu=new A.E(2.6,3.4,-7.85)
B.d4j=w([B.fzl,B.fDO,B.fBc,B.fBu],x.o)
B.d4n=w([G.mx,I.RP],x.f)
B.d4o=w(["hot","cold"],x.s)
B.fJF=new A.zN("black","Black \xb7 hot",B.aeh,D.c,"hot")
B.fJE=new A.zN("white","White \xb7 neutral",B.wL,D.aB,"neutral")
B.PV=w([B.fJF,B.fJE,B.aSt],x.Q)
B.egC=new C.y(-3.5,4)
B.enb=new C.y(3.5,4)
B.eiF=new C.y(-3.5,-4)
B.ebt=new C.y(3.5,-4)
B.d4P=w([B.egC,B.enb,B.eiF,B.ebt],x.f)
B.ewQ=new C.y(-2.4,5)
B.eot=new C.y(2.4,5)
B.elU=new C.y(-2.4,-5)
B.ekH=new C.y(2.4,-5)
B.d4T=w([B.ewQ,B.eot,B.elU,B.ekH],x.f)
B.eAA=new C.bt(-6,-4,D.bU)
B.ezh=new C.bt(5,-5,D.co)
B.eAy=new C.bt(0,1,D.ay)
B.eB1=new C.bt(-5,5,D.by)
B.eyy=new C.bt(6,4,D.c)
B.d5C=w([B.eAA,B.ezh,B.eAy,B.eB1,B.eyy],C.ax("O<+(N,N,w)>"))
B.d63=w([G.mx,G.ln],x.f)
B.esF=new C.y("Slab","First the concrete slab (the foundation) is poured and left to cure. Every wall sits on it.")
B.euN=new C.y("Framing","The carpenters build the wall frames from 2x4 studs, spaced 16 inches apart, with plates on the top and bottom.")
B.ekq=new C.y("Plumbing rough-in","The plumber runs the hot (red) and cold (blue) water lines and the white drain pipes inside the walls and floor before anything is closed up.")
B.eqV=new C.y("Electrical rough-in","The electrician runs the yellow and white cables from the breaker panel to every box, and fixes the boxes to the studs.")
B.erY=new C.y("Drywall","Drywall covers the frame. Here it is see-through so you can still look at the pipes and wires behind it.")
B.ekR=new C.y("Fixtures","Last come the outlets, switches, light, sink, toilet and water heater. This is where most repairs happen.")
B.em4=new C.y("Roof","The roof goes on to keep everything dry. It is see-through here so you can keep looking inside.")
B.d6l=w([B.esF,B.euN,B.ekq,B.eqV,B.erY,B.ekR,B.em4],x.L)
B.edm=new C.y(40,1)
B.eg9=new C.y(90,2)
B.ebV=new C.y(140,3)
B.d6P=w([B.edm,B.eg9,B.ebV],x.I)
B.et7=new C.y(-17,-9)
B.ec_=new C.y(17,-9)
B.et6=new C.y(-17,9)
B.ebZ=new C.y(17,9)
B.d6W=w([B.et7,B.ec_,B.et6,B.ebZ],x.f)
B.d71=w([-14,14],x.n)
B.awv=w([-26,26],x.n)
B.d75=w([-30,-10,10,30],x.n)
B.d76=w([-32,-8,34],x.n)
B.d77=w([-3,3],x.n)
B.o0=w([-72,-24,24],x.t)
B.d79=w([-80,80],x.n)
B.d7c=w([-90,-52,52,90],x.n)
B.awy=w([-9,9],x.n)
B.fBg=new A.E(8.2,5,-7.85)
B.fES=new A.E(8.2,1.2,-7.85)
B.fGo=new A.E(8.2,1,-7.4)
B.d8I=w([B.fBg,B.fES,B.fGo],x.o)
B.dZr={hot:0}
B.aM1=new C.eY(B.dZr,1,x.M)
B.e8O=new A.Eu(61,"Hot shut-off valve (left)",B.aM1,"Hot is always on the LEFT. The red hose goes on the left valve.")
B.dZf={cold:0}
B.aM9=new C.eY(B.dZf,1,x.M)
B.e8P=new A.Eu(62,"Cold shut-off valve (right)",B.aM9,"Cold is always on the RIGHT. The blue hose goes on the right valve.")
B.e8M=new A.Eu(63,"Hot faucet inlet (left)",B.aM1,"The left faucet inlet takes the hot (red) hose.")
B.e8N=new A.Eu(64,"Cold faucet inlet (right)",B.aM9,"The right faucet inlet takes the cold (blue) hose.")
B.a2n=w([B.e8O,B.e8P,B.e8M,B.e8N],C.ax("O<Eu>"))
B.a2p=w([-72,-48,-24,0,24],x.t)
B.da0=w(["1 Rough-in","2 Drywall","3 Devices"],x.s)
B.awV=w(["road","roadturn","roadtee","roadcross"],x.s)
B.eyR=new C.bt("hot","Hot hose (red)",B.t8)
B.ezx=new C.bt("cold","Cold hose (blue)",B.nE)
B.daW=w([B.eyR,B.ezx],C.ax("O<+(n,n,w)>"))
B.ed2=new C.y(34,40)
B.fLU=new A.zV(B.ed2,3.141592653589793,2.6,"Washing hands at the sink",!1,!1,!1,"")
B.daY=w([B.fLU],x.a)
B.a7U=new A.E(15,2.6,0)
B.a2s=w([B.aSd,B.a7U],x.o)
B.ed0=new C.y(30,4)
B.efC=new C.y(70,6)
B.ebT=new C.y(110,7)
B.ebW=new C.y(150,8)
B.db6=w([B.ed0,B.efC,B.ebT,B.ebW],x.I)
B.dbs=w(["tail","trap","arm"],x.s)
B.GU=w(["tv","lamp","toaster","hairdryer"],x.s)
B.dc6=w([y.r,"Hold the fixture up to the ceiling box. It has three short wires: black, white and green.","Join the house ground wire to the fixture ground.","Join the house white wire to the fixture white wire with a wire nut.","Join the house black wire to the fixture black wire with a wire nut.","Push the wires into the box and fasten the fixture to the ceiling.",y.E],x.s)
B.dce=w([30,60,120,180,300],x.t)
B.bQY=new A.jy("Breaker off, then test","Before you touch any wire, switch its breaker OFF, then check with a voltage tester that the wire is dead. A switch on the wall is not enough.")
B.bQL=new A.jy("Lock out, tag out","On a real job you put a lock or a note on the panel so nobody switches the power back on while you work.")
B.bR4=new A.jy("Water and power","Water carries electricity. Near sinks, tubs and outdoors the outlets must be GFCI, and wet hands never touch wires.")
B.bQQ=new A.jy("Eyes, ears, lungs","Safety glasses for drilling and cutting, ear protection for loud tools, and a mask when you sand drywall dust or cut tile.")
B.bR3=new A.jy("Shut the water off","Before you cut or loosen a pipe, close the main water valve and open a faucet to drain the line.")
B.d5Q=w([B.bQY,B.bQL,B.bR4,B.bQQ,B.bR3],x.Z)
B.bRg=new A.M8("Safety first","\ud83e\uddba",D.ci,B.d5Q)
B.bR5=new A.jy("Wire colours","Black is hot (it carries the power), white is neutral (the way back), bare copper or green is ground (the safety path). Red is a second hot, often used for a switched line.")
B.bRc=new A.jy("Screw colours","On an outlet the brass screw takes the hot wire, the silver screw takes the neutral and the green screw takes the ground.")
B.bR_=new A.jy("Wire size","14 gauge wire is for 15 amp circuits (lights and outlets). 12 gauge is for 20 amp circuits (kitchens). A thinner wire than the breaker allows can overheat and start a fire.")
B.bQU=new A.jy("Breakers","A breaker is a safety switch. It trips when a circuit carries too much current, so the wires never get hot enough to burn.")
B.bR7=new A.jy("Wire nuts","Strip about 3/4 inch, twist the bare ends together clockwise, and screw on the nut until no bare copper shows. Give each wire a gentle tug.")
B.bRd=new A.jy("Switches","A switch cuts the hot wire only. The neutral goes straight through to the light.")
B.bRe=new A.jy("GFCI","A GFCI outlet watches the current going out and coming back. If a little leaks (through water or a person) it cuts the power in a fraction of a second.")
B.bQN=new A.jy("Ceiling fans","A fan shakes and is heavy. It needs a box that says fan rated, fixed to the joist, not a plain light box.")
B.bQP=new A.jy("Heights","Outlets sit about 16 inches from the floor. Switches sit about 48 inches up, where your hand falls.")
B.cZG=w([B.bR5,B.bRc,B.bR_,B.bQU,B.bR7,B.bRd,B.bRe,B.bQN,B.bQP],x.Z)
B.bRj=new A.M8("Wiring basics","\u26a1",D.co,B.cZG)
B.bQM=new A.jy("Hot left, cold right","On a faucet, hot is on the left and cold on the right. Hot lines are marked red and cold lines blue.")
B.bQZ=new A.jy("The P-trap","The curved pipe under a sink always holds a little water. That water seal stops sewer gas coming up the drain.")
B.bR9=new A.jy("Shut-off valves","Every sink and toilet has its own small valve, so you can stop the water to one fixture without turning off the whole house.")
B.bQS=new A.jy("Slip nuts","Drain joints are sealed by a washer and a slip nut. Tighten by hand and a quarter turn: too much force cracks plastic.")
B.bQR=new A.jy("Wax ring","A toilet sits on a wax ring that seals it to the floor drain. A toilet is lowered straight down once, and cannot be slid around.")
B.bR6=new A.jy("Drain slope","Drains fall about 1/4 inch per foot so water and waste keep moving. Too flat and it clogs, too steep and the water leaves the solids behind.")
B.bRb=new A.jy("Order of work","Plumbing goes from the top down on the drain (tailpiece, trap, arm) and from the wall out on the supply (valve, hose, fixture).")
B.c7O=w([B.bQM,B.bQZ,B.bR9,B.bQS,B.bQR,B.bR6,B.bRb],x.Z)
B.bRh=new A.M8("Plumbing basics","\ud83d\udeb0",D.cs,B.c7O)
B.bQO=new A.jy("Studs","Studs are the vertical 2x4 posts inside a wall, 16 inches apart from centre to centre. Everything is fixed to them.")
B.bR1=new A.jy("Drilling studs","Holes for cable go through the middle of the stud, so a nail or screw cannot reach the wire.")
B.bQT=new A.jy("Drywall","A sheet is 4 feet wide, so its edges land on studs 48 inches apart. Screws go into studs only, just under the paper.")
B.bQW=new A.jy("Taping and mud","Seams get paper tape and three thin coats of joint compound, sanded smooth between coats, then primer and paint.")
B.bRa=new A.jy("Order of a build","Frame, run the pipes and wires (rough-in), inspect, hang drywall, finish it, paint, then fit the fixtures and devices.")
B.cLJ=w([B.bQO,B.bR1,B.bQT,B.bQW,B.bRa],x.Z)
B.bRf=new A.M8("Framing and walls","\ud83c\udfe0",D.dT,B.cLJ)
B.bQX=new A.jy("Voltage tester","A pen that glows or beeps near live wires. Test it on a known live outlet first, so you know it works.")
B.bR2=new A.jy("Wire strippers","Strip the plastic off without nicking the copper. A nick weakens the wire.")
B.bR8=new A.jy("Adjustable wrench","For nuts on valves and hoses. Hold the fitting steady with a second wrench so you do not twist the pipe.")
B.bR0=new A.jy("Drill and screw gun","A drill makes holes through studs. A screw gun sets drywall screws to the right depth.")
B.bQV=new A.jy("Level and tape measure","Measure twice, cut once. A level makes sure outlets, shelves and pipes are straight.")
B.ddl=w([B.bQX,B.bR2,B.bR8,B.bR0,B.bQV],x.Z)
B.bRi=new A.M8("Tools","\ud83e\uddf0",D.bt,B.ddl)
B.dd_=w([B.bRg,B.bRj,B.bRh,B.bRf,B.bRi],C.ax("O<M8>"))
B.byG=new A.mi(21,"Brass screw (top): HOT side",B.Ie,!1,"hot")
B.byF=new A.mi(22,"Brass screw (bottom): HOT side",B.Ie,!1,"hot")
B.byH=new A.mi(23,"Silver screw (top): NEUTRAL side",B.Ic,!1,"neutral")
B.byL=new A.mi(24,"Silver screw (bottom): NEUTRAL side",B.Ic,!1,"neutral")
B.byz=new A.mi(25,"Green screw: GROUND",B.S9,!1,"ground")
B.dd0=w([B.byG,B.byF,B.byH,B.byL,B.byz],x.r)
B.ddg=w(["Cream","Sky","Blush","Mint","Butter","Periwinkle","White","Slate"],x.s)
B.ddr=w([0.72,-0.72],x.n)
B.eh1=new C.y("outlet","\ud83d\udd0c Outlet")
B.etS=new C.y("gfci","\ud83d\udee1\ufe0f GFCI outlet")
B.eqh=new C.y("switch","\ud83d\udca1 Light switch")
B.ddJ=w([B.eh1,B.etS,B.eqh],x.L)
B.ddT=w(["inspect","hand","screwdriver","pliers","wrench","crimper","plunger","flapper","newoutlet","patch"],x.s)
B.deS=w(["Look under the sink. The wall has two shut-off valves: hot on the LEFT (red handle) and cold on the RIGHT (blue handle).","Pick the red hot hose. Tap the left shut-off valve, then the left faucet inlet.","Pick the blue cold hose. Tap the right shut-off valve, then the right faucet inlet.","Open the valves slowly and turn on the faucet. Check every connection for drips."],x.s)
B.dZp={flange:0,wax:1,toilet:2,bolts:3,valve:4,hosehot:5,hosecold:6,faucet:7,tail:8,trap:9,arm:10}
B.dh5=new C.bm(B.dZp,["Flange","Wax ring","Toilet","Bolts","Shut-off valve","Hot hose","Cold hose","Faucet","Tailpiece","P-trap","Trap arm"],x.l)
B.dYY={xbot:0,michelle:1,soldier:2}
B.a2Y=new C.bm(B.dYY,["assets/avatars/Xbot.glb","assets/avatars/Michelle.glb","assets/avatars/Soldier.glb"],x.l)
B.bwM=new A.u3("The living room has no power at all.","The living room breaker is sitting in the middle (orange). It has tripped. Flip it fully OFF and ON again, by hand.","hand","Breaker reset. The living room has power again.",72,0,"")
B.bwW=new A.u3("There is no hot water.","The water heater breaker has tripped (orange). Reset it by hand.","hand","Breaker reset. The water heater is heating again.",75,0,"")
B.bwT=new A.u3("Water is dripping under the kitchen sink.","The slip nut on the P-trap is loose and the joint drips. Tighten it with the wrench.","wrench","Slip nut tightened. The drip stopped.",87,0,"")
B.bwL=new A.u3("There is a wet spot on the wall behind the kitchen.","A crimped joint in the hot water line is leaking. A crimp joint is squeezed with a crimping tool, not tightened with a wrench.","crimper","The joint is crimped again and it does not leak.",96,0,"")
B.bwQ=new A.u3("The outlet by the sofa does not work, but the lights do.","The tester finds power at the box but the outlet is dead: a screw on the outlet has come loose. Turn the breaker off first, then tighten the screws with the screwdriver.","screwdriver","You tightened the loose screw. The outlet works again.",81,72,"Turn the living room breaker OFF first.")
B.bwN=new A.u3("The living room light flickers.","A wire nut in the light box has worked loose. Turn the breaker off, then twist the wire nut tight with the pliers.","pliers","You twisted the wire nut tight. The light is steady.",83,72,"Turn the living room breaker OFF first.")
B.bwO=new A.u3("The kitchen outlet sparks and smells burnt.","The outlet has burnt. Turn the breaker off and replace it with a new outlet.","newoutlet","New outlet fitted. No more sparks.",84,73,"Turn the kitchen breaker OFF first.")
B.bwU=new A.u3("The kitchen outlets are dead.","The GFCI outlet has tripped. Press its RESET button by hand.","hand","You pressed RESET. The kitchen outlets work.",84,0,"")
B.bwP=new A.u3("The toilet keeps running.","The rubber flapper in the tank no longer seals, so water leaks into the bowl all the time. Replace the flapper.","flapper","New flapper fitted. The toilet stops running.",88,0,"")
B.bwS=new A.u3("The kitchen faucet drips.","The faucet washer is worn. Tighten the packing nut with the wrench, then check.","wrench","The faucet is sealed. No more drips.",85,0,"")
B.bwR=new A.u3("There is a hole in the wall.","A hole in the drywall. Stick a drywall patch over it, then tape, mud, sand and paint it.","patch","Patch fitted. Now it only needs mud, sanding and paint.",95,0,"")
B.bwV=new A.u3("The kitchen sink drains very slowly.","The drain is clogged. Use the plunger.","plunger","The clog is gone. The sink drains fast.",94,0,"")
B.vM=new C.dS([B.YZ,B.bwM,B.Z_,B.bwW,B.M9,B.bwT,B.Ma,B.bwL,B.aip,B.bwQ,B.Z2,B.bwN,B.Z3,B.bwO,B.Z4,B.bwU,B.Z5,B.bwP,B.Z6,B.bwS,B.Z0,B.bwR,B.Z1,B.bwV],C.ax("dS<qV,u3>"))
B.dZC={michelle:0}
B.diP=new C.bm(B.dZC,[0.55],x.J)
B.diW=new C.bm(D.ie,[],C.ax("bm<H,d1>"))
B.dZn={tail:0,trap:1,arm:2}
B.dja=new C.bm(B.dZn,["Tailpiece","P-trap","Trap arm"],x.l)
B.aFd={xbot:0,michelle:1,soldier:2,human:3}
B.aCO=new C.bm(B.aFd,["\ud83e\udd16 X Bot","\ud83d\udc83 Dancer","\ud83e\ude96 Soldier","\ud83d\ude42 Person"],x.l)
B.abE=new C.w(1,0.9137254901960784,0.9215686274509803,0.9372549019607843,D.t)
B.bcZ=new C.w(1,0.8549019607843137,0.8666666666666667,0.8901960784313725,D.t)
B.e8_=new A.uz(B.abE,E.ab8,B.abE,B.bcZ,"xbot")
B.beL=new C.w(1,0.0784313725490196,0.047058823529411764,0.03137254901960784,D.t)
B.e80=new A.uz(B.aeK,B.beL,D.cC,D.aB,"michelle")
B.bj7=new C.w(1,0.8509803921568627,0.6470588235294118,0.48627450980392156,D.t)
B.bi7=new C.w(1,0.3568627450980392,0.4196078431372549,0.22745098039215686,D.t)
B.b8y=new C.w(1,0.5411764705882353,0.4823529411764706,0.3333333333333333,D.t)
B.e7Z=new A.uz(B.bj7,D.Kz,B.bi7,B.b8y,"soldier")
B.a4M=new A.uz(B.abc,B.acX,B.aeU,B.Ve,"human")
B.dje=new C.bm(B.aFd,[B.e8_,B.e80,B.e7Z,B.a4M],C.ax("bm<n,uz>"))
B.dZS={soldier:0}
B.djx=new C.bm(B.dZS,[3.141592653589793],x.J)
B.dY7={bed:0,nightstand:1,wardrobe:2,desk:3,rug:4,sofa:5,armchair:6,coffee:7,tvstand:8,dining:9,chair:10,plant:11,lamp:12,console:13,shelf:14,tree:15,pine:16,bush:17,flowers:18,fence:19,lamppost:20,bench:21,car:22,road:23,roadturn:24,roadtee:25,roadcross:26,house2:27,shop:28,hospital:29,firestation:30,school:31,firetruck:32,ambulance:33,dog:34,cat:35,cow:36,sheep:37,chicken:38,horse:39,pond:40,swing:41,shed:42,doghouse:43}
B.bxV=new A.hk("Bed","\ud83d\udecf\ufe0f",60,80)
B.by5=new A.hk("Night table","\ud83e\ude91",16,16)
B.byc=new A.hk("Wardrobe","\ud83d\udeaa",44,20)
B.bxS=new A.hk("Desk","\ud83d\udda5\ufe0f",48,24)
B.bxz=new A.hk("Rug","\ud83d\udfe5",70,50)
B.bxZ=new A.hk("Sofa","\ud83d\udecb\ufe0f",80,32)
B.bya=new A.hk("Armchair","\ud83d\udcba",30,30)
B.bxN=new A.hk("Coffee table","\u2615",40,24)
B.by6=new A.hk("TV stand","\ud83d\udcfa",56,18)
B.bxG=new A.hk("Dining table","\ud83c\udf7d\ufe0f",56,36)
B.bxJ=new A.hk("Chair","\ud83e\ude91",18,18)
B.by7=new A.hk("Plant","\ud83e\udeb4",14,14)
B.by0=new A.hk("Floor lamp","\ud83d\udca1",10,10)
B.bxT=new A.hk("Console table","\ud83d\uddc4\ufe0f",44,14)
B.by3=new A.hk("Bookshelf","\ud83d\udcda",36,12)
B.byb=new A.hk("Tree","\ud83c\udf33",36,36)
B.bxP=new A.hk("Pine tree","\ud83c\udf32",30,30)
B.bxE=new A.hk("Bush","\ud83c\udf3f",18,18)
B.bxY=new A.hk("Flowers","\ud83c\udf37",22,22)
B.bxA=new A.hk("Fence","\ud83d\udea7",64,6)
B.bxH=new A.hk("Street lamp","\ud83c\udfee",8,8)
B.bxU=new A.hk("Bench","\ud83e\ude91",44,16)
B.bxB=new A.hk("Car","\ud83d\ude97",84,40)
B.bxM=new A.hk("Road","\ud83d\udee3\ufe0f",40,40)
B.bxD=new A.hk("Road corner","\u21aa\ufe0f",40,40)
B.byd=new A.hk("Road T-junction","\u22a4",40,40)
B.bxO=new A.hk("Crossroads","\u271a",40,40)
B.by_=new A.hk("House","\ud83c\udfe0",72,60)
B.bxy=new A.hk("Shop","\ud83c\udfea",84,60)
B.bxK=new A.hk("Hospital","\ud83c\udfe5",110,70)
B.bxX=new A.hk("Fire station","\ud83d\ude92",90,64)
B.bxQ=new A.hk("School","\ud83c\udfeb",124,70)
B.by4=new A.hk("Fire truck","\ud83d\ude92",96,40)
B.bxR=new A.hk("Ambulance","\ud83d\ude91",84,40)
B.bxI=new A.hk("Dog","\ud83d\udc15",22,10)
B.bxL=new A.hk("Cat","\ud83d\udc08",16,8)
B.by1=new A.hk("Cow","\ud83d\udc04",38,16)
B.bxF=new A.hk("Sheep","\ud83d\udc11",26,14)
B.by2=new A.hk("Chicken","\ud83d\udc14",12,8)
B.bxC=new A.hk("Horse","\ud83d\udc0e",46,16)
B.by8=new A.hk("Pond","\ud83d\udca7",80,56)
B.bxW=new A.hk("Swing set","\ud83c\udfa0",56,40)
B.by9=new A.hk("Shed","\ud83d\uded6",50,42)
B.bye=new A.hk("Dog house","\ud83d\udc15",24,22)
B.pY=new C.bm(B.dY7,[B.bxV,B.by5,B.byc,B.bxS,B.bxz,B.bxZ,B.bya,B.bxN,B.by6,B.bxG,B.bxJ,B.by7,B.by0,B.bxT,B.by3,B.byb,B.bxP,B.bxE,B.bxY,B.bxA,B.bxH,B.bxU,B.bxB,B.bxM,B.bxD,B.byd,B.bxO,B.by_,B.bxy,B.bxK,B.bxX,B.bxQ,B.by4,B.bxR,B.bxI,B.bxL,B.by1,B.bxF,B.by2,B.bxC,B.by8,B.bxW,B.by9,B.bye],C.ax("bm<n,hk>"))
B.fG2=new A.E(0,0,-1.2)
B.dX6=new A.d1("Electrical box","The box is ready. Pull a cable to it, then wire a device.",B.fG2,9)
B.djz=new C.dS([3,B.dX6],C.ax("dS<H,d1>"))
B.aF4={inspect:0,hand:1,screwdriver:2,pliers:3,wrench:4,crimper:5,plunger:6,flapper:7,newoutlet:8,patch:9}
B.Qt=new C.bm(B.aF4,["Look and test","Hand","Screwdriver","Pliers","Wrench","Crimp tool","Plunger","New flapper","New outlet","Drywall patch"],x.l)
B.bBk=new C.a_(63072,"MaterialIcons",!1)
B.djD=new C.bm(B.aF4,[D.fa,B.ald,V.FO,D.FE,D.qW,B.bBk,A_.a_D,D.pT,B.akF,R.vo],C.ax("bm<n,a_>"))
B.dks=new A.B2(18,50,0,20)
B.dkt=new A.B2(-126,126,-66,5)
B.dku=new A.B2(-4,16,0,24)
B.dth=new A.a5X("calls",null)
B.aDN=new A.a5Y(null)
B.aDX=new A.N4(!1,"","",null)
B.fHO=new A.E(16,2.6,0)
B.dWQ=new A.d1("Wall drain","The pipe stub that comes out of the wall. The trap arm slides into it.",B.fHO,8)
B.fyJ=new A.E(0,3,-6)
B.dWR=new A.d1("Wall","The copper supply pipes come out of the wall here.",B.fyJ,24)
B.fFE=new A.E(8.2,1,-7)
B.dWS=new A.d1("Toilet","The tank fills from the cold supply on the wall. The bowl drains into the white pipe in the floor.",B.fFE,7)
B.fy4=new A.E(0,0,40)
B.dWT=new A.d1("The room","A room to build from bare studs to finished, working electrics. The walls hold the cable, the boxes and the devices.",B.fy4,190)
B.fDk=new A.E(-2.4,11.5,-3.6)
B.dWU=new A.d1("Hot faucet inlet","The threaded tail under the faucet where the hot supply hose screws on.",B.fDk,7)
B.fA4=new A.E(-3.6,4,-7.8)
B.dWV=new A.d1("Light switch","Controls the ceiling light. Tap Open lesson to wire one.",B.fA4,4.5)
B.fEt=new A.E(0,0.5,2)
B.dWW=new A.d1("Voltage tester","A tester that glows when it touches live power.",B.fEt,6)
B.dWX=new A.d1("Pipe joint","A crimped joint in the hot water line.",B.aRG,4)
B.fDC=new A.E(0,-0.2,0.2)
B.dWY=new A.d1("Cover plate","The plate covers the box and the edges of the drywall so nobody touches the wires.",B.fDC,8)
B.fH1=new A.E(-4.6,0.5,-3.4)
B.dWZ=new A.d1("Hot shut-off valve","The angle stop valve on the hot pipe. Turn the handle to stop the water to the faucet without shutting off the whole house. Hot is always on the left.",B.fH1,8)
B.fFb=new A.E(0,-0.3,3.2)
B.dX_=new A.d1("White wire nut: NEUTRAL","Twist the house white wire and the fixture white wire together under this cap.",B.fFb,6)
B.fEl=new A.E(4.6,0.5,-3.4)
B.dX0=new A.d1("Cold shut-off valve","The angle stop valve on the cold pipe. Cold is always on the right.",B.fEl,8)
B.fzF=new A.E(2.4,11.5,-3.6)
B.dX1=new A.d1("Cold faucet inlet","The threaded tail under the faucet where the cold supply hose screws on.",B.fzF,7)
B.fIv=new A.E(0.8,-0.8,1.2)
B.dX2=new A.d1("Black wire to the light","This black wire carries power to the light once the switch is on. It goes on the other brass screw.",B.fIv,7)
B.fDi=new A.E(10.05,5.2,-7.5)
B.dX3=new A.d1("Water heater breaker","A big circuit for the water heater. It is ON.",B.fDi,3.5)
B.aR6=new A.E(0,40,0)
B.dX4=new A.d1("Back wall",y.s,B.aR6,140)
B.fFx=new A.E(3,3.8,-7.4)
B.dX5=new A.d1("Kitchen faucet","Hot on the left, cold on the right. Tap Open lesson to connect the supply hoses.",B.fFx,4.5)
B.zt=new A.E(0,6,0)
B.dX7=new A.d1("Tailpiece","The straight pipe that hangs from the sink drain. Its bottom end is smooth so the slip nut can slide on and grip it.",B.zt,10)
B.fGP=new A.E(-60,40,50)
B.dX8=new A.d1("Left wall",y.s,B.fGP,140)
B.fAp=new A.E(3,1,0)
B.dX9=new A.d1("P-trap","The U-shaped bend. It always keeps a little water inside, and that water plug blocks sewer gas from coming back up into the house.",B.fAp,11)
B.fyp=new A.E(0,20,5)
B.dXa=new A.d1("The room","A bare room with the water supply stubs and the drain stub already in the wall and floor.",B.fyp,120)
B.fz5=new A.E(0,-8,0)
B.dXb=new A.d1("Cabinet","The cabinet under the sink where the drain is built.",B.fz5,22)
B.fy2=new A.E(0,0,150)
B.dXc=new A.d1("Lawn","The grass. Walls, floors and the sky stay as they are, but you can add things to the garden with the Furniture button.",B.fy2,400)
B.fyS=new A.E(0,4,-8)
B.dXd=new A.d1("Wall framing","2x4 studs 16 inches apart. Pipes and cables run through holes drilled in the middle of the studs, never along the edge where a nail could hit them.",B.fyS,18)
B.aRR=new A.E(0,-0.2,5.1)
B.dXe=new A.d1("TEST and RESET buttons","Press TEST to make the GFCI trip. Press RESET to turn it back on. Test it once a month.",B.aRR,5)
B.aR1=new A.E(0,11,0)
B.dXf=new A.d1("Sink","The sink bowl and the counter. The drain flange at the bottom is where the tailpiece starts.",B.aR1,16)
B.fO=new A.E(0,0,0)
B.dXg=new A.d1("Drywall","The wall surface. A hole is cut in it for the electrical box.",B.fO,22)
B.fB7=new A.E(60,40,50)
B.dXh=new A.d1("Right wall",y.s,B.fB7,140)
B.fyg=new A.E(0,14,-3)
B.dXi=new A.d1("Counter and sink","The faucet is mounted through a hole in the counter.",B.fyg,20)
B.fCs=new A.E(0,-1.9,5)
B.dXj=new A.d1("GREEN screw: GROUND","The green screw is for the bare copper ground wire.",B.fCs,5)
B.fyR=new A.E(0,47,-2)
B.dXk=new A.d1("Top and bottom plate","The horizontal 2x4s at the top and the bottom of the wall. The studs stand between them.",B.fyR,70)
B.fy5=new A.E(0,0,-8)
B.dXl=new A.d1("Wall","Behind the wall the drain pipe goes down to the sewer line.",B.fy5,22)
B.fym=new A.E(0,19,-3)
B.dXm=new A.d1("Faucet","The faucet with hot on the left (red) and cold on the right (blue).",B.fym,14)
B.fBn=new A.E(3.5,2,-7.2)
B.dXn=new A.d1("Kitchen counter and cabinet","The cabinet under the sink is where the drain and the shut-off valves live.",B.fBn,9)
B.fCK=new A.E(10.05,5.7,-7.5)
B.dXo=new A.d1("Kitchen breaker","Protects the kitchen outlets. It is ON.",B.fCK,3.5)
B.fDr=new A.E(4,6,-2.5)
B.dXp=new A.d1("Cold supply hose","A braided steel hose with a rubber liner and a blue band.",B.fDr,9)
B.fEr=new A.E(-1,0.6,4.3)
B.dXq=new A.d1("SILVER screw: NEUTRAL side",y.o,B.fEr,5)
B.a7Q=new A.E(0,3.7,0)
B.dXr=new A.d1("Slip nut","A big plastic nut. Slide it on the pipe first, then the washer, then join the pieces and hand tighten. A rubber washer inside makes the seal.",B.a7Q,7)
B.TA=new A.E(0,-1,-0.6)
B.dXs=new A.d1("Wire nut","A twist-on cap that joins wires safely. The two white wires are joined here because a switch only cuts the hot wire.",B.TA,5)
B.fDw=new A.E(-1.5,-0.3,3.2)
B.dXt=new A.d1("Black wire nut: HOT","Twist the house black wire and the fixture black wire together under this cap.",B.fDw,6)
B.fCJ=new A.E(-1.9,0,-2)
B.dXu=new A.d1("Wood stud","The 2x4 frame inside the wall. The electrical box is nailed or screwed to a stud so it cannot move.",B.fCJ,16)
B.fG1=new A.E(-1,-0.8,4.3)
B.dXv=new A.d1("SILVER screw: NEUTRAL side",y.o,B.fG1,5)
B.fI4=new A.E(6,3,-7.8)
B.dXw=new A.d1("Water and drain pipes","Red is hot water, blue is cold water (PEX tubing). The white pipes are drains. They slope down so the waste flows away.",B.fI4,14)
B.fG5=new A.E(1,0.6,4.3)
B.dXx=new A.d1("BRASS screw: HOT side",y.u,B.fG5,5)
B.fGp=new A.E(0,-0.2,4.9)
B.dXy=new A.d1("Mounting strap (yoke)","The metal strap with two screw slots. Long screws through the ears hold the device in the box.",B.fGp,7)
B.fIs=new A.E(9.55,4.7,-7.5)
B.dXz=new A.d1("Spare breaker","A spare circuit.",B.fIs,3.5)
B.fyq=new A.E(0,20,8)
B.dXA=new A.d1("Vanity and counter","The cabinet that holds the sink. The pipes live inside it.",B.fyq,70)
B.fHx=new A.E(-3.2,1.3,-7.8)
B.dXB=new A.d1("Living room outlet","A standard outlet. Tap Open lesson to wire one in 3D.",B.fHx,4.5)
B.fGr=new A.E(1.5,-0.3,3.2)
B.dXC=new A.d1("Green ground connection","Join the bare copper house ground wire to the green fixture ground wire.",B.fGr,6)
B.fCx=new A.E(12,2.6,0)
B.dXD=new A.d1("Trap arm","The pipe that carries the waste water from the trap into the wall. It must slope down toward the wall, about 1/4 inch per foot.",B.fCx,9)
B.fE7=new A.E(0,6.5,-7.8)
B.dXE=new A.d1("Electrical cables","Cables run from the breaker panel to every outlet, switch and light. Yellow is 12 gauge for 20 amps. White is 14 gauge for 15 amps.",B.fE7,16)
B.fEH=new A.E(11.2,2.3,-6)
B.dXF=new A.d1("Water heater","Heats the water. The cold line goes in at the top and the hot line comes out at the top.",B.fEH,9)
B.fFe=new A.E(9.55,5.2,-7.5)
B.dXG=new A.d1("Bathroom breaker","Protects the bathroom. It is ON.",B.fFe,3.5)
B.fCP=new A.E(5.2,3.9,-7.8)
B.dXH=new A.d1("Kitchen GFCI outlet","Outlets near water must be GFCI. Tap Open lesson to wire one.",B.fCP,4.5)
B.fyO=new A.E(0,40,-3)
B.dXI=new A.d1("Electrical cable","Yellow 12/2 cable with ground: it carries power from the breaker panel through the holes in the studs to each box.",B.fyO,80)
B.fDg=new A.E(-8.4,1.2,-6.4)
B.dXJ=new A.d1("Sofa","Just furniture, to show the size of the room.",B.fDg,10)
B.dXK=new A.d1("Outlet face","Two outlets. The short slot is hot, the long slot is neutral, and the round hole is ground.",B.aRR,6)
B.fCc=new A.E(0,4,-7.8)
B.dXL=new A.d1("Wall","The drywall of the back wall.",B.fCc,16)
B.fHA=new A.E(0,0,0.6)
B.dXM=new A.d1("Canopy","The round cover that hides the box and the wire connections against the ceiling.",B.fHA,8)
B.dXN=new A.d1("Concrete slab","The foundation. It carries the whole weight of the house. Plumbing drains are placed before it is poured.",B.fO,30)
B.fyK=new A.E(0,40,12)
B.dXO=new A.d1("Front door","Tap the door to go inside the house.",B.fyK,260)
B.a7S=new A.E(8.9,2.6,0)
B.dXP=new A.d1("Slip nut","Hand tighten it, then about a quarter turn with pliers. Over-tightening cracks the plastic.",B.a7S,7)
B.fFd=new A.E(1,-0.8,4.3)
B.dXQ=new A.d1("BRASS screw: HOT side",y.u,B.fFd,5)
B.fC0=new A.E(0.6,1.5,-1.8)
B.dXR=new A.d1("Cable to the light (LOAD)","This cable carries the switched power on to the light. The black wire here only has power when the switch is on.",B.fC0,8)
B.fCm=new A.E(9.8,5,-7.5)
B.dXS=new A.d1("Breaker panel","The main electrical panel. Each breaker protects one circuit. A breaker that is in the middle position has TRIPPED. Flip it fully OFF and then ON to reset.",B.fCm,6)
B.fDu=new A.E(-4,6,-2.5)
B.dXT=new A.d1("Hot supply hose","A braided steel hose with a rubber liner and a red band. Hand tighten the nuts, then a quarter turn with a wrench.",B.fDu,9)
B.fmB=new C.x("Sick people can stay in a hospital bed. Treat each patient before their care runs out, and they go home better.",null,D.IH,null,D.L,null,null,null,null,null,null,null)
B.e3I=new C.C(D.ahJ,B.fmB,null)
B.bHn=new C.ae(D.ee,18,D.b7,null,null,null)
B.e3Y=new C.C(D.fx,B.bHn,null)
B.e4_=new C.C(D.fx,F.amK,null)
B.e9Y=new A.a8r(null,null)
B.bbl=new C.w(1,0.30980392156862746,0.7019607843137254,0.9647058823529412,D.t)
B.biJ=new C.w(1,0.11372549019607843,0.37254901960784315,0.7686274509803922,D.t)
B.bfQ=new C.w(1,0.043137254901960784,0.16470588235294117,0.4196078431372549,D.t)
B.cPB=w([B.bbl,B.biJ,B.bfQ],x.O)
B.eaI=new C.bS(Z.pa,0.5,D.x,null,0,B.cPB,null,null)
B.biZ=new C.w(1,0.8392156862745098,0.9019607843137255,0.9176470588235294,D.t)
B.ebq=new C.y(B.biZ,B.VV)
B.eby=new C.y(0,120)
B.ebK=new C.y(B.wL,B.fO)
B.ed4=new C.y(64,2.4)
B.eeC=new C.y("LOAD (taped)",D.d9)
B.ehi=new C.y(63,-2.4)
B.ei1=new C.y(51,B.abD)
B.b73=new C.w(1,0.9137254901960784,0.8705882352941177,0.7607843137254902,D.t)
B.ekB=new C.y(B.b73,B.At)
B.b5t=new C.w(1,0.7647058823529411,0.8117647058823529,0.9019607843137255,D.t)
B.en5=new C.y(B.b5t,B.aeM)
B.bdO=new C.w(1,0.3568627450980392,0.39215686274509803,0.4392156862745098,D.t)
B.eoH=new C.y("SILVER \xb7 NEUTRAL",B.bdO)
B.fHI=new A.E(-1.5,0,0)
B.eoQ=new C.y(B.Ki,B.fHI)
B.b6d=new C.w(1,0.8196078431372549,0.29411764705882354,0.22745098039215686,D.t)
B.eql=new C.y(52,B.b6d)
B.baL=new C.w(1,0.12156862745098039,0.47843137254901963,0.22745098039215686,D.t)
B.erd=new C.y("GREEN \xb7 GROUND",B.baL)
B.bhW=new C.w(1,0.9450980392156862,0.9098039215686274,0.8235294117647058,D.t)
B.erT=new C.y(B.bhW,B.At)
B.es9=new C.y("main","Main water valve")
B.ae5=new C.w(1,0.1843137254901961,0.6352941176470588,0.30980392156862746,D.t)
B.fIw=new A.E(1.5,0,0)
B.evn=new C.y(B.ae5,B.fIw)
B.b7A=new C.w(1,0.9529411764705882,0.9411764705882353,0.9098039215686274,D.t)
B.bdl=new C.w(1,0.4823529411764706,0.5294117647058824,0.5803921568627451,D.t)
B.ew_=new C.y(B.b7A,B.bdl)
B.ewR=new C.y(B.px,B.abC)
B.b7g=new C.w(1,0.6039215686274509,0.4196078431372549,0.047058823529411764,D.t)
B.exB=new C.y("BRASS \xb7 HOT",B.b7g)
B.ey3=new C.y(53,B.ae5)
B.eyH=new C.bt(61,-4.6,B.t8)
B.eAs=new C.bt(62,4.6,B.nE)
B.eCa=new C.cH([0,17.1,16.4,5.8])
B.eCd=new C.cH([0,-0.1,16.4,4.2])
B.eCO=new C.cH([-73,73,-3,400])
B.eDh=new C.cH([15.6,9,14.8,22])
B.eDl=new C.cH([-15.6,9,14.8,22])
B.eDu=new C.ev([72,60,44,B.Ks,B.Kv])
B.biF=new C.w(1,0.8941176470588236,0.6901960784313725,0.47843137254901963,D.t)
B.eDL=new C.ev([124,70,44,B.biF,B.x5])
B.eDS=new C.ev([90,64,46,B.ad6,D.ju])
B.eEa=new C.ev([110,70,62,D.bM,D.ak])
B.eEf=new C.ev([84,60,40,B.ad8,B.Kv])
B.eK6=new C.at(126,84)
B.eLi=new C.a7(58,null,null,null)
B.eTQ=new C.G(!0,D.c,null,null,null,null,13.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.eV5=new C.G(!0,D.az,null,null,null,null,14,D.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.eVj=new C.G(!0,D.az,null,null,null,null,11.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.eW3=new C.G(!0,D.aH,null,null,null,null,12.5,D.u,null,2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.eWD=new C.G(!0,D.c,null,null,null,null,12.5,D.P,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.aOp=new C.G(!0,D.ad,null,null,null,null,12,D.P,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.eXt=new C.G(!0,D.c,null,null,null,null,13,D.P,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.a6O=new C.G(!0,D.ad,null,null,null,null,null,null,null,null,null,null,1.45,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.eZl=new C.G(!0,null,null,null,null,null,9,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.IB=new C.G(!0,D.aH,null,null,null,null,12.5,D.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.eZR=new C.G(!0,D.c,null,null,null,null,11.5,D.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.f_8=new C.G(!0,D.bK,null,null,null,null,13,D.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.f09=new C.G(!0,D.ad,null,null,null,null,13.5,null,D.cD,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.f0k=new C.G(!0,D.fg,null,null,null,null,11.5,D.P,null,null,null,null,1.25,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.f0p=new C.G(!0,D.ez,null,null,null,null,14,D.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.f1u=new C.G(!0,D.aR,null,null,null,null,12,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.aP6=new C.G(!0,D.ad,null,null,null,null,13.5,null,null,null,null,null,1.5,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.f5W=new C.G(!0,D.c,null,null,null,null,13.5,D.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.f65=new C.G(!0,D.aR,null,null,null,null,11.5,null,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.f6C=new C.G(!0,D.b1,null,null,null,null,14.5,D.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.eU4=new C.G(!0,D.w,null,null,null,null,12,D.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.f7N=new C.x("Open the 3D lesson",null,B.eU4,null,null,null,null,null,null,null,null,null)
B.f8E=new C.x("Tip: pick a part, then tap its glowing spot. Joints on hoses, bolts and the drain are only loose: pick the Wrench and tap them. Use your Hand on the main water valve: turn the water OFF before you cut into a pipe, and ON to test for leaks.",null,E.a6G,null,null,null,null,null,null,null,null,null)
B.f9L=new C.x("You used all three lives. Electricity does not give second chances, so in real life you turn the breaker OFF and test the wires every single time. Try the job again.",null,D.zm,null,null,null,null,null,null,null,null,null)
B.fa1=new C.x("A different house",null,null,null,null,null,null,null,null,null,null,null)
B.fat=new C.x("\ud83c\udf5e",null,D.D4,null,null,null,null,null,null,null,null,null)
B.faN=new C.x("Play the tour",null,null,null,null,null,null,null,null,null,null,null)
B.faU=new C.x("Start this job again",null,null,null,null,null,null,null,null,null,null,null)
B.fdD=new C.x("Start from a bare house (wire everything)",null,null,null,null,null,null,null,null,null,null,null)
B.feZ=new C.x("Go through",null,null,null,null,null,null,null,null,null,null,null)
B.ffM=new C.x("The customer says\u2026",null,D.ds,null,null,null,null,null,null,null,null,null)
B.fgu=new C.x("What the house needs",null,D.ds,null,null,null,null,null,null,null,null,null)
B.fgF=new C.x("Next job",null,null,null,null,null,null,null,null,null,null,null)
B.eVv=new C.G(!0,D.w,null,null,null,null,14,D.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fgN=new C.x("Go in",null,B.eVv,null,null,null,null,null,null,null,null,null)
B.f3j=new C.G(!0,D.aH,null,null,null,null,22,D.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fgR=new C.x("My House",null,B.f3j,null,D.L,null,null,null,null,null,null,null)
B.fgY=new C.x("New job",null,null,null,null,null,null,null,null,null,null,null)
B.aOL=new C.G(!0,D.ci,null,null,null,null,null,D.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fh4=new C.x("Job over",null,B.aOL,null,null,null,null,null,null,null,null,null)
B.fhk=new C.x("Three shocks. In real life you switch the breaker off and test the wires, every time. Try another call.",null,D.zm,null,null,null,null,null,null,null,null,null)
B.fhq=new C.x("Learn the trades",null,L.rA,null,null,null,null,null,null,null,null,null)
B.fhv=new C.x("Book a hallway tour (just the hall)",null,null,null,null,null,null,null,null,null,null,null)
B.fi0=new C.x("Practice mode: no hints. You will only hear from me when something is wrong.",null,U.SY,null,null,null,null,null,null,null,null,null)
B.fid=new C.x("New call",null,null,null,null,null,null,null,null,null,null,null)
B.fii=new C.x("Job done! \ud83c\udf89",null,O.T1,null,null,null,null,null,null,null,null,null)
B.fjq=new C.x("Next call",null,null,null,null,null,null,null,null,null,null,null)
B.fjO=new C.x("Plug in",null,D.ds,null,null,null,null,null,null,null,null,null)
B.fkd=new C.x("Look around",null,null,null,null,null,null,null,null,null,null,null)
B.fkM=new C.x("The customer wants:",null,D.a6Z,null,null,null,null,null,null,null,null,null)
B.fkW=new C.x('Tip: pick "Look and test" and tap things to find out what is wrong. Then pick the right tool. Turn the breaker off (hand) before you touch any wire.',null,E.a6G,null,null,null,null,null,null,null,null,null)
B.fmK=new C.x("Who walks the house?",null,Q.SH,null,null,null,null,null,null,null,null,null)
B.fnk=new C.x("5 bedrooms, 3 bathrooms and a garden. Walk in, look all round, fix what is wrong.",null,Y.SI,null,D.L,null,null,null,null,null,null,null)
B.fnp=new C.x("Call over",null,B.aOL,null,null,null,null,null,null,null,null,null)
B.fnw=new C.x("\u23cf Unplug",null,K.zj,null,null,null,null,null,null,null,null,null)
B.fnP=new C.x("A different call",null,null,null,null,null,null,null,null,null,null,null)
B.foe=new C.x("\ud83d\udecf\ufe0f",null,D.us,null,null,null,null,null,null,null,null,null)
B.foF=new C.x("Job complete! \ud83c\udf89",null,O.T1,null,null,null,null,null,null,null,null,null)
B.fpe=new C.x("How you are doing",null,D.i3,null,null,null,null,null,null,null,null,null)
B.fpB=new C.x("House tour \ud83c\udfac",null,D.ds,null,null,null,null,null,null,null,null,null)
B.fpK=new C.x("All fixed! \ud83c\udf89",null,O.T1,null,null,null,null,null,null,null,null,null)
B.aQb=new C.x("Stay",null,null,null,null,null,null,null,null,null,null,null)
B.aQd=new C.x("A different job",null,null,null,null,null,null,null,null,null,null,null)
B.frO=new C.x("It goes on the back wall, not wired yet. Tap the red one to wire it yourself.",null,U.SP,null,null,null,null,null,null,null,null,null)
B.ftB=new C.x("The job",null,D.ds,null,null,null,null,null,null,null,null,null)
B.fu0=new C.x("A little person walks through the whole house: the living room, the kitchen (a drink from the fridge), the hall, the bedrooms and the bathrooms. Every TV is switched on first. Choose how long it takes.",null,D.IH,null,null,null,null,null,null,null,null,null)
B.fur=new C.x("Stay in the room",null,null,null,null,null,null,null,null,null,null,null)
B.fuW=new C.x("\ud83d\udc8a",null,D.D4,null,null,null,null,null,null,null,null,null)
B.fxY=new A.E(3.6,2.6,0.6)
B.fy_=new A.E(0,56,0.9)
B.fy1=new A.E(0,0.62,-19.2)
B.lr=new A.E(0,0,1)
B.fy3=new A.E(0,0,3)
B.a7M=new A.E(0,0,4)
B.zs=new A.E(0,0,-1)
B.aR_=new A.E(0,0,-60)
B.aR0=new A.E(0,10,0)
B.fy6=new A.E(0,10,3)
B.fy7=new A.E(0,115,3)
B.fy8=new A.E(0,115,-63)
B.fy9=new A.E(0,128,-30)
B.fya=new A.E(0,12,0)
B.fyb=new A.E(0,12,3)
B.aR2=new A.E(0,13,0)
B.fyc=new A.E(0,13,-8)
B.J0=new A.E(0,14,0)
B.fyd=new A.E(0,14,11)
B.fye=new A.E(0,14,2)
B.fyf=new A.E(0,14,5)
B.fyh=new A.E(0,14,-9)
B.fyi=new A.E(0,150,8)
B.fyj=new A.E(0,16,0)
B.a7N=new A.E(0,17,0)
B.fyk=new A.E(0,17,21)
B.fyl=new A.E(0,19,14)
B.fP=new A.E(0,1,0)
B.fyn=new A.E(0,20,0)
B.fyo=new A.E(0,20,16)
B.fyr=new A.E(0,20,-14)
B.fys=new A.E(0,20,-6)
B.fyt=new A.E(0,21,0)
B.fyu=new A.E(0,22,-11)
B.fyv=new A.E(0,22,-12)
B.fyw=new A.E(0,22,-39)
B.fyx=new A.E(0,23,0)
B.fyy=new A.E(0,24,0)
B.fyz=new A.E(0,24,13)
B.fyA=new A.E(0,25,-15)
B.aR3=new A.E(0,28,0)
B.fyB=new A.E(0,28,-8)
B.fyC=new A.E(0,2,14)
B.aR4=new A.E(0,30,0)
B.fyD=new A.E(0,31,-6)
B.aR5=new A.E(0,34,0)
B.fyE=new A.E(0,36,0)
B.fyF=new A.E(0,36,19)
B.fyG=new A.E(0,37,22)
B.fyH=new A.E(0,3,0)
B.fyI=new A.E(0,3,-30)
B.fyL=new A.E(0,40,150)
B.fyM=new A.E(0,40,17)
B.fyN=new A.E(0,40,40)
B.fyP=new A.E(0,40,-6)
B.fyQ=new A.E(0,46,0)
B.aR7=new A.E(0,48,0)
B.Tz=new A.E(0,4,-2)
B.fyT=new A.E(0,50,-30)
B.fyU=new A.E(0,52,0)
B.fyV=new A.E(0,55,0)
B.fyW=new A.E(0,58,0)
B.fyX=new A.E(0,5,4)
B.fyY=new A.E(0,7,0)
B.fyZ=new A.E(0,7,-5)
B.Da=new A.E(0,8,0)
B.fz_=new A.E(0,8,6)
B.fz0=new A.E(0,8,-16)
B.fz1=new A.E(0,8,-19)
B.fz2=new A.E(0,8,-4)
B.fz3=new A.E(0,94,13)
B.aR8=new A.E(0,9,0)
B.aR9=new A.E(0,9,-3)
B.a7O=new A.E(0,-4,28)
B.fz4=new A.E(0,-4,-20)
B.fz7=new A.E(10,12,10)
B.fz8=new A.E(10,8,10)
B.fz9=new A.E(11,12,30)
B.fza=new A.E(11,1,11)
B.fzb=new A.E(120,0,-30)
B.fzc=new A.E(13,0,0)
B.fzd=new A.E(13,15,2)
B.fze=new A.E(13,28,3)
B.fzf=new A.E(0,0.52,2.35)
B.fzg=new A.E(14,13,28)
B.fzh=new A.E(14,17,4)
B.fzi=new A.E(14,20,-28)
B.fzj=new A.E(14,30,14)
B.fzk=new A.E(14,36,14)
B.fzm=new A.E(16,10,10)
B.fzn=new A.E(16,16,16)
B.aRa=new A.E(17,3,17)
B.fzo=new A.E(18,18,14)
B.fzp=new A.E(18,20,18)
B.fzq=new A.E(18,22,2)
B.fzr=new A.E(18,28,16)
B.fzs=new A.E(18,2,18)
B.fzt=new A.E(18,6,0)
B.fzu=new A.E(18,9,11)
B.fzv=new A.E(19,13,7)
B.fzw=new A.E(70,0.6,50)
B.fzx=new A.E(0,3,-6.5)
B.fzy=new A.E(-4,20.4,0)
B.fzz=new A.E(1,1,0.64)
B.fzA=new A.E(-4.6,1.5,-3.6)
B.fzB=new A.E(0,-13.5,-1.5)
B.fzC=new A.E(4,10,3.5)
B.j_=new A.E(1,0,0)
B.fzD=new A.E(1,26,14)
B.fzE=new A.E(1,28,14)
B.aRb=new A.E(1,2,1)
B.aRc=new A.E(1,3,1)
B.aRd=new A.E(1,3,6)
B.fzG=new A.E(1,0.9,0.06)
B.fzI=new A.E(1.6,15,1.6)
B.aRe=new A.E(20,14,7)
B.fzJ=new A.E(20,30,26)
B.fzK=new A.E(20,4,26)
B.fzL=new A.E(20,92,26)
B.fzM=new A.E(22,12,34)
B.fzN=new A.E(22,14,0)
B.fzO=new A.E(22,14,2)
B.fzP=new A.E(22,2,28)
B.fzQ=new A.E(22,3,10)
B.fzR=new A.E(22,3,22)
B.fzS=new A.E(240,100,60)
B.fzT=new A.E(244,6,64)
B.fzU=new A.E(24,12,34)
B.fzV=new A.E(24,14,22)
B.fzW=new A.E(24,38,0)
B.aRf=new A.E(24,6,14)
B.fzX=new A.E(262,3,5)
B.fzY=new A.E(262,3,56)
B.fzZ=new A.E(26,2,26)
B.aRg=new A.E(26,4,22)
B.fA_=new A.E(26,72,26)
B.fA0=new A.E(26,-34,96)
B.fA2=new A.E(-0.1,0,0)
B.fA3=new A.E(2,13,2)
B.aRh=new A.E(2,23,12)
B.aRi=new A.E(2,28,22)
B.fA5=new A.E(64,10,-1.4)
B.fA6=new A.E(19.6,0,-1.5)
B.aRj=new A.E(0,56,1.3)
B.fA7=new A.E(0,15.5,0)
B.fA8=new A.E(30,16,30)
B.aRk=new A.E(30,16,72)
B.fA9=new A.E(30,22,0)
B.fAa=new A.E(30,24,8)
B.fAb=new A.E(30,28,18)
B.fAc=new A.E(30,29,0)
B.fAe=new A.E(32,2,20)
B.fAf=new A.E(33,11,10)
B.fAg=new A.E(34,30,1)
B.fAh=new A.E(-1,-1.7,2.3)
B.fAi=new A.E(36,22,0)
B.fAj=new A.E(36,30,0)
B.fAk=new A.E(36,30,1)
B.fAl=new A.E(36,60,12)
B.fAm=new A.E(37,16,0)
B.fAn=new A.E(-0.2,-0.3,-0.4)
B.fAo=new A.E(0,48.6,55)
B.aRl=new A.E(3,12,12)
B.fAq=new A.E(3,22,2)
B.fAr=new A.E(3,26,3)
B.a7P=new A.E(3,3,3)
B.fAs=new A.E(3,5,3)
B.fAu=new A.E(40,1,14)
B.fAv=new A.E(40,28,1)
B.fAw=new A.E(40,2,24)
B.fAx=new A.E(40,30,26)
B.fAy=new A.E(42,2,28)
B.fAz=new A.E(44,10,2)
B.aRn=new A.E(44,2,14)
B.fAA=new A.E(44,72,20)
B.fAB=new A.E(0.9,0,4.4)
B.fAC=new A.E(8.2,1.9,-7.55)
B.fAD=new A.E(-120.1,100,-60)
B.fAE=new A.E(46,10,34)
B.fAF=new A.E(46,26,2)
B.fAG=new A.E(48,2,24)
B.fAH=new A.E(0,-47.25,-2.25)
B.fAI=new A.E(0.6,68,0.4)
B.fAJ=new A.E(0,1.59,0.14)
B.fAK=new A.E(0,-3.4,1)
B.fAL=new A.E(25,79,1.4)
B.fAM=new A.E(1,0,-1.2)
B.fAN=new A.E(0.6,4,2.4)
B.fAO=new A.E(50,28,42)
B.fAP=new A.E(50,4,28)
B.fAQ=new A.E(54,5,18)
B.fAR=new A.E(56,18,18)
B.fAS=new A.E(56,2,36)
B.fAT=new A.E(56,3,32)
B.fAU=new A.E(56,3,48)
B.fAV=new A.E(58,9,74)
B.fAW=new A.E(0,-0.8,0.9)
B.fAX=new A.E(11.9,0,-8)
B.fAY=new A.E(20,7,34.4)
B.aRo=new A.E(1.6,1.6,0.4)
B.fB_=new A.E(0.16,0.32,0.07)
B.aRp=new A.E(5,12,26)
B.fB0=new A.E(5,1,2)
B.fB1=new A.E(5,6,10)
B.fB2=new A.E(5,6,3)
B.fB3=new A.E(5,9,8)
B.fB4=new A.E(0,14.3,-1.5)
B.aRq=new A.E(-13,8.6,-9.5)
B.fB5=new A.E(60,12,80)
B.fB6=new A.E(60,30,3)
B.fB8=new A.E(62,18,20)
B.fB9=new A.E(62,22,6)
B.fBa=new A.E(64,10,0)
B.aRr=new A.E(6,14,20)
B.aRs=new A.E(6,14,32)
B.fBd=new A.E(6,4,4)
B.fBf=new A.E(0,-0.2,0.14)
B.fBh=new A.E(0.3,38,2)
B.fBi=new A.E(70,125,-45)
B.fBj=new A.E(70,144,-45)
B.fBk=new A.E(72,-17,70)
B.fBl=new A.E(12,5,0.4)
B.fBm=new A.E(1.6,1.7,3.6)
B.fBo=new A.E(-72.8,0,55)
B.fBq=new A.E(25,79,0.2)
B.fBr=new A.E(7,0,-8)
B.fBs=new A.E(7,2,7)
B.aRt=new A.E(7,3,0)
B.fBt=new A.E(7,8,3)
B.fBv=new A.E(0,11,9.2)
B.fBw=new A.E(-3.2,1.3,-7.82)
B.fBx=new A.E(80,16,32)
B.fBy=new A.E(80,26,8)
B.aRu=new A.E(147,1.5,3.5)
B.fBz=new A.E(82,46,3)
B.aRv=new A.E(-6.5,6.9,-3)
B.fBA=new A.E(84,10,38)
B.fBB=new A.E(84,18,38)
B.fBC=new A.E(0.93,0.92,1)
B.fBD=new A.E(4.6,4.2,9.5)
B.fBE=new A.E(0.4,6,8)
B.fBF=new A.E(0,-48.6,55)
B.fBG=new A.E(2.6,2,2.6)
B.fBH=new A.E(5.5,8.5,3)
B.fBI=new A.E(120.1,100,0)
B.fBJ=new A.E(0,0,0.26)
B.fBK=new A.E(8,18,8)
B.aRw=new A.E(8,2,16)
B.fBL=new A.E(8,2,6)
B.aRx=new A.E(8,2,8)
B.fBM=new A.E(8,4,4)
B.fBN=new A.E(8,8,12)
B.fBO=new A.E(8,9,8)
B.fBP=new A.E(8,9,9)
B.fBQ=new A.E(15,19,0.5)
B.fBR=new A.E(96,14,38)
B.fBS=new A.E(0.4,0.38,0.12)
B.fBT=new A.E(0,0,-0.43)
B.aRy=new A.E(11.2,4.5,-6)
B.aRz=new A.E(1.2,96,112)
B.aRA=new A.E(0.08,3.8,2.4)
B.aRB=new A.E(9,1,9)
B.fBU=new A.E(9,40,4)
B.fBV=new A.E(9,5,9)
B.fBW=new A.E(-3.5,26,15)
B.fBX=new A.E(1.5,1.3,0.6)
B.fBZ=new A.E(0,-1.78,0.27)
B.fC_=new A.E(0,0.62,0)
B.fC2=new A.E(20,11.5,0)
B.fC3=new A.E(3.2,0.12,-6.7)
B.fC4=new A.E(12,0,-8.1)
B.fC6=new A.E(1.25,0.28,0.1)
B.fC7=new A.E(0,36,10.2)
B.fC8=new A.E(24,0.08,16)
B.fCa=new A.E(0,4,-7.9)
B.fCb=new A.E(11.9,0,8)
B.fCd=new A.E(21,1.4,8)
B.fCe=new A.E(0.8,0.8,1.6)
B.fCf=new A.E(1.4,1,1)
B.fCh=new A.E(71.2,46.6,55)
B.fCi=new A.E(3,3.28,-7.2)
B.fCj=new A.E(1.4,0.3,1)
B.fCk=new A.E(-6.1,1.2,-6.4)
B.fCl=new A.E(1.4,26,0.4)
B.fCn=new A.E(2.8,3.4,2.4)
B.fCo=new A.E(26,0.3,130)
B.fCp=new A.E(0,-45.5,0.5)
B.fCq=new A.E(1.8,4,1)
B.fCr=new A.E(5,1.6,0.5)
B.fCt=new A.E(0,11,8.5)
B.fCu=new A.E(0.1,-2,2.4)
B.fCv=new A.E(0,0.2,2.8)
B.fCw=new A.E(6,10,1.4)
B.fCy=new A.E(43,23,0.3)
B.fCz=new A.E(0,10,5.2)
B.fCA=new A.E(0,-1.2,4.7)
B.fCB=new A.E(120.1,124,-30)
B.fCC=new A.E(18.9,2.6,0)
B.fCD=new A.E(-12,0,-8.1)
B.fCE=new A.E(3,11,0.5)
B.fCF=new A.E(11.8,4,0)
B.fCG=new A.E(0.97,0.18,2.25)
B.aRC=new A.E(-71.7,6,55)
B.fCI=new A.E(5.6,0.3,1.9)
B.fCL=new A.E(52,8,0.4)
B.fCM=new A.E(4.6,7.6,3)
B.fCN=new A.E(-1,0,-1.2)
B.fCO=new A.E(0,1.7,0)
B.fCQ=new A.E(-1,0,1.5)
B.fCR=new A.E(90,2,0.5)
B.fCS=new A.E(5,8,0.4)
B.fCT=new A.E(5,2.2,0.8)
B.fCU=new A.E(0.18,0.12,0.08)
B.fCV=new A.E(147,3,1.4)
B.fCW=new A.E(4,16.2,0)
B.fCX=new A.E(10,15,0.5)
B.fCY=new A.E(144,5,0.7)
B.fCZ=new A.E(0,34,1.1)
B.fD_=new A.E(1.2,-1.7,2.3)
B.fD0=new A.E(31.5,23,0)
B.fD2=new A.E(0.82,1.7,0.3)
B.fD3=new A.E(47,7,34.4)
B.fD4=new A.E(-0.12,0,0)
B.fD6=new A.E(3.5,94,0.2)
B.fD7=new A.E(1.1,2.05,0.04)
B.fD8=new A.E(25,79,1.2)
B.fD9=new A.E(1.12,0.78,0.76)
B.fDa=new A.E(10,14,0.5)
B.fDb=new A.E(5,8,0.5)
B.fDc=new A.E(1.1,0.5,0.7)
B.fDd=new A.E(-20,11.5,0)
B.fDe=new A.E(0,-0.5,0.6)
B.fDf=new A.E(0,1.4,0)
B.fDh=new A.E(0,3.4,0.8)
B.fDj=new A.E(-0.85,4,-3.2)
B.fDl=new A.E(-7.1,19,4)
B.fDm=new A.E(40,7.2,1.2)
B.aRD=new A.E(0.42,0.34,0.12)
B.fDn=new A.E(1.7,0.08,1.2)
B.fDo=new A.E(0,0,0.38)
B.fDq=new A.E(5.2,3.9,-7.76)
B.fDs=new A.E(2.6,0.45,0.5)
B.fDt=new A.E(0.07,0.3,0.03)
B.fDv=new A.E(41.5,11,12)
B.fDx=new A.E(20,1.4,8)
B.fDy=new A.E(0,-0.2,0.19)
B.fDA=new A.E(1.2,49,36)
B.fDB=new A.E(0,9.3,0)
B.aRE=new A.E(1.4,3,1.6)
B.fDD=new A.E(0,40,0.95)
B.fDE=new A.E(11,3,0.5)
B.fDG=new A.E(0,-1.9,-1.2)
B.fDH=new A.E(-3.2,1.15,-7.78)
B.fDI=new A.E(0,-3.4,1.2)
B.fDJ=new A.E(64,10,0.2)
B.fDK=new A.E(0,-1.78,0.53)
B.fDL=new A.E(3,0.2,3)
B.aRF=new A.E(-6.5,7.4,-3)
B.fDM=new A.E(0,76,1.1)
B.fDN=new A.E(-4.6,-2,1.2)
B.fDP=new A.E(0,40,1.4)
B.fDQ=new A.E(-3,36,10.6)
B.fDR=new A.E(0,14.5,-1.5)
B.fDS=new A.E(0,0.2,0)
B.fDU=new A.E(160,1.2,120)
B.fDV=new A.E(7,40,2.4)
B.fDW=new A.E(30,26,0.6)
B.fDX=new A.E(3.4,3.25,-7.85)
B.fDY=new A.E(1.12,0.5,0.62)
B.fDZ=new A.E(72.8,0,55)
B.fE_=new A.E(0.5,62,30)
B.fE0=new A.E(2.2,1.1,6.4)
B.fE1=new A.E(3,1.55,-7.1)
B.fE2=new A.E(0.4,3,3)
B.aRI=new A.E(0,-0.1,0.1)
B.fE3=new A.E(0,0,0.04)
B.fE4=new A.E(0,14,-19.3)
B.fE5=new A.E(2.4,11.6,-3.6)
B.fE6=new A.E(4,11,3.5)
B.fE8=new A.E(5,8.6,-2.25)
B.fE9=new A.E(0,-1.78,0.3)
B.fEa=new A.E(2.2,2.2,1.8)
B.fEb=new A.E(0,1.9,-1.2)
B.fEc=new A.E(0,56,2.1)
B.fEd=new A.E(0.26,0.04,0.02)
B.fEe=new A.E(-2.4,11.6,-3.6)
B.fEf=new A.E(11.25,0,-2.25)
B.fEg=new A.E(1,-1.8,2.4)
B.fEh=new A.E(-11.8,4,0)
B.fEi=new A.E(1.2,4,7)
B.fEj=new A.E(11.2,4.7,-6)
B.fEk=new A.E(24,8,0.05)
B.fEm=new A.E(0.12,0,0)
B.fEn=new A.E(1.1,1.1,0.03)
B.fEo=new A.E(0,0.62,19.2)
B.fEp=new A.E(0,5,1.1)
B.fEq=new A.E(3.4,3.55,-7.85)
B.fEs=new A.E(71.6,-22,62)
B.fEu=new A.E(1,1,0.62)
B.aRJ=new A.E(1.5,18,3.5)
B.fEw=new A.E(3.5,3.1,-7.15)
B.fEx=new A.E(0,1.5,-0.9)
B.fEy=new A.E(-0.28,0.55,-0.8)
B.fEz=new A.E(0,-0.2,0.24000000000000002)
B.fEB=new A.E(0,-3.3,4)
B.fEC=new A.E(1,-0.2,0.14)
B.aRK=new A.E(84,3,0.5)
B.fED=new A.E(-1.9,0,-2.25)
B.fEE=new A.E(0,-0.9,1.1)
B.fEF=new A.E(8.2,1.05,-6.7)
B.fEG=new A.E(0,9.6,11.6)
B.fEJ=new A.E(0.07,0.4,0.03)
B.fEK=new A.E(2,3.8,0.08)
B.fEL=new A.E(31,83,0.9)
B.fEM=new A.E(64,40,-3.2)
B.fEN=new A.E(0.95,0.62,2.2)
B.aRL=new A.E(1.4,3,112)
B.fEO=new A.E(0,46.6,0.8)
B.fEQ=new A.E(0,0,-8.8)
B.fER=new A.E(0,0.7,-1)
B.fEU=new A.E(-11.9,0,8)
B.fEV=new A.E(7,0,1.5)
B.fEW=new A.E(-8.4,0.7,-6.4)
B.fEX=new A.E(-3.2,1.45,-7.78)
B.fEY=new A.E(0,41,0.45)
B.fEZ=new A.E(-6.575,0,-0.25)
B.fF0=new A.E(0,14.6,-1.5)
B.aRN=new A.E(0,0,-2.3)
B.a7R=new A.E(-13,12.5,0)
B.fF2=new A.E(0,0,0.62)
B.fF3=new A.E(0.2,-0.3,-0.4)
B.aRO=new A.E(10.85,18,0.5)
B.fF4=new A.E(0.6,70,0.6)
B.fF5=new A.E(1.4,1.3,0.02)
B.fF6=new A.E(30,1.4,0.4)
B.fF7=new A.E(6.3,1.5,-7.2)
B.fF8=new A.E(0,5,11.2)
B.aRP=new A.E(0,0.62,2.85)
B.fF9=new A.E(37.5,23,0)
B.aRQ=new A.E(0.05,8,16)
B.fFa=new A.E(0,-1.2,5)
B.fFc=new A.E(0.2,-2,2.6)
B.fFf=new A.E(11.2,2.4,-5.18)
B.fFh=new A.E(-1,-0.2,0.14)
B.fFi=new A.E(1.2,1.2,0.3)
B.aRS=new A.E(2,0.08,2.4)
B.fFk=new A.E(9.5,13.5,1.4)
B.fFl=new A.E(2.2,18,2.2)
B.fFm=new A.E(22,0.2,0.8)
B.fFn=new A.E(-0.32,0,0.5)
B.fFp=new A.E(1,0.8,0.95)
B.fFq=new A.E(0.8,0.55,0.05)
B.fFr=new A.E(0.14,0.35,17)
B.fFs=new A.E(1.4,2.4,0.3)
B.fFt=new A.E(0,11,8.2)
B.fFu=new A.E(0,24,-0.6)
B.fFv=new A.E(40,1.6,14)
B.fFy=new A.E(0,11.5,19.3)
B.fFz=new A.E(0,1.95,0.31)
B.fFA=new A.E(150,1.2,112)
B.aRT=new A.E(0.75,4.5,0.1)
B.fFC=new A.E(0.12,0,0.05)
B.fFD=new A.E(-120.1,124,-30)
B.fFF=new A.E(9,1.2,9)
B.fFG=new A.E(0,-0.5,0)
B.fFJ=new A.E(-2.4,14,8)
B.fFK=new A.E(5.5,8.5,0.5)
B.aRU=new A.E(0.05,8,9.6)
B.fFM=new A.E(-120.1,100,0)
B.fFN=new A.E(1.5,94,3.5)
B.fFO=new A.E(0,8.2,0)
B.fFQ=new A.E(4,94,0.4)
B.aRV=new A.E(1.4,8,1)
B.fFR=new A.E(3.7,1.2,-7.1)
B.fFS=new A.E(8.2,0.05,-6.7)
B.fFT=new A.E(0,-0.3,0)
B.fFU=new A.E(6.575,0,-0.25)
B.aRW=new A.E(0,1.8,0)
B.fFV=new A.E(3,3.21,-7.2)
B.fFW=new A.E(9,5,0.6)
B.fFY=new A.E(9.8,5,-7.75)
B.fFZ=new A.E(1.5,3.5,112)
B.fG_=new A.E(22,7,34.4)
B.fG0=new A.E(3,1.85,-7.1)
B.fG4=new A.E(16,0.4,16)
B.a7T=new A.E(13,12.5,0)
B.fG6=new A.E(0.34,0.66,0.9)
B.fG8=new A.E(0.9,1.08,0.98)
B.fG9=new A.E(12,0.4,6)
B.fGa=new A.E(-6.5,7.9,-3)
B.fGb=new A.E(0,13.6,-1.5)
B.fGc=new A.E(1.5,1.5,0.05)
B.fGd=new A.E(-6.5,5,-3)
B.fGe=new A.E(58.4,1.6,50)
B.fGf=new A.E(16,22,0.6)
B.fGg=new A.E(0.02,0.28,0.05)
B.fGh=new A.E(0,0.7,1)
B.fGi=new A.E(0,9.5,-7)
B.aRY=new A.E(13,8.6,9.5)
B.fGj=new A.E(-3.6,4,-7.76)
B.fGk=new A.E(0.82,0.9,0.05)
B.fGl=new A.E(0,-5.5,-0.25)
B.fGm=new A.E(0,11,21.2)
B.fGq=new A.E(0,0.6,0)
B.fGs=new A.E(1.9,0,0)
B.fGt=new A.E(0.45,0.72,0.06)
B.fGv=new A.E(14,0.4,7)
B.fGw=new A.E(64,24,-3.2)
B.aRZ=new A.E(40,0.12,1.2)
B.fGx=new A.E(0,9.2,0)
B.fGy=new A.E(0,0.03,0)
B.fGz=new A.E(-10,22,0)
B.fGA=new A.E(-120,0,-30)
B.fGB=new A.E(-13,15,2)
B.fGC=new A.E(-14,17,4)
B.fGD=new A.E(-14,20,-28)
B.fGE=new A.E(-18,6,0)
B.wf=new A.E(-1,0,0)
B.fGF=new A.E(-1,0,-8)
B.fGG=new A.E(-20,4,26)
B.fGH=new A.E(-20,92,26)
B.fGI=new A.E(-22,14,0)
B.fGJ=new A.E(-24,38,0)
B.fGL=new A.E(-37,16,0)
B.fGM=new A.E(-42,-34,96)
B.fGN=new A.E(0,-0.6,22)
B.fGO=new A.E(-4,20,0)
B.aS_=new A.E(-4,20,8)
B.fGQ=new A.E(-72,6,55)
B.fGR=new A.E(-8,42,-5)
B.fGS=new A.E(-8,-28,104)
B.fGT=new A.E(-8,-39,96)
B.fGU=new A.E(0,0.35,0.78)
B.fGV=new A.E(-11.9,0,-8)
B.fGW=new A.E(38,1.4,12)
B.fGX=new A.E(25,0.5,66)
B.fGY=new A.E(-8.4,1.9,-7.2)
B.fGZ=new A.E(1.6,8,5)
B.fH_=new A.E(0.8,1.6,1.4)
B.fH0=new A.E(0.85,1.15,0.9)
B.fH2=new A.E(25,6,0.2)
B.aS0=new A.E(1.25,1,0.1)
B.fH3=new A.E(11.2,0,-6)
B.fH4=new A.E(0.4,7,9)
B.fH5=new A.E(1.2,1.1,0.8)
B.fH7=new A.E(150,49,1.2)
B.fH8=new A.E(41.5,11,-12)
B.fH9=new A.E(62,0.2,42)
B.fHa=new A.E(4.6,1.5,-3.6)
B.fHb=new A.E(0,-0.7,0.8)
B.fHc=new A.E(8.9,1.9,0.9)
B.fHd=new A.E(0,-1.55,-0.6)
B.fHe=new A.E(1.78,4.25,0.08)
B.fHf=new A.E(27,0.6,19)
B.fHg=new A.E(0,5.5,-0.25)
B.fHh=new A.E(28,2.5,26)
B.fHi=new A.E(2,0.2,6)
B.aS1=new A.E(0,0.7,0)
B.fHj=new A.E(-1.2,-1.6,2.2)
B.fHk=new A.E(11,25,0.3)
B.aS2=new A.E(-12,14,19.4)
B.aS3=new A.E(13,8.6,-9.5)
B.aS4=new A.E(0.05,0.12,0.03)
B.aS5=new A.E(8.2,0.95,-6.7)
B.fHl=new A.E(40,1.2,22)
B.fHm=new A.E(0.7,1.5,-7.2)
B.fHn=new A.E(0,15.3,-3.6)
B.fHo=new A.E(62,2.4,8)
B.fHp=new A.E(-1.6,11,6)
B.fHq=new A.E(0.1,0,0)
B.fHr=new A.E(0.32,0,0.5)
B.fHs=new A.E(1.6,11,6)
B.fHt=new A.E(1.1,0.8,0.6)
B.fHv=new A.E(-0.9,0,4.4)
B.fHw=new A.E(-6.5,7.2,-3)
B.fHy=new A.E(6.2,0.18,2.1)
B.fHz=new A.E(7.1,18,-3)
B.fHB=new A.E(36,1.6,12)
B.fHC=new A.E(15.5,2.6,0)
B.fHE=new A.E(-8,-47.8,70)
B.fHF=new A.E(14,1.5,3.5)
B.aS6=new A.E(17,24,0.3)
B.fHG=new A.E(5.2,3.9,-7.82)
B.fHH=new A.E(0,0.7,2.4)
B.aS7=new A.E(0,0.3,0)
B.aS8=new A.E(2.3,7,0.5)
B.aS9=new A.E(-13,8.6,9.5)
B.fHL=new A.E(6.5,6,14)
B.fHM=new A.E(0,-1.99,0.14)
B.fHN=new A.E(0.4,36,34)
B.fHP=new A.E(4.6,-2,1.2)
B.fHQ=new A.E(0,14,19.3)
B.aSa=new A.E(0,0,-2.4)
B.fHR=new A.E(0,-1.78,0.52)
B.fHS=new A.E(0.12,0.1,0.03)
B.fHT=new A.E(9.8,5,-7.58)
B.fHU=new A.E(14,1.5,5)
B.aSb=new A.E(0.5,1.4,2)
B.fHV=new A.E(3.5,0.15,-7.2)
B.aSc=new A.E(64,2,1.2)
B.fHW=new A.E(1.2,26.4,20)
B.fHX=new A.E(-3.6,4,-7.82)
B.fHY=new A.E(0.3,2,36)
B.fI_=new A.E(24,0.8,6.5)
B.fI1=new A.E(22,0.5,5)
B.fI2=new A.E(9,10,0.6)
B.fI3=new A.E(0,22,2.1)
B.fI6=new A.E(0,56,0.5)
B.fI7=new A.E(150,1.2,70)
B.fI8=new A.E(2.1,0.4,0.5)
B.fI9=new A.E(-19.5,-1,-1.5)
B.fIa=new A.E(80,0.5,60)
B.fIb=new A.E(6.85,4,-3.2)
B.aSe=new A.E(0.12,3,1.9)
B.fIc=new A.E(0.06,0.62,0.8)
B.fId=new A.E(0,18.5,0)
B.fIf=new A.E(9.55,5.7,-7.5)
B.fIh=new A.E(0.8,2.4,0.3)
B.aSf=new A.E(0,0.7,2)
B.fIi=new A.E(3.5,26,15)
B.fIj=new A.E(0.8,1.1,1.2)
B.fIk=new A.E(2.4,14,8)
B.fIl=new A.E(120.1,100,-60)
B.fIm=new A.E(0,47.25,-2.25)
B.fIn=new A.E(0.5,0.5,0.04)
B.fIo=new A.E(12.5,39,0.6)
B.fIp=new A.E(0,3,0.9)
B.fIq=new A.E(3,36,10.6)
B.fIr=new A.E(25,10,0.2)
B.fIt=new A.E(0.14,8,0.3)
B.fIu=new A.E(1.9,0.05,1.35)
B.fIx=new A.E(0.6,0.12,0.03)
B.fIy=new A.E(-10.7,1.2,-6.4)
B.fIz=new A.E(-71.2,46.6,55)
B.fIA=new A.E(5,4.5,3)
B.fIB=new A.E(0,3.7,2.6)
B.fIC=new A.E(40,0.6,40)
B.fJ9=new A.BR("noGround","It works, but there is no ground wire. Without a ground nothing protects you if an appliance fails.",!0,!1,!1)
B.fJa=new A.BR("short","A hot wire touched the ground. That is a short circuit: huge current, sparks and fire. The breaker slams off.",!1,!0,!0)
B.fJb=new A.BR("reversed","Hot and neutral are swapped (reversed polarity). Things still run, but the metal part of a lamp or appliance is live. That can shock someone. Black goes on brass, white on silver.",!0,!1,!1)
B.fJc=new A.BR("dead","The hot wire is not connected to the right place, so nothing gets power. The device is dead.",!1,!1,!1)
B.fJd=new A.BR("ok","Wired correctly. Hot, neutral and ground are all in the right place.",!0,!1,!1)
B.fJe=new A.BR("bonded","The neutral and the ground were joined. A GFCI or the breaker may trip for no reason, and current can flow where it should not.",!0,!0,!1)
B.fJf=new A.BR("openNeutral","The neutral wire is not connected. Nothing runs, but the hot wire is still connected, so the slots can still be live. That is dangerous.",!1,!1,!1)
B.fJg=new A.BR("dead","The wires are on the taped LOAD screws, so no power reaches the outlet. Power comes in on LINE.",!1,!1,!1)
B.fJh=new A.BR("short","The hot and the neutral were joined together. That is a short circuit: a bang, sparks and a tripped breaker.",!1,!0,!0)
B.et9=new C.y(-20,46)
B.fLS=new A.zV(B.et9,0,2.4,"Having the drink",!0,!1,!1,"")
B.ed3=new C.y(34,62)
B.fLT=new A.zV(B.ed3,3.141592653589793,2.2,"Picking up the remote",!1,!0,!1,"")
B.fM0=new A.azq(null)})();(function staticFields(){$.ml=0
$.fNq=C.T(x.N,C.ax("LG"))
$.fNp=C.T(x.N,C.ax("ay<LG?>"))
$.fMJ=null
$.Hh=null
$.fPr=null
$.h4R=null
$.bB2="xbot"})();(function lazyInitializers(){var w=a.lazyFinal
w($,"idN","hnx",()=>C.a([A.aSC("Wire a standard 120 volt receptacle: black to brass, white to silver, bare copper to green.",B.PV,B.dd0,"outlet",B.cLa,"Wall outlet",new A.fp_()),A.aSC("A single-pole switch breaks the hot wire to the light: two black wires go on the two brass screws.",B.cYS,B.cLM,"switch",B.cJL,"Light switch",new A.fp0()),A.aSC("A GFCI protects you near water. Power comes in on LINE. The LOAD screws (covered with tape) feed other outlets.",B.PV,B.cT0,"gfci",B.d0x,"GFCI outlet",new A.fp1()),A.aSC("Join the house wires to the fixture wires with wire nuts: black to black, white to white, ground to ground.",B.PV,B.cJT,"light",B.dc6,"Ceiling light",new A.fp2()),A.aSC("A fan hangs from a strong fan-rated box. Join black, white and ground with wire nuts, then fasten the canopy.",B.PV,B.cJU,"fan",B.cQJ,"Ceiling fan",new A.fp3())],C.ax("O<a3A>")))
w($,"idY","Go",()=>{var v,u=C.a([],x.n)
for(v=0;v<10;++v)u.push(-72+16*v)
return u})})()};
(a=>{a["1/q0G6FPXXPLnPoCeROOyBXTGuk="]=a.current})($__dart_deferred_initializers__);