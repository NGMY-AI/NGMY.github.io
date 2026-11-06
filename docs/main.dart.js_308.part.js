((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,A,E,G,H,I,K,F,L,D={
yu(d,e){var x
$.W()
x=B.N()
x.b=A.af
x.c=e
x.r=d.gp(0)
x.d=A.bV
return x},
qT(d,e,f,g,h,i){var x=new D.fnx(e,h,!0),w=x.$1(g),v=w.b.c
if(v>i&&v>0)w=x.$1(Math.max(2,g*i/v))
x=w.b
v=x.c
x=x.a.c
w.a6(d,f.aF(0,new B.x(v/2,x.gbf(x)/2)))},
CO(a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=a6.a
J.bx(a5.save())
a5.translate(a7.a,a7.b-b1)
x=B.ci(new B.x(0,b1+a8*0.005),a8*0.06,a8*0.45)
w=A.w.j(0.22)
$.W()
v=B.N()
v.r=w.gp(0)
a6.hH(x,v)
for(x=a8*0.05,w=-a8,v=w*0.24,u=a8*0.1,t=v+a8*0.2,s=a8*0.04,r=a8*0.065,q=w*0.05,p=a8*0.14,o=q+x,n=a8*0.025,m=0;m<2;++m){l=C.js[m]*a8*0.075
k=l-x
k=B.by(new B.a9(k,v,k+u,t),new B.aR(s,s))
j=new B.av(A.Y,A.X,A.a_,A.a0,A.Z)
j.r=A.d5.gp(0)
i=j.K()
a5.drawRRect(B.eT(k),i)
i.delete()
l-=r
l=B.by(new B.a9(l,q,l+p,o),new B.aR(n,n))
k=new B.av(A.Y,A.X,A.a_,A.a0,A.Z)
k.r=A.c.gp(0)
i=k.K()
a5.drawRRect(B.eT(l),i)
i.delete()}x=w*0.16
v=w*0.52
u=a8*0.32
t=x+u
r=a8*0.09
h=B.by(new B.a9(x,v,t,v+u),new B.aR(r,r))
r=B.N()
r.r=b3.gp(0)
a6.aD(h,r)
r=w*0.27
u=a8*0.02
u=B.by(new B.a9(x,r,t,r+a8*0.045),new B.aR(u,u))
r=A.c.j(0.35)
t=B.N()
t.r=r.gp(0)
a6.aD(u,t)
t=w*0.47
g=new B.x(w*0.15,t)
f=new B.x(a8*0.15,t)
t=w*0.06
u=a8*0.07
a6.bL(g,g.ad(0,new B.x(t,a8*0.17)),D.yu(b4,u))
t=g.ad(0,new B.x(t,a8*0.18))
r=B.N()
r.r=b4.gp(0)
a6.af(t,s,r)
e=b0?-2.5+b6*0.5:0.5-b6*2.2
d=f.ad(0,new B.x(Math.sin(e)*a8*0.2,Math.cos(e)*a8*0.2))
a6.bL(f,d,D.yu(b4,u))
x=B.N()
x.r=b4.gp(0)
a6.af(d,s,x)
w*=0.7
a0=new B.x(0,w)
a1=a8*0.22
if(b2===1){x=a0.ad(0,new B.x(0,-a1*0.12))
v=B.N()
v.r=C.Aw.gp(0)
a6.af(x,a1*1.18,v)}x=B.N()
x.r=b4.gp(0)
a6.af(a0,a1,x)
if(b2===0){x=B.bU(a0,a1)
v=B.N()
v.r=C.Aw.gp(0)
a6.eV(x,3.141592653589793,3.141592653589793,!0,v)}else if(b2===2){x=B.bU(a0,a1)
v=B.N()
v.r=C.Aw.gp(0)
a6.eV(x,3.141592653589793,3.141592653589793,!0,v)
for(x=w+a1*0.3,v=a1*0.2,m=0;m<2;++m){a2=C.js[m]
u=new B.av(A.Y,A.X,A.a_,A.a0,A.Z)
u.r=C.Aw.gp(0)
i=u.K()
a5.drawCircle(0+a2*a1*1.05,x,v,i)
i.delete()}}a3=A.k.F(a9*0.8,3)>2.85
for(x=w+a1*0.42,v=a1*0.12,u=a1*0.25,t=a9*0.7,s=a1*0.13,w+=a1*0.05,r=-a1*0.15,q=w+0,p=a1*0.15,m=0;m<2;++m){o=C.js[m]*a1
n=0+o*0.4
if(a3){l=new B.av(A.Y,A.X,A.a_,A.a0,A.Z)
l.b=A.af
l.c=1.6
l.r=A.bj.gp(0)
l.d=A.bV
i=l.K()
a5.drawLine.apply(a5,[n+r,q,n+p,q,i])
i.delete()}else{l=new B.av(A.Y,A.X,A.a_,A.a0,A.Z)
l.r=A.c.gp(0)
i=l.K()
a5.drawCircle(n,w,u,i)
i.delete()
l=Math.sin(t)
k=new B.av(A.Y,A.X,A.a_,A.a0,A.Z)
k.r=A.w.gp(0)
i=k.K()
a5.drawCircle(n+l*a1*0.06,q,s,i)
i.delete()}n=new B.av(A.Y,A.X,A.a_,A.a0,A.Z)
n.r=A.i1.j(0.5).gp(0)
i=n.K()
a5.drawCircle(0+o*0.62,x,v,i)
i.delete()}x=a1*0.5
a4=a0.ad(0,new B.x(0,x))
w=a1*0.4
if(b5){x=B.ci(a4,w*(0.35+0.65*((Math.sin(a9*12)+1)/2)),x)
w=B.N()
w.r=A.es.gp(0)
a6.hH(x,w)}else a6.eV(B.ci(a4.aF(0,new B.x(0,a1*0.1)),w,a1*0.65),0.2,2.741592653589793,!1,D.yu(A.bj,1.8))
a5.restore()},
afM(d,e,f,g,h,i){var x,w,v,u,t,s,r,q=null
if(h<=0)return
x=d.a
J.bx(x.save())
x.translate(e.a,e.b)
d.bZ(0,A.k.D(A.lK.au(0,A.k.D(h,0,1)),0.01,1.3))
w=B.h2(q,q,q,q,B.d0(q,q,q,q,q,q,q,q,q,B.l(q,q,A.au,q,q,q,q,q,q,q,q,g,q,q,A.u,q,q,!0,q,q,q,q,q,q,q,q),f),A.a4,A.cb,q,A.dR,A.c7)
w.eO()
v=w.b
u=v.c
v=v.a.c
t=g*0.8
s=B.by(B.ci(A.J,v.gbf(v)+g*0.7,u+g*1.1),new B.aR(t,t))
t=$.W()
u=B.N()
u.r=i.gp(0)
d.aD(s,u)
t=new B.aO(t.r,A.ao,q,q,B.a([],y.v))
u=-g
v=s.d
r=v-1
t.E(new B.b5(u*0.3,r))
t.E(new B.ap(u*0.7,v+g*0.6))
t.E(new B.ap(g*0.2,r))
t.E(new B.bE())
r=B.N()
r.r=i.gp(0)
d.aS(t,r)
r=w.b
t=r.c
r=r.a.c
w.a6(d,new B.x(-t/2,-r.gbf(r)/2))
x.restore()},
fWT(d,e,f,g){var x,w=A.k.D(Math.abs(Math.cos(g)),0.15,1),v=f*2,u=v*w,t=B.ci(e,v,u)
$.W()
x=B.N()
x.r=A.bH.gp(0)
d.hH(t,x)
d.hH(B.ci(e,v,u),D.yu(A.pF,f*0.18))
if(w>0.5)D.qT(d,"$",e,f*1.2,A.pF,9999)},
hP3(d,e,f,g){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=new B.f5()
k.dU(4)
for(x=e.a,w=f-g,v=e.b,u=d.a,t=f*3,s=v*0.025,r=v*0.012,q=0;q<18;++q){p=k.an()
o=A.k.F(w*(40+k.an()*60)+k.an()*v,v)
J.bx(u.save())
u.translate(p*x,o)
u.rotate((t+q)*180/3.141592653589793,0,0)
p=B.ci(A.J,r,s)
n=C.auK[A.o.F(q,5)]
$.W()
m=new B.av(A.Y,A.X,A.a_,A.a0,A.Z)
m.r=n.gp(0)
l=m.K()
u.drawRect(B.bX(p),l)
l.delete()
u.restore()}},
hYR(d,e,f,g){switch(A.o.F(f,11)){case 0:D.hOG(d,e,g)
break
case 1:D.hRC(d,e,g)
break
case 2:D.hWU(d,e,g)
break
case 3:D.hX8(d,e,g)
break
case 4:D.hW2(d,e,g)
break
case 5:D.hRi(d,e,g)
break
case 6:D.hO6(d,e,g)
break
case 7:D.hXU(d,e,g)
break
case 8:D.hQl(d,e,g)
break
case 9:D.hRG(d,e,g)
break
default:D.hQV(d,e,g)}},
hOG(a2,a3,a4){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null,d=a3.a,a0=a3.b,a1=a0*0.94
for(x=a2.a,w=d*0.12,v=d*0.06,u=a0*0.06,t=y.v,s=0;s<6;++s){r=d*(0.04+s*0.17)
q=a0*(0.18+0.08*A.o.F(s,3))
p=a1-q
o=r+w
n=A.c.j(0.2)
m=$.W()
l=new B.av(A.Y,A.X,A.a_,A.a0,A.Z)
l.r=n.gp(0)
k=l.K()
x.drawRect(B.bX(new B.a9(r,p,o,p+q)),k)
k.delete()
l=B.a([],t)
m=new B.aO(m.r,A.ao,e,e,l)
l.push(new B.b5(r-3,p))
l.push(new B.ap(r+v,p-u))
l.push(new B.ap(o+3,p))
l.push(new B.bE())
p=new B.av(A.Y,A.X,A.a_,A.a0,A.Z)
p.r=A.c.j(0.3).gp(0)
k=p.K()
p=m.gbK().a.snapshot()
x.drawPath((m.e=new B.cF(p)).a,k)
k.delete()}w=A.w.j(0.18)
$.W()
v=B.N()
v.r=w.gp(0)
a2.b1(new B.a9(0,a1,0+d,a1+(a0-a1)),v)
j=Math.cos(a4*1.6)
i=Math.min(d*0.46,a0*0.95)
h=i*0.62
J.bx(x.save())
v=d*0.58
x.translate(v,a0*0.45)
a2.v4(0,Math.max(0.08,Math.abs(j)),1)
w=h*0.1
g=B.by(B.ci(A.J,h,i),new B.aR(w,w))
u=B.N()
t=j>=0
u.sar(new B.a8(A.a3,A.a8,A.x,t?C.dlm:C.dby,e,e).aA(0,new B.a9(g.a,g.b,g.c,g.d)))
a2.aD(g,u)
a2.aD(g,D.yu(A.d5,2))
if(t){u=-i
t=u*0.28
p=-h
o=p*0.05
n=h*0.22
m=B.N()
m.r=C.oK.gp(0)
a2.af(new B.x(t,o),n,m)
n=B.bU(new B.x(t,o),n)
o=B.N()
o.r=C.Aw.gp(0)
a2.eV(n,3.141592653589793,3.141592653589793,!0,o)
for(u*=0.05,t=p*0.25,o=h*0.07,s=0;s<3;++s){n=t+s*h*0.16
n=B.by(new B.a9(u,n,u+i*(0.42-s*0.06),n+o),A.hD)
m=new B.av(A.Y,A.X,A.a_,A.a0,A.Z)
m.r=A.dr.gp(0)
k=m.K()
x.drawRRect(B.eT(n),k)
k.delete()}D.qT(a2,"COMMUNITY ID",new B.x(0,p*0.4),w,A.d5,i*0.8)}else D.qT(a2,"\u2605 NGMY \u2605",A.J,h*0.16,A.c,i*0.8)
x.restore()
w=a4>2.6
if(w){s=A.k.D((a4-2.6)/0.35,0,1)
J.bx(x.save())
x.translate(v,a0*0.52)
a2.jp(0,-0.25)
a2.bZ(0,2.2-1.2*A.et.au(0,s))
f=B.ci(A.J,h*0.3,i*0.7)
a2.aD(B.by(f,A.hU),D.yu(A.cS.j(s),3))
D.qT(a2,"\u2713 REGISTERED",A.J,h*0.13,A.cS.j(s),(f.c-f.a)*0.9)
x.restore()}x=a4*5
v=Math.sin(x)
x=Math.sin(x)
w=w&&a4<4
D.CO(a2,new B.x(d*0.2,a1),a0*0.7,a4,!1,Math.abs(x)*a0*0.015,0,A.cS,C.oK,w,(v+1)/2)
if(a4>3)D.hP3(a2,new B.as(d,a0*0.9),a4,3)},
hRC(a6,a7,a8){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=a7.a,a3=a7.b,a4=a3*0.94,a5=A.w.j(0.2)
$.W()
x=B.N()
x.r=a5.gp(0)
a6.b1(new B.a9(0,a4,0+a2,a4+(a3-a4)),x)
w=a2*0.62
v=a2*0.3
u=a3*0.62
x=a4-u
a5=w+v
t=B.N()
t.r=A.bl.gp(0)
a6.b1(new B.a9(w,x,a5,x+u),t)
for(t=a6.a,s=a8*1.5,r=v*0.2,q=u*0.1,p=0;p<4;++p)for(o=x+u*(0.1+p*0.17),n=o+q,m=0;m<3;++m){l=w+v*(0.12+m*0.3)
k=A.o.F(p+m+A.k.bm(s),3)===0?A.dO:A.aR.j(0.6)
$.W()
j=new B.av(A.Y,A.X,A.a_,A.a0,A.Z)
j.r=k.gp(0)
i=j.K()
t.drawRect(B.bX(new B.a9(l,o,l+r,n)),i)
i.delete()}s=w+v*0.38
r=u*0.16
q=a4-r
$.W()
o=B.N()
o.r=A.fU.gp(0)
a6.b1(new B.a9(s,q,s+v*0.24,q+r),o)
o=x-a3*0.09
r=a3*0.02
o=B.by(new B.a9(w,o,a5,o+a3*0.08),new B.aR(r,r))
a5=B.N()
a5.r=A.aE.gp(0)
a6.aD(o,a5)
a5=a3*0.05
o=a3*0.06
D.qT(a6,"JOBS",new B.x(w+v/2,x-a5),o,A.c,9999)
h=A.k.D(a8/2.8,0,1)
x=a2*0.12
g=x+(w+v*0.3-x)*A.dy.au(0,h)
x=h<1
f=x?Math.abs(Math.sin(a8*12))*a3*0.02:0
s=h>=1
q=s?(Math.sin(a8*6)+1)/2:0
D.CO(a6,new B.x(g,a4),a3*0.6,a8,!1,f,2,A.b5,A.xx,s,q)
if(x){x=B.by(B.ci(new B.x(g-a3*0.12,a4-a3*0.17-f),a3*0.075,a3*0.1),A.hD)
q=B.N()
q.r=A.fU.gp(0)
a6.aD(x,q)}if(s){x=a8-2.8
D.afM(a6,new B.x(g+a5,a4-a3*0.78),"Hired! \ud83c\udf89",a3*0.07,x/0.4,A.c)
for(a5=x*0.8,x=a4-a3*0.5,s=a3*0.03,q=a8*8,e=0;e<6;++e){d=A.k.F(a5+e*0.17,1)
D.fWT(a6,new B.x(g+Math.sin(e*2.1)*a3*0.2,x-d*a3*0.25),s,q+e)}}a5=a2*0.04
x=a5+v
s=o+a3*0.3
r=B.by(new B.a9(a5,o,x,s),new B.aR(r,r))
$.W()
q=B.N()
q.r=A.ih.gp(0)
a6.aD(r,q)
for(x-=a5,r=a5+x*0.08,s-=o,q=x*0.84,n=s*0.24,a5+=x*0.14,x*=0.5,l=s*0.05,e=0;e<3;++e){k=(1-A.k.D((a8-e*0.5)/0.5,0,1))*a2*0.3
j=r+k
a0=e*0.3
a1=o+s*(0.08+a0)
a1=B.by(new B.a9(j,a1,j+q,a1+n),A.hD)
j=new B.av(A.Y,A.X,A.a_,A.a0,A.Z)
j.r=A.c.gp(0)
i=j.K()
t.drawRRect(B.eT(a1),i)
i.delete()
k=a5+k
a0=o+s*(0.14+a0)
a1=new B.av(A.Y,A.X,A.a_,A.a0,A.Z)
a1.r=A.bK.gp(0)
i=a1.K()
t.drawRect(B.bX(new B.a9(k,a0,k+x,a0+l)),i)
i.delete()}},
hWU(a1,a2,a3){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=a2.a,e=a2.b,d=e*0.94,a0=A.fU.j(0.6)
$.W()
x=B.N()
x.r=a0.gp(0)
a1.b1(new B.a9(0,d,0+f,d+(e-d)),x)
w=f*0.3
v=f*0.66
for(a0=v/12,x=e*0.14,u=a0+1,t=x+e*0.12,s=a1.a,r=0;r<12;++r){q=w+a0*r
p=new B.av(A.Y,A.X,A.a_,A.a0,A.Z)
p.r=C.axR[A.o.F(r,4)].gp(0)
o=p.K()
s.drawRect(B.bX(new B.a9(q,x,q+u,t)),o)
o.delete()}for(u=e*0.2,t=e*0.1,q=u+t,r=0;r<12;++r){p=w+a0*r
n=new B.av(A.Y,A.X,A.a_,A.a0,A.Z)
n.r=C.axR[A.o.F(r,4)].gp(0)
o=n.K()
s.drawArc.apply(s,[B.bX(new B.a9(p,u,p+a0,q)),0,180,!0,o])
o.delete()}a0=w+4
u=e*0.3
q=u+(d-u)
p=B.N()
p.r=A.fU.gp(0)
a1.b1(new B.a9(a0,u,a0+4,q),p)
p=w+v
a0=p-8
n=B.N()
n.r=A.fU.gp(0)
a1.b1(new B.a9(a0,u,a0+4,q),n)
n=e*0.68
q=n+e*0.26
a0=B.by(new B.a9(w,n,p,q),A.iw)
u=B.N()
u.r=A.ih.gp(0)
a1.aD(a0,u)
for(a0=p-w,u=a0/6,p=n+2,a0/=12,q=p+(q-n-4),r=0;r<6;++r){m=w+u*r
l=new B.av(A.Y,A.X,A.a_,A.a0,A.Z)
l.r=((r&1)===0?A.bx:A.bH).j(0.9).gp(0)
o=l.K()
s.drawRect(B.bX(new B.a9(m,p,m+a0,q)),o)
o.delete()}a0=w+v*0.2
u=e*0.62
k=new B.x(a0,u)
q=e*0.17
p=e*0.03
m=B.by(B.ci(k,e*0.11,q),new B.aR(p,p))
l=B.N()
l.r=A.co.gp(0)
a1.aD(m,l)
l=-e
q=B.ci(k.ad(0,new B.x(0,l*0.05)),e*0.04,q)
m=B.N()
m.r=A.fz.gp(0)
a1.hH(q,m)
for(q=a3*0.8,l*=0.08,m=e*0.015,r=0;r<3;++r){j=A.k.F(q+r*0.33,1)
i=Math.sin(j*6+r)
h=j*e
g=new B.av(A.Y,A.X,A.a_,A.a0,A.Z)
g.r=A.c.j(0.6*(1-j)).gp(0)
o=g.K()
s.drawCircle(a0+i*5,u+(l-h*0.14),m+h*0.02,o)
o.delete()}for(a0=w+v*0.5,q=e*0.018,r=0;r<5;++r){m=B.ci(new B.x(a0,u),x,e*(0.1+r*0.01))
l=new B.av(A.Y,A.X,A.a_,A.a0,A.Z)
l.b=A.af
l.c=q
l.r=A.bH.gp(0)
l.d=A.bV
o=l.K()
s.drawArc.apply(s,[B.bX(m),(0.4+r*0.1)*57.29577951308232,108.8619810748564,!1,o])
o.delete()}for(a0=e*0.63,x=e*0.032,r=0;r<4;++r){u=A.o.F(r,2)
q=A.o.am(r,2)
m=(r&1)===0?A.c9:A.vf
l=new B.av(A.Y,A.X,A.a_,A.a0,A.Z)
l.r=m.gp(0)
o=l.K()
s.drawCircle(w+v*(0.72+0.06*u)+r*e*0.02,a0+q*e*0.035,x,o)
o.delete()}D.CO(a1,new B.x(f*0.14,d),n,a3,!1,0,1,A.bH,E.aes,!0,(Math.sin(a3*5)+1)/2)
for(a0=a3*0.45,x=f*0.16,u=e*0.45,s=e*0.06,r=0;r<5;++r){j=A.k.F(a0+r*0.2,1)
D.qT(a1,"\u2665",new B.x(x+Math.sin(j*5+r)*e*0.08+r*e*0.03,u-j*e*0.4),s,A.aw.j(1-j),9999)}a0=w+v/2
x=e*0.08
p=B.by(B.ci(new B.x(a0,x),t,v*0.7),new B.aR(p,p))
$.W()
t=B.N()
t.r=A.au.gp(0)
a1.aD(p,t)
D.qT(a1,"NGMY STORE \xb7 African food",new B.x(a0,x),e*0.05,A.dO,v*0.64)},
hX8(d,e,f){var x,w,v,u,t,s,r,q=e.a,p=e.b,o=p*0.94,n=A.w.j(0.2)
$.W()
x=B.N()
x.r=n.gp(0)
d.b1(new B.a9(0,o,0+q,o+(p-o)),x)
w=A.o.F(A.o.am(Date.now(),6000)*3+A.o.D(A.k.bm(f/2),0,2),14)
v=A.k.F(f,2)
u=v<1
x=p*0.68
n=u?(Math.sin(f*8)+1)/2:0
t=u?Math.abs(Math.sin(f*8))*p*0.01:0
D.CO(d,new B.x(q*0.25,o),x,f,!1,t,2,A.cS,C.oK,u,n)
n=u?0:(Math.sin(f*8)+1)/2
t=u?0:Math.abs(Math.sin(f*8))*p*0.01
D.CO(d,new B.x(q*0.75,o),x,f,!1,t,0,A.bi,C.adA,!u,n)
s=new D.fnr(p,q)
n=p*0.15
if(u){x=C.awV[w].a
D.afM(d,new B.x(q*0.27,n),x,s.$1(x),v/0.25,A.oJ)}else{x=C.awV[w].b
D.afM(d,new B.x(q*0.73,n),x,s.$1(x),(v-1)/0.25,A.ez)}for(n=q*0.5,x=p*0.07,t=f*2,r=0;r<3;++r)D.qT(d,"\u2192",new B.x(n,p*(0.35+r*0.1)),x,A.c.j(0.3+0.5*A.k.F(t+r,1)),9999)},
hW2(a1,a2,a3){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=a2.a,e=a2.b,d=e*0.94,a0=A.w.j(0.2)
$.W()
x=B.N()
x.r=a0.gp(0)
a1.b1(new B.a9(0,d,0+f,d+(e-d)),x)
x=f*0.3
w=B.ci(new B.x(f*0.6,e*0.45),e*0.7,Math.min(x,e*0.55))
a0=B.by(w,A.iw)
v=B.N()
v.r=A.c.gp(0)
a1.aD(a0,v)
for(a0=w.d,v=w.b,u=a0-v,t=u*0.03,s=a1.a,r=w.a,q=w.c,p=q-r,o=r+p*0.1,n=0;n<9;++n){m=v+u*(0.1+n*0.095)
l=A.o.F(n,3)===2?0.5:0.8
k=new B.av(A.Y,A.X,A.a_,A.a0,A.Z)
k.r=A.cr.gp(0)
j=k.K()
s.drawRect(B.bX(new B.a9(o,m,o+p*l,m+t)),j)
j.delete()}i=A.k.D(a3/3,0,1)
h=v+u*i
if(i<1){a0=r-8
u=h-2
p=a0+(p+16)
t=B.N()
t.r=A.bn.gp(0)
a1.b1(new B.a9(a0,u,p,u+4),t)
t=A.bn.j(0.18)
u=B.N()
u.r=t.gp(0)
a1.b1(new B.a9(a0,v,p,v+(h-v)),u)}else{n=A.k.D((a3-3)/0.4,0,1)
u=A.lK.au(0,n)
t=B.N()
t.r=A.bx.gp(0)
a1.af(new B.x(q,v),e*0.08*u,t)
D.qT(a1,"PDF",new B.x(q,v),e*0.045*n,A.c,9999)
v=e*0.06
D.qT(a1,"\u2713 Saved",new B.x(w.gbN().a,a0+v),v,A.c.j(n),9999)}a0=a3*4
v=Math.sin(a0)
D.CO(a1,new B.x(f*0.2,d),e*0.66,a3,!0,Math.abs(Math.sin(a0))*e*0.01,0,A.cB,C.oK,!1,(v+1)/2)
g=B.ci(new B.x(x,e*0.3),e*0.18,e*0.1)
x=e*0.02
x=B.by(g,new B.aR(x,x))
v=B.N()
v.r=A.au.gp(0)
a1.aD(x,v)
v=e*0.015
v=B.by(g.cs(-3),new B.aR(v,v))
x=A.bn.j(0.35+0.3*Math.sin(a3*6))
a0=B.N()
a0.r=x.gp(0)
a1.aD(v,a0)},
hRi(a6,a7,a8){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=a7.a,a3=a7.b,a4=a3*0.94,a5=A.w.j(0.2)
$.W()
x=B.N()
x.r=a5.gp(0)
a6.b1(new B.a9(0,a4,0+a2,a4+(a3-a4)),x)
w=B.ci(new B.x(a2*0.62,a3*0.47),a3*0.8,Math.min(a2*0.4,a3*0.75))
x=B.by(w,A.rC)
a5=B.N()
a5.r=A.c.gp(0)
a6.aD(x,a5)
a5=w.a
x=w.c
v=x-a5
u=w.b
t=w.d-u
D.qT(a6,"INVOICE",new B.x(a5+v*0.3,u+t*0.09),t*0.07,A.d5,9999)
for(s=a6.a,r=v*0.08,q=a5+r,p=t*0.045,o=q+v*0.5,n=x-v*0.17,m=t*0.02,l=t*0.06,k=a8-0.5,j=0,i=0;i<3;++i){h=A.k.D((k-i*0.6)/0.4,0,1)
if(h<=0)continue
j+=C.aw2[i].b
g=u+t*(0.24+i*0.14)
J.bx(s.save())
s.translate((1-h)*30,0)
f=A.cr.j(h)
$.W()
e=new B.av(A.Y,A.X,A.a_,A.a0,A.Z)
e.r=f.gp(0)
d=e.K()
s.drawRect(B.bX(new B.a9(q,g,o,g+p)),d)
d.delete()
D.qT(a6,"$"+C.aw2[i].b,new B.x(n,g+m),l,A.au.j(h),9999)
s.restore()}p=u+t*0.7
a6.bL(new B.x(q,p),new B.x(x-r,p),D.yu(A.dq,1.4))
D.qT(a6,"TOTAL  $"+j,new B.x(w.gbN().a,u+t*0.78),t*0.075,A.au,v*0.8)
x=a8>2.8
if(x){r=a8-2.8
i=A.k.D(r/0.3,0,1)
J.bx(s.save())
s.translate(w.gbN().a,u+t*0.55)
a6.jp(0,-0.3)
a6.bZ(0,2-A.et.au(0,i))
a6.aD(B.by(B.ci(A.J,t*0.17,v*0.6),A.hU),D.yu(A.cS.j(i),3.5))
D.qT(a6,"PAID",A.J,t*0.11,A.cS.j(i),9999)
s.restore()
for(v=r*0.7,a5-=a3*0.05,u=a3*0.7,t=a3*0.03,s=a8*8,a0=0;a0<6;++a0){a1=A.k.F(v+a0*0.17,1)
D.fWT(a6,new B.x(a5+Math.sin(a0*2)*a3*0.1,u-a1*a3*0.5),t,s+a0)}}a5=x?(Math.sin(a8*6)+1)/2:0
D.CO(a6,new B.x(a2*0.2,a4),a3*0.66,a8,!0,0,1,A.bA,A.xx,x,a5)},
hnn(a9,b0,b1,b2,b3,b4){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=null,a4=A.o.F(b2,6),a5=C.cHX[a4],a6=a4<2,a7=a6?A.bO:C.Aw,a8=a9.a
J.bx(a8.save())
a8.translate(b0.a,b0.b)
if(b4>0){x=b1*1.5
$.W()
w=B.N()
w.sar(new B.c_(A.A,0.5,A.x,a3,0,B.a([A.dO.j(0.55*b4),A.K],y.O),a3,a3).aA(0,B.bU(A.J,x)))
a9.af(A.J,x,w)}x=b1*0.06
w=A.w.j(0.25)
v=$.W()
u=B.N()
u.r=w.gp(0)
a9.af(new B.x(0,x),b1*1.1,u)
u=B.N()
u.r=C.fo.gp(0)
a9.af(A.J,b1*1.08,u)
J.bx(a8.save())
u=y.v
w=new B.aO(v.r,A.ao,a3,a3,B.a([],u))
w.E(new B.jO(B.bU(A.J,b1)))
a9.pD(0,w)
w=B.bU(A.J,b1)
t=C.d_l[a4]
s=B.N()
s.r=t.gp(0)
a9.b1(w,s)
s=B.ci(new B.x(0,b1),b1*1.05,b1*1.8)
w=C.dht[a4]
t=B.N()
t.r=w.gp(0)
a9.hH(s,t)
t=b1*0.42
s=b1*0.3
w=B.ci(new B.x(0,t),b1*0.34,s)
r=B.aq(a5,A.w,0.15)
r.toString
q=B.N()
q.r=r.gp(0)
a9.b1(w,q)
q=-b1
w=q*0.08
p=new B.x(0,w)
r=a4===0
if(r){o=B.N()
o.r=a7.gp(0)
a9.af(new B.x(0,q*0.7),b1*0.22,o)}o=a4===4
if(o)for(n=q*0.42,m=b1*0.21,l=0;l<2;++l){k=C.js[l]
j=new B.av(A.Y,A.X,A.a_,A.a0,A.Z)
j.r=a7.gp(0)
i=j.K()
a8.drawCircle(k*b1*0.42,n,m,i)
i.delete()}n=a4===2
if(n||a4===5||a4===3){m=p.ad(0,new B.x(0,q*0.03))
j=B.N()
j.r=a7.gp(0)
a9.af(m,b1*0.46,j)}m=B.N()
m.r=a5.gp(0)
a9.af(p,t,m)
if(r||o){t=B.bU(p,b1*0.43)
r=B.N()
r.r=a7.gp(0)
a9.eV(t,3.2986722862692828,2.827433388230814,!0,r)}if(a4===3||a4===5){t=B.bU(p,b1*0.44)
r=B.N()
r.r=a7.gp(0)
a9.eV(t,3.141592653589793,3.141592653589793,!0,r)}if(a4===1)for(t=w+q*0.02,r=b1*0.1,l=0;l<2;++l){k=C.js[l]
o=new B.av(A.Y,A.X,A.a_,A.a0,A.Z)
o.r=a7.gp(0)
i=o.K()
a8.drawCircle(0+k*b1*0.4,t,r,i)
i.delete()}if(n){h=new B.aO(v.r,A.ao,a3,a3,B.a([],u))
v=q*0.46
u=w-b1*0.05
h.E(new B.b5(v,u))
h.E(new B.cR(0,w-b1*0.78,b1*0.46,u))
h.E(new B.cR(0,w-b1*0.28,v,u))
h.E(new B.bE())
u=B.N()
u.r=A.aE.gp(0)
a9.aS(h,u)
for(v=b1*0.035,u=q*0.22,t=w-s,g=0;g<4;++g){r=g===1||g===2?x:0
o=new B.av(A.Y,A.X,A.a_,A.a0,A.Z)
o.r=A.ey.gp(0)
i=o.K()
a8.drawCircle(u+g*b1*0.15,t-r,v,i)
i.delete()}}f=A.k.F(b3*0.8+a4,3)>2.85
for(v=w+b1*0.12,u=b1*0.055,t=b1*0.015,r=q*0.015,o=b1*0.016,n=q*0.03,w+=n,m=q*0.05,j=w+0,e=b1*0.05,d=b1*0.03,l=0;l<2;++l){a0=C.js[l]*b1
a1=0+a0*0.17
if(f){a2=new B.av(A.Y,A.X,A.a_,A.a0,A.Z)
a2.b=A.af
a2.c=d
a2.r=A.bj.gp(0)
a2.d=A.bV
i=a2.K()
a8.drawLine.apply(a8,[a1+m,j,a1+e,j,i])
i.delete()}else{a2=new B.av(A.Y,A.X,A.a_,A.a0,A.Z)
a2.r=A.bj.gp(0)
i=a2.K()
a8.drawCircle(a1,w,u,i)
i.delete()
a2=new B.av(A.Y,A.X,A.a_,A.a0,A.Z)
a2.r=A.c.gp(0)
i=a2.K()
a8.drawCircle(a1+t,w+r,o,i)
i.delete()}a1=new B.av(A.Y,A.X,A.a_,A.a0,A.Z)
a1.r=A.i1.j(0.5).gp(0)
i=a1.K()
a8.drawCircle(0+a0*0.27,v,x,i)
i.delete()}a9.eV(B.ci(p.ad(0,new B.x(0,b1*0.1)),b1*0.2,s),0.2,2.741592653589793,!1,D.yu(C.bdJ,b1*0.035))
if(a6){for(a6=b1*0.115,l=0;l<2;++l){k=C.js[l]
x=new B.av(A.Y,A.X,A.a_,A.a0,A.Z)
x.b=A.af
x.c=d
x.r=A.e2.gp(0)
x.d=A.bV
i=x.K()
a8.drawCircle(0+k*b1*0.17,w,a6,i)
i.delete()}a9.bL(p.ad(0,new B.x(q*0.055,n)),p.ad(0,new B.x(u,n)),D.yu(A.e2,b1*0.025))}a8.restore()
a9.af(A.J,b1*1.04,D.yu(E.Eu,b1*0.07))
a8.restore()},
hno(d,e,f,g){var x,w=B.ci(e,f*0.62,f*2.5),v=f*0.31,u=B.by(w,new B.aR(v,v))
$.W()
x=B.N()
x.r=A.c.gp(0)
d.aD(u,x)
d.aD(B.by(w,new B.aR(v,v)),D.yu(A.bA,f*0.05))
D.qT(d,"\u2665 "+g,e,f*0.4,A.ta,f*2.2)},
yH(d,e,f,g,a0,a1,a2){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
if(a2<=0)return
x=new D.fGi(e,f,g)
w=A.k.dj(22*A.k.D(a2,0,1))
for(v=a1-a0,u=d.a,t=e,s=1;s<=w;++s,t=q){r=Math.min(s/22,A.k.D(a2,0,1))
q=x.$1(r)
$.W()
p=new B.av(A.Y,A.X,A.a_,A.a0,A.Z)
p.b=A.af
o=p.c=a0+v*r
p.r=A.xx.gp(0)
p.d=A.bV
n=p.K()
p=t.a
m=t.b
l=q.a
k=q.b
u.drawLine.apply(u,[p,m,l,k,n])
n.delete()
j=-o*0.18
i=B.aq(A.xx,A.c,0.18)
i.toString
h=new B.av(A.Y,A.X,A.a_,A.a0,A.Z)
h.b=A.af
h.c=o*0.28
h.r=i.gp(0)
h.d=A.bV
n=h.K()
u.drawLine.apply(u,[p+j,m+0,l+j,k+0,n])
n.delete()}},
i7P(d,e,f,g){var x,w,v,u,t,s
for(x=g*0.45,w=e.a,v=g*2,u=e.b,t=0;t<7;++t){s=A.k.F(x+t/7,1)
D.qT(d,"\u2665",new B.x(w+Math.sin(t*2.3+v)*f*0.12+(t-3.5)*f*0.03,u-s*f*0.45),f*(0.04+0.02*A.o.F(t,3)),B.aq(A.bA,A.i1,A.o.F(t,2)).j((1-s)*0.9),9999)}},
hO6(b4,b5,b6){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=null,a8=b5.a,a9=b5.b,b0=a9*0.94,b1=A.dV.j(0.7),b2=$.W(),b3=B.N()
b3.r=b1.gp(0)
b4.b1(new B.a9(0,b0,0+a8,b0+(a9-b0)),b3)
x=new D.fap(b6)
w=new D.fam()
v=Math.min(a8*0.34,a9*0.62)
b3=a8*0.64
b1=v*0.2
u=b0-b1
t=new B.x(b3,u)
s=v*0.5
r=v*0.08
r=B.by(B.ci(t,s,v*2.15),new B.aR(r,r))
q=B.N()
q.r=A.hv.gp(0)
b4.aD(r,q)
b2=b2.r
q=y.v
p=new B.aO(b2,A.ao,a7,a7,B.a([],q))
r=u-b1
p.E(new B.b5(b3,r))
o=b3-s
n=v*0.3
m=u-n
l=b3-v
k=v*0.16
j=u-k
p.E(new B.cR(o,m,l,j))
i=u+v*0.14
p.E(new B.ap(l,i))
l=u+v*0.02
k=u+k
p.E(new B.cR(o,l,b3,k))
p.E(new B.bE())
o=B.N()
o.r=A.fT.gp(0)
b4.aS(p,o)
h=new B.aO(b2,A.ao,a7,a7,B.a([],q))
h.E(new B.b5(b3,r))
s=b3+s
r=b3+v
h.E(new B.cR(s,m,r,j))
h.E(new B.ap(r,i))
h.E(new B.cR(s,l,b3,k))
h.E(new B.bE())
k=B.N()
k.r=A.hI.gp(0)
b4.aS(h,k)
for(b2=v*0.85,s=b3-b2,r=u-v*0.06,q=b3-b1,u-=v*0.1,o=b4.a,b1=b3+b1,b2=b3+b2,g=0;g<3;++g){b3=g*v*0.06
m=r+b3
b3=u+b3
l=new B.av(A.Y,A.X,A.a_,A.a0,A.Z)
l.b=A.af
l.c=1.4
l.r=C.agn.gp(0)
l.d=A.bV
f=l.K()
o.drawLine.apply(o,[s,m,q,b3,f])
f.delete()
l=new B.av(A.Y,A.X,A.a_,A.a0,A.Z)
l.b=A.af
l.c=1.4
l.r=C.agn.gp(0)
l.d=A.bV
f=l.K()
o.drawLine.apply(o,[b1,b3,b2,m,f])
f.delete()}e=w.$1(x.$2(0.2,1))
b1=t.aF(0,new B.x(0,n))
b2=b6*4
b3=Math.sin(b2)
u=B.N()
u.sar(new B.c_(A.A,0.5,A.x,a7,0,B.a([A.dO.j(0.6*e),A.K],y.O),a7,a7).aA(0,B.bU(t.aF(0,new B.x(0,n)),v*0.7)))
b4.af(b1,v*(0.5+0.1*b3)*e,u)
d=t.aF(0,new B.x(0,v*0.12))
a0=new D.fao(t,a9,d)
a1=w.$1(x.$2(0.5,1.1))
a2=w.$1(x.$2(1.3,1.2))
for(b1=b6*2,a3=0;a3<4;++a3){b3=C.cE5[a3]
a4=b3.a
u=a0.$2(a4,b3.b)
s=Math.sin(b1+a4*9)
r=new B.av(A.Y,A.X,A.a_,A.a0,A.Z)
r.r=A.cS.j(0.9).gp(0)
f=r.K()
o.drawCircle(u.a,u.b,a9*b3.c*a2+s*1.2,f)
f.delete()}D.yH(b4,d,d.ad(0,new B.x(0,-a9*0.08)),a0.$2(0,0.22),a9*0.05,a9*0.035,a1)
a5=w.$1(x.$2(1.2,0.8))
b1=a9*0.032
b3=a9*0.02
D.yH(b4,a0.$2(0,0.22),a0.$2(-0.06,0.28),a0.$2(-0.2,0.36),b1,b3,a5)
D.yH(b4,a0.$2(0,0.22),a0.$2(0.06,0.28),a0.$2(0.2,0.36),b1,b3,a5)
a6=w.$1(x.$2(2.4,0.7))
D.yH(b4,a0.$2(0,0.22),a0.$2(0,0.4),a0.$2(0,0.57),a9*0.03,a9*0.016,a6)
b3=new D.fan(x,b4,b6)
b1=a9*0.088
b3.$5(2,"Mama",a0.$2(-0.2,0.36),b1,1.9)
b3.$5(3,"Baba",a0.$2(0.2,0.36),b1,2.4)
b3.$5(4,"Dada",a0.$2(0,0.57),a9*0.08,3)
if(b6>3.6)D.i7P(b4,a0.$2(0,0.36),a9,b6-3.6)
b1=a8*0.2
b3=Math.sin(b2)
D.CO(b4,new B.x(b1,b0),a9*0.66,b6,!1,Math.abs(Math.sin(b2))*a9*0.01,2,A.aF,C.oK,b6>3,(b3+1)/2)
D.afM(b4,new B.x(b1,a9*0.1),"My tree!",a9*0.06,x.$2(3,0.4),A.c)},
hXU(d,e,f){var x,w,v,u,t,s,r,q,p,o,n=e.a,m=e.b,l=m*0.94,k=A.w.j(0.2)
$.W()
x=B.N()
x.r=k.gp(0)
d.b1(new B.a9(0,l,0+n,l+(m-l)),x)
w=A.k.bm(A.k.D(f/5.5,0,1)*9)+1
for(v=n*0.62,k=l-m*0.03,x=m*0.26,u=m*0.07,t=d.a,s=0;s<w;++s){r=k-s*m*0.055
q=B.ci(new B.x(v,r),u,x)
p=new B.av(A.Y,A.X,A.a_,A.a0,A.Z)
p.r=A.bH.gp(0)
o=p.K()
t.drawOval(B.bX(q),o)
o.delete()
r=B.ci(new B.x(v,r),u,x)
q=new B.av(A.Y,A.X,A.a_,A.a0,A.Z)
q.b=A.af
q.c=2
q.r=A.pF.gp(0)
q.d=A.bV
o=q.K()
t.drawOval(B.bX(r),o)
o.delete()}k=m*0.1
D.fWT(d,new B.x(v,k+A.k.F(f*1.6,1)*(l-u-w*m*0.055-k)),m*0.05,f*8)
k=m*0.08
D.qT(d,"$"+w*25,new B.x(v,k),k,A.dO,9999)
k=f*5
u=Math.sin(k)
D.CO(d,new B.x(n*0.25,l),m*0.66,f,!1,Math.abs(Math.sin(k))*m*0.012,1,A.cB,C.oK,!0,(u+1)/2)},
hQl(d,a0,a1){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=a0.a,g=a0.b,f=g*0.94,e=A.w.j(0.2)
$.W()
x=B.N()
x.r=e.gp(0)
d.b1(new B.a9(0,f,0+h,f+(g-f)),x)
for(e=d.a,x=g*0.012,w=g*0.55,v=a1*4,u=a1*2,t=g*0.15,s=g*0.03,r=0;r<3;r=n){q=Math.sin(v+r*1.7)
J.bx(e.save())
e.translate(h*(0.5+0.14*r),w-Math.abs(q)*g*0.3)
e.rotate((u+r)*180/3.141592653589793,0,0)
q=B.by(B.ci(A.J,t,t),new B.aR(s,s))
p=new B.av(A.Y,A.X,A.a_,A.a0,A.Z)
p.r=A.c.gp(0)
o=p.K()
e.drawRRect(B.eT(q),o)
o.delete()
n=r+1
q=n*2
p=r===0
m=0
for(;;){if(!(m<q-(p?1:0)))break
l=m*2.1
k=Math.cos(l)
l=Math.sin(l)
j=new B.av(A.Y,A.X,A.a_,A.a0,A.Z)
j.r=A.bj.gp(0)
o=j.K()
e.drawCircle(k*g*0.04,l*g*0.04,x,o)
o.delete();++m}e.restore()}for(e=a1*0.6,w=g*0.25,v=g*0.06,r=0;r<5;++r){i=A.k.F(e+r*0.2,1)
D.qT(d,"\u2605",new B.x(h*(0.45+r*0.1),w-i*g*0.2),v,A.dO.j(1-i),9999)}e=h*0.22
w=a1*6
v=Math.sin(w)
D.CO(d,new B.x(e,f),g*0.66,a1,!0,Math.abs(Math.sin(w))*g*0.015,0,A.c9,C.oK,!0,(v+1)/2)
v=f-g*0.28
s=B.by(B.ci(new B.x(e,v),g*0.07,g*0.16),new B.aR(s,s))
$.W()
w=B.N()
w.r=A.co.gp(0)
d.aD(s,w)
w=B.N()
w.r=A.aw.gp(0)
d.af(new B.x(e+g*0.05,v),x,w)},
hRG(d,e,a0){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=e.a,j=e.b,i=j*0.94,h=A.w.j(0.2),g=$.W(),f=B.N()
f.r=h.gp(0)
d.b1(new B.a9(0,i,0+k,i+(j-i)),f)
f=k*0.42
h=j*0.18
x=j*0.08
w=B.by(new B.a9(f,h,f+k*0.5,h+j*0.5),new B.aR(x,x))
v=new B.aO(g.r,A.ao,null,null,B.a([],y.v))
v.E(new B.iM(w))
d.aS(v,D.yu(A.c.j(0.5),4))
u=new B.Sv(new B.vD(B.xc(v),!1,B.a([],y.L))).gH(0)
for(h=a0*0.18,g=u.a,x=u.b,t=g.e,s=j*0.016,r=d.a,q=0;q<10;++q){p=A.k.F(h+q/10,1)
g.jz()
o=t[x].b
o===$&&B.c()
o=o.a.length()
g.jz()
o=t[x].MP(p*o).a
p=new B.av(A.Y,A.X,A.a_,A.a0,A.Z)
p.r=A.dO.gp(0)
n=p.K()
r.drawCircle(o.a,o.b,s,n)
n.delete()}m=a0>1.5
h=j*0.43
l=new B.x(k*0.92,h)
if(m){g=A.dO.j(0.4+0.2*Math.sin(a0*8))
x=B.N()
x.r=g.gp(0)
x.z=A.z9
d.af(l,j*0.2,x)}g=j*0.07
x=m?A.oJ:A.bK
t=B.N()
t.r=x.gp(0)
d.af(l,g,t)
h=B.by(B.ci(new B.x(f,h),j*0.2,j*0.1),A.iw)
t=B.N()
t.r=A.cS.gp(0)
d.aD(h,t)
D.qT(d,"+",new B.x(f,j*0.36),g,A.c,9999)
h=m?(Math.sin(a0*6)+1)/2:0
f=m?Math.abs(Math.sin(a0*6))*j*0.012:0
D.CO(d,new B.x(k*0.2,i),j*0.68,a0,!1,f,0,A.bR,C.oK,m,h)
if(m)D.afM(d,new B.x(k*0.24,j*0.16),"It works!",g,(a0-1.5)/0.4,A.c)},
hQV(d,a0,a1){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=a0.a,g=a0.b,f=g*0.94,e=A.w.j(0.2)
$.W()
x=B.N()
x.r=e.gp(0)
d.b1(new B.a9(0,f,0+h,f+(g-f)),x)
w=A.k.D((a1-0.3)/0.4,0,1)
v=A.k.D((a1-1.8)/0.4,0,1)
x=g*0.2
e=g*0.065
D.afM(d,new B.x(h*0.3,x),"How do I enroll?",e,w,A.oJ)
if(a1>1&&a1<1.8)for(u=h*0.72,t=g*0.38,s=a1*9,r=g*0.015,q=d.a,p=0;p<3;++p){o=Math.sin(s+p)
n=new B.av(A.Y,A.X,A.a_,A.a0,A.Z)
n.r=A.c.gp(0)
m=n.K()
q.drawCircle(u+p*g*0.05,t-Math.abs(o)*g*0.02,r,m)
m.delete()}D.afM(d,new B.x(h*0.7,g*0.38),"Tap Civic Registry!",e,v,A.ez)
D.CO(d,new B.x(h*0.2,f),g*0.62,a1,!1,0,2,A.aw,C.oK,a1<1,0)
l=h*0.78
k=f-g*0.28
e=g*0.04
x=B.by(B.ci(new B.x(l,k),g*0.22,x),new B.aR(e,e))
u=B.N()
u.r=A.aL.gp(0)
d.aD(x,u)
u=g*0.18
x=k-u
e=B.by(B.ci(new B.x(l,x),g*0.14,u),new B.aR(e,e))
u=B.N()
u.r=A.cr.gp(0)
d.aD(e,u)
for(e=d.a,u=a1*1.1,t=g*0.02,j=0;j<2;++j){i=C.js[j]
s=A.k.F(u,1)>0.08?A.ba:A.f3
r=new B.av(A.Y,A.X,A.a_,A.a0,A.Z)
r.r=s.gp(0)
m=r.K()
e.drawCircle(l+i*g*0.04,x,t,m)
m.delete()}d.bL(new B.x(l,k-g*0.25),new B.x(l,k-g*0.3),D.yu(A.ad,3))
e=B.N()
e.r=A.aw.gp(0)
d.af(new B.x(l,k-g*0.31),g*0.015,e)},
fnx:function fnx(d,e,f){this.a=d
this.b=e
this.c=f},
fnr:function fnr(d,e){this.a=d
this.b=e},
fGi:function fGi(d,e,f){this.a=d
this.b=e
this.c=f},
fap:function fap(d){this.a=d},
fam:function fam(){},
fao:function fao(d,e,f){this.a=d
this.b=e
this.c=f},
fan:function fan(d,e,f){this.a=d
this.b=e
this.c=f},
aNg(d,e,f,g,h,i,j,k){var x=new D.feS(e,h,i,k),w=x.$1(g),v=w.b.c
if(v>j&&v>0)w=x.$1(Math.max(2,g*j/v))
x=w.b
v=x.c
x=x.a.c
w.a6(d,f.aF(0,new B.x(v/2,x.gbf(x)/2)))},
La(d,e,f,a0){var x,w,v,u,t,s,r,q,p,o,n,m=A.o.F(a0==null?A.k.bm(f/6):a0,11),l=A.k.F(f,6),k=C.d5G[m],j=e.a,i=e.b,h=0+j,g=0+i
$.W()
x=B.N()
x.sar(new B.a8(A.ay,A.aC,A.x,B.a([k.c,k.d],y.O),null,null).aA(0,new B.a9(0,0,h,g)))
d.b1(new B.a9(0,0,h,g),x)
w=i*(j>=i?0.7:0.6)
g=d.a
J.bx(g.save())
g.clipRect(B.bX(new B.a9(0,0,h,0+w)),$.n7()[1],!0)
D.hYR(d,new B.as(j,w),m,l)
g.restore()
v=i-w
x=A.w.j(0.3)
u=B.N()
u.r=x.gp(0)
d.b1(new B.a9(0,w,h,w+v),u)
t=A.ct.au(0,A.k.D((l-0.2)/0.5,0,1))
J.bx(g.save())
g.translate((1-t)*j*0.25,0)
u=j/2
h=j*0.94
D.aNg(d,k.a,new B.x(u,w+v*0.3),v*0.36,A.c.j(t),!0,h,0)
D.aNg(d,k.b,new B.x(u,w+v*0.64),v*0.2,A.c.j(0.92*t),!1,h,0)
g.restore()
for(h=i*0.965,x=i*0.009,s=i*0.004,r=0;r<11;++r){q=r===m
p=q?s:0
o=new B.av(A.Y,A.X,A.a_,A.a0,A.Z)
o.r=A.c.j(q?0.95:0.35).gp(0)
n=o.K()
g.drawCircle(u+(r-5)*i*0.035,h,x+p,n)
n.delete()}h=j-i*0.07
g=i*0.06
D.aNg(d,"AD",new B.x(h,g),i*0.045,A.c.j(0.85),!0,9999,1)
x=i*0.02
x=B.by(B.ci(new B.x(h,g),i*0.065,i*0.1),new B.aR(x,x))
g=B.N()
g.b=A.af
g.c=1
g.r=A.ad.gp(0)
g.d=A.bV
d.aD(x,g)},
Rn(d,e,f,g){var x,w=d.a
J.bx(w.save())
w.clipRect(B.bX(new B.a9(0,0,0+e.a,0+e.b)),$.n7()[1],!0)
x=C.kb[A.o.F(f,8)].e
if(x===-2)D.hOf(d,e,g)
else if(x===-1)D.La(d,e,g,null)
else D.La(d,e,g,x)
w.restore()},
hOf(d,a0,a1){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=a0.a,h=a0.b,g=new B.S(Date.now(),0,!1),f=0+i,e=0+h
$.W()
x=B.N()
x.sar(C.bWY.aA(0,new B.a9(0,0,f,e)))
d.b1(new B.a9(0,0,f,e),x)
x=B.N()
x.r=A.bx.gp(0)
d.b1(new B.a9(0,0,f,0+h*0.15),x)
D.aNg(d,A.p4[B.bH(g)-1]+" "+B.bA(g),new B.x(i/2,h*0.075),h*0.08,A.c,!0,i*0.9,0)
w=i/7
for(f=h*0.21,e=h*0.05,v=0;v<7;++v)D.aNg(d,C.dk8[v],new B.x(w*(v+0.5),f),e,A.aA,!0,9999,0)
u=B.c1(B.bA(g),B.bH(g),1,0,0,0,0,0)
t=B.bR(B.c1(B.bA(g),B.bH(g)+1,0,0,0,0,0,0))
s=B.mA(u)-1
r=h*0.74/A.k.dj((s+t)/7)
for(f=h*0.26,e=a1*3,x=d.a,q=1;q<=t;++q){p=s+q-1
o=w*(A.o.F(p,7)+0.5)
n=f+r*(A.o.am(p,7)+0.5)
if(q===B.bR(g)){m=Math.min(w,r)
l=A.aR.j(0.5+0.2*Math.sin(e))
$.W()
k=new B.av(A.Y,A.X,A.a_,A.a0,A.Z)
k.r=l.gp(0)
j=k.K()
x.drawCircle(o,n,m*0.42,j)
j.delete()}m=Math.min(w,r)
l=q===B.bR(g)?A.c:A.ad
D.aNg(d,""+q,new B.x(o,n),m*0.42,l,!0,9999,0)}},
feS:function feS(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
wo:function wo(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
vT:function vT(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
h0t(d,e,f,g,h,a0){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i=d.a
J.bx(i.save())
x=e.a
w=e.b
v=0+x
u=0+w
i.clipRect(B.bX(new B.a9(0,0,v,u)),$.n7()[1],!0)
if(h<3){$.W()
t=B.N()
t.r=C.b8R.gp(0)
d.b1(new B.a9(0,0,v,u),t)
if(h<0.5)u=h/0.5
else u=h>2.4?(3-h)/0.6:1
s=A.k.D(u,0,1)
u=e.ei(A.J)
t=e.gdH()
r=B.N()
r.sar(new B.c_(A.A,0.5,A.x,j,0,B.a([A.aR.j(0.35*s),A.K],y.O),j,j).aA(0,B.bU(e.ei(A.J),e.gdH()*0.5)))
d.af(u,t*0.5,r)
D.Gh(d,"NGMY",new B.x(0,w*0.36),w*0.2,A.c.j(s),A.L,w*0.03,x)
D.Gh(d,"T V",new B.x(0,w*0.6),w*0.08,A.aR.j(s),A.L,w*0.05,x)
r=x*0.3
t=w*0.78
u=B.N()
u.r=A.aR.j(s).gp(0)
d.b1(new B.a9(r,t,r+x*0.4*(h/3),t+3),u)}else if(a0>=0)D.Rn(d,e,a0,g)
else{q=A.k.D((h-3)/0.5,0,1)
p=A.o.F(f,10)
switch(p){case 0:D.hXu(d,e,g)
break
case 1:D.hOS(d,e,g)
break
case 2:D.hWK(d,e,g)
break
case 3:D.hTz(d,e,g)
break
case 4:D.hUQ(d,e,g)
break
case 5:D.hWL(d,e,g)
break
case 6:D.hQb(d,e,g)
break
case 7:D.hXt(d,e,g)
break
case 8:D.hVC(d,e,g)
break
default:D.hQm(d,e,g)}t=x-w*0.34
r=w*0.04
o=w*0.03
n=B.by(new B.a9(t,r,t+w*0.3,r+w*0.1),new B.aR(o,o))
$.W()
o=B.N()
o.r=A.w.j(0.55).gp(0)
d.aD(n,o)
D.Gh(d,"NGMY",new B.x(n.a+w*0.025,n.b+w*0.012),w*0.07,A.c,A.bh,1,j)
o=w*0.86
t=B.N()
t.r=A.w.j(0.6).gp(0)
d.b1(new B.a9(0,o,v,o+w*0.14),t)
D.Gh(d,"CH "+(f+1)+"  \xb7  "+C.Q7[p].a,new B.x(r,w*0.885),w*0.075,A.c,A.bh,0,x-w*0.08)
if(q<1){t=B.N()
t.r=A.c.j(0.6*(1-q)).gp(0)
d.b1(new B.a9(0,0,v,u),t)}}$.W()
m=B.N()
m.r=A.w.j(0.07).gp(0)
for(l=0;l<w;l+=3){k=m.K()
i.drawRect(B.bX(new B.a9(0,l,v,l+1)),k)
k.delete()}v=new B.aO($.W().r,A.ao,j,j,B.a([],y.v))
v.E(new B.b5(0,0))
v.E(new B.ap(x*0.45,0))
v.E(new B.ap(0,w*0.5))
v.E(new B.bE())
w=B.N()
w.r=A.c.j(0.04).gp(0)
d.aS(v,w)
i.restore()},
Gh(d,e,f,g,h,i,j,k){var x=null,w=B.h2(x,x,1,x,B.d0(x,x,x,x,x,x,x,x,x,B.l(x,x,h,x,x,x,x,x,x,x,x,g,x,x,A.u,x,x,!0,x,j,x,x,x,x,x,x),e),i,A.cb,x,A.dR,A.c7),v=k==null
w.uB(v?9999:k)
w.a6(d,f.ad(0,new B.x(i===A.L&&!v?(k-w.b.c)/2:0,0)))},
aNb(d,e,f,g,h,i,j){var x=new D.fcG(e,h,i,j),w=x.$1(g),v=w.b.c,u=f.c-f.a
if(v>u&&v>0)w=x.$1(g*u/v)
x=f.gbN()
v=w.b
u=v.c
v=v.a.c
w.a6(d,x.aF(0,new B.x(u/2,v.gbf(v)/2)))},
hXu(d5,d6,d7){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5=null,c6=d6.a,c7=d6.b,c8=A.k.F(d7,14),c9=new D.fnR(c8),d0=new D.fnN(),d1=0+c6,d2=0+c7,d3=$.W(),d4=B.N()
d4.sar(C.bY4.aA(0,new B.a9(0,0,d1,d2)))
d5.b1(new B.a9(0,0,d1,d2),d4)
x=c6*0.34
w=new D.fnQ(x,c7)
v=w.$2(0,0.5)
d4=c7*0.75
u=B.N()
u.sar(new B.c_(A.A,0.5,A.x,c5,0,B.a([A.bL.j(0.55),A.K],y.O),c5,c5).aA(0,B.bU(v,d4)))
d5.af(v,d4,u)
t=new B.f5()
t.dU(11)
for(d4=d7*2,u=d5.a,s=0;s<26;++s){r=t.an()
q=t.an()
p=t.an()
o=new B.av(A.Y,A.X,A.a_,A.a0,A.Z)
o.r=A.c.j(0.35+0.4*Math.sin(d4+s)).gp(0)
n=o.K()
u.drawCircle(r*c6,q*c7*0.45,0.6+p*1.1,n)
n.delete()}for(r=y.v,m=0;m<2;++m){q=B.a([],r)
l=new B.aO(d3.r,A.ao,c5,c5,q)
q.push(new B.b5(0,c7))
for(d3=m*2,p=m===0,k=0;k<=c6;k+=6){o=p?0.78:0.82
o=new B.ap(k,c7*o+Math.sin(k/(p?70:50)+d3)*c7*0.02)
q.push(o)
j=l.f
if(j!=null)o.bA(j)
o=l.e
if(o!=null)o.a.delete()
l.e=null}d3=new B.ap(c6,c7)
q.push(d3)
q=l.f
if(q!=null)d3.bA(q)
d3=l.e
if(d3!=null)d3.a.delete()
l.e=null
d3=$.W()
q=new B.av(A.Y,A.X,A.a_,A.a0,A.Z)
q.r=(p?C.Wd:C.bjC).gp(0)
n=q.K()
q=l.e
u.drawPath((q==null?l.e=new B.cF(l.gbK().a.snapshot()):q).a,n)
n.delete()}i=w.$2(0,0.81)
h=d0.$1(c9.$2(0.2,1.6))
g=d0.$1(c9.$2(2.4,2.6))
for(d3=d7*1.4,f=0;f<8;++f){r=C.awW[f]
e=r.a
d=r.b
a0=Math.sin(d3+e*7)*c7*0.006
q=w.$2(e,d)
p=q.a
q=q.b
r=c7*r.c
o=new B.av(A.Y,A.X,A.a_,A.a0,A.Z)
o.r=A.hg.gp(0)
n=o.K()
u.drawCircle(p+a0,q+0,r*g,n)
n.delete()
q=w.$2(e,d-0.015)
p=q.a
q=q.b
o=new B.av(A.Y,A.X,A.a_,A.a0,A.Z)
o.r=A.er.gp(0)
n=o.K()
u.drawCircle(p+a0,q+0,r*0.82*g,n)
n.delete()}for(d3=c7*0.01,r=i.a,q=i.b,p=q+d3,o=c7*0.015,q+=o,j=c7*0.04,f=0;f<2;++f){a1=C.js[f]*c7
D.yH(d5,i,new B.x(r+a1*0.04,p),new B.x(r+a1*0.12,q),j,d3,h)}r=c7*0.085
D.yH(d5,i,w.$2(0.02,0.7),w.$2(0,0.6),r,c7*0.055,h)
a2=d0.$1(c9.$2(1.8,1.6))
q=c7*0.05
p=c7*0.026
D.yH(d5,w.$2(0,0.6),w.$2(-0.1,0.55),w.$2(-0.34,0.44),q,p,a2)
D.yH(d5,w.$2(0,0.6),w.$2(0.1,0.55),w.$2(0.34,0.44),q,p,a2)
a3=d0.$1(c9.$2(3.2,1.3))
p=c7*0.024
a1=c7*0.018
D.yH(d5,w.$2(-0.34,0.44),w.$2(-0.17,0.33),w.$2(0,0.39),p,a1,a3)
D.yH(d5,w.$2(0.34,0.44),w.$2(0.17,0.33),w.$2(0,0.39),p,a1,a3)
a4=d0.$1(c9.$2(4.4,1.3))
a1=c7*0.02
p=c7*0.012
D.yH(d5,w.$2(0,0.39),w.$2(-0.1,0.3),w.$2(-0.17,0.2),a1,p,a4)
D.yH(d5,w.$2(0,0.39),w.$2(0.1,0.3),w.$2(0.17,0.2),a1,p,a4)
a1=c7*0.016
D.yH(d5,w.$2(-0.27,0.72),w.$2(-0.14,0.78),w.$2(0,0.7),a1,p,d0.$1(c9.$2(3.6,1)))
D.yH(d5,w.$2(0.27,0.72),w.$2(0.14,0.78),w.$2(0,0.7),a1,p,d0.$1(c9.$2(3.6,1)))
a5=new B.f5()
a5.dU(5)
for(a1=d7*1.6,a6=d7*1.3,a7=g*1.4,a8=c7*0.03,s=0;s<110;++s){a9=C.awW[A.o.F(s,8)]
b0=a5.an()*3.141592653589793*2
b1=Math.sqrt(a5.an())*a9.c*0.95
b2=w.$2(a9.a+Math.cos(b0)*b1,a9.b+Math.sin(b0)*b1)
b3=Math.sin(a1+s)
b4=b2.a
b2=b2.b
J.bx(u.save())
u.translate(b4+b3*c7*0.006,b2+0)
u.rotate((b0+Math.sin(a6+s)*0.2)*180/3.141592653589793,0,0)
b5=A.k.D(a7-A.o.F(s,10)*0.05,0,1)
b2=B.ci(A.J,o*b5,a8*b5)
$.W()
b3=new B.av(A.Y,A.X,A.a_,A.a0,A.Z)
b3.r=B.aq(A.bc,A.ek,(Math.sin(d4+s)+1)/2).gp(0)
n=b3.K()
u.drawOval(B.bX(b2),n)
n.delete()
u.restore()}b6=new D.fnO(c9,d5,d7,c8)
u=c7*0.075
b6.$5(0,"Bibi",w.$2(-0.27,0.72),u,5)
b6.$5(1,"Babu",w.$2(0.27,0.72),u,5.6)
b6.$5(2,"Mama",w.$2(-0.34,0.44),r,6.4)
b6.$5(3,"Baba",w.$2(0.34,0.44),r,7)
b6.$5(4,"Dada",w.$2(-0.17,0.2),u,8)
b6.$5(5,"Kaka",w.$2(0.17,0.2),u,8.6)
b7=new D.fnP(c9,d7,d5)
b7.$3(w.$2(0,0.7),c7*0.028,5.9)
b7.$3(w.$2(0,0.39),c7*0.035,7.4)
if(c8>9.3)for(r=(c8-9.3)*0.4,s=0;s<7;++s){b8=A.k.F(r+s/7,1)
D.Gh(d5,"\u2665",w.$2(Math.sin(s*2.3+d4)*0.3,0.38-b8*0.3),c7*(0.04+0.02*A.o.F(s,3)),A.i1.j((1-b8)*0.85),A.bh,0,c5)}d4=c6*0.655+(1-d0.$1(c9.$2(1,0.9)))*c6*0.4
r=c7*0.1
o=d4+c6*0.315
b9=new B.a9(d4,r,o,r+c7*0.64)
a1=B.by(b9,new B.aR(q,q))
$.W()
a6=B.N()
a6.r=C.jB.j(0.88).gp(0)
d5.aD(a1,a6)
a6=B.by(b9,new B.aR(q,q))
a1=B.N()
a1.b=A.af
a1.c=p
a1.r=C.fo.gp(0)
d5.aD(a6,a1)
c0=new D.fnS(b9,c7)
D.aNb(d5,"NGMY",c0.$2(0.13,0.06),c7*0.06,C.fo,!0,p)
D.aNb(d5,"Family",c0.$2(0.2,0.1),r,A.c,!0,0)
D.aNb(d5,"Tree",c0.$2(0.3,0.1),r,A.c,!0,0)
for(s=0;s<3;++s){c1=c9.$2(5.5+s*1.5,0.5)
if(c1<=0)continue
D.aNb(d5,"\u2665 "+C.c0l[s],c0.$2(0.43+s*0.075,0.06).eR(new B.x((1-c1)*30,0)),q,A.i0.j(c1),!1,0)}c2=c9.$2(11,0.5)
if(c2>0){c3=B.ci(new B.x(b9.gbN().a,c7*0.67),u,(o-d4)*0.6*A.et.au(0,c2))
d4=B.by(c3,new B.aR(j,j))
$.W()
u=B.N()
u.r=C.fo.gp(0)
d5.aD(d4,u)
if(c2>0.8)D.aNb(d5,"ngmy.org",c3.cs(-d3),q,C.jB,!0,0)}if(c8>11.6){d3=c7*0.82
D.aNb(d5,"Family is everything",new B.a9(0,d3,0+x*2,d3+q),q,A.c.j(A.k.D((c8-11.6)/0.5,0,1)),!0,0)}if(c8<0.4)c4=1-c8/0.4
else c4=c8>13.5?(c8-13.5)/0.5:0
if(c4>0){$.W()
d3=B.N()
d3.r=A.w.j(c4).gp(0)
d5.b1(new B.a9(0,0,d1,d2),d3)}},
hOS(d,e,a0){var x,w,v,u,t,s,r,q,p,o,n,m,l=null,k=e.a,j=e.b,i=0+k,h=0+j,g=$.W(),f=B.N()
f.sar(C.bX9.aA(0,new B.a9(0,0,i,h)))
d.b1(new B.a9(0,0,i,h),f)
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
t=new B.av(A.Y,A.X,A.a_,A.a0,A.Z)
t.r=(g?A.je:A.dV).gp(0)
q=t.K()
g=v.e
i.drawPath((g==null?v.e=new B.cF(v.gbK().a.snapshot()):g).a,q)
q.delete()}for(i=j*0.04,h=x*1.3,g=k+60,f=k*0.3,p=0,o=0;o<6;++o){u=A.k.F(o*90-h,g)-30
t=Math.sin(o*1.7+a0)
if(Math.abs(u-f)<12)++p
D.hWP(d,new B.x(u,j*(0.35+0.08*t)),i,A.dO)}n=Math.abs(Math.sin(a0*5))
m=new B.x(f,j*0.72-n*j*0.22)
i=B.ci(new B.x(f,j*0.82),j*0.025,j*0.14*(1-n*0.4))
$.W()
h=B.N()
h.r=A.dq.gp(0)
d.hH(i,h)
h=j*0.085
i=B.N()
i.sar(C.eiL.aA(0,B.bU(m,h)))
d.af(m,h,i)
i=B.N()
i.b=A.af
i.c=2
i.r=A.pF.gp(0)
d.af(m,h,i)
i=-j
D.Gh(d,"$",m.ad(0,new B.x(i*0.03,i*0.045)),j*0.09,A.pF,A.bh,0,l)
h=i*0.01
i=m.ad(0,new B.x(i*0.028,h))
g=B.N()
g.r=A.w.gp(0)
d.af(i,2.4,g)
h=m.ad(0,new B.x(j*0.028,h))
g=B.N()
g.r=A.w.gp(0)
d.af(h,2.4,g)
D.Gh(d,"Saved: $"+(A.o.F(A.k.bm(a0*3),1000)+p),new B.x(j*0.05,j*0.06),j*0.08,A.c,A.bh,0,l)},
hWP(d,e,f,g){var x,w,v,u,t,s,r,q=$.W(),p=B.a([],y.v),o=new B.aO(q.r,A.ao,null,null,p)
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
o.e=null}}o.E(new B.bE())
$.W()
q=B.N()
q.r=g.gp(0)
d.aS(o,q)},
hWK(a1,a2,a3){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=a2.a,e=a2.b,d=$.W(),a0=B.N()
a0.r=C.bfZ.gp(0)
a1.b1(new B.a9(0,0,0+f,0+e),a0)
x=new B.f5()
x.dU(7)
for(a0=a3*3,w=a1.a,v=0;v<60;++v){u=A.k.F(A.k.F(x.an()*f-a3*(10+x.an()*60),f)+f,f)
t=x.an()
s=x.an()
r=new B.av(A.Y,A.X,A.a_,A.a0,A.Z)
r.r=A.c.j(0.5+0.5*Math.sin(a0+v)).gp(0)
q=r.K()
w.drawCircle(u,t*e*0.85,0.6+s*1.4,q)
q.delete()}p=f*1.2-A.k.F(a3*22,f*1.6)
a0=e*0.3
t=e*0.2
s=B.N()
s.sar(C.eiJ.aA(0,B.bU(new B.x(p,a0),t)))
a1.af(new B.x(p,a0),t,s)
a0=B.ci(new B.x(p,a0),e*0.07,e*0.6)
s=B.N()
s.b=A.af
s.c=3
s.r=A.bL.j(0.7).gp(0)
a1.hH(a0,s)
s=Math.sin(a3*2)
J.bx(w.save())
w.translate(f*0.42,e*0.52+s*e*0.04)
a1.jp(0,-0.25)
d=d.r
s=y.v
o=new B.aO(d,A.ao,g,g,B.a([],s))
a0=-e
t=a0*0.04
r=e*0.1
o.E(new B.b5(t,r))
n=e*0.04
o.E(new B.cR(0,e*(0.2+0.05*Math.sin(a3*30)),n,r))
o.E(new B.bE())
m=B.N()
l=e*0.12
m.sar(C.bXQ.aA(0,new B.a9(t,r,t+e*0.08,r+l)))
a1.aS(o,m)
k=new B.aO(d,A.ao,g,g,B.a([],s))
m=a0*0.17
k.E(new B.b5(0,m))
t=a0*0.05
j=e*0.05
k.E(new B.cR(e*0.09,t,j,r))
k.E(new B.ap(t,r))
k.E(new B.cR(a0*0.09,t,0,m))
k.E(new B.bE())
i=B.N()
h=a0*0.08
i.sar(C.bY6.aA(0,new B.a9(h,m,h+e*0.16,m+e*0.27)))
a1.aS(k,i)
i=B.N()
i.r=A.aR.gp(0)
a1.af(new B.x(0,t),e*0.035,i)
i=new B.aO(d,A.ao,g,g,B.a([],s))
i.E(new B.b5(t,n))
i.E(new B.ap(a0*0.1,l))
i.E(new B.ap(t,r))
i.E(new B.bE())
t=B.N()
t.r=A.aw.gp(0)
a1.aS(i,t)
s=new B.aO(d,A.ao,g,g,B.a([],s))
s.E(new B.b5(j,n))
s.E(new B.ap(r,l))
s.E(new B.ap(j,r))
s.E(new B.bE())
r=B.N()
r.r=A.aw.gp(0)
a1.aS(s,r)
w.restore()},
hTz(a1,a2,a3){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null,h=a2.a,g=a2.b,f=0+h,e=0+g,d=$.W(),a0=B.N()
a0.sar(C.bWS.aA(0,new B.a9(0,0,f,e)))
a1.b1(new B.a9(0,0,f,e),a0)
for(f=a1.a,e=g*0.85,a0=g*0.7,x=y.v,d=d.r,w=0;w<4;++w){v=h*(0.1+0.25*w)
u=B.a([],x)
t=new B.aO(d,A.ao,i,i,u)
u.push(new B.b5(v,g))
u.push(new B.cR(v+Math.sin(a3+w)*10,e,v+4,a0+w*6))
u=new B.av(A.Y,A.X,A.a_,A.a0,A.Z)
u.b=A.af
u.c=5
u.r=A.cS.gp(0)
s=u.K()
u=t.gbK().a.snapshot()
f.drawPath((t.e=new B.cF(u)).a,s)
s.delete()}e=A.k.F(a3*18,h*1.5)
J.bx(f.save())
f.translate(e-h*0.25,g*0.35+Math.sin(a3)*6)
e=B.ci(A.J,g*0.22,g*0.5)
a0=B.N()
a0.r=A.bq.gp(0)
a1.hH(e,a0)
a0=new B.aO(d,A.ao,i,i,B.a([],x))
e=-g
u=e*0.22
a0.E(new B.b5(u,0))
a0.E(new B.cR(e*0.36,e*0.12+Math.sin(a3*3)*5,e*0.34,e*0.16))
t=e*0.02
a0.E(new B.cR(e*0.28,t,u,0))
u=B.N()
u.r=A.bq.gp(0)
a1.aS(a0,u)
u=g*0.03
a0=g*0.1
r=B.ci(new B.x(0,u),a0,g*0.34)
q=B.N()
q.r=A.aL.gp(0)
a1.hH(r,q)
q=B.N()
q.r=A.c.gp(0)
a1.af(new B.x(g*0.15,t),3,q)
q=B.N()
q.r=A.w.gp(0)
a1.af(new B.x(g*0.155,t),1.5,q)
f.restore()
for(t=e*0.005,r=e*0.08,q=e*0.03,p=g*0.06,e*=0.04,o=h+40,n=a3*2,w=0;w<6;++w){m=(w&1)===0?1:-1
l=A.k.F(A.k.F(a3*(24+w*7)*m+w*80,o)+h+40,o)
k=Math.sin(n+w)
J.bx(f.save())
f.translate(l-20,g*(0.52+0.06*w)+k*6)
f.scale(m,1)
l=B.ci(A.J,p,a0)
k=new B.av(A.Y,A.X,A.a_,A.a0,A.Z)
j=A.o.F(w,4)
k.r=C.avI[j].gp(0)
s=k.K()
f.drawOval(B.bX(l),s)
s.delete()
l=B.a([],x)
k=new B.aO(d,A.ao,i,i,l)
l.push(new B.b5(e,0))
l.push(new B.ap(r,q))
l.push(new B.ap(r,u))
l.push(new B.bE())
l=new B.av(A.Y,A.X,A.a_,A.a0,A.Z)
l.r=C.avI[j].gp(0)
s=l.K()
l=k.gbK().a.snapshot()
f.drawPath((k.e=new B.cF(l)).a,s)
s.delete()
l=new B.av(A.Y,A.X,A.a_,A.a0,A.Z)
l.r=A.w.gp(0)
s=l.K()
f.drawCircle(u,t,1.8,s)
s.delete()
f.restore()}for(w=0;w<14;++w){e=A.k.F(w*0.071+0.05,1)
d=A.k.F(a3*(14+w*3)+w*40,g)
a0=Math.sin(n+w)
x=A.o.F(w,3)
u=new B.av(A.Y,A.X,A.a_,A.a0,A.Z)
u.b=A.af
u.c=1.2
u.r=A.c.j(0.7).gp(0)
s=u.K()
f.drawCircle(h*e+a0*4,g-d,2+x,s)
s.delete()}},
hUQ(a7,a8,a9){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null,d=a8.a,a0=a8.b,a1=A.k.F(a9,12),a2=a1<7,a3=0+d,a4=0+a0,a5=$.W(),a6=B.N()
a6.sar(new B.a8(A.b2,A.b6,A.x,a2?C.df4:C.d28,e,e).aA(0,new B.a9(0,0,a3,a4)))
a7.b1(new B.a9(0,0,a3,a4),a6)
a6=a0*0.74
x=B.N()
x.r=(a2?C.bka:A.EC).gp(0)
a7.b1(new B.a9(0,a6,a3,a6+a0*0.26),x)
for(x=a7.a,w=a0*0.07,v=a0*0.06,u=a0*0.2,t=a0*0.1,s=a0*0.09,r=y.v,q=a9*2,a5=a5.r,p=0;p<4;++p){o=d*(0.08+0.24*p)
n=a0*(0.14+0.03*A.o.F(p,2))
m=a6-n
l=o+u
k=new B.av(A.Y,A.X,A.a_,A.a0,A.Z)
k.r=C.cPJ[p].gp(0)
j=k.K()
x.drawRect(B.bX(new B.a9(o,m,l,m+n)),j)
j.delete()
k=B.a([],r)
i=new B.aO(a5,A.ao,e,e,k)
k.push(new B.b5(o-4,m))
k.push(new B.ap(o+t,m-s))
k.push(new B.ap(l+4,m))
k.push(new B.bE())
m=new B.av(A.Y,A.X,A.a_,A.a0,A.Z)
m.r=A.es.gp(0)
j=m.K()
m=i.gbK().a.snapshot()
x.drawPath((i.e=new B.cF(m)).a,j)
j.delete()
m=o+w
l=n*0.55
k=a6-l
i=new B.av(A.Y,A.X,A.a_,A.a0,A.Z)
i.r=(a2&&A.o.F(A.k.bm(q),2)===0?A.lO:A.fU).gp(0)
j=i.K()
x.drawRect(B.bX(new B.a9(m,k,m+v,k+l)),j)
j.delete()}if(a2){for(a6=a9*20,v=a9*260,u=a0*0.8,p=0;p<70;++p){o=A.k.F(p*37+a6,d)
h=A.k.F(p*53+v,u)
s=new B.av(A.Y,A.X,A.a_,A.a0,A.Z)
s.r=A.fe.gp(0)
s.c=1.4
j=s.K()
x.drawLine.apply(x,[o,h,o-3,h+9,j])
j.delete()}a6=a9*3
if(A.o.F(A.k.bm(a6),7)===0&&A.k.F(a6,1)<0.3){a6=B.N()
a6.r=A.c.j(0.5).gp(0)
a7.b1(new B.a9(0,0,a3,a4),a6)
r=new B.aO(a5,A.ao,e,e,B.a([],r))
r.E(new B.b5(d*0.6,t))
t=d*0.55
a5=a0*0.3
r.E(new B.ap(t,a5))
r.E(new B.ap(d*0.62,a5))
r.E(new B.ap(t,a0*0.55))
t=B.N()
t.b=A.af
t.c=4
t.r=A.lO.gp(0)
a7.aS(r,t)}}else{for(a3=d*0.5,a4=a0*0.035,a5=3.141592653589793*A.k.D((a1-7)/2,0,1)*57.29577951308232,p=0;p<6;++p){v=d*(0.9-p*0.07)
v=B.ci(new B.x(a3,a6),v,v)
u=new B.av(A.Y,A.X,A.a_,A.a0,A.Z)
u.b=A.af
u.c=a4
u.r=C.dja[p].j(0.9).gp(0)
j=u.K()
x.drawArc.apply(x,[B.bX(v),180,a5,!1,j])
j.delete()}a3=B.N()
a3.r=A.dO.gp(0)
a7.af(new B.x(d*0.86,a0*0.16),a0*0.08,a3)}for(a3=d+120,p=0;p<3;++p){o=A.k.F(a9*(8+p*4)+p*120,a3)-60
for(a4=a0*(0.12+0.1*p),g=0;g<4;++g){f=C.ckG[g]
$.W()
a5=new B.av(A.Y,A.X,A.a_,A.a0,A.Z)
a5.r=(a2?A.bl:A.c.j(0.95)).gp(0)
j=a5.K()
x.drawCircle(o+f.a,a4+f.b,w,j)
j.delete()}}},
hWL(a1,a2,a3){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=a2.a,a0=a2.b
$.W()
x=B.N()
x.r=A.dc.gp(0)
a1.b1(new B.a9(0,0,0+d,0+a0),x)
w=B.N()
w.r=A.c.j(0.05).gp(0)
for(x=a1.a,v=0;v<d;v+=16){u=w.K()
x.drawLine.apply(x,[v,0,v,a0,u])
u.delete()}for(t=0;t<a0;t+=16){u=w.K()
x.drawLine.apply(x,[0,t,d,t,u])
u.delete()}s=d*0.14
r=a0*0.2
q=a0*0.08
p=B.by(new B.a9(s,r,s+d*0.72,r+a0*0.5),new B.aR(q,q))
o=new B.aO($.W().r,A.ao,null,null,B.a([],y.v))
o.E(new B.iM(p))
r=B.N()
r.b=A.af
r.c=5
r.r=A.bq.gp(0)
a1.aS(o,r)
n=new B.Sv(new B.vD(B.xc(o),!1,B.a([],y.L))).gH(0)
r=n.a
m=n.b
r.jz()
l=r.e
k=l[m].b
k===$&&B.c()
k=k.a.length()
r.jz()
j=l[m].b
j===$&&B.c()
i=A.k.F(a3*k/5,j.a.length())
for(h=0;h<10;++h){r.jz()
k=l[m].b
k===$&&B.c()
k=A.k.F(i-h*9,k.a.length())
r.jz()
g=l[m].MP(k).a
k=new B.av(A.Y,A.X,A.a_,A.a0,A.Z)
k.r=A.dO.j(1-h*0.09).gp(0)
k.z=L.Ri
u=k.K()
x.drawCircle(g.a,g.b,6-h*0.5,u)
u.delete()}x=a0*0.45
r=B.by(B.ci(new B.x(s,x),a0*0.22,a0*0.12),A.iw)
m=B.N()
m.r=A.cS.gp(0)
a1.aD(r,m)
D.Gh(a1,"+",new B.x(s-5,a0*0.33),a0*0.07,A.c,A.bh,0,null)
f=(Math.sin(a3*2)+1)/2
e=new B.x(d*0.86,x)
x=B.N()
x.r=A.dO.j(0.25+0.5*f).gp(0)
x.z=H.HK
a1.af(e,a0*0.16,x)
x=B.N()
x.r=B.aq(A.bK,A.oJ,f).gp(0)
a1.af(e,q,x)
D.Gh(a1,"Electricity needs a full loop!",new B.x(0,a0*0.74),a0*0.075,A.hh,A.L,0,d)},
hQb(a4,a5,a6){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=a5.a,a1=a5.b,a2=0+a0,a3=0+a1
$.W()
x=B.N()
x.sar(C.c_1.aA(0,new B.a9(0,0,a2,a3)))
a4.b1(new B.a9(0,0,a2,a3),x)
x=a1*0.82
a3=B.N()
a3.r=A.dc.gp(0)
a4.b1(new B.a9(0,x,a2,x+a1*0.18),a3)
for(a2=a0*0.1,a3=a4.a,w=0;w<7;++w){v=a0*(0.05+w*0.15)
u=a1*(0.1+0.07*A.o.F(w*5,4))
t=x-u
s=new B.av(A.Y,A.X,A.a_,A.a0,A.Z)
s.r=A.au.gp(0)
r=s.K()
a3.drawRect(B.bX(new B.a9(v,t,v+a2,t+u)),r)
r.delete()}for(a2=a1*0.2,t=a6*0.55,q=0;q<4;++q){s=t+q*0.27
p=A.k.F(s,1)
o=A.k.bm(s)*7+q*3
n=a0*(0.15+0.7*A.k.F(o*0.37,1))
m=a1*(0.2+0.25*A.k.F(o*0.53,1))
l=C.auK[A.o.F(Math.abs(o),5)]
if(p<0.3){$.W()
s=new B.av(A.Y,A.X,A.a_,A.a0,A.Z)
s.r=A.c.gp(0)
r=s.K()
a3.drawCircle(n,x-(x-m)*(p/0.3),2.5,r)
r.delete()}else{w=(p-0.3)/0.7
for(s=w*w*a1*0.08,k=1-w,j=2.4*k+0.4,i=0;i<28;++i){h=i*3.141592653589793*2/28
g=a2*A.dX.au(0,w)
f=Math.cos(h)
e=Math.sin(h)
$.W()
d=new B.av(A.Y,A.X,A.a_,A.a0,A.Z)
d.r=l.j(A.k.D(k,0,1)).gp(0)
d.z=C.drv
r=d.K()
a3.drawCircle(n+f*g,m+e*g+s,j,r)
r.delete()}}}},
hXt(a4,a5,a6){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=a5.a,d=a5.b,a0=0+e,a1=0+d,a2=$.W(),a3=B.N()
a3.sar(C.bYW.aA(0,new B.a9(0,0,a0,a1)))
a4.b1(new B.a9(0,0,a0,a1),a3)
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
t=new B.av(A.Y,A.X,A.a_,A.a0,A.Z)
t.r=(a2?A.EF:A.EC).gp(0)
q=t.K()
a2=v.e
a1.drawPath((a2==null?v.e=new B.cF(v.gbK().a.snapshot()):a2).a,q)
q.delete()}a2=d*0.8
a3=B.N()
a3.r=A.bq.gp(0)
a4.b1(new B.a9(0,a2,a0,a2+d*0.04),a3)
for(u=-A.k.F(a6*80,24),a0=d*0.84,a3=d*0.03,w=a0+a3;u<e;u+=24){t=new B.av(A.Y,A.X,A.a_,A.a0,A.Z)
t.r=A.fU.gp(0)
q=t.K()
a1.drawRect(B.bX(new B.a9(u,a0,u+8,w)),q)
q.delete()}p=Math.sin(a6*14)*1.2
o=e*0.12
for(a0=a2+p,a2=d*0.025,w=e*0.012,t=d*0.02,s=d*0.62+p,a3=s+a3,r=a3+d*0.06,n=s+d*0.18,m=0;m<4;++m){l=m===0
k=o+e*(l?0.16:0.15)
j=B.by(new B.a9(o,s,k,n),new B.aR(t,t))
i=new B.av(A.Y,A.X,A.a_,A.a0,A.Z)
i.r=(l?A.bx:C.d2a[m-1]).gp(0)
q=i.K()
a1.drawRRect(B.eT(j),q)
q.delete()
for(k-=o,j=k*0.18,h=0;h<3;++h){i=o+k*(0.12+h*0.28)
g=new B.av(A.Y,A.X,A.a_,A.a0,A.Z)
g.r=A.fe.gp(0)
q=g.K()
a1.drawRect(B.bX(new B.a9(i,a3,i+j,r)),q)
q.delete()}j=new B.av(A.Y,A.X,A.a_,A.a0,A.Z)
j.r=A.bj.gp(0)
q=j.K()
a1.drawCircle(o+k*0.25,a0,a2,q)
q.delete()
j=new B.av(A.Y,A.X,A.a_,A.a0,A.Z)
j.r=A.bj.gp(0)
q=j.K()
a1.drawCircle(o+k*0.75,a0,a2,q)
q.delete()
o+=k+w}for(a0=a6*0.8,a2=e*0.2,a3=d*0.6,m=0;m<5;++m){f=A.k.F(a0+m*0.2,1)
w=f*d
s=new B.av(A.Y,A.X,A.a_,A.a0,A.Z)
s.r=A.c.j(0.7*(1-f)).gp(0)
q=s.K()
a1.drawCircle(a2-f*e*0.12,a3-w*0.25,t+w*0.04,q)
q.delete()}},
hVC(a2,a3,a4){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=a3.a,d=a3.b,a0=0+e,a1=0+d
$.W()
x=B.N()
w=a4*2
v=B.aq(A.je,A.f3,(Math.sin(w)+1)/2)
v.toString
x.sar(new B.a8(A.ay,A.aC,A.x,B.a([v,A.au],y.O),null,null).aA(0,new B.a9(0,0,a0,a1)))
a2.b1(new B.a9(0,0,a0,a1),x)
for(a0=a2.a,a1=d*0.86,x=e/8-2,v=d*0.14,u=a1+v,t=0;t<8;++t){s=e*t/8
r=new B.av(A.Y,A.X,A.a_,A.a0,A.Z)
r.r=(A.k.F(w+t,2)<1?A.c5:A.aR).j(0.5).gp(0)
q=r.K()
a0.drawRect(B.bX(new B.a9(s,a1,s+x,u)),q)
q.delete()}a1=a4*6
p=Math.sin(a1)
J.bx(a0.save())
x=-d
a0.translate(e*0.5,d*0.55+Math.abs(p)*x*0.03)
a2.jp(0,p*0.06)
u=d*0.26
s=d*0.3
r=d*0.04
o=B.by(B.ci(A.J,s,u),new B.aR(r,r))
n=B.N()
n.sar(C.c_q.aA(0,B.ci(A.J,s,u)))
a2.aD(o,n)
n=d*0.08
v=B.ci(new B.x(0,d*0.02),n,v)
o=B.N()
o.r=A.ba.j(0.7).gp(0)
a2.b1(v,o)
o=B.by(B.ci(new B.x(0,x*0.25),d*0.17,d*0.22),new B.aR(r,r))
v=B.N()
v.r=A.cr.gp(0)
a2.aD(o,v)
m=A.k.F(a4*1.3,1)>0.08
for(v=x*0.26,u=d*0.025,l=0;l<2;++l){k=C.cki[l]
s=new B.av(A.Y,A.X,A.a_,A.a0,A.Z)
s.r=(m?A.ba:A.f3).gp(0)
q=s.K()
a0.drawCircle(k*d,v,u,q)
q.delete()}v=B.N()
v.r=A.ad.gp(0)
v.c=3
a2.bL(new B.x(0,x*0.335),new B.x(0,x*0.38),v)
v=B.N()
v.r=A.aw.gp(0)
a2.af(new B.x(0,x*0.39),d*0.015,v)
for(v=-p,u=d*0.035,s=d*0.15,o=d*0.28,x*=0.08,l=0;l<2;++l){j=C.js[l]
J.bx(a0.save())
i=j*d
a0.translate(i*0.14,x)
h=j>0
a0.rotate(j*(0.7+Math.sin(a1+(h?0:3.141592653589793))*0.8)*180/3.141592653589793,0,0)
g=new B.av(A.Y,A.X,A.a_,A.a0,A.Z)
g.r=A.bK.gp(0)
g.c=u
g.d=A.bV
q=g.K()
a0.drawLine.apply(a0,[0,0,i*0.16,0,q])
q.delete()
a0.restore()
h=h?p:v
g=new B.av(A.Y,A.X,A.a_,A.a0,A.Z)
g.r=A.bK.gp(0)
g.c=r
g.d=A.bV
q=g.K()
a0.drawLine.apply(a0,[i*0.06,s,i*0.08,o+h*d*0.02,q])
q.delete()}a0.restore()
for(a0=a4*0.7,a1=d*0.7,t=0;t<4;++t){f=A.k.F(a0+t*0.25,1)
D.Gh(a2,"\u266a",new B.x(e*(0.2+0.18*t)+Math.sin(w+t)*8,a1-f*d*0.5),n,A.c.j(1-f),A.bh,0,null)}},
hQm(a1,a2,a3){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=a2.a,e=a2.b,d=0+f,a0=0+e
$.W()
x=B.N()
x.sar(C.bZ2.aA(0,new B.a9(0,0,d,a0)))
a1.b1(new B.a9(0,0,d,a0),x)
x=B.N()
x.r=A.dO.gp(0)
a1.af(new B.x(f*0.12,e*0.16),e*0.07,x)
x=e*0.72
a0=B.N()
a0.r=A.EF.gp(0)
a1.b1(new B.a9(0,x,d,x+e*0.28),a0)
for(d=a3*0.25,a0=e*0.78,x=a1.a,w=e*0.016,v=a3*0.3,u=e*0.022,t=0;t<9;++t){s=f*(0.07+t*0.105)
r=A.k.D(A.k.F(d-t*0.12,3),0,1)
q=A.o.F(t,3)
p=s+Math.sin(a3+t)*3
q=a0-e*(0.12+0.05*q)*r
o=new B.av(A.Y,A.X,A.a_,A.a0,A.Z)
o.r=A.hg.gp(0)
o.c=3
n=o.K()
x.drawLine.apply(x,[s,a0,p,q,n])
n.delete()
if(r>0.7){for(m=0;m<6;++m){l=m*3.141592653589793/3+v
o=Math.cos(l)
k=Math.sin(l)
j=new B.av(A.Y,A.X,A.a_,A.a0,A.Z)
j.r=C.awI[A.o.F(t,5)].gp(0)
n=j.K()
x.drawCircle(p+o*e*0.028,q+k*e*0.028,u,n)
n.delete()}o=new B.av(A.Y,A.X,A.a_,A.a0,A.Z)
o.r=A.dO.gp(0)
n=o.K()
x.drawCircle(p,q,w,n)
n.delete()}}for(d=e*0.03,a0=e*0.05,w=e*0.06,v=a3*0.9,u=a3*1.3,q=a3*18,t=0;t<3;++t){s=f*(0.2+0.28*t)+Math.sin(v+t*2)*f*0.12
i=e*(0.3+0.1*t)+Math.cos(u+t)*e*0.06
h=Math.abs(Math.sin(q+t))
for(p=a0*h+2,o=(t+2)%5,g=0;g<2;++g){k=B.ci(new B.x(s+C.js[g]*e*0.025*h,i),w,p)
j=new B.av(A.Y,A.X,A.a_,A.a0,A.Z)
j.r=C.awI[o].gp(0)
n=j.K()
x.drawOval(B.bX(k),n)
n.delete()}p=new B.av(A.Y,A.X,A.a_,A.a0,A.Z)
p.r=A.bj.gp(0)
p.c=2
n=p.K()
x.drawLine.apply(x,[s,i-d,s,i+d,n])
n.delete()}},
h0M(d,e,f,g,h,i){return B.a4(d,!1).cm(B.uL(null,!1,!0,!0,new D.fOl(e,h,g,i,f),A.eM,null,A.pT,new D.fOm(),y.S))},
xI:function xI(d,e){this.a=d
this.b=e},
fcG:function fcG(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fnR:function fnR(d){this.a=d},
fnN:function fnN(){},
fnQ:function fnQ(d,e){this.a=d
this.b=e},
fnO:function fnO(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fnP:function fnP(d,e,f){this.a=d
this.b=e
this.c=f},
fnS:function fnS(d,e){this.a=d
this.b=e},
fOl:function fOl(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fOm:function fOm(){},
W3:function W3(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aE1:function aE1(d,e){var _=this
_.e=_.d=$
_.f=-1
_.r=!1
_.w=null
_.x=0
_.y=!0
_.z=null
_.bw$=d
_.aa$=e
_.c=_.a=null},
eD5:function eD5(d){this.a=d},
eD4:function eD4(d){this.a=d},
eD3:function eD3(d,e){this.a=d
this.b=e},
eD6:function eD6(d,e){this.a=d
this.b=e},
eDf:function eDf(d){this.a=d},
eDe:function eDe(d){this.a=d},
eDd:function eDd(){},
eD8:function eD8(d){this.a=d},
eD9:function eD9(d){this.a=d},
eDa:function eDa(d){this.a=d},
eDb:function eDb(d){this.a=d},
eD7:function eD7(d){this.a=d},
eDc:function eDc(d){this.a=d},
eD2:function eD2(d){this.a=d},
eD1:function eD1(d){this.a=d},
btF:function btF(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.a=h},
aLH:function aLH(){},
h0R(d){var x
A:{if("lgtv"===d){x="lg"
break A}if("sonytv"===d){x="sony"
break A}if("appletv"===d){x="apple"
break A}if("bangtv"===d){x="bo"
break A}x="samsung"
break A}return x},
iaa(d){var x,w=D.h0R(d)
A:{if("lg"===w){x=A.he
break A}if("sony"===w){x=A.ds
break A}if("apple"===w){x=A.bO
break A}if("bo"===w){x=C.tg
break A}x=A.aR
break A}return x},
arw:function arw(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bjS:function bjS(){this.d=0
this.c=this.a=null},
eD_:function eD_(d,e){this.a=d
this.b=e},
eD0:function eD0(d,e){this.a=d
this.b=e},
eCX:function eCX(){},
eCW:function eCW(d){this.a=d},
eCY:function eCY(d){this.a=d},
eCZ:function eCZ(d){this.a=d},
eCU:function eCU(d){this.a=d},
eCV:function eCV(d,e){this.a=d
this.b=e},
hFU(b3,b4,b5,b6,b7){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9=A.o.am(22050*b4,1000),b0=a9*2,b1=new DataView(new ArrayBuffer(44+b0)),b2=new D.cfF(b1)
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
x=new B.f5()
x.dU(3)
w=3
v=0.006
u=!1
t=0
switch(b7){case"piano":s=C.cWm
r=C.d0F
w=3.4
break
case"organ":s=C.d_v
r=C.df8
v=0.02
u=!0
break
case"bell":s=C.cS6
r=C.cQX
w=2.4
break
case"pluck":s=C.cWl
r=C.cCJ
w=7
break
case"synth":s=C.dg_
r=C.dhI
v=0.012
u=!0
break
case"flute":s=C.dm4
r=C.cd1
v=0.07
u=!0
t=0.035
break
default:s=C.api
r=C.api}b0=s.length
q=B.c3(b0,0,!1,y.i)
for(p="saw"===b5,o="tri"===b5,n="noise"===b5,m="square"===b5,l=b7.length!==0,k=-w,j=k*0.12,i=t>0,h=b7!=="bell",g=b7!=="piano",f=b7==="pluck",e=0,d=0;d<a9;++d){a0=d/22050
a1=1-d/a9
a2=b3*(1+b6*a1)
if(l){for(a1=6.283185307179586*a2,a3=k*a0,a4=0,a5=0;a5<b0;++a5){a6=q[a5]+a1*r[a5]/22050
q[a5]=a6
a7=!h||!g||f?Math.exp(a3*(1+a5*0.35)):1
a4+=Math.sin(a6)*s[a5]*a7}a4/=1.9
if(i)a4+=(x.an()*2-1)*t
a8=Math.min(1,a0/v)*Math.min(1,(a9-d)/1984.5)
a4*=u?a8:a8*Math.exp(j*a0)}else{e+=6.283185307179586*a2/22050
A:{if(m){a3=Math.sin(e)>=0?0.6:-0.6
break A}if(n){a3=(x.an()*2-1)*0.8
break A}if(o){a3=0.6366197723675814*Math.asin(Math.sin(e))
break A}if(p){a3=A.k.F(e/6.283185307179586,1)*1.2-0.6
break A}a3=Math.sin(e)
break A}a4=a3*(Math.min(1,d/120)*Math.pow(a1,1.6))}b1.setInt16(44+d*2,A.o.D(A.k.V(a4*0.8*32e3),-32768,32767),!0)}return J.eU(A.dC.gaP(b1))},
dX(d,e,f,g,h,i){return D.hFV(d,e,f,g,h,i)},
hFV(d,e,f,g,h,i){var x=0,w=B.j(y.H),v=1,u=[],t,s,r,q,p,o
var $async$dX=B.e(function(j,k){if(j===1){u.push(k)
x=v}for(;;)switch(x){case 0:v=3
t=""+A.k.V(d)+"|"+f+"|"+i+"|"+B.u(g)+"|"+e
s=$.hFT.c7(0,t,new D.cfH(d,f,i,g,e))
if($.cfE.length<12){q=B.ai7()
q.MY(A.aMO)
$.cfE.push(q)}q=$.haa
$.haa=q+1
r=$.cfE[A.o.F(q,$.cfE.length)]
x=6
return B.b(J.ht4(r,new B.a2R(s,null),h),$async$dX)
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
return B.i($async$dX,w)},
cfF:function cfF(d){this.a=d},
cfH:function cfH(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h}},C,M,N
J=c[1]
B=c[0]
A=c[2]
E=c[124]
G=c[123]
H=c[126]
I=c[172]
K=c[95]
F=c[118]
L=c[96]
D=a.updateHolder(c[26],D)
C=c[93]
M=c[102]
N=c[232]
D.wo.prototype={}
D.vT.prototype={}
D.xI.prototype={}
D.W3.prototype={
U(){return new D.aE1(null,null)}}
D.aE1.prototype={
gadO(){var x,w=this,v=w.d
if(v===$){x=B.bj(null,A.nX,null,1,null,w)
x.cr(0)
w.d!==$&&B.bL()
w.d=x
v=x}return v},
gDh(){var x=this.e
return x===$?this.e=this.a.e:x},
a_(){var x=this
x.a1()
x.w=B.cM(x.a.r,x.gaYK())
x.aUT()
D.dX(520,"",80,0,0.25,"tri")},
aUT(){var x=this.z
if(x!=null)x.a7(0)
this.z=B.cM(A.k5,new D.eD5(this))},
c6s(){var x=this.c
if(x!=null&&B.a4(x,!1).pB()){x=this.c
x.toString
B.a4(x,!1).O(this.gDh())}},
aiK(){var x=this,w=x.w
if(w!=null)w.a7(0)
x.w=null
x.y=!0
x.aUT()},
awH(d){this.m(new D.eD3(this,d))
D.dX(900,"",40,0,0.3,"noise")},
b_v(d){this.m(new D.eD6(this,d))
D.dX(700,"",60,0,0.3,"tri")},
t(){var x=this,w=x.w
if(w!=null)w.a7(0)
w=x.z
if(w!=null)w.a7(0)
x.gadO().t()
x.bvx()},
B(d){var x,w,v,u,t=this,s=null,r=B.n(10),q=B.I(t.gc6t(),A.q,6),p=B.a([new B.ac(0,A.G,D.iaa(t.a.d).j(0.25),A.J,40)],y.V),o=B.n(4),n=y.p,m=B.a([B.c7(t.gadO(),new D.eDe(t),s)],n)
if(t.r)m.push(t.bB1())
r=B.au(new B.fK(1.7777777777777777,B.p(s,B.bw(o,new B.an(A.V,s,A.b0,A.r,m,s),A.aq),A.f,s,s,new B.o(s,s,q,r,p,s,A.n),s,s,s,s,s,s,s,s),s),s,s,s)
q=t.y
p=q?1:0
o=B.nC(s,A.aW,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s)
o=B.aI(s,s,s,s,B.X(A.cy,A.c,s,s,s,s),s,s,s,t.gaYK(),s,s,s,o,"Back to the board",s)
m=B.n(20)
x=t.f
w=t.a
o=B.B(B.a([o,A.b4,B.p(s,B.d(x>=0?w.c+" \xb7 "+C.kb[x].a:w.c+" \xb7 CH "+(t.gDh()+1),s,s,s,s,s,s,M.zK,s,s,s),A.f,s,s,new B.o(A.aW,s,s,m,s,s,A.n),s,s,s,s,A.mt,s,s,s)],n),A.m,s,A.e,A.j,0,s,s)
m=t.cnj()
x=A.w.j(0.65)
w=B.n(18)
v=t.f
v=B.d(v>=0?C.kb[v].a:C.Q7[t.gDh()].a,s,s,s,s,s,s,A.hX,A.L,s,s)
u=t.f
return B.c6(s,A.w,B.bl(!0,B.aB(A.ch,new B.an(A.V,s,A.b0,A.r,B.a([r,B.D7(B.e1(B.w(B.a([new B.D(C.bsB,o,s),A.am,m,A.b4,B.p(s,B.w(B.a([v,B.d(u>=0?C.kb[u].c:C.Q7[t.gDh()].b,s,s,s,s,s,s,K.a8b,A.L,s,s)],n),A.m,s,A.e,A.Q,0,A.p),A.f,s,s,new B.o(x,s,s,w,s,s,A.n),s,s,s,A.bk,A.bT,s,s,s)],n),A.m,s,A.e,A.j,0,A.p),!q,s),A.bb,A.ij,p)],n),s),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new D.eDf(t),s,s,s,s,s,s,!1,A.a7),!0,!1,A.ae,!0,!0),s,!1,!1,s,s)},
cnj(){var x=this,w=null,v=new D.eDd(),u=A.w.j(0.72),t=B.n(22),s=B.I(A.aR.j(0.5),A.q,1)
return B.p(w,B.B(B.a([v.$3(A.yt,"CH \u2212",new D.eD8(x)),v.$3(A.hz,"CH +",new D.eD9(x)),v.$5$color$on(A.Gk,"TV",new D.eDa(x),A.aR,x.f<0),v.$5$color$on(A.yf,"APPS",new D.eDb(x),A.by,x.r),v.$5$color$on(A.BG,"ADS",new D.eDc(x),A.c5,x.f===0)],y.p),A.m,w,A.e,A.Q,0,w,w),A.f,w,w,new B.o(u,w,s,t,w,w,A.n),w,w,w,w,A.Zt,w,w,w)},
bB1(){return new D.arw(this.a.d,this.gcc2(),new D.eD2(this),null)},
gc6t(){var x,w=D.h0R(this.a.d)
A:{if("apple"===w){x=A.ds
break A}if("bo"===w){x=C.Es
break A}if("sony"===w){x=C.b8O
break A}if("lg"===w){x=A.ed
break A}x=A.co
break A}return x}}
D.btF.prototype={
a6(d,e){var x=this
return D.h0t(d,e,x.b,x.d,x.e,x.c)},
av(d){return!0}}
D.aLH.prototype={
t(){var x=this,w=x.aa$
if(w!=null)w.a4(0,x.gbE())
x.aa$=null
x.a2()},
aW(){this.b6()
this.b5()
this.bF()}}
D.arw.prototype={
U(){return new D.bjS()},
a5s(d,e){return this.d.$1(e)}}
D.bjS.prototype={
aYL(d){this.m(new D.eD_(this,d))
this.a.a5s(0,d)},
B(d){var x,w=this,v=D.h0R(w.a.c)
A:{if("lg"===v){x=w.c_h()
break A}if("sony"===v){x=w.cv0()
break A}if("apple"===v){x=w.c6u()
break A}if("bo"===v){x=w.bBW()
break A}x=w.cpn()
break A}return x},
gadP(){var x=new B.S(Date.now(),0,!1)
return A.a.aX(A.o.u(B.dk(x)),2,"0")+":"+A.a.aX(A.o.u(B.h1(x)),2,"0")},
awI(d,e,f,g,h,i,j){var x,w,v=null,u=C.kb[d],t=this.d===d,s=u.d,r=B.aq(s,A.w,0.55)
r.toString
r=B.a([s,r],y.O)
s=B.n(h)
if(t)x=i
else x=A.K
x=B.I(x,A.q,t?2.5:0)
w=B.a([B.d(u.b,v,v,v,v,v,v,B.l(v,v,v,v,v,v,v,v,v,v,v,e,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],y.p)
if(g)w.push(new B.D(A.vs,B.d(u.a,v,1,A.a2,v,v,v,A.TW,v,v,v),v))
return B.aB(v,B.p(v,B.w(w,A.m,v,A.b7,A.j,0,A.p),A.f,v,v,new B.o(v,v,x,s,v,new B.a8(A.ay,A.aC,A.x,r,v,v),A.n),v,f,v,v,v,v,v,j),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new D.eD0(this,d),v,v,v,v,v,v,!1,A.a7)},
aYM(d,e,f,g,h,i){return this.awI(d,e,f,!1,g,h,i)},
cpn(){var x,w,v,u,t,s,r=this,q=null,p=r.a.e,o=y.p,n=B.B(B.a([C.fr8,A.ab,C.fjs,A.b4,C.bQN,A.ab,C.bMH,A.ab,B.d(r.gadP(),q,q,q,q,q,q,C.aQY,q,q,q)],o),A.m,q,A.e,A.j,0,q,q),m=C.kb[r.d],l=B.d(m.a,q,q,q,q,q,q,A.lD,q,q,q)
m=B.d(m.c,q,1,A.a2,q,q,q,C.fbn,q,q,q)
x=A.c.j(0.08)
w=B.a([],o)
for(v=0;v<2;++v){u=new B.aR(8,8)
w.push(B.p(q,B.X(C.ck6[v],A.ad,q,q,q,17),A.f,q,q,new B.o(A.bD,q,q,new B.bo(u,u,u,u),q,q,A.n),q,34,q,A.Mk,q,q,q,34))}u=B.a([],o)
for(t=0;t<8;++t){s=r.d===t?1.12:1
u.push(new B.D(A.Mk,new B.yN(r.awI(t,14,44,!0,8,A.aR,52),s,A.bb,A.fA,q,q),q))}w.push(B.E(B.cc(B.B(u,A.m,q,A.e,A.j,0,q,q),A.r,q,A.y,q,q,q,q,A.aN),1))
return B.aB(q,B.p(q,B.w(B.a([n,A.b4,new B.bI(A.a3,q,q,l,q),new B.bI(A.a3,q,q,m,q),A.am,B.p(q,B.B(w,A.m,q,A.e,A.j,0,q,q),A.f,q,q,new B.o(x,q,q,A.Vs,q,q,A.n),q,q,q,q,A.MJ,q,q,q)],o),A.m,q,A.e,A.j,0,A.p),A.f,q,q,C.b0W,q,q,q,q,E.aht,q,q,q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,p,q,q,q,q,q,q,!1,A.a7)},
c_h(){var x=null,w=this.a.e,v=y.p
return B.aB(x,B.p(x,B.w(B.a([B.B(B.a([B.p(x,C.fx8,A.f,x,x,new B.o(A.he,x,x,B.n(10),x,x,A.n),x,x,x,x,A.ne,x,x,x),A.bp,C.fq7,A.b4,B.d(this.gadP(),x,x,x,x,x,x,A.Dt,x,x,x)],v),A.m,x,A.e,A.j,0,x,x),A.b4,new B.a7(x,62,B.hM(x,new D.eCW(this),8,x,x,A.aN,new D.eCX(),!1),x)],v),A.F,x,A.e,A.j,0,A.p),A.f,x,x,C.b16,x,x,x,x,N.Mq,x,x,x),A.y,!1,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,w,x,x,x,x,x,x,!1,A.a7)},
cv0(){var x,w,v,u,t=this,s=null,r=C.kb[t.d],q=t.a.e,p=y.p,o=B.a([B.p(s,C.eQr,A.f,s,s,new B.o(A.dB,s,s,B.n(12),s,s,A.n),s,s,s,s,A.y_,s,s,s),A.ab],p)
for(x=0;x<3;++x){w=C.dc0[x]
v=w==="Apps"?A.c:A.aA
o.push(new B.D(A.il,new B.y(w,s,new B.G(!0,v,s,s,s,s,9.5,A.O,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s),s,s,s,s,s,s,s,s,s),s))}o.push(A.b4)
o.push(B.d(t.gadP(),s,s,s,s,s,s,C.faM,s,s,s))
o=B.B(o,A.m,s,A.e,A.j,0,s,s)
v=r.d
u=B.aq(v,A.w,0.7)
u.toString
u=B.a([v,u],y.O)
v=B.n(10)
return B.aB(s,B.p(s,B.w(B.a([o,A.fF,B.E(B.B(B.a([B.E(B.p(s,B.w(B.a([B.d(r.b,s,s,s,s,s,s,A.pk,s,s,s),B.d(r.a,s,s,s,s,s,s,A.op,s,s,s),B.d(r.c,s,2,A.a2,s,s,s,C.fgW,s,s,s),A.cQ,B.aB(s,B.p(s,C.fn0,A.f,s,s,new B.o(A.c,s,s,B.n(10),s,s,A.n),s,s,s,s,A.y_,s,s,s),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new D.eCY(t),s,s,s,s,s,s,!1,A.a7)],p),A.F,s,A.mC,A.j,0,A.p),A.f,s,s,new B.o(s,s,s,v,s,new B.a8(A.a3,A.a8,A.x,u,s,s),A.n),s,s,s,s,A.cp,s,s,s),5),A.ab,B.E(B.iw(!0,s,s,A.y,C.eWW,new D.eCZ(t),8,A.ae,s,A.ah,!1),6)],p),A.m,s,A.e,A.j,0,s,s),1)],p),A.F,s,A.e,A.j,0,A.p),A.f,C.bjF,s,s,s,s,s,s,A.fX,s,s,s),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,q,s,s,s,s,s,s,!1,A.a7)},
c6u(){var x,w,v,u,t=this,s=null,r=t.a.e,q=y.p,p=B.B(B.a([C.bRo,A.qq,C.fD4,A.b4,B.d(t.gadP(),s,s,s,s,s,s,A.Dw,s,s,s)],q),A.m,s,A.e,A.j,0,s,s),o=B.a([],q)
for(x=0;x<8;++x){w=t.d===x
v=w?6:0
u=w?C.dhs:A.Qt
w=w?1.18:1
o.push(new B.D(A.eS,B.de(s,new B.yN(t.aYM(x,20,44,12,A.c,44),w,A.bb,A.eJ,s,s),s,s,A.bb,new B.o(s,s,s,s,u,s,A.n),A.eJ,s,s,new B.Q(0,0,0,v),s,s,s,s),s))}return B.aB(s,B.p(s,B.w(B.a([p,A.b4,new B.a7(s,68,B.cc(B.B(o,A.dA,s,A.e,A.j,0,s,s),A.r,s,A.y,s,s,s,s,A.aN),s),A.av,B.d(C.kb[t.d].a,s,s,s,s,s,s,A.or,s,s,s)],q),A.m,s,A.e,A.j,0,A.p),A.f,s,s,C.b0Y,s,s,s,s,C.YI,s,s,s),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,r,s,s,s,s,s,s,!1,A.a7)},
bBW(){var x,w,v,u,t,s,r=this,q=null,p=r.a.e,o=C.kb[r.d],n=y.p
o=B.E(B.w(B.a([C.fmz,A.b4,B.d(o.b,q,q,q,q,q,q,A.nv,q,q,q),A.av,B.d(o.a,q,q,q,q,q,q,C.f3l,q,q,q),A.bz,B.d(o.c,q,q,q,q,q,q,C.fhe,q,q,q),A.am,B.aB(q,B.p(q,C.fFa,A.f,q,q,C.b1t,q,q,q,q,C.brM,q,q,q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new D.eCU(r),q,q,q,q,q,q,!1,A.a7),A.b4],n),A.F,q,A.e,A.j,0,A.p),4)
x=B.p(q,q,A.f,C.bhD,q,q,q,q,q,A.fY,q,q,q,0.6)
w=B.a([],n)
for(v=0;v<8;++v){u=C.kb[v]
t=r.d===v
s=t?C.tg:C.acW
t=t?12:10.5
w.push(B.aB(q,new B.D(A.xM,new B.y(u.a,q,new B.G(!0,s,q,"serif",q,q,t,A.k6,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q),q,q,q,q,q,q,q,q,q),q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new D.eCV(r,v),q,q,q,q,q,q,!1,A.a7))}return B.aB(q,B.p(q,B.B(B.a([o,x,B.E(B.cy(w,q,q,q,q,A.ah,!1),3)],n),A.m,q,A.e,A.j,0,q,q),A.f,C.bmZ,q,q,q,q,q,q,A.FA,q,q,q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,p,q,q,q,q,q,q,!1,A.a7)}}
var z=a.updateTypes(["~()","W3(Y,bq<K>,bq<K>)","~(H)"])
D.fnx.prototype={
$1(d){var x=null,w=B.h2(x,x,1,x,B.d0(x,x,x,x,x,x,x,x,x,B.l(x,x,this.b,x,x,x,x,x,x,x,x,d,x,x,A.u,x,x,!0,x,x,x,x,x,x,x,x),this.a),A.a4,A.cb,x,A.dR,A.c7)
w.eO()
return w},
$S:430}
D.fnr.prototype={
$1(d){return Math.min(this.a*0.085,this.b*0.44/(d.length*0.62))},
$S:697}
D.fGi.prototype={
$1(d){var x=this.b,w=B.kr(this.a,x,d)
w.toString
x=B.kr(x,this.c,d)
x.toString
x=B.kr(w,x,d)
x.toString
return x},
$S:1949}
D.fap.prototype={
$2(d,e){return A.k.D((this.a-d)/e,0,1)},
$S:79}
D.fam.prototype={
$1(d){return A.dy.au(0,d)},
$S:5}
D.fao.prototype={
$2(d,e){var x=this.b
return new B.x(this.a.a+d*x,this.c.b-e*x)},
$S:450}
D.fan.prototype={
$5(d,e,f,g,h){var x,w,v,u=this.a.$2(h,0.5)
if(u<=0)return
x=this.b
w=x.a
J.bx(w.save())
w.translate(f.a,f.b)
x.bZ(0,A.k.D(A.lK.au(0,u),0.01,1.3))
v=this.c
D.hnn(x,A.J,g,d,v,v>4.5?0.6:0)
D.hno(x,new B.x(0,g*1.42),g,e)
w.restore()},
$S:747}
D.feS.prototype={
$1(d){var x=this,w=null,v=x.c?A.u:A.a6
v=B.h2(w,w,1,w,B.d0(w,w,w,w,w,w,w,w,w,B.l(w,w,x.b,w,w,w,w,w,w,w,w,d,w,w,v,w,w,!0,w,x.d,w,w,w,w,w,w),x.a),A.a4,A.cb,w,A.dR,A.c7)
v.eO()
return v},
$S:430}
D.fcG.prototype={
$1(d){var x=this,w=null,v=x.c?A.u:A.O
v=B.h2(w,w,1,w,B.d0(w,w,w,w,w,w,w,w,w,B.l(w,w,x.b,w,w,w,w,w,w,w,w,d,w,w,v,w,w,!0,w,x.d,w,w,w,w,w,w),x.a),A.a4,A.cb,w,A.dR,A.c7)
v.eO()
return v},
$S:430}
D.fnR.prototype={
$2(d,e){return A.k.D((this.a-d)/e,0,1)},
$S:79}
D.fnN.prototype={
$1(d){return A.dy.au(0,d)},
$S:5}
D.fnQ.prototype={
$2(d,e){var x=this.b
return new B.x(this.a+d*x,e*x)},
$S:450}
D.fnO.prototype={
$5(d,e,f,g,h){var x,w,v,u=this,t=u.a.$2(h,0.6)
if(t<=0)return
x=u.b
w=x.a
J.bx(w.save())
w.translate(f.a,f.b)
x.bZ(0,A.k.D(A.lK.au(0,t),0.01,1.3))
v=u.c
D.hnn(x,A.J,g,d,v,u.d>9.5?0.5+0.3*Math.sin(v*3+d):0)
D.hno(x,new B.x(0,g*1.42),g,e)
w.restore()},
$S:747}
D.fnP.prototype={
$3(d,e,f){var x,w,v,u,t=this.a.$2(f,0.5)
if(t<=0)return
x=A.k.D(A.lK.au(0,t),0.01,1.3)*(1+0.07*Math.sin(this.b*6))
w=this.c
v=e*x
$.W()
u=B.N()
u.r=A.bA.gp(0)
w.af(d,v,u)
u=B.N()
u.b=A.af
u.c=2
u.r=A.c.gp(0)
w.af(d,v,u)
D.Gh(w,"\u2665",d.aF(0,new B.x(e*0.5*x,e*0.62*x)),e*1.3*x,A.c,A.bh,0,null)},
$S:432}
D.fnS.prototype={
$2(d,e){var x,w,v=this.a,u=v.a
v=v.c-u
u+=v*0.08
x=this.b
w=x*d
return new B.a9(u,w,u+v*0.84,w+x*e)},
$S:1951}
D.fOl.prototype={
$3(d,e,f){var x=this
return new D.W3(x.d,x.e,x.a,x.c,x.b,null)},
$C:"$3",
$R:3,
$S:z+1}
D.fOm.prototype={
$4(d,e,f,g){var x=y.t
return new B.d_(e,!1,B.iq(A.A,g,null,new B.bf(B.cH(A.ct,e,null),new B.bp(0.85,1,x),x.k("bf<bJ.T>"))),null)},
$C:"$4",
$R:4,
$S:32}
D.eD5.prototype={
$0(){var x=this.a
if(x.c!=null&&!x.r)x.m(new D.eD4(x))},
$S:0}
D.eD4.prototype={
$0(){return this.a.y=!1},
$S:0}
D.eD3.prototype={
$0(){var x,w=this.a
w.f=-1
w.e=A.o.F(w.gDh()+this.b,10)
if(w.gDh()<0)w.e=w.gDh()+10
x=w.gadO().y
x=x==null?null:A.o.am(x.a,1000)
w.x=x==null?0:x
w.aiK()},
$S:0}
D.eD6.prototype={
$0(){var x=this.a
x.f=this.b
x.r=!1
x.aiK()},
$S:0}
D.eDf.prototype={
$0(){var x=this.a
return x.m(x.gcA3())},
$S:0}
D.eDe.prototype={
$2(d,e){var x=null,w=this.a,v=w.gadO().y,u=v==null?x:A.o.am(v.a,1000),t=(u==null?0:u)/1000,s=w.x===0&&w.a.f?t:99
return B.b3(x,x,x,new D.btF(w.gDh(),w.f,t,s,x),A.fE)},
$S:70}
D.eDd.prototype={
$5$color$on(d,e,f,g,h){var x=null,w=h?g.j(0.28):A.c.j(0.08),v=B.n(14),u=B.I(h?g:A.b1,A.q,1)
return B.aB(x,B.p(x,B.w(B.a([B.X(d,g,x,x,x,20),A.uM,B.d(e,x,x,x,x,x,x,B.l(x,x,g,x,x,x,x,x,x,x,x,9.5,x,x,A.H,x,x,!0,x,x,x,x,x,x,x,x),x,x,x)],y.p),A.m,x,A.e,A.Q,0,A.p),A.f,x,x,new B.o(w,x,u,v,x,x,A.n),x,x,x,A.jo,A.kV,x,x,56),A.y,!1,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,f,x,x,x,x,x,x,!1,A.a7)},
$3(d,e,f){return this.$5$color$on(d,e,f,A.c,!1)},
$4$color(d,e,f,g){return this.$5$color$on(d,e,f,g,!1)},
$S:1952}
D.eD8.prototype={
$0(){return this.a.awH(-1)},
$S:0}
D.eD9.prototype={
$0(){return this.a.awH(1)},
$S:0}
D.eDa.prototype={
$0(){return this.a.awH(0)},
$S:0}
D.eDb.prototype={
$0(){var x=this.a
return x.m(new D.eD7(x))},
$S:0}
D.eD7.prototype={
$0(){var x=this.a
x.r=!x.r
x.aiK()},
$S:0}
D.eDc.prototype={
$0(){return this.a.b_v(0)},
$S:0}
D.eD2.prototype={
$0(){var x=this.a
return x.m(new D.eD1(x))},
$S:0}
D.eD1.prototype={
$0(){return this.a.r=!1},
$S:0}
D.eD_.prototype={
$0(){return this.a.d=this.b},
$S:0}
D.eD0.prototype={
$0(){return this.a.aYL(this.b)},
$S:0}
D.eCX.prototype={
$2(d,e){return A.bp},
$S:36}
D.eCW.prototype={
$2(d,e){var x=null,w=this.a,v=w.d===e?1.1:1
v=B.a([B.vs(w.aYM(e,18,46,6,A.c,80),A.bb,A.fA,v)],y.p)
if(w.d===e)v.push(new B.D(A.vs,B.d(C.kb[e].a,x,x,x,x,x,x,C.fft,x,x,x),x))
return B.w(v,A.m,x,A.e,A.Q,0,A.p)},
$S:675}
D.eCY.prototype={
$0(){var x=this.a
return x.a.a5s(0,x.d)},
$S:0}
D.eCZ.prototype={
$2(d,e){return this.a.awI(e,15,1/0,!0,8,A.c,1/0)},
$S:40}
D.eCU.prototype={
$0(){var x=this.a
return x.a.a5s(0,x.d)},
$S:0}
D.eCV.prototype={
$0(){return this.a.aYL(this.b)},
$S:0}
D.cfF.prototype={
$2(d,e){var x,w,v,u
for(x=e.length,w=this.a,v=w.$flags|0,u=0;u<x;++u){v&2&&B.aj(w,9)
w.setUint8(d+u,e.charCodeAt(u))}},
$S:1953}
D.cfH.prototype={
$0(){var x=this
return D.hFU(x.a,x.b,x.c,x.d,x.e)},
$S:290};(function aliases(){var x=D.aLH.prototype
x.bvx=x.t})();(function installTearOffs(){var x=a._instance_0u,w=a._instance_1u
var v
x(v=D.aE1.prototype,"gaYK","c6s",0)
x(v,"gcA3","aiK",0)
w(v,"gcc2","b_v",2)})();(function inheritance(){var x=a.mixinHard,w=a.inheritMany,v=a.inherit
w(B.i_,[D.fnx,D.fnr,D.fGi,D.fam,D.fan,D.feS,D.fcG,D.fnN,D.fnO,D.fnP,D.fOl,D.fOm,D.eDd])
w(B.kj,[D.fap,D.fao,D.fnR,D.fnQ,D.fnS,D.eDe,D.eCX,D.eCW,D.eCZ,D.cfF])
w(B.aD,[D.wo,D.vT,D.xI])
w(B.ag,[D.W3,D.arw])
w(B.ah,[D.aLH,D.bjS])
v(D.aE1,D.aLH)
w(B.ja,[D.eD5,D.eD4,D.eD3,D.eD6,D.eDf,D.eD8,D.eD9,D.eDa,D.eDb,D.eD7,D.eDc,D.eD2,D.eD1,D.eD_,D.eD0,D.eCY,D.eCU,D.eCV,D.cfH])
v(D.btF,B.mN)
x(D.aLH,B.cn)})()
B.k_(b.typeUniverse,JSON.parse('{"W3":{"ag":[],"t":[]},"aE1":{"ah":["W3"]},"btF":{"aC":[]},"arw":{"ag":[],"t":[]},"bjS":{"ah":["arw"]},"Ng":{"ag":[],"t":[]}}'))
var y=(function rtii(){var x=B.ax
return{L:x("O<a2H>"),V:x("O<ac>"),O:x("O<v>"),v:x("O<hw>"),C:x("O<+(K,K,K)>"),s:x("O<m>"),p:x("O<t>"),n:x("O<K>"),t:x("bp<K>"),i:x("K"),S:x("H"),H:x("~")}})();(function constants(){var x=a.makeConstList
C.baS=new B.v(1,0.0196078431372549,0.03137254901960784,0.058823529411764705,A.t)
C.ble=new B.v(1,0.043137254901960784,0.10196078431372549,0.2,A.t)
C.d8M=x([C.baS,C.ble],y.O)
C.bZH=new B.a8(A.b2,A.b6,A.x,C.d8M,null,null)
C.b0W=new B.o(null,null,null,null,null,C.bZH,A.n)
C.bj3=new B.v(1,0.42745098039215684,0.47843137254901963,0.5764705882352941,A.t)
C.b9b=new B.v(1,0.16862745098039217,0.1803921568627451,0.26666666666666666,A.t)
C.bab=new B.v(1,0.4823529411764706,0.29411764705882354,0.41568627450980394,A.t)
C.dky=x([C.bj3,C.b9b,C.bab],y.O)
C.bY2=new B.a8(A.ay,A.aC,A.x,C.dky,null,null)
C.b0Y=new B.o(null,null,null,null,null,C.bY2,A.n)
C.aXr=new B.dd(0.5,-0.6)
C.bmr=new B.v(1,0.22745098039215686,0.054901960784313725,0.10980392156862745,A.t)
C.d4a=x([C.bmr,A.ed],y.O)
C.ej2=new B.c_(C.aXr,1.3,A.x,null,0,C.d4a,null,null)
C.b16=new B.o(null,null,null,null,null,C.ej2,A.n)
C.tg=new B.v(1,0.8392156862745098,0.7176470588235294,0.4823529411764706,A.t)
C.b_c=new B.az(C.tg,1,A.q,-1)
C.b_p=new B.bO(A.W,A.W,C.b_c,A.W)
C.b1t=new B.o(null,null,C.b_p,null,null,null,A.n)
C.acu=new B.v(0.9490196078431372,0.06666666666666667,0.07450980392156863,0.09411764705882353,A.t)
C.b8O=new B.v(1,0.16470588235294117,0.16470588235294117,0.17647058823529413,A.t)
C.b8R=new B.v(1,0.00784313725490196,0.01568627450980392,0.03529411764705882,A.t)
C.acW=new B.v(1,0.6588235294117647,0.6235294117647059,0.5647058823529412,A.t)
C.Aw=new B.v(1,0.12156862745098039,0.07058823529411765,0.03529411764705882,A.t)
C.Wd=new B.v(1,0.24705882352941178,0.5607843137254902,0.30196078431372547,A.t)
C.Es=new B.v(1,0.7215686274509804,0.6980392156862745,0.6549019607843137,A.t)
C.adA=new B.v(1,0.8784313725490196,0.6745098039215687,0.4117647058823529,A.t)
C.adR=new B.v(1,0.00784313725490196,0.011764705882352941,0.0392156862745098,A.t)
C.bdJ=new B.v(1,0.24705882352941178,0.11372549019607843,0.043137254901960784,A.t)
C.EM=new B.v(1,0.06666666666666667,0.0784313725490196,0.09411764705882353,A.t)
C.bfZ=new B.v(1,0.011764705882352941,0.023529411764705882,0.09019607843137255,A.t)
C.AJ=new B.v(1,0.09019607843137255,0.09019607843137255,0.10196078431372549,A.t)
C.AL=new B.v(1,0.054901960784313725,0.07058823529411765,0.09411764705882353,A.t)
C.bhD=new B.v(1,0.2901960784313726,0.26666666666666666,0.23529411764705882,A.t)
C.jB=new B.v(1,0.043137254901960784,0.12156862745098039,0.29411764705882354,A.t)
C.lj=new B.v(1,0.09019607843137255,0.09019607843137255,0.10980392156862745,A.t)
C.bjC=new B.v(1,0.1843137254901961,0.43529411764705883,0.23137254901960785,A.t)
C.bjF=new B.v(1,0.08627450980392157,0.09411764705882353,0.10980392156862745,A.t)
C.bka=new B.v(1,0.24705882352941178,0.3843137254901961,0.07058823529411765,A.t)
C.fo=new B.v(1,0.9607843137254902,0.7568627450980392,0.29411764705882354,A.t)
C.Xz=new B.v(1,1,0.41568627450980394,0,A.t)
C.n1=new B.v(1,0.10588235294117647,0.10588235294117647,0.12156862745098039,A.t)
C.oK=new B.v(1,0.5529411764705883,0.3333333333333333,0.1411764705882353,A.t)
C.XG=new B.v(1,1,0.9529411764705882,0.6274509803921569,A.t)
C.agn=new B.v(1,0.8392156862745098,0.7254901960784313,0.5490196078431373,A.t)
C.bmZ=new B.v(1,0.10196078431372549,0.09019607843137255,0.0784313725490196,A.t)
C.brM=new B.Q(0,0,0,1)
C.tG=new B.Q(0,0,7,0)
C.bsB=new B.Q(10,10,10,0)
C.YI=new B.Q(10,6,10,8)
C.ahK=new B.Q(14,10,10,10)
C.ale=new B.a1(62970,"MaterialIcons",!1)
C.amb=new B.a1(983316,"MaterialIcons",!1)
C.u8=new B.a1(983617,"MaterialIcons",!1)
C.bMH=new B.ae(A.Gu,13,A.ad,null,null,null)
C.bQN=new B.ae(A.ff,13,A.ad,null,null,null)
C.bIk=new B.a1(983768,"MaterialIcons",!1)
C.bRo=new B.ae(C.bIk,13,A.c,null,null,null)
C.cDS=x([A.aR,A.jj,A.qR],y.O)
C.bWS=new B.a8(A.b2,A.b6,A.x,C.cDS,null,null)
C.bWY=new B.a8(A.b2,A.b6,A.x,I.Q1,null,null)
C.cYx=x([A.fa,A.dN,A.cY],y.O)
C.bX9=new B.a8(A.b2,A.b6,A.x,C.cYx,null,null)
C.cWN=x([A.dO,A.aw],y.O)
C.bXQ=new B.a8(A.b2,A.b6,A.x,C.cWN,null,null)
C.L_=new B.v(1,0.11764705882352941,0.30980392156862746,0.6392156862745098,A.t)
C.cDo=x([C.jB,C.L_,A.aE,A.bL],y.O)
C.dch=x([0,0.42,0.8,1],y.n)
C.bY4=new B.a8(A.b2,A.b6,A.x,C.cDo,C.dch,null)
C.djG=x([A.bO,A.c,A.bK],y.O)
C.bY6=new B.a8(A.a3,A.a8,A.x,C.djG,null,null)
C.dkf=x([A.hh,A.fT],y.O)
C.bYW=new B.a8(A.b2,A.b6,A.x,C.dkf,null,null)
C.dbx=x([A.dr,A.oJ],y.O)
C.bZ2=new B.a8(A.b2,A.b6,A.x,C.dbx,null,null)
C.c_1=new B.a8(A.b2,A.b6,A.x,F.auX,null,null)
C.d6R=x([A.aL,A.ak],y.O)
C.c_q=new B.a8(A.b2,A.b6,A.x,C.d6R,null,null)
C.c0l=x(["Add every person","Link mums, dads, kids","Keep it for ever"],y.s)
C.api=x([1],y.n)
C.cd1=x([1,2,3],y.n)
C.asW=x([1,-1],y.n)
C.SG=new B.z(2,3)
C.SH=new B.z(3,4)
C.ck6=x([A.lX,A.yf],B.ax("O<a1>"))
C.cki=x([-0.05,0.05],y.n)
C.e89=new B.x(26,-8)
C.e8C=new B.x(52,0)
C.e88=new B.x(26,8)
C.ckG=x([A.J,C.e89,C.e8C,C.e88],B.ax("O<x>"))
C.auK=x([A.c5,A.aR,A.dO,A.bn,A.cY],y.O)
C.cCJ=x([1,2,3,4,5,6,7],y.n)
C.eLf=new B.bk(-0.2,0.46,0.12)
C.eIZ=new B.bk(0.2,0.46,0.12)
C.eJG=new B.bk(0,0.52,0.15)
C.eIi=new B.bk(0,0.7,0.1)
C.cE5=x([C.eLf,C.eIZ,C.eJG,C.eIi],y.C)
C.blS=new B.v(1,0.6627450980392157,0.4392156862745098,0.22745098039215686,A.t)
C.bjW=new B.v(1,0.3607843137254902,0.22745098039215686,0.12941176470588237,A.t)
C.bcC=new B.v(1,0.47843137254901963,0.2901960784313726,0.1568627450980392,A.t)
C.cHX=x([C.oK,A.xx,C.blS,C.bjW,C.oK,C.bcC],y.O)
C.cPJ=x([A.f1,A.bL,A.LE,A.ek],y.O)
C.cQX=x([1,2.76,5.4,8.93,13.3],y.n)
C.avI=x([A.cY,A.bH,A.c5,A.bn],y.O)
C.cS6=x([1,0.6,0.38,0.22,0.12],y.n)
C.equ=new B.z("Chairs",120)
C.eqx=new B.z("Cloth",80)
C.eqP=new B.z("Delivery",25)
C.aw2=x([C.equ,C.eqx,C.eqP],B.ax("O<+(m,H)>"))
C.cWl=x([1,0.7,0.45,0.28,0.16,0.1,0.06],y.n)
C.cWm=x([1,0.55,0.32,0.2,0.12,0.07],y.n)
C.d_l=x([A.i0,A.kS,A.bL,A.iH,A.xn,A.px],y.O)
C.e27=new D.xI("NGMY Tree Story","A family grows, one branch at a time")
C.e22=new D.xI("Coin Hero","A little coin saves up and wins the day")
C.e2a=new D.xI("Space Voyage","The NGMY rocket explores the stars")
C.e21=new D.xI("Ocean Friends","Fish, bubbles and a friendly whale")
C.e23=new D.xI("Rainy Village","Storm clouds, then a rainbow")
C.e25=new D.xI("Spark Adventure","Follow a spark round a circuit")
C.e24=new D.xI("Fireworks Night","Colour bursts over the city")
C.e29=new D.xI("Little Train","A train rolls past the hills")
C.e26=new D.xI("Robot Disco","A robot dances to the beat")
C.e28=new D.xI("Garden Time","Flowers grow and butterflies fly")
C.Q7=x([C.e27,C.e22,C.e2a,C.e21,C.e23,C.e25,C.e24,C.e29,C.e26,C.e28],B.ax("O<xI>"))
C.d_v=x([1,0.6,0.45,0.3,0.22,0.15],y.n)
C.awI=x([A.c5,A.bH,A.aw,A.by,A.cY],y.O)
C.d0F=x([1,2,3,4,5,6],y.n)
C.d28=x([A.hh,A.oJ],y.O)
C.d2a=x([A.bi,A.aE,A.cS],y.O)
C.dtU=new D.vT("NGMY Ads","\ud83d\udce2","Every NGMY promotion, as cartoons",A.c5,-1)
C.dtS=new D.vT("Civic Registry","\ud83e\udeaa","Enroll your family in your community",A.d0,0)
C.dtV=new D.vT("Jobs","\ud83d\udcbc","Find work and get hired",A.aE,1)
C.dtX=new D.vT("NGMY Store","\ud83d\udecd\ufe0f","African food and traditions",A.fz,2)
C.dtY=new D.vT("Kiswahili","\ud83d\udde3\ufe0f","Learn Swahili and English",A.bR,3)
C.dtW=new D.vT("Doc Scanner","\ud83d\udcc4","Scan, save and share",A.c8,4)
C.dtT=new D.vT("Invoices","\ud83e\uddfe","Professional invoices",A.bA,5)
C.dtR=new D.vT("Calendar","\ud83d\udcc5","This month, today lit up",A.aw,-2)
C.kb=x([C.dtU,C.dtS,C.dtV,C.dtX,C.dtY,C.dtW,C.dtT,C.dtR],B.ax("O<vT>"))
C.ext=new B.z("Jambo! Habari yako?","Nzuri, asante!")
C.eqY=new B.z("Jina lako nani?","Jina langu ni Amina.")
C.erG=new B.z("Karibu nyumbani!","Asante sana!")
C.exs=new B.z("Naenda shule leo.","I am going to school.")
C.eyw=new B.z("Ninapenda kujifunza!","I love to learn!")
C.eHs=new B.z("Maji, tafadhali.","Water, please.")
C.evt=new B.z("Rafiki yangu mpendwa","My dear friend")
C.eA2=new B.z("Tuonane kesho!","See you tomorrow!")
C.eAV=new B.z("Pole sana, rafiki.","I am so sorry, friend.")
C.exr=new B.z("Hongera! Umefaulu!","Congratulations! You passed!")
C.esT=new B.z("Mimi ni mwanafunzi.","I am a student.")
C.enx=new B.z("Chakula kitamu sana!","The food is so delicious!")
C.eH2=new B.z("Safari njema!","Have a good trip!")
C.ejI=new B.z("Unaongea Kiswahili vizuri!","You speak Swahili well!")
C.awV=x([C.ext,C.eqY,C.erG,C.exs,C.eyw,C.eHs,C.evt,C.eA2,C.eAV,C.exr,C.esT,C.enx,C.eH2,C.ejI],B.ax("O<+(m,m)>"))
C.eKi=new B.bk(-0.3,0.32,0.2)
C.eIo=new B.bk(-0.08,0.17,0.22)
C.eIp=new B.bk(0.14,0.14,0.2)
C.eJO=new B.bk(0.34,0.3,0.2)
C.eLG=new B.bk(0,0.32,0.26)
C.eJx=new B.bk(-0.42,0.46,0.15)
C.eLB=new B.bk(0.42,0.46,0.15)
C.eKv=new B.bk(0,0.07,0.15)
C.awW=x([C.eKi,C.eIo,C.eIp,C.eJO,C.eLG,C.eJx,C.eLB,C.eKv],y.C)
C.h2i=new D.wo("NGMY Civic Registry","Enroll your family. Stay counted and helped together.",A.d5,A.aR)
C.h2w=new D.wo("NGMY Jobs","Find work. Get hired. Get paid.",A.d8,A.aT)
C.h2t=new D.wo("NGMY Store","African food and traditions. Support our Congolese and African community.",A.k2,A.bH)
C.h2o=new D.wo("Kiswahili School","Learn Swahili and English, step by step.",A.cN,A.n0)
C.h2l=new D.wo("Document Scanner","Scan, save and share your papers.",A.pL,A.h4)
C.h2j=new D.wo("Invoice Creator","Make professional invoices in minutes.",A.ta,A.nF)
C.h2f=new D.wo("Family Book and Tree","Write your family story. Grow your tree.",A.j_,A.KN)
C.h2h=new D.wo("NGMY Wallet","Save, send and earn coins.",A.pF,A.dO)
C.h2k=new D.wo("Vault Games","Play, win and learn.",A.dL,A.ba)
C.h2u=new D.wo("Electronics Lab","Build real circuits and learn.",A.f3,A.b_)
C.h2p=new D.wo("NGMY Helper and Advisors","Friendly help, any time.",A.lN,A.cY)
C.d5G=x([C.h2i,C.h2w,C.h2t,C.h2o,C.h2l,C.h2j,C.h2f,C.h2h,C.h2k,C.h2u,C.h2p],B.ax("O<wo>"))
C.dby=x([A.dL,A.fa],y.O)
C.dc0=x(["For you","Apps","Library"],y.s)
C.axR=x([A.bx,A.bH,A.cS,A.au],y.O)
C.axW=x([-16,16],y.n)
C.js=x([-1,1],y.n)
C.QK=x([-22,22],y.n)
C.a3t=x([-24,24],y.n)
C.a3v=x([-5,5],y.n)
C.ay1=x([-8,8],y.n)
C.df4=x([A.aJ,A.ak],y.O)
C.df8=x([1,2,3,4,6,8],y.n)
C.dg_=x([1,0.5,0.33,0.25,0.2,0.16,0.14,0.12],y.n)
C.b3o=new B.ac(0,A.G,A.aW,A.dn,14)
C.dhs=x([C.b3o],y.V)
C.dht=x([A.dN,A.dL,A.aF,A.cN,A.aE,A.bx],y.O)
C.dhI=x([1,2,3,4,5,6,7,8],y.n)
C.dja=x([A.aw,A.c9,A.bH,A.bc,A.d0,A.b5],y.O)
C.dk8=x(["M","T","W","T","F","S","S"],y.s)
C.dlm=x([A.c,A.nI],y.O)
C.dm4=x([1,0.18,0.06],y.n)
C.e5A={"SPARK PAINTER":0,"MANDALA MAKER":1,"TITLE ANIMATOR":2,"PALETTE LAB":3,"GRAVITY TOY":4,"FIREWORK DESIGNER":5,"CIRCUIT LAB":6,"PERIODIC TABLE":7,"BODY EXPLORER":8,"SPIN THE WHEEL":9,"FOCUS TIMER":10,"MEMORY MATCH":11,"LUCKY POCKET":12,"ELECTRONICS LAB":13,"CONSTRUCTION LAB":14,"AI INVENTOR":15,"MAGNET LAB":16,"RADIO LAB":17,"POWER PLANT":18,"POWER GRID":19,"INTERNET JOURNEY":20,"ROBOT CODER":21,"BUG SMASHER":22,"ROCKET LANDER":23,"DATA SNAKE":24,"BINARY 2048":25,"SIGNAL BREAKER":26,"PASSWORD LAB":27,"WAVE LAB":28,"BUG HUNT":29,"OPTICS LAB":30,"ATOM BUILDER":31,"PIXEL TV":32}
C.aE3=new B.bt(C.e5A,["sparkle","sparkle","whoosh","click","bounce","pop","tech","lab","organic","click","tech","bubble","click","tech","tech","tech","tech","tech","tech","tech","tech","tech","pop","space","bubble","click","zap","click","tech","click","sparkle","lab","tech"],B.ax("bt<m,m>"))
C.acB=new B.v(1,0.16862745098039217,0.1843137254901961,0.21176470588235294,A.t)
C.drv=new B.hC(A.G,1.2)
C.ckK=x([A.f1,A.ey,A.ku],y.O)
C.eiJ=new B.c_(G.wX,0.5,A.x,null,0,C.ckK,null,null)
C.cAH=x([A.lO,A.mT],y.O)
C.eiL=new B.c_(F.aaf,0.5,A.x,null,0,C.cAH,null,null)
C.bRT=new B.ae(A.ff,11,A.ad,null,null,null)
C.fdt=new B.G(!0,A.aQ,null,null,null,null,9,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.fA5=new B.y("Search",null,C.fdt,null,null,null,null,null,null,null,null,null)
C.cF5=x([C.bRT,A.qq,C.fA5],y.p)
C.eQr=new B.ck(A.aN,A.e,A.j,A.m,null,A.p,null,0,C.cF5,null)
C.eWW=new B.hP(3,5,5,1.35,null)
C.blN=new B.v(1,0.9450980392156862,0.9098039215686274,0.8470588235294118,A.t)
C.f3l=new B.G(!0,C.blN,null,"serif",null,null,15,A.k6,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.faM=new B.G(!0,A.ad,null,null,null,null,9.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.fbn=new B.G(!0,A.aQ,null,null,null,null,9.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.TS=new B.G(!0,A.ad,null,null,null,null,12.5,null,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.aQY=new B.G(!0,A.ad,null,null,null,null,10,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.fft=new B.G(!0,A.c,null,null,null,null,8.5,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.DC=new B.G(!0,A.ad,null,null,null,null,12.5,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.fgW=new B.G(!0,A.ad,null,null,null,null,8.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.fhe=new B.G(!0,C.acW,null,null,null,null,8.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.f8f=new B.G(!0,A.aA,null,null,null,null,9.5,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.fjs=new B.y("NGMY Apps",null,C.f8f,null,null,null,null,null,null,null,null,null)
C.a7Y=new B.G(!0,A.aA,null,null,null,null,12.5,null,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.f4Y=new B.G(!0,C.tg,null,null,null,null,8,A.a6,null,3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.fmz=new B.y("BANG & OLUFSEN",null,C.f4Y,null,null,null,null,null,null,null,null,null)
C.faw=new B.G(!0,A.w,null,null,null,null,9,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.fn0=new B.y("Open",null,C.faw,null,null,null,null,null,null,null,null,null)
C.fq7=new B.y("Home",null,C.aQY,null,null,null,null,null,null,null,null,null)
C.fr8=new B.y("SAMSUNG",null,A.aQF,null,null,null,null,null,null,null,null,null)
C.fx8=new B.y("LG",null,A.wB,null,null,null,null,null,null,null,null,null)
C.fD4=new B.y("tv",null,A.qu,null,null,null,null,null,null,null,null,null)
C.f89=new B.G(!0,C.tg,null,null,null,null,8.5,null,null,2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.fFa=new B.y("OPEN",null,C.f89,null,null,null,null,null,null,null,null,null)})();(function staticFields(){$.hFT=B.U(B.ax("m"),B.ax("dI"))
$.cfE=B.a([],B.ax("O<ai6>"))
$.haa=0
$.art="music"})()};
(a=>{a["P5R5wZ2ACCaX755o7ikOR2gaBxg="]=a.current})($__dart_deferred_initializers__);