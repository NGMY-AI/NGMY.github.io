((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,A,G,E,H,I,K,F,L,D={
FI(d,e){var x
$.X()
x=B.M()
x.b=A.ae
x.c=e
x.r=d.gp(0)
x.d=A.bO
return x},
rA(d,e,f,g,h,i){var x=new D.fj0(e,h,!0),w=x.$1(g),v=w.b.c
if(v>i&&v>0)w=x.$1(Math.max(2,g*i/v))
x=w.b
v=x.c
x=x.a.c
w.a6(d,f.aC(0,new B.u(v/2,x.gbb(x)/2)))},
Cl(a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=a6.a
J.bA(a5.save())
a5.translate(a7.a,a7.b-b1)
x=B.cu(new B.u(0,b1+a8*0.005),a8*0.06,a8*0.45)
w=A.w.j(0.22)
$.X()
v=B.M()
v.r=w.gp(0)
a6.i2(x,v)
for(x=a8*0.05,w=-a8,v=w*0.24,u=a8*0.1,t=v+a8*0.2,s=a8*0.04,r=a8*0.065,q=w*0.05,p=a8*0.14,o=q+x,n=a8*0.025,m=0;m<2;++m){l=C.oJ[m]*a8*0.075
k=l-x
k=B.bz(new B.aa(k,v,k+u,t),new B.aV(s,s))
j=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
j.r=A.dp.gp(0)
i=j.H()
a5.drawRRect(B.ep(k),i)
i.delete()
l-=r
l=B.bz(new B.aa(l,q,l+p,o),new B.aV(n,n))
k=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
k.r=A.c.gp(0)
i=k.H()
a5.drawRRect(B.ep(l),i)
i.delete()}x=w*0.16
v=w*0.52
u=a8*0.32
t=x+u
r=a8*0.09
h=B.bz(new B.aa(x,v,t,v+u),new B.aV(r,r))
r=B.M()
r.r=b3.gp(0)
a6.aD(h,r)
r=w*0.27
u=a8*0.02
u=B.bz(new B.aa(x,r,t,r+a8*0.045),new B.aV(u,u))
r=A.c.j(0.35)
t=B.M()
t.r=r.gp(0)
a6.aD(u,t)
t=w*0.47
g=new B.u(w*0.15,t)
f=new B.u(a8*0.15,t)
t=w*0.06
u=a8*0.07
a6.bA(g,g.ad(0,new B.u(t,a8*0.17)),D.FI(b4,u))
t=g.ad(0,new B.u(t,a8*0.18))
r=B.M()
r.r=b4.gp(0)
a6.ai(t,s,r)
e=b0?-2.5+b6*0.5:0.5-b6*2.2
d=f.ad(0,new B.u(Math.sin(e)*a8*0.2,Math.cos(e)*a8*0.2))
a6.bA(f,d,D.FI(b4,u))
x=B.M()
x.r=b4.gp(0)
a6.ai(d,s,x)
w*=0.7
a0=new B.u(0,w)
a1=a8*0.22
if(b2===1){x=a0.ad(0,new B.u(0,-a1*0.12))
v=B.M()
v.r=C.DG.gp(0)
a6.ai(x,a1*1.18,v)}x=B.M()
x.r=b4.gp(0)
a6.ai(a0,a1,x)
if(b2===0){x=B.bU(a0,a1)
v=B.M()
v.r=C.DG.gp(0)
a6.fh(x,3.141592653589793,3.141592653589793,!0,v)}else if(b2===2){x=B.bU(a0,a1)
v=B.M()
v.r=C.DG.gp(0)
a6.fh(x,3.141592653589793,3.141592653589793,!0,v)
for(x=w+a1*0.3,v=a1*0.2,m=0;m<2;++m){a2=C.oJ[m]
u=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
u.r=C.DG.gp(0)
i=u.H()
a5.drawCircle(0+a2*a1*1.05,x,v,i)
i.delete()}}a3=A.k.G(a9*0.8,3)>2.85
for(x=w+a1*0.42,v=a1*0.12,u=a1*0.25,t=a9*0.7,s=a1*0.13,w+=a1*0.05,r=-a1*0.15,q=w+0,p=a1*0.15,m=0;m<2;++m){o=C.oJ[m]*a1
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
n.r=A.j_.j(0.5).gp(0)
i=n.H()
a5.drawCircle(0+o*0.62,x,v,i)
i.delete()}x=a1*0.5
a4=a0.ad(0,new B.u(0,x))
w=a1*0.4
if(b5){x=B.cu(a4,w*(0.35+0.65*((Math.sin(a9*12)+1)/2)),x)
w=B.M()
w.r=A.ew.gp(0)
a6.i2(x,w)}else a6.fh(B.cu(a4.aC(0,new B.u(0,a1*0.1)),w,a1*0.65),0.2,2.741592653589793,!1,D.FI(A.bh,1.8))
a5.restore()},
aMZ(d,e,f,g,h,i){var x,w,v,u,t,s,r,q=null
if(h<=0)return
x=d.a
J.bA(x.save())
x.translate(e.a,e.b)
d.bW(0,A.k.D(A.mB.av(0,A.k.D(h,0,1)),0.01,1.3))
w=B.ii(q,q,q,q,B.dq(q,q,q,q,q,q,q,q,q,B.l(q,q,A.aA,q,q,q,q,q,q,q,q,g,q,q,A.u,q,q,!0,q,q,q,q,q,q,q,q),f),A.a5,A.ch,q,A.eq,A.cd)
w.eP()
v=w.b
u=v.c
v=v.a.c
t=g*0.8
s=B.bz(B.cu(A.J,v.gbb(v)+g*0.7,u+g*1.1),new B.aV(t,t))
t=$.X()
u=B.M()
u.r=i.gp(0)
d.aD(s,u)
t=new B.aQ(t.r,A.ap,q,q,B.a([],y.v))
u=-g
v=s.d
r=v-1
t.E(new B.b5(u*0.3,r))
t.E(new B.ap(u*0.7,v+g*0.6))
t.E(new B.ap(g*0.2,r))
t.E(new B.bE())
r=B.M()
r.r=i.gp(0)
d.aO(t,r)
r=w.b
t=r.c
r=r.a.c
w.a6(d,new B.u(-t/2,-r.gbb(r)/2))
x.restore()},
fQJ(d,e,f,g){var x,w=A.k.D(Math.abs(Math.cos(g)),0.15,1),v=f*2,u=v*w,t=B.cu(e,v,u)
$.X()
x=B.M()
x.r=A.cp.gp(0)
d.i2(t,x)
d.i2(B.cu(e,v,u),D.FI(A.pg,f*0.18))
if(w>0.5)D.rA(d,"$",e,f*1.2,A.pg,9999)},
hI9(d,e,f,g){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=new B.eT()
k.dI(4)
for(x=e.a,w=f-g,v=e.b,u=d.a,t=f*3,s=v*0.025,r=v*0.012,q=0;q<18;++q){p=k.aj()
o=A.k.G(w*(40+k.aj()*60)+k.aj()*v,v)
J.bA(u.save())
u.translate(p*x,o)
u.rotate((t+q)*180/3.141592653589793,0,0)
p=B.cu(A.J,r,s)
n=C.asU[A.o.G(q,5)]
$.X()
m=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
m.r=n.gp(0)
l=m.H()
u.drawRect(B.c4(p),l)
l.delete()
u.restore()}},
hRG(d,e,f,g){switch(A.o.G(f,11)){case 0:D.hHM(d,e,g)
break
case 1:D.hKF(d,e,g)
break
case 2:D.hPP(d,e,g)
break
case 3:D.hQ3(d,e,g)
break
case 4:D.hOZ(d,e,g)
break
case 5:D.hKl(d,e,g)
break
case 6:D.hH8(d,e,g)
break
case 7:D.hQL(d,e,g)
break
case 8:D.hJo(d,e,g)
break
case 9:D.hKJ(d,e,g)
break
default:D.hJY(d,e,g)}},
hHM(a2,a3,a4){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null,d=a3.a,a0=a3.b,a1=a0*0.94
for(x=a2.a,w=d*0.12,v=d*0.06,u=a0*0.06,t=y.v,s=0;s<6;++s){r=d*(0.04+s*0.17)
q=a0*(0.18+0.08*A.o.G(s,3))
p=a1-q
o=r+w
n=A.c.j(0.2)
m=$.X()
l=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
l.r=n.gp(0)
k=l.H()
x.drawRect(B.c4(new B.aa(r,p,o,p+q)),k)
k.delete()
l=B.a([],t)
m=new B.aQ(m.r,A.ap,e,e,l)
l.push(new B.b5(r-3,p))
l.push(new B.ap(r+v,p-u))
l.push(new B.ap(o+3,p))
l.push(new B.bE())
p=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
p.r=A.c.j(0.3).gp(0)
k=p.H()
p=m.gbI().a.snapshot()
x.drawPath((m.e=new B.cF(p)).a,k)
k.delete()}w=A.w.j(0.18)
$.X()
v=B.M()
v.r=w.gp(0)
a2.aY(new B.aa(0,a1,0+d,a1+(a0-a1)),v)
j=Math.cos(a4*1.6)
i=Math.min(d*0.46,a0*0.95)
h=i*0.62
J.bA(x.save())
v=d*0.58
x.translate(v,a0*0.45)
a2.rW(0,Math.max(0.08,Math.abs(j)),1)
w=h*0.1
g=B.bz(B.cu(A.J,h,i),new B.aV(w,w))
u=B.M()
t=j>=0
u.sau(new B.a7(A.a3,A.a7,A.x,t?C.dc_:C.d31,e,e).aw(0,new B.aa(g.a,g.b,g.c,g.d)))
a2.aD(g,u)
a2.aD(g,D.FI(A.dp,2))
if(t){u=-i
t=u*0.28
p=-h
o=p*0.05
n=h*0.22
m=B.M()
m.r=C.t8.gp(0)
a2.ai(new B.u(t,o),n,m)
n=B.bU(new B.u(t,o),n)
o=B.M()
o.r=C.DG.gp(0)
a2.fh(n,3.141592653589793,3.141592653589793,!0,o)
for(u*=0.05,t=p*0.25,o=h*0.07,s=0;s<3;++s){n=t+s*h*0.16
n=B.bz(new B.aa(u,n,u+i*(0.42-s*0.06),n+o),A.hz)
m=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
m.r=A.dy.gp(0)
k=m.H()
x.drawRRect(B.ep(n),k)
k.delete()}D.rA(a2,"COMMUNITY ID",new B.u(0,p*0.4),w,A.dp,i*0.8)}else D.rA(a2,"\u2605 NGMY \u2605",A.J,h*0.16,A.c,i*0.8)
x.restore()
w=a4>2.6
if(w){s=A.k.D((a4-2.6)/0.35,0,1)
J.bA(x.save())
x.translate(v,a0*0.52)
a2.j9(0,-0.25)
a2.bW(0,2.2-1.2*A.et.av(0,s))
f=B.cu(A.J,h*0.3,i*0.7)
a2.aD(B.bz(f,A.h9),D.FI(A.d_.j(s),3))
D.rA(a2,"\u2713 REGISTERED",A.J,h*0.13,A.d_.j(s),(f.c-f.a)*0.9)
x.restore()}x=a4*5
v=Math.sin(x)
x=Math.sin(x)
w=w&&a4<4
D.Cl(a2,new B.u(d*0.2,a1),a0*0.7,a4,!1,Math.abs(x)*a0*0.015,0,A.d_,C.t8,w,(v+1)/2)
if(a4>3)D.hI9(a2,new B.at(d,a0*0.9),a4,3)},
hKF(a6,a7,a8){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=a7.a,a3=a7.b,a4=a3*0.94,a5=A.w.j(0.2)
$.X()
x=B.M()
x.r=a5.gp(0)
a6.aY(new B.aa(0,a4,0+a2,a4+(a3-a4)),x)
w=a2*0.62
v=a2*0.3
u=a3*0.62
x=a4-u
a5=w+v
t=B.M()
t.r=A.bl.gp(0)
a6.aY(new B.aa(w,x,a5,x+u),t)
for(t=a6.a,s=a8*1.5,r=v*0.2,q=u*0.1,p=0;p<4;++p)for(o=x+u*(0.1+p*0.17),n=o+q,m=0;m<3;++m){l=w+v*(0.12+m*0.3)
k=A.o.G(p+m+A.k.bw(s),3)===0?A.dN:A.aW.j(0.6)
$.X()
j=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
j.r=k.gp(0)
i=j.H()
t.drawRect(B.c4(new B.aa(l,o,l+r,n)),i)
i.delete()}s=w+v*0.38
r=u*0.16
q=a4-r
$.X()
o=B.M()
o.r=A.fv.gp(0)
a6.aY(new B.aa(s,q,s+v*0.24,q+r),o)
o=x-a3*0.09
r=a3*0.02
o=B.bz(new B.aa(w,o,a5,o+a3*0.08),new B.aV(r,r))
a5=B.M()
a5.r=A.aI.gp(0)
a6.aD(o,a5)
a5=a3*0.05
o=a3*0.06
D.rA(a6,"JOBS",new B.u(w+v/2,x-a5),o,A.c,9999)
h=A.k.D(a8/2.8,0,1)
x=a2*0.12
g=x+(w+v*0.3-x)*A.dA.av(0,h)
x=h<1
f=x?Math.abs(Math.sin(a8*12))*a3*0.02:0
s=h>=1
q=s?(Math.sin(a8*6)+1)/2:0
D.Cl(a6,new B.u(g,a4),a3*0.6,a8,!1,f,2,A.b4,A.KG,s,q)
if(x){x=B.bz(B.cu(new B.u(g-a3*0.12,a4-a3*0.17-f),a3*0.075,a3*0.1),A.hz)
q=B.M()
q.r=A.fv.gp(0)
a6.aD(x,q)}if(s){x=a8-2.8
D.aMZ(a6,new B.u(g+a5,a4-a3*0.78),"Hired! \ud83c\udf89",a3*0.07,x/0.4,A.c)
for(a5=x*0.8,x=a4-a3*0.5,s=a3*0.03,q=a8*8,e=0;e<6;++e){d=A.k.G(a5+e*0.17,1)
D.fQJ(a6,new B.u(g+Math.sin(e*2.1)*a3*0.2,x-d*a3*0.25),s,q+e)}}a5=a2*0.04
x=a5+v
s=o+a3*0.3
r=B.bz(new B.aa(a5,o,x,s),new B.aV(r,r))
$.X()
q=B.M()
q.r=A.ir.gp(0)
a6.aD(r,q)
for(x-=a5,r=a5+x*0.08,s-=o,q=x*0.84,n=s*0.24,a5+=x*0.14,x*=0.5,l=s*0.05,e=0;e<3;++e){k=(1-A.k.D((a8-e*0.5)/0.5,0,1))*a2*0.3
j=r+k
a0=e*0.3
a1=o+s*(0.08+a0)
a1=B.bz(new B.aa(j,a1,j+q,a1+n),A.hz)
j=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
j.r=A.c.gp(0)
i=j.H()
t.drawRRect(B.ep(a1),i)
i.delete()
k=a5+k
a0=o+s*(0.14+a0)
a1=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
a1.r=A.bI.gp(0)
i=a1.H()
t.drawRect(B.c4(new B.aa(k,a0,k+x,a0+l)),i)
i.delete()}},
hPP(a1,a2,a3){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=a2.a,e=a2.b,d=e*0.94,a0=A.fv.j(0.6)
$.X()
x=B.M()
x.r=a0.gp(0)
a1.aY(new B.aa(0,d,0+f,d+(e-d)),x)
w=f*0.3
v=f*0.66
for(a0=v/12,x=e*0.14,u=a0+1,t=x+e*0.12,s=a1.a,r=0;r<12;++r){q=w+a0*r
p=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
p.r=C.avV[A.o.G(r,4)].gp(0)
o=p.H()
s.drawRect(B.c4(new B.aa(q,x,q+u,t)),o)
o.delete()}for(u=e*0.2,t=e*0.1,q=u+t,r=0;r<12;++r){p=w+a0*r
n=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
n.r=C.avV[A.o.G(r,4)].gp(0)
o=n.H()
s.drawArc.apply(s,[B.c4(new B.aa(p,u,p+a0,q)),0,180,!0,o])
o.delete()}a0=w+4
u=e*0.3
q=u+(d-u)
p=B.M()
p.r=A.fv.gp(0)
a1.aY(new B.aa(a0,u,a0+4,q),p)
p=w+v
a0=p-8
n=B.M()
n.r=A.fv.gp(0)
a1.aY(new B.aa(a0,u,a0+4,q),n)
n=e*0.68
q=n+e*0.26
a0=B.bz(new B.aa(w,n,p,q),A.ig)
u=B.M()
u.r=A.ir.gp(0)
a1.aD(a0,u)
for(a0=p-w,u=a0/6,p=n+2,a0/=12,q=p+(q-n-4),r=0;r<6;++r){m=w+u*r
l=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
l.r=((r&1)===0?A.bL:A.cp).j(0.9).gp(0)
o=l.H()
s.drawRect(B.c4(new B.aa(m,p,m+a0,q)),o)
o.delete()}a0=w+v*0.2
u=e*0.62
k=new B.u(a0,u)
q=e*0.17
p=e*0.03
m=B.bz(B.cu(k,e*0.11,q),new B.aV(p,p))
l=B.M()
l.r=A.cC.gp(0)
a1.aD(m,l)
l=-e
q=B.cu(k.ad(0,new B.u(0,l*0.05)),e*0.04,q)
m=B.M()
m.r=A.fC.gp(0)
a1.i2(q,m)
for(q=a3*0.8,l*=0.08,m=e*0.015,r=0;r<3;++r){j=A.k.G(q+r*0.33,1)
i=Math.sin(j*6+r)
h=j*e
g=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
g.r=A.c.j(0.6*(1-j)).gp(0)
o=g.H()
s.drawCircle(a0+i*5,u+(l-h*0.14),m+h*0.02,o)
o.delete()}for(a0=w+v*0.5,q=e*0.018,r=0;r<5;++r){m=B.cu(new B.u(a0,u),x,e*(0.1+r*0.01))
l=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
l.b=A.ae
l.c=q
l.r=A.cp.gp(0)
l.d=A.bO
o=l.H()
s.drawArc.apply(s,[B.c4(m),(0.4+r*0.1)*57.29577951308232,108.8619810748564,!1,o])
o.delete()}for(a0=e*0.63,x=e*0.032,r=0;r<4;++r){u=A.o.G(r,2)
q=A.o.an(r,2)
m=(r&1)===0?A.cb:A.A9
l=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
l.r=m.gp(0)
o=l.H()
s.drawCircle(w+v*(0.72+0.06*u)+r*e*0.02,a0+q*e*0.035,x,o)
o.delete()}D.Cl(a1,new B.u(f*0.14,d),n,a3,!1,0,1,A.cp,E.acD,!0,(Math.sin(a3*5)+1)/2)
for(a0=a3*0.45,x=f*0.16,u=e*0.45,s=e*0.06,r=0;r<5;++r){j=A.k.G(a0+r*0.2,1)
D.rA(a1,"\u2665",new B.u(x+Math.sin(j*5+r)*e*0.08+r*e*0.03,u-j*e*0.4),s,A.aB.j(1-j),9999)}a0=w+v/2
x=e*0.08
p=B.bz(B.cu(new B.u(a0,x),t,v*0.7),new B.aV(p,p))
$.X()
t=B.M()
t.r=A.aA.gp(0)
a1.aD(p,t)
D.rA(a1,"NGMY STORE \xb7 African food",new B.u(a0,x),e*0.05,A.dN,v*0.64)},
hQ3(d,e,f){var x,w,v,u,t,s,r=e.a,q=e.b,p=q*0.94,o=A.w.j(0.2)
$.X()
x=B.M()
x.r=o.gp(0)
d.aY(new B.aa(0,p,0+r,p+(q-p)),x)
w=A.o.G(A.k.bw(f/1.5),4)
v=A.k.G(f,1.5)
u=v<0.75
x=q*0.68
o=u?(Math.sin(f*8)+1)/2:0
t=u?Math.abs(Math.sin(f*8))*q*0.01:0
D.Cl(d,new B.u(r*0.25,p),x,f,!1,t,2,A.d_,C.t8,u,o)
o=u?0:(Math.sin(f*8)+1)/2
t=u?0:Math.abs(Math.sin(f*8))*q*0.01
D.Cl(d,new B.u(r*0.75,p),x,f,!1,t,0,A.bi,C.b8l,!u,o)
o=q*0.15
x=q*0.085
if(u)D.aMZ(d,new B.u(r*0.26,o),C.asP[w].a,x,v/0.25,A.om)
else D.aMZ(d,new B.u(r*0.74,o),C.asP[w].b,x,(v-0.75)/0.25,A.er)
for(o=r*0.5,x=q*0.07,t=f*2,s=0;s<3;++s)D.rA(d,"\u2192",new B.u(o,q*(0.35+s*0.1)),x,A.c.j(0.3+0.5*A.k.G(t+s,1)),9999)},
hOZ(a1,a2,a3){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=a2.a,e=a2.b,d=e*0.94,a0=A.w.j(0.2)
$.X()
x=B.M()
x.r=a0.gp(0)
a1.aY(new B.aa(0,d,0+f,d+(e-d)),x)
x=f*0.3
w=B.cu(new B.u(f*0.6,e*0.45),e*0.7,Math.min(x,e*0.55))
a0=B.bz(w,A.ig)
v=B.M()
v.r=A.c.gp(0)
a1.aD(a0,v)
for(a0=w.d,v=w.b,u=a0-v,t=u*0.03,s=a1.a,r=w.a,q=w.c,p=q-r,o=r+p*0.1,n=0;n<9;++n){m=v+u*(0.1+n*0.095)
l=A.o.G(n,3)===2?0.5:0.8
k=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
k.r=A.cn.gp(0)
j=k.H()
s.drawRect(B.c4(new B.aa(o,m,o+p*l,m+t)),j)
j.delete()}i=A.k.D(a3/3,0,1)
h=v+u*i
if(i<1){a0=r-8
u=h-2
p=a0+(p+16)
t=B.M()
t.r=A.bc.gp(0)
a1.aY(new B.aa(a0,u,p,u+4),t)
t=A.bc.j(0.18)
u=B.M()
u.r=t.gp(0)
a1.aY(new B.aa(a0,v,p,v+(h-v)),u)}else{n=A.k.D((a3-3)/0.4,0,1)
u=A.mB.av(0,n)
t=B.M()
t.r=A.bL.gp(0)
a1.ai(new B.u(q,v),e*0.08*u,t)
D.rA(a1,"PDF",new B.u(q,v),e*0.045*n,A.c,9999)
v=e*0.06
D.rA(a1,"\u2713 Saved",new B.u(w.gbQ().a,a0+v),v,A.c.j(n),9999)}a0=a3*4
v=Math.sin(a0)
D.Cl(a1,new B.u(f*0.2,d),e*0.66,a3,!0,Math.abs(Math.sin(a0))*e*0.01,0,A.cw,C.t8,!1,(v+1)/2)
g=B.cu(new B.u(x,e*0.3),e*0.18,e*0.1)
x=e*0.02
x=B.bz(g,new B.aV(x,x))
v=B.M()
v.r=A.aA.gp(0)
a1.aD(x,v)
v=e*0.015
v=B.bz(g.cG(-3),new B.aV(v,v))
x=A.bc.j(0.35+0.3*Math.sin(a3*6))
a0=B.M()
a0.r=x.gp(0)
a1.aD(v,a0)},
hKl(a6,a7,a8){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=a7.a,a3=a7.b,a4=a3*0.94,a5=A.w.j(0.2)
$.X()
x=B.M()
x.r=a5.gp(0)
a6.aY(new B.aa(0,a4,0+a2,a4+(a3-a4)),x)
w=B.cu(new B.u(a2*0.62,a3*0.47),a3*0.8,Math.min(a2*0.4,a3*0.75))
x=B.bz(w,A.rf)
a5=B.M()
a5.r=A.c.gp(0)
a6.aD(x,a5)
a5=w.a
x=w.c
v=x-a5
u=w.b
t=w.d-u
D.rA(a6,"INVOICE",new B.u(a5+v*0.3,u+t*0.09),t*0.07,A.dp,9999)
for(s=a6.a,r=v*0.08,q=a5+r,p=t*0.045,o=q+v*0.5,n=x-v*0.17,m=t*0.02,l=t*0.06,k=a8-0.5,j=0,i=0;i<3;++i){h=A.k.D((k-i*0.6)/0.4,0,1)
if(h<=0)continue
j+=C.auc[i].b
g=u+t*(0.24+i*0.14)
J.bA(s.save())
s.translate((1-h)*30,0)
f=A.cn.j(h)
$.X()
e=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
e.r=f.gp(0)
d=e.H()
s.drawRect(B.c4(new B.aa(q,g,o,g+p)),d)
d.delete()
D.rA(a6,"$"+C.auc[i].b,new B.u(n,g+m),l,A.aA.j(h),9999)
s.restore()}p=u+t*0.7
a6.bA(new B.u(q,p),new B.u(x-r,p),D.FI(A.dn,1.4))
D.rA(a6,"TOTAL  $"+j,new B.u(w.gbQ().a,u+t*0.78),t*0.075,A.aA,v*0.8)
x=a8>2.8
if(x){r=a8-2.8
i=A.k.D(r/0.3,0,1)
J.bA(s.save())
s.translate(w.gbQ().a,u+t*0.55)
a6.j9(0,-0.3)
a6.bW(0,2-A.et.av(0,i))
a6.aD(B.bz(B.cu(A.J,t*0.17,v*0.6),A.h9),D.FI(A.d_.j(i),3.5))
D.rA(a6,"PAID",A.J,t*0.11,A.d_.j(i),9999)
s.restore()
for(v=r*0.7,a5-=a3*0.05,u=a3*0.7,t=a3*0.03,s=a8*8,a0=0;a0<6;++a0){a1=A.k.G(v+a0*0.17,1)
D.fQJ(a6,new B.u(a5+Math.sin(a0*2)*a3*0.1,u-a1*a3*0.5),t,s+a0)}}a5=x?(Math.sin(a8*6)+1)/2:0
D.Cl(a6,new B.u(a2*0.2,a4),a3*0.66,a8,!0,0,1,A.bz,A.KG,x,a5)},
hH8(d,e,a0){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=e.a,h=e.b,g=h*0.94,f=A.ec.j(0.7)
$.X()
x=B.M()
x.r=f.gp(0)
d.aY(new B.aa(0,g,0+i,g+(h-g)),x)
x=i*0.6
f=h*0.62
w=new B.u(x,f)
v=Math.min(i*0.3,h*0.6)
u=B.bz(B.cu(w,v*1.3,v*2.1),A.h9)
t=B.M()
t.r=A.ht.gp(0)
d.aD(u,t)
t=v*0.5
u=v*1.2
s=B.cu(w.aC(0,new B.u(t,0)),u,v)
r=B.M()
r.r=A.h_.gp(0)
d.aY(s,r)
t=B.cu(w.ad(0,new B.u(t,0)),u,v)
r=B.M()
r.r=A.h_.gp(0)
d.aY(t,r)
r=A.k.G(a0,2)
t=d.a
J.bA(t.save())
t.translate(x,f)
d.rW(0,Math.cos(r/2*3.141592653589793),1)
r=-v*0.6
s=B.M()
s.r=A.bJ.gp(0)
d.aY(new B.aa(0,r,0+v,r+u),s)
t.restore()
q=A.k.D(a0/3,0,1)
f-=v*0.6
s=f-h*0.28*q
d.bA(new B.u(x,f),new B.u(x,s),D.FI(A.fv,h*0.025))
for(f=q-0.4,u=h*0.05,r=h*0.04,p=0;p<5;++p){o=A.k.D(f-p*0.1,0,1)
n=p*1.3
m=Math.cos(n)
l=Math.sin(n)
k=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
k.r=A.bn.gp(0)
j=k.H()
t.drawCircle(x+m*h*0.14*o,s+l*h*0.08*o,u*o,j)
j.delete()
if(o>0.6)D.rA(d,"\u2665",new B.u(x+Math.cos(n)*h*0.14,s+Math.sin(n)*h*0.08),r,A.bz,9999)}f=a0*4
x=Math.sin(f)
D.Cl(d,new B.u(i*0.2,g),h*0.66,a0,!1,Math.abs(Math.sin(f))*h*0.01,2,A.aE,C.t8,!1,(x+1)/2)},
hQL(d,e,f){var x,w,v,u,t,s,r,q,p,o,n=e.a,m=e.b,l=m*0.94,k=A.w.j(0.2)
$.X()
x=B.M()
x.r=k.gp(0)
d.aY(new B.aa(0,l,0+n,l+(m-l)),x)
w=A.k.bw(A.k.D(f/5.5,0,1)*9)+1
for(v=n*0.62,k=l-m*0.03,x=m*0.26,u=m*0.07,t=d.a,s=0;s<w;++s){r=k-s*m*0.055
q=B.cu(new B.u(v,r),u,x)
p=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
p.r=A.cp.gp(0)
o=p.H()
t.drawOval(B.c4(q),o)
o.delete()
r=B.cu(new B.u(v,r),u,x)
q=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
q.b=A.ae
q.c=2
q.r=A.pg.gp(0)
q.d=A.bO
o=q.H()
t.drawOval(B.c4(r),o)
o.delete()}k=m*0.1
D.fQJ(d,new B.u(v,k+A.k.G(f*1.6,1)*(l-u-w*m*0.055-k)),m*0.05,f*8)
k=m*0.08
D.rA(d,"$"+w*25,new B.u(v,k),k,A.dN,9999)
k=f*5
u=Math.sin(k)
D.Cl(d,new B.u(n*0.25,l),m*0.66,f,!1,Math.abs(Math.sin(k))*m*0.012,1,A.cw,C.t8,!0,(u+1)/2)},
hJo(d,a0,a1){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=a0.a,g=a0.b,f=g*0.94,e=A.w.j(0.2)
$.X()
x=B.M()
x.r=e.gp(0)
d.aY(new B.aa(0,f,0+h,f+(g-f)),x)
for(e=d.a,x=g*0.012,w=g*0.55,v=a1*4,u=a1*2,t=g*0.15,s=g*0.03,r=0;r<3;r=n){q=Math.sin(v+r*1.7)
J.bA(e.save())
e.translate(h*(0.5+0.14*r),w-Math.abs(q)*g*0.3)
e.rotate((u+r)*180/3.141592653589793,0,0)
q=B.bz(B.cu(A.J,t,t),new B.aV(s,s))
p=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
p.r=A.c.gp(0)
o=p.H()
e.drawRRect(B.ep(q),o)
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
D.rA(d,"\u2605",new B.u(h*(0.45+r*0.1),w-i*g*0.2),v,A.dN.j(1-i),9999)}e=h*0.22
w=a1*6
v=Math.sin(w)
D.Cl(d,new B.u(e,f),g*0.66,a1,!0,Math.abs(Math.sin(w))*g*0.015,0,A.cb,C.t8,!0,(v+1)/2)
v=f-g*0.28
s=B.bz(B.cu(new B.u(e,v),g*0.07,g*0.16),new B.aV(s,s))
$.X()
w=B.M()
w.r=A.cC.gp(0)
d.aD(s,w)
w=B.M()
w.r=A.aB.gp(0)
d.ai(new B.u(e+g*0.05,v),x,w)},
hKJ(d,e,a0){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=e.a,j=e.b,i=j*0.94,h=A.w.j(0.2),g=$.X(),f=B.M()
f.r=h.gp(0)
d.aY(new B.aa(0,i,0+k,i+(j-i)),f)
f=k*0.42
h=j*0.18
x=j*0.08
w=B.bz(new B.aa(f,h,f+k*0.5,h+j*0.5),new B.aV(x,x))
v=new B.aQ(g.r,A.ap,null,null,B.a([],y.v))
v.E(new B.iT(w))
d.aO(v,D.FI(A.c.j(0.5),4))
u=new B.RJ(new B.vh(B.wL(v),!1,B.a([],y.L))).gL(0)
for(h=a0*0.18,g=u.a,x=u.b,t=g.e,s=j*0.016,r=d.a,q=0;q<10;++q){p=A.k.G(h+q/10,1)
g.ji()
o=t[x].b
o===$&&B.c()
o=o.a.length()
g.ji()
o=t[x].M8(p*o).a
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
x.z=A.yD
d.ai(l,j*0.2,x)}g=j*0.07
x=m?A.om:A.bI
t=B.M()
t.r=x.gp(0)
d.ai(l,g,t)
h=B.bz(B.cu(new B.u(f,h),j*0.2,j*0.1),A.ig)
t=B.M()
t.r=A.d_.gp(0)
d.aD(h,t)
D.rA(d,"+",new B.u(f,j*0.36),g,A.c,9999)
h=m?(Math.sin(a0*6)+1)/2:0
f=m?Math.abs(Math.sin(a0*6))*j*0.012:0
D.Cl(d,new B.u(k*0.2,i),j*0.68,a0,!1,f,0,A.bT,C.t8,m,h)
if(m)D.aMZ(d,new B.u(k*0.24,j*0.16),"It works!",g,(a0-1.5)/0.4,A.c)},
hJY(d,a0,a1){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=a0.a,g=a0.b,f=g*0.94,e=A.w.j(0.2)
$.X()
x=B.M()
x.r=e.gp(0)
d.aY(new B.aa(0,f,0+h,f+(g-f)),x)
w=A.k.D((a1-0.3)/0.4,0,1)
v=A.k.D((a1-1.8)/0.4,0,1)
x=g*0.2
e=g*0.065
D.aMZ(d,new B.u(h*0.3,x),"How do I enroll?",e,w,A.om)
if(a1>1&&a1<1.8)for(u=h*0.72,t=g*0.38,s=a1*9,r=g*0.015,q=d.a,p=0;p<3;++p){o=Math.sin(s+p)
n=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
n.r=A.c.gp(0)
m=n.H()
q.drawCircle(u+p*g*0.05,t-Math.abs(o)*g*0.02,r,m)
m.delete()}D.aMZ(d,new B.u(h*0.7,g*0.38),"Tap Civic Registry!",e,v,A.er)
D.Cl(d,new B.u(h*0.2,f),g*0.62,a1,!1,0,2,A.aB,C.t8,a1<1,0)
l=h*0.78
k=f-g*0.28
e=g*0.04
x=B.bz(B.cu(new B.u(l,k),g*0.22,x),new B.aV(e,e))
u=B.M()
u.r=A.aL.gp(0)
d.aD(x,u)
u=g*0.18
x=k-u
e=B.bz(B.cu(new B.u(l,x),g*0.14,u),new B.aV(e,e))
u=B.M()
u.r=A.cn.gp(0)
d.aD(e,u)
for(e=d.a,u=a1*1.1,t=g*0.02,j=0;j<2;++j){i=C.oJ[j]
s=A.k.G(u,1)>0.08?A.b7:A.fi
r=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
r.r=s.gp(0)
m=r.H()
e.drawCircle(l+i*g*0.04,x,t,m)
m.delete()}d.bA(new B.u(l,k-g*0.25),new B.u(l,k-g*0.3),D.FI(A.ad,3))
e=B.M()
e.r=A.aB.gp(0)
d.ai(new B.u(l,k-g*0.31),g*0.015,e)},
fj0:function fj0(d,e,f){this.a=d
this.b=e
this.c=f},
aMn(d,e,f,g,h,i,j,k){var x=new D.faZ(e,h,i,k),w=x.$1(g),v=w.b.c
if(v>j&&v>0)w=x.$1(Math.max(2,g*j/v))
x=w.b
v=x.c
x=x.a.c
w.a6(d,f.aC(0,new B.u(v/2,x.gbb(x)/2)))},
Kw(d,e,f,a0){var x,w,v,u,t,s,r,q,p,o,n,m=A.o.G(a0==null?A.k.bw(f/6):a0,11),l=A.k.G(f,6),k=C.cYu[m],j=e.a,i=e.b,h=0+j,g=0+i
$.X()
x=B.M()
x.sau(new B.a7(A.ax,A.aD,A.x,B.a([k.c,k.d],y.O),null,null).aw(0,new B.aa(0,0,h,g)))
d.aY(new B.aa(0,0,h,g),x)
w=i*(j>=i?0.7:0.6)
g=d.a
J.bA(g.save())
g.clipRect(B.c4(new B.aa(0,0,h,0+w)),$.qG()[1],!0)
D.hRG(d,new B.at(j,w),m,l)
g.restore()
v=i-w
x=A.w.j(0.3)
u=B.M()
u.r=x.gp(0)
d.aY(new B.aa(0,w,h,w+v),u)
t=A.cq.av(0,A.k.D((l-0.2)/0.5,0,1))
J.bA(g.save())
g.translate((1-t)*j*0.25,0)
u=j/2
h=j*0.94
D.aMn(d,k.a,new B.u(u,w+v*0.3),v*0.36,A.c.j(t),!0,h,0)
D.aMn(d,k.b,new B.u(u,w+v*0.64),v*0.2,A.c.j(0.92*t),!1,h,0)
g.restore()
for(h=i*0.965,x=i*0.009,s=i*0.004,r=0;r<11;++r){q=r===m
p=q?s:0
o=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
o.r=A.c.j(q?0.95:0.35).gp(0)
n=o.H()
g.drawCircle(u+(r-5)*i*0.035,h,x+p,n)
n.delete()}h=j-i*0.07
g=i*0.06
D.aMn(d,"AD",new B.u(h,g),i*0.045,A.c.j(0.85),!0,9999,1)
x=i*0.02
x=B.bz(B.cu(new B.u(h,g),i*0.065,i*0.1),new B.aV(x,x))
g=B.M()
g.b=A.ae
g.c=1
g.r=A.ad.gp(0)
g.d=A.bO
d.aD(x,g)},
aOD(d,e,f,g){var x,w=d.a
J.bA(w.save())
w.clipRect(B.c4(new B.aa(0,0,0+e.a,0+e.b)),$.qG()[1],!0)
x=C.jU[A.o.G(f,8)].e
if(x===-2)D.hHg(d,e,g)
else if(x===-1)D.Kw(d,e,g,null)
else D.Kw(d,e,g,x)
w.restore()},
hHg(d,a0,a1){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=a0.a,h=a0.b,g=new B.S(Date.now(),0,!1),f=0+i,e=0+h
$.X()
x=B.M()
x.sau(C.bQq.aw(0,new B.aa(0,0,f,e)))
d.aY(new B.aa(0,0,f,e),x)
x=B.M()
x.r=A.bL.gp(0)
d.aY(new B.aa(0,0,f,0+h*0.15),x)
D.aMn(d,A.oH[B.bG(g)-1]+" "+B.by(g),new B.u(i/2,h*0.075),h*0.08,A.c,!0,i*0.9,0)
w=i/7
for(f=h*0.21,e=h*0.05,v=0;v<7;++v)D.aMn(d,C.daT[v],new B.u(w*(v+0.5),f),e,A.az,!0,9999,0)
u=B.c0(B.by(g),B.bG(g),1,0,0,0,0,0)
t=B.bQ(B.c0(B.by(g),B.bG(g)+1,0,0,0,0,0,0))
s=B.mq(u)-1
r=h*0.74/A.k.dw((s+t)/7)
for(f=h*0.26,e=a1*3,x=d.a,q=1;q<=t;++q){p=s+q-1
o=w*(A.o.G(p,7)+0.5)
n=f+r*(A.o.an(p,7)+0.5)
if(q===B.bQ(g)){m=Math.min(w,r)
l=A.aW.j(0.5+0.2*Math.sin(e))
$.X()
k=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
k.r=l.gp(0)
j=k.H()
x.drawCircle(o,n,m*0.42,j)
j.delete()}m=Math.min(w,r)
l=q===B.bQ(g)?A.c:A.ad
D.aMn(d,""+q,new B.u(o,n),m*0.42,l,!0,9999,0)}},
faZ:function faZ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
w1:function w1(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
vu:function vu(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fV8(d,e,f,g,h,a0){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i=d.a
J.bA(i.save())
x=e.a
w=e.b
v=0+x
u=0+w
i.clipRect(B.c4(new B.aa(0,0,v,u)),$.qG()[1],!0)
if(h<3){$.X()
t=B.M()
t.r=C.b5_.gp(0)
d.aY(new B.aa(0,0,v,u),t)
if(h<0.5)u=h/0.5
else u=h>2.4?(3-h)/0.6:1
s=A.k.D(u,0,1)
u=e.ef(A.J)
t=e.gee()
r=B.M()
r.sau(new B.bR(A.A,0.5,A.x,j,0,B.a([A.aW.j(0.35*s),A.K],y.O),j,j).aw(0,B.bU(e.ef(A.J),e.gee()*0.5)))
d.ai(u,t*0.5,r)
D.FL(d,"NGMY",new B.u(0,w*0.36),w*0.2,A.c.j(s),A.L,w*0.03,x)
D.FL(d,"T V",new B.u(0,w*0.6),w*0.08,A.aW.j(s),A.L,w*0.05,x)
r=x*0.3
t=w*0.78
u=B.M()
u.r=A.aW.j(s).gp(0)
d.aY(new B.aa(r,t,r+x*0.4*(h/3),t+3),u)}else if(a0>=0)D.aOD(d,e,a0,g)
else{q=A.k.D((h-3)/0.5,0,1)
p=A.o.G(f,10)
switch(p){case 0:D.hQl(d,e,g)
break
case 1:D.hHY(d,e,g)
break
case 2:D.hPF(d,e,g)
break
case 3:D.hMA(d,e,g)
break
case 4:D.hNO(d,e,g)
break
case 5:D.hPG(d,e,g)
break
case 6:D.hJe(d,e,g)
break
case 7:D.hQk(d,e,g)
break
case 8:D.hOz(d,e,g)
break
default:D.hJp(d,e,g)}t=x-w*0.34
r=w*0.04
o=w*0.03
n=B.bz(new B.aa(t,r,t+w*0.3,r+w*0.1),new B.aV(o,o))
$.X()
o=B.M()
o.r=A.w.j(0.55).gp(0)
d.aD(n,o)
D.FL(d,"NGMY",new B.u(n.a+w*0.025,n.b+w*0.012),w*0.07,A.c,A.bg,1,j)
o=w*0.86
t=B.M()
t.r=A.w.j(0.6).gp(0)
d.aY(new B.aa(0,o,v,o+w*0.14),t)
D.FL(d,"CH "+(f+1)+"  \xb7  "+C.Pe[p].a,new B.u(r,w*0.885),w*0.075,A.c,A.bg,0,x-w*0.08)
if(q<1){t=B.M()
t.r=A.c.j(0.6*(1-q)).gp(0)
d.aY(new B.aa(0,0,v,u),t)}}$.X()
m=B.M()
m.r=A.w.j(0.07).gp(0)
for(l=0;l<w;l+=3){k=m.H()
i.drawRect(B.c4(new B.aa(0,l,v,l+1)),k)
k.delete()}v=new B.aQ($.X().r,A.ap,j,j,B.a([],y.v))
v.E(new B.b5(0,0))
v.E(new B.ap(x*0.45,0))
v.E(new B.ap(0,w*0.5))
v.E(new B.bE())
w=B.M()
w.r=A.c.j(0.04).gp(0)
d.aO(v,w)
i.restore()},
FL(d,e,f,g,h,i,j,k){var x=null,w=B.ii(x,x,1,x,B.dq(x,x,x,x,x,x,x,x,x,B.l(x,x,h,x,x,x,x,x,x,x,x,g,x,x,A.u,x,x,!0,x,j,x,x,x,x,x,x),e),i,A.ch,x,A.eq,A.cd),v=k==null
w.Bv(v?9999:k)
w.a6(d,f.ad(0,new B.u(i===A.L&&!v?(k-w.b.c)/2:0,0)))},
hQl(d,e,f){var x,w,v,u,t,s,r,q,p,o,n,m=e.a,l=e.b,k=A.k.G(f,14),j=0+m,i=0+l
$.X()
x=B.M()
x.sau(C.an2.aw(0,new B.aa(0,0,j,i)))
d.aY(new B.aa(0,0,j,i),x)
x=B.M()
x.r=A.dN.gp(0)
d.ai(new B.u(m*0.85,l*0.18),l*0.08,x)
x=l*0.78
i=B.M()
i.r=A.A_.gp(0)
d.aY(new B.aa(0,x,j,x+l*0.22),i)
new D.fjc(d,f,l).$5(new B.u(m*0.5,l*0.8),1.5707963267948966,l*0.24,5,A.k.D(k/5,0,1)*1.4)
for(j=l*0.26,i=l*0.11,x=l*0.05,w=d.a,v=-l,u=v*0.1,v*=0.04,t=l*0.065,s=0;s<6;++s){r=A.k.D((k-(5+s*1.3))/0.5,0,1)
if(r<=0)continue
q=(s&1)===1?0.04:0
p=A.o.G(s,3)
o=A.mB.av(0,r)
J.bA(w.save())
w.translate(m*(0.2+0.12*s+q),l*(0.16+0.14*p))
w.scale(o,o)
q=B.bz(B.cu(A.J,i,j),new B.aV(x,x))
$.X()
p=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
p.r=A.c.gp(0)
n=p.H()
w.drawRRect(B.ep(q),n)
n.delete()
q=B.bz(B.cu(A.J,i,j),new B.aV(x,x))
p=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
p.b=A.ae
p.c=2
p.r=A.bz.gp(0)
n=p.H()
w.drawRRect(B.ep(q),n)
n.delete()
D.FL(d,"\u2665 "+C.cNB[s],new B.u(u,v),t,A.rL,A.bg,0,null)
w.restore()}if(k>11.5)D.FL(d,"Family is everything",new B.u(0,l*0.62),l*0.09,A.ht,A.L,0,m)},
hHY(d,e,a0){var x,w,v,u,t,s,r,q,p,o,n,m,l=null,k=e.a,j=e.b,i=0+k,h=0+j,g=$.X(),f=B.M()
f.sau(C.bQD.aw(0,new B.aa(0,0,i,h)))
d.aY(new B.aa(0,0,i,h),f)
x=a0*40
for(i=d.a,h=y.v,w=0;w<2;++w,g=f){f=B.a([],h)
v=new B.aQ(g.r,A.ap,l,l,f)
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
t.r=(g?A.jm:A.ec).gp(0)
q=t.H()
g=v.e
i.drawPath((g==null?v.e=new B.cF(v.gbI().a.snapshot()):g).a,q)
q.delete()}for(i=j*0.04,h=x*1.3,g=k+60,f=k*0.3,p=0,o=0;o<6;++o){u=A.k.G(o*90-h,g)-30
t=Math.sin(o*1.7+a0)
if(Math.abs(u-f)<12)++p
D.hPK(d,new B.u(u,j*(0.35+0.08*t)),i,A.dN)}n=Math.abs(Math.sin(a0*5))
m=new B.u(f,j*0.72-n*j*0.22)
i=B.cu(new B.u(f,j*0.82),j*0.025,j*0.14*(1-n*0.4))
$.X()
h=B.M()
h.r=A.dn.gp(0)
d.i2(i,h)
h=j*0.085
i=B.M()
i.sau(C.e8y.aw(0,B.bU(m,h)))
d.ai(m,h,i)
i=B.M()
i.b=A.ae
i.c=2
i.r=A.pg.gp(0)
d.ai(m,h,i)
i=-j
D.FL(d,"$",m.ad(0,new B.u(i*0.03,i*0.045)),j*0.09,A.pg,A.bg,0,l)
h=i*0.01
i=m.ad(0,new B.u(i*0.028,h))
g=B.M()
g.r=A.w.gp(0)
d.ai(i,2.4,g)
h=m.ad(0,new B.u(j*0.028,h))
g=B.M()
g.r=A.w.gp(0)
d.ai(h,2.4,g)
D.FL(d,"Saved: $"+(A.o.G(A.k.bw(a0*3),1000)+p),new B.u(j*0.05,j*0.06),j*0.08,A.c,A.bg,0,l)},
hPK(d,e,f,g){var x,w,v,u,t,s,r,q=$.X(),p=B.a([],y.v),o=new B.aQ(q.r,A.ap,null,null,p)
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
o.e=null}}o.E(new B.bE())
$.X()
q=B.M()
q.r=g.gp(0)
d.aO(o,q)},
hPF(a1,a2,a3){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=a2.a,e=a2.b,d=$.X(),a0=B.M()
a0.r=C.bbC.gp(0)
a1.aY(new B.aa(0,0,0+f,0+e),a0)
x=new B.eT()
x.dI(7)
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
s.sau(C.e8w.aw(0,B.bU(new B.u(p,a0),t)))
a1.ai(new B.u(p,a0),t,s)
a0=B.cu(new B.u(p,a0),e*0.07,e*0.6)
s=B.M()
s.b=A.ae
s.c=3
s.r=A.bJ.j(0.7).gp(0)
a1.i2(a0,s)
s=Math.sin(a3*2)
J.bA(w.save())
w.translate(f*0.42,e*0.52+s*e*0.04)
a1.j9(0,-0.25)
d=d.r
s=y.v
o=new B.aQ(d,A.ap,g,g,B.a([],s))
a0=-e
t=a0*0.04
r=e*0.1
o.E(new B.b5(t,r))
n=e*0.04
o.E(new B.cS(0,e*(0.2+0.05*Math.sin(a3*30)),n,r))
o.E(new B.bE())
m=B.M()
l=e*0.12
m.sau(C.bRi.aw(0,new B.aa(t,r,t+e*0.08,r+l)))
a1.aO(o,m)
k=new B.aQ(d,A.ap,g,g,B.a([],s))
m=a0*0.17
k.E(new B.b5(0,m))
t=a0*0.05
j=e*0.05
k.E(new B.cS(e*0.09,t,j,r))
k.E(new B.ap(t,r))
k.E(new B.cS(a0*0.09,t,0,m))
k.E(new B.bE())
i=B.M()
h=a0*0.08
i.sau(C.bRx.aw(0,new B.aa(h,m,h+e*0.16,m+e*0.27)))
a1.aO(k,i)
i=B.M()
i.r=A.aW.gp(0)
a1.ai(new B.u(0,t),e*0.035,i)
i=new B.aQ(d,A.ap,g,g,B.a([],s))
i.E(new B.b5(t,n))
i.E(new B.ap(a0*0.1,l))
i.E(new B.ap(t,r))
i.E(new B.bE())
t=B.M()
t.r=A.aB.gp(0)
a1.aO(i,t)
s=new B.aQ(d,A.ap,g,g,B.a([],s))
s.E(new B.b5(j,n))
s.E(new B.ap(r,l))
s.E(new B.ap(j,r))
s.E(new B.bE())
r=B.M()
r.r=A.aB.gp(0)
a1.aO(s,r)
w.restore()},
hMA(a1,a2,a3){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null,h=a2.a,g=a2.b,f=0+h,e=0+g,d=$.X(),a0=B.M()
a0.sau(C.bQk.aw(0,new B.aa(0,0,f,e)))
a1.aY(new B.aa(0,0,f,e),a0)
for(f=a1.a,e=g*0.85,a0=g*0.7,x=y.v,d=d.r,w=0;w<4;++w){v=h*(0.1+0.25*w)
u=B.a([],x)
t=new B.aQ(d,A.ap,i,i,u)
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
e=B.cu(A.J,g*0.22,g*0.5)
a0=B.M()
a0.r=A.bw.gp(0)
a1.i2(e,a0)
a0=new B.aQ(d,A.ap,i,i,B.a([],x))
e=-g
u=e*0.22
a0.E(new B.b5(u,0))
a0.E(new B.cS(e*0.36,e*0.12+Math.sin(a3*3)*5,e*0.34,e*0.16))
t=e*0.02
a0.E(new B.cS(e*0.28,t,u,0))
u=B.M()
u.r=A.bw.gp(0)
a1.aO(a0,u)
u=g*0.03
a0=g*0.1
r=B.cu(new B.u(0,u),a0,g*0.34)
q=B.M()
q.r=A.aL.gp(0)
a1.i2(r,q)
q=B.M()
q.r=A.c.gp(0)
a1.ai(new B.u(g*0.15,t),3,q)
q=B.M()
q.r=A.w.gp(0)
a1.ai(new B.u(g*0.155,t),1.5,q)
f.restore()
for(t=e*0.005,r=e*0.08,q=e*0.03,p=g*0.06,e*=0.04,o=h+40,n=a3*2,w=0;w<6;++w){m=(w&1)===0?1:-1
l=A.k.G(A.k.G(a3*(24+w*7)*m+w*80,o)+h+40,o)
k=Math.sin(n+w)
J.bA(f.save())
f.translate(l-20,g*(0.52+0.06*w)+k*6)
f.scale(m,1)
l=B.cu(A.J,p,a0)
k=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
j=A.o.G(w,4)
k.r=C.atS[j].gp(0)
s=k.H()
f.drawOval(B.c4(l),s)
s.delete()
l=B.a([],x)
k=new B.aQ(d,A.ap,i,i,l)
l.push(new B.b5(e,0))
l.push(new B.ap(r,q))
l.push(new B.ap(r,u))
l.push(new B.bE())
l=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
l.r=C.atS[j].gp(0)
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
hNO(a7,a8,a9){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null,d=a8.a,a0=a8.b,a1=A.k.G(a9,12),a2=a1<7,a3=0+d,a4=0+a0,a5=$.X(),a6=B.M()
a6.sau(new B.a7(A.b0,A.b6,A.x,a2?C.d66:C.cVa,e,e).aw(0,new B.aa(0,0,a3,a4)))
a7.aY(new B.aa(0,0,a3,a4),a6)
a6=a0*0.74
x=B.M()
x.r=(a2?C.bfB:A.A_).gp(0)
a7.aY(new B.aa(0,a6,a3,a6+a0*0.26),x)
for(x=a7.a,w=a0*0.07,v=a0*0.06,u=a0*0.2,t=a0*0.1,s=a0*0.09,r=y.v,q=a9*2,a5=a5.r,p=0;p<4;++p){o=d*(0.08+0.24*p)
n=a0*(0.14+0.03*A.o.G(p,2))
m=a6-n
l=o+u
k=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
k.r=C.cIx[p].gp(0)
j=k.H()
x.drawRect(B.c4(new B.aa(o,m,l,m+n)),j)
j.delete()
k=B.a([],r)
i=new B.aQ(a5,A.ap,e,e,k)
k.push(new B.b5(o-4,m))
k.push(new B.ap(o+t,m-s))
k.push(new B.ap(l+4,m))
k.push(new B.bE())
m=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
m.r=A.ew.gp(0)
j=m.H()
m=i.gbI().a.snapshot()
x.drawPath((i.e=new B.cF(m)).a,j)
j.delete()
m=o+w
l=n*0.55
k=a6-l
i=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
i.r=(a2&&A.o.G(A.k.bw(q),2)===0?A.lu:A.fv).gp(0)
j=i.H()
x.drawRect(B.c4(new B.aa(m,k,m+v,k+l)),j)
j.delete()}if(a2){for(a6=a9*20,v=a9*260,u=a0*0.8,p=0;p<70;++p){o=A.k.G(p*37+a6,d)
h=A.k.G(p*53+v,u)
s=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
s.r=A.fh.gp(0)
s.c=1.4
j=s.H()
x.drawLine.apply(x,[o,h,o-3,h+9,j])
j.delete()}a6=a9*3
if(A.o.G(A.k.bw(a6),7)===0&&A.k.G(a6,1)<0.3){a6=B.M()
a6.r=A.c.j(0.5).gp(0)
a7.aY(new B.aa(0,0,a3,a4),a6)
r=new B.aQ(a5,A.ap,e,e,B.a([],r))
r.E(new B.b5(d*0.6,t))
t=d*0.55
a5=a0*0.3
r.E(new B.ap(t,a5))
r.E(new B.ap(d*0.62,a5))
r.E(new B.ap(t,a0*0.55))
t=B.M()
t.b=A.ae
t.c=4
t.r=A.lu.gp(0)
a7.aO(r,t)}}else{for(a3=d*0.5,a4=a0*0.035,a5=3.141592653589793*A.k.D((a1-7)/2,0,1)*57.29577951308232,p=0;p<6;++p){v=d*(0.9-p*0.07)
v=B.cu(new B.u(a3,a6),v,v)
u=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
u.b=A.ae
u.c=a4
u.r=C.da1[p].j(0.9).gp(0)
j=u.H()
x.drawArc.apply(x,[B.c4(v),180,a5,!1,j])
j.delete()}a3=B.M()
a3.r=A.dN.gp(0)
a7.ai(new B.u(d*0.86,a0*0.16),a0*0.08,a3)}for(a3=d+120,p=0;p<3;++p){o=A.k.G(a9*(8+p*4)+p*120,a3)-60
for(a4=a0*(0.12+0.1*p),g=0;g<4;++g){f=C.cdS[g]
$.X()
a5=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
a5.r=(a2?A.bl:A.c.j(0.95)).gp(0)
j=a5.H()
x.drawCircle(o+f.a,a4+f.b,w,j)
j.delete()}}},
hPG(a1,a2,a3){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=a2.a,a0=a2.b
$.X()
x=B.M()
x.r=A.db.gp(0)
a1.aY(new B.aa(0,0,0+d,0+a0),x)
w=B.M()
w.r=A.c.j(0.05).gp(0)
for(x=a1.a,v=0;v<d;v+=16){u=w.H()
x.drawLine.apply(x,[v,0,v,a0,u])
u.delete()}for(t=0;t<a0;t+=16){u=w.H()
x.drawLine.apply(x,[0,t,d,t,u])
u.delete()}s=d*0.14
r=a0*0.2
q=a0*0.08
p=B.bz(new B.aa(s,r,s+d*0.72,r+a0*0.5),new B.aV(q,q))
o=new B.aQ($.X().r,A.ap,null,null,B.a([],y.v))
o.E(new B.iT(p))
r=B.M()
r.b=A.ae
r.c=5
r.r=A.bw.gp(0)
a1.aO(o,r)
n=new B.RJ(new B.vh(B.wL(o),!1,B.a([],y.L))).gL(0)
r=n.a
m=n.b
r.ji()
l=r.e
k=l[m].b
k===$&&B.c()
k=k.a.length()
r.ji()
j=l[m].b
j===$&&B.c()
i=A.k.G(a3*k/5,j.a.length())
for(h=0;h<10;++h){r.ji()
k=l[m].b
k===$&&B.c()
k=A.k.G(i-h*9,k.a.length())
r.ji()
g=l[m].M8(k).a
k=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
k.r=A.dN.j(1-h*0.09).gp(0)
k.z=L.Qk
u=k.H()
x.drawCircle(g.a,g.b,6-h*0.5,u)
u.delete()}x=a0*0.45
r=B.bz(B.cu(new B.u(s,x),a0*0.22,a0*0.12),A.ig)
m=B.M()
m.r=A.d_.gp(0)
a1.aD(r,m)
D.FL(a1,"+",new B.u(s-5,a0*0.33),a0*0.07,A.c,A.bg,0,null)
f=(Math.sin(a3*2)+1)/2
e=new B.u(d*0.86,x)
x=B.M()
x.r=A.dN.j(0.25+0.5*f).gp(0)
x.z=H.H3
a1.ai(e,a0*0.16,x)
x=B.M()
x.r=B.aq(A.bI,A.om,f).gp(0)
a1.ai(e,q,x)
D.FL(a1,"Electricity needs a full loop!",new B.u(0,a0*0.74),a0*0.075,A.hf,A.L,0,d)},
hJe(a4,a5,a6){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=a5.a,a1=a5.b,a2=0+a0,a3=0+a1
$.X()
x=B.M()
x.sau(C.bTr.aw(0,new B.aa(0,0,a2,a3)))
a4.aY(new B.aa(0,0,a2,a3),x)
x=a1*0.82
a3=B.M()
a3.r=A.db.gp(0)
a4.aY(new B.aa(0,x,a2,x+a1*0.18),a3)
for(a2=a0*0.1,a3=a4.a,w=0;w<7;++w){v=a0*(0.05+w*0.15)
u=a1*(0.1+0.07*A.o.G(w*5,4))
t=x-u
s=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
s.r=A.aA.gp(0)
r=s.H()
a3.drawRect(B.c4(new B.aa(v,t,v+a2,t+u)),r)
r.delete()}for(a2=a1*0.2,t=a6*0.55,q=0;q<4;++q){s=t+q*0.27
p=A.k.G(s,1)
o=A.k.bw(s)*7+q*3
n=a0*(0.15+0.7*A.k.G(o*0.37,1))
m=a1*(0.2+0.25*A.k.G(o*0.53,1))
l=C.asU[A.o.G(Math.abs(o),5)]
if(p<0.3){$.X()
s=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
s.r=A.c.gp(0)
r=s.H()
a3.drawCircle(n,x-(x-m)*(p/0.3),2.5,r)
r.delete()}else{w=(p-0.3)/0.7
for(s=w*w*a1*0.08,k=1-w,j=2.4*k+0.4,i=0;i<28;++i){h=i*3.141592653589793*2/28
g=a2*A.dV.av(0,w)
f=Math.cos(h)
e=Math.sin(h)
$.X()
d=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
d.r=l.j(A.k.D(k,0,1)).gp(0)
d.z=C.di4
r=d.H()
a3.drawCircle(n+f*g,m+e*g+s,j,r)
r.delete()}}}},
hQk(a4,a5,a6){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=a5.a,d=a5.b,a0=0+e,a1=0+d,a2=$.X(),a3=B.M()
a3.sau(C.an2.aw(0,new B.aa(0,0,a0,a1)))
a4.aY(new B.aa(0,0,a0,a1),a3)
for(a1=a4.a,a3=y.v,x=0;x<2;++x,a2=w){w=B.a([],a3)
v=new B.aQ(a2.r,A.ap,null,null,w)
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
t.r=(a2?A.DU:A.A_).gp(0)
q=t.H()
a2=v.e
a1.drawPath((a2==null?v.e=new B.cF(v.gbI().a.snapshot()):a2).a,q)
q.delete()}a2=d*0.8
a3=B.M()
a3.r=A.bw.gp(0)
a4.aY(new B.aa(0,a2,a0,a2+d*0.04),a3)
for(u=-A.k.G(a6*80,24),a0=d*0.84,a3=d*0.03,w=a0+a3;u<e;u+=24){t=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
t.r=A.fv.gp(0)
q=t.H()
a1.drawRect(B.c4(new B.aa(u,a0,u+8,w)),q)
q.delete()}p=Math.sin(a6*14)*1.2
o=e*0.12
for(a0=a2+p,a2=d*0.025,w=e*0.012,t=d*0.02,s=d*0.62+p,a3=s+a3,r=a3+d*0.06,n=s+d*0.18,m=0;m<4;++m){l=m===0
k=o+e*(l?0.16:0.15)
j=B.bz(new B.aa(o,s,k,n),new B.aV(t,t))
i=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
i.r=(l?A.bL:C.cVc[m-1]).gp(0)
q=i.H()
a1.drawRRect(B.ep(j),q)
q.delete()
for(k-=o,j=k*0.18,h=0;h<3;++h){i=o+k*(0.12+h*0.28)
g=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
g.r=A.fh.gp(0)
q=g.H()
a1.drawRect(B.c4(new B.aa(i,a3,i+j,r)),q)
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
hOz(a2,a3,a4){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=a3.a,d=a3.b,a0=0+e,a1=0+d
$.X()
x=B.M()
w=a4*2
v=B.aq(A.jm,A.fi,(Math.sin(w)+1)/2)
v.toString
x.sau(new B.a7(A.ax,A.aD,A.x,B.a([v,A.aA],y.O),null,null).aw(0,new B.aa(0,0,a0,a1)))
a2.aY(new B.aa(0,0,a0,a1),x)
for(a0=a2.a,a1=d*0.86,x=e/8-2,v=d*0.14,u=a1+v,t=0;t<8;++t){s=e*t/8
r=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
r.r=(A.k.G(w+t,2)<1?A.bZ:A.aW).j(0.5).gp(0)
q=r.H()
a0.drawRect(B.c4(new B.aa(s,a1,s+x,u)),q)
q.delete()}a1=a4*6
p=Math.sin(a1)
J.bA(a0.save())
x=-d
a0.translate(e*0.5,d*0.55+Math.abs(p)*x*0.03)
a2.j9(0,p*0.06)
u=d*0.26
s=d*0.3
r=d*0.04
o=B.bz(B.cu(A.J,s,u),new B.aV(r,r))
n=B.M()
n.sau(C.bTP.aw(0,B.cu(A.J,s,u)))
a2.aD(o,n)
n=d*0.08
v=B.cu(new B.u(0,d*0.02),n,v)
o=B.M()
o.r=A.b7.j(0.7).gp(0)
a2.aY(v,o)
o=B.bz(B.cu(new B.u(0,x*0.25),d*0.17,d*0.22),new B.aV(r,r))
v=B.M()
v.r=A.cn.gp(0)
a2.aD(o,v)
m=A.k.G(a4*1.3,1)>0.08
for(v=x*0.26,u=d*0.025,l=0;l<2;++l){k=C.cdv[l]
s=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
s.r=(m?A.b7:A.fi).gp(0)
q=s.H()
a0.drawCircle(k*d,v,u,q)
q.delete()}v=B.M()
v.r=A.ad.gp(0)
v.c=3
a2.bA(new B.u(0,x*0.335),new B.u(0,x*0.38),v)
v=B.M()
v.r=A.aB.gp(0)
a2.ai(new B.u(0,x*0.39),d*0.015,v)
for(v=-p,u=d*0.035,s=d*0.15,o=d*0.28,x*=0.08,l=0;l<2;++l){j=C.oJ[l]
J.bA(a0.save())
i=j*d
a0.translate(i*0.14,x)
h=j>0
a0.rotate(j*(0.7+Math.sin(a1+(h?0:3.141592653589793))*0.8)*180/3.141592653589793,0,0)
g=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
g.r=A.bI.gp(0)
g.c=u
g.d=A.bO
q=g.H()
a0.drawLine.apply(a0,[0,0,i*0.16,0,q])
q.delete()
a0.restore()
h=h?p:v
g=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
g.r=A.bI.gp(0)
g.c=r
g.d=A.bO
q=g.H()
a0.drawLine.apply(a0,[i*0.06,s,i*0.08,o+h*d*0.02,q])
q.delete()}a0.restore()
for(a0=a4*0.7,a1=d*0.7,t=0;t<4;++t){f=A.k.G(a0+t*0.25,1)
D.FL(a2,"\u266a",new B.u(e*(0.2+0.18*t)+Math.sin(w+t)*8,a1-f*d*0.5),n,A.c.j(1-f),A.bg,0,null)}},
hJp(a1,a2,a3){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=a2.a,e=a2.b,d=0+f,a0=0+e
$.X()
x=B.M()
x.sau(C.bSr.aw(0,new B.aa(0,0,d,a0)))
a1.aY(new B.aa(0,0,d,a0),x)
x=B.M()
x.r=A.dN.gp(0)
a1.ai(new B.u(f*0.12,e*0.16),e*0.07,x)
x=e*0.72
a0=B.M()
a0.r=A.DU.gp(0)
a1.aY(new B.aa(0,x,d,x+e*0.28),a0)
for(d=a3*0.25,a0=e*0.78,x=a1.a,w=e*0.016,v=a3*0.3,u=e*0.022,t=0;t<9;++t){s=f*(0.07+t*0.105)
r=A.k.D(A.k.G(d-t*0.12,3),0,1)
q=A.o.G(t,3)
p=s+Math.sin(a3+t)*3
q=a0-e*(0.12+0.05*q)*r
o=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
o.r=A.he.gp(0)
o.c=3
n=o.H()
x.drawLine.apply(x,[s,a0,p,q,n])
n.delete()
if(r>0.7){for(m=0;m<6;++m){l=m*3.141592653589793/3+v
o=Math.cos(l)
k=Math.sin(l)
j=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
j.r=C.auT[A.o.G(t,5)].gp(0)
n=j.H()
x.drawCircle(p+o*e*0.028,q+k*e*0.028,u,n)
n.delete()}o=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
o.r=A.dN.gp(0)
n=o.H()
x.drawCircle(p,q,w,n)
n.delete()}}for(d=e*0.03,a0=e*0.05,w=e*0.06,v=a3*0.9,u=a3*1.3,q=a3*18,t=0;t<3;++t){s=f*(0.2+0.28*t)+Math.sin(v+t*2)*f*0.12
i=e*(0.3+0.1*t)+Math.cos(u+t)*e*0.06
h=Math.abs(Math.sin(q+t))
for(p=a0*h+2,o=(t+2)%5,g=0;g<2;++g){k=B.cu(new B.u(s+C.oJ[g]*e*0.025*h,i),w,p)
j=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
j.r=C.auT[o].gp(0)
n=j.H()
x.drawOval(B.c4(k),n)
n.delete()}p=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
p.r=A.bh.gp(0)
p.c=2
n=p.H()
x.drawLine.apply(x,[s,i-d,s,i+d,n])
n.delete()}},
fIx(d,e,f,g,h,i){return B.a5(d,!1).ce(B.ut(null,!1,!0,!0,new D.fIy(e,h,g,i,f),A.eN,null,A.pr,new D.fIz(),y.S))},
xi:function xi(d,e){this.a=d
this.b=e},
fjc:function fjc(d,e,f){this.a=d
this.b=e
this.c=f},
fIy:function fIy(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fIz:function fIz(){},
Vp:function Vp(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aD4:function aD4(d,e){var _=this
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
ezF:function ezF(d){this.a=d},
ezE:function ezE(d){this.a=d},
ezD:function ezD(d,e){this.a=d
this.b=e},
ezG:function ezG(d,e){this.a=d
this.b=e},
ezP:function ezP(d){this.a=d},
ezO:function ezO(d){this.a=d},
ezN:function ezN(){},
ezI:function ezI(d){this.a=d},
ezJ:function ezJ(d){this.a=d},
ezK:function ezK(d){this.a=d},
ezL:function ezL(d){this.a=d},
ezH:function ezH(d){this.a=d},
ezM:function ezM(d){this.a=d},
ezC:function ezC(d){this.a=d},
ezB:function ezB(d){this.a=d},
bsB:function bsB(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.a=h},
aKS:function aKS(){},
fVu(d){var x
A:{if("lgtv"===d){x="lg"
break A}if("sonytv"===d){x="sony"
break A}if("appletv"===d){x="apple"
break A}if("bangtv"===d){x="bo"
break A}x="samsung"
break A}return x},
i2S(d){var x,w=D.fVu(d)
A:{if("lg"===w){x=A.hd
break A}if("sony"===w){x=A.dL
break A}if("apple"===w){x=A.bV
break A}if("bo"===w){x=C.rR
break A}x=A.aW
break A}return x},
aqt:function aqt(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
biU:function biU(){this.d=0
this.c=this.a=null},
ezz:function ezz(d,e){this.a=d
this.b=e},
ezA:function ezA(d,e){this.a=d
this.b=e},
ezw:function ezw(){},
ezv:function ezv(d){this.a=d},
ezx:function ezx(d){this.a=d},
ezy:function ezy(d){this.a=d},
ezt:function ezt(d){this.a=d},
ezu:function ezu(d,e){this.a=d
this.b=e},
hz_(b3,b4,b5,b6,b7){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9=A.o.an(22050*b4,1000),b0=a9*2,b1=new DataView(new ArrayBuffer(44+b0)),b2=new D.cd_(b1)
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
x=new B.eT()
x.dI(3)
w=3
v=0.006
u=!1
t=0
switch(b7){case"piano":s=C.cOO
r=C.cTM
w=3.4
break
case"organ":s=C.cSK
r=C.d6a
v=0.02
u=!0
break
case"bell":s=C.cKL
r=C.cJF
w=2.4
break
case"pluck":s=C.cON
r=C.cvD
w=7
break
case"synth":s=C.d7_
r=C.d8E
v=0.012
u=!0
break
case"flute":s=C.dcH
r=C.c6g
v=0.07
u=!0
t=0.035
break
default:s=C.anr
r=C.anr}b0=s.length
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
break A}a4=a3*(Math.min(1,d/120)*Math.pow(a1,1.6))}b1.setInt16(44+d*2,A.o.D(A.k.V(a4*0.8*32e3),-32768,32767),!0)}return J.fa(A.dG.gaP(b1))},
dF(d,e,f,g,h,i){return D.hz0(d,e,f,g,h,i)},
hz0(d,e,f,g,h,i){var x=0,w=B.j(y.H),v=1,u=[],t,s,r,q,p,o
var $async$dF=B.e(function(j,k){if(j===1){u.push(k)
x=v}for(;;)switch(x){case 0:v=3
t=""+A.k.V(d)+"|"+f+"|"+i+"|"+B.t(g)+"|"+e
s=$.hyZ.ci(0,t,new D.cd1(d,f,i,g,e))
if($.ccZ.length<12){q=B.ahd()
q.Mi(A.aKE)
$.ccZ.push(q)}q=$.h3D
$.h3D=q+1
r=$.ccZ[A.o.G(q,$.ccZ.length)]
x=6
return B.b(J.hmi(r,new B.a2e(s,null),h),$async$dF)
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
cd_:function cd_(d){this.a=d},
cd1:function cd1(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h}},C,M,N
J=c[1]
B=c[0]
A=c[2]
G=c[121]
E=c[112]
H=c[115]
I=c[168]
K=c[98]
F=c[239]
L=c[92]
D=a.updateHolder(c[26],D)
C=c[89]
M=c[99]
N=c[227]
D.w1.prototype={}
D.vu.prototype={}
D.xi.prototype={}
D.Vp.prototype={
T(){return new D.aD4(null,null)}}
D.aD4.prototype={
gacH(){var x,w=this,v=w.d
if(v===$){x=B.bj(null,A.nI,null,1,null,w)
x.cp(0)
w.d!==$&&B.bM()
w.d=x
v=x}return v},
gCR(){var x=this.e
return x===$?this.e=this.a.e:x},
a_(){var x=this
x.a1()
x.w=B.cM(x.a.r,x.gaX4())
x.aTj()
D.dF(520,"",80,0,0.25,"tri")},
aTj(){var x=this.z
if(x!=null)x.a9(0)
this.z=B.cM(A.jN,new D.ezF(this))},
c3s(){var x=this.c
if(x!=null&&B.a5(x,!1).pi()){x=this.c
x.toString
B.a5(x,!1).N(this.gCR())}},
ahB(){var x=this,w=x.w
if(w!=null)w.a9(0)
x.w=null
x.y=!0
x.aTj()},
avs(d){this.m(new D.ezD(this,d))
D.dF(900,"",40,0,0.3,"noise")},
aYP(d){this.m(new D.ezG(this,d))
D.dF(700,"",60,0,0.3,"tri")},
q(){var x=this,w=x.w
if(w!=null)w.a9(0)
w=x.z
if(w!=null)w.a9(0)
x.gacH().q()
x.btu()},
B(d){var x,w,v,u,t=this,s=null,r=B.m(10),q=B.I(t.gc3t(),A.r,6),p=B.a([new B.ac(0,A.G,D.i2S(t.a.d).j(0.25),A.J,40)],y.V),o=B.m(4),n=y.p,m=B.a([B.c6(t.gacH(),new D.ezO(t),s)],n)
if(t.r)m.push(t.byT())
r=B.av(new B.fG(1.7777777777777777,B.p(s,B.bw(o,new B.an(A.W,s,A.b_,A.q,m,s),A.aq),A.f,s,s,new B.o(s,s,q,r,p,s,A.n),s,s,s,s,s,s,s,s),s),s,s,s)
q=t.y
p=q?1:0
o=B.nq(s,A.aX,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s)
o=B.aH(s,s,s,s,B.W(A.cy,A.c,s,s,s,s),s,s,s,t.gaX4(),s,s,s,o,"Back to the board",s)
m=B.m(20)
x=t.f
w=t.a
o=B.A(B.a([o,A.b3,B.p(s,B.d(x>=0?w.c+" \xb7 "+C.jU[x].a:w.c+" \xb7 CH "+(t.gCR()+1),s,s,s,s,s,s,M.zd,s,s,s),A.f,s,s,new B.o(A.aX,s,s,m,s,s,A.n),s,s,s,s,A.mb,s,s,s)],n),A.m,s,A.e,A.j,0,s,s)
m=t.ck7()
x=A.w.j(0.65)
w=B.m(18)
v=t.f
v=B.d(v>=0?C.jU[v].a:C.Pe[t.gCR()].a,s,s,s,s,s,s,A.jh,A.L,s,s)
u=t.f
return B.cb(s,A.w,B.bn(!0,B.aE(A.c5,new B.an(A.W,s,A.b_,A.q,B.a([r,B.CH(B.e_(B.v(B.a([new B.C(C.bnn,o,s),A.ao,m,A.b3,B.p(s,B.v(B.a([v,B.d(u>=0?C.jU[u].c:C.Pe[t.gCR()].b,s,s,s,s,s,s,K.aO8,A.L,s,s)],n),A.m,s,A.e,A.Q,0,A.p),A.f,s,s,new B.o(x,s,s,w,s,s,A.n),s,s,s,A.bm,A.bR,s,s,s)],n),A.m,s,A.e,A.j,0,A.p),!q,s),A.bb,A.i6,p)],n),s),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new D.ezP(t),s,s,s,s,s,s,!1,A.a8),!0,!1,A.ag,!0,!0),s,!1,!1,s,s)},
ck7(){var x=this,w=null,v=new D.ezN(),u=A.w.j(0.72),t=B.m(22),s=B.I(A.aW.j(0.5),A.r,1)
return B.p(w,B.A(B.a([v.$3(A.xW,"CH \u2212",new D.ezI(x)),v.$3(A.hw,"CH +",new D.ezJ(x)),v.$5$color$on(A.FG,"TV",new D.ezK(x),A.aW,x.f<0),v.$5$color$on(A.xF,"APPS",new D.ezL(x),A.by,x.r),v.$5$color$on(A.B7,"ADS",new D.ezM(x),A.bZ,x.f===0)],y.p),A.m,w,A.e,A.Q,0,w,w),A.f,w,w,new B.o(u,w,s,t,w,w,A.n),w,w,w,w,A.Yb,w,w,w)},
byT(){return new D.aqt(this.a.d,this.gc93(),new D.ezC(this),null)},
gc3t(){var x,w=D.fVu(this.a.d)
A:{if("apple"===w){x=A.dL
break A}if("bo"===w){x=C.DK
break A}if("sony"===w){x=C.b4W
break A}if("lg"===w){x=A.e8
break A}x=A.cC
break A}return x}}
D.bsB.prototype={
a6(d,e){var x=this
return D.fV8(d,e,x.b,x.d,x.e,x.c)},
aq(d){return!0}}
D.aKS.prototype={
q(){var x=this,w=x.a7$
if(w!=null)w.a3(0,x.gbu())
x.a7$=null
x.a2()},
aQ(){this.aX()
this.aW()
this.bv()}}
D.aqt.prototype={
T(){return new D.biU()},
a4v(d,e){return this.d.$1(e)}}
D.biU.prototype={
aX5(d){this.m(new D.ezz(this,d))
this.a.a4v(0,d)},
B(d){var x,w=this,v=D.fVu(w.a.c)
A:{if("lg"===v){x=w.bXx()
break A}if("sony"===v){x=w.crE()
break A}if("apple"===v){x=w.c3u()
break A}if("bo"===v){x=w.bzM()
break A}x=w.cm7()
break A}return x},
gacI(){var x=new B.S(Date.now(),0,!1)
return A.a.aT(A.o.u(B.dh(x)),2,"0")+":"+A.a.aT(A.o.u(B.fY(x)),2,"0")},
avt(d,e,f,g,h,i,j){var x,w,v=null,u=C.jU[d],t=this.d===d,s=u.d,r=B.aq(s,A.w,0.55)
r.toString
r=B.a([s,r],y.O)
s=B.m(h)
if(t)x=i
else x=A.K
x=B.I(x,A.r,t?2.5:0)
w=B.a([B.d(u.b,v,v,v,v,v,v,B.l(v,v,v,v,v,v,v,v,v,v,v,e,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],y.p)
if(g)w.push(new B.C(A.uX,B.d(u.a,v,1,A.a2,v,v,v,A.SW,v,v,v),v))
return B.aE(v,B.p(v,B.v(w,A.m,v,A.ba,A.j,0,A.p),A.f,v,v,new B.o(v,v,x,s,v,new B.a7(A.ax,A.aD,A.x,r,v,v),A.n),v,f,v,v,v,v,v,j),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new D.ezA(this,d),v,v,v,v,v,v,!1,A.a8)},
aX6(d,e,f,g,h,i){return this.avt(d,e,f,!1,g,h,i)},
cm7(){var x,w,v,u,t,s,r=this,q=null,p=r.a.e,o=y.p,n=B.A(B.a([C.fcW,A.ab,C.f5x,A.b3,C.bKB,A.ab,C.bGC,A.ab,B.d(r.gacI(),q,q,q,q,q,q,C.aOC,q,q,q)],o),A.m,q,A.e,A.j,0,q,q),m=C.jU[r.d],l=B.d(m.a,q,q,q,q,q,q,A.mv,q,q,q)
m=B.d(m.c,q,1,A.a2,q,q,q,C.eYx,q,q,q)
x=A.c.j(0.08)
w=B.a([],o)
for(v=0;v<2;++v){u=new B.aV(8,8)
w.push(B.p(q,B.W(C.cdj[v],A.ad,q,q,q,17),A.f,q,q,new B.o(A.bF,q,q,new B.bp(u,u,u,u),q,q,A.n),q,34,q,A.Ll,q,q,q,34))}u=B.a([],o)
for(t=0;t<8;++t){s=r.d===t?1.12:1
u.push(new B.C(A.Ll,new B.yh(r.avt(t,14,44,!0,8,A.aW,52),s,A.bb,A.fF,q,q),q))}w.push(B.D(B.cd(B.A(u,A.m,q,A.e,A.j,0,q,q),A.q,q,A.y,q,q,q,q,A.aQ),1))
return B.aE(q,B.p(q,B.v(B.a([n,A.b3,new B.bI(A.a3,q,q,l,q),new B.bI(A.a3,q,q,m,q),A.ao,B.p(q,B.A(w,A.m,q,A.e,A.j,0,q,q),A.f,q,q,new B.o(x,q,q,A.Ut,q,q,A.n),q,q,q,q,A.LN,q,q,q)],o),A.m,q,A.e,A.j,0,A.p),A.f,q,q,C.aYe,q,q,q,q,E.afB,q,q,q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,p,q,q,q,q,q,q,!1,A.a8)},
bXx(){var x=null,w=this.a.e,v=y.p
return B.aE(x,B.p(x,B.v(B.a([B.A(B.a([B.p(x,C.fiQ,A.f,x,x,new B.o(A.hd,x,x,B.m(10),x,x,A.n),x,x,x,x,A.mZ,x,x,x),A.bp,C.fbW,A.b3,B.d(this.gacI(),x,x,x,x,x,x,A.CN,x,x,x)],v),A.m,x,A.e,A.j,0,x,x),A.b3,new B.a6(x,62,B.hF(x,new D.ezv(this),8,x,x,A.aQ,new D.ezw(),!1),x)],v),A.F,x,A.e,A.j,0,A.p),A.f,x,x,C.aYp,x,x,x,x,N.Ls,x,x,x),A.y,!1,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,w,x,x,x,x,x,x,!1,A.a8)},
crE(){var x,w,v,u,t=this,s=null,r=C.jU[t.d],q=t.a.e,p=y.p,o=B.a([B.p(s,C.eDz,A.f,s,s,new B.o(A.dq,s,s,B.m(12),s,s,A.n),s,s,s,s,A.xp,s,s,s),A.ab],p)
for(x=0;x<3;++x){w=C.d3p[x]
v=w==="Apps"?A.c:A.az
o.push(new B.C(A.j7,new B.x(w,s,new B.F(!0,v,s,s,s,s,9.5,A.O,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s),s,s,s,s,s,s,s,s,s),s))}o.push(A.b3)
o.push(B.d(t.gacI(),s,s,s,s,s,s,C.eXX,s,s,s))
o=B.A(o,A.m,s,A.e,A.j,0,s,s)
v=r.d
u=B.aq(v,A.w,0.7)
u.toString
u=B.a([v,u],y.O)
v=B.m(10)
return B.aE(s,B.p(s,B.v(B.a([o,A.fW,B.D(B.A(B.a([B.D(B.p(s,B.v(B.a([B.d(r.b,s,s,s,s,s,s,A.um,s,s,s),B.d(r.a,s,s,s,s,s,s,A.ng,s,s,s),B.d(r.c,s,2,A.a2,s,s,s,C.f33,s,s,s),A.cZ,B.aE(s,B.p(s,C.f9_,A.f,s,s,new B.o(A.c,s,s,B.m(10),s,s,A.n),s,s,s,s,A.xp,s,s,s),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new D.ezx(t),s,s,s,s,s,s,!1,A.a8)],p),A.F,s,A.lK,A.j,0,A.p),A.f,s,s,new B.o(s,s,s,v,s,new B.a7(A.a3,A.a7,A.x,u,s,s),A.n),s,s,s,s,A.cj,s,s,s),5),A.ab,B.D(B.ic(!0,s,s,A.y,C.eJt,new D.ezy(t),8,A.ag,s,A.ai,!1),6)],p),A.m,s,A.e,A.j,0,s,s),1)],p),A.F,s,A.e,A.j,0,A.p),A.f,C.bf9,s,s,s,s,s,s,A.fG,s,s,s),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,q,s,s,s,s,s,s,!1,A.a8)},
c3u(){var x,w,v,u,t=this,s=null,r=t.a.e,q=y.p,p=B.A(B.a([C.bLc,A.q0,C.foq,A.b3,B.d(t.gacI(),s,s,s,s,s,s,A.CR,s,s,s)],q),A.m,s,A.e,A.j,0,s,s),o=B.a([],q)
for(x=0;x<8;++x){w=t.d===x
v=w?6:0
u=w?C.d8p:A.Py
w=w?1.18:1
o.push(new B.C(A.eQ,B.dg(s,new B.yh(t.aX6(x,20,44,12,A.c,44),w,A.bb,A.eE,s,s),s,s,A.bb,new B.o(s,s,s,s,u,s,A.n),A.eE,s,s,new B.Q(0,0,0,v),s,s,s,s),s))}return B.aE(s,B.p(s,B.v(B.a([p,A.b3,new B.a6(s,68,B.cd(B.A(o,A.dE,s,A.e,A.j,0,s,s),A.q,s,A.y,s,s,s,s,A.aQ),s),A.at,B.d(C.jU[t.d].a,s,s,s,s,s,s,A.o4,s,s,s)],q),A.m,s,A.e,A.j,0,A.p),A.f,s,s,C.aYg,s,s,s,s,C.Xt,s,s,s),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,r,s,s,s,s,s,s,!1,A.a8)},
bzM(){var x,w,v,u,t,s,r=this,q=null,p=r.a.e,o=C.jU[r.d],n=y.p
o=B.D(B.v(B.a([C.f8A,A.b3,B.d(o.b,q,q,q,q,q,q,A.w0,q,q,q),A.at,B.d(o.a,q,q,q,q,q,q,C.eQG,q,q,q),A.bA,B.d(o.c,q,q,q,q,q,q,C.f3n,q,q,q),A.ao,B.aE(q,B.p(q,C.fqu,A.f,q,q,C.aYL,q,q,q,q,C.bmw,q,q,q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new D.ezt(r),q,q,q,q,q,q,!1,A.a8),A.b3],n),A.F,q,A.e,A.j,0,A.p),4)
x=B.p(q,q,A.f,C.bdf,q,q,q,q,q,A.fQ,q,q,q,0.6)
w=B.a([],n)
for(v=0;v<8;++v){u=C.jU[v]
t=r.d===v
s=t?C.rR:C.abe
t=t?12:10.5
w.push(B.aE(q,new B.C(A.xd,new B.x(u.a,q,new B.F(!0,s,q,"serif",q,q,t,A.jP,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q),q,q,q,q,q,q,q,q,q),q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new D.ezu(r,v),q,q,q,q,q,q,!1,A.a8))}return B.aE(q,B.p(q,B.A(B.a([o,x,B.D(B.cB(w,q,q,q,q,A.ai,!1),3)],n),A.m,q,A.e,A.j,0,q,q),A.f,C.bic,q,q,q,q,q,q,A.EX,q,q,q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,p,q,q,q,q,q,q,!1,A.a8)}}
var z=a.updateTypes(["~()","Vp(Y,bo<N>,bo<N>)","~(G)"])
D.fj0.prototype={
$1(d){var x=null,w=B.ii(x,x,1,x,B.dq(x,x,x,x,x,x,x,x,x,B.l(x,x,this.b,x,x,x,x,x,x,x,x,d,x,x,A.u,x,x,!0,x,x,x,x,x,x,x,x),this.a),A.a5,A.ch,x,A.eq,A.cd)
w.eP()
return w},
$S:746}
D.faZ.prototype={
$1(d){var x=this,w=null,v=x.c?A.u:A.a4
v=B.ii(w,w,1,w,B.dq(w,w,w,w,w,w,w,w,w,B.l(w,w,x.b,w,w,w,w,w,w,w,w,d,w,w,v,w,w,!0,w,x.d,w,w,w,w,w,w),x.a),A.a5,A.ch,w,A.eq,A.cd)
v.eP()
return v},
$S:746}
D.fjc.prototype={
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
u.r=B.aq(A.d_,A.bc,(Math.sin(q.b*2+w.a)+1)/2).gp(0)
v.ai(w,q.c*0.035,u)}},
$S:1926}
D.fIy.prototype={
$3(d,e,f){var x=this
return new D.Vp(x.d,x.e,x.a,x.c,x.b,null)},
$C:"$3",
$R:3,
$S:z+1}
D.fIz.prototype={
$4(d,e,f,g){var x=y.t
return new B.cX(e,!1,B.ih(A.A,g,null,new B.bf(B.cI(A.cq,e,null),new B.bm(0.85,1,x),x.k("bf<bH.T>"))),null)},
$C:"$4",
$R:4,
$S:31}
D.ezF.prototype={
$0(){var x=this.a
if(x.c!=null&&!x.r)x.m(new D.ezE(x))},
$S:0}
D.ezE.prototype={
$0(){return this.a.y=!1},
$S:0}
D.ezD.prototype={
$0(){var x,w=this.a
w.f=-1
w.e=A.o.G(w.gCR()+this.b,10)
if(w.gCR()<0)w.e=w.gCR()+10
x=w.gacH().y
x=x==null?null:A.o.an(x.a,1000)
w.x=x==null?0:x
w.ahB()},
$S:0}
D.ezG.prototype={
$0(){var x=this.a
x.f=this.b
x.r=!1
x.ahB()},
$S:0}
D.ezP.prototype={
$0(){var x=this.a
return x.m(x.gcwB())},
$S:0}
D.ezO.prototype={
$2(d,e){var x=null,w=this.a,v=w.gacH().y,u=v==null?x:A.o.an(v.a,1000),t=(u==null?0:u)/1000,s=w.x===0&&w.a.f?t:99
return B.b3(x,x,x,new D.bsB(w.gCR(),w.f,t,s,x),A.f0)},
$S:68}
D.ezN.prototype={
$5$color$on(d,e,f,g,h){var x=null,w=h?g.j(0.28):A.c.j(0.08),v=B.m(14),u=B.I(h?g:A.b5,A.r,1)
return B.aE(x,B.p(x,B.v(B.a([B.W(d,g,x,x,x,20),A.ui,B.d(e,x,x,x,x,x,x,B.l(x,x,g,x,x,x,x,x,x,x,x,9.5,x,x,A.I,x,x,!0,x,x,x,x,x,x,x,x),x,x,x)],y.p),A.m,x,A.e,A.Q,0,A.p),A.f,x,x,new B.o(w,x,u,v,x,x,A.n),x,x,x,A.jr,A.kF,x,x,56),A.y,!1,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,f,x,x,x,x,x,x,!1,A.a8)},
$3(d,e,f){return this.$5$color$on(d,e,f,A.c,!1)},
$4$color(d,e,f,g){return this.$5$color$on(d,e,f,g,!1)},
$S:1927}
D.ezI.prototype={
$0(){return this.a.avs(-1)},
$S:0}
D.ezJ.prototype={
$0(){return this.a.avs(1)},
$S:0}
D.ezK.prototype={
$0(){return this.a.avs(0)},
$S:0}
D.ezL.prototype={
$0(){var x=this.a
return x.m(new D.ezH(x))},
$S:0}
D.ezH.prototype={
$0(){var x=this.a
x.r=!x.r
x.ahB()},
$S:0}
D.ezM.prototype={
$0(){return this.a.aYP(0)},
$S:0}
D.ezC.prototype={
$0(){var x=this.a
return x.m(new D.ezB(x))},
$S:0}
D.ezB.prototype={
$0(){return this.a.r=!1},
$S:0}
D.ezz.prototype={
$0(){return this.a.d=this.b},
$S:0}
D.ezA.prototype={
$0(){return this.a.aX5(this.b)},
$S:0}
D.ezw.prototype={
$2(d,e){return A.bp},
$S:36}
D.ezv.prototype={
$2(d,e){var x=null,w=this.a,v=w.d===e?1.1:1
v=B.a([B.v7(w.aX6(e,18,46,6,A.c,80),A.bb,A.fF,v)],y.p)
if(w.d===e)v.push(new B.C(A.uX,B.d(C.jU[e].a,x,x,x,x,x,x,C.f1C,x,x,x),x))
return B.v(v,A.m,x,A.e,A.Q,0,A.p)},
$S:674}
D.ezx.prototype={
$0(){var x=this.a
return x.a.a4v(0,x.d)},
$S:0}
D.ezy.prototype={
$2(d,e){return this.a.avt(e,15,1/0,!0,8,A.c,1/0)},
$S:39}
D.ezt.prototype={
$0(){var x=this.a
return x.a.a4v(0,x.d)},
$S:0}
D.ezu.prototype={
$0(){return this.a.aX5(this.b)},
$S:0}
D.cd_.prototype={
$2(d,e){var x,w,v,u
for(x=e.length,w=this.a,v=w.$flags|0,u=0;u<x;++u){v&2&&B.aj(w,9)
w.setUint8(d+u,e.charCodeAt(u))}},
$S:471}
D.cd1.prototype={
$0(){var x=this
return D.hz_(x.a,x.b,x.c,x.d,x.e)},
$S:316};(function aliases(){var x=D.aKS.prototype
x.btu=x.q})();(function installTearOffs(){var x=a._instance_0u,w=a._instance_1u
var v
x(v=D.aD4.prototype,"gaX4","c3s",0)
x(v,"gcwB","ahB",0)
w(v,"gc93","aYP",2)})();(function inheritance(){var x=a.mixinHard,w=a.inheritMany,v=a.inherit
w(B.hT,[D.fj0,D.faZ,D.fjc,D.fIy,D.fIz,D.ezN])
w(B.aC,[D.w1,D.vu,D.xi])
w(B.ag,[D.Vp,D.aqt])
w(B.ah,[D.aKS,D.biU])
v(D.aD4,D.aKS)
w(B.j3,[D.ezF,D.ezE,D.ezD,D.ezG,D.ezP,D.ezI,D.ezJ,D.ezK,D.ezL,D.ezH,D.ezM,D.ezC,D.ezB,D.ezz,D.ezA,D.ezx,D.ezt,D.ezu,D.cd1])
w(B.kd,[D.ezO,D.ezw,D.ezv,D.ezy,D.cd_])
v(D.bsB,B.mG)
x(D.aKS,B.c8)})()
B.jS(b.typeUniverse,JSON.parse('{"Vp":{"ag":[],"r":[]},"aD4":{"ah":["Vp"]},"bsB":{"aB":[]},"aqt":{"ag":[],"r":[]},"biU":{"ah":["aqt"]},"MB":{"ag":[],"r":[]}}'))
var y=(function rtii(){var x=B.ax
return{L:x("P<a24>"),V:x("P<ac>"),O:x("P<w>"),v:x("P<hn>"),s:x("P<n>"),p:x("P<r>"),n:x("P<N>"),t:x("bm<N>"),i:x("N"),S:x("G"),H:x("~")}})();(function constants(){var x=a.makeConstList
C.b7_=new B.w(1,0.0196078431372549,0.03137254901960784,0.058823529411764705,A.t)
C.bgB=new B.w(1,0.043137254901960784,0.10196078431372549,0.2,A.t)
C.d0s=x([C.b7_,C.bgB],y.O)
C.bT6=new B.a7(A.b0,A.b6,A.x,C.d0s,null,null)
C.aYe=new B.o(null,null,null,null,null,C.bT6,A.n)
C.beA=new B.w(1,0.42745098039215684,0.47843137254901963,0.5764705882352941,A.t)
C.b5j=new B.w(1,0.16862745098039217,0.1803921568627451,0.26666666666666666,A.t)
C.b6l=new B.w(1,0.4823529411764706,0.29411764705882354,0.41568627450980394,A.t)
C.dbh=x([C.beA,C.b5j,C.b6l],y.O)
C.bRu=new B.a7(A.ax,A.aD,A.x,C.dbh,null,null)
C.aYg=new B.o(null,null,null,null,null,C.bRu,A.n)
C.aUm=new B.d9(0.5,-0.6)
C.bhI=new B.w(1,0.22745098039215686,0.054901960784313725,0.10980392156862745,A.t)
C.cX3=x([C.bhI,A.e8],y.O)
C.e8Q=new B.bR(C.aUm,1.3,A.x,null,0,C.cX3,null,null)
C.aYp=new B.o(null,null,null,null,null,C.e8Q,A.n)
C.rR=new B.w(1,0.8392156862745098,0.7176470588235294,0.4823529411764706,A.t)
C.aWu=new B.az(C.rR,1,A.r,-1)
C.aWH=new B.bP(A.Y,A.Y,C.aWu,A.Y)
C.aYL=new B.o(null,null,C.aWH,null,null,null,A.n)
C.aaQ=new B.w(0.9490196078431372,0.06666666666666667,0.07450980392156863,0.09411764705882353,A.t)
C.b4W=new B.w(1,0.16470588235294117,0.16470588235294117,0.17647058823529413,A.t)
C.b5_=new B.w(1,0.00784313725490196,0.01568627450980392,0.03529411764705882,A.t)
C.abe=new B.w(1,0.6588235294117647,0.6235294117647059,0.5647058823529412,A.t)
C.DG=new B.w(1,0.12156862745098039,0.07058823529411765,0.03529411764705882,A.t)
C.DK=new B.w(1,0.7215686274509804,0.6980392156862745,0.6549019607843137,A.t)
C.b8l=new B.w(1,0.8784313725490196,0.6745098039215687,0.4117647058823529,A.t)
C.E1=new B.w(1,0.06666666666666667,0.0784313725490196,0.09411764705882353,A.t)
C.bbC=new B.w(1,0.011764705882352941,0.023529411764705882,0.09019607843137255,A.t)
C.W2=new B.w(1,0.054901960784313725,0.07058823529411765,0.09411764705882353,A.t)
C.bdf=new B.w(1,0.2901960784313726,0.26666666666666666,0.23529411764705882,A.t)
C.nA=new B.w(1,0.09019607843137255,0.09019607843137255,0.10980392156862745,A.t)
C.bf9=new B.w(1,0.08627450980392157,0.09411764705882353,0.10980392156862745,A.t)
C.bfB=new B.w(1,0.24705882352941178,0.3843137254901961,0.07058823529411765,A.t)
C.Wy=new B.w(1,1,0.41568627450980394,0,A.t)
C.mQ=new B.w(1,0.10588235294117647,0.10588235294117647,0.12156862745098039,A.t)
C.t8=new B.w(1,0.5529411764705883,0.3333333333333333,0.1411764705882353,A.t)
C.WD=new B.w(1,1,0.9529411764705882,0.6274509803921569,A.t)
C.bic=new B.w(1,0.10196078431372549,0.09019607843137255,0.0784313725490196,A.t)
C.bmw=new B.Q(0,0,0,1)
C.tj=new B.Q(0,0,7,0)
C.bnn=new B.Q(10,10,10,0)
C.Xt=new B.Q(10,6,10,8)
C.afS=new B.Q(14,10,10,10)
C.ajh=new B.a0(62970,"MaterialIcons",!1)
C.akg=new B.a0(983316,"MaterialIcons",!1)
C.N7=new B.a0(983617,"MaterialIcons",!1)
C.bGC=new B.ae(A.Bh,13,A.ad,null,null,null)
C.bKB=new B.ae(A.fa,13,A.ad,null,null,null)
C.bCh=new B.a0(983768,"MaterialIcons",!1)
C.bLc=new B.ae(C.bCh,13,A.c,null,null,null)
C.cwJ=x([A.aW,A.k9,A.qx],y.O)
C.bQk=new B.a7(A.b0,A.b6,A.x,C.cwJ,null,null)
C.bQq=new B.a7(A.b0,A.b6,A.x,I.P8,null,null)
C.cQU=x([A.f5,A.dO,A.cv],y.O)
C.bQD=new B.a7(A.b0,A.b6,A.x,C.cQU,null,null)
C.cPe=x([A.dN,A.aB],y.O)
C.bRi=new B.a7(A.b0,A.b6,A.x,C.cPe,null,null)
C.das=x([A.bV,A.c,A.bI],y.O)
C.bRx=new B.a7(A.a3,A.a7,A.x,C.das,null,null)
C.db_=x([A.hf,A.h_],y.O)
C.an2=new B.a7(A.b0,A.b6,A.x,C.db_,null,null)
C.d30=x([A.dy,A.om],y.O)
C.bSr=new B.a7(A.b0,A.b6,A.x,C.d30,null,null)
C.bTr=new B.a7(A.b0,A.b6,A.x,F.at7,null,null)
C.cZC=x([A.aL,A.ak],y.O)
C.bTP=new B.a7(A.b0,A.b6,A.x,C.cZC,null,null)
C.anr=x([1],y.n)
C.c6g=x([1,2,3],y.n)
C.ar4=x([1,-1],y.n)
C.cdj=x([A.lD,A.xF],B.ax("P<a0>"))
C.cdv=x([-0.05,0.05],y.n)
C.dZd=new B.u(26,-8)
C.dZG=new B.u(52,0)
C.dZc=new B.u(26,8)
C.cdS=x([A.J,C.dZd,C.dZG,C.dZc],B.ax("P<u>"))
C.evo=new B.z("Jambo!","Hello!")
C.eqk=new B.z("Asante","Thank you")
C.ehP=new B.z("Karibu","Welcome")
C.ejR=new B.z("Rafiki","Friend")
C.asP=x([C.evo,C.eqk,C.ehP,C.ejR],B.ax("P<+(n,n)>"))
C.asU=x([A.bZ,A.aW,A.dN,A.bc,A.cv],y.O)
C.cvD=x([1,2,3,4,5,6,7],y.n)
C.cIx=x([A.f9,A.bJ,A.KF,A.ex],y.O)
C.cJF=x([1,2.76,5.4,8.93,13.3],y.n)
C.atS=x([A.cv,A.cp,A.bZ,A.bc],y.O)
C.cKL=x([1,0.6,0.38,0.22,0.12],y.n)
C.cNB=x(["Mama","Baba","Bibi","Babu","Dada","Kaka"],y.s)
C.efg=new B.z("Chairs",120)
C.efj=new B.z("Cloth",80)
C.efA=new B.z("Delivery",25)
C.auc=x([C.efg,C.efj,C.efA],B.ax("P<+(n,G)>"))
C.cON=x([1,0.7,0.45,0.28,0.16,0.1,0.06],y.n)
C.cOO=x([1,0.55,0.32,0.2,0.12,0.07],y.n)
C.dTy=new D.xi("NGMY Tree Story","A family grows, one branch at a time")
C.dTt=new D.xi("Coin Hero","A little coin saves up and wins the day")
C.dTB=new D.xi("Space Voyage","The NGMY rocket explores the stars")
C.dTs=new D.xi("Ocean Friends","Fish, bubbles and a friendly whale")
C.dTu=new D.xi("Rainy Village","Storm clouds, then a rainbow")
C.dTw=new D.xi("Spark Adventure","Follow a spark round a circuit")
C.dTv=new D.xi("Fireworks Night","Colour bursts over the city")
C.dTA=new D.xi("Little Train","A train rolls past the hills")
C.dTx=new D.xi("Robot Disco","A robot dances to the beat")
C.dTz=new D.xi("Garden Time","Flowers grow and butterflies fly")
C.Pe=x([C.dTy,C.dTt,C.dTB,C.dTs,C.dTu,C.dTw,C.dTv,C.dTA,C.dTx,C.dTz],B.ax("P<xi>"))
C.cSK=x([1,0.6,0.45,0.3,0.22,0.15],y.n)
C.auT=x([A.bZ,A.cp,A.aB,A.by,A.cv],y.O)
C.cTM=x([1,2,3,4,5,6],y.n)
C.cVa=x([A.hf,A.om],y.O)
C.cVc=x([A.bi,A.aI,A.d_],y.O)
C.dkb=new D.vu("NGMY Ads","\ud83d\udce2","Every NGMY promotion, as cartoons",A.bZ,-1)
C.dk9=new D.vu("Civic Registry","\ud83e\udeaa","Enroll your family in your community",A.d7,0)
C.dkc=new D.vu("Jobs","\ud83d\udcbc","Find work and get hired",A.aI,1)
C.dke=new D.vu("NGMY Store","\ud83d\udecd\ufe0f","African food and traditions",A.fC,2)
C.dkf=new D.vu("Kiswahili","\ud83d\udde3\ufe0f","Learn Swahili and English",A.bT,3)
C.dkd=new D.vu("Doc Scanner","\ud83d\udcc4","Scan, save and share",A.c8,4)
C.dka=new D.vu("Invoices","\ud83e\uddfe","Professional invoices",A.bz,5)
C.dk8=new D.vu("Calendar","\ud83d\udcc5","This month, today lit up",A.aB,-2)
C.jU=x([C.dkb,C.dk9,C.dkc,C.dke,C.dkf,C.dkd,C.dka,C.dk8],B.ax("P<vu>"))
C.fFC=new D.w1("NGMY Civic Registry","Enroll your family. Stay counted and helped together.",A.dp,A.aW)
C.fFK=new D.w1("NGMY Jobs","Find work. Get hired. Get paid.",A.da,A.aM)
C.fFI=new D.w1("NGMY Store","African food and traditions. Support our Congolese and African community.",A.jJ,A.cp)
C.fFG=new D.w1("Kiswahili School","Learn Swahili and English, step by step.",A.cY,A.mP)
C.fFF=new D.w1("Document Scanner","Scan, save and share your papers.",A.pl,A.fZ)
C.fFD=new D.w1("Invoice Creator","Make professional invoices in minutes.",A.rL,A.oc)
C.fFA=new D.w1("Family Book and Tree","Write your family story. Grow your tree.",A.j3,A.JW)
C.fFB=new D.w1("NGMY Wallet","Save, send and earn coins.",A.pg,A.dN)
C.fFE=new D.w1("Vault Games","Play, win and learn.",A.dS,A.b7)
C.fFJ=new D.w1("Electronics Lab","Build real circuits and learn.",A.fi,A.b1)
C.fFH=new D.w1("NGMY Helper and Advisors","Friendly help, any time.",A.lt,A.cv)
C.cYu=x([C.fFC,C.fFK,C.fFI,C.fFG,C.fFF,C.fFD,C.fFA,C.fFB,C.fFE,C.fFJ,C.fFH],B.ax("P<w1>"))
C.d31=x([A.dS,A.f5],y.O)
C.d3p=x(["For you","Apps","Library"],y.s)
C.avV=x([A.bL,A.cp,A.d_,A.aA],y.O)
C.oJ=x([-1,1],y.n)
C.a27=x([-24,24],y.n)
C.a28=x([-5,5],y.n)
C.d66=x([A.aK,A.ak],y.O)
C.d6a=x([1,2,3,4,6,8],y.n)
C.d7_=x([1,0.5,0.33,0.25,0.2,0.16,0.14,0.12],y.n)
C.b_E=new B.ac(0,A.G,A.aX,A.dk,14)
C.d8p=x([C.b_E],y.V)
C.d8E=x([1,2,3,4,5,6,7,8],y.n)
C.da1=x([A.aB,A.cb,A.cp,A.bn,A.d7,A.b4],y.O)
C.daT=x(["M","T","W","T","F","S","S"],y.s)
C.dc_=x([A.c,A.p9],y.O)
C.dcH=x([1,0.18,0.06],y.n)
C.dWC={"SPARK PAINTER":0,"MANDALA MAKER":1,"TITLE ANIMATOR":2,"PALETTE LAB":3,"GRAVITY TOY":4,"ORBIT STUDIO":5,"SWARM STUDIO":6,"FIREWORK DESIGNER":7,"CHAIN BURST":8,"CIRCUIT LAB":9,"PERIODIC TABLE":10,"BODY EXPLORER":11,"SPIN THE WHEEL":12,"FOCUS TIMER":13,"MEMORY MATCH":14,"LUCKY POCKET":15,"ELECTRONICS LAB":16,"CONSTRUCTION LAB":17,"AI INVENTOR":18,"MAGNET LAB":19,"RADIO LAB":20,"POWER PLANT":21,"POWER GRID":22,"INTERNET JOURNEY":23,"ROBOT CODER":24,"BUG SMASHER":25,"ROCKET LANDER":26,"DATA SNAKE":27,"BINARY 2048":28,"SIGNAL BREAKER":29,"PASSWORD LAB":30,"WAVE LAB":31,"BUG HUNT":32,"MOLECULE MAKER":33,"DNA LAB":34,"ECOSYSTEM LAB":35,"BALANCE LAB":36,"GEAR LAB":37,"OPTICS LAB":38,"LASER MAZE":39,"LIGHT MIXER":40,"ATOM BUILDER":41,"CIPHER LAB":42,"PIXEL TV":43}
C.aC2=new B.bq(C.dWC,["sparkle","sparkle","whoosh","click","bounce","space","bubble","pop","zap","tech","lab","organic","click","tech","bubble","click","tech","tech","tech","tech","tech","tech","tech","tech","tech","pop","space","bubble","click","zap","click","tech","click","lab","organic","organic","click","tech","sparkle","zap","sparkle","lab","tech","tech"],B.ax("bq<n,n>"))
C.di4=new B.ht(A.G,1.2)
C.cdW=x([A.f9,A.eM,A.k8],y.O)
C.e8w=new B.bR(G.qf,0.5,A.x,null,0,C.cdW,null,null)
C.ctD=x([A.lu,A.og],y.O)
C.e8y=new B.bR(F.a8H,0.5,A.x,null,0,C.ctD,null,null)
C.bLH=new B.ae(A.fa,11,A.ad,null,null,null)
C.f_E=new B.F(!0,A.aR,null,null,null,null,9,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.flA=new B.x("Search",null,C.f_E,null,null,null,null,null,null,null,null,null)
C.cxV=x([C.bLH,A.q0,C.flA],y.p)
C.eDz=new B.co(A.aQ,A.e,A.j,A.m,null,A.p,null,0,C.cxV,null)
C.eJt=new B.hI(3,5,5,1.35,null)
C.bh6=new B.w(1,0.9450980392156862,0.9098039215686274,0.8470588235294118,A.t)
C.eQG=new B.F(!0,C.bh6,null,"serif",null,null,15,A.jP,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.eXX=new B.F(!0,A.ad,null,null,null,null,9.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.eYx=new B.F(!0,A.aR,null,null,null,null,9.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.SR=new B.F(!0,A.ad,null,null,null,null,12.5,null,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.aOC=new B.F(!0,A.ad,null,null,null,null,10,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.f1C=new B.F(!0,A.c,null,null,null,null,8.5,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.f33=new B.F(!0,A.ad,null,null,null,null,8.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.f3n=new B.F(!0,C.abe,null,null,null,null,8.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.eVt=new B.F(!0,A.az,null,null,null,null,9.5,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.f5x=new B.x("NGMY Apps",null,C.eVt,null,null,null,null,null,null,null,null,null)
C.a6y=new B.F(!0,A.az,null,null,null,null,12.5,null,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.eSg=new B.F(!0,C.rR,null,null,null,null,8,A.a4,null,3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.f8A=new B.x("BANG & OLUFSEN",null,C.eSg,null,null,null,null,null,null,null,null,null)
C.eXH=new B.F(!0,A.w,null,null,null,null,9,A.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.f9_=new B.x("Open",null,C.eXH,null,null,null,null,null,null,null,null,null)
C.fbW=new B.x("Home",null,C.aOC,null,null,null,null,null,null,null,null,null)
C.fcW=new B.x("SAMSUNG",null,A.aOl,null,null,null,null,null,null,null,null,null)
C.fiQ=new B.x("LG",null,A.w3,null,null,null,null,null,null,null,null,null)
C.foq=new B.x("tv",null,A.q6,null,null,null,null,null,null,null,null,null)
C.eVn=new B.F(!0,C.rR,null,null,null,null,8.5,null,null,2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.fqu=new B.x("OPEN",null,C.eVn,null,null,null,null,null,null,null,null,null)})();(function staticFields(){$.hyZ=B.V(B.ax("n"),B.ax("dD"))
$.ccZ=B.a([],B.ax("P<ahc>"))
$.h3D=0
$.aqq="music"})()};
(a=>{a["E6HV/ye8/sM+BUqqAeX27LbWIII="]=a.current})($__dart_deferred_initializers__);