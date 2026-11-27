((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,A,E,C={
iV(a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=null,a6=y.b,a7=B.a([b5,b7,b6,b8],a6)
if(!C.iwM(a7,B.a([0,0,a8.gc7(0)-1,a8.gb4(0)-1],a6)))return a8
b5=a7[0]
b7=a7[1]
b6=a7[2]
b8=a7[3]
x=b6-b5
w=b8-b7
v=A.h.bb(b4/2)
a6=x===0
if(a6&&w===0){if(b4===1)B.jk(a8,b5,b7,b1,a5,b0,!1,b2,b3)
else B.l8(a8,!1,b0,b1,b2,b3,v,b5,b7)
return a8}if(a6){if(w<0)for(a6=b5-v,u=b4<=1,t=b8;t<=b7;++t)if(u)B.jk(a8,b5,t,b1,a5,b0,!1,b2,b3)
else for(s=0;s<b4;++s)B.jk(a8,a6+s,t,b1,a5,b0,!1,b2,b3)
else for(a6=b5-v,u=b4<=1,t=b7;t<=b8;++t)if(u)B.jk(a8,b5,t,b1,a5,b0,!1,b2,b3)
else for(s=0;s<b4;++s)B.jk(a8,a6+s,t,b1,a5,b0,!1,b2,b3)
return a8}else if(w===0){if(x<0)for(a6=b7-v,u=b4<=1,r=b6;r<=b5;++r)if(u)B.jk(a8,r,b7,b1,a5,b0,!1,b2,b3)
else for(s=0;s<b4;++s)B.jk(a8,r,a6+s,b1,a5,b0,!1,b2,b3)
else for(a6=b7-v,u=b4<=1,r=b5;r<=b6;++r)if(u)B.jk(a8,r,b7,b1,a5,b0,!1,b2,b3)
else for(s=0;s<b4;++s)B.jk(a8,r,a6+s,b1,a5,b0,!1,b2,b3)
return a8}q=new C.fRR()
if(!a9){p=Math.abs(x)
o=Math.abs(w)
if(o<=p){n=Math.cos(Math.atan2(o,p))
m=n!==0?A.h.ec(b4,n):1
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
h=A.h.M(t-u)
for(g=h+m,f=h;f<g;++f)B.jk(a8,r,f,b1,a5,b0,!1,b2,b3)
if(w*i>0)while(r<j){++r
if(l<0)l+=a6
else{++t
l+=k}h=A.h.M(t-u)
for(g=h+m,f=h;f<g;++f)B.jk(a8,r,f,b1,a5,b0,!1,b2,b3)}else while(r<j){++r
if(l<0)l+=a6
else{--t
l+=k}h=A.h.M(t-u)
for(g=h+m,f=h;f<g;++f)B.jk(a8,r,f,b1,a5,b0,!1,b2,b3)}}else{e=Math.sin(Math.atan2(o,p))
m=e!==0?A.h.ec(b4,e):1
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
h=A.h.M(r-u)
for(g=h+m,f=h;f<g;++f)B.jk(a8,f,t,b1,a5,b0,!1,b2,b3)
if(x*a0>0)while(t<d){++t
if(l<0)l+=a6
else{++r
l+=k}h=A.h.M(r-u)
for(g=h+m,f=h;f<g;++f)B.jk(a8,f,t,b1,a5,b0,!1,b2,b3)}else while(t<d){++t
if(l<0)l+=a6
else{--r
l+=k}h=A.h.M(r-u)
for(g=h+m,f=h;f<g;++f)B.jk(a8,f,t,b1,a5,b0,!1,b2,b3)}}return a8}if(b4===1)return C.imT(a8,b0,b1,b5,b6,b7,b8)
a6=Math.abs(w)
u=Math.abs(x)
a1=a6<u?Math.cos(Math.atan2(w,x)):Math.sin(Math.atan2(w,x))
m=a1!==0?A.h.M(Math.abs(b4/a1)):1
if(m===0)m=1
if(u>a6){if(x<0){x=b5-b6
w=b7-b8
b7=b8
a2=b6
b6=b5
b5=a2}a3=A.n.ec(w*65536,x)
for(r=b5,t=b7,a4=0;r<=b6;++r){h=t-A.n.ao(m,2)
for(a6=h+m,f=h;f<a6;){B.jk(a8,r,f,b1,(A.n.aH(a4,8)&255)/255,b0,!1,b2,b3);++f
B.jk(a8,r,f,b1,(A.h.aH(q.$1(a4),8)&255)/255,b0,!1,b2,b3)}a4+=a3
if(a4>=65536){a4-=65536;++t}else if(a4<0){a4+=65536;--t}}}else{if(w<0){x=b5-b6
w=b7-b8
b5=b6
a2=b8
b8=b7
b7=a2}a3=A.n.ec(x*65536,w)
for(t=b7,r=b5,a4=0;t<=b8;++t){h=r-A.n.ao(m,2)
for(a6=h+m,f=h;f<a6;){B.jk(a8,f,t,b1,(A.n.aH(a4,8)&255)/255,A.d4,!1,b2,b3);++f
B.jk(a8,f,t,b1,(A.h.aH(q.$1(a4),8)&255)/255,A.d4,!1,b2,b3)}a4+=a3
if(a4>=65536){a4-=65536;++r}else if(a4<0){a4+=65536;--r}}}return a8},
imT(d,e,f,g,h,i,j){var x,w,v,u,t,s,r,q,p,o,n,m,l=null,k=Math.abs(j-i)>Math.abs(h-g)
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
t=A.h.bb(u)
s=i+v*(t-g)
r=1-(u-A.h.bb(u))
q=A.h.bb(s)
u=q+1
if(k){B.jk(d,q,t,f,(1-(s-A.h.bb(s)))*r,e,!1,l,A.cP)
B.jk(d,u,t,f,(s-A.h.bb(s))*r,e,!1,l,A.cP)}else{B.jk(d,t,q,f,(1-(s-A.h.bb(s)))*r,e,!1,l,A.cP)
B.jk(d,t,u,f,(s-A.h.bb(s))*r,e,!1,l,A.cP)}p=s+v
u=h+0.5
o=A.h.bb(u)
s=j+v*(o-h)
r=u-A.h.bb(u)
n=A.h.bb(s)
u=n+1
if(k){B.jk(d,n,o,f,(1-(s-A.h.bb(s)))*r,e,!1,l,A.cP)
B.jk(d,u,o,f,(s-A.h.bb(s))*r,e,!1,l,A.cP)
for(m=t+1,u=o-1;m<=u;++m){B.jk(d,A.h.bb(p),m,f,1-(p-A.h.bb(p)),e,!1,l,A.cP)
B.jk(d,A.h.bb(p)+1,m,f,p-A.h.bb(p),e,!1,l,A.cP)
p+=v}}else{B.jk(d,o,n,f,(1-(s-A.h.bb(s)))*r,e,!1,l,A.cP)
B.jk(d,o,u,f,(s-A.h.bb(s))*r,e,!1,l,A.cP)
for(m=t+1,u=o-1;m<=u;++m){B.jk(d,m,A.h.bb(p),f,1-(p-A.h.bb(p)),e,!1,l,A.cP)
B.jk(d,m,A.h.bb(p)+1,f,p-A.h.bb(p),e,!1,l,A.cP)
p+=v}}return d},
fRR:function fRR(){},
b7Y:function b7Y(d,e){this.a=d
this.b=e},
cuD:function cuD(d,e){var _=this
_.a=null
_.b=d
_.c=0
_.d=e
_.e=$
_.f=0
_.r=!1
_.w=null},
iwM(d,e){var x,w,v,u,t=d[0],s=d[1],r=d[2],q=d[3],p=e[0],o=e[1],n=e[2],m=e[3],l=new C.fQV(p,n,o,m),k=l.$2(t,s),j=l.$2(r,q)
while(x=!1,!0)if((k|j)>>>0===0){x=!0
break}else if((k&j)>>>0!==0)break
else{w=k!==0?k:j
if((w&8)!==0){v=t+A.n.ec((r-t)*(m-s),q-s)
u=m}else if((w&4)!==0){v=t+A.n.ec((r-t)*(o-s),q-s)
u=o}else if((w&2)!==0){u=s+A.n.ec((q-s)*(n-t),r-t)
v=n}else if((w&1)!==0){u=s+A.n.ec((q-s)*(p-t),r-t)
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
fQV:function fQV(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fR:function fR(d,e){this.a=d
this.b=e},
BG(a0,a1,a2){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null,d=a1.gbo(0)
if(d===0)return a0
x=a2.length
if(x===0)return a0
if(x===1){d=a2[0]
return B.jk(a0,A.h.M(d.a),A.h.M(d.b),a1,e,A.d4,!1,e,A.cP)}if(x===2){d=a2[0]
w=A.h.M(d.a)
d=A.h.M(d.b)
v=a2[1]
return C.iV(a0,!1,A.d4,a1,e,A.cP,1,w,A.h.M(v.a),d,A.h.M(v.b))}for(u=0,t=0,s=0,r=0,q=!0,p=0;p<x;++p){o=a2[p]
d=o.a
w=o.b
if(q){u=A.h.M(d)
t=A.h.M(w)
r=t
s=u
q=!1}else{d=A.h.M(d)
u=Math.min(u,d)
w=A.h.M(w)
t=Math.min(t,w)
s=Math.max(s,d)
r=Math.max(r,w)}}u=Math.max(u,0)
t=Math.max(t,0)
s=Math.min(s,a0.gc7(0)-1)
r=Math.min(r,a0.gb4(0)-1)
for(n=t+0.5,m=u+0.5,l=t;l<=r;++l,++n)for(k=m,j=u;j<=s;++j,++k){for(i=0,h=0;h<x;){g=a2[h];++h
f=a2[h%x]
d=g.b
if(!(d<=n&&f.b>n))w=f.b<=n&&d>n
else w=!0
if(w){w=g.a
if(k<w+(n-d)/(f.b-d)*(f.a-w))++i}}if((i&1)===1)B.jk(a0,j,l,a1,e,A.d4,!1,e,A.cP)}return a0},
fRY(d){return new C.cuD(D.eOF,6).cWA(d,!1)},
auL(d,e){var x=0,w=B.j(y.g),v,u,t
var $async$auL=B.e(function(f,g){if(f===1)return B.f(g,w)
for(;;)switch(x){case 0:x=3
return B.b(B.b5U(d,e),$async$auL)
case 3:u=g
x=4
return B.b(B.b5X(d,e),$async$auL)
case 4:t=g
if(u==null){v=t
x=1
break}if(t==null){v=u
x=1
break}v=u.cb(t)?u:t
x=1
break
case 1:return B.h(v,w)}})
return B.i($async$auL,w)}},D
J=c[1]
B=c[0]
A=c[2]
E=c[59]
C=a.updateHolder(c[36],C)
D=c[110]
C.b7Y.prototype={
a9(){return"PngFilter."+this.b}}
C.cuD.prototype={
oa(d){var x,w,v,u,t,s,r,q,p=this,o=8192,n=d.a
n=n==null?null:n.gvB()
if(!(n===!0&&d.gdX()!==A.kl))n=d.goe()<8&&!d.gvz()&&d.grB()>1
else n=!0
if(n)d=d.qh(A.c2)
if(p.w==null){n=B.yG(!0,o)
p.w=n
n.mu(B.a([137,80,78,71,13,10,26,10],y.b))
x=B.yG(!0,o)
x.il(d.gc7(0))
x.il(d.gb4(0))
x.bK(d.goe())
if(d.gvz())n=3
else if(d.grB()===1)n=0
else if(d.grB()===2)n=4
else n=d.grB()===3?2:6
x.bK(n)
x.bK(0)
x.bK(0)
x.bK(0)
n=p.w
n.toString
p.xb(n,"IHDR",J.eB(A.aI.gaS(x.c),0,x.a))
n=d.c
if(n!=null){x=B.yG(!0,o)
x.mu(new B.d1(n.a))
x.bK(0)
x.bK(0)
x.mu(n.cRM())
n=p.w
n.toString
p.xb(n,"iCCP",J.eB(A.aI.gaS(x.c),0,x.a))}if(d.gvz()){n=p.a
if(n!=null){n=n.a
n===$&&B.d()
p.bfD(n)}else{n=d.a
n=n==null?null:n.gfc()
n.toString
p.bfD(n)}}if(p.r){x=B.yG(!0,o)
n=p.e
n===$&&B.d()
x.il(n)
x.il(p.c)
n=p.w
n.toString
p.xb(n,"acTL",J.eB(A.aI.gaS(x.c),0,x.a))}}w=d.gvz()?1:d.grB()
v=d.gdX()===A.kl?2:1
n=d.gc7(0)
u=d.gb4(0)
t=d.gb4(0)
s=new Uint8Array(n*u*w*v+t)
p.ct8(0,d,s)
r=A.Zz.a6V(s,p.d)
n=d.d
if(n!=null)for(n=new B.hW(n,n.r,n.e);n.B();){u=n.d
t=d.d.h(0,u)
t.toString
x=new B.b75(!0,new Uint8Array(8192))
x.mu(A.Av.aL(u))
x.bK(0)
x.mu(A.Av.aL(t))
u=p.w
u.toString
p.xb(u,"tEXt",J.eB(A.aI.gaS(x.c),0,x.a))}if(p.r){x=B.yG(!0,o)
x.il(p.f)
x.il(d.gc7(0))
x.il(d.gb4(0))
x.il(0)
x.il(0)
x.lE(d.y)
x.lE(1000)
x.bK(1)
x.bK(0)
n=p.w
n.toString
p.xb(n,"fcTL",J.eB(A.aI.gaS(x.c),0,x.a));++p.f}if(p.f<=1){n=p.w
n.toString
p.xb(n,"IDAT",r)}else{q=B.yG(!0,o)
q.il(p.f)
q.mu(r)
n=p.w
n.toString
p.xb(n,"fdAT",J.eB(A.aI.gaS(q.c),0,q.a));++p.f}},
cXp(d){var x,w=this,v=w.w
if(v==null)return null
w.xb(v,"IEND",B.a([],y.b))
w.f=0
v=w.w
x=J.eB(A.aI.gaS(v.c),0,v.a)
w.w=null
return x},
cWA(d,e){var x,w,v,u,t,s=this,r=d.gkN().length
if(r<=1){s.e=1
s.r=!1
s.oa(d)}else{r=d.gkN().length
s.e=r
s.r=r>1
s.c=d.r
if(d.gvz()){x=s.a=E.hBl(d,256,10)
for(r=d.gkN(),w=r.length,v=0;v<r.length;r.length===w||(0,B.I)(r),++v){u=r[v]
if(u!==d){x.b0l(u)
x.aXH()
x.b_O()
x.aV0()}}}for(r=d.gkN(),w=r.length,v=0;v<r.length;r.length===w||(0,B.I)(r),++v){u=r[v]
t=s.a
if(t!=null)s.oa(t.bse(u))
else s.oa(u)}}r=s.cXp(0)
r.toString
return r},
bfD(d){var x,w,v,u=this
if(d.gdX()===A.c2&&d.b===3&&d.a===256){x=u.w
x.toString
u.xb(x,"PLTE",J.eB(d.gaS(d),0,null))}else{x=d.a
w=B.yG(!0,x*3)
for(v=0;v<x;++v){w.bK(A.h.M(d.oF(v)))
w.bK(A.h.M(d.oE(v)))
w.bK(A.h.M(d.oD(v)))}x=u.w
x.toString
u.xb(x,"PLTE",J.eB(A.aI.gaS(w.c),0,w.a))}if(d.b===4){x=d.a
w=B.yG(!0,x)
for(v=0;v<x;++v)w.bK(A.h.M(d.qP(v)))
x=u.w
x.toString
u.xb(x,"tRNS",J.eB(A.aI.gaS(w.c),0,w.a))}},
xb(d,e,f){d.il(f.length)
d.mu(new B.d1(e))
d.mu(f)
d.il(B.HO(f,B.HO(new B.d1(e),0)))},
ct8(d,e,f){var x,w,v=this,u=e.gvz()?D.eOE:v.b,t=e.gaS(0),s=e.a.gu7(),r=e.gvz()?1:e.grB(),q=A.n.aH(r*e.goe()+7,3),p=e.goe()+7>>>3,o=u.a,n=J.dy(t),m=0,l=0,k=null,j=0
for(;;){x=e.a
x=x==null?null:x.b
if(!(j<(x==null?0:x)))break
w=n.a5M(t,l,s)
l+=s
switch(o){case 1:m=v.bWq(w,p,q,f,m)
break
case 2:m=v.bWr(w,k,p,f,m)
break
case 3:m=v.bWl(w,k,p,q,f,m)
break
case 4:m=v.bWo(w,k,p,q,f,m)
break
default:m=v.bWn(w,p,f,m)
break}++j
k=w}},
b71(d,e,f,g,h){var x,w,v;--d
for(x=g.$flags|0;d>=0;h=w){w=h+1
v=e[f+d]
x&2&&B.ak(g)
g[h]=v;--d}return h},
bWn(d,e,f,g){var x,w,v=g+1
f.$flags&2&&B.ak(f)
f[g]=0
x=d.length
if(e===1)for(g=v,w=0;w<x;++w,g=v){v=g+1
f[g]=d[w]}else for(g=v,w=0;w<x;w+=e)g=this.b71(e,d,w,f,g)
return g},
bWq(d,e,f,g,h){var x,w,v,u,t,s,r=h+1
g.$flags&2&&B.ak(g)
g[h]=1
for(h=r,x=0;x<f;x+=e)h=this.b71(e,d,x,g,h)
w=d.length
for(v=e-1,x=f;x<w;x+=e)for(u=v,t=0;t<e;++t,--u,h=r){r=h+1
s=x+u
g[h]=d[s]-d[s-f]&255}return h},
bWr(d,e,f,g,h){var x,w,v,u,t,s,r,q=h+1
g.$flags&2&&B.ak(g)
g[h]=2
x=d.length
for(w=f-1,v=e!=null,h=q,u=0;u<x;u+=f)for(t=w,s=0;s<f;++s,--t,h=q){r=v?e[u+t]:0
q=h+1
g[h]=d[u+t]-r&255}return h},
bWl(d,e,f,g,h,i){var x,w,v,u,t,s,r,q,p,o=i+1
h.$flags&2&&B.ak(h)
h[i]=3
x=d.length
for(w=f-1,v=e==null,i=o,u=0;u<x;u+=f)for(t=w,s=0;s<f;++s,--t,i=o){r=u+t
q=r<g?0:d[r-g]
p=v?0:e[r]
o=i+1
h[i]=d[r]-(q+p>>>1)}return i},
coG(d,e,f){var x=d+e-f,w=x>d?x-d:d-x,v=x>e?x-e:e-x,u=x>f?x-f:f-x
if(w<=v&&w<=u)return d
else if(v<=u)return e
return f},
bWo(d,e,f,g,h,i){var x,w,v,u,t,s,r,q,p,o,n,m=i+1
h.$flags&2&&B.ak(h)
h[i]=4
x=d.length
for(w=f-1,v=e==null,i=m,u=0;u<x;u+=f)for(t=w,s=0;s<f;++s,--t,i=m){r=u+t
q=r<g
p=q?0:d[r-g]
o=v?0:e[r]
n=q||v?0:e[r-g]
m=i+1
h[i]=d[r]-this.coG(p,o,n)&255}return i}}
C.fR.prototype={
aM(d,e){return new C.fR(this.a*e,this.b*e)},
a6(d,e){return new C.fR(this.a+e.a,this.b+e.b)},
A(d,e){if(e==null)return!1
return e instanceof C.fR&&this.a===e.a&&this.b===e.b},
ga_(d){return A.h.ga_(this.a)^A.h.ga_(this.b)}}
var z=a.updateTypes([])
C.fRR.prototype={
$1(d){return(~d>>>0)+65536&65535},
$S:70}
C.fQV.prototype={
$2(d,e){var x,w=this
if(d<w.a)x=1
else x=d>w.b?2:0
if(e<w.c)x|=4
else if(e>w.d)x|=8
return x},
$S:61};(function inheritance(){var x=a.inherit
x(C.fRR,B.hq)
x(C.b7Y,B.lm)
x(C.cuD,B.aYi)
x(C.fQV,B.iZ)
x(C.fR,B.aH)})()
var y={b:B.as("N<F>"),g:B.as("W?")};(function constants(){D.akS=new B.u(0.5333333333333333,0,0,0,A.q)
D.a5E=new B.ae(A.rl,null,A.aF,null,null,null)
D.eOE=new C.b7Y(0,"none")
D.eOF=new C.b7Y(4,"paeth")})()};
(a=>{a["nh5DX33PIHv6OnledEQb6M/YFo0="]=a.current})($__dart_deferred_initializers__);