((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,A,E,C={
iT(a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=null,a6=y.b,a7=B.a([b5,b7,b6,b8],a6)
if(!C.it3(a7,B.a([0,0,a8.gc3(0)-1,a8.gb4(0)-1],a6)))return a8
b5=a7[0]
b7=a7[1]
b6=a7[2]
b8=a7[3]
x=b6-b5
w=b8-b7
v=A.i.bc(b4/2)
a6=x===0
if(a6&&w===0){if(b4===1)B.jd(a8,b5,b7,b1,a5,b0,!1,b2,b3)
else B.l3(a8,!1,b0,b1,b2,b3,v,b5,b7)
return a8}if(a6){if(w<0)for(a6=b5-v,u=b4<=1,t=b8;t<=b7;++t)if(u)B.jd(a8,b5,t,b1,a5,b0,!1,b2,b3)
else for(s=0;s<b4;++s)B.jd(a8,a6+s,t,b1,a5,b0,!1,b2,b3)
else for(a6=b5-v,u=b4<=1,t=b7;t<=b8;++t)if(u)B.jd(a8,b5,t,b1,a5,b0,!1,b2,b3)
else for(s=0;s<b4;++s)B.jd(a8,a6+s,t,b1,a5,b0,!1,b2,b3)
return a8}else if(w===0){if(x<0)for(a6=b7-v,u=b4<=1,r=b6;r<=b5;++r)if(u)B.jd(a8,r,b7,b1,a5,b0,!1,b2,b3)
else for(s=0;s<b4;++s)B.jd(a8,r,a6+s,b1,a5,b0,!1,b2,b3)
else for(a6=b7-v,u=b4<=1,r=b5;r<=b6;++r)if(u)B.jd(a8,r,b7,b1,a5,b0,!1,b2,b3)
else for(s=0;s<b4;++s)B.jd(a8,r,a6+s,b1,a5,b0,!1,b2,b3)
return a8}q=new C.fPz()
if(!a9){p=Math.abs(x)
o=Math.abs(w)
if(o<=p){n=Math.cos(Math.atan2(o,p))
m=n!==0?A.i.ea(b4,n):1
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
for(g=h+m,f=h;f<g;++f)B.jd(a8,r,f,b1,a5,b0,!1,b2,b3)
if(w*i>0)while(r<j){++r
if(l<0)l+=a6
else{++t
l+=k}h=A.i.M(t-u)
for(g=h+m,f=h;f<g;++f)B.jd(a8,r,f,b1,a5,b0,!1,b2,b3)}else while(r<j){++r
if(l<0)l+=a6
else{--t
l+=k}h=A.i.M(t-u)
for(g=h+m,f=h;f<g;++f)B.jd(a8,r,f,b1,a5,b0,!1,b2,b3)}}else{e=Math.sin(Math.atan2(o,p))
m=e!==0?A.i.ea(b4,e):1
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
for(g=h+m,f=h;f<g;++f)B.jd(a8,f,t,b1,a5,b0,!1,b2,b3)
if(x*a0>0)while(t<d){++t
if(l<0)l+=a6
else{++r
l+=k}h=A.i.M(r-u)
for(g=h+m,f=h;f<g;++f)B.jd(a8,f,t,b1,a5,b0,!1,b2,b3)}else while(t<d){++t
if(l<0)l+=a6
else{--r
l+=k}h=A.i.M(r-u)
for(g=h+m,f=h;f<g;++f)B.jd(a8,f,t,b1,a5,b0,!1,b2,b3)}}return a8}if(b4===1)return C.ijx(a8,b0,b1,b5,b6,b7,b8)
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
b5=a2}a3=A.o.ea(w*65536,x)
for(r=b5,t=b7,a4=0;r<=b6;++r){h=t-A.o.ao(m,2)
for(a6=h+m,f=h;f<a6;){B.jd(a8,r,f,b1,(A.o.aH(a4,8)&255)/255,b0,!1,b2,b3);++f
B.jd(a8,r,f,b1,(A.i.aH(q.$1(a4),8)&255)/255,b0,!1,b2,b3)}a4+=a3
if(a4>=65536){a4-=65536;++t}else if(a4<0){a4+=65536;--t}}}else{if(w<0){x=b5-b6
w=b7-b8
b5=b6
a2=b8
b8=b7
b7=a2}a3=A.o.ea(x*65536,w)
for(t=b7,r=b5,a4=0;t<=b8;++t){h=r-A.o.ao(m,2)
for(a6=h+m,f=h;f<a6;){B.jd(a8,f,t,b1,(A.o.aH(a4,8)&255)/255,A.d2,!1,b2,b3);++f
B.jd(a8,f,t,b1,(A.i.aH(q.$1(a4),8)&255)/255,A.d2,!1,b2,b3)}a4+=a3
if(a4>=65536){a4-=65536;++r}else if(a4<0){a4+=65536;--r}}}return a8},
ijx(d,e,f,g,h,i,j){var x,w,v,u,t,s,r,q,p,o,n,m,l=null,k=Math.abs(j-i)>Math.abs(h-g)
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
t=A.i.bc(u)
s=i+v*(t-g)
r=1-(u-A.i.bc(u))
q=A.i.bc(s)
u=q+1
if(k){B.jd(d,q,t,f,(1-(s-A.i.bc(s)))*r,e,!1,l,A.cP)
B.jd(d,u,t,f,(s-A.i.bc(s))*r,e,!1,l,A.cP)}else{B.jd(d,t,q,f,(1-(s-A.i.bc(s)))*r,e,!1,l,A.cP)
B.jd(d,t,u,f,(s-A.i.bc(s))*r,e,!1,l,A.cP)}p=s+v
u=h+0.5
o=A.i.bc(u)
s=j+v*(o-h)
r=u-A.i.bc(u)
n=A.i.bc(s)
u=n+1
if(k){B.jd(d,n,o,f,(1-(s-A.i.bc(s)))*r,e,!1,l,A.cP)
B.jd(d,u,o,f,(s-A.i.bc(s))*r,e,!1,l,A.cP)
for(m=t+1,u=o-1;m<=u;++m){B.jd(d,A.i.bc(p),m,f,1-(p-A.i.bc(p)),e,!1,l,A.cP)
B.jd(d,A.i.bc(p)+1,m,f,p-A.i.bc(p),e,!1,l,A.cP)
p+=v}}else{B.jd(d,o,n,f,(1-(s-A.i.bc(s)))*r,e,!1,l,A.cP)
B.jd(d,o,u,f,(s-A.i.bc(s))*r,e,!1,l,A.cP)
for(m=t+1,u=o-1;m<=u;++m){B.jd(d,m,A.i.bc(p),f,1-(p-A.i.bc(p)),e,!1,l,A.cP)
B.jd(d,m,A.i.bc(p)+1,f,p-A.i.bc(p),e,!1,l,A.cP)
p+=v}}return d},
fPz:function fPz(){},
b7j:function b7j(d,e){this.a=d
this.b=e},
ctM:function ctM(d,e){var _=this
_.a=null
_.b=d
_.c=0
_.d=e
_.e=$
_.f=0
_.r=!1
_.w=null},
it3(d,e){var x,w,v,u,t=d[0],s=d[1],r=d[2],q=d[3],p=e[0],o=e[1],n=e[2],m=e[3],l=new C.fOD(p,n,o,m),k=l.$2(t,s),j=l.$2(r,q)
while(x=!1,!0)if((k|j)>>>0===0){x=!0
break}else if((k&j)>>>0!==0)break
else{w=k!==0?k:j
if((w&8)!==0){v=t+A.o.ea((r-t)*(m-s),q-s)
u=m}else if((w&4)!==0){v=t+A.o.ea((r-t)*(o-s),q-s)
u=o}else if((w&2)!==0){u=s+A.o.ea((q-s)*(n-t),r-t)
v=n}else if((w&1)!==0){u=s+A.o.ea((q-s)*(p-t),r-t)
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
fOD:function fOD(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fP:function fP(d,e){this.a=d
this.b=e},
Bx(a0,a1,a2){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null,d=a1.gbo(0)
if(d===0)return a0
x=a2.length
if(x===0)return a0
if(x===1){d=a2[0]
return B.jd(a0,A.i.M(d.a),A.i.M(d.b),a1,e,A.d2,!1,e,A.cP)}if(x===2){d=a2[0]
w=A.i.M(d.a)
d=A.i.M(d.b)
v=a2[1]
return C.iT(a0,!1,A.d2,a1,e,A.cP,1,w,A.i.M(v.a),d,A.i.M(v.b))}for(u=0,t=0,s=0,r=0,q=!0,p=0;p<x;++p){o=a2[p]
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
r=Math.min(r,a0.gb4(0)-1)
for(n=t+0.5,m=u+0.5,l=t;l<=r;++l,++n)for(k=m,j=u;j<=s;++j,++k){for(i=0,h=0;h<x;){g=a2[h];++h
f=a2[h%x]
d=g.b
if(!(d<=n&&f.b>n))w=f.b<=n&&d>n
else w=!0
if(w){w=g.a
if(k<w+(n-d)/(f.b-d)*(f.a-w))++i}}if((i&1)===1)B.jd(a0,j,l,a1,e,A.d2,!1,e,A.cP)}return a0},
fPG(d){return new C.ctM(D.eMu,6).cV8(d,!1)},
auh(d,e){var x=0,w=B.j(y.g),v,u,t
var $async$auh=B.e(function(f,g){if(f===1)return B.f(g,w)
for(;;)switch(x){case 0:x=3
return B.b(B.b5f(d,e),$async$auh)
case 3:u=g
x=4
return B.b(B.b5i(d,e),$async$auh)
case 4:t=g
if(u==null){v=t
x=1
break}if(t==null){v=u
x=1
break}v=u.c8(t)?u:t
x=1
break
case 1:return B.h(v,w)}})
return B.i($async$auh,w)}},D
J=c[1]
B=c[0]
A=c[2]
E=c[60]
C=a.updateHolder(c[37],C)
D=c[111]
C.b7j.prototype={
a9(){return"PngFilter."+this.b}}
C.ctM.prototype={
o1(d){var x,w,v,u,t,s,r,q,p=this,o=8192,n=d.a
n=n==null?null:n.gvn()
if(!(n===!0&&d.gdT()!==A.ki))n=d.go5()<8&&!d.gvl()&&d.grn()>1
else n=!0
if(n)d=d.q8(A.c2)
if(p.w==null){n=B.yA(!0,o)
p.w=n
n.mm(B.a([137,80,78,71,13,10,26,10],y.b))
x=B.yA(!0,o)
x.ig(d.gc3(0))
x.ig(d.gb4(0))
x.bK(d.go5())
if(d.gvl())n=3
else if(d.grn()===1)n=0
else if(d.grn()===2)n=4
else n=d.grn()===3?2:6
x.bK(n)
x.bK(0)
x.bK(0)
x.bK(0)
n=p.w
n.toString
p.wW(n,"IHDR",J.eA(A.aI.gaS(x.c),0,x.a))
n=d.c
if(n!=null){x=B.yA(!0,o)
x.mm(new B.dj(n.a))
x.bK(0)
x.bK(0)
x.mm(n.cQl())
n=p.w
n.toString
p.wW(n,"iCCP",J.eA(A.aI.gaS(x.c),0,x.a))}if(d.gvl()){n=p.a
if(n!=null){n=n.a
n===$&&B.d()
p.beG(n)}else{n=d.a
n=n==null?null:n.gfa()
n.toString
p.beG(n)}}if(p.r){x=B.yA(!0,o)
n=p.e
n===$&&B.d()
x.ig(n)
x.ig(p.c)
n=p.w
n.toString
p.wW(n,"acTL",J.eA(A.aI.gaS(x.c),0,x.a))}}w=d.gvl()?1:d.grn()
v=d.gdT()===A.ki?2:1
n=d.gc3(0)
u=d.gb4(0)
t=d.gb4(0)
s=new Uint8Array(n*u*w*v+t)
p.crO(0,d,s)
r=A.Ze.a6j(s,p.d)
n=d.d
if(n!=null)for(n=new B.hV(n,n.r,n.e);n.C();){u=n.d
t=d.d.h(0,u)
t.toString
x=new B.b6r(!0,new Uint8Array(8192))
x.mm(A.Am.aK(u))
x.bK(0)
x.mm(A.Am.aK(t))
u=p.w
u.toString
p.wW(u,"tEXt",J.eA(A.aI.gaS(x.c),0,x.a))}if(p.r){x=B.yA(!0,o)
x.ig(p.f)
x.ig(d.gc3(0))
x.ig(d.gb4(0))
x.ig(0)
x.ig(0)
x.ly(d.y)
x.ly(1000)
x.bK(1)
x.bK(0)
n=p.w
n.toString
p.wW(n,"fcTL",J.eA(A.aI.gaS(x.c),0,x.a));++p.f}if(p.f<=1){n=p.w
n.toString
p.wW(n,"IDAT",r)}else{q=B.yA(!0,o)
q.ig(p.f)
q.mm(r)
n=p.w
n.toString
p.wW(n,"fdAT",J.eA(A.aI.gaS(q.c),0,q.a));++p.f}},
cVY(d){var x,w=this,v=w.w
if(v==null)return null
w.wW(v,"IEND",B.a([],y.b))
w.f=0
v=w.w
x=J.eA(A.aI.gaS(v.c),0,v.a)
w.w=null
return x},
cV8(d,e){var x,w,v,u,t,s=this,r=d.gkH().length
if(r<=1){s.e=1
s.r=!1
s.o1(d)}else{r=d.gkH().length
s.e=r
s.r=r>1
s.c=d.r
if(d.gvl()){x=s.a=E.hyi(d,256,10)
for(r=d.gkH(),w=r.length,v=0;v<r.length;r.length===w||(0,B.I)(r),++v){u=r[v]
if(u!==d){x.b_s(u)
x.aWO()
x.aZV()
x.aU8()}}}for(r=d.gkH(),w=r.length,v=0;v<r.length;r.length===w||(0,B.I)(r),++v){u=r[v]
t=s.a
if(t!=null)s.o1(t.brc(u))
else s.o1(u)}}r=s.cVY(0)
r.toString
return r},
beG(d){var x,w,v,u=this
if(d.gdT()===A.c2&&d.b===3&&d.a===256){x=u.w
x.toString
u.wW(x,"PLTE",J.eA(d.gaS(d),0,null))}else{x=d.a
w=B.yA(!0,x*3)
for(v=0;v<x;++v){w.bK(A.i.M(d.ou(v)))
w.bK(A.i.M(d.ot(v)))
w.bK(A.i.M(d.os(v)))}x=u.w
x.toString
u.wW(x,"PLTE",J.eA(A.aI.gaS(w.c),0,w.a))}if(d.b===4){x=d.a
w=B.yA(!0,x)
for(v=0;v<x;++v)w.bK(A.i.M(d.qD(v)))
x=u.w
x.toString
u.wW(x,"tRNS",J.eA(A.aI.gaS(w.c),0,w.a))}},
wW(d,e,f){d.ig(f.length)
d.mm(new B.dj(e))
d.mm(f)
d.ig(B.HD(f,B.HD(new B.dj(e),0)))},
crO(d,e,f){var x,w,v=this,u=e.gvl()?D.eMt:v.b,t=e.gaS(0),s=e.a.gtQ(),r=e.gvl()?1:e.grn(),q=A.o.aH(r*e.go5()+7,3),p=e.go5()+7>>>3,o=u.a,n=J.du(t),m=0,l=0,k=null,j=0
for(;;){x=e.a
x=x==null?null:x.b
if(!(j<(x==null?0:x)))break
w=n.a5a(t,l,s)
l+=s
switch(o){case 1:m=v.bVm(w,p,q,f,m)
break
case 2:m=v.bVn(w,k,p,f,m)
break
case 3:m=v.bVh(w,k,p,q,f,m)
break
case 4:m=v.bVk(w,k,p,q,f,m)
break
default:m=v.bVj(w,p,f,m)
break}++j
k=w}},
b66(d,e,f,g,h){var x,w,v;--d
for(x=g.$flags|0;d>=0;h=w){w=h+1
v=e[f+d]
x&2&&B.ak(g)
g[h]=v;--d}return h},
bVj(d,e,f,g){var x,w,v=g+1
f.$flags&2&&B.ak(f)
f[g]=0
x=d.length
if(e===1)for(g=v,w=0;w<x;++w,g=v){v=g+1
f[g]=d[w]}else for(g=v,w=0;w<x;w+=e)g=this.b66(e,d,w,f,g)
return g},
bVm(d,e,f,g,h){var x,w,v,u,t,s,r=h+1
g.$flags&2&&B.ak(g)
g[h]=1
for(h=r,x=0;x<f;x+=e)h=this.b66(e,d,x,g,h)
w=d.length
for(v=e-1,x=f;x<w;x+=e)for(u=v,t=0;t<e;++t,--u,h=r){r=h+1
s=x+u
g[h]=d[s]-d[s-f]&255}return h},
bVn(d,e,f,g,h){var x,w,v,u,t,s,r,q=h+1
g.$flags&2&&B.ak(g)
g[h]=2
x=d.length
for(w=f-1,v=e!=null,h=q,u=0;u<x;u+=f)for(t=w,s=0;s<f;++s,--t,h=q){r=v?e[u+t]:0
q=h+1
g[h]=d[u+t]-r&255}return h},
bVh(d,e,f,g,h,i){var x,w,v,u,t,s,r,q,p,o=i+1
h.$flags&2&&B.ak(h)
h[i]=3
x=d.length
for(w=f-1,v=e==null,i=o,u=0;u<x;u+=f)for(t=w,s=0;s<f;++s,--t,i=o){r=u+t
q=r<g?0:d[r-g]
p=v?0:e[r]
o=i+1
h[i]=d[r]-(q+p>>>1)}return i},
cno(d,e,f){var x=d+e-f,w=x>d?x-d:d-x,v=x>e?x-e:e-x,u=x>f?x-f:f-x
if(w<=v&&w<=u)return d
else if(v<=u)return e
return f},
bVk(d,e,f,g,h,i){var x,w,v,u,t,s,r,q,p,o,n,m=i+1
h.$flags&2&&B.ak(h)
h[i]=4
x=d.length
for(w=f-1,v=e==null,i=m,u=0;u<x;u+=f)for(t=w,s=0;s<f;++s,--t,i=m){r=u+t
q=r<g
p=q?0:d[r-g]
o=v?0:e[r]
n=q||v?0:e[r-g]
m=i+1
h[i]=d[r]-this.cno(p,o,n)&255}return i}}
C.fP.prototype={
aO(d,e){return new C.fP(this.a*e,this.b*e)},
a7(d,e){return new C.fP(this.a+e.a,this.b+e.b)},
A(d,e){if(e==null)return!1
return e instanceof C.fP&&this.a===e.a&&this.b===e.b},
gZ(d){return A.i.gZ(this.a)^A.i.gZ(this.b)}}
var z=a.updateTypes([])
C.fPz.prototype={
$1(d){return(~d>>>0)+65536&65535},
$S:69}
C.fOD.prototype={
$2(d,e){var x,w=this
if(d<w.a)x=1
else x=d>w.b?2:0
if(e<w.c)x|=4
else if(e>w.d)x|=8
return x},
$S:64};(function inheritance(){var x=a.inherit
x(C.fPz,B.hg)
x(C.b7j,B.lh)
x(C.ctM,B.aXF)
x(C.fOD,B.iJ)
x(C.fP,B.aE)})()
var y={b:B.as("N<F>"),g:B.as("W?")};(function constants(){D.ako=new B.u(0.5333333333333333,0,0,0,A.q)
D.a5j=new B.ae(A.rd,null,A.aF,null,null,null)
D.eMt=new C.b7j(0,"none")
D.eMu=new C.b7j(4,"paeth")})()};
(a=>{a["f5osZclmzSVHPRczqMZLY33W5AY="]=a.current})($__dart_deferred_initializers__);