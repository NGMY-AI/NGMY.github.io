((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var A,B,C={
hxo(d,e,f){var x=new C.c5D(f,new Int32Array(256))
x.cal(e)
x.cNK(d)
return x},
c5D:function c5D(d,e){var _=this
_.a=$
_.b=d
_.c=16
_.d=3
_.f=_.e=$
_.r=null
_.Q=_.z=_.y=_.x=_.w=$
_.as=e
_.ax=_.at=$},
cux:function cux(){}},D
A=c[0]
B=c[2]
C=a.updateHolder(c[67],C)
D=c[148]
C.c5D.prototype={
cNK(d){var x=this
x.b_p(d)
x.aWL()
x.aZS()
x.aU4()},
cal(d){var x,w,v,u,t,s,r,q,p,o,n=this,m=n.c=Math.max(d,4)
n.f=m-n.d
n.r=m-1
x=B.i.ao(m,8)
n.w=x
n.x=x*256
n.Q=new A.avw(new Uint32Array(1024),256,4)
n.a=new A.CM(new Uint8Array(768),256,3)
n.d=3
n.e=2
x=B.i.aH(m,3)
n.y=new Int32Array(x)
x=y.b
n.z=A.c2(m*3,0,!1,x)
n.at=A.c2(n.c,0,!1,x)
x=n.ax=A.c2(n.c,0,!1,x)
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
aU4(){var x,w,v,u,t,s
for(x=0;x<this.c;++x){w=this.a
w===$&&A.d()
v=this.Q
v===$&&A.d()
u=v.b
t=2<u?v.c[x*u+2]:0
s=1<u?v.c[x*u+1]:0
v=0<u?v.c[x*u]:0
w.rC(x,Math.abs(t),Math.abs(s),Math.abs(v))}},
aZT(d,e,f){var x,w,v,u=this.as[e],t=u-1,s=this.c,r=this.Q,q=1000,p=-1
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
aWL(){var x,w,v,u,t,s,r,q=this
for(x=0,w=0;x<q.c;++x){for(v=0;v<3;++v,++w){u=q.z
u===$&&A.d()
t=B.o.D(B.i.L(0.5+u[w]),0,255)
u=q.Q
u===$&&A.d()
s=u.b
if(v<s){u=u.c
r=B.o.L(t)
u.$flags&2&&A.ak(u)
u[x*s+v]=r}}u=q.Q
u===$&&A.d()
s=u.b
if(3<s){u=u.c
r=B.o.L(x)
u.$flags&2&&A.ak(u)
u[x*s+3]=r}}},
aZS(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this
for(x=h.c,w=h.Q,v=h.as,u=v.$flags|0,t=0,s=0,r=0;r<x;r=n){w===$&&A.d()
q=w.b
p=1<q
o=p?w.c[r*q+1]:0
for(n=r+1,m=n,l=r;m<x;++m)if((p?w.c[m*q+1]:0)<o){o=p?w.c[m*q+1]:0
l=m}if(r!==l){k=0<q
m=k?w.c[l*q]:0
j=k?w.c[r*q]:0
if(k){i=w.c
j=B.o.L(j)
i.$flags&2&&A.ak(i)
i[l*q]=j}if(k){k=w.c
j=B.o.L(m)
k.$flags&2&&A.ak(k)
k[r*q]=j}m=p?w.c[l*q+1]:0
k=p?w.c[r*q+1]:0
if(p){j=w.c
k=B.o.L(k)
j.$flags&2&&A.ak(j)
j[l*q+1]=k}if(p){p=w.c
k=B.o.L(m)
p.$flags&2&&A.ak(p)
p[r*q+1]=k}p=2<q
m=p?w.c[l*q+2]:0
k=p?w.c[r*q+2]:0
if(p){j=w.c
k=B.o.L(k)
j.$flags&2&&A.ak(j)
j[l*q+2]=k}if(p){p=w.c
k=B.o.L(m)
p.$flags&2&&A.ak(p)
p[r*q+2]=k}p=3<q
m=p?w.c[l*q+3]:0
k=p?w.c[r*q+3]:0
if(p){j=w.c
k=B.o.L(k)
j.$flags&2&&A.ak(j)
j[l*q+3]=k}if(p){p=w.c
k=B.o.L(m)
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
bdy(d,e){var x,w,v,u
for(x=this.y,w=d*d,v=0;v<d;++v){x===$&&A.d()
u=B.i.L(e*((w-v*v)*256/w))
x.$flags&2&&A.ak(x)
x[v]=u}},
b_p(a3){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=this,a2=a1.x
a2===$&&A.d()
x=a1.b
w=30+B.o.ao(x-1,3)
v=a3.gc3(0)*a3.gb8(0)
u=B.o.ea(v,x)
t=Math.max(B.o.ao(u,100),1)
if(t===0)t=1
s=B.o.aH(a2,8)
if(s<=1)s=0
a1.bdy(s,1024)
if(v<1509)r=a1.b=1
else if(B.o.F(v,499)!==0)r=499
else if(B.o.F(v,491)!==0)r=491
else r=B.o.F(v,487)!==0?487:503
q=a3.gc3(0)
p=a3.gb8(0)
for(o=a2,n=1024,m=0,l=0,k=0,j=0;j<u;){a2=a3.a
i=a2==null?null:a2.dM(l,k,null)
if(i==null)i=new A.ia()
h=i.gb6(i)
g=i.gba()
f=i.gbb(i)
if(j===0){a2=a1.z
a2===$&&A.d()
x=a1.e
x===$&&A.d()
x*=3
a2[x]=f
a2[x+1]=g
a2[x+2]=h}e=a1.cEt(f,g,h)
if(e<0)e=a1.bNT(f,g,h)
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
if(s>0)a1.bGq(d,s,e,f,g,h)}m+=r
l+=r
while(l>q){l-=q;++k}while(m>=v){m-=v
k-=p}++j
if(B.o.F(j,t)===0){n-=B.o.ea(n,w)
o-=B.o.ao(o,30)
s=B.o.aH(o,8)
if(s<=1)s=0
a1.bdy(s,n)}}},
bGq(d,e,f,g,h,i){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=f-e,j=l.d-1
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
bNT(d,e,f){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=1e30
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
cEt(d,e,f){var x,w,v,u,t,s
for(x=this.d,w=this.z,v=0,u=0;v<x;++v){w===$&&A.d()
t=u+1
s=!1
if(w[u]===d){u=t+1
if(w[t]===e){t=u+1
s=w[u]===f
u=t}}else u=t
if(s)return v}return-1}}
C.cux.prototype={
br4(d){var x,w,v,u,t,s,r=d.gc3(0),q=d.gb8(0),p=this.a
p===$&&A.d()
x=A.h4(null,null,B.c1,0,B.e4,q,null,0,1,p,B.c1,r,!1)
r=x.a
w=r.gae(r)
w.C()
x.z=d.z
x.w=d.w
x.y=d.y
for(r=d.a,r=r.gae(r);r.C();){v=r.gP(r)
u=w.gP(w)
t=B.i.L(v.gb6(v))
s=B.i.L(v.gba())
u.n(0,0,this.aZT(B.i.L(v.gbb(v)),s,t))
w.C()}return x}}
var z=a.updateTypes([]);(function inheritance(){var x=a.inherit
x(C.cux,A.aE)
x(C.c5D,C.cux)})()
var y={b:A.ar("H")};(function constants(){D.CM=new A.u(1,0.23137254901960785,0.027450980392156862,0.39215686274509803,B.q)})()};
(a=>{a["105y7pLRPO4K1GeuhGac0smyDS4="]=a.current})($__dart_deferred_initializers__);