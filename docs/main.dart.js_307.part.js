((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,A,G,E,H,I,K,F,L,D={
Gj(d,e){var x
$.W()
x=B.N()
x.b=A.ae
x.c=e
x.r=d.gp(0)
x.d=A.bT
return x},
rV(d,e,f,g,h,i){var x=new D.fsp(e,h,!0),w=x.$1(g),v=w.b.c
if(v>i&&v>0)w=x.$1(Math.max(2,g*i/v))
x=w.b
v=x.c
x=x.a.c
w.a3(d,f.aC(0,new B.v(v/2,x.gbc(x)/2)))},
CS(a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=a6.a
J.by(a5.save())
a5.translate(a7.a,a7.b-b1)
x=B.ce(new B.v(0,b1+a8*0.005),a8*0.06,a8*0.45)
w=A.w.j(0.22)
$.W()
v=B.N()
v.r=w.gp(0)
a6.hZ(x,v)
for(x=a8*0.05,w=-a8,v=w*0.24,u=a8*0.1,t=v+a8*0.2,s=a8*0.04,r=a8*0.065,q=w*0.05,p=a8*0.14,o=q+x,n=a8*0.025,m=0;m<2;++m){l=C.ly[m]*a8*0.075
k=l-x
k=B.bw(new B.a8(k,v,k+u,t),new B.aS(s,s))
j=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
j.r=A.d5.gp(0)
i=j.H()
a5.drawRRect(B.er(k),i)
i.delete()
l-=r
l=B.bw(new B.a8(l,q,l+p,o),new B.aS(n,n))
k=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
k.r=A.c.gp(0)
i=k.H()
a5.drawRRect(B.er(l),i)
i.delete()}x=w*0.16
v=w*0.52
u=a8*0.32
t=x+u
r=a8*0.09
h=B.bw(new B.a8(x,v,t,v+u),new B.aS(r,r))
r=B.N()
r.r=b3.gp(0)
a6.aE(h,r)
r=w*0.27
u=a8*0.02
u=B.bw(new B.a8(x,r,t,r+a8*0.045),new B.aS(u,u))
r=A.c.j(0.35)
t=B.N()
t.r=r.gp(0)
a6.aE(u,t)
t=w*0.47
g=new B.v(w*0.15,t)
f=new B.v(a8*0.15,t)
t=w*0.06
u=a8*0.07
a6.bE(g,g.ad(0,new B.v(t,a8*0.17)),D.Gj(b4,u))
t=g.ad(0,new B.v(t,a8*0.18))
r=B.N()
r.r=b4.gp(0)
a6.af(t,s,r)
e=b0?-2.5+b6*0.5:0.5-b6*2.2
d=f.ad(0,new B.v(Math.sin(e)*a8*0.2,Math.cos(e)*a8*0.2))
a6.bE(f,d,D.Gj(b4,u))
x=B.N()
x.r=b4.gp(0)
a6.af(d,s,x)
w*=0.7
a0=new B.v(0,w)
a1=a8*0.22
if(b2===1){x=a0.ad(0,new B.v(0,-a1*0.12))
v=B.N()
v.r=C.Eu.gp(0)
a6.af(x,a1*1.18,v)}x=B.N()
x.r=b4.gp(0)
a6.af(a0,a1,x)
if(b2===0){x=B.bW(a0,a1)
v=B.N()
v.r=C.Eu.gp(0)
a6.fa(x,3.141592653589793,3.141592653589793,!0,v)}else if(b2===2){x=B.bW(a0,a1)
v=B.N()
v.r=C.Eu.gp(0)
a6.fa(x,3.141592653589793,3.141592653589793,!0,v)
for(x=w+a1*0.3,v=a1*0.2,m=0;m<2;++m){a2=C.ly[m]
u=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
u.r=C.Eu.gp(0)
i=u.H()
a5.drawCircle(0+a2*a1*1.05,x,v,i)
i.delete()}}a3=A.k.E(a9*0.8,3)>2.85
for(x=w+a1*0.42,v=a1*0.12,u=a1*0.25,t=a9*0.7,s=a1*0.13,w+=a1*0.05,r=-a1*0.15,q=w+0,p=a1*0.15,m=0;m<2;++m){o=C.ly[m]*a1
n=0+o*0.4
if(a3){l=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
l.b=A.ae
l.c=1.6
l.r=A.bk.gp(0)
l.d=A.bT
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
n.r=A.iX.j(0.5).gp(0)
i=n.H()
a5.drawCircle(0+o*0.62,x,v,i)
i.delete()}x=a1*0.5
a4=a0.ad(0,new B.v(0,x))
w=a1*0.4
if(b5){x=B.ce(a4,w*(0.35+0.65*((Math.sin(a9*12)+1)/2)),x)
w=B.N()
w.r=A.es.gp(0)
a6.hZ(x,w)}else a6.fa(B.ce(a4.aC(0,new B.v(0,a1*0.1)),w,a1*0.65),0.2,2.741592653589793,!1,D.Gj(A.bk,1.8))
a5.restore()},
aOq(d,e,f,g,h,i){var x,w,v,u,t,s,r,q=null
if(h<=0)return
x=d.a
J.by(x.save())
x.translate(e.a,e.b)
d.bZ(0,A.k.D(A.mV.az(0,A.k.D(h,0,1)),0.01,1.3))
w=B.fZ(q,q,q,q,B.d0(q,q,q,q,q,q,q,q,q,B.l(q,q,A.aw,q,q,q,q,q,q,q,q,g,q,q,A.u,q,q,!0,q,q,q,q,q,q,q,q),f),A.a4,A.c6,q,A.dO,A.c3)
w.en()
v=w.b
u=v.c
v=v.a.c
t=g*0.8
s=B.bw(B.ce(A.J,v.gbc(v)+g*0.7,u+g*1.1),new B.aS(t,t))
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
d.aR(t,r)
r=w.b
t=r.c
r=r.a.c
w.a3(d,new B.v(-t/2,-r.gbc(r)/2))
x.restore()},
h0t(d,e,f,g){var x,w=A.k.D(Math.abs(Math.cos(g)),0.15,1),v=f*2,u=v*w,t=B.ce(e,v,u)
$.W()
x=B.N()
x.r=A.bH.gp(0)
d.hZ(t,x)
d.hZ(B.ce(e,v,u),D.Gj(A.pH,f*0.18))
if(w>0.5)D.rV(d,"$",e,f*1.2,A.pH,9999)},
hTB(d,e,f,g){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=new B.eE()
k.dt(4)
for(x=e.a,w=f-g,v=e.b,u=d.a,t=f*3,s=v*0.025,r=v*0.012,q=0;q<18;++q){p=k.aj()
o=A.k.E(w*(40+k.aj()*60)+k.aj()*v,v)
J.by(u.save())
u.translate(p*x,o)
u.rotate((t+q)*180/3.141592653589793,0,0)
p=B.ce(A.J,r,s)
n=C.av8[A.o.E(q,5)]
$.W()
m=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
m.r=n.gp(0)
l=m.H()
u.drawRect(B.c_(p),l)
l.delete()
u.restore()}},
i2k(d,e,f,g){switch(A.o.E(f,11)){case 0:D.hTd(d,e,g)
break
case 1:D.hW9(d,e,g)
break
case 2:D.i0q(d,e,g)
break
case 3:D.i0F(d,e,g)
break
case 4:D.i_z(d,e,g)
break
case 5:D.hVQ(d,e,g)
break
case 6:D.hSE(d,e,g)
break
case 7:D.i1n(d,e,g)
break
case 8:D.hUT(d,e,g)
break
case 9:D.hWd(d,e,g)
break
default:D.hVs(d,e,g)}},
hTd(a2,a3,a4){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null,d=a3.a,a0=a3.b,a1=a0*0.94
for(x=a2.a,w=d*0.12,v=d*0.06,u=a0*0.06,t=y.v,s=0;s<6;++s){r=d*(0.04+s*0.17)
q=a0*(0.18+0.08*A.o.E(s,3))
p=a1-q
o=r+w
n=A.c.j(0.2)
m=$.W()
l=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
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
p=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
p.r=A.c.j(0.3).gp(0)
k=p.H()
p=m.gbK().a.snapshot()
x.drawPath((m.e=new B.cC(p)).a,k)
k.delete()}w=A.w.j(0.18)
$.W()
v=B.N()
v.r=w.gp(0)
a2.b_(new B.a8(0,a1,0+d,a1+(a0-a1)),v)
j=Math.cos(a4*1.6)
i=Math.min(d*0.46,a0*0.95)
h=i*0.62
J.by(x.save())
v=d*0.58
x.translate(v,a0*0.45)
a2.ti(0,Math.max(0.08,Math.abs(j)),1)
w=h*0.1
g=B.bw(B.ce(A.J,h,i),new B.aS(w,w))
u=B.N()
t=j>=0
u.sar(new B.a9(A.a3,A.a8,A.x,t?C.dln:C.dbA,e,e).aw(0,new B.a8(g.a,g.b,g.c,g.d)))
a2.aE(g,u)
a2.aE(g,D.Gj(A.d5,2))
if(t){u=-i
t=u*0.28
p=-h
o=p*0.05
n=h*0.22
m=B.N()
m.r=C.r2.gp(0)
a2.af(new B.v(t,o),n,m)
n=B.bW(new B.v(t,o),n)
o=B.N()
o.r=C.Eu.gp(0)
a2.fa(n,3.141592653589793,3.141592653589793,!0,o)
for(u*=0.05,t=p*0.25,o=h*0.07,s=0;s<3;++s){n=t+s*h*0.16
n=B.bw(new B.a8(u,n,u+i*(0.42-s*0.06),n+o),A.hI)
m=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
m.r=A.dl.gp(0)
k=m.H()
x.drawRRect(B.er(n),k)
k.delete()}D.rV(a2,"COMMUNITY ID",new B.v(0,p*0.4),w,A.d5,i*0.8)}else D.rV(a2,"\u2605 NGMY \u2605",A.J,h*0.16,A.c,i*0.8)
x.restore()
w=a4>2.6
if(w){s=A.k.D((a4-2.6)/0.35,0,1)
J.by(x.save())
x.translate(v,a0*0.52)
a2.jc(0,-0.25)
a2.bZ(0,2.2-1.2*A.ey.az(0,s))
f=B.ce(A.J,h*0.3,i*0.7)
a2.aE(B.bw(f,A.hf),D.Gj(A.cS.j(s),3))
D.rV(a2,"\u2713 REGISTERED",A.J,h*0.13,A.cS.j(s),(f.c-f.a)*0.9)
x.restore()}x=a4*5
v=Math.sin(x)
x=Math.sin(x)
w=w&&a4<4
D.CS(a2,new B.v(d*0.2,a1),a0*0.7,a4,!1,Math.abs(x)*a0*0.015,0,A.cS,C.r2,w,(v+1)/2)
if(a4>3)D.hTB(a2,new B.as(d,a0*0.9),a4,3)},
hW9(a6,a7,a8){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=a7.a,a3=a7.b,a4=a3*0.94,a5=A.w.j(0.2)
$.W()
x=B.N()
x.r=a5.gp(0)
a6.b_(new B.a8(0,a4,0+a2,a4+(a3-a4)),x)
w=a2*0.62
v=a2*0.3
u=a3*0.62
x=a4-u
a5=w+v
t=B.N()
t.r=A.bm.gp(0)
a6.b_(new B.a8(w,x,a5,x+u),t)
for(t=a6.a,s=a8*1.5,r=v*0.2,q=u*0.1,p=0;p<4;++p)for(o=x+u*(0.1+p*0.17),n=o+q,m=0;m<3;++m){l=w+v*(0.12+m*0.3)
k=A.o.E(p+m+A.k.bl(s),3)===0?A.dR:A.aO.j(0.6)
$.W()
j=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
j.r=k.gp(0)
i=j.H()
t.drawRect(B.c_(new B.a8(l,o,l+r,n)),i)
i.delete()}s=w+v*0.38
r=u*0.16
q=a4-r
$.W()
o=B.N()
o.r=A.fA.gp(0)
a6.b_(new B.a8(s,q,s+v*0.24,q+r),o)
o=x-a3*0.09
r=a3*0.02
o=B.bw(new B.a8(w,o,a5,o+a3*0.08),new B.aS(r,r))
a5=B.N()
a5.r=A.aF.gp(0)
a6.aE(o,a5)
a5=a3*0.05
o=a3*0.06
D.rV(a6,"JOBS",new B.v(w+v/2,x-a5),o,A.c,9999)
h=A.k.D(a8/2.8,0,1)
x=a2*0.12
g=x+(w+v*0.3-x)*A.dC.az(0,h)
x=h<1
f=x?Math.abs(Math.sin(a8*12))*a3*0.02:0
s=h>=1
q=s?(Math.sin(a8*6)+1)/2:0
D.CS(a6,new B.v(g,a4),a3*0.6,a8,!1,f,2,A.b6,A.LJ,s,q)
if(x){x=B.bw(B.ce(new B.v(g-a3*0.12,a4-a3*0.17-f),a3*0.075,a3*0.1),A.hI)
q=B.N()
q.r=A.fA.gp(0)
a6.aE(x,q)}if(s){x=a8-2.8
D.aOq(a6,new B.v(g+a5,a4-a3*0.78),"Hired! \ud83c\udf89",a3*0.07,x/0.4,A.c)
for(a5=x*0.8,x=a4-a3*0.5,s=a3*0.03,q=a8*8,e=0;e<6;++e){d=A.k.E(a5+e*0.17,1)
D.h0t(a6,new B.v(g+Math.sin(e*2.1)*a3*0.2,x-d*a3*0.25),s,q+e)}}a5=a2*0.04
x=a5+v
s=o+a3*0.3
r=B.bw(new B.a8(a5,o,x,s),new B.aS(r,r))
$.W()
q=B.N()
q.r=A.ij.gp(0)
a6.aE(r,q)
for(x-=a5,r=a5+x*0.08,s-=o,q=x*0.84,n=s*0.24,a5+=x*0.14,x*=0.5,l=s*0.05,e=0;e<3;++e){k=(1-A.k.D((a8-e*0.5)/0.5,0,1))*a2*0.3
j=r+k
a0=e*0.3
a1=o+s*(0.08+a0)
a1=B.bw(new B.a8(j,a1,j+q,a1+n),A.hI)
j=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
j.r=A.c.gp(0)
i=j.H()
t.drawRRect(B.er(a1),i)
i.delete()
k=a5+k
a0=o+s*(0.14+a0)
a1=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
a1.r=A.bK.gp(0)
i=a1.H()
t.drawRect(B.c_(new B.a8(k,a0,k+x,a0+l)),i)
i.delete()}},
i0q(a1,a2,a3){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=a2.a,e=a2.b,d=e*0.94,a0=A.fA.j(0.6)
$.W()
x=B.N()
x.r=a0.gp(0)
a1.b_(new B.a8(0,d,0+f,d+(e-d)),x)
w=f*0.3
v=f*0.66
for(a0=v/12,x=e*0.14,u=a0+1,t=x+e*0.12,s=a1.a,r=0;r<12;++r){q=w+a0*r
p=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
p.r=C.ayi[A.o.E(r,4)].gp(0)
o=p.H()
s.drawRect(B.c_(new B.a8(q,x,q+u,t)),o)
o.delete()}for(u=e*0.2,t=e*0.1,q=u+t,r=0;r<12;++r){p=w+a0*r
n=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
n.r=C.ayi[A.o.E(r,4)].gp(0)
o=n.H()
s.drawArc.apply(s,[B.c_(new B.a8(p,u,p+a0,q)),0,180,!0,o])
o.delete()}a0=w+4
u=e*0.3
q=u+(d-u)
p=B.N()
p.r=A.fA.gp(0)
a1.b_(new B.a8(a0,u,a0+4,q),p)
p=w+v
a0=p-8
n=B.N()
n.r=A.fA.gp(0)
a1.b_(new B.a8(a0,u,a0+4,q),n)
n=e*0.68
q=n+e*0.26
a0=B.bw(new B.a8(w,n,p,q),A.ix)
u=B.N()
u.r=A.ij.gp(0)
a1.aE(a0,u)
for(a0=p-w,u=a0/6,p=n+2,a0/=12,q=p+(q-n-4),r=0;r<6;++r){m=w+u*r
l=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
l.r=((r&1)===0?A.bz:A.bH).j(0.9).gp(0)
o=l.H()
s.drawRect(B.c_(new B.a8(m,p,m+a0,q)),o)
o.delete()}a0=w+v*0.2
u=e*0.62
k=new B.v(a0,u)
q=e*0.17
p=e*0.03
m=B.bw(B.ce(k,e*0.11,q),new B.aS(p,p))
l=B.N()
l.r=A.cp.gp(0)
a1.aE(m,l)
l=-e
q=B.ce(k.ad(0,new B.v(0,l*0.05)),e*0.04,q)
m=B.N()
m.r=A.fl.gp(0)
a1.hZ(q,m)
for(q=a3*0.8,l*=0.08,m=e*0.015,r=0;r<3;++r){j=A.k.E(q+r*0.33,1)
i=Math.sin(j*6+r)
h=j*e
g=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
g.r=A.c.j(0.6*(1-j)).gp(0)
o=g.H()
s.drawCircle(a0+i*5,u+(l-h*0.14),m+h*0.02,o)
o.delete()}for(a0=w+v*0.5,q=e*0.018,r=0;r<5;++r){m=B.ce(new B.v(a0,u),x,e*(0.1+r*0.01))
l=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
l.b=A.ae
l.c=q
l.r=A.bH.gp(0)
l.d=A.bT
o=l.H()
s.drawArc.apply(s,[B.c_(m),(0.4+r*0.1)*57.29577951308232,108.8619810748564,!1,o])
o.delete()}for(a0=e*0.63,x=e*0.032,r=0;r<4;++r){u=A.o.E(r,2)
q=A.o.am(r,2)
m=(r&1)===0?A.cc:A.vm
l=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
l.r=m.gp(0)
o=l.H()
s.drawCircle(w+v*(0.72+0.06*u)+r*e*0.02,a0+q*e*0.035,x,o)
o.delete()}D.CS(a1,new B.v(f*0.14,d),n,a3,!1,0,1,A.bH,E.aeN,!0,(Math.sin(a3*5)+1)/2)
for(a0=a3*0.45,x=f*0.16,u=e*0.45,s=e*0.06,r=0;r<5;++r){j=A.k.E(a0+r*0.2,1)
D.rV(a1,"\u2665",new B.v(x+Math.sin(j*5+r)*e*0.08+r*e*0.03,u-j*e*0.4),s,A.av.j(1-j),9999)}a0=w+v/2
x=e*0.08
p=B.bw(B.ce(new B.v(a0,x),t,v*0.7),new B.aS(p,p))
$.W()
t=B.N()
t.r=A.aw.gp(0)
a1.aE(p,t)
D.rV(a1,"NGMY STORE \xb7 African food",new B.v(a0,x),e*0.05,A.dR,v*0.64)},
i0F(d,e,f){var x,w,v,u,t,s,r,q=e.a,p=e.b,o=p*0.94,n=A.w.j(0.2)
$.W()
x=B.N()
x.r=n.gp(0)
d.b_(new B.a8(0,o,0+q,o+(p-o)),x)
w=A.o.E(A.o.am(Date.now(),6000)*3+A.o.D(A.k.bl(f/2),0,2),14)
v=A.k.E(f,2)
u=v<1
x=p*0.68
n=u?(Math.sin(f*8)+1)/2:0
t=u?Math.abs(Math.sin(f*8))*p*0.01:0
D.CS(d,new B.v(q*0.25,o),x,f,!1,t,2,A.cS,C.r2,u,n)
n=u?0:(Math.sin(f*8)+1)/2
t=u?0:Math.abs(Math.sin(f*8))*p*0.01
D.CS(d,new B.v(q*0.75,o),x,f,!1,t,0,A.bj,C.adT,!u,n)
s=new D.fsj(p,q)
n=p*0.15
if(u){x=C.axn[w].a
D.aOq(d,new B.v(q*0.27,n),x,s.$1(x),v/0.25,A.oO)}else{x=C.axn[w].b
D.aOq(d,new B.v(q*0.73,n),x,s.$1(x),(v-1)/0.25,A.ex)}for(n=q*0.5,x=p*0.07,t=f*2,r=0;r<3;++r)D.rV(d,"\u2192",new B.v(n,p*(0.35+r*0.1)),x,A.c.j(0.3+0.5*A.k.E(t+r,1)),9999)},
i_z(a1,a2,a3){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=a2.a,e=a2.b,d=e*0.94,a0=A.w.j(0.2)
$.W()
x=B.N()
x.r=a0.gp(0)
a1.b_(new B.a8(0,d,0+f,d+(e-d)),x)
x=f*0.3
w=B.ce(new B.v(f*0.6,e*0.45),e*0.7,Math.min(x,e*0.55))
a0=B.bw(w,A.ix)
v=B.N()
v.r=A.c.gp(0)
a1.aE(a0,v)
for(a0=w.d,v=w.b,u=a0-v,t=u*0.03,s=a1.a,r=w.a,q=w.c,p=q-r,o=r+p*0.1,n=0;n<9;++n){m=v+u*(0.1+n*0.095)
l=A.o.E(n,3)===2?0.5:0.8
k=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
k.r=A.cs.gp(0)
j=k.H()
s.drawRect(B.c_(new B.a8(o,m,o+p*l,m+t)),j)
j.delete()}i=A.k.D(a3/3,0,1)
h=v+u*i
if(i<1){a0=r-8
u=h-2
p=a0+(p+16)
t=B.N()
t.r=A.aZ.gp(0)
a1.b_(new B.a8(a0,u,p,u+4),t)
t=A.aZ.j(0.18)
u=B.N()
u.r=t.gp(0)
a1.b_(new B.a8(a0,v,p,v+(h-v)),u)}else{n=A.k.D((a3-3)/0.4,0,1)
u=A.mV.az(0,n)
t=B.N()
t.r=A.bz.gp(0)
a1.af(new B.v(q,v),e*0.08*u,t)
D.rV(a1,"PDF",new B.v(q,v),e*0.045*n,A.c,9999)
v=e*0.06
D.rV(a1,"\u2713 Saved",new B.v(w.gbQ().a,a0+v),v,A.c.j(n),9999)}a0=a3*4
v=Math.sin(a0)
D.CS(a1,new B.v(f*0.2,d),e*0.66,a3,!0,Math.abs(Math.sin(a0))*e*0.01,0,A.cA,C.r2,!1,(v+1)/2)
g=B.ce(new B.v(x,e*0.3),e*0.18,e*0.1)
x=e*0.02
x=B.bw(g,new B.aS(x,x))
v=B.N()
v.r=A.aw.gp(0)
a1.aE(x,v)
v=e*0.015
v=B.bw(g.cw(-3),new B.aS(v,v))
x=A.aZ.j(0.35+0.3*Math.sin(a3*6))
a0=B.N()
a0.r=x.gp(0)
a1.aE(v,a0)},
hVQ(a6,a7,a8){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=a7.a,a3=a7.b,a4=a3*0.94,a5=A.w.j(0.2)
$.W()
x=B.N()
x.r=a5.gp(0)
a6.b_(new B.a8(0,a4,0+a2,a4+(a3-a4)),x)
w=B.ce(new B.v(a2*0.62,a3*0.47),a3*0.8,Math.min(a2*0.4,a3*0.75))
x=B.bw(w,A.qs)
a5=B.N()
a5.r=A.c.gp(0)
a6.aE(x,a5)
a5=w.a
x=w.c
v=x-a5
u=w.b
t=w.d-u
D.rV(a6,"INVOICE",new B.v(a5+v*0.3,u+t*0.09),t*0.07,A.d5,9999)
for(s=a6.a,r=v*0.08,q=a5+r,p=t*0.045,o=q+v*0.5,n=x-v*0.17,m=t*0.02,l=t*0.06,k=a8-0.5,j=0,i=0;i<3;++i){h=A.k.D((k-i*0.6)/0.4,0,1)
if(h<=0)continue
j+=C.awt[i].b
g=u+t*(0.24+i*0.14)
J.by(s.save())
s.translate((1-h)*30,0)
f=A.cs.j(h)
$.W()
e=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
e.r=f.gp(0)
d=e.H()
s.drawRect(B.c_(new B.a8(q,g,o,g+p)),d)
d.delete()
D.rV(a6,"$"+C.awt[i].b,new B.v(n,g+m),l,A.aw.j(h),9999)
s.restore()}p=u+t*0.7
a6.bE(new B.v(q,p),new B.v(x-r,p),D.Gj(A.ds,1.4))
D.rV(a6,"TOTAL  $"+j,new B.v(w.gbQ().a,u+t*0.78),t*0.075,A.aw,v*0.8)
x=a8>2.8
if(x){r=a8-2.8
i=A.k.D(r/0.3,0,1)
J.by(s.save())
s.translate(w.gbQ().a,u+t*0.55)
a6.jc(0,-0.3)
a6.bZ(0,2-A.ey.az(0,i))
a6.aE(B.bw(B.ce(A.J,t*0.17,v*0.6),A.hf),D.Gj(A.cS.j(i),3.5))
D.rV(a6,"PAID",A.J,t*0.11,A.cS.j(i),9999)
s.restore()
for(v=r*0.7,a5-=a3*0.05,u=a3*0.7,t=a3*0.03,s=a8*8,a0=0;a0<6;++a0){a1=A.k.E(v+a0*0.17,1)
D.h0t(a6,new B.v(a5+Math.sin(a0*2)*a3*0.1,u-a1*a3*0.5),t,s+a0)}}a5=x?(Math.sin(a8*6)+1)/2:0
D.CS(a6,new B.v(a2*0.2,a4),a3*0.66,a8,!0,0,1,A.bE,A.LJ,x,a5)},
hSE(d,e,a0){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=e.a,h=e.b,g=h*0.94,f=A.dX.j(0.7)
$.W()
x=B.N()
x.r=f.gp(0)
d.b_(new B.a8(0,g,0+i,g+(h-g)),x)
x=i*0.6
f=h*0.62
w=new B.v(x,f)
v=Math.min(i*0.3,h*0.6)
u=B.bw(B.ce(w,v*1.3,v*2.1),A.hf)
t=B.N()
t.r=A.hm.gp(0)
d.aE(u,t)
t=v*0.5
u=v*1.2
s=B.ce(w.aC(0,new B.v(t,0)),u,v)
r=B.N()
r.r=A.fK.gp(0)
d.b_(s,r)
t=B.ce(w.ad(0,new B.v(t,0)),u,v)
r=B.N()
r.r=A.fK.gp(0)
d.b_(t,r)
r=A.k.E(a0,2)
t=d.a
J.by(t.save())
t.translate(x,f)
d.ti(0,Math.cos(r/2*3.141592653589793),1)
r=-v*0.6
s=B.N()
s.r=A.bM.gp(0)
d.b_(new B.a8(0,r,0+v,r+u),s)
t.restore()
q=A.k.D(a0/3,0,1)
f-=v*0.6
s=f-h*0.28*q
d.bE(new B.v(x,f),new B.v(x,s),D.Gj(A.fA,h*0.025))
for(f=q-0.4,u=h*0.05,r=h*0.04,p=0;p<5;++p){o=A.k.D(f-p*0.1,0,1)
n=p*1.3
m=Math.cos(n)
l=Math.sin(n)
k=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
k.r=A.bc.gp(0)
j=k.H()
t.drawCircle(x+m*h*0.14*o,s+l*h*0.08*o,u*o,j)
j.delete()
if(o>0.6)D.rV(d,"\u2665",new B.v(x+Math.cos(n)*h*0.14,s+Math.sin(n)*h*0.08),r,A.bE,9999)}f=a0*4
x=Math.sin(f)
D.CS(d,new B.v(i*0.2,g),h*0.66,a0,!1,Math.abs(Math.sin(f))*h*0.01,2,A.aE,C.r2,!1,(x+1)/2)},
i1n(d,e,f){var x,w,v,u,t,s,r,q,p,o,n=e.a,m=e.b,l=m*0.94,k=A.w.j(0.2)
$.W()
x=B.N()
x.r=k.gp(0)
d.b_(new B.a8(0,l,0+n,l+(m-l)),x)
w=A.k.bl(A.k.D(f/5.5,0,1)*9)+1
for(v=n*0.62,k=l-m*0.03,x=m*0.26,u=m*0.07,t=d.a,s=0;s<w;++s){r=k-s*m*0.055
q=B.ce(new B.v(v,r),u,x)
p=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
p.r=A.bH.gp(0)
o=p.H()
t.drawOval(B.c_(q),o)
o.delete()
r=B.ce(new B.v(v,r),u,x)
q=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
q.b=A.ae
q.c=2
q.r=A.pH.gp(0)
q.d=A.bT
o=q.H()
t.drawOval(B.c_(r),o)
o.delete()}k=m*0.1
D.h0t(d,new B.v(v,k+A.k.E(f*1.6,1)*(l-u-w*m*0.055-k)),m*0.05,f*8)
k=m*0.08
D.rV(d,"$"+w*25,new B.v(v,k),k,A.dR,9999)
k=f*5
u=Math.sin(k)
D.CS(d,new B.v(n*0.25,l),m*0.66,f,!1,Math.abs(Math.sin(k))*m*0.012,1,A.cA,C.r2,!0,(u+1)/2)},
hUT(d,a0,a1){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=a0.a,g=a0.b,f=g*0.94,e=A.w.j(0.2)
$.W()
x=B.N()
x.r=e.gp(0)
d.b_(new B.a8(0,f,0+h,f+(g-f)),x)
for(e=d.a,x=g*0.012,w=g*0.55,v=a1*4,u=a1*2,t=g*0.15,s=g*0.03,r=0;r<3;r=n){q=Math.sin(v+r*1.7)
J.by(e.save())
e.translate(h*(0.5+0.14*r),w-Math.abs(q)*g*0.3)
e.rotate((u+r)*180/3.141592653589793,0,0)
q=B.bw(B.ce(A.J,t,t),new B.aS(s,s))
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
j.r=A.bk.gp(0)
o=j.H()
e.drawCircle(k*g*0.04,l*g*0.04,x,o)
o.delete();++m}e.restore()}for(e=a1*0.6,w=g*0.25,v=g*0.06,r=0;r<5;++r){i=A.k.E(e+r*0.2,1)
D.rV(d,"\u2605",new B.v(h*(0.45+r*0.1),w-i*g*0.2),v,A.dR.j(1-i),9999)}e=h*0.22
w=a1*6
v=Math.sin(w)
D.CS(d,new B.v(e,f),g*0.66,a1,!0,Math.abs(Math.sin(w))*g*0.015,0,A.cc,C.r2,!0,(v+1)/2)
v=f-g*0.28
s=B.bw(B.ce(new B.v(e,v),g*0.07,g*0.16),new B.aS(s,s))
$.W()
w=B.N()
w.r=A.cp.gp(0)
d.aE(s,w)
w=B.N()
w.r=A.av.gp(0)
d.af(new B.v(e+g*0.05,v),x,w)},
hWd(d,e,a0){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=e.a,j=e.b,i=j*0.94,h=A.w.j(0.2),g=$.W(),f=B.N()
f.r=h.gp(0)
d.b_(new B.a8(0,i,0+k,i+(j-i)),f)
f=k*0.42
h=j*0.18
x=j*0.08
w=B.bw(new B.a8(f,h,f+k*0.5,h+j*0.5),new B.aS(x,x))
v=new B.aO(g.r,A.ao,null,null,B.a([],y.v))
v.F(new B.iN(w))
d.aR(v,D.Gj(A.c.j(0.5),4))
u=new B.Sy(new B.vF(B.xd(v),!1,B.a([],y.L))).gI(0)
for(h=a0*0.18,g=u.a,x=u.b,t=g.e,s=j*0.016,r=d.a,q=0;q<10;++q){p=A.k.E(h+q/10,1)
g.jB()
o=t[x].b
o===$&&B.c()
o=o.a.length()
g.jB()
o=t[x].MS(p*o).a
p=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
p.r=A.dR.gp(0)
n=p.H()
r.drawCircle(o.a,o.b,s,n)
n.delete()}m=a0>1.5
h=j*0.43
l=new B.v(k*0.92,h)
if(m){g=A.dR.j(0.4+0.2*Math.sin(a0*8))
x=B.N()
x.r=g.gp(0)
x.z=A.zf
d.af(l,j*0.2,x)}g=j*0.07
x=m?A.oO:A.bK
t=B.N()
t.r=x.gp(0)
d.af(l,g,t)
h=B.bw(B.ce(new B.v(f,h),j*0.2,j*0.1),A.ix)
t=B.N()
t.r=A.cS.gp(0)
d.aE(h,t)
D.rV(d,"+",new B.v(f,j*0.36),g,A.c,9999)
h=m?(Math.sin(a0*6)+1)/2:0
f=m?Math.abs(Math.sin(a0*6))*j*0.012:0
D.CS(d,new B.v(k*0.2,i),j*0.68,a0,!1,f,0,A.bS,C.r2,m,h)
if(m)D.aOq(d,new B.v(k*0.24,j*0.16),"It works!",g,(a0-1.5)/0.4,A.c)},
hVs(d,a0,a1){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=a0.a,g=a0.b,f=g*0.94,e=A.w.j(0.2)
$.W()
x=B.N()
x.r=e.gp(0)
d.b_(new B.a8(0,f,0+h,f+(g-f)),x)
w=A.k.D((a1-0.3)/0.4,0,1)
v=A.k.D((a1-1.8)/0.4,0,1)
x=g*0.2
e=g*0.065
D.aOq(d,new B.v(h*0.3,x),"How do I enroll?",e,w,A.oO)
if(a1>1&&a1<1.8)for(u=h*0.72,t=g*0.38,s=a1*9,r=g*0.015,q=d.a,p=0;p<3;++p){o=Math.sin(s+p)
n=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
n.r=A.c.gp(0)
m=n.H()
q.drawCircle(u+p*g*0.05,t-Math.abs(o)*g*0.02,r,m)
m.delete()}D.aOq(d,new B.v(h*0.7,g*0.38),"Tap Civic Registry!",e,v,A.ex)
D.CS(d,new B.v(h*0.2,f),g*0.62,a1,!1,0,2,A.av,C.r2,a1<1,0)
l=h*0.78
k=f-g*0.28
e=g*0.04
x=B.bw(B.ce(new B.v(l,k),g*0.22,x),new B.aS(e,e))
u=B.N()
u.r=A.aL.gp(0)
d.aE(x,u)
u=g*0.18
x=k-u
e=B.bw(B.ce(new B.v(l,x),g*0.14,u),new B.aS(e,e))
u=B.N()
u.r=A.cs.gp(0)
d.aE(e,u)
for(e=d.a,u=a1*1.1,t=g*0.02,j=0;j<2;++j){i=C.ly[j]
s=A.k.E(u,1)>0.08?A.b8:A.f3
r=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
r.r=s.gp(0)
m=r.H()
e.drawCircle(l+i*g*0.04,x,t,m)
m.delete()}d.bE(new B.v(l,k-g*0.25),new B.v(l,k-g*0.3),D.Gj(A.ad,3))
e=B.N()
e.r=A.av.gp(0)
d.af(new B.v(l,k-g*0.31),g*0.015,e)},
fsp:function fsp(d,e,f){this.a=d
this.b=e
this.c=f},
fsj:function fsj(d,e){this.a=d
this.b=e},
aNP(d,e,f,g,h,i,j,k){var x=new D.fjI(e,h,i,k),w=x.$1(g),v=w.b.c
if(v>j&&v>0)w=x.$1(Math.max(2,g*j/v))
x=w.b
v=x.c
x=x.a.c
w.a3(d,f.aC(0,new B.v(v/2,x.gbc(x)/2)))},
Le(d,e,f,a0){var x,w,v,u,t,s,r,q,p,o,n,m=A.o.E(a0==null?A.k.bl(f/6):a0,11),l=A.k.E(f,6),k=C.d5I[m],j=e.a,i=e.b,h=0+j,g=0+i
$.W()
x=B.N()
x.sar(new B.a9(A.az,A.aC,A.x,B.a([k.c,k.d],y.O),null,null).aw(0,new B.a8(0,0,h,g)))
d.b_(new B.a8(0,0,h,g),x)
w=i*(j>=i?0.7:0.6)
g=d.a
J.by(g.save())
g.clipRect(B.c_(new B.a8(0,0,h,0+w)),$.nu()[1],!0)
D.i2k(d,new B.as(j,w),m,l)
g.restore()
v=i-w
x=A.w.j(0.3)
u=B.N()
u.r=x.gp(0)
d.b_(new B.a8(0,w,h,w+v),u)
t=A.cu.az(0,A.k.D((l-0.2)/0.5,0,1))
J.by(g.save())
g.translate((1-t)*j*0.25,0)
u=j/2
h=j*0.94
D.aNP(d,k.a,new B.v(u,w+v*0.3),v*0.36,A.c.j(t),!0,h,0)
D.aNP(d,k.b,new B.v(u,w+v*0.64),v*0.2,A.c.j(0.92*t),!1,h,0)
g.restore()
for(h=i*0.965,x=i*0.009,s=i*0.004,r=0;r<11;++r){q=r===m
p=q?s:0
o=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
o.r=A.c.j(q?0.95:0.35).gp(0)
n=o.H()
g.drawCircle(u+(r-5)*i*0.035,h,x+p,n)
n.delete()}h=j-i*0.07
g=i*0.06
D.aNP(d,"AD",new B.v(h,g),i*0.045,A.c.j(0.85),!0,9999,1)
x=i*0.02
x=B.bw(B.ce(new B.v(h,g),i*0.065,i*0.1),new B.aS(x,x))
g=B.N()
g.b=A.ae
g.c=1
g.r=A.ad.gp(0)
g.d=A.bT
d.aE(x,g)},
Rq(d,e,f,g){var x,w=d.a
J.by(w.save())
w.clipRect(B.c_(new B.a8(0,0,0+e.a,0+e.b)),$.nu()[1],!0)
x=C.ka[A.o.E(f,8)].e
if(x===-2)D.hSN(d,e,g)
else if(x===-1)D.Le(d,e,g,null)
else D.Le(d,e,g,x)
w.restore()},
hSN(d,a0,a1){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=a0.a,h=a0.b,g=new B.T(Date.now(),0,!1),f=0+i,e=0+h
$.W()
x=B.N()
x.sar(C.bX8.aw(0,new B.a8(0,0,f,e)))
d.b_(new B.a8(0,0,f,e),x)
x=B.N()
x.r=A.bz.gp(0)
d.b_(new B.a8(0,0,f,0+h*0.15),x)
D.aNP(d,A.p7[B.bH(g)-1]+" "+B.bA(g),new B.v(i/2,h*0.075),h*0.08,A.c,!0,i*0.9,0)
w=i/7
for(f=h*0.21,e=h*0.05,v=0;v<7;++v)D.aNP(d,C.dk9[v],new B.v(w*(v+0.5),f),e,A.aA,!0,9999,0)
u=B.c1(B.bA(g),B.bH(g),1,0,0,0,0,0)
t=B.bT(B.c1(B.bA(g),B.bH(g)+1,0,0,0,0,0,0))
s=B.mB(u)-1
r=h*0.74/A.k.dj((s+t)/7)
for(f=h*0.26,e=a1*3,x=d.a,q=1;q<=t;++q){p=s+q-1
o=w*(A.o.E(p,7)+0.5)
n=f+r*(A.o.am(p,7)+0.5)
if(q===B.bT(g)){m=Math.min(w,r)
l=A.aO.j(0.5+0.2*Math.sin(e))
$.W()
k=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
k.r=l.gp(0)
j=k.H()
x.drawCircle(o,n,m*0.42,j)
j.delete()}m=Math.min(w,r)
l=q===B.bT(g)?A.c:A.ad
D.aNP(d,""+q,new B.v(o,n),m*0.42,l,!0,9999,0)}},
fjI:function fjI(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
wr:function wr(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
vU:function vU(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
h55(d,e,f,g,h,a0){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i=d.a
J.by(i.save())
x=e.a
w=e.b
v=0+x
u=0+w
i.clipRect(B.c_(new B.a8(0,0,v,u)),$.nu()[1],!0)
if(h<3){$.W()
t=B.N()
t.r=C.b90.gp(0)
d.b_(new B.a8(0,0,v,u),t)
if(h<0.5)u=h/0.5
else u=h>2.4?(3-h)/0.6:1
s=A.k.D(u,0,1)
u=e.ed(A.J)
t=e.gdB()
r=B.N()
r.sar(new B.bV(A.A,0.5,A.x,j,0,B.a([A.aO.j(0.35*s),A.K],y.O),j,j).aw(0,B.bW(e.ed(A.J),e.gdB()*0.5)))
d.af(u,t*0.5,r)
D.Gm(d,"NGMY",new B.v(0,w*0.36),w*0.2,A.c.j(s),A.L,w*0.03,x)
D.Gm(d,"T V",new B.v(0,w*0.6),w*0.08,A.aO.j(s),A.L,w*0.05,x)
r=x*0.3
t=w*0.78
u=B.N()
u.r=A.aO.j(s).gp(0)
d.b_(new B.a8(r,t,r+x*0.4*(h/3),t+3),u)}else if(a0>=0)D.Rq(d,e,a0,g)
else{q=A.k.D((h-3)/0.5,0,1)
p=A.o.E(f,10)
switch(p){case 0:D.i0Y(d,e,g)
break
case 1:D.hTp(d,e,g)
break
case 2:D.i0g(d,e,g)
break
case 3:D.hY6(d,e,g)
break
case 4:D.hZm(d,e,g)
break
case 5:D.i0h(d,e,g)
break
case 6:D.hUJ(d,e,g)
break
case 7:D.i0X(d,e,g)
break
case 8:D.i_8(d,e,g)
break
default:D.hUU(d,e,g)}t=x-w*0.34
r=w*0.04
o=w*0.03
n=B.bw(new B.a8(t,r,t+w*0.3,r+w*0.1),new B.aS(o,o))
$.W()
o=B.N()
o.r=A.w.j(0.55).gp(0)
d.aE(n,o)
D.Gm(d,"NGMY",new B.v(n.a+w*0.025,n.b+w*0.012),w*0.07,A.c,A.bi,1,j)
o=w*0.86
t=B.N()
t.r=A.w.j(0.6).gp(0)
d.b_(new B.a8(0,o,v,o+w*0.14),t)
D.Gm(d,"CH "+(f+1)+"  \xb7  "+C.Qk[p].a,new B.v(r,w*0.885),w*0.075,A.c,A.bi,0,x-w*0.08)
if(q<1){t=B.N()
t.r=A.c.j(0.6*(1-q)).gp(0)
d.b_(new B.a8(0,0,v,u),t)}}$.W()
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
d.aR(v,w)
i.restore()},
Gm(d,e,f,g,h,i,j,k){var x=null,w=B.fZ(x,x,1,x,B.d0(x,x,x,x,x,x,x,x,x,B.l(x,x,h,x,x,x,x,x,x,x,x,g,x,x,A.u,x,x,!0,x,j,x,x,x,x,x,x),e),i,A.c6,x,A.dO,A.c3),v=k==null
w.uE(v?9999:k)
w.a3(d,f.ad(0,new B.v(i===A.L&&!v?(k-w.b.c)/2:0,0)))},
i0Y(d,e,f){var x,w,v,u,t,s,r,q,p,o,n,m=e.a,l=e.b,k=A.k.E(f,14),j=0+m,i=0+l
$.W()
x=B.N()
x.sar(C.apg.aw(0,new B.a8(0,0,j,i)))
d.b_(new B.a8(0,0,j,i),x)
x=B.N()
x.r=A.dR.gp(0)
d.af(new B.v(m*0.85,l*0.18),l*0.08,x)
x=l*0.78
i=B.N()
i.r=A.AG.gp(0)
d.b_(new B.a8(0,x,j,x+l*0.22),i)
new D.fsC(d,f,l).$5(new B.v(m*0.5,l*0.8),1.5707963267948966,l*0.24,5,A.k.D(k/5,0,1)*1.4)
for(j=l*0.26,i=l*0.11,x=l*0.05,w=d.a,v=-l,u=v*0.1,v*=0.04,t=l*0.065,s=0;s<6;++s){r=A.k.D((k-(5+s*1.3))/0.5,0,1)
if(r<=0)continue
q=(s&1)===1?0.04:0
p=A.o.E(s,3)
o=A.mV.az(0,r)
J.by(w.save())
w.translate(m*(0.2+0.12*s+q),l*(0.16+0.14*p))
w.scale(o,o)
q=B.bw(B.ce(A.J,i,j),new B.aS(x,x))
$.W()
p=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
p.r=A.c.gp(0)
n=p.H()
w.drawRRect(B.er(q),n)
n.delete()
q=B.bw(B.ce(A.J,i,j),new B.aS(x,x))
p=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
p.b=A.ae
p.c=2
p.r=A.bE.gp(0)
n=p.H()
w.drawRRect(B.er(q),n)
n.delete()
D.Gm(d,"\u2665 "+C.cV8[s],new B.v(u,v),t,A.tj,A.bi,0,null)
w.restore()}if(k>11.5)D.Gm(d,"Family is everything",new B.v(0,l*0.62),l*0.09,A.hm,A.L,0,m)},
hTp(d,e,a0){var x,w,v,u,t,s,r,q,p,o,n,m,l=null,k=e.a,j=e.b,i=0+k,h=0+j,g=$.W(),f=B.N()
f.sar(C.bXl.aw(0,new B.a8(0,0,i,h)))
d.b_(new B.a8(0,0,i,h),f)
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
if(t!=null)r.bD(t)
t=v.e
if(t!=null)t.a.delete()
v.e=null}t=new B.ap(k,j)
f.push(t)
f=v.f
if(f!=null)t.bD(f)
f=v.e
if(f!=null)f.a.delete()
v.e=null
f=$.W()
t=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
t.r=(g?A.jg:A.dX).gp(0)
q=t.H()
g=v.e
i.drawPath((g==null?v.e=new B.cC(v.gbK().a.snapshot()):g).a,q)
q.delete()}for(i=j*0.04,h=x*1.3,g=k+60,f=k*0.3,p=0,o=0;o<6;++o){u=A.k.E(o*90-h,g)-30
t=Math.sin(o*1.7+a0)
if(Math.abs(u-f)<12)++p
D.i0l(d,new B.v(u,j*(0.35+0.08*t)),i,A.dR)}n=Math.abs(Math.sin(a0*5))
m=new B.v(f,j*0.72-n*j*0.22)
i=B.ce(new B.v(f,j*0.82),j*0.025,j*0.14*(1-n*0.4))
$.W()
h=B.N()
h.r=A.ds.gp(0)
d.hZ(i,h)
h=j*0.085
i=B.N()
i.sar(C.ejz.aw(0,B.bW(m,h)))
d.af(m,h,i)
i=B.N()
i.b=A.ae
i.c=2
i.r=A.pH.gp(0)
d.af(m,h,i)
i=-j
D.Gm(d,"$",m.ad(0,new B.v(i*0.03,i*0.045)),j*0.09,A.pH,A.bi,0,l)
h=i*0.01
i=m.ad(0,new B.v(i*0.028,h))
g=B.N()
g.r=A.w.gp(0)
d.af(i,2.4,g)
h=m.ad(0,new B.v(j*0.028,h))
g=B.N()
g.r=A.w.gp(0)
d.af(h,2.4,g)
D.Gm(d,"Saved: $"+(A.o.E(A.k.bl(a0*3),1000)+p),new B.v(j*0.05,j*0.06),j*0.08,A.c,A.bi,0,l)},
i0l(d,e,f,g){var x,w,v,u,t,s,r,q=$.W(),p=B.a([],y.v),o=new B.aO(q.r,A.ao,null,null,p)
for(q=e.a,x=e.b,w=f*0.45,v=0;v<10;++v){u=-1.5707963267948966+v*3.141592653589793/5
t=(v&1)===0?f:w
s=q+Math.cos(u)*t
r=x+Math.sin(u)*t
if(v===0){s=new B.b5(s,r)
p.push(s)
r=o.f
if(r!=null)s.bD(r)
s=o.e
if(s!=null)s.a.delete()
o.e=null}else{s=new B.ap(s,r)
p.push(s)
r=o.f
if(r!=null)s.bD(r)
s=o.e
if(s!=null)s.a.delete()
o.e=null}}o.F(new B.bE())
$.W()
q=B.N()
q.r=g.gp(0)
d.aR(o,q)},
i0g(a1,a2,a3){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=a2.a,e=a2.b,d=$.W(),a0=B.N()
a0.r=C.bg2.gp(0)
a1.b_(new B.a8(0,0,0+f,0+e),a0)
x=new B.eE()
x.dt(7)
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
s.sar(C.ejx.aw(0,B.bW(new B.v(p,a0),t)))
a1.af(new B.v(p,a0),t,s)
a0=B.ce(new B.v(p,a0),e*0.07,e*0.6)
s=B.N()
s.b=A.ae
s.c=3
s.r=A.bM.j(0.7).gp(0)
a1.hZ(a0,s)
s=Math.sin(a3*2)
J.by(w.save())
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
o.F(new B.cW(0,e*(0.2+0.05*Math.sin(a3*30)),n,r))
o.F(new B.bE())
m=B.N()
l=e*0.12
m.sar(C.bY1.aw(0,new B.a8(t,r,t+e*0.08,r+l)))
a1.aR(o,m)
k=new B.aO(d,A.ao,g,g,B.a([],s))
m=a0*0.17
k.F(new B.b5(0,m))
t=a0*0.05
j=e*0.05
k.F(new B.cW(e*0.09,t,j,r))
k.F(new B.ap(t,r))
k.F(new B.cW(a0*0.09,t,0,m))
k.F(new B.bE())
i=B.N()
h=a0*0.08
i.sar(C.bYh.aw(0,new B.a8(h,m,h+e*0.16,m+e*0.27)))
a1.aR(k,i)
i=B.N()
i.r=A.aO.gp(0)
a1.af(new B.v(0,t),e*0.035,i)
i=new B.aO(d,A.ao,g,g,B.a([],s))
i.F(new B.b5(t,n))
i.F(new B.ap(a0*0.1,l))
i.F(new B.ap(t,r))
i.F(new B.bE())
t=B.N()
t.r=A.av.gp(0)
a1.aR(i,t)
s=new B.aO(d,A.ao,g,g,B.a([],s))
s.F(new B.b5(j,n))
s.F(new B.ap(r,l))
s.F(new B.ap(j,r))
s.F(new B.bE())
r=B.N()
r.r=A.av.gp(0)
a1.aR(s,r)
w.restore()},
hY6(a1,a2,a3){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null,h=a2.a,g=a2.b,f=0+h,e=0+g,d=$.W(),a0=B.N()
a0.sar(C.bX2.aw(0,new B.a8(0,0,f,e)))
a1.b_(new B.a8(0,0,f,e),a0)
for(f=a1.a,e=g*0.85,a0=g*0.7,x=y.v,d=d.r,w=0;w<4;++w){v=h*(0.1+0.25*w)
u=B.a([],x)
t=new B.aO(d,A.ao,i,i,u)
u.push(new B.b5(v,g))
u.push(new B.cW(v+Math.sin(a3+w)*10,e,v+4,a0+w*6))
u=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
u.b=A.ae
u.c=5
u.r=A.cS.gp(0)
s=u.H()
u=t.gbK().a.snapshot()
f.drawPath((t.e=new B.cC(u)).a,s)
s.delete()}e=A.k.E(a3*18,h*1.5)
J.by(f.save())
f.translate(e-h*0.25,g*0.35+Math.sin(a3)*6)
e=B.ce(A.J,g*0.22,g*0.5)
a0=B.N()
a0.r=A.br.gp(0)
a1.hZ(e,a0)
a0=new B.aO(d,A.ao,i,i,B.a([],x))
e=-g
u=e*0.22
a0.F(new B.b5(u,0))
a0.F(new B.cW(e*0.36,e*0.12+Math.sin(a3*3)*5,e*0.34,e*0.16))
t=e*0.02
a0.F(new B.cW(e*0.28,t,u,0))
u=B.N()
u.r=A.br.gp(0)
a1.aR(a0,u)
u=g*0.03
a0=g*0.1
r=B.ce(new B.v(0,u),a0,g*0.34)
q=B.N()
q.r=A.aL.gp(0)
a1.hZ(r,q)
q=B.N()
q.r=A.c.gp(0)
a1.af(new B.v(g*0.15,t),3,q)
q=B.N()
q.r=A.w.gp(0)
a1.af(new B.v(g*0.155,t),1.5,q)
f.restore()
for(t=e*0.005,r=e*0.08,q=e*0.03,p=g*0.06,e*=0.04,o=h+40,n=a3*2,w=0;w<6;++w){m=(w&1)===0?1:-1
l=A.k.E(A.k.E(a3*(24+w*7)*m+w*80,o)+h+40,o)
k=Math.sin(n+w)
J.by(f.save())
f.translate(l-20,g*(0.52+0.06*w)+k*6)
f.scale(m,1)
l=B.ce(A.J,p,a0)
k=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
j=A.o.E(w,4)
k.r=C.aw8[j].gp(0)
s=k.H()
f.drawOval(B.c_(l),s)
s.delete()
l=B.a([],x)
k=new B.aO(d,A.ao,i,i,l)
l.push(new B.b5(e,0))
l.push(new B.ap(r,q))
l.push(new B.ap(r,u))
l.push(new B.bE())
l=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
l.r=C.aw8[j].gp(0)
s=l.H()
l=k.gbK().a.snapshot()
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
hZm(a7,a8,a9){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null,d=a8.a,a0=a8.b,a1=A.k.E(a9,12),a2=a1<7,a3=0+d,a4=0+a0,a5=$.W(),a6=B.N()
a6.sar(new B.a9(A.b1,A.b5,A.x,a2?C.df4:C.d2c,e,e).aw(0,new B.a8(0,0,a3,a4)))
a7.b_(new B.a8(0,0,a3,a4),a6)
a6=a0*0.74
x=B.N()
x.r=(a2?C.bkc:A.AG).gp(0)
a7.b_(new B.a8(0,a6,a3,a6+a0*0.26),x)
for(x=a7.a,w=a0*0.07,v=a0*0.06,u=a0*0.2,t=a0*0.1,s=a0*0.09,r=y.v,q=a9*2,a5=a5.r,p=0;p<4;++p){o=d*(0.08+0.24*p)
n=a0*(0.14+0.03*A.o.E(p,2))
m=a6-n
l=o+u
k=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
k.r=C.cPM[p].gp(0)
j=k.H()
x.drawRect(B.c_(new B.a8(o,m,l,m+n)),j)
j.delete()
k=B.a([],r)
i=new B.aO(a5,A.ao,e,e,k)
k.push(new B.b5(o-4,m))
k.push(new B.ap(o+t,m-s))
k.push(new B.ap(l+4,m))
k.push(new B.bE())
m=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
m.r=A.es.gp(0)
j=m.H()
m=i.gbK().a.snapshot()
x.drawPath((i.e=new B.cC(m)).a,j)
j.delete()
m=o+w
l=n*0.55
k=a6-l
i=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
i.r=(a2&&A.o.E(A.k.bl(q),2)===0?A.lk:A.fA).gp(0)
j=i.H()
x.drawRect(B.c_(new B.a8(m,k,m+v,k+l)),j)
j.delete()}if(a2){for(a6=a9*20,v=a9*260,u=a0*0.8,p=0;p<70;++p){o=A.k.E(p*37+a6,d)
h=A.k.E(p*53+v,u)
s=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
s.r=A.f9.gp(0)
s.c=1.4
j=s.H()
x.drawLine.apply(x,[o,h,o-3,h+9,j])
j.delete()}a6=a9*3
if(A.o.E(A.k.bl(a6),7)===0&&A.k.E(a6,1)<0.3){a6=B.N()
a6.r=A.c.j(0.5).gp(0)
a7.b_(new B.a8(0,0,a3,a4),a6)
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
t.r=A.lk.gp(0)
a7.aR(r,t)}}else{for(a3=d*0.5,a4=a0*0.035,a5=3.141592653589793*A.k.D((a1-7)/2,0,1)*57.29577951308232,p=0;p<6;++p){v=d*(0.9-p*0.07)
v=B.ce(new B.v(a3,a6),v,v)
u=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
u.b=A.ae
u.c=a4
u.r=C.djb[p].j(0.9).gp(0)
j=u.H()
x.drawArc.apply(x,[B.c_(v),180,a5,!1,j])
j.delete()}a3=B.N()
a3.r=A.dR.gp(0)
a7.af(new B.v(d*0.86,a0*0.16),a0*0.08,a3)}for(a3=d+120,p=0;p<3;++p){o=A.k.E(a9*(8+p*4)+p*120,a3)-60
for(a4=a0*(0.12+0.1*p),g=0;g<4;++g){f=C.ckM[g]
$.W()
a5=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
a5.r=(a2?A.bm:A.c.j(0.95)).gp(0)
j=a5.H()
x.drawCircle(o+f.a,a4+f.b,w,j)
j.delete()}}},
i0h(a1,a2,a3){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=a2.a,a0=a2.b
$.W()
x=B.N()
x.r=A.db.gp(0)
a1.b_(new B.a8(0,0,0+d,0+a0),x)
w=B.N()
w.r=A.c.j(0.05).gp(0)
for(x=a1.a,v=0;v<d;v+=16){u=w.H()
x.drawLine.apply(x,[v,0,v,a0,u])
u.delete()}for(t=0;t<a0;t+=16){u=w.H()
x.drawLine.apply(x,[0,t,d,t,u])
u.delete()}s=d*0.14
r=a0*0.2
q=a0*0.08
p=B.bw(new B.a8(s,r,s+d*0.72,r+a0*0.5),new B.aS(q,q))
o=new B.aO($.W().r,A.ao,null,null,B.a([],y.v))
o.F(new B.iN(p))
r=B.N()
r.b=A.ae
r.c=5
r.r=A.br.gp(0)
a1.aR(o,r)
n=new B.Sy(new B.vF(B.xd(o),!1,B.a([],y.L))).gI(0)
r=n.a
m=n.b
r.jB()
l=r.e
k=l[m].b
k===$&&B.c()
k=k.a.length()
r.jB()
j=l[m].b
j===$&&B.c()
i=A.k.E(a3*k/5,j.a.length())
for(h=0;h<10;++h){r.jB()
k=l[m].b
k===$&&B.c()
k=A.k.E(i-h*9,k.a.length())
r.jB()
g=l[m].MS(k).a
k=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
k.r=A.dR.j(1-h*0.09).gp(0)
k.z=L.Rv
u=k.H()
x.drawCircle(g.a,g.b,6-h*0.5,u)
u.delete()}x=a0*0.45
r=B.bw(B.ce(new B.v(s,x),a0*0.22,a0*0.12),A.ix)
m=B.N()
m.r=A.cS.gp(0)
a1.aE(r,m)
D.Gm(a1,"+",new B.v(s-5,a0*0.33),a0*0.07,A.c,A.bi,0,null)
f=(Math.sin(a3*2)+1)/2
e=new B.v(d*0.86,x)
x=B.N()
x.r=A.dR.j(0.25+0.5*f).gp(0)
x.z=H.HO
a1.af(e,a0*0.16,x)
x=B.N()
x.r=B.aq(A.bK,A.oO,f).gp(0)
a1.af(e,q,x)
D.Gm(a1,"Electricity needs a full loop!",new B.v(0,a0*0.74),a0*0.075,A.fW,A.L,0,d)},
hUJ(a4,a5,a6){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=a5.a,a1=a5.b,a2=0+a0,a3=0+a1
$.W()
x=B.N()
x.sar(C.c_d.aw(0,new B.a8(0,0,a2,a3)))
a4.b_(new B.a8(0,0,a2,a3),x)
x=a1*0.82
a3=B.N()
a3.r=A.db.gp(0)
a4.b_(new B.a8(0,x,a2,x+a1*0.18),a3)
for(a2=a0*0.1,a3=a4.a,w=0;w<7;++w){v=a0*(0.05+w*0.15)
u=a1*(0.1+0.07*A.o.E(w*5,4))
t=x-u
s=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
s.r=A.aw.gp(0)
r=s.H()
a3.drawRect(B.c_(new B.a8(v,t,v+a2,t+u)),r)
r.delete()}for(a2=a1*0.2,t=a6*0.55,q=0;q<4;++q){s=t+q*0.27
p=A.k.E(s,1)
o=A.k.bl(s)*7+q*3
n=a0*(0.15+0.7*A.k.E(o*0.37,1))
m=a1*(0.2+0.25*A.k.E(o*0.53,1))
l=C.av8[A.o.E(Math.abs(o),5)]
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
d.z=C.drJ
r=d.H()
a3.drawCircle(n+f*g,m+e*g+s,j,r)
r.delete()}}}},
i0X(a4,a5,a6){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=a5.a,d=a5.b,a0=0+e,a1=0+d,a2=$.W(),a3=B.N()
a3.sar(C.apg.aw(0,new B.a8(0,0,a0,a1)))
a4.b_(new B.a8(0,0,a0,a1),a3)
for(a1=a4.a,a3=y.v,x=0;x<2;++x,a2=w){w=B.a([],a3)
v=new B.aO(a2.r,A.ao,null,null,w)
w.push(new B.b5(0,d))
for(a2=x===0,u=0;u<=e;u+=6){t=a2?8:20
s=a2?0.55:0.68
r=a2?50:34
r=new B.ap(u,d*s+Math.sin((u+a6*t)/r)*d*0.06)
w.push(r)
t=v.f
if(t!=null)r.bD(t)
t=v.e
if(t!=null)t.a.delete()
v.e=null}t=new B.ap(e,d)
w.push(t)
w=v.f
if(w!=null)t.bD(w)
w=v.e
if(w!=null)w.a.delete()
v.e=null
w=$.W()
t=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
t.r=(a2?A.EK:A.AG).gp(0)
q=t.H()
a2=v.e
a1.drawPath((a2==null?v.e=new B.cC(v.gbK().a.snapshot()):a2).a,q)
q.delete()}a2=d*0.8
a3=B.N()
a3.r=A.br.gp(0)
a4.b_(new B.a8(0,a2,a0,a2+d*0.04),a3)
for(u=-A.k.E(a6*80,24),a0=d*0.84,a3=d*0.03,w=a0+a3;u<e;u+=24){t=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
t.r=A.fA.gp(0)
q=t.H()
a1.drawRect(B.c_(new B.a8(u,a0,u+8,w)),q)
q.delete()}p=Math.sin(a6*14)*1.2
o=e*0.12
for(a0=a2+p,a2=d*0.025,w=e*0.012,t=d*0.02,s=d*0.62+p,a3=s+a3,r=a3+d*0.06,n=s+d*0.18,m=0;m<4;++m){l=m===0
k=o+e*(l?0.16:0.15)
j=B.bw(new B.a8(o,s,k,n),new B.aS(t,t))
i=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
i.r=(l?A.bz:C.d2e[m-1]).gp(0)
q=i.H()
a1.drawRRect(B.er(j),q)
q.delete()
for(k-=o,j=k*0.18,h=0;h<3;++h){i=o+k*(0.12+h*0.28)
g=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
g.r=A.f9.gp(0)
q=g.H()
a1.drawRect(B.c_(new B.a8(i,a3,i+j,r)),q)
q.delete()}j=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
j.r=A.bk.gp(0)
q=j.H()
a1.drawCircle(o+k*0.25,a0,a2,q)
q.delete()
j=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
j.r=A.bk.gp(0)
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
i_8(a2,a3,a4){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=a3.a,d=a3.b,a0=0+e,a1=0+d
$.W()
x=B.N()
w=a4*2
v=B.aq(A.jg,A.f3,(Math.sin(w)+1)/2)
v.toString
x.sar(new B.a9(A.az,A.aC,A.x,B.a([v,A.aw],y.O),null,null).aw(0,new B.a8(0,0,a0,a1)))
a2.b_(new B.a8(0,0,a0,a1),x)
for(a0=a2.a,a1=d*0.86,x=e/8-2,v=d*0.14,u=a1+v,t=0;t<8;++t){s=e*t/8
r=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
r.r=(A.k.E(w+t,2)<1?A.bU:A.aO).j(0.5).gp(0)
q=r.H()
a0.drawRect(B.c_(new B.a8(s,a1,s+x,u)),q)
q.delete()}a1=a4*6
p=Math.sin(a1)
J.by(a0.save())
x=-d
a0.translate(e*0.5,d*0.55+Math.abs(p)*x*0.03)
a2.jc(0,p*0.06)
u=d*0.26
s=d*0.3
r=d*0.04
o=B.bw(B.ce(A.J,s,u),new B.aS(r,r))
n=B.N()
n.sar(C.c_C.aw(0,B.ce(A.J,s,u)))
a2.aE(o,n)
n=d*0.08
v=B.ce(new B.v(0,d*0.02),n,v)
o=B.N()
o.r=A.b8.j(0.7).gp(0)
a2.b_(v,o)
o=B.bw(B.ce(new B.v(0,x*0.25),d*0.17,d*0.22),new B.aS(r,r))
v=B.N()
v.r=A.cs.gp(0)
a2.aE(o,v)
m=A.k.E(a4*1.3,1)>0.08
for(v=x*0.26,u=d*0.025,l=0;l<2;++l){k=C.ckp[l]
s=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
s.r=(m?A.b8:A.f3).gp(0)
q=s.H()
a0.drawCircle(k*d,v,u,q)
q.delete()}v=B.N()
v.r=A.ad.gp(0)
v.c=3
a2.bE(new B.v(0,x*0.335),new B.v(0,x*0.38),v)
v=B.N()
v.r=A.av.gp(0)
a2.af(new B.v(0,x*0.39),d*0.015,v)
for(v=-p,u=d*0.035,s=d*0.15,o=d*0.28,x*=0.08,l=0;l<2;++l){j=C.ly[l]
J.by(a0.save())
i=j*d
a0.translate(i*0.14,x)
h=j>0
a0.rotate(j*(0.7+Math.sin(a1+(h?0:3.141592653589793))*0.8)*180/3.141592653589793,0,0)
g=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
g.r=A.bK.gp(0)
g.c=u
g.d=A.bT
q=g.H()
a0.drawLine.apply(a0,[0,0,i*0.16,0,q])
q.delete()
a0.restore()
h=h?p:v
g=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
g.r=A.bK.gp(0)
g.c=r
g.d=A.bT
q=g.H()
a0.drawLine.apply(a0,[i*0.06,s,i*0.08,o+h*d*0.02,q])
q.delete()}a0.restore()
for(a0=a4*0.7,a1=d*0.7,t=0;t<4;++t){f=A.k.E(a0+t*0.25,1)
D.Gm(a2,"\u266a",new B.v(e*(0.2+0.18*t)+Math.sin(w+t)*8,a1-f*d*0.5),n,A.c.j(1-f),A.bi,0,null)}},
hUU(a1,a2,a3){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=a2.a,e=a2.b,d=0+f,a0=0+e
$.W()
x=B.N()
x.sar(C.bZc.aw(0,new B.a8(0,0,d,a0)))
a1.b_(new B.a8(0,0,d,a0),x)
x=B.N()
x.r=A.dR.gp(0)
a1.af(new B.v(f*0.12,e*0.16),e*0.07,x)
x=e*0.72
a0=B.N()
a0.r=A.EK.gp(0)
a1.b_(new B.a8(0,x,d,x+e*0.28),a0)
for(d=a3*0.25,a0=e*0.78,x=a1.a,w=e*0.016,v=a3*0.3,u=e*0.022,t=0;t<9;++t){s=f*(0.07+t*0.105)
r=A.k.D(A.k.E(d-t*0.12,3),0,1)
q=A.o.E(t,3)
p=s+Math.sin(a3+t)*3
q=a0-e*(0.12+0.05*q)*r
o=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
o.r=A.hl.gp(0)
o.c=3
n=o.H()
x.drawLine.apply(x,[s,a0,p,q,n])
n.delete()
if(r>0.7){for(m=0;m<6;++m){l=m*3.141592653589793/3+v
o=Math.cos(l)
k=Math.sin(l)
j=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
j.r=C.axa[A.o.E(t,5)].gp(0)
n=j.H()
x.drawCircle(p+o*e*0.028,q+k*e*0.028,u,n)
n.delete()}o=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
o.r=A.dR.gp(0)
n=o.H()
x.drawCircle(p,q,w,n)
n.delete()}}for(d=e*0.03,a0=e*0.05,w=e*0.06,v=a3*0.9,u=a3*1.3,q=a3*18,t=0;t<3;++t){s=f*(0.2+0.28*t)+Math.sin(v+t*2)*f*0.12
i=e*(0.3+0.1*t)+Math.cos(u+t)*e*0.06
h=Math.abs(Math.sin(q+t))
for(p=a0*h+2,o=(t+2)%5,g=0;g<2;++g){k=B.ce(new B.v(s+C.ly[g]*e*0.025*h,i),w,p)
j=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
j.r=C.axa[o].gp(0)
n=j.H()
x.drawOval(B.c_(k),n)
n.delete()}p=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
p.r=A.bk.gp(0)
p.c=2
n=p.H()
x.drawLine.apply(x,[s,i-d,s,i+d,n])
n.delete()}},
h5o(d,e,f,g,h,i){return B.a5(d,!1).cm(B.uN(null,!1,!0,!0,new D.fSX(e,h,g,i,f),A.eM,null,A.pV,new D.fSY(),y.S))},
xJ:function xJ(d,e){this.a=d
this.b=e},
fsC:function fsC(d,e,f){this.a=d
this.b=e
this.c=f},
fSX:function fSX(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fSY:function fSY(){},
Wj:function Wj(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aEr:function aEr(d,e){var _=this
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
eHW:function eHW(d){this.a=d},
eHV:function eHV(d){this.a=d},
eHU:function eHU(d,e){this.a=d
this.b=e},
eHX:function eHX(d,e){this.a=d
this.b=e},
eI5:function eI5(d){this.a=d},
eI4:function eI4(d){this.a=d},
eI3:function eI3(){},
eHZ:function eHZ(d){this.a=d},
eI_:function eI_(d){this.a=d},
eI0:function eI0(d){this.a=d},
eI1:function eI1(d){this.a=d},
eHY:function eHY(d){this.a=d},
eI2:function eI2(d){this.a=d},
eHT:function eHT(d){this.a=d},
eHS:function eHS(d){this.a=d},
buz:function buz(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.a=h},
aMg:function aMg(){},
h5t(d){var x
A:{if("lgtv"===d){x="lg"
break A}if("sonytv"===d){x="sony"
break A}if("appletv"===d){x="apple"
break A}if("bangtv"===d){x="bo"
break A}x="samsung"
break A}return x},
ieG(d){var x,w=D.h5t(d)
A:{if("lg"===w){x=A.hj
break A}if("sony"===w){x=A.dt
break A}if("apple"===w){x=A.bN
break A}if("bo"===w){x=C.tp
break A}x=A.aO
break A}return x},
arQ:function arQ(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bkI:function bkI(){this.d=0
this.c=this.a=null},
eHQ:function eHQ(d,e){this.a=d
this.b=e},
eHR:function eHR(d,e){this.a=d
this.b=e},
eHN:function eHN(){},
eHM:function eHM(d){this.a=d},
eHO:function eHO(d){this.a=d},
eHP:function eHP(d){this.a=d},
eHK:function eHK(d){this.a=d},
eHL:function eHL(d,e){this.a=d
this.b=e},
hKr(b3,b4,b5,b6,b7){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9=A.o.am(22050*b4,1000),b0=a9*2,b1=new DataView(new ArrayBuffer(44+b0)),b2=new D.cgE(b1)
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
x=new B.eE()
x.dt(3)
w=3
v=0.006
u=!1
t=0
switch(b7){case"piano":s=C.cWs
r=C.d0H
w=3.4
break
case"organ":s=C.d_x
r=C.df8
v=0.02
u=!0
break
case"bell":s=C.cSb
r=C.cR0
w=2.4
break
case"pluck":s=C.cWr
r=C.cCO
w=7
break
case"synth":s=C.dg_
r=C.dhH
v=0.012
u=!0
break
case"flute":s=C.dm5
r=C.cd8
v=0.07
u=!0
t=0.035
break
default:s=C.apH
r=C.apH}b0=s.length
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
dH(d,e,f,g,h,i){return D.hKs(d,e,f,g,h,i)},
hKs(d,e,f,g,h,i){var x=0,w=B.j(y.H),v=1,u=[],t,s,r,q,p,o
var $async$dH=B.e(function(j,k){if(j===1){u.push(k)
x=v}for(;;)switch(x){case 0:v=3
t=""+A.k.V(d)+"|"+f+"|"+i+"|"+B.u(g)+"|"+e
s=$.hKq.ca(0,t,new D.cgG(d,f,i,g,e))
if($.cgD.length<12){q=B.air()
q.N0(A.aNg)
$.cgD.push(q)}q=$.heM
$.heM=q+1
r=$.cgD[A.o.E(q,$.cgD.length)]
x=6
return B.b(J.hxC(r,new B.a39(s,null),h),$async$dH)
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
cgE:function cgE(d){this.a=d},
cgG:function cgG(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h}},C,M,N
J=c[1]
B=c[0]
A=c[2]
G=c[121]
E=c[123]
H=c[125]
I=c[172]
K=c[95]
F=c[116]
L=c[96]
D=a.updateHolder(c[26],D)
C=c[93]
M=c[102]
N=c[231]
D.wr.prototype={}
D.vU.prototype={}
D.xJ.prototype={}
D.Wj.prototype={
S(){return new D.aEr(null,null)}}
D.aEr.prototype={
gae_(){var x,w=this,v=w.d
if(v===$){x=B.bj(null,A.o5,null,1,null,w)
x.cs(0)
w.d!==$&&B.bL()
w.d=x
v=x}return v},
gDj(){var x=this.e
return x===$?this.e=this.a.e:x},
Z(){var x=this
x.a1()
x.w=B.cM(x.a.r,x.gaZk())
x.aVl()
D.dH(520,"",80,0,0.25,"tri")},
aVl(){var x=this.z
if(x!=null)x.a7(0)
this.z=B.cM(A.k4,new D.eHW(this))},
c7v(){var x=this.c
if(x!=null&&B.a5(x,!1).pC()){x=this.c
x.toString
B.a5(x,!1).O(this.gDj())}},
aiX(){var x=this,w=x.w
if(w!=null)w.a7(0)
x.w=null
x.y=!0
x.aVl()},
awY(d){this.m(new D.eHU(this,d))
D.dH(900,"",40,0,0.3,"noise")},
b06(d){this.m(new D.eHX(this,d))
D.dH(700,"",60,0,0.3,"tri")},
q(){var x=this,w=x.w
if(w!=null)w.a7(0)
w=x.z
if(w!=null)w.a7(0)
x.gae_().q()
x.bwi()},
B(d){var x,w,v,u,t=this,s=null,r=B.n(10),q=B.I(t.gc7w(),A.q,6),p=B.a([new B.ac(0,A.G,D.ieG(t.a.d).j(0.25),A.J,40)],y.V),o=B.n(4),n=y.p,m=B.a([B.c7(t.gae_(),new D.eI4(t),s)],n)
if(t.r)m.push(t.bBN())
r=B.av(new B.fL(1.7777777777777777,B.p(s,B.bx(o,new B.an(A.W,s,A.b2,A.r,m,s),A.aq),A.f,s,s,new B.o(s,s,q,r,p,s,A.n),s,s,s,s,s,s,s,s),s),s,s,s)
q=t.y
p=q?1:0
o=B.nE(s,A.aW,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s)
o=B.aH(s,s,s,s,B.X(A.cB,A.c,s,s,s,s),s,s,s,t.gaZk(),s,s,s,o,"Back to the board",s)
m=B.n(20)
x=t.f
w=t.a
o=B.B(B.a([o,A.b7,B.p(s,B.d(x>=0?w.c+" \xb7 "+C.ka[x].a:w.c+" \xb7 CH "+(t.gDj()+1),s,s,s,s,s,s,M.zQ,s,s,s),A.f,s,s,new B.o(A.aW,s,s,m,s,s,A.n),s,s,s,s,A.mu,s,s,s)],n),A.m,s,A.e,A.j,0,s,s)
m=t.cor()
x=A.w.j(0.65)
w=B.n(18)
v=t.f
v=B.d(v>=0?C.ka[v].a:C.Qk[t.gDj()].a,s,s,s,s,s,s,A.hK,A.L,s,s)
u=t.f
return B.c6(s,A.w,B.bm(!0,B.aB(A.c7,new B.an(A.W,s,A.b2,A.r,B.a([r,B.Db(B.e1(B.x(B.a([new B.D(C.bsF,o,s),A.am,m,A.b7,B.p(s,B.x(B.a([v,B.d(u>=0?C.ka[u].c:C.Qk[t.gDj()].b,s,s,s,s,s,s,K.a8r,A.L,s,s)],n),A.m,s,A.e,A.N,0,A.p),A.f,s,s,new B.o(x,s,s,w,s,s,A.n),s,s,s,A.bl,A.bR,s,s,s)],n),A.m,s,A.e,A.j,0,A.p),!q,s),A.bd,A.il,p)],n),s),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new D.eI5(t),s,s,s,s,s,s,!1,A.a5),!0,!1,A.af,!0,!0),s,!1,!1,s,s)},
cor(){var x=this,w=null,v=new D.eI3(),u=A.w.j(0.72),t=B.n(22),s=B.I(A.aO.j(0.5),A.q,1)
return B.p(w,B.B(B.a([v.$3(A.yv,"CH \u2212",new D.eHZ(x)),v.$3(A.hE,"CH +",new D.eI_(x)),v.$5$color$on(A.Gq,"TV",new D.eI0(x),A.aO,x.f<0),v.$5$color$on(A.yf,"APPS",new D.eI1(x),A.bu,x.r),v.$5$color$on(A.BO,"ADS",new D.eI2(x),A.bU,x.f===0)],y.p),A.m,w,A.e,A.N,0,w,w),A.f,w,w,new B.o(u,w,s,t,w,w,A.n),w,w,w,w,A.ZD,w,w,w)},
bBN(){return new D.arQ(this.a.d,this.gcd8(),new D.eHT(this),null)},
gc7w(){var x,w=D.h5t(this.a.d)
A:{if("apple"===w){x=A.dt
break A}if("bo"===w){x=C.Ey
break A}if("sony"===w){x=C.b8Y
break A}if("lg"===w){x=A.ed
break A}x=A.cp
break A}return x}}
D.buz.prototype={
a3(d,e){var x=this
return D.h55(d,e,x.b,x.d,x.e,x.c)},
au(d){return!0}}
D.aMg.prototype={
q(){var x=this,w=x.a9$
if(w!=null)w.a4(0,x.gbx())
x.a9$=null
x.a2()},
aU(){this.b3()
this.b0()
this.by()}}
D.arQ.prototype={
S(){return new D.bkI()},
a5y(d,e){return this.d.$1(e)}}
D.bkI.prototype={
aZl(d){this.m(new D.eHQ(this,d))
this.a.a5y(0,d)},
B(d){var x,w=this,v=D.h5t(w.a.c)
A:{if("lg"===v){x=w.c09()
break A}if("sony"===v){x=w.cwe()
break A}if("apple"===v){x=w.c7x()
break A}if("bo"===v){x=w.bCH()
break A}x=w.cqx()
break A}return x},
gae0(){var x=new B.T(Date.now(),0,!1)
return A.a.aX(A.o.u(B.dk(x)),2,"0")+":"+A.a.aX(A.o.u(B.h4(x)),2,"0")},
awZ(d,e,f,g,h,i,j){var x,w,v=null,u=C.ka[d],t=this.d===d,s=u.d,r=B.aq(s,A.w,0.55)
r.toString
r=B.a([s,r],y.O)
s=B.n(h)
if(t)x=i
else x=A.K
x=B.I(x,A.q,t?2.5:0)
w=B.a([B.d(u.b,v,v,v,v,v,v,B.l(v,v,v,v,v,v,v,v,v,v,v,e,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],y.p)
if(g)w.push(new B.D(A.vz,B.d(u.a,v,1,A.a2,v,v,v,A.U8,v,v,v),v))
return B.aB(v,B.p(v,B.x(w,A.m,v,A.b9,A.j,0,A.p),A.f,v,v,new B.o(v,v,x,s,v,new B.a9(A.az,A.aC,A.x,r,v,v),A.n),v,f,v,v,v,v,v,j),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new D.eHR(this,d),v,v,v,v,v,v,!1,A.a5)},
aZm(d,e,f,g,h,i){return this.awZ(d,e,f,!1,g,h,i)},
cqx(){var x,w,v,u,t,s,r=this,q=null,p=r.a.e,o=y.p,n=B.B(B.a([C.fs7,A.ab,C.fkp,A.b7,C.bQX,A.ab,C.bMS,A.ab,B.d(r.gae0(),q,q,q,q,q,q,C.aRo,q,q,q)],o),A.m,q,A.e,A.j,0,q,q),m=C.ka[r.d],l=B.d(m.a,q,q,q,q,q,q,A.lE,q,q,q)
m=B.d(m.c,q,1,A.a2,q,q,q,C.fcg,q,q,q)
x=A.c.j(0.08)
w=B.a([],o)
for(v=0;v<2;++v){u=new B.aS(8,8)
w.push(B.p(q,B.X(C.ckd[v],A.ad,q,q,q,17),A.f,q,q,new B.o(A.bD,q,q,new B.bn(u,u,u,u),q,q,A.n),q,34,q,A.Mq,q,q,q,34))}u=B.a([],o)
for(t=0;t<8;++t){s=r.d===t?1.12:1
u.push(new B.D(A.Mq,new B.yM(r.awZ(t,14,44,!0,8,A.aO,52),s,A.bd,A.fB,q,q),q))}w.push(B.E(B.cc(B.B(u,A.m,q,A.e,A.j,0,q,q),A.r,q,A.y,q,q,q,q,A.aP),1))
return B.aB(q,B.p(q,B.x(B.a([n,A.b7,new B.bI(A.a3,q,q,l,q),new B.bI(A.a3,q,q,m,q),A.am,B.p(q,B.B(w,A.m,q,A.e,A.j,0,q,q),A.f,q,q,new B.o(x,q,q,A.VE,q,q,A.n),q,q,q,q,A.MR,q,q,q)],o),A.m,q,A.e,A.j,0,A.p),A.f,q,q,C.b14,q,q,q,q,E.ahO,q,q,q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,p,q,q,q,q,q,q,!1,A.a5)},
c09(){var x=null,w=this.a.e,v=y.p
return B.aB(x,B.p(x,B.x(B.a([B.B(B.a([B.p(x,C.fy8,A.f,x,x,new B.o(A.hj,x,x,B.n(10),x,x,A.n),x,x,x,x,A.nl,x,x,x),A.bp,C.fr5,A.b7,B.d(this.gae0(),x,x,x,x,x,x,A.Dz,x,x,x)],v),A.m,x,A.e,A.j,0,x,x),A.b7,new B.a7(x,62,B.hN(x,new D.eHM(this),8,x,x,A.aP,new D.eHN(),!1),x)],v),A.F,x,A.e,A.j,0,A.p),A.f,x,x,C.b1f,x,x,x,x,N.Mx,x,x,x),A.y,!1,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,w,x,x,x,x,x,x,!1,A.a5)},
cwe(){var x,w,v,u,t=this,s=null,r=C.ka[t.d],q=t.a.e,p=y.p,o=B.a([B.p(s,C.eRf,A.f,s,s,new B.o(A.dp,s,s,B.n(12),s,s,A.n),s,s,s,s,A.y_,s,s,s),A.ab],p)
for(x=0;x<3;++x){w=C.dc2[x]
v=w==="Apps"?A.c:A.aA
o.push(new B.D(A.io,new B.y(w,s,new B.H(!0,v,s,s,s,s,9.5,A.P,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s),s,s,s,s,s,s,s,s,s),s))}o.push(A.b7)
o.push(B.d(t.gae0(),s,s,s,s,s,s,C.fbE,s,s,s))
o=B.B(o,A.m,s,A.e,A.j,0,s,s)
v=r.d
u=B.aq(v,A.w,0.7)
u.toString
u=B.a([v,u],y.O)
v=B.n(10)
return B.aB(s,B.p(s,B.x(B.a([o,A.fF,B.E(B.B(B.a([B.E(B.p(s,B.x(B.a([B.d(r.b,s,s,s,s,s,s,A.pm,s,s,s),B.d(r.a,s,s,s,s,s,s,A.nF,s,s,s),B.d(r.c,s,2,A.a2,s,s,s,C.fhT,s,s,s),A.cV,B.aB(s,B.p(s,C.fnZ,A.f,s,s,new B.o(A.c,s,s,B.n(10),s,s,A.n),s,s,s,s,A.y_,s,s,s),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new D.eHO(t),s,s,s,s,s,s,!1,A.a5)],p),A.F,s,A.m3,A.j,0,A.p),A.f,s,s,new B.o(s,s,s,v,s,new B.a9(A.a3,A.a8,A.x,u,s,s),A.n),s,s,s,s,A.cq,s,s,s),5),A.ab,B.E(B.im(!0,s,s,A.y,C.eXL,new D.eHP(t),8,A.af,s,A.ag,!1),6)],p),A.m,s,A.e,A.j,0,s,s),1)],p),A.F,s,A.e,A.j,0,A.p),A.f,C.bjI,s,s,s,s,s,s,A.fO,s,s,s),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,q,s,s,s,s,s,s,!1,A.a5)},
c7x(){var x,w,v,u,t=this,s=null,r=t.a.e,q=y.p,p=B.B(B.a([C.bRy,A.qv,C.fE4,A.b7,B.d(t.gae0(),s,s,s,s,s,s,A.DC,s,s,s)],q),A.m,s,A.e,A.j,0,s,s),o=B.a([],q)
for(x=0;x<8;++x){w=t.d===x
v=w?6:0
u=w?C.dhs:A.QG
w=w?1.18:1
o.push(new B.D(A.eS,B.df(s,new B.yM(t.aZm(x,20,44,12,A.c,44),w,A.bd,A.eJ,s,s),s,s,A.bd,new B.o(s,s,s,s,u,s,A.n),A.eJ,s,s,new B.R(0,0,0,v),s,s,s,s),s))}return B.aB(s,B.p(s,B.x(B.a([p,A.b7,new B.a7(s,68,B.cc(B.B(o,A.dz,s,A.e,A.j,0,s,s),A.r,s,A.y,s,s,s,s,A.aP),s),A.au,B.d(C.ka[t.d].a,s,s,s,s,s,s,A.ox,s,s,s)],q),A.m,s,A.e,A.j,0,A.p),A.f,s,s,C.b16,s,s,s,s,C.YT,s,s,s),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,r,s,s,s,s,s,s,!1,A.a5)},
bCH(){var x,w,v,u,t,s,r=this,q=null,p=r.a.e,o=C.ka[r.d],n=y.p
o=B.E(B.x(B.a([C.fnx,A.b7,B.d(o.b,q,q,q,q,q,q,A.ou,q,q,q),A.au,B.d(o.a,q,q,q,q,q,q,C.f4b,q,q,q),A.bC,B.d(o.c,q,q,q,q,q,q,C.fib,q,q,q),A.am,B.aB(q,B.p(q,C.fGb,A.f,q,q,C.b1C,q,q,q,q,C.brO,q,q,q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new D.eHK(r),q,q,q,q,q,q,!1,A.a5),A.b7],n),A.F,q,A.e,A.j,0,A.p),4)
x=B.p(q,q,A.f,C.bhH,q,q,q,q,q,A.fZ,q,q,q,0.6)
w=B.a([],n)
for(v=0;v<8;++v){u=C.ka[v]
t=r.d===v
s=t?C.tp:C.adb
t=t?12:10.5
w.push(B.aB(q,new B.D(A.xM,new B.y(u.a,q,new B.H(!0,s,q,"serif",q,q,t,A.k5,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q),q,q,q,q,q,q,q,q,q),q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new D.eHL(r,v),q,q,q,q,q,q,!1,A.a5))}return B.aB(q,B.p(q,B.B(B.a([o,x,B.E(B.cw(w,q,q,q,q,A.ag,!1),3)],n),A.m,q,A.e,A.j,0,q,q),A.f,C.bn1,q,q,q,q,q,q,A.FG,q,q,q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,p,q,q,q,q,q,q,!1,A.a5)}}
var z=a.updateTypes(["~()","Wj(Y,br<K>,br<K>)","~(G)"])
D.fsp.prototype={
$1(d){var x=null,w=B.fZ(x,x,1,x,B.d0(x,x,x,x,x,x,x,x,x,B.l(x,x,this.b,x,x,x,x,x,x,x,x,d,x,x,A.u,x,x,!0,x,x,x,x,x,x,x,x),this.a),A.a4,A.c6,x,A.dO,A.c3)
w.en()
return w},
$S:750}
D.fsj.prototype={
$1(d){return Math.min(this.a*0.085,this.b*0.44/(d.length*0.62))},
$S:1961}
D.fjI.prototype={
$1(d){var x=this,w=null,v=x.c?A.u:A.a7
v=B.fZ(w,w,1,w,B.d0(w,w,w,w,w,w,w,w,w,B.l(w,w,x.b,w,w,w,w,w,w,w,w,d,w,w,v,w,w,!0,w,x.d,w,w,w,w,w,w),x.a),A.a4,A.c6,w,A.dO,A.c3)
v.en()
return v},
$S:750}
D.fsC.prototype={
$5(d,e,f,g,h){var x,w,v,u,t,s,r,q=this
if(g===0||h<=0)return
x=f*A.k.D(h,0,1)
w=d.ad(0,new B.v(Math.cos(e)*x,-Math.sin(e)*x))
v=q.a
$.W()
u=B.N()
u.r=A.fA.gp(0)
u.c=g*2.2
u.d=A.bT
v.bE(d,w,u)
if(h>0.95){t=Math.sin(q.b*1.6+g)*0.04
u=f*0.72
s=g-1
r=h*1.6-0.9
q.$5(w,e+0.5+t,u,s,r-(5-g)*0)
q.$5(w,e-0.5+t,u,s,r)}if(g===1&&h>0.5){u=B.N()
u.r=B.aq(A.cS,A.aZ,(Math.sin(q.b*2+w.a)+1)/2).gp(0)
v.af(w,q.c*0.035,u)}},
$S:1962}
D.fSX.prototype={
$3(d,e,f){var x=this
return new D.Wj(x.d,x.e,x.a,x.c,x.b,null)},
$C:"$3",
$R:3,
$S:z+1}
D.fSY.prototype={
$4(d,e,f,g){var x=y.t
return new B.d_(e,!1,B.is(A.A,g,null,new B.bf(B.cH(A.cu,e,null),new B.bq(0.85,1,x),x.k("bf<bJ.T>"))),null)},
$C:"$4",
$R:4,
$S:32}
D.eHW.prototype={
$0(){var x=this.a
if(x.c!=null&&!x.r)x.m(new D.eHV(x))},
$S:0}
D.eHV.prototype={
$0(){return this.a.y=!1},
$S:0}
D.eHU.prototype={
$0(){var x,w=this.a
w.f=-1
w.e=A.o.E(w.gDj()+this.b,10)
if(w.gDj()<0)w.e=w.gDj()+10
x=w.gae_().y
x=x==null?null:A.o.am(x.a,1000)
w.x=x==null?0:x
w.aiX()},
$S:0}
D.eHX.prototype={
$0(){var x=this.a
x.f=this.b
x.r=!1
x.aiX()},
$S:0}
D.eI5.prototype={
$0(){var x=this.a
return x.m(x.gcBk())},
$S:0}
D.eI4.prototype={
$2(d,e){var x=null,w=this.a,v=w.gae_().y,u=v==null?x:A.o.am(v.a,1000),t=(u==null?0:u)/1000,s=w.x===0&&w.a.f?t:99
return B.b3(x,x,x,new D.buz(w.gDj(),w.f,t,s,x),A.f6)},
$S:70}
D.eI3.prototype={
$5$color$on(d,e,f,g,h){var x=null,w=h?g.j(0.28):A.c.j(0.08),v=B.n(14),u=B.I(h?g:A.b_,A.q,1)
return B.aB(x,B.p(x,B.x(B.a([B.X(d,g,x,x,x,20),A.uS,B.d(e,x,x,x,x,x,x,B.l(x,x,g,x,x,x,x,x,x,x,x,9.5,x,x,A.H,x,x,!0,x,x,x,x,x,x,x,x),x,x,x)],y.p),A.m,x,A.e,A.N,0,A.p),A.f,x,x,new B.o(w,x,u,v,x,x,A.n),x,x,x,A.jr,A.kW,x,x,56),A.y,!1,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,f,x,x,x,x,x,x,!1,A.a5)},
$3(d,e,f){return this.$5$color$on(d,e,f,A.c,!1)},
$4$color(d,e,f,g){return this.$5$color$on(d,e,f,g,!1)},
$S:1963}
D.eHZ.prototype={
$0(){return this.a.awY(-1)},
$S:0}
D.eI_.prototype={
$0(){return this.a.awY(1)},
$S:0}
D.eI0.prototype={
$0(){return this.a.awY(0)},
$S:0}
D.eI1.prototype={
$0(){var x=this.a
return x.m(new D.eHY(x))},
$S:0}
D.eHY.prototype={
$0(){var x=this.a
x.r=!x.r
x.aiX()},
$S:0}
D.eI2.prototype={
$0(){return this.a.b06(0)},
$S:0}
D.eHT.prototype={
$0(){var x=this.a
return x.m(new D.eHS(x))},
$S:0}
D.eHS.prototype={
$0(){return this.a.r=!1},
$S:0}
D.eHQ.prototype={
$0(){return this.a.d=this.b},
$S:0}
D.eHR.prototype={
$0(){return this.a.aZl(this.b)},
$S:0}
D.eHN.prototype={
$2(d,e){return A.bp},
$S:37}
D.eHM.prototype={
$2(d,e){var x=null,w=this.a,v=w.d===e?1.1:1
v=B.a([B.vu(w.aZm(e,18,46,6,A.c,80),A.bd,A.fB,v)],y.p)
if(w.d===e)v.push(new B.D(A.vz,B.d(C.ka[e].a,x,x,x,x,x,x,C.fgp,x,x,x),x))
return B.x(v,A.m,x,A.e,A.N,0,A.p)},
$S:674}
D.eHO.prototype={
$0(){var x=this.a
return x.a.a5y(0,x.d)},
$S:0}
D.eHP.prototype={
$2(d,e){return this.a.awZ(e,15,1/0,!0,8,A.c,1/0)},
$S:41}
D.eHK.prototype={
$0(){var x=this.a
return x.a.a5y(0,x.d)},
$S:0}
D.eHL.prototype={
$0(){return this.a.aZl(this.b)},
$S:0}
D.cgE.prototype={
$2(d,e){var x,w,v,u
for(x=e.length,w=this.a,v=w.$flags|0,u=0;u<x;++u){v&2&&B.aj(w,9)
w.setUint8(d+u,e.charCodeAt(u))}},
$S:449}
D.cgG.prototype={
$0(){var x=this
return D.hKr(x.a,x.b,x.c,x.d,x.e)},
$S:291};(function aliases(){var x=D.aMg.prototype
x.bwi=x.q})();(function installTearOffs(){var x=a._instance_0u,w=a._instance_1u
var v
x(v=D.aEr.prototype,"gaZk","c7v",0)
x(v,"gcBk","aiX",0)
w(v,"gcd8","b06",2)})();(function inheritance(){var x=a.mixinHard,w=a.inheritMany,v=a.inherit
w(B.i0,[D.fsp,D.fsj,D.fjI,D.fsC,D.fSX,D.fSY,D.eI3])
w(B.aD,[D.wr,D.vU,D.xJ])
w(B.ag,[D.Wj,D.arQ])
w(B.ah,[D.aMg,D.bkI])
v(D.aEr,D.aMg)
w(B.ja,[D.eHW,D.eHV,D.eHU,D.eHX,D.eI5,D.eHZ,D.eI_,D.eI0,D.eI1,D.eHY,D.eI2,D.eHT,D.eHS,D.eHQ,D.eHR,D.eHO,D.eHK,D.eHL,D.cgG])
w(B.kn,[D.eI4,D.eHN,D.eHM,D.eHP,D.cgE])
v(D.buz,B.mP)
x(D.aMg,B.c9)})()
B.k2(b.typeUniverse,JSON.parse('{"Wj":{"ag":[],"t":[]},"aEr":{"ah":["Wj"]},"buz":{"aC":[]},"arQ":{"ag":[],"t":[]},"bkI":{"ah":["arQ"]},"Nk":{"ag":[],"t":[]}}'))
var y=(function rtii(){var x=B.ax
return{L:x("O<a3_>"),V:x("O<ac>"),O:x("O<w>"),v:x("O<hv>"),s:x("O<m>"),p:x("O<t>"),n:x("O<K>"),t:x("bq<K>"),i:x("K"),S:x("G"),H:x("~")}})();(function constants(){var x=a.makeConstList
C.bb1=new B.w(1,0.0196078431372549,0.03137254901960784,0.058823529411764705,A.t)
C.blh=new B.w(1,0.043137254901960784,0.10196078431372549,0.2,A.t)
C.d8P=x([C.bb1,C.blh],y.O)
C.bZS=new B.a9(A.b1,A.b5,A.x,C.d8P,null,null)
C.b14=new B.o(null,null,null,null,null,C.bZS,A.n)
C.bj6=new B.w(1,0.42745098039215684,0.47843137254901963,0.5764705882352941,A.t)
C.b9l=new B.w(1,0.16862745098039217,0.1803921568627451,0.26666666666666666,A.t)
C.bal=new B.w(1,0.4823529411764706,0.29411764705882354,0.41568627450980394,A.t)
C.dkz=x([C.bj6,C.b9l,C.bal],y.O)
C.bYe=new B.a9(A.az,A.aC,A.x,C.dkz,null,null)
C.b16=new B.o(null,null,null,null,null,C.bYe,A.n)
C.aXW=new B.dc(0.5,-0.6)
C.bmu=new B.w(1,0.22745098039215686,0.054901960784313725,0.10980392156862745,A.t)
C.d4c=x([C.bmu,A.ed],y.O)
C.ejS=new B.bV(C.aXW,1.3,A.x,null,0,C.d4c,null,null)
C.b1f=new B.o(null,null,null,null,null,C.ejS,A.n)
C.tp=new B.w(1,0.8392156862745098,0.7176470588235294,0.4823529411764706,A.t)
C.b_l=new B.az(C.tp,1,A.q,-1)
C.b_y=new B.bO(A.Y,A.Y,C.b_l,A.Y)
C.b1C=new B.o(null,null,C.b_y,null,null,null,A.n)
C.acK=new B.w(0.9490196078431372,0.06666666666666667,0.07450980392156863,0.09411764705882353,A.t)
C.b8Y=new B.w(1,0.16470588235294117,0.16470588235294117,0.17647058823529413,A.t)
C.b90=new B.w(1,0.00784313725490196,0.01568627450980392,0.03529411764705882,A.t)
C.adb=new B.w(1,0.6588235294117647,0.6235294117647059,0.5647058823529412,A.t)
C.Eu=new B.w(1,0.12156862745098039,0.07058823529411765,0.03529411764705882,A.t)
C.Ey=new B.w(1,0.7215686274509804,0.6980392156862745,0.6549019607843137,A.t)
C.adT=new B.w(1,0.8784313725490196,0.6745098039215687,0.4117647058823529,A.t)
C.ae9=new B.w(1,0.00784313725490196,0.011764705882352941,0.0392156862745098,A.t)
C.ER=new B.w(1,0.06666666666666667,0.0784313725490196,0.09411764705882353,A.t)
C.bg2=new B.w(1,0.011764705882352941,0.023529411764705882,0.09019607843137255,A.t)
C.AQ=new B.w(1,0.09019607843137255,0.09019607843137255,0.10196078431372549,A.t)
C.AS=new B.w(1,0.054901960784313725,0.07058823529411765,0.09411764705882353,A.t)
C.bhH=new B.w(1,0.2901960784313726,0.26666666666666666,0.23529411764705882,A.t)
C.kT=new B.w(1,0.09019607843137255,0.09019607843137255,0.10980392156862745,A.t)
C.bjI=new B.w(1,0.08627450980392157,0.09411764705882353,0.10980392156862745,A.t)
C.bkc=new B.w(1,0.24705882352941178,0.3843137254901961,0.07058823529411765,A.t)
C.XK=new B.w(1,1,0.41568627450980394,0,A.t)
C.n9=new B.w(1,0.10588235294117647,0.10588235294117647,0.12156862745098039,A.t)
C.r2=new B.w(1,0.5529411764705883,0.3333333333333333,0.1411764705882353,A.t)
C.XR=new B.w(1,1,0.9529411764705882,0.6274509803921569,A.t)
C.bn1=new B.w(1,0.10196078431372549,0.09019607843137255,0.0784313725490196,A.t)
C.brO=new B.R(0,0,0,1)
C.tP=new B.R(0,0,7,0)
C.bsF=new B.R(10,10,10,0)
C.YT=new B.R(10,6,10,8)
C.ai5=new B.R(14,10,10,10)
C.alz=new B.a0(62970,"MaterialIcons",!1)
C.amx=new B.a0(983316,"MaterialIcons",!1)
C.uh=new B.a0(983617,"MaterialIcons",!1)
C.bMS=new B.ae(A.C0,13,A.ad,null,null,null)
C.bQX=new B.ae(A.fg,13,A.ad,null,null,null)
C.bIu=new B.a0(983768,"MaterialIcons",!1)
C.bRy=new B.ae(C.bIu,13,A.c,null,null,null)
C.cDW=x([A.aO,A.jl,A.qX],y.O)
C.bX2=new B.a9(A.b1,A.b5,A.x,C.cDW,null,null)
C.bX8=new B.a9(A.b1,A.b5,A.x,I.Qe,null,null)
C.cYC=x([A.fc,A.dP,A.ct],y.O)
C.bXl=new B.a9(A.b1,A.b5,A.x,C.cYC,null,null)
C.cWT=x([A.dR,A.av],y.O)
C.bY1=new B.a9(A.b1,A.b5,A.x,C.cWT,null,null)
C.djH=x([A.bN,A.c,A.bK],y.O)
C.bYh=new B.a9(A.a3,A.a8,A.x,C.djH,null,null)
C.dkg=x([A.fW,A.fK],y.O)
C.apg=new B.a9(A.b1,A.b5,A.x,C.dkg,null,null)
C.dbz=x([A.dl,A.oO],y.O)
C.bZc=new B.a9(A.b1,A.b5,A.x,C.dbz,null,null)
C.c_d=new B.a9(A.b1,A.b5,A.x,F.avl,null,null)
C.d6U=x([A.aL,A.ak],y.O)
C.c_C=new B.a9(A.b1,A.b5,A.x,C.d6U,null,null)
C.apH=x([1],y.n)
C.cd8=x([1,2,3],y.n)
C.atk=x([1,-1],y.n)
C.ST=new B.z(2,3)
C.SU=new B.z(3,4)
C.ckd=x([A.lX,A.yf],B.ax("O<a0>"))
C.ckp=x([-0.05,0.05],y.n)
C.e8X=new B.v(26,-8)
C.e9p=new B.v(52,0)
C.e8W=new B.v(26,8)
C.ckM=x([A.J,C.e8X,C.e9p,C.e8W],B.ax("O<v>"))
C.av8=x([A.bU,A.aO,A.dR,A.aZ,A.ct],y.O)
C.cCO=x([1,2,3,4,5,6,7],y.n)
C.cPM=x([A.f1,A.bM,A.LI,A.et],y.O)
C.cR0=x([1,2.76,5.4,8.93,13.3],y.n)
C.aw8=x([A.ct,A.bH,A.bU,A.aZ],y.O)
C.cSb=x([1,0.6,0.38,0.22,0.12],y.n)
C.cV8=x(["Mama","Baba","Bibi","Babu","Dada","Kaka"],y.s)
C.erf=new B.z("Chairs",120)
C.eri=new B.z("Cloth",80)
C.erz=new B.z("Delivery",25)
C.awt=x([C.erf,C.eri,C.erz],B.ax("O<+(m,G)>"))
C.cWr=x([1,0.7,0.45,0.28,0.16,0.1,0.06],y.n)
C.cWs=x([1,0.55,0.32,0.2,0.12,0.07],y.n)
C.e2L=new D.xJ("NGMY Tree Story","A family grows, one branch at a time")
C.e2G=new D.xJ("Coin Hero","A little coin saves up and wins the day")
C.e2O=new D.xJ("Space Voyage","The NGMY rocket explores the stars")
C.e2F=new D.xJ("Ocean Friends","Fish, bubbles and a friendly whale")
C.e2H=new D.xJ("Rainy Village","Storm clouds, then a rainbow")
C.e2J=new D.xJ("Spark Adventure","Follow a spark round a circuit")
C.e2I=new D.xJ("Fireworks Night","Colour bursts over the city")
C.e2N=new D.xJ("Little Train","A train rolls past the hills")
C.e2K=new D.xJ("Robot Disco","A robot dances to the beat")
C.e2M=new D.xJ("Garden Time","Flowers grow and butterflies fly")
C.Qk=x([C.e2L,C.e2G,C.e2O,C.e2F,C.e2H,C.e2J,C.e2I,C.e2N,C.e2K,C.e2M],B.ax("O<xJ>"))
C.d_x=x([1,0.6,0.45,0.3,0.22,0.15],y.n)
C.axa=x([A.bU,A.bH,A.av,A.bu,A.ct],y.O)
C.d0H=x([1,2,3,4,5,6],y.n)
C.d2c=x([A.fW,A.oO],y.O)
C.d2e=x([A.bj,A.aF,A.cS],y.O)
C.duk=new D.vU("NGMY Ads","\ud83d\udce2","Every NGMY promotion, as cartoons",A.bU,-1)
C.dui=new D.vU("Civic Registry","\ud83e\udeaa","Enroll your family in your community",A.d_,0)
C.dul=new D.vU("Jobs","\ud83d\udcbc","Find work and get hired",A.aF,1)
C.dun=new D.vU("NGMY Store","\ud83d\udecd\ufe0f","African food and traditions",A.fl,2)
C.duo=new D.vU("Kiswahili","\ud83d\udde3\ufe0f","Learn Swahili and English",A.bS,3)
C.dum=new D.vU("Doc Scanner","\ud83d\udcc4","Scan, save and share",A.cb,4)
C.duj=new D.vU("Invoices","\ud83e\uddfe","Professional invoices",A.bE,5)
C.duh=new D.vU("Calendar","\ud83d\udcc5","This month, today lit up",A.av,-2)
C.ka=x([C.duk,C.dui,C.dul,C.dun,C.duo,C.dum,C.duj,C.duh],B.ax("O<vU>"))
C.ey9=new B.z("Jambo! Habari yako?","Nzuri, asante!")
C.erI=new B.z("Jina lako nani?","Jina langu ni Amina.")
C.esq=new B.z("Karibu nyumbani!","Asante sana!")
C.ey8=new B.z("Naenda shule leo.","I am going to school.")
C.ezc=new B.z("Ninapenda kujifunza!","I love to learn!")
C.eIe=new B.z("Maji, tafadhali.","Water, please.")
C.ewa=new B.z("Rafiki yangu mpendwa","My dear friend")
C.eAN=new B.z("Tuonane kesho!","See you tomorrow!")
C.eBI=new B.z("Pole sana, rafiki.","I am so sorry, friend.")
C.ey7=new B.z("Hongera! Umefaulu!","Congratulations! You passed!")
C.etD=new B.z("Mimi ni mwanafunzi.","I am a student.")
C.eoh=new B.z("Chakula kitamu sana!","The food is so delicious!")
C.eHO=new B.z("Safari njema!","Have a good trip!")
C.ekx=new B.z("Unaongea Kiswahili vizuri!","You speak Swahili well!")
C.axn=x([C.ey9,C.erI,C.esq,C.ey8,C.ezc,C.eIe,C.ewa,C.eAN,C.eBI,C.ey7,C.etD,C.eoh,C.eHO,C.ekx],B.ax("O<+(m,m)>"))
C.h2L=new D.wr("NGMY Civic Registry","Enroll your family. Stay counted and helped together.",A.d5,A.aO)
C.h2Z=new D.wr("NGMY Jobs","Find work. Get hired. Get paid.",A.d6,A.aM)
C.h2W=new D.wr("NGMY Store","African food and traditions. Support our Congolese and African community.",A.k1,A.bH)
C.h2R=new D.wr("Kiswahili School","Learn Swahili and English, step by step.",A.cT,A.n8)
C.h2O=new D.wr("Document Scanner","Scan, save and share your papers.",A.pN,A.h5)
C.h2M=new D.wr("Invoice Creator","Make professional invoices in minutes.",A.tj,A.nP)
C.h2I=new D.wr("Family Book and Tree","Write your family story. Grow your tree.",A.j0,A.KS)
C.h2K=new D.wr("NGMY Wallet","Save, send and earn coins.",A.pH,A.dR)
C.h2N=new D.wr("Vault Games","Play, win and learn.",A.dM,A.b8)
C.h2X=new D.wr("Electronics Lab","Build real circuits and learn.",A.f3,A.b3)
C.h2S=new D.wr("NGMY Helper and Advisors","Friendly help, any time.",A.lO,A.ct)
C.d5I=x([C.h2L,C.h2Z,C.h2W,C.h2R,C.h2O,C.h2M,C.h2I,C.h2K,C.h2N,C.h2X,C.h2S],B.ax("O<wr>"))
C.dbA=x([A.dM,A.fc],y.O)
C.dc2=x(["For you","Apps","Library"],y.s)
C.ayi=x([A.bz,A.bH,A.cS,A.aw],y.O)
C.aym=x([-16,16],y.n)
C.ly=x([-1,1],y.n)
C.QX=x([-22,22],y.n)
C.a3C=x([-24,24],y.n)
C.a3E=x([-5,5],y.n)
C.ays=x([-8,8],y.n)
C.df4=x([A.aJ,A.ak],y.O)
C.df8=x([1,2,3,4,6,8],y.n)
C.dg_=x([1,0.5,0.33,0.25,0.2,0.16,0.14,0.12],y.n)
C.b3x=new B.ac(0,A.G,A.aW,A.dq,14)
C.dhs=x([C.b3x],y.V)
C.dhH=x([1,2,3,4,5,6,7,8],y.n)
C.djb=x([A.av,A.cc,A.bH,A.bc,A.d_,A.b6],y.O)
C.dk9=x(["M","T","W","T","F","S","S"],y.s)
C.dln=x([A.c,A.nS],y.O)
C.dm5=x([1,0.18,0.06],y.n)
C.e5R={"SPARK PAINTER":0,"MANDALA MAKER":1,"TITLE ANIMATOR":2,"PALETTE LAB":3,"GRAVITY TOY":4,"ORBIT STUDIO":5,"SWARM STUDIO":6,"FIREWORK DESIGNER":7,"CHAIN BURST":8,"CIRCUIT LAB":9,"PERIODIC TABLE":10,"BODY EXPLORER":11,"SPIN THE WHEEL":12,"FOCUS TIMER":13,"MEMORY MATCH":14,"LUCKY POCKET":15,"ELECTRONICS LAB":16,"CONSTRUCTION LAB":17,"AI INVENTOR":18,"MAGNET LAB":19,"RADIO LAB":20,"POWER PLANT":21,"POWER GRID":22,"INTERNET JOURNEY":23,"ROBOT CODER":24,"BUG SMASHER":25,"ROCKET LANDER":26,"DATA SNAKE":27,"BINARY 2048":28,"SIGNAL BREAKER":29,"PASSWORD LAB":30,"WAVE LAB":31,"BUG HUNT":32,"MOLECULE MAKER":33,"DNA LAB":34,"ECOSYSTEM LAB":35,"BALANCE LAB":36,"GEAR LAB":37,"OPTICS LAB":38,"LASER MAZE":39,"LIGHT MIXER":40,"ATOM BUILDER":41,"CIPHER LAB":42,"PIXEL TV":43}
C.aEw=new B.bk(C.e5R,["sparkle","sparkle","whoosh","click","bounce","space","bubble","pop","zap","tech","lab","organic","click","tech","bubble","click","tech","tech","tech","tech","tech","tech","tech","tech","tech","pop","space","bubble","click","zap","click","tech","click","lab","organic","organic","click","tech","sparkle","zap","sparkle","lab","tech","tech"],B.ax("bk<m,m>"))
C.HN=new B.bk(A.hZ,[],B.ax("bk<G,m>"))
C.acR=new B.w(1,0.16862745098039217,0.1843137254901961,0.21176470588235294,A.t)
C.drJ=new B.hC(A.G,1.2)
C.ckQ=x([A.f1,A.eC,A.ku],y.O)
C.ejx=new B.bV(G.pu,0.5,A.x,null,0,C.ckQ,null,null)
C.cAM=x([A.lk,A.n0],y.O)
C.ejz=new B.bV(F.aaw,0.5,A.x,null,0,C.cAM,null,null)
C.bS3=new B.ae(A.fg,11,A.ad,null,null,null)
C.fep=new B.H(!0,A.aS,null,null,null,null,9,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.fB4=new B.y("Search",null,C.fep,null,null,null,null,null,null,null,null,null)
C.cF8=x([C.bS3,A.qv,C.fB4],y.p)
C.eRf=new B.ci(A.aP,A.e,A.j,A.m,null,A.p,null,0,C.cF8,null)
C.eXL=new B.hQ(3,5,5,1.35,null)
C.blQ=new B.w(1,0.9450980392156862,0.9098039215686274,0.8470588235294118,A.t)
C.f4b=new B.H(!0,C.blQ,null,"serif",null,null,15,A.k5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.fbE=new B.H(!0,A.ad,null,null,null,null,9.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.fcg=new B.H(!0,A.aS,null,null,null,null,9.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.U3=new B.H(!0,A.ad,null,null,null,null,12.5,null,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.aRo=new B.H(!0,A.ad,null,null,null,null,10,A.P,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.fgp=new B.H(!0,A.c,null,null,null,null,8.5,A.P,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.DI=new B.H(!0,A.ad,null,null,null,null,12.5,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.fhT=new B.H(!0,A.ad,null,null,null,null,8.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.fib=new B.H(!0,C.adb,null,null,null,null,8.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.f96=new B.H(!0,A.aA,null,null,null,null,9.5,A.P,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.fkp=new B.y("NGMY Apps",null,C.f96,null,null,null,null,null,null,null,null,null)
C.a8c=new B.H(!0,A.aA,null,null,null,null,12.5,null,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.f5N=new B.H(!0,C.tp,null,null,null,null,8,A.a7,null,3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.fnx=new B.y("BANG & OLUFSEN",null,C.f5N,null,null,null,null,null,null,null,null,null)
C.fbo=new B.H(!0,A.w,null,null,null,null,9,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.fnZ=new B.y("Open",null,C.fbo,null,null,null,null,null,null,null,null,null)
C.fr5=new B.y("Home",null,C.aRo,null,null,null,null,null,null,null,null,null)
C.fs7=new B.y("SAMSUNG",null,A.aR6,null,null,null,null,null,null,null,null,null)
C.fy8=new B.y("LG",null,A.wE,null,null,null,null,null,null,null,null,null)
C.fE4=new B.y("tv",null,A.qz,null,null,null,null,null,null,null,null,null)
C.f90=new B.H(!0,C.tp,null,null,null,null,8.5,null,null,2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.fGb=new B.y("OPEN",null,C.f90,null,null,null,null,null,null,null,null,null)})();(function staticFields(){$.hKq=B.U(B.ax("m"),B.ax("dL"))
$.cgD=B.a([],B.ax("O<aiq>"))
$.heM=0
$.arN="music"})()};
(a=>{a["cPBp7OTeX5zH59Oik6EjsNAdXhM="]=a.current})($__dart_deferred_initializers__);