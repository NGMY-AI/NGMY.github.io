((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,A,G,E,H,I,K,F,L,D={
FQ(d,e){var x
$.X()
x=B.M()
x.b=A.ae
x.c=e
x.r=d.gp(0)
x.d=A.bO
return x},
rE(d,e,f,g,h,i){var x=new D.fkJ(e,h,!0),w=x.$1(g),v=w.b.c
if(v>i&&v>0)w=x.$1(Math.max(2,g*i/v))
x=w.b
v=x.c
x=x.a.c
w.a5(d,f.aC(0,new B.u(v/2,x.gbd(x)/2)))},
Cs(a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=a6.a
J.bA(a5.save())
a5.translate(a7.a,a7.b-b1)
x=B.co(new B.u(0,b1+a8*0.005),a8*0.06,a8*0.45)
w=A.w.j(0.22)
$.X()
v=B.M()
v.r=w.gp(0)
a6.hM(x,v)
for(x=a8*0.05,w=-a8,v=w*0.24,u=a8*0.1,t=v+a8*0.2,s=a8*0.04,r=a8*0.065,q=w*0.05,p=a8*0.14,o=q+x,n=a8*0.025,m=0;m<2;++m){l=C.oO[m]*a8*0.075
k=l-x
k=B.bz(new B.a9(k,v,k+u,t),new B.aW(s,s))
j=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
j.r=A.dq.gp(0)
i=j.H()
a5.drawRRect(B.eq(k),i)
i.delete()
l-=r
l=B.bz(new B.a9(l,q,l+p,o),new B.aW(n,n))
k=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
k.r=A.c.gp(0)
i=k.H()
a5.drawRRect(B.eq(l),i)
i.delete()}x=w*0.16
v=w*0.52
u=a8*0.32
t=x+u
r=a8*0.09
h=B.bz(new B.a9(x,v,t,v+u),new B.aW(r,r))
r=B.M()
r.r=b3.gp(0)
a6.aD(h,r)
r=w*0.27
u=a8*0.02
u=B.bz(new B.a9(x,r,t,r+a8*0.045),new B.aW(u,u))
r=A.c.j(0.35)
t=B.M()
t.r=r.gp(0)
a6.aD(u,t)
t=w*0.47
g=new B.u(w*0.15,t)
f=new B.u(a8*0.15,t)
t=w*0.06
u=a8*0.07
a6.bA(g,g.ad(0,new B.u(t,a8*0.17)),D.FQ(b4,u))
t=g.ad(0,new B.u(t,a8*0.18))
r=B.M()
r.r=b4.gp(0)
a6.ah(t,s,r)
e=b0?-2.5+b6*0.5:0.5-b6*2.2
d=f.ad(0,new B.u(Math.sin(e)*a8*0.2,Math.cos(e)*a8*0.2))
a6.bA(f,d,D.FQ(b4,u))
x=B.M()
x.r=b4.gp(0)
a6.ah(d,s,x)
w*=0.7
a0=new B.u(0,w)
a1=a8*0.22
if(b2===1){x=a0.ad(0,new B.u(0,-a1*0.12))
v=B.M()
v.r=C.DS.gp(0)
a6.ah(x,a1*1.18,v)}x=B.M()
x.r=b4.gp(0)
a6.ah(a0,a1,x)
if(b2===0){x=B.bT(a0,a1)
v=B.M()
v.r=C.DS.gp(0)
a6.f4(x,3.141592653589793,3.141592653589793,!0,v)}else if(b2===2){x=B.bT(a0,a1)
v=B.M()
v.r=C.DS.gp(0)
a6.f4(x,3.141592653589793,3.141592653589793,!0,v)
for(x=w+a1*0.3,v=a1*0.2,m=0;m<2;++m){a2=C.oO[m]
u=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
u.r=C.DS.gp(0)
i=u.H()
a5.drawCircle(0+a2*a1*1.05,x,v,i)
i.delete()}}a3=A.k.G(a9*0.8,3)>2.85
for(x=w+a1*0.42,v=a1*0.12,u=a1*0.25,t=a9*0.7,s=a1*0.13,w+=a1*0.05,r=-a1*0.15,q=w+0,p=a1*0.15,m=0;m<2;++m){o=C.oO[m]*a1
n=0+o*0.4
if(a3){l=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
l.b=A.ae
l.c=1.6
l.r=A.bh.gp(0)
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
n.r=A.j4.j(0.5).gp(0)
i=n.H()
a5.drawCircle(0+o*0.62,x,v,i)
i.delete()}x=a1*0.5
a4=a0.ad(0,new B.u(0,x))
w=a1*0.4
if(b5){x=B.co(a4,w*(0.35+0.65*((Math.sin(a9*12)+1)/2)),x)
w=B.M()
w.r=A.er.gp(0)
a6.hM(x,w)}else a6.f4(B.co(a4.aC(0,new B.u(0,a1*0.1)),w,a1*0.65),0.2,2.741592653589793,!1,D.FQ(A.bh,1.8))
a5.restore()},
aNc(d,e,f,g,h,i){var x,w,v,u,t,s,r,q=null
if(h<=0)return
x=d.a
J.bA(x.save())
x.translate(e.a,e.b)
d.bX(0,A.k.D(A.mI.aw(0,A.k.D(h,0,1)),0.01,1.3))
w=B.i1(q,q,q,q,B.dn(q,q,q,q,q,q,q,q,q,B.l(q,q,A.aB,q,q,q,q,q,q,q,q,g,q,q,A.u,q,q,!0,q,q,q,q,q,q,q,q),f),A.a4,A.cc,q,A.eh,A.ca)
w.eI()
v=w.b
u=v.c
v=v.a.c
t=g*0.8
s=B.bz(B.co(A.J,v.gbd(v)+g*0.7,u+g*1.1),new B.aW(t,t))
t=$.X()
u=B.M()
u.r=i.gp(0)
d.aD(s,u)
t=new B.aP(t.r,A.ap,q,q,B.a([],y.v))
u=-g
v=s.d
r=v-1
t.E(new B.b5(u*0.3,r))
t.E(new B.ap(u*0.7,v+g*0.6))
t.E(new B.ap(g*0.2,r))
t.E(new B.bF())
r=B.M()
r.r=i.gp(0)
d.aP(t,r)
r=w.b
t=r.c
r=r.a.c
w.a5(d,new B.u(-t/2,-r.gbd(r)/2))
x.restore()},
fSz(d,e,f,g){var x,w=A.k.D(Math.abs(Math.cos(g)),0.15,1),v=f*2,u=v*w,t=B.co(e,v,u)
$.X()
x=B.M()
x.r=A.co.gp(0)
d.hM(t,x)
d.hM(B.co(e,v,u),D.FQ(A.pn,f*0.18))
if(w>0.5)D.rE(d,"$",e,f*1.2,A.pn,9999)},
hK9(d,e,f,g){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=new B.eJ()
k.dB(4)
for(x=e.a,w=f-g,v=e.b,u=d.a,t=f*3,s=v*0.025,r=v*0.012,q=0;q<18;++q){p=k.aj()
o=A.k.G(w*(40+k.aj()*60)+k.aj()*v,v)
J.bA(u.save())
u.translate(p*x,o)
u.rotate((t+q)*180/3.141592653589793,0,0)
p=B.co(A.J,r,s)
n=C.ato[A.o.G(q,5)]
$.X()
m=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
m.r=n.gp(0)
l=m.H()
u.drawRect(B.c1(p),l)
l.delete()
u.restore()}},
hTI(d,e,f,g){switch(A.o.G(f,11)){case 0:D.hJM(d,e,g)
break
case 1:D.hMF(d,e,g)
break
case 2:D.hRR(d,e,g)
break
case 3:D.hS5(d,e,g)
break
case 4:D.hR0(d,e,g)
break
case 5:D.hMl(d,e,g)
break
case 6:D.hJ7(d,e,g)
break
case 7:D.hSN(d,e,g)
break
case 8:D.hLo(d,e,g)
break
case 9:D.hMJ(d,e,g)
break
default:D.hLY(d,e,g)}},
hJM(a2,a3,a4){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null,d=a3.a,a0=a3.b,a1=a0*0.94
for(x=a2.a,w=d*0.12,v=d*0.06,u=a0*0.06,t=y.v,s=0;s<6;++s){r=d*(0.04+s*0.17)
q=a0*(0.18+0.08*A.o.G(s,3))
p=a1-q
o=r+w
n=A.c.j(0.2)
m=$.X()
l=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
l.r=n.gp(0)
k=l.H()
x.drawRect(B.c1(new B.a9(r,p,o,p+q)),k)
k.delete()
l=B.a([],t)
m=new B.aP(m.r,A.ap,e,e,l)
l.push(new B.b5(r-3,p))
l.push(new B.ap(r+v,p-u))
l.push(new B.ap(o+3,p))
l.push(new B.bF())
p=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
p.r=A.c.j(0.3).gp(0)
k=p.H()
p=m.gbI().a.snapshot()
x.drawPath((m.e=new B.cF(p)).a,k)
k.delete()}w=A.w.j(0.18)
$.X()
v=B.M()
v.r=w.gp(0)
a2.aX(new B.a9(0,a1,0+d,a1+(a0-a1)),v)
j=Math.cos(a4*1.6)
i=Math.min(d*0.46,a0*0.95)
h=i*0.62
J.bA(x.save())
v=d*0.58
x.translate(v,a0*0.45)
a2.rX(0,Math.max(0.08,Math.abs(j)),1)
w=h*0.1
g=B.bz(B.co(A.J,h,i),new B.aW(w,w))
u=B.M()
t=j>=0
u.saq(new B.a8(A.a3,A.a7,A.x,t?C.ddF:C.d4D,e,e).av(0,new B.a9(g.a,g.b,g.c,g.d)))
a2.aD(g,u)
a2.aD(g,D.FQ(A.dq,2))
if(t){u=-i
t=u*0.28
p=-h
o=p*0.05
n=h*0.22
m=B.M()
m.r=C.th.gp(0)
a2.ah(new B.u(t,o),n,m)
n=B.bT(new B.u(t,o),n)
o=B.M()
o.r=C.DS.gp(0)
a2.f4(n,3.141592653589793,3.141592653589793,!0,o)
for(u*=0.05,t=p*0.25,o=h*0.07,s=0;s<3;++s){n=t+s*h*0.16
n=B.bz(new B.a9(u,n,u+i*(0.42-s*0.06),n+o),A.hA)
m=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
m.r=A.dy.gp(0)
k=m.H()
x.drawRRect(B.eq(n),k)
k.delete()}D.rE(a2,"COMMUNITY ID",new B.u(0,p*0.4),w,A.dq,i*0.8)}else D.rE(a2,"\u2605 NGMY \u2605",A.J,h*0.16,A.c,i*0.8)
x.restore()
w=a4>2.6
if(w){s=A.k.D((a4-2.6)/0.35,0,1)
J.bA(x.save())
x.translate(v,a0*0.52)
a2.iW(0,-0.25)
a2.bX(0,2.2-1.2*A.ev.aw(0,s))
f=B.co(A.J,h*0.3,i*0.7)
a2.aD(B.bz(f,A.hd),D.FQ(A.d_.j(s),3))
D.rE(a2,"\u2713 REGISTERED",A.J,h*0.13,A.d_.j(s),(f.c-f.a)*0.9)
x.restore()}x=a4*5
v=Math.sin(x)
x=Math.sin(x)
w=w&&a4<4
D.Cs(a2,new B.u(d*0.2,a1),a0*0.7,a4,!1,Math.abs(x)*a0*0.015,0,A.d_,C.th,w,(v+1)/2)
if(a4>3)D.hK9(a2,new B.at(d,a0*0.9),a4,3)},
hMF(a6,a7,a8){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=a7.a,a3=a7.b,a4=a3*0.94,a5=A.w.j(0.2)
$.X()
x=B.M()
x.r=a5.gp(0)
a6.aX(new B.a9(0,a4,0+a2,a4+(a3-a4)),x)
w=a2*0.62
v=a2*0.3
u=a3*0.62
x=a4-u
a5=w+v
t=B.M()
t.r=A.bm.gp(0)
a6.aX(new B.a9(w,x,a5,x+u),t)
for(t=a6.a,s=a8*1.5,r=v*0.2,q=u*0.1,p=0;p<4;++p)for(o=x+u*(0.1+p*0.17),n=o+q,m=0;m<3;++m){l=w+v*(0.12+m*0.3)
k=A.o.G(p+m+A.k.bu(s),3)===0?A.dN:A.aT.j(0.6)
$.X()
j=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
j.r=k.gp(0)
i=j.H()
t.drawRect(B.c1(new B.a9(l,o,l+r,n)),i)
i.delete()}s=w+v*0.38
r=u*0.16
q=a4-r
$.X()
o=B.M()
o.r=A.fv.gp(0)
a6.aX(new B.a9(s,q,s+v*0.24,q+r),o)
o=x-a3*0.09
r=a3*0.02
o=B.bz(new B.a9(w,o,a5,o+a3*0.08),new B.aW(r,r))
a5=B.M()
a5.r=A.aH.gp(0)
a6.aD(o,a5)
a5=a3*0.05
o=a3*0.06
D.rE(a6,"JOBS",new B.u(w+v/2,x-a5),o,A.c,9999)
h=A.k.D(a8/2.8,0,1)
x=a2*0.12
g=x+(w+v*0.3-x)*A.dB.aw(0,h)
x=h<1
f=x?Math.abs(Math.sin(a8*12))*a3*0.02:0
s=h>=1
q=s?(Math.sin(a8*6)+1)/2:0
D.Cs(a6,new B.u(g,a4),a3*0.6,a8,!1,f,2,A.b6,A.KN,s,q)
if(x){x=B.bz(B.co(new B.u(g-a3*0.12,a4-a3*0.17-f),a3*0.075,a3*0.1),A.hA)
q=B.M()
q.r=A.fv.gp(0)
a6.aD(x,q)}if(s){x=a8-2.8
D.aNc(a6,new B.u(g+a5,a4-a3*0.78),"Hired! \ud83c\udf89",a3*0.07,x/0.4,A.c)
for(a5=x*0.8,x=a4-a3*0.5,s=a3*0.03,q=a8*8,e=0;e<6;++e){d=A.k.G(a5+e*0.17,1)
D.fSz(a6,new B.u(g+Math.sin(e*2.1)*a3*0.2,x-d*a3*0.25),s,q+e)}}a5=a2*0.04
x=a5+v
s=o+a3*0.3
r=B.bz(new B.a9(a5,o,x,s),new B.aW(r,r))
$.X()
q=B.M()
q.r=A.it.gp(0)
a6.aD(r,q)
for(x-=a5,r=a5+x*0.08,s-=o,q=x*0.84,n=s*0.24,a5+=x*0.14,x*=0.5,l=s*0.05,e=0;e<3;++e){k=(1-A.k.D((a8-e*0.5)/0.5,0,1))*a2*0.3
j=r+k
a0=e*0.3
a1=o+s*(0.08+a0)
a1=B.bz(new B.a9(j,a1,j+q,a1+n),A.hA)
j=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
j.r=A.c.gp(0)
i=j.H()
t.drawRRect(B.eq(a1),i)
i.delete()
k=a5+k
a0=o+s*(0.14+a0)
a1=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
a1.r=A.bJ.gp(0)
i=a1.H()
t.drawRect(B.c1(new B.a9(k,a0,k+x,a0+l)),i)
i.delete()}},
hRR(a1,a2,a3){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=a2.a,e=a2.b,d=e*0.94,a0=A.fv.j(0.6)
$.X()
x=B.M()
x.r=a0.gp(0)
a1.aX(new B.a9(0,d,0+f,d+(e-d)),x)
w=f*0.3
v=f*0.66
for(a0=v/12,x=e*0.14,u=a0+1,t=x+e*0.12,s=a1.a,r=0;r<12;++r){q=w+a0*r
p=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
p.r=C.awq[A.o.G(r,4)].gp(0)
o=p.H()
s.drawRect(B.c1(new B.a9(q,x,q+u,t)),o)
o.delete()}for(u=e*0.2,t=e*0.1,q=u+t,r=0;r<12;++r){p=w+a0*r
n=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
n.r=C.awq[A.o.G(r,4)].gp(0)
o=n.H()
s.drawArc.apply(s,[B.c1(new B.a9(p,u,p+a0,q)),0,180,!0,o])
o.delete()}a0=w+4
u=e*0.3
q=u+(d-u)
p=B.M()
p.r=A.fv.gp(0)
a1.aX(new B.a9(a0,u,a0+4,q),p)
p=w+v
a0=p-8
n=B.M()
n.r=A.fv.gp(0)
a1.aX(new B.a9(a0,u,a0+4,q),n)
n=e*0.68
q=n+e*0.26
a0=B.bz(new B.a9(w,n,p,q),A.ii)
u=B.M()
u.r=A.it.gp(0)
a1.aD(a0,u)
for(a0=p-w,u=a0/6,p=n+2,a0/=12,q=p+(q-n-4),r=0;r<6;++r){m=w+u*r
l=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
l.r=((r&1)===0?A.bI:A.co).j(0.9).gp(0)
o=l.H()
s.drawRect(B.c1(new B.a9(m,p,m+a0,q)),o)
o.delete()}a0=w+v*0.2
u=e*0.62
k=new B.u(a0,u)
q=e*0.17
p=e*0.03
m=B.bz(B.co(k,e*0.11,q),new B.aW(p,p))
l=B.M()
l.r=A.cC.gp(0)
a1.aD(m,l)
l=-e
q=B.co(k.ad(0,new B.u(0,l*0.05)),e*0.04,q)
m=B.M()
m.r=A.fC.gp(0)
a1.hM(q,m)
for(q=a3*0.8,l*=0.08,m=e*0.015,r=0;r<3;++r){j=A.k.G(q+r*0.33,1)
i=Math.sin(j*6+r)
h=j*e
g=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
g.r=A.c.j(0.6*(1-j)).gp(0)
o=g.H()
s.drawCircle(a0+i*5,u+(l-h*0.14),m+h*0.02,o)
o.delete()}for(a0=w+v*0.5,q=e*0.018,r=0;r<5;++r){m=B.co(new B.u(a0,u),x,e*(0.1+r*0.01))
l=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
l.b=A.ae
l.c=q
l.r=A.co.gp(0)
l.d=A.bO
o=l.H()
s.drawArc.apply(s,[B.c1(m),(0.4+r*0.1)*57.29577951308232,108.8619810748564,!1,o])
o.delete()}for(a0=e*0.63,x=e*0.032,r=0;r<4;++r){u=A.o.G(r,2)
q=A.o.an(r,2)
m=(r&1)===0?A.cd:A.Ah
l=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
l.r=m.gp(0)
o=l.H()
s.drawCircle(w+v*(0.72+0.06*u)+r*e*0.02,a0+q*e*0.035,x,o)
o.delete()}D.Cs(a1,new B.u(f*0.14,d),n,a3,!1,0,1,A.co,E.acZ,!0,(Math.sin(a3*5)+1)/2)
for(a0=a3*0.45,x=f*0.16,u=e*0.45,s=e*0.06,r=0;r<5;++r){j=A.k.G(a0+r*0.2,1)
D.rE(a1,"\u2665",new B.u(x+Math.sin(j*5+r)*e*0.08+r*e*0.03,u-j*e*0.4),s,A.ay.j(1-j),9999)}a0=w+v/2
x=e*0.08
p=B.bz(B.co(new B.u(a0,x),t,v*0.7),new B.aW(p,p))
$.X()
t=B.M()
t.r=A.aB.gp(0)
a1.aD(p,t)
D.rE(a1,"NGMY STORE \xb7 African food",new B.u(a0,x),e*0.05,A.dN,v*0.64)},
hS5(d,e,f){var x,w,v,u,t,s,r=e.a,q=e.b,p=q*0.94,o=A.w.j(0.2)
$.X()
x=B.M()
x.r=o.gp(0)
d.aX(new B.a9(0,p,0+r,p+(q-p)),x)
w=A.o.G(A.k.bu(f/1.5),4)
v=A.k.G(f,1.5)
u=v<0.75
x=q*0.68
o=u?(Math.sin(f*8)+1)/2:0
t=u?Math.abs(Math.sin(f*8))*q*0.01:0
D.Cs(d,new B.u(r*0.25,p),x,f,!1,t,2,A.d_,C.th,u,o)
o=u?0:(Math.sin(f*8)+1)/2
t=u?0:Math.abs(Math.sin(f*8))*q*0.01
D.Cs(d,new B.u(r*0.75,p),x,f,!1,t,0,A.bj,C.b9b,!u,o)
o=q*0.15
x=q*0.085
if(u)D.aNc(d,new B.u(r*0.26,o),C.atj[w].a,x,v/0.25,A.or)
else D.aNc(d,new B.u(r*0.74,o),C.atj[w].b,x,(v-0.75)/0.25,A.et)
for(o=r*0.5,x=q*0.07,t=f*2,s=0;s<3;++s)D.rE(d,"\u2192",new B.u(o,q*(0.35+s*0.1)),x,A.c.j(0.3+0.5*A.k.G(t+s,1)),9999)},
hR0(a1,a2,a3){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=a2.a,e=a2.b,d=e*0.94,a0=A.w.j(0.2)
$.X()
x=B.M()
x.r=a0.gp(0)
a1.aX(new B.a9(0,d,0+f,d+(e-d)),x)
x=f*0.3
w=B.co(new B.u(f*0.6,e*0.45),e*0.7,Math.min(x,e*0.55))
a0=B.bz(w,A.ii)
v=B.M()
v.r=A.c.gp(0)
a1.aD(a0,v)
for(a0=w.d,v=w.b,u=a0-v,t=u*0.03,s=a1.a,r=w.a,q=w.c,p=q-r,o=r+p*0.1,n=0;n<9;++n){m=v+u*(0.1+n*0.095)
l=A.o.G(n,3)===2?0.5:0.8
k=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
k.r=A.cp.gp(0)
j=k.H()
s.drawRect(B.c1(new B.a9(o,m,o+p*l,m+t)),j)
j.delete()}i=A.k.D(a3/3,0,1)
h=v+u*i
if(i<1){a0=r-8
u=h-2
p=a0+(p+16)
t=B.M()
t.r=A.b7.gp(0)
a1.aX(new B.a9(a0,u,p,u+4),t)
t=A.b7.j(0.18)
u=B.M()
u.r=t.gp(0)
a1.aX(new B.a9(a0,v,p,v+(h-v)),u)}else{n=A.k.D((a3-3)/0.4,0,1)
u=A.mI.aw(0,n)
t=B.M()
t.r=A.bI.gp(0)
a1.ah(new B.u(q,v),e*0.08*u,t)
D.rE(a1,"PDF",new B.u(q,v),e*0.045*n,A.c,9999)
v=e*0.06
D.rE(a1,"\u2713 Saved",new B.u(w.gbR().a,a0+v),v,A.c.j(n),9999)}a0=a3*4
v=Math.sin(a0)
D.Cs(a1,new B.u(f*0.2,d),e*0.66,a3,!0,Math.abs(Math.sin(a0))*e*0.01,0,A.cy,C.th,!1,(v+1)/2)
g=B.co(new B.u(x,e*0.3),e*0.18,e*0.1)
x=e*0.02
x=B.bz(g,new B.aW(x,x))
v=B.M()
v.r=A.aB.gp(0)
a1.aD(x,v)
v=e*0.015
v=B.bz(g.cF(-3),new B.aW(v,v))
x=A.b7.j(0.35+0.3*Math.sin(a3*6))
a0=B.M()
a0.r=x.gp(0)
a1.aD(v,a0)},
hMl(a6,a7,a8){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=a7.a,a3=a7.b,a4=a3*0.94,a5=A.w.j(0.2)
$.X()
x=B.M()
x.r=a5.gp(0)
a6.aX(new B.a9(0,a4,0+a2,a4+(a3-a4)),x)
w=B.co(new B.u(a2*0.62,a3*0.47),a3*0.8,Math.min(a2*0.4,a3*0.75))
x=B.bz(w,A.rq)
a5=B.M()
a5.r=A.c.gp(0)
a6.aD(x,a5)
a5=w.a
x=w.c
v=x-a5
u=w.b
t=w.d-u
D.rE(a6,"INVOICE",new B.u(a5+v*0.3,u+t*0.09),t*0.07,A.dq,9999)
for(s=a6.a,r=v*0.08,q=a5+r,p=t*0.045,o=q+v*0.5,n=x-v*0.17,m=t*0.02,l=t*0.06,k=a8-0.5,j=0,i=0;i<3;++i){h=A.k.D((k-i*0.6)/0.4,0,1)
if(h<=0)continue
j+=C.auG[i].b
g=u+t*(0.24+i*0.14)
J.bA(s.save())
s.translate((1-h)*30,0)
f=A.cp.j(h)
$.X()
e=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
e.r=f.gp(0)
d=e.H()
s.drawRect(B.c1(new B.a9(q,g,o,g+p)),d)
d.delete()
D.rE(a6,"$"+C.auG[i].b,new B.u(n,g+m),l,A.aB.j(h),9999)
s.restore()}p=u+t*0.7
a6.bA(new B.u(q,p),new B.u(x-r,p),D.FQ(A.dn,1.4))
D.rE(a6,"TOTAL  $"+j,new B.u(w.gbR().a,u+t*0.78),t*0.075,A.aB,v*0.8)
x=a8>2.8
if(x){r=a8-2.8
i=A.k.D(r/0.3,0,1)
J.bA(s.save())
s.translate(w.gbR().a,u+t*0.55)
a6.iW(0,-0.3)
a6.bX(0,2-A.ev.aw(0,i))
a6.aD(B.bz(B.co(A.J,t*0.17,v*0.6),A.hd),D.FQ(A.d_.j(i),3.5))
D.rE(a6,"PAID",A.J,t*0.11,A.d_.j(i),9999)
s.restore()
for(v=r*0.7,a5-=a3*0.05,u=a3*0.7,t=a3*0.03,s=a8*8,a0=0;a0<6;++a0){a1=A.k.G(v+a0*0.17,1)
D.fSz(a6,new B.u(a5+Math.sin(a0*2)*a3*0.1,u-a1*a3*0.5),t,s+a0)}}a5=x?(Math.sin(a8*6)+1)/2:0
D.Cs(a6,new B.u(a2*0.2,a4),a3*0.66,a8,!0,0,1,A.bA,A.KN,x,a5)},
hJ7(d,e,a0){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=e.a,h=e.b,g=h*0.94,f=A.e9.j(0.7)
$.X()
x=B.M()
x.r=f.gp(0)
d.aX(new B.a9(0,g,0+i,g+(h-g)),x)
x=i*0.6
f=h*0.62
w=new B.u(x,f)
v=Math.min(i*0.3,h*0.6)
u=B.bz(B.co(w,v*1.3,v*2.1),A.hd)
t=B.M()
t.r=A.hu.gp(0)
d.aD(u,t)
t=v*0.5
u=v*1.2
s=B.co(w.aC(0,new B.u(t,0)),u,v)
r=B.M()
r.r=A.h1.gp(0)
d.aX(s,r)
t=B.co(w.ad(0,new B.u(t,0)),u,v)
r=B.M()
r.r=A.h1.gp(0)
d.aX(t,r)
r=A.k.G(a0,2)
t=d.a
J.bA(t.save())
t.translate(x,f)
d.rX(0,Math.cos(r/2*3.141592653589793),1)
r=-v*0.6
s=B.M()
s.r=A.bK.gp(0)
d.aX(new B.a9(0,r,0+v,r+u),s)
t.restore()
q=A.k.D(a0/3,0,1)
f-=v*0.6
s=f-h*0.28*q
d.bA(new B.u(x,f),new B.u(x,s),D.FQ(A.fv,h*0.025))
for(f=q-0.4,u=h*0.05,r=h*0.04,p=0;p<5;++p){o=A.k.D(f-p*0.1,0,1)
n=p*1.3
m=Math.cos(n)
l=Math.sin(n)
k=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
k.r=A.bo.gp(0)
j=k.H()
t.drawCircle(x+m*h*0.14*o,s+l*h*0.08*o,u*o,j)
j.delete()
if(o>0.6)D.rE(d,"\u2665",new B.u(x+Math.cos(n)*h*0.14,s+Math.sin(n)*h*0.08),r,A.bA,9999)}f=a0*4
x=Math.sin(f)
D.Cs(d,new B.u(i*0.2,g),h*0.66,a0,!1,Math.abs(Math.sin(f))*h*0.01,2,A.aE,C.th,!1,(x+1)/2)},
hSN(d,e,f){var x,w,v,u,t,s,r,q,p,o,n=e.a,m=e.b,l=m*0.94,k=A.w.j(0.2)
$.X()
x=B.M()
x.r=k.gp(0)
d.aX(new B.a9(0,l,0+n,l+(m-l)),x)
w=A.k.bu(A.k.D(f/5.5,0,1)*9)+1
for(v=n*0.62,k=l-m*0.03,x=m*0.26,u=m*0.07,t=d.a,s=0;s<w;++s){r=k-s*m*0.055
q=B.co(new B.u(v,r),u,x)
p=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
p.r=A.co.gp(0)
o=p.H()
t.drawOval(B.c1(q),o)
o.delete()
r=B.co(new B.u(v,r),u,x)
q=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
q.b=A.ae
q.c=2
q.r=A.pn.gp(0)
q.d=A.bO
o=q.H()
t.drawOval(B.c1(r),o)
o.delete()}k=m*0.1
D.fSz(d,new B.u(v,k+A.k.G(f*1.6,1)*(l-u-w*m*0.055-k)),m*0.05,f*8)
k=m*0.08
D.rE(d,"$"+w*25,new B.u(v,k),k,A.dN,9999)
k=f*5
u=Math.sin(k)
D.Cs(d,new B.u(n*0.25,l),m*0.66,f,!1,Math.abs(Math.sin(k))*m*0.012,1,A.cy,C.th,!0,(u+1)/2)},
hLo(d,a0,a1){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=a0.a,g=a0.b,f=g*0.94,e=A.w.j(0.2)
$.X()
x=B.M()
x.r=e.gp(0)
d.aX(new B.a9(0,f,0+h,f+(g-f)),x)
for(e=d.a,x=g*0.012,w=g*0.55,v=a1*4,u=a1*2,t=g*0.15,s=g*0.03,r=0;r<3;r=n){q=Math.sin(v+r*1.7)
J.bA(e.save())
e.translate(h*(0.5+0.14*r),w-Math.abs(q)*g*0.3)
e.rotate((u+r)*180/3.141592653589793,0,0)
q=B.bz(B.co(A.J,t,t),new B.aW(s,s))
p=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
p.r=A.c.gp(0)
o=p.H()
e.drawRRect(B.eq(q),o)
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
j.r=A.bh.gp(0)
o=j.H()
e.drawCircle(k*g*0.04,l*g*0.04,x,o)
o.delete();++m}e.restore()}for(e=a1*0.6,w=g*0.25,v=g*0.06,r=0;r<5;++r){i=A.k.G(e+r*0.2,1)
D.rE(d,"\u2605",new B.u(h*(0.45+r*0.1),w-i*g*0.2),v,A.dN.j(1-i),9999)}e=h*0.22
w=a1*6
v=Math.sin(w)
D.Cs(d,new B.u(e,f),g*0.66,a1,!0,Math.abs(Math.sin(w))*g*0.015,0,A.cd,C.th,!0,(v+1)/2)
v=f-g*0.28
s=B.bz(B.co(new B.u(e,v),g*0.07,g*0.16),new B.aW(s,s))
$.X()
w=B.M()
w.r=A.cC.gp(0)
d.aD(s,w)
w=B.M()
w.r=A.ay.gp(0)
d.ah(new B.u(e+g*0.05,v),x,w)},
hMJ(d,e,a0){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=e.a,j=e.b,i=j*0.94,h=A.w.j(0.2),g=$.X(),f=B.M()
f.r=h.gp(0)
d.aX(new B.a9(0,i,0+k,i+(j-i)),f)
f=k*0.42
h=j*0.18
x=j*0.08
w=B.bz(new B.a9(f,h,f+k*0.5,h+j*0.5),new B.aW(x,x))
v=new B.aP(g.r,A.ap,null,null,B.a([],y.v))
v.E(new B.iT(w))
d.aP(v,D.FQ(A.c.j(0.5),4))
u=new B.RW(new B.vm(B.wP(v),!1,B.a([],y.L))).gL(0)
for(h=a0*0.18,g=u.a,x=u.b,t=g.e,s=j*0.016,r=d.a,q=0;q<10;++q){p=A.k.G(h+q/10,1)
g.jk()
o=t[x].b
o===$&&B.c()
o=o.a.length()
g.jk()
o=t[x].Mi(p*o).a
p=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
p.r=A.dN.gp(0)
n=p.H()
r.drawCircle(o.a,o.b,s,n)
n.delete()}m=a0>1.5
h=j*0.43
l=new B.u(k*0.92,h)
if(m){g=A.dN.j(0.4+0.2*Math.sin(a0*8))
x=B.M()
x.r=g.gp(0)
x.z=A.yI
d.ah(l,j*0.2,x)}g=j*0.07
x=m?A.or:A.bJ
t=B.M()
t.r=x.gp(0)
d.ah(l,g,t)
h=B.bz(B.co(new B.u(f,h),j*0.2,j*0.1),A.ii)
t=B.M()
t.r=A.d_.gp(0)
d.aD(h,t)
D.rE(d,"+",new B.u(f,j*0.36),g,A.c,9999)
h=m?(Math.sin(a0*6)+1)/2:0
f=m?Math.abs(Math.sin(a0*6))*j*0.012:0
D.Cs(d,new B.u(k*0.2,i),j*0.68,a0,!1,f,0,A.bW,C.th,m,h)
if(m)D.aNc(d,new B.u(k*0.24,j*0.16),"It works!",g,(a0-1.5)/0.4,A.c)},
hLY(d,a0,a1){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=a0.a,g=a0.b,f=g*0.94,e=A.w.j(0.2)
$.X()
x=B.M()
x.r=e.gp(0)
d.aX(new B.a9(0,f,0+h,f+(g-f)),x)
w=A.k.D((a1-0.3)/0.4,0,1)
v=A.k.D((a1-1.8)/0.4,0,1)
x=g*0.2
e=g*0.065
D.aNc(d,new B.u(h*0.3,x),"How do I enroll?",e,w,A.or)
if(a1>1&&a1<1.8)for(u=h*0.72,t=g*0.38,s=a1*9,r=g*0.015,q=d.a,p=0;p<3;++p){o=Math.sin(s+p)
n=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
n.r=A.c.gp(0)
m=n.H()
q.drawCircle(u+p*g*0.05,t-Math.abs(o)*g*0.02,r,m)
m.delete()}D.aNc(d,new B.u(h*0.7,g*0.38),"Tap Civic Registry!",e,v,A.et)
D.Cs(d,new B.u(h*0.2,f),g*0.62,a1,!1,0,2,A.ay,C.th,a1<1,0)
l=h*0.78
k=f-g*0.28
e=g*0.04
x=B.bz(B.co(new B.u(l,k),g*0.22,x),new B.aW(e,e))
u=B.M()
u.r=A.aL.gp(0)
d.aD(x,u)
u=g*0.18
x=k-u
e=B.bz(B.co(new B.u(l,x),g*0.14,u),new B.aW(e,e))
u=B.M()
u.r=A.cp.gp(0)
d.aD(e,u)
for(e=d.a,u=a1*1.1,t=g*0.02,j=0;j<2;++j){i=C.oO[j]
s=A.k.G(u,1)>0.08?A.b8:A.fh
r=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
r.r=s.gp(0)
m=r.H()
e.drawCircle(l+i*g*0.04,x,t,m)
m.delete()}d.bA(new B.u(l,k-g*0.25),new B.u(l,k-g*0.3),D.FQ(A.ad,3))
e=B.M()
e.r=A.ay.gp(0)
d.ah(new B.u(l,k-g*0.31),g*0.015,e)},
fkJ:function fkJ(d,e,f){this.a=d
this.b=e
this.c=f},
aMB(d,e,f,g,h,i,j,k){var x=new D.fcG(e,h,i,k),w=x.$1(g),v=w.b.c
if(v>j&&v>0)w=x.$1(Math.max(2,g*j/v))
x=w.b
v=x.c
x=x.a.c
w.a5(d,f.aC(0,new B.u(v/2,x.gbd(x)/2)))},
KF(d,e,f,a0){var x,w,v,u,t,s,r,q,p,o,n,m=A.o.G(a0==null?A.k.bu(f/6):a0,11),l=A.k.G(f,6),k=C.d_2[m],j=e.a,i=e.b,h=0+j,g=0+i
$.X()
x=B.M()
x.saq(new B.a8(A.ax,A.aC,A.x,B.a([k.c,k.d],y.O),null,null).av(0,new B.a9(0,0,h,g)))
d.aX(new B.a9(0,0,h,g),x)
w=i*(j>=i?0.7:0.6)
g=d.a
J.bA(g.save())
g.clipRect(B.c1(new B.a9(0,0,h,0+w)),$.qJ()[1],!0)
D.hTI(d,new B.at(j,w),m,l)
g.restore()
v=i-w
x=A.w.j(0.3)
u=B.M()
u.r=x.gp(0)
d.aX(new B.a9(0,w,h,w+v),u)
t=A.cr.aw(0,A.k.D((l-0.2)/0.5,0,1))
J.bA(g.save())
g.translate((1-t)*j*0.25,0)
u=j/2
h=j*0.94
D.aMB(d,k.a,new B.u(u,w+v*0.3),v*0.36,A.c.j(t),!0,h,0)
D.aMB(d,k.b,new B.u(u,w+v*0.64),v*0.2,A.c.j(0.92*t),!1,h,0)
g.restore()
for(h=i*0.965,x=i*0.009,s=i*0.004,r=0;r<11;++r){q=r===m
p=q?s:0
o=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
o.r=A.c.j(q?0.95:0.35).gp(0)
n=o.H()
g.drawCircle(u+(r-5)*i*0.035,h,x+p,n)
n.delete()}h=j-i*0.07
g=i*0.06
D.aMB(d,"AD",new B.u(h,g),i*0.045,A.c.j(0.85),!0,9999,1)
x=i*0.02
x=B.bz(B.co(new B.u(h,g),i*0.065,i*0.1),new B.aW(x,x))
g=B.M()
g.b=A.ae
g.c=1
g.r=A.ad.gp(0)
g.d=A.bO
d.aD(x,g)},
bBE(d,e,f,g){var x,w=d.a
J.bA(w.save())
w.clipRect(B.c1(new B.a9(0,0,0+e.a,0+e.b)),$.qJ()[1],!0)
x=C.k_[A.o.G(f,8)].e
if(x===-2)D.hJg(d,e,g)
else if(x===-1)D.KF(d,e,g,null)
else D.KF(d,e,g,x)
w.restore()},
hJg(d,a0,a1){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=a0.a,h=a0.b,g=new B.S(Date.now(),0,!1),f=0+i,e=0+h
$.X()
x=B.M()
x.saq(C.bRI.av(0,new B.a9(0,0,f,e)))
d.aX(new B.a9(0,0,f,e),x)
x=B.M()
x.r=A.bI.gp(0)
d.aX(new B.a9(0,0,f,0+h*0.15),x)
D.aMB(d,A.oM[B.bG(g)-1]+" "+B.by(g),new B.u(i/2,h*0.075),h*0.08,A.c,!0,i*0.9,0)
w=i/7
for(f=h*0.21,e=h*0.05,v=0;v<7;++v)D.aMB(d,C.dcy[v],new B.u(w*(v+0.5),f),e,A.az,!0,9999,0)
u=B.c0(B.by(g),B.bG(g),1,0,0,0,0,0)
t=B.bQ(B.c0(B.by(g),B.bG(g)+1,0,0,0,0,0,0))
s=B.mu(u)-1
r=h*0.74/A.k.dw((s+t)/7)
for(f=h*0.26,e=a1*3,x=d.a,q=1;q<=t;++q){p=s+q-1
o=w*(A.o.G(p,7)+0.5)
n=f+r*(A.o.an(p,7)+0.5)
if(q===B.bQ(g)){m=Math.min(w,r)
l=A.aT.j(0.5+0.2*Math.sin(e))
$.X()
k=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
k.r=l.gp(0)
j=k.H()
x.drawCircle(o,n,m*0.42,j)
j.delete()}m=Math.min(w,r)
l=q===B.bQ(g)?A.c:A.ad
D.aMB(d,""+q,new B.u(o,n),m*0.42,l,!0,9999,0)}},
fcG:function fcG(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
w6:function w6(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
vz:function vz(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fX1(d,e,f,g,h,a0){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i=d.a
J.bA(i.save())
x=e.a
w=e.b
v=0+x
u=0+w
i.clipRect(B.c1(new B.a9(0,0,v,u)),$.qJ()[1],!0)
if(h<3){$.X()
t=B.M()
t.r=C.b5O.gp(0)
d.aX(new B.a9(0,0,v,u),t)
if(h<0.5)u=h/0.5
else u=h>2.4?(3-h)/0.6:1
s=A.k.D(u,0,1)
u=e.eh(A.J)
t=e.geg()
r=B.M()
r.saq(new B.bS(A.A,0.5,A.x,j,0,B.a([A.aT.j(0.35*s),A.K],y.O),j,j).av(0,B.bT(e.eh(A.J),e.geg()*0.5)))
d.ah(u,t*0.5,r)
D.FT(d,"NGMY",new B.u(0,w*0.36),w*0.2,A.c.j(s),A.L,w*0.03,x)
D.FT(d,"T V",new B.u(0,w*0.6),w*0.08,A.aT.j(s),A.L,w*0.05,x)
r=x*0.3
t=w*0.78
u=B.M()
u.r=A.aT.j(s).gp(0)
d.aX(new B.a9(r,t,r+x*0.4*(h/3),t+3),u)}else if(a0>=0)D.bBE(d,e,a0,g)
else{q=A.k.D((h-3)/0.5,0,1)
p=A.o.G(f,10)
switch(p){case 0:D.hSn(d,e,g)
break
case 1:D.hJY(d,e,g)
break
case 2:D.hRH(d,e,g)
break
case 3:D.hOA(d,e,g)
break
case 4:D.hPP(d,e,g)
break
case 5:D.hRI(d,e,g)
break
case 6:D.hLe(d,e,g)
break
case 7:D.hSm(d,e,g)
break
case 8:D.hQB(d,e,g)
break
default:D.hLp(d,e,g)}t=x-w*0.34
r=w*0.04
o=w*0.03
n=B.bz(new B.a9(t,r,t+w*0.3,r+w*0.1),new B.aW(o,o))
$.X()
o=B.M()
o.r=A.w.j(0.55).gp(0)
d.aD(n,o)
D.FT(d,"NGMY",new B.u(n.a+w*0.025,n.b+w*0.012),w*0.07,A.c,A.bg,1,j)
o=w*0.86
t=B.M()
t.r=A.w.j(0.6).gp(0)
d.aX(new B.a9(0,o,v,o+w*0.14),t)
D.FT(d,"CH "+(f+1)+"  \xb7  "+C.Pp[p].a,new B.u(r,w*0.885),w*0.075,A.c,A.bg,0,x-w*0.08)
if(q<1){t=B.M()
t.r=A.c.j(0.6*(1-q)).gp(0)
d.aX(new B.a9(0,0,v,u),t)}}$.X()
m=B.M()
m.r=A.w.j(0.07).gp(0)
for(l=0;l<w;l+=3){k=m.H()
i.drawRect(B.c1(new B.a9(0,l,v,l+1)),k)
k.delete()}v=new B.aP($.X().r,A.ap,j,j,B.a([],y.v))
v.E(new B.b5(0,0))
v.E(new B.ap(x*0.45,0))
v.E(new B.ap(0,w*0.5))
v.E(new B.bF())
w=B.M()
w.r=A.c.j(0.04).gp(0)
d.aP(v,w)
i.restore()},
FT(d,e,f,g,h,i,j,k){var x=null,w=B.i1(x,x,1,x,B.dn(x,x,x,x,x,x,x,x,x,B.l(x,x,h,x,x,x,x,x,x,x,x,g,x,x,A.u,x,x,!0,x,j,x,x,x,x,x,x),e),i,A.cc,x,A.eh,A.ca),v=k==null
w.Bw(v?9999:k)
w.a5(d,f.ad(0,new B.u(i===A.L&&!v?(k-w.b.c)/2:0,0)))},
hSn(d,e,f){var x,w,v,u,t,s,r,q,p,o,n,m=e.a,l=e.b,k=A.k.G(f,14),j=0+m,i=0+l
$.X()
x=B.M()
x.saq(C.anw.av(0,new B.a9(0,0,j,i)))
d.aX(new B.a9(0,0,j,i),x)
x=B.M()
x.r=A.dN.gp(0)
d.ah(new B.u(m*0.85,l*0.18),l*0.08,x)
x=l*0.78
i=B.M()
i.r=A.A7.gp(0)
d.aX(new B.a9(0,x,j,x+l*0.22),i)
new D.fkV(d,f,l).$5(new B.u(m*0.5,l*0.8),1.5707963267948966,l*0.24,5,A.k.D(k/5,0,1)*1.4)
for(j=l*0.26,i=l*0.11,x=l*0.05,w=d.a,v=-l,u=v*0.1,v*=0.04,t=l*0.065,s=0;s<6;++s){r=A.k.D((k-(5+s*1.3))/0.5,0,1)
if(r<=0)continue
q=(s&1)===1?0.04:0
p=A.o.G(s,3)
o=A.mI.aw(0,r)
J.bA(w.save())
w.translate(m*(0.2+0.12*s+q),l*(0.16+0.14*p))
w.scale(o,o)
q=B.bz(B.co(A.J,i,j),new B.aW(x,x))
$.X()
p=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
p.r=A.c.gp(0)
n=p.H()
w.drawRRect(B.eq(q),n)
n.delete()
q=B.bz(B.co(A.J,i,j),new B.aW(x,x))
p=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
p.b=A.ae
p.c=2
p.r=A.bA.gp(0)
n=p.H()
w.drawRRect(B.eq(q),n)
n.delete()
D.FT(d,"\u2665 "+C.cP2[s],new B.u(u,v),t,A.rW,A.bg,0,null)
w.restore()}if(k>11.5)D.FT(d,"Family is everything",new B.u(0,l*0.62),l*0.09,A.hu,A.L,0,m)},
hJY(d,e,a0){var x,w,v,u,t,s,r,q,p,o,n,m,l=null,k=e.a,j=e.b,i=0+k,h=0+j,g=$.X(),f=B.M()
f.saq(C.bRV.av(0,new B.a9(0,0,i,h)))
d.aX(new B.a9(0,0,i,h),f)
x=a0*40
for(i=d.a,h=y.v,w=0;w<2;++w,g=f){f=B.a([],h)
v=new B.aP(g.r,A.ap,l,l,f)
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
f=$.X()
t=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
t.r=(g?A.jr:A.e9).gp(0)
q=t.H()
g=v.e
i.drawPath((g==null?v.e=new B.cF(v.gbI().a.snapshot()):g).a,q)
q.delete()}for(i=j*0.04,h=x*1.3,g=k+60,f=k*0.3,p=0,o=0;o<6;++o){u=A.k.G(o*90-h,g)-30
t=Math.sin(o*1.7+a0)
if(Math.abs(u-f)<12)++p
D.hRM(d,new B.u(u,j*(0.35+0.08*t)),i,A.dN)}n=Math.abs(Math.sin(a0*5))
m=new B.u(f,j*0.72-n*j*0.22)
i=B.co(new B.u(f,j*0.82),j*0.025,j*0.14*(1-n*0.4))
$.X()
h=B.M()
h.r=A.dn.gp(0)
d.hM(i,h)
h=j*0.085
i=B.M()
i.saq(C.eaw.av(0,B.bT(m,h)))
d.ah(m,h,i)
i=B.M()
i.b=A.ae
i.c=2
i.r=A.pn.gp(0)
d.ah(m,h,i)
i=-j
D.FT(d,"$",m.ad(0,new B.u(i*0.03,i*0.045)),j*0.09,A.pn,A.bg,0,l)
h=i*0.01
i=m.ad(0,new B.u(i*0.028,h))
g=B.M()
g.r=A.w.gp(0)
d.ah(i,2.4,g)
h=m.ad(0,new B.u(j*0.028,h))
g=B.M()
g.r=A.w.gp(0)
d.ah(h,2.4,g)
D.FT(d,"Saved: $"+(A.o.G(A.k.bu(a0*3),1000)+p),new B.u(j*0.05,j*0.06),j*0.08,A.c,A.bg,0,l)},
hRM(d,e,f,g){var x,w,v,u,t,s,r,q=$.X(),p=B.a([],y.v),o=new B.aP(q.r,A.ap,null,null,p)
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
$.X()
q=B.M()
q.r=g.gp(0)
d.aP(o,q)},
hRH(a1,a2,a3){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=a2.a,e=a2.b,d=$.X(),a0=B.M()
a0.r=C.bcv.gp(0)
a1.aX(new B.a9(0,0,0+f,0+e),a0)
x=new B.eJ()
x.dB(7)
for(a0=a3*3,w=a1.a,v=0;v<60;++v){u=A.k.G(A.k.G(x.aj()*f-a3*(10+x.aj()*60),f)+f,f)
t=x.aj()
s=x.aj()
r=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
r.r=A.c.j(0.5+0.5*Math.sin(a0+v)).gp(0)
q=r.H()
w.drawCircle(u,t*e*0.85,0.6+s*1.4,q)
q.delete()}p=f*1.2-A.k.G(a3*22,f*1.6)
a0=e*0.3
t=e*0.2
s=B.M()
s.saq(C.eau.av(0,B.bT(new B.u(p,a0),t)))
a1.ah(new B.u(p,a0),t,s)
a0=B.co(new B.u(p,a0),e*0.07,e*0.6)
s=B.M()
s.b=A.ae
s.c=3
s.r=A.bK.j(0.7).gp(0)
a1.hM(a0,s)
s=Math.sin(a3*2)
J.bA(w.save())
w.translate(f*0.42,e*0.52+s*e*0.04)
a1.iW(0,-0.25)
d=d.r
s=y.v
o=new B.aP(d,A.ap,g,g,B.a([],s))
a0=-e
t=a0*0.04
r=e*0.1
o.E(new B.b5(t,r))
n=e*0.04
o.E(new B.cS(0,e*(0.2+0.05*Math.sin(a3*30)),n,r))
o.E(new B.bF())
m=B.M()
l=e*0.12
m.saq(C.bSA.av(0,new B.a9(t,r,t+e*0.08,r+l)))
a1.aP(o,m)
k=new B.aP(d,A.ap,g,g,B.a([],s))
m=a0*0.17
k.E(new B.b5(0,m))
t=a0*0.05
j=e*0.05
k.E(new B.cS(e*0.09,t,j,r))
k.E(new B.ap(t,r))
k.E(new B.cS(a0*0.09,t,0,m))
k.E(new B.bF())
i=B.M()
h=a0*0.08
i.saq(C.bSP.av(0,new B.a9(h,m,h+e*0.16,m+e*0.27)))
a1.aP(k,i)
i=B.M()
i.r=A.aT.gp(0)
a1.ah(new B.u(0,t),e*0.035,i)
i=new B.aP(d,A.ap,g,g,B.a([],s))
i.E(new B.b5(t,n))
i.E(new B.ap(a0*0.1,l))
i.E(new B.ap(t,r))
i.E(new B.bF())
t=B.M()
t.r=A.ay.gp(0)
a1.aP(i,t)
s=new B.aP(d,A.ap,g,g,B.a([],s))
s.E(new B.b5(j,n))
s.E(new B.ap(r,l))
s.E(new B.ap(j,r))
s.E(new B.bF())
r=B.M()
r.r=A.ay.gp(0)
a1.aP(s,r)
w.restore()},
hOA(a1,a2,a3){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null,h=a2.a,g=a2.b,f=0+h,e=0+g,d=$.X(),a0=B.M()
a0.saq(C.bRC.av(0,new B.a9(0,0,f,e)))
a1.aX(new B.a9(0,0,f,e),a0)
for(f=a1.a,e=g*0.85,a0=g*0.7,x=y.v,d=d.r,w=0;w<4;++w){v=h*(0.1+0.25*w)
u=B.a([],x)
t=new B.aP(d,A.ap,i,i,u)
u.push(new B.b5(v,g))
u.push(new B.cS(v+Math.sin(a3+w)*10,e,v+4,a0+w*6))
u=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
u.b=A.ae
u.c=5
u.r=A.d_.gp(0)
s=u.H()
u=t.gbI().a.snapshot()
f.drawPath((t.e=new B.cF(u)).a,s)
s.delete()}e=A.k.G(a3*18,h*1.5)
J.bA(f.save())
f.translate(e-h*0.25,g*0.35+Math.sin(a3)*6)
e=B.co(A.J,g*0.22,g*0.5)
a0=B.M()
a0.r=A.bv.gp(0)
a1.hM(e,a0)
a0=new B.aP(d,A.ap,i,i,B.a([],x))
e=-g
u=e*0.22
a0.E(new B.b5(u,0))
a0.E(new B.cS(e*0.36,e*0.12+Math.sin(a3*3)*5,e*0.34,e*0.16))
t=e*0.02
a0.E(new B.cS(e*0.28,t,u,0))
u=B.M()
u.r=A.bv.gp(0)
a1.aP(a0,u)
u=g*0.03
a0=g*0.1
r=B.co(new B.u(0,u),a0,g*0.34)
q=B.M()
q.r=A.aL.gp(0)
a1.hM(r,q)
q=B.M()
q.r=A.c.gp(0)
a1.ah(new B.u(g*0.15,t),3,q)
q=B.M()
q.r=A.w.gp(0)
a1.ah(new B.u(g*0.155,t),1.5,q)
f.restore()
for(t=e*0.005,r=e*0.08,q=e*0.03,p=g*0.06,e*=0.04,o=h+40,n=a3*2,w=0;w<6;++w){m=(w&1)===0?1:-1
l=A.k.G(A.k.G(a3*(24+w*7)*m+w*80,o)+h+40,o)
k=Math.sin(n+w)
J.bA(f.save())
f.translate(l-20,g*(0.52+0.06*w)+k*6)
f.scale(m,1)
l=B.co(A.J,p,a0)
k=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
j=A.o.G(w,4)
k.r=C.aul[j].gp(0)
s=k.H()
f.drawOval(B.c1(l),s)
s.delete()
l=B.a([],x)
k=new B.aP(d,A.ap,i,i,l)
l.push(new B.b5(e,0))
l.push(new B.ap(r,q))
l.push(new B.ap(r,u))
l.push(new B.bF())
l=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
l.r=C.aul[j].gp(0)
s=l.H()
l=k.gbI().a.snapshot()
f.drawPath((k.e=new B.cF(l)).a,s)
s.delete()
l=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
l.r=A.w.gp(0)
s=l.H()
f.drawCircle(u,t,1.8,s)
s.delete()
f.restore()}for(w=0;w<14;++w){e=A.k.G(w*0.071+0.05,1)
d=A.k.G(a3*(14+w*3)+w*40,g)
a0=Math.sin(n+w)
x=A.o.G(w,3)
u=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
u.b=A.ae
u.c=1.2
u.r=A.c.j(0.7).gp(0)
s=u.H()
f.drawCircle(h*e+a0*4,g-d,2+x,s)
s.delete()}},
hPP(a7,a8,a9){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null,d=a8.a,a0=a8.b,a1=A.k.G(a9,12),a2=a1<7,a3=0+d,a4=0+a0,a5=$.X(),a6=B.M()
a6.saq(new B.a8(A.b0,A.b5,A.x,a2?C.d7L:C.cWI,e,e).av(0,new B.a9(0,0,a3,a4)))
a7.aX(new B.a9(0,0,a3,a4),a6)
a6=a0*0.74
x=B.M()
x.r=(a2?C.bgA:A.A7).gp(0)
a7.aX(new B.a9(0,a6,a3,a6+a0*0.26),x)
for(x=a7.a,w=a0*0.07,v=a0*0.06,u=a0*0.2,t=a0*0.1,s=a0*0.09,r=y.v,q=a9*2,a5=a5.r,p=0;p<4;++p){o=d*(0.08+0.24*p)
n=a0*(0.14+0.03*A.o.G(p,2))
m=a6-n
l=o+u
k=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
k.r=C.cJV[p].gp(0)
j=k.H()
x.drawRect(B.c1(new B.a9(o,m,l,m+n)),j)
j.delete()
k=B.a([],r)
i=new B.aP(a5,A.ap,e,e,k)
k.push(new B.b5(o-4,m))
k.push(new B.ap(o+t,m-s))
k.push(new B.ap(l+4,m))
k.push(new B.bF())
m=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
m.r=A.er.gp(0)
j=m.H()
m=i.gbI().a.snapshot()
x.drawPath((i.e=new B.cF(m)).a,j)
j.delete()
m=o+w
l=n*0.55
k=a6-l
i=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
i.r=(a2&&A.o.G(A.k.bu(q),2)===0?A.lB:A.fv).gp(0)
j=i.H()
x.drawRect(B.c1(new B.a9(m,k,m+v,k+l)),j)
j.delete()}if(a2){for(a6=a9*20,v=a9*260,u=a0*0.8,p=0;p<70;++p){o=A.k.G(p*37+a6,d)
h=A.k.G(p*53+v,u)
s=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
s.r=A.fg.gp(0)
s.c=1.4
j=s.H()
x.drawLine.apply(x,[o,h,o-3,h+9,j])
j.delete()}a6=a9*3
if(A.o.G(A.k.bu(a6),7)===0&&A.k.G(a6,1)<0.3){a6=B.M()
a6.r=A.c.j(0.5).gp(0)
a7.aX(new B.a9(0,0,a3,a4),a6)
r=new B.aP(a5,A.ap,e,e,B.a([],r))
r.E(new B.b5(d*0.6,t))
t=d*0.55
a5=a0*0.3
r.E(new B.ap(t,a5))
r.E(new B.ap(d*0.62,a5))
r.E(new B.ap(t,a0*0.55))
t=B.M()
t.b=A.ae
t.c=4
t.r=A.lB.gp(0)
a7.aP(r,t)}}else{for(a3=d*0.5,a4=a0*0.035,a5=3.141592653589793*A.k.D((a1-7)/2,0,1)*57.29577951308232,p=0;p<6;++p){v=d*(0.9-p*0.07)
v=B.co(new B.u(a3,a6),v,v)
u=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
u.b=A.ae
u.c=a4
u.r=C.dbH[p].j(0.9).gp(0)
j=u.H()
x.drawArc.apply(x,[B.c1(v),180,a5,!1,j])
j.delete()}a3=B.M()
a3.r=A.dN.gp(0)
a7.ah(new B.u(d*0.86,a0*0.16),a0*0.08,a3)}for(a3=d+120,p=0;p<3;++p){o=A.k.G(a9*(8+p*4)+p*120,a3)-60
for(a4=a0*(0.12+0.1*p),g=0;g<4;++g){f=C.cfe[g]
$.X()
a5=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
a5.r=(a2?A.bm:A.c.j(0.95)).gp(0)
j=a5.H()
x.drawCircle(o+f.a,a4+f.b,w,j)
j.delete()}}},
hRI(a1,a2,a3){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=a2.a,a0=a2.b
$.X()
x=B.M()
x.r=A.db.gp(0)
a1.aX(new B.a9(0,0,0+d,0+a0),x)
w=B.M()
w.r=A.c.j(0.05).gp(0)
for(x=a1.a,v=0;v<d;v+=16){u=w.H()
x.drawLine.apply(x,[v,0,v,a0,u])
u.delete()}for(t=0;t<a0;t+=16){u=w.H()
x.drawLine.apply(x,[0,t,d,t,u])
u.delete()}s=d*0.14
r=a0*0.2
q=a0*0.08
p=B.bz(new B.a9(s,r,s+d*0.72,r+a0*0.5),new B.aW(q,q))
o=new B.aP($.X().r,A.ap,null,null,B.a([],y.v))
o.E(new B.iT(p))
r=B.M()
r.b=A.ae
r.c=5
r.r=A.bv.gp(0)
a1.aP(o,r)
n=new B.RW(new B.vm(B.wP(o),!1,B.a([],y.L))).gL(0)
r=n.a
m=n.b
r.jk()
l=r.e
k=l[m].b
k===$&&B.c()
k=k.a.length()
r.jk()
j=l[m].b
j===$&&B.c()
i=A.k.G(a3*k/5,j.a.length())
for(h=0;h<10;++h){r.jk()
k=l[m].b
k===$&&B.c()
k=A.k.G(i-h*9,k.a.length())
r.jk()
g=l[m].Mi(k).a
k=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
k.r=A.dN.j(1-h*0.09).gp(0)
k.z=L.Qv
u=k.H()
x.drawCircle(g.a,g.b,6-h*0.5,u)
u.delete()}x=a0*0.45
r=B.bz(B.co(new B.u(s,x),a0*0.22,a0*0.12),A.ii)
m=B.M()
m.r=A.d_.gp(0)
a1.aD(r,m)
D.FT(a1,"+",new B.u(s-5,a0*0.33),a0*0.07,A.c,A.bg,0,null)
f=(Math.sin(a3*2)+1)/2
e=new B.u(d*0.86,x)
x=B.M()
x.r=A.dN.j(0.25+0.5*f).gp(0)
x.z=H.Hc
a1.ah(e,a0*0.16,x)
x=B.M()
x.r=B.aq(A.bJ,A.or,f).gp(0)
a1.ah(e,q,x)
D.FT(a1,"Electricity needs a full loop!",new B.u(0,a0*0.74),a0*0.075,A.hi,A.L,0,d)},
hLe(a4,a5,a6){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=a5.a,a1=a5.b,a2=0+a0,a3=0+a1
$.X()
x=B.M()
x.saq(C.bUL.av(0,new B.a9(0,0,a2,a3)))
a4.aX(new B.a9(0,0,a2,a3),x)
x=a1*0.82
a3=B.M()
a3.r=A.db.gp(0)
a4.aX(new B.a9(0,x,a2,x+a1*0.18),a3)
for(a2=a0*0.1,a3=a4.a,w=0;w<7;++w){v=a0*(0.05+w*0.15)
u=a1*(0.1+0.07*A.o.G(w*5,4))
t=x-u
s=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
s.r=A.aB.gp(0)
r=s.H()
a3.drawRect(B.c1(new B.a9(v,t,v+a2,t+u)),r)
r.delete()}for(a2=a1*0.2,t=a6*0.55,q=0;q<4;++q){s=t+q*0.27
p=A.k.G(s,1)
o=A.k.bu(s)*7+q*3
n=a0*(0.15+0.7*A.k.G(o*0.37,1))
m=a1*(0.2+0.25*A.k.G(o*0.53,1))
l=C.ato[A.o.G(Math.abs(o),5)]
if(p<0.3){$.X()
s=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
s.r=A.c.gp(0)
r=s.H()
a3.drawCircle(n,x-(x-m)*(p/0.3),2.5,r)
r.delete()}else{w=(p-0.3)/0.7
for(s=w*w*a1*0.08,k=1-w,j=2.4*k+0.4,i=0;i<28;++i){h=i*3.141592653589793*2/28
g=a2*A.dV.aw(0,w)
f=Math.cos(h)
e=Math.sin(h)
$.X()
d=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
d.r=l.j(A.k.D(k,0,1)).gp(0)
d.z=C.djN
r=d.H()
a3.drawCircle(n+f*g,m+e*g+s,j,r)
r.delete()}}}},
hSm(a4,a5,a6){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=a5.a,d=a5.b,a0=0+e,a1=0+d,a2=$.X(),a3=B.M()
a3.saq(C.anw.av(0,new B.a9(0,0,a0,a1)))
a4.aX(new B.a9(0,0,a0,a1),a3)
for(a1=a4.a,a3=y.v,x=0;x<2;++x,a2=w){w=B.a([],a3)
v=new B.aP(a2.r,A.ap,null,null,w)
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
w=$.X()
t=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
t.r=(a2?A.E5:A.A7).gp(0)
q=t.H()
a2=v.e
a1.drawPath((a2==null?v.e=new B.cF(v.gbI().a.snapshot()):a2).a,q)
q.delete()}a2=d*0.8
a3=B.M()
a3.r=A.bv.gp(0)
a4.aX(new B.a9(0,a2,a0,a2+d*0.04),a3)
for(u=-A.k.G(a6*80,24),a0=d*0.84,a3=d*0.03,w=a0+a3;u<e;u+=24){t=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
t.r=A.fv.gp(0)
q=t.H()
a1.drawRect(B.c1(new B.a9(u,a0,u+8,w)),q)
q.delete()}p=Math.sin(a6*14)*1.2
o=e*0.12
for(a0=a2+p,a2=d*0.025,w=e*0.012,t=d*0.02,s=d*0.62+p,a3=s+a3,r=a3+d*0.06,n=s+d*0.18,m=0;m<4;++m){l=m===0
k=o+e*(l?0.16:0.15)
j=B.bz(new B.a9(o,s,k,n),new B.aW(t,t))
i=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
i.r=(l?A.bI:C.cWK[m-1]).gp(0)
q=i.H()
a1.drawRRect(B.eq(j),q)
q.delete()
for(k-=o,j=k*0.18,h=0;h<3;++h){i=o+k*(0.12+h*0.28)
g=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
g.r=A.fg.gp(0)
q=g.H()
a1.drawRect(B.c1(new B.a9(i,a3,i+j,r)),q)
q.delete()}j=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
j.r=A.bh.gp(0)
q=j.H()
a1.drawCircle(o+k*0.25,a0,a2,q)
q.delete()
j=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
j.r=A.bh.gp(0)
q=j.H()
a1.drawCircle(o+k*0.75,a0,a2,q)
q.delete()
o+=k+w}for(a0=a6*0.8,a2=e*0.2,a3=d*0.6,m=0;m<5;++m){f=A.k.G(a0+m*0.2,1)
w=f*d
s=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
s.r=A.c.j(0.7*(1-f)).gp(0)
q=s.H()
a1.drawCircle(a2-f*e*0.12,a3-w*0.25,t+w*0.04,q)
q.delete()}},
hQB(a2,a3,a4){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=a3.a,d=a3.b,a0=0+e,a1=0+d
$.X()
x=B.M()
w=a4*2
v=B.aq(A.jr,A.fh,(Math.sin(w)+1)/2)
v.toString
x.saq(new B.a8(A.ax,A.aC,A.x,B.a([v,A.aB],y.O),null,null).av(0,new B.a9(0,0,a0,a1)))
a2.aX(new B.a9(0,0,a0,a1),x)
for(a0=a2.a,a1=d*0.86,x=e/8-2,v=d*0.14,u=a1+v,t=0;t<8;++t){s=e*t/8
r=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
r.r=(A.k.G(w+t,2)<1?A.bU:A.aT).j(0.5).gp(0)
q=r.H()
a0.drawRect(B.c1(new B.a9(s,a1,s+x,u)),q)
q.delete()}a1=a4*6
p=Math.sin(a1)
J.bA(a0.save())
x=-d
a0.translate(e*0.5,d*0.55+Math.abs(p)*x*0.03)
a2.iW(0,p*0.06)
u=d*0.26
s=d*0.3
r=d*0.04
o=B.bz(B.co(A.J,s,u),new B.aW(r,r))
n=B.M()
n.saq(C.bV9.av(0,B.co(A.J,s,u)))
a2.aD(o,n)
n=d*0.08
v=B.co(new B.u(0,d*0.02),n,v)
o=B.M()
o.r=A.b8.j(0.7).gp(0)
a2.aX(v,o)
o=B.bz(B.co(new B.u(0,x*0.25),d*0.17,d*0.22),new B.aW(r,r))
v=B.M()
v.r=A.cp.gp(0)
a2.aD(o,v)
m=A.k.G(a4*1.3,1)>0.08
for(v=x*0.26,u=d*0.025,l=0;l<2;++l){k=C.ceS[l]
s=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
s.r=(m?A.b8:A.fh).gp(0)
q=s.H()
a0.drawCircle(k*d,v,u,q)
q.delete()}v=B.M()
v.r=A.ad.gp(0)
v.c=3
a2.bA(new B.u(0,x*0.335),new B.u(0,x*0.38),v)
v=B.M()
v.r=A.ay.gp(0)
a2.ah(new B.u(0,x*0.39),d*0.015,v)
for(v=-p,u=d*0.035,s=d*0.15,o=d*0.28,x*=0.08,l=0;l<2;++l){j=C.oO[l]
J.bA(a0.save())
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
for(a0=a4*0.7,a1=d*0.7,t=0;t<4;++t){f=A.k.G(a0+t*0.25,1)
D.FT(a2,"\u266a",new B.u(e*(0.2+0.18*t)+Math.sin(w+t)*8,a1-f*d*0.5),n,A.c.j(1-f),A.bg,0,null)}},
hLp(a1,a2,a3){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=a2.a,e=a2.b,d=0+f,a0=0+e
$.X()
x=B.M()
x.saq(C.bTL.av(0,new B.a9(0,0,d,a0)))
a1.aX(new B.a9(0,0,d,a0),x)
x=B.M()
x.r=A.dN.gp(0)
a1.ah(new B.u(f*0.12,e*0.16),e*0.07,x)
x=e*0.72
a0=B.M()
a0.r=A.E5.gp(0)
a1.aX(new B.a9(0,x,d,x+e*0.28),a0)
for(d=a3*0.25,a0=e*0.78,x=a1.a,w=e*0.016,v=a3*0.3,u=e*0.022,t=0;t<9;++t){s=f*(0.07+t*0.105)
r=A.k.D(A.k.G(d-t*0.12,3),0,1)
q=A.o.G(t,3)
p=s+Math.sin(a3+t)*3
q=a0-e*(0.12+0.05*q)*r
o=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
o.r=A.hh.gp(0)
o.c=3
n=o.H()
x.drawLine.apply(x,[s,a0,p,q,n])
n.delete()
if(r>0.7){for(m=0;m<6;++m){l=m*3.141592653589793/3+v
o=Math.cos(l)
k=Math.sin(l)
j=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
j.r=C.avm[A.o.G(t,5)].gp(0)
n=j.H()
x.drawCircle(p+o*e*0.028,q+k*e*0.028,u,n)
n.delete()}o=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
o.r=A.dN.gp(0)
n=o.H()
x.drawCircle(p,q,w,n)
n.delete()}}for(d=e*0.03,a0=e*0.05,w=e*0.06,v=a3*0.9,u=a3*1.3,q=a3*18,t=0;t<3;++t){s=f*(0.2+0.28*t)+Math.sin(v+t*2)*f*0.12
i=e*(0.3+0.1*t)+Math.cos(u+t)*e*0.06
h=Math.abs(Math.sin(q+t))
for(p=a0*h+2,o=(t+2)%5,g=0;g<2;++g){k=B.co(new B.u(s+C.oO[g]*e*0.025*h,i),w,p)
j=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
j.r=C.avm[o].gp(0)
n=j.H()
x.drawOval(B.c1(k),n)
n.delete()}p=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
p.r=A.bh.gp(0)
p.c=2
n=p.H()
x.drawLine.apply(x,[s,i-d,s,i+d,n])
n.delete()}},
fKi(d,e,f,g,h,i){return B.a6(d,!1).c8(B.uw(null,!1,!0,!0,new D.fKj(e,h,g,i,f),A.eN,null,A.pB,new D.fKk(),y.S))},
xm:function xm(d,e){this.a=d
this.b=e},
fkV:function fkV(d,e,f){this.a=d
this.b=e
this.c=f},
fKj:function fKj(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fKk:function fKk(){},
VB:function VB(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aDi:function aDi(d,e){var _=this
_.e=_.d=$
_.f=-1
_.r=!1
_.w=null
_.x=0
_.y=!0
_.z=null
_.bq$=d
_.a7$=e
_.c=_.a=null},
eBk:function eBk(d){this.a=d},
eBj:function eBj(d){this.a=d},
eBi:function eBi(d,e){this.a=d
this.b=e},
eBl:function eBl(d,e){this.a=d
this.b=e},
eBu:function eBu(d){this.a=d},
eBt:function eBt(d){this.a=d},
eBs:function eBs(){},
eBn:function eBn(d){this.a=d},
eBo:function eBo(d){this.a=d},
eBp:function eBp(d){this.a=d},
eBq:function eBq(d){this.a=d},
eBm:function eBm(d){this.a=d},
eBr:function eBr(d){this.a=d},
eBh:function eBh(d){this.a=d},
eBg:function eBg(d){this.a=d},
bsV:function bsV(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.a=h},
aL5:function aL5(){},
fXn(d){var x
A:{if("lgtv"===d){x="lg"
break A}if("sonytv"===d){x="sony"
break A}if("appletv"===d){x="apple"
break A}if("bangtv"===d){x="bo"
break A}x="samsung"
break A}return x},
i4W(d){var x,w=D.fXn(d)
A:{if("lg"===w){x=A.hg
break A}if("sony"===w){x=A.dz
break A}if("apple"===w){x=A.bR
break A}if("bo"===w){x=C.t1
break A}x=A.aT
break A}return x},
aqI:function aqI(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bjd:function bjd(){this.d=0
this.c=this.a=null},
eBe:function eBe(d,e){this.a=d
this.b=e},
eBf:function eBf(d,e){this.a=d
this.b=e},
eBb:function eBb(){},
eBa:function eBa(d){this.a=d},
eBc:function eBc(d){this.a=d},
eBd:function eBd(d){this.a=d},
eB8:function eB8(d){this.a=d},
eB9:function eB9(d,e){this.a=d
this.b=e},
hAZ(b3,b4,b5,b6,b7){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9=A.o.an(22050*b4,1000),b0=a9*2,b1=new DataView(new ArrayBuffer(44+b0)),b2=new D.cdF(b1)
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
x=new B.eJ()
x.dB(3)
w=3
v=0.006
u=!1
t=0
switch(b7){case"piano":s=C.cQh
r=C.cVi
w=3.4
break
case"organ":s=C.cUg
r=C.d7P
v=0.02
u=!0
break
case"bell":s=C.cM9
r=C.cL2
w=2.4
break
case"pluck":s=C.cQg
r=C.cx_
w=7
break
case"synth":s=C.d8E
r=C.dai
v=0.012
u=!0
break
case"flute":s=C.dem
r=C.c7D
v=0.07
u=!0
t=0.035
break
default:s=C.anW
r=C.anW}b0=s.length
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
break A}if(p){a3=A.k.G(e/6.283185307179586,1)*1.2-0.6
break A}a3=Math.sin(e)
break A}a4=a3*(Math.min(1,d/120)*Math.pow(a1,1.6))}b1.setInt16(44+d*2,A.o.D(A.k.V(a4*0.8*32e3),-32768,32767),!0)}return J.eQ(A.dC.gaM(b1))},
dF(d,e,f,g,h,i){return D.hB_(d,e,f,g,h,i)},
hB_(d,e,f,g,h,i){var x=0,w=B.j(y.H),v=1,u=[],t,s,r,q,p,o
var $async$dF=B.e(function(j,k){if(j===1){u.push(k)
x=v}for(;;)switch(x){case 0:v=3
t=""+A.k.V(d)+"|"+f+"|"+i+"|"+B.t(g)+"|"+e
s=$.hAY.cg(0,t,new D.cdH(d,f,i,g,e))
if($.cdE.length<12){q=B.ahu()
q.Ms(A.aLf)
$.cdE.push(q)}q=$.h5z
$.h5z=q+1
r=$.cdE[A.o.G(q,$.cdE.length)]
x=6
return B.b(J.hoc(r,new B.a2p(s,null),h),$async$dF)
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
cdF:function cdF(d){this.a=d},
cdH:function cdH(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h}},C,M,N
J=c[1]
B=c[0]
A=c[2]
G=c[111]
E=c[115]
H=c[118]
I=c[169]
K=c[91]
F=c[240]
L=c[92]
D=a.updateHolder(c[26],D)
C=c[93]
M=c[103]
N=c[228]
D.w6.prototype={}
D.vz.prototype={}
D.xm.prototype={}
D.VB.prototype={
U(){return new D.aDi(null,null)}}
D.aDi.prototype={
gad1(){var x,w=this,v=w.d
if(v===$){x=B.bj(null,A.nP,null,1,null,w)
x.cq(0)
w.d!==$&&B.bM()
w.d=x
v=x}return v},
gCS(){var x=this.e
return x===$?this.e=this.a.e:x},
a_(){var x=this
x.a1()
x.w=B.cM(x.a.r,x.gaXB())
x.aTN()
D.dF(520,"",80,0,0.25,"tri")},
aTN(){var x=this.z
if(x!=null)x.a8(0)
this.z=B.cM(A.jU,new D.eBk(this))},
c4k(){var x=this.c
if(x!=null&&B.a6(x,!1).pl()){x=this.c
x.toString
B.a6(x,!1).O(this.gCS())}},
ahW(){var x=this,w=x.w
if(w!=null)w.a8(0)
x.w=null
x.y=!0
x.aTN()},
avO(d){this.m(new D.eBi(this,d))
D.dF(900,"",40,0,0.3,"noise")},
aZl(d){this.m(new D.eBl(this,d))
D.dF(700,"",60,0,0.3,"tri")},
q(){var x=this,w=x.w
if(w!=null)w.a8(0)
w=x.z
if(w!=null)w.a8(0)
x.gad1().q()
x.buc()},
B(d){var x,w,v,u,t=this,s=null,r=B.m(10),q=B.I(t.gc4l(),A.q,6),p=B.a([new B.ac(0,A.G,D.i4W(t.a.d).j(0.25),A.J,40)],y.V),o=B.m(4),n=y.p,m=B.a([B.c6(t.gad1(),new D.eBt(t),s)],n)
if(t.r)m.push(t.bzB())
r=B.av(new B.fG(1.7777777777777777,B.p(s,B.bw(o,new B.an(A.W,s,A.b_,A.r,m,s),A.aq),A.f,s,s,new B.o(s,s,q,r,p,s,A.n),s,s,s,s,s,s,s,s),s),s,s,s)
q=t.y
p=q?1:0
o=B.nw(s,A.aX,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s)
o=B.aH(s,s,s,s,B.W(A.cA,A.c,s,s,s,s),s,s,s,t.gaXB(),s,s,s,o,"Back to the board",s)
m=B.m(20)
x=t.f
w=t.a
o=B.A(B.a([o,A.b4,B.p(s,B.d(x>=0?w.c+" \xb7 "+C.k_[x].a:w.c+" \xb7 CH "+(t.gCS()+1),s,s,s,s,s,s,M.zj,s,s,s),A.f,s,s,new B.o(A.aX,s,s,m,s,s,A.n),s,s,s,s,A.mh,s,s,s)],n),A.m,s,A.e,A.j,0,s,s)
m=t.cl4()
x=A.w.j(0.65)
w=B.m(18)
v=t.f
v=B.d(v>=0?C.k_[v].a:C.Pp[t.gCS()].a,s,s,s,s,s,s,A.i3,A.L,s,s)
u=t.f
return B.c8(s,A.w,B.bn(!0,B.aE(A.c5,new B.an(A.W,s,A.b_,A.r,B.a([r,B.CO(B.e1(B.v(B.a([new B.C(C.bow,o,s),A.an,m,A.b4,B.p(s,B.v(B.a([v,B.d(u>=0?C.k_[u].c:C.Pp[t.gCS()].b,s,s,s,s,s,s,K.a6U,A.L,s,s)],n),A.m,s,A.e,A.Q,0,A.p),A.f,s,s,new B.o(x,s,s,w,s,s,A.n),s,s,s,A.bk,A.bS,s,s,s)],n),A.m,s,A.e,A.j,0,A.p),!q,s),A.bc,A.i8,p)],n),s),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new D.eBu(t),s,s,s,s,s,s,!1,A.a8),!0,!1,A.af,!0,!0),s,!1,!1,s,s)},
cl4(){var x=this,w=null,v=new D.eBs(),u=A.w.j(0.72),t=B.m(22),s=B.I(A.aT.j(0.5),A.q,1)
return B.p(w,B.A(B.a([v.$3(A.y0,"CH \u2212",new D.eBn(x)),v.$3(A.hx,"CH +",new D.eBo(x)),v.$5$color$on(A.FP,"TV",new D.eBp(x),A.aT,x.f<0),v.$5$color$on(A.xK,"APPS",new D.eBq(x),A.by,x.r),v.$5$color$on(A.Bg,"ADS",new D.eBr(x),A.bU,x.f===0)],y.p),A.m,w,A.e,A.Q,0,w,w),A.f,w,w,new B.o(u,w,s,t,w,w,A.n),w,w,w,w,A.Yi,w,w,w)},
bzB(){return new D.aqI(this.a.d,this.gc9X(),new D.eBh(this),null)},
gc4l(){var x,w=D.fXn(this.a.d)
A:{if("apple"===w){x=A.dz
break A}if("bo"===w){x=C.DW
break A}if("sony"===w){x=C.b5L
break A}if("lg"===w){x=A.e8
break A}x=A.cC
break A}return x}}
D.bsV.prototype={
a5(d,e){var x=this
return D.fX1(d,e,x.b,x.d,x.e,x.c)},
ar(d){return!0}}
D.aL5.prototype={
q(){var x=this,w=x.a7$
if(w!=null)w.a3(0,x.gbv())
x.a7$=null
x.a2()},
aQ(){this.aY()
this.aW()
this.bw()}}
D.aqI.prototype={
U(){return new D.bjd()},
a4M(d,e){return this.d.$1(e)}}
D.bjd.prototype={
aXC(d){this.m(new D.eBe(this,d))
this.a.a4M(0,d)},
B(d){var x,w=this,v=D.fXn(w.a.c)
A:{if("lg"===v){x=w.bYm()
break A}if("sony"===v){x=w.csE()
break A}if("apple"===v){x=w.c4m()
break A}if("bo"===v){x=w.bAt()
break A}x=w.cn6()
break A}return x},
gad2(){var x=new B.S(Date.now(),0,!1)
return A.a.aT(A.o.u(B.di(x)),2,"0")+":"+A.a.aT(A.o.u(B.fY(x)),2,"0")},
avP(d,e,f,g,h,i,j){var x,w,v=null,u=C.k_[d],t=this.d===d,s=u.d,r=B.aq(s,A.w,0.55)
r.toString
r=B.a([s,r],y.O)
s=B.m(h)
if(t)x=i
else x=A.K
x=B.I(x,A.q,t?2.5:0)
w=B.a([B.d(u.b,v,v,v,v,v,v,B.l(v,v,v,v,v,v,v,v,v,v,v,e,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],y.p)
if(g)w.push(new B.C(A.v5,B.d(u.a,v,1,A.a2,v,v,v,A.T8,v,v,v),v))
return B.aE(v,B.p(v,B.v(w,A.m,v,A.bb,A.j,0,A.p),A.f,v,v,new B.o(v,v,x,s,v,new B.a8(A.ax,A.aC,A.x,r,v,v),A.n),v,f,v,v,v,v,v,j),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new D.eBf(this,d),v,v,v,v,v,v,!1,A.a8)},
aXD(d,e,f,g,h,i){return this.avP(d,e,f,!1,g,h,i)},
cn6(){var x,w,v,u,t,s,r=this,q=null,p=r.a.e,o=y.p,n=B.A(B.a([C.ffR,A.ab,C.f8o,A.b4,C.bLS,A.ab,C.bHT,A.ab,B.d(r.gad2(),q,q,q,q,q,q,C.aPf,q,q,q)],o),A.m,q,A.e,A.j,0,q,q),m=C.k_[r.d],l=B.d(m.a,q,q,q,q,q,q,A.mC,q,q,q)
m=B.d(m.c,q,1,A.a2,q,q,q,C.f0m,q,q,q)
x=A.c.j(0.08)
w=B.a([],o)
for(v=0;v<2;++v){u=new B.aW(8,8)
w.push(B.p(q,B.W(C.ceG[v],A.ad,q,q,q,17),A.f,q,q,new B.o(A.bF,q,q,new B.bq(u,u,u,u),q,q,A.n),q,34,q,A.Ls,q,q,q,34))}u=B.a([],o)
for(t=0;t<8;++t){s=r.d===t?1.12:1
u.push(new B.C(A.Ls,new B.yl(r.avP(t,14,44,!0,8,A.aT,52),s,A.bc,A.fF,q,q),q))}w.push(B.D(B.cd(B.A(u,A.m,q,A.e,A.j,0,q,q),A.r,q,A.y,q,q,q,q,A.aO),1))
return B.aE(q,B.p(q,B.v(B.a([n,A.b4,new B.bH(A.a3,q,q,l,q),new B.bH(A.a3,q,q,m,q),A.an,B.p(q,B.A(w,A.m,q,A.e,A.j,0,q,q),A.f,q,q,new B.o(x,q,q,A.UB,q,q,A.n),q,q,q,q,A.LW,q,q,q)],o),A.m,q,A.e,A.j,0,A.p),A.f,q,q,C.aZ1,q,q,q,q,E.ag1,q,q,q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,p,q,q,q,q,q,q,!1,A.a8)},
bYm(){var x=null,w=this.a.e,v=y.p
return B.aE(x,B.p(x,B.v(B.a([B.A(B.a([B.p(x,C.flO,A.f,x,x,new B.o(A.hg,x,x,B.m(10),x,x,A.n),x,x,x,x,A.n5,x,x,x),A.bp,C.feQ,A.b4,B.d(this.gad2(),x,x,x,x,x,x,A.CV,x,x,x)],v),A.m,x,A.e,A.j,0,x,x),A.b4,new B.a7(x,62,B.hH(x,new D.eBa(this),8,x,x,A.aO,new D.eBb(),!1),x)],v),A.F,x,A.e,A.j,0,A.p),A.f,x,x,C.aZc,x,x,x,x,N.LA,x,x,x),A.y,!1,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,w,x,x,x,x,x,x,!1,A.a8)},
csE(){var x,w,v,u,t=this,s=null,r=C.k_[t.d],q=t.a.e,p=y.p,o=B.a([B.p(s,C.eGj,A.f,s,s,new B.o(A.dp,s,s,B.m(12),s,s,A.n),s,s,s,s,A.xu,s,s,s),A.ab],p)
for(x=0;x<3;++x){w=C.d52[x]
v=w==="Apps"?A.c:A.az
o.push(new B.C(A.jc,new B.x(w,s,new B.G(!0,v,s,s,s,s,9.5,A.P,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s),s,s,s,s,s,s,s,s,s),s))}o.push(A.b4)
o.push(B.d(t.gad2(),s,s,s,s,s,s,C.f_L,s,s,s))
o=B.A(o,A.m,s,A.e,A.j,0,s,s)
v=r.d
u=B.aq(v,A.w,0.7)
u.toString
u=B.a([v,u],y.O)
v=B.m(10)
return B.aE(s,B.p(s,B.v(B.a([o,A.fZ,B.D(B.A(B.a([B.D(B.p(s,B.v(B.a([B.d(r.b,s,s,s,s,s,s,A.uv,s,s,s),B.d(r.a,s,s,s,s,s,s,A.nn,s,s,s),B.d(r.c,s,2,A.a2,s,s,s,C.f5U,s,s,s),A.cX,B.aE(s,B.p(s,C.fbT,A.f,s,s,new B.o(A.c,s,s,B.m(10),s,s,A.n),s,s,s,s,A.xu,s,s,s),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new D.eBc(t),s,s,s,s,s,s,!1,A.a8)],p),A.F,s,A.lR,A.j,0,A.p),A.f,s,s,new B.o(s,s,s,v,s,new B.a8(A.a3,A.a7,A.x,u,s,s),A.n),s,s,s,s,A.ck,s,s,s),5),A.ab,B.D(B.id(!0,s,s,A.y,C.eMe,new D.eBd(t),8,A.af,s,A.ah,!1),6)],p),A.m,s,A.e,A.j,0,s,s),1)],p),A.F,s,A.e,A.j,0,A.p),A.f,C.bg6,s,s,s,s,s,s,A.fH,s,s,s),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,q,s,s,s,s,s,s,!1,A.a8)},
c4m(){var x,w,v,u,t=this,s=null,r=t.a.e,q=y.p,p=B.A(B.a([C.bMt,A.q9,C.frw,A.b4,B.d(t.gad2(),s,s,s,s,s,s,A.CZ,s,s,s)],q),A.m,s,A.e,A.j,0,s,s),o=B.a([],q)
for(x=0;x<8;++x){w=t.d===x
v=w?6:0
u=w?C.da3:A.PJ
w=w?1.18:1
o.push(new B.C(A.eQ,B.dh(s,new B.yl(t.aXD(x,20,44,12,A.c,44),w,A.bc,A.eE,s,s),s,s,A.bc,new B.o(s,s,s,s,u,s,A.n),A.eE,s,s,new B.Q(0,0,0,v),s,s,s,s),s))}return B.aE(s,B.p(s,B.v(B.a([p,A.b4,new B.a7(s,68,B.cd(B.A(o,A.dG,s,A.e,A.j,0,s,s),A.r,s,A.y,s,s,s,s,A.aO),s),A.at,B.d(C.k_[t.d].a,s,s,s,s,s,s,A.ob,s,s,s)],q),A.m,s,A.e,A.j,0,A.p),A.f,s,s,C.aZ3,s,s,s,s,C.XC,s,s,s),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,r,s,s,s,s,s,s,!1,A.a8)},
bAt(){var x,w,v,u,t,s,r=this,q=null,p=r.a.e,o=C.k_[r.d],n=y.p
o=B.D(B.v(B.a([C.fbt,A.b4,B.d(o.b,q,q,q,q,q,q,A.us,q,q,q),A.at,B.d(o.a,q,q,q,q,q,q,C.eTr,q,q,q),A.bB,B.d(o.c,q,q,q,q,q,q,C.f6d,q,q,q),A.an,B.aE(q,B.p(q,C.ftz,A.f,q,q,C.aZy,q,q,q,q,C.bnF,q,q,q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new D.eB8(r),q,q,q,q,q,q,!1,A.a8),A.b4],n),A.F,q,A.e,A.j,0,A.p),4)
x=B.p(q,q,A.f,C.be9,q,q,q,q,q,A.fT,q,q,q,0.6)
w=B.a([],n)
for(v=0;v<8;++v){u=C.k_[v]
t=r.d===v
s=t?C.t1:C.abt
t=t?12:10.5
w.push(B.aE(q,new B.C(A.xi,new B.x(u.a,q,new B.G(!0,s,q,"serif",q,q,t,A.jV,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q),q,q,q,q,q,q,q,q,q),q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new D.eB9(r,v),q,q,q,q,q,q,!1,A.a8))}return B.aE(q,B.p(q,B.A(B.a([o,x,B.D(B.cB(w,q,q,q,q,A.ah,!1),3)],n),A.m,q,A.e,A.j,0,q,q),A.f,C.bjj,q,q,q,q,q,q,A.F5,q,q,q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,p,q,q,q,q,q,q,!1,A.a8)}}
var z=a.updateTypes(["~()","VB(Y,bp<N>,bp<N>)","~(H)"])
D.fkJ.prototype={
$1(d){var x=null,w=B.i1(x,x,1,x,B.dn(x,x,x,x,x,x,x,x,x,B.l(x,x,this.b,x,x,x,x,x,x,x,x,d,x,x,A.u,x,x,!0,x,x,x,x,x,x,x,x),this.a),A.a4,A.cc,x,A.eh,A.ca)
w.eI()
return w},
$S:747}
D.fcG.prototype={
$1(d){var x=this,w=null,v=x.c?A.u:A.a5
v=B.i1(w,w,1,w,B.dn(w,w,w,w,w,w,w,w,w,B.l(w,w,x.b,w,w,w,w,w,w,w,w,d,w,w,v,w,w,!0,w,x.d,w,w,w,w,w,w),x.a),A.a4,A.cc,w,A.eh,A.ca)
v.eI()
return v},
$S:747}
D.fkV.prototype={
$5(d,e,f,g,h){var x,w,v,u,t,s,r,q=this
if(g===0||h<=0)return
x=f*A.k.D(h,0,1)
w=d.ad(0,new B.u(Math.cos(e)*x,-Math.sin(e)*x))
v=q.a
$.X()
u=B.M()
u.r=A.fv.gp(0)
u.c=g*2.2
u.d=A.bO
v.bA(d,w,u)
if(h>0.95){t=Math.sin(q.b*1.6+g)*0.04
u=f*0.72
s=g-1
r=h*1.6-0.9
q.$5(w,e+0.5+t,u,s,r-(5-g)*0)
q.$5(w,e-0.5+t,u,s,r)}if(g===1&&h>0.5){u=B.M()
u.r=B.aq(A.d_,A.b7,(Math.sin(q.b*2+w.a)+1)/2).gp(0)
v.ah(w,q.c*0.035,u)}},
$S:1933}
D.fKj.prototype={
$3(d,e,f){var x=this
return new D.VB(x.d,x.e,x.a,x.c,x.b,null)},
$C:"$3",
$R:3,
$S:z+1}
D.fKk.prototype={
$4(d,e,f,g){var x=y.t
return new B.cY(e,!1,B.ij(A.A,g,null,new B.bf(B.cJ(A.cr,e,null),new B.bo(0.85,1,x),x.k("bf<bI.T>"))),null)},
$C:"$4",
$R:4,
$S:31}
D.eBk.prototype={
$0(){var x=this.a
if(x.c!=null&&!x.r)x.m(new D.eBj(x))},
$S:0}
D.eBj.prototype={
$0(){return this.a.y=!1},
$S:0}
D.eBi.prototype={
$0(){var x,w=this.a
w.f=-1
w.e=A.o.G(w.gCS()+this.b,10)
if(w.gCS()<0)w.e=w.gCS()+10
x=w.gad1().y
x=x==null?null:A.o.an(x.a,1000)
w.x=x==null?0:x
w.ahW()},
$S:0}
D.eBl.prototype={
$0(){var x=this.a
x.f=this.b
x.r=!1
x.ahW()},
$S:0}
D.eBu.prototype={
$0(){var x=this.a
return x.m(x.gcxB())},
$S:0}
D.eBt.prototype={
$2(d,e){var x=null,w=this.a,v=w.gad1().y,u=v==null?x:A.o.an(v.a,1000),t=(u==null?0:u)/1000,s=w.x===0&&w.a.f?t:99
return B.b3(x,x,x,new D.bsV(w.gCS(),w.f,t,s,x),A.f0)},
$S:67}
D.eBs.prototype={
$5$color$on(d,e,f,g,h){var x=null,w=h?g.j(0.28):A.c.j(0.08),v=B.m(14),u=B.I(h?g:A.b2,A.q,1)
return B.aE(x,B.p(x,B.v(B.a([B.W(d,g,x,x,x,20),A.uq,B.d(e,x,x,x,x,x,x,B.l(x,x,g,x,x,x,x,x,x,x,x,9.5,x,x,A.H,x,x,!0,x,x,x,x,x,x,x,x),x,x,x)],y.p),A.m,x,A.e,A.Q,0,A.p),A.f,x,x,new B.o(w,x,u,v,x,x,A.n),x,x,x,A.je,A.kI,x,x,56),A.y,!1,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,f,x,x,x,x,x,x,!1,A.a8)},
$3(d,e,f){return this.$5$color$on(d,e,f,A.c,!1)},
$4$color(d,e,f,g){return this.$5$color$on(d,e,f,g,!1)},
$S:1934}
D.eBn.prototype={
$0(){return this.a.avO(-1)},
$S:0}
D.eBo.prototype={
$0(){return this.a.avO(1)},
$S:0}
D.eBp.prototype={
$0(){return this.a.avO(0)},
$S:0}
D.eBq.prototype={
$0(){var x=this.a
return x.m(new D.eBm(x))},
$S:0}
D.eBm.prototype={
$0(){var x=this.a
x.r=!x.r
x.ahW()},
$S:0}
D.eBr.prototype={
$0(){return this.a.aZl(0)},
$S:0}
D.eBh.prototype={
$0(){var x=this.a
return x.m(new D.eBg(x))},
$S:0}
D.eBg.prototype={
$0(){return this.a.r=!1},
$S:0}
D.eBe.prototype={
$0(){return this.a.d=this.b},
$S:0}
D.eBf.prototype={
$0(){return this.a.aXC(this.b)},
$S:0}
D.eBb.prototype={
$2(d,e){return A.bp},
$S:36}
D.eBa.prototype={
$2(d,e){var x=null,w=this.a,v=w.d===e?1.1:1
v=B.a([B.vc(w.aXD(e,18,46,6,A.c,80),A.bc,A.fF,v)],y.p)
if(w.d===e)v.push(new B.C(A.v5,B.d(C.k_[e].a,x,x,x,x,x,x,C.f4r,x,x,x),x))
return B.v(v,A.m,x,A.e,A.Q,0,A.p)},
$S:674}
D.eBc.prototype={
$0(){var x=this.a
return x.a.a4M(0,x.d)},
$S:0}
D.eBd.prototype={
$2(d,e){return this.a.avP(e,15,1/0,!0,8,A.c,1/0)},
$S:41}
D.eB8.prototype={
$0(){var x=this.a
return x.a.a4M(0,x.d)},
$S:0}
D.eB9.prototype={
$0(){return this.a.aXC(this.b)},
$S:0}
D.cdF.prototype={
$2(d,e){var x,w,v,u
for(x=e.length,w=this.a,v=w.$flags|0,u=0;u<x;++u){v&2&&B.ai(w,9)
w.setUint8(d+u,e.charCodeAt(u))}},
$S:366}
D.cdH.prototype={
$0(){var x=this
return D.hAZ(x.a,x.b,x.c,x.d,x.e)},
$S:324};(function aliases(){var x=D.aL5.prototype
x.buc=x.q})();(function installTearOffs(){var x=a._instance_0u,w=a._instance_1u
var v
x(v=D.aDi.prototype,"gaXB","c4k",0)
x(v,"gcxB","ahW",0)
w(v,"gc9X","aZl",2)})();(function inheritance(){var x=a.mixinHard,w=a.inheritMany,v=a.inherit
w(B.hT,[D.fkJ,D.fcG,D.fkV,D.fKj,D.fKk,D.eBs])
w(B.aC,[D.w6,D.vz,D.xm])
w(B.ag,[D.VB,D.aqI])
w(B.ah,[D.aL5,D.bjd])
v(D.aDi,D.aL5)
w(B.j3,[D.eBk,D.eBj,D.eBi,D.eBl,D.eBu,D.eBn,D.eBo,D.eBp,D.eBq,D.eBm,D.eBr,D.eBh,D.eBg,D.eBe,D.eBf,D.eBc,D.eB8,D.eB9,D.cdH])
w(B.kf,[D.eBt,D.eBb,D.eBa,D.eBd,D.cdF])
v(D.bsV,B.mJ)
x(D.aL5,B.c9)})()
B.jT(b.typeUniverse,JSON.parse('{"VB":{"ag":[],"r":[]},"aDi":{"ah":["VB"]},"bsV":{"aB":[]},"aqI":{"ag":[],"r":[]},"bjd":{"ah":["aqI"]},"MM":{"ag":[],"r":[]}}'))
var y=(function rtii(){var x=B.ax
return{L:x("O<a2f>"),V:x("O<ac>"),O:x("O<w>"),v:x("O<hn>"),s:x("O<n>"),p:x("O<r>"),n:x("O<N>"),t:x("bo<N>"),i:x("N"),S:x("H"),H:x("~")}})();(function constants(){var x=a.makeConstList
C.b7O=new B.w(1,0.0196078431372549,0.03137254901960784,0.058823529411764705,A.t)
C.bhB=new B.w(1,0.043137254901960784,0.10196078431372549,0.2,A.t)
C.d21=x([C.b7O,C.bhB],y.O)
C.bUq=new B.a8(A.b0,A.b5,A.x,C.d21,null,null)
C.aZ1=new B.o(null,null,null,null,null,C.bUq,A.n)
C.bfx=new B.w(1,0.42745098039215684,0.47843137254901963,0.5764705882352941,A.t)
C.b67=new B.w(1,0.16862745098039217,0.1803921568627451,0.26666666666666666,A.t)
C.b79=new B.w(1,0.4823529411764706,0.29411764705882354,0.41568627450980394,A.t)
C.dcX=x([C.bfx,C.b67,C.b79],y.O)
C.bSM=new B.a8(A.ax,A.aC,A.x,C.dcX,null,null)
C.aZ3=new B.o(null,null,null,null,null,C.bSM,A.n)
C.aV9=new B.da(0.5,-0.6)
C.biO=new B.w(1,0.22745098039215686,0.054901960784313725,0.10980392156862745,A.t)
C.cYB=x([C.biO,A.e8],y.O)
C.eaP=new B.bS(C.aV9,1.3,A.x,null,0,C.cYB,null,null)
C.aZc=new B.o(null,null,null,null,null,C.eaP,A.n)
C.t1=new B.w(1,0.8392156862745098,0.7176470588235294,0.4823529411764706,A.t)
C.aXh=new B.aA(C.t1,1,A.q,-1)
C.aXu=new B.bP(A.Y,A.Y,C.aXh,A.Y)
C.aZy=new B.o(null,null,C.aXu,null,null,null,A.n)
C.ab1=new B.w(0.9490196078431372,0.06666666666666667,0.07450980392156863,0.09411764705882353,A.t)
C.b5L=new B.w(1,0.16470588235294117,0.16470588235294117,0.17647058823529413,A.t)
C.b5O=new B.w(1,0.00784313725490196,0.01568627450980392,0.03529411764705882,A.t)
C.abt=new B.w(1,0.6588235294117647,0.6235294117647059,0.5647058823529412,A.t)
C.DS=new B.w(1,0.12156862745098039,0.07058823529411765,0.03529411764705882,A.t)
C.DW=new B.w(1,0.7215686274509804,0.6980392156862745,0.6549019607843137,A.t)
C.b9b=new B.w(1,0.8784313725490196,0.6745098039215687,0.4117647058823529,A.t)
C.aco=new B.w(1,0.00784313725490196,0.011764705882352941,0.0392156862745098,A.t)
C.Ed=new B.w(1,0.06666666666666667,0.0784313725490196,0.09411764705882353,A.t)
C.bcv=new B.w(1,0.011764705882352941,0.023529411764705882,0.09019607843137255,A.t)
C.Wa=new B.w(1,0.054901960784313725,0.07058823529411765,0.09411764705882353,A.t)
C.be9=new B.w(1,0.2901960784313726,0.26666666666666666,0.23529411764705882,A.t)
C.ma=new B.w(1,0.09019607843137255,0.09019607843137255,0.10980392156862745,A.t)
C.bg6=new B.w(1,0.08627450980392157,0.09411764705882353,0.10980392156862745,A.t)
C.bgA=new B.w(1,0.24705882352941178,0.3843137254901961,0.07058823529411765,A.t)
C.WH=new B.w(1,1,0.41568627450980394,0,A.t)
C.mW=new B.w(1,0.10588235294117647,0.10588235294117647,0.12156862745098039,A.t)
C.th=new B.w(1,0.5529411764705883,0.3333333333333333,0.1411764705882353,A.t)
C.WM=new B.w(1,1,0.9529411764705882,0.6274509803921569,A.t)
C.bjj=new B.w(1,0.10196078431372549,0.09019607843137255,0.0784313725490196,A.t)
C.bnF=new B.Q(0,0,0,1)
C.tt=new B.Q(0,0,7,0)
C.bow=new B.Q(10,10,10,0)
C.XC=new B.Q(10,6,10,8)
C.agk=new B.Q(14,10,10,10)
C.ajL=new B.a_(62970,"MaterialIcons",!1)
C.akK=new B.a_(983316,"MaterialIcons",!1)
C.Nh=new B.a_(983617,"MaterialIcons",!1)
C.bHT=new B.ae(A.Bq,13,A.ad,null,null,null)
C.bLS=new B.ae(A.fa,13,A.ad,null,null,null)
C.bDx=new B.a_(983768,"MaterialIcons",!1)
C.bMt=new B.ae(C.bDx,13,A.c,null,null,null)
C.cy5=x([A.aT,A.kd,A.qF],y.O)
C.bRC=new B.a8(A.b0,A.b5,A.x,C.cy5,null,null)
C.bRI=new B.a8(A.b0,A.b5,A.x,I.Pj,null,null)
C.cSp=x([A.f6,A.dO,A.ct],y.O)
C.bRV=new B.a8(A.b0,A.b5,A.x,C.cSp,null,null)
C.cQI=x([A.dN,A.ay],y.O)
C.bSA=new B.a8(A.b0,A.b5,A.x,C.cQI,null,null)
C.dc7=x([A.bR,A.c,A.bJ],y.O)
C.bSP=new B.a8(A.a3,A.a7,A.x,C.dc7,null,null)
C.dcF=x([A.hi,A.h1],y.O)
C.anw=new B.a8(A.b0,A.b5,A.x,C.dcF,null,null)
C.d4C=x([A.dy,A.or],y.O)
C.bTL=new B.a8(A.b0,A.b5,A.x,C.d4C,null,null)
C.bUL=new B.a8(A.b0,A.b5,A.x,F.atB,null,null)
C.d0a=x([A.aL,A.ak],y.O)
C.bV9=new B.a8(A.b0,A.b5,A.x,C.d0a,null,null)
C.anW=x([1],y.n)
C.c7D=x([1,2,3],y.n)
C.arz=x([1,-1],y.n)
C.ceG=x([A.lK,A.xK],B.ax("O<a_>"))
C.ceS=x([-0.05,0.05],y.n)
C.e00=new B.u(26,-8)
C.e0t=new B.u(52,0)
C.e0_=new B.u(26,8)
C.cfe=x([A.J,C.e00,C.e0t,C.e0_],B.ax("O<u>"))
C.exP=new B.y("Jambo!","Hello!")
C.esH=new B.y("Asante","Thank you")
C.ek4=new B.y("Karibu","Welcome")
C.em9=new B.y("Rafiki","Friend")
C.atj=x([C.exP,C.esH,C.ek4,C.em9],B.ax("O<+(n,n)>"))
C.ato=x([A.bU,A.aT,A.dN,A.b7,A.ct],y.O)
C.cx_=x([1,2,3,4,5,6,7],y.n)
C.cJV=x([A.f3,A.bK,A.KM,A.es],y.O)
C.cL2=x([1,2.76,5.4,8.93,13.3],y.n)
C.aul=x([A.ct,A.co,A.bU,A.b7],y.O)
C.cM9=x([1,0.6,0.38,0.22,0.12],y.n)
C.cP2=x(["Mama","Baba","Bibi","Babu","Dada","Kaka"],y.s)
C.ehr=new B.y("Chairs",120)
C.ehu=new B.y("Cloth",80)
C.ehL=new B.y("Delivery",25)
C.auG=x([C.ehr,C.ehu,C.ehL],B.ax("O<+(n,H)>"))
C.cQg=x([1,0.7,0.45,0.28,0.16,0.1,0.06],y.n)
C.cQh=x([1,0.55,0.32,0.2,0.12,0.07],y.n)
C.dVi=new D.xm("NGMY Tree Story","A family grows, one branch at a time")
C.dVd=new D.xm("Coin Hero","A little coin saves up and wins the day")
C.dVl=new D.xm("Space Voyage","The NGMY rocket explores the stars")
C.dVc=new D.xm("Ocean Friends","Fish, bubbles and a friendly whale")
C.dVe=new D.xm("Rainy Village","Storm clouds, then a rainbow")
C.dVg=new D.xm("Spark Adventure","Follow a spark round a circuit")
C.dVf=new D.xm("Fireworks Night","Colour bursts over the city")
C.dVk=new D.xm("Little Train","A train rolls past the hills")
C.dVh=new D.xm("Robot Disco","A robot dances to the beat")
C.dVj=new D.xm("Garden Time","Flowers grow and butterflies fly")
C.Pp=x([C.dVi,C.dVd,C.dVl,C.dVc,C.dVe,C.dVg,C.dVf,C.dVk,C.dVh,C.dVj],B.ax("O<xm>"))
C.cUg=x([1,0.6,0.45,0.3,0.22,0.15],y.n)
C.avm=x([A.bU,A.co,A.ay,A.by,A.ct],y.O)
C.cVi=x([1,2,3,4,5,6],y.n)
C.cWI=x([A.hi,A.or],y.O)
C.cWK=x([A.bj,A.aH,A.d_],y.O)
C.dlV=new D.vz("NGMY Ads","\ud83d\udce2","Every NGMY promotion, as cartoons",A.bU,-1)
C.dlT=new D.vz("Civic Registry","\ud83e\udeaa","Enroll your family in your community",A.d6,0)
C.dlW=new D.vz("Jobs","\ud83d\udcbc","Find work and get hired",A.aH,1)
C.dlY=new D.vz("NGMY Store","\ud83d\udecd\ufe0f","African food and traditions",A.fC,2)
C.dlZ=new D.vz("Kiswahili","\ud83d\udde3\ufe0f","Learn Swahili and English",A.bW,3)
C.dlX=new D.vz("Doc Scanner","\ud83d\udcc4","Scan, save and share",A.c9,4)
C.dlU=new D.vz("Invoices","\ud83e\uddfe","Professional invoices",A.bA,5)
C.dlS=new D.vz("Calendar","\ud83d\udcc5","This month, today lit up",A.ay,-2)
C.k_=x([C.dlV,C.dlT,C.dlW,C.dlY,C.dlZ,C.dlX,C.dlU,C.dlS],B.ax("O<vz>"))
C.fJU=new D.w6("NGMY Civic Registry","Enroll your family. Stay counted and helped together.",A.dq,A.aT)
C.fK1=new D.w6("NGMY Jobs","Find work. Get hired. Get paid.",A.d9,A.aM)
C.fK_=new D.w6("NGMY Store","African food and traditions. Support our Congolese and African community.",A.jQ,A.co)
C.fJY=new D.w6("Kiswahili School","Learn Swahili and English, step by step.",A.cZ,A.mV)
C.fJX=new D.w6("Document Scanner","Scan, save and share your papers.",A.pt,A.h0)
C.fJV=new D.w6("Invoice Creator","Make professional invoices in minutes.",A.rW,A.mL)
C.fJS=new D.w6("Family Book and Tree","Write your family story. Grow your tree.",A.j8,A.K1)
C.fJT=new D.w6("NGMY Wallet","Save, send and earn coins.",A.pn,A.dN)
C.fJW=new D.w6("Vault Games","Play, win and learn.",A.dS,A.b8)
C.fK0=new D.w6("Electronics Lab","Build real circuits and learn.",A.fh,A.b1)
C.fJZ=new D.w6("NGMY Helper and Advisors","Friendly help, any time.",A.lA,A.ct)
C.d_2=x([C.fJU,C.fK1,C.fK_,C.fJY,C.fJX,C.fJV,C.fJS,C.fJT,C.fJW,C.fK0,C.fJZ],B.ax("O<w6>"))
C.D3=new B.G(!0,A.ad,null,null,null,null,12.5,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.d4D=x([A.dS,A.f6],y.O)
C.d52=x(["For you","Apps","Library"],y.s)
C.awq=x([A.bI,A.co,A.d_,A.aB],y.O)
C.oO=x([-1,1],y.n)
C.a2f=x([-24,24],y.n)
C.a2g=x([-5,5],y.n)
C.d7L=x([A.aK,A.ak],y.O)
C.d7P=x([1,2,3,4,6,8],y.n)
C.d8E=x([1,0.5,0.33,0.25,0.2,0.16,0.14,0.12],y.n)
C.b0r=new B.ac(0,A.G,A.aX,A.dk,14)
C.da3=x([C.b0r],y.V)
C.dai=x([1,2,3,4,5,6,7,8],y.n)
C.dbH=x([A.ay,A.cd,A.co,A.bo,A.d6,A.b6],y.O)
C.dcy=x(["M","T","W","T","F","S","S"],y.s)
C.ddF=x([A.c,A.pg],y.O)
C.dem=x([1,0.18,0.06],y.n)
C.dYm={"SPARK PAINTER":0,"MANDALA MAKER":1,"TITLE ANIMATOR":2,"PALETTE LAB":3,"GRAVITY TOY":4,"ORBIT STUDIO":5,"SWARM STUDIO":6,"FIREWORK DESIGNER":7,"CHAIN BURST":8,"CIRCUIT LAB":9,"PERIODIC TABLE":10,"BODY EXPLORER":11,"SPIN THE WHEEL":12,"FOCUS TIMER":13,"MEMORY MATCH":14,"LUCKY POCKET":15,"ELECTRONICS LAB":16,"CONSTRUCTION LAB":17,"AI INVENTOR":18,"MAGNET LAB":19,"RADIO LAB":20,"POWER PLANT":21,"POWER GRID":22,"INTERNET JOURNEY":23,"ROBOT CODER":24,"BUG SMASHER":25,"ROCKET LANDER":26,"DATA SNAKE":27,"BINARY 2048":28,"SIGNAL BREAKER":29,"PASSWORD LAB":30,"WAVE LAB":31,"BUG HUNT":32,"MOLECULE MAKER":33,"DNA LAB":34,"ECOSYSTEM LAB":35,"BALANCE LAB":36,"GEAR LAB":37,"OPTICS LAB":38,"LASER MAZE":39,"LIGHT MIXER":40,"ATOM BUILDER":41,"CIPHER LAB":42,"PIXEL TV":43}
C.aCA=new B.bm(C.dYm,["sparkle","sparkle","whoosh","click","bounce","space","bubble","pop","zap","tech","lab","organic","click","tech","bubble","click","tech","tech","tech","tech","tech","tech","tech","tech","tech","pop","space","bubble","click","zap","click","tech","click","lab","organic","organic","click","tech","sparkle","zap","sparkle","lab","tech","tech"],B.ax("bm<n,n>"))
C.ab8=new B.w(1,0.16862745098039217,0.1843137254901961,0.21176470588235294,A.t)
C.djN=new B.ht(A.G,1.2)
C.cfi=x([A.f3,A.eM,A.kc],y.O)
C.eau=new B.bS(G.pa,0.5,A.x,null,0,C.cfi,null,null)
C.cv_=x([A.lB,A.om],y.O)
C.eaw=new B.bS(F.a8Q,0.5,A.x,null,0,C.cv_,null,null)
C.bMY=new B.ae(A.fa,11,A.ad,null,null,null)
C.f2t=new B.G(!0,A.aR,null,null,null,null,9,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.foD=new B.x("Search",null,C.f2t,null,null,null,null,null,null,null,null,null)
C.czh=x([C.bMY,A.q9,C.foD],y.p)
C.eGj=new B.cm(A.aO,A.e,A.j,A.m,null,A.p,null,0,C.czh,null)
C.eMe=new B.hK(3,5,5,1.35,null)
C.bi8=new B.w(1,0.9450980392156862,0.9098039215686274,0.8470588235294118,A.t)
C.eTr=new B.G(!0,C.bi8,null,"serif",null,null,15,A.jV,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.f_L=new B.G(!0,A.ad,null,null,null,null,9.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.f0m=new B.G(!0,A.aR,null,null,null,null,9.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.T4=new B.G(!0,A.ad,null,null,null,null,12.5,null,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.aPf=new B.G(!0,A.ad,null,null,null,null,10,A.P,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.f4r=new B.G(!0,A.c,null,null,null,null,8.5,A.P,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.f5U=new B.G(!0,A.ad,null,null,null,null,8.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.f6d=new B.G(!0,C.abt,null,null,null,null,8.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.eYh=new B.G(!0,A.az,null,null,null,null,9.5,A.P,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.f8o=new B.x("NGMY Apps",null,C.eYh,null,null,null,null,null,null,null,null,null)
C.a6G=new B.G(!0,A.az,null,null,null,null,12.5,null,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.eV2=new B.G(!0,C.t1,null,null,null,null,8,A.a5,null,3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.fbt=new B.x("BANG & OLUFSEN",null,C.eV2,null,null,null,null,null,null,null,null,null)
C.f_v=new B.G(!0,A.w,null,null,null,null,9,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.fbT=new B.x("Open",null,C.f_v,null,null,null,null,null,null,null,null,null)
C.feQ=new B.x("Home",null,C.aPf,null,null,null,null,null,null,null,null,null)
C.ffR=new B.x("SAMSUNG",null,A.aOY,null,null,null,null,null,null,null,null,null)
C.flO=new B.x("LG",null,A.w8,null,null,null,null,null,null,null,null,null)
C.frw=new B.x("tv",null,A.qf,null,null,null,null,null,null,null,null,null)
C.eYb=new B.G(!0,C.t1,null,null,null,null,8.5,null,null,2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.ftz=new B.x("OPEN",null,C.eYb,null,null,null,null,null,null,null,null,null)})();(function staticFields(){$.hAY=B.T(B.ax("n"),B.ax("dD"))
$.cdE=B.a([],B.ax("O<aht>"))
$.h5z=0
$.aqF="music"})()};
(a=>{a["4j4IXePa28lwW7rR74p8g/kAF0w="]=a.current})($__dart_deferred_initializers__);