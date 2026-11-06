((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,A,E,G,H,I,K,F,L,D={
yy(d,e){var x
$.W()
x=B.N()
x.b=A.ae
x.c=e
x.r=d.gp(0)
x.d=A.bQ
return x},
qU(d,e,f,g,h,i){var x=new D.fsC(e,h,!0),w=x.$1(g),v=w.b.c
if(v>i&&v>0)w=x.$1(Math.max(2,g*i/v))
x=w.b
v=x.c
x=x.a.c
w.a3(d,f.aB(0,new B.u(v/2,x.gbc(x)/2)))},
CV(a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=a6.a
J.bv(a5.save())
a5.translate(a7.a,a7.b-b1)
x=B.c9(new B.u(0,b1+a8*0.005),a8*0.06,a8*0.45)
w=A.w.j(0.22)
$.W()
v=B.N()
v.r=w.gp(0)
a6.hL(x,v)
for(x=a8*0.05,w=-a8,v=w*0.24,u=a8*0.1,t=v+a8*0.2,s=a8*0.04,r=a8*0.065,q=w*0.05,p=a8*0.14,o=q+x,n=a8*0.025,m=0;m<2;++m){l=C.jw[m]*a8*0.075
k=l-x
k=B.bu(new B.a8(k,v,k+u,t),new B.aR(s,s))
j=new B.aq(A.W,A.V,A.Y,A.a_,A.X)
j.r=A.d5.gp(0)
i=j.H()
a5.drawRRect(B.eA(k),i)
i.delete()
l-=r
l=B.bu(new B.a8(l,q,l+p,o),new B.aR(n,n))
k=new B.aq(A.W,A.V,A.Y,A.a_,A.X)
k.r=A.c.gp(0)
i=k.H()
a5.drawRRect(B.eA(l),i)
i.delete()}x=w*0.16
v=w*0.52
u=a8*0.32
t=x+u
r=a8*0.09
h=B.bu(new B.a8(x,v,t,v+u),new B.aR(r,r))
r=B.N()
r.r=b3.gp(0)
a6.aE(h,r)
r=w*0.27
u=a8*0.02
u=B.bu(new B.a8(x,r,t,r+a8*0.045),new B.aR(u,u))
r=A.c.j(0.35)
t=B.N()
t.r=r.gp(0)
a6.aE(u,t)
t=w*0.47
g=new B.u(w*0.15,t)
f=new B.u(a8*0.15,t)
t=w*0.06
u=a8*0.07
a6.bF(g,g.ad(0,new B.u(t,a8*0.17)),D.yy(b4,u))
t=g.ad(0,new B.u(t,a8*0.18))
r=B.N()
r.r=b4.gp(0)
a6.ae(t,s,r)
e=b0?-2.5+b6*0.5:0.5-b6*2.2
d=f.ad(0,new B.u(Math.sin(e)*a8*0.2,Math.cos(e)*a8*0.2))
a6.bF(f,d,D.yy(b4,u))
x=B.N()
x.r=b4.gp(0)
a6.ae(d,s,x)
w*=0.7
a0=new B.u(0,w)
a1=a8*0.22
if(b2===1){x=a0.ad(0,new B.u(0,-a1*0.12))
v=B.N()
v.r=C.AF.gp(0)
a6.ae(x,a1*1.18,v)}x=B.N()
x.r=b4.gp(0)
a6.ae(a0,a1,x)
if(b2===0){x=B.bQ(a0,a1)
v=B.N()
v.r=C.AF.gp(0)
a6.eV(x,3.141592653589793,3.141592653589793,!0,v)}else if(b2===2){x=B.bQ(a0,a1)
v=B.N()
v.r=C.AF.gp(0)
a6.eV(x,3.141592653589793,3.141592653589793,!0,v)
for(x=w+a1*0.3,v=a1*0.2,m=0;m<2;++m){a2=C.jw[m]
u=new B.aq(A.W,A.V,A.Y,A.a_,A.X)
u.r=C.AF.gp(0)
i=u.H()
a5.drawCircle(0+a2*a1*1.05,x,v,i)
i.delete()}}a3=A.k.E(a9*0.8,3)>2.85
for(x=w+a1*0.42,v=a1*0.12,u=a1*0.25,t=a9*0.7,s=a1*0.13,w+=a1*0.05,r=-a1*0.15,q=w+0,p=a1*0.15,m=0;m<2;++m){o=C.jw[m]*a1
n=0+o*0.4
if(a3){l=new B.aq(A.W,A.V,A.Y,A.a_,A.X)
l.b=A.ae
l.c=1.6
l.r=A.bk.gp(0)
l.d=A.bQ
i=l.H()
a5.drawLine.apply(a5,[n+r,q,n+p,q,i])
i.delete()}else{l=new B.aq(A.W,A.V,A.Y,A.a_,A.X)
l.r=A.c.gp(0)
i=l.H()
a5.drawCircle(n,w,u,i)
i.delete()
l=Math.sin(t)
k=new B.aq(A.W,A.V,A.Y,A.a_,A.X)
k.r=A.w.gp(0)
i=k.H()
a5.drawCircle(n+l*a1*0.06,q,s,i)
i.delete()}n=new B.aq(A.W,A.V,A.Y,A.a_,A.X)
n.r=A.i5.j(0.5).gp(0)
i=n.H()
a5.drawCircle(0+o*0.62,x,v,i)
i.delete()}x=a1*0.5
a4=a0.ad(0,new B.u(0,x))
w=a1*0.4
if(b5){x=B.c9(a4,w*(0.35+0.65*((Math.sin(a9*12)+1)/2)),x)
w=B.N()
w.r=A.eu.gp(0)
a6.hL(x,w)}else a6.eV(B.c9(a4.aB(0,new B.u(0,a1*0.1)),w,a1*0.65),0.2,2.741592653589793,!1,D.yy(A.bk,1.8))
a5.restore()},
ag9(d,e,f,g,h,i){var x,w,v,u,t,s,r,q=null
if(h<=0)return
x=d.a
J.bv(x.save())
x.translate(e.a,e.b)
d.bZ(0,A.k.D(A.lL.az(0,A.k.D(h,0,1)),0.01,1.3))
w=B.fN(q,q,q,q,B.cX(q,q,q,q,q,q,q,q,q,B.l(q,q,A.aw,q,q,q,q,q,q,q,q,g,q,q,A.u,q,q,!0,q,q,q,q,q,q,q,q),f),A.a4,A.c4,q,A.dL,A.c3)
w.eh()
v=w.b
u=v.c
v=v.a.c
t=g*0.8
s=B.bu(B.c9(A.J,v.gbc(v)+g*0.7,u+g*1.1),new B.aR(t,t))
t=$.W()
u=B.N()
u.r=i.gp(0)
d.aE(s,u)
t=new B.aO(t.r,A.ao,q,q,B.a([],y.v))
u=-g
v=s.d
r=v-1
t.F(new B.b5(u*0.3,r))
t.F(new B.ap(u*0.7,v+g*0.6))
t.F(new B.ap(g*0.2,r))
t.F(new B.bE())
r=B.N()
r.r=i.gp(0)
d.aQ(t,r)
r=w.b
t=r.c
r=r.a.c
w.a3(d,new B.u(-t/2,-r.gbc(r)/2))
x.restore()},
h0V(d,e,f,g){var x,w=A.k.D(Math.abs(Math.cos(g)),0.15,1),v=f*2,u=v*w,t=B.c9(e,v,u)
$.W()
x=B.N()
x.r=A.bH.gp(0)
d.hL(t,x)
d.hL(B.c9(e,v,u),D.yy(A.pJ,f*0.18))
if(w>0.5)D.qU(d,"$",e,f*1.2,A.pJ,9999)},
hU7(d,e,f,g){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=new B.ez()
k.dl(4)
for(x=e.a,w=f-g,v=e.b,u=d.a,t=f*3,s=v*0.025,r=v*0.012,q=0;q<18;++q){p=k.aj()
o=A.k.E(w*(40+k.aj()*60)+k.aj()*v,v)
J.bv(u.save())
u.translate(p*x,o)
u.rotate((t+q)*180/3.141592653589793,0,0)
p=B.c9(A.J,r,s)
n=C.ava[A.o.E(q,5)]
$.W()
m=new B.aq(A.W,A.V,A.Y,A.a_,A.X)
m.r=n.gp(0)
l=m.H()
u.drawRect(B.c_(p),l)
l.delete()
u.restore()}},
i2T(d,e,f,g){switch(A.o.E(f,11)){case 0:D.hTK(d,e,g)
break
case 1:D.hWG(d,e,g)
break
case 2:D.i0Z(d,e,g)
break
case 3:D.i1d(d,e,g)
break
case 4:D.i07(d,e,g)
break
case 5:D.hWm(d,e,g)
break
case 6:D.hTa(d,e,g)
break
case 7:D.i1W(d,e,g)
break
case 8:D.hVp(d,e,g)
break
case 9:D.hWK(d,e,g)
break
default:D.hVZ(d,e,g)}},
hTK(a2,a3,a4){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null,d=a3.a,a0=a3.b,a1=a0*0.94
for(x=a2.a,w=d*0.12,v=d*0.06,u=a0*0.06,t=y.v,s=0;s<6;++s){r=d*(0.04+s*0.17)
q=a0*(0.18+0.08*A.o.E(s,3))
p=a1-q
o=r+w
n=A.c.j(0.2)
m=$.W()
l=new B.aq(A.W,A.V,A.Y,A.a_,A.X)
l.r=n.gp(0)
k=l.H()
x.drawRect(B.c_(new B.a8(r,p,o,p+q)),k)
k.delete()
l=B.a([],t)
m=new B.aO(m.r,A.ao,e,e,l)
l.push(new B.b5(r-3,p))
l.push(new B.ap(r+v,p-u))
l.push(new B.ap(o+3,p))
l.push(new B.bE())
p=new B.aq(A.W,A.V,A.Y,A.a_,A.X)
p.r=A.c.j(0.3).gp(0)
k=p.H()
p=m.gbI().a.snapshot()
x.drawPath((m.e=new B.cB(p)).a,k)
k.delete()}w=A.w.j(0.18)
$.W()
v=B.N()
v.r=w.gp(0)
a2.aX(new B.a8(0,a1,0+d,a1+(a0-a1)),v)
j=Math.cos(a4*1.6)
i=Math.min(d*0.46,a0*0.95)
h=i*0.62
J.bv(x.save())
v=d*0.58
x.translate(v,a0*0.45)
a2.v6(0,Math.max(0.08,Math.abs(j)),1)
w=h*0.1
g=B.bu(B.c9(A.J,h,i),new B.aR(w,w))
u=B.N()
t=j>=0
u.saq(new B.a9(A.a3,A.a8,A.x,t?C.dlZ:C.dc7,e,e).av(0,new B.a8(g.a,g.b,g.c,g.d)))
a2.aE(g,u)
a2.aE(g,D.yy(A.d5,2))
if(t){u=-i
t=u*0.28
p=-h
o=p*0.05
n=h*0.22
m=B.N()
m.r=C.oP.gp(0)
a2.ae(new B.u(t,o),n,m)
n=B.bQ(new B.u(t,o),n)
o=B.N()
o.r=C.AF.gp(0)
a2.eV(n,3.141592653589793,3.141592653589793,!0,o)
for(u*=0.05,t=p*0.25,o=h*0.07,s=0;s<3;++s){n=t+s*h*0.16
n=B.bu(new B.a8(u,n,u+i*(0.42-s*0.06),n+o),A.hI)
m=new B.aq(A.W,A.V,A.Y,A.a_,A.X)
m.r=A.ds.gp(0)
k=m.H()
x.drawRRect(B.eA(n),k)
k.delete()}D.qU(a2,"COMMUNITY ID",new B.u(0,p*0.4),w,A.d5,i*0.8)}else D.qU(a2,"\u2605 NGMY \u2605",A.J,h*0.16,A.c,i*0.8)
x.restore()
w=a4>2.6
if(w){s=A.k.D((a4-2.6)/0.35,0,1)
J.bv(x.save())
x.translate(v,a0*0.52)
a2.jc(0,-0.25)
a2.bZ(0,2.2-1.2*A.ev.az(0,s))
f=B.c9(A.J,h*0.3,i*0.7)
a2.aE(B.bu(f,A.hs),D.yy(A.cT.j(s),3))
D.qU(a2,"\u2713 REGISTERED",A.J,h*0.13,A.cT.j(s),(f.c-f.a)*0.9)
x.restore()}x=a4*5
v=Math.sin(x)
x=Math.sin(x)
w=w&&a4<4
D.CV(a2,new B.u(d*0.2,a1),a0*0.7,a4,!1,Math.abs(x)*a0*0.015,0,A.cT,C.oP,w,(v+1)/2)
if(a4>3)D.hU7(a2,new B.as(d,a0*0.9),a4,3)},
hWG(a6,a7,a8){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=a7.a,a3=a7.b,a4=a3*0.94,a5=A.w.j(0.2)
$.W()
x=B.N()
x.r=a5.gp(0)
a6.aX(new B.a8(0,a4,0+a2,a4+(a3-a4)),x)
w=a2*0.62
v=a2*0.3
u=a3*0.62
x=a4-u
a5=w+v
t=B.N()
t.r=A.bm.gp(0)
a6.aX(new B.a8(w,x,a5,x+u),t)
for(t=a6.a,s=a8*1.5,r=v*0.2,q=u*0.1,p=0;p<4;++p)for(o=x+u*(0.1+p*0.17),n=o+q,m=0;m<3;++m){l=w+v*(0.12+m*0.3)
k=A.o.E(p+m+A.k.bk(s),3)===0?A.dQ:A.aM.j(0.6)
$.W()
j=new B.aq(A.W,A.V,A.Y,A.a_,A.X)
j.r=k.gp(0)
i=j.H()
t.drawRect(B.c_(new B.a8(l,o,l+r,n)),i)
i.delete()}s=w+v*0.38
r=u*0.16
q=a4-r
$.W()
o=B.N()
o.r=A.fW.gp(0)
a6.aX(new B.a8(s,q,s+v*0.24,q+r),o)
o=x-a3*0.09
r=a3*0.02
o=B.bu(new B.a8(w,o,a5,o+a3*0.08),new B.aR(r,r))
a5=B.N()
a5.r=A.aE.gp(0)
a6.aE(o,a5)
a5=a3*0.05
o=a3*0.06
D.qU(a6,"JOBS",new B.u(w+v/2,x-a5),o,A.c,9999)
h=A.k.D(a8/2.8,0,1)
x=a2*0.12
g=x+(w+v*0.3-x)*A.dA.az(0,h)
x=h<1
f=x?Math.abs(Math.sin(a8*12))*a3*0.02:0
s=h>=1
q=s?(Math.sin(a8*6)+1)/2:0
D.CV(a6,new B.u(g,a4),a3*0.6,a8,!1,f,2,A.b6,A.xA,s,q)
if(x){x=B.bu(B.c9(new B.u(g-a3*0.12,a4-a3*0.17-f),a3*0.075,a3*0.1),A.hI)
q=B.N()
q.r=A.fW.gp(0)
a6.aE(x,q)}if(s){x=a8-2.8
D.ag9(a6,new B.u(g+a5,a4-a3*0.78),"Hired! \ud83c\udf89",a3*0.07,x/0.4,A.c)
for(a5=x*0.8,x=a4-a3*0.5,s=a3*0.03,q=a8*8,e=0;e<6;++e){d=A.k.E(a5+e*0.17,1)
D.h0V(a6,new B.u(g+Math.sin(e*2.1)*a3*0.2,x-d*a3*0.25),s,q+e)}}a5=a2*0.04
x=a5+v
s=o+a3*0.3
r=B.bu(new B.a8(a5,o,x,s),new B.aR(r,r))
$.W()
q=B.N()
q.r=A.il.gp(0)
a6.aE(r,q)
for(x-=a5,r=a5+x*0.08,s-=o,q=x*0.84,n=s*0.24,a5+=x*0.14,x*=0.5,l=s*0.05,e=0;e<3;++e){k=(1-A.k.D((a8-e*0.5)/0.5,0,1))*a2*0.3
j=r+k
a0=e*0.3
a1=o+s*(0.08+a0)
a1=B.bu(new B.a8(j,a1,j+q,a1+n),A.hI)
j=new B.aq(A.W,A.V,A.Y,A.a_,A.X)
j.r=A.c.gp(0)
i=j.H()
t.drawRRect(B.eA(a1),i)
i.delete()
k=a5+k
a0=o+s*(0.14+a0)
a1=new B.aq(A.W,A.V,A.Y,A.a_,A.X)
a1.r=A.bK.gp(0)
i=a1.H()
t.drawRect(B.c_(new B.a8(k,a0,k+x,a0+l)),i)
i.delete()}},
i0Z(a1,a2,a3){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=a2.a,e=a2.b,d=e*0.94,a0=A.fW.j(0.6)
$.W()
x=B.N()
x.r=a0.gp(0)
a1.aX(new B.a8(0,d,0+f,d+(e-d)),x)
w=f*0.3
v=f*0.66
for(a0=v/12,x=e*0.14,u=a0+1,t=x+e*0.12,s=a1.a,r=0;r<12;++r){q=w+a0*r
p=new B.aq(A.W,A.V,A.Y,A.a_,A.X)
p.r=C.ayl[A.o.E(r,4)].gp(0)
o=p.H()
s.drawRect(B.c_(new B.a8(q,x,q+u,t)),o)
o.delete()}for(u=e*0.2,t=e*0.1,q=u+t,r=0;r<12;++r){p=w+a0*r
n=new B.aq(A.W,A.V,A.Y,A.a_,A.X)
n.r=C.ayl[A.o.E(r,4)].gp(0)
o=n.H()
s.drawArc.apply(s,[B.c_(new B.a8(p,u,p+a0,q)),0,180,!0,o])
o.delete()}a0=w+4
u=e*0.3
q=u+(d-u)
p=B.N()
p.r=A.fW.gp(0)
a1.aX(new B.a8(a0,u,a0+4,q),p)
p=w+v
a0=p-8
n=B.N()
n.r=A.fW.gp(0)
a1.aX(new B.a8(a0,u,a0+4,q),n)
n=e*0.68
q=n+e*0.26
a0=B.bu(new B.a8(w,n,p,q),A.iz)
u=B.N()
u.r=A.il.gp(0)
a1.aE(a0,u)
for(a0=p-w,u=a0/6,p=n+2,a0/=12,q=p+(q-n-4),r=0;r<6;++r){m=w+u*r
l=new B.aq(A.W,A.V,A.Y,A.a_,A.X)
l.r=((r&1)===0?A.bz:A.bH).j(0.9).gp(0)
o=l.H()
s.drawRect(B.c_(new B.a8(m,p,m+a0,q)),o)
o.delete()}a0=w+v*0.2
u=e*0.62
k=new B.u(a0,u)
q=e*0.17
p=e*0.03
m=B.bu(B.c9(k,e*0.11,q),new B.aR(p,p))
l=B.N()
l.r=A.cp.gp(0)
a1.aE(m,l)
l=-e
q=B.c9(k.ad(0,new B.u(0,l*0.05)),e*0.04,q)
m=B.N()
m.r=A.fl.gp(0)
a1.hL(q,m)
for(q=a3*0.8,l*=0.08,m=e*0.015,r=0;r<3;++r){j=A.k.E(q+r*0.33,1)
i=Math.sin(j*6+r)
h=j*e
g=new B.aq(A.W,A.V,A.Y,A.a_,A.X)
g.r=A.c.j(0.6*(1-j)).gp(0)
o=g.H()
s.drawCircle(a0+i*5,u+(l-h*0.14),m+h*0.02,o)
o.delete()}for(a0=w+v*0.5,q=e*0.018,r=0;r<5;++r){m=B.c9(new B.u(a0,u),x,e*(0.1+r*0.01))
l=new B.aq(A.W,A.V,A.Y,A.a_,A.X)
l.b=A.ae
l.c=q
l.r=A.bH.gp(0)
l.d=A.bQ
o=l.H()
s.drawArc.apply(s,[B.c_(m),(0.4+r*0.1)*57.29577951308232,108.8619810748564,!1,o])
o.delete()}for(a0=e*0.63,x=e*0.032,r=0;r<4;++r){u=A.o.E(r,2)
q=A.o.am(r,2)
m=(r&1)===0?A.cc:A.vm
l=new B.aq(A.W,A.V,A.Y,A.a_,A.X)
l.r=m.gp(0)
o=l.H()
s.drawCircle(w+v*(0.72+0.06*u)+r*e*0.02,a0+q*e*0.035,x,o)
o.delete()}D.CV(a1,new B.u(f*0.14,d),n,a3,!1,0,1,A.bH,E.aeP,!0,(Math.sin(a3*5)+1)/2)
for(a0=a3*0.45,x=f*0.16,u=e*0.45,s=e*0.06,r=0;r<5;++r){j=A.k.E(a0+r*0.2,1)
D.qU(a1,"\u2665",new B.u(x+Math.sin(j*5+r)*e*0.08+r*e*0.03,u-j*e*0.4),s,A.av.j(1-j),9999)}a0=w+v/2
x=e*0.08
p=B.bu(B.c9(new B.u(a0,x),t,v*0.7),new B.aR(p,p))
$.W()
t=B.N()
t.r=A.aw.gp(0)
a1.aE(p,t)
D.qU(a1,"NGMY STORE \xb7 African food",new B.u(a0,x),e*0.05,A.dQ,v*0.64)},
i1d(d,e,f){var x,w,v,u,t,s,r,q=e.a,p=e.b,o=p*0.94,n=A.w.j(0.2)
$.W()
x=B.N()
x.r=n.gp(0)
d.aX(new B.a8(0,o,0+q,o+(p-o)),x)
w=A.o.E(A.o.am(Date.now(),6000)*3+A.o.D(A.k.bk(f/2),0,2),14)
v=A.k.E(f,2)
u=v<1
x=p*0.68
n=u?(Math.sin(f*8)+1)/2:0
t=u?Math.abs(Math.sin(f*8))*p*0.01:0
D.CV(d,new B.u(q*0.25,o),x,f,!1,t,2,A.cT,C.oP,u,n)
n=u?0:(Math.sin(f*8)+1)/2
t=u?0:Math.abs(Math.sin(f*8))*p*0.01
D.CV(d,new B.u(q*0.75,o),x,f,!1,t,0,A.bj,C.adV,!u,n)
s=new D.fsw(p,q)
n=p*0.15
if(u){x=C.axp[w].a
D.ag9(d,new B.u(q*0.27,n),x,s.$1(x),v/0.25,A.oO)}else{x=C.axp[w].b
D.ag9(d,new B.u(q*0.73,n),x,s.$1(x),(v-1)/0.25,A.ez)}for(n=q*0.5,x=p*0.07,t=f*2,r=0;r<3;++r)D.qU(d,"\u2192",new B.u(n,p*(0.35+r*0.1)),x,A.c.j(0.3+0.5*A.k.E(t+r,1)),9999)},
i07(a1,a2,a3){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=a2.a,e=a2.b,d=e*0.94,a0=A.w.j(0.2)
$.W()
x=B.N()
x.r=a0.gp(0)
a1.aX(new B.a8(0,d,0+f,d+(e-d)),x)
x=f*0.3
w=B.c9(new B.u(f*0.6,e*0.45),e*0.7,Math.min(x,e*0.55))
a0=B.bu(w,A.iz)
v=B.N()
v.r=A.c.gp(0)
a1.aE(a0,v)
for(a0=w.d,v=w.b,u=a0-v,t=u*0.03,s=a1.a,r=w.a,q=w.c,p=q-r,o=r+p*0.1,n=0;n<9;++n){m=v+u*(0.1+n*0.095)
l=A.o.E(n,3)===2?0.5:0.8
k=new B.aq(A.W,A.V,A.Y,A.a_,A.X)
k.r=A.cs.gp(0)
j=k.H()
s.drawRect(B.c_(new B.a8(o,m,o+p*l,m+t)),j)
j.delete()}i=A.k.D(a3/3,0,1)
h=v+u*i
if(i<1){a0=r-8
u=h-2
p=a0+(p+16)
t=B.N()
t.r=A.b_.gp(0)
a1.aX(new B.a8(a0,u,p,u+4),t)
t=A.b_.j(0.18)
u=B.N()
u.r=t.gp(0)
a1.aX(new B.a8(a0,v,p,v+(h-v)),u)}else{n=A.k.D((a3-3)/0.4,0,1)
u=A.lL.az(0,n)
t=B.N()
t.r=A.bz.gp(0)
a1.ae(new B.u(q,v),e*0.08*u,t)
D.qU(a1,"PDF",new B.u(q,v),e*0.045*n,A.c,9999)
v=e*0.06
D.qU(a1,"\u2713 Saved",new B.u(w.gbO().a,a0+v),v,A.c.j(n),9999)}a0=a3*4
v=Math.sin(a0)
D.CV(a1,new B.u(f*0.2,d),e*0.66,a3,!0,Math.abs(Math.sin(a0))*e*0.01,0,A.cA,C.oP,!1,(v+1)/2)
g=B.c9(new B.u(x,e*0.3),e*0.18,e*0.1)
x=e*0.02
x=B.bu(g,new B.aR(x,x))
v=B.N()
v.r=A.aw.gp(0)
a1.aE(x,v)
v=e*0.015
v=B.bu(g.ct(-3),new B.aR(v,v))
x=A.b_.j(0.35+0.3*Math.sin(a3*6))
a0=B.N()
a0.r=x.gp(0)
a1.aE(v,a0)},
hWm(a6,a7,a8){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=a7.a,a3=a7.b,a4=a3*0.94,a5=A.w.j(0.2)
$.W()
x=B.N()
x.r=a5.gp(0)
a6.aX(new B.a8(0,a4,0+a2,a4+(a3-a4)),x)
w=B.c9(new B.u(a2*0.62,a3*0.47),a3*0.8,Math.min(a2*0.4,a3*0.75))
x=B.bu(w,A.qu)
a5=B.N()
a5.r=A.c.gp(0)
a6.aE(x,a5)
a5=w.a
x=w.c
v=x-a5
u=w.b
t=w.d-u
D.qU(a6,"INVOICE",new B.u(a5+v*0.3,u+t*0.09),t*0.07,A.d5,9999)
for(s=a6.a,r=v*0.08,q=a5+r,p=t*0.045,o=q+v*0.5,n=x-v*0.17,m=t*0.02,l=t*0.06,k=a8-0.5,j=0,i=0;i<3;++i){h=A.k.D((k-i*0.6)/0.4,0,1)
if(h<=0)continue
j+=C.awv[i].b
g=u+t*(0.24+i*0.14)
J.bv(s.save())
s.translate((1-h)*30,0)
f=A.cs.j(h)
$.W()
e=new B.aq(A.W,A.V,A.Y,A.a_,A.X)
e.r=f.gp(0)
d=e.H()
s.drawRect(B.c_(new B.a8(q,g,o,g+p)),d)
d.delete()
D.qU(a6,"$"+C.awv[i].b,new B.u(n,g+m),l,A.aw.j(h),9999)
s.restore()}p=u+t*0.7
a6.bF(new B.u(q,p),new B.u(x-r,p),D.yy(A.dr,1.4))
D.qU(a6,"TOTAL  $"+j,new B.u(w.gbO().a,u+t*0.78),t*0.075,A.aw,v*0.8)
x=a8>2.8
if(x){r=a8-2.8
i=A.k.D(r/0.3,0,1)
J.bv(s.save())
s.translate(w.gbO().a,u+t*0.55)
a6.jc(0,-0.3)
a6.bZ(0,2-A.ev.az(0,i))
a6.aE(B.bu(B.c9(A.J,t*0.17,v*0.6),A.hs),D.yy(A.cT.j(i),3.5))
D.qU(a6,"PAID",A.J,t*0.11,A.cT.j(i),9999)
s.restore()
for(v=r*0.7,a5-=a3*0.05,u=a3*0.7,t=a3*0.03,s=a8*8,a0=0;a0<6;++a0){a1=A.k.E(v+a0*0.17,1)
D.h0V(a6,new B.u(a5+Math.sin(a0*2)*a3*0.1,u-a1*a3*0.5),t,s+a0)}}a5=x?(Math.sin(a8*6)+1)/2:0
D.CV(a6,new B.u(a2*0.2,a4),a3*0.66,a8,!0,0,1,A.bD,A.xA,x,a5)},
hsr(a9,b0,b1,b2,b3,b4){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=null,a4=A.o.E(b2,6),a5=C.cIs[a4],a6=a4<2,a7=a6?A.bN:C.AF,a8=a9.a
J.bv(a8.save())
a8.translate(b0.a,b0.b)
if(b4>0){x=b1*1.5
$.W()
w=B.N()
w.saq(new B.bS(A.A,0.5,A.x,a3,0,B.a([A.dQ.j(0.55*b4),A.K],y.O),a3,a3).av(0,B.bQ(A.J,x)))
a9.ae(A.J,x,w)}x=b1*0.06
w=A.w.j(0.25)
v=$.W()
u=B.N()
u.r=w.gp(0)
a9.ae(new B.u(0,x),b1*1.1,u)
u=B.N()
u.r=C.fq.gp(0)
a9.ae(A.J,b1*1.08,u)
J.bv(a8.save())
u=y.v
w=new B.aO(v.r,A.ao,a3,a3,B.a([],u))
w.F(new B.jS(B.bQ(A.J,b1)))
a9.pE(0,w)
w=B.bQ(A.J,b1)
t=C.d_S[a4]
s=B.N()
s.r=t.gp(0)
a9.aX(w,s)
s=B.c9(new B.u(0,b1),b1*1.05,b1*1.8)
w=C.di3[a4]
t=B.N()
t.r=w.gp(0)
a9.hL(s,t)
t=b1*0.42
s=b1*0.3
w=B.c9(new B.u(0,t),b1*0.34,s)
r=B.ar(a5,A.w,0.15)
r.toString
q=B.N()
q.r=r.gp(0)
a9.aX(w,q)
q=-b1
w=q*0.08
p=new B.u(0,w)
r=a4===0
if(r){o=B.N()
o.r=a7.gp(0)
a9.ae(new B.u(0,q*0.7),b1*0.22,o)}o=a4===4
if(o)for(n=q*0.42,m=b1*0.21,l=0;l<2;++l){k=C.jw[l]
j=new B.aq(A.W,A.V,A.Y,A.a_,A.X)
j.r=a7.gp(0)
i=j.H()
a8.drawCircle(k*b1*0.42,n,m,i)
i.delete()}n=a4===2
if(n||a4===5||a4===3){m=p.ad(0,new B.u(0,q*0.03))
j=B.N()
j.r=a7.gp(0)
a9.ae(m,b1*0.46,j)}m=B.N()
m.r=a5.gp(0)
a9.ae(p,t,m)
if(r||o){t=B.bQ(p,b1*0.43)
r=B.N()
r.r=a7.gp(0)
a9.eV(t,3.2986722862692828,2.827433388230814,!0,r)}if(a4===3||a4===5){t=B.bQ(p,b1*0.44)
r=B.N()
r.r=a7.gp(0)
a9.eV(t,3.141592653589793,3.141592653589793,!0,r)}if(a4===1)for(t=w+q*0.02,r=b1*0.1,l=0;l<2;++l){k=C.jw[l]
o=new B.aq(A.W,A.V,A.Y,A.a_,A.X)
o.r=a7.gp(0)
i=o.H()
a8.drawCircle(0+k*b1*0.4,t,r,i)
i.delete()}if(n){h=new B.aO(v.r,A.ao,a3,a3,B.a([],u))
v=q*0.46
u=w-b1*0.05
h.F(new B.b5(v,u))
h.F(new B.cQ(0,w-b1*0.78,b1*0.46,u))
h.F(new B.cQ(0,w-b1*0.28,v,u))
h.F(new B.bE())
u=B.N()
u.r=A.aE.gp(0)
a9.aQ(h,u)
for(v=b1*0.035,u=q*0.22,t=w-s,g=0;g<4;++g){r=g===1||g===2?x:0
o=new B.aq(A.W,A.V,A.Y,A.a_,A.X)
o.r=A.ey.gp(0)
i=o.H()
a8.drawCircle(u+g*b1*0.15,t-r,v,i)
i.delete()}}f=A.k.E(b3*0.8+a4,3)>2.85
for(v=w+b1*0.12,u=b1*0.055,t=b1*0.015,r=q*0.015,o=b1*0.016,n=q*0.03,w+=n,m=q*0.05,j=w+0,e=b1*0.05,d=b1*0.03,l=0;l<2;++l){a0=C.jw[l]*b1
a1=0+a0*0.17
if(f){a2=new B.aq(A.W,A.V,A.Y,A.a_,A.X)
a2.b=A.ae
a2.c=d
a2.r=A.bk.gp(0)
a2.d=A.bQ
i=a2.H()
a8.drawLine.apply(a8,[a1+m,j,a1+e,j,i])
i.delete()}else{a2=new B.aq(A.W,A.V,A.Y,A.a_,A.X)
a2.r=A.bk.gp(0)
i=a2.H()
a8.drawCircle(a1,w,u,i)
i.delete()
a2=new B.aq(A.W,A.V,A.Y,A.a_,A.X)
a2.r=A.c.gp(0)
i=a2.H()
a8.drawCircle(a1+t,w+r,o,i)
i.delete()}a1=new B.aq(A.W,A.V,A.Y,A.a_,A.X)
a1.r=A.i5.j(0.5).gp(0)
i=a1.H()
a8.drawCircle(0+a0*0.27,v,x,i)
i.delete()}a9.eV(B.c9(p.ad(0,new B.u(0,b1*0.1)),b1*0.2,s),0.2,2.741592653589793,!1,D.yy(C.be7,b1*0.035))
if(a6){for(a6=b1*0.115,l=0;l<2;++l){k=C.jw[l]
x=new B.aq(A.W,A.V,A.Y,A.a_,A.X)
x.b=A.ae
x.c=d
x.r=A.e2.gp(0)
x.d=A.bQ
i=x.H()
a8.drawCircle(0+k*b1*0.17,w,a6,i)
i.delete()}a9.bF(p.ad(0,new B.u(q*0.055,n)),p.ad(0,new B.u(u,n)),D.yy(A.e2,b1*0.025))}a8.restore()
a9.ae(A.J,b1*1.04,D.yy(E.EB,b1*0.07))
a8.restore()},
hss(d,e,f,g){var x,w=B.c9(e,f*0.62,f*2.5),v=f*0.31,u=B.bu(w,new B.aR(v,v))
$.W()
x=B.N()
x.r=A.c.gp(0)
d.aE(u,x)
d.aE(B.bu(w,new B.aR(v,v)),D.yy(A.bD,f*0.05))
D.qU(d,"\u2665 "+g,e,f*0.4,A.tj,f*2.2)},
yL(d,e,f,g,a0,a1,a2){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
if(a2<=0)return
x=new D.fLl(e,f,g)
w=A.k.dh(22*A.k.D(a2,0,1))
for(v=a1-a0,u=d.a,t=e,s=1;s<=w;++s,t=q){r=Math.min(s/22,A.k.D(a2,0,1))
q=x.$1(r)
$.W()
p=new B.aq(A.W,A.V,A.Y,A.a_,A.X)
p.b=A.ae
o=p.c=a0+v*r
p.r=A.xA.gp(0)
p.d=A.bQ
n=p.H()
p=t.a
m=t.b
l=q.a
k=q.b
u.drawLine.apply(u,[p,m,l,k,n])
n.delete()
j=-o*0.18
i=B.ar(A.xA,A.c,0.18)
i.toString
h=new B.aq(A.W,A.V,A.Y,A.a_,A.X)
h.b=A.ae
h.c=o*0.28
h.r=i.gp(0)
h.d=A.bQ
n=h.H()
u.drawLine.apply(u,[p+j,m+0,l+j,k+0,n])
n.delete()}},
icS(d,e,f,g){var x,w,v,u,t,s
for(x=g*0.45,w=e.a,v=g*2,u=e.b,t=0;t<7;++t){s=A.k.E(x+t/7,1)
D.qU(d,"\u2665",new B.u(w+Math.sin(t*2.3+v)*f*0.12+(t-3.5)*f*0.03,u-s*f*0.45),f*(0.04+0.02*A.o.E(t,3)),B.ar(A.bD,A.i5,A.o.E(t,2)).j((1-s)*0.9),9999)}},
hTa(b4,b5,b6){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=null,a8=b5.a,a9=b5.b,b0=a9*0.94,b1=A.dX.j(0.7),b2=$.W(),b3=B.N()
b3.r=b1.gp(0)
b4.aX(new B.a8(0,b0,0+a8,b0+(a9-b0)),b3)
x=new D.fff(b6)
w=new D.ffc()
v=Math.min(a8*0.34,a9*0.62)
b3=a8*0.64
b1=v*0.2
u=b0-b1
t=new B.u(b3,u)
s=v*0.5
r=v*0.08
r=B.bu(B.c9(t,s,v*2.15),new B.aR(r,r))
q=B.N()
q.r=A.hA.gp(0)
b4.aE(r,q)
b2=b2.r
q=y.v
p=new B.aO(b2,A.ao,a7,a7,B.a([],q))
r=u-b1
p.F(new B.b5(b3,r))
o=b3-s
n=v*0.3
m=u-n
l=b3-v
k=v*0.16
j=u-k
p.F(new B.cQ(o,m,l,j))
i=u+v*0.14
p.F(new B.ap(l,i))
l=u+v*0.02
k=u+k
p.F(new B.cQ(o,l,b3,k))
p.F(new B.bE())
o=B.N()
o.r=A.fV.gp(0)
b4.aQ(p,o)
h=new B.aO(b2,A.ao,a7,a7,B.a([],q))
h.F(new B.b5(b3,r))
s=b3+s
r=b3+v
h.F(new B.cQ(s,m,r,j))
h.F(new B.ap(r,i))
h.F(new B.cQ(s,l,b3,k))
h.F(new B.bE())
k=B.N()
k.r=A.hO.gp(0)
b4.aQ(h,k)
for(b2=v*0.85,s=b3-b2,r=u-v*0.06,q=b3-b1,u-=v*0.1,o=b4.a,b1=b3+b1,b2=b3+b2,g=0;g<3;++g){b3=g*v*0.06
m=r+b3
b3=u+b3
l=new B.aq(A.W,A.V,A.Y,A.a_,A.X)
l.b=A.ae
l.c=1.4
l.r=C.agL.gp(0)
l.d=A.bQ
f=l.H()
o.drawLine.apply(o,[s,m,q,b3,f])
f.delete()
l=new B.aq(A.W,A.V,A.Y,A.a_,A.X)
l.b=A.ae
l.c=1.4
l.r=C.agL.gp(0)
l.d=A.bQ
f=l.H()
o.drawLine.apply(o,[b1,b3,b2,m,f])
f.delete()}e=w.$1(x.$2(0.2,1))
b1=t.aB(0,new B.u(0,n))
b2=b6*4
b3=Math.sin(b2)
u=B.N()
u.saq(new B.bS(A.A,0.5,A.x,a7,0,B.a([A.dQ.j(0.6*e),A.K],y.O),a7,a7).av(0,B.bQ(t.aB(0,new B.u(0,n)),v*0.7)))
b4.ae(b1,v*(0.5+0.1*b3)*e,u)
d=t.aB(0,new B.u(0,v*0.12))
a0=new D.ffe(t,a9,d)
a1=w.$1(x.$2(0.5,1.1))
a2=w.$1(x.$2(1.3,1.2))
for(b1=b6*2,a3=0;a3<4;++a3){b3=C.cEB[a3]
a4=b3.a
u=a0.$2(a4,b3.b)
s=Math.sin(b1+a4*9)
r=new B.aq(A.W,A.V,A.Y,A.a_,A.X)
r.r=A.cT.j(0.9).gp(0)
f=r.H()
o.drawCircle(u.a,u.b,a9*b3.c*a2+s*1.2,f)
f.delete()}D.yL(b4,d,d.ad(0,new B.u(0,-a9*0.08)),a0.$2(0,0.22),a9*0.05,a9*0.035,a1)
a5=w.$1(x.$2(1.2,0.8))
b1=a9*0.032
b3=a9*0.02
D.yL(b4,a0.$2(0,0.22),a0.$2(-0.06,0.28),a0.$2(-0.2,0.36),b1,b3,a5)
D.yL(b4,a0.$2(0,0.22),a0.$2(0.06,0.28),a0.$2(0.2,0.36),b1,b3,a5)
a6=w.$1(x.$2(2.4,0.7))
D.yL(b4,a0.$2(0,0.22),a0.$2(0,0.4),a0.$2(0,0.57),a9*0.03,a9*0.016,a6)
b3=new D.ffd(x,b4,b6)
b1=a9*0.088
b3.$5(2,"Mama",a0.$2(-0.2,0.36),b1,1.9)
b3.$5(3,"Baba",a0.$2(0.2,0.36),b1,2.4)
b3.$5(4,"Dada",a0.$2(0,0.57),a9*0.08,3)
if(b6>3.6)D.icS(b4,a0.$2(0,0.36),a9,b6-3.6)
b1=a8*0.2
b3=Math.sin(b2)
D.CV(b4,new B.u(b1,b0),a9*0.66,b6,!1,Math.abs(Math.sin(b2))*a9*0.01,2,A.aF,C.oP,b6>3,(b3+1)/2)
D.ag9(b4,new B.u(b1,a9*0.1),"My tree!",a9*0.06,x.$2(3,0.4),A.c)},
i1W(d,e,f){var x,w,v,u,t,s,r,q,p,o,n=e.a,m=e.b,l=m*0.94,k=A.w.j(0.2)
$.W()
x=B.N()
x.r=k.gp(0)
d.aX(new B.a8(0,l,0+n,l+(m-l)),x)
w=A.k.bk(A.k.D(f/5.5,0,1)*9)+1
for(v=n*0.62,k=l-m*0.03,x=m*0.26,u=m*0.07,t=d.a,s=0;s<w;++s){r=k-s*m*0.055
q=B.c9(new B.u(v,r),u,x)
p=new B.aq(A.W,A.V,A.Y,A.a_,A.X)
p.r=A.bH.gp(0)
o=p.H()
t.drawOval(B.c_(q),o)
o.delete()
r=B.c9(new B.u(v,r),u,x)
q=new B.aq(A.W,A.V,A.Y,A.a_,A.X)
q.b=A.ae
q.c=2
q.r=A.pJ.gp(0)
q.d=A.bQ
o=q.H()
t.drawOval(B.c_(r),o)
o.delete()}k=m*0.1
D.h0V(d,new B.u(v,k+A.k.E(f*1.6,1)*(l-u-w*m*0.055-k)),m*0.05,f*8)
k=m*0.08
D.qU(d,"$"+w*25,new B.u(v,k),k,A.dQ,9999)
k=f*5
u=Math.sin(k)
D.CV(d,new B.u(n*0.25,l),m*0.66,f,!1,Math.abs(Math.sin(k))*m*0.012,1,A.cA,C.oP,!0,(u+1)/2)},
hVp(d,a0,a1){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=a0.a,g=a0.b,f=g*0.94,e=A.w.j(0.2)
$.W()
x=B.N()
x.r=e.gp(0)
d.aX(new B.a8(0,f,0+h,f+(g-f)),x)
for(e=d.a,x=g*0.012,w=g*0.55,v=a1*4,u=a1*2,t=g*0.15,s=g*0.03,r=0;r<3;r=n){q=Math.sin(v+r*1.7)
J.bv(e.save())
e.translate(h*(0.5+0.14*r),w-Math.abs(q)*g*0.3)
e.rotate((u+r)*180/3.141592653589793,0,0)
q=B.bu(B.c9(A.J,t,t),new B.aR(s,s))
p=new B.aq(A.W,A.V,A.Y,A.a_,A.X)
p.r=A.c.gp(0)
o=p.H()
e.drawRRect(B.eA(q),o)
o.delete()
n=r+1
q=n*2
p=r===0
m=0
for(;;){if(!(m<q-(p?1:0)))break
l=m*2.1
k=Math.cos(l)
l=Math.sin(l)
j=new B.aq(A.W,A.V,A.Y,A.a_,A.X)
j.r=A.bk.gp(0)
o=j.H()
e.drawCircle(k*g*0.04,l*g*0.04,x,o)
o.delete();++m}e.restore()}for(e=a1*0.6,w=g*0.25,v=g*0.06,r=0;r<5;++r){i=A.k.E(e+r*0.2,1)
D.qU(d,"\u2605",new B.u(h*(0.45+r*0.1),w-i*g*0.2),v,A.dQ.j(1-i),9999)}e=h*0.22
w=a1*6
v=Math.sin(w)
D.CV(d,new B.u(e,f),g*0.66,a1,!0,Math.abs(Math.sin(w))*g*0.015,0,A.cc,C.oP,!0,(v+1)/2)
v=f-g*0.28
s=B.bu(B.c9(new B.u(e,v),g*0.07,g*0.16),new B.aR(s,s))
$.W()
w=B.N()
w.r=A.cp.gp(0)
d.aE(s,w)
w=B.N()
w.r=A.av.gp(0)
d.ae(new B.u(e+g*0.05,v),x,w)},
hWK(d,e,a0){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=e.a,j=e.b,i=j*0.94,h=A.w.j(0.2),g=$.W(),f=B.N()
f.r=h.gp(0)
d.aX(new B.a8(0,i,0+k,i+(j-i)),f)
f=k*0.42
h=j*0.18
x=j*0.08
w=B.bu(new B.a8(f,h,f+k*0.5,h+j*0.5),new B.aR(x,x))
v=new B.aO(g.r,A.ao,null,null,B.a([],y.v))
v.F(new B.iN(w))
d.aQ(v,D.yy(A.c.j(0.5),4))
u=new B.SA(new B.vH(B.xg(v),!1,B.a([],y.L))).gI(0)
for(h=a0*0.18,g=u.a,x=u.b,t=g.e,s=j*0.016,r=d.a,q=0;q<10;++q){p=A.k.E(h+q/10,1)
g.jC()
o=t[x].b
o===$&&B.c()
o=o.a.length()
g.jC()
o=t[x].MU(p*o).a
p=new B.aq(A.W,A.V,A.Y,A.a_,A.X)
p.r=A.dQ.gp(0)
n=p.H()
r.drawCircle(o.a,o.b,s,n)
n.delete()}m=a0>1.5
h=j*0.43
l=new B.u(k*0.92,h)
if(m){g=A.dQ.j(0.4+0.2*Math.sin(a0*8))
x=B.N()
x.r=g.gp(0)
x.z=A.zi
d.ae(l,j*0.2,x)}g=j*0.07
x=m?A.oO:A.bK
t=B.N()
t.r=x.gp(0)
d.ae(l,g,t)
h=B.bu(B.c9(new B.u(f,h),j*0.2,j*0.1),A.iz)
t=B.N()
t.r=A.cT.gp(0)
d.aE(h,t)
D.qU(d,"+",new B.u(f,j*0.36),g,A.c,9999)
h=m?(Math.sin(a0*6)+1)/2:0
f=m?Math.abs(Math.sin(a0*6))*j*0.012:0
D.CV(d,new B.u(k*0.2,i),j*0.68,a0,!1,f,0,A.bT,C.oP,m,h)
if(m)D.ag9(d,new B.u(k*0.24,j*0.16),"It works!",g,(a0-1.5)/0.4,A.c)},
hVZ(d,a0,a1){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=a0.a,g=a0.b,f=g*0.94,e=A.w.j(0.2)
$.W()
x=B.N()
x.r=e.gp(0)
d.aX(new B.a8(0,f,0+h,f+(g-f)),x)
w=A.k.D((a1-0.3)/0.4,0,1)
v=A.k.D((a1-1.8)/0.4,0,1)
x=g*0.2
e=g*0.065
D.ag9(d,new B.u(h*0.3,x),"How do I enroll?",e,w,A.oO)
if(a1>1&&a1<1.8)for(u=h*0.72,t=g*0.38,s=a1*9,r=g*0.015,q=d.a,p=0;p<3;++p){o=Math.sin(s+p)
n=new B.aq(A.W,A.V,A.Y,A.a_,A.X)
n.r=A.c.gp(0)
m=n.H()
q.drawCircle(u+p*g*0.05,t-Math.abs(o)*g*0.02,r,m)
m.delete()}D.ag9(d,new B.u(h*0.7,g*0.38),"Tap Civic Registry!",e,v,A.ez)
D.CV(d,new B.u(h*0.2,f),g*0.62,a1,!1,0,2,A.av,C.oP,a1<1,0)
l=h*0.78
k=f-g*0.28
e=g*0.04
x=B.bu(B.c9(new B.u(l,k),g*0.22,x),new B.aR(e,e))
u=B.N()
u.r=A.aL.gp(0)
d.aE(x,u)
u=g*0.18
x=k-u
e=B.bu(B.c9(new B.u(l,x),g*0.14,u),new B.aR(e,e))
u=B.N()
u.r=A.cs.gp(0)
d.aE(e,u)
for(e=d.a,u=a1*1.1,t=g*0.02,j=0;j<2;++j){i=C.jw[j]
s=A.k.E(u,1)>0.08?A.b7:A.f3
r=new B.aq(A.W,A.V,A.Y,A.a_,A.X)
r.r=s.gp(0)
m=r.H()
e.drawCircle(l+i*g*0.04,x,t,m)
m.delete()}d.bF(new B.u(l,k-g*0.25),new B.u(l,k-g*0.3),D.yy(A.ad,3))
e=B.N()
e.r=A.av.gp(0)
d.ae(new B.u(l,k-g*0.31),g*0.015,e)},
fsC:function fsC(d,e,f){this.a=d
this.b=e
this.c=f},
fsw:function fsw(d,e){this.a=d
this.b=e},
fLl:function fLl(d,e,f){this.a=d
this.b=e
this.c=f},
fff:function fff(d){this.a=d},
ffc:function ffc(){},
ffe:function ffe(d,e,f){this.a=d
this.b=e
this.c=f},
ffd:function ffd(d,e,f){this.a=d
this.b=e
this.c=f},
aNU(d,e,f,g,h,i,j,k){var x=new D.fjU(e,h,i,k),w=x.$1(g),v=w.b.c
if(v>j&&v>0)w=x.$1(Math.max(2,g*j/v))
x=w.b
v=x.c
x=x.a.c
w.a3(d,f.aB(0,new B.u(v/2,x.gbc(x)/2)))},
Lg(d,e,f,a0){var x,w,v,u,t,s,r,q,p,o,n,m=A.o.E(a0==null?A.k.bk(f/6):a0,11),l=A.k.E(f,6),k=C.d6c[m],j=e.a,i=e.b,h=0+j,g=0+i
$.W()
x=B.N()
x.saq(new B.a9(A.az,A.aC,A.x,B.a([k.c,k.d],y.O),null,null).av(0,new B.a8(0,0,h,g)))
d.aX(new B.a8(0,0,h,g),x)
w=i*(j>=i?0.7:0.6)
g=d.a
J.bv(g.save())
g.clipRect(B.c_(new B.a8(0,0,h,0+w)),$.na()[1],!0)
D.i2T(d,new B.as(j,w),m,l)
g.restore()
v=i-w
x=A.w.j(0.3)
u=B.N()
u.r=x.gp(0)
d.aX(new B.a8(0,w,h,w+v),u)
t=A.cu.az(0,A.k.D((l-0.2)/0.5,0,1))
J.bv(g.save())
g.translate((1-t)*j*0.25,0)
u=j/2
h=j*0.94
D.aNU(d,k.a,new B.u(u,w+v*0.3),v*0.36,A.c.j(t),!0,h,0)
D.aNU(d,k.b,new B.u(u,w+v*0.64),v*0.2,A.c.j(0.92*t),!1,h,0)
g.restore()
for(h=i*0.965,x=i*0.009,s=i*0.004,r=0;r<11;++r){q=r===m
p=q?s:0
o=new B.aq(A.W,A.V,A.Y,A.a_,A.X)
o.r=A.c.j(q?0.95:0.35).gp(0)
n=o.H()
g.drawCircle(u+(r-5)*i*0.035,h,x+p,n)
n.delete()}h=j-i*0.07
g=i*0.06
D.aNU(d,"AD",new B.u(h,g),i*0.045,A.c.j(0.85),!0,9999,1)
x=i*0.02
x=B.bu(B.c9(new B.u(h,g),i*0.065,i*0.1),new B.aR(x,x))
g=B.N()
g.b=A.ae
g.c=1
g.r=A.ad.gp(0)
g.d=A.bQ
d.aE(x,g)},
Rs(d,e,f,g){var x,w=d.a
J.bv(w.save())
w.clipRect(B.c_(new B.a8(0,0,0+e.a,0+e.b)),$.na()[1],!0)
x=C.kd[A.o.E(f,8)].e
if(x===-2)D.hTj(d,e,g)
else if(x===-1)D.Lg(d,e,g,null)
else D.Lg(d,e,g,x)
w.restore()},
hTj(d,a0,a1){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=a0.a,h=a0.b,g=new B.T(Date.now(),0,!1),f=0+i,e=0+h
$.W()
x=B.N()
x.saq(C.bXv.av(0,new B.a8(0,0,f,e)))
d.aX(new B.a8(0,0,f,e),x)
x=B.N()
x.r=A.bz.gp(0)
d.aX(new B.a8(0,0,f,0+h*0.15),x)
D.aNU(d,A.p8[B.bH(g)-1]+" "+B.bA(g),new B.u(i/2,h*0.075),h*0.08,A.c,!0,i*0.9,0)
w=i/7
for(f=h*0.21,e=h*0.05,v=0;v<7;++v)D.aNU(d,C.dkL[v],new B.u(w*(v+0.5),f),e,A.aA,!0,9999,0)
u=B.c1(B.bA(g),B.bH(g),1,0,0,0,0,0)
t=B.bV(B.c1(B.bA(g),B.bH(g)+1,0,0,0,0,0,0))
s=B.mB(u)-1
r=h*0.74/A.k.dh((s+t)/7)
for(f=h*0.26,e=a1*3,x=d.a,q=1;q<=t;++q){p=s+q-1
o=w*(A.o.E(p,7)+0.5)
n=f+r*(A.o.am(p,7)+0.5)
if(q===B.bV(g)){m=Math.min(w,r)
l=A.aM.j(0.5+0.2*Math.sin(e))
$.W()
k=new B.aq(A.W,A.V,A.Y,A.a_,A.X)
k.r=l.gp(0)
j=k.H()
x.drawCircle(o,n,m*0.42,j)
j.delete()}m=Math.min(w,r)
l=q===B.bV(g)?A.c:A.ad
D.aNU(d,""+q,new B.u(o,n),m*0.42,l,!0,9999,0)}},
fjU:function fjU(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
wt:function wt(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
vW:function vW(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
h5x(d,e,f,g,h,a0){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i=d.a
J.bv(i.save())
x=e.a
w=e.b
v=0+x
u=0+w
i.clipRect(B.c_(new B.a8(0,0,v,u)),$.na()[1],!0)
if(h<3){$.W()
t=B.N()
t.r=C.b9g.gp(0)
d.aX(new B.a8(0,0,v,u),t)
if(h<0.5)u=h/0.5
else u=h>2.4?(3-h)/0.6:1
s=A.k.D(u,0,1)
u=e.ee(A.J)
t=e.gdt()
r=B.N()
r.saq(new B.bS(A.A,0.5,A.x,j,0,B.a([A.aM.j(0.35*s),A.K],y.O),j,j).av(0,B.bQ(e.ee(A.J),e.gdt()*0.5)))
d.ae(u,t*0.5,r)
D.Go(d,"NGMY",new B.u(0,w*0.36),w*0.2,A.c.j(s),A.L,w*0.03,x)
D.Go(d,"T V",new B.u(0,w*0.6),w*0.08,A.aM.j(s),A.L,w*0.05,x)
r=x*0.3
t=w*0.78
u=B.N()
u.r=A.aM.j(s).gp(0)
d.aX(new B.a8(r,t,r+x*0.4*(h/3),t+3),u)}else if(a0>=0)D.Rs(d,e,a0,g)
else{q=A.k.D((h-3)/0.5,0,1)
p=A.o.E(f,10)
switch(p){case 0:D.i1w(d,e,g)
break
case 1:D.hTW(d,e,g)
break
case 2:D.i0P(d,e,g)
break
case 3:D.hYD(d,e,g)
break
case 4:D.hZV(d,e,g)
break
case 5:D.i0Q(d,e,g)
break
case 6:D.hVf(d,e,g)
break
case 7:D.i1v(d,e,g)
break
case 8:D.i_H(d,e,g)
break
default:D.hVq(d,e,g)}t=x-w*0.34
r=w*0.04
o=w*0.03
n=B.bu(new B.a8(t,r,t+w*0.3,r+w*0.1),new B.aR(o,o))
$.W()
o=B.N()
o.r=A.w.j(0.55).gp(0)
d.aE(n,o)
D.Go(d,"NGMY",new B.u(n.a+w*0.025,n.b+w*0.012),w*0.07,A.c,A.bi,1,j)
o=w*0.86
t=B.N()
t.r=A.w.j(0.6).gp(0)
d.aX(new B.a8(0,o,v,o+w*0.14),t)
D.Go(d,"CH "+(f+1)+"  \xb7  "+C.Qm[p].a,new B.u(r,w*0.885),w*0.075,A.c,A.bi,0,x-w*0.08)
if(q<1){t=B.N()
t.r=A.c.j(0.6*(1-q)).gp(0)
d.aX(new B.a8(0,0,v,u),t)}}$.W()
m=B.N()
m.r=A.w.j(0.07).gp(0)
for(l=0;l<w;l+=3){k=m.H()
i.drawRect(B.c_(new B.a8(0,l,v,l+1)),k)
k.delete()}v=new B.aO($.W().r,A.ao,j,j,B.a([],y.v))
v.F(new B.b5(0,0))
v.F(new B.ap(x*0.45,0))
v.F(new B.ap(0,w*0.5))
v.F(new B.bE())
w=B.N()
w.r=A.c.j(0.04).gp(0)
d.aQ(v,w)
i.restore()},
Go(d,e,f,g,h,i,j,k){var x=null,w=B.fN(x,x,1,x,B.cX(x,x,x,x,x,x,x,x,x,B.l(x,x,h,x,x,x,x,x,x,x,x,g,x,x,A.u,x,x,!0,x,j,x,x,x,x,x,x),e),i,A.c4,x,A.dL,A.c3),v=k==null
w.uD(v?9999:k)
w.a3(d,f.ad(0,new B.u(i===A.L&&!v?(k-w.b.c)/2:0,0)))},
aNP(d,e,f,g,h,i,j){var x=new D.fhw(e,h,i,j),w=x.$1(g),v=w.b.c,u=f.c-f.a
if(v>u&&v>0)w=x.$1(g*u/v)
x=f.gbO()
v=w.b
u=v.c
v=v.a.c
w.a3(d,x.aB(0,new B.u(u/2,v.gbc(v)/2)))},
i1w(d5,d6,d7){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5=null,c6=d6.a,c7=d6.b,c8=A.k.E(d7,14),c9=new D.fsT(c8),d0=new D.fsP(),d1=0+c6,d2=0+c7,d3=$.W(),d4=B.N()
d4.saq(C.bYD.av(0,new B.a8(0,0,d1,d2)))
d5.aX(new B.a8(0,0,d1,d2),d4)
x=c6*0.34
w=new D.fsS(x,c7)
v=w.$2(0,0.5)
d4=c7*0.75
u=B.N()
u.saq(new B.bS(A.A,0.5,A.x,c5,0,B.a([A.bL.j(0.55),A.K],y.O),c5,c5).av(0,B.bQ(v,d4)))
d5.ae(v,d4,u)
t=new B.ez()
t.dl(11)
for(d4=d7*2,u=d5.a,s=0;s<26;++s){r=t.aj()
q=t.aj()
p=t.aj()
o=new B.aq(A.W,A.V,A.Y,A.a_,A.X)
o.r=A.c.j(0.35+0.4*Math.sin(d4+s)).gp(0)
n=o.H()
u.drawCircle(r*c6,q*c7*0.45,0.6+p*1.1,n)
n.delete()}for(r=y.v,m=0;m<2;++m){q=B.a([],r)
l=new B.aO(d3.r,A.ao,c5,c5,q)
q.push(new B.b5(0,c7))
for(d3=m*2,p=m===0,k=0;k<=c6;k+=6){o=p?0.78:0.82
o=new B.ap(k,c7*o+Math.sin(k/(p?70:50)+d3)*c7*0.02)
q.push(o)
j=l.f
if(j!=null)o.bB(j)
o=l.e
if(o!=null)o.a.delete()
l.e=null}d3=new B.ap(c6,c7)
q.push(d3)
q=l.f
if(q!=null)d3.bB(q)
d3=l.e
if(d3!=null)d3.a.delete()
l.e=null
d3=$.W()
q=new B.aq(A.W,A.V,A.Y,A.a_,A.X)
q.r=(p?C.Wr:C.bk_).gp(0)
n=q.H()
q=l.e
u.drawPath((q==null?l.e=new B.cB(l.gbI().a.snapshot()):q).a,n)
n.delete()}i=w.$2(0,0.81)
h=d0.$1(c9.$2(0.2,1.6))
g=d0.$1(c9.$2(2.4,2.6))
for(d3=d7*1.4,f=0;f<8;++f){r=C.axq[f]
e=r.a
d=r.b
a0=Math.sin(d3+e*7)*c7*0.006
q=w.$2(e,d)
p=q.a
q=q.b
r=c7*r.c
o=new B.aq(A.W,A.V,A.Y,A.a_,A.X)
o.r=A.h7.gp(0)
n=o.H()
u.drawCircle(p+a0,q+0,r*g,n)
n.delete()
q=w.$2(e,d-0.015)
p=q.a
q=q.b
o=new B.aq(A.W,A.V,A.Y,A.a_,A.X)
o.r=A.et.gp(0)
n=o.H()
u.drawCircle(p+a0,q+0,r*0.82*g,n)
n.delete()}for(d3=c7*0.01,r=i.a,q=i.b,p=q+d3,o=c7*0.015,q+=o,j=c7*0.04,f=0;f<2;++f){a1=C.jw[f]*c7
D.yL(d5,i,new B.u(r+a1*0.04,p),new B.u(r+a1*0.12,q),j,d3,h)}r=c7*0.085
D.yL(d5,i,w.$2(0.02,0.7),w.$2(0,0.6),r,c7*0.055,h)
a2=d0.$1(c9.$2(1.8,1.6))
q=c7*0.05
p=c7*0.026
D.yL(d5,w.$2(0,0.6),w.$2(-0.1,0.55),w.$2(-0.34,0.44),q,p,a2)
D.yL(d5,w.$2(0,0.6),w.$2(0.1,0.55),w.$2(0.34,0.44),q,p,a2)
a3=d0.$1(c9.$2(3.2,1.3))
p=c7*0.024
a1=c7*0.018
D.yL(d5,w.$2(-0.34,0.44),w.$2(-0.17,0.33),w.$2(0,0.39),p,a1,a3)
D.yL(d5,w.$2(0.34,0.44),w.$2(0.17,0.33),w.$2(0,0.39),p,a1,a3)
a4=d0.$1(c9.$2(4.4,1.3))
a1=c7*0.02
p=c7*0.012
D.yL(d5,w.$2(0,0.39),w.$2(-0.1,0.3),w.$2(-0.17,0.2),a1,p,a4)
D.yL(d5,w.$2(0,0.39),w.$2(0.1,0.3),w.$2(0.17,0.2),a1,p,a4)
a1=c7*0.016
D.yL(d5,w.$2(-0.27,0.72),w.$2(-0.14,0.78),w.$2(0,0.7),a1,p,d0.$1(c9.$2(3.6,1)))
D.yL(d5,w.$2(0.27,0.72),w.$2(0.14,0.78),w.$2(0,0.7),a1,p,d0.$1(c9.$2(3.6,1)))
a5=new B.ez()
a5.dl(5)
for(a1=d7*1.6,a6=d7*1.3,a7=g*1.4,a8=c7*0.03,s=0;s<110;++s){a9=C.axq[A.o.E(s,8)]
b0=a5.aj()*3.141592653589793*2
b1=Math.sqrt(a5.aj())*a9.c*0.95
b2=w.$2(a9.a+Math.cos(b0)*b1,a9.b+Math.sin(b0)*b1)
b3=Math.sin(a1+s)
b4=b2.a
b2=b2.b
J.bv(u.save())
u.translate(b4+b3*c7*0.006,b2+0)
u.rotate((b0+Math.sin(a6+s)*0.2)*180/3.141592653589793,0,0)
b5=A.k.D(a7-A.o.E(s,10)*0.05,0,1)
b2=B.c9(A.J,o*b5,a8*b5)
$.W()
b3=new B.aq(A.W,A.V,A.Y,A.a_,A.X)
b3.r=B.ar(A.bc,A.ek,(Math.sin(d4+s)+1)/2).gp(0)
n=b3.H()
u.drawOval(B.c_(b2),n)
n.delete()
u.restore()}b6=new D.fsQ(c9,d5,d7,c8)
u=c7*0.075
b6.$5(0,"Bibi",w.$2(-0.27,0.72),u,5)
b6.$5(1,"Babu",w.$2(0.27,0.72),u,5.6)
b6.$5(2,"Mama",w.$2(-0.34,0.44),r,6.4)
b6.$5(3,"Baba",w.$2(0.34,0.44),r,7)
b6.$5(4,"Dada",w.$2(-0.17,0.2),u,8)
b6.$5(5,"Kaka",w.$2(0.17,0.2),u,8.6)
b7=new D.fsR(c9,d7,d5)
b7.$3(w.$2(0,0.7),c7*0.028,5.9)
b7.$3(w.$2(0,0.39),c7*0.035,7.4)
if(c8>9.3)for(r=(c8-9.3)*0.4,s=0;s<7;++s){b8=A.k.E(r+s/7,1)
D.Go(d5,"\u2665",w.$2(Math.sin(s*2.3+d4)*0.3,0.38-b8*0.3),c7*(0.04+0.02*A.o.E(s,3)),A.i5.j((1-b8)*0.85),A.bi,0,c5)}d4=c6*0.655+(1-d0.$1(c9.$2(1,0.9)))*c6*0.4
r=c7*0.1
o=d4+c6*0.315
b9=new B.a8(d4,r,o,r+c7*0.64)
a1=B.bu(b9,new B.aR(q,q))
$.W()
a6=B.N()
a6.r=C.jG.j(0.88).gp(0)
d5.aE(a1,a6)
a6=B.bu(b9,new B.aR(q,q))
a1=B.N()
a1.b=A.ae
a1.c=p
a1.r=C.fq.gp(0)
d5.aE(a6,a1)
c0=new D.fsU(b9,c7)
D.aNP(d5,"NGMY",c0.$2(0.13,0.06),c7*0.06,C.fq,!0,p)
D.aNP(d5,"Family",c0.$2(0.2,0.1),r,A.c,!0,0)
D.aNP(d5,"Tree",c0.$2(0.3,0.1),r,A.c,!0,0)
for(s=0;s<3;++s){c1=c9.$2(5.5+s*1.5,0.5)
if(c1<=0)continue
D.aNP(d5,"\u2665 "+C.c0V[s],c0.$2(0.43+s*0.075,0.06).eR(new B.u((1-c1)*30,0)),q,A.i4.j(c1),!1,0)}c2=c9.$2(11,0.5)
if(c2>0){c3=B.c9(new B.u(b9.gbO().a,c7*0.67),u,(o-d4)*0.6*A.ev.az(0,c2))
d4=B.bu(c3,new B.aR(j,j))
$.W()
u=B.N()
u.r=C.fq.gp(0)
d5.aE(d4,u)
if(c2>0.8)D.aNP(d5,"ngmy.org",c3.ct(-d3),q,C.jG,!0,0)}if(c8>11.6){d3=c7*0.82
D.aNP(d5,"Family is everything",new B.a8(0,d3,0+x*2,d3+q),q,A.c.j(A.k.D((c8-11.6)/0.5,0,1)),!0,0)}if(c8<0.4)c4=1-c8/0.4
else c4=c8>13.5?(c8-13.5)/0.5:0
if(c4>0){$.W()
d3=B.N()
d3.r=A.w.j(c4).gp(0)
d5.aX(new B.a8(0,0,d1,d2),d3)}},
hTW(d,e,a0){var x,w,v,u,t,s,r,q,p,o,n,m,l=null,k=e.a,j=e.b,i=0+k,h=0+j,g=$.W(),f=B.N()
f.saq(C.bXI.av(0,new B.a8(0,0,i,h)))
d.aX(new B.a8(0,0,i,h),f)
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
if(t!=null)r.bB(t)
t=v.e
if(t!=null)t.a.delete()
v.e=null}t=new B.ap(k,j)
f.push(t)
f=v.f
if(f!=null)t.bB(f)
f=v.e
if(f!=null)f.a.delete()
v.e=null
f=$.W()
t=new B.aq(A.W,A.V,A.Y,A.a_,A.X)
t.r=(g?A.jg:A.dX).gp(0)
q=t.H()
g=v.e
i.drawPath((g==null?v.e=new B.cB(v.gbI().a.snapshot()):g).a,q)
q.delete()}for(i=j*0.04,h=x*1.3,g=k+60,f=k*0.3,p=0,o=0;o<6;++o){u=A.k.E(o*90-h,g)-30
t=Math.sin(o*1.7+a0)
if(Math.abs(u-f)<12)++p
D.i0U(d,new B.u(u,j*(0.35+0.08*t)),i,A.dQ)}n=Math.abs(Math.sin(a0*5))
m=new B.u(f,j*0.72-n*j*0.22)
i=B.c9(new B.u(f,j*0.82),j*0.025,j*0.14*(1-n*0.4))
$.W()
h=B.N()
h.r=A.dr.gp(0)
d.hL(i,h)
h=j*0.085
i=B.N()
i.saq(C.eka.av(0,B.bQ(m,h)))
d.ae(m,h,i)
i=B.N()
i.b=A.ae
i.c=2
i.r=A.pJ.gp(0)
d.ae(m,h,i)
i=-j
D.Go(d,"$",m.ad(0,new B.u(i*0.03,i*0.045)),j*0.09,A.pJ,A.bi,0,l)
h=i*0.01
i=m.ad(0,new B.u(i*0.028,h))
g=B.N()
g.r=A.w.gp(0)
d.ae(i,2.4,g)
h=m.ad(0,new B.u(j*0.028,h))
g=B.N()
g.r=A.w.gp(0)
d.ae(h,2.4,g)
D.Go(d,"Saved: $"+(A.o.E(A.k.bk(a0*3),1000)+p),new B.u(j*0.05,j*0.06),j*0.08,A.c,A.bi,0,l)},
i0U(d,e,f,g){var x,w,v,u,t,s,r,q=$.W(),p=B.a([],y.v),o=new B.aO(q.r,A.ao,null,null,p)
for(q=e.a,x=e.b,w=f*0.45,v=0;v<10;++v){u=-1.5707963267948966+v*3.141592653589793/5
t=(v&1)===0?f:w
s=q+Math.cos(u)*t
r=x+Math.sin(u)*t
if(v===0){s=new B.b5(s,r)
p.push(s)
r=o.f
if(r!=null)s.bB(r)
s=o.e
if(s!=null)s.a.delete()
o.e=null}else{s=new B.ap(s,r)
p.push(s)
r=o.f
if(r!=null)s.bB(r)
s=o.e
if(s!=null)s.a.delete()
o.e=null}}o.F(new B.bE())
$.W()
q=B.N()
q.r=g.gp(0)
d.aQ(o,q)},
i0P(a1,a2,a3){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=a2.a,e=a2.b,d=$.W(),a0=B.N()
a0.r=C.bgl.gp(0)
a1.aX(new B.a8(0,0,0+f,0+e),a0)
x=new B.ez()
x.dl(7)
for(a0=a3*3,w=a1.a,v=0;v<60;++v){u=A.k.E(A.k.E(x.aj()*f-a3*(10+x.aj()*60),f)+f,f)
t=x.aj()
s=x.aj()
r=new B.aq(A.W,A.V,A.Y,A.a_,A.X)
r.r=A.c.j(0.5+0.5*Math.sin(a0+v)).gp(0)
q=r.H()
w.drawCircle(u,t*e*0.85,0.6+s*1.4,q)
q.delete()}p=f*1.2-A.k.E(a3*22,f*1.6)
a0=e*0.3
t=e*0.2
s=B.N()
s.saq(C.ek8.av(0,B.bQ(new B.u(p,a0),t)))
a1.ae(new B.u(p,a0),t,s)
a0=B.c9(new B.u(p,a0),e*0.07,e*0.6)
s=B.N()
s.b=A.ae
s.c=3
s.r=A.bL.j(0.7).gp(0)
a1.hL(a0,s)
s=Math.sin(a3*2)
J.bv(w.save())
w.translate(f*0.42,e*0.52+s*e*0.04)
a1.jc(0,-0.25)
d=d.r
s=y.v
o=new B.aO(d,A.ao,g,g,B.a([],s))
a0=-e
t=a0*0.04
r=e*0.1
o.F(new B.b5(t,r))
n=e*0.04
o.F(new B.cQ(0,e*(0.2+0.05*Math.sin(a3*30)),n,r))
o.F(new B.bE())
m=B.N()
l=e*0.12
m.saq(C.bYo.av(0,new B.a8(t,r,t+e*0.08,r+l)))
a1.aQ(o,m)
k=new B.aO(d,A.ao,g,g,B.a([],s))
m=a0*0.17
k.F(new B.b5(0,m))
t=a0*0.05
j=e*0.05
k.F(new B.cQ(e*0.09,t,j,r))
k.F(new B.ap(t,r))
k.F(new B.cQ(a0*0.09,t,0,m))
k.F(new B.bE())
i=B.N()
h=a0*0.08
i.saq(C.bYF.av(0,new B.a8(h,m,h+e*0.16,m+e*0.27)))
a1.aQ(k,i)
i=B.N()
i.r=A.aM.gp(0)
a1.ae(new B.u(0,t),e*0.035,i)
i=new B.aO(d,A.ao,g,g,B.a([],s))
i.F(new B.b5(t,n))
i.F(new B.ap(a0*0.1,l))
i.F(new B.ap(t,r))
i.F(new B.bE())
t=B.N()
t.r=A.av.gp(0)
a1.aQ(i,t)
s=new B.aO(d,A.ao,g,g,B.a([],s))
s.F(new B.b5(j,n))
s.F(new B.ap(r,l))
s.F(new B.ap(j,r))
s.F(new B.bE())
r=B.N()
r.r=A.av.gp(0)
a1.aQ(s,r)
w.restore()},
hYD(a1,a2,a3){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null,h=a2.a,g=a2.b,f=0+h,e=0+g,d=$.W(),a0=B.N()
a0.saq(C.bXp.av(0,new B.a8(0,0,f,e)))
a1.aX(new B.a8(0,0,f,e),a0)
for(f=a1.a,e=g*0.85,a0=g*0.7,x=y.v,d=d.r,w=0;w<4;++w){v=h*(0.1+0.25*w)
u=B.a([],x)
t=new B.aO(d,A.ao,i,i,u)
u.push(new B.b5(v,g))
u.push(new B.cQ(v+Math.sin(a3+w)*10,e,v+4,a0+w*6))
u=new B.aq(A.W,A.V,A.Y,A.a_,A.X)
u.b=A.ae
u.c=5
u.r=A.cT.gp(0)
s=u.H()
u=t.gbI().a.snapshot()
f.drawPath((t.e=new B.cB(u)).a,s)
s.delete()}e=A.k.E(a3*18,h*1.5)
J.bv(f.save())
f.translate(e-h*0.25,g*0.35+Math.sin(a3)*6)
e=B.c9(A.J,g*0.22,g*0.5)
a0=B.N()
a0.r=A.br.gp(0)
a1.hL(e,a0)
a0=new B.aO(d,A.ao,i,i,B.a([],x))
e=-g
u=e*0.22
a0.F(new B.b5(u,0))
a0.F(new B.cQ(e*0.36,e*0.12+Math.sin(a3*3)*5,e*0.34,e*0.16))
t=e*0.02
a0.F(new B.cQ(e*0.28,t,u,0))
u=B.N()
u.r=A.br.gp(0)
a1.aQ(a0,u)
u=g*0.03
a0=g*0.1
r=B.c9(new B.u(0,u),a0,g*0.34)
q=B.N()
q.r=A.aL.gp(0)
a1.hL(r,q)
q=B.N()
q.r=A.c.gp(0)
a1.ae(new B.u(g*0.15,t),3,q)
q=B.N()
q.r=A.w.gp(0)
a1.ae(new B.u(g*0.155,t),1.5,q)
f.restore()
for(t=e*0.005,r=e*0.08,q=e*0.03,p=g*0.06,e*=0.04,o=h+40,n=a3*2,w=0;w<6;++w){m=(w&1)===0?1:-1
l=A.k.E(A.k.E(a3*(24+w*7)*m+w*80,o)+h+40,o)
k=Math.sin(n+w)
J.bv(f.save())
f.translate(l-20,g*(0.52+0.06*w)+k*6)
f.scale(m,1)
l=B.c9(A.J,p,a0)
k=new B.aq(A.W,A.V,A.Y,A.a_,A.X)
j=A.o.E(w,4)
k.r=C.awa[j].gp(0)
s=k.H()
f.drawOval(B.c_(l),s)
s.delete()
l=B.a([],x)
k=new B.aO(d,A.ao,i,i,l)
l.push(new B.b5(e,0))
l.push(new B.ap(r,q))
l.push(new B.ap(r,u))
l.push(new B.bE())
l=new B.aq(A.W,A.V,A.Y,A.a_,A.X)
l.r=C.awa[j].gp(0)
s=l.H()
l=k.gbI().a.snapshot()
f.drawPath((k.e=new B.cB(l)).a,s)
s.delete()
l=new B.aq(A.W,A.V,A.Y,A.a_,A.X)
l.r=A.w.gp(0)
s=l.H()
f.drawCircle(u,t,1.8,s)
s.delete()
f.restore()}for(w=0;w<14;++w){e=A.k.E(w*0.071+0.05,1)
d=A.k.E(a3*(14+w*3)+w*40,g)
a0=Math.sin(n+w)
x=A.o.E(w,3)
u=new B.aq(A.W,A.V,A.Y,A.a_,A.X)
u.b=A.ae
u.c=1.2
u.r=A.c.j(0.7).gp(0)
s=u.H()
f.drawCircle(h*e+a0*4,g-d,2+x,s)
s.delete()}},
hZV(a7,a8,a9){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null,d=a8.a,a0=a8.b,a1=A.k.E(a9,12),a2=a1<7,a3=0+d,a4=0+a0,a5=$.W(),a6=B.N()
a6.saq(new B.a9(A.b1,A.b5,A.x,a2?C.dfF:C.d2H,e,e).av(0,new B.a8(0,0,a3,a4)))
a7.aX(new B.a8(0,0,a3,a4),a6)
a6=a0*0.74
x=B.N()
x.r=(a2?C.bky:A.EK).gp(0)
a7.aX(new B.a8(0,a6,a3,a6+a0*0.26),x)
for(x=a7.a,w=a0*0.07,v=a0*0.06,u=a0*0.2,t=a0*0.1,s=a0*0.09,r=y.v,q=a9*2,a5=a5.r,p=0;p<4;++p){o=d*(0.08+0.24*p)
n=a0*(0.14+0.03*A.o.E(p,2))
m=a6-n
l=o+u
k=new B.aq(A.W,A.V,A.Y,A.a_,A.X)
k.r=C.cQf[p].gp(0)
j=k.H()
x.drawRect(B.c_(new B.a8(o,m,l,m+n)),j)
j.delete()
k=B.a([],r)
i=new B.aO(a5,A.ao,e,e,k)
k.push(new B.b5(o-4,m))
k.push(new B.ap(o+t,m-s))
k.push(new B.ap(l+4,m))
k.push(new B.bE())
m=new B.aq(A.W,A.V,A.Y,A.a_,A.X)
m.r=A.eu.gp(0)
j=m.H()
m=i.gbI().a.snapshot()
x.drawPath((i.e=new B.cB(m)).a,j)
j.delete()
m=o+w
l=n*0.55
k=a6-l
i=new B.aq(A.W,A.V,A.Y,A.a_,A.X)
i.r=(a2&&A.o.E(A.k.bk(q),2)===0?A.lm:A.fW).gp(0)
j=i.H()
x.drawRect(B.c_(new B.a8(m,k,m+v,k+l)),j)
j.delete()}if(a2){for(a6=a9*20,v=a9*260,u=a0*0.8,p=0;p<70;++p){o=A.k.E(p*37+a6,d)
h=A.k.E(p*53+v,u)
s=new B.aq(A.W,A.V,A.Y,A.a_,A.X)
s.r=A.f9.gp(0)
s.c=1.4
j=s.H()
x.drawLine.apply(x,[o,h,o-3,h+9,j])
j.delete()}a6=a9*3
if(A.o.E(A.k.bk(a6),7)===0&&A.k.E(a6,1)<0.3){a6=B.N()
a6.r=A.c.j(0.5).gp(0)
a7.aX(new B.a8(0,0,a3,a4),a6)
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
t.r=A.lm.gp(0)
a7.aQ(r,t)}}else{for(a3=d*0.5,a4=a0*0.035,a5=3.141592653589793*A.k.D((a1-7)/2,0,1)*57.29577951308232,p=0;p<6;++p){v=d*(0.9-p*0.07)
v=B.c9(new B.u(a3,a6),v,v)
u=new B.aq(A.W,A.V,A.Y,A.a_,A.X)
u.b=A.ae
u.c=a4
u.r=C.djN[p].j(0.9).gp(0)
j=u.H()
x.drawArc.apply(x,[B.c_(v),180,a5,!1,j])
j.delete()}a3=B.N()
a3.r=A.dQ.gp(0)
a7.ae(new B.u(d*0.86,a0*0.16),a0*0.08,a3)}for(a3=d+120,p=0;p<3;++p){o=A.k.E(a9*(8+p*4)+p*120,a3)-60
for(a4=a0*(0.12+0.1*p),g=0;g<4;++g){f=C.cld[g]
$.W()
a5=new B.aq(A.W,A.V,A.Y,A.a_,A.X)
a5.r=(a2?A.bm:A.c.j(0.95)).gp(0)
j=a5.H()
x.drawCircle(o+f.a,a4+f.b,w,j)
j.delete()}}},
i0Q(a1,a2,a3){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=a2.a,a0=a2.b
$.W()
x=B.N()
x.r=A.db.gp(0)
a1.aX(new B.a8(0,0,0+d,0+a0),x)
w=B.N()
w.r=A.c.j(0.05).gp(0)
for(x=a1.a,v=0;v<d;v+=16){u=w.H()
x.drawLine.apply(x,[v,0,v,a0,u])
u.delete()}for(t=0;t<a0;t+=16){u=w.H()
x.drawLine.apply(x,[0,t,d,t,u])
u.delete()}s=d*0.14
r=a0*0.2
q=a0*0.08
p=B.bu(new B.a8(s,r,s+d*0.72,r+a0*0.5),new B.aR(q,q))
o=new B.aO($.W().r,A.ao,null,null,B.a([],y.v))
o.F(new B.iN(p))
r=B.N()
r.b=A.ae
r.c=5
r.r=A.br.gp(0)
a1.aQ(o,r)
n=new B.SA(new B.vH(B.xg(o),!1,B.a([],y.L))).gI(0)
r=n.a
m=n.b
r.jC()
l=r.e
k=l[m].b
k===$&&B.c()
k=k.a.length()
r.jC()
j=l[m].b
j===$&&B.c()
i=A.k.E(a3*k/5,j.a.length())
for(h=0;h<10;++h){r.jC()
k=l[m].b
k===$&&B.c()
k=A.k.E(i-h*9,k.a.length())
r.jC()
g=l[m].MU(k).a
k=new B.aq(A.W,A.V,A.Y,A.a_,A.X)
k.r=A.dQ.j(1-h*0.09).gp(0)
k.z=L.Rx
u=k.H()
x.drawCircle(g.a,g.b,6-h*0.5,u)
u.delete()}x=a0*0.45
r=B.bu(B.c9(new B.u(s,x),a0*0.22,a0*0.12),A.iz)
m=B.N()
m.r=A.cT.gp(0)
a1.aE(r,m)
D.Go(a1,"+",new B.u(s-5,a0*0.33),a0*0.07,A.c,A.bi,0,null)
f=(Math.sin(a3*2)+1)/2
e=new B.u(d*0.86,x)
x=B.N()
x.r=A.dQ.j(0.25+0.5*f).gp(0)
x.z=H.HR
a1.ae(e,a0*0.16,x)
x=B.N()
x.r=B.ar(A.bK,A.oO,f).gp(0)
a1.ae(e,q,x)
D.Go(a1,"Electricity needs a full loop!",new B.u(0,a0*0.74),a0*0.075,A.fX,A.L,0,d)},
hVf(a4,a5,a6){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=a5.a,a1=a5.b,a2=0+a0,a3=0+a1
$.W()
x=B.N()
x.saq(C.c_C.av(0,new B.a8(0,0,a2,a3)))
a4.aX(new B.a8(0,0,a2,a3),x)
x=a1*0.82
a3=B.N()
a3.r=A.db.gp(0)
a4.aX(new B.a8(0,x,a2,x+a1*0.18),a3)
for(a2=a0*0.1,a3=a4.a,w=0;w<7;++w){v=a0*(0.05+w*0.15)
u=a1*(0.1+0.07*A.o.E(w*5,4))
t=x-u
s=new B.aq(A.W,A.V,A.Y,A.a_,A.X)
s.r=A.aw.gp(0)
r=s.H()
a3.drawRect(B.c_(new B.a8(v,t,v+a2,t+u)),r)
r.delete()}for(a2=a1*0.2,t=a6*0.55,q=0;q<4;++q){s=t+q*0.27
p=A.k.E(s,1)
o=A.k.bk(s)*7+q*3
n=a0*(0.15+0.7*A.k.E(o*0.37,1))
m=a1*(0.2+0.25*A.k.E(o*0.53,1))
l=C.ava[A.o.E(Math.abs(o),5)]
if(p<0.3){$.W()
s=new B.aq(A.W,A.V,A.Y,A.a_,A.X)
s.r=A.c.gp(0)
r=s.H()
a3.drawCircle(n,x-(x-m)*(p/0.3),2.5,r)
r.delete()}else{w=(p-0.3)/0.7
for(s=w*w*a1*0.08,k=1-w,j=2.4*k+0.4,i=0;i<28;++i){h=i*3.141592653589793*2/28
g=a2*A.dV.az(0,w)
f=Math.cos(h)
e=Math.sin(h)
$.W()
d=new B.aq(A.W,A.V,A.Y,A.a_,A.X)
d.r=l.j(A.k.D(k,0,1)).gp(0)
d.z=C.dsk
r=d.H()
a3.drawCircle(n+f*g,m+e*g+s,j,r)
r.delete()}}}},
i1v(a4,a5,a6){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=a5.a,d=a5.b,a0=0+e,a1=0+d,a2=$.W(),a3=B.N()
a3.saq(C.bZu.av(0,new B.a8(0,0,a0,a1)))
a4.aX(new B.a8(0,0,a0,a1),a3)
for(a1=a4.a,a3=y.v,x=0;x<2;++x,a2=w){w=B.a([],a3)
v=new B.aO(a2.r,A.ao,null,null,w)
w.push(new B.b5(0,d))
for(a2=x===0,u=0;u<=e;u+=6){t=a2?8:20
s=a2?0.55:0.68
r=a2?50:34
r=new B.ap(u,d*s+Math.sin((u+a6*t)/r)*d*0.06)
w.push(r)
t=v.f
if(t!=null)r.bB(t)
t=v.e
if(t!=null)t.a.delete()
v.e=null}t=new B.ap(e,d)
w.push(t)
w=v.f
if(w!=null)t.bB(w)
w=v.e
if(w!=null)w.a.delete()
v.e=null
w=$.W()
t=new B.aq(A.W,A.V,A.Y,A.a_,A.X)
t.r=(a2?A.EN:A.EK).gp(0)
q=t.H()
a2=v.e
a1.drawPath((a2==null?v.e=new B.cB(v.gbI().a.snapshot()):a2).a,q)
q.delete()}a2=d*0.8
a3=B.N()
a3.r=A.br.gp(0)
a4.aX(new B.a8(0,a2,a0,a2+d*0.04),a3)
for(u=-A.k.E(a6*80,24),a0=d*0.84,a3=d*0.03,w=a0+a3;u<e;u+=24){t=new B.aq(A.W,A.V,A.Y,A.a_,A.X)
t.r=A.fW.gp(0)
q=t.H()
a1.drawRect(B.c_(new B.a8(u,a0,u+8,w)),q)
q.delete()}p=Math.sin(a6*14)*1.2
o=e*0.12
for(a0=a2+p,a2=d*0.025,w=e*0.012,t=d*0.02,s=d*0.62+p,a3=s+a3,r=a3+d*0.06,n=s+d*0.18,m=0;m<4;++m){l=m===0
k=o+e*(l?0.16:0.15)
j=B.bu(new B.a8(o,s,k,n),new B.aR(t,t))
i=new B.aq(A.W,A.V,A.Y,A.a_,A.X)
i.r=(l?A.bz:C.d2J[m-1]).gp(0)
q=i.H()
a1.drawRRect(B.eA(j),q)
q.delete()
for(k-=o,j=k*0.18,h=0;h<3;++h){i=o+k*(0.12+h*0.28)
g=new B.aq(A.W,A.V,A.Y,A.a_,A.X)
g.r=A.f9.gp(0)
q=g.H()
a1.drawRect(B.c_(new B.a8(i,a3,i+j,r)),q)
q.delete()}j=new B.aq(A.W,A.V,A.Y,A.a_,A.X)
j.r=A.bk.gp(0)
q=j.H()
a1.drawCircle(o+k*0.25,a0,a2,q)
q.delete()
j=new B.aq(A.W,A.V,A.Y,A.a_,A.X)
j.r=A.bk.gp(0)
q=j.H()
a1.drawCircle(o+k*0.75,a0,a2,q)
q.delete()
o+=k+w}for(a0=a6*0.8,a2=e*0.2,a3=d*0.6,m=0;m<5;++m){f=A.k.E(a0+m*0.2,1)
w=f*d
s=new B.aq(A.W,A.V,A.Y,A.a_,A.X)
s.r=A.c.j(0.7*(1-f)).gp(0)
q=s.H()
a1.drawCircle(a2-f*e*0.12,a3-w*0.25,t+w*0.04,q)
q.delete()}},
i_H(a2,a3,a4){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=a3.a,d=a3.b,a0=0+e,a1=0+d
$.W()
x=B.N()
w=a4*2
v=B.ar(A.jg,A.f3,(Math.sin(w)+1)/2)
v.toString
x.saq(new B.a9(A.az,A.aC,A.x,B.a([v,A.aw],y.O),null,null).av(0,new B.a8(0,0,a0,a1)))
a2.aX(new B.a8(0,0,a0,a1),x)
for(a0=a2.a,a1=d*0.86,x=e/8-2,v=d*0.14,u=a1+v,t=0;t<8;++t){s=e*t/8
r=new B.aq(A.W,A.V,A.Y,A.a_,A.X)
r.r=(A.k.E(w+t,2)<1?A.bU:A.aM).j(0.5).gp(0)
q=r.H()
a0.drawRect(B.c_(new B.a8(s,a1,s+x,u)),q)
q.delete()}a1=a4*6
p=Math.sin(a1)
J.bv(a0.save())
x=-d
a0.translate(e*0.5,d*0.55+Math.abs(p)*x*0.03)
a2.jc(0,p*0.06)
u=d*0.26
s=d*0.3
r=d*0.04
o=B.bu(B.c9(A.J,s,u),new B.aR(r,r))
n=B.N()
n.saq(C.c01.av(0,B.c9(A.J,s,u)))
a2.aE(o,n)
n=d*0.08
v=B.c9(new B.u(0,d*0.02),n,v)
o=B.N()
o.r=A.b7.j(0.7).gp(0)
a2.aX(v,o)
o=B.bu(B.c9(new B.u(0,x*0.25),d*0.17,d*0.22),new B.aR(r,r))
v=B.N()
v.r=A.cs.gp(0)
a2.aE(o,v)
m=A.k.E(a4*1.3,1)>0.08
for(v=x*0.26,u=d*0.025,l=0;l<2;++l){k=C.ckR[l]
s=new B.aq(A.W,A.V,A.Y,A.a_,A.X)
s.r=(m?A.b7:A.f3).gp(0)
q=s.H()
a0.drawCircle(k*d,v,u,q)
q.delete()}v=B.N()
v.r=A.ad.gp(0)
v.c=3
a2.bF(new B.u(0,x*0.335),new B.u(0,x*0.38),v)
v=B.N()
v.r=A.av.gp(0)
a2.ae(new B.u(0,x*0.39),d*0.015,v)
for(v=-p,u=d*0.035,s=d*0.15,o=d*0.28,x*=0.08,l=0;l<2;++l){j=C.jw[l]
J.bv(a0.save())
i=j*d
a0.translate(i*0.14,x)
h=j>0
a0.rotate(j*(0.7+Math.sin(a1+(h?0:3.141592653589793))*0.8)*180/3.141592653589793,0,0)
g=new B.aq(A.W,A.V,A.Y,A.a_,A.X)
g.r=A.bK.gp(0)
g.c=u
g.d=A.bQ
q=g.H()
a0.drawLine.apply(a0,[0,0,i*0.16,0,q])
q.delete()
a0.restore()
h=h?p:v
g=new B.aq(A.W,A.V,A.Y,A.a_,A.X)
g.r=A.bK.gp(0)
g.c=r
g.d=A.bQ
q=g.H()
a0.drawLine.apply(a0,[i*0.06,s,i*0.08,o+h*d*0.02,q])
q.delete()}a0.restore()
for(a0=a4*0.7,a1=d*0.7,t=0;t<4;++t){f=A.k.E(a0+t*0.25,1)
D.Go(a2,"\u266a",new B.u(e*(0.2+0.18*t)+Math.sin(w+t)*8,a1-f*d*0.5),n,A.c.j(1-f),A.bi,0,null)}},
hVq(a1,a2,a3){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=a2.a,e=a2.b,d=0+f,a0=0+e
$.W()
x=B.N()
x.saq(C.bZB.av(0,new B.a8(0,0,d,a0)))
a1.aX(new B.a8(0,0,d,a0),x)
x=B.N()
x.r=A.dQ.gp(0)
a1.ae(new B.u(f*0.12,e*0.16),e*0.07,x)
x=e*0.72
a0=B.N()
a0.r=A.EN.gp(0)
a1.aX(new B.a8(0,x,d,x+e*0.28),a0)
for(d=a3*0.25,a0=e*0.78,x=a1.a,w=e*0.016,v=a3*0.3,u=e*0.022,t=0;t<9;++t){s=f*(0.07+t*0.105)
r=A.k.D(A.k.E(d-t*0.12,3),0,1)
q=A.o.E(t,3)
p=s+Math.sin(a3+t)*3
q=a0-e*(0.12+0.05*q)*r
o=new B.aq(A.W,A.V,A.Y,A.a_,A.X)
o.r=A.h7.gp(0)
o.c=3
n=o.H()
x.drawLine.apply(x,[s,a0,p,q,n])
n.delete()
if(r>0.7){for(m=0;m<6;++m){l=m*3.141592653589793/3+v
o=Math.cos(l)
k=Math.sin(l)
j=new B.aq(A.W,A.V,A.Y,A.a_,A.X)
j.r=C.axc[A.o.E(t,5)].gp(0)
n=j.H()
x.drawCircle(p+o*e*0.028,q+k*e*0.028,u,n)
n.delete()}o=new B.aq(A.W,A.V,A.Y,A.a_,A.X)
o.r=A.dQ.gp(0)
n=o.H()
x.drawCircle(p,q,w,n)
n.delete()}}for(d=e*0.03,a0=e*0.05,w=e*0.06,v=a3*0.9,u=a3*1.3,q=a3*18,t=0;t<3;++t){s=f*(0.2+0.28*t)+Math.sin(v+t*2)*f*0.12
i=e*(0.3+0.1*t)+Math.cos(u+t)*e*0.06
h=Math.abs(Math.sin(q+t))
for(p=a0*h+2,o=(t+2)%5,g=0;g<2;++g){k=B.c9(new B.u(s+C.jw[g]*e*0.025*h,i),w,p)
j=new B.aq(A.W,A.V,A.Y,A.a_,A.X)
j.r=C.axc[o].gp(0)
n=j.H()
x.drawOval(B.c_(k),n)
n.delete()}p=new B.aq(A.W,A.V,A.Y,A.a_,A.X)
p.r=A.bk.gp(0)
p.c=2
n=p.H()
x.drawLine.apply(x,[s,i-d,s,i+d,n])
n.delete()}},
h5Q(d,e,f,g,h,i){return B.a5(d,!1).cm(B.uP(null,!1,!0,!0,new D.fTo(e,h,g,i,f),A.eM,null,A.pX,new D.fTp(),y.S))},
xM:function xM(d,e){this.a=d
this.b=e},
fhw:function fhw(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fsT:function fsT(d){this.a=d},
fsP:function fsP(){},
fsS:function fsS(d,e){this.a=d
this.b=e},
fsQ:function fsQ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fsR:function fsR(d,e,f){this.a=d
this.b=e
this.c=f},
fsU:function fsU(d,e){this.a=d
this.b=e},
fTo:function fTo(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fTp:function fTp(){},
Wl:function Wl(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aEv:function aEv(d,e){var _=this
_.e=_.d=$
_.f=-1
_.r=!1
_.w=null
_.x=0
_.y=!0
_.z=null
_.bt$=d
_.a9$=e
_.c=_.a=null},
eI1:function eI1(d){this.a=d},
eI0:function eI0(d){this.a=d},
eI_:function eI_(d,e){this.a=d
this.b=e},
eI2:function eI2(d,e){this.a=d
this.b=e},
eIb:function eIb(d){this.a=d},
eIa:function eIa(d){this.a=d},
eI9:function eI9(){},
eI4:function eI4(d){this.a=d},
eI5:function eI5(d){this.a=d},
eI6:function eI6(d){this.a=d},
eI7:function eI7(d){this.a=d},
eI3:function eI3(d){this.a=d},
eI8:function eI8(d){this.a=d},
eHZ:function eHZ(d){this.a=d},
eHY:function eHY(d){this.a=d},
buC:function buC(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.a=h},
aMk:function aMk(){},
h5V(d){var x
A:{if("lgtv"===d){x="lg"
break A}if("sonytv"===d){x="sony"
break A}if("appletv"===d){x="apple"
break A}if("bangtv"===d){x="bo"
break A}x="samsung"
break A}return x},
ifd(d){var x,w=D.h5V(d)
A:{if("lg"===w){x=A.hk
break A}if("sony"===w){x=A.dt
break A}if("apple"===w){x=A.bN
break A}if("bo"===w){x=C.tp
break A}x=A.aM
break A}return x},
arU:function arU(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bkL:function bkL(){this.d=0
this.c=this.a=null},
eHW:function eHW(d,e){this.a=d
this.b=e},
eHX:function eHX(d,e){this.a=d
this.b=e},
eHT:function eHT(){},
eHS:function eHS(d){this.a=d},
eHU:function eHU(d){this.a=d},
eHV:function eHV(d){this.a=d},
eHQ:function eHQ(d){this.a=d},
eHR:function eHR(d,e){this.a=d
this.b=e},
hKY(b3,b4,b5,b6,b7){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9=A.o.am(22050*b4,1000),b0=a9*2,b1=new DataView(new ArrayBuffer(44+b0)),b2=new D.cgI(b1)
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
x=new B.ez()
x.dl(3)
w=3
v=0.006
u=!1
t=0
switch(b7){case"piano":s=C.cWW
r=C.d1c
w=3.4
break
case"organ":s=C.d01
r=C.dfJ
v=0.02
u=!0
break
case"bell":s=C.cSE
r=C.cRt
w=2.4
break
case"pluck":s=C.cWV
r=C.cDe
w=7
break
case"synth":s=C.dgA
r=C.dii
v=0.012
u=!0
break
case"flute":s=C.dmH
r=C.cdA
v=0.07
u=!0
t=0.035
break
default:s=C.apJ
r=C.apJ}b0=s.length
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
break A}a4=a3*(Math.min(1,d/120)*Math.pow(a1,1.6))}b1.setInt16(44+d*2,A.o.D(A.k.V(a4*0.8*32e3),-32768,32767),!0)}return J.eX(A.dD.gaP(b1))},
dH(d,e,f,g,h,i){return D.hKZ(d,e,f,g,h,i)},
hKZ(d,e,f,g,h,i){var x=0,w=B.j(y.H),v=1,u=[],t,s,r,q,p,o
var $async$dH=B.e(function(j,k){if(j===1){u.push(k)
x=v}for(;;)switch(x){case 0:v=3
t=""+A.k.V(d)+"|"+f+"|"+i+"|"+B.v(g)+"|"+e
s=$.hKX.ca(0,t,new D.cgK(d,f,i,g,e))
if($.cgH.length<12){q=B.aiv()
q.N2(A.aNk)
$.cgH.push(q)}q=$.hfe
$.hfe=q+1
r=$.cgH[A.o.E(q,$.cgH.length)]
x=6
return B.b(J.hy8(r,new B.a3b(s,null),h),$async$dH)
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
return B.i($async$dH,w)},
cgI:function cgI(d){this.a=d},
cgK:function cgK(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h}},C,M,N
J=c[1]
B=c[0]
A=c[2]
E=c[123]
G=c[121]
H=c[125]
I=c[172]
K=c[95]
F=c[116]
L=c[96]
D=a.updateHolder(c[26],D)
C=c[93]
M=c[102]
N=c[231]
D.wt.prototype={}
D.vW.prototype={}
D.xM.prototype={}
D.Wl.prototype={
S(){return new D.aEv(null,null)}}
D.aEv.prototype={
gae2(){var x,w=this,v=w.d
if(v===$){x=B.bk(null,A.o5,null,1,null,w)
x.cs(0)
w.d!==$&&B.bL()
w.d=x
v=x}return v},
gDk(){var x=this.e
return x===$?this.e=this.a.e:x},
Z(){var x=this
x.a1()
x.w=B.cM(x.a.r,x.gaZm())
x.aVn()
D.dH(520,"",80,0,0.25,"tri")},
aVn(){var x=this.z
if(x!=null)x.a7(0)
this.z=B.cM(A.k6,new D.eI1(this))},
c7A(){var x=this.c
if(x!=null&&B.a5(x,!1).pC()){x=this.c
x.toString
B.a5(x,!1).O(this.gDk())}},
aj_(){var x=this,w=x.w
if(w!=null)w.a7(0)
x.w=null
x.y=!0
x.aVn()},
ax_(d){this.m(new D.eI_(this,d))
D.dH(900,"",40,0,0.3,"noise")},
b08(d){this.m(new D.eI2(this,d))
D.dH(700,"",60,0,0.3,"tri")},
q(){var x=this,w=x.w
if(w!=null)w.a7(0)
w=x.z
if(w!=null)w.a7(0)
x.gae2().q()
x.bwn()},
B(d){var x,w,v,u,t=this,s=null,r=B.n(10),q=B.I(t.gc7B(),A.q,6),p=B.a([new B.ac(0,A.G,D.ifd(t.a.d).j(0.25),A.J,40)],y.V),o=B.n(4),n=y.p,m=B.a([B.c7(t.gae2(),new D.eIa(t),s)],n)
if(t.r)m.push(t.bBS())
r=B.av(new B.fM(1.7777777777777777,B.p(s,B.by(o,new B.an(A.Z,s,A.b2,A.r,m,s),A.aq),A.f,s,s,new B.o(s,s,q,r,p,s,A.n),s,s,s,s,s,s,s,s),s),s,s,s)
q=t.y
p=q?1:0
o=B.nE(s,A.aW,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s)
o=B.aH(s,s,s,s,B.X(A.cB,A.c,s,s,s,s),s,s,s,t.gaZm(),s,s,s,o,"Back to the board",s)
m=B.n(20)
x=t.f
w=t.a
o=B.B(B.a([o,A.b8,B.p(s,B.d(x>=0?w.c+" \xb7 "+C.kd[x].a:w.c+" \xb7 CH "+(t.gDk()+1),s,s,s,s,s,s,M.zT,s,s,s),A.f,s,s,new B.o(A.aW,s,s,m,s,s,A.n),s,s,s,s,A.mv,s,s,s)],n),A.m,s,A.e,A.j,0,s,s)
m=t.cow()
x=A.w.j(0.65)
w=B.n(18)
v=t.f
v=B.d(v>=0?C.kd[v].a:C.Qm[t.gDk()].a,s,s,s,s,s,s,A.hK,A.L,s,s)
u=t.f
return B.c6(s,A.w,B.bm(!0,B.aB(A.c7,new B.an(A.Z,s,A.b2,A.r,B.a([r,B.De(B.e1(B.x(B.a([new B.D(C.bt1,o,s),A.am,m,A.b8,B.p(s,B.x(B.a([v,B.d(u>=0?C.kd[u].c:C.Qm[t.gDk()].b,s,s,s,s,s,s,K.a8u,A.L,s,s)],n),A.m,s,A.e,A.N,0,A.p),A.f,s,s,new B.o(x,s,s,w,s,s,A.n),s,s,s,A.bl,A.bS,s,s,s)],n),A.m,s,A.e,A.j,0,A.p),!q,s),A.bd,A.io,p)],n),s),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new D.eIb(t),s,s,s,s,s,s,!1,A.a5),!0,!1,A.af,!0,!0),s,!1,!1,s,s)},
cow(){var x=this,w=null,v=new D.eI9(),u=A.w.j(0.72),t=B.n(22),s=B.I(A.aM.j(0.5),A.q,1)
return B.p(w,B.B(B.a([v.$3(A.yy,"CH \u2212",new D.eI4(x)),v.$3(A.hE,"CH +",new D.eI5(x)),v.$5$color$on(A.Gt,"TV",new D.eI6(x),A.aM,x.f<0),v.$5$color$on(A.yi,"APPS",new D.eI7(x),A.bu,x.r),v.$5$color$on(A.BQ,"ADS",new D.eI8(x),A.bU,x.f===0)],y.p),A.m,w,A.e,A.N,0,w,w),A.f,w,w,new B.o(u,w,s,t,w,w,A.n),w,w,w,w,A.ZG,w,w,w)},
bBS(){return new D.arU(this.a.d,this.gcdd(),new D.eHZ(this),null)},
gc7B(){var x,w=D.h5V(this.a.d)
A:{if("apple"===w){x=A.dt
break A}if("bo"===w){x=C.Ez
break A}if("sony"===w){x=C.b9d
break A}if("lg"===w){x=A.ee
break A}x=A.cp
break A}return x}}
D.buC.prototype={
a3(d,e){var x=this
return D.h5x(d,e,x.b,x.d,x.e,x.c)},
au(d){return!0}}
D.aMk.prototype={
q(){var x=this,w=x.a9$
if(w!=null)w.a4(0,x.gbx())
x.a9$=null
x.a2()},
aT(){this.b3()
this.b0()
this.by()}}
D.arU.prototype={
S(){return new D.bkL()},
a5z(d,e){return this.d.$1(e)}}
D.bkL.prototype={
aZn(d){this.m(new D.eHW(this,d))
this.a.a5z(0,d)},
B(d){var x,w=this,v=D.h5V(w.a.c)
A:{if("lg"===v){x=w.c0e()
break A}if("sony"===v){x=w.cwj()
break A}if("apple"===v){x=w.c7C()
break A}if("bo"===v){x=w.bCM()
break A}x=w.cqC()
break A}return x},
gae3(){var x=new B.T(Date.now(),0,!1)
return A.a.aY(A.o.u(B.dk(x)),2,"0")+":"+A.a.aY(A.o.u(B.h4(x)),2,"0")},
ax0(d,e,f,g,h,i,j){var x,w,v=null,u=C.kd[d],t=this.d===d,s=u.d,r=B.ar(s,A.w,0.55)
r.toString
r=B.a([s,r],y.O)
s=B.n(h)
if(t)x=i
else x=A.K
x=B.I(x,A.q,t?2.5:0)
w=B.a([B.d(u.b,v,v,v,v,v,v,B.l(v,v,v,v,v,v,v,v,v,v,v,e,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],y.p)
if(g)w.push(new B.D(A.vz,B.d(u.a,v,1,A.a2,v,v,v,A.Ua,v,v,v),v))
return B.aB(v,B.p(v,B.x(w,A.m,v,A.b9,A.j,0,A.p),A.f,v,v,new B.o(v,v,x,s,v,new B.a9(A.az,A.aC,A.x,r,v,v),A.n),v,f,v,v,v,v,v,j),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new D.eHX(this,d),v,v,v,v,v,v,!1,A.a5)},
aZo(d,e,f,g,h,i){return this.ax0(d,e,f,!1,g,h,i)},
cqC(){var x,w,v,u,t,s,r=this,q=null,p=r.a.e,o=y.p,n=B.B(B.a([C.ft8,A.ab,C.flq,A.b8,C.bRj,A.ab,C.bNe,A.ab,B.d(r.gae3(),q,q,q,q,q,q,C.aRs,q,q,q)],o),A.m,q,A.e,A.j,0,q,q),m=C.kd[r.d],l=B.d(m.a,q,q,q,q,q,q,A.lE,q,q,q)
m=B.d(m.c,q,1,A.a2,q,q,q,C.fdh,q,q,q)
x=A.c.j(0.08)
w=B.a([],o)
for(v=0;v<2;++v){u=new B.aR(8,8)
w.push(B.p(q,B.X(C.ckF[v],A.ad,q,q,q,17),A.f,q,q,new B.o(A.bE,q,q,new B.bn(u,u,u,u),q,q,A.n),q,34,q,A.Ms,q,q,q,34))}u=B.a([],o)
for(t=0;t<8;++t){s=r.d===t?1.12:1
u.push(new B.D(A.Ms,new B.yR(r.ax0(t,14,44,!0,8,A.aM,52),s,A.bd,A.fB,q,q),q))}w.push(B.E(B.cd(B.B(u,A.m,q,A.e,A.j,0,q,q),A.r,q,A.y,q,q,q,q,A.aP),1))
return B.aB(q,B.p(q,B.x(B.a([n,A.b8,new B.bI(A.a3,q,q,l,q),new B.bI(A.a3,q,q,m,q),A.am,B.p(q,B.B(w,A.m,q,A.e,A.j,0,q,q),A.f,q,q,new B.o(x,q,q,A.VG,q,q,A.n),q,q,q,q,A.MT,q,q,q)],o),A.m,q,A.e,A.j,0,A.p),A.f,q,q,C.b1k,q,q,q,q,E.ahR,q,q,q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,p,q,q,q,q,q,q,!1,A.a5)},
c0e(){var x=null,w=this.a.e,v=y.p
return B.aB(x,B.p(x,B.x(B.a([B.B(B.a([B.p(x,C.fz9,A.f,x,x,new B.o(A.hk,x,x,B.n(10),x,x,A.n),x,x,x,x,A.nm,x,x,x),A.bp,C.fs6,A.b8,B.d(this.gae3(),x,x,x,x,x,x,A.DB,x,x,x)],v),A.m,x,A.e,A.j,0,x,x),A.b8,new B.a7(x,62,B.hN(x,new D.eHS(this),8,x,x,A.aP,new D.eHT(),!1),x)],v),A.F,x,A.e,A.j,0,A.p),A.f,x,x,C.b1v,x,x,x,x,N.Mz,x,x,x),A.y,!1,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,w,x,x,x,x,x,x,!1,A.a5)},
cwj(){var x,w,v,u,t=this,s=null,r=C.kd[t.d],q=t.a.e,p=y.p,o=B.a([B.p(s,C.eSg,A.f,s,s,new B.o(A.dn,s,s,B.n(12),s,s,A.n),s,s,s,s,A.y2,s,s,s),A.ab],p)
for(x=0;x<3;++x){w=C.dcA[x]
v=w==="Apps"?A.c:A.aA
o.push(new B.D(A.iq,new B.y(w,s,new B.H(!0,v,s,s,s,s,9.5,A.P,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s),s,s,s,s,s,s,s,s,s),s))}o.push(A.b8)
o.push(B.d(t.gae3(),s,s,s,s,s,s,C.fcF,s,s,s))
o=B.B(o,A.m,s,A.e,A.j,0,s,s)
v=r.d
u=B.ar(v,A.w,0.7)
u.toString
u=B.a([v,u],y.O)
v=B.n(10)
return B.aB(s,B.p(s,B.x(B.a([o,A.fF,B.E(B.B(B.a([B.E(B.p(s,B.x(B.a([B.d(r.b,s,s,s,s,s,s,A.pn,s,s,s),B.d(r.a,s,s,s,s,s,s,A.nF,s,s,s),B.d(r.c,s,2,A.a2,s,s,s,C.fiU,s,s,s),A.cV,B.aB(s,B.p(s,C.fp0,A.f,s,s,new B.o(A.c,s,s,B.n(10),s,s,A.n),s,s,s,s,A.y2,s,s,s),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new D.eHU(t),s,s,s,s,s,s,!1,A.a5)],p),A.F,s,A.m4,A.j,0,A.p),A.f,s,s,new B.o(s,s,s,v,s,new B.a9(A.a3,A.a8,A.x,u,s,s),A.n),s,s,s,s,A.cq,s,s,s),5),A.ab,B.E(B.im(!0,s,s,A.y,C.eYM,new D.eHV(t),8,A.af,s,A.ag,!1),6)],p),A.m,s,A.e,A.j,0,s,s),1)],p),A.F,s,A.e,A.j,0,A.p),A.f,C.bk2,s,s,s,s,s,s,A.fN,s,s,s),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,q,s,s,s,s,s,s,!1,A.a5)},
c7C(){var x,w,v,u,t=this,s=null,r=t.a.e,q=y.p,p=B.B(B.a([C.bRV,A.qx,C.fF5,A.b8,B.d(t.gae3(),s,s,s,s,s,s,A.DE,s,s,s)],q),A.m,s,A.e,A.j,0,s,s),o=B.a([],q)
for(x=0;x<8;++x){w=t.d===x
v=w?6:0
u=w?C.di2:A.QI
w=w?1.18:1
o.push(new B.D(A.eS,B.df(s,new B.yR(t.aZo(x,20,44,12,A.c,44),w,A.bd,A.eJ,s,s),s,s,A.bd,new B.o(s,s,s,s,u,s,A.n),A.eJ,s,s,new B.R(0,0,0,v),s,s,s,s),s))}return B.aB(s,B.p(s,B.x(B.a([p,A.b8,new B.a7(s,68,B.cd(B.B(o,A.dz,s,A.e,A.j,0,s,s),A.r,s,A.y,s,s,s,s,A.aP),s),A.au,B.d(C.kd[t.d].a,s,s,s,s,s,s,A.ox,s,s,s)],q),A.m,s,A.e,A.j,0,A.p),A.f,s,s,C.b1m,s,s,s,s,C.YW,s,s,s),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,r,s,s,s,s,s,s,!1,A.a5)},
bCM(){var x,w,v,u,t,s,r=this,q=null,p=r.a.e,o=C.kd[r.d],n=y.p
o=B.E(B.x(B.a([C.foz,A.b8,B.d(o.b,q,q,q,q,q,q,A.ou,q,q,q),A.au,B.d(o.a,q,q,q,q,q,q,C.f5c,q,q,q),A.bC,B.d(o.c,q,q,q,q,q,q,C.fjc,q,q,q),A.am,B.aB(q,B.p(q,C.fHc,A.f,q,q,C.b1S,q,q,q,q,C.bsa,q,q,q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new D.eHQ(r),q,q,q,q,q,q,!1,A.a5),A.b8],n),A.F,q,A.e,A.j,0,A.p),4)
x=B.p(q,q,A.f,C.bi_,q,q,q,q,q,A.h_,q,q,q,0.6)
w=B.a([],n)
for(v=0;v<8;++v){u=C.kd[v]
t=r.d===v
s=t?C.tp:C.adf
t=t?12:10.5
w.push(B.aB(q,new B.D(A.xP,new B.y(u.a,q,new B.H(!0,s,q,"serif",q,q,t,A.k7,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q),q,q,q,q,q,q,q,q,q),q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new D.eHR(r,v),q,q,q,q,q,q,!1,A.a5))}return B.aB(q,B.p(q,B.B(B.a([o,x,B.E(B.cw(w,q,q,q,q,A.ag,!1),3)],n),A.m,q,A.e,A.j,0,q,q),A.f,C.bno,q,q,q,q,q,q,A.FJ,q,q,q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,p,q,q,q,q,q,q,!1,A.a5)}}
var z=a.updateTypes(["~()","Wl(Y,br<K>,br<K>)","~(F)"])
D.fsC.prototype={
$1(d){var x=null,w=B.fN(x,x,1,x,B.cX(x,x,x,x,x,x,x,x,x,B.l(x,x,this.b,x,x,x,x,x,x,x,x,d,x,x,A.u,x,x,!0,x,x,x,x,x,x,x,x),this.a),A.a4,A.c4,x,A.dL,A.c3)
w.eh()
return w},
$S:479}
D.fsw.prototype={
$1(d){return Math.min(this.a*0.085,this.b*0.44/(d.length*0.62))},
$S:697}
D.fLl.prototype={
$1(d){var x=this.b,w=B.kv(this.a,x,d)
w.toString
x=B.kv(x,this.c,d)
x.toString
x=B.kv(w,x,d)
x.toString
return x},
$S:1962}
D.fff.prototype={
$2(d,e){return A.k.D((this.a-d)/e,0,1)},
$S:82}
D.ffc.prototype={
$1(d){return A.dA.az(0,d)},
$S:5}
D.ffe.prototype={
$2(d,e){var x=this.b
return new B.u(this.a.a+d*x,this.c.b-e*x)},
$S:402}
D.ffd.prototype={
$5(d,e,f,g,h){var x,w,v,u=this.a.$2(h,0.5)
if(u<=0)return
x=this.b
w=x.a
J.bv(w.save())
w.translate(f.a,f.b)
x.bZ(0,A.k.D(A.lL.az(0,u),0.01,1.3))
v=this.c
D.hsr(x,A.J,g,d,v,v>4.5?0.6:0)
D.hss(x,new B.u(0,g*1.42),g,e)
w.restore()},
$S:753}
D.fjU.prototype={
$1(d){var x=this,w=null,v=x.c?A.u:A.a7
v=B.fN(w,w,1,w,B.cX(w,w,w,w,w,w,w,w,w,B.l(w,w,x.b,w,w,w,w,w,w,w,w,d,w,w,v,w,w,!0,w,x.d,w,w,w,w,w,w),x.a),A.a4,A.c4,w,A.dL,A.c3)
v.eh()
return v},
$S:479}
D.fhw.prototype={
$1(d){var x=this,w=null,v=x.c?A.u:A.P
v=B.fN(w,w,1,w,B.cX(w,w,w,w,w,w,w,w,w,B.l(w,w,x.b,w,w,w,w,w,w,w,w,d,w,w,v,w,w,!0,w,x.d,w,w,w,w,w,w),x.a),A.a4,A.c4,w,A.dL,A.c3)
v.eh()
return v},
$S:479}
D.fsT.prototype={
$2(d,e){return A.k.D((this.a-d)/e,0,1)},
$S:82}
D.fsP.prototype={
$1(d){return A.dA.az(0,d)},
$S:5}
D.fsS.prototype={
$2(d,e){var x=this.b
return new B.u(this.a+d*x,e*x)},
$S:402}
D.fsQ.prototype={
$5(d,e,f,g,h){var x,w,v,u=this,t=u.a.$2(h,0.6)
if(t<=0)return
x=u.b
w=x.a
J.bv(w.save())
w.translate(f.a,f.b)
x.bZ(0,A.k.D(A.lL.az(0,t),0.01,1.3))
v=u.c
D.hsr(x,A.J,g,d,v,u.d>9.5?0.5+0.3*Math.sin(v*3+d):0)
D.hss(x,new B.u(0,g*1.42),g,e)
w.restore()},
$S:753}
D.fsR.prototype={
$3(d,e,f){var x,w,v,u,t=this.a.$2(f,0.5)
if(t<=0)return
x=A.k.D(A.lL.az(0,t),0.01,1.3)*(1+0.07*Math.sin(this.b*6))
w=this.c
v=e*x
$.W()
u=B.N()
u.r=A.bD.gp(0)
w.ae(d,v,u)
u=B.N()
u.b=A.ae
u.c=2
u.r=A.c.gp(0)
w.ae(d,v,u)
D.Go(w,"\u2665",d.aB(0,new B.u(e*0.5*x,e*0.62*x)),e*1.3*x,A.c,A.bi,0,null)},
$S:448}
D.fsU.prototype={
$2(d,e){var x,w,v=this.a,u=v.a
v=v.c-u
u+=v*0.08
x=this.b
w=x*d
return new B.a8(u,w,u+v*0.84,w+x*e)},
$S:1964}
D.fTo.prototype={
$3(d,e,f){var x=this
return new D.Wl(x.d,x.e,x.a,x.c,x.b,null)},
$C:"$3",
$R:3,
$S:z+1}
D.fTp.prototype={
$4(d,e,f,g){var x=y.t
return new B.d0(e,!1,B.is(A.A,g,null,new B.bf(B.cH(A.cu,e,null),new B.bq(0.85,1,x),x.k("bf<bJ.T>"))),null)},
$C:"$4",
$R:4,
$S:33}
D.eI1.prototype={
$0(){var x=this.a
if(x.c!=null&&!x.r)x.m(new D.eI0(x))},
$S:0}
D.eI0.prototype={
$0(){return this.a.y=!1},
$S:0}
D.eI_.prototype={
$0(){var x,w=this.a
w.f=-1
w.e=A.o.E(w.gDk()+this.b,10)
if(w.gDk()<0)w.e=w.gDk()+10
x=w.gae2().y
x=x==null?null:A.o.am(x.a,1000)
w.x=x==null?0:x
w.aj_()},
$S:0}
D.eI2.prototype={
$0(){var x=this.a
x.f=this.b
x.r=!1
x.aj_()},
$S:0}
D.eIb.prototype={
$0(){var x=this.a
return x.m(x.gcBp())},
$S:0}
D.eIa.prototype={
$2(d,e){var x=null,w=this.a,v=w.gae2().y,u=v==null?x:A.o.am(v.a,1000),t=(u==null?0:u)/1000,s=w.x===0&&w.a.f?t:99
return B.b3(x,x,x,new D.buC(w.gDk(),w.f,t,s,x),A.f6)},
$S:71}
D.eI9.prototype={
$5$color$on(d,e,f,g,h){var x=null,w=h?g.j(0.28):A.c.j(0.08),v=B.n(14),u=B.I(h?g:A.aZ,A.q,1)
return B.aB(x,B.p(x,B.x(B.a([B.X(d,g,x,x,x,20),A.uS,B.d(e,x,x,x,x,x,x,B.l(x,x,g,x,x,x,x,x,x,x,x,9.5,x,x,A.H,x,x,!0,x,x,x,x,x,x,x,x),x,x,x)],y.p),A.m,x,A.e,A.N,0,A.p),A.f,x,x,new B.o(w,x,u,v,x,x,A.n),x,x,x,A.jr,A.kZ,x,x,56),A.y,!1,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,f,x,x,x,x,x,x,!1,A.a5)},
$3(d,e,f){return this.$5$color$on(d,e,f,A.c,!1)},
$4$color(d,e,f,g){return this.$5$color$on(d,e,f,g,!1)},
$S:1965}
D.eI4.prototype={
$0(){return this.a.ax_(-1)},
$S:0}
D.eI5.prototype={
$0(){return this.a.ax_(1)},
$S:0}
D.eI6.prototype={
$0(){return this.a.ax_(0)},
$S:0}
D.eI7.prototype={
$0(){var x=this.a
return x.m(new D.eI3(x))},
$S:0}
D.eI3.prototype={
$0(){var x=this.a
x.r=!x.r
x.aj_()},
$S:0}
D.eI8.prototype={
$0(){return this.a.b08(0)},
$S:0}
D.eHZ.prototype={
$0(){var x=this.a
return x.m(new D.eHY(x))},
$S:0}
D.eHY.prototype={
$0(){return this.a.r=!1},
$S:0}
D.eHW.prototype={
$0(){return this.a.d=this.b},
$S:0}
D.eHX.prototype={
$0(){return this.a.aZn(this.b)},
$S:0}
D.eHT.prototype={
$2(d,e){return A.bp},
$S:37}
D.eHS.prototype={
$2(d,e){var x=null,w=this.a,v=w.d===e?1.1:1
v=B.a([B.vw(w.aZo(e,18,46,6,A.c,80),A.bd,A.fB,v)],y.p)
if(w.d===e)v.push(new B.D(A.vz,B.d(C.kd[e].a,x,x,x,x,x,x,C.fhq,x,x,x),x))
return B.x(v,A.m,x,A.e,A.N,0,A.p)},
$S:675}
D.eHU.prototype={
$0(){var x=this.a
return x.a.a5z(0,x.d)},
$S:0}
D.eHV.prototype={
$2(d,e){return this.a.ax0(e,15,1/0,!0,8,A.c,1/0)},
$S:41}
D.eHQ.prototype={
$0(){var x=this.a
return x.a.a5z(0,x.d)},
$S:0}
D.eHR.prototype={
$0(){return this.a.aZn(this.b)},
$S:0}
D.cgI.prototype={
$2(d,e){var x,w,v,u
for(x=e.length,w=this.a,v=w.$flags|0,u=0;u<x;++u){v&2&&B.aj(w,9)
w.setUint8(d+u,e.charCodeAt(u))}},
$S:468}
D.cgK.prototype={
$0(){var x=this
return D.hKY(x.a,x.b,x.c,x.d,x.e)},
$S:298};(function aliases(){var x=D.aMk.prototype
x.bwn=x.q})();(function installTearOffs(){var x=a._instance_0u,w=a._instance_1u
var v
x(v=D.aEv.prototype,"gaZm","c7A",0)
x(v,"gcBp","aj_",0)
w(v,"gcdd","b08",2)})();(function inheritance(){var x=a.mixinHard,w=a.inheritMany,v=a.inherit
w(B.i0,[D.fsC,D.fsw,D.fLl,D.ffc,D.ffd,D.fjU,D.fhw,D.fsP,D.fsQ,D.fsR,D.fTo,D.fTp,D.eI9])
w(B.ko,[D.fff,D.ffe,D.fsT,D.fsS,D.fsU,D.eIa,D.eHT,D.eHS,D.eHV,D.cgI])
w(B.aD,[D.wt,D.vW,D.xM])
w(B.ag,[D.Wl,D.arU])
w(B.ah,[D.aMk,D.bkL])
v(D.aEv,D.aMk)
w(B.ja,[D.eI1,D.eI0,D.eI_,D.eI2,D.eIb,D.eI4,D.eI5,D.eI6,D.eI7,D.eI3,D.eI8,D.eHZ,D.eHY,D.eHW,D.eHX,D.eHU,D.eHQ,D.eHR,D.cgK])
v(D.buC,B.mP)
x(D.aMk,B.ca)})()
B.k4(b.typeUniverse,JSON.parse('{"Wl":{"ag":[],"t":[]},"aEv":{"ah":["Wl"]},"buC":{"aC":[]},"arU":{"ag":[],"t":[]},"bkL":{"ah":["arU"]},"Nm":{"ag":[],"t":[]}}'))
var y=(function rtii(){var x=B.ax
return{L:x("O<a31>"),V:x("O<ac>"),O:x("O<w>"),v:x("O<hv>"),C:x("O<+(K,K,K)>"),s:x("O<m>"),p:x("O<t>"),n:x("O<K>"),t:x("bq<K>"),i:x("K"),S:x("F"),H:x("~")}})();(function constants(){var x=a.makeConstList
C.bbh=new B.w(1,0.0196078431372549,0.03137254901960784,0.058823529411764705,A.t)
C.blD=new B.w(1,0.043137254901960784,0.10196078431372549,0.2,A.t)
C.d9l=x([C.bbh,C.blD],y.O)
C.c_g=new B.a9(A.b1,A.b5,A.x,C.d9l,null,null)
C.b1k=new B.o(null,null,null,null,null,C.c_g,A.n)
C.bjq=new B.w(1,0.42745098039215684,0.47843137254901963,0.5764705882352941,A.t)
C.b9B=new B.w(1,0.16862745098039217,0.1803921568627451,0.26666666666666666,A.t)
C.baB=new B.w(1,0.4823529411764706,0.29411764705882354,0.41568627450980394,A.t)
C.dla=x([C.bjq,C.b9B,C.baB],y.O)
C.bYB=new B.a9(A.az,A.aC,A.x,C.dla,null,null)
C.b1m=new B.o(null,null,null,null,null,C.bYB,A.n)
C.aXZ=new B.dc(0.5,-0.6)
C.bmR=new B.w(1,0.22745098039215686,0.054901960784313725,0.10980392156862745,A.t)
C.d4H=x([C.bmR,A.ee],y.O)
C.ekt=new B.bS(C.aXZ,1.3,A.x,null,0,C.d4H,null,null)
C.b1v=new B.o(null,null,null,null,null,C.ekt,A.n)
C.tp=new B.w(1,0.8392156862745098,0.7176470588235294,0.4823529411764706,A.t)
C.b_B=new B.az(C.tp,1,A.q,-1)
C.b_O=new B.bO(A.a0,A.a0,C.b_B,A.a0)
C.b1S=new B.o(null,null,C.b_O,null,null,null,A.n)
C.acO=new B.w(0.9490196078431372,0.06666666666666667,0.07450980392156863,0.09411764705882353,A.t)
C.b9d=new B.w(1,0.16470588235294117,0.16470588235294117,0.17647058823529413,A.t)
C.b9g=new B.w(1,0.00784313725490196,0.01568627450980392,0.03529411764705882,A.t)
C.adf=new B.w(1,0.6588235294117647,0.6235294117647059,0.5647058823529412,A.t)
C.AF=new B.w(1,0.12156862745098039,0.07058823529411765,0.03529411764705882,A.t)
C.Wr=new B.w(1,0.24705882352941178,0.5607843137254902,0.30196078431372547,A.t)
C.Ez=new B.w(1,0.7215686274509804,0.6980392156862745,0.6549019607843137,A.t)
C.adV=new B.w(1,0.8784313725490196,0.6745098039215687,0.4117647058823529,A.t)
C.aeb=new B.w(1,0.00784313725490196,0.011764705882352941,0.0392156862745098,A.t)
C.be7=new B.w(1,0.24705882352941178,0.11372549019607843,0.043137254901960784,A.t)
C.EU=new B.w(1,0.06666666666666667,0.0784313725490196,0.09411764705882353,A.t)
C.bgl=new B.w(1,0.011764705882352941,0.023529411764705882,0.09019607843137255,A.t)
C.AS=new B.w(1,0.09019607843137255,0.09019607843137255,0.10196078431372549,A.t)
C.AU=new B.w(1,0.054901960784313725,0.07058823529411765,0.09411764705882353,A.t)
C.bi_=new B.w(1,0.2901960784313726,0.26666666666666666,0.23529411764705882,A.t)
C.jG=new B.w(1,0.043137254901960784,0.12156862745098039,0.29411764705882354,A.t)
C.kW=new B.w(1,0.09019607843137255,0.09019607843137255,0.10980392156862745,A.t)
C.bk_=new B.w(1,0.1843137254901961,0.43529411764705883,0.23137254901960785,A.t)
C.bk2=new B.w(1,0.08627450980392157,0.09411764705882353,0.10980392156862745,A.t)
C.bky=new B.w(1,0.24705882352941178,0.3843137254901961,0.07058823529411765,A.t)
C.fq=new B.w(1,0.9607843137254902,0.7568627450980392,0.29411764705882354,A.t)
C.XN=new B.w(1,1,0.41568627450980394,0,A.t)
C.na=new B.w(1,0.10588235294117647,0.10588235294117647,0.12156862745098039,A.t)
C.oP=new B.w(1,0.5529411764705883,0.3333333333333333,0.1411764705882353,A.t)
C.XU=new B.w(1,1,0.9529411764705882,0.6274509803921569,A.t)
C.agL=new B.w(1,0.8392156862745098,0.7254901960784313,0.5490196078431373,A.t)
C.bno=new B.w(1,0.10196078431372549,0.09019607843137255,0.0784313725490196,A.t)
C.bsa=new B.R(0,0,0,1)
C.tP=new B.R(0,0,7,0)
C.bt1=new B.R(10,10,10,0)
C.YW=new B.R(10,6,10,8)
C.ai8=new B.R(14,10,10,10)
C.alC=new B.a0(62970,"MaterialIcons",!1)
C.amA=new B.a0(983316,"MaterialIcons",!1)
C.uh=new B.a0(983617,"MaterialIcons",!1)
C.bNe=new B.ae(A.C2,13,A.ad,null,null,null)
C.bRj=new B.ae(A.fg,13,A.ad,null,null,null)
C.bIR=new B.a0(983768,"MaterialIcons",!1)
C.bRV=new B.ae(C.bIR,13,A.c,null,null,null)
C.cEn=x([A.aM,A.jl,A.qY],y.O)
C.bXp=new B.a9(A.b1,A.b5,A.x,C.cEn,null,null)
C.bXv=new B.a9(A.b1,A.b5,A.x,I.Qf,null,null)
C.cZ5=x([A.fc,A.dO,A.ct],y.O)
C.bXI=new B.a9(A.b1,A.b5,A.x,C.cZ5,null,null)
C.cXm=x([A.dQ,A.av],y.O)
C.bYo=new B.a9(A.b1,A.b5,A.x,C.cXm,null,null)
C.L7=new B.w(1,0.11764705882352941,0.30980392156862746,0.6392156862745098,A.t)
C.cDU=x([C.jG,C.L7,A.aE,A.bL],y.O)
C.dcR=x([0,0.42,0.8,1],y.n)
C.bYD=new B.a9(A.b1,A.b5,A.x,C.cDU,C.dcR,null)
C.dki=x([A.bN,A.c,A.bK],y.O)
C.bYF=new B.a9(A.a3,A.a8,A.x,C.dki,null,null)
C.dkS=x([A.fX,A.fV],y.O)
C.bZu=new B.a9(A.b1,A.b5,A.x,C.dkS,null,null)
C.dc6=x([A.ds,A.oO],y.O)
C.bZB=new B.a9(A.b1,A.b5,A.x,C.dc6,null,null)
C.c_C=new B.a9(A.b1,A.b5,A.x,F.avn,null,null)
C.d7o=x([A.aL,A.ak],y.O)
C.c01=new B.a9(A.b1,A.b5,A.x,C.d7o,null,null)
C.c0V=x(["Add every person","Link mums, dads, kids","Keep it for ever"],y.s)
C.apJ=x([1],y.n)
C.cdA=x([1,2,3],y.n)
C.atm=x([1,-1],y.n)
C.SV=new B.z(2,3)
C.SW=new B.z(3,4)
C.ckF=x([A.lY,A.yi],B.ax("O<a0>"))
C.ckR=x([-0.05,0.05],y.n)
C.e9y=new B.u(26,-8)
C.ea0=new B.u(52,0)
C.e9x=new B.u(26,8)
C.cld=x([A.J,C.e9y,C.ea0,C.e9x],B.ax("O<u>"))
C.ava=x([A.bU,A.aM,A.dQ,A.b_,A.ct],y.O)
C.cDe=x([1,2,3,4,5,6,7],y.n)
C.eN3=new B.bh(-0.2,0.46,0.12)
C.eKB=new B.bh(0.2,0.46,0.12)
C.eLm=new B.bh(0,0.52,0.15)
C.eJV=new B.bh(0,0.7,0.1)
C.cEB=x([C.eN3,C.eKB,C.eLm,C.eJV],y.C)
C.bmg=new B.w(1,0.6627450980392157,0.4392156862745098,0.22745098039215686,A.t)
C.bkj=new B.w(1,0.3607843137254902,0.22745098039215686,0.12941176470588237,A.t)
C.bd0=new B.w(1,0.47843137254901963,0.2901960784313726,0.1568627450980392,A.t)
C.cIs=x([C.oP,A.xA,C.bmg,C.bkj,C.oP,C.bd0],y.O)
C.cQf=x([A.f1,A.bL,A.LL,A.ek],y.O)
C.cRt=x([1,2.76,5.4,8.93,13.3],y.n)
C.awa=x([A.ct,A.bH,A.bU,A.b_],y.O)
C.cSE=x([1,0.6,0.38,0.22,0.12],y.n)
C.erS=new B.z("Chairs",120)
C.erV=new B.z("Cloth",80)
C.esc=new B.z("Delivery",25)
C.awv=x([C.erS,C.erV,C.esc],B.ax("O<+(m,F)>"))
C.cWV=x([1,0.7,0.45,0.28,0.16,0.1,0.06],y.n)
C.cWW=x([1,0.55,0.32,0.2,0.12,0.07],y.n)
C.d_S=x([A.i4,A.kU,A.bL,A.iJ,A.xq,A.pB],y.O)
C.e3m=new D.xM("NGMY Tree Story","A family grows, one branch at a time")
C.e3h=new D.xM("Coin Hero","A little coin saves up and wins the day")
C.e3p=new D.xM("Space Voyage","The NGMY rocket explores the stars")
C.e3g=new D.xM("Ocean Friends","Fish, bubbles and a friendly whale")
C.e3i=new D.xM("Rainy Village","Storm clouds, then a rainbow")
C.e3k=new D.xM("Spark Adventure","Follow a spark round a circuit")
C.e3j=new D.xM("Fireworks Night","Colour bursts over the city")
C.e3o=new D.xM("Little Train","A train rolls past the hills")
C.e3l=new D.xM("Robot Disco","A robot dances to the beat")
C.e3n=new D.xM("Garden Time","Flowers grow and butterflies fly")
C.Qm=x([C.e3m,C.e3h,C.e3p,C.e3g,C.e3i,C.e3k,C.e3j,C.e3o,C.e3l,C.e3n],B.ax("O<xM>"))
C.d01=x([1,0.6,0.45,0.3,0.22,0.15],y.n)
C.axc=x([A.bU,A.bH,A.av,A.bu,A.ct],y.O)
C.d1c=x([1,2,3,4,5,6],y.n)
C.d2H=x([A.fX,A.oO],y.O)
C.d2J=x([A.bj,A.aE,A.cT],y.O)
C.duW=new D.vW("NGMY Ads","\ud83d\udce2","Every NGMY promotion, as cartoons",A.bU,-1)
C.duU=new D.vW("Civic Registry","\ud83e\udeaa","Enroll your family in your community",A.d_,0)
C.duX=new D.vW("Jobs","\ud83d\udcbc","Find work and get hired",A.aE,1)
C.duZ=new D.vW("NGMY Store","\ud83d\udecd\ufe0f","African food and traditions",A.fl,2)
C.dv_=new D.vW("Kiswahili","\ud83d\udde3\ufe0f","Learn Swahili and English",A.bT,3)
C.duY=new D.vW("Doc Scanner","\ud83d\udcc4","Scan, save and share",A.cb,4)
C.duV=new D.vW("Invoices","\ud83e\uddfe","Professional invoices",A.bD,5)
C.duT=new D.vW("Calendar","\ud83d\udcc5","This month, today lit up",A.av,-2)
C.kd=x([C.duW,C.duU,C.duX,C.duZ,C.dv_,C.duY,C.duV,C.duT],B.ax("O<vW>"))
C.eyS=new B.z("Jambo! Habari yako?","Nzuri, asante!")
C.esl=new B.z("Jina lako nani?","Jina langu ni Amina.")
C.et3=new B.z("Karibu nyumbani!","Asante sana!")
C.eyR=new B.z("Naenda shule leo.","I am going to school.")
C.ezV=new B.z("Ninapenda kujifunza!","I love to learn!")
C.eJ3=new B.z("Maji, tafadhali.","Water, please.")
C.ewR=new B.z("Rafiki yangu mpendwa","My dear friend")
C.eBv=new B.z("Tuonane kesho!","See you tomorrow!")
C.eCr=new B.z("Pole sana, rafiki.","I am so sorry, friend.")
C.eyQ=new B.z("Hongera! Umefaulu!","Congratulations! You passed!")
C.euh=new B.z("Mimi ni mwanafunzi.","I am a student.")
C.eoV=new B.z("Chakula kitamu sana!","The food is so delicious!")
C.eID=new B.z("Safari njema!","Have a good trip!")
C.el8=new B.z("Unaongea Kiswahili vizuri!","You speak Swahili well!")
C.axp=x([C.eyS,C.esl,C.et3,C.eyR,C.ezV,C.eJ3,C.ewR,C.eBv,C.eCr,C.eyQ,C.euh,C.eoV,C.eID,C.el8],B.ax("O<+(m,m)>"))
C.eM2=new B.bh(-0.3,0.32,0.2)
C.eK0=new B.bh(-0.08,0.17,0.22)
C.eK1=new B.bh(0.14,0.14,0.2)
C.eLu=new B.bh(0.34,0.3,0.2)
C.eNu=new B.bh(0,0.32,0.26)
C.eLc=new B.bh(-0.42,0.46,0.15)
C.eNp=new B.bh(0.42,0.46,0.15)
C.eMh=new B.bh(0,0.07,0.15)
C.axq=x([C.eM2,C.eK0,C.eK1,C.eLu,C.eNu,C.eLc,C.eNp,C.eMh],y.C)
C.h4g=new D.wt("NGMY Civic Registry","Enroll your family. Stay counted and helped together.",A.d5,A.aM)
C.h4u=new D.wt("NGMY Jobs","Find work. Get hired. Get paid.",A.d6,A.aN)
C.h4r=new D.wt("NGMY Store","African food and traditions. Support our Congolese and African community.",A.k3,A.bH)
C.h4m=new D.wt("Kiswahili School","Learn Swahili and English, step by step.",A.cQ,A.n9)
C.h4j=new D.wt("Document Scanner","Scan, save and share your papers.",A.pP,A.h6)
C.h4h=new D.wt("Invoice Creator","Make professional invoices in minutes.",A.tj,A.nP)
C.h4d=new D.wt("Family Book and Tree","Write your family story. Grow your tree.",A.j1,A.KV)
C.h4f=new D.wt("NGMY Wallet","Save, send and earn coins.",A.pJ,A.dQ)
C.h4i=new D.wt("Vault Games","Play, win and learn.",A.dM,A.b7)
C.h4s=new D.wt("Electronics Lab","Build real circuits and learn.",A.f3,A.b3)
C.h4n=new D.wt("NGMY Helper and Advisors","Friendly help, any time.",A.lP,A.ct)
C.d6c=x([C.h4g,C.h4u,C.h4r,C.h4m,C.h4j,C.h4h,C.h4d,C.h4f,C.h4i,C.h4s,C.h4n],B.ax("O<wt>"))
C.dc7=x([A.dM,A.fc],y.O)
C.dcA=x(["For you","Apps","Library"],y.s)
C.ayl=x([A.bz,A.bH,A.cT,A.aw],y.O)
C.ayp=x([-16,16],y.n)
C.jw=x([-1,1],y.n)
C.QZ=x([-22,22],y.n)
C.a3E=x([-24,24],y.n)
C.a3G=x([-5,5],y.n)
C.ayv=x([-8,8],y.n)
C.dfF=x([A.aJ,A.ak],y.O)
C.dfJ=x([1,2,3,4,6,8],y.n)
C.dgA=x([1,0.5,0.33,0.25,0.2,0.16,0.14,0.12],y.n)
C.b3N=new B.ac(0,A.G,A.aW,A.dp,14)
C.di2=x([C.b3N],y.V)
C.di3=x([A.dO,A.dM,A.aF,A.cQ,A.aE,A.bz],y.O)
C.dii=x([1,2,3,4,5,6,7,8],y.n)
C.djN=x([A.av,A.cc,A.bH,A.bc,A.d_,A.b6],y.O)
C.dkL=x(["M","T","W","T","F","S","S"],y.s)
C.dlZ=x([A.c,A.nS],y.O)
C.dmH=x([1,0.18,0.06],y.n)
C.e6s={"SPARK PAINTER":0,"MANDALA MAKER":1,"TITLE ANIMATOR":2,"PALETTE LAB":3,"GRAVITY TOY":4,"ORBIT STUDIO":5,"SWARM STUDIO":6,"FIREWORK DESIGNER":7,"CHAIN BURST":8,"CIRCUIT LAB":9,"PERIODIC TABLE":10,"BODY EXPLORER":11,"SPIN THE WHEEL":12,"FOCUS TIMER":13,"MEMORY MATCH":14,"LUCKY POCKET":15,"ELECTRONICS LAB":16,"CONSTRUCTION LAB":17,"AI INVENTOR":18,"MAGNET LAB":19,"RADIO LAB":20,"POWER PLANT":21,"POWER GRID":22,"INTERNET JOURNEY":23,"ROBOT CODER":24,"BUG SMASHER":25,"ROCKET LANDER":26,"DATA SNAKE":27,"BINARY 2048":28,"SIGNAL BREAKER":29,"PASSWORD LAB":30,"WAVE LAB":31,"BUG HUNT":32,"MOLECULE MAKER":33,"DNA LAB":34,"ECOSYSTEM LAB":35,"BALANCE LAB":36,"GEAR LAB":37,"OPTICS LAB":38,"LASER MAZE":39,"LIGHT MIXER":40,"ATOM BUILDER":41,"CIPHER LAB":42,"PIXEL TV":43}
C.aEz=new B.bl(C.e6s,["sparkle","sparkle","whoosh","click","bounce","space","bubble","pop","zap","tech","lab","organic","click","tech","bubble","click","tech","tech","tech","tech","tech","tech","tech","tech","tech","pop","space","bubble","click","zap","click","tech","click","lab","organic","organic","click","tech","sparkle","zap","sparkle","lab","tech","tech"],B.ax("bl<m,m>"))
C.HQ=new B.bl(A.i_,[],B.ax("bl<F,m>"))
C.acV=new B.w(1,0.16862745098039217,0.1843137254901961,0.21176470588235294,A.t)
C.dsk=new B.hC(A.G,1.2)
C.clh=x([A.f1,A.ey,A.kx],y.O)
C.ek8=new B.bS(G.pv,0.5,A.x,null,0,C.clh,null,null)
C.cBc=x([A.lm,A.n1],y.O)
C.eka=new B.bS(F.aaz,0.5,A.x,null,0,C.cBc,null,null)
C.bSq=new B.ae(A.fg,11,A.ad,null,null,null)
C.ffq=new B.H(!0,A.aS,null,null,null,null,9,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.fC5=new B.y("Search",null,C.ffq,null,null,null,null,null,null,null,null,null)
C.cFB=x([C.bSq,A.qx,C.fC5],y.p)
C.eSg=new B.ci(A.aP,A.e,A.j,A.m,null,A.p,null,0,C.cFB,null)
C.eYM=new B.hQ(3,5,5,1.35,null)
C.bmb=new B.w(1,0.9450980392156862,0.9098039215686274,0.8470588235294118,A.t)
C.f5c=new B.H(!0,C.bmb,null,"serif",null,null,15,A.k7,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.fcF=new B.H(!0,A.ad,null,null,null,null,9.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.fdh=new B.H(!0,A.aS,null,null,null,null,9.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.U5=new B.H(!0,A.ad,null,null,null,null,12.5,null,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.aRs=new B.H(!0,A.ad,null,null,null,null,10,A.P,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.fhq=new B.H(!0,A.c,null,null,null,null,8.5,A.P,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.DK=new B.H(!0,A.ad,null,null,null,null,12.5,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.fiU=new B.H(!0,A.ad,null,null,null,null,8.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.fjc=new B.H(!0,C.adf,null,null,null,null,8.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.fa7=new B.H(!0,A.aA,null,null,null,null,9.5,A.P,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.flq=new B.y("NGMY Apps",null,C.fa7,null,null,null,null,null,null,null,null,null)
C.a8f=new B.H(!0,A.aA,null,null,null,null,12.5,null,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.f6O=new B.H(!0,C.tp,null,null,null,null,8,A.a7,null,3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.foz=new B.y("BANG & OLUFSEN",null,C.f6O,null,null,null,null,null,null,null,null,null)
C.fcp=new B.H(!0,A.w,null,null,null,null,9,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.fp0=new B.y("Open",null,C.fcp,null,null,null,null,null,null,null,null,null)
C.fs6=new B.y("Home",null,C.aRs,null,null,null,null,null,null,null,null,null)
C.ft8=new B.y("SAMSUNG",null,A.aRa,null,null,null,null,null,null,null,null,null)
C.fz9=new B.y("LG",null,A.wF,null,null,null,null,null,null,null,null,null)
C.fF5=new B.y("tv",null,A.qB,null,null,null,null,null,null,null,null,null)
C.fa1=new B.H(!0,C.tp,null,null,null,null,8.5,null,null,2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.fHc=new B.y("OPEN",null,C.fa1,null,null,null,null,null,null,null,null,null)})();(function staticFields(){$.hKX=B.U(B.ax("m"),B.ax("dL"))
$.cgH=B.a([],B.ax("O<aiu>"))
$.hfe=0
$.arR="music"})()};
(a=>{a["7xKv/bvlLo4fWXe+/F9C09gZx9Q="]=a.current})($__dart_deferred_initializers__);