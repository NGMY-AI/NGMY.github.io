((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,C,D,Y,F,N,T,Z,U,L,A_,O,H,A0,A1,V,W,P,A2,A3,Q,K,A4,M,A={
zG(d,e,f){var w=d.a,v=d.b,u=d.c
return new A.E(w+(e.a-w)*f,v+(e.b-v)*f,u+(e.c-u)*f)},
bBM(d,e){var w=Math.cos(e),v=Math.sin(e),u=d.a,t=d.c
return new A.E(u*w+t*v,d.b,-u*v+t*w)},
tR(d,e,f,g){var w,v,u,t,s,r,q,p,o=new A.fKN(Math.cos(e),Math.sin(e)),n=new A.fKL(f),m=new A.fKM(n,e,o,g),l=new A.fKK(n,e,o),k=C.a([],x.z)
for(w=d.length,v=x.o,u=0;u<d.length;d.length===w||(0,C.L)(d),++u){t=d[u]
s=C.a([],v)
for(r=t.a,q=r.length,p=0;p<r.length;r.length===q||(0,C.L)(r),++p)s.push(m.$1(r[p]))
k.push(new A.nd(s,l.$1(t.b),t.c,t.d,t.e,t.f,t.r,t.w,t.x,t.y,t.z))}return k},
Ge(d,e,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
if(d.length<3)return d
w=C.a([D.d.gK(d)],x.o)
for(v=1;u=v+1,u<d.length;v=u){t=d[v-1]
s=d[v]
r=d[u]
q=s.a
p=s.b
o=s.c
n=new A.E(q-t.a,p-t.b,o-t.c)
m=new A.E(r.a-q,r.b-p,r.c-o)
l=Math.min(e,n.gTb()*0.5)
k=Math.min(e,m.gTb()*0.5)
j=n.gow(0)
i=new A.E(q-j.a*l,p-j.b*l,o-j.c*l)
j=m.gow(0)
h=new A.E(q+j.a*k,p+j.b*k,o+j.c*k)
for(g=0;g<=a0;++g){f=g/a0
w.push(A.zG(A.zG(i,s,f),A.zG(s,h,f),f))}}w.push(D.d.gal(d))
return w},
agI(a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2
if(a3.length<3)return a3
w=C.a([],x.o)
for(v=0;u=v+1,t=a3.length,u<t;v=u){s=v===0?a3[v]:a3[v-1]
r=a3[v]
q=a3[u]
p=v+2
o=p<t?a3[p]:q
for(t=s.a,p=r.a,n=q.a,m=o.a,l=s.b,k=r.b,j=q.b,i=o.b,h=s.c,g=r.c,f=q.c,e=o.c,d=0;d<a4;++d){a0=d/a4
a1=a0*a0
a2=new A.fKE(a0,a1,a1*a0)
w.push(new A.E(a2.$4(t,p,n,m),a2.$4(l,k,j,i),a2.$4(h,g,f,e)))}}w.push(D.d.gal(a3))
return w},
hJF(d){var w,v,u,t,s,r,q,p,o,n
for(w=d.length,v=!0,u=!0,t=0;t<w;++t)if(d[t].c>=0.5)u=!1
else v=!1
if(v)return d
if(u)return B.d2b
s=C.a([],x.o)
for(r=0;w=d.length,r<w;){q=d[r];++r
p=d[r%w]
w=q.c
o=w>=0.5
n=p.c
if(o)s.push(q)
if(o!==n>=0.5)s.push(A.zG(q,p,(0.5-w)/(n-w)))}return s},
hKs(a4,a5,a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=a6[0],a2=a1.a,a3=a1.b
a1=a6[1]
w=a1.a
v=a1.b
a1=a6[2]
u=a1.a
t=a1.b
a1=a6[3]
s=a1.a
r=a1.b
q=w-u
p=s-u
o=a2-w+u-s
n=v-t
m=r-t
l=a3-v+t-r
if(Math.abs(o)<1e-9&&Math.abs(l)<1e-9){k=w-a2
j=s-a2
i=v-a3
h=r-a3
g=0
f=0}else{e=q*m-p*n
if(Math.abs(e)<1e-9)return
g=(o*m-p*l)/e
f=(q*l-o*n)/e
k=w-a2+g*w
j=s-a2+f*s
i=v-a3+g*v
h=r-a3+f*r}d=a5.e
a1=new Float64Array(16)
a1[15]=1
a1[14]=0
a1[13]=a3
a1[12]=a2
a1[11]=0
a1[10]=1
a1[9]=0
a1[8]=0
a1[7]=f/d
a1[6]=0
a1[5]=h/d
a1[4]=j/d
a1[3]=g/320
a1[2]=0
a1[1]=i/320
a1[0]=k/320
a0=a4.a
J.bz(a0.save())
a4.av(0,a1)
a0.clipRect(C.c4(new C.aa(0,0,320,0+d)),$.qI()[1],!0)
a5.c.$3(a4,new C.at(320,d),a7)
a0.restore()},
E:function E(d,e,f){this.a=d
this.b=e
this.c=f},
nd:function nd(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
d0:function d0(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
t1:function t1(d,e,f){this.a=d
this.b=e
this.c=f},
zn:function zn(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
WK:function WK(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.e=g
_.f=h
_.r=i},
jf:function jf(d){var _=this
_.a=d
_.c=_.b=0
_.d=1
_.e=0
_.f=2
_.r=!1
_.x=_.w=0},
bVt:function bVt(d,e){this.a=d
this.b=e},
bVu:function bVu(d){this.a=d},
bVs:function bVs(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
bVv:function bVv(d,e,f){this.a=d
this.b=e
this.c=f},
bVr:function bVr(d,e){this.a=d
this.b=e},
bVw:function bVw(d,e,f){this.a=d
this.b=e
this.c=f},
fKN:function fKN(d,e){this.a=d
this.b=e},
fKL:function fKL(d){this.a=d},
fKM:function fKM(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fKK:function fKK(d,e,f){this.a=d
this.b=e
this.c=f},
fKE:function fKE(d,e,f){this.a=d
this.b=e
this.c=f},
AC:function AC(d,e,f,g,h){var _=this
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
_.S$=h
_.bt$=_.bM$=0},
bGg:function bGg(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bGf:function bGf(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bPx:function bPx(d){this.a=d},
b3M:function b3M(d,e,f,g,h,i,j,k,l){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.w=j
_.x=k
_.a=l},
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
BY:function BY(d,e,f,g,h,i,j,k,l){var _=this
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
atr:function atr(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.z=k
_.a=l},
boW:function boW(d,e,f,g,h,i){var _=this
_.d=$
_.e=d
_.f=e
_.r=f
_.w=40
_.x=g
_.bq$=h
_.a7$=i
_.c=_.a=null},
eSh:function eSh(d){this.a=d},
eSg:function eSg(d){this.a=d},
eSd:function eSd(d){this.a=d},
eSe:function eSe(d){this.a=d},
eSf:function eSf(d){this.a=d},
eSb:function eSb(d){this.a=d},
eSc:function eSc(d,e){this.a=d
this.b=e},
aLB:function aLB(){},
fNd(d){var w,v,u=$.fNc.h(0,d)
if(u!=null)return C.f6(u,x.d)
w=B.a2Z.h(0,d)
if(w==null)return C.f6(null,x.d)
v=$.fNb.h(0,d)
if(v==null){v=new A.bOt(w,d).$0()
$.fNb.n(0,d,v)}return v},
aTF(d){var w=0,v=C.j(x.H),u
var $async$aTF=C.e(function(e,f){if(e===1)return C.f(f,v)
for(;;)switch(w){case 0:w=2
return C.b(A.fNd(d),$async$aTF)
case 2:u=J.aV(B.a2Z.gec(B.a2Z))
case 3:if(!u.C()){w=4
break}w=5
return C.b(A.fNd(u.gU(u)),$async$aTF)
case 5:w=3
break
case 4:return C.h(null,v)}})
return C.i($async$aTF,v)},
hrW(d){var w,v,u=new Float64Array(d*16)
for(w=0;w<d;++w){v=w*16
u[v+15]=1
u[v+10]=1
u[v+5]=1
u[v]=1}return u},
h04(d,e,f){var w,v,u,t
if(d>e){w=d
v=e}else{w=e
v=d}if(w>f){u=w
w=f}else u=f
if(v>w){t=w
w=v
v=t}return(v*65536+w)*65536+u},
hrX(d,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=d.c,g=d.b===1,f=g?4:3,e=h.length
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
h05(d,a0,a1,a2,a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
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
b9k:function b9k(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
b9F:function b9F(d,e){this.b=d
this.c=e},
beG:function beG(d,e,f){this.a=d
this.b=e
this.c=f},
dgs:function dgs(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
LG:function LG(d,e,f,g){var _=this
_.a=d
_.r=_.f=_.e=_.d=_.c=_.b=$
_.w=e
_.Q=_.z=_.y=_.x=$
_.as=0
_.at=f
_.ax=g},
bOt:function bOt(d,e){this.a=d
this.b=e},
bOj:function bOj(d,e){this.a=d
this.b=e},
bOi:function bOi(){},
bOn:function bOn(d,e,f){this.a=d
this.b=e
this.c=f},
bOo:function bOo(d){this.a=d},
bOp:function bOp(d){this.a=d},
bOm:function bOm(d,e){this.a=d
this.b=e},
bOk:function bOk(d){this.a=d},
bOl:function bOl(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
bOs:function bOs(d){this.a=d},
bOq:function bOq(){},
bOr:function bOr(d){this.a=d},
bOu:function bOu(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
dm_:function dm_(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
daC:function daC(d,e){this.a=d
this.b=e},
fZR(d,e){var w=C.a([],x.ha),v=C.a([new A.L7(),new A.L7(),new A.L7()],x.gQ),u=C.a([],x.s),t=new C.eP()
t.dG(e)
w=new A.aRu(d,t,w,v,u)
w.bvo(d,e)
return w},
hpr(d,e){var w,v,u,t,s,r,q,p,o=J.a5(e),n=x.Y,m=n.a(o.h(e,"wired"))
if(m==null)m=D.rb
w=n.a(o.h(e,"plumbed"))
if(w==null)w=D.rb
for(o=d.gqo(),n=o.length,v=J.a5(w),u=J.a5(m),t=0;t<o.length;o.length===n||(0,C.L)(o),++t){s=o[t]
r=""+s.a
q=u.h(m,r)
if(C.qD(q)){s.ay=!q
s.CW=null}p=v.h(w,r)
if(C.qD(p)){r=s.c
r=r==="bathroom"||r==="kitchen"}else r=!1
if(r){s.ch=!p
s.cx=null}}},
hps(d){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=J.a5(d),j=C.aJ(k.h(d,"seed"))
j=j==null?l:D.k.N(j)
if(j==null)j=1
w=C.aJ(k.h(d,"clock"))
w=w==null?l:D.k.N(w)
v=A.fZR(j,(w==null?0:w)+7)
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
while(k.C()){m=t.a(k.gU(k))
w=J.a5(m)
r=new A.Hd(D.k.N(C.dQ(w.h(m,"id"))),D.k.N(C.dQ(w.h(m,"res"))),C.cO(w.h(m,"kind")),C.cO(w.h(m,"msg")),D.k.N(C.dQ(w.h(m,"reward"))))
r.f=C.dQ(w.h(m,"age"))
j.push(r)}return v},
bHp(){var w=0,v=C.j(x.dy),u,t=2,s=[],r,q,p,o,n
var $async$bHp=C.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return C.b(C.az(),$async$bHp)
case 7:r=e
q=C.aT(J.q(r.a,"ngmy_community_v1"))
if(q==null){u=null
w=1
break}p=x.P.a(D.R.aG(0,q,null))
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
return C.i($async$bHp,v)},
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
EC:function EC(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
O2:function O2(d){var _=this
_.a=d
_.b=25
_.d=_.c=100
_.e=!1
_.f=!0
_.r=-1},
Hd:function Hd(d,e,f,g,h){var _=this
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
bHk:function bHk(){},
bHh:function bHh(d){this.a=d},
bHi:function bHi(d,e){this.a=d
this.b=e},
bHj:function bHj(){},
bHo:function bHo(d){this.a=d},
bHm:function bHm(d,e){this.a=d
this.b=e},
bHn:function bHn(d){this.a=d},
bHl:function bHl(d,e){this.a=d
this.b=e},
bHq:function bHq(){},
TZ:function TZ(d){this.a=d},
bhP:function bhP(){var _=this
_.d=null
_.e=$
_.f=null
_.r="calls"
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
abu:function abu(d,e,f){this.c=d
this.d=e
this.a=f},
bcJ:function bcJ(d,e){this.b=d
this.a=e},
aSC(d,e,f,g,h,i,j){return new A.a3C(g,i,h,e,f,j)},
Ag(d){return D.d.iC($.hni(),new A.fnD(d))},
bCa(d,e){var w,v,u=d.e,t=new C.K(u,new A.fL5(),C.U(u).k("K<1,n>")).fI(0)
u=e.b
w=C.a3(u).k("bc<2>")
v=C.da(new C.bc(u,w),w.k("J.E"))
return t.d9(0,v.gkU(v))},
hjc(d,e,f,g,h){var w,v
if(e.a&&e.c===0){if(e.r)return"SHOCK! The breaker was still ON and you touched a live wire. Always turn the power OFF and test the wires first."
return"STOP! The breaker is still ON, so these wires are live (120 volts). Turn the breaker OFF first. This can shock you badly."}if(e.c!==0)return"The device is already in the box. Pull it out again to change the wires."
if(!e.r&&!h&&!g.c.t(0,f))return d.r.$2(f,g)
w=e.b
v=g.a
if(w.h(0,v)!=null)return"That place already has a wire. Tap the wire to take it off first."
if(new C.bc(w,C.a3(w).k("bc<2>")).t(0,f))return"That wire is already fastened. Tap it to take it off if you want to move it."
w.n(0,v,f)
return null},
afu(b1,b2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8=null,a9=new A.fnJ(b1),b0=new A.fnH(b1)
for(w=b2.b,w=new C.cJ(w,C.a3(w).k("cJ<1,2>")).gaf(0),v=0,u=0,t=0,s=0,r=0,q=0,p=0,o=0,n=0,m=0;w.C();){l=w.d
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
a6=new C.a2(w,new A.fnF(),h).gM(0)
a7=new C.a2(w,new A.fnG(),h).gM(0)
if(t>0||o>0)return B.fIh
w=u>0
if(!(w&&s>0))h=r>0&&v>0
else h=!0
if(h)return B.fIo
if(w&&r>0)return B.fIi
if(q>0||n>0)return B.fIl
if(m>0&&v<a6)return B.fIn
if(v<a6)return B.fIj
if(a7>0&&s<a7)return B.fIm
if(p===0)return B.fIg
return B.fIk},
bxI(d,e){var w
if(d==="light"||d==="fan")w=e.c===0?6.4:0.6
else w=e.c===0?4.7:-0.25
return w},
bzS(d,e,f){var w,v
if(d==="light"||d==="fan"){w=A.bxI(d,f)
v=f.c===0?w-3.2:w
switch(e){case 51:return new A.E(-1.5,-0.3,v)
case 52:return new A.E(0,-0.3,v)
default:return new A.E(1.5,-0.3,v)}}w=A.bxI(d,f)
switch(e){case 21:return new A.E(0.98,-0.2+(d==="gfci"?0.95:0.85),w-0.45)
case 22:return new A.E(0.98,-0.2+(d==="gfci"?-0.75:-0.55),w-0.45)
case 23:return new A.E(-0.98,-0.2+(d==="gfci"?0.95:0.85),w-0.45)
case 24:return new A.E(-0.98,-0.2+(d==="gfci"?-0.75:-0.55),w-0.45)
default:return new A.E(0,-1.98,w+0.52)}},
fUm(a9,b0,b1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=C.a([],x.z),a6=new A.jf(a5),a7=a9.a,a8=a7==="light"||a7==="fan"
if(b1){a6.b=1
a6.iy(B.fE5,B.aRJ,B.uR,3)
a6.iy(B.fF0,B.aRJ,B.uR,3)
a6.iy(B.fGn,B.aS3,B.uR,2)
a6.iy(B.fFs,B.aS3,B.uR,2)
a6.b=2
a6.qc(B.fDK,B.aRE,B.m6,0.05,3)
a6.qc(B.fDm,B.aRE,B.m6,0.05,3)
a6.qc(B.fDf,B.fGM,B.m6,0.05,2)}w=A.ha7(a6,a7,!0)
v=new A.flH(a6,b0,a7,a8)
u=D.d.gK(w)
t=a7==="switch"
if(t){s=D.d.gal(w)
v.$5(10,u.ad(0,B.fz9),B.fGq,"blackLine",B.Kj)
v.$5(13,s.ad(0,B.fGx),B.fC6,"blackLoad",B.Kj)
v.$5(12,u.ad(0,B.fEJ),B.fBB,"ground",B.x1)
a6.b=6
r=x.o
a6.jT(C.a([u.ad(0,B.aRD),B.fzu,B.TA],r),0.075,B.wL,!1,0.3,8)
a6.jT(C.a([s.ad(0,B.aRD),B.fEa,B.TA],r),0.075,B.wL,!1,0.3,8)
a6.Kk(B.TA,B.fGk,0.28,B.abC,0.18,0.3,10)}else{v.$5(10,u.ad(0,B.fCb),B.fzo,"black",B.Kj)
v.$5(11,u.ad(0,B.fDa),B.fEj,"white",B.wL)
v.$5(12,u.ad(0,B.fDt),B.fDn,"ground",B.x1)}if(a8)A.hb6(a6,a7,b0)
else A.haM(a6,a7,A.bxI(a7,b0),b0.w,!1)
if(b0.e&&b0.c===0){a6.b=0
a6.d=0.5
for(r=a9.f,q=r.length,p=0;p<q;++p){o=r[p]
n=A.bzS(a7,o.a,b0)
if(o.e)m=D.cn
else{l=o.f
if(l==="ground")m=D.bo
else{l=l==="neutral"?D.c:B.VM
m=l}}if(a8)l=0
else{l=n.a
if(l>0.4)l=0.12
else l=l<-0.4?-0.12:0}if(a8)k=0.6
else k=Math.abs(n.a)<0.4?0.2:0
a6.iQ(new A.E(n.a+l,n.b+0,n.c+k),0.36,m,4,8,0.1)}a6.d=1}if(b0.c>=2&&!a8)A.hd9(a6,b0.w)
r=!1
if(b0.c>=2)if(b0.d)r=a7==="outlet"||a7==="gfci"
if(r)A.hRX(a6,b0.a&&!b0.w)
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
g=A.bxI(a7,b0)
e=q?"Ceiling fan":"Ceiling light"
q=q?"The motor housing with blades. It has three wires: black (motor), white (neutral) and green (ground).":"The light fixture with a frosted dome. It has three wires: black, white and green."
d=C.F([1,B.dWI,2,B.dWW,3,new A.d0(r,"A box that holds the wire connections. Every connection must be inside a box, never loose in the wall or the ceiling."+l,new A.E(0,0,-1.2),9),4,new A.d0(k,"The yellow jacket holds three wires: black (hot), white (neutral) and bare copper (ground). Yellow means 12 gauge wire for a 20 amp circuit. White jackets are 14 gauge for 15 amps.",new A.E(-0.4,1.5,-1.8),8),5,B.dXi,10,new A.d0("Black wire: hot","The hot wire brings the power from the breaker. It is the dangerous one. "+j,new A.E(-0.8,-0.8,1.2),7),13,B.dWu,11,new A.d0("White wire: neutral","The neutral wire carries the power back to the panel. "+i,new A.E(0,-0.8,1.2),7),12,new A.d0("Bare copper wire: ground","The ground wire is a safety path. If a wire touches metal, the current runs down the ground instead of through you. "+h,new A.E(0.5,-0.8,1.2),7),6,B.dWU,20,new A.d0(f,t,new A.E(0,-0.2,g),9),21,B.dWZ,22,B.dXh,23,B.dWS,24,B.dWX,25,B.dWL,26,B.dX_,27,B.dXb,28,B.dWG,30,B.dWp,31,B.dWn,51,B.dWV,52,B.dWr,53,B.dX3,54,new A.d0(e,q,new A.E(0,0,6.4),9),55,B.dXd],x.S,x.q)
a0=C.a([],x.E)
if(b0.f&&b0.c===0)for(t=a9.f,r=t.length,p=0;p<r;++p){o=t[p]
n=A.bzS(a7,o.a,b0)
a1=o.f
A:{q="hot"===a1
if(q){l=B.ewS
break A}if("neutral"===a1){l=B.enY
break A}if("ground"===a1){l=B.equ
break A}l=B.edV
break A}a2=l.a
if(a8){B:{if(q){k="BLACK NUT \xb7 HOT"
break B}if("neutral"===a1){k="WHITE NUT \xb7 NEUTRAL"
break B}k="GROUND"
break B}a3=k}else a3=a2
if(a8){C:{if(q){q=B.fCU
break C}if("neutral"===a1){q=B.fCP
break C}q=B.fGW
break C}a4=q}else{q=n.a
if(q>0.4)k=3.8
else k=q<-0.4?-4.2:0
a4=new A.E(k,Math.abs(q)<0.4?-3:-0.4,1)}a0.push(new A.t1(new A.E(n.a+a4.a,n.b+a4.b,n.c+a4.c),a3,l.b))}if(b0.a&&b0.c===0)a0.push(B.bQf)
return new A.zn(a5,d,a0,B.vH)},
ha7(d,e,f){var w,v,u=e==="light"||e==="fan"
d.b=3
if(u){d.e5(B.aS5,B.aRI,2.2,B.x0,0.3,18)
d.a2Z(B.aRI,B.fO,2.2,B.x0,!1,!0,0.3,18)}else{d.bG(B.aS5,B.fDR,B.x0,0.3)
d.bG(B.fBU,B.aRv,B.x0,0.3)
d.bG(B.fzT,B.aRv,B.x0,0.3)
d.bG(B.fDi,B.aRN,B.x0,0.3)
d.bG(B.fCN,B.aRN,B.x0,0.3)}w=C.a([],x.o)
v=new A.f7R(d,f,w)
if(e==="switch"){v.$2(4,B.cQz)
v.$2(5,B.cOO)}else v.$2(4,B.d0P)
return w},
hjh(d,e){var w
A:{if(10===e){w=d==="switch"?"blackLine":"black"
break A}if(13===e){w="blackLoad"
break A}if(11===e){w="white"
break A}if(12===e){w="ground"
break A}w=null
break A}return w},
haM(d,e,f,g,h){var w,v,u,t,s,r,q,p,o,n,m,l,k=new A.E(0,-0.2,f),j=e==="switch",i=e==="gfci"
if(g)w=B.wW
else w=j?B.bc0:B.Wp
v=i?3.1:2.95
d.e=0
d.b=20
if(!h){d.bG(k.ad(0,B.fB_),new A.E(1.5,v,1.3),w,0.25)
d.e=0.15
d.b=26
u=k.ad(0,B.fAQ)
d.bG(u,B.fGl,g?B.b9a:B.Kz,0.8)
d.bO(k.ad(0,B.fEG),B.fHE,B.E1)}d.e=0.3
d.b=27
u=k.ad(0,B.fCv)
d.bG(u,new A.E(1.3,i?2.85:2.7,0.16),w,0.3)
if(j){d.e=0.7
d.b=28
u=k.ad(0,B.fE9)
d.bG(u,B.fC9,g?B.wW:F.Wz,0.35)
u=k.ad(0,B.fG0)
d.bG(u,B.fFr,g?B.wW:B.ack,0.35)}else{d.e=0.6
u=i?E.aru:B.dcW
t=u.length
s=f+0.47
r=f+0.46
q=f+0.5
p=0
for(;p<t;++p){o=u[p]
d.b=27
n=-0.2+(o+0.04)
d.bO(new A.E(-0.28,n,s),B.fDQ,B.Ea)
d.bO(new A.E(0.28,n,s),B.fCA,B.Ea)
n=-0.2+(o-0.32)
d.hB(new A.E(0,n,r),new A.E(0,n,q),0.11,B.Ea,10)}if(i){d.e=0.7
d.b=28
d.bG(k.ad(0,B.fEu),B.aRy,B.bfg,0.3)
d.bG(k.ad(0,B.fGy),B.aRy,B.aeT,0.3)}}if(h){d.e=0
return}m=i?0.95:0.85
l=i?-0.75:-0.55
u=new A.f9a(d,k)
if(!j){u.$6$taped(23,-1,m,B.acE,B.ad7,i)
u.$5(24,-1,l,B.acE,B.ad7)}u.$6$taped(21,1,m,B.VM,B.aen,i)
u.$5(22,1,l,B.VM,B.aen)
d.e=0.9
d.b=25
d.e5(k.ad(0,B.fDg),k.ad(0,B.fGY),0.18,B.bh7,0.7,12)
d.bO(k.ad(0,B.fCR),B.fDk,D.e9)
d.bG(k.ad(0,B.fB5),B.fEx,B.b62,0.6)
d.e=0},
hb6(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k=e==="fan",j=A.bxI(e,f)
d.e=0
d.b=55
w=j-0.3
v=j+0.3
u=k?3.3:3.5
t=f.w?B.wW:B.bct
d.e5(new A.E(0,0,w),new A.E(0,0,v),u,t,0.45,20)
d.b=54
if(k){u=j+4.2
d.e5(new A.E(0,0,v),new A.E(0,0,u),0.45,B.b96,0.5,10)
v=j+7.4
d.e5(new A.E(0,0,u),new A.E(0,0,v),3.6,B.Vm,0.5,18)
d.e5(new A.E(0,0,v),new A.E(0,0,j+8.6),1.6,B.bgt,0.7,14)}else{d.d=0.92
v=f.w?B.wW:B.b9Z
d.iQ(new A.E(0,0,j+1.2),3.6,v,6,14,0.7)
d.d=1}d.b=54
s=[B.eo6,B.eb7,B.euE]
for(v=x.o,r=j-3.2,q=0;q<3;++q){u=s[q]
p=f.c===0?r:j
t=u.b.a
d.jT(C.a([new A.E(t,-0.3,w),new A.E(t,-0.3,p+0.4)],v),0.07,u.a,!1,0.3,6)}if(f.c===0)for(w=[B.ehi,B.epC,B.exk],v=f.b,q=0;q<3;++q){o=w[q]
u=o.a
n=A.bzS(e,u,f)
d.b=u
d.e=0.8
t=n.a+0
m=n.b+0
l=n.c
d.e5(new A.E(t,m,l+-0.2),new A.E(t,m,l+0.3),0.09,B.x1,0.6,6)
if(v.ah(0,u))d.Kk(new A.E(t,m,l+-0.5),new A.E(t,m,l+0.9),0.4,o.b,0.26,0.4,8)
d.e=0}},
hd9(d,e){var w
d.e=0.4
d.b=30
w=e?B.wW:B.b5f
d.bG(B.fEo,B.aRO,w,0.3)
d.bG(B.fDJ,B.aRO,w,0.3)
d.bG(B.fzQ,B.aRW,w,0.3)
d.bG(B.fAm,B.fBd,w,0.3)
d.bG(B.fGT,B.aRW,w,0.3)
d.e5(B.fCF,B.fDG,0.1,B.Kz,0.8,10)
d.e=0},
hRX(d,e){var w,v
d.b=31
for(w=0;w<2;++w){v=B.cT1[w]
d.e5(new A.E(v,0.52,0.2),new A.E(v,0.52,1.9),0.04,B.Kz,0.8,6)}d.bG(B.fym,B.fGc,B.b9H,0.35)
d.b8I(B.aRK,0.2,e?D.VO:B.bd8,0.9)
if(e){d.d=0.35
d.iQ(B.aRK,0.5,D.VO,4,8,0)
d.d=1}},
mi:function mi(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.e=g
_.f=h},
XH:function XH(d){var _=this
_.a=!0
_.b=d
_.c=0
_.w=_.r=_.f=_.e=_.d=!1},
zM:function zM(d,e,f,g,h){var _=this
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
foM:function foM(){},
foN:function foN(){},
foO:function foO(){},
foP:function foP(){},
foQ:function foQ(){},
fnD:function fnD(d){this.a=d},
fL5:function fL5(){},
BO:function BO(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fnJ:function fnJ(d){this.a=d},
fnK:function fnK(d){this.a=d},
fnH:function fnH(d){this.a=d},
fnI:function fnI(d){this.a=d},
fnF:function fnF(){},
fnG:function fnG(){},
flH:function flH(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
flI:function flI(d){this.a=d},
f7R:function f7R(d,e,f){this.a=d
this.b=e
this.c=f},
f9a:function f9a(d,e){this.a=d
this.b=e},
bzt(d){return D.d.dL(B.a14,new A.flw(d),new A.flx())},
hjg(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j={},i=new A.fL4(),h=new A.fL1(),g=d.c
if(g==="hall"){w=e.e?d.gjk(0)-14:Math.min(e.d,d.gjk(0)-14)
v=i.$1(w)
return new A.b6M(w,v,d.gjk(0)/2,h.$1(v))}u=d.gfw(0)
t=d.gfw(0)/2-6
if(g==="bathroom")t=14
g=C.a([],x.f)
for(s=d.w,r=s.length,q=0;q<s.length;s.length===r||(0,C.L)(s),++q){p=s[q]
if(p.a==="back"){o=p.b
g.push(new C.y(o-19,o+19))}}D.d.b_(g,new A.fL2())
n=j.a=j.b=-u/2+6
m=new A.fL3(j)
for(u=g.length,q=0;q<g.length;g.length===u||(0,C.L)(g),++q){s=g[q]
l=s.a
if(l>n)m.$2(n,Math.min(l,t))
n=Math.max(n,s.b)}if(n<t)m.$2(n,t)
k=Math.max(30,j.a-j.b-4)
w=e.e?k:Math.min(e.d,k)
v=i.$1(w)
return new A.b6M(w,v,(j.b+j.a)/2,h.$1(v))},
yA(d,e,f,g,h,i,j,k){var w=x.S
return new A.a46(d,e,f,g,h,i,j,k,C.a([],x._),C.a([0,0,0],x.t),C.aX(w),C.T(w,x.i),C.T(w,x.N),C.a([],x.cX))},
bPz(d){var w=new A.aTT(d)
w.c2S()
return w},
hsa(d){var w=new A.aTT(7)
w.bvz(d)
return w},
i5q(d){var w,v=d.c
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
Dm:function Dm(d,e,f){this.a=d
this.b=e
this.c=f},
pv:function pv(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
flw:function flw(d){this.a=d},
flx:function flx(){},
b6M:function b6M(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fL4:function fL4(){},
fL1:function fL1(){},
fL2:function fL2(){},
fL3:function fL3(d){this.a=d},
qc:function qc(d,e,f){this.a=d
this.b=e
this.c=f},
aTO:function aTO(d,e,f){this.a=d
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
aZg(d,e,f){return new A.N4(f,d,e,null)},
N4:function N4(d,e,f,g){var _=this
_.d=d
_.f=e
_.r=f
_.a=g},
aCr:function aCr(d,e,f,g){var _=this
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
e2f:function e2f(){},
e2c:function e2c(d){this.a=d},
e2d:function e2d(d){this.a=d},
e2e:function e2e(d){this.a=d},
e1C:function e1C(d,e,f){this.a=d
this.b=e
this.c=f},
e1D:function e1D(d){this.a=d},
e1B:function e1B(d){this.a=d},
e1E:function e1E(d,e){this.a=d
this.b=e},
e0Z:function e0Z(d,e){this.a=d
this.b=e},
e1M:function e1M(d){this.a=d},
e19:function e19(d,e){this.a=d
this.b=e},
e1a:function e1a(d,e){this.a=d
this.b=e},
e1b:function e1b(d,e){this.a=d
this.b=e},
e1c:function e1c(d,e){this.a=d
this.b=e},
e1d:function e1d(d,e,f){this.a=d
this.b=e
this.c=f},
e18:function e18(d,e){this.a=d
this.b=e},
e1e:function e1e(d){this.a=d},
e1A:function e1A(d,e,f){this.a=d
this.b=e
this.c=f},
e1y:function e1y(d,e,f){this.a=d
this.b=e
this.c=f},
e1z:function e1z(d,e){this.a=d
this.b=e},
e1u:function e1u(d,e,f){this.a=d
this.b=e
this.c=f},
e1t:function e1t(){},
e1v:function e1v(d,e){this.a=d
this.b=e},
e1w:function e1w(d,e){this.a=d
this.b=e},
e1x:function e1x(d,e){this.a=d
this.b=e},
e1k:function e1k(d,e){this.a=d
this.b=e},
e1h:function e1h(){},
e1i:function e1i(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e1g:function e1g(d,e,f){this.a=d
this.b=e
this.c=f},
e1j:function e1j(d,e,f){this.a=d
this.b=e
this.c=f},
e1f:function e1f(d,e){this.a=d
this.b=e},
e27:function e27(d){this.a=d},
e25:function e25(d){this.a=d},
e26:function e26(d,e){this.a=d
this.b=e},
e1Z:function e1Z(d,e,f){this.a=d
this.b=e
this.c=f},
e1Y:function e1Y(){},
e2_:function e2_(){},
e20:function e20(d,e){this.a=d
this.b=e},
e21:function e21(d){this.a=d},
e22:function e22(d){this.a=d},
e23:function e23(d){this.a=d},
e24:function e24(d){this.a=d},
e1V:function e1V(d){this.a=d},
e1U:function e1U(d){this.a=d},
e1R:function e1R(d,e,f){this.a=d
this.b=e
this.c=f},
e1P:function e1P(d){this.a=d},
e1Q:function e1Q(){},
e1S:function e1S(d,e,f){this.a=d
this.b=e
this.c=f},
e1O:function e1O(d,e){this.a=d
this.b=e},
e1T:function e1T(d,e){this.a=d
this.b=e},
e1H:function e1H(d,e){this.a=d
this.b=e},
e1I:function e1I(d){this.a=d},
e1J:function e1J(){},
e1W:function e1W(d,e){this.a=d
this.b=e},
e1N:function e1N(d,e){this.a=d
this.b=e},
e1L:function e1L(d){this.a=d},
e1F:function e1F(d){this.a=d},
e1G:function e1G(){},
e1K:function e1K(){},
e14:function e14(d){this.a=d},
e16:function e16(d,e,f){this.a=d
this.b=e
this.c=f},
e17:function e17(d){this.a=d},
e15:function e15(d){this.a=d},
e10:function e10(d){this.a=d},
e11:function e11(d){this.a=d},
e28:function e28(d){this.a=d},
e13:function e13(d){this.a=d},
e12:function e12(d){this.a=d},
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
e1_:function e1_(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
e1X:function e1X(d,e){this.a=d
this.b=e},
e1r:function e1r(d,e){this.a=d
this.b=e},
e1s:function e1s(d,e){this.a=d
this.b=e},
e0g:function e0g(d,e){this.a=d
this.b=e},
e0O:function e0O(d){this.a=d},
e0P:function e0P(d){this.a=d},
e0Q:function e0Q(d){this.a=d},
e0R:function e0R(d){this.a=d},
e0S:function e0S(d,e){this.a=d
this.b=e},
e0T:function e0T(d){this.a=d},
e0N:function e0N(d){this.a=d},
e0U:function e0U(d,e){this.a=d
this.b=e},
e0M:function e0M(d,e){this.a=d
this.b=e},
e0V:function e0V(d,e){this.a=d
this.b=e},
e0L:function e0L(d,e){this.a=d
this.b=e},
e0W:function e0W(d){this.a=d},
e0K:function e0K(d){this.a=d},
e0X:function e0X(d,e){this.a=d
this.b=e},
e0J:function e0J(d,e){this.a=d
this.b=e},
e0Y:function e0Y(d,e){this.a=d
this.b=e},
e2b:function e2b(d){this.a=d},
e29:function e29(d){this.a=d},
e2a:function e2a(d){this.a=d},
e0A:function e0A(d,e){this.a=d
this.b=e},
e0s:function e0s(d){this.a=d},
e0r:function e0r(){},
e0q:function e0q(d){this.a=d},
e0B:function e0B(d){this.a=d},
e0p:function e0p(d){this.a=d},
e0C:function e0C(d){this.a=d},
e0D:function e0D(d){this.a=d},
e0o:function e0o(d){this.a=d},
e0E:function e0E(d){this.a=d},
e0F:function e0F(d,e){this.a=d
this.b=e},
e0n:function e0n(){},
e0G:function e0G(d){this.a=d},
e0m:function e0m(d){this.a=d},
e0H:function e0H(d){this.a=d},
e0l:function e0l(d){this.a=d},
e0I:function e0I(d){this.a=d},
e0t:function e0t(d){this.a=d},
e0u:function e0u(d){this.a=d},
e0v:function e0v(d){this.a=d},
e0w:function e0w(d){this.a=d},
e0x:function e0x(d){this.a=d},
e0y:function e0y(d){this.a=d},
e0k:function e0k(){},
e0z:function e0z(d){this.a=d},
e0j:function e0j(d){this.a=d},
e1q:function e1q(d){this.a=d},
e1n:function e1n(d,e,f){this.a=d
this.b=e
this.c=f},
e1o:function e1o(d,e){this.a=d
this.b=e},
e1m:function e1m(d){this.a=d},
e1p:function e1p(d,e){this.a=d
this.b=e},
e1l:function e1l(d){this.a=d},
bgT:function bgT(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
dmp:function dmp(d,e){this.a=d
this.b=e},
bgh:function bgh(d,e){this.b=d
this.a=e},
hes(e4,e5,e6,e7,e8,e9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6,d7,d8,d9="walls",e0="GFCI outlet",e1="Wall outlet",e2="\ud83d\udeb0 Needs plumbing",e3=e4.c
if(e3==="outside")return A.hOs(e4,e7,e6,e9)
w=x.z
v=C.a([],w)
u=new A.jf(v)
t=C.T(x.S,x.q)
s=C.a([],x.E)
r=C.a([],x.h)
q=e4.gfw(0)
p=e4.gjk(0)
o=C.a([],x.O)
for(n=e4.z,m=n.length,l=0;l<n.length;n.length===m||(0,C.L)(n),++l)o.push(B.avx[n[l]])
k=B.avk[e4.Q]
j=new A.flV(e6)
u.f=0
u.b=j.$2("floor",310)
n=p/2
m=q+2.4
i=p+2
h=k.b
g=k.c
f=g==="tile"
if(f)e=0.35
else e=g==="wood"?0.15:0
u.qc(new A.E(0,-0.6,n),new A.E(m,1.2,i),h,e,3)
t.n(0,310,new A.d0("Floor","The "+k.a.toLowerCase()+" floor.",new A.E(0,0,n),140))
u.b=0
if(g==="wood")for(g=-q/2,d=1;d<8;++d){f=C.aq(h,D.w,0.25)
f.toString
u.bO(new A.E(g+d*q/8,0.05,n),new A.E(0.3,0.2,p),f)}else if(f)for(h=-q/2,d=1;d<6;++d){u.bO(new A.E(h+d*q/6,0.05,n),new A.E(0.3,0.2,p),B.abi)
u.bO(new A.E(0,0.05,d*p/6),new A.E(q,0.2,0.3),B.abi)}u.b=j.$2(d9,300)
u.iy(new A.E(0,48,-0.6),new A.E(m,96,1.2),o[0],3)
u.b=j.$2(d9,301)
h=-q
g=h/2
u.iy(new A.E(g-0.6,48,n),new A.E(1.2,96,p),o[1],3)
u.b=j.$2(d9,302)
f=q/2
u.iy(new A.E(f+0.6,48,n),new A.E(1.2,96,p),o[2],3)
t.n(0,300,B.dWw)
t.n(0,301,B.dWA)
t.n(0,302,B.dWJ)
if(e5){u.b=0
u.iy(new A.E(0,48,p+0.6),new A.E(m,96,1.2),o[0],3)}u.b=0
u.f=1
u.bG(new A.E(0,2.5,0.4),new A.E(q,5,0.8),B.m8,0.1)
u.bG(new A.E(g+0.4,2.5,n),new A.E(0.8,5,p),B.m8,0.1)
u.bG(new A.E(f-0.4,2.5,n),new A.E(0.8,5,p),B.m8,0.1)
u.f=e5?0:3
u.b=j.$2("ceiling",320)
if(e5)o=1
else o=e6==="ceiling"?0.6:0.4
u.d=o
u.iy(new A.E(0,96.6,n),new A.E(m,1.2,i),B.aub[e4.as],2)
u.f=u.d=1
u.b=0
u.bG(new A.E(0,94,1),new A.E(q,3,1.4),D.c,0.2)
u.bG(new A.E(g+1,94,n),new A.E(1.4,3,p),D.c,0.2)
u.bG(new A.E(f-1,94,n),new A.E(1.4,3,p),D.c,0.2)
t.n(0,320,new A.d0("Ceiling","Pick a colour above to paint the ceiling.",new A.E(0,96,n),140))
n=e4.w
a0=D.d.b7(n,new A.flK())?"left":"right"
o=e3==="hall"
if(!o){m=C.a([],w)
a1=new A.jf(m)
a1.f=1
a1.bO(B.fHd,B.fzn,B.Ah)
a1.bG(B.fx6,B.fD2,B.pv,0.5)
a1.bO(B.aRe,B.fEd,B.Ah)
a1.bO(B.aRe,B.fBs,B.Ah)
a2=p*0.55
if(e5)D.d.v(v,A.tR(m,0,3.141592653589793,new A.E(0,0,p+0.2)))
D.d.v(v,a0==="right"?A.tR(m,0,-1.5707963267948966,new A.E(f,0,a2)):A.tR(m,0,1.5707963267948966,new A.E(g,0,a2)))}for(m=e4.ax,i=e4.at,d=0;d<n.length;++d){a3=n[d]
a4=m.h(0,d)
if(a4==null)a4=i.t(0,d)?1.25:0
e=C.a([],w)
a5=new A.jf(e)
a5.f=1
a6=a5.b=600+d
a5.bO(B.fE4,B.fDS,B.m8)
a7=C.a([],w)
a8=new A.jf(a7)
a8.r=!0
a8.b=a6
if(a4>0.04){a5.b=0
a9=A.hLz(a3.c)
b0=a9.a
a5.bO(B.fCK,B.fAx,b0)
a5.bO(B.fDw,B.fHy,a9.b)
b1=C.aq(b0,D.w,0.25)
b1.toString
a5.bO(B.fCT,B.fG9,b1)
b2=-a4
b1=A.bBM(B.fHv,b2)
a8.aja(new A.E(-12.5+b1.a,0+b1.b,1.2+b1.c),B.fzS,B.wK,0.15,b2)}else{a5.bG(B.fCW,B.fCf,B.wK,0.15)
a5.bG(B.fD1,B.fDh,B.DT,0.8)
a5.bO(B.fDj,B.aS1,B.L_)
a5.bO(B.fHa,B.aS1,B.L_)}b1=new A.flT(a3,q,p)
D.d.v(v,b1.$1(e))
D.d.v(v,b1.$1(a7))
t.n(0,a6,new A.d0("Door","Tap the door to go through it.",B.aR1,90))}for(m=e4.x,i=m.length,l=0;l<m.length;m.length===i||(0,C.L)(m),++l){b3=m[l]
e=b3.b
a6=B.pW.h(0,e)
a6.toString
a7=C.a([],w)
b4=new A.jf(a7)
b4.r=!0
b4.f=e==="rug"?1:2
b1=100+b3.a
b4.b=j.$2("furniture",b1)
A.hbh(b4,e,B.a0X[b3.f])
D.d.v(v,A.tR(a7,0,b3.e*3.141592653589793/2,new A.E(b3.c,0,b3.d)))
t.n(0,b1,new A.d0(a6.a,y.b,new A.E(b3.c,12,b3.d),90))}u.f=2
u.r=!0
b5=p*0.5
w=C.U(n)
m=f-10
b6=D.k.D(new C.cQ(new C.a2(n,new A.flL(),w.k("a2<1>")),new A.flM(),w.k("cQ<1,N>")).cI(0,g+30,new A.flN())+24,g+10,m)
b7=e4.dx==="fan"
b8=e4.ga4E()
b9=b8&&e4.gTi()&&e4.db
u.b=703
if(b7){u.hB(new A.E(0,95.5,b5),new A.E(0,86,b5),1,B.iK,8)
u.e5(new A.E(0,86,b5),new A.E(0,79,b5),6,D.ti,0.5,14)
w=b9?B.t5:D.dA
u.e5(new A.E(0,79,b5),new A.E(0,76,b5),3.6,w,0.6,12)}else{w=b9?B.t5:D.dA
u.e5(new A.E(0,95.5,b5),new A.E(0,93,b5),7,w,0.6,16)}if(b9&&!b7){u.b=0
u.f=3
u.d=0.2
u.baE(new A.E(0,93,b5),new A.E(0,0.5,b5),36,B.t5,!1,14)
u.d=1
u.f=2}c0=b7?"Ceiling fan":"Ceiling light"
if(!b8)c1="It has no power yet. "+(e4.id.length!==0?"Tap it to wire it.":"The room still needs wiring: use the Wiring button.")
else if(!e4.gTi())c1="It is ready: wire the wall switch to turn it on."
else{w=e4.db?"It is on. Tap the wall switch (or tap this) to turn it off.":"It is off. Tap the wall switch (or tap this) to turn it on."
c1=w}t.n(0,703,new A.d0(c0,c1,new A.E(0,88,b5),80))
w=e3==="bathroom"
n=!w
c2=!n||e3==="kitchen"||e4.id==="gfci"
i=e4.gaFm()
e=c2?e0:e1
a6=e4.id.length!==0||e4.gjy()
a7=c2?e0:e1
a7=C.a([new C.ev([0,700,h/4,i,e]),new C.ev([1,701,q/4,a6,a7])],x.az)
for(i=e4.dy,d=0;d<i.length;++d){h=i[d]
e=h.a
if(e!=="switch"){a6=h.c
e=a6.c>=2&&A.afu(A.Ag(e),a6).a==="ok"
a6=i[d].a==="gfci"?"Added GFCI outlet":"Added outlet"
a7.push(new C.ev([2+d,800+d,h.b,e,a6]))}}u.f=1
u.r=!1
for(h=a7.length,e=e4.cy,l=0;l<a7.length;a7.length===h||(0,C.L)(a7),++l){a6=a7[l].a
d=a6[0]
c3=a6[1]
c4=a6[2]
c5=a6[3]
c6=a6[4]
u.b=c3
u.e=0.4
u.d=0.55
a6=c5?D.b7:D.ay
u.bO(new A.E(c4,14,0.25),B.fAX,a6)
u.d=1
u.e=0
a6=c5?B.aef:D.ti
u.bG(new A.E(c4,14,0.9),B.fEr,a6,0.25)
u.b=0
for(c7=0;c7<2;++c7)for(a6=14+E.oO[c7]*2.8,c8=0;c8<2;++c8)u.bO(new A.E(c4+B.cYl[c8],a6,1.7),B.fHo,B.bdl)
u.bO(new A.E(c4,14,1.7),B.fEp,D.dA)
if(!c5)a6="This one is not wired yet. Tap it to wire it."
else a6=e.h(0,d)==null?"Tap it to plug something in.":"Tap it to plug something else in, or to unplug."
t.n(0,c3,new A.d0(c6,a6,new A.E(c4,14,2),60))}h=C.a([new C.bv(702,b6,e4.gTi())],x.al)
for(d=0;d<i.length;++d){a6=i[d]
b1=a6.a
if(b1==="switch"){c9=a6.c
b1=c9.c>=2&&A.afu(A.Ag(b1),c9).a==="ok"
h.push(new C.bv(800+d,a6.b,b1))}}for(i=h.length,l=0;l<h.length;h.length===i||(0,C.L)(h),++l){a6=h[l]
c3=a6.a
c4=a6.b
c5=a6.c
u.b=c3
u.e=0.4
u.d=0.55
a6=c5?D.b7:D.ay
u.bO(new A.E(c4,48,0.25),B.fC3,a6)
u.d=1
u.e=0
a6=c5?B.aef:D.ti
u.bG(new A.E(c4,48,0.9),B.fBD,a6,0.25)
u.bO(new A.E(c4,e4.db&&c5?49.2:46.8,1.9),B.fBx,B.bj5)
if(!c5)a6="Not wired yet. Tap it to wire it."
else if(e4.db)a6="On. Tap to turn the "+(b7?"fan":"light")+" off."
else a6="Off. Tap to turn the "+(b7?"fan":"light")+" on."
t.n(0,c3,new A.d0("Light switch",a6,new A.E(c4,48,2),60))}if(!e4.ga4E()&&e4.id.length===0)s.push(new A.t1(new A.E(0,70,b5),"\u26a1 No power: needs wiring",D.bI))
i=!1
if(e4.id.length!==0)if(!e4.gyA()){i=e4.id
i=!(i==="ptrap"||i==="faucet")}if(i)s.push(new A.t1(new A.E(0,40,14),"\ud83d\udc46 Tap the red one to wire it",D.bI))
u.f=2
u.r=!0
for(i=a7.length,h=x.o,a6=e4.a,l=0;l<a7.length;a7.length===i||(0,C.L)(a7),++l){b1=a7[l].a
d=b1[0]
c4=b1[2]
c5=b1[3]
d0=e.h(0,d)
if(d0==null||!c5)continue
d1=A.bzt(d0)
b1=u.b=720+d
u.jT(C.a([new A.E(c4,12,1.8),new A.E(c4,6,3),new A.E(c4,2,11)],h),0.3,B.Wj,!1,0.2,6)
c9=d1.d
d2=c9<=0
if(!d2||d1.e){b2=c9*0.56
u.bG(new A.E(c4,2,15),new A.E(c9*0.45,4,14),B.iK,0.3)
u.bG(new A.E(c4,8,15),B.fAA,B.iK,0.3)
d3=12+b2/2
u.bG(new A.E(c4,d3,15),new A.E(c9,b2,3),E.Ed,0.5)
c9=(c9-3.5)/2
d4=c4-c9
d5=(b2-3.5)/2
d6=d3+d5
c9=c4+c9
d5=d3-d5
r.push(new A.WK(C.a([new A.E(d4,d6,16.6),new A.E(c9,d6,16.6),new A.E(c9,d5,16.6),new A.E(d4,d5,16.6)],h),b1,new A.flO(d*7+a6),180,9,2))}else{c9=d1.a
if(c9==="lamp"){u.e5(new A.E(c4,0,14),new A.E(c4,1,14),6,B.Vm,0.4,14)
u.e5(new A.E(c4,1,14),new A.E(c4,22,14),1,B.As,0.5,8)
c9=e4.db?B.t5:X.Wr
u.yh(new A.E(c4,20,14),new A.E(c4,32,14),9,c9,!1,!0,5.5,0.2,16)}else{u.bG(new A.E(c4,9,15),B.fyv,B.DR,0.1)
if(c9==="toaster"){u.bG(new A.E(c4,23,15),B.fyt,B.kD,0.8)
u.bO(new A.E(c4,28.2,15),B.fFg,B.aet)}else{u.Kk(new A.E(c4-7,21,15),new A.E(c4+7,21,15),3.6,B.KJ,3,0.6,12)
u.bG(new A.E(c4-8,14.5,15),B.fDd,B.KJ,0.6)}}}c9=!d2||d1.e?"It is playing NGMY ads. Tap it to watch full screen with the remote.":"It is plugged in and running. Tap the outlet to unplug it or plug in something else."
t.n(0,b1,new A.d0(d1.b,c9,new A.E(c4,16,14),90))}u.f=1
u.r=!1
d7=new A.flQ(e4,u,q,r,t)
d7.$2(e4.fr,0)
if(o)d7.$2(e4.fx,1)
u.f=2
o=u.r=!0
if(n?e3==="kitchen":o){c5=e4.gl2()
e3=new A.flU(u)
if(w){d8=g+17
if(c5){u.b=710
u.Kk(new A.E(6,0.5,14),new A.E(6,15,14),8,B.Ab,5.6,0.8,18)
u.e5(new A.E(6,15,14),new A.E(6,16,14),9,B.KS,0.8,18)
u.bG(new A.E(6,21,5),B.fyC,B.Ab,0.8)
u.bG(new A.E(6,28,5),B.fCE,B.KS,0.8)}else{u.b=710
u.d=0.3
u.f=3
u.bO(new A.E(6,14,9),B.fyy,D.b1)
u.d=1
u.f=2
e3.$2(-4,8)}u.b=711
u.bG(new A.E(34,14,10),B.fzi,B.DR,0.1)
u.bG(new A.E(34,29,10),B.fzl,B.VU,0.4)
if(c5){u.e5(new A.E(34,29.3,10),new A.E(34,30.1,10),6.5,D.c,0.6,18)
u.bgN(C.a([new A.E(34,30,4),new A.E(34,36,4),new A.E(34,38,7)],h),0.6,B.kD,0.9,8)}else{e3.$2(28,18)
e3.$2(40,18)}u.b=712
if(c5){u.bG(new A.E(d8,8,38),B.aRf,B.aeH,0.7)
u.bG(new A.E(d8,16.2,38),B.fG3,B.VE,0.8)
u.e5(new A.E(d8,30,3),new A.E(d8,52,3),0.7,B.kD,0.9,8)
u.e5(new A.E(d8,52,3),new A.E(d8,52,10),0.7,B.kD,0.9,8)}else{u.d=0.3
u.f=3
u.bO(new A.E(d8,8,38),B.aRf,D.b1)
u.d=1
u.f=2
e3.$2(d8-4,34)
e3.$2(d8+4,34)}e3=c5?"Fitted on its flange with a wax ring, and the supply hose joins the shut-off valve.":"There is no toilet yet: only the flange and the water stub. Use the Plumbing button to fit it."
t.n(0,710,new A.d0("Toilet",e3,new A.E(6,14,10),70))
e3=c5?"The faucet, the hoses and the P-trap are fitted.":"The sink is not plumbed. Use the Plumbing button."
t.n(0,711,new A.d0("Vanity sink",e3,new A.E(34,28,10),70))
e3=c5?"The bath is in and connected.":"The bath is not connected yet."
t.n(0,712,new A.d0("Bath",e3,new A.E(d8,10,38),90))
if(!c5)s.push(new A.t1(new A.E(0,40,14),e2,D.bj))}else{u.b=0
u.bG(new A.E(g+15,36,14),B.fz6,B.ada,0.6)
u.bO(new A.E(g+28.5,36,14.4),B.fEb,D.dA)
u.bG(new A.E(m,15,14),B.fyQ,B.abL,0.1)
u.bG(new A.E(m,31,14),B.fyW,B.iK,0.5)
u.bG(new A.E(f-15,32.4,14),B.aRw,D.lE,0.3)
u.bG(new A.E(f-5,32.4,14),B.aRw,D.lE,0.3)
u.b=713
u.bG(new A.E(30,15,14),B.fzE,B.DR,0.1)
u.bG(new A.E(30,31,14),B.fzF,B.El,0.5)
if(c5){u.e5(new A.E(30,32.1,14),new A.E(30,32.7,14),8,B.E8,0.8,18)
u.bgN(C.a([new A.E(30,32,5),new A.E(30,42,5),new A.E(30,44,9),new A.E(30,44,13)],h),0.7,B.kD,0.9,8)}else{e3.$2(22,18)
e3.$2(38,18)}e3=c5?"The faucet, the hoses and the drain are fitted.":"The kitchen sink is not plumbed yet. Use the Plumbing button."
t.n(0,713,new A.d0("Kitchen sink",e3,new A.E(30,30,14),70))
if(!c5)s.push(new A.t1(new A.E(30,48,14),e2,D.bj))}}for(e3=D.d.gaf(e8),w=new C.fk(e3,new A.flP(e4));w.C();){o=e3.gU(0)
n=o.c
m=o.d
i=o.r
h=o.w?D.bI:D.ff
s.push(new A.t1(new A.E(n,74,m),i,h))
t.n(0,900+o.a,new A.d0(i,"Tap to see how they are, feed them or give medicine.",new A.E(n,36,m),90))}return new A.zn(v,t,s,r)},
ni(d,e,f,g,h,i,j,k,l){var w=-h/2,v=i/2,u=h/2,t=-i/2
d.cQn(e.ad(0,f.aF(0,w)).ad(0,g.aF(0,v)),e.ad(0,f.aF(0,u)).ad(0,g.aF(0,v)),e.ad(0,f.aF(0,u)).ad(0,g.aF(0,t)),e.ad(0,f.aF(0,w)).ad(0,g.aF(0,t)),j,k,l)},
hOs(a1,a2,a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=x.z,i=C.a([],j),h=new A.jf(i),g=C.T(x.S,x.q),f=C.a([],x.E),e=a1.gfw(0),d=a1.gjk(0),a0=new A.ffR(a3)
h.f=0
h.b=a0.$2("floor",310)
h.iy(new A.E(0,-0.6,d/2-60),new A.E(e*2.5,1.2,d*2.5),B.abB,5)
g.n(0,310,B.dWE)
h.b=0
h.f=1
h.bO(new A.E(0,0.15,60),B.fBv,E.DW)
for(w=0;w<6;++w)h.bO(new A.E(0,0.35,8+w*22),B.fEt,B.bfU)
h.f=2
h.x=$.alV=$.alV+1
h.iy(B.fy_,B.fyZ,B.Kt,3)
h.bO(B.fxP,B.fz_,B.ab2)
v=new A.ffS(h)
u=new A.ffQ(h)
for(t=0;t<4;++t)v.$5(B.fO,B.j_,B.lr,B.d6I[t],62)
u.$5(B.fO,B.j_,B.lr,0,600)
for(t=0;t<2;++t)v.$5(B.aQV,B.we,B.zr,B.d6F[t],62)
u.$5(B.aQV,B.we,B.zr,0,0)
for(t=0;t<2;++t){s=B.d6x[t]
v.$5(B.fyi,B.zr,B.j_,s,62)
v.$5(B.fFH,B.lr,B.we,-s,62)}r=C.a([],j)
new A.jf(r).qc(B.fO,B.fz4,B.Kw,0.1,2)
h.a5y(B.fAP,B.fHs,B.fBI,B.Kt,B.j_,!1)
h.a5y(B.fzK,B.fET,B.fEK,B.Kt,B.we,!1)
h.x=0
h.r=!0
D.d.v(i,A.tR(r,0.5,0,B.fxe))
D.d.v(i,A.tR(r,-0.5,0,B.fxf))
h.bO(B.fxg,B.fz3,B.VQ)
h.bO(B.fAp,B.fyr,B.ae3)
h.bO(B.fAq,B.aR5,B.x5)
h.bO(B.fxJ,B.fzW,E.DW)
h.hB(B.fFN,B.fFO,2.2,B.m8,8)
h.hB(B.fyR,B.fyS,2.2,B.m8,8)
h.bG(B.fya,B.fA_,B.Kw,0.1)
g.n(0,600,B.dXf)
h.r=!0
for(r=a1.x,q=r.length,t=0;t<r.length;r.length===q||(0,C.L)(r),++t){p=r[t]
o=p.b
if(D.d.t(B.a1C,o)){g.n(0,100+p.a,new A.d0(B.pW.h(0,o).a,"It wanders about. Move it with the arrow buttons or take it out.",new A.E(p.c,12,p.d),140))
continue}n=B.pW.h(0,o)
n.toString
m=C.a([],j)
l=new A.jf(m)
l.r=!0
l.f=D.d.t(B.aw7,o)?1:2
k=100+p.a
l.b=a0.$2("furniture",k)
A.hbh(l,o,B.a0X[p.f])
D.d.v(i,A.tR(m,0,p.e*3.141592653589793/2,new A.E(p.c,0,p.d)))
g.n(0,k,new A.d0(n.a,y.b,new A.E(p.c,12,p.d),140))}j=a2===0
r=j?"\u2705 The house is finished":"\ud83c\udfe0 "+a2+" rooms still need work"
f.push(new A.t1(B.fxp,r,j?D.d_:D.dT))
return new A.zn(i,g,f,B.vH)},
hV0(a1,a2,a3,a4,a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=x.z,d=C.a([],e),a0=new A.jf(d)
a0.r=!0
if(a1.c==="outside"){if(a4!=null&&a4.a===a1.a)A.fa0(a0,a4,a2,a5,!0,0)
for(w=D.d.gaf(a1.x),v=new C.fk(w,new A.foz()),u=a2*6,t=a3==="furniture";v.C();){s=w.gU(0)
r=s.a
q=a2*(0.25+D.o.F(r,5)*0.04)+r*1.7
p=s.c
o=Math.cos(q)
n=s.d
m=Math.sin(q)
l=Math.atan2(-Math.sin(q),Math.cos(q))
k=C.a([],e)
j=new A.jf(k)
j.r=!0
j.b=t?100+r:0
A.h9G(j,s.b,B.a0X[s.f],Math.sin(u+r)*0.5)
D.d.v(d,A.tR(k,0,l,new A.E(p+o*10,0,n+m*10)))}for(e=D.d.gaf(a6),w=new C.fk(e,new A.foA(a1)),v=a2*0.5,u=a1.a;w.C();){t=e.gU(0)
s=t.a
r=v+s
p=Math.sin(r)
o=t.y
n=t.c
m=t.d
r=Math.cos(r)>=0?1.5707963267948966:-1.5707963267948966
A.fa0(a0,new A.VU(u,n+p*o,m,r,!0,!1,!1,!1,!1,"","",-1,0,-1,0),a2,t.f,!1,900+s)}return d}if(a4!=null&&a4.a===a1.a)A.fa0(a0,a4,a2,a5,!0,0)
for(e=D.d.gaf(a6),w=new C.fk(e,new A.foB(a1)),v=a1.a,u=a2*0.5;w.C();){t=e.gU(0)
s=t.y
r=s>0
i=r?Math.sin(u+t.a)*s:0
s=t.c
p=t.d
if(r)o=Math.cos(u+t.a)>=0?1.5707963267948966:-1.5707963267948966
else o=t.x?0.5:t.e
A.fa0(a0,new A.VU(v,s+i,p,o,r,!1,!1,!1,t.x,"","",-1,0,-1,0),a2,t.f,!1,900+t.a)}h=a1.gjk(0)
if(a1.dx==="fan"){g=a1.ga4E()&&a1.gTi()&&a1.db?a2*7:0
a0.b=703
for(e=h*0.5,f=0;f<4;++f){q=g+f*3.141592653589793/2
a0.aja(new A.E(Math.cos(q)*15,81,e+Math.sin(q)*15),B.fH6,B.DR,0.1,-q)}}return d},
hLz(d){var w
A:{if(5===d){w=B.er9
break A}if(9===d){w=B.evg
break A}if(10===d){w=B.ejS
break A}if(11===d){w=B.ew7
break A}if(2===d||4===d||8===d){w=B.eaP
break A}w=B.emm
break A}return w},
flj(b0,b1,b2,b3,b4,b5,b6,b7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9
for(w=b2.a,v=b2.b,u=b2.c,t=b1.a,s=b1.b,r=b1.c,q=b3.a,p=q*0.1,o=b3.b,n=o*0.1,m=b3.c,l=m*0.1,k=q*0.2,j=o*0.2,i=m*0.2,q*=0.3,o*=0.3,m*=0.3,h=-b4/2,g=b5-1,f=b5===1,e=0;e<b5;++e){d=f?0:h+b4*e/g
for(a0=b6.length,a1=s+v*d,a2=t+w*d+0,a3=r+u*d+0,a4=a2+p,a5=a3+l,a6=a2+k,a7=a3+i,a2+=q,a3+=m,a8=0;a8<b6.length;b6.length===a0||(0,C.L)(b6),++a8){a9=a1+b6[a8]
A.ni(b0,new A.E(a4,a9+n,a5),b2,B.fP,14,17,B.m8,b3,0)
A.ni(b0,new A.E(a6,a9+j,a7),b2,B.fP,11,14,b7,b3,0.6)
A.ni(b0,new A.E(a2,a9+o,a3),b2,B.fP,11,0.9,B.m8,b3,0)}}},
hIY(a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0
A:{if("shop"===a2){w=B.eDo
break A}if("hospital"===a2){w=B.eDj
break A}if("firestation"===a2){w=B.eD0
break A}if("school"===a2){w=B.eCU
break A}w=B.eCD
break A}w=w.a
v=w[0]
u=w[1]
t=w[2]
s=w[3]
r=w[4]
q=u/2
p=v/2
a1.x=$.alV=$.alV+1
a1.iy(new A.E(0,t/2,0),new A.E(v,t,u),s,2)
a1.bO(new A.E(0,2.5,0),new A.E(v+3,5,u+3),B.ab2)
w=a2==="hospital"
if(w)o=C.a([14,30,46],x.n)
else if(a2==="school"){n=C.a([14,32],x.n)
o=n}else{n=x.n
n=a2==="house2"?C.a([26],n):C.a([22],n)
o=n}m=D.o.D(D.k.bu(v/24),2,5)
n=a2==="firestation"
l=n?C.a([34],x.n):o
k=v-30
A.flj(a1,new A.E(0,0,q).ad(0,B.fO),B.j_,B.lr,k,m,l,B.pv)
j=q+0.4
if(n){A.ni(a1,new A.E(-14,17,j),B.j_,B.fP,34,34,D.ju,B.lr,0.2)
for(i=q+0.5,h=0;h<6;++h)A.ni(a1,new A.E(-14,4+h*6,i),B.j_,B.fP,33,0.8,D.dA,B.lr,0)
A.ni(a1,new A.E(24,15,j),B.j_,B.fP,14,30,B.wK,B.lr,0)}else{A.ni(a1,new A.E(0,14,q+0.3),B.j_,B.fP,18,28,B.m8,B.lr,0)
A.ni(a1,new A.E(0,13,j),B.j_,B.fP,14,26,B.wK,B.lr,0.2)}switch(a2){case"hospital":i=t-8
A.ni(a1,new A.E(0,i,j),B.j_,B.fP,30,9,D.bI,B.lr,0)
j=q+0.5
A.ni(a1,new A.E(0,i,j),B.j_,B.fP,24,2.6,D.c,B.lr,0)
A.ni(a1,new A.E(0,i,j),B.j_,B.fP,2.6,7,D.c,B.lr,0)
break
case"shop":for(i=q+3,h=0;h<6;++h){g=(h&1)===0?D.ay:D.c
A.ni(a1,new A.E(-30+h*12,33,i),B.j_,B.fP,6,6,g,B.lr,0)}A.ni(a1,new A.E(0,t-4,j),B.j_,B.fP,36,6,a3,B.lr,0)
break
case"firestation":A.ni(a1,new A.E(0,t-5,j),B.j_,B.fP,40,7,D.cn,B.lr,0)
break
case"school":A.ni(a1,new A.E(0,t-5,j),B.j_,B.fP,40,7,D.bj,B.lr,0)
break}j=-q
A.flj(a1,new A.E(0,0,j),B.we,B.zr,k,m,l,B.pv)
A.ni(a1,new A.E(0,13,j-0.4),B.we,B.fP,14,26,B.wK,B.zr,0)
f=D.o.D(D.k.bu(u/24),1,3)
k=u-26
A.flj(a1,new A.E(p,0,0),B.zr,B.j_,k,f,l,B.pv)
i=-p
A.flj(a1,new A.E(i,0,0),B.lr,B.we,k,f,l,B.pv)
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
d.bG(B.fO,new A.E(v+6,2.5,u*0.58),r,0.1)
n=a1.a
k=t+5
D.d.v(n,A.tR(w,0.42,0,new A.E(0,k,u*0.25)))
a0=-u
D.d.v(n,A.tR(w,-0.42,0,new A.E(0,k,a0*0.25)))
k=p+0.2
w=t+12
a1.a5y(new A.E(k,t,q),new A.E(k,t,j),new A.E(k,w,0),s,B.j_,!1)
i-=0.2
a1.a5y(new A.E(i,t,j),new A.E(i,t,q),new A.E(i,w,0),s,B.we,!1)
if(a2==="school"){w=q-10
e.bO(new A.E(0,t+18,w),B.fyw,D.acD)
e.bO(new A.E(0,t+30,w),B.fyY,r)
e.hB(new A.E(0,t+31,w),new A.E(0,t+46,w),0.6,D.dA,6)
e.bO(new A.E(5,t+44,w),B.fF2,D.ay)}else e.bO(new A.E(v*0.28,t+14,a0*0.1),B.fAR,B.ae3)}else{k=v+2
e.bG(new A.E(0,t+1.5,0),new A.E(k,3,u+2),r,0.05)
e.bO(new A.E(0,t+4,q+0.5),new A.E(k,4,1.4),a3)
if(w){w=v*0.25
k=-u*0.15
e.bO(new A.E(w,t+5,k),B.fz5,D.bv)
e.bO(new A.E(w,t+6.2,k),B.fFb,D.c)}if(n){w=p-10
n=-u*0.2
e.bO(new A.E(w,t+16,n),B.fyq,B.ad3)
e.bO(new A.E(w,t+32,n),B.aR5,r)}}D.d.v(a1.a,g)},
hQk(d,e){var w,v,u,t,s,r,q,p,o,n,m
d.bO(B.aS2,B.fHJ,B.bf7)
d.bO(B.fDv,B.aRU,D.bn)
d.bO(B.fx8,B.aRU,D.bn)
A:{if("roadturn"===e){w=B.d5A
break A}if("roadtee"===e){w=B.cPt
break A}if("roadcross"===e){w=B.c6V
break A}w=B.d3U
break A}for(v=w.length,u=0;u<v;++u){t=w[u]
s=t.a
r=t.b
for(t=r!==0,q=s!==0,p=0;p<2;++p){o=5+p*10.5
n=q?6:1.6
m=t?6:1.6
d.bO(new A.E(s*o,0.7,r*o),new A.E(n,0.2,m),B.Wk)}}if(e!=="road")d.bO(B.aRX,B.fCS,B.Wk)
if(e==="roadcross")for(p=-2;p<=2;++p)d.bO(new A.E(p*4,0.7,15),B.fGp,D.c)},
h9G(d,e,f,g){var w=new A.f6G(d,g)
switch(e){case"dog":d.bG(B.Da,B.fGS,f,0.05)
d.io(B.fBA,3.4,f,4,8)
d.bO(B.fDN,B.fAN,D.KA)
d.bO(B.fEQ,B.aRz,B.iK)
d.bO(B.fHr,B.aRz,B.iK)
d.hB(B.fFp,B.fxo,0.8,f,5)
w.$5(B.d4p,6,6,1.7,f)
break
case"cat":d.bG(B.zs,B.fAK,f,0.05)
d.io(B.fy6,2.7,f,4,8)
d.bO(B.fGw,B.aR6,f)
d.bO(B.fGz,B.aR6,f)
d.hB(B.fy5,B.fxj,0.7,f,5)
w.$5(B.d2k,4,4,1.2,f)
break
case"cow":d.bG(B.a7O,B.fyn,D.bM,0.05)
d.bO(B.fGG,B.fGb,B.iK)
d.bO(B.fCs,B.fAL,B.iK)
d.bO(B.fxv,B.fAW,D.bM)
d.bO(B.fxr,B.fHH,D.mK)
d.bO(B.fB2,B.aR7,D.bR)
d.bO(B.fHp,B.aR7,D.bR)
d.hB(B.fxy,B.fy7,0.7,B.iK,5)
w.$5(B.cT0,11,11,3.2,D.bR)
break
case"sheep":d.io(B.aQY,8.5,D.pn,4,8)
d.io(B.fxm,7,D.pn,4,8)
d.io(B.fxk,3.4,B.iK,4,8)
w.$5(B.d4l,8,8,1.8,B.iK)
break
case"chicken":d.io(B.zs,4,f,4,8)
d.io(B.fxd,2.2,f,3,6)
d.bO(B.fxi,B.fG6,D.bI)
d.bO(B.fBG,B.fBl,D.aH)
d.bO(B.fy9,B.fzU,f)
w.$5(B.cRa,3,3,0.8,D.aH)
break
case"horse":d.bG(B.fxA,B.fyg,f,0.1)
d.ajX(B.fxG,B.fxM,4.2,f,3,8)
d.bO(B.fxN,B.fA8,f)
d.bO(B.fxT,B.fG5,B.iK)
d.hB(B.fxH,B.fy8,1.8,B.iK,6)
w.$5(B.cQx,16,16,2.6,f)
break
default:d.bO(B.zs,B.fAU,f)}},
he_(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=C.a([],x.z)
for(w=d.length,v=e.a,u=e.b,t=e.c,s=f.a,r=f.b,q=f.c,p=x.o,o=0;o<d.length;d.length===w||(0,C.L)(d),++o){n=d[o]
m=C.a([],p)
for(l=n.a,k=l.length,j=0;j<l.length;l.length===k||(0,C.L)(l),++j){i=l[j]
m.push(new A.E(s+(i.a-s)*v,r+(i.b-r)*u,q+(i.c-q)*t))}l=n.b
h.push(new A.nd(m,new A.E(l.a/v,l.b/u,l.c/t).gow(0),n.c,n.d,n.e,n.f,n.r,n.w,n.x,n.y,n.z))}return h},
fa0(d,e,f,g,h,i){var w,v=g.e,u=$.fNc.h(0,v)
if(u==null){A.hP9(d,e,f,i,v==="xbot"?B.a4N:new A.uy(g.a,g.b,g.c,g.d,"human"))
return}v=e.e
w=v&&e.ax>0?e.ax*12:null
D.d.v(d.a,u.cPR(h,i,f,w,v,e.b,e.d,e.c))},
hP9(b2,b3,b4,b5,b6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0=C.a([],x.z),b1=new A.jf(b0)
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
h=new A.fgp(b5,b1)
g=new A.fgb(b1)
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
h.$3(new A.fgc(),B.fDU,new A.E(p,l+-1.6,e))
h.$3(new A.fgd(),B.fBN,new A.E(p,l+-2.9,e))}h.$3(new A.fge(s),B.fCg,new A.E(0,i+1.2,0))
h.$3(new A.fgh(t),B.fDB,new A.E(0,i+2.5,0))
h.$3(new A.fgi(),B.fyG,new A.E(0,i+2.4,0))
h.$3(new A.fgj(t),B.fD4,new A.E(0,i+19.6,0))
b1.hB(new A.E(0,i+20.5,0.2),new A.E(0,i+24.2,0.5),2,w,8)
p=i+29
a1=new A.E(0,p,0.6)
h.$3(new A.fgk(w),B.fFf,a1)
h.$3(new A.fgl(w),B.fEw,a1.ad(0,B.fzR))
h.$3(new A.fgm(u),B.fAJ,a1.ad(0,B.fDE))
h.$3(new A.fgn(u),B.fCj,a1.ad(0,B.fHI))
for(o=p+-0.2,m=p+0.4,p+=1.9,n=0;n<2;++n){a2=E.oO[n]
b1.io(new A.E(0+a2*4.2,o,0.6),1,w,3,6)
l=0+a2*1.8
h.$3(new A.fgo(),B.fGA,new A.E(l,m,4.75))
b1.io(new A.E(l,m,5.1),0.5,D.ps,3,6)
b1.bO(new A.E(l,p,4.8),B.fHf,u)}h.$3(new A.fgf(v),B.fHq,a1.ad(0,B.fBH))
b1.bO(a1.ad(0,B.fDI),B.fCz,B.bds)
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
h.$3(new A.fgg(w),B.fG7,new A.E(e,a6+-1.3,a7+0.2))
if(a5&&o){a9=a7+0
b1.e5(new A.E(e,a6+-2.6,a9),new A.E(e,a6+2.6,a9),1.7,D.aU,0.5,8)}if(a5&&m){b1.bG(new A.E(e,a6+-0.4,a7+2.6),B.fD7,D.ps,0.3)
b1.bO(new A.E(e,a6+0.2,a7+3.8),B.fBq,D.ay)}}D.d.v(b2.a,A.tR(b0,0,b3.d,new A.E(b3.b,0,b3.c)))},
hbh(d,e,f){var w,v,u,t,s,r,q=C.aq(f,D.w,Math.abs(-0.25))
q.toString
w=C.aq(f,D.c,Math.abs(0.2))
w.toString
A:{if("bed"===e){d.bG(B.zs,B.fAc,B.x5,0.1)
d.bG(B.fxl,B.fA1,f,0.05)
d.bO(B.fFK,B.aRa,B.adE)
d.bO(B.fyp,B.aRa,B.adE)
d.bG(B.fxD,B.fAd,B.x5,0.1)
d.bO(B.fxs,B.fFl,w)
break A}if("nightstand"===e){d.bG(B.Da,B.fyu,f,0.1)
d.bO(B.fEA,B.fAs,q)
d.bO(B.fHk,B.fzz,B.adl)
d.bO(B.fxE,B.fB1,B.t5)
break A}if("wardrobe"===e){d.bG(B.fxL,B.fzH,f,0.1)
d.bO(B.fBe,B.fzP,q)
d.bG(B.fCX,B.aRQ,B.DT,0.8)
d.bG(B.fHx,B.aRQ,B.DT,0.8)
break A}if("desk"===e){d.bG(B.aQZ,B.fzN,f,0.1)
d.bO(B.fFP,B.aRd,q)
d.bO(B.fyU,B.aRd,q)
d.bG(B.fxW,B.fyV,B.Kh,0.5)
d.bO(B.fxK,B.fAk,D.ti)
break A}if("rug"===e){d.iy(B.aS2,B.fyD,f,2)
d.bO(B.fB6,B.fGg,w)
break A}if("sofa"===e){d.bG(B.Da,B.fAE,f,0.05)
d.bG(B.fxC,B.fAF,q,0.05)
d.bG(B.fFS,B.aRn,q,0.05)
d.bG(B.fzt,B.aRn,q,0.05)
d.bO(B.fFJ,B.aRb,w)
d.bO(B.fyo,B.aRb,w)
break A}if("armchair"===e){d.bG(B.Da,B.fzf,f,0.05)
d.bG(B.fxB,B.fzh,q,0.05)
d.bO(B.fFI,B.aRk,q)
d.bO(B.fyk,B.aRk,q)
break A}if("coffee"===e){d.bG(B.J0,B.fzD,f,0.2)
for(v=0;v<4;++v){w=B.d6r[v]
d.bO(new A.E(w.a,6.5,w.b),B.fza,q)}d.bG(B.fC2,B.fAS,D.bR,0.5)
break A}if("tvstand"===e){d.bG(B.aR3,B.fzY,f,0.1)
d.bO(B.fAC,B.fBS,q)
d.bG(B.aR0,B.fzM,E.Ed,0.7)
d.bG(B.fC5,B.fBF,D.fm,0.9)
d.bO(B.fxu,B.fAT,B.iK)
break A}if("dining"===e){d.bG(B.aQZ,B.fzZ,f,0.2)
for(v=0;v<4;++v){w=B.cBD[v]
d.bO(new A.E(w.a,13,w.b),B.fzy,q)}break A}if("chair"===e){d.bG(B.fxq,B.fyz,f,0.1)
d.bG(B.fxI,B.fyx,f,0.1)
for(v=0;v<4;++v){w=B.cY2[v]
d.bO(new A.E(w.a,7.5,w.b),B.fyP,q)}break A}if("plant"===e){d.hB(B.fO,B.aR3,5,D.d9,10)
d.io(B.a7O,8,B.ab5,5,8)
d.io(B.fzx,5,B.Vz,4,8)
break A}if("lamp"===e){d.hB(B.fO,B.fP,4.5,B.iK,10)
d.hB(B.fP,B.aR2,0.7,B.iK,6)
d.ajX(B.fxX,B.fy2,6,B.t5,3.5,12)
break A}if("console"===e){d.bG(B.fxF,B.aRi,f,0.15)
d.bO(B.fCk,B.aRc,q)
d.bO(B.fB9,B.aRc,q)
d.bO(B.Da,B.fG2,q)
break A}if("shelf"===e){d.bG(B.aR_,B.fzs,f,0.1)
for(u=0;u<4;++u){q=10+u*15
d.bO(new A.E(0,q,1),B.fzm,B.iK)
w=D.o.F(u,2)
d.bO(new A.E(-8+w*6,q,2),B.fAa,[D.eM,D.dS,D.ff,D.dT][u])
d.bO(new A.E(4+w*4,q,2),B.fAV,[D.dT,D.ff,D.eM,D.dS][u])}break A}if("tree"===e){d.ajX(B.fO,B.aR0,4.2,B.x5,3,8)
d.io(B.aR2,17,B.ab5,5,9)
d.io(B.fB0,11,B.Vz,4,8)
d.io(B.fFY,12,B.bd5,4,8)
break A}if("pine"===e){d.hB(B.fO,B.aQW,3,B.x5,8)
for(u=0;u<3;++u){q=u*14
d.ajX(new A.E(0,8+q,0),new A.E(0,26+q,0),14-u*3.5,B.abv,1.5,10)}break A}if("bush"===e){d.io(B.Da,9,B.bak,4,8)
d.io(B.fA9,6.5,B.Vz,4,8)
break A}if("flowers"===e){for(v=0;v<5;++v){q=B.d58[v]
t=q.a
s=q.b
d.hB(new A.E(t,0,s),new A.E(t,7,s),0.4,B.abv,5)
d.io(new A.E(t,8,s),2.2,q.c,3,6)}break A}if("fence"===e){for(v=0;v<4;++v)d.bG(new A.E(B.d6B[v],9,0),B.fEs,f,0.05)
d.bO(B.zs,B.aS7,q)
d.bO(B.aQY,B.aS7,q)
break A}if("lamppost"===e){d.hB(B.fO,B.fy0,1.3,B.iK,8)
d.hB(B.fO,B.fxO,3.5,B.iK,8)
d.io(B.fy1,4,B.t5,4,8)
break A}if("bench"===e){d.bG(B.fxh,B.aRi,f,0.1)
d.bG(B.fxz,B.fzG,f,0.1)
d.bO(B.fFL,B.aRg,B.iK)
d.bO(B.fyA,B.aRg,B.iK)
break A}if("car"===e){d.bG(B.aQW,B.fAH,f,0.4)
d.bG(B.fFV,B.fzL,f,0.4)
d.bG(B.fyF,B.fCa,B.pv,0.6)
d.bO(B.fGf,B.aR8,B.t5)
d.bO(B.fCC,B.aR8,B.t5)
for(v=0;v<2;++v){t=B.awp[v]
d.hB(new A.E(t,5,-18),new A.E(t,5,-21),5.5,D.ps,12)
d.hB(new A.E(t,5,18),new A.E(t,5,21),5.5,D.ps,12)}break A}if("road"===e||"roadturn"===e||"roadtee"===e||"roadcross"===e){A.hQk(d,e)
break A}if("house2"===e||"shop"===e||"hospital"===e||"firestation"===e||"school"===e){A.hIY(d,e,f)
break A}if("firetruck"===e){d.bG(B.aQX,B.fAY,D.bI,0.3)
d.bG(B.fzp,B.fyT,D.bI,0.3)
d.bG(B.fEg,B.fA4,B.pv,0.6)
d.bO(B.fFG,B.fGv,D.dA)
for(u=0;u<6;++u)d.bO(new A.E(-34+u*11,24,0),B.fDp,D.dA)
d.bO(B.fzq,B.aRr,D.d6)
d.bO(B.fEF,B.fBY,B.Wk)
for(v=0;v<3;++v){t=B.d6C[v]
d.hB(new A.E(t,6,-19),new A.E(t,6,-22.5),6,D.ps,12)
d.hB(new A.E(t,6,19),new A.E(t,6,22.5),6,D.ps,12)}break A}if("ambulance"===e){d.bG(B.J0,B.fAI,D.c,0.4)
d.bG(B.fzg,B.fz0,D.c,0.4)
d.bG(B.fC7,B.fF6,B.pv,0.6)
d.bO(B.fGX,B.aRF,D.bI)
d.bO(B.fDb,B.aRF,D.bI)
d.bO(B.aRY,B.fCL,D.bI)
d.bO(B.aRY,B.fBL,D.bI)
d.bO(B.fzj,B.aRr,D.ay)
for(v=0;v<2;++v){t=B.awp[v]
d.hB(new A.E(t,6,-19),new A.E(t,6,-22.5),6,D.ps,12)
d.hB(new A.E(t,6,19),new A.E(t,6,22.5),6,D.ps,12)}break A}if("dog"===e||"cat"===e||"cow"===e||"sheep"===e||"chicken"===e||"horse"===e){A.h9G(d,e,f,0)
break A}if("pond"===e){q=C.a([],x.z)
r=new A.jf(q)
r.b=d.b
r.f=d.f
r.r=!0
r.e5(B.fO,B.fFx,28,B.bf5,0.8,22)
D.d.v(d.a,A.he_(q,B.fBm,B.fO))
for(v=0;v<3;++v){q=B.cU1[v]
d.io(new A.E(q.a,1.2,q.b),2.6,B.acT,3,6)}break A}if("swing"===e){d.hB(B.fFQ,B.fz2,1.6,D.d9,8)
for(v=0;v<2;++v){t=E.a2g[v]
d.hB(new A.E(t,38,0),new A.E(t,0,14),1.4,D.d9,6)
d.hB(new A.E(t,38,0),new A.E(t,0,-14),1.4,D.d9,6)}for(v=0;v<2;++v){t=E.a2h[v]
d.hB(new A.E(t,38,0),new A.E(t,15,0),0.3,B.iK,4)}d.bO(B.J0,B.fH0,f)
break A}if("shed"===e){d.bG(B.J0,B.fzV,f,0.05)
d.bO(B.aR_,B.fA0,B.VQ)
d.bO(B.fFt,B.fFm,q)
break A}if("doghouse"===e){d.bG(B.fy4,B.fz1,f,0.05)
d.bO(B.fze,B.fGo,B.VQ)
d.bO(B.fEf,B.fH9,B.Kh)
break A}d.bO(B.zs,B.fye,f)}},
flV:function flV(d){this.a=d},
flK:function flK(){},
flT:function flT(d,e,f){this.a=d
this.b=e
this.c=f},
flL:function flL(){},
flM:function flM(){},
flN:function flN(){},
flO:function flO(d){this.a=d},
flQ:function flQ(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
flR:function flR(d,e){this.a=d
this.b=e},
flS:function flS(d){this.a=d},
flU:function flU(d){this.a=d},
flP:function flP(d){this.a=d},
ffR:function ffR(d){this.a=d},
ffS:function ffS(d){this.a=d},
ffQ:function ffQ(d){this.a=d},
foz:function foz(){},
foA:function foA(d){this.a=d},
foB:function foB(d){this.a=d},
f6G:function f6G(d,e){this.a=d
this.b=e},
fgp:function fgp(d,e){this.a=d
this.b=e},
fgb:function fgb(d){this.a=d},
fgc:function fgc(){},
fgd:function fgd(){},
fge:function fge(d){this.a=d},
fgh:function fgh(d){this.a=d},
fgi:function fgi(){},
fgj:function fgj(d){this.a=d},
fgk:function fgk(d){this.a=d},
fgl:function fgl(d){this.a=d},
fgm:function fgm(d){this.a=d},
fgn:function fgn(d){this.a=d},
fgo:function fgo(){},
fgf:function fgf(d){this.a=d},
fgg:function fgg(d){this.a=d},
h0f(){var w=x.S
return new A.bPJ(C.ew([72],w),C.aX(w),C.aX(w),C.aX(w))},
hV1(d){var w
A:{if(81===d){w="outlet"
break A}if(82===d){w="switch"
break A}if(84===d){w="gfci"
break A}if(86===d||87===d){w="ptrap"
break A}if(85===d){w="faucet"
break A}w=null
break A}return w},
afi(a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=C.a([],x.z),a0=new A.jf(d)
a0.b=70
a0.iy(B.fF_,B.fGm,B.bce,4)
a0.c=1
a0.b=91
w=new A.fm_(a0)
w.$3(B.fBK,B.fBb,15)
w.$4$alongX(B.fG1,B.fE0,11,!1)
w.$4$alongX(B.fA3,B.fBi,11,!1)
w.$4$alongX(B.fFM,B.fBX,6,!1)
w.$4$alongX(B.fAy,B.fE1,6,!1)
for(v=0;v<=12;++v)a0.aBA(new A.E(-12+v*2,8.4,0),B.fEy,B.W7,!1,0.05)
a0.c=2
a0.b=92
u=new A.flX(a0)
u.$2(B.cel,B.t7)
u.$2(B.d3Q,B.nF)
u.$2(B.d8d,B.nF)
t=new A.flW(a0)
t.$1(B.cNn)
t.$1(B.cSQ)
a0.c=3
a0.b=93
s=new A.flZ(a0)
s.$1(B.cMo)
s.$2$col(B.cKS,B.wL)
s.$2$col(B.cK6,B.wL)
s.$1(B.d0V)
a0.c=4
a0.b=0
a0.d=0.22
a0.iy(B.fBh,B.fDr,B.A4,4)
a0.iy(B.fDo,B.aRL,B.A4,4)
a0.iy(B.fBM,B.aRL,B.A4,4)
a0.iy(B.fCq,B.aRP,B.A4,3)
a0.iy(B.fHi,B.aRP,B.A4,3)
a0.d=1
a0.c=5
a0.e=0.3
a0.b=0
a0.qc(B.fFF,B.fBf,B.ba7,0.1,4)
a0.b=71
a0.bG(B.fF4,B.fEz,B.abF,0.5)
a0.bO(B.fH_,B.fCe,B.E1)
r=[72,73,74,75,76]
for(q=a1.d,p=a1.e,v=0;v<5;++v){o=D.o.F(v,2)
n=D.o.an(v,2)
m=r[v]
l=q.t(0,m)
k=p.t(0,m)
a0.b=m
m=9.55+o*0.5
j=5.7-n*0.5
a0.bG(new A.E(m,j,-7.5),B.fAZ,B.aeZ,0.3)
if(l)i=0
else i=k?-0.07:0.07
if(l)h=D.cb
else h=k?D.bn:D.bR
a0.bG(new A.E(m+0,j+i,-7.42),B.fC0,h,0.4)}a0.b=90
a0.bG(B.fE2,B.fA7,B.biX,0.1)
a0.bG(B.fG4,B.fBy,B.WE,0.1)
a0.bG(B.fHF,B.aS6,B.WE,0.1)
a0.bG(B.fBr,B.aS6,B.WE,0.1)
g=new A.flY(a0)
g.$3(81,B.fAD,a1.x?B.wW:B.Wp)
a0.b=81
a0.bO(B.fE3,B.aS_,B.Ea)
a0.bO(B.fCO,B.aS_,B.Ea)
g.$5$h$w(82,B.fH3,F.Wz,0.65,0.4)
a0.b=82
a0.bG(B.fFq,B.fA6,B.ack,0.4)
f=!q.t(0,72)
a0.b=83
a0.e5(B.fFh,B.aRA,0.5,B.bgM,0.4,14)
a0.b8I(B.fGD,0.3,f?A3.Ws:B.bbZ,0.7)
if(f){a0.b=0
a0.d=0.22
a0.iQ(B.aRq,1.5,B.VJ,4,10,0)
a0.d=1}a0.b=94
a0.bG(B.fGt,B.aS9,B.m6,0.1)
a0.bG(B.fEe,B.aS9,B.m6,0.1)
a0.bG(B.fH1,B.fBP,B.m6,0.1)
a0.qc(B.fDD,B.fGF,B.El,0.5,2)
a0.bG(B.fF1,B.fHB,B.E8,0.7)
a0.b=85
a0.jT(A.Ge(B.cW9,0.2,6),0.055,B.kD,!1,0.9,8)
a0.b=84
a0.bG(B.fGN,B.fFA,B.Wp,0.3)
a0.bO(B.fCx,B.fGZ,a1.y?B.acS:B.aeT)
a0.b=86
a0.jT(A.Ge(B.cNP,0.35,3),0.11,B.pk,!1,0.3,8)
a0.b=87
a0.e5(B.fD8,B.fF7,0.19,a1.c?B.Vv:B.beQ,0.3,8)
a0.b=88
a0.bG(B.fzJ,B.fB3,B.Ab,0.7)
a0.Kk(B.fEZ,B.aS0,0.72,B.Ab,0.55,0.7,16)
a0.e5(B.aS0,B.fDM,0.78,B.bgo,0.7,16)
a0.b=89
a0.e5(B.fGa,B.aRt,0.85,B.b5V,0.6,18)
a0.e5(B.aRt,B.fDq,0.5,B.b5W,0.5,12)
a0.bO(B.fEm,B.fHu,B.beK)
a0.b=95
for(p=a1.f,m=a1.r,v=0;v<3;++v){e=B.cuj[v]
if(m.t(0,v)){j=e.a
i=e.b
a0.bO(new A.E(j,i,-7.82),B.fFj,B.A4)
a0.bO(new A.E(j,i,-7.79),B.fDu,B.b8Q)}else if(p.t(0,v)){j=e.a
i=e.b
a0.bO(new A.E(j,i,-7.82),B.fyN,B.adW)
a0.bO(new A.E(j,i,-7.8),B.fEc,B.bjd)}}if(a1.w){a0.b=96
a0.e5(B.fDx,B.fD3,0.1,D.d9,0.7,8)}a0.e=0
a0.c=6
a0.b=0
a0.d=0.4
a0.bfG(B.aRl,B.aRZ,B.a7U,B.a7S,B.abM,B.fDY,!0)
a0.bfG(B.aRT,B.aS4,B.a7S,B.a7U,B.abM,B.fFo,!0)
a0.bgL(B.aRl,B.aS4,B.a7S,B.ac_)
a0.bgL(B.aRZ,B.aRT,B.a7U,B.ac_)
a0.d=1
p=q.t(0,72)?"This breaker has TRIPPED (it is in the middle, orange). The living room has no power. Tap it to flip it off and on again.":"This breaker is ON. The living room has power."
q=q.t(0,72)?"The light is off because the living room breaker has tripped.":"The ceiling light is on."
m=a1.b
j=m&&!a1.c?"Water is dripping from the slip nut here. Pick the wrench, then tap the nut to tighten it.":"The P-trap holds a water seal that blocks sewer gas. Tap Open lesson to build one."
m=m&&!a1.c?"This slip nut is loose and the trap is dripping. Pick the wrench and tap here to tighten it.":"The slip nut is tight."
return new A.zn(d,C.F([70,B.dXe,91,B.dWF,92,B.dWY,93,B.dX5,71,B.dXj,72,new A.d0("Living room breaker",p,B.fHm,3.5),73,B.dWQ,74,B.dX7,75,B.dWv,76,B.dX0,81,B.dX2,82,B.dWm,83,new A.d0("Ceiling light",q,B.aRA,7),84,B.dX8,85,B.dWx,86,new A.d0("P-trap under the sink",j,B.fEY,4.5),87,new A.d0("Slip nut (leaking?)",m,B.aRC,3.5),88,B.dWj,89,B.dX6,90,B.dXa,94,B.dWP,95,B.dXc,96,B.dWo],x.S,x.q),B.GQ,B.vH)},
hf8(d,e){var w,v,u,t,s,r,q,p=C.a([],x.z),o=new A.jf(p)
o.c=5
o.e=0.8
if(d.w)for(w=e*1.5,v=0;v<6;++v){u=D.k.F(w+v/6,1)
o.iQ(new A.E(3.4+Math.sin(v*2)*0.12,3.3-u*u*2.8,-7.7),0.05,D.Kg,3,6,0.9)}if(d.as){u=D.k.F(e*1.1,1)
o.iQ(new A.E(3,3.9-u*u*0.7,-6.95),0.05,B.VG,3,6,0.9)}if(d.Q)for(w=e*1.6,v=0;v<6;++v){u=D.k.F(w+v/6,1)
o.iQ(new A.E(8.2+Math.sin(v*1.7)*0.15,2.2-u*1.5,-7.2),0.05,B.VG,3,6,0.9)}if(d.at){o.d=0.55
o.bG(B.fBp,B.fCu,B.bgB,0.8)
o.d=1}if(d.x)for(w=e*2,t=e*6,v=0;v<8;++v){u=D.k.F(w+v*0.13,1)
s=v*2.4+t
r=Math.cos(s)
s=Math.sin(s)
q=C.aq(E.WG,E.WL,1-u)
q.toString
o.iQ(new A.E(-3.2+r*u*0.7,1.3+s*u*0.7,-7.6+u*0.3),0.05,q,3,5,0)}if(d.z&&!d.d.t(0,72)){o.b=0
o.d=D.k.D((Math.sin(e*17)+Math.sin(e*29)+2)/4*0.5,0,0.6)
o.iQ(B.aRq,1.5,B.VJ,4,10,0)
o.d=1}if(d.b&&!d.c){for(w=e*1.3,v=0;v<5;++v){u=D.k.F(w+v*0.2,1)
o.iQ(new A.E(3.05,1.45-u*u*1.4,-6.95),0.05,B.KV,3,6,0.9)}o.d=0.5
o.bG(B.fBa,new A.E(0.7+0.3*Math.sin(e),0.02,0.5),B.KV,0.9)
o.d=1}return p},
bPJ:function bPJ(d,e,f,g){var _=this
_.a=5
_.b=!0
_.c=!1
_.d=d
_.e=e
_.f=f
_.r=g
_.at=_.as=_.Q=_.z=_.y=_.x=_.w=!1},
fm_:function fm_(d){this.a=d},
flX:function flX(d){this.a=d},
flW:function flW(d){this.a=d},
flZ:function flZ(d){this.a=d},
flY:function flY(d){this.a=d},
m7(d,e,f,g){var w
try{G.dF(d,"",e,0,f,g)}catch(w){}},
y7(){A.m7(880,80,0.25,"tri")
C.bN(W.afG,new A.fmU(),x.H)},
hwV(){return new A.MM(null)},
X3(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s){return new A.b53(q,e,p,o,h,f,k,l,g,i,r,s,j,m,n,d,null)},
Qn(d,e,f,g,h){var w=null,v=g?e.j(0.25):D.w.j(0.5),u=C.m(18),t=C.I(g?e:D.b2,D.q,1),s=x.p,r=C.a([],s)
D.d.v(r,C.a([C.W(f,g?e:D.ad,w,w,w,16),D.eb],s))
r.push(C.d(d,w,w,w,w,w,w,C.l(w,w,g?e:D.ad,w,w,w,w,w,w,w,w,12,w,w,D.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w))
return C.aE(w,C.p(w,C.A(r,D.m,w,D.e,D.Q,0,w,w),D.f,w,w,new C.o(v,w,t,u,w,w,D.n),w,w,w,w,D.h6,w,w,w),D.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,h,w,w,w,w,w,w,!1,D.a8)},
y6(d,e,f,g){var w=null,v=f==null,u=v?D.dp:g.j(0.9),t=C.m(14),s=C.W(e,v?D.c_:D.w,w,w,w,18)
return C.D(C.aE(w,C.p(w,C.A(C.a([s,D.bp,new C.dm(1,D.ci,C.d(d,w,w,w,w,w,w,C.l(w,w,v?D.c_:D.w,w,w,w,w,w,w,w,w,12.5,w,w,D.u,w,w,!0,w,w,w,w,w,w,w,w),D.L,w,w),w)],x.p),D.m,w,D.bb,D.j,0,w,w),D.f,w,w,new C.o(u,w,w,t,w,w,D.n),w,w,w,w,D.v3,w,w,w),D.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,!1,D.a8),1)},
fD9(d,e,f,g){return C.bX(E.mT,null,new A.fDb(e,g,f),d,!0,!0,!0,D.lm,!1,!1,x.H)},
fmU:function fmU(){},
Fg:function Fg(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
MM:function MM(d){this.a=d},
bhQ:function bhQ(){this.d=!1
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
b53:function b53(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){var _=this
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
_.a=t},
cpA:function cpA(d){this.a=d},
cpB:function cpB(d){this.a=d},
fDb:function fDb(d,e,f){this.a=d
this.b=e
this.c=f},
fDa:function fDa(){},
AW:function AW(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
bRO:function bRO(d){this.a=d},
GV:function GV(d,e,f){this.c=d
this.d=e
this.a=f},
ayi:function ayi(){var _=this
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
a8s:function a8s(d,e){this.c=d
this.a=e},
aEd:function aEd(){var _=this
_.f=_.e=_.d=$
_.r=""
_.w=0
_.x=null
_.y=!1
_.c=_.a=_.z=null},
eLW:function eLW(d,e,f){this.a=d
this.b=e
this.c=f},
eLX:function eLX(d){this.a=d},
eLV:function eLV(d){this.a=d},
eLP:function eLP(d){this.a=d},
eLQ:function eLQ(d,e){this.a=d
this.b=e},
eLR:function eLR(d,e){this.a=d
this.b=e},
eLS:function eLS(d,e){this.a=d
this.b=e},
eLT:function eLT(d){this.a=d},
eLU:function eLU(d,e){this.a=d
this.b=e},
eM0:function eM0(){},
eM4:function eM4(d,e){this.a=d
this.b=e},
eM1:function eM1(d){this.a=d},
eM2:function eM2(d,e){this.a=d
this.b=e},
eM_:function eM_(d,e){this.a=d
this.b=e},
eM3:function eM3(d){this.a=d},
eLZ:function eLZ(d){this.a=d},
eLY:function eLY(){},
a3T:function a3T(d,e){this.c=d
this.a=e},
ayx:function ayx(){var _=this
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
azp:function azp(d){this.a=d},
azq:function azq(d){var _=this
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
a5Z:function a5Z(d){this.a=d},
c5t:function c5t(d){this.a=d},
fQa(){var w=x.N
return new A.cgg(C.aX(w),C.F(["n1",!1,"n2",!1],w,x.K),C.T(x.S,w))},
i4D(d,e,f){var w,v
if(!f.c.t(0,e)){w=f.d
return e==="hot"?"The red (hot) hose goes on the LEFT side only. "+w:"The blue (cold) hose goes on the RIGHT side only. "+w}w=d.e
v=f.a
if(w.h(0,v)!=null)return"That connection already has a hose."
w.n(0,v,e)
return null},
fCy(){var w,v,u=C.a([B.aRh,B.fCZ],x.o)
for(w=1;w<=12;++w){v=3.141592653589793+3.141592653589793*w/12
u.push(new A.E(3+3*Math.cos(v),0.2+3*Math.sin(v),0))}D.d.v(u,A.Ge(B.cXn,1,6))
return u},
bzy(d){var w,v,u,t,s="trap",r=C.a([],x.z),q=new A.jf(r)
q.b=49
q.qc(B.fyI,B.fzB,B.m6,0.1,2)
q.qc(B.fHg,B.fyK,B.m6,0.1,2)
q.b=47
q.iy(B.fDX,B.fzC,B.uR,3)
q.iy(B.fzd,B.fyL,B.uR,3)
q.b=46
q.qc(B.fAb,B.fEC,B.El,0.5,3)
q.baG(B.fFE,B.J0,6.5,B.E8,!0,0.7,20)
q.e5(B.fEV,B.fCI,1.5,B.kD,0.85,14)
q.b=48
q.a2Z(B.a7V,B.fBJ,0.92,B.pk,!1,!0,0.3,14)
q.cRM(B.a7V,B.fGJ,1,0.72,B.pk,0.3)
w=new A.fmA(d,q)
w.$5(41,B.a1B,B.kD,0.85,"tail")
w.$5(42,A.fCy(),B.pk,0.3,s)
w.$5(43,B.a2t,B.pk,0.3,"arm")
w=new A.fmz(d,q)
v=d.a
w.$6(44,"n1",B.a7R,B.fP,B.fBV,v.t(0,"tail")&&v.t(0,s))
w.$6(45,"n2",B.a7T,B.j_,B.fFz,v.t(0,s)&&v.t(0,"arm"))
if(v.t(0,s)){q.b=0
q.d=0.55
q.e=0.4
u=A.fCy()
w=C.U(u).k("a2<1>")
t=C.B(new C.a2(u,new A.fmy(),w),w.k("J.E"))
if(t.length>1)q.aH9(t,0.4092,B.biY,!1,!0,0.6,8)
q.d=1
q.e=0}return new A.zn(r,C.F([41,B.dWz,42,B.dWB,43,B.dX4,44,B.dWT,45,B.dXg,46,B.dWH,47,B.dWN,48,B.dWh,49,B.dWD],x.S,x.q),B.GQ,B.vH)},
i2C(d,e){var w,v,u,t,s,r,q,p=C.a([],x.z),o=new A.jf(p),n=d.d
if(n.length!==0){w=n==="n1"?B.fHw:B.fGj
for(n=e*1.4,v=w.a+0,u=w.b,t=w.c+0,s=0;s<5;++s){r=D.k.F(n+s*0.2,1)
o.iQ(new A.E(v,u+(-r*6*r-r*1.5),t),0.22*(1-r*0.3),B.KV,3,6,0.9)}}else if(d.c){n=x.x
v=C.B(B.a1B,n)
u=A.fCy()
D.d.v(v,C.dc(u,1,null,C.U(u).c))
D.d.v(v,C.dc(B.a2t,1,null,n))
for(n=e*0.45,s=0;s<18;++s){r=D.k.F(n+s/18,1)
q=D.o.D(D.k.bu(r*(v.length-1)),0,v.length-2)
u=v.length
o.iQ(A.zG(v[q],v[q+1],r*(u-1)-q),0.38,B.bio,3,6,0.9)}for(n=e*2.2,s=0;s<6;++s)o.iQ(new A.E(0,14-D.k.F(n+s/6,1)*5.4,0),0.3,B.VG,3,6,0.9)}return p},
afv(d){switch(d){case 61:return B.fyH
case 62:return B.fGh
case 63:return B.fDl
default:return B.fDc}},
fUM(d){var w=d==="hot",v=A.afv(w?61:62),u=A.afv(w?63:64),t=w?-1:1
return A.agI(C.a([v,v.ad(0,new A.E(t*0.6,2.2,1.2)),A.zG(v,u,0.5).ad(0,new A.E(t*1.4,0,2.6)),u.ad(0,new A.E(-t*0.2,-2,1)),u],x.o),6)},
aNs(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=C.a([],x.z),e=new A.jf(f)
e.b=67
e.iy(B.fyE,B.fzr,B.uR,3)
e.b=66
e.qc(B.fCY,B.fGI,B.El,0.5,3)
e.hB(B.fFi,B.fE7,5.5,E.Ed,16)
e.b=65
e.e5(B.fGu,B.aRS,3.4,B.kD,0.9,20)
e.jT(A.Ge(B.d1u,1.4,6),0.5,B.kD,!0,0.9,12)
for(w=0;w<2;++w){v=B.cY4[w]
u=v*1.2
e.e5(new A.E(u,15.5,-3.6),new A.E(u,17.7,-3.6),0.38,B.kD,0.9,10)
t=v<0?B.t7:B.nF
e.e5(new A.E(u,17.7,-3.6),new A.E(u,18.6,-3.6),0.6,t,0.6,12)}for(u=[B.egz,B.eco],w=0;w<2;++w){t=u[w]
v=t.b
e.b=t.a
e.e5(new A.E(v,15.3,-3.6),new A.E(v,11.4,-3.6),0.45,B.kD,0.9,10)
e.e5(new A.E(v,11.4,-3.6),new A.E(v,10.7,-3.6),0.3,B.bet,0.6,8)
e.yV(new A.E(v,11.3,-3.6),new A.E(v,11.9,-3.6),0.78,0.48,B.bgm,0.7,8)}for(u=[B.exY,B.ezH],w=0;w<2;++w){t=u[w]
v=t.b
e.b=t.a
e.e5(new A.E(v,-1.5,-6),new A.E(v,-1.5,-3.6),0.4,B.K7,0.7,12)
e.e5(new A.E(v,-1.5,-4.4),new A.E(v,0.7,-4.4),0.78,B.rX,0.8,12)
e.e5(new A.E(v,0.7,-4.4),new A.E(v,1.5,-3.6),0.38,B.rX,0.8,10)
e.e5(new A.E(v,-0.2,-4.4),new A.E(v,-0.2,-3.1),0.2,B.abo,0.7,8)
e.e5(new A.E(v,-0.2,-3.1),new A.E(v,-0.2,-2.8),0.95,t.c,0.5,12)
e.yV(new A.E(v,1.2,-3.6),new A.E(v,1.9,-3.6),0.78,0.4,B.rX,0.8,8)}for(u=x.o,w=0;w<2;++w){s=B.d3V[w]
t=s==="hot"
r=t?B.cvd:B.cvq
q=C.U(r).k("a2<1>")
p=C.B(new C.a2(r,new A.flJ(d,s),q),q.k("J.E"))
e.b=t?68:69
o=t?B.t7:B.nF
t=p.length
if(t===2){n=A.fUM(s)
e.jT(n,0.34,B.KM,!1,0.7,8)
m=n.length/2|0
e.jT(C.a([n[m-1],n[m],n[m+1]],u),0.4,o,!1,0.4,8)
for(t=r.length,l=0;l<t;++l){k=A.afv(r[l])
q=k.a+0
j=k.b
i=k.c+0
e.yV(new A.E(q,j+-0.2,i),new A.E(q,j+0.6,i),0.62,0.3,B.rX,0.8,8)}}else if(t===1){k=A.afv(D.d.gK(p))
h=D.d.gK(p)===D.d.gK(r)?1:-1
t=k.a+0
q=k.b
j=k.c
e.jT(C.a([k,new A.E(t,q+h*1.4,j+1),new A.E(t,q+h*3,j+2.4)],u),0.34,B.KM,!1,0.7,8)
j+=0
e.yV(new A.E(t,q+-0.2,j),new A.E(t,q+0.6,j),0.62,0.3,B.rX,0.8,8)}}if(d.r){e.b=0
e.d=0.5
for(u=d.e,w=0;w<4;++w){g=B.a2o[w]
t=g.a
if(u.h(0,t)!=null)continue
t=A.afv(t)
q=g.c.t(0,"hot")?B.t7:B.nF
e.iQ(new A.E(t.a+0,t.b+0,t.c+0.9),0.65,q,4,8,0.1)}e.d=1}return new A.zn(f,C.F([61,B.dWq,62,B.dWs,63,B.dWl,64,B.dWt,65,B.dWO,66,B.dWK,67,B.dWi,68,B.dXk,69,B.dWR],x.S,x.q),B.GQ,B.vH)},
hUz(d,e){var w,v,u,t,s,r,q,p,o,n=C.a([],x.z),m=new A.jf(n)
if(!d.f)return n
w=d.e
v=w.h(0,61)==="hot"&&w.h(0,63)==="hot"
u=w.h(0,62)==="cold"&&w.h(0,64)==="cold"
t=new A.fo1(e,m)
if(v){s=A.fUM("hot")
for(r=e*0.5,q=0;q<10;++q){p=D.k.F(r+q/10,1)
o=D.o.D(D.k.bu(p*(s.length-1)),0,s.length-2)
m.iQ(A.zG(s[o],s[o+1],p*(s.length-1)-o),0.2,D.Kg,3,6,0.9)}}else if(w.h(0,61)==null)t.$2(61,D.Kg)
if(u){s=A.fUM("cold")
for(w=e*0.5,q=0;q<10;++q){p=D.k.F(w+q/10,1)
o=D.o.D(D.k.bu(p*(s.length-1)),0,s.length-2)
m.iQ(A.zG(s[o],s[o+1],p*(s.length-1)-o),0.2,B.Wc,3,6,0.9)}}else if(w.h(0,62)==null)t.$2(62,B.Wc)
if(v&&u)for(w=e*2,q=0;q<8;++q){p=D.k.F(w+q/8,1)
r=C.aq(B.bit,B.Wc,0.5)
r.toString
m.iQ(new A.E(0,21-p*6.5,1.6),0.26,r,3,6,0.9)}return n},
fo_(d){return D.d.d9(B.a2o,new A.fo0(d))},
cgg:function cgg(d,e,f){var _=this
_.a=d
_.b=e
_.c=!1
_.d=""
_.e=f
_.r=_.f=!1},
Er:function Er(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fmA:function fmA(d,e){this.a=d
this.b=e},
fmz:function fmz(d,e){this.a=d
this.b=e},
fmy:function fmy(){},
flJ:function flJ(d,e){this.a=d
this.b=e},
fo1:function fo1(d,e){this.a=d
this.b=e},
fo0:function fo0(d){this.a=d},
fQ9(d,e,f){var w=x.N
w=new A.cg6(e,d,C.aX(w),C.T(w,x.S),C.aX(w))
w.bvY(d,e,f)
return w},
heu(b7,b8,b9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2=C.a([],x.z),b3=new A.jf(b2),b4=C.T(x.S,x.q),b5=C.a([],x.E),b6=b7.c
b6===$&&C.c()
w=b6.a==="bathroom"
v=w?28:0
b3.b=9199
b3.iy(B.fFU,B.fHe,B.b8t,4)
b3.iy(B.fEB,B.fGe,B.VE,4)
b3.iy(new A.E(v+19.8+0.6,24,16),B.fCH,B.uR,2)
b4.n(0,9199,B.dWC)
b3.b=9198
b3.bG(new A.E(v,0.6,10),B.fGs,B.m6,0.1)
b3.bG(new A.E(v,29.4,18.6),B.fCt,B.m6,0.1)
b3.bG(new A.E(v-19.4,13.6,10.5),B.fH2,B.m6,0.1)
for(u=[B.eCu,B.eCq,B.eBp,B.eBm],t=0;t<4;++t){s=u[t].a
b3.bG(new A.E(v+s[0],33,s[1]),new A.E(s[2],2.4,s[3]),B.El,0.5)}b3.a2Z(new A.E(v,27,8),new A.E(v,34.3,8),8,B.aeH,!1,!0,0.7,20)
b3.e5(new A.E(v,27,8),new A.E(v,27.2,8),8,B.baU,0.5,20)
b3.hB(new A.E(v,27.1,8),new A.E(v,27.3,8),1.4,B.iK,12)
b3.a2Z(new A.E(v+15,23.6,8),new A.E(v+19.4,23.6,8),0.92,B.pk,!1,!0,0.3,12)
b4.n(0,9198,B.dX1)
b3.b=9400
b3.e5(new A.E(-56,18,0),new A.E(-56,18,6),1.5,B.rX,0.8,12)
u=b7.r?B.nF:D.bn
b3.e5(new A.E(-57,18,6),new A.E(-55,18,6.5),4,u,0.5,14)
b3.e5(new A.E(-56,16,0),new A.E(-56,20,0),1,B.K7,0.7,10)
u=b7.r?"The water is ON. Turn it OFF with your hand before you cut into any pipe, and turn it ON to test your work.":"The water is OFF. Turn it ON to test your work."
b4.n(0,9400,new A.d0("Main water valve",u,new A.E(-56,18,4),22))
u=b7.r
s=u?"MAIN WATER: ON":"MAIN WATER: OFF"
u=u?D.dS:D.bn
b5.push(new A.t1(new A.E(-56,24,6),s,u))
r=new A.fmx(b3)
u=v-8
r.$1(u)
s=v+8
r.$1(s)
if(w)r.$1(-40)
q=new A.E(v,21,8)
p=new A.fmv(q)
o=new A.fmp(b3,b7)
n=new A.fmq(b3,b7)
m=new A.fmw(b7,b4,b9,b8,b5)
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
b3.e5(a4,new A.E(-30,0.8999999999999999,14),5.5,B.pk,0.4,18)
b3.yV(new A.E(-30,0.8,14),new A.E(-30,1.2,14),5.5,3.2,B.rX,0.8,18)}else n.$3(f,new A.E(-30,0.8,14),B.fyh)
m.$3(g,a4,"Flange spot")
break
case"wax":a4=new A.E(-30,1.2,14)
if(e){b3.b=a3
b3.yV(a4,new A.E(-30,2.3,14),4.2,2.4,B.bjl,0.2,18)}else n.$3(f,new A.E(-30,1.7,14),B.fEM)
m.$3(g,a4,"Wax ring spot")
break
case"toilet":if(e){b3.b=a3
b3.Kk(new A.E(-30,0.5,14),new A.E(-30,16,14),8.5,B.Ab,6,0.8,20)
b3.e5(new A.E(-30,16,14),new A.E(-30,17,14),9.5,B.KS,0.8,20)
b3.bG(new A.E(-30,22,4.5),B.aR9,B.Ab,0.8)
b3.bG(new A.E(-30,29.2,4.5),B.fBk,B.KS,0.8)}else{b3.b=a3
b3.d=0.32
b3.hB(new A.E(-30,0.5,14),new A.E(-30,17,14),8.5,D.b1,16)
b3.bO(new A.E(-30,22,4.5),B.aR9,D.b1)
b3.d=1}m.$3(g,new A.E(-30,12,12),"Toilet spot")
break
case"bolts":if(e){for(f=9200+a2*2,a5=0;a5<2;++a5){a6=B.aws[a5]
b3.b=f+(a6<0?0:1)
d=-30+a6
b3.e5(new A.E(d,0.5,17),new A.E(d,3.6,17),0.45,B.E8,0.8,8)
a0=a1?D.ct:B.E8
b3.e5(new A.E(d,3.4,17),new A.E(d,4.6,17),1.2,a0,0.8,6)}f=a1?"The nuts are loose. Tighten them with the wrench, a little at a time so the porcelain does not crack.":"The toilet is bolted down."
b4.n(0,a3,new A.d0(g.c,f,new A.E(-30,3,17),20))}else for(a5=0;a5<2;++a5){a6=B.aws[a5]
b3.b=a3
b3.d=0.4
f=-30+a6
b3.hB(new A.E(f,0.5,17),new A.E(f,4.6,17),1.2,D.b1,8)
b3.d=1}m.$3(g,new A.E(-30,3,17),"Bolts")
break
case"tvalve":A.fUf(b3,a3,new A.E(-40,8,1.6),e,B.nF,new A.fmm(n,g,-30))
m.$3(g,new A.E(-40,8,2),"Valve")
break
case"those":if(e){b3.b=a3
b3.jT(A.agI(C.a([new A.E(-40,10,1.6),new A.E(-42,14,3.5),new A.E(-36,17,3.6),new A.E(-32,21,2.5)],h),6),0.55,B.KM,!1,0.7,8)
b3.jT(C.a([new A.E(-36.8,15.5,3.6),new A.E(-35,16.4,3.6)],h),0.62,B.nF,!1,0.4,8)
if(a1)b3.hB(new A.E(-40,10,1.6),new A.E(-40,11.2,1.6),0.9,D.ct,8)}else o.$3$r(f,A.agI(C.a([new A.E(-40,10,1.6),new A.E(-42,14,3.5),new A.E(-36,17,3.6),new A.E(-32,21,2.5)],h),6),0.9)
m.$3(g,new A.E(-36,15,3),"Toilet hose")
break
case"faucet":if(e){b3.b=a3
b3.e5(new A.E(v,34.2,8),new A.E(v,34.6,8),3.6,B.kD,0.9,20)
b3.jT(A.Ge(C.a([new A.E(v,34.6,8),new A.E(v,40,8),new A.E(v,43,10),new A.E(v,43,14),new A.E(v,41.2,14.6)],h),1.4,6),0.5,B.kD,!0,0.9,10)
for(a5=0;a5<2;++a5){a6=E.a2h[a5]
f=v+a6
b3.e5(new A.E(f,34.6,8),new A.E(f,36.6,8),0.5,B.kD,0.9,8)
d=a6<0?B.t7:B.nF
b3.e5(new A.E(f,36.6,8),new A.E(f,37.6,8),0.8,d,0.6,10)}for(a5=0;a5<2;++a5){f=v+B.d6D[a5]
b3.e5(new A.E(f,34,8),new A.E(f,28.4,8),0.45,B.kD,0.9,8)}}else n.$3(f,new A.E(v,38,9),B.fyf)
m.$3(g,new A.E(v,38,8),"Faucet spot")
break
case"vhot":A.fUf(b3,a3,new A.E(u,8,1.6),e,B.t7,new A.fmn(n,g,v))
m.$3(g,new A.E(u,8,2),"Hot valve")
break
case"vcold":A.fUf(b3,a3,new A.E(s,8,1.6),e,B.nF,new A.fmo(n,g,v))
m.$3(g,new A.E(s,8,2),"Cold valve")
break
case"hhot":case"hcold":a7=f==="hhot"
a8=a7?-1:1
d=v+a8*3
a9=A.agI(C.a([new A.E(v+a8*8,10.5,1.8),new A.E(v+a8*9,16,3.5),new A.E(v+a8*6,22,4.2),new A.E(d,27.5,6),new A.E(d,28.6,8)],h),6)
if(e){b3.b=a3
b3.jT(a9,0.5,B.KM,!1,0.7,8)
b0=a9.length/2|0
f=C.a([a9[b0-1],a9[b0],a9[b0+1]],h)
b3.jT(f,0.58,a7?B.t7:B.nF,!1,0.4,8)
if(a1){f=D.d.gK(a9)
d=D.d.gK(a9)
b3.hB(f,new A.E(d.a+0,d.b+1.4,d.c+0),0.9,D.ct,8)
d=D.d.gal(a9)
b3.hB(new A.E(d.a,d.b-1.4,d.c),D.d.gal(a9),0.9,D.ct,8)}}else o.$3$r(f,a9,0.9)
f=a9[a9.length/2|0]
m.$3(g,f,a7?"Hot hose":"Cold hose")
break
case"tail":case"trap":case"arm":d=f==="tail"
if(d)a0=B.a1B
else a0=f==="trap"?A.fCy():B.a2t
b1=p.$1(a0)
if(e){b3.b=a3
a0=d?B.kD:B.pk
b3.a5A(b1,0.66,a0,!1,!0,!0,d?0.85:0.3,12)}else o.$3$r(f,b1,0.78)
a0=J.a5(b1)
a0=a0.h(b1,a0.gM(b1)/2|0)
if(d)f="Tailpiece"
else f=f==="trap"?"P-trap":"Trap arm"
m.$3(g,a0,f)
break}}b6=new A.fmt(l,b7,b3,b4)
b6.$4("trap",q.ad(0,B.a7R),B.fP,0)
b6.$4("arm",q.ad(0,B.a7T),B.j_,1)
return new A.zn(b2,b4,b5,B.vH)},
fUf(d,e,f,g,h,i){if(!g){i.$0()
return}d.b=e
d.e5(f.ad(0,B.fEN),f.ad(0,B.aRR),0.9,B.rX,0.8,12)
d.e5(f.ad(0,B.aRR),f.ad(0,B.fCo),0.45,B.rX,0.8,10)
d.e5(f.ad(0,B.aRX),f.ad(0,B.aSa),0.3,B.abo,0.7,8)
d.e5(f.ad(0,B.aSa),f.ad(0,B.fGO),1.2,h,0.5,12)},
i2w(a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=C.a([],x.z),e=new A.jf(f),d=a0.x
if(d.a===0)return f
w=a0.c
w===$&&C.c()
v=new A.fCn(w.a==="bathroom"?28:0,-30)
for(d=C.ec(d,d.r,C.a3(d).c),u=d.$ti.c,t=a0.e;d.C();){s=d.d
if(s==null)s=u.a(s)
r=v.$1(s)
q=D.d.iC(w.c,new A.fCm(s)).b==="valve"||!t.t(0,s)
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
e.iQ(new A.E(s+l*k*m,p+(k*j-k*k*i),o+(1.5+k*h)),g,B.KV,3,6,0.9);++n}}return f},
nc:function nc(d,e,f,g,h,i,j){var _=this
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
fmx:function fmx(d){this.a=d},
fmv:function fmv(d){this.a=d},
fmp:function fmp(d,e){this.a=d
this.b=e},
fms:function fms(d){this.a=d},
fmq:function fmq(d,e){this.a=d
this.b=e},
fmr:function fmr(d){this.a=d},
fmw:function fmw(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fmm:function fmm(d,e,f){this.a=d
this.b=e
this.c=f},
fmn:function fmn(d,e,f){this.a=d
this.b=e
this.c=f},
fmo:function fmo(d,e,f){this.a=d
this.b=e
this.c=f},
fmt:function fmt(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fmu:function fmu(d){this.a=d},
fCn:function fCn(d,e){this.a=d
this.b=e},
fCm:function fCm(d){this.a=d},
V9:function V9(d,e){this.d=d
this.a=e},
aCW:function aCW(d,e){var _=this
_.e=_.d=$
_.f=d
_.r=$
_.w=e
_.x=""
_.y=0
_.z=null
_.as=_.Q=!1
_.c=_.a=_.at=null},
efP:function efP(d,e,f){this.a=d
this.b=e
this.c=f},
efQ:function efQ(d){this.a=d},
efO:function efO(d){this.a=d},
efI:function efI(d){this.a=d},
efR:function efR(d){this.a=d},
efA:function efA(d,e){this.a=d
this.b=e},
efB:function efB(d,e){this.a=d
this.b=e},
efC:function efC(d){this.a=d},
efH:function efH(d){this.a=d},
efF:function efF(d){this.a=d},
efG:function efG(d,e){this.a=d
this.b=e},
efN:function efN(d){this.a=d},
efE:function efE(d,e,f){this.a=d
this.b=e
this.c=f},
efD:function efD(d,e,f){this.a=d
this.b=e
this.c=f},
efS:function efS(d){this.a=d},
efW:function efW(d,e){this.a=d
this.b=e},
efU:function efU(){},
efT:function efT(d){this.a=d},
efV:function efV(d,e){this.a=d
this.b=e},
efM:function efM(d){this.a=d},
efK:function efK(d,e){this.a=d
this.b=e},
efJ:function efJ(d,e){this.a=d
this.b=e},
efL:function efL(d,e){this.a=d
this.b=e},
l0(d){return D.d.iC(B.tW,new A.fKD(d))},
fQz(d,e,f,g){var w=x.S,v=x.N
w=new A.b3z(g,f,C.T(w,v),C.aX(w),C.aX(w),C.T(w,x.cH),C.a([new A.WQ(),new A.WQ()],x.gD),C.T(w,x.W),C.aX(w),C.T(w,v),C.aX(w),C.a([],x.s))
w.cg9(d,e)
return w},
hCL(d){var w
A:{if("tv"===d){w="The TV"
break A}if("lamp"===d){w="The lamp"
break A}if("toaster"===d){w="The toaster"
break A}w="The hair dryer"
break A}return w},
yr:function yr(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fKD:function fKD(d){this.a=d},
pI:function pI(d,e,f){this.a=d
this.b=e
this.c=f},
WQ:function WQ(){var _=this
_.a=!1
_.b=0
_.c=!0
_.d=!1},
atU:function atU(d,e){var _=this
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
b3z:function b3z(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
fPs(d,e,f){return new A.Vc(e,f,d,null)},
kW:function kW(d,e,f){this.a=d
this.b=e
this.c=f},
Vc:function Vc(d,e,f,g){var _=this
_.d=d
_.e=e
_.f=f
_.a=g},
aD2:function aD2(d,e,f){var _=this
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
ekb:function ekb(d,e,f){this.a=d
this.b=e
this.c=f},
ekc:function ekc(d){this.a=d},
eka:function eka(d){this.a=d},
ejq:function ejq(d){this.a=d},
ejr:function ejr(d){this.a=d},
ejp:function ejp(d){this.a=d},
ejs:function ejs(d){this.a=d},
ejt:function ejt(d){this.a=d},
ejB:function ejB(d){this.a=d},
eju:function eju(d){this.a=d},
ejT:function ejT(d,e){this.a=d
this.b=e},
ejC:function ejC(d){this.a=d},
ek7:function ek7(d){this.a=d},
ek8:function ek8(d){this.a=d},
ek9:function ek9(d,e){this.a=d
this.b=e},
ek5:function ek5(d){this.a=d},
ek6:function ek6(d,e){this.a=d
this.b=e},
ek4:function ek4(d){this.a=d},
ek0:function ek0(d){this.a=d},
ek1:function ek1(d,e,f){this.a=d
this.b=e
this.c=f},
ek2:function ek2(d){this.a=d},
ek3:function ek3(d,e,f){this.a=d
this.b=e
this.c=f},
ekd:function ekd(d,e){this.a=d
this.b=e},
ejA:function ejA(d){this.a=d},
ejy:function ejy(d){this.a=d},
ejz:function ejz(d,e){this.a=d
this.b=e},
ejx:function ejx(d){this.a=d},
ejv:function ejv(d){this.a=d},
ejw:function ejw(d,e){this.a=d
this.b=e},
ejD:function ejD(d,e){this.a=d
this.b=e},
ejR:function ejR(){},
ejS:function ejS(){},
ejE:function ejE(d){this.a=d},
ejF:function ejF(d){this.a=d},
ejG:function ejG(d){this.a=d},
ejJ:function ejJ(){},
ejK:function ejK(){},
ejL:function ejL(){},
ejM:function ejM(){},
ejN:function ejN(){},
ejO:function ejO(d){this.a=d},
ejP:function ejP(){},
ejQ:function ejQ(d){this.a=d},
ejH:function ejH(d){this.a=d},
ejI:function ejI(){},
eku:function eku(d,e){this.a=d
this.b=e},
ekw:function ekw(d){this.a=d},
eki:function eki(d){this.a=d},
ekv:function ekv(d){this.a=d},
ekl:function ekl(d){this.a=d},
ekm:function ekm(d,e){this.a=d
this.b=e},
ekk:function ekk(d,e){this.a=d
this.b=e},
ekn:function ekn(d,e){this.a=d
this.b=e},
ekj:function ekj(d,e){this.a=d
this.b=e},
ekx:function ekx(d,e){this.a=d
this.b=e},
ekh:function ekh(d,e){this.a=d
this.b=e},
eky:function eky(d){this.a=d},
ekg:function ekg(d){this.a=d},
ekz:function ekz(d,e){this.a=d
this.b=e},
ekf:function ekf(d,e){this.a=d
this.b=e},
ekA:function ekA(d){this.a=d},
ekB:function ekB(d){this.a=d},
ekC:function ekC(d,e,f){this.a=d
this.b=e
this.c=f},
eke:function eke(d,e,f){this.a=d
this.b=e
this.c=f},
eko:function eko(d){this.a=d},
ekp:function ekp(d,e){this.a=d
this.b=e},
ekq:function ekq(d){this.a=d},
ekr:function ekr(d){this.a=d},
eks:function eks(d){this.a=d},
ekt:function ekt(d){this.a=d},
ek_:function ek_(d){this.a=d},
ejZ:function ejZ(d){this.a=d},
ejW:function ejW(d,e){this.a=d
this.b=e},
ejU:function ejU(){},
ejV:function ejV(){},
ejX:function ejX(d,e){this.a=d
this.b=e},
ejY:function ejY(d,e){this.a=d
this.b=e},
a1U(d,e){var w=d.d,v=e.a,u=e.c,t=e.b,s=w.a,r=w.b
w=w.c
return d.c?new A.E(s+v,r-u,w+t):new A.E(s+v,r+t,w+u)},
fTy(d,e,f){var w,v,u,t,s,r=d.a,q=e.d,p=e.c?A.tR(r,1.5707963267948966,0,q):A.tR(r,0,0,q)
r=C.a([],x.z)
for(q=p.length,w=0;w<p.length;p.length===q||(0,C.L)(p),++w){v=p[w]
u=v.d
u=u===0?0:f.$1(u)
r.push(new A.nd(v.a,v.b,v.c,u,v.e,v.f,v.r,v.w,v.x,2,0))}q=C.T(x.S,x.q)
for(u=d.b,u=u.gdK(u),u=u.gaf(u);u.C();){t=u.gU(u)
s=f.$1(t.a)
t=t.b
q.n(0,s,new A.d0(t.a,t.b,A.a1U(e,t.c),t.d))}return new C.y(r,q)},
hOt(a3,a4,a5,a6,a7,a8,a9,b0,b1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=x.i,a2=C.ew([a4,a5],a1)
for(w=b1.length,v=0;v<b1.length;b1.length===w||(0,C.L)(b1),++v){u=b1[v].a
a2.L(0,D.k.D(u[0],a4,a5))
a2.L(0,D.k.D(u[1],a4,a5))}t=C.B(a2,a2.$ti.k("cn.E"))
D.d.fh(t)
for(w=C.U(b1).k("a2<1>"),u=w.k("J.E"),s=0;r=s+1,r<t.length;s=r){q=t[s]
p=t[r]
o=p-q
if(o<0.01)continue
n=(q+p)/2
m=C.B(new C.a2(b1,new A.ffU(n),w),u)
l=C.ew([a6,a7],a1)
for(k=m.length,v=0;v<m.length;m.length===k||(0,C.L)(m),++v){j=m[v].a
l.L(0,D.k.D(j[2],a6,a7))
l.L(0,D.k.D(j[3],a6,a7))}i=C.B(l,l.$ti.k("cn.E"))
D.d.fh(i)
for(k=!(o>30),h=0;g=h+1,g<i.length;h=g){f=i[h]
e=i[g]
j=e-f
if(j<0.01)continue
d=(f+e)/2
if(D.d.b7(m,new A.ffV(d)))continue
a0=!k||j>60?2:1
a3.iy(new A.E(n,d,a8),new A.E(o,j,a9),b0,a0)}}},
Co(c9,d0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1=x.z,c2=C.a([],c1),c3=new A.jf(c2),c4=C.a([],x.h),c5=x.E,c6=C.a([],c5),c7=x.S,c8=C.T(c7,x.q)
c3.b=8001
c3.qc(B.fAM,B.fD0,B.As,0.15,4)
c3.iy(B.fAv,B.aRu,B.abk,3)
c3.bG(B.fFX,B.fGU,B.pv,0.5)
c3.bO(B.aRx,B.fAo,B.Ah)
c3.bO(B.aRx,B.fH4,B.Ah)
c3.iy(B.fD5,B.aRu,B.abk,3)
c3.bG(B.fAr,B.fD6,B.wK,0.15)
c3.bG(B.fDz,B.fD9,B.DT,0.8)
c3.b=0
c3.d=c9.gyj()?0.42:0.1
c3.iy(B.fzv,B.fEH,c9.gyj()?B.m8:B.b54,3)
c3.d=1
c3.b=8001
if(!c9.gyj())for(w=0;w<10;++w)c3.aBA(new A.E(-72+w*16,51.3,55),B.fF5,B.m6,!1,0.05)
else{c3.bG(B.fDV,B.fC1,D.c,0.2)
c3.bG(B.fHG,B.aRG,D.c,0.2)
c3.bG(B.fBo,B.aRG,D.c,0.2)}if(c9.gyj())c3.bG(B.fBw,B.fC4,B.m8,0.2)
c3.b=8001
c3.iy(B.fGL,B.fHh,B.bbF,2)
c3.bG(B.fG_,B.fAf,B.adg,0.1)
c3.bG(B.fFZ,B.fAg,B.VF,0.1)
c3.bG(B.fFT,B.aRm,B.VF,0.1)
c3.bG(B.fz7,B.aRm,B.VF,0.1)
c8.n(0,8001,B.dWk)
c3.b=8002
c3.qc(B.fHt,B.aRp,B.m6,0.05,3)
c3.qc(B.fzO,B.aRp,B.m6,0.05,3)
c8.n(0,8002,B.dWM)
for(v=c9.y,w=0;u=$.Gl(),w<u.length;++w){t=1000+w
c3.b=t
c3.cCe(new A.E(u[w],0,-2.25),B.fEU,B.m6,!1,0.05,2)
s=v.t(0,w)?"This one has a hole for the cable.":"Tap it with the drill to put a hole through it."
c8.n(0,t,new A.d0("Wall stud","A 2x4 stud, one of the vertical posts in the wall. They stand 16 inches apart. "+s,new A.E(u[w],20,-2),60))
if(v.t(0,w)){c3.b=0
c3.e=0.6
c3.bO(new A.E(u[w],40,-2.25),B.fAt,B.adW)
c3.e=0}}c3.b=8000
c3.bG(B.fzc,B.fyl,B.abF,0.5)
c3.e=0.4
c3.bO(B.fCQ,B.fGr,B.E1)
for(r=0;r<6;++r)for(v=19.5-r*3.6,q=0;q<2;++q)c3.bG(new A.E(61.6+q*4.8,v,0.5),B.fx4,B.aeZ,0.3)
p=c9.ax&&!c9.ay
v=p?0.6:0
if(c9.ay)u=D.cb
else u=p?D.bI:D.ju
c3.bG(new A.E(64,-2.5+v,0.9),B.fC_,u,0.4)
c3.e=0
if(c9.ay)v="The main breaker has TRIPPED (orange). Tap it to flip it fully OFF, fix the problem, then turn it ON."
else v=c9.ax?"The power is ON. Tap to turn it OFF. Always turn it OFF before you touch any wire.":"The power is OFF. Tap to turn it ON."
c8.n(0,8000,new A.d0("Breaker panel",v,B.fAh,60))
c3.b=8003
for(v=c9.z,u=C.ec(v,v.r,C.a3(v).c),t=x.o,s=u.$ti.c;u.C();){o=u.d
n=A.l0(o==null?s.a(o):o)
o=n.d
m=o.a-0.35
l=C.a([B.fFD,B.fDT,new A.E(m,40,-3.2)],t)
if(n.c)D.d.v(l,C.a([new A.E(m,51.4,-3.2),new A.E(m,51.4,o.c+11)],t))
else l.push(new A.E(m,o.b+11,-3.4))
c3.jT(A.Ge(l,3,6),0.2,B.Wf,!1,0.35,6)}c8.n(0,8003,B.dX9)
for(u=x.eV,s=c9.Q,k=0;k<3;++k){j=B.o0[k]
i=s.h(0,j)
if(i==null||!i.a)continue
if(i.e)h=B.bh_
else h=i.d?B.bin:B.bhN
o=C.a([],u)
for(m=i.b,l=C.a3(m),g=new C.mU(m,m.r,l.k("mU<1>")),g.c=m.e,l=l.c;g.C();){m=g.d
if(m==null)m=l.a(m)
o.push(new C.cL([A.l0(m).d.a-1.15,A.l0(m).d.a+1.15,A.l0(m).d.b-2,A.l0(m).d.b+2]))}m=6100+k
c3.b=m
A.hOt(c3,j,j+48,-47,47,-0.25,0.5,h,o)
o=i.e?"Painted and finished.":"A 4 by 8 foot sheet of drywall (gypsum between two layers of paper). It is screwed to the studs."
c8.n(0,m,new A.d0("Drywall sheet",o,new A.E(j+24,0,0),90))
c3.b=0
c3.e=0.3
for(o=i.c,m=C.a3(o),l=new C.mU(o,o.r,m.k("mU<1>")),l.c=o.e,m=m.c;l.C();){o=l.d
if(o==null)o=m.a(o)
f=D.o.an(o,10)
e=D.o.F(o,10)
c3.iQ(new A.E($.Gl()[f],-40+e*16,0.1),0.34,B.E1,3,5,0.3)}c3.e=0}for(u=d0.a,o=u!=="tape",m=c9.as,l=u!=="mud",g=u==="sand",w=0;w<2;w=a1){d=-24+48*w
a0=s.h(0,B.o0[w])
a0=a0==null?null:a0.a
a1=w+1
a2=s.h(0,B.o0[a1])
a2=a2==null?null:a2.a
if(a0!==!0||a2!==!0)continue
a3=m[w]
a0=6200+w
c3.b=a0
if(a3.a&&!a3.d){a2=a3.b
if(a2===0)h=B.bh2
else h=a3.c?B.bdt:B.b9h
c3.e=0.5
c3.bO(new A.E(d,0,0.08+0.02*a2),new A.E(2.2+a2*1.4,94,0.12),h)
c3.e=0}else if(!o||!l||g){c3.d=0.45
c3.e=0.6
c3.bO(new A.E(d,0,0.12),B.fCd,D.b1)
c3.e=0
c3.d=1}if(a3.d)a2="Smooth and ready for paint."
else if(!a3.a)a2="The joint between two sheets. It needs tape and three coats of joint compound."
else{a2=a3.b
a4=a2===1?"":"s"
a4="Taped, with "+a2+" coat"+a4+" of mud."
a2=a4}c8.n(0,a0,new A.d0("Seam",a2,new A.E(d,0,0),70))}for(o=d0.b,m=c9.x,l=c9.at,g=x.N,a5=0;a5<7;++a5){n=B.tW[a5]
a0=n.a
a6=m.ah(0,a0)
a7=l.h(0,a0)
a8=o===a0&&a7!=null
if(!a6)continue
a2=n.c
if(a2)a9=n.e==="fan"?"fan":"light"
else{a4=a7==null?null:a7.a
a9=a4==null?"outlet":a4}if(a8){b0=A.Ag(a7.a)
a0=a7.b
b1=A.fUm(b0,a0,!1)
b2=A.fTy(b1,n,new A.fmB(n))
D.d.v(c2,b2.a)
c8.v(0,b2.b)
if(a0.f&&a0.c===0){a0=C.a([],c5)
for(a2=b1.c,a4=a2.length,b3=0;b3<a2.length;a2.length===a4||(0,C.L)(a2),++b3){b4=a2[b3]
a0.push(new A.t1(A.a1U(n,b4.a),b4.b,b4.c))}D.d.v(c6,a0)}}else if(a7!=null&&a7.b.c>=2){a4=a7.a
b5=a7.b
b6=b5.w
b7=C.a([],c1)
b8=new A.jf(b7)
b9=new A.XH(C.T(c7,g))
b9.c=2
b9.w=b6
if(a4==="light"||a4==="fan")A.hb6(b8,a4,b9)
else{A.haM(b8,a4,-0.25,b6,!0)
A.hd9(b8,b6)}D.d.v(c2,A.fTy(new A.zn(b7,B.dip,B.GQ,B.vH),n,new A.fmC(n)).a)
if(!a2){c3.b=3000+a0
c3.e=0.4
c3.d=0.55
a2=n.d
b5=b5.w?D.ay:D.b7
c3.bO(new A.E(a2.a,a2.b,a2.c+0.2),B.fCh,b5)
c3.d=1
c3.e=0}c8.n(0,3000+a0,new A.d0(A.hKm(a4),A.hKl(c9,a0),A.a1U(n,B.a7N),22))}else{a4=C.a([],c1)
A.ha7(new A.jf(a4),a9,!1)
D.d.v(c2,A.fTy(new A.zn(a4,B.dj1,B.GQ,B.vH),n,new A.fmD(n)).a)
a2=a2?"Ceiling box":"Electrical box"
a4=v.t(0,a0)?"The box is mounted and the cable is in. A device can be wired here.":"The box is mounted. Pull the cable to it."
c8.n(0,2000+a0,new A.d0(a2,a4,A.a1U(n,B.a7N),24))}}c0=new A.fmG(c3)
if(u==="wall"||u==="ceiling"||u==="fanbox")for(a5=0;a5<7;++a5){n=B.tW[a5]
c1=n.a
if(m.ah(0,c1))continue
c5=n.c
c7=n.d
s=c7.a
o=c7.b
a0=c5?new A.E(s,o-1,c7.c):new A.E(s,o,1.5)
a2=c5?B.fAz:B.fBT
c0.$4$round(2000+c1,a0,a2,c5)
c1=c5?new A.E(s,o-8,c7.c):new A.E(s,o+7,3)
c6.push(new A.t1(c1,n.b,D.fi))}else if(u==="cable")for(a5=0;a5<7;++a5){n=B.tW[a5]
c1=n.a
if(!m.ah(0,c1)||v.t(0,c1))continue
c5=n.c
c7=n.d
s=c7.a
o=c7.b
c7=c5?new A.E(s,o-1,c7.c):new A.E(s,o,1.5)
s=c5?B.aRs:B.fAO
c0.$5$col$round(2000+c1,c7,s,D.cn,c5)}else if(u==="knife")for(a5=0;a5<7;++a5){n=B.tW[a5]
if(n.c||!m.ah(0,n.a))continue
c1=n.d
c5=c1.a
i=c9.aoc(c5)
if(i==null||i.b.t(0,n.a))continue
c0.$4$col(2000+n.a,new A.E(c5,c1.b,0.5),B.fBZ,D.ct)}else if(u==="sheet")for(w=0;w<5;){j=B.a2q[w]
c0.$3(6000+w,new A.E(j,0,0.3),B.fEX);++w
c6.push(new A.t1(new A.E(j,50,1),"edge "+w,D.fi))}else if(u==="screw")for(a5=0;a5<3;++a5){j=B.o0[a5]
i=s.h(0,j)
if(i==null||!i.a)continue
for(c1=c9.aov(j),c5=c1.length,c7=i.c,o=j+48,b3=0;b3<c1.length;c1.length===c5||(0,C.L)(c1),++b3){f=c1[b3]
for(a0=f*10,a2=7000+a0,r=0;r<6;++r){if(c7.t(0,a0+r))continue
c0.$3(a2+r,new A.E($.Gl()[f],-40+r*16,0.5),B.aRj)}a2=$.Gl()
if(f+1<a2.length&&a2[f]+16<=o)for(a0=7500+a0,r=0;r<6;r+=2)c0.$4$col(a0+r,new A.E(a2[f]+8,-40+r*16+8,0.5),B.aRj,D.dy)}}if(!C.ew(["wall","ceiling","fanbox","cable","knife","sheet","screw",""],g).t(0,u))c1=D.d.t(B.GU,u)||C.ew(["outlet","gfci","switch","light","fan"],g).t(0,u)
else c1=!1
if(c1)for(c1=c9.CW,a5=0;a5<7;++a5){n=B.tW[a5]
if(D.d.t(B.GU,u)){c5=n.a
a7=l.h(0,c5)
if(a7!=null){c7=a7.a
c7=(c7==="outlet"||c7==="gfci")&&a7.b.c>=2&&!c1.ah(0,c5)}else c7=!1
if(c7){c7=n.d
c0.$4$col(3000+c5,new A.E(c7.a,c7.b,1.2),B.fCi,D.b8)}}else{c5=n.a
if(m.ah(0,c5)&&v.t(0,c5)&&!l.ah(0,c5)){c7=n.c
s=n.d
o=s.a
g=s.b
s=c7?new A.E(o,g-1,s.c):new A.E(o,g,1.2)
o=c7?B.aRs:B.fER
c0.$4$round(2000+c5,s,o,c7)}}}for(c1=c9.CW,c5=new C.cJ(c1,C.a3(c1).k("cJ<1,2>")).gaf(0);c5.C();){j=c5.d
c7=j.a
n=A.l0(c7)
v=c3.b=8100+c7
u=n.d
d=u.a
u=u.b
c3.jT(A.Ge(C.a([new A.E(d,u,2.5),new A.E(d,-46,3.5),new A.E(d,-46,22)],t),4,6),0.28,B.Wj,!1,0.2,6)
c3.bG(new A.E(d,u,1.6),B.fBu,B.b6y,0.3)
u=j.b
switch(u){case"tv":c3.bG(new A.E(d,-45,24),B.fzX,B.adk,0.2)
c3.bG(new A.E(d,-19,24),B.fAG,E.Ed,0.4)
if(c1.ah(0,c7))c7=c9.ax&&!c9.ay&&c9.a3a(c7)
else c7=!1
if(c7){c7=d-38.5
s=d+38.5
c4.push(new A.WK(C.a([new A.E(c7,1.5,25.7),new A.E(s,1.5,25.7),new A.E(s,-39.5,25.7),new A.E(c7,-39.5,25.7)],t),v,new A.fmE(j),180,9,2))}break
case"lamp":c3.e5(new A.E(d,-47.5,24),new A.E(d,-46.5,24),6,B.Vm,0.4,14)
c3.e5(new A.E(d,-46.5,24),new A.E(d,-22,24),1,B.As,0.5,8)
c3.yh(new A.E(d,-26,24),new A.E(d,-12,24),9,X.Wr,!1,!0,5.5,0.2,16)
break
case"toaster":c3.bG(new A.E(d,-42.5,24),B.fyB,B.kD,0.8)
c3.bO(new A.E(d,-38,24),B.fFC,B.aet)
break
default:c3.bG(new A.E(d,-43.5,24),B.fyX,B.adk,0.2)
c3.Kk(new A.E(d-6,-38,24),new A.E(d+8,-38,24),3.4,B.KJ,3,0.6,12)
c3.aja(new A.E(d-8,-43,24),B.fyJ,B.KJ,0.6,0)}c7=A.hIw(u)
s="Plugged into "+n.b
u=u==="tv"?s+". Tap it to watch NGMY ads full screen. Use the Unplug tool to unplug it.":s+". Tap it to unplug."
c8.n(0,v,new A.d0(c7,u,new A.E(d,-35,20),60))}for(a5=0;a5<7;++a5){n=B.tW[a5]
c8.cg(0,2000+n.a,new A.fmF(n))}return new A.zn(c2,c8,c6,c4)},
hKm(d){var w
A:{if("gfci"===d){w="GFCI outlet"
break A}if("switch"===d){w="Light switch"
break A}if("light"===d){w="Ceiling light"
break A}if("fan"===d){w="Ceiling fan"
break A}w="Outlet"
break A}return w},
hIw(d){var w
A:{if("tv"===d){w="TV"
break A}if("lamp"===d){w="Lamp"
break A}if("toaster"===d){w="Toaster"
break A}w="Hair dryer"
break A}return w},
hKl(d,e){var w,v=d.at.h(0,e)
if(v==null)return""
if(v.b.w)return"BURNT. It was wired wrong and it burnt out. Pull it out and put in a new one."
w=v.a
if(w==="switch")return d.ch.t(0,e)?"The switch is ON. Tap to turn it off.":"The switch is OFF. Tap to flip it on."
if(w==="light"||w==="fan")return d.alw(e)?"It is running.":"It is off. Flip its switch (breaker on)."
w=d.CW.h(0,e)
return"Tap with a TV, lamp, toaster or hair dryer in your hand to plug it in. Plugged: "+(w==null?"nothing":w)+"."},
i2L(a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=C.a([],x.z),a0=new A.jf(d)
for(w=D.d.gaf(B.tW),v=new C.fk(w,new A.fCH()),u=a1.at,t=a2*7;v.C();){s=w.gU(0)
r=s.a
q=u.h(0,r)
if(q==null||q.b.c<1)continue
p=a1.alw(r)?t:0.4
a0.b=3000+r
s=s.d
r=s.a
o=s.b-6.6
s=s.c
for(n=0;n<4;++n){m=p+n*3.141592653589793/2
l=A.bBM(B.fyj,m)
a0.aja(new A.E(r+l.a,o+l.b,s+l.c),B.fH8,B.b7y,0.3,m)}}w=a1.d
w===$&&C.c()
w=D.d.gaf(w)
v=new C.fk(w,new A.fCI())
u=a2*5
while(v.C()){s=w.gU(0).a
if(a1.alw(s)){k=A.l0(s)
a0.b=0
a0.d=0.25+0.05*Math.sin(u)
s=k.d
a0.iQ(new A.E(s.a,s.b-5,s.c),11,B.VJ,4,10,0)
a0.d=1}}for(w=a1.CW,v=new C.cJ(w,C.a3(w).k("cJ<1,2>")).gaf(0),u=a2*1.6,s=a2*6;v.C();){j=v.d
r=j.a
if(w.ah(0,r))o=a1.ax&&!a1.ay&&a1.a3a(r)
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
r=C.aq(B.acS,T.Wv,(Math.sin(s)+1)/2)
r.toString
a0.bO(new A.E(i,-38.2,24),new A.E(13,0.3,6),r)
a0.e=0
break
default:for(r=i+9,h=0;h<6;++h)a0.iQ(new A.E(r+D.k.F(u+h/6,1)*22,-38+Math.sin(h*2)*2,24),0.6,B.bdP,3,5,0.2)}}for(w=new C.cJ(a3,C.a3(a3).k("cJ<1,2>")).gaf(0),v=a2*0.7,u=a2*2.2;w.C();){j=w.d
s=j.b
if(a2>s)continue
k=A.l0(j.a)
g=D.k.D(s-a2,0,3)
a0.b=0
for(h=0;h<14;++h){f=D.k.F(u+h*0.137,1)
m=h*2.4+t
e=A.a1U(k,new A.E(Math.cos(m)*f*7,Math.sin(m)*f*7-f*f*6,3+f*4))
s=D.k.D(g,0.3,1)
r=C.aq(E.WG,E.WL,1-f)
r.toString
a0.iQ(e,0.35*s,r,3,5,0)}a0.d=0.35
for(h=0;h<5;++h){f=D.k.F(v+h*0.2,1)
s=f*3
a0.iQ(A.a1U(k,new A.E(Math.sin(h*1.7)*2,f*10,5+s)),1.2+s,B.bj7,3,6,0)}a0.d=1}return d},
vR:function vR(d,e,f){this.a=d
this.b=e
this.c=f},
ffU:function ffU(d){this.a=d},
ffV:function ffV(d){this.a=d},
fmB:function fmB(d){this.a=d},
fmC:function fmC(d){this.a=d},
fmD:function fmD(d){this.a=d},
fmG:function fmG(d){this.a=d},
fmE:function fmE(d){this.a=d},
fmF:function fmF(d){this.a=d},
fCH:function fCH(){},
fCI:function fCI(){},
h6N(d,e){var w=new A.com(e,d,A.h0f())
w.bwa(4,d,e)
return w},
qT:function qT(d,e){this.a=d
this.b=e},
u2:function u2(d,e,f,g,h,i,j){var _=this
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
aq_:function aq_(d,e){this.d=d
this.a=e},
aD6:function aD6(d,e){var _=this
_.e=_.d=$
_.f=d
_.r=$
_.w=e
_.x="inspect"
_.y=0
_.z=null
_.at=_.as=_.Q=!1
_.c=_.a=_.ax=null},
elZ:function elZ(d,e,f){this.a=d
this.b=e
this.c=f},
em_:function em_(d){this.a=d},
elY:function elY(d){this.a=d},
elO:function elO(d){this.a=d},
elT:function elT(d){this.a=d},
elU:function elU(d){this.a=d},
elS:function elS(d){this.a=d},
elV:function elV(d,e){this.a=d
this.b=e},
elW:function elW(d){this.a=d},
elX:function elX(d){this.a=d},
elR:function elR(d){this.a=d},
elQ:function elQ(d,e){this.a=d
this.b=e},
elN:function elN(d){this.a=d},
elL:function elL(d){this.a=d},
elM:function elM(d,e){this.a=d
this.b=e},
elP:function elP(d){this.a=d},
emb:function emb(d,e){this.a=d
this.b=e},
em7:function em7(){},
em6:function em6(d){this.a=d},
em8:function em8(){},
em9:function em9(){},
ema:function ema(d,e){this.a=d
this.b=e},
em5:function em5(d,e){this.a=d
this.b=e},
em4:function em4(d){this.a=d},
em3:function em3(d){this.a=d},
em1:function em1(d,e){this.a=d
this.b=e},
em0:function em0(){},
em2:function em2(d,e){this.a=d
this.b=e},
i2i(d){var w,v,u,t,s,r,q,p,o,n,m=d.gfw(0),l=C.a([],x.T)
for(w=d.x,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u){t=w[u]
s=t.b
if(s==="rug")continue
s=B.pW.h(0,s)
s.toString
r=(t.e&1)===1
q=r?s.d:s.c
p=r?s.c:s.d
s=t.c
r=q/2
o=t.d
n=p/2
l.push(new A.B_(s-r,s+r,o-n,o+n))}switch(d.c){case"kitchen":w=-m/2
l.push(new A.B_(w,w+28,0,28))
l.push(new A.B_(10,m/2,0,28))
break
case"bathroom":l.push(B.djX)
l.push(B.djV)
w=-m/2
l.push(new A.B_(w,w+33,0,75))
break}return l},
h6D(d){var w=new A.cl0(d,A.i2i(d))
w.c=D.k.dw(d.gfw(0)/4)+1
w.d=D.k.dw(d.gjk(0)/4)+1
return w},
bp8(d,e,f,g,h,i,j,k,l,m,n,o){var w=new A.bp7(d,i,m,o,n,l,g,f,k,j,e,h,C.a([],x.n))
w.bwp(d,e,f,g,h,i,j,k,l,m,n,o)
return w},
haP(d,e){var w,v,u,t=d.w,s=D.d.ba(t,new A.f9b(e))
if(s<0)s=0
w=t[s]
v=d.gfw(0)
u=d.gjk(0)
t=w.b
switch(w.a){case"left":return new C.bv(new C.y(-v/2+18,D.k.D(t+u/2-40,10,u-10)),1.5707963267948966,s)
case"right":return new C.bv(new C.y(v/2-18,D.k.D(t+u/2-40,10,u-10)),-1.5707963267948966,s)
default:return new C.bv(new C.y(D.o.D(t,-v/2+12,v/2-12),18),0,s)}},
VU:function VU(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var _=this
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
uy:function uy(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
O3:function O3(d,e,f,g,h,i,j,k,l,m){var _=this
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
B_:function B_(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cl0:function cl0(d,e){var _=this
_.a=d
_.b=e
_.d=_.c=$},
Jl:function Jl(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
bp7:function bp7(d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
f9b:function f9b(d){this.a=d},
bPG:function bPG(d,e,f){var _=this
_.a=d
_.b=e
_.c=f
_.d=$},
bPH:function bPH(d,e){this.a=d
this.b=e},
bPI:function bPI(d){this.a=d},
fWK(d){var w,v,u,t,s,r,q,p,o,n,m=C.a([B.djW],x.T)
for(w=d.x,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u){t=w[u]
s=t.b
if(D.d.t(B.aw7,s)||D.d.t(B.a1C,s)||s==="bush")continue
r=B.pW.h(0,s)
r.toString
q=(t.e&1)===1
p=q?r.d:r.c
o=q?r.c:r.d
if(s==="tree"||s==="pine"){p=10
o=10}s=t.c
r=p/2
q=t.d
n=o/2
m.push(new A.B_(s-r,s+r,q-n,q+n))}return m},
h80(d,e,f){var w=new A.cuL(d,e,f,B.d23)
w.w=A.fWK(d)
return w},
cuL:function cuL(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=0
_.e=!1
_.f=0
_.r=null
_.w=g}},B,G,E,I,A5,X,R,S,A6,A7
J=c[1]
C=c[0]
D=c[2]
Y=c[81]
F=c[89]
N=c[96]
T=c[114]
Z=c[110]
U=c[111]
L=c[101]
A_=c[105]
O=c[84]
H=c[106]
A0=c[100]
A1=c[108]
V=c[107]
W=c[109]
P=c[102]
A2=c[94]
A3=c[113]
Q=c[91]
K=c[95]
A4=c[90]
M=c[92]
A=a.updateHolder(c[24],A)
B=c[88]
G=c[26]
E=c[93]
I=c[103]
A5=c[61]
X=c[112]
R=c[99]
S=c[98]
A6=c[97]
A7=c[104]
A.E.prototype={
ad(d,e){return new A.E(this.a+e.a,this.b+e.b,this.c+e.c)},
aC(d,e){return new A.E(this.a-e.a,this.b-e.b,this.c-e.c)},
aF(d,e){return new A.E(this.a*e,this.b*e,this.c*e)},
Kj(d){var w=this.b,v=d.c,u=this.c,t=d.b,s=d.a,r=this.a
return new A.E(w*v-u*t,u*s-r*v,r*t-w*s)},
gTb(){var w=this.a,v=this.b,u=this.c
return Math.sqrt(w*w+v*v+u*u)},
gow(d){var w=this,v=w.gTb()
return v<1e-9?w:new A.E(w.a/v,w.b/v,w.c/v)}}
A.nd.prototype={}
A.d0.prototype={}
A.t1.prototype={}
A.zn.prototype={}
A.WK.prototype={}
A.jf.prototype={
Vr(){var w=this.x
if(!(w!==0))if(this.r){w=$.alV+1
$.alV=w}else w=0
this.w=w},
bfH(d,e,f,g,h,i,j,k){var w=this,v=i.gow(0)
w.a.push(new A.nd(C.a([d,e,f,g],x.o),v,h,w.b,j,w.d,k,w.c,w.e,w.f,w.w))},
bfG(d,e,f,g,h,i,j){return this.bfH(d,e,f,g,h,i,0,j)},
cQn(d,e,f,g,h,i,j){return this.bfH(d,e,f,g,h,i,j,!1)},
a5y(d,e,f,g,h,i){var w=this,v=(h==null?e.aC(0,d).Kj(f.aC(0,d)):h).gow(0)
w.a.push(new A.nd(C.a([d,e,f],x.o),v,g,w.b,0,w.d,i,w.c,w.e,w.f,w.w))},
bgL(d,e,f,g){return this.a5y(d,e,f,g,null,!0)},
K0(d,e,f,g,h,i,j){var w,v,u,t,s,r,q,p,o,n,m
this.Vr()
w=e.a/2
v=e.b/2
u=e.c/2
t=new A.bVs(this,i,new A.bVt(j,d),new A.bVu(j),f,h)
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
iy(d,e,f,g){return this.K0(d,e,f,!0,0,g,0)},
aBA(d,e,f,g,h){return this.K0(d,e,f,g,h,1,0)},
qc(d,e,f,g,h){return this.K0(d,e,f,!0,g,h,0)},
bG(d,e,f,g){return this.K0(d,e,f,!0,g,1,0)},
bO(d,e,f){return this.K0(d,e,f,!0,0,1,0)},
aja(d,e,f,g,h){return this.K0(d,e,f,!0,g,1,h)},
cCe(d,e,f,g,h,i){return this.K0(d,e,f,g,h,i,0)},
yh(b3,b4,b5,b6,b7,b8,b9,c0,c1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2=this
b2.Vr()
w=b4.aC(0,b3).gow(0)
v=w.b
u=w.Kj(Math.abs(v)<0.9?B.fP:B.j_).gow(0)
t=w.Kj(u).gow(0)
s=b9<0?b5:b9
r=new A.bVv(u,c1,t)
for(q=b2.a,p=b3.a,o=b3.b,n=b3.c,m=b4.a,l=b4.b,k=b4.c,j=x.o,i=w.a*-1,v*=-1,h=w.c*-1,g=0;g<c1;){f=r.$1(g);++g
e=r.$1(g)
d=f.a
a0=e.a
a1=f.b
a2=e.b
a3=f.c
a4=e.c
a5=new A.E(d+a0,a1+a2,a3+a4).gow(0)
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
q.push(new A.nd(C.a([new A.E(a6,a7,a8),new A.E(a9,b0,b1),new A.E(a0,a2,a4),new A.E(d,a1,a3)],j),a5,b6,b2.b,c0,b2.d,b8,b2.c,b2.e,b2.f,b2.w))
if(b7){q.push(new A.nd(C.a([b3,new A.E(a9,b0,b1),new A.E(a6,a7,a8)],j),new A.E(i,v,h),b6,b2.b,c0,b2.d,!1,b2.c,b2.e,b2.f,b2.w))
q.push(new A.nd(C.a([b4,new A.E(d,a1,a3),new A.E(a0,a2,a4)],j),w,b6,b2.b,c0,b2.d,!1,b2.c,b2.e,b2.f,b2.w))}}},
e5(d,e,f,g,h,i){return this.yh(d,e,f,g,!0,!1,-1,h,i)},
Kk(d,e,f,g,h,i,j){return this.yh(d,e,f,g,!0,!1,h,i,j)},
a2Z(d,e,f,g,h,i,j,k){return this.yh(d,e,f,g,h,i,-1,j,k)},
hB(d,e,f,g,h){return this.yh(d,e,f,g,!0,!1,-1,0,h)},
baG(d,e,f,g,h,i,j){return this.yh(d,e,f,g,h,!1,-1,i,j)},
baE(d,e,f,g,h,i){return this.yh(d,e,f,g,h,!1,-1,0,i)},
ajX(d,e,f,g,h,i){return this.yh(d,e,f,g,!0,!1,h,0,i)},
baF(d,e,f,g,h,i,j){return this.yh(d,e,f,g,h,!1,i,0,j)},
iQ(a7,a8,a9,b0,b1,b2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6=this
a6.Vr()
w=new A.bVr(b0,b1)
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
v.push(new A.nd(C.a([new A.E(u+i*a8,t+h*a8,s+g*a8),new A.E(u+f*a8,t+e*a8,s+d*a8),new A.E(u+a0*a8,t+a1*a8,s+a2*a8),new A.E(u+a3*a8,t+a4*a8,s+a5*a8)],r),new A.E(i+f+a0+a3,h+e+a1+a4,g+d+a2+a5).gow(0),a9,a6.b,b2,a6.d,!1,a6.c,a6.e,a6.f,a6.w))}},
b8I(d,e,f,g){return this.iQ(d,e,f,6,10,g)},
io(d,e,f,g,h){return this.iQ(d,e,f,g,h,0.4)},
a5A(d,e,f,g,h,i,j,k){var w,v,u,t,s
this.Vr()
for(w=0;v=w+1,v<d.length;w=v){u=d[v]
t=d[w]
if(new A.E(u.a-t.a,u.b-t.b,u.c-t.c).gTb()<0.000001)continue
u=d[w]
t=d[v]
if(g)s=w===0||w===d.length-2
else s=!1
this.a2Z(u,t,e,f,s,h,j,k)}if(i)for(u=e*0.98,w=1;v=w+1,v<d.length;w=v)this.iQ(d[w],u,f,4,k,j)},
jT(d,e,f,g,h,i){return this.a5A(d,e,f,!0,!1,g,h,i)},
aH9(d,e,f,g,h,i,j){return this.a5A(d,e,f,g,!1,h,i,j)},
bgN(d,e,f,g,h){return this.a5A(d,e,f,!0,!1,!0,g,h)},
yV(a4,a5,a6,a7,a8,a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=this
a3.Vr()
a3.baG(a4,a5,a6,a8,!1,a9,b0)
w=a5.aC(0,a4).gow(0)
v=w.Kj(Math.abs(w.b)<0.9?B.fP:B.j_).gow(0)
u=new A.bVw(v,b0,w.Kj(v).gow(0))
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
s.push(new A.nd(C.a([new A.E(p+i*a7,m+h*a7,l+j*a7),new A.E(p+f*a6,m+e*a6,l+g*a6),new A.E(p+a0*a6,m+a1*a6,l+d*a6),new A.E(p+a2.a*a7,m+a2.b*a7,l+a2.c*a7)],r),n,a8,a3.b,a9,a3.d,!1,a3.c,a3.e,a3.f,a3.w))}}},
cRM(d,e,f,g,h,i){return this.yV(d,e,f,g,h,i,16)}}
A.AC.prototype={
GA(d){var w,v,u,t=this
t.z=d
if(!d){w=t.a
v=t.x
u=t.y
t.a=D.k.D(w,v-u,v+u)}t.aZ()},
lU(d,e,f,g){var w=this
w.Q=f
w.as=d
w.at=g
w.ax=e
w.aZ()},
zd(d,e){return this.lU(d,null,e,null)},
aIv(d){return this.lU(null,null,d,null)},
aGW(d){var w,v,u,t=this
if(!(t.Q!=null||t.as!=null||t.at!=null||t.ax!=null))return
w=1-Math.exp(-d*7)
v=t.Q
if(v!=null){u=A.zG(t.d,v,w)
t.d=u
if(u.aC(0,v).gTb()<0.02){v=t.Q
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
cIN(d,e){var w,v,u,t,s=this,r=e.a,q=e.b,p=Math.min(r,q)*1.15,o=Math.cos(s.a),n=Math.sin(s.a)
q=new A.bGf(s,new A.bGg(Math.cos(s.b),Math.sin(s.b),o,n),(d.a-r/2)/p,-(d.b-q/2)/p)
w=q.$1(0)
r=q.$1(1).b
v=w.b
u=r-v
if(Math.abs(u)<1e-9)return null
t=(0-v)/u
if(t<=0)return null
return q.$1(t)},
anu(d){var w=this
w.as=null
w.c=D.k.D(w.c*d,w.e,w.f)
w.aZ()}}
A.bPx.prototype={
cPC(d){var w,v,u,t
for(w=this.a,v=w.length-1,u=d.a,t=d.b;v>=0;--v)if(w[v].a.gbJ().a.contains(u,t))return w[v].b
return 0}}
A.b3M.prototype={
gaGY(d){var w=this.r.a
return w==null?0:w},
a5(d9,e0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3=this,d4=null,d5=e0.a,d6=e0.b,d7=0+d5,d8=0+d6
$.X()
w=C.M()
v=d3.x
u=C.aq(v,D.c,0.06)
u.toString
w.sau(new C.a8(D.b0,D.b6,D.x,C.a([u,v],x.O),d4,d4).aw(0,new C.aa(0,0,d7,d8)))
d9.aY(new C.aa(0,0,d7,d8),w)
t=Math.min(d5,d6)*1.15
s=d5/2
r=d6/2
d6=d3.c
q=new A.clW(Math.cos(d6.a),Math.sin(d6.a),Math.cos(d6.b),Math.sin(d6.b))
p=new A.clX(d3,q)
o=B.fDF.gow(0)
n=o.ad(0,B.zr).gow(0)
m=C.a([],x.bl)
d5=d3.w
d6=d3.b
l=d6.a
if(!(d5==null)){d7=C.B(l,x.fX)
D.d.v(d7,d5.$1(d3.gaGY(0)))
l=d7}for(d5=l.length,d7=d3.e,d8=x.m,w=d7!==0,v=o.a,u=o.b,k=o.c,j=x.o,i=d3.f,h=i!=null,g=n.a,f=n.b,e=n.c,d=d3.r,a0=0;a0<l.length;l.length===d5||(0,C.L)(l),++a0){a1=l[a0]
if(h&&!i.$1(a1.w))continue
a2=C.a([],j)
for(a3=a1.a,a4=a3.length,a5=0;a5<a3.length;a3.length===a4||(0,C.L)(a3),++a5)a2.push(p.$1(a3[a5]))
a6=A.hJF(a2)
a2=a6.length
if(a2<3)continue
for(a7=0,a8=B.fO,a5=0;a5<a2;++a5){a9=a6[a5]
a3=a9.c
a7+=a3
a8=new A.E(a8.a+a9.a,a8.b+a9.b,a8.c+a3)}a2=1/a2
b0=q.$1(a1.b)
a3=b0.a
a4=b0.b
b1=b0.c
if(a3*(a8.a*a2)+a4*(a8.b*a2)+b1*(a8.c*a2)>0){if(!a1.r)continue
b0=new A.E(a3*-1,a4*-1,b1*-1)}a2=b0.a
a3=b0.b
a4=b0.c
b2=0.56+0.58*Math.max(0,a2*v+a3*u+a4*k)
b1=a1.e
b3=b1>0?Math.pow(Math.max(0,a2*g+a3*f+a4*e),28)*b1:0
b4=a1.c
if(w&&a1.d===d7){a2=d.a
a2=C.aq(b4,D.b1,0.28+0.14*Math.sin((a2==null?0:a2)*6))
a2.toString
b2+=0.12
b4=a2}a2=255*b3*0.55
b5=D.k.V(D.k.D(b4.gb6(b4)*255*b2+a2,0,255))
b6=D.k.V(D.k.D(b4.gbf()*255*b2+a2,0,255))
b7=D.k.V(D.k.D(b4.gbg(b4)*255*b2+a2,0,255))
a2=$.X()
a3=C.a([],d8)
b8=new C.aQ(a2.r,D.ap,d4,d4,a3)
for(b9=0;b9<a6.length;++b9){a9=a6[b9]
a2=a9.c
c0=s+a9.a*t/a2
c1=r-a9.b*t/a2
if(b9===0){a2=new C.b5(c0,c1)
a3.push(a2)
a4=b8.f
if(a4!=null)a2.bx(a4)
a2=b8.e
if(a2!=null)a2.a.delete()
b8.e=null}else{a2=new C.ap(c0,c1)
a3.push(a2)
a4=b8.f
if(a4!=null)a2.bx(a4)
a2=b8.e
if(a2!=null)a2.a.delete()
b8.e=null}}a2=new C.bF()
a3.push(a2)
a3=b8.f
if(a3!=null)a2.bx(a3)
a2=b8.e
if(a2!=null)a2.a.delete()
b8.e=null
a2=a1.f
a3=a6.length
a4=a1.d
b1=a4===d7&&w
m.push(new A.BY(a1.y,a1.z,d4,b8,new C.w(a2,(b5&255)/255,(b6&255)/255,(b7&255)/255,D.t),a7/a3-a1.x,a4,a2<0.99,b1))}for(d5=d6.d,d7=d5.length,v=x.dx,u=x.dN,a0=0;a0<d5.length;d5.length===d7||(0,C.L)(d5),++a0){c2=d5[a0]
k=C.a([],j)
for(i=c2.a,a5=0;a5<4;++a5)k.push(p.$1(i[a5]))
if(D.d.b7(k,new A.clS()))continue
h=k[0]
g=k[1]
f=k[2]
e=k[3]
d=(h.c+g.c+f.c+e.c)*0.25
a2=i[3]
a3=i[0]
a4=a3.a
b1=a3.b
a3=a3.c
i=i[1]
b0=q.$1(new A.E(a2.a-a4,a2.b-b1,a2.c-a3).Kj(new A.E(i.a-a4,i.b-b1,i.c-a3)))
if(b0.a*((h.a+g.a+f.a+e.a)*0.25)+b0.b*((h.b+g.b+f.b+e.b)*0.25)+b0.c*d>0)continue
i=C.a([],u)
for(h=k.length,a5=0;a5<k.length;k.length===h||(0,C.L)(k),++a5){a9=k[a5]
g=a9.c
i.push(new C.u(s+a9.a*t/g,r-a9.b*t/g))}k=$.X()
h=C.a([],d8)
g=C.B(i,v)
h.push(new C.R5(g,!0))
m.push(new A.BY(c2.r,0,new A.clT(d3,c2,i),new C.aQ(k.r,D.ap,d4,d4,h),D.K,d-c2.f,c2.b,!1,!1))}d5=x.S
c3=C.T(d5,x.i)
c4=C.T(d5,d5)
for(d5=m.length,a0=0;d7=m.length,a0<d7;m.length===d5||(0,C.L)(m),++a0){c5=m[a0]
d7=c5.b
if(d7!==0){d8=c3.h(0,d7)
if(d8==null)d8=0
c3.n(0,d7,d8+c5.r)
d8=c4.h(0,d7)
c4.n(0,d7,(d8==null?0:d8)+1)}}for(b9=0;b9<d7;++b9)m[b9].c=b9
D.d.b_(m,new A.clU(new A.clV(c3,c4)))
d5=d3.d.a
D.d.a9(d5)
$.X()
c6=C.M()
c6.b=D.V
c7=C.M()
c7.b=D.ae
c7.c=0.8
for(d7=m.length,d8=d9.a,a0=0;a0<m.length;m.length===d7||(0,C.L)(m),++a0){c8=m[a0]
v=c8.d
if(v!=null){v.$1(d9)
v=c8.w
if(v!==0)d5.push(new C.y(c8.e,v))
continue}v=c8.f
c6.r=v.gp(0)
u=c8.e
c9=c6.H()
k=u.e
d8.drawPath((k==null?u.e=new C.cF(u.gbJ().a.snapshot()):k).a,c9)
c9.delete()
if(!c8.x){c7.r=v.gp(0)
c9=c7.H()
v=u.e
d8.drawPath((v==null?u.e=new C.cF(u.gbJ().a.snapshot()):v).a,c9)
c9.delete()}v=c8.w
if(v!==0)d5.push(new C.y(u,v))}if(w){$.X()
d0=C.M()
d0.b=D.ae
d0.c=1.4
d0.r=D.c.j(0.35+0.25*Math.sin(d3.gaGY(0)*6)).gp(0)
for(d5=m.length,a0=0;a0<m.length;m.length===d5||(0,C.L)(m),++a0){c8=m[a0]
if(c8.y){d7=c8.e
c9=d0.H()
w=d7.e
d8.drawPath((w==null?d7.e=new C.cF(d7.gbJ().a.snapshot()):w).a,c9)
c9.delete()}}}for(d5=d6.c,d6=d5.length,a0=0;a0<d5.length;d5.length===d6||(0,C.L)(d5),++a0){d1=d5[a0]
a9=p.$1(d1.a)
d7=a9.c
if(d7<1)continue
w=s+a9.a*t/d7
d7=r-a9.b*t/d7
d2=new C.ko(new C.ep(d1.b,d4,d4,D.cO,d4,d4,d4,d4,d4,d4,new C.G(!0,D.c,d4,d4,d4,d4,11,D.u,d4,d4,d4,d4,d4,d4,d4,d4,d4,d4,d4,d4,d4,d4,d4,d4,d4,d4)),D.a5,D.ch,new C.jo(1),d4,d4,d4,d4,D.cd,d4)
d2.eP()
v=d2.b
u=v.c
v=v.a.c
b5=C.bA(C.cv(new C.u(w,d7),v.gbc(v)+8,u+14),D.iE)
$.X()
u=new C.as(D.X,D.V,D.a_,D.a0,D.Z)
u.r=d1.c.j(0.92).gp(0)
c9=u.H()
d8.drawRRect(C.eq(b5),c9)
c9.delete()
u=new C.as(D.X,D.V,D.a_,D.a0,D.Z)
u.b=D.ae
u.c=1
u.r=D.ad.gp(0)
c9=u.H()
d8.drawRRect(C.eq(b5),c9)
c9.delete()
u=d2.b
v=u.c
u=u.a.c
d2.a5(d9,new C.u(w-v/2,d7-u.gbc(u)/2))}},
aq(d){return!0}}
A.BY.prototype={}
A.atr.prototype={
T(){return new A.boW(new A.bPx(C.a([],x.a6)),new C.eN(0,$.aw()),D.bw,D.J,null,null)}}
A.boW.prototype={
a_(){var w,v=this
v.a1()
w=v.qf(new A.eSh(v))
w.j0(0)
v.d!==$&&C.aO()
v.d=w},
q(){var w=this.d
w===$&&C.c()
w.q()
w=this.f
w.S$=$.aw()
w.P$=0
this.buG()},
B(d){var w,v,u,t,s,r,q=this,p=null,o=q.a,n=o.z==null,m=n?p:new A.eSb(q)
n=n?p:new A.eSc(q,d)
w=o.c
v=o.d
u=o.e
t=o.r
s=q.f
o=o.w
r=C.a([v,s],x.U)
r=C.a([C.jt(new C.et(C.b3(p,p,p,new A.b3M(w,v,q.e,u,t,s,o,q.a.x,new C.h3(r)),D.f0),p),D.r,p)],x.p)
q.a.toString
return C.o6(D.jf,C.aE(D.c5,new C.an(D.W,p,D.b_,D.r,r,p),D.y,!1,p,n,m,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new A.eSd(q),new A.eSe(q),p,p,p,p,p,p,p,new A.eSf(q),p,p,p,!1,D.a8),p,p,p,p,p,p,new A.eSg(q),p)}}
A.aLB.prototype={
q(){var w=this,v=w.a7$
if(v!=null)v.a3(0,w.gbv())
w.a7$=null
w.a2()},
aQ(){this.aX()
this.aW()
this.bw()}}
A.b9k.prototype={}
A.b9F.prototype={}
A.beG.prototype={}
A.dgs.prototype={}
A.LG.prototype={
A0(d){return this.cj4(d)},
cj4(e5){var w=0,v=C.j(x.H),u=1,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6,d7,d8,d9,e0,e1,e2,e3,e4
var $async$A0=C.e(function(e6,e7){if(e6===1){t.push(e7)
w=u}for(;;)switch(w){case 0:if(e5.getUint32(0,!0)!==1179937895)throw C.V("not a glb file")
for(k=x.P,j=12,i=null,h=null;j+8<=e5.byteLength;){g=e5.getUint32(j,!0)
f=e5.getUint32(j+4,!0)
e=J.eQ(D.dz.gaO(e5),e5.byteOffset+j+8,g)
if(f===1313821514)i=k.a(D.R.aG(0,new C.Fx(!1).D4(e,0,null,!0),null))
if(f===5130562)h=e
j+=8+g}if(i==null||h==null)throw C.V("empty glb")
d=new A.daC(i,h)
a0=J.a5(i)
a1=x.j
a2=J.kt(a1.a(a0.h(i,"nodes")),k)
k=a2.a
a3=J.a5(k)
a4=a3.gM(k)
a5=x.S
s.b=C.c1(a4,-1,!1,a5)
a6=x.gL
a7=C.a([],a6)
for(a8=a2.$ti,a9=new C.bR(a2,a2.gM(0),a8.k("bR<bS.E>")),b0=x.g,b1=x.t,b2=a8.k("bS.E");a9.C();){b3=a9.d
if(b3==null)b3=b2.a(b3)
b4=C.a([],b1)
b3=b0.a(J.q(b3,"children"))
b3=J.aV(b3==null?D.cu:b3)
while(b3.C())b4.push(D.k.N(C.dQ(b3.gU(b3))))
a7.push(b4)}s.c=a7
for(a9=s.b,b5=0;b5<a4;++b5)for(b2=a7[b5],b3=b2.length,b6=0;b6<b3;++b6)a9[b2[b6]]=b5
a7=C.a([],b1)
a9=a1.a(a0.h(i,"scenes"))
b2=C.aJ(a0.h(i,"scene"))
b2=b2==null?null:D.k.N(b2)
a9=J.aV(a1.a(J.q(J.q(a9,b2==null?0:b2),"nodes")))
while(a9.C())a7.push(D.k.N(C.dQ(a9.gU(a9))))
s.d=a7
a7=a4*3
s.e=new Float64Array(a7)
s.f=new Float64Array(a4*4)
s.r=new Float64Array(a7)
for(a7=x.v,a8=a8.y[1],b5=0;b5<a4;++b5){b7=a8.a(a3.h(k,b5))
a9=J.a5(b7)
b2=b0.a(a9.h(b7,"translation"))
b8=b2==null?null:J.kt(b2,a7)
if(b8==null)b8=F.anN
b2=b0.a(a9.h(b7,"rotation"))
b9=b2==null?null:J.kt(b2,a7)
if(b9==null)b9=B.bVa
a9=b0.a(a9.h(b7,"scale"))
c0=a9==null?null:J.kt(a9,a7)
if(c0==null)c0=B.c76
for(a9=b5*3,b2=J.a5(b8),b3=J.a5(c0),c1=0;c1<3;++c1){b4=s.e
c2=a9+c1
c3=b2.h(b8,c1)
b4.$flags&2&&C.ai(b4)
b4[c2]=c3
c3=s.r
b4=b3.h(c0,c1)
c3.$flags&2&&C.ai(c3)
c3[c2]=b4}for(a9=b5*4,b2=J.a5(b9),c1=0;c1<4;++c1){b3=s.f
b4=b2.h(b9,c1)
b3.$flags&2&&C.ai(b3)
b3[a9+c1]=b4}}s.x=C.a([],a6)
s.y=C.a([],x.dh)
k=b0.a(a0.h(i,"skins"))
k=J.aV(k==null?D.cu:k)
while(k.C()){c0=k.gU(k)
a3=C.a([],b1)
for(a6=J.a5(c0),a7=J.aV(a1.a(a6.h(c0,"joints")));a7.C();)a3.push(D.k.N(C.dQ(a7.gU(a7))))
s.x.push(a3)
c4=a6.h(c0,"inverseBindMatrices")!=null?d.EV(D.k.N(C.dQ(a6.h(c0,"inverseBindMatrices")))).a:null
a6=s.y
a6.push(c4==null?A.hrW(a3.length):c4)}k=b0.a(a0.h(i,"animations"))
k=J.aV(k==null?D.cu:k)
a3=s.w
a6=x.G
a7=x.fJ
while(k.C()){c5=k.gU(k)
c6=C.a([],a7)
a8=J.a5(c5)
c7=a1.a(a8.h(c5,"samplers"))
for(a9=J.aV(a1.a(a8.h(c5,"channels"))),b1=J.a5(c7),c8=0;a9.C();){c9=a9.gU(a9)
b2=J.a5(c9)
d0=a6.a(b2.h(c9,"target"))
b3=J.a5(d0)
b4=C.aJ(b3.h(d0,"node"))
d1=b4==null?null:D.k.N(b4)
d2=b3.h(d0,"path")
A:{if("translation"===d2){b3=0
break A}if("rotation"===d2){b3=1
break A}if("scale"===d2){b3=2
break A}b3=-1
break A}if(d1==null||b3<0)continue
c0=a6.a(b1.h(c7,D.k.N(C.dQ(b2.h(c9,"sampler")))))
b2=J.a5(c0)
d3=d.EV(D.k.N(C.dQ(b2.h(c0,"input")))).a
d4=d.EV(D.k.N(C.dQ(b2.h(c0,"output")))).a
d5=b2.h(c0,"interpolation")
if(d5==null)d5="LINEAR"
d6=b3===1?4:3
b2=J.kZ(d5)
if(b2.A(d5,"CUBICSPLINE")){b4=d3.length
d7=new Float64Array(b4*d6)
for(b5=0;b5<b4;++b5)for(c2=b5*d6,c3=(b5*3+1)*d6,c1=0;c1<d6;++c1)d7[c2+c1]=d4[c3+c1]
d4=d7}if(!D.o1.gam(d3)){b4=d3.length
if(b4===0)C.ba(C.fA())
c8=Math.max(c8,d3[b4-1])}c6.push(new A.b9k(d1,b3,d3,d4,b2.A(d5,"STEP")))}d8=C.aT(a8.h(c5,"name"))
if(d8==null)d8="clip"+a3.a
a3.n(0,d8,new A.b9F(c8,c6))}r=C.T(a5,x.c9)
q=0
k=x.H
a1="Could not read a picture of "+s.a+": "
case 2:a3=q
a5=b0.a(a0.h(i,"images"))
a5=a5==null?null:J.ad(a5)
if(!(a3<(a5==null?0:a5))){w=3
break}p=d.cKP(q)
if(p==null){w=4
break}u=6
w=9
return C.b($.X().FC(p,!0,null,null),$async$A0)
case 9:o=e7
w=10
return C.b(o.lT(),$async$A0)
case 10:n=e7
w=11
return C.b(J.KN(n).hj(D.a07),$async$A0)
case 11:m=e7
if(m!=null)J.aF(r,q,new A.beG(J.KN(n).c,J.KN(n).d,J.eQ(D.dz.gaO(m),m.byteOffset,m.byteLength)))
J.KN(n).q()
o.q()
u=1
w=8
break
case 6:u=5
e4=t.pop()
l=C.a9(e4)
$.am.$1(a1+C.t(l))
w=8
break
case 5:w=1
break
case 8:w=12
return C.b(C.bN(D.bw,null,k),$async$A0)
case 12:case 4:++q
w=2
break
case 3:e0=s.bNR(i,d,a2,r)
w=13
return C.b(C.bN(D.bw,null,k),$async$A0)
case 13:s.z=s.b5v(e0,5000)
w=14
return C.b(C.bN(D.bw,null,k),$async$A0)
case 14:s.Q=s.b5v(e0,2000)
e1=s.b_N(null,0)
e2=s.b3O(s.z,e1)
for(k=e2.length,e3=1/0,q=1;q<k;q+=3)e3=Math.min(e3,e2[q])
s.as=isFinite(e3)?e3:0
return C.h(null,v)
case 1:return C.f(t.at(-1),v)}})
return C.i($async$A0,v)},
bNR(e9,f0,f1,f2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6,d7,d8,d9,e0,e1,e2=null,e3="POSITION",e4="JOINTS_0",e5="WEIGHTS_0",e6=J.a5(e9),e7=x.g,e8=e7.a(e6.h(e9,"materials"))
if(e8==null)e8=D.cu
w=x.P
v=J.kt(e8,w)
e8=e7.a(e6.h(e9,"textures"))
u=J.kt(e8==null?D.cu:e8,w)
e8=x.j
t=J.kt(e8.a(e6.h(e9,"meshes")),w)
e6=x.n
s=C.a([],e6)
r=x.t
q=C.a([],r)
p=C.a([],e6)
o=C.a([],r)
n=C.a([],r)
m=C.a([],r)
for(e6=f1.a,r=J.a5(e6),l=t.a,k=J.a5(l),j=t.$ti.y[1],i=x.N,h=x.C,g=x.Y,f=x.v,e=x.G,d=v.a,a0=J.a5(d),a1=v.$ti.y[1],a2=u.a,a3=J.a5(a2),a4=u.$ti.y[1],a5=this.at,a6=f1.$ti.y[1],a7=0;a7<r.gM(e6);++a7){a8=a6.a(r.h(e6,a7))
a9=J.a5(a8)
b0=C.aJ(a9.h(a8,"mesh"))
b1=b0==null?e2:D.k.N(b0)
if(b1==null)continue
a9=C.aJ(a9.h(a8,"skin"))
b2=a9==null?e2:D.k.N(a9)
for(a9=J.kt(e8.a(J.q(j.a(k.h(l,b1)),"primitives")),w),b0=a9.$ti,a9=new C.bR(a9,a9.gM(0),b0.k("bR<bS.E>")),b3=b2==null,b0=b0.k("bS.E");a9.C();){b4=a9.d
if(b4==null)b4=b0.a(b4)
b5=J.a5(b4)
b6=J.Gm(e.a(b5.h(b4,"attributes")),i,h)
if(b6.h(0,e3)==null||b5.h(b4,"indices")==null)continue
b7=f0.EV(D.k.N(C.dQ(b6.h(0,e3)))).a
b8=b7.length/3|0
b9=b6.h(0,e4)!=null?f0.EV(D.k.N(C.dQ(b6.h(0,e4)))).a:e2
c0=b6.h(0,e5)!=null?f0.EV(D.k.N(C.dQ(b6.h(0,e5)))).a:e2
c1=C.aJ(b5.h(b4,"material"))
c2=c1==null?e2:D.k.N(c1)
c1=g.a(J.q(c2!=null?a1.a(a0.h(d,c2)):D.cz,"pbrMetallicRoughness"))
c3=c1==null?e2:J.Gm(c1,i,h)
if(c3==null)c3=D.cz
c1=e7.a(c3.h(0,"baseColorFactor"))
c4=c1==null?e2:J.kt(c1,f)
if(c4==null)c4=B.c77
c1=g.a(c3.h(0,"baseColorTexture"))
c5=c1==null?e2:J.Gm(c1,i,h)
c1=c5==null
c6=C.aJ(c1?e2:c5.h(0,"texCoord"))
c7=c6==null?e2:D.k.N(c6)
c8=b6.h(0,"TEXCOORD_"+(c7==null?0:c7))
c9=c8!=null?f0.EV(D.k.N(C.dQ(c8))).a:e2
if(!c1){c1=C.aJ(J.q(a4.a(a3.h(a2,D.k.N(C.dQ(c5.h(0,"index"))))),"source"))
d0=c1==null?e2:D.k.N(c1)
d1=d0!=null?f2.h(0,d0):e2}else d1=e2
d2=s.length/3|0
D.d.v(s,b7)
for(c1=c0!=null,c6=b9!=null,d3=0;d3<b8;++d3){o.push(b3?255:b2)
for(d4=d3*4,d5=0;d5<4;++d5){q.push(c6?D.k.N(b9[d4+d5]):0)
if(c1)d6=c0[d4+d5]
else d6=d5===0?1:0
p.push(d6)}}d7=f0.EV(D.k.N(C.dQ(b5.h(b4,"indices")))).a
for(b4=d7.length,d8=0;b5=d8+2,b5<b4;d8+=3){d9=D.k.N(d7[d8])
e0=D.k.N(d7[d8+1])
e1=D.k.N(d7[b5])
n.push(d2+d9)
n.push(d2+e0)
n.push(d2+e1)
m.push(this.bM4(d1,c9,d9,e0,e1,c4))}if(b3)a5.push(new C.bv(d2,b8,a7))}}return new A.dm_(new Float64Array(C.cf(s)),new Uint16Array(C.cf(q)),new Float64Array(C.cf(p)),new Uint8Array(C.cf(o)),new Int32Array(C.cf(n)),new Int32Array(C.cf(m)))},
bM4(d,e,f,g,h,i){var w,v,u,t,s,r,q,p=J.a5(i),o=p.h(i,0),n=p.h(i,1),m=p.h(i,2)
if(d!=null&&e!=null){w={}
p=f*2
v=g*2
u=h*2
t=(e[p]+e[v]+e[u])/3
s=(e[p+1]+e[v+1]+e[u+1])/3
r=w.a=w.b=w.c=0
q=new A.bOj(w,d)
q.$2(t,s)
for(p=[f,g,h];r<3;++r){v=p[r]*2
q.$2((t+e[v])/2,(s+e[v+1])/2)}o*=w.c/4/255
n*=w.b/4/255
m*=w.a/4/255}p=new A.bOi()
return(p.$1(o)<<16|p.$1(n)<<8|p.$1(m)|4278190080)>>>0},
b5v(d7,d8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4={},d5=d7.a,d6=d5.length/3|0
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
c3=A.h04(c1,c2,a9)
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
b8.bI(0,new A.bOm(c6,b9))
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
c9[d2]=q[d3]}d0[a9]=s[d1]}return new A.dgs(c7,c8,c9,d0,new Int32Array(C.cf(b7)),c6)},
b_N(a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0=d.b
a0===$&&C.c()
w=d.e
w===$&&C.c()
v=new Float64Array(C.cf(w))
w=d.f
w===$&&C.c()
u=new Float64Array(C.cf(w))
w=d.r
w===$&&C.c()
t=new Float64Array(C.cf(w))
s=a1==null?null:d.w.h(0,a1)
if(s!=null&&s.b>0){w=s.b
r=a2-Math.floor(a2/w)*w
for(w=s.c,q=w.length,p=0;p<w.length;w.length===q||(0,C.L)(w),++p){o=w[p]
n=o.b
if(n===0)n=v
else n=n===1?u:t
A.hrX(o,r,n)}}m=d.ax.cg(0,"world",new A.bOk(a0.length))
l=new A.bOl(d,v,u,t,new Float64Array(16),m)
a0=d.d
a0===$&&C.c()
w=a0.length
p=0
for(;p<a0.length;a0.length===w||(0,C.L)(a0),++p)l.$1(a0[p])
a0=d.x
a0===$&&C.c()
w=a0.length
k=0
p=0
for(;p<w;++p)k+=a0[p].length
a0=d.at
w=a0.length
j=new Float64Array((k+w)*16)
for(i=0,h=0;w=d.x,h<w.length;++h){g=w[h]
for(f=0;f<g.length;++f){w=g[f]
q=d.y
q===$&&C.c()
A.h05(m,w*16,q[h],f*16,j,i)
i+=16}}for(w=a0.length,p=0;p<a0.length;a0.length===w||(0,C.L)(a0),++p,i=e){e=i+16
D.o1.ea(j,i,e,m,a0[p].c*16)}return j},
b3O(b8,b9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3=b8.a,b4=b3.length/3|0,b5=new Float64Array(b4*3),b6=C.a([],x.t),b7=this.x
b7===$&&C.c()
w=b7.length
v=0
u=0
for(;u<b7.length;b7.length===w||(0,C.L)(b7),++u){t=b7[u]
b6.push(v)
v+=t.length*16}for(b7=b8.b,w=b8.c,s=b8.d,r=this.at.length!==0,q=v+4,p=v+8,o=v+12,n=v+1,m=v+5,l=v+9,k=v+13,j=v+2,i=v+6,h=v+10,g=v+14,f=0;f<b4;++f){e=f*3
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
cCU(d){var w,v,u=new A.bOs(this)
if(d)w=u.$1("walk")
else{v=u.$1("idle")
w=v==null?u.$1("samba"):v}if(w!=null)return w
u=u.$1("samba")
if(u==null){u=this.w
u=new C.ct(u,C.a3(u).k("ct<1>")).dL(0,new A.bOq(),new A.bOr(this))}return u},
cPR(d,e,a0,a1,a2,a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this
if(d){w=f.z
w===$&&C.c()
v=w}else{w=f.Q
w===$&&C.c()
v=w}u=f.cCU(a2)
w=f.w.h(0,u)
t=w==null?null:w.b
if(t==null)t=1
s=C.ie(v.a.length/3|0,new A.bOu(f,f.b3O(v,f.b_N(u,a2&&a1!=null?a1/50*t:a0)),36,Math.cos(a4),Math.sin(a4),a3,a5),!0,x.x)
r=C.a([],x.z)
for(w=v.e,q=w.length,p=x.o,o=v.f,n=0;n<q;n+=3){m=s[w[n]]
l=s[w[n+1]]
k=s[w[n+2]]
j=m.a
i=m.b
h=m.c
g=new A.E(l.a-j,l.b-i,l.c-h).Kj(new A.E(k.a-j,k.b-i,k.c-h)).gow(0)
r.push(new A.nd(C.a([m,l,k],p),g,C.b0(o[D.o.an(n,3)]),e,0.08,1,!1,0,0,2,0))}return r}}
A.dm_.prototype={}
A.daC.prototype={
cKP(d){var w,v,u=this.a,t=J.a5(u),s=x.j,r=x.G,q=C.aJ(J.q(r.a(J.q(s.a(t.h(u,"images")),d)),"bufferView")),p=q==null?null:D.k.N(q)
if(p==null)return null
w=r.a(J.q(s.a(t.h(u,"bufferViews")),p))
u=J.a5(w)
t=C.aJ(u.h(w,"byteOffset"))
v=t==null?null:D.k.N(t)
if(v==null)v=0
return C.zD(this.b,v,v+D.k.N(C.dQ(u.h(w,"byteLength"))))},
EV(a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=null,g="byteOffset",f=this.a,e=J.a5(f),d=x.j,a0=x.G,a1=a0.a(J.q(d.a(e.h(f,"accessors")),a5)),a2=J.a5(a1),a3=D.k.N(C.dQ(a2.h(a1,"count"))),a4=a2.h(a1,"type")
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
A.EC.prototype={}
A.O2.prototype={
gTf(){var w,v=this
if(!v.f)return"has died"
if(v.r>=0)return"in hospital"
if(v.c<30)return"in danger"
if(v.e)return"sick"
w=v.b
if(w>80)return"starving"
if(w>55)return"hungry"
if(v.d<40)return"unhappy at home"
return"fine"},
gaBv(d){var w,v=this.gTf()
A:{if("has died"===v){w="\ud83d\udd6f"
break A}if("in hospital"===v){w="\ud83c\udfe5"
break A}if("in danger"===v){w="\ud83c\udd98"
break A}if("sick"===v){w="\ud83e\udd12"
break A}if("starving"===v||"hungry"===v){w="\ud83c\udf7d"
break A}if("unhappy at home"===v){w="\ud83d\ude1f"
break A}w="\ud83d\ude42"
break A}return w}}
A.Hd.prototype={}
A.L7.prototype={}
A.aRu.prototype={
bvo(d,e){var w,v=C.a([],x.y)
for(w=0;w<7;++w)v.push(new A.O2(B.ON[w]))
this.c=v
v[1].b=55
v[4].b=40},
gFH(){var w,v,u,t=C.a([],x.y),s=this.c
s===$&&C.c()
w=s.length
v=0
for(;v<s.length;s.length===w||(0,C.L)(s),++v){u=s[v]
if(u.f)t.push(u)}return t},
gcGK(){var w=this.c
w===$&&C.c()
return new C.a2(w,new A.bHk(),C.U(w).k("a2<1>")).gM(0)},
YG(d){var w=this.f
D.d.ck(w,0,d)
if(w.length>12)w.pop()},
b8a(a2,a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=this
a1.as+=a3
for(w=a1.gFH(),v=w.length,u=-0.6*a3,t=0.8*a3,s=0.2*a3,r=a1.b,q=0.012*a3,p=a1.f,o=0.15*a3,n=0;n<w.length;w.length===v||(0,C.L)(w),++n){m=w[n]
l=a4.d
l===$&&C.c()
k=m.a
j=l[k.c]
i=j.gjy()
l=k.d
if(l>=0)h=!a4.d[l].gl2()
else{l=j.c
h=(l==="bathroom"||l==="kitchen")&&!j.gl2()}if(m.r<0){m.b=Math.min(100,m.b+s)
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
m.c=l}}if(l<=0)a1.aPK(m)}}for(w=a1.e,v=1.2*a3,u=2.2*a3,d=0;d<w.length;++d){a0=w[d]
t=a0.a
if(t<0)continue
s=a1.c
s===$&&C.c()
m=s[t]
if(!m.f){a0.a=-1
continue}t=a0.b=Math.max(0,a0.b-a3)
if(t>30)a0.c=Math.min(100,a0.c+u)
else if(t<=0)if((m.c-=v)<=0){a1.aPK(m)
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
a1.UX(a4)
if((a1.at-=a3)<=0){a1.at=60+r.aj()*50
a1.cCg(a4)}},
aPK(d){var w
d.f=!1
d.c=0
w=d.r
if(w>=0)this.e[w].a=-1
d.r=-1
D.d.bm(this.d,new A.bHh(d))
this.YG(d.a.b+" has died. Keep up with everybody's needs: food, medicine and a home that works.")},
aTn(d,e){return D.d.b7(this.d,new A.bHi(d,e))},
UX(d){var w,v,u,t,s,r,q,p,o,n=this,m=n.d,l=C.B(m,x.fC),k=l.length,j=n.f,i=0
for(;i<l.length;l.length===k||(0,C.L)(l),++i){w=l[i]
v=B.ON[w.b]
u=w.c==="power"
if(u){t=d.d
t===$&&C.c()
s=t[v.c].gjy()}else{t=v.d
r=d.d
if(t>=0){r===$&&C.c()
t=r[t].gl2()
s=t}else{r===$&&C.c()
t=r[v.c].gl2()
s=t}}if(s){D.d.W(m,w)
t=w.e
n.r=n.r+t;++n.y
u=u?"power is back":"leak is fixed"
D.d.ck(j,0,v.b+"'s "+u+". +"+t+" points. Thank you!")
if(j.length>12)j.pop()}}for(l=n.gFH(),k=l.length,u=n.b,i=0;i<l.length;l.length===k||(0,C.L)(l),++i){q=l[i]
if(m.length>=4)break
t=d.d
t===$&&C.c()
r=q.a
p=t[r.c]
if(!p.gjy()&&!n.aTn(r.a,"power")){m.push(new A.Hd(n.Q++,r.a,"power",B.cOh[u.aB(3)],15))
D.d.ck(j,0,r.b+" is calling for help: no power.")
if(j.length>12)j.pop()}t=r.d
o=t>=0?d.d[t]:p
t=o.c
if((t==="bathroom"||t==="kitchen")&&!o.gl2()&&!n.aTn(r.a,"leak")&&m.length<4){m.push(new A.Hd(n.Q++,r.a,"leak",B.cWb[u.aB(3)],15))
D.d.ck(j,0,r.b+" is calling for help: a leak.")
if(j.length>12)j.pop()}}},
cCg(d){var w,v,u,t,s,r,q=this
if(q.d.length>=3||q.gFH().length===0)return
w=q.b
v=q.gFH()[w.aB(q.gFH().length)]
u=d.d
u===$&&C.c()
t=v.a
s=u[t.c]
t=t.d
r=t>=0?u[t]:s
u=r.c
if((u==="bathroom"||u==="kitchen")&&r.gl2()&&w.h9()){r.ch=!0
r.cx=null}else if(s.gjy()){s.ay=!0
s.CW=null
s.db=!1
s.cy.a9(0)}else return
q.UX(d)},
bbC(d){var w,v,u,t=this
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
t.YG(u)
return u},
aIu(d){var w,v,u=this
if(!d.f)return d.a.b+" has died."
if(!d.e)return d.a.b+" is not sick."
w=u.x
if(w<=0)return y.k
u.x=w-1
d.e=!1
d.c=Math.min(100,d.c+20)
u.r+=3
v=d.a.b+" took the medicine and is better. +3 points."
u.YG(v)
return v},
b89(d){var w,v,u,t
if(!d.f)return d.a.b+" has died."
if(d.r>=0)return d.a.b+" is already in hospital."
if(!d.e&&d.c>60)return d.a.b+" is not ill enough for the hospital."
w=this.e
v=D.d.ba(w,new A.bHj())
if(v<0)return"The hospital is full. Treat the patients first, they go home when they are better."
w=w[v]
u=d.a
w.a=u.a
w.b=100
w.c=0
d.r=v
t=u.b+" is in bed "+(v+1)+" of the hospital. Keep up with their care."
this.YG(t)
return t},
cSu(d){var w,v,u=this,t=u.e[d],s=t.a
if(s<0)return"This bed is empty."
if(t.b>70)return"The patient is cared for already."
w=u.x
if(w<=0)return y.k
u.x=w-1
t.b=100;++u.r
w=u.c
w===$&&C.c()
v=w[s].a.b+" was treated. +1 point."
u.YG(v)
return v},
b91(d){var w,v=this
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
bdM(d){var w=d.a.a
return(w===1||w===4||w===3)&&d.r<0&&!D.d.b7(this.d,new A.bHo(d))&&D.o.F(D.k.bu(this.as/40)+w,3)===0},
cIu(d,e){var w,v,u,t,s,r,q,p,o,n=this,m=C.a([],x.I),l=d.d
l===$&&C.c()
w=l[e]
v=new A.bHm(n,e)
l=w.c
if(l==="outside"){for(l=D.d.gaf(n.gFH()),u=new C.fk(l,n.gcLE()),t=0;u.C();){s=l.gU(0)
r=(t&1)===1?40:0
m.push(v.$4$wander(s,-110+t*90,215+r,24));++t}return m}q=A.h6D(w)
for(u=D.d.gaf(n.gFH()),s=new C.fk(u,new A.bHl(n,e));s.C();){r=u.gU(0)
A:{if("bedroom"===l){p=new C.y(-w.gfw(0)*0.18,w.gjk(0)*0.6)
break A}if("kitchen"===l){p=new C.y(-w.gfw(0)*0.15,56)
break A}p=new C.y(-w.gfw(0)*0.25,40)
break A}o=D.d.gal(q.aGS(p,p))
m.push(v.$3(r,o.a,o.b))}return m},
cSe(a2){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=l.r,j=l.w,i=l.x,h=l.y,g=l.z,f=l.as,e=l.Q,d=x.ez,a0=C.a([],d),a1=l.c
a1===$&&C.c()
w=a1.length
v=x.N
u=x.aU
t=0
for(;t<a1.length;a1.length===w||(0,C.L)(a1),++t){s=a1[t]
a0.push(C.F(["hunger",s.b,"health",s.c,"comfort",s.d,"sick",s.e,"alive",s.f,"bed",s.r],v,u))}a1=C.a([],x.f4)
for(w=l.e,r=w.length,q=x.v,t=0;t<w.length;w.length===r||(0,C.L)(w),++t){p=w[t]
a1.push(C.F(["res",p.a,"care",p.b,"heal",p.c],v,q))}d=C.a([],d)
for(w=l.d,r=w.length,t=0;t<w.length;w.length===r||(0,C.L)(w),++t){o=w[t]
d.push(C.F(["id",o.a,"res",o.b,"kind",o.c,"msg",o.d,"reward",o.e,"age",o.f],v,u))}w=x.K
u=C.T(v,w)
for(r=a2.gqo(),q=r.length,t=0;t<r.length;r.length===q||(0,C.L)(r),++t){n=r[t]
u.n(0,""+n.a,n.gjy())}w=C.T(v,w)
for(r=D.d.gaf(a2.gqo()),q=new C.fk(r,new A.bHq());q.C();){m=r.gU(0)
w.n(0,""+m.a,m.gl2())}return C.F(["v",1,"seed",l.a,"points",k,"food",j,"medicine",i,"served",h,"saved",g,"clock",f,"nextCall",e,"res",a0,"beds",a1,"calls",d,"wired",u,"plumbed",w],v,x.C)},
Gu(d,e){return this.bkE(0,e)},
bkE(d,e){var w=0,v=C.j(x.H),u=1,t=[],s=this,r,q,p,o
var $async$Gu=C.e(function(f,g){if(f===1){t.push(g)
w=u}for(;;)switch(w){case 0:u=3
w=6
return C.b(C.az(),$async$Gu)
case 6:r=g
q=C.dU(s.cSe(e),x.N,x.C)
J.aF(q,"at",Date.now())
w=7
return C.b(r.ar("String","ngmy_community_v1",D.R.ao(q,null)),$async$Gu)
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
A.TZ.prototype={
T(){return new A.bhP()}}
A.bhP.prototype={
a_(){this.a1()
this.YH()},
YH(){return this.bYE()},
bYE(){var w=0,v=C.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$YH=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:m={}
w=3
return C.b(A.bHp(),$async$YH)
case 3:l=e
if(t.c==null){w=1
break}m.a=null
if(l!=null){s=J.a5(l)
r=C.aJ(s.h(l,"seed"))
q=r==null?null:D.k.N(r)
if(q==null)q=1
r=$.Hf
if((r==null?null:r.b)===q){r.toString
t.e=r}else{r=A.bPz(q)
t.e=$.Hf=r
A.hpr(r,l)}m.a=A.hps(l)
r=Date.now()
s=C.aJ(s.h(l,"at"))
s=s==null?null:D.k.N(s)
p=D.k.D((r-(s==null?Date.now():s))/1000*0.15,0,90)
while(p>0){o=p>5?5:p
s=m.a
r=t.e
r===$&&C.c()
s.b8a(0,o,r)
p-=o}}else{s=$.Hf
if(s==null)s=$.Hf=A.bPz(D.o.F(Date.now(),1e5))
t.e=s
s=s.b
n=A.fZR(s,s)
m.a=n
n.UX(t.e)}$.fMv=m.a
t.m(new A.dKa(m,t))
t.f=C.dA(D.h4,new A.dKb(t))
case 1:return C.h(u,v)}})
return C.i($async$YH,v)},
c2R(){var w,v,u,t=this,s=t.d
if(s==null||t.c==null)return
w=s.f
v=w.length===0?"":D.d.gK(w)
u=t.e
u===$&&C.c()
s.b8a(0,1,u)
if(w.length!==0&&D.d.gK(w)!==v)t.Ij(D.d.gK(w))
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
aai(d){return this.bPm(d)},
bPm(d){var w=0,v=C.j(x.H),u,t=this,s,r,q
var $async$aai=C.e(function(e,f){if(e===1)return C.f(f,v)
for(;;)switch(w){case 0:q=B.ON[d.b]
if(d.c==="power")s=q.c
else{r=q.d
s=r>=0?r:q.c}r=t.e
r===$&&C.c()
r.e=s
r=t.c
r.toString
w=3
return C.b(C.a6(r,!1).c6(C.e7(new A.dK6(),!1,null,x.H)),$async$aai)
case 3:if(t.c==null){w=1
break}r=t.d
if(r!=null)r.UX(t.e)
r=t.d
if(r!=null)r.Gu(0,t.e)
t.m(new A.dK7())
case 1:return C.h(u,v)}})
return C.i($async$aai,v)},
aim(d){return this.czX(d)},
czX(d){var w=0,v=C.j(x.H),u,t=this,s
var $async$aim=C.e(function(e,f){if(e===1)return C.f(f,v)
for(;;)switch(w){case 0:s=t.e
s===$&&C.c()
s.e=d.a.c
s=t.c
s.toString
w=3
return C.b(C.a6(s,!1).c6(C.e7(new A.dKq(),!1,null,x.H)),$async$aim)
case 3:if(t.c==null){w=1
break}s=t.d
if(s!=null)s.UX(t.e)
t.m(new A.dKr())
case 1:return C.h(u,v)}})
return C.i($async$aim,v)},
YI(d,e){var w=null,v=e.j(0.18),u=C.m(14),t=C.I(e.j(0.7),D.q,1)
return C.p(w,C.d(d,w,w,w,w,w,w,C.l(w,w,e,w,w,w,w,w,w,w,w,12.5,w,w,D.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),D.f,w,w,new C.o(v,w,t,u,w,w,D.n),w,w,w,w,A4.ag0,w,w,w)},
Vp(d,e,f){var w=null
return new C.C(D.n2,C.A(C.a([new C.a7(62,w,C.d(d,w,w,w,w,w,w,Q.a6V,w,w,w),w),C.D(C.bw(C.m(6),C.lY(D.bF,w,w,8,w,D.k.D(e/100,0,1),new C.lR(f,x.Q)),D.aq),1)],x.p),D.m,w,D.e,D.j,0,w,w),w)},
OP(d,e,f){var w=null,v=e==null,u=v?D.dp:f.j(0.22),t=C.m(12),s=C.I(v?D.b2:f,D.q,1)
return C.aE(w,C.p(w,C.d(d,w,w,w,w,w,w,C.l(w,w,v?D.c_:f,w,w,w,w,w,w,w,w,12.5,w,w,D.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),D.f,w,w,new C.o(u,w,s,t,w,w,D.n),w,w,w,w,D.nQ,w,w,w),D.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,e,w,w,w,w,w,w,!1,D.a8)},
acF(d,e){return this.OP(d,e,D.aH)},
OQ(d,e){var w=null,v=C.a([e.j(0.1),B.Ej],x.O),u=C.m(18)
return C.p(w,d,D.f,w,w,new C.o(w,w,C.I(e.j(0.5),D.q,1),u,w,new C.a8(D.b0,D.b6,D.x,v,w,w),D.n),w,w,w,D.dc,D.bk,w,w,w)},
c2P(d){return this.OQ(d,D.b2)},
aX4(d,e,f){var w,v=null,u=this.r===d,t=u?D.aH.j(0.22):D.c.j(0.06),s=C.m(14),r=u?D.aH:D.b2
r=C.I(r,D.q,u?2:1)
w=f>0?e+" ("+f+")":e
return C.D(C.aE(v,C.p(v,C.av(C.d(w,v,v,v,v,v,v,C.l(v,v,u?D.aH:D.ad,v,v,v,v,v,v,v,v,12.5,v,v,D.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v,v,v),D.f,v,v,new C.o(t,v,r,s,v,v,D.n),v,v,v,D.je,D.jx,v,v,v),D.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new A.dKp(this,d),v,v,v,v,v,v,!1,D.a8),1)},
avu(d,e){return this.aX4(d,e,0)},
bCy(d){var w,v,u,t,s,r,q,p,o,n=this,m=null,l=d.d
if(l.length===0)return new C.C(D.ew,C.v(B.d3u,D.m,m,D.e,D.j,0,D.p),m)
w=x.p
v=C.a([],w)
for(u=l.length,t=0;t<l.length;l.length===u||(0,C.L)(l),++t){s=l[t]
r=s.c==="power"
q=r?D.cn:D.cs
p=B.ON[s.b]
o=r?"\u26a1 Power":"\ud83d\udeb0 Leak"
r=r?D.cn:D.cs
v.push(n.OQ(C.v(C.a([new C.cm(D.aO,D.e,D.j,D.m,m,D.p,m,0,C.a([new A.abu(p.e,44,m),D.av,new C.bD(1,D.bi,new C.x(p.b,m,D.i3,m,m,m,m,m,m,m,m,m),m),n.YI(o+"  +"+s.e,r)],w),m),D.P,new C.x('"'+s.d+'"',m,B.f_i,m,m,m,m,m,m,m,m,m),D.S,new C.bH(D.a7,m,m,n.acF("\ud83d\udd27 Go and fix it",new A.dK5(n,s)),m)],w),D.F,m,D.e,D.j,0,D.p),q))}return C.v(v,D.m,m,D.e,D.j,0,D.p)},
c2Q(d){var w,v,u,t,s,r,q,p,o,n=this,m=null,l=x.p,k=C.a([],l),j=d.c
j===$&&C.c()
w=j.length
v=0
for(;v<j.length;j.length===w||(0,C.L)(j),++v){u=j[v]
t=u.f
if(!t)s=D.b2
else s=u.gTf()==="fine"?D.b8:D.cj
t=t?1:0.5
r=u.a
q=u.gaBv(0)
p=u.gTf()
o=u.gTf()==="fine"?D.es:D.f3
r=C.a([new C.cm(D.aO,D.e,D.j,D.m,m,D.p,m,0,C.a([new A.abu(r.e,50,m),D.av,new C.bD(1,D.bi,C.v(C.a([new C.x(r.b+"  "+q,m,D.i3,m,m,m,m,m,m,m,m,m),new C.x(r.f,m,B.eUs,m,m,m,m,m,m,m,m,m),new C.x("Now: "+p,m,new C.G(!0,o,m,m,m,m,12.5,D.H,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m,m,m,m,m,m,m,m,m)],l),D.F,m,D.e,D.j,0,D.p),m)],l),m),D.P,n.Vp("Food",100-u.b,D.ct),n.Vp("Health",u.c,D.b8),n.Vp("Home",u.d,D.cs)],l)
if(u.f){q=n.acF("\ud83c\udf5e Feed",new A.dKc(n,d,u))
p=n.OP("\ud83d\udc8a Medicine",u.e?new A.dKd(n,d,u):m,D.by)
D.d.v(r,C.a([D.an,new C.BQ(D.bB,8,8,D.bs,C.a([q,p,n.OP("\ud83c\udfe5 Hospital",u.r>=0?m:new A.dKe(n,d,u),D.cj),n.OP("\ud83c\udfe0 Visit",new A.dKf(n,u),D.b1)],l),m)],l))}k.push(n.OQ(new C.kA(t,C.v(r,D.F,m,D.e,D.j,0,D.p),m),s))}return C.v(k,D.m,m,D.e,D.j,0,D.p)},
bVM(d){var w,v,u,t,s=null,r=x.p,q=C.a([B.e37],r)
for(w=d.e,v=0;v<w.length;++v){u=w[v].a<0
t=u?D.b2:D.cj
q.push(this.OQ(u?new C.cm(D.aO,D.e,D.j,D.m,s,D.p,s,0,C.a([B.fnl,D.av,new C.x("Bed "+(v+1)+": empty",s,B.eUe,s,s,s,s,s,s,s,s,s)],r),s):new C.fh(new A.dK9(this,d,v),s),t))}return C.v(q,D.m,s,D.e,D.j,0,D.p)},
cqh(d){var w=this,v=null,u=x.p,t=w.OQ(C.A(C.a([B.f9C,D.av,B.bv6,w.acF("Buy",new A.dKk(w,d))],u),D.m,v,D.e,D.j,0,v,v),D.ct),s=w.OQ(C.A(C.a([B.fu2,D.av,B.bvk,w.OP("Buy",new A.dKl(w,d),D.by)],u),D.m,v,D.e,D.j,0,v,v),D.by),r=C.a([B.fok,D.an,C.d("Calls answered: "+d.y+"\nPatients sent home better: "+d.z+"\nPeople lost: "+d.gcGK(),v,v,v,v,v,v,B.aP1,v,v,v)],u)
if(d.gFH().length===0)D.d.v(r,C.a([D.S,w.acF("Start a new community",new A.dKm(w))],u))
return C.v(C.a([t,s,w.c2P(C.v(r,D.F,v,D.e,D.j,0,D.p))],u),D.m,v,D.e,D.j,0,D.p)},
B(d){var w,v,u,t,s,r,q=this,p=null,o=q.d
if(o==null)w=D.lz
else{w=x.p
v=C.A(C.a([C.aH(p,p,p,p,M.nd,p,p,p,new A.dKs(d),p,p,p,p,p,p),B.buP,q.YI("\u2b50 "+o.r,D.aH)],w),D.m,p,D.e,D.j,0,p,p)
u=q.YI("\ud83c\udf5e "+o.w,D.ct)
t=q.YI("\ud83d\udc8a "+o.x,D.by)
s=o.e
s=C.A(C.a([u,D.ab,t,D.ab,q.YI("\ud83c\udfe5 "+new C.a2(s,new A.dKt(),C.U(s).k("a2<1>")).gM(0)+"/"+s.length,D.cj)],w),D.m,p,D.bb,D.j,0,p,p)
t=C.A(C.a([q.aX4("calls","\ud83d\udcde Calls",o.d.length),q.avu("people","\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc67 People"),q.avu("hospital","\ud83c\udfe5 Hospital"),q.avu("shop","\ud83d\uded2 Shop")],w),D.m,p,D.e,D.j,0,p,p)
r=q.r
A:{if("people"===r){u=q.c2Q(o)
break A}if("hospital"===r){u=q.bVM(o)
break A}if("shop"===r){u=q.cqh(o)
break A}u=q.bCy(o)
break A}w=C.a([new C.C(B.btk,v,p),new C.C(D.AH,s,p),new C.C(B.bub,t,p),D.P,C.D(C.cB(C.a([u],w),p,D.Ly,p,p,D.ah,!1),1)],w)
if(q.w!=null){v=D.e9.j(0.96)
u=C.m(14)
t=C.I(D.b8,D.q,1)
s=q.w
s.toString
w.push(C.p(p,C.d(s,p,p,p,p,p,p,B.eWC,p,p,p),D.f,p,p,new C.o(v,p,t,u,p,p,D.n),p,p,p,F.ag2,D.bk,p,p,1/0))}w=C.v(w,D.m,p,D.e,D.j,0,D.p)}return C.c8(p,D.bX,C.bm(!0,w,!0,!1,D.af,!0,!0),p,!1,!1,p,p)}}
A.abu.prototype={
B(d){var w=null,v=this.d
return new C.a7(v,v,C.b3(w,w,w,new A.bcJ(this.c,w),D.au),w)},
gY(d){return this.d}}
A.bcJ.prototype={
a5(d,e){var w,v,u,t,s=e.a,r=s/2,q=$.X(),p=C.M()
p.r=D.dp.gp(0)
d.ai(new C.u(r,r),r,p)
p=d.a
J.bz(p.save())
q=new C.aQ(q.r,D.ap,null,null,C.a([],x.m))
r=0+s
q.E(new C.ku(new C.aa(0,0,r,r)))
d.rj(0,q)
q=s*0.1
r=s*0.78
w=s*0.5
v=C.M()
u=this.b
v.r=u.c.gp(0)
d.hM(new C.aa(q,r,q+s*0.8,r+w),v)
v=s*0.27
r=s*0.16
t=C.M()
t.r=u.a.gp(0)
d.hM(new C.aa(v,r,v+s*0.46,r+s*0.56),t)
t=s*0.24
r=C.M()
r.r=u.b.gp(0)
d.f4(new C.aa(t,q,t+s*0.52,q+w),3.14,3.14,!0,r)
r=s*0.44
q=s*0.035
t=C.M()
t.r=D.ps.gp(0)
d.ai(new C.u(s*0.42,r),q,t)
t=C.M()
t.r=D.ps.gp(0)
d.ai(new C.u(s*0.58,r),q,t)
t=s*0.4
q=C.M()
q.b=D.ae
q.c=1.4
q.r=D.er.gp(0)
d.f4(new C.aa(t,w,t+s*0.2,w+s*0.12),0.2,2.7,!1,q)
p.restore()},
aq(d){return!1}}
A.mi.prototype={}
A.XH.prototype={}
A.zM.prototype={}
A.a3C.prototype={}
A.BO.prototype={
gj9(){return this.a==="ok"}}
A.a43.prototype={}
A.hk.prototype={}
A.Dm.prototype={}
A.pv.prototype={}
A.b6M.prototype={}
A.qc.prototype={}
A.aTO.prototype={
gBe(){var w=this.c
return w.c>=2&&A.afu(A.Ag(this.a),w).a==="ok"},
gda(d){return this.c}}
A.a46.prototype={
gyA(){var w,v,u=this.id,t=u==="ptrap"
if(t||u==="faucet"){w=this.k2
if(w==null)return!1
if(t)if(w.a.a===3){u=w.b
u=new C.bc(u,C.a3(u).k("bc<2>")).d9(0,new A.bOZ())&&w.c}else u=!1
else u=A.fo_(w)&&w.f
return u}v=this.k1
return v!=null&&v.c>=2&&A.afu(A.Ag(u),v).a==="ok"},
ga4E(){var w=this.id
if(w.length===0)w=this.gjy()
else w=w!=="fan"||this.gyA()
return w},
gTi(){var w=this.id
if(w.length===0)w=this.gjy()
else w=w!=="switch"||this.gyA()
return w},
gaFm(){var w=this.id
if(w.length===0)w=this.gjy()
else w=!(w==="outlet"||w==="gfci")||this.gyA()
return w},
gfw(d){var w,v=this.c
A:{if("bathroom"===v){w=110
break A}if("kitchen"===v){w=140
break A}if("living"===v){w=180
break A}if("hall"===v){w=300
break A}if("outside"===v){w=1200
break A}w=130
break A}return w},
gjk(d){var w,v=this.c
A:{if("bathroom"===v){w=100
break A}if("kitchen"===v){w=110
break A}if("living"===v){w=120
break A}if("hall"===v){w=90
break A}if("outside"===v){w=900
break A}w=112
break A}return w},
gjy(){var w,v=this
if(v.c!=="outside"){w=v.id
if(w.length!==0)w=w==="ptrap"||w==="faucet"||v.gyA()
else{w=v.CW
w=w==null?null:w.gaCV()
if(w==null)w=!v.ay}}else w=!0
return w},
gl2(){var w=this,v=w.c
if(v==="bathroom"||v==="kitchen"){v=w.id
if(v.length!==0)v=!(v==="ptrap"||v==="faucet")||w.gyA()
else{v=w.cx
v=v==null?null:v.gBe()
if(v==null)v=!w.ch}}else v=!0
return v},
SP(d){var w,v,u,t
for(w=this.x,v=w.length,u=0;u<v;++u){t=w[u]
if(t.a===d)return t}return null},
ey(d,e,f,g){var w=this,v=w.y++,u=f==null?0:f,t=new A.a43(v,e,u,g==null?w.gjk(0)*0.6:g)
w.x.push(t)
w.aBU(0,t)
return t},
L(d,e){return this.ey(0,e,null,null)},
aBU(d,e){var w,v,u,t=e.b,s=B.pW.h(0,t)
s.toString
w=(e.e&1)===1
v=w?s.d:s.c
u=w?s.c:s.d
s=v/2
e.c=D.k.D(e.c,-this.gfw(0)/2+s+1,this.gfw(0)/2-s-1)
s=u/2
e.d=D.k.D(e.d,s+1,this.gjk(0)-s-1)
if(D.d.t(B.awP,t)){e.c=D.k.V(e.c/40)*40
e.d=D.k.V(e.d/40)*40}}}
A.aTT.prototype={
bvz(d){var w,v,u
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
break B}u=A.yA(0,w,v,0,0,1,1,C.a([],x.D))
u.id=d
u.dx=d==="fan"?"fan":"light"
if(d==="gfci")u.Q=5
u.ch=u.ay=!1
u.Q=v==="bathroom"||v==="kitchen"?5:0
this.ass(u)
u.fr="bangtv"
u.fy=!0
u.go=Math.max(0,D.d.ba(E.jZ,new A.bPA()))
this.d=C.a([u],x.A)},
cMw(){var w,v,u,t,s,r
for(w=this.gqo(),v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u){t=w[u]
t.cx=t.CW=null
s=t.ay=!0
r=t.c
t.ch=r!=="bathroom"?r==="kitchen":s
t.db=!1
t.cy.a9(0)
D.d.a9(t.dy)}},
c2S(){var w,v,u,t,s,r,q,p=this,o="back",n="bedroom",m="bathroom",l=new C.eP()
l.dG(p.b)
w=new A.bPB()
v=x.D
u=C.a([],v)
for(t=0;t<10;++t)u.push(new A.qc(o,-126+t*28,B.bVz[t]))
s=C.a([A.yA(0,"Bedroom 1",n,0,0,2,2,C.a([w.$1(-48)],v)),A.yA(1,"Bedroom 2",n,2,0,2,2,C.a([w.$1(-48)],v)),A.yA(2,"Bathroom 1",m,4,0,1,2,C.a([B.Zd],v)),A.yA(3,"Bedroom 3",n,5,0,2,2,C.a([w.$1(-48)],v)),A.yA(4,"Bathroom 2",m,7,0,2,2,C.a([B.Zd],v)),A.yA(5,"Hall","hall",0,2,9,1,u),A.yA(6,"Bedroom 4",n,0,3,2,2,C.a([w.$1(-48)],v)),A.yA(7,"Bedroom 5",n,2,3,2,2,C.a([w.$1(-48)],v)),A.yA(8,"Bathroom 3",m,4,3,1,2,C.a([B.Zd],v)),A.yA(9,"Kitchen","kitchen",5,3,2,2,C.a([new A.qc(o,-26,5),B.by2],v)),A.yA(10,"Living room","living",7,3,2,2,C.a([new A.qc(o,-70,5),B.by1,B.by0],v)),A.yA(11,"Garden","outside",0,5,9,1,C.a([B.by_],v))],x.A)
p.d=s
for(r=0;r<12;++r){q=s[r]
v=q.c
if(v==="outside"){p.ass(q)
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
p.ass(q)}v=p.d
v[3].ay=!0
v[2].ch=!0},
ass(d){var w,v,u="rug",t="plant",s="lamppost",r="fence",q=d.gfw(0)/2
switch(d.c){case"bedroom":d.ey(0,u,0,d.gjk(0)*0.55)
d.ey(0,"bed",24,46)
d.ey(0,"nightstand",-8,14)
d.ey(0,"wardrobe",-q+12,70).e=1
d.ey(0,"desk",q-14,100).e=3
break
case"living":d.ey(0,u,0,70)
d.ey(0,"sofa",0,100)
d.ey(0,"coffee",0,68)
d.ey(0,"armchair",66,70)
d.ey(0,t,76,14)
d.ey(0,"lamp",-76,14)
break
case"kitchen":d.ey(0,"dining",0,78)
d.ey(0,"chair",-24,78).e=1
d.ey(0,"chair",24,78).e=3
d.ey(0,t,58,20)
break
case"bathroom":d.ey(0,u,0,62).e=0
d.ey(0,t,d.gfw(0)/2-12,d.gjk(0)-12)
break
case"outside":for(w=-320;w<=320;w+=40)d.ey(0,w===0?"roadcross":"road",w,360)
for(v=320;v>=160;v-=40)d.ey(0,"road",0,v).e=1
d.ey(0,"shop",-200,270)
d.ey(0,"hospital",210,275)
d.ey(0,"firestation",-340,275)
d.ey(0,"school",360,275)
d.ey(0,"house2",-140,150)
d.ey(0,"car",-120,360)
d.ey(0,"ambulance",120,360).e=2
d.ey(0,"firetruck",-340,318)
d.ey(0,"tree",-190,60)
d.ey(0,"tree",190,90)
d.ey(0,"pine",250,40)
d.ey(0,"pine",-260,30)
d.ey(0,"bush",-70,20)
d.ey(0,"bush",70,20)
d.ey(0,"flowers",-30,24)
d.ey(0,"flowers",30,24)
d.ey(0,s,40,330)
d.ey(0,s,-80,330)
d.ey(0,"bench",120,190)
d.ey(0,"pond",160,470)
d.ey(0,"dog",60,60)
d.ey(0,"cat",-50,80)
d.ey(0,"cow",-300,520)
d.ey(0,"cow",-240,560)
d.ey(0,"sheep",-180,540)
d.ey(0,"horse",260,560)
d.ey(0,"chicken",-100,500)
d.ey(0,r,-270,480)
d.ey(0,r,-206,480)
d.ey(0,r,-142,480)
break
case"hall":d.ey(0,u,0,46)
d.ey(0,t,-60,76)
d.ey(0,t,60,76)
break}},
gqo(){var w,v,u,t=C.a([],x.A),s=this.d
s===$&&C.c()
w=s.length
v=0
for(;v<s.length;s.length===w||(0,C.L)(s),++v){u=s[v]
if(u.c!=="outside")t.push(u)}return t},
gcT_(){var w=this.gqo()
return new C.a2(w,new A.bPF(),C.U(w).k("a2<1>")).gM(0)},
gcPQ(){var w=this.d
w===$&&C.c()
return new C.a2(w,new A.bPE(),C.U(w).k("a2<1>")).gM(0)},
gcPP(){var w=this.d
w===$&&C.c()
return new C.a2(w,new A.bPD(),C.U(w).k("a2<1>")).gM(0)},
gcIF(){var w=this.gqo()
return new C.a2(w,new A.bPC(),C.U(w).k("a2<1>")).gM(0)}}
A.N4.prototype={
T(){var w=new C.BF()
$.CB()
w.j0(0)
return new A.aCr(w,B.avV,C.aX(x.N),new C.cr(null,x.eF))}}
A.aCr.prototype={
gajt(){var w,v,u=$.fMv
if(u!=null){w=u.a
v=this.d
v===$&&C.c()
v=w===v.b
w=v}else w=!1
return w?u:null},
b0U(){var w,v,u=this.gajt()
if(u==null)u=null
else{w=this.d
w===$&&C.c()
v=w.d
v===$&&C.c()
w=u.cIu(w,v[w.e].a)
u=w}this.fr=u==null?B.avV:u},
gbfx(){var w=this.d
w===$&&C.c()
w=w.gqo()
return new C.a2(w,new A.e2f(),C.U(w).k("a2<1>")).gM(0)},
a_(){var w,v,u,t,s=this
s.a1()
w=s.a.r
if(w.length!==0)w=s.d=A.hsa(w)
else{w=$.Hf==null
if(w){w=D.o.F(Date.now(),1e5)
$.Hf=A.bPz(w)}w=$.Hf
w.toString
w=s.d=w}v=s.a
w.c=v.d||w.c
u=new A.AC(-0.05,0.1,120,B.fxU,$.aw())
u.f=560
s.e=u
if(v.f.length!==0){w=w.gqo()
t=new C.a2(w,new A.e2c(s),C.U(w).k("a2<1>"))
if(!t.gam(0)){w=s.d
w===$&&C.c()
w.e=t.gK(0).a}}A.aTF($.bB1)
s.b0U()
w=s.d
w===$&&C.c()
v=w.d
v===$&&C.c()
s.f=A.hes(v[w.e],!1,"look",s.gbfx(),s.fr,0)
s.avv(!0)
s.fx=C.dA(D.fG,new A.e2d(s))
$.aU.x1$.push(new A.e2e(s))},
q(){var w=this,v=w.p1
if(v!=null)v.a8(0)
v=w.ch
if(v!=null)v.a8(0)
v=w.dx
if(v!=null)v.a8(0)
v=w.fx
if(v!=null)v.a8(0)
w.a2()},
bY9(){var w,v=this.d
v===$&&C.c()
w=v.a
A:{if("switch"===w){v="The ceiling light is already in. Tap the red switch on the wall and wire it. Then flip it to see the light work."
break A}if("outlet"===w){v="Tap the red outlet on the wall and wire it. Then plug in a lamp or a TV to test it."
break A}if("gfci"===w){v="Tap the red GFCI outlet and wire it. Then plug in a hair dryer to test it."
break A}if("fan"===w){v="Tap the ceiling fan and wire it. Then flip the wall switch and watch it spin."
break A}if("ptrap"===w){v="The sink has no drain yet. Tap the sink and build the drain under it."
break A}v="The faucet is not connected yet. Tap the sink and connect the hoses."
break A}return v},
avv(d){var w,v,u,t,s,r,q=this,p=q.d
p===$&&C.c()
w=p.d
w===$&&C.c()
v=w[p.e]
u=-0.05
if(q.z){t=new A.E(0,48,v.gjk(0)*0.55)
p=q.e
p===$&&C.c()
p.e=2
p.f=12
p.r=-1.2
p.w=1.2
p.GA(!0)
s=3
r=0}else if(v.c==="outside"){p=q.e
p===$&&C.c()
p.e=30
p.f=1100
p.r=0.03
p.w=1.35
p.GA(!0)
t=B.fxS
s=540
r=0.35
u=-0.25}else if(q.x){t=new A.E(0,40,v.gjk(0)*0.3)
s=Math.max(v.gfw(0)*0.8,v.gjk(0)*0.9)+10
p=q.e
p===$&&C.c()
p.e=6
p.f=s*1.6
p.r=0.03
p.w=1.35
p.y=0.5
p.GA(!1)
r=0.1}else{t=new A.E(0,30,v.gjk(0)*0.45)
s=(v.gfw(0)*1.2>v.gjk(0)*1.4?v.gfw(0)*1.2:v.gjk(0)*1.4)+30
p=q.e
p===$&&C.c()
p.e=6
p.f=560
p.r=0.1
p.w=1.35
p.y=0.9
p.GA(!1)
r=0.5
u=-0.12}p=q.e
if(d){p===$&&C.c()
p.d=t
p.c=s
p.a=u
p.b=r}else{p===$&&C.c()
p.lU(s,r,t,u)}},
OR(){return this.avv(!1)},
bJI(d,e){var w,v,u,t,s,r,q,p=this,o=p.e
o===$&&C.c()
w=o.cIN(d,e)
if(w==null)return
o=p.d
o===$&&C.c()
v=o.d
v===$&&C.c()
u=v[o.e]
if(p.z){t=D.k.D(w.a,-u.gfw(0)/2+10,u.gfw(0)/2-10)
s=D.k.D(w.c,10,u.gjk(0)-10)
p.e.aIv(new A.E(t,48,s))}else{o=u.c==="outside"
if(o&&p.k4&&p.ok!=null){o=p.ok
o.toString
o.r=new C.y(D.k.D(w.a,-u.gfw(0)/2+12,u.gfw(0)/2-12),D.k.D(w.c,-290,u.gjk(0)-12))}else{v=p.e
r=w.a
q=w.c
if(o)v.zd(Math.max(60,v.c*0.55),new A.E(r,30,q))
else{o=D.k.D(r,-u.gfw(0)/2,u.gfw(0)/2)
q=D.k.D(q,0,u.gjk(0))
v.zd(Math.max(40,p.e.c*0.6),new A.E(o,36,q))}}}A.m7(560,50,0.25,"tri")},
k9(){var w,v,u,t,s=this
s.b0U()
w=s.d
w===$&&C.c()
v=w.d
v===$&&C.c()
w=v[w.e]
v=s.r
u=s.Q
t=s.gbfx()
s.f=A.hes(w,s.z,v,t,s.fr,u)},
OT(d,e){var w=this,v=w.ch
if(v!=null)v.a8(0)
w.m(new A.e1C(w,d,e))
w.ch=C.cM(D.ed,new A.e1D(w))},
ka(d){return this.OT(d,!0)},
QO(d){this.m(new A.e1E(this,d))
A.m7(660,50,0.25,"tri")},
avw(d,e){var w,v=this,u=v.d
u===$&&C.c()
if(d!==u.e){u=u.d
u===$&&C.c()
u=d>=u.length}else u=!0
if(u)return
if(v.k4&&d!==11)v.azv()
if(!e&&v.cx!=null)v.a1p()
v.m(new A.e0Z(v,d))
u=v.d
w=u.d
w===$&&C.c()
u=w[u.e]
if(u.c==="outside")v.ok=A.h80(u,0,24)
v.OR()
A.m7(520,60,0.25,"tri")},
OS(d){return this.avw(d,!1)},
aUW(d){var w,v,u,t=this
if(d===700){w=t.d
w===$&&C.c()
v=w.d
v===$&&C.c()
return v[w.e].gaFm()}if(d===701){w=t.d
w===$&&C.c()
v=w.d
v===$&&C.c()
w=v[w.e]
return w.id.length!==0||w.gjy()}if(d===702){w=t.d
w===$&&C.c()
v=w.d
v===$&&C.c()
return v[w.e].gTi()}if(d===703){w=t.d
w===$&&C.c()
v=w.d
v===$&&C.c()
return v[w.e].ga4E()}if(d>=800&&d<820){u=d-800
w=t.d
w===$&&C.c()
v=w.d
v===$&&C.c()
w=v[w.e].dy
return u<w.length&&w[u].gBe()}if(d===720){w=t.d
w===$&&C.c()
v=w.d
v===$&&C.c()
return v[w.e].gaFm()}if(d===721){w=t.d
w===$&&C.c()
v=w.d
v===$&&C.c()
w=v[w.e]
return w.id.length!==0||w.gjy()}if(d>=722&&d<728){u=d-720-2
w=t.d
w===$&&C.c()
v=w.d
v===$&&C.c()
w=v[w.e].dy
return u<w.length&&w[u].gBe()}w=t.d
w===$&&C.c()
v=w.d
v===$&&C.c()
return v[w.e].gjy()},
b5H(){var w,v,u=this,t=u.d
t===$&&C.c()
w=t.d
w===$&&C.c()
v=w[t.e].dx==="fan"
u.m(new A.e1M(u))
t=u.d
w=t.d
w===$&&C.c()
if(w[t.e].db)t=v?"The fan spins.":"The light is on."
else t=v?"The fan stops.":"The light is off."
u.ka(t)
t=u.d
w=t.d
w===$&&C.c()
A.m7(w[t.e].db?900:500,60,0.25,"tri")},
c2W(d){var w,v,u,t,s,r,q,p,o,n,m=this
if(d===0)return
if(d>=900&&d<920){m.clI(d-900)
return}if(d>=100&&d<200){if(m.r!=="furniture")return
m.m(new A.e19(m,d))
w=m.d
w===$&&C.c()
v=w.d
v===$&&C.c()
u=v[w.e].SP(m.Q)
if(u!=null)m.ka(B.pW.h(0,u.b).a+": move it with the arrows.")
return}if(d===300||d===301||d===302){if(m.r!=="walls")return
m.m(new A.e1a(m,d))
m.ka("Wall picked. Choose a paint colour.")
return}if(d>=600&&d<620){t=d-600
w=m.d
w===$&&C.c()
v=w.d
v===$&&C.c()
w=v[w.e].w
if(t>=w.length)return
if(m.r==="doors"){m.m(new A.e1b(m,t))
w=m.d
v=w.d
v===$&&C.c()
A.m7(v[w.e].at.t(0,t)?700:450,70,0.25,"tri")
return}w=w[t]
m.m(new A.e1c(m,t))
A.m7(700,70,0.25,"tri")
C.bN(D.n1,new A.e1d(m,t,w.c),x.c)
return}w=d===700
v=!w
s=!0
if(v)if(d!==701){if(d!==702)if(d!==703)if(!(d>=800&&d<820))r=d>=720&&d<728
else r=s
else r=s
else r=s
s=r}if(m.w&&s){q=m.aUW(d)
A.m7(q?1400:500,160,0.25,"tri")
w=q?"The tester glows and beeps: LIVE, 120 volts. Never touch a live wire. Switch the breaker off first.":"The tester stays dark: no power here. It still needs wiring."
m.OT(w,!q)
return}if(!v||d===701){if(m.aUW(d))m.axe(w?0:1)
else m.aRk()
return}if(d>=800&&d<820){t=d-800
w=m.d
w===$&&C.c()
v=w.d
v===$&&C.c()
w=v[w.e].dy
if(t>=w.length)return
p=w[t]
if(!p.gBe())m.aiu(t)
else if(p.a==="switch")m.b5H()
else m.axe(2+t)
return}if(d===702||d===703){w=m.d
w===$&&C.c()
v=w.d
v===$&&C.c()
if(v[w.e].gTi()){w=m.d
v=w.d
v===$&&C.c()
w=!v[w.e].ga4E()}else w=!0
if(w)m.aRk()
else m.b5H()
return}w=d===730
if(w||d===731){v=m.d
if(w){v===$&&C.c()
w=v.d
w===$&&C.c()
r=v.e
o=w[r].fr}else{v===$&&C.c()
w=v.d
w===$&&C.c()
r=v.e
o=w[r].fx}if(o==null)return
v===$&&C.c()
if(!w[r].fy){m.m(new A.e1e(m))
w=m.d
v=w.d
v===$&&C.c()
m.ka("The TV is on and playing "+E.jZ[v[w.e].go].a+".")}else{n=A.bzt(o)
w=m.c
w.toString
G.fK4(w,0,n.a,!0,D.v1,n.b)}return}if(d>=720&&d<728){w=m.d
w===$&&C.c()
v=w.d
v===$&&C.c()
r=d-720
o=v[w.e].cy.h(0,r)
if(o==null)return
n=A.bzt(o)
if(n.d>0||n.e){w=m.c
w.toString
G.fK4(w,0,n.a,!0,D.v1,n.b)}else m.axe(r)
return}if(d===710||d===711||d===712||d===713){w=m.d
w===$&&C.c()
v=w.d
v===$&&C.c()
if(!v[w.e].gl2())if(m.d.a.length!==0)m.DJ()
else m.ZY()
else{w=m.f
w===$&&C.c()
t=w.b.h(0,d)
if(t!=null)m.ka(t.a+": "+t.b)}}},
clI(d){var w,v,u=this.gajt()
if(u!=null){w=u.c
w===$&&C.c()
w=d>=w.length}else w=!0
if(w)return C.f6(null,x.H)
w=u.c
w===$&&C.c()
v=w[d]
w=this.c
w.toString
return C.bX(E.mT,null,new A.e1A(this,v,u),w,!0,!0,!0,D.lm,!1,!1,x.H)},
axe(d){var w=this.c
w.toString
return C.bX(E.mT,null,new A.e1k(this,d),w,!0,!0,!1,D.lm,!1,!1,x.H)},
cy1(){var w=this.c
w.toString
return C.bX(E.mT,null,new A.e27(this),w,!0,!0,!0,D.lm,!1,!1,x.H)},
cxt(){var w=this.c
w.toString
return C.bX(E.mT,null,new A.e1V(this),w,!0,!0,!0,D.lm,!1,!1,x.H)},
ctg(d){var w,v,u,t=this,s=t.dx
if(s!=null)s.a8(0)
s=t.d
s===$&&C.c()
s=s.gqo()
w=s.length
v=0
for(;v<w;++v){u=s[v]
if(u.fr==null)u.fr="tv100"
if(u.c==="hall")if(u.fx==null)u.fx="tv100"
u.fy=!0}t.z=!1
s=new A.bPG(t.d,d,C.a([],x.fG))
s.c3n()
t.cx=s
t.cy=t.CW.gu2()/1000
t.x=!0
t.r="look"
t.w=!1
s=D.d.gK(t.cx.c)
t.go.a9(0)
t.id=!1
t.m(new A.e1H(t,s.a))
t.OR()
t.dx=C.dA(D.ja,new A.e1I(t))
t.m(new A.e1J())},
bJD(d,e){var w,v=d.w[e],u=v.a
A:{if("left"===u){w=new A.E(-d.gfw(0)/2,40,v.b+d.gjk(0)/2-40)
break A}if("right"===u){w=new A.E(d.gfw(0)/2,40,v.b+d.gjk(0)/2-40)
break A}w=new A.E(v.b,40,0)
break A}return w},
cxu(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=i.cx
if(h==null||i.c==null)return
w=i.CW.gu2()/1000-i.cy
v=h.d
v===$&&C.c()
if(w>=v){i.a1p()
i.ka("The tour is over. Press Tour to walk the house again.")
return}if(i.id)return
u=h.b8D(w)
v=i.d
v===$&&C.c()
t=v.e
if(u.a!==t){i.ahT(u)
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
if(t&&v<s.w.length){o=1.25*D.dV.av(0,D.k.D(u.as,0,1))
q=s.ax
n=q.h(0,v)
if((n==null?0:n)!==o){q.n(0,v,o)
p=!0}}q=u.z
if(D.a.a0(q,"ad")&&i.go.L(0,q)){s.go=D.o.F(s.go+1,8)
A.m7(1000,50,0.25,"tri")
p=!0}if(p)i.m(i.gA5())
m=Math.max(s.gfw(0)*0.95,s.gjk(0)*1.15)+20
t=t&&v<s.w.length
q=u.b
if(t){l=i.bJD(s,v)
k=D.dC.av(0,D.k.D(u.as,0,1))
j=s.w[v].a
v=i.e
v===$&&C.c()
t=j==="back"?14:0
if(j==="left")n=0.55*k
else n=j==="right"?-0.55*k:-0.03
v.lU(m+(70-m)*k,0.2-0.07*k,new A.E(l.a*0.9+q*0.1,36,l.c+t),n)}else{v=i.e
v===$&&C.c()
v.lU(m,0.24,new A.E(q*0.7,30,u.c*0.6+8),-0.05-q/(s.gfw(0)/2)*0.2)}if(u.y!==i.dy)i.m(new A.e1W(i,u))},
ahT(d){return this.cxs(d)},
cxs(d){var w=0,v=C.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j
var $async$ahT=C.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:l={}
r.id=!0
l.a=null
t=4
p=$.aU.ak$.x.h(0,r.k1)
p=p==null?null:p.gb8()
q=x.cU.a(p)
p=q
p=p==null?null:p.lR(0.6).cM(0,D.kg)
j=l
w=7
return C.b(x.fa.b(p)?p:C.dP(p,x.eT),$async$ahT)
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
r.avw(d.a,!0)
p=r.d
n=p.d
n===$&&C.c()
m=n[p.e]
p=d.at
if(p>=0&&p<m.w.length)m.ax.n(0,p,1.25)
r.m(new A.e1N(l,r))
l=r.e
l===$&&C.c()
l.d=new A.E(d.b,36,d.c+4)
l.c=70
l.a=-0.03
l.b=0.15
r.id=!1
case 1:return C.h(u,v)
case 2:return C.f(s.at(-1),v)}})
return C.i($async$ahT,v)},
a1p(){var w,v,u,t=this,s=t.dx
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
t.m(new A.e1L(t))
t.OR()},
cgw(){var w,v,u,t=this,s=t.cx
if(s!=null)return s.b8D(t.CW.gu2()/1000-t.cy)
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
return new A.VU(u[v.e].a,w.b,w.c,w.d,w.e,!1,!1,!1,!1,"","",-1,0,-1,w.f)}return null},
ctd(){var w,v=this,u=v.d
u===$&&C.c()
w=u.d
w===$&&C.c()
u=w[u.e]
if(u.c!=="outside")return
w=v.ok
u=w==null?v.ok=A.h80(u,0,24):w
u.w=A.fWK(u.a)
v.k4=!0
v.p4=Date.now()
u=v.p1
if(u!=null)u.a8(0)
v.p1=C.dA(D.Xi,new A.e1F(v))
v.m(new A.e1G())
v.ka("Hold the arrows to walk. Double tap a spot to go there. Walk up to the front door to go inside.")},
azv(){var w,v=this
v.k4=!1
v.p3=v.p2=0
w=v.p1
if(w!=null)w.a8(0)
v.p1=null
w=v.ok
if(w!=null)w.e=!1
v.m(new A.e1K())},
cA2(){var w,v,u,t,s,r,q=this,p=q.ok,o=!0
if(p!=null)if(q.c!=null){o=q.d
o===$&&C.c()
w=o.d
w===$&&C.c()
o=w[o.e].c!=="outside"}if(o)return
v=Date.now()
u=D.k.D((v-q.p4)/1000,0,0.1)
q.p4=v
p.w=A.fWK(p.a)
o=q.e
o===$&&C.c()
t=Math.sin(o.a)
s=Math.cos(q.e.a)
o=q.p3
w=q.p2
if(w!==0||o!==0){p.r=null
r=p.aJo(0,t*o+s*w,-s*o+t*w,u)}else r=p.cBs(0,u)
if(!r)p.e=!1
if(r){q.e.aIv(new A.E(p.b,30,p.c))
if(Math.abs(p.b)<24){o=p.c
o=o>-2&&o<14}else o=!1
if(o)if(!(Math.abs(p.d)>2.2)){o=p.r
o=o!=null&&o.b<4}else o=!0
else o=!1
if(o){q.azv()
q.OS(10)
q.ka("You are inside the living room. Use Go outside to come back out.")}}},
cc4(){var w,v,u=null
if(this.k4){w=this.d
w===$&&C.c()
v=w.d
v===$&&C.c()
w=v[w.e].c!=="outside"}else w=!0
if(w)return u
w=new A.e14(this)
v=x.p
return C.v(C.a([w.$3(D.tG,0,1),C.A(C.a([w.$3(D.oA,-1,0),B.eKr,w.$3(D.iS,1,0)],v),D.m,u,D.e,D.Q,0,u,u),w.$3(D.qT,0,-1)],v),D.m,u,D.e,D.Q,0,D.p)},
aRk(){var w=this.d
w===$&&C.c()
if(w.a.length!==0)this.DJ()
else this.a_6()},
DJ(){var w=0,v=C.j(x.H),u,t=this,s,r,q,p
var $async$DJ=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:p=t.d
p===$&&C.c()
s=p.d
s===$&&C.c()
r=s[p.e]
if(r.gyA()){t.ka("This lesson is done. Try everything: it all works.")
w=1
break}p=r.id
w=p==="ptrap"||p==="faucet"?3:5
break
case 3:if(r.k2==null)r.k2=A.fQa()
p=t.c
p.toString
w=6
return C.b(C.a6(p,!1).c6(C.e7(new A.e10(r),!1,null,x.H)),$async$DJ)
case 6:w=4
break
case 5:if(r.k1==null)r.k1=new A.XH(C.T(x.S,x.N))
p=t.c
p.toString
w=7
return C.b(C.a6(p,!1).c6(C.e7(new A.e11(r),!1,null,x.H)),$async$DJ)
case 7:case 4:if(t.c==null){w=1
break}t.m(t.gA5())
if(r.gyA()){q=r.id
A:{if("switch"===q){p="Done! Tap the switch on the wall: the light comes on."
break A}if("fan"===q){p="Done! Tap the wall switch and the fan spins."
break A}if("outlet"===q||"gfci"===q){p="Done! Tap the outlet and plug something in."
break A}p="Done! The sink works."
break A}t.ka(p)}case 1:return C.h(u,v)}})
return C.i($async$DJ,v)},
aiu(d){return this.cAp(d)},
cAp(d){var w=0,v=C.j(x.H),u,t=this,s,r,q
var $async$aiu=C.e(function(e,f){if(e===1)return C.f(f,v)
for(;;)switch(w){case 0:q=t.d
q===$&&C.c()
s=q.d
s===$&&C.c()
r=s[q.e].dy[d]
q=t.c
q.toString
w=3
return C.b(C.a6(q,!1).c6(C.e7(new A.e28(r),!1,null,x.H)),$async$aiu)
case 3:if(t.c==null){w=1
break}t.m(t.gA5())
if(r.gBe())t.ka("Wired! "+(r.a==="switch"?"Tap it to turn the light on and off.":"Tap it to plug something in."))
case 1:return C.h(u,v)}})
return C.i($async$aiu,v)},
a_6(){var w=0,v=C.j(x.H),u,t=this,s,r,q,p
var $async$a_6=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:p=t.d
p===$&&C.c()
s=p.d
s===$&&C.c()
r=s[p.e]
if(r.c==="outside"){w=1
break}s=r.CW
if(s==null){q=A.fQz(A.i5q(r),r.b,!1,p.b*37+r.a)
q.aDt()
if(!r.ay)q.cDf()
r.CW=q
p=q}else p=s
p.b=t.d.c
p=t.c
p.toString
w=3
return C.b(C.a6(p,!1).c6(C.e7(new A.e13(r),!1,null,x.H)),$async$a_6)
case 3:if(t.c==null){w=1
break}t.m(t.gA5())
if(r.gjy())t.ka(r.b+": the wiring is finished. The light has power.")
case 1:return C.h(u,v)}})
return C.i($async$a_6,v)},
ZY(){var w=0,v=C.j(x.H),u,t=this,s,r,q,p
var $async$ZY=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:p=t.d
p===$&&C.c()
s=p.d
s===$&&C.c()
r=s[p.e]
s=r.c
if(!(s==="bathroom"||s==="kitchen")){t.OT("This room has no plumbing. Bathrooms and the kitchen do.",!1)
w=1
break}q=r.cx
if(q==null){s=s==="kitchen"?"kitchen":"bathroom"
s=r.cx=A.fQ9(!1,p.b*41+r.a,s)
p=s}else p=q
if(!r.ch&&!p.gaiZ())r.cx.cDe()
r.cx.b=t.d.c
p=t.c
p.toString
w=3
return C.b(C.a6(p,!1).c6(C.e7(new A.e12(r),!1,null,x.H)),$async$ZY)
case 3:if(t.c==null){w=1
break}t.m(t.gA5())
if(r.gl2())t.ka(r.b+": the plumbing is finished and nothing leaks.")
case 1:return C.h(u,v)}})
return C.i($async$ZY,v)},
bxD(){var w=this.c
w.toString
return C.bX(E.mT,null,new A.e0i(this),w,!0,!0,!1,D.lm,!1,!1,x.H)},
bxg(d){var w,v,u,t,s,r,q,p,o=this,n=o.d
n===$&&C.c()
w=n.d
w===$&&C.c()
v=w[n.e]
n=v.c
if(n==="outside"||n==="hall"){o.OT("Add devices in a room, not in the hall or the garden.",!1)
return}n=v.dy
if(n.length>=4){o.OT("This room already has four added devices.",!1)
return}w=C.a([-v.gfw(0)/4,v.gfw(0)/4],x.n)
for(u=v.w,t=D.d.gaf(u),s=new C.fk(t,new A.e0c());s.C();)w.push(t.gU(0).b)
for(u=D.d.gaf(u),t=new C.fk(u,new A.e0d());t.C();)w.push(u.gU(0).b+24)
for(u=n.length,r=0;r<n.length;n.length===u||(0,C.L)(n),++r)w.push(n[r].b)
p=-v.gfw(0)/2+14
for(;;){if(!(p<=v.gfw(0)/2-14)){q=null
break}if(D.d.d9(w,new A.e0e(p))){q=p
break}p+=6}if(q==null){o.OT("There is no free place left on the back wall.",!1)
return}o.m(new A.e0f(o,v,d,q))
o.ka("Added. It is red because it is not wired: tap it to wire it.")},
acG(d,e){var w,v,u=this,t=u.d
t===$&&C.c()
w=t.d
w===$&&C.c()
v=w[t.e].SP(u.Q)
if(v==null)return
u.m(new A.e1_(u,v,D.d.t(B.awP,v.b),d,e))},
c3_(){var w,v,u=this,t=u.d
t===$&&C.c()
w=t.d
w===$&&C.c()
v=w[t.e].SP(u.Q)
if(v==null)return
u.m(new A.e1X(u,v))},
cjE(){var w,v,u=this,t=u.d
t===$&&C.c()
w=t.d
w===$&&C.c()
v=w[t.e].SP(u.Q)
if(v==null)return
u.m(new A.e1r(u,v))
u.ka(B.pW.h(0,v.b).a+": "+B.cJP[v.f]+".")},
c2Y(d){var w,v,u=this,t=u.d
t===$&&C.c()
w=t.d
w===$&&C.c()
v=w[t.e].SP(u.Q)
if(v==null)return
u.m(new A.e1s(u,v))},
bxj(d){var w,v=this,u=v.d
u===$&&C.c()
w=u.d
w===$&&C.c()
v.m(new A.e0g(v,w[u.e].L(0,d)))
v.ka(B.pW.h(0,d).a+" added. Move it with the arrows.")},
Il(d,e,f,g,h){var w=null,v=e?g.j(0.25):D.c.j(0.07),u=C.m(14),t=e?g:D.b2
t=C.I(t,D.q,e?2:1)
v=C.a([C.p(w,C.d(d,w,w,w,w,w,w,C.l(w,w,e?g:D.c,w,w,w,w,w,w,w,w,12.5,w,w,D.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),D.f,w,w,new C.o(v,w,t,u,w,w,D.n),w,w,w,w,A2.XD,w,w,w)],x.p)
if(h)v.push(C.ao(w,C.p(w,w,D.f,w,w,new C.o(D.ay,w,C.I(B.Ej,D.q,2),w,w,w,D.a6),w,11,w,w,w,w,w,11),w,w,w,-2,-3,w))
return new C.C(D.fx,C.aE(w,new C.an(D.W,w,D.aa,D.f,v,w),D.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,!1,D.a8),w)},
q0(d,e,f,g){return this.Il(d,e,f,g,!1)},
Ik(d,e,f){return this.Il(d,e,f,D.aH,!1)},
azK(d,e,f,g){var w=null,v=g==null,u=v?34:w,t=v?w:D.l7,s=C.m(10),r=e?D.c:D.b2
r=C.I(r,D.q,e?3:1)
if(v)v=w
else v=C.av(C.d(g,w,w,w,w,w,w,C.l(w,w,d.j5()>0.5?D.w:D.c,w,w,w,w,w,w,w,w,12,w,w,D.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w,w,w)
return new C.C(E.tt,C.aE(w,C.p(w,v,D.f,w,w,new C.o(d,w,r,s,w,w,D.n),w,34,w,w,t,w,w,u),D.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,!1,D.a8),w)},
cur(d,e,f){return this.azK(d,e,f,null)},
GZ(d,e){var w=null,v=D.c.j(0.1),u=C.m(10),t=C.I(D.b2,D.q,1)
return new C.C(D.fx,C.aE(w,C.p(w,C.W(d,D.c,w,w,w,20),D.f,w,w,new C.o(v,w,t,u,w,w,D.n),w,36,w,w,w,w,w,40),D.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,e,w,w,w,w,w,w,!1,D.a8),w)},
bFD(){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null
if(k.cx!=null){w=k.dy
return C.A(C.a([C.D(C.d("\ud83c\udfac "+(w.length===0?"Walking in":w),j,1,D.a2,j,j,j,B.eZh,j,j,j),1),k.q0("\u23f9 Stop the tour",!0,k.gctB(),D.cj)],x.p),D.m,j,D.e,D.j,0,j,j)}switch(k.r){case"furniture":w=k.d
w===$&&C.c()
v=w.d
v===$&&C.c()
u=v[w.e].SP(k.Q)
w=x.p
v=C.a([],w)
if(u!=null)v.push(new C.a7(j,40,C.cB(C.a([k.GZ(D.oA,new A.e0O(k)),k.GZ(D.iS,new A.e0P(k)),k.GZ(D.tG,new A.e0Q(k)),k.GZ(D.qT,new A.e0R(k)),k.GZ(F.alh,k.gc2Z()),k.GZ(D.n9,k.gcjD()),k.GZ(D.e4,k.gc2X(k))],w),j,j,j,j,D.aO,!1),j))
else v.push(B.aUD)
w=C.a([],w)
for(t=B.pW.gdK(B.pW),t=t.gaf(t);t.C();){s=t.gU(t)
r=D.d.t(B.cQ0,s.a)
q=k.d
p=q.d
p===$&&C.c()
if(r===(p[q.e].c==="outside")){r=s.b
w.push(k.q0(r.b+" "+r.a,!1,new A.e0S(k,s),D.b1))}}v.push(new C.a7(j,40,C.cB(w,j,j,j,j,D.aO,!1),j))
return C.v(v,D.m,j,D.e,D.Q,0,D.p)
case"walls":w=k.as
v=w<0
w=v?"All walls":"Wall "+(w+1)+": tap Look to reset"
v=C.a([k.Ik(w,v,new A.e0T(k))],x.p)
for(o=0;o<8;++o)v.push(k.azK(B.avx[o],!1,new A.e0U(k,o),B.dcL[o]))
return new C.a7(j,40,C.cB(v,j,j,j,j,D.aO,!1),j)
case"floor":w=C.a([],x.p)
for(o=0;o<7;++o){v=B.avk[o]
t=k.d
t===$&&C.c()
s=t.d
s===$&&C.c()
w.push(k.azK(v.b,s[t.e].Q===o,new A.e0V(k,o),v.a))}return new C.a7(j,40,C.cB(w,j,j,j,j,D.aO,!1),j)
case"ceiling":w=k.d
w===$&&C.c()
v=w.d
v===$&&C.c()
w=v[w.e].dx==="fan"?"\ud83c\udf00 Fan (tap for light)":"\ud83d\udca1 Light (tap for fan)"
w=C.a([k.q0(w,!1,new A.e0W(k),D.b7)],x.p)
for(o=0;o<4;++o){v=B.aub[o]
t=k.d
s=t.d
s===$&&C.c()
w.push(k.cur(v,s[t.e].as===o,new A.e0X(k,o)))}return new C.a7(j,40,C.cB(w,j,j,j,j,D.aO,!1),j)
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
if(n.L(0,s)){r=k.d.d
r===$&&C.c()
s=r[s]
r=s.gjy()&&s.gl2()
w.push(k.Il("\ud83d\udeaa "+s.b,!1,new A.e0Y(k,l),D.b1,!r))}}return new C.a7(j,40,C.cB(w,j,j,j,j,D.aO,!1),j)}},
B(d){var w=this,v=null,u=C.a([C.bY(0,new C.et(w.bBC(d),w.k1),0,0,0)],x.p)
if(w.k2!=null)u.push(C.bY(0,C.e1(C.mx(new A.e2a(w),v,D.dC,D.i9,new C.cx(w.k3,x.ac),new A.e2b(w),new C.bn(1,0,x.e7),x.i),!0,v),0,0,0))
return new C.an(D.W,v,D.aa,D.r,u,v)},
bBC(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.d
h===$&&C.c()
w=h.d
w===$&&C.c()
v=w[h.e]
h=C.aI(d,i,x.l).w
w=j.d
if(w.a.length!==0)w=v.gyA()?"Done \u2713":"To do"
else w=""+w.gcIF()+"/"+j.d.gqo().length+" done"
u=j.f
u===$&&C.c()
t=j.e
t===$&&C.c()
s=j.at
r=j.ax
q=j.ay
p=j.y&&j.d.a.length===0?104:10
o=j.cc4()
n=x.p
m=C.a([],n)
if(j.y&&j.d.a.length===0)m.push(new A.bgT(j.d,j.gc2T(),Math.min(138,h.a.a*0.36),i))
h=A.X3(o,t,new A.e0q(j),q,s,i,i,new A.e0r(),r,p,j.gbJH(),new A.e0s(j),j.gc2V(),u,m,i)
u=j.x?"\ud83d\udd2d See the whole room":"\ud83c\udfe0 Be inside"
u=C.a([j.q0(u,!1,new A.e0B(j),D.b1)],n)
if(j.d.a.length===0){t=j.cx!=null
s=t?"\u23f9 Stop tour":"\ud83c\udfac Tour"
u.push(j.q0(s,t,new A.e0C(j),D.bV))}t=j.z
s=t?"\ud83d\udeb6 Stop looking round":"\ud83d\udd04 Look all round (360)"
u.push(j.q0(s,t,new A.e0D(j),D.ct))
u.push(j.q0("\ud83d\udcfa TV",!1,j.gcy0(),D.cs))
t=j.d
if(t.a.length===0){s=t.d
s===$&&C.c()
t=s[t.e].c!=="outside"?"\ud83c\udf33 Go outside":"\ud83c\udfe0 Go inside"
u.push(j.q0(t,!1,new A.e0E(j),D.b8))}t=j.d
s=t.d
s===$&&C.c()
if(s[t.e].c==="outside"){t=j.k4
s=t?"\u23f9 Stop walking":"\ud83d\udeb6 Walk about"
u.push(j.q0(s,t,t?j.gctA():j.gctc(),D.b8))}if(j.d.a.length===0)u.push(j.q0("\u2795 Add",!1,j.gbxC(),D.b8))
if(j.d.a.length===0){t=j.gajt()
t=t==null?i:t.d.length
if(t==null)t=0
u.push(j.Il("\ud83c\udfd8 Community",!1,new A.e0F(j,d),D.bV,t>0))}u.push(j.q0("\ud83d\udd26 Tester",j.w,new A.e0G(j),D.ct))
if(j.d.a.length!==0)u.push(j.Il("\ud83d\udd27 Do the lesson",!1,j.gc2U(),D.cn,!v.gyA()))
else{t=j.Il("\u26a1 Wiring",!1,j.gcbM(),D.cn,!v.gjy())
s=v.c
s=(s==="bathroom"||s==="kitchen")&&!v.gl2()
D.d.v(u,C.a([t,j.Il("\ud83d\udeb0 Plumbing",!1,j.gcbb(),D.cs,s),j.q0("\ud83d\uddfa Map",j.y,new A.e0H(j),D.by)],n))}u=C.cB(u,i,i,i,i,D.aO,!1)
t=j.Ik("\ud83d\udc41 Look",j.r==="look",new A.e0I(j))
s=j.Ik("\ud83d\udecb Furniture",j.r==="furniture",new A.e0t(j))
r=j.Ik("\ud83e\uddf1 Walls",j.r==="walls",new A.e0u(j))
q=j.Ik("\ud83d\udfeb Floor",j.r==="floor",new A.e0v(j))
p=j.Ik("\u2b1c Ceiling",j.r==="ceiling",new A.e0w(j))
o=j.Ik("\ud83d\udeaa Doors",j.r==="doors",new A.e0x(j))
m=j.q0("\ud83d\udcd8 Learn",!1,new A.e0y(d),D.by)
l=j.d.c
k=l?"\ud83d\udd25 Practice":"\ud83c\udf93 Learn mode"
return new A.AW(v.b,D.aH,h,C.v(C.a([new C.a7(i,40,u,i),D.at,new C.a7(i,40,C.cB(C.a([t,s,r,q,p,o,m,j.q0(k,l,new A.e0z(j),D.cj)],n),i,i,i,i,D.aO,!1),i),D.at,j.bFD()],n),D.F,i,D.e,D.Q,0,D.p),new A.e0A(j,d),w,i)},
chM(d){return C.bX(E.mT,null,new A.e1q(this),d,!0,!0,!0,D.lm,!1,!1,x.H)}}
A.bgT.prototype={
B(d){var w=null,v=D.k.D((this.e-10)/126,0.5,1),u=D.w.j(0.6),t=C.m(12),s=C.I(D.b2,D.q,1)
return C.p(w,new C.a7(126*v,84*v,C.aE(w,C.f2(D.A,C.b3(w,w,w,new A.bgh(this.c,w),B.eJf),D.f,D.wy),D.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new A.dmp(this,v),w,w,w,w,!1,D.a8),w),D.f,w,w,new C.o(u,w,s,t,w,w,D.n),w,w,w,w,D.lJ,w,w,w)}}
A.bgh.prototype={
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
o=new C.aa(s,r,q,p)
n=t.a===f.e
if(t.gjy()&&t.gl2())m=D.bo
else m=!t.gjy()?D.ay:D.d6
l=C.bA(o,D.hA)
$.X()
k=new C.as(D.X,D.V,D.a_,D.a0,D.Z)
k.r=m.j(t.gjy()&&t.gl2()?0.35:0.5).gp(0)
j=k.H()
v.drawRRect(C.eq(l),j)
j.delete()
l=C.bA(o,D.hA)
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
break A}h=new C.ko(new C.ep(l,g,g,D.cO,g,g,g,g,g,g,B.eYu),D.a5,D.ch,new C.jo(1),g,g,g,g,D.cd,g)
h.eP()
l=h.b
k=l.c
l=l.a.c
h.a5(d,new C.u(s+(q-s)/2-k/2,r+(p-r)/2-l.gbc(l)/2))}},
aq(d){return!0}}
A.bPJ.prototype={}
A.Fg.prototype={}
A.MM.prototype={
T(){return new A.bhQ()}}
A.bhQ.prototype={
xn(d){var w=this.c
w.toString
return C.a6(w,!1).c6(C.e7(new A.dKu(d),!1,null,x.H))},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null
$.aqE="tech"
w=C.aH(k,k,k,k,M.nd,k,k,k,new A.dKx(d),k,k,k,k,k,k)
v=D.aH.j(0.16)
u=C.m(13)
t=x.p
u=C.A(C.a([w,C.p(k,B.b3o,D.f,k,k,new C.o(v,k,C.I(D.aH.j(0.6),D.q,1),u,k,k,D.n),k,40,k,k,k,k,k,40),D.av,B.bv1],t),D.m,k,D.e,D.j,0,k,k)
v=C.A(C.a([C.D(l.aX7("Learn mode",!l.d,D.b8,new A.dKy(l)),1),D.ab,C.D(l.aX7("Practice mode",l.d,D.cj,new A.dKz(l)),1)],t),D.m,k,D.e,D.j,0,k,k)
w=C.m(26)
s=C.I(D.aH,D.q,1.8)
r=x.V
q=C.a([new C.ac(0,D.G,D.aH.j(0.28),D.dk,26)],r)
q=C.aE(k,C.p(k,C.v(C.a([C.p(k,B.b3O,D.f,k,k,new C.o(D.aH.j(0.2),k,C.I(D.aH,D.q,2),k,C.a([new C.ac(0,D.G,D.aH.j(0.5),D.J,22)],r),k,D.a6),k,78,k,k,k,k,k,78),D.ac,B.ffZ,D.at,B.fmr,D.aA,C.p(k,B.ffV,D.f,k,k,new C.o(D.aH,k,k,C.m(20),k,k,D.n),k,k,k,k,K.ahe,k,k,k)],t),D.m,k,D.e,D.j,0,D.p),D.f,k,k,new C.o(k,k,s,w,q,B.bSd,D.n),k,k,k,k,D.vd,k,k,k),D.y,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,new A.dKC(l),k,k,k,k,k,k,!1,D.a8)
w=C.m(22)
s=C.I(D.bV,D.q,1.5)
r=C.a([new C.ac(0,D.G,D.bV.j(0.22),D.cw,20)],r)
r=C.aE(k,C.p(k,C.v(B.d0X,D.m,k,D.e,D.j,0,D.p),D.f,k,k,new C.o(k,k,s,w,r,B.bST,D.n),k,k,k,k,N.LJ,k,k,k),D.y,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,new A.dKD(l),k,k,k,k,k,k,!1,D.a8)
w=l.aX6("JOBS")
s=l.aX5(C.a([l.DK("\ud83d\udd0c","Wire a room","Go to a room that needs wiring",D.bo,new A.dKE(l)),l.DK("\ud83d\udebd","Plumb a room","Go to a bathroom or kitchen",D.aU,new A.dKF(l)),l.DK("\ud83d\udd27","Fix a house","Walk the house and fix every sign",D.aH,new A.dKG(l)),l.DK("\ud83e\uddf1","Build a room","Frame, drywall, then wire",D.b8,new A.dKH(l)),l.DK("\u26a1","Wiring bench","Just the wiring, one room",D.cn,new A.dKI(l)),l.DK("\ud83d\udcde","Service calls","A customer rings with problems",D.j4,new A.dKJ(l))],t))
p=l.aX6("LESSONS")
o=C.a([],t)
for(n=0;n<7;++n){m=B.cQt[n]
o.push(l.DK(m.b,m.c,m.d,m.e,new A.dKA(l,m)))}o.push(l.DK("\ud83d\udcd8","Learn the trades","Short cards for beginners",D.by,new A.dKB(l)))
return C.c8(k,D.bX,C.bm(!0,C.cB(C.a([u,D.ac,v,D.ac,q,D.ac,r,w,s,p,l.aX5(o)],t),k,B.agx,k,k,D.ah,!1),!0,!1,D.af,!0,!0),k,!1,!1,k,k)},
aX6(d){var w=null
return new C.C(B.bt4,C.A(C.a([C.D(C.p(w,w,D.f,D.aH.j(0.35),w,w,w,1,w,w,w,w,w,w),1),new C.C(D.fT,C.d(d,w,w,w,w,w,w,B.eVc,w,w,w),w),C.D(C.p(w,w,D.f,D.aH.j(0.35),w,w,w,1,w,w,w,w,w,w),1)],x.p),D.m,w,D.e,D.j,0,w,w),w)},
aX7(d,e,f,g){var w=null,v=e?f.j(0.2):D.c.j(0.06),u=C.m(18),t=e?f:D.b2
t=C.I(t,D.q,e?2:1)
return C.aE(w,C.p(w,C.av(C.d(d,w,w,w,w,w,w,C.l(w,w,e?f:D.ad,w,w,w,w,w,w,w,w,13,w,w,D.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w,w,w),D.f,w,w,new C.o(v,w,t,u,w,w,D.n),w,w,w,w,D.eZ,w,w,w),D.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,g,w,w,w,w,w,w,!1,D.a8)},
aX5(d){var w,v,u,t,s=null,r=x.p,q=C.a([],r)
for(w=0;v=d.length,w<v;w+=2){u=d[w]
t=w+1
v=t<v?d[t]:D.bH
q.push(new C.C(D.cH,new C.DA(new C.cm(D.aO,D.e,D.j,D.aj,s,D.p,s,0,C.a([new C.bD(1,D.bi,u,s),D.ab,new C.bD(1,D.bi,v,s)],r),s),s),s))}return C.v(q,D.m,s,D.e,D.j,0,D.p)},
DK(d,e,f,g,h){var w=null,v=C.a([g.j(0.2),B.Ej],x.O),u=C.m(22),t=C.I(g.j(0.55),D.q,1.4),s=x.V,r=C.a([new C.ac(0,D.G,g.j(0.18),D.cw,16)],s),q=g.j(0.22),p=C.I(g.j(0.7),D.q,1.5)
s=C.a([new C.ac(0,D.G,g.j(0.35),D.J,14)],s)
return C.aE(w,C.p(w,C.v(C.a([C.p(w,C.av(C.d(d,w,w,w,w,w,w,D.a78,w,w,w),w,w,w),D.f,w,w,new C.o(q,w,p,w,s,w,D.a6),w,56,w,w,w,w,w,56),D.S,C.d(e,w,w,w,w,w,w,D.jn,D.L,w,w),D.cX,C.d(f,w,2,D.a2,w,w,w,B.f5e,D.L,w,w)],x.p),D.m,w,D.bb,D.j,0,D.p),D.f,w,w,new C.o(w,w,t,u,r,new C.a8(D.b0,D.b6,D.x,v,w,w),D.n),w,w,w,w,B.bom,w,w,w),D.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,h,w,w,w,w,w,w,!1,D.a8)}}
A.b53.prototype={
B(d){var w,v,u,t,s,r=this,q=null,p=x.p,o=C.a([C.bY(0,new A.atr(r.c,r.d,r.r,r.e,r.x,r.w,E.W9,r.ch,q),0,0,0)],p),n=r.as,m=n!=null
if(m)o.push(C.ao(q,C.v(n,D.F,q,D.e,D.j,0,D.p),q,q,8,q,8,q))
n=C.a([],p)
w=r.at
if(w!=null)D.d.v(n,w)
n.push(r.avx(D.hx,"Zoom in",new A.cpA(r)))
n.push(r.avx(D.y0,"Zoom out",new A.cpB(r)))
w=r.f
n.push(r.avx(B.bAL,"Back to the whole view",w))
o.push(C.ao(q,C.v(n,D.m,q,D.e,D.j,0,D.p),q,q,q,8,8,q))
n=r.CW
if(n!=null)o.push(C.ao(14,C.av(n,q,q,q),q,q,0,0,q,q))
n=r.y
if(n!=null){v=r.ay
if(v==null)m=m?60:10
else m=v
v=r.z
u=(v?D.e9:D.er).j(0.95)
t=C.m(14)
s=C.I(v?D.b8:D.cj,D.q,1)
o.push(C.ao(q,C.p(q,C.d(n,q,q,q,q,q,q,B.eVM,q,q,q),D.f,q,q,new C.o(u,q,s,t,q,q,D.n),q,q,q,q,D.nQ,q,q,q),q,q,10,62,m,q))}n=r.Q
if(n!=null){m=C.m(16)
v=C.I(D.b2,D.q,1)
n=C.a([C.d(n.a,q,q,q,q,q,q,B.f5L,q,q,q),D.cX,C.d(n.b,q,q,q,q,q,q,E.T4,q,q,q)],p)
u=r.ax
if(u!=null)D.d.v(n,C.a([D.an,u],p))
o.push(C.ao(8,C.p(q,C.A(C.a([C.D(C.v(n,D.F,q,D.e,D.j,0,D.p),1),C.aH(q,q,q,q,D.Ga,q,q,q,w,q,q,q,q,q,D.c7)],p),D.F,q,D.e,D.j,0,q,q),D.f,q,q,new C.o(E.ab0,q,v,m,q,q,D.n),q,q,q,q,E.agg,q,q,q),q,q,10,10,q,q))}return new C.an(D.W,q,D.aa,D.r,o,q)},
avx(d,e,f){var w=null,v=D.w.j(0.55),u=C.I(D.b2,D.q,1)
return new C.C(D.eO,C.hp(C.aE(w,C.p(w,C.W(d,D.c,w,w,w,20),D.f,w,w,new C.o(v,w,u,w,w,w,D.a6),w,38,w,w,w,w,w,38),D.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,!1,D.a8),w,e,w,w),w)}}
A.AW.prototype={
B(d){var w=this,v=null,u=C.aH(v,v,v,v,M.nd,v,v,v,new A.bRO(d),v,v,v,v,v,v),t=w.d,s=C.D(C.d(w.c,v,v,v,v,v,v,C.l(v,v,t,v,v,v,v,v,v,v,v,16,v,v,D.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),1),r=t.j(0.15),q=C.m(16),p=C.I(t.j(0.6),D.q,1),o=x.p
q=C.A(C.a([u,s,C.aE(v,C.p(v,C.A(C.a([C.W(A6.ajJ,t,v,v,v,17),D.eb,C.d(w.w,v,v,v,v,v,v,C.l(v,v,t,v,v,v,v,v,v,v,v,12,v,v,D.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],o),D.m,v,D.e,D.Q,0,v,v),D.f,v,v,new C.o(r,v,p,q,v,v,D.n),v,v,v,v,D.tv,v,v,v),D.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,w.r,v,v,v,v,v,v,!1,D.a8)],o),D.m,v,D.e,D.j,0,v,v)
p=C.aI(d,v,x.l).w
return C.c8(v,D.bX,C.bm(!0,C.v(C.a([new C.C(B.bth,q,v),C.p(v,C.cd(w.f,D.r,v,D.y,v,v,v,v,D.ah),D.f,v,new C.aY(0,1/0,0,p.a.b*0.34),B.aZZ,v,v,v,v,E.XB,v,v,1/0),C.D(C.bw(A5.a9j,w.e,D.aq),1)],o),D.m,v,D.e,D.j,0,D.p),!0,!1,D.af,!0,!0),v,!1,!1,v,v)}}
A.GV.prototype={
T(){return new A.ayi()},
gda(d){return this.d}}
A.ayi.prototype={
gFG(){var w,v=this,u=v.d
if(u===$){w=A.Ag(v.a.c)
v.d!==$&&C.bM()
v.d=w
u=w}return u},
geS(d){var w,v=this.e
if(v===$){w=this.a.d
v=this.e=w==null?new A.XH(C.T(x.S,x.N)):w}return v},
gkS(){var w=this.f
return w===$?this.f=new A.AC(0.42,0.26,12,B.fBC,$.aw()):w},
goD(){var w=this,v=w.r
return v===$?w.r=A.fUm(w.gFG(),w.geS(0),!0):v},
q(){var w=this.as
if(w!=null)w.a8(0)
this.a2()},
kw(d,e){var w=this,v=w.as
if(v!=null)v.a8(0)
w.m(new A.d2f(w,d,e))
w.as=C.cM(D.l6,new A.d2g(w))},
oX(d){return this.kw(d,!1)},
xo(){var w=this.geS(0)
w.d=w.d&&w.a&&w.c>=2
this.r=A.fUm(this.gFG(),w,!0)},
nV(){var w=this,v=w.gkS(),u=w.geS(0).c===0,t=u?2.8:0.4
u=u?12:10
v.lU(u,0.26,new A.E(0,0.1,t),0.42)
w.m(new A.d28(w))},
c30(){var w,v,u,t="ground",s=this.geS(0),r=!s.a||s.c>0,q=new A.d27(this)
switch(this.gFG().a){case"switch":w=q.$1(t)
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
Io(d){var w,v,u,t,s,r,q,p=this
if(d===0){p.nV()
return}w=p.gFG()
v=w.f
u=C.U(v).k("a2<1>")
t=C.B(new C.a2(v,new A.d29(d),u),u.k("J.E"))
v=w.a
s=A.hjh(v,d)
if(s!=null){u=p.geS(0)
u=u.c===0&&u.b.iR(0,s)}else u=!1
if(u){w=p.geS(0)
if(w.a){A.m7(180,220,0.25,"square")
p.oX("STOP! The power is still on. Turn the breaker OFF before you touch any wire.")
return}w=w.b
w.bm(w,new A.d2a(s))
p.m(p.gc33())
p.kw("Wire taken off the screw.",!0)
return}if(t.length!==0&&p.w.length!==0&&p.geS(0).c===0){u=p.geS(0)
r=A.hjc(w,u,p.w,D.d.gK(t),!1)
if(r!=null){++p.Q
A.m7(180,220,0.25,"square")
p.oX(r)}else{A.y7()
p.m(new A.d2b(p,d))
if(A.bCa(w,u))p.kw("Every wire is on the right screw. Now push the device into the box.",!0)
else p.kw(D.d.gK(t).b+": fastened correctly.",!0)
p.gkS().zd(7,A.bzS(v,d,u))
p.w=""}return}q=p.goD().b.h(0,d)
if(q!=null){p.m(new A.d2c(p,d))
w=p.gkS()
v=q.c
w.zd(q.d,v)}},
cgK(){var w,v=this
v.m(new A.d2d(v))
w=v.geS(0)
if(w.a){A.m7(120,200,0.25,"saw")
if(w.c===0)v.oX("The breaker is ON. The wires are LIVE at 120 volts. Turn it OFF before you touch anything.")}else{A.m7(600,100,0.25,"tri")
v.kw("Breaker OFF. It is safe to work on the wires. (In real life, always test them with a tester first.)",!0)}},
cvH(){var w,v,u=this
u.m(new A.d2h(u))
A.y7()
w=u.gFG().a
A:{if("switch"===w){v="Power on. Flip the switch and the light turns on: both black wires are on brass screws, so the switch opens and closes the hot wire. The lesson is complete! Mistakes: "+u.Q+"."
break A}if("gfci"===w){v="Power on. Press RESET (it clicks), then TEST: it must shut the outlet off. Wired on LINE, it protects the whole circuit. The lesson is complete! Mistakes: "+u.Q+"."
break A}v="The tester glows: this outlet has 120 volts and is wired correctly. The lesson is complete! Mistakes: "+u.Q+"."
break A}u.kw(v,!0)},
B(a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null,d=f.c30(),a0=D.d.ba(d,new A.d2p())
if(a0<0)w="All done"
else{f.gFG()
w="Step "+(a0+1)+"/7"}v=f.gFG()
u=f.geS(0)
t=A.bCa(v,u)&&!u.a
s=f.goD()
r=f.gkS()
q=f.x
p=f.y
o=f.z
n=q!==0?f.goD().b.h(0,f.x):e
m=(u.a?D.er:D.e9).j(0.95)
l=C.m(18)
k=u.a
j=C.I(k?D.cj:D.b8,D.q,1.5)
i=C.W(k?D.h8:B.akA,D.c,e,e,e,18)
h=x.p
l=A.X3(e,r,e,o,q,n,e,e,p,e,e,f.gIm(),f.gIn(),s,C.a([C.aE(e,C.p(e,C.A(C.a([i,D.eb,C.d(k?"Breaker ON (live)":"Breaker OFF (safe)",e,e,e,e,e,e,D.no,e,e,e)],h),D.m,e,D.e,D.Q,0,e,e),D.f,e,e,new C.o(m,e,j,l,e,e,D.n),e,e,e,e,D.h6,e,e,e),D.y,!1,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,f.gcgJ(),e,e,e,e,e,e,!1,D.a8)],h),C.a([A.Qn("Hints",D.aH,D.qZ,u.e,new A.d2q(f)),D.an,A.Qn("Labels",D.aU,S.N5,u.f,new A.d2r(f)),D.an,A.Qn("Brass side",B.bh9,E.akG,!1,new A.d2t(f)),D.an,A.Qn("Silver side",B.Kz,D.Nb,!1,new A.d2u(f)),D.P],h))
j=C.a([],h)
s=u.c
if(s===0){s=C.a([],h)
for(r=D.d.gaf(v.e),q=new C.fk(r,new A.d2v(f));q.C();){p=r.gU(0)
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
s.push(new C.C(D.jc,C.aE(e,C.p(e,new C.cm(D.aO,D.e,D.j,D.m,e,D.p,e,0,i,e),D.f,e,e,new C.o(o,e,new C.bP(g,g,g,g),new C.bq(n,n,n,n),e,e,D.n),e,e,e,e,D.hJ,e,e,e),D.y,!1,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,new A.d2w(f,p),e,e,e,e,e,e,!1,D.a8),e))}s=C.bZ(D.bB,s,D.bs,6,8)
if(t)u="Push it into the box"
else u=u.a?"Turn the breaker OFF first":"Fasten every wire first"
D.d.v(j,C.a([s,D.P,C.A(C.a([A.y6(u,B.alf,t?new A.d2x(f):e,D.aH)],h),D.m,e,D.e,D.j,0,e,e)],h))}else if(s===1)D.d.v(j,C.a([C.A(C.a([A.y6("Pull it back out",D.r1,new A.d2y(f),D.ad),D.ab,A.y6("Put the cover plate on",R.vn,new A.d2z(f),D.aH)],h),D.m,e,D.e,D.j,0,e,e)],h))
else{s=A.y6("Start over",D.ld,new A.d2A(f),D.ad)
u=u.d
r=u?"Tested \u2713":"Power on and test"
D.d.v(j,C.a([C.A(C.a([s,D.ab,A.y6(r,D.h8,u?e:f.gcvG(),D.aH)],h),D.m,e,D.e,D.j,0,e,e)],h))}return new A.AW(v.b,D.aH,l,C.v(j,D.m,e,D.e,D.Q,0,D.p),new A.d2s(f,a1,d),w,e)}}
A.a8s.prototype={
T(){return new A.aEd()},
gda(d){return this.c}}
A.aEd.prototype={
geS(d){var w,v=this.d
if(v===$){w=this.a.c
v=this.d=w==null?A.fQa():w}return v},
gkS(){var w=this.e
return w===$?this.e=new A.AC(-0.3,0.18,40,B.aRo,$.aw()):w},
goD(){var w=this.f
return w===$?this.f=A.bzy(this.geS(0)):w},
q(){var w=this.z
if(w!=null)w.a8(0)
this.a2()},
kw(d,e){var w=this,v=w.z
if(v!=null)v.a8(0)
w.m(new A.eLW(w,d,e))
w.z=C.cM(D.l6,new A.eLX(w))},
oX(d){return this.kw(d,!1)},
nV(){this.gkS().lU(40,0.18,B.aRo,-0.3)
this.m(new A.eLP(this))},
Io(d){var w,v,u,t,s,r,q=this,p="square"
if(d===0){q.nV()
return}w=C.F([41,"tail",42,"trap",43,"arm"],x.S,x.N).h(0,d)
if(w!=null&&!q.geS(0).a.t(0,w)){v=q.r
if(v.length===0){if(w==="tail")v="tailpiece"
else v=w==="trap"?"P-trap":"trap arm"
q.oX("Pick the "+v+" from the buttons below first, then tap its glowing outline.")
return}if(v!==w){A.m7(180,220,0.25,p)
u=q.r
A:{if("tail"===u){v="The tailpiece is the straight pipe that hangs from the sink. It goes at the very top, under the drain."
break A}if("trap"===u){v="The P-trap is the U-shaped bend. It goes right under the tailpiece, in the middle."
break A}v="The trap arm is the long straight pipe that goes into the wall. It goes last, on the right."
break A}q.oX(v)
return}if(w==="trap"&&!q.geS(0).a.t(0,"tail")){A.m7(180,220,0.25,p)
q.oX("Start from the top: put the tailpiece on first, then the trap under it.")
return}if(w==="arm"&&!q.geS(0).a.t(0,"trap")){A.m7(180,220,0.25,p)
q.oX("The trap arm joins the trap. Put the P-trap on first.")
return}q.m(new A.eLQ(q,w))
A.y7()
q.kw("Piece in place. "+(q.geS(0).a.a===3?"Now tighten the two slip nuts: tap each nut.":"Pick the next piece."),!0)
return}v=d===44
if(v||d===45){t=v?"n1":"n2"
if(q.geS(0).b.h(0,t)!==!0){q.m(new A.eLR(q,t))
A.y7()
q.kw("Slip nut hand tightened. In real life give it a quarter turn more with pliers, but never over-tighten plastic.",!0)
return}}s=q.goD().b.h(0,d)
if(s!=null){q.m(new A.eLS(q,d))
v=q.gkS()
r=s.c
v.zd(s.d,r)}},
c35(){var w=this,v=x.cc,u=C.B(new C.a2(C.a(["n1","n2"],x.s),new A.eLT(w),v),v.k("J.E"))
w.m(new A.eLU(w,u))
if(u.length!==0){A.m7(180,220,0.25,"square")
w.oX("It is dripping from a loose slip nut! Tap the nut and tighten it, then run the water again.")}else{A.y7()
w.kw("No leaks. The water flows through the trap and into the wall. The little pool in the U-bend stays there and blocks sewer gas. The lesson is complete!",!0)}},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.geS(0),i=j.a,h=i.t(0,"tail"),g=i.t(0,"trap"),f=i.t(0,"arm"),e=j.b
e=e.h(0,"n1")===!0&&e.h(0,"n2")===!0
w=C.a([h,g,f,e,j.c&&j.d.length===0],x.u)
v=D.d.ba(w,new A.eM0())
u=i.a===3
j=v<0?"All done":"Step "+(v+1)+"/5"
h=l.goD()
g=l.gkS()
f=l.w
e=l.x
t=l.y
s=f!==0?l.goD().b.h(0,l.w):k
h=A.X3(k,g,new A.eM1(l),t,f,s,k,k,e,k,k,l.gIm(),l.gIn(),h,k,k)
e=x.p
s=C.a([],e)
for(r=0;r<3;++r){q=B.daX[r]
g=i.t(0,q)?k:new A.eM2(l,q)
f=i.t(0,q)?D.dp:D.fm
t=new C.aW(14,14)
p=l.r===q
o=p?D.b1:D.b2
n=new C.aA(o,p?3:1,D.q,-1)
o=C.a([],e)
if(i.t(0,q))o.push(B.e3n)
p=B.diE.h(0,q)
p.toString
m=i.t(0,q)?D.c_:D.c
o.push(new C.x(p,k,new C.G(!0,m,k,k,k,k,13,D.u,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k),k,k,k,k,k,k,k,k,k))
s.push(new C.C(D.jc,C.aE(k,C.p(k,new C.cm(D.aO,D.e,D.j,D.m,k,D.p,k,0,o,k),D.f,k,k,new C.o(f,k,new C.bP(n,n,n,n),new C.bq(t,t,t,t),k,k,D.n),k,k,k,k,D.hJ,k,k,k),D.y,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,g,k,k,k,k,k,k,!1,D.a8),k))}i=C.bZ(D.bB,s,D.bs,6,8)
g=A.y6("Start over",D.ld,new A.eM3(l),D.ad)
f=u?"Run the water":"Build the drain first"
return new A.AW("Sink drain (P-trap)",D.cs,h,C.v(C.a([i,D.P,C.A(C.a([g,D.ab,A.y6(f,D.pR,u?l.gc34():k,D.cs)],e),D.m,k,D.e,D.j,0,k,k)],e),D.m,k,D.e,D.Q,0,D.p),new A.eM4(d,w),j,k)}}
A.a3T.prototype={
T(){return new A.ayx()},
gda(d){return this.c}}
A.ayx.prototype={
geS(d){var w,v=this.d
if(v===$){w=this.a.c
v=this.d=w==null?A.fQa():w}return v},
gkS(){var w=this.e
return w===$?this.e=new A.AC(-0.25,0.2,36,B.aR4,$.aw()):w},
goD(){var w=this.f
return w===$?this.f=A.aNs(this.geS(0)):w},
q(){var w=this.z
if(w!=null)w.a8(0)
this.a2()},
kw(d,e){var w=this,v=w.z
if(v!=null)v.a8(0)
w.m(new A.d5a(w,d,e))
w.z=C.cM(D.l6,new A.d5b(w))},
oX(d){return this.kw(d,!1)},
nV(){this.gkS().lU(36,0.2,B.aR4,-0.25)
this.m(new A.d52(this))},
Io(d){var w,v,u,t,s,r,q=this
if(d===0){q.nV()
return}w=x.fZ
v=C.B(new C.a2(B.a2o,new A.d55(d),w),w.k("J.E"))
if(v.length!==0&&q.r.length!==0){w=q.geS(0)
u=A.i4D(w,q.r,D.d.gK(v))
if(u!=null){A.m7(180,220,0.25,"square")
q.oX(u)}else{A.y7()
q.m(new A.d56(q,d))
q.gkS().zd(12,A.afv(d))
q.kw(A.fo_(w)?"All four ends are connected. Now open the valves.":D.d.gK(v).b+": connected.",!0)}return}w=d===68
if(w||d===69){t=w?"hot":"cold"
if(q.geS(0).e.iR(0,t)){q.m(new A.d57(q,t))
q.kw("Hose taken off.",!0)
return}}s=q.goD().b.h(0,d)
if(s!=null){q.m(new A.d58(q,d))
w=q.gkS()
r=s.c
w.zd(s.d,r)}},
c32(d){var w,v=this
v.m(new A.d53(v))
w=v.geS(0)
if(!w.f){v.kw("Valves closed.",!0)
return}if(A.fo_(w)){A.y7()
v.kw("Hot and cold flow through the hoses and out of the faucet. No leaks. The lesson is complete!",!0)}else{A.m7(180,220,0.25,"square")
v.oX("Water is spraying out of a valve that has no hose! Close the valves and finish connecting the hoses first.")}},
B(d){var w,v,u,t,s,r,q,p,o,n=this,m=null,l=n.geS(0),k=l.r||l.e.a!==0,j=l.e,i=j.h(0,61)==="hot"&&j.h(0,63)==="hot",h=j.h(0,62)==="cold"&&j.h(0,64)==="cold",g=C.a([k,i,h,l.f&&A.fo_(l)],x.u),f=D.d.ba(g,new A.d5f())
k=f<0?"All done":"Step "+(f+1)+"/4"
i=n.goD()
h=n.gkS()
w=n.w
v=n.x
u=n.y
t=w!==0?n.goD().b.h(0,n.w):m
s=x.p
i=A.X3(m,h,new A.d5g(n),u,w,t,m,m,v,m,m,n.gIm(),n.gIn(),i,m,C.a([A.Qn("Hints",D.aH,D.qZ,l.r,new A.d5h(n)),D.P],s))
v=C.a([],s)
for(r=0;r<2;++r){h={}
w=B.dar[r]
h.a=null
q=w.a
h.a=q
u=new C.aW(14,14)
t=n.r===q
p=t?D.b1:D.b2
o=new C.aA(p,t?3:1,D.q,-1)
p=C.a([],s)
t=C.a3(j).k("bc<2>")
if(new C.a2(new C.bc(j,t),new A.d5i(h),t.k("a2<J.E>")).gM(0)===2)p.push(B.e3p)
p.push(new C.x(w.b,m,D.rB,m,m,m,m,m,m,m,m,m))
v.push(new C.C(D.jc,C.aE(m,C.p(m,new C.cm(D.aO,D.e,D.j,D.m,m,D.p,m,0,p,m),D.f,m,m,new C.o(w.c,m,new C.bP(o,o,o,o),new C.bq(u,u,u,u),m,m,D.n),m,m,m,m,D.hJ,m,m,m),D.y,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new A.d5j(h,n),m,m,m,m,m,m,!1,D.a8),m))}j=C.bZ(D.bB,v,D.bs,6,8)
h=A.y6("Start over",D.ld,new A.d5k(n),D.ad)
l=l.f?"Close the valves":"Open the valves"
return new A.AW("Faucet supply lines",D.cj,i,C.v(C.a([j,D.P,C.A(C.a([h,D.ab,A.y6(l,D.pR,n.gc31(n),D.cj)],s),D.m,m,D.e,D.j,0,m,m)],s),D.m,m,D.e,D.Q,0,D.p),new A.d5l(d,g),k,m)}}
A.azp.prototype={
T(){return new A.azq(A.h0f())}}
A.azq.prototype={
gkS(){var w,v=this.e
if(v===$){w=new A.AC(-0.3,0.48,46,B.Tz,$.aw())
w.f=80
this.e=w
v=w}return v},
goD(){var w=this.f
return w===$?this.f=A.afi(this.d):w},
q(){var w=this.z
if(w!=null)w.a8(0)
this.a2()},
kw(d,e){var w=this,v=w.z
if(v!=null)v.a8(0)
w.m(new A.dcf(w,d,e))
w.z=C.cM(D.l6,new A.dcg(w))},
oX(d){return this.kw(d,!1)},
nV(){this.gkS().lU(46,0.48,B.Tz,-0.3)
this.m(new A.dc9(this))},
Io(d){var w,v,u,t=this
if(d===0){t.nV()
return}if(d===72){w=t.d
w=w.d.t(0,72)&&w.a>=5}else w=!1
if(w){t.m(new A.dcb(t,d))
A.y7()
t.kw("You flipped the breaker fully OFF and then ON. The living room light is back on. A breaker trips when a circuit is overloaded: find out why before it trips again.",!0)
t.gkS().zd(22,B.fFk)
return}w=d===87
if(w||d===86){v=t.d
v=v.b&&!v.c&&v.a>=5}else v=!1
if(v){if(t.w==="wrench"&&w){t.m(new A.dcc(t,d))
A.y7()
t.kw("You tightened the slip nut with the wrench. The drip has stopped.",!0)
return}A.m7(180,220,0.25,"square")
t.oX(w?"Hand tightening is not enough here. Pick the wrench first, then tap the nut.":"The water is dripping from the slip nut on the trap. Pick the wrench, then tap the nut.")}u=t.goD().b.h(0,d)
if(u!=null){t.m(new A.dcd(t,d))
w=t.gkS()
v=u.c
w.zd(u.d,v)}},
caQ(d){var w,v
A:{if("ptrap"===d){w=B.e9n
break A}if("faucet"===d){w=B.bws
break A}w=new A.GV(d,null,null)
break A}v=this.c
v.toString
C.a6(v,!1).c6(C.e7(new A.dca(w),!1,null,x.H))},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.d,l=B.d5S[m.a],k=o.r,j=k===0?n:A.hV1(k)
k=m.d.t(0,72)
w=!m.b||m.c
v=C.a([!k,w],x.u)
w=m.a
k=o.goD()
u=o.gkS()
t=o.r
s=o.x
r=o.y
q=t!==0?o.goD().b.h(0,o.r):n
p=j==null?n:C.aE(n,C.p(n,B.f6W,D.f,n,n,new C.o(D.aH,n,n,C.m(12),n,n,D.n),n,n,n,n,D.tv,n,n,n),D.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new A.dcj(o,j),n,n,n,n,n,n,!1,D.a8)
k=A.X3(n,u,new A.dck(o),r,t,q,p,new A.dcl(o),s,n,n,o.gIm(),o.gIn(),k,n,n)
s=l.a
p=x.p
q=C.A(C.a([C.D(C.d(""+(m.a+1)+". "+s,n,n,n,n,n,n,B.f_y,n,n,n),1),A.Qn("Wrench",D.aU,D.qU,o.w==="wrench",new A.dcm(o))],p),D.m,n,D.e,D.j,0,n,n)
t=C.d(l.b,n,3,D.a2,n,n,n,B.f0D,n,n,n)
m=C.kU(D.by,6,s,6,0,new A.dcn(o),m.a)
u=v[0]
s=u?"\u2705 Living room power fixed":"\u26a0 Living room has no power"
s=C.D(C.d(s,n,n,n,n,n,n,C.l(n,n,u?D.es:D.f3,n,n,n,n,n,n,n,n,11.5,n,n,D.H,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),1)
u=v[1]
r=u?"\u2705 Sink leak fixed":"\u26a0 Kitchen sink drips"
return new A.AW("Build and fix a house",D.by,k,C.v(C.a([q,D.bA,t,m,C.A(C.a([s,C.D(C.d(r,n,n,n,n,n,n,C.l(n,n,u?D.es:D.f3,n,n,n,n,n,n,n,n,11.5,n,n,D.H,n,n,!0,n,n,n,n,n,n,n,n),D.dL,n,n),1)],p),D.m,n,D.e,D.j,0,n,n)],p),D.m,n,D.e,D.Q,0,D.p),new A.dco(d,v),"Stage "+(w+1)+"/7",n)}}
A.jy.prototype={}
A.M8.prototype={}
A.a5Z.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m=null,l=x.p,k=C.a([C.A(C.a([C.aH(m,m,m,m,M.nd,m,m,m,new A.c5t(d),m,m,m,m,m,m),B.fgy],l),D.m,m,D.e,D.j,0,m,m)],l)
for(w=0;w<5;++w){v=B.dcu[w]
u=v.c
t=C.a([new C.C(D.aht,new C.x(v.b+"  "+v.a.toUpperCase(),m,new C.G(!0,u,m,m,m,m,12,D.u,m,1.1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m,m,m,m,m,m,m,m,m),m)],l)
for(s=v.d,r=s.length,q=0;q<r;++q){p=s[q]
o=new C.aW(14,14)
n=new C.aA(u.j(0.35),1,D.q,-1)
t.push(C.p(m,C.v(C.a([new C.x(p.a,m,D.jn,m,m,m,m,m,m,m,m,m),D.cX,new C.x(p.b,m,E.T4,m,m,m,m,m,m,m,m,m)],l),D.F,m,D.e,D.j,0,D.p),D.f,m,m,new C.o(B.Ej,m,new C.bP(n,n,n,n),new C.bq(o,o,o,o),m,m,D.n),m,m,m,D.cH,D.bk,m,m,m))}D.d.v(k,t)}return C.c8(m,D.bX,C.bm(!0,C.cB(k,m,B.agx,m,m,D.ah,!1),!0,!1,D.af,!0,!0),m,!1,!1,m,m)}}
A.cgg.prototype={}
A.Er.prototype={}
A.nc.prototype={}
A.Wa.prototype={}
A.cg6.prototype={
bvY(d,e,f){var w,v=this
if(f!=null)w=D.d.iC(B.auY,new A.cga(f))
else{w=new C.eP()
w.dG(v.a)
w=B.auY[w.aB(2)]}v.c!==$&&C.aO()
v.c=w
w=new C.eP()
w.dG(v.a+7)
w=w.h9()
v.d!==$&&C.aO()
v.d=w},
uP(d,e){var w=this.c
w===$&&C.c()
return D.d.iC(w.c,new A.cgb(e))},
Ot(d){++this.w
return new A.eE(!1,d,!1,"")},
c0z(d){var w=d.d
return new C.K(w,new A.cg7(this),C.U(w).k("K<1,n>")).aI(0," and ")},
bfi(d,e){var w,v,u,t,s=this,r=s.uP(0,e),q=s.e
if(q.t(0,e))return s.Ot("The "+r.c.toLowerCase()+" is already there.")
if(d!==r.b)return s.Ot(s.b?"That does not go here.":"That does not go here. This spot is for the "+r.c.toLowerCase()+".")
for(w=r.d,v=w.length,u=0;u<v;++u)if(!q.t(0,w[u])){q=s.b?"Not yet: something has to go in first.":"Not yet. "+r.e+" Put in the "+s.c0z(r)+" first.";++s.w
return new A.eE(!1,q,!1,"")}if(r.f&&s.r)return s.Ot(s.b?"The water is still on!":"Stop! The water is still on. Cutting into a pipe with the water on floods the room. Turn the water off at the main valve first (pick the hand and tap the main valve).")
q.L(0,e)
s.y=!1
s.x.a9(0)
if(r.r>0)t=s.b?"":" It is only loose. Pick the wrench and tap it to tighten the joints."
else t=""
return new A.eE(!0,r.c+" fitted."+t,!1,"")},
bgy(d){var w,v,u,t,s=this,r=s.uP(0,d)
if(!s.e.t(0,d))return s.Ot(s.b?"Nothing to tighten yet.":"There is nothing to tighten yet: the "+r.c.toLowerCase()+" is not fitted.")
w=r.r
if(w===0)return s.Ot(s.b?"That does not need tightening.":"The "+r.c.toLowerCase()+" does not have joints to tighten. It just sits in place.")
v=s.f
u=v.h(0,d)
if(u==null)u=0
if(u>=w)return s.Ot("Already tight. More force would crack it.")
t=u+1
v.n(0,d,t)
s.x.a9(0)
s.y=!1
v=r.c
return new A.eE(!0,t>=w?v+": every joint is tight now.":v+": one joint tightened, one to go.",!1,"")},
bef(d){var w=this.uP(0,d),v=this.f.h(0,d)
if(v==null)v=0
return w.r-v},
aH4(){var w,v,u,t,s,r,q=this
q.r=!q.r
w=q.x
w.a9(0)
if(!q.r)return B.aUi
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
return new A.eE(!1,"Water is spraying from an open pipe where the "+D.d.gK(s).c.toLowerCase()+" should be! Turn the water off and finish the job.",!0,"")}if(r.length!==0){w.v(0,new C.K(r,new A.cgf(),C.U(r).k("K<1,n>")));++q.w
return new A.eE(!1,"The "+D.d.gK(r).c.toLowerCase()+" is leaking from a loose joint. Turn the water off, tighten it with the wrench, then test again.",!0,"")}if(!q.gaiZ())return B.aU8
return B.aTW},
cDe(){var w,v,u,t,s,r,q,p=this
p.r=!0
p.aH4()
w=p.c
w===$&&C.c()
v=w.c
u=v.length
t=0
for(;t<u;++t){s=v[t]
p.bfi(s.b,s.a)}for(w=w.c,v=w.length,t=0;t<v;++t){s=w[t]
for(u=s.r,r=s.a,q=0;q<u;++q)p.bgy(r)}p.aH4()
p.w=0},
gaiZ(){var w=this.c
w===$&&C.c()
return D.d.d9(w.c,new A.cg8(this))},
gcBy(){var w=this.c
w===$&&C.c()
return D.d.d9(w.c,new A.cg9(this))},
gBe(){var w=this
return w.gaiZ()&&w.gcBy()&&w.r&&w.y&&w.x.a===0}}
A.V9.prototype={
T(){var w,v=new A.AC(-0.25,0.4,175,B.aRV,$.aw())
v.f=200
w=new C.BF()
$.CB()
w.j0(0)
return new A.aCW(v,w)}}
A.aCW.prototype={
gCk(d){var w=this.d
if(w===$){this.a.toString
w=D.o.F(Date.now(),1e5)
this.d=w}return w},
a_(){var w,v=this
v.a1()
w=v.a.d
if(w==null){w=v.gCk(0)
v.a.toString
w=A.fQ9(!1,w,null)}v.e=w
v.r=A.heu(w,v.x,!w.b)},
q(){var w=this.at
if(w!=null)w.a8(0)
this.a2()},
acH(){var w=this.e
w===$&&C.c()
return this.r=A.heu(w,this.x,!w.b)},
aXa(d,e){var w=this,v=w.at
if(v!=null)v.a8(0)
w.m(new A.efP(w,d,e))
w.at=C.cM(D.jv,new A.efQ(w))},
aX9(){this.f.lU(175,0.4,B.aRV,-0.25)
this.m(new A.efI(this))},
ctq(d){var w,v,u=this.e
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
awq(d){var w=this.e
w===$&&C.c();++w.w
return new A.eE(!1,d,!1,"")},
c39(d){return this.aX8(d)},
csI(d){var w
A:{if("main"===d){w=9400
break A}w=this.e
w===$&&C.c()
w=w.c
w===$&&C.c()
w=9100+D.d.ba(w.c,new A.efR(d))
break A}this.aX8(w)},
b4a(){var w,v,u,t,s,r,q,p=this,o=p.x
if(o==="hand")return C.a([B.erq],x.L)
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
aX8(d){var w,v,u,t,s,r=this
if(d===0)return
w=r.r
w===$&&C.c()
v=w.b.h(0,d)
if(r.x.length===0){r.m(new A.efA(r,d))
if(v!=null)r.aXa(v.a+": "+v.b,!0)
return}u=r.ctq(d)
w=r.x
if(w==="hand")if(d===9400){w=r.e
w===$&&C.c()
t=w.aH4()}else{w=r.e
w===$&&C.c()
t=r.awq(w.b?"Your hand is only for the main water valve.":"Your hand is for the main water valve. Parts are placed by picking them from the tray.")}else if(w==="wrench")if(u==null){w=r.e
w===$&&C.c()
t=r.awq(w.b?"Nothing to tighten.":"There is nothing to tighten there.")}else{w=r.e
w===$&&C.c()
t=w.bgy(u)}else if(u==null){w=r.e
w===$&&C.c()
t=r.awq(w.b?"Not there.":"That does not go there. Tap one of the glowing spots.")}else{s=r.e
s===$&&C.c()
t=s.bfi(w,u)}w=t.a
if(w)A.y7()
else A.m7(180,220,0.25,"square")
r.m(new A.efB(r,d))
w=w&&!t.c
r.aXa(t.b,w)
w=r.e
w===$&&C.c()
if(w.gBe()&&!r.as){r.as=!0
$.aU.x1$.push(new A.efC(r))}},
c36(){var w=null,v=this.c
v.toString
C.ca(w,w,!0,w,new A.efH(this),v,w,!0,!0,x.H)},
aW6(){this.m(new A.efN(this))
this.aX9()},
avy(d,e,f){var w,v=null,u=this.x===d,t=u?D.aH.j(0.25):D.c.j(0.07),s=C.m(14),r=u?D.aH:D.b2
r=C.I(r,D.q,u?2:1)
w=C.W(f,u?D.aH:D.ad,v,v,v,19)
return new C.C(E.tt,C.aE(v,C.p(v,C.A(C.a([w,D.bp,C.d(e,v,v,v,v,v,v,C.l(v,v,u?D.aH:D.c,v,v,v,v,v,v,v,v,12.5,v,v,D.H,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),D.m,v,D.e,D.j,0,v,v),D.f,v,v,new C.o(t,v,r,s,v,v,D.n),v,v,v,v,D.fT,v,v,v),D.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new A.efE(this,u,d),v,v,v,v,v,v,!1,D.a8),v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.e
h===$&&C.c()
h=h.c
h===$&&C.c()
h=h.c
w=new C.a2(h,new A.efS(j),C.U(h).k("a2<1>")).gM(0)
h=j.e.c
h===$&&C.c()
v=j.r
v===$&&C.c()
u=j.y
t=j.z
s=j.Q
r=u!==0?v.b.h(0,u):i
v=A.X3(i,j.f,new A.efT(j),s,u,r,i,new A.efU(),t,i,i,j.gc37(),j.gc38(),v,i,i)
t=x.p
r=C.a([],t)
if(j.x.length!==0&&j.b4a().length!==0){u=C.a([],t)
for(s=j.b4a(),q=s.length,p=0;p<s.length;s.length===q||(0,C.L)(s),++p){o={}
n=s[p]
o.a=null
o.a=n.a
m=new C.aW(12,12)
l=new C.aA(D.b1,1,D.q,-1)
u.push(C.aE(i,C.p(i,new C.x("\ud83d\udccd "+n.b,i,D.o9,i,i,i,i,i,i,i,i,i),D.f,i,i,new C.o(D.fi.j(0.35),i,new C.bP(l,l,l,l),new C.bq(m,m,m,m),i,i,D.n),i,i,i,i,B.XE,i,i,i),D.y,!1,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,new A.efV(o,j),i,i,i,i,i,i,!1,D.a8))}r.push(new C.C(D.eO,C.bZ(D.bB,u,D.bs,6,6),i))}u=j.e
if(u.b)u="Practice mode: no hints. Build it in the right order."
else if(u.gaiZ())u="Everything is fitted. Tighten every joint, then turn the main water on to test."
else{u=j.e.c
u===$&&C.c()
u="Job: "+u.d}r.push(new C.bH(D.a3,i,i,C.d(u,i,2,D.a2,i,i,i,B.aOk,i,i,i),i))
r.push(D.P)
t=C.a([j.avy("hand","Hand",B.al9),j.avy("wrench","Wrench",D.qU)],t)
for(p=0;p<11;++p){k=B.bV1[p]
u=B.dgA.h(0,k)
u.toString
t.push(j.avy(k,u,A0.aky))}r.push(new C.a7(i,52,C.cB(t,i,i,i,i,D.aO,!1),i))
return new A.AW("Plumbing job: "+h.b,D.aU,v,C.v(r,D.m,i,D.e,D.Q,0,D.p),new A.efW(j,d),""+w+"/"+h.c.length+" fitted",i)},
bYs(d){return C.bX(E.mT,null,new A.efM(this),d,!0,!0,!0,D.lm,!1,!1,x.H)}}
A.yr.prototype={}
A.pI.prototype={}
A.WQ.prototype={}
A.atU.prototype={}
A.aSg.prototype={}
A.eE.prototype={
gj9(){return this.a}}
A.b3z.prototype={
cg9(d,e){var w,v,u,t,s=this,r=null,q="outlet",p="switch",o=new C.eP()
o.dG(s.a)
w=d==null?o.aB(3):d
v=C.a([0,1,2],x.t)
D.d.fq(v,o)
u=3+o.aB(2)
switch(w){case 0:t=e==null?"Living room":e
s.c!==$&&C.aO()
s.c=t
t=C.a([new A.pI(v[0],q,r),new A.pI(v[1],q,r),new A.pI(5,"light",u),new A.pI(u,p,r)],x.B)
s.d!==$&&C.aO()
s.d=t
break
case 1:t=e==null?"Bedroom":e
s.c!==$&&C.aO()
s.c=t
t=C.a([new A.pI(v[0],q,r),new A.pI(v[1],q,r),new A.pI(6,"fan",u),new A.pI(u,p,r)],x.B)
s.d!==$&&C.aO()
s.d=t
break
default:t=e==null?"Kitchen":e
s.c!==$&&C.aO()
s.c=t
t=C.a([new A.pI(v[0],"gfci",r),new A.pI(v[1],"gfci",r),new A.pI(5,"light",u),new A.pI(u,p,r)],x.B)
s.d!==$&&C.aO()
s.d=t}},
galI(){var w,v=C.aX(x.S),u=this.d
u===$&&C.c()
w=0
for(;w<4;++w)v.L(0,u[w].a)
return v},
cP6(d){var w,v,u=this.d
u===$&&C.c()
w=0
for(;w<4;++w){v=u[w]
if(v.a===d)return v}return null},
fM(d){++this.f
return new A.eE(!1,d,!1,"")},
aDt(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.d
g===$&&C.c()
w=h.x
v=0
for(;v<4;++v){u=g[v].a
t=A.l0(u)
if(t.e==="fan")s="fan"
else s=t.c?"ceiling":"wall"
w.n(0,u,s)}g=C.a([],x.t)
for(r=0;r<$.Gl().length;++r)g.push(r)
h.y.v(0,g)
h.z.v(0,h.galI())
for(g=h.Q,w=x.S,v=0;v<3;++v){q=B.o0[v]
u=C.aX(w)
s=C.aX(w)
p=new A.atU(u,s)
p.d=p.e=p.a=!0
for(o=h.aov(q),n=o.length,m=0;m<o.length;o.length===n||(0,C.L)(o),++m)for(l=o[m]*10,k=0;k<6;++k)s.L(0,l+k)
for(s=h.galI(),o=C.a3(s),n=new C.mU(s,s.r,o.k("mU<1>")),n.c=s.e,o=o.c,s=q+48;n.C();){l=n.d
if(l==null)l=o.a(l)
t=A.l0(l)
if(!t.c){j=t.d.a
j=j>=q&&j<=s}else j=!1
if(j)u.L(0,l)}g.n(0,q,p)}for(g=h.as,v=0;v<2;++v){i=g[v]
i.a=!0
i.b=3
i.d=i.c=!0}},
cDf(){var w,v,u,t,s,r,q,p,o,n,m=this,l=m.d
l===$&&C.c()
w=0
for(;w<4;++w){v=l[w]
m.bdg(v.a,v.b)}for(u=x.S,t=x.N,s=m.at,w=0;w<4;++w){r=l[w].a
q=s.h(0,r)
if(q==null)continue
p=q.a
A:{if("outlet"===p){o=C.F([25,"ground",23,"white",21,"black"],u,t)
break A}if("gfci"===p){o=C.F([25,"ground",24,"white",22,"black"],u,t)
break A}if("switch"===p){o=C.F([25,"ground",21,"blackLine",22,"blackLoad"],u,t)
break A}o=C.F([53,"ground",52,"white",51,"black"],u,t)
break A}for(o=new C.Mc(o,o.r,o.e,C.a3(o).k("Mc<1,2>"));o.C();){n=o.d
m.bbB(r,n.b,n.a)}m.bfB(r)
m.bar(r)}if(!m.ax)m.aH2()
for(w=0;w<4;++w){v=l[w]
u=v.b
if(u==="outlet"||u==="gfci"){u=v.a
m.bfk(u,"lamp")
m.bgQ(u)}}for(l=D.d.gaf(l),u=new C.fk(l,new A.cl4());u.C();){t=l.gU(0).a
m.aDE(t)
m.aDE(t)}},
aJr(d){var w,v,u=A.l0(d).d.a,t=C.a([],x.t)
for(w=0;v=$.Gl(),w<v.length;++w){v=v[w]
if(v>u&&v<64)t.push(w)}return t},
cN0(d,e){var w,v,u=this,t=u.x
if(t.ah(0,d))return u.fM("There is already a box at "+A.l0(d).b+".")
w=A.l0(d)
v=w.c
if(!v&&e!=="wall")return u.fM("That is a ceiling box. On the wall you use a plain wall box (the blue one with ears).")
if(v&&e==="wall")return u.fM("A wall box cannot go in the ceiling. Use a round ceiling box.")
if(w.e==="fan"&&e!=="fan"){if(!u.b)return u.fM('A fan is heavy and it shakes. It needs a box that says "fan rated". A plain ceiling box can let the fan fall.')
t.n(0,d,e);++u.f
return B.aUw}t.n(0,d,e)
t=v?"ceiling joist":"side of the stud"
return new A.eE(!0,w.b+": box fixed to the "+t+".",!1,"")},
cHG(d){var w,v=this
if(d<0||d>=$.Gl().length)return B.aUq
w=v.y
if(w.t(0,d))return v.fM("That stud already has a hole.")
if(v.x.a===0)return v.fM("Mount the boxes first. Then you know where the cable has to go and which studs need a hole.")
w.L(0,d)
return B.aUa},
cQ8(d){var w,v,u,t,s=this,r=A.l0(d)
if(!s.x.ah(0,d))return s.fM("There is no box at "+r.b+". Mount the box first, then pull the cable to it.")
w=s.z
if(w.t(0,d))return s.fM("The cable is already there.")
v=s.aJr(d)
u=C.U(v).k("a2<1>")
t=C.B(new C.a2(v,new A.clb(s),u),u.k("J.E"))
if(t.length!==0){w=D.o.V($.Gl()[D.d.gK(t)])
v=t.length
u=v===1?"it":"the studs"
return s.fM("The cable is stuck: the stud at "+w+" inches has no hole. Drill "+u+" first ("+v+" left on the way).")}w.L(0,d)
return new A.eE(!0,"Cable pulled from the panel to "+r.b+", through the studs and along the ceiling.",!1,"")},
gaGR(){return this.galI().d9(0,new A.clc(this))},
aoc(d){var w,v,u,t
for(w=this.Q,w=new C.cJ(w,C.a3(w).k("cJ<1,2>")).gaf(0);w.C();){v=w.d
u=v.b
if(u.a){t=v.a
t=d>=t&&d<=t+48}else t=!1
if(t)return u}return null},
cKo(d){var w,v,u=this
if(!u.gaGR())return u.fM("Finish the rough-in first. The cable and the boxes must be in before the drywall hides the studs.")
if(!D.d.t(B.a2q,d))return B.aTZ
if(!D.d.t(B.o0,d))return u.fM("The edge of the sheet would land between two studs. The sheet needs a stud under every edge, so there is nothing to screw it to. Start at the left corner (a stud) and move one sheet width (48 inches) at a time.")
w=u.Q
v=w.h(0,d)
if((v==null?null:v.a)===!0)return u.fM("There is already a sheet there.")
v=w.h(0,d)
if(v==null){v=x.S
v=new A.atU(C.aX(v),C.aX(v))}v.a=!0
w.n(0,d,v)
return B.aU9},
aov(d){var w,v,u,t=C.a([],x.t)
for(w=d+48,v=0;u=$.Gl(),v<u.length;++v){u=u[v]
if(u>=d&&u<=w)t.push(v)}return t},
cGC(d){var w,v,u=this,t=A.l0(d)
if(t.c)return u.fM("Ceiling fixtures do not need an opening in the wall.")
if(!u.x.ah(0,d))return u.fM("There is no box at "+t.b+".")
w=u.aoc(t.d.a)
if(w==null)return u.fM("There is no sheet over this box yet. Hang the sheet first, then cut the opening.")
v=w.b
if(v.t(0,d))return u.fM("The opening is already cut.")
v.L(0,d)
return B.aUj},
aIH(d,e,f){var w,v,u,t,s,r=this
if(f)return r.fM("Missed the stud! There is only air behind the sheet here. The screw would pull through the paper. Screw only where a stud is behind the sheet (every 16 inches).")
w=x.dD
v=C.B(new C.a2(B.o0,new A.cld(r,d),w),w.k("J.E"))
if(v.length===0)return r.fM("There is no sheet here yet.")
u=d*10+e
if(D.d.d9(v,new A.cle(r,u)))return r.fM("There is already a screw there.")
for(w=v.length,t=r.Q,s=0;s<v.length;v.length===w||(0,C.L)(v),++s)t.h(0,v[s]).c.L(0,u)
return B.aUl},
bkN(d,e){return this.aIH(d,e,!1)},
bmj(d){var w=this.Q.h(0,d)
if(w==null||!w.a)return!1
return D.d.d9(this.aov(d),new A.clg(w))},
gaBf(){return D.d.d9(B.o0,new A.cl3(this))},
gaBe(){var w=this.galI()
return new C.a2(w,new A.cl1(),C.a3(w).k("a2<cn.E>")).d9(0,new A.cl2(this))},
cS_(d){var w,v=this
if(!v.gaBf())return v.fM("Hang all the sheets first.")
if(!D.d.d9(B.o0,v.gaod()))return v.fM("Finish screwing every sheet to the studs first. Tape goes on a solid wall.")
w=v.as[d]
if(w.a)return v.fM("This seam already has tape.")
w.c=w.a=!0
return B.aU2},
cN3(d){var w,v=this,u=v.as[d]
if(!u.a)return v.fM("Tape first. The mud goes over the tape.")
if(!u.c)return v.fM("The last coat is still wet. Let it dry before the next coat.")
w=u.b
if(w>=3)return v.fM("Three coats are enough. Now sand it.");++w
u.b=w
u.c=!1
return new A.eE(!0,"Coat "+w+" of joint compound spread. Let it dry.",!1,"")},
cLZ(){var w,v=this.as
if(D.d.d9(v,new A.cl9()))return B.aUg
for(w=0;w<2;++w)v[w].c=!0
return B.aUu},
bkA(d){var w=this,v=w.as[d]
if(v.b<3)return w.fM("Put on all three coats of mud first. Sanding now would just rub off the tape.")
if(!v.c)return w.fM("The mud is still wet. Let it dry first.")
if(v.d)return w.fM("Already sanded.")
v.d=!0
return B.aU_},
cPl(d){var w=this,v=w.Q.h(0,d)
if(v==null||!v.a)return w.fM("There is no sheet there.")
if(!w.gaBe())return w.fM("Cut the openings for the boxes before you paint. Otherwise the paint covers the boxes.")
if(!D.d.d9(w.as,new A.cla()))return w.fM("Sand the seams first. Paint shows every bump.")
if(v.e)return w.fM("This sheet is already painted.")
v.e=!0
return B.aTX},
gyj(){var w=this
return w.gaBf()&&D.d.d9(B.o0,w.gaod())&&w.gaBe()&&D.d.d9(w.as,new A.cl5())&&D.d.d9(B.o0,new A.cl6(w))},
MI(){var w,v
for(w=this.at,w=new C.dt(w,w.r,w.e);w.C();){v=w.d.b
v.a=this.ax&&!this.ay}},
bXH(d,e){if(d.c)return e==="light"||e==="fan"?"":"A ceiling box holds a light or a fan, not an outlet or a switch."
return e==="outlet"||e==="gfci"||e==="switch"?"":"A light or a fan hangs from the ceiling. A wall box holds an outlet, a GFCI or a switch."},
bdg(d,e){var w,v,u,t,s,r=this,q=A.l0(d)
if(!r.gyj())return r.fM("Finish the drywall first. Devices go in after the walls are painted.")
w=r.x
if(!w.ah(0,d)||!r.z.t(0,d))return r.fM("There is no box with cable at "+q.b+".")
v=r.at
if(v.ah(0,d))return r.fM("There is already a device there. Pull it out first if you want to move it.")
u=r.bXH(q,e)
if(u.length!==0)return r.fM(u)
t=e==="switch"
if(!(t&&q.e==="low"))s=!t&&!q.c&&q.e==="switch"
else s=!0
if(s){if(!r.b)return r.fM(t?"A switch goes about 48 inches from the floor, where a hand falls naturally. This box is down at outlet height.":"Outlets go low, about 16 inches from the floor. This box is up at switch height.");++r.f
r.cy.push("Wrong height at "+q.b+".")}s=e==="fan"
if(s&&w.h(0,d)!=="fan")if(!r.b)return r.fM("This box is not fan rated. A fan on it can fall. Take the box out and put in a fan-rated one.")
w=new A.XH(C.T(x.S,x.N))
w.r=r.b
w.a=r.ax&&!r.ay
v.n(0,d,new A.aSg(e,w))
if(e==="light")w="Light fixture"
else if(s)w="Ceiling fan"
else if(e==="gfci")w="GFCI outlet"
else w=t?"Switch":"Outlet"
return new A.eE(!0,w+" is held up to "+q.b+". Turn the breaker OFF, then wire it.",!1,"")},
cRa(d){var w=this,v=w.at,u=v.h(0,d)
if(u==null)return B.aU6
if(w.ax&&!w.ay&&!u.b.w){if(w.b)return w.a12()
return w.a1h()}v.W(0,d)
w.CW.W(0,d)
w.cx.W(0,d)
w.ch.W(0,d)
return B.aUo},
a1h(){++this.r;++this.f
return B.aUm},
a12(){var w,v,u=this;++u.r;--u.e
u.ax=!1
u.MI()
w=u.e
if(w<=0){u.w=!0
return B.aU5}v=w===1?"life":"lives"
return new A.eE(!1,"ZAP! You touched a live wire and got a shock. The breaker is now off. "+w+" "+v+" left. Always turn the breaker OFF and test the wires first.",!0,"shock")},
bbB(d,e,f){var w,v,u,t=this,s=t.at.h(0,d)
if(s==null)return B.a8M
t.MI()
w=A.Ag(s.a)
v=D.d.iC(w.f,new A.cl7(f))
u=A.hjc(w,s.b,e,v,!0)
if(u==null){if(!t.b&&!v.c.t(0,e)){++t.f
return new A.eE(!0,v.b+": fastened. Careful: "+C.t(w.r.$2(e,v))+" It will burn or trip the breaker when the power comes on.",!0,"")}return new A.eE(!0,v.b+": wire fastened.",!1,"")}if(D.a.a0(u,"SHOCK"))return t.a12()
if(D.a.a0(u,"STOP"))return t.a1h();++t.f
return new A.eE(!1,u,!1,"")},
cSw(d,e){var w,v=this,u=v.at.h(0,d)
if(u==null)return B.Un
v.MI()
w=u.b
if(w.a&&w.c===0){if(v.b)return v.a12()
return v.a1h()}w=w.b
w.bm(w,new A.clh(e))
return B.aUt},
bfB(d){var w,v,u=this,t=u.at.h(0,d)
if(t==null)return B.a8M
w=A.Ag(t.a)
v=t.b
if(!A.bCa(w,v))return u.fM("Every wire must be fastened first.")
if(u.ax&&!u.ay){if(u.b)return u.a12()
return u.a1h()}v.c=1
return B.aUe},
cQ9(d){var w,v=this,u=v.at.h(0,d)
if(u==null)return B.Un
if(v.ax&&!v.ay){if(v.b)return v.a12()
return v.a1h()}w=u.b
w.c=0
w.d=!1
return B.aUk},
bar(d){var w=this.at.h(0,d)
if(w==null||w.b.c!==1)return this.fM("Push the device into the box first.")
w.b.c=2
return B.aUn},
aHt(d){var w=this.at
return A.afu(A.Ag(w.h(0,d).a),w.h(0,d).b)},
aH2(){var w=this
if(w.ay){w.ax=w.ay=!1
w.MI()
return B.aUc}w.ax=!w.ax
w.MI()
if(!w.ax)return B.aU4
return w.c3a()},
c3a(){var w,v,u,t,s,r,q,p,o,n=this,m=C.a([],x.s)
for(w=n.at,v=new C.cJ(w,C.a3(w).k("cJ<1,2>")).gaf(0),u=n.cx,t=!1,s=!1;v.C();){r=v.d
q=r.b.b
if(q.c===0)continue
p=r.a
o=A.afu(A.Ag(w.h(0,p).a),w.h(0,p).b)
q.d=q.c>=2
if(o.d)t=!0
if(o.e){q.w=!0
u.L(0,p)
s=!0}if(o.a!=="ok")m.push(A.l0(p).b+": "+o.b)}if(t){n.ay=!0
n.MI()
w=s?"BANG! Sparks and smoke. ":""
v=D.d.aI(m," ")
u=s?"burn":"trip"
return new A.eE(!1,w+"The breaker tripped. "+v+" Fix it, then flip the breaker OFF and ON again.",!0,u)}if(m.length!==0)return new A.eE(!0,"Power is on. "+D.d.aI(m," "),!0,"")
return B.aUh},
aDE(d){var w,v,u,t,s,r,q=this,p=q.at,o=p.h(0,d)
if(o==null||o.a!=="switch"||o.b.c<2)return B.aUs
w=q.ch
if(w.t(0,d))w.W(0,d)
else w.L(0,d)
v=q.d
v===$&&C.c()
u=C.U(v).k("a2<1>")
t=C.B(new C.a2(v,new A.cl8(d),u),u.k("J.E"))
if(t.length===0)return B.aUd
s=D.d.gK(t)
v=s.a
r=q.alw(v)
if(w.t(0,d)&&r){p=p.h(0,v)
if(p!=null)p.c=!0
return new A.eE(!0,(s.b==="fan"?"The fan spins":"The light turns on")+". The switch works.",!1,"")}if(w.t(0,d)){p=s.b
return new A.eE(!1,(p==="fan"?"The fan":"The light")+" did not come on. Check the breaker and the wires on the switch and on the "+p+".",!1,"")}return B.aUr},
a3a(d){var w,v=this.at.h(0,d)
if(v!=null){w=v.b
w=w.c<2||w.w}else w=!0
if(w)return!1
return this.aHt(d).c},
alw(d){var w=this,v=w.cP6(d),u=v==null,t=u?null:v.c,s=!0
if(!u)if(t!=null)u=!(w.ax&&!w.ay)||!w.a3a(d)||!w.a3a(t)
else u=s
else u=s
if(u)return!1
return w.ch.t(0,t)},
bfk(d,e){var w,v,u=this,t=u.at.h(0,d)
if(t!=null){w=t.a
w=w!=="outlet"&&w!=="gfci"||t.b.c<2}else w=!0
if(w)return u.fM("There is no finished outlet there to plug into.")
w=u.CW
if(w.ah(0,d))return u.fM("Something is already plugged in.")
w.n(0,d,e)
if(t.b.w)return B.aU7
if(u.ax&&!u.ay&&u.a3a(d)){t.c=!0
v=u.aHt(d)
w=v.a
if(w==="reversed"||w==="noGround")return new A.eE(!0,"It runs, but be careful: "+v.b,!0,"")
return new A.eE(!0,A.hCL(e)+" runs. The outlet works.",!1,"")}if(!(u.ax&&!u.ay))return B.aUb
return new A.eE(!1,"Nothing happens. "+u.aHt(d).b,!0,"")},
bgQ(d){if(this.CW.W(0,d)==null)return B.Un
return B.aU3},
gaCV(){var w,v,u,t,s,r=this.d
r===$&&C.c()
w=this.at
v=0
for(;v<4;++v){u=r[v]
t=u.a
s=w.h(0,t)
if(s==null||s.a!==u.b||s.b.c<2)return!1
if(A.afu(A.Ag(w.h(0,t).a),w.h(0,t).b).a!=="ok")return!1
t=u.b
if(t==="outlet"||t==="gfci"){if(!s.c)return!1}else if(t!=="switch"&&!s.c)return!1}return!0}}
A.kW.prototype={}
A.Vc.prototype={
T(){var w,v=new A.AC(-0.12,0.4,205,B.a7P,$.aw())
v.f=300
w=new C.BF()
$.CB()
w.j0(0)
return new A.aD2(v,w,C.T(x.S,x.i))}}
A.aD2.prototype={
gCk(d){var w=this.e
if(w===$){this.a.toString
w=D.o.F(Date.now(),1e5)
this.e=w}return w},
a_(){var w,v=this
v.a1()
w=v.a.d
if(w==null){w=v.gCk(0)
w=A.fQz(null,null,v.a.f,w)}v.d=w
if(v.a.d!=null&&w.gyj())v.y=2
if(v.a.e){v.d.aDt()
v.y=2}v.r=A.Co(v.d,new A.vR(v.z,v.Q,!1))
w=v.f
w.x=0
w.y=1.1},
q(){var w=this.cy
if(w!=null)w.a8(0)
this.a2()},
A6(d,e){var w=this,v=w.cy
if(v!=null)v.a8(0)
w.m(new A.ekb(w,d,e))
w.cy=C.cM(D.jv,new A.ekc(w))},
avB(d){return this.A6(d,!1)},
kx(d){var w,v,u,t,s,r=this,q=d.a
if(q)A.y7()
else A.m7(180,220,0.25,"square")
w=d.d
if(w==="shock"){C.fK()
r.m(new A.ejq(r))
C.bN(D.n1,new A.ejr(r),x.c)}if(w==="burn"||w==="trip"){w=r.d
w===$&&C.c()
w=w.cx
w=C.ec(w,w.r,C.a3(w).c)
v=r.x
u=r.w
t=w.$ti.c
while(w.C()){s=w.d
if(s==null)s=t.a(s)
v.n(0,s,u.gu2()/1000+3.5)}C.fK()
A.m7(150,300,0.5,"noise")}w=r.d
w===$&&C.c()
r.r=A.Co(w,new A.vR(r.z,r.Q,!1))
q=q&&!d.c
r.A6(d.b,q)
if(r.d.w&&r.c!=null)$.aU.x1$.push(new A.ejs(r))
if(r.d.gaCV()&&!r.cx){r.cx=!0
$.aU.x1$.push(new A.ejt(r))}},
b1I(){var w=this.ch?3.141592653589793:-0.12
this.f.lU(205,0.4,B.a7P,w)},
aRC(){var w,v,u=this
u.ch=!1
w=u.f
w.GA(!1)
w.x=0
u.m(new A.ejB(u))
v=u.d
v===$&&C.c()
u.r=A.Co(v,new A.vR(u.z,u.Q,!1))
w.lU(205,0.4,B.a7P,-0.12)},
bA9(){var w,v,u=this
u.ch=!0
w=u.f
w.GA(!0)
u.m(new A.eju(u))
v=u.d
v===$&&C.c()
u.r=A.Co(v,new A.vR(u.z,u.Q,!1))
w.lU(190,0.3,B.fyb,3.141592653589793)},
YJ(d,e){var w,v,u,t=this,s=A.l0(e),r=t.f
r.GA(!1)
r.x=0
t.m(new A.ejT(t,e))
w=t.d
w===$&&C.c()
t.r=A.Co(w,new A.vR(t.z,t.Q,!1))
v=A.a1U(s,B.fxa)
w=s.c
u=w?22:15
r.lU(u,w?-0.8:0.26,v,0.3)},
avz(){var w,v=this
v.m(new A.ejC(v))
w=v.d
w===$&&C.c()
v.r=A.Co(w,new A.vR(v.z,v.Q,!1))
v.b1I()},
c3f(d){var w,v,u,t,s,r,q=this
if(d===0){if(q.Q<0)q.m(new A.ek7(q))
return}w=q.Q
if(w>=0)v=!(d>=5000&&d<5700)
else v=!1
if(v)return
if(d>=5000&&d<5700){v=d-5000
u=D.o.an(v,100)
if(w!==u){if(q.z==="tester")q.azZ(u)
else{q.m(new A.ek8(q))
q.YJ(0,u)}return}q.b_r(u,D.o.F(v,100))
return}if(d>=1000&&d<1010)if(q.z==="drill"){w=q.d
w===$&&C.c()
q.kx(w.cHG(d-1000))
return}if(d>=2000&&d<2007){q.b_u(d-2000)
return}if(d>=3000&&d<3007){q.b_s(d-3000)
return}if(d>=6000&&d<6005){if(q.z==="sheet"){w=q.d
w===$&&C.c()
q.kx(w.cKo(B.a2q[d-6000]))}return}if(d>=6100&&d<6103){t=B.o0[d-6100]
if(q.z==="paint"){w=q.d
w===$&&C.c()
q.kx(w.cPl(t))
return}}if(d>=6200&&d<6202){s=d-6200
switch(q.z){case"tape":w=q.d
w===$&&C.c()
q.kx(w.cS_(s))
return
case"mud":w=q.d
w===$&&C.c()
q.kx(w.cN3(s))
return
case"sand":w=q.d
w===$&&C.c()
q.kx(w.bkA(s))
return}}if(d>=7000&&d<7100){if(q.z==="screw"){w=q.d
w===$&&C.c()
v=d-7000
q.kx(w.bkN(D.o.an(v,10),D.o.F(v,10)))}return}if(d>=7500&&d<7600){if(q.z==="screw"){w=q.d
w===$&&C.c()
v=d-7500
q.kx(w.aIH(D.o.an(v,10),D.o.F(v,10),!0))}return}if(d===8000){w=q.d
w===$&&C.c()
q.kx(w.aH2())
return}if(d>=8100&&d<8107){u=d-8100
w=q.d
w===$&&C.c()
if(w.CW.h(0,u)==="tv"&&q.z!=="unplug"){w=q.c
w.toString
G.fK4(w,0,"tv",!0,D.v1,"Samsung Neo QLED 8K")
return}q.kx(q.d.bgQ(u))
return}if(q.z==="look"){w=q.r
w===$&&C.c()
r=w.b.h(0,d)
if(r!=null){q.m(new A.ek9(q,d))
q.A6(r.a+": "+r.b,!0)}}},
b_u(d){var w,v,u,t=this,s=t.d
s===$&&C.c()
if(s.at.ah(0,d)){s=t.z
s=s!=="tester"&&s!=="look"&&!D.d.t(B.GU,s)}else s=!1
if(s){t.m(new A.ek5(t))
t.YJ(0,d)
return}s=t.z
switch(s){case"wall":case"ceiling":case"fanbox":w=t.d
t.kx(w.cN0(d,s==="fanbox"?"fan":s))
return
case"cable":t.kx(t.d.cQ8(d))
return
case"knife":t.kx(t.d.cGC(d))
return
case"outlet":case"gfci":case"switch":case"light":case"fan":v=t.d.bdg(d,s)
t.kx(v)
if(v.a){t.d.at.h(0,d).b.f=!t.d.b
t.z=""
t.YJ(0,d)}return
case"tester":t.azZ(d)
return}if(t.d.at.ah(0,d)){t.YJ(0,d)
return}s=t.r
s===$&&C.c()
u=s.b.h(0,2000+d)
if(u!=null){t.m(new A.ek6(t,d))
t.A6(u.a+": "+u.b,!0)}},
azZ(d){var w,v=this.d
v===$&&C.c()
w=v.ax&&!v.ay&&v.x.ah(0,d)&&this.d.z.t(0,d)
v=w?"The tester glows: this box is LIVE (120 volts). Turn the breaker OFF before you touch any wire.":"The tester stays dark: no power here. It is safe to work. (Test again after you turn the breaker off, every time.)"
this.A6(v,!w)
A.m7(w?1400:500,120,0.25,"tri")},
b_s(d){var w,v=this,u=v.d
u===$&&C.c()
w=u.at.h(0,d)
if(w==null)return
if(D.d.t(B.GU,v.z)){v.kx(v.d.bfk(d,v.z))
return}u=v.z
if(u==="tester"){v.azZ(d)
return}if(u==="flip"){if(w.a==="switch"&&w.b.c>=2)v.kx(v.d.aDE(d))
else v.avB("Only a finished switch can be flipped.")
return}v.m(new A.ek4(v))
v.YJ(0,d)},
b_r(d,e){var w,v,u,t,s,r,q,p=this,o=p.d
o===$&&C.c()
w=o.at.h(0,d)
if(w==null)return
o=w.a
v=A.Ag(o).f
u=C.U(v).k("a2<1>")
t=C.B(new C.a2(v,new A.ek0(e),u),u.k("J.E"))
s=A.hjh(o,e)
if(s!=null){o=w.b
o=o.b.iR(0,s)&&o.c===0}else o=!1
if(o){p.kx(p.d.cSw(d,s))
return}if(t.length!==0&&w.b.c===0){o=p.at
if(o.length===0){p.avB("Pick a wire below first, then tap "+D.d.gK(t).b+".")
p.m(new A.ek1(p,d,e))
return}r=p.d.bbB(d,o,e)
p.kx(r)
if(r.a)p.m(new A.ek2(p))
return}o=p.r
o===$&&C.c()
q=o.b.h(0,5000+d*100+e)
if(q!=null){p.m(new A.ek3(p,d,e))
p.A6(q.a+": "+q.b,!0)}},
c3g(){var w,v,u,t,s,r,q=this,p=C.a([],x.ek)
for(w=0;w<7;++w){v=B.tW[w]
u=q.d
u===$&&C.c()
t=v.a
s=u.at.ah(0,t)
r=q.z
A:{u=!1
if("wall"===r){u=!v.c&&!q.d.x.ah(0,t)
break A}if("ceiling"===r||"fanbox"===r){u=v.c&&!q.d.x.ah(0,t)
break A}if("cable"===r){u=q.d.x.ah(0,t)&&!q.d.z.t(0,t)
break A}if("knife"===r){u=!v.c&&q.d.x.ah(0,t)
break A}if("outlet"===r||"gfci"===r||"switch"===r){u=!v.c&&q.d.x.ah(0,t)&&!s
break A}if("light"===r||"fan"===r){u=v.c&&q.d.x.ah(0,t)&&!s
break A}if("tv"===r||"lamp"===r||"toaster"===r||"hairdryer"===r){if(s)u=q.d.at.h(0,t).a==="outlet"||q.d.at.h(0,t).a==="gfci"
break A}if("tester"===r){u=q.d.x.ah(0,t)
break A}break A}if(u)p.push(new C.y(t,v.b))}return p},
csJ(){var w,v,u,t,s,r,q,p=null,o=this.c3g()
if(o.length===0)return D.bH
w=C.a([],x.p)
for(v=o.length,u=0;u<o.length;o.length===v||(0,C.L)(o),++u){t={}
s=o[u]
t.a=null
t.a=s.a
r=new C.aW(12,12)
q=new C.aA(D.b1,1,D.q,-1)
w.push(C.aE(p,C.p(p,new C.x("\ud83d\udccd "+s.b,p,D.o9,p,p,p,p,p,p,p,p,p),D.f,p,p,new C.o(D.fi.j(0.35),p,new C.bP(q,q,q,q),new C.bq(r,r,r,r),p,p,D.n),p,p,p,p,B.XE,p,p,p),D.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new A.ekd(t,this),p,p,p,p,p,p,!1,D.a8))}return new C.C(D.ia,C.bZ(D.bB,w,D.bs,6,6),p)},
bM8(){var w=null,v=this.c
v.toString
C.ca(w,w,!1,w,new A.ejA(this),v,w,!0,!0,x.H)},
c3b(){var w=null,v=this.c
v.toString
C.ca(w,w,!0,w,new A.ejx(this),v,w,!0,!0,x.H)},
avA(d){this.m(new A.ejD(this,d))
this.aRC()},
aXb(){return this.avA(!1)},
c3d(){var w,v,u,t,s,r,q,p,o,n=this,m=n.d
m===$&&C.c()
if(m.w)return"The job is over."
switch(n.y){case 0:m=m.d
m===$&&C.c()
w=C.U(m).k("a2<1>")
v=C.B(new C.a2(m,new A.ejE(n),w),w.k("J.E"))
if(v.length!==0){u=D.d.gK(v)
t=A.l0(u.a)
m=u.b
if(m==="gfci")m="a GFCI"
if(t.c)w=t.e==="fan"?"fan box":"ceiling box"
else w="wall box"
return"Mount a box at "+t.b+" ("+m+" goes here): pick a "+w+", then tap the glowing spot."}m=n.d.d
m===$&&C.c()
w=C.U(m).k("a2<1>")
s=C.B(new C.a2(m,new A.ejF(n),w),w.k("J.E"))
if(s.length!==0){t=D.d.gK(s).a
m=n.d.aJr(t)
r=new C.a2(m,new A.ejG(n),C.U(m).k("a2<1>")).gM(0)
return r>0?"The cable comes from the panel on the right. Pick the drill and tap each stud on the way to "+A.l0(t).b+" ("+r+" left).":"Pick the cable roll and tap "+A.l0(t).b+"."}return"Rough-in done! Open 2 Drywall."
case 1:if(!m.gaGR())return"Finish the rough-in first (tab 1). Drywall hides the wires."
if(!n.d.gaBf())return"Pick a drywall sheet and tap a stud edge to hang it. Three sheets cover the wall."
if(!n.d.gaBe())return"Pick the drywall saw and tap each box to cut its opening."
if(!D.d.d9(B.o0,n.d.gaod()))return"Pick the screw gun and put a screw in every glowing spot on the studs."
if(D.d.b7(n.d.as,new A.ejJ()))return"Pick the tape and tap each seam between two sheets."
if(D.d.b7(n.d.as,new A.ejK()))return D.d.b7(n.d.as,new A.ejL())?'The mud is wet. Press "Let it dry", then the next coat.':"Pick the mud and tap each seam. It needs three coats, with drying in between."
if(D.d.b7(n.d.as,new A.ejM()))return D.d.b7(n.d.as,new A.ejN())?'Press "Let it dry", then sand.':"Pick the sander and tap each seam."
if(!n.d.gyj())return"Pick the roller and paint each sheet."
return"Drywall done! Open 3 Devices."
default:if(!m.gyj())return"Finish the drywall first (tab 2)."
m=n.d.d
m===$&&C.c()
w=C.U(m).k("a2<1>")
q=C.B(new C.a2(m,new A.ejO(n),w),w.k("J.E"))
if(q.length!==0){u=D.d.gK(q)
m=u.b
if(m==="gfci")m="GFCI"
return"Pick the "+m+" and tap "+A.l0(u.a).b+". ("+C.t(new A.ejR().$1(new C.K(q,new A.ejP(),C.U(q).k("K<1,H>"))))+" still need a device.)"}m=n.d.d
m===$&&C.c()
w=C.U(m).k("a2<1>")
p=C.B(new C.a2(m,new A.ejQ(n),w),w.k("J.E"))
if(p.length!==0)return"Tap "+A.l0(D.d.gK(p).a).b+" to work on it: breaker OFF, wires, push in, cover on."
m=n.d
if(!m.ax)return"Turn the breaker ON (tap the panel or the breaker button) and test."
m=m.d
m===$&&C.c()
w=C.U(m).k("a2<1>")
o=C.B(new C.a2(m,new A.ejH(n),w),w.k("J.E"))
if(o.length!==0)return"Pick the TV or the lamp and plug it into "+A.l0(D.d.gK(o).a).b+" to test it."
m=n.d.d
m===$&&C.c()
return"Flip the wall switch to test the "+(D.d.b7(m,new A.ejI())?"fan":"light")+"."}},
B(a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=this,a2=null,a3=B.d0Z[a1.y],a4=a1.Q
if(a4>=0){w=a1.d
w===$&&C.c()
v=w.at.h(0,a4)}else v=a2
a4=v==null
u=a4?a2:A.Ag(v.a)
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
for(l=0;l<3;++l)m.push(new C.C(D.Ls,new C.x(l<a1.d.e?"\u2764\ufe0f":"\ud83d\udda4",a2,D.zk,a2,a2,a2,a2,a2,a2,a2,a2,a2),a2))
m.push(D.bp)
k=a1.d
if(k.ay)k=D.jP
else{k=k.ax
k=k?D.er:D.e9}k=k.j(0.95)
j=C.m(16)
i=a1.d
h=i.ay
if(h)g=D.ct
else{g=i.ax
g=g?D.cj:D.b8}g=C.I(g,D.q,1.4)
if(h)i="TRIPPED: tap to reset"
else{i=i.ax
i=i?"Breaker ON":"Breaker OFF"}m.push(C.aE(a2,C.p(a2,C.d(i,a2,a2,a2,a2,a2,a2,B.eZ_,a2,a2,a2),D.f,a2,a2,new C.o(k,a2,g,j,a2,a2,D.n),a2,a2,a2,a2,D.qO,a2,a2,a2),D.y,!1,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,new A.ekl(a1),a2,a2,a2,a2,a2,a2,!1,D.a8))
m=C.a([C.A(m,D.m,a2,D.e,D.Q,0,a2,a2)],n)
k=a1.ch
j=k?"In front":"Behind the wall"
i=k?F.ak5:F.ak4
k=C.a([A.Qn(j,D.by,i,k,k?a1.gbNC():a1.gbA8()),D.an],n)
if(!a4){j=v.b
D.d.v(k,C.a([A.Qn("Labels",D.aU,S.N5,j.f,new A.ekm(a1,v)),D.an,A.Qn("Hints",D.aH,D.qZ,j.e,new A.ekn(a1,v)),D.P],n))}s=A.X3(a2,a1.f,new A.ekv(a1),p,r,o,a2,a2,q,a2,a2,new A.ekw(a1),a1.gc3e(),s,m,k)
r=C.a([],n)
if(a4){a4=C.a([],n)
for(l=0;l<3;++l){q=l<2?6:0
p=a1.y===l?D.aH.j(0.2):D.dp
o=new C.aW(12,12)
f=new C.aA(a1.y===l?D.aH:D.bF,1,D.q,-1)
if(l===0)m=a1.d.gaGR()
else{m=a1.d
m=l===1?m.gyj():m.gaCV()}m=m?"\u2705 ":""
k=B.d9w[l]
j=a1.y===l?D.aH:D.ad
a4.push(new C.bD(1,D.bi,C.aE(a2,C.p(a2,new C.cq(D.A,a2,a2,new C.x(m+k,a2,new C.G(!0,j,a2,a2,a2,a2,12,D.u,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2),a2,a2,a2,a2,a2,a2,a2,a2,a2),a2),D.f,a2,a2,new C.o(p,a2,new C.bP(f,f,f,f),new C.bq(o,o,o,o),a2,a2,D.n),a2,a2,a2,new C.Q(0,0,q,0),Q.Lv,a2,a2,a2),D.y,!1,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,new A.ekx(a1,l),a2,a2,a2,a2,a2,a2,!1,D.a8),a2))}a4=C.a([C.A(a4,D.m,a2,D.e,D.j,0,a2,a2),D.an],n)
if(!a1.d.b){q=D.aU.j(0.1)
p=C.m(10)
o=C.I(D.aU.j(0.4),D.q,1)
a4.push(C.p(a2,C.d("\ud83d\udc49 "+a1.c3d(),a2,2,D.a2,a2,a2,a2,B.f_t,a2,a2,a2),D.f,a2,a2,new C.o(q,a2,o,p,a2,a2,D.n),a2,a2,a2,a2,D.ck,a2,a2,1/0))}else a4.push(B.fh7)
a4.push(D.an)
q=C.a([],n)
if(a1.y<2&&!a1.d.gyj())q.push(new C.C(E.tt,C.aE(a2,C.p(a2,B.b39,D.f,a2,a2,new C.o(D.dS,a2,a2,C.m(14),a2,a2,D.n),a2,a2,a2,a2,D.fT,a2,a2,a2),D.y,!1,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,new A.eky(a1),a2,a2,a2,a2,a2,a2,!1,D.a8),a2))
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
q.push(new C.C(E.tt,C.aE(a2,C.p(a2,new C.cm(D.aO,D.e,D.j,D.m,a2,D.p,a2,0,C.a([j,D.bp,new C.x(d.b,a2,new C.G(!0,o,a2,a2,a2,a2,12.5,D.H,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2),a2,a2,a2,a2,a2,a2,a2,a2,a2)],n),a2),D.f,a2,a2,new C.o(m,a2,new C.bP(f,f,f,f),new C.bq(k,k,k,k),a2,a2,D.n),a2,a2,a2,a2,D.fT,a2,a2,a2),D.y,!1,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,new A.ekz(a1,d),a2,a2,a2,a2,a2,a2,!1,D.a8),a2))}if(a1.y===1)q.push(new C.C(E.tt,C.aE(a2,C.p(a2,B.b31,D.f,a2,a2,new C.o(D.e9,a2,a2,C.m(14),a2,a2,D.n),a2,a2,a2,a2,D.fT,a2,a2,a2),D.y,!1,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,new A.ekA(a1),a2,a2,a2,a2,a2,a2,!1,D.a8),a2))
a4.push(new C.a7(a2,52,C.cB(q,a2,a2,a2,a2,D.aO,!1),a2))
if(a1.z.length!==0)a4.push(a1.csJ())
D.d.v(r,a4)}else{a4=C.a([],n)
q=v.b
if(q.c===0)for(p=D.d.gaf(u.e),o=new C.fk(p,new A.ekB(v)),m=q.b;o.C();){k=p.gU(0)
j=k.c
i=new C.aW(14,14)
h=a1.at
g=k.a
h=h===g
a0=h?D.b1:D.b2
f=new C.aA(a0,h?3:1,D.q,-1)
a0=C.a([],n)
if(m.iR(0,g))a0.push(new C.C(D.Lt,C.W(D.ee,k.d,a2,a2,a2,17),a2))
h=k.b
g=k.d
a0.push(new C.x(h,a2,new C.G(!0,g,a2,a2,a2,a2,12.5,D.u,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2),a2,a2,a2,a2,a2,a2,a2,a2,a2))
a4.push(C.aE(a2,C.p(a2,new C.cm(D.aO,D.e,D.Q,D.m,a2,D.p,a2,0,a0,a2),D.f,a2,a2,new C.o(j,a2,new C.bP(f,f,f,f),new C.bq(i,i,i,i),a2,a2,D.n),a2,a2,a2,a2,D.xk,a2,a2,a2),D.y,!1,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,new A.ekC(a1,v,k),a2,a2,a2,a2,a2,a2,!1,D.a8))}a4=C.a([C.bZ(D.bB,a4,D.bs,6,8)],n)
if(q.c===0&&a1.at.length!==0){p=C.a([],n)
for(o=D.d.gaf(u.f),m=new C.fk(o,new A.eko(v));m.C();){k=o.gU(0)
j=D.fi.j(0.35)
i=new C.aW(12,12)
f=new C.aA(D.b1,1,D.q,-1)
p.push(C.aE(a2,C.p(a2,new C.x("\u279c "+k.b,a2,D.o9,a2,a2,a2,a2,a2,a2,a2,a2,a2),D.f,a2,a2,new C.o(j,a2,new C.bP(f,f,f,f),new C.bq(i,i,i,i),a2,a2,D.n),a2,a2,a2,a2,B.XE,a2,a2,a2),D.y,!1,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,new A.ekp(a1,k),a2,a2,a2,a2,a2,a2,!1,D.a8))}a4.push(new C.C(D.kh,C.bZ(D.bB,p,D.bs,6,6),a2))}a4.push(D.P)
p=C.a([A.y6("Back to the room",D.oA,a1.gc3c(),D.ad),D.ab],n)
if(q.c===0){u.toString
o=A.bCa(u,q)?"Push it into the box":"Fasten every wire"
p.push(A.y6(o,B.alf,A.bCa(u,q)?new A.ekq(a1):a2,D.aH))}if(q.c===1)D.d.v(p,C.a([A.y6("Pull it out",D.r1,new A.ekr(a1),D.ad),D.ab,A.y6("Cover on",R.vn,new A.eks(a1),D.aH)],n))
if(q.c>=2){q=q.w
o=q?"Take out the burnt one":"Pull it out again"
q=q?D.cj:D.ad
p.push(A.y6(o,B.bBe,new A.ekt(a1),q))}a4.push(C.A(p,D.m,a2,D.e,D.j,0,a2,a2))
D.d.v(r,a4)}a4=C.a([new A.AW(t+" job",D.aH,s,C.v(r,D.m,a2,D.e,D.Q,0,D.p),new A.eku(a1,a5),"Phase "+(w+1)+"/3",a2)],n)
if(a1.CW)a4.push(C.bY(0,C.e1(C.p(a2,a2,D.f,B.aev,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2),!0,a2),0,0,0))
return new C.an(D.W,a2,D.aa,D.r,a4,a2)},
cmx(d){var w=this.d
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
cbS(d){return C.bX(E.mT,null,new A.ek_(this),d,!0,!0,!0,D.lm,!1,!1,x.H)}}
A.vR.prototype={}
A.qT.prototype={
a4(){return"FaultKind."+this.b}}
A.u2.prototype={}
A.Lz.prototype={}
A.com.prototype={
bwa(d,e,f){var w,v,u,t,s,r,q,p=this,o=new C.eP()
o.dG(p.a)
w=C.B(B.d_A,x.R)
D.d.fq(w,o)
v=C.aX(x.S)
u=C.a([],x.gw)
for(t=w.length,s=0;s<w.length;w.length===t||(0,C.L)(w),++s){r=w[s]
q=B.vL.h(0,r).e
if(v.t(0,q))continue
v.L(0,q)
u.push(new A.Lz(r,o.aB(3)))
if(u.length>=d)break}p.c!==$&&C.aO()
p.c=u
p.avC()},
ps(d,e){var w=this.c
w===$&&C.c()
return D.d.b7(w,new A.cor(e))},
avC(){var w,v,u,t,s=this,r=s.d,q=r.d
q.a9(0)
if(s.ps(0,B.YY))q.L(0,72)
if(s.ps(0,B.YZ))q.L(0,75)
q=s.ps(0,B.Ma)
r.b=q
r.c=!q
r.w=s.ps(0,B.Mb)
r.x=s.ps(0,B.Z2)
r.y=s.ps(0,B.Z3)
r.z=s.ps(0,B.Z1)
r.Q=s.ps(0,B.Z4)
r.as=s.ps(0,B.Z5)
r.at=s.ps(0,B.Z0)
q=r.f
q.a9(0)
r=r.r
r.a9(0)
w=s.c
w===$&&C.c()
w=D.d.gaf(w)
v=new C.fk(w,new A.con())
while(v.C()){u=w.gU(0)
t=u.c
u=u.b
if(t)r.L(0,u)
else q.L(0,u)}},
gcBw(){var w=this.c
w===$&&C.c()
return D.d.d9(w,new A.cop())},
gcIK(){var w=this.c
w===$&&C.c()
return new C.a2(w,new A.coq(),C.U(w).k("a2<1>")).gM(0)},
cIm(d){var w,v,u,t,s,r,q,p=this.c
p===$&&C.c()
w=p.length
v=d===86
u=d===92
t=0
for(;t<p.length;p.length===w||(0,C.L)(p),++t){s=p[t]
r=s.a
q=!0
if(B.vL.h(0,r).e!==d)if(!(r===B.Ma&&v))r=r===B.Mb&&u
else r=q
else r=q
if(r)return s}return null},
aXc(d){++this.f
return new A.eE(!1,d,!1,"")},
c3h(){var w,v,u,t,s=this;++s.r;--s.e
for(w=s.d,v=w.d,w=w.e,u=0;u<4;++u){t=B.aty[u]
if(!v.t(0,t))w.L(0,t)}w=s.e
if(w<=0){s.w=!0
return B.aU1}v=w===1?"life":"lives"
return new A.eE(!1,"ZAP! You touched a live wire and got a shock. All the breakers were knocked off. "+w+" "+v+" left. Turn the breaker OFF first.",!0,"shock")},
cSM(d,e){var w,v,u,t,s=this
if(s.w)return B.aTY
if(D.d.t(B.aty,e))return s.bAD(d,e)
w=s.cIm(e)
if(d==="inspect"){if(w==null||w.c)return B.aU0
return new A.eE(!0,"You look and test: "+B.vL.h(0,w.a).b,!1,"")}if(w==null||w.c)return new A.eE(!1,s.b?"Nothing needs fixing there.":"There is nothing wrong with this, so the "+C.t(B.Qt.h(0,d))+' is not needed. Use "Look and test" on things to find the problem.',!1,"")
v=B.vL.h(0,w.a)
if(d!==v.c){++s.f
return new A.eE(!1,s.b?"That is not the right tool for this problem.":"The "+C.t(B.Qt.h(0,d))+" does not fix this. "+v.b,!1,"")}u=v.f
if(u!==0){t=s.d
u=!t.d.t(0,u)&&!t.e.t(0,u)}else u=!1
if(u){if(s.b)return s.c3h()
return s.aXc("STOP! "+v.r+" The wires here are live (120 volts). Tap the breaker in the panel (with your hand) to switch it off.")}w.c=!0
s.avC()
return new A.eE(!0,v.d,!1,"")},
bAD(d,e){var w,v,u,t,s=this
if(d==="inspect"){w=s.d
if(w.d.t(0,e))w="This breaker has tripped: it sits in the middle (orange)."
else w=w.e.t(0,e)?"This breaker is switched OFF.":"This breaker is ON."
return new A.eE(!0,w,!1,"")}if(d!=="hand")return s.aXc(s.b?"Use your hand on a breaker.":"A breaker is switched with your hand, not with a "+C.t(B.Qt.h(0,d))+".")
w=s.d
v=w.d
if(v.t(0,e)){w=s.c
w===$&&C.c()
u=C.U(w).k("a2<1>")
t=C.B(new C.a2(w,new A.coo(e),u),u.k("J.E"))
if(t.length!==0){D.d.gK(t).c=!0
s.avC()
return new A.eE(!0,B.vL.h(0,D.d.gK(t).a).d,!1,"")}v.W(0,e)
return B.aUv}w=w.e
if(w.t(0,e)){w.W(0,e)
return B.aUp}w.L(0,e)
return B.aUf}}
A.aq_.prototype={
T(){var w,v=new A.AC(-0.3,0.48,46,B.Tz,$.aw())
v.f=80
w=new C.BF()
$.CB()
w.j0(0)
return new A.aD6(v,w)}}
A.aD6.prototype={
gJ(){var w=this.d
w===$&&C.c()
return w},
gCk(d){var w=this.e
if(w===$){this.a.toString
w=D.o.F(Date.now(),1e5)
this.e=w}return w},
a_(){var w,v=this
v.a1()
w=v.gCk(0)
w=A.h6N(v.a.d,w)
v.d=w
v.r=A.afi(w.d)},
q(){var w=this.ax
if(w!=null)w.a8(0)
this.a2()},
c3m(d,e){var w=this,v=w.ax
if(v!=null)v.a8(0)
w.m(new A.elZ(w,d,e))
w.ax=C.cM(D.jv,new A.em_(w))},
aXd(){this.f.lU(46,0.48,B.Tz,-0.3)
this.m(new A.elO(this))},
c3l(d){var w,v,u=this
if(d===0)return
w=u.d
w===$&&C.c()
v=w.cSM(u.x,d)
w=v.a
if(w)A.y7()
else A.m7(180,220,0.25,"square")
if(v.d==="shock"){C.fK()
u.m(new A.elT(u))
C.bN(D.n1,new A.elU(u),x.c)}u.m(new A.elV(u,d))
w=w&&!v.c
u.c3m(v.b,w)
w=u.d
if(w.w)$.aU.x1$.push(new A.elW(u))
else if(w.gcBw()&&!u.at){u.at=!0
$.aU.x1$.push(new A.elX(u))}},
cbZ(){var w=null,v=this.c
v.toString
C.ca(w,w,!1,w,new A.elR(this),v,w,!0,!0,x.H)},
c3i(){var w=null,v=this.c
v.toString
C.ca(w,w,!0,w,new A.elN(this),v,w,!0,!0,x.H)},
auY(){this.m(new A.elP(this))
this.aXd()},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.d
g===$&&C.c()
g=g.gcIK()
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
for(o=0;o<3;++o)p.push(new C.C(D.Ls,new C.x(o<i.d.e?"\u2764\ufe0f":"\ud83d\udda4",h,D.zk,h,h,h,h,h,h,h,h,h),h))
v=A.X3(h,i.f,new A.em6(i),s,u,r,h,new A.em7(),t,h,h,i.gc3j(),i.gc3k(),v,C.a([C.A(p,D.m,h,D.e,D.Q,0,h,h)],q),h)
u=i.d.c
u===$&&C.c()
t=C.U(u)
t=new C.cQ(new C.a2(u,new A.em8(),t.k("a2<1>")),new A.em9(),t.k("cQ<1,n>")).aI(0,"  \xb7  ")
u=C.d("Customer: "+(t.length===0?"All fixed!":t),h,2,D.a2,h,h,h,B.aOk,h,h,h)
t=C.a([],q)
for(n=0;n<10;++n){m=B.ddn[n]
s=i.x===m?D.aH.j(0.25):D.c.j(0.07)
r=new C.aW(14,14)
p=i.x===m
l=p?D.aH:D.b2
k=new C.aA(l,p?2:1,D.q,-1)
l=B.dj5.h(0,m)
p=C.W(l,i.x===m?D.aH:D.ad,h,h,h,19)
l=B.Qt.h(0,m)
l.toString
j=i.x===m?D.aH:D.c
t.push(new C.C(E.tt,C.aE(h,C.p(h,new C.cm(D.aO,D.e,D.j,D.m,h,D.p,h,0,C.a([p,D.bp,new C.x(l,h,new C.G(!0,j,h,h,h,h,12.5,D.H,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h),h,h,h,h,h,h,h,h,h)],q),h),D.f,h,h,new C.o(s,h,new C.bP(k,k,k,k),new C.bq(r,r,r,r),h,h,D.n),h,h,h,h,D.fT,h,h,h),D.y,!1,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,new A.ema(i,m),h,h,h,h,h,h,!1,D.a8),h))}g=C.a([new A.AW("Service call",D.aU,v,C.v(C.a([new C.bH(D.a3,h,h,u,h),D.P,new C.a7(h,52,C.cB(t,h,h,h,h,D.aO,!1),h)],q),D.m,h,D.e,D.Q,0,D.p),new A.emb(i,d),""+g+"/"+w+" fixed",h)],q)
if(i.as)g.push(C.bY(0,C.e1(C.p(h,h,D.f,B.aev,h,h,h,h,h,h,h,h,h,h),!0,h),0,0,0))
return new C.an(D.W,h,D.aa,D.r,g,h)},
cwe(d){return C.bX(E.mT,null,new A.em4(this),d,!0,!0,!0,D.lm,!1,!1,x.H)},
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
$1$noPixels(d){return this.gJ().$1$noPixels(d)},
$6(d,e,f,g,h,i){return this.gJ().$6(d,e,f,g,h,i)},
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
$4$wander(d,e,f,g){return this.gJ().$4$wander(d,e,f,g)},
$3$r(d,e,f){return this.gJ().$3$r(d,e,f)},
$6$ends$shine$split(d,e,f,g,h,i){return this.gJ().$6$ends$shine$split(d,e,f,g,h,i)},
$4$round(d,e,f,g){return this.gJ().$4$round(d,e,f,g)},
$5$col$round(d,e,f,g,h){return this.gJ().$5$col$round(d,e,f,g,h)},
$4$col(d,e,f,g){return this.gJ().$4$col(d,e,f,g)},
$1$target(d){return this.gJ().$1$target(d)},
$3$col(d,e,f){return this.gJ().$3$col(d,e,f)},
$1$pixelRatio(d){return this.gJ().$1$pixelRatio(d)},
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
A.VU.prototype={
gkn(d){return this.x}}
A.uy.prototype={}
A.O3.prototype={}
A.B_.prototype={
bcU(d,e,f){var w=this
return d>w.a-f&&d<w.b+f&&e>w.c-f&&e<w.d+f}}
A.cl0.prototype={
c3o(d){return-this.a.gfw(0)/2+d*4},
a3K(d,e){var w,v,u=this.a
if(d<-u.gfw(0)/2+6||d>u.gfw(0)/2-6||e<6||e>u.gjk(0)-6)return!1
for(u=this.b,w=u.length,v=0;v<w;++v)if(u[v].bcU(d,e,9))return!1
return!0},
aXe(d,e,f){var w,v,u=e.a,t=f.a-u,s=e.b,r=f.b-s,q=Math.max(1,D.k.dw(Math.sqrt(Math.pow(t,2)+Math.pow(r,2))/2))
for(w=0;w<=q;++w){v=w/q
if(!this.a3K(u+t*v,s+r*v))return!1}return!0},
aVY(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=a0.a,f=h.a,e=D.k.V((g+f.gfw(0)/2)/4),d=h.c
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
if(!h.a3K(-f.gfw(0)/2+k,j))continue
i=Math.pow(-f.gfw(0)/2+k-g,2)+Math.pow(j-e,2)
if(i<o){p=new C.y(n,l)
o=i}}if(p!=null)return p}return null},
aGS(b9,c0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5=this,b6=1e9,b7=b5.aVY(b9),b8=b5.aVY(c0)
if(b7==null||b8==null)return C.a([b9,c0],x.f)
w=b8.a
v=b5.c3o(w)
u=b8.b
t=new C.y(v,u*4)
if(b5.aXe(0,b9,t))return C.a([b9,t],x.f)
v=b7.a
s=b5.d
s===$&&C.c()
r=b7.b
q=x.S
p=C.ew([v*s+r],q)
o=C.T(q,q)
n=x.i
m=C.F([v*s+r,0],q,n)
l=C.F([v*s+r,b5.bPC(v,r,b8)],q,n)
k=w*s+u
v=b5.a
r=p.$ti
q=r.k("mU<1>")
r=r.c
i=0
for(;;){if(p.a!==0){h=i+1
n=i<6000
i=h}else n=!1
if(!n){j=!1
break}g=p.e
if(g==null)C.ba(C.bd("No elements"))
f=g.a
for(n=new C.mU(p,p.r,q),n.c=g;n.C();){e=n.d
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
b0=a5>=b0||a9>=s||!b5.a3K(-v.gfw(0)/2+a6,a9*4)}if(b0)continue
b0=!1
if(a4)if(a8!==0)b0=!b5.a3K(-v.gfw(0)/2+a6,n)||!b5.a3K(-v.gfw(0)/2+e,a9*4)
if(b0)continue
b1=a5*s+a9
b0=m.h(0,f)
b0.toString
b2=b0+(a4&&a8!==0?1.4142:1)
b0=m.h(0,b1)
if(b2<(b0==null?b6:b0)){o.n(0,b1,f)
m.n(0,b1,b2)
l.n(0,b1,b2+Math.sqrt(Math.pow(a7,2)+Math.pow(a9-u,2)))
p.L(0,b1)}}}if(!j)return C.a([b9,t],x.f)
b3=C.a([k],x.t)
while(o.ah(0,D.d.gal(b3))){w=o.h(0,D.d.gal(b3))
w.toString
b3.push(w)}w=x.f
u=C.a([b9],w)
for(r=x.c5,q=new C.dw(b3,r),q=new C.bR(q,q.gM(0),r.k("bR<ak.E>")),r=r.k("ak.E");q.C();){n=q.d
if(n==null)n=r.a(n)
e=D.o.e3(n,s)
u.push(new C.y(-v.gfw(0)/2+e*4,D.o.F(n,s)*4))}b4=C.a([D.d.gK(u)],w)
for(a5=0;a9=u.length-1,a5<a9;a5=a9){w=a5+1
for(;;){if(!(a9>w&&!b5.aXe(0,u[a5],u[a9])))break;--a9}b4.push(u[a9])}return b4},
bPC(d,e,f){return Math.sqrt(Math.pow(d-f.a,2)+Math.pow(e-f.b,2))}}
A.Jl.prototype={}
A.bp7.prototype={
bwp(d,e,f,g,h,i,j,k,l,m,n,o){var w,v,u,t,s=this.b
if(s!=null)for(w=this.as,v=1;v<s.length;++v){u=v-1
t=Math.sqrt(Math.pow(s[v].a-s[u].a,2)+Math.pow(s[v].b-s[u].b,2))
w.push(t)
this.at+=t}}}
A.bPG.prototype={
asT(d){var w,v,u=d.gfw(0),t=new A.bPH(d,u)
switch(d.c){case"living":w=t.$1(46)
return C.a([B.fL_,new A.Jl(w.a,w.b,4,"Switching the ad on the big TV",!1,!0,!0,"ad")],x.a)
case"kitchen":return C.a([new A.Jl(new C.y(-u/2+40,42),3.141592653589793,2.8,"Getting a drink from the fridge",!0,!1,!1,""),B.fKZ],x.a)
case"bathroom":return B.dat
case"bedroom":v=t.$1(44)
return C.a([new A.Jl(v.a,v.b,3.4,"Switching the ad on the TV",!1,!0,!0,"ad")],x.a)
default:return B.d24}},
aua(a0,a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=e.a.d
d===$&&C.c()
w=d[a0]
v=A.h6D(w)
u=A.haP(w,a1)
t=u.a
s=u.c
d=e.c
r=d.length
q=a3.length===0?"Walking in":a3
d.push(A.bp8(a0,"",!1,q,-1,null,!1,!1,0.5,t.a,u.b,t.b))
for(q=e.asT(w),p=q.length,o=t,n=0;n<q.length;q.length===p||(0,C.L)(q),++n){m=q[n]
l=v.aGS(o,m.a)
k=m.e
if(k)j=C.dp(m.d,"Having",0)
else j=!1
d.push(A.bp8(a0,"",j,"Walking",-1,l,!1,!1,0,0,0,0))
o=D.d.gal(l)
d.push(A.bp8(a0,m.w,k,m.d,-1,null,m.r,m.f,m.c,o.a,m.b,o.b))}if(a2!=null){i=A.haP(w,a2)
h=i.c
l=v.aGS(o,i.a)
g=e.asT(w).length!==0&&D.d.gal(e.asT(w)).e
d.push(A.bp8(a0,"",g,"Walking to the next room",-1,l,!1,!1,0,0,0,0))
o=D.d.gal(l)
d.push(A.bp8(a0,"",g,"Opening the door",h,null,!1,!1,1.8,o.a,e.bJE(w,h),o.b))}for(f=r;f<d.length;++f)d[f].ay=s},
aUL(d,e,f){return this.aua(d,e,f,"")},
bJE(d,e){var w,v=d.w[e].a
A:{if("left"===v){w=-1.5707963267948966
break A}if("right"===v){w=1.5707963267948966
break A}w=3.141592653589793
break A}return w},
c3n(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this
j.aua(10,11,9,"Coming in through the front door")
j.aUL(9,10,5)
for(w=9,v=0;v<8;++v,w=u){u=B.cLz[v]
j.aua(5,w,u,"Walking down the hall")
j.aUL(u,5,v===7?null:5)}t=j.b
s=Math.min(1,t/120)
for(r=j.c,q=r.length,p=0,o=0,n=0;n<q;++n){m=r[n]
if(m.b==null)p+=m.f*=s
else o+=m.at}l=o/Math.max(4,t-p)
for(t=l<=0,k=0,n=0;n<q;++n){m=r[n]
if(m.b!=null)m.f=t?0.1:Math.max(0.05,m.at/l)
m.ax=k
k+=m.f}j.d!==$&&C.aO()
j.d=k},
b8D(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g={},f=this.d
f===$&&C.c()
w=D.k.D(d,0,f-0.001)
f=this.c
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
return new A.VU(v,f.c,f.d,f.e,!1,f.w,f.x,s,!1,f.r,p,o,n,f.ay,0)}v=new A.bPI(g)
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
i=f.a-D.d.gK(v).a
v=g.a.b
v.toString
v=D.d.gal(v)
f=g.a.b
f.toString
h=v.b-D.d.gK(f).b}f=g.a
v=l.a
s=l.b
p=Math.atan2(i,h)
o=g.a
return new A.VU(f.a,v,s,p,!0,o.w,!1,!1,!1,o.r,"",-1,0,o.ay,m/12)}}
A.cuL.prototype={
aBz(d,e){var w,v,u=this.a
if(d<-u.gfw(0)/2+10||d>u.gfw(0)/2-10||e<-300||e>u.gjk(0)-10)return!0
for(u=this.w,w=u.length,v=0;v<w;++v)if(u[v].bcU(d,e,7))return!0
return!1},
aJo(d,e,f,g){var w,v,u,t,s,r,q=this,p=Math.sqrt(e*e+f*f)
if(p<0.000001)return q.e=!1
w=e/p
v=f/p
u=70*g
t=q.b+w*u
s=q.c+v*u
r=!0
if(q.aBz(t,s))if(!q.aBz(t,q.c))s=q.c
else{r=!q.aBz(q.b,s)
if(r)t=q.b}if(r){q.b=t
q.c=s
q.d=Math.atan2(w,v)
q.f=q.f+u/12}return q.e=r},
cBs(d,e){var w,v,u,t=this,s=t.r
if(s==null)return!1
w=s.a-t.b
v=s.b-t.c
if(Math.sqrt(w*w+v*v)<4){t.r=null
return t.e=!1}u=t.aJo(0,w,v,e)
if(!u){t.r=null
t.e=!1}return u}}
var z=a.updateTypes(["~()","~(jf)","R(nc)","E(E)","R(pI)","~(H)","R(WQ)","R(a46)","aj<nd>(N)","R(Lz)","n(n,mi)","R(mi)","R(zM)","ay<~>()","R(qc)","R(Hd)","E(H)","R(O2)","R(pv)","R(O3)","R(E)","R(L7)","N4(Y)","GV(Y)","R(Er)","n(nc)","R(yr)","R(vx)","~(H{keepTour:R})","H(BY,BY)","ay<LG?>()","R(a3C)","Vc(Y)","V9(Y)","n(zM)","E(H,H)","TZ(Y)","a5Z(Y)","aj<nd>(aj<nd>)","N(qc)","E(N)","~(E,E,E,N,N)","~(E,E,E,N,H)","R(a43)","~(~(jf),E,E)","~(E,E,N,N,w)","~(H,E,E,n,w)","~(E,E,H{alongX:R})","n(Lz)","~(aj<E>)","~(aj<E>{col:w})","~(H,E,w{h:N,w:N})","~(H,aj<E>)","~(H,aj<E>,w,N,n)","~(H,n,E,E,E,R)","R(Wa)","~(E,E,E,E)","pv()","aj<E>(aj<E>)","~(n,aj<E>{r:N})","~(n,E,E)","~(nc,E,n)","~(n,E,E,H)","E(n)","O3(O2,N,N{wander:N})","R(H)","qc(N)","~(u,at)","H(pI)","~(H,E,E{col:w,round:R})","d0()","N(BY)","~(aj<E>,w)"])
A.bVt.prototype={
$1(d){var w=this.a
w=w===0?d:A.bBM(d,w)
return w.ad(0,this.b)},
$S:z+3}
A.bVu.prototype={
$1(d){var w=this.a
return w===0?d:A.bBM(d,w)},
$S:z+3}
A.bVs.prototype={
$4(b5,b6,b7,b8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4=this
for(w=b4.b,v=b7.a,u=b7.b,t=b7.c,s=b6.a,r=b6.b,q=b6.c,p=b8.a,o=b8.b,n=b8.c,m=1/w,l=v*m,k=u*m,j=t*m,i=p*m,h=o*m,m=n*m,g=b4.a,f=g.a,e=b4.c,d=x.o,a0=b4.d,a1=b4.e,a2=b4.f,a3=0;a3<w;++a3)for(a4=a3/w,a5=s+v*a4,a6=r+u*a4,a4=q+t*a4,a7=0;a7<w;++a7){a8=a7/w
a9=a5+p*a8
b0=a6+o*a8
a8=a4+n*a8
b1=a9+l
b2=b0+k
b3=a8+j
f.push(new A.nd(C.a([e.$1(new A.E(a9,b0,a8)),e.$1(new A.E(b1,b2,b3)),e.$1(new A.E(b1+i,b2+h,b3+m)),e.$1(new A.E(a9+i,b0+h,a8+m))],d),a0.$1(b5),a1,g.b,a2,g.d,!1,g.c,g.e,g.f,g.w))}},
$S:z+56}
A.bVv.prototype={
$1(d){var w=d*2*3.141592653589793/this.b
return this.a.aF(0,Math.cos(w)).ad(0,this.c.aF(0,Math.sin(w)))},
$S:z+16}
A.bVr.prototype={
$2(d,e){var w=3.141592653589793*d/this.a,v=6.283185307179586*e/this.b
return new A.E(Math.sin(w)*Math.cos(v),Math.cos(w),Math.sin(w)*Math.sin(v))},
$S:z+35}
A.bVw.prototype={
$1(d){var w=d*2*3.141592653589793/this.b
return this.a.aF(0,Math.cos(w)).ad(0,this.c.aF(0,Math.sin(w)))},
$S:z+16}
A.fKN.prototype={
$1(d){var w=d.b,v=this.a,u=d.c,t=this.b
return new A.E(d.a,w*v-u*t,w*t+u*v)},
$S:z+3}
A.fKL.prototype={
$1(d){var w=this.a
return w===0?d:A.bBM(d,w)},
$S:z+3}
A.fKM.prototype={
$1(d){var w=this,v=w.b===0?d:w.c.$1(d)
return J.fLL(w.a.$1(v),w.d)},
$S:z+3}
A.fKK.prototype={
$1(d){var w=this.b===0?d:this.c.$1(d)
return this.a.$1(w)},
$S:z+3}
A.fKE.prototype={
$4(d,e,f,g){var w=-d
return 0.5*(2*e+(w+f)*this.a+(2*d-5*e+4*f-g)*this.b+(w+3*e-3*f+g)*this.c)},
$S:1783}
A.bGg.prototype={
$1(d){var w=this,v=-d.c,u=d.b,t=w.a,s=w.b,r=v*t-u*s,q=d.a,p=w.c,o=w.d
return new A.E(q*p-r*o,u*t+v*s,q*o+r*p)},
$S:z+3}
A.bGf.prototype={
$1(d){var w=this,v=w.a
return v.d.ad(0,w.b.$1(new A.E(w.c*d,w.d*d,d-v.c)))},
$S:z+40}
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
$S:z+20}
A.clT.prototype={
$1(d){return A.hKs(d,this.b,this.c,this.a.gaGY(0))},
$S:1784}
A.clV.prototype={
$1(d){var w,v=d.b
if(v!==0){w=this.a.h(0,v)
w.toString
v=this.b.h(0,v)
v.toString
v=w/v}else v=d.r
return v},
$S:z+71}
A.clU.prototype={
$2(d,e){var w,v,u=D.o.aL(d.a,e.a)
if(u!==0)return u
w=this.a
v=J.CD(w.$1(e),w.$1(d))
return v!==0?v:D.o.aL(d.c,e.c)},
$S:z+29}
A.eSh.prototype={
$1(d){var w=this.a,v=w.r,u=d.a
w.r=d
w.a.d.aGW(D.k.D((u-v.a)/1e6,0,0.1))
w.f.sp(0,u/1e6)},
$S:8}
A.eSg.prototype={
$1(d){if(x.ej.b(d))this.a.a.d.anu(1+d.grX().b*0.0012)},
$S:248}
A.eSd.prototype={
$1(d){var w=this.a
return w.w=w.a.d.c},
$S:235}
A.eSe.prototype={
$1(d){var w,v,u,t=this.a,s=t.a
if(d.w>=2){s=s.d
s.anu(t.w/d.d/s.c)}else{t=s.d
s=d.a
t.ax=t.at=null
w=t.a+=-s.a*0.009
if(!t.z){v=t.x
u=t.y
t.a=D.k.D(w,v-u,v+u)}t.b=D.k.D(t.b+s.b*0.009,t.r,t.w)
t.aZ()}},
$S:214}
A.eSf.prototype={
$1(d){var w=this.a
w=w.a.f.$1(w.e.cPC(d.b))
return w},
$S:49}
A.eSb.prototype={
$1(d){return this.a.x=d.b},
$S:23}
A.eSc.prototype={
$0(){var w,v=this.a,u=v.a.z
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
return C.b($.rL().jN(0,q.a),$async$$0)
case 7:p=e
m=q.b
l=x.N
o=new A.LG(m,C.T(l,x.bB),C.a([],x.X),C.T(l,x.e))
w=8
return C.b(o.A0(p),$async$$0)
case 8:$.fNc.n(0,m,o)
u=o
r=[1]
w=5
break
r.push(6)
w=5
break
case 4:t=3
j=s.pop()
n=C.a9(j)
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
$.fNb.W(0,q.b)
w=r.pop()
break
case 6:case 1:return C.h(u,v)
case 2:return C.f(s.at(-1),v)}})
return C.i($async$$0,v)},
$S:z+30}
A.bOj.prototype={
$2(d,e){var w,v=Math.floor(d),u=Math.floor(e),t=this.b,s=t.a,r=Math.min(s-1,D.k.bu((d-v)*s))
v=t.b
w=(Math.min(v-1,D.k.bu((e-u)*v))*s+r)*4
s=this.a
t=t.c
s.c=s.c+t[w]
s.b=s.b+t[w+1]
s.a=s.a+t[w+2]},
$S:381}
A.bOi.prototype={
$1(d){return D.k.V(D.k.D(d,0,1)*255)},
$S:241}
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
$S:108}
A.bOp.prototype={
$1(d){var w,v,u,t,s,r,q=C.aX(x.S)
for(w=this.a.e,v=w.length,u=0;u<v;u+=3){t=d[w[u]]
s=d[w[u+1]]
r=d[w[u+2]]
if(t===s||s===r||t===r)continue
q.L(0,A.h04(t,s,r))}return q.a},
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
A.bOk.prototype={
$0(){return new Float64Array(this.a*16)},
$S:703}
A.bOl.prototype={
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
else A.h05(k,n*16,h,0,k,j)
k=u.c
k===$&&C.c()
k=k[a1]
j=k.length
m=0
for(;m<k.length;k.length===j||(0,C.L)(k),++m)l.$1(k[m])},
$S:26}
A.bOs.prototype={
$1(d){var w,v,u
for(w=this.a.w,w=new C.hG(w,w.r,w.e);w.C();){v=w.d
u=v.toLowerCase()
if(C.dp(u,d,0))return v}return null},
$S:275}
A.bOq.prototype={
$1(d){return!D.a.t(d.toLowerCase(),"pose")},
$S:3}
A.bOr.prototype={
$0(){var w=this.a.w
return new C.ct(w,C.a3(w).k("ct<1>")).gK(0)},
$S:22}
A.bOu.prototype={
$1(d){var w=this,v=w.b,u=d*3,t=w.c,s=v[u]*t,r=v[u+1],q=w.a.as,p=v[u+2]*t
u=w.d
v=w.e
return new A.E(s*u+p*v+w.f,(r-q)*t,-s*v+p*u+w.r)},
$S:z+16}
A.bHk.prototype={
$1(d){return!d.f},
$S:z+17}
A.bHh.prototype={
$1(d){return d.b===this.a.a.a},
$S:z+15}
A.bHi.prototype={
$1(d){return d.b===this.a&&d.c===this.b},
$S:z+15}
A.bHj.prototype={
$1(d){return d.a<0},
$S:z+21}
A.bHo.prototype={
$1(d){return d.b===this.a.a.a},
$S:z+15}
A.bHm.prototype={
$4$wander(d,e,f,g){var w=D.d.b7(this.a.d,new A.bHn(d)),v=d.a,u=w?"\ud83d\udcde ":"",t=d.gaBv(0),s=d.gTf()!=="fine"||w
return new A.O3(v.a,this.b,e,f,0,v.e,u+v.b+" "+t,s,w,g)},
$3(d,e,f){return this.$4$wander(d,e,f,0)},
$S:z+64}
A.bHn.prototype={
$1(d){return d.b===this.a.a.a},
$S:z+15}
A.bHl.prototype={
$1(d){return d.a.c===this.b&&d.r<0&&!this.a.bdM(d)},
$S:z+17}
A.bHq.prototype={
$1(d){var w=d.c
return w==="bathroom"||w==="kitchen"},
$S:z+7}
A.dKa.prototype={
$0(){return this.b.d=this.a.a},
$S:0}
A.dKb.prototype={
$1(d){return this.a.c2R()},
$S:12}
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
$1(d){return B.aDS},
$S:z+22}
A.dK7.prototype={
$0(){},
$S:0}
A.dKq.prototype={
$1(d){return B.aDS},
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
$0(){return this.a.aai(this.b)},
$S:0}
A.dKc.prototype={
$0(){return this.a.Ij(this.b.bbC(this.c))},
$S:0}
A.dKd.prototype={
$0(){return this.a.Ij(this.b.aIu(this.c))},
$S:0}
A.dKe.prototype={
$0(){return this.a.Ij(this.b.b89(this.c))},
$S:0}
A.dKf.prototype={
$0(){return this.a.aim(this.b)},
$S:0}
A.dK9.prototype={
$1(d){var w,v,u=null,t=this.b,s=this.c,r=t.e[s],q=t.c
q===$&&C.c()
q=q[r.a].a
w=this.a
v=x.p
s=C.A(C.a([new A.abu(q.e,44,u),D.av,C.D(C.d("Bed "+(s+1)+": "+q.b,u,u,u,u,u,u,D.i3,u,u,u),1),w.OP("\ud83d\udc89 Treat",new A.dK8(w,t,s),D.cj)],v),D.m,u,D.e,D.j,0,u,u)
t=r.b
return C.v(C.a([s,D.P,w.Vp("Care",t,t<30?D.ay:D.aU),w.Vp("Getting better",r.c,D.b8)],v),D.F,u,D.e,D.j,0,D.p)},
$S:338}
A.dK8.prototype={
$0(){return this.a.Ij(this.b.cSu(this.c))},
$S:0}
A.dKk.prototype={
$0(){return this.a.Ij(this.b.b91("food"))},
$S:0}
A.dKl.prototype={
$0(){return this.a.Ij(this.b.b91("medicine"))},
$S:0}
A.dKm.prototype={
$0(){var w=0,v=C.j(x.H),u,t=this,s,r
var $async$$0=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:w=3
return C.b(A.aRv(),$async$$0)
case 3:$.Hf=null
s=t.a
if(s.c==null){w=1
break}r=s.f
if(r!=null)r.a8(0)
$.fMv=null
s.m(new A.dKj(s))
s.YH()
case 1:return C.h(u,v)}})
return C.i($async$$0,v)},
$S:1}
A.dKj.prototype={
$0(){return this.a.d=null},
$S:0}
A.dKs.prototype={
$0(){return C.a6(this.a,!1).lL()},
$S:0}
A.dKt.prototype={
$1(d){return d.a>=0},
$S:z+21}
A.foM.prototype={
$2(d,e){var w
A:{if("black"===d){w=e.a===25?"The black wire carries the power (hot). It never goes on the green ground screw. Hot goes to a BRASS screw.":"The black (hot) wire goes on a BRASS screw, not on the silver one. Silver is for white (neutral)."
break A}if("white"===d){w=e.a===25?"The white wire is the neutral. The green screw is only for the ground wire. Neutral goes to a SILVER screw.":"The white (neutral) wire goes on a SILVER screw, not on brass. Brass is for the black (hot) wire."
break A}w="The bare copper ground wire only goes on the GREEN screw. It keeps you safe if something goes wrong."
break A}return w},
$S:z+10}
A.foN.prototype={
$2(d,e){return d==="ground"?y.j:"A black (hot) wire never goes on the green ground screw. The two black wires go on the two BRASS screws."},
$S:z+10}
A.foO.prototype={
$2(d,e){var w
if(e.e)w="Those are the LOAD screws. They are covered with tape because power must come in on the LINE side. If you wire the LOAD side the GFCI will not protect you."
else A:{if("black"===d){w="The black (hot) wire goes on the BRASS LINE screw."
break A}if("white"===d){w="The white (neutral) wire goes on the SILVER LINE screw."
break A}w=y.j
break A}return w},
$S:z+10}
A.foP.prototype={
$2(d,e){var w
A:{if("black"===d){w="The black (hot) wire joins the fixture BLACK wire. Not the white one, and never the green ground."
break A}if("white"===d){w="The white (neutral) wire joins the fixture WHITE wire. Not the black one, and never the green ground."
break A}w="The bare copper ground wire joins the fixture GREEN ground wire only."
break A}return w},
$S:z+10}
A.foQ.prototype={
$2(d,e){var w
A:{if("black"===d){w="The black (hot) wire joins the fan BLACK wire. Not the white one, and never the green ground."
break A}if("white"===d){w="The white (neutral) wire joins the fan WHITE wire. Not the black one, and never the green ground."
break A}w="The bare copper ground wire joins the fan GREEN ground wire only."
break A}return w},
$S:z+10}
A.fnD.prototype={
$1(d){return d.a===this.a},
$S:z+31}
A.fL5.prototype={
$1(d){return d.a},
$S:z+34}
A.fnJ.prototype={
$1(d){return D.d.iC(this.a.f,new A.fnK(d)).f},
$S:73}
A.fnK.prototype={
$1(d){return d.a===this.a},
$S:z+11}
A.fnH.prototype={
$1(d){return D.d.iC(this.a.e,new A.fnI(d)).e},
$S:14}
A.fnI.prototype={
$1(d){return d.a===this.a},
$S:z+12}
A.fnF.prototype={
$1(d){return d.e==="hot"},
$S:z+12}
A.fnG.prototype={
$1(d){return d.e==="neutral"},
$S:z+12}
A.flH.prototype={
$5(d,e,f,g,h){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=j.a
i.b=d
w=j.b
v=w.b
u=C.a3(v).k("cJ<1,2>")
t=u.k("a2<J.E>")
s=C.B(new C.a2(new C.cJ(v,u),new A.flI(g),t),t.k("J.E"))
r=g==="ground"
q=r?B.x1:h
p=r?0.6:0.3
if(w.c>0){o=e.ad(0,B.fDL)
i.jT(A.agI(C.a([e,e.ad(0,B.fCl),o],x.o),4),0.085,q,!1,p,8)
return}if(s.length!==0){n=A.bzS(j.c,D.d.gK(s).a,w)
w=A.zG(e,n,0.5)
v=n.a>0
m=w.ad(0,new A.E(v?0.5:-0.5,0.2,0.9))
w=e.ad(0,B.fGi)
if(j.d)v=0
else v=v?0.06:-0.06
l=A.agI(C.a([e,w,m,n.ad(0,new A.E(v,0,0.08)),n],x.o),5)
k=D.d.dn(l,0,D.k.bu(l.length*0.8))
i.jT(k,0.085,q,!1,p,8)
if(!r)i.jT(D.d.fJ(l,k.length-1),0.061200000000000004,B.x1,!1,0.6,8)}else{l=A.agI(C.a([e,e.ad(0,B.fA2),A.zG(e,f,0.6),f],x.o),5)
k=r?l:D.d.dn(l,0,D.k.bu(l.length*0.86))
i.jT(k,0.085,q,!1,p,8)
if(!r)i.jT(D.d.fJ(l,k.length-1),0.061200000000000004,B.x1,!1,0.6,8)}},
$S:z+46}
A.flI.prototype={
$1(d){return d.b===this.a},
$S:1790}
A.f7R.prototype={
$2(d,e){var w,v=this.a
v.b=d
w=A.Ge(e,0.9,6)
if(this.b)v.jT(w,0.2,B.Wf,!1,0.35,10)
this.c.push(D.d.gal(w))},
$S:z+52}
A.f9a.prototype={
$6$taped(d,e,f,g,h,i){var w,v,u,t=this.a
t.e=0.9
t.b=d
w=this.b
v=w.a+e*0.75
u=w.b+f
w=w.c-0.45
t.bG(new A.E(v,u,w),B.fHj,h,0.7)
t.e5(new A.E(v,u,w),new A.E(v+e*0.22,u,w),0.17,g,0.9,12)
t.bO(new A.E(v+e*0.23,u,w),B.fFn,B.E1)
if(i)t.bG(new A.E(v+e*0.05,u,w),B.fFd,D.cn,0.2)},
$5(d,e,f,g,h){return this.$6$taped(d,e,f,g,h,!1)},
$S:1791}
A.flw.prototype={
$1(d){return d.a===this.a},
$S:z+18}
A.flx.prototype={
$0(){return B.aiA},
$S:z+57}
A.fL4.prototype={
$1(d){var w=d>60?62:99
return Math.min(d*0.5625,w)},
$S:5}
A.fL1.prototype={
$1(d){return d>40?30+d/2:58},
$S:5}
A.fL2.prototype={
$2(d,e){return D.k.aL(d.a,e.a)},
$S:1792}
A.fL3.prototype={
$2(d,e){var w=this.a
if(e-d>w.a-w.b){w.b=d
w.a=e}},
$S:381}
A.bOZ.prototype={
$1(d){return d},
$S:142}
A.bPA.prototype={
$1(d){return d.a==="Jobs"},
$S:z+27}
A.bPB.prototype={
$1(d){return new A.qc("back",d,5)},
$S:z+66}
A.bPF.prototype={
$1(d){return d.gjy()},
$S:z+7}
A.bPE.prototype={
$1(d){var w=d.c
return(w==="bathroom"||w==="kitchen")&&d.gl2()},
$S:z+7}
A.bPD.prototype={
$1(d){var w=d.c
return w==="bathroom"||w==="kitchen"},
$S:z+7}
A.bPC.prototype={
$1(d){return d.gjy()&&d.gl2()},
$S:z+7}
A.e2f.prototype={
$1(d){return!(d.gjy()&&d.gl2())},
$S:z+7}
A.e2c.prototype={
$1(d){var w,v=this.a.a.f
A:{if("wiring"===v){w=!d.gjy()
break A}if("plumbing"===v){w=!d.gl2()
break A}w=!(d.gjy()&&d.gl2())
break A}return w},
$S:z+7}
A.e2d.prototype={
$1(d){var w,v=this.a,u=v.gajt()
if(u==null||v.c==null||v.cx!=null)return
v.m(v.gA5())
w=u.f
if(w.length!==0&&D.d.gK(w)!==v.fy){w=D.d.gK(w)
v.fy=w
v.ka(w)}},
$S:12}
A.e2e.prototype={
$1(d){var w,v=this.a
if(v.c==null)return
w=v.d
w===$&&C.c()
if(w.a.length!==0)v.ka(v.bY9())
else{w=v.a.f
if(w.length!==0){A:{if("wiring"===w){w="This room needs wiring: press the Wiring button, or tap the red outlet or the light."
break A}if("plumbing"===w){w="This room needs plumbing: press the Plumbing button, or tap the toilet or the sink."
break A}w="Walk through the house and fix what the signs say is wrong."
break A}v.ka(w)}}},
$S:8}
A.e1C.prototype={
$0(){var w=this.a
w.ax=this.b
w.ay=this.c},
$S:0}
A.e1D.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new A.e1B(w))},
$S:0}
A.e1B.prototype={
$0(){return this.a.ax=null},
$S:0}
A.e1E.prototype={
$0(){var w=this.a
w.r=this.b
w.Q=0
w.as=-1
w.at=0
w.k9()},
$S:0}
A.e0Z.prototype={
$0(){var w=this.a,v=w.d
v===$&&C.c()
v.e=this.b
w.Q=0
w.as=-1
w.at=0
w.ax=null
w.k9()},
$S:0}
A.e1M.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&C.c()
w=u.d
w===$&&C.c()
u=w[u.e]
u.db=!u.db
v.k9()},
$S:0}
A.e19.prototype={
$0(){var w=this.a,v=this.b
w.Q=v-100
w.at=v
w.k9()},
$S:0}
A.e1a.prototype={
$0(){var w=this.a,v=this.b
w.as=v-300
w.at=v},
$S:0}
A.e1b.prototype={
$0(){var w,v,u=this.a,t=u.d
t===$&&C.c()
w=t.d
w===$&&C.c()
v=this.b
if(!w[t.e].at.W(0,v)){t=u.d
w=t.d
w===$&&C.c()
w[t.e].at.L(0,v)}u.k9()},
$S:0}
A.e1c.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&C.c()
w=u.d
w===$&&C.c()
w[u.e].at.L(0,this.b)
v.k9()},
$S:0}
A.e1d.prototype={
$0(){var w=this.a
if(w.c==null)return
w.m(new A.e18(w,this.b))
w.OS(this.c)},
$S:11}
A.e18.prototype={
$0(){var w,v=this.a.d
v===$&&C.c()
w=v.d
w===$&&C.c()
return w[v.e].at.W(0,this.b)},
$S:0}
A.e1e.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&C.c()
w=u.d
w===$&&C.c()
w[u.e].fy=!0
v.k9()},
$S:0}
A.e1A.prototype={
$1(d){return new C.e0(new A.e1y(this.a,this.b,this.c),null)},
$S:20}
A.e1y.prototype={
$2(d,e){var w,v,u,t,s=null,r=new A.e1z(this.a,e),q=this.b,p=q.a,o=C.d(p.b+" "+q.gaBv(0),s,s,s,s,s,s,L.ry,s,s,s)
p=C.d(p.f,s,s,s,s,s,s,D.D2,s,s,s)
w=C.d("Now: "+q.gTf()+"\nFood "+D.k.V(100-q.b)+"%   Health "+D.k.V(q.c)+"%   Home "+D.k.V(q.d)+"%",s,s,s,s,s,s,B.aP1,s,s,s)
v=this.c
u=x.p
t=C.a([r.$2("\ud83c\udf5e Feed",new A.e1v(v,q))],u)
if(q.e)t.push(r.$3$col("\ud83d\udc8a Medicine",new A.e1w(v,q),D.by))
if(q.e||q.c<60)t.push(r.$3$col("\ud83c\udfe5 Hospital",new A.e1x(v,q),D.cj))
return C.bm(!0,new C.C(D.bW,C.v(C.a([o,p,D.P,w,D.ac,C.bZ(D.bB,t,D.bs,8,8)],u),D.F,s,D.e,D.Q,0,D.p),s),!0,!1,D.af,!0,!0)},
$S:83}
A.e1z.prototype={
$3$col(d,e,f){var w=null,v=f.j(0.22),u=C.m(12),t=C.I(f,D.q,1)
return C.aE(w,C.p(w,C.d(d,w,w,w,w,w,w,C.l(w,w,f,w,w,w,w,w,w,w,w,13,w,w,D.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),D.f,w,w,new C.o(v,w,t,u,w,w,D.n),w,w,w,w,P.AL,w,w,w),D.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new A.e1u(this.a,e,this.b),w,w,w,w,w,w,!1,D.a8)},
$2(d,e){return this.$3$col(d,e,D.aH)},
$S:1793}
A.e1u.prototype={
$0(){var w,v=this.b.$0()
this.c.$1(new A.e1t())
w=this.a
w.m(w.gA5())
w.ka(v)},
$S:0}
A.e1t.prototype={
$0(){},
$S:0}
A.e1v.prototype={
$0(){return this.a.bbC(this.b)},
$S:22}
A.e1w.prototype={
$0(){return this.a.aIu(this.b)},
$S:22}
A.e1x.prototype={
$0(){return this.a.b89(this.b)},
$S:22}
A.e1k.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m=null,l=x.p,k=C.a([],l)
for(w=D.d.gaf(B.a14),v=new C.fk(w,new A.e1h()),u=this.a,t=this.b;v.C();){s=w.gU(0)
r=D.c.j(0.08)
q=new C.aW(12,12)
p=u.d
p===$&&C.c()
o=p.d
o===$&&C.c()
n=new C.aA(o[p.e].cy.h(0,t)===s.a?D.aH:D.b2,1,D.q,-1)
k.push(C.aE(m,C.p(m,new C.x(s.c+" "+s.b,m,D.Tf,m,m,m,m,m,m,m,m,m),D.f,m,m,new C.o(r,m,new C.bP(n,n,n,n),new C.bq(q,q,q,q),m,m,D.n),m,m,m,m,D.eh,m,m,m),D.y,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new A.e1i(u,d,t,s),m,m,m,m,m,m,!1,D.a8))}w=u.d
w===$&&C.c()
v=w.d
v===$&&C.c()
if(v[w.e].cy.h(0,t)!=null)k.push(C.aE(m,C.p(m,B.fmD,D.f,m,m,new C.o(D.er,m,m,C.m(12),m,m,D.n),m,m,m,m,D.eh,m,m,m),D.y,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new A.e1j(u,d,t),m,m,m,m,m,m,!1,D.a8))
return C.bm(!0,new C.C(D.bW,C.v(C.a([B.fiV,D.S,C.bZ(D.bB,k,D.bs,8,8)],l),D.F,m,D.e,D.Q,0,D.p),m),!0,!1,D.af,!0,!0)},
$S:28}
A.e1h.prototype={
$1(d){return!(d.d>70||d.e)},
$S:z+18}
A.e1i.prototype={
$0(){var w,v,u,t=this
C.a6(t.b,!1).O(null)
w=t.a
v=t.d
w.m(new A.e1g(w,t.c,v))
u=v.d>0||v.e
v=v.b
w.ka(u?v+" is on and playing NGMY ads. Tap it to watch full screen.":v+" is plugged in and running.")
A.m7(820,70,0.25,"tri")},
$S:0}
A.e1g.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&C.c()
w=u.d
w===$&&C.c()
w[u.e].cy.n(0,this.b,this.c.a)
v.k9()},
$S:0}
A.e1j.prototype={
$0(){C.a6(this.b,!1).O(null)
var w=this.a
w.m(new A.e1f(w,this.c))
w.ka("Unplugged.")},
$S:0}
A.e1f.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&C.c()
w=u.d
w===$&&C.c()
w[u.e].cy.W(0,this.b)
v.k9()},
$S:0}
A.e27.prototype={
$1(d){return new C.e0(new A.e25(this.a),null)},
$S:20}
A.e25.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o=null,n=this.a,m=new A.e26(n,e),l=n.d
l===$&&C.c()
w=l.d
w===$&&C.c()
l=C.d("TV in "+w[l.e].b,o,o,o,o,o,o,D.du,o,o,o)
w=x.p
v=C.a([],w)
for(u=D.d.gaf(B.a14),t=new C.fk(u,new A.e2_());t.C();){s=u.gU(0)
r=s.b
q=n.d
p=q.d
p===$&&C.c()
q=p[q.e].fr===s.a?D.aH:D.fi
v.push(m.$3$color(r,new A.e20(n,s),q))}v=C.bZ(D.bB,v,D.bs,8,8)
u=C.a([],w)
t=n.d
s=t.d
s===$&&C.c()
t=s[t.e]
if(t.fr!=null){t=t.fy?"\u23fb Turn this TV off":"\u23fb Turn this TV on"
u.push(m.$2(t,new A.e21(n)))}t=n.d
s=t.d
s===$&&C.c()
if(s[t.e].fr!=null&&t.a.length===0)u.push(m.$3$color("\ud83d\uddd1 Take it down",new A.e22(n),D.er))
if(n.d.a.length===0)u.push(m.$3$color("\ud83d\udcfa A TV in every room, all on",new A.e23(n),D.d_))
if(n.d.a.length===0)u.push(m.$3$color("\u23fb All TVs off",new A.e24(n),D.bn))
return C.bm(!0,new C.C(D.bW,C.v(C.a([l,D.S,v,D.S,C.bZ(D.bB,u,D.bs,8,8)],w),D.F,o,D.e,D.Q,0,D.p),o),!0,!1,D.af,!0,!0)},
$S:83}
A.e26.prototype={
$3$color(d,e,f){var w=null,v=f.j(0.4),u=C.m(12),t=C.I(f,D.q,1)
return C.aE(w,C.p(w,C.d(d,w,w,w,w,w,w,I.zi,w,w,w),D.f,w,w,new C.o(v,w,t,u,w,w,D.n),w,w,w,w,P.AL,w,w,w),D.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new A.e1Z(this.a,e,this.b),w,w,w,w,w,w,!1,D.a8)},
$2(d,e){return this.$3$color(d,e,D.fi)},
$S:1794}
A.e1Z.prototype={
$0(){this.b.$0()
this.c.$1(new A.e1Y())
var w=this.a
w.m(w.gA5())},
$S:0}
A.e1Y.prototype={
$0(){},
$S:0}
A.e2_.prototype={
$1(d){return d.d>0||d.e},
$S:z+18}
A.e20.prototype={
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
A.e21.prototype={
$0(){var w,v=this.a.d
v===$&&C.c()
w=v.d
w===$&&C.c()
v=w[v.e]
return v.fy=!v.fy},
$S:0}
A.e22.prototype={
$0(){var w,v=this.a.d
v===$&&C.c()
w=v.d
w===$&&C.c()
v=w[v.e]
v.fr=null
v.fy=!1},
$S:0}
A.e23.prototype={
$0(){var w,v,u,t=this.a.d
t===$&&C.c()
t=t.gqo()
w=t.length
v=0
for(;v<w;++v){u=t[v]
if(u.fr==null)u.fr="tv100"
if(u.c==="hall")if(u.fx==null)u.fx="tv100"
u.fy=!0}},
$S:0}
A.e24.prototype={
$0(){var w,v,u=this.a.d
u===$&&C.c()
u=u.gqo()
w=u.length
v=0
for(;v<w;++v)u[v].fy=!1},
$S:0}
A.e1V.prototype={
$1(d){return new C.e0(new A.e1U(this.a),null)},
$S:20}
A.e1U.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m=null,l=x.p,k=C.a([],l)
for(w=B.aCI.gdK(B.aCI),w=w.gaf(w),v=this.a;w.C();){u=w.gU(w)
t=$.bB1
s=u.a
t=t===s?D.aU.j(0.25):D.c.j(0.07)
r=new C.aW(12,12)
s=$.bB1===s
q=s?D.aU:D.b2
p=new C.aA(q,s?2:1,D.q,-1)
q=u.b
s=s?D.aU:D.c
k.push(C.aE(m,C.p(m,new C.x(q,m,new C.G(!0,s,m,m,m,m,13,D.u,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m,m,m,m,m,m,m,m,m),D.f,m,m,new C.o(t,m,new C.bP(p,p,p,p),new C.bq(r,r,r,r),m,m,D.n),m,m,m,m,D.ix,m,m,m),D.y,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new A.e1R(v,e,u),m,m,m,m,m,m,!1,D.a8))}k=C.bZ(D.bB,k,D.bs,8,8)
w=C.a([],l)
for(o=0;o<5;++o){n=B.dbJ[o]
u=v.db===n?D.aH.j(0.25):D.c.j(0.07)
t=new C.aW(12,12)
s=v.db===n
r=s?D.aH:D.b2
p=new C.aA(r,s?2:1,D.q,-1)
if(n<60)r=""+n+" seconds"
else r=n===60?"1 minute":""+(n/60|0)+" minutes"
s=s?D.aH:D.c
w.push(C.aE(m,C.p(m,new C.x(r,m,new C.G(!0,s,m,m,m,m,13,D.u,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m,m,m,m,m,m,m,m,m),D.f,m,m,new C.o(u,m,new C.bP(p,p,p,p),new C.bq(t,t,t,t),m,m,D.n),m,m,m,m,D.ix,m,m,m),D.y,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new A.e1S(v,e,n),m,m,m,m,m,m,!1,D.a8))}return C.bm(!0,new C.C(D.bW,C.v(C.a([B.foI,D.at,B.ft7,D.S,B.flR,D.an,k,D.ac,C.bZ(D.bB,w,D.bs,8,8),D.aA,C.dq(A7.alx,B.f9W,new A.e1T(v,d),m)],l),D.F,m,D.e,D.Q,0,D.p),m),!0,!1,D.af,!0,!0)},
$S:83}
A.e1R.prototype={
$0(){var w=this.c
this.b.$1(new A.e1P(w))
A.fNd(w.a)
this.a.m(new A.e1Q())},
$S:0}
A.e1P.prototype={
$0(){return $.bB1=this.a.a},
$S:0}
A.e1Q.prototype={
$0(){},
$S:0}
A.e1S.prototype={
$0(){return this.b.$1(new A.e1O(this.a,this.c))},
$S:0}
A.e1O.prototype={
$0(){return this.a.db=this.b},
$S:0}
A.e1T.prototype={
$0(){C.a6(this.b,!1).O(null)
var w=this.a
w.ctg(w.db)},
$S:0}
A.e1H.prototype={
$0(){var w=this.a,v=w.d
v===$&&C.c()
v.e=this.b
w.ax=null
w.k9()},
$S:0}
A.e1I.prototype={
$1(d){return this.a.cxu()},
$S:12}
A.e1J.prototype={
$0(){},
$S:0}
A.e1W.prototype={
$0(){return this.a.dy=this.b.y},
$S:0}
A.e1N.prototype={
$0(){var w=this.b
w.k9()
w.k2=this.a.a;++w.k3},
$S:0}
A.e1L.prototype={
$0(){var w=this.a
w.cx=null
w.dy=""},
$S:0}
A.e1F.prototype={
$1(d){return this.a.cA2()},
$S:12}
A.e1G.prototype={
$0(){},
$S:0}
A.e1K.prototype={
$0(){},
$S:0}
A.e14.prototype={
$3(d,e,f){var w=null,v=this.a,u=D.w.j(0.6),t=C.m(16),s=C.I(D.b8,D.q,1.6)
return C.o6(D.jf,C.p(w,C.W(d,D.c,w,w,w,28),D.f,w,w,new C.o(u,w,s,t,w,w,D.n),w,58,w,D.h7,w,w,w,58),w,new A.e15(v),new A.e16(v,e,f),w,w,w,w,new A.e17(v))},
$S:1795}
A.e16.prototype={
$1(d){var w=this.a
w.p2=this.b
w.p3=this.c},
$S:79}
A.e17.prototype={
$1(d){var w=this.a
w.p3=w.p2=0},
$S:135}
A.e15.prototype={
$1(d){var w=this.a
w.p3=w.p2=0},
$S:200}
A.e10.prototype={
$1(d){var w=this.a,v=w.id
w=w.k2
return v==="ptrap"?new A.a8s(w,null):new A.a3T(w,null)},
$S:1796}
A.e11.prototype={
$1(d){var w=this.a
return new A.GV(w.id,w.k1,null)},
$S:z+23}
A.e28.prototype={
$1(d){var w=this.a
return new A.GV(w.a,w.c,null)},
$S:z+23}
A.e13.prototype={
$1(d){return A.fPs(!1,this.a.CW,!1)},
$S:z+32}
A.e12.prototype={
$1(d){return new A.V9(this.a.cx,null)},
$S:z+33}
A.e0i.prototype={
$1(d){var w,v,u,t,s,r,q,p=null,o=this.a,n=o.d
n===$&&C.c()
w=n.d
w===$&&C.c()
n=C.d("Add to "+w[n.e].b,p,p,p,p,p,p,D.du,p,p,p)
w=x.p
v=C.a([],w)
for(u=0;u<3;++u){t={}
s=B.ddd[u]
t.a=null
t.a=s.a
r=new C.aW(12,12)
q=new C.aA(D.b1,1,D.q,-1)
v.push(C.aE(p,C.p(p,new C.x(s.b,p,D.rB,p,p,p,p,p,p,p,p,p),D.f,p,p,new C.o(D.fi.j(0.4),p,new C.bP(q,q,q,q),new C.bq(r,r,r,r),p,p,D.n),p,p,p,p,P.AL,p,p,p),D.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new A.e0h(t,o,d),p,p,p,p,p,p,!1,D.a8))}return C.bm(!0,new C.C(D.bW,C.v(C.a([n,D.at,B.fqV,D.ac,C.bZ(D.bB,v,D.bs,8,8)],w),D.F,p,D.e,D.Q,0,D.p),p),!0,!1,D.af,!0,!0)},
$S:28}
A.e0h.prototype={
$0(){C.a6(this.c,!1).O(null)
this.b.bxg(this.a.a)},
$S:0}
A.e0c.prototype={
$1(d){return d.a==="back"},
$S:z+14}
A.e0d.prototype={
$1(d){return d.a==="back"},
$S:z+14}
A.e0e.prototype={
$1(d){return Math.abs(d-this.a)>13},
$S:124}
A.e0f.prototype={
$0(){var w=this
w.b.dy.push(new A.aTO(w.c,w.d,new A.XH(C.T(x.S,x.N))))
w.a.k9()},
$S:0}
A.e1_.prototype={
$0(){var w,v=this,u=v.b,t=u.c,s=v.c,r=v.d
u.c=t+(s?D.o.gUG(r)*40:r)
t=u.d
r=v.e
u.d=t+(s?D.o.gUG(r)*40:r)
t=v.a
r=t.d
r===$&&C.c()
w=r.d
w===$&&C.c()
w[r.e].aBU(0,u)
t.k9()},
$S:0}
A.e1X.prototype={
$0(){var w,v,u,t=this.b
t.e=(t.e+1)%4
w=this.a
v=w.d
v===$&&C.c()
u=v.d
u===$&&C.c()
u[v.e].aBU(0,t)
w.k9()},
$S:0}
A.e1r.prototype={
$0(){var w=this.b
w.f=(w.f+1)%6
this.a.k9()},
$S:0}
A.e1s.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&C.c()
w=u.d
w===$&&C.c()
D.d.W(w[u.e].x,this.b)
v.at=v.Q=0
v.k9()},
$S:0}
A.e0g.prototype={
$0(){var w=this.a,v=this.b.a
w.Q=v
w.at=100+v
w.k9()},
$S:0}
A.e0O.prototype={
$0(){return this.a.acG(-6,0)},
$S:0}
A.e0P.prototype={
$0(){return this.a.acG(6,0)},
$S:0}
A.e0Q.prototype={
$0(){return this.a.acG(0,-6)},
$S:0}
A.e0R.prototype={
$0(){return this.a.acG(0,6)},
$S:0}
A.e0S.prototype={
$0(){return this.a.bxj(this.b.a)},
$S:0}
A.e0T.prototype={
$0(){var w=this.a
return w.m(new A.e0N(w))},
$S:0}
A.e0N.prototype={
$0(){return this.a.as=-1},
$S:0}
A.e0U.prototype={
$0(){var w=this.a
w.m(new A.e0M(w,this.b))},
$S:0}
A.e0M.prototype={
$0(){var w,v=this.a,u=v.as,t=this.b,s=v.d
if(u<0){s===$&&C.c()
u=s.d
u===$&&C.c()
D.d.fZ(u[s.e].z,0,3,t)}else{s===$&&C.c()
w=s.d
w===$&&C.c()
w[s.e].z[u]=t}v.k9()},
$S:0}
A.e0V.prototype={
$0(){var w=this.a
w.m(new A.e0L(w,this.b))},
$S:0}
A.e0L.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&C.c()
w=u.d
w===$&&C.c()
w[u.e].Q=this.b
v.k9()},
$S:0}
A.e0W.prototype={
$0(){var w=this.a
w.m(new A.e0K(w))},
$S:0}
A.e0K.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&C.c()
w=u.d
w===$&&C.c()
u=w[u.e]
u.dx=u.dx==="fan"?"light":"fan"
v.k9()},
$S:0}
A.e0X.prototype={
$0(){var w=this.a
w.m(new A.e0J(w,this.b))},
$S:0}
A.e0J.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&C.c()
w=u.d
w===$&&C.c()
w[u.e].as=this.b
v.k9()},
$S:0}
A.e0Y.prototype={
$0(){return this.a.OS(this.b.c)},
$S:0}
A.e2b.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new A.e29(w))},
$S:0}
A.e29.prototype={
$0(){return this.a.k2=null},
$S:0}
A.e2a.prototype={
$3(d,e,f){var w=null
return C.db(C.chB(D.A,w,w,w,w,D.co,D.wy,w,this.a.k2,!1,!1,!1,w,D.oJ,1,w),e)},
$S:102}
A.e0A.prototype={
$0(){var w=this.a,v=w.d
v===$&&C.c()
return v.a.length!==0?w.DJ():w.chM(this.b)},
$S:0}
A.e0s.prototype={
$0(){return this.a.OR()},
$S:0}
A.e0r.prototype={
$1(d){return d<=5},
$S:33}
A.e0q.prototype={
$1(d){var w,v,u,t,s=this.a,r=s.d
r===$&&C.c()
w=r.d
w===$&&C.c()
r=w[r.e]
w=s.CW.gu2()
v=s.cgw()
u=B.diI.h(0,$.bB1)
if(u==null)u=B.a4N
t=s.fr
return A.hV0(r,w/1000,s.r,v,u,t)},
$S:z+8}
A.e0B.prototype={
$0(){var w=this.a
w.m(new A.e0p(w))
w.OR()},
$S:0}
A.e0p.prototype={
$0(){var w=this.a
return w.x=!w.x},
$S:0}
A.e0C.prototype={
$0(){var w=this.a
return w.cx!=null?w.a1p():w.cxt()},
$S:0}
A.e0D.prototype={
$0(){var w=this.a
w.m(new A.e0o(w))
w.OR()
if(w.z)w.ka("Drag to turn all the way round. Double tap a spot on the floor to walk there.")},
$S:0}
A.e0o.prototype={
$0(){var w=this.a,v=!w.z
w.z=v
if(v&&w.cx!=null)w.a1p()
w.k9()},
$S:0}
A.e0E.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&C.c()
w=u.d
w===$&&C.c()
return v.OS(w[u.e].c!=="outside"?11:10)},
$S:0}
A.e0F.prototype={
$0(){var w=0,v=C.j(x.H),u=this,t
var $async$$0=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:w=2
return C.b(C.a6(u.b,!1).c6(C.e7(new A.e0n(),!1,null,x.H)),$async$$0)
case 2:t=u.a
if(t.c!=null)t.m(t.gA5())
return C.h(null,v)}})
return C.i($async$$0,v)},
$S:1}
A.e0n.prototype={
$1(d){return B.aDH},
$S:z+36}
A.e0G.prototype={
$0(){var w=this.a
return w.m(new A.e0m(w))},
$S:0}
A.e0m.prototype={
$0(){var w=this.a,v=!w.w
w.w=v
if(v)w.ka("Voltage tester in your hand: tap an outlet, a switch or the light.")},
$S:0}
A.e0H.prototype={
$0(){var w=this.a
return w.m(new A.e0l(w))},
$S:0}
A.e0l.prototype={
$0(){var w=this.a
return w.y=!w.y},
$S:0}
A.e0I.prototype={
$0(){return this.a.QO("look")},
$S:0}
A.e0t.prototype={
$0(){return this.a.QO("furniture")},
$S:0}
A.e0u.prototype={
$0(){return this.a.QO("walls")},
$S:0}
A.e0v.prototype={
$0(){return this.a.QO("floor")},
$S:0}
A.e0w.prototype={
$0(){return this.a.QO("ceiling")},
$S:0}
A.e0x.prototype={
$0(){return this.a.QO("doors")},
$S:0}
A.e0y.prototype={
$0(){return C.a6(this.a,!1).c6(C.e7(new A.e0k(),!1,null,x.H))},
$S:0}
A.e0k.prototype={
$1(d){return B.aDI},
$S:z+37}
A.e0z.prototype={
$0(){var w=this.a
return w.m(new A.e0j(w))},
$S:0}
A.e0j.prototype={
$0(){var w=this.a.d
w===$&&C.c()
return w.c=!w.c},
$S:0}
A.e1q.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m=null,l=C.aI(d,m,x.l).w,k=this.a,j=k.d
j===$&&C.c()
w=x.p
j=C.a([B.ffC,D.at,C.d("Wiring "+j.gcT_()+"/"+k.d.gqo().length+" \xb7 Plumbing "+k.d.gcPQ()+"/"+k.d.gcPP(),m,m,m,m,m,m,B.IB,m,m,m),D.S],w)
for(v=k.d.gqo(),u=v.length,t=0;t<v.length;v.length===u||(0,C.L)(v),++t){s=v[t]
r=D.c.j(0.05)
q=new C.aW(12,12)
p=new C.aA(s.gjy()&&s.gl2()?D.b8.j(0.5):D.bF,1,D.q,-1)
if(s.gjy()&&s.gl2())o="\u2705 finished"
else{o=s.gjy()?"":"\u26a1 wiring  "
o+=s.gl2()?"":"\ud83d\udeb0 plumbing"}n=s.gjy()&&s.gl2()?D.es:D.ad
j.push(C.aE(m,C.p(m,new C.cm(D.aO,D.e,D.j,D.m,m,D.p,m,0,C.a([new C.bD(1,D.bi,new C.x(s.b,m,B.f54,m,m,m,m,m,m,m,m,m),m),new C.x(o,m,new C.G(!0,n,m,m,m,m,12,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m,m,m,m,m,m,m,m,m)],w),m),D.f,m,m,new C.o(r,m,new C.bP(p,p,p,p),new C.bq(q,q,q,q),m,m,D.n),m,m,m,D.eO,D.bS,m,m,m),D.y,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new A.e1n(k,d,s),m,m,m,m,m,m,!1,D.a8))}j.push(D.P)
j.push(C.dV(B.fcM,new A.e1o(k,d),m))
j.push(D.P)
j.push(C.bJ(B.f9a,new A.e1p(k,d),m))
return C.bm(!0,new C.cU(new C.aY(0,1/0,0,l.a.b*0.75),C.cB(j,m,D.bW,m,m,D.ah,!0),m),!0,!1,D.af,!0,!0)},
$S:28}
A.e1n.prototype={
$0(){C.a6(this.b,!1).O(null)
this.a.OS(this.c.a)},
$S:0}
A.e1o.prototype={
$0(){C.a6(this.b,!1).O(null)
var w=this.a
w.m(new A.e1m(w))
w.ka("Every room needs its wiring and plumbing again. Wire the whole house from the start.")},
$S:0}
A.e1m.prototype={
$0(){var w=this.a,v=w.d
v===$&&C.c()
v.cMw()
w.k9()},
$S:0}
A.e1p.prototype={
$0(){C.a6(this.b,!1).O(null)
$.Hf=A.bPz(D.o.F(Date.now(),1e5))
var w=this.a
w.m(new A.e1l(w))
w.avv(!0)},
$S:0}
A.e1l.prototype={
$0(){var w=this.a,v=$.Hf
v.toString
w.d=v
w.r="look"
w.Q=0
w.as=-1
w.at=0
w.k9()},
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
A.flV.prototype={
$2(d,e){return this.a===d?e:0},
$S:704}
A.flK.prototype={
$1(d){return d.a==="right"},
$S:z+14}
A.flT.prototype={
$1(d){var w=this,v=w.a,u=v.a
A:{if("left"===u){v=A.tR(d,0,1.5707963267948966,new A.E(-w.b/2,0,v.b+w.c/2-40))
break A}if("right"===u){v=A.tR(d,0,-1.5707963267948966,new A.E(w.b/2,0,v.b+w.c/2-40))
break A}v=A.tR(d,0,0,new A.E(v.b,0,0))
break A}return v},
$S:z+38}
A.flL.prototype={
$1(d){return d.a==="back"},
$S:z+14}
A.flM.prototype={
$1(d){return d.b},
$S:z+39}
A.flN.prototype={
$2(d,e){return e},
$S:88}
A.flO.prototype={
$3(d,e,f){return G.aOQ(d,e,0,f+this.a)},
$S:311}
A.flQ.prototype={
$2(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=this
if(a2==null)return
w=A.bzt(a2)
v=a1.a
u=A.hjg(v,w)
t=u.a
s=u.b
r=u.d
q=t-2.5
p=s-2.5
o=a1.b
n=o.b=730+a3
o.e=5
if(v.c==="hall"){m=a3===1
l=a1.c
k=m?-l/2:l/2
j=m?1:-1
i=u.c
o.bG(new A.E(k+j*1.4,r,i),new A.E(2.6,s+3,t+3),B.Kh,0.5)
o.bG(new A.E(k+j*2.8,r,i),new A.E(0.2,s,t),I.mU,0.7)
if(v.fy){h=k+j*2.95
l=q/2
g=m?i+l:i-l
f=m?i-l:i+l
l=p/2
e=r+l
l=r-l
a1.d.push(new A.WK(C.a([new A.E(h,e,g),new A.E(h,e,f),new A.E(h,l,f),new A.E(h,l,g)],x.o),n,new A.flR(v,a3),320*p/q,9,1))}}else{k=u.c
o.bG(new A.E(k,r,1.4),new A.E(t+3,s+3,2.6),B.Kh,0.5)
o.bG(new A.E(k,r,2.8),new A.E(t,s,0.2),I.mU,0.7)
if(v.fy){l=q/2
e=k-l
d=p/2
a0=r+d
l=k+l
d=r-d
a1.d.push(new A.WK(C.a([new A.E(e,a0,2.95),new A.E(l,a0,2.95),new A.E(l,d,2.95),new A.E(e,d,2.95)],x.o),n,new A.flS(v),320*p/q,9,1))}}o.e=0
v=v.fy?"It is on and playing "+E.jZ[v.go].a+". Tap it to watch full screen with the remote.":"The TV is off. Tap it to turn it on."
a1.e.n(0,n,new A.d0(w.b,v,new A.E(0,r,4),110))},
$S:1799}
A.flR.prototype={
$3(d,e,f){var w=this.a
return G.aOQ(d,e,w.go,f+w.a+this.b*3)},
$S:311}
A.flS.prototype={
$3(d,e,f){var w=this.a
return G.aOQ(d,e,w.go,f+w.a)},
$S:311}
A.flU.prototype={
$2(d,e){var w=this.a,v=w.f,u=w.r
w.f=1
w.r=!1
w.b=0
w.e5(new A.E(d,e,0),new A.E(d,e,2.2),0.7,B.K7,0.7,10)
w.f=v
w.r=u},
$S:381}
A.flP.prototype={
$1(d){return d.b===this.a.a},
$S:z+19}
A.ffR.prototype={
$2(d,e){return this.a===d?e:0},
$S:704}
A.ffS.prototype={
$5(d,e,f,g,h){var w=d.ad(0,e.aF(0,g)).ad(0,new A.E(0,h,0)),v=this.a
A.ni(v,w.ad(0,f.aF(0,0.1)),e,B.fP,26,30,B.m8,f,0)
A.ni(v,w.ad(0,f.aF(0,0.2)),e,B.fP,22,26,B.pv,f,0.6)
A.ni(v,w.ad(0,f.aF(0,0.3)),e,B.fP,22,1.2,B.m8,f,0)
A.ni(v,w.ad(0,f.aF(0,0.3)),e,B.fP,1.2,26,B.m8,f,0)},
$S:z+41}
A.ffQ.prototype={
$5(d,e,f,g,h){var w=d.ad(0,e.aF(0,g)),v=this.a,u=v.b
A.ni(v,w.ad(0,new A.E(0,42,0)).ad(0,f.aF(0,0.1)),e,B.fP,34,84,B.m8,f,0)
v.b=h
A.ni(v,w.ad(0,new A.E(0,41,0)).ad(0,f.aF(0,0.2)),e,B.fP,28,80,B.wK,f,0.2)
v.b=0
A.ni(v,w.ad(0,new A.E(0,58,0)).ad(0,f.aF(0,0.3)),e,B.fP,20,26,B.L_,f,0)
A.ni(v,w.ad(0,new A.E(0,22,0)).ad(0,f.aF(0,0.3)),e,B.fP,20,26,B.L_,f,0)
v.bG(w.ad(0,e.aF(0,9)).ad(0,new A.E(0,40,0)).ad(0,f.aF(0,1)),new A.E(2.6,2.6,2.6),B.DT,0.8)
v.b=u},
$S:z+42}
A.foz.prototype={
$1(d){return D.d.t(B.a1C,d.b)},
$S:z+43}
A.foA.prototype={
$1(d){return d.b===this.a.a},
$S:z+19}
A.foB.prototype={
$1(d){return d.b===this.a.a},
$S:z+19}
A.f6G.prototype={
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
D.d.v(s,A.tR(m,r*k*j,0,new A.E(n,e,o.b)));++q}},
$S:1800}
A.fgp.prototype={
$3(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k=x.z,j=C.a([],k),i=new A.jf(j)
i.b=this.a
i.r=!0
d.$1(i)
k=C.a([],k)
for(j=A.he_(j,e,B.fO),w=j.length,v=f.a,u=f.b,t=f.c,s=x.o,r=0;r<j.length;j.length===w||(0,C.L)(j),++r){q=j[r]
p=C.a([],s)
for(o=q.a,n=o.length,m=0;m<o.length;o.length===n||(0,C.L)(o),++m){l=o[m]
p.push(new A.E(l.a+v,l.b+u,l.c+t))}k.push(new A.nd(p,q.b,q.c,q.d,q.e,q.f,q.r,q.w,q.x,q.y,q.z))}D.d.v(this.b.a,k)},
$S:z+44}
A.fgb.prototype={
$5(d,e,f,g,h){var w=this.a
w.baF(d,e,f,h,!1,g,10)
w.io(e,g*1.04,h,4,8)},
$S:z+45}
A.fgc.prototype={
$1(d){return d.iQ(B.fO,2.6,B.Wj,4,8,0.15)},
$S:z+1}
A.fgd.prototype={
$1(d){return d.io(B.fO,2.6,D.bR,3,8)},
$S:z+1}
A.fge.prototype={
$1(d){return d.io(B.fO,5.2,this.a,4,10)},
$S:z+1}
A.fgh.prototype={
$1(d){return d.baF(B.fO,B.a7O,4.9,this.a,!1,6.5,12)},
$S:z+1}
A.fgi.prototype={
$1(d){return d.baE(B.fO,B.fCm,5.1,B.b8n,!1,12)},
$S:z+1}
A.fgj.prototype={
$1(d){return d.io(B.fO,6.7,this.a,4,10)},
$S:z+1}
A.fgk.prototype={
$1(d){return d.io(B.fO,4.7,this.a,6,12)},
$S:z+1}
A.fgl.prototype={
$1(d){return d.io(B.fO,3,this.a,4,8)},
$S:z+1}
A.fgm.prototype={
$1(d){return d.io(B.fO,5,this.a,5,10)},
$S:z+1}
A.fgn.prototype={
$1(d){return d.io(B.fO,3.6,this.a,3,8)},
$S:z+1}
A.fgo.prototype={
$1(d){return d.io(B.fO,1,D.c,3,6)},
$S:z+1}
A.fgf.prototype={
$1(d){return d.io(B.fO,1,this.a,3,6)},
$S:z+1}
A.fgg.prototype={
$1(d){return d.io(B.fO,1.9,this.a,4,8)},
$S:z+1}
A.fm_.prototype={
$4$alongX(d,e,f,g){var w,v,u,t,s,r,q,p,o,n
for(w=this.a,v=0;v<=f;++v){u=A.zG(d,e,v/f)
w.aBA(new A.E(u.a,4,u.c),B.fHA,B.W7,!1,0.05)}t=A.zG(d,e,0.5)
for(s=e.aC(0,d).gTb()+0.15,r=t.a,q=t.c,p=0;p<2;++p){o=B.d0B[p]
n=g?new A.E(s,0.16,0.3):new A.E(0.3,0.16,s)
w.bG(new A.E(r,o,q),n,B.W7,0.05)}},
$3(d,e,f){return this.$4$alongX(d,e,f,!0)},
$S:z+47}
A.flX.prototype={
$2(d,e){return this.a.jT(A.Ge(d,0.35,3),0.06,e,!1,0.4,6)},
$S:z+72}
A.flW.prototype={
$1(d){return this.a.jT(A.Ge(d,0.5,3),0.14,B.pk,!1,0.3,8)},
$S:z+49}
A.flZ.prototype={
$2$col(d,e){return this.a.jT(A.Ge(d,0.4,3),0.055,e,!1,0.35,6)},
$1(d){return this.$2$col(d,B.Wf)},
$S:z+50}
A.flY.prototype={
$5$h$w(d,e,f,g,h){var w=this.a
w.b=d
w.bG(e,new A.E(h,g,0.06),f,0.3)},
$3(d,e,f){return this.$5$h$w(d,e,f,0.7,0.45)},
$S:z+51}
A.fmU.prototype={
$0(){return A.m7(1320,120,0.25,"tri")},
$S:0}
A.dKu.prototype={
$1(d){return this.a},
$S:40}
A.dKx.prototype={
$0(){return C.a6(this.a,!1).lL()},
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
return w.xn(A.aZg("","",w.d))},
$S:0}
A.dKD.prototype={
$0(){return this.a.xn(B.aDH)},
$S:0}
A.dKE.prototype={
$0(){var w=this.a
return w.xn(A.aZg("wiring","",w.d))},
$S:0}
A.dKF.prototype={
$0(){var w=this.a
return w.xn(A.aZg("plumbing","",w.d))},
$S:0}
A.dKG.prototype={
$0(){var w=this.a
return w.xn(A.aZg("fix","",w.d))},
$S:0}
A.dKH.prototype={
$0(){var w=this.a
return w.xn(A.fPs(w.d,null,!1))},
$S:0}
A.dKI.prototype={
$0(){var w=this.a
return w.xn(A.fPs(w.d,null,!0))},
$S:0}
A.dKJ.prototype={
$0(){var w=this.a
return w.xn(new A.aq_(w.d,null))},
$S:0}
A.dKA.prototype={
$0(){var w=this.b.a
w=w==="house"?B.fL7:A.aZg("",w,!1)
return this.a.xn(w)},
$S:0}
A.dKB.prototype={
$0(){return this.a.xn(B.aDI)},
$S:0}
A.cpA.prototype={
$0(){return this.a.d.anu(0.8)},
$S:0}
A.cpB.prototype={
$0(){return this.a.d.anu(1.25)},
$S:0}
A.fDb.prototype={
$1(d){var w,v,u,t,s,r,q,p,o=null,n=C.aI(d,o,x.l).w,m=this.b,l=this.c,k=l.length,j=x.p,i=C.a([C.d(this.a,o,o,o,o,o,o,D.du,o,o,o),D.at,C.d(""+new C.a2(m,new A.fDa(),C.U(m).k("a2<1>")).gM(0)+" of "+k+" steps done",o,o,o,o,o,o,B.IB,o,o,o),D.S],j)
for(w=0;w<k;++w){v=D.c.j(0.05)
u=new C.aW(14,14)
t=new C.aA(m[w]?D.b8.j(0.6):D.bF,1,D.q,-1)
s=m[w]
r=s?"\u2705":""+(w+1)+"."
q=s?D.c:D.aH
p=l[w]
s=s?D.az:D.c
i.push(C.p(o,new C.cm(D.aO,D.e,D.j,D.F,o,D.p,o,0,C.a([new C.x(r,o,new C.G(!0,q,o,o,o,o,14,D.u,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o),o,o,o,o,o,o,o,o,o),D.av,new C.bD(1,D.bi,new C.x(p,o,new C.G(!0,s,o,o,o,o,13,o,o,o,o,o,1.4,o,o,o,o,o,o,o,o,o,o,o,o,o),o,o,o,o,o,o,o,o,o),o)],j),o),D.f,o,o,new C.o(v,o,new C.bP(t,t,t,t),new C.bq(u,u,u,u),o,o,D.n),o,o,o,D.cH,D.bk,o,o,o))}return C.bm(!0,new C.cU(new C.aY(0,1/0,0,n.a.b*0.75),C.cB(i,o,D.bW,o,o,D.ah,!0),o),!0,!1,D.af,!0,!0)},
$S:28}
A.fDa.prototype={
$1(d){return d},
$S:142}
A.bRO.prototype={
$0(){return C.a6(this.a,!1).lL()},
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
$S:409}
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
$0(){var w=this.a.gFG()
return A.fD9(this.b,w.b,w.d,this.c)},
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
$0(){var w=this.a,v=w.gkS()
return v.lU(10,0.2,new A.E(0.6,0,w.geS(0).c===0?4.2:0.4),-0.95)},
$S:0}
A.d2u.prototype={
$0(){var w=this.a,v=w.gkS()
return v.lU(10,0.2,new A.E(-0.6,0,w.geS(0).c===0?4.2:0.4),0.95)},
$S:0}
A.d2v.prototype={
$1(d){return!this.a.geS(0).b.iR(0,d.a)},
$S:z+12}
A.d2w.prototype={
$0(){var w=this.a,v=this.b,u=v.a
if(w.geS(0).b.iR(0,u)){w.oX("That wire is already fastened. Tap the wire in the 3D view to take it off if you want to move it.")
return}w.m(new A.d2m(w,v))
if(w.w.length!==0){if(u==="ground")w.gkS().lU(8,0.55,B.fEh,0.15)
else if(u==="white")w.gkS().lU(8.5,0.2,B.fGC,0.95)
else w.gkS().lU(8.5,0.2,B.fzI,-0.95)
w.kw(v.b+": now tap the screw it belongs on.",!0)}},
$S:0}
A.d2m.prototype={
$0(){var w=this.a,v=this.b.a
return w.w=w.w===v?"":v},
$S:0}
A.d2x.prototype={
$0(){var w=this.a
w.m(new A.d2l(w))
A.y7()
w.kw("The wires are folded back and the device is pushed into the box. Now put the cover plate on.",!0)
w.nV()},
$S:0}
A.d2l.prototype={
$0(){var w=this.a
w.geS(0).c=1
w.xo()},
$S:0}
A.d2y.prototype={
$0(){var w=this.a
w.m(new A.d2k(w))
w.nV()},
$S:0}
A.d2k.prototype={
$0(){var w=this.a
w.geS(0).c=0
w.xo()},
$S:0}
A.d2z.prototype={
$0(){var w=this.a
w.m(new A.d2j(w))
A.y7()
w.kw("Cover plate on. Now turn the power on and test.",!0)},
$S:0}
A.d2j.prototype={
$0(){var w=this.a
w.geS(0).c=2
w.xo()},
$S:0}
A.d2A.prototype={
$0(){var w=this.a
w.m(new A.d2i(w))
w.nV()},
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
A.eLW.prototype={
$0(){var w=this.a
w.x=this.b
w.y=this.c},
$S:0}
A.eLX.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new A.eLV(w))},
$S:0}
A.eLV.prototype={
$0(){return this.a.x=null},
$S:0}
A.eLP.prototype={
$0(){return this.a.w=0},
$S:0}
A.eLQ.prototype={
$0(){var w=this.a,v=w.geS(0)
v.a.L(0,this.b)
v.c=!1
v.d=""
w.f=A.bzy(v)
w.r=""},
$S:0}
A.eLR.prototype={
$0(){var w=this.a,v=w.geS(0)
v.b.n(0,this.b,!0)
v.d=""
w.f=A.bzy(v)},
$S:0}
A.eLS.prototype={
$0(){return this.a.w=this.b},
$S:0}
A.eLT.prototype={
$1(d){return this.a.geS(0).b.h(0,d)!==!0},
$S:3}
A.eLU.prototype={
$0(){var w,v=this.a,u=v.geS(0)
u.c=!0
w=this.b
u.d=w.length===0?"":D.d.gK(w)
v.f=A.bzy(u)},
$S:0}
A.eM0.prototype={
$1(d){return!d},
$S:142}
A.eM4.prototype={
$0(){return A.fD9(this.a,"Sink drain (P-trap)",B.d35,this.b)},
$S:0}
A.eM1.prototype={
$1(d){return A.i2C(this.a.geS(0),d)},
$S:z+8}
A.eM2.prototype={
$0(){var w=this.a
return w.m(new A.eM_(w,this.b))},
$S:0}
A.eM_.prototype={
$0(){var w=this.a,v=this.b
return w.r=w.r===v?"":v},
$S:0}
A.eM3.prototype={
$0(){var w=this.a
w.m(new A.eLZ(w))
w.nV()},
$S:0}
A.eLZ.prototype={
$0(){var w,v=this.a,u=v.geS(0)
u.a.a9(0)
w=u.b
w.aHb(w,new A.eLY())
u.c=!1
v.r=u.d=""
v.w=0
v.f=A.bzy(u)},
$S:0}
A.eLY.prototype={
$2(d,e){return!1},
$S:1802}
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
w.f=A.aNs(v)
w.w=this.b},
$S:0}
A.d57.prototype={
$0(){var w=this.a,v=w.geS(0),u=v.e
u.bm(u,new A.d54(this.b))
v.f=!1
w.f=A.aNs(v)},
$S:0}
A.d54.prototype={
$2(d,e){return e===this.a},
$S:409}
A.d58.prototype={
$0(){return this.a.w=this.b},
$S:0}
A.d53.prototype={
$0(){var w=this.a,v=w.geS(0)
v.f=!v.f
w.f=A.aNs(v)},
$S:0}
A.d5f.prototype={
$1(d){return!d},
$S:142}
A.d5l.prototype={
$0(){return A.fD9(this.a,"Faucet supply lines",B.dem,this.b)},
$S:0}
A.d5g.prototype={
$1(d){return A.hUz(this.a.geS(0),d)},
$S:z+8}
A.d5h.prototype={
$0(){var w=this.a
return w.m(new A.d5e(w))},
$S:0}
A.d5e.prototype={
$0(){var w=this.a,v=w.geS(0)
v.r=!v.r
w.f=A.aNs(v)},
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
w.nV()},
$S:0}
A.d5c.prototype={
$0(){var w=this.a,v=w.geS(0)
v.e.a9(0)
v.f=!1
w.r=""
w.w=0
w.f=A.aNs(v)},
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
w.f=A.afi(v)
w.r=this.b},
$S:0}
A.dcc.prototype={
$0(){var w=this.a,v=w.d
v.c=!0
v.b=!1
w.f=A.afi(v)
w.r=this.b},
$S:0}
A.dcd.prototype={
$0(){return this.a.r=this.b},
$S:0}
A.dca.prototype={
$1(d){return this.a},
$S:40}
A.dco.prototype={
$0(){return A.fD9(this.a,"Fix the house",B.cej,this.b)},
$S:0}
A.dcj.prototype={
$0(){return this.a.caQ(this.b)},
$S:0}
A.dcl.prototype={
$1(d){return d<=this.a.d.a},
$S:33}
A.dck.prototype={
$1(d){return A.hf8(this.a.d,d)},
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
w.f=A.afi(v)},
$S:0}
A.c5t.prototype={
$0(){return C.a6(this.a,!1).lL()},
$S:0}
A.fmA.prototype={
$5(d,e,f,g,h){var w=this.a.a.t(0,h),v=this.b
v.b=d
if(w)v.a5A(e,0.66,f,!1,!0,!0,g,14)
else{v.d=0.3
v.aH9(e,0.74,D.b1,!1,!0,0,8)
v.d=1}},
$S:z+53}
A.fmz.prototype={
$6(d,e,f,g,h,i){var w,v
if(!i)return
w=this.a.b.h(0,e)
v=w===!0?f:f.ad(0,h)
w=this.b
w.e=0.5
w.b=d
w.e5(v.aC(0,g.aF(0,0.6)),v.ad(0,g.aF(0,0.6)),1.12,B.pk,0.35,8)
w.yV(v.aC(0,g.aF(0,0.62)),v.aC(0,g.aF(0,0.5)),1.2,0.5,B.Vv,0.2,8)
w.b=0
w.yV(f.aC(0,g.aF(0,0.05)),f.ad(0,g.aF(0,0.08)),0.82,0.55,B.bgh,0.1,12)
w.e=0},
$S:z+54}
A.fmy.prototype={
$1(d){return d.b<-0.6},
$S:z+20}
A.flJ.prototype={
$1(d){return this.a.e.h(0,d)===this.b},
$S:33}
A.fo1.prototype={
$2(d,e){var w,v,u,t,s,r,q,p=A.afv(d)
for(w=this.a*1.6,v=this.b,u=p.a,t=p.b,s=p.c,r=0;r<7;++r){q=D.k.F(w+r/7,1)
v.iQ(new A.E(u+Math.sin(r*2.1)*q*1.4,t+(q*2.4-q*q*6.5),s+(1+q*2.5)),0.2,e,3,6,0.9)}},
$S:1803}
A.fo0.prototype={
$1(d){return this.a.e.h(0,d.a)!=null},
$S:z+24}
A.cga.prototype={
$1(d){return d.a===this.a},
$S:z+55}
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
return w.e.t(0,v)&&w.bef(v)>0},
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
return w.bef(v)<=0||!w.e.t(0,v)},
$S:z+2}
A.fmx.prototype={
$1(d){var w=this.a
w.b=0
w.e5(new A.E(d,8,0),new A.E(d,8,1.6),0.5,B.K7,0.7,10)},
$S:6}
A.fmv.prototype={
$1(d){var w,v,u,t,s,r,q=C.a([],x.o)
for(w=d.length,v=this.a,u=v.a,t=v.b,v=v.c,s=0;s<d.length;d.length===w||(0,C.L)(d),++s){r=d[s]
q.push(new A.E(r.a+u,r.b+t,r.c+v))}return q},
$S:z+58}
A.fmp.prototype={
$3$r(d,e,f){var w=this.a,v=this.b.c
v===$&&C.c()
w.b=9100+D.d.ba(v.c,new A.fms(d))
w.d=0.32
w.aH9(e,f,D.b1,!1,!0,0,8)
w.d=1},
$2(d,e){return this.$3$r(d,e,1.2)},
$S:z+59}
A.fms.prototype={
$1(d){return d.a===this.a},
$S:z+2}
A.fmq.prototype={
$3(d,e,f){var w=this.a,v=this.b.c
v===$&&C.c()
w.b=9100+D.d.ba(v.c,new A.fmr(d))
w.d=0.32
w.bO(e,f,D.b1)
w.d=1},
$S:z+60}
A.fmr.prototype={
$1(d){return d.a===this.a},
$S:z+2}
A.fmw.prototype={
$3(d,e,f){var w,v,u,t=this,s=t.a,r=s.c
r===$&&C.c()
w=D.d.cJ(r.c,d)
r=d.c
v=s.e
u=d.a
if(v.t(0,u))s="Fitted."
else{s=s.b?"":d.e
s="A spot for the "+r.toLowerCase()+". "+s}t.b.n(0,9100+w,new A.d0(r,s,e,26))
if(t.c&&!v.t(0,u)&&t.d.length!==0)t.e.push(new A.t1(e.ad(0,B.fy3),f,D.fi))},
$S:z+61}
A.fmm.prototype={
$0(){return this.a.$3(this.b.a,new A.E(this.c-10,9,2.4),B.a7Q)},
$S:0}
A.fmn.prototype={
$0(){return this.a.$3(this.b.a,new A.E(this.c-8,9,2.4),B.a7Q)},
$S:0}
A.fmo.prototype={
$0(){return this.a.$3(this.b.a,new A.E(this.c+8,9,2.4),B.a7Q)},
$S:0}
A.fmt.prototype={
$4(d,e,f,g){var w,v,u,t,s=this
if(D.d.ba(s.a,new A.fmu(d))<0||!s.b.e.t(0,d))return
w=s.b.f.h(0,d)
v=(w==null?0:w)>=1
w=s.c
u=9260+g
w.b=u
t=v?e:e.ad(0,f.aF(0,1.7))
w.e5(t.aC(0,f.aF(0,0.6)),t.ad(0,f.aF(0,0.6)),1.12,B.pk,0.35,8)
w.yV(t.aC(0,f.aF(0,0.62)),t.aC(0,f.aF(0,0.5)),1.2,0.5,B.Vv,0.2,8)
w=v?"Tight.":"Loose. Tap it with the wrench to tighten it."
s.d.n(0,u,new A.d0("Slip nut",w,e,10))},
$S:z+62}
A.fmu.prototype={
$1(d){return d.a===this.a},
$S:z+2}
A.fCn.prototype={
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
$S:z+63}
A.fCm.prototype={
$1(d){return d.a===this.a},
$S:z+2}
A.efP.prototype={
$0(){var w=this.a
w.z=this.b
w.Q=this.c},
$S:0}
A.efQ.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new A.efO(w))},
$S:0}
A.efO.prototype={
$0(){return this.a.z=null},
$S:0}
A.efI.prototype={
$0(){return this.a.y=0},
$S:0}
A.efR.prototype={
$1(d){return d.a===this.a},
$S:z+2}
A.efA.prototype={
$0(){return this.a.y=this.b},
$S:0}
A.efB.prototype={
$0(){var w=this.a
w.acH()
w.y=this.b},
$S:0}
A.efC.prototype={
$1(d){return this.a.c36()},
$S:8}
A.efH.prototype={
$1(d){var w,v=null,u=this.a,t=u.e
t===$&&C.c()
w=t.c
w===$&&C.c()
t=C.d("The "+w.b.toLowerCase()+" is finished and nothing leaks.\n\nMistakes: "+t.w+"\n\nThe next job is different.",v,v,v,v,v,v,B.a6P,v,v,v)
return C.ej(C.a([C.bK(!1,B.aQ6,v,v,!0,v,v,new A.efF(d),v,v),C.bJ(B.ffN,new A.efG(u,d),v)],x.p),v,v,E.mX,t,v,v,v,v,B.fhp,v)},
$S:19}
A.efF.prototype={
$0(){C.a6(this.a,!1).O(null)
return null},
$S:0}
A.efG.prototype={
$0(){C.a6(this.b,!1).O(null)
this.a.aW6()},
$S:0}
A.efN.prototype={
$0(){var w,v,u=this.a
u.d=D.o.F(Date.now(),1e5)
w=u.gCk(0)
v=u.e
v===$&&C.c()
u.e=A.fQ9(v.b,w,null)
u.x=""
u.as=!1
u.z=null
u.y=0
u.acH()},
$S:0}
A.efE.prototype={
$0(){var w=this.a
return w.m(new A.efD(w,this.b,this.c))},
$S:0}
A.efD.prototype={
$0(){var w=this.a
w.x=this.b?"":this.c
w.acH()},
$S:0}
A.efS.prototype={
$1(d){var w=this.a.e
w===$&&C.c()
return w.e.t(0,d.a)},
$S:z+2}
A.efW.prototype={
$0(){return this.a.bYs(this.b)},
$S:0}
A.efU.prototype={
$1(d){return d<=5},
$S:33}
A.efT.prototype={
$1(d){var w=this.a,v=w.e
v===$&&C.c()
return A.i2w(v,w.w.gu2()/1000)},
$S:z+8}
A.efV.prototype={
$0(){return this.b.csI(this.a.a)},
$S:0}
A.efM.prototype={
$1(d){var w,v,u,t,s,r,q,p=null,o=this.a,n=o.e
n===$&&C.c()
w=x.p
n=C.a([B.fsI,D.at,C.d("Mistakes "+n.w,p,p,p,p,p,p,B.IB,p,p,p),D.S],w)
v=o.e.c
v===$&&C.c()
v=v.c
u=v.length
t=0
for(;t<u;++t){s=v[t]
r=D.c.j(0.05)
q=new C.aW(12,12)
n.push(C.p(p,new C.x((o.e.e.t(0,s.a)?"\u2705":"\ud83d\udd27")+" "+s.c,p,B.eSZ,p,p,p,p,p,p,p,p,p),D.f,p,p,new C.o(r,p,p,new C.bq(q,q,q,q),p,p,D.n),p,p,p,D.eO,D.bS,p,p,p))}n.push(D.an)
n.push(B.f7N)
n.push(D.P)
n.push(C.A(C.a([B.buI,C.auz(p,p,p,p,!1,D.y,p,p,p,p,p,p,new A.efK(o,d),p,p,p,p,p,p,p,p,o.e.b)],w),D.m,p,D.e,D.j,0,p,p))
n.push(C.bJ(B.aQ8,new A.efL(o,d),p))
return C.bm(!0,C.cB(n,p,D.bW,p,p,D.ah,!0),!0,!1,D.af,!0,!0)},
$S:28}
A.efK.prototype={
$1(d){var w=this.a
w.m(new A.efJ(w,d))
C.a6(this.b,!1).O(null)},
$S:9}
A.efJ.prototype={
$0(){var w=this.a,v=w.e
v===$&&C.c()
v.b=this.b
w.acH()},
$S:0}
A.efL.prototype={
$0(){C.a6(this.b,!1).O(null)
this.a.aW6()},
$S:0}
A.fKD.prototype={
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
return w.x.ah(0,d)&&w.z.t(0,d)},
$S:33}
A.cld.prototype={
$1(d){var w=$.Gl()[this.b],v=!1
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
return D.d.d9(v,new A.clf(this.a,d))},
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
$1(d){var w=this.a.aoc(A.l0(d).d.a)
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
$S:409}
A.cl8.prototype={
$1(d){return d.c===this.a},
$S:z+4}
A.ekb.prototype={
$0(){var w=this.a
w.ax=this.b
w.ay=this.c},
$S:0}
A.ekc.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new A.eka(w))},
$S:0}
A.eka.prototype={
$0(){return this.a.ax=null},
$S:0}
A.ejq.prototype={
$0(){return this.a.CW=!0},
$S:0}
A.ejr.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new A.ejp(w))},
$S:11}
A.ejp.prototype={
$0(){return this.a.CW=!1},
$S:0}
A.ejs.prototype={
$1(d){return this.a.bM8()},
$S:8}
A.ejt.prototype={
$1(d){return this.a.c3b()},
$S:8}
A.ejB.prototype={
$0(){return this.a.Q=-1},
$S:0}
A.eju.prototype={
$0(){return this.a.Q=-1},
$S:0}
A.ejT.prototype={
$0(){var w=this.a
w.Q=this.b
w.z=w.at=""
w.ch=!1},
$S:0}
A.ejC.prototype={
$0(){var w=this.a
w.Q=-1
w.at=""},
$S:0}
A.ek7.prototype={
$0(){return this.a.as=0},
$S:0}
A.ek8.prototype={
$0(){return this.a.z=""},
$S:0}
A.ek9.prototype={
$0(){return this.a.as=this.b},
$S:0}
A.ek5.prototype={
$0(){return this.a.z=""},
$S:0}
A.ek6.prototype={
$0(){return this.a.as=2000+this.b},
$S:0}
A.ek4.prototype={
$0(){return this.a.z=""},
$S:0}
A.ek0.prototype={
$1(d){return d.a===this.a},
$S:z+11}
A.ek1.prototype={
$0(){return this.a.as=5000+this.b*100+this.c},
$S:0}
A.ek2.prototype={
$0(){var w=this.a
w.at=""
w.as=0},
$S:0}
A.ek3.prototype={
$0(){return this.a.as=5000+this.b*100+this.c},
$S:0}
A.ekd.prototype={
$0(){var w=this.b,v=D.d.t(B.GU,w.z),u=this.a.a
if(v)w.b_s(u)
else w.b_u(u)},
$S:0}
A.ejA.prototype={
$1(d){var w=null
return C.ej(C.a([C.bK(!1,B.fjk,w,w,!0,w,w,new A.ejy(d),w,w),C.bJ(D.IP,new A.ejz(this.a,d),w)],x.p),w,w,E.mX,B.f8U,w,w,w,w,B.fgc,w)},
$S:19}
A.ejy.prototype={
$0(){C.a6(this.a,!1).O(null)
return null},
$S:0}
A.ejz.prototype={
$0(){C.a6(this.b,!1).O(null)
this.a.avA(!0)},
$S:0}
A.ejx.prototype={
$1(d){var w,v=null,u=this.a,t=u.d
t===$&&C.c()
w=t.c
w===$&&C.c()
t=C.d("The "+w.toLowerCase()+" is built, wired, painted and tested.\n\nMistakes: "+t.f+"\nShocks: "+t.r+"\nLives left: "+t.e+"\n\nEvery job is a little different. Ready for another one?",v,v,v,v,v,v,B.a6P,v,v,v)
return C.ej(C.a([C.bK(!1,B.fty,v,v,!0,v,v,new A.ejv(d),v,v),C.bJ(B.fg5,new A.ejw(u,d),v)],x.p),v,v,E.mX,t,v,v,v,v,B.fnL,v)},
$S:19}
A.ejv.prototype={
$0(){C.a6(this.a,!1).O(null)
return null},
$S:0}
A.ejw.prototype={
$0(){C.a6(this.b,!1).O(null)
this.a.aXb()},
$S:0}
A.ejD.prototype={
$0(){var w,v,u
if(!this.b)this.a.e=D.o.F(Date.now(),1e5)
w=this.a
v=w.gCk(0)
u=w.d
u===$&&C.c()
w.d=A.fQz(null,null,u.b,v)
w.y=0
w.z=""
w.Q=-1
w.at=""
w.as=0
w.cx=!1
w.x.a9(0)
w.ax=null
w.r=A.Co(w.d,new A.vR(w.z,w.Q,!1))},
$S:0}
A.ejR.prototype={
$1(d){return new C.K(d,new A.ejS(),d.$ti.k("K<ak.E,n>")).aI(0,", ")},
$S:1804}
A.ejS.prototype={
$1(d){return A.l0(d).b},
$S:73}
A.ejE.prototype={
$1(d){var w=this.a.d
w===$&&C.c()
return!w.x.ah(0,d.a)},
$S:z+4}
A.ejF.prototype={
$1(d){var w=this.a.d
w===$&&C.c()
return!w.z.t(0,d.a)},
$S:z+4}
A.ejG.prototype={
$1(d){var w=this.a.d
w===$&&C.c()
return!w.y.t(0,d)},
$S:33}
A.ejJ.prototype={
$1(d){return!d.a},
$S:z+6}
A.ejK.prototype={
$1(d){return d.b<3},
$S:z+6}
A.ejL.prototype={
$1(d){return!d.c},
$S:z+6}
A.ejM.prototype={
$1(d){return!d.d},
$S:z+6}
A.ejN.prototype={
$1(d){return!d.c},
$S:z+6}
A.ejO.prototype={
$1(d){var w=this.a.d
w===$&&C.c()
w=w.at.h(0,d.a)
w=w==null?null:w.a
return w!==d.b},
$S:z+4}
A.ejP.prototype={
$1(d){return d.a},
$S:z+68}
A.ejQ.prototype={
$1(d){var w=this.a.d
w===$&&C.c()
w=w.at.h(0,d.a)
w=w==null?null:w.b.c
return(w==null?0:w)<2},
$S:z+4}
A.ejH.prototype={
$1(d){var w=d.b
if(w==="outlet"||w==="gfci"){w=this.a.d
w===$&&C.c()
w=w.at.h(0,d.a)
w=(w==null?null:w.c)!==!0}else w=!1
return w},
$S:z+4}
A.ejI.prototype={
$1(d){return d.b==="fan"},
$S:z+4}
A.eku.prototype={
$0(){return this.a.cbS(this.b)},
$S:0}
A.ekw.prototype={
$0(){var w=this.a
if(w.Q>=0)w.avz()
else{w.m(new A.eki(w))
w.b1I()}},
$S:0}
A.eki.prototype={
$0(){return this.a.as=0},
$S:0}
A.ekv.prototype={
$1(d){var w=this.a,v=w.d
v===$&&C.c()
return A.i2L(v,w.w.gu2()/1000,w.x)},
$S:z+8}
A.ekl.prototype={
$0(){var w=this.a,v=w.d
v===$&&C.c()
return w.kx(v.aH2())},
$S:0}
A.ekm.prototype={
$0(){var w=this.a
return w.m(new A.ekk(w,this.b))},
$S:0}
A.ekk.prototype={
$0(){var w,v=this.b.b
v.f=!v.f
v=this.a
w=v.d
w===$&&C.c()
v.r=A.Co(w,new A.vR(v.z,v.Q,!1))},
$S:0}
A.ekn.prototype={
$0(){var w=this.a
return w.m(new A.ekj(w,this.b))},
$S:0}
A.ekj.prototype={
$0(){var w,v=this.b.b
v.e=!v.e
v=this.a
w=v.d
w===$&&C.c()
v.r=A.Co(w,new A.vR(v.z,v.Q,!1))},
$S:0}
A.ekx.prototype={
$0(){var w=this.a
return w.m(new A.ekh(w,this.b))},
$S:0}
A.ekh.prototype={
$0(){var w,v=this.a
v.y=this.b
v.z=""
w=v.d
w===$&&C.c()
v.r=A.Co(w,new A.vR("",v.Q,!1))},
$S:0}
A.eky.prototype={
$0(){var w=this.a
return w.m(new A.ekg(w))},
$S:0}
A.ekg.prototype={
$0(){var w=this.a,v=w.d
v===$&&C.c()
v.aDt()
w.y=2
w.z=""
w.r=A.Co(w.d,new A.vR("",w.Q,!1))
w.A6("The boxes, the cable and the walls are done. Now the wiring: pick an Outlet or a Switch from the tray, then tap its box on the wall.",!0)},
$S:0}
A.ekz.prototype={
$0(){var w=this.a
return w.m(new A.ekf(w,this.b))},
$S:0}
A.ekf.prototype={
$0(){var w,v=this.a,u=this.b.a,t=v.z===u?"":u
v.z=t
v.as=0
w=v.d
w===$&&C.c()
v.r=A.Co(w,new A.vR(t,v.Q,!1))
if(v.z.length!==0)v.cmx(u)},
$S:0}
A.ekA.prototype={
$0(){var w=this.a,v=w.d
v===$&&C.c()
return w.kx(v.cLZ())},
$S:0}
A.ekB.prototype={
$1(d){return!this.a.b.b.iR(0,d.a)},
$S:z+12}
A.ekC.prototype={
$0(){var w=this.a
return w.m(new A.eke(w,this.b,this.c))},
$S:0}
A.eke.prototype={
$0(){var w,v=this,u=v.c,t=u.a
if(v.b.b.b.iR(0,t)){v.a.avB("That wire is already fastened. Tap the wire in the 3D view to take it off.")
return}w=v.a
if(w.at===t)t=""
w.at=t
if(t.length!==0)w.A6(u.b+": now tap the screw it belongs on, or press the matching button below.",!0)},
$S:0}
A.eko.prototype={
$1(d){return!this.a.b.b.ah(0,d.a)},
$S:z+11}
A.ekp.prototype={
$0(){var w=this.a
return w.b_r(w.Q,this.b.a)},
$S:0}
A.ekq.prototype={
$0(){var w=this.a,v=w.d
v===$&&C.c()
return w.kx(v.bfB(w.Q))},
$S:0}
A.ekr.prototype={
$0(){var w=this.a,v=w.d
v===$&&C.c()
return w.kx(v.cQ9(w.Q))},
$S:0}
A.eks.prototype={
$0(){var w=this.a,v=w.d
v===$&&C.c()
return w.kx(v.bar(w.Q))},
$S:0}
A.ekt.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&C.c()
w=u.cRa(v.Q)
v.kx(w)
if(w.a)v.avz()},
$S:0}
A.ek_.prototype={
$1(d){return new C.e0(new A.ejZ(this.a),null)},
$S:20}
A.ejZ.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=C.aI(d,l,x.l).w,j=this.a,i=j.d
i===$&&C.c()
w=i.c
w===$&&C.c()
v=x.p
i=C.a([C.d("Job: "+w,l,l,l,l,l,l,D.du,l,l,l),D.at,C.d("Mistakes "+i.f+" \xb7 Shocks "+i.r+" \xb7 Lives "+i.e,l,l,l,l,l,l,B.IB,l,l,l),D.S,B.fjT,D.an],v)
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
i.push(C.p(l,new C.x(o+" "+n+" at "+p.b+m,l,D.rz,l,l,l,l,l,l,l,l,l),D.f,l,l,new C.o(s,l,new C.bP(q,q,q,q),new C.bq(r,r,r,r),l,l,D.n),l,l,l,D.eO,D.bS,l,l,l))}i.push(D.S)
i.push(C.A(C.a([B.bvJ,C.auz(l,l,l,l,!1,D.y,l,l,l,l,l,l,new A.ejW(j,e),l,l,l,l,l,l,l,l,j.d.b)],v),D.m,l,D.e,D.j,0,l,l))
i.push(D.an)
i.push(C.A(C.a([C.D(C.dV(B.fa2,new A.ejX(j,d),l),1),D.ab,C.D(C.bJ(B.aQ8,new A.ejY(j,d),l),1)],v),D.m,l,D.e,D.j,0,l,l))
return C.bm(!0,new C.cU(new C.aY(0,1/0,0,k.a.b*0.8),C.cB(i,l,D.bW,l,l,D.ah,!0),l),!0,!1,D.af,!0,!0)},
$S:83}
A.ejW.prototype={
$1(d){var w=this.a,v=w.d
v===$&&C.c()
v.b=d
for(v=v.at,v=new C.dt(v,v.r,v.e);v.C();)v.d.b.r=d
this.b.$1(new A.ejU())
w.m(new A.ejV())},
$S:9}
A.ejU.prototype={
$0(){},
$S:0}
A.ejV.prototype={
$0(){},
$S:0}
A.ejX.prototype={
$0(){C.a6(this.b,!1).O(null)
this.a.avA(!0)},
$S:0}
A.ejY.prototype={
$0(){C.a6(this.b,!1).O(null)
this.a.aXb()},
$S:0}
A.ffU.prototype={
$1(d){var w=this.a,v=d.a
return w>v[0]&&w<v[1]},
$S:707}
A.ffV.prototype={
$1(d){var w=this.a,v=d.a
return w>v[2]&&w<v[3]},
$S:707}
A.fmB.prototype={
$1(d){return 5000+this.a.a*100+d},
$S:74}
A.fmC.prototype={
$1(d){return 3000+this.a.a},
$S:74}
A.fmD.prototype={
$1(d){return 2000+this.a.a},
$S:74}
A.fmG.prototype={
$5$col$round(d,e,f,g,h){var w=this.a
w.b=d
w.d=0.5
w.e=0.9
if(h)w.hB(e.aC(0,B.fP),e.ad(0,B.fP),f.a/2,g,14)
else w.bO(e,f,g)
w.e=0
w.d=1},
$3(d,e,f){return this.$5$col$round(d,e,f,D.b1,!1)},
$4$round(d,e,f,g){return this.$5$col$round(d,e,f,D.b1,g)},
$4$col(d,e,f,g){return this.$5$col$round(d,e,f,g,!1)},
$S:z+69}
A.fmE.prototype={
$3(d,e,f){return G.aOQ(d,e,0,f+this.a.a*5)},
$S:311}
A.fmF.prototype={
$0(){var w,v=this.a
if(v.c)w="A place in the ceiling for a "+(v.e==="fan"?"fan (needs a fan-rated box)":"light")+"."
else w="A place on the wall at "+(v.e==="switch"?"switch height, about 48 inches from the floor":"outlet height, about 16 inches from the floor")+"."
return new A.d0(v.b,w,A.a1U(v,B.a7N),26)},
$S:z+70}
A.fCH.prototype={
$1(d){return d.e==="fan"},
$S:z+26}
A.fCI.prototype={
$1(d){return d.b==="light"},
$S:z+4}
A.cor.prototype={
$1(d){return d.a===this.a&&!d.c},
$S:z+9}
A.con.prototype={
$1(d){return d.a===B.Z_},
$S:z+9}
A.cop.prototype={
$1(d){return d.c},
$S:z+9}
A.coq.prototype={
$1(d){return d.c},
$S:z+9}
A.coo.prototype={
$1(d){return B.vL.h(0,d.a).e===this.a&&!d.c},
$S:z+9}
A.elZ.prototype={
$0(){var w=this.a
w.z=this.b
w.Q=this.c},
$S:0}
A.em_.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new A.elY(w))},
$S:0}
A.elY.prototype={
$0(){return this.a.z=null},
$S:0}
A.elO.prototype={
$0(){return this.a.y=0},
$S:0}
A.elT.prototype={
$0(){return this.a.as=!0},
$S:0}
A.elU.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new A.elS(w))},
$S:11}
A.elS.prototype={
$0(){return this.a.as=!1},
$S:0}
A.elV.prototype={
$0(){var w=this.a,v=w.d
v===$&&C.c()
w.r=A.afi(v.d)
w.y=this.b},
$S:0}
A.elW.prototype={
$1(d){return this.a.cbZ()},
$S:8}
A.elX.prototype={
$1(d){return this.a.c3i()},
$S:8}
A.elR.prototype={
$1(d){var w=null
return C.ej(C.a([C.bJ(B.fhk,new A.elQ(this.a,d),w)],x.p),w,w,E.mX,B.fgs,w,w,w,w,B.fmw,w)},
$S:19}
A.elQ.prototype={
$0(){C.a6(this.b,!1).O(null)
this.a.auY()},
$S:0}
A.elN.prototype={
$1(d){var w=null,v=this.a,u=v.d
u===$&&C.c()
u=C.d("Every problem on the customer's list is fixed.\n\nMistakes: "+u.f+"\nShocks: "+u.r+"\nLives left: "+u.e+"\n\nThe next call will have different problems.",w,w,w,w,w,w,B.a6P,w,w,w)
return C.ej(C.a([C.bK(!1,B.aQ6,w,w,!0,w,w,new A.elL(d),w,w),C.bJ(B.fix,new A.elM(v,d),w)],x.p),w,w,E.mX,u,w,w,w,w,B.foR,w)},
$S:19}
A.elL.prototype={
$0(){C.a6(this.a,!1).O(null)
return null},
$S:0}
A.elM.prototype={
$0(){C.a6(this.b,!1).O(null)
this.a.auY()},
$S:0}
A.elP.prototype={
$0(){var w,v,u=this.a
u.e=D.o.F(Date.now(),1e5)
w=u.gCk(0)
v=u.d
v===$&&C.c()
w=A.h6N(v.b,w)
u.d=w
u.r=A.afi(w.d)
u.at=!1
u.z=null
u.y=0},
$S:0}
A.emb.prototype={
$0(){return this.a.cwe(this.b)},
$S:0}
A.em7.prototype={
$1(d){return d<=5},
$S:33}
A.em6.prototype={
$1(d){var w=this.a,v=w.d
v===$&&C.c()
return A.hf8(v.d,w.w.gu2()/1000)},
$S:z+8}
A.em8.prototype={
$1(d){return!d.c},
$S:z+9}
A.em9.prototype={
$1(d){return B.vL.h(0,d.a).a},
$S:z+48}
A.ema.prototype={
$0(){var w=this.a
return w.m(new A.em5(w,this.b))},
$S:0}
A.em5.prototype={
$0(){return this.a.x=this.b},
$S:0}
A.em4.prototype={
$1(d){return new C.e0(new A.em3(this.a),null)},
$S:20}
A.em3.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=this.a,j=k.d
j===$&&C.c()
w=x.p
j=C.a([B.feU,D.at,C.d("Mistakes "+j.f+" \xb7 Shocks "+j.r+" \xb7 Lives "+j.e,l,l,l,l,l,l,B.IB,l,l,l),D.S],w)
v=k.d.c
v===$&&C.c()
u=v.length
t=0
for(;t<v.length;v.length===u||(0,C.L)(v),++t){s=v[t]
r=D.c.j(0.05)
q=new C.aW(14,14)
p=new C.aA(s.c?D.b8.j(0.6):D.bF,1,D.q,-1)
o=s.c?"\u2705":"\ud83d\udd27"
n=B.vL.h(0,s.a).a
m=s.c?D.az:D.c
j.push(C.p(l,new C.x(o+" "+n,l,new C.G(!0,m,l,l,l,l,13.5,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l),l,l,l,l,l,l,l,l,l),D.f,l,l,new C.o(r,l,new C.bP(p,p,p,p),new C.bq(q,q,q,q),l,l,D.n),l,l,l,D.cH,D.bk,l,l,l))}j.push(D.an)
j.push(B.fk2)
j.push(D.P)
j.push(C.A(C.a([B.buH,C.auz(l,l,l,l,!1,D.y,l,l,l,l,l,l,new A.em1(k,e),l,l,l,l,l,l,l,l,k.d.b)],w),D.m,l,D.e,D.j,0,l,l))
j.push(C.bJ(B.fmW,new A.em2(k,d),l))
return C.bm(!0,C.cB(j,l,D.bW,l,l,D.ah,!0),!0,!1,D.af,!0,!0)},
$S:83}
A.em1.prototype={
$1(d){var w=this.a.d
w===$&&C.c()
w.b=d
this.b.$1(new A.em0())},
$S:9}
A.em0.prototype={
$0(){},
$S:0}
A.em2.prototype={
$0(){C.a6(this.b,!1).O(null)
this.a.auY()},
$S:0}
A.f9b.prototype={
$1(d){return d.c===this.a},
$S:z+14}
A.bPH.prototype={
$1(d){var w,v,u,t=this.a,s=t.fr,r=A.hjg(t,A.bzt(s==null?"tv100":s))
t=r.c
s=r.a/2
w=t-s-18
v=this.b
u=-v/2+14
if(w<u)w=t+s+18
w=D.k.D(w,u,v/2-14)
return new C.y(new C.y(w,d),Math.atan2(t-w,-d))},
$S:1806}
A.bPI.prototype={
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
$S:1807};(function aliases(){var w=A.aLB.prototype
w.buG=w.q})();(function installTearOffs(){var w=a._instance_1u,v=a._instance_2u,u=a._instance_0u,t=a.installInstanceTearOff,s=a._instance_0i
w(A.aRu.prototype,"gcLE","bdM",17)
var r
v(r=A.aCr.prototype,"gbJH","bJI",67)
u(r,"gA5","k9",0)
t(r,"gc2T",0,1,null,["$2$keepTour","$1"],["avw","OS"],28,0,0)
w(r,"gc2V","c2W",5)
u(r,"gcy0","cy1",13)
u(r,"gctB","a1p",0)
u(r,"gctc","ctd",0)
u(r,"gctA","azv",0)
u(r,"gc2U","DJ",13)
u(r,"gcbM","a_6",13)
u(r,"gcbb","ZY",13)
u(r,"gbxC","bxD",13)
u(r,"gc2Z","c3_",0)
u(r,"gcjD","cjE",0)
s(r,"gc2X","c2Y",0)
u(r=A.ayi.prototype,"gc33","xo",0)
u(r,"gIm","nV",0)
w(r,"gIn","Io",5)
u(r,"gcgJ","cgK",0)
u(r,"gcvG","cvH",0)
u(r=A.aEd.prototype,"gIm","nV",0)
w(r,"gIn","Io",5)
u(r,"gc34","c35",0)
u(r=A.ayx.prototype,"gIm","nV",0)
w(r,"gIn","Io",5)
s(r,"gc31","c32",0)
u(r=A.azq.prototype,"gIm","nV",0)
w(r,"gIn","Io",5)
u(r=A.aCW.prototype,"gc37","aX9",0)
w(r,"gc38","c39",5)
w(A.b3z.prototype,"gaod","bmj",65)
u(r=A.aD2.prototype,"gbNC","aRC",0)
u(r,"gbA8","bA9",0)
u(r,"gc3c","avz",0)
w(r,"gc3e","c3f",5)
u(r=A.aD6.prototype,"gc3j","aXd",0)
w(r,"gc3k","c3l",5)})();(function inheritance(){var w=a.mixinHard,v=a.inheritMany,u=a.inherit
v(C.aC,[A.E,A.nd,A.d0,A.t1,A.zn,A.WK,A.jf,A.bPx,A.BY,A.b9k,A.b9F,A.beG,A.dgs,A.LG,A.dm_,A.daC,A.EC,A.O2,A.Hd,A.L7,A.aRu,A.mi,A.XH,A.zM,A.a3C,A.BO,A.a43,A.hk,A.Dm,A.pv,A.b6M,A.qc,A.aTO,A.a46,A.aTT,A.bPJ,A.Fg,A.jy,A.M8,A.cgg,A.Er,A.nc,A.Wa,A.cg6,A.yr,A.pI,A.WQ,A.atU,A.aSg,A.eE,A.b3z,A.kW,A.vR,A.u2,A.Lz,A.com,A.VU,A.uy,A.O3,A.B_,A.cl0,A.Jl,A.bp7,A.bPG,A.cuL])
v(C.hT,[A.bVt,A.bVu,A.bVs,A.bVv,A.bVw,A.fKN,A.fKL,A.fKM,A.fKK,A.fKE,A.bGg,A.bGf,A.clW,A.clX,A.clS,A.clT,A.clV,A.eSh,A.eSg,A.eSd,A.eSe,A.eSf,A.eSb,A.bOi,A.bOp,A.bOl,A.bOs,A.bOq,A.bOu,A.bHk,A.bHh,A.bHi,A.bHj,A.bHo,A.bHm,A.bHn,A.bHl,A.bHq,A.dKb,A.dK6,A.dKq,A.dK9,A.dKt,A.fnD,A.fL5,A.fnJ,A.fnK,A.fnH,A.fnI,A.fnF,A.fnG,A.flH,A.flI,A.f9a,A.flw,A.fL4,A.fL1,A.bOZ,A.bPA,A.bPB,A.bPF,A.bPE,A.bPD,A.bPC,A.e2f,A.e2c,A.e2d,A.e2e,A.e1A,A.e1z,A.e1k,A.e1h,A.e27,A.e26,A.e2_,A.e1V,A.e1I,A.e1F,A.e14,A.e16,A.e17,A.e15,A.e10,A.e11,A.e28,A.e13,A.e12,A.e0i,A.e0c,A.e0d,A.e0e,A.e2a,A.e0r,A.e0q,A.e0n,A.e0k,A.e1q,A.dmp,A.flK,A.flT,A.flL,A.flM,A.flO,A.flR,A.flS,A.flP,A.ffS,A.ffQ,A.foz,A.foA,A.foB,A.f6G,A.fgp,A.fgb,A.fgc,A.fgd,A.fge,A.fgh,A.fgi,A.fgj,A.fgk,A.fgl,A.fgm,A.fgn,A.fgo,A.fgf,A.fgg,A.fm_,A.flW,A.flZ,A.flY,A.dKu,A.fDb,A.fDa,A.d27,A.d29,A.d2p,A.d2v,A.eLT,A.eM0,A.eM1,A.d55,A.d5f,A.d5g,A.d5i,A.dca,A.dcl,A.dck,A.dcn,A.fmA,A.fmz,A.fmy,A.flJ,A.fo0,A.cga,A.cgb,A.cg7,A.cgc,A.cgd,A.cge,A.cgf,A.cg8,A.cg9,A.fmx,A.fmv,A.fmp,A.fms,A.fmq,A.fmr,A.fmw,A.fmt,A.fmu,A.fCn,A.fCm,A.efR,A.efC,A.efH,A.efS,A.efU,A.efT,A.efM,A.efK,A.fKD,A.cl4,A.clb,A.clc,A.cld,A.cle,A.clg,A.clf,A.cl3,A.cl1,A.cl2,A.cl9,A.cla,A.cl5,A.cl6,A.cl7,A.cl8,A.ejs,A.ejt,A.ek0,A.ejA,A.ejx,A.ejR,A.ejS,A.ejE,A.ejF,A.ejG,A.ejJ,A.ejK,A.ejL,A.ejM,A.ejN,A.ejO,A.ejP,A.ejQ,A.ejH,A.ejI,A.ekv,A.ekB,A.eko,A.ek_,A.ejW,A.ffU,A.ffV,A.fmB,A.fmC,A.fmD,A.fmG,A.fmE,A.fCH,A.fCI,A.cor,A.con,A.cop,A.coq,A.coo,A.elW,A.elX,A.elR,A.elN,A.em7,A.em6,A.em8,A.em9,A.em4,A.em1,A.f9b,A.bPH,A.bPI])
v(C.ke,[A.bVr,A.clU,A.bOj,A.bOn,A.bOm,A.foM,A.foN,A.foO,A.foP,A.foQ,A.f7R,A.fL2,A.fL3,A.e1y,A.e25,A.e1U,A.flV,A.flN,A.flQ,A.flU,A.ffR,A.flX,A.d2a,A.eLY,A.d54,A.fo1,A.clh,A.ejZ,A.em3])
u(A.AC,C.oE)
v(C.mH,[A.b3M,A.bcJ,A.bgh])
v(C.ag,[A.atr,A.TZ,A.N4,A.MM,A.GV,A.a8s,A.a3T,A.azp,A.V9,A.Vc,A.aq_])
v(C.ah,[A.aLB,A.bhP,A.aCr,A.bhQ,A.ayi,A.aEd,A.ayx,A.azq,A.aCW,A.aD2,A.aD6])
u(A.boW,A.aLB)
v(C.j3,[A.eSc,A.bOt,A.bOo,A.bOk,A.bOr,A.dKa,A.dKn,A.dKh,A.dKi,A.dKg,A.dK7,A.dKr,A.dKp,A.dKo,A.dK5,A.dKc,A.dKd,A.dKe,A.dKf,A.dK8,A.dKk,A.dKl,A.dKm,A.dKj,A.dKs,A.flx,A.e1C,A.e1D,A.e1B,A.e1E,A.e0Z,A.e1M,A.e19,A.e1a,A.e1b,A.e1c,A.e1d,A.e18,A.e1e,A.e1u,A.e1t,A.e1v,A.e1w,A.e1x,A.e1i,A.e1g,A.e1j,A.e1f,A.e1Z,A.e1Y,A.e20,A.e21,A.e22,A.e23,A.e24,A.e1R,A.e1P,A.e1Q,A.e1S,A.e1O,A.e1T,A.e1H,A.e1J,A.e1W,A.e1N,A.e1L,A.e1G,A.e1K,A.e0h,A.e0f,A.e1_,A.e1X,A.e1r,A.e1s,A.e0g,A.e0O,A.e0P,A.e0Q,A.e0R,A.e0S,A.e0T,A.e0N,A.e0U,A.e0M,A.e0V,A.e0L,A.e0W,A.e0K,A.e0X,A.e0J,A.e0Y,A.e2b,A.e29,A.e0A,A.e0s,A.e0B,A.e0p,A.e0C,A.e0D,A.e0o,A.e0E,A.e0F,A.e0G,A.e0m,A.e0H,A.e0l,A.e0I,A.e0t,A.e0u,A.e0v,A.e0w,A.e0x,A.e0y,A.e0z,A.e0j,A.e1n,A.e1o,A.e1m,A.e1p,A.e1l,A.fmU,A.dKx,A.dKy,A.dKw,A.dKz,A.dKv,A.dKC,A.dKD,A.dKE,A.dKF,A.dKG,A.dKH,A.dKI,A.dKJ,A.dKA,A.dKB,A.cpA,A.cpB,A.bRO,A.d2f,A.d2g,A.d2e,A.d28,A.d2b,A.d2c,A.d2d,A.d2h,A.d2s,A.d2q,A.d2o,A.d2r,A.d2n,A.d2t,A.d2u,A.d2w,A.d2m,A.d2x,A.d2l,A.d2y,A.d2k,A.d2z,A.d2j,A.d2A,A.d2i,A.eLW,A.eLX,A.eLV,A.eLP,A.eLQ,A.eLR,A.eLS,A.eLU,A.eM4,A.eM2,A.eM_,A.eM3,A.eLZ,A.d5a,A.d5b,A.d59,A.d52,A.d56,A.d57,A.d58,A.d53,A.d5l,A.d5h,A.d5e,A.d5j,A.d5d,A.d5k,A.d5c,A.dcf,A.dcg,A.dce,A.dc9,A.dcb,A.dcc,A.dcd,A.dco,A.dcj,A.dcm,A.dci,A.dch,A.c5t,A.fmm,A.fmn,A.fmo,A.efP,A.efQ,A.efO,A.efI,A.efA,A.efB,A.efF,A.efG,A.efN,A.efE,A.efD,A.efW,A.efV,A.efJ,A.efL,A.ekb,A.ekc,A.eka,A.ejq,A.ejr,A.ejp,A.ejB,A.eju,A.ejT,A.ejC,A.ek7,A.ek8,A.ek9,A.ek5,A.ek6,A.ek4,A.ek1,A.ek2,A.ek3,A.ekd,A.ejy,A.ejz,A.ejv,A.ejw,A.ejD,A.eku,A.ekw,A.eki,A.ekl,A.ekm,A.ekk,A.ekn,A.ekj,A.ekx,A.ekh,A.eky,A.ekg,A.ekz,A.ekf,A.ekA,A.ekC,A.eke,A.ekp,A.ekq,A.ekr,A.eks,A.ekt,A.ejU,A.ejV,A.ejX,A.ejY,A.fmF,A.elZ,A.em_,A.elY,A.elO,A.elT,A.elU,A.elS,A.elV,A.elQ,A.elL,A.elM,A.elP,A.emb,A.ema,A.em5,A.em0,A.em2])
v(C.au,[A.abu,A.bgT,A.b53,A.AW,A.a5Z])
u(A.qT,C.m4)
w(A.aLB,C.c9)})()
C.jT(b.typeUniverse,JSON.parse('{"atr":{"ag":[],"r":[]},"AC":{"aB":[]},"b3M":{"aB":[]},"boW":{"ah":["atr"]},"TZ":{"ag":[],"r":[]},"bhP":{"ah":["TZ"]},"abu":{"au":[],"r":[]},"bcJ":{"aB":[]},"N4":{"ag":[],"r":[]},"aCr":{"ah":["N4"]},"bgT":{"au":[],"r":[]},"bgh":{"aB":[]},"GV":{"ag":[],"r":[]},"a8s":{"ag":[],"r":[]},"a3T":{"ag":[],"r":[]},"azp":{"ag":[],"r":[]},"MM":{"ag":[],"r":[]},"bhQ":{"ah":["MM"]},"b53":{"au":[],"r":[]},"AW":{"au":[],"r":[]},"ayi":{"ah":["GV"]},"aEd":{"ah":["a8s"]},"ayx":{"ah":["a3T"]},"azq":{"ah":["azp"]},"a5Z":{"au":[],"r":[]},"V9":{"ag":[],"r":[]},"aCW":{"ah":["V9"]},"Vc":{"ag":[],"r":[]},"aD2":{"ah":["Vc"]},"aq_":{"ag":[],"r":[]},"aD6":{"ah":["aq_"]}}'))
var y={g:"A shut-off valve goes on the pipe that comes out of the wall.",x:"Fasten the bare copper ground to the GREEN screw.",b:"Move it with the arrow buttons, turn it, change its colour or take it out.",s:"Pick a paint colour above to change this wall.",E:"Switch the power on and flip the wall switch.",j:"The bare copper ground wire only goes on the GREEN screw.",u:"The gold screws are BRASS. They are for the HOT wire (black).",o:"The white-silver screws are NICKEL. They are for the NEUTRAL wire (white).",k:"There is no medicine left. Buy some in the shop.",r:"Turn the breaker OFF and test that the wires are dead."}
var x=(function rtii(){var w=C.ax
return{Q:w("lR<w?>"),w:w("bo<n,n>"),M:w("eX<n>"),W:w("aSg"),R:w("qT"),e:w("H7"),fa:w("ay<LR?>"),fC:w("Hd"),gQ:w("O<L7>"),V:w("O<ac>"),O:w("O<w>"),gw:w("O<Lz>"),dh:w("O<H7>"),_:w("O<a43>"),D:w("O<qc>"),cX:w("O<aTO>"),A:w("O<a46>"),ha:w("O<Hd>"),r:w("O<mi>"),E:w("O<t1>"),Z:w("O<jy>"),gL:w("O<aj<H>>"),ez:w("O<a4<n,aC>>"),f4:w("O<a4<n,ce>>"),T:w("O<B_>"),dN:w("O<u>"),B:w("O<pI>"),F:w("O<nc>"),m:w("O<hn>"),z:w("O<nd>"),a6:w("O<+(a7T,H)>"),L:w("O<+(n,n)>"),f:w("O<+(N,N)>"),ek:w("O<+(H,n)>"),al:w("O<+(H,N,R)>"),X:w("O<+(H,H,H)>"),eV:w("O<+(N,N,N,N)>"),az:w("O<+(H,H,N,R,n)>"),y:w("O<O2>"),I:w("O<O3>"),h:w("O<WK>"),gD:w("O<WQ>"),s:w("O<n>"),o:w("O<E>"),p:w("O<r>"),J:w("O<zM>"),fJ:w("O<b9k>"),bl:w("O<BY>"),a:w("O<Jl>"),b:w("O<kW>"),fG:w("O<bp7>"),u:w("O<R>"),n:w("O<N>"),t:w("O<H>"),U:w("O<aB?>"),k:w("O<ce>"),eF:w("cr<ah<ag>>"),dg:w("aj<N>"),j:w("aj<@>"),P:w("a4<n,@>"),G:w("a4<@,@>"),l:w("iz"),c:w("cp"),q:w("d0"),aU:w("aC"),dx:w("u"),ej:w("Ix"),fX:w("nd"),c5:w("dw<H>"),cH:w("atU"),N:w("n"),e7:w("bn<N>"),x:w("E"),ac:w("cx<H>"),fZ:w("a2<Er>"),cc:w("a2<n>"),dD:w("a2<H>"),bB:w("b9F"),c9:w("beG"),K:w("R"),i:w("N"),C:w("@"),S:w("H"),d:w("LG?"),eT:w("LR?"),g:w("aj<@>?"),dy:w("a4<n,@>?"),Y:w("a4<@,@>?"),cU:w("pL?"),v:w("ce"),H:w("~")}})();(function constants(){var w=a.makeConstList
B.aTW=new A.eE(!0,"The water is on and nothing leaks. Perfect job!",!1,"")
B.aTX=new A.eE(!0,"Primer and paint rolled on.",!1,"")
B.aTY=new A.eE(!1,"This call is over. Start a new one.",!1,"")
B.aTZ=new A.eE(!1,"That is not a place for a sheet.",!1,"")
B.aU_=new A.eE(!0,"Sanded smooth. Wear a mask: the dust is bad to breathe.",!1,"")
B.a8M=new A.eE(!1,"There is no device here.",!1,"")
B.aU0=new A.eE(!0,"You look closely. Everything looks fine here.",!1,"")
B.aU1=new A.eE(!1,"ZAP! You were shocked badly and it was your last life. Always turn the breaker OFF and test before you touch wires.",!0,"shock")
B.aU2=new A.eE(!0,"Paper tape pressed into the seam.",!1,"")
B.aU3=new A.eE(!0,"Unplugged.",!1,"")
B.aU4=new A.eE(!0,"Breaker OFF. It is safe to work on the wires.",!1,"")
B.aU5=new A.eE(!1,"ZAP! You were shocked badly. That was your last life: the job is over. Lesson: ALWAYS turn the breaker OFF and test the wires before you touch them.",!0,"shock")
B.aU6=new A.eE(!1,"There is nothing there.",!1,"")
B.aU7=new A.eE(!1,"The outlet is burnt. Nothing works. Pull it out and put in a new one.",!0,"")
B.aU8=new A.eE(!0,"The water is on and nothing leaks yet, but the job is not finished.",!1,"")
B.aU9=new A.eE(!0,"Sheet hung. Now screw it to the studs.",!1,"")
B.aUa=new A.eE(!0,"Hole drilled through the middle of the stud, at the cable height. Holes go in the center so a nail cannot reach the cable.",!1,"")
B.aUb=new A.eE(!0,"Plugged in. Nothing happens because the breaker is off. Turn it on to test.",!1,"")
B.aUc=new A.eE(!0,"You flipped the tripped breaker fully OFF. Fix the problem before you turn it on again.",!1,"")
B.aUd=new A.eE(!0,"Click.",!1,"")
B.aUe=new A.eE(!0,"The wires are folded back and the device is in the box. Now put the cover on.",!1,"")
B.aUf=new A.eE(!0,"Breaker OFF. The wires on this circuit are dead now. (Always test them to be sure.)",!1,"")
B.aUg=new A.eE(!1,"Nothing is wet.",!1,"")
B.aUh=new A.eE(!0,"Power is on.",!1,"")
B.aUi=new A.eE(!0,"Water OFF at the main valve. You can cut into the pipes safely now.",!1,"")
B.aUj=new A.eE(!0,"Opening cut around the box with the drywall saw. Keep it tight: the plate has to cover the edge.",!1,"")
B.aUk=new A.eE(!0,"Device pulled out of the box.",!1,"")
B.aUl=new A.eE(!0,"Screw set just below the paper, not through it.",!1,"")
B.aUm=new A.eE(!1,"ZAP! You touched a live wire. In Learn mode you are not hurt, but in real life this can kill. Switch the breaker OFF and test the wires first.",!0,"shock")
B.aUn=new A.eE(!0,"Cover on. Now you can turn the breaker on and test.",!1,"")
B.Un=new A.eE(!1,"",!1,"")
B.aUo=new A.eE(!0,"Device taken out. You can put it somewhere else, or put in a new one.",!1,"")
B.aUp=new A.eE(!0,"Breaker back ON.",!1,"")
B.aUq=new A.eE(!1,"That is not a stud.",!1,"")
B.aUr=new A.eE(!0,"Off.",!1,"")
B.aUs=new A.eE(!1,"Nothing to flip yet.",!1,"")
B.aUt=new A.eE(!0,"Wire taken off.",!1,"")
B.aUu=new A.eE(!0,"The mud is dry.",!1,"")
B.aUv=new A.eE(!0,"Breaker reset.",!1,"")
B.aUw=new A.eE(!0,"Box mounted. (Careful: this is not a fan-rated box. A fan on it could fall.)",!1,"")
B.fol=new C.x("Tap a piece of furniture, or add one:",null,N.SN,null,null,null,null,null,null,null,null,null)
B.e3M=new C.C(D.n2,B.fol,null)
B.aUD=new C.bH(D.a3,null,null,B.e3M,null)
B.Ej=new C.w(1,0.08627450980392157,0.10588235294117647,0.1411764705882353,D.t)
B.aXx=new C.bP(D.Y,D.Y,A_.uI,D.Y)
B.aZZ=new C.o(B.Ej,null,B.aXx,null,null,null,D.n)
B.foY=new C.x("\u2600\ufe0f Let it dry",null,I.zi,null,null,null,null,null,null,null,null,null)
B.b31=new C.cq(D.A,null,null,B.foY,null)
B.foK=new C.x("\u23e9 Skip to the wiring",null,I.zi,null,null,null,null,null,null,null,null,null)
B.b39=new C.cq(D.A,null,null,B.foK,null)
B.fdB=new C.x("\ud83c\udfd7\ufe0f",null,D.uv,null,null,null,null,null,null,null,null,null)
B.b3o=new C.cq(D.A,null,null,B.fdB,null)
B.fdq=new C.x("\ud83c\udfe0",null,D.aP3,null,null,null,null,null,null,null,null,null)
B.b3O=new C.cq(D.A,null,null,B.fdq,null)
B.b54=new C.w(1,0.9294117647058824,0.9098039215686274,0.8627450980392157,D.t)
B.b5f=new C.w(1,0.9725490196078431,0.9647058823529412,0.9333333333333333,D.t)
B.wK=new C.w(1,0.5450980392156862,0.3686274509803922,0.20392156862745098,D.t)
B.ab2=new C.w(1,0.611764705882353,0.5568627450980392,0.4588235294117647,D.t)
B.ab5=new C.w(1,0.24705882352941178,0.5607843137254902,0.30980392156862746,D.t)
B.wL=new C.w(1,0.9450980392156862,0.9450980392156862,0.9176470588235294,D.t)
B.b5V=new C.w(1,0.9098039215686274,0.9254901960784314,0.9372549019607843,D.t)
B.b5W=new C.w(1,0.4823529411764706,0.5098039215686274,0.5450980392156862,D.t)
B.b62=new C.w(1,0.10588235294117647,0.4980392156862745,0.20392156862745098,D.t)
B.abi=new C.w(1,0.7215686274509804,0.7450980392156863,0.7725490196078432,D.t)
B.DR=new C.w(1,0.5450980392156862,0.3686274509803922,0.23529411764705882,D.t)
B.abk=new C.w(1,0.8509803921568627,0.8274509803921568,0.7725490196078432,D.t)
B.abo=new C.w(1,0.6549019607843137,0.6784313725490196,0.7098039215686275,D.t)
B.iK=new C.w(1,0.16862745098039217,0.17647058823529413,0.2,D.t)
B.b6y=new C.w(1,0.13333333333333333,0.13725490196078433,0.14901960784313725,D.t)
B.DT=new C.w(1,0.8980392156862745,0.7529411764705882,0.4823529411764706,D.t)
B.K7=new C.w(1,0.8156862745098039,0.5098039215686274,0.27450980392156865,D.t)
B.Vm=new C.w(1,0.5411764705882353,0.41568627450980394,0.2784313725490196,D.t)
B.abv=new C.w(1,0.1843137254901961,0.4196078431372549,0.23529411764705882,D.t)
B.abB=new C.w(1,0.2980392156862745,0.5450980392156862,0.2901960784313726,D.t)
B.rX=new C.w(1,0.788235294117647,0.6274509803921569,0.22745098039215686,D.t)
B.abC=new C.w(1,0.9411764705882353,0.5411764705882353,0.1411764705882353,D.t)
B.abF=new C.w(1,0.5568627450980392,0.5843137254901961,0.6196078431372549,D.t)
B.b7y=new C.w(1,0.47843137254901963,0.35294117647058826,0.22745098039215686,D.t)
B.kD=new C.w(1,0.788235294117647,0.807843137254902,0.8392156862745098,D.t)
B.abL=new C.w(1,0.4196078431372549,0.45098039215686275,0.5019607843137255,D.t)
B.abM=new C.w(1,0.5568627450980392,0.35294117647058826,0.2901960784313726,D.t)
B.A4=new C.w(1,0.9294117647058824,0.9176470588235294,0.8784313725490196,D.t)
B.b8n=new C.w(1,0.22745098039215686,0.22745098039215686,0.24705882352941178,D.t)
B.b8t=new C.w(1,0.5490196078431373,0.5764705882352941,0.6078431372549019,D.t)
B.E1=new C.w(1,0.22745098039215686,0.24705882352941178,0.2784313725490196,D.t)
B.Vv=new C.w(1,0.8980392156862745,0.8980392156862745,0.8666666666666667,D.t)
B.Kh=new C.w(1,0.10588235294117647,0.11372549019607843,0.13333333333333333,D.t)
B.Vz=new C.w(1,0.30980392156862746,0.6588235294117647,0.3764705882352941,D.t)
B.ac_=new C.w(1,0.8509803921568627,0.803921568627451,0.7215686274509804,D.t)
B.Kj=new C.w(1,0.11764705882352941,0.11764705882352941,0.12549019607843137,D.t)
B.b8Q=new C.w(1,0.8862745098039215,0.8745098039215686,0.8235294117647058,D.t)
B.b96=new C.w(1,0.5411764705882353,0.4823529411764706,0.41568627450980394,D.t)
B.b9a=new C.w(1,0.34901960784313724,0.3176470588235294,0.29411764705882354,D.t)
B.b9h=new C.w(1,0.8117647058823529,0.792156862745098,0.7411764705882353,D.t)
B.VE=new C.w(1,0.8117647058823529,0.8901960784313725,0.9176470588235294,D.t)
B.VF=new C.w(1,0.3333333333333333,0.396078431372549,0.4823529411764706,D.t)
B.VG=new C.w(1,0.5529411764705883,0.7843137254901961,1,D.t)
B.VJ=new C.w(1,1,0.9019607843137255,0.5019607843137255,D.t)
B.b9H=new C.w(1,0.9490196078431372,0.7607843137254902,0.10588235294117647,D.t)
B.ack=new C.w(1,0.9490196078431372,0.9411764705882353,0.9019607843137255,D.t)
B.b9Z=new C.w(1,0.9686274509803922,0.9607843137254902,0.9333333333333333,D.t)
B.nF=new C.w(1,0.1843137254901961,0.49019607843137253,0.8823529411764706,D.t)
B.ba7=new C.w(1,0.788235294117647,0.7176470588235294,0.6078431372549019,D.t)
B.VM=new C.w(1,0.8901960784313725,0.6627450980392157,0.10980392156862745,D.t)
B.E8=new C.w(1,0.7137254901960784,0.7372549019607844,0.7686274509803922,D.t)
B.bak=new C.w(1,0.22745098039215686,0.49019607843137253,0.26666666666666666,D.t)
B.uR=new C.w(1,0.9019607843137255,0.8823529411764706,0.8352941176470589,D.t)
B.VQ=new C.w(1,0.3686274509803922,0.17647058823529413,0.13725490196078433,D.t)
B.Ea=new C.w(1,0.09019607843137255,0.09411764705882353,0.10588235294117647,D.t)
B.Ab=new C.w(1,0.9725490196078431,0.9725490196078431,0.9568627450980393,D.t)
B.acE=new C.w(1,0.9450980392156862,0.9568627450980393,0.9725490196078431,D.t)
B.baU=new C.w(1,0.9019607843137255,0.9019607843137255,0.8784313725490196,D.t)
B.VU=new C.w(1,0.8941176470588236,0.9058823529411765,0.9176470588235294,D.t)
B.m6=new C.w(1,0.7686274509803922,0.6039215686274509,0.3843137254901961,D.t)
B.acS=new C.w(1,1,0.35294117647058826,0.12156862745098039,D.t)
B.acT=new C.w(1,0.5411764705882353,0.5607843137254902,0.596078431372549,D.t)
B.bbF=new C.w(1,0.5411764705882353,0.29411764705882354,0.29411764705882354,D.t)
B.Kt=new C.w(1,0.9098039215686274,0.8509803921568627,0.7372549019607844,D.t)
B.t5=new C.w(1,1,0.9450980392156862,0.6588235294117647,D.t)
B.bbZ=new C.w(1,0.5411764705882353,0.5411764705882353,0.5176470588235295,D.t)
B.bc0=new C.w(1,0.9647058823529412,0.9568627450980393,0.9254901960784314,D.t)
B.Kw=new C.w(1,0.47843137254901963,0.23137254901960785,0.1803921568627451,D.t)
B.ad3=new C.w(1,0.7058823529411765,0.3254901960784314,0.3254901960784314,D.t)
B.bce=new C.w(1,0.6078431372549019,0.6078431372549019,0.592156862745098,D.t)
B.Ah=new C.w(1,0.9568627450980393,0.9450980392156862,0.9176470588235294,D.t)
B.t7=new C.w(1,0.8862745098039215,0.23137254901960785,0.23137254901960785,D.t)
B.pk=new C.w(1,0.9490196078431372,0.9490196078431372,0.9254901960784314,D.t)
B.ad7=new C.w(1,0.788235294117647,0.8117647058823529,0.8392156862745098,D.t)
B.bct=new C.w(1,0.9294117647058824,0.9215686274509803,0.8941176470588236,D.t)
B.W7=new C.w(1,0.8392156862745098,0.6823529411764706,0.4470588235294118,D.t)
B.ada=new C.w(1,0.9098039215686274,0.9098039215686274,0.9098039215686274,D.t)
B.El=new C.w(1,0.2901960784313726,0.2980392156862745,0.32941176470588235,D.t)
B.adg=new C.w(1,0.3686274509803922,0.43137254901960786,0.5176470588235295,D.t)
B.bd5=new C.w(1,0.20784313725490197,0.47843137254901963,0.26666666666666666,D.t)
B.bd8=new C.w(1,0.3568627450980392,0.10196078431372549,0.09019607843137255,D.t)
B.adk=new C.w(1,0.23137254901960785,0.1843137254901961,0.14901960784313725,D.t)
B.adl=new C.w(1,0.8509803921568627,0.788235294117647,0.6588235294117647,D.t)
B.m8=new C.w(1,0.9686274509803922,0.9568627450980393,0.9254901960784314,D.t)
B.bdl=new C.w(1,0.13333333333333333,0.1450980392156863,0.16862745098039217,D.t)
B.Wc=new C.w(1,0.4980392156862745,0.7215686274509804,1,D.t)
B.wW=new C.w(1,0.16470588235294117,0.1450980392156863,0.13725490196078433,D.t)
B.bds=new C.w(1,0.5411764705882353,0.23137254901960785,0.23137254901960785,D.t)
B.bdt=new C.w(1,0.9450980392156862,0.9294117647058824,0.8784313725490196,D.t)
B.Kz=new C.w(1,0.796078431372549,0.8156862745098039,0.8392156862745098,D.t)
B.Wf=new C.w(1,0.8980392156862745,0.7254901960784313,0.11764705882352941,D.t)
B.bdP=new C.w(1,0.7490196078431373,0.8901960784313725,1,D.t)
B.Wj=new C.w(1,0.10588235294117647,0.10588235294117647,0.11372549019607843,D.t)
B.Wk=new C.w(1,0.9529411764705882,0.9058823529411765,0.6313725490196078,D.t)
B.adE=new C.w(1,0.9490196078431372,0.9490196078431372,0.9333333333333333,D.t)
B.bet=new C.w(1,0.6274509803921569,0.6509803921568628,0.6823529411764706,D.t)
B.beK=new C.w(1,0.8156862745098039,0.35294117647058826,0.22745098039215686,D.t)
B.beQ=new C.w(1,0.8509803921568627,0.788235294117647,0.6274509803921569,D.t)
B.Wp=new C.w(1,0.9490196078431372,0.9176470588235294,0.8274509803921568,D.t)
B.adW=new C.w(1,0.10588235294117647,0.07058823529411765,0.03529411764705882,D.t)
B.bf5=new C.w(1,0.3607843137254902,0.7019607843137254,0.9098039215686274,D.t)
B.bf7=new C.w(1,0.24705882352941178,0.26666666666666666,0.3137254901960784,D.t)
B.bfg=new C.w(1,0.12549019607843137,0.13333333333333333,0.14901960784313725,D.t)
B.KJ=new C.w(1,0.8862745098039215,0.27058823529411763,0.35294117647058826,D.t)
B.x0=new C.w(1,0.17254901960784313,0.4196078431372549,0.8392156862745098,D.t)
B.x1=new C.w(1,0.7607843137254902,0.4627450980392157,0.22745098039215686,D.t)
B.KM=new C.w(1,0.7254901960784313,0.7450980392156863,0.7764705882352941,D.t)
B.ae3=new C.w(1,0.611764705882353,0.35294117647058826,0.27058823529411763,D.t)
B.bfU=new C.w(1,0.611764705882353,0.5882352941176471,0.5450980392156862,D.t)
B.aef=new C.w(1,0.9686274509803922,0.9490196078431372,0.9019607843137255,D.t)
B.bgh=new C.w(1,0.2,0.21176470588235294,0.23137254901960785,D.t)
B.bgm=new C.w(1,0.7098039215686275,0.7333333333333333,0.7647058823529411,D.t)
B.bgo=new C.w(1,0.9294117647058824,0.9294117647058824,0.9098039215686274,D.t)
B.bgt=new C.w(1,0.9098039215686274,0.8941176470588236,0.8549019607843137,D.t)
B.aen=new C.w(1,0.7686274509803922,0.5411764705882353,0.11764705882352941,D.t)
B.bgB=new C.w(1,0.43529411764705883,0.7137254901960784,1,D.t)
B.bgM=new C.w(1,0.9137254901960784,0.8980392156862745,0.8549019607843137,D.t)
B.aet=new C.w(1,0.18823529411764706,0.2,0.22745098039215686,D.t)
B.KS=new C.w(1,0.9372549019607843,0.9372549019607843,0.9176470588235294,D.t)
B.aev=new C.w(0.6666666666666666,1,0.16470588235294117,0.10196078431372549,D.t)
B.bh_=new C.w(1,0.9372549019607843,0.9137254901960784,0.8627450980392157,D.t)
B.bh2=new C.w(1,0.9294117647058824,0.9019607843137255,0.8156862745098039,D.t)
B.WE=new C.w(1,0.4196078431372549,0.24705882352941178,0.19215686274509805,D.t)
B.bh7=new C.w(1,0.12156862745098039,0.6392156862745098,0.2627450980392157,D.t)
B.bh9=new C.w(1,0.803921568627451,0.6274509803921569,0.2,D.t)
B.KV=new C.w(1,0.3607843137254902,0.7019607843137254,1,D.t)
B.aeH=new C.w(1,0.9568627450980393,0.9568627450980393,0.9411764705882353,D.t)
B.bhN=new C.w(1,0.8431372549019608,0.8,0.6588235294117647,D.t)
B.bin=new C.w(1,0.9019607843137255,0.8745098039215686,0.796078431372549,D.t)
B.bio=new C.w(1,0.30980392156862746,0.6588235294117647,1,D.t)
B.bit=new C.w(1,1,0.6196078431372549,0.6196078431372549,D.t)
B.aeT=new C.w(1,0.8431372549019608,0.16470588235294117,0.16470588235294117,D.t)
B.L_=new C.w(1,0.47843137254901963,0.30980392156862746,0.1568627450980392,D.t)
B.As=new C.w(1,0.6901960784313725,0.5411764705882353,0.3568627450980392,D.t)
B.pv=new C.w(1,0.6078431372549019,0.8274509803921568,0.9607843137254902,D.t)
B.biX=new C.w(1,0.48627450980392156,0.2901960784313726,0.22745098039215686,D.t)
B.biY=new C.w(1,0.23137254901960785,0.6078431372549019,1,D.t)
B.bj5=new C.w(1,0.8509803921568627,0.8235294117647058,0.7607843137254902,D.t)
B.bj7=new C.w(1,0.29411764705882354,0.29411764705882354,0.3137254901960784,D.t)
B.x5=new C.w(1,0.4196078431372549,0.2901960784313726,0.19607843137254902,D.t)
B.aeZ=new C.w(1,0.13333333333333333,0.14901960784313725,0.17254901960784313,D.t)
B.bjd=new C.w(1,0.8117647058823529,0.788235294117647,0.7215686274509804,D.t)
B.bjl=new C.w(1,0.5450980392156862,0.4196078431372549,0.24705882352941178,D.t)
B.bom=new C.Q(10,16,10,14)
B.XE=new C.Q(11,9,11,9)
B.agx=new C.Q(14,8,14,24)
B.bt4=new C.Q(4,22,4,12)
B.bth=new C.Q(4,4,8,4)
B.btk=new C.Q(4,6,12,4)
B.bub=new C.Q(9,0,9,0)
B.ftV=new C.x("Practice mode (no explanations, real shocks)",null,D.Tc,null,null,null,null,null,null,null,null,null)
B.buH=new C.bD(1,D.bi,B.ftV,null)
B.fpI=new C.x("Practice mode (no hints, no labels)",null,D.Tc,null,null,null,null,null,null,null,null,null)
B.buI=new C.bD(1,D.bi,B.fpI,null)
B.f7D=new C.x("\ud83c\udfd8 Community",null,L.ry,null,null,null,null,null,null,null,null,null)
B.b2W=new C.cq(D.A,null,null,B.f7D,null)
B.buP=new C.bD(1,D.bi,B.b2W,null)
B.fhJ=new C.x("Construction Lab",null,L.ry,null,null,null,null,null,null,null,null,null)
B.f75=new C.x("Wire it. Plumb it. Fix a house.",null,D.hp,null,null,null,null,null,null,null,null,null)
B.cYK=w([B.fhJ,B.f75],x.p)
B.bk4=new C.fq(D.ah,D.e,D.j,D.F,null,D.p,null,0,B.cYK,null)
B.bv1=new C.bD(1,D.bi,B.bk4,null)
B.aOx=new C.G(!0,D.c,null,null,null,null,14,D.H,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fpz=new C.x("5 portions of food\n10 points",null,B.aOx,null,null,null,null,null,null,null,null,null)
B.bv6=new C.bD(1,D.bi,B.fpz,null)
B.fcu=new C.x("3 doses of medicine\n12 points",null,B.aOx,null,null,null,null,null,null,null,null,null)
B.bvk=new C.bD(1,D.bi,B.fcu,null)
B.fpm=new C.x("Practice mode (no hints, real shocks and fires)",null,D.Tc,null,null,null,null,null,null,null,null,null)
B.bvJ=new C.bD(1,D.bi,B.fpm,null)
B.bws=new A.a3T(null,null)
B.YY=new A.qT(0,"tripped")
B.YZ=new A.qT(1,"noHotWater")
B.Z_=new A.qT(10,"wallHole")
B.Z0=new A.qT(11,"clogged")
B.Ma=new A.qT(2,"nutLeak")
B.Mb=new A.qT(3,"pexLeak")
B.Z1=new A.qT(5,"flicker")
B.Z2=new A.qT(6,"burntOutlet")
B.Z3=new A.qT(7,"gfciTripped")
B.Z4=new A.qT(8,"runningToilet")
B.Z5=new A.qT(9,"dripFaucet")
B.by_=new A.qc("back",0,10)
B.by0=new A.qc("back",56,11)
B.by1=new A.qc("left",40,9)
B.by2=new A.qc("right",40,10)
B.Zd=new A.qc("right",50,5)
B.aiA=new A.pv("tv100",'Giant 100"',"\ud83d\udcfa",89,!1)
B.bAL=new C.a0(63015,"MaterialIcons",!1)
B.bBe=new C.a0(63228,"MaterialIcons",!1)
B.akA=new C.a0(983222,"MaterialIcons",!1)
B.al9=new C.a0(983775,"MaterialIcons",!1)
B.alf=new C.a0(983894,"MaterialIcons",!1)
B.fFB=new A.E(-0.4,4.2,-2.4)
B.bQf=new A.t1(B.fFB,"LIVE 120 V",D.bI)
B.bgD=new C.w(1,0.2901960784313726,0.20392156862745098,0.0784313725490196,D.t)
B.bdR=new C.w(1,0.12156862745098039,0.10196078431372549,0.07058823529411765,D.t)
B.b7K=new C.w(1,0.16470588235294117,0.12156862745098039,0.07058823529411765,D.t)
B.d7U=w([B.bgD,B.bdR,B.b7K],x.O)
B.bSd=new C.a8(D.ax,D.aC,D.x,B.d7U,null,null)
B.bi9=new C.w(1,0.12156862745098039,0.10196078431372549,0.1411764705882353,D.t)
B.dac=w([D.adG,B.bi9],x.O)
B.bST=new C.a8(D.ax,D.aC,D.x,B.dac,null,null)
B.bV1=w(["flange","wax","toilet","bolts","valve","hosehot","hosecold","faucet","tail","trap","arm"],x.s)
B.bVa=w([0,0,0,1],x.k)
B.bVz=w([0,1,2,3,4,6,7,8,9,10],x.t)
B.c6V=w([H.mw,K.RP,H.ll,K.aKL],x.f)
B.c76=w([1,1,1],x.k)
B.c77=w([1,1,1,1],x.k)
B.fE8=new A.E(-57.8,-32,0)
B.b0v=new A.yr(0,"Outlet spot 1",!1,B.fE8,"low")
B.fEI=new A.E(-9.8,-32,0)
B.b0s=new A.yr(1,"Outlet spot 2",!1,B.fEI,"low")
B.fF3=new A.E(38.2,-32,0)
B.b0y=new A.yr(2,"Outlet spot 3",!1,B.fF3,"low")
B.fDP=new A.E(-25.8,0,0)
B.b0w=new A.yr(3,"Switch spot 1",!1,B.fDP,"switch")
B.fED=new A.E(22.2,0,0)
B.b0u=new A.yr(4,"Switch spot 2",!1,B.fED,"switch")
B.fFR=new A.E(-30,48,40)
B.b0x=new A.yr(5,"Ceiling light spot",!0,B.fFR,"light")
B.fzk=new A.E(30,48,40)
B.b0t=new A.yr(6,"Ceiling fan spot",!0,B.fzk,"fan")
B.tW=w([B.b0v,B.b0s,B.b0y,B.b0w,B.b0u,B.b0x,B.b0t],C.ax("O<yr>"))
B.cej=w(["The living room has no power: find the tripped breaker in the panel and reset it.","The kitchen sink drips: pick the wrench and tighten the slip nut under the sink. (Build the house up to Fixtures to see the problems.)"],x.s)
B.fES=new A.E(11,4.6,-6)
B.fB8=new A.E(11,5.4,-7.85)
B.fEn=new A.E(3.4,5.4,-7.85)
B.aRB=new A.E(3.4,3.4,-7.85)
B.cel=w([B.fES,B.fB8,B.fEn,B.aRB],x.o)
B.baa=new C.w(1,0.5411764705882353,0.35294117647058826,0.23529411764705882,D.t)
B.ac7=new C.w(1,0.10588235294117647,0.07058823529411765,0.06274509803921569,D.t)
B.bj9=new C.w(1,0.8509803921568627,0.27450980392156865,0.49411764705882355,D.t)
B.aaZ=new C.w(1,0.23137254901960785,0.24705882352941178,0.3607843137254902,D.t)
B.e7k=new A.uy(B.baa,B.ac7,B.bj9,B.aaZ,"michelle")
B.eEW=new A.EC(0,"Ama",0,2,B.e7k,"A nurse who works nights.")
B.bbW=new C.w(1,0.4196078431372549,0.27058823529411763,0.18823529411764706,D.t)
B.b9u=new C.w(1,0.08627450980392157,0.06274509803921569,0.06274509803921569,D.t)
B.bgO=new C.w(1,0.1803921568627451,0.5607843137254902,0.3568627450980392,D.t)
B.Ve=new C.w(1,0.1803921568627451,0.20392156862745098,0.25098039215686274,D.t)
B.e7r=new A.uy(B.bbW,B.b9u,B.bgO,B.Ve,"soldier")
B.eEV=new A.EC(1,"Joseph",1,2,B.e7r,"A student who is always hungry.")
B.bf1=new C.w(1,0.6274509803921569,0.4196078431372549,0.2784313725490196,D.t)
B.acU=new C.w(1,0.16470588235294117,0.10196078431372549,0.06274509803921569,D.t)
B.baq=new C.w(1,0.2901960784313726,0.24705882352941178,0.4196078431372549,D.t)
B.e7m=new A.uy(B.bf1,B.acU,D.aH,B.baq,"xbot")
B.eEU=new A.EC(2,"Grace",3,4,B.e7m,"A teacher who marks papers late.")
B.abb=new C.w(1,0.8784313725490196,0.6431372549019608,0.48627450980392156,D.t)
B.aeQ=new C.w(1,0.1843137254901961,0.43529411764705883,0.7098039215686275,D.t)
B.e7n=new A.uy(B.abb,D.ad1,B.aeQ,B.Ve,"soldier")
B.eEQ=new A.EC(3,"Daniel",6,8,B.e7n,"A driver who sleeps in the day.")
B.bhn=new C.w(1,0.788235294117647,0.5450980392156862,0.3686274509803922,D.t)
B.baz=new C.w(1,0.16862745098039217,0.17647058823529413,0.22745098039215686,D.t)
B.e7l=new A.uy(B.bhn,B.ac7,D.aE,B.baz,"michelle")
B.eER=new A.EC(4,"Fatima",7,8,B.e7l,"A baker who gets up at four.")
B.aeG=new C.w(1,0.47843137254901963,0.29411764705882354,0.18823529411764706,D.t)
B.bg3=new C.w(1,0.24705882352941178,0.22745098039215686,0.2,D.t)
B.e7s=new A.uy(B.aeG,D.e_,D.d9,B.bg3,"soldier")
B.eET=new A.EC(5,"Papa Moses",10,-1,B.e7s,"The oldest in the house. He watches TV all day.")
B.be3=new C.w(1,0.5490196078431373,0.3568627450980392,0.23137254901960785,D.t)
B.e7j=new A.uy(B.be3,B.acT,D.ay,B.aaZ,"michelle")
B.eES=new A.EC(6,"Mama Rose",9,-1,B.e7j,"Cooks for everybody in the kitchen.")
B.ON=w([B.eEW,B.eEV,B.eEU,B.eEQ,B.eER,B.eET,B.eES],C.ax("O<EC>"))
B.ej5=new C.y(-9.5,4.6)
B.elp=new C.y(-5.9,2.3)
B.erb=new C.y(8.8,4.4)
B.cuj=w([B.ej5,B.elp,B.erb],x.f)
B.cvd=w([61,63],x.t)
B.cvq=w([62,64],x.t)
B.b9A=new C.w(1,0.6039215686274509,0.30980392156862746,0.30980392156862746,D.t)
B.bjf=new C.w(1,0.30980392156862746,0.47843137254901963,0.3686274509803922,D.t)
B.a0X=w([B.DR,B.adg,B.b9A,B.bjf,B.adl,D.ti],x.O)
B.aty=w([72,73,74,75],x.t)
B.ess=new C.y(-25,-15)
B.ebX=new C.y(25,-15)
B.esr=new C.y(-25,15)
B.ebW=new C.y(25,15)
B.cBD=w([B.ess,B.ebX,B.esr,B.ebW],x.f)
B.by4=new A.pv("wall","Whole-wall TV","\ud83c\udfac",0,!0)
B.byc=new A.pv("tv200",'Cinema 200"',"\ud83c\udfac",175,!1)
B.by7=new A.pv("tv150",'Cinema 150"',"\ud83c\udfac",130,!1)
B.by8=new A.pv("bangtv",'Beovision TV 77"',"\ud83d\udcfa",66,!1)
B.by3=new A.pv("sonytv",'Sony Bravia 75"',"\ud83d\udcfa",64,!1)
B.byd=new A.pv("lgtv",'LG OLED 65"',"\ud83d\udcfa",56,!1)
B.by6=new A.pv("tv",'Samsung Neo QLED 55"',"\ud83d\udcfa",48,!1)
B.byb=new A.pv("appletv",'Apple TV 4K 50"',"\ud83d\udcfa",44,!1)
B.bya=new A.pv("lamp","Table lamp","\ud83d\udca1",0,!1)
B.by9=new A.pv("toaster","Toaster","\ud83c\udf5e",0,!1)
B.by5=new A.pv("hairdryer","Hair dryer","\ud83d\udc87",0,!1)
B.a14=w([B.by4,B.byc,B.by7,B.aiA,B.by8,B.by3,B.byd,B.by6,B.byb,B.bya,B.by9,B.by5],C.ax("O<pv>"))
B.cJk=w([y.r,"Two cables come into the box: one from the breaker panel (LINE) and one going to the light (LOAD).","Twist the two white wires together with a wire nut. A switch does not cut the neutral.",y.x,"Fasten the black wire from the panel to one BRASS screw.","Fasten the black wire that goes to the light to the other BRASS screw.","Push the switch into the box, put the plate on and test with the power on."],x.s)
B.dYC={black:0}
B.Ie=new C.eX(B.dYC,1,x.M)
B.byt=new A.mi(51,"Black wire nut: HOT",B.Ie,!1,"hot")
B.dZn={white:0}
B.Ic=new C.eX(B.dZn,1,x.M)
B.byi=new A.mi(52,"White wire nut: NEUTRAL",B.Ic,!1,"neutral")
B.dYS={ground:0}
B.S9=new C.eX(B.dYS,1,x.M)
B.byf=new A.mi(53,"Green ground connection",B.S9,!1,"ground")
B.cJt=w([B.byt,B.byi,B.byf],x.r)
B.byu=new A.mi(51,"Black wire nut: HOT",B.Ie,!1,"hot")
B.byj=new A.mi(52,"White wire nut: NEUTRAL",B.Ic,!1,"neutral")
B.byg=new A.mi(53,"Green ground connection",B.S9,!1,"ground")
B.cJs=w([B.byu,B.byj,B.byg],x.r)
B.cJP=w(["Walnut","Blue grey","Brick red","Sage green","Sand","Charcoal"],x.s)
B.fC8=new A.E(-6.5,7.5,-7.85)
B.fCc=new A.E(-6.5,7.8,-3)
B.cK6=w([B.fC8,B.fCc],x.o)
B.bai=new C.w(1,0.9176470588235294,0.9490196078431372,0.9686274509803922,D.t)
B.beZ=new C.w(1,0.9647058823529412,0.9098039215686274,0.9098039215686274,D.t)
B.be8=new C.w(1,0.9529411764705882,0.9215686274509803,0.7843137254901961,D.t)
B.aub=w([B.Ah,B.bai,B.beZ,B.be8],x.O)
B.cKK=w([y.r,"The cable comes in through the top of the box. Strip about 3/4 inch of insulation from each wire.","Fasten the bare copper ground wire to the GREEN screw.","Fasten the white (neutral) wire to a SILVER screw.","Fasten the black (hot) wire to a BRASS screw. Wrap each wire clockwise under its screw.","Fold the wires back and push the outlet into the box.","Put the cover plate on, then turn the power on and test."],x.s)
B.fGQ=new A.E(-3.6,7.5,-7.85)
B.fBO=new A.E(-3.6,4.2,-7.85)
B.cKS=w([B.fGQ,B.fBO],x.o)
B.dYB={blackLine:0,blackLoad:1}
B.aLT=new C.eX(B.dYB,2,x.M)
B.byr=new A.mi(21,"Brass screw (top)",B.aLT,!1,"hot")
B.bys=new A.mi(22,"Brass screw (bottom)",B.aLT,!1,"hot")
B.aiB=new A.mi(25,"Green screw: GROUND",B.S9,!1,"ground")
B.cLm=w([B.byr,B.bys,B.aiB],x.r)
B.cLz=w([0,2,1,3,4,6,7,8],x.t)
B.fFa=new A.E(9.8,6,-7.85)
B.fBc=new A.E(9.8,7.5,-7.85)
B.fH5=new A.E(-8,7.5,-7.85)
B.fD_=new A.E(-8,1.5,-7.85)
B.cMo=w([B.fFa,B.fBc,B.fH5,B.fD_],x.o)
B.aRH=new A.E(5,1.8,-7.85)
B.fDH=new A.E(5,-0.1,-7.85)
B.fEv=new A.E(12.5,-0.1,-7.85)
B.cNn=w([B.aRH,B.fDH,B.fEv],x.o)
B.fx7=new A.E(3,3.1,-7.1)
B.aRC=new A.E(3,1.7,-7.1)
B.fEq=new A.E(3,1,-7.1)
B.fz8=new A.E(3.65,0.5,-7.1)
B.fA5=new A.E(4.3,1,-7.1)
B.fDC=new A.E(4.3,1.8,-7.1)
B.fH7=new A.E(5,1.8,-7.1)
B.cNP=w([B.fx7,B.aRC,B.fEq,B.fz8,B.fA5,B.fDC,B.fH7,B.aRH],x.o)
B.cOh=w(["My outlet is dead and it is dark in here. Please come and wire it.","The light in my room does not work, and my phone will not charge. Can you fix the wiring?","I have no power in my room at all. Can an electrician come?"],x.s)
B.fGB=new A.E(0.6,11,-3.4)
B.fAw=new A.E(0.6,3.2,-3.2)
B.fGd=new A.E(0.6,2.2,-1.9)
B.fAl=new A.E(0.6,0.7,-1.5)
B.cOO=w([B.fGB,B.fAw,B.fGd,B.fAl],x.o)
B.cPt=w([H.mw,K.RP,H.ll],x.f)
B.cQ0=w(["road","roadturn","roadtee","roadcross","house2","shop","hospital","firestation","school","car","firetruck","ambulance","dog","cat","cow","sheep","chicken","horse","tree","pine","bush","flowers","fence","lamppost","bench","pond","swing","shed","doghouse"],x.s)
B.fzA=new A.E(0,8.3,0)
B.aRh=new A.E(0,3.9,0)
B.a1B=w([B.fzA,B.aRh],x.o)
B.cQf=w([y.r,"Make sure the box is rated for a fan. A plain light box cannot carry the weight and the shaking.","Join the house ground wire to the fan ground.","Join the house white wire to the fan white wire with a wire nut.","Join the house black wire to the fan black wire with a wire nut.","Push the wires up into the box and fasten the canopy to the ceiling.",y.E],x.s)
B.fMc=new A.Fg("outlet","\ud83d\udd0c","Wall outlet","Black to brass, white to silver",D.aH)
B.fM9=new A.Fg("switch","\ud83d\udca1","Light switch","Two blacks and a wire nut",D.aU)
B.fMa=new A.Fg("gfci","\ud83d\udee1\ufe0f","GFCI outlet","LINE and LOAD near water",D.bt)
B.fMd=new A.Fg("fan","\ud83c\udf00","Ceiling fan","Black, white, green and a fan box",D.b7)
B.fMb=new A.Fg("ptrap","\ud83e\udea0","Sink drain (P-trap)","Build a drain with a water seal",D.cs)
B.fM8=new A.Fg("faucet","\ud83d\udeb0","Faucet supply lines","Hot left, cold right",D.cj)
B.fM7=new A.Fg("house","\ud83c\udfd7\ufe0f","Build and fix a house","Stage by stage, then repair",D.by)
B.cQt=w([B.fMc,B.fM9,B.fMa,B.fMd,B.fMb,B.fM8,B.fM7],C.ax("O<Fg>"))
B.ert=new C.y(-3.5,11)
B.ehw=new C.y(3.5,11)
B.efV=new C.y(-3.5,-11)
B.edZ=new C.y(3.5,-11)
B.cQx=w([B.ert,B.ehw,B.efV,B.edZ],x.f)
B.fFu=new A.E(-0.6,11,-3.4)
B.fBg=new A.E(-0.6,3.2,-3.2)
B.fEO=new A.E(-0.6,2.2,-1.9)
B.fHl=new A.E(-0.6,0.7,-1.5)
B.cQz=w([B.fFu,B.fBg,B.fEO,B.fHl],x.o)
B.a1C=w(["dog","cat","cow","sheep","chicken","horse"],x.s)
B.eow=new C.y(-1.2,0)
B.ewj=new C.y(1.2,0)
B.cRa=w([B.eow,B.ewj],x.f)
B.e2E=new A.nc("flange","flange","Toilet flange",D.T,"The flange is fixed to the floor over the drain. Everything else sits on it.",!1,0)
B.d2N=w(["flange"],x.s)
B.e2C=new A.nc("wax","wax","Wax ring",B.d2N,"The wax ring goes on the flange before the toilet. It makes the seal against sewer gas and water.",!1,0)
B.dcy=w(["wax"],x.s)
B.e2z=new A.nc("toilet","toilet","Toilet",B.dcy,"The toilet is lowered straight down onto the wax ring. The ring has to be there first.",!1,0)
B.db2=w(["toilet"],x.s)
B.e2D=new A.nc("bolts","bolts","Toilet bolts",B.db2,"The two bolts hold the toilet to the flange. Set the toilet first.",!1,2)
B.e2A=new A.nc("tvalve","valve","Toilet shut-off valve",D.T,"The shut-off valve goes on the pipe that comes out of the wall.",!0,0)
B.db8=w(["tvalve","toilet"],x.s)
B.e2B=new A.nc("those","hosecold","Toilet supply hose",B.db8,"The hose joins the valve to the toilet tank, so both must be there first.",!1,2)
B.aFY=new A.nc("faucet","faucet","Faucet",D.T,"The faucet goes through the hole in the counter.",!1,0)
B.aG0=new A.nc("vhot","valve","Hot shut-off valve (left)",D.T,y.g,!0,0)
B.aFZ=new A.nc("vcold","valve","Cold shut-off valve (right)",D.T,y.g,!0,0)
B.dbZ=w(["vhot","faucet"],x.s)
B.aG1=new A.nc("hhot","hosehot","Hot supply hose",B.dbZ,"The hose joins the hot valve to the faucet, so the valve and the faucet must be there first.",!1,2)
B.dbW=w(["vcold","faucet"],x.s)
B.aG_=new A.nc("hcold","hosecold","Cold supply hose",B.dbW,"The hose joins the cold valve to the faucet, so the valve and the faucet must be there first.",!1,2)
B.aFX=new A.nc("tail","tail","Tailpiece",D.T,"The tailpiece hangs from the sink drain. It is the first piece of the drain.",!1,0)
B.daW=w(["tail"],x.s)
B.aG2=new A.nc("trap","trap","P-trap",B.daW,"The P-trap joins the tailpiece. Build the drain from the top down.",!1,1)
B.db3=w(["trap"],x.s)
B.aG3=new A.nc("arm","arm","Trap arm",B.db3,"The trap arm joins the trap and goes into the wall.",!1,1)
B.cMV=w([B.e2E,B.e2C,B.e2z,B.e2D,B.e2A,B.e2B,B.aFY,B.aG0,B.aFZ,B.aG1,B.aG_,B.aFX,B.aG2,B.aG3],x.F)
B.e8f=new A.Wa("bathroom","Bathroom",B.cMV,"Fit out a bathroom: a toilet and a sink with its faucet, supply hoses and drain.")
B.d4u=w([B.aFY,B.aG0,B.aFZ,B.aG1,B.aG_,B.aFX,B.aG2,B.aG3],x.F)
B.e8g=new A.Wa("kitchen","Kitchen",B.d4u,"Fit out a kitchen sink: the faucet, the hot and cold supplies and the drain.")
B.auY=w([B.e8f,B.e8g],C.ax("O<Wa>"))
B.byn=new A.mi(21,"LOAD hot (brass, taped)",D.Id,!0,"load")
B.byp=new A.mi(22,"LINE hot (brass)",B.Ie,!1,"hot")
B.byo=new A.mi(23,"LOAD neutral (silver, taped)",D.Id,!0,"load")
B.byh=new A.mi(24,"LINE neutral (silver)",B.Ic,!1,"neutral")
B.cSx=w([B.byn,B.byp,B.byo,B.byh,B.aiB],x.r)
B.fx5=new A.E(8.2,0.9,-6.3)
B.fEW=new A.E(8.2,-0.1,-6.3)
B.fyO=new A.E(8.2,-0.1,-7.85)
B.cSQ=w([B.fx5,B.fEW,B.fyO],x.o)
B.eeD=new C.y(-4.5,10)
B.eth=new C.y(4.5,10)
B.ewh=new C.y(-4.5,-10)
B.etd=new C.y(4.5,-10)
B.cT0=w([B.eeD,B.eth,B.ewh,B.etd],x.f)
B.cT1=w([-0.28,0.28],x.n)
B.est=new C.y(-34,-6)
B.eck=new C.y(30,10)
B.esm=new C.y(-10,24)
B.cU1=w([B.est,B.eck,B.esm],x.f)
B.bx6=new A.Dm("Oak",B.As,"wood")
B.bx8=new A.Dm("Dark wood",B.x5,"wood")
B.aeI=new C.w(1,0.5529411764705883,0.5647058823529412,0.5882352941176471,D.t)
B.bxa=new A.Dm("Grey carpet",B.aeI,"carpet")
B.bhh=new C.w(1,0.3568627450980392,0.4980392156862745,0.6509803921568628,D.t)
B.bx7=new A.Dm("Blue carpet",B.bhh,"carpet")
B.beY=new C.w(1,0.8470588235294118,0.803921568627451,0.7058823529411765,D.t)
B.bx4=new A.Dm("Cream carpet",B.beY,"carpet")
B.bx9=new A.Dm("White tile",B.VU,"tile")
B.bx5=new A.Dm("Slate tile",B.abL,"tile")
B.avk=w([B.bx6,B.bx8,B.bxa,B.bx7,B.bx4,B.bx9,B.bx5],C.ax("O<Dm>"))
B.fEP=new A.E(3,3.2,-7.85)
B.fHn=new A.E(3,4,-7.85)
B.fGR=new A.E(3,4.2,-7.4)
B.fyd=new A.E(3,3.95,-7)
B.cW9=w([B.fEP,B.fHn,B.fGR,B.fyd],x.o)
B.cWb=w(["The sink leaks and there is water on the floor. Please fix the plumbing.","The toilet is not connected and the water is running everywhere. Help!","There is no water at my sink and the pipes are open. Can a plumber come?"],x.s)
B.fFe=new A.E(6,0.2,0)
B.fE_=new A.E(6,2.6,0)
B.aS8=new A.E(8.6,2.6,0)
B.cXn=w([B.fFe,B.fE_,B.aS8],x.o)
B.esx=new C.y(-7,-7)
B.ef2=new C.y(7,-7)
B.esw=new C.y(-7,7)
B.ef1=new C.y(7,7)
B.cY2=w([B.esx,B.ef2,B.esw,B.ef1],x.f)
B.cY4=w([-2.4,2.4],x.n)
B.cYl=w([-1.6,1.6],x.n)
B.aee=new C.w(1,0.14901960784313725,0.14901960784313725,0.16470588235294117,D.t)
B.fIK=new A.zM("blackLine","Black \xb7 from the breaker",B.aee,D.c,"hot")
B.bcQ=new C.w(1,0.22745098039215686,0.1803921568627451,0.1803921568627451,D.t)
B.fIN=new A.zM("blackLoad","Black \xb7 to the light",B.bcQ,D.c,"hot")
B.aSo=new A.zM("ground","Bare copper \xb7 ground",B.x1,D.c,"ground")
B.cYo=w([B.fIK,B.fIN,B.aSo],x.J)
B.b7v=new C.w(1,0.9294117647058824,0.9019607843137255,0.8392156862745098,D.t)
B.b5N=new C.w(1,0.9137254901960784,0.8274509803921568,0.8274509803921568,D.t)
B.b53=new C.w(1,0.8352941176470589,0.8941176470588236,0.8156862745098039,D.t)
B.ad5=new C.w(1,0.9529411764705882,0.8901960784313725,0.6549019607843137,D.t)
B.b9K=new C.w(1,0.7254901960784313,0.7647058823529411,0.8666666666666667,D.t)
B.bhp=new C.w(1,0.5607843137254902,0.6392156862745098,0.6588235294117647,D.t)
B.avx=w([B.b7v,B.VE,B.b5N,B.b53,B.ad5,B.b9K,B.ada,B.bhp],x.O)
B.ail=new A.qT(4,"deadOutlet")
B.d_A=w([B.YY,B.YZ,B.Ma,B.Mb,B.ail,B.Z1,B.Z2,B.Z3,B.Z4,B.Z5,B.Z_,B.Z0],C.ax("O<qT>"))
B.d02=w([y.r,"Find the LINE and LOAD screws. LOAD is covered with yellow tape. Leave it covered unless you feed another outlet.",y.x,"Fasten the white wire to the silver LINE screw.","Fasten the black wire to the brass LINE screw.","Push the GFCI into the box and put the plate on.","Turn the power on, press RESET, then press TEST. It must click off."],x.s)
B.d0B=w([0.1,8.05],x.n)
B.fCw=new A.E(-0.35,11,-3.4)
B.fBn=new A.E(-0.35,3.2,-3.2)
B.fE6=new A.E(-0.35,2.2,-1.9)
B.fAi=new A.E(-0.35,0.7,-1.5)
B.d0P=w([B.fCw,B.fBn,B.fE6,B.fAi],x.o)
B.fGK=new A.E(5.2,7.5,-7.85)
B.fDW=new A.E(5.2,4,-7.85)
B.d0V=w([B.fGK,B.fDW],x.o)
B.foe=new C.x("\ud83c\udfd8",null,D.SJ,null,null,null,null,null,null,null,null,null)
B.eT1=new C.G(!0,D.mK,null,null,null,null,19,D.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fgM=new C.x("Community",null,B.eT1,null,null,null,null,null,null,null,null,null)
B.f74=new C.x("The people who live in the house get hungry and sick, and their wiring and plumbing break. Look after them and answer their calls for help.",null,E.D3,null,D.L,null,null,null,null,null,null,null)
B.d0X=w([B.foe,D.an,B.fgM,D.cX,B.f74],x.p)
B.a8f=new A.kW("look","Look",D.fa)
B.fLy=new A.kW("wall","Wall box",N.ajS)
B.fLx=new A.kW("ceiling","Ceiling box",D.qS)
B.fLH=new A.kW("fanbox","Fan box",S.MG)
B.fLO=new A.kW("drill","Drill",D.xN)
B.fLI=new A.kW("cable","Cable roll",E.ajH)
B.d38=w([B.a8f,B.fLy,B.fLx,B.fLH,B.fLO,B.fLI],x.b)
B.fLN=new A.kW("sheet","Drywall sheet",D.Bu)
B.fLB=new A.kW("knife","Drywall saw",D.FE)
B.fLz=new A.kW("screw","Screw gun",V.FO)
B.fLQ=new A.kW("tape","Tape",D.tL)
B.fLM=new A.kW("mud","Mud",A1.a_7)
B.fLU=new A.kW("sand","Sander",D.FC)
B.bDB=new C.a0(985109,"MaterialIcons",!1)
B.fLF=new A.kW("paint","Roller",B.bDB)
B.d_I=w([B.a8f,B.fLN,B.fLB,B.fLz,B.fLQ,B.fLM,B.fLU,B.fLF],x.b)
B.fLJ=new A.kW("tester","Voltage tester",D.qX)
B.akB=new C.a0(983223,"MaterialIcons",!1)
B.fLR=new A.kW("outlet","Outlet",B.akB)
B.fLD=new A.kW("gfci","GFCI",D.tS)
B.fLP=new A.kW("switch","Switch",E.Nh)
B.fLL=new A.kW("light","Light",D.qZ)
B.bDz=new C.a0(985094,"MaterialIcons",!1)
B.fLG=new A.kW("fan","Fan",B.bDz)
B.fLK=new A.kW("tv","TV",W.akZ)
B.bBQ=new C.a0(63571,"MaterialIcons",!1)
B.fLE=new A.kW("lamp","Lamp",B.bBQ)
B.bAD=new C.a0(62944,"MaterialIcons",!1)
B.fLC=new A.kW("toaster","Toaster",B.bAD)
B.bBc=new C.a0(63209,"MaterialIcons",!1)
B.fLT=new A.kW("hairdryer","Hair dryer",B.bBc)
B.fLS=new A.kW("flip","Flip switch",E.Nh)
B.fLA=new A.kW("unplug","Unplug",B.akA)
B.d5G=w([B.a8f,B.fLJ,B.fLR,B.fLD,B.fLP,B.fLL,B.fLG,B.fLK,B.fLE,B.fLC,B.fLT,B.fLS,B.fLA],x.b)
B.d0Z=w([B.d38,B.d_I,B.d5G],C.ax("O<aj<kW>>"))
B.aRS=new A.E(0,15.5,-3.6)
B.fCG=new A.E(0,20,-3.6)
B.fHc=new A.E(0,22.5,-2)
B.fB4=new A.E(0,22.5,1.1999999999999997)
B.fCM=new A.E(0,21.1,1.6)
B.d1u=w([B.aRS,B.fCG,B.fHc,B.fB4,B.fCM],x.o)
B.GQ=w([],x.E)
B.d23=w([],x.T)
B.avV=w([],x.I)
B.vH=w([],x.h)
B.d2b=w([],x.o)
B.d24=w([],x.a)
B.ej8=new C.y(-1.6,3.5)
B.eiM=new C.y(1.6,3.5)
B.ekD=new C.y(-1.6,-3.5)
B.ehu=new C.y(1.6,-3.5)
B.d2k=w([B.ej8,B.eiM,B.ekD,B.ehu],x.f)
B.d35=w(["Look at the pieces: the tailpiece, the P-trap and the trap arm. Pick the tailpiece first and tap its glowing outline under the sink.","Pick the P-trap (the U-shaped bend) and tap its glowing outline. It joins the tailpiece.","Pick the trap arm and tap its outline. It joins the trap to the wall drain.","Slide each slip nut up to its joint and hand tighten it: tap the nuts.","Run the water and look for leaks. The U-bend keeps a plug of water that blocks sewer gas."],x.s)
B.fjn=new C.x("\u2728",null,D.aO6,null,null,null,null,null,null,null,null,null)
B.ftg=new C.x("Nobody needs help right now.",null,D.fN,null,D.L,null,null,null,null,null,null,null)
B.f4a=new C.G(!0,D.aR,null,null,null,null,13,null,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.flB=new C.x("Everybody's wiring and plumbing works. Keep an eye on food and health: things break when you least expect it.",null,B.f4a,null,D.L,null,null,null,null,null,null,null)
B.d3u=w([B.fjn,D.P,B.ftg,D.at,B.flB],x.p)
B.aw7=w(["rug","road","roadturn","roadtee","roadcross","pond","flowers"],x.s)
B.fys=new A.E(11.4,4.6,-6)
B.fCV=new A.E(11.4,5,-7.85)
B.fAj=new A.E(2.6,5,-7.85)
B.fAB=new A.E(2.6,3.4,-7.85)
B.d3Q=w([B.fys,B.fCV,B.fAj,B.fAB],x.o)
B.d3U=w([H.mw,K.RP],x.f)
B.d3V=w(["hot","cold"],x.s)
B.fIM=new A.zM("black","Black \xb7 hot",B.aee,D.c,"hot")
B.fIL=new A.zM("white","White \xb7 neutral",B.wL,D.aB,"neutral")
B.PV=w([B.fIM,B.fIL,B.aSo],x.J)
B.efT=new C.y(-3.5,4)
B.ems=new C.y(3.5,4)
B.ehW=new C.y(-3.5,-4)
B.eaS=new C.y(3.5,-4)
B.d4l=w([B.efT,B.ems,B.ehW,B.eaS],x.f)
B.ew6=new C.y(-2.4,5)
B.enK=new C.y(2.4,5)
B.ela=new C.y(-2.4,-5)
B.ejY=new C.y(2.4,-5)
B.d4p=w([B.ew6,B.enK,B.ela,B.ejY],x.f)
B.ezP=new C.bv(-6,-4,D.bV)
B.eyx=new C.bv(5,-5,D.cn)
B.ezN=new C.bv(0,1,D.ay)
B.eAf=new C.bv(-5,5,D.by)
B.exP=new C.bv(6,4,D.c)
B.d58=w([B.ezP,B.eyx,B.ezN,B.eAf,B.exP],C.ax("O<+(N,N,w)>"))
B.d5A=w([H.mw,H.ll],x.f)
B.erW=new C.y("Slab","First the concrete slab (the foundation) is poured and left to cure. Every wall sits on it.")
B.eu3=new C.y("Framing","The carpenters build the wall frames from 2x4 studs, spaced 16 inches apart, with plates on the top and bottom.")
B.ejH=new C.y("Plumbing rough-in","The plumber runs the hot (red) and cold (blue) water lines and the white drain pipes inside the walls and floor before anything is closed up.")
B.eqb=new C.y("Electrical rough-in","The electrician runs the yellow and white cables from the breaker panel to every box, and fixes the boxes to the studs.")
B.ere=new C.y("Drywall","Drywall covers the frame. Here it is see-through so you can still look at the pipes and wires behind it.")
B.ek7=new C.y("Fixtures","Last come the outlets, switches, light, sink, toilet and water heater. This is where most repairs happen.")
B.ell=new C.y("Roof","The roof goes on to keep everything dry. It is see-through here so you can keep looking inside.")
B.d5S=w([B.erW,B.eu3,B.ejH,B.eqb,B.ere,B.ek7,B.ell],x.L)
B.eso=new C.y(-17,-9)
B.ebk=new C.y(17,-9)
B.esn=new C.y(-17,9)
B.ebj=new C.y(17,9)
B.d6r=w([B.eso,B.ebk,B.esn,B.ebj],x.f)
B.d6x=w([-14,14],x.n)
B.awp=w([-26,26],x.n)
B.d6B=w([-30,-10,10,30],x.n)
B.d6C=w([-32,-8,34],x.n)
B.d6D=w([-3,3],x.n)
B.o0=w([-72,-24,24],x.t)
B.d6F=w([-80,80],x.n)
B.d6I=w([-90,-52,52,90],x.n)
B.aws=w([-9,9],x.n)
B.fAn=new A.E(8.2,5,-7.85)
B.fDZ=new A.E(8.2,1.2,-7.85)
B.fFv=new A.E(8.2,1,-7.4)
B.d8d=w([B.fAn,B.fDZ,B.fFv],x.o)
B.dYT={hot:0}
B.aLX=new C.eX(B.dYT,1,x.M)
B.e8d=new A.Er(61,"Hot shut-off valve (left)",B.aLX,"Hot is always on the LEFT. The red hose goes on the left valve.")
B.dYH={cold:0}
B.aM4=new C.eX(B.dYH,1,x.M)
B.e8e=new A.Er(62,"Cold shut-off valve (right)",B.aM4,"Cold is always on the RIGHT. The blue hose goes on the right valve.")
B.e8b=new A.Er(63,"Hot faucet inlet (left)",B.aLX,"The left faucet inlet takes the hot (red) hose.")
B.e8c=new A.Er(64,"Cold faucet inlet (right)",B.aM4,"The right faucet inlet takes the cold (blue) hose.")
B.a2o=w([B.e8d,B.e8e,B.e8b,B.e8c],C.ax("O<Er>"))
B.a2q=w([-72,-48,-24,0,24],x.t)
B.d9w=w(["1 Rough-in","2 Drywall","3 Devices"],x.s)
B.awP=w(["road","roadturn","roadtee","roadcross"],x.s)
B.ey7=new C.bv("hot","Hot hose (red)",B.t7)
B.eyN=new C.bv("cold","Cold hose (blue)",B.nF)
B.dar=w([B.ey7,B.eyN],C.ax("O<+(n,n,w)>"))
B.ecm=new C.y(34,40)
B.fL0=new A.Jl(B.ecm,3.141592653589793,2.6,"Washing hands at the sink",!1,!1,!1,"")
B.dat=w([B.fL0],x.a)
B.a7V=new A.E(15,2.6,0)
B.a2t=w([B.aS8,B.a7V],x.o)
B.daX=w(["tail","trap","arm"],x.s)
B.GU=w(["tv","lamp","toaster","hairdryer"],x.s)
B.dbB=w([y.r,"Hold the fixture up to the ceiling box. It has three short wires: black, white and green.","Join the house ground wire to the fixture ground.","Join the house white wire to the fixture white wire with a wire nut.","Join the house black wire to the fixture black wire with a wire nut.","Push the wires into the box and fasten the fixture to the ceiling.",y.E],x.s)
B.dbJ=w([30,60,120,180,300],x.t)
B.bQz=new A.jy("Breaker off, then test","Before you touch any wire, switch its breaker OFF, then check with a voltage tester that the wire is dead. A switch on the wall is not enough.")
B.bQm=new A.jy("Lock out, tag out","On a real job you put a lock or a note on the panel so nobody switches the power back on while you work.")
B.bQG=new A.jy("Water and power","Water carries electricity. Near sinks, tubs and outdoors the outlets must be GFCI, and wet hands never touch wires.")
B.bQr=new A.jy("Eyes, ears, lungs","Safety glasses for drilling and cutting, ear protection for loud tools, and a mask when you sand drywall dust or cut tile.")
B.bQF=new A.jy("Shut the water off","Before you cut or loosen a pipe, close the main water valve and open a faucet to drain the line.")
B.d5m=w([B.bQz,B.bQm,B.bQG,B.bQr,B.bQF],x.Z)
B.bQS=new A.M8("Safety first","\ud83e\uddba",D.cj,B.d5m)
B.bQH=new A.jy("Wire colours","Black is hot (it carries the power), white is neutral (the way back), bare copper or green is ground (the safety path). Red is a second hot, often used for a switched line.")
B.bQO=new A.jy("Screw colours","On an outlet the brass screw takes the hot wire, the silver screw takes the neutral and the green screw takes the ground.")
B.bQB=new A.jy("Wire size","14 gauge wire is for 15 amp circuits (lights and outlets). 12 gauge is for 20 amp circuits (kitchens). A thinner wire than the breaker allows can overheat and start a fire.")
B.bQv=new A.jy("Breakers","A breaker is a safety switch. It trips when a circuit carries too much current, so the wires never get hot enough to burn.")
B.bQJ=new A.jy("Wire nuts","Strip about 3/4 inch, twist the bare ends together clockwise, and screw on the nut until no bare copper shows. Give each wire a gentle tug.")
B.bQP=new A.jy("Switches","A switch cuts the hot wire only. The neutral goes straight through to the light.")
B.bQQ=new A.jy("GFCI","A GFCI outlet watches the current going out and coming back. If a little leaks (through water or a person) it cuts the power in a fraction of a second.")
B.bQo=new A.jy("Ceiling fans","A fan shakes and is heavy. It needs a box that says fan rated, fixed to the joist, not a plain light box.")
B.bQq=new A.jy("Heights","Outlets sit about 16 inches from the floor. Switches sit about 48 inches up, where your hand falls.")
B.cZc=w([B.bQH,B.bQO,B.bQB,B.bQv,B.bQJ,B.bQP,B.bQQ,B.bQo,B.bQq],x.Z)
B.bQV=new A.M8("Wiring basics","\u26a1",D.cn,B.cZc)
B.bQn=new A.jy("Hot left, cold right","On a faucet, hot is on the left and cold on the right. Hot lines are marked red and cold lines blue.")
B.bQA=new A.jy("The P-trap","The curved pipe under a sink always holds a little water. That water seal stops sewer gas coming up the drain.")
B.bQL=new A.jy("Shut-off valves","Every sink and toilet has its own small valve, so you can stop the water to one fixture without turning off the whole house.")
B.bQt=new A.jy("Slip nuts","Drain joints are sealed by a washer and a slip nut. Tighten by hand and a quarter turn: too much force cracks plastic.")
B.bQs=new A.jy("Wax ring","A toilet sits on a wax ring that seals it to the floor drain. A toilet is lowered straight down once, and cannot be slid around.")
B.bQI=new A.jy("Drain slope","Drains fall about 1/4 inch per foot so water and waste keep moving. Too flat and it clogs, too steep and the water leaves the solids behind.")
B.bQN=new A.jy("Order of work","Plumbing goes from the top down on the drain (tailpiece, trap, arm) and from the wall out on the supply (valve, hose, fixture).")
B.c7o=w([B.bQn,B.bQA,B.bQL,B.bQt,B.bQs,B.bQI,B.bQN],x.Z)
B.bQT=new A.M8("Plumbing basics","\ud83d\udeb0",D.cs,B.c7o)
B.bQp=new A.jy("Studs","Studs are the vertical 2x4 posts inside a wall, 16 inches apart from centre to centre. Everything is fixed to them.")
B.bQD=new A.jy("Drilling studs","Holes for cable go through the middle of the stud, so a nail or screw cannot reach the wire.")
B.bQu=new A.jy("Drywall","A sheet is 4 feet wide, so its edges land on studs 48 inches apart. Screws go into studs only, just under the paper.")
B.bQx=new A.jy("Taping and mud","Seams get paper tape and three thin coats of joint compound, sanded smooth between coats, then primer and paint.")
B.bQM=new A.jy("Order of a build","Frame, run the pipes and wires (rough-in), inspect, hang drywall, finish it, paint, then fit the fixtures and devices.")
B.cLj=w([B.bQp,B.bQD,B.bQu,B.bQx,B.bQM],x.Z)
B.bQR=new A.M8("Framing and walls","\ud83c\udfe0",D.dT,B.cLj)
B.bQy=new A.jy("Voltage tester","A pen that glows or beeps near live wires. Test it on a known live outlet first, so you know it works.")
B.bQE=new A.jy("Wire strippers","Strip the plastic off without nicking the copper. A nick weakens the wire.")
B.bQK=new A.jy("Adjustable wrench","For nuts on valves and hoses. Hold the fitting steady with a second wrench so you do not twist the pipe.")
B.bQC=new A.jy("Drill and screw gun","A drill makes holes through studs. A screw gun sets drywall screws to the right depth.")
B.bQw=new A.jy("Level and tape measure","Measure twice, cut once. A level makes sure outlets, shelves and pipes are straight.")
B.dcQ=w([B.bQy,B.bQE,B.bQK,B.bQC,B.bQw],x.Z)
B.bQU=new A.M8("Tools","\ud83e\uddf0",D.bt,B.dcQ)
B.dcu=w([B.bQS,B.bQV,B.bQT,B.bQR,B.bQU],C.ax("O<M8>"))
B.byl=new A.mi(21,"Brass screw (top): HOT side",B.Ie,!1,"hot")
B.byk=new A.mi(22,"Brass screw (bottom): HOT side",B.Ie,!1,"hot")
B.bym=new A.mi(23,"Silver screw (top): NEUTRAL side",B.Ic,!1,"neutral")
B.byq=new A.mi(24,"Silver screw (bottom): NEUTRAL side",B.Ic,!1,"neutral")
B.bye=new A.mi(25,"Green screw: GROUND",B.S9,!1,"ground")
B.dcv=w([B.byl,B.byk,B.bym,B.byq,B.bye],x.r)
B.dcL=w(["Cream","Sky","Blush","Mint","Butter","Periwinkle","White","Slate"],x.s)
B.dcW=w([0.72,-0.72],x.n)
B.egi=new C.y("outlet","\ud83d\udd0c Outlet")
B.et8=new C.y("gfci","\ud83d\udee1\ufe0f GFCI outlet")
B.epy=new C.y("switch","\ud83d\udca1 Light switch")
B.ddd=w([B.egi,B.et8,B.epy],x.L)
B.ddn=w(["inspect","hand","screwdriver","pliers","wrench","crimper","plunger","flapper","newoutlet","patch"],x.s)
B.dem=w(["Look under the sink. The wall has two shut-off valves: hot on the LEFT (red handle) and cold on the RIGHT (blue handle).","Pick the red hot hose. Tap the left shut-off valve, then the left faucet inlet.","Pick the blue cold hose. Tap the right shut-off valve, then the right faucet inlet.","Open the valves slowly and turn on the faucet. Check every connection for drips."],x.s)
B.dYR={flange:0,wax:1,toilet:2,bolts:3,valve:4,hosehot:5,hosecold:6,faucet:7,tail:8,trap:9,arm:10}
B.dgA=new C.bo(B.dYR,["Flange","Wax ring","Toilet","Bolts","Shut-off valve","Hot hose","Cold hose","Faucet","Tailpiece","P-trap","Trap arm"],x.w)
B.dYp={xbot:0,michelle:1,soldier:2}
B.a2Z=new C.bo(B.dYp,["assets/avatars/Xbot.glb","assets/avatars/Michelle.glb","assets/avatars/Soldier.glb"],x.w)
B.bwu=new A.u2("The living room has no power at all.","The living room breaker is sitting in the middle (orange). It has tripped. Flip it fully OFF and ON again, by hand.","hand","Breaker reset. The living room has power again.",72,0,"")
B.bwE=new A.u2("There is no hot water.","The water heater breaker has tripped (orange). Reset it by hand.","hand","Breaker reset. The water heater is heating again.",75,0,"")
B.bwB=new A.u2("Water is dripping under the kitchen sink.","The slip nut on the P-trap is loose and the joint drips. Tighten it with the wrench.","wrench","Slip nut tightened. The drip stopped.",87,0,"")
B.bwt=new A.u2("There is a wet spot on the wall behind the kitchen.","A crimped joint in the hot water line is leaking. A crimp joint is squeezed with a crimping tool, not tightened with a wrench.","crimper","The joint is crimped again and it does not leak.",96,0,"")
B.bwy=new A.u2("The outlet by the sofa does not work, but the lights do.","The tester finds power at the box but the outlet is dead: a screw on the outlet has come loose. Turn the breaker off first, then tighten the screws with the screwdriver.","screwdriver","You tightened the loose screw. The outlet works again.",81,72,"Turn the living room breaker OFF first.")
B.bwv=new A.u2("The living room light flickers.","A wire nut in the light box has worked loose. Turn the breaker off, then twist the wire nut tight with the pliers.","pliers","You twisted the wire nut tight. The light is steady.",83,72,"Turn the living room breaker OFF first.")
B.bww=new A.u2("The kitchen outlet sparks and smells burnt.","The outlet has burnt. Turn the breaker off and replace it with a new outlet.","newoutlet","New outlet fitted. No more sparks.",84,73,"Turn the kitchen breaker OFF first.")
B.bwC=new A.u2("The kitchen outlets are dead.","The GFCI outlet has tripped. Press its RESET button by hand.","hand","You pressed RESET. The kitchen outlets work.",84,0,"")
B.bwx=new A.u2("The toilet keeps running.","The rubber flapper in the tank no longer seals, so water leaks into the bowl all the time. Replace the flapper.","flapper","New flapper fitted. The toilet stops running.",88,0,"")
B.bwA=new A.u2("The kitchen faucet drips.","The faucet washer is worn. Tighten the packing nut with the wrench, then check.","wrench","The faucet is sealed. No more drips.",85,0,"")
B.bwz=new A.u2("There is a hole in the wall.","A hole in the drywall. Stick a drywall patch over it, then tape, mud, sand and paint it.","patch","Patch fitted. Now it only needs mud, sanding and paint.",95,0,"")
B.bwD=new A.u2("The kitchen sink drains very slowly.","The drain is clogged. Use the plunger.","plunger","The clog is gone. The sink drains fast.",94,0,"")
B.vL=new C.dS([B.YY,B.bwu,B.YZ,B.bwE,B.Ma,B.bwB,B.Mb,B.bwt,B.ail,B.bwy,B.Z1,B.bwv,B.Z2,B.bww,B.Z3,B.bwC,B.Z4,B.bwx,B.Z5,B.bwA,B.Z_,B.bwz,B.Z0,B.bwD],C.ax("dS<qT,u2>"))
B.dip=new C.bo(D.ie,[],C.ax("bo<H,d0>"))
B.dYP={tail:0,trap:1,arm:2}
B.diE=new C.bo(B.dYP,["Tailpiece","P-trap","Trap arm"],x.w)
B.aF8={xbot:0,michelle:1,soldier:2,human:3}
B.aCI=new C.bo(B.aF8,["\ud83e\udd16 X Bot","\ud83d\udc83 Dancer","\ud83e\ude96 Soldier","\ud83d\ude42 Person"],x.w)
B.abD=new C.w(1,0.9137254901960784,0.9215686274509803,0.9372549019607843,D.t)
B.bcO=new C.w(1,0.8549019607843137,0.8666666666666667,0.8901960784313725,D.t)
B.e7p=new A.uy(B.abD,E.ab7,B.abD,B.bcO,"xbot")
B.bez=new C.w(1,0.0784313725490196,0.047058823529411764,0.03137254901960784,D.t)
B.e7q=new A.uy(B.aeG,B.bez,D.cC,D.aB,"michelle")
B.biR=new C.w(1,0.8509803921568627,0.6470588235294118,0.48627450980392156,D.t)
B.bhT=new C.w(1,0.3568627450980392,0.4196078431372549,0.22745098039215686,D.t)
B.b8q=new C.w(1,0.5411764705882353,0.4823529411764706,0.3333333333333333,D.t)
B.e7o=new A.uy(B.biR,D.KA,B.bhT,B.b8q,"soldier")
B.a4N=new A.uy(B.abb,B.acU,B.aeQ,B.Ve,"human")
B.diI=new C.bo(B.aF8,[B.e7p,B.e7q,B.e7o,B.a4N],C.ax("bo<n,uy>"))
B.dXz={bed:0,nightstand:1,wardrobe:2,desk:3,rug:4,sofa:5,armchair:6,coffee:7,tvstand:8,dining:9,chair:10,plant:11,lamp:12,console:13,shelf:14,tree:15,pine:16,bush:17,flowers:18,fence:19,lamppost:20,bench:21,car:22,road:23,roadturn:24,roadtee:25,roadcross:26,house2:27,shop:28,hospital:29,firestation:30,school:31,firetruck:32,ambulance:33,dog:34,cat:35,cow:36,sheep:37,chicken:38,horse:39,pond:40,swing:41,shed:42,doghouse:43}
B.bxD=new A.hk("Bed","\ud83d\udecf\ufe0f",60,80)
B.bxO=new A.hk("Night table","\ud83e\ude91",16,16)
B.bxV=new A.hk("Wardrobe","\ud83d\udeaa",44,20)
B.bxA=new A.hk("Desk","\ud83d\udda5\ufe0f",48,24)
B.bxh=new A.hk("Rug","\ud83d\udfe5",70,50)
B.bxH=new A.hk("Sofa","\ud83d\udecb\ufe0f",80,32)
B.bxT=new A.hk("Armchair","\ud83d\udcba",30,30)
B.bxv=new A.hk("Coffee table","\u2615",40,24)
B.bxP=new A.hk("TV stand","\ud83d\udcfa",56,18)
B.bxo=new A.hk("Dining table","\ud83c\udf7d\ufe0f",56,36)
B.bxr=new A.hk("Chair","\ud83e\ude91",18,18)
B.bxQ=new A.hk("Plant","\ud83e\udeb4",14,14)
B.bxJ=new A.hk("Floor lamp","\ud83d\udca1",10,10)
B.bxB=new A.hk("Console table","\ud83d\uddc4\ufe0f",44,14)
B.bxM=new A.hk("Bookshelf","\ud83d\udcda",36,12)
B.bxU=new A.hk("Tree","\ud83c\udf33",36,36)
B.bxx=new A.hk("Pine tree","\ud83c\udf32",30,30)
B.bxm=new A.hk("Bush","\ud83c\udf3f",18,18)
B.bxG=new A.hk("Flowers","\ud83c\udf37",22,22)
B.bxi=new A.hk("Fence","\ud83d\udea7",64,6)
B.bxp=new A.hk("Street lamp","\ud83c\udfee",8,8)
B.bxC=new A.hk("Bench","\ud83e\ude91",44,16)
B.bxj=new A.hk("Car","\ud83d\ude97",84,40)
B.bxu=new A.hk("Road","\ud83d\udee3\ufe0f",40,40)
B.bxl=new A.hk("Road corner","\u21aa\ufe0f",40,40)
B.bxW=new A.hk("Road T-junction","\u22a4",40,40)
B.bxw=new A.hk("Crossroads","\u271a",40,40)
B.bxI=new A.hk("House","\ud83c\udfe0",72,60)
B.bxg=new A.hk("Shop","\ud83c\udfea",84,60)
B.bxs=new A.hk("Hospital","\ud83c\udfe5",110,70)
B.bxF=new A.hk("Fire station","\ud83d\ude92",90,64)
B.bxy=new A.hk("School","\ud83c\udfeb",124,70)
B.bxN=new A.hk("Fire truck","\ud83d\ude92",96,40)
B.bxz=new A.hk("Ambulance","\ud83d\ude91",84,40)
B.bxq=new A.hk("Dog","\ud83d\udc15",22,10)
B.bxt=new A.hk("Cat","\ud83d\udc08",16,8)
B.bxK=new A.hk("Cow","\ud83d\udc04",38,16)
B.bxn=new A.hk("Sheep","\ud83d\udc11",26,14)
B.bxL=new A.hk("Chicken","\ud83d\udc14",12,8)
B.bxk=new A.hk("Horse","\ud83d\udc0e",46,16)
B.bxR=new A.hk("Pond","\ud83d\udca7",80,56)
B.bxE=new A.hk("Swing set","\ud83c\udfa0",56,40)
B.bxS=new A.hk("Shed","\ud83d\uded6",50,42)
B.bxX=new A.hk("Dog house","\ud83d\udc15",24,22)
B.pW=new C.bo(B.dXz,[B.bxD,B.bxO,B.bxV,B.bxA,B.bxh,B.bxH,B.bxT,B.bxv,B.bxP,B.bxo,B.bxr,B.bxQ,B.bxJ,B.bxB,B.bxM,B.bxU,B.bxx,B.bxm,B.bxG,B.bxi,B.bxp,B.bxC,B.bxj,B.bxu,B.bxl,B.bxW,B.bxw,B.bxI,B.bxg,B.bxs,B.bxF,B.bxy,B.bxN,B.bxz,B.bxq,B.bxt,B.bxK,B.bxn,B.bxL,B.bxk,B.bxR,B.bxE,B.bxS,B.bxX],C.ax("bo<n,hk>"))
B.fF9=new A.E(0,0,-1.2)
B.dWy=new A.d0("Electrical box","The box is ready. Pull a cable to it, then wire a device.",B.fF9,9)
B.dj1=new C.dS([3,B.dWy],C.ax("dS<H,d0>"))
B.aF_={inspect:0,hand:1,screwdriver:2,pliers:3,wrench:4,crimper:5,plunger:6,flapper:7,newoutlet:8,patch:9}
B.Qt=new C.bo(B.aF_,["Look and test","Hand","Screwdriver","Pliers","Wrench","Crimp tool","Plunger","New flapper","New outlet","Drywall patch"],x.w)
B.bAY=new C.a0(63072,"MaterialIcons",!1)
B.dj5=new C.bo(B.aF_,[D.fa,B.al9,V.FO,D.FE,D.qU,B.bAY,Z.a_D,D.pR,B.akB,R.vn],C.ax("bo<n,a0>"))
B.djV=new A.B_(18,50,0,20)
B.djW=new A.B_(-126,126,-66,5)
B.djX=new A.B_(-4,16,0,24)
B.aDH=new A.TZ(null)
B.aDI=new A.a5Z(null)
B.aDS=new A.N4(!1,"","",null)
B.fGV=new A.E(16,2.6,0)
B.dWh=new A.d0("Wall drain","The pipe stub that comes out of the wall. The trap arm slides into it.",B.fGV,8)
B.fxQ=new A.E(0,3,-6)
B.dWi=new A.d0("Wall","The copper supply pipes come out of the wall here.",B.fxQ,24)
B.fEL=new A.E(8.2,1,-7)
B.dWj=new A.d0("Toilet","The tank fills from the cold supply on the wall. The bowl drains into the white pipe in the floor.",B.fEL,7)
B.fxb=new A.E(0,0,40)
B.dWk=new A.d0("The room","A room to build from bare studs to finished, working electrics. The walls hold the cable, the boxes and the devices.",B.fxb,190)
B.fCr=new A.E(-2.4,11.5,-3.6)
B.dWl=new A.d0("Hot faucet inlet","The threaded tail under the faucet where the hot supply hose screws on.",B.fCr,7)
B.fzb=new A.E(-3.6,4,-7.8)
B.dWm=new A.d0("Light switch","Controls the ceiling light. Tap Open lesson to wire one.",B.fzb,4.5)
B.fDA=new A.E(0,0.5,2)
B.dWn=new A.d0("Voltage tester","A tester that glows when it touches live power.",B.fDA,6)
B.dWo=new A.d0("Pipe joint","A crimped joint in the hot water line.",B.aRB,4)
B.fCJ=new A.E(0,-0.2,0.2)
B.dWp=new A.d0("Cover plate","The plate covers the box and the edges of the drywall so nobody touches the wires.",B.fCJ,8)
B.fG8=new A.E(-4.6,0.5,-3.4)
B.dWq=new A.d0("Hot shut-off valve","The angle stop valve on the hot pipe. Turn the handle to stop the water to the faucet without shutting off the whole house. Hot is always on the left.",B.fG8,8)
B.fEi=new A.E(0,-0.3,3.2)
B.dWr=new A.d0("White wire nut: NEUTRAL","Twist the house white wire and the fixture white wire together under this cap.",B.fEi,6)
B.fDs=new A.E(4.6,0.5,-3.4)
B.dWs=new A.d0("Cold shut-off valve","The angle stop valve on the cold pipe. Cold is always on the right.",B.fDs,8)
B.fyM=new A.E(2.4,11.5,-3.6)
B.dWt=new A.d0("Cold faucet inlet","The threaded tail under the faucet where the cold supply hose screws on.",B.fyM,7)
B.fHC=new A.E(0.8,-0.8,1.2)
B.dWu=new A.d0("Black wire to the light","This black wire carries power to the light once the switch is on. It goes on the other brass screw.",B.fHC,7)
B.fCp=new A.E(10.05,5.2,-7.5)
B.dWv=new A.d0("Water heater breaker","A big circuit for the water heater. It is ON.",B.fCp,3.5)
B.aR1=new A.E(0,40,0)
B.dWw=new A.d0("Back wall",y.s,B.aR1,140)
B.fEE=new A.E(3,3.8,-7.4)
B.dWx=new A.d0("Kitchen faucet","Hot on the left, cold on the right. Tap Open lesson to connect the supply hoses.",B.fEE,4.5)
B.zs=new A.E(0,6,0)
B.dWz=new A.d0("Tailpiece","The straight pipe that hangs from the sink drain. Its bottom end is smooth so the slip nut can slide on and grip it.",B.zs,10)
B.fFW=new A.E(-60,40,50)
B.dWA=new A.d0("Left wall",y.s,B.fFW,140)
B.fzw=new A.E(3,1,0)
B.dWB=new A.d0("P-trap","The U-shaped bend. It always keeps a little water inside, and that water plug blocks sewer gas from coming back up into the house.",B.fzw,11)
B.fxw=new A.E(0,20,5)
B.dWC=new A.d0("The room","A bare room with the water supply stubs and the drain stub already in the wall and floor.",B.fxw,120)
B.fyc=new A.E(0,-8,0)
B.dWD=new A.d0("Cabinet","The cabinet under the sink where the drain is built.",B.fyc,22)
B.fx9=new A.E(0,0,150)
B.dWE=new A.d0("Lawn","The grass. Walls, floors and the sky stay as they are, but you can add things to the garden with the Furniture button.",B.fx9,400)
B.fxZ=new A.E(0,4,-8)
B.dWF=new A.d0("Wall framing","2x4 studs 16 inches apart. Pipes and cables run through holes drilled in the middle of the studs, never along the edge where a nail could hit them.",B.fxZ,18)
B.aRM=new A.E(0,-0.2,5.1)
B.dWG=new A.d0("TEST and RESET buttons","Press TEST to make the GFCI trip. Press RESET to turn it back on. Test it once a month.",B.aRM,5)
B.aQX=new A.E(0,11,0)
B.dWH=new A.d0("Sink","The sink bowl and the counter. The drain flange at the bottom is where the tailpiece starts.",B.aQX,16)
B.fO=new A.E(0,0,0)
B.dWI=new A.d0("Drywall","The wall surface. A hole is cut in it for the electrical box.",B.fO,22)
B.fAe=new A.E(60,40,50)
B.dWJ=new A.d0("Right wall",y.s,B.fAe,140)
B.fxn=new A.E(0,14,-3)
B.dWK=new A.d0("Counter and sink","The faucet is mounted through a hole in the counter.",B.fxn,20)
B.fBz=new A.E(0,-1.9,5)
B.dWL=new A.d0("GREEN screw: GROUND","The green screw is for the bare copper ground wire.",B.fBz,5)
B.fxY=new A.E(0,47,-2)
B.dWM=new A.d0("Top and bottom plate","The horizontal 2x4s at the top and the bottom of the wall. The studs stand between them.",B.fxY,70)
B.fxc=new A.E(0,0,-8)
B.dWN=new A.d0("Wall","Behind the wall the drain pipe goes down to the sewer line.",B.fxc,22)
B.fxt=new A.E(0,19,-3)
B.dWO=new A.d0("Faucet","The faucet with hot on the left (red) and cold on the right (blue).",B.fxt,14)
B.fAu=new A.E(3.5,2,-7.2)
B.dWP=new A.d0("Kitchen counter and cabinet","The cabinet under the sink is where the drain and the shut-off valves live.",B.fAu,9)
B.fBR=new A.E(10.05,5.7,-7.5)
B.dWQ=new A.d0("Kitchen breaker","Protects the kitchen outlets. It is ON.",B.fBR,3.5)
B.fCy=new A.E(4,6,-2.5)
B.dWR=new A.d0("Cold supply hose","A braided steel hose with a rubber liner and a blue band.",B.fCy,9)
B.fDy=new A.E(-1,0.6,4.3)
B.dWS=new A.d0("SILVER screw: NEUTRAL side",y.o,B.fDy,5)
B.a7R=new A.E(0,3.7,0)
B.dWT=new A.d0("Slip nut","A big plastic nut. Slide it on the pipe first, then the washer, then join the pieces and hand tighten. A rubber washer inside makes the seal.",B.a7R,7)
B.TA=new A.E(0,-1,-0.6)
B.dWU=new A.d0("Wire nut","A twist-on cap that joins wires safely. The two white wires are joined here because a switch only cuts the hot wire.",B.TA,5)
B.fCD=new A.E(-1.5,-0.3,3.2)
B.dWV=new A.d0("Black wire nut: HOT","Twist the house black wire and the fixture black wire together under this cap.",B.fCD,6)
B.fBQ=new A.E(-1.9,0,-2)
B.dWW=new A.d0("Wood stud","The 2x4 frame inside the wall. The electrical box is nailed or screwed to a stud so it cannot move.",B.fBQ,16)
B.fF8=new A.E(-1,-0.8,4.3)
B.dWX=new A.d0("SILVER screw: NEUTRAL side",y.o,B.fF8,5)
B.fHb=new A.E(6,3,-7.8)
B.dWY=new A.d0("Water and drain pipes","Red is hot water, blue is cold water (PEX tubing). The white pipes are drains. They slope down so the waste flows away.",B.fHb,14)
B.fFc=new A.E(1,0.6,4.3)
B.dWZ=new A.d0("BRASS screw: HOT side",y.u,B.fFc,5)
B.fFw=new A.E(0,-0.2,4.9)
B.dX_=new A.d0("Mounting strap (yoke)","The metal strap with two screw slots. Long screws through the ears hold the device in the box.",B.fFw,7)
B.fHz=new A.E(9.55,4.7,-7.5)
B.dX0=new A.d0("Spare breaker","A spare circuit.",B.fHz,3.5)
B.fxx=new A.E(0,20,8)
B.dX1=new A.d0("Vanity and counter","The cabinet that holds the sink. The pipes live inside it.",B.fxx,70)
B.fGE=new A.E(-3.2,1.3,-7.8)
B.dX2=new A.d0("Living room outlet","A standard outlet. Tap Open lesson to wire one in 3D.",B.fGE,4.5)
B.fFy=new A.E(1.5,-0.3,3.2)
B.dX3=new A.d0("Green ground connection","Join the bare copper house ground wire to the green fixture ground wire.",B.fFy,6)
B.fBE=new A.E(12,2.6,0)
B.dX4=new A.d0("Trap arm","The pipe that carries the waste water from the trap into the wall. It must slope down toward the wall, about 1/4 inch per foot.",B.fBE,9)
B.fDe=new A.E(0,6.5,-7.8)
B.dX5=new A.d0("Electrical cables","Cables run from the breaker panel to every outlet, switch and light. Yellow is 12 gauge for 20 amps. White is 14 gauge for 15 amps.",B.fDe,16)
B.fDO=new A.E(11.2,2.3,-6)
B.dX6=new A.d0("Water heater","Heats the water. The cold line goes in at the top and the hot line comes out at the top.",B.fDO,9)
B.fEl=new A.E(9.55,5.2,-7.5)
B.dX7=new A.d0("Bathroom breaker","Protects the bathroom. It is ON.",B.fEl,3.5)
B.fBW=new A.E(5.2,3.9,-7.8)
B.dX8=new A.d0("Kitchen GFCI outlet","Outlets near water must be GFCI. Tap Open lesson to wire one.",B.fBW,4.5)
B.fxV=new A.E(0,40,-3)
B.dX9=new A.d0("Electrical cable","Yellow 12/2 cable with ground: it carries power from the breaker panel through the holes in the studs to each box.",B.fxV,80)
B.fCn=new A.E(-8.4,1.2,-6.4)
B.dXa=new A.d0("Sofa","Just furniture, to show the size of the room.",B.fCn,10)
B.dXb=new A.d0("Outlet face","Two outlets. The short slot is hot, the long slot is neutral, and the round hole is ground.",B.aRM,6)
B.fBj=new A.E(0,4,-7.8)
B.dXc=new A.d0("Wall","The drywall of the back wall.",B.fBj,16)
B.fGH=new A.E(0,0,0.6)
B.dXd=new A.d0("Canopy","The round cover that hides the box and the wire connections against the ceiling.",B.fGH,8)
B.dXe=new A.d0("Concrete slab","The foundation. It carries the whole weight of the house. Plumbing drains are placed before it is poured.",B.fO,30)
B.fxR=new A.E(0,40,12)
B.dXf=new A.d0("Front door","Tap the door to go inside the house.",B.fxR,260)
B.a7T=new A.E(8.9,2.6,0)
B.dXg=new A.d0("Slip nut","Hand tighten it, then about a quarter turn with pliers. Over-tightening cracks the plastic.",B.a7T,7)
B.fEk=new A.E(1,-0.8,4.3)
B.dXh=new A.d0("BRASS screw: HOT side",y.u,B.fEk,5)
B.fB7=new A.E(0.6,1.5,-1.8)
B.dXi=new A.d0("Cable to the light (LOAD)","This cable carries the switched power on to the light. The black wire here only has power when the switch is on.",B.fB7,8)
B.fBt=new A.E(9.8,5,-7.5)
B.dXj=new A.d0("Breaker panel","The main electrical panel. Each breaker protects one circuit. A breaker that is in the middle position has TRIPPED. Flip it fully OFF and then ON to reset.",B.fBt,6)
B.fCB=new A.E(-4,6,-2.5)
B.dXk=new A.d0("Hot supply hose","A braided steel hose with a rubber liner and a red band. Hand tighten the nuts, then a quarter turn with a wrench.",B.fCB,9)
B.flI=new C.x("Sick people can stay in a hospital bed. Treat each patient before their care runs out, and they go home better.",null,D.IH,null,D.L,null,null,null,null,null,null,null)
B.e37=new C.C(D.ahF,B.flI,null)
B.bH_=new C.ae(D.ee,18,D.b8,null,null,null)
B.e3n=new C.C(D.fx,B.bH_,null)
B.e3p=new C.C(D.fx,F.amG,null)
B.e9n=new A.a8s(null,null)
B.biI=new C.w(1,0.8392156862745098,0.9019607843137255,0.9176470588235294,D.t)
B.eaP=new C.y(B.biI,B.VU)
B.eb7=new C.y(B.wL,B.fO)
B.eco=new C.y(64,2.4)
B.edV=new C.y("LOAD (taped)",D.d9)
B.egz=new C.y(63,-2.4)
B.ehi=new C.y(51,B.abC)
B.b6W=new C.w(1,0.9137254901960784,0.8705882352941177,0.7607843137254902,D.t)
B.ejS=new C.y(B.b6W,B.As)
B.b5l=new C.w(1,0.7647058823529411,0.8117647058823529,0.9019607843137255,D.t)
B.emm=new C.y(B.b5l,B.aeI)
B.bdD=new C.w(1,0.3568627450980392,0.39215686274509803,0.4392156862745098,D.t)
B.enY=new C.y("SILVER \xb7 NEUTRAL",B.bdD)
B.fGP=new A.E(-1.5,0,0)
B.eo6=new C.y(B.Kj,B.fGP)
B.b65=new C.w(1,0.8196078431372549,0.29411764705882354,0.22745098039215686,D.t)
B.epC=new C.y(52,B.b65)
B.baB=new C.w(1,0.12156862745098039,0.47843137254901963,0.22745098039215686,D.t)
B.equ=new C.y("GREEN \xb7 GROUND",B.baB)
B.bhH=new C.w(1,0.9450980392156862,0.9098039215686274,0.8235294117647058,D.t)
B.er9=new C.y(B.bhH,B.As)
B.erq=new C.y("main","Main water valve")
B.ae2=new C.w(1,0.1843137254901961,0.6352941176470588,0.30980392156862746,D.t)
B.fHD=new A.E(1.5,0,0)
B.euE=new C.y(B.ae2,B.fHD)
B.b7s=new C.w(1,0.9529411764705882,0.9411764705882353,0.9098039215686274,D.t)
B.bda=new C.w(1,0.4823529411764706,0.5294117647058824,0.5803921568627451,D.t)
B.evg=new C.y(B.b7s,B.bda)
B.ew7=new C.y(B.pv,B.abB)
B.b78=new C.w(1,0.6039215686274509,0.4196078431372549,0.047058823529411764,D.t)
B.ewS=new C.y("BRASS \xb7 HOT",B.b78)
B.exk=new C.y(53,B.ae2)
B.exY=new C.bv(61,-4.6,B.t7)
B.ezH=new C.bv(62,4.6,B.nF)
B.eBm=new C.cL([0,17.1,16.4,5.8])
B.eBp=new C.cL([0,-0.1,16.4,4.2])
B.eCq=new C.cL([15.6,9,14.8,22])
B.eCu=new C.cL([-15.6,9,14.8,22])
B.eCD=new C.ev([72,60,44,B.Kt,B.Kw])
B.bip=new C.w(1,0.8941176470588236,0.6901960784313725,0.47843137254901963,D.t)
B.eCU=new C.ev([124,70,44,B.bip,B.x5])
B.eD0=new C.ev([90,64,46,B.ad3,D.ju])
B.eDj=new C.ev([110,70,62,D.bM,D.ak])
B.eDo=new C.ev([84,60,40,B.ad5,B.Kw])
B.eJf=new C.at(126,84)
B.eKr=new C.a7(58,null,null,null)
B.eSZ=new C.G(!0,D.c,null,null,null,null,13.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.eUe=new C.G(!0,D.az,null,null,null,null,14,D.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.eUs=new C.G(!0,D.az,null,null,null,null,11.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.eVc=new C.G(!0,D.aH,null,null,null,null,12.5,D.u,null,2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.eVM=new C.G(!0,D.c,null,null,null,null,12.5,D.O,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.aOk=new C.G(!0,D.ad,null,null,null,null,12,D.O,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.eWC=new C.G(!0,D.c,null,null,null,null,13,D.O,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.a6P=new C.G(!0,D.ad,null,null,null,null,null,null,null,null,null,null,1.45,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.eYu=new C.G(!0,null,null,null,null,null,9,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.IB=new C.G(!0,D.aH,null,null,null,null,12.5,D.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.eZ_=new C.G(!0,D.c,null,null,null,null,11.5,D.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.eZh=new C.G(!0,D.bK,null,null,null,null,13,D.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.f_i=new C.G(!0,D.ad,null,null,null,null,13.5,null,D.cD,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.f_t=new C.G(!0,D.fh,null,null,null,null,11.5,D.O,null,null,null,null,1.25,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.f_y=new C.G(!0,D.ez,null,null,null,null,14,D.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.f0D=new C.G(!0,D.aR,null,null,null,null,12,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.aP1=new C.G(!0,D.ad,null,null,null,null,13.5,null,null,null,null,null,1.5,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.f54=new C.G(!0,D.c,null,null,null,null,13.5,D.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.f5e=new C.G(!0,D.aR,null,null,null,null,11.5,null,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.f5L=new C.G(!0,D.b1,null,null,null,null,14.5,D.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.eTd=new C.G(!0,D.w,null,null,null,null,12,D.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.f6W=new C.x("Open the 3D lesson",null,B.eTd,null,null,null,null,null,null,null,null,null)
B.f7N=new C.x("Tip: pick a part, then tap its glowing spot. Joints on hoses, bolts and the drain are only loose: pick the Wrench and tap them. Use your Hand on the main water valve: turn the water OFF before you cut into a pipe, and ON to test for leaks.",null,E.a6H,null,null,null,null,null,null,null,null,null)
B.f8U=new C.x("You used all three lives. Electricity does not give second chances, so in real life you turn the breaker OFF and test the wires every single time. Try the job again.",null,D.zl,null,null,null,null,null,null,null,null,null)
B.f9a=new C.x("A different house",null,null,null,null,null,null,null,null,null,null,null)
B.f9C=new C.x("\ud83c\udf5e",null,D.D4,null,null,null,null,null,null,null,null,null)
B.f9W=new C.x("Play the tour",null,null,null,null,null,null,null,null,null,null,null)
B.fa2=new C.x("Start this job again",null,null,null,null,null,null,null,null,null,null,null)
B.fcM=new C.x("Start from a bare house (wire everything)",null,null,null,null,null,null,null,null,null,null,null)
B.feU=new C.x("The customer says\u2026",null,D.du,null,null,null,null,null,null,null,null,null)
B.ffC=new C.x("What the house needs",null,D.du,null,null,null,null,null,null,null,null,null)
B.ffN=new C.x("Next job",null,null,null,null,null,null,null,null,null,null,null)
B.eUE=new C.G(!0,D.w,null,null,null,null,14,D.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.ffV=new C.x("Go in",null,B.eUE,null,null,null,null,null,null,null,null,null)
B.f2s=new C.G(!0,D.aH,null,null,null,null,22,D.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.ffZ=new C.x("My House",null,B.f2s,null,D.L,null,null,null,null,null,null,null)
B.fg5=new C.x("New job",null,null,null,null,null,null,null,null,null,null,null)
B.aOG=new C.G(!0,D.cj,null,null,null,null,null,D.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fgc=new C.x("Job over",null,B.aOG,null,null,null,null,null,null,null,null,null)
B.fgs=new C.x("Three shocks. In real life you switch the breaker off and test the wires, every time. Try another call.",null,D.zl,null,null,null,null,null,null,null,null,null)
B.fgy=new C.x("Learn the trades",null,L.ry,null,null,null,null,null,null,null,null,null)
B.fh7=new C.x("Practice mode: no hints. You will only hear from me when something is wrong.",null,U.SY,null,null,null,null,null,null,null,null,null)
B.fhk=new C.x("New call",null,null,null,null,null,null,null,null,null,null,null)
B.fhp=new C.x("Job done! \ud83c\udf89",null,O.T1,null,null,null,null,null,null,null,null,null)
B.fix=new C.x("Next call",null,null,null,null,null,null,null,null,null,null,null)
B.fiV=new C.x("Plug in",null,D.du,null,null,null,null,null,null,null,null,null)
B.fjk=new C.x("Look around",null,null,null,null,null,null,null,null,null,null,null)
B.fjT=new C.x("The customer wants:",null,D.a7_,null,null,null,null,null,null,null,null,null)
B.fk2=new C.x('Tip: pick "Look and test" and tap things to find out what is wrong. Then pick the right tool. Turn the breaker off (hand) before you touch any wire.',null,E.a6H,null,null,null,null,null,null,null,null,null)
B.flR=new C.x("Who walks the house?",null,Q.SH,null,null,null,null,null,null,null,null,null)
B.fmr=new C.x("5 bedrooms, 3 bathrooms and a garden. Walk in, look all round, fix what is wrong.",null,Y.SI,null,D.L,null,null,null,null,null,null,null)
B.fmw=new C.x("Call over",null,B.aOG,null,null,null,null,null,null,null,null,null)
B.fmD=new C.x("\u23cf Unplug",null,I.zi,null,null,null,null,null,null,null,null,null)
B.fmW=new C.x("A different call",null,null,null,null,null,null,null,null,null,null,null)
B.fnl=new C.x("\ud83d\udecf\ufe0f",null,D.us,null,null,null,null,null,null,null,null,null)
B.fnL=new C.x("Job complete! \ud83c\udf89",null,O.T1,null,null,null,null,null,null,null,null,null)
B.fok=new C.x("How you are doing",null,D.i3,null,null,null,null,null,null,null,null,null)
B.foI=new C.x("House tour \ud83c\udfac",null,D.du,null,null,null,null,null,null,null,null,null)
B.foR=new C.x("All fixed! \ud83c\udf89",null,O.T1,null,null,null,null,null,null,null,null,null)
B.aQ6=new C.x("Stay",null,null,null,null,null,null,null,null,null,null,null)
B.aQ8=new C.x("A different job",null,null,null,null,null,null,null,null,null,null,null)
B.fqV=new C.x("It goes on the back wall, not wired yet. Tap the red one to wire it yourself.",null,U.SP,null,null,null,null,null,null,null,null,null)
B.fsI=new C.x("The job",null,D.du,null,null,null,null,null,null,null,null,null)
B.ft7=new C.x("A little person walks through the whole house: the living room, the kitchen (a drink from the fridge), the hall, the bedrooms and the bathrooms. Every TV is switched on first. Choose how long it takes.",null,D.IH,null,null,null,null,null,null,null,null,null)
B.fty=new C.x("Stay in the room",null,null,null,null,null,null,null,null,null,null,null)
B.fu2=new C.x("\ud83d\udc8a",null,D.D4,null,null,null,null,null,null,null,null,null)
B.fx4=new A.E(3.6,2.6,0.6)
B.fx6=new A.E(0,56,0.9)
B.fx8=new A.E(0,0.62,-19.2)
B.lr=new A.E(0,0,1)
B.fxa=new A.E(0,0,3)
B.a7N=new A.E(0,0,4)
B.zr=new A.E(0,0,-1)
B.aQV=new A.E(0,0,-60)
B.aQW=new A.E(0,10,0)
B.fxd=new A.E(0,10,3)
B.fxe=new A.E(0,115,3)
B.fxf=new A.E(0,115,-63)
B.fxg=new A.E(0,128,-30)
B.fxh=new A.E(0,12,0)
B.fxi=new A.E(0,12,3)
B.aQY=new A.E(0,13,0)
B.fxj=new A.E(0,13,-8)
B.J0=new A.E(0,14,0)
B.fxk=new A.E(0,14,11)
B.fxl=new A.E(0,14,2)
B.fxm=new A.E(0,14,5)
B.fxo=new A.E(0,14,-9)
B.fxp=new A.E(0,150,8)
B.fxq=new A.E(0,16,0)
B.a7O=new A.E(0,17,0)
B.fxr=new A.E(0,17,21)
B.fxs=new A.E(0,19,14)
B.fP=new A.E(0,1,0)
B.fxu=new A.E(0,20,0)
B.fxv=new A.E(0,20,16)
B.fxy=new A.E(0,20,-14)
B.fxz=new A.E(0,20,-6)
B.fxA=new A.E(0,21,0)
B.fxB=new A.E(0,22,-11)
B.fxC=new A.E(0,22,-12)
B.fxD=new A.E(0,22,-39)
B.fxE=new A.E(0,23,0)
B.fxF=new A.E(0,24,0)
B.fxG=new A.E(0,24,13)
B.fxH=new A.E(0,25,-15)
B.aQZ=new A.E(0,28,0)
B.fxI=new A.E(0,28,-8)
B.fxJ=new A.E(0,2,14)
B.aR_=new A.E(0,30,0)
B.fxK=new A.E(0,31,-6)
B.aR0=new A.E(0,34,0)
B.fxL=new A.E(0,36,0)
B.fxM=new A.E(0,36,19)
B.fxN=new A.E(0,37,22)
B.fxO=new A.E(0,3,0)
B.fxP=new A.E(0,3,-30)
B.fxS=new A.E(0,40,150)
B.fxT=new A.E(0,40,17)
B.fxU=new A.E(0,40,40)
B.fxW=new A.E(0,40,-6)
B.fxX=new A.E(0,46,0)
B.aR2=new A.E(0,48,0)
B.Tz=new A.E(0,4,-2)
B.fy_=new A.E(0,50,-30)
B.fy0=new A.E(0,52,0)
B.fy1=new A.E(0,55,0)
B.fy2=new A.E(0,58,0)
B.fy3=new A.E(0,5,4)
B.fy4=new A.E(0,7,0)
B.fy5=new A.E(0,7,-5)
B.Da=new A.E(0,8,0)
B.fy6=new A.E(0,8,6)
B.fy7=new A.E(0,8,-16)
B.fy8=new A.E(0,8,-19)
B.fy9=new A.E(0,8,-4)
B.fya=new A.E(0,94,13)
B.aR3=new A.E(0,9,0)
B.aR4=new A.E(0,9,-3)
B.a7P=new A.E(0,-4,28)
B.fyb=new A.E(0,-4,-20)
B.fye=new A.E(10,12,10)
B.fyf=new A.E(10,8,10)
B.fyg=new A.E(11,12,30)
B.fyh=new A.E(11,1,11)
B.fyi=new A.E(120,0,-30)
B.fyj=new A.E(13,0,0)
B.fyk=new A.E(13,15,2)
B.fyl=new A.E(13,28,3)
B.fym=new A.E(0,0.52,2.35)
B.fyn=new A.E(14,13,28)
B.fyo=new A.E(14,17,4)
B.fyp=new A.E(14,20,-28)
B.fyq=new A.E(14,30,14)
B.fyr=new A.E(14,36,14)
B.fyt=new A.E(16,10,10)
B.fyu=new A.E(16,16,16)
B.aR5=new A.E(17,3,17)
B.fyv=new A.E(18,18,14)
B.fyw=new A.E(18,20,18)
B.fyx=new A.E(18,22,2)
B.fyy=new A.E(18,28,16)
B.fyz=new A.E(18,2,18)
B.fyA=new A.E(18,6,0)
B.fyB=new A.E(18,9,11)
B.fyC=new A.E(19,13,7)
B.fyD=new A.E(70,0.6,50)
B.fyE=new A.E(0,3,-6.5)
B.fyF=new A.E(-4,20.4,0)
B.fyG=new A.E(1,1,0.64)
B.fyH=new A.E(-4.6,1.5,-3.6)
B.fyI=new A.E(0,-13.5,-1.5)
B.fyJ=new A.E(4,10,3.5)
B.j_=new A.E(1,0,0)
B.fyK=new A.E(1,26,14)
B.fyL=new A.E(1,28,14)
B.aR6=new A.E(1,2,1)
B.aR7=new A.E(1,3,1)
B.aR8=new A.E(1,3,6)
B.fyN=new A.E(1,0.9,0.06)
B.fyP=new A.E(1.6,15,1.6)
B.aR9=new A.E(20,14,7)
B.fyQ=new A.E(20,30,26)
B.fyR=new A.E(20,4,26)
B.fyS=new A.E(20,92,26)
B.fyT=new A.E(22,12,34)
B.fyU=new A.E(22,14,0)
B.fyV=new A.E(22,14,2)
B.fyW=new A.E(22,2,28)
B.fyX=new A.E(22,3,10)
B.fyY=new A.E(22,3,22)
B.fyZ=new A.E(240,100,60)
B.fz_=new A.E(244,6,64)
B.fz0=new A.E(24,12,34)
B.fz1=new A.E(24,14,22)
B.fz2=new A.E(24,38,0)
B.aRa=new A.E(24,6,14)
B.fz3=new A.E(262,3,5)
B.fz4=new A.E(262,3,56)
B.fz5=new A.E(26,2,26)
B.aRb=new A.E(26,4,22)
B.fz6=new A.E(26,72,26)
B.fz7=new A.E(26,-34,96)
B.fz9=new A.E(-0.1,0,0)
B.fza=new A.E(2,13,2)
B.aRc=new A.E(2,23,12)
B.aRd=new A.E(2,28,22)
B.fzc=new A.E(64,10,-1.4)
B.fzd=new A.E(19.6,0,-1.5)
B.aRe=new A.E(0,56,1.3)
B.fze=new A.E(0,15.5,0)
B.fzf=new A.E(30,16,30)
B.aRf=new A.E(30,16,72)
B.fzg=new A.E(30,22,0)
B.fzh=new A.E(30,24,8)
B.fzi=new A.E(30,28,18)
B.fzj=new A.E(30,29,0)
B.fzl=new A.E(32,2,20)
B.fzm=new A.E(33,11,10)
B.fzn=new A.E(34,30,1)
B.fzo=new A.E(-1,-1.7,2.3)
B.fzp=new A.E(36,22,0)
B.fzq=new A.E(36,30,0)
B.fzr=new A.E(36,30,1)
B.fzs=new A.E(36,60,12)
B.fzt=new A.E(37,16,0)
B.fzu=new A.E(-0.2,-0.3,-0.4)
B.fzv=new A.E(0,48.6,55)
B.aRg=new A.E(3,12,12)
B.fzx=new A.E(3,22,2)
B.fzy=new A.E(3,26,3)
B.a7Q=new A.E(3,3,3)
B.fzz=new A.E(3,5,3)
B.fzB=new A.E(40,1,14)
B.fzC=new A.E(40,28,1)
B.fzD=new A.E(40,2,24)
B.fzE=new A.E(40,30,26)
B.fzF=new A.E(42,2,28)
B.fzG=new A.E(44,10,2)
B.aRi=new A.E(44,2,14)
B.fzH=new A.E(44,72,20)
B.fzI=new A.E(0.9,0,4.4)
B.fzJ=new A.E(8.2,1.9,-7.55)
B.fzK=new A.E(-120.1,100,-60)
B.fzL=new A.E(46,10,34)
B.fzM=new A.E(46,26,2)
B.fzN=new A.E(48,2,24)
B.fzO=new A.E(0,-47.25,-2.25)
B.fzP=new A.E(0.6,68,0.4)
B.fzQ=new A.E(0,1.59,0.14)
B.fzR=new A.E(0,-3.4,1)
B.fzS=new A.E(25,79,1.4)
B.fzT=new A.E(1,0,-1.2)
B.fzU=new A.E(0.6,4,2.4)
B.fzV=new A.E(50,28,42)
B.fzW=new A.E(50,4,28)
B.fzX=new A.E(54,5,18)
B.fzY=new A.E(56,18,18)
B.fzZ=new A.E(56,2,36)
B.fA_=new A.E(56,3,32)
B.fA0=new A.E(56,3,48)
B.fA1=new A.E(58,9,74)
B.fA2=new A.E(0,-0.8,0.9)
B.fA3=new A.E(11.9,0,-8)
B.fA4=new A.E(20,7,34.4)
B.aRj=new A.E(1.6,1.6,0.4)
B.fA6=new A.E(0.16,0.32,0.07)
B.aRk=new A.E(5,12,26)
B.fA7=new A.E(5,1,2)
B.fA8=new A.E(5,6,10)
B.fA9=new A.E(5,6,3)
B.fAa=new A.E(5,9,8)
B.fAb=new A.E(0,14.3,-1.5)
B.aRl=new A.E(-13,8.6,-9.5)
B.fAc=new A.E(60,12,80)
B.fAd=new A.E(60,30,3)
B.fAf=new A.E(62,18,20)
B.fAg=new A.E(62,22,6)
B.fAh=new A.E(64,10,0)
B.aRm=new A.E(6,14,20)
B.aRn=new A.E(6,14,32)
B.fAk=new A.E(6,4,4)
B.fAm=new A.E(0,-0.2,0.14)
B.fAo=new A.E(0.3,38,2)
B.fAp=new A.E(70,125,-45)
B.fAq=new A.E(70,144,-45)
B.fAr=new A.E(72,-17,70)
B.fAs=new A.E(12,5,0.4)
B.fAt=new A.E(1.6,1.7,3.6)
B.fAv=new A.E(-72.8,0,55)
B.fAx=new A.E(25,79,0.2)
B.fAy=new A.E(7,0,-8)
B.fAz=new A.E(7,2,7)
B.aRo=new A.E(7,3,0)
B.fAA=new A.E(7,8,3)
B.fAC=new A.E(0,11,9.2)
B.fAD=new A.E(-3.2,1.3,-7.82)
B.fAE=new A.E(80,16,32)
B.fAF=new A.E(80,26,8)
B.aRp=new A.E(147,1.5,3.5)
B.fAG=new A.E(82,46,3)
B.aRq=new A.E(-6.5,6.9,-3)
B.fAH=new A.E(84,10,38)
B.fAI=new A.E(84,18,38)
B.fAJ=new A.E(0.93,0.92,1)
B.fAK=new A.E(4.6,4.2,9.5)
B.fAL=new A.E(0.4,6,8)
B.fAM=new A.E(0,-48.6,55)
B.fAN=new A.E(2.6,2,2.6)
B.fAO=new A.E(5.5,8.5,3)
B.fAP=new A.E(120.1,100,0)
B.fAQ=new A.E(0,0,0.26)
B.fAR=new A.E(8,18,8)
B.aRr=new A.E(8,2,16)
B.fAS=new A.E(8,2,6)
B.aRs=new A.E(8,2,8)
B.fAT=new A.E(8,4,4)
B.fAU=new A.E(8,8,12)
B.fAV=new A.E(8,9,8)
B.fAW=new A.E(8,9,9)
B.fAX=new A.E(15,19,0.5)
B.fAY=new A.E(96,14,38)
B.fAZ=new A.E(0.4,0.38,0.12)
B.fB_=new A.E(0,0,-0.43)
B.aRt=new A.E(11.2,4.5,-6)
B.aRu=new A.E(1.2,96,112)
B.aRv=new A.E(0.08,3.8,2.4)
B.aRw=new A.E(9,1,9)
B.fB0=new A.E(9,40,4)
B.fB1=new A.E(9,5,9)
B.fB2=new A.E(-3.5,26,15)
B.fB3=new A.E(1.5,1.3,0.6)
B.fB5=new A.E(0,-1.78,0.27)
B.fB6=new A.E(0,0.62,0)
B.fB9=new A.E(20,11.5,0)
B.fBa=new A.E(3.2,0.12,-6.7)
B.fBb=new A.E(12,0,-8.1)
B.fBd=new A.E(1.25,0.28,0.1)
B.fBe=new A.E(0,36,10.2)
B.fBf=new A.E(24,0.08,16)
B.fBh=new A.E(0,4,-7.9)
B.fBi=new A.E(11.9,0,8)
B.fBk=new A.E(21,1.4,8)
B.fBl=new A.E(0.8,0.8,1.6)
B.fBm=new A.E(1.4,1,1)
B.fBo=new A.E(71.2,46.6,55)
B.fBp=new A.E(3,3.28,-7.2)
B.fBq=new A.E(1.4,0.3,1)
B.fBr=new A.E(-6.1,1.2,-6.4)
B.fBs=new A.E(1.4,26,0.4)
B.fBu=new A.E(2.8,3.4,2.4)
B.fBv=new A.E(26,0.3,130)
B.fBw=new A.E(0,-45.5,0.5)
B.fBx=new A.E(1.8,4,1)
B.fBy=new A.E(5,1.6,0.5)
B.fBA=new A.E(0,11,8.5)
B.fBB=new A.E(0.1,-2,2.4)
B.fBC=new A.E(0,0.2,2.8)
B.fBD=new A.E(6,10,1.4)
B.fBF=new A.E(43,23,0.3)
B.fBG=new A.E(0,10,5.2)
B.fBH=new A.E(0,-1.2,4.7)
B.fBI=new A.E(120.1,124,-30)
B.fBJ=new A.E(18.9,2.6,0)
B.fBK=new A.E(-12,0,-8.1)
B.fBL=new A.E(3,11,0.5)
B.fBM=new A.E(11.8,4,0)
B.fBN=new A.E(0.97,0.18,2.25)
B.aRx=new A.E(-71.7,6,55)
B.fBP=new A.E(5.6,0.3,1.9)
B.fBS=new A.E(52,8,0.4)
B.fBT=new A.E(4.6,7.6,3)
B.fBU=new A.E(-1,0,-1.2)
B.fBV=new A.E(0,1.7,0)
B.fBX=new A.E(-1,0,1.5)
B.fBY=new A.E(90,2,0.5)
B.fBZ=new A.E(5,8,0.4)
B.fC_=new A.E(5,2.2,0.8)
B.fC0=new A.E(0.18,0.12,0.08)
B.fC1=new A.E(147,3,1.4)
B.fC2=new A.E(4,16.2,0)
B.fC3=new A.E(10,15,0.5)
B.fC4=new A.E(144,5,0.7)
B.fC5=new A.E(0,34,1.1)
B.fC6=new A.E(1.2,-1.7,2.3)
B.fC7=new A.E(31.5,23,0)
B.fC9=new A.E(0.82,1.7,0.3)
B.fCa=new A.E(47,7,34.4)
B.fCb=new A.E(-0.12,0,0)
B.fCd=new A.E(3.5,94,0.2)
B.fCe=new A.E(1.1,2.05,0.04)
B.fCf=new A.E(25,79,1.2)
B.fCg=new A.E(1.12,0.78,0.76)
B.fCh=new A.E(10,14,0.5)
B.fCi=new A.E(5,8,0.5)
B.fCj=new A.E(1.1,0.5,0.7)
B.fCk=new A.E(-20,11.5,0)
B.fCl=new A.E(0,-0.5,0.6)
B.fCm=new A.E(0,1.4,0)
B.fCo=new A.E(0,3.4,0.8)
B.fCq=new A.E(-0.85,4,-3.2)
B.fCs=new A.E(-7.1,19,4)
B.fCt=new A.E(40,7.2,1.2)
B.aRy=new A.E(0.42,0.34,0.12)
B.fCu=new A.E(1.7,0.08,1.2)
B.fCv=new A.E(0,0,0.38)
B.fCx=new A.E(5.2,3.9,-7.76)
B.fCz=new A.E(2.6,0.45,0.5)
B.fCA=new A.E(0.07,0.3,0.03)
B.fCC=new A.E(41.5,11,12)
B.fCE=new A.E(20,1.4,8)
B.fCF=new A.E(0,-0.2,0.19)
B.fCH=new A.E(1.2,49,36)
B.fCI=new A.E(0,9.3,0)
B.aRz=new A.E(1.4,3,1.6)
B.fCK=new A.E(0,40,0.95)
B.fCL=new A.E(11,3,0.5)
B.fCN=new A.E(0,-1.9,-1.2)
B.fCO=new A.E(-3.2,1.15,-7.78)
B.fCP=new A.E(0,-3.4,1.2)
B.fCQ=new A.E(64,10,0.2)
B.fCR=new A.E(0,-1.78,0.53)
B.fCS=new A.E(3,0.2,3)
B.aRA=new A.E(-6.5,7.4,-3)
B.fCT=new A.E(0,76,1.1)
B.fCU=new A.E(-4.6,-2,1.2)
B.fCW=new A.E(0,40,1.4)
B.fCX=new A.E(-3,36,10.6)
B.fCY=new A.E(0,14.5,-1.5)
B.fCZ=new A.E(0,0.2,0)
B.fD0=new A.E(160,1.2,120)
B.fD1=new A.E(7,40,2.4)
B.fD2=new A.E(30,26,0.6)
B.fD3=new A.E(3.4,3.25,-7.85)
B.fD4=new A.E(1.12,0.5,0.62)
B.fD5=new A.E(72.8,0,55)
B.fD6=new A.E(0.5,62,30)
B.fD7=new A.E(2.2,1.1,6.4)
B.fD8=new A.E(3,1.55,-7.1)
B.fD9=new A.E(0.4,3,3)
B.aRD=new A.E(0,-0.1,0.1)
B.fDa=new A.E(0,0,0.04)
B.fDb=new A.E(0,14,-19.3)
B.fDc=new A.E(2.4,11.6,-3.6)
B.fDd=new A.E(4,11,3.5)
B.fDf=new A.E(5,8.6,-2.25)
B.fDg=new A.E(0,-1.78,0.3)
B.fDh=new A.E(2.2,2.2,1.8)
B.fDi=new A.E(0,1.9,-1.2)
B.fDj=new A.E(0,56,2.1)
B.fDk=new A.E(0.26,0.04,0.02)
B.fDl=new A.E(-2.4,11.6,-3.6)
B.fDm=new A.E(11.25,0,-2.25)
B.fDn=new A.E(1,-1.8,2.4)
B.fDo=new A.E(-11.8,4,0)
B.fDp=new A.E(1.2,4,7)
B.fDq=new A.E(11.2,4.7,-6)
B.fDr=new A.E(24,8,0.05)
B.fDt=new A.E(0.12,0,0)
B.fDu=new A.E(1.1,1.1,0.03)
B.fDv=new A.E(0,0.62,19.2)
B.fDw=new A.E(0,5,1.1)
B.fDx=new A.E(3.4,3.55,-7.85)
B.fDz=new A.E(71.6,-22,62)
B.fDB=new A.E(1,1,0.62)
B.aRE=new A.E(1.5,18,3.5)
B.fDD=new A.E(3.5,3.1,-7.15)
B.fDE=new A.E(0,1.5,-0.9)
B.fDF=new A.E(-0.28,0.55,-0.8)
B.fDG=new A.E(0,-0.2,0.24000000000000002)
B.fDI=new A.E(0,-3.3,4)
B.fDJ=new A.E(1,-0.2,0.14)
B.aRF=new A.E(84,3,0.5)
B.fDK=new A.E(-1.9,0,-2.25)
B.fDL=new A.E(0,-0.9,1.1)
B.fDM=new A.E(8.2,1.05,-6.7)
B.fDN=new A.E(0,9.6,11.6)
B.fDQ=new A.E(0.07,0.4,0.03)
B.fDR=new A.E(2,3.8,0.08)
B.fDS=new A.E(31,83,0.9)
B.fDT=new A.E(64,40,-3.2)
B.fDU=new A.E(0.95,0.62,2.2)
B.aRG=new A.E(1.4,3,112)
B.fDV=new A.E(0,46.6,0.8)
B.fDX=new A.E(0,0,-8.8)
B.fDY=new A.E(0,0.7,-1)
B.fE0=new A.E(-11.9,0,8)
B.fE1=new A.E(7,0,1.5)
B.fE2=new A.E(-8.4,0.7,-6.4)
B.fE3=new A.E(-3.2,1.45,-7.78)
B.fE4=new A.E(0,41,0.45)
B.fE5=new A.E(-6.575,0,-0.25)
B.fE7=new A.E(0,14.6,-1.5)
B.aRI=new A.E(0,0,-2.3)
B.a7S=new A.E(-13,12.5,0)
B.fE9=new A.E(0,0,0.62)
B.fEa=new A.E(0.2,-0.3,-0.4)
B.aRJ=new A.E(10.85,18,0.5)
B.fEb=new A.E(0.6,70,0.6)
B.fEc=new A.E(1.4,1.3,0.02)
B.fEd=new A.E(30,1.4,0.4)
B.fEe=new A.E(6.3,1.5,-7.2)
B.fEf=new A.E(0,5,11.2)
B.aRK=new A.E(0,0.62,2.85)
B.fEg=new A.E(37.5,23,0)
B.aRL=new A.E(0.05,8,16)
B.fEh=new A.E(0,-1.2,5)
B.fEj=new A.E(0.2,-2,2.6)
B.fEm=new A.E(11.2,2.4,-5.18)
B.fEo=new A.E(-1,-0.2,0.14)
B.fEp=new A.E(1.2,1.2,0.3)
B.aRN=new A.E(2,0.08,2.4)
B.fEr=new A.E(9.5,13.5,1.4)
B.fEs=new A.E(2.2,18,2.2)
B.fEt=new A.E(22,0.2,0.8)
B.fEu=new A.E(-0.32,0,0.5)
B.fEw=new A.E(1,0.8,0.95)
B.fEx=new A.E(0.8,0.55,0.05)
B.fEy=new A.E(0.14,0.35,17)
B.fEz=new A.E(1.4,2.4,0.3)
B.fEA=new A.E(0,11,8.2)
B.fEB=new A.E(0,24,-0.6)
B.fEC=new A.E(40,1.6,14)
B.fEF=new A.E(0,11.5,19.3)
B.fEG=new A.E(0,1.95,0.31)
B.fEH=new A.E(150,1.2,112)
B.aRO=new A.E(0.75,4.5,0.1)
B.fEJ=new A.E(0.12,0,0.05)
B.fEK=new A.E(-120.1,124,-30)
B.fEM=new A.E(9,1.2,9)
B.fEN=new A.E(0,-0.5,0)
B.fEQ=new A.E(-2.4,14,8)
B.fER=new A.E(5.5,8.5,0.5)
B.aRP=new A.E(0.05,8,9.6)
B.fET=new A.E(-120.1,100,0)
B.fEU=new A.E(1.5,94,3.5)
B.fEV=new A.E(0,8.2,0)
B.fEX=new A.E(4,94,0.4)
B.aRQ=new A.E(1.4,8,1)
B.fEY=new A.E(3.7,1.2,-7.1)
B.fEZ=new A.E(8.2,0.05,-6.7)
B.fF_=new A.E(0,-0.3,0)
B.fF0=new A.E(6.575,0,-0.25)
B.aRR=new A.E(0,1.8,0)
B.fF1=new A.E(3,3.21,-7.2)
B.fF2=new A.E(9,5,0.6)
B.fF4=new A.E(9.8,5,-7.75)
B.fF5=new A.E(1.5,3.5,112)
B.fF6=new A.E(22,7,34.4)
B.fF7=new A.E(3,1.85,-7.1)
B.fFb=new A.E(16,0.4,16)
B.a7U=new A.E(13,12.5,0)
B.fFd=new A.E(0.34,0.66,0.9)
B.fFf=new A.E(0.9,1.08,0.98)
B.fFg=new A.E(12,0.4,6)
B.fFh=new A.E(-6.5,7.9,-3)
B.fFi=new A.E(0,13.6,-1.5)
B.fFj=new A.E(1.5,1.5,0.05)
B.fFk=new A.E(-6.5,5,-3)
B.fFl=new A.E(58.4,1.6,50)
B.fFm=new A.E(16,22,0.6)
B.fFn=new A.E(0.02,0.28,0.05)
B.fFo=new A.E(0,0.7,1)
B.fFp=new A.E(0,9.5,-7)
B.aRT=new A.E(13,8.6,9.5)
B.fFq=new A.E(-3.6,4,-7.76)
B.fFr=new A.E(0.82,0.9,0.05)
B.fFs=new A.E(0,-5.5,-0.25)
B.fFt=new A.E(0,11,21.2)
B.fFx=new A.E(0,0.6,0)
B.fFz=new A.E(1.9,0,0)
B.fFA=new A.E(0.45,0.72,0.06)
B.fFC=new A.E(14,0.4,7)
B.fFD=new A.E(64,24,-3.2)
B.aRU=new A.E(40,0.12,1.2)
B.fFE=new A.E(0,9.2,0)
B.fFF=new A.E(0,0.03,0)
B.fFG=new A.E(-10,22,0)
B.fFH=new A.E(-120,0,-30)
B.fFI=new A.E(-13,15,2)
B.fFJ=new A.E(-14,17,4)
B.fFK=new A.E(-14,20,-28)
B.fFL=new A.E(-18,6,0)
B.we=new A.E(-1,0,0)
B.fFM=new A.E(-1,0,-8)
B.fFN=new A.E(-20,4,26)
B.fFO=new A.E(-20,92,26)
B.fFP=new A.E(-22,14,0)
B.fFQ=new A.E(-24,38,0)
B.fFS=new A.E(-37,16,0)
B.fFT=new A.E(-42,-34,96)
B.fFU=new A.E(0,-0.6,22)
B.fFV=new A.E(-4,20,0)
B.aRV=new A.E(-4,20,8)
B.fFX=new A.E(-72,6,55)
B.fFY=new A.E(-8,42,-5)
B.fFZ=new A.E(-8,-28,104)
B.fG_=new A.E(-8,-39,96)
B.fG0=new A.E(0,0.35,0.78)
B.fG1=new A.E(-11.9,0,-8)
B.fG2=new A.E(38,1.4,12)
B.fG3=new A.E(25,0.5,66)
B.fG4=new A.E(-8.4,1.9,-7.2)
B.fG5=new A.E(1.6,8,5)
B.fG6=new A.E(0.8,1.6,1.4)
B.fG7=new A.E(0.85,1.15,0.9)
B.fG9=new A.E(25,6,0.2)
B.aRW=new A.E(1.25,1,0.1)
B.fGa=new A.E(11.2,0,-6)
B.fGb=new A.E(0.4,7,9)
B.fGc=new A.E(1.2,1.1,0.8)
B.fGe=new A.E(150,49,1.2)
B.fGf=new A.E(41.5,11,-12)
B.fGg=new A.E(62,0.2,42)
B.fGh=new A.E(4.6,1.5,-3.6)
B.fGi=new A.E(0,-0.7,0.8)
B.fGj=new A.E(8.9,1.9,0.9)
B.fGk=new A.E(0,-1.55,-0.6)
B.fGl=new A.E(1.78,4.25,0.08)
B.fGm=new A.E(27,0.6,19)
B.fGn=new A.E(0,5.5,-0.25)
B.fGo=new A.E(28,2.5,26)
B.fGp=new A.E(2,0.2,6)
B.aRX=new A.E(0,0.7,0)
B.fGq=new A.E(-1.2,-1.6,2.2)
B.fGr=new A.E(11,25,0.3)
B.aRY=new A.E(-12,14,19.4)
B.aRZ=new A.E(13,8.6,-9.5)
B.aS_=new A.E(0.05,0.12,0.03)
B.aS0=new A.E(8.2,0.95,-6.7)
B.fGs=new A.E(40,1.2,22)
B.fGt=new A.E(0.7,1.5,-7.2)
B.fGu=new A.E(0,15.3,-3.6)
B.fGv=new A.E(62,2.4,8)
B.fGw=new A.E(-1.6,11,6)
B.fGx=new A.E(0.1,0,0)
B.fGy=new A.E(0.32,0,0.5)
B.fGz=new A.E(1.6,11,6)
B.fGA=new A.E(1.1,0.8,0.6)
B.fGC=new A.E(-0.9,0,4.4)
B.fGD=new A.E(-6.5,7.2,-3)
B.fGF=new A.E(6.2,0.18,2.1)
B.fGG=new A.E(7.1,18,-3)
B.fGI=new A.E(36,1.6,12)
B.fGJ=new A.E(15.5,2.6,0)
B.fGL=new A.E(-8,-47.8,70)
B.fGM=new A.E(14,1.5,3.5)
B.aS1=new A.E(17,24,0.3)
B.fGN=new A.E(5.2,3.9,-7.82)
B.fGO=new A.E(0,0.7,2.4)
B.aS2=new A.E(0,0.3,0)
B.aS3=new A.E(2.3,7,0.5)
B.aS4=new A.E(-13,8.6,9.5)
B.fGS=new A.E(6.5,6,14)
B.fGT=new A.E(0,-1.99,0.14)
B.fGU=new A.E(0.4,36,34)
B.fGW=new A.E(4.6,-2,1.2)
B.fGX=new A.E(0,14,19.3)
B.aS5=new A.E(0,0,-2.4)
B.fGY=new A.E(0,-1.78,0.52)
B.fGZ=new A.E(0.12,0.1,0.03)
B.fH_=new A.E(9.8,5,-7.58)
B.fH0=new A.E(14,1.5,5)
B.aS6=new A.E(0.5,1.4,2)
B.fH1=new A.E(3.5,0.15,-7.2)
B.aS7=new A.E(64,2,1.2)
B.fH2=new A.E(1.2,26.4,20)
B.fH3=new A.E(-3.6,4,-7.82)
B.fH4=new A.E(0.3,2,36)
B.fH6=new A.E(24,0.8,6.5)
B.fH8=new A.E(22,0.5,5)
B.fH9=new A.E(9,10,0.6)
B.fHa=new A.E(0,22,2.1)
B.fHd=new A.E(0,56,0.5)
B.fHe=new A.E(150,1.2,70)
B.fHf=new A.E(2.1,0.4,0.5)
B.fHg=new A.E(-19.5,-1,-1.5)
B.fHh=new A.E(80,0.5,60)
B.fHi=new A.E(6.85,4,-3.2)
B.aS9=new A.E(0.12,3,1.9)
B.fHj=new A.E(0.06,0.62,0.8)
B.fHk=new A.E(0,18.5,0)
B.fHm=new A.E(9.55,5.7,-7.5)
B.fHo=new A.E(0.8,2.4,0.3)
B.aSa=new A.E(0,0.7,2)
B.fHp=new A.E(3.5,26,15)
B.fHq=new A.E(0.8,1.1,1.2)
B.fHr=new A.E(2.4,14,8)
B.fHs=new A.E(120.1,100,-60)
B.fHt=new A.E(0,47.25,-2.25)
B.fHu=new A.E(0.5,0.5,0.04)
B.fHv=new A.E(12.5,39,0.6)
B.fHw=new A.E(0,3,0.9)
B.fHx=new A.E(3,36,10.6)
B.fHy=new A.E(25,10,0.2)
B.fHA=new A.E(0.14,8,0.3)
B.fHB=new A.E(1.9,0.05,1.35)
B.fHE=new A.E(0.6,0.12,0.03)
B.fHF=new A.E(-10.7,1.2,-6.4)
B.fHG=new A.E(-71.2,46.6,55)
B.fHH=new A.E(5,4.5,3)
B.fHI=new A.E(0,3.7,2.6)
B.fHJ=new A.E(40,0.6,40)
B.fIg=new A.BO("noGround","It works, but there is no ground wire. Without a ground nothing protects you if an appliance fails.",!0,!1,!1)
B.fIh=new A.BO("short","A hot wire touched the ground. That is a short circuit: huge current, sparks and fire. The breaker slams off.",!1,!0,!0)
B.fIi=new A.BO("reversed","Hot and neutral are swapped (reversed polarity). Things still run, but the metal part of a lamp or appliance is live. That can shock someone. Black goes on brass, white on silver.",!0,!1,!1)
B.fIj=new A.BO("dead","The hot wire is not connected to the right place, so nothing gets power. The device is dead.",!1,!1,!1)
B.fIk=new A.BO("ok","Wired correctly. Hot, neutral and ground are all in the right place.",!0,!1,!1)
B.fIl=new A.BO("bonded","The neutral and the ground were joined. A GFCI or the breaker may trip for no reason, and current can flow where it should not.",!0,!0,!1)
B.fIm=new A.BO("openNeutral","The neutral wire is not connected. Nothing runs, but the hot wire is still connected, so the slots can still be live. That is dangerous.",!1,!1,!1)
B.fIn=new A.BO("dead","The wires are on the taped LOAD screws, so no power reaches the outlet. Power comes in on LINE.",!1,!1,!1)
B.fIo=new A.BO("short","The hot and the neutral were joined together. That is a short circuit: a bang, sparks and a tripped breaker.",!1,!0,!0)
B.esq=new C.y(-20,46)
B.fKZ=new A.Jl(B.esq,0,2.4,"Having the drink",!0,!1,!1,"")
B.ecn=new C.y(34,62)
B.fL_=new A.Jl(B.ecn,3.141592653589793,2.2,"Picking up the remote",!1,!0,!1,"")
B.fL7=new A.azp(null)})();(function staticFields(){$.alV=0
$.fNc=C.T(x.N,C.ax("LG"))
$.fNb=C.T(x.N,C.ax("ay<LG?>"))
$.fMv=null
$.Hf=null
$.bB1="xbot"})();(function lazyInitializers(){var w=a.lazyFinal
w($,"idv","hni",()=>C.a([A.aSC("Wire a standard 120 volt receptacle: black to brass, white to silver, bare copper to green.",B.PV,B.dcv,"outlet",B.cKK,"Wall outlet",new A.foM()),A.aSC("A single-pole switch breaks the hot wire to the light: two black wires go on the two brass screws.",B.cYo,B.cLm,"switch",B.cJk,"Light switch",new A.foN()),A.aSC("A GFCI protects you near water. Power comes in on LINE. The LOAD screws (covered with tape) feed other outlets.",B.PV,B.cSx,"gfci",B.d02,"GFCI outlet",new A.foO()),A.aSC("Join the house wires to the fixture wires with wire nuts: black to black, white to white, ground to ground.",B.PV,B.cJs,"light",B.dbB,"Ceiling light",new A.foP()),A.aSC("A fan hangs from a strong fan-rated box. Join black, white and ground with wire nuts, then fasten the canopy.",B.PV,B.cJt,"fan",B.cQf,"Ceiling fan",new A.foQ())],C.ax("O<a3C>")))
w($,"idG","Gl",()=>{var v,u=C.a([],x.n)
for(v=0;v<10;++v)u.push(-72+16*v)
return u})})()};
(a=>{a["SXqNrngaLkFzx3QpyFSjD1j//Hk="]=a.current})($__dart_deferred_initializers__);