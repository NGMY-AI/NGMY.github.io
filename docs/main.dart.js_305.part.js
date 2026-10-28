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
rI(d,e,f,g,h,i){var x=new D.fmR(e,h,!0),w=x.$1(g),v=w.b.c
if(v>i&&v>0)w=x.$1(Math.max(2,g*i/v))
x=w.b
v=x.c
x=x.a.c
w.a5(d,f.aC(0,new B.u(v/2,x.gbc(x)/2)))},
Cy(a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=a6.a
J.by(a5.save())
a5.translate(a7.a,a7.b-b1)
x=B.cm(new B.u(0,b1+a8*0.005),a8*0.06,a8*0.45)
w=A.w.j(0.22)
$.W()
v=B.M()
v.r=w.gp(0)
a6.hN(x,v)
for(x=a8*0.05,w=-a8,v=w*0.24,u=a8*0.1,t=v+a8*0.2,s=a8*0.04,r=a8*0.065,q=w*0.05,p=a8*0.14,o=q+x,n=a8*0.025,m=0;m<2;++m){l=C.oS[m]*a8*0.075
k=l-x
k=B.bA(new B.a9(k,v,k+u,t),new B.aT(s,s))
j=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
j.r=A.dr.gp(0)
i=j.H()
a5.drawRRect(B.er(k),i)
i.delete()
l-=r
l=B.bA(new B.a9(l,q,l+p,o),new B.aT(n,n))
k=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
k.r=A.c.gp(0)
i=k.H()
a5.drawRRect(B.er(l),i)
i.delete()}x=w*0.16
v=w*0.52
u=a8*0.32
t=x+u
r=a8*0.09
h=B.bA(new B.a9(x,v,t,v+u),new B.aT(r,r))
r=B.M()
r.r=b3.gp(0)
a6.aD(h,r)
r=w*0.27
u=a8*0.02
u=B.bA(new B.a9(x,r,t,r+a8*0.045),new B.aT(u,u))
r=A.c.j(0.35)
t=B.M()
t.r=r.gp(0)
a6.aD(u,t)
t=w*0.47
g=new B.u(w*0.15,t)
f=new B.u(a8*0.15,t)
t=w*0.06
u=a8*0.07
a6.bA(g,g.ad(0,new B.u(t,a8*0.17)),D.FY(b4,u))
t=g.ad(0,new B.u(t,a8*0.18))
r=B.M()
r.r=b4.gp(0)
a6.ae(t,s,r)
e=b0?-2.5+b6*0.5:0.5-b6*2.2
d=f.ad(0,new B.u(Math.sin(e)*a8*0.2,Math.cos(e)*a8*0.2))
a6.bA(f,d,D.FY(b4,u))
x=B.M()
x.r=b4.gp(0)
a6.ae(d,s,x)
w*=0.7
a0=new B.u(0,w)
a1=a8*0.22
if(b2===1){x=a0.ad(0,new B.u(0,-a1*0.12))
v=B.M()
v.r=C.E_.gp(0)
a6.ae(x,a1*1.18,v)}x=B.M()
x.r=b4.gp(0)
a6.ae(a0,a1,x)
if(b2===0){x=B.bT(a0,a1)
v=B.M()
v.r=C.E_.gp(0)
a6.f5(x,3.141592653589793,3.141592653589793,!0,v)}else if(b2===2){x=B.bT(a0,a1)
v=B.M()
v.r=C.E_.gp(0)
a6.f5(x,3.141592653589793,3.141592653589793,!0,v)
for(x=w+a1*0.3,v=a1*0.2,m=0;m<2;++m){a2=C.oS[m]
u=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
u.r=C.E_.gp(0)
i=u.H()
a5.drawCircle(0+a2*a1*1.05,x,v,i)
i.delete()}}a3=A.k.F(a9*0.8,3)>2.85
for(x=w+a1*0.42,v=a1*0.12,u=a1*0.25,t=a9*0.7,s=a1*0.13,w+=a1*0.05,r=-a1*0.15,q=w+0,p=a1*0.15,m=0;m<2;++m){o=C.oS[m]*a1
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
n.r=A.j6.j(0.5).gp(0)
i=n.H()
a5.drawCircle(0+o*0.62,x,v,i)
i.delete()}x=a1*0.5
a4=a0.ad(0,new B.u(0,x))
w=a1*0.4
if(b5){x=B.cm(a4,w*(0.35+0.65*((Math.sin(a9*12)+1)/2)),x)
w=B.M()
w.r=A.er.gp(0)
a6.hN(x,w)}else a6.f5(B.cm(a4.aC(0,new B.u(0,a1*0.1)),w,a1*0.65),0.2,2.741592653589793,!1,D.FY(A.bi,1.8))
a5.restore()},
aNL(d,e,f,g,h,i){var x,w,v,u,t,s,r,q=null
if(h<=0)return
x=d.a
J.by(x.save())
x.translate(e.a,e.b)
d.bX(0,A.k.D(A.mM.aw(0,A.k.D(h,0,1)),0.01,1.3))
w=B.i1(q,q,q,q,B.dn(q,q,q,q,q,q,q,q,q,B.l(q,q,A.aB,q,q,q,q,q,q,q,q,g,q,q,A.u,q,q,!0,q,q,q,q,q,q,q,q),f),A.a4,A.cg,q,A.eh,A.ce)
w.eI()
v=w.b
u=v.c
v=v.a.c
t=g*0.8
s=B.bA(B.cm(A.J,v.gbc(v)+g*0.7,u+g*1.1),new B.aT(t,t))
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
fV1(d,e,f,g){var x,w=A.k.D(Math.abs(Math.cos(g)),0.15,1),v=f*2,u=v*w,t=B.cm(e,v,u)
$.W()
x=B.M()
x.r=A.cd.gp(0)
d.hN(t,x)
d.hN(B.cm(e,v,u),D.FY(A.pr,f*0.18))
if(w>0.5)D.rI(d,"$",e,f*1.2,A.pr,9999)},
hML(d,e,f,g){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=new B.eL()
k.dB(4)
for(x=e.a,w=f-g,v=e.b,u=d.a,t=f*3,s=v*0.025,r=v*0.012,q=0;q<18;++q){p=k.aj()
o=A.k.F(w*(40+k.aj()*60)+k.aj()*v,v)
J.by(u.save())
u.translate(p*x,o)
u.rotate((t+q)*180/3.141592653589793,0,0)
p=B.cm(A.J,r,s)
n=C.atN[A.o.F(q,5)]
$.W()
m=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
m.r=n.gp(0)
l=m.H()
u.drawRect(B.c0(p),l)
l.delete()
u.restore()}},
hWl(d,e,f,g){switch(A.o.F(f,11)){case 0:D.hMn(d,e,g)
break
case 1:D.hPi(d,e,g)
break
case 2:D.hUu(d,e,g)
break
case 3:D.hUJ(d,e,g)
break
case 4:D.hTE(d,e,g)
break
case 5:D.hOZ(d,e,g)
break
case 6:D.hLJ(d,e,g)
break
case 7:D.hVq(d,e,g)
break
case 8:D.hO1(d,e,g)
break
case 9:D.hPm(d,e,g)
break
default:D.hOB(d,e,g)}},
hMn(a2,a3,a4){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null,d=a3.a,a0=a3.b,a1=a0*0.94
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
J.by(x.save())
v=d*0.58
x.translate(v,a0*0.45)
a2.t6(0,Math.max(0.08,Math.abs(j)),1)
w=h*0.1
g=B.bA(B.cm(A.J,h,i),new B.aT(w,w))
u=B.M()
t=j>=0
u.saq(new B.a8(A.a3,A.a7,A.x,t?C.df1:C.d5U,e,e).av(0,new B.a9(g.a,g.b,g.c,g.d)))
a2.aD(g,u)
a2.aD(g,D.FY(A.dr,2))
if(t){u=-i
t=u*0.28
p=-h
o=p*0.05
n=h*0.22
m=B.M()
m.r=C.tl.gp(0)
a2.ae(new B.u(t,o),n,m)
n=B.bT(new B.u(t,o),n)
o=B.M()
o.r=C.E_.gp(0)
a2.f5(n,3.141592653589793,3.141592653589793,!0,o)
for(u*=0.05,t=p*0.25,o=h*0.07,s=0;s<3;++s){n=t+s*h*0.16
n=B.bA(new B.a9(u,n,u+i*(0.42-s*0.06),n+o),A.hC)
m=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
m.r=A.dv.gp(0)
k=m.H()
x.drawRRect(B.er(n),k)
k.delete()}D.rI(a2,"COMMUNITY ID",new B.u(0,p*0.4),w,A.dr,i*0.8)}else D.rI(a2,"\u2605 NGMY \u2605",A.J,h*0.16,A.c,i*0.8)
x.restore()
w=a4>2.6
if(w){s=A.k.D((a4-2.6)/0.35,0,1)
J.by(x.save())
x.translate(v,a0*0.52)
a2.iZ(0,-0.25)
a2.bX(0,2.2-1.2*A.ev.aw(0,s))
f=B.cm(A.J,h*0.3,i*0.7)
a2.aD(B.bA(f,A.hc),D.FY(A.cZ.j(s),3))
D.rI(a2,"\u2713 REGISTERED",A.J,h*0.13,A.cZ.j(s),(f.c-f.a)*0.9)
x.restore()}x=a4*5
v=Math.sin(x)
x=Math.sin(x)
w=w&&a4<4
D.Cy(a2,new B.u(d*0.2,a1),a0*0.7,a4,!1,Math.abs(x)*a0*0.015,0,A.cZ,C.tl,w,(v+1)/2)
if(a4>3)D.hML(a2,new B.at(d,a0*0.9),a4,3)},
hPi(a6,a7,a8){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=a7.a,a3=a7.b,a4=a3*0.94,a5=A.w.j(0.2)
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
o.r=A.fw.gp(0)
a6.aZ(new B.a9(s,q,s+v*0.24,q+r),o)
o=x-a3*0.09
r=a3*0.02
o=B.bA(new B.a9(w,o,a5,o+a3*0.08),new B.aT(r,r))
a5=B.M()
a5.r=A.aH.gp(0)
a6.aD(o,a5)
a5=a3*0.05
o=a3*0.06
D.rI(a6,"JOBS",new B.u(w+v/2,x-a5),o,A.c,9999)
h=A.k.D(a8/2.8,0,1)
x=a2*0.12
g=x+(w+v*0.3-x)*A.dC.aw(0,h)
x=h<1
f=x?Math.abs(Math.sin(a8*12))*a3*0.02:0
s=h>=1
q=s?(Math.sin(a8*6)+1)/2:0
D.Cy(a6,new B.u(g,a4),a3*0.6,a8,!1,f,2,A.b7,A.L3,s,q)
if(x){x=B.bA(B.cm(new B.u(g-a3*0.12,a4-a3*0.17-f),a3*0.075,a3*0.1),A.hC)
q=B.M()
q.r=A.fw.gp(0)
a6.aD(x,q)}if(s){x=a8-2.8
D.aNL(a6,new B.u(g+a5,a4-a3*0.78),"Hired! \ud83c\udf89",a3*0.07,x/0.4,A.c)
for(a5=x*0.8,x=a4-a3*0.5,s=a3*0.03,q=a8*8,e=0;e<6;++e){d=A.k.F(a5+e*0.17,1)
D.fV1(a6,new B.u(g+Math.sin(e*2.1)*a3*0.2,x-d*a3*0.25),s,q+e)}}a5=a2*0.04
x=a5+v
s=o+a3*0.3
r=B.bA(new B.a9(a5,o,x,s),new B.aT(r,r))
$.W()
q=B.M()
q.r=A.it.gp(0)
a6.aD(r,q)
for(x-=a5,r=a5+x*0.08,s-=o,q=x*0.84,n=s*0.24,a5+=x*0.14,x*=0.5,l=s*0.05,e=0;e<3;++e){k=(1-A.k.D((a8-e*0.5)/0.5,0,1))*a2*0.3
j=r+k
a0=e*0.3
a1=o+s*(0.08+a0)
a1=B.bA(new B.a9(j,a1,j+q,a1+n),A.hC)
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
hUu(a1,a2,a3){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=a2.a,e=a2.b,d=e*0.94,a0=A.fw.j(0.6)
$.W()
x=B.M()
x.r=a0.gp(0)
a1.aZ(new B.a9(0,d,0+f,d+(e-d)),x)
w=f*0.3
v=f*0.66
for(a0=v/12,x=e*0.14,u=a0+1,t=x+e*0.12,s=a1.a,r=0;r<12;++r){q=w+a0*r
p=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
p.r=C.awQ[A.o.F(r,4)].gp(0)
o=p.H()
s.drawRect(B.c0(new B.a9(q,x,q+u,t)),o)
o.delete()}for(u=e*0.2,t=e*0.1,q=u+t,r=0;r<12;++r){p=w+a0*r
n=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
n.r=C.awQ[A.o.F(r,4)].gp(0)
o=n.H()
s.drawArc.apply(s,[B.c0(new B.a9(p,u,p+a0,q)),0,180,!0,o])
o.delete()}a0=w+4
u=e*0.3
q=u+(d-u)
p=B.M()
p.r=A.fw.gp(0)
a1.aZ(new B.a9(a0,u,a0+4,q),p)
p=w+v
a0=p-8
n=B.M()
n.r=A.fw.gp(0)
a1.aZ(new B.a9(a0,u,a0+4,q),n)
n=e*0.68
q=n+e*0.26
a0=B.bA(new B.a9(w,n,p,q),A.ii)
u=B.M()
u.r=A.it.gp(0)
a1.aD(a0,u)
for(a0=p-w,u=a0/6,p=n+2,a0/=12,q=p+(q-n-4),r=0;r<6;++r){m=w+u*r
l=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
l.r=((r&1)===0?A.bI:A.cd).j(0.9).gp(0)
o=l.H()
s.drawRect(B.c0(new B.a9(m,p,m+a0,q)),o)
o.delete()}a0=w+v*0.2
u=e*0.62
k=new B.u(a0,u)
q=e*0.17
p=e*0.03
m=B.bA(B.cm(k,e*0.11,q),new B.aT(p,p))
l=B.M()
l.r=A.cE.gp(0)
a1.aD(m,l)
l=-e
q=B.cm(k.ad(0,new B.u(0,l*0.05)),e*0.04,q)
m=B.M()
m.r=A.fx.gp(0)
a1.hN(q,m)
for(q=a3*0.8,l*=0.08,m=e*0.015,r=0;r<3;++r){j=A.k.F(q+r*0.33,1)
i=Math.sin(j*6+r)
h=j*e
g=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
g.r=A.c.j(0.6*(1-j)).gp(0)
o=g.H()
s.drawCircle(a0+i*5,u+(l-h*0.14),m+h*0.02,o)
o.delete()}for(a0=w+v*0.5,q=e*0.018,r=0;r<5;++r){m=B.cm(new B.u(a0,u),x,e*(0.1+r*0.01))
l=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
l.b=A.ae
l.c=q
l.r=A.cd.gp(0)
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
o.delete()}D.Cy(a1,new B.u(f*0.14,d),n,a3,!1,0,1,A.cd,E.adh,!0,(Math.sin(a3*5)+1)/2)
for(a0=a3*0.45,x=f*0.16,u=e*0.45,s=e*0.06,r=0;r<5;++r){j=A.k.F(a0+r*0.2,1)
D.rI(a1,"\u2665",new B.u(x+Math.sin(j*5+r)*e*0.08+r*e*0.03,u-j*e*0.4),s,A.ay.j(1-j),9999)}a0=w+v/2
x=e*0.08
p=B.bA(B.cm(new B.u(a0,x),t,v*0.7),new B.aT(p,p))
$.W()
t=B.M()
t.r=A.aB.gp(0)
a1.aD(p,t)
D.rI(a1,"NGMY STORE \xb7 African food",new B.u(a0,x),e*0.05,A.dO,v*0.64)},
hUJ(d,e,f){var x,w,v,u,t,s,r=e.a,q=e.b,p=q*0.94,o=A.w.j(0.2)
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
D.Cy(d,new B.u(r*0.25,p),x,f,!1,t,2,A.cZ,C.tl,u,o)
o=u?0:(Math.sin(f*8)+1)/2
t=u?0:Math.abs(Math.sin(f*8))*q*0.01
D.Cy(d,new B.u(r*0.75,p),x,f,!1,t,0,A.bk,C.b9O,!u,o)
o=q*0.15
x=q*0.085
if(u)D.aNL(d,new B.u(r*0.26,o),C.atI[w].a,x,v/0.25,A.ow)
else D.aNL(d,new B.u(r*0.74,o),C.atI[w].b,x,(v-0.75)/0.25,A.et)
for(o=r*0.5,x=q*0.07,t=f*2,s=0;s<3;++s)D.rI(d,"\u2192",new B.u(o,q*(0.35+s*0.1)),x,A.c.j(0.3+0.5*A.k.F(t+s,1)),9999)},
hTE(a1,a2,a3){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=a2.a,e=a2.b,d=e*0.94,a0=A.w.j(0.2)
$.W()
x=B.M()
x.r=a0.gp(0)
a1.aZ(new B.a9(0,d,0+f,d+(e-d)),x)
x=f*0.3
w=B.cm(new B.u(f*0.6,e*0.45),e*0.7,Math.min(x,e*0.55))
a0=B.bA(w,A.ii)
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
t.r=A.b1.gp(0)
a1.aZ(new B.a9(a0,u,p,u+4),t)
t=A.b1.j(0.18)
u=B.M()
u.r=t.gp(0)
a1.aZ(new B.a9(a0,v,p,v+(h-v)),u)}else{n=A.k.D((a3-3)/0.4,0,1)
u=A.mM.aw(0,n)
t=B.M()
t.r=A.bI.gp(0)
a1.ae(new B.u(q,v),e*0.08*u,t)
D.rI(a1,"PDF",new B.u(q,v),e*0.045*n,A.c,9999)
v=e*0.06
D.rI(a1,"\u2713 Saved",new B.u(w.gbQ().a,a0+v),v,A.c.j(n),9999)}a0=a3*4
v=Math.sin(a0)
D.Cy(a1,new B.u(f*0.2,d),e*0.66,a3,!0,Math.abs(Math.sin(a0))*e*0.01,0,A.cz,C.tl,!1,(v+1)/2)
g=B.cm(new B.u(x,e*0.3),e*0.18,e*0.1)
x=e*0.02
x=B.bA(g,new B.aT(x,x))
v=B.M()
v.r=A.aB.gp(0)
a1.aD(x,v)
v=e*0.015
v=B.bA(g.cF(-3),new B.aT(v,v))
x=A.b1.j(0.35+0.3*Math.sin(a3*6))
a0=B.M()
a0.r=x.gp(0)
a1.aD(v,a0)},
hOZ(a6,a7,a8){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=a7.a,a3=a7.b,a4=a3*0.94,a5=A.w.j(0.2)
$.W()
x=B.M()
x.r=a5.gp(0)
a6.aZ(new B.a9(0,a4,0+a2,a4+(a3-a4)),x)
w=B.cm(new B.u(a2*0.62,a3*0.47),a3*0.8,Math.min(a2*0.4,a3*0.75))
x=B.bA(w,A.rt)
a5=B.M()
a5.r=A.c.gp(0)
a6.aD(x,a5)
a5=w.a
x=w.c
v=x-a5
u=w.b
t=w.d-u
D.rI(a6,"INVOICE",new B.u(a5+v*0.3,u+t*0.09),t*0.07,A.dr,9999)
for(s=a6.a,r=v*0.08,q=a5+r,p=t*0.045,o=q+v*0.5,n=x-v*0.17,m=t*0.02,l=t*0.06,k=a8-0.5,j=0,i=0;i<3;++i){h=A.k.D((k-i*0.6)/0.4,0,1)
if(h<=0)continue
j+=C.av4[i].b
g=u+t*(0.24+i*0.14)
J.by(s.save())
s.translate((1-h)*30,0)
f=A.cq.j(h)
$.W()
e=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
e.r=f.gp(0)
d=e.H()
s.drawRect(B.c0(new B.a9(q,g,o,g+p)),d)
d.delete()
D.rI(a6,"$"+C.av4[i].b,new B.u(n,g+m),l,A.aB.j(h),9999)
s.restore()}p=u+t*0.7
a6.bA(new B.u(q,p),new B.u(x-r,p),D.FY(A.dp,1.4))
D.rI(a6,"TOTAL  $"+j,new B.u(w.gbQ().a,u+t*0.78),t*0.075,A.aB,v*0.8)
x=a8>2.8
if(x){r=a8-2.8
i=A.k.D(r/0.3,0,1)
J.by(s.save())
s.translate(w.gbQ().a,u+t*0.55)
a6.iZ(0,-0.3)
a6.bX(0,2-A.ev.aw(0,i))
a6.aD(B.bA(B.cm(A.J,t*0.17,v*0.6),A.hc),D.FY(A.cZ.j(i),3.5))
D.rI(a6,"PAID",A.J,t*0.11,A.cZ.j(i),9999)
s.restore()
for(v=r*0.7,a5-=a3*0.05,u=a3*0.7,t=a3*0.03,s=a8*8,a0=0;a0<6;++a0){a1=A.k.F(v+a0*0.17,1)
D.fV1(a6,new B.u(a5+Math.sin(a0*2)*a3*0.1,u-a1*a3*0.5),t,s+a0)}}a5=x?(Math.sin(a8*6)+1)/2:0
D.Cy(a6,new B.u(a2*0.2,a4),a3*0.66,a8,!0,0,1,A.bA,A.L3,x,a5)},
hLJ(d,e,a0){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=e.a,h=e.b,g=h*0.94,f=A.e3.j(0.7)
$.W()
x=B.M()
x.r=f.gp(0)
d.aZ(new B.a9(0,g,0+i,g+(h-g)),x)
x=i*0.6
f=h*0.62
w=new B.u(x,f)
v=Math.min(i*0.3,h*0.6)
u=B.bA(B.cm(w,v*1.3,v*2.1),A.hc)
t=B.M()
t.r=A.hu.gp(0)
d.aD(u,t)
t=v*0.5
u=v*1.2
s=B.cm(w.aC(0,new B.u(t,0)),u,v)
r=B.M()
r.r=A.h2.gp(0)
d.aZ(s,r)
t=B.cm(w.ad(0,new B.u(t,0)),u,v)
r=B.M()
r.r=A.h2.gp(0)
d.aZ(t,r)
r=A.k.F(a0,2)
t=d.a
J.by(t.save())
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
d.bA(new B.u(x,f),new B.u(x,s),D.FY(A.fw,h*0.025))
for(f=q-0.4,u=h*0.05,r=h*0.04,p=0;p<5;++p){o=A.k.D(f-p*0.1,0,1)
n=p*1.3
m=Math.cos(n)
l=Math.sin(n)
k=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
k.r=A.bo.gp(0)
j=k.H()
t.drawCircle(x+m*h*0.14*o,s+l*h*0.08*o,u*o,j)
j.delete()
if(o>0.6)D.rI(d,"\u2665",new B.u(x+Math.cos(n)*h*0.14,s+Math.sin(n)*h*0.08),r,A.bA,9999)}f=a0*4
x=Math.sin(f)
D.Cy(d,new B.u(i*0.2,g),h*0.66,a0,!1,Math.abs(Math.sin(f))*h*0.01,2,A.aE,C.tl,!1,(x+1)/2)},
hVq(d,e,f){var x,w,v,u,t,s,r,q,p,o,n=e.a,m=e.b,l=m*0.94,k=A.w.j(0.2)
$.W()
x=B.M()
x.r=k.gp(0)
d.aZ(new B.a9(0,l,0+n,l+(m-l)),x)
w=A.k.bt(A.k.D(f/5.5,0,1)*9)+1
for(v=n*0.62,k=l-m*0.03,x=m*0.26,u=m*0.07,t=d.a,s=0;s<w;++s){r=k-s*m*0.055
q=B.cm(new B.u(v,r),u,x)
p=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
p.r=A.cd.gp(0)
o=p.H()
t.drawOval(B.c0(q),o)
o.delete()
r=B.cm(new B.u(v,r),u,x)
q=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
q.b=A.ae
q.c=2
q.r=A.pr.gp(0)
q.d=A.bO
o=q.H()
t.drawOval(B.c0(r),o)
o.delete()}k=m*0.1
D.fV1(d,new B.u(v,k+A.k.F(f*1.6,1)*(l-u-w*m*0.055-k)),m*0.05,f*8)
k=m*0.08
D.rI(d,"$"+w*25,new B.u(v,k),k,A.dO,9999)
k=f*5
u=Math.sin(k)
D.Cy(d,new B.u(n*0.25,l),m*0.66,f,!1,Math.abs(Math.sin(k))*m*0.012,1,A.cz,C.tl,!0,(u+1)/2)},
hO1(d,a0,a1){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=a0.a,g=a0.b,f=g*0.94,e=A.w.j(0.2)
$.W()
x=B.M()
x.r=e.gp(0)
d.aZ(new B.a9(0,f,0+h,f+(g-f)),x)
for(e=d.a,x=g*0.012,w=g*0.55,v=a1*4,u=a1*2,t=g*0.15,s=g*0.03,r=0;r<3;r=n){q=Math.sin(v+r*1.7)
J.by(e.save())
e.translate(h*(0.5+0.14*r),w-Math.abs(q)*g*0.3)
e.rotate((u+r)*180/3.141592653589793,0,0)
q=B.bA(B.cm(A.J,t,t),new B.aT(s,s))
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
D.rI(d,"\u2605",new B.u(h*(0.45+r*0.1),w-i*g*0.2),v,A.dO.j(1-i),9999)}e=h*0.22
w=a1*6
v=Math.sin(w)
D.Cy(d,new B.u(e,f),g*0.66,a1,!0,Math.abs(Math.sin(w))*g*0.015,0,A.ci,C.tl,!0,(v+1)/2)
v=f-g*0.28
s=B.bA(B.cm(new B.u(e,v),g*0.07,g*0.16),new B.aT(s,s))
$.W()
w=B.M()
w.r=A.cE.gp(0)
d.aD(s,w)
w=B.M()
w.r=A.ay.gp(0)
d.ae(new B.u(e+g*0.05,v),x,w)},
hPm(d,e,a0){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=e.a,j=e.b,i=j*0.94,h=A.w.j(0.2),g=$.W(),f=B.M()
f.r=h.gp(0)
d.aZ(new B.a9(0,i,0+k,i+(j-i)),f)
f=k*0.42
h=j*0.18
x=j*0.08
w=B.bA(new B.a9(f,h,f+k*0.5,h+j*0.5),new B.aT(x,x))
v=new B.aO(g.r,A.ap,null,null,B.a([],y.v))
v.E(new B.iU(w))
d.aO(v,D.FY(A.c.j(0.5),4))
u=new B.S5(new B.vs(B.wX(v),!1,B.a([],y.L))).gL(0)
for(h=a0*0.18,g=u.a,x=u.b,t=g.e,s=j*0.016,r=d.a,q=0;q<10;++q){p=A.k.F(h+q/10,1)
g.jn()
o=t[x].b
o===$&&B.c()
o=o.a.length()
g.jn()
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
x.z=A.yS
d.ae(l,j*0.2,x)}g=j*0.07
x=m?A.ow:A.bJ
t=B.M()
t.r=x.gp(0)
d.ae(l,g,t)
h=B.bA(B.cm(new B.u(f,h),j*0.2,j*0.1),A.ii)
t=B.M()
t.r=A.cZ.gp(0)
d.aD(h,t)
D.rI(d,"+",new B.u(f,j*0.36),g,A.c,9999)
h=m?(Math.sin(a0*6)+1)/2:0
f=m?Math.abs(Math.sin(a0*6))*j*0.012:0
D.Cy(d,new B.u(k*0.2,i),j*0.68,a0,!1,f,0,A.bW,C.tl,m,h)
if(m)D.aNL(d,new B.u(k*0.24,j*0.16),"It works!",g,(a0-1.5)/0.4,A.c)},
hOB(d,a0,a1){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=a0.a,g=a0.b,f=g*0.94,e=A.w.j(0.2)
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
m.delete()}D.aNL(d,new B.u(h*0.7,g*0.38),"Tap Civic Registry!",e,v,A.et)
D.Cy(d,new B.u(h*0.2,f),g*0.62,a1,!1,0,2,A.ay,C.tl,a1<1,0)
l=h*0.78
k=f-g*0.28
e=g*0.04
x=B.bA(B.cm(new B.u(l,k),g*0.22,x),new B.aT(e,e))
u=B.M()
u.r=A.aL.gp(0)
d.aD(x,u)
u=g*0.18
x=k-u
e=B.bA(B.cm(new B.u(l,x),g*0.14,u),new B.aT(e,e))
u=B.M()
u.r=A.cq.gp(0)
d.aD(e,u)
for(e=d.a,u=a1*1.1,t=g*0.02,j=0;j<2;++j){i=C.oS[j]
s=A.k.F(u,1)>0.08?A.b8:A.fc
r=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
r.r=s.gp(0)
m=r.H()
e.drawCircle(l+i*g*0.04,x,t,m)
m.delete()}d.bA(new B.u(l,k-g*0.25),new B.u(l,k-g*0.3),D.FY(A.ad,3))
e=B.M()
e.r=A.ay.gp(0)
d.ae(new B.u(l,k-g*0.31),g*0.015,e)},
fmR:function fmR(d,e,f){this.a=d
this.b=e
this.c=f},
aN9(d,e,f,g,h,i,j,k){var x=new D.feN(e,h,i,k),w=x.$1(g),v=w.b.c
if(v>j&&v>0)w=x.$1(Math.max(2,g*j/v))
x=w.b
v=x.c
x=x.a.c
w.a5(d,f.aC(0,new B.u(v/2,x.gbc(x)/2)))},
KR(d,e,f,a0){var x,w,v,u,t,s,r,q,p,o,n,m=A.o.F(a0==null?A.k.bt(f/6):a0,11),l=A.k.F(f,6),k=C.d0g[m],j=e.a,i=e.b,h=0+j,g=0+i
$.W()
x=B.M()
x.saq(new B.a8(A.ax,A.aC,A.x,B.a([k.c,k.d],y.O),null,null).av(0,new B.a9(0,0,h,g)))
d.aZ(new B.a9(0,0,h,g),x)
w=i*(j>=i?0.7:0.6)
g=d.a
J.by(g.save())
g.clipRect(B.c0(new B.a9(0,0,h,0+w)),$.q7()[1],!0)
D.hWl(d,new B.at(j,w),m,l)
g.restore()
v=i-w
x=A.w.j(0.3)
u=B.M()
u.r=x.gp(0)
d.aZ(new B.a9(0,w,h,w+v),u)
t=A.ct.aw(0,A.k.D((l-0.2)/0.5,0,1))
J.by(g.save())
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
x=B.bA(B.cm(new B.u(h,g),i*0.065,i*0.1),new B.aT(x,x))
g=B.M()
g.b=A.ae
g.c=1
g.r=A.ad.gp(0)
g.d=A.bO
d.aD(x,g)},
aPq(d,e,f,g){var x,w=d.a
J.by(w.save())
w.clipRect(B.c0(new B.a9(0,0,0+e.a,0+e.b)),$.q7()[1],!0)
x=C.k_[A.o.F(f,8)].e
if(x===-2)D.hLS(d,e,g)
else if(x===-1)D.KR(d,e,g,null)
else D.KR(d,e,g,x)
w.restore()},
hLS(d,a0,a1){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=a0.a,h=a0.b,g=new B.S(Date.now(),0,!1),f=0+i,e=0+h
$.W()
x=B.M()
x.saq(C.bSE.av(0,new B.a9(0,0,f,e)))
d.aZ(new B.a9(0,0,f,e),x)
x=B.M()
x.r=A.bI.gp(0)
d.aZ(new B.a9(0,0,f,0+h*0.15),x)
D.aN9(d,A.oQ[B.bG(g)-1]+" "+B.bz(g),new B.u(i/2,h*0.075),h*0.08,A.c,!0,i*0.9,0)
w=i/7
for(f=h*0.21,e=h*0.05,v=0;v<7;++v)D.aN9(d,C.ddT[v],new B.u(w*(v+0.5),f),e,A.az,!0,9999,0)
u=B.c1(B.bz(g),B.bG(g),1,0,0,0,0,0)
t=B.bQ(B.c1(B.bz(g),B.bG(g)+1,0,0,0,0,0,0))
s=B.mv(u)-1
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
feN:function feN(d,e,f,g){var _=this
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
fZw(d,e,f,g,h,a0){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i=d.a
J.by(i.save())
x=e.a
w=e.b
v=0+x
u=0+w
i.clipRect(B.c0(new B.a9(0,0,v,u)),$.q7()[1],!0)
if(h<3){$.W()
t=B.M()
t.r=C.b6o.gp(0)
d.aZ(new B.a9(0,0,v,u),t)
if(h<0.5)u=h/0.5
else u=h>2.4?(3-h)/0.6:1
s=A.k.D(u,0,1)
u=e.e9(A.J)
t=e.gee()
r=B.M()
r.saq(new B.bS(A.A,0.5,A.x,j,0,B.a([A.aS.j(0.35*s),A.K],y.O),j,j).av(0,B.bT(e.e9(A.J),e.gee()*0.5)))
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
switch(p){case 0:D.hV0(d,e,g)
break
case 1:D.hMz(d,e,g)
break
case 2:D.hUk(d,e,g)
break
case 3:D.hRd(d,e,g)
break
case 4:D.hSs(d,e,g)
break
case 5:D.hUl(d,e,g)
break
case 6:D.hNS(d,e,g)
break
case 7:D.hV_(d,e,g)
break
case 8:D.hTe(d,e,g)
break
default:D.hO2(d,e,g)}t=x-w*0.34
r=w*0.04
o=w*0.03
n=B.bA(new B.a9(t,r,t+w*0.3,r+w*0.1),new B.aT(o,o))
$.W()
o=B.M()
o.r=A.w.j(0.55).gp(0)
d.aD(n,o)
D.G0(d,"NGMY",new B.u(n.a+w*0.025,n.b+w*0.012),w*0.07,A.c,A.bg,1,j)
o=w*0.86
t=B.M()
t.r=A.w.j(0.6).gp(0)
d.aZ(new B.a9(0,o,v,o+w*0.14),t)
D.G0(d,"CH "+(f+1)+"  \xb7  "+C.PG[p].a,new B.u(r,w*0.885),w*0.075,A.c,A.bg,0,x-w*0.08)
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
G0(d,e,f,g,h,i,j,k){var x=null,w=B.i1(x,x,1,x,B.dn(x,x,x,x,x,x,x,x,x,B.l(x,x,h,x,x,x,x,x,x,x,x,g,x,x,A.u,x,x,!0,x,j,x,x,x,x,x,x),e),i,A.cg,x,A.eh,A.ce),v=k==null
w.BE(v?9999:k)
w.a5(d,f.ad(0,new B.u(i===A.L&&!v?(k-w.b.c)/2:0,0)))},
hV0(d,e,f){var x,w,v,u,t,s,r,q,p,o,n,m=e.a,l=e.b,k=A.k.F(f,14),j=0+m,i=0+l
$.W()
x=B.M()
x.saq(C.anV.av(0,new B.a9(0,0,j,i)))
d.aZ(new B.a9(0,0,j,i),x)
x=B.M()
x.r=A.dO.gp(0)
d.ae(new B.u(m*0.85,l*0.18),l*0.08,x)
x=l*0.78
i=B.M()
i.r=A.Ai.gp(0)
d.aZ(new B.a9(0,x,j,x+l*0.22),i)
new D.fn2(d,f,l).$5(new B.u(m*0.5,l*0.8),1.5707963267948966,l*0.24,5,A.k.D(k/5,0,1)*1.4)
for(j=l*0.26,i=l*0.11,x=l*0.05,w=d.a,v=-l,u=v*0.1,v*=0.04,t=l*0.065,s=0;s<6;++s){r=A.k.D((k-(5+s*1.3))/0.5,0,1)
if(r<=0)continue
q=(s&1)===1?0.04:0
p=A.o.F(s,3)
o=A.mM.aw(0,r)
J.by(w.save())
w.translate(m*(0.2+0.12*s+q),l*(0.16+0.14*p))
w.scale(o,o)
q=B.bA(B.cm(A.J,i,j),new B.aT(x,x))
$.W()
p=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
p.r=A.c.gp(0)
n=p.H()
w.drawRRect(B.er(q),n)
n.delete()
q=B.bA(B.cm(A.J,i,j),new B.aT(x,x))
p=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
p.b=A.ae
p.c=2
p.r=A.bA.gp(0)
n=p.H()
w.drawRRect(B.er(q),n)
n.delete()
D.G0(d,"\u2665 "+C.cQ6[s],new B.u(u,v),t,A.t_,A.bg,0,null)
w.restore()}if(k>11.5)D.G0(d,"Family is everything",new B.u(0,l*0.62),l*0.09,A.hu,A.L,0,m)},
hMz(d,e,a0){var x,w,v,u,t,s,r,q,p,o,n,m,l=null,k=e.a,j=e.b,i=0+k,h=0+j,g=$.W(),f=B.M()
f.saq(C.bSR.av(0,new B.a9(0,0,i,h)))
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
if(t!=null)r.bx(t)
t=v.e
if(t!=null)t.a.delete()
v.e=null}t=new B.ap(k,j)
f.push(t)
f=v.f
if(f!=null)t.bx(f)
f=v.e
if(f!=null)f.a.delete()
v.e=null
f=$.W()
t=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
t.r=(g?A.jq:A.e3).gp(0)
q=t.H()
g=v.e
i.drawPath((g==null?v.e=new B.cF(v.gbL().a.snapshot()):g).a,q)
q.delete()}for(i=j*0.04,h=x*1.3,g=k+60,f=k*0.3,p=0,o=0;o<6;++o){u=A.k.F(o*90-h,g)-30
t=Math.sin(o*1.7+a0)
if(Math.abs(u-f)<12)++p
D.hUp(d,new B.u(u,j*(0.35+0.08*t)),i,A.dO)}n=Math.abs(Math.sin(a0*5))
m=new B.u(f,j*0.72-n*j*0.22)
i=B.cm(new B.u(f,j*0.82),j*0.025,j*0.14*(1-n*0.4))
$.W()
h=B.M()
h.r=A.dp.gp(0)
d.hN(i,h)
h=j*0.085
i=B.M()
i.saq(C.ec5.av(0,B.bT(m,h)))
d.ae(m,h,i)
i=B.M()
i.b=A.ae
i.c=2
i.r=A.pr.gp(0)
d.ae(m,h,i)
i=-j
D.G0(d,"$",m.ad(0,new B.u(i*0.03,i*0.045)),j*0.09,A.pr,A.bg,0,l)
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
hUp(d,e,f,g){var x,w,v,u,t,s,r,q=$.W(),p=B.a([],y.v),o=new B.aO(q.r,A.ap,null,null,p)
for(q=e.a,x=e.b,w=f*0.45,v=0;v<10;++v){u=-1.5707963267948966+v*3.141592653589793/5
t=(v&1)===0?f:w
s=q+Math.cos(u)*t
r=x+Math.sin(u)*t
if(v===0){s=new B.b5(s,r)
p.push(s)
r=o.f
if(r!=null)s.bx(r)
s=o.e
if(s!=null)s.a.delete()
o.e=null}else{s=new B.ap(s,r)
p.push(s)
r=o.f
if(r!=null)s.bx(r)
s=o.e
if(s!=null)s.a.delete()
o.e=null}}o.E(new B.bF())
$.W()
q=B.M()
q.r=g.gp(0)
d.aO(o,q)},
hUk(a1,a2,a3){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=a2.a,e=a2.b,d=$.W(),a0=B.M()
a0.r=C.bd8.gp(0)
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
s.saq(C.ec3.av(0,B.bT(new B.u(p,a0),t)))
a1.ae(new B.u(p,a0),t,s)
a0=B.cm(new B.u(p,a0),e*0.07,e*0.6)
s=B.M()
s.b=A.ae
s.c=3
s.r=A.bK.j(0.7).gp(0)
a1.hN(a0,s)
s=Math.sin(a3*2)
J.by(w.save())
w.translate(f*0.42,e*0.52+s*e*0.04)
a1.iZ(0,-0.25)
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
m.saq(C.bTw.av(0,new B.a9(t,r,t+e*0.08,r+l)))
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
i.saq(C.bTL.av(0,new B.a9(h,m,h+e*0.16,m+e*0.27)))
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
hRd(a1,a2,a3){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null,h=a2.a,g=a2.b,f=0+h,e=0+g,d=$.W(),a0=B.M()
a0.saq(C.bSy.av(0,new B.a9(0,0,f,e)))
a1.aZ(new B.a9(0,0,f,e),a0)
for(f=a1.a,e=g*0.85,a0=g*0.7,x=y.v,d=d.r,w=0;w<4;++w){v=h*(0.1+0.25*w)
u=B.a([],x)
t=new B.aO(d,A.ap,i,i,u)
u.push(new B.b5(v,g))
u.push(new B.cU(v+Math.sin(a3+w)*10,e,v+4,a0+w*6))
u=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
u.b=A.ae
u.c=5
u.r=A.cZ.gp(0)
s=u.H()
u=t.gbL().a.snapshot()
f.drawPath((t.e=new B.cF(u)).a,s)
s.delete()}e=A.k.F(a3*18,h*1.5)
J.by(f.save())
f.translate(e-h*0.25,g*0.35+Math.sin(a3)*6)
e=B.cm(A.J,g*0.22,g*0.5)
a0=B.M()
a0.r=A.bv.gp(0)
a1.hN(e,a0)
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
r=B.cm(new B.u(0,u),a0,g*0.34)
q=B.M()
q.r=A.aL.gp(0)
a1.hN(r,q)
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
J.by(f.save())
f.translate(l-20,g*(0.52+0.06*w)+k*6)
f.scale(m,1)
l=B.cm(A.J,p,a0)
k=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
j=A.o.F(w,4)
k.r=C.auK[j].gp(0)
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
l.r=C.auK[j].gp(0)
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
hSs(a7,a8,a9){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null,d=a8.a,a0=a8.b,a1=A.k.F(a9,12),a2=a1<7,a3=0+d,a4=0+a0,a5=$.W(),a6=B.M()
a6.saq(new B.a8(A.b0,A.b5,A.x,a2?C.d93:C.cXV,e,e).av(0,new B.a9(0,0,a3,a4)))
a7.aZ(new B.a9(0,0,a3,a4),a6)
a6=a0*0.74
x=B.M()
x.r=(a2?C.bhc:A.Ai).gp(0)
a7.aZ(new B.a9(0,a6,a3,a6+a0*0.26),x)
for(x=a7.a,w=a0*0.07,v=a0*0.06,u=a0*0.2,t=a0*0.1,s=a0*0.09,r=y.v,q=a9*2,a5=a5.r,p=0;p<4;++p){o=d*(0.08+0.24*p)
n=a0*(0.14+0.03*A.o.F(p,2))
m=a6-n
l=o+u
k=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
k.r=C.cKW[p].gp(0)
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
m.r=A.er.gp(0)
j=m.H()
m=i.gbL().a.snapshot()
x.drawPath((i.e=new B.cF(m)).a,j)
j.delete()
m=o+w
l=n*0.55
k=a6-l
i=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
i.r=(a2&&A.o.F(A.k.bt(q),2)===0?A.lD:A.fw).gp(0)
j=i.H()
x.drawRect(B.c0(new B.a9(m,k,m+v,k+l)),j)
j.delete()}if(a2){for(a6=a9*20,v=a9*260,u=a0*0.8,p=0;p<70;++p){o=A.k.F(p*37+a6,d)
h=A.k.F(p*53+v,u)
s=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
s.r=A.fb.gp(0)
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
t.r=A.lD.gp(0)
a7.aO(r,t)}}else{for(a3=d*0.5,a4=a0*0.035,a5=3.141592653589793*A.k.D((a1-7)/2,0,1)*57.29577951308232,p=0;p<6;++p){v=d*(0.9-p*0.07)
v=B.cm(new B.u(a3,a6),v,v)
u=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
u.b=A.ae
u.c=a4
u.r=C.dd1[p].j(0.9).gp(0)
j=u.H()
x.drawArc.apply(x,[B.c0(v),180,a5,!1,j])
j.delete()}a3=B.M()
a3.r=A.dO.gp(0)
a7.ae(new B.u(d*0.86,a0*0.16),a0*0.08,a3)}for(a3=d+120,p=0;p<3;++p){o=A.k.F(a9*(8+p*4)+p*120,a3)-60
for(a4=a0*(0.12+0.1*p),g=0;g<4;++g){f=C.cgc[g]
$.W()
a5=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
a5.r=(a2?A.bm:A.c.j(0.95)).gp(0)
j=a5.H()
x.drawCircle(o+f.a,a4+f.b,w,j)
j.delete()}}},
hUl(a1,a2,a3){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=a2.a,a0=a2.b
$.W()
x=B.M()
x.r=A.db.gp(0)
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
p=B.bA(new B.a9(s,r,s+d*0.72,r+a0*0.5),new B.aT(q,q))
o=new B.aO($.W().r,A.ap,null,null,B.a([],y.v))
o.E(new B.iU(p))
r=B.M()
r.b=A.ae
r.c=5
r.r=A.bv.gp(0)
a1.aO(o,r)
n=new B.S5(new B.vs(B.wX(o),!1,B.a([],y.L))).gL(0)
r=n.a
m=n.b
r.jn()
l=r.e
k=l[m].b
k===$&&B.c()
k=k.a.length()
r.jn()
j=l[m].b
j===$&&B.c()
i=A.k.F(a3*k/5,j.a.length())
for(h=0;h<10;++h){r.jn()
k=l[m].b
k===$&&B.c()
k=A.k.F(i-h*9,k.a.length())
r.jn()
g=l[m].Mr(k).a
k=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
k.r=A.dO.j(1-h*0.09).gp(0)
k.z=L.QM
u=k.H()
x.drawCircle(g.a,g.b,6-h*0.5,u)
u.delete()}x=a0*0.45
r=B.bA(B.cm(new B.u(s,x),a0*0.22,a0*0.12),A.ii)
m=B.M()
m.r=A.cZ.gp(0)
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
D.G0(a1,"Electricity needs a full loop!",new B.u(0,a0*0.74),a0*0.075,A.hh,A.L,0,d)},
hNS(a4,a5,a6){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=a5.a,a1=a5.b,a2=0+a0,a3=0+a1
$.W()
x=B.M()
x.saq(C.bVH.av(0,new B.a9(0,0,a2,a3)))
a4.aZ(new B.a9(0,0,a2,a3),x)
x=a1*0.82
a3=B.M()
a3.r=A.db.gp(0)
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
l=C.atN[A.o.F(Math.abs(o),5)]
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
d.z=C.dl9
r=d.H()
a3.drawCircle(n+f*g,m+e*g+s,j,r)
r.delete()}}}},
hV_(a4,a5,a6){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=a5.a,d=a5.b,a0=0+e,a1=0+d,a2=$.W(),a3=B.M()
a3.saq(C.anV.av(0,new B.a9(0,0,a0,a1)))
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
if(t!=null)r.bx(t)
t=v.e
if(t!=null)t.a.delete()
v.e=null}t=new B.ap(e,d)
w.push(t)
w=v.f
if(w!=null)t.bx(w)
w=v.e
if(w!=null)w.a.delete()
v.e=null
w=$.W()
t=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
t.r=(a2?A.Ed:A.Ai).gp(0)
q=t.H()
a2=v.e
a1.drawPath((a2==null?v.e=new B.cF(v.gbL().a.snapshot()):a2).a,q)
q.delete()}a2=d*0.8
a3=B.M()
a3.r=A.bv.gp(0)
a4.aZ(new B.a9(0,a2,a0,a2+d*0.04),a3)
for(u=-A.k.F(a6*80,24),a0=d*0.84,a3=d*0.03,w=a0+a3;u<e;u+=24){t=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
t.r=A.fw.gp(0)
q=t.H()
a1.drawRect(B.c0(new B.a9(u,a0,u+8,w)),q)
q.delete()}p=Math.sin(a6*14)*1.2
o=e*0.12
for(a0=a2+p,a2=d*0.025,w=e*0.012,t=d*0.02,s=d*0.62+p,a3=s+a3,r=a3+d*0.06,n=s+d*0.18,m=0;m<4;++m){l=m===0
k=o+e*(l?0.16:0.15)
j=B.bA(new B.a9(o,s,k,n),new B.aT(t,t))
i=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
i.r=(l?A.bI:C.cXX[m-1]).gp(0)
q=i.H()
a1.drawRRect(B.er(j),q)
q.delete()
for(k-=o,j=k*0.18,h=0;h<3;++h){i=o+k*(0.12+h*0.28)
g=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
g.r=A.fb.gp(0)
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
hTe(a2,a3,a4){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=a3.a,d=a3.b,a0=0+e,a1=0+d
$.W()
x=B.M()
w=a4*2
v=B.aq(A.jq,A.fc,(Math.sin(w)+1)/2)
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
J.by(a0.save())
x=-d
a0.translate(e*0.5,d*0.55+Math.abs(p)*x*0.03)
a2.iZ(0,p*0.06)
u=d*0.26
s=d*0.3
r=d*0.04
o=B.bA(B.cm(A.J,s,u),new B.aT(r,r))
n=B.M()
n.saq(C.bW5.av(0,B.cm(A.J,s,u)))
a2.aD(o,n)
n=d*0.08
v=B.cm(new B.u(0,d*0.02),n,v)
o=B.M()
o.r=A.b8.j(0.7).gp(0)
a2.aZ(v,o)
o=B.bA(B.cm(new B.u(0,x*0.25),d*0.17,d*0.22),new B.aT(r,r))
v=B.M()
v.r=A.cq.gp(0)
a2.aD(o,v)
m=A.k.F(a4*1.3,1)>0.08
for(v=x*0.26,u=d*0.025,l=0;l<2;++l){k=C.cfQ[l]
s=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
s.r=(m?A.b8:A.fc).gp(0)
q=s.H()
a0.drawCircle(k*d,v,u,q)
q.delete()}v=B.M()
v.r=A.ad.gp(0)
v.c=3
a2.bA(new B.u(0,x*0.335),new B.u(0,x*0.38),v)
v=B.M()
v.r=A.ay.gp(0)
a2.ae(new B.u(0,x*0.39),d*0.015,v)
for(v=-p,u=d*0.035,s=d*0.15,o=d*0.28,x*=0.08,l=0;l<2;++l){j=C.oS[l]
J.by(a0.save())
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
hO2(a1,a2,a3){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=a2.a,e=a2.b,d=0+f,a0=0+e
$.W()
x=B.M()
x.saq(C.bUH.av(0,new B.a9(0,0,d,a0)))
a1.aZ(new B.a9(0,0,d,a0),x)
x=B.M()
x.r=A.dO.gp(0)
a1.ae(new B.u(f*0.12,e*0.16),e*0.07,x)
x=e*0.72
a0=B.M()
a0.r=A.Ed.gp(0)
a1.aZ(new B.a9(0,x,d,x+e*0.28),a0)
for(d=a3*0.25,a0=e*0.78,x=a1.a,w=e*0.016,v=a3*0.3,u=e*0.022,t=0;t<9;++t){s=f*(0.07+t*0.105)
r=A.k.D(A.k.F(d-t*0.12,3),0,1)
q=A.o.F(t,3)
p=s+Math.sin(a3+t)*3
q=a0-e*(0.12+0.05*q)*r
o=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
o.r=A.hg.gp(0)
o.c=3
n=o.H()
x.drawLine.apply(x,[s,a0,p,q,n])
n.delete()
if(r>0.7){for(m=0;m<6;++m){l=m*3.141592653589793/3+v
o=Math.cos(l)
k=Math.sin(l)
j=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
j.r=C.avL[A.o.F(t,5)].gp(0)
n=j.H()
x.drawCircle(p+o*e*0.028,q+k*e*0.028,u,n)
n.delete()}o=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
o.r=A.dO.gp(0)
n=o.H()
x.drawCircle(p,q,w,n)
n.delete()}}for(d=e*0.03,a0=e*0.05,w=e*0.06,v=a3*0.9,u=a3*1.3,q=a3*18,t=0;t<3;++t){s=f*(0.2+0.28*t)+Math.sin(v+t*2)*f*0.12
i=e*(0.3+0.1*t)+Math.cos(u+t)*e*0.06
h=Math.abs(Math.sin(q+t))
for(p=a0*h+2,o=(t+2)%5,g=0;g<2;++g){k=B.cm(new B.u(s+C.oS[g]*e*0.025*h,i),w,p)
j=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
j.r=C.avL[o].gp(0)
n=j.H()
x.drawOval(B.c0(k),n)
n.delete()}p=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
p.r=A.bi.gp(0)
p.c=2
n=p.H()
x.drawLine.apply(x,[s,i-d,s,i+d,n])
n.delete()}},
fMG(d,e,f,g,h,i){return B.a5(d,!1).c8(B.uz(null,!1,!0,!0,new D.fMH(e,h,g,i,f),A.eI,null,A.pF,new D.fMI(),y.S))},
xt:function xt(d,e){this.a=d
this.b=e},
fn2:function fn2(d,e,f){this.a=d
this.b=e
this.c=f},
fMH:function fMH(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fMI:function fMI(){},
VN:function VN(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aDM:function aDM(d,e){var _=this
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
eD3:function eD3(d){this.a=d},
eD2:function eD2(d){this.a=d},
eD1:function eD1(d,e){this.a=d
this.b=e},
eD4:function eD4(d,e){this.a=d
this.b=e},
eDd:function eDd(d){this.a=d},
eDc:function eDc(d){this.a=d},
eDb:function eDb(){},
eD6:function eD6(d){this.a=d},
eD7:function eD7(d){this.a=d},
eD8:function eD8(d){this.a=d},
eD9:function eD9(d){this.a=d},
eD5:function eD5(d){this.a=d},
eDa:function eDa(d){this.a=d},
eD0:function eD0(d){this.a=d},
eD_:function eD_(d){this.a=d},
btI:function btI(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.a=h},
aLB:function aLB(){},
fZS(d){var x
A:{if("lgtv"===d){x="lg"
break A}if("sonytv"===d){x="sony"
break A}if("appletv"===d){x="apple"
break A}if("bangtv"===d){x="bo"
break A}x="samsung"
break A}return x},
i7C(d){var x,w=D.fZS(d)
A:{if("lg"===w){x=A.hf
break A}if("sony"===w){x=A.dA
break A}if("apple"===w){x=A.bS
break A}if("bo"===w){x=C.t5
break A}x=A.aS
break A}return x},
ara:function ara(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bjU:function bjU(){this.d=0
this.c=this.a=null},
eCY:function eCY(d,e){this.a=d
this.b=e},
eCZ:function eCZ(d,e){this.a=d
this.b=e},
eCV:function eCV(){},
eCU:function eCU(d){this.a=d},
eCW:function eCW(d){this.a=d},
eCX:function eCX(d){this.a=d},
eCS:function eCS(d){this.a=d},
eCT:function eCT(d,e){this.a=d
this.b=e},
hDx(b3,b4,b5,b6,b7){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9=A.o.an(22050*b4,1000),b0=a9*2,b1=new DataView(new ArrayBuffer(44+b0)),b2=new D.ces(b1)
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
switch(b7){case"piano":s=C.cRn
r=C.cWt
w=3.4
break
case"organ":s=C.cVo
r=C.d97
v=0.02
u=!0
break
case"bell":s=C.cNb
r=C.cM3
w=2.4
break
case"pluck":s=C.cRm
r=C.cxZ
w=7
break
case"synth":s=C.d9Z
r=C.dbD
v=0.012
u=!0
break
case"flute":s=C.dfJ
r=C.c8A
v=0.07
u=!0
t=0.035
break
default:s=C.aok
r=C.aok}b0=s.length
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
dF(d,e,f,g,h,i){return D.hDy(d,e,f,g,h,i)},
hDy(d,e,f,g,h,i){var x=0,w=B.j(y.H),v=1,u=[],t,s,r,q,p,o
var $async$dF=B.e(function(j,k){if(j===1){u.push(k)
x=v}for(;;)switch(x){case 0:v=3
t=""+A.k.V(d)+"|"+f+"|"+i+"|"+B.t(g)+"|"+e
s=$.hDw.cg(0,t,new D.ceu(d,f,i,g,e))
if($.cer.length<12){q=B.ahX()
q.MB(A.aLJ)
$.cer.push(q)}q=$.h84
$.h84=q+1
r=$.cer[A.o.F(q,$.cer.length)]
x=6
return B.b(J.hqN(r,new B.a2D(s,null),h),$async$dF)
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
ces:function ces(d){this.a=d},
ceu:function ceu(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h}},C,M,N
J=c[1]
B=c[0]
A=c[2]
G=c[113]
E=c[117]
H=c[120]
I=c[171]
K=c[92]
F=c[108]
L=c[93]
D=a.updateHolder(c[26],D)
C=c[94]
M=c[104]
N=c[230]
D.wd.prototype={}
D.vG.prototype={}
D.xt.prototype={}
D.VN.prototype={
R(){return new D.aDM(null,null)}}
D.aDM.prototype={
gade(){var x,w=this,v=w.d
if(v===$){x=B.bj(null,A.nT,null,1,null,w)
x.cs(0)
w.d!==$&&B.bL()
w.d=x
v=x}return v},
gD3(){var x=this.e
return x===$?this.e=this.a.e:x},
a_(){var x=this
x.a1()
x.w=B.cM(x.a.r,x.gaY1())
x.aUb()
D.dF(520,"",80,0,0.25,"tri")},
aUb(){var x=this.z
if(x!=null)x.a7(0)
this.z=B.cM(A.jU,new D.eD3(this))},
c55(){var x=this.c
if(x!=null&&B.a5(x,!1).pv()){x=this.c
x.toString
B.a5(x,!1).O(this.gD3())}},
aia(){var x=this,w=x.w
if(w!=null)w.a7(0)
x.w=null
x.y=!0
x.aUb()},
aw3(d){this.m(new D.eD1(this,d))
D.dF(900,"",40,0,0.3,"noise")},
aZM(d){this.m(new D.eD4(this,d))
D.dF(700,"",60,0,0.3,"tri")},
q(){var x=this,w=x.w
if(w!=null)w.a7(0)
w=x.z
if(w!=null)w.a7(0)
x.gade().q()
x.buG()},
B(d){var x,w,v,u,t=this,s=null,r=B.m(10),q=B.I(t.gc56(),A.q,6),p=B.a([new B.ac(0,A.G,D.i7C(t.a.d).j(0.25),A.J,40)],y.V),o=B.m(4),n=y.p,m=B.a([B.c6(t.gade(),new D.eDc(t),s)],n)
if(t.r)m.push(t.bA7())
r=B.av(new B.fG(1.7777777777777777,B.p(s,B.bw(o,new B.an(A.W,s,A.b_,A.r,m,s),A.aq),A.f,s,s,new B.o(s,s,q,r,p,s,A.n),s,s,s,s,s,s,s,s),s),s,s,s)
q=t.y
p=q?1:0
o=B.nw(s,A.aX,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s)
o=B.aH(s,s,s,s,B.X(A.cB,A.c,s,s,s,s),s,s,s,t.gaY1(),s,s,s,o,"Back to the board",s)
m=B.m(20)
x=t.f
w=t.a
o=B.A(B.a([o,A.b6,B.p(s,B.d(x>=0?w.c+" \xb7 "+C.k_[x].a:w.c+" \xb7 CH "+(t.gD3()+1),s,s,s,s,s,s,M.zs,s,s,s),A.f,s,s,new B.o(A.aX,s,s,m,s,s,A.n),s,s,s,s,A.mm,s,s,s)],n),A.m,s,A.e,A.j,0,s,s)
m=t.clV()
x=A.w.j(0.65)
w=B.m(18)
v=t.f
v=B.d(v>=0?C.k_[v].a:C.PG[t.gD3()].a,s,s,s,s,s,s,A.i5,A.L,s,s)
u=t.f
return B.c8(s,A.w,B.bn(!0,B.aE(A.c4,new B.an(A.W,s,A.b_,A.r,B.a([r,B.CT(B.e1(B.v(B.a([new B.C(C.bpn,o,s),A.an,m,A.b6,B.p(s,B.v(B.a([v,B.d(u>=0?C.k_[u].c:C.PG[t.gD3()].b,s,s,s,s,s,s,K.a7a,A.L,s,s)],n),A.m,s,A.e,A.Q,0,A.p),A.f,s,s,new B.o(x,s,s,w,s,s,A.n),s,s,s,A.bj,A.bT,s,s,s)],n),A.m,s,A.e,A.j,0,A.p),!q,s),A.bc,A.ia,p)],n),s),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new D.eDd(t),s,s,s,s,s,s,!1,A.a8),!0,!1,A.af,!0,!0),s,!1,!1,s,s)},
clV(){var x=this,w=null,v=new D.eDb(),u=A.w.j(0.72),t=B.m(22),s=B.I(A.aS.j(0.5),A.q,1)
return B.p(w,B.A(B.a([v.$3(A.ya,"CH \u2212",new D.eD6(x)),v.$3(A.hy,"CH +",new D.eD7(x)),v.$5$color$on(A.FV,"TV",new D.eD8(x),A.aS,x.f<0),v.$5$color$on(A.xV,"APPS",new D.eD9(x),A.bu,x.r),v.$5$color$on(A.Br,"ADS",new D.eDa(x),A.bV,x.f===0)],y.p),A.m,w,A.e,A.Q,0,w,w),A.f,w,w,new B.o(u,w,s,t,w,w,A.n),w,w,w,w,A.YC,w,w,w)},
bA7(){return new D.ara(this.a.d,this.gcaI(),new D.eD0(this),null)},
gc56(){var x,w=D.fZS(this.a.d)
A:{if("apple"===w){x=A.dA
break A}if("bo"===w){x=C.E3
break A}if("sony"===w){x=C.b6l
break A}if("lg"===w){x=A.e9
break A}x=A.cE
break A}return x}}
D.btI.prototype={
a5(d,e){var x=this
return D.fZw(d,e,x.b,x.d,x.e,x.c)},
ar(d){return!0}}
D.aLB.prototype={
q(){var x=this,w=x.a8$
if(w!=null)w.a3(0,x.gbv())
x.a8$=null
x.a2()},
aR(){this.aY()
this.aX()
this.bw()}}
D.ara.prototype={
R(){return new D.bjU()},
a4X(d,e){return this.d.$1(e)}}
D.bjU.prototype={
aY2(d){this.m(new D.eCY(this,d))
this.a.a4X(0,d)},
B(d){var x,w=this,v=D.fZS(w.a.c)
A:{if("lg"===v){x=w.bZ2()
break A}if("sony"===v){x=w.ctw()
break A}if("apple"===v){x=w.c57()
break A}if("bo"===v){x=w.bB_()
break A}x=w.cnY()
break A}return x},
gadf(){var x=new B.S(Date.now(),0,!1)
return A.a.aT(A.o.u(B.dj(x)),2,"0")+":"+A.a.aT(A.o.u(B.fY(x)),2,"0")},
aw4(d,e,f,g,h,i,j){var x,w,v=null,u=C.k_[d],t=this.d===d,s=u.d,r=B.aq(s,A.w,0.55)
r.toString
r=B.a([s,r],y.O)
s=B.m(h)
if(t)x=i
else x=A.K
x=B.I(x,A.q,t?2.5:0)
w=B.a([B.d(u.b,v,v,v,v,v,v,B.l(v,v,v,v,v,v,v,v,v,v,v,e,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],y.p)
if(g)w.push(new B.C(A.vc,B.d(u.a,v,1,A.a2,v,v,v,A.Ts,v,v,v),v))
return B.aE(v,B.p(v,B.v(w,A.m,v,A.bb,A.j,0,A.p),A.f,v,v,new B.o(v,v,x,s,v,new B.a8(A.ax,A.aC,A.x,r,v,v),A.n),v,f,v,v,v,v,v,j),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new D.eCZ(this,d),v,v,v,v,v,v,!1,A.a8)},
aY3(d,e,f,g,h,i){return this.aw4(d,e,f,!1,g,h,i)},
cnY(){var x,w,v,u,t,s,r=this,q=null,p=r.a.e,o=y.p,n=B.A(B.a([C.fhK,A.ab,C.faa,A.b6,C.bMK,A.ab,C.bIL,A.ab,B.d(r.gadf(),q,q,q,q,q,q,C.aPK,q,q,q)],o),A.m,q,A.e,A.j,0,q,q),m=C.k_[r.d],l=B.d(m.a,q,q,q,q,q,q,A.m1,q,q,q)
m=B.d(m.c,q,1,A.a2,q,q,q,C.f27,q,q,q)
x=A.c.j(0.08)
w=B.a([],o)
for(v=0;v<2;++v){u=new B.aT(8,8)
w.push(B.p(q,B.X(C.cfE[v],A.ad,q,q,q,17),A.f,q,q,new B.o(A.bF,q,q,new B.bp(u,u,u,u),q,q,A.n),q,34,q,A.LJ,q,q,q,34))}u=B.a([],o)
for(t=0;t<8;++t){s=r.d===t?1.12:1
u.push(new B.C(A.LJ,new B.yt(r.aw4(t,14,44,!0,8,A.aS,52),s,A.bc,A.fG,q,q),q))}w.push(B.E(B.cd(B.A(u,A.m,q,A.e,A.j,0,q,q),A.r,q,A.y,q,q,q,q,A.aO),1))
return B.aE(q,B.p(q,B.v(B.a([n,A.b6,new B.bI(A.a3,q,q,l,q),new B.bI(A.a3,q,q,m,q),A.an,B.p(q,B.A(w,A.m,q,A.e,A.j,0,q,q),A.f,q,q,new B.o(x,q,q,A.UW,q,q,A.n),q,q,q,q,A.Mb,q,q,q)],o),A.m,q,A.e,A.j,0,A.p),A.f,q,q,C.aZB,q,q,q,q,E.ago,q,q,q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,p,q,q,q,q,q,q,!1,A.a8)},
bZ2(){var x=null,w=this.a.e,v=y.p
return B.aE(x,B.p(x,B.v(B.a([B.A(B.a([B.p(x,C.fnJ,A.f,x,x,new B.o(A.hf,x,x,B.m(10),x,x,A.n),x,x,x,x,A.na,x,x,x),A.bp,C.fgI,A.b6,B.d(this.gadf(),x,x,x,x,x,x,A.D5,x,x,x)],v),A.m,x,A.e,A.j,0,x,x),A.b6,new B.a7(x,62,B.hH(x,new D.eCU(this),8,x,x,A.aO,new D.eCV(),!1),x)],v),A.F,x,A.e,A.j,0,A.p),A.f,x,x,C.aZM,x,x,x,x,N.LQ,x,x,x),A.y,!1,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,w,x,x,x,x,x,x,!1,A.a8)},
ctw(){var x,w,v,u,t=this,s=null,r=C.k_[t.d],q=t.a.e,p=y.p,o=B.a([B.p(s,C.eHQ,A.f,s,s,new B.o(A.dq,s,s,B.m(12),s,s,A.n),s,s,s,s,A.xF,s,s,s),A.ab],p)
for(x=0;x<3;++x){w=C.d6k[x]
v=w==="Apps"?A.c:A.az
o.push(new B.C(A.jd,new B.x(w,s,new B.G(!0,v,s,s,s,s,9.5,A.P,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s),s,s,s,s,s,s,s,s,s),s))}o.push(A.b6)
o.push(B.d(t.gadf(),s,s,s,s,s,s,C.f1v,s,s,s))
o=B.A(o,A.m,s,A.e,A.j,0,s,s)
v=r.d
u=B.aq(v,A.w,0.7)
u.toString
u=B.a([v,u],y.O)
v=B.m(10)
return B.aE(s,B.p(s,B.v(B.a([o,A.h_,B.E(B.A(B.a([B.E(B.p(s,B.v(B.a([B.d(r.b,s,s,s,s,s,s,A.uB,s,s,s),B.d(r.a,s,s,s,s,s,s,A.ns,s,s,s),B.d(r.c,s,2,A.a2,s,s,s,C.f7F,s,s,s),A.cS,B.aE(s,B.p(s,C.fdI,A.f,s,s,new B.o(A.c,s,s,B.m(10),s,s,A.n),s,s,s,s,A.xF,s,s,s),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new D.eCW(t),s,s,s,s,s,s,!1,A.a8)],p),A.F,s,A.lT,A.j,0,A.p),A.f,s,s,new B.o(s,s,s,v,s,new B.a8(A.a3,A.a7,A.x,u,s,s),A.n),s,s,s,s,A.co,s,s,s),5),A.ab,B.E(B.ie(!0,s,s,A.y,C.eNL,new D.eCX(t),8,A.af,s,A.ah,!1),6)],p),A.m,s,A.e,A.j,0,s,s),1)],p),A.F,s,A.e,A.j,0,A.p),A.f,C.bgJ,s,s,s,s,s,s,A.fI,s,s,s),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,q,s,s,s,s,s,s,!1,A.a8)},
c57(){var x,w,v,u,t=this,s=null,r=t.a.e,q=y.p,p=B.A(B.a([C.bNl,A.qd,C.ftv,A.b6,B.d(t.gadf(),s,s,s,s,s,s,A.D9,s,s,s)],q),A.m,s,A.e,A.j,0,s,s),o=B.a([],q)
for(x=0;x<8;++x){w=t.d===x
v=w?6:0
u=w?C.dbo:A.Q_
w=w?1.18:1
o.push(new B.C(A.eQ,B.di(s,new B.yt(t.aY3(x,20,44,12,A.c,44),w,A.bc,A.eE,s,s),s,s,A.bc,new B.o(s,s,s,s,u,s,A.n),A.eE,s,s,new B.Q(0,0,0,v),s,s,s,s),s))}return B.aE(s,B.p(s,B.v(B.a([p,A.b6,new B.a7(s,68,B.cd(B.A(o,A.dz,s,A.e,A.j,0,s,s),A.r,s,A.y,s,s,s,s,A.aO),s),A.at,B.d(C.k_[t.d].a,s,s,s,s,s,s,A.oh,s,s,s)],q),A.m,s,A.e,A.j,0,A.p),A.f,s,s,C.aZD,s,s,s,s,C.XW,s,s,s),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,r,s,s,s,s,s,s,!1,A.a8)},
bB_(){var x,w,v,u,t,s,r=this,q=null,p=r.a.e,o=C.k_[r.d],n=y.p
o=B.E(B.v(B.a([C.fdi,A.b6,B.d(o.b,q,q,q,q,q,q,A.uy,q,q,q),A.at,B.d(o.a,q,q,q,q,q,q,C.eV9,q,q,q),A.bB,B.d(o.c,q,q,q,q,q,q,C.f7Z,q,q,q),A.an,B.aE(q,B.p(q,C.fvz,A.f,q,q,C.b_7,q,q,q,q,C.bow,q,q,q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new D.eCS(r),q,q,q,q,q,q,!1,A.a8),A.b6],n),A.F,q,A.e,A.j,0,A.p),4)
x=B.p(q,q,A.f,C.beM,q,q,q,q,q,A.fU,q,q,q,0.6)
w=B.a([],n)
for(v=0;v<8;++v){u=C.k_[v]
t=r.d===v
s=t?C.t5:C.abL
t=t?12:10.5
w.push(B.aE(q,new B.C(A.xs,new B.x(u.a,q,new B.G(!0,s,q,"serif",q,q,t,A.jV,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q),q,q,q,q,q,q,q,q,q),q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new D.eCT(r,v),q,q,q,q,q,q,!1,A.a8))}return B.aE(q,B.p(q,B.A(B.a([o,x,B.E(B.cz(w,q,q,q,q,A.ah,!1),3)],n),A.m,q,A.e,A.j,0,q,q),A.f,C.bjX,q,q,q,q,q,q,A.Fb,q,q,q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,p,q,q,q,q,q,q,!1,A.a8)}}
var z=a.updateTypes(["~()","VN(Y,bq<N>,bq<N>)","~(H)"])
D.fmR.prototype={
$1(d){var x=null,w=B.i1(x,x,1,x,B.dn(x,x,x,x,x,x,x,x,x,B.l(x,x,this.b,x,x,x,x,x,x,x,x,d,x,x,A.u,x,x,!0,x,x,x,x,x,x,x,x),this.a),A.a4,A.cg,x,A.eh,A.ce)
w.eI()
return w},
$S:753}
D.feN.prototype={
$1(d){var x=this,w=null,v=x.c?A.u:A.a5
v=B.i1(w,w,1,w,B.dn(w,w,w,w,w,w,w,w,w,B.l(w,w,x.b,w,w,w,w,w,w,w,w,d,w,w,v,w,w,!0,w,x.d,w,w,w,w,w,w),x.a),A.a4,A.cg,w,A.eh,A.ce)
v.eI()
return v},
$S:753}
D.fn2.prototype={
$5(d,e,f,g,h){var x,w,v,u,t,s,r,q=this
if(g===0||h<=0)return
x=f*A.k.D(h,0,1)
w=d.ad(0,new B.u(Math.cos(e)*x,-Math.sin(e)*x))
v=q.a
$.W()
u=B.M()
u.r=A.fw.gp(0)
u.c=g*2.2
u.d=A.bO
v.bA(d,w,u)
if(h>0.95){t=Math.sin(q.b*1.6+g)*0.04
u=f*0.72
s=g-1
r=h*1.6-0.9
q.$5(w,e+0.5+t,u,s,r-(5-g)*0)
q.$5(w,e-0.5+t,u,s,r)}if(g===1&&h>0.5){u=B.M()
u.r=B.aq(A.cZ,A.b1,(Math.sin(q.b*2+w.a)+1)/2).gp(0)
v.ae(w,q.c*0.035,u)}},
$S:1935}
D.fMH.prototype={
$3(d,e,f){var x=this
return new D.VN(x.d,x.e,x.a,x.c,x.b,null)},
$C:"$3",
$R:3,
$S:z+1}
D.fMI.prototype={
$4(d,e,f,g){var x=y.t
return new B.cZ(e,!1,B.ik(A.A,g,null,new B.bf(B.cH(A.ct,e,null),new B.bo(0.85,1,x),x.k("bf<bJ.T>"))),null)},
$C:"$4",
$R:4,
$S:30}
D.eD3.prototype={
$0(){var x=this.a
if(x.c!=null&&!x.r)x.m(new D.eD2(x))},
$S:0}
D.eD2.prototype={
$0(){return this.a.y=!1},
$S:0}
D.eD1.prototype={
$0(){var x,w=this.a
w.f=-1
w.e=A.o.F(w.gD3()+this.b,10)
if(w.gD3()<0)w.e=w.gD3()+10
x=w.gade().y
x=x==null?null:A.o.an(x.a,1000)
w.x=x==null?0:x
w.aia()},
$S:0}
D.eD4.prototype={
$0(){var x=this.a
x.f=this.b
x.r=!1
x.aia()},
$S:0}
D.eDd.prototype={
$0(){var x=this.a
return x.m(x.gcyt())},
$S:0}
D.eDc.prototype={
$2(d,e){var x=null,w=this.a,v=w.gade().y,u=v==null?x:A.o.an(v.a,1000),t=(u==null?0:u)/1000,s=w.x===0&&w.a.f?t:99
return B.b3(x,x,x,new D.btI(w.gD3(),w.f,t,s,x),A.f1)},
$S:67}
D.eDb.prototype={
$5$color$on(d,e,f,g,h){var x=null,w=h?g.j(0.28):A.c.j(0.08),v=B.m(14),u=B.I(h?g:A.b3,A.q,1)
return B.aE(x,B.p(x,B.v(B.a([B.X(d,g,x,x,x,20),A.uw,B.d(e,x,x,x,x,x,x,B.l(x,x,g,x,x,x,x,x,x,x,x,9.5,x,x,A.H,x,x,!0,x,x,x,x,x,x,x,x),x,x,x)],y.p),A.m,x,A.e,A.Q,0,A.p),A.f,x,x,new B.o(w,x,u,v,x,x,A.n),x,x,x,A.jf,A.kM,x,x,56),A.y,!1,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,f,x,x,x,x,x,x,!1,A.a8)},
$3(d,e,f){return this.$5$color$on(d,e,f,A.c,!1)},
$4$color(d,e,f,g){return this.$5$color$on(d,e,f,g,!1)},
$S:1936}
D.eD6.prototype={
$0(){return this.a.aw3(-1)},
$S:0}
D.eD7.prototype={
$0(){return this.a.aw3(1)},
$S:0}
D.eD8.prototype={
$0(){return this.a.aw3(0)},
$S:0}
D.eD9.prototype={
$0(){var x=this.a
return x.m(new D.eD5(x))},
$S:0}
D.eD5.prototype={
$0(){var x=this.a
x.r=!x.r
x.aia()},
$S:0}
D.eDa.prototype={
$0(){return this.a.aZM(0)},
$S:0}
D.eD0.prototype={
$0(){var x=this.a
return x.m(new D.eD_(x))},
$S:0}
D.eD_.prototype={
$0(){return this.a.r=!1},
$S:0}
D.eCY.prototype={
$0(){return this.a.d=this.b},
$S:0}
D.eCZ.prototype={
$0(){return this.a.aY2(this.b)},
$S:0}
D.eCV.prototype={
$2(d,e){return A.bp},
$S:36}
D.eCU.prototype={
$2(d,e){var x=null,w=this.a,v=w.d===e?1.1:1
v=B.a([B.vi(w.aY3(e,18,46,6,A.c,80),A.bc,A.fG,v)],y.p)
if(w.d===e)v.push(new B.C(A.vc,B.d(C.k_[e].a,x,x,x,x,x,x,C.f6d,x,x,x),x))
return B.v(v,A.m,x,A.e,A.Q,0,A.p)},
$S:707}
D.eCW.prototype={
$0(){var x=this.a
return x.a.a4X(0,x.d)},
$S:0}
D.eCX.prototype={
$2(d,e){return this.a.aw4(e,15,1/0,!0,8,A.c,1/0)},
$S:40}
D.eCS.prototype={
$0(){var x=this.a
return x.a.a4X(0,x.d)},
$S:0}
D.eCT.prototype={
$0(){return this.a.aY2(this.b)},
$S:0}
D.ces.prototype={
$2(d,e){var x,w,v,u
for(x=e.length,w=this.a,v=w.$flags|0,u=0;u<x;++u){v&2&&B.aj(w,9)
w.setUint8(d+u,e.charCodeAt(u))}},
$S:458}
D.ceu.prototype={
$0(){var x=this
return D.hDx(x.a,x.b,x.c,x.d,x.e)},
$S:289};(function aliases(){var x=D.aLB.prototype
x.buG=x.q})();(function installTearOffs(){var x=a._instance_0u,w=a._instance_1u
var v
x(v=D.aDM.prototype,"gaY1","c55",0)
x(v,"gcyt","aia",0)
w(v,"gcaI","aZM",2)})();(function inheritance(){var x=a.mixinHard,w=a.inheritMany,v=a.inherit
w(B.hT,[D.fmR,D.feN,D.fn2,D.fMH,D.fMI,D.eDb])
w(B.aC,[D.wd,D.vG,D.xt])
w(B.ag,[D.VN,D.ara])
w(B.ah,[D.aLB,D.bjU])
v(D.aDM,D.aLB)
w(B.j6,[D.eD3,D.eD2,D.eD1,D.eD4,D.eDd,D.eD6,D.eD7,D.eD8,D.eD9,D.eD5,D.eDa,D.eD0,D.eD_,D.eCY,D.eCZ,D.eCW,D.eCS,D.eCT,D.ceu])
w(B.ki,[D.eDc,D.eCV,D.eCU,D.eCX,D.ces])
v(D.btI,B.mJ)
x(D.aLB,B.c9)})()
B.jW(b.typeUniverse,JSON.parse('{"VN":{"ag":[],"r":[]},"aDM":{"ah":["VN"]},"btI":{"aB":[]},"ara":{"ag":[],"r":[]},"bjU":{"ah":["ara"]},"MX":{"ag":[],"r":[]}}'))
var y=(function rtii(){var x=B.ax
return{L:x("O<a2t>"),V:x("O<ac>"),O:x("O<w>"),v:x("O<hn>"),s:x("O<n>"),p:x("O<r>"),n:x("O<N>"),t:x("bo<N>"),i:x("N"),S:x("H"),H:x("~")}})();(function constants(){var x=a.makeConstList
C.b8o=new B.w(1,0.0196078431372549,0.03137254901960784,0.058823529411764705,A.t)
C.bie=new B.w(1,0.043137254901960784,0.10196078431372549,0.2,A.t)
C.d3h=x([C.b8o,C.bie],y.O)
C.bVm=new B.a8(A.b0,A.b5,A.x,C.d3h,null,null)
C.aZB=new B.o(null,null,null,null,null,C.bVm,A.n)
C.bg9=new B.w(1,0.42745098039215684,0.47843137254901963,0.5764705882352941,A.t)
C.b6I=new B.w(1,0.16862745098039217,0.1803921568627451,0.26666666666666666,A.t)
C.b7K=new B.w(1,0.4823529411764706,0.29411764705882354,0.41568627450980394,A.t)
C.deh=x([C.bg9,C.b6I,C.b7K],y.O)
C.bTI=new B.a8(A.ax,A.aC,A.x,C.deh,null,null)
C.aZD=new B.o(null,null,null,null,null,C.bTI,A.n)
C.aVJ=new B.da(0.5,-0.6)
C.bjr=new B.w(1,0.22745098039215686,0.054901960784313725,0.10980392156862745,A.t)
C.cZP=x([C.bjr,A.e9],y.O)
C.eco=new B.bS(C.aVJ,1.3,A.x,null,0,C.cZP,null,null)
C.aZM=new B.o(null,null,null,null,null,C.eco,A.n)
C.t5=new B.w(1,0.8392156862745098,0.7176470588235294,0.4823529411764706,A.t)
C.aXR=new B.ay(C.t5,1,A.q,-1)
C.aY3=new B.bO(A.Y,A.Y,C.aXR,A.Y)
C.b_7=new B.o(null,null,C.aY3,null,null,null,A.n)
C.abj=new B.w(0.9490196078431372,0.06666666666666667,0.07450980392156863,0.09411764705882353,A.t)
C.b6l=new B.w(1,0.16470588235294117,0.16470588235294117,0.17647058823529413,A.t)
C.b6o=new B.w(1,0.00784313725490196,0.01568627450980392,0.03529411764705882,A.t)
C.abL=new B.w(1,0.6588235294117647,0.6235294117647059,0.5647058823529412,A.t)
C.E_=new B.w(1,0.12156862745098039,0.07058823529411765,0.03529411764705882,A.t)
C.E3=new B.w(1,0.7215686274509804,0.6980392156862745,0.6549019607843137,A.t)
C.b9O=new B.w(1,0.8784313725490196,0.6745098039215687,0.4117647058823529,A.t)
C.acH=new B.w(1,0.00784313725490196,0.011764705882352941,0.0392156862745098,A.t)
C.Ek=new B.w(1,0.06666666666666667,0.0784313725490196,0.09411764705882353,A.t)
C.bd8=new B.w(1,0.011764705882352941,0.023529411764705882,0.09019607843137255,A.t)
C.At=new B.w(1,0.09019607843137255,0.09019607843137255,0.10196078431372549,A.t)
C.KN=new B.w(1,0.054901960784313725,0.07058823529411765,0.09411764705882353,A.t)
C.beM=new B.w(1,0.2901960784313726,0.26666666666666666,0.23529411764705882,A.t)
C.ke=new B.w(1,0.09019607843137255,0.09019607843137255,0.10980392156862745,A.t)
C.bgJ=new B.w(1,0.08627450980392157,0.09411764705882353,0.10980392156862745,A.t)
C.bhc=new B.w(1,0.24705882352941178,0.3843137254901961,0.07058823529411765,A.t)
C.X0=new B.w(1,1,0.41568627450980394,0,A.t)
C.n0=new B.w(1,0.10588235294117647,0.10588235294117647,0.12156862745098039,A.t)
C.tl=new B.w(1,0.5529411764705883,0.3333333333333333,0.1411764705882353,A.t)
C.X5=new B.w(1,1,0.9529411764705882,0.6274509803921569,A.t)
C.bjX=new B.w(1,0.10196078431372549,0.09019607843137255,0.0784313725490196,A.t)
C.bow=new B.Q(0,0,0,1)
C.tw=new B.Q(0,0,7,0)
C.bpn=new B.Q(10,10,10,0)
C.XW=new B.Q(10,6,10,8)
C.agI=new B.Q(14,10,10,10)
C.ak9=new B.a0(62970,"MaterialIcons",!1)
C.al8=new B.a0(983316,"MaterialIcons",!1)
C.Nx=new B.a0(983617,"MaterialIcons",!1)
C.bIL=new B.ae(A.BB,13,A.ad,null,null,null)
C.bMK=new B.ae(A.fd,13,A.ad,null,null,null)
C.bEo=new B.a0(983768,"MaterialIcons",!1)
C.bNl=new B.ae(C.bEo,13,A.c,null,null,null)
C.cz5=x([A.aS,A.kg,A.qI],y.O)
C.bSy=new B.a8(A.b0,A.b5,A.x,C.cz5,null,null)
C.bSE=new B.a8(A.b0,A.b5,A.x,I.Pz,null,null)
C.cTx=x([A.f7,A.dP,A.cs],y.O)
C.bSR=new B.a8(A.b0,A.b5,A.x,C.cTx,null,null)
C.cRP=x([A.dO,A.ay],y.O)
C.bTw=new B.a8(A.b0,A.b5,A.x,C.cRP,null,null)
C.dds=x([A.bS,A.c,A.bJ],y.O)
C.bTL=new B.a8(A.a3,A.a7,A.x,C.dds,null,null)
C.de_=x([A.hh,A.h2],y.O)
C.anV=new B.a8(A.b0,A.b5,A.x,C.de_,null,null)
C.d5T=x([A.dv,A.ow],y.O)
C.bUH=new B.a8(A.b0,A.b5,A.x,C.d5T,null,null)
C.bVH=new B.a8(A.b0,A.b5,A.x,F.au_,null,null)
C.d1p=x([A.aL,A.ak],y.O)
C.bW5=new B.a8(A.b0,A.b5,A.x,C.d1p,null,null)
C.aok=x([1],y.n)
C.c8A=x([1,2,3],y.n)
C.arY=x([1,-1],y.n)
C.S6=new B.y(2,3)
C.S7=new B.y(3,4)
C.cfE=x([A.lM,A.xV],B.ax("O<a0>"))
C.cfQ=x([-0.05,0.05],y.n)
C.e1y=new B.u(26,-8)
C.e20=new B.u(52,0)
C.e1x=new B.u(26,8)
C.cgc=x([A.J,C.e1y,C.e20,C.e1x],B.ax("O<u>"))
C.ezm=new B.y("Jambo!","Hello!")
C.eud=new B.y("Asante","Thank you")
C.elB=new B.y("Karibu","Welcome")
C.enG=new B.y("Rafiki","Friend")
C.atI=x([C.ezm,C.eud,C.elB,C.enG],B.ax("O<+(n,n)>"))
C.atN=x([A.bV,A.aS,A.dO,A.b1,A.cs],y.O)
C.cxZ=x([1,2,3,4,5,6,7],y.n)
C.cKW=x([A.f3,A.bK,A.L2,A.es],y.O)
C.cM3=x([1,2.76,5.4,8.93,13.3],y.n)
C.auK=x([A.cs,A.cd,A.bV,A.b1],y.O)
C.cNb=x([1,0.6,0.38,0.22,0.12],y.n)
C.cQ6=x(["Mama","Baba","Bibi","Babu","Dada","Kaka"],y.s)
C.eiY=new B.y("Chairs",120)
C.ej0=new B.y("Cloth",80)
C.ejh=new B.y("Delivery",25)
C.av4=x([C.eiY,C.ej0,C.ejh],B.ax("O<+(n,H)>"))
C.cRm=x([1,0.7,0.45,0.28,0.16,0.1,0.06],y.n)
C.cRn=x([1,0.55,0.32,0.2,0.12,0.07],y.n)
C.dWN=new D.xt("NGMY Tree Story","A family grows, one branch at a time")
C.dWI=new D.xt("Coin Hero","A little coin saves up and wins the day")
C.dWQ=new D.xt("Space Voyage","The NGMY rocket explores the stars")
C.dWH=new D.xt("Ocean Friends","Fish, bubbles and a friendly whale")
C.dWJ=new D.xt("Rainy Village","Storm clouds, then a rainbow")
C.dWL=new D.xt("Spark Adventure","Follow a spark round a circuit")
C.dWK=new D.xt("Fireworks Night","Colour bursts over the city")
C.dWP=new D.xt("Little Train","A train rolls past the hills")
C.dWM=new D.xt("Robot Disco","A robot dances to the beat")
C.dWO=new D.xt("Garden Time","Flowers grow and butterflies fly")
C.PG=x([C.dWN,C.dWI,C.dWQ,C.dWH,C.dWJ,C.dWL,C.dWK,C.dWP,C.dWM,C.dWO],B.ax("O<xt>"))
C.cVo=x([1,0.6,0.45,0.3,0.22,0.15],y.n)
C.avL=x([A.bV,A.cd,A.ay,A.bu,A.cs],y.O)
C.cWt=x([1,2,3,4,5,6],y.n)
C.cXV=x([A.hh,A.ow],y.O)
C.cXX=x([A.bk,A.aH,A.cZ],y.O)
C.dno=new D.vG("NGMY Ads","\ud83d\udce2","Every NGMY promotion, as cartoons",A.bV,-1)
C.dnm=new D.vG("Civic Registry","\ud83e\udeaa","Enroll your family in your community",A.d6,0)
C.dnp=new D.vG("Jobs","\ud83d\udcbc","Find work and get hired",A.aH,1)
C.dnr=new D.vG("NGMY Store","\ud83d\udecd\ufe0f","African food and traditions",A.fx,2)
C.dns=new D.vG("Kiswahili","\ud83d\udde3\ufe0f","Learn Swahili and English",A.bW,3)
C.dnq=new D.vG("Doc Scanner","\ud83d\udcc4","Scan, save and share",A.cc,4)
C.dnn=new D.vG("Invoices","\ud83e\uddfe","Professional invoices",A.bA,5)
C.dnl=new D.vG("Calendar","\ud83d\udcc5","This month, today lit up",A.ay,-2)
C.k_=x([C.dno,C.dnm,C.dnp,C.dnr,C.dns,C.dnq,C.dnn,C.dnl],B.ax("O<vG>"))
C.fMI=new D.wd("NGMY Civic Registry","Enroll your family. Stay counted and helped together.",A.dr,A.aS)
C.fMQ=new D.wd("NGMY Jobs","Find work. Get hired. Get paid.",A.d8,A.aM)
C.fMO=new D.wd("NGMY Store","African food and traditions. Support our Congolese and African community.",A.jR,A.cd)
C.fMM=new D.wd("Kiswahili School","Learn Swahili and English, step by step.",A.d_,A.n_)
C.fML=new D.wd("Document Scanner","Scan, save and share your papers.",A.px,A.h1)
C.fMJ=new D.wd("Invoice Creator","Make professional invoices in minutes.",A.t_,A.mP)
C.fMG=new D.wd("Family Book and Tree","Write your family story. Grow your tree.",A.iR,A.Kf)
C.fMH=new D.wd("NGMY Wallet","Save, send and earn coins.",A.pr,A.dO)
C.fMK=new D.wd("Vault Games","Play, win and learn.",A.dS,A.b8)
C.fMP=new D.wd("Electronics Lab","Build real circuits and learn.",A.fc,A.b2)
C.fMN=new D.wd("NGMY Helper and Advisors","Friendly help, any time.",A.lC,A.cs)
C.d0g=x([C.fMI,C.fMQ,C.fMO,C.fMM,C.fML,C.fMJ,C.fMG,C.fMH,C.fMK,C.fMP,C.fMN],B.ax("O<wd>"))
C.zw=new B.G(!0,A.ad,null,null,null,null,12.5,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.d5U=x([A.dS,A.f7],y.O)
C.d6k=x(["For you","Apps","Library"],y.s)
C.awQ=x([A.bI,A.cd,A.cZ,A.aB],y.O)
C.oS=x([-1,1],y.n)
C.a2x=x([-24,24],y.n)
C.a2y=x([-5,5],y.n)
C.d93=x([A.aK,A.ak],y.O)
C.d97=x([1,2,3,4,6,8],y.n)
C.d9Z=x([1,0.5,0.33,0.25,0.2,0.16,0.14,0.12],y.n)
C.b10=new B.ac(0,A.G,A.aX,A.dk,14)
C.dbo=x([C.b10],y.V)
C.dbD=x([1,2,3,4,5,6,7,8],y.n)
C.dd1=x([A.ay,A.ci,A.cd,A.bo,A.d6,A.b7],y.O)
C.ddT=x(["M","T","W","T","F","S","S"],y.s)
C.df1=x([A.c,A.pk],y.O)
C.dfJ=x([1,0.18,0.06],y.n)
C.dZS={"SPARK PAINTER":0,"MANDALA MAKER":1,"TITLE ANIMATOR":2,"PALETTE LAB":3,"GRAVITY TOY":4,"ORBIT STUDIO":5,"SWARM STUDIO":6,"FIREWORK DESIGNER":7,"CHAIN BURST":8,"CIRCUIT LAB":9,"PERIODIC TABLE":10,"BODY EXPLORER":11,"SPIN THE WHEEL":12,"FOCUS TIMER":13,"MEMORY MATCH":14,"LUCKY POCKET":15,"ELECTRONICS LAB":16,"CONSTRUCTION LAB":17,"AI INVENTOR":18,"MAGNET LAB":19,"RADIO LAB":20,"POWER PLANT":21,"POWER GRID":22,"INTERNET JOURNEY":23,"ROBOT CODER":24,"BUG SMASHER":25,"ROCKET LANDER":26,"DATA SNAKE":27,"BINARY 2048":28,"SIGNAL BREAKER":29,"PASSWORD LAB":30,"WAVE LAB":31,"BUG HUNT":32,"MOLECULE MAKER":33,"DNA LAB":34,"ECOSYSTEM LAB":35,"BALANCE LAB":36,"GEAR LAB":37,"OPTICS LAB":38,"LASER MAZE":39,"LIGHT MIXER":40,"ATOM BUILDER":41,"CIPHER LAB":42,"PIXEL TV":43}
C.aD_=new B.bk(C.dZS,["sparkle","sparkle","whoosh","click","bounce","space","bubble","pop","zap","tech","lab","organic","click","tech","bubble","click","tech","tech","tech","tech","tech","tech","tech","tech","tech","pop","space","bubble","click","zap","click","tech","click","lab","organic","organic","click","tech","sparkle","zap","sparkle","lab","tech","tech"],B.ax("bk<n,n>"))
C.abq=new B.w(1,0.16862745098039217,0.1843137254901961,0.21176470588235294,A.t)
C.dl9=new B.hu(A.G,1.2)
C.cgg=x([A.f3,A.eN,A.kf],y.O)
C.ec3=new B.bS(G.pe,0.5,A.x,null,0,C.cgg,null,null)
C.cvZ=x([A.lD,A.nI],y.O)
C.ec5=new B.bS(F.a97,0.5,A.x,null,0,C.cvZ,null,null)
C.bNQ=new B.ae(A.fd,11,A.ad,null,null,null)
C.f4e=new B.G(!0,A.aR,null,null,null,null,9,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.fqz=new B.x("Search",null,C.f4e,null,null,null,null,null,null,null,null,null)
C.cAh=x([C.bNQ,A.qd,C.fqz],y.p)
C.eHQ=new B.cn(A.aO,A.e,A.j,A.m,null,A.p,null,0,C.cAh,null)
C.eNL=new B.hK(3,5,5,1.35,null)
C.biM=new B.w(1,0.9450980392156862,0.9098039215686274,0.8470588235294118,A.t)
C.eV9=new B.G(!0,C.biM,null,"serif",null,null,15,A.jV,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.f1v=new B.G(!0,A.ad,null,null,null,null,9.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.f27=new B.G(!0,A.aR,null,null,null,null,9.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.To=new B.G(!0,A.ad,null,null,null,null,12.5,null,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.aPK=new B.G(!0,A.ad,null,null,null,null,10,A.P,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.f6d=new B.G(!0,A.c,null,null,null,null,8.5,A.P,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.f7F=new B.G(!0,A.ad,null,null,null,null,8.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.f7Z=new B.G(!0,C.abL,null,null,null,null,8.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.f__=new B.G(!0,A.az,null,null,null,null,9.5,A.P,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.faa=new B.x("NGMY Apps",null,C.f__,null,null,null,null,null,null,null,null,null)
C.a6V=new B.G(!0,A.az,null,null,null,null,12.5,null,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.eWL=new B.G(!0,C.t5,null,null,null,null,8,A.a5,null,3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.fdi=new B.x("BANG & OLUFSEN",null,C.eWL,null,null,null,null,null,null,null,null,null)
C.f1f=new B.G(!0,A.w,null,null,null,null,9,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.fdI=new B.x("Open",null,C.f1f,null,null,null,null,null,null,null,null,null)
C.fgI=new B.x("Home",null,C.aPK,null,null,null,null,null,null,null,null,null)
C.fhK=new B.x("SAMSUNG",null,A.aPs,null,null,null,null,null,null,null,null,null)
C.fnJ=new B.x("LG",null,A.wg,null,null,null,null,null,null,null,null,null)
C.ftv=new B.x("tv",null,A.qj,null,null,null,null,null,null,null,null,null)
C.eZU=new B.G(!0,C.t5,null,null,null,null,8.5,null,null,2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.fvz=new B.x("OPEN",null,C.eZU,null,null,null,null,null,null,null,null,null)})();(function staticFields(){$.hDw=B.T(B.ax("n"),B.ax("dD"))
$.cer=B.a([],B.ax("O<ahW>"))
$.h84=0
$.ar7="music"})()};
(a=>{a["tJltzstXtq3RDF+fr3UlqiM6f1A="]=a.current})($__dart_deferred_initializers__);