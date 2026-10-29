((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,A,G,E,H,I,K,F,L,D={
G5(d,e){var x
$.W()
x=B.N()
x.b=A.ae
x.c=e
x.r=d.gp(0)
x.d=A.bQ
return x},
rP(d,e,f,g,h,i){var x=new D.fp6(e,h,!0),w=x.$1(g),v=w.b.c
if(v>i&&v>0)w=x.$1(Math.max(2,g*i/v))
x=w.b
v=x.c
x=x.a.c
w.a4(d,f.aC(0,new B.u(v/2,x.gbf(x)/2)))},
CE(a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=a6.a
J.by(a5.save())
a5.translate(a7.a,a7.b-b1)
x=B.cg(new B.u(0,b1+a8*0.005),a8*0.06,a8*0.45)
w=A.w.j(0.22)
$.W()
v=B.N()
v.r=w.gp(0)
a6.hS(x,v)
for(x=a8*0.05,w=-a8,v=w*0.24,u=a8*0.1,t=v+a8*0.2,s=a8*0.04,r=a8*0.065,q=w*0.05,p=a8*0.14,o=q+x,n=a8*0.025,m=0;m<2;++m){l=C.oa[m]*a8*0.075
k=l-x
k=B.bx(new B.a9(k,v,k+u,t),new B.aT(s,s))
j=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
j.r=A.di.gp(0)
i=j.H()
a5.drawRRect(B.er(k),i)
i.delete()
l-=r
l=B.bx(new B.a9(l,q,l+p,o),new B.aT(n,n))
k=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
k.r=A.c.gp(0)
i=k.H()
a5.drawRRect(B.er(l),i)
i.delete()}x=w*0.16
v=w*0.52
u=a8*0.32
t=x+u
r=a8*0.09
h=B.bx(new B.a9(x,v,t,v+u),new B.aT(r,r))
r=B.N()
r.r=b3.gp(0)
a6.aD(h,r)
r=w*0.27
u=a8*0.02
u=B.bx(new B.a9(x,r,t,r+a8*0.045),new B.aT(u,u))
r=A.c.j(0.35)
t=B.N()
t.r=r.gp(0)
a6.aD(u,t)
t=w*0.47
g=new B.u(w*0.15,t)
f=new B.u(a8*0.15,t)
t=w*0.06
u=a8*0.07
a6.bE(g,g.ad(0,new B.u(t,a8*0.17)),D.G5(b4,u))
t=g.ad(0,new B.u(t,a8*0.18))
r=B.N()
r.r=b4.gp(0)
a6.af(t,s,r)
e=b0?-2.5+b6*0.5:0.5-b6*2.2
d=f.ad(0,new B.u(Math.sin(e)*a8*0.2,Math.cos(e)*a8*0.2))
a6.bE(f,d,D.G5(b4,u))
x=B.N()
x.r=b4.gp(0)
a6.af(d,s,x)
w*=0.7
a0=new B.u(0,w)
a1=a8*0.22
if(b2===1){x=a0.ad(0,new B.u(0,-a1*0.12))
v=B.N()
v.r=C.Eb.gp(0)
a6.af(x,a1*1.18,v)}x=B.N()
x.r=b4.gp(0)
a6.af(a0,a1,x)
if(b2===0){x=B.bU(a0,a1)
v=B.N()
v.r=C.Eb.gp(0)
a6.f8(x,3.141592653589793,3.141592653589793,!0,v)}else if(b2===2){x=B.bU(a0,a1)
v=B.N()
v.r=C.Eb.gp(0)
a6.f8(x,3.141592653589793,3.141592653589793,!0,v)
for(x=w+a1*0.3,v=a1*0.2,m=0;m<2;++m){a2=C.oa[m]
u=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
u.r=C.Eb.gp(0)
i=u.H()
a5.drawCircle(0+a2*a1*1.05,x,v,i)
i.delete()}}a3=A.k.E(a9*0.8,3)>2.85
for(x=w+a1*0.42,v=a1*0.12,u=a1*0.25,t=a9*0.7,s=a1*0.13,w+=a1*0.05,r=-a1*0.15,q=w+0,p=a1*0.15,m=0;m<2;++m){o=C.oa[m]*a1
n=0+o*0.4
if(a3){l=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
l.b=A.ae
l.c=1.6
l.r=A.bj.gp(0)
l.d=A.bQ
i=l.H()
a5.drawLine.apply(a5,[n+r,q,n+p,q,i])
i.delete()}else{l=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
l.r=A.c.gp(0)
i=l.H()
a5.drawCircle(n,w,u,i)
i.delete()
l=Math.sin(t)
k=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
k.r=A.w.gp(0)
i=k.H()
a5.drawCircle(n+l*a1*0.06,q,s,i)
i.delete()}n=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
n.r=A.jd.j(0.5).gp(0)
i=n.H()
a5.drawCircle(0+o*0.62,x,v,i)
i.delete()}x=a1*0.5
a4=a0.ad(0,new B.u(0,x))
w=a1*0.4
if(b5){x=B.cg(a4,w*(0.35+0.65*((Math.sin(a9*12)+1)/2)),x)
w=B.N()
w.r=A.eq.gp(0)
a6.hS(x,w)}else a6.f8(B.cg(a4.aC(0,new B.u(0,a1*0.1)),w,a1*0.65),0.2,2.741592653589793,!1,D.G5(A.bj,1.8))
a5.restore()},
aNT(d,e,f,g,h,i){var x,w,v,u,t,s,r,q=null
if(h<=0)return
x=d.a
J.by(x.save())
x.translate(e.a,e.b)
d.bX(0,A.k.D(A.mR.az(0,A.k.D(h,0,1)),0.01,1.3))
w=B.h6(q,q,q,q,B.d7(q,q,q,q,q,q,q,q,q,B.l(q,q,A.az,q,q,q,q,q,q,q,q,g,q,q,A.u,q,q,!0,q,q,q,q,q,q,q,q),f),A.a4,A.c6,q,A.dS,A.c5)
w.eo()
v=w.b
u=v.c
v=v.a.c
t=g*0.8
s=B.bx(B.cg(A.J,v.gbf(v)+g*0.7,u+g*1.1),new B.aT(t,t))
t=$.W()
u=B.N()
u.r=i.gp(0)
d.aD(s,u)
t=new B.aO(t.r,A.ao,q,q,B.a([],y.v))
u=-g
v=s.d
r=v-1
t.F(new B.b5(u*0.3,r))
t.F(new B.ap(u*0.7,v+g*0.6))
t.F(new B.ap(g*0.2,r))
t.F(new B.bF())
r=B.N()
r.r=i.gp(0)
d.aP(t,r)
r=w.b
t=r.c
r=r.a.c
w.a4(d,new B.u(-t/2,-r.gbf(r)/2))
x.restore()},
fXy(d,e,f,g){var x,w=A.k.D(Math.abs(Math.cos(g)),0.15,1),v=f*2,u=v*w,t=B.cg(e,v,u)
$.W()
x=B.N()
x.r=A.bW.gp(0)
d.hS(t,x)
d.hS(B.cg(e,v,u),D.G5(A.pD,f*0.18))
if(w>0.5)D.rP(d,"$",e,f*1.2,A.pD,9999)},
hPr(d,e,f,g){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=new B.eM()
k.dC(4)
for(x=e.a,w=f-g,v=e.b,u=d.a,t=f*3,s=v*0.025,r=v*0.012,q=0;q<18;++q){p=k.aj()
o=A.k.E(w*(40+k.aj()*60)+k.aj()*v,v)
J.by(u.save())
u.translate(p*x,o)
u.rotate((t+q)*180/3.141592653589793,0,0)
p=B.cg(A.J,r,s)
n=C.aul[A.o.E(q,5)]
$.W()
m=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
m.r=n.gp(0)
l=m.H()
u.drawRect(B.c_(p),l)
l.delete()
u.restore()}},
hZ7(d,e,f,g){switch(A.o.E(f,11)){case 0:D.hP3(d,e,g)
break
case 1:D.hRZ(d,e,g)
break
case 2:D.hXd(d,e,g)
break
case 3:D.hXs(d,e,g)
break
case 4:D.hWm(d,e,g)
break
case 5:D.hRF(d,e,g)
break
case 6:D.hOu(d,e,g)
break
case 7:D.hYb(d,e,g)
break
case 8:D.hQI(d,e,g)
break
case 9:D.hS2(d,e,g)
break
default:D.hRh(d,e,g)}},
hP3(a2,a3,a4){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null,d=a3.a,a0=a3.b,a1=a0*0.94
for(x=a2.a,w=d*0.12,v=d*0.06,u=a0*0.06,t=y.v,s=0;s<6;++s){r=d*(0.04+s*0.17)
q=a0*(0.18+0.08*A.o.E(s,3))
p=a1-q
o=r+w
n=A.c.j(0.2)
m=$.W()
l=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
l.r=n.gp(0)
k=l.H()
x.drawRect(B.c_(new B.a9(r,p,o,p+q)),k)
k.delete()
l=B.a([],t)
m=new B.aO(m.r,A.ao,e,e,l)
l.push(new B.b5(r-3,p))
l.push(new B.ap(r+v,p-u))
l.push(new B.ap(o+3,p))
l.push(new B.bF())
p=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
p.r=A.c.j(0.3).gp(0)
k=p.H()
p=m.gbL().a.snapshot()
x.drawPath((m.e=new B.cC(p)).a,k)
k.delete()}w=A.w.j(0.18)
$.W()
v=B.N()
v.r=w.gp(0)
a2.aZ(new B.a9(0,a1,0+d,a1+(a0-a1)),v)
j=Math.cos(a4*1.6)
i=Math.min(d*0.46,a0*0.95)
h=i*0.62
J.by(x.save())
v=d*0.58
x.translate(v,a0*0.45)
a2.ta(0,Math.max(0.08,Math.abs(j)),1)
w=h*0.1
g=B.bx(B.cg(A.J,h,i),new B.aT(w,w))
u=B.N()
t=j>=0
u.sar(new B.a8(A.a3,A.a8,A.x,t?C.dhN:C.d8n,e,e).aw(0,new B.a9(g.a,g.b,g.c,g.d)))
a2.aD(g,u)
a2.aD(g,D.G5(A.di,2))
if(t){u=-i
t=u*0.28
p=-h
o=p*0.05
n=h*0.22
m=B.N()
m.r=C.tw.gp(0)
a2.af(new B.u(t,o),n,m)
n=B.bU(new B.u(t,o),n)
o=B.N()
o.r=C.Eb.gp(0)
a2.f8(n,3.141592653589793,3.141592653589793,!0,o)
for(u*=0.05,t=p*0.25,o=h*0.07,s=0;s<3;++s){n=t+s*h*0.16
n=B.bx(new B.a9(u,n,u+i*(0.42-s*0.06),n+o),A.hD)
m=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
m.r=A.dv.gp(0)
k=m.H()
x.drawRRect(B.er(n),k)
k.delete()}D.rP(a2,"COMMUNITY ID",new B.u(0,p*0.4),w,A.di,i*0.8)}else D.rP(a2,"\u2605 NGMY \u2605",A.J,h*0.16,A.c,i*0.8)
x.restore()
w=a4>2.6
if(w){s=A.k.D((a4-2.6)/0.35,0,1)
J.by(x.save())
x.translate(v,a0*0.52)
a2.j3(0,-0.25)
a2.bX(0,2.2-1.2*A.ew.az(0,s))
f=B.cg(A.J,h*0.3,i*0.7)
a2.aD(B.bx(f,A.hf),D.G5(A.cZ.j(s),3))
D.rP(a2,"\u2713 REGISTERED",A.J,h*0.13,A.cZ.j(s),(f.c-f.a)*0.9)
x.restore()}x=a4*5
v=Math.sin(x)
x=Math.sin(x)
w=w&&a4<4
D.CE(a2,new B.u(d*0.2,a1),a0*0.7,a4,!1,Math.abs(x)*a0*0.015,0,A.cZ,C.tw,w,(v+1)/2)
if(a4>3)D.hPr(a2,new B.ar(d,a0*0.9),a4,3)},
hRZ(a6,a7,a8){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=a7.a,a3=a7.b,a4=a3*0.94,a5=A.w.j(0.2)
$.W()
x=B.N()
x.r=a5.gp(0)
a6.aZ(new B.a9(0,a4,0+a2,a4+(a3-a4)),x)
w=a2*0.62
v=a2*0.3
u=a3*0.62
x=a4-u
a5=w+v
t=B.N()
t.r=A.bo.gp(0)
a6.aZ(new B.a9(w,x,a5,x+u),t)
for(t=a6.a,s=a8*1.5,r=v*0.2,q=u*0.1,p=0;p<4;++p)for(o=x+u*(0.1+p*0.17),n=o+q,m=0;m<3;++m){l=w+v*(0.12+m*0.3)
k=A.o.E(p+m+A.k.bv(s),3)===0?A.dP:A.aP.j(0.6)
$.W()
j=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
j.r=k.gp(0)
i=j.H()
t.drawRect(B.c_(new B.a9(l,o,l+r,n)),i)
i.delete()}s=w+v*0.38
r=u*0.16
q=a4-r
$.W()
o=B.N()
o.r=A.fz.gp(0)
a6.aZ(new B.a9(s,q,s+v*0.24,q+r),o)
o=x-a3*0.09
r=a3*0.02
o=B.bx(new B.a9(w,o,a5,o+a3*0.08),new B.aT(r,r))
a5=B.N()
a5.r=A.aF.gp(0)
a6.aD(o,a5)
a5=a3*0.05
o=a3*0.06
D.rP(a6,"JOBS",new B.u(w+v/2,x-a5),o,A.c,9999)
h=A.k.D(a8/2.8,0,1)
x=a2*0.12
g=x+(w+v*0.3-x)*A.dC.az(0,h)
x=h<1
f=x?Math.abs(Math.sin(a8*12))*a3*0.02:0
s=h>=1
q=s?(Math.sin(a8*6)+1)/2:0
D.CE(a6,new B.u(g,a4),a3*0.6,a8,!1,f,2,A.b6,A.Lm,s,q)
if(x){x=B.bx(B.cg(new B.u(g-a3*0.12,a4-a3*0.17-f),a3*0.075,a3*0.1),A.hD)
q=B.N()
q.r=A.fz.gp(0)
a6.aD(x,q)}if(s){x=a8-2.8
D.aNT(a6,new B.u(g+a5,a4-a3*0.78),"Hired! \ud83c\udf89",a3*0.07,x/0.4,A.c)
for(a5=x*0.8,x=a4-a3*0.5,s=a3*0.03,q=a8*8,e=0;e<6;++e){d=A.k.E(a5+e*0.17,1)
D.fXy(a6,new B.u(g+Math.sin(e*2.1)*a3*0.2,x-d*a3*0.25),s,q+e)}}a5=a2*0.04
x=a5+v
s=o+a3*0.3
r=B.bx(new B.a9(a5,o,x,s),new B.aT(r,r))
$.W()
q=B.N()
q.r=A.ic.gp(0)
a6.aD(r,q)
for(x-=a5,r=a5+x*0.08,s-=o,q=x*0.84,n=s*0.24,a5+=x*0.14,x*=0.5,l=s*0.05,e=0;e<3;++e){k=(1-A.k.D((a8-e*0.5)/0.5,0,1))*a2*0.3
j=r+k
a0=e*0.3
a1=o+s*(0.08+a0)
a1=B.bx(new B.a9(j,a1,j+q,a1+n),A.hD)
j=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
j.r=A.c.gp(0)
i=j.H()
t.drawRRect(B.er(a1),i)
i.delete()
k=a5+k
a0=o+s*(0.14+a0)
a1=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
a1.r=A.bJ.gp(0)
i=a1.H()
t.drawRect(B.c_(new B.a9(k,a0,k+x,a0+l)),i)
i.delete()}},
hXd(a1,a2,a3){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=a2.a,e=a2.b,d=e*0.94,a0=A.fz.j(0.6)
$.W()
x=B.N()
x.r=a0.gp(0)
a1.aZ(new B.a9(0,d,0+f,d+(e-d)),x)
w=f*0.3
v=f*0.66
for(a0=v/12,x=e*0.14,u=a0+1,t=x+e*0.12,s=a1.a,r=0;r<12;++r){q=w+a0*r
p=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
p.r=C.axs[A.o.E(r,4)].gp(0)
o=p.H()
s.drawRect(B.c_(new B.a9(q,x,q+u,t)),o)
o.delete()}for(u=e*0.2,t=e*0.1,q=u+t,r=0;r<12;++r){p=w+a0*r
n=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
n.r=C.axs[A.o.E(r,4)].gp(0)
o=n.H()
s.drawArc.apply(s,[B.c_(new B.a9(p,u,p+a0,q)),0,180,!0,o])
o.delete()}a0=w+4
u=e*0.3
q=u+(d-u)
p=B.N()
p.r=A.fz.gp(0)
a1.aZ(new B.a9(a0,u,a0+4,q),p)
p=w+v
a0=p-8
n=B.N()
n.r=A.fz.gp(0)
a1.aZ(new B.a9(a0,u,a0+4,q),n)
n=e*0.68
q=n+e*0.26
a0=B.bx(new B.a9(w,n,p,q),A.io)
u=B.N()
u.r=A.ic.gp(0)
a1.aD(a0,u)
for(a0=p-w,u=a0/6,p=n+2,a0/=12,q=p+(q-n-4),r=0;r<6;++r){m=w+u*r
l=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
l.r=((r&1)===0?A.bz:A.bW).j(0.9).gp(0)
o=l.H()
s.drawRect(B.c_(new B.a9(m,p,m+a0,q)),o)
o.delete()}a0=w+v*0.2
u=e*0.62
k=new B.u(a0,u)
q=e*0.17
p=e*0.03
m=B.bx(B.cg(k,e*0.11,q),new B.aT(p,p))
l=B.N()
l.r=A.cu.gp(0)
a1.aD(m,l)
l=-e
q=B.cg(k.ad(0,new B.u(0,l*0.05)),e*0.04,q)
m=B.N()
m.r=A.fl.gp(0)
a1.hS(q,m)
for(q=a3*0.8,l*=0.08,m=e*0.015,r=0;r<3;++r){j=A.k.E(q+r*0.33,1)
i=Math.sin(j*6+r)
h=j*e
g=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
g.r=A.c.j(0.6*(1-j)).gp(0)
o=g.H()
s.drawCircle(a0+i*5,u+(l-h*0.14),m+h*0.02,o)
o.delete()}for(a0=w+v*0.5,q=e*0.018,r=0;r<5;++r){m=B.cg(new B.u(a0,u),x,e*(0.1+r*0.01))
l=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
l.b=A.ae
l.c=q
l.r=A.bW.gp(0)
l.d=A.bQ
o=l.H()
s.drawArc.apply(s,[B.c_(m),(0.4+r*0.1)*57.29577951308232,108.8619810748564,!1,o])
o.delete()}for(a0=e*0.63,x=e*0.032,r=0;r<4;++r){u=A.o.E(r,2)
q=A.o.an(r,2)
m=(r&1)===0?A.cg:A.xb
l=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
l.r=m.gp(0)
o=l.H()
s.drawCircle(w+v*(0.72+0.06*u)+r*e*0.02,a0+q*e*0.035,x,o)
o.delete()}D.CE(a1,new B.u(f*0.14,d),n,a3,!1,0,1,A.bW,E.adV,!0,(Math.sin(a3*5)+1)/2)
for(a0=a3*0.45,x=f*0.16,u=e*0.45,s=e*0.06,r=0;r<5;++r){j=A.k.E(a0+r*0.2,1)
D.rP(a1,"\u2665",new B.u(x+Math.sin(j*5+r)*e*0.08+r*e*0.03,u-j*e*0.4),s,A.ay.j(1-j),9999)}a0=w+v/2
x=e*0.08
p=B.bx(B.cg(new B.u(a0,x),t,v*0.7),new B.aT(p,p))
$.W()
t=B.N()
t.r=A.az.gp(0)
a1.aD(p,t)
D.rP(a1,"NGMY STORE \xb7 African food",new B.u(a0,x),e*0.05,A.dP,v*0.64)},
hXs(d,e,f){var x,w,v,u,t,s,r,q=e.a,p=e.b,o=p*0.94,n=A.w.j(0.2)
$.W()
x=B.N()
x.r=n.gp(0)
d.aZ(new B.a9(0,o,0+q,o+(p-o)),x)
w=A.o.E(A.o.an(Date.now(),6000)*3+A.o.D(A.k.bv(f/2),0,2),14)
v=A.k.E(f,2)
u=v<1
x=p*0.68
n=u?(Math.sin(f*8)+1)/2:0
t=u?Math.abs(Math.sin(f*8))*p*0.01:0
D.CE(d,new B.u(q*0.25,o),x,f,!1,t,2,A.cZ,C.tw,u,n)
n=u?0:(Math.sin(f*8)+1)/2
t=u?0:Math.abs(Math.sin(f*8))*p*0.01
D.CE(d,new B.u(q*0.75,o),x,f,!1,t,0,A.bk,C.bb0,!u,n)
s=new D.fp0(p,q)
n=p*0.15
if(u){x=C.awz[w].a
D.aNT(d,new B.u(q*0.27,n),x,s.$1(x),v/0.25,A.oF)}else{x=C.awz[w].b
D.aNT(d,new B.u(q*0.73,n),x,s.$1(x),(v-1)/0.25,A.ev)}for(n=q*0.5,x=p*0.07,t=f*2,r=0;r<3;++r)D.rP(d,"\u2192",new B.u(n,p*(0.35+r*0.1)),x,A.c.j(0.3+0.5*A.k.E(t+r,1)),9999)},
hWm(a1,a2,a3){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=a2.a,e=a2.b,d=e*0.94,a0=A.w.j(0.2)
$.W()
x=B.N()
x.r=a0.gp(0)
a1.aZ(new B.a9(0,d,0+f,d+(e-d)),x)
x=f*0.3
w=B.cg(new B.u(f*0.6,e*0.45),e*0.7,Math.min(x,e*0.55))
a0=B.bx(w,A.io)
v=B.N()
v.r=A.c.gp(0)
a1.aD(a0,v)
for(a0=w.d,v=w.b,u=a0-v,t=u*0.03,s=a1.a,r=w.a,q=w.c,p=q-r,o=r+p*0.1,n=0;n<9;++n){m=v+u*(0.1+n*0.095)
l=A.o.E(n,3)===2?0.5:0.8
k=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
k.r=A.cr.gp(0)
j=k.H()
s.drawRect(B.c_(new B.a9(o,m,o+p*l,m+t)),j)
j.delete()}i=A.k.D(a3/3,0,1)
h=v+u*i
if(i<1){a0=r-8
u=h-2
p=a0+(p+16)
t=B.N()
t.r=A.b2.gp(0)
a1.aZ(new B.a9(a0,u,p,u+4),t)
t=A.b2.j(0.18)
u=B.N()
u.r=t.gp(0)
a1.aZ(new B.a9(a0,v,p,v+(h-v)),u)}else{n=A.k.D((a3-3)/0.4,0,1)
u=A.mR.az(0,n)
t=B.N()
t.r=A.bz.gp(0)
a1.af(new B.u(q,v),e*0.08*u,t)
D.rP(a1,"PDF",new B.u(q,v),e*0.045*n,A.c,9999)
v=e*0.06
D.rP(a1,"\u2713 Saved",new B.u(w.gbQ().a,a0+v),v,A.c.j(n),9999)}a0=a3*4
v=Math.sin(a0)
D.CE(a1,new B.u(f*0.2,d),e*0.66,a3,!0,Math.abs(Math.sin(a0))*e*0.01,0,A.cA,C.tw,!1,(v+1)/2)
g=B.cg(new B.u(x,e*0.3),e*0.18,e*0.1)
x=e*0.02
x=B.bx(g,new B.aT(x,x))
v=B.N()
v.r=A.az.gp(0)
a1.aD(x,v)
v=e*0.015
v=B.bx(g.cA(-3),new B.aT(v,v))
x=A.b2.j(0.35+0.3*Math.sin(a3*6))
a0=B.N()
a0.r=x.gp(0)
a1.aD(v,a0)},
hRF(a6,a7,a8){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=a7.a,a3=a7.b,a4=a3*0.94,a5=A.w.j(0.2)
$.W()
x=B.N()
x.r=a5.gp(0)
a6.aZ(new B.a9(0,a4,0+a2,a4+(a3-a4)),x)
w=B.cg(new B.u(a2*0.62,a3*0.47),a3*0.8,Math.min(a2*0.4,a3*0.75))
x=B.bx(w,A.ql)
a5=B.N()
a5.r=A.c.gp(0)
a6.aD(x,a5)
a5=w.a
x=w.c
v=x-a5
u=w.b
t=w.d-u
D.rP(a6,"INVOICE",new B.u(a5+v*0.3,u+t*0.09),t*0.07,A.di,9999)
for(s=a6.a,r=v*0.08,q=a5+r,p=t*0.045,o=q+v*0.5,n=x-v*0.17,m=t*0.02,l=t*0.06,k=a8-0.5,j=0,i=0;i<3;++i){h=A.k.D((k-i*0.6)/0.4,0,1)
if(h<=0)continue
j+=C.avE[i].b
g=u+t*(0.24+i*0.14)
J.by(s.save())
s.translate((1-h)*30,0)
f=A.cr.j(h)
$.W()
e=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
e.r=f.gp(0)
d=e.H()
s.drawRect(B.c_(new B.a9(q,g,o,g+p)),d)
d.delete()
D.rP(a6,"$"+C.avE[i].b,new B.u(n,g+m),l,A.az.j(h),9999)
s.restore()}p=u+t*0.7
a6.bE(new B.u(q,p),new B.u(x-r,p),D.G5(A.dq,1.4))
D.rP(a6,"TOTAL  $"+j,new B.u(w.gbQ().a,u+t*0.78),t*0.075,A.az,v*0.8)
x=a8>2.8
if(x){r=a8-2.8
i=A.k.D(r/0.3,0,1)
J.by(s.save())
s.translate(w.gbQ().a,u+t*0.55)
a6.j3(0,-0.3)
a6.bX(0,2-A.ew.az(0,i))
a6.aD(B.bx(B.cg(A.J,t*0.17,v*0.6),A.hf),D.G5(A.cZ.j(i),3.5))
D.rP(a6,"PAID",A.J,t*0.11,A.cZ.j(i),9999)
s.restore()
for(v=r*0.7,a5-=a3*0.05,u=a3*0.7,t=a3*0.03,s=a8*8,a0=0;a0<6;++a0){a1=A.k.E(v+a0*0.17,1)
D.fXy(a6,new B.u(a5+Math.sin(a0*2)*a3*0.1,u-a1*a3*0.5),t,s+a0)}}a5=x?(Math.sin(a8*6)+1)/2:0
D.CE(a6,new B.u(a2*0.2,a4),a3*0.66,a8,!0,0,1,A.bC,A.Lm,x,a5)},
hOu(d,e,a0){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=e.a,h=e.b,g=h*0.94,f=A.dZ.j(0.7)
$.W()
x=B.N()
x.r=f.gp(0)
d.aZ(new B.a9(0,g,0+i,g+(h-g)),x)
x=i*0.6
f=h*0.62
w=new B.u(x,f)
v=Math.min(i*0.3,h*0.6)
u=B.bx(B.cg(w,v*1.3,v*2.1),A.hf)
t=B.N()
t.r=A.hl.gp(0)
d.aD(u,t)
t=v*0.5
u=v*1.2
s=B.cg(w.aC(0,new B.u(t,0)),u,v)
r=B.N()
r.r=A.h5.gp(0)
d.aZ(s,r)
t=B.cg(w.ad(0,new B.u(t,0)),u,v)
r=B.N()
r.r=A.h5.gp(0)
d.aZ(t,r)
r=A.k.E(a0,2)
t=d.a
J.by(t.save())
t.translate(x,f)
d.ta(0,Math.cos(r/2*3.141592653589793),1)
r=-v*0.6
s=B.N()
s.r=A.bL.gp(0)
d.aZ(new B.a9(0,r,0+v,r+u),s)
t.restore()
q=A.k.D(a0/3,0,1)
f-=v*0.6
s=f-h*0.28*q
d.bE(new B.u(x,f),new B.u(x,s),D.G5(A.fz,h*0.025))
for(f=q-0.4,u=h*0.05,r=h*0.04,p=0;p<5;++p){o=A.k.D(f-p*0.1,0,1)
n=p*1.3
m=Math.cos(n)
l=Math.sin(n)
k=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
k.r=A.bi.gp(0)
j=k.H()
t.drawCircle(x+m*h*0.14*o,s+l*h*0.08*o,u*o,j)
j.delete()
if(o>0.6)D.rP(d,"\u2665",new B.u(x+Math.cos(n)*h*0.14,s+Math.sin(n)*h*0.08),r,A.bC,9999)}f=a0*4
x=Math.sin(f)
D.CE(d,new B.u(i*0.2,g),h*0.66,a0,!1,Math.abs(Math.sin(f))*h*0.01,2,A.aE,C.tw,!1,(x+1)/2)},
hYb(d,e,f){var x,w,v,u,t,s,r,q,p,o,n=e.a,m=e.b,l=m*0.94,k=A.w.j(0.2)
$.W()
x=B.N()
x.r=k.gp(0)
d.aZ(new B.a9(0,l,0+n,l+(m-l)),x)
w=A.k.bv(A.k.D(f/5.5,0,1)*9)+1
for(v=n*0.62,k=l-m*0.03,x=m*0.26,u=m*0.07,t=d.a,s=0;s<w;++s){r=k-s*m*0.055
q=B.cg(new B.u(v,r),u,x)
p=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
p.r=A.bW.gp(0)
o=p.H()
t.drawOval(B.c_(q),o)
o.delete()
r=B.cg(new B.u(v,r),u,x)
q=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
q.b=A.ae
q.c=2
q.r=A.pD.gp(0)
q.d=A.bQ
o=q.H()
t.drawOval(B.c_(r),o)
o.delete()}k=m*0.1
D.fXy(d,new B.u(v,k+A.k.E(f*1.6,1)*(l-u-w*m*0.055-k)),m*0.05,f*8)
k=m*0.08
D.rP(d,"$"+w*25,new B.u(v,k),k,A.dP,9999)
k=f*5
u=Math.sin(k)
D.CE(d,new B.u(n*0.25,l),m*0.66,f,!1,Math.abs(Math.sin(k))*m*0.012,1,A.cA,C.tw,!0,(u+1)/2)},
hQI(d,a0,a1){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=a0.a,g=a0.b,f=g*0.94,e=A.w.j(0.2)
$.W()
x=B.N()
x.r=e.gp(0)
d.aZ(new B.a9(0,f,0+h,f+(g-f)),x)
for(e=d.a,x=g*0.012,w=g*0.55,v=a1*4,u=a1*2,t=g*0.15,s=g*0.03,r=0;r<3;r=n){q=Math.sin(v+r*1.7)
J.by(e.save())
e.translate(h*(0.5+0.14*r),w-Math.abs(q)*g*0.3)
e.rotate((u+r)*180/3.141592653589793,0,0)
q=B.bx(B.cg(A.J,t,t),new B.aT(s,s))
p=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
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
j=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
j.r=A.bj.gp(0)
o=j.H()
e.drawCircle(k*g*0.04,l*g*0.04,x,o)
o.delete();++m}e.restore()}for(e=a1*0.6,w=g*0.25,v=g*0.06,r=0;r<5;++r){i=A.k.E(e+r*0.2,1)
D.rP(d,"\u2605",new B.u(h*(0.45+r*0.1),w-i*g*0.2),v,A.dP.j(1-i),9999)}e=h*0.22
w=a1*6
v=Math.sin(w)
D.CE(d,new B.u(e,f),g*0.66,a1,!0,Math.abs(Math.sin(w))*g*0.015,0,A.cg,C.tw,!0,(v+1)/2)
v=f-g*0.28
s=B.bx(B.cg(new B.u(e,v),g*0.07,g*0.16),new B.aT(s,s))
$.W()
w=B.N()
w.r=A.cu.gp(0)
d.aD(s,w)
w=B.N()
w.r=A.ay.gp(0)
d.af(new B.u(e+g*0.05,v),x,w)},
hS2(d,e,a0){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=e.a,j=e.b,i=j*0.94,h=A.w.j(0.2),g=$.W(),f=B.N()
f.r=h.gp(0)
d.aZ(new B.a9(0,i,0+k,i+(j-i)),f)
f=k*0.42
h=j*0.18
x=j*0.08
w=B.bx(new B.a9(f,h,f+k*0.5,h+j*0.5),new B.aT(x,x))
v=new B.aO(g.r,A.ao,null,null,B.a([],y.v))
v.F(new B.iJ(w))
d.aP(v,D.G5(A.c.j(0.5),4))
u=new B.Sh(new B.vw(B.x2(v),!1,B.a([],y.L))).gI(0)
for(h=a0*0.18,g=u.a,x=u.b,t=g.e,s=j*0.016,r=d.a,q=0;q<10;++q){p=A.k.E(h+q/10,1)
g.js()
o=t[x].b
o===$&&B.c()
o=o.a.length()
g.js()
o=t[x].MB(p*o).a
p=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
p.r=A.dP.gp(0)
n=p.H()
r.drawCircle(o.a,o.b,s,n)
n.delete()}m=a0>1.5
h=j*0.43
l=new B.u(k*0.92,h)
if(m){g=A.dP.j(0.4+0.2*Math.sin(a0*8))
x=B.N()
x.r=g.gp(0)
x.z=A.z0
d.af(l,j*0.2,x)}g=j*0.07
x=m?A.oF:A.bJ
t=B.N()
t.r=x.gp(0)
d.af(l,g,t)
h=B.bx(B.cg(new B.u(f,h),j*0.2,j*0.1),A.io)
t=B.N()
t.r=A.cZ.gp(0)
d.aD(h,t)
D.rP(d,"+",new B.u(f,j*0.36),g,A.c,9999)
h=m?(Math.sin(a0*6)+1)/2:0
f=m?Math.abs(Math.sin(a0*6))*j*0.012:0
D.CE(d,new B.u(k*0.2,i),j*0.68,a0,!1,f,0,A.bU,C.tw,m,h)
if(m)D.aNT(d,new B.u(k*0.24,j*0.16),"It works!",g,(a0-1.5)/0.4,A.c)},
hRh(d,a0,a1){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=a0.a,g=a0.b,f=g*0.94,e=A.w.j(0.2)
$.W()
x=B.N()
x.r=e.gp(0)
d.aZ(new B.a9(0,f,0+h,f+(g-f)),x)
w=A.k.D((a1-0.3)/0.4,0,1)
v=A.k.D((a1-1.8)/0.4,0,1)
x=g*0.2
e=g*0.065
D.aNT(d,new B.u(h*0.3,x),"How do I enroll?",e,w,A.oF)
if(a1>1&&a1<1.8)for(u=h*0.72,t=g*0.38,s=a1*9,r=g*0.015,q=d.a,p=0;p<3;++p){o=Math.sin(s+p)
n=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
n.r=A.c.gp(0)
m=n.H()
q.drawCircle(u+p*g*0.05,t-Math.abs(o)*g*0.02,r,m)
m.delete()}D.aNT(d,new B.u(h*0.7,g*0.38),"Tap Civic Registry!",e,v,A.ev)
D.CE(d,new B.u(h*0.2,f),g*0.62,a1,!1,0,2,A.ay,C.tw,a1<1,0)
l=h*0.78
k=f-g*0.28
e=g*0.04
x=B.bx(B.cg(new B.u(l,k),g*0.22,x),new B.aT(e,e))
u=B.N()
u.r=A.aL.gp(0)
d.aD(x,u)
u=g*0.18
x=k-u
e=B.bx(B.cg(new B.u(l,x),g*0.14,u),new B.aT(e,e))
u=B.N()
u.r=A.cr.gp(0)
d.aD(e,u)
for(e=d.a,u=a1*1.1,t=g*0.02,j=0;j<2;++j){i=C.oa[j]
s=A.k.E(u,1)>0.08?A.b9:A.f8
r=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
r.r=s.gp(0)
m=r.H()
e.drawCircle(l+i*g*0.04,x,t,m)
m.delete()}d.bE(new B.u(l,k-g*0.25),new B.u(l,k-g*0.3),D.G5(A.ad,3))
e=B.N()
e.r=A.ay.gp(0)
d.af(new B.u(l,k-g*0.31),g*0.015,e)},
fp6:function fp6(d,e,f){this.a=d
this.b=e
this.c=f},
fp0:function fp0(d,e){this.a=d
this.b=e},
aNh(d,e,f,g,h,i,j,k){var x=new D.fgD(e,h,i,k),w=x.$1(g),v=w.b.c
if(v>j&&v>0)w=x.$1(Math.max(2,g*j/v))
x=w.b
v=x.c
x=x.a.c
w.a4(d,f.aC(0,new B.u(v/2,x.gbf(x)/2)))},
KY(d,e,f,a0){var x,w,v,u,t,s,r,q,p,o,n,m=A.o.E(a0==null?A.k.bv(f/6):a0,11),l=A.k.E(f,6),k=C.d2G[m],j=e.a,i=e.b,h=0+j,g=0+i
$.W()
x=B.N()
x.sar(new B.a8(A.ax,A.aC,A.x,B.a([k.c,k.d],y.O),null,null).aw(0,new B.a9(0,0,h,g)))
d.aZ(new B.a9(0,0,h,g),x)
w=i*(j>=i?0.7:0.6)
g=d.a
J.by(g.save())
g.clipRect(B.c_(new B.a9(0,0,h,0+w)),$.oH()[1],!0)
D.hZ7(d,new B.ar(j,w),m,l)
g.restore()
v=i-w
x=A.w.j(0.3)
u=B.N()
u.r=x.gp(0)
d.aZ(new B.a9(0,w,h,w+v),u)
t=A.ct.az(0,A.k.D((l-0.2)/0.5,0,1))
J.by(g.save())
g.translate((1-t)*j*0.25,0)
u=j/2
h=j*0.94
D.aNh(d,k.a,new B.u(u,w+v*0.3),v*0.36,A.c.j(t),!0,h,0)
D.aNh(d,k.b,new B.u(u,w+v*0.64),v*0.2,A.c.j(0.92*t),!1,h,0)
g.restore()
for(h=i*0.965,x=i*0.009,s=i*0.004,r=0;r<11;++r){q=r===m
p=q?s:0
o=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
o.r=A.c.j(q?0.95:0.35).gp(0)
n=o.H()
g.drawCircle(u+(r-5)*i*0.035,h,x+p,n)
n.delete()}h=j-i*0.07
g=i*0.06
D.aNh(d,"AD",new B.u(h,g),i*0.045,A.c.j(0.85),!0,9999,1)
x=i*0.02
x=B.bx(B.cg(new B.u(h,g),i*0.065,i*0.1),new B.aT(x,x))
g=B.N()
g.b=A.ae
g.c=1
g.r=A.ad.gp(0)
g.d=A.bQ
d.aD(x,g)},
Ra(d,e,f,g){var x,w=d.a
J.by(w.save())
w.clipRect(B.c_(new B.a9(0,0,0+e.a,0+e.b)),$.oH()[1],!0)
x=C.k8[A.o.E(f,8)].e
if(x===-2)D.hOD(d,e,g)
else if(x===-1)D.KY(d,e,g,null)
else D.KY(d,e,g,x)
w.restore()},
hOD(d,a0,a1){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=a0.a,h=a0.b,g=new B.S(Date.now(),0,!1),f=0+i,e=0+h
$.W()
x=B.N()
x.sar(C.bUB.aw(0,new B.a9(0,0,f,e)))
d.aZ(new B.a9(0,0,f,e),x)
x=B.N()
x.r=A.bz.gp(0)
d.aZ(new B.a9(0,0,f,0+h*0.15),x)
D.aNh(d,A.p_[B.bH(g)-1]+" "+B.bA(g),new B.u(i/2,h*0.075),h*0.08,A.c,!0,i*0.9,0)
w=i/7
for(f=h*0.21,e=h*0.05,v=0;v<7;++v)D.aNh(d,C.dgC[v],new B.u(w*(v+0.5),f),e,A.aA,!0,9999,0)
u=B.c1(B.bA(g),B.bH(g),1,0,0,0,0,0)
t=B.bQ(B.c1(B.bA(g),B.bH(g)+1,0,0,0,0,0,0))
s=B.my(u)-1
r=h*0.74/A.k.dw((s+t)/7)
for(f=h*0.26,e=a1*3,x=d.a,q=1;q<=t;++q){p=s+q-1
o=w*(A.o.E(p,7)+0.5)
n=f+r*(A.o.an(p,7)+0.5)
if(q===B.bQ(g)){m=Math.min(w,r)
l=A.aP.j(0.5+0.2*Math.sin(e))
$.W()
k=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
k.r=l.gp(0)
j=k.H()
x.drawCircle(o,n,m*0.42,j)
j.delete()}m=Math.min(w,r)
l=q===B.bQ(g)?A.c:A.ad
D.aNh(d,""+q,new B.u(o,n),m*0.42,l,!0,9999,0)}},
fgD:function fgD(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
wi:function wi(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
vK:function vK(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
h15(d,e,f,g,h,a0){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i=d.a
J.by(i.save())
x=e.a
w=e.b
v=0+x
u=0+w
i.clipRect(B.c_(new B.a9(0,0,v,u)),$.oH()[1],!0)
if(h<3){$.W()
t=B.N()
t.r=C.b7v.gp(0)
d.aZ(new B.a9(0,0,v,u),t)
if(h<0.5)u=h/0.5
else u=h>2.4?(3-h)/0.6:1
s=A.k.D(u,0,1)
u=e.eb(A.J)
t=e.gdB()
r=B.N()
r.sar(new B.bT(A.A,0.5,A.x,j,0,B.a([A.aP.j(0.35*s),A.K],y.O),j,j).aw(0,B.bU(e.eb(A.J),e.gdB()*0.5)))
d.af(u,t*0.5,r)
D.G8(d,"NGMY",new B.u(0,w*0.36),w*0.2,A.c.j(s),A.L,w*0.03,x)
D.G8(d,"T V",new B.u(0,w*0.6),w*0.08,A.aP.j(s),A.L,w*0.05,x)
r=x*0.3
t=w*0.78
u=B.N()
u.r=A.aP.j(s).gp(0)
d.aZ(new B.a9(r,t,r+x*0.4*(h/3),t+3),u)}else if(a0>=0)D.Ra(d,e,a0,g)
else{q=A.k.D((h-3)/0.5,0,1)
p=A.o.E(f,10)
switch(p){case 0:D.hXM(d,e,g)
break
case 1:D.hPf(d,e,g)
break
case 2:D.hX3(d,e,g)
break
case 3:D.hTU(d,e,g)
break
case 4:D.hV9(d,e,g)
break
case 5:D.hX4(d,e,g)
break
case 6:D.hQy(d,e,g)
break
case 7:D.hXL(d,e,g)
break
case 8:D.hVW(d,e,g)
break
default:D.hQJ(d,e,g)}t=x-w*0.34
r=w*0.04
o=w*0.03
n=B.bx(new B.a9(t,r,t+w*0.3,r+w*0.1),new B.aT(o,o))
$.W()
o=B.N()
o.r=A.w.j(0.55).gp(0)
d.aD(n,o)
D.G8(d,"NGMY",new B.u(n.a+w*0.025,n.b+w*0.012),w*0.07,A.c,A.bg,1,j)
o=w*0.86
t=B.N()
t.r=A.w.j(0.6).gp(0)
d.aZ(new B.a9(0,o,v,o+w*0.14),t)
D.G8(d,"CH "+(f+1)+"  \xb7  "+C.PZ[p].a,new B.u(r,w*0.885),w*0.075,A.c,A.bg,0,x-w*0.08)
if(q<1){t=B.N()
t.r=A.c.j(0.6*(1-q)).gp(0)
d.aZ(new B.a9(0,0,v,u),t)}}$.W()
m=B.N()
m.r=A.w.j(0.07).gp(0)
for(l=0;l<w;l+=3){k=m.H()
i.drawRect(B.c_(new B.a9(0,l,v,l+1)),k)
k.delete()}v=new B.aO($.W().r,A.ao,j,j,B.a([],y.v))
v.F(new B.b5(0,0))
v.F(new B.ap(x*0.45,0))
v.F(new B.ap(0,w*0.5))
v.F(new B.bF())
w=B.N()
w.r=A.c.j(0.04).gp(0)
d.aP(v,w)
i.restore()},
G8(d,e,f,g,h,i,j,k){var x=null,w=B.h6(x,x,1,x,B.d7(x,x,x,x,x,x,x,x,x,B.l(x,x,h,x,x,x,x,x,x,x,x,g,x,x,A.u,x,x,!0,x,j,x,x,x,x,x,x),e),i,A.c6,x,A.dS,A.c5),v=k==null
w.wC(v?9999:k)
w.a4(d,f.ad(0,new B.u(i===A.L&&!v?(k-w.b.c)/2:0,0)))},
hXM(d,e,f){var x,w,v,u,t,s,r,q,p,o,n,m=e.a,l=e.b,k=A.k.E(f,14),j=0+m,i=0+l
$.W()
x=B.N()
x.sar(C.aou.aw(0,new B.a9(0,0,j,i)))
d.aZ(new B.a9(0,0,j,i),x)
x=B.N()
x.r=A.dP.gp(0)
d.af(new B.u(m*0.85,l*0.18),l*0.08,x)
x=l*0.78
i=B.N()
i.r=A.Aq.gp(0)
d.aZ(new B.a9(0,x,j,x+l*0.22),i)
new D.fpj(d,f,l).$5(new B.u(m*0.5,l*0.8),1.5707963267948966,l*0.24,5,A.k.D(k/5,0,1)*1.4)
for(j=l*0.26,i=l*0.11,x=l*0.05,w=d.a,v=-l,u=v*0.1,v*=0.04,t=l*0.065,s=0;s<6;++s){r=A.k.D((k-(5+s*1.3))/0.5,0,1)
if(r<=0)continue
q=(s&1)===1?0.04:0
p=A.o.E(s,3)
o=A.mR.az(0,r)
J.by(w.save())
w.translate(m*(0.2+0.12*s+q),l*(0.16+0.14*p))
w.scale(o,o)
q=B.bx(B.cg(A.J,i,j),new B.aT(x,x))
$.W()
p=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
p.r=A.c.gp(0)
n=p.H()
w.drawRRect(B.er(q),n)
n.delete()
q=B.bx(B.cg(A.J,i,j),new B.aT(x,x))
p=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
p.b=A.ae
p.c=2
p.r=A.bC.gp(0)
n=p.H()
w.drawRRect(B.er(q),n)
n.delete()
D.G8(d,"\u2665 "+C.cSl[s],new B.u(u,v),t,A.ta,A.bg,0,null)
w.restore()}if(k>11.5)D.G8(d,"Family is everything",new B.u(0,l*0.62),l*0.09,A.hl,A.L,0,m)},
hPf(d,e,a0){var x,w,v,u,t,s,r,q,p,o,n,m,l=null,k=e.a,j=e.b,i=0+k,h=0+j,g=$.W(),f=B.N()
f.sar(C.bUO.aw(0,new B.a9(0,0,i,h)))
d.aZ(new B.a9(0,0,i,h),f)
x=a0*40
for(i=d.a,h=y.v,w=0;w<2;++w,g=f){f=B.a([],h)
v=new B.aO(g.r,A.ao,l,l,f)
f.push(new B.b5(0,j))
for(g=w===0,u=0;u<=k;u+=6){t=g?0.4:1
s=g?0.62:0.78
r=g?40:28
r=new B.ap(u,j*s+Math.sin((u+x*t)/r)*j*0.05)
f.push(r)
t=v.f
if(t!=null)r.bA(t)
t=v.e
if(t!=null)t.a.delete()
v.e=null}t=new B.ap(k,j)
f.push(t)
f=v.f
if(f!=null)t.bA(f)
f=v.e
if(f!=null)f.a.delete()
v.e=null
f=$.W()
t=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
t.r=(g?A.jb:A.dZ).gp(0)
q=t.H()
g=v.e
i.drawPath((g==null?v.e=new B.cC(v.gbL().a.snapshot()):g).a,q)
q.delete()}for(i=j*0.04,h=x*1.3,g=k+60,f=k*0.3,p=0,o=0;o<6;++o){u=A.k.E(o*90-h,g)-30
t=Math.sin(o*1.7+a0)
if(Math.abs(u-f)<12)++p
D.hX8(d,new B.u(u,j*(0.35+0.08*t)),i,A.dP)}n=Math.abs(Math.sin(a0*5))
m=new B.u(f,j*0.72-n*j*0.22)
i=B.cg(new B.u(f,j*0.82),j*0.025,j*0.14*(1-n*0.4))
$.W()
h=B.N()
h.r=A.dq.gp(0)
d.hS(i,h)
h=j*0.085
i=B.N()
i.sar(C.efi.aw(0,B.bU(m,h)))
d.af(m,h,i)
i=B.N()
i.b=A.ae
i.c=2
i.r=A.pD.gp(0)
d.af(m,h,i)
i=-j
D.G8(d,"$",m.ad(0,new B.u(i*0.03,i*0.045)),j*0.09,A.pD,A.bg,0,l)
h=i*0.01
i=m.ad(0,new B.u(i*0.028,h))
g=B.N()
g.r=A.w.gp(0)
d.af(i,2.4,g)
h=m.ad(0,new B.u(j*0.028,h))
g=B.N()
g.r=A.w.gp(0)
d.af(h,2.4,g)
D.G8(d,"Saved: $"+(A.o.E(A.k.bv(a0*3),1000)+p),new B.u(j*0.05,j*0.06),j*0.08,A.c,A.bg,0,l)},
hX8(d,e,f,g){var x,w,v,u,t,s,r,q=$.W(),p=B.a([],y.v),o=new B.aO(q.r,A.ao,null,null,p)
for(q=e.a,x=e.b,w=f*0.45,v=0;v<10;++v){u=-1.5707963267948966+v*3.141592653589793/5
t=(v&1)===0?f:w
s=q+Math.cos(u)*t
r=x+Math.sin(u)*t
if(v===0){s=new B.b5(s,r)
p.push(s)
r=o.f
if(r!=null)s.bA(r)
s=o.e
if(s!=null)s.a.delete()
o.e=null}else{s=new B.ap(s,r)
p.push(s)
r=o.f
if(r!=null)s.bA(r)
s=o.e
if(s!=null)s.a.delete()
o.e=null}}o.F(new B.bF())
$.W()
q=B.N()
q.r=g.gp(0)
d.aP(o,q)},
hX3(a1,a2,a3){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=a2.a,e=a2.b,d=$.W(),a0=B.N()
a0.r=C.ben.gp(0)
a1.aZ(new B.a9(0,0,0+f,0+e),a0)
x=new B.eM()
x.dC(7)
for(a0=a3*3,w=a1.a,v=0;v<60;++v){u=A.k.E(A.k.E(x.aj()*f-a3*(10+x.aj()*60),f)+f,f)
t=x.aj()
s=x.aj()
r=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
r.r=A.c.j(0.5+0.5*Math.sin(a0+v)).gp(0)
q=r.H()
w.drawCircle(u,t*e*0.85,0.6+s*1.4,q)
q.delete()}p=f*1.2-A.k.E(a3*22,f*1.6)
a0=e*0.3
t=e*0.2
s=B.N()
s.sar(C.efg.aw(0,B.bU(new B.u(p,a0),t)))
a1.af(new B.u(p,a0),t,s)
a0=B.cg(new B.u(p,a0),e*0.07,e*0.6)
s=B.N()
s.b=A.ae
s.c=3
s.r=A.bL.j(0.7).gp(0)
a1.hS(a0,s)
s=Math.sin(a3*2)
J.by(w.save())
w.translate(f*0.42,e*0.52+s*e*0.04)
a1.j3(0,-0.25)
d=d.r
s=y.v
o=new B.aO(d,A.ao,g,g,B.a([],s))
a0=-e
t=a0*0.04
r=e*0.1
o.F(new B.b5(t,r))
n=e*0.04
o.F(new B.cV(0,e*(0.2+0.05*Math.sin(a3*30)),n,r))
o.F(new B.bF())
m=B.N()
l=e*0.12
m.sar(C.bVu.aw(0,new B.a9(t,r,t+e*0.08,r+l)))
a1.aP(o,m)
k=new B.aO(d,A.ao,g,g,B.a([],s))
m=a0*0.17
k.F(new B.b5(0,m))
t=a0*0.05
j=e*0.05
k.F(new B.cV(e*0.09,t,j,r))
k.F(new B.ap(t,r))
k.F(new B.cV(a0*0.09,t,0,m))
k.F(new B.bF())
i=B.N()
h=a0*0.08
i.sar(C.bVK.aw(0,new B.a9(h,m,h+e*0.16,m+e*0.27)))
a1.aP(k,i)
i=B.N()
i.r=A.aP.gp(0)
a1.af(new B.u(0,t),e*0.035,i)
i=new B.aO(d,A.ao,g,g,B.a([],s))
i.F(new B.b5(t,n))
i.F(new B.ap(a0*0.1,l))
i.F(new B.ap(t,r))
i.F(new B.bF())
t=B.N()
t.r=A.ay.gp(0)
a1.aP(i,t)
s=new B.aO(d,A.ao,g,g,B.a([],s))
s.F(new B.b5(j,n))
s.F(new B.ap(r,l))
s.F(new B.ap(j,r))
s.F(new B.bF())
r=B.N()
r.r=A.ay.gp(0)
a1.aP(s,r)
w.restore()},
hTU(a1,a2,a3){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null,h=a2.a,g=a2.b,f=0+h,e=0+g,d=$.W(),a0=B.N()
a0.sar(C.bUv.aw(0,new B.a9(0,0,f,e)))
a1.aZ(new B.a9(0,0,f,e),a0)
for(f=a1.a,e=g*0.85,a0=g*0.7,x=y.v,d=d.r,w=0;w<4;++w){v=h*(0.1+0.25*w)
u=B.a([],x)
t=new B.aO(d,A.ao,i,i,u)
u.push(new B.b5(v,g))
u.push(new B.cV(v+Math.sin(a3+w)*10,e,v+4,a0+w*6))
u=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
u.b=A.ae
u.c=5
u.r=A.cZ.gp(0)
s=u.H()
u=t.gbL().a.snapshot()
f.drawPath((t.e=new B.cC(u)).a,s)
s.delete()}e=A.k.E(a3*18,h*1.5)
J.by(f.save())
f.translate(e-h*0.25,g*0.35+Math.sin(a3)*6)
e=B.cg(A.J,g*0.22,g*0.5)
a0=B.N()
a0.r=A.br.gp(0)
a1.hS(e,a0)
a0=new B.aO(d,A.ao,i,i,B.a([],x))
e=-g
u=e*0.22
a0.F(new B.b5(u,0))
a0.F(new B.cV(e*0.36,e*0.12+Math.sin(a3*3)*5,e*0.34,e*0.16))
t=e*0.02
a0.F(new B.cV(e*0.28,t,u,0))
u=B.N()
u.r=A.br.gp(0)
a1.aP(a0,u)
u=g*0.03
a0=g*0.1
r=B.cg(new B.u(0,u),a0,g*0.34)
q=B.N()
q.r=A.aL.gp(0)
a1.hS(r,q)
q=B.N()
q.r=A.c.gp(0)
a1.af(new B.u(g*0.15,t),3,q)
q=B.N()
q.r=A.w.gp(0)
a1.af(new B.u(g*0.155,t),1.5,q)
f.restore()
for(t=e*0.005,r=e*0.08,q=e*0.03,p=g*0.06,e*=0.04,o=h+40,n=a3*2,w=0;w<6;++w){m=(w&1)===0?1:-1
l=A.k.E(A.k.E(a3*(24+w*7)*m+w*80,o)+h+40,o)
k=Math.sin(n+w)
J.by(f.save())
f.translate(l-20,g*(0.52+0.06*w)+k*6)
f.scale(m,1)
l=B.cg(A.J,p,a0)
k=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
j=A.o.E(w,4)
k.r=C.avj[j].gp(0)
s=k.H()
f.drawOval(B.c_(l),s)
s.delete()
l=B.a([],x)
k=new B.aO(d,A.ao,i,i,l)
l.push(new B.b5(e,0))
l.push(new B.ap(r,q))
l.push(new B.ap(r,u))
l.push(new B.bF())
l=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
l.r=C.avj[j].gp(0)
s=l.H()
l=k.gbL().a.snapshot()
f.drawPath((k.e=new B.cC(l)).a,s)
s.delete()
l=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
l.r=A.w.gp(0)
s=l.H()
f.drawCircle(u,t,1.8,s)
s.delete()
f.restore()}for(w=0;w<14;++w){e=A.k.E(w*0.071+0.05,1)
d=A.k.E(a3*(14+w*3)+w*40,g)
a0=Math.sin(n+w)
x=A.o.E(w,3)
u=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
u.b=A.ae
u.c=1.2
u.r=A.c.j(0.7).gp(0)
s=u.H()
f.drawCircle(h*e+a0*4,g-d,2+x,s)
s.delete()}},
hV9(a7,a8,a9){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null,d=a8.a,a0=a8.b,a1=A.k.E(a9,12),a2=a1<7,a3=0+d,a4=0+a0,a5=$.W(),a6=B.N()
a6.sar(new B.a8(A.b_,A.b4,A.x,a2?C.dbG:C.d_f,e,e).aw(0,new B.a9(0,0,a3,a4)))
a7.aZ(new B.a9(0,0,a3,a4),a6)
a6=a0*0.74
x=B.N()
x.r=(a2?C.biw:A.Aq).gp(0)
a7.aZ(new B.a9(0,a6,a3,a6+a0*0.26),x)
for(x=a7.a,w=a0*0.07,v=a0*0.06,u=a0*0.2,t=a0*0.1,s=a0*0.09,r=y.v,q=a9*2,a5=a5.r,p=0;p<4;++p){o=d*(0.08+0.24*p)
n=a0*(0.14+0.03*A.o.E(p,2))
m=a6-n
l=o+u
k=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
k.r=C.cN6[p].gp(0)
j=k.H()
x.drawRect(B.c_(new B.a9(o,m,l,m+n)),j)
j.delete()
k=B.a([],r)
i=new B.aO(a5,A.ao,e,e,k)
k.push(new B.b5(o-4,m))
k.push(new B.ap(o+t,m-s))
k.push(new B.ap(l+4,m))
k.push(new B.bF())
m=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
m.r=A.eq.gp(0)
j=m.H()
m=i.gbL().a.snapshot()
x.drawPath((i.e=new B.cC(m)).a,j)
j.delete()
m=o+w
l=n*0.55
k=a6-l
i=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
i.r=(a2&&A.o.E(A.k.bv(q),2)===0?A.lI:A.fz).gp(0)
j=i.H()
x.drawRect(B.c_(new B.a9(m,k,m+v,k+l)),j)
j.delete()}if(a2){for(a6=a9*20,v=a9*260,u=a0*0.8,p=0;p<70;++p){o=A.k.E(p*37+a6,d)
h=A.k.E(p*53+v,u)
s=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
s.r=A.f7.gp(0)
s.c=1.4
j=s.H()
x.drawLine.apply(x,[o,h,o-3,h+9,j])
j.delete()}a6=a9*3
if(A.o.E(A.k.bv(a6),7)===0&&A.k.E(a6,1)<0.3){a6=B.N()
a6.r=A.c.j(0.5).gp(0)
a7.aZ(new B.a9(0,0,a3,a4),a6)
r=new B.aO(a5,A.ao,e,e,B.a([],r))
r.F(new B.b5(d*0.6,t))
t=d*0.55
a5=a0*0.3
r.F(new B.ap(t,a5))
r.F(new B.ap(d*0.62,a5))
r.F(new B.ap(t,a0*0.55))
t=B.N()
t.b=A.ae
t.c=4
t.r=A.lI.gp(0)
a7.aP(r,t)}}else{for(a3=d*0.5,a4=a0*0.035,a5=3.141592653589793*A.k.D((a1-7)/2,0,1)*57.29577951308232,p=0;p<6;++p){v=d*(0.9-p*0.07)
v=B.cg(new B.u(a3,a6),v,v)
u=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
u.b=A.ae
u.c=a4
u.r=C.dfJ[p].j(0.9).gp(0)
j=u.H()
x.drawArc.apply(x,[B.c_(v),180,a5,!1,j])
j.delete()}a3=B.N()
a3.r=A.dP.gp(0)
a7.af(new B.u(d*0.86,a0*0.16),a0*0.08,a3)}for(a3=d+120,p=0;p<3;++p){o=A.k.E(a9*(8+p*4)+p*120,a3)-60
for(a4=a0*(0.12+0.1*p),g=0;g<4;++g){f=C.cic[g]
$.W()
a5=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
a5.r=(a2?A.bo:A.c.j(0.95)).gp(0)
j=a5.H()
x.drawCircle(o+f.a,a4+f.b,w,j)
j.delete()}}},
hX4(a1,a2,a3){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=a2.a,a0=a2.b
$.W()
x=B.N()
x.r=A.d9.gp(0)
a1.aZ(new B.a9(0,0,0+d,0+a0),x)
w=B.N()
w.r=A.c.j(0.05).gp(0)
for(x=a1.a,v=0;v<d;v+=16){u=w.H()
x.drawLine.apply(x,[v,0,v,a0,u])
u.delete()}for(t=0;t<a0;t+=16){u=w.H()
x.drawLine.apply(x,[0,t,d,t,u])
u.delete()}s=d*0.14
r=a0*0.2
q=a0*0.08
p=B.bx(new B.a9(s,r,s+d*0.72,r+a0*0.5),new B.aT(q,q))
o=new B.aO($.W().r,A.ao,null,null,B.a([],y.v))
o.F(new B.iJ(p))
r=B.N()
r.b=A.ae
r.c=5
r.r=A.br.gp(0)
a1.aP(o,r)
n=new B.Sh(new B.vw(B.x2(o),!1,B.a([],y.L))).gI(0)
r=n.a
m=n.b
r.js()
l=r.e
k=l[m].b
k===$&&B.c()
k=k.a.length()
r.js()
j=l[m].b
j===$&&B.c()
i=A.k.E(a3*k/5,j.a.length())
for(h=0;h<10;++h){r.js()
k=l[m].b
k===$&&B.c()
k=A.k.E(i-h*9,k.a.length())
r.js()
g=l[m].MB(k).a
k=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
k.r=A.dP.j(1-h*0.09).gp(0)
k.z=L.R6
u=k.H()
x.drawCircle(g.a,g.b,6-h*0.5,u)
u.delete()}x=a0*0.45
r=B.bx(B.cg(new B.u(s,x),a0*0.22,a0*0.12),A.io)
m=B.N()
m.r=A.cZ.gp(0)
a1.aD(r,m)
D.G8(a1,"+",new B.u(s-5,a0*0.33),a0*0.07,A.c,A.bg,0,null)
f=(Math.sin(a3*2)+1)/2
e=new B.u(d*0.86,x)
x=B.N()
x.r=A.dP.j(0.25+0.5*f).gp(0)
x.z=H.Hx
a1.af(e,a0*0.16,x)
x=B.N()
x.r=B.aq(A.bJ,A.oF,f).gp(0)
a1.af(e,q,x)
D.G8(a1,"Electricity needs a full loop!",new B.u(0,a0*0.74),a0*0.075,A.fU,A.L,0,d)},
hQy(a4,a5,a6){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=a5.a,a1=a5.b,a2=0+a0,a3=0+a1
$.W()
x=B.N()
x.sar(C.bXG.aw(0,new B.a9(0,0,a2,a3)))
a4.aZ(new B.a9(0,0,a2,a3),x)
x=a1*0.82
a3=B.N()
a3.r=A.d9.gp(0)
a4.aZ(new B.a9(0,x,a2,x+a1*0.18),a3)
for(a2=a0*0.1,a3=a4.a,w=0;w<7;++w){v=a0*(0.05+w*0.15)
u=a1*(0.1+0.07*A.o.E(w*5,4))
t=x-u
s=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
s.r=A.az.gp(0)
r=s.H()
a3.drawRect(B.c_(new B.a9(v,t,v+a2,t+u)),r)
r.delete()}for(a2=a1*0.2,t=a6*0.55,q=0;q<4;++q){s=t+q*0.27
p=A.k.E(s,1)
o=A.k.bv(s)*7+q*3
n=a0*(0.15+0.7*A.k.E(o*0.37,1))
m=a1*(0.2+0.25*A.k.E(o*0.53,1))
l=C.aul[A.o.E(Math.abs(o),5)]
if(p<0.3){$.W()
s=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
s.r=A.c.gp(0)
r=s.H()
a3.drawCircle(n,x-(x-m)*(p/0.3),2.5,r)
r.delete()}else{w=(p-0.3)/0.7
for(s=w*w*a1*0.08,k=1-w,j=2.4*k+0.4,i=0;i<28;++i){h=i*3.141592653589793*2/28
g=a2*A.dV.az(0,w)
f=Math.cos(h)
e=Math.sin(h)
$.W()
d=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
d.r=l.j(A.k.D(k,0,1)).gp(0)
d.z=C.dnW
r=d.H()
a3.drawCircle(n+f*g,m+e*g+s,j,r)
r.delete()}}}},
hXL(a4,a5,a6){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=a5.a,d=a5.b,a0=0+e,a1=0+d,a2=$.W(),a3=B.N()
a3.sar(C.aou.aw(0,new B.a9(0,0,a0,a1)))
a4.aZ(new B.a9(0,0,a0,a1),a3)
for(a1=a4.a,a3=y.v,x=0;x<2;++x,a2=w){w=B.a([],a3)
v=new B.aO(a2.r,A.ao,null,null,w)
w.push(new B.b5(0,d))
for(a2=x===0,u=0;u<=e;u+=6){t=a2?8:20
s=a2?0.55:0.68
r=a2?50:34
r=new B.ap(u,d*s+Math.sin((u+a6*t)/r)*d*0.06)
w.push(r)
t=v.f
if(t!=null)r.bA(t)
t=v.e
if(t!=null)t.a.delete()
v.e=null}t=new B.ap(e,d)
w.push(t)
w=v.f
if(w!=null)t.bA(w)
w=v.e
if(w!=null)w.a.delete()
v.e=null
w=$.W()
t=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
t.r=(a2?A.Eq:A.Aq).gp(0)
q=t.H()
a2=v.e
a1.drawPath((a2==null?v.e=new B.cC(v.gbL().a.snapshot()):a2).a,q)
q.delete()}a2=d*0.8
a3=B.N()
a3.r=A.br.gp(0)
a4.aZ(new B.a9(0,a2,a0,a2+d*0.04),a3)
for(u=-A.k.E(a6*80,24),a0=d*0.84,a3=d*0.03,w=a0+a3;u<e;u+=24){t=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
t.r=A.fz.gp(0)
q=t.H()
a1.drawRect(B.c_(new B.a9(u,a0,u+8,w)),q)
q.delete()}p=Math.sin(a6*14)*1.2
o=e*0.12
for(a0=a2+p,a2=d*0.025,w=e*0.012,t=d*0.02,s=d*0.62+p,a3=s+a3,r=a3+d*0.06,n=s+d*0.18,m=0;m<4;++m){l=m===0
k=o+e*(l?0.16:0.15)
j=B.bx(new B.a9(o,s,k,n),new B.aT(t,t))
i=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
i.r=(l?A.bz:C.d_h[m-1]).gp(0)
q=i.H()
a1.drawRRect(B.er(j),q)
q.delete()
for(k-=o,j=k*0.18,h=0;h<3;++h){i=o+k*(0.12+h*0.28)
g=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
g.r=A.f7.gp(0)
q=g.H()
a1.drawRect(B.c_(new B.a9(i,a3,i+j,r)),q)
q.delete()}j=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
j.r=A.bj.gp(0)
q=j.H()
a1.drawCircle(o+k*0.25,a0,a2,q)
q.delete()
j=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
j.r=A.bj.gp(0)
q=j.H()
a1.drawCircle(o+k*0.75,a0,a2,q)
q.delete()
o+=k+w}for(a0=a6*0.8,a2=e*0.2,a3=d*0.6,m=0;m<5;++m){f=A.k.E(a0+m*0.2,1)
w=f*d
s=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
s.r=A.c.j(0.7*(1-f)).gp(0)
q=s.H()
a1.drawCircle(a2-f*e*0.12,a3-w*0.25,t+w*0.04,q)
q.delete()}},
hVW(a2,a3,a4){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=a3.a,d=a3.b,a0=0+e,a1=0+d
$.W()
x=B.N()
w=a4*2
v=B.aq(A.jb,A.f8,(Math.sin(w)+1)/2)
v.toString
x.sar(new B.a8(A.ax,A.aC,A.x,B.a([v,A.az],y.O),null,null).aw(0,new B.a9(0,0,a0,a1)))
a2.aZ(new B.a9(0,0,a0,a1),x)
for(a0=a2.a,a1=d*0.86,x=e/8-2,v=d*0.14,u=a1+v,t=0;t<8;++t){s=e*t/8
r=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
r.r=(A.k.E(w+t,2)<1?A.bX:A.aP).j(0.5).gp(0)
q=r.H()
a0.drawRect(B.c_(new B.a9(s,a1,s+x,u)),q)
q.delete()}a1=a4*6
p=Math.sin(a1)
J.by(a0.save())
x=-d
a0.translate(e*0.5,d*0.55+Math.abs(p)*x*0.03)
a2.j3(0,p*0.06)
u=d*0.26
s=d*0.3
r=d*0.04
o=B.bx(B.cg(A.J,s,u),new B.aT(r,r))
n=B.N()
n.sar(C.bY4.aw(0,B.cg(A.J,s,u)))
a2.aD(o,n)
n=d*0.08
v=B.cg(new B.u(0,d*0.02),n,v)
o=B.N()
o.r=A.b9.j(0.7).gp(0)
a2.aZ(v,o)
o=B.bx(B.cg(new B.u(0,x*0.25),d*0.17,d*0.22),new B.aT(r,r))
v=B.N()
v.r=A.cr.gp(0)
a2.aD(o,v)
m=A.k.E(a4*1.3,1)>0.08
for(v=x*0.26,u=d*0.025,l=0;l<2;++l){k=C.chQ[l]
s=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
s.r=(m?A.b9:A.f8).gp(0)
q=s.H()
a0.drawCircle(k*d,v,u,q)
q.delete()}v=B.N()
v.r=A.ad.gp(0)
v.c=3
a2.bE(new B.u(0,x*0.335),new B.u(0,x*0.38),v)
v=B.N()
v.r=A.ay.gp(0)
a2.af(new B.u(0,x*0.39),d*0.015,v)
for(v=-p,u=d*0.035,s=d*0.15,o=d*0.28,x*=0.08,l=0;l<2;++l){j=C.oa[l]
J.by(a0.save())
i=j*d
a0.translate(i*0.14,x)
h=j>0
a0.rotate(j*(0.7+Math.sin(a1+(h?0:3.141592653589793))*0.8)*180/3.141592653589793,0,0)
g=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
g.r=A.bJ.gp(0)
g.c=u
g.d=A.bQ
q=g.H()
a0.drawLine.apply(a0,[0,0,i*0.16,0,q])
q.delete()
a0.restore()
h=h?p:v
g=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
g.r=A.bJ.gp(0)
g.c=r
g.d=A.bQ
q=g.H()
a0.drawLine.apply(a0,[i*0.06,s,i*0.08,o+h*d*0.02,q])
q.delete()}a0.restore()
for(a0=a4*0.7,a1=d*0.7,t=0;t<4;++t){f=A.k.E(a0+t*0.25,1)
D.G8(a2,"\u266a",new B.u(e*(0.2+0.18*t)+Math.sin(w+t)*8,a1-f*d*0.5),n,A.c.j(1-f),A.bg,0,null)}},
hQJ(a1,a2,a3){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=a2.a,e=a2.b,d=0+f,a0=0+e
$.W()
x=B.N()
x.sar(C.bWF.aw(0,new B.a9(0,0,d,a0)))
a1.aZ(new B.a9(0,0,d,a0),x)
x=B.N()
x.r=A.dP.gp(0)
a1.af(new B.u(f*0.12,e*0.16),e*0.07,x)
x=e*0.72
a0=B.N()
a0.r=A.Eq.gp(0)
a1.aZ(new B.a9(0,x,d,x+e*0.28),a0)
for(d=a3*0.25,a0=e*0.78,x=a1.a,w=e*0.016,v=a3*0.3,u=e*0.022,t=0;t<9;++t){s=f*(0.07+t*0.105)
r=A.k.D(A.k.E(d-t*0.12,3),0,1)
q=A.o.E(t,3)
p=s+Math.sin(a3+t)*3
q=a0-e*(0.12+0.05*q)*r
o=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
o.r=A.hk.gp(0)
o.c=3
n=o.H()
x.drawLine.apply(x,[s,a0,p,q,n])
n.delete()
if(r>0.7){for(m=0;m<6;++m){l=m*3.141592653589793/3+v
o=Math.cos(l)
k=Math.sin(l)
j=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
j.r=C.awl[A.o.E(t,5)].gp(0)
n=j.H()
x.drawCircle(p+o*e*0.028,q+k*e*0.028,u,n)
n.delete()}o=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
o.r=A.dP.gp(0)
n=o.H()
x.drawCircle(p,q,w,n)
n.delete()}}for(d=e*0.03,a0=e*0.05,w=e*0.06,v=a3*0.9,u=a3*1.3,q=a3*18,t=0;t<3;++t){s=f*(0.2+0.28*t)+Math.sin(v+t*2)*f*0.12
i=e*(0.3+0.1*t)+Math.cos(u+t)*e*0.06
h=Math.abs(Math.sin(q+t))
for(p=a0*h+2,o=(t+2)%5,g=0;g<2;++g){k=B.cg(new B.u(s+C.oa[g]*e*0.025*h,i),w,p)
j=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
j.r=C.awl[o].gp(0)
n=j.H()
x.drawOval(B.c_(k),n)
n.delete()}p=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
p.r=A.bj.gp(0)
p.c=2
n=p.H()
x.drawLine.apply(x,[s,i-d,s,i+d,n])
n.delete()}},
h1n(d,e,f,g,h,i){return B.a6(d,!1).ck(B.uE(null,!1,!0,!0,new D.fP9(e,h,g,i,f),A.eK,null,A.pQ,new D.fPa(),y.S))},
xz:function xz(d,e){this.a=d
this.b=e},
fpj:function fpj(d,e,f){this.a=d
this.b=e
this.c=f},
fP9:function fP9(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fPa:function fPa(){},
VY:function VY(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aDV:function aDV(d,e){var _=this
_.e=_.d=$
_.f=-1
_.r=!1
_.w=null
_.x=0
_.y=!0
_.z=null
_.bs$=d
_.a8$=e
_.c=_.a=null},
eEW:function eEW(d){this.a=d},
eEV:function eEV(d){this.a=d},
eEU:function eEU(d,e){this.a=d
this.b=e},
eEX:function eEX(d,e){this.a=d
this.b=e},
eF5:function eF5(d){this.a=d},
eF4:function eF4(d){this.a=d},
eF3:function eF3(){},
eEZ:function eEZ(d){this.a=d},
eF_:function eF_(d){this.a=d},
eF0:function eF0(d){this.a=d},
eF1:function eF1(d){this.a=d},
eEY:function eEY(d){this.a=d},
eF2:function eF2(d){this.a=d},
eET:function eET(d){this.a=d},
eES:function eES(d){this.a=d},
btQ:function btQ(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.a=h},
aLK:function aLK(){},
h1s(d){var x
A:{if("lgtv"===d){x="lg"
break A}if("sonytv"===d){x="sony"
break A}if("appletv"===d){x="apple"
break A}if("bangtv"===d){x="bo"
break A}x="samsung"
break A}return x},
iar(d){var x,w=D.h1s(d)
A:{if("lg"===w){x=A.hi
break A}if("sony"===w){x=A.dy
break A}if("apple"===w){x=A.bN
break A}if("bo"===w){x=C.tg
break A}x=A.aP
break A}return x},
ark:function ark(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bk1:function bk1(){this.d=0
this.c=this.a=null},
eEQ:function eEQ(d,e){this.a=d
this.b=e},
eER:function eER(d,e){this.a=d
this.b=e},
eEN:function eEN(){},
eEM:function eEM(d){this.a=d},
eEO:function eEO(d){this.a=d},
eEP:function eEP(d){this.a=d},
eEK:function eEK(d){this.a=d},
eEL:function eEL(d,e){this.a=d
this.b=e},
hGh(b3,b4,b5,b6,b7){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9=A.o.an(22050*b4,1000),b0=a9*2,b1=new DataView(new ArrayBuffer(44+b0)),b2=new D.ceK(b1)
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
x=new B.eM()
x.dC(3)
w=3
v=0.006
u=!1
t=0
switch(b7){case"piano":s=C.cTD
r=C.cYN
w=3.4
break
case"organ":s=C.cXH
r=C.dbK
v=0.02
u=!0
break
case"bell":s=C.cPq
r=C.cOh
w=2.4
break
case"pluck":s=C.cTC
r=C.cA8
w=7
break
case"synth":s=C.dcB
r=C.dei
v=0.012
u=!0
break
case"flute":s=C.diu
r=C.caA
v=0.07
u=!0
t=0.035
break
default:s=C.aoU
r=C.aoU}b0=s.length
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
break A}if(p){a3=A.k.E(e/6.283185307179586,1)*1.2-0.6
break A}a3=Math.sin(e)
break A}a4=a3*(Math.min(1,d/120)*Math.pow(a1,1.6))}b1.setInt16(44+d*2,A.o.D(A.k.V(a4*0.8*32e3),-32768,32767),!0)}return J.eT(A.dD.gaN(b1))},
dE(d,e,f,g,h,i){return D.hGi(d,e,f,g,h,i)},
hGi(d,e,f,g,h,i){var x=0,w=B.j(y.H),v=1,u=[],t,s,r,q,p,o
var $async$dE=B.e(function(j,k){if(j===1){u.push(k)
x=v}for(;;)switch(x){case 0:v=3
t=""+A.k.V(d)+"|"+f+"|"+i+"|"+B.t(g)+"|"+e
s=$.hGg.c8(0,t,new D.ceM(d,f,i,g,e))
if($.ceJ.length<12){q=B.ai2()
q.ML(A.aMq)
$.ceJ.push(q)}q=$.haL
$.haL=q+1
r=$.ceJ[A.o.E(q,$.ceJ.length)]
x=6
return B.b(J.htw(r,new B.a2O(s,null),h),$async$dE)
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
return B.i($async$dE,w)},
ceK:function ceK(d){this.a=d},
ceM:function ceM(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h}},C,M,N
J=c[1]
B=c[0]
A=c[2]
G=c[120]
E=c[122]
H=c[125]
I=c[175]
K=c[94]
F=c[116]
L=c[95]
D=a.updateHolder(c[26],D)
C=c[92]
M=c[104]
N=c[234]
D.wi.prototype={}
D.vK.prototype={}
D.xz.prototype={}
D.VY.prototype={
T(){return new D.aDV(null,null)}}
D.aDV.prototype={
gadx(){var x,w=this,v=w.d
if(v===$){x=B.bj(null,A.nY,null,1,null,w)
x.cr(0)
w.d!==$&&B.bL()
w.d=x
v=x}return v},
gDe(){var x=this.e
return x===$?this.e=this.a.e:x},
a_(){var x=this
x.a1()
x.w=B.cM(x.a.r,x.gaYy())
x.aUF()
D.dE(520,"",80,0,0.25,"tri")},
aUF(){var x=this.z
if(x!=null)x.a6(0)
this.z=B.cM(A.k2,new D.eEW(this))},
c6d(){var x=this.c
if(x!=null&&B.a6(x,!1).py()){x=this.c
x.toString
B.a6(x,!1).O(this.gDe())}},
aiu(){var x=this,w=x.w
if(w!=null)w.a6(0)
x.w=null
x.y=!0
x.aUF()},
awo(d){this.m(new D.eEU(this,d))
D.dE(900,"",40,0,0.3,"noise")},
b_j(d){this.m(new D.eEX(this,d))
D.dE(700,"",60,0,0.3,"tri")},
q(){var x=this,w=x.w
if(w!=null)w.a6(0)
w=x.z
if(w!=null)w.a6(0)
x.gadx().q()
x.bvn()},
B(d){var x,w,v,u,t=this,s=null,r=B.m(10),q=B.I(t.gc6e(),A.q,6),p=B.a([new B.ac(0,A.G,D.iar(t.a.d).j(0.25),A.J,40)],y.V),o=B.m(4),n=y.p,m=B.a([B.c6(t.gadx(),new D.eF4(t),s)],n)
if(t.r)m.push(t.bAP())
r=B.av(new B.fH(1.7777777777777777,B.p(s,B.bw(o,new B.an(A.W,s,A.b0,A.r,m,s),A.aq),A.f,s,s,new B.o(s,s,q,r,p,s,A.n),s,s,s,s,s,s,s,s),s),s,s,s)
q=t.y
p=q?1:0
o=B.nz(s,A.aW,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s)
o=B.aH(s,s,s,s,B.X(A.cD,A.c,s,s,s,s),s,s,s,t.gaYy(),s,s,s,o,"Back to the board",s)
m=B.m(20)
x=t.f
w=t.a
o=B.B(B.a([o,A.b7,B.p(s,B.d(x>=0?w.c+" \xb7 "+C.k8[x].a:w.c+" \xb7 CH "+(t.gDe()+1),s,s,s,s,s,s,M.zB,s,s,s),A.f,s,s,new B.o(A.aW,s,s,m,s,s,A.n),s,s,s,s,A.mr,s,s,s)],n),A.m,s,A.e,A.j,0,s,s)
m=t.cn5()
x=A.w.j(0.65)
w=B.m(18)
v=t.f
v=B.d(v>=0?C.k8[v].a:C.PZ[t.gDe()].a,s,s,s,s,s,s,A.hF,A.L,s,s)
u=t.f
return B.c7(s,A.w,B.bl(!0,B.aC(A.c7,new B.an(A.W,s,A.b0,A.r,B.a([r,B.CZ(B.e1(B.w(B.a([new B.D(C.bqM,o,s),A.am,m,A.b7,B.p(s,B.w(B.a([v,B.d(u>=0?C.k8[u].c:C.PZ[t.gDe()].b,s,s,s,s,s,s,K.a7M,A.L,s,s)],n),A.m,s,A.e,A.O,0,A.p),A.f,s,s,new B.o(x,s,s,w,s,s,A.n),s,s,s,A.bm,A.bS,s,s,s)],n),A.m,s,A.e,A.j,0,A.p),!q,s),A.bc,A.ie,p)],n),s),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new D.eF5(t),s,s,s,s,s,s,!1,A.a7),!0,!1,A.af,!0,!0),s,!1,!1,s,s)},
cn5(){var x=this,w=null,v=new D.eF3(),u=A.w.j(0.72),t=B.m(22),s=B.I(A.aP.j(0.5),A.q,1)
return B.p(w,B.B(B.a([v.$3(A.yi,"CH \u2212",new D.eEZ(x)),v.$3(A.hz,"CH +",new D.eF_(x)),v.$5$color$on(A.G8,"TV",new D.eF0(x),A.aP,x.f<0),v.$5$color$on(A.y2,"APPS",new D.eF1(x),A.bu,x.r),v.$5$color$on(A.Bx,"ADS",new D.eF2(x),A.bX,x.f===0)],y.p),A.m,w,A.e,A.O,0,w,w),A.f,w,w,new B.o(u,w,s,t,w,w,A.n),w,w,w,w,A.Z4,w,w,w)},
bAP(){return new D.ark(this.a.d,this.gcbR(),new D.eET(this),null)},
gc6e(){var x,w=D.h1s(this.a.d)
A:{if("apple"===w){x=A.dy
break A}if("bo"===w){x=C.Ef
break A}if("sony"===w){x=C.b7s
break A}if("lg"===w){x=A.ea
break A}x=A.cu
break A}return x}}
D.btQ.prototype={
a4(d,e){var x=this
return D.h15(d,e,x.b,x.d,x.e,x.c)},
av(d){return!0}}
D.aLK.prototype={
q(){var x=this,w=x.a8$
if(w!=null)w.a3(0,x.gbx())
x.a8$=null
x.a2()},
aR(){this.b_()
this.aY()
this.by()}}
D.ark.prototype={
T(){return new D.bk1()},
a5c(d,e){return this.d.$1(e)}}
D.bk1.prototype={
aYz(d){this.m(new D.eEQ(this,d))
this.a.a5c(0,d)},
B(d){var x,w=this,v=D.h1s(w.a.c)
A:{if("lg"===v){x=w.bZX()
break A}if("sony"===v){x=w.cuO()
break A}if("apple"===v){x=w.c6f()
break A}if("bo"===v){x=w.bBJ()
break A}x=w.cp8()
break A}return x},
gady(){var x=new B.S(Date.now(),0,!1)
return A.a.aT(A.o.u(B.dk(x)),2,"0")+":"+A.a.aT(A.o.u(B.h0(x)),2,"0")},
awp(d,e,f,g,h,i,j){var x,w,v=null,u=C.k8[d],t=this.d===d,s=u.d,r=B.aq(s,A.w,0.55)
r.toString
r=B.a([s,r],y.O)
s=B.m(h)
if(t)x=i
else x=A.K
x=B.I(x,A.q,t?2.5:0)
w=B.a([B.d(u.b,v,v,v,v,v,v,B.l(v,v,v,v,v,v,v,v,v,v,v,e,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],y.p)
if(g)w.push(new B.D(A.vl,B.d(u.a,v,1,A.a2,v,v,v,A.TM,v,v,v),v))
return B.aC(v,B.p(v,B.w(w,A.m,v,A.b8,A.j,0,A.p),A.f,v,v,new B.o(v,v,x,s,v,new B.a8(A.ax,A.aC,A.x,r,v,v),A.n),v,f,v,v,v,v,v,j),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new D.eER(this,d),v,v,v,v,v,v,!1,A.a7)},
aYA(d,e,f,g,h,i){return this.awp(d,e,f,!1,g,h,i)},
cp8(){var x,w,v,u,t,s,r=this,q=null,p=r.a.e,o=y.p,n=B.B(B.a([C.fmC,A.ab,C.feY,A.b7,C.bOu,A.ab,C.bKt,A.ab,B.d(r.gady(),q,q,q,q,q,q,C.aQu,q,q,q)],o),A.m,q,A.e,A.j,0,q,q),m=C.k8[r.d],l=B.d(m.a,q,q,q,q,q,q,A.m6,q,q,q)
m=B.d(m.c,q,1,A.a2,q,q,q,C.f6U,q,q,q)
x=A.c.j(0.08)
w=B.a([],o)
for(v=0;v<2;++v){u=new B.aT(8,8)
w.push(B.p(q,B.X(C.chE[v],A.ad,q,q,q,17),A.f,q,q,new B.o(A.bF,q,q,new B.bp(u,u,u,u),q,q,A.n),q,34,q,A.M3,q,q,q,34))}u=B.a([],o)
for(t=0;t<8;++t){s=r.d===t?1.12:1
u.push(new B.D(A.M3,new B.yx(r.awp(t,14,44,!0,8,A.aP,52),s,A.bc,A.fH,q,q),q))}w.push(B.E(B.c9(B.B(u,A.m,q,A.e,A.j,0,q,q),A.r,q,A.y,q,q,q,q,A.aO),1))
return B.aC(q,B.p(q,B.w(B.a([n,A.b7,new B.bI(A.a3,q,q,l,q),new B.bI(A.a3,q,q,m,q),A.am,B.p(q,B.B(w,A.m,q,A.e,A.j,0,q,q),A.f,q,q,new B.o(x,q,q,A.Vh,q,q,A.n),q,q,q,q,A.Mv,q,q,q)],o),A.m,q,A.e,A.j,0,A.p),A.f,q,q,C.b_A,q,q,q,q,E.ah_,q,q,q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,p,q,q,q,q,q,q,!1,A.a7)},
bZX(){var x=null,w=this.a.e,v=y.p
return B.aC(x,B.p(x,B.w(B.a([B.B(B.a([B.p(x,C.fsC,A.f,x,x,new B.o(A.hi,x,x,B.m(10),x,x,A.n),x,x,x,x,A.nf,x,x,x),A.bp,C.flA,A.b7,B.d(this.gady(),x,x,x,x,x,x,A.De,x,x,x)],v),A.m,x,A.e,A.j,0,x,x),A.b7,new B.a7(x,62,B.hJ(x,new D.eEM(this),8,x,x,A.aO,new D.eEN(),!1),x)],v),A.F,x,A.e,A.j,0,A.p),A.f,x,x,C.b_L,x,x,x,x,N.Ma,x,x,x),A.y,!1,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,w,x,x,x,x,x,x,!1,A.a7)},
cuO(){var x,w,v,u,t=this,s=null,r=C.k8[t.d],q=t.a.e,p=y.p,o=B.a([B.p(s,C.eMv,A.f,s,s,new B.o(A.dr,s,s,B.m(12),s,s,A.n),s,s,s,s,A.xN,s,s,s),A.ab],p)
for(x=0;x<3;++x){w=C.d8O[x]
v=w==="Apps"?A.c:A.aA
o.push(new B.D(A.iY,new B.y(w,s,new B.G(!0,v,s,s,s,s,9.5,A.N,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s),s,s,s,s,s,s,s,s,s),s))}o.push(A.b7)
o.push(B.d(t.gady(),s,s,s,s,s,s,C.f6h,s,s,s))
o=B.B(o,A.m,s,A.e,A.j,0,s,s)
v=r.d
u=B.aq(v,A.w,0.7)
u.toString
u=B.a([v,u],y.O)
v=B.m(10)
return B.aC(s,B.p(s,B.w(B.a([o,A.h1,B.E(B.B(B.a([B.E(B.p(s,B.w(B.a([B.d(r.b,s,s,s,s,s,s,A.ph,s,s,s),B.d(r.a,s,s,s,s,s,s,A.nx,s,s,s),B.d(r.c,s,2,A.a2,s,s,s,C.fcr,s,s,s),A.cV,B.aC(s,B.p(s,C.fiw,A.f,s,s,new B.o(A.c,s,s,B.m(10),s,s,A.n),s,s,s,s,A.xN,s,s,s),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new D.eEO(t),s,s,s,s,s,s,!1,A.a7)],p),A.F,s,A.lZ,A.j,0,A.p),A.f,s,s,new B.o(s,s,s,v,s,new B.a8(A.a3,A.a8,A.x,u,s,s),A.n),s,s,s,s,A.cp,s,s,s),5),A.ab,B.E(B.ii(!0,s,s,A.y,C.eSx,new D.eEP(t),8,A.af,s,A.ag,!1),6)],p),A.m,s,A.e,A.j,0,s,s),1)],p),A.F,s,A.e,A.j,0,A.p),A.f,C.bi2,s,s,s,s,s,s,A.fJ,s,s,s),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,q,s,s,s,s,s,s,!1,A.a7)},
c6f(){var x,w,v,u,t=this,s=null,r=t.a.e,q=y.p,p=B.B(B.a([C.bP5,A.qo,C.fyt,A.b7,B.d(t.gady(),s,s,s,s,s,s,A.Dj,s,s,s)],q),A.m,s,A.e,A.j,0,s,s),o=B.a([],q)
for(x=0;x<8;++x){w=t.d===x
v=w?6:0
u=w?C.de3:A.Qi
w=w?1.18:1
o.push(new B.D(A.eS,B.df(s,new B.yx(t.aYA(x,20,44,12,A.c,44),w,A.bc,A.eH,s,s),s,s,A.bc,new B.o(s,s,s,s,u,s,A.n),A.eH,s,s,new B.Q(0,0,0,v),s,s,s,s),s))}return B.aC(s,B.p(s,B.w(B.a([p,A.b7,new B.a7(s,68,B.c9(B.B(o,A.dA,s,A.e,A.j,0,s,s),A.r,s,A.y,s,s,s,s,A.aO),s),A.at,B.d(C.k8[t.d].a,s,s,s,s,s,s,A.on,s,s,s)],q),A.m,s,A.e,A.j,0,A.p),A.f,s,s,C.b_C,s,s,s,s,C.Yn,s,s,s),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,r,s,s,s,s,s,s,!1,A.a7)},
bBJ(){var x,w,v,u,t,s,r=this,q=null,p=r.a.e,o=C.k8[r.d],n=y.p
o=B.E(B.w(B.a([C.fi5,A.b7,B.d(o.b,q,q,q,q,q,q,A.rO,q,q,q),A.at,B.d(o.a,q,q,q,q,q,q,C.eZW,q,q,q),A.bD,B.d(o.c,q,q,q,q,q,q,C.fcL,q,q,q),A.am,B.aC(q,B.p(q,C.fAA,A.f,q,q,C.b07,q,q,q,q,C.bpW,q,q,q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new D.eEK(r),q,q,q,q,q,q,!1,A.a7),A.b7],n),A.F,q,A.e,A.j,0,A.p),4)
x=B.p(q,q,A.f,C.bg2,q,q,q,q,q,A.fW,q,q,q,0.6)
w=B.a([],n)
for(v=0;v<8;++v){u=C.k8[v]
t=r.d===v
s=t?C.tg:C.aco
t=t?12:10.5
w.push(B.aC(q,new B.D(A.xz,new B.y(u.a,q,new B.G(!0,s,q,"serif",q,q,t,A.k3,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q),q,q,q,q,q,q,q,q,q),q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new D.eEL(r,v),q,q,q,q,q,q,!1,A.a7))}return B.aC(q,B.p(q,B.B(B.a([o,x,B.E(B.cw(w,q,q,q,q,A.ag,!1),3)],n),A.m,q,A.e,A.j,0,q,q),A.f,C.blj,q,q,q,q,q,q,A.Fm,q,q,q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,p,q,q,q,q,q,q,!1,A.a7)}}
var z=a.updateTypes(["~()","VY(Y,br<K>,br<K>)","~(H)"])
D.fp6.prototype={
$1(d){var x=null,w=B.h6(x,x,1,x,B.d7(x,x,x,x,x,x,x,x,x,B.l(x,x,this.b,x,x,x,x,x,x,x,x,d,x,x,A.u,x,x,!0,x,x,x,x,x,x,x,x),this.a),A.a4,A.c6,x,A.dS,A.c5)
w.eo()
return w},
$S:752}
D.fp0.prototype={
$1(d){return Math.min(this.a*0.085,this.b*0.44/(d.length*0.62))},
$S:1946}
D.fgD.prototype={
$1(d){var x=this,w=null,v=x.c?A.u:A.a5
v=B.h6(w,w,1,w,B.d7(w,w,w,w,w,w,w,w,w,B.l(w,w,x.b,w,w,w,w,w,w,w,w,d,w,w,v,w,w,!0,w,x.d,w,w,w,w,w,w),x.a),A.a4,A.c6,w,A.dS,A.c5)
v.eo()
return v},
$S:752}
D.fpj.prototype={
$5(d,e,f,g,h){var x,w,v,u,t,s,r,q=this
if(g===0||h<=0)return
x=f*A.k.D(h,0,1)
w=d.ad(0,new B.u(Math.cos(e)*x,-Math.sin(e)*x))
v=q.a
$.W()
u=B.N()
u.r=A.fz.gp(0)
u.c=g*2.2
u.d=A.bQ
v.bE(d,w,u)
if(h>0.95){t=Math.sin(q.b*1.6+g)*0.04
u=f*0.72
s=g-1
r=h*1.6-0.9
q.$5(w,e+0.5+t,u,s,r-(5-g)*0)
q.$5(w,e-0.5+t,u,s,r)}if(g===1&&h>0.5){u=B.N()
u.r=B.aq(A.cZ,A.b2,(Math.sin(q.b*2+w.a)+1)/2).gp(0)
v.af(w,q.c*0.035,u)}},
$S:1947}
D.fP9.prototype={
$3(d,e,f){var x=this
return new D.VY(x.d,x.e,x.a,x.c,x.b,null)},
$C:"$3",
$R:3,
$S:z+1}
D.fPa.prototype={
$4(d,e,f,g){var x=y.t
return new B.cZ(e,!1,B.ip(A.A,g,null,new B.bf(B.cH(A.ct,e,null),new B.bq(0.85,1,x),x.k("bf<bJ.T>"))),null)},
$C:"$4",
$R:4,
$S:31}
D.eEW.prototype={
$0(){var x=this.a
if(x.c!=null&&!x.r)x.m(new D.eEV(x))},
$S:0}
D.eEV.prototype={
$0(){return this.a.y=!1},
$S:0}
D.eEU.prototype={
$0(){var x,w=this.a
w.f=-1
w.e=A.o.E(w.gDe()+this.b,10)
if(w.gDe()<0)w.e=w.gDe()+10
x=w.gadx().y
x=x==null?null:A.o.an(x.a,1000)
w.x=x==null?0:x
w.aiu()},
$S:0}
D.eEX.prototype={
$0(){var x=this.a
x.f=this.b
x.r=!1
x.aiu()},
$S:0}
D.eF5.prototype={
$0(){var x=this.a
return x.m(x.gczN())},
$S:0}
D.eF4.prototype={
$2(d,e){var x=null,w=this.a,v=w.gadx().y,u=v==null?x:A.o.an(v.a,1000),t=(u==null?0:u)/1000,s=w.x===0&&w.a.f?t:99
return B.b3(x,x,x,new D.btQ(w.gDe(),w.f,t,s,x),A.f2)},
$S:71}
D.eF3.prototype={
$5$color$on(d,e,f,g,h){var x=null,w=h?g.j(0.28):A.c.j(0.08),v=B.m(14),u=B.I(h?g:A.b1,A.q,1)
return B.aC(x,B.p(x,B.w(B.a([B.X(d,g,x,x,x,20),A.uI,B.d(e,x,x,x,x,x,x,B.l(x,x,g,x,x,x,x,x,x,x,x,9.5,x,x,A.H,x,x,!0,x,x,x,x,x,x,x,x),x,x,x)],y.p),A.m,x,A.e,A.O,0,A.p),A.f,x,x,new B.o(w,x,u,v,x,x,A.n),x,x,x,A.jm,A.kU,x,x,56),A.y,!1,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,f,x,x,x,x,x,x,!1,A.a7)},
$3(d,e,f){return this.$5$color$on(d,e,f,A.c,!1)},
$4$color(d,e,f,g){return this.$5$color$on(d,e,f,g,!1)},
$S:1948}
D.eEZ.prototype={
$0(){return this.a.awo(-1)},
$S:0}
D.eF_.prototype={
$0(){return this.a.awo(1)},
$S:0}
D.eF0.prototype={
$0(){return this.a.awo(0)},
$S:0}
D.eF1.prototype={
$0(){var x=this.a
return x.m(new D.eEY(x))},
$S:0}
D.eEY.prototype={
$0(){var x=this.a
x.r=!x.r
x.aiu()},
$S:0}
D.eF2.prototype={
$0(){return this.a.b_j(0)},
$S:0}
D.eET.prototype={
$0(){var x=this.a
return x.m(new D.eES(x))},
$S:0}
D.eES.prototype={
$0(){return this.a.r=!1},
$S:0}
D.eEQ.prototype={
$0(){return this.a.d=this.b},
$S:0}
D.eER.prototype={
$0(){return this.a.aYz(this.b)},
$S:0}
D.eEN.prototype={
$2(d,e){return A.bp},
$S:36}
D.eEM.prototype={
$2(d,e){var x=null,w=this.a,v=w.d===e?1.1:1
v=B.a([B.vm(w.aYA(e,18,46,6,A.c,80),A.bc,A.fH,v)],y.p)
if(w.d===e)v.push(new B.D(A.vl,B.d(C.k8[e].a,x,x,x,x,x,x,C.fb_,x,x,x),x))
return B.w(v,A.m,x,A.e,A.O,0,A.p)},
$S:705}
D.eEO.prototype={
$0(){var x=this.a
return x.a.a5c(0,x.d)},
$S:0}
D.eEP.prototype={
$2(d,e){return this.a.awp(e,15,1/0,!0,8,A.c,1/0)},
$S:40}
D.eEK.prototype={
$0(){var x=this.a
return x.a.a5c(0,x.d)},
$S:0}
D.eEL.prototype={
$0(){return this.a.aYz(this.b)},
$S:0}
D.ceK.prototype={
$2(d,e){var x,w,v,u
for(x=e.length,w=this.a,v=w.$flags|0,u=0;u<x;++u){v&2&&B.aj(w,9)
w.setUint8(d+u,e.charCodeAt(u))}},
$S:460}
D.ceM.prototype={
$0(){var x=this
return D.hGh(x.a,x.b,x.c,x.d,x.e)},
$S:287};(function aliases(){var x=D.aLK.prototype
x.bvn=x.q})();(function installTearOffs(){var x=a._instance_0u,w=a._instance_1u
var v
x(v=D.aDV.prototype,"gaYy","c6d",0)
x(v,"gczN","aiu",0)
w(v,"gcbR","b_j",2)})();(function inheritance(){var x=a.mixinHard,w=a.inheritMany,v=a.inherit
w(B.hV,[D.fp6,D.fp0,D.fgD,D.fpj,D.fP9,D.fPa,D.eF3])
w(B.aD,[D.wi,D.vK,D.xz])
w(B.ag,[D.VY,D.ark])
w(B.ah,[D.aLK,D.bk1])
v(D.aDV,D.aLK)
w(B.j7,[D.eEW,D.eEV,D.eEU,D.eEX,D.eF5,D.eEZ,D.eF_,D.eF0,D.eF1,D.eEY,D.eF2,D.eET,D.eES,D.eEQ,D.eER,D.eEO,D.eEK,D.eEL,D.ceM])
w(B.kj,[D.eF4,D.eEN,D.eEM,D.eEP,D.ceK])
v(D.btQ,B.mM)
x(D.aLK,B.ca)})()
B.jW(b.typeUniverse,JSON.parse('{"VY":{"ag":[],"r":[]},"aDV":{"ah":["VY"]},"btQ":{"aB":[]},"ark":{"ag":[],"r":[]},"bk1":{"ah":["ark"]},"N4":{"ag":[],"r":[]}}'))
var y=(function rtii(){var x=B.ax
return{L:x("O<a2E>"),V:x("O<ac>"),O:x("O<v>"),v:x("O<hr>"),s:x("O<n>"),p:x("O<r>"),n:x("O<K>"),t:x("bq<K>"),i:x("K"),S:x("H"),H:x("~")}})();(function constants(){var x=a.makeConstList
C.b9w=new B.v(1,0.0196078431372549,0.03137254901960784,0.058823529411764705,A.t)
C.bjA=new B.v(1,0.043137254901960784,0.10196078431372549,0.2,A.t)
C.d5I=x([C.b9w,C.bjA],y.O)
C.bXk=new B.a8(A.b_,A.b4,A.x,C.d5I,null,null)
C.b_A=new B.o(null,null,null,null,null,C.bXk,A.n)
C.bhr=new B.v(1,0.42745098039215684,0.47843137254901963,0.5764705882352941,A.t)
C.b7P=new B.v(1,0.16862745098039217,0.1803921568627451,0.26666666666666666,A.t)
C.b8R=new B.v(1,0.4823529411764706,0.29411764705882354,0.41568627450980394,A.t)
C.dh1=x([C.bhr,C.b7P,C.b8R],y.O)
C.bVH=new B.a8(A.ax,A.aC,A.x,C.dh1,null,null)
C.b_C=new B.o(null,null,null,null,null,C.bVH,A.n)
C.aWH=new B.db(0.5,-0.6)
C.bkM=new B.v(1,0.22745098039215686,0.054901960784313725,0.10980392156862745,A.t)
C.d1c=x([C.bkM,A.ea],y.O)
C.efB=new B.bT(C.aWH,1.3,A.x,null,0,C.d1c,null,null)
C.b_L=new B.o(null,null,null,null,null,C.efB,A.n)
C.Vr=new B.o(A.bi,null,null,null,null,null,A.a6)
C.tg=new B.v(1,0.8392156862745098,0.7176470588235294,0.4823529411764706,A.t)
C.aYR=new B.ay(C.tg,1,A.q,-1)
C.aZ3=new B.bO(A.Y,A.Y,C.aYR,A.Y)
C.b07=new B.o(null,null,C.aZ3,null,null,null,A.n)
C.abY=new B.v(0.9490196078431372,0.06666666666666667,0.07450980392156863,0.09411764705882353,A.t)
C.b7s=new B.v(1,0.16470588235294117,0.16470588235294117,0.17647058823529413,A.t)
C.b7v=new B.v(1,0.00784313725490196,0.01568627450980392,0.03529411764705882,A.t)
C.aco=new B.v(1,0.6588235294117647,0.6235294117647059,0.5647058823529412,A.t)
C.Eb=new B.v(1,0.12156862745098039,0.07058823529411765,0.03529411764705882,A.t)
C.Ef=new B.v(1,0.7215686274509804,0.6980392156862745,0.6549019607843137,A.t)
C.bb0=new B.v(1,0.8784313725490196,0.6745098039215687,0.4117647058823529,A.t)
C.adh=new B.v(1,0.00784313725490196,0.011764705882352941,0.0392156862745098,A.t)
C.Ex=new B.v(1,0.06666666666666667,0.0784313725490196,0.09411764705882353,A.t)
C.ben=new B.v(1,0.011764705882352941,0.023529411764705882,0.09019607843137255,A.t)
C.AB=new B.v(1,0.09019607843137255,0.09019607843137255,0.10196078431372549,A.t)
C.L4=new B.v(1,0.054901960784313725,0.07058823529411765,0.09411764705882353,A.t)
C.bg2=new B.v(1,0.2901960784313726,0.26666666666666666,0.23529411764705882,A.t)
C.kR=new B.v(1,0.09019607843137255,0.09019607843137255,0.10980392156862745,A.t)
C.bi2=new B.v(1,0.08627450980392157,0.09411764705882353,0.10980392156862745,A.t)
C.biw=new B.v(1,0.24705882352941178,0.3843137254901961,0.07058823529411765,A.t)
C.Xo=new B.v(1,1,0.41568627450980394,0,A.t)
C.n5=new B.v(1,0.10588235294117647,0.10588235294117647,0.12156862745098039,A.t)
C.tw=new B.v(1,0.5529411764705883,0.3333333333333333,0.1411764705882353,A.t)
C.Xv=new B.v(1,1,0.9529411764705882,0.6274509803921569,A.t)
C.blj=new B.v(1,0.10196078431372549,0.09019607843137255,0.0784313725490196,A.t)
C.bpW=new B.Q(0,0,0,1)
C.tG=new B.Q(0,0,7,0)
C.bqM=new B.Q(10,10,10,0)
C.Yn=new B.Q(10,6,10,8)
C.ahi=new B.Q(14,10,10,10)
C.akK=new B.a0(62970,"MaterialIcons",!1)
C.alI=new B.a0(983316,"MaterialIcons",!1)
C.NR=new B.a0(983617,"MaterialIcons",!1)
C.bKt=new B.ae(A.BH,13,A.ad,null,null,null)
C.bOu=new B.ae(A.ff,13,A.ad,null,null,null)
C.bG5=new B.a0(983768,"MaterialIcons",!1)
C.bP5=new B.ae(C.bG5,13,A.c,null,null,null)
C.cBf=x([A.aP,A.jY,A.qR],y.O)
C.bUv=new B.a8(A.b_,A.b4,A.x,C.cBf,null,null)
C.bUB=new B.a8(A.b_,A.b4,A.x,I.PT,null,null)
C.cVN=x([A.fb,A.dQ,A.cs],y.O)
C.bUO=new B.a8(A.b_,A.b4,A.x,C.cVN,null,null)
C.cU3=x([A.dP,A.ay],y.O)
C.bVu=new B.a8(A.b_,A.b4,A.x,C.cU3,null,null)
C.dga=x([A.bN,A.c,A.bJ],y.O)
C.bVK=new B.a8(A.a3,A.a8,A.x,C.dga,null,null)
C.dgJ=x([A.fU,A.h5],y.O)
C.aou=new B.a8(A.b_,A.b4,A.x,C.dgJ,null,null)
C.d8m=x([A.dv,A.oF],y.O)
C.bWF=new B.a8(A.b_,A.b4,A.x,C.d8m,null,null)
C.bXG=new B.a8(A.b_,A.b4,A.x,F.auy,null,null)
C.d3Q=x([A.aL,A.ak],y.O)
C.bY4=new B.a8(A.b_,A.b4,A.x,C.d3Q,null,null)
C.aoU=x([1],y.n)
C.caA=x([1,2,3],y.n)
C.asx=x([1,-1],y.n)
C.St=new B.z(2,3)
C.Su=new B.z(3,4)
C.chE=x([A.lS,A.y2],B.ax("O<a0>"))
C.chQ=x([-0.05,0.05],y.n)
C.e4H=new B.u(26,-8)
C.e59=new B.u(52,0)
C.e4G=new B.u(26,8)
C.cic=x([A.J,C.e4H,C.e59,C.e4G],B.ax("O<u>"))
C.aul=x([A.bX,A.aP,A.dP,A.b2,A.cs],y.O)
C.cA8=x([1,2,3,4,5,6,7],y.n)
C.cN6=x([A.f5,A.bL,A.Ll,A.eu],y.O)
C.cOh=x([1,2.76,5.4,8.93,13.3],y.n)
C.avj=x([A.cs,A.bW,A.bX,A.b2],y.O)
C.cPq=x([1,0.6,0.38,0.22,0.12],y.n)
C.cSl=x(["Mama","Baba","Bibi","Babu","Dada","Kaka"],y.s)
C.emH=new B.z("Chairs",120)
C.emK=new B.z("Cloth",80)
C.en0=new B.z("Delivery",25)
C.avE=x([C.emH,C.emK,C.en0],B.ax("O<+(n,H)>"))
C.cTC=x([1,0.7,0.45,0.28,0.16,0.1,0.06],y.n)
C.cTD=x([1,0.55,0.32,0.2,0.12,0.07],y.n)
C.dZS=new D.xz("NGMY Tree Story","A family grows, one branch at a time")
C.dZN=new D.xz("Coin Hero","A little coin saves up and wins the day")
C.dZV=new D.xz("Space Voyage","The NGMY rocket explores the stars")
C.dZM=new D.xz("Ocean Friends","Fish, bubbles and a friendly whale")
C.dZO=new D.xz("Rainy Village","Storm clouds, then a rainbow")
C.dZQ=new D.xz("Spark Adventure","Follow a spark round a circuit")
C.dZP=new D.xz("Fireworks Night","Colour bursts over the city")
C.dZU=new D.xz("Little Train","A train rolls past the hills")
C.dZR=new D.xz("Robot Disco","A robot dances to the beat")
C.dZT=new D.xz("Garden Time","Flowers grow and butterflies fly")
C.PZ=x([C.dZS,C.dZN,C.dZV,C.dZM,C.dZO,C.dZQ,C.dZP,C.dZU,C.dZR,C.dZT],B.ax("O<xz>"))
C.cXH=x([1,0.6,0.45,0.3,0.22,0.15],y.n)
C.awl=x([A.bX,A.bW,A.ay,A.bu,A.cs],y.O)
C.cYN=x([1,2,3,4,5,6],y.n)
C.d_f=x([A.fU,A.oF],y.O)
C.d_h=x([A.bk,A.aF,A.cZ],y.O)
C.dqs=new D.vK("NGMY Ads","\ud83d\udce2","Every NGMY promotion, as cartoons",A.bX,-1)
C.dqq=new D.vK("Civic Registry","\ud83e\udeaa","Enroll your family in your community",A.d3,0)
C.dqt=new D.vK("Jobs","\ud83d\udcbc","Find work and get hired",A.aF,1)
C.dqv=new D.vK("NGMY Store","\ud83d\udecd\ufe0f","African food and traditions",A.fl,2)
C.dqw=new D.vK("Kiswahili","\ud83d\udde3\ufe0f","Learn Swahili and English",A.bU,3)
C.dqu=new D.vK("Doc Scanner","\ud83d\udcc4","Scan, save and share",A.ce,4)
C.dqr=new D.vK("Invoices","\ud83e\uddfe","Professional invoices",A.bC,5)
C.dqp=new D.vK("Calendar","\ud83d\udcc5","This month, today lit up",A.ay,-2)
C.k8=x([C.dqs,C.dqq,C.dqt,C.dqv,C.dqw,C.dqu,C.dqr,C.dqp],B.ax("O<vK>"))
C.etA=new B.z("Jambo! Habari yako?","Nzuri, asante!")
C.en8=new B.z("Jina lako nani?","Jina langu ni Amina.")
C.enR=new B.z("Karibu nyumbani!","Asante sana!")
C.etz=new B.z("Naenda shule leo.","I am going to school.")
C.euD=new B.z("Ninapenda kujifunza!","I love to learn!")
C.eDq=new B.z("Maji, tafadhali.","Water, please.")
C.erB=new B.z("Rafiki yangu mpendwa","My dear friend")
C.ewd=new B.z("Tuonane kesho!","See you tomorrow!")
C.ex8=new B.z("Pole sana, rafiki.","I am so sorry, friend.")
C.ety=new B.z("Hongera! Umefaulu!","Congratulations! You passed!")
C.ep3=new B.z("Mimi ni mwanafunzi.","I am a student.")
C.ejT=new B.z("Chakula kitamu sana!","The food is so delicious!")
C.eD_=new B.z("Safari njema!","Have a good trip!")
C.egg=new B.z("Unaongea Kiswahili vizuri!","You speak Swahili well!")
C.awz=x([C.etA,C.en8,C.enR,C.etz,C.euD,C.eDq,C.erB,C.ewd,C.ex8,C.ety,C.ep3,C.ejT,C.eD_,C.egg],B.ax("O<+(n,n)>"))
C.fVd=new D.wi("NGMY Civic Registry","Enroll your family. Stay counted and helped together.",A.di,A.aP)
C.fVr=new D.wi("NGMY Jobs","Find work. Get hired. Get paid.",A.d5,A.aM)
C.fVo=new D.wi("NGMY Store","African food and traditions. Support our Congolese and African community.",A.jZ,A.bW)
C.fVj=new D.wi("Kiswahili School","Learn Swahili and English, step by step.",A.cY,A.n4)
C.fVg=new D.wi("Document Scanner","Scan, save and share your papers.",A.pJ,A.h4)
C.fVe=new D.wi("Invoice Creator","Make professional invoices in minutes.",A.ta,A.nI)
C.fVa=new D.wi("Family Book and Tree","Write your family story. Grow your tree.",A.iV,A.Kv)
C.fVc=new D.wi("NGMY Wallet","Save, send and earn coins.",A.pD,A.dP)
C.fVf=new D.wi("Vault Games","Play, win and learn.",A.dL,A.b9)
C.fVp=new D.wi("Electronics Lab","Build real circuits and learn.",A.f8,A.b3)
C.fVk=new D.wi("NGMY Helper and Advisors","Friendly help, any time.",A.lH,A.cs)
C.d2G=x([C.fVd,C.fVr,C.fVo,C.fVj,C.fVg,C.fVe,C.fVa,C.fVc,C.fVf,C.fVp,C.fVk],B.ax("O<wi>"))
C.d8n=x([A.dL,A.fb],y.O)
C.d8O=x(["For you","Apps","Library"],y.s)
C.axs=x([A.bz,A.bW,A.cZ,A.az],y.O)
C.oa=x([-1,1],y.n)
C.a33=x([-22,22],y.n)
C.Qz=x([-24,24],y.n)
C.a35=x([-5,5],y.n)
C.axB=x([-8,8],y.n)
C.dbG=x([A.aK,A.ak],y.O)
C.dbK=x([1,2,3,4,6,8],y.n)
C.dcB=x([1,0.5,0.33,0.25,0.2,0.16,0.14,0.12],y.n)
C.b22=new B.ac(0,A.G,A.aW,A.dm,14)
C.de3=x([C.b22],y.V)
C.dei=x([1,2,3,4,5,6,7,8],y.n)
C.dfJ=x([A.ay,A.cg,A.bW,A.bi,A.d3,A.b6],y.O)
C.dgC=x(["M","T","W","T","F","S","S"],y.s)
C.dhN=x([A.c,A.ox],y.O)
C.diu=x([1,0.18,0.06],y.n)
C.e1Z={"SPARK PAINTER":0,"MANDALA MAKER":1,"TITLE ANIMATOR":2,"PALETTE LAB":3,"GRAVITY TOY":4,"ORBIT STUDIO":5,"SWARM STUDIO":6,"FIREWORK DESIGNER":7,"CHAIN BURST":8,"CIRCUIT LAB":9,"PERIODIC TABLE":10,"BODY EXPLORER":11,"SPIN THE WHEEL":12,"FOCUS TIMER":13,"MEMORY MATCH":14,"LUCKY POCKET":15,"ELECTRONICS LAB":16,"CONSTRUCTION LAB":17,"AI INVENTOR":18,"MAGNET LAB":19,"RADIO LAB":20,"POWER PLANT":21,"POWER GRID":22,"INTERNET JOURNEY":23,"ROBOT CODER":24,"BUG SMASHER":25,"ROCKET LANDER":26,"DATA SNAKE":27,"BINARY 2048":28,"SIGNAL BREAKER":29,"PASSWORD LAB":30,"WAVE LAB":31,"BUG HUNT":32,"MOLECULE MAKER":33,"DNA LAB":34,"ECOSYSTEM LAB":35,"BALANCE LAB":36,"GEAR LAB":37,"OPTICS LAB":38,"LASER MAZE":39,"LIGHT MIXER":40,"ATOM BUILDER":41,"CIPHER LAB":42,"PIXEL TV":43}
C.aDF=new B.bk(C.e1Z,["sparkle","sparkle","whoosh","click","bounce","space","bubble","pop","zap","tech","lab","organic","click","tech","bubble","click","tech","tech","tech","tech","tech","tech","tech","tech","tech","pop","space","bubble","click","zap","click","tech","click","lab","organic","organic","click","tech","sparkle","zap","sparkle","lab","tech","tech"],B.ax("bk<n,n>"))
C.ac3=new B.v(1,0.16862745098039217,0.1843137254901961,0.21176470588235294,A.t)
C.dnW=new B.hy(A.G,1.2)
C.cig=x([A.f5,A.eQ,A.kq],y.O)
C.efg=new B.bT(G.pp,0.5,A.x,null,0,C.cig,null,null)
C.cy7=x([A.lI,A.mX],y.O)
C.efi=new B.bT(F.a9L,0.5,A.x,null,0,C.cy7,null,null)
C.bPA=new B.ae(A.ff,11,A.ad,null,null,null)
C.f90=new B.G(!0,A.aS,null,null,null,null,9,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.fvv=new B.y("Search",null,C.f90,null,null,null,null,null,null,null,null,null)
C.cCr=x([C.bPA,A.qo,C.fvv],y.p)
C.eMv=new B.cm(A.aO,A.e,A.j,A.m,null,A.p,null,0,C.cCr,null)
C.eSx=new B.hM(3,5,5,1.35,null)
C.bk7=new B.v(1,0.9450980392156862,0.9098039215686274,0.8470588235294118,A.t)
C.eZW=new B.G(!0,C.bk7,null,"serif",null,null,15,A.k3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.f6h=new B.G(!0,A.ad,null,null,null,null,9.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.f6U=new B.G(!0,A.aS,null,null,null,null,9.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.TH=new B.G(!0,A.ad,null,null,null,null,12.5,null,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.aQu=new B.G(!0,A.ad,null,null,null,null,10,A.N,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.fb_=new B.G(!0,A.c,null,null,null,null,8.5,A.N,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.Dp=new B.G(!0,A.ad,null,null,null,null,12.5,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.fcr=new B.G(!0,A.ad,null,null,null,null,8.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.fcL=new B.G(!0,C.aco,null,null,null,null,8.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.f3M=new B.G(!0,A.aA,null,null,null,null,9.5,A.N,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.feY=new B.y("NGMY Apps",null,C.f3M,null,null,null,null,null,null,null,null,null)
C.a7w=new B.G(!0,A.aA,null,null,null,null,12.5,null,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.f0w=new B.G(!0,C.tg,null,null,null,null,8,A.a5,null,3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.fi5=new B.y("BANG & OLUFSEN",null,C.f0w,null,null,null,null,null,null,null,null,null)
C.f61=new B.G(!0,A.w,null,null,null,null,9,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.fiw=new B.y("Open",null,C.f61,null,null,null,null,null,null,null,null,null)
C.flA=new B.y("Home",null,C.aQu,null,null,null,null,null,null,null,null,null)
C.fmC=new B.y("SAMSUNG",null,A.aQc,null,null,null,null,null,null,null,null,null)
C.fsC=new B.y("LG",null,A.wq,null,null,null,null,null,null,null,null,null)
C.fyt=new B.y("tv",null,A.qt,null,null,null,null,null,null,null,null,null)
C.f3G=new B.G(!0,C.tg,null,null,null,null,8.5,null,null,2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.fAA=new B.y("OPEN",null,C.f3G,null,null,null,null,null,null,null,null,null)})();(function staticFields(){$.hGg=B.T(B.ax("n"),B.ax("dI"))
$.ceJ=B.a([],B.ax("O<ai1>"))
$.haL=0
$.arh="music"})()};
(a=>{a["PQ2Tgx7yMjYpnbGJKZ3SUOTeANI="]=a.current})($__dart_deferred_initializers__);