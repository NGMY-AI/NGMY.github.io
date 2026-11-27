((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var A,B,C={
hzR(d,e,f){var x=new C.c6f(f,new Int32Array(256))
x.cbe(e)
x.cP1(d)
return x},
c6f:function c6f(d,e){var _=this
_.a=$
_.b=d
_.c=16
_.d=3
_.f=_.e=$
_.r=null
_.Q=_.z=_.y=_.x=_.w=$
_.as=e
_.ax=_.at=$},
cvg:function cvg(){}},D
A=c[0]
B=c[2]
C=a.updateHolder(c[59],C)
D=c[123]
C.c6f.prototype={
cP1(d){var x=this
x.b_Z(d)
x.aXk()
x.b_r()
x.aUE()},
cbe(d){var x,w,v,u,t,s,r,q,p,o,n=this,m=n.c=Math.max(d,4)
n.f=m-n.d
n.r=m-1
x=B.i.ao(m,8)
n.w=x
n.x=x*256
n.Q=new A.avT(new Uint32Array(1024),256,4)
n.a=new A.CK(new Uint8Array(768),256,3)
n.d=3
n.e=2
x=B.i.aH(m,3)
n.y=new Int32Array(x)
x=y.b
n.z=A.c3(m*3,0,!1,x)
n.at=A.c3(n.c,0,!1,x)
x=n.ax=A.c3(n.c,0,!1,x)
m=n.z
m[0]=0
m[1]=0
m[2]=0
m[3]=255
m[4]=255
m[5]=255
w=n.c
v=1/w
for(u=n.d,t=n.at,s=0;s<u;++s){x[s]=v
t[s]=0}for(r=u*3,q=n.f,s=u;s<w;++s,r=p){p=r+1
o=255*(s-u)/q
m[r]=o
r=p+1
m[p]=o
p=r+1
m[r]=o
x[s]=v
t[s]=0}},
aUE(){var x,w,v,u,t,s
for(x=0;x<this.c;++x){w=this.a
w===$&&A.d()
v=this.Q
v===$&&A.d()
u=v.b
t=2<u?v.c[x*u+2]:0
s=1<u?v.c[x*u+1]:0
v=0<u?v.c[x*u]:0
w.rH(x,Math.abs(t),Math.abs(s),Math.abs(v))}},
b_s(d,e,f){var x,w,v,u=this.as[e],t=u-1,s=this.c,r=this.Q,q=1000,p=-1
for(;;){x=u<s
if(!(x||t>=0))break
if(x){r===$&&A.d()
x=r.b
w=(1<x?r.c[u*x+1]:0)-e
if(w>=q)u=s
else{if(w<0)w=-w
v=(0<x?r.c[u*x]:0)-d
w+=v<0?-v:v
if(w<q){v=(2<x?r.c[u*x+2]:0)-f
w+=v<0?-v:v
if(w<q){p=u
q=w}}++u}}if(t>=0){r===$&&A.d()
x=r.b
w=e-(1<x?r.c[t*x+1]:0)
if(w>=q)t=-1
else{if(w<0)w=-w
v=(0<x?r.c[t*x]:0)-d
w+=v<0?-v:v
if(w<q){v=(2<x?r.c[t*x+2]:0)-f
w+=v<0?-v:v
if(w<q){p=t
q=w}}--t}}}return p},
aXk(){var x,w,v,u,t,s,r,q=this
for(x=0,w=0;x<q.c;++x){for(v=0;v<3;++v,++w){u=q.z
u===$&&A.d()
t=B.o.D(B.i.M(0.5+u[w]),0,255)
u=q.Q
u===$&&A.d()
s=u.b
if(v<s){u=u.c
r=B.o.M(t)
u.$flags&2&&A.ak(u)
u[x*s+v]=r}}u=q.Q
u===$&&A.d()
s=u.b
if(3<s){u=u.c
r=B.o.M(x)
u.$flags&2&&A.ak(u)
u[x*s+3]=r}}},
b_r(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this
for(x=h.c,w=h.Q,v=h.as,u=v.$flags|0,t=0,s=0,r=0;r<x;r=n){w===$&&A.d()
q=w.b
p=1<q
o=p?w.c[r*q+1]:0
for(n=r+1,m=n,l=r;m<x;++m)if((p?w.c[m*q+1]:0)<o){o=p?w.c[m*q+1]:0
l=m}if(r!==l){k=0<q
m=k?w.c[l*q]:0
j=k?w.c[r*q]:0
if(k){i=w.c
j=B.o.M(j)
i.$flags&2&&A.ak(i)
i[l*q]=j}if(k){k=w.c
j=B.o.M(m)
k.$flags&2&&A.ak(k)
k[r*q]=j}m=p?w.c[l*q+1]:0
k=p?w.c[r*q+1]:0
if(p){j=w.c
k=B.o.M(k)
j.$flags&2&&A.ak(j)
j[l*q+1]=k}if(p){p=w.c
k=B.o.M(m)
p.$flags&2&&A.ak(p)
p[r*q+1]=k}p=2<q
m=p?w.c[l*q+2]:0
k=p?w.c[r*q+2]:0
if(p){j=w.c
k=B.o.M(k)
j.$flags&2&&A.ak(j)
j[l*q+2]=k}if(p){p=w.c
k=B.o.M(m)
p.$flags&2&&A.ak(p)
p[r*q+2]=k}p=3<q
m=p?w.c[l*q+3]:0
k=p?w.c[r*q+3]:0
if(p){j=w.c
k=B.o.M(k)
j.$flags&2&&A.ak(j)
j[l*q+3]=k}if(p){p=w.c
k=B.o.M(m)
p.$flags&2&&A.ak(p)
p[r*q+3]=k}}if(o!==t){u&2&&A.ak(v)
v[t]=s+r>>>1
for(m=t+1;m<o;++m)v[m]=r
s=r
t=o}}x=h.r
x.toString
w=B.o.aH(s+x,1)
u&2&&A.ak(v)
v[t]=w
for(n=t+1;n<256;++n)v[n]=x},
bed(d,e){var x,w,v,u
for(x=this.y,w=d*d,v=0;v<d;++v){x===$&&A.d()
u=B.i.M(e*((w-v*v)*256/w))
x.$flags&2&&A.ak(x)
x[v]=u}},
b_Z(a3){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=this,a2=a1.x
a2===$&&A.d()
x=a1.b
w=30+B.o.ao(x-1,3)
v=a3.gc6(0)*a3.gb4(0)
u=B.o.ea(v,x)
t=Math.max(B.o.ao(u,100),1)
if(t===0)t=1
s=B.o.aH(a2,8)
if(s<=1)s=0
a1.bed(s,1024)
if(v<1509)r=a1.b=1
else if(B.o.F(v,499)!==0)r=499
else if(B.o.F(v,491)!==0)r=491
else r=B.o.F(v,487)!==0?487:503
q=a3.gc6(0)
p=a3.gb4(0)
for(o=a2,n=1024,m=0,l=0,k=0,j=0;j<u;){a2=a3.a
i=a2==null?null:a2.dN(l,k,null)
if(i==null)i=new A.i8()
h=i.gb7(i)
g=i.gba()
f=i.gbb(i)
if(j===0){a2=a1.z
a2===$&&A.d()
x=a1.e
x===$&&A.d()
x*=3
a2[x]=f
a2[x+1]=g
a2[x+2]=h}e=a1.cFI(f,g,h)
if(e<0)e=a1.bOF(f,g,h)
if(e>=a1.d){d=n/1024
i=e*3
a2=a1.z
a2===$&&A.d()
x=a2[i]
a2[i]=x-d*(x-f)
x=i+1
a0=a2[x]
a2[x]=a0-d*(a0-g)
a0=i+2
x=a2[a0]
a2[a0]=x-d*(x-h)
if(s>0)a1.bHb(d,s,e,f,g,h)}m+=r
l+=r
while(l>q){l-=q;++k}while(m>=v){m-=v
k-=p}++j
if(B.o.F(j,t)===0){n-=B.o.ea(n,w)
o-=B.o.ao(o,30)
s=B.o.aH(o,8)
if(s<=1)s=0
a1.bed(s,n)}}},
bHb(d,e,f,g,h,i){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=f-e,j=l.d-1
if(k<j)k=j
x=f+e
w=l.c
if(x>w)x=w
v=f+1
u=f-1
t=l.y
s=l.z
r=1
for(;;){q=v<x
if(!(q||u>k))break
t===$&&A.d()
p=r+1
o=t[r]
if(q){n=v*3
s===$&&A.d()
q=s[n]
s[n]=q-o*(q-g)/262144
q=n+1
m=s[q]
s[q]=m-o*(m-h)/262144
m=n+2
q=s[m]
s[m]=q-o*(q-i)/262144;++v}if(u>k){n=u*3
s===$&&A.d()
q=s[n]
s[n]=q-o*(q-g)/262144
q=n+1
m=s[q]
s[q]=m-o*(m-h)/262144
m=n+2
q=s[m]
s[m]=q-o*(q-i)/262144;--u}r=p}},
bOF(d,e,f){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=1e30
for(x=h.d,w=x*3,v=h.c,u=h.ax,t=h.at,s=h.z,r=g,q=r,p=-1,o=-1;x<v;++x,w=n){s===$&&A.d()
n=w+1
m=s[w]-d
if(m<0)m=-m
w=n+1
l=s[n]-e
if(l<0)l=-l
n=w+1
k=s[w]-f
if(k<0)k=-k
m=m+l+k
if(m<q){p=x
q=m}t===$&&A.d()
j=m-t[x]
if(j<r){o=x
r=j}u===$&&A.d()
i=u[x]
i-=0.0009765625*i
u[x]=i
t[x]=t[x]+i}u===$&&A.d()
u[p]=u[p]+0.0009765625
t===$&&A.d()
t[p]=t[p]-1
return o},
cFI(d,e,f){var x,w,v,u,t,s
for(x=this.d,w=this.z,v=0,u=0;v<x;++v){w===$&&A.d()
t=u+1
s=!1
if(w[u]===d){u=t+1
if(w[t]===e){t=u+1
s=w[u]===f
u=t}}else u=t
if(s)return v}return-1}}
C.cvg.prototype={
brO(d){var x,w,v,u,t,s,r=d.gc6(0),q=d.gb4(0),p=this.a
p===$&&A.d()
x=A.h6(null,null,B.c2,0,B.e6,q,null,0,1,p,B.c2,r,!1)
r=x.a
w=r.gae(r)
w.C()
x.z=d.z
x.w=d.w
x.y=d.y
for(r=d.a,r=r.gae(r);r.C();){v=r.gP(r)
u=w.gP(w)
t=B.i.M(v.gb7(v))
s=B.i.M(v.gba())
u.n(0,0,this.b_s(B.i.M(v.gbb(v)),s,t))
w.C()}return x}}
var z=a.updateTypes([]);(function inheritance(){var x=a.inherit
x(C.cvg,A.aG)
x(C.c6f,C.cvg)})()
var y={b:A.as("H")};(function constants(){D.CT=new A.u(1,0.23137254901960785,0.027450980392156862,0.39215686274509803,B.q)})()};
(a=>{a["5BN0EPkARZGMDQ48UN3i0Yl1LmA="]=a.current})($__dart_deferred_initializers__);