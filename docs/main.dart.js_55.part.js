((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,A,E,C={
iR(a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=null,a6=y.b,a7=B.a([b5,b7,b6,b8],a6)
if(!C.ipP(a7,B.a([0,0,a8.gc3(0)-1,a8.gb8(0)-1],a6)))return a8
b5=a7[0]
b7=a7[1]
b6=a7[2]
b8=a7[3]
x=b6-b5
w=b8-b7
v=A.i.be(b4/2)
a6=x===0
if(a6&&w===0){if(b4===1)B.j9(a8,b5,b7,b1,a5,b0,!1,b2,b3)
else B.l4(a8,!1,b0,b1,b2,b3,v,b5,b7)
return a8}if(a6){if(w<0)for(a6=b5-v,u=b4<=1,t=b8;t<=b7;++t)if(u)B.j9(a8,b5,t,b1,a5,b0,!1,b2,b3)
else for(s=0;s<b4;++s)B.j9(a8,a6+s,t,b1,a5,b0,!1,b2,b3)
else for(a6=b5-v,u=b4<=1,t=b7;t<=b8;++t)if(u)B.j9(a8,b5,t,b1,a5,b0,!1,b2,b3)
else for(s=0;s<b4;++s)B.j9(a8,a6+s,t,b1,a5,b0,!1,b2,b3)
return a8}else if(w===0){if(x<0)for(a6=b7-v,u=b4<=1,r=b6;r<=b5;++r)if(u)B.j9(a8,r,b7,b1,a5,b0,!1,b2,b3)
else for(s=0;s<b4;++s)B.j9(a8,r,a6+s,b1,a5,b0,!1,b2,b3)
else for(a6=b7-v,u=b4<=1,r=b5;r<=b6;++r)if(u)B.j9(a8,r,b7,b1,a5,b0,!1,b2,b3)
else for(s=0;s<b4;++s)B.j9(a8,r,a6+s,b1,a5,b0,!1,b2,b3)
return a8}q=new C.fNe()
if(!a9){p=Math.abs(x)
o=Math.abs(w)
if(o<=p){n=Math.cos(Math.atan2(o,p))
m=n!==0?A.i.ek(b4,n):1
if(m===0)m=1
a6=2*o
l=a6-p
k=2*(o-p)
if(b5>b6){j=b5
t=b8
r=b6
i=-1}else{j=b6
t=b7
r=b5
i=1}u=m/2
h=A.i.M(t-u)
for(g=h+m,f=h;f<g;++f)B.j9(a8,r,f,b1,a5,b0,!1,b2,b3)
if(w*i>0)while(r<j){++r
if(l<0)l+=a6
else{++t
l+=k}h=A.i.M(t-u)
for(g=h+m,f=h;f<g;++f)B.j9(a8,r,f,b1,a5,b0,!1,b2,b3)}else while(r<j){++r
if(l<0)l+=a6
else{--t
l+=k}h=A.i.M(t-u)
for(g=h+m,f=h;f<g;++f)B.j9(a8,r,f,b1,a5,b0,!1,b2,b3)}}else{e=Math.sin(Math.atan2(o,p))
m=e!==0?A.i.ek(b4,e):1
if(m===0)m=1
a6=2*p
l=a6-o
k=2*(p-o)
if(b7>b8){d=b7
t=b8
r=b6
a0=-1}else{d=b8
t=b7
r=b5
a0=1}u=m/2
h=A.i.M(r-u)
for(g=h+m,f=h;f<g;++f)B.j9(a8,f,t,b1,a5,b0,!1,b2,b3)
if(x*a0>0)while(t<d){++t
if(l<0)l+=a6
else{++r
l+=k}h=A.i.M(r-u)
for(g=h+m,f=h;f<g;++f)B.j9(a8,f,t,b1,a5,b0,!1,b2,b3)}else while(t<d){++t
if(l<0)l+=a6
else{--r
l+=k}h=A.i.M(r-u)
for(g=h+m,f=h;f<g;++f)B.j9(a8,f,t,b1,a5,b0,!1,b2,b3)}}return a8}if(b4===1)return C.igo(a8,b0,b1,b5,b6,b7,b8)
a6=Math.abs(w)
u=Math.abs(x)
a1=a6<u?Math.cos(Math.atan2(w,x)):Math.sin(Math.atan2(w,x))
m=a1!==0?A.i.M(Math.abs(b4/a1)):1
if(m===0)m=1
if(u>a6){if(x<0){x=b5-b6
w=b7-b8
b7=b8
a2=b6
b6=b5
b5=a2}a3=A.o.ek(w*65536,x)
for(r=b5,t=b7,a4=0;r<=b6;++r){h=t-A.o.ap(m,2)
for(a6=h+m,f=h;f<a6;){B.j9(a8,r,f,b1,(A.o.aH(a4,8)&255)/255,b0,!1,b2,b3);++f
B.j9(a8,r,f,b1,(A.i.aH(q.$1(a4),8)&255)/255,b0,!1,b2,b3)}a4+=a3
if(a4>=65536){a4-=65536;++t}else if(a4<0){a4+=65536;--t}}}else{if(w<0){x=b5-b6
w=b7-b8
b5=b6
a2=b8
b8=b7
b7=a2}a3=A.o.ek(x*65536,w)
for(t=b7,r=b5,a4=0;t<=b8;++t){h=r-A.o.ap(m,2)
for(a6=h+m,f=h;f<a6;){B.j9(a8,f,t,b1,(A.o.aH(a4,8)&255)/255,A.cZ,!1,b2,b3);++f
B.j9(a8,f,t,b1,(A.i.aH(q.$1(a4),8)&255)/255,A.cZ,!1,b2,b3)}a4+=a3
if(a4>=65536){a4-=65536;++r}else if(a4<0){a4+=65536;--r}}}return a8},
igo(d,e,f,g,h,i,j){var x,w,v,u,t,s,r,q,p,o,n,m,l=null,k=Math.abs(j-i)>Math.abs(h-g)
if(k){x=j
j=h
h=x
x=i
i=g
g=x}if(g>h){x=j
j=i
i=x
x=h
h=g
g=x}w=h-g
v=w===1?1:(j-i)/w
u=g+0.5
t=A.i.be(u)
s=i+v*(t-g)
r=1-(u-A.i.be(u))
q=A.i.be(s)
u=q+1
if(k){B.j9(d,q,t,f,(1-(s-A.i.be(s)))*r,e,!1,l,A.cJ)
B.j9(d,u,t,f,(s-A.i.be(s))*r,e,!1,l,A.cJ)}else{B.j9(d,t,q,f,(1-(s-A.i.be(s)))*r,e,!1,l,A.cJ)
B.j9(d,t,u,f,(s-A.i.be(s))*r,e,!1,l,A.cJ)}p=s+v
u=h+0.5
o=A.i.be(u)
s=j+v*(o-h)
r=u-A.i.be(u)
n=A.i.be(s)
u=n+1
if(k){B.j9(d,n,o,f,(1-(s-A.i.be(s)))*r,e,!1,l,A.cJ)
B.j9(d,u,o,f,(s-A.i.be(s))*r,e,!1,l,A.cJ)
for(m=t+1,u=o-1;m<=u;++m){B.j9(d,A.i.be(p),m,f,1-(p-A.i.be(p)),e,!1,l,A.cJ)
B.j9(d,A.i.be(p)+1,m,f,p-A.i.be(p),e,!1,l,A.cJ)
p+=v}}else{B.j9(d,o,n,f,(1-(s-A.i.be(s)))*r,e,!1,l,A.cJ)
B.j9(d,o,u,f,(s-A.i.be(s))*r,e,!1,l,A.cJ)
for(m=t+1,u=o-1;m<=u;++m){B.j9(d,m,A.i.be(p),f,1-(p-A.i.be(p)),e,!1,l,A.cJ)
B.j9(d,m,A.i.be(p)+1,f,p-A.i.be(p),e,!1,l,A.cJ)
p+=v}}return d},
fNe:function fNe(){},
b6V:function b6V(d,e){this.a=d
this.b=e},
ct6:function ct6(d,e){var _=this
_.a=null
_.b=d
_.c=0
_.d=e
_.e=$
_.f=0
_.r=!1
_.w=null},
ipP(d,e){var x,w,v,u,t=d[0],s=d[1],r=d[2],q=d[3],p=e[0],o=e[1],n=e[2],m=e[3],l=new C.fMi(p,n,o,m),k=l.$2(t,s),j=l.$2(r,q)
while(x=!1,!0)if((k|j)>>>0===0){x=!0
break}else if((k&j)>>>0!==0)break
else{w=k!==0?k:j
if((w&8)!==0){v=t+A.o.ek((r-t)*(m-s),q-s)
u=m}else if((w&4)!==0){v=t+A.o.ek((r-t)*(o-s),q-s)
u=o}else if((w&2)!==0){u=s+A.o.ek((q-s)*(n-t),r-t)
v=n}else if((w&1)!==0){u=s+A.o.ek((q-s)*(p-t),r-t)
v=p}else{v=null
u=null}if(w===k){v.toString
u.toString
k=l.$2(v,u)
s=u
t=v}else{v.toString
u.toString
j=l.$2(v,u)
q=u
r=v}}d[0]=t
d[1]=s
d[2]=r
d[3]=q
return x},
fMi:function fMi(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fM:function fM(d,e){this.a=d
this.b=e},
Bz(a0,a1,a2){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null,d=a1.gbo(0)
if(d===0)return a0
x=a2.length
if(x===0)return a0
if(x===1){d=a2[0]
return B.j9(a0,A.i.M(d.a),A.i.M(d.b),a1,e,A.cZ,!1,e,A.cJ)}if(x===2){d=a2[0]
w=A.i.M(d.a)
d=A.i.M(d.b)
v=a2[1]
return C.iR(a0,!1,A.cZ,a1,e,A.cJ,1,w,A.i.M(v.a),d,A.i.M(v.b))}for(u=0,t=0,s=0,r=0,q=!0,p=0;p<x;++p){o=a2[p]
d=o.a
w=o.b
if(q){u=A.i.M(d)
t=A.i.M(w)
r=t
s=u
q=!1}else{d=A.i.M(d)
u=Math.min(u,d)
w=A.i.M(w)
t=Math.min(t,w)
s=Math.max(s,d)
r=Math.max(r,w)}}u=Math.max(u,0)
t=Math.max(t,0)
s=Math.min(s,a0.gc3(0)-1)
r=Math.min(r,a0.gb8(0)-1)
for(n=t+0.5,m=u+0.5,l=t;l<=r;++l,++n)for(k=m,j=u;j<=s;++j,++k){for(i=0,h=0;h<x;){g=a2[h];++h
f=a2[h%x]
d=g.b
if(!(d<=n&&f.b>n))w=f.b<=n&&d>n
else w=!0
if(w){w=g.a
if(k<w+(n-d)/(f.b-d)*(f.a-w))++i}}if((i&1)===1)B.j9(a0,j,l,a1,e,A.cZ,!1,e,A.cJ)}return a0},
fNl(d){return new C.ct6(D.eIS,6).cUp(d,!1)},
au_(d,e){var x=0,w=B.j(y.g),v,u,t
var $async$au_=B.e(function(f,g){if(f===1)return B.f(g,w)
for(;;)switch(x){case 0:x=3
return B.b(B.b4S(d,e),$async$au_)
case 3:u=g
x=4
return B.b(B.b4V(d,e),$async$au_)
case 4:t=g
if(u==null){v=t
x=1
break}if(t==null){v=u
x=1
break}v=u.cd(t)?u:t
x=1
break
case 1:return B.h(v,w)}})
return B.i($async$au_,w)}},D
J=c[1]
B=c[0]
A=c[2]
E=c[66]
C=a.updateHolder(c[39],C)
D=c[132]
C.b6V.prototype={
a7(){return"PngFilter."+this.b}}
C.ct6.prototype={
o0(d){var x,w,v,u,t,s,r,q,p=this,o=8192,n=d.a
n=n==null?null:n.gvm()
if(!(n===!0&&d.gdT()!==A.kh))n=d.go4()<8&&!d.gvk()&&d.grm()>1
else n=!0
if(n)d=d.q6(A.c0)
if(p.w==null){n=B.yA(!0,o)
p.w=n
n.ml(B.a([137,80,78,71,13,10,26,10],y.b))
x=B.yA(!0,o)
x.ig(d.gc3(0))
x.ig(d.gb8(0))
x.bK(d.go4())
if(d.gvk())n=3
else if(d.grm()===1)n=0
else if(d.grm()===2)n=4
else n=d.grm()===3?2:6
x.bK(n)
x.bK(0)
x.bK(0)
x.bK(0)
n=p.w
n.toString
p.wU(n,"IHDR",J.ew(A.aI.gaT(x.c),0,x.a))
n=d.c
if(n!=null){x=B.yA(!0,o)
x.ml(new B.dg(n.a))
x.bK(0)
x.bK(0)
x.ml(n.cPD())
n=p.w
n.toString
p.wU(n,"iCCP",J.ew(A.aI.gaT(x.c),0,x.a))}if(d.gvk()){n=p.a
if(n!=null){n=n.a
n===$&&B.d()
p.bem(n)}else{n=d.a
n=n==null?null:n.gf9()
n.toString
p.bem(n)}}if(p.r){x=B.yA(!0,o)
n=p.e
n===$&&B.d()
x.ig(n)
x.ig(p.c)
n=p.w
n.toString
p.wU(n,"acTL",J.ew(A.aI.gaT(x.c),0,x.a))}}w=d.gvk()?1:d.grm()
v=d.gdT()===A.kh?2:1
n=d.gc3(0)
u=d.gb8(0)
t=d.gb8(0)
s=new Uint8Array(n*u*w*v+t)
p.crd(0,d,s)
r=A.Z5.a66(s,p.d)
n=d.d
if(n!=null)for(n=new B.hS(n,n.r,n.e);n.C();){u=n.d
t=d.d.h(0,u)
t.toString
x=new B.b63(!0,new Uint8Array(8192))
x.ml(A.Aj.aK(u))
x.bK(0)
x.ml(A.Aj.aK(t))
u=p.w
u.toString
p.wU(u,"tEXt",J.ew(A.aI.gaT(x.c),0,x.a))}if(p.r){x=B.yA(!0,o)
x.ig(p.f)
x.ig(d.gc3(0))
x.ig(d.gb8(0))
x.ig(0)
x.ig(0)
x.lx(d.y)
x.lx(1000)
x.bK(1)
x.bK(0)
n=p.w
n.toString
p.wU(n,"fcTL",J.ew(A.aI.gaT(x.c),0,x.a));++p.f}if(p.f<=1){n=p.w
n.toString
p.wU(n,"IDAT",r)}else{q=B.yA(!0,o)
q.ig(p.f)
q.ml(r)
n=p.w
n.toString
p.wU(n,"fdAT",J.ew(A.aI.gaT(q.c),0,q.a));++p.f}},
cVd(d){var x,w=this,v=w.w
if(v==null)return null
w.wU(v,"IEND",B.a([],y.b))
w.f=0
v=w.w
x=J.ew(A.aI.gaT(v.c),0,v.a)
w.w=null
return x},
cUp(d,e){var x,w,v,u,t,s=this,r=d.gkH().length
if(r<=1){s.e=1
s.r=!1
s.o0(d)}else{r=d.gkH().length
s.e=r
s.r=r>1
s.c=d.r
if(d.gvk()){x=s.a=E.hvD(d,256,10)
for(r=d.gkH(),w=r.length,v=0;v<r.length;r.length===w||(0,B.I)(r),++v){u=r[v]
if(u!==d){x.b_d(u)
x.aWz()
x.aZG()
x.aTT()}}}for(r=d.gkH(),w=r.length,v=0;v<r.length;r.length===w||(0,B.I)(r),++v){u=r[v]
t=s.a
if(t!=null)s.o0(t.bqS(u))
else s.o0(u)}}r=s.cVd(0)
r.toString
return r},
bem(d){var x,w,v,u=this
if(d.gdT()===A.c0&&d.b===3&&d.a===256){x=u.w
x.toString
u.wU(x,"PLTE",J.ew(d.gaT(d),0,null))}else{x=d.a
w=B.yA(!0,x*3)
for(v=0;v<x;++v){w.bK(A.i.M(d.os(v)))
w.bK(A.i.M(d.or(v)))
w.bK(A.i.M(d.oq(v)))}x=u.w
x.toString
u.wU(x,"PLTE",J.ew(A.aI.gaT(w.c),0,w.a))}if(d.b===4){x=d.a
w=B.yA(!0,x)
for(v=0;v<x;++v)w.bK(A.i.M(d.qC(v)))
x=u.w
x.toString
u.wU(x,"tRNS",J.ew(A.aI.gaT(w.c),0,w.a))}},
wU(d,e,f){d.ig(f.length)
d.ml(new B.dg(e))
d.ml(f)
d.ig(B.Hz(f,B.Hz(new B.dg(e),0)))},
crd(d,e,f){var x,w,v=this,u=e.gvk()?D.eIR:v.b,t=e.gaT(0),s=e.a.gtP(),r=e.gvk()?1:e.grm(),q=A.o.aH(r*e.go4()+7,3),p=e.go4()+7>>>3,o=u.a,n=J.dt(t),m=0,l=0,k=null,j=0
for(;;){x=e.a
x=x==null?null:x.b
if(!(j<(x==null?0:x)))break
w=n.a5_(t,l,s)
l+=s
switch(o){case 1:m=v.bUU(w,p,q,f,m)
break
case 2:m=v.bUV(w,k,p,f,m)
break
case 3:m=v.bUP(w,k,p,q,f,m)
break
case 4:m=v.bUS(w,k,p,q,f,m)
break
default:m=v.bUR(w,p,f,m)
break}++j
k=w}},
b5O(d,e,f,g,h){var x,w,v;--d
for(x=g.$flags|0;d>=0;h=w){w=h+1
v=e[f+d]
x&2&&B.ak(g)
g[h]=v;--d}return h},
bUR(d,e,f,g){var x,w,v=g+1
f.$flags&2&&B.ak(f)
f[g]=0
x=d.length
if(e===1)for(g=v,w=0;w<x;++w,g=v){v=g+1
f[g]=d[w]}else for(g=v,w=0;w<x;w+=e)g=this.b5O(e,d,w,f,g)
return g},
bUU(d,e,f,g,h){var x,w,v,u,t,s,r=h+1
g.$flags&2&&B.ak(g)
g[h]=1
for(h=r,x=0;x<f;x+=e)h=this.b5O(e,d,x,g,h)
w=d.length
for(v=e-1,x=f;x<w;x+=e)for(u=v,t=0;t<e;++t,--u,h=r){r=h+1
s=x+u
g[h]=d[s]-d[s-f]&255}return h},
bUV(d,e,f,g,h){var x,w,v,u,t,s,r,q=h+1
g.$flags&2&&B.ak(g)
g[h]=2
x=d.length
for(w=f-1,v=e!=null,h=q,u=0;u<x;u+=f)for(t=w,s=0;s<f;++s,--t,h=q){r=v?e[u+t]:0
q=h+1
g[h]=d[u+t]-r&255}return h},
bUP(d,e,f,g,h,i){var x,w,v,u,t,s,r,q,p,o=i+1
h.$flags&2&&B.ak(h)
h[i]=3
x=d.length
for(w=f-1,v=e==null,i=o,u=0;u<x;u+=f)for(t=w,s=0;s<f;++s,--t,i=o){r=u+t
q=r<g?0:d[r-g]
p=v?0:e[r]
o=i+1
h[i]=d[r]-(q+p>>>1)}return i},
cmO(d,e,f){var x=d+e-f,w=x>d?x-d:d-x,v=x>e?x-e:e-x,u=x>f?x-f:f-x
if(w<=v&&w<=u)return d
else if(v<=u)return e
return f},
bUS(d,e,f,g,h,i){var x,w,v,u,t,s,r,q,p,o,n,m=i+1
h.$flags&2&&B.ak(h)
h[i]=4
x=d.length
for(w=f-1,v=e==null,i=m,u=0;u<x;u+=f)for(t=w,s=0;s<f;++s,--t,i=m){r=u+t
q=r<g
p=q?0:d[r-g]
o=v?0:e[r]
n=q||v?0:e[r-g]
m=i+1
h[i]=d[r]-this.cmO(p,o,n)&255}return i}}
C.fM.prototype={
aO(d,e){return new C.fM(this.a*e,this.b*e)},
a5(d,e){return new C.fM(this.a+e.a,this.b+e.b)},
A(d,e){if(e==null)return!1
return e instanceof C.fM&&this.a===e.a&&this.b===e.b},
gZ(d){return A.i.gZ(this.a)^A.i.gZ(this.b)}}
var z=a.updateTypes([])
C.fNe.prototype={
$1(d){return(~d>>>0)+65536&65535},
$S:69}
C.fMi.prototype={
$2(d,e){var x,w=this
if(d<w.a)x=1
else x=d>w.b?2:0
if(e<w.c)x|=4
else if(e>w.d)x|=8
return x},
$S:64};(function inheritance(){var x=a.inherit
x(C.fNe,B.fO)
x(C.b6V,B.kO)
x(C.ct6,B.aXk)
x(C.fMi,B.id)
x(C.fM,B.aE)})()
var y={b:B.as("N<F>"),g:B.as("V?")};(function constants(){D.akl=new B.u(0.5333333333333333,0,0,0,A.q)
D.a5g=new B.ae(A.r5,null,A.aF,null,null,null)
D.eIR=new C.b6V(0,"none")
D.eIS=new C.b6V(4,"paeth")})()};
(a=>{a["nhK/IQdmOA8/AndV28zufT2jCAI="]=a.current})($__dart_deferred_initializers__);