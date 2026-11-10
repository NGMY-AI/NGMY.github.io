((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,A,G,I,K,L,M,H,N,D={
r2(d,e,f,g,h,i){var x=new D.fvQ(e,h,!0),w=x.$1(g),v=w.b.c
if(v>i&&v>0)w=x.$1(Math.max(2,g*i/v))
x=w.b
v=x.c
x=x.a.c
w.a3(d,f.aF(0,new B.t(v/2,x.gbb(x)/2)))},
agx(d,e,f,g,h,i){var x,w,v,u,t,s,r,q=null
if(h<=0)return
x=d.a
J.bm(x.save())
x.translate(e.a,e.b)
d.bW(0,A.k.E(A.lr.av(0,A.k.E(h,0,1)),0.01,1.3))
w=B.fv(q,q,q,q,B.cS(q,q,q,q,q,q,q,q,q,B.l(q,q,A.av,q,q,q,q,q,q,q,q,g,q,q,A.u,q,q,!0,q,q,q,q,q,q,q,q),f),A.a3,A.bZ,q,A.dA,A.bW)
w.el()
v=w.b
u=v.c
v=v.a.c
t=g*0.8
s=B.bt(B.bJ(A.I,v.gbb(v)+g*0.7,u+g*1.1),new B.aP(t,t))
t=$.S()
u=B.I()
u.r=i.gp(0)
d.az(s,u)
t=new B.aF(t.r,A.ah,q,q,B.a([],y.v))
u=-g
v=s.d
r=v-1
t.D(new B.aY(u*0.3,r))
t.D(new B.aq(u*0.7,v+g*0.6))
t.D(new B.aq(g*0.2,r))
t.D(new B.bs())
r=B.I()
r.r=i.gp(0)
d.aG(t,r)
r=w.b
t=r.c
r=r.a.c
w.a3(d,new B.t(-t/2,-r.gbb(r)/2))
x.restore()},
h4L(d,e,f,g){var x,w=A.k.E(Math.abs(Math.cos(g)),0.15,1),v=f*2,u=v*w,t=B.bJ(e,v,u)
$.S()
x=B.I()
x.r=A.bG.gp(0)
d.dO(t,x)
d.dO(B.bJ(e,v,u),E.yK(A.pV,f*0.18))
if(w>0.5)D.r2(d,"$",e,f*1.2,A.pV,9999)},
hYk(d,e,f,g){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=new B.e9()
k.d4(4)
for(x=e.a,w=f-g,v=e.b,u=d.a,t=f*3,s=v*0.025,r=v*0.012,q=0;q<18;++q){p=k.ah()
o=A.k.F(w*(40+k.ah()*60)+k.ah()*v,v)
J.bm(u.save())
u.translate(p*x,o)
u.rotate((t+q)*180/3.141592653589793,0,0)
p=B.bJ(A.I,r,s)
n=C.awT[A.o.F(q,5)]
$.S()
m=new B.ap(A.R,A.N,A.U,A.V,A.S)
m.r=n.gp(0)
l=m.G()
u.drawRect(B.bG(p),l)
l.delete()
u.restore()}},
i7j(d,e,f,g){switch(A.o.F(f,11)){case 0:D.hXX(d,e,g)
break
case 1:D.i00(d,e,g)
break
case 2:D.i5k(d,e,g)
break
case 3:D.i5z(d,e,g)
break
case 4:D.i4t(d,e,g)
break
case 5:D.i_H(d,e,g)
break
case 6:D.hXm(d,e,g)
break
case 7:D.i6k(d,e,g)
break
case 8:D.hZG(d,e,g)
break
case 9:D.i04(d,e,g)
break
default:D.i_i(d,e,g)}},
hXX(a2,a3,a4){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null,d=a3.a,a0=a3.b,a1=a0*0.94
for(x=a2.a,w=d*0.12,v=d*0.06,u=a0*0.06,t=y.v,s=0;s<6;++s){r=d*(0.04+s*0.17)
q=a0*(0.18+0.08*A.o.F(s,3))
p=a1-q
o=r+w
n=A.c.j(0.2)
m=$.S()
l=new B.ap(A.R,A.N,A.U,A.V,A.S)
l.r=n.gp(0)
k=l.G()
x.drawRect(B.bG(new B.a3(r,p,o,p+q)),k)
k.delete()
l=B.a([],t)
m=new B.aF(m.r,A.ah,e,e,l)
l.push(new B.aY(r-3,p))
l.push(new B.aq(r+v,p-u))
l.push(new B.aq(o+3,p))
l.push(new B.bs())
p=new B.ap(A.R,A.N,A.U,A.V,A.S)
p.r=A.c.j(0.3).gp(0)
k=p.G()
p=m.gbw().a.snapshot()
x.drawPath((m.e=new B.cm(p)).a,k)
k.delete()}w=A.w.j(0.18)
$.S()
v=B.I()
v.r=w.gp(0)
a2.aP(new B.a3(0,a1,0+d,a1+(a0-a1)),v)
j=Math.cos(a4*1.6)
i=Math.min(d*0.46,a0*0.95)
h=i*0.62
J.bm(x.save())
v=d*0.58
x.translate(v,a0*0.45)
a2.p5(0,Math.max(0.08,Math.abs(j)),1)
w=h*0.1
g=B.bt(B.bJ(A.I,h,i),new B.aP(w,w))
u=B.I()
t=j>=0
u.sam(new B.a9(A.a5,A.a8,A.x,t?C.dt9:C.diW,e,e).aB(0,new B.a3(g.a,g.b,g.c,g.d)))
a2.az(g,u)
a2.az(g,E.yK(A.d7,2))
if(t){u=-i
t=u*0.28
p=-h
o=p*0.05
n=h*0.22
m=B.I()
m.r=F.mC.gp(0)
a2.ad(new B.t(t,o),n,m)
n=B.bY(new B.t(t,o),n)
o=B.I()
o.r=F.lv.gp(0)
a2.e3(n,3.141592653589793,3.141592653589793,!0,o)
for(u*=0.05,t=p*0.25,o=h*0.07,s=0;s<3;++s){n=t+s*h*0.16
n=B.bt(new B.a3(u,n,u+i*(0.42-s*0.06),n+o),A.hA)
m=new B.ap(A.R,A.N,A.U,A.V,A.S)
m.r=A.dt.gp(0)
k=m.G()
x.drawRRect(B.el(n),k)
k.delete()}D.r2(a2,"COMMUNITY ID",new B.t(0,p*0.4),w,A.d7,i*0.8)}else D.r2(a2,"\u2605 NGMY \u2605",A.I,h*0.16,A.c,i*0.8)
x.restore()
w=a4>2.6
if(w){s=A.k.E((a4-2.6)/0.35,0,1)
J.bm(x.save())
x.translate(v,a0*0.52)
a2.ig(0,-0.25)
a2.bW(0,2.2-1.2*A.eu.av(0,s))
f=B.bJ(A.I,h*0.3,i*0.7)
a2.az(B.bt(f,A.hB),E.yK(A.cV.j(s),3))
D.r2(a2,"\u2713 REGISTERED",A.I,h*0.13,A.cV.j(s),(f.c-f.a)*0.9)
x.restore()}x=a4*5
v=Math.sin(x)
x=Math.sin(x)
w=w&&a4<4
E.AZ(a2,new B.t(d*0.2,a1),a0*0.7,a4,!1,Math.abs(x)*a0*0.015,0,A.cV,F.mC,w,(v+1)/2)
if(a4>3)D.hYk(a2,new B.av(d,a0*0.9),a4,3)},
i00(a6,a7,a8){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=a7.a,a3=a7.b,a4=a3*0.94,a5=A.w.j(0.2)
$.S()
x=B.I()
x.r=a5.gp(0)
a6.aP(new B.a3(0,a4,0+a2,a4+(a3-a4)),x)
w=a2*0.62
v=a2*0.3
u=a3*0.62
x=a4-u
a5=w+v
t=B.I()
t.r=A.bo.gp(0)
a6.aP(new B.a3(w,x,a5,x+u),t)
for(t=a6.a,s=a8*1.5,r=v*0.2,q=u*0.1,p=0;p<4;++p)for(o=x+u*(0.1+p*0.17),n=o+q,m=0;m<3;++m){l=w+v*(0.12+m*0.3)
k=A.o.F(p+m+A.k.bh(s),3)===0?A.dP:A.aQ.j(0.6)
$.S()
j=new B.ap(A.R,A.N,A.U,A.V,A.S)
j.r=k.gp(0)
i=j.G()
t.drawRect(B.bG(new B.a3(l,o,l+r,n)),i)
i.delete()}s=w+v*0.38
r=u*0.16
q=a4-r
$.S()
o=B.I()
o.r=A.fV.gp(0)
a6.aP(new B.a3(s,q,s+v*0.24,q+r),o)
o=x-a3*0.09
r=a3*0.02
o=B.bt(new B.a3(w,o,a5,o+a3*0.08),new B.aP(r,r))
a5=B.I()
a5.r=A.aC.gp(0)
a6.az(o,a5)
a5=a3*0.05
o=a3*0.06
D.r2(a6,"JOBS",new B.t(w+v/2,x-a5),o,A.c,9999)
h=A.k.E(a8/2.8,0,1)
x=a2*0.12
g=x+(w+v*0.3-x)*A.dx.av(0,h)
x=h<1
f=x?Math.abs(Math.sin(a8*12))*a3*0.02:0
s=h>=1
q=s?(Math.sin(a8*6)+1)/2:0
E.AZ(a6,new B.t(g,a4),a3*0.6,a8,!1,f,2,A.b5,A.o9,s,q)
if(x){x=B.bt(B.bJ(new B.t(g-a3*0.12,a4-a3*0.17-f),a3*0.075,a3*0.1),A.hA)
q=B.I()
q.r=A.fV.gp(0)
a6.az(x,q)}if(s){x=a8-2.8
D.agx(a6,new B.t(g+a5,a4-a3*0.78),"Hired! \ud83c\udf89",a3*0.07,x/0.4,A.c)
for(a5=x*0.8,x=a4-a3*0.5,s=a3*0.03,q=a8*8,e=0;e<6;++e){d=A.k.F(a5+e*0.17,1)
D.h4L(a6,new B.t(g+Math.sin(e*2.1)*a3*0.2,x-d*a3*0.25),s,q+e)}}a5=a2*0.04
x=a5+v
s=o+a3*0.3
r=B.bt(new B.a3(a5,o,x,s),new B.aP(r,r))
$.S()
q=B.I()
q.r=A.ij.gp(0)
a6.az(r,q)
for(x-=a5,r=a5+x*0.08,s-=o,q=x*0.84,n=s*0.24,a5+=x*0.14,x*=0.5,l=s*0.05,e=0;e<3;++e){k=(1-A.k.E((a8-e*0.5)/0.5,0,1))*a2*0.3
j=r+k
a0=e*0.3
a1=o+s*(0.08+a0)
a1=B.bt(new B.a3(j,a1,j+q,a1+n),A.hA)
j=new B.ap(A.R,A.N,A.U,A.V,A.S)
j.r=A.c.gp(0)
i=j.G()
t.drawRRect(B.el(a1),i)
i.delete()
k=a5+k
a0=o+s*(0.14+a0)
a1=new B.ap(A.R,A.N,A.U,A.V,A.S)
a1.r=A.bM.gp(0)
i=a1.G()
t.drawRect(B.bG(new B.a3(k,a0,k+x,a0+l)),i)
i.delete()}},
i5k(a1,a2,a3){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=a2.a,e=a2.b,d=e*0.94,a0=A.fV.j(0.6)
$.S()
x=B.I()
x.r=a0.gp(0)
a1.aP(new B.a3(0,d,0+f,d+(e-d)),x)
w=f*0.3
v=f*0.66
for(a0=v/12,x=e*0.14,u=a0+1,t=x+e*0.12,s=a1.a,r=0;r<12;++r){q=w+a0*r
p=new B.ap(A.R,A.N,A.U,A.V,A.S)
p.r=C.aA8[A.o.F(r,4)].gp(0)
o=p.G()
s.drawRect(B.bG(new B.a3(q,x,q+u,t)),o)
o.delete()}for(u=e*0.2,t=e*0.1,q=u+t,r=0;r<12;++r){p=w+a0*r
n=new B.ap(A.R,A.N,A.U,A.V,A.S)
n.r=C.aA8[A.o.F(r,4)].gp(0)
o=n.G()
s.drawArc.apply(s,[B.bG(new B.a3(p,u,p+a0,q)),0,180,!0,o])
o.delete()}a0=w+4
u=e*0.3
q=u+(d-u)
p=B.I()
p.r=A.fV.gp(0)
a1.aP(new B.a3(a0,u,a0+4,q),p)
p=w+v
a0=p-8
n=B.I()
n.r=A.fV.gp(0)
a1.aP(new B.a3(a0,u,a0+4,q),n)
n=e*0.68
q=n+e*0.26
a0=B.bt(new B.a3(w,n,p,q),A.i9)
u=B.I()
u.r=A.ij.gp(0)
a1.az(a0,u)
for(a0=p-w,u=a0/6,p=n+2,a0/=12,q=p+(q-n-4),r=0;r<6;++r){m=w+u*r
l=new B.ap(A.R,A.N,A.U,A.V,A.S)
l.r=((r&1)===0?A.bx:A.bG).j(0.9).gp(0)
o=l.G()
s.drawRect(B.bG(new B.a3(m,p,m+a0,q)),o)
o.delete()}a0=w+v*0.2
u=e*0.62
k=new B.t(a0,u)
q=e*0.17
p=e*0.03
m=B.bt(B.bJ(k,e*0.11,q),new B.aP(p,p))
l=B.I()
l.r=A.cp.gp(0)
a1.az(m,l)
l=-e
q=B.bJ(k.a9(0,new B.t(0,l*0.05)),e*0.04,q)
m=B.I()
m.r=A.fs.gp(0)
a1.dO(q,m)
for(q=a3*0.8,l*=0.08,m=e*0.015,r=0;r<3;++r){j=A.k.F(q+r*0.33,1)
i=Math.sin(j*6+r)
h=j*e
g=new B.ap(A.R,A.N,A.U,A.V,A.S)
g.r=A.c.j(0.6*(1-j)).gp(0)
o=g.G()
s.drawCircle(a0+i*5,u+(l-h*0.14),m+h*0.02,o)
o.delete()}for(a0=w+v*0.5,q=e*0.018,r=0;r<5;++r){m=B.bJ(new B.t(a0,u),x,e*(0.1+r*0.01))
l=new B.ap(A.R,A.N,A.U,A.V,A.S)
l.b=A.aa
l.c=q
l.r=A.bG.gp(0)
l.d=A.bE
o=l.G()
s.drawArc.apply(s,[B.bG(m),(0.4+r*0.1)*57.29577951308232,108.8619810748564,!1,o])
o.delete()}for(a0=e*0.63,x=e*0.032,r=0;r<4;++r){u=A.o.F(r,2)
q=A.o.ao(r,2)
m=(r&1)===0?A.ce:A.vH
l=new B.ap(A.R,A.N,A.U,A.V,A.S)
l.r=m.gp(0)
o=l.G()
s.drawCircle(w+v*(0.72+0.06*u)+r*e*0.02,a0+q*e*0.035,x,o)
o.delete()}E.AZ(a1,new B.t(f*0.14,d),n,a3,!1,0,1,A.bG,G.agl,!0,(Math.sin(a3*5)+1)/2)
for(a0=a3*0.45,x=f*0.16,u=e*0.45,s=e*0.06,r=0;r<5;++r){j=A.k.F(a0+r*0.2,1)
D.r2(a1,"\u2665",new B.t(x+Math.sin(j*5+r)*e*0.08+r*e*0.03,u-j*e*0.4),s,A.aw.j(1-j),9999)}a0=w+v/2
x=e*0.08
p=B.bt(B.bJ(new B.t(a0,x),t,v*0.7),new B.aP(p,p))
$.S()
t=B.I()
t.r=A.av.gp(0)
a1.az(p,t)
D.r2(a1,"NGMY STORE \xb7 African food",new B.t(a0,x),e*0.05,A.dP,v*0.64)},
i5z(d,e,f){var x,w,v,u,t,s,r,q=e.a,p=e.b,o=p*0.94,n=A.w.j(0.2)
$.S()
x=B.I()
x.r=n.gp(0)
d.aP(new B.a3(0,o,0+q,o+(p-o)),x)
w=A.o.F(A.o.ao(Date.now(),6000)*3+A.o.E(A.k.bh(f/2),0,2),14)
v=A.k.F(f,2)
u=v<1
x=p*0.68
n=u?(Math.sin(f*8)+1)/2:0
t=u?Math.abs(Math.sin(f*8))*p*0.01:0
E.AZ(d,new B.t(q*0.25,o),x,f,!1,t,2,A.cV,F.mC,u,n)
n=u?0:(Math.sin(f*8)+1)/2
t=u?0:Math.abs(Math.sin(f*8))*p*0.01
E.AZ(d,new B.t(q*0.75,o),x,f,!1,t,0,A.bk,C.afn,!u,n)
s=new D.fvK(p,q)
n=p*0.15
if(u){x=C.azd[w].a
D.agx(d,new B.t(q*0.27,n),x,s.$1(x),v/0.25,A.ob)}else{x=C.azd[w].b
D.agx(d,new B.t(q*0.73,n),x,s.$1(x),(v-1)/0.25,A.eA)}for(n=q*0.5,x=p*0.07,t=f*2,r=0;r<3;++r)D.r2(d,"\u2192",new B.t(n,p*(0.35+r*0.1)),x,A.c.j(0.3+0.5*A.k.F(t+r,1)),9999)},
i4t(a1,a2,a3){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=a2.a,e=a2.b,d=e*0.94,a0=A.w.j(0.2)
$.S()
x=B.I()
x.r=a0.gp(0)
a1.aP(new B.a3(0,d,0+f,d+(e-d)),x)
x=f*0.3
w=B.bJ(new B.t(f*0.6,e*0.45),e*0.7,Math.min(x,e*0.55))
a0=B.bt(w,A.i9)
v=B.I()
v.r=A.c.gp(0)
a1.az(a0,v)
for(a0=w.d,v=w.b,u=a0-v,t=u*0.03,s=a1.a,r=w.a,q=w.c,p=q-r,o=r+p*0.1,n=0;n<9;++n){m=v+u*(0.1+n*0.095)
l=A.o.F(n,3)===2?0.5:0.8
k=new B.ap(A.R,A.N,A.U,A.V,A.S)
k.r=A.cs.gp(0)
j=k.G()
s.drawRect(B.bG(new B.a3(o,m,o+p*l,m+t)),j)
j.delete()}i=A.k.E(a3/3,0,1)
h=v+u*i
if(i<1){a0=r-8
u=h-2
p=a0+(p+16)
t=B.I()
t.r=A.bj.gp(0)
a1.aP(new B.a3(a0,u,p,u+4),t)
t=A.bj.j(0.18)
u=B.I()
u.r=t.gp(0)
a1.aP(new B.a3(a0,v,p,v+(h-v)),u)}else{n=A.k.E((a3-3)/0.4,0,1)
u=A.lr.av(0,n)
t=B.I()
t.r=A.bx.gp(0)
a1.ad(new B.t(q,v),e*0.08*u,t)
D.r2(a1,"PDF",new B.t(q,v),e*0.045*n,A.c,9999)
v=e*0.06
D.r2(a1,"\u2713 Saved",new B.t(w.gbL().a,a0+v),v,A.c.j(n),9999)}a0=a3*4
v=Math.sin(a0)
E.AZ(a1,new B.t(f*0.2,d),e*0.66,a3,!0,Math.abs(Math.sin(a0))*e*0.01,0,A.cw,F.mC,!1,(v+1)/2)
g=B.bJ(new B.t(x,e*0.3),e*0.18,e*0.1)
x=e*0.02
x=B.bt(g,new B.aP(x,x))
v=B.I()
v.r=A.av.gp(0)
a1.az(x,v)
v=e*0.015
v=B.bt(g.cr(-3),new B.aP(v,v))
x=A.bj.j(0.35+0.3*Math.sin(a3*6))
a0=B.I()
a0.r=x.gp(0)
a1.az(v,a0)},
i_H(a6,a7,a8){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=a7.a,a3=a7.b,a4=a3*0.94,a5=A.w.j(0.2)
$.S()
x=B.I()
x.r=a5.gp(0)
a6.aP(new B.a3(0,a4,0+a2,a4+(a3-a4)),x)
w=B.bJ(new B.t(a2*0.62,a3*0.47),a3*0.8,Math.min(a2*0.4,a3*0.75))
x=B.bt(w,A.mV)
a5=B.I()
a5.r=A.c.gp(0)
a6.az(x,a5)
a5=w.a
x=w.c
v=x-a5
u=w.b
t=w.d-u
D.r2(a6,"INVOICE",new B.t(a5+v*0.3,u+t*0.09),t*0.07,A.d7,9999)
for(s=a6.a,r=v*0.08,q=a5+r,p=t*0.045,o=q+v*0.5,n=x-v*0.17,m=t*0.02,l=t*0.06,k=a8-0.5,j=0,i=0;i<3;++i){h=A.k.E((k-i*0.6)/0.4,0,1)
if(h<=0)continue
j+=C.ayf[i].b
g=u+t*(0.24+i*0.14)
J.bm(s.save())
s.translate((1-h)*30,0)
f=A.cs.j(h)
$.S()
e=new B.ap(A.R,A.N,A.U,A.V,A.S)
e.r=f.gp(0)
d=e.G()
s.drawRect(B.bG(new B.a3(q,g,o,g+p)),d)
d.delete()
D.r2(a6,"$"+C.ayf[i].b,new B.t(n,g+m),l,A.av.j(h),9999)
s.restore()}p=u+t*0.7
a6.bo(new B.t(q,p),new B.t(x-r,p),E.yK(A.dm,1.4))
D.r2(a6,"TOTAL  $"+j,new B.t(w.gbL().a,u+t*0.78),t*0.075,A.av,v*0.8)
x=a8>2.8
if(x){r=a8-2.8
i=A.k.E(r/0.3,0,1)
J.bm(s.save())
s.translate(w.gbL().a,u+t*0.55)
a6.ig(0,-0.3)
a6.bW(0,2-A.eu.av(0,i))
a6.az(B.bt(B.bJ(A.I,t*0.17,v*0.6),A.hB),E.yK(A.cV.j(i),3.5))
D.r2(a6,"PAID",A.I,t*0.11,A.cV.j(i),9999)
s.restore()
for(v=r*0.7,a5-=a3*0.05,u=a3*0.7,t=a3*0.03,s=a8*8,a0=0;a0<6;++a0){a1=A.k.F(v+a0*0.17,1)
D.h4L(a6,new B.t(a5+Math.sin(a0*2)*a3*0.1,u-a1*a3*0.5),t,s+a0)}}a5=x?(Math.sin(a8*6)+1)/2:0
E.AZ(a6,new B.t(a2*0.2,a4),a3*0.66,a8,!0,0,1,A.bB,A.o9,x,a5)},
hwt(d,e,f,g){var x,w=B.bJ(e,f*0.62,f*2.5),v=f*0.31,u=B.bt(w,new B.aP(v,v))
$.S()
x=B.I()
x.r=A.c.gp(0)
d.az(u,x)
d.az(B.bt(w,new B.aP(v,v)),E.yK(A.bB,f*0.05))
D.r2(d,"\u2665 "+g,e,f*0.4,A.pM,f*2.2)},
yX(d,e,f,g,a0,a1,a2){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
if(a2<=0)return
x=new D.fOL(e,f,g)
w=A.k.dg(22*A.k.E(a2,0,1))
for(v=a1-a0,u=d.a,t=e,s=1;s<=w;++s,t=q){r=Math.min(s/22,A.k.E(a2,0,1))
q=x.$1(r)
$.S()
p=new B.ap(A.R,A.N,A.U,A.V,A.S)
p.b=A.aa
o=p.c=a0+v*r
p.r=A.o9.gp(0)
p.d=A.bE
n=p.G()
p=t.a
m=t.b
l=q.a
k=q.b
u.drawLine.apply(u,[p,m,l,k,n])
n.delete()
j=-o*0.18
i=B.ar(A.o9,A.c,0.18)
i.toString
h=new B.ap(A.R,A.N,A.U,A.V,A.S)
h.b=A.aa
h.c=o*0.28
h.r=i.gp(0)
h.d=A.bE
n=h.G()
u.drawLine.apply(u,[p+j,m+0,l+j,k+0,n])
n.delete()}},
iho(d,e,f,g){var x,w,v,u,t,s
for(x=g*0.45,w=e.a,v=g*2,u=e.b,t=0;t<7;++t){s=A.k.F(x+t/7,1)
D.r2(d,"\u2665",new B.t(w+Math.sin(t*2.3+v)*f*0.12+(t-3.5)*f*0.03,u-s*f*0.45),f*(0.04+0.02*A.o.F(t,3)),B.ar(A.bB,A.ih,A.o.F(t,2)).j((1-s)*0.9),9999)}},
hXm(b4,b5,b6){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=null,a8=b5.a,a9=b5.b,b0=a9*0.94,b1=A.e_.j(0.7),b2=$.S(),b3=B.I()
b3.r=b1.gp(0)
b4.aP(new B.a3(0,b0,0+a8,b0+(a9-b0)),b3)
x=new D.fio(b6)
w=new D.fil()
v=Math.min(a8*0.34,a9*0.62)
b3=a8*0.64
b1=v*0.2
u=b0-b1
t=new B.t(b3,u)
s=v*0.5
r=v*0.08
r=B.bt(B.bJ(t,s,v*2.15),new B.aP(r,r))
q=B.I()
q.r=A.hJ.gp(0)
b4.az(r,q)
b2=b2.r
q=y.v
p=new B.aF(b2,A.ah,a7,a7,B.a([],q))
r=u-b1
p.D(new B.aY(b3,r))
o=b3-s
n=v*0.3
m=u-n
l=b3-v
k=v*0.16
j=u-k
p.D(new B.c5(o,m,l,j))
i=u+v*0.14
p.D(new B.aq(l,i))
l=u+v*0.02
k=u+k
p.D(new B.c5(o,l,b3,k))
p.D(new B.bs())
o=B.I()
o.r=A.fN.gp(0)
b4.aG(p,o)
h=new B.aF(b2,A.ah,a7,a7,B.a([],q))
h.D(new B.aY(b3,r))
s=b3+s
r=b3+v
h.D(new B.c5(s,m,r,j))
h.D(new B.aq(r,i))
h.D(new B.c5(s,l,b3,k))
h.D(new B.bs())
k=B.I()
k.r=A.hU.gp(0)
b4.aG(h,k)
for(b2=v*0.85,s=b3-b2,r=u-v*0.06,q=b3-b1,u-=v*0.1,o=b4.a,b1=b3+b1,b2=b3+b2,g=0;g<3;++g){b3=g*v*0.06
m=r+b3
b3=u+b3
l=new B.ap(A.R,A.N,A.U,A.V,A.S)
l.b=A.aa
l.c=1.4
l.r=C.aiw.gp(0)
l.d=A.bE
f=l.G()
o.drawLine.apply(o,[s,m,q,b3,f])
f.delete()
l=new B.ap(A.R,A.N,A.U,A.V,A.S)
l.b=A.aa
l.c=1.4
l.r=C.aiw.gp(0)
l.d=A.bE
f=l.G()
o.drawLine.apply(o,[b1,b3,b2,m,f])
f.delete()}e=w.$1(x.$2(0.2,1))
b1=t.aF(0,new B.t(0,n))
b2=b6*4
b3=Math.sin(b2)
u=B.I()
u.sam(new B.c2(A.A,0.5,A.x,a7,0,B.a([A.dP.j(0.6*e),A.L],y.O),a7,a7).aB(0,B.bY(t.aF(0,new B.t(0,n)),v*0.7)))
b4.ad(b1,v*(0.5+0.1*b3)*e,u)
d=t.aF(0,new B.t(0,v*0.12))
a0=new D.fin(t,a9,d)
a1=w.$1(x.$2(0.5,1.1))
a2=w.$1(x.$2(1.3,1.2))
for(b1=b6*2,a3=0;a3<4;++a3){b3=C.cKd[a3]
a4=b3.a
u=a0.$2(a4,b3.b)
s=Math.sin(b1+a4*9)
r=new B.ap(A.R,A.N,A.U,A.V,A.S)
r.r=A.cV.j(0.9).gp(0)
f=r.G()
o.drawCircle(u.a,u.b,a9*b3.c*a2+s*1.2,f)
f.delete()}D.yX(b4,d,d.a9(0,new B.t(0,-a9*0.08)),a0.$2(0,0.22),a9*0.05,a9*0.035,a1)
a5=w.$1(x.$2(1.2,0.8))
b1=a9*0.032
b3=a9*0.02
D.yX(b4,a0.$2(0,0.22),a0.$2(-0.06,0.28),a0.$2(-0.2,0.36),b1,b3,a5)
D.yX(b4,a0.$2(0,0.22),a0.$2(0.06,0.28),a0.$2(0.2,0.36),b1,b3,a5)
a6=w.$1(x.$2(2.4,0.7))
D.yX(b4,a0.$2(0,0.22),a0.$2(0,0.4),a0.$2(0,0.57),a9*0.03,a9*0.016,a6)
b3=new D.fim(x,b4,b6)
b1=a9*0.088
b3.$5(2,"Mama",a0.$2(-0.2,0.36),b1,1.9)
b3.$5(3,"Baba",a0.$2(0.2,0.36),b1,2.4)
b3.$5(4,"Dada",a0.$2(0,0.57),a9*0.08,3)
if(b6>3.6)D.iho(b4,a0.$2(0,0.36),a9,b6-3.6)
b1=a8*0.2
b3=Math.sin(b2)
E.AZ(b4,new B.t(b1,b0),a9*0.66,b6,!1,Math.abs(Math.sin(b2))*a9*0.01,2,A.aD,F.mC,b6>3,(b3+1)/2)
D.agx(b4,new B.t(b1,a9*0.1),"My tree!",a9*0.06,x.$2(3,0.4),A.c)},
i6k(d,e,f){var x,w,v,u,t,s,r,q,p,o,n=e.a,m=e.b,l=m*0.94,k=A.w.j(0.2)
$.S()
x=B.I()
x.r=k.gp(0)
d.aP(new B.a3(0,l,0+n,l+(m-l)),x)
w=A.k.bh(A.k.E(f/5.5,0,1)*9)+1
for(v=n*0.62,k=l-m*0.03,x=m*0.26,u=m*0.07,t=d.a,s=0;s<w;++s){r=k-s*m*0.055
q=B.bJ(new B.t(v,r),u,x)
p=new B.ap(A.R,A.N,A.U,A.V,A.S)
p.r=A.bG.gp(0)
o=p.G()
t.drawOval(B.bG(q),o)
o.delete()
r=B.bJ(new B.t(v,r),u,x)
q=new B.ap(A.R,A.N,A.U,A.V,A.S)
q.b=A.aa
q.c=2
q.r=A.pV.gp(0)
q.d=A.bE
o=q.G()
t.drawOval(B.bG(r),o)
o.delete()}k=m*0.1
D.h4L(d,new B.t(v,k+A.k.F(f*1.6,1)*(l-u-w*m*0.055-k)),m*0.05,f*8)
k=m*0.08
D.r2(d,"$"+w*25,new B.t(v,k),k,A.dP,9999)
k=f*5
u=Math.sin(k)
E.AZ(d,new B.t(n*0.25,l),m*0.66,f,!1,Math.abs(Math.sin(k))*m*0.012,1,A.cw,F.mC,!0,(u+1)/2)},
hZG(d,a0,a1){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=a0.a,g=a0.b,f=g*0.94,e=A.w.j(0.2)
$.S()
x=B.I()
x.r=e.gp(0)
d.aP(new B.a3(0,f,0+h,f+(g-f)),x)
for(e=d.a,x=g*0.012,w=g*0.55,v=a1*4,u=a1*2,t=g*0.15,s=g*0.03,r=0;r<3;r=n){q=Math.sin(v+r*1.7)
J.bm(e.save())
e.translate(h*(0.5+0.14*r),w-Math.abs(q)*g*0.3)
e.rotate((u+r)*180/3.141592653589793,0,0)
q=B.bt(B.bJ(A.I,t,t),new B.aP(s,s))
p=new B.ap(A.R,A.N,A.U,A.V,A.S)
p.r=A.c.gp(0)
o=p.G()
e.drawRRect(B.el(q),o)
o.delete()
n=r+1
q=n*2
p=r===0
m=0
for(;;){if(!(m<q-(p?1:0)))break
l=m*2.1
k=Math.cos(l)
l=Math.sin(l)
j=new B.ap(A.R,A.N,A.U,A.V,A.S)
j.r=A.bl.gp(0)
o=j.G()
e.drawCircle(k*g*0.04,l*g*0.04,x,o)
o.delete();++m}e.restore()}for(e=a1*0.6,w=g*0.25,v=g*0.06,r=0;r<5;++r){i=A.k.F(e+r*0.2,1)
D.r2(d,"\u2605",new B.t(h*(0.45+r*0.1),w-i*g*0.2),v,A.dP.j(1-i),9999)}e=h*0.22
w=a1*6
v=Math.sin(w)
E.AZ(d,new B.t(e,f),g*0.66,a1,!0,Math.abs(Math.sin(w))*g*0.015,0,A.ce,F.mC,!0,(v+1)/2)
v=f-g*0.28
s=B.bt(B.bJ(new B.t(e,v),g*0.07,g*0.16),new B.aP(s,s))
$.S()
w=B.I()
w.r=A.cp.gp(0)
d.az(s,w)
w=B.I()
w.r=A.aw.gp(0)
d.ad(new B.t(e+g*0.05,v),x,w)},
i04(d,e,a0){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=e.a,j=e.b,i=j*0.94,h=A.w.j(0.2),g=$.S(),f=B.I()
f.r=h.gp(0)
d.aP(new B.a3(0,i,0+k,i+(j-i)),f)
f=k*0.42
h=j*0.18
x=j*0.08
w=B.bt(new B.a3(f,h,f+k*0.5,h+j*0.5),new B.aP(x,x))
v=new B.aF(g.r,A.ah,null,null,B.a([],y.v))
v.D(new B.iN(w))
d.aG(v,E.yK(A.c.j(0.5),4))
u=new B.Ta(new B.tm(B.xs(v),!1,B.a([],y.L))).gI(0)
for(h=a0*0.18,g=u.a,x=u.b,t=g.e,s=j*0.016,r=d.a,q=0;q<10;++q){p=A.k.F(h+q/10,1)
g.il()
o=t[x].b
o===$&&B.c()
o=o.a.length()
g.il()
o=t[x].Ha(p*o).a
p=new B.ap(A.R,A.N,A.U,A.V,A.S)
p.r=A.dP.gp(0)
n=p.G()
r.drawCircle(o.a,o.b,s,n)
n.delete()}m=a0>1.5
h=j*0.43
l=new B.t(k*0.92,h)
if(m){g=A.dP.j(0.4+0.2*Math.sin(a0*8))
x=B.I()
x.r=g.gp(0)
x.z=A.zC
d.ad(l,j*0.2,x)}g=j*0.07
x=m?A.ob:A.bM
t=B.I()
t.r=x.gp(0)
d.ad(l,g,t)
h=B.bt(B.bJ(new B.t(f,h),j*0.2,j*0.1),A.i9)
t=B.I()
t.r=A.cV.gp(0)
d.az(h,t)
D.r2(d,"+",new B.t(f,j*0.36),g,A.c,9999)
h=m?(Math.sin(a0*6)+1)/2:0
f=m?Math.abs(Math.sin(a0*6))*j*0.012:0
E.AZ(d,new B.t(k*0.2,i),j*0.68,a0,!1,f,0,A.bP,F.mC,m,h)
if(m)D.agx(d,new B.t(k*0.24,j*0.16),"It works!",g,(a0-1.5)/0.4,A.c)},
i_i(d,a0,a1){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=a0.a,g=a0.b,f=g*0.94,e=A.w.j(0.2)
$.S()
x=B.I()
x.r=e.gp(0)
d.aP(new B.a3(0,f,0+h,f+(g-f)),x)
w=A.k.E((a1-0.3)/0.4,0,1)
v=A.k.E((a1-1.8)/0.4,0,1)
x=g*0.2
e=g*0.065
D.agx(d,new B.t(h*0.3,x),"How do I enroll?",e,w,A.ob)
if(a1>1&&a1<1.8)for(u=h*0.72,t=g*0.38,s=a1*9,r=g*0.015,q=d.a,p=0;p<3;++p){o=Math.sin(s+p)
n=new B.ap(A.R,A.N,A.U,A.V,A.S)
n.r=A.c.gp(0)
m=n.G()
q.drawCircle(u+p*g*0.05,t-Math.abs(o)*g*0.02,r,m)
m.delete()}D.agx(d,new B.t(h*0.7,g*0.38),"Tap Civic Registry!",e,v,A.eA)
E.AZ(d,new B.t(h*0.2,f),g*0.62,a1,!1,0,2,A.aw,F.mC,a1<1,0)
l=h*0.78
k=f-g*0.28
e=g*0.04
x=B.bt(B.bJ(new B.t(l,k),g*0.22,x),new B.aP(e,e))
u=B.I()
u.r=A.aL.gp(0)
d.az(x,u)
u=g*0.18
x=k-u
e=B.bt(B.bJ(new B.t(l,x),g*0.14,u),new B.aP(e,e))
u=B.I()
u.r=A.cs.gp(0)
d.az(e,u)
for(e=d.a,u=a1*1.1,t=g*0.02,j=0;j<2;++j){i=F.hy[j]
s=A.k.F(u,1)>0.08?A.b9:A.eR
r=new B.ap(A.R,A.N,A.U,A.V,A.S)
r.r=s.gp(0)
m=r.G()
e.drawCircle(l+i*g*0.04,x,t,m)
m.delete()}d.bo(new B.t(l,k-g*0.25),new B.t(l,k-g*0.3),E.yK(A.ae,3))
e=B.I()
e.r=A.aw.gp(0)
d.ad(new B.t(l,k-g*0.31),g*0.015,e)},
fvQ:function fvQ(d,e,f){this.a=d
this.b=e
this.c=f},
fvK:function fvK(d,e){this.a=d
this.b=e},
fOL:function fOL(d,e,f){this.a=d
this.b=e
this.c=f},
fio:function fio(d){this.a=d},
fil:function fil(){},
fin:function fin(d,e,f){this.a=d
this.b=e
this.c=f},
fim:function fim(d,e,f){this.a=d
this.b=e
this.c=f},
aOU(d,e,f,g,h,i,j,k){var x=new D.fmS(e,h,i,k),w=x.$1(g),v=w.b.c
if(v>j&&v>0)w=x.$1(Math.max(2,g*j/v))
x=w.b
v=x.c
x=x.a.c
w.a3(d,f.aF(0,new B.t(v/2,x.gbb(x)/2)))},
LD(d,e,f,a0){var x,w,v,u,t,s,r,q,p,o,n,m=A.o.F(a0==null?A.k.bh(f/6):a0,11),l=A.k.F(f,6),k=C.dcS[m],j=e.a,i=e.b,h=0+j,g=0+i
$.S()
x=B.I()
x.sam(new B.a9(A.ay,A.aE,A.x,B.a([k.c,k.d],y.O),null,null).aB(0,new B.a3(0,0,h,g)))
d.aP(new B.a3(0,0,h,g),x)
w=i*(j>=i?0.7:0.6)
g=d.a
J.bm(g.save())
g.clipRect(B.bG(new B.a3(0,0,h,0+w)),$.ms()[1],!0)
D.i7j(d,new B.av(j,w),m,l)
g.restore()
v=i-w
x=A.w.j(0.3)
u=B.I()
u.r=x.gp(0)
d.aP(new B.a3(0,w,h,w+v),u)
t=A.cv.av(0,A.k.E((l-0.2)/0.5,0,1))
J.bm(g.save())
g.translate((1-t)*j*0.25,0)
u=j/2
h=j*0.94
D.aOU(d,k.a,new B.t(u,w+v*0.3),v*0.36,A.c.j(t),!0,h,0)
D.aOU(d,k.b,new B.t(u,w+v*0.64),v*0.2,A.c.j(0.92*t),!1,h,0)
g.restore()
for(h=i*0.965,x=i*0.009,s=i*0.004,r=0;r<11;++r){q=r===m
p=q?s:0
o=new B.ap(A.R,A.N,A.U,A.V,A.S)
o.r=A.c.j(q?0.95:0.35).gp(0)
n=o.G()
g.drawCircle(u+(r-5)*i*0.035,h,x+p,n)
n.delete()}h=j-i*0.07
g=i*0.06
D.aOU(d,"AD",new B.t(h,g),i*0.045,A.c.j(0.85),!0,9999,1)
x=i*0.02
x=B.bt(B.bJ(new B.t(h,g),i*0.065,i*0.1),new B.aP(x,x))
g=B.I()
g.b=A.aa
g.c=1
g.r=A.ae.gp(0)
g.d=A.bE
d.az(x,g)},
S2(d,e,f,g){var x,w=d.a
J.bm(w.save())
w.clipRect(B.bG(new B.a3(0,0,0+e.a,0+e.b)),$.ms()[1],!0)
x=C.kl[A.o.F(f,8)].e
if(x===-2)D.hXw(d,e,g)
else if(x===-1)D.LD(d,e,g,null)
else D.LD(d,e,g,x)
w.restore()},
hXw(d,a0,a1){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=a0.a,h=a0.b,g=new B.V(Date.now(),0,!1),f=0+i,e=0+h
$.S()
x=B.I()
x.sam(C.c1S.aB(0,new B.a3(0,0,f,e)))
d.aP(new B.a3(0,0,f,e),x)
x=B.I()
x.r=A.bx.gp(0)
d.aP(new B.a3(0,0,f,0+h*0.15),x)
D.aOU(d,A.os[B.bL(g)-1]+" "+B.bC(g),new B.t(i/2,h*0.075),h*0.08,A.c,!0,i*0.9,0)
w=i/7
for(f=h*0.21,e=h*0.05,v=0;v<7;++v)D.aOU(d,C.drW[v],new B.t(w*(v+0.5),f),e,A.aB,!0,9999,0)
u=B.c3(B.bC(g),B.bL(g),1,0,0,0,0,0)
t=B.bW(B.c3(B.bC(g),B.bL(g)+1,0,0,0,0,0,0))
s=B.mg(u)-1
r=h*0.74/A.k.dg((s+t)/7)
for(f=h*0.26,e=a1*3,x=d.a,q=1;q<=t;++q){p=s+q-1
o=w*(A.o.F(p,7)+0.5)
n=f+r*(A.o.ao(p,7)+0.5)
if(q===B.bW(g)){m=Math.min(w,r)
l=A.aQ.j(0.5+0.2*Math.sin(e))
$.S()
k=new B.ap(A.R,A.N,A.U,A.V,A.S)
k.r=l.gp(0)
j=k.G()
x.drawCircle(o,n,m*0.42,j)
j.delete()}m=Math.min(w,r)
l=q===B.bW(g)?A.c:A.ae
D.aOU(d,""+q,new B.t(o,n),m*0.42,l,!0,9999,0)}},
fmS:function fmS(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
wD:function wD(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
w3:function w3(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
h9n(d,e,f,g,h,a0){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i=d.a
J.bm(i.save())
x=e.a
w=e.b
v=0+x
u=0+w
i.clipRect(B.bG(new B.a3(0,0,v,u)),$.ms()[1],!0)
if(h<3){$.S()
t=B.I()
t.r=C.bc9.gp(0)
d.aP(new B.a3(0,0,v,u),t)
if(h<0.5)u=h/0.5
else u=h>2.4?(3-h)/0.6:1
s=A.k.E(u,0,1)
u=e.ei(A.I)
t=e.gdC()
r=B.I()
r.sam(new B.c2(A.A,0.5,A.x,j,0,B.a([A.aQ.j(0.35*s),A.L],y.O),j,j).aB(0,B.bY(e.ei(A.I),e.gdC()*0.5)))
d.ad(u,t*0.5,r)
D.GL(d,"NGMY",new B.t(0,w*0.36),w*0.2,A.c.j(s),A.K,w*0.03,x)
D.GL(d,"T V",new B.t(0,w*0.6),w*0.08,A.aQ.j(s),A.K,w*0.05,x)
r=x*0.3
t=w*0.78
u=B.I()
u.r=A.aQ.j(s).gp(0)
d.aP(new B.a3(r,t,r+x*0.4*(h/3),t+3),u)}else if(a0>=0)D.S2(d,e,a0,g)
else{q=A.k.E((h-3)/0.5,0,1)
p=A.o.F(f,10)
switch(p){case 0:D.i5V(d,e,g)
break
case 1:D.hY8(d,e,g)
break
case 2:D.i5a(d,e,g)
break
case 3:D.i1Y(d,e,g)
break
case 4:D.i3f(d,e,g)
break
case 5:D.i5b(d,e,g)
break
case 6:D.hZu(d,e,g)
break
case 7:D.i5U(d,e,g)
break
case 8:D.i42(d,e,g)
break
default:D.hZH(d,e,g)}t=x-w*0.34
r=w*0.04
o=w*0.03
n=B.bt(new B.a3(t,r,t+w*0.3,r+w*0.1),new B.aP(o,o))
$.S()
o=B.I()
o.r=A.w.j(0.55).gp(0)
d.az(n,o)
D.GL(d,"NGMY",new B.t(n.a+w*0.025,n.b+w*0.012),w*0.07,A.c,A.bi,1,j)
o=w*0.86
t=B.I()
t.r=A.w.j(0.6).gp(0)
d.aP(new B.a3(0,o,v,o+w*0.14),t)
D.GL(d,"CH "+(f+1)+"  \xb7  "+C.R0[p].a,new B.t(r,w*0.885),w*0.075,A.c,A.bi,0,x-w*0.08)
if(q<1){t=B.I()
t.r=A.c.j(0.6*(1-q)).gp(0)
d.aP(new B.a3(0,0,v,u),t)}}$.S()
m=B.I()
m.r=A.w.j(0.07).gp(0)
for(l=0;l<w;l+=3){k=m.G()
i.drawRect(B.bG(new B.a3(0,l,v,l+1)),k)
k.delete()}v=new B.aF($.S().r,A.ah,j,j,B.a([],y.v))
v.D(new B.aY(0,0))
v.D(new B.aq(x*0.45,0))
v.D(new B.aq(0,w*0.5))
v.D(new B.bs())
w=B.I()
w.r=A.c.j(0.04).gp(0)
d.aG(v,w)
i.restore()},
GL(d,e,f,g,h,i,j,k){var x=null,w=B.fv(x,x,1,x,B.cS(x,x,x,x,x,x,x,x,x,B.l(x,x,h,x,x,x,x,x,x,x,x,g,x,x,A.u,x,x,!0,x,j,x,x,x,x,x,x),e),i,A.bZ,x,A.dA,A.bW),v=k==null
w.nZ(v?9999:k)
w.a3(d,f.a9(0,new B.t(i===A.K&&!v?(k-w.b.c)/2:0,0)))},
aOP(d,e,f,g,h,i,j){var x=new D.fkF(e,h,i,j),w=x.$1(g),v=w.b.c,u=f.c-f.a
if(v>u&&v>0)w=x.$1(g*u/v)
x=f.gbL()
v=w.b
u=v.c
v=v.a.c
w.a3(d,x.aF(0,new B.t(u/2,v.gbb(v)/2)))},
i5V(d5,d6,d7){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5=null,c6=d6.a,c7=d6.b,c8=A.k.F(d7,14),c9=new D.fw9(c8),d0=new D.fw5(),d1=0+c6,d2=0+c7,d3=$.S(),d4=B.I()
d4.sam(C.c3_.aB(0,new B.a3(0,0,d1,d2)))
d5.aP(new B.a3(0,0,d1,d2),d4)
x=c6*0.34
w=new D.fw8(x,c7)
v=w.$2(0,0.5)
d4=c7*0.75
u=B.I()
u.sam(new B.c2(A.A,0.5,A.x,c5,0,B.a([A.bL.j(0.55),A.L],y.O),c5,c5).aB(0,B.bY(v,d4)))
d5.ad(v,d4,u)
t=new B.e9()
t.d4(11)
for(d4=d7*2,u=d5.a,s=0;s<26;++s){r=t.ah()
q=t.ah()
p=t.ah()
o=new B.ap(A.R,A.N,A.U,A.V,A.S)
o.r=A.c.j(0.35+0.4*Math.sin(d4+s)).gp(0)
n=o.G()
u.drawCircle(r*c6,q*c7*0.45,0.6+p*1.1,n)
n.delete()}for(r=y.v,m=0;m<2;++m){q=B.a([],r)
l=new B.aF(d3.r,A.ah,c5,c5,q)
q.push(new B.aY(0,c7))
for(d3=m*2,p=m===0,k=0;k<=c6;k+=6){o=p?0.78:0.82
o=new B.aq(k,c7*o+Math.sin(k/(p?70:50)+d3)*c7*0.02)
q.push(o)
j=l.f
if(j!=null)o.by(j)
o=l.e
if(o!=null)o.a.delete()
l.e=null}d3=new B.aq(c6,c7)
q.push(d3)
q=l.f
if(q!=null)d3.by(q)
d3=l.e
if(d3!=null)d3.a.delete()
l.e=null
d3=$.S()
q=new B.ap(A.R,A.N,A.U,A.V,A.S)
q.r=(p?C.Xq:C.boh).gp(0)
n=q.G()
q=l.e
u.drawPath((q==null?l.e=new B.cm(l.gbw().a.snapshot()):q).a,n)
n.delete()}i=w.$2(0,0.81)
h=d0.$1(c9.$2(0.2,1.6))
g=d0.$1(c9.$2(2.4,2.6))
for(d3=d7*1.4,f=0;f<8;++f){r=C.aze[f]
e=r.a
d=r.b
a0=Math.sin(d3+e*7)*c7*0.006
q=w.$2(e,d)
p=q.a
q=q.b
r=c7*r.c
o=new B.ap(A.R,A.N,A.U,A.V,A.S)
o.r=A.hd.gp(0)
n=o.G()
u.drawCircle(p+a0,q+0,r*g,n)
n.delete()
q=w.$2(e,d-0.015)
p=q.a
q=q.b
o=new B.ap(A.R,A.N,A.U,A.V,A.S)
o.r=A.ed.gp(0)
n=o.G()
u.drawCircle(p+a0,q+0,r*0.82*g,n)
n.delete()}for(d3=c7*0.01,r=i.a,q=i.b,p=q+d3,o=c7*0.015,q+=o,j=c7*0.04,f=0;f<2;++f){a1=F.hy[f]*c7
D.yX(d5,i,new B.t(r+a1*0.04,p),new B.t(r+a1*0.12,q),j,d3,h)}r=c7*0.085
D.yX(d5,i,w.$2(0.02,0.7),w.$2(0,0.6),r,c7*0.055,h)
a2=d0.$1(c9.$2(1.8,1.6))
q=c7*0.05
p=c7*0.026
D.yX(d5,w.$2(0,0.6),w.$2(-0.1,0.55),w.$2(-0.34,0.44),q,p,a2)
D.yX(d5,w.$2(0,0.6),w.$2(0.1,0.55),w.$2(0.34,0.44),q,p,a2)
a3=d0.$1(c9.$2(3.2,1.3))
p=c7*0.024
a1=c7*0.018
D.yX(d5,w.$2(-0.34,0.44),w.$2(-0.17,0.33),w.$2(0,0.39),p,a1,a3)
D.yX(d5,w.$2(0.34,0.44),w.$2(0.17,0.33),w.$2(0,0.39),p,a1,a3)
a4=d0.$1(c9.$2(4.4,1.3))
a1=c7*0.02
p=c7*0.012
D.yX(d5,w.$2(0,0.39),w.$2(-0.1,0.3),w.$2(-0.17,0.2),a1,p,a4)
D.yX(d5,w.$2(0,0.39),w.$2(0.1,0.3),w.$2(0.17,0.2),a1,p,a4)
a1=c7*0.016
D.yX(d5,w.$2(-0.27,0.72),w.$2(-0.14,0.78),w.$2(0,0.7),a1,p,d0.$1(c9.$2(3.6,1)))
D.yX(d5,w.$2(0.27,0.72),w.$2(0.14,0.78),w.$2(0,0.7),a1,p,d0.$1(c9.$2(3.6,1)))
a5=new B.e9()
a5.d4(5)
for(a1=d7*1.6,a6=d7*1.3,a7=g*1.4,a8=c7*0.03,s=0;s<110;++s){a9=C.aze[A.o.F(s,8)]
b0=a5.ah()*3.141592653589793*2
b1=Math.sqrt(a5.ah())*a9.c*0.95
b2=w.$2(a9.a+Math.cos(b0)*b1,a9.b+Math.sin(b0)*b1)
b3=Math.sin(a1+s)
b4=b2.a
b2=b2.b
J.bm(u.save())
u.translate(b4+b3*c7*0.006,b2+0)
u.rotate((b0+Math.sin(a6+s)*0.2)*180/3.141592653589793,0,0)
b5=A.k.E(a7-A.o.F(s,10)*0.05,0,1)
b2=B.bJ(A.I,o*b5,a8*b5)
$.S()
b3=new B.ap(A.R,A.N,A.U,A.V,A.S)
b3.r=B.ar(A.be,A.et,(Math.sin(d4+s)+1)/2).gp(0)
n=b3.G()
u.drawOval(B.bG(b2),n)
n.delete()
u.restore()}b6=new D.fw6(c9,d5,d7,c8)
u=c7*0.075
b6.$5(0,"Bibi",w.$2(-0.27,0.72),u,5)
b6.$5(1,"Babu",w.$2(0.27,0.72),u,5.6)
b6.$5(2,"Mama",w.$2(-0.34,0.44),r,6.4)
b6.$5(3,"Baba",w.$2(0.34,0.44),r,7)
b6.$5(4,"Dada",w.$2(-0.17,0.2),u,8)
b6.$5(5,"Kaka",w.$2(0.17,0.2),u,8.6)
b7=new D.fw7(c9,d7,d5)
b7.$3(w.$2(0,0.7),c7*0.028,5.9)
b7.$3(w.$2(0,0.39),c7*0.035,7.4)
if(c8>9.3)for(r=(c8-9.3)*0.4,s=0;s<7;++s){b8=A.k.F(r+s/7,1)
D.GL(d5,"\u2665",w.$2(Math.sin(s*2.3+d4)*0.3,0.38-b8*0.3),c7*(0.04+0.02*A.o.F(s,3)),A.ih.j((1-b8)*0.85),A.bi,0,c5)}d4=c6*0.655+(1-d0.$1(c9.$2(1,0.9)))*c6*0.4
r=c7*0.1
o=d4+c6*0.315
b9=new B.a3(d4,r,o,r+c7*0.64)
a1=B.bt(b9,new B.aP(q,q))
$.S()
a6=B.I()
a6.r=C.jL.j(0.88).gp(0)
d5.az(a1,a6)
a6=B.bt(b9,new B.aP(q,q))
a1=B.I()
a1.b=A.aa
a1.c=p
a1.r=F.fz.gp(0)
d5.az(a6,a1)
c0=new D.fwa(b9,c7)
D.aOP(d5,"NGMY",c0.$2(0.13,0.06),c7*0.06,F.fz,!0,p)
D.aOP(d5,"Family",c0.$2(0.2,0.1),r,A.c,!0,0)
D.aOP(d5,"Tree",c0.$2(0.3,0.1),r,A.c,!0,0)
for(s=0;s<3;++s){c1=c9.$2(5.5+s*1.5,0.5)
if(c1<=0)continue
D.aOP(d5,"\u2665 "+C.c6h[s],c0.$2(0.43+s*0.075,0.06).eW(new B.t((1-c1)*30,0)),q,A.ie.j(c1),!1,0)}c2=c9.$2(11,0.5)
if(c2>0){c3=B.bJ(new B.t(b9.gbL().a,c7*0.67),u,(o-d4)*0.6*A.eu.av(0,c2))
d4=B.bt(c3,new B.aP(j,j))
$.S()
u=B.I()
u.r=F.fz.gp(0)
d5.az(d4,u)
if(c2>0.8)D.aOP(d5,"ngmy.org",c3.cr(-d3),q,C.jL,!0,0)}if(c8>11.6){d3=c7*0.82
D.aOP(d5,"Family is everything",new B.a3(0,d3,0+x*2,d3+q),q,A.c.j(A.k.E((c8-11.6)/0.5,0,1)),!0,0)}if(c8<0.4)c4=1-c8/0.4
else c4=c8>13.5?(c8-13.5)/0.5:0
if(c4>0){$.S()
d3=B.I()
d3.r=A.w.j(c4).gp(0)
d5.aP(new B.a3(0,0,d1,d2),d3)}},
hY8(d,e,a0){var x,w,v,u,t,s,r,q,p,o,n,m,l=null,k=e.a,j=e.b,i=0+k,h=0+j,g=$.S(),f=B.I()
f.sam(C.c23.aB(0,new B.a3(0,0,i,h)))
d.aP(new B.a3(0,0,i,h),f)
x=a0*40
for(i=d.a,h=y.v,w=0;w<2;++w,g=f){f=B.a([],h)
v=new B.aF(g.r,A.ah,l,l,f)
f.push(new B.aY(0,j))
for(g=w===0,u=0;u<=k;u+=6){t=g?0.4:1
s=g?0.62:0.78
r=g?40:28
r=new B.aq(u,j*s+Math.sin((u+x*t)/r)*j*0.05)
f.push(r)
t=v.f
if(t!=null)r.by(t)
t=v.e
if(t!=null)t.a.delete()
v.e=null}t=new B.aq(k,j)
f.push(t)
f=v.f
if(f!=null)t.by(f)
f=v.e
if(f!=null)f.a.delete()
v.e=null
f=$.S()
t=new B.ap(A.R,A.N,A.U,A.V,A.S)
t.r=(g?A.jt:A.e_).gp(0)
q=t.G()
g=v.e
i.drawPath((g==null?v.e=new B.cm(v.gbw().a.snapshot()):g).a,q)
q.delete()}for(i=j*0.04,h=x*1.3,g=k+60,f=k*0.3,p=0,o=0;o<6;++o){u=A.k.F(o*90-h,g)-30
t=Math.sin(o*1.7+a0)
if(Math.abs(u-f)<12)++p
D.i5f(d,new B.t(u,j*(0.35+0.08*t)),i,A.dP)}n=Math.abs(Math.sin(a0*5))
m=new B.t(f,j*0.72-n*j*0.22)
i=B.bJ(new B.t(f,j*0.82),j*0.025,j*0.14*(1-n*0.4))
$.S()
h=B.I()
h.r=A.dm.gp(0)
d.dO(i,h)
h=j*0.085
i=B.I()
i.sam(C.esI.aB(0,B.bY(m,h)))
d.ad(m,h,i)
i=B.I()
i.b=A.aa
i.c=2
i.r=A.pV.gp(0)
d.ad(m,h,i)
i=-j
D.GL(d,"$",m.a9(0,new B.t(i*0.03,i*0.045)),j*0.09,A.pV,A.bi,0,l)
h=i*0.01
i=m.a9(0,new B.t(i*0.028,h))
g=B.I()
g.r=A.w.gp(0)
d.ad(i,2.4,g)
h=m.a9(0,new B.t(j*0.028,h))
g=B.I()
g.r=A.w.gp(0)
d.ad(h,2.4,g)
D.GL(d,"Saved: $"+(A.o.F(A.k.bh(a0*3),1000)+p),new B.t(j*0.05,j*0.06),j*0.08,A.c,A.bi,0,l)},
i5f(d,e,f,g){var x,w,v,u,t,s,r,q=$.S(),p=B.a([],y.v),o=new B.aF(q.r,A.ah,null,null,p)
for(q=e.a,x=e.b,w=f*0.45,v=0;v<10;++v){u=-1.5707963267948966+v*3.141592653589793/5
t=(v&1)===0?f:w
s=q+Math.cos(u)*t
r=x+Math.sin(u)*t
if(v===0){s=new B.aY(s,r)
p.push(s)
r=o.f
if(r!=null)s.by(r)
s=o.e
if(s!=null)s.a.delete()
o.e=null}else{s=new B.aq(s,r)
p.push(s)
r=o.f
if(r!=null)s.by(r)
s=o.e
if(s!=null)s.a.delete()
o.e=null}}o.D(new B.bs())
$.S()
q=B.I()
q.r=g.gp(0)
d.aG(o,q)},
i5a(a1,a2,a3){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=a2.a,e=a2.b,d=$.S(),a0=B.I()
a0.r=C.agx.gp(0)
a1.aP(new B.a3(0,0,0+f,0+e),a0)
x=new B.e9()
x.d4(7)
for(a0=a3*3,w=a1.a,v=0;v<60;++v){u=A.k.F(A.k.F(x.ah()*f-a3*(10+x.ah()*60),f)+f,f)
t=x.ah()
s=x.ah()
r=new B.ap(A.R,A.N,A.U,A.V,A.S)
r.r=A.c.j(0.5+0.5*Math.sin(a0+v)).gp(0)
q=r.G()
w.drawCircle(u,t*e*0.85,0.6+s*1.4,q)
q.delete()}p=f*1.2-A.k.F(a3*22,f*1.6)
a0=e*0.3
t=e*0.2
s=B.I()
s.sam(C.esG.aB(0,B.bY(new B.t(p,a0),t)))
a1.ad(new B.t(p,a0),t,s)
a0=B.bJ(new B.t(p,a0),e*0.07,e*0.6)
s=B.I()
s.b=A.aa
s.c=3
s.r=A.bL.j(0.7).gp(0)
a1.dO(a0,s)
s=Math.sin(a3*2)
J.bm(w.save())
w.translate(f*0.42,e*0.52+s*e*0.04)
a1.ig(0,-0.25)
d=d.r
s=y.v
o=new B.aF(d,A.ah,g,g,B.a([],s))
a0=-e
t=a0*0.04
r=e*0.1
o.D(new B.aY(t,r))
n=e*0.04
o.D(new B.c5(0,e*(0.2+0.05*Math.sin(a3*30)),n,r))
o.D(new B.bs())
m=B.I()
l=e*0.12
m.sam(C.c2L.aB(0,new B.a3(t,r,t+e*0.08,r+l)))
a1.aG(o,m)
k=new B.aF(d,A.ah,g,g,B.a([],s))
m=a0*0.17
k.D(new B.aY(0,m))
t=a0*0.05
j=e*0.05
k.D(new B.c5(e*0.09,t,j,r))
k.D(new B.aq(t,r))
k.D(new B.c5(a0*0.09,t,0,m))
k.D(new B.bs())
i=B.I()
h=a0*0.08
i.sam(C.c31.aB(0,new B.a3(h,m,h+e*0.16,m+e*0.27)))
a1.aG(k,i)
i=B.I()
i.r=A.aQ.gp(0)
a1.ad(new B.t(0,t),e*0.035,i)
i=new B.aF(d,A.ah,g,g,B.a([],s))
i.D(new B.aY(t,n))
i.D(new B.aq(a0*0.1,l))
i.D(new B.aq(t,r))
i.D(new B.bs())
t=B.I()
t.r=A.aw.gp(0)
a1.aG(i,t)
s=new B.aF(d,A.ah,g,g,B.a([],s))
s.D(new B.aY(j,n))
s.D(new B.aq(r,l))
s.D(new B.aq(j,r))
s.D(new B.bs())
r=B.I()
r.r=A.aw.gp(0)
a1.aG(s,r)
w.restore()},
i1Y(a1,a2,a3){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null,h=a2.a,g=a2.b,f=0+h,e=0+g,d=$.S(),a0=B.I()
a0.sam(C.c1M.aB(0,new B.a3(0,0,f,e)))
a1.aP(new B.a3(0,0,f,e),a0)
for(f=a1.a,e=g*0.85,a0=g*0.7,x=y.v,d=d.r,w=0;w<4;++w){v=h*(0.1+0.25*w)
u=B.a([],x)
t=new B.aF(d,A.ah,i,i,u)
u.push(new B.aY(v,g))
u.push(new B.c5(v+Math.sin(a3+w)*10,e,v+4,a0+w*6))
u=new B.ap(A.R,A.N,A.U,A.V,A.S)
u.b=A.aa
u.c=5
u.r=A.cV.gp(0)
s=u.G()
u=t.gbw().a.snapshot()
f.drawPath((t.e=new B.cm(u)).a,s)
s.delete()}e=A.k.F(a3*18,h*1.5)
J.bm(f.save())
f.translate(e-h*0.25,g*0.35+Math.sin(a3)*6)
e=B.bJ(A.I,g*0.22,g*0.5)
a0=B.I()
a0.r=A.br.gp(0)
a1.dO(e,a0)
a0=new B.aF(d,A.ah,i,i,B.a([],x))
e=-g
u=e*0.22
a0.D(new B.aY(u,0))
a0.D(new B.c5(e*0.36,e*0.12+Math.sin(a3*3)*5,e*0.34,e*0.16))
t=e*0.02
a0.D(new B.c5(e*0.28,t,u,0))
u=B.I()
u.r=A.br.gp(0)
a1.aG(a0,u)
u=g*0.03
a0=g*0.1
r=B.bJ(new B.t(0,u),a0,g*0.34)
q=B.I()
q.r=A.aL.gp(0)
a1.dO(r,q)
q=B.I()
q.r=A.c.gp(0)
a1.ad(new B.t(g*0.15,t),3,q)
q=B.I()
q.r=A.w.gp(0)
a1.ad(new B.t(g*0.155,t),1.5,q)
f.restore()
for(t=e*0.005,r=e*0.08,q=e*0.03,p=g*0.06,e*=0.04,o=h+40,n=a3*2,w=0;w<6;++w){m=(w&1)===0?1:-1
l=A.k.F(A.k.F(a3*(24+w*7)*m+w*80,o)+h+40,o)
k=Math.sin(n+w)
J.bm(f.save())
f.translate(l-20,g*(0.52+0.06*w)+k*6)
f.scale(m,1)
l=B.bJ(A.I,p,a0)
k=new B.ap(A.R,A.N,A.U,A.V,A.S)
j=A.o.F(w,4)
k.r=C.axT[j].gp(0)
s=k.G()
f.drawOval(B.bG(l),s)
s.delete()
l=B.a([],x)
k=new B.aF(d,A.ah,i,i,l)
l.push(new B.aY(e,0))
l.push(new B.aq(r,q))
l.push(new B.aq(r,u))
l.push(new B.bs())
l=new B.ap(A.R,A.N,A.U,A.V,A.S)
l.r=C.axT[j].gp(0)
s=l.G()
l=k.gbw().a.snapshot()
f.drawPath((k.e=new B.cm(l)).a,s)
s.delete()
l=new B.ap(A.R,A.N,A.U,A.V,A.S)
l.r=A.w.gp(0)
s=l.G()
f.drawCircle(u,t,1.8,s)
s.delete()
f.restore()}for(w=0;w<14;++w){e=A.k.F(w*0.071+0.05,1)
d=A.k.F(a3*(14+w*3)+w*40,g)
a0=Math.sin(n+w)
x=A.o.F(w,3)
u=new B.ap(A.R,A.N,A.U,A.V,A.S)
u.b=A.aa
u.c=1.2
u.r=A.c.j(0.7).gp(0)
s=u.G()
f.drawCircle(h*e+a0*4,g-d,2+x,s)
s.delete()}},
i3f(a7,a8,a9){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null,d=a8.a,a0=a8.b,a1=A.k.F(a9,12),a2=a1<7,a3=0+d,a4=0+a0,a5=$.S(),a6=B.I()
a6.sam(new B.a9(A.b4,A.b7,A.x,a2?C.dmB:C.d94,e,e).aB(0,new B.a3(0,0,a3,a4)))
a7.aP(new B.a3(0,0,a3,a4),a6)
a6=a0*0.74
x=B.I()
x.r=(a2?C.boT:A.F9).gp(0)
a7.aP(new B.a3(0,a6,a3,a6+a0*0.26),x)
for(x=a7.a,w=a0*0.07,v=a0*0.06,u=a0*0.2,t=a0*0.1,s=a0*0.09,r=y.v,q=a9*2,a5=a5.r,p=0;p<4;++p){o=d*(0.08+0.24*p)
n=a0*(0.14+0.03*A.o.F(p,2))
m=a6-n
l=o+u
k=new B.ap(A.R,A.N,A.U,A.V,A.S)
k.r=C.cVW[p].gp(0)
j=k.G()
x.drawRect(B.bG(new B.a3(o,m,l,m+n)),j)
j.delete()
k=B.a([],r)
i=new B.aF(a5,A.ah,e,e,k)
k.push(new B.aY(o-4,m))
k.push(new B.aq(o+t,m-s))
k.push(new B.aq(l+4,m))
k.push(new B.bs())
m=new B.ap(A.R,A.N,A.U,A.V,A.S)
m.r=A.ek.gp(0)
j=m.G()
m=i.gbw().a.snapshot()
x.drawPath((i.e=new B.cm(m)).a,j)
j.delete()
m=o+w
l=n*0.55
k=a6-l
i=new B.ap(A.R,A.N,A.U,A.V,A.S)
i.r=(a2&&A.o.F(A.k.bh(q),2)===0?A.lZ:A.fV).gp(0)
j=i.G()
x.drawRect(B.bG(new B.a3(m,k,m+v,k+l)),j)
j.delete()}if(a2){for(a6=a9*20,v=a9*260,u=a0*0.8,p=0;p<70;++p){o=A.k.F(p*37+a6,d)
h=A.k.F(p*53+v,u)
s=new B.ap(A.R,A.N,A.U,A.V,A.S)
s.r=A.fi.gp(0)
s.c=1.4
j=s.G()
x.drawLine.apply(x,[o,h,o-3,h+9,j])
j.delete()}a6=a9*3
if(A.o.F(A.k.bh(a6),7)===0&&A.k.F(a6,1)<0.3){a6=B.I()
a6.r=A.c.j(0.5).gp(0)
a7.aP(new B.a3(0,0,a3,a4),a6)
r=new B.aF(a5,A.ah,e,e,B.a([],r))
r.D(new B.aY(d*0.6,t))
t=d*0.55
a5=a0*0.3
r.D(new B.aq(t,a5))
r.D(new B.aq(d*0.62,a5))
r.D(new B.aq(t,a0*0.55))
t=B.I()
t.b=A.aa
t.c=4
t.r=A.lZ.gp(0)
a7.aG(r,t)}}else{for(a3=d*0.5,a4=a0*0.035,a5=3.141592653589793*A.k.E((a1-7)/2,0,1)*57.29577951308232,p=0;p<6;++p){v=d*(0.9-p*0.07)
v=B.bJ(new B.t(a3,a6),v,v)
u=new B.ap(A.R,A.N,A.U,A.V,A.S)
u.b=A.aa
u.c=a4
u.r=C.dqV[p].j(0.9).gp(0)
j=u.G()
x.drawArc.apply(x,[B.bG(v),180,a5,!1,j])
j.delete()}a3=B.I()
a3.r=A.dP.gp(0)
a7.ad(new B.t(d*0.86,a0*0.16),a0*0.08,a3)}for(a3=d+120,p=0;p<3;++p){o=A.k.F(a9*(8+p*4)+p*120,a3)-60
for(a4=a0*(0.12+0.1*p),g=0;g<4;++g){f=C.cqE[g]
$.S()
a5=new B.ap(A.R,A.N,A.U,A.V,A.S)
a5.r=(a2?A.bo:A.c.j(0.95)).gp(0)
j=a5.G()
x.drawCircle(o+f.a,a4+f.b,w,j)
j.delete()}}},
i5b(a1,a2,a3){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=a2.a,a0=a2.b
$.S()
x=B.I()
x.r=A.df.gp(0)
a1.aP(new B.a3(0,0,0+d,0+a0),x)
w=B.I()
w.r=A.c.j(0.05).gp(0)
for(x=a1.a,v=0;v<d;v+=16){u=w.G()
x.drawLine.apply(x,[v,0,v,a0,u])
u.delete()}for(t=0;t<a0;t+=16){u=w.G()
x.drawLine.apply(x,[0,t,d,t,u])
u.delete()}s=d*0.14
r=a0*0.2
q=a0*0.08
p=B.bt(new B.a3(s,r,s+d*0.72,r+a0*0.5),new B.aP(q,q))
o=new B.aF($.S().r,A.ah,null,null,B.a([],y.v))
o.D(new B.iN(p))
r=B.I()
r.b=A.aa
r.c=5
r.r=A.br.gp(0)
a1.aG(o,r)
n=new B.Ta(new B.tm(B.xs(o),!1,B.a([],y.L))).gI(0)
r=n.a
m=n.b
r.il()
l=r.e
k=l[m].b
k===$&&B.c()
k=k.a.length()
r.il()
j=l[m].b
j===$&&B.c()
i=A.k.F(a3*k/5,j.a.length())
for(h=0;h<10;++h){r.il()
k=l[m].b
k===$&&B.c()
k=A.k.F(i-h*9,k.a.length())
r.il()
g=l[m].Ha(k).a
k=new B.ap(A.R,A.N,A.U,A.V,A.S)
k.r=A.dP.j(1-h*0.09).gp(0)
k.z=N.Sb
u=k.G()
x.drawCircle(g.a,g.b,6-h*0.5,u)
u.delete()}x=a0*0.45
r=B.bt(B.bJ(new B.t(s,x),a0*0.22,a0*0.12),A.i9)
m=B.I()
m.r=A.cV.gp(0)
a1.az(r,m)
D.GL(a1,"+",new B.t(s-5,a0*0.33),a0*0.07,A.c,A.bi,0,null)
f=(Math.sin(a3*2)+1)/2
e=new B.t(d*0.86,x)
x=B.I()
x.r=A.dP.j(0.25+0.5*f).gp(0)
x.z=K.Ip
a1.ad(e,a0*0.16,x)
x=B.I()
x.r=B.ar(A.bM,A.ob,f).gp(0)
a1.ad(e,q,x)
D.GL(a1,"Electricity needs a full loop!",new B.t(0,a0*0.74),a0*0.075,A.hf,A.K,0,d)},
hZu(a4,a5,a6){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=a5.a,a1=a5.b,a2=0+a0,a3=0+a1
$.S()
x=B.I()
x.sam(C.c4Y.aB(0,new B.a3(0,0,a2,a3)))
a4.aP(new B.a3(0,0,a2,a3),x)
x=a1*0.82
a3=B.I()
a3.r=A.df.gp(0)
a4.aP(new B.a3(0,x,a2,x+a1*0.18),a3)
for(a2=a0*0.1,a3=a4.a,w=0;w<7;++w){v=a0*(0.05+w*0.15)
u=a1*(0.1+0.07*A.o.F(w*5,4))
t=x-u
s=new B.ap(A.R,A.N,A.U,A.V,A.S)
s.r=A.av.gp(0)
r=s.G()
a3.drawRect(B.bG(new B.a3(v,t,v+a2,t+u)),r)
r.delete()}for(a2=a1*0.2,t=a6*0.55,q=0;q<4;++q){s=t+q*0.27
p=A.k.F(s,1)
o=A.k.bh(s)*7+q*3
n=a0*(0.15+0.7*A.k.F(o*0.37,1))
m=a1*(0.2+0.25*A.k.F(o*0.53,1))
l=C.awT[A.o.F(Math.abs(o),5)]
if(p<0.3){$.S()
s=new B.ap(A.R,A.N,A.U,A.V,A.S)
s.r=A.c.gp(0)
r=s.G()
a3.drawCircle(n,x-(x-m)*(p/0.3),2.5,r)
r.delete()}else{w=(p-0.3)/0.7
for(s=w*w*a1*0.08,k=1-w,j=2.4*k+0.4,i=0;i<28;++i){h=i*3.141592653589793*2/28
g=a2*A.dV.av(0,w)
f=Math.cos(h)
e=Math.sin(h)
$.S()
d=new B.ap(A.R,A.N,A.U,A.V,A.S)
d.r=l.j(A.k.E(k,0,1)).gp(0)
d.z=C.dzn
r=d.G()
a3.drawCircle(n+f*g,m+e*g+s,j,r)
r.delete()}}}},
i5U(a4,a5,a6){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=a5.a,d=a5.b,a0=0+e,a1=0+d,a2=$.S(),a3=B.I()
a3.sam(C.c3R.aB(0,new B.a3(0,0,a0,a1)))
a4.aP(new B.a3(0,0,a0,a1),a3)
for(a1=a4.a,a3=y.v,x=0;x<2;++x,a2=w){w=B.a([],a3)
v=new B.aF(a2.r,A.ah,null,null,w)
w.push(new B.aY(0,d))
for(a2=x===0,u=0;u<=e;u+=6){t=a2?8:20
s=a2?0.55:0.68
r=a2?50:34
r=new B.aq(u,d*s+Math.sin((u+a6*t)/r)*d*0.06)
w.push(r)
t=v.f
if(t!=null)r.by(t)
t=v.e
if(t!=null)t.a.delete()
v.e=null}t=new B.aq(e,d)
w.push(t)
w=v.f
if(w!=null)t.by(w)
w=v.e
if(w!=null)w.a.delete()
v.e=null
w=$.S()
t=new B.ap(A.R,A.N,A.U,A.V,A.S)
t.r=(a2?A.Ff:A.F9).gp(0)
q=t.G()
a2=v.e
a1.drawPath((a2==null?v.e=new B.cm(v.gbw().a.snapshot()):a2).a,q)
q.delete()}a2=d*0.8
a3=B.I()
a3.r=A.br.gp(0)
a4.aP(new B.a3(0,a2,a0,a2+d*0.04),a3)
for(u=-A.k.F(a6*80,24),a0=d*0.84,a3=d*0.03,w=a0+a3;u<e;u+=24){t=new B.ap(A.R,A.N,A.U,A.V,A.S)
t.r=A.fV.gp(0)
q=t.G()
a1.drawRect(B.bG(new B.a3(u,a0,u+8,w)),q)
q.delete()}p=Math.sin(a6*14)*1.2
o=e*0.12
for(a0=a2+p,a2=d*0.025,w=e*0.012,t=d*0.02,s=d*0.62+p,a3=s+a3,r=a3+d*0.06,n=s+d*0.18,m=0;m<4;++m){l=m===0
k=o+e*(l?0.16:0.15)
j=B.bt(new B.a3(o,s,k,n),new B.aP(t,t))
i=new B.ap(A.R,A.N,A.U,A.V,A.S)
i.r=(l?A.bx:C.d96[m-1]).gp(0)
q=i.G()
a1.drawRRect(B.el(j),q)
q.delete()
for(k-=o,j=k*0.18,h=0;h<3;++h){i=o+k*(0.12+h*0.28)
g=new B.ap(A.R,A.N,A.U,A.V,A.S)
g.r=A.fi.gp(0)
q=g.G()
a1.drawRect(B.bG(new B.a3(i,a3,i+j,r)),q)
q.delete()}j=new B.ap(A.R,A.N,A.U,A.V,A.S)
j.r=A.bl.gp(0)
q=j.G()
a1.drawCircle(o+k*0.25,a0,a2,q)
q.delete()
j=new B.ap(A.R,A.N,A.U,A.V,A.S)
j.r=A.bl.gp(0)
q=j.G()
a1.drawCircle(o+k*0.75,a0,a2,q)
q.delete()
o+=k+w}for(a0=a6*0.8,a2=e*0.2,a3=d*0.6,m=0;m<5;++m){f=A.k.F(a0+m*0.2,1)
w=f*d
s=new B.ap(A.R,A.N,A.U,A.V,A.S)
s.r=A.c.j(0.7*(1-f)).gp(0)
q=s.G()
a1.drawCircle(a2-f*e*0.12,a3-w*0.25,t+w*0.04,q)
q.delete()}},
i42(a2,a3,a4){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=a3.a,d=a3.b,a0=0+e,a1=0+d
$.S()
x=B.I()
w=a4*2
v=B.ar(A.jt,A.eR,(Math.sin(w)+1)/2)
v.toString
x.sam(new B.a9(A.ay,A.aE,A.x,B.a([v,A.av],y.O),null,null).aB(0,new B.a3(0,0,a0,a1)))
a2.aP(new B.a3(0,0,a0,a1),x)
for(a0=a2.a,a1=d*0.86,x=e/8-2,v=d*0.14,u=a1+v,t=0;t<8;++t){s=e*t/8
r=new B.ap(A.R,A.N,A.U,A.V,A.S)
r.r=(A.k.F(w+t,2)<1?A.c2:A.aQ).j(0.5).gp(0)
q=r.G()
a0.drawRect(B.bG(new B.a3(s,a1,s+x,u)),q)
q.delete()}a1=a4*6
p=Math.sin(a1)
J.bm(a0.save())
x=-d
a0.translate(e*0.5,d*0.55+Math.abs(p)*x*0.03)
a2.ig(0,p*0.06)
u=d*0.26
s=d*0.3
r=d*0.04
o=B.bt(B.bJ(A.I,s,u),new B.aP(r,r))
n=B.I()
n.sam(C.c5m.aB(0,B.bJ(A.I,s,u)))
a2.az(o,n)
n=d*0.08
v=B.bJ(new B.t(0,d*0.02),n,v)
o=B.I()
o.r=A.b9.j(0.7).gp(0)
a2.aP(v,o)
o=B.bt(B.bJ(new B.t(0,x*0.25),d*0.17,d*0.22),new B.aP(r,r))
v=B.I()
v.r=A.cs.gp(0)
a2.az(o,v)
m=A.k.F(a4*1.3,1)>0.08
for(v=x*0.26,u=d*0.025,l=0;l<2;++l){k=C.cqg[l]
s=new B.ap(A.R,A.N,A.U,A.V,A.S)
s.r=(m?A.b9:A.eR).gp(0)
q=s.G()
a0.drawCircle(k*d,v,u,q)
q.delete()}v=B.I()
v.r=A.ae.gp(0)
v.c=3
a2.bo(new B.t(0,x*0.335),new B.t(0,x*0.38),v)
v=B.I()
v.r=A.aw.gp(0)
a2.ad(new B.t(0,x*0.39),d*0.015,v)
for(v=-p,u=d*0.035,s=d*0.15,o=d*0.28,x*=0.08,l=0;l<2;++l){j=F.hy[l]
J.bm(a0.save())
i=j*d
a0.translate(i*0.14,x)
h=j>0
a0.rotate(j*(0.7+Math.sin(a1+(h?0:3.141592653589793))*0.8)*180/3.141592653589793,0,0)
g=new B.ap(A.R,A.N,A.U,A.V,A.S)
g.r=A.bM.gp(0)
g.c=u
g.d=A.bE
q=g.G()
a0.drawLine.apply(a0,[0,0,i*0.16,0,q])
q.delete()
a0.restore()
h=h?p:v
g=new B.ap(A.R,A.N,A.U,A.V,A.S)
g.r=A.bM.gp(0)
g.c=r
g.d=A.bE
q=g.G()
a0.drawLine.apply(a0,[i*0.06,s,i*0.08,o+h*d*0.02,q])
q.delete()}a0.restore()
for(a0=a4*0.7,a1=d*0.7,t=0;t<4;++t){f=A.k.F(a0+t*0.25,1)
D.GL(a2,"\u266a",new B.t(e*(0.2+0.18*t)+Math.sin(w+t)*8,a1-f*d*0.5),n,A.c.j(1-f),A.bi,0,null)}},
hZH(a1,a2,a3){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=a2.a,e=a2.b,d=0+f,a0=0+e
$.S()
x=B.I()
x.sam(C.c3Y.aB(0,new B.a3(0,0,d,a0)))
a1.aP(new B.a3(0,0,d,a0),x)
x=B.I()
x.r=A.dP.gp(0)
a1.ad(new B.t(f*0.12,e*0.16),e*0.07,x)
x=e*0.72
a0=B.I()
a0.r=A.Ff.gp(0)
a1.aP(new B.a3(0,x,d,x+e*0.28),a0)
for(d=a3*0.25,a0=e*0.78,x=a1.a,w=e*0.016,v=a3*0.3,u=e*0.022,t=0;t<9;++t){s=f*(0.07+t*0.105)
r=A.k.E(A.k.F(d-t*0.12,3),0,1)
q=A.o.F(t,3)
p=s+Math.sin(a3+t)*3
q=a0-e*(0.12+0.05*q)*r
o=new B.ap(A.R,A.N,A.U,A.V,A.S)
o.r=A.hd.gp(0)
o.c=3
n=o.G()
x.drawLine.apply(x,[s,a0,p,q,n])
n.delete()
if(r>0.7){for(m=0;m<6;++m){l=m*3.141592653589793/3+v
o=Math.cos(l)
k=Math.sin(l)
j=new B.ap(A.R,A.N,A.U,A.V,A.S)
j.r=C.ayY[A.o.F(t,5)].gp(0)
n=j.G()
x.drawCircle(p+o*e*0.028,q+k*e*0.028,u,n)
n.delete()}o=new B.ap(A.R,A.N,A.U,A.V,A.S)
o.r=A.dP.gp(0)
n=o.G()
x.drawCircle(p,q,w,n)
n.delete()}}for(d=e*0.03,a0=e*0.05,w=e*0.06,v=a3*0.9,u=a3*1.3,q=a3*18,t=0;t<3;++t){s=f*(0.2+0.28*t)+Math.sin(v+t*2)*f*0.12
i=e*(0.3+0.1*t)+Math.cos(u+t)*e*0.06
h=Math.abs(Math.sin(q+t))
for(p=a0*h+2,o=(t+2)%5,g=0;g<2;++g){k=B.bJ(new B.t(s+F.hy[g]*e*0.025*h,i),w,p)
j=new B.ap(A.R,A.N,A.U,A.V,A.S)
j.r=C.ayY[o].gp(0)
n=j.G()
x.drawOval(B.bG(k),n)
n.delete()}p=new B.ap(A.R,A.N,A.U,A.V,A.S)
p.r=A.bl.gp(0)
p.c=2
n=p.G()
x.drawLine.apply(x,[s,i-d,s,i+d,n])
n.delete()}},
h9G(d,e,f,g,h,i){return B.a4(d,!1).cd(B.uY(null,!1,!0,!0,new D.fWY(e,h,g,i,f),A.eS,null,A.q8,new D.fWZ(),y.S))},
xZ:function xZ(d,e){this.a=d
this.b=e},
fkF:function fkF(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fw9:function fw9(d){this.a=d},
fw5:function fw5(){},
fw8:function fw8(d,e){this.a=d
this.b=e},
fw6:function fw6(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fw7:function fw7(d,e,f){this.a=d
this.b=e
this.c=f},
fwa:function fwa(d,e){this.a=d
this.b=e},
fWY:function fWY(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fWZ:function fWZ(){},
WN:function WN(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aFt:function aFt(d,e){var _=this
_.e=_.d=$
_.f=-1
_.r=!1
_.w=null
_.x=0
_.y=!0
_.z=null
_.bz$=d
_.aa$=e
_.c=_.a=null},
eJy:function eJy(d){this.a=d},
eJx:function eJx(d){this.a=d},
eJw:function eJw(d,e){this.a=d
this.b=e},
eJz:function eJz(d,e){this.a=d
this.b=e},
eJI:function eJI(d){this.a=d},
eJH:function eJH(d){this.a=d},
eJG:function eJG(){},
eJB:function eJB(d){this.a=d},
eJC:function eJC(d){this.a=d},
eJD:function eJD(d){this.a=d},
eJE:function eJE(d){this.a=d},
eJA:function eJA(d){this.a=d},
eJF:function eJF(d){this.a=d},
eJv:function eJv(d){this.a=d},
eJu:function eJu(d){this.a=d},
bvY:function bvY(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.a=h},
aNk:function aNk(){},
h9L(d){var x
A:{if("lgtv"===d){x="lg"
break A}if("sonytv"===d){x="sony"
break A}if("appletv"===d){x="apple"
break A}if("bangtv"===d){x="bo"
break A}x="samsung"
break A}return x},
ijN(d){var x,w=D.h9L(d)
A:{if("lg"===w){x=A.hp
break A}if("sony"===w){x=A.dv
break A}if("apple"===w){x=A.bO
break A}if("bo"===w){x=C.tz
break A}x=A.aQ
break A}return x},
asv:function asv(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
blY:function blY(){this.d=0
this.c=this.a=null},
eJs:function eJs(d,e){this.a=d
this.b=e},
eJt:function eJt(d,e){this.a=d
this.b=e},
eJp:function eJp(){},
eJo:function eJo(d){this.a=d},
eJq:function eJq(d){this.a=d},
eJr:function eJr(d){this.a=d},
eJm:function eJm(d){this.a=d},
eJn:function eJn(d,e){this.a=d
this.b=e},
hP7(b3,b4,b5,b6,b7){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9=A.o.ao(22050*b4,1000),b0=a9*2,b1=new DataView(new ArrayBuffer(44+b0)),b2=new D.ck7(b1)
b2.$2(0,"RIFF")
b1.setUint32(4,36+b0,!0)
b2.$2(8,"WAVE")
b2.$2(12,"fmt ")
b1.setUint32(16,16,!0)
b1.setUint16(20,1,!0)
b1.setUint16(22,1,!0)
b1.setUint32(24,22050,!0)
b1.setUint32(28,44100,!0)
b1.setUint16(32,2,!0)
b1.setUint16(34,16,!0)
b2.$2(36,"data")
b1.setUint32(40,b0,!0)
x=new B.e9()
x.d4(3)
w=3
v=0.006
u=!1
t=0
switch(b7){case"piano":s=C.d21
r=C.d7z
w=3.4
break
case"organ":s=C.d6n
r=C.dmF
v=0.02
u=!0
break
case"bell":s=C.cYt
r=C.cXd
w=2.4
break
case"pluck":s=C.d20
r=C.cIQ
w=7
break
case"synth":s=C.dnz
r=C.dpm
v=0.012
u=!0
break
case"flute":s=C.dtV
r=C.ciZ
v=0.07
u=!0
t=0.035
break
default:s=C.ars
r=C.ars}b0=s.length
q=B.c1(b0,0,!1,y.i)
for(p="saw"===b5,o="tri"===b5,n="noise"===b5,m="square"===b5,l=b7.length!==0,k=-w,j=k*0.12,i=t>0,h=b7!=="bell",g=b7!=="piano",f=b7==="pluck",e=0,d=0;d<a9;++d){a0=d/22050
a1=1-d/a9
a2=b3*(1+b6*a1)
if(l){for(a1=6.283185307179586*a2,a3=k*a0,a4=0,a5=0;a5<b0;++a5){a6=q[a5]+a1*r[a5]/22050
q[a5]=a6
a7=!h||!g||f?Math.exp(a3*(1+a5*0.35)):1
a4+=Math.sin(a6)*s[a5]*a7}a4/=1.9
if(i)a4+=(x.ah()*2-1)*t
a8=Math.min(1,a0/v)*Math.min(1,(a9-d)/1984.5)
a4*=u?a8:a8*Math.exp(j*a0)}else{e+=6.283185307179586*a2/22050
A:{if(m){a3=Math.sin(e)>=0?0.6:-0.6
break A}if(n){a3=(x.ah()*2-1)*0.8
break A}if(o){a3=0.6366197723675814*Math.asin(Math.sin(e))
break A}if(p){a3=A.k.F(e/6.283185307179586,1)*1.2-0.6
break A}a3=Math.sin(e)
break A}a4=a3*(Math.min(1,d/120)*Math.pow(a1,1.6))}b1.setInt16(44+d*2,A.o.E(A.k.V(a4*0.8*32e3),-32768,32767),!0)}return J.eR(A.dJ.gaR(b1))},
dY(d,e,f,g,h,i){return D.hP8(d,e,f,g,h,i)},
hP8(d,e,f,g,h,i){var x=0,w=B.j(y.H),v=1,u=[],t,s,r,q,p,o
var $async$dY=B.e(function(j,k){if(j===1){u.push(k)
x=v}for(;;)switch(x){case 0:v=3
t=""+A.k.V(d)+"|"+f+"|"+i+"|"+B.w(g)+"|"+e
s=$.hP6.c4(0,t,new D.ck9(d,f,i,g,e))
if($.ck6.length<12){q=B.aiT()
q.Nj(A.aPs)
$.ck6.push(q)}q=$.hja
$.hja=q+1
r=$.ck6[A.o.F(q,$.ck6.length)]
x=6
return B.b(J.hCd(r,new B.a3G(s,null),h),$async$dY)
case 6:v=1
x=5
break
case 3:v=2
o=u.pop()
x=5
break
case 2:x=1
break
case 5:return B.h(null,w)
case 1:return B.f(u.at(-1),w)}})
return B.i($async$dY,w)},
ck7:function ck7(d){this.a=d},
ck9:function ck9(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h}},C,E,F,O
J=c[1]
B=c[0]
A=c[2]
G=c[224]
I=c[126]
K=c[128]
L=c[176]
M=c[98]
H=c[121]
N=c[99]
D=a.updateHolder(c[27],D)
C=c[96]
E=c[39]
F=c[94]
O=c[236]
D.wD.prototype={}
D.w3.prototype={}
D.xZ.prototype={}
D.WN.prototype={
R(){return new D.aFt(null,null)}}
D.aFt.prototype={
gaeA(){var x,w=this,v=w.d
if(v===$){x=B.bn(null,A.oe,null,1,null,w)
x.cq(0)
w.d!==$&&B.bH()
w.d=x
v=x}return v},
gDw(){var x=this.e
return x===$?this.e=this.a.e:x},
Z(){var x=this
x.a2()
x.w=B.cK(x.a.r,x.gb_b())
x.aWe()
D.dY(520,"",80,0,0.25,"tri")},
aWe(){var x=this.z
if(x!=null)x.a4(0)
this.z=B.cK(A.kh,new D.eJy(this))},
c8X(){var x=this.c
if(x!=null&&B.a4(x,!1).pL()){x=this.c
x.toString
B.a4(x,!1).O(this.gDw())}},
ajx(){var x=this,w=x.w
if(w!=null)w.a4(0)
x.w=null
x.y=!0
x.aWe()},
axK(d){this.m(new D.eJw(this,d))
D.dY(900,"",40,0,0.3,"noise")},
b14(d){this.m(new D.eJz(this,d))
D.dY(700,"",60,0,0.3,"tri")},
q(){var x=this,w=x.w
if(w!=null)w.a4(0)
w=x.z
if(w!=null)w.a4(0)
x.gaeA().q()
x.bxE()},
B(d){var x,w,v,u,t=this,s=null,r=B.m(10),q=B.J(t.gc8Y(),A.r,6),p=B.a([new B.ac(0,A.G,D.ijN(t.a.d).j(0.25),A.I,40)],y.V),o=B.m(4),n=y.p,m=B.a([B.cc(t.gaeA(),new D.eJH(t),s)],n)
if(t.r)m.push(t.bDa())
r=B.at(new B.fD(1.7777777777777777,B.p(s,B.bx(o,new B.an(A.a_,s,A.b1,A.t,m,s),A.ap),A.f,s,s,new B.o(s,s,q,r,p,s,A.n),s,s,s,s,s,s,s,s),s),s,s,s)
q=t.y
p=q?1:0
o=B.nI(s,A.aS,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s)
o=B.aG(s,s,s,s,B.X(A.cz,A.c,s,s,s,s),s,s,s,t.gb_b(),s,s,s,o,"Back to the board",s)
m=B.m(20)
x=t.f
w=t.a
o=B.B(B.a([o,A.b0,B.p(s,B.d(x>=0?w.c+" \xb7 "+C.kl[x].a:w.c+" \xb7 CH "+(t.gDw()+1),s,s,s,s,s,s,F.Ac,s,s,s),A.f,s,s,new B.o(A.aS,s,s,m,s,s,A.n),s,s,s,s,A.mH,s,s,s)],n),A.m,s,A.e,A.i,0,s,s)
m=t.cqa()
x=A.w.j(0.65)
w=B.m(18)
v=t.f
v=B.d(v>=0?C.kl[v].a:C.R0[t.gDw()].a,s,s,s,s,s,s,A.hE,A.K,s,s)
u=t.f
return B.c7(s,A.w,B.bl(!0,B.aB(A.c9,new B.an(A.a_,s,A.b1,A.t,B.a([r,B.Dx(B.e1(B.x(B.a([new B.D(C.bxD,o,s),A.am,m,A.b0,B.p(s,B.x(B.a([v,B.d(u>=0?C.kl[u].c:C.R0[t.gDw()].b,s,s,s,s,s,s,M.a9N,A.K,s,s)],n),A.m,s,A.e,A.P,0,A.p),A.f,s,s,new B.o(x,s,s,w,s,s,A.n),s,s,s,A.bf,A.bS,s,s,s)],n),A.m,s,A.e,A.i,0,A.p),!q,s),A.b6,A.iz,p)],n),s),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new D.eJI(t),s,s,s,s,s,s,!1,A.a4),!0,!1,A.af,!0,!0),s,!1,!1,s,s)},
cqa(){var x=this,w=null,v=new D.eJG(),u=A.w.j(0.72),t=B.m(22),s=B.J(A.aQ.j(0.5),A.r,1)
return B.p(w,B.B(B.a([v.$3(A.yV,"CH \u2212",new D.eJB(x)),v.$3(A.hM,"CH +",new D.eJC(x)),v.$5$color$on(A.H_,"TV",new D.eJD(x),A.aQ,x.f<0),v.$5$color$on(A.yH,"APPS",new D.eJE(x),A.bw,x.r),v.$5$color$on(A.Cb,"ADS",new D.eJF(x),A.c2,x.f===0)],y.p),A.m,w,A.e,A.P,0,w,w),A.f,w,w,new B.o(u,w,s,t,w,w,A.n),w,w,w,w,A.a_L,w,w,w)},
bDa(){return new D.asv(this.a.d,this.gceR(),new D.eJv(this),null)},
gc8Y(){var x,w=D.h9L(this.a.d)
A:{if("apple"===w){x=A.dv
break A}if("bo"===w){x=C.F0
break A}if("sony"===w){x=C.bc5
break A}if("lg"===w){x=A.ej
break A}x=A.cp
break A}return x}}
D.bvY.prototype={
a3(d,e){var x=this
return D.h9n(d,e,x.b,x.d,x.e,x.c)},
aw(d){return!0}}
D.aNk.prototype={
q(){var x=this,w=x.aa$
if(w!=null)w.a6(0,x.gbE())
x.aa$=null
x.a1()},
aY(){this.b6()
this.b4()
this.bF()}}
D.asv.prototype={
R(){return new D.blY()},
a67(d,e){return this.d.$1(e)}}
D.blY.prototype={
b_c(d){this.m(new D.eJs(this,d))
this.a.a67(0,d)},
B(d){var x,w=this,v=D.h9L(w.a.c)
A:{if("lg"===v){x=w.c1B()
break A}if("sony"===v){x=w.cxY()
break A}if("apple"===v){x=w.c8Z()
break A}if("bo"===v){x=w.bE4()
break A}x=w.csd()
break A}return x},
gaeB(){var x=new B.V(Date.now(),0,!1)
return A.a.aS(A.o.u(B.de(x)),2,"0")+":"+A.a.aS(A.o.u(B.fP(x)),2,"0")},
axL(d,e,f,g,h,i,j){var x,w,v=null,u=C.kl[d],t=this.d===d,s=u.d,r=B.ar(s,A.w,0.55)
r.toString
r=B.a([s,r],y.O)
s=B.m(h)
if(t)x=i
else x=A.L
x=B.J(x,A.r,t?2.5:0)
w=B.a([B.d(u.b,v,v,v,v,v,v,B.l(v,v,v,v,v,v,v,v,v,v,v,e,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],y.p)
if(g)w.push(new B.D(A.u_,B.d(u.a,v,1,A.a1,v,v,v,A.UY,v,v,v),v))
return B.aB(v,B.p(v,B.x(w,A.m,v,A.b8,A.i,0,A.p),A.f,v,v,new B.o(v,v,x,s,v,new B.a9(A.ay,A.aE,A.x,r,v,v),A.n),v,f,v,v,v,v,v,j),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new D.eJt(this,d),v,v,v,v,v,v,!1,A.a4)},
b_d(d,e,f,g,h,i){return this.axL(d,e,f,!1,g,h,i)},
csd(){var x,w,v,u,t,s,r=this,q=null,p=r.a.e,o=y.p,n=B.B(B.a([C.fEa,A.ac,C.fw6,A.b0,C.bWB,A.ac,C.bSn,A.ac,B.d(r.gaeB(),q,q,q,q,q,q,C.aTF,q,q,q)],o),A.m,q,A.e,A.i,0,q,q),m=C.kl[r.d],l=B.d(m.a,q,q,q,q,q,q,A.lP,q,q,q)
m=B.d(m.c,q,1,A.a1,q,q,q,C.fnu,q,q,q)
x=A.c.j(0.08)
w=B.a([],o)
for(v=0;v<2;++v){u=new B.aP(8,8)
w.push(B.p(q,B.X(C.cq3[v],A.ae,q,q,q,17),A.f,q,q,new B.o(A.bA,q,q,new B.bi(u,u,u,u),q,q,A.n),q,34,q,A.Nb,q,q,q,34))}u=B.a([],o)
for(t=0;t<8;++t){s=r.d===t?1.12:1
u.push(new B.D(A.Nb,new B.z1(r.axL(t,14,44,!0,8,A.aQ,52),s,A.b6,A.fO,q,q),q))}w.push(B.E(B.cg(B.B(u,A.m,q,A.e,A.i,0,q,q),A.t,q,A.y,q,q,q,q,A.aM),1))
return B.aB(q,B.p(q,B.x(B.a([n,A.b0,new B.bO(A.a5,q,q,l,q),new B.bO(A.a5,q,q,m,q),A.am,B.p(q,B.B(w,A.m,q,A.e,A.i,0,q,q),A.f,q,q,new B.o(x,q,q,A.WD,q,q,A.n),q,q,q,q,A.NC,q,q,q)],o),A.m,q,A.e,A.i,0,A.p),A.f,q,q,C.b3T,q,q,q,q,G.ajF,q,q,q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,p,q,q,q,q,q,q,!1,A.a4)},
c1B(){var x=null,w=this.a.e,v=y.p
return B.aB(x,B.p(x,B.x(B.a([B.B(B.a([B.p(x,C.fKo,A.f,x,x,new B.o(A.hp,x,x,B.m(10),x,x,A.n),x,x,x,x,A.mK,x,x,x),A.bm,C.fD7,A.b0,B.d(this.gaeB(),x,x,x,x,x,x,A.E3,x,x,x)],v),A.m,x,A.e,A.i,0,x,x),A.b0,new B.a6(x,62,B.hO(x,new D.eJo(this),8,x,x,A.aM,new D.eJp(),!1),x)],v),A.E,x,A.e,A.i,0,A.p),A.f,x,x,C.b43,x,x,x,x,O.Nh,x,x,x),A.y,!1,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,w,x,x,x,x,x,x,!1,A.a4)},
cxY(){var x,w,v,u,t=this,s=null,r=C.kl[t.d],q=t.a.e,p=y.p,o=B.a([B.p(s,C.f0R,A.f,s,s,new B.o(A.dq,s,s,B.m(12),s,s,A.n),s,s,s,s,A.yp,s,s,s),A.ac],p)
for(x=0;x<3;++x){w=C.djp[x]
v=w==="Apps"?A.c:A.aB
o.push(new B.D(A.iA,new B.y(w,s,new B.F(!0,v,s,s,s,s,9.5,A.Q,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s),s,s,s,s,s,s,s,s,s),s))}o.push(A.b0)
o.push(B.d(t.gaeB(),s,s,s,s,s,s,C.fmT,s,s,s))
o=B.B(o,A.m,s,A.e,A.i,0,s,s)
v=r.d
u=B.ar(v,A.w,0.7)
u.toString
u=B.a([v,u],y.O)
v=B.m(10)
return B.aB(s,B.p(s,B.x(B.a([o,A.fR,B.E(B.B(B.a([B.E(B.p(s,B.x(B.a([B.d(r.b,s,s,s,s,s,s,A.pA,s,s,s),B.d(r.a,s,s,s,s,s,s,A.nL,s,s,s),B.d(r.c,s,2,A.a1,s,s,s,C.ftp,s,s,s),A.cL,B.aB(s,B.p(s,C.fzS,A.f,s,s,new B.o(A.c,s,s,B.m(10),s,s,A.n),s,s,s,s,A.yp,s,s,s),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new D.eJq(t),s,s,s,s,s,s,!1,A.a4)],p),A.E,s,A.mQ,A.i,0,A.p),A.f,s,s,new B.o(s,s,s,v,s,new B.a9(A.a5,A.a8,A.x,u,s,s),A.n),s,s,s,s,A.cl,s,s,s),5),A.ac,B.E(B.iy(!0,s,s,A.y,C.f7m,new D.eJr(t),8,A.af,s,A.ag,!1),6)],p),A.m,s,A.e,A.i,0,s,s),1)],p),A.E,s,A.e,A.i,0,A.p),A.f,C.bol,s,s,s,s,s,s,A.h5,s,s,s),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,q,s,s,s,s,s,s,!1,A.a4)},
c8Z(){var x,w,v,u,t=this,s=null,r=t.a.e,q=y.p,p=B.B(B.a([C.bXd,A.qJ,C.fQw,A.b0,B.d(t.gaeB(),s,s,s,s,s,s,A.E5,s,s,s)],q),A.m,s,A.e,A.i,0,s,s),o=B.a([],q)
for(x=0;x<8;++x){w=t.d===x
v=w?6:0
u=w?C.dp6:A.Rl
w=w?1.18:1
o.push(new B.D(A.f_,B.dd(s,new B.z1(t.b_d(x,20,44,12,A.c,44),w,A.b6,A.eO,s,s),s,s,A.b6,new B.o(s,s,s,s,u,s,A.n),A.eO,s,s,new B.Q(0,0,0,v),s,s,s,s),s))}return B.aB(s,B.p(s,B.x(B.a([p,A.b0,new B.a6(s,68,B.cg(B.B(o,A.dH,s,A.e,A.i,0,s,s),A.t,s,A.y,s,s,s,s,A.aM),s),A.au,B.d(C.kl[t.d].a,s,s,s,s,s,s,A.oK,s,s,s)],q),A.m,s,A.e,A.i,0,A.p),A.f,s,s,C.b3V,s,s,s,s,C.a_0,s,s,s),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,r,s,s,s,s,s,s,!1,A.a4)},
bE4(){var x,w,v,u,t,s,r=this,q=null,p=r.a.e,o=C.kl[r.d],n=y.p
o=B.E(B.x(B.a([C.fzq,A.b0,B.d(o.b,q,q,q,q,q,q,A.nK,q,q,q),A.au,B.d(o.a,q,q,q,q,q,q,C.feY,q,q,q),A.bD,B.d(o.c,q,q,q,q,q,q,C.ftJ,q,q,q),A.am,B.aB(q,B.p(q,C.fSF,A.f,q,q,C.b4q,q,q,q,q,C.bwO,q,q,q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new D.eJm(r),q,q,q,q,q,q,!1,A.a4),A.b0],n),A.E,q,A.e,A.i,0,A.p),4)
x=B.p(q,q,A.f,C.bm8,q,q,q,q,q,A.eZ,q,q,q,0.6)
w=B.a([],n)
for(v=0;v<8;++v){u=C.kl[v]
t=r.d===v
s=t?C.tz:C.aeI
t=t?12:10.5
w.push(B.aB(q,new B.D(A.u1,new B.y(u.a,q,new B.F(!0,s,q,"serif",q,q,t,A.ji,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q),q,q,q,q,q,q,q,q,q),q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new D.eJn(r,v),q,q,q,q,q,q,!1,A.a4))}return B.aB(q,B.p(q,B.B(B.a([o,x,B.E(B.cf(w,q,q,q,q,A.ag,!1),3)],n),A.m,q,A.e,A.i,0,q,q),A.f,C.brW,q,q,q,q,q,q,A.Gd,q,q,q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,p,q,q,q,q,q,q,!1,A.a4)}}
var z=a.updateTypes(["~()","WN(Z,bu<K>,bu<K>)","~(H)"])
D.fvQ.prototype={
$1(d){var x=null,w=B.fv(x,x,1,x,B.cS(x,x,x,x,x,x,x,x,x,B.l(x,x,this.b,x,x,x,x,x,x,x,x,d,x,x,A.u,x,x,!0,x,x,x,x,x,x,x,x),this.a),A.a3,A.bZ,x,A.dA,A.bW)
w.el()
return w},
$S:477}
D.fvK.prototype={
$1(d){return Math.min(this.a*0.085,this.b*0.44/(d.length*0.62))},
$S:720}
D.fOL.prototype={
$1(d){var x=this.b,w=B.kz(this.a,x,d)
w.toString
x=B.kz(x,this.c,d)
x.toString
x=B.kz(w,x,d)
x.toString
return x},
$S:1978}
D.fio.prototype={
$2(d,e){return A.k.E((this.a-d)/e,0,1)},
$S:79}
D.fil.prototype={
$1(d){return A.dx.av(0,d)},
$S:5}
D.fin.prototype={
$2(d,e){var x=this.b
return new B.t(this.a.a+d*x,this.c.b-e*x)},
$S:389}
D.fim.prototype={
$5(d,e,f,g,h){var x,w,v,u=this.a.$2(h,0.5)
if(u<=0)return
x=this.b
w=x.a
J.bm(w.save())
w.translate(f.a,f.b)
x.bW(0,A.k.E(A.lr.av(0,u),0.01,1.3))
v=this.c
E.fOM(x,A.I,g,d,v,v>4.5?0.6:0)
D.hwt(x,new B.t(0,g*1.42),g,e)
w.restore()},
$S:498}
D.fmS.prototype={
$1(d){var x=this,w=null,v=x.c?A.u:A.a7
v=B.fv(w,w,1,w,B.cS(w,w,w,w,w,w,w,w,w,B.l(w,w,x.b,w,w,w,w,w,w,w,w,d,w,w,v,w,w,!0,w,x.d,w,w,w,w,w,w),x.a),A.a3,A.bZ,w,A.dA,A.bW)
v.el()
return v},
$S:477}
D.fkF.prototype={
$1(d){var x=this,w=null,v=x.c?A.u:A.Q
v=B.fv(w,w,1,w,B.cS(w,w,w,w,w,w,w,w,w,B.l(w,w,x.b,w,w,w,w,w,w,w,w,d,w,w,v,w,w,!0,w,x.d,w,w,w,w,w,w),x.a),A.a3,A.bZ,w,A.dA,A.bW)
v.el()
return v},
$S:477}
D.fw9.prototype={
$2(d,e){return A.k.E((this.a-d)/e,0,1)},
$S:79}
D.fw5.prototype={
$1(d){return A.dx.av(0,d)},
$S:5}
D.fw8.prototype={
$2(d,e){var x=this.b
return new B.t(this.a+d*x,e*x)},
$S:389}
D.fw6.prototype={
$5(d,e,f,g,h){var x,w,v,u=this,t=u.a.$2(h,0.6)
if(t<=0)return
x=u.b
w=x.a
J.bm(w.save())
w.translate(f.a,f.b)
x.bW(0,A.k.E(A.lr.av(0,t),0.01,1.3))
v=u.c
E.fOM(x,A.I,g,d,v,u.d>9.5?0.5+0.3*Math.sin(v*3+d):0)
D.hwt(x,new B.t(0,g*1.42),g,e)
w.restore()},
$S:498}
D.fw7.prototype={
$3(d,e,f){var x,w,v,u,t=this.a.$2(f,0.5)
if(t<=0)return
x=A.k.E(A.lr.av(0,t),0.01,1.3)*(1+0.07*Math.sin(this.b*6))
w=this.c
v=e*x
$.S()
u=B.I()
u.r=A.bB.gp(0)
w.ad(d,v,u)
u=B.I()
u.b=A.aa
u.c=2
u.r=A.c.gp(0)
w.ad(d,v,u)
D.GL(w,"\u2665",d.aF(0,new B.t(e*0.5*x,e*0.62*x)),e*1.3*x,A.c,A.bi,0,null)},
$S:393}
D.fwa.prototype={
$2(d,e){var x,w,v=this.a,u=v.a
v=v.c-u
u+=v*0.08
x=this.b
w=x*d
return new B.a3(u,w,u+v*0.84,w+x*e)},
$S:1980}
D.fWY.prototype={
$3(d,e,f){var x=this
return new D.WN(x.d,x.e,x.a,x.c,x.b,null)},
$C:"$3",
$R:3,
$S:z+1}
D.fWZ.prototype={
$4(d,e,f,g){var x=y.t
return new B.d2(e,!1,B.ir(A.A,g,null,new B.bf(B.cJ(A.cv,e,null),new B.bp(0.85,1,x),x.k("bf<bP.T>"))),null)},
$C:"$4",
$R:4,
$S:33}
D.eJy.prototype={
$0(){var x=this.a
if(x.c!=null&&!x.r)x.m(new D.eJx(x))},
$S:0}
D.eJx.prototype={
$0(){return this.a.y=!1},
$S:0}
D.eJw.prototype={
$0(){var x,w=this.a
w.f=-1
w.e=A.o.F(w.gDw()+this.b,10)
if(w.gDw()<0)w.e=w.gDw()+10
x=w.gaeA().y
x=x==null?null:A.o.ao(x.a,1000)
w.x=x==null?0:x
w.ajx()},
$S:0}
D.eJz.prototype={
$0(){var x=this.a
x.f=this.b
x.r=!1
x.ajx()},
$S:0}
D.eJI.prototype={
$0(){var x=this.a
return x.m(x.gcCW())},
$S:0}
D.eJH.prototype={
$2(d,e){var x=null,w=this.a,v=w.gaeA().y,u=v==null?x:A.o.ao(v.a,1000),t=(u==null?0:u)/1000,s=w.x===0&&w.a.f?t:99
return B.b4(x,x,x,new D.bvY(w.gDw(),w.f,t,s,x),A.fF)},
$S:63}
D.eJG.prototype={
$5$color$on(d,e,f,g,h){var x=null,w=h?g.j(0.28):A.c.j(0.08),v=B.m(14),u=B.J(h?g:A.aZ,A.r,1)
return B.aB(x,B.p(x,B.x(B.a([B.X(d,g,x,x,x,20),A.vb,B.d(e,x,x,x,x,x,x,B.l(x,x,g,x,x,x,x,x,x,x,x,9.5,x,x,A.H,x,x,!0,x,x,x,x,x,x,x,x),x,x,x)],y.p),A.m,x,A.e,A.P,0,A.p),A.f,x,x,new B.o(w,x,u,v,x,x,A.n),x,x,x,A.jA,A.kF,x,x,56),A.y,!1,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,f,x,x,x,x,x,x,!1,A.a4)},
$3(d,e,f){return this.$5$color$on(d,e,f,A.c,!1)},
$4$color(d,e,f,g){return this.$5$color$on(d,e,f,g,!1)},
$S:1981}
D.eJB.prototype={
$0(){return this.a.axK(-1)},
$S:0}
D.eJC.prototype={
$0(){return this.a.axK(1)},
$S:0}
D.eJD.prototype={
$0(){return this.a.axK(0)},
$S:0}
D.eJE.prototype={
$0(){var x=this.a
return x.m(new D.eJA(x))},
$S:0}
D.eJA.prototype={
$0(){var x=this.a
x.r=!x.r
x.ajx()},
$S:0}
D.eJF.prototype={
$0(){return this.a.b14(0)},
$S:0}
D.eJv.prototype={
$0(){var x=this.a
return x.m(new D.eJu(x))},
$S:0}
D.eJu.prototype={
$0(){return this.a.r=!1},
$S:0}
D.eJs.prototype={
$0(){return this.a.d=this.b},
$S:0}
D.eJt.prototype={
$0(){return this.a.b_c(this.b)},
$S:0}
D.eJp.prototype={
$2(d,e){return A.bm},
$S:37}
D.eJo.prototype={
$2(d,e){var x=null,w=this.a,v=w.d===e?1.1:1
v=B.a([B.vF(w.b_d(e,18,46,6,A.c,80),A.b6,A.fO,v)],y.p)
if(w.d===e)v.push(new B.D(A.u_,B.d(C.kl[e].a,x,x,x,x,x,x,C.frT,x,x,x),x))
return B.x(v,A.m,x,A.e,A.P,0,A.p)},
$S:541}
D.eJq.prototype={
$0(){var x=this.a
return x.a.a67(0,x.d)},
$S:0}
D.eJr.prototype={
$2(d,e){return this.a.axL(e,15,1/0,!0,8,A.c,1/0)},
$S:41}
D.eJm.prototype={
$0(){var x=this.a
return x.a.a67(0,x.d)},
$S:0}
D.eJn.prototype={
$0(){return this.a.b_c(this.b)},
$S:0}
D.ck7.prototype={
$2(d,e){var x,w,v,u
for(x=e.length,w=this.a,v=w.$flags|0,u=0;u<x;++u){v&2&&B.aj(w,9)
w.setUint8(d+u,e.charCodeAt(u))}},
$S:525}
D.ck9.prototype={
$0(){var x=this
return D.hP7(x.a,x.b,x.c,x.d,x.e)},
$S:277};(function aliases(){var x=D.aNk.prototype
x.bxE=x.q})();(function installTearOffs(){var x=a._instance_0u,w=a._instance_1u
var v
x(v=D.aFt.prototype,"gb_b","c8X",0)
x(v,"gcCW","ajx",0)
w(v,"gceR","b14",2)})();(function inheritance(){var x=a.mixinHard,w=a.inheritMany,v=a.inherit
w(B.hM,[D.fvQ,D.fvK,D.fOL,D.fil,D.fim,D.fmS,D.fkF,D.fw5,D.fw6,D.fw7,D.fWY,D.fWZ,D.eJG])
w(B.ke,[D.fio,D.fin,D.fw9,D.fw8,D.fwa,D.eJH,D.eJp,D.eJo,D.eJr,D.ck7])
w(B.aD,[D.wD,D.w3,D.xZ])
w(B.ag,[D.WN,D.asv])
w(B.ah,[D.aNk,D.blY])
v(D.aFt,D.aNk)
w(B.jc,[D.eJy,D.eJx,D.eJw,D.eJz,D.eJI,D.eJB,D.eJC,D.eJD,D.eJE,D.eJA,D.eJF,D.eJv,D.eJu,D.eJs,D.eJt,D.eJq,D.eJm,D.eJn,D.ck9])
v(D.bvY,B.mW)
x(D.aNk,B.cq)})()
B.jk(b.typeUniverse,JSON.parse('{"WN":{"ag":[],"v":[]},"aFt":{"ah":["WN"]},"bvY":{"aC":[]},"asv":{"ag":[],"v":[]},"blY":{"ah":["asv"]},"NK":{"ag":[],"v":[]}}'))
var y=(function rtii(){var x=B.aw
return{L:x("O<a3w>"),V:x("O<ac>"),O:x("O<u>"),v:x("O<h9>"),C:x("O<+(K,K,K)>"),s:x("O<n>"),p:x("O<v>"),n:x("O<K>"),t:x("bp<K>"),i:x("K"),S:x("H"),H:x("~")}})();(function constants(){var x=a.makeConstList
C.bev=new B.u(1,0.0196078431372549,0.03137254901960784,0.058823529411764705,A.q)
C.bq1=new B.u(1,0.043137254901960784,0.10196078431372549,0.2,A.q)
C.dg3=x([C.bev,C.bq1],y.O)
C.c4D=new B.a9(A.b4,A.b7,A.x,C.dg3,null,null)
C.b3T=new B.o(null,null,null,null,null,C.c4D,A.n)
C.bnI=new B.u(1,0.42745098039215684,0.47843137254901963,0.5764705882352941,A.q)
C.bcy=new B.u(1,0.16862745098039217,0.1803921568627451,0.26666666666666666,A.q)
C.bdH=new B.u(1,0.4823529411764706,0.29411764705882354,0.41568627450980394,A.q)
C.dsk=x([C.bnI,C.bcy,C.bdH],y.O)
C.c2Y=new B.a9(A.ay,A.aE,A.x,C.dsk,null,null)
C.b3V=new B.o(null,null,null,null,null,C.c2Y,A.n)
C.b_o=new B.dh(0.5,-0.6)
C.brm=new B.u(1,0.22745098039215686,0.054901960784313725,0.10980392156862745,A.q)
C.dbf=x([C.brm,A.ej],y.O)
C.et_=new B.c2(C.b_o,1.3,A.x,null,0,C.dbf,null,null)
C.b43=new B.o(null,null,null,null,null,C.et_,A.n)
C.tz=new B.u(1,0.8392156862745098,0.7176470588235294,0.4823529411764706,A.q)
C.b29=new B.ay(C.tz,1,A.r,-1)
C.b2m=new B.bK(A.a0,A.a0,C.b29,A.a0)
C.b4q=new B.o(null,null,C.b2m,null,null,null,A.n)
C.aee=new B.u(0.9490196078431372,0.06666666666666667,0.07450980392156863,0.09411764705882353,A.q)
C.bc5=new B.u(1,0.16470588235294117,0.16470588235294117,0.17647058823529413,A.q)
C.bc9=new B.u(1,0.00784313725490196,0.01568627450980392,0.03529411764705882,A.q)
C.aeI=new B.u(1,0.6588235294117647,0.6235294117647059,0.5647058823529412,A.q)
C.Xq=new B.u(1,0.24705882352941178,0.5607843137254902,0.30196078431372547,A.q)
C.F0=new B.u(1,0.7215686274509804,0.6980392156862745,0.6549019607843137,A.q)
C.afn=new B.u(1,0.8784313725490196,0.6745098039215687,0.4117647058823529,A.q)
C.afG=new B.u(1,0.00784313725490196,0.011764705882352941,0.0392156862745098,A.q)
C.Fn=new B.u(1,0.06666666666666667,0.0784313725490196,0.09411764705882353,A.q)
C.agx=new B.u(1,0.011764705882352941,0.023529411764705882,0.09019607843137255,A.q)
C.Bh=new B.u(1,0.09019607843137255,0.09019607843137255,0.10196078431372549,A.q)
C.Bj=new B.u(1,0.054901960784313725,0.07058823529411765,0.09411764705882353,A.q)
C.bm8=new B.u(1,0.2901960784313726,0.26666666666666666,0.23529411764705882,A.q)
C.jL=new B.u(1,0.043137254901960784,0.12156862745098039,0.29411764705882354,A.q)
C.ly=new B.u(1,0.09019607843137255,0.09019607843137255,0.10980392156862745,A.q)
C.boh=new B.u(1,0.1843137254901961,0.43529411764705883,0.23137254901960785,A.q)
C.bol=new B.u(1,0.08627450980392157,0.09411764705882353,0.10980392156862745,A.q)
C.boT=new B.u(1,0.24705882352941178,0.3843137254901961,0.07058823529411765,A.q)
C.ni=new B.u(1,0.10588235294117647,0.10588235294117647,0.12156862745098039,A.q)
C.Z_=new B.u(1,1,0.9529411764705882,0.6274509803921569,A.q)
C.aiw=new B.u(1,0.8392156862745098,0.7254901960784313,0.5490196078431373,A.q)
C.brW=new B.u(1,0.10196078431372549,0.09019607843137255,0.0784313725490196,A.q)
C.bwO=new B.Q(0,0,0,1)
C.tY=new B.Q(0,0,7,0)
C.bxD=new B.Q(10,10,10,0)
C.a_0=new B.Q(10,6,10,8)
C.ajW=new B.Q(14,10,10,10)
C.anp=new B.a0(62970,"MaterialIcons",!1)
C.aoj=new B.a0(983316,"MaterialIcons",!1)
C.uv=new B.a0(983617,"MaterialIcons",!1)
C.bSn=new B.ae(A.Cq,13,A.ae,null,null,null)
C.bWB=new B.ae(A.fl,13,A.ae,null,null,null)
C.bNV=new B.a0(983768,"MaterialIcons",!1)
C.bXd=new B.ae(C.bNV,13,A.c,null,null,null)
C.cJZ=x([A.aQ,A.jc,A.pT],y.O)
C.c1M=new B.a9(A.b4,A.b7,A.x,C.cJZ,null,null)
C.c1S=new B.a9(A.b4,A.b7,A.x,L.QV,null,null)
C.d4g=x([A.fc,A.dG,A.cS],y.O)
C.c23=new B.a9(A.b4,A.b7,A.x,C.d4g,null,null)
C.d2t=x([A.dP,A.aw],y.O)
C.c2L=new B.a9(A.b4,A.b7,A.x,C.d2t,null,null)
C.LO=new B.u(1,0.11764705882352941,0.30980392156862746,0.6392156862745098,A.q)
C.cJv=x([C.jL,C.LO,A.aC,A.bL],y.O)
C.djG=x([0,0.42,0.8,1],y.n)
C.c3_=new B.a9(A.b4,A.b7,A.x,C.cJv,C.djG,null)
C.drq=x([A.bO,A.c,A.bM],y.O)
C.c31=new B.a9(A.a5,A.a8,A.x,C.drq,null,null)
C.ds2=x([A.hf,A.fN],y.O)
C.c3R=new B.a9(A.b4,A.b7,A.x,C.ds2,null,null)
C.diV=x([A.dt,A.ob],y.O)
C.c3Y=new B.a9(A.b4,A.b7,A.x,C.diV,null,null)
C.c4Y=new B.a9(A.b4,A.b7,A.x,H.a3D,null,null)
C.de3=x([A.aL,A.al],y.O)
C.c5m=new B.a9(A.b4,A.b7,A.x,C.de3,null,null)
C.c6h=x(["Add every person","Link mums, dads, kids","Keep it for ever"],y.s)
C.ars=x([1],y.n)
C.ciZ=x([1,2,3],y.n)
C.av5=x([1,-1],y.n)
C.Tx=new B.z(2,3)
C.Ty=new B.z(3,4)
C.cq3=x([A.m8,A.yH],B.aw("O<a0>"))
C.cqg=x([-0.05,0.05],y.n)
C.ego=new B.t(26,-8)
C.ehd=new B.t(52,0)
C.egn=new B.t(26,8)
C.cqE=x([A.I,C.ego,C.ehd,C.egn],B.aw("O<t>"))
C.awT=x([A.c2,A.aQ,A.dP,A.bj,A.cS],y.O)
C.cIQ=x([1,2,3,4,5,6,7],y.n)
C.eWc=new B.bk(-0.2,0.46,0.12)
C.eTS=new B.bk(0.2,0.46,0.12)
C.eUA=new B.bk(0,0.52,0.15)
C.eTa=new B.bk(0,0.7,0.1)
C.cKd=x([C.eWc,C.eTS,C.eUA,C.eTa],y.C)
C.cVW=x([A.eP,A.bL,A.Ms,A.et],y.O)
C.cXd=x([1,2.76,5.4,8.93,13.3],y.n)
C.axT=x([A.cS,A.bG,A.c2,A.bj],y.O)
C.cYt=x([1,0.6,0.38,0.22,0.12],y.n)
C.eAC=new B.z("Chairs",120)
C.eAF=new B.z("Cloth",80)
C.eAZ=new B.z("Delivery",25)
C.ayf=x([C.eAC,C.eAF,C.eAZ],B.aw("O<+(n,H)>"))
C.d20=x([1,0.7,0.45,0.28,0.16,0.1,0.06],y.n)
C.d21=x([1,0.55,0.32,0.2,0.12,0.07],y.n)
C.ea_=new D.xZ("NGMY Tree Story","A family grows, one branch at a time")
C.e9V=new D.xZ("Coin Hero","A little coin saves up and wins the day")
C.ea2=new D.xZ("Space Voyage","The NGMY rocket explores the stars")
C.e9U=new D.xZ("Ocean Friends","Fish, bubbles and a friendly whale")
C.e9W=new D.xZ("Rainy Village","Storm clouds, then a rainbow")
C.e9Y=new D.xZ("Spark Adventure","Follow a spark round a circuit")
C.e9X=new D.xZ("Fireworks Night","Colour bursts over the city")
C.ea1=new D.xZ("Little Train","A train rolls past the hills")
C.e9Z=new D.xZ("Robot Disco","A robot dances to the beat")
C.ea0=new D.xZ("Garden Time","Flowers grow and butterflies fly")
C.R0=x([C.ea_,C.e9V,C.ea2,C.e9U,C.e9W,C.e9Y,C.e9X,C.ea1,C.e9Z,C.ea0],B.aw("O<xZ>"))
C.d6n=x([1,0.6,0.45,0.3,0.22,0.15],y.n)
C.ayY=x([A.c2,A.bG,A.aw,A.bw,A.cS],y.O)
C.d7z=x([1,2,3,4,5,6],y.n)
C.d94=x([A.hf,A.ob],y.O)
C.d96=x([A.bk,A.aC,A.cV],y.O)
C.dBM=new D.w3("NGMY Ads","\ud83d\udce2","Every NGMY promotion, as cartoons",A.c2,-1)
C.dBK=new D.w3("Civic Registry","\ud83e\udeaa","Enroll your family in your community",A.d3,0)
C.dBN=new D.w3("Jobs","\ud83d\udcbc","Find work and get hired",A.aC,1)
C.dBP=new D.w3("NGMY Store","\ud83d\udecd\ufe0f","African food and traditions",A.fs,2)
C.dBQ=new D.w3("Kiswahili","\ud83d\udde3\ufe0f","Learn Swahili and English",A.bP,3)
C.dBO=new D.w3("Doc Scanner","\ud83d\udcc4","Scan, save and share",A.cg,4)
C.dBL=new D.w3("Invoices","\ud83e\uddfe","Professional invoices",A.bB,5)
C.dBJ=new D.w3("Calendar","\ud83d\udcc5","This month, today lit up",A.aw,-2)
C.kl=x([C.dBM,C.dBK,C.dBN,C.dBP,C.dBQ,C.dBO,C.dBL,C.dBJ],B.aw("O<w3>"))
C.eHV=new B.z("Jambo! Habari yako?","Nzuri, asante!")
C.eB7=new B.z("Jina lako nani?","Jina langu ni Amina.")
C.eBR=new B.z("Karibu nyumbani!","Asante sana!")
C.eHU=new B.z("Naenda shule leo.","I am going to school.")
C.eJ_=new B.z("Ninapenda kujifunza!","I love to learn!")
C.eSk=new B.z("Maji, tafadhali.","Water, please.")
C.eFO=new B.z("Rafiki yangu mpendwa","My dear friend")
C.eKx=new B.z("Tuonane kesho!","See you tomorrow!")
C.eLu=new B.z("Pole sana, rafiki.","I am so sorry, friend.")
C.eHT=new B.z("Hongera! Umefaulu!","Congratulations! You passed!")
C.eD5=new B.z("Mimi ni mwanafunzi.","I am a student.")
C.exy=new B.z("Chakula kitamu sana!","The food is so delicious!")
C.eRU=new B.z("Safari njema!","Have a good trip!")
C.etF=new B.z("Unaongea Kiswahili vizuri!","You speak Swahili well!")
C.azd=x([C.eHV,C.eB7,C.eBR,C.eHU,C.eJ_,C.eSk,C.eFO,C.eKx,C.eLu,C.eHT,C.eD5,C.exy,C.eRU,C.etF],B.aw("O<+(n,n)>"))
C.eVf=new B.bk(-0.3,0.32,0.2)
C.eTg=new B.bk(-0.08,0.17,0.22)
C.eTh=new B.bk(0.14,0.14,0.2)
C.eUI=new B.bk(0.34,0.3,0.2)
C.eWD=new B.bk(0,0.32,0.26)
C.eUr=new B.bk(-0.42,0.46,0.15)
C.eWy=new B.bk(0.42,0.46,0.15)
C.eVs=new B.bk(0,0.07,0.15)
C.aze=x([C.eVf,C.eTg,C.eTh,C.eUI,C.eWD,C.eUr,C.eWy,C.eVs],y.C)
C.hgV=new D.wD("NGMY Civic Registry","Enroll your family. Stay counted and helped together.",A.d7,A.aQ)
C.hh8=new D.wD("NGMY Jobs","Find work. Get hired. Get paid.",A.d1,A.aU)
C.hh5=new D.wD("NGMY Store","African food and traditions. Support our Congolese and African community.",A.ke,A.bG)
C.hh0=new D.wD("Kiswahili School","Learn Swahili and English, step by step.",A.cO,A.mB)
C.hgY=new D.wD("Document Scanner","Scan, save and share your papers.",A.q1,A.hc)
C.hgW=new D.wD("Invoice Creator","Make professional invoices in minutes.",A.pM,A.nU)
C.hgS=new D.wD("Family Book and Tree","Write your family story. Grow your tree.",A.iR,A.LB)
C.hgU=new D.wD("NGMY Wallet","Save, send and earn coins.",A.pV,A.dP)
C.hgX=new D.wD("Vault Games","Play, win and learn.",A.dF,A.b9)
C.hh6=new D.wD("Electronics Lab","Build real circuits and learn.",A.eR,A.b2)
C.hh1=new D.wD("NGMY Helper and Advisors","Friendly help, any time.",A.l0,A.cS)
C.dcS=x([C.hgV,C.hh8,C.hh5,C.hh0,C.hgY,C.hgW,C.hgS,C.hgU,C.hgX,C.hh6,C.hh1],B.aw("O<wD>"))
C.diW=x([A.dF,A.fc],y.O)
C.djp=x(["For you","Apps","Library"],y.s)
C.aA8=x([A.bx,A.bG,A.cV,A.av],y.O)
C.aAe=x([-16,16],y.n)
C.RC=x([-22,22],y.n)
C.a4Z=x([-24,24],y.n)
C.a50=x([-5,5],y.n)
C.aAk=x([-8,8],y.n)
C.dmB=x([A.aJ,A.al],y.O)
C.dmF=x([1,2,3,4,6,8],y.n)
C.dnz=x([1,0.5,0.33,0.25,0.2,0.16,0.14,0.12],y.n)
C.b6o=new B.ac(0,A.G,A.aS,A.dr,14)
C.dp6=x([C.b6o],y.V)
C.dpm=x([1,2,3,4,5,6,7,8],y.n)
C.dqV=x([A.aw,A.ce,A.bG,A.be,A.d3,A.b5],y.O)
C.drW=x(["M","T","W","T","F","S","S"],y.s)
C.dt9=x([A.c,A.nX],y.O)
C.dtV=x([1,0.18,0.06],y.n)
C.edt={"SPARK PAINTER":0,"MANDALA MAKER":1,"TITLE ANIMATOR":2,"PALETTE LAB":3,"GRAVITY TOY":4,"FIREWORK DESIGNER":5,"CIRCUIT LAB":6,"PERIODIC TABLE":7,"BODY EXPLORER":8,"SPIN THE WHEEL":9,"FOCUS TIMER":10,"MEMORY MATCH":11,"LUCKY POCKET":12,"ELECTRONICS LAB":13,"CONSTRUCTION LAB":14,"AI INVENTOR":15,"MAGNET LAB":16,"RADIO LAB":17,"POWER PLANT":18,"POWER GRID":19,"INTERNET JOURNEY":20,"ROBOT CODER":21,"BUG SMASHER":22,"ROCKET LANDER":23,"DATA SNAKE":24,"BINARY 2048":25,"SIGNAL BREAKER":26,"PASSWORD LAB":27,"WAVE LAB":28,"BUG HUNT":29,"OPTICS LAB":30,"ATOM BUILDER":31,"PIXEL TV":32}
C.aGv=new B.bw(C.edt,["sparkle","sparkle","whoosh","click","bounce","pop","tech","lab","organic","click","tech","bubble","click","tech","tech","tech","tech","tech","tech","tech","tech","tech","pop","space","bubble","click","zap","click","tech","click","sparkle","lab","tech"],B.aw("bw<n,n>"))
C.aem=new B.u(1,0.16862745098039217,0.1843137254901961,0.21176470588235294,A.q)
C.dzn=new B.hg(A.G,1.2)
C.cqI=x([A.eP,A.e7,A.jM],y.O)
C.esG=new B.c2(I.xl,0.5,A.x,null,0,C.cqI,null,null)
C.cGO=x([A.lZ,A.mv],y.O)
C.esI=new B.c2(H.abY,0.5,A.x,null,0,C.cGO,null,null)
C.bXI=new B.ae(A.fl,11,A.ae,null,null,null)
C.fpI=new B.F(!0,A.aR,null,null,null,null,9,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.fNr=new B.y("Search",null,C.fpI,null,null,null,null,null,null,null,null,null)
C.cLd=x([C.bXI,A.qJ,C.fNr],y.p)
C.f0R=new B.ce(A.aM,A.e,A.i,A.m,null,A.p,null,0,C.cLd,null)
C.f7m=new B.hR(3,5,5,1.35,null)
C.bqE=new B.u(1,0.9450980392156862,0.9098039215686274,0.8470588235294118,A.q)
C.feY=new B.F(!0,C.bqE,null,"serif",null,null,15,A.ji,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.fmT=new B.F(!0,A.ae,null,null,null,null,9.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.fnu=new B.F(!0,A.aR,null,null,null,null,9.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.UU=new B.F(!0,A.ae,null,null,null,null,12.5,null,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.aTF=new B.F(!0,A.ae,null,null,null,null,10,A.Q,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.frT=new B.F(!0,A.c,null,null,null,null,8.5,A.Q,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.Ec=new B.F(!0,A.ae,null,null,null,null,12.5,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.ftp=new B.F(!0,A.ae,null,null,null,null,8.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.ftJ=new B.F(!0,C.aeI,null,null,null,null,8.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.fkd=new B.F(!0,A.aB,null,null,null,null,9.5,A.Q,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.fw6=new B.y("NGMY Apps",null,C.fkd,null,null,null,null,null,null,null,null,null)
C.fgE=new B.F(!0,C.tz,null,null,null,null,8,A.a7,null,3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.fzq=new B.y("BANG & OLUFSEN",null,C.fgE,null,null,null,null,null,null,null,null,null)
C.fmA=new B.F(!0,A.w,null,null,null,null,9,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.fzS=new B.y("Open",null,C.fmA,null,null,null,null,null,null,null,null,null)
C.fD7=new B.y("Home",null,C.aTF,null,null,null,null,null,null,null,null,null)
C.fEa=new B.y("SAMSUNG",null,A.aTl,null,null,null,null,null,null,null,null,null)
C.fKo=new B.y("LG",null,A.wY,null,null,null,null,null,null,null,null,null)
C.fQw=new B.y("tv",null,A.qN,null,null,null,null,null,null,null,null,null)
C.fk7=new B.F(!0,C.tz,null,null,null,null,8.5,null,null,2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.fSF=new B.y("OPEN",null,C.fk7,null,null,null,null,null,null,null,null,null)})();(function staticFields(){$.hP6=B.U(B.aw("n"),B.aw("dK"))
$.ck6=B.a([],B.aw("O<aiS>"))
$.hja=0
$.ass="music"})()};
(a=>{a["N/nWCGCGJzoXPr15peMYR0Nf+kg="]=a.current})($__dart_deferred_initializers__);