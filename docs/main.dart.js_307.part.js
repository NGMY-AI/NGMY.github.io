((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,A,G,E,H,I,K,F,L,D={
FY(d,e){var x
$.W()
x=B.M()
x.b=A.ae
x.c=e
x.r=d.gp(0)
x.d=A.bO
return x},
rK(d,e,f,g,h,i){var x=new D.fnn(e,h,!0),w=x.$1(g),v=w.b.c
if(v>i&&v>0)w=x.$1(Math.max(2,g*i/v))
x=w.b
v=x.c
x=x.a.c
w.a5(d,f.aB(0,new B.u(v/2,x.gbc(x)/2)))},
Cy(a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=a6.a
J.bz(a5.save())
a5.translate(a7.a,a7.b-b1)
x=B.cl(new B.u(0,b1+a8*0.005),a8*0.06,a8*0.45)
w=A.w.j(0.22)
$.W()
v=B.M()
v.r=w.gp(0)
a6.hO(x,v)
for(x=a8*0.05,w=-a8,v=w*0.24,u=a8*0.1,t=v+a8*0.2,s=a8*0.04,r=a8*0.065,q=w*0.05,p=a8*0.14,o=q+x,n=a8*0.025,m=0;m<2;++m){l=C.oU[m]*a8*0.075
k=l-x
k=B.bx(new B.a9(k,v,k+u,t),new B.aT(s,s))
j=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
j.r=A.dr.gp(0)
i=j.H()
a5.drawRRect(B.er(k),i)
i.delete()
l-=r
l=B.bx(new B.a9(l,q,l+p,o),new B.aT(n,n))
k=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
k.r=A.c.gp(0)
i=k.H()
a5.drawRRect(B.er(l),i)
i.delete()}x=w*0.16
v=w*0.52
u=a8*0.32
t=x+u
r=a8*0.09
h=B.bx(new B.a9(x,v,t,v+u),new B.aT(r,r))
r=B.M()
r.r=b3.gp(0)
a6.aD(h,r)
r=w*0.27
u=a8*0.02
u=B.bx(new B.a9(x,r,t,r+a8*0.045),new B.aT(u,u))
r=A.c.j(0.35)
t=B.M()
t.r=r.gp(0)
a6.aD(u,t)
t=w*0.47
g=new B.u(w*0.15,t)
f=new B.u(a8*0.15,t)
t=w*0.06
u=a8*0.07
a6.bB(g,g.ad(0,new B.u(t,a8*0.17)),D.FY(b4,u))
t=g.ad(0,new B.u(t,a8*0.18))
r=B.M()
r.r=b4.gp(0)
a6.ae(t,s,r)
e=b0?-2.5+b6*0.5:0.5-b6*2.2
d=f.ad(0,new B.u(Math.sin(e)*a8*0.2,Math.cos(e)*a8*0.2))
a6.bB(f,d,D.FY(b4,u))
x=B.M()
x.r=b4.gp(0)
a6.ae(d,s,x)
w*=0.7
a0=new B.u(0,w)
a1=a8*0.22
if(b2===1){x=a0.ad(0,new B.u(0,-a1*0.12))
v=B.M()
v.r=C.E2.gp(0)
a6.ae(x,a1*1.18,v)}x=B.M()
x.r=b4.gp(0)
a6.ae(a0,a1,x)
if(b2===0){x=B.bU(a0,a1)
v=B.M()
v.r=C.E2.gp(0)
a6.f5(x,3.141592653589793,3.141592653589793,!0,v)}else if(b2===2){x=B.bU(a0,a1)
v=B.M()
v.r=C.E2.gp(0)
a6.f5(x,3.141592653589793,3.141592653589793,!0,v)
for(x=w+a1*0.3,v=a1*0.2,m=0;m<2;++m){a2=C.oU[m]
u=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
u.r=C.E2.gp(0)
i=u.H()
a5.drawCircle(0+a2*a1*1.05,x,v,i)
i.delete()}}a3=A.k.F(a9*0.8,3)>2.85
for(x=w+a1*0.42,v=a1*0.12,u=a1*0.25,t=a9*0.7,s=a1*0.13,w+=a1*0.05,r=-a1*0.15,q=w+0,p=a1*0.15,m=0;m<2;++m){o=C.oU[m]*a1
n=0+o*0.4
if(a3){l=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
l.b=A.ae
l.c=1.6
l.r=A.bi.gp(0)
l.d=A.bO
i=l.H()
a5.drawLine.apply(a5,[n+r,q,n+p,q,i])
i.delete()}else{l=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
l.r=A.c.gp(0)
i=l.H()
a5.drawCircle(n,w,u,i)
i.delete()
l=Math.sin(t)
k=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
k.r=A.w.gp(0)
i=k.H()
a5.drawCircle(n+l*a1*0.06,q,s,i)
i.delete()}n=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
n.r=A.j7.j(0.5).gp(0)
i=n.H()
a5.drawCircle(0+o*0.62,x,v,i)
i.delete()}x=a1*0.5
a4=a0.ad(0,new B.u(0,x))
w=a1*0.4
if(b5){x=B.cl(a4,w*(0.35+0.65*((Math.sin(a9*12)+1)/2)),x)
w=B.M()
w.r=A.es.gp(0)
a6.hO(x,w)}else a6.f5(B.cl(a4.aB(0,new B.u(0,a1*0.1)),w,a1*0.65),0.2,2.741592653589793,!1,D.FY(A.bi,1.8))
a5.restore()},
aNL(d,e,f,g,h,i){var x,w,v,u,t,s,r,q=null
if(h<=0)return
x=d.a
J.bz(x.save())
x.translate(e.a,e.b)
d.bX(0,A.k.D(A.mN.aw(0,A.k.D(h,0,1)),0.01,1.3))
w=B.hL(q,q,q,q,B.dh(q,q,q,q,q,q,q,q,q,B.l(q,q,A.aB,q,q,q,q,q,q,q,q,g,q,q,A.u,q,q,!0,q,q,q,q,q,q,q,q),f),A.a4,A.ce,q,A.e9,A.ca)
w.eF()
v=w.b
u=v.c
v=v.a.c
t=g*0.8
s=B.bx(B.cl(A.J,v.gbc(v)+g*0.7,u+g*1.1),new B.aT(t,t))
t=$.W()
u=B.M()
u.r=i.gp(0)
d.aD(s,u)
t=new B.aO(t.r,A.ap,q,q,B.a([],y.v))
u=-g
v=s.d
r=v-1
t.E(new B.b5(u*0.3,r))
t.E(new B.ap(u*0.7,v+g*0.6))
t.E(new B.ap(g*0.2,r))
t.E(new B.bF())
r=B.M()
r.r=i.gp(0)
d.aO(t,r)
r=w.b
t=r.c
r=r.a.c
w.a5(d,new B.u(-t/2,-r.gbc(r)/2))
x.restore()},
fVz(d,e,f,g){var x,w=A.k.D(Math.abs(Math.cos(g)),0.15,1),v=f*2,u=v*w,t=B.cl(e,v,u)
$.W()
x=B.M()
x.r=A.cf.gp(0)
d.hO(t,x)
d.hO(B.cl(e,v,u),D.FY(A.pt,f*0.18))
if(w>0.5)D.rK(d,"$",e,f*1.2,A.pt,9999)},
hNk(d,e,f,g){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=new B.eL()
k.dB(4)
for(x=e.a,w=f-g,v=e.b,u=d.a,t=f*3,s=v*0.025,r=v*0.012,q=0;q<18;++q){p=k.aj()
o=A.k.F(w*(40+k.aj()*60)+k.aj()*v,v)
J.bz(u.save())
u.translate(p*x,o)
u.rotate((t+q)*180/3.141592653589793,0,0)
p=B.cl(A.J,r,s)
n=C.atQ[A.o.F(q,5)]
$.W()
m=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
m.r=n.gp(0)
l=m.H()
u.drawRect(B.c0(p),l)
l.delete()
u.restore()}},
hWV(d,e,f,g){switch(A.o.F(f,11)){case 0:D.hMX(d,e,g)
break
case 1:D.hPS(d,e,g)
break
case 2:D.hV3(d,e,g)
break
case 3:D.hVi(d,e,g)
break
case 4:D.hUd(d,e,g)
break
case 5:D.hPy(d,e,g)
break
case 6:D.hMi(d,e,g)
break
case 7:D.hW_(d,e,g)
break
case 8:D.hOB(d,e,g)
break
case 9:D.hPW(d,e,g)
break
default:D.hPa(d,e,g)}},
hMX(a2,a3,a4){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null,d=a3.a,a0=a3.b,a1=a0*0.94
for(x=a2.a,w=d*0.12,v=d*0.06,u=a0*0.06,t=y.v,s=0;s<6;++s){r=d*(0.04+s*0.17)
q=a0*(0.18+0.08*A.o.F(s,3))
p=a1-q
o=r+w
n=A.c.j(0.2)
m=$.W()
l=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
l.r=n.gp(0)
k=l.H()
x.drawRect(B.c0(new B.a9(r,p,o,p+q)),k)
k.delete()
l=B.a([],t)
m=new B.aO(m.r,A.ap,e,e,l)
l.push(new B.b5(r-3,p))
l.push(new B.ap(r+v,p-u))
l.push(new B.ap(o+3,p))
l.push(new B.bF())
p=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
p.r=A.c.j(0.3).gp(0)
k=p.H()
p=m.gbL().a.snapshot()
x.drawPath((m.e=new B.cF(p)).a,k)
k.delete()}w=A.w.j(0.18)
$.W()
v=B.M()
v.r=w.gp(0)
a2.aZ(new B.a9(0,a1,0+d,a1+(a0-a1)),v)
j=Math.cos(a4*1.6)
i=Math.min(d*0.46,a0*0.95)
h=i*0.62
J.bz(x.save())
v=d*0.58
x.translate(v,a0*0.45)
a2.t6(0,Math.max(0.08,Math.abs(j)),1)
w=h*0.1
g=B.bx(B.cl(A.J,h,i),new B.aT(w,w))
u=B.M()
t=j>=0
u.saq(new B.a8(A.a3,A.a7,A.x,t?C.dfs:C.d6j,e,e).av(0,new B.a9(g.a,g.b,g.c,g.d)))
a2.aD(g,u)
a2.aD(g,D.FY(A.dr,2))
if(t){u=-i
t=u*0.28
p=-h
o=p*0.05
n=h*0.22
m=B.M()
m.r=C.tm.gp(0)
a2.ae(new B.u(t,o),n,m)
n=B.bU(new B.u(t,o),n)
o=B.M()
o.r=C.E2.gp(0)
a2.f5(n,3.141592653589793,3.141592653589793,!0,o)
for(u*=0.05,t=p*0.25,o=h*0.07,s=0;s<3;++s){n=t+s*h*0.16
n=B.bx(new B.a9(u,n,u+i*(0.42-s*0.06),n+o),A.hC)
m=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
m.r=A.dv.gp(0)
k=m.H()
x.drawRRect(B.er(n),k)
k.delete()}D.rK(a2,"COMMUNITY ID",new B.u(0,p*0.4),w,A.dr,i*0.8)}else D.rK(a2,"\u2605 NGMY \u2605",A.J,h*0.16,A.c,i*0.8)
x.restore()
w=a4>2.6
if(w){s=A.k.D((a4-2.6)/0.35,0,1)
J.bz(x.save())
x.translate(v,a0*0.52)
a2.j1(0,-0.25)
a2.bX(0,2.2-1.2*A.ev.aw(0,s))
f=B.cl(A.J,h*0.3,i*0.7)
a2.aD(B.bx(f,A.hd),D.FY(A.d_.j(s),3))
D.rK(a2,"\u2713 REGISTERED",A.J,h*0.13,A.d_.j(s),(f.c-f.a)*0.9)
x.restore()}x=a4*5
v=Math.sin(x)
x=Math.sin(x)
w=w&&a4<4
D.Cy(a2,new B.u(d*0.2,a1),a0*0.7,a4,!1,Math.abs(x)*a0*0.015,0,A.d_,C.tm,w,(v+1)/2)
if(a4>3)D.hNk(a2,new B.at(d,a0*0.9),a4,3)},
hPS(a6,a7,a8){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=a7.a,a3=a7.b,a4=a3*0.94,a5=A.w.j(0.2)
$.W()
x=B.M()
x.r=a5.gp(0)
a6.aZ(new B.a9(0,a4,0+a2,a4+(a3-a4)),x)
w=a2*0.62
v=a2*0.3
u=a3*0.62
x=a4-u
a5=w+v
t=B.M()
t.r=A.bm.gp(0)
a6.aZ(new B.a9(w,x,a5,x+u),t)
for(t=a6.a,s=a8*1.5,r=v*0.2,q=u*0.1,p=0;p<4;++p)for(o=x+u*(0.1+p*0.17),n=o+q,m=0;m<3;++m){l=w+v*(0.12+m*0.3)
k=A.o.F(p+m+A.k.bt(s),3)===0?A.dO:A.aS.j(0.6)
$.W()
j=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
j.r=k.gp(0)
i=j.H()
t.drawRect(B.c0(new B.a9(l,o,l+r,n)),i)
i.delete()}s=w+v*0.38
r=u*0.16
q=a4-r
$.W()
o=B.M()
o.r=A.fx.gp(0)
a6.aZ(new B.a9(s,q,s+v*0.24,q+r),o)
o=x-a3*0.09
r=a3*0.02
o=B.bx(new B.a9(w,o,a5,o+a3*0.08),new B.aT(r,r))
a5=B.M()
a5.r=A.aH.gp(0)
a6.aD(o,a5)
a5=a3*0.05
o=a3*0.06
D.rK(a6,"JOBS",new B.u(w+v/2,x-a5),o,A.c,9999)
h=A.k.D(a8/2.8,0,1)
x=a2*0.12
g=x+(w+v*0.3-x)*A.dC.aw(0,h)
x=h<1
f=x?Math.abs(Math.sin(a8*12))*a3*0.02:0
s=h>=1
q=s?(Math.sin(a8*6)+1)/2:0
D.Cy(a6,new B.u(g,a4),a3*0.6,a8,!1,f,2,A.b7,A.L5,s,q)
if(x){x=B.bx(B.cl(new B.u(g-a3*0.12,a4-a3*0.17-f),a3*0.075,a3*0.1),A.hC)
q=B.M()
q.r=A.fx.gp(0)
a6.aD(x,q)}if(s){x=a8-2.8
D.aNL(a6,new B.u(g+a5,a4-a3*0.78),"Hired! \ud83c\udf89",a3*0.07,x/0.4,A.c)
for(a5=x*0.8,x=a4-a3*0.5,s=a3*0.03,q=a8*8,e=0;e<6;++e){d=A.k.F(a5+e*0.17,1)
D.fVz(a6,new B.u(g+Math.sin(e*2.1)*a3*0.2,x-d*a3*0.25),s,q+e)}}a5=a2*0.04
x=a5+v
s=o+a3*0.3
r=B.bx(new B.a9(a5,o,x,s),new B.aT(r,r))
$.W()
q=B.M()
q.r=A.iv.gp(0)
a6.aD(r,q)
for(x-=a5,r=a5+x*0.08,s-=o,q=x*0.84,n=s*0.24,a5+=x*0.14,x*=0.5,l=s*0.05,e=0;e<3;++e){k=(1-A.k.D((a8-e*0.5)/0.5,0,1))*a2*0.3
j=r+k
a0=e*0.3
a1=o+s*(0.08+a0)
a1=B.bx(new B.a9(j,a1,j+q,a1+n),A.hC)
j=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
j.r=A.c.gp(0)
i=j.H()
t.drawRRect(B.er(a1),i)
i.delete()
k=a5+k
a0=o+s*(0.14+a0)
a1=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
a1.r=A.bJ.gp(0)
i=a1.H()
t.drawRect(B.c0(new B.a9(k,a0,k+x,a0+l)),i)
i.delete()}},
hV3(a1,a2,a3){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=a2.a,e=a2.b,d=e*0.94,a0=A.fx.j(0.6)
$.W()
x=B.M()
x.r=a0.gp(0)
a1.aZ(new B.a9(0,d,0+f,d+(e-d)),x)
w=f*0.3
v=f*0.66
for(a0=v/12,x=e*0.14,u=a0+1,t=x+e*0.12,s=a1.a,r=0;r<12;++r){q=w+a0*r
p=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
p.r=C.awT[A.o.F(r,4)].gp(0)
o=p.H()
s.drawRect(B.c0(new B.a9(q,x,q+u,t)),o)
o.delete()}for(u=e*0.2,t=e*0.1,q=u+t,r=0;r<12;++r){p=w+a0*r
n=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
n.r=C.awT[A.o.F(r,4)].gp(0)
o=n.H()
s.drawArc.apply(s,[B.c0(new B.a9(p,u,p+a0,q)),0,180,!0,o])
o.delete()}a0=w+4
u=e*0.3
q=u+(d-u)
p=B.M()
p.r=A.fx.gp(0)
a1.aZ(new B.a9(a0,u,a0+4,q),p)
p=w+v
a0=p-8
n=B.M()
n.r=A.fx.gp(0)
a1.aZ(new B.a9(a0,u,a0+4,q),n)
n=e*0.68
q=n+e*0.26
a0=B.bx(new B.a9(w,n,p,q),A.ik)
u=B.M()
u.r=A.iv.gp(0)
a1.aD(a0,u)
for(a0=p-w,u=a0/6,p=n+2,a0/=12,q=p+(q-n-4),r=0;r<6;++r){m=w+u*r
l=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
l.r=((r&1)===0?A.bI:A.cf).j(0.9).gp(0)
o=l.H()
s.drawRect(B.c0(new B.a9(m,p,m+a0,q)),o)
o.delete()}a0=w+v*0.2
u=e*0.62
k=new B.u(a0,u)
q=e*0.17
p=e*0.03
m=B.bx(B.cl(k,e*0.11,q),new B.aT(p,p))
l=B.M()
l.r=A.cD.gp(0)
a1.aD(m,l)
l=-e
q=B.cl(k.ad(0,new B.u(0,l*0.05)),e*0.04,q)
m=B.M()
m.r=A.fo.gp(0)
a1.hO(q,m)
for(q=a3*0.8,l*=0.08,m=e*0.015,r=0;r<3;++r){j=A.k.F(q+r*0.33,1)
i=Math.sin(j*6+r)
h=j*e
g=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
g.r=A.c.j(0.6*(1-j)).gp(0)
o=g.H()
s.drawCircle(a0+i*5,u+(l-h*0.14),m+h*0.02,o)
o.delete()}for(a0=w+v*0.5,q=e*0.018,r=0;r<5;++r){m=B.cl(new B.u(a0,u),x,e*(0.1+r*0.01))
l=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
l.b=A.ae
l.c=q
l.r=A.cf.gp(0)
l.d=A.bO
o=l.H()
s.drawArc.apply(s,[B.c0(m),(0.4+r*0.1)*57.29577951308232,108.8619810748564,!1,o])
o.delete()}for(a0=e*0.63,x=e*0.032,r=0;r<4;++r){u=A.o.F(r,2)
q=A.o.an(r,2)
m=(r&1)===0?A.ci:A.x3
l=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
l.r=m.gp(0)
o=l.H()
s.drawCircle(w+v*(0.72+0.06*u)+r*e*0.02,a0+q*e*0.035,x,o)
o.delete()}D.Cy(a1,new B.u(f*0.14,d),n,a3,!1,0,1,A.cf,E.adr,!0,(Math.sin(a3*5)+1)/2)
for(a0=a3*0.45,x=f*0.16,u=e*0.45,s=e*0.06,r=0;r<5;++r){j=A.k.F(a0+r*0.2,1)
D.rK(a1,"\u2665",new B.u(x+Math.sin(j*5+r)*e*0.08+r*e*0.03,u-j*e*0.4),s,A.ay.j(1-j),9999)}a0=w+v/2
x=e*0.08
p=B.bx(B.cl(new B.u(a0,x),t,v*0.7),new B.aT(p,p))
$.W()
t=B.M()
t.r=A.aB.gp(0)
a1.aD(p,t)
D.rK(a1,"NGMY STORE \xb7 African food",new B.u(a0,x),e*0.05,A.dO,v*0.64)},
hVi(d,e,f){var x,w,v,u,t,s,r=e.a,q=e.b,p=q*0.94,o=A.w.j(0.2)
$.W()
x=B.M()
x.r=o.gp(0)
d.aZ(new B.a9(0,p,0+r,p+(q-p)),x)
w=A.o.F(A.k.bt(f/1.5),4)
v=A.k.F(f,1.5)
u=v<0.75
x=q*0.68
o=u?(Math.sin(f*8)+1)/2:0
t=u?Math.abs(Math.sin(f*8))*q*0.01:0
D.Cy(d,new B.u(r*0.25,p),x,f,!1,t,2,A.d_,C.tm,u,o)
o=u?0:(Math.sin(f*8)+1)/2
t=u?0:Math.abs(Math.sin(f*8))*q*0.01
D.Cy(d,new B.u(r*0.75,p),x,f,!1,t,0,A.bj,C.b9S,!u,o)
o=q*0.15
x=q*0.085
if(u)D.aNL(d,new B.u(r*0.26,o),C.atL[w].a,x,v/0.25,A.ow)
else D.aNL(d,new B.u(r*0.74,o),C.atL[w].b,x,(v-0.75)/0.25,A.eu)
for(o=r*0.5,x=q*0.07,t=f*2,s=0;s<3;++s)D.rK(d,"\u2192",new B.u(o,q*(0.35+s*0.1)),x,A.c.j(0.3+0.5*A.k.F(t+s,1)),9999)},
hUd(a1,a2,a3){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=a2.a,e=a2.b,d=e*0.94,a0=A.w.j(0.2)
$.W()
x=B.M()
x.r=a0.gp(0)
a1.aZ(new B.a9(0,d,0+f,d+(e-d)),x)
x=f*0.3
w=B.cl(new B.u(f*0.6,e*0.45),e*0.7,Math.min(x,e*0.55))
a0=B.bx(w,A.ik)
v=B.M()
v.r=A.c.gp(0)
a1.aD(a0,v)
for(a0=w.d,v=w.b,u=a0-v,t=u*0.03,s=a1.a,r=w.a,q=w.c,p=q-r,o=r+p*0.1,n=0;n<9;++n){m=v+u*(0.1+n*0.095)
l=A.o.F(n,3)===2?0.5:0.8
k=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
k.r=A.cq.gp(0)
j=k.H()
s.drawRect(B.c0(new B.a9(o,m,o+p*l,m+t)),j)
j.delete()}i=A.k.D(a3/3,0,1)
h=v+u*i
if(i<1){a0=r-8
u=h-2
p=a0+(p+16)
t=B.M()
t.r=A.b2.gp(0)
a1.aZ(new B.a9(a0,u,p,u+4),t)
t=A.b2.j(0.18)
u=B.M()
u.r=t.gp(0)
a1.aZ(new B.a9(a0,v,p,v+(h-v)),u)}else{n=A.k.D((a3-3)/0.4,0,1)
u=A.mN.aw(0,n)
t=B.M()
t.r=A.bI.gp(0)
a1.ae(new B.u(q,v),e*0.08*u,t)
D.rK(a1,"PDF",new B.u(q,v),e*0.045*n,A.c,9999)
v=e*0.06
D.rK(a1,"\u2713 Saved",new B.u(w.gbP().a,a0+v),v,A.c.j(n),9999)}a0=a3*4
v=Math.sin(a0)
D.Cy(a1,new B.u(f*0.2,d),e*0.66,a3,!0,Math.abs(Math.sin(a0))*e*0.01,0,A.cz,C.tm,!1,(v+1)/2)
g=B.cl(new B.u(x,e*0.3),e*0.18,e*0.1)
x=e*0.02
x=B.bx(g,new B.aT(x,x))
v=B.M()
v.r=A.aB.gp(0)
a1.aD(x,v)
v=e*0.015
v=B.bx(g.cB(-3),new B.aT(v,v))
x=A.b2.j(0.35+0.3*Math.sin(a3*6))
a0=B.M()
a0.r=x.gp(0)
a1.aD(v,a0)},
hPy(a6,a7,a8){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=a7.a,a3=a7.b,a4=a3*0.94,a5=A.w.j(0.2)
$.W()
x=B.M()
x.r=a5.gp(0)
a6.aZ(new B.a9(0,a4,0+a2,a4+(a3-a4)),x)
w=B.cl(new B.u(a2*0.62,a3*0.47),a3*0.8,Math.min(a2*0.4,a3*0.75))
x=B.bx(w,A.rv)
a5=B.M()
a5.r=A.c.gp(0)
a6.aD(x,a5)
a5=w.a
x=w.c
v=x-a5
u=w.b
t=w.d-u
D.rK(a6,"INVOICE",new B.u(a5+v*0.3,u+t*0.09),t*0.07,A.dr,9999)
for(s=a6.a,r=v*0.08,q=a5+r,p=t*0.045,o=q+v*0.5,n=x-v*0.17,m=t*0.02,l=t*0.06,k=a8-0.5,j=0,i=0;i<3;++i){h=A.k.D((k-i*0.6)/0.4,0,1)
if(h<=0)continue
j+=C.av7[i].b
g=u+t*(0.24+i*0.14)
J.bz(s.save())
s.translate((1-h)*30,0)
f=A.cq.j(h)
$.W()
e=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
e.r=f.gp(0)
d=e.H()
s.drawRect(B.c0(new B.a9(q,g,o,g+p)),d)
d.delete()
D.rK(a6,"$"+C.av7[i].b,new B.u(n,g+m),l,A.aB.j(h),9999)
s.restore()}p=u+t*0.7
a6.bB(new B.u(q,p),new B.u(x-r,p),D.FY(A.dp,1.4))
D.rK(a6,"TOTAL  $"+j,new B.u(w.gbP().a,u+t*0.78),t*0.075,A.aB,v*0.8)
x=a8>2.8
if(x){r=a8-2.8
i=A.k.D(r/0.3,0,1)
J.bz(s.save())
s.translate(w.gbP().a,u+t*0.55)
a6.j1(0,-0.3)
a6.bX(0,2-A.ev.aw(0,i))
a6.aD(B.bx(B.cl(A.J,t*0.17,v*0.6),A.hd),D.FY(A.d_.j(i),3.5))
D.rK(a6,"PAID",A.J,t*0.11,A.d_.j(i),9999)
s.restore()
for(v=r*0.7,a5-=a3*0.05,u=a3*0.7,t=a3*0.03,s=a8*8,a0=0;a0<6;++a0){a1=A.k.F(v+a0*0.17,1)
D.fVz(a6,new B.u(a5+Math.sin(a0*2)*a3*0.1,u-a1*a3*0.5),t,s+a0)}}a5=x?(Math.sin(a8*6)+1)/2:0
D.Cy(a6,new B.u(a2*0.2,a4),a3*0.66,a8,!0,0,1,A.bA,A.L5,x,a5)},
hMi(d,e,a0){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=e.a,h=e.b,g=h*0.94,f=A.e3.j(0.7)
$.W()
x=B.M()
x.r=f.gp(0)
d.aZ(new B.a9(0,g,0+i,g+(h-g)),x)
x=i*0.6
f=h*0.62
w=new B.u(x,f)
v=Math.min(i*0.3,h*0.6)
u=B.bx(B.cl(w,v*1.3,v*2.1),A.hd)
t=B.M()
t.r=A.hu.gp(0)
d.aD(u,t)
t=v*0.5
u=v*1.2
s=B.cl(w.aB(0,new B.u(t,0)),u,v)
r=B.M()
r.r=A.h3.gp(0)
d.aZ(s,r)
t=B.cl(w.ad(0,new B.u(t,0)),u,v)
r=B.M()
r.r=A.h3.gp(0)
d.aZ(t,r)
r=A.k.F(a0,2)
t=d.a
J.bz(t.save())
t.translate(x,f)
d.t6(0,Math.cos(r/2*3.141592653589793),1)
r=-v*0.6
s=B.M()
s.r=A.bK.gp(0)
d.aZ(new B.a9(0,r,0+v,r+u),s)
t.restore()
q=A.k.D(a0/3,0,1)
f-=v*0.6
s=f-h*0.28*q
d.bB(new B.u(x,f),new B.u(x,s),D.FY(A.fx,h*0.025))
for(f=q-0.4,u=h*0.05,r=h*0.04,p=0;p<5;++p){o=A.k.D(f-p*0.1,0,1)
n=p*1.3
m=Math.cos(n)
l=Math.sin(n)
k=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
k.r=A.bo.gp(0)
j=k.H()
t.drawCircle(x+m*h*0.14*o,s+l*h*0.08*o,u*o,j)
j.delete()
if(o>0.6)D.rK(d,"\u2665",new B.u(x+Math.cos(n)*h*0.14,s+Math.sin(n)*h*0.08),r,A.bA,9999)}f=a0*4
x=Math.sin(f)
D.Cy(d,new B.u(i*0.2,g),h*0.66,a0,!1,Math.abs(Math.sin(f))*h*0.01,2,A.aE,C.tm,!1,(x+1)/2)},
hW_(d,e,f){var x,w,v,u,t,s,r,q,p,o,n=e.a,m=e.b,l=m*0.94,k=A.w.j(0.2)
$.W()
x=B.M()
x.r=k.gp(0)
d.aZ(new B.a9(0,l,0+n,l+(m-l)),x)
w=A.k.bt(A.k.D(f/5.5,0,1)*9)+1
for(v=n*0.62,k=l-m*0.03,x=m*0.26,u=m*0.07,t=d.a,s=0;s<w;++s){r=k-s*m*0.055
q=B.cl(new B.u(v,r),u,x)
p=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
p.r=A.cf.gp(0)
o=p.H()
t.drawOval(B.c0(q),o)
o.delete()
r=B.cl(new B.u(v,r),u,x)
q=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
q.b=A.ae
q.c=2
q.r=A.pt.gp(0)
q.d=A.bO
o=q.H()
t.drawOval(B.c0(r),o)
o.delete()}k=m*0.1
D.fVz(d,new B.u(v,k+A.k.F(f*1.6,1)*(l-u-w*m*0.055-k)),m*0.05,f*8)
k=m*0.08
D.rK(d,"$"+w*25,new B.u(v,k),k,A.dO,9999)
k=f*5
u=Math.sin(k)
D.Cy(d,new B.u(n*0.25,l),m*0.66,f,!1,Math.abs(Math.sin(k))*m*0.012,1,A.cz,C.tm,!0,(u+1)/2)},
hOB(d,a0,a1){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=a0.a,g=a0.b,f=g*0.94,e=A.w.j(0.2)
$.W()
x=B.M()
x.r=e.gp(0)
d.aZ(new B.a9(0,f,0+h,f+(g-f)),x)
for(e=d.a,x=g*0.012,w=g*0.55,v=a1*4,u=a1*2,t=g*0.15,s=g*0.03,r=0;r<3;r=n){q=Math.sin(v+r*1.7)
J.bz(e.save())
e.translate(h*(0.5+0.14*r),w-Math.abs(q)*g*0.3)
e.rotate((u+r)*180/3.141592653589793,0,0)
q=B.bx(B.cl(A.J,t,t),new B.aT(s,s))
p=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
p.r=A.c.gp(0)
o=p.H()
e.drawRRect(B.er(q),o)
o.delete()
n=r+1
q=n*2
p=r===0
m=0
for(;;){if(!(m<q-(p?1:0)))break
l=m*2.1
k=Math.cos(l)
l=Math.sin(l)
j=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
j.r=A.bi.gp(0)
o=j.H()
e.drawCircle(k*g*0.04,l*g*0.04,x,o)
o.delete();++m}e.restore()}for(e=a1*0.6,w=g*0.25,v=g*0.06,r=0;r<5;++r){i=A.k.F(e+r*0.2,1)
D.rK(d,"\u2605",new B.u(h*(0.45+r*0.1),w-i*g*0.2),v,A.dO.j(1-i),9999)}e=h*0.22
w=a1*6
v=Math.sin(w)
D.Cy(d,new B.u(e,f),g*0.66,a1,!0,Math.abs(Math.sin(w))*g*0.015,0,A.ci,C.tm,!0,(v+1)/2)
v=f-g*0.28
s=B.bx(B.cl(new B.u(e,v),g*0.07,g*0.16),new B.aT(s,s))
$.W()
w=B.M()
w.r=A.cD.gp(0)
d.aD(s,w)
w=B.M()
w.r=A.ay.gp(0)
d.ae(new B.u(e+g*0.05,v),x,w)},
hPW(d,e,a0){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=e.a,j=e.b,i=j*0.94,h=A.w.j(0.2),g=$.W(),f=B.M()
f.r=h.gp(0)
d.aZ(new B.a9(0,i,0+k,i+(j-i)),f)
f=k*0.42
h=j*0.18
x=j*0.08
w=B.bx(new B.a9(f,h,f+k*0.5,h+j*0.5),new B.aT(x,x))
v=new B.aO(g.r,A.ap,null,null,B.a([],y.v))
v.E(new B.iU(w))
d.aO(v,D.FY(A.c.j(0.5),4))
u=new B.Sa(new B.vs(B.wZ(v),!1,B.a([],y.L))).gL(0)
for(h=a0*0.18,g=u.a,x=u.b,t=g.e,s=j*0.016,r=d.a,q=0;q<10;++q){p=A.k.F(h+q/10,1)
g.jo()
o=t[x].b
o===$&&B.c()
o=o.a.length()
g.jo()
o=t[x].Mr(p*o).a
p=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
p.r=A.dO.gp(0)
n=p.H()
r.drawCircle(o.a,o.b,s,n)
n.delete()}m=a0>1.5
h=j*0.43
l=new B.u(k*0.92,h)
if(m){g=A.dO.j(0.4+0.2*Math.sin(a0*8))
x=B.M()
x.r=g.gp(0)
x.z=A.yU
d.ae(l,j*0.2,x)}g=j*0.07
x=m?A.ow:A.bJ
t=B.M()
t.r=x.gp(0)
d.ae(l,g,t)
h=B.bx(B.cl(new B.u(f,h),j*0.2,j*0.1),A.ik)
t=B.M()
t.r=A.d_.gp(0)
d.aD(h,t)
D.rK(d,"+",new B.u(f,j*0.36),g,A.c,9999)
h=m?(Math.sin(a0*6)+1)/2:0
f=m?Math.abs(Math.sin(a0*6))*j*0.012:0
D.Cy(d,new B.u(k*0.2,i),j*0.68,a0,!1,f,0,A.bW,C.tm,m,h)
if(m)D.aNL(d,new B.u(k*0.24,j*0.16),"It works!",g,(a0-1.5)/0.4,A.c)},
hPa(d,a0,a1){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=a0.a,g=a0.b,f=g*0.94,e=A.w.j(0.2)
$.W()
x=B.M()
x.r=e.gp(0)
d.aZ(new B.a9(0,f,0+h,f+(g-f)),x)
w=A.k.D((a1-0.3)/0.4,0,1)
v=A.k.D((a1-1.8)/0.4,0,1)
x=g*0.2
e=g*0.065
D.aNL(d,new B.u(h*0.3,x),"How do I enroll?",e,w,A.ow)
if(a1>1&&a1<1.8)for(u=h*0.72,t=g*0.38,s=a1*9,r=g*0.015,q=d.a,p=0;p<3;++p){o=Math.sin(s+p)
n=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
n.r=A.c.gp(0)
m=n.H()
q.drawCircle(u+p*g*0.05,t-Math.abs(o)*g*0.02,r,m)
m.delete()}D.aNL(d,new B.u(h*0.7,g*0.38),"Tap Civic Registry!",e,v,A.eu)
D.Cy(d,new B.u(h*0.2,f),g*0.62,a1,!1,0,2,A.ay,C.tm,a1<1,0)
l=h*0.78
k=f-g*0.28
e=g*0.04
x=B.bx(B.cl(new B.u(l,k),g*0.22,x),new B.aT(e,e))
u=B.M()
u.r=A.aL.gp(0)
d.aD(x,u)
u=g*0.18
x=k-u
e=B.bx(B.cl(new B.u(l,x),g*0.14,u),new B.aT(e,e))
u=B.M()
u.r=A.cq.gp(0)
d.aD(e,u)
for(e=d.a,u=a1*1.1,t=g*0.02,j=0;j<2;++j){i=C.oU[j]
s=A.k.F(u,1)>0.08?A.b8:A.f6
r=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
r.r=s.gp(0)
m=r.H()
e.drawCircle(l+i*g*0.04,x,t,m)
m.delete()}d.bB(new B.u(l,k-g*0.25),new B.u(l,k-g*0.3),D.FY(A.ad,3))
e=B.M()
e.r=A.ay.gp(0)
d.ae(new B.u(l,k-g*0.31),g*0.015,e)},
fnn:function fnn(d,e,f){this.a=d
this.b=e
this.c=f},
aN9(d,e,f,g,h,i,j,k){var x=new D.ffh(e,h,i,k),w=x.$1(g),v=w.b.c
if(v>j&&v>0)w=x.$1(Math.max(2,g*j/v))
x=w.b
v=x.c
x=x.a.c
w.a5(d,f.aB(0,new B.u(v/2,x.gbc(x)/2)))},
KR(d,e,f,a0){var x,w,v,u,t,s,r,q,p,o,n,m=A.o.F(a0==null?A.k.bt(f/6):a0,11),l=A.k.F(f,6),k=C.d0H[m],j=e.a,i=e.b,h=0+j,g=0+i
$.W()
x=B.M()
x.saq(new B.a8(A.ax,A.aC,A.x,B.a([k.c,k.d],y.O),null,null).av(0,new B.a9(0,0,h,g)))
d.aZ(new B.a9(0,0,h,g),x)
w=i*(j>=i?0.7:0.6)
g=d.a
J.bz(g.save())
g.clipRect(B.c0(new B.a9(0,0,h,0+w)),$.q8()[1],!0)
D.hWV(d,new B.at(j,w),m,l)
g.restore()
v=i-w
x=A.w.j(0.3)
u=B.M()
u.r=x.gp(0)
d.aZ(new B.a9(0,w,h,w+v),u)
t=A.ct.aw(0,A.k.D((l-0.2)/0.5,0,1))
J.bz(g.save())
g.translate((1-t)*j*0.25,0)
u=j/2
h=j*0.94
D.aN9(d,k.a,new B.u(u,w+v*0.3),v*0.36,A.c.j(t),!0,h,0)
D.aN9(d,k.b,new B.u(u,w+v*0.64),v*0.2,A.c.j(0.92*t),!1,h,0)
g.restore()
for(h=i*0.965,x=i*0.009,s=i*0.004,r=0;r<11;++r){q=r===m
p=q?s:0
o=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
o.r=A.c.j(q?0.95:0.35).gp(0)
n=o.H()
g.drawCircle(u+(r-5)*i*0.035,h,x+p,n)
n.delete()}h=j-i*0.07
g=i*0.06
D.aN9(d,"AD",new B.u(h,g),i*0.045,A.c.j(0.85),!0,9999,1)
x=i*0.02
x=B.bx(B.cl(new B.u(h,g),i*0.065,i*0.1),new B.aT(x,x))
g=B.M()
g.b=A.ae
g.c=1
g.r=A.ad.gp(0)
g.d=A.bO
d.aD(x,g)},
aPq(d,e,f,g){var x,w=d.a
J.bz(w.save())
w.clipRect(B.c0(new B.a9(0,0,0+e.a,0+e.b)),$.q8()[1],!0)
x=C.k0[A.o.F(f,8)].e
if(x===-2)D.hMr(d,e,g)
else if(x===-1)D.KR(d,e,g,null)
else D.KR(d,e,g,x)
w.restore()},
hMr(d,a0,a1){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=a0.a,h=a0.b,g=new B.S(Date.now(),0,!1),f=0+i,e=0+h
$.W()
x=B.M()
x.saq(C.bST.av(0,new B.a9(0,0,f,e)))
d.aZ(new B.a9(0,0,f,e),x)
x=B.M()
x.r=A.bI.gp(0)
d.aZ(new B.a9(0,0,f,0+h*0.15),x)
D.aN9(d,A.oS[B.bG(g)-1]+" "+B.bA(g),new B.u(i/2,h*0.075),h*0.08,A.c,!0,i*0.9,0)
w=i/7
for(f=h*0.21,e=h*0.05,v=0;v<7;++v)D.aN9(d,C.dej[v],new B.u(w*(v+0.5),f),e,A.az,!0,9999,0)
u=B.c1(B.bA(g),B.bG(g),1,0,0,0,0,0)
t=B.bQ(B.c1(B.bA(g),B.bG(g)+1,0,0,0,0,0,0))
s=B.mw(u)-1
r=h*0.74/A.k.dw((s+t)/7)
for(f=h*0.26,e=a1*3,x=d.a,q=1;q<=t;++q){p=s+q-1
o=w*(A.o.F(p,7)+0.5)
n=f+r*(A.o.an(p,7)+0.5)
if(q===B.bQ(g)){m=Math.min(w,r)
l=A.aS.j(0.5+0.2*Math.sin(e))
$.W()
k=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
k.r=l.gp(0)
j=k.H()
x.drawCircle(o,n,m*0.42,j)
j.delete()}m=Math.min(w,r)
l=q===B.bQ(g)?A.c:A.ad
D.aN9(d,""+q,new B.u(o,n),m*0.42,l,!0,9999,0)}},
ffh:function ffh(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
wd:function wd(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
vG:function vG(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
h_3(d,e,f,g,h,a0){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i=d.a
J.bz(i.save())
x=e.a
w=e.b
v=0+x
u=0+w
i.clipRect(B.c0(new B.a9(0,0,v,u)),$.q8()[1],!0)
if(h<3){$.W()
t=B.M()
t.r=C.b6r.gp(0)
d.aZ(new B.a9(0,0,v,u),t)
if(h<0.5)u=h/0.5
else u=h>2.4?(3-h)/0.6:1
s=A.k.D(u,0,1)
u=e.ea(A.J)
t=e.gdO()
r=B.M()
r.saq(new B.bT(A.A,0.5,A.x,j,0,B.a([A.aS.j(0.35*s),A.K],y.O),j,j).av(0,B.bU(e.ea(A.J),e.gdO()*0.5)))
d.ae(u,t*0.5,r)
D.G0(d,"NGMY",new B.u(0,w*0.36),w*0.2,A.c.j(s),A.L,w*0.03,x)
D.G0(d,"T V",new B.u(0,w*0.6),w*0.08,A.aS.j(s),A.L,w*0.05,x)
r=x*0.3
t=w*0.78
u=B.M()
u.r=A.aS.j(s).gp(0)
d.aZ(new B.a9(r,t,r+x*0.4*(h/3),t+3),u)}else if(a0>=0)D.aPq(d,e,a0,g)
else{q=A.k.D((h-3)/0.5,0,1)
p=A.o.F(f,10)
switch(p){case 0:D.hVA(d,e,g)
break
case 1:D.hN8(d,e,g)
break
case 2:D.hUU(d,e,g)
break
case 3:D.hRN(d,e,g)
break
case 4:D.hT1(d,e,g)
break
case 5:D.hUV(d,e,g)
break
case 6:D.hOr(d,e,g)
break
case 7:D.hVz(d,e,g)
break
case 8:D.hTO(d,e,g)
break
default:D.hOC(d,e,g)}t=x-w*0.34
r=w*0.04
o=w*0.03
n=B.bx(new B.a9(t,r,t+w*0.3,r+w*0.1),new B.aT(o,o))
$.W()
o=B.M()
o.r=A.w.j(0.55).gp(0)
d.aD(n,o)
D.G0(d,"NGMY",new B.u(n.a+w*0.025,n.b+w*0.012),w*0.07,A.c,A.bg,1,j)
o=w*0.86
t=B.M()
t.r=A.w.j(0.6).gp(0)
d.aZ(new B.a9(0,o,v,o+w*0.14),t)
D.G0(d,"CH "+(f+1)+"  \xb7  "+C.PJ[p].a,new B.u(r,w*0.885),w*0.075,A.c,A.bg,0,x-w*0.08)
if(q<1){t=B.M()
t.r=A.c.j(0.6*(1-q)).gp(0)
d.aZ(new B.a9(0,0,v,u),t)}}$.W()
m=B.M()
m.r=A.w.j(0.07).gp(0)
for(l=0;l<w;l+=3){k=m.H()
i.drawRect(B.c0(new B.a9(0,l,v,l+1)),k)
k.delete()}v=new B.aO($.W().r,A.ap,j,j,B.a([],y.v))
v.E(new B.b5(0,0))
v.E(new B.ap(x*0.45,0))
v.E(new B.ap(0,w*0.5))
v.E(new B.bF())
w=B.M()
w.r=A.c.j(0.04).gp(0)
d.aO(v,w)
i.restore()},
G0(d,e,f,g,h,i,j,k){var x=null,w=B.hL(x,x,1,x,B.dh(x,x,x,x,x,x,x,x,x,B.l(x,x,h,x,x,x,x,x,x,x,x,g,x,x,A.u,x,x,!0,x,j,x,x,x,x,x,x),e),i,A.ce,x,A.e9,A.ca),v=k==null
w.yL(v?9999:k)
w.a5(d,f.ad(0,new B.u(i===A.L&&!v?(k-w.b.c)/2:0,0)))},
hVA(d,e,f){var x,w,v,u,t,s,r,q,p,o,n,m=e.a,l=e.b,k=A.k.F(f,14),j=0+m,i=0+l
$.W()
x=B.M()
x.saq(C.anY.av(0,new B.a9(0,0,j,i)))
d.aZ(new B.a9(0,0,j,i),x)
x=B.M()
x.r=A.dO.gp(0)
d.ae(new B.u(m*0.85,l*0.18),l*0.08,x)
x=l*0.78
i=B.M()
i.r=A.Al.gp(0)
d.aZ(new B.a9(0,x,j,x+l*0.22),i)
new D.fnz(d,f,l).$5(new B.u(m*0.5,l*0.8),1.5707963267948966,l*0.24,5,A.k.D(k/5,0,1)*1.4)
for(j=l*0.26,i=l*0.11,x=l*0.05,w=d.a,v=-l,u=v*0.1,v*=0.04,t=l*0.065,s=0;s<6;++s){r=A.k.D((k-(5+s*1.3))/0.5,0,1)
if(r<=0)continue
q=(s&1)===1?0.04:0
p=A.o.F(s,3)
o=A.mN.aw(0,r)
J.bz(w.save())
w.translate(m*(0.2+0.12*s+q),l*(0.16+0.14*p))
w.scale(o,o)
q=B.bx(B.cl(A.J,i,j),new B.aT(x,x))
$.W()
p=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
p.r=A.c.gp(0)
n=p.H()
w.drawRRect(B.er(q),n)
n.delete()
q=B.bx(B.cl(A.J,i,j),new B.aT(x,x))
p=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
p.b=A.ae
p.c=2
p.r=A.bA.gp(0)
n=p.H()
w.drawRRect(B.er(q),n)
n.delete()
D.G0(d,"\u2665 "+C.cQr[s],new B.u(u,v),t,A.t1,A.bg,0,null)
w.restore()}if(k>11.5)D.G0(d,"Family is everything",new B.u(0,l*0.62),l*0.09,A.hu,A.L,0,m)},
hN8(d,e,a0){var x,w,v,u,t,s,r,q,p,o,n,m,l=null,k=e.a,j=e.b,i=0+k,h=0+j,g=$.W(),f=B.M()
f.saq(C.bT5.av(0,new B.a9(0,0,i,h)))
d.aZ(new B.a9(0,0,i,h),f)
x=a0*40
for(i=d.a,h=y.v,w=0;w<2;++w,g=f){f=B.a([],h)
v=new B.aO(g.r,A.ap,l,l,f)
f.push(new B.b5(0,j))
for(g=w===0,u=0;u<=k;u+=6){t=g?0.4:1
s=g?0.62:0.78
r=g?40:28
r=new B.ap(u,j*s+Math.sin((u+x*t)/r)*j*0.05)
f.push(r)
t=v.f
if(t!=null)r.by(t)
t=v.e
if(t!=null)t.a.delete()
v.e=null}t=new B.ap(k,j)
f.push(t)
f=v.f
if(f!=null)t.by(f)
f=v.e
if(f!=null)f.a.delete()
v.e=null
f=$.W()
t=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
t.r=(g?A.jr:A.e3).gp(0)
q=t.H()
g=v.e
i.drawPath((g==null?v.e=new B.cF(v.gbL().a.snapshot()):g).a,q)
q.delete()}for(i=j*0.04,h=x*1.3,g=k+60,f=k*0.3,p=0,o=0;o<6;++o){u=A.k.F(o*90-h,g)-30
t=Math.sin(o*1.7+a0)
if(Math.abs(u-f)<12)++p
D.hUZ(d,new B.u(u,j*(0.35+0.08*t)),i,A.dO)}n=Math.abs(Math.sin(a0*5))
m=new B.u(f,j*0.72-n*j*0.22)
i=B.cl(new B.u(f,j*0.82),j*0.025,j*0.14*(1-n*0.4))
$.W()
h=B.M()
h.r=A.dp.gp(0)
d.hO(i,h)
h=j*0.085
i=B.M()
i.saq(C.ecy.av(0,B.bU(m,h)))
d.ae(m,h,i)
i=B.M()
i.b=A.ae
i.c=2
i.r=A.pt.gp(0)
d.ae(m,h,i)
i=-j
D.G0(d,"$",m.ad(0,new B.u(i*0.03,i*0.045)),j*0.09,A.pt,A.bg,0,l)
h=i*0.01
i=m.ad(0,new B.u(i*0.028,h))
g=B.M()
g.r=A.w.gp(0)
d.ae(i,2.4,g)
h=m.ad(0,new B.u(j*0.028,h))
g=B.M()
g.r=A.w.gp(0)
d.ae(h,2.4,g)
D.G0(d,"Saved: $"+(A.o.F(A.k.bt(a0*3),1000)+p),new B.u(j*0.05,j*0.06),j*0.08,A.c,A.bg,0,l)},
hUZ(d,e,f,g){var x,w,v,u,t,s,r,q=$.W(),p=B.a([],y.v),o=new B.aO(q.r,A.ap,null,null,p)
for(q=e.a,x=e.b,w=f*0.45,v=0;v<10;++v){u=-1.5707963267948966+v*3.141592653589793/5
t=(v&1)===0?f:w
s=q+Math.cos(u)*t
r=x+Math.sin(u)*t
if(v===0){s=new B.b5(s,r)
p.push(s)
r=o.f
if(r!=null)s.by(r)
s=o.e
if(s!=null)s.a.delete()
o.e=null}else{s=new B.ap(s,r)
p.push(s)
r=o.f
if(r!=null)s.by(r)
s=o.e
if(s!=null)s.a.delete()
o.e=null}}o.E(new B.bF())
$.W()
q=B.M()
q.r=g.gp(0)
d.aO(o,q)},
hUU(a1,a2,a3){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=a2.a,e=a2.b,d=$.W(),a0=B.M()
a0.r=C.bdc.gp(0)
a1.aZ(new B.a9(0,0,0+f,0+e),a0)
x=new B.eL()
x.dB(7)
for(a0=a3*3,w=a1.a,v=0;v<60;++v){u=A.k.F(A.k.F(x.aj()*f-a3*(10+x.aj()*60),f)+f,f)
t=x.aj()
s=x.aj()
r=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
r.r=A.c.j(0.5+0.5*Math.sin(a0+v)).gp(0)
q=r.H()
w.drawCircle(u,t*e*0.85,0.6+s*1.4,q)
q.delete()}p=f*1.2-A.k.F(a3*22,f*1.6)
a0=e*0.3
t=e*0.2
s=B.M()
s.saq(C.ecw.av(0,B.bU(new B.u(p,a0),t)))
a1.ae(new B.u(p,a0),t,s)
a0=B.cl(new B.u(p,a0),e*0.07,e*0.6)
s=B.M()
s.b=A.ae
s.c=3
s.r=A.bK.j(0.7).gp(0)
a1.hO(a0,s)
s=Math.sin(a3*2)
J.bz(w.save())
w.translate(f*0.42,e*0.52+s*e*0.04)
a1.j1(0,-0.25)
d=d.r
s=y.v
o=new B.aO(d,A.ap,g,g,B.a([],s))
a0=-e
t=a0*0.04
r=e*0.1
o.E(new B.b5(t,r))
n=e*0.04
o.E(new B.cU(0,e*(0.2+0.05*Math.sin(a3*30)),n,r))
o.E(new B.bF())
m=B.M()
l=e*0.12
m.saq(C.bTL.av(0,new B.a9(t,r,t+e*0.08,r+l)))
a1.aO(o,m)
k=new B.aO(d,A.ap,g,g,B.a([],s))
m=a0*0.17
k.E(new B.b5(0,m))
t=a0*0.05
j=e*0.05
k.E(new B.cU(e*0.09,t,j,r))
k.E(new B.ap(t,r))
k.E(new B.cU(a0*0.09,t,0,m))
k.E(new B.bF())
i=B.M()
h=a0*0.08
i.saq(C.bU0.av(0,new B.a9(h,m,h+e*0.16,m+e*0.27)))
a1.aO(k,i)
i=B.M()
i.r=A.aS.gp(0)
a1.ae(new B.u(0,t),e*0.035,i)
i=new B.aO(d,A.ap,g,g,B.a([],s))
i.E(new B.b5(t,n))
i.E(new B.ap(a0*0.1,l))
i.E(new B.ap(t,r))
i.E(new B.bF())
t=B.M()
t.r=A.ay.gp(0)
a1.aO(i,t)
s=new B.aO(d,A.ap,g,g,B.a([],s))
s.E(new B.b5(j,n))
s.E(new B.ap(r,l))
s.E(new B.ap(j,r))
s.E(new B.bF())
r=B.M()
r.r=A.ay.gp(0)
a1.aO(s,r)
w.restore()},
hRN(a1,a2,a3){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null,h=a2.a,g=a2.b,f=0+h,e=0+g,d=$.W(),a0=B.M()
a0.saq(C.bSN.av(0,new B.a9(0,0,f,e)))
a1.aZ(new B.a9(0,0,f,e),a0)
for(f=a1.a,e=g*0.85,a0=g*0.7,x=y.v,d=d.r,w=0;w<4;++w){v=h*(0.1+0.25*w)
u=B.a([],x)
t=new B.aO(d,A.ap,i,i,u)
u.push(new B.b5(v,g))
u.push(new B.cU(v+Math.sin(a3+w)*10,e,v+4,a0+w*6))
u=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
u.b=A.ae
u.c=5
u.r=A.d_.gp(0)
s=u.H()
u=t.gbL().a.snapshot()
f.drawPath((t.e=new B.cF(u)).a,s)
s.delete()}e=A.k.F(a3*18,h*1.5)
J.bz(f.save())
f.translate(e-h*0.25,g*0.35+Math.sin(a3)*6)
e=B.cl(A.J,g*0.22,g*0.5)
a0=B.M()
a0.r=A.bv.gp(0)
a1.hO(e,a0)
a0=new B.aO(d,A.ap,i,i,B.a([],x))
e=-g
u=e*0.22
a0.E(new B.b5(u,0))
a0.E(new B.cU(e*0.36,e*0.12+Math.sin(a3*3)*5,e*0.34,e*0.16))
t=e*0.02
a0.E(new B.cU(e*0.28,t,u,0))
u=B.M()
u.r=A.bv.gp(0)
a1.aO(a0,u)
u=g*0.03
a0=g*0.1
r=B.cl(new B.u(0,u),a0,g*0.34)
q=B.M()
q.r=A.aL.gp(0)
a1.hO(r,q)
q=B.M()
q.r=A.c.gp(0)
a1.ae(new B.u(g*0.15,t),3,q)
q=B.M()
q.r=A.w.gp(0)
a1.ae(new B.u(g*0.155,t),1.5,q)
f.restore()
for(t=e*0.005,r=e*0.08,q=e*0.03,p=g*0.06,e*=0.04,o=h+40,n=a3*2,w=0;w<6;++w){m=(w&1)===0?1:-1
l=A.k.F(A.k.F(a3*(24+w*7)*m+w*80,o)+h+40,o)
k=Math.sin(n+w)
J.bz(f.save())
f.translate(l-20,g*(0.52+0.06*w)+k*6)
f.scale(m,1)
l=B.cl(A.J,p,a0)
k=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
j=A.o.F(w,4)
k.r=C.auN[j].gp(0)
s=k.H()
f.drawOval(B.c0(l),s)
s.delete()
l=B.a([],x)
k=new B.aO(d,A.ap,i,i,l)
l.push(new B.b5(e,0))
l.push(new B.ap(r,q))
l.push(new B.ap(r,u))
l.push(new B.bF())
l=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
l.r=C.auN[j].gp(0)
s=l.H()
l=k.gbL().a.snapshot()
f.drawPath((k.e=new B.cF(l)).a,s)
s.delete()
l=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
l.r=A.w.gp(0)
s=l.H()
f.drawCircle(u,t,1.8,s)
s.delete()
f.restore()}for(w=0;w<14;++w){e=A.k.F(w*0.071+0.05,1)
d=A.k.F(a3*(14+w*3)+w*40,g)
a0=Math.sin(n+w)
x=A.o.F(w,3)
u=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
u.b=A.ae
u.c=1.2
u.r=A.c.j(0.7).gp(0)
s=u.H()
f.drawCircle(h*e+a0*4,g-d,2+x,s)
s.delete()}},
hT1(a7,a8,a9){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null,d=a8.a,a0=a8.b,a1=A.k.F(a9,12),a2=a1<7,a3=0+d,a4=0+a0,a5=$.W(),a6=B.M()
a6.saq(new B.a8(A.b_,A.b5,A.x,a2?C.d9t:C.cYj,e,e).av(0,new B.a9(0,0,a3,a4)))
a7.aZ(new B.a9(0,0,a3,a4),a6)
a6=a0*0.74
x=B.M()
x.r=(a2?C.bhh:A.Al).gp(0)
a7.aZ(new B.a9(0,a6,a3,a6+a0*0.26),x)
for(x=a7.a,w=a0*0.07,v=a0*0.06,u=a0*0.2,t=a0*0.1,s=a0*0.09,r=y.v,q=a9*2,a5=a5.r,p=0;p<4;++p){o=d*(0.08+0.24*p)
n=a0*(0.14+0.03*A.o.F(p,2))
m=a6-n
l=o+u
k=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
k.r=C.cLf[p].gp(0)
j=k.H()
x.drawRect(B.c0(new B.a9(o,m,l,m+n)),j)
j.delete()
k=B.a([],r)
i=new B.aO(a5,A.ap,e,e,k)
k.push(new B.b5(o-4,m))
k.push(new B.ap(o+t,m-s))
k.push(new B.ap(l+4,m))
k.push(new B.bF())
m=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
m.r=A.es.gp(0)
j=m.H()
m=i.gbL().a.snapshot()
x.drawPath((i.e=new B.cF(m)).a,j)
j.delete()
m=o+w
l=n*0.55
k=a6-l
i=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
i.r=(a2&&A.o.F(A.k.bt(q),2)===0?A.lE:A.fx).gp(0)
j=i.H()
x.drawRect(B.c0(new B.a9(m,k,m+v,k+l)),j)
j.delete()}if(a2){for(a6=a9*20,v=a9*260,u=a0*0.8,p=0;p<70;++p){o=A.k.F(p*37+a6,d)
h=A.k.F(p*53+v,u)
s=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
s.r=A.fc.gp(0)
s.c=1.4
j=s.H()
x.drawLine.apply(x,[o,h,o-3,h+9,j])
j.delete()}a6=a9*3
if(A.o.F(A.k.bt(a6),7)===0&&A.k.F(a6,1)<0.3){a6=B.M()
a6.r=A.c.j(0.5).gp(0)
a7.aZ(new B.a9(0,0,a3,a4),a6)
r=new B.aO(a5,A.ap,e,e,B.a([],r))
r.E(new B.b5(d*0.6,t))
t=d*0.55
a5=a0*0.3
r.E(new B.ap(t,a5))
r.E(new B.ap(d*0.62,a5))
r.E(new B.ap(t,a0*0.55))
t=B.M()
t.b=A.ae
t.c=4
t.r=A.lE.gp(0)
a7.aO(r,t)}}else{for(a3=d*0.5,a4=a0*0.035,a5=3.141592653589793*A.k.D((a1-7)/2,0,1)*57.29577951308232,p=0;p<6;++p){v=d*(0.9-p*0.07)
v=B.cl(new B.u(a3,a6),v,v)
u=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
u.b=A.ae
u.c=a4
u.r=C.dds[p].j(0.9).gp(0)
j=u.H()
x.drawArc.apply(x,[B.c0(v),180,a5,!1,j])
j.delete()}a3=B.M()
a3.r=A.dO.gp(0)
a7.ae(new B.u(d*0.86,a0*0.16),a0*0.08,a3)}for(a3=d+120,p=0;p<3;++p){o=A.k.F(a9*(8+p*4)+p*120,a3)-60
for(a4=a0*(0.12+0.1*p),g=0;g<4;++g){f=C.cgv[g]
$.W()
a5=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
a5.r=(a2?A.bm:A.c.j(0.95)).gp(0)
j=a5.H()
x.drawCircle(o+f.a,a4+f.b,w,j)
j.delete()}}},
hUV(a1,a2,a3){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=a2.a,a0=a2.b
$.W()
x=B.M()
x.r=A.da.gp(0)
a1.aZ(new B.a9(0,0,0+d,0+a0),x)
w=B.M()
w.r=A.c.j(0.05).gp(0)
for(x=a1.a,v=0;v<d;v+=16){u=w.H()
x.drawLine.apply(x,[v,0,v,a0,u])
u.delete()}for(t=0;t<a0;t+=16){u=w.H()
x.drawLine.apply(x,[0,t,d,t,u])
u.delete()}s=d*0.14
r=a0*0.2
q=a0*0.08
p=B.bx(new B.a9(s,r,s+d*0.72,r+a0*0.5),new B.aT(q,q))
o=new B.aO($.W().r,A.ap,null,null,B.a([],y.v))
o.E(new B.iU(p))
r=B.M()
r.b=A.ae
r.c=5
r.r=A.bv.gp(0)
a1.aO(o,r)
n=new B.Sa(new B.vs(B.wZ(o),!1,B.a([],y.L))).gL(0)
r=n.a
m=n.b
r.jo()
l=r.e
k=l[m].b
k===$&&B.c()
k=k.a.length()
r.jo()
j=l[m].b
j===$&&B.c()
i=A.k.F(a3*k/5,j.a.length())
for(h=0;h<10;++h){r.jo()
k=l[m].b
k===$&&B.c()
k=A.k.F(i-h*9,k.a.length())
r.jo()
g=l[m].Mr(k).a
k=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
k.r=A.dO.j(1-h*0.09).gp(0)
k.z=L.QP
u=k.H()
x.drawCircle(g.a,g.b,6-h*0.5,u)
u.delete()}x=a0*0.45
r=B.bx(B.cl(new B.u(s,x),a0*0.22,a0*0.12),A.ik)
m=B.M()
m.r=A.d_.gp(0)
a1.aD(r,m)
D.G0(a1,"+",new B.u(s-5,a0*0.33),a0*0.07,A.c,A.bg,0,null)
f=(Math.sin(a3*2)+1)/2
e=new B.u(d*0.86,x)
x=B.M()
x.r=A.dO.j(0.25+0.5*f).gp(0)
x.z=H.Hj
a1.ae(e,a0*0.16,x)
x=B.M()
x.r=B.aq(A.bJ,A.ow,f).gp(0)
a1.ae(e,q,x)
D.G0(a1,"Electricity needs a full loop!",new B.u(0,a0*0.74),a0*0.075,A.fT,A.L,0,d)},
hOr(a4,a5,a6){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=a5.a,a1=a5.b,a2=0+a0,a3=0+a1
$.W()
x=B.M()
x.saq(C.bVZ.av(0,new B.a9(0,0,a2,a3)))
a4.aZ(new B.a9(0,0,a2,a3),x)
x=a1*0.82
a3=B.M()
a3.r=A.da.gp(0)
a4.aZ(new B.a9(0,x,a2,x+a1*0.18),a3)
for(a2=a0*0.1,a3=a4.a,w=0;w<7;++w){v=a0*(0.05+w*0.15)
u=a1*(0.1+0.07*A.o.F(w*5,4))
t=x-u
s=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
s.r=A.aB.gp(0)
r=s.H()
a3.drawRect(B.c0(new B.a9(v,t,v+a2,t+u)),r)
r.delete()}for(a2=a1*0.2,t=a6*0.55,q=0;q<4;++q){s=t+q*0.27
p=A.k.F(s,1)
o=A.k.bt(s)*7+q*3
n=a0*(0.15+0.7*A.k.F(o*0.37,1))
m=a1*(0.2+0.25*A.k.F(o*0.53,1))
l=C.atQ[A.o.F(Math.abs(o),5)]
if(p<0.3){$.W()
s=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
s.r=A.c.gp(0)
r=s.H()
a3.drawCircle(n,x-(x-m)*(p/0.3),2.5,r)
r.delete()}else{w=(p-0.3)/0.7
for(s=w*w*a1*0.08,k=1-w,j=2.4*k+0.4,i=0;i<28;++i){h=i*3.141592653589793*2/28
g=a2*A.dU.aw(0,w)
f=Math.cos(h)
e=Math.sin(h)
$.W()
d=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
d.r=l.j(A.k.D(k,0,1)).gp(0)
d.z=C.dlA
r=d.H()
a3.drawCircle(n+f*g,m+e*g+s,j,r)
r.delete()}}}},
hVz(a4,a5,a6){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=a5.a,d=a5.b,a0=0+e,a1=0+d,a2=$.W(),a3=B.M()
a3.saq(C.anY.av(0,new B.a9(0,0,a0,a1)))
a4.aZ(new B.a9(0,0,a0,a1),a3)
for(a1=a4.a,a3=y.v,x=0;x<2;++x,a2=w){w=B.a([],a3)
v=new B.aO(a2.r,A.ap,null,null,w)
w.push(new B.b5(0,d))
for(a2=x===0,u=0;u<=e;u+=6){t=a2?8:20
s=a2?0.55:0.68
r=a2?50:34
r=new B.ap(u,d*s+Math.sin((u+a6*t)/r)*d*0.06)
w.push(r)
t=v.f
if(t!=null)r.by(t)
t=v.e
if(t!=null)t.a.delete()
v.e=null}t=new B.ap(e,d)
w.push(t)
w=v.f
if(w!=null)t.by(w)
w=v.e
if(w!=null)w.a.delete()
v.e=null
w=$.W()
t=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
t.r=(a2?A.Eh:A.Al).gp(0)
q=t.H()
a2=v.e
a1.drawPath((a2==null?v.e=new B.cF(v.gbL().a.snapshot()):a2).a,q)
q.delete()}a2=d*0.8
a3=B.M()
a3.r=A.bv.gp(0)
a4.aZ(new B.a9(0,a2,a0,a2+d*0.04),a3)
for(u=-A.k.F(a6*80,24),a0=d*0.84,a3=d*0.03,w=a0+a3;u<e;u+=24){t=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
t.r=A.fx.gp(0)
q=t.H()
a1.drawRect(B.c0(new B.a9(u,a0,u+8,w)),q)
q.delete()}p=Math.sin(a6*14)*1.2
o=e*0.12
for(a0=a2+p,a2=d*0.025,w=e*0.012,t=d*0.02,s=d*0.62+p,a3=s+a3,r=a3+d*0.06,n=s+d*0.18,m=0;m<4;++m){l=m===0
k=o+e*(l?0.16:0.15)
j=B.bx(new B.a9(o,s,k,n),new B.aT(t,t))
i=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
i.r=(l?A.bI:C.cYl[m-1]).gp(0)
q=i.H()
a1.drawRRect(B.er(j),q)
q.delete()
for(k-=o,j=k*0.18,h=0;h<3;++h){i=o+k*(0.12+h*0.28)
g=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
g.r=A.fc.gp(0)
q=g.H()
a1.drawRect(B.c0(new B.a9(i,a3,i+j,r)),q)
q.delete()}j=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
j.r=A.bi.gp(0)
q=j.H()
a1.drawCircle(o+k*0.25,a0,a2,q)
q.delete()
j=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
j.r=A.bi.gp(0)
q=j.H()
a1.drawCircle(o+k*0.75,a0,a2,q)
q.delete()
o+=k+w}for(a0=a6*0.8,a2=e*0.2,a3=d*0.6,m=0;m<5;++m){f=A.k.F(a0+m*0.2,1)
w=f*d
s=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
s.r=A.c.j(0.7*(1-f)).gp(0)
q=s.H()
a1.drawCircle(a2-f*e*0.12,a3-w*0.25,t+w*0.04,q)
q.delete()}},
hTO(a2,a3,a4){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=a3.a,d=a3.b,a0=0+e,a1=0+d
$.W()
x=B.M()
w=a4*2
v=B.aq(A.jr,A.f6,(Math.sin(w)+1)/2)
v.toString
x.saq(new B.a8(A.ax,A.aC,A.x,B.a([v,A.aB],y.O),null,null).av(0,new B.a9(0,0,a0,a1)))
a2.aZ(new B.a9(0,0,a0,a1),x)
for(a0=a2.a,a1=d*0.86,x=e/8-2,v=d*0.14,u=a1+v,t=0;t<8;++t){s=e*t/8
r=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
r.r=(A.k.F(w+t,2)<1?A.bV:A.aS).j(0.5).gp(0)
q=r.H()
a0.drawRect(B.c0(new B.a9(s,a1,s+x,u)),q)
q.delete()}a1=a4*6
p=Math.sin(a1)
J.bz(a0.save())
x=-d
a0.translate(e*0.5,d*0.55+Math.abs(p)*x*0.03)
a2.j1(0,p*0.06)
u=d*0.26
s=d*0.3
r=d*0.04
o=B.bx(B.cl(A.J,s,u),new B.aT(r,r))
n=B.M()
n.saq(C.bWo.av(0,B.cl(A.J,s,u)))
a2.aD(o,n)
n=d*0.08
v=B.cl(new B.u(0,d*0.02),n,v)
o=B.M()
o.r=A.b8.j(0.7).gp(0)
a2.aZ(v,o)
o=B.bx(B.cl(new B.u(0,x*0.25),d*0.17,d*0.22),new B.aT(r,r))
v=B.M()
v.r=A.cq.gp(0)
a2.aD(o,v)
m=A.k.F(a4*1.3,1)>0.08
for(v=x*0.26,u=d*0.025,l=0;l<2;++l){k=C.cg8[l]
s=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
s.r=(m?A.b8:A.f6).gp(0)
q=s.H()
a0.drawCircle(k*d,v,u,q)
q.delete()}v=B.M()
v.r=A.ad.gp(0)
v.c=3
a2.bB(new B.u(0,x*0.335),new B.u(0,x*0.38),v)
v=B.M()
v.r=A.ay.gp(0)
a2.ae(new B.u(0,x*0.39),d*0.015,v)
for(v=-p,u=d*0.035,s=d*0.15,o=d*0.28,x*=0.08,l=0;l<2;++l){j=C.oU[l]
J.bz(a0.save())
i=j*d
a0.translate(i*0.14,x)
h=j>0
a0.rotate(j*(0.7+Math.sin(a1+(h?0:3.141592653589793))*0.8)*180/3.141592653589793,0,0)
g=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
g.r=A.bJ.gp(0)
g.c=u
g.d=A.bO
q=g.H()
a0.drawLine.apply(a0,[0,0,i*0.16,0,q])
q.delete()
a0.restore()
h=h?p:v
g=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
g.r=A.bJ.gp(0)
g.c=r
g.d=A.bO
q=g.H()
a0.drawLine.apply(a0,[i*0.06,s,i*0.08,o+h*d*0.02,q])
q.delete()}a0.restore()
for(a0=a4*0.7,a1=d*0.7,t=0;t<4;++t){f=A.k.F(a0+t*0.25,1)
D.G0(a2,"\u266a",new B.u(e*(0.2+0.18*t)+Math.sin(w+t)*8,a1-f*d*0.5),n,A.c.j(1-f),A.bg,0,null)}},
hOC(a1,a2,a3){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=a2.a,e=a2.b,d=0+f,a0=0+e
$.W()
x=B.M()
x.saq(C.bUY.av(0,new B.a9(0,0,d,a0)))
a1.aZ(new B.a9(0,0,d,a0),x)
x=B.M()
x.r=A.dO.gp(0)
a1.ae(new B.u(f*0.12,e*0.16),e*0.07,x)
x=e*0.72
a0=B.M()
a0.r=A.Eh.gp(0)
a1.aZ(new B.a9(0,x,d,x+e*0.28),a0)
for(d=a3*0.25,a0=e*0.78,x=a1.a,w=e*0.016,v=a3*0.3,u=e*0.022,t=0;t<9;++t){s=f*(0.07+t*0.105)
r=A.k.D(A.k.F(d-t*0.12,3),0,1)
q=A.o.F(t,3)
p=s+Math.sin(a3+t)*3
q=a0-e*(0.12+0.05*q)*r
o=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
o.r=A.hj.gp(0)
o.c=3
n=o.H()
x.drawLine.apply(x,[s,a0,p,q,n])
n.delete()
if(r>0.7){for(m=0;m<6;++m){l=m*3.141592653589793/3+v
o=Math.cos(l)
k=Math.sin(l)
j=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
j.r=C.avO[A.o.F(t,5)].gp(0)
n=j.H()
x.drawCircle(p+o*e*0.028,q+k*e*0.028,u,n)
n.delete()}o=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
o.r=A.dO.gp(0)
n=o.H()
x.drawCircle(p,q,w,n)
n.delete()}}for(d=e*0.03,a0=e*0.05,w=e*0.06,v=a3*0.9,u=a3*1.3,q=a3*18,t=0;t<3;++t){s=f*(0.2+0.28*t)+Math.sin(v+t*2)*f*0.12
i=e*(0.3+0.1*t)+Math.cos(u+t)*e*0.06
h=Math.abs(Math.sin(q+t))
for(p=a0*h+2,o=(t+2)%5,g=0;g<2;++g){k=B.cl(new B.u(s+C.oU[g]*e*0.025*h,i),w,p)
j=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
j.r=C.avO[o].gp(0)
n=j.H()
x.drawOval(B.c0(k),n)
n.delete()}p=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
p.r=A.bi.gp(0)
p.c=2
n=p.H()
x.drawLine.apply(x,[s,i-d,s,i+d,n])
n.delete()}},
h_l(d,e,f,g,h,i){return B.a5(d,!1).c8(B.uA(null,!1,!0,!0,new D.fNe(e,h,g,i,f),A.eI,null,A.pG,new D.fNf(),y.S))},
xv:function xv(d,e){this.a=d
this.b=e},
fnz:function fnz(d,e,f){this.a=d
this.b=e
this.c=f},
fNe:function fNe(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fNf:function fNf(){},
VR:function VR(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aDN:function aDN(d,e){var _=this
_.e=_.d=$
_.f=-1
_.r=!1
_.w=null
_.x=0
_.y=!0
_.z=null
_.bq$=d
_.a8$=e
_.c=_.a=null},
eDx:function eDx(d){this.a=d},
eDw:function eDw(d){this.a=d},
eDv:function eDv(d,e){this.a=d
this.b=e},
eDy:function eDy(d,e){this.a=d
this.b=e},
eDH:function eDH(d){this.a=d},
eDG:function eDG(d){this.a=d},
eDF:function eDF(){},
eDA:function eDA(d){this.a=d},
eDB:function eDB(d){this.a=d},
eDC:function eDC(d){this.a=d},
eDD:function eDD(d){this.a=d},
eDz:function eDz(d){this.a=d},
eDE:function eDE(d){this.a=d},
eDu:function eDu(d){this.a=d},
eDt:function eDt(d){this.a=d},
btK:function btK(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.a=h},
aLC:function aLC(){},
h_q(d){var x
A:{if("lgtv"===d){x="lg"
break A}if("sonytv"===d){x="sony"
break A}if("appletv"===d){x="apple"
break A}if("bangtv"===d){x="bo"
break A}x="samsung"
break A}return x},
i8c(d){var x,w=D.h_q(d)
A:{if("lg"===w){x=A.hi
break A}if("sony"===w){x=A.dA
break A}if("apple"===w){x=A.bP
break A}if("bo"===w){x=C.t6
break A}x=A.aS
break A}return x},
arc:function arc(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bjW:function bjW(){this.d=0
this.c=this.a=null},
eDr:function eDr(d,e){this.a=d
this.b=e},
eDs:function eDs(d,e){this.a=d
this.b=e},
eDo:function eDo(){},
eDn:function eDn(d){this.a=d},
eDp:function eDp(d){this.a=d},
eDq:function eDq(d){this.a=d},
eDl:function eDl(d){this.a=d},
eDm:function eDm(d,e){this.a=d
this.b=e},
hE5(b3,b4,b5,b6,b7){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9=A.o.an(22050*b4,1000),b0=a9*2,b1=new DataView(new ArrayBuffer(44+b0)),b2=new D.cew(b1)
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
x=new B.eL()
x.dB(3)
w=3
v=0.006
u=!1
t=0
switch(b7){case"piano":s=C.cRI
r=C.cWR
w=3.4
break
case"organ":s=C.cVL
r=C.d9x
v=0.02
u=!0
break
case"bell":s=C.cNv
r=C.cMn
w=2.4
break
case"pluck":s=C.cRH
r=C.cyi
w=7
break
case"synth":s=C.dao
r=C.dc3
v=0.012
u=!0
break
case"flute":s=C.dg9
r=C.c8T
v=0.07
u=!0
t=0.035
break
default:s=C.aon
r=C.aon}b0=s.length
q=B.c2(b0,0,!1,y.i)
for(p="saw"===b5,o="tri"===b5,n="noise"===b5,m="square"===b5,l=b7.length!==0,k=-w,j=k*0.12,i=t>0,h=b7!=="bell",g=b7!=="piano",f=b7==="pluck",e=0,d=0;d<a9;++d){a0=d/22050
a1=1-d/a9
a2=b3*(1+b6*a1)
if(l){for(a1=6.283185307179586*a2,a3=k*a0,a4=0,a5=0;a5<b0;++a5){a6=q[a5]+a1*r[a5]/22050
q[a5]=a6
a7=!h||!g||f?Math.exp(a3*(1+a5*0.35)):1
a4+=Math.sin(a6)*s[a5]*a7}a4/=1.9
if(i)a4+=(x.aj()*2-1)*t
a8=Math.min(1,a0/v)*Math.min(1,(a9-d)/1984.5)
a4*=u?a8:a8*Math.exp(j*a0)}else{e+=6.283185307179586*a2/22050
A:{if(m){a3=Math.sin(e)>=0?0.6:-0.6
break A}if(n){a3=(x.aj()*2-1)*0.8
break A}if(o){a3=0.6366197723675814*Math.asin(Math.sin(e))
break A}if(p){a3=A.k.F(e/6.283185307179586,1)*1.2-0.6
break A}a3=Math.sin(e)
break A}a4=a3*(Math.min(1,d/120)*Math.pow(a1,1.6))}b1.setInt16(44+d*2,A.o.D(A.k.V(a4*0.8*32e3),-32768,32767),!0)}return J.eT(A.dD.gaM(b1))},
dF(d,e,f,g,h,i){return D.hE6(d,e,f,g,h,i)},
hE6(d,e,f,g,h,i){var x=0,w=B.j(y.H),v=1,u=[],t,s,r,q,p,o
var $async$dF=B.e(function(j,k){if(j===1){u.push(k)
x=v}for(;;)switch(x){case 0:v=3
t=""+A.k.V(d)+"|"+f+"|"+i+"|"+B.t(g)+"|"+e
s=$.hE4.cg(0,t,new D.cey(d,f,i,g,e))
if($.cev.length<12){q=B.ahZ()
q.MB(A.aLM)
$.cev.push(q)}q=$.h8D
$.h8D=q+1
r=$.cev[A.o.F(q,$.cev.length)]
x=6
return B.b(J.hrl(r,new B.a2H(s,null),h),$async$dF)
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
return B.i($async$dF,w)},
cew:function cew(d){this.a=d},
cey:function cey(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h}},C,M,N
J=c[1]
B=c[0]
A=c[2]
G=c[117]
E=c[120]
H=c[123]
I=c[173]
K=c[92]
F=c[113]
L=c[93]
D=a.updateHolder(c[26],D)
C=c[94]
M=c[109]
N=c[232]
D.wd.prototype={}
D.vG.prototype={}
D.xv.prototype={}
D.VR.prototype={
R(){return new D.aDN(null,null)}}
D.aDN.prototype={
gadg(){var x,w=this,v=w.d
if(v===$){x=B.bj(null,A.nT,null,1,null,w)
x.cs(0)
w.d!==$&&B.bL()
w.d=x
v=x}return v},
gD5(){var x=this.e
return x===$?this.e=this.a.e:x},
a_(){var x=this
x.a1()
x.w=B.cM(x.a.r,x.gaY3())
x.aUc()
D.dF(520,"",80,0,0.25,"tri")},
aUc(){var x=this.z
if(x!=null)x.a7(0)
this.z=B.cM(A.jV,new D.eDx(this))},
c5i(){var x=this.c
if(x!=null&&B.a5(x,!1).pv()){x=this.c
x.toString
B.a5(x,!1).O(this.gD5())}},
aid(){var x=this,w=x.w
if(w!=null)w.a7(0)
x.w=null
x.y=!0
x.aUc()},
aw4(d){this.m(new D.eDv(this,d))
D.dF(900,"",40,0,0.3,"noise")},
aZO(d){this.m(new D.eDy(this,d))
D.dF(700,"",60,0,0.3,"tri")},
q(){var x=this,w=x.w
if(w!=null)w.a7(0)
w=x.z
if(w!=null)w.a7(0)
x.gadg().q()
x.buK()},
B(d){var x,w,v,u,t=this,s=null,r=B.m(10),q=B.I(t.gc5j(),A.q,6),p=B.a([new B.ac(0,A.G,D.i8c(t.a.d).j(0.25),A.J,40)],y.V),o=B.m(4),n=y.p,m=B.a([B.c6(t.gadg(),new D.eDG(t),s)],n)
if(t.r)m.push(t.bAb())
r=B.av(new B.fG(1.7777777777777777,B.p(s,B.bw(o,new B.an(A.W,s,A.b0,A.r,m,s),A.aq),A.f,s,s,new B.o(s,s,q,r,p,s,A.n),s,s,s,s,s,s,s,s),s),s,s,s)
q=t.y
p=q?1:0
o=B.nw(s,A.aX,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s)
o=B.aH(s,s,s,s,B.X(A.cC,A.c,s,s,s,s),s,s,s,t.gaY3(),s,s,s,o,"Back to the board",s)
m=B.m(20)
x=t.f
w=t.a
o=B.A(B.a([o,A.b6,B.p(s,B.d(x>=0?w.c+" \xb7 "+C.k0[x].a:w.c+" \xb7 CH "+(t.gD5()+1),s,s,s,s,s,s,M.zu,s,s,s),A.f,s,s,new B.o(A.aX,s,s,m,s,s,A.n),s,s,s,s,A.mm,s,s,s)],n),A.m,s,A.e,A.j,0,s,s)
m=t.cm7()
x=A.w.j(0.65)
w=B.m(18)
v=t.f
v=B.d(v>=0?C.k0[v].a:C.PJ[t.gD5()].a,s,s,s,s,s,s,A.i5,A.L,s,s)
u=t.f
return B.c8(s,A.w,B.bl(!0,B.aE(A.c4,new B.an(A.W,s,A.b0,A.r,B.a([r,B.CT(B.e1(B.v(B.a([new B.D(C.bpt,o,s),A.am,m,A.b6,B.p(s,B.v(B.a([v,B.d(u>=0?C.k0[u].c:C.PJ[t.gD5()].b,s,s,s,s,s,s,K.a7l,A.L,s,s)],n),A.m,s,A.e,A.Q,0,A.p),A.f,s,s,new B.o(x,s,s,w,s,s,A.n),s,s,s,A.bk,A.bT,s,s,s)],n),A.m,s,A.e,A.j,0,A.p),!q,s),A.bc,A.ia,p)],n),s),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new D.eDH(t),s,s,s,s,s,s,!1,A.a8),!0,!1,A.af,!0,!0),s,!1,!1,s,s)},
cm7(){var x=this,w=null,v=new D.eDF(),u=A.w.j(0.72),t=B.m(22),s=B.I(A.aS.j(0.5),A.q,1)
return B.p(w,B.A(B.a([v.$3(A.yc,"CH \u2212",new D.eDA(x)),v.$3(A.hy,"CH +",new D.eDB(x)),v.$5$color$on(A.FW,"TV",new D.eDC(x),A.aS,x.f<0),v.$5$color$on(A.xX,"APPS",new D.eDD(x),A.bt,x.r),v.$5$color$on(A.Bu,"ADS",new D.eDE(x),A.bV,x.f===0)],y.p),A.m,w,A.e,A.Q,0,w,w),A.f,w,w,new B.o(u,w,s,t,w,w,A.n),w,w,w,w,A.YI,w,w,w)},
bAb(){return new D.arc(this.a.d,this.gcaV(),new D.eDu(this),null)},
gc5j(){var x,w=D.h_q(this.a.d)
A:{if("apple"===w){x=A.dA
break A}if("bo"===w){x=C.E6
break A}if("sony"===w){x=C.b6o
break A}if("lg"===w){x=A.ea
break A}x=A.cD
break A}return x}}
D.btK.prototype={
a5(d,e){var x=this
return D.h_3(d,e,x.b,x.d,x.e,x.c)},
ar(d){return!0}}
D.aLC.prototype={
q(){var x=this,w=x.a8$
if(w!=null)w.a3(0,x.gbv())
x.a8$=null
x.a2()},
aR(){this.aY()
this.aX()
this.bw()}}
D.arc.prototype={
R(){return new D.bjW()},
a4Y(d,e){return this.d.$1(e)}}
D.bjW.prototype={
aY4(d){this.m(new D.eDr(this,d))
this.a.a4Y(0,d)},
B(d){var x,w=this,v=D.h_q(w.a.c)
A:{if("lg"===v){x=w.bZb()
break A}if("sony"===v){x=w.ctJ()
break A}if("apple"===v){x=w.c5k()
break A}if("bo"===v){x=w.bB5()
break A}x=w.coa()
break A}return x},
gadh(){var x=new B.S(Date.now(),0,!1)
return A.a.aT(A.o.u(B.dl(x)),2,"0")+":"+A.a.aT(A.o.u(B.fY(x)),2,"0")},
aw5(d,e,f,g,h,i,j){var x,w,v=null,u=C.k0[d],t=this.d===d,s=u.d,r=B.aq(s,A.w,0.55)
r.toString
r=B.a([s,r],y.O)
s=B.m(h)
if(t)x=i
else x=A.K
x=B.I(x,A.q,t?2.5:0)
w=B.a([B.d(u.b,v,v,v,v,v,v,B.l(v,v,v,v,v,v,v,v,v,v,v,e,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],y.p)
if(g)w.push(new B.D(A.vc,B.d(u.a,v,1,A.a2,v,v,v,A.Tu,v,v,v),v))
return B.aE(v,B.p(v,B.v(w,A.m,v,A.bb,A.j,0,A.p),A.f,v,v,new B.o(v,v,x,s,v,new B.a8(A.ax,A.aC,A.x,r,v,v),A.n),v,f,v,v,v,v,v,j),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new D.eDs(this,d),v,v,v,v,v,v,!1,A.a8)},
aY5(d,e,f,g,h,i){return this.aw5(d,e,f,!1,g,h,i)},
coa(){var x,w,v,u,t,s,r=this,q=null,p=r.a.e,o=y.p,n=B.A(B.a([C.fiw,A.ab,C.faX,A.b6,C.bMW,A.ab,C.bIW,A.ab,B.d(r.gadh(),q,q,q,q,q,q,C.aPM,q,q,q)],o),A.m,q,A.e,A.j,0,q,q),m=C.k0[r.d],l=B.d(m.a,q,q,q,q,q,q,A.m2,q,q,q)
m=B.d(m.c,q,1,A.a2,q,q,q,C.f2U,q,q,q)
x=A.c.j(0.08)
w=B.a([],o)
for(v=0;v<2;++v){u=new B.aT(8,8)
w.push(B.p(q,B.X(C.cfX[v],A.ad,q,q,q,17),A.f,q,q,new B.o(A.bF,q,q,new B.bp(u,u,u,u),q,q,A.n),q,34,q,A.LM,q,q,q,34))}u=B.a([],o)
for(t=0;t<8;++t){s=r.d===t?1.12:1
u.push(new B.D(A.LM,new B.yv(r.aw5(t,14,44,!0,8,A.aS,52),s,A.bc,A.fG,q,q),q))}w.push(B.E(B.cd(B.A(u,A.m,q,A.e,A.j,0,q,q),A.r,q,A.y,q,q,q,q,A.aO),1))
return B.aE(q,B.p(q,B.v(B.a([n,A.b6,new B.bI(A.a3,q,q,l,q),new B.bI(A.a3,q,q,m,q),A.am,B.p(q,B.A(w,A.m,q,A.e,A.j,0,q,q),A.f,q,q,new B.o(x,q,q,A.V_,q,q,A.n),q,q,q,q,A.Me,q,q,q)],o),A.m,q,A.e,A.j,0,A.p),A.f,q,q,C.aZF,q,q,q,q,E.agx,q,q,q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,p,q,q,q,q,q,q,!1,A.a8)},
bZb(){var x=null,w=this.a.e,v=y.p
return B.aE(x,B.p(x,B.v(B.a([B.A(B.a([B.p(x,C.fox,A.f,x,x,new B.o(A.hi,x,x,B.m(10),x,x,A.n),x,x,x,x,A.nc,x,x,x),A.bp,C.fhu,A.b6,B.d(this.gadh(),x,x,x,x,x,x,A.D8,x,x,x)],v),A.m,x,A.e,A.j,0,x,x),A.b6,new B.a7(x,62,B.hH(x,new D.eDn(this),8,x,x,A.aO,new D.eDo(),!1),x)],v),A.F,x,A.e,A.j,0,A.p),A.f,x,x,C.aZQ,x,x,x,x,N.LT,x,x,x),A.y,!1,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,w,x,x,x,x,x,x,!1,A.a8)},
ctJ(){var x,w,v,u,t=this,s=null,r=C.k0[t.d],q=t.a.e,p=y.p,o=B.a([B.p(s,C.eIB,A.f,s,s,new B.o(A.dq,s,s,B.m(12),s,s,A.n),s,s,s,s,A.xH,s,s,s),A.ab],p)
for(x=0;x<3;++x){w=C.d6K[x]
v=w==="Apps"?A.c:A.az
o.push(new B.D(A.iU,new B.x(w,s,new B.G(!0,v,s,s,s,s,9.5,A.P,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s),s,s,s,s,s,s,s,s,s),s))}o.push(A.b6)
o.push(B.d(t.gadh(),s,s,s,s,s,s,C.f2h,s,s,s))
o=B.A(o,A.m,s,A.e,A.j,0,s,s)
v=r.d
u=B.aq(v,A.w,0.7)
u.toString
u=B.a([v,u],y.O)
v=B.m(10)
return B.aE(s,B.p(s,B.v(B.a([o,A.h0,B.E(B.A(B.a([B.E(B.p(s,B.v(B.a([B.d(r.b,s,s,s,s,s,s,A.uB,s,s,s),B.d(r.a,s,s,s,s,s,s,A.nt,s,s,s),B.d(r.c,s,2,A.a2,s,s,s,C.f8q,s,s,s),A.cS,B.aE(s,B.p(s,C.fev,A.f,s,s,new B.o(A.c,s,s,B.m(10),s,s,A.n),s,s,s,s,A.xH,s,s,s),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new D.eDp(t),s,s,s,s,s,s,!1,A.a8)],p),A.F,s,A.lU,A.j,0,A.p),A.f,s,s,new B.o(s,s,s,v,s,new B.a8(A.a3,A.a7,A.x,u,s,s),A.n),s,s,s,s,A.co,s,s,s),5),A.ab,B.E(B.ie(!0,s,s,A.y,C.eOw,new D.eDq(t),8,A.af,s,A.ah,!1),6)],p),A.m,s,A.e,A.j,0,s,s),1)],p),A.F,s,A.e,A.j,0,A.p),A.f,C.bgO,s,s,s,s,s,s,A.fI,s,s,s),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,q,s,s,s,s,s,s,!1,A.a8)},
c5k(){var x,w,v,u,t=this,s=null,r=t.a.e,q=y.p,p=B.A(B.a([C.bNx,A.qd,C.fuj,A.b6,B.d(t.gadh(),s,s,s,s,s,s,A.Dc,s,s,s)],q),A.m,s,A.e,A.j,0,s,s),o=B.a([],q)
for(x=0;x<8;++x){w=t.d===x
v=w?6:0
u=w?C.dbP:A.Q2
w=w?1.18:1
o.push(new B.D(A.eQ,B.dj(s,new B.yv(t.aY5(x,20,44,12,A.c,44),w,A.bc,A.eE,s,s),s,s,A.bc,new B.o(s,s,s,s,u,s,A.n),A.eE,s,s,new B.Q(0,0,0,v),s,s,s,s),s))}return B.aE(s,B.p(s,B.v(B.a([p,A.b6,new B.a7(s,68,B.cd(B.A(o,A.dz,s,A.e,A.j,0,s,s),A.r,s,A.y,s,s,s,s,A.aO),s),A.at,B.d(C.k0[t.d].a,s,s,s,s,s,s,A.oh,s,s,s)],q),A.m,s,A.e,A.j,0,A.p),A.f,s,s,C.aZH,s,s,s,s,C.Y0,s,s,s),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,r,s,s,s,s,s,s,!1,A.a8)},
bB5(){var x,w,v,u,t,s,r=this,q=null,p=r.a.e,o=C.k0[r.d],n=y.p
o=B.E(B.v(B.a([C.fe5,A.b6,B.d(o.b,q,q,q,q,q,q,A.uy,q,q,q),A.at,B.d(o.a,q,q,q,q,q,q,C.eVV,q,q,q),A.bB,B.d(o.c,q,q,q,q,q,q,C.f8K,q,q,q),A.am,B.aE(q,B.p(q,C.fwn,A.f,q,q,C.b_a,q,q,q,q,C.boC,q,q,q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new D.eDl(r),q,q,q,q,q,q,!1,A.a8),A.b6],n),A.F,q,A.e,A.j,0,A.p),4)
x=B.p(q,q,A.f,C.beR,q,q,q,q,q,A.fV,q,q,q,0.6)
w=B.a([],n)
for(v=0;v<8;++v){u=C.k0[v]
t=r.d===v
s=t?C.t6:C.abV
t=t?12:10.5
w.push(B.aE(q,new B.D(A.xt,new B.x(u.a,q,new B.G(!0,s,q,"serif",q,q,t,A.jW,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q),q,q,q,q,q,q,q,q,q),q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new D.eDm(r,v),q,q,q,q,q,q,!1,A.a8))}return B.aE(q,B.p(q,B.A(B.a([o,x,B.E(B.cz(w,q,q,q,q,A.ah,!1),3)],n),A.m,q,A.e,A.j,0,q,q),A.f,C.bk1,q,q,q,q,q,q,A.Fc,q,q,q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,p,q,q,q,q,q,q,!1,A.a8)}}
var z=a.updateTypes(["~()","VR(Y,bq<N>,bq<N>)","~(H)"])
D.fnn.prototype={
$1(d){var x=null,w=B.hL(x,x,1,x,B.dh(x,x,x,x,x,x,x,x,x,B.l(x,x,this.b,x,x,x,x,x,x,x,x,d,x,x,A.u,x,x,!0,x,x,x,x,x,x,x,x),this.a),A.a4,A.ce,x,A.e9,A.ca)
w.eF()
return w},
$S:756}
D.ffh.prototype={
$1(d){var x=this,w=null,v=x.c?A.u:A.a5
v=B.hL(w,w,1,w,B.dh(w,w,w,w,w,w,w,w,w,B.l(w,w,x.b,w,w,w,w,w,w,w,w,d,w,w,v,w,w,!0,w,x.d,w,w,w,w,w,w),x.a),A.a4,A.ce,w,A.e9,A.ca)
v.eF()
return v},
$S:756}
D.fnz.prototype={
$5(d,e,f,g,h){var x,w,v,u,t,s,r,q=this
if(g===0||h<=0)return
x=f*A.k.D(h,0,1)
w=d.ad(0,new B.u(Math.cos(e)*x,-Math.sin(e)*x))
v=q.a
$.W()
u=B.M()
u.r=A.fx.gp(0)
u.c=g*2.2
u.d=A.bO
v.bB(d,w,u)
if(h>0.95){t=Math.sin(q.b*1.6+g)*0.04
u=f*0.72
s=g-1
r=h*1.6-0.9
q.$5(w,e+0.5+t,u,s,r-(5-g)*0)
q.$5(w,e-0.5+t,u,s,r)}if(g===1&&h>0.5){u=B.M()
u.r=B.aq(A.d_,A.b2,(Math.sin(q.b*2+w.a)+1)/2).gp(0)
v.ae(w,q.c*0.035,u)}},
$S:1938}
D.fNe.prototype={
$3(d,e,f){var x=this
return new D.VR(x.d,x.e,x.a,x.c,x.b,null)},
$C:"$3",
$R:3,
$S:z+1}
D.fNf.prototype={
$4(d,e,f,g){var x=y.t
return new B.cZ(e,!1,B.ik(A.A,g,null,new B.bf(B.cH(A.ct,e,null),new B.bo(0.85,1,x),x.k("bf<bJ.T>"))),null)},
$C:"$4",
$R:4,
$S:30}
D.eDx.prototype={
$0(){var x=this.a
if(x.c!=null&&!x.r)x.m(new D.eDw(x))},
$S:0}
D.eDw.prototype={
$0(){return this.a.y=!1},
$S:0}
D.eDv.prototype={
$0(){var x,w=this.a
w.f=-1
w.e=A.o.F(w.gD5()+this.b,10)
if(w.gD5()<0)w.e=w.gD5()+10
x=w.gadg().y
x=x==null?null:A.o.an(x.a,1000)
w.x=x==null?0:x
w.aid()},
$S:0}
D.eDy.prototype={
$0(){var x=this.a
x.f=this.b
x.r=!1
x.aid()},
$S:0}
D.eDH.prototype={
$0(){var x=this.a
return x.m(x.gcyF())},
$S:0}
D.eDG.prototype={
$2(d,e){var x=null,w=this.a,v=w.gadg().y,u=v==null?x:A.o.an(v.a,1000),t=(u==null?0:u)/1000,s=w.x===0&&w.a.f?t:99
return B.b3(x,x,x,new D.btK(w.gD5(),w.f,t,s,x),A.f1)},
$S:68}
D.eDF.prototype={
$5$color$on(d,e,f,g,h){var x=null,w=h?g.j(0.28):A.c.j(0.08),v=B.m(14),u=B.I(h?g:A.b3,A.q,1)
return B.aE(x,B.p(x,B.v(B.a([B.X(d,g,x,x,x,20),A.uw,B.d(e,x,x,x,x,x,x,B.l(x,x,g,x,x,x,x,x,x,x,x,9.5,x,x,A.H,x,x,!0,x,x,x,x,x,x,x,x),x,x,x)],y.p),A.m,x,A.e,A.Q,0,A.p),A.f,x,x,new B.o(w,x,u,v,x,x,A.n),x,x,x,A.jf,A.kN,x,x,56),A.y,!1,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,f,x,x,x,x,x,x,!1,A.a8)},
$3(d,e,f){return this.$5$color$on(d,e,f,A.c,!1)},
$4$color(d,e,f,g){return this.$5$color$on(d,e,f,g,!1)},
$S:1939}
D.eDA.prototype={
$0(){return this.a.aw4(-1)},
$S:0}
D.eDB.prototype={
$0(){return this.a.aw4(1)},
$S:0}
D.eDC.prototype={
$0(){return this.a.aw4(0)},
$S:0}
D.eDD.prototype={
$0(){var x=this.a
return x.m(new D.eDz(x))},
$S:0}
D.eDz.prototype={
$0(){var x=this.a
x.r=!x.r
x.aid()},
$S:0}
D.eDE.prototype={
$0(){return this.a.aZO(0)},
$S:0}
D.eDu.prototype={
$0(){var x=this.a
return x.m(new D.eDt(x))},
$S:0}
D.eDt.prototype={
$0(){return this.a.r=!1},
$S:0}
D.eDr.prototype={
$0(){return this.a.d=this.b},
$S:0}
D.eDs.prototype={
$0(){return this.a.aY4(this.b)},
$S:0}
D.eDo.prototype={
$2(d,e){return A.bp},
$S:36}
D.eDn.prototype={
$2(d,e){var x=null,w=this.a,v=w.d===e?1.1:1
v=B.a([B.vi(w.aY5(e,18,46,6,A.c,80),A.bc,A.fG,v)],y.p)
if(w.d===e)v.push(new B.D(A.vc,B.d(C.k0[e].a,x,x,x,x,x,x,C.f6Z,x,x,x),x))
return B.v(v,A.m,x,A.e,A.Q,0,A.p)},
$S:707}
D.eDp.prototype={
$0(){var x=this.a
return x.a.a4Y(0,x.d)},
$S:0}
D.eDq.prototype={
$2(d,e){return this.a.aw5(e,15,1/0,!0,8,A.c,1/0)},
$S:41}
D.eDl.prototype={
$0(){var x=this.a
return x.a.a4Y(0,x.d)},
$S:0}
D.eDm.prototype={
$0(){return this.a.aY4(this.b)},
$S:0}
D.cew.prototype={
$2(d,e){var x,w,v,u
for(x=e.length,w=this.a,v=w.$flags|0,u=0;u<x;++u){v&2&&B.aj(w,9)
w.setUint8(d+u,e.charCodeAt(u))}},
$S:458}
D.cey.prototype={
$0(){var x=this
return D.hE5(x.a,x.b,x.c,x.d,x.e)},
$S:312};(function aliases(){var x=D.aLC.prototype
x.buK=x.q})();(function installTearOffs(){var x=a._instance_0u,w=a._instance_1u
var v
x(v=D.aDN.prototype,"gaY3","c5i",0)
x(v,"gcyF","aid",0)
w(v,"gcaV","aZO",2)})();(function inheritance(){var x=a.mixinHard,w=a.inheritMany,v=a.inherit
w(B.hU,[D.fnn,D.ffh,D.fnz,D.fNe,D.fNf,D.eDF])
w(B.aC,[D.wd,D.vG,D.xv])
w(B.ag,[D.VR,D.arc])
w(B.ah,[D.aLC,D.bjW])
v(D.aDN,D.aLC)
w(B.j6,[D.eDx,D.eDw,D.eDv,D.eDy,D.eDH,D.eDA,D.eDB,D.eDC,D.eDD,D.eDz,D.eDE,D.eDu,D.eDt,D.eDr,D.eDs,D.eDp,D.eDl,D.eDm,D.cey])
w(B.ki,[D.eDG,D.eDo,D.eDn,D.eDq,D.cew])
v(D.btK,B.mK)
x(D.aLC,B.c9)})()
B.jW(b.typeUniverse,JSON.parse('{"VR":{"ag":[],"r":[]},"aDN":{"ah":["VR"]},"btK":{"aB":[]},"arc":{"ag":[],"r":[]},"bjW":{"ah":["arc"]},"MY":{"ag":[],"r":[]}}'))
var y=(function rtii(){var x=B.ax
return{L:x("O<a2x>"),V:x("O<ac>"),O:x("O<w>"),v:x("O<ho>"),s:x("O<n>"),p:x("O<r>"),n:x("O<N>"),t:x("bo<N>"),i:x("N"),S:x("H"),H:x("~")}})();(function constants(){var x=a.makeConstList
C.b8r=new B.w(1,0.0196078431372549,0.03137254901960784,0.058823529411764705,A.t)
C.bij=new B.w(1,0.043137254901960784,0.10196078431372549,0.2,A.t)
C.d3H=x([C.b8r,C.bij],y.O)
C.bVD=new B.a8(A.b_,A.b5,A.x,C.d3H,null,null)
C.aZF=new B.o(null,null,null,null,null,C.bVD,A.n)
C.bge=new B.w(1,0.42745098039215684,0.47843137254901963,0.5764705882352941,A.t)
C.b6L=new B.w(1,0.16862745098039217,0.1803921568627451,0.26666666666666666,A.t)
C.b7N=new B.w(1,0.4823529411764706,0.29411764705882354,0.41568627450980394,A.t)
C.deI=x([C.bge,C.b6L,C.b7N],y.O)
C.bTY=new B.a8(A.ax,A.aC,A.x,C.deI,null,null)
C.aZH=new B.o(null,null,null,null,null,C.bTY,A.n)
C.aVM=new B.da(0.5,-0.6)
C.bjw=new B.w(1,0.22745098039215686,0.054901960784313725,0.10980392156862745,A.t)
C.d_e=x([C.bjw,A.ea],y.O)
C.ecR=new B.bT(C.aVM,1.3,A.x,null,0,C.d_e,null,null)
C.aZQ=new B.o(null,null,null,null,null,C.ecR,A.n)
C.aap=new B.o(A.bo,null,null,null,null,null,A.a6)
C.t6=new B.w(1,0.8392156862745098,0.7176470588235294,0.4823529411764706,A.t)
C.aXU=new B.ay(C.t6,1,A.q,-1)
C.aY6=new B.bO(A.Y,A.Y,C.aXU,A.Y)
C.b_a=new B.o(null,null,C.aY6,null,null,null,A.n)
C.abt=new B.w(0.9490196078431372,0.06666666666666667,0.07450980392156863,0.09411764705882353,A.t)
C.b6o=new B.w(1,0.16470588235294117,0.16470588235294117,0.17647058823529413,A.t)
C.b6r=new B.w(1,0.00784313725490196,0.01568627450980392,0.03529411764705882,A.t)
C.abV=new B.w(1,0.6588235294117647,0.6235294117647059,0.5647058823529412,A.t)
C.E2=new B.w(1,0.12156862745098039,0.07058823529411765,0.03529411764705882,A.t)
C.E6=new B.w(1,0.7215686274509804,0.6980392156862745,0.6549019607843137,A.t)
C.b9S=new B.w(1,0.8784313725490196,0.6745098039215687,0.4117647058823529,A.t)
C.acQ=new B.w(1,0.00784313725490196,0.011764705882352941,0.0392156862745098,A.t)
C.KI=new B.w(1,0.06666666666666667,0.0784313725490196,0.09411764705882353,A.t)
C.bdc=new B.w(1,0.011764705882352941,0.023529411764705882,0.09019607843137255,A.t)
C.Aw=new B.w(1,0.09019607843137255,0.09019607843137255,0.10196078431372549,A.t)
C.KP=new B.w(1,0.054901960784313725,0.07058823529411765,0.09411764705882353,A.t)
C.beR=new B.w(1,0.2901960784313726,0.26666666666666666,0.23529411764705882,A.t)
C.kg=new B.w(1,0.09019607843137255,0.09019607843137255,0.10980392156862745,A.t)
C.bgO=new B.w(1,0.08627450980392157,0.09411764705882353,0.10980392156862745,A.t)
C.bhh=new B.w(1,0.24705882352941178,0.3843137254901961,0.07058823529411765,A.t)
C.X5=new B.w(1,1,0.41568627450980394,0,A.t)
C.n2=new B.w(1,0.10588235294117647,0.10588235294117647,0.12156862745098039,A.t)
C.tm=new B.w(1,0.5529411764705883,0.3333333333333333,0.1411764705882353,A.t)
C.Xb=new B.w(1,1,0.9529411764705882,0.6274509803921569,A.t)
C.bk1=new B.w(1,0.10196078431372549,0.09019607843137255,0.0784313725490196,A.t)
C.boC=new B.Q(0,0,0,1)
C.tw=new B.Q(0,0,7,0)
C.bpt=new B.Q(10,10,10,0)
C.Y0=new B.Q(10,6,10,8)
C.agQ=new B.Q(14,10,10,10)
C.akg=new B.a_(62970,"MaterialIcons",!1)
C.ald=new B.a_(983316,"MaterialIcons",!1)
C.NA=new B.a_(983617,"MaterialIcons",!1)
C.bIW=new B.ae(A.BE,13,A.ad,null,null,null)
C.bMW=new B.ae(A.fd,13,A.ad,null,null,null)
C.bEy=new B.a_(983768,"MaterialIcons",!1)
C.bNx=new B.ae(C.bEy,13,A.c,null,null,null)
C.czp=x([A.aS,A.ki,A.qI],y.O)
C.bSN=new B.a8(A.b_,A.b5,A.x,C.czp,null,null)
C.bST=new B.a8(A.b_,A.b5,A.x,I.PC,null,null)
C.cTS=x([A.f8,A.dP,A.cs],y.O)
C.bT5=new B.a8(A.b_,A.b5,A.x,C.cTS,null,null)
C.cS9=x([A.dO,A.ay],y.O)
C.bTL=new B.a8(A.b_,A.b5,A.x,C.cS9,null,null)
C.ddT=x([A.bP,A.c,A.bJ],y.O)
C.bU0=new B.a8(A.a3,A.a7,A.x,C.ddT,null,null)
C.deq=x([A.fT,A.h3],y.O)
C.anY=new B.a8(A.b_,A.b5,A.x,C.deq,null,null)
C.d6i=x([A.dv,A.ow],y.O)
C.bUY=new B.a8(A.b_,A.b5,A.x,C.d6i,null,null)
C.bVZ=new B.a8(A.b_,A.b5,A.x,F.au2,null,null)
C.d1Q=x([A.aL,A.ak],y.O)
C.bWo=new B.a8(A.b_,A.b5,A.x,C.d1Q,null,null)
C.aon=x([1],y.n)
C.c8T=x([1,2,3],y.n)
C.as0=x([1,-1],y.n)
C.S9=new B.y(2,3)
C.Sa=new B.y(3,4)
C.cfX=x([A.lN,A.xX],B.ax("O<a_>"))
C.cg8=x([-0.05,0.05],y.n)
C.e2_=new B.u(26,-8)
C.e2s=new B.u(52,0)
C.e1Z=new B.u(26,8)
C.cgv=x([A.J,C.e2_,C.e2s,C.e1Z],B.ax("O<u>"))
C.eA7=new B.y("Jambo!","Hello!")
C.euR=new B.y("Asante","Thank you")
C.emc=new B.y("Karibu","Welcome")
C.eoh=new B.y("Rafiki","Friend")
C.atL=x([C.eA7,C.euR,C.emc,C.eoh],B.ax("O<+(n,n)>"))
C.atQ=x([A.bV,A.aS,A.dO,A.b2,A.cs],y.O)
C.cyi=x([1,2,3,4,5,6,7],y.n)
C.cLf=x([A.f4,A.bK,A.L4,A.et],y.O)
C.cMn=x([1,2.76,5.4,8.93,13.3],y.n)
C.auN=x([A.cs,A.cf,A.bV,A.b2],y.O)
C.cNv=x([1,0.6,0.38,0.22,0.12],y.n)
C.cQr=x(["Mama","Baba","Bibi","Babu","Dada","Kaka"],y.s)
C.ejz=new B.y("Chairs",120)
C.ejC=new B.y("Cloth",80)
C.ejT=new B.y("Delivery",25)
C.av7=x([C.ejz,C.ejC,C.ejT],B.ax("O<+(n,H)>"))
C.cRH=x([1,0.7,0.45,0.28,0.16,0.1,0.06],y.n)
C.cRI=x([1,0.55,0.32,0.2,0.12,0.07],y.n)
C.dXe=new D.xv("NGMY Tree Story","A family grows, one branch at a time")
C.dX9=new D.xv("Coin Hero","A little coin saves up and wins the day")
C.dXh=new D.xv("Space Voyage","The NGMY rocket explores the stars")
C.dX8=new D.xv("Ocean Friends","Fish, bubbles and a friendly whale")
C.dXa=new D.xv("Rainy Village","Storm clouds, then a rainbow")
C.dXc=new D.xv("Spark Adventure","Follow a spark round a circuit")
C.dXb=new D.xv("Fireworks Night","Colour bursts over the city")
C.dXg=new D.xv("Little Train","A train rolls past the hills")
C.dXd=new D.xv("Robot Disco","A robot dances to the beat")
C.dXf=new D.xv("Garden Time","Flowers grow and butterflies fly")
C.PJ=x([C.dXe,C.dX9,C.dXh,C.dX8,C.dXa,C.dXc,C.dXb,C.dXg,C.dXd,C.dXf],B.ax("O<xv>"))
C.cVL=x([1,0.6,0.45,0.3,0.22,0.15],y.n)
C.avO=x([A.bV,A.cf,A.ay,A.bt,A.cs],y.O)
C.cWR=x([1,2,3,4,5,6],y.n)
C.cYj=x([A.fT,A.ow],y.O)
C.cYl=x([A.bj,A.aH,A.d_],y.O)
C.dnP=new D.vG("NGMY Ads","\ud83d\udce2","Every NGMY promotion, as cartoons",A.bV,-1)
C.dnN=new D.vG("Civic Registry","\ud83e\udeaa","Enroll your family in your community",A.d6,0)
C.dnQ=new D.vG("Jobs","\ud83d\udcbc","Find work and get hired",A.aH,1)
C.dnS=new D.vG("NGMY Store","\ud83d\udecd\ufe0f","African food and traditions",A.fo,2)
C.dnT=new D.vG("Kiswahili","\ud83d\udde3\ufe0f","Learn Swahili and English",A.bW,3)
C.dnR=new D.vG("Doc Scanner","\ud83d\udcc4","Scan, save and share",A.cd,4)
C.dnO=new D.vG("Invoices","\ud83e\uddfe","Professional invoices",A.bA,5)
C.dnM=new D.vG("Calendar","\ud83d\udcc5","This month, today lit up",A.ay,-2)
C.k0=x([C.dnP,C.dnN,C.dnQ,C.dnS,C.dnT,C.dnR,C.dnO,C.dnM],B.ax("O<vG>"))
C.fNL=new D.wd("NGMY Civic Registry","Enroll your family. Stay counted and helped together.",A.dr,A.aS)
C.fNT=new D.wd("NGMY Jobs","Find work. Get hired. Get paid.",A.d8,A.aM)
C.fNR=new D.wd("NGMY Store","African food and traditions. Support our Congolese and African community.",A.jS,A.cf)
C.fNP=new D.wd("Kiswahili School","Learn Swahili and English, step by step.",A.cY,A.n1)
C.fNO=new D.wd("Document Scanner","Scan, save and share your papers.",A.pz,A.h2)
C.fNM=new D.wd("Invoice Creator","Make professional invoices in minutes.",A.t1,A.mQ)
C.fNJ=new D.wd("Family Book and Tree","Write your family story. Grow your tree.",A.iR,A.Kg)
C.fNK=new D.wd("NGMY Wallet","Save, send and earn coins.",A.pt,A.dO)
C.fNN=new D.wd("Vault Games","Play, win and learn.",A.dS,A.b8)
C.fNS=new D.wd("Electronics Lab","Build real circuits and learn.",A.f6,A.b1)
C.fNQ=new D.wd("NGMY Helper and Advisors","Friendly help, any time.",A.lD,A.cs)
C.d0H=x([C.fNL,C.fNT,C.fNR,C.fNP,C.fNO,C.fNM,C.fNJ,C.fNK,C.fNN,C.fNS,C.fNQ],B.ax("O<wd>"))
C.zz=new B.G(!0,A.ad,null,null,null,null,12.5,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.d6j=x([A.dS,A.f8],y.O)
C.d6K=x(["For you","Apps","Library"],y.s)
C.awT=x([A.bI,A.cf,A.d_,A.aB],y.O)
C.oU=x([-1,1],y.n)
C.a2G=x([-24,24],y.n)
C.a2H=x([-5,5],y.n)
C.d9t=x([A.aK,A.ak],y.O)
C.d9x=x([1,2,3,4,6,8],y.n)
C.dao=x([1,0.5,0.33,0.25,0.2,0.16,0.14,0.12],y.n)
C.b13=new B.ac(0,A.G,A.aX,A.dk,14)
C.dbP=x([C.b13],y.V)
C.dc3=x([1,2,3,4,5,6,7,8],y.n)
C.dds=x([A.ay,A.ci,A.cf,A.bo,A.d6,A.b7],y.O)
C.dej=x(["M","T","W","T","F","S","S"],y.s)
C.dfs=x([A.c,A.pm],y.O)
C.dg9=x([1,0.18,0.06],y.n)
C.e_j={"SPARK PAINTER":0,"MANDALA MAKER":1,"TITLE ANIMATOR":2,"PALETTE LAB":3,"GRAVITY TOY":4,"ORBIT STUDIO":5,"SWARM STUDIO":6,"FIREWORK DESIGNER":7,"CHAIN BURST":8,"CIRCUIT LAB":9,"PERIODIC TABLE":10,"BODY EXPLORER":11,"SPIN THE WHEEL":12,"FOCUS TIMER":13,"MEMORY MATCH":14,"LUCKY POCKET":15,"ELECTRONICS LAB":16,"CONSTRUCTION LAB":17,"AI INVENTOR":18,"MAGNET LAB":19,"RADIO LAB":20,"POWER PLANT":21,"POWER GRID":22,"INTERNET JOURNEY":23,"ROBOT CODER":24,"BUG SMASHER":25,"ROCKET LANDER":26,"DATA SNAKE":27,"BINARY 2048":28,"SIGNAL BREAKER":29,"PASSWORD LAB":30,"WAVE LAB":31,"BUG HUNT":32,"MOLECULE MAKER":33,"DNA LAB":34,"ECOSYSTEM LAB":35,"BALANCE LAB":36,"GEAR LAB":37,"OPTICS LAB":38,"LASER MAZE":39,"LIGHT MIXER":40,"ATOM BUILDER":41,"CIPHER LAB":42,"PIXEL TV":43}
C.aD2=new B.bk(C.e_j,["sparkle","sparkle","whoosh","click","bounce","space","bubble","pop","zap","tech","lab","organic","click","tech","bubble","click","tech","tech","tech","tech","tech","tech","tech","tech","tech","pop","space","bubble","click","zap","click","tech","click","lab","organic","organic","click","tech","sparkle","zap","sparkle","lab","tech","tech"],B.ax("bk<n,n>"))
C.abA=new B.w(1,0.16862745098039217,0.1843137254901961,0.21176470588235294,A.t)
C.dlA=new B.hu(A.G,1.2)
C.cgz=x([A.f4,A.eN,A.kh],y.O)
C.ecw=new B.bT(G.pg,0.5,A.x,null,0,C.cgz,null,null)
C.cwi=x([A.lE,A.mU],y.O)
C.ecy=new B.bT(F.a9h,0.5,A.x,null,0,C.cwi,null,null)
C.bO2=new B.ae(A.fd,11,A.ad,null,null,null)
C.f5_=new B.G(!0,A.aR,null,null,null,null,9,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.frm=new B.x("Search",null,C.f5_,null,null,null,null,null,null,null,null,null)
C.cAB=x([C.bO2,A.qd,C.frm],y.p)
C.eIB=new B.cn(A.aO,A.e,A.j,A.m,null,A.p,null,0,C.cAB,null)
C.eOw=new B.hK(3,5,5,1.35,null)
C.biR=new B.w(1,0.9450980392156862,0.9098039215686274,0.8470588235294118,A.t)
C.eVV=new B.G(!0,C.biR,null,"serif",null,null,15,A.jW,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.f2h=new B.G(!0,A.ad,null,null,null,null,9.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.f2U=new B.G(!0,A.aR,null,null,null,null,9.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.Tq=new B.G(!0,A.ad,null,null,null,null,12.5,null,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.aPM=new B.G(!0,A.ad,null,null,null,null,10,A.P,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.f6Z=new B.G(!0,A.c,null,null,null,null,8.5,A.P,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.f8q=new B.G(!0,A.ad,null,null,null,null,8.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.f8K=new B.G(!0,C.abV,null,null,null,null,8.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.f_L=new B.G(!0,A.az,null,null,null,null,9.5,A.P,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.faX=new B.x("NGMY Apps",null,C.f_L,null,null,null,null,null,null,null,null,null)
C.a75=new B.G(!0,A.az,null,null,null,null,12.5,null,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.eXw=new B.G(!0,C.t6,null,null,null,null,8,A.a5,null,3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.fe5=new B.x("BANG & OLUFSEN",null,C.eXw,null,null,null,null,null,null,null,null,null)
C.f21=new B.G(!0,A.w,null,null,null,null,9,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.fev=new B.x("Open",null,C.f21,null,null,null,null,null,null,null,null,null)
C.fhu=new B.x("Home",null,C.aPM,null,null,null,null,null,null,null,null,null)
C.fiw=new B.x("SAMSUNG",null,A.aPu,null,null,null,null,null,null,null,null,null)
C.fox=new B.x("LG",null,A.wg,null,null,null,null,null,null,null,null,null)
C.fuj=new B.x("tv",null,A.qj,null,null,null,null,null,null,null,null,null)
C.f_F=new B.G(!0,C.t6,null,null,null,null,8.5,null,null,2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.fwn=new B.x("OPEN",null,C.f_F,null,null,null,null,null,null,null,null,null)})();(function staticFields(){$.hE4=B.T(B.ax("n"),B.ax("dD"))
$.cev=B.a([],B.ax("O<ahY>"))
$.h8D=0
$.ar9="music"})()};
(a=>{a["kVOCMtU2eGoNiKHEoyfoC/J00fs="]=a.current})($__dart_deferred_initializers__);