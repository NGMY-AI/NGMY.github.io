((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,C,D,Y,F,Z,N,T,A_,U,L,A0,O,H,A1,A2,V,W,P,A3,A4,Q,K,A5,M,A={
zG(d,e,f){var w=d.a,v=d.b,u=d.c
return new A.E(w+(e.a-w)*f,v+(e.b-v)*f,u+(e.c-u)*f)},
bBN(d,e){var w=Math.cos(e),v=Math.sin(e),u=d.a,t=d.c
return new A.E(u*w+t*v,d.b,-u*v+t*w)},
tQ(d,e,f,g){var w,v,u,t,s,r,q,p,o=new A.fKP(Math.cos(e),Math.sin(e)),n=new A.fKN(f),m=new A.fKO(n,e,o,g),l=new A.fKM(n,e,o),k=C.a([],x.z)
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
j=n.gox(0)
i=new A.E(q-j.a*l,p-j.b*l,o-j.c*l)
j=m.gox(0)
h=new A.E(q+j.a*k,p+j.b*k,o+j.c*k)
for(g=0;g<=a0;++g){f=g/a0
w.push(A.zG(A.zG(i,s,f),A.zG(s,h,f),f))}}w.push(D.d.gal(d))
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
a2=new A.fKG(a0,a1,a1*a0)
w.push(new A.E(a2.$4(t,p,n,m),a2.$4(l,k,j,i),a2.$4(h,g,f,e)))}}w.push(D.d.gal(a3))
return w},
hJH(d){var w,v,u,t,s,r,q,p,o,n
for(w=d.length,v=!0,u=!0,t=0;t<w;++t)if(d[t].c>=0.5)u=!1
else v=!1
if(v)return d
if(u)return B.d2u
s=C.a([],x.o)
for(r=0;w=d.length,r<w;){q=d[r];++r
p=d[r%w]
w=q.c
o=w>=0.5
n=p.c
if(o)s.push(q)
if(o!==n>=0.5)s.push(A.zG(q,p,(0.5-w)/(n-w)))}return s},
hKu(a4,a5,a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=a6[0],a2=a1.a,a3=a1.b
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
a4.aw(0,a1)
a0.clipRect(C.c1(new C.aa(0,0,320,0+d)),$.qI()[1],!0)
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
d1:function d1(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ud:function ud(d,e,f){this.a=d
this.b=e
this.c=f},
zn:function zn(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
WL:function WL(d,e,f,g,h,i){var _=this
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
bVv:function bVv(d,e){this.a=d
this.b=e},
bVw:function bVw(d){this.a=d},
bVu:function bVu(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
bVx:function bVx(d,e,f){this.a=d
this.b=e
this.c=f},
bVt:function bVt(d,e){this.a=d
this.b=e},
bVy:function bVy(d,e,f){this.a=d
this.b=e
this.c=f},
fKP:function fKP(d,e){this.a=d
this.b=e},
fKN:function fKN(d){this.a=d},
fKO:function fKO(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fKM:function fKM(d,e,f){this.a=d
this.b=e
this.c=f},
fKG:function fKG(d,e,f){this.a=d
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
_.T$=h
_.bt$=_.bM$=0},
bGh:function bGh(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bGg:function bGg(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bPz:function bPz(d){this.a=d},
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
clY:function clY(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
clZ:function clZ(d,e){this.a=d
this.b=e},
clU:function clU(){},
clV:function clV(d,e,f){this.a=d
this.b=e
this.c=f},
clX:function clX(d,e){this.a=d
this.b=e},
clW:function clW(d){this.a=d},
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
atr:function atr(d,e,f,g,h,i,j,k,l,m){var _=this
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
eSj:function eSj(d){this.a=d},
eSi:function eSi(d){this.a=d},
eSf:function eSf(d){this.a=d},
eSg:function eSg(d){this.a=d},
eSh:function eSh(d){this.a=d},
eSd:function eSd(d){this.a=d},
eSe:function eSe(d,e){this.a=d
this.b=e},
aLB:function aLB(){},
fNf(d){var w,v,u=$.fNe.h(0,d)
if(u!=null)return C.f7(u,x.d)
w=B.a2Y.h(0,d)
if(w==null)return C.f7(null,x.d)
v=$.fNd.h(0,d)
if(v==null){v=new A.bOv(w,d).$0()
$.fNd.n(0,d,v)}return v},
aTG(d){var w=0,v=C.j(x.H),u
var $async$aTG=C.e(function(e,f){if(e===1)return C.f(f,v)
for(;;)switch(w){case 0:w=2
return C.b(A.fNf(d),$async$aTG)
case 2:u=J.aV(B.a2Y.gec(B.a2Y))
case 3:if(!u.C()){w=4
break}w=5
return C.b(A.fNf(u.gS(u)),$async$aTG)
case 5:w=3
break
case 4:return C.h(null,v)}})
return C.i($async$aTG,v)},
hrY(d){var w,v,u=new Float64Array(d*16)
for(w=0;w<d;++w){v=w*16
u[v+15]=1
u[v+10]=1
u[v+5]=1
u[v]=1}return u},
h07(d,e,f){var w,v,u,t
if(d>e){w=d
v=e}else{w=e
v=d}if(w>f){u=w
w=f}else u=f
if(v>w){t=w
w=v
v=t}return(v*65536+w)*65536+u},
hrZ(d,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=d.c,g=d.b===1,f=g?4:3,e=h.length
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
h08(d,a0,a1,a2,a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
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
dgu:function dgu(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=$},
LF:function LF(d,e,f,g,h){var _=this
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
bOv:function bOv(d,e){this.a=d
this.b=e},
bOn:function bOn(){},
bOk:function bOk(d,e){this.a=d
this.b=e},
bOj:function bOj(){},
bOp:function bOp(d,e,f){this.a=d
this.b=e
this.c=f},
bOq:function bOq(d){this.a=d},
bOr:function bOr(d){this.a=d},
bOo:function bOo(d,e){this.a=d
this.b=e},
bOl:function bOl(d){this.a=d},
bOm:function bOm(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
bOu:function bOu(d){this.a=d},
bOs:function bOs(){},
bOt:function bOt(d){this.a=d},
bOw:function bOw(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
dm1:function dm1(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
daE:function daE(d,e){this.a=d
this.b=e},
fZU(d,e){var w=C.a([],x.ha),v=C.a([new A.L6(),new A.L6(),new A.L6()],x.gQ),u=C.a([],x.s),t=new C.eJ()
t.dB(e)
w=new A.aRv(d,t,w,v,u)
w.bvq(d,e)
return w},
hpt(d,e){var w,v,u,t,s,r,q,p,o=J.a5(e),n=x.Y,m=n.a(o.h(e,"wired"))
if(m==null)m=D.rc
w=n.a(o.h(e,"plumbed"))
if(w==null)w=D.rc
for(o=d.gqq(),n=o.length,v=J.a5(w),u=J.a5(m),t=0;t<o.length;o.length===n||(0,C.L)(o),++t){s=o[t]
r=""+s.a
q=u.h(m,r)
if(C.qD(q)){s.ay=!q
s.CW=null}p=v.h(w,r)
if(C.qD(p)){r=s.c
r=r==="bathroom"||r==="kitchen"}else r=!1
if(r){s.ch=!p
s.cx=null}}},
hpu(d){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=J.a5(d),j=C.aJ(k.h(d,"seed"))
j=j==null?l:D.k.N(j)
if(j==null)j=1
w=C.aJ(k.h(d,"clock"))
w=w==null?l:D.k.N(w)
v=A.fZU(j,(w==null?0:w)+7)
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
r=new A.Hd(D.k.N(C.dQ(w.h(m,"id"))),D.k.N(C.dQ(w.h(m,"res"))),C.cO(w.h(m,"kind")),C.cO(w.h(m,"msg")),D.k.N(C.dQ(w.h(m,"reward"))))
r.f=C.dQ(w.h(m,"age"))
j.push(r)}return v},
bHq(){var w=0,v=C.j(x.dy),u,t=2,s=[],r,q,p,o,n
var $async$bHq=C.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return C.b(C.az(),$async$bHq)
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
return C.i($async$bHq,v)},
aRw(){var w=0,v=C.j(x.H),u=1,t=[],s,r,q
var $async$aRw=C.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:u=3
w=6
return C.b(C.az(),$async$aRw)
case 6:s=e
w=7
return C.b(J.hC(s,"ngmy_community_v1"),$async$aRw)
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
return C.i($async$aRw,v)},
EC:function EC(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
O1:function O1(d){var _=this
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
L6:function L6(){this.a=-1
this.b=100
this.c=0},
aRv:function aRv(d,e,f,g,h){var _=this
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
bHl:function bHl(){},
bHi:function bHi(d){this.a=d},
bHj:function bHj(d,e){this.a=d
this.b=e},
bHk:function bHk(){},
bHp:function bHp(d){this.a=d},
bHn:function bHn(d,e){this.a=d
this.b=e},
bHo:function bHo(d){this.a=d},
bHm:function bHm(d,e){this.a=d
this.b=e},
bHr:function bHr(){},
U_:function U_(d){this.a=d},
bhQ:function bhQ(){var _=this
_.d=null
_.e=$
_.f=null
_.r="calls"
_.x=_.w=null
_.y=0
_.c=_.a=null},
dKc:function dKc(d,e){this.a=d
this.b=e},
dKd:function dKd(d){this.a=d},
dKp:function dKp(){},
dKj:function dKj(d,e){this.a=d
this.b=e},
dKk:function dKk(d){this.a=d},
dKi:function dKi(d){this.a=d},
dK8:function dK8(){},
dK9:function dK9(){},
dKs:function dKs(){},
dKt:function dKt(){},
dKr:function dKr(d,e){this.a=d
this.b=e},
dKq:function dKq(d,e){this.a=d
this.b=e},
dK7:function dK7(d,e){this.a=d
this.b=e},
dKe:function dKe(d,e,f){this.a=d
this.b=e
this.c=f},
dKf:function dKf(d,e,f){this.a=d
this.b=e
this.c=f},
dKg:function dKg(d,e,f){this.a=d
this.b=e
this.c=f},
dKh:function dKh(d,e){this.a=d
this.b=e},
dKb:function dKb(d,e,f){this.a=d
this.b=e
this.c=f},
dKa:function dKa(d,e,f){this.a=d
this.b=e
this.c=f},
dKm:function dKm(d,e){this.a=d
this.b=e},
dKn:function dKn(d,e){this.a=d
this.b=e},
dKo:function dKo(d){this.a=d},
dKl:function dKl(d){this.a=d},
dKu:function dKu(d){this.a=d},
dKv:function dKv(){},
abv:function abv(d,e,f){this.c=d
this.d=e
this.a=f},
bcK:function bcK(d,e){this.b=d
this.a=e},
aSD(d,e,f,g,h,i,j){return new A.a3D(g,i,h,e,f,j)},
Ag(d){return D.d.iC($.hnk(),new A.fnF(d))},
bCb(d,e){var w,v,u=d.e,t=new C.K(u,new A.fL7(),C.U(u).k("K<1,n>")).fI(0)
u=e.b
w=C.a3(u).k("bc<2>")
v=C.db(new C.bc(u,w),w.k("J.E"))
return t.da(0,v.gkV(v))},
hje(d,e,f,g,h){var w,v
if(e.a&&e.c===0){if(e.r)return"SHOCK! The breaker was still ON and you touched a live wire. Always turn the power OFF and test the wires first."
return"STOP! The breaker is still ON, so these wires are live (120 volts). Turn the breaker OFF first. This can shock you badly."}if(e.c!==0)return"The device is already in the box. Pull it out again to change the wires."
if(!e.r&&!h&&!g.c.t(0,f))return d.r.$2(f,g)
w=e.b
v=g.a
if(w.h(0,v)!=null)return"That place already has a wire. Tap the wire to take it off first."
if(new C.bc(w,C.a3(w).k("bc<2>")).t(0,f))return"That wire is already fastened. Tap it to take it off if you want to move it."
w.n(0,v,f)
return null},
afv(b1,b2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8=null,a9=new A.fnL(b1),b0=new A.fnJ(b1)
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
a6=new C.a2(w,new A.fnH(),h).gM(0)
a7=new C.a2(w,new A.fnI(),h).gM(0)
if(t>0||o>0)return B.fIN
w=u>0
if(!(w&&s>0))h=r>0&&v>0
else h=!0
if(h)return B.fIU
if(w&&r>0)return B.fIO
if(q>0||n>0)return B.fIR
if(m>0&&v<a6)return B.fIT
if(v<a6)return B.fIP
if(a7>0&&s<a7)return B.fIS
if(p===0)return B.fIM
return B.fIQ},
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
fUo(a9,b0,b1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=C.a([],x.z),a6=new A.jf(a5),a7=a9.a,a8=a7==="light"||a7==="fan"
if(b1){a6.b=1
a6.iy(B.fEB,B.aRN,B.uR,3)
a6.iy(B.fFw,B.aRN,B.uR,3)
a6.iy(B.fGT,B.aS7,B.uR,2)
a6.iy(B.fFY,B.aS7,B.uR,2)
a6.b=2
a6.qe(B.fEf,B.aRI,B.m6,0.05,3)
a6.qe(B.fDS,B.aRI,B.m6,0.05,3)
a6.qe(B.fDL,B.fHh,B.m6,0.05,2)}w=A.haa(a6,a7,!0)
v=new A.flJ(a6,b0,a7,a8)
u=D.d.gK(w)
t=a7==="switch"
if(t){s=D.d.gal(w)
v.$5(10,u.ad(0,B.fzF),B.fGW,"blackLine",B.Kj)
v.$5(13,s.ad(0,B.fH2),B.fCC,"blackLoad",B.Kj)
v.$5(12,u.ad(0,B.fFe),B.fC6,"ground",B.x1)
a6.b=6
r=x.o
a6.jT(C.a([u.ad(0,B.aRH),B.fA_,B.TA],r),0.075,B.wL,!1,0.3,8)
a6.jT(C.a([s.ad(0,B.aRH),B.fEG,B.TA],r),0.075,B.wL,!1,0.3,8)
a6.Ki(B.TA,B.fGQ,0.28,B.abD,0.18,0.3,10)}else{v.$5(10,u.ad(0,B.fCH),B.fzU,"black",B.Kj)
v.$5(11,u.ad(0,B.fDG),B.fEP,"white",B.wL)
v.$5(12,u.ad(0,B.fDZ),B.fDT,"ground",B.x1)}if(a8)A.hb9(a6,a7,b0)
else A.haP(a6,a7,A.bxJ(a7,b0),b0.w,!1)
if(b0.e&&b0.c===0){a6.b=0
a6.d=0.5
for(r=a9.f,q=r.length,p=0;p<q;++p){o=r[p]
n=A.bzT(a7,o.a,b0)
if(o.e)m=D.cn
else{l=o.f
if(l==="ground")m=D.bo
else{l=l==="neutral"?D.c:B.VM
m=l}}if(a8)l=0
else{l=n.a
if(l>0.4)l=0.12
else l=l<-0.4?-0.12:0}if(a8)k=0.6
else k=Math.abs(n.a)<0.4?0.2:0
a6.iQ(new A.E(n.a+l,n.b+0,n.c+k),0.36,m,4,8,0.1)}a6.d=1}if(b0.c>=2&&!a8)A.hdc(a6,b0.w)
r=!1
if(b0.c>=2)if(b0.d)r=a7==="outlet"||a7==="gfci"
if(r)A.hRZ(a6,b0.a&&!b0.w)
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
d=C.F([1,B.dX3,2,B.dXh,3,new A.d1(r,"A box that holds the wire connections. Every connection must be inside a box, never loose in the wall or the ceiling."+l,new A.E(0,0,-1.2),9),4,new A.d1(k,"The yellow jacket holds three wires: black (hot), white (neutral) and bare copper (ground). Yellow means 12 gauge wire for a 20 amp circuit. White jackets are 14 gauge for 15 amps.",new A.E(-0.4,1.5,-1.8),8),5,B.dXE,10,new A.d1("Black wire: hot","The hot wire brings the power from the breaker. It is the dangerous one. "+j,new A.E(-0.8,-0.8,1.2),7),13,B.dWQ,11,new A.d1("White wire: neutral","The neutral wire carries the power back to the panel. "+i,new A.E(0,-0.8,1.2),7),12,new A.d1("Bare copper wire: ground","The ground wire is a safety path. If a wire touches metal, the current runs down the ground instead of through you. "+h,new A.E(0.5,-0.8,1.2),7),6,B.dXf,20,new A.d1(f,t,new A.E(0,-0.2,g),9),21,B.dXk,22,B.dXD,23,B.dXd,24,B.dXi,25,B.dX6,26,B.dXl,27,B.dXx,28,B.dX1,30,B.dWL,31,B.dWJ,51,B.dXg,52,B.dWN,53,B.dXp,54,new A.d1(e,q,new A.E(0,0,6.4),9),55,B.dXz],x.S,x.q)
a0=C.a([],x.E)
if(b0.f&&b0.c===0)for(t=a9.f,r=t.length,p=0;p<r;++p){o=t[p]
n=A.bzT(a7,o.a,b0)
a1=o.f
A:{q="hot"===a1
if(q){l=B.exg
break A}if("neutral"===a1){l=B.eom
break A}if("ground"===a1){l=B.eqT
break A}l=B.eej
break A}a2=l.a
if(a8){B:{if(q){k="BLACK NUT \xb7 HOT"
break B}if("neutral"===a1){k="WHITE NUT \xb7 NEUTRAL"
break B}k="GROUND"
break B}a3=k}else a3=a2
if(a8){C:{if(q){q=B.fDp
break C}if("neutral"===a1){q=B.fDk
break C}q=B.fHr
break C}a4=q}else{q=n.a
if(q>0.4)k=3.8
else k=q<-0.4?-4.2:0
a4=new A.E(k,Math.abs(q)<0.4?-3:-0.4,1)}a0.push(new A.ud(new A.E(n.a+a4.a,n.b+a4.b,n.c+a4.c),a3,l.b))}if(b0.a&&b0.c===0)a0.push(B.bQu)
return new A.zn(a5,d,a0,B.vH)},
haa(d,e,f){var w,v,u=e==="light"||e==="fan"
d.b=3
if(u){d.e5(B.aS9,B.aRM,2.2,B.x0,0.3,18)
d.a3_(B.aRM,B.fO,2.2,B.x0,!1,!0,0.3,18)}else{d.bG(B.aS9,B.fEm,B.x0,0.3)
d.bG(B.fCp,B.aRz,B.x0,0.3)
d.bG(B.fAo,B.aRz,B.x0,0.3)
d.bG(B.fDO,B.aRR,B.x0,0.3)
d.bG(B.fDi,B.aRR,B.x0,0.3)}w=C.a([],x.o)
v=new A.f7T(d,f,w)
if(e==="switch"){v.$2(4,B.cQS)
v.$2(5,B.cP5)}else v.$2(4,B.d17)
return w},
hjj(d,e){var w
A:{if(10===e){w=d==="switch"?"blackLine":"black"
break A}if(13===e){w="blackLoad"
break A}if(11===e){w="white"
break A}if(12===e){w="ground"
break A}w=null
break A}return w},
haP(d,e,f,g,h){var w,v,u,t,s,r,q,p,o,n,m,l,k=new A.E(0,-0.2,f),j=e==="switch",i=e==="gfci"
if(g)w=B.wW
else w=j?B.bca:B.Wp
v=i?3.1:2.95
d.e=0
d.b=20
if(!h){d.bG(k.ad(0,B.fBv),new A.E(1.5,v,1.3),w,0.25)
d.e=0.15
d.b=26
u=k.ad(0,B.fBl)
d.bG(u,B.fGR,g?B.b9i:B.Kz,0.8)
d.bO(k.ad(0,B.fFb),B.fI9,B.E1)}d.e=0.3
d.b=27
u=k.ad(0,B.fD0)
d.bG(u,new A.E(1.3,i?2.85:2.7,0.16),w,0.3)
if(j){d.e=0.7
d.b=28
u=k.ad(0,B.fEF)
d.bG(u,B.fCF,g?B.wW:F.Wz,0.35)
u=k.ad(0,B.fGw)
d.bG(u,B.fFX,g?B.wW:B.acl,0.35)}else{d.e=0.6
u=i?E.ary:B.ddf
t=u.length
s=f+0.47
r=f+0.46
q=f+0.5
p=0
for(;p<t;++p){o=u[p]
d.b=27
n=-0.2+(o+0.04)
d.bO(new A.E(-0.28,n,s),B.fEl,B.Ea)
d.bO(new A.E(0.28,n,s),B.fD5,B.Ea)
n=-0.2+(o-0.32)
d.hB(new A.E(0,n,r),new A.E(0,n,q),0.11,B.Ea,10)}if(i){d.e=0.7
d.b=28
d.bG(k.ad(0,B.fF_),B.aRC,B.bfr,0.3)
d.bG(k.ad(0,B.fH3),B.aRC,B.aeW,0.3)}}if(h){d.e=0
return}m=i?0.95:0.85
l=i?-0.75:-0.55
u=new A.f9c(d,k)
if(!j){u.$6$taped(23,-1,m,B.acH,B.ada,i)
u.$5(24,-1,l,B.acH,B.ada)}u.$6$taped(21,1,m,B.VM,B.aeq,i)
u.$5(22,1,l,B.VM,B.aeq)
d.e=0.9
d.b=25
d.e5(k.ad(0,B.fDM),k.ad(0,B.fHt),0.18,B.bhk,0.7,12)
d.bO(k.ad(0,B.fDm),B.fDQ,D.e9)
d.bG(k.ad(0,B.fBB),B.fF2,B.b69,0.6)
d.e=0},
hb9(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k=e==="fan",j=A.bxJ(e,f)
d.e=0
d.b=55
w=j-0.3
v=j+0.3
u=k?3.3:3.5
t=f.w?B.wW:B.bcD
d.e5(new A.E(0,0,w),new A.E(0,0,v),u,t,0.45,20)
d.b=54
if(k){u=j+4.2
d.e5(new A.E(0,0,v),new A.E(0,0,u),0.45,B.b9e,0.5,10)
v=j+7.4
d.e5(new A.E(0,0,u),new A.E(0,0,v),3.6,B.Vm,0.5,18)
d.e5(new A.E(0,0,v),new A.E(0,0,j+8.6),1.6,B.bgG,0.7,14)}else{d.d=0.92
v=f.w?B.wW:B.ba7
d.iQ(new A.E(0,0,j+1.2),3.6,v,6,14,0.7)
d.d=1}d.b=54
s=[B.eov,B.ebw,B.ev2]
for(v=x.o,r=j-3.2,q=0;q<3;++q){u=s[q]
p=f.c===0?r:j
t=u.b.a
d.jT(C.a([new A.E(t,-0.3,w),new A.E(t,-0.3,p+0.4)],v),0.07,u.a,!1,0.3,6)}if(f.c===0)for(w=[B.ehH,B.eq0,B.exJ],v=f.b,q=0;q<3;++q){o=w[q]
u=o.a
n=A.bzT(e,u,f)
d.b=u
d.e=0.8
t=n.a+0
m=n.b+0
l=n.c
d.e5(new A.E(t,m,l+-0.2),new A.E(t,m,l+0.3),0.09,B.x1,0.6,6)
if(v.ai(0,u))d.Ki(new A.E(t,m,l+-0.5),new A.E(t,m,l+0.9),0.4,o.b,0.26,0.4,8)
d.e=0}},
hdc(d,e){var w
d.e=0.4
d.b=30
w=e?B.wW:B.b5m
d.bG(B.fEU,B.aRS,w,0.3)
d.bG(B.fEe,B.aRS,w,0.3)
d.bG(B.fAl,B.aS_,w,0.3)
d.bG(B.fAS,B.fBJ,w,0.3)
d.bG(B.fHo,B.aS_,w,0.3)
d.e5(B.fDa,B.fEb,0.1,B.Kz,0.8,10)
d.e=0},
hRZ(d,e){var w,v
d.b=31
for(w=0;w<2;++w){v=B.cTk[w]
d.e5(new A.E(v,0.52,0.2),new A.E(v,0.52,1.9),0.04,B.Kz,0.8,6)}d.bG(B.fyS,B.fGI,B.b9Q,0.35)
d.b8J(B.aRO,0.2,e?D.VO:B.bdi,0.9)
if(e){d.d=0.35
d.iQ(B.aRO,0.5,D.VO,4,8,0)
d.d=1}},
mi:function mi(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.e=g
_.f=h},
XI:function XI(d){var _=this
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
a3D:function a3D(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.d=f
_.e=g
_.f=h
_.r=i},
foO:function foO(){},
foP:function foP(){},
foQ:function foQ(){},
foR:function foR(){},
foS:function foS(){},
fnF:function fnF(d){this.a=d},
fL7:function fL7(){},
BO:function BO(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fnL:function fnL(d){this.a=d},
fnM:function fnM(d){this.a=d},
fnJ:function fnJ(d){this.a=d},
fnK:function fnK(d){this.a=d},
fnH:function fnH(){},
fnI:function fnI(){},
flJ:function flJ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
flK:function flK(d){this.a=d},
f7T:function f7T(d,e,f){this.a=d
this.b=e
this.c=f},
f9c:function f9c(d,e){this.a=d
this.b=e},
bzu(d){return D.d.dL(B.a13,new A.fly(d),new A.flz())},
hji(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j={},i=new A.fL6(),h=new A.fL3(),g=d.c
if(g==="hall"){w=e.e?d.gj7(0)-14:Math.min(e.d,d.gj7(0)-14)
v=i.$1(w)
return new A.b6N(w,v,d.gj7(0)/2,h.$1(v))}u=d.gfp(0)
t=d.gfp(0)/2-6
if(g==="bathroom")t=14
g=C.a([],x.f)
for(s=d.w,r=s.length,q=0;q<s.length;s.length===r||(0,C.L)(s),++q){p=s[q]
if(p.a==="back"){o=p.b
g.push(new C.y(o-19,o+19))}}D.d.b_(g,new A.fL4())
n=j.a=j.b=-u/2+6
m=new A.fL5(j)
for(u=g.length,q=0;q<g.length;g.length===u||(0,C.L)(g),++q){s=g[q]
l=s.a
if(l>n)m.$2(n,Math.min(l,t))
n=Math.max(n,s.b)}if(n<t)m.$2(n,t)
k=Math.max(30,j.a-j.b-4)
w=e.e?k:Math.min(e.d,k)
v=i.$1(w)
return new A.b6N(w,v,(j.b+j.a)/2,h.$1(v))},
yA(d,e,f,g,h,i,j,k){var w=x.S
return new A.a47(d,e,f,g,h,i,j,k,C.a([],x._),C.a([0,0,0],x.t),C.aX(w),C.T(w,x.i),C.T(w,x.N),C.a([],x.cX))},
bPB(d){var w=new A.aTU(d)
w.c2U()
return w},
hsc(d){var w=new A.aTU(7)
w.bvB(d)
return w},
i5s(d){var w,v=d.c
A:{if("bedroom"===v){w=1
break A}if("kitchen"===v||"bathroom"===v){w=2
break A}w=0
break A}return w},
a44:function a44(d,e,f,g){var _=this
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
fly:function fly(d){this.a=d},
flz:function flz(){},
b6N:function b6N(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fL6:function fL6(){},
fL3:function fL3(){},
fL4:function fL4(){},
fL5:function fL5(d){this.a=d},
qc:function qc(d,e,f){this.a=d
this.b=e
this.c=f},
aTP:function aTP(d,e,f){this.a=d
this.b=e
this.c=f},
a47:function a47(d,e,f,g,h,i,j,k,l,m,n,o,p,q){var _=this
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
bP0:function bP0(){},
aTU:function aTU(d){var _=this
_.a=""
_.b=d
_.c=!1
_.d=$
_.e=0},
bPC:function bPC(){},
bPD:function bPD(){},
bPH:function bPH(){},
bPG:function bPG(){},
bPF:function bPF(){},
bPE:function bPE(){},
aZh(d,e,f){return new A.N3(f,d,e,null)},
N3:function N3(d,e,f,g){var _=this
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
e2h:function e2h(){},
e2e:function e2e(d){this.a=d},
e2f:function e2f(d){this.a=d},
e2g:function e2g(d){this.a=d},
e1E:function e1E(d,e,f){this.a=d
this.b=e
this.c=f},
e1F:function e1F(d){this.a=d},
e1D:function e1D(d){this.a=d},
e1G:function e1G(d,e){this.a=d
this.b=e},
e10:function e10(d,e){this.a=d
this.b=e},
e1O:function e1O(d){this.a=d},
e1b:function e1b(d,e){this.a=d
this.b=e},
e1c:function e1c(d,e){this.a=d
this.b=e},
e1d:function e1d(d,e){this.a=d
this.b=e},
e1e:function e1e(d,e){this.a=d
this.b=e},
e1f:function e1f(d,e,f){this.a=d
this.b=e
this.c=f},
e1a:function e1a(d,e){this.a=d
this.b=e},
e1g:function e1g(d){this.a=d},
e1C:function e1C(d,e,f){this.a=d
this.b=e
this.c=f},
e1A:function e1A(d,e,f){this.a=d
this.b=e
this.c=f},
e1B:function e1B(d,e){this.a=d
this.b=e},
e1w:function e1w(d,e,f){this.a=d
this.b=e
this.c=f},
e1v:function e1v(){},
e1x:function e1x(d,e){this.a=d
this.b=e},
e1y:function e1y(d,e){this.a=d
this.b=e},
e1z:function e1z(d,e){this.a=d
this.b=e},
e1m:function e1m(d,e){this.a=d
this.b=e},
e1j:function e1j(){},
e1k:function e1k(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e1i:function e1i(d,e,f){this.a=d
this.b=e
this.c=f},
e1l:function e1l(d,e,f){this.a=d
this.b=e
this.c=f},
e1h:function e1h(d,e){this.a=d
this.b=e},
e29:function e29(d){this.a=d},
e27:function e27(d){this.a=d},
e28:function e28(d,e){this.a=d
this.b=e},
e20:function e20(d,e,f){this.a=d
this.b=e
this.c=f},
e2_:function e2_(){},
e21:function e21(){},
e22:function e22(d,e){this.a=d
this.b=e},
e23:function e23(d){this.a=d},
e24:function e24(d){this.a=d},
e25:function e25(d){this.a=d},
e26:function e26(d){this.a=d},
e1X:function e1X(d){this.a=d},
e1W:function e1W(d){this.a=d},
e1T:function e1T(d,e,f){this.a=d
this.b=e
this.c=f},
e1R:function e1R(d){this.a=d},
e1S:function e1S(){},
e1U:function e1U(d,e,f){this.a=d
this.b=e
this.c=f},
e1Q:function e1Q(d,e){this.a=d
this.b=e},
e1V:function e1V(d,e){this.a=d
this.b=e},
e1J:function e1J(d,e){this.a=d
this.b=e},
e1K:function e1K(d){this.a=d},
e1L:function e1L(){},
e1Y:function e1Y(d,e){this.a=d
this.b=e},
e1P:function e1P(d,e){this.a=d
this.b=e},
e1N:function e1N(d){this.a=d},
e1H:function e1H(d){this.a=d},
e1I:function e1I(){},
e1M:function e1M(){},
e16:function e16(d){this.a=d},
e18:function e18(d,e,f){this.a=d
this.b=e
this.c=f},
e19:function e19(d){this.a=d},
e17:function e17(d){this.a=d},
e12:function e12(d){this.a=d},
e13:function e13(d){this.a=d},
e2a:function e2a(d){this.a=d},
e15:function e15(d){this.a=d},
e14:function e14(d){this.a=d},
e0k:function e0k(d){this.a=d},
e0j:function e0j(d,e,f){this.a=d
this.b=e
this.c=f},
e0e:function e0e(){},
e0f:function e0f(){},
e0g:function e0g(d){this.a=d},
e0h:function e0h(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e11:function e11(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
e1Z:function e1Z(d,e){this.a=d
this.b=e},
e1t:function e1t(d,e){this.a=d
this.b=e},
e1u:function e1u(d,e){this.a=d
this.b=e},
e0i:function e0i(d,e){this.a=d
this.b=e},
e0Q:function e0Q(d){this.a=d},
e0R:function e0R(d){this.a=d},
e0S:function e0S(d){this.a=d},
e0T:function e0T(d){this.a=d},
e0U:function e0U(d,e){this.a=d
this.b=e},
e0V:function e0V(d){this.a=d},
e0P:function e0P(d){this.a=d},
e0W:function e0W(d,e){this.a=d
this.b=e},
e0O:function e0O(d,e){this.a=d
this.b=e},
e0X:function e0X(d,e){this.a=d
this.b=e},
e0N:function e0N(d,e){this.a=d
this.b=e},
e0Y:function e0Y(d){this.a=d},
e0M:function e0M(d){this.a=d},
e0Z:function e0Z(d,e){this.a=d
this.b=e},
e0L:function e0L(d,e){this.a=d
this.b=e},
e1_:function e1_(d,e){this.a=d
this.b=e},
e2d:function e2d(d){this.a=d},
e2b:function e2b(d){this.a=d},
e2c:function e2c(d){this.a=d},
e0C:function e0C(d,e){this.a=d
this.b=e},
e0u:function e0u(d){this.a=d},
e0t:function e0t(){},
e0s:function e0s(d){this.a=d},
e0D:function e0D(d){this.a=d},
e0r:function e0r(d){this.a=d},
e0E:function e0E(d){this.a=d},
e0F:function e0F(d){this.a=d},
e0q:function e0q(d){this.a=d},
e0G:function e0G(d){this.a=d},
e0H:function e0H(d,e){this.a=d
this.b=e},
e0p:function e0p(){},
e0I:function e0I(d){this.a=d},
e0o:function e0o(d){this.a=d},
e0J:function e0J(d){this.a=d},
e0n:function e0n(d){this.a=d},
e0K:function e0K(d){this.a=d},
e0v:function e0v(d){this.a=d},
e0w:function e0w(d){this.a=d},
e0x:function e0x(d){this.a=d},
e0y:function e0y(d){this.a=d},
e0z:function e0z(d){this.a=d},
e0A:function e0A(d){this.a=d},
e0m:function e0m(){},
e0B:function e0B(d){this.a=d},
e0l:function e0l(d){this.a=d},
e1s:function e1s(d){this.a=d},
e1p:function e1p(d,e,f){this.a=d
this.b=e
this.c=f},
e1q:function e1q(d,e){this.a=d
this.b=e},
e1o:function e1o(d){this.a=d},
e1r:function e1r(d,e){this.a=d
this.b=e},
e1n:function e1n(d){this.a=d},
bgU:function bgU(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
dmr:function dmr(d,e){this.a=d
this.b=e},
bgi:function bgi(d,e){this.b=d
this.a=e},
hev(e4,e5,e6,e7,e8,e9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6,d7,d8,d9="walls",e0="GFCI outlet",e1="Wall outlet",e2="\ud83d\udeb0 Needs plumbing",e3=e4.c
if(e3==="outside")return A.hOu(e4,e7,e6,e9)
w=x.z
v=C.a([],w)
u=new A.jf(v)
t=C.T(x.S,x.q)
s=C.a([],x.E)
r=C.a([],x.h)
q=e4.gfp(0)
p=e4.gj7(0)
o=C.a([],x.O)
for(n=e4.z,m=n.length,l=0;l<n.length;n.length===m||(0,C.L)(n),++l)o.push(B.avB[n[l]])
k=B.avo[e4.Q]
j=new A.flX(e6)
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
u.qe(new A.E(0,-0.6,n),new A.E(m,1.2,i),h,e,3)
t.n(0,310,new A.d1("Floor","The "+k.a.toLowerCase()+" floor.",new A.E(0,0,n),140))
u.b=0
if(g==="wood")for(g=-q/2,d=1;d<8;++d){f=C.aq(h,D.w,0.25)
f.toString
u.bO(new A.E(g+d*q/8,0.05,n),new A.E(0.3,0.2,p),f)}else if(f)for(h=-q/2,d=1;d<6;++d){u.bO(new A.E(h+d*q/6,0.05,n),new A.E(0.3,0.2,p),B.abj)
u.bO(new A.E(0,0.05,d*p/6),new A.E(q,0.2,0.3),B.abj)}u.b=j.$2(d9,300)
u.iy(new A.E(0,48,-0.6),new A.E(m,96,1.2),o[0],3)
u.b=j.$2(d9,301)
h=-q
g=h/2
u.iy(new A.E(g-0.6,48,n),new A.E(1.2,96,p),o[1],3)
u.b=j.$2(d9,302)
f=q/2
u.iy(new A.E(f+0.6,48,n),new A.E(1.2,96,p),o[2],3)
t.n(0,300,B.dWS)
t.n(0,301,B.dWW)
t.n(0,302,B.dX4)
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
u.iy(new A.E(0,96.6,n),new A.E(m,1.2,i),B.auf[e4.as],2)
u.f=u.d=1
u.b=0
u.bG(new A.E(0,94,1),new A.E(q,3,1.4),D.c,0.2)
u.bG(new A.E(g+1,94,n),new A.E(1.4,3,p),D.c,0.2)
u.bG(new A.E(f-1,94,n),new A.E(1.4,3,p),D.c,0.2)
t.n(0,320,new A.d1("Ceiling","Pick a colour above to paint the ceiling.",new A.E(0,96,n),140))
n=e4.w
a0=D.d.b7(n,new A.flM())?"left":"right"
o=e3==="hall"
if(!o){m=C.a([],w)
a1=new A.jf(m)
a1.f=1
a1.bO(B.fHJ,B.fzT,B.Ai)
a1.bG(B.fxC,B.fDy,B.pw,0.5)
a1.bO(B.aRi,B.fEJ,B.Ai)
a1.bO(B.aRi,B.fBY,B.Ai)
a2=p*0.55
if(e5)D.d.v(v,A.tQ(m,0,3.141592653589793,new A.E(0,0,p+0.2)))
D.d.v(v,a0==="right"?A.tQ(m,0,-1.5707963267948966,new A.E(f,0,a2)):A.tQ(m,0,1.5707963267948966,new A.E(g,0,a2)))}for(m=e4.ax,i=e4.at,d=0;d<n.length;++d){a3=n[d]
a4=m.h(0,d)
if(a4==null)a4=i.t(0,d)?1.25:0
e=C.a([],w)
a5=new A.jf(e)
a5.f=1
a6=a5.b=600+d
a5.bO(B.fEA,B.fEn,B.m8)
a7=C.a([],w)
a8=new A.jf(a7)
a8.r=!0
a8.b=a6
if(a4>0.04){a5.b=0
a9=A.hLB(a3.c)
b0=a9.a
a5.bO(B.fDf,B.fB2,b0)
a5.bO(B.fE1,B.fI3,a9.b)
b1=C.aq(b0,D.w,0.25)
b1.toString
a5.bO(B.fDo,B.fGF,b1)
b2=-a4
b1=A.bBN(B.fI0,b2)
a8.ajb(new A.E(-12.5+b1.a,0+b1.b,1.2+b1.c),B.fAn,B.wK,0.15,b2)}else{a5.bG(B.fDr,B.fCL,B.wK,0.15)
a5.bG(B.fDx,B.fDN,B.DT,0.8)
a5.bO(B.fDP,B.aS5,B.L_)
a5.bO(B.fHG,B.aS5,B.L_)}b1=new A.flV(a3,q,p)
D.d.v(v,b1.$1(e))
D.d.v(v,b1.$1(a7))
t.n(0,a6,new A.d1("Door","Tap the door to go through it.",B.aR5,90))}for(m=e4.x,i=m.length,l=0;l<m.length;m.length===i||(0,C.L)(m),++l){b3=m[l]
e=b3.b
a6=B.pX.h(0,e)
a6.toString
a7=C.a([],w)
b4=new A.jf(a7)
b4.r=!0
b4.f=e==="rug"?1:2
b1=100+b3.a
b4.b=j.$2("furniture",b1)
A.hbk(b4,e,B.a0W[b3.f])
D.d.v(v,A.tQ(a7,0,b3.e*3.141592653589793/2,new A.E(b3.c,0,b3.d)))
t.n(0,b1,new A.d1(a6.a,y.b,new A.E(b3.c,12,b3.d),90))}u.f=2
u.r=!0
b5=p*0.5
w=C.U(n)
m=f-10
b6=D.k.D(new C.cQ(new C.a2(n,new A.flN(),w.k("a2<1>")),new A.flO(),w.k("cQ<1,N>")).cI(0,g+30,new A.flP())+24,g+10,m)
b7=e4.dx==="fan"
b8=e4.ga4F()
b9=b8&&e4.gTi()&&e4.db
u.b=703
if(b7){u.hB(new A.E(0,95.5,b5),new A.E(0,86,b5),1,B.iK,8)
u.e5(new A.E(0,86,b5),new A.E(0,79,b5),6,D.ti,0.5,14)
w=b9?B.t6:D.dz
u.e5(new A.E(0,79,b5),new A.E(0,76,b5),3.6,w,0.6,12)}else{w=b9?B.t6:D.dz
u.e5(new A.E(0,95.5,b5),new A.E(0,93,b5),7,w,0.6,16)}if(b9&&!b7){u.b=0
u.f=3
u.d=0.2
u.baF(new A.E(0,93,b5),new A.E(0,0.5,b5),36,B.t6,!1,14)
u.d=1
u.f=2}c0=b7?"Ceiling fan":"Ceiling light"
if(!b8)c1="It has no power yet. "+(e4.id.length!==0?"Tap it to wire it.":"The room still needs wiring: use the Wiring button.")
else if(!e4.gTi())c1="It is ready: wire the wall switch to turn it on."
else{w=e4.db?"It is on. Tap the wall switch (or tap this) to turn it off.":"It is off. Tap the wall switch (or tap this) to turn it on."
c1=w}t.n(0,703,new A.d1(c0,c1,new A.E(0,88,b5),80))
w=e3==="bathroom"
n=!w
c2=!n||e3==="kitchen"||e4.id==="gfci"
i=e4.gaFn()
e=c2?e0:e1
a6=e4.id.length!==0||e4.gjy()
a7=c2?e0:e1
a7=C.a([new C.ev([0,700,h/4,i,e]),new C.ev([1,701,q/4,a6,a7])],x.az)
for(i=e4.dy,d=0;d<i.length;++d){h=i[d]
e=h.a
if(e!=="switch"){a6=h.c
e=a6.c>=2&&A.afv(A.Ag(e),a6).a==="ok"
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
u.bO(new A.E(c4,14,0.25),B.fBs,a6)
u.d=1
u.e=0
a6=c5?B.aei:D.ti
u.bG(new A.E(c4,14,0.9),B.fEX,a6,0.25)
u.b=0
for(c7=0;c7<2;++c7)for(a6=14+E.oO[c7]*2.8,c8=0;c8<2;++c8)u.bO(new A.E(c4+B.cYE[c8],a6,1.7),B.fHU,B.bdv)
u.bO(new A.E(c4,14,1.7),B.fEV,D.dz)
if(!c5)a6="This one is not wired yet. Tap it to wire it."
else a6=e.h(0,d)==null?"Tap it to plug something in.":"Tap it to plug something else in, or to unplug."
t.n(0,c3,new A.d1(c6,a6,new A.E(c4,14,2),60))}h=C.a([new C.bt(702,b6,e4.gTi())],x.al)
for(d=0;d<i.length;++d){a6=i[d]
b1=a6.a
if(b1==="switch"){c9=a6.c
b1=c9.c>=2&&A.afv(A.Ag(b1),c9).a==="ok"
h.push(new C.bt(800+d,a6.b,b1))}}for(i=h.length,l=0;l<h.length;h.length===i||(0,C.L)(h),++l){a6=h[l]
c3=a6.a
c4=a6.b
c5=a6.c
u.b=c3
u.e=0.4
u.d=0.55
a6=c5?D.b7:D.ay
u.bO(new A.E(c4,48,0.25),B.fCz,a6)
u.d=1
u.e=0
a6=c5?B.aei:D.ti
u.bG(new A.E(c4,48,0.9),B.fC8,a6,0.25)
u.bO(new A.E(c4,e4.db&&c5?49.2:46.8,1.9),B.fC2,B.bjk)
if(!c5)a6="Not wired yet. Tap it to wire it."
else if(e4.db)a6="On. Tap to turn the "+(b7?"fan":"light")+" off."
else a6="Off. Tap to turn the "+(b7?"fan":"light")+" on."
t.n(0,c3,new A.d1("Light switch",a6,new A.E(c4,48,2),60))}if(!e4.ga4F()&&e4.id.length===0)s.push(new A.ud(new A.E(0,70,b5),"\u26a1 No power: needs wiring",D.bI))
i=!1
if(e4.id.length!==0)if(!e4.gyA()){i=e4.id
i=!(i==="ptrap"||i==="faucet")}if(i)s.push(new A.ud(new A.E(0,40,14),"\ud83d\udc46 Tap the red one to wire it",D.bI))
u.f=2
u.r=!0
for(i=a7.length,h=x.o,a6=e4.a,l=0;l<a7.length;a7.length===i||(0,C.L)(a7),++l){b1=a7[l].a
d=b1[0]
c4=b1[2]
c5=b1[3]
d0=e.h(0,d)
if(d0==null||!c5)continue
d1=A.bzu(d0)
b1=u.b=720+d
u.jT(C.a([new A.E(c4,12,1.8),new A.E(c4,6,3),new A.E(c4,2,11)],h),0.3,B.Wj,!1,0.2,6)
c9=d1.d
d2=c9<=0
if(!d2||d1.e){b2=c9*0.56
u.bG(new A.E(c4,2,15),new A.E(c9*0.45,4,14),B.iK,0.3)
u.bG(new A.E(c4,8,15),B.fB5,B.iK,0.3)
d3=12+b2/2
u.bG(new A.E(c4,d3,15),new A.E(c9,b2,3),E.Ed,0.5)
c9=(c9-3.5)/2
d4=c4-c9
d5=(b2-3.5)/2
d6=d3+d5
c9=c4+c9
d5=d3-d5
r.push(new A.WL(C.a([new A.E(d4,d6,16.6),new A.E(c9,d6,16.6),new A.E(c9,d5,16.6),new A.E(d4,d5,16.6)],h),b1,new A.flQ(d*7+a6),180,9,2))}else{c9=d1.a
if(c9==="lamp"){u.e5(new A.E(c4,0,14),new A.E(c4,1,14),6,B.Vm,0.4,14)
u.e5(new A.E(c4,1,14),new A.E(c4,22,14),1,B.At,0.5,8)
c9=e4.db?B.t6:X.Wr
u.yh(new A.E(c4,20,14),new A.E(c4,32,14),9,c9,!1,!0,5.5,0.2,16)}else{u.bG(new A.E(c4,9,15),B.fz0,B.DR,0.1)
if(c9==="toaster"){u.bG(new A.E(c4,23,15),B.fyZ,B.kD,0.8)
u.bO(new A.E(c4,28.2,15),B.fFM,B.aew)}else{u.Ki(new A.E(c4-7,21,15),new A.E(c4+7,21,15),3.6,B.KJ,3,0.6,12)
u.bG(new A.E(c4-8,14.5,15),B.fDJ,B.KJ,0.6)}}}c9=!d2||d1.e?"It is playing NGMY ads. Tap it to watch full screen with the remote.":"It is plugged in and running. Tap the outlet to unplug it or plug in something else."
t.n(0,b1,new A.d1(d1.b,c9,new A.E(c4,16,14),90))}u.f=1
u.r=!1
d7=new A.flS(e4,u,q,r,t)
d7.$2(e4.fr,0)
if(o)d7.$2(e4.fx,1)
u.f=2
o=u.r=!0
if(n?e3==="kitchen":o){c5=e4.gl3()
e3=new A.flW(u)
if(w){d8=g+17
if(c5){u.b=710
u.Ki(new A.E(6,0.5,14),new A.E(6,15,14),8,B.Ac,5.6,0.8,18)
u.e5(new A.E(6,15,14),new A.E(6,16,14),9,B.KS,0.8,18)
u.bG(new A.E(6,21,5),B.fz7,B.Ac,0.8)
u.bG(new A.E(6,28,5),B.fD9,B.KS,0.8)}else{u.b=710
u.d=0.3
u.f=3
u.bO(new A.E(6,14,9),B.fz3,D.b1)
u.d=1
u.f=2
e3.$2(-4,8)}u.b=711
u.bG(new A.E(34,14,10),B.fzO,B.DR,0.1)
u.bG(new A.E(34,29,10),B.fzR,B.VU,0.4)
if(c5){u.e5(new A.E(34,29.3,10),new A.E(34,30.1,10),6.5,D.c,0.6,18)
u.bgO(C.a([new A.E(34,30,4),new A.E(34,36,4),new A.E(34,38,7)],h),0.6,B.kD,0.9,8)}else{e3.$2(28,18)
e3.$2(40,18)}u.b=712
if(c5){u.bG(new A.E(d8,8,38),B.aRj,B.aeK,0.7)
u.bG(new A.E(d8,16.2,38),B.fGz,B.VE,0.8)
u.e5(new A.E(d8,30,3),new A.E(d8,52,3),0.7,B.kD,0.9,8)
u.e5(new A.E(d8,52,3),new A.E(d8,52,10),0.7,B.kD,0.9,8)}else{u.d=0.3
u.f=3
u.bO(new A.E(d8,8,38),B.aRj,D.b1)
u.d=1
u.f=2
e3.$2(d8-4,34)
e3.$2(d8+4,34)}e3=c5?"Fitted on its flange with a wax ring, and the supply hose joins the shut-off valve.":"There is no toilet yet: only the flange and the water stub. Use the Plumbing button to fit it."
t.n(0,710,new A.d1("Toilet",e3,new A.E(6,14,10),70))
e3=c5?"The faucet, the hoses and the P-trap are fitted.":"The sink is not plumbed. Use the Plumbing button."
t.n(0,711,new A.d1("Vanity sink",e3,new A.E(34,28,10),70))
e3=c5?"The bath is in and connected.":"The bath is not connected yet."
t.n(0,712,new A.d1("Bath",e3,new A.E(d8,10,38),90))
if(!c5)s.push(new A.ud(new A.E(0,40,14),e2,D.bj))}else{u.b=0
u.bG(new A.E(g+15,36,14),B.fzC,B.add,0.6)
u.bO(new A.E(g+28.5,36,14.4),B.fEH,D.dz)
u.bG(new A.E(m,15,14),B.fzl,B.abM,0.1)
u.bG(new A.E(m,31,14),B.fzr,B.iK,0.5)
u.bG(new A.E(f-15,32.4,14),B.aRA,D.lE,0.3)
u.bG(new A.E(f-5,32.4,14),B.aRA,D.lE,0.3)
u.b=713
u.bG(new A.E(30,15,14),B.fA9,B.DR,0.1)
u.bG(new A.E(30,31,14),B.fAa,B.El,0.5)
if(c5){u.e5(new A.E(30,32.1,14),new A.E(30,32.7,14),8,B.E8,0.8,18)
u.bgO(C.a([new A.E(30,32,5),new A.E(30,42,5),new A.E(30,44,9),new A.E(30,44,13)],h),0.7,B.kD,0.9,8)}else{e3.$2(22,18)
e3.$2(38,18)}e3=c5?"The faucet, the hoses and the drain are fitted.":"The kitchen sink is not plumbed yet. Use the Plumbing button."
t.n(0,713,new A.d1("Kitchen sink",e3,new A.E(30,30,14),70))
if(!c5)s.push(new A.ud(new A.E(30,48,14),e2,D.bj))}}for(e3=D.d.gae(e8),w=new C.fk(e3,new A.flR(e4));w.C();){o=e3.gS(0)
t.n(0,900+o.a,new A.d1(o.r,"Tap to see how they are, feed them or give medicine.",new A.E(o.c,36,o.d),90))}return new A.zn(v,t,s,r)},
ni(d,e,f,g,h,i,j,k,l){var w=-h/2,v=i/2,u=h/2,t=-i/2
d.cQu(e.ad(0,f.aF(0,w)).ad(0,g.aF(0,v)),e.ad(0,f.aF(0,u)).ad(0,g.aF(0,v)),e.ad(0,f.aF(0,u)).ad(0,g.aF(0,t)),e.ad(0,f.aF(0,w)).ad(0,g.aF(0,t)),j,k,l)},
hOu(a1,a2,a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=x.z,i=C.a([],j),h=new A.jf(i),g=C.T(x.S,x.q),f=C.a([],x.E),e=a1.gfp(0),d=a1.gj7(0),a0=new A.ffT(a3)
h.f=0
h.b=a0.$2("floor",310)
h.iy(new A.E(0,-0.6,d/2-60),new A.E(e*2.5,1.2,d*2.5),B.abC,5)
g.n(0,310,B.dX_)
h.b=0
h.f=1
h.bO(new A.E(0,0.15,60),B.fC0,E.DW)
for(w=0;w<6;++w)h.bO(new A.E(0,0.35,8+w*22),B.fEZ,B.bg5)
h.f=2
h.x=$.Td=$.Td+1
h.iy(B.fyv,B.fzu,B.Kt,3)
h.bO(B.fyk,B.fzv,B.ab3)
v=new A.ffU(h)
u=new A.ffS(h)
for(t=0;t<4;++t)v.$5(B.fO,B.j_,B.lr,B.d70[t],62)
u.$5(B.fO,B.j_,B.lr,0,600)
for(t=0;t<2;++t)v.$5(B.aQZ,B.we,B.zs,B.d6Y[t],62)
u.$5(B.aQZ,B.we,B.zs,0,0)
for(t=0;t<2;++t){s=B.d6Q[t]
v.$5(B.fyO,B.zs,B.j_,s,62)
v.$5(B.fGc,B.lr,B.we,-s,62)}r=C.a([],j)
new A.jf(r).qe(B.fO,B.fzA,B.Kw,0.1,2)
h.a5z(B.fBk,B.fHY,B.fCd,B.Kt,B.j_,!1)
h.a5z(B.fAf,B.fFo,B.fFf,B.Kt,B.we,!1)
h.x=0
h.r=!0
D.d.v(i,A.tQ(r,0.5,0,B.fxK))
D.d.v(i,A.tQ(r,-0.5,0,B.fxL))
h.bO(B.fxM,B.fzz,B.VQ)
h.bO(B.fAV,B.fyX,B.ae6)
h.bO(B.fAW,B.aR9,B.x5)
h.bO(B.fye,B.fAr,E.DW)
h.hB(B.fGi,B.fGj,2.2,B.m8,8)
h.hB(B.fzm,B.fzn,2.2,B.m8,8)
h.bG(B.fyG,B.fAv,B.Kw,0.1)
g.n(0,600,B.dXB)
h.r=!0
for(r=a1.x,q=r.length,t=0;t<r.length;r.length===q||(0,C.L)(r),++t){p=r[t]
o=p.b
if(D.d.t(B.a1B,o)){g.n(0,100+p.a,new A.d1(B.pX.h(0,o).a,"It wanders about. Move it with the arrow buttons or take it out.",new A.E(p.c,12,p.d),140))
continue}n=B.pX.h(0,o)
n.toString
m=C.a([],j)
l=new A.jf(m)
l.r=!0
l.f=D.d.t(B.awb,o)?1:2
k=100+p.a
l.b=a0.$2("furniture",k)
A.hbk(l,o,B.a0W[p.f])
D.d.v(i,A.tQ(m,0,p.e*3.141592653589793/2,new A.E(p.c,0,p.d)))
g.n(0,k,new A.d1(n.a,y.b,new A.E(p.c,12,p.d),140))}j=a2===0
r=j?"\u2705 The house is finished":"\ud83c\udfe0 "+a2+" rooms still need work"
f.push(new A.ud(B.fxV,r,j?D.d_:D.dT))
return new A.zn(i,g,f,B.vH)},
hV2(a1,a2,a3,a4,a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=x.z,d=C.a([],e),a0=new A.jf(d)
a0.r=!0
if(a1.c==="outside"){if(a4!=null&&a4.a===a1.a)A.fa2(a0,a4,a2,a5,!0,0)
for(w=D.d.gae(a1.x),v=new C.fk(w,new A.foB()),u=a2*6,t=a3==="furniture";v.C();){s=w.gS(0)
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
A.h9J(j,s.b,B.a0W[s.f],Math.sin(u+r)*0.5)
D.d.v(d,A.tQ(k,0,l,new A.E(p+o*10,0,n+m*10)))}for(e=D.d.gae(a6),w=new C.fk(e,new A.foC(a1)),v=a2*0.5,u=a1.a;w.C();){t=e.gS(0)
s=t.a
r=v+s
p=Math.sin(r)
o=t.y
n=t.c
m=t.d
r=Math.cos(r)>=0?1.5707963267948966:-1.5707963267948966
A.fa2(a0,new A.VV(u,n+p*o,m,r,!0,!1,!1,!1,!1,"","",-1,0,-1,0),a2,t.f,!1,900+s)}return d}if(a4!=null&&a4.a===a1.a)A.fa2(a0,a4,a2,a5,!0,0)
for(e=D.d.gae(a6),w=new C.fk(e,new A.foD(a1)),v=a1.a,u=a2*0.5;w.C();){t=e.gS(0)
s=t.y
r=s>0
i=r?Math.sin(u+t.a)*s:0
s=t.c
p=t.d
if(r)o=Math.cos(u+t.a)>=0?1.5707963267948966:-1.5707963267948966
else o=t.x?0.5:t.e
A.fa2(a0,new A.VV(v,s+i,p,o,r,!1,!1,!1,t.x,"","",-1,0,-1,0),a2,t.f,!1,900+t.a)}h=a1.gj7(0)
if(a1.dx==="fan"){g=a1.ga4F()&&a1.gTi()&&a1.db?a2*7:0
a0.b=703
for(e=h*0.5,f=0;f<4;++f){q=g+f*3.141592653589793/2
a0.ajb(new A.E(Math.cos(q)*15,81,e+Math.sin(q)*15),B.fHC,B.DR,0.1,-q)}}return d},
hLB(d){var w
A:{if(5===d){w=B.ery
break A}if(9===d){w=B.evF
break A}if(10===d){w=B.ekg
break A}if(11===d){w=B.eww
break A}if(2===d||4===d||8===d){w=B.ebd
break A}w=B.emL
break A}return w},
fll(b0,b1,b2,b3,b4,b5,b6,b7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9
for(w=b2.a,v=b2.b,u=b2.c,t=b1.a,s=b1.b,r=b1.c,q=b3.a,p=q*0.1,o=b3.b,n=o*0.1,m=b3.c,l=m*0.1,k=q*0.2,j=o*0.2,i=m*0.2,q*=0.3,o*=0.3,m*=0.3,h=-b4/2,g=b5-1,f=b5===1,e=0;e<b5;++e){d=f?0:h+b4*e/g
for(a0=b6.length,a1=s+v*d,a2=t+w*d+0,a3=r+u*d+0,a4=a2+p,a5=a3+l,a6=a2+k,a7=a3+i,a2+=q,a3+=m,a8=0;a8<b6.length;b6.length===a0||(0,C.L)(b6),++a8){a9=a1+b6[a8]
A.ni(b0,new A.E(a4,a9+n,a5),b2,B.fP,14,17,B.m8,b3,0)
A.ni(b0,new A.E(a6,a9+j,a7),b2,B.fP,11,14,b7,b3,0.6)
A.ni(b0,new A.E(a2,a9+o,a3),b2,B.fP,11,0.9,B.m8,b3,0)}}},
hJ_(a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0
A:{if("shop"===a2){w=B.eDU
break A}if("hospital"===a2){w=B.eDP
break A}if("firestation"===a2){w=B.eDw
break A}if("school"===a2){w=B.eDp
break A}w=B.eD8
break A}w=w.a
v=w[0]
u=w[1]
t=w[2]
s=w[3]
r=w[4]
q=u/2
p=v/2
a1.x=$.Td=$.Td+1
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
A.fll(a1,new A.E(0,0,q).ad(0,B.fO),B.j_,B.lr,k,m,l,B.pw)
j=q+0.4
if(n){A.ni(a1,new A.E(-14,17,j),B.j_,B.fP,34,34,D.ju,B.lr,0.2)
for(i=q+0.5,h=0;h<6;++h)A.ni(a1,new A.E(-14,4+h*6,i),B.j_,B.fP,33,0.8,D.dz,B.lr,0)
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
A.fll(a1,new A.E(0,0,j),B.we,B.zs,k,m,l,B.pw)
A.ni(a1,new A.E(0,13,j-0.4),B.we,B.fP,14,26,B.wK,B.zs,0)
f=D.o.D(D.k.bu(u/24),1,3)
k=u-26
A.fll(a1,new A.E(p,0,0),B.zs,B.j_,k,f,l,B.pw)
i=-p
A.fll(a1,new A.E(i,0,0),B.lr,B.we,k,f,l,B.pw)
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
D.d.v(n,A.tQ(w,0.42,0,new A.E(0,k,u*0.25)))
a0=-u
D.d.v(n,A.tQ(w,-0.42,0,new A.E(0,k,a0*0.25)))
k=p+0.2
w=t+12
a1.a5z(new A.E(k,t,q),new A.E(k,t,j),new A.E(k,w,0),s,B.j_,!1)
i-=0.2
a1.a5z(new A.E(i,t,j),new A.E(i,t,q),new A.E(i,w,0),s,B.we,!1)
if(a2==="school"){w=q-10
e.bO(new A.E(0,t+18,w),B.fz1,D.acG)
e.bO(new A.E(0,t+30,w),B.fzt,r)
e.hB(new A.E(0,t+31,w),new A.E(0,t+46,w),0.6,D.dz,6)
e.bO(new A.E(5,t+44,w),B.fFy,D.ay)}else e.bO(new A.E(v*0.28,t+14,a0*0.1),B.fBm,B.ae6)}else{k=v+2
e.bG(new A.E(0,t+1.5,0),new A.E(k,3,u+2),r,0.05)
e.bO(new A.E(0,t+4,q+0.5),new A.E(k,4,1.4),a3)
if(w){w=v*0.25
k=-u*0.15
e.bO(new A.E(w,t+5,k),B.fzB,D.bv)
e.bO(new A.E(w,t+6.2,k),B.fFH,D.c)}if(n){w=p-10
n=-u*0.2
e.bO(new A.E(w,t+16,n),B.fyW,B.ad6)
e.bO(new A.E(w,t+32,n),B.aR9,r)}}D.d.v(a1.a,g)},
hQm(d,e){var w,v,u,t,s,r,q,p,o,n,m
d.bO(B.aS6,B.fIe,B.bfi)
d.bO(B.fE0,B.aRY,D.bn)
d.bO(B.fxE,B.aRY,D.bn)
A:{if("roadturn"===e){w=B.d5T
break A}if("roadtee"===e){w=B.cPM
break A}if("roadcross"===e){w=B.c7a
break A}w=B.d4c
break A}for(v=w.length,u=0;u<v;++u){t=w[u]
s=t.a
r=t.b
for(t=r!==0,q=s!==0,p=0;p<2;++p){o=5+p*10.5
n=q?6:1.6
m=t?6:1.6
d.bO(new A.E(s*o,0.7,r*o),new A.E(n,0.2,m),B.Wk)}}if(e!=="road")d.bO(B.aS0,B.fDn,B.Wk)
if(e==="roadcross")for(p=-2;p<=2;++p)d.bO(new A.E(p*4,0.7,15),B.fGV,D.c)},
h9J(d,e,f,g){var w=new A.f6I(d,g)
switch(e){case"dog":d.bG(B.Da,B.fHn,f,0.05)
d.io(B.fC5,3.4,f,4,8)
d.bO(B.fEi,B.fBi,D.KA)
d.bO(B.fFl,B.aRD,B.iK)
d.bO(B.fHX,B.aRD,B.iK)
d.hB(B.fFV,B.fxU,0.8,f,5)
w.$5(B.d4I,6,6,1.7,f)
break
case"cat":d.bG(B.zt,B.fBf,f,0.05)
d.io(B.fyC,2.7,f,4,8)
d.bO(B.fH1,B.aRa,f)
d.bO(B.fH4,B.aRa,f)
d.hB(B.fyB,B.fxP,0.7,f,5)
w.$5(B.d2D,4,4,1.2,f)
break
case"cow":d.bG(B.a7N,B.fyT,D.bM,0.05)
d.bO(B.fHb,B.fGH,B.iK)
d.bO(B.fCY,B.fBg,B.iK)
d.bO(B.fy0,B.fBr,D.bM)
d.bO(B.fxX,B.fIc,D.mK)
d.bO(B.fBy,B.aRb,D.bR)
d.bO(B.fHV,B.aRb,D.bR)
d.hB(B.fy3,B.fyD,0.7,B.iK,5)
w.$5(B.cTj,11,11,3.2,D.bR)
break
case"sheep":d.io(B.aR1,8.5,D.po,4,8)
d.io(B.fxS,7,D.po,4,8)
d.io(B.fxQ,3.4,B.iK,4,8)
w.$5(B.d4E,8,8,1.8,B.iK)
break
case"chicken":d.io(B.zt,4,f,4,8)
d.io(B.fxJ,2.2,f,3,6)
d.bO(B.fxO,B.fGC,D.bI)
d.bO(B.fCb,B.fBR,D.aH)
d.bO(B.fyF,B.fAp,f)
w.$5(B.cRt,3,3,0.8,D.aH)
break
case"horse":d.bG(B.fy5,B.fyM,f,0.1)
d.ajY(B.fyb,B.fyh,4.2,f,3,8)
d.bO(B.fyi,B.fAE,f)
d.bO(B.fyo,B.fGB,B.iK)
d.hB(B.fyc,B.fyE,1.8,B.iK,6)
w.$5(B.cQQ,16,16,2.6,f)
break
default:d.bO(B.zt,B.fBp,f)}},
he2(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=C.a([],x.z)
for(w=d.length,v=e.a,u=e.b,t=e.c,s=f.a,r=f.b,q=f.c,p=x.o,o=0;o<d.length;d.length===w||(0,C.L)(d),++o){n=d[o]
m=C.a([],p)
for(l=n.a,k=l.length,j=0;j<l.length;l.length===k||(0,C.L)(l),++j){i=l[j]
m.push(new A.E(s+(i.a-s)*v,r+(i.b-r)*u,q+(i.c-q)*t))}l=n.b
h.push(new A.nd(m,new A.E(l.a/v,l.b/u,l.c/t).gox(0),n.c,n.d,n.e,n.f,n.r,n.w,n.x,n.y,n.z))}return h},
fa2(d,e,f,g,h,i){var w,v=g.e,u=$.fNe.h(0,v)
if(u==null){A.hPb(d,e,f,i,v==="xbot"?B.a4M:new A.uy(g.a,g.b,g.c,g.d,"human"))
return}v=e.e
w=v&&e.ax>0?e.ax*12:null
D.d.v(d.a,u.cPY(h,i,f,w,v,e.b,e.d,e.c))},
hPb(b2,b3,b4,b5,b6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0=C.a([],x.z),b1=new A.jf(b0)
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
h=new A.fgr(b5,b1)
g=new A.fgd(b1)
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
h.$3(new A.fge(),B.fEp,new A.E(p,l+-1.6,e))
h.$3(new A.fgf(),B.fCi,new A.E(p,l+-2.9,e))}h.$3(new A.fgg(s),B.fCM,new A.E(0,i+1.2,0))
h.$3(new A.fgj(t),B.fE6,new A.E(0,i+2.5,0))
h.$3(new A.fgk(),B.fzb,new A.E(0,i+2.4,0))
h.$3(new A.fgl(t),B.fDA,new A.E(0,i+19.6,0))
b1.hB(new A.E(0,i+20.5,0.2),new A.E(0,i+24.2,0.5),2,w,8)
p=i+29
a1=new A.E(0,p,0.6)
h.$3(new A.fgm(w),B.fFL,a1)
h.$3(new A.fgn(w),B.fF1,a1.ad(0,B.fAm))
h.$3(new A.fgo(u),B.fBe,a1.ad(0,B.fE9))
h.$3(new A.fgp(u),B.fCP,a1.ad(0,B.fId))
for(o=p+-0.2,m=p+0.4,p+=1.9,n=0;n<2;++n){a2=E.oO[n]
b1.io(new A.E(0+a2*4.2,o,0.6),1,w,3,6)
l=0+a2*1.8
h.$3(new A.fgq(),B.fH5,new A.E(l,m,4.75))
b1.io(new A.E(l,m,5.1),0.5,D.pt,3,6)
b1.bO(new A.E(l,p,4.8),B.fHL,u)}h.$3(new A.fgh(v),B.fHW,a1.ad(0,B.fCc))
b1.bO(a1.ad(0,B.fEd),B.fD4,B.bdC)
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
h.$3(new A.fgi(w),B.fGD,new A.E(e,a6+-1.3,a7+0.2))
if(a5&&o){a9=a7+0
b1.e5(new A.E(e,a6+-2.6,a9),new A.E(e,a6+2.6,a9),1.7,D.aT,0.5,8)}if(a5&&m){b1.bG(new A.E(e,a6+-0.4,a7+2.6),B.fDD,D.pt,0.3)
b1.bO(new A.E(e,a6+0.2,a7+3.8),B.fBW,D.ay)}}D.d.v(b2.a,A.tQ(b0,0,b3.d,new A.E(b3.b,0,b3.c)))},
hbk(d,e,f){var w,v,u,t,s,r,q=C.aq(f,D.w,Math.abs(-0.25))
q.toString
w=C.aq(f,D.c,Math.abs(0.2))
w.toString
A:{if("bed"===e){d.bG(B.zt,B.fAI,B.x5,0.1)
d.bG(B.fxR,B.fAx,f,0.05)
d.bO(B.fGf,B.aRe,B.adH)
d.bO(B.fyV,B.aRe,B.adH)
d.bG(B.fy8,B.fAJ,B.x5,0.1)
d.bO(B.fxY,B.fFR,w)
break A}if("nightstand"===e){d.bG(B.Da,B.fz_,f,0.1)
d.bO(B.fF5,B.fAY,q)
d.bO(B.fHQ,B.fA4,B.ado)
d.bO(B.fy9,B.fBx,B.t6)
break A}if("wardrobe"===e){d.bG(B.fyg,B.fAc,f,0.1)
d.bO(B.fBK,B.fAk,q)
d.bG(B.fDs,B.aRU,B.DT,0.8)
d.bG(B.fI2,B.aRU,B.DT,0.8)
break A}if("desk"===e){d.bG(B.aR2,B.fAi,f,0.1)
d.bO(B.fGk,B.aRh,q)
d.bO(B.fzp,B.aRh,q)
d.bG(B.fyr,B.fzq,B.Kh,0.5)
d.bO(B.fyf,B.fAQ,D.ti)
break A}if("rug"===e){d.iy(B.aS6,B.fz8,f,2)
d.bO(B.fBC,B.fGM,w)
break A}if("sofa"===e){d.bG(B.Da,B.fB9,f,0.05)
d.bG(B.fy7,B.fBa,q,0.05)
d.bG(B.fGn,B.aRr,q,0.05)
d.bG(B.fzZ,B.aRr,q,0.05)
d.bO(B.fGe,B.aRf,w)
d.bO(B.fyU,B.aRf,w)
break A}if("armchair"===e){d.bG(B.Da,B.fzL,f,0.05)
d.bG(B.fy6,B.fzN,q,0.05)
d.bO(B.fGd,B.aRo,q)
d.bO(B.fyQ,B.aRo,q)
break A}if("coffee"===e){d.bG(B.J0,B.fA8,f,0.2)
for(v=0;v<4;++v){w=B.d6K[v]
d.bO(new A.E(w.a,6.5,w.b),B.fzG,q)}d.bG(B.fCy,B.fBn,D.bR,0.5)
break A}if("tvstand"===e){d.bG(B.aR7,B.fAt,f,0.1)
d.bO(B.fB7,B.fCn,q)
d.bG(B.aR4,B.fAh,E.Ed,0.7)
d.bG(B.fCB,B.fCa,D.fl,0.9)
d.bO(B.fy_,B.fBo,B.iK)
break A}if("dining"===e){d.bG(B.aR2,B.fAu,f,0.2)
for(v=0;v<4;++v){w=B.cBU[v]
d.bO(new A.E(w.a,13,w.b),B.fA3,q)}break A}if("chair"===e){d.bG(B.fxW,B.fz4,f,0.1)
d.bG(B.fyd,B.fz2,f,0.1)
for(v=0;v<4;++v){w=B.cYl[v]
d.bO(new A.E(w.a,7.5,w.b),B.fzk,q)}break A}if("plant"===e){d.hB(B.fO,B.aR7,5,D.d9,10)
d.io(B.a7N,8,B.ab6,5,8)
d.io(B.fA2,5,B.Vz,4,8)
break A}if("lamp"===e){d.hB(B.fO,B.fP,4.5,B.iK,10)
d.hB(B.fP,B.aR6,0.7,B.iK,6)
d.ajY(B.fys,B.fyy,6,B.t6,3.5,12)
break A}if("console"===e){d.bG(B.fya,B.aRm,f,0.15)
d.bO(B.fCQ,B.aRg,q)
d.bO(B.fBF,B.aRg,q)
d.bO(B.Da,B.fGy,q)
break A}if("shelf"===e){d.bG(B.aR3,B.fzY,f,0.1)
for(u=0;u<4;++u){q=10+u*15
d.bO(new A.E(0,q,1),B.fzS,B.iK)
w=D.o.G(u,2)
d.bO(new A.E(-8+w*6,q,2),B.fAG,[D.eM,D.dS,D.fm,D.dT][u])
d.bO(new A.E(4+w*4,q,2),B.fBq,[D.dT,D.fm,D.eM,D.dS][u])}break A}if("tree"===e){d.ajY(B.fO,B.aR4,4.2,B.x5,3,8)
d.io(B.aR6,17,B.ab6,5,9)
d.io(B.fBw,11,B.Vz,4,8)
d.io(B.fGt,12,B.bdf,4,8)
break A}if("pine"===e){d.hB(B.fO,B.aR_,3,B.x5,8)
for(u=0;u<3;++u){q=u*14
d.ajY(new A.E(0,8+q,0),new A.E(0,26+q,0),14-u*3.5,B.abw,1.5,10)}break A}if("bush"===e){d.io(B.Da,9,B.bat,4,8)
d.io(B.fAF,6.5,B.Vz,4,8)
break A}if("flowers"===e){for(v=0;v<5;++v){q=B.d5r[v]
t=q.a
s=q.b
d.hB(new A.E(t,0,s),new A.E(t,7,s),0.4,B.abw,5)
d.io(new A.E(t,8,s),2.2,q.c,3,6)}break A}if("fence"===e){for(v=0;v<4;++v)d.bG(new A.E(B.d6U[v],9,0),B.fEY,f,0.05)
d.bO(B.zt,B.aSb,q)
d.bO(B.aR1,B.aSb,q)
break A}if("lamppost"===e){d.hB(B.fO,B.fyw,1.3,B.iK,8)
d.hB(B.fO,B.fyj,3.5,B.iK,8)
d.io(B.fyx,4,B.t6,4,8)
break A}if("bench"===e){d.bG(B.fxN,B.aRm,f,0.1)
d.bG(B.fy4,B.fAb,f,0.1)
d.bO(B.fGg,B.aRk,B.iK)
d.bO(B.fz5,B.aRk,B.iK)
break A}if("car"===e){d.bG(B.aR_,B.fBc,f,0.4)
d.bG(B.fGq,B.fAg,f,0.4)
d.bG(B.fza,B.fCG,B.pw,0.6)
d.bO(B.fGL,B.aRc,B.t6)
d.bO(B.fD7,B.aRc,B.t6)
for(v=0;v<2;++v){t=B.awt[v]
d.hB(new A.E(t,5,-18),new A.E(t,5,-21),5.5,D.pt,12)
d.hB(new A.E(t,5,18),new A.E(t,5,21),5.5,D.pt,12)}break A}if("road"===e||"roadturn"===e||"roadtee"===e||"roadcross"===e){A.hQm(d,e)
break A}if("house2"===e||"shop"===e||"hospital"===e||"firestation"===e||"school"===e){A.hJ_(d,e,f)
break A}if("firetruck"===e){d.bG(B.aR0,B.fBt,D.bI,0.3)
d.bG(B.fzV,B.fzo,D.bI,0.3)
d.bG(B.fEM,B.fAA,B.pw,0.6)
d.bO(B.fGb,B.fH0,D.dz)
for(u=0;u<6;++u)d.bO(new A.E(-34+u*11,24,0),B.fDV,D.dz)
d.bO(B.fzW,B.aRv,D.d6)
d.bO(B.fFa,B.fCt,B.Wk)
for(v=0;v<3;++v){t=B.d6V[v]
d.hB(new A.E(t,6,-19),new A.E(t,6,-22.5),6,D.pt,12)
d.hB(new A.E(t,6,19),new A.E(t,6,22.5),6,D.pt,12)}break A}if("ambulance"===e){d.bG(B.J0,B.fBd,D.c,0.4)
d.bG(B.fzM,B.fzw,D.c,0.4)
d.bG(B.fCD,B.fFC,B.pw,0.6)
d.bO(B.fHs,B.aRJ,D.bI)
d.bO(B.fDH,B.aRJ,D.bI)
d.bO(B.aS1,B.fDg,D.bI)
d.bO(B.aS1,B.fCg,D.bI)
d.bO(B.fzP,B.aRv,D.ay)
for(v=0;v<2;++v){t=B.awt[v]
d.hB(new A.E(t,6,-19),new A.E(t,6,-22.5),6,D.pt,12)
d.hB(new A.E(t,6,19),new A.E(t,6,22.5),6,D.pt,12)}break A}if("dog"===e||"cat"===e||"cow"===e||"sheep"===e||"chicken"===e||"horse"===e){A.h9J(d,e,f,0)
break A}if("pond"===e){q=C.a([],x.z)
r=new A.jf(q)
r.b=d.b
r.f=d.f
r.r=!0
r.e5(B.fO,B.fG2,28,B.bfg,0.8,22)
D.d.v(d.a,A.he2(q,B.fBS,B.fO))
for(v=0;v<3;++v){q=B.cUk[v]
d.io(new A.E(q.a,1.2,q.b),2.6,B.acW,3,6)}break A}if("swing"===e){d.hB(B.fGl,B.fzy,1.6,D.d9,8)
for(v=0;v<2;++v){t=E.a2f[v]
d.hB(new A.E(t,38,0),new A.E(t,0,14),1.4,D.d9,6)
d.hB(new A.E(t,38,0),new A.E(t,0,-14),1.4,D.d9,6)}for(v=0;v<2;++v){t=E.a2g[v]
d.hB(new A.E(t,38,0),new A.E(t,15,0),0.3,B.iK,4)}d.bO(B.J0,B.fHw,f)
break A}if("shed"===e){d.bG(B.J0,B.fAq,f,0.05)
d.bO(B.aR3,B.fAw,B.VQ)
d.bO(B.fFZ,B.fFS,q)
break A}if("doghouse"===e){d.bG(B.fyA,B.fzx,f,0.05)
d.bO(B.fzK,B.fGU,B.VQ)
d.bO(B.fEL,B.fHF,B.Kh)
break A}d.bO(B.zt,B.fyK,f)}},
flX:function flX(d){this.a=d},
flM:function flM(){},
flV:function flV(d,e,f){this.a=d
this.b=e
this.c=f},
flN:function flN(){},
flO:function flO(){},
flP:function flP(){},
flQ:function flQ(d){this.a=d},
flS:function flS(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
flT:function flT(d,e){this.a=d
this.b=e},
flU:function flU(d){this.a=d},
flW:function flW(d){this.a=d},
flR:function flR(d){this.a=d},
ffT:function ffT(d){this.a=d},
ffU:function ffU(d){this.a=d},
ffS:function ffS(d){this.a=d},
foB:function foB(){},
foC:function foC(d){this.a=d},
foD:function foD(d){this.a=d},
f6I:function f6I(d,e){this.a=d
this.b=e},
fgr:function fgr(d,e){this.a=d
this.b=e},
fgd:function fgd(d){this.a=d},
fge:function fge(){},
fgf:function fgf(){},
fgg:function fgg(d){this.a=d},
fgj:function fgj(d){this.a=d},
fgk:function fgk(){},
fgl:function fgl(d){this.a=d},
fgm:function fgm(d){this.a=d},
fgn:function fgn(d){this.a=d},
fgo:function fgo(d){this.a=d},
fgp:function fgp(d){this.a=d},
fgq:function fgq(){},
fgh:function fgh(d){this.a=d},
fgi:function fgi(d){this.a=d},
h0i(){var w=x.S
return new A.bPL(C.ew([72],w),C.aX(w),C.aX(w),C.aX(w))},
hV3(d){var w
A:{if(81===d){w="outlet"
break A}if(82===d){w="switch"
break A}if(84===d){w="gfci"
break A}if(86===d||87===d){w="ptrap"
break A}if(85===d){w="faucet"
break A}w=null
break A}return w},
afj(a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=C.a([],x.z),a0=new A.jf(d)
a0.b=70
a0.iy(B.fFv,B.fGS,B.bco,4)
a0.c=1
a0.b=91
w=new A.fm1(a0)
w.$3(B.fCf,B.fBH,15)
w.$4$alongX(B.fGx,B.fEw,11,!1)
w.$4$alongX(B.fAz,B.fBO,11,!1)
w.$4$alongX(B.fGh,B.fCs,6,!1)
w.$4$alongX(B.fB3,B.fEx,6,!1)
for(v=0;v<=12;++v)a0.aBC(new A.E(-12+v*2,8.4,0),B.fF3,B.W7,!1,0.05)
a0.c=2
a0.b=92
u=new A.flZ(a0)
u.$2(B.ceB,B.t8)
u.$2(B.d48,B.nF)
u.$2(B.d8x,B.nF)
t=new A.flY(a0)
t.$1(B.cNE)
t.$1(B.cT8)
a0.c=3
a0.b=93
s=new A.fm0(a0)
s.$1(B.cMF)
s.$2$col(B.cL7,B.wL)
s.$2$col(B.cKn,B.wL)
s.$1(B.d1d)
a0.c=4
a0.b=0
a0.d=0.22
a0.iy(B.fBN,B.fDX,B.A5,4)
a0.iy(B.fDU,B.aRP,B.A5,4)
a0.iy(B.fCh,B.aRP,B.A5,4)
a0.iy(B.fCW,B.aRT,B.A5,3)
a0.iy(B.fHO,B.aRT,B.A5,3)
a0.d=1
a0.c=5
a0.e=0.3
a0.b=0
a0.qe(B.fGa,B.fBL,B.baf,0.1,4)
a0.b=71
a0.bG(B.fFA,B.fF4,B.abG,0.5)
a0.bO(B.fHv,B.fCK,B.E1)
r=[72,73,74,75,76]
for(q=a1.d,p=a1.e,v=0;v<5;++v){o=D.o.G(v,2)
n=D.o.an(v,2)
m=r[v]
l=q.t(0,m)
k=p.t(0,m)
a0.b=m
m=9.55+o*0.5
j=5.7-n*0.5
a0.bG(new A.E(m,j,-7.5),B.fBu,B.af1,0.3)
if(l)i=0
else i=k?-0.07:0.07
if(l)h=D.cb
else h=k?D.bn:D.bR
a0.bG(new A.E(m+0,j+i,-7.42),B.fCw,h,0.4)}a0.b=90
a0.bG(B.fEy,B.fAD,B.bjb,0.1)
a0.bG(B.fGA,B.fC3,B.WE,0.1)
a0.bG(B.fIa,B.aSa,B.WE,0.1)
a0.bG(B.fBX,B.aSa,B.WE,0.1)
g=new A.fm_(a0)
g.$3(81,B.fB8,a1.x?B.wW:B.Wp)
a0.b=81
a0.bO(B.fEz,B.aS3,B.Ea)
a0.bO(B.fDj,B.aS3,B.Ea)
g.$5$h$w(82,B.fHz,F.Wz,0.65,0.4)
a0.b=82
a0.bG(B.fFW,B.fAC,B.acl,0.4)
f=!q.t(0,72)
a0.b=83
a0.e5(B.fFN,B.aRE,0.5,B.bgZ,0.4,14)
a0.b8J(B.fH8,0.3,f?A4.Ws:B.bc8,0.7)
if(f){a0.b=0
a0.d=0.22
a0.iQ(B.aRu,1.5,B.VJ,4,10,0)
a0.d=1}a0.b=94
a0.bG(B.fGZ,B.aSd,B.m6,0.1)
a0.bG(B.fEK,B.aSd,B.m6,0.1)
a0.bG(B.fHx,B.fCk,B.m6,0.1)
a0.qe(B.fE8,B.fHa,B.El,0.5,2)
a0.bG(B.fFx,B.fI6,B.E8,0.7)
a0.b=85
a0.jT(A.Ge(B.cWs,0.2,6),0.055,B.kD,!1,0.9,8)
a0.b=84
a0.bG(B.fHi,B.fG5,B.Wp,0.3)
a0.bO(B.fD2,B.fHu,a1.y?B.acV:B.aeW)
a0.b=86
a0.jT(A.Ge(B.cO5,0.35,3),0.11,B.pl,!1,0.3,8)
a0.b=87
a0.e5(B.fDE,B.fFD,0.19,a1.c?B.Vv:B.bf0,0.3,8)
a0.b=88
a0.bG(B.fAe,B.fBz,B.Ac,0.7)
a0.Ki(B.fFu,B.aS4,0.72,B.Ac,0.55,0.7,16)
a0.e5(B.aS4,B.fEh,0.78,B.bgB,0.7,16)
a0.b=89
a0.e5(B.fGG,B.aRx,0.85,B.b61,0.6,18)
a0.e5(B.aRx,B.fDW,0.5,B.b62,0.5,12)
a0.bO(B.fES,B.fI_,B.beV)
a0.b=95
for(p=a1.f,m=a1.r,v=0;v<3;++v){e=B.cuz[v]
if(m.t(0,v)){j=e.a
i=e.b
a0.bO(new A.E(j,i,-7.82),B.fFP,B.A5)
a0.bO(new A.E(j,i,-7.79),B.fE_,B.b8X)}else if(p.t(0,v)){j=e.a
i=e.b
a0.bO(new A.E(j,i,-7.82),B.fzi,B.adZ)
a0.bO(new A.E(j,i,-7.8),B.fEI,B.bjs)}}if(a1.w){a0.b=96
a0.e5(B.fE2,B.fDz,0.1,D.d9,0.7,8)}a0.e=0
a0.c=6
a0.b=0
a0.d=0.4
a0.bfH(B.aRp,B.aS2,B.a7T,B.a7R,B.abN,B.fEt,!0)
a0.bfH(B.aRX,B.aS8,B.a7R,B.a7T,B.abN,B.fFU,!0)
a0.bgM(B.aRp,B.aS8,B.a7R,B.ac0)
a0.bgM(B.aS2,B.aRX,B.a7T,B.ac0)
a0.d=1
p=q.t(0,72)?"This breaker has TRIPPED (it is in the middle, orange). The living room has no power. Tap it to flip it off and on again.":"This breaker is ON. The living room has power."
q=q.t(0,72)?"The light is off because the living room breaker has tripped.":"The ceiling light is on."
m=a1.b
j=m&&!a1.c?"Water is dripping from the slip nut here. Pick the wrench, then tap the nut to tighten it.":"The P-trap holds a water seal that blocks sewer gas. Tap Open lesson to build one."
m=m&&!a1.c?"This slip nut is loose and the trap is dripping. Pick the wrench and tap here to tighten it.":"The slip nut is tight."
return new A.zn(d,C.F([70,B.dXA,91,B.dX0,92,B.dXj,93,B.dXr,71,B.dXF,72,new A.d1("Living room breaker",p,B.fHS,3.5),73,B.dXb,74,B.dXt,75,B.dWR,76,B.dXm,81,B.dXo,82,B.dWI,83,new A.d1("Ceiling light",q,B.aRE,7),84,B.dXu,85,B.dWT,86,new A.d1("P-trap under the sink",j,B.fFt,4.5),87,new A.d1("Slip nut (leaking?)",m,B.aRG,3.5),88,B.dWF,89,B.dXs,90,B.dXw,94,B.dXa,95,B.dXy,96,B.dWK],x.S,x.q),B.GQ,B.vH)},
hfa(d,e){var w,v,u,t,s,r,q,p=C.a([],x.z),o=new A.jf(p)
o.c=5
o.e=0.8
if(d.w)for(w=e*1.5,v=0;v<6;++v){u=D.k.G(w+v/6,1)
o.iQ(new A.E(3.4+Math.sin(v*2)*0.12,3.3-u*u*2.8,-7.7),0.05,D.Kg,3,6,0.9)}if(d.as){u=D.k.G(e*1.1,1)
o.iQ(new A.E(3,3.9-u*u*0.7,-6.95),0.05,B.VG,3,6,0.9)}if(d.Q)for(w=e*1.6,v=0;v<6;++v){u=D.k.G(w+v/6,1)
o.iQ(new A.E(8.2+Math.sin(v*1.7)*0.15,2.2-u*1.5,-7.2),0.05,B.VG,3,6,0.9)}if(d.at){o.d=0.55
o.bG(B.fBV,B.fD_,B.bgO,0.8)
o.d=1}if(d.x)for(w=e*2,t=e*6,v=0;v<8;++v){u=D.k.G(w+v*0.13,1)
s=v*2.4+t
r=Math.cos(s)
s=Math.sin(s)
q=C.aq(E.WG,E.WL,1-u)
q.toString
o.iQ(new A.E(-3.2+r*u*0.7,1.3+s*u*0.7,-7.6+u*0.3),0.05,q,3,5,0)}if(d.z&&!d.d.t(0,72)){o.b=0
o.d=D.k.D((Math.sin(e*17)+Math.sin(e*29)+2)/4*0.5,0,0.6)
o.iQ(B.aRu,1.5,B.VJ,4,10,0)
o.d=1}if(d.b&&!d.c){for(w=e*1.3,v=0;v<5;++v){u=D.k.G(w+v*0.2,1)
o.iQ(new A.E(3.05,1.45-u*u*1.4,-6.95),0.05,B.KV,3,6,0.9)}o.d=0.5
o.bG(B.fBG,new A.E(0.7+0.3*Math.sin(e),0.02,0.5),B.KV,0.9)
o.d=1}return p},
bPL:function bPL(d,e,f,g){var _=this
_.a=5
_.b=!0
_.c=!1
_.d=d
_.e=e
_.f=f
_.r=g
_.at=_.as=_.Q=_.z=_.y=_.x=_.w=!1},
fm1:function fm1(d){this.a=d},
flZ:function flZ(d){this.a=d},
flY:function flY(d){this.a=d},
fm0:function fm0(d){this.a=d},
fm_:function fm_(d){this.a=d},
m7(d,e,f,g){var w
try{G.dF(d,"",e,0,f,g)}catch(w){}},
y7(){A.m7(880,80,0.25,"tri")
C.bN(W.afJ,new A.fmW(),x.H)},
hwX(){return new A.ML(null)},
X4(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){return new A.b54(r,q,e,p,o,h,f,k,l,g,i,s,t,j,m,n,d,null)},
Qm(d,e,f,g,h){var w=null,v=g?e.j(0.25):D.w.j(0.5),u=C.m(18),t=C.I(g?e:D.b2,D.q,1),s=x.p,r=C.a([],s)
D.d.v(r,C.a([C.W(f,g?e:D.ad,w,w,w,16),D.eb],s))
r.push(C.d(d,w,w,w,w,w,w,C.l(w,w,g?e:D.ad,w,w,w,w,w,w,w,w,12,w,w,D.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w))
return C.aE(w,C.p(w,C.A(r,D.m,w,D.e,D.Q,0,w,w),D.f,w,w,new C.o(v,w,t,u,w,w,D.n),w,w,w,w,D.h6,w,w,w),D.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,h,w,w,w,w,w,w,!1,D.a8)},
y6(d,e,f,g){var w=null,v=f==null,u=v?D.dp:g.j(0.9),t=C.m(14),s=C.W(e,v?D.c_:D.w,w,w,w,18)
return C.D(C.aE(w,C.p(w,C.A(C.a([s,D.bp,new C.dn(1,D.ci,C.d(d,w,w,w,w,w,w,C.l(w,w,v?D.c_:D.w,w,w,w,w,w,w,w,w,12.5,w,w,D.u,w,w,!0,w,w,w,w,w,w,w,w),D.L,w,w),w)],x.p),D.m,w,D.bb,D.j,0,w,w),D.f,w,w,new C.o(u,w,w,t,w,w,D.n),w,w,w,w,D.v3,w,w,w),D.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,!1,D.a8),1)},
fDb(d,e,f,g){return C.bX(E.mT,null,new A.fDd(e,g,f),d,!0,!0,!0,D.lm,!1,!1,x.H)},
fmW:function fmW(){},
Fg:function Fg(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
ML:function ML(d){this.a=d},
bhR:function bhR(){this.d=!1
this.c=this.a=null},
dKw:function dKw(d){this.a=d},
dKz:function dKz(d){this.a=d},
dKA:function dKA(d){this.a=d},
dKy:function dKy(d){this.a=d},
dKB:function dKB(d){this.a=d},
dKx:function dKx(d){this.a=d},
dKE:function dKE(d){this.a=d},
dKF:function dKF(d){this.a=d},
dKG:function dKG(d){this.a=d},
dKH:function dKH(d){this.a=d},
dKI:function dKI(d){this.a=d},
dKJ:function dKJ(d){this.a=d},
dKK:function dKK(d){this.a=d},
dKL:function dKL(d){this.a=d},
dKC:function dKC(d,e){this.a=d
this.b=e},
dKD:function dKD(d){this.a=d},
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
cpC:function cpC(d){this.a=d},
cpD:function cpD(d){this.a=d},
fDd:function fDd(d,e,f){this.a=d
this.b=e
this.c=f},
fDc:function fDc(){},
AW:function AW(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
bRQ:function bRQ(d){this.a=d},
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
d2h:function d2h(d,e,f){this.a=d
this.b=e
this.c=f},
d2i:function d2i(d){this.a=d},
d2g:function d2g(d){this.a=d},
d2a:function d2a(d){this.a=d},
d29:function d29(d){this.a=d},
d2b:function d2b(d){this.a=d},
d2c:function d2c(d){this.a=d},
d2d:function d2d(d,e){this.a=d
this.b=e},
d2e:function d2e(d,e){this.a=d
this.b=e},
d2f:function d2f(d){this.a=d},
d2j:function d2j(d){this.a=d},
d2r:function d2r(){},
d2u:function d2u(d,e,f){this.a=d
this.b=e
this.c=f},
d2s:function d2s(d){this.a=d},
d2q:function d2q(d){this.a=d},
d2t:function d2t(d){this.a=d},
d2p:function d2p(d){this.a=d},
d2v:function d2v(d){this.a=d},
d2w:function d2w(d){this.a=d},
d2x:function d2x(d){this.a=d},
d2y:function d2y(d,e){this.a=d
this.b=e},
d2o:function d2o(d,e){this.a=d
this.b=e},
d2z:function d2z(d){this.a=d},
d2n:function d2n(d){this.a=d},
d2A:function d2A(d){this.a=d},
d2m:function d2m(d){this.a=d},
d2B:function d2B(d){this.a=d},
d2l:function d2l(d){this.a=d},
d2C:function d2C(d){this.a=d},
d2k:function d2k(d){this.a=d},
a8t:function a8t(d,e){this.c=d
this.a=e},
aEd:function aEd(){var _=this
_.f=_.e=_.d=$
_.r=""
_.w=0
_.x=null
_.y=!1
_.c=_.a=_.z=null},
eLY:function eLY(d,e,f){this.a=d
this.b=e
this.c=f},
eLZ:function eLZ(d){this.a=d},
eLX:function eLX(d){this.a=d},
eLR:function eLR(d){this.a=d},
eLS:function eLS(d,e){this.a=d
this.b=e},
eLT:function eLT(d,e){this.a=d
this.b=e},
eLU:function eLU(d,e){this.a=d
this.b=e},
eLV:function eLV(d){this.a=d},
eLW:function eLW(d,e){this.a=d
this.b=e},
eM2:function eM2(){},
eM6:function eM6(d,e){this.a=d
this.b=e},
eM3:function eM3(d){this.a=d},
eM4:function eM4(d,e){this.a=d
this.b=e},
eM1:function eM1(d,e){this.a=d
this.b=e},
eM5:function eM5(d){this.a=d},
eM0:function eM0(d){this.a=d},
eM_:function eM_(){},
a3U:function a3U(d,e){this.c=d
this.a=e},
ayx:function ayx(){var _=this
_.f=_.e=_.d=$
_.r=""
_.w=0
_.x=null
_.y=!1
_.c=_.a=_.z=null},
d5c:function d5c(d,e,f){this.a=d
this.b=e
this.c=f},
d5d:function d5d(d){this.a=d},
d5b:function d5b(d){this.a=d},
d54:function d54(d){this.a=d},
d57:function d57(d){this.a=d},
d58:function d58(d,e){this.a=d
this.b=e},
d59:function d59(d,e){this.a=d
this.b=e},
d56:function d56(d){this.a=d},
d5a:function d5a(d,e){this.a=d
this.b=e},
d55:function d55(d){this.a=d},
d5h:function d5h(){},
d5n:function d5n(d,e){this.a=d
this.b=e},
d5i:function d5i(d){this.a=d},
d5j:function d5j(d){this.a=d},
d5g:function d5g(d){this.a=d},
d5l:function d5l(d,e){this.a=d
this.b=e},
d5f:function d5f(d,e){this.a=d
this.b=e},
d5k:function d5k(d){this.a=d},
d5m:function d5m(d){this.a=d},
d5e:function d5e(d){this.a=d},
azp:function azp(d){this.a=d},
azq:function azq(d){var _=this
_.d=d
_.f=_.e=$
_.r=0
_.w=""
_.x=null
_.y=!1
_.c=_.a=_.z=null},
dch:function dch(d,e,f){this.a=d
this.b=e
this.c=f},
dci:function dci(d){this.a=d},
dcg:function dcg(d){this.a=d},
dcb:function dcb(d){this.a=d},
dcd:function dcd(d,e){this.a=d
this.b=e},
dce:function dce(d,e){this.a=d
this.b=e},
dcf:function dcf(d,e){this.a=d
this.b=e},
dcc:function dcc(d){this.a=d},
dcq:function dcq(d,e){this.a=d
this.b=e},
dcl:function dcl(d,e){this.a=d
this.b=e},
dcn:function dcn(d){this.a=d},
dcm:function dcm(d){this.a=d},
dco:function dco(d){this.a=d},
dck:function dck(d){this.a=d},
dcp:function dcp(d){this.a=d},
dcj:function dcj(d,e){this.a=d
this.b=e},
jy:function jy(d,e){this.a=d
this.b=e},
M7:function M7(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a6_:function a6_(d){this.a=d},
c5v:function c5v(d){this.a=d},
fQc(){var w=x.N
return new A.cgi(C.aX(w),C.F(["n1",!1,"n2",!1],w,x.R),C.T(x.S,w))},
i4F(d,e,f){var w,v
if(!f.c.t(0,e)){w=f.d
return e==="hot"?"The red (hot) hose goes on the LEFT side only. "+w:"The blue (cold) hose goes on the RIGHT side only. "+w}w=d.e
v=f.a
if(w.h(0,v)!=null)return"That connection already has a hose."
w.n(0,v,e)
return null},
fCA(){var w,v,u=C.a([B.aRl,B.fDu],x.o)
for(w=1;w<=12;++w){v=3.141592653589793+3.141592653589793*w/12
u.push(new A.E(3+3*Math.cos(v),0.2+3*Math.sin(v),0))}D.d.v(u,A.Ge(B.cXG,1,6))
return u},
bzz(d){var w,v,u,t,s="trap",r=C.a([],x.z),q=new A.jf(r)
q.b=49
q.qe(B.fzd,B.fA6,B.m6,0.1,2)
q.qe(B.fHM,B.fzf,B.m6,0.1,2)
q.b=47
q.iy(B.fEs,B.fA7,B.uR,3)
q.iy(B.fzJ,B.fzg,B.uR,3)
q.b=46
q.qe(B.fAH,B.fF7,B.El,0.5,3)
q.baH(B.fG9,B.J0,6.5,B.E8,!0,0.7,20)
q.e5(B.fFq,B.fDd,1.5,B.kD,0.85,14)
q.b=48
q.a3_(B.a7U,B.fCe,0.92,B.pl,!1,!0,0.3,14)
q.cRT(B.a7U,B.fHe,1,0.72,B.pl,0.3)
w=new A.fmC(d,q)
w.$5(41,B.a1A,B.kD,0.85,"tail")
w.$5(42,A.fCA(),B.pl,0.3,s)
w.$5(43,B.a2s,B.pl,0.3,"arm")
w=new A.fmB(d,q)
v=d.a
w.$6(44,"n1",B.a7Q,B.fP,B.fCq,v.t(0,"tail")&&v.t(0,s))
w.$6(45,"n2",B.a7S,B.j_,B.fG4,v.t(0,s)&&v.t(0,"arm"))
if(v.t(0,s)){q.b=0
q.d=0.55
q.e=0.4
u=A.fCA()
w=C.U(u).k("a2<1>")
t=C.B(new C.a2(u,new A.fmA(),w),w.k("J.E"))
if(t.length>1)q.aHa(t,0.4092,B.bjc,!1,!0,0.6,8)
q.d=1
q.e=0}return new A.zn(r,C.F([41,B.dWV,42,B.dWX,43,B.dXq,44,B.dXe,45,B.dXC,46,B.dX2,47,B.dX8,48,B.dWD,49,B.dWZ],x.S,x.q),B.GQ,B.vH)},
i2E(d,e){var w,v,u,t,s,r,q,p=C.a([],x.z),o=new A.jf(p),n=d.d
if(n.length!==0){w=n==="n1"?B.fI1:B.fGP
for(n=e*1.4,v=w.a+0,u=w.b,t=w.c+0,s=0;s<5;++s){r=D.k.G(n+s*0.2,1)
o.iQ(new A.E(v,u+(-r*6*r-r*1.5),t),0.22*(1-r*0.3),B.KV,3,6,0.9)}}else if(d.c){n=x.Q
v=C.B(B.a1A,n)
u=A.fCA()
D.d.v(v,C.dd(u,1,null,C.U(u).c))
D.d.v(v,C.dd(B.a2s,1,null,n))
for(n=e*0.45,s=0;s<18;++s){r=D.k.G(n+s/18,1)
q=D.o.D(D.k.bu(r*(v.length-1)),0,v.length-2)
u=v.length
o.iQ(A.zG(v[q],v[q+1],r*(u-1)-q),0.38,B.biC,3,6,0.9)}for(n=e*2.2,s=0;s<6;++s)o.iQ(new A.E(0,14-D.k.G(n+s/6,1)*5.4,0),0.3,B.VG,3,6,0.9)}return p},
afw(d){switch(d){case 61:return B.fzc
case 62:return B.fGN
case 63:return B.fDR
default:return B.fDI}},
fUP(d){var w=d==="hot",v=A.afw(w?61:62),u=A.afw(w?63:64),t=w?-1:1
return A.agJ(C.a([v,v.ad(0,new A.E(t*0.6,2.2,1.2)),A.zG(v,u,0.5).ad(0,new A.E(t*1.4,0,2.6)),u.ad(0,new A.E(-t*0.2,-2,1)),u],x.o),6)},
aNs(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=C.a([],x.z),e=new A.jf(f)
e.b=67
e.iy(B.fz9,B.fzX,B.uR,3)
e.b=66
e.qe(B.fDt,B.fHd,B.El,0.5,3)
e.hB(B.fFO,B.fED,5.5,E.Ed,16)
e.b=65
e.e5(B.fH_,B.aRW,3.4,B.kD,0.9,20)
e.jT(A.Ge(B.d1N,1.4,6),0.5,B.kD,!0,0.9,12)
for(w=0;w<2;++w){v=B.cYn[w]
u=v*1.2
e.e5(new A.E(u,15.5,-3.6),new A.E(u,17.7,-3.6),0.38,B.kD,0.9,10)
t=v<0?B.t8:B.nF
e.e5(new A.E(u,17.7,-3.6),new A.E(u,18.6,-3.6),0.6,t,0.6,12)}for(u=[B.egY,B.ecN],w=0;w<2;++w){t=u[w]
v=t.b
e.b=t.a
e.e5(new A.E(v,15.3,-3.6),new A.E(v,11.4,-3.6),0.45,B.kD,0.9,10)
e.e5(new A.E(v,11.4,-3.6),new A.E(v,10.7,-3.6),0.3,B.beD,0.6,8)
e.yV(new A.E(v,11.3,-3.6),new A.E(v,11.9,-3.6),0.78,0.48,B.bgz,0.7,8)}for(u=[B.eym,B.eA7],w=0;w<2;++w){t=u[w]
v=t.b
e.b=t.a
e.e5(new A.E(v,-1.5,-6),new A.E(v,-1.5,-3.6),0.4,B.K7,0.7,12)
e.e5(new A.E(v,-1.5,-4.4),new A.E(v,0.7,-4.4),0.78,B.rY,0.8,12)
e.e5(new A.E(v,0.7,-4.4),new A.E(v,1.5,-3.6),0.38,B.rY,0.8,10)
e.e5(new A.E(v,-0.2,-4.4),new A.E(v,-0.2,-3.1),0.2,B.abp,0.7,8)
e.e5(new A.E(v,-0.2,-3.1),new A.E(v,-0.2,-2.8),0.95,t.c,0.5,12)
e.yV(new A.E(v,1.2,-3.6),new A.E(v,1.9,-3.6),0.78,0.4,B.rY,0.8,8)}for(u=x.o,w=0;w<2;++w){s=B.d4d[w]
t=s==="hot"
r=t?B.cvt:B.cvG
q=C.U(r).k("a2<1>")
p=C.B(new C.a2(r,new A.flL(d,s),q),q.k("J.E"))
e.b=t?68:69
o=t?B.t8:B.nF
t=p.length
if(t===2){n=A.fUP(s)
e.jT(n,0.34,B.KM,!1,0.7,8)
m=n.length/2|0
e.jT(C.a([n[m-1],n[m],n[m+1]],u),0.4,o,!1,0.4,8)
for(t=r.length,l=0;l<t;++l){k=A.afw(r[l])
q=k.a+0
j=k.b
i=k.c+0
e.yV(new A.E(q,j+-0.2,i),new A.E(q,j+0.6,i),0.62,0.3,B.rY,0.8,8)}}else if(t===1){k=A.afw(D.d.gK(p))
h=D.d.gK(p)===D.d.gK(r)?1:-1
t=k.a+0
q=k.b
j=k.c
e.jT(C.a([k,new A.E(t,q+h*1.4,j+1),new A.E(t,q+h*3,j+2.4)],u),0.34,B.KM,!1,0.7,8)
j+=0
e.yV(new A.E(t,q+-0.2,j),new A.E(t,q+0.6,j),0.62,0.3,B.rY,0.8,8)}}if(d.r){e.b=0
e.d=0.5
for(u=d.e,w=0;w<4;++w){g=B.a2n[w]
t=g.a
if(u.h(0,t)!=null)continue
t=A.afw(t)
q=g.c.t(0,"hot")?B.t8:B.nF
e.iQ(new A.E(t.a+0,t.b+0,t.c+0.9),0.65,q,4,8,0.1)}e.d=1}return new A.zn(f,C.F([61,B.dWM,62,B.dWO,63,B.dWH,64,B.dWP,65,B.dX9,66,B.dX5,67,B.dWE,68,B.dXG,69,B.dXc],x.S,x.q),B.GQ,B.vH)},
hUB(d,e){var w,v,u,t,s,r,q,p,o,n=C.a([],x.z),m=new A.jf(n)
if(!d.f)return n
w=d.e
v=w.h(0,61)==="hot"&&w.h(0,63)==="hot"
u=w.h(0,62)==="cold"&&w.h(0,64)==="cold"
t=new A.fo3(e,m)
if(v){s=A.fUP("hot")
for(r=e*0.5,q=0;q<10;++q){p=D.k.G(r+q/10,1)
o=D.o.D(D.k.bu(p*(s.length-1)),0,s.length-2)
m.iQ(A.zG(s[o],s[o+1],p*(s.length-1)-o),0.2,D.Kg,3,6,0.9)}}else if(w.h(0,61)==null)t.$2(61,D.Kg)
if(u){s=A.fUP("cold")
for(w=e*0.5,q=0;q<10;++q){p=D.k.G(w+q/10,1)
o=D.o.D(D.k.bu(p*(s.length-1)),0,s.length-2)
m.iQ(A.zG(s[o],s[o+1],p*(s.length-1)-o),0.2,B.Wc,3,6,0.9)}}else if(w.h(0,62)==null)t.$2(62,B.Wc)
if(v&&u)for(w=e*2,q=0;q<8;++q){p=D.k.G(w+q/8,1)
r=C.aq(B.biI,B.Wc,0.5)
r.toString
m.iQ(new A.E(0,21-p*6.5,1.6),0.26,r,3,6,0.9)}return n},
fo1(d){return D.d.da(B.a2n,new A.fo2(d))},
cgi:function cgi(d,e,f){var _=this
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
fmC:function fmC(d,e){this.a=d
this.b=e},
fmB:function fmB(d,e){this.a=d
this.b=e},
fmA:function fmA(){},
flL:function flL(d,e){this.a=d
this.b=e},
fo3:function fo3(d,e){this.a=d
this.b=e},
fo2:function fo2(d){this.a=d},
fQb(d,e,f){var w=x.N
w=new A.cg8(e,d,C.aX(w),C.T(w,x.S),C.aX(w))
w.bw_(d,e,f)
return w},
hex(b7,b8,b9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2=C.a([],x.z),b3=new A.jf(b2),b4=C.T(x.S,x.q),b5=C.a([],x.E),b6=b7.c
b6===$&&C.c()
w=b6.a==="bathroom"
v=w?28:0
b3.b=9199
b3.iy(B.fGp,B.fHK,B.b8A,4)
b3.iy(B.fF6,B.fGK,B.VE,4)
b3.iy(new A.E(v+19.8+0.6,24,16),B.fDc,B.uR,2)
b4.n(0,9199,B.dWY)
b3.b=9198
b3.bG(new A.E(v,0.6,10),B.fGY,B.m6,0.1)
b3.bG(new A.E(v,29.4,18.6),B.fCZ,B.m6,0.1)
b3.bG(new A.E(v-19.4,13.6,10.5),B.fHy,B.m6,0.1)
for(u=[B.eD_,B.eCW,B.eBT,B.eBQ],t=0;t<4;++t){s=u[t].a
b3.bG(new A.E(v+s[0],33,s[1]),new A.E(s[2],2.4,s[3]),B.El,0.5)}b3.a3_(new A.E(v,27,8),new A.E(v,34.3,8),8,B.aeK,!1,!0,0.7,20)
b3.e5(new A.E(v,27,8),new A.E(v,27.2,8),8,B.bb2,0.5,20)
b3.hB(new A.E(v,27.1,8),new A.E(v,27.3,8),1.4,B.iK,12)
b3.a3_(new A.E(v+15,23.6,8),new A.E(v+19.4,23.6,8),0.92,B.pl,!1,!0,0.3,12)
b4.n(0,9198,B.dXn)
b3.b=9400
b3.e5(new A.E(-56,18,0),new A.E(-56,18,6),1.5,B.rY,0.8,12)
u=b7.r?B.nF:D.bn
b3.e5(new A.E(-57,18,6),new A.E(-55,18,6.5),4,u,0.5,14)
b3.e5(new A.E(-56,16,0),new A.E(-56,20,0),1,B.K7,0.7,10)
u=b7.r?"The water is ON. Turn it OFF with your hand before you cut into any pipe, and turn it ON to test your work.":"The water is OFF. Turn it ON to test your work."
b4.n(0,9400,new A.d1("Main water valve",u,new A.E(-56,18,4),22))
u=b7.r
s=u?"MAIN WATER: ON":"MAIN WATER: OFF"
u=u?D.dS:D.bn
b5.push(new A.ud(new A.E(-56,24,6),s,u))
r=new A.fmz(b3)
u=v-8
r.$1(u)
s=v+8
r.$1(s)
if(w)r.$1(-40)
q=new A.E(v,21,8)
p=new A.fmx(q)
o=new A.fmr(b3,b7)
n=new A.fms(b3,b7)
m=new A.fmy(b7,b4,b9,b8,b5)
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
b3.e5(a4,new A.E(-30,0.8999999999999999,14),5.5,B.pl,0.4,18)
b3.yV(new A.E(-30,0.8,14),new A.E(-30,1.2,14),5.5,3.2,B.rY,0.8,18)}else n.$3(f,new A.E(-30,0.8,14),B.fyN)
m.$3(g,a4,"Flange spot")
break
case"wax":a4=new A.E(-30,1.2,14)
if(e){b3.b=a3
b3.yV(a4,new A.E(-30,2.3,14),4.2,2.4,B.bjA,0.2,18)}else n.$3(f,new A.E(-30,1.7,14),B.fFh)
m.$3(g,a4,"Wax ring spot")
break
case"toilet":if(e){b3.b=a3
b3.Ki(new A.E(-30,0.5,14),new A.E(-30,16,14),8.5,B.Ac,6,0.8,20)
b3.e5(new A.E(-30,16,14),new A.E(-30,17,14),9.5,B.KS,0.8,20)
b3.bG(new A.E(-30,22,4.5),B.aRd,B.Ac,0.8)
b3.bG(new A.E(-30,29.2,4.5),B.fBQ,B.KS,0.8)}else{b3.b=a3
b3.d=0.32
b3.hB(new A.E(-30,0.5,14),new A.E(-30,17,14),8.5,D.b1,16)
b3.bO(new A.E(-30,22,4.5),B.aRd,D.b1)
b3.d=1}m.$3(g,new A.E(-30,12,12),"Toilet spot")
break
case"bolts":if(e){for(f=9200+a2*2,a5=0;a5<2;++a5){a6=B.aww[a5]
b3.b=f+(a6<0?0:1)
d=-30+a6
b3.e5(new A.E(d,0.5,17),new A.E(d,3.6,17),0.45,B.E8,0.8,8)
a0=a1?D.ct:B.E8
b3.e5(new A.E(d,3.4,17),new A.E(d,4.6,17),1.2,a0,0.8,6)}f=a1?"The nuts are loose. Tighten them with the wrench, a little at a time so the porcelain does not crack.":"The toilet is bolted down."
b4.n(0,a3,new A.d1(g.c,f,new A.E(-30,3,17),20))}else for(a5=0;a5<2;++a5){a6=B.aww[a5]
b3.b=a3
b3.d=0.4
f=-30+a6
b3.hB(new A.E(f,0.5,17),new A.E(f,4.6,17),1.2,D.b1,8)
b3.d=1}m.$3(g,new A.E(-30,3,17),"Bolts")
break
case"tvalve":A.fUh(b3,a3,new A.E(-40,8,1.6),e,B.nF,new A.fmo(n,g,-30))
m.$3(g,new A.E(-40,8,2),"Valve")
break
case"those":if(e){b3.b=a3
b3.jT(A.agJ(C.a([new A.E(-40,10,1.6),new A.E(-42,14,3.5),new A.E(-36,17,3.6),new A.E(-32,21,2.5)],h),6),0.55,B.KM,!1,0.7,8)
b3.jT(C.a([new A.E(-36.8,15.5,3.6),new A.E(-35,16.4,3.6)],h),0.62,B.nF,!1,0.4,8)
if(a1)b3.hB(new A.E(-40,10,1.6),new A.E(-40,11.2,1.6),0.9,D.ct,8)}else o.$3$r(f,A.agJ(C.a([new A.E(-40,10,1.6),new A.E(-42,14,3.5),new A.E(-36,17,3.6),new A.E(-32,21,2.5)],h),6),0.9)
m.$3(g,new A.E(-36,15,3),"Toilet hose")
break
case"faucet":if(e){b3.b=a3
b3.e5(new A.E(v,34.2,8),new A.E(v,34.6,8),3.6,B.kD,0.9,20)
b3.jT(A.Ge(C.a([new A.E(v,34.6,8),new A.E(v,40,8),new A.E(v,43,10),new A.E(v,43,14),new A.E(v,41.2,14.6)],h),1.4,6),0.5,B.kD,!0,0.9,10)
for(a5=0;a5<2;++a5){a6=E.a2g[a5]
f=v+a6
b3.e5(new A.E(f,34.6,8),new A.E(f,36.6,8),0.5,B.kD,0.9,8)
d=a6<0?B.t8:B.nF
b3.e5(new A.E(f,36.6,8),new A.E(f,37.6,8),0.8,d,0.6,10)}for(a5=0;a5<2;++a5){f=v+B.d6W[a5]
b3.e5(new A.E(f,34,8),new A.E(f,28.4,8),0.45,B.kD,0.9,8)}}else n.$3(f,new A.E(v,38,9),B.fyL)
m.$3(g,new A.E(v,38,8),"Faucet spot")
break
case"vhot":A.fUh(b3,a3,new A.E(u,8,1.6),e,B.t8,new A.fmp(n,g,v))
m.$3(g,new A.E(u,8,2),"Hot valve")
break
case"vcold":A.fUh(b3,a3,new A.E(s,8,1.6),e,B.nF,new A.fmq(n,g,v))
m.$3(g,new A.E(s,8,2),"Cold valve")
break
case"hhot":case"hcold":a7=f==="hhot"
a8=a7?-1:1
d=v+a8*3
a9=A.agJ(C.a([new A.E(v+a8*8,10.5,1.8),new A.E(v+a8*9,16,3.5),new A.E(v+a8*6,22,4.2),new A.E(d,27.5,6),new A.E(d,28.6,8)],h),6)
if(e){b3.b=a3
b3.jT(a9,0.5,B.KM,!1,0.7,8)
b0=a9.length/2|0
f=C.a([a9[b0-1],a9[b0],a9[b0+1]],h)
b3.jT(f,0.58,a7?B.t8:B.nF,!1,0.4,8)
if(a1){f=D.d.gK(a9)
d=D.d.gK(a9)
b3.hB(f,new A.E(d.a+0,d.b+1.4,d.c+0),0.9,D.ct,8)
d=D.d.gal(a9)
b3.hB(new A.E(d.a,d.b-1.4,d.c),D.d.gal(a9),0.9,D.ct,8)}}else o.$3$r(f,a9,0.9)
f=a9[a9.length/2|0]
m.$3(g,f,a7?"Hot hose":"Cold hose")
break
case"tail":case"trap":case"arm":d=f==="tail"
if(d)a0=B.a1A
else a0=f==="trap"?A.fCA():B.a2s
b1=p.$1(a0)
if(e){b3.b=a3
a0=d?B.kD:B.pl
b3.a5B(b1,0.66,a0,!1,!0,!0,d?0.85:0.3,12)}else o.$3$r(f,b1,0.78)
a0=J.a5(b1)
a0=a0.h(b1,a0.gM(b1)/2|0)
if(d)f="Tailpiece"
else f=f==="trap"?"P-trap":"Trap arm"
m.$3(g,a0,f)
break}}b6=new A.fmv(l,b7,b3,b4)
b6.$4("trap",q.ad(0,B.a7Q),B.fP,0)
b6.$4("arm",q.ad(0,B.a7S),B.j_,1)
return new A.zn(b2,b4,b5,B.vH)},
fUh(d,e,f,g,h,i){if(!g){i.$0()
return}d.b=e
d.e5(f.ad(0,B.fFi),f.ad(0,B.aRV),0.9,B.rY,0.8,12)
d.e5(f.ad(0,B.aRV),f.ad(0,B.fCU),0.45,B.rY,0.8,10)
d.e5(f.ad(0,B.aS0),f.ad(0,B.aSe),0.3,B.abp,0.7,8)
d.e5(f.ad(0,B.aSe),f.ad(0,B.fHj),1.2,h,0.5,12)},
i2y(a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=C.a([],x.z),e=new A.jf(f),d=a0.x
if(d.a===0)return f
w=a0.c
w===$&&C.c()
v=new A.fCp(w.a==="bathroom"?28:0,-30)
for(d=C.ec(d,d.r,C.a3(d).c),u=d.$ti.c,t=a0.e;d.C();){s=d.d
if(s==null)s=u.a(s)
r=v.$1(s)
q=D.d.iC(w.c,new A.fCo(s)).b==="valve"||!t.t(0,s)
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
e.iQ(new A.E(s+l*k*m,p+(k*j-k*k*i),o+(1.5+k*h)),g,B.KV,3,6,0.9);++n}}return f},
nc:function nc(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
Wb:function Wb(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cg8:function cg8(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.d=_.c=$
_.e=f
_.f=g
_.r=!0
_.w=0
_.x=h
_.y=!1},
cgc:function cgc(d){this.a=d},
cgd:function cgd(d){this.a=d},
cg9:function cg9(d){this.a=d},
cge:function cge(d){this.a=d},
cgf:function cgf(d){this.a=d},
cgg:function cgg(){},
cgh:function cgh(){},
cga:function cga(d){this.a=d},
cgb:function cgb(d){this.a=d},
fmz:function fmz(d){this.a=d},
fmx:function fmx(d){this.a=d},
fmr:function fmr(d,e){this.a=d
this.b=e},
fmu:function fmu(d){this.a=d},
fms:function fms(d,e){this.a=d
this.b=e},
fmt:function fmt(d){this.a=d},
fmy:function fmy(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fmo:function fmo(d,e,f){this.a=d
this.b=e
this.c=f},
fmp:function fmp(d,e,f){this.a=d
this.b=e
this.c=f},
fmq:function fmq(d,e,f){this.a=d
this.b=e
this.c=f},
fmv:function fmv(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fmw:function fmw(d){this.a=d},
fCp:function fCp(d,e){this.a=d
this.b=e},
fCo:function fCo(d){this.a=d},
Va:function Va(d,e){this.d=d
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
efR:function efR(d,e,f){this.a=d
this.b=e
this.c=f},
efS:function efS(d){this.a=d},
efQ:function efQ(d){this.a=d},
efK:function efK(d){this.a=d},
efT:function efT(d){this.a=d},
efC:function efC(d,e){this.a=d
this.b=e},
efD:function efD(d,e){this.a=d
this.b=e},
efE:function efE(d){this.a=d},
efJ:function efJ(d){this.a=d},
efH:function efH(d){this.a=d},
efI:function efI(d,e){this.a=d
this.b=e},
efP:function efP(d){this.a=d},
efG:function efG(d,e,f){this.a=d
this.b=e
this.c=f},
efF:function efF(d,e,f){this.a=d
this.b=e
this.c=f},
efU:function efU(d){this.a=d},
efY:function efY(d,e){this.a=d
this.b=e},
efW:function efW(){},
efV:function efV(d){this.a=d},
efX:function efX(d,e){this.a=d
this.b=e},
efO:function efO(d){this.a=d},
efM:function efM(d,e){this.a=d
this.b=e},
efL:function efL(d,e){this.a=d
this.b=e},
efN:function efN(d,e){this.a=d
this.b=e},
l0(d){return D.d.iC(B.tW,new A.fKF(d))},
fQB(d,e,f,g){var w=x.S,v=x.N
w=new A.b3A(g,f,C.T(w,v),C.aX(w),C.aX(w),C.T(w,x.cH),C.a([new A.WR(),new A.WR()],x.gD),C.T(w,x.e),C.aX(w),C.T(w,v),C.aX(w),C.a([],x.s))
w.cgc(d,e)
return w},
hCN(d){var w
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
fKF:function fKF(d){this.a=d},
pI:function pI(d,e,f){this.a=d
this.b=e
this.c=f},
WR:function WR(){var _=this
_.a=!1
_.b=0
_.c=!0
_.d=!1},
atU:function atU(d,e){var _=this
_.a=!1
_.b=d
_.c=e
_.e=_.d=!1},
aSh:function aSh(d,e){this.a=d
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
cl6:function cl6(){},
cld:function cld(d){this.a=d},
cle:function cle(d){this.a=d},
clf:function clf(d,e){this.a=d
this.b=e},
clg:function clg(d,e){this.a=d
this.b=e},
cli:function cli(d){this.a=d},
clh:function clh(d,e){this.a=d
this.b=e},
cl5:function cl5(d){this.a=d},
cl3:function cl3(){},
cl4:function cl4(d){this.a=d},
clb:function clb(){},
clc:function clc(){},
cl7:function cl7(){},
cl8:function cl8(d){this.a=d},
cl9:function cl9(d){this.a=d},
clj:function clj(d){this.a=d},
cla:function cla(d){this.a=d},
fPu(d,e,f){return new A.Vd(e,f,d,null)},
kW:function kW(d,e,f){this.a=d
this.b=e
this.c=f},
Vd:function Vd(d,e,f,g){var _=this
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
ekd:function ekd(d,e,f){this.a=d
this.b=e
this.c=f},
eke:function eke(d){this.a=d},
ekc:function ekc(d){this.a=d},
ejs:function ejs(d){this.a=d},
ejt:function ejt(d){this.a=d},
ejr:function ejr(d){this.a=d},
eju:function eju(d){this.a=d},
ejv:function ejv(d){this.a=d},
ejD:function ejD(d){this.a=d},
ejw:function ejw(d){this.a=d},
ejV:function ejV(d,e){this.a=d
this.b=e},
ejE:function ejE(d){this.a=d},
ek9:function ek9(d){this.a=d},
eka:function eka(d){this.a=d},
ekb:function ekb(d,e){this.a=d
this.b=e},
ek7:function ek7(d){this.a=d},
ek8:function ek8(d,e){this.a=d
this.b=e},
ek6:function ek6(d){this.a=d},
ek2:function ek2(d){this.a=d},
ek3:function ek3(d,e,f){this.a=d
this.b=e
this.c=f},
ek4:function ek4(d){this.a=d},
ek5:function ek5(d,e,f){this.a=d
this.b=e
this.c=f},
ekf:function ekf(d,e){this.a=d
this.b=e},
ejC:function ejC(d){this.a=d},
ejA:function ejA(d){this.a=d},
ejB:function ejB(d,e){this.a=d
this.b=e},
ejz:function ejz(d){this.a=d},
ejx:function ejx(d){this.a=d},
ejy:function ejy(d,e){this.a=d
this.b=e},
ejF:function ejF(d,e){this.a=d
this.b=e},
ejT:function ejT(){},
ejU:function ejU(){},
ejG:function ejG(d){this.a=d},
ejH:function ejH(d){this.a=d},
ejI:function ejI(d){this.a=d},
ejL:function ejL(){},
ejM:function ejM(){},
ejN:function ejN(){},
ejO:function ejO(){},
ejP:function ejP(){},
ejQ:function ejQ(d){this.a=d},
ejR:function ejR(){},
ejS:function ejS(d){this.a=d},
ejJ:function ejJ(d){this.a=d},
ejK:function ejK(){},
ekw:function ekw(d,e){this.a=d
this.b=e},
eky:function eky(d){this.a=d},
ekk:function ekk(d){this.a=d},
ekx:function ekx(d){this.a=d},
ekn:function ekn(d){this.a=d},
eko:function eko(d,e){this.a=d
this.b=e},
ekm:function ekm(d,e){this.a=d
this.b=e},
ekp:function ekp(d,e){this.a=d
this.b=e},
ekl:function ekl(d,e){this.a=d
this.b=e},
ekz:function ekz(d,e){this.a=d
this.b=e},
ekj:function ekj(d,e){this.a=d
this.b=e},
ekA:function ekA(d){this.a=d},
eki:function eki(d){this.a=d},
ekB:function ekB(d,e){this.a=d
this.b=e},
ekh:function ekh(d,e){this.a=d
this.b=e},
ekC:function ekC(d){this.a=d},
ekD:function ekD(d){this.a=d},
ekE:function ekE(d,e,f){this.a=d
this.b=e
this.c=f},
ekg:function ekg(d,e,f){this.a=d
this.b=e
this.c=f},
ekq:function ekq(d){this.a=d},
ekr:function ekr(d,e){this.a=d
this.b=e},
eks:function eks(d){this.a=d},
ekt:function ekt(d){this.a=d},
eku:function eku(d){this.a=d},
ekv:function ekv(d){this.a=d},
ek1:function ek1(d){this.a=d},
ek0:function ek0(d){this.a=d},
ejY:function ejY(d,e){this.a=d
this.b=e},
ejW:function ejW(){},
ejX:function ejX(){},
ejZ:function ejZ(d,e){this.a=d
this.b=e},
ek_:function ek_(d,e){this.a=d
this.b=e},
a1V(d,e){var w=d.d,v=e.a,u=e.c,t=e.b,s=w.a,r=w.b
w=w.c
return d.c?new A.E(s+v,r-u,w+t):new A.E(s+v,r+t,w+u)},
fTA(d,e,f){var w,v,u,t,s,r=d.a,q=e.d,p=e.c?A.tQ(r,1.5707963267948966,0,q):A.tQ(r,0,0,q)
r=C.a([],x.z)
for(q=p.length,w=0;w<p.length;p.length===q||(0,C.L)(p),++w){v=p[w]
u=v.d
u=u===0?0:f.$1(u)
r.push(new A.nd(v.a,v.b,v.c,u,v.e,v.f,v.r,v.w,v.x,2,0))}q=C.T(x.S,x.q)
for(u=d.b,u=u.gdK(u),u=u.gae(u);u.C();){t=u.gS(u)
s=f.$1(t.a)
t=t.b
q.n(0,s,new A.d1(t.a,t.b,A.a1V(e,t.c),t.d))}return new C.y(r,q)},
hOv(a3,a4,a5,a6,a7,a8,a9,b0,b1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=x.i,a2=C.ew([a4,a5],a1)
for(w=b1.length,v=0;v<b1.length;b1.length===w||(0,C.L)(b1),++v){u=b1[v].a
a2.L(0,D.k.D(u[0],a4,a5))
a2.L(0,D.k.D(u[1],a4,a5))}t=C.B(a2,a2.$ti.k("cn.E"))
D.d.fh(t)
for(w=C.U(b1).k("a2<1>"),u=w.k("J.E"),s=0;r=s+1,r<t.length;s=r){q=t[s]
p=t[r]
o=p-q
if(o<0.01)continue
n=(q+p)/2
m=C.B(new C.a2(b1,new A.ffW(n),w),u)
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
if(D.d.b7(m,new A.ffX(d)))continue
a0=!k||j>60?2:1
a3.iy(new A.E(n,d,a8),new A.E(o,j,a9),b0,a0)}}},
Co(c9,d0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1=x.z,c2=C.a([],c1),c3=new A.jf(c2),c4=C.a([],x.h),c5=x.E,c6=C.a([],c5),c7=x.S,c8=C.T(c7,x.q)
c3.b=8001
c3.qe(B.fBh,B.fDw,B.At,0.15,4)
c3.iy(B.fB0,B.aRy,B.abl,3)
c3.bG(B.fGs,B.fHp,B.pw,0.5)
c3.bO(B.aRB,B.fAU,B.Ai)
c3.bO(B.aRB,B.fHA,B.Ai)
c3.iy(B.fDB,B.aRy,B.abl,3)
c3.bG(B.fAX,B.fDC,B.wK,0.15)
c3.bG(B.fE4,B.fDF,B.DT,0.8)
c3.b=0
c3.d=c9.gyj()?0.42:0.1
c3.iy(B.fA0,B.fFc,c9.gyj()?B.m8:B.b5b,3)
c3.d=1
c3.b=8001
if(!c9.gyj())for(w=0;w<10;++w)c3.aBC(new A.E(-72+w*16,51.3,55),B.fFB,B.m6,!1,0.05)
else{c3.bG(B.fEq,B.fCx,D.c,0.2)
c3.bG(B.fIb,B.aRK,D.c,0.2)
c3.bG(B.fBU,B.aRK,D.c,0.2)}if(c9.gyj())c3.bG(B.fC1,B.fCA,B.m8,0.2)
c3.b=8001
c3.iy(B.fHg,B.fHN,B.bbP,2)
c3.bG(B.fGv,B.fAL,B.adj,0.1)
c3.bG(B.fGu,B.fAM,B.VF,0.1)
c3.bG(B.fGo,B.aRq,B.VF,0.1)
c3.bG(B.fzD,B.aRq,B.VF,0.1)
c8.n(0,8001,B.dWG)
c3.b=8002
c3.qe(B.fHZ,B.aRt,B.m6,0.05,3)
c3.qe(B.fAj,B.aRt,B.m6,0.05,3)
c8.n(0,8002,B.dX7)
for(v=c9.y,w=0;u=$.Gl(),w<u.length;++w){t=1000+w
c3.b=t
c3.cCi(new A.E(u[w],0,-2.25),B.fFp,B.m6,!1,0.05,2)
s=v.t(0,w)?"This one has a hole for the cable.":"Tap it with the drill to put a hole through it."
c8.n(0,t,new A.d1("Wall stud","A 2x4 stud, one of the vertical posts in the wall. They stand 16 inches apart. "+s,new A.E(u[w],20,-2),60))
if(v.t(0,w)){c3.b=0
c3.e=0.6
c3.bO(new A.E(u[w],40,-2.25),B.fAZ,B.adZ)
c3.e=0}}c3.b=8000
c3.bG(B.fzI,B.fyR,B.abG,0.5)
c3.e=0.4
c3.bO(B.fDl,B.fGX,B.E1)
for(r=0;r<6;++r)for(v=19.5-r*3.6,q=0;q<2;++q)c3.bG(new A.E(61.6+q*4.8,v,0.5),B.fxA,B.af1,0.3)
p=c9.ax&&!c9.ay
v=p?0.6:0
if(c9.ay)u=D.cb
else u=p?D.bI:D.ju
c3.bG(new A.E(64,-2.5+v,0.9),B.fCv,u,0.4)
c3.e=0
if(c9.ay)v="The main breaker has TRIPPED (orange). Tap it to flip it fully OFF, fix the problem, then turn it ON."
else v=c9.ax?"The power is ON. Tap to turn it OFF. Always turn it OFF before you touch any wire.":"The power is OFF. Tap to turn it ON."
c8.n(0,8000,new A.d1("Breaker panel",v,B.fAN,60))
c3.b=8003
for(v=c9.z,u=C.ec(v,v.r,C.a3(v).c),t=x.o,s=u.$ti.c;u.C();){o=u.d
n=A.l0(o==null?s.a(o):o)
o=n.d
m=o.a-0.35
l=C.a([B.fG8,B.fEo,new A.E(m,40,-3.2)],t)
if(n.c)D.d.v(l,C.a([new A.E(m,51.4,-3.2),new A.E(m,51.4,o.c+11)],t))
else l.push(new A.E(m,o.b+11,-3.4))
c3.jT(A.Ge(l,3,6),0.2,B.Wf,!1,0.35,6)}c8.n(0,8003,B.dXv)
for(u=x.U,s=c9.Q,k=0;k<3;++k){j=B.o0[k]
i=s.h(0,j)
if(i==null||!i.a)continue
if(i.e)h=B.bhc
else h=i.d?B.biA:B.bi_
o=C.a([],u)
for(m=i.b,l=C.a3(m),g=new C.mU(m,m.r,l.k("mU<1>")),g.c=m.e,l=l.c;g.C();){m=g.d
if(m==null)m=l.a(m)
o.push(new C.cH([A.l0(m).d.a-1.15,A.l0(m).d.a+1.15,A.l0(m).d.b-2,A.l0(m).d.b+2]))}m=6100+k
c3.b=m
A.hOv(c3,j,j+48,-47,47,-0.25,0.5,h,o)
o=i.e?"Painted and finished.":"A 4 by 8 foot sheet of drywall (gypsum between two layers of paper). It is screwed to the studs."
c8.n(0,m,new A.d1("Drywall sheet",o,new A.E(j+24,0,0),90))
c3.b=0
c3.e=0.3
for(o=i.c,m=C.a3(o),l=new C.mU(o,o.r,m.k("mU<1>")),l.c=o.e,m=m.c;l.C();){o=l.d
if(o==null)o=m.a(o)
f=D.o.an(o,10)
e=D.o.G(o,10)
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
if(a2===0)h=B.bhf
else h=a3.c?B.bdD:B.b9q
c3.e=0.5
c3.bO(new A.E(d,0,0.08+0.02*a2),new A.E(2.2+a2*1.4,94,0.12),h)
c3.e=0}else if(!o||!l||g){c3.d=0.45
c3.e=0.6
c3.bO(new A.E(d,0,0.12),B.fCJ,D.b1)
c3.e=0
c3.d=1}if(a3.d)a2="Smooth and ready for paint."
else if(!a3.a)a2="The joint between two sheets. It needs tape and three coats of joint compound."
else{a2=a3.b
a4=a2===1?"":"s"
a4="Taped, with "+a2+" coat"+a4+" of mud."
a2=a4}c8.n(0,a0,new A.d1("Seam",a2,new A.E(d,0,0),70))}for(o=d0.b,m=c9.x,l=c9.at,g=x.N,a5=0;a5<7;++a5){n=B.tW[a5]
a0=n.a
a6=m.ai(0,a0)
a7=l.h(0,a0)
a8=o===a0&&a7!=null
if(!a6)continue
a2=n.c
if(a2)a9=n.e==="fan"?"fan":"light"
else{a4=a7==null?null:a7.a
a9=a4==null?"outlet":a4}if(a8){b0=A.Ag(a7.a)
a0=a7.b
b1=A.fUo(b0,a0,!1)
b2=A.fTA(b1,n,new A.fmD(n))
D.d.v(c2,b2.a)
c8.v(0,b2.b)
if(a0.f&&a0.c===0){a0=C.a([],c5)
for(a2=b1.c,a4=a2.length,b3=0;b3<a2.length;a2.length===a4||(0,C.L)(a2),++b3){b4=a2[b3]
a0.push(new A.ud(A.a1V(n,b4.a),b4.b,b4.c))}D.d.v(c6,a0)}}else if(a7!=null&&a7.b.c>=2){a4=a7.a
b5=a7.b
b6=b5.w
b7=C.a([],c1)
b8=new A.jf(b7)
b9=new A.XI(C.T(c7,g))
b9.c=2
b9.w=b6
if(a4==="light"||a4==="fan")A.hb9(b8,a4,b9)
else{A.haP(b8,a4,-0.25,b6,!0)
A.hdc(b8,b6)}D.d.v(c2,A.fTA(new A.zn(b7,B.diK,B.GQ,B.vH),n,new A.fmE(n)).a)
if(!a2){c3.b=3000+a0
c3.e=0.4
c3.d=0.55
a2=n.d
b5=b5.w?D.ay:D.b7
c3.bO(new A.E(a2.a,a2.b,a2.c+0.2),B.fCN,b5)
c3.d=1
c3.e=0}c8.n(0,3000+a0,new A.d1(A.hKo(a4),A.hKn(c9,a0),A.a1V(n,B.a7M),22))}else{a4=C.a([],c1)
A.haa(new A.jf(a4),a9,!1)
D.d.v(c2,A.fTA(new A.zn(a4,B.djn,B.GQ,B.vH),n,new A.fmF(n)).a)
a2=a2?"Ceiling box":"Electrical box"
a4=v.t(0,a0)?"The box is mounted and the cable is in. A device can be wired here.":"The box is mounted. Pull the cable to it."
c8.n(0,2000+a0,new A.d1(a2,a4,A.a1V(n,B.a7M),24))}}c0=new A.fmI(c3)
if(u==="wall"||u==="ceiling"||u==="fanbox")for(a5=0;a5<7;++a5){n=B.tW[a5]
c1=n.a
if(m.ai(0,c1))continue
c5=n.c
c7=n.d
s=c7.a
o=c7.b
a0=c5?new A.E(s,o-1,c7.c):new A.E(s,o,1.5)
a2=c5?B.fB4:B.fCo
c0.$4$round(2000+c1,a0,a2,c5)
c1=c5?new A.E(s,o-8,c7.c):new A.E(s,o+7,3)
c6.push(new A.ud(c1,n.b,D.fh))}else if(u==="cable")for(a5=0;a5<7;++a5){n=B.tW[a5]
c1=n.a
if(!m.ai(0,c1)||v.t(0,c1))continue
c5=n.c
c7=n.d
s=c7.a
o=c7.b
c7=c5?new A.E(s,o-1,c7.c):new A.E(s,o,1.5)
s=c5?B.aRw:B.fBj
c0.$5$col$round(2000+c1,c7,s,D.cn,c5)}else if(u==="knife")for(a5=0;a5<7;++a5){n=B.tW[a5]
if(n.c||!m.ai(0,n.a))continue
c1=n.d
c5=c1.a
i=c9.aod(c5)
if(i==null||i.b.t(0,n.a))continue
c0.$4$col(2000+n.a,new A.E(c5,c1.b,0.5),B.fCu,D.ct)}else if(u==="sheet")for(w=0;w<5;){j=B.a2p[w]
c0.$3(6000+w,new A.E(j,0,0.3),B.fFs);++w
c6.push(new A.ud(new A.E(j,50,1),"edge "+w,D.fh))}else if(u==="screw")for(a5=0;a5<3;++a5){j=B.o0[a5]
i=s.h(0,j)
if(i==null||!i.a)continue
for(c1=c9.aow(j),c5=c1.length,c7=i.c,o=j+48,b3=0;b3<c1.length;c1.length===c5||(0,C.L)(c1),++b3){f=c1[b3]
for(a0=f*10,a2=7000+a0,r=0;r<6;++r){if(c7.t(0,a0+r))continue
c0.$3(a2+r,new A.E($.Gl()[f],-40+r*16,0.5),B.aRn)}a2=$.Gl()
if(f+1<a2.length&&a2[f]+16<=o)for(a0=7500+a0,r=0;r<6;r+=2)c0.$4$col(a0+r,new A.E(a2[f]+8,-40+r*16+8,0.5),B.aRn,D.dy)}}if(!C.ew(["wall","ceiling","fanbox","cable","knife","sheet","screw",""],g).t(0,u))c1=D.d.t(B.GU,u)||C.ew(["outlet","gfci","switch","light","fan"],g).t(0,u)
else c1=!1
if(c1)for(c1=c9.CW,a5=0;a5<7;++a5){n=B.tW[a5]
if(D.d.t(B.GU,u)){c5=n.a
a7=l.h(0,c5)
if(a7!=null){c7=a7.a
c7=(c7==="outlet"||c7==="gfci")&&a7.b.c>=2&&!c1.ai(0,c5)}else c7=!1
if(c7){c7=n.d
c0.$4$col(3000+c5,new A.E(c7.a,c7.b,1.2),B.fCO,D.b8)}}else{c5=n.a
if(m.ai(0,c5)&&v.t(0,c5)&&!l.ai(0,c5)){c7=n.c
s=n.d
o=s.a
g=s.b
s=c7?new A.E(o,g-1,s.c):new A.E(o,g,1.2)
o=c7?B.aRw:B.fFm
c0.$4$round(2000+c5,s,o,c7)}}}for(c1=c9.CW,c5=new C.cK(c1,C.a3(c1).k("cK<1,2>")).gae(0);c5.C();){j=c5.d
c7=j.a
n=A.l0(c7)
v=c3.b=8100+c7
u=n.d
d=u.a
u=u.b
c3.jT(A.Ge(C.a([new A.E(d,u,2.5),new A.E(d,-46,3.5),new A.E(d,-46,22)],t),4,6),0.28,B.Wj,!1,0.2,6)
c3.bG(new A.E(d,u,1.6),B.fC_,B.b6F,0.3)
u=j.b
switch(u){case"tv":c3.bG(new A.E(d,-45,24),B.fAs,B.adn,0.2)
c3.bG(new A.E(d,-19,24),B.fBb,E.Ed,0.4)
if(c1.ai(0,c7))c7=c9.ax&&!c9.ay&&c9.a3b(c7)
else c7=!1
if(c7){c7=d-38.5
s=d+38.5
c4.push(new A.WL(C.a([new A.E(c7,1.5,25.7),new A.E(s,1.5,25.7),new A.E(s,-39.5,25.7),new A.E(c7,-39.5,25.7)],t),v,new A.fmG(j),180,9,2))}break
case"lamp":c3.e5(new A.E(d,-47.5,24),new A.E(d,-46.5,24),6,B.Vm,0.4,14)
c3.e5(new A.E(d,-46.5,24),new A.E(d,-22,24),1,B.At,0.5,8)
c3.yh(new A.E(d,-26,24),new A.E(d,-12,24),9,X.Wr,!1,!0,5.5,0.2,16)
break
case"toaster":c3.bG(new A.E(d,-42.5,24),B.fz6,B.kD,0.8)
c3.bO(new A.E(d,-38,24),B.fG7,B.aew)
break
default:c3.bG(new A.E(d,-43.5,24),B.fzs,B.adn,0.2)
c3.Ki(new A.E(d-6,-38,24),new A.E(d+8,-38,24),3.4,B.KJ,3,0.6,12)
c3.ajb(new A.E(d-8,-43,24),B.fze,B.KJ,0.6,0)}c7=A.hIy(u)
s="Plugged into "+n.b
u=u==="tv"?s+". Tap it to watch NGMY ads full screen. Use the Unplug tool to unplug it.":s+". Tap it to unplug."
c8.n(0,v,new A.d1(c7,u,new A.E(d,-35,20),60))}for(a5=0;a5<7;++a5){n=B.tW[a5]
c8.cg(0,2000+n.a,new A.fmH(n))}return new A.zn(c2,c8,c6,c4)},
hKo(d){var w
A:{if("gfci"===d){w="GFCI outlet"
break A}if("switch"===d){w="Light switch"
break A}if("light"===d){w="Ceiling light"
break A}if("fan"===d){w="Ceiling fan"
break A}w="Outlet"
break A}return w},
hIy(d){var w
A:{if("tv"===d){w="TV"
break A}if("lamp"===d){w="Lamp"
break A}if("toaster"===d){w="Toaster"
break A}w="Hair dryer"
break A}return w},
hKn(d,e){var w,v=d.at.h(0,e)
if(v==null)return""
if(v.b.w)return"BURNT. It was wired wrong and it burnt out. Pull it out and put in a new one."
w=v.a
if(w==="switch")return d.ch.t(0,e)?"The switch is ON. Tap to turn it off.":"The switch is OFF. Tap to flip it on."
if(w==="light"||w==="fan")return d.alx(e)?"It is running.":"It is off. Flip its switch (breaker on)."
w=d.CW.h(0,e)
return"Tap with a TV, lamp, toaster or hair dryer in your hand to plug it in. Plugged: "+(w==null?"nothing":w)+"."},
i2N(a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=C.a([],x.z),a0=new A.jf(d)
for(w=D.d.gae(B.tW),v=new C.fk(w,new A.fCJ()),u=a1.at,t=a2*7;v.C();){s=w.gS(0)
r=s.a
q=u.h(0,r)
if(q==null||q.b.c<1)continue
p=a1.alx(r)?t:0.4
a0.b=3000+r
s=s.d
r=s.a
o=s.b-6.6
s=s.c
for(n=0;n<4;++n){m=p+n*3.141592653589793/2
l=A.bBN(B.fyP,m)
a0.ajb(new A.E(r+l.a,o+l.b,s+l.c),B.fHE,B.b7F,0.3,m)}}w=a1.d
w===$&&C.c()
w=D.d.gae(w)
v=new C.fk(w,new A.fCK())
u=a2*5
while(v.C()){s=w.gS(0).a
if(a1.alx(s)){k=A.l0(s)
a0.b=0
a0.d=0.25+0.05*Math.sin(u)
s=k.d
a0.iQ(new A.E(s.a,s.b-5,s.c),11,B.VJ,4,10,0)
a0.d=1}}for(w=a1.CW,v=new C.cK(w,C.a3(w).k("cK<1,2>")).gae(0),u=a2*1.6,s=a2*6;v.C();){j=v.d
r=j.a
if(w.ai(0,r))o=a1.ax&&!a1.ay&&a1.a3b(r)
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
r=C.aq(B.acV,T.Wv,(Math.sin(s)+1)/2)
r.toString
a0.bO(new A.E(i,-38.2,24),new A.E(13,0.3,6),r)
a0.e=0
break
default:for(r=i+9,h=0;h<6;++h)a0.iQ(new A.E(r+D.k.G(u+h/6,1)*22,-38+Math.sin(h*2)*2,24),0.6,B.bdZ,3,5,0.2)}}for(w=new C.cK(a3,C.a3(a3).k("cK<1,2>")).gae(0),v=a2*0.7,u=a2*2.2;w.C();){j=w.d
s=j.b
if(a2>s)continue
k=A.l0(j.a)
g=D.k.D(s-a2,0,3)
a0.b=0
for(h=0;h<14;++h){f=D.k.G(u+h*0.137,1)
m=h*2.4+t
e=A.a1V(k,new A.E(Math.cos(m)*f*7,Math.sin(m)*f*7-f*f*6,3+f*4))
s=D.k.D(g,0.3,1)
r=C.aq(E.WG,E.WL,1-f)
r.toString
a0.iQ(e,0.35*s,r,3,5,0)}a0.d=0.35
for(h=0;h<5;++h){f=D.k.G(v+h*0.2,1)
s=f*3
a0.iQ(A.a1V(k,new A.E(Math.sin(h*1.7)*2,f*10,5+s)),1.2+s,B.bjm,3,6,0)}a0.d=1}return d},
vR:function vR(d,e,f){this.a=d
this.b=e
this.c=f},
ffW:function ffW(d){this.a=d},
ffX:function ffX(d){this.a=d},
fmD:function fmD(d){this.a=d},
fmE:function fmE(d){this.a=d},
fmF:function fmF(d){this.a=d},
fmI:function fmI(d){this.a=d},
fmG:function fmG(d){this.a=d},
fmH:function fmH(d){this.a=d},
fCJ:function fCJ(){},
fCK:function fCK(){},
h6Q(d,e){var w=new A.coo(e,d,A.h0i())
w.bwc(4,d,e)
return w},
qT:function qT(d,e){this.a=d
this.b=e},
u1:function u1(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
Ly:function Ly(d,e){this.a=d
this.b=e
this.c=!1},
coo:function coo(d,e,f){var _=this
_.a=d
_.b=e
_.c=$
_.d=f
_.e=3
_.r=_.f=0
_.w=!1},
cot:function cot(d){this.a=d},
cop:function cop(){},
cor:function cor(){},
cos:function cos(){},
coq:function coq(d){this.a=d},
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
em0:function em0(d,e,f){this.a=d
this.b=e
this.c=f},
em1:function em1(d){this.a=d},
em_:function em_(d){this.a=d},
elQ:function elQ(d){this.a=d},
elV:function elV(d){this.a=d},
elW:function elW(d){this.a=d},
elU:function elU(d){this.a=d},
elX:function elX(d,e){this.a=d
this.b=e},
elY:function elY(d){this.a=d},
elZ:function elZ(d){this.a=d},
elT:function elT(d){this.a=d},
elS:function elS(d,e){this.a=d
this.b=e},
elP:function elP(d){this.a=d},
elN:function elN(d){this.a=d},
elO:function elO(d,e){this.a=d
this.b=e},
elR:function elR(d){this.a=d},
emd:function emd(d,e){this.a=d
this.b=e},
em9:function em9(){},
em8:function em8(d){this.a=d},
ema:function ema(){},
emb:function emb(){},
emc:function emc(d,e){this.a=d
this.b=e},
em7:function em7(d,e){this.a=d
this.b=e},
em6:function em6(d){this.a=d},
em5:function em5(d){this.a=d},
em3:function em3(d,e){this.a=d
this.b=e},
em2:function em2(){},
em4:function em4(d,e){this.a=d
this.b=e},
i2k(d){var w,v,u,t,s,r,q,p,o,n,m=d.gfp(0),l=C.a([],x.T)
for(w=d.x,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u){t=w[u]
s=t.b
if(s==="rug")continue
s=B.pX.h(0,s)
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
case"bathroom":l.push(B.dki)
l.push(B.dkg)
w=-m/2
l.push(new A.B_(w,w+33,0,75))
break}return l},
h6G(d){var w=new A.cl2(d,A.i2k(d))
w.c=D.k.dw(d.gfp(0)/4)+1
w.d=D.k.dw(d.gj7(0)/4)+1
return w},
bp9(d,e,f,g,h,i,j,k,l,m,n,o){var w=new A.bp8(d,i,m,o,n,l,g,f,k,j,e,h,C.a([],x.n))
w.bwr(d,e,f,g,h,i,j,k,l,m,n,o)
return w},
haS(d,e){var w,v,u,t=d.w,s=D.d.bc(t,new A.f9d(e))
if(s<0)s=0
w=t[s]
v=d.gfp(0)
u=d.gj7(0)
t=w.b
switch(w.a){case"left":return new C.bt(new C.y(-v/2+18,D.k.D(t+u/2-40,10,u-10)),1.5707963267948966,s)
case"right":return new C.bt(new C.y(v/2-18,D.k.D(t+u/2-40,10,u-10)),-1.5707963267948966,s)
default:return new C.bt(new C.y(D.o.D(t,-v/2+12,v/2-12),18),0,s)}},
VV:function VV(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var _=this
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
O2:function O2(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.x=k
_.y=l},
B_:function B_(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cl2:function cl2(d,e){var _=this
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
f9d:function f9d(d){this.a=d},
bPI:function bPI(d,e,f){var _=this
_.a=d
_.b=e
_.c=f
_.d=$},
bPJ:function bPJ(d,e){this.a=d
this.b=e},
bPK:function bPK(d){this.a=d},
fWN(d){var w,v,u,t,s,r,q,p,o,n,m=C.a([B.dkh],x.T)
for(w=d.x,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u){t=w[u]
s=t.b
if(D.d.t(B.awb,s)||D.d.t(B.a1B,s)||s==="bush")continue
r=B.pX.h(0,s)
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
h83(d,e,f){var w=new A.cuN(d,e,f,B.d2m)
w.w=A.fWN(d)
return w},
cuN:function cuN(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=0
_.e=!1
_.f=0
_.r=null
_.w=g}},B,G,E,I,A6,X,R,S,A7,A8
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
H=c[106]
A1=c[100]
A2=c[108]
V=c[107]
W=c[109]
P=c[102]
A3=c[94]
A4=c[114]
Q=c[91]
K=c[95]
A5=c[90]
M=c[92]
A=a.updateHolder(c[24],A)
B=c[88]
G=c[26]
E=c[93]
I=c[103]
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
Kh(d){var w=this.b,v=d.c,u=this.c,t=d.b,s=d.a,r=this.a
return new A.E(w*v-u*t,u*s-r*v,r*t-w*s)},
gTb(){var w=this.a,v=this.b,u=this.c
return Math.sqrt(w*w+v*v+u*u)},
gox(d){var w=this,v=w.gTb()
return v<1e-9?w:new A.E(w.a/v,w.b/v,w.c/v)}}
A.nd.prototype={}
A.d1.prototype={}
A.ud.prototype={}
A.zn.prototype={}
A.WL.prototype={}
A.jf.prototype={
Vr(){var w=this.x
if(!(w!==0))if(this.r){w=$.Td+1
$.Td=w}else w=0
this.w=w},
bfI(d,e,f,g,h,i,j,k){var w=this,v=i.gox(0)
w.a.push(new A.nd(C.a([d,e,f,g],x.o),v,h,w.b,j,w.d,k,w.c,w.e,w.f,w.w))},
bfH(d,e,f,g,h,i,j){return this.bfI(d,e,f,g,h,i,0,j)},
cQu(d,e,f,g,h,i,j){return this.bfI(d,e,f,g,h,i,j,!1)},
a5z(d,e,f,g,h,i){var w=this,v=(h==null?e.aC(0,d).Kh(f.aC(0,d)):h).gox(0)
w.a.push(new A.nd(C.a([d,e,f],x.o),v,g,w.b,0,w.d,i,w.c,w.e,w.f,w.w))},
bgM(d,e,f,g){return this.a5z(d,e,f,g,null,!0)},
JZ(d,e,f,g,h,i,j){var w,v,u,t,s,r,q,p,o,n,m
this.Vr()
w=e.a/2
v=e.b/2
u=e.c/2
t=new A.bVu(this,i,new A.bVv(j,d),new A.bVw(j),f,h)
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
iy(d,e,f,g){return this.JZ(d,e,f,!0,0,g,0)},
aBC(d,e,f,g,h){return this.JZ(d,e,f,g,h,1,0)},
qe(d,e,f,g,h){return this.JZ(d,e,f,!0,g,h,0)},
bG(d,e,f,g){return this.JZ(d,e,f,!0,g,1,0)},
bO(d,e,f){return this.JZ(d,e,f,!0,0,1,0)},
ajb(d,e,f,g,h){return this.JZ(d,e,f,!0,g,1,h)},
cCi(d,e,f,g,h,i){return this.JZ(d,e,f,g,h,i,0)},
yh(b3,b4,b5,b6,b7,b8,b9,c0,c1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2=this
b2.Vr()
w=b4.aC(0,b3).gox(0)
v=w.b
u=w.Kh(Math.abs(v)<0.9?B.fP:B.j_).gox(0)
t=w.Kh(u).gox(0)
s=b9<0?b5:b9
r=new A.bVx(u,c1,t)
for(q=b2.a,p=b3.a,o=b3.b,n=b3.c,m=b4.a,l=b4.b,k=b4.c,j=x.o,i=w.a*-1,v*=-1,h=w.c*-1,g=0;g<c1;){f=r.$1(g);++g
e=r.$1(g)
d=f.a
a0=e.a
a1=f.b
a2=e.b
a3=f.c
a4=e.c
a5=new A.E(d+a0,a1+a2,a3+a4).gox(0)
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
Ki(d,e,f,g,h,i,j){return this.yh(d,e,f,g,!0,!1,h,i,j)},
a3_(d,e,f,g,h,i,j,k){return this.yh(d,e,f,g,h,i,-1,j,k)},
hB(d,e,f,g,h){return this.yh(d,e,f,g,!0,!1,-1,0,h)},
baH(d,e,f,g,h,i,j){return this.yh(d,e,f,g,h,!1,-1,i,j)},
baF(d,e,f,g,h,i){return this.yh(d,e,f,g,h,!1,-1,0,i)},
ajY(d,e,f,g,h,i){return this.yh(d,e,f,g,!0,!1,h,0,i)},
baG(d,e,f,g,h,i,j){return this.yh(d,e,f,g,h,!1,i,0,j)},
iQ(a7,a8,a9,b0,b1,b2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6=this
a6.Vr()
w=new A.bVt(b0,b1)
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
v.push(new A.nd(C.a([new A.E(u+i*a8,t+h*a8,s+g*a8),new A.E(u+f*a8,t+e*a8,s+d*a8),new A.E(u+a0*a8,t+a1*a8,s+a2*a8),new A.E(u+a3*a8,t+a4*a8,s+a5*a8)],r),new A.E(i+f+a0+a3,h+e+a1+a4,g+d+a2+a5).gox(0),a9,a6.b,b2,a6.d,!1,a6.c,a6.e,a6.f,a6.w))}},
b8J(d,e,f,g){return this.iQ(d,e,f,6,10,g)},
io(d,e,f,g,h){return this.iQ(d,e,f,g,h,0.4)},
a5B(d,e,f,g,h,i,j,k){var w,v,u,t,s
this.Vr()
for(w=0;v=w+1,v<d.length;w=v){u=d[v]
t=d[w]
if(new A.E(u.a-t.a,u.b-t.b,u.c-t.c).gTb()<0.000001)continue
u=d[w]
t=d[v]
if(g)s=w===0||w===d.length-2
else s=!1
this.a3_(u,t,e,f,s,h,j,k)}if(i)for(u=e*0.98,w=1;v=w+1,v<d.length;w=v)this.iQ(d[w],u,f,4,k,j)},
jT(d,e,f,g,h,i){return this.a5B(d,e,f,!0,!1,g,h,i)},
aHa(d,e,f,g,h,i,j){return this.a5B(d,e,f,g,!1,h,i,j)},
bgO(d,e,f,g,h){return this.a5B(d,e,f,!0,!1,!0,g,h)},
yV(a4,a5,a6,a7,a8,a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=this
a3.Vr()
a3.baH(a4,a5,a6,a8,!1,a9,b0)
w=a5.aC(0,a4).gox(0)
v=w.Kh(Math.abs(w.b)<0.9?B.fP:B.j_).gox(0)
u=new A.bVy(v,b0,w.Kh(v).gox(0))
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
cRT(d,e,f,g,h,i){return this.yV(d,e,f,g,h,i,16)}}
A.AC.prototype={
Gy(d){var w,v,u,t=this
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
aIw(d){return this.lU(null,null,d,null)},
aGX(d){var w,v,u,t=this
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
cIU(d,e){var w,v,u,t,s=this,r=e.a,q=e.b,p=Math.min(r,q)*1.15,o=Math.cos(s.a),n=Math.sin(s.a)
q=new A.bGg(s,new A.bGh(Math.cos(s.b),Math.sin(s.b),o,n),(d.a-r/2)/p,-(d.b-q/2)/p)
w=q.$1(0)
r=q.$1(1).b
v=w.b
u=r-v
if(Math.abs(u)<1e-9)return null
t=(0-v)/u
if(t<=0)return null
return q.$1(t)},
anv(d){var w=this
w.as=null
w.c=D.k.D(w.c*d,w.e,w.f)
w.aZ()}}
A.bPz.prototype={
cPJ(d){var w,v,u,t
for(w=this.a,v=w.length-1,u=d.a,t=d.b;v>=0;--v)if(w[v].a.gbJ().a.contains(u,t))return w[v].b
return 0}}
A.b3N.prototype={
gaGZ(d){var w=this.r.a
return w==null?0:w},
cd_(b1,b2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=null,a8=b2.a,a9=b2.b,b0=new C.aa(0,0,0+a8,0+a9)
$.X()
w=C.M()
w.saq(B.bTg.av(0,b0))
b1.aX(b0,w)
v=this.c.a*90
w=b1.a
J.bz(w.save())
w.translate(a8*0.45-v,a9*0.3)
b1.iW(0,-0.45)
for(u=x.O,t=0;t<3;++t){s=C.cs(D.J,a9*(0.2-t*0.05),a8*(1.9-t*0.4))
r=[B.b90,D.aT,D.qH][t]
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
e.saq(new C.bS(D.A,0.5,D.x,a7,0,C.a([D.aT.j(0.28),B.beO],u),a7,a7).av(0,C.bT(i,g)))
b1.ah(i,g,e)
J.bz(w.save())
f=new C.aP(f.r,D.ap,a7,a7,C.a([],x.v))
f.E(new C.ke(C.bT(i,h)))
b1.qf(0,f)
f=C.M()
f.saq(B.eav.av(0,C.bT(i,h)))
b1.ah(i,h,f)
d=C.M()
d.r=B.b9k.gp(0)
for(a0=0;a0<4;++a0){u=B.cOK[a0].a
a1=u[0]
a2=u[1]
a3=u[2]
a4=u[3]
u=q.a
u=C.cs(new C.u(l+(a1*h+Math.sin((u==null?0:u)*0.05)*h*0.08),j+a2*h),a4*h*2,a3*h*2)
p=d.H()
w.drawOval(C.c1(u),p)
p.delete()}$.X()
a5=C.M()
a5.r=D.c.j(0.55).gp(0)
for(u=h*0.16,a0=0;a0<3;++a0){q=B.cLV[a0]
q=C.cs(new C.u(l+q.a*h,j+q.b*h),u,q.c*h*2)
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
w.r=B.baj.gp(0)
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
a5(e1,e2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6,d7,d8,d9=this,e0=null
if(d9.y)d9.cd_(e1,e2)
else{w=0+e2.a
v=0+e2.b
$.X()
u=C.M()
t=d9.x
s=C.aq(t,D.c,0.06)
s.toString
u.saq(new C.a8(D.b0,D.b5,D.x,C.a([s,t],x.O),e0,e0).av(0,new C.aa(0,0,w,v)))
e1.aX(new C.aa(0,0,w,v),u)}r=e2.a
q=e2.b
p=Math.min(r,q)*1.15
o=r/2
n=q/2
w=d9.c
m=new A.clY(Math.cos(w.a),Math.sin(w.a),Math.cos(w.b),Math.sin(w.b))
l=new A.clZ(d9,m)
k=B.fEa.gox(0)
j=k.ad(0,B.zs).gox(0)
i=C.a([],x.bl)
w=d9.w
v=d9.b
h=v.a
if(!(w==null)){u=C.B(h,x.fX)
D.d.v(u,w.$1(d9.gaGZ(0)))
h=u}for(w=h.length,u=d9.e,t=x.v,s=u!==0,g=k.a,f=k.b,e=k.c,d=x.o,a0=d9.f,a1=a0!=null,a2=j.a,a3=j.b,a4=j.c,a5=d9.r,a6=0;a6<h.length;h.length===w||(0,C.L)(h),++a6){a7=h[a6]
if(a1&&!a0.$1(a7.w))continue
a8=C.a([],d)
for(a9=a7.a,b0=a9.length,b1=0;b1<a9.length;a9.length===b0||(0,C.L)(a9),++b1)a8.push(l.$1(a9[b1]))
b2=A.hJH(a8)
a8=b2.length
if(a8<3)continue
for(b3=0,b4=B.fO,b1=0;b1<a8;++b1){b5=b2[b1]
a9=b5.c
b3+=a9
b4=new A.E(b4.a+b5.a,b4.b+b5.b,b4.c+a9)}a8=1/a8
b6=m.$1(a7.b)
a9=b6.a
b0=b6.b
b7=b6.c
if(a9*(b4.a*a8)+b0*(b4.b*a8)+b7*(b4.c*a8)>0){if(!a7.r)continue
b6=new A.E(a9*-1,b0*-1,b7*-1)}a8=b6.a
a9=b6.b
b0=b6.c
b8=0.56+0.58*Math.max(0,a8*g+a9*f+b0*e)
b7=a7.e
b9=b7>0?Math.pow(Math.max(0,a8*a2+a9*a3+b0*a4),28)*b7:0
c0=a7.c
if(s&&a7.d===u){a8=a5.a
a8=C.aq(c0,D.b1,0.28+0.14*Math.sin((a8==null?0:a8)*6))
a8.toString
b8+=0.12
c0=a8}a8=255*b9*0.55
c1=D.k.V(D.k.D(c0.gb4(c0)*255*b8+a8,0,255))
c2=D.k.V(D.k.D(c0.gbb()*255*b8+a8,0,255))
c3=D.k.V(D.k.D(c0.gba(c0)*255*b8+a8,0,255))
a8=$.X()
a9=C.a([],t)
c4=new C.aP(a8.r,D.ap,e0,e0,a9)
for(c5=0;c5<b2.length;++c5){b5=b2[c5]
a8=b5.c
c6=o+b5.a*p/a8
c7=n-b5.b*p/a8
if(c5===0){a8=new C.b5(c6,c7)
a9.push(a8)
b0=c4.f
if(b0!=null)a8.bx(b0)
a8=c4.e
if(a8!=null)a8.a.delete()
c4.e=null}else{a8=new C.ap(c6,c7)
a9.push(a8)
b0=c4.f
if(b0!=null)a8.bx(b0)
a8=c4.e
if(a8!=null)a8.a.delete()
c4.e=null}}a8=new C.bF()
a9.push(a8)
a9=c4.f
if(a9!=null)a8.bx(a9)
a8=c4.e
if(a8!=null)a8.a.delete()
c4.e=null
a8=a7.f
a9=b2.length
b0=a7.d
b7=b0===u&&s
i.push(new A.BY(a7.y,a7.z,e0,c4,new C.w(a8,(c1&255)/255,(c2&255)/255,(c3&255)/255,D.t),b3/a9-a7.x,b0,a8<0.99,b7))}for(w=v.d,u=w.length,g=x.dx,f=x.dN,a6=0;a6<w.length;w.length===u||(0,C.L)(w),++a6){c8=w[a6]
e=C.a([],d)
for(a0=c8.a,b1=0;b1<4;++b1)e.push(l.$1(a0[b1]))
if(D.d.b7(e,new A.clU()))continue
a1=e[0]
a2=e[1]
a3=e[2]
a4=e[3]
a5=(a1.c+a2.c+a3.c+a4.c)*0.25
a8=a0[3]
a9=a0[0]
b0=a9.a
b7=a9.b
a9=a9.c
a0=a0[1]
b6=m.$1(new A.E(a8.a-b0,a8.b-b7,a8.c-a9).Kh(new A.E(a0.a-b0,a0.b-b7,a0.c-a9)))
if(b6.a*((a1.a+a2.a+a3.a+a4.a)*0.25)+b6.b*((a1.b+a2.b+a3.b+a4.b)*0.25)+b6.c*a5>0)continue
a0=C.a([],f)
for(a1=e.length,b1=0;b1<e.length;e.length===a1||(0,C.L)(e),++b1){b5=e[b1]
a2=b5.c
a0.push(new C.u(o+b5.a*p/a2,n-b5.b*p/a2))}e=$.X()
a1=C.a([],t)
a2=C.B(a0,g)
a1.push(new C.R4(a2,!0))
i.push(new A.BY(c8.r,0,new A.clV(d9,c8,a0),new C.aP(e.r,D.ap,e0,e0,a1),D.K,a5-c8.f,c8.b,!1,!1))}w=x.S
c9=C.T(w,x.i)
d0=C.T(w,w)
for(w=i.length,a6=0;u=i.length,a6<u;i.length===w||(0,C.L)(i),++a6){d1=i[a6]
u=d1.b
if(u!==0){t=c9.h(0,u)
if(t==null)t=0
c9.n(0,u,t+d1.r)
t=d0.h(0,u)
d0.n(0,u,(t==null?0:t)+1)}}for(c5=0;c5<u;++c5)i[c5].c=c5
D.d.b_(i,new A.clW(new A.clX(c9,d0)))
w=d9.d.a
D.d.a9(w)
$.X()
d2=C.M()
d2.b=D.V
d3=C.M()
d3.b=D.ae
d3.c=0.8
for(u=i.length,t=e1.a,a6=0;a6<i.length;i.length===u||(0,C.L)(i),++a6){d4=i[a6]
g=d4.d
if(g!=null){g.$1(e1)
g=d4.w
if(g!==0)w.push(new C.y(d4.e,g))
continue}g=d4.f
d2.r=g.gp(0)
f=d4.e
d5=d2.H()
e=f.e
t.drawPath((e==null?f.e=new C.cF(f.gbJ().a.snapshot()):e).a,d5)
d5.delete()
if(!d4.x){d3.r=g.gp(0)
d5=d3.H()
g=f.e
t.drawPath((g==null?f.e=new C.cF(f.gbJ().a.snapshot()):g).a,d5)
d5.delete()}g=d4.w
if(g!==0)w.push(new C.y(f,g))}if(s){$.X()
d6=C.M()
d6.b=D.ae
d6.c=1.4
d6.r=D.c.j(0.35+0.25*Math.sin(d9.gaGZ(0)*6)).gp(0)
for(w=i.length,a6=0;a6<i.length;i.length===w||(0,C.L)(i),++a6){d4=i[a6]
if(d4.y){u=d4.e
d5=d6.H()
s=u.e
t.drawPath((s==null?u.e=new C.cF(u.gbJ().a.snapshot()):s).a,d5)
d5.delete()}}}for(w=v.c,v=w.length,a6=0;a6<w.length;w.length===v||(0,C.L)(w),++a6){d7=w[a6]
b5=l.$1(d7.a)
u=b5.c
if(u<1)continue
s=o+b5.a*p/u
u=n-b5.b*p/u
d8=new C.kp(new C.ep(d7.b,e0,e0,D.cO,e0,e0,e0,e0,e0,e0,new C.G(!0,D.c,e0,e0,e0,e0,11,D.u,e0,e0,e0,e0,e0,e0,e0,e0,e0,e0,e0,e0,e0,e0,e0,e0,e0,e0)),D.a5,D.ch,new C.jo(1),e0,e0,e0,e0,D.cd,e0)
d8.eP()
g=d8.b
f=g.c
g=g.a.c
c1=C.bA(C.cs(new C.u(s,u),g.gbe(g)+8,f+14),D.iE)
$.X()
f=new C.as(D.X,D.V,D.a_,D.a0,D.Z)
f.r=d7.c.j(0.92).gp(0)
d5=f.H()
t.drawRRect(C.eq(c1),d5)
d5.delete()
f=new C.as(D.X,D.V,D.a_,D.a0,D.Z)
f.b=D.ae
f.c=1
f.r=D.ad.gp(0)
d5=f.H()
t.drawRRect(C.eq(c1),d5)
d5.delete()
f=d8.b
g=f.c
f=f.a.c
d8.a5(e1,new C.u(s-g/2,u-f.gbe(f)/2))}},
ar(d){return!0}}
A.BY.prototype={}
A.atr.prototype={
U(){return new A.boX(new A.bPz(C.a([],x.a6)),new C.eO(0,$.aw()),D.bw,D.J,null,null)}}
A.boX.prototype={
a_(){var w,v=this
v.a1()
w=v.qi(new A.eSj(v))
w.j1(0)
v.d!==$&&C.aO()
v.d=w},
q(){var w=this.d
w===$&&C.c()
w.q()
w=this.f
w.T$=$.aw()
w.P$=0
this.buI()},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=p.a,m=n.Q==null,l=m?o:new A.eSd(p)
m=m?o:new A.eSe(p,d)
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
return C.o6(D.jf,C.aE(D.c5,new C.an(D.W,o,D.b_,D.r,r,o),D.y,!1,o,m,l,o,o,o,o,o,o,o,o,o,o,o,o,o,o,new A.eSf(p),new A.eSg(p),o,o,o,o,o,o,o,new A.eSh(p),o,o,o,!1,D.a8),o,o,o,o,o,o,new A.eSi(p),o)}}
A.aLB.prototype={
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
A.dgu.prototype={}
A.LF.prototype={
OA(d){return this.cj7(d)},
cj7(e4){var w=0,v=C.j(x.H),u=this,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6,d7,d8,d9,e0,e1,e2,e3
var $async$OA=C.e(function(e6,e7){if(e6===1)return C.f(e7,v)
for(;;)switch(w){case 0:if(e4.getUint32(0,!0)!==1179937895)throw C.V("not a glb file")
for(n=x.P,m=12,l=null,k=null;m+8<=e4.byteLength;){j=e4.getUint32(m,!0)
i=e4.getUint32(m+4,!0)
h=J.eX(D.dC.gaM(e4),e4.byteOffset+m+8,j)
if(i===1313821514)l=n.a(D.R.aG(0,new C.Fx(!1).D3(h,0,null,!0),null))
if(i===5130562)k=h
m+=8+j}if(l==null||k==null)throw C.V("empty glb")
g=new A.daE(l,k)
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
u.d=D.d.bc(a3,new A.bOn())
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
if(b5==null)b5=F.anR
a7=a8.a(a6.h(b4,"rotation"))
b6=a7==null?null:J.ku(a7,a5)
if(b6==null)b6=B.bVq
a6=a8.a(a6.h(b4,"scale"))
b7=a6==null?null:J.ku(a6,a5)
if(b7==null)b7=B.c7m
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
c1=a3.h(b7,"inverseBindMatrices")!=null?g.EU(D.k.N(C.dQ(a3.h(b7,"inverseBindMatrices")))).a:null
a3=u.as
a3.push(c1==null?A.hrY(a0.length):c1)}n=a8.a(f.h(l,"animations"))
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
d0=g.EU(D.k.N(C.dQ(a9.h(b7,"input")))).a
d1=g.EU(D.k.N(C.dQ(a9.h(b7,"output")))).a
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
break}r=g.cKW(s)
if(r==null){w=4
break}try{a0=r
d6=C.fUJ(a0)
q=d6==null?null:d6.po(0,a0,null)
if(q!=null){p=q.cDA(D.c7,4)
a0=s
a2=p.a
a2=a2==null?null:a2.a
if(a2==null)a2=0
a3=p.a
a3=a3==null?null:a3.b
if(a3==null)a3=0
d7=p
a4=d7.gqw()
d8=4!==a4?d7.cDz(null,4):d7
a4=d8.a
a4=a4==null?null:a4.bjJ(d8!==d7,D.b4_)
if(a4==null){a4=d7.a
a4=a4==null?null:J.eW(a4.gaM(a4))
if(a4==null){a4=d7.a
a4=a4==null?null:a4.gaM(a4)
if(a4==null)a4=D.aG.gaM(new Uint8Array(0))
a4=J.eW(a4)}}J.aF(t,a0,new A.beH(a2,a3,new Uint8Array(C.ce(a4))))}}catch(e5){o=C.a9(e5)
$.am.$1(e+C.t(o))}w=5
return C.b(C.bN(D.bw,null,n),$async$OA)
case 5:case 4:++s
w=2
break
case 3:e0=u.bNT(l,g,d,t)
w=6
return C.b(C.bN(D.bw,null,n),$async$OA)
case 6:u.at=u.b5w(e0,5000)
w=7
return C.b(C.bN(D.bw,null,n),$async$OA)
case 7:u.ax=u.b5w(e0,2000)
n=u.at
n.r=u.b0Y(n)
n=u.ax
n.r=u.b0Y(n)
e1=u.axh(null,0)
e2=u.b3P(u.at,e1)
for(n=e2.length,e3=1/0,s=1;s<n;s+=3)e3=Math.min(e3,e2[s])
u.ay=isFinite(e3)?e3:0
return C.h(null,v)}})
return C.i($async$OA,v)},
ckx(d){var w,v,u
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
b0Y(d){var w,v,u,t,s,r,q,p,o,n,m=d.a.length/3|0,l=new Uint8Array(m)
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
l[t]=o<n.length?this.ckx(n[o]):5}return l},
bNT(e9,f0,f1,f2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6,d7,d8,d9,e0,e1,e2=null,e3="POSITION",e4="JOINTS_0",e5="WEIGHTS_0",e6=J.a5(e9),e7=x.g,e8=e7.a(e6.h(e9,"materials"))
if(e8==null)e8=D.cu
w=x.P
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
b6=J.Gm(e.a(b5.h(b4,"attributes")),i,h)
if(b6.h(0,e3)==null||b5.h(b4,"indices")==null)continue
b7=f0.EU(D.k.N(C.dQ(b6.h(0,e3)))).a
b8=b7.length/3|0
b9=b6.h(0,e4)!=null?f0.EU(D.k.N(C.dQ(b6.h(0,e4)))).a:e2
c0=b6.h(0,e5)!=null?f0.EU(D.k.N(C.dQ(b6.h(0,e5)))).a:e2
c1=C.aJ(b5.h(b4,"material"))
c2=c1==null?e2:D.k.N(c1)
c1=g.a(J.q(c2!=null?a1.a(a0.h(d,c2)):D.cz,"pbrMetallicRoughness"))
c3=c1==null?e2:J.Gm(c1,i,h)
if(c3==null)c3=D.cz
c1=e7.a(c3.h(0,"baseColorFactor"))
c4=c1==null?e2:J.ku(c1,f)
if(c4==null)c4=B.c7n
c1=g.a(c3.h(0,"baseColorTexture"))
c5=c1==null?e2:J.Gm(c1,i,h)
c1=c5==null
c6=C.aJ(c1?e2:c5.h(0,"texCoord"))
c7=c6==null?e2:D.k.N(c6)
c8=b6.h(0,"TEXCOORD_"+(c7==null?0:c7))
c9=c8!=null?f0.EU(D.k.N(C.dQ(c8))).a:e2
if(!c1){c1=C.aJ(J.q(a4.a(a3.h(a2,D.k.N(C.dQ(c5.h(0,"index"))))),"source"))
d0=c1==null?e2:D.k.N(c1)
d1=d0!=null?f2.h(0,d0):e2}else d1=e2
d2=s.length/3|0
D.d.v(s,b7)
for(c1=c0!=null,c6=b9!=null,d3=0;d3<b8;++d3){o.push(b3?255:b2)
for(d4=d3*4,d5=0;d5<4;++d5){q.push(c6?D.k.N(b9[d4+d5]):0)
if(c1)d6=c0[d4+d5]
else d6=d5===0?1:0
p.push(d6)}}d7=f0.EU(D.k.N(C.dQ(b5.h(b4,"indices")))).a
for(b4=d7.length,d8=0;b5=d8+2,b5<b4;d8+=3){d9=D.k.N(d7[d8])
e0=D.k.N(d7[d8+1])
e1=D.k.N(d7[b5])
n.push(d2+d9)
n.push(d2+e0)
n.push(d2+e1)
m.push(this.bM6(d1,c9,d9,e0,e1,c4))}if(b3)a5.push(new C.bt(d2,b8,a7))}}return new A.dm1(new Float64Array(C.ce(s)),new Uint16Array(C.ce(q)),new Float64Array(C.ce(p)),new Uint8Array(C.ce(o)),new Int32Array(C.ce(n)),new Int32Array(C.ce(m)))},
bM6(d,e,f,g,h,i){var w,v,u,t,s,r,q,p=J.a5(i),o=p.h(i,0),n=p.h(i,1),m=p.h(i,2)
if(d!=null&&e!=null){w={}
p=f*2
v=g*2
u=h*2
t=(e[p]+e[v]+e[u])/3
s=(e[p+1]+e[v+1]+e[u+1])/3
r=w.a=w.b=w.c=0
q=new A.bOk(w,d)
q.$2(t,s)
for(p=[f,g,h];r<3;++r){v=p[r]*2
q.$2((t+e[v])/2,(s+e[v+1])/2)}o*=w.c/4/255
n*=w.b/4/255
m*=w.a/4/255}p=new A.bOj()
return(p.$1(o)<<16|p.$1(n)<<8|p.$1(m)|4278190080)>>>0},
b5w(d7,d8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4={},d5=d7.a,d6=d5.length/3|0
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
h=new A.bOp(d4,d6,d7)
g=new A.bOr(d7)
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
c3=A.h07(c1,c2,a9)
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
b8.bI(0,new A.bOo(c6,b9))
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
c9[d2]=q[d3]}d0[a9]=s[d1]}return new A.dgu(c7,c8,c9,d0,new Int32Array(C.ce(b7)),c6)},
axh(a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0=d.b
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
A.hrZ(o,r,n)}}m=d.CW.cg(0,"world",new A.bOl(a0.length))
l=new A.bOm(d,v,u,t,new Float64Array(16),m)
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
A.h08(m,w*16,q[h],f*16,j,i)
i+=16}}for(w=a0.length,p=0;p<a0.length;a0.length===w||(0,C.L)(a0),++p,i=e){e=i+16
D.o1.ea(j,i,e,m,a0[p].c*16)}return j},
b3P(b8,b9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3=b8.a,b4=b3.length/3|0,b5=new Float64Array(b4*3),b6=C.a([],x.t),b7=this.Q
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
cCY(d){var w,v,u=new A.bOu(this)
if(d)w=u.$1("walk")
else{v=u.$1("idle")
w=v==null?u.$1("samba"):v}if(w!=null)return w
u=u.$1("samba")
if(u==null){u=this.z
u=new C.cu(u,C.a3(u).k("cu<1>")).dL(0,new A.bOs(),new A.bOt(this))}return u},
cPY(a7,a8,a9,b0,b1,b2,b3,b4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=this,a5="world",a6={}
if(a7){w=a4.at
w===$&&C.c()
v=w}else{w=a4.ax
w===$&&C.c()
v=w}u=a4.cCY(b1)
w=a4.z.h(0,u)
t=w==null?null:w.b
if(t==null)t=1
if(b1&&b0!=null)s=b0/50*t
else{w=B.diD.h(0,a4.a)
s=a9*(w==null?1:w)}w=a4.e
r=w.h(0,u)
if(r==null){a4.axh(u,0)
if(a4.d>=0){q=a4.CW
r=new C.y(q.h(0,a5)[a4.d*16+12],q.h(0,a5)[a4.d*16+14])}else r=D.z2
w.n(0,u,r)}p=a4.axh(u,s)
a6.a=a6.b=0
if(a4.d>=0){w=a4.CW
a6.b=w.h(0,a5)[a4.d*16+12]-r.a
a6.a=w.h(0,a5)[a4.d*16+14]-r.b}o=a4.b3P(v,p)
w=B.djl.h(0,a4.a)
n=b3+(w==null?0:w)
m=C.ie(v.a.length/3|0,new A.bOw(a6,a4,o,36,Math.cos(n),Math.sin(n),b2,b4),!0,x.Q)
w=C.a([],x.t)
for(l=0;l<6;++l){q=$.Td+1
$.Td=q
w.push(q)}k=C.a([],x.z)
for(q=v.e,j=q.length,i=x.o,h=v.f,g=0;g<j;g+=3){f=m[q[g]]
e=m[q[g+1]]
d=m[q[g+2]]
a0=f.a
a1=f.b
a2=f.c
a3=new A.E(e.a-a0,e.b-a1,e.c-a2).Kh(new A.E(d.a-a0,d.b-a1,d.c-a2)).gox(0)
a2=C.a([f,e,d],i)
a1=C.b0(h[D.o.an(g,3)])
a0=v.r
a0===$&&C.c()
k.push(new A.nd(a2,a3,a1,a8,0.08,1,!1,0,0,2,w[a0[q[g]]]))}return k}}
A.dm1.prototype={}
A.daE.prototype={
cKW(d){var w,v,u=this.a,t=J.a5(u),s=x.j,r=x.G,q=C.aJ(J.q(r.a(J.q(s.a(t.h(u,"images")),d)),"bufferView")),p=q==null?null:D.k.N(q)
if(p==null)return null
w=r.a(J.q(s.a(t.h(u,"bufferViews")),p))
u=J.a5(w)
t=C.aJ(u.h(w,"byteOffset"))
v=t==null?null:D.k.N(t)
if(v==null)v=0
return C.zD(this.b,v,v+D.k.N(C.dQ(u.h(w,"byteLength"))))},
EU(a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=null,g="byteOffset",f=this.a,e=J.a5(f),d=x.j,a0=x.G,a1=a0.a(J.q(d.a(e.h(f,"accessors")),a5)),a2=J.a5(a1),a3=D.k.N(C.dQ(a2.h(a1,"count"))),a4=a2.h(a1,"type")
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
m=C.aQW(this.b)
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
A.O1.prototype={
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
gaBx(d){var w,v=this.gTf()
A:{if("has died"===v){w="\ud83d\udd6f"
break A}if("in hospital"===v){w="\ud83c\udfe5"
break A}if("in danger"===v){w="\ud83c\udd98"
break A}if("sick"===v){w="\ud83e\udd12"
break A}if("starving"===v||"hungry"===v){w="\ud83c\udf7d"
break A}if("unhappy at home"===v){w="\ud83d\ude1f"
break A}w="\ud83d\ude42"
break A}return w}}
A.Hd.prototype={}
A.L6.prototype={}
A.aRv.prototype={
bvq(d,e){var w,v=C.a([],x.y)
for(w=0;w<7;++w)v.push(new A.O1(B.ON[w]))
this.c=v
v[1].b=55
v[4].b=40},
gFF(){var w,v,u,t=C.a([],x.y),s=this.c
s===$&&C.c()
w=s.length
v=0
for(;v<s.length;s.length===w||(0,C.L)(s),++v){u=s[v]
if(u.f)t.push(u)}return t},
gcGR(){var w=this.c
w===$&&C.c()
return new C.a2(w,new A.bHl(),C.U(w).k("a2<1>")).gM(0)},
YG(d){var w=this.f
D.d.ck(w,0,d)
if(w.length>12)w.pop()},
b8b(a2,a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=this
a1.as+=a3
for(w=a1.gFF(),v=w.length,u=-0.6*a3,t=0.8*a3,s=0.2*a3,r=a1.b,q=0.012*a3,p=a1.f,o=0.15*a3,n=0;n<w.length;w.length===v||(0,C.L)(w),++n){m=w[n]
l=a4.d
l===$&&C.c()
k=m.a
j=l[k.c]
i=j.gjy()
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
m.c=l}}if(l<=0)a1.aPL(m)}}for(w=a1.e,v=1.2*a3,u=2.2*a3,d=0;d<w.length;++d){a0=w[d]
t=a0.a
if(t<0)continue
s=a1.c
s===$&&C.c()
m=s[t]
if(!m.f){a0.a=-1
continue}t=a0.b=Math.max(0,a0.b-a3)
if(t>30)a0.c=Math.min(100,a0.c+u)
else if(t<=0)if((m.c-=v)<=0){a1.aPL(m)
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
a1.cCk(a4)}},
aPL(d){var w
d.f=!1
d.c=0
w=d.r
if(w>=0)this.e[w].a=-1
d.r=-1
D.d.bn(this.d,new A.bHi(d))
this.YG(d.a.b+" has died. Keep up with everybody's needs: food, medicine and a home that works.")},
aTo(d,e){return D.d.b7(this.d,new A.bHj(d,e))},
UX(d){var w,v,u,t,s,r,q,p,o,n=this,m=n.d,l=C.B(m,x.fC),k=l.length,j=n.f,i=0
for(;i<l.length;l.length===k||(0,C.L)(l),++i){w=l[i]
v=B.ON[w.b]
u=w.c==="power"
if(u){t=d.d
t===$&&C.c()
s=t[v.c].gjy()}else{t=v.d
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
if(j.length>12)j.pop()}}for(l=n.gFF(),k=l.length,u=n.b,i=0;i<l.length;l.length===k||(0,C.L)(l),++i){q=l[i]
if(m.length>=4)break
t=d.d
t===$&&C.c()
r=q.a
p=t[r.c]
if(!p.gjy()&&!n.aTo(r.a,"power")){m.push(new A.Hd(n.Q++,r.a,"power",B.cOy[u.aB(3)],15))
D.d.ck(j,0,r.b+" is calling for help: no power.")
if(j.length>12)j.pop()}t=r.d
o=t>=0?d.d[t]:p
t=o.c
if((t==="bathroom"||t==="kitchen")&&!o.gl3()&&!n.aTo(r.a,"leak")&&m.length<4){m.push(new A.Hd(n.Q++,r.a,"leak",B.cWu[u.aB(3)],15))
D.d.ck(j,0,r.b+" is calling for help: a leak.")
if(j.length>12)j.pop()}}},
cCk(d){var w,v,u,t,s,r,q=this
if(q.d.length>=3||q.gFF().length===0)return
w=q.b
v=q.gFF()[w.aB(q.gFF().length)]
u=d.d
u===$&&C.c()
t=v.a
s=u[t.c]
t=t.d
r=t>=0?u[t]:s
u=r.c
if((u==="bathroom"||u==="kitchen")&&r.gl3()&&w.h9()){r.ch=!0
r.cx=null}else if(s.gjy()){s.ay=!0
s.CW=null
s.db=!1
s.cy.a9(0)}else return
q.UX(d)},
bbD(d){var w,v,u,t=this
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
aIv(d){var w,v,u=this
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
b8a(d){var w,v,u,t
if(!d.f)return d.a.b+" has died."
if(d.r>=0)return d.a.b+" is already in hospital."
if(!d.e&&d.c>60)return d.a.b+" is not ill enough for the hospital."
w=this.e
v=D.d.bc(w,new A.bHk())
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
cSB(d){var w,v,u=this,t=u.e[d],s=t.a
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
b92(d){var w,v=this
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
bdN(d){var w=d.a.a
return(w===1||w===4||w===3)&&d.r<0&&!D.d.b7(this.d,new A.bHp(d))&&D.o.G(D.k.bu(this.as/40)+w,3)===0},
cIB(d,e){var w,v,u,t,s,r,q,p,o,n=this,m=C.a([],x.I),l=d.d
l===$&&C.c()
w=l[e]
v=new A.bHn(n,e)
l=w.c
if(l==="outside"){for(l=D.d.gae(n.gFF()),u=new C.fk(l,n.gcLL()),t=0;u.C();){s=l.gS(0)
r=(t&1)===1?40:0
m.push(v.$4$wander(s,-110+t*90,215+r,24));++t}return m}q=A.h6G(w)
for(u=D.d.gae(n.gFF()),s=new C.fk(u,new A.bHm(n,e));s.C();){r=u.gS(0)
A:{if("bedroom"===l){p=new C.y(-w.gfp(0)*0.18,w.gj7(0)*0.6)
break A}if("kitchen"===l){p=new C.y(-w.gfp(0)*0.15,56)
break A}p=new C.y(-w.gfp(0)*0.25,40)
break A}o=D.d.gal(q.aGT(p,p))
m.push(v.$3(r,o.a,o.b))}return m},
cSl(a2){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=l.r,j=l.w,i=l.x,h=l.y,g=l.z,f=l.as,e=l.Q,d=x.ez,a0=C.a([],d),a1=l.c
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
for(r=a2.gqq(),q=r.length,t=0;t<r.length;r.length===q||(0,C.L)(r),++t){n=r[t]
u.n(0,""+n.a,n.gjy())}w=C.T(v,w)
for(r=D.d.gae(a2.gqq()),q=new C.fk(r,new A.bHr());q.C();){m=r.gS(0)
w.n(0,""+m.a,m.gl3())}return C.F(["v",1,"seed",l.a,"points",k,"food",j,"medicine",i,"served",h,"saved",g,"clock",f,"nextCall",e,"res",a0,"beds",a1,"calls",d,"wired",u,"plumbed",w],v,x.C)},
Gs(d,e){return this.bkG(0,e)},
bkG(d,e){var w=0,v=C.j(x.H),u=1,t=[],s=this,r,q,p,o
var $async$Gs=C.e(function(f,g){if(f===1){t.push(g)
w=u}for(;;)switch(w){case 0:u=3
w=6
return C.b(C.az(),$async$Gs)
case 6:r=g
q=C.dU(s.cSl(e),x.N,x.C)
J.aF(q,"at",Date.now())
w=7
return C.b(r.au("String","ngmy_community_v1",D.R.ao(q,null)),$async$Gs)
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
return C.i($async$Gs,v)}}
A.U_.prototype={
U(){return new A.bhQ()}}
A.bhQ.prototype={
a_(){this.a1()
this.YH()},
YH(){return this.bYG()},
bYG(){var w=0,v=C.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$YH=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:m={}
w=3
return C.b(A.bHq(),$async$YH)
case 3:l=e
if(t.c==null){w=1
break}m.a=null
if(l!=null){s=J.a5(l)
r=C.aJ(s.h(l,"seed"))
q=r==null?null:D.k.N(r)
if(q==null)q=1
r=$.Hf
if((r==null?null:r.b)===q){r.toString
t.e=r}else{r=A.bPB(q)
t.e=$.Hf=r
A.hpt(r,l)}m.a=A.hpu(l)
r=Date.now()
s=C.aJ(s.h(l,"at"))
s=s==null?null:D.k.N(s)
p=D.k.D((r-(s==null?Date.now():s))/1000*0.15,0,90)
while(p>0){o=p>5?5:p
s=m.a
r=t.e
r===$&&C.c()
s.b8b(0,o,r)
p-=o}}else{s=$.Hf
if(s==null)s=$.Hf=A.bPB(D.o.G(Date.now(),1e5))
t.e=s
s=s.b
n=A.fZU(s,s)
m.a=n
n.UX(t.e)}$.fMx=m.a
t.m(new A.dKc(m,t))
t.f=C.dA(D.h4,new A.dKd(t))
case 1:return C.h(u,v)}})
return C.i($async$YH,v)},
c2T(){var w,v,u,t=this,s=t.d
if(s==null||t.c==null)return
w=s.f
v=w.length===0?"":D.d.gK(w)
u=t.e
u===$&&C.c()
s.b8b(0,1,u)
if(w.length!==0&&D.d.gK(w)!==v)t.Ih(D.d.gK(w))
if(++t.y%8===0)s.Gs(0,t.e)
t.m(new A.dKp())},
q(){var w,v=this,u=v.f
if(u!=null)u.a8(0)
u=v.x
if(u!=null)u.a8(0)
u=v.d
if(u!=null){w=v.e
w===$&&C.c()
u.Gs(0,w)}v.a2()},
Ih(d){var w=this,v=w.x
if(v!=null)v.a8(0)
w.m(new A.dKj(w,d))
w.x=C.cM(D.ts,new A.dKk(w))},
aaj(d){return this.bPo(d)},
bPo(d){var w=0,v=C.j(x.H),u,t=this,s,r,q
var $async$aaj=C.e(function(e,f){if(e===1)return C.f(f,v)
for(;;)switch(w){case 0:q=B.ON[d.b]
if(d.c==="power")s=q.c
else{r=q.d
s=r>=0?r:q.c}r=t.e
r===$&&C.c()
r.e=s
r=t.c
r.toString
w=3
return C.b(C.a6(r,!1).c6(C.e7(new A.dK8(),!1,null,x.H)),$async$aaj)
case 3:if(t.c==null){w=1
break}r=t.d
if(r!=null)r.UX(t.e)
r=t.d
if(r!=null)r.Gs(0,t.e)
t.m(new A.dK9())
case 1:return C.h(u,v)}})
return C.i($async$aaj,v)},
aio(d){return this.cA0(d)},
cA0(d){var w=0,v=C.j(x.H),u,t=this,s
var $async$aio=C.e(function(e,f){if(e===1)return C.f(f,v)
for(;;)switch(w){case 0:s=t.e
s===$&&C.c()
s.e=d.a.c
s=t.c
s.toString
w=3
return C.b(C.a6(s,!1).c6(C.e7(new A.dKs(),!1,null,x.H)),$async$aio)
case 3:if(t.c==null){w=1
break}s=t.d
if(s!=null)s.UX(t.e)
t.m(new A.dKt())
case 1:return C.h(u,v)}})
return C.i($async$aio,v)},
YI(d,e){var w=null,v=e.j(0.18),u=C.m(14),t=C.I(e.j(0.7),D.q,1)
return C.p(w,C.d(d,w,w,w,w,w,w,C.l(w,w,e,w,w,w,w,w,w,w,w,12.5,w,w,D.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),D.f,w,w,new C.o(v,w,t,u,w,w,D.n),w,w,w,w,A5.ag3,w,w,w)},
Vp(d,e,f){var w=null
return new C.C(D.n2,C.A(C.a([new C.a7(62,w,C.d(d,w,w,w,w,w,w,Q.a6U,w,w,w),w),C.D(C.bw(C.m(6),C.lY(D.bF,w,w,8,w,D.k.D(e/100,0,1),new C.lR(f,x.W)),D.aq),1)],x.p),D.m,w,D.e,D.j,0,w,w),w)},
OP(d,e,f){var w=null,v=e==null,u=v?D.dp:f.j(0.22),t=C.m(12),s=C.I(v?D.b2:f,D.q,1)
return C.aE(w,C.p(w,C.d(d,w,w,w,w,w,w,C.l(w,w,v?D.c_:f,w,w,w,w,w,w,w,w,12.5,w,w,D.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),D.f,w,w,new C.o(u,w,s,t,w,w,D.n),w,w,w,w,D.nQ,w,w,w),D.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,e,w,w,w,w,w,w,!1,D.a8)},
acG(d,e){return this.OP(d,e,D.aH)},
OQ(d,e){var w=null,v=C.a([e.j(0.1),B.Ej],x.O),u=C.m(18)
return C.p(w,d,D.f,w,w,new C.o(w,w,C.I(e.j(0.5),D.q,1),u,w,new C.a8(D.b0,D.b5,D.x,v,w,w),D.n),w,w,w,D.dc,D.bk,w,w,w)},
c2R(d){return this.OQ(d,D.b2)},
aX5(d,e,f){var w,v=null,u=this.r===d,t=u?D.aH.j(0.22):D.c.j(0.06),s=C.m(14),r=u?D.aH:D.b2
r=C.I(r,D.q,u?2:1)
w=f>0?e+" ("+f+")":e
return C.D(C.aE(v,C.p(v,C.av(C.d(w,v,v,v,v,v,v,C.l(v,v,u?D.aH:D.ad,v,v,v,v,v,v,v,v,12.5,v,v,D.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v,v,v),D.f,v,v,new C.o(t,v,r,s,v,v,D.n),v,v,v,D.je,D.jx,v,v,v),D.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new A.dKr(this,d),v,v,v,v,v,v,!1,D.a8),1)},
avv(d,e){return this.aX5(d,e,0)},
bCA(d){var w,v,u,t,s,r,q,p,o,n=this,m=null,l=d.d
if(l.length===0)return new C.C(D.ew,C.v(B.d3N,D.m,m,D.e,D.j,0,D.p),m)
w=x.p
v=C.a([],w)
for(u=l.length,t=0;t<l.length;l.length===u||(0,C.L)(l),++t){s=l[t]
r=s.c==="power"
q=r?D.cn:D.cs
p=B.ON[s.b]
o=r?"\u26a1 Power":"\ud83d\udeb0 Leak"
r=r?D.cn:D.cs
v.push(n.OQ(C.v(C.a([new C.cm(D.aO,D.e,D.j,D.m,m,D.p,m,0,C.a([new A.abv(p.e,44,m),D.av,new C.bD(1,D.bi,new C.x(p.b,m,D.i3,m,m,m,m,m,m,m,m,m),m),n.YI(o+"  +"+s.e,r)],w),m),D.P,new C.x('"'+s.d+'"',m,B.f_O,m,m,m,m,m,m,m,m,m),D.S,new C.bH(D.a7,m,m,n.acG("\ud83d\udd27 Go and fix it",new A.dK7(n,s)),m)],w),D.F,m,D.e,D.j,0,D.p),q))}return C.v(v,D.m,m,D.e,D.j,0,D.p)},
c2S(d){var w,v,u,t,s,r,q,p,o,n=this,m=null,l=x.p,k=C.a([],l),j=d.c
j===$&&C.c()
w=j.length
v=0
for(;v<j.length;j.length===w||(0,C.L)(j),++v){u=j[v]
t=u.f
if(!t)s=D.b2
else s=u.gTf()==="fine"?D.b8:D.cj
t=t?1:0.5
r=u.a
q=u.gaBx(0)
p=u.gTf()
o=u.gTf()==="fine"?D.es:D.f3
r=C.a([new C.cm(D.aO,D.e,D.j,D.m,m,D.p,m,0,C.a([new A.abv(r.e,50,m),D.av,new C.bD(1,D.bi,C.v(C.a([new C.x(r.b+"  "+q,m,D.i3,m,m,m,m,m,m,m,m,m),new C.x(r.f,m,B.eUY,m,m,m,m,m,m,m,m,m),new C.x("Now: "+p,m,new C.G(!0,o,m,m,m,m,12.5,D.H,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m,m,m,m,m,m,m,m,m)],l),D.F,m,D.e,D.j,0,D.p),m)],l),m),D.P,n.Vp("Food",100-u.b,D.ct),n.Vp("Health",u.c,D.b8),n.Vp("Home",u.d,D.cs)],l)
if(u.f){q=n.acG("\ud83c\udf5e Feed",new A.dKe(n,d,u))
p=n.OP("\ud83d\udc8a Medicine",u.e?new A.dKf(n,d,u):m,D.by)
D.d.v(r,C.a([D.an,new C.BQ(D.bB,8,8,D.bs,C.a([q,p,n.OP("\ud83c\udfe5 Hospital",u.r>=0?m:new A.dKg(n,d,u),D.cj),n.OP("\ud83c\udfe0 Visit",new A.dKh(n,u),D.b1)],l),m)],l))}k.push(n.OQ(new C.kA(t,C.v(r,D.F,m,D.e,D.j,0,D.p),m),s))}return C.v(k,D.m,m,D.e,D.j,0,D.p)},
bVO(d){var w,v,u,t,s=null,r=x.p,q=C.a([B.e3v],r)
for(w=d.e,v=0;v<w.length;++v){u=w[v].a<0
t=u?D.b2:D.cj
q.push(this.OQ(u?new C.cm(D.aO,D.e,D.j,D.m,s,D.p,s,0,C.a([B.fnR,D.av,new C.x("Bed "+(v+1)+": empty",s,B.eUK,s,s,s,s,s,s,s,s,s)],r),s):new C.fh(new A.dKb(this,d,v),s),t))}return C.v(q,D.m,s,D.e,D.j,0,D.p)},
cql(d){var w=this,v=null,u=x.p,t=w.OQ(C.A(C.a([B.fa7,D.av,B.bvl,w.acG("Buy",new A.dKm(w,d))],u),D.m,v,D.e,D.j,0,v,v),D.ct),s=w.OQ(C.A(C.a([B.fuy,D.av,B.bvz,w.OP("Buy",new A.dKn(w,d),D.by)],u),D.m,v,D.e,D.j,0,v,v),D.by),r=C.a([B.foR,D.an,C.d("Calls answered: "+d.y+"\nPatients sent home better: "+d.z+"\nPeople lost: "+d.gcGR(),v,v,v,v,v,v,B.aP5,v,v,v)],u)
if(d.gFF().length===0)D.d.v(r,C.a([D.S,w.acG("Start a new community",new A.dKo(w))],u))
return C.v(C.a([t,s,w.c2R(C.v(r,D.F,v,D.e,D.j,0,D.p))],u),D.m,v,D.e,D.j,0,D.p)},
B(d){var w,v,u,t,s,r,q=this,p=null,o=q.d
if(o==null)w=D.lz
else{w=x.p
v=C.A(C.a([C.aH(p,p,p,p,M.nd,p,p,p,new A.dKu(d),p,p,p,p,p,p),B.bv3,q.YI("\u2b50 "+o.r,D.aH)],w),D.m,p,D.e,D.j,0,p,p)
u=q.YI("\ud83c\udf5e "+o.w,D.ct)
t=q.YI("\ud83d\udc8a "+o.x,D.by)
s=o.e
s=C.A(C.a([u,D.ab,t,D.ab,q.YI("\ud83c\udfe5 "+new C.a2(s,new A.dKv(),C.U(s).k("a2<1>")).gM(0)+"/"+s.length,D.cj)],w),D.m,p,D.bb,D.j,0,p,p)
t=C.A(C.a([q.aX5("calls","\ud83d\udcde Calls",o.d.length),q.avv("people","\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc67 People"),q.avv("hospital","\ud83c\udfe5 Hospital"),q.avv("shop","\ud83d\uded2 Shop")],w),D.m,p,D.e,D.j,0,p,p)
r=q.r
A:{if("people"===r){u=q.c2S(o)
break A}if("hospital"===r){u=q.bVO(o)
break A}if("shop"===r){u=q.cql(o)
break A}u=q.bCA(o)
break A}w=C.a([new C.C(B.btz,v,p),new C.C(D.AI,s,p),new C.C(B.buq,t,p),D.P,C.D(C.cB(C.a([u],w),p,D.Ly,p,p,D.ah,!1),1)],w)
if(q.w!=null){v=D.e9.j(0.96)
u=C.m(14)
t=C.I(D.b8,D.q,1)
s=q.w
s.toString
w.push(C.p(p,C.d(s,p,p,p,p,p,p,B.eX7,p,p,p),D.f,p,p,new C.o(v,p,t,u,p,p,D.n),p,p,p,F.ag5,D.bk,p,p,1/0))}w=C.v(w,D.m,p,D.e,D.j,0,D.p)}return C.c8(p,D.bX,C.bn(!0,w,!0,!1,D.af,!0,!0),p,!1,!1,p,p)}}
A.abv.prototype={
B(d){var w=null,v=this.d
return new C.a7(v,v,C.b3(w,w,w,new A.bcK(this.c,w),D.au),w)},
gY(d){return this.d}}
A.bcK.prototype={
a5(d,e){var w,v,u,t,s=e.a,r=s/2,q=$.X(),p=C.M()
p.r=D.dp.gp(0)
d.ah(new C.u(r,r),r,p)
p=d.a
J.bz(p.save())
q=new C.aP(q.r,D.ap,null,null,C.a([],x.v))
r=0+s
q.E(new C.ke(new C.aa(0,0,r,r)))
d.qf(0,q)
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
t.r=D.pt.gp(0)
d.ah(new C.u(s*0.42,r),q,t)
t=C.M()
t.r=D.pt.gp(0)
d.ah(new C.u(s*0.58,r),q,t)
t=s*0.4
q=C.M()
q.b=D.ae
q.c=1.4
q.r=D.er.gp(0)
d.f4(new C.aa(t,w,t+s*0.2,w+s*0.12),0.2,2.7,!1,q)
p.restore()},
ar(d){return!1}}
A.mi.prototype={}
A.XI.prototype={}
A.zM.prototype={}
A.a3D.prototype={}
A.BO.prototype={
gjb(){return this.a==="ok"}}
A.a44.prototype={}
A.hk.prototype={}
A.Dm.prototype={}
A.pv.prototype={}
A.b6N.prototype={}
A.qc.prototype={}
A.aTP.prototype={
gBd(){var w=this.c
return w.c>=2&&A.afv(A.Ag(this.a),w).a==="ok"},
gdc(d){return this.c}}
A.a47.prototype={
gyA(){var w,v,u=this.id,t=u==="ptrap"
if(t||u==="faucet"){w=this.k2
if(w==null)return!1
if(t)if(w.a.a===3){u=w.b
u=new C.bc(u,C.a3(u).k("bc<2>")).da(0,new A.bP0())&&w.c}else u=!1
else u=A.fo1(w)&&w.f
return u}v=this.k1
return v!=null&&v.c>=2&&A.afv(A.Ag(u),v).a==="ok"},
ga4F(){var w=this.id
if(w.length===0)w=this.gjy()
else w=w!=="fan"||this.gyA()
return w},
gTi(){var w=this.id
if(w.length===0)w=this.gjy()
else w=w!=="switch"||this.gyA()
return w},
gaFn(){var w=this.id
if(w.length===0)w=this.gjy()
else w=!(w==="outlet"||w==="gfci")||this.gyA()
return w},
gfp(d){var w,v=this.c
A:{if("bathroom"===v){w=110
break A}if("kitchen"===v){w=140
break A}if("living"===v){w=180
break A}if("hall"===v){w=300
break A}if("outside"===v){w=1200
break A}w=130
break A}return w},
gj7(d){var w,v=this.c
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
w=w==null?null:w.gaCW()
if(w==null)w=!v.ay}}else w=!0
return w},
gl3(){var w=this,v=w.c
if(v==="bathroom"||v==="kitchen"){v=w.id
if(v.length!==0)v=!(v==="ptrap"||v==="faucet")||w.gyA()
else{v=w.cx
v=v==null?null:v.gBd()
if(v==null)v=!w.ch}}else v=!0
return v},
SP(d){var w,v,u,t
for(w=this.x,v=w.length,u=0;u<v;++u){t=w[u]
if(t.a===d)return t}return null},
ey(d,e,f,g){var w=this,v=w.y++,u=f==null?0:f,t=new A.a44(v,e,u,g==null?w.gj7(0)*0.6:g)
w.x.push(t)
w.aBW(0,t)
return t},
L(d,e){return this.ey(0,e,null,null)},
aBW(d,e){var w,v,u,t=e.b,s=B.pX.h(0,t)
s.toString
w=(e.e&1)===1
v=w?s.d:s.c
u=w?s.c:s.d
s=v/2
e.c=D.k.D(e.c,-this.gfp(0)/2+s+1,this.gfp(0)/2-s-1)
s=u/2
e.d=D.k.D(e.d,s+1,this.gj7(0)-s-1)
if(D.d.t(B.awT,t)){e.c=D.k.V(e.c/40)*40
e.d=D.k.V(e.d/40)*40}}}
A.aTU.prototype={
bvB(d){var w,v,u
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
this.ast(u)
u.fr="bangtv"
u.fy=!0
u.go=Math.max(0,D.d.bc(E.jZ,new A.bPC()))
this.d=C.a([u],x.A)},
cMD(){var w,v,u,t,s,r
for(w=this.gqq(),v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u){t=w[u]
t.cx=t.CW=null
s=t.ay=!0
r=t.c
t.ch=r!=="bathroom"?r==="kitchen":s
t.db=!1
t.cy.a9(0)
D.d.a9(t.dy)}},
c2U(){var w,v,u,t,s,r,q,p=this,o="back",n="bedroom",m="bathroom",l=new C.eJ()
l.dB(p.b)
w=new A.bPD()
v=x.D
u=C.a([],v)
for(t=0;t<10;++t)u.push(new A.qc(o,-126+t*28,B.bVP[t]))
s=C.a([A.yA(0,"Bedroom 1",n,0,0,2,2,C.a([w.$1(-48)],v)),A.yA(1,"Bedroom 2",n,2,0,2,2,C.a([w.$1(-48)],v)),A.yA(2,"Bathroom 1",m,4,0,1,2,C.a([B.Zd],v)),A.yA(3,"Bedroom 3",n,5,0,2,2,C.a([w.$1(-48)],v)),A.yA(4,"Bathroom 2",m,7,0,2,2,C.a([B.Zd],v)),A.yA(5,"Hall","hall",0,2,9,1,u),A.yA(6,"Bedroom 4",n,0,3,2,2,C.a([w.$1(-48)],v)),A.yA(7,"Bedroom 5",n,2,3,2,2,C.a([w.$1(-48)],v)),A.yA(8,"Bathroom 3",m,4,3,1,2,C.a([B.Zd],v)),A.yA(9,"Kitchen","kitchen",5,3,2,2,C.a([new A.qc(o,-26,5),B.byh],v)),A.yA(10,"Living room","living",7,3,2,2,C.a([new A.qc(o,-70,5),B.byg,B.byf],v)),A.yA(11,"Garden","outside",0,5,9,1,C.a([B.bye],v))],x.A)
p.d=s
for(r=0;r<12;++r){q=s[r]
v=q.c
if(v==="outside"){p.ast(q)
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
p.ast(q)}v=p.d
v[3].ay=!0
v[2].ch=!0},
ast(d){var w,v,u="rug",t="plant",s="lamppost",r="fence",q=d.gfp(0)/2
switch(d.c){case"bedroom":d.ey(0,u,0,d.gj7(0)*0.55)
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
d.ey(0,t,d.gfp(0)/2-12,d.gj7(0)-12)
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
gqq(){var w,v,u,t=C.a([],x.A),s=this.d
s===$&&C.c()
w=s.length
v=0
for(;v<s.length;s.length===w||(0,C.L)(s),++v){u=s[v]
if(u.c!=="outside")t.push(u)}return t},
gcT6(){var w=this.gqq()
return new C.a2(w,new A.bPH(),C.U(w).k("a2<1>")).gM(0)},
gcPX(){var w=this.d
w===$&&C.c()
return new C.a2(w,new A.bPG(),C.U(w).k("a2<1>")).gM(0)},
gcPW(){var w=this.d
w===$&&C.c()
return new C.a2(w,new A.bPF(),C.U(w).k("a2<1>")).gM(0)},
gcIM(){var w=this.gqq()
return new C.a2(w,new A.bPE(),C.U(w).k("a2<1>")).gM(0)}}
A.N3.prototype={
U(){var w=new C.BF()
$.CB()
w.j1(0)
return new A.aCr(w,B.avZ,C.aX(x.N),new C.cr(null,x.eF))}}
A.aCr.prototype={
gaju(){var w,v,u=$.fMx
if(u!=null){w=u.a
v=this.d
v===$&&C.c()
v=w===v.b
w=v}else w=!1
return w?u:null},
b0U(){var w,v,u=this.gaju()
if(u==null)u=null
else{w=this.d
w===$&&C.c()
v=w.d
v===$&&C.c()
w=u.cIB(w,v[w.e].a)
u=w}this.fr=u==null?B.avZ:u},
gbfy(){var w=this.d
w===$&&C.c()
w=w.gqq()
return new C.a2(w,new A.e2h(),C.U(w).k("a2<1>")).gM(0)},
a_(){var w,v,u,t,s=this
s.a1()
w=s.a.r
if(w.length!==0)w=s.d=A.hsc(w)
else{w=$.Hf==null
if(w){w=D.o.G(Date.now(),1e5)
$.Hf=A.bPB(w)}w=$.Hf
w.toString
w=s.d=w}v=s.a
w.c=v.d||w.c
u=new A.AC(-0.05,0.1,120,B.fyp,$.aw())
u.f=560
s.e=u
if(v.f.length!==0){w=w.gqq()
t=new C.a2(w,new A.e2e(s),C.U(w).k("a2<1>"))
if(!t.gam(0)){w=s.d
w===$&&C.c()
w.e=t.gK(0).a}}A.aTG($.bB2)
s.b0U()
w=s.d
w===$&&C.c()
v=w.d
v===$&&C.c()
s.f=A.hev(v[w.e],!1,"look",s.gbfy(),s.fr,0)
s.avw(!0)
s.fx=C.dA(D.fG,new A.e2f(s))
$.aU.x1$.push(new A.e2g(s))},
q(){var w=this,v=w.p1
if(v!=null)v.a8(0)
v=w.ch
if(v!=null)v.a8(0)
v=w.dx
if(v!=null)v.a8(0)
v=w.fx
if(v!=null)v.a8(0)
w.a2()},
bYb(){var w,v=this.d
v===$&&C.c()
w=v.a
A:{if("switch"===w){v="The ceiling light is already in. Tap the red switch on the wall and wire it. Then flip it to see the light work."
break A}if("outlet"===w){v="Tap the red outlet on the wall and wire it. Then plug in a lamp or a TV to test it."
break A}if("gfci"===w){v="Tap the red GFCI outlet and wire it. Then plug in a hair dryer to test it."
break A}if("fan"===w){v="Tap the ceiling fan and wire it. Then flip the wall switch and watch it spin."
break A}if("ptrap"===w){v="The sink has no drain yet. Tap the sink and build the drain under it."
break A}v="The faucet is not connected yet. Tap the sink and connect the hoses."
break A}return v},
avw(d){var w,v,u,t,s,r,q=this,p=q.d
p===$&&C.c()
w=p.d
w===$&&C.c()
v=w[p.e]
u=-0.05
if(q.z){t=new A.E(0,40,v.gj7(0)*0.5)
s=Math.max(v.gfp(0),v.gj7(0))*0.6
p=q.e
p===$&&C.c()
p.e=20
p.f=260
p.r=-1.2
p.w=1.2
p.Gy(!0)
r=0.12}else if(v.c==="outside"){p=q.e
p===$&&C.c()
p.e=30
p.f=1100
p.r=0.03
p.w=1.35
p.Gy(!0)
t=B.fyn
s=540
r=0.35
u=-0.25}else if(q.x){t=new A.E(0,40,v.gj7(0)*0.3)
s=Math.max(v.gfp(0)*0.8,v.gj7(0)*0.9)+10
p=q.e
p===$&&C.c()
p.e=6
p.f=s*1.6
p.r=0.03
p.w=1.35
p.Gy(!0)
r=0.1}else{t=new A.E(0,30,v.gj7(0)*0.45)
s=(v.gfp(0)*1.2>v.gj7(0)*1.4?v.gfp(0)*1.2:v.gj7(0)*1.4)+30
p=q.e
p===$&&C.c()
p.e=6
p.f=560
p.r=0.1
p.w=1.35
p.Gy(!0)
r=0.5
u=-0.12}p=q.e
if(d){p===$&&C.c()
p.d=t
p.c=s
p.a=u
p.b=r}else{p===$&&C.c()
p.lU(s,r,t,u)}},
OR(){return this.avw(!1)},
bJK(d,e){var w,v,u,t,s,r,q,p=this,o=p.e
o===$&&C.c()
w=o.cIU(d,e)
if(w==null)return
o=p.d
o===$&&C.c()
v=o.d
v===$&&C.c()
u=v[o.e]
if(p.z){t=D.k.D(w.a,-u.gfp(0)/2+10,u.gfp(0)/2-10)
s=D.k.D(w.c,10,u.gj7(0)-10)
p.e.aIw(new A.E(t,48,s))}else{o=u.c==="outside"
if(o&&p.k4&&p.ok!=null){o=p.ok
o.toString
o.r=new C.y(D.k.D(w.a,-u.gfp(0)/2+12,u.gfp(0)/2-12),D.k.D(w.c,-290,u.gj7(0)-12))}else{v=p.e
r=w.a
q=w.c
if(o)v.zd(Math.max(60,v.c*0.55),new A.E(r,30,q))
else{o=D.k.D(r,-u.gfp(0)/2,u.gfp(0)/2)
q=D.k.D(q,0,u.gj7(0))
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
t=s.gbfy()
s.f=A.hev(w,s.z,v,t,s.fr,u)},
OT(d,e){var w=this,v=w.ch
if(v!=null)v.a8(0)
w.m(new A.e1E(w,d,e))
w.ch=C.cM(D.ed,new A.e1F(w))},
ka(d){return this.OT(d,!0)},
QO(d){this.m(new A.e1G(this,d))
A.m7(660,50,0.25,"tri")},
avx(d,e){var w,v=this,u=v.d
u===$&&C.c()
if(d!==u.e){u=u.d
u===$&&C.c()
u=d>=u.length}else u=!0
if(u)return
if(v.k4&&d!==11)v.azx()
if(!e&&v.cx!=null)v.a1p()
v.m(new A.e10(v,d))
u=v.d
w=u.d
w===$&&C.c()
u=w[u.e]
if(u.c==="outside")v.ok=A.h83(u,0,24)
v.OR()
A.m7(520,60,0.25,"tri")},
OS(d){return this.avx(d,!1)},
aUX(d){var w,v,u,t=this
if(d===700){w=t.d
w===$&&C.c()
v=w.d
v===$&&C.c()
return v[w.e].gaFn()}if(d===701){w=t.d
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
return v[w.e].ga4F()}if(d>=800&&d<820){u=d-800
w=t.d
w===$&&C.c()
v=w.d
v===$&&C.c()
w=v[w.e].dy
return u<w.length&&w[u].gBd()}if(d===720){w=t.d
w===$&&C.c()
v=w.d
v===$&&C.c()
return v[w.e].gaFn()}if(d===721){w=t.d
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
return u<w.length&&w[u].gBd()}w=t.d
w===$&&C.c()
v=w.d
v===$&&C.c()
return v[w.e].gjy()},
b5I(){var w,v,u=this,t=u.d
t===$&&C.c()
w=t.d
w===$&&C.c()
v=w[t.e].dx==="fan"
u.m(new A.e1O(u))
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
c2Y(d){var w,v,u,t,s,r,q,p,o,n,m=this
if(d===0)return
if(d>=900&&d<920){m.clM(d-900)
return}if(d>=100&&d<200){if(m.r!=="furniture")return
m.m(new A.e1b(m,d))
w=m.d
w===$&&C.c()
v=w.d
v===$&&C.c()
u=v[w.e].SP(m.Q)
if(u!=null)m.ka(B.pX.h(0,u.b).a+": move it with the arrows.")
return}if(d===300||d===301||d===302){if(m.r!=="walls")return
m.m(new A.e1c(m,d))
m.ka("Wall picked. Choose a paint colour.")
return}if(d>=600&&d<620){t=d-600
w=m.d
w===$&&C.c()
v=w.d
v===$&&C.c()
w=v[w.e].w
if(t>=w.length)return
if(m.r==="doors"){m.m(new A.e1d(m,t))
w=m.d
v=w.d
v===$&&C.c()
A.m7(v[w.e].at.t(0,t)?700:450,70,0.25,"tri")
return}w=w[t]
m.m(new A.e1e(m,t))
A.m7(700,70,0.25,"tri")
C.bN(D.n1,new A.e1f(m,t,w.c),x.c)
return}w=d===700
v=!w
s=!0
if(v)if(d!==701){if(d!==702)if(d!==703)if(!(d>=800&&d<820))r=d>=720&&d<728
else r=s
else r=s
else r=s
s=r}if(m.w&&s){q=m.aUX(d)
A.m7(q?1400:500,160,0.25,"tri")
w=q?"The tester glows and beeps: LIVE, 120 volts. Never touch a live wire. Switch the breaker off first.":"The tester stays dark: no power here. It still needs wiring."
m.OT(w,!q)
return}if(!v||d===701){if(m.aUX(d))m.axf(w?0:1)
else m.aRl()
return}if(d>=800&&d<820){t=d-800
w=m.d
w===$&&C.c()
v=w.d
v===$&&C.c()
w=v[w.e].dy
if(t>=w.length)return
p=w[t]
if(!p.gBd())m.aiv(t)
else if(p.a==="switch")m.b5I()
else m.axf(2+t)
return}if(d===702||d===703){w=m.d
w===$&&C.c()
v=w.d
v===$&&C.c()
if(v[w.e].gTi()){w=m.d
v=w.d
v===$&&C.c()
w=!v[w.e].ga4F()}else w=!0
if(w)m.aRl()
else m.b5I()
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
if(!w[r].fy){m.m(new A.e1g(m))
w=m.d
v=w.d
v===$&&C.c()
m.ka("The TV is on and playing "+E.jZ[v[w.e].go].a+".")}else{n=A.bzu(o)
w=m.c
w.toString
G.fK6(w,0,n.a,!0,D.v1,n.b)}return}if(d>=720&&d<728){w=m.d
w===$&&C.c()
v=w.d
v===$&&C.c()
r=d-720
o=v[w.e].cy.h(0,r)
if(o==null)return
n=A.bzu(o)
if(n.d>0||n.e){w=m.c
w.toString
G.fK6(w,0,n.a,!0,D.v1,n.b)}else m.axf(r)
return}if(d===710||d===711||d===712||d===713){w=m.d
w===$&&C.c()
v=w.d
v===$&&C.c()
if(!v[w.e].gl3())if(m.d.a.length!==0)m.DI()
else m.ZY()
else{w=m.f
w===$&&C.c()
t=w.b.h(0,d)
if(t!=null)m.ka(t.a+": "+t.b)}}},
clM(d){var w,v,u=this.gaju()
if(u!=null){w=u.c
w===$&&C.c()
w=d>=w.length}else w=!0
if(w)return C.f7(null,x.H)
w=u.c
w===$&&C.c()
v=w[d]
w=this.c
w.toString
return C.bX(E.mT,null,new A.e1C(this,v,u),w,!0,!0,!0,D.lm,!1,!1,x.H)},
axf(d){var w=this.c
w.toString
return C.bX(E.mT,null,new A.e1m(this,d),w,!0,!0,!1,D.lm,!1,!1,x.H)},
cy5(){var w=this.c
w.toString
return C.bX(E.mT,null,new A.e29(this),w,!0,!0,!0,D.lm,!1,!1,x.H)},
cxx(){var w=this.c
w.toString
return C.bX(E.mT,null,new A.e1X(this),w,!0,!0,!0,D.lm,!1,!1,x.H)},
ctk(d){var w,v,u,t=this,s=t.dx
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
s=new A.bPI(t.d,d,C.a([],x.fG))
s.c3p()
t.cx=s
t.cy=t.CW.gu2()/1000
t.x=!0
t.r="look"
t.w=!1
s=D.d.gK(t.cx.c)
t.go.a9(0)
t.id=!1
t.m(new A.e1J(t,s.a))
t.OR()
t.dx=C.dA(D.ja,new A.e1K(t))
t.m(new A.e1L())},
bJF(d,e){var w,v=d.w[e],u=v.a
A:{if("left"===u){w=new A.E(-d.gfp(0)/2,40,v.b+d.gj7(0)/2-40)
break A}if("right"===u){w=new A.E(d.gfp(0)/2,40,v.b+d.gj7(0)/2-40)
break A}w=new A.E(v.b,40,0)
break A}return w},
cxy(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=i.cx
if(h==null||i.c==null)return
w=i.CW.gu2()/1000-i.cy
v=h.d
v===$&&C.c()
if(w>=v){i.a1p()
i.ka("The tour is over. Press Tour to walk the house again.")
return}if(i.id)return
u=h.b8E(w)
v=i.d
v===$&&C.c()
t=v.e
if(u.a!==t){i.ahU(u)
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
if(D.a.a0(q,"ad")&&i.go.L(0,q)){s.go=D.o.G(s.go+1,8)
A.m7(1000,50,0.25,"tri")
p=!0}if(p)i.m(i.gA4())
m=Math.max(s.gfp(0)*0.95,s.gj7(0)*1.15)+20
t=t&&v<s.w.length
q=u.b
if(t){l=i.bJF(s,v)
k=D.dB.aw(0,D.k.D(u.as,0,1))
j=s.w[v].a
v=i.e
v===$&&C.c()
t=j==="back"?14:0
if(j==="left")n=0.55*k
else n=j==="right"?-0.55*k:-0.03
v.lU(m+(70-m)*k,0.2-0.07*k,new A.E(l.a*0.9+q*0.1,36,l.c+t),n)}else{v=i.e
v===$&&C.c()
v.lU(m,0.24,new A.E(q*0.7,30,u.c*0.6+8),-0.05-q/(s.gfp(0)/2)*0.2)}if(u.y!==i.dy)i.m(new A.e1Y(i,u))},
ahU(d){return this.cxw(d)},
cxw(d){var w=0,v=C.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j
var $async$ahU=C.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:l={}
r.id=!0
l.a=null
t=4
p=$.aU.ak$.x.h(0,r.k1)
p=p==null?null:p.gb8()
q=x.cU.a(p)
p=q
p=p==null?null:p.lS(0.6).cM(0,D.kg)
j=l
w=7
return C.b(x.fa.b(p)?p:C.dP(p,x.eT),$async$ahU)
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
r.avx(d.a,!0)
p=r.d
n=p.d
n===$&&C.c()
m=n[p.e]
p=d.at
if(p>=0&&p<m.w.length)m.ax.n(0,p,1.25)
r.m(new A.e1P(l,r))
l=r.e
l===$&&C.c()
l.d=new A.E(d.b,36,d.c+4)
l.c=70
l.a=-0.03
l.b=0.15
r.id=!1
case 1:return C.h(u,v)
case 2:return C.f(s.at(-1),v)}})
return C.i($async$ahU,v)},
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
t.m(new A.e1N(t))
t.OR()},
cgz(){var w,v,u,t=this,s=t.cx
if(s!=null)return s.b8E(t.CW.gu2()/1000-t.cy)
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
return new A.VV(u[v.e].a,w.b,w.c,w.d,w.e,!1,!1,!1,!1,"","",-1,0,-1,w.f)}return null},
cth(){var w,v=this,u=v.d
u===$&&C.c()
w=u.d
w===$&&C.c()
u=w[u.e]
if(u.c!=="outside")return
w=v.ok
u=w==null?v.ok=A.h83(u,0,24):w
u.w=A.fWN(u.a)
v.k4=!0
v.p4=Date.now()
u=v.p1
if(u!=null)u.a8(0)
v.p1=C.dA(D.Xi,new A.e1H(v))
v.m(new A.e1I())
v.ka("Hold the arrows to walk. Double tap a spot to go there. Walk up to the front door to go inside.")},
azx(){var w,v=this
v.k4=!1
v.p3=v.p2=0
w=v.p1
if(w!=null)w.a8(0)
v.p1=null
w=v.ok
if(w!=null)w.e=!1
v.m(new A.e1M())},
cA6(){var w,v,u,t,s,r,q=this,p=q.ok,o=!0
if(p!=null)if(q.c!=null){o=q.d
o===$&&C.c()
w=o.d
w===$&&C.c()
o=w[o.e].c!=="outside"}if(o)return
v=Date.now()
u=D.k.D((v-q.p4)/1000,0,0.1)
q.p4=v
p.w=A.fWN(p.a)
o=q.e
o===$&&C.c()
t=Math.sin(o.a)
s=Math.cos(q.e.a)
o=q.p3
w=q.p2
if(w!==0||o!==0){p.r=null
r=p.aJp(0,t*o+s*w,-s*o+t*w,u)}else r=p.cBw(0,u)
if(!r)p.e=!1
if(r){q.e.aIw(new A.E(p.b,30,p.c))
if(Math.abs(p.b)<24){o=p.c
o=o>-2&&o<14}else o=!1
if(o)if(!(Math.abs(p.d)>2.2)){o=p.r
o=o!=null&&o.b<4}else o=!0
else o=!1
if(o){q.azx()
q.OS(10)
q.ka("You are inside the living room. Use Go outside to come back out.")}}},
cc6(){var w,v,u=null
if(this.k4){w=this.d
w===$&&C.c()
v=w.d
v===$&&C.c()
w=v[w.e].c!=="outside"}else w=!0
if(w)return u
w=new A.e16(this)
v=x.p
return C.v(C.a([w.$3(D.tG,0,1),C.A(C.a([w.$3(D.oA,-1,0),B.eKX,w.$3(D.iS,1,0)],v),D.m,u,D.e,D.Q,0,u,u),w.$3(D.qU,0,-1)],v),D.m,u,D.e,D.Q,0,D.p)},
aRl(){var w=this.d
w===$&&C.c()
if(w.a.length!==0)this.DI()
else this.a_6()},
DI(){var w=0,v=C.j(x.H),u,t=this,s,r,q,p
var $async$DI=C.e(function(d,e){if(d===1)return C.f(e,v)
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
case 3:if(r.k2==null)r.k2=A.fQc()
p=t.c
p.toString
w=6
return C.b(C.a6(p,!1).c6(C.e7(new A.e12(r),!1,null,x.H)),$async$DI)
case 6:w=4
break
case 5:if(r.k1==null)r.k1=new A.XI(C.T(x.S,x.N))
p=t.c
p.toString
w=7
return C.b(C.a6(p,!1).c6(C.e7(new A.e13(r),!1,null,x.H)),$async$DI)
case 7:case 4:if(t.c==null){w=1
break}t.m(t.gA4())
if(r.gyA()){q=r.id
A:{if("switch"===q){p="Done! Tap the switch on the wall: the light comes on."
break A}if("fan"===q){p="Done! Tap the wall switch and the fan spins."
break A}if("outlet"===q||"gfci"===q){p="Done! Tap the outlet and plug something in."
break A}p="Done! The sink works."
break A}t.ka(p)}case 1:return C.h(u,v)}})
return C.i($async$DI,v)},
aiv(d){return this.cAt(d)},
cAt(d){var w=0,v=C.j(x.H),u,t=this,s,r,q
var $async$aiv=C.e(function(e,f){if(e===1)return C.f(f,v)
for(;;)switch(w){case 0:q=t.d
q===$&&C.c()
s=q.d
s===$&&C.c()
r=s[q.e].dy[d]
q=t.c
q.toString
w=3
return C.b(C.a6(q,!1).c6(C.e7(new A.e2a(r),!1,null,x.H)),$async$aiv)
case 3:if(t.c==null){w=1
break}t.m(t.gA4())
if(r.gBd())t.ka("Wired! "+(r.a==="switch"?"Tap it to turn the light on and off.":"Tap it to plug something in."))
case 1:return C.h(u,v)}})
return C.i($async$aiv,v)},
a_6(){var w=0,v=C.j(x.H),u,t=this,s,r,q,p
var $async$a_6=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:p=t.d
p===$&&C.c()
s=p.d
s===$&&C.c()
r=s[p.e]
if(r.c==="outside"){w=1
break}s=r.CW
if(s==null){q=A.fQB(A.i5s(r),r.b,!1,p.b*37+r.a)
q.aDu()
if(!r.ay)q.cDj()
r.CW=q
p=q}else p=s
p.b=t.d.c
p=t.c
p.toString
w=3
return C.b(C.a6(p,!1).c6(C.e7(new A.e15(r),!1,null,x.H)),$async$a_6)
case 3:if(t.c==null){w=1
break}t.m(t.gA4())
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
s=r.cx=A.fQb(!1,p.b*41+r.a,s)
p=s}else p=q
if(!r.ch&&!p.gaj_())r.cx.cDi()
r.cx.b=t.d.c
p=t.c
p.toString
w=3
return C.b(C.a6(p,!1).c6(C.e7(new A.e14(r),!1,null,x.H)),$async$ZY)
case 3:if(t.c==null){w=1
break}t.m(t.gA4())
if(r.gl3())t.ka(r.b+": the plumbing is finished and nothing leaks.")
case 1:return C.h(u,v)}})
return C.i($async$ZY,v)},
bxF(){var w=this.c
w.toString
return C.bX(E.mT,null,new A.e0k(this),w,!0,!0,!1,D.lm,!1,!1,x.H)},
bxi(d){var w,v,u,t,s,r,q,p,o=this,n=o.d
n===$&&C.c()
w=n.d
w===$&&C.c()
v=w[n.e]
n=v.c
if(n==="outside"||n==="hall"){o.OT("Add devices in a room, not in the hall or the garden.",!1)
return}n=v.dy
if(n.length>=4){o.OT("This room already has four added devices.",!1)
return}w=C.a([-v.gfp(0)/4,v.gfp(0)/4],x.n)
for(u=v.w,t=D.d.gae(u),s=new C.fk(t,new A.e0e());s.C();)w.push(t.gS(0).b)
for(u=D.d.gae(u),t=new C.fk(u,new A.e0f());t.C();)w.push(u.gS(0).b+24)
for(u=n.length,r=0;r<n.length;n.length===u||(0,C.L)(n),++r)w.push(n[r].b)
p=-v.gfp(0)/2+14
for(;;){if(!(p<=v.gfp(0)/2-14)){q=null
break}if(D.d.da(w,new A.e0g(p))){q=p
break}p+=6}if(q==null){o.OT("There is no free place left on the back wall.",!1)
return}o.m(new A.e0h(o,v,d,q))
o.ka("Added. It is red because it is not wired: tap it to wire it.")},
acH(d,e){var w,v,u=this,t=u.d
t===$&&C.c()
w=t.d
w===$&&C.c()
v=w[t.e].SP(u.Q)
if(v==null)return
u.m(new A.e11(u,v,D.d.t(B.awT,v.b),d,e))},
c31(){var w,v,u=this,t=u.d
t===$&&C.c()
w=t.d
w===$&&C.c()
v=w[t.e].SP(u.Q)
if(v==null)return
u.m(new A.e1Z(u,v))},
cjH(){var w,v,u=this,t=u.d
t===$&&C.c()
w=t.d
w===$&&C.c()
v=w[t.e].SP(u.Q)
if(v==null)return
u.m(new A.e1t(u,v))
u.ka(B.pX.h(0,v.b).a+": "+B.cK5[v.f]+".")},
c3_(d){var w,v,u=this,t=u.d
t===$&&C.c()
w=t.d
w===$&&C.c()
v=w[t.e].SP(u.Q)
if(v==null)return
u.m(new A.e1u(u,v))},
bxl(d){var w,v=this,u=v.d
u===$&&C.c()
w=u.d
w===$&&C.c()
v.m(new A.e0i(v,w[u.e].L(0,d)))
v.ka(B.pX.h(0,d).a+" added. Move it with the arrows.")},
Ij(d,e,f,g,h){var w=null,v=e?g.j(0.25):D.c.j(0.07),u=C.m(14),t=e?g:D.b2
t=C.I(t,D.q,e?2:1)
v=C.a([C.p(w,C.d(d,w,w,w,w,w,w,C.l(w,w,e?g:D.c,w,w,w,w,w,w,w,w,12.5,w,w,D.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),D.f,w,w,new C.o(v,w,t,u,w,w,D.n),w,w,w,w,A3.XD,w,w,w)],x.p)
if(h)v.push(C.ao(w,C.p(w,w,D.f,w,w,new C.o(D.ay,w,C.I(B.Ej,D.q,2),w,w,w,D.a6),w,11,w,w,w,w,w,11),w,w,w,-2,-3,w))
return new C.C(D.fx,C.aE(w,new C.an(D.W,w,D.aa,D.f,v,w),D.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,!1,D.a8),w)},
q2(d,e,f,g){return this.Ij(d,e,f,g,!1)},
Ii(d,e,f){return this.Ij(d,e,f,D.aH,!1)},
azM(d,e,f,g){var w=null,v=g==null,u=v?34:w,t=v?w:D.l7,s=C.m(10),r=e?D.c:D.b2
r=C.I(r,D.q,e?3:1)
if(v)v=w
else v=C.av(C.d(g,w,w,w,w,w,w,C.l(w,w,d.j6()>0.5?D.w:D.c,w,w,w,w,w,w,w,w,12,w,w,D.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w,w,w)
return new C.C(E.tt,C.aE(w,C.p(w,v,D.f,w,w,new C.o(d,w,r,s,w,w,D.n),w,34,w,w,t,w,w,u),D.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,!1,D.a8),w)},
cuv(d,e,f){return this.azM(d,e,f,null)},
GX(d,e){var w=null,v=D.c.j(0.1),u=C.m(10),t=C.I(D.b2,D.q,1)
return new C.C(D.fx,C.aE(w,C.p(w,C.W(d,D.c,w,w,w,20),D.f,w,w,new C.o(v,w,t,u,w,w,D.n),w,36,w,w,w,w,w,40),D.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,e,w,w,w,w,w,w,!1,D.a8),w)},
bFF(){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null
if(k.cx!=null){w=k.dy
return C.A(C.a([C.D(C.d("\ud83c\udfac "+(w.length===0?"Walking in":w),j,1,D.a2,j,j,j,B.eZN,j,j,j),1),k.q2("\u23f9 Stop the tour",!0,k.gctF(),D.cj)],x.p),D.m,j,D.e,D.j,0,j,j)}switch(k.r){case"furniture":w=k.d
w===$&&C.c()
v=w.d
v===$&&C.c()
u=v[w.e].SP(k.Q)
w=x.p
v=C.a([],w)
if(u!=null)v.push(new C.a7(j,40,C.cB(C.a([k.GX(D.oA,new A.e0Q(k)),k.GX(D.iS,new A.e0R(k)),k.GX(D.tG,new A.e0S(k)),k.GX(D.qU,new A.e0T(k)),k.GX(F.alk,k.gc30()),k.GX(D.n9,k.gcjG()),k.GX(D.e4,k.gc2Z(k))],w),j,j,j,j,D.aO,!1),j))
else v.push(B.aUH)
w=C.a([],w)
for(t=B.pX.gdK(B.pX),t=t.gae(t);t.C();){s=t.gS(t)
r=D.d.t(B.cQj,s.a)
q=k.d
p=q.d
p===$&&C.c()
if(r===(p[q.e].c==="outside")){r=s.b
w.push(k.q2(r.b+" "+r.a,!1,new A.e0U(k,s),D.b1))}}v.push(new C.a7(j,40,C.cB(w,j,j,j,j,D.aO,!1),j))
return C.v(v,D.m,j,D.e,D.Q,0,D.p)
case"walls":w=k.as
v=w<0
w=v?"All walls":"Wall "+(w+1)+": tap Look to reset"
v=C.a([k.Ii(w,v,new A.e0V(k))],x.p)
for(o=0;o<8;++o)v.push(k.azM(B.avB[o],!1,new A.e0W(k,o),B.dd4[o]))
return new C.a7(j,40,C.cB(v,j,j,j,j,D.aO,!1),j)
case"floor":w=C.a([],x.p)
for(o=0;o<7;++o){v=B.avo[o]
t=k.d
t===$&&C.c()
s=t.d
s===$&&C.c()
w.push(k.azM(v.b,s[t.e].Q===o,new A.e0X(k,o),v.a))}return new C.a7(j,40,C.cB(w,j,j,j,j,D.aO,!1),j)
case"ceiling":w=k.d
w===$&&C.c()
v=w.d
v===$&&C.c()
w=v[w.e].dx==="fan"?"\ud83c\udf00 Fan (tap for light)":"\ud83d\udca1 Light (tap for fan)"
w=C.a([k.q2(w,!1,new A.e0Y(k),D.b7)],x.p)
for(o=0;o<4;++o){v=B.auf[o]
t=k.d
s=t.d
s===$&&C.c()
w.push(k.cuv(v,s[t.e].as===o,new A.e0Z(k,o)))}return new C.a7(j,40,C.cB(w,j,j,j,j,D.aO,!1),j)
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
r=s.gjy()&&s.gl3()
w.push(k.Ij("\ud83d\udeaa "+s.b,!1,new A.e1_(k,l),D.b1,!r))}}return new C.a7(j,40,C.cB(w,j,j,j,j,D.aO,!1),j)}},
B(d){var w=this,v=null,u=C.a([C.bY(0,new C.et(w.bBE(d),w.k1),0,0,0)],x.p)
if(w.k2!=null)u.push(C.bY(0,C.e1(C.mx(new A.e2c(w),v,D.dB,D.i9,new C.cx(w.k3,x.ac),new A.e2d(w),new C.bo(1,0,x.e7),x.i),!0,v),0,0,0))
return new C.an(D.W,v,D.aa,D.r,u,v)},
bBE(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.d
h===$&&C.c()
w=h.d
w===$&&C.c()
v=w[h.e]
h=C.aI(d,i,x.l).w
w=j.d
if(w.a.length!==0)w=v.gyA()?"Done \u2713":"To do"
else w=""+w.gcIM()+"/"+j.d.gqq().length+" done"
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
n=j.cc6()
m=x.p
l=C.a([],m)
if(j.y&&j.d.a.length===0)l.push(new A.bgU(j.d,j.gc2V(),Math.min(138,h.a.a*0.36),i))
h=A.X4(n,r,new A.e0s(j),o,q,i,i,new A.e0t(),p,u,j.gbJJ(),new A.e0u(j),j.gc2X(),s,t.c==="outside",l,i)
u=j.x?"\ud83d\udd2d See the whole room":"\ud83c\udfe0 Be inside"
u=C.a([j.q2(u,!1,new A.e0D(j),D.b1)],m)
if(j.d.a.length===0){t=j.cx!=null
s=t?"\u23f9 Stop tour":"\ud83c\udfac Tour"
u.push(j.q2(s,t,new A.e0E(j),D.bV))}t=j.z
s=t?"\ud83d\udeb6 Stop looking round":"\ud83d\udd04 Look all round (360)"
u.push(j.q2(s,t,new A.e0F(j),D.ct))
u.push(j.q2("\ud83d\udcfa TV",!1,j.gcy4(),D.cs))
t=j.d
if(t.a.length===0){s=t.d
s===$&&C.c()
t=s[t.e].c!=="outside"?"\ud83c\udf33 Go outside":"\ud83c\udfe0 Go inside"
u.push(j.q2(t,!1,new A.e0G(j),D.b8))}t=j.d
s=t.d
s===$&&C.c()
if(s[t.e].c==="outside"){t=j.k4
s=t?"\u23f9 Stop walking":"\ud83d\udeb6 Walk about"
u.push(j.q2(s,t,t?j.gctE():j.gctg(),D.b8))}if(j.d.a.length===0)u.push(j.q2("\u2795 Add",!1,j.gbxE(),D.b8))
if(j.d.a.length===0){t=j.gaju()
t=t==null?i:t.d.length
if(t==null)t=0
u.push(j.Ij("\ud83c\udfd8 Community",!1,new A.e0H(j,d),D.bV,t>0))}u.push(j.q2("\ud83d\udd26 Tester",j.w,new A.e0I(j),D.ct))
if(j.d.a.length!==0)u.push(j.Ij("\ud83d\udd27 Do the lesson",!1,j.gc2W(),D.cn,!v.gyA()))
else{t=j.Ij("\u26a1 Wiring",!1,j.gcbO(),D.cn,!v.gjy())
s=v.c
s=(s==="bathroom"||s==="kitchen")&&!v.gl3()
D.d.v(u,C.a([t,j.Ij("\ud83d\udeb0 Plumbing",!1,j.gcbd(),D.cs,s),j.q2("\ud83d\uddfa Map",j.y,new A.e0J(j),D.by)],m))}u=C.cB(u,i,i,i,i,D.aO,!1)
t=j.Ii("\ud83d\udc41 Look",j.r==="look",new A.e0K(j))
s=j.Ii("\ud83d\udecb Furniture",j.r==="furniture",new A.e0v(j))
r=j.Ii("\ud83e\uddf1 Walls",j.r==="walls",new A.e0w(j))
q=j.Ii("\ud83d\udfeb Floor",j.r==="floor",new A.e0x(j))
p=j.Ii("\u2b1c Ceiling",j.r==="ceiling",new A.e0y(j))
o=j.Ii("\ud83d\udeaa Doors",j.r==="doors",new A.e0z(j))
n=j.q2("\ud83d\udcd8 Learn",!1,new A.e0A(d),D.by)
l=j.d.c
k=l?"\ud83d\udd25 Practice":"\ud83c\udf93 Learn mode"
return new A.AW(v.b,D.aH,h,C.v(C.a([new C.a7(i,40,u,i),D.at,new C.a7(i,40,C.cB(C.a([t,s,r,q,p,o,n,j.q2(k,l,new A.e0B(j),D.cj)],m),i,i,i,i,D.aO,!1),i),D.at,j.bFF()],m),D.F,i,D.e,D.Q,0,D.p),new A.e0C(j,d),w,i)},
chP(d){return C.bX(E.mT,null,new A.e1s(this),d,!0,!0,!0,D.lm,!1,!1,x.H)}}
A.bgU.prototype={
B(d){var w=null,v=D.k.D((this.e-10)/126,0.5,1),u=D.w.j(0.6),t=C.m(12),s=C.I(D.b2,D.q,1)
return C.p(w,new C.a7(126*v,84*v,C.aE(w,C.f3(D.A,C.b3(w,w,w,new A.bgi(this.c,w),B.eJL),D.f,D.wy),D.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new A.dmr(this,v),w,w,w,w,!1,D.a8),w),D.f,w,w,new C.o(u,w,s,t,w,w,D.n),w,w,w,w,D.lJ,w,w,w)}}
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
o=new C.aa(s,r,q,p)
n=t.a===f.e
if(t.gjy()&&t.gl3())m=D.bo
else m=!t.gjy()?D.ay:D.d6
l=C.bA(o,D.hA)
$.X()
k=new C.as(D.X,D.V,D.a_,D.a0,D.Z)
k.r=m.j(t.gjy()&&t.gl3()?0.35:0.5).gp(0)
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
break A}h=new C.kp(new C.ep(l,g,g,D.cO,g,g,g,g,g,g,B.eZ_),D.a5,D.ch,new C.jo(1),g,g,g,g,D.cd,g)
h.eP()
l=h.b
k=l.c
l=l.a.c
h.a5(d,new C.u(s+(q-s)/2-k/2,r+(p-r)/2-l.gbe(l)/2))}},
ar(d){return!0}}
A.bPL.prototype={}
A.Fg.prototype={}
A.ML.prototype={
U(){return new A.bhR()}}
A.bhR.prototype={
xn(d){var w=this.c
w.toString
return C.a6(w,!1).c6(C.e7(new A.dKw(d),!1,null,x.H))},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null
$.aqE="tech"
w=C.aH(k,k,k,k,M.nd,k,k,k,new A.dKz(d),k,k,k,k,k,k)
v=D.aH.j(0.16)
u=C.m(13)
t=x.p
u=C.A(C.a([w,C.p(k,B.b3s,D.f,k,k,new C.o(v,k,C.I(D.aH.j(0.6),D.q,1),u,k,k,D.n),k,40,k,k,k,k,k,40),D.av,B.bvg],t),D.m,k,D.e,D.j,0,k,k)
v=C.A(C.a([C.D(l.aX8("Learn mode",!l.d,D.b8,new A.dKA(l)),1),D.ab,C.D(l.aX8("Practice mode",l.d,D.cj,new A.dKB(l)),1)],t),D.m,k,D.e,D.j,0,k,k)
w=C.m(26)
s=C.I(D.aH,D.q,1.8)
r=x.V
q=C.a([new C.ac(0,D.G,D.aH.j(0.28),D.dk,26)],r)
q=C.aE(k,C.p(k,C.v(C.a([C.p(k,B.b3S,D.f,k,k,new C.o(D.aH.j(0.2),k,C.I(D.aH,D.q,2),k,C.a([new C.ac(0,D.G,D.aH.j(0.5),D.J,22)],r),k,D.a6),k,78,k,k,k,k,k,78),D.ac,B.fgu,D.at,B.fmX,D.aA,C.p(k,B.fgq,D.f,k,k,new C.o(D.aH,k,k,C.m(20),k,k,D.n),k,k,k,k,K.ahh,k,k,k)],t),D.m,k,D.e,D.j,0,D.p),D.f,k,k,new C.o(k,k,s,w,q,B.bSs,D.n),k,k,k,k,D.vd,k,k,k),D.y,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,new A.dKE(l),k,k,k,k,k,k,!1,D.a8)
w=C.m(22)
s=C.I(D.bV,D.q,1.5)
r=C.a([new C.ac(0,D.G,D.bV.j(0.22),D.cw,20)],r)
r=C.aE(k,C.p(k,C.v(B.d1f,D.m,k,D.e,D.j,0,D.p),D.f,k,k,new C.o(k,k,s,w,r,B.bT7,D.n),k,k,k,k,N.LJ,k,k,k),D.y,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,new A.dKF(l),k,k,k,k,k,k,!1,D.a8)
w=l.aX7("JOBS")
s=l.aX6(C.a([l.DJ("\ud83d\udd0c","Wire a room","Go to a room that needs wiring",D.bo,new A.dKG(l)),l.DJ("\ud83d\udebd","Plumb a room","Go to a bathroom or kitchen",D.aT,new A.dKH(l)),l.DJ("\ud83d\udd27","Fix a house","Walk the house and fix every sign",D.aH,new A.dKI(l)),l.DJ("\ud83e\uddf1","Build a room","Frame, drywall, then wire",D.b8,new A.dKJ(l)),l.DJ("\u26a1","Wiring bench","Just the wiring, one room",D.cn,new A.dKK(l)),l.DJ("\ud83d\udcde","Service calls","A customer rings with problems",D.j4,new A.dKL(l))],t))
p=l.aX7("LESSONS")
o=C.a([],t)
for(n=0;n<7;++n){m=B.cQM[n]
o.push(l.DJ(m.b,m.c,m.d,m.e,new A.dKC(l,m)))}o.push(l.DJ("\ud83d\udcd8","Learn the trades","Short cards for beginners",D.by,new A.dKD(l)))
return C.c8(k,D.bX,C.bn(!0,C.cB(C.a([u,D.ac,v,D.ac,q,D.ac,r,w,s,p,l.aX6(o)],t),k,B.agA,k,k,D.ah,!1),!0,!1,D.af,!0,!0),k,!1,!1,k,k)},
aX7(d){var w=null
return new C.C(B.btj,C.A(C.a([C.D(C.p(w,w,D.f,D.aH.j(0.35),w,w,w,1,w,w,w,w,w,w),1),new C.C(D.fT,C.d(d,w,w,w,w,w,w,B.eVI,w,w,w),w),C.D(C.p(w,w,D.f,D.aH.j(0.35),w,w,w,1,w,w,w,w,w,w),1)],x.p),D.m,w,D.e,D.j,0,w,w),w)},
aX8(d,e,f,g){var w=null,v=e?f.j(0.2):D.c.j(0.06),u=C.m(18),t=e?f:D.b2
t=C.I(t,D.q,e?2:1)
return C.aE(w,C.p(w,C.av(C.d(d,w,w,w,w,w,w,C.l(w,w,e?f:D.ad,w,w,w,w,w,w,w,w,13,w,w,D.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w,w,w),D.f,w,w,new C.o(v,w,t,u,w,w,D.n),w,w,w,w,D.eZ,w,w,w),D.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,g,w,w,w,w,w,w,!1,D.a8)},
aX6(d){var w,v,u,t,s=null,r=x.p,q=C.a([],r)
for(w=0;v=d.length,w<v;w+=2){u=d[w]
t=w+1
v=t<v?d[t]:D.bH
q.push(new C.C(D.cH,new C.DA(new C.cm(D.aO,D.e,D.j,D.aj,s,D.p,s,0,C.a([new C.bD(1,D.bi,u,s),D.ab,new C.bD(1,D.bi,v,s)],r),s),s),s))}return C.v(q,D.m,s,D.e,D.j,0,D.p)},
DJ(d,e,f,g,h){var w=null,v=C.a([g.j(0.2),B.Ej],x.O),u=C.m(22),t=C.I(g.j(0.55),D.q,1.4),s=x.V,r=C.a([new C.ac(0,D.G,g.j(0.18),D.cw,16)],s),q=g.j(0.22),p=C.I(g.j(0.7),D.q,1.5)
s=C.a([new C.ac(0,D.G,g.j(0.35),D.J,14)],s)
return C.aE(w,C.p(w,C.v(C.a([C.p(w,C.av(C.d(d,w,w,w,w,w,w,D.a77,w,w,w),w,w,w),D.f,w,w,new C.o(q,w,p,w,s,w,D.a6),w,56,w,w,w,w,w,56),D.S,C.d(e,w,w,w,w,w,w,D.jn,D.L,w,w),D.cX,C.d(f,w,2,D.a2,w,w,w,B.f5K,D.L,w,w)],x.p),D.m,w,D.bb,D.j,0,D.p),D.f,w,w,new C.o(w,w,t,u,r,new C.a8(D.b0,D.b5,D.x,v,w,w),D.n),w,w,w,w,B.boB,w,w,w),D.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,h,w,w,w,w,w,w,!1,D.a8)}}
A.b54.prototype={
B(d){var w,v,u,t,s,r=this,q=null,p=x.p,o=C.a([C.bY(0,new A.atr(r.d,r.e,r.w,r.f,r.y,r.x,E.W9,r.c,r.CW,q),0,0,0)],p),n=r.at,m=n!=null
if(m)o.push(C.ao(q,C.v(n,D.F,q,D.e,D.j,0,D.p),q,q,8,q,8,q))
n=C.a([],p)
w=r.ax
if(w!=null)D.d.v(n,w)
n.push(r.avy(D.hx,"Zoom in",new A.cpC(r)))
n.push(r.avy(D.y0,"Zoom out",new A.cpD(r)))
w=r.r
n.push(r.avy(B.bB_,"Back to the whole view",w))
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
s=C.I(v?D.b8:D.cj,D.q,1)
o.push(C.ao(q,C.p(q,C.d(n,q,q,q,q,q,q,B.eWh,q,q,q),D.f,q,q,new C.o(u,q,s,t,q,q,D.n),q,q,q,q,D.nQ,q,q,q),q,q,10,62,m,q))}n=r.as
if(n!=null){m=C.m(16)
v=C.I(D.b2,D.q,1)
n=C.a([C.d(n.a,q,q,q,q,q,q,B.f6g,q,q,q),D.cX,C.d(n.b,q,q,q,q,q,q,E.T4,q,q,q)],p)
u=r.ay
if(u!=null)D.d.v(n,C.a([D.an,u],p))
o.push(C.ao(8,C.p(q,C.A(C.a([C.D(C.v(n,D.F,q,D.e,D.j,0,D.p),1),C.aH(q,q,q,q,D.Ga,q,q,q,w,q,q,q,q,q,D.c8)],p),D.F,q,D.e,D.j,0,q,q),D.f,q,q,new C.o(E.ab1,q,v,m,q,q,D.n),q,q,q,q,E.agj,q,q,q),q,q,10,10,q,q))}return new C.an(D.W,q,D.aa,D.r,o,q)},
avy(d,e,f){var w=null,v=D.w.j(0.55),u=C.I(D.b2,D.q,1)
return new C.C(D.eO,C.hp(C.aE(w,C.p(w,C.W(d,D.c,w,w,w,20),D.f,w,w,new C.o(v,w,u,w,w,w,D.a6),w,38,w,w,w,w,w,38),D.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,!1,D.a8),w,e,w,w),w)}}
A.AW.prototype={
B(d){var w=this,v=null,u=C.aH(v,v,v,v,M.nd,v,v,v,new A.bRQ(d),v,v,v,v,v,v),t=w.d,s=C.D(C.d(w.c,v,v,v,v,v,v,C.l(v,v,t,v,v,v,v,v,v,v,v,16,v,v,D.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),1),r=t.j(0.15),q=C.m(16),p=C.I(t.j(0.6),D.q,1),o=x.p
q=C.A(C.a([u,s,C.aE(v,C.p(v,C.A(C.a([C.W(A7.ajM,t,v,v,v,17),D.eb,C.d(w.w,v,v,v,v,v,v,C.l(v,v,t,v,v,v,v,v,v,v,v,12,v,v,D.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],o),D.m,v,D.e,D.Q,0,v,v),D.f,v,v,new C.o(r,v,p,q,v,v,D.n),v,v,v,v,D.tv,v,v,v),D.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,w.r,v,v,v,v,v,v,!1,D.a8)],o),D.m,v,D.e,D.j,0,v,v)
p=C.aI(d,v,x.l).w
return C.c8(v,D.bX,C.bn(!0,C.v(C.a([new C.C(B.btw,q,v),C.p(v,C.cd(w.f,D.r,v,D.y,v,v,v,v,D.ah),D.f,v,new C.aY(0,1/0,0,p.a.b*0.34),B.b_2,v,v,v,v,E.XB,v,v,1/0),C.D(C.bw(A6.a9i,w.e,D.aq),1)],o),D.m,v,D.e,D.j,0,D.p),!0,!1,D.af,!0,!0),v,!1,!1,v,v)}}
A.GV.prototype={
U(){return new A.ayi()},
gdc(d){return this.d}}
A.ayi.prototype={
gFE(){var w,v=this,u=v.d
if(u===$){w=A.Ag(v.a.c)
v.d!==$&&C.bM()
v.d=w
u=w}return u},
geS(d){var w,v=this.e
if(v===$){w=this.a.d
v=this.e=w==null?new A.XI(C.T(x.S,x.N)):w}return v},
gkT(){var w=this.f
return w===$?this.f=new A.AC(0.42,0.26,12,B.fC7,$.aw()):w},
goE(){var w=this,v=w.r
return v===$?w.r=A.fUo(w.gFE(),w.geS(0),!0):v},
q(){var w=this.as
if(w!=null)w.a8(0)
this.a2()},
kw(d,e){var w=this,v=w.as
if(v!=null)v.a8(0)
w.m(new A.d2h(w,d,e))
w.as=C.cM(D.l6,new A.d2i(w))},
oY(d){return this.kw(d,!1)},
xo(){var w=this.geS(0)
w.d=w.d&&w.a&&w.c>=2
this.r=A.fUo(this.gFE(),w,!0)},
nW(){var w=this,v=w.gkT(),u=w.geS(0).c===0,t=u?2.8:0.4
u=u?12:10
v.lU(u,0.26,new A.E(0,0.1,t),0.42)
w.m(new A.d2a(w))},
c32(){var w,v,u,t="ground",s=this.geS(0),r=!s.a||s.c>0,q=new A.d29(this)
switch(this.gFE().a){case"switch":w=q.$1(t)
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
Im(d){var w,v,u,t,s,r,q,p=this
if(d===0){p.nW()
return}w=p.gFE()
v=w.f
u=C.U(v).k("a2<1>")
t=C.B(new C.a2(v,new A.d2b(d),u),u.k("J.E"))
v=w.a
s=A.hjj(v,d)
if(s!=null){u=p.geS(0)
u=u.c===0&&u.b.iR(0,s)}else u=!1
if(u){w=p.geS(0)
if(w.a){A.m7(180,220,0.25,"square")
p.oY("STOP! The power is still on. Turn the breaker OFF before you touch any wire.")
return}w=w.b
w.bn(w,new A.d2c(s))
p.m(p.gc35())
p.kw("Wire taken off the screw.",!0)
return}if(t.length!==0&&p.w.length!==0&&p.geS(0).c===0){u=p.geS(0)
r=A.hje(w,u,p.w,D.d.gK(t),!1)
if(r!=null){++p.Q
A.m7(180,220,0.25,"square")
p.oY(r)}else{A.y7()
p.m(new A.d2d(p,d))
if(A.bCb(w,u))p.kw("Every wire is on the right screw. Now push the device into the box.",!0)
else p.kw(D.d.gK(t).b+": fastened correctly.",!0)
p.gkT().zd(7,A.bzT(v,d,u))
p.w=""}return}q=p.goE().b.h(0,d)
if(q!=null){p.m(new A.d2e(p,d))
w=p.gkT()
v=q.c
w.zd(q.d,v)}},
cgN(){var w,v=this
v.m(new A.d2f(v))
w=v.geS(0)
if(w.a){A.m7(120,200,0.25,"saw")
if(w.c===0)v.oY("The breaker is ON. The wires are LIVE at 120 volts. Turn it OFF before you touch anything.")}else{A.m7(600,100,0.25,"tri")
v.kw("Breaker OFF. It is safe to work on the wires. (In real life, always test them with a tester first.)",!0)}},
cvL(){var w,v,u=this
u.m(new A.d2j(u))
A.y7()
w=u.gFE().a
A:{if("switch"===w){v="Power on. Flip the switch and the light turns on: both black wires are on brass screws, so the switch opens and closes the hot wire. The lesson is complete! Mistakes: "+u.Q+"."
break A}if("gfci"===w){v="Power on. Press RESET (it clicks), then TEST: it must shut the outlet off. Wired on LINE, it protects the whole circuit. The lesson is complete! Mistakes: "+u.Q+"."
break A}v="The tester glows: this outlet has 120 volts and is wired correctly. The lesson is complete! Mistakes: "+u.Q+"."
break A}u.kw(v,!0)},
B(a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null,d=f.c32(),a0=D.d.bc(d,new A.d2r())
if(a0<0)w="All done"
else{f.gFE()
w="Step "+(a0+1)+"/7"}v=f.gFE()
u=f.geS(0)
t=A.bCb(v,u)&&!u.a
s=f.goE()
r=f.gkT()
q=f.x
p=f.y
o=f.z
n=q!==0?f.goE().b.h(0,f.x):e
m=(u.a?D.er:D.e9).j(0.95)
l=C.m(18)
k=u.a
j=C.I(k?D.cj:D.b8,D.q,1.5)
i=C.W(k?D.h8:B.akD,D.c,e,e,e,18)
h=x.p
l=A.X4(e,r,e,o,q,n,e,e,p,e,e,f.gIk(),f.gIl(),s,!1,C.a([C.aE(e,C.p(e,C.A(C.a([i,D.eb,C.d(k?"Breaker ON (live)":"Breaker OFF (safe)",e,e,e,e,e,e,D.no,e,e,e)],h),D.m,e,D.e,D.Q,0,e,e),D.f,e,e,new C.o(m,e,j,l,e,e,D.n),e,e,e,e,D.h6,e,e,e),D.y,!1,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,f.gcgM(),e,e,e,e,e,e,!1,D.a8)],h),C.a([A.Qm("Hints",D.aH,D.r_,u.e,new A.d2s(f)),D.an,A.Qm("Labels",D.aT,S.N5,u.f,new A.d2t(f)),D.an,A.Qm("Brass side",B.bhm,E.akJ,!1,new A.d2v(f)),D.an,A.Qm("Silver side",B.Kz,D.Nb,!1,new A.d2w(f)),D.P],h))
j=C.a([],h)
s=u.c
if(s===0){s=C.a([],h)
for(r=D.d.gae(v.e),q=new C.fk(r,new A.d2x(f));q.C();){p=r.gS(0)
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
s.push(new C.C(D.jc,C.aE(e,C.p(e,new C.cm(D.aO,D.e,D.j,D.m,e,D.p,e,0,i,e),D.f,e,e,new C.o(o,e,new C.bP(g,g,g,g),new C.bq(n,n,n,n),e,e,D.n),e,e,e,e,D.hJ,e,e,e),D.y,!1,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,new A.d2y(f,p),e,e,e,e,e,e,!1,D.a8),e))}s=C.bZ(D.bB,s,D.bs,6,8)
if(t)u="Push it into the box"
else u=u.a?"Turn the breaker OFF first":"Fasten every wire first"
D.d.v(j,C.a([s,D.P,C.A(C.a([A.y6(u,B.ali,t?new A.d2z(f):e,D.aH)],h),D.m,e,D.e,D.j,0,e,e)],h))}else if(s===1)D.d.v(j,C.a([C.A(C.a([A.y6("Pull it back out",D.r2,new A.d2A(f),D.ad),D.ab,A.y6("Put the cover plate on",R.vn,new A.d2B(f),D.aH)],h),D.m,e,D.e,D.j,0,e,e)],h))
else{s=A.y6("Start over",D.ld,new A.d2C(f),D.ad)
u=u.d
r=u?"Tested \u2713":"Power on and test"
D.d.v(j,C.a([C.A(C.a([s,D.ab,A.y6(r,D.h8,u?e:f.gcvK(),D.aH)],h),D.m,e,D.e,D.j,0,e,e)],h))}return new A.AW(v.b,D.aH,l,C.v(j,D.m,e,D.e,D.Q,0,D.p),new A.d2u(f,a1,d),w,e)}}
A.a8t.prototype={
U(){return new A.aEd()},
gdc(d){return this.c}}
A.aEd.prototype={
geS(d){var w,v=this.d
if(v===$){w=this.a.c
v=this.d=w==null?A.fQc():w}return v},
gkT(){var w=this.e
return w===$?this.e=new A.AC(-0.3,0.18,40,B.aRs,$.aw()):w},
goE(){var w=this.f
return w===$?this.f=A.bzz(this.geS(0)):w},
q(){var w=this.z
if(w!=null)w.a8(0)
this.a2()},
kw(d,e){var w=this,v=w.z
if(v!=null)v.a8(0)
w.m(new A.eLY(w,d,e))
w.z=C.cM(D.l6,new A.eLZ(w))},
oY(d){return this.kw(d,!1)},
nW(){this.gkT().lU(40,0.18,B.aRs,-0.3)
this.m(new A.eLR(this))},
Im(d){var w,v,u,t,s,r,q=this,p="square"
if(d===0){q.nW()
return}w=C.F([41,"tail",42,"trap",43,"arm"],x.S,x.N).h(0,d)
if(w!=null&&!q.geS(0).a.t(0,w)){v=q.r
if(v.length===0){if(w==="tail")v="tailpiece"
else v=w==="trap"?"P-trap":"trap arm"
q.oY("Pick the "+v+" from the buttons below first, then tap its glowing outline.")
return}if(v!==w){A.m7(180,220,0.25,p)
u=q.r
A:{if("tail"===u){v="The tailpiece is the straight pipe that hangs from the sink. It goes at the very top, under the drain."
break A}if("trap"===u){v="The P-trap is the U-shaped bend. It goes right under the tailpiece, in the middle."
break A}v="The trap arm is the long straight pipe that goes into the wall. It goes last, on the right."
break A}q.oY(v)
return}if(w==="trap"&&!q.geS(0).a.t(0,"tail")){A.m7(180,220,0.25,p)
q.oY("Start from the top: put the tailpiece on first, then the trap under it.")
return}if(w==="arm"&&!q.geS(0).a.t(0,"trap")){A.m7(180,220,0.25,p)
q.oY("The trap arm joins the trap. Put the P-trap on first.")
return}q.m(new A.eLS(q,w))
A.y7()
q.kw("Piece in place. "+(q.geS(0).a.a===3?"Now tighten the two slip nuts: tap each nut.":"Pick the next piece."),!0)
return}v=d===44
if(v||d===45){t=v?"n1":"n2"
if(q.geS(0).b.h(0,t)!==!0){q.m(new A.eLT(q,t))
A.y7()
q.kw("Slip nut hand tightened. In real life give it a quarter turn more with pliers, but never over-tighten plastic.",!0)
return}}s=q.goE().b.h(0,d)
if(s!=null){q.m(new A.eLU(q,d))
v=q.gkT()
r=s.c
v.zd(s.d,r)}},
c37(){var w=this,v=x.cc,u=C.B(new C.a2(C.a(["n1","n2"],x.s),new A.eLV(w),v),v.k("J.E"))
w.m(new A.eLW(w,u))
if(u.length!==0){A.m7(180,220,0.25,"square")
w.oY("It is dripping from a loose slip nut! Tap the nut and tighten it, then run the water again.")}else{A.y7()
w.kw("No leaks. The water flows through the trap and into the wall. The little pool in the U-bend stays there and blocks sewer gas. The lesson is complete!",!0)}},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.geS(0),i=j.a,h=i.t(0,"tail"),g=i.t(0,"trap"),f=i.t(0,"arm"),e=j.b
e=e.h(0,"n1")===!0&&e.h(0,"n2")===!0
w=C.a([h,g,f,e,j.c&&j.d.length===0],x.u)
v=D.d.bc(w,new A.eM2())
u=i.a===3
j=v<0?"All done":"Step "+(v+1)+"/5"
h=l.goE()
g=l.gkT()
f=l.w
e=l.x
t=l.y
s=f!==0?l.goE().b.h(0,l.w):k
h=A.X4(k,g,new A.eM3(l),t,f,s,k,k,e,k,k,l.gIk(),l.gIl(),h,!1,k,k)
e=x.p
s=C.a([],e)
for(r=0;r<3;++r){q=B.dbg[r]
g=i.t(0,q)?k:new A.eM4(l,q)
f=i.t(0,q)?D.dp:D.fl
t=new C.aW(14,14)
p=l.r===q
o=p?D.b1:D.b2
n=new C.aA(o,p?3:1,D.q,-1)
o=C.a([],e)
if(i.t(0,q))o.push(B.e3L)
p=B.diZ.h(0,q)
p.toString
m=i.t(0,q)?D.c_:D.c
o.push(new C.x(p,k,new C.G(!0,m,k,k,k,k,13,D.u,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k),k,k,k,k,k,k,k,k,k))
s.push(new C.C(D.jc,C.aE(k,C.p(k,new C.cm(D.aO,D.e,D.j,D.m,k,D.p,k,0,o,k),D.f,k,k,new C.o(f,k,new C.bP(n,n,n,n),new C.bq(t,t,t,t),k,k,D.n),k,k,k,k,D.hJ,k,k,k),D.y,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,g,k,k,k,k,k,k,!1,D.a8),k))}i=C.bZ(D.bB,s,D.bs,6,8)
g=A.y6("Start over",D.ld,new A.eM5(l),D.ad)
f=u?"Run the water":"Build the drain first"
return new A.AW("Sink drain (P-trap)",D.cs,h,C.v(C.a([i,D.P,C.A(C.a([g,D.ab,A.y6(f,D.pS,u?l.gc36():k,D.cs)],e),D.m,k,D.e,D.j,0,k,k)],e),D.m,k,D.e,D.Q,0,D.p),new A.eM6(d,w),j,k)}}
A.a3U.prototype={
U(){return new A.ayx()},
gdc(d){return this.c}}
A.ayx.prototype={
geS(d){var w,v=this.d
if(v===$){w=this.a.c
v=this.d=w==null?A.fQc():w}return v},
gkT(){var w=this.e
return w===$?this.e=new A.AC(-0.25,0.2,36,B.aR8,$.aw()):w},
goE(){var w=this.f
return w===$?this.f=A.aNs(this.geS(0)):w},
q(){var w=this.z
if(w!=null)w.a8(0)
this.a2()},
kw(d,e){var w=this,v=w.z
if(v!=null)v.a8(0)
w.m(new A.d5c(w,d,e))
w.z=C.cM(D.l6,new A.d5d(w))},
oY(d){return this.kw(d,!1)},
nW(){this.gkT().lU(36,0.2,B.aR8,-0.25)
this.m(new A.d54(this))},
Im(d){var w,v,u,t,s,r,q=this
if(d===0){q.nW()
return}w=x.fZ
v=C.B(new C.a2(B.a2n,new A.d57(d),w),w.k("J.E"))
if(v.length!==0&&q.r.length!==0){w=q.geS(0)
u=A.i4F(w,q.r,D.d.gK(v))
if(u!=null){A.m7(180,220,0.25,"square")
q.oY(u)}else{A.y7()
q.m(new A.d58(q,d))
q.gkT().zd(12,A.afw(d))
q.kw(A.fo1(w)?"All four ends are connected. Now open the valves.":D.d.gK(v).b+": connected.",!0)}return}w=d===68
if(w||d===69){t=w?"hot":"cold"
if(q.geS(0).e.iR(0,t)){q.m(new A.d59(q,t))
q.kw("Hose taken off.",!0)
return}}s=q.goE().b.h(0,d)
if(s!=null){q.m(new A.d5a(q,d))
w=q.gkT()
r=s.c
w.zd(s.d,r)}},
c34(d){var w,v=this
v.m(new A.d55(v))
w=v.geS(0)
if(!w.f){v.kw("Valves closed.",!0)
return}if(A.fo1(w)){A.y7()
v.kw("Hot and cold flow through the hoses and out of the faucet. No leaks. The lesson is complete!",!0)}else{A.m7(180,220,0.25,"square")
v.oY("Water is spraying out of a valve that has no hose! Close the valves and finish connecting the hoses first.")}},
B(d){var w,v,u,t,s,r,q,p,o,n=this,m=null,l=n.geS(0),k=l.r||l.e.a!==0,j=l.e,i=j.h(0,61)==="hot"&&j.h(0,63)==="hot",h=j.h(0,62)==="cold"&&j.h(0,64)==="cold",g=C.a([k,i,h,l.f&&A.fo1(l)],x.u),f=D.d.bc(g,new A.d5h())
k=f<0?"All done":"Step "+(f+1)+"/4"
i=n.goE()
h=n.gkT()
w=n.w
v=n.x
u=n.y
t=w!==0?n.goE().b.h(0,n.w):m
s=x.p
i=A.X4(m,h,new A.d5i(n),u,w,t,m,m,v,m,m,n.gIk(),n.gIl(),i,!1,m,C.a([A.Qm("Hints",D.aH,D.r_,l.r,new A.d5j(n)),D.P],s))
v=C.a([],s)
for(r=0;r<2;++r){h={}
w=B.daL[r]
h.a=null
q=w.a
h.a=q
u=new C.aW(14,14)
t=n.r===q
p=t?D.b1:D.b2
o=new C.aA(p,t?3:1,D.q,-1)
p=C.a([],s)
t=C.a3(j).k("bc<2>")
if(new C.a2(new C.bc(j,t),new A.d5k(h),t.k("a2<J.E>")).gM(0)===2)p.push(B.e3N)
p.push(new C.x(w.b,m,D.rC,m,m,m,m,m,m,m,m,m))
v.push(new C.C(D.jc,C.aE(m,C.p(m,new C.cm(D.aO,D.e,D.j,D.m,m,D.p,m,0,p,m),D.f,m,m,new C.o(w.c,m,new C.bP(o,o,o,o),new C.bq(u,u,u,u),m,m,D.n),m,m,m,m,D.hJ,m,m,m),D.y,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new A.d5l(h,n),m,m,m,m,m,m,!1,D.a8),m))}j=C.bZ(D.bB,v,D.bs,6,8)
h=A.y6("Start over",D.ld,new A.d5m(n),D.ad)
l=l.f?"Close the valves":"Open the valves"
return new A.AW("Faucet supply lines",D.cj,i,C.v(C.a([j,D.P,C.A(C.a([h,D.ab,A.y6(l,D.pS,n.gc33(n),D.cj)],s),D.m,m,D.e,D.j,0,m,m)],s),D.m,m,D.e,D.Q,0,D.p),new A.d5n(d,g),k,m)}}
A.azp.prototype={
U(){return new A.azq(A.h0i())}}
A.azq.prototype={
gkT(){var w,v=this.e
if(v===$){w=new A.AC(-0.3,0.48,46,B.Tz,$.aw())
w.f=80
this.e=w
v=w}return v},
goE(){var w=this.f
return w===$?this.f=A.afj(this.d):w},
q(){var w=this.z
if(w!=null)w.a8(0)
this.a2()},
kw(d,e){var w=this,v=w.z
if(v!=null)v.a8(0)
w.m(new A.dch(w,d,e))
w.z=C.cM(D.l6,new A.dci(w))},
oY(d){return this.kw(d,!1)},
nW(){this.gkT().lU(46,0.48,B.Tz,-0.3)
this.m(new A.dcb(this))},
Im(d){var w,v,u,t=this
if(d===0){t.nW()
return}if(d===72){w=t.d
w=w.d.t(0,72)&&w.a>=5}else w=!1
if(w){t.m(new A.dcd(t,d))
A.y7()
t.kw("You flipped the breaker fully OFF and then ON. The living room light is back on. A breaker trips when a circuit is overloaded: find out why before it trips again.",!0)
t.gkT().zd(22,B.fFQ)
return}w=d===87
if(w||d===86){v=t.d
v=v.b&&!v.c&&v.a>=5}else v=!1
if(v){if(t.w==="wrench"&&w){t.m(new A.dce(t,d))
A.y7()
t.kw("You tightened the slip nut with the wrench. The drip has stopped.",!0)
return}A.m7(180,220,0.25,"square")
t.oY(w?"Hand tightening is not enough here. Pick the wrench first, then tap the nut.":"The water is dripping from the slip nut on the trap. Pick the wrench, then tap the nut.")}u=t.goE().b.h(0,d)
if(u!=null){t.m(new A.dcf(t,d))
w=t.gkT()
v=u.c
w.zd(u.d,v)}},
caS(d){var w,v
A:{if("ptrap"===d){w=B.e9L
break A}if("faucet"===d){w=B.bwH
break A}w=new A.GV(d,null,null)
break A}v=this.c
v.toString
C.a6(v,!1).c6(C.e7(new A.dcc(w),!1,null,x.H))},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.d,l=B.d6a[m.a],k=o.r,j=k===0?n:A.hV3(k)
k=m.d.t(0,72)
w=!m.b||m.c
v=C.a([!k,w],x.u)
w=m.a
k=o.goE()
u=o.gkT()
t=o.r
s=o.x
r=o.y
q=t!==0?o.goE().b.h(0,o.r):n
p=j==null?n:C.aE(n,C.p(n,B.f7r,D.f,n,n,new C.o(D.aH,n,n,C.m(12),n,n,D.n),n,n,n,n,D.tv,n,n,n),D.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new A.dcl(o,j),n,n,n,n,n,n,!1,D.a8)
k=A.X4(n,u,new A.dcm(o),r,t,q,p,new A.dcn(o),s,n,n,o.gIk(),o.gIl(),k,!1,n,n)
s=l.a
p=x.p
q=C.A(C.a([C.D(C.d(""+(m.a+1)+". "+s,n,n,n,n,n,n,B.f03,n,n,n),1),A.Qm("Wrench",D.aT,D.qV,o.w==="wrench",new A.dco(o))],p),D.m,n,D.e,D.j,0,n,n)
t=C.d(l.b,n,3,D.a2,n,n,n,B.f18,n,n,n)
m=C.kU(D.by,6,s,6,0,new A.dcp(o),m.a)
u=v[0]
s=u?"\u2705 Living room power fixed":"\u26a0 Living room has no power"
s=C.D(C.d(s,n,n,n,n,n,n,C.l(n,n,u?D.es:D.f3,n,n,n,n,n,n,n,n,11.5,n,n,D.H,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),1)
u=v[1]
r=u?"\u2705 Sink leak fixed":"\u26a0 Kitchen sink drips"
return new A.AW("Build and fix a house",D.by,k,C.v(C.a([q,D.bA,t,m,C.A(C.a([s,C.D(C.d(r,n,n,n,n,n,n,C.l(n,n,u?D.es:D.f3,n,n,n,n,n,n,n,n,11.5,n,n,D.H,n,n,!0,n,n,n,n,n,n,n,n),D.dL,n,n),1)],p),D.m,n,D.e,D.j,0,n,n)],p),D.m,n,D.e,D.Q,0,D.p),new A.dcq(d,v),"Stage "+(w+1)+"/7",n)}}
A.jy.prototype={}
A.M7.prototype={}
A.a6_.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m=null,l=x.p,k=C.a([C.A(C.a([C.aH(m,m,m,m,M.nd,m,m,m,new A.c5v(d),m,m,m,m,m,m),B.fh3],l),D.m,m,D.e,D.j,0,m,m)],l)
for(w=0;w<5;++w){v=B.dcO[w]
u=v.c
t=C.a([new C.C(D.ahw,new C.x(v.b+"  "+v.a.toUpperCase(),m,new C.G(!0,u,m,m,m,m,12,D.u,m,1.1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m,m,m,m,m,m,m,m,m),m)],l)
for(s=v.d,r=s.length,q=0;q<r;++q){p=s[q]
o=new C.aW(14,14)
n=new C.aA(u.j(0.35),1,D.q,-1)
t.push(C.p(m,C.v(C.a([new C.x(p.a,m,D.jn,m,m,m,m,m,m,m,m,m),D.cX,new C.x(p.b,m,E.T4,m,m,m,m,m,m,m,m,m)],l),D.F,m,D.e,D.j,0,D.p),D.f,m,m,new C.o(B.Ej,m,new C.bP(n,n,n,n),new C.bq(o,o,o,o),m,m,D.n),m,m,m,D.cH,D.bk,m,m,m))}D.d.v(k,t)}return C.c8(m,D.bX,C.bn(!0,C.cB(k,m,B.agA,m,m,D.ah,!1),!0,!1,D.af,!0,!0),m,!1,!1,m,m)}}
A.cgi.prototype={}
A.Er.prototype={}
A.nc.prototype={}
A.Wb.prototype={}
A.cg8.prototype={
bw_(d,e,f){var w,v=this
if(f!=null)w=D.d.iC(B.av1,new A.cgc(f))
else{w=new C.eJ()
w.dB(v.a)
w=B.av1[w.aB(2)]}v.c!==$&&C.aO()
v.c=w
w=new C.eJ()
w.dB(v.a+7)
w=w.h9()
v.d!==$&&C.aO()
v.d=w},
uP(d,e){var w=this.c
w===$&&C.c()
return D.d.iC(w.c,new A.cgd(e))},
Os(d){++this.w
return new A.eE(!1,d,!1,"")},
c0B(d){var w=d.d
return new C.K(w,new A.cg9(this),C.U(w).k("K<1,n>")).aI(0," and ")},
bfj(d,e){var w,v,u,t,s=this,r=s.uP(0,e),q=s.e
if(q.t(0,e))return s.Os("The "+r.c.toLowerCase()+" is already there.")
if(d!==r.b)return s.Os(s.b?"That does not go here.":"That does not go here. This spot is for the "+r.c.toLowerCase()+".")
for(w=r.d,v=w.length,u=0;u<v;++u)if(!q.t(0,w[u])){q=s.b?"Not yet: something has to go in first.":"Not yet. "+r.e+" Put in the "+s.c0B(r)+" first.";++s.w
return new A.eE(!1,q,!1,"")}if(r.f&&s.r)return s.Os(s.b?"The water is still on!":"Stop! The water is still on. Cutting into a pipe with the water on floods the room. Turn the water off at the main valve first (pick the hand and tap the main valve).")
q.L(0,e)
s.y=!1
s.x.a9(0)
if(r.r>0)t=s.b?"":" It is only loose. Pick the wrench and tap it to tighten the joints."
else t=""
return new A.eE(!0,r.c+" fitted."+t,!1,"")},
bgz(d){var w,v,u,t,s=this,r=s.uP(0,d)
if(!s.e.t(0,d))return s.Os(s.b?"Nothing to tighten yet.":"There is nothing to tighten yet: the "+r.c.toLowerCase()+" is not fitted.")
w=r.r
if(w===0)return s.Os(s.b?"That does not need tightening.":"The "+r.c.toLowerCase()+" does not have joints to tighten. It just sits in place.")
v=s.f
u=v.h(0,d)
if(u==null)u=0
if(u>=w)return s.Os("Already tight. More force would crack it.")
t=u+1
v.n(0,d,t)
s.x.a9(0)
s.y=!1
v=r.c
return new A.eE(!0,t>=w?v+": every joint is tight now.":v+": one joint tightened, one to go.",!1,"")},
beg(d){var w=this.uP(0,d),v=this.f.h(0,d)
if(v==null)v=0
return w.r-v},
aH5(){var w,v,u,t,s,r,q=this
q.r=!q.r
w=q.x
w.a9(0)
if(!q.r)return B.aUm
v=q.c
v===$&&C.c()
u=v.c
t=C.U(u).k("a2<1>")
s=C.B(new C.a2(u,new A.cge(q),t),t.k("J.E"))
v=v.c
u=C.U(v).k("a2<1>")
r=C.B(new C.a2(v,new A.cgf(q),u),u.k("J.E"))
q.y=!0
if(s.length!==0){w.v(0,new C.K(s,new A.cgg(),C.U(s).k("K<1,n>")));++q.w
return new A.eE(!1,"Water is spraying from an open pipe where the "+D.d.gK(s).c.toLowerCase()+" should be! Turn the water off and finish the job.",!0,"")}if(r.length!==0){w.v(0,new C.K(r,new A.cgh(),C.U(r).k("K<1,n>")));++q.w
return new A.eE(!1,"The "+D.d.gK(r).c.toLowerCase()+" is leaking from a loose joint. Turn the water off, tighten it with the wrench, then test again.",!0,"")}if(!q.gaj_())return B.aUc
return B.aU_},
cDi(){var w,v,u,t,s,r,q,p=this
p.r=!0
p.aH5()
w=p.c
w===$&&C.c()
v=w.c
u=v.length
t=0
for(;t<u;++t){s=v[t]
p.bfj(s.b,s.a)}for(w=w.c,v=w.length,t=0;t<v;++t){s=w[t]
for(u=s.r,r=s.a,q=0;q<u;++q)p.bgz(r)}p.aH5()
p.w=0},
gaj_(){var w=this.c
w===$&&C.c()
return D.d.da(w.c,new A.cga(this))},
gcBC(){var w=this.c
w===$&&C.c()
return D.d.da(w.c,new A.cgb(this))},
gBd(){var w=this
return w.gaj_()&&w.gcBC()&&w.r&&w.y&&w.x.a===0}}
A.Va.prototype={
U(){var w,v=new A.AC(-0.25,0.4,175,B.aRZ,$.aw())
v.f=200
w=new C.BF()
$.CB()
w.j1(0)
return new A.aCW(v,w)}}
A.aCW.prototype={
gCj(d){var w=this.d
if(w===$){this.a.toString
w=D.o.G(Date.now(),1e5)
this.d=w}return w},
a_(){var w,v=this
v.a1()
w=v.a.d
if(w==null){w=v.gCj(0)
v.a.toString
w=A.fQb(!1,w,null)}v.e=w
v.r=A.hex(w,v.x,!w.b)},
q(){var w=this.at
if(w!=null)w.a8(0)
this.a2()},
acI(){var w=this.e
w===$&&C.c()
return this.r=A.hex(w,this.x,!w.b)},
aXb(d,e){var w=this,v=w.at
if(v!=null)v.a8(0)
w.m(new A.efR(w,d,e))
w.at=C.cM(D.jv,new A.efS(w))},
aXa(){this.f.lU(175,0.4,B.aRZ,-0.25)
this.m(new A.efK(this))},
ctu(d){var w,v,u=this.e
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
awr(d){var w=this.e
w===$&&C.c();++w.w
return new A.eE(!1,d,!1,"")},
c3b(d){return this.aX9(d)},
csM(d){var w
A:{if("main"===d){w=9400
break A}w=this.e
w===$&&C.c()
w=w.c
w===$&&C.c()
w=9100+D.d.bc(w.c,new A.efT(d))
break A}this.aX9(w)},
b4b(){var w,v,u,t,s,r,q,p=this,o=p.x
if(o==="hand")return C.a([B.erP],x.L)
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
aX9(d){var w,v,u,t,s,r=this
if(d===0)return
w=r.r
w===$&&C.c()
v=w.b.h(0,d)
if(r.x.length===0){r.m(new A.efC(r,d))
if(v!=null)r.aXb(v.a+": "+v.b,!0)
return}u=r.ctu(d)
w=r.x
if(w==="hand")if(d===9400){w=r.e
w===$&&C.c()
t=w.aH5()}else{w=r.e
w===$&&C.c()
t=r.awr(w.b?"Your hand is only for the main water valve.":"Your hand is for the main water valve. Parts are placed by picking them from the tray.")}else if(w==="wrench")if(u==null){w=r.e
w===$&&C.c()
t=r.awr(w.b?"Nothing to tighten.":"There is nothing to tighten there.")}else{w=r.e
w===$&&C.c()
t=w.bgz(u)}else if(u==null){w=r.e
w===$&&C.c()
t=r.awr(w.b?"Not there.":"That does not go there. Tap one of the glowing spots.")}else{s=r.e
s===$&&C.c()
t=s.bfj(w,u)}w=t.a
if(w)A.y7()
else A.m7(180,220,0.25,"square")
r.m(new A.efD(r,d))
w=w&&!t.c
r.aXb(t.b,w)
w=r.e
w===$&&C.c()
if(w.gBd()&&!r.as){r.as=!0
$.aU.x1$.push(new A.efE(r))}},
c38(){var w=null,v=this.c
v.toString
C.ca(w,w,!0,w,new A.efJ(this),v,w,!0,!0,x.H)},
aW7(){this.m(new A.efP(this))
this.aXa()},
avz(d,e,f){var w,v=null,u=this.x===d,t=u?D.aH.j(0.25):D.c.j(0.07),s=C.m(14),r=u?D.aH:D.b2
r=C.I(r,D.q,u?2:1)
w=C.W(f,u?D.aH:D.ad,v,v,v,19)
return new C.C(E.tt,C.aE(v,C.p(v,C.A(C.a([w,D.bp,C.d(e,v,v,v,v,v,v,C.l(v,v,u?D.aH:D.c,v,v,v,v,v,v,v,v,12.5,v,v,D.H,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),D.m,v,D.e,D.j,0,v,v),D.f,v,v,new C.o(t,v,r,s,v,v,D.n),v,v,v,v,D.fT,v,v,v),D.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new A.efG(this,u,d),v,v,v,v,v,v,!1,D.a8),v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.e
h===$&&C.c()
h=h.c
h===$&&C.c()
h=h.c
w=new C.a2(h,new A.efU(j),C.U(h).k("a2<1>")).gM(0)
h=j.e.c
h===$&&C.c()
v=j.r
v===$&&C.c()
u=j.y
t=j.z
s=j.Q
r=u!==0?v.b.h(0,u):i
v=A.X4(i,j.f,new A.efV(j),s,u,r,i,new A.efW(),t,i,i,j.gc39(),j.gc3a(),v,!1,i,i)
t=x.p
r=C.a([],t)
if(j.x.length!==0&&j.b4b().length!==0){u=C.a([],t)
for(s=j.b4b(),q=s.length,p=0;p<s.length;s.length===q||(0,C.L)(s),++p){o={}
n=s[p]
o.a=null
o.a=n.a
m=new C.aW(12,12)
l=new C.aA(D.b1,1,D.q,-1)
u.push(C.aE(i,C.p(i,new C.x("\ud83d\udccd "+n.b,i,D.o9,i,i,i,i,i,i,i,i,i),D.f,i,i,new C.o(D.fh.j(0.35),i,new C.bP(l,l,l,l),new C.bq(m,m,m,m),i,i,D.n),i,i,i,i,B.XE,i,i,i),D.y,!1,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,new A.efX(o,j),i,i,i,i,i,i,!1,D.a8))}r.push(new C.C(D.eO,C.bZ(D.bB,u,D.bs,6,6),i))}u=j.e
if(u.b)u="Practice mode: no hints. Build it in the right order."
else if(u.gaj_())u="Everything is fitted. Tighten every joint, then turn the main water on to test."
else{u=j.e.c
u===$&&C.c()
u="Job: "+u.d}r.push(new C.bH(D.a3,i,i,C.d(u,i,2,D.a2,i,i,i,B.aOo,i,i,i),i))
r.push(D.P)
t=C.a([j.avz("hand","Hand",B.alc),j.avz("wrench","Wrench",D.qV)],t)
for(p=0;p<11;++p){k=B.bVh[p]
u=B.dgU.h(0,k)
u.toString
t.push(j.avz(k,u,A1.akB))}r.push(new C.a7(i,52,C.cB(t,i,i,i,i,D.aO,!1),i))
return new A.AW("Plumbing job: "+h.b,D.aT,v,C.v(r,D.m,i,D.e,D.Q,0,D.p),new A.efY(j,d),""+w+"/"+h.c.length+" fitted",i)},
bYu(d){return C.bX(E.mT,null,new A.efO(this),d,!0,!0,!0,D.lm,!1,!1,x.H)}}
A.yr.prototype={}
A.pI.prototype={}
A.WR.prototype={}
A.atU.prototype={}
A.aSh.prototype={}
A.eE.prototype={
gjb(){return this.a}}
A.b3A.prototype={
cgc(d,e){var w,v,u,t,s=this,r=null,q="outlet",p="switch",o=new C.eJ()
o.dB(s.a)
w=d==null?o.aB(3):d
v=C.a([0,1,2],x.t)
D.d.fs(v,o)
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
galJ(){var w,v=C.aX(x.S),u=this.d
u===$&&C.c()
w=0
for(;w<4;++w)v.L(0,u[w].a)
return v},
cPd(d){var w,v,u=this.d
u===$&&C.c()
w=0
for(;w<4;++w){v=u[w]
if(v.a===d)return v}return null},
fM(d){++this.f
return new A.eE(!1,d,!1,"")},
aDu(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.d
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
h.z.v(0,h.galJ())
for(g=h.Q,w=x.S,v=0;v<3;++v){q=B.o0[v]
u=C.aX(w)
s=C.aX(w)
p=new A.atU(u,s)
p.d=p.e=p.a=!0
for(o=h.aow(q),n=o.length,m=0;m<o.length;o.length===n||(0,C.L)(o),++m)for(l=o[m]*10,k=0;k<6;++k)s.L(0,l+k)
for(s=h.galJ(),o=C.a3(s),n=new C.mU(s,s.r,o.k("mU<1>")),n.c=s.e,o=o.c,s=q+48;n.C();){l=n.d
if(l==null)l=o.a(l)
t=A.l0(l)
if(!t.c){j=t.d.a
j=j>=q&&j<=s}else j=!1
if(j)u.L(0,l)}g.n(0,q,p)}for(g=h.as,v=0;v<2;++v){i=g[v]
i.a=!0
i.b=3
i.d=i.c=!0}},
cDj(){var w,v,u,t,s,r,q,p,o,n,m=this,l=m.d
l===$&&C.c()
w=0
for(;w<4;++w){v=l[w]
m.bdh(v.a,v.b)}for(u=x.S,t=x.N,s=m.at,w=0;w<4;++w){r=l[w].a
q=s.h(0,r)
if(q==null)continue
p=q.a
A:{if("outlet"===p){o=C.F([25,"ground",23,"white",21,"black"],u,t)
break A}if("gfci"===p){o=C.F([25,"ground",24,"white",22,"black"],u,t)
break A}if("switch"===p){o=C.F([25,"ground",21,"blackLine",22,"blackLoad"],u,t)
break A}o=C.F([53,"ground",52,"white",51,"black"],u,t)
break A}for(o=new C.Mb(o,o.r,o.e,C.a3(o).k("Mb<1,2>"));o.C();){n=o.d
m.bbC(r,n.b,n.a)}m.bfC(r)
m.bas(r)}if(!m.ax)m.aH3()
for(w=0;w<4;++w){v=l[w]
u=v.b
if(u==="outlet"||u==="gfci"){u=v.a
m.bfl(u,"lamp")
m.bgR(u)}}for(l=D.d.gae(l),u=new C.fk(l,new A.cl6());u.C();){t=l.gS(0).a
m.aDF(t)
m.aDF(t)}},
aJs(d){var w,v,u=A.l0(d).d.a,t=C.a([],x.t)
for(w=0;v=$.Gl(),w<v.length;++w){v=v[w]
if(v>u&&v<64)t.push(w)}return t},
cN7(d,e){var w,v,u=this,t=u.x
if(t.ai(0,d))return u.fM("There is already a box at "+A.l0(d).b+".")
w=A.l0(d)
v=w.c
if(!v&&e!=="wall")return u.fM("That is a ceiling box. On the wall you use a plain wall box (the blue one with ears).")
if(v&&e==="wall")return u.fM("A wall box cannot go in the ceiling. Use a round ceiling box.")
if(w.e==="fan"&&e!=="fan"){if(!u.b)return u.fM('A fan is heavy and it shakes. It needs a box that says "fan rated". A plain ceiling box can let the fan fall.')
t.n(0,d,e);++u.f
return B.aUA}t.n(0,d,e)
t=v?"ceiling joist":"side of the stud"
return new A.eE(!0,w.b+": box fixed to the "+t+".",!1,"")},
cHN(d){var w,v=this
if(d<0||d>=$.Gl().length)return B.aUu
w=v.y
if(w.t(0,d))return v.fM("That stud already has a hole.")
if(v.x.a===0)return v.fM("Mount the boxes first. Then you know where the cable has to go and which studs need a hole.")
w.L(0,d)
return B.aUe},
cQf(d){var w,v,u,t,s=this,r=A.l0(d)
if(!s.x.ai(0,d))return s.fM("There is no box at "+r.b+". Mount the box first, then pull the cable to it.")
w=s.z
if(w.t(0,d))return s.fM("The cable is already there.")
v=s.aJs(d)
u=C.U(v).k("a2<1>")
t=C.B(new C.a2(v,new A.cld(s),u),u.k("J.E"))
if(t.length!==0){w=D.o.V($.Gl()[D.d.gK(t)])
v=t.length
u=v===1?"it":"the studs"
return s.fM("The cable is stuck: the stud at "+w+" inches has no hole. Drill "+u+" first ("+v+" left on the way).")}w.L(0,d)
return new A.eE(!0,"Cable pulled from the panel to "+r.b+", through the studs and along the ceiling.",!1,"")},
gaGS(){return this.galJ().da(0,new A.cle(this))},
aod(d){var w,v,u,t
for(w=this.Q,w=new C.cK(w,C.a3(w).k("cK<1,2>")).gae(0);w.C();){v=w.d
u=v.b
if(u.a){t=v.a
t=d>=t&&d<=t+48}else t=!1
if(t)return u}return null},
cKv(d){var w,v,u=this
if(!u.gaGS())return u.fM("Finish the rough-in first. The cable and the boxes must be in before the drywall hides the studs.")
if(!D.d.t(B.a2p,d))return B.aU2
if(!D.d.t(B.o0,d))return u.fM("The edge of the sheet would land between two studs. The sheet needs a stud under every edge, so there is nothing to screw it to. Start at the left corner (a stud) and move one sheet width (48 inches) at a time.")
w=u.Q
v=w.h(0,d)
if((v==null?null:v.a)===!0)return u.fM("There is already a sheet there.")
v=w.h(0,d)
if(v==null){v=x.S
v=new A.atU(C.aX(v),C.aX(v))}v.a=!0
w.n(0,d,v)
return B.aUd},
aow(d){var w,v,u,t=C.a([],x.t)
for(w=d+48,v=0;u=$.Gl(),v<u.length;++v){u=u[v]
if(u>=d&&u<=w)t.push(v)}return t},
cGJ(d){var w,v,u=this,t=A.l0(d)
if(t.c)return u.fM("Ceiling fixtures do not need an opening in the wall.")
if(!u.x.ai(0,d))return u.fM("There is no box at "+t.b+".")
w=u.aod(t.d.a)
if(w==null)return u.fM("There is no sheet over this box yet. Hang the sheet first, then cut the opening.")
v=w.b
if(v.t(0,d))return u.fM("The opening is already cut.")
v.L(0,d)
return B.aUn},
aII(d,e,f){var w,v,u,t,s,r=this
if(f)return r.fM("Missed the stud! There is only air behind the sheet here. The screw would pull through the paper. Screw only where a stud is behind the sheet (every 16 inches).")
w=x.dD
v=C.B(new C.a2(B.o0,new A.clf(r,d),w),w.k("J.E"))
if(v.length===0)return r.fM("There is no sheet here yet.")
u=d*10+e
if(D.d.da(v,new A.clg(r,u)))return r.fM("There is already a screw there.")
for(w=v.length,t=r.Q,s=0;s<v.length;v.length===w||(0,C.L)(v),++s)t.h(0,v[s]).c.L(0,u)
return B.aUp},
bkP(d,e){return this.aII(d,e,!1)},
bml(d){var w=this.Q.h(0,d)
if(w==null||!w.a)return!1
return D.d.da(this.aow(d),new A.cli(w))},
gaBh(){return D.d.da(B.o0,new A.cl5(this))},
gaBg(){var w=this.galJ()
return new C.a2(w,new A.cl3(),C.a3(w).k("a2<cn.E>")).da(0,new A.cl4(this))},
cS6(d){var w,v=this
if(!v.gaBh())return v.fM("Hang all the sheets first.")
if(!D.d.da(B.o0,v.gaoe()))return v.fM("Finish screwing every sheet to the studs first. Tape goes on a solid wall.")
w=v.as[d]
if(w.a)return v.fM("This seam already has tape.")
w.c=w.a=!0
return B.aU6},
cNa(d){var w,v=this,u=v.as[d]
if(!u.a)return v.fM("Tape first. The mud goes over the tape.")
if(!u.c)return v.fM("The last coat is still wet. Let it dry before the next coat.")
w=u.b
if(w>=3)return v.fM("Three coats are enough. Now sand it.");++w
u.b=w
u.c=!1
return new A.eE(!0,"Coat "+w+" of joint compound spread. Let it dry.",!1,"")},
cM5(){var w,v=this.as
if(D.d.da(v,new A.clb()))return B.aUk
for(w=0;w<2;++w)v[w].c=!0
return B.aUy},
bkC(d){var w=this,v=w.as[d]
if(v.b<3)return w.fM("Put on all three coats of mud first. Sanding now would just rub off the tape.")
if(!v.c)return w.fM("The mud is still wet. Let it dry first.")
if(v.d)return w.fM("Already sanded.")
v.d=!0
return B.aU3},
cPs(d){var w=this,v=w.Q.h(0,d)
if(v==null||!v.a)return w.fM("There is no sheet there.")
if(!w.gaBg())return w.fM("Cut the openings for the boxes before you paint. Otherwise the paint covers the boxes.")
if(!D.d.da(w.as,new A.clc()))return w.fM("Sand the seams first. Paint shows every bump.")
if(v.e)return w.fM("This sheet is already painted.")
v.e=!0
return B.aU0},
gyj(){var w=this
return w.gaBh()&&D.d.da(B.o0,w.gaoe())&&w.gaBg()&&D.d.da(w.as,new A.cl7())&&D.d.da(B.o0,new A.cl8(w))},
MH(){var w,v
for(w=this.at,w=new C.dt(w,w.r,w.e);w.C();){v=w.d.b
v.a=this.ax&&!this.ay}},
bXJ(d,e){if(d.c)return e==="light"||e==="fan"?"":"A ceiling box holds a light or a fan, not an outlet or a switch."
return e==="outlet"||e==="gfci"||e==="switch"?"":"A light or a fan hangs from the ceiling. A wall box holds an outlet, a GFCI or a switch."},
bdh(d,e){var w,v,u,t,s,r=this,q=A.l0(d)
if(!r.gyj())return r.fM("Finish the drywall first. Devices go in after the walls are painted.")
w=r.x
if(!w.ai(0,d)||!r.z.t(0,d))return r.fM("There is no box with cable at "+q.b+".")
v=r.at
if(v.ai(0,d))return r.fM("There is already a device there. Pull it out first if you want to move it.")
u=r.bXJ(q,e)
if(u.length!==0)return r.fM(u)
t=e==="switch"
if(!(t&&q.e==="low"))s=!t&&!q.c&&q.e==="switch"
else s=!0
if(s){if(!r.b)return r.fM(t?"A switch goes about 48 inches from the floor, where a hand falls naturally. This box is down at outlet height.":"Outlets go low, about 16 inches from the floor. This box is up at switch height.");++r.f
r.cy.push("Wrong height at "+q.b+".")}s=e==="fan"
if(s&&w.h(0,d)!=="fan")if(!r.b)return r.fM("This box is not fan rated. A fan on it can fall. Take the box out and put in a fan-rated one.")
w=new A.XI(C.T(x.S,x.N))
w.r=r.b
w.a=r.ax&&!r.ay
v.n(0,d,new A.aSh(e,w))
if(e==="light")w="Light fixture"
else if(s)w="Ceiling fan"
else if(e==="gfci")w="GFCI outlet"
else w=t?"Switch":"Outlet"
return new A.eE(!0,w+" is held up to "+q.b+". Turn the breaker OFF, then wire it.",!1,"")},
cRh(d){var w=this,v=w.at,u=v.h(0,d)
if(u==null)return B.aUa
if(w.ax&&!w.ay&&!u.b.w){if(w.b)return w.a12()
return w.a1h()}v.W(0,d)
w.CW.W(0,d)
w.cx.W(0,d)
w.ch.W(0,d)
return B.aUs},
a1h(){++this.r;++this.f
return B.aUq},
a12(){var w,v,u=this;++u.r;--u.e
u.ax=!1
u.MH()
w=u.e
if(w<=0){u.w=!0
return B.aU9}v=w===1?"life":"lives"
return new A.eE(!1,"ZAP! You touched a live wire and got a shock. The breaker is now off. "+w+" "+v+" left. Always turn the breaker OFF and test the wires first.",!0,"shock")},
bbC(d,e,f){var w,v,u,t=this,s=t.at.h(0,d)
if(s==null)return B.a8L
t.MH()
w=A.Ag(s.a)
v=D.d.iC(w.f,new A.cl9(f))
u=A.hje(w,s.b,e,v,!0)
if(u==null){if(!t.b&&!v.c.t(0,e)){++t.f
return new A.eE(!0,v.b+": fastened. Careful: "+C.t(w.r.$2(e,v))+" It will burn or trip the breaker when the power comes on.",!0,"")}return new A.eE(!0,v.b+": wire fastened.",!1,"")}if(D.a.a0(u,"SHOCK"))return t.a12()
if(D.a.a0(u,"STOP"))return t.a1h();++t.f
return new A.eE(!1,u,!1,"")},
cSD(d,e){var w,v=this,u=v.at.h(0,d)
if(u==null)return B.Un
v.MH()
w=u.b
if(w.a&&w.c===0){if(v.b)return v.a12()
return v.a1h()}w=w.b
w.bn(w,new A.clj(e))
return B.aUx},
bfC(d){var w,v,u=this,t=u.at.h(0,d)
if(t==null)return B.a8L
w=A.Ag(t.a)
v=t.b
if(!A.bCb(w,v))return u.fM("Every wire must be fastened first.")
if(u.ax&&!u.ay){if(u.b)return u.a12()
return u.a1h()}v.c=1
return B.aUi},
cQg(d){var w,v=this,u=v.at.h(0,d)
if(u==null)return B.Un
if(v.ax&&!v.ay){if(v.b)return v.a12()
return v.a1h()}w=u.b
w.c=0
w.d=!1
return B.aUo},
bas(d){var w=this.at.h(0,d)
if(w==null||w.b.c!==1)return this.fM("Push the device into the box first.")
w.b.c=2
return B.aUr},
aHu(d){var w=this.at
return A.afv(A.Ag(w.h(0,d).a),w.h(0,d).b)},
aH3(){var w=this
if(w.ay){w.ax=w.ay=!1
w.MH()
return B.aUg}w.ax=!w.ax
w.MH()
if(!w.ax)return B.aU8
return w.c3c()},
c3c(){var w,v,u,t,s,r,q,p,o,n=this,m=C.a([],x.s)
for(w=n.at,v=new C.cK(w,C.a3(w).k("cK<1,2>")).gae(0),u=n.cx,t=!1,s=!1;v.C();){r=v.d
q=r.b.b
if(q.c===0)continue
p=r.a
o=A.afv(A.Ag(w.h(0,p).a),w.h(0,p).b)
q.d=q.c>=2
if(o.d)t=!0
if(o.e){q.w=!0
u.L(0,p)
s=!0}if(o.a!=="ok")m.push(A.l0(p).b+": "+o.b)}if(t){n.ay=!0
n.MH()
w=s?"BANG! Sparks and smoke. ":""
v=D.d.aI(m," ")
u=s?"burn":"trip"
return new A.eE(!1,w+"The breaker tripped. "+v+" Fix it, then flip the breaker OFF and ON again.",!0,u)}if(m.length!==0)return new A.eE(!0,"Power is on. "+D.d.aI(m," "),!0,"")
return B.aUl},
aDF(d){var w,v,u,t,s,r,q=this,p=q.at,o=p.h(0,d)
if(o==null||o.a!=="switch"||o.b.c<2)return B.aUw
w=q.ch
if(w.t(0,d))w.W(0,d)
else w.L(0,d)
v=q.d
v===$&&C.c()
u=C.U(v).k("a2<1>")
t=C.B(new C.a2(v,new A.cla(d),u),u.k("J.E"))
if(t.length===0)return B.aUh
s=D.d.gK(t)
v=s.a
r=q.alx(v)
if(w.t(0,d)&&r){p=p.h(0,v)
if(p!=null)p.c=!0
return new A.eE(!0,(s.b==="fan"?"The fan spins":"The light turns on")+". The switch works.",!1,"")}if(w.t(0,d)){p=s.b
return new A.eE(!1,(p==="fan"?"The fan":"The light")+" did not come on. Check the breaker and the wires on the switch and on the "+p+".",!1,"")}return B.aUv},
a3b(d){var w,v=this.at.h(0,d)
if(v!=null){w=v.b
w=w.c<2||w.w}else w=!0
if(w)return!1
return this.aHu(d).c},
alx(d){var w=this,v=w.cPd(d),u=v==null,t=u?null:v.c,s=!0
if(!u)if(t!=null)u=!(w.ax&&!w.ay)||!w.a3b(d)||!w.a3b(t)
else u=s
else u=s
if(u)return!1
return w.ch.t(0,t)},
bfl(d,e){var w,v,u=this,t=u.at.h(0,d)
if(t!=null){w=t.a
w=w!=="outlet"&&w!=="gfci"||t.b.c<2}else w=!0
if(w)return u.fM("There is no finished outlet there to plug into.")
w=u.CW
if(w.ai(0,d))return u.fM("Something is already plugged in.")
w.n(0,d,e)
if(t.b.w)return B.aUb
if(u.ax&&!u.ay&&u.a3b(d)){t.c=!0
v=u.aHu(d)
w=v.a
if(w==="reversed"||w==="noGround")return new A.eE(!0,"It runs, but be careful: "+v.b,!0,"")
return new A.eE(!0,A.hCN(e)+" runs. The outlet works.",!1,"")}if(!(u.ax&&!u.ay))return B.aUf
return new A.eE(!1,"Nothing happens. "+u.aHu(d).b,!0,"")},
bgR(d){if(this.CW.W(0,d)==null)return B.Un
return B.aU7},
gaCW(){var w,v,u,t,s,r=this.d
r===$&&C.c()
w=this.at
v=0
for(;v<4;++v){u=r[v]
t=u.a
s=w.h(0,t)
if(s==null||s.a!==u.b||s.b.c<2)return!1
if(A.afv(A.Ag(w.h(0,t).a),w.h(0,t).b).a!=="ok")return!1
t=u.b
if(t==="outlet"||t==="gfci"){if(!s.c)return!1}else if(t!=="switch"&&!s.c)return!1}return!0}}
A.kW.prototype={}
A.Vd.prototype={
U(){var w,v=new A.AC(-0.12,0.4,205,B.a7O,$.aw())
v.f=300
w=new C.BF()
$.CB()
w.j1(0)
return new A.aD2(v,w,C.T(x.S,x.i))}}
A.aD2.prototype={
gCj(d){var w=this.e
if(w===$){this.a.toString
w=D.o.G(Date.now(),1e5)
this.e=w}return w},
a_(){var w,v=this
v.a1()
w=v.a.d
if(w==null){w=v.gCj(0)
w=A.fQB(null,null,v.a.f,w)}v.d=w
if(v.a.d!=null&&w.gyj())v.y=2
if(v.a.e){v.d.aDu()
v.y=2}v.r=A.Co(v.d,new A.vR(v.z,v.Q,!1))
w=v.f
w.x=0
w.y=1.1},
q(){var w=this.cy
if(w!=null)w.a8(0)
this.a2()},
A5(d,e){var w=this,v=w.cy
if(v!=null)v.a8(0)
w.m(new A.ekd(w,d,e))
w.cy=C.cM(D.jv,new A.eke(w))},
avC(d){return this.A5(d,!1)},
kx(d){var w,v,u,t,s,r=this,q=d.a
if(q)A.y7()
else A.m7(180,220,0.25,"square")
w=d.d
if(w==="shock"){C.fK()
r.m(new A.ejs(r))
C.bN(D.n1,new A.ejt(r),x.c)}if(w==="burn"||w==="trip"){w=r.d
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
r.A5(d.b,q)
if(r.d.w&&r.c!=null)$.aU.x1$.push(new A.eju(r))
if(r.d.gaCW()&&!r.cx){r.cx=!0
$.aU.x1$.push(new A.ejv(r))}},
b1J(){var w=this.ch?3.141592653589793:-0.12
this.f.lU(205,0.4,B.a7O,w)},
aRD(){var w,v,u=this
u.ch=!1
w=u.f
w.Gy(!1)
w.x=0
u.m(new A.ejD(u))
v=u.d
v===$&&C.c()
u.r=A.Co(v,new A.vR(u.z,u.Q,!1))
w.lU(205,0.4,B.a7O,-0.12)},
bAb(){var w,v,u=this
u.ch=!0
w=u.f
w.Gy(!0)
u.m(new A.ejw(u))
v=u.d
v===$&&C.c()
u.r=A.Co(v,new A.vR(u.z,u.Q,!1))
w.lU(190,0.3,B.fyH,3.141592653589793)},
YJ(d,e){var w,v,u,t=this,s=A.l0(e),r=t.f
r.Gy(!1)
r.x=0
t.m(new A.ejV(t,e))
w=t.d
w===$&&C.c()
t.r=A.Co(w,new A.vR(t.z,t.Q,!1))
v=A.a1V(s,B.fxG)
w=s.c
u=w?22:15
r.lU(u,w?-0.8:0.26,v,0.3)},
avA(){var w,v=this
v.m(new A.ejE(v))
w=v.d
w===$&&C.c()
v.r=A.Co(w,new A.vR(v.z,v.Q,!1))
v.b1J()},
c3h(d){var w,v,u,t,s,r,q=this
if(d===0){if(q.Q<0)q.m(new A.ek9(q))
return}w=q.Q
if(w>=0)v=!(d>=5000&&d<5700)
else v=!1
if(v)return
if(d>=5000&&d<5700){v=d-5000
u=D.o.an(v,100)
if(w!==u){if(q.z==="tester")q.aA0(u)
else{q.m(new A.eka(q))
q.YJ(0,u)}return}q.b_s(u,D.o.G(v,100))
return}if(d>=1000&&d<1010)if(q.z==="drill"){w=q.d
w===$&&C.c()
q.kx(w.cHN(d-1000))
return}if(d>=2000&&d<2007){q.b_v(d-2000)
return}if(d>=3000&&d<3007){q.b_t(d-3000)
return}if(d>=6000&&d<6005){if(q.z==="sheet"){w=q.d
w===$&&C.c()
q.kx(w.cKv(B.a2p[d-6000]))}return}if(d>=6100&&d<6103){t=B.o0[d-6100]
if(q.z==="paint"){w=q.d
w===$&&C.c()
q.kx(w.cPs(t))
return}}if(d>=6200&&d<6202){s=d-6200
switch(q.z){case"tape":w=q.d
w===$&&C.c()
q.kx(w.cS6(s))
return
case"mud":w=q.d
w===$&&C.c()
q.kx(w.cNa(s))
return
case"sand":w=q.d
w===$&&C.c()
q.kx(w.bkC(s))
return}}if(d>=7000&&d<7100){if(q.z==="screw"){w=q.d
w===$&&C.c()
v=d-7000
q.kx(w.bkP(D.o.an(v,10),D.o.G(v,10)))}return}if(d>=7500&&d<7600){if(q.z==="screw"){w=q.d
w===$&&C.c()
v=d-7500
q.kx(w.aII(D.o.an(v,10),D.o.G(v,10),!0))}return}if(d===8000){w=q.d
w===$&&C.c()
q.kx(w.aH3())
return}if(d>=8100&&d<8107){u=d-8100
w=q.d
w===$&&C.c()
if(w.CW.h(0,u)==="tv"&&q.z!=="unplug"){w=q.c
w.toString
G.fK6(w,0,"tv",!0,D.v1,"Samsung Neo QLED 8K")
return}q.kx(q.d.bgR(u))
return}if(q.z==="look"){w=q.r
w===$&&C.c()
r=w.b.h(0,d)
if(r!=null){q.m(new A.ekb(q,d))
q.A5(r.a+": "+r.b,!0)}}},
b_v(d){var w,v,u,t=this,s=t.d
s===$&&C.c()
if(s.at.ai(0,d)){s=t.z
s=s!=="tester"&&s!=="look"&&!D.d.t(B.GU,s)}else s=!1
if(s){t.m(new A.ek7(t))
t.YJ(0,d)
return}s=t.z
switch(s){case"wall":case"ceiling":case"fanbox":w=t.d
t.kx(w.cN7(d,s==="fanbox"?"fan":s))
return
case"cable":t.kx(t.d.cQf(d))
return
case"knife":t.kx(t.d.cGJ(d))
return
case"outlet":case"gfci":case"switch":case"light":case"fan":v=t.d.bdh(d,s)
t.kx(v)
if(v.a){t.d.at.h(0,d).b.f=!t.d.b
t.z=""
t.YJ(0,d)}return
case"tester":t.aA0(d)
return}if(t.d.at.ai(0,d)){t.YJ(0,d)
return}s=t.r
s===$&&C.c()
u=s.b.h(0,2000+d)
if(u!=null){t.m(new A.ek8(t,d))
t.A5(u.a+": "+u.b,!0)}},
aA0(d){var w,v=this.d
v===$&&C.c()
w=v.ax&&!v.ay&&v.x.ai(0,d)&&this.d.z.t(0,d)
v=w?"The tester glows: this box is LIVE (120 volts). Turn the breaker OFF before you touch any wire.":"The tester stays dark: no power here. It is safe to work. (Test again after you turn the breaker off, every time.)"
this.A5(v,!w)
A.m7(w?1400:500,120,0.25,"tri")},
b_t(d){var w,v=this,u=v.d
u===$&&C.c()
w=u.at.h(0,d)
if(w==null)return
if(D.d.t(B.GU,v.z)){v.kx(v.d.bfl(d,v.z))
return}u=v.z
if(u==="tester"){v.aA0(d)
return}if(u==="flip"){if(w.a==="switch"&&w.b.c>=2)v.kx(v.d.aDF(d))
else v.avC("Only a finished switch can be flipped.")
return}v.m(new A.ek6(v))
v.YJ(0,d)},
b_s(d,e){var w,v,u,t,s,r,q,p=this,o=p.d
o===$&&C.c()
w=o.at.h(0,d)
if(w==null)return
o=w.a
v=A.Ag(o).f
u=C.U(v).k("a2<1>")
t=C.B(new C.a2(v,new A.ek2(e),u),u.k("J.E"))
s=A.hjj(o,e)
if(s!=null){o=w.b
o=o.b.iR(0,s)&&o.c===0}else o=!1
if(o){p.kx(p.d.cSD(d,s))
return}if(t.length!==0&&w.b.c===0){o=p.at
if(o.length===0){p.avC("Pick a wire below first, then tap "+D.d.gK(t).b+".")
p.m(new A.ek3(p,d,e))
return}r=p.d.bbC(d,o,e)
p.kx(r)
if(r.a)p.m(new A.ek4(p))
return}o=p.r
o===$&&C.c()
q=o.b.h(0,5000+d*100+e)
if(q!=null){p.m(new A.ek5(p,d,e))
p.A5(q.a+": "+q.b,!0)}},
c3i(){var w,v,u,t,s,r,q=this,p=C.a([],x.ek)
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
csN(){var w,v,u,t,s,r,q,p=null,o=this.c3i()
if(o.length===0)return D.bH
w=C.a([],x.p)
for(v=o.length,u=0;u<o.length;o.length===v||(0,C.L)(o),++u){t={}
s=o[u]
t.a=null
t.a=s.a
r=new C.aW(12,12)
q=new C.aA(D.b1,1,D.q,-1)
w.push(C.aE(p,C.p(p,new C.x("\ud83d\udccd "+s.b,p,D.o9,p,p,p,p,p,p,p,p,p),D.f,p,p,new C.o(D.fh.j(0.35),p,new C.bP(q,q,q,q),new C.bq(r,r,r,r),p,p,D.n),p,p,p,p,B.XE,p,p,p),D.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new A.ekf(t,this),p,p,p,p,p,p,!1,D.a8))}return new C.C(D.ia,C.bZ(D.bB,w,D.bs,6,6),p)},
bMa(){var w=null,v=this.c
v.toString
C.ca(w,w,!1,w,new A.ejC(this),v,w,!0,!0,x.H)},
c3d(){var w=null,v=this.c
v.toString
C.ca(w,w,!0,w,new A.ejz(this),v,w,!0,!0,x.H)},
avB(d){this.m(new A.ejF(this,d))
this.aRD()},
aXc(){return this.avB(!1)},
c3f(){var w,v,u,t,s,r,q,p,o,n=this,m=n.d
m===$&&C.c()
if(m.w)return"The job is over."
switch(n.y){case 0:m=m.d
m===$&&C.c()
w=C.U(m).k("a2<1>")
v=C.B(new C.a2(m,new A.ejG(n),w),w.k("J.E"))
if(v.length!==0){u=D.d.gK(v)
t=A.l0(u.a)
m=u.b
if(m==="gfci")m="a GFCI"
if(t.c)w=t.e==="fan"?"fan box":"ceiling box"
else w="wall box"
return"Mount a box at "+t.b+" ("+m+" goes here): pick a "+w+", then tap the glowing spot."}m=n.d.d
m===$&&C.c()
w=C.U(m).k("a2<1>")
s=C.B(new C.a2(m,new A.ejH(n),w),w.k("J.E"))
if(s.length!==0){t=D.d.gK(s).a
m=n.d.aJs(t)
r=new C.a2(m,new A.ejI(n),C.U(m).k("a2<1>")).gM(0)
return r>0?"The cable comes from the panel on the right. Pick the drill and tap each stud on the way to "+A.l0(t).b+" ("+r+" left).":"Pick the cable roll and tap "+A.l0(t).b+"."}return"Rough-in done! Open 2 Drywall."
case 1:if(!m.gaGS())return"Finish the rough-in first (tab 1). Drywall hides the wires."
if(!n.d.gaBh())return"Pick a drywall sheet and tap a stud edge to hang it. Three sheets cover the wall."
if(!n.d.gaBg())return"Pick the drywall saw and tap each box to cut its opening."
if(!D.d.da(B.o0,n.d.gaoe()))return"Pick the screw gun and put a screw in every glowing spot on the studs."
if(D.d.b7(n.d.as,new A.ejL()))return"Pick the tape and tap each seam between two sheets."
if(D.d.b7(n.d.as,new A.ejM()))return D.d.b7(n.d.as,new A.ejN())?'The mud is wet. Press "Let it dry", then the next coat.':"Pick the mud and tap each seam. It needs three coats, with drying in between."
if(D.d.b7(n.d.as,new A.ejO()))return D.d.b7(n.d.as,new A.ejP())?'Press "Let it dry", then sand.':"Pick the sander and tap each seam."
if(!n.d.gyj())return"Pick the roller and paint each sheet."
return"Drywall done! Open 3 Devices."
default:if(!m.gyj())return"Finish the drywall first (tab 2)."
m=n.d.d
m===$&&C.c()
w=C.U(m).k("a2<1>")
q=C.B(new C.a2(m,new A.ejQ(n),w),w.k("J.E"))
if(q.length!==0){u=D.d.gK(q)
m=u.b
if(m==="gfci")m="GFCI"
return"Pick the "+m+" and tap "+A.l0(u.a).b+". ("+C.t(new A.ejT().$1(new C.K(q,new A.ejR(),C.U(q).k("K<1,H>"))))+" still need a device.)"}m=n.d.d
m===$&&C.c()
w=C.U(m).k("a2<1>")
p=C.B(new C.a2(m,new A.ejS(n),w),w.k("J.E"))
if(p.length!==0)return"Tap "+A.l0(D.d.gK(p).a).b+" to work on it: breaker OFF, wires, push in, cover on."
m=n.d
if(!m.ax)return"Turn the breaker ON (tap the panel or the breaker button) and test."
m=m.d
m===$&&C.c()
w=C.U(m).k("a2<1>")
o=C.B(new C.a2(m,new A.ejJ(n),w),w.k("J.E"))
if(o.length!==0)return"Pick the TV or the lamp and plug it into "+A.l0(D.d.gK(o).a).b+" to test it."
m=n.d.d
m===$&&C.c()
return"Flip the wall switch to test the "+(D.d.b7(m,new A.ejK())?"fan":"light")+"."}},
B(a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=this,a2=null,a3=B.d1h[a1.y],a4=a1.Q
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
for(l=0;l<3;++l)m.push(new C.C(D.Ls,new C.x(l<a1.d.e?"\u2764\ufe0f":"\ud83d\udda4",a2,D.zl,a2,a2,a2,a2,a2,a2,a2,a2,a2),a2))
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
i=i?"Breaker ON":"Breaker OFF"}m.push(C.aE(a2,C.p(a2,C.d(i,a2,a2,a2,a2,a2,a2,B.eZv,a2,a2,a2),D.f,a2,a2,new C.o(k,a2,g,j,a2,a2,D.n),a2,a2,a2,a2,D.qP,a2,a2,a2),D.y,!1,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,new A.ekn(a1),a2,a2,a2,a2,a2,a2,!1,D.a8))
m=C.a([C.A(m,D.m,a2,D.e,D.Q,0,a2,a2)],n)
k=a1.ch
j=k?"In front":"Behind the wall"
i=k?F.ak8:F.ak7
k=C.a([A.Qm(j,D.by,i,k,k?a1.gbNE():a1.gbAa()),D.an],n)
if(!a4){j=v.b
D.d.v(k,C.a([A.Qm("Labels",D.aT,S.N5,j.f,new A.eko(a1,v)),D.an,A.Qm("Hints",D.aH,D.r_,j.e,new A.ekp(a1,v)),D.P],n))}s=A.X4(a2,a1.f,new A.ekx(a1),p,r,o,a2,a2,q,a2,a2,new A.eky(a1),a1.gc3g(),s,!1,m,k)
r=C.a([],n)
if(a4){a4=C.a([],n)
for(l=0;l<3;++l){q=l<2?6:0
p=a1.y===l?D.aH.j(0.2):D.dp
o=new C.aW(12,12)
f=new C.aA(a1.y===l?D.aH:D.bF,1,D.q,-1)
if(l===0)m=a1.d.gaGS()
else{m=a1.d
m=l===1?m.gyj():m.gaCW()}m=m?"\u2705 ":""
k=B.d9Q[l]
j=a1.y===l?D.aH:D.ad
a4.push(new C.bD(1,D.bi,C.aE(a2,C.p(a2,new C.cq(D.A,a2,a2,new C.x(m+k,a2,new C.G(!0,j,a2,a2,a2,a2,12,D.u,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2),a2,a2,a2,a2,a2,a2,a2,a2,a2),a2),D.f,a2,a2,new C.o(p,a2,new C.bP(f,f,f,f),new C.bq(o,o,o,o),a2,a2,D.n),a2,a2,a2,new C.Q(0,0,q,0),Q.Lv,a2,a2,a2),D.y,!1,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,new A.ekz(a1,l),a2,a2,a2,a2,a2,a2,!1,D.a8),a2))}a4=C.a([C.A(a4,D.m,a2,D.e,D.j,0,a2,a2),D.an],n)
if(!a1.d.b){q=D.aT.j(0.1)
p=C.m(10)
o=C.I(D.aT.j(0.4),D.q,1)
a4.push(C.p(a2,C.d("\ud83d\udc49 "+a1.c3f(),a2,2,D.a2,a2,a2,a2,B.f_Z,a2,a2,a2),D.f,a2,a2,new C.o(q,a2,o,p,a2,a2,D.n),a2,a2,a2,a2,D.ck,a2,a2,1/0))}else a4.push(B.fhD)
a4.push(D.an)
q=C.a([],n)
if(a1.y<2&&!a1.d.gyj())q.push(new C.C(E.tt,C.aE(a2,C.p(a2,B.b3d,D.f,a2,a2,new C.o(D.dS,a2,a2,C.m(14),a2,a2,D.n),a2,a2,a2,a2,D.fT,a2,a2,a2),D.y,!1,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,new A.ekA(a1),a2,a2,a2,a2,a2,a2,!1,D.a8),a2))
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
q.push(new C.C(E.tt,C.aE(a2,C.p(a2,new C.cm(D.aO,D.e,D.j,D.m,a2,D.p,a2,0,C.a([j,D.bp,new C.x(d.b,a2,new C.G(!0,o,a2,a2,a2,a2,12.5,D.H,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2),a2,a2,a2,a2,a2,a2,a2,a2,a2)],n),a2),D.f,a2,a2,new C.o(m,a2,new C.bP(f,f,f,f),new C.bq(k,k,k,k),a2,a2,D.n),a2,a2,a2,a2,D.fT,a2,a2,a2),D.y,!1,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,new A.ekB(a1,d),a2,a2,a2,a2,a2,a2,!1,D.a8),a2))}if(a1.y===1)q.push(new C.C(E.tt,C.aE(a2,C.p(a2,B.b35,D.f,a2,a2,new C.o(D.e9,a2,a2,C.m(14),a2,a2,D.n),a2,a2,a2,a2,D.fT,a2,a2,a2),D.y,!1,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,new A.ekC(a1),a2,a2,a2,a2,a2,a2,!1,D.a8),a2))
a4.push(new C.a7(a2,52,C.cB(q,a2,a2,a2,a2,D.aO,!1),a2))
if(a1.z.length!==0)a4.push(a1.csN())
D.d.v(r,a4)}else{a4=C.a([],n)
q=v.b
if(q.c===0)for(p=D.d.gae(u.e),o=new C.fk(p,new A.ekD(v)),m=q.b;o.C();){k=p.gS(0)
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
a4.push(C.aE(a2,C.p(a2,new C.cm(D.aO,D.e,D.Q,D.m,a2,D.p,a2,0,a0,a2),D.f,a2,a2,new C.o(j,a2,new C.bP(f,f,f,f),new C.bq(i,i,i,i),a2,a2,D.n),a2,a2,a2,a2,D.xk,a2,a2,a2),D.y,!1,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,new A.ekE(a1,v,k),a2,a2,a2,a2,a2,a2,!1,D.a8))}a4=C.a([C.bZ(D.bB,a4,D.bs,6,8)],n)
if(q.c===0&&a1.at.length!==0){p=C.a([],n)
for(o=D.d.gae(u.f),m=new C.fk(o,new A.ekq(v));m.C();){k=o.gS(0)
j=D.fh.j(0.35)
i=new C.aW(12,12)
f=new C.aA(D.b1,1,D.q,-1)
p.push(C.aE(a2,C.p(a2,new C.x("\u279c "+k.b,a2,D.o9,a2,a2,a2,a2,a2,a2,a2,a2,a2),D.f,a2,a2,new C.o(j,a2,new C.bP(f,f,f,f),new C.bq(i,i,i,i),a2,a2,D.n),a2,a2,a2,a2,B.XE,a2,a2,a2),D.y,!1,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,new A.ekr(a1,k),a2,a2,a2,a2,a2,a2,!1,D.a8))}a4.push(new C.C(D.kh,C.bZ(D.bB,p,D.bs,6,6),a2))}a4.push(D.P)
p=C.a([A.y6("Back to the room",D.oA,a1.gc3e(),D.ad),D.ab],n)
if(q.c===0){u.toString
o=A.bCb(u,q)?"Push it into the box":"Fasten every wire"
p.push(A.y6(o,B.ali,A.bCb(u,q)?new A.eks(a1):a2,D.aH))}if(q.c===1)D.d.v(p,C.a([A.y6("Pull it out",D.r2,new A.ekt(a1),D.ad),D.ab,A.y6("Cover on",R.vn,new A.eku(a1),D.aH)],n))
if(q.c>=2){q=q.w
o=q?"Take out the burnt one":"Pull it out again"
q=q?D.cj:D.ad
p.push(A.y6(o,B.bBt,new A.ekv(a1),q))}a4.push(C.A(p,D.m,a2,D.e,D.j,0,a2,a2))
D.d.v(r,a4)}a4=C.a([new A.AW(t+" job",D.aH,s,C.v(r,D.m,a2,D.e,D.Q,0,D.p),new A.ekw(a1,a5),"Phase "+(w+1)+"/3",a2)],n)
if(a1.CW)a4.push(C.bY(0,C.e1(C.p(a2,a2,D.f,B.aey,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2),!0,a2),0,0,0))
return new C.an(D.W,a2,D.aa,D.r,a4,a2)},
cmB(d){var w=this.d
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
break A}this.A5(w,!0)},
cbU(d){return C.bX(E.mT,null,new A.ek1(this),d,!0,!0,!0,D.lm,!1,!1,x.H)}}
A.vR.prototype={}
A.qT.prototype={
a4(){return"FaultKind."+this.b}}
A.u1.prototype={}
A.Ly.prototype={}
A.coo.prototype={
bwc(d,e,f){var w,v,u,t,s,r,q,p=this,o=new C.eJ()
o.dB(p.a)
w=C.B(B.d_T,x.m)
D.d.fs(w,o)
v=C.aX(x.S)
u=C.a([],x.gw)
for(t=w.length,s=0;s<w.length;w.length===t||(0,C.L)(w),++s){r=w[s]
q=B.vL.h(0,r).e
if(v.t(0,q))continue
v.L(0,q)
u.push(new A.Ly(r,o.aB(3)))
if(u.length>=d)break}p.c!==$&&C.aO()
p.c=u
p.avD()},
pu(d,e){var w=this.c
w===$&&C.c()
return D.d.b7(w,new A.cot(e))},
avD(){var w,v,u,t,s=this,r=s.d,q=r.d
q.a9(0)
if(s.pu(0,B.YY))q.L(0,72)
if(s.pu(0,B.YZ))q.L(0,75)
q=s.pu(0,B.Ma)
r.b=q
r.c=!q
r.w=s.pu(0,B.Mb)
r.x=s.pu(0,B.Z2)
r.y=s.pu(0,B.Z3)
r.z=s.pu(0,B.Z1)
r.Q=s.pu(0,B.Z4)
r.as=s.pu(0,B.Z5)
r.at=s.pu(0,B.Z0)
q=r.f
q.a9(0)
r=r.r
r.a9(0)
w=s.c
w===$&&C.c()
w=D.d.gae(w)
v=new C.fk(w,new A.cop())
while(v.C()){u=w.gS(0)
t=u.c
u=u.b
if(t)r.L(0,u)
else q.L(0,u)}},
gcBA(){var w=this.c
w===$&&C.c()
return D.d.da(w,new A.cor())},
gcIR(){var w=this.c
w===$&&C.c()
return new C.a2(w,new A.cos(),C.U(w).k("a2<1>")).gM(0)},
cIt(d){var w,v,u,t,s,r,q,p=this.c
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
aXd(d){++this.f
return new A.eE(!1,d,!1,"")},
c3j(){var w,v,u,t,s=this;++s.r;--s.e
for(w=s.d,v=w.d,w=w.e,u=0;u<4;++u){t=B.atC[u]
if(!v.t(0,t))w.L(0,t)}w=s.e
if(w<=0){s.w=!0
return B.aU5}v=w===1?"life":"lives"
return new A.eE(!1,"ZAP! You touched a live wire and got a shock. All the breakers were knocked off. "+w+" "+v+" left. Turn the breaker OFF first.",!0,"shock")},
cST(d,e){var w,v,u,t,s=this
if(s.w)return B.aU1
if(D.d.t(B.atC,e))return s.bAF(d,e)
w=s.cIt(e)
if(d==="inspect"){if(w==null||w.c)return B.aU4
return new A.eE(!0,"You look and test: "+B.vL.h(0,w.a).b,!1,"")}if(w==null||w.c)return new A.eE(!1,s.b?"Nothing needs fixing there.":"There is nothing wrong with this, so the "+C.t(B.Qt.h(0,d))+' is not needed. Use "Look and test" on things to find the problem.',!1,"")
v=B.vL.h(0,w.a)
if(d!==v.c){++s.f
return new A.eE(!1,s.b?"That is not the right tool for this problem.":"The "+C.t(B.Qt.h(0,d))+" does not fix this. "+v.b,!1,"")}u=v.f
if(u!==0){t=s.d
u=!t.d.t(0,u)&&!t.e.t(0,u)}else u=!1
if(u){if(s.b)return s.c3j()
return s.aXd("STOP! "+v.r+" The wires here are live (120 volts). Tap the breaker in the panel (with your hand) to switch it off.")}w.c=!0
s.avD()
return new A.eE(!0,v.d,!1,"")},
bAF(d,e){var w,v,u,t,s=this
if(d==="inspect"){w=s.d
if(w.d.t(0,e))w="This breaker has tripped: it sits in the middle (orange)."
else w=w.e.t(0,e)?"This breaker is switched OFF.":"This breaker is ON."
return new A.eE(!0,w,!1,"")}if(d!=="hand")return s.aXd(s.b?"Use your hand on a breaker.":"A breaker is switched with your hand, not with a "+C.t(B.Qt.h(0,d))+".")
w=s.d
v=w.d
if(v.t(0,e)){w=s.c
w===$&&C.c()
u=C.U(w).k("a2<1>")
t=C.B(new C.a2(w,new A.coq(e),u),u.k("J.E"))
if(t.length!==0){D.d.gK(t).c=!0
s.avD()
return new A.eE(!0,B.vL.h(0,D.d.gK(t).a).d,!1,"")}v.W(0,e)
return B.aUz}w=w.e
if(w.t(0,e)){w.W(0,e)
return B.aUt}w.L(0,e)
return B.aUj}}
A.aq_.prototype={
U(){var w,v=new A.AC(-0.3,0.48,46,B.Tz,$.aw())
v.f=80
w=new C.BF()
$.CB()
w.j1(0)
return new A.aD6(v,w)}}
A.aD6.prototype={
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
w=A.h6Q(v.a.d,w)
v.d=w
v.r=A.afj(w.d)},
q(){var w=this.ax
if(w!=null)w.a8(0)
this.a2()},
c3o(d,e){var w=this,v=w.ax
if(v!=null)v.a8(0)
w.m(new A.em0(w,d,e))
w.ax=C.cM(D.jv,new A.em1(w))},
aXe(){this.f.lU(46,0.48,B.Tz,-0.3)
this.m(new A.elQ(this))},
c3n(d){var w,v,u=this
if(d===0)return
w=u.d
w===$&&C.c()
v=w.cST(u.x,d)
w=v.a
if(w)A.y7()
else A.m7(180,220,0.25,"square")
if(v.d==="shock"){C.fK()
u.m(new A.elV(u))
C.bN(D.n1,new A.elW(u),x.c)}u.m(new A.elX(u,d))
w=w&&!v.c
u.c3o(v.b,w)
w=u.d
if(w.w)$.aU.x1$.push(new A.elY(u))
else if(w.gcBA()&&!u.at){u.at=!0
$.aU.x1$.push(new A.elZ(u))}},
cc0(){var w=null,v=this.c
v.toString
C.ca(w,w,!1,w,new A.elT(this),v,w,!0,!0,x.H)},
c3k(){var w=null,v=this.c
v.toString
C.ca(w,w,!0,w,new A.elP(this),v,w,!0,!0,x.H)},
auZ(){this.m(new A.elR(this))
this.aXe()},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.d
g===$&&C.c()
g=g.gcIR()
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
for(o=0;o<3;++o)p.push(new C.C(D.Ls,new C.x(o<i.d.e?"\u2764\ufe0f":"\ud83d\udda4",h,D.zl,h,h,h,h,h,h,h,h,h),h))
v=A.X4(h,i.f,new A.em8(i),s,u,r,h,new A.em9(),t,h,h,i.gc3l(),i.gc3m(),v,!1,C.a([C.A(p,D.m,h,D.e,D.Q,0,h,h)],q),h)
u=i.d.c
u===$&&C.c()
t=C.U(u)
t=new C.cQ(new C.a2(u,new A.ema(),t.k("a2<1>")),new A.emb(),t.k("cQ<1,n>")).aI(0,"  \xb7  ")
u=C.d("Customer: "+(t.length===0?"All fixed!":t),h,2,D.a2,h,h,h,B.aOo,h,h,h)
t=C.a([],q)
for(n=0;n<10;++n){m=B.ddH[n]
s=i.x===m?D.aH.j(0.25):D.c.j(0.07)
r=new C.aW(14,14)
p=i.x===m
l=p?D.aH:D.b2
k=new C.aA(l,p?2:1,D.q,-1)
l=B.djr.h(0,m)
p=C.W(l,i.x===m?D.aH:D.ad,h,h,h,19)
l=B.Qt.h(0,m)
l.toString
j=i.x===m?D.aH:D.c
t.push(new C.C(E.tt,C.aE(h,C.p(h,new C.cm(D.aO,D.e,D.j,D.m,h,D.p,h,0,C.a([p,D.bp,new C.x(l,h,new C.G(!0,j,h,h,h,h,12.5,D.H,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h),h,h,h,h,h,h,h,h,h)],q),h),D.f,h,h,new C.o(s,h,new C.bP(k,k,k,k),new C.bq(r,r,r,r),h,h,D.n),h,h,h,h,D.fT,h,h,h),D.y,!1,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,new A.emc(i,m),h,h,h,h,h,h,!1,D.a8),h))}g=C.a([new A.AW("Service call",D.aT,v,C.v(C.a([new C.bH(D.a3,h,h,u,h),D.P,new C.a7(h,52,C.cB(t,h,h,h,h,D.aO,!1),h)],q),D.m,h,D.e,D.Q,0,D.p),new A.emd(i,d),""+g+"/"+w+" fixed",h)],q)
if(i.as)g.push(C.bY(0,C.e1(C.p(h,h,D.f,B.aey,h,h,h,h,h,h,h,h,h,h),!0,h),0,0,0))
return new C.an(D.W,h,D.aa,D.r,g,h)},
cwi(d){return C.bX(E.mT,null,new A.em6(this),d,!0,!0,!0,D.lm,!1,!1,x.H)},
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
$4$wander(d,e,f,g){return this.gJ().$4$wander(d,e,f,g)},
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
A.VV.prototype={
gkn(d){return this.x}}
A.uy.prototype={}
A.O2.prototype={}
A.B_.prototype={
bcV(d,e,f){var w=this
return d>w.a-f&&d<w.b+f&&e>w.c-f&&e<w.d+f}}
A.cl2.prototype={
c3q(d){return-this.a.gfp(0)/2+d*4},
a3L(d,e){var w,v,u=this.a
if(d<-u.gfp(0)/2+6||d>u.gfp(0)/2-6||e<6||e>u.gj7(0)-6)return!1
for(u=this.b,w=u.length,v=0;v<w;++v)if(u[v].bcV(d,e,9))return!1
return!0},
aXf(d,e,f){var w,v,u=e.a,t=f.a-u,s=e.b,r=f.b-s,q=Math.max(1,D.k.dw(Math.sqrt(Math.pow(t,2)+Math.pow(r,2))/2))
for(w=0;w<=q;++w){v=w/q
if(!this.a3L(u+t*v,s+r*v))return!1}return!0},
aVZ(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=a0.a,f=h.a,e=D.k.V((g+f.gfp(0)/2)/4),d=h.c
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
if(!h.a3L(-f.gfp(0)/2+k,j))continue
i=Math.pow(-f.gfp(0)/2+k-g,2)+Math.pow(j-e,2)
if(i<o){p=new C.y(n,l)
o=i}}if(p!=null)return p}return null},
aGT(b9,c0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5=this,b6=1e9,b7=b5.aVZ(b9),b8=b5.aVZ(c0)
if(b7==null||b8==null)return C.a([b9,c0],x.f)
w=b8.a
v=b5.c3q(w)
u=b8.b
t=new C.y(v,u*4)
if(b5.aXf(0,b9,t))return C.a([b9,t],x.f)
v=b7.a
s=b5.d
s===$&&C.c()
r=b7.b
q=x.S
p=C.ew([v*s+r],q)
o=C.T(q,q)
n=x.i
m=C.F([v*s+r,0],q,n)
l=C.F([v*s+r,b5.bPE(v,r,b8)],q,n)
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
a2=D.o.G(f,s)
for(n=a2*4,e=a1*4,a3=-1;a3<=1;++a3)for(a0=a3===0,a4=!a0,a5=a1+a3,a6=a5*4,a7=a5-w,a8=-1;a8<=1;++a8){if(a0&&a8===0)continue
a9=a2+a8
b0=!0
if(a5>=0)if(a9>=0){b0=b5.c
b0===$&&C.c()
b0=a5>=b0||a9>=s||!b5.a3L(-v.gfp(0)/2+a6,a9*4)}if(b0)continue
b0=!1
if(a4)if(a8!==0)b0=!b5.a3L(-v.gfp(0)/2+a6,n)||!b5.a3L(-v.gfp(0)/2+e,a9*4)
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
while(o.ai(0,D.d.gal(b3))){w=o.h(0,D.d.gal(b3))
w.toString
b3.push(w)}w=x.f
u=C.a([b9],w)
for(r=x.c5,q=new C.dw(b3,r),q=new C.bR(q,q.gM(0),r.k("bR<ak.E>")),r=r.k("ak.E");q.C();){n=q.d
if(n==null)n=r.a(n)
e=D.o.e3(n,s)
u.push(new C.y(-v.gfp(0)/2+e*4,D.o.G(n,s)*4))}b4=C.a([D.d.gK(u)],w)
for(a5=0;a9=u.length-1,a5<a9;a5=a9){w=a5+1
for(;;){if(!(a9>w&&!b5.aXf(0,u[a5],u[a9])))break;--a9}b4.push(u[a9])}return b4},
bPE(d,e,f){return Math.sqrt(Math.pow(d-f.a,2)+Math.pow(e-f.b,2))}}
A.Jl.prototype={}
A.bp8.prototype={
bwr(d,e,f,g,h,i,j,k,l,m,n,o){var w,v,u,t,s=this.b
if(s!=null)for(w=this.as,v=1;v<s.length;++v){u=v-1
t=Math.sqrt(Math.pow(s[v].a-s[u].a,2)+Math.pow(s[v].b-s[u].b,2))
w.push(t)
this.at+=t}}}
A.bPI.prototype={
asU(d){var w,v,u=d.gfp(0),t=new A.bPJ(d,u)
switch(d.c){case"living":w=t.$1(46)
return C.a([B.fLv,new A.Jl(w.a,w.b,4,"Switching the ad on the big TV",!1,!0,!0,"ad")],x.a)
case"kitchen":return C.a([new A.Jl(new C.y(-u/2+40,42),3.141592653589793,2.8,"Getting a drink from the fridge",!0,!1,!1,""),B.fLu],x.a)
case"bathroom":return B.daN
case"bedroom":v=t.$1(44)
return C.a([new A.Jl(v.a,v.b,3.4,"Switching the ad on the TV",!1,!0,!0,"ad")],x.a)
default:return B.d2n}},
aub(a0,a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=e.a.d
d===$&&C.c()
w=d[a0]
v=A.h6G(w)
u=A.haS(w,a1)
t=u.a
s=u.c
d=e.c
r=d.length
q=a3.length===0?"Walking in":a3
d.push(A.bp9(a0,"",!1,q,-1,null,!1,!1,0.5,t.a,u.b,t.b))
for(q=e.asU(w),p=q.length,o=t,n=0;n<q.length;q.length===p||(0,C.L)(q),++n){m=q[n]
l=v.aGT(o,m.a)
k=m.e
if(k)j=C.cU(m.d,"Having",0)
else j=!1
d.push(A.bp9(a0,"",j,"Walking",-1,l,!1,!1,0,0,0,0))
o=D.d.gal(l)
d.push(A.bp9(a0,m.w,k,m.d,-1,null,m.r,m.f,m.c,o.a,m.b,o.b))}if(a2!=null){i=A.haS(w,a2)
h=i.c
l=v.aGT(o,i.a)
g=e.asU(w).length!==0&&D.d.gal(e.asU(w)).e
d.push(A.bp9(a0,"",g,"Walking to the next room",-1,l,!1,!1,0,0,0,0))
o=D.d.gal(l)
d.push(A.bp9(a0,"",g,"Opening the door",h,null,!1,!1,1.8,o.a,e.bJG(w,h),o.b))}for(f=r;f<d.length;++f)d[f].ay=s},
aUM(d,e,f){return this.aub(d,e,f,"")},
bJG(d,e){var w,v=d.w[e].a
A:{if("left"===v){w=-1.5707963267948966
break A}if("right"===v){w=1.5707963267948966
break A}w=3.141592653589793
break A}return w},
c3p(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this
j.aub(10,11,9,"Coming in through the front door")
j.aUM(9,10,5)
for(w=9,v=0;v<8;++v,w=u){u=B.cLP[v]
j.aub(5,w,u,"Walking down the hall")
j.aUM(u,5,v===7?null:5)}t=j.b
s=Math.min(1,t/120)
for(r=j.c,q=r.length,p=0,o=0,n=0;n<q;++n){m=r[n]
if(m.b==null)p+=m.f*=s
else o+=m.at}l=o/Math.max(4,t-p)
for(t=l<=0,k=0,n=0;n<q;++n){m=r[n]
if(m.b!=null)m.f=t?0.1:Math.max(0.05,m.at/l)
m.ax=k
k+=m.f}j.d!==$&&C.aO()
j.d=k},
b8E(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g={},f=this.d
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
return new A.VV(v,f.c,f.d,f.e,!1,f.w,f.x,s,!1,f.r,p,o,n,f.ay,0)}v=new A.bPK(g)
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
return new A.VV(f.a,v,s,p,!0,o.w,!1,!1,!1,o.r,"",-1,0,o.ay,m/12)}}
A.cuN.prototype={
aBB(d,e){var w,v,u=this.a
if(d<-u.gfp(0)/2+10||d>u.gfp(0)/2-10||e<-300||e>u.gj7(0)-10)return!0
for(u=this.w,w=u.length,v=0;v<w;++v)if(u[v].bcV(d,e,7))return!0
return!1},
aJp(d,e,f,g){var w,v,u,t,s,r,q=this,p=Math.sqrt(e*e+f*f)
if(p<0.000001)return q.e=!1
w=e/p
v=f/p
u=70*g
t=q.b+w*u
s=q.c+v*u
r=!0
if(q.aBB(t,s))if(!q.aBB(t,q.c))s=q.c
else{r=!q.aBB(q.b,s)
if(r)t=q.b}if(r){q.b=t
q.c=s
q.d=Math.atan2(w,v)
q.f=q.f+u/12}return q.e=r},
cBw(d,e){var w,v,u,t=this,s=t.r
if(s==null)return!1
w=s.a-t.b
v=s.b-t.c
if(Math.sqrt(w*w+v*v)<4){t.r=null
return t.e=!1}u=t.aJp(0,w,v,e)
if(!u){t.r=null
t.e=!1}return u}}
var z=a.updateTypes(["~()","~(jf)","R(nc)","E(E)","R(pI)","~(H)","R(WR)","R(a47)","aj<nd>(N)","R(Ly)","n(n,mi)","R(mi)","R(zM)","ay<~>()","R(qc)","R(Hd)","E(H)","R(O1)","R(pv)","R(O2)","R(E)","R(L6)","N3(Y)","GV(Y)","R(Er)","n(nc)","R(yr)","R(vx)","~(H{keepTour:R})","H(BY,BY)","ay<LF?>()","R(a3D)","Vd(Y)","Va(Y)","n(zM)","E(H,H)","U_(Y)","a6_(Y)","aj<nd>(aj<nd>)","N(qc)","E(N)","~(E,E,E,N,N)","~(E,E,E,N,H)","R(a44)","~(~(jf),E,E)","~(E,E,N,N,w)","~(H,E,E,n,w)","~(E,E,H{alongX:R})","n(Ly)","~(aj<E>)","~(aj<E>{col:w})","~(H,E,w{h:N,w:N})","~(H,aj<E>)","~(H,aj<E>,w,N,n)","~(H,n,E,E,E,R)","R(Wb)","~(E,E,E,E)","pv()","aj<E>(aj<E>)","~(n,aj<E>{r:N})","~(n,E,E)","~(nc,E,n)","~(n,E,E,H)","E(n)","O2(O1,N,N{wander:N})","R(H)","qc(N)","~(u,at)","H(pI)","~(H,E,E{col:w,round:R})","d1()","N(BY)","~(aj<E>,w)"])
A.bVv.prototype={
$1(d){var w=this.a
w=w===0?d:A.bBN(d,w)
return w.ad(0,this.b)},
$S:z+3}
A.bVw.prototype={
$1(d){var w=this.a
return w===0?d:A.bBN(d,w)},
$S:z+3}
A.bVu.prototype={
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
A.bVx.prototype={
$1(d){var w=d*2*3.141592653589793/this.b
return this.a.aF(0,Math.cos(w)).ad(0,this.c.aF(0,Math.sin(w)))},
$S:z+16}
A.bVt.prototype={
$2(d,e){var w=3.141592653589793*d/this.a,v=6.283185307179586*e/this.b
return new A.E(Math.sin(w)*Math.cos(v),Math.cos(w),Math.sin(w)*Math.sin(v))},
$S:z+35}
A.bVy.prototype={
$1(d){var w=d*2*3.141592653589793/this.b
return this.a.aF(0,Math.cos(w)).ad(0,this.c.aF(0,Math.sin(w)))},
$S:z+16}
A.fKP.prototype={
$1(d){var w=d.b,v=this.a,u=d.c,t=this.b
return new A.E(d.a,w*v-u*t,w*t+u*v)},
$S:z+3}
A.fKN.prototype={
$1(d){var w=this.a
return w===0?d:A.bBN(d,w)},
$S:z+3}
A.fKO.prototype={
$1(d){var w=this,v=w.b===0?d:w.c.$1(d)
return J.fLN(w.a.$1(v),w.d)},
$S:z+3}
A.fKM.prototype={
$1(d){var w=this.b===0?d:this.c.$1(d)
return this.a.$1(w)},
$S:z+3}
A.fKG.prototype={
$4(d,e,f,g){var w=-d
return 0.5*(2*e+(w+f)*this.a+(2*d-5*e+4*f-g)*this.b+(w+3*e-3*f+g)*this.c)},
$S:1783}
A.bGh.prototype={
$1(d){var w=this,v=-d.c,u=d.b,t=w.a,s=w.b,r=v*t-u*s,q=d.a,p=w.c,o=w.d
return new A.E(q*p-r*o,u*t+v*s,q*o+r*p)},
$S:z+3}
A.bGg.prototype={
$1(d){var w=this,v=w.a
return v.d.ad(0,w.b.$1(new A.E(w.c*d,w.d*d,d-v.c)))},
$S:z+40}
A.clY.prototype={
$1(d){var w=this,v=d.a,u=w.a,t=d.c,s=w.b,r=-v*s+t*u,q=d.b,p=w.c,o=w.d
return new A.E(v*u+t*s,q*p-r*o,-(q*o+r*p))},
$S:z+3}
A.clZ.prototype={
$1(d){var w=this.a.c,v=this.b.$1(d.aC(0,w.d))
return new A.E(v.a,v.b,v.c+w.c)},
$S:z+3}
A.clU.prototype={
$1(d){return d.c<1},
$S:z+20}
A.clV.prototype={
$1(d){return A.hKu(d,this.b,this.c,this.a.gaGZ(0))},
$S:1784}
A.clX.prototype={
$1(d){var w,v=d.b
if(v!==0){w=this.a.h(0,v)
w.toString
v=this.b.h(0,v)
v.toString
v=w/v}else v=d.r
return v},
$S:z+71}
A.clW.prototype={
$2(d,e){var w,v,u=D.o.aL(d.a,e.a)
if(u!==0)return u
w=this.a
v=J.CD(w.$1(e),w.$1(d))
return v!==0?v:D.o.aL(d.c,e.c)},
$S:z+29}
A.eSj.prototype={
$1(d){var w=this.a,v=w.r,u=d.a
w.r=d
w.a.d.aGX(D.k.D((u-v.a)/1e6,0,0.1))
w.f.sp(0,u/1e6)},
$S:8}
A.eSi.prototype={
$1(d){if(x.ej.b(d))this.a.a.d.anv(1+d.grY().b*0.0012)},
$S:248}
A.eSf.prototype={
$1(d){var w=this.a
return w.w=w.a.d.c},
$S:235}
A.eSg.prototype={
$1(d){var w,v,u,t=this.a,s=t.a
if(d.w>=2){s=s.d
s.anv(t.w/d.d/s.c)}else{t=s.d
s=d.a
t.ax=t.at=null
w=t.a+=-s.a*0.009
if(!t.z){v=t.x
u=t.y
t.a=D.k.D(w,v-u,v+u)}t.b=D.k.D(t.b+s.b*0.009,t.r,t.w)
t.aZ()}},
$S:214}
A.eSh.prototype={
$1(d){var w=this.a
w=w.a.f.$1(w.e.cPJ(d.b))
return w},
$S:49}
A.eSd.prototype={
$1(d){return this.a.x=d.b},
$S:23}
A.eSe.prototype={
$0(){var w,v=this.a,u=v.a.Q
u.toString
v=v.x
w=this.b.gY(0)
return u.$2(v,w==null?D.au:w)},
$S:0}
A.bOv.prototype={
$0(){var w=0,v=C.j(x.d),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j
var $async$$0=C.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return C.b($.rL().jN(0,q.a),$async$$0)
case 7:p=e
m=q.b
l=x.N
o=new A.LF(m,C.T(l,x.aB),C.T(l,x.bB),C.a([],x.X),C.T(l,x.gN))
w=8
return C.b(o.OA(p),$async$$0)
case 8:$.fNe.n(0,m,o)
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
$.fNd.W(0,q.b)
w=r.pop()
break
case 6:case 1:return C.h(u,v)
case 2:return C.f(s.at(-1),v)}})
return C.i($async$$0,v)},
$S:z+30}
A.bOn.prototype={
$1(d){return D.a.t(d,"hips")},
$S:3}
A.bOk.prototype={
$2(d,e){var w,v=Math.floor(d),u=Math.floor(e),t=this.b,s=t.a,r=Math.min(s-1,D.k.bu((d-v)*s))
v=t.b
w=(Math.min(v-1,D.k.bu((e-u)*v))*s+r)*4
s=this.a
t=t.c
s.c=s.c+t[w]
s.b=s.b+t[w+1]
s.a=s.a+t[w+2]},
$S:381}
A.bOj.prototype={
$1(d){return D.k.V(D.k.D(d,0,1)*255)},
$S:241}
A.bOp.prototype={
$2(d,e){var w,v,u,t,s,r=x.S,q=C.T(r,r)
r=this.b
w=new Int32Array(r)
for(v=this.c.a,u=this.a,t=0;t<r;++t){s=t*3
w[t]=q.cg(0,(D.k.bu((v[s]-u.c)/d)*1024+D.k.bu((v[s+1]-u.b)/d))*1024+D.k.bu((v[s+2]-u.a)/d),new A.bOq(q))}e[0]=q.a
return w},
$S:1786}
A.bOq.prototype={
$0(){return this.a.a},
$S:108}
A.bOr.prototype={
$1(d){var w,v,u,t,s,r,q=C.aX(x.S)
for(w=this.a.e,v=w.length,u=0;u<v;u+=3){t=d[w[u]]
s=d[w[u+1]]
r=d[w[u+2]]
if(t===s||s===r||t===r)continue
q.L(0,A.h07(t,s,r))}return q.a},
$S:1787}
A.bOo.prototype={
$2(d,e){var w,v,u,t=this.a,s=this.b.h(0,d)
s.toString
w=J.a5(e)
v=D.k.V(w.h(e,0)/w.h(e,3))
u=D.k.V(w.h(e,1)/w.h(e,3))
w=D.k.V(w.h(e,2)/w.h(e,3))
t.$flags&2&&C.ai(t)
t[s]=(v<<16|u<<8|w|4278190080)>>>0},
$S:1788}
A.bOl.prototype={
$0(){return new Float64Array(this.a*16)},
$S:703}
A.bOm.prototype={
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
else A.h08(k,n*16,h,0,k,j)
k=u.f
k===$&&C.c()
k=k[a1]
j=k.length
m=0
for(;m<k.length;k.length===j||(0,C.L)(k),++m)l.$1(k[m])},
$S:26}
A.bOu.prototype={
$1(d){var w,v,u
for(w=this.a.z,w=new C.hG(w,w.r,w.e);w.C();){v=w.d
u=v.toLowerCase()
if(C.cU(u,d,0))return v}return null},
$S:275}
A.bOs.prototype={
$1(d){return!D.a.t(d.toLowerCase(),"pose")},
$S:3}
A.bOt.prototype={
$0(){var w=this.a.z
return new C.cu(w,C.a3(w).k("cu<1>")).gK(0)},
$S:22}
A.bOw.prototype={
$1(d){var w=this,v=w.c,u=d*3,t=w.a,s=w.d,r=(v[u]-t.b)*s,q=v[u+1],p=w.b.ay,o=(v[u+2]-t.a)*s
t=w.e
u=w.f
return new A.E(r*t+o*u+w.r,(q-p)*s,-r*u+o*t+w.w)},
$S:z+16}
A.bHl.prototype={
$1(d){return!d.f},
$S:z+17}
A.bHi.prototype={
$1(d){return d.b===this.a.a.a},
$S:z+15}
A.bHj.prototype={
$1(d){return d.b===this.a&&d.c===this.b},
$S:z+15}
A.bHk.prototype={
$1(d){return d.a<0},
$S:z+21}
A.bHp.prototype={
$1(d){return d.b===this.a.a.a},
$S:z+15}
A.bHn.prototype={
$4$wander(d,e,f,g){var w=D.d.b7(this.a.d,new A.bHo(d)),v=d.a,u=w?"\ud83d\udcde ":"",t=d.gaBx(0)
d.gTf()
return new A.O2(v.a,this.b,e,f,0,v.e,u+v.b+" "+t,w,g)},
$3(d,e,f){return this.$4$wander(d,e,f,0)},
$S:z+64}
A.bHo.prototype={
$1(d){return d.b===this.a.a.a},
$S:z+15}
A.bHm.prototype={
$1(d){return d.a.c===this.b&&d.r<0&&!this.a.bdN(d)},
$S:z+17}
A.bHr.prototype={
$1(d){var w=d.c
return w==="bathroom"||w==="kitchen"},
$S:z+7}
A.dKc.prototype={
$0(){return this.b.d=this.a.a},
$S:0}
A.dKd.prototype={
$1(d){return this.a.c2T()},
$S:12}
A.dKp.prototype={
$0(){},
$S:0}
A.dKj.prototype={
$0(){return this.a.w=this.b},
$S:0}
A.dKk.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new A.dKi(w))},
$S:0}
A.dKi.prototype={
$0(){return this.a.w=null},
$S:0}
A.dK8.prototype={
$1(d){return B.aDW},
$S:z+22}
A.dK9.prototype={
$0(){},
$S:0}
A.dKs.prototype={
$1(d){return B.aDW},
$S:z+22}
A.dKt.prototype={
$0(){},
$S:0}
A.dKr.prototype={
$0(){var w=this.a
return w.m(new A.dKq(w,this.b))},
$S:0}
A.dKq.prototype={
$0(){return this.a.r=this.b},
$S:0}
A.dK7.prototype={
$0(){return this.a.aaj(this.b)},
$S:0}
A.dKe.prototype={
$0(){return this.a.Ih(this.b.bbD(this.c))},
$S:0}
A.dKf.prototype={
$0(){return this.a.Ih(this.b.aIv(this.c))},
$S:0}
A.dKg.prototype={
$0(){return this.a.Ih(this.b.b8a(this.c))},
$S:0}
A.dKh.prototype={
$0(){return this.a.aio(this.b)},
$S:0}
A.dKb.prototype={
$1(d){var w,v,u=null,t=this.b,s=this.c,r=t.e[s],q=t.c
q===$&&C.c()
q=q[r.a].a
w=this.a
v=x.p
s=C.A(C.a([new A.abv(q.e,44,u),D.av,C.D(C.d("Bed "+(s+1)+": "+q.b,u,u,u,u,u,u,D.i3,u,u,u),1),w.OP("\ud83d\udc89 Treat",new A.dKa(w,t,s),D.cj)],v),D.m,u,D.e,D.j,0,u,u)
t=r.b
return C.v(C.a([s,D.P,w.Vp("Care",t,t<30?D.ay:D.aT),w.Vp("Getting better",r.c,D.b8)],v),D.F,u,D.e,D.j,0,D.p)},
$S:338}
A.dKa.prototype={
$0(){return this.a.Ih(this.b.cSB(this.c))},
$S:0}
A.dKm.prototype={
$0(){return this.a.Ih(this.b.b92("food"))},
$S:0}
A.dKn.prototype={
$0(){return this.a.Ih(this.b.b92("medicine"))},
$S:0}
A.dKo.prototype={
$0(){var w=0,v=C.j(x.H),u,t=this,s,r
var $async$$0=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:w=3
return C.b(A.aRw(),$async$$0)
case 3:$.Hf=null
s=t.a
if(s.c==null){w=1
break}r=s.f
if(r!=null)r.a8(0)
$.fMx=null
s.m(new A.dKl(s))
s.YH()
case 1:return C.h(u,v)}})
return C.i($async$$0,v)},
$S:1}
A.dKl.prototype={
$0(){return this.a.d=null},
$S:0}
A.dKu.prototype={
$0(){return C.a6(this.a,!1).lM()},
$S:0}
A.dKv.prototype={
$1(d){return d.a>=0},
$S:z+21}
A.foO.prototype={
$2(d,e){var w
A:{if("black"===d){w=e.a===25?"The black wire carries the power (hot). It never goes on the green ground screw. Hot goes to a BRASS screw.":"The black (hot) wire goes on a BRASS screw, not on the silver one. Silver is for white (neutral)."
break A}if("white"===d){w=e.a===25?"The white wire is the neutral. The green screw is only for the ground wire. Neutral goes to a SILVER screw.":"The white (neutral) wire goes on a SILVER screw, not on brass. Brass is for the black (hot) wire."
break A}w="The bare copper ground wire only goes on the GREEN screw. It keeps you safe if something goes wrong."
break A}return w},
$S:z+10}
A.foP.prototype={
$2(d,e){return d==="ground"?y.j:"A black (hot) wire never goes on the green ground screw. The two black wires go on the two BRASS screws."},
$S:z+10}
A.foQ.prototype={
$2(d,e){var w
if(e.e)w="Those are the LOAD screws. They are covered with tape because power must come in on the LINE side. If you wire the LOAD side the GFCI will not protect you."
else A:{if("black"===d){w="The black (hot) wire goes on the BRASS LINE screw."
break A}if("white"===d){w="The white (neutral) wire goes on the SILVER LINE screw."
break A}w=y.j
break A}return w},
$S:z+10}
A.foR.prototype={
$2(d,e){var w
A:{if("black"===d){w="The black (hot) wire joins the fixture BLACK wire. Not the white one, and never the green ground."
break A}if("white"===d){w="The white (neutral) wire joins the fixture WHITE wire. Not the black one, and never the green ground."
break A}w="The bare copper ground wire joins the fixture GREEN ground wire only."
break A}return w},
$S:z+10}
A.foS.prototype={
$2(d,e){var w
A:{if("black"===d){w="The black (hot) wire joins the fan BLACK wire. Not the white one, and never the green ground."
break A}if("white"===d){w="The white (neutral) wire joins the fan WHITE wire. Not the black one, and never the green ground."
break A}w="The bare copper ground wire joins the fan GREEN ground wire only."
break A}return w},
$S:z+10}
A.fnF.prototype={
$1(d){return d.a===this.a},
$S:z+31}
A.fL7.prototype={
$1(d){return d.a},
$S:z+34}
A.fnL.prototype={
$1(d){return D.d.iC(this.a.f,new A.fnM(d)).f},
$S:73}
A.fnM.prototype={
$1(d){return d.a===this.a},
$S:z+11}
A.fnJ.prototype={
$1(d){return D.d.iC(this.a.e,new A.fnK(d)).e},
$S:14}
A.fnK.prototype={
$1(d){return d.a===this.a},
$S:z+12}
A.fnH.prototype={
$1(d){return d.e==="hot"},
$S:z+12}
A.fnI.prototype={
$1(d){return d.e==="neutral"},
$S:z+12}
A.flJ.prototype={
$5(d,e,f,g,h){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=j.a
i.b=d
w=j.b
v=w.b
u=C.a3(v).k("cK<1,2>")
t=u.k("a2<J.E>")
s=C.B(new C.a2(new C.cK(v,u),new A.flK(g),t),t.k("J.E"))
r=g==="ground"
q=r?B.x1:h
p=r?0.6:0.3
if(w.c>0){o=e.ad(0,B.fEg)
i.jT(A.agJ(C.a([e,e.ad(0,B.fCR),o],x.o),4),0.085,q,!1,p,8)
return}if(s.length!==0){n=A.bzT(j.c,D.d.gK(s).a,w)
w=A.zG(e,n,0.5)
v=n.a>0
m=w.ad(0,new A.E(v?0.5:-0.5,0.2,0.9))
w=e.ad(0,B.fGO)
if(j.d)v=0
else v=v?0.06:-0.06
l=A.agJ(C.a([e,w,m,n.ad(0,new A.E(v,0,0.08)),n],x.o),5)
k=D.d.dq(l,0,D.k.bu(l.length*0.8))
i.jT(k,0.085,q,!1,p,8)
if(!r)i.jT(D.d.fJ(l,k.length-1),0.061200000000000004,B.x1,!1,0.6,8)}else{l=A.agJ(C.a([e,e.ad(0,B.fAy),A.zG(e,f,0.6),f],x.o),5)
k=r?l:D.d.dq(l,0,D.k.bu(l.length*0.86))
i.jT(k,0.085,q,!1,p,8)
if(!r)i.jT(D.d.fJ(l,k.length-1),0.061200000000000004,B.x1,!1,0.6,8)}},
$S:z+46}
A.flK.prototype={
$1(d){return d.b===this.a},
$S:1790}
A.f7T.prototype={
$2(d,e){var w,v=this.a
v.b=d
w=A.Ge(e,0.9,6)
if(this.b)v.jT(w,0.2,B.Wf,!1,0.35,10)
this.c.push(D.d.gal(w))},
$S:z+52}
A.f9c.prototype={
$6$taped(d,e,f,g,h,i){var w,v,u,t=this.a
t.e=0.9
t.b=d
w=this.b
v=w.a+e*0.75
u=w.b+f
w=w.c-0.45
t.bG(new A.E(v,u,w),B.fHP,h,0.7)
t.e5(new A.E(v,u,w),new A.E(v+e*0.22,u,w),0.17,g,0.9,12)
t.bO(new A.E(v+e*0.23,u,w),B.fFT,B.E1)
if(i)t.bG(new A.E(v+e*0.05,u,w),B.fFJ,D.cn,0.2)},
$5(d,e,f,g,h){return this.$6$taped(d,e,f,g,h,!1)},
$S:1791}
A.fly.prototype={
$1(d){return d.a===this.a},
$S:z+18}
A.flz.prototype={
$0(){return B.aiD},
$S:z+57}
A.fL6.prototype={
$1(d){var w=d>60?62:99
return Math.min(d*0.5625,w)},
$S:5}
A.fL3.prototype={
$1(d){return d>40?30+d/2:58},
$S:5}
A.fL4.prototype={
$2(d,e){return D.k.aL(d.a,e.a)},
$S:1792}
A.fL5.prototype={
$2(d,e){var w=this.a
if(e-d>w.a-w.b){w.b=d
w.a=e}},
$S:381}
A.bP0.prototype={
$1(d){return d},
$S:142}
A.bPC.prototype={
$1(d){return d.a==="Jobs"},
$S:z+27}
A.bPD.prototype={
$1(d){return new A.qc("back",d,5)},
$S:z+66}
A.bPH.prototype={
$1(d){return d.gjy()},
$S:z+7}
A.bPG.prototype={
$1(d){var w=d.c
return(w==="bathroom"||w==="kitchen")&&d.gl3()},
$S:z+7}
A.bPF.prototype={
$1(d){var w=d.c
return w==="bathroom"||w==="kitchen"},
$S:z+7}
A.bPE.prototype={
$1(d){return d.gjy()&&d.gl3()},
$S:z+7}
A.e2h.prototype={
$1(d){return!(d.gjy()&&d.gl3())},
$S:z+7}
A.e2e.prototype={
$1(d){var w,v=this.a.a.f
A:{if("wiring"===v){w=!d.gjy()
break A}if("plumbing"===v){w=!d.gl3()
break A}w=!(d.gjy()&&d.gl3())
break A}return w},
$S:z+7}
A.e2f.prototype={
$1(d){var w,v=this.a,u=v.gaju()
if(u==null||v.c==null||v.cx!=null)return
v.m(v.gA4())
w=u.f
if(w.length!==0&&D.d.gK(w)!==v.fy){w=D.d.gK(w)
v.fy=w
v.ka(w)}},
$S:12}
A.e2g.prototype={
$1(d){var w,v=this.a
if(v.c==null)return
w=v.d
w===$&&C.c()
if(w.a.length!==0)v.ka(v.bYb())
else{w=v.a.f
if(w.length!==0){A:{if("wiring"===w){w="This room needs wiring: press the Wiring button, or tap the red outlet or the light."
break A}if("plumbing"===w){w="This room needs plumbing: press the Plumbing button, or tap the toilet or the sink."
break A}w="Walk through the house and fix what the signs say is wrong."
break A}v.ka(w)}}},
$S:8}
A.e1E.prototype={
$0(){var w=this.a
w.ax=this.b
w.ay=this.c},
$S:0}
A.e1F.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new A.e1D(w))},
$S:0}
A.e1D.prototype={
$0(){return this.a.ax=null},
$S:0}
A.e1G.prototype={
$0(){var w=this.a
w.r=this.b
w.Q=0
w.as=-1
w.at=0
w.k9()},
$S:0}
A.e10.prototype={
$0(){var w=this.a,v=w.d
v===$&&C.c()
v.e=this.b
w.Q=0
w.as=-1
w.at=0
w.ax=null
w.k9()},
$S:0}
A.e1O.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&C.c()
w=u.d
w===$&&C.c()
u=w[u.e]
u.db=!u.db
v.k9()},
$S:0}
A.e1b.prototype={
$0(){var w=this.a,v=this.b
w.Q=v-100
w.at=v
w.k9()},
$S:0}
A.e1c.prototype={
$0(){var w=this.a,v=this.b
w.as=v-300
w.at=v},
$S:0}
A.e1d.prototype={
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
A.e1e.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&C.c()
w=u.d
w===$&&C.c()
w[u.e].at.L(0,this.b)
v.k9()},
$S:0}
A.e1f.prototype={
$0(){var w=this.a
if(w.c==null)return
w.m(new A.e1a(w,this.b))
w.OS(this.c)},
$S:11}
A.e1a.prototype={
$0(){var w,v=this.a.d
v===$&&C.c()
w=v.d
w===$&&C.c()
return w[v.e].at.W(0,this.b)},
$S:0}
A.e1g.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&C.c()
w=u.d
w===$&&C.c()
w[u.e].fy=!0
v.k9()},
$S:0}
A.e1C.prototype={
$1(d){return new C.e0(new A.e1A(this.a,this.b,this.c),null)},
$S:20}
A.e1A.prototype={
$2(d,e){var w,v,u,t,s=null,r=new A.e1B(this.a,e),q=this.b,p=q.a,o=C.d(p.b+" "+q.gaBx(0),s,s,s,s,s,s,L.rz,s,s,s)
p=C.d(p.f,s,s,s,s,s,s,D.D2,s,s,s)
w=C.d("Now: "+q.gTf()+"\nFood "+D.k.V(100-q.b)+"%   Health "+D.k.V(q.c)+"%   Home "+D.k.V(q.d)+"%",s,s,s,s,s,s,B.aP5,s,s,s)
v=this.c
u=x.p
t=C.a([r.$2("\ud83c\udf5e Feed",new A.e1x(v,q))],u)
if(q.e)t.push(r.$3$col("\ud83d\udc8a Medicine",new A.e1y(v,q),D.by))
if(q.e||q.c<60)t.push(r.$3$col("\ud83c\udfe5 Hospital",new A.e1z(v,q),D.cj))
return C.bn(!0,new C.C(D.bW,C.v(C.a([o,p,D.P,w,D.ac,C.bZ(D.bB,t,D.bs,8,8)],u),D.F,s,D.e,D.Q,0,D.p),s),!0,!1,D.af,!0,!0)},
$S:83}
A.e1B.prototype={
$3$col(d,e,f){var w=null,v=f.j(0.22),u=C.m(12),t=C.I(f,D.q,1)
return C.aE(w,C.p(w,C.d(d,w,w,w,w,w,w,C.l(w,w,f,w,w,w,w,w,w,w,w,13,w,w,D.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),D.f,w,w,new C.o(v,w,t,u,w,w,D.n),w,w,w,w,P.AM,w,w,w),D.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new A.e1w(this.a,e,this.b),w,w,w,w,w,w,!1,D.a8)},
$2(d,e){return this.$3$col(d,e,D.aH)},
$S:1793}
A.e1w.prototype={
$0(){var w,v=this.b.$0()
this.c.$1(new A.e1v())
w=this.a
w.m(w.gA4())
w.ka(v)},
$S:0}
A.e1v.prototype={
$0(){},
$S:0}
A.e1x.prototype={
$0(){return this.a.bbD(this.b)},
$S:22}
A.e1y.prototype={
$0(){return this.a.aIv(this.b)},
$S:22}
A.e1z.prototype={
$0(){return this.a.b8a(this.b)},
$S:22}
A.e1m.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m=null,l=x.p,k=C.a([],l)
for(w=D.d.gae(B.a13),v=new C.fk(w,new A.e1j()),u=this.a,t=this.b;v.C();){s=w.gS(0)
r=D.c.j(0.08)
q=new C.aW(12,12)
p=u.d
p===$&&C.c()
o=p.d
o===$&&C.c()
n=new C.aA(o[p.e].cy.h(0,t)===s.a?D.aH:D.b2,1,D.q,-1)
k.push(C.aE(m,C.p(m,new C.x(s.c+" "+s.b,m,D.Tf,m,m,m,m,m,m,m,m,m),D.f,m,m,new C.o(r,m,new C.bP(n,n,n,n),new C.bq(q,q,q,q),m,m,D.n),m,m,m,m,D.eh,m,m,m),D.y,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new A.e1k(u,d,t,s),m,m,m,m,m,m,!1,D.a8))}w=u.d
w===$&&C.c()
v=w.d
v===$&&C.c()
if(v[w.e].cy.h(0,t)!=null)k.push(C.aE(m,C.p(m,B.fn8,D.f,m,m,new C.o(D.er,m,m,C.m(12),m,m,D.n),m,m,m,m,D.eh,m,m,m),D.y,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new A.e1l(u,d,t),m,m,m,m,m,m,!1,D.a8))
return C.bn(!0,new C.C(D.bW,C.v(C.a([B.fjq,D.S,C.bZ(D.bB,k,D.bs,8,8)],l),D.F,m,D.e,D.Q,0,D.p),m),!0,!1,D.af,!0,!0)},
$S:28}
A.e1j.prototype={
$1(d){return!(d.d>70||d.e)},
$S:z+18}
A.e1k.prototype={
$0(){var w,v,u,t=this
C.a6(t.b,!1).O(null)
w=t.a
v=t.d
w.m(new A.e1i(w,t.c,v))
u=v.d>0||v.e
v=v.b
w.ka(u?v+" is on and playing NGMY ads. Tap it to watch full screen.":v+" is plugged in and running.")
A.m7(820,70,0.25,"tri")},
$S:0}
A.e1i.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&C.c()
w=u.d
w===$&&C.c()
w[u.e].cy.n(0,this.b,this.c.a)
v.k9()},
$S:0}
A.e1l.prototype={
$0(){C.a6(this.b,!1).O(null)
var w=this.a
w.m(new A.e1h(w,this.c))
w.ka("Unplugged.")},
$S:0}
A.e1h.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&C.c()
w=u.d
w===$&&C.c()
w[u.e].cy.W(0,this.b)
v.k9()},
$S:0}
A.e29.prototype={
$1(d){return new C.e0(new A.e27(this.a),null)},
$S:20}
A.e27.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o=null,n=this.a,m=new A.e28(n,e),l=n.d
l===$&&C.c()
w=l.d
w===$&&C.c()
l=C.d("TV in "+w[l.e].b,o,o,o,o,o,o,D.du,o,o,o)
w=x.p
v=C.a([],w)
for(u=D.d.gae(B.a13),t=new C.fk(u,new A.e21());t.C();){s=u.gS(0)
r=s.b
q=n.d
p=q.d
p===$&&C.c()
q=p[q.e].fr===s.a?D.aH:D.fh
v.push(m.$3$color(r,new A.e22(n,s),q))}v=C.bZ(D.bB,v,D.bs,8,8)
u=C.a([],w)
t=n.d
s=t.d
s===$&&C.c()
t=s[t.e]
if(t.fr!=null){t=t.fy?"\u23fb Turn this TV off":"\u23fb Turn this TV on"
u.push(m.$2(t,new A.e23(n)))}t=n.d
s=t.d
s===$&&C.c()
if(s[t.e].fr!=null&&t.a.length===0)u.push(m.$3$color("\ud83d\uddd1 Take it down",new A.e24(n),D.er))
if(n.d.a.length===0)u.push(m.$3$color("\ud83d\udcfa A TV in every room, all on",new A.e25(n),D.d_))
if(n.d.a.length===0)u.push(m.$3$color("\u23fb All TVs off",new A.e26(n),D.bn))
return C.bn(!0,new C.C(D.bW,C.v(C.a([l,D.S,v,D.S,C.bZ(D.bB,u,D.bs,8,8)],w),D.F,o,D.e,D.Q,0,D.p),o),!0,!1,D.af,!0,!0)},
$S:83}
A.e28.prototype={
$3$color(d,e,f){var w=null,v=f.j(0.4),u=C.m(12),t=C.I(f,D.q,1)
return C.aE(w,C.p(w,C.d(d,w,w,w,w,w,w,I.zj,w,w,w),D.f,w,w,new C.o(v,w,t,u,w,w,D.n),w,w,w,w,P.AM,w,w,w),D.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new A.e20(this.a,e,this.b),w,w,w,w,w,w,!1,D.a8)},
$2(d,e){return this.$3$color(d,e,D.fh)},
$S:1794}
A.e20.prototype={
$0(){this.b.$0()
this.c.$1(new A.e2_())
var w=this.a
w.m(w.gA4())},
$S:0}
A.e2_.prototype={
$0(){},
$S:0}
A.e21.prototype={
$1(d){return d.d>0||d.e},
$S:z+18}
A.e22.prototype={
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
A.e23.prototype={
$0(){var w,v=this.a.d
v===$&&C.c()
w=v.d
w===$&&C.c()
v=w[v.e]
return v.fy=!v.fy},
$S:0}
A.e24.prototype={
$0(){var w,v=this.a.d
v===$&&C.c()
w=v.d
w===$&&C.c()
v=w[v.e]
v.fr=null
v.fy=!1},
$S:0}
A.e25.prototype={
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
A.e26.prototype={
$0(){var w,v,u=this.a.d
u===$&&C.c()
u=u.gqq()
w=u.length
v=0
for(;v<w;++v)u[v].fy=!1},
$S:0}
A.e1X.prototype={
$1(d){return new C.e0(new A.e1W(this.a),null)},
$S:20}
A.e1W.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m=null,l=x.p,k=C.a([],l)
for(w=B.aCM.gdK(B.aCM),w=w.gae(w),v=this.a;w.C();){u=w.gS(w)
t=$.bB2
s=u.a
t=t===s?D.aT.j(0.25):D.c.j(0.07)
r=new C.aW(12,12)
s=$.bB2===s
q=s?D.aT:D.b2
p=new C.aA(q,s?2:1,D.q,-1)
q=u.b
s=s?D.aT:D.c
k.push(C.aE(m,C.p(m,new C.x(q,m,new C.G(!0,s,m,m,m,m,13,D.u,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m,m,m,m,m,m,m,m,m),D.f,m,m,new C.o(t,m,new C.bP(p,p,p,p),new C.bq(r,r,r,r),m,m,D.n),m,m,m,m,D.ix,m,m,m),D.y,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new A.e1T(v,e,u),m,m,m,m,m,m,!1,D.a8))}k=C.bZ(D.bB,k,D.bs,8,8)
w=C.a([],l)
for(o=0;o<5;++o){n=B.dc2[o]
u=v.db===n?D.aH.j(0.25):D.c.j(0.07)
t=new C.aW(12,12)
s=v.db===n
r=s?D.aH:D.b2
p=new C.aA(r,s?2:1,D.q,-1)
if(n<60)r=""+n+" seconds"
else r=n===60?"1 minute":""+(n/60|0)+" minutes"
s=s?D.aH:D.c
w.push(C.aE(m,C.p(m,new C.x(r,m,new C.G(!0,s,m,m,m,m,13,D.u,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m,m,m,m,m,m,m,m,m),D.f,m,m,new C.o(u,m,new C.bP(p,p,p,p),new C.bq(t,t,t,t),m,m,D.n),m,m,m,m,D.ix,m,m,m),D.y,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new A.e1U(v,e,n),m,m,m,m,m,m,!1,D.a8))}return C.bn(!0,new C.C(D.bW,C.v(C.a([B.fpd,D.at,B.ftD,D.S,B.fmm,D.an,k,D.ac,C.bZ(D.bB,w,D.bs,8,8),D.aA,C.dq(A8.alA,B.far,new A.e1V(v,d),m)],l),D.F,m,D.e,D.Q,0,D.p),m),!0,!1,D.af,!0,!0)},
$S:83}
A.e1T.prototype={
$0(){var w=this.c
this.b.$1(new A.e1R(w))
A.fNf(w.a)
this.a.m(new A.e1S())},
$S:0}
A.e1R.prototype={
$0(){return $.bB2=this.a.a},
$S:0}
A.e1S.prototype={
$0(){},
$S:0}
A.e1U.prototype={
$0(){return this.b.$1(new A.e1Q(this.a,this.c))},
$S:0}
A.e1Q.prototype={
$0(){return this.a.db=this.b},
$S:0}
A.e1V.prototype={
$0(){C.a6(this.b,!1).O(null)
var w=this.a
w.ctk(w.db)},
$S:0}
A.e1J.prototype={
$0(){var w=this.a,v=w.d
v===$&&C.c()
v.e=this.b
w.ax=null
w.k9()},
$S:0}
A.e1K.prototype={
$1(d){return this.a.cxy()},
$S:12}
A.e1L.prototype={
$0(){},
$S:0}
A.e1Y.prototype={
$0(){return this.a.dy=this.b.y},
$S:0}
A.e1P.prototype={
$0(){var w=this.b
w.k9()
w.k2=this.a.a;++w.k3},
$S:0}
A.e1N.prototype={
$0(){var w=this.a
w.cx=null
w.dy=""},
$S:0}
A.e1H.prototype={
$1(d){return this.a.cA6()},
$S:12}
A.e1I.prototype={
$0(){},
$S:0}
A.e1M.prototype={
$0(){},
$S:0}
A.e16.prototype={
$3(d,e,f){var w=null,v=this.a,u=D.w.j(0.6),t=C.m(16),s=C.I(D.b8,D.q,1.6)
return C.o6(D.jf,C.p(w,C.W(d,D.c,w,w,w,28),D.f,w,w,new C.o(u,w,s,t,w,w,D.n),w,58,w,D.h7,w,w,w,58),w,new A.e17(v),new A.e18(v,e,f),w,w,w,w,new A.e19(v))},
$S:1795}
A.e18.prototype={
$1(d){var w=this.a
w.p2=this.b
w.p3=this.c},
$S:79}
A.e19.prototype={
$1(d){var w=this.a
w.p3=w.p2=0},
$S:135}
A.e17.prototype={
$1(d){var w=this.a
w.p3=w.p2=0},
$S:200}
A.e12.prototype={
$1(d){var w=this.a,v=w.id
w=w.k2
return v==="ptrap"?new A.a8t(w,null):new A.a3U(w,null)},
$S:1796}
A.e13.prototype={
$1(d){var w=this.a
return new A.GV(w.id,w.k1,null)},
$S:z+23}
A.e2a.prototype={
$1(d){var w=this.a
return new A.GV(w.a,w.c,null)},
$S:z+23}
A.e15.prototype={
$1(d){return A.fPu(!1,this.a.CW,!1)},
$S:z+32}
A.e14.prototype={
$1(d){return new A.Va(this.a.cx,null)},
$S:z+33}
A.e0k.prototype={
$1(d){var w,v,u,t,s,r,q,p=null,o=this.a,n=o.d
n===$&&C.c()
w=n.d
w===$&&C.c()
n=C.d("Add to "+w[n.e].b,p,p,p,p,p,p,D.du,p,p,p)
w=x.p
v=C.a([],w)
for(u=0;u<3;++u){t={}
s=B.ddx[u]
t.a=null
t.a=s.a
r=new C.aW(12,12)
q=new C.aA(D.b1,1,D.q,-1)
v.push(C.aE(p,C.p(p,new C.x(s.b,p,D.rC,p,p,p,p,p,p,p,p,p),D.f,p,p,new C.o(D.fh.j(0.4),p,new C.bP(q,q,q,q),new C.bq(r,r,r,r),p,p,D.n),p,p,p,p,P.AM,p,p,p),D.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new A.e0j(t,o,d),p,p,p,p,p,p,!1,D.a8))}return C.bn(!0,new C.C(D.bW,C.v(C.a([n,D.at,B.frq,D.ac,C.bZ(D.bB,v,D.bs,8,8)],w),D.F,p,D.e,D.Q,0,D.p),p),!0,!1,D.af,!0,!0)},
$S:28}
A.e0j.prototype={
$0(){C.a6(this.c,!1).O(null)
this.b.bxi(this.a.a)},
$S:0}
A.e0e.prototype={
$1(d){return d.a==="back"},
$S:z+14}
A.e0f.prototype={
$1(d){return d.a==="back"},
$S:z+14}
A.e0g.prototype={
$1(d){return Math.abs(d-this.a)>13},
$S:124}
A.e0h.prototype={
$0(){var w=this
w.b.dy.push(new A.aTP(w.c,w.d,new A.XI(C.T(x.S,x.N))))
w.a.k9()},
$S:0}
A.e11.prototype={
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
w[r.e].aBW(0,u)
t.k9()},
$S:0}
A.e1Z.prototype={
$0(){var w,v,u,t=this.b
t.e=(t.e+1)%4
w=this.a
v=w.d
v===$&&C.c()
u=v.d
u===$&&C.c()
u[v.e].aBW(0,t)
w.k9()},
$S:0}
A.e1t.prototype={
$0(){var w=this.b
w.f=(w.f+1)%6
this.a.k9()},
$S:0}
A.e1u.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&C.c()
w=u.d
w===$&&C.c()
D.d.W(w[u.e].x,this.b)
v.at=v.Q=0
v.k9()},
$S:0}
A.e0i.prototype={
$0(){var w=this.a,v=this.b.a
w.Q=v
w.at=100+v
w.k9()},
$S:0}
A.e0Q.prototype={
$0(){return this.a.acH(-6,0)},
$S:0}
A.e0R.prototype={
$0(){return this.a.acH(6,0)},
$S:0}
A.e0S.prototype={
$0(){return this.a.acH(0,-6)},
$S:0}
A.e0T.prototype={
$0(){return this.a.acH(0,6)},
$S:0}
A.e0U.prototype={
$0(){return this.a.bxl(this.b.a)},
$S:0}
A.e0V.prototype={
$0(){var w=this.a
return w.m(new A.e0P(w))},
$S:0}
A.e0P.prototype={
$0(){return this.a.as=-1},
$S:0}
A.e0W.prototype={
$0(){var w=this.a
w.m(new A.e0O(w,this.b))},
$S:0}
A.e0O.prototype={
$0(){var w,v=this.a,u=v.as,t=this.b,s=v.d
if(u<0){s===$&&C.c()
u=s.d
u===$&&C.c()
D.d.fZ(u[s.e].z,0,3,t)}else{s===$&&C.c()
w=s.d
w===$&&C.c()
w[s.e].z[u]=t}v.k9()},
$S:0}
A.e0X.prototype={
$0(){var w=this.a
w.m(new A.e0N(w,this.b))},
$S:0}
A.e0N.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&C.c()
w=u.d
w===$&&C.c()
w[u.e].Q=this.b
v.k9()},
$S:0}
A.e0Y.prototype={
$0(){var w=this.a
w.m(new A.e0M(w))},
$S:0}
A.e0M.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&C.c()
w=u.d
w===$&&C.c()
u=w[u.e]
u.dx=u.dx==="fan"?"light":"fan"
v.k9()},
$S:0}
A.e0Z.prototype={
$0(){var w=this.a
w.m(new A.e0L(w,this.b))},
$S:0}
A.e0L.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&C.c()
w=u.d
w===$&&C.c()
w[u.e].as=this.b
v.k9()},
$S:0}
A.e1_.prototype={
$0(){return this.a.OS(this.b.c)},
$S:0}
A.e2d.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new A.e2b(w))},
$S:0}
A.e2b.prototype={
$0(){return this.a.k2=null},
$S:0}
A.e2c.prototype={
$3(d,e,f){var w=null
return C.dc(C.chD(D.A,w,w,w,w,D.co,D.wy,w,this.a.k2,!1,!1,!1,w,D.oJ,1,w),e)},
$S:102}
A.e0C.prototype={
$0(){var w=this.a,v=w.d
v===$&&C.c()
return v.a.length!==0?w.DI():w.chP(this.b)},
$S:0}
A.e0u.prototype={
$0(){return this.a.OR()},
$S:0}
A.e0t.prototype={
$1(d){return d<=5},
$S:33}
A.e0s.prototype={
$1(d){var w,v,u,t,s=this.a,r=s.d
r===$&&C.c()
w=r.d
w===$&&C.c()
r=w[r.e]
w=s.CW.gu2()
v=s.cgz()
u=B.dj2.h(0,$.bB2)
if(u==null)u=B.a4M
t=s.fr
return A.hV2(r,w/1000,s.r,v,u,t)},
$S:z+8}
A.e0D.prototype={
$0(){var w=this.a
w.m(new A.e0r(w))
w.OR()},
$S:0}
A.e0r.prototype={
$0(){var w=this.a
return w.x=!w.x},
$S:0}
A.e0E.prototype={
$0(){var w=this.a
return w.cx!=null?w.a1p():w.cxx()},
$S:0}
A.e0F.prototype={
$0(){var w=this.a
w.m(new A.e0q(w))
w.OR()
if(w.z)w.ka("Drag to turn all the way round. Double tap a spot on the floor to walk there.")},
$S:0}
A.e0q.prototype={
$0(){var w=this.a,v=!w.z
w.z=v
if(v&&w.cx!=null)w.a1p()
w.k9()},
$S:0}
A.e0G.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&C.c()
w=u.d
w===$&&C.c()
return v.OS(w[u.e].c!=="outside"?11:10)},
$S:0}
A.e0H.prototype={
$0(){var w=0,v=C.j(x.H),u=this,t
var $async$$0=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:w=2
return C.b(C.a6(u.b,!1).c6(C.e7(new A.e0p(),!1,null,x.H)),$async$$0)
case 2:t=u.a
if(t.c!=null)t.m(t.gA4())
return C.h(null,v)}})
return C.i($async$$0,v)},
$S:1}
A.e0p.prototype={
$1(d){return B.aDL},
$S:z+36}
A.e0I.prototype={
$0(){var w=this.a
return w.m(new A.e0o(w))},
$S:0}
A.e0o.prototype={
$0(){var w=this.a,v=!w.w
w.w=v
if(v)w.ka("Voltage tester in your hand: tap an outlet, a switch or the light.")},
$S:0}
A.e0J.prototype={
$0(){var w=this.a
return w.m(new A.e0n(w))},
$S:0}
A.e0n.prototype={
$0(){var w=this.a
return w.y=!w.y},
$S:0}
A.e0K.prototype={
$0(){return this.a.QO("look")},
$S:0}
A.e0v.prototype={
$0(){return this.a.QO("furniture")},
$S:0}
A.e0w.prototype={
$0(){return this.a.QO("walls")},
$S:0}
A.e0x.prototype={
$0(){return this.a.QO("floor")},
$S:0}
A.e0y.prototype={
$0(){return this.a.QO("ceiling")},
$S:0}
A.e0z.prototype={
$0(){return this.a.QO("doors")},
$S:0}
A.e0A.prototype={
$0(){return C.a6(this.a,!1).c6(C.e7(new A.e0m(),!1,null,x.H))},
$S:0}
A.e0m.prototype={
$1(d){return B.aDM},
$S:z+37}
A.e0B.prototype={
$0(){var w=this.a
return w.m(new A.e0l(w))},
$S:0}
A.e0l.prototype={
$0(){var w=this.a.d
w===$&&C.c()
return w.c=!w.c},
$S:0}
A.e1s.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m=null,l=C.aI(d,m,x.l).w,k=this.a,j=k.d
j===$&&C.c()
w=x.p
j=C.a([B.fg7,D.at,C.d("Wiring "+j.gcT6()+"/"+k.d.gqq().length+" \xb7 Plumbing "+k.d.gcPX()+"/"+k.d.gcPW(),m,m,m,m,m,m,B.IB,m,m,m),D.S],w)
for(v=k.d.gqq(),u=v.length,t=0;t<v.length;v.length===u||(0,C.L)(v),++t){s=v[t]
r=D.c.j(0.05)
q=new C.aW(12,12)
p=new C.aA(s.gjy()&&s.gl3()?D.b8.j(0.5):D.bF,1,D.q,-1)
if(s.gjy()&&s.gl3())o="\u2705 finished"
else{o=s.gjy()?"":"\u26a1 wiring  "
o+=s.gl3()?"":"\ud83d\udeb0 plumbing"}n=s.gjy()&&s.gl3()?D.es:D.ad
j.push(C.aE(m,C.p(m,new C.cm(D.aO,D.e,D.j,D.m,m,D.p,m,0,C.a([new C.bD(1,D.bi,new C.x(s.b,m,B.f5A,m,m,m,m,m,m,m,m,m),m),new C.x(o,m,new C.G(!0,n,m,m,m,m,12,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m,m,m,m,m,m,m,m,m)],w),m),D.f,m,m,new C.o(r,m,new C.bP(p,p,p,p),new C.bq(q,q,q,q),m,m,D.n),m,m,m,D.eO,D.bS,m,m,m),D.y,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new A.e1p(k,d,s),m,m,m,m,m,m,!1,D.a8))}j.push(D.P)
j.push(C.dV(B.fdh,new A.e1q(k,d),m))
j.push(D.P)
j.push(C.bJ(B.f9G,new A.e1r(k,d),m))
return C.bn(!0,new C.cV(new C.aY(0,1/0,0,l.a.b*0.75),C.cB(j,m,D.bW,m,m,D.ah,!0),m),!0,!1,D.af,!0,!0)},
$S:28}
A.e1p.prototype={
$0(){C.a6(this.b,!1).O(null)
this.a.OS(this.c.a)},
$S:0}
A.e1q.prototype={
$0(){C.a6(this.b,!1).O(null)
var w=this.a
w.m(new A.e1o(w))
w.ka("Every room needs its wiring and plumbing again. Wire the whole house from the start.")},
$S:0}
A.e1o.prototype={
$0(){var w=this.a,v=w.d
v===$&&C.c()
v.cMD()
w.k9()},
$S:0}
A.e1r.prototype={
$0(){C.a6(this.b,!1).O(null)
$.Hf=A.bPB(D.o.G(Date.now(),1e5))
var w=this.a
w.m(new A.e1n(w))
w.avw(!0)},
$S:0}
A.e1n.prototype={
$0(){var w=this.a,v=$.Hf
v.toString
w.d=v
w.r="look"
w.Q=0
w.as=-1
w.at=0
w.k9()},
$S:0}
A.dmr.prototype={
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
A.flX.prototype={
$2(d,e){return this.a===d?e:0},
$S:704}
A.flM.prototype={
$1(d){return d.a==="right"},
$S:z+14}
A.flV.prototype={
$1(d){var w=this,v=w.a,u=v.a
A:{if("left"===u){v=A.tQ(d,0,1.5707963267948966,new A.E(-w.b/2,0,v.b+w.c/2-40))
break A}if("right"===u){v=A.tQ(d,0,-1.5707963267948966,new A.E(w.b/2,0,v.b+w.c/2-40))
break A}v=A.tQ(d,0,0,new A.E(v.b,0,0))
break A}return v},
$S:z+38}
A.flN.prototype={
$1(d){return d.a==="back"},
$S:z+14}
A.flO.prototype={
$1(d){return d.b},
$S:z+39}
A.flP.prototype={
$2(d,e){return e},
$S:88}
A.flQ.prototype={
$3(d,e,f){return G.aOQ(d,e,0,f+this.a)},
$S:311}
A.flS.prototype={
$2(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=this
if(a2==null)return
w=A.bzu(a2)
v=a1.a
u=A.hji(v,w)
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
a1.d.push(new A.WL(C.a([new A.E(h,e,g),new A.E(h,e,f),new A.E(h,l,f),new A.E(h,l,g)],x.o),n,new A.flT(v,a3),320*p/q,9,1))}}else{k=u.c
o.bG(new A.E(k,r,1.4),new A.E(t+3,s+3,2.6),B.Kh,0.5)
o.bG(new A.E(k,r,2.8),new A.E(t,s,0.2),I.mU,0.7)
if(v.fy){l=q/2
e=k-l
d=p/2
a0=r+d
l=k+l
d=r-d
a1.d.push(new A.WL(C.a([new A.E(e,a0,2.95),new A.E(l,a0,2.95),new A.E(l,d,2.95),new A.E(e,d,2.95)],x.o),n,new A.flU(v),320*p/q,9,1))}}o.e=0
v=v.fy?"It is on and playing "+E.jZ[v.go].a+". Tap it to watch full screen with the remote.":"The TV is off. Tap it to turn it on."
a1.e.n(0,n,new A.d1(w.b,v,new A.E(0,r,4),110))},
$S:1799}
A.flT.prototype={
$3(d,e,f){var w=this.a
return G.aOQ(d,e,w.go,f+w.a+this.b*3)},
$S:311}
A.flU.prototype={
$3(d,e,f){var w=this.a
return G.aOQ(d,e,w.go,f+w.a)},
$S:311}
A.flW.prototype={
$2(d,e){var w=this.a,v=w.f,u=w.r
w.f=1
w.r=!1
w.b=0
w.e5(new A.E(d,e,0),new A.E(d,e,2.2),0.7,B.K7,0.7,10)
w.f=v
w.r=u},
$S:381}
A.flR.prototype={
$1(d){return d.b===this.a.a},
$S:z+19}
A.ffT.prototype={
$2(d,e){return this.a===d?e:0},
$S:704}
A.ffU.prototype={
$5(d,e,f,g,h){var w=d.ad(0,e.aF(0,g)).ad(0,new A.E(0,h,0)),v=this.a
A.ni(v,w.ad(0,f.aF(0,0.1)),e,B.fP,26,30,B.m8,f,0)
A.ni(v,w.ad(0,f.aF(0,0.2)),e,B.fP,22,26,B.pw,f,0.6)
A.ni(v,w.ad(0,f.aF(0,0.3)),e,B.fP,22,1.2,B.m8,f,0)
A.ni(v,w.ad(0,f.aF(0,0.3)),e,B.fP,1.2,26,B.m8,f,0)},
$S:z+41}
A.ffS.prototype={
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
A.foB.prototype={
$1(d){return D.d.t(B.a1B,d.b)},
$S:z+43}
A.foC.prototype={
$1(d){return d.b===this.a.a},
$S:z+19}
A.foD.prototype={
$1(d){return d.b===this.a.a},
$S:z+19}
A.f6I.prototype={
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
D.d.v(s,A.tQ(m,r*k*j,0,new A.E(n,e,o.b)));++q}},
$S:1800}
A.fgr.prototype={
$3(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k=x.z,j=C.a([],k),i=new A.jf(j)
i.b=this.a
i.r=!0
d.$1(i)
k=C.a([],k)
for(j=A.he2(j,e,B.fO),w=j.length,v=f.a,u=f.b,t=f.c,s=x.o,r=0;r<j.length;j.length===w||(0,C.L)(j),++r){q=j[r]
p=C.a([],s)
for(o=q.a,n=o.length,m=0;m<o.length;o.length===n||(0,C.L)(o),++m){l=o[m]
p.push(new A.E(l.a+v,l.b+u,l.c+t))}k.push(new A.nd(p,q.b,q.c,q.d,q.e,q.f,q.r,q.w,q.x,q.y,q.z))}D.d.v(this.b.a,k)},
$S:z+44}
A.fgd.prototype={
$5(d,e,f,g,h){var w=this.a
w.baG(d,e,f,h,!1,g,10)
w.io(e,g*1.04,h,4,8)},
$S:z+45}
A.fge.prototype={
$1(d){return d.iQ(B.fO,2.6,B.Wj,4,8,0.15)},
$S:z+1}
A.fgf.prototype={
$1(d){return d.io(B.fO,2.6,D.bR,3,8)},
$S:z+1}
A.fgg.prototype={
$1(d){return d.io(B.fO,5.2,this.a,4,10)},
$S:z+1}
A.fgj.prototype={
$1(d){return d.baG(B.fO,B.a7N,4.9,this.a,!1,6.5,12)},
$S:z+1}
A.fgk.prototype={
$1(d){return d.baF(B.fO,B.fCS,5.1,B.b8u,!1,12)},
$S:z+1}
A.fgl.prototype={
$1(d){return d.io(B.fO,6.7,this.a,4,10)},
$S:z+1}
A.fgm.prototype={
$1(d){return d.io(B.fO,4.7,this.a,6,12)},
$S:z+1}
A.fgn.prototype={
$1(d){return d.io(B.fO,3,this.a,4,8)},
$S:z+1}
A.fgo.prototype={
$1(d){return d.io(B.fO,5,this.a,5,10)},
$S:z+1}
A.fgp.prototype={
$1(d){return d.io(B.fO,3.6,this.a,3,8)},
$S:z+1}
A.fgq.prototype={
$1(d){return d.io(B.fO,1,D.c,3,6)},
$S:z+1}
A.fgh.prototype={
$1(d){return d.io(B.fO,1,this.a,3,6)},
$S:z+1}
A.fgi.prototype={
$1(d){return d.io(B.fO,1.9,this.a,4,8)},
$S:z+1}
A.fm1.prototype={
$4$alongX(d,e,f,g){var w,v,u,t,s,r,q,p,o,n
for(w=this.a,v=0;v<=f;++v){u=A.zG(d,e,v/f)
w.aBC(new A.E(u.a,4,u.c),B.fI5,B.W7,!1,0.05)}t=A.zG(d,e,0.5)
for(s=e.aC(0,d).gTb()+0.15,r=t.a,q=t.c,p=0;p<2;++p){o=B.d0U[p]
n=g?new A.E(s,0.16,0.3):new A.E(0.3,0.16,s)
w.bG(new A.E(r,o,q),n,B.W7,0.05)}},
$3(d,e,f){return this.$4$alongX(d,e,f,!0)},
$S:z+47}
A.flZ.prototype={
$2(d,e){return this.a.jT(A.Ge(d,0.35,3),0.06,e,!1,0.4,6)},
$S:z+72}
A.flY.prototype={
$1(d){return this.a.jT(A.Ge(d,0.5,3),0.14,B.pl,!1,0.3,8)},
$S:z+49}
A.fm0.prototype={
$2$col(d,e){return this.a.jT(A.Ge(d,0.4,3),0.055,e,!1,0.35,6)},
$1(d){return this.$2$col(d,B.Wf)},
$S:z+50}
A.fm_.prototype={
$5$h$w(d,e,f,g,h){var w=this.a
w.b=d
w.bG(e,new A.E(h,g,0.06),f,0.3)},
$3(d,e,f){return this.$5$h$w(d,e,f,0.7,0.45)},
$S:z+51}
A.fmW.prototype={
$0(){return A.m7(1320,120,0.25,"tri")},
$S:0}
A.dKw.prototype={
$1(d){return this.a},
$S:40}
A.dKz.prototype={
$0(){return C.a6(this.a,!1).lM()},
$S:0}
A.dKA.prototype={
$0(){var w=this.a
return w.m(new A.dKy(w))},
$S:0}
A.dKy.prototype={
$0(){return this.a.d=!1},
$S:0}
A.dKB.prototype={
$0(){var w=this.a
return w.m(new A.dKx(w))},
$S:0}
A.dKx.prototype={
$0(){return this.a.d=!0},
$S:0}
A.dKE.prototype={
$0(){var w=this.a
return w.xn(A.aZh("","",w.d))},
$S:0}
A.dKF.prototype={
$0(){return this.a.xn(B.aDL)},
$S:0}
A.dKG.prototype={
$0(){var w=this.a
return w.xn(A.aZh("wiring","",w.d))},
$S:0}
A.dKH.prototype={
$0(){var w=this.a
return w.xn(A.aZh("plumbing","",w.d))},
$S:0}
A.dKI.prototype={
$0(){var w=this.a
return w.xn(A.aZh("fix","",w.d))},
$S:0}
A.dKJ.prototype={
$0(){var w=this.a
return w.xn(A.fPu(w.d,null,!1))},
$S:0}
A.dKK.prototype={
$0(){var w=this.a
return w.xn(A.fPu(w.d,null,!0))},
$S:0}
A.dKL.prototype={
$0(){var w=this.a
return w.xn(new A.aq_(w.d,null))},
$S:0}
A.dKC.prototype={
$0(){var w=this.b.a
w=w==="house"?B.fLD:A.aZh("",w,!1)
return this.a.xn(w)},
$S:0}
A.dKD.prototype={
$0(){return this.a.xn(B.aDM)},
$S:0}
A.cpC.prototype={
$0(){return this.a.e.anv(0.8)},
$S:0}
A.cpD.prototype={
$0(){return this.a.e.anv(1.25)},
$S:0}
A.fDd.prototype={
$1(d){var w,v,u,t,s,r,q,p,o=null,n=C.aI(d,o,x.l).w,m=this.b,l=this.c,k=l.length,j=x.p,i=C.a([C.d(this.a,o,o,o,o,o,o,D.du,o,o,o),D.at,C.d(""+new C.a2(m,new A.fDc(),C.U(m).k("a2<1>")).gM(0)+" of "+k+" steps done",o,o,o,o,o,o,B.IB,o,o,o),D.S],j)
for(w=0;w<k;++w){v=D.c.j(0.05)
u=new C.aW(14,14)
t=new C.aA(m[w]?D.b8.j(0.6):D.bF,1,D.q,-1)
s=m[w]
r=s?"\u2705":""+(w+1)+"."
q=s?D.c:D.aH
p=l[w]
s=s?D.az:D.c
i.push(C.p(o,new C.cm(D.aO,D.e,D.j,D.F,o,D.p,o,0,C.a([new C.x(r,o,new C.G(!0,q,o,o,o,o,14,D.u,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o),o,o,o,o,o,o,o,o,o),D.av,new C.bD(1,D.bi,new C.x(p,o,new C.G(!0,s,o,o,o,o,13,o,o,o,o,o,1.4,o,o,o,o,o,o,o,o,o,o,o,o,o),o,o,o,o,o,o,o,o,o),o)],j),o),D.f,o,o,new C.o(v,o,new C.bP(t,t,t,t),new C.bq(u,u,u,u),o,o,D.n),o,o,o,D.cH,D.bk,o,o,o))}return C.bn(!0,new C.cV(new C.aY(0,1/0,0,n.a.b*0.75),C.cB(i,o,D.bW,o,o,D.ah,!0),o),!0,!1,D.af,!0,!0)},
$S:28}
A.fDc.prototype={
$1(d){return d},
$S:142}
A.bRQ.prototype={
$0(){return C.a6(this.a,!1).lM()},
$S:0}
A.d2h.prototype={
$0(){var w=this.a
w.y=this.b
w.z=this.c},
$S:0}
A.d2i.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new A.d2g(w))},
$S:0}
A.d2g.prototype={
$0(){return this.a.y=null},
$S:0}
A.d2a.prototype={
$0(){return this.a.x=0},
$S:0}
A.d29.prototype={
$1(d){var w=this.a.geS(0).b
return new C.bc(w,C.a3(w).k("bc<2>")).t(0,d)},
$S:3}
A.d2b.prototype={
$1(d){return d.a===this.a},
$S:z+11}
A.d2c.prototype={
$2(d,e){return e===this.a},
$S:409}
A.d2d.prototype={
$0(){var w=this.a
w.xo()
w.x=this.b},
$S:0}
A.d2e.prototype={
$0(){return this.a.x=this.b},
$S:0}
A.d2f.prototype={
$0(){var w=this.a,v=w.geS(0),u=v.a
v.a=!u
if(u)v.d=!1
w.xo()},
$S:0}
A.d2j.prototype={
$0(){var w=this.a,v=w.geS(0)
v.d=v.a=!0
w.xo()},
$S:0}
A.d2r.prototype={
$1(d){return!d},
$S:142}
A.d2u.prototype={
$0(){var w=this.a.gFE()
return A.fDb(this.b,w.b,w.d,this.c)},
$S:0}
A.d2s.prototype={
$0(){var w=this.a
return w.m(new A.d2q(w))},
$S:0}
A.d2q.prototype={
$0(){var w=this.a,v=w.geS(0)
v.e=!v.e
w.xo()},
$S:0}
A.d2t.prototype={
$0(){var w=this.a
return w.m(new A.d2p(w))},
$S:0}
A.d2p.prototype={
$0(){var w=this.a,v=w.geS(0)
v.f=!v.f
w.xo()},
$S:0}
A.d2v.prototype={
$0(){var w=this.a,v=w.gkT()
return v.lU(10,0.2,new A.E(0.6,0,w.geS(0).c===0?4.2:0.4),-0.95)},
$S:0}
A.d2w.prototype={
$0(){var w=this.a,v=w.gkT()
return v.lU(10,0.2,new A.E(-0.6,0,w.geS(0).c===0?4.2:0.4),0.95)},
$S:0}
A.d2x.prototype={
$1(d){return!this.a.geS(0).b.iR(0,d.a)},
$S:z+12}
A.d2y.prototype={
$0(){var w=this.a,v=this.b,u=v.a
if(w.geS(0).b.iR(0,u)){w.oY("That wire is already fastened. Tap the wire in the 3D view to take it off if you want to move it.")
return}w.m(new A.d2o(w,v))
if(w.w.length!==0){if(u==="ground")w.gkT().lU(8,0.55,B.fEN,0.15)
else if(u==="white")w.gkT().lU(8.5,0.2,B.fH7,0.95)
else w.gkT().lU(8.5,0.2,B.fAd,-0.95)
w.kw(v.b+": now tap the screw it belongs on.",!0)}},
$S:0}
A.d2o.prototype={
$0(){var w=this.a,v=this.b.a
return w.w=w.w===v?"":v},
$S:0}
A.d2z.prototype={
$0(){var w=this.a
w.m(new A.d2n(w))
A.y7()
w.kw("The wires are folded back and the device is pushed into the box. Now put the cover plate on.",!0)
w.nW()},
$S:0}
A.d2n.prototype={
$0(){var w=this.a
w.geS(0).c=1
w.xo()},
$S:0}
A.d2A.prototype={
$0(){var w=this.a
w.m(new A.d2m(w))
w.nW()},
$S:0}
A.d2m.prototype={
$0(){var w=this.a
w.geS(0).c=0
w.xo()},
$S:0}
A.d2B.prototype={
$0(){var w=this.a
w.m(new A.d2l(w))
A.y7()
w.kw("Cover plate on. Now turn the power on and test.",!0)},
$S:0}
A.d2l.prototype={
$0(){var w=this.a
w.geS(0).c=2
w.xo()},
$S:0}
A.d2C.prototype={
$0(){var w=this.a
w.m(new A.d2k(w))
w.nW()},
$S:0}
A.d2k.prototype={
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
A.eLY.prototype={
$0(){var w=this.a
w.x=this.b
w.y=this.c},
$S:0}
A.eLZ.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new A.eLX(w))},
$S:0}
A.eLX.prototype={
$0(){return this.a.x=null},
$S:0}
A.eLR.prototype={
$0(){return this.a.w=0},
$S:0}
A.eLS.prototype={
$0(){var w=this.a,v=w.geS(0)
v.a.L(0,this.b)
v.c=!1
v.d=""
w.f=A.bzz(v)
w.r=""},
$S:0}
A.eLT.prototype={
$0(){var w=this.a,v=w.geS(0)
v.b.n(0,this.b,!0)
v.d=""
w.f=A.bzz(v)},
$S:0}
A.eLU.prototype={
$0(){return this.a.w=this.b},
$S:0}
A.eLV.prototype={
$1(d){return this.a.geS(0).b.h(0,d)!==!0},
$S:3}
A.eLW.prototype={
$0(){var w,v=this.a,u=v.geS(0)
u.c=!0
w=this.b
u.d=w.length===0?"":D.d.gK(w)
v.f=A.bzz(u)},
$S:0}
A.eM2.prototype={
$1(d){return!d},
$S:142}
A.eM6.prototype={
$0(){return A.fDb(this.a,"Sink drain (P-trap)",B.d3o,this.b)},
$S:0}
A.eM3.prototype={
$1(d){return A.i2E(this.a.geS(0),d)},
$S:z+8}
A.eM4.prototype={
$0(){var w=this.a
return w.m(new A.eM1(w,this.b))},
$S:0}
A.eM1.prototype={
$0(){var w=this.a,v=this.b
return w.r=w.r===v?"":v},
$S:0}
A.eM5.prototype={
$0(){var w=this.a
w.m(new A.eM0(w))
w.nW()},
$S:0}
A.eM0.prototype={
$0(){var w,v=this.a,u=v.geS(0)
u.a.a9(0)
w=u.b
w.aHc(w,new A.eM_())
u.c=!1
v.r=u.d=""
v.w=0
v.f=A.bzz(u)},
$S:0}
A.eM_.prototype={
$2(d,e){return!1},
$S:1802}
A.d5c.prototype={
$0(){var w=this.a
w.x=this.b
w.y=this.c},
$S:0}
A.d5d.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new A.d5b(w))},
$S:0}
A.d5b.prototype={
$0(){return this.a.x=null},
$S:0}
A.d54.prototype={
$0(){return this.a.w=0},
$S:0}
A.d57.prototype={
$1(d){return d.a===this.a},
$S:z+24}
A.d58.prototype={
$0(){var w=this.a,v=w.geS(0)
v.f=!1
w.f=A.aNs(v)
w.w=this.b},
$S:0}
A.d59.prototype={
$0(){var w=this.a,v=w.geS(0),u=v.e
u.bn(u,new A.d56(this.b))
v.f=!1
w.f=A.aNs(v)},
$S:0}
A.d56.prototype={
$2(d,e){return e===this.a},
$S:409}
A.d5a.prototype={
$0(){return this.a.w=this.b},
$S:0}
A.d55.prototype={
$0(){var w=this.a,v=w.geS(0)
v.f=!v.f
w.f=A.aNs(v)},
$S:0}
A.d5h.prototype={
$1(d){return!d},
$S:142}
A.d5n.prototype={
$0(){return A.fDb(this.a,"Faucet supply lines",B.deG,this.b)},
$S:0}
A.d5i.prototype={
$1(d){return A.hUB(this.a.geS(0),d)},
$S:z+8}
A.d5j.prototype={
$0(){var w=this.a
return w.m(new A.d5g(w))},
$S:0}
A.d5g.prototype={
$0(){var w=this.a,v=w.geS(0)
v.r=!v.r
w.f=A.aNs(v)},
$S:0}
A.d5l.prototype={
$0(){var w=this.b
return w.m(new A.d5f(this.a,w))},
$S:0}
A.d5f.prototype={
$0(){var w=this.b,v=w.r,u=this.a.a
return w.r=v===u?"":u},
$S:0}
A.d5k.prototype={
$1(d){return d===this.a.a},
$S:3}
A.d5m.prototype={
$0(){var w=this.a
w.m(new A.d5e(w))
w.nW()},
$S:0}
A.d5e.prototype={
$0(){var w=this.a,v=w.geS(0)
v.e.a9(0)
v.f=!1
w.r=""
w.w=0
w.f=A.aNs(v)},
$S:0}
A.dch.prototype={
$0(){var w=this.a
w.x=this.b
w.y=this.c},
$S:0}
A.dci.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new A.dcg(w))},
$S:0}
A.dcg.prototype={
$0(){return this.a.x=null},
$S:0}
A.dcb.prototype={
$0(){return this.a.r=0},
$S:0}
A.dcd.prototype={
$0(){var w=this.a,v=w.d
v.d.W(0,72)
w.f=A.afj(v)
w.r=this.b},
$S:0}
A.dce.prototype={
$0(){var w=this.a,v=w.d
v.c=!0
v.b=!1
w.f=A.afj(v)
w.r=this.b},
$S:0}
A.dcf.prototype={
$0(){return this.a.r=this.b},
$S:0}
A.dcc.prototype={
$1(d){return this.a},
$S:40}
A.dcq.prototype={
$0(){return A.fDb(this.a,"Fix the house",B.cez,this.b)},
$S:0}
A.dcl.prototype={
$0(){return this.a.caS(this.b)},
$S:0}
A.dcn.prototype={
$1(d){return d<=this.a.d.a},
$S:33}
A.dcm.prototype={
$1(d){return A.hfa(this.a.d,d)},
$S:z+8}
A.dco.prototype={
$0(){var w=this.a
return w.m(new A.dck(w))},
$S:0}
A.dck.prototype={
$0(){var w=this.a
return w.w=w.w==="wrench"?"":"wrench"},
$S:0}
A.dcp.prototype={
$1(d){var w=this.a
return w.m(new A.dcj(w,d))},
$S:6}
A.dcj.prototype={
$0(){var w=this.a,v=w.d,u=D.k.V(this.b)
v.a=u
if(u<5)w.r=0
w.f=A.afj(v)},
$S:0}
A.c5v.prototype={
$0(){return C.a6(this.a,!1).lM()},
$S:0}
A.fmC.prototype={
$5(d,e,f,g,h){var w=this.a.a.t(0,h),v=this.b
v.b=d
if(w)v.a5B(e,0.66,f,!1,!0,!0,g,14)
else{v.d=0.3
v.aHa(e,0.74,D.b1,!1,!0,0,8)
v.d=1}},
$S:z+53}
A.fmB.prototype={
$6(d,e,f,g,h,i){var w,v
if(!i)return
w=this.a.b.h(0,e)
v=w===!0?f:f.ad(0,h)
w=this.b
w.e=0.5
w.b=d
w.e5(v.aC(0,g.aF(0,0.6)),v.ad(0,g.aF(0,0.6)),1.12,B.pl,0.35,8)
w.yV(v.aC(0,g.aF(0,0.62)),v.aC(0,g.aF(0,0.5)),1.2,0.5,B.Vv,0.2,8)
w.b=0
w.yV(f.aC(0,g.aF(0,0.05)),f.ad(0,g.aF(0,0.08)),0.82,0.55,B.bgu,0.1,12)
w.e=0},
$S:z+54}
A.fmA.prototype={
$1(d){return d.b<-0.6},
$S:z+20}
A.flL.prototype={
$1(d){return this.a.e.h(0,d)===this.b},
$S:33}
A.fo3.prototype={
$2(d,e){var w,v,u,t,s,r,q,p=A.afw(d)
for(w=this.a*1.6,v=this.b,u=p.a,t=p.b,s=p.c,r=0;r<7;++r){q=D.k.G(w+r/7,1)
v.iQ(new A.E(u+Math.sin(r*2.1)*q*1.4,t+(q*2.4-q*q*6.5),s+(1+q*2.5)),0.2,e,3,6,0.9)}},
$S:1803}
A.fo2.prototype={
$1(d){return this.a.e.h(0,d.a)!=null},
$S:z+24}
A.cgc.prototype={
$1(d){return d.a===this.a},
$S:z+55}
A.cgd.prototype={
$1(d){return d.a===this.a},
$S:z+2}
A.cg9.prototype={
$1(d){return this.a.uP(0,d).c.toLowerCase()},
$S:14}
A.cge.prototype={
$1(d){var w
if(!this.a.e.t(0,d.a)){w=d.b
w=w==="valve"||D.a.a0(w,"hose")}else w=!1
return w},
$S:z+2}
A.cgf.prototype={
$1(d){var w=this.a,v=d.a
return w.e.t(0,v)&&w.beg(v)>0},
$S:z+2}
A.cgg.prototype={
$1(d){return d.a},
$S:z+25}
A.cgh.prototype={
$1(d){return d.a},
$S:z+25}
A.cga.prototype={
$1(d){return this.a.e.t(0,d.a)},
$S:z+2}
A.cgb.prototype={
$1(d){var w=this.a,v=d.a
return w.beg(v)<=0||!w.e.t(0,v)},
$S:z+2}
A.fmz.prototype={
$1(d){var w=this.a
w.b=0
w.e5(new A.E(d,8,0),new A.E(d,8,1.6),0.5,B.K7,0.7,10)},
$S:6}
A.fmx.prototype={
$1(d){var w,v,u,t,s,r,q=C.a([],x.o)
for(w=d.length,v=this.a,u=v.a,t=v.b,v=v.c,s=0;s<d.length;d.length===w||(0,C.L)(d),++s){r=d[s]
q.push(new A.E(r.a+u,r.b+t,r.c+v))}return q},
$S:z+58}
A.fmr.prototype={
$3$r(d,e,f){var w=this.a,v=this.b.c
v===$&&C.c()
w.b=9100+D.d.bc(v.c,new A.fmu(d))
w.d=0.32
w.aHa(e,f,D.b1,!1,!0,0,8)
w.d=1},
$2(d,e){return this.$3$r(d,e,1.2)},
$S:z+59}
A.fmu.prototype={
$1(d){return d.a===this.a},
$S:z+2}
A.fms.prototype={
$3(d,e,f){var w=this.a,v=this.b.c
v===$&&C.c()
w.b=9100+D.d.bc(v.c,new A.fmt(d))
w.d=0.32
w.bO(e,f,D.b1)
w.d=1},
$S:z+60}
A.fmt.prototype={
$1(d){return d.a===this.a},
$S:z+2}
A.fmy.prototype={
$3(d,e,f){var w,v,u,t=this,s=t.a,r=s.c
r===$&&C.c()
w=D.d.cJ(r.c,d)
r=d.c
v=s.e
u=d.a
if(v.t(0,u))s="Fitted."
else{s=s.b?"":d.e
s="A spot for the "+r.toLowerCase()+". "+s}t.b.n(0,9100+w,new A.d1(r,s,e,26))
if(t.c&&!v.t(0,u)&&t.d.length!==0)t.e.push(new A.ud(e.ad(0,B.fyz),f,D.fh))},
$S:z+61}
A.fmo.prototype={
$0(){return this.a.$3(this.b.a,new A.E(this.c-10,9,2.4),B.a7P)},
$S:0}
A.fmp.prototype={
$0(){return this.a.$3(this.b.a,new A.E(this.c-8,9,2.4),B.a7P)},
$S:0}
A.fmq.prototype={
$0(){return this.a.$3(this.b.a,new A.E(this.c+8,9,2.4),B.a7P)},
$S:0}
A.fmv.prototype={
$4(d,e,f,g){var w,v,u,t,s=this
if(D.d.bc(s.a,new A.fmw(d))<0||!s.b.e.t(0,d))return
w=s.b.f.h(0,d)
v=(w==null?0:w)>=1
w=s.c
u=9260+g
w.b=u
t=v?e:e.ad(0,f.aF(0,1.7))
w.e5(t.aC(0,f.aF(0,0.6)),t.ad(0,f.aF(0,0.6)),1.12,B.pl,0.35,8)
w.yV(t.aC(0,f.aF(0,0.62)),t.aC(0,f.aF(0,0.5)),1.2,0.5,B.Vv,0.2,8)
w=v?"Tight.":"Loose. Tap it with the wrench to tighten it."
s.d.n(0,u,new A.d1("Slip nut",w,e,10))},
$S:z+62}
A.fmw.prototype={
$1(d){return d.a===this.a},
$S:z+2}
A.fCp.prototype={
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
A.fCo.prototype={
$1(d){return d.a===this.a},
$S:z+2}
A.efR.prototype={
$0(){var w=this.a
w.z=this.b
w.Q=this.c},
$S:0}
A.efS.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new A.efQ(w))},
$S:0}
A.efQ.prototype={
$0(){return this.a.z=null},
$S:0}
A.efK.prototype={
$0(){return this.a.y=0},
$S:0}
A.efT.prototype={
$1(d){return d.a===this.a},
$S:z+2}
A.efC.prototype={
$0(){return this.a.y=this.b},
$S:0}
A.efD.prototype={
$0(){var w=this.a
w.acI()
w.y=this.b},
$S:0}
A.efE.prototype={
$1(d){return this.a.c38()},
$S:8}
A.efJ.prototype={
$1(d){var w,v=null,u=this.a,t=u.e
t===$&&C.c()
w=t.c
w===$&&C.c()
t=C.d("The "+w.b.toLowerCase()+" is finished and nothing leaks.\n\nMistakes: "+t.w+"\n\nThe next job is different.",v,v,v,v,v,v,B.a6O,v,v,v)
return C.ej(C.a([C.bK(!1,B.aQa,v,v,!0,v,v,new A.efH(d),v,v),C.bJ(B.fgi,new A.efI(u,d),v)],x.p),v,v,E.mX,t,v,v,v,v,B.fhV,v)},
$S:19}
A.efH.prototype={
$0(){C.a6(this.a,!1).O(null)
return null},
$S:0}
A.efI.prototype={
$0(){C.a6(this.b,!1).O(null)
this.a.aW7()},
$S:0}
A.efP.prototype={
$0(){var w,v,u=this.a
u.d=D.o.G(Date.now(),1e5)
w=u.gCj(0)
v=u.e
v===$&&C.c()
u.e=A.fQb(v.b,w,null)
u.x=""
u.as=!1
u.z=null
u.y=0
u.acI()},
$S:0}
A.efG.prototype={
$0(){var w=this.a
return w.m(new A.efF(w,this.b,this.c))},
$S:0}
A.efF.prototype={
$0(){var w=this.a
w.x=this.b?"":this.c
w.acI()},
$S:0}
A.efU.prototype={
$1(d){var w=this.a.e
w===$&&C.c()
return w.e.t(0,d.a)},
$S:z+2}
A.efY.prototype={
$0(){return this.a.bYu(this.b)},
$S:0}
A.efW.prototype={
$1(d){return d<=5},
$S:33}
A.efV.prototype={
$1(d){var w=this.a,v=w.e
v===$&&C.c()
return A.i2y(v,w.w.gu2()/1000)},
$S:z+8}
A.efX.prototype={
$0(){return this.b.csM(this.a.a)},
$S:0}
A.efO.prototype={
$1(d){var w,v,u,t,s,r,q,p=null,o=this.a,n=o.e
n===$&&C.c()
w=x.p
n=C.a([B.ftd,D.at,C.d("Mistakes "+n.w,p,p,p,p,p,p,B.IB,p,p,p),D.S],w)
v=o.e.c
v===$&&C.c()
v=v.c
u=v.length
t=0
for(;t<u;++t){s=v[t]
r=D.c.j(0.05)
q=new C.aW(12,12)
n.push(C.p(p,new C.x((o.e.e.t(0,s.a)?"\u2705":"\ud83d\udd27")+" "+s.c,p,B.eTu,p,p,p,p,p,p,p,p,p),D.f,p,p,new C.o(r,p,p,new C.bq(q,q,q,q),p,p,D.n),p,p,p,D.eO,D.bS,p,p,p))}n.push(D.an)
n.push(B.f8i)
n.push(D.P)
n.push(C.A(C.a([B.buX,C.auz(p,p,p,p,!1,D.y,p,p,p,p,p,p,new A.efM(o,d),p,p,p,p,p,p,p,p,o.e.b)],w),D.m,p,D.e,D.j,0,p,p))
n.push(C.bJ(B.aQc,new A.efN(o,d),p))
return C.bn(!0,C.cB(n,p,D.bW,p,p,D.ah,!0),!0,!1,D.af,!0,!0)},
$S:28}
A.efM.prototype={
$1(d){var w=this.a
w.m(new A.efL(w,d))
C.a6(this.b,!1).O(null)},
$S:9}
A.efL.prototype={
$0(){var w=this.a,v=w.e
v===$&&C.c()
v.b=this.b
w.acI()},
$S:0}
A.efN.prototype={
$0(){C.a6(this.b,!1).O(null)
this.a.aW7()},
$S:0}
A.fKF.prototype={
$1(d){return d.a===this.a},
$S:z+26}
A.cl6.prototype={
$1(d){return d.b==="switch"},
$S:z+4}
A.cld.prototype={
$1(d){return!this.a.y.t(0,d)},
$S:33}
A.cle.prototype={
$1(d){var w=this.a
return w.x.ai(0,d)&&w.z.t(0,d)},
$S:33}
A.clf.prototype={
$1(d){var w=$.Gl()[this.b],v=!1
if(w>=d)if(w<=d+48){w=this.a.Q.h(0,d)
w=(w==null?null:w.a)===!0}else w=v
else w=v
return w},
$S:33}
A.clg.prototype={
$1(d){return this.a.Q.h(0,d).c.t(0,this.b)},
$S:33}
A.cli.prototype={
$1(d){var w,v=J.e3(6,x.S)
for(w=0;w<6;++w)v[w]=w
return D.d.da(v,new A.clh(this.a,d))},
$S:33}
A.clh.prototype={
$1(d){return this.a.c.t(0,this.b*10+d)},
$S:33}
A.cl5.prototype={
$1(d){var w=this.a.Q.h(0,d)
return(w==null?null:w.a)===!0},
$S:33}
A.cl3.prototype={
$1(d){return!A.l0(d).c},
$S:33}
A.cl4.prototype={
$1(d){var w=this.a.aod(A.l0(d).d.a)
return(w==null?null:w.b.t(0,d))===!0},
$S:33}
A.clb.prototype={
$1(d){return d.c},
$S:z+6}
A.clc.prototype={
$1(d){return d.d},
$S:z+6}
A.cl7.prototype={
$1(d){return d.d},
$S:z+6}
A.cl8.prototype={
$1(d){var w=this.a.Q.h(0,d)
return(w==null?null:w.e)===!0},
$S:33}
A.cl9.prototype={
$1(d){return d.a===this.a},
$S:z+11}
A.clj.prototype={
$2(d,e){return e===this.a},
$S:409}
A.cla.prototype={
$1(d){return d.c===this.a},
$S:z+4}
A.ekd.prototype={
$0(){var w=this.a
w.ax=this.b
w.ay=this.c},
$S:0}
A.eke.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new A.ekc(w))},
$S:0}
A.ekc.prototype={
$0(){return this.a.ax=null},
$S:0}
A.ejs.prototype={
$0(){return this.a.CW=!0},
$S:0}
A.ejt.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new A.ejr(w))},
$S:11}
A.ejr.prototype={
$0(){return this.a.CW=!1},
$S:0}
A.eju.prototype={
$1(d){return this.a.bMa()},
$S:8}
A.ejv.prototype={
$1(d){return this.a.c3d()},
$S:8}
A.ejD.prototype={
$0(){return this.a.Q=-1},
$S:0}
A.ejw.prototype={
$0(){return this.a.Q=-1},
$S:0}
A.ejV.prototype={
$0(){var w=this.a
w.Q=this.b
w.z=w.at=""
w.ch=!1},
$S:0}
A.ejE.prototype={
$0(){var w=this.a
w.Q=-1
w.at=""},
$S:0}
A.ek9.prototype={
$0(){return this.a.as=0},
$S:0}
A.eka.prototype={
$0(){return this.a.z=""},
$S:0}
A.ekb.prototype={
$0(){return this.a.as=this.b},
$S:0}
A.ek7.prototype={
$0(){return this.a.z=""},
$S:0}
A.ek8.prototype={
$0(){return this.a.as=2000+this.b},
$S:0}
A.ek6.prototype={
$0(){return this.a.z=""},
$S:0}
A.ek2.prototype={
$1(d){return d.a===this.a},
$S:z+11}
A.ek3.prototype={
$0(){return this.a.as=5000+this.b*100+this.c},
$S:0}
A.ek4.prototype={
$0(){var w=this.a
w.at=""
w.as=0},
$S:0}
A.ek5.prototype={
$0(){return this.a.as=5000+this.b*100+this.c},
$S:0}
A.ekf.prototype={
$0(){var w=this.b,v=D.d.t(B.GU,w.z),u=this.a.a
if(v)w.b_t(u)
else w.b_v(u)},
$S:0}
A.ejC.prototype={
$1(d){var w=null
return C.ej(C.a([C.bK(!1,B.fjQ,w,w,!0,w,w,new A.ejA(d),w,w),C.bJ(D.IP,new A.ejB(this.a,d),w)],x.p),w,w,E.mX,B.f9p,w,w,w,w,B.fgI,w)},
$S:19}
A.ejA.prototype={
$0(){C.a6(this.a,!1).O(null)
return null},
$S:0}
A.ejB.prototype={
$0(){C.a6(this.b,!1).O(null)
this.a.avB(!0)},
$S:0}
A.ejz.prototype={
$1(d){var w,v=null,u=this.a,t=u.d
t===$&&C.c()
w=t.c
w===$&&C.c()
t=C.d("The "+w.toLowerCase()+" is built, wired, painted and tested.\n\nMistakes: "+t.f+"\nShocks: "+t.r+"\nLives left: "+t.e+"\n\nEvery job is a little different. Ready for another one?",v,v,v,v,v,v,B.a6O,v,v,v)
return C.ej(C.a([C.bK(!1,B.fu3,v,v,!0,v,v,new A.ejx(d),v,v),C.bJ(B.fgB,new A.ejy(u,d),v)],x.p),v,v,E.mX,t,v,v,v,v,B.fog,v)},
$S:19}
A.ejx.prototype={
$0(){C.a6(this.a,!1).O(null)
return null},
$S:0}
A.ejy.prototype={
$0(){C.a6(this.b,!1).O(null)
this.a.aXc()},
$S:0}
A.ejF.prototype={
$0(){var w,v,u
if(!this.b)this.a.e=D.o.G(Date.now(),1e5)
w=this.a
v=w.gCj(0)
u=w.d
u===$&&C.c()
w.d=A.fQB(null,null,u.b,v)
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
A.ejT.prototype={
$1(d){return new C.K(d,new A.ejU(),d.$ti.k("K<ak.E,n>")).aI(0,", ")},
$S:1804}
A.ejU.prototype={
$1(d){return A.l0(d).b},
$S:73}
A.ejG.prototype={
$1(d){var w=this.a.d
w===$&&C.c()
return!w.x.ai(0,d.a)},
$S:z+4}
A.ejH.prototype={
$1(d){var w=this.a.d
w===$&&C.c()
return!w.z.t(0,d.a)},
$S:z+4}
A.ejI.prototype={
$1(d){var w=this.a.d
w===$&&C.c()
return!w.y.t(0,d)},
$S:33}
A.ejL.prototype={
$1(d){return!d.a},
$S:z+6}
A.ejM.prototype={
$1(d){return d.b<3},
$S:z+6}
A.ejN.prototype={
$1(d){return!d.c},
$S:z+6}
A.ejO.prototype={
$1(d){return!d.d},
$S:z+6}
A.ejP.prototype={
$1(d){return!d.c},
$S:z+6}
A.ejQ.prototype={
$1(d){var w=this.a.d
w===$&&C.c()
w=w.at.h(0,d.a)
w=w==null?null:w.a
return w!==d.b},
$S:z+4}
A.ejR.prototype={
$1(d){return d.a},
$S:z+68}
A.ejS.prototype={
$1(d){var w=this.a.d
w===$&&C.c()
w=w.at.h(0,d.a)
w=w==null?null:w.b.c
return(w==null?0:w)<2},
$S:z+4}
A.ejJ.prototype={
$1(d){var w=d.b
if(w==="outlet"||w==="gfci"){w=this.a.d
w===$&&C.c()
w=w.at.h(0,d.a)
w=(w==null?null:w.c)!==!0}else w=!1
return w},
$S:z+4}
A.ejK.prototype={
$1(d){return d.b==="fan"},
$S:z+4}
A.ekw.prototype={
$0(){return this.a.cbU(this.b)},
$S:0}
A.eky.prototype={
$0(){var w=this.a
if(w.Q>=0)w.avA()
else{w.m(new A.ekk(w))
w.b1J()}},
$S:0}
A.ekk.prototype={
$0(){return this.a.as=0},
$S:0}
A.ekx.prototype={
$1(d){var w=this.a,v=w.d
v===$&&C.c()
return A.i2N(v,w.w.gu2()/1000,w.x)},
$S:z+8}
A.ekn.prototype={
$0(){var w=this.a,v=w.d
v===$&&C.c()
return w.kx(v.aH3())},
$S:0}
A.eko.prototype={
$0(){var w=this.a
return w.m(new A.ekm(w,this.b))},
$S:0}
A.ekm.prototype={
$0(){var w,v=this.b.b
v.f=!v.f
v=this.a
w=v.d
w===$&&C.c()
v.r=A.Co(w,new A.vR(v.z,v.Q,!1))},
$S:0}
A.ekp.prototype={
$0(){var w=this.a
return w.m(new A.ekl(w,this.b))},
$S:0}
A.ekl.prototype={
$0(){var w,v=this.b.b
v.e=!v.e
v=this.a
w=v.d
w===$&&C.c()
v.r=A.Co(w,new A.vR(v.z,v.Q,!1))},
$S:0}
A.ekz.prototype={
$0(){var w=this.a
return w.m(new A.ekj(w,this.b))},
$S:0}
A.ekj.prototype={
$0(){var w,v=this.a
v.y=this.b
v.z=""
w=v.d
w===$&&C.c()
v.r=A.Co(w,new A.vR("",v.Q,!1))},
$S:0}
A.ekA.prototype={
$0(){var w=this.a
return w.m(new A.eki(w))},
$S:0}
A.eki.prototype={
$0(){var w=this.a,v=w.d
v===$&&C.c()
v.aDu()
w.y=2
w.z=""
w.r=A.Co(w.d,new A.vR("",w.Q,!1))
w.A5("The boxes, the cable and the walls are done. Now the wiring: pick an Outlet or a Switch from the tray, then tap its box on the wall.",!0)},
$S:0}
A.ekB.prototype={
$0(){var w=this.a
return w.m(new A.ekh(w,this.b))},
$S:0}
A.ekh.prototype={
$0(){var w,v=this.a,u=this.b.a,t=v.z===u?"":u
v.z=t
v.as=0
w=v.d
w===$&&C.c()
v.r=A.Co(w,new A.vR(t,v.Q,!1))
if(v.z.length!==0)v.cmB(u)},
$S:0}
A.ekC.prototype={
$0(){var w=this.a,v=w.d
v===$&&C.c()
return w.kx(v.cM5())},
$S:0}
A.ekD.prototype={
$1(d){return!this.a.b.b.iR(0,d.a)},
$S:z+12}
A.ekE.prototype={
$0(){var w=this.a
return w.m(new A.ekg(w,this.b,this.c))},
$S:0}
A.ekg.prototype={
$0(){var w,v=this,u=v.c,t=u.a
if(v.b.b.b.iR(0,t)){v.a.avC("That wire is already fastened. Tap the wire in the 3D view to take it off.")
return}w=v.a
if(w.at===t)t=""
w.at=t
if(t.length!==0)w.A5(u.b+": now tap the screw it belongs on, or press the matching button below.",!0)},
$S:0}
A.ekq.prototype={
$1(d){return!this.a.b.b.ai(0,d.a)},
$S:z+11}
A.ekr.prototype={
$0(){var w=this.a
return w.b_s(w.Q,this.b.a)},
$S:0}
A.eks.prototype={
$0(){var w=this.a,v=w.d
v===$&&C.c()
return w.kx(v.bfC(w.Q))},
$S:0}
A.ekt.prototype={
$0(){var w=this.a,v=w.d
v===$&&C.c()
return w.kx(v.cQg(w.Q))},
$S:0}
A.eku.prototype={
$0(){var w=this.a,v=w.d
v===$&&C.c()
return w.kx(v.bas(w.Q))},
$S:0}
A.ekv.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&C.c()
w=u.cRh(v.Q)
v.kx(w)
if(w.a)v.avA()},
$S:0}
A.ek1.prototype={
$1(d){return new C.e0(new A.ek0(this.a),null)},
$S:20}
A.ek0.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=C.aI(d,l,x.l).w,j=this.a,i=j.d
i===$&&C.c()
w=i.c
w===$&&C.c()
v=x.p
i=C.a([C.d("Job: "+w,l,l,l,l,l,l,D.du,l,l,l),D.at,C.d("Mistakes "+i.f+" \xb7 Shocks "+i.r+" \xb7 Lives "+i.e,l,l,l,l,l,l,B.IB,l,l,l),D.S,B.fko,D.an],v)
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
i.push(C.p(l,new C.x(o+" "+n+" at "+p.b+m,l,D.rA,l,l,l,l,l,l,l,l,l),D.f,l,l,new C.o(s,l,new C.bP(q,q,q,q),new C.bq(r,r,r,r),l,l,D.n),l,l,l,D.eO,D.bS,l,l,l))}i.push(D.S)
i.push(C.A(C.a([B.bvY,C.auz(l,l,l,l,!1,D.y,l,l,l,l,l,l,new A.ejY(j,e),l,l,l,l,l,l,l,l,j.d.b)],v),D.m,l,D.e,D.j,0,l,l))
i.push(D.an)
i.push(C.A(C.a([C.D(C.dV(B.fay,new A.ejZ(j,d),l),1),D.ab,C.D(C.bJ(B.aQc,new A.ek_(j,d),l),1)],v),D.m,l,D.e,D.j,0,l,l))
return C.bn(!0,new C.cV(new C.aY(0,1/0,0,k.a.b*0.8),C.cB(i,l,D.bW,l,l,D.ah,!0),l),!0,!1,D.af,!0,!0)},
$S:83}
A.ejY.prototype={
$1(d){var w=this.a,v=w.d
v===$&&C.c()
v.b=d
for(v=v.at,v=new C.dt(v,v.r,v.e);v.C();)v.d.b.r=d
this.b.$1(new A.ejW())
w.m(new A.ejX())},
$S:9}
A.ejW.prototype={
$0(){},
$S:0}
A.ejX.prototype={
$0(){},
$S:0}
A.ejZ.prototype={
$0(){C.a6(this.b,!1).O(null)
this.a.avB(!0)},
$S:0}
A.ek_.prototype={
$0(){C.a6(this.b,!1).O(null)
this.a.aXc()},
$S:0}
A.ffW.prototype={
$1(d){var w=this.a,v=d.a
return w>v[0]&&w<v[1]},
$S:707}
A.ffX.prototype={
$1(d){var w=this.a,v=d.a
return w>v[2]&&w<v[3]},
$S:707}
A.fmD.prototype={
$1(d){return 5000+this.a.a*100+d},
$S:74}
A.fmE.prototype={
$1(d){return 3000+this.a.a},
$S:74}
A.fmF.prototype={
$1(d){return 2000+this.a.a},
$S:74}
A.fmI.prototype={
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
A.fmG.prototype={
$3(d,e,f){return G.aOQ(d,e,0,f+this.a.a*5)},
$S:311}
A.fmH.prototype={
$0(){var w,v=this.a
if(v.c)w="A place in the ceiling for a "+(v.e==="fan"?"fan (needs a fan-rated box)":"light")+"."
else w="A place on the wall at "+(v.e==="switch"?"switch height, about 48 inches from the floor":"outlet height, about 16 inches from the floor")+"."
return new A.d1(v.b,w,A.a1V(v,B.a7M),26)},
$S:z+70}
A.fCJ.prototype={
$1(d){return d.e==="fan"},
$S:z+26}
A.fCK.prototype={
$1(d){return d.b==="light"},
$S:z+4}
A.cot.prototype={
$1(d){return d.a===this.a&&!d.c},
$S:z+9}
A.cop.prototype={
$1(d){return d.a===B.Z_},
$S:z+9}
A.cor.prototype={
$1(d){return d.c},
$S:z+9}
A.cos.prototype={
$1(d){return d.c},
$S:z+9}
A.coq.prototype={
$1(d){return B.vL.h(0,d.a).e===this.a&&!d.c},
$S:z+9}
A.em0.prototype={
$0(){var w=this.a
w.z=this.b
w.Q=this.c},
$S:0}
A.em1.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new A.em_(w))},
$S:0}
A.em_.prototype={
$0(){return this.a.z=null},
$S:0}
A.elQ.prototype={
$0(){return this.a.y=0},
$S:0}
A.elV.prototype={
$0(){return this.a.as=!0},
$S:0}
A.elW.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new A.elU(w))},
$S:11}
A.elU.prototype={
$0(){return this.a.as=!1},
$S:0}
A.elX.prototype={
$0(){var w=this.a,v=w.d
v===$&&C.c()
w.r=A.afj(v.d)
w.y=this.b},
$S:0}
A.elY.prototype={
$1(d){return this.a.cc0()},
$S:8}
A.elZ.prototype={
$1(d){return this.a.c3k()},
$S:8}
A.elT.prototype={
$1(d){var w=null
return C.ej(C.a([C.bJ(B.fhQ,new A.elS(this.a,d),w)],x.p),w,w,E.mX,B.fgY,w,w,w,w,B.fn1,w)},
$S:19}
A.elS.prototype={
$0(){C.a6(this.b,!1).O(null)
this.a.auZ()},
$S:0}
A.elP.prototype={
$1(d){var w=null,v=this.a,u=v.d
u===$&&C.c()
u=C.d("Every problem on the customer's list is fixed.\n\nMistakes: "+u.f+"\nShocks: "+u.r+"\nLives left: "+u.e+"\n\nThe next call will have different problems.",w,w,w,w,w,w,B.a6O,w,w,w)
return C.ej(C.a([C.bK(!1,B.aQa,w,w,!0,w,w,new A.elN(d),w,w),C.bJ(B.fj2,new A.elO(v,d),w)],x.p),w,w,E.mX,u,w,w,w,w,B.fpm,w)},
$S:19}
A.elN.prototype={
$0(){C.a6(this.a,!1).O(null)
return null},
$S:0}
A.elO.prototype={
$0(){C.a6(this.b,!1).O(null)
this.a.auZ()},
$S:0}
A.elR.prototype={
$0(){var w,v,u=this.a
u.e=D.o.G(Date.now(),1e5)
w=u.gCj(0)
v=u.d
v===$&&C.c()
w=A.h6Q(v.b,w)
u.d=w
u.r=A.afj(w.d)
u.at=!1
u.z=null
u.y=0},
$S:0}
A.emd.prototype={
$0(){return this.a.cwi(this.b)},
$S:0}
A.em9.prototype={
$1(d){return d<=5},
$S:33}
A.em8.prototype={
$1(d){var w=this.a,v=w.d
v===$&&C.c()
return A.hfa(v.d,w.w.gu2()/1000)},
$S:z+8}
A.ema.prototype={
$1(d){return!d.c},
$S:z+9}
A.emb.prototype={
$1(d){return B.vL.h(0,d.a).a},
$S:z+48}
A.emc.prototype={
$0(){var w=this.a
return w.m(new A.em7(w,this.b))},
$S:0}
A.em7.prototype={
$0(){return this.a.x=this.b},
$S:0}
A.em6.prototype={
$1(d){return new C.e0(new A.em5(this.a),null)},
$S:20}
A.em5.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=this.a,j=k.d
j===$&&C.c()
w=x.p
j=C.a([B.ffp,D.at,C.d("Mistakes "+j.f+" \xb7 Shocks "+j.r+" \xb7 Lives "+j.e,l,l,l,l,l,l,B.IB,l,l,l),D.S],w)
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
j.push(B.fky)
j.push(D.P)
j.push(C.A(C.a([B.buW,C.auz(l,l,l,l,!1,D.y,l,l,l,l,l,l,new A.em3(k,e),l,l,l,l,l,l,l,l,k.d.b)],w),D.m,l,D.e,D.j,0,l,l))
j.push(C.bJ(B.fnr,new A.em4(k,d),l))
return C.bn(!0,C.cB(j,l,D.bW,l,l,D.ah,!0),!0,!1,D.af,!0,!0)},
$S:83}
A.em3.prototype={
$1(d){var w=this.a.d
w===$&&C.c()
w.b=d
this.b.$1(new A.em2())},
$S:9}
A.em2.prototype={
$0(){},
$S:0}
A.em4.prototype={
$0(){C.a6(this.b,!1).O(null)
this.a.auZ()},
$S:0}
A.f9d.prototype={
$1(d){return d.c===this.a},
$S:z+14}
A.bPJ.prototype={
$1(d){var w,v,u,t=this.a,s=t.fr,r=A.hji(t,A.bzu(s==null?"tv100":s))
t=r.c
s=r.a/2
w=t-s-18
v=this.b
u=-v/2+14
if(w<u)w=t+s+18
w=D.k.D(w,u,v/2-14)
return new C.y(new C.y(w,d),Math.atan2(t-w,-d))},
$S:1806}
A.bPK.prototype={
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
w.buI=w.q})();(function installTearOffs(){var w=a._instance_1u,v=a._instance_2u,u=a._instance_0u,t=a.installInstanceTearOff,s=a._instance_0i
w(A.aRv.prototype,"gcLL","bdN",17)
var r
v(r=A.aCr.prototype,"gbJJ","bJK",67)
u(r,"gA4","k9",0)
t(r,"gc2V",0,1,null,["$2$keepTour","$1"],["avx","OS"],28,0,0)
w(r,"gc2X","c2Y",5)
u(r,"gcy4","cy5",13)
u(r,"gctF","a1p",0)
u(r,"gctg","cth",0)
u(r,"gctE","azx",0)
u(r,"gc2W","DI",13)
u(r,"gcbO","a_6",13)
u(r,"gcbd","ZY",13)
u(r,"gbxE","bxF",13)
u(r,"gc30","c31",0)
u(r,"gcjG","cjH",0)
s(r,"gc2Z","c3_",0)
u(r=A.ayi.prototype,"gc35","xo",0)
u(r,"gIk","nW",0)
w(r,"gIl","Im",5)
u(r,"gcgM","cgN",0)
u(r,"gcvK","cvL",0)
u(r=A.aEd.prototype,"gIk","nW",0)
w(r,"gIl","Im",5)
u(r,"gc36","c37",0)
u(r=A.ayx.prototype,"gIk","nW",0)
w(r,"gIl","Im",5)
s(r,"gc33","c34",0)
u(r=A.azq.prototype,"gIk","nW",0)
w(r,"gIl","Im",5)
u(r=A.aCW.prototype,"gc39","aXa",0)
w(r,"gc3a","c3b",5)
w(A.b3A.prototype,"gaoe","bml",65)
u(r=A.aD2.prototype,"gbNE","aRD",0)
u(r,"gbAa","bAb",0)
u(r,"gc3e","avA",0)
w(r,"gc3g","c3h",5)
u(r=A.aD6.prototype,"gc3l","aXe",0)
w(r,"gc3m","c3n",5)})();(function inheritance(){var w=a.mixinHard,v=a.inheritMany,u=a.inherit
v(C.aC,[A.E,A.nd,A.d1,A.ud,A.zn,A.WL,A.jf,A.bPz,A.BY,A.b9l,A.b9G,A.beH,A.dgu,A.LF,A.dm1,A.daE,A.EC,A.O1,A.Hd,A.L6,A.aRv,A.mi,A.XI,A.zM,A.a3D,A.BO,A.a44,A.hk,A.Dm,A.pv,A.b6N,A.qc,A.aTP,A.a47,A.aTU,A.bPL,A.Fg,A.jy,A.M7,A.cgi,A.Er,A.nc,A.Wb,A.cg8,A.yr,A.pI,A.WR,A.atU,A.aSh,A.eE,A.b3A,A.kW,A.vR,A.u1,A.Ly,A.coo,A.VV,A.uy,A.O2,A.B_,A.cl2,A.Jl,A.bp8,A.bPI,A.cuN])
v(C.hT,[A.bVv,A.bVw,A.bVu,A.bVx,A.bVy,A.fKP,A.fKN,A.fKO,A.fKM,A.fKG,A.bGh,A.bGg,A.clY,A.clZ,A.clU,A.clV,A.clX,A.eSj,A.eSi,A.eSf,A.eSg,A.eSh,A.eSd,A.bOn,A.bOj,A.bOr,A.bOm,A.bOu,A.bOs,A.bOw,A.bHl,A.bHi,A.bHj,A.bHk,A.bHp,A.bHn,A.bHo,A.bHm,A.bHr,A.dKd,A.dK8,A.dKs,A.dKb,A.dKv,A.fnF,A.fL7,A.fnL,A.fnM,A.fnJ,A.fnK,A.fnH,A.fnI,A.flJ,A.flK,A.f9c,A.fly,A.fL6,A.fL3,A.bP0,A.bPC,A.bPD,A.bPH,A.bPG,A.bPF,A.bPE,A.e2h,A.e2e,A.e2f,A.e2g,A.e1C,A.e1B,A.e1m,A.e1j,A.e29,A.e28,A.e21,A.e1X,A.e1K,A.e1H,A.e16,A.e18,A.e19,A.e17,A.e12,A.e13,A.e2a,A.e15,A.e14,A.e0k,A.e0e,A.e0f,A.e0g,A.e2c,A.e0t,A.e0s,A.e0p,A.e0m,A.e1s,A.dmr,A.flM,A.flV,A.flN,A.flO,A.flQ,A.flT,A.flU,A.flR,A.ffU,A.ffS,A.foB,A.foC,A.foD,A.f6I,A.fgr,A.fgd,A.fge,A.fgf,A.fgg,A.fgj,A.fgk,A.fgl,A.fgm,A.fgn,A.fgo,A.fgp,A.fgq,A.fgh,A.fgi,A.fm1,A.flY,A.fm0,A.fm_,A.dKw,A.fDd,A.fDc,A.d29,A.d2b,A.d2r,A.d2x,A.eLV,A.eM2,A.eM3,A.d57,A.d5h,A.d5i,A.d5k,A.dcc,A.dcn,A.dcm,A.dcp,A.fmC,A.fmB,A.fmA,A.flL,A.fo2,A.cgc,A.cgd,A.cg9,A.cge,A.cgf,A.cgg,A.cgh,A.cga,A.cgb,A.fmz,A.fmx,A.fmr,A.fmu,A.fms,A.fmt,A.fmy,A.fmv,A.fmw,A.fCp,A.fCo,A.efT,A.efE,A.efJ,A.efU,A.efW,A.efV,A.efO,A.efM,A.fKF,A.cl6,A.cld,A.cle,A.clf,A.clg,A.cli,A.clh,A.cl5,A.cl3,A.cl4,A.clb,A.clc,A.cl7,A.cl8,A.cl9,A.cla,A.eju,A.ejv,A.ek2,A.ejC,A.ejz,A.ejT,A.ejU,A.ejG,A.ejH,A.ejI,A.ejL,A.ejM,A.ejN,A.ejO,A.ejP,A.ejQ,A.ejR,A.ejS,A.ejJ,A.ejK,A.ekx,A.ekD,A.ekq,A.ek1,A.ejY,A.ffW,A.ffX,A.fmD,A.fmE,A.fmF,A.fmI,A.fmG,A.fCJ,A.fCK,A.cot,A.cop,A.cor,A.cos,A.coq,A.elY,A.elZ,A.elT,A.elP,A.em9,A.em8,A.ema,A.emb,A.em6,A.em3,A.f9d,A.bPJ,A.bPK])
v(C.kf,[A.bVt,A.clW,A.bOk,A.bOp,A.bOo,A.foO,A.foP,A.foQ,A.foR,A.foS,A.f7T,A.fL4,A.fL5,A.e1A,A.e27,A.e1W,A.flX,A.flP,A.flS,A.flW,A.ffT,A.flZ,A.d2c,A.eM_,A.d56,A.fo3,A.clj,A.ek0,A.em5])
u(A.AC,C.oE)
v(C.mH,[A.b3N,A.bcK,A.bgi])
v(C.ag,[A.atr,A.U_,A.N3,A.ML,A.GV,A.a8t,A.a3U,A.azp,A.Va,A.Vd,A.aq_])
v(C.ah,[A.aLB,A.bhQ,A.aCr,A.bhR,A.ayi,A.aEd,A.ayx,A.azq,A.aCW,A.aD2,A.aD6])
u(A.boX,A.aLB)
v(C.j3,[A.eSe,A.bOv,A.bOq,A.bOl,A.bOt,A.dKc,A.dKp,A.dKj,A.dKk,A.dKi,A.dK9,A.dKt,A.dKr,A.dKq,A.dK7,A.dKe,A.dKf,A.dKg,A.dKh,A.dKa,A.dKm,A.dKn,A.dKo,A.dKl,A.dKu,A.flz,A.e1E,A.e1F,A.e1D,A.e1G,A.e10,A.e1O,A.e1b,A.e1c,A.e1d,A.e1e,A.e1f,A.e1a,A.e1g,A.e1w,A.e1v,A.e1x,A.e1y,A.e1z,A.e1k,A.e1i,A.e1l,A.e1h,A.e20,A.e2_,A.e22,A.e23,A.e24,A.e25,A.e26,A.e1T,A.e1R,A.e1S,A.e1U,A.e1Q,A.e1V,A.e1J,A.e1L,A.e1Y,A.e1P,A.e1N,A.e1I,A.e1M,A.e0j,A.e0h,A.e11,A.e1Z,A.e1t,A.e1u,A.e0i,A.e0Q,A.e0R,A.e0S,A.e0T,A.e0U,A.e0V,A.e0P,A.e0W,A.e0O,A.e0X,A.e0N,A.e0Y,A.e0M,A.e0Z,A.e0L,A.e1_,A.e2d,A.e2b,A.e0C,A.e0u,A.e0D,A.e0r,A.e0E,A.e0F,A.e0q,A.e0G,A.e0H,A.e0I,A.e0o,A.e0J,A.e0n,A.e0K,A.e0v,A.e0w,A.e0x,A.e0y,A.e0z,A.e0A,A.e0B,A.e0l,A.e1p,A.e1q,A.e1o,A.e1r,A.e1n,A.fmW,A.dKz,A.dKA,A.dKy,A.dKB,A.dKx,A.dKE,A.dKF,A.dKG,A.dKH,A.dKI,A.dKJ,A.dKK,A.dKL,A.dKC,A.dKD,A.cpC,A.cpD,A.bRQ,A.d2h,A.d2i,A.d2g,A.d2a,A.d2d,A.d2e,A.d2f,A.d2j,A.d2u,A.d2s,A.d2q,A.d2t,A.d2p,A.d2v,A.d2w,A.d2y,A.d2o,A.d2z,A.d2n,A.d2A,A.d2m,A.d2B,A.d2l,A.d2C,A.d2k,A.eLY,A.eLZ,A.eLX,A.eLR,A.eLS,A.eLT,A.eLU,A.eLW,A.eM6,A.eM4,A.eM1,A.eM5,A.eM0,A.d5c,A.d5d,A.d5b,A.d54,A.d58,A.d59,A.d5a,A.d55,A.d5n,A.d5j,A.d5g,A.d5l,A.d5f,A.d5m,A.d5e,A.dch,A.dci,A.dcg,A.dcb,A.dcd,A.dce,A.dcf,A.dcq,A.dcl,A.dco,A.dck,A.dcj,A.c5v,A.fmo,A.fmp,A.fmq,A.efR,A.efS,A.efQ,A.efK,A.efC,A.efD,A.efH,A.efI,A.efP,A.efG,A.efF,A.efY,A.efX,A.efL,A.efN,A.ekd,A.eke,A.ekc,A.ejs,A.ejt,A.ejr,A.ejD,A.ejw,A.ejV,A.ejE,A.ek9,A.eka,A.ekb,A.ek7,A.ek8,A.ek6,A.ek3,A.ek4,A.ek5,A.ekf,A.ejA,A.ejB,A.ejx,A.ejy,A.ejF,A.ekw,A.eky,A.ekk,A.ekn,A.eko,A.ekm,A.ekp,A.ekl,A.ekz,A.ekj,A.ekA,A.eki,A.ekB,A.ekh,A.ekC,A.ekE,A.ekg,A.ekr,A.eks,A.ekt,A.eku,A.ekv,A.ejW,A.ejX,A.ejZ,A.ek_,A.fmH,A.em0,A.em1,A.em_,A.elQ,A.elV,A.elW,A.elU,A.elX,A.elS,A.elN,A.elO,A.elR,A.emd,A.emc,A.em7,A.em2,A.em4])
v(C.au,[A.abv,A.bgU,A.b54,A.AW,A.a6_])
u(A.qT,C.m4)
w(A.aLB,C.c9)})()
C.jT(b.typeUniverse,JSON.parse('{"atr":{"ag":[],"r":[]},"AC":{"aB":[]},"b3N":{"aB":[]},"boX":{"ah":["atr"]},"U_":{"ag":[],"r":[]},"bhQ":{"ah":["U_"]},"abv":{"au":[],"r":[]},"bcK":{"aB":[]},"N3":{"ag":[],"r":[]},"aCr":{"ah":["N3"]},"bgU":{"au":[],"r":[]},"bgi":{"aB":[]},"GV":{"ag":[],"r":[]},"a8t":{"ag":[],"r":[]},"a3U":{"ag":[],"r":[]},"azp":{"ag":[],"r":[]},"ML":{"ag":[],"r":[]},"bhR":{"ah":["ML"]},"b54":{"au":[],"r":[]},"AW":{"au":[],"r":[]},"ayi":{"ah":["GV"]},"aEd":{"ah":["a8t"]},"ayx":{"ah":["a3U"]},"azq":{"ah":["azp"]},"a6_":{"au":[],"r":[]},"Va":{"ag":[],"r":[]},"aCW":{"ah":["Va"]},"Vd":{"ag":[],"r":[]},"aD2":{"ah":["Vd"]},"aq_":{"ag":[],"r":[]},"aD6":{"ah":["aq_"]}}'))
var y={g:"A shut-off valve goes on the pipe that comes out of the wall.",x:"Fasten the bare copper ground to the GREEN screw.",b:"Move it with the arrow buttons, turn it, change its colour or take it out.",s:"Pick a paint colour above to change this wall.",E:"Switch the power on and flip the wall switch.",j:"The bare copper ground wire only goes on the GREEN screw.",u:"The gold screws are BRASS. They are for the HOT wire (black).",o:"The white-silver screws are NICKEL. They are for the NEUTRAL wire (white).",k:"There is no medicine left. Buy some in the shop.",r:"Turn the breaker OFF and test that the wires are dead."}
var x=(function rtii(){var w=C.ax
return{W:w("lR<w?>"),w:w("bm<n,n>"),J:w("bm<n,N>"),M:w("eY<n>"),e:w("aSh"),m:w("qT"),gN:w("H7"),fa:w("ay<LQ?>"),fC:w("Hd"),gQ:w("O<L6>"),V:w("O<ac>"),O:w("O<w>"),gw:w("O<Ly>"),dh:w("O<H7>"),_:w("O<a44>"),D:w("O<qc>"),cX:w("O<aTP>"),A:w("O<a47>"),ha:w("O<Hd>"),r:w("O<mi>"),E:w("O<ud>"),Z:w("O<jy>"),gL:w("O<aj<H>>"),ez:w("O<a4<n,aC>>"),f4:w("O<a4<n,cf>>"),T:w("O<B_>"),dN:w("O<u>"),B:w("O<pI>"),F:w("O<nc>"),v:w("O<hn>"),z:w("O<nd>"),a6:w("O<+(a7U,H)>"),L:w("O<+(n,n)>"),f:w("O<+(N,N)>"),ek:w("O<+(H,n)>"),al:w("O<+(H,N,R)>"),X:w("O<+(H,H,H)>"),U:w("O<+(N,N,N,N)>"),az:w("O<+(H,H,N,R,n)>"),y:w("O<O1>"),I:w("O<O2>"),h:w("O<WL>"),gD:w("O<WR>"),s:w("O<n>"),o:w("O<E>"),p:w("O<r>"),K:w("O<zM>"),fJ:w("O<b9l>"),bl:w("O<BY>"),a:w("O<Jl>"),b:w("O<kW>"),fG:w("O<bp8>"),u:w("O<R>"),n:w("O<N>"),t:w("O<H>"),dS:w("O<aB?>"),k:w("O<cf>"),eF:w("cr<ah<ag>>"),dg:w("aj<N>"),j:w("aj<@>"),P:w("a4<n,@>"),G:w("a4<@,@>"),l:w("iz"),c:w("cp"),q:w("d1"),aU:w("aC"),dx:w("u"),ej:w("Ix"),fX:w("nd"),aB:w("+(N,N)"),c5:w("dw<H>"),cH:w("atU"),N:w("n"),e7:w("bo<N>"),Q:w("E"),ac:w("cx<H>"),fZ:w("a2<Er>"),cc:w("a2<n>"),dD:w("a2<H>"),bB:w("b9G"),c9:w("beH"),R:w("R"),i:w("N"),C:w("@"),S:w("H"),d:w("LF?"),eT:w("LQ?"),g:w("aj<@>?"),dy:w("a4<n,@>?"),Y:w("a4<@,@>?"),cU:w("pL?"),x:w("cf"),H:w("~")}})();(function constants(){var w=a.makeConstList
B.aU_=new A.eE(!0,"The water is on and nothing leaks. Perfect job!",!1,"")
B.aU0=new A.eE(!0,"Primer and paint rolled on.",!1,"")
B.aU1=new A.eE(!1,"This call is over. Start a new one.",!1,"")
B.aU2=new A.eE(!1,"That is not a place for a sheet.",!1,"")
B.aU3=new A.eE(!0,"Sanded smooth. Wear a mask: the dust is bad to breathe.",!1,"")
B.a8L=new A.eE(!1,"There is no device here.",!1,"")
B.aU4=new A.eE(!0,"You look closely. Everything looks fine here.",!1,"")
B.aU5=new A.eE(!1,"ZAP! You were shocked badly and it was your last life. Always turn the breaker OFF and test before you touch wires.",!0,"shock")
B.aU6=new A.eE(!0,"Paper tape pressed into the seam.",!1,"")
B.aU7=new A.eE(!0,"Unplugged.",!1,"")
B.aU8=new A.eE(!0,"Breaker OFF. It is safe to work on the wires.",!1,"")
B.aU9=new A.eE(!1,"ZAP! You were shocked badly. That was your last life: the job is over. Lesson: ALWAYS turn the breaker OFF and test the wires before you touch them.",!0,"shock")
B.aUa=new A.eE(!1,"There is nothing there.",!1,"")
B.aUb=new A.eE(!1,"The outlet is burnt. Nothing works. Pull it out and put in a new one.",!0,"")
B.aUc=new A.eE(!0,"The water is on and nothing leaks yet, but the job is not finished.",!1,"")
B.aUd=new A.eE(!0,"Sheet hung. Now screw it to the studs.",!1,"")
B.aUe=new A.eE(!0,"Hole drilled through the middle of the stud, at the cable height. Holes go in the center so a nail cannot reach the cable.",!1,"")
B.aUf=new A.eE(!0,"Plugged in. Nothing happens because the breaker is off. Turn it on to test.",!1,"")
B.aUg=new A.eE(!0,"You flipped the tripped breaker fully OFF. Fix the problem before you turn it on again.",!1,"")
B.aUh=new A.eE(!0,"Click.",!1,"")
B.aUi=new A.eE(!0,"The wires are folded back and the device is in the box. Now put the cover on.",!1,"")
B.aUj=new A.eE(!0,"Breaker OFF. The wires on this circuit are dead now. (Always test them to be sure.)",!1,"")
B.aUk=new A.eE(!1,"Nothing is wet.",!1,"")
B.aUl=new A.eE(!0,"Power is on.",!1,"")
B.aUm=new A.eE(!0,"Water OFF at the main valve. You can cut into the pipes safely now.",!1,"")
B.aUn=new A.eE(!0,"Opening cut around the box with the drywall saw. Keep it tight: the plate has to cover the edge.",!1,"")
B.aUo=new A.eE(!0,"Device pulled out of the box.",!1,"")
B.aUp=new A.eE(!0,"Screw set just below the paper, not through it.",!1,"")
B.aUq=new A.eE(!1,"ZAP! You touched a live wire. In Learn mode you are not hurt, but in real life this can kill. Switch the breaker OFF and test the wires first.",!0,"shock")
B.aUr=new A.eE(!0,"Cover on. Now you can turn the breaker on and test.",!1,"")
B.Un=new A.eE(!1,"",!1,"")
B.aUs=new A.eE(!0,"Device taken out. You can put it somewhere else, or put in a new one.",!1,"")
B.aUt=new A.eE(!0,"Breaker back ON.",!1,"")
B.aUu=new A.eE(!1,"That is not a stud.",!1,"")
B.aUv=new A.eE(!0,"Off.",!1,"")
B.aUw=new A.eE(!1,"Nothing to flip yet.",!1,"")
B.aUx=new A.eE(!0,"Wire taken off.",!1,"")
B.aUy=new A.eE(!0,"The mud is dry.",!1,"")
B.aUz=new A.eE(!0,"Breaker reset.",!1,"")
B.aUA=new A.eE(!0,"Box mounted. (Careful: this is not a fan-rated box. A fan on it could fall.)",!1,"")
B.foS=new C.x("Tap a piece of furniture, or add one:",null,N.SN,null,null,null,null,null,null,null,null,null)
B.e49=new C.C(D.n2,B.foS,null)
B.aUH=new C.bH(D.a3,null,null,B.e49,null)
B.Ej=new C.w(1,0.08627450980392157,0.10588235294117647,0.1411764705882353,D.t)
B.aXB=new C.bP(D.Y,D.Y,A0.uI,D.Y)
B.b_2=new C.o(B.Ej,null,B.aXB,null,null,null,D.n)
B.fpt=new C.x("\u2600\ufe0f Let it dry",null,I.zj,null,null,null,null,null,null,null,null,null)
B.b35=new C.cq(D.A,null,null,B.fpt,null)
B.fpf=new C.x("\u23e9 Skip to the wiring",null,I.zj,null,null,null,null,null,null,null,null,null)
B.b3d=new C.cq(D.A,null,null,B.fpf,null)
B.fe6=new C.x("\ud83c\udfd7\ufe0f",null,D.uv,null,null,null,null,null,null,null,null,null)
B.b3s=new C.cq(D.A,null,null,B.fe6,null)
B.fdW=new C.x("\ud83c\udfe0",null,D.aP7,null,null,null,null,null,null,null,null,null)
B.b3S=new C.cq(D.A,null,null,B.fdW,null)
B.b5b=new C.w(1,0.9294117647058824,0.9098039215686274,0.8627450980392157,D.t)
B.b5m=new C.w(1,0.9725490196078431,0.9647058823529412,0.9333333333333333,D.t)
B.wK=new C.w(1,0.5450980392156862,0.3686274509803922,0.20392156862745098,D.t)
B.ab3=new C.w(1,0.611764705882353,0.5568627450980392,0.4588235294117647,D.t)
B.ab6=new C.w(1,0.24705882352941178,0.5607843137254902,0.30980392156862746,D.t)
B.wL=new C.w(1,0.9450980392156862,0.9450980392156862,0.9176470588235294,D.t)
B.b61=new C.w(1,0.9098039215686274,0.9254901960784314,0.9372549019607843,D.t)
B.b62=new C.w(1,0.4823529411764706,0.5098039215686274,0.5450980392156862,D.t)
B.b69=new C.w(1,0.10588235294117647,0.4980392156862745,0.20392156862745098,D.t)
B.abj=new C.w(1,0.7215686274509804,0.7450980392156863,0.7725490196078432,D.t)
B.DR=new C.w(1,0.5450980392156862,0.3686274509803922,0.23529411764705882,D.t)
B.abl=new C.w(1,0.8509803921568627,0.8274509803921568,0.7725490196078432,D.t)
B.abp=new C.w(1,0.6549019607843137,0.6784313725490196,0.7098039215686275,D.t)
B.iK=new C.w(1,0.16862745098039217,0.17647058823529413,0.2,D.t)
B.b6F=new C.w(1,0.13333333333333333,0.13725490196078433,0.14901960784313725,D.t)
B.DT=new C.w(1,0.8980392156862745,0.7529411764705882,0.4823529411764706,D.t)
B.K7=new C.w(1,0.8156862745098039,0.5098039215686274,0.27450980392156865,D.t)
B.Vm=new C.w(1,0.5411764705882353,0.41568627450980394,0.2784313725490196,D.t)
B.abw=new C.w(1,0.1843137254901961,0.4196078431372549,0.23529411764705882,D.t)
B.abC=new C.w(1,0.2980392156862745,0.5450980392156862,0.2901960784313726,D.t)
B.rY=new C.w(1,0.788235294117647,0.6274509803921569,0.22745098039215686,D.t)
B.abD=new C.w(1,0.9411764705882353,0.5411764705882353,0.1411764705882353,D.t)
B.abG=new C.w(1,0.5568627450980392,0.5843137254901961,0.6196078431372549,D.t)
B.b7F=new C.w(1,0.47843137254901963,0.35294117647058826,0.22745098039215686,D.t)
B.kD=new C.w(1,0.788235294117647,0.807843137254902,0.8392156862745098,D.t)
B.abM=new C.w(1,0.4196078431372549,0.45098039215686275,0.5019607843137255,D.t)
B.abN=new C.w(1,0.5568627450980392,0.35294117647058826,0.2901960784313726,D.t)
B.A5=new C.w(1,0.9294117647058824,0.9176470588235294,0.8784313725490196,D.t)
B.b8u=new C.w(1,0.22745098039215686,0.22745098039215686,0.24705882352941178,D.t)
B.b8A=new C.w(1,0.5490196078431373,0.5764705882352941,0.6078431372549019,D.t)
B.E1=new C.w(1,0.22745098039215686,0.24705882352941178,0.2784313725490196,D.t)
B.Vv=new C.w(1,0.8980392156862745,0.8980392156862745,0.8666666666666667,D.t)
B.Kh=new C.w(1,0.10588235294117647,0.11372549019607843,0.13333333333333333,D.t)
B.Vz=new C.w(1,0.30980392156862746,0.6588235294117647,0.3764705882352941,D.t)
B.ac0=new C.w(1,0.8509803921568627,0.803921568627451,0.7215686274509804,D.t)
B.Kj=new C.w(1,0.11764705882352941,0.11764705882352941,0.12549019607843137,D.t)
B.b8X=new C.w(1,0.8862745098039215,0.8745098039215686,0.8235294117647058,D.t)
B.b90=new C.w(1,0.42745098039215684,0.2901960784313726,1,D.t)
B.b9e=new C.w(1,0.5411764705882353,0.4823529411764706,0.41568627450980394,D.t)
B.b9i=new C.w(1,0.34901960784313724,0.3176470588235294,0.29411764705882354,D.t)
B.b9k=new C.w(1,0.24705882352941178,0.6470588235294118,0.3568627450980392,D.t)
B.b9q=new C.w(1,0.8117647058823529,0.792156862745098,0.7411764705882353,D.t)
B.VE=new C.w(1,0.8117647058823529,0.8901960784313725,0.9176470588235294,D.t)
B.VF=new C.w(1,0.3333333333333333,0.396078431372549,0.4823529411764706,D.t)
B.VG=new C.w(1,0.5529411764705883,0.7843137254901961,1,D.t)
B.VJ=new C.w(1,1,0.9019607843137255,0.5019607843137255,D.t)
B.b9Q=new C.w(1,0.9490196078431372,0.7607843137254902,0.10588235294117647,D.t)
B.acl=new C.w(1,0.9490196078431372,0.9411764705882353,0.9019607843137255,D.t)
B.ba7=new C.w(1,0.9686274509803922,0.9607843137254902,0.9333333333333333,D.t)
B.acp=new C.w(1,0.6823529411764706,0.6941176470588235,0.7372549019607844,D.t)
B.nF=new C.w(1,0.1843137254901961,0.49019607843137253,0.8823529411764706,D.t)
B.baf=new C.w(1,0.788235294117647,0.7176470588235294,0.6078431372549019,D.t)
B.VM=new C.w(1,0.8901960784313725,0.6627450980392157,0.10980392156862745,D.t)
B.E8=new C.w(1,0.7137254901960784,0.7372549019607844,0.7686274509803922,D.t)
B.baj=new C.w(1,0.8431372549019608,0.8509803921568627,0.8784313725490196,D.t)
B.bat=new C.w(1,0.22745098039215686,0.49019607843137253,0.26666666666666666,D.t)
B.uR=new C.w(1,0.9019607843137255,0.8823529411764706,0.8352941176470589,D.t)
B.VQ=new C.w(1,0.3686274509803922,0.17647058823529413,0.13725490196078433,D.t)
B.Ea=new C.w(1,0.09019607843137255,0.09411764705882353,0.10588235294117647,D.t)
B.Ac=new C.w(1,0.9725490196078431,0.9725490196078431,0.9568627450980393,D.t)
B.acH=new C.w(1,0.9450980392156862,0.9568627450980393,0.9725490196078431,D.t)
B.bb2=new C.w(1,0.9019607843137255,0.9019607843137255,0.8784313725490196,D.t)
B.VU=new C.w(1,0.8941176470588236,0.9058823529411765,0.9176470588235294,D.t)
B.m6=new C.w(1,0.7686274509803922,0.6039215686274509,0.3843137254901961,D.t)
B.acV=new C.w(1,1,0.35294117647058826,0.12156862745098039,D.t)
B.acW=new C.w(1,0.5411764705882353,0.5607843137254902,0.596078431372549,D.t)
B.bbP=new C.w(1,0.5411764705882353,0.29411764705882354,0.29411764705882354,D.t)
B.Kt=new C.w(1,0.9098039215686274,0.8509803921568627,0.7372549019607844,D.t)
B.t6=new C.w(1,1,0.9450980392156862,0.6588235294117647,D.t)
B.bc8=new C.w(1,0.5411764705882353,0.5411764705882353,0.5176470588235295,D.t)
B.bca=new C.w(1,0.9647058823529412,0.9568627450980393,0.9254901960784314,D.t)
B.Kw=new C.w(1,0.47843137254901963,0.23137254901960785,0.1803921568627451,D.t)
B.ad6=new C.w(1,0.7058823529411765,0.3254901960784314,0.3254901960784314,D.t)
B.bco=new C.w(1,0.6078431372549019,0.6078431372549019,0.592156862745098,D.t)
B.Ai=new C.w(1,0.9568627450980393,0.9450980392156862,0.9176470588235294,D.t)
B.t8=new C.w(1,0.8862745098039215,0.23137254901960785,0.23137254901960785,D.t)
B.pl=new C.w(1,0.9490196078431372,0.9490196078431372,0.9254901960784314,D.t)
B.ada=new C.w(1,0.788235294117647,0.8117647058823529,0.8392156862745098,D.t)
B.bcD=new C.w(1,0.9294117647058824,0.9215686274509803,0.8941176470588236,D.t)
B.W7=new C.w(1,0.8392156862745098,0.6823529411764706,0.4470588235294118,D.t)
B.add=new C.w(1,0.9098039215686274,0.9098039215686274,0.9098039215686274,D.t)
B.El=new C.w(1,0.2901960784313726,0.2980392156862745,0.32941176470588235,D.t)
B.adj=new C.w(1,0.3686274509803922,0.43137254901960786,0.5176470588235295,D.t)
B.bdf=new C.w(1,0.20784313725490197,0.47843137254901963,0.26666666666666666,D.t)
B.bdi=new C.w(1,0.3568627450980392,0.10196078431372549,0.09019607843137255,D.t)
B.adn=new C.w(1,0.23137254901960785,0.1843137254901961,0.14901960784313725,D.t)
B.ado=new C.w(1,0.8509803921568627,0.788235294117647,0.6588235294117647,D.t)
B.m8=new C.w(1,0.9686274509803922,0.9568627450980393,0.9254901960784314,D.t)
B.bdv=new C.w(1,0.13333333333333333,0.1450980392156863,0.16862745098039217,D.t)
B.Wc=new C.w(1,0.4980392156862745,0.7215686274509804,1,D.t)
B.wW=new C.w(1,0.16470588235294117,0.1450980392156863,0.13725490196078433,D.t)
B.bdC=new C.w(1,0.5411764705882353,0.23137254901960785,0.23137254901960785,D.t)
B.bdD=new C.w(1,0.9450980392156862,0.9294117647058824,0.8784313725490196,D.t)
B.Kz=new C.w(1,0.796078431372549,0.8156862745098039,0.8392156862745098,D.t)
B.Wf=new C.w(1,0.8980392156862745,0.7254901960784313,0.11764705882352941,D.t)
B.bdZ=new C.w(1,0.7490196078431373,0.8901960784313725,1,D.t)
B.Wj=new C.w(1,0.10588235294117647,0.10588235294117647,0.11372549019607843,D.t)
B.Wk=new C.w(1,0.9529411764705882,0.9058823529411765,0.6313725490196078,D.t)
B.adH=new C.w(1,0.9490196078431372,0.9490196078431372,0.9333333333333333,D.t)
B.beD=new C.w(1,0.6274509803921569,0.6509803921568628,0.6823529411764706,D.t)
B.beO=new C.w(0,0.2196078431372549,0.7411764705882353,0.9725490196078431,D.t)
B.beV=new C.w(1,0.8156862745098039,0.35294117647058826,0.22745098039215686,D.t)
B.bf0=new C.w(1,0.8509803921568627,0.788235294117647,0.6274509803921569,D.t)
B.Wp=new C.w(1,0.9490196078431372,0.9176470588235294,0.8274509803921568,D.t)
B.adZ=new C.w(1,0.10588235294117647,0.07058823529411765,0.03529411764705882,D.t)
B.bfg=new C.w(1,0.3607843137254902,0.7019607843137254,0.9098039215686274,D.t)
B.bfi=new C.w(1,0.24705882352941178,0.26666666666666666,0.3137254901960784,D.t)
B.bfr=new C.w(1,0.12549019607843137,0.13333333333333333,0.14901960784313725,D.t)
B.KJ=new C.w(1,0.8862745098039215,0.27058823529411763,0.35294117647058826,D.t)
B.x0=new C.w(1,0.17254901960784313,0.4196078431372549,0.8392156862745098,D.t)
B.x1=new C.w(1,0.7607843137254902,0.4627450980392157,0.22745098039215686,D.t)
B.KM=new C.w(1,0.7254901960784313,0.7450980392156863,0.7764705882352941,D.t)
B.ae6=new C.w(1,0.611764705882353,0.35294117647058826,0.27058823529411763,D.t)
B.bg5=new C.w(1,0.611764705882353,0.5882352941176471,0.5450980392156862,D.t)
B.aei=new C.w(1,0.9686274509803922,0.9490196078431372,0.9019607843137255,D.t)
B.bgu=new C.w(1,0.2,0.21176470588235294,0.23137254901960785,D.t)
B.bgz=new C.w(1,0.7098039215686275,0.7333333333333333,0.7647058823529411,D.t)
B.bgB=new C.w(1,0.9294117647058824,0.9294117647058824,0.9098039215686274,D.t)
B.bgG=new C.w(1,0.9098039215686274,0.8941176470588236,0.8549019607843137,D.t)
B.aeq=new C.w(1,0.7686274509803922,0.5411764705882353,0.11764705882352941,D.t)
B.bgO=new C.w(1,0.43529411764705883,0.7137254901960784,1,D.t)
B.bgZ=new C.w(1,0.9137254901960784,0.8980392156862745,0.8549019607843137,D.t)
B.aew=new C.w(1,0.18823529411764706,0.2,0.22745098039215686,D.t)
B.KS=new C.w(1,0.9372549019607843,0.9372549019607843,0.9176470588235294,D.t)
B.aey=new C.w(0.6666666666666666,1,0.16470588235294117,0.10196078431372549,D.t)
B.bhc=new C.w(1,0.9372549019607843,0.9137254901960784,0.8627450980392157,D.t)
B.bhf=new C.w(1,0.9294117647058824,0.9019607843137255,0.8156862745098039,D.t)
B.WE=new C.w(1,0.4196078431372549,0.24705882352941178,0.19215686274509805,D.t)
B.bhk=new C.w(1,0.12156862745098039,0.6392156862745098,0.2627450980392157,D.t)
B.bhm=new C.w(1,0.803921568627451,0.6274509803921569,0.2,D.t)
B.KV=new C.w(1,0.3607843137254902,0.7019607843137254,1,D.t)
B.aeK=new C.w(1,0.9568627450980393,0.9568627450980393,0.9411764705882353,D.t)
B.bi_=new C.w(1,0.8431372549019608,0.8,0.6588235294117647,D.t)
B.biA=new C.w(1,0.9019607843137255,0.8745098039215686,0.796078431372549,D.t)
B.biC=new C.w(1,0.30980392156862746,0.6588235294117647,1,D.t)
B.biI=new C.w(1,1,0.6196078431372549,0.6196078431372549,D.t)
B.aeW=new C.w(1,0.8431372549019608,0.16470588235294117,0.16470588235294117,D.t)
B.L_=new C.w(1,0.47843137254901963,0.30980392156862746,0.1568627450980392,D.t)
B.At=new C.w(1,0.6901960784313725,0.5411764705882353,0.3568627450980392,D.t)
B.pw=new C.w(1,0.6078431372549019,0.8274509803921568,0.9607843137254902,D.t)
B.bjb=new C.w(1,0.48627450980392156,0.2901960784313726,0.22745098039215686,D.t)
B.bjc=new C.w(1,0.23137254901960785,0.6078431372549019,1,D.t)
B.bjk=new C.w(1,0.8509803921568627,0.8235294117647058,0.7607843137254902,D.t)
B.bjm=new C.w(1,0.29411764705882354,0.29411764705882354,0.3137254901960784,D.t)
B.x5=new C.w(1,0.4196078431372549,0.2901960784313726,0.19607843137254902,D.t)
B.af1=new C.w(1,0.13333333333333333,0.14901960784313725,0.17254901960784313,D.t)
B.bjs=new C.w(1,0.8117647058823529,0.788235294117647,0.7215686274509804,D.t)
B.bjA=new C.w(1,0.5450980392156862,0.4196078431372549,0.24705882352941178,D.t)
B.boB=new C.Q(10,16,10,14)
B.XE=new C.Q(11,9,11,9)
B.agA=new C.Q(14,8,14,24)
B.btj=new C.Q(4,22,4,12)
B.btw=new C.Q(4,4,8,4)
B.btz=new C.Q(4,6,12,4)
B.buq=new C.Q(9,0,9,0)
B.fuq=new C.x("Practice mode (no explanations, real shocks)",null,D.Tc,null,null,null,null,null,null,null,null,null)
B.buW=new C.bD(1,D.bi,B.fuq,null)
B.fqd=new C.x("Practice mode (no hints, no labels)",null,D.Tc,null,null,null,null,null,null,null,null,null)
B.buX=new C.bD(1,D.bi,B.fqd,null)
B.f88=new C.x("\ud83c\udfd8 Community",null,L.rz,null,null,null,null,null,null,null,null,null)
B.b3_=new C.cq(D.A,null,null,B.f88,null)
B.bv3=new C.bD(1,D.bi,B.b3_,null)
B.fie=new C.x("Construction Lab",null,L.rz,null,null,null,null,null,null,null,null,null)
B.f7B=new C.x("Wire it. Plumb it. Fix a house.",null,D.hp,null,null,null,null,null,null,null,null,null)
B.cZ2=w([B.fie,B.f7B],x.p)
B.bkj=new C.fq(D.ah,D.e,D.j,D.F,null,D.p,null,0,B.cZ2,null)
B.bvg=new C.bD(1,D.bi,B.bkj,null)
B.aOB=new C.G(!0,D.c,null,null,null,null,14,D.H,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fq4=new C.x("5 portions of food\n10 points",null,B.aOB,null,null,null,null,null,null,null,null,null)
B.bvl=new C.bD(1,D.bi,B.fq4,null)
B.fd_=new C.x("3 doses of medicine\n12 points",null,B.aOB,null,null,null,null,null,null,null,null,null)
B.bvz=new C.bD(1,D.bi,B.fd_,null)
B.fpS=new C.x("Practice mode (no hints, real shocks and fires)",null,D.Tc,null,null,null,null,null,null,null,null,null)
B.bvY=new C.bD(1,D.bi,B.fpS,null)
B.bwH=new A.a3U(null,null)
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
B.bye=new A.qc("back",0,10)
B.byf=new A.qc("back",56,11)
B.byg=new A.qc("left",40,9)
B.byh=new A.qc("right",40,10)
B.Zd=new A.qc("right",50,5)
B.aiD=new A.pv("tv100",'Giant 100"',"\ud83d\udcfa",89,!1)
B.bB_=new C.a0(63015,"MaterialIcons",!1)
B.bBt=new C.a0(63228,"MaterialIcons",!1)
B.akD=new C.a0(983222,"MaterialIcons",!1)
B.alc=new C.a0(983775,"MaterialIcons",!1)
B.ali=new C.a0(983894,"MaterialIcons",!1)
B.fG6=new A.E(-0.4,4.2,-2.4)
B.bQu=new A.ud(B.fG6,"LIVE 120 V",D.bI)
B.bgQ=new C.w(1,0.2901960784313726,0.20392156862745098,0.0784313725490196,D.t)
B.be0=new C.w(1,0.12156862745098039,0.10196078431372549,0.07058823529411765,D.t)
B.b7R=new C.w(1,0.16470588235294117,0.12156862745098039,0.07058823529411765,D.t)
B.d8c=w([B.bgQ,B.be0,B.b7R],x.O)
B.bSs=new C.a8(D.ax,D.aC,D.x,B.d8c,null,null)
B.bim=new C.w(1,0.12156862745098039,0.10196078431372549,0.1411764705882353,D.t)
B.daw=w([D.adJ,B.bim],x.O)
B.bT7=new C.a8(D.ax,D.aC,D.x,B.daw,null,null)
B.bg8=new C.w(1,0.0392156862745098,0.058823529411764705,0.1803921568627451,D.t)
B.biB=new C.w(1,0.1411764705882353,0.08235294117647059,0.3215686274509804,D.t)
B.czA=w([E.aco,B.bg8,B.biB],x.O)
B.bTg=new C.a8(D.b0,D.b5,D.x,B.czA,null,null)
B.bVh=w(["flange","wax","toilet","bolts","valve","hosehot","hosecold","faucet","tail","trap","arm"],x.s)
B.bVq=w([0,0,0,1],x.k)
B.bVP=w([0,1,2,3,4,6,7,8,9,10],x.t)
B.c7a=w([H.mw,K.RP,H.ll,K.aKP],x.f)
B.c7m=w([1,1,1],x.k)
B.c7n=w([1,1,1,1],x.k)
B.fEE=new A.E(-57.8,-32,0)
B.b0z=new A.yr(0,"Outlet spot 1",!1,B.fEE,"low")
B.fFd=new A.E(-9.8,-32,0)
B.b0w=new A.yr(1,"Outlet spot 2",!1,B.fFd,"low")
B.fFz=new A.E(38.2,-32,0)
B.b0C=new A.yr(2,"Outlet spot 3",!1,B.fFz,"low")
B.fEk=new A.E(-25.8,0,0)
B.b0A=new A.yr(3,"Switch spot 1",!1,B.fEk,"switch")
B.fF8=new A.E(22.2,0,0)
B.b0y=new A.yr(4,"Switch spot 2",!1,B.fF8,"switch")
B.fGm=new A.E(-30,48,40)
B.b0B=new A.yr(5,"Ceiling light spot",!0,B.fGm,"light")
B.fzQ=new A.E(30,48,40)
B.b0x=new A.yr(6,"Ceiling fan spot",!0,B.fzQ,"fan")
B.tW=w([B.b0z,B.b0w,B.b0C,B.b0A,B.b0y,B.b0B,B.b0x],C.ax("O<yr>"))
B.cez=w(["The living room has no power: find the tripped breaker in the panel and reset it.","The kitchen sink drips: pick the wrench and tighten the slip nut under the sink. (Build the house up to Fixtures to see the problems.)"],x.s)
B.fFn=new A.E(11,4.6,-6)
B.fBE=new A.E(11,5.4,-7.85)
B.fET=new A.E(3.4,5.4,-7.85)
B.aRF=new A.E(3.4,3.4,-7.85)
B.ceB=w([B.fFn,B.fBE,B.fET,B.aRF],x.o)
B.bai=new C.w(1,0.5411764705882353,0.35294117647058826,0.23529411764705882,D.t)
B.ac8=new C.w(1,0.10588235294117647,0.07058823529411765,0.06274509803921569,D.t)
B.bjo=new C.w(1,0.8509803921568627,0.27450980392156865,0.49411764705882355,D.t)
B.ab_=new C.w(1,0.23137254901960785,0.24705882352941178,0.3607843137254902,D.t)
B.e7I=new A.uy(B.bai,B.ac8,B.bjo,B.ab_,"michelle")
B.eFr=new A.EC(0,"Ama",0,2,B.e7I,"A nurse who works nights.")
B.bc5=new C.w(1,0.4196078431372549,0.27058823529411763,0.18823529411764706,D.t)
B.b9D=new C.w(1,0.08627450980392157,0.06274509803921569,0.06274509803921569,D.t)
B.bh0=new C.w(1,0.1803921568627451,0.5607843137254902,0.3568627450980392,D.t)
B.Ve=new C.w(1,0.1803921568627451,0.20392156862745098,0.25098039215686274,D.t)
B.e7P=new A.uy(B.bc5,B.b9D,B.bh0,B.Ve,"soldier")
B.eFq=new A.EC(1,"Joseph",1,2,B.e7P,"A student who is always hungry.")
B.bfc=new C.w(1,0.6274509803921569,0.4196078431372549,0.2784313725490196,D.t)
B.acX=new C.w(1,0.16470588235294117,0.10196078431372549,0.06274509803921569,D.t)
B.baz=new C.w(1,0.2901960784313726,0.24705882352941178,0.4196078431372549,D.t)
B.e7K=new A.uy(B.bfc,B.acX,D.aH,B.baz,"xbot")
B.eFp=new A.EC(2,"Grace",3,4,B.e7K,"A teacher who marks papers late.")
B.abc=new C.w(1,0.8784313725490196,0.6431372549019608,0.48627450980392156,D.t)
B.aeT=new C.w(1,0.1843137254901961,0.43529411764705883,0.7098039215686275,D.t)
B.e7L=new A.uy(B.abc,D.ad4,B.aeT,B.Ve,"soldier")
B.eFl=new A.EC(3,"Daniel",6,8,B.e7L,"A driver who sleeps in the day.")
B.bhA=new C.w(1,0.788235294117647,0.5450980392156862,0.3686274509803922,D.t)
B.baI=new C.w(1,0.16862745098039217,0.17647058823529413,0.22745098039215686,D.t)
B.e7J=new A.uy(B.bhA,B.ac8,D.aE,B.baI,"michelle")
B.eFm=new A.EC(4,"Fatima",7,8,B.e7J,"A baker who gets up at four.")
B.aeJ=new C.w(1,0.47843137254901963,0.29411764705882354,0.18823529411764706,D.t)
B.bgg=new C.w(1,0.24705882352941178,0.22745098039215686,0.2,D.t)
B.e7Q=new A.uy(B.aeJ,D.e_,D.d9,B.bgg,"soldier")
B.eFo=new A.EC(5,"Papa Moses",10,-1,B.e7Q,"The oldest in the house. He watches TV all day.")
B.bed=new C.w(1,0.5490196078431373,0.3568627450980392,0.23137254901960785,D.t)
B.e7H=new A.uy(B.bed,B.acW,D.ay,B.ab_,"michelle")
B.eFn=new A.EC(6,"Mama Rose",9,-1,B.e7H,"Cooks for everybody in the kitchen.")
B.ON=w([B.eFr,B.eFq,B.eFp,B.eFl,B.eFm,B.eFo,B.eFn],C.ax("O<EC>"))
B.eju=new C.y(-9.5,4.6)
B.elO=new C.y(-5.9,2.3)
B.erA=new C.y(8.8,4.4)
B.cuz=w([B.eju,B.elO,B.erA],x.f)
B.cvt=w([61,63],x.t)
B.cvG=w([62,64],x.t)
B.b9J=new C.w(1,0.6039215686274509,0.30980392156862746,0.30980392156862746,D.t)
B.bju=new C.w(1,0.30980392156862746,0.47843137254901963,0.3686274509803922,D.t)
B.a0W=w([B.DR,B.adj,B.b9J,B.bju,B.ado,D.ti],x.O)
B.atC=w([72,73,74,75],x.t)
B.esR=new C.y(-25,-15)
B.ecl=new C.y(25,-15)
B.esQ=new C.y(-25,15)
B.eck=new C.y(25,15)
B.cBU=w([B.esR,B.ecl,B.esQ,B.eck],x.f)
B.byj=new A.pv("wall","Whole-wall TV","\ud83c\udfac",0,!0)
B.byr=new A.pv("tv200",'Cinema 200"',"\ud83c\udfac",175,!1)
B.bym=new A.pv("tv150",'Cinema 150"',"\ud83c\udfac",130,!1)
B.byn=new A.pv("bangtv",'Beovision TV 77"',"\ud83d\udcfa",66,!1)
B.byi=new A.pv("sonytv",'Sony Bravia 75"',"\ud83d\udcfa",64,!1)
B.bys=new A.pv("lgtv",'LG OLED 65"',"\ud83d\udcfa",56,!1)
B.byl=new A.pv("tv",'Samsung Neo QLED 55"',"\ud83d\udcfa",48,!1)
B.byq=new A.pv("appletv",'Apple TV 4K 50"',"\ud83d\udcfa",44,!1)
B.byp=new A.pv("lamp","Table lamp","\ud83d\udca1",0,!1)
B.byo=new A.pv("toaster","Toaster","\ud83c\udf5e",0,!1)
B.byk=new A.pv("hairdryer","Hair dryer","\ud83d\udc87",0,!1)
B.a13=w([B.byj,B.byr,B.bym,B.aiD,B.byn,B.byi,B.bys,B.byl,B.byq,B.byp,B.byo,B.byk],C.ax("O<pv>"))
B.cJB=w([y.r,"Two cables come into the box: one from the breaker panel (LINE) and one going to the light (LOAD).","Twist the two white wires together with a wire nut. A switch does not cut the neutral.",y.x,"Fasten the black wire from the panel to one BRASS screw.","Fasten the black wire that goes to the light to the other BRASS screw.","Push the switch into the box, put the plate on and test with the power on."],x.s)
B.dYY={black:0}
B.Ie=new C.eY(B.dYY,1,x.M)
B.byI=new A.mi(51,"Black wire nut: HOT",B.Ie,!1,"hot")
B.dZL={white:0}
B.Ic=new C.eY(B.dZL,1,x.M)
B.byx=new A.mi(52,"White wire nut: NEUTRAL",B.Ic,!1,"neutral")
B.dZd={ground:0}
B.S9=new C.eY(B.dZd,1,x.M)
B.byu=new A.mi(53,"Green ground connection",B.S9,!1,"ground")
B.cJK=w([B.byI,B.byx,B.byu],x.r)
B.byJ=new A.mi(51,"Black wire nut: HOT",B.Ie,!1,"hot")
B.byy=new A.mi(52,"White wire nut: NEUTRAL",B.Ic,!1,"neutral")
B.byv=new A.mi(53,"Green ground connection",B.S9,!1,"ground")
B.cJJ=w([B.byJ,B.byy,B.byv],x.r)
B.cK5=w(["Walnut","Blue grey","Brick red","Sage green","Sand","Charcoal"],x.s)
B.fCE=new A.E(-6.5,7.5,-7.85)
B.fCI=new A.E(-6.5,7.8,-3)
B.cKn=w([B.fCE,B.fCI],x.o)
B.bar=new C.w(1,0.9176470588235294,0.9490196078431372,0.9686274509803922,D.t)
B.bf9=new C.w(1,0.9647058823529412,0.9098039215686274,0.9098039215686274,D.t)
B.bei=new C.w(1,0.9529411764705882,0.9215686274509803,0.7843137254901961,D.t)
B.auf=w([B.Ai,B.bar,B.bf9,B.bei],x.O)
B.cL0=w([y.r,"The cable comes in through the top of the box. Strip about 3/4 inch of insulation from each wire.","Fasten the bare copper ground wire to the GREEN screw.","Fasten the white (neutral) wire to a SILVER screw.","Fasten the black (hot) wire to a BRASS screw. Wrap each wire clockwise under its screw.","Fold the wires back and push the outlet into the box.","Put the cover plate on, then turn the power on and test."],x.s)
B.fHl=new A.E(-3.6,7.5,-7.85)
B.fCj=new A.E(-3.6,4.2,-7.85)
B.cL7=w([B.fHl,B.fCj],x.o)
B.dYX={blackLine:0,blackLoad:1}
B.aLX=new C.eY(B.dYX,2,x.M)
B.byG=new A.mi(21,"Brass screw (top)",B.aLX,!1,"hot")
B.byH=new A.mi(22,"Brass screw (bottom)",B.aLX,!1,"hot")
B.aiE=new A.mi(25,"Green screw: GROUND",B.S9,!1,"ground")
B.cLC=w([B.byG,B.byH,B.aiE],x.r)
B.cLP=w([0,2,1,3,4,6,7,8],x.t)
B.eyT=new C.bt(-0.1,0,0.5)
B.eAG=new C.bt(0.35,-0.4,0.3)
B.ezE=new C.bt(-0.4,0.55,0.35)
B.cLV=w([B.eyT,B.eAG,B.ezE],C.ax("O<+(N,N,N)>"))
B.fFG=new A.E(9.8,6,-7.85)
B.fBI=new A.E(9.8,7.5,-7.85)
B.fHB=new A.E(-8,7.5,-7.85)
B.fDv=new A.E(-8,1.5,-7.85)
B.cMF=w([B.fFG,B.fBI,B.fHB,B.fDv],x.o)
B.aRL=new A.E(5,1.8,-7.85)
B.fEc=new A.E(5,-0.1,-7.85)
B.fF0=new A.E(12.5,-0.1,-7.85)
B.cNE=w([B.aRL,B.fEc,B.fF0],x.o)
B.fxD=new A.E(3,3.1,-7.1)
B.aRG=new A.E(3,1.7,-7.1)
B.fEW=new A.E(3,1,-7.1)
B.fzE=new A.E(3.65,0.5,-7.1)
B.fAB=new A.E(4.3,1,-7.1)
B.fE7=new A.E(4.3,1.8,-7.1)
B.fHD=new A.E(5,1.8,-7.1)
B.cO5=w([B.fxD,B.aRG,B.fEW,B.fzE,B.fAB,B.fE7,B.fHD,B.aRL],x.o)
B.cOy=w(["My outlet is dead and it is dark in here. Please come and wire it.","The light in my room does not work, and my phone will not charge. Can you fix the wiring?","I have no power in my room at all. Can an electrician come?"],x.s)
B.eCi=new C.cH([-0.35,-0.2,0.42,0.3])
B.eCv=new C.cH([0.3,0.25,0.32,0.38])
B.eBl=new C.cH([0.05,-0.55,0.22,0.14])
B.eBO=new C.cH([-0.5,0.45,0.2,0.16])
B.cOK=w([B.eCi,B.eCv,B.eBl,B.eBO],x.U)
B.fH6=new A.E(0.6,11,-3.4)
B.fB1=new A.E(0.6,3.2,-3.2)
B.fGJ=new A.E(0.6,2.2,-1.9)
B.fAR=new A.E(0.6,0.7,-1.5)
B.cP5=w([B.fH6,B.fB1,B.fGJ,B.fAR],x.o)
B.cPM=w([H.mw,K.RP,H.ll],x.f)
B.cQj=w(["road","roadturn","roadtee","roadcross","house2","shop","hospital","firestation","school","car","firetruck","ambulance","dog","cat","cow","sheep","chicken","horse","tree","pine","bush","flowers","fence","lamppost","bench","pond","swing","shed","doghouse"],x.s)
B.fA5=new A.E(0,8.3,0)
B.aRl=new A.E(0,3.9,0)
B.a1A=w([B.fA5,B.aRl],x.o)
B.cQy=w([y.r,"Make sure the box is rated for a fan. A plain light box cannot carry the weight and the shaking.","Join the house ground wire to the fan ground.","Join the house white wire to the fan white wire with a wire nut.","Join the house black wire to the fan black wire with a wire nut.","Push the wires up into the box and fasten the canopy to the ceiling.",y.E],x.s)
B.fMI=new A.Fg("outlet","\ud83d\udd0c","Wall outlet","Black to brass, white to silver",D.aH)
B.fMF=new A.Fg("switch","\ud83d\udca1","Light switch","Two blacks and a wire nut",D.aT)
B.fMG=new A.Fg("gfci","\ud83d\udee1\ufe0f","GFCI outlet","LINE and LOAD near water",D.bt)
B.fMJ=new A.Fg("fan","\ud83c\udf00","Ceiling fan","Black, white, green and a fan box",D.b7)
B.fMH=new A.Fg("ptrap","\ud83e\udea0","Sink drain (P-trap)","Build a drain with a water seal",D.cs)
B.fME=new A.Fg("faucet","\ud83d\udeb0","Faucet supply lines","Hot left, cold right",D.cj)
B.fMD=new A.Fg("house","\ud83c\udfd7\ufe0f","Build and fix a house","Stage by stage, then repair",D.by)
B.cQM=w([B.fMI,B.fMF,B.fMG,B.fMJ,B.fMH,B.fME,B.fMD],C.ax("O<Fg>"))
B.erS=new C.y(-3.5,11)
B.ehV=new C.y(3.5,11)
B.egj=new C.y(-3.5,-11)
B.een=new C.y(3.5,-11)
B.cQQ=w([B.erS,B.ehV,B.egj,B.een],x.f)
B.fG_=new A.E(-0.6,11,-3.4)
B.fBM=new A.E(-0.6,3.2,-3.2)
B.fFj=new A.E(-0.6,2.2,-1.9)
B.fHR=new A.E(-0.6,0.7,-1.5)
B.cQS=w([B.fG_,B.fBM,B.fFj,B.fHR],x.o)
B.a1B=w(["dog","cat","cow","sheep","chicken","horse"],x.s)
B.eoV=new C.y(-1.2,0)
B.ewI=new C.y(1.2,0)
B.cRt=w([B.eoV,B.ewI],x.f)
B.e31=new A.nc("flange","flange","Toilet flange",D.T,"The flange is fixed to the floor over the drain. Everything else sits on it.",!1,0)
B.d35=w(["flange"],x.s)
B.e3_=new A.nc("wax","wax","Wax ring",B.d35,"The wax ring goes on the flange before the toilet. It makes the seal against sewer gas and water.",!1,0)
B.dcS=w(["wax"],x.s)
B.e2X=new A.nc("toilet","toilet","Toilet",B.dcS,"The toilet is lowered straight down onto the wax ring. The ring has to be there first.",!1,0)
B.dbm=w(["toilet"],x.s)
B.e30=new A.nc("bolts","bolts","Toilet bolts",B.dbm,"The two bolts hold the toilet to the flange. Set the toilet first.",!1,2)
B.e2Y=new A.nc("tvalve","valve","Toilet shut-off valve",D.T,"The shut-off valve goes on the pipe that comes out of the wall.",!0,0)
B.dbs=w(["tvalve","toilet"],x.s)
B.e2Z=new A.nc("those","hosecold","Toilet supply hose",B.dbs,"The hose joins the valve to the toilet tank, so both must be there first.",!1,2)
B.aG1=new A.nc("faucet","faucet","Faucet",D.T,"The faucet goes through the hole in the counter.",!1,0)
B.aG4=new A.nc("vhot","valve","Hot shut-off valve (left)",D.T,y.g,!0,0)
B.aG2=new A.nc("vcold","valve","Cold shut-off valve (right)",D.T,y.g,!0,0)
B.dci=w(["vhot","faucet"],x.s)
B.aG5=new A.nc("hhot","hosehot","Hot supply hose",B.dci,"The hose joins the hot valve to the faucet, so the valve and the faucet must be there first.",!1,2)
B.dcf=w(["vcold","faucet"],x.s)
B.aG3=new A.nc("hcold","hosecold","Cold supply hose",B.dcf,"The hose joins the cold valve to the faucet, so the valve and the faucet must be there first.",!1,2)
B.aG0=new A.nc("tail","tail","Tailpiece",D.T,"The tailpiece hangs from the sink drain. It is the first piece of the drain.",!1,0)
B.dbf=w(["tail"],x.s)
B.aG6=new A.nc("trap","trap","P-trap",B.dbf,"The P-trap joins the tailpiece. Build the drain from the top down.",!1,1)
B.dbn=w(["trap"],x.s)
B.aG7=new A.nc("arm","arm","Trap arm",B.dbn,"The trap arm joins the trap and goes into the wall.",!1,1)
B.cNb=w([B.e31,B.e3_,B.e2X,B.e30,B.e2Y,B.e2Z,B.aG1,B.aG4,B.aG2,B.aG5,B.aG3,B.aG0,B.aG6,B.aG7],x.F)
B.e8D=new A.Wb("bathroom","Bathroom",B.cNb,"Fit out a bathroom: a toilet and a sink with its faucet, supply hoses and drain.")
B.d4N=w([B.aG1,B.aG4,B.aG2,B.aG5,B.aG3,B.aG0,B.aG6,B.aG7],x.F)
B.e8E=new A.Wb("kitchen","Kitchen",B.d4N,"Fit out a kitchen sink: the faucet, the hot and cold supplies and the drain.")
B.av1=w([B.e8D,B.e8E],C.ax("O<Wb>"))
B.byC=new A.mi(21,"LOAD hot (brass, taped)",D.Id,!0,"load")
B.byE=new A.mi(22,"LINE hot (brass)",B.Ie,!1,"hot")
B.byD=new A.mi(23,"LOAD neutral (silver, taped)",D.Id,!0,"load")
B.byw=new A.mi(24,"LINE neutral (silver)",B.Ic,!1,"neutral")
B.cSQ=w([B.byC,B.byE,B.byD,B.byw,B.aiE],x.r)
B.fxB=new A.E(8.2,0.9,-6.3)
B.fFr=new A.E(8.2,-0.1,-6.3)
B.fzj=new A.E(8.2,-0.1,-7.85)
B.cT8=w([B.fxB,B.fFr,B.fzj],x.o)
B.ef1=new C.y(-4.5,10)
B.etG=new C.y(4.5,10)
B.ewG=new C.y(-4.5,-10)
B.etC=new C.y(4.5,-10)
B.cTj=w([B.ef1,B.etG,B.ewG,B.etC],x.f)
B.cTk=w([-0.28,0.28],x.n)
B.esS=new C.y(-34,-6)
B.ecJ=new C.y(30,10)
B.esL=new C.y(-10,24)
B.cUk=w([B.esS,B.ecJ,B.esL],x.f)
B.bxl=new A.Dm("Oak",B.At,"wood")
B.bxn=new A.Dm("Dark wood",B.x5,"wood")
B.aeL=new C.w(1,0.5529411764705883,0.5647058823529412,0.5882352941176471,D.t)
B.bxp=new A.Dm("Grey carpet",B.aeL,"carpet")
B.bhu=new C.w(1,0.3568627450980392,0.4980392156862745,0.6509803921568628,D.t)
B.bxm=new A.Dm("Blue carpet",B.bhu,"carpet")
B.bf8=new C.w(1,0.8470588235294118,0.803921568627451,0.7058823529411765,D.t)
B.bxj=new A.Dm("Cream carpet",B.bf8,"carpet")
B.bxo=new A.Dm("White tile",B.VU,"tile")
B.bxk=new A.Dm("Slate tile",B.abM,"tile")
B.avo=w([B.bxl,B.bxn,B.bxp,B.bxm,B.bxj,B.bxo,B.bxk],C.ax("O<Dm>"))
B.fFk=new A.E(3,3.2,-7.85)
B.fHT=new A.E(3,4,-7.85)
B.fHm=new A.E(3,4.2,-7.4)
B.fyJ=new A.E(3,3.95,-7)
B.cWs=w([B.fFk,B.fHT,B.fHm,B.fyJ],x.o)
B.cWu=w(["The sink leaks and there is water on the floor. Please fix the plumbing.","The toilet is not connected and the water is running everywhere. Help!","There is no water at my sink and the pipes are open. Can a plumber come?"],x.s)
B.fFK=new A.E(6,0.2,0)
B.fEv=new A.E(6,2.6,0)
B.aSc=new A.E(8.6,2.6,0)
B.cXG=w([B.fFK,B.fEv,B.aSc],x.o)
B.esW=new C.y(-7,-7)
B.efr=new C.y(7,-7)
B.esV=new C.y(-7,7)
B.efq=new C.y(7,7)
B.cYl=w([B.esW,B.efr,B.esV,B.efq],x.f)
B.cYn=w([-2.4,2.4],x.n)
B.cYE=w([-1.6,1.6],x.n)
B.aeh=new C.w(1,0.14901960784313725,0.14901960784313725,0.16470588235294117,D.t)
B.fJf=new A.zM("blackLine","Black \xb7 from the breaker",B.aeh,D.c,"hot")
B.bd_=new C.w(1,0.22745098039215686,0.1803921568627451,0.1803921568627451,D.t)
B.fJi=new A.zM("blackLoad","Black \xb7 to the light",B.bd_,D.c,"hot")
B.aSs=new A.zM("ground","Bare copper \xb7 ground",B.x1,D.c,"ground")
B.cYH=w([B.fJf,B.fJi,B.aSs],x.K)
B.b7C=new C.w(1,0.9294117647058824,0.9019607843137255,0.8392156862745098,D.t)
B.b5U=new C.w(1,0.9137254901960784,0.8274509803921568,0.8274509803921568,D.t)
B.b5a=new C.w(1,0.8352941176470589,0.8941176470588236,0.8156862745098039,D.t)
B.ad8=new C.w(1,0.9529411764705882,0.8901960784313725,0.6549019607843137,D.t)
B.b9T=new C.w(1,0.7254901960784313,0.7647058823529411,0.8666666666666667,D.t)
B.bhC=new C.w(1,0.5607843137254902,0.6392156862745098,0.6588235294117647,D.t)
B.avB=w([B.b7C,B.VE,B.b5U,B.b5a,B.ad8,B.b9T,B.add,B.bhC],x.O)
B.aio=new A.qT(4,"deadOutlet")
B.d_T=w([B.YY,B.YZ,B.Ma,B.Mb,B.aio,B.Z1,B.Z2,B.Z3,B.Z4,B.Z5,B.Z_,B.Z0],C.ax("O<qT>"))
B.d0l=w([y.r,"Find the LINE and LOAD screws. LOAD is covered with yellow tape. Leave it covered unless you feed another outlet.",y.x,"Fasten the white wire to the silver LINE screw.","Fasten the black wire to the brass LINE screw.","Push the GFCI into the box and put the plate on.","Turn the power on, press RESET, then press TEST. It must click off."],x.s)
B.d0U=w([0.1,8.05],x.n)
B.fD1=new A.E(-0.35,11,-3.4)
B.fBT=new A.E(-0.35,3.2,-3.2)
B.fEC=new A.E(-0.35,2.2,-1.9)
B.fAO=new A.E(-0.35,0.7,-1.5)
B.d17=w([B.fD1,B.fBT,B.fEC,B.fAO],x.o)
B.fHf=new A.E(5.2,7.5,-7.85)
B.fEr=new A.E(5.2,4,-7.85)
B.d1d=w([B.fHf,B.fEr],x.o)
B.foL=new C.x("\ud83c\udfd8",null,D.SJ,null,null,null,null,null,null,null,null,null)
B.eTx=new C.G(!0,D.mK,null,null,null,null,19,D.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fhh=new C.x("Community",null,B.eTx,null,null,null,null,null,null,null,null,null)
B.f7A=new C.x("The people who live in the house get hungry and sick, and their wiring and plumbing break. Look after them and answer their calls for help.",null,E.D3,null,D.L,null,null,null,null,null,null,null)
B.d1f=w([B.foL,D.an,B.fhh,D.cX,B.f7A],x.p)
B.a8e=new A.kW("look","Look",D.fa)
B.fM3=new A.kW("wall","Wall box",N.ajV)
B.fM2=new A.kW("ceiling","Ceiling box",D.qT)
B.fMc=new A.kW("fanbox","Fan box",S.MG)
B.fMj=new A.kW("drill","Drill",D.xN)
B.fMd=new A.kW("cable","Cable roll",E.ajK)
B.d3r=w([B.a8e,B.fM3,B.fM2,B.fMc,B.fMj,B.fMd],x.b)
B.fMi=new A.kW("sheet","Drywall sheet",D.Bv)
B.fM6=new A.kW("knife","Drywall saw",D.FE)
B.fM4=new A.kW("screw","Screw gun",V.FO)
B.fMl=new A.kW("tape","Tape",D.tL)
B.fMh=new A.kW("mud","Mud",A2.a_7)
B.fMp=new A.kW("sand","Sander",D.FC)
B.bDQ=new C.a0(985109,"MaterialIcons",!1)
B.fMa=new A.kW("paint","Roller",B.bDQ)
B.d00=w([B.a8e,B.fMi,B.fM6,B.fM4,B.fMl,B.fMh,B.fMp,B.fMa],x.b)
B.fMe=new A.kW("tester","Voltage tester",D.qY)
B.akE=new C.a0(983223,"MaterialIcons",!1)
B.fMm=new A.kW("outlet","Outlet",B.akE)
B.fM8=new A.kW("gfci","GFCI",D.tS)
B.fMk=new A.kW("switch","Switch",E.Nh)
B.fMg=new A.kW("light","Light",D.r_)
B.bDO=new C.a0(985094,"MaterialIcons",!1)
B.fMb=new A.kW("fan","Fan",B.bDO)
B.fMf=new A.kW("tv","TV",W.al1)
B.bC4=new C.a0(63571,"MaterialIcons",!1)
B.fM9=new A.kW("lamp","Lamp",B.bC4)
B.bAS=new C.a0(62944,"MaterialIcons",!1)
B.fM7=new A.kW("toaster","Toaster",B.bAS)
B.bBr=new C.a0(63209,"MaterialIcons",!1)
B.fMo=new A.kW("hairdryer","Hair dryer",B.bBr)
B.fMn=new A.kW("flip","Flip switch",E.Nh)
B.fM5=new A.kW("unplug","Unplug",B.akD)
B.d5Z=w([B.a8e,B.fMe,B.fMm,B.fM8,B.fMk,B.fMg,B.fMb,B.fMf,B.fM9,B.fM7,B.fMo,B.fMn,B.fM5],x.b)
B.d1h=w([B.d3r,B.d00,B.d5Z],C.ax("O<aj<kW>>"))
B.aRW=new A.E(0,15.5,-3.6)
B.fDb=new A.E(0,20,-3.6)
B.fHI=new A.E(0,22.5,-2)
B.fBA=new A.E(0,22.5,1.1999999999999997)
B.fDh=new A.E(0,21.1,1.6)
B.d1N=w([B.aRW,B.fDb,B.fHI,B.fBA,B.fDh],x.o)
B.GQ=w([],x.E)
B.d2m=w([],x.T)
B.avZ=w([],x.I)
B.vH=w([],x.h)
B.d2u=w([],x.o)
B.d2n=w([],x.a)
B.ejx=new C.y(-1.6,3.5)
B.eja=new C.y(1.6,3.5)
B.el1=new C.y(-1.6,-3.5)
B.ehT=new C.y(1.6,-3.5)
B.d2D=w([B.ejx,B.eja,B.el1,B.ehT],x.f)
B.d3o=w(["Look at the pieces: the tailpiece, the P-trap and the trap arm. Pick the tailpiece first and tap its glowing outline under the sink.","Pick the P-trap (the U-shaped bend) and tap its glowing outline. It joins the tailpiece.","Pick the trap arm and tap its outline. It joins the trap to the wall drain.","Slide each slip nut up to its joint and hand tighten it: tap the nuts.","Run the water and look for leaks. The U-bend keeps a plug of water that blocks sewer gas."],x.s)
B.fjT=new C.x("\u2728",null,D.aOa,null,null,null,null,null,null,null,null,null)
B.ftM=new C.x("Nobody needs help right now.",null,D.fN,null,D.L,null,null,null,null,null,null,null)
B.f4G=new C.G(!0,D.aR,null,null,null,null,13,null,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fm6=new C.x("Everybody's wiring and plumbing works. Keep an eye on food and health: things break when you least expect it.",null,B.f4G,null,D.L,null,null,null,null,null,null,null)
B.d3N=w([B.fjT,D.P,B.ftM,D.at,B.fm6],x.p)
B.awb=w(["rug","road","roadturn","roadtee","roadcross","pond","flowers"],x.s)
B.fyY=new A.E(11.4,4.6,-6)
B.fDq=new A.E(11.4,5,-7.85)
B.fAP=new A.E(2.6,5,-7.85)
B.fB6=new A.E(2.6,3.4,-7.85)
B.d48=w([B.fyY,B.fDq,B.fAP,B.fB6],x.o)
B.d4c=w([H.mw,K.RP],x.f)
B.d4d=w(["hot","cold"],x.s)
B.fJh=new A.zM("black","Black \xb7 hot",B.aeh,D.c,"hot")
B.fJg=new A.zM("white","White \xb7 neutral",B.wL,D.aB,"neutral")
B.PV=w([B.fJh,B.fJg,B.aSs],x.K)
B.egh=new C.y(-3.5,4)
B.emR=new C.y(3.5,4)
B.eik=new C.y(-3.5,-4)
B.ebg=new C.y(3.5,-4)
B.d4E=w([B.egh,B.emR,B.eik,B.ebg],x.f)
B.ewv=new C.y(-2.4,5)
B.eo8=new C.y(2.4,5)
B.elz=new C.y(-2.4,-5)
B.ekm=new C.y(2.4,-5)
B.d4I=w([B.ewv,B.eo8,B.elz,B.ekm],x.f)
B.eAf=new C.bt(-6,-4,D.bV)
B.eyX=new C.bt(5,-5,D.cn)
B.eAd=new C.bt(0,1,D.ay)
B.eAH=new C.bt(-5,5,D.by)
B.eyd=new C.bt(6,4,D.c)
B.d5r=w([B.eAf,B.eyX,B.eAd,B.eAH,B.eyd],C.ax("O<+(N,N,w)>"))
B.d5T=w([H.mw,H.ll],x.f)
B.esk=new C.y("Slab","First the concrete slab (the foundation) is poured and left to cure. Every wall sits on it.")
B.eus=new C.y("Framing","The carpenters build the wall frames from 2x4 studs, spaced 16 inches apart, with plates on the top and bottom.")
B.ek5=new C.y("Plumbing rough-in","The plumber runs the hot (red) and cold (blue) water lines and the white drain pipes inside the walls and floor before anything is closed up.")
B.eqA=new C.y("Electrical rough-in","The electrician runs the yellow and white cables from the breaker panel to every box, and fixes the boxes to the studs.")
B.erD=new C.y("Drywall","Drywall covers the frame. Here it is see-through so you can still look at the pipes and wires behind it.")
B.ekw=new C.y("Fixtures","Last come the outlets, switches, light, sink, toilet and water heater. This is where most repairs happen.")
B.elK=new C.y("Roof","The roof goes on to keep everything dry. It is see-through here so you can keep looking inside.")
B.d6a=w([B.esk,B.eus,B.ek5,B.eqA,B.erD,B.ekw,B.elK],x.L)
B.esN=new C.y(-17,-9)
B.ebJ=new C.y(17,-9)
B.esM=new C.y(-17,9)
B.ebI=new C.y(17,9)
B.d6K=w([B.esN,B.ebJ,B.esM,B.ebI],x.f)
B.d6Q=w([-14,14],x.n)
B.awt=w([-26,26],x.n)
B.d6U=w([-30,-10,10,30],x.n)
B.d6V=w([-32,-8,34],x.n)
B.d6W=w([-3,3],x.n)
B.o0=w([-72,-24,24],x.t)
B.d6Y=w([-80,80],x.n)
B.d70=w([-90,-52,52,90],x.n)
B.aww=w([-9,9],x.n)
B.fAT=new A.E(8.2,5,-7.85)
B.fEu=new A.E(8.2,1.2,-7.85)
B.fG0=new A.E(8.2,1,-7.4)
B.d8x=w([B.fAT,B.fEu,B.fG0],x.o)
B.dZe={hot:0}
B.aM0=new C.eY(B.dZe,1,x.M)
B.e8B=new A.Er(61,"Hot shut-off valve (left)",B.aM0,"Hot is always on the LEFT. The red hose goes on the left valve.")
B.dZ2={cold:0}
B.aM8=new C.eY(B.dZ2,1,x.M)
B.e8C=new A.Er(62,"Cold shut-off valve (right)",B.aM8,"Cold is always on the RIGHT. The blue hose goes on the right valve.")
B.e8z=new A.Er(63,"Hot faucet inlet (left)",B.aM0,"The left faucet inlet takes the hot (red) hose.")
B.e8A=new A.Er(64,"Cold faucet inlet (right)",B.aM8,"The right faucet inlet takes the cold (blue) hose.")
B.a2n=w([B.e8B,B.e8C,B.e8z,B.e8A],C.ax("O<Er>"))
B.a2p=w([-72,-48,-24,0,24],x.t)
B.d9Q=w(["1 Rough-in","2 Drywall","3 Devices"],x.s)
B.awT=w(["road","roadturn","roadtee","roadcross"],x.s)
B.eyw=new C.bt("hot","Hot hose (red)",B.t8)
B.ezc=new C.bt("cold","Cold hose (blue)",B.nF)
B.daL=w([B.eyw,B.ezc],C.ax("O<+(n,n,w)>"))
B.ecL=new C.y(34,40)
B.fLw=new A.Jl(B.ecL,3.141592653589793,2.6,"Washing hands at the sink",!1,!1,!1,"")
B.daN=w([B.fLw],x.a)
B.a7U=new A.E(15,2.6,0)
B.a2s=w([B.aSc,B.a7U],x.o)
B.dbg=w(["tail","trap","arm"],x.s)
B.GU=w(["tv","lamp","toaster","hairdryer"],x.s)
B.dbV=w([y.r,"Hold the fixture up to the ceiling box. It has three short wires: black, white and green.","Join the house ground wire to the fixture ground.","Join the house white wire to the fixture white wire with a wire nut.","Join the house black wire to the fixture black wire with a wire nut.","Push the wires into the box and fasten the fixture to the ceiling.",y.E],x.s)
B.dc2=w([30,60,120,180,300],x.t)
B.bQO=new A.jy("Breaker off, then test","Before you touch any wire, switch its breaker OFF, then check with a voltage tester that the wire is dead. A switch on the wall is not enough.")
B.bQB=new A.jy("Lock out, tag out","On a real job you put a lock or a note on the panel so nobody switches the power back on while you work.")
B.bQV=new A.jy("Water and power","Water carries electricity. Near sinks, tubs and outdoors the outlets must be GFCI, and wet hands never touch wires.")
B.bQG=new A.jy("Eyes, ears, lungs","Safety glasses for drilling and cutting, ear protection for loud tools, and a mask when you sand drywall dust or cut tile.")
B.bQU=new A.jy("Shut the water off","Before you cut or loosen a pipe, close the main water valve and open a faucet to drain the line.")
B.d5F=w([B.bQO,B.bQB,B.bQV,B.bQG,B.bQU],x.Z)
B.bR6=new A.M7("Safety first","\ud83e\uddba",D.cj,B.d5F)
B.bQW=new A.jy("Wire colours","Black is hot (it carries the power), white is neutral (the way back), bare copper or green is ground (the safety path). Red is a second hot, often used for a switched line.")
B.bR2=new A.jy("Screw colours","On an outlet the brass screw takes the hot wire, the silver screw takes the neutral and the green screw takes the ground.")
B.bQQ=new A.jy("Wire size","14 gauge wire is for 15 amp circuits (lights and outlets). 12 gauge is for 20 amp circuits (kitchens). A thinner wire than the breaker allows can overheat and start a fire.")
B.bQK=new A.jy("Breakers","A breaker is a safety switch. It trips when a circuit carries too much current, so the wires never get hot enough to burn.")
B.bQY=new A.jy("Wire nuts","Strip about 3/4 inch, twist the bare ends together clockwise, and screw on the nut until no bare copper shows. Give each wire a gentle tug.")
B.bR3=new A.jy("Switches","A switch cuts the hot wire only. The neutral goes straight through to the light.")
B.bR4=new A.jy("GFCI","A GFCI outlet watches the current going out and coming back. If a little leaks (through water or a person) it cuts the power in a fraction of a second.")
B.bQD=new A.jy("Ceiling fans","A fan shakes and is heavy. It needs a box that says fan rated, fixed to the joist, not a plain light box.")
B.bQF=new A.jy("Heights","Outlets sit about 16 inches from the floor. Switches sit about 48 inches up, where your hand falls.")
B.cZv=w([B.bQW,B.bR2,B.bQQ,B.bQK,B.bQY,B.bR3,B.bR4,B.bQD,B.bQF],x.Z)
B.bR9=new A.M7("Wiring basics","\u26a1",D.cn,B.cZv)
B.bQC=new A.jy("Hot left, cold right","On a faucet, hot is on the left and cold on the right. Hot lines are marked red and cold lines blue.")
B.bQP=new A.jy("The P-trap","The curved pipe under a sink always holds a little water. That water seal stops sewer gas coming up the drain.")
B.bR_=new A.jy("Shut-off valves","Every sink and toilet has its own small valve, so you can stop the water to one fixture without turning off the whole house.")
B.bQI=new A.jy("Slip nuts","Drain joints are sealed by a washer and a slip nut. Tighten by hand and a quarter turn: too much force cracks plastic.")
B.bQH=new A.jy("Wax ring","A toilet sits on a wax ring that seals it to the floor drain. A toilet is lowered straight down once, and cannot be slid around.")
B.bQX=new A.jy("Drain slope","Drains fall about 1/4 inch per foot so water and waste keep moving. Too flat and it clogs, too steep and the water leaves the solids behind.")
B.bR1=new A.jy("Order of work","Plumbing goes from the top down on the drain (tailpiece, trap, arm) and from the wall out on the supply (valve, hose, fixture).")
B.c7E=w([B.bQC,B.bQP,B.bR_,B.bQI,B.bQH,B.bQX,B.bR1],x.Z)
B.bR7=new A.M7("Plumbing basics","\ud83d\udeb0",D.cs,B.c7E)
B.bQE=new A.jy("Studs","Studs are the vertical 2x4 posts inside a wall, 16 inches apart from centre to centre. Everything is fixed to them.")
B.bQS=new A.jy("Drilling studs","Holes for cable go through the middle of the stud, so a nail or screw cannot reach the wire.")
B.bQJ=new A.jy("Drywall","A sheet is 4 feet wide, so its edges land on studs 48 inches apart. Screws go into studs only, just under the paper.")
B.bQM=new A.jy("Taping and mud","Seams get paper tape and three thin coats of joint compound, sanded smooth between coats, then primer and paint.")
B.bR0=new A.jy("Order of a build","Frame, run the pipes and wires (rough-in), inspect, hang drywall, finish it, paint, then fit the fixtures and devices.")
B.cLz=w([B.bQE,B.bQS,B.bQJ,B.bQM,B.bR0],x.Z)
B.bR5=new A.M7("Framing and walls","\ud83c\udfe0",D.dT,B.cLz)
B.bQN=new A.jy("Voltage tester","A pen that glows or beeps near live wires. Test it on a known live outlet first, so you know it works.")
B.bQT=new A.jy("Wire strippers","Strip the plastic off without nicking the copper. A nick weakens the wire.")
B.bQZ=new A.jy("Adjustable wrench","For nuts on valves and hoses. Hold the fitting steady with a second wrench so you do not twist the pipe.")
B.bQR=new A.jy("Drill and screw gun","A drill makes holes through studs. A screw gun sets drywall screws to the right depth.")
B.bQL=new A.jy("Level and tape measure","Measure twice, cut once. A level makes sure outlets, shelves and pipes are straight.")
B.dd9=w([B.bQN,B.bQT,B.bQZ,B.bQR,B.bQL],x.Z)
B.bR8=new A.M7("Tools","\ud83e\uddf0",D.bt,B.dd9)
B.dcO=w([B.bR6,B.bR9,B.bR7,B.bR5,B.bR8],C.ax("O<M7>"))
B.byA=new A.mi(21,"Brass screw (top): HOT side",B.Ie,!1,"hot")
B.byz=new A.mi(22,"Brass screw (bottom): HOT side",B.Ie,!1,"hot")
B.byB=new A.mi(23,"Silver screw (top): NEUTRAL side",B.Ic,!1,"neutral")
B.byF=new A.mi(24,"Silver screw (bottom): NEUTRAL side",B.Ic,!1,"neutral")
B.byt=new A.mi(25,"Green screw: GROUND",B.S9,!1,"ground")
B.dcP=w([B.byA,B.byz,B.byB,B.byF,B.byt],x.r)
B.dd4=w(["Cream","Sky","Blush","Mint","Butter","Periwinkle","White","Slate"],x.s)
B.ddf=w([0.72,-0.72],x.n)
B.egH=new C.y("outlet","\ud83d\udd0c Outlet")
B.etx=new C.y("gfci","\ud83d\udee1\ufe0f GFCI outlet")
B.epX=new C.y("switch","\ud83d\udca1 Light switch")
B.ddx=w([B.egH,B.etx,B.epX],x.L)
B.ddH=w(["inspect","hand","screwdriver","pliers","wrench","crimper","plunger","flapper","newoutlet","patch"],x.s)
B.deG=w(["Look under the sink. The wall has two shut-off valves: hot on the LEFT (red handle) and cold on the RIGHT (blue handle).","Pick the red hot hose. Tap the left shut-off valve, then the left faucet inlet.","Pick the blue cold hose. Tap the right shut-off valve, then the right faucet inlet.","Open the valves slowly and turn on the faucet. Check every connection for drips."],x.s)
B.dZc={flange:0,wax:1,toilet:2,bolts:3,valve:4,hosehot:5,hosecold:6,faucet:7,tail:8,trap:9,arm:10}
B.dgU=new C.bm(B.dZc,["Flange","Wax ring","Toilet","Bolts","Shut-off valve","Hot hose","Cold hose","Faucet","Tailpiece","P-trap","Trap arm"],x.w)
B.dYL={xbot:0,michelle:1,soldier:2}
B.a2Y=new C.bm(B.dYL,["assets/avatars/Xbot.glb","assets/avatars/Michelle.glb","assets/avatars/Soldier.glb"],x.w)
B.bwJ=new A.u1("The living room has no power at all.","The living room breaker is sitting in the middle (orange). It has tripped. Flip it fully OFF and ON again, by hand.","hand","Breaker reset. The living room has power again.",72,0,"")
B.bwT=new A.u1("There is no hot water.","The water heater breaker has tripped (orange). Reset it by hand.","hand","Breaker reset. The water heater is heating again.",75,0,"")
B.bwQ=new A.u1("Water is dripping under the kitchen sink.","The slip nut on the P-trap is loose and the joint drips. Tighten it with the wrench.","wrench","Slip nut tightened. The drip stopped.",87,0,"")
B.bwI=new A.u1("There is a wet spot on the wall behind the kitchen.","A crimped joint in the hot water line is leaking. A crimp joint is squeezed with a crimping tool, not tightened with a wrench.","crimper","The joint is crimped again and it does not leak.",96,0,"")
B.bwN=new A.u1("The outlet by the sofa does not work, but the lights do.","The tester finds power at the box but the outlet is dead: a screw on the outlet has come loose. Turn the breaker off first, then tighten the screws with the screwdriver.","screwdriver","You tightened the loose screw. The outlet works again.",81,72,"Turn the living room breaker OFF first.")
B.bwK=new A.u1("The living room light flickers.","A wire nut in the light box has worked loose. Turn the breaker off, then twist the wire nut tight with the pliers.","pliers","You twisted the wire nut tight. The light is steady.",83,72,"Turn the living room breaker OFF first.")
B.bwL=new A.u1("The kitchen outlet sparks and smells burnt.","The outlet has burnt. Turn the breaker off and replace it with a new outlet.","newoutlet","New outlet fitted. No more sparks.",84,73,"Turn the kitchen breaker OFF first.")
B.bwR=new A.u1("The kitchen outlets are dead.","The GFCI outlet has tripped. Press its RESET button by hand.","hand","You pressed RESET. The kitchen outlets work.",84,0,"")
B.bwM=new A.u1("The toilet keeps running.","The rubber flapper in the tank no longer seals, so water leaks into the bowl all the time. Replace the flapper.","flapper","New flapper fitted. The toilet stops running.",88,0,"")
B.bwP=new A.u1("The kitchen faucet drips.","The faucet washer is worn. Tighten the packing nut with the wrench, then check.","wrench","The faucet is sealed. No more drips.",85,0,"")
B.bwO=new A.u1("There is a hole in the wall.","A hole in the drywall. Stick a drywall patch over it, then tape, mud, sand and paint it.","patch","Patch fitted. Now it only needs mud, sanding and paint.",95,0,"")
B.bwS=new A.u1("The kitchen sink drains very slowly.","The drain is clogged. Use the plunger.","plunger","The clog is gone. The sink drains fast.",94,0,"")
B.vL=new C.dS([B.YY,B.bwJ,B.YZ,B.bwT,B.Ma,B.bwQ,B.Mb,B.bwI,B.aio,B.bwN,B.Z1,B.bwK,B.Z2,B.bwL,B.Z3,B.bwR,B.Z4,B.bwM,B.Z5,B.bwP,B.Z_,B.bwO,B.Z0,B.bwS],C.ax("dS<qT,u1>"))
B.dZp={michelle:0}
B.diD=new C.bm(B.dZp,[0.55],x.J)
B.diK=new C.bm(D.ie,[],C.ax("bm<H,d1>"))
B.dZa={tail:0,trap:1,arm:2}
B.diZ=new C.bm(B.dZa,["Tailpiece","P-trap","Trap arm"],x.w)
B.aFc={xbot:0,michelle:1,soldier:2,human:3}
B.aCM=new C.bm(B.aFc,["\ud83e\udd16 X Bot","\ud83d\udc83 Dancer","\ud83e\ude96 Soldier","\ud83d\ude42 Person"],x.w)
B.abE=new C.w(1,0.9137254901960784,0.9215686274509803,0.9372549019607843,D.t)
B.bcY=new C.w(1,0.8549019607843137,0.8666666666666667,0.8901960784313725,D.t)
B.e7N=new A.uy(B.abE,E.ab8,B.abE,B.bcY,"xbot")
B.beJ=new C.w(1,0.0784313725490196,0.047058823529411764,0.03137254901960784,D.t)
B.e7O=new A.uy(B.aeJ,B.beJ,D.cC,D.aB,"michelle")
B.bj5=new C.w(1,0.8509803921568627,0.6470588235294118,0.48627450980392156,D.t)
B.bi5=new C.w(1,0.3568627450980392,0.4196078431372549,0.22745098039215686,D.t)
B.b8x=new C.w(1,0.5411764705882353,0.4823529411764706,0.3333333333333333,D.t)
B.e7M=new A.uy(B.bj5,D.KA,B.bi5,B.b8x,"soldier")
B.a4M=new A.uy(B.abc,B.acX,B.aeT,B.Ve,"human")
B.dj2=new C.bm(B.aFc,[B.e7N,B.e7O,B.e7M,B.a4M],C.ax("bm<n,uy>"))
B.dZF={soldier:0}
B.djl=new C.bm(B.dZF,[3.141592653589793],x.J)
B.dXV={bed:0,nightstand:1,wardrobe:2,desk:3,rug:4,sofa:5,armchair:6,coffee:7,tvstand:8,dining:9,chair:10,plant:11,lamp:12,console:13,shelf:14,tree:15,pine:16,bush:17,flowers:18,fence:19,lamppost:20,bench:21,car:22,road:23,roadturn:24,roadtee:25,roadcross:26,house2:27,shop:28,hospital:29,firestation:30,school:31,firetruck:32,ambulance:33,dog:34,cat:35,cow:36,sheep:37,chicken:38,horse:39,pond:40,swing:41,shed:42,doghouse:43}
B.bxS=new A.hk("Bed","\ud83d\udecf\ufe0f",60,80)
B.by2=new A.hk("Night table","\ud83e\ude91",16,16)
B.by9=new A.hk("Wardrobe","\ud83d\udeaa",44,20)
B.bxP=new A.hk("Desk","\ud83d\udda5\ufe0f",48,24)
B.bxw=new A.hk("Rug","\ud83d\udfe5",70,50)
B.bxW=new A.hk("Sofa","\ud83d\udecb\ufe0f",80,32)
B.by7=new A.hk("Armchair","\ud83d\udcba",30,30)
B.bxK=new A.hk("Coffee table","\u2615",40,24)
B.by3=new A.hk("TV stand","\ud83d\udcfa",56,18)
B.bxD=new A.hk("Dining table","\ud83c\udf7d\ufe0f",56,36)
B.bxG=new A.hk("Chair","\ud83e\ude91",18,18)
B.by4=new A.hk("Plant","\ud83e\udeb4",14,14)
B.bxY=new A.hk("Floor lamp","\ud83d\udca1",10,10)
B.bxQ=new A.hk("Console table","\ud83d\uddc4\ufe0f",44,14)
B.by0=new A.hk("Bookshelf","\ud83d\udcda",36,12)
B.by8=new A.hk("Tree","\ud83c\udf33",36,36)
B.bxM=new A.hk("Pine tree","\ud83c\udf32",30,30)
B.bxB=new A.hk("Bush","\ud83c\udf3f",18,18)
B.bxV=new A.hk("Flowers","\ud83c\udf37",22,22)
B.bxx=new A.hk("Fence","\ud83d\udea7",64,6)
B.bxE=new A.hk("Street lamp","\ud83c\udfee",8,8)
B.bxR=new A.hk("Bench","\ud83e\ude91",44,16)
B.bxy=new A.hk("Car","\ud83d\ude97",84,40)
B.bxJ=new A.hk("Road","\ud83d\udee3\ufe0f",40,40)
B.bxA=new A.hk("Road corner","\u21aa\ufe0f",40,40)
B.bya=new A.hk("Road T-junction","\u22a4",40,40)
B.bxL=new A.hk("Crossroads","\u271a",40,40)
B.bxX=new A.hk("House","\ud83c\udfe0",72,60)
B.bxv=new A.hk("Shop","\ud83c\udfea",84,60)
B.bxH=new A.hk("Hospital","\ud83c\udfe5",110,70)
B.bxU=new A.hk("Fire station","\ud83d\ude92",90,64)
B.bxN=new A.hk("School","\ud83c\udfeb",124,70)
B.by1=new A.hk("Fire truck","\ud83d\ude92",96,40)
B.bxO=new A.hk("Ambulance","\ud83d\ude91",84,40)
B.bxF=new A.hk("Dog","\ud83d\udc15",22,10)
B.bxI=new A.hk("Cat","\ud83d\udc08",16,8)
B.bxZ=new A.hk("Cow","\ud83d\udc04",38,16)
B.bxC=new A.hk("Sheep","\ud83d\udc11",26,14)
B.by_=new A.hk("Chicken","\ud83d\udc14",12,8)
B.bxz=new A.hk("Horse","\ud83d\udc0e",46,16)
B.by5=new A.hk("Pond","\ud83d\udca7",80,56)
B.bxT=new A.hk("Swing set","\ud83c\udfa0",56,40)
B.by6=new A.hk("Shed","\ud83d\uded6",50,42)
B.byb=new A.hk("Dog house","\ud83d\udc15",24,22)
B.pX=new C.bm(B.dXV,[B.bxS,B.by2,B.by9,B.bxP,B.bxw,B.bxW,B.by7,B.bxK,B.by3,B.bxD,B.bxG,B.by4,B.bxY,B.bxQ,B.by0,B.by8,B.bxM,B.bxB,B.bxV,B.bxx,B.bxE,B.bxR,B.bxy,B.bxJ,B.bxA,B.bya,B.bxL,B.bxX,B.bxv,B.bxH,B.bxU,B.bxN,B.by1,B.bxO,B.bxF,B.bxI,B.bxZ,B.bxC,B.by_,B.bxz,B.by5,B.bxT,B.by6,B.byb],C.ax("bm<n,hk>"))
B.fFF=new A.E(0,0,-1.2)
B.dWU=new A.d1("Electrical box","The box is ready. Pull a cable to it, then wire a device.",B.fFF,9)
B.djn=new C.dS([3,B.dWU],C.ax("dS<H,d1>"))
B.aF3={inspect:0,hand:1,screwdriver:2,pliers:3,wrench:4,crimper:5,plunger:6,flapper:7,newoutlet:8,patch:9}
B.Qt=new C.bm(B.aF3,["Look and test","Hand","Screwdriver","Pliers","Wrench","Crimp tool","Plunger","New flapper","New outlet","Drywall patch"],x.w)
B.bBc=new C.a0(63072,"MaterialIcons",!1)
B.djr=new C.bm(B.aF3,[D.fa,B.alc,V.FO,D.FE,D.qV,B.bBc,A_.a_D,D.pS,B.akE,R.vn],C.ax("bm<n,a0>"))
B.dkg=new A.B_(18,50,0,20)
B.dkh=new A.B_(-126,126,-66,5)
B.dki=new A.B_(-4,16,0,24)
B.aDL=new A.U_(null)
B.aDM=new A.a6_(null)
B.aDW=new A.N3(!1,"","",null)
B.fHq=new A.E(16,2.6,0)
B.dWD=new A.d1("Wall drain","The pipe stub that comes out of the wall. The trap arm slides into it.",B.fHq,8)
B.fyl=new A.E(0,3,-6)
B.dWE=new A.d1("Wall","The copper supply pipes come out of the wall here.",B.fyl,24)
B.fFg=new A.E(8.2,1,-7)
B.dWF=new A.d1("Toilet","The tank fills from the cold supply on the wall. The bowl drains into the white pipe in the floor.",B.fFg,7)
B.fxH=new A.E(0,0,40)
B.dWG=new A.d1("The room","A room to build from bare studs to finished, working electrics. The walls hold the cable, the boxes and the devices.",B.fxH,190)
B.fCX=new A.E(-2.4,11.5,-3.6)
B.dWH=new A.d1("Hot faucet inlet","The threaded tail under the faucet where the hot supply hose screws on.",B.fCX,7)
B.fzH=new A.E(-3.6,4,-7.8)
B.dWI=new A.d1("Light switch","Controls the ceiling light. Tap Open lesson to wire one.",B.fzH,4.5)
B.fE5=new A.E(0,0.5,2)
B.dWJ=new A.d1("Voltage tester","A tester that glows when it touches live power.",B.fE5,6)
B.dWK=new A.d1("Pipe joint","A crimped joint in the hot water line.",B.aRF,4)
B.fDe=new A.E(0,-0.2,0.2)
B.dWL=new A.d1("Cover plate","The plate covers the box and the edges of the drywall so nobody touches the wires.",B.fDe,8)
B.fGE=new A.E(-4.6,0.5,-3.4)
B.dWM=new A.d1("Hot shut-off valve","The angle stop valve on the hot pipe. Turn the handle to stop the water to the faucet without shutting off the whole house. Hot is always on the left.",B.fGE,8)
B.fEO=new A.E(0,-0.3,3.2)
B.dWN=new A.d1("White wire nut: NEUTRAL","Twist the house white wire and the fixture white wire together under this cap.",B.fEO,6)
B.fDY=new A.E(4.6,0.5,-3.4)
B.dWO=new A.d1("Cold shut-off valve","The angle stop valve on the cold pipe. Cold is always on the right.",B.fDY,8)
B.fzh=new A.E(2.4,11.5,-3.6)
B.dWP=new A.d1("Cold faucet inlet","The threaded tail under the faucet where the cold supply hose screws on.",B.fzh,7)
B.fI7=new A.E(0.8,-0.8,1.2)
B.dWQ=new A.d1("Black wire to the light","This black wire carries power to the light once the switch is on. It goes on the other brass screw.",B.fI7,7)
B.fCV=new A.E(10.05,5.2,-7.5)
B.dWR=new A.d1("Water heater breaker","A big circuit for the water heater. It is ON.",B.fCV,3.5)
B.aR5=new A.E(0,40,0)
B.dWS=new A.d1("Back wall",y.s,B.aR5,140)
B.fF9=new A.E(3,3.8,-7.4)
B.dWT=new A.d1("Kitchen faucet","Hot on the left, cold on the right. Tap Open lesson to connect the supply hoses.",B.fF9,4.5)
B.zt=new A.E(0,6,0)
B.dWV=new A.d1("Tailpiece","The straight pipe that hangs from the sink drain. Its bottom end is smooth so the slip nut can slide on and grip it.",B.zt,10)
B.fGr=new A.E(-60,40,50)
B.dWW=new A.d1("Left wall",y.s,B.fGr,140)
B.fA1=new A.E(3,1,0)
B.dWX=new A.d1("P-trap","The U-shaped bend. It always keeps a little water inside, and that water plug blocks sewer gas from coming back up into the house.",B.fA1,11)
B.fy1=new A.E(0,20,5)
B.dWY=new A.d1("The room","A bare room with the water supply stubs and the drain stub already in the wall and floor.",B.fy1,120)
B.fyI=new A.E(0,-8,0)
B.dWZ=new A.d1("Cabinet","The cabinet under the sink where the drain is built.",B.fyI,22)
B.fxF=new A.E(0,0,150)
B.dX_=new A.d1("Lawn","The grass. Walls, floors and the sky stay as they are, but you can add things to the garden with the Furniture button.",B.fxF,400)
B.fyu=new A.E(0,4,-8)
B.dX0=new A.d1("Wall framing","2x4 studs 16 inches apart. Pipes and cables run through holes drilled in the middle of the studs, never along the edge where a nail could hit them.",B.fyu,18)
B.aRQ=new A.E(0,-0.2,5.1)
B.dX1=new A.d1("TEST and RESET buttons","Press TEST to make the GFCI trip. Press RESET to turn it back on. Test it once a month.",B.aRQ,5)
B.aR0=new A.E(0,11,0)
B.dX2=new A.d1("Sink","The sink bowl and the counter. The drain flange at the bottom is where the tailpiece starts.",B.aR0,16)
B.fO=new A.E(0,0,0)
B.dX3=new A.d1("Drywall","The wall surface. A hole is cut in it for the electrical box.",B.fO,22)
B.fAK=new A.E(60,40,50)
B.dX4=new A.d1("Right wall",y.s,B.fAK,140)
B.fxT=new A.E(0,14,-3)
B.dX5=new A.d1("Counter and sink","The faucet is mounted through a hole in the counter.",B.fxT,20)
B.fC4=new A.E(0,-1.9,5)
B.dX6=new A.d1("GREEN screw: GROUND","The green screw is for the bare copper ground wire.",B.fC4,5)
B.fyt=new A.E(0,47,-2)
B.dX7=new A.d1("Top and bottom plate","The horizontal 2x4s at the top and the bottom of the wall. The studs stand between them.",B.fyt,70)
B.fxI=new A.E(0,0,-8)
B.dX8=new A.d1("Wall","Behind the wall the drain pipe goes down to the sewer line.",B.fxI,22)
B.fxZ=new A.E(0,19,-3)
B.dX9=new A.d1("Faucet","The faucet with hot on the left (red) and cold on the right (blue).",B.fxZ,14)
B.fB_=new A.E(3.5,2,-7.2)
B.dXa=new A.d1("Kitchen counter and cabinet","The cabinet under the sink is where the drain and the shut-off valves live.",B.fB_,9)
B.fCm=new A.E(10.05,5.7,-7.5)
B.dXb=new A.d1("Kitchen breaker","Protects the kitchen outlets. It is ON.",B.fCm,3.5)
B.fD3=new A.E(4,6,-2.5)
B.dXc=new A.d1("Cold supply hose","A braided steel hose with a rubber liner and a blue band.",B.fD3,9)
B.fE3=new A.E(-1,0.6,4.3)
B.dXd=new A.d1("SILVER screw: NEUTRAL side",y.o,B.fE3,5)
B.a7Q=new A.E(0,3.7,0)
B.dXe=new A.d1("Slip nut","A big plastic nut. Slide it on the pipe first, then the washer, then join the pieces and hand tighten. A rubber washer inside makes the seal.",B.a7Q,7)
B.TA=new A.E(0,-1,-0.6)
B.dXf=new A.d1("Wire nut","A twist-on cap that joins wires safely. The two white wires are joined here because a switch only cuts the hot wire.",B.TA,5)
B.fD8=new A.E(-1.5,-0.3,3.2)
B.dXg=new A.d1("Black wire nut: HOT","Twist the house black wire and the fixture black wire together under this cap.",B.fD8,6)
B.fCl=new A.E(-1.9,0,-2)
B.dXh=new A.d1("Wood stud","The 2x4 frame inside the wall. The electrical box is nailed or screwed to a stud so it cannot move.",B.fCl,16)
B.fFE=new A.E(-1,-0.8,4.3)
B.dXi=new A.d1("SILVER screw: NEUTRAL side",y.o,B.fFE,5)
B.fHH=new A.E(6,3,-7.8)
B.dXj=new A.d1("Water and drain pipes","Red is hot water, blue is cold water (PEX tubing). The white pipes are drains. They slope down so the waste flows away.",B.fHH,14)
B.fFI=new A.E(1,0.6,4.3)
B.dXk=new A.d1("BRASS screw: HOT side",y.u,B.fFI,5)
B.fG1=new A.E(0,-0.2,4.9)
B.dXl=new A.d1("Mounting strap (yoke)","The metal strap with two screw slots. Long screws through the ears hold the device in the box.",B.fG1,7)
B.fI4=new A.E(9.55,4.7,-7.5)
B.dXm=new A.d1("Spare breaker","A spare circuit.",B.fI4,3.5)
B.fy2=new A.E(0,20,8)
B.dXn=new A.d1("Vanity and counter","The cabinet that holds the sink. The pipes live inside it.",B.fy2,70)
B.fH9=new A.E(-3.2,1.3,-7.8)
B.dXo=new A.d1("Living room outlet","A standard outlet. Tap Open lesson to wire one in 3D.",B.fH9,4.5)
B.fG3=new A.E(1.5,-0.3,3.2)
B.dXp=new A.d1("Green ground connection","Join the bare copper house ground wire to the green fixture ground wire.",B.fG3,6)
B.fC9=new A.E(12,2.6,0)
B.dXq=new A.d1("Trap arm","The pipe that carries the waste water from the trap into the wall. It must slope down toward the wall, about 1/4 inch per foot.",B.fC9,9)
B.fDK=new A.E(0,6.5,-7.8)
B.dXr=new A.d1("Electrical cables","Cables run from the breaker panel to every outlet, switch and light. Yellow is 12 gauge for 20 amps. White is 14 gauge for 15 amps.",B.fDK,16)
B.fEj=new A.E(11.2,2.3,-6)
B.dXs=new A.d1("Water heater","Heats the water. The cold line goes in at the top and the hot line comes out at the top.",B.fEj,9)
B.fER=new A.E(9.55,5.2,-7.5)
B.dXt=new A.d1("Bathroom breaker","Protects the bathroom. It is ON.",B.fER,3.5)
B.fCr=new A.E(5.2,3.9,-7.8)
B.dXu=new A.d1("Kitchen GFCI outlet","Outlets near water must be GFCI. Tap Open lesson to wire one.",B.fCr,4.5)
B.fyq=new A.E(0,40,-3)
B.dXv=new A.d1("Electrical cable","Yellow 12/2 cable with ground: it carries power from the breaker panel through the holes in the studs to each box.",B.fyq,80)
B.fCT=new A.E(-8.4,1.2,-6.4)
B.dXw=new A.d1("Sofa","Just furniture, to show the size of the room.",B.fCT,10)
B.dXx=new A.d1("Outlet face","Two outlets. The short slot is hot, the long slot is neutral, and the round hole is ground.",B.aRQ,6)
B.fBP=new A.E(0,4,-7.8)
B.dXy=new A.d1("Wall","The drywall of the back wall.",B.fBP,16)
B.fHc=new A.E(0,0,0.6)
B.dXz=new A.d1("Canopy","The round cover that hides the box and the wire connections against the ceiling.",B.fHc,8)
B.dXA=new A.d1("Concrete slab","The foundation. It carries the whole weight of the house. Plumbing drains are placed before it is poured.",B.fO,30)
B.fym=new A.E(0,40,12)
B.dXB=new A.d1("Front door","Tap the door to go inside the house.",B.fym,260)
B.a7S=new A.E(8.9,2.6,0)
B.dXC=new A.d1("Slip nut","Hand tighten it, then about a quarter turn with pliers. Over-tightening cracks the plastic.",B.a7S,7)
B.fEQ=new A.E(1,-0.8,4.3)
B.dXD=new A.d1("BRASS screw: HOT side",y.u,B.fEQ,5)
B.fBD=new A.E(0.6,1.5,-1.8)
B.dXE=new A.d1("Cable to the light (LOAD)","This cable carries the switched power on to the light. The black wire here only has power when the switch is on.",B.fBD,8)
B.fBZ=new A.E(9.8,5,-7.5)
B.dXF=new A.d1("Breaker panel","The main electrical panel. Each breaker protects one circuit. A breaker that is in the middle position has TRIPPED. Flip it fully OFF and then ON to reset.",B.fBZ,6)
B.fD6=new A.E(-4,6,-2.5)
B.dXG=new A.d1("Hot supply hose","A braided steel hose with a rubber liner and a red band. Hand tighten the nuts, then a quarter turn with a wrench.",B.fD6,9)
B.fmd=new C.x("Sick people can stay in a hospital bed. Treat each patient before their care runs out, and they go home better.",null,D.IH,null,D.L,null,null,null,null,null,null,null)
B.e3v=new C.C(D.ahI,B.fmd,null)
B.bHe=new C.ae(D.ee,18,D.b8,null,null,null)
B.e3L=new C.C(D.fx,B.bHe,null)
B.e3N=new C.C(D.fx,F.amJ,null)
B.e9L=new A.a8t(null,null)
B.bbk=new C.w(1,0.30980392156862746,0.7019607843137254,0.9647058823529412,D.t)
B.biH=new C.w(1,0.11372549019607843,0.37254901960784315,0.7686274509803922,D.t)
B.bfO=new C.w(1,0.043137254901960784,0.16470588235294117,0.4196078431372549,D.t)
B.cPq=w([B.bbk,B.biH,B.bfO],x.O)
B.eav=new C.bS(Z.pa,0.5,D.x,null,0,B.cPq,null,null)
B.biX=new C.w(1,0.8392156862745098,0.9019607843137255,0.9176470588235294,D.t)
B.ebd=new C.y(B.biX,B.VU)
B.ebw=new C.y(B.wL,B.fO)
B.ecN=new C.y(64,2.4)
B.eej=new C.y("LOAD (taped)",D.d9)
B.egY=new C.y(63,-2.4)
B.ehH=new C.y(51,B.abD)
B.b72=new C.w(1,0.9137254901960784,0.8705882352941177,0.7607843137254902,D.t)
B.ekg=new C.y(B.b72,B.At)
B.b5s=new C.w(1,0.7647058823529411,0.8117647058823529,0.9019607843137255,D.t)
B.emL=new C.y(B.b5s,B.aeL)
B.bdN=new C.w(1,0.3568627450980392,0.39215686274509803,0.4392156862745098,D.t)
B.eom=new C.y("SILVER \xb7 NEUTRAL",B.bdN)
B.fHk=new A.E(-1.5,0,0)
B.eov=new C.y(B.Kj,B.fHk)
B.b6c=new C.w(1,0.8196078431372549,0.29411764705882354,0.22745098039215686,D.t)
B.eq0=new C.y(52,B.b6c)
B.baK=new C.w(1,0.12156862745098039,0.47843137254901963,0.22745098039215686,D.t)
B.eqT=new C.y("GREEN \xb7 GROUND",B.baK)
B.bhU=new C.w(1,0.9450980392156862,0.9098039215686274,0.8235294117647058,D.t)
B.ery=new C.y(B.bhU,B.At)
B.erP=new C.y("main","Main water valve")
B.ae5=new C.w(1,0.1843137254901961,0.6352941176470588,0.30980392156862746,D.t)
B.fI8=new A.E(1.5,0,0)
B.ev2=new C.y(B.ae5,B.fI8)
B.b7z=new C.w(1,0.9529411764705882,0.9411764705882353,0.9098039215686274,D.t)
B.bdk=new C.w(1,0.4823529411764706,0.5294117647058824,0.5803921568627451,D.t)
B.evF=new C.y(B.b7z,B.bdk)
B.eww=new C.y(B.pw,B.abC)
B.b7f=new C.w(1,0.6039215686274509,0.4196078431372549,0.047058823529411764,D.t)
B.exg=new C.y("BRASS \xb7 HOT",B.b7f)
B.exJ=new C.y(53,B.ae5)
B.eym=new C.bt(61,-4.6,B.t8)
B.eA7=new C.bt(62,4.6,B.nF)
B.eBQ=new C.cH([0,17.1,16.4,5.8])
B.eBT=new C.cH([0,-0.1,16.4,4.2])
B.eCW=new C.cH([15.6,9,14.8,22])
B.eD_=new C.cH([-15.6,9,14.8,22])
B.eD8=new C.ev([72,60,44,B.Kt,B.Kw])
B.biD=new C.w(1,0.8941176470588236,0.6901960784313725,0.47843137254901963,D.t)
B.eDp=new C.ev([124,70,44,B.biD,B.x5])
B.eDw=new C.ev([90,64,46,B.ad6,D.ju])
B.eDP=new C.ev([110,70,62,D.bM,D.ak])
B.eDU=new C.ev([84,60,40,B.ad8,B.Kw])
B.eJL=new C.at(126,84)
B.eKX=new C.a7(58,null,null,null)
B.eTu=new C.G(!0,D.c,null,null,null,null,13.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.eUK=new C.G(!0,D.az,null,null,null,null,14,D.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.eUY=new C.G(!0,D.az,null,null,null,null,11.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.eVI=new C.G(!0,D.aH,null,null,null,null,12.5,D.u,null,2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.eWh=new C.G(!0,D.c,null,null,null,null,12.5,D.O,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.aOo=new C.G(!0,D.ad,null,null,null,null,12,D.O,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.eX7=new C.G(!0,D.c,null,null,null,null,13,D.O,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.a6O=new C.G(!0,D.ad,null,null,null,null,null,null,null,null,null,null,1.45,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.eZ_=new C.G(!0,null,null,null,null,null,9,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.IB=new C.G(!0,D.aH,null,null,null,null,12.5,D.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.eZv=new C.G(!0,D.c,null,null,null,null,11.5,D.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.eZN=new C.G(!0,D.bK,null,null,null,null,13,D.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.f_O=new C.G(!0,D.ad,null,null,null,null,13.5,null,D.cD,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.f_Z=new C.G(!0,D.fg,null,null,null,null,11.5,D.O,null,null,null,null,1.25,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.f03=new C.G(!0,D.ez,null,null,null,null,14,D.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.f18=new C.G(!0,D.aR,null,null,null,null,12,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.aP5=new C.G(!0,D.ad,null,null,null,null,13.5,null,null,null,null,null,1.5,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.f5A=new C.G(!0,D.c,null,null,null,null,13.5,D.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.f5K=new C.G(!0,D.aR,null,null,null,null,11.5,null,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.f6g=new C.G(!0,D.b1,null,null,null,null,14.5,D.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.eTJ=new C.G(!0,D.w,null,null,null,null,12,D.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.f7r=new C.x("Open the 3D lesson",null,B.eTJ,null,null,null,null,null,null,null,null,null)
B.f8i=new C.x("Tip: pick a part, then tap its glowing spot. Joints on hoses, bolts and the drain are only loose: pick the Wrench and tap them. Use your Hand on the main water valve: turn the water OFF before you cut into a pipe, and ON to test for leaks.",null,E.a6G,null,null,null,null,null,null,null,null,null)
B.f9p=new C.x("You used all three lives. Electricity does not give second chances, so in real life you turn the breaker OFF and test the wires every single time. Try the job again.",null,D.zm,null,null,null,null,null,null,null,null,null)
B.f9G=new C.x("A different house",null,null,null,null,null,null,null,null,null,null,null)
B.fa7=new C.x("\ud83c\udf5e",null,D.D4,null,null,null,null,null,null,null,null,null)
B.far=new C.x("Play the tour",null,null,null,null,null,null,null,null,null,null,null)
B.fay=new C.x("Start this job again",null,null,null,null,null,null,null,null,null,null,null)
B.fdh=new C.x("Start from a bare house (wire everything)",null,null,null,null,null,null,null,null,null,null,null)
B.ffp=new C.x("The customer says\u2026",null,D.du,null,null,null,null,null,null,null,null,null)
B.fg7=new C.x("What the house needs",null,D.du,null,null,null,null,null,null,null,null,null)
B.fgi=new C.x("Next job",null,null,null,null,null,null,null,null,null,null,null)
B.eV9=new C.G(!0,D.w,null,null,null,null,14,D.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fgq=new C.x("Go in",null,B.eV9,null,null,null,null,null,null,null,null,null)
B.f2Y=new C.G(!0,D.aH,null,null,null,null,22,D.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fgu=new C.x("My House",null,B.f2Y,null,D.L,null,null,null,null,null,null,null)
B.fgB=new C.x("New job",null,null,null,null,null,null,null,null,null,null,null)
B.aOK=new C.G(!0,D.cj,null,null,null,null,null,D.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fgI=new C.x("Job over",null,B.aOK,null,null,null,null,null,null,null,null,null)
B.fgY=new C.x("Three shocks. In real life you switch the breaker off and test the wires, every time. Try another call.",null,D.zm,null,null,null,null,null,null,null,null,null)
B.fh3=new C.x("Learn the trades",null,L.rz,null,null,null,null,null,null,null,null,null)
B.fhD=new C.x("Practice mode: no hints. You will only hear from me when something is wrong.",null,U.SY,null,null,null,null,null,null,null,null,null)
B.fhQ=new C.x("New call",null,null,null,null,null,null,null,null,null,null,null)
B.fhV=new C.x("Job done! \ud83c\udf89",null,O.T1,null,null,null,null,null,null,null,null,null)
B.fj2=new C.x("Next call",null,null,null,null,null,null,null,null,null,null,null)
B.fjq=new C.x("Plug in",null,D.du,null,null,null,null,null,null,null,null,null)
B.fjQ=new C.x("Look around",null,null,null,null,null,null,null,null,null,null,null)
B.fko=new C.x("The customer wants:",null,D.a6Z,null,null,null,null,null,null,null,null,null)
B.fky=new C.x('Tip: pick "Look and test" and tap things to find out what is wrong. Then pick the right tool. Turn the breaker off (hand) before you touch any wire.',null,E.a6G,null,null,null,null,null,null,null,null,null)
B.fmm=new C.x("Who walks the house?",null,Q.SH,null,null,null,null,null,null,null,null,null)
B.fmX=new C.x("5 bedrooms, 3 bathrooms and a garden. Walk in, look all round, fix what is wrong.",null,Y.SI,null,D.L,null,null,null,null,null,null,null)
B.fn1=new C.x("Call over",null,B.aOK,null,null,null,null,null,null,null,null,null)
B.fn8=new C.x("\u23cf Unplug",null,I.zj,null,null,null,null,null,null,null,null,null)
B.fnr=new C.x("A different call",null,null,null,null,null,null,null,null,null,null,null)
B.fnR=new C.x("\ud83d\udecf\ufe0f",null,D.us,null,null,null,null,null,null,null,null,null)
B.fog=new C.x("Job complete! \ud83c\udf89",null,O.T1,null,null,null,null,null,null,null,null,null)
B.foR=new C.x("How you are doing",null,D.i3,null,null,null,null,null,null,null,null,null)
B.fpd=new C.x("House tour \ud83c\udfac",null,D.du,null,null,null,null,null,null,null,null,null)
B.fpm=new C.x("All fixed! \ud83c\udf89",null,O.T1,null,null,null,null,null,null,null,null,null)
B.aQa=new C.x("Stay",null,null,null,null,null,null,null,null,null,null,null)
B.aQc=new C.x("A different job",null,null,null,null,null,null,null,null,null,null,null)
B.frq=new C.x("It goes on the back wall, not wired yet. Tap the red one to wire it yourself.",null,U.SP,null,null,null,null,null,null,null,null,null)
B.ftd=new C.x("The job",null,D.du,null,null,null,null,null,null,null,null,null)
B.ftD=new C.x("A little person walks through the whole house: the living room, the kitchen (a drink from the fridge), the hall, the bedrooms and the bathrooms. Every TV is switched on first. Choose how long it takes.",null,D.IH,null,null,null,null,null,null,null,null,null)
B.fu3=new C.x("Stay in the room",null,null,null,null,null,null,null,null,null,null,null)
B.fuy=new C.x("\ud83d\udc8a",null,D.D4,null,null,null,null,null,null,null,null,null)
B.fxA=new A.E(3.6,2.6,0.6)
B.fxC=new A.E(0,56,0.9)
B.fxE=new A.E(0,0.62,-19.2)
B.lr=new A.E(0,0,1)
B.fxG=new A.E(0,0,3)
B.a7M=new A.E(0,0,4)
B.zs=new A.E(0,0,-1)
B.aQZ=new A.E(0,0,-60)
B.aR_=new A.E(0,10,0)
B.fxJ=new A.E(0,10,3)
B.fxK=new A.E(0,115,3)
B.fxL=new A.E(0,115,-63)
B.fxM=new A.E(0,128,-30)
B.fxN=new A.E(0,12,0)
B.fxO=new A.E(0,12,3)
B.aR1=new A.E(0,13,0)
B.fxP=new A.E(0,13,-8)
B.J0=new A.E(0,14,0)
B.fxQ=new A.E(0,14,11)
B.fxR=new A.E(0,14,2)
B.fxS=new A.E(0,14,5)
B.fxU=new A.E(0,14,-9)
B.fxV=new A.E(0,150,8)
B.fxW=new A.E(0,16,0)
B.a7N=new A.E(0,17,0)
B.fxX=new A.E(0,17,21)
B.fxY=new A.E(0,19,14)
B.fP=new A.E(0,1,0)
B.fy_=new A.E(0,20,0)
B.fy0=new A.E(0,20,16)
B.fy3=new A.E(0,20,-14)
B.fy4=new A.E(0,20,-6)
B.fy5=new A.E(0,21,0)
B.fy6=new A.E(0,22,-11)
B.fy7=new A.E(0,22,-12)
B.fy8=new A.E(0,22,-39)
B.fy9=new A.E(0,23,0)
B.fya=new A.E(0,24,0)
B.fyb=new A.E(0,24,13)
B.fyc=new A.E(0,25,-15)
B.aR2=new A.E(0,28,0)
B.fyd=new A.E(0,28,-8)
B.fye=new A.E(0,2,14)
B.aR3=new A.E(0,30,0)
B.fyf=new A.E(0,31,-6)
B.aR4=new A.E(0,34,0)
B.fyg=new A.E(0,36,0)
B.fyh=new A.E(0,36,19)
B.fyi=new A.E(0,37,22)
B.fyj=new A.E(0,3,0)
B.fyk=new A.E(0,3,-30)
B.fyn=new A.E(0,40,150)
B.fyo=new A.E(0,40,17)
B.fyp=new A.E(0,40,40)
B.fyr=new A.E(0,40,-6)
B.fys=new A.E(0,46,0)
B.aR6=new A.E(0,48,0)
B.Tz=new A.E(0,4,-2)
B.fyv=new A.E(0,50,-30)
B.fyw=new A.E(0,52,0)
B.fyx=new A.E(0,55,0)
B.fyy=new A.E(0,58,0)
B.fyz=new A.E(0,5,4)
B.fyA=new A.E(0,7,0)
B.fyB=new A.E(0,7,-5)
B.Da=new A.E(0,8,0)
B.fyC=new A.E(0,8,6)
B.fyD=new A.E(0,8,-16)
B.fyE=new A.E(0,8,-19)
B.fyF=new A.E(0,8,-4)
B.fyG=new A.E(0,94,13)
B.aR7=new A.E(0,9,0)
B.aR8=new A.E(0,9,-3)
B.a7O=new A.E(0,-4,28)
B.fyH=new A.E(0,-4,-20)
B.fyK=new A.E(10,12,10)
B.fyL=new A.E(10,8,10)
B.fyM=new A.E(11,12,30)
B.fyN=new A.E(11,1,11)
B.fyO=new A.E(120,0,-30)
B.fyP=new A.E(13,0,0)
B.fyQ=new A.E(13,15,2)
B.fyR=new A.E(13,28,3)
B.fyS=new A.E(0,0.52,2.35)
B.fyT=new A.E(14,13,28)
B.fyU=new A.E(14,17,4)
B.fyV=new A.E(14,20,-28)
B.fyW=new A.E(14,30,14)
B.fyX=new A.E(14,36,14)
B.fyZ=new A.E(16,10,10)
B.fz_=new A.E(16,16,16)
B.aR9=new A.E(17,3,17)
B.fz0=new A.E(18,18,14)
B.fz1=new A.E(18,20,18)
B.fz2=new A.E(18,22,2)
B.fz3=new A.E(18,28,16)
B.fz4=new A.E(18,2,18)
B.fz5=new A.E(18,6,0)
B.fz6=new A.E(18,9,11)
B.fz7=new A.E(19,13,7)
B.fz8=new A.E(70,0.6,50)
B.fz9=new A.E(0,3,-6.5)
B.fza=new A.E(-4,20.4,0)
B.fzb=new A.E(1,1,0.64)
B.fzc=new A.E(-4.6,1.5,-3.6)
B.fzd=new A.E(0,-13.5,-1.5)
B.fze=new A.E(4,10,3.5)
B.j_=new A.E(1,0,0)
B.fzf=new A.E(1,26,14)
B.fzg=new A.E(1,28,14)
B.aRa=new A.E(1,2,1)
B.aRb=new A.E(1,3,1)
B.aRc=new A.E(1,3,6)
B.fzi=new A.E(1,0.9,0.06)
B.fzk=new A.E(1.6,15,1.6)
B.aRd=new A.E(20,14,7)
B.fzl=new A.E(20,30,26)
B.fzm=new A.E(20,4,26)
B.fzn=new A.E(20,92,26)
B.fzo=new A.E(22,12,34)
B.fzp=new A.E(22,14,0)
B.fzq=new A.E(22,14,2)
B.fzr=new A.E(22,2,28)
B.fzs=new A.E(22,3,10)
B.fzt=new A.E(22,3,22)
B.fzu=new A.E(240,100,60)
B.fzv=new A.E(244,6,64)
B.fzw=new A.E(24,12,34)
B.fzx=new A.E(24,14,22)
B.fzy=new A.E(24,38,0)
B.aRe=new A.E(24,6,14)
B.fzz=new A.E(262,3,5)
B.fzA=new A.E(262,3,56)
B.fzB=new A.E(26,2,26)
B.aRf=new A.E(26,4,22)
B.fzC=new A.E(26,72,26)
B.fzD=new A.E(26,-34,96)
B.fzF=new A.E(-0.1,0,0)
B.fzG=new A.E(2,13,2)
B.aRg=new A.E(2,23,12)
B.aRh=new A.E(2,28,22)
B.fzI=new A.E(64,10,-1.4)
B.fzJ=new A.E(19.6,0,-1.5)
B.aRi=new A.E(0,56,1.3)
B.fzK=new A.E(0,15.5,0)
B.fzL=new A.E(30,16,30)
B.aRj=new A.E(30,16,72)
B.fzM=new A.E(30,22,0)
B.fzN=new A.E(30,24,8)
B.fzO=new A.E(30,28,18)
B.fzP=new A.E(30,29,0)
B.fzR=new A.E(32,2,20)
B.fzS=new A.E(33,11,10)
B.fzT=new A.E(34,30,1)
B.fzU=new A.E(-1,-1.7,2.3)
B.fzV=new A.E(36,22,0)
B.fzW=new A.E(36,30,0)
B.fzX=new A.E(36,30,1)
B.fzY=new A.E(36,60,12)
B.fzZ=new A.E(37,16,0)
B.fA_=new A.E(-0.2,-0.3,-0.4)
B.fA0=new A.E(0,48.6,55)
B.aRk=new A.E(3,12,12)
B.fA2=new A.E(3,22,2)
B.fA3=new A.E(3,26,3)
B.a7P=new A.E(3,3,3)
B.fA4=new A.E(3,5,3)
B.fA6=new A.E(40,1,14)
B.fA7=new A.E(40,28,1)
B.fA8=new A.E(40,2,24)
B.fA9=new A.E(40,30,26)
B.fAa=new A.E(42,2,28)
B.fAb=new A.E(44,10,2)
B.aRm=new A.E(44,2,14)
B.fAc=new A.E(44,72,20)
B.fAd=new A.E(0.9,0,4.4)
B.fAe=new A.E(8.2,1.9,-7.55)
B.fAf=new A.E(-120.1,100,-60)
B.fAg=new A.E(46,10,34)
B.fAh=new A.E(46,26,2)
B.fAi=new A.E(48,2,24)
B.fAj=new A.E(0,-47.25,-2.25)
B.fAk=new A.E(0.6,68,0.4)
B.fAl=new A.E(0,1.59,0.14)
B.fAm=new A.E(0,-3.4,1)
B.fAn=new A.E(25,79,1.4)
B.fAo=new A.E(1,0,-1.2)
B.fAp=new A.E(0.6,4,2.4)
B.fAq=new A.E(50,28,42)
B.fAr=new A.E(50,4,28)
B.fAs=new A.E(54,5,18)
B.fAt=new A.E(56,18,18)
B.fAu=new A.E(56,2,36)
B.fAv=new A.E(56,3,32)
B.fAw=new A.E(56,3,48)
B.fAx=new A.E(58,9,74)
B.fAy=new A.E(0,-0.8,0.9)
B.fAz=new A.E(11.9,0,-8)
B.fAA=new A.E(20,7,34.4)
B.aRn=new A.E(1.6,1.6,0.4)
B.fAC=new A.E(0.16,0.32,0.07)
B.aRo=new A.E(5,12,26)
B.fAD=new A.E(5,1,2)
B.fAE=new A.E(5,6,10)
B.fAF=new A.E(5,6,3)
B.fAG=new A.E(5,9,8)
B.fAH=new A.E(0,14.3,-1.5)
B.aRp=new A.E(-13,8.6,-9.5)
B.fAI=new A.E(60,12,80)
B.fAJ=new A.E(60,30,3)
B.fAL=new A.E(62,18,20)
B.fAM=new A.E(62,22,6)
B.fAN=new A.E(64,10,0)
B.aRq=new A.E(6,14,20)
B.aRr=new A.E(6,14,32)
B.fAQ=new A.E(6,4,4)
B.fAS=new A.E(0,-0.2,0.14)
B.fAU=new A.E(0.3,38,2)
B.fAV=new A.E(70,125,-45)
B.fAW=new A.E(70,144,-45)
B.fAX=new A.E(72,-17,70)
B.fAY=new A.E(12,5,0.4)
B.fAZ=new A.E(1.6,1.7,3.6)
B.fB0=new A.E(-72.8,0,55)
B.fB2=new A.E(25,79,0.2)
B.fB3=new A.E(7,0,-8)
B.fB4=new A.E(7,2,7)
B.aRs=new A.E(7,3,0)
B.fB5=new A.E(7,8,3)
B.fB7=new A.E(0,11,9.2)
B.fB8=new A.E(-3.2,1.3,-7.82)
B.fB9=new A.E(80,16,32)
B.fBa=new A.E(80,26,8)
B.aRt=new A.E(147,1.5,3.5)
B.fBb=new A.E(82,46,3)
B.aRu=new A.E(-6.5,6.9,-3)
B.fBc=new A.E(84,10,38)
B.fBd=new A.E(84,18,38)
B.fBe=new A.E(0.93,0.92,1)
B.fBf=new A.E(4.6,4.2,9.5)
B.fBg=new A.E(0.4,6,8)
B.fBh=new A.E(0,-48.6,55)
B.fBi=new A.E(2.6,2,2.6)
B.fBj=new A.E(5.5,8.5,3)
B.fBk=new A.E(120.1,100,0)
B.fBl=new A.E(0,0,0.26)
B.fBm=new A.E(8,18,8)
B.aRv=new A.E(8,2,16)
B.fBn=new A.E(8,2,6)
B.aRw=new A.E(8,2,8)
B.fBo=new A.E(8,4,4)
B.fBp=new A.E(8,8,12)
B.fBq=new A.E(8,9,8)
B.fBr=new A.E(8,9,9)
B.fBs=new A.E(15,19,0.5)
B.fBt=new A.E(96,14,38)
B.fBu=new A.E(0.4,0.38,0.12)
B.fBv=new A.E(0,0,-0.43)
B.aRx=new A.E(11.2,4.5,-6)
B.aRy=new A.E(1.2,96,112)
B.aRz=new A.E(0.08,3.8,2.4)
B.aRA=new A.E(9,1,9)
B.fBw=new A.E(9,40,4)
B.fBx=new A.E(9,5,9)
B.fBy=new A.E(-3.5,26,15)
B.fBz=new A.E(1.5,1.3,0.6)
B.fBB=new A.E(0,-1.78,0.27)
B.fBC=new A.E(0,0.62,0)
B.fBF=new A.E(20,11.5,0)
B.fBG=new A.E(3.2,0.12,-6.7)
B.fBH=new A.E(12,0,-8.1)
B.fBJ=new A.E(1.25,0.28,0.1)
B.fBK=new A.E(0,36,10.2)
B.fBL=new A.E(24,0.08,16)
B.fBN=new A.E(0,4,-7.9)
B.fBO=new A.E(11.9,0,8)
B.fBQ=new A.E(21,1.4,8)
B.fBR=new A.E(0.8,0.8,1.6)
B.fBS=new A.E(1.4,1,1)
B.fBU=new A.E(71.2,46.6,55)
B.fBV=new A.E(3,3.28,-7.2)
B.fBW=new A.E(1.4,0.3,1)
B.fBX=new A.E(-6.1,1.2,-6.4)
B.fBY=new A.E(1.4,26,0.4)
B.fC_=new A.E(2.8,3.4,2.4)
B.fC0=new A.E(26,0.3,130)
B.fC1=new A.E(0,-45.5,0.5)
B.fC2=new A.E(1.8,4,1)
B.fC3=new A.E(5,1.6,0.5)
B.fC5=new A.E(0,11,8.5)
B.fC6=new A.E(0.1,-2,2.4)
B.fC7=new A.E(0,0.2,2.8)
B.fC8=new A.E(6,10,1.4)
B.fCa=new A.E(43,23,0.3)
B.fCb=new A.E(0,10,5.2)
B.fCc=new A.E(0,-1.2,4.7)
B.fCd=new A.E(120.1,124,-30)
B.fCe=new A.E(18.9,2.6,0)
B.fCf=new A.E(-12,0,-8.1)
B.fCg=new A.E(3,11,0.5)
B.fCh=new A.E(11.8,4,0)
B.fCi=new A.E(0.97,0.18,2.25)
B.aRB=new A.E(-71.7,6,55)
B.fCk=new A.E(5.6,0.3,1.9)
B.fCn=new A.E(52,8,0.4)
B.fCo=new A.E(4.6,7.6,3)
B.fCp=new A.E(-1,0,-1.2)
B.fCq=new A.E(0,1.7,0)
B.fCs=new A.E(-1,0,1.5)
B.fCt=new A.E(90,2,0.5)
B.fCu=new A.E(5,8,0.4)
B.fCv=new A.E(5,2.2,0.8)
B.fCw=new A.E(0.18,0.12,0.08)
B.fCx=new A.E(147,3,1.4)
B.fCy=new A.E(4,16.2,0)
B.fCz=new A.E(10,15,0.5)
B.fCA=new A.E(144,5,0.7)
B.fCB=new A.E(0,34,1.1)
B.fCC=new A.E(1.2,-1.7,2.3)
B.fCD=new A.E(31.5,23,0)
B.fCF=new A.E(0.82,1.7,0.3)
B.fCG=new A.E(47,7,34.4)
B.fCH=new A.E(-0.12,0,0)
B.fCJ=new A.E(3.5,94,0.2)
B.fCK=new A.E(1.1,2.05,0.04)
B.fCL=new A.E(25,79,1.2)
B.fCM=new A.E(1.12,0.78,0.76)
B.fCN=new A.E(10,14,0.5)
B.fCO=new A.E(5,8,0.5)
B.fCP=new A.E(1.1,0.5,0.7)
B.fCQ=new A.E(-20,11.5,0)
B.fCR=new A.E(0,-0.5,0.6)
B.fCS=new A.E(0,1.4,0)
B.fCU=new A.E(0,3.4,0.8)
B.fCW=new A.E(-0.85,4,-3.2)
B.fCY=new A.E(-7.1,19,4)
B.fCZ=new A.E(40,7.2,1.2)
B.aRC=new A.E(0.42,0.34,0.12)
B.fD_=new A.E(1.7,0.08,1.2)
B.fD0=new A.E(0,0,0.38)
B.fD2=new A.E(5.2,3.9,-7.76)
B.fD4=new A.E(2.6,0.45,0.5)
B.fD5=new A.E(0.07,0.3,0.03)
B.fD7=new A.E(41.5,11,12)
B.fD9=new A.E(20,1.4,8)
B.fDa=new A.E(0,-0.2,0.19)
B.fDc=new A.E(1.2,49,36)
B.fDd=new A.E(0,9.3,0)
B.aRD=new A.E(1.4,3,1.6)
B.fDf=new A.E(0,40,0.95)
B.fDg=new A.E(11,3,0.5)
B.fDi=new A.E(0,-1.9,-1.2)
B.fDj=new A.E(-3.2,1.15,-7.78)
B.fDk=new A.E(0,-3.4,1.2)
B.fDl=new A.E(64,10,0.2)
B.fDm=new A.E(0,-1.78,0.53)
B.fDn=new A.E(3,0.2,3)
B.aRE=new A.E(-6.5,7.4,-3)
B.fDo=new A.E(0,76,1.1)
B.fDp=new A.E(-4.6,-2,1.2)
B.fDr=new A.E(0,40,1.4)
B.fDs=new A.E(-3,36,10.6)
B.fDt=new A.E(0,14.5,-1.5)
B.fDu=new A.E(0,0.2,0)
B.fDw=new A.E(160,1.2,120)
B.fDx=new A.E(7,40,2.4)
B.fDy=new A.E(30,26,0.6)
B.fDz=new A.E(3.4,3.25,-7.85)
B.fDA=new A.E(1.12,0.5,0.62)
B.fDB=new A.E(72.8,0,55)
B.fDC=new A.E(0.5,62,30)
B.fDD=new A.E(2.2,1.1,6.4)
B.fDE=new A.E(3,1.55,-7.1)
B.fDF=new A.E(0.4,3,3)
B.aRH=new A.E(0,-0.1,0.1)
B.fDG=new A.E(0,0,0.04)
B.fDH=new A.E(0,14,-19.3)
B.fDI=new A.E(2.4,11.6,-3.6)
B.fDJ=new A.E(4,11,3.5)
B.fDL=new A.E(5,8.6,-2.25)
B.fDM=new A.E(0,-1.78,0.3)
B.fDN=new A.E(2.2,2.2,1.8)
B.fDO=new A.E(0,1.9,-1.2)
B.fDP=new A.E(0,56,2.1)
B.fDQ=new A.E(0.26,0.04,0.02)
B.fDR=new A.E(-2.4,11.6,-3.6)
B.fDS=new A.E(11.25,0,-2.25)
B.fDT=new A.E(1,-1.8,2.4)
B.fDU=new A.E(-11.8,4,0)
B.fDV=new A.E(1.2,4,7)
B.fDW=new A.E(11.2,4.7,-6)
B.fDX=new A.E(24,8,0.05)
B.fDZ=new A.E(0.12,0,0)
B.fE_=new A.E(1.1,1.1,0.03)
B.fE0=new A.E(0,0.62,19.2)
B.fE1=new A.E(0,5,1.1)
B.fE2=new A.E(3.4,3.55,-7.85)
B.fE4=new A.E(71.6,-22,62)
B.fE6=new A.E(1,1,0.62)
B.aRI=new A.E(1.5,18,3.5)
B.fE8=new A.E(3.5,3.1,-7.15)
B.fE9=new A.E(0,1.5,-0.9)
B.fEa=new A.E(-0.28,0.55,-0.8)
B.fEb=new A.E(0,-0.2,0.24000000000000002)
B.fEd=new A.E(0,-3.3,4)
B.fEe=new A.E(1,-0.2,0.14)
B.aRJ=new A.E(84,3,0.5)
B.fEf=new A.E(-1.9,0,-2.25)
B.fEg=new A.E(0,-0.9,1.1)
B.fEh=new A.E(8.2,1.05,-6.7)
B.fEi=new A.E(0,9.6,11.6)
B.fEl=new A.E(0.07,0.4,0.03)
B.fEm=new A.E(2,3.8,0.08)
B.fEn=new A.E(31,83,0.9)
B.fEo=new A.E(64,40,-3.2)
B.fEp=new A.E(0.95,0.62,2.2)
B.aRK=new A.E(1.4,3,112)
B.fEq=new A.E(0,46.6,0.8)
B.fEs=new A.E(0,0,-8.8)
B.fEt=new A.E(0,0.7,-1)
B.fEw=new A.E(-11.9,0,8)
B.fEx=new A.E(7,0,1.5)
B.fEy=new A.E(-8.4,0.7,-6.4)
B.fEz=new A.E(-3.2,1.45,-7.78)
B.fEA=new A.E(0,41,0.45)
B.fEB=new A.E(-6.575,0,-0.25)
B.fED=new A.E(0,14.6,-1.5)
B.aRM=new A.E(0,0,-2.3)
B.a7R=new A.E(-13,12.5,0)
B.fEF=new A.E(0,0,0.62)
B.fEG=new A.E(0.2,-0.3,-0.4)
B.aRN=new A.E(10.85,18,0.5)
B.fEH=new A.E(0.6,70,0.6)
B.fEI=new A.E(1.4,1.3,0.02)
B.fEJ=new A.E(30,1.4,0.4)
B.fEK=new A.E(6.3,1.5,-7.2)
B.fEL=new A.E(0,5,11.2)
B.aRO=new A.E(0,0.62,2.85)
B.fEM=new A.E(37.5,23,0)
B.aRP=new A.E(0.05,8,16)
B.fEN=new A.E(0,-1.2,5)
B.fEP=new A.E(0.2,-2,2.6)
B.fES=new A.E(11.2,2.4,-5.18)
B.fEU=new A.E(-1,-0.2,0.14)
B.fEV=new A.E(1.2,1.2,0.3)
B.aRR=new A.E(2,0.08,2.4)
B.fEX=new A.E(9.5,13.5,1.4)
B.fEY=new A.E(2.2,18,2.2)
B.fEZ=new A.E(22,0.2,0.8)
B.fF_=new A.E(-0.32,0,0.5)
B.fF1=new A.E(1,0.8,0.95)
B.fF2=new A.E(0.8,0.55,0.05)
B.fF3=new A.E(0.14,0.35,17)
B.fF4=new A.E(1.4,2.4,0.3)
B.fF5=new A.E(0,11,8.2)
B.fF6=new A.E(0,24,-0.6)
B.fF7=new A.E(40,1.6,14)
B.fFa=new A.E(0,11.5,19.3)
B.fFb=new A.E(0,1.95,0.31)
B.fFc=new A.E(150,1.2,112)
B.aRS=new A.E(0.75,4.5,0.1)
B.fFe=new A.E(0.12,0,0.05)
B.fFf=new A.E(-120.1,124,-30)
B.fFh=new A.E(9,1.2,9)
B.fFi=new A.E(0,-0.5,0)
B.fFl=new A.E(-2.4,14,8)
B.fFm=new A.E(5.5,8.5,0.5)
B.aRT=new A.E(0.05,8,9.6)
B.fFo=new A.E(-120.1,100,0)
B.fFp=new A.E(1.5,94,3.5)
B.fFq=new A.E(0,8.2,0)
B.fFs=new A.E(4,94,0.4)
B.aRU=new A.E(1.4,8,1)
B.fFt=new A.E(3.7,1.2,-7.1)
B.fFu=new A.E(8.2,0.05,-6.7)
B.fFv=new A.E(0,-0.3,0)
B.fFw=new A.E(6.575,0,-0.25)
B.aRV=new A.E(0,1.8,0)
B.fFx=new A.E(3,3.21,-7.2)
B.fFy=new A.E(9,5,0.6)
B.fFA=new A.E(9.8,5,-7.75)
B.fFB=new A.E(1.5,3.5,112)
B.fFC=new A.E(22,7,34.4)
B.fFD=new A.E(3,1.85,-7.1)
B.fFH=new A.E(16,0.4,16)
B.a7T=new A.E(13,12.5,0)
B.fFJ=new A.E(0.34,0.66,0.9)
B.fFL=new A.E(0.9,1.08,0.98)
B.fFM=new A.E(12,0.4,6)
B.fFN=new A.E(-6.5,7.9,-3)
B.fFO=new A.E(0,13.6,-1.5)
B.fFP=new A.E(1.5,1.5,0.05)
B.fFQ=new A.E(-6.5,5,-3)
B.fFR=new A.E(58.4,1.6,50)
B.fFS=new A.E(16,22,0.6)
B.fFT=new A.E(0.02,0.28,0.05)
B.fFU=new A.E(0,0.7,1)
B.fFV=new A.E(0,9.5,-7)
B.aRX=new A.E(13,8.6,9.5)
B.fFW=new A.E(-3.6,4,-7.76)
B.fFX=new A.E(0.82,0.9,0.05)
B.fFY=new A.E(0,-5.5,-0.25)
B.fFZ=new A.E(0,11,21.2)
B.fG2=new A.E(0,0.6,0)
B.fG4=new A.E(1.9,0,0)
B.fG5=new A.E(0.45,0.72,0.06)
B.fG7=new A.E(14,0.4,7)
B.fG8=new A.E(64,24,-3.2)
B.aRY=new A.E(40,0.12,1.2)
B.fG9=new A.E(0,9.2,0)
B.fGa=new A.E(0,0.03,0)
B.fGb=new A.E(-10,22,0)
B.fGc=new A.E(-120,0,-30)
B.fGd=new A.E(-13,15,2)
B.fGe=new A.E(-14,17,4)
B.fGf=new A.E(-14,20,-28)
B.fGg=new A.E(-18,6,0)
B.we=new A.E(-1,0,0)
B.fGh=new A.E(-1,0,-8)
B.fGi=new A.E(-20,4,26)
B.fGj=new A.E(-20,92,26)
B.fGk=new A.E(-22,14,0)
B.fGl=new A.E(-24,38,0)
B.fGn=new A.E(-37,16,0)
B.fGo=new A.E(-42,-34,96)
B.fGp=new A.E(0,-0.6,22)
B.fGq=new A.E(-4,20,0)
B.aRZ=new A.E(-4,20,8)
B.fGs=new A.E(-72,6,55)
B.fGt=new A.E(-8,42,-5)
B.fGu=new A.E(-8,-28,104)
B.fGv=new A.E(-8,-39,96)
B.fGw=new A.E(0,0.35,0.78)
B.fGx=new A.E(-11.9,0,-8)
B.fGy=new A.E(38,1.4,12)
B.fGz=new A.E(25,0.5,66)
B.fGA=new A.E(-8.4,1.9,-7.2)
B.fGB=new A.E(1.6,8,5)
B.fGC=new A.E(0.8,1.6,1.4)
B.fGD=new A.E(0.85,1.15,0.9)
B.fGF=new A.E(25,6,0.2)
B.aS_=new A.E(1.25,1,0.1)
B.fGG=new A.E(11.2,0,-6)
B.fGH=new A.E(0.4,7,9)
B.fGI=new A.E(1.2,1.1,0.8)
B.fGK=new A.E(150,49,1.2)
B.fGL=new A.E(41.5,11,-12)
B.fGM=new A.E(62,0.2,42)
B.fGN=new A.E(4.6,1.5,-3.6)
B.fGO=new A.E(0,-0.7,0.8)
B.fGP=new A.E(8.9,1.9,0.9)
B.fGQ=new A.E(0,-1.55,-0.6)
B.fGR=new A.E(1.78,4.25,0.08)
B.fGS=new A.E(27,0.6,19)
B.fGT=new A.E(0,5.5,-0.25)
B.fGU=new A.E(28,2.5,26)
B.fGV=new A.E(2,0.2,6)
B.aS0=new A.E(0,0.7,0)
B.fGW=new A.E(-1.2,-1.6,2.2)
B.fGX=new A.E(11,25,0.3)
B.aS1=new A.E(-12,14,19.4)
B.aS2=new A.E(13,8.6,-9.5)
B.aS3=new A.E(0.05,0.12,0.03)
B.aS4=new A.E(8.2,0.95,-6.7)
B.fGY=new A.E(40,1.2,22)
B.fGZ=new A.E(0.7,1.5,-7.2)
B.fH_=new A.E(0,15.3,-3.6)
B.fH0=new A.E(62,2.4,8)
B.fH1=new A.E(-1.6,11,6)
B.fH2=new A.E(0.1,0,0)
B.fH3=new A.E(0.32,0,0.5)
B.fH4=new A.E(1.6,11,6)
B.fH5=new A.E(1.1,0.8,0.6)
B.fH7=new A.E(-0.9,0,4.4)
B.fH8=new A.E(-6.5,7.2,-3)
B.fHa=new A.E(6.2,0.18,2.1)
B.fHb=new A.E(7.1,18,-3)
B.fHd=new A.E(36,1.6,12)
B.fHe=new A.E(15.5,2.6,0)
B.fHg=new A.E(-8,-47.8,70)
B.fHh=new A.E(14,1.5,3.5)
B.aS5=new A.E(17,24,0.3)
B.fHi=new A.E(5.2,3.9,-7.82)
B.fHj=new A.E(0,0.7,2.4)
B.aS6=new A.E(0,0.3,0)
B.aS7=new A.E(2.3,7,0.5)
B.aS8=new A.E(-13,8.6,9.5)
B.fHn=new A.E(6.5,6,14)
B.fHo=new A.E(0,-1.99,0.14)
B.fHp=new A.E(0.4,36,34)
B.fHr=new A.E(4.6,-2,1.2)
B.fHs=new A.E(0,14,19.3)
B.aS9=new A.E(0,0,-2.4)
B.fHt=new A.E(0,-1.78,0.52)
B.fHu=new A.E(0.12,0.1,0.03)
B.fHv=new A.E(9.8,5,-7.58)
B.fHw=new A.E(14,1.5,5)
B.aSa=new A.E(0.5,1.4,2)
B.fHx=new A.E(3.5,0.15,-7.2)
B.aSb=new A.E(64,2,1.2)
B.fHy=new A.E(1.2,26.4,20)
B.fHz=new A.E(-3.6,4,-7.82)
B.fHA=new A.E(0.3,2,36)
B.fHC=new A.E(24,0.8,6.5)
B.fHE=new A.E(22,0.5,5)
B.fHF=new A.E(9,10,0.6)
B.fHG=new A.E(0,22,2.1)
B.fHJ=new A.E(0,56,0.5)
B.fHK=new A.E(150,1.2,70)
B.fHL=new A.E(2.1,0.4,0.5)
B.fHM=new A.E(-19.5,-1,-1.5)
B.fHN=new A.E(80,0.5,60)
B.fHO=new A.E(6.85,4,-3.2)
B.aSd=new A.E(0.12,3,1.9)
B.fHP=new A.E(0.06,0.62,0.8)
B.fHQ=new A.E(0,18.5,0)
B.fHS=new A.E(9.55,5.7,-7.5)
B.fHU=new A.E(0.8,2.4,0.3)
B.aSe=new A.E(0,0.7,2)
B.fHV=new A.E(3.5,26,15)
B.fHW=new A.E(0.8,1.1,1.2)
B.fHX=new A.E(2.4,14,8)
B.fHY=new A.E(120.1,100,-60)
B.fHZ=new A.E(0,47.25,-2.25)
B.fI_=new A.E(0.5,0.5,0.04)
B.fI0=new A.E(12.5,39,0.6)
B.fI1=new A.E(0,3,0.9)
B.fI2=new A.E(3,36,10.6)
B.fI3=new A.E(25,10,0.2)
B.fI5=new A.E(0.14,8,0.3)
B.fI6=new A.E(1.9,0.05,1.35)
B.fI9=new A.E(0.6,0.12,0.03)
B.fIa=new A.E(-10.7,1.2,-6.4)
B.fIb=new A.E(-71.2,46.6,55)
B.fIc=new A.E(5,4.5,3)
B.fId=new A.E(0,3.7,2.6)
B.fIe=new A.E(40,0.6,40)
B.fIM=new A.BO("noGround","It works, but there is no ground wire. Without a ground nothing protects you if an appliance fails.",!0,!1,!1)
B.fIN=new A.BO("short","A hot wire touched the ground. That is a short circuit: huge current, sparks and fire. The breaker slams off.",!1,!0,!0)
B.fIO=new A.BO("reversed","Hot and neutral are swapped (reversed polarity). Things still run, but the metal part of a lamp or appliance is live. That can shock someone. Black goes on brass, white on silver.",!0,!1,!1)
B.fIP=new A.BO("dead","The hot wire is not connected to the right place, so nothing gets power. The device is dead.",!1,!1,!1)
B.fIQ=new A.BO("ok","Wired correctly. Hot, neutral and ground are all in the right place.",!0,!1,!1)
B.fIR=new A.BO("bonded","The neutral and the ground were joined. A GFCI or the breaker may trip for no reason, and current can flow where it should not.",!0,!0,!1)
B.fIS=new A.BO("openNeutral","The neutral wire is not connected. Nothing runs, but the hot wire is still connected, so the slots can still be live. That is dangerous.",!1,!1,!1)
B.fIT=new A.BO("dead","The wires are on the taped LOAD screws, so no power reaches the outlet. Power comes in on LINE.",!1,!1,!1)
B.fIU=new A.BO("short","The hot and the neutral were joined together. That is a short circuit: a bang, sparks and a tripped breaker.",!1,!0,!0)
B.esP=new C.y(-20,46)
B.fLu=new A.Jl(B.esP,0,2.4,"Having the drink",!0,!1,!1,"")
B.ecM=new C.y(34,62)
B.fLv=new A.Jl(B.ecM,3.141592653589793,2.2,"Picking up the remote",!1,!0,!1,"")
B.fLD=new A.azp(null)})();(function staticFields(){$.Td=0
$.fNe=C.T(x.N,C.ax("LF"))
$.fNd=C.T(x.N,C.ax("ay<LF?>"))
$.fMx=null
$.Hf=null
$.bB2="xbot"})();(function lazyInitializers(){var w=a.lazyFinal
w($,"idx","hnk",()=>C.a([A.aSD("Wire a standard 120 volt receptacle: black to brass, white to silver, bare copper to green.",B.PV,B.dcP,"outlet",B.cL0,"Wall outlet",new A.foO()),A.aSD("A single-pole switch breaks the hot wire to the light: two black wires go on the two brass screws.",B.cYH,B.cLC,"switch",B.cJB,"Light switch",new A.foP()),A.aSD("A GFCI protects you near water. Power comes in on LINE. The LOAD screws (covered with tape) feed other outlets.",B.PV,B.cSQ,"gfci",B.d0l,"GFCI outlet",new A.foQ()),A.aSD("Join the house wires to the fixture wires with wire nuts: black to black, white to white, ground to ground.",B.PV,B.cJJ,"light",B.dbV,"Ceiling light",new A.foR()),A.aSD("A fan hangs from a strong fan-rated box. Join black, white and ground with wire nuts, then fasten the canopy.",B.PV,B.cJK,"fan",B.cQy,"Ceiling fan",new A.foS())],C.ax("O<a3D>")))
w($,"idI","Gl",()=>{var v,u=C.a([],x.n)
for(v=0;v<10;++v)u.push(-72+16*v)
return u})})()};
(a=>{a["tpqvIgWmIszVe1vrAVxKJSP2fX4="]=a.current})($__dart_deferred_initializers__);