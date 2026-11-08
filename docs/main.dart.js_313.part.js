((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,A,G,I,K,L,M,H,N,D={
r_(d,e,f,g,h,i){var x=new D.frk(e,h,!0),w=x.$1(g),v=w.b.c
if(v>i&&v>0)w=x.$1(Math.max(2,g*i/v))
x=w.b
v=x.c
x=x.a.c
w.a5(d,f.aF(0,new B.t(v/2,x.gbc(x)/2)))},
agd(d,e,f,g,h,i){var x,w,v,u,t,s,r,q=null
if(h<=0)return
x=d.a
J.bq(x.save())
x.translate(e.a,e.b)
d.bX(0,A.k.E(A.lo.aw(0,A.k.E(h,0,1)),0.01,1.3))
w=B.fS(q,q,q,q,B.cX(q,q,q,q,q,q,q,q,q,B.l(q,q,A.au,q,q,q,q,q,q,q,q,g,q,q,A.u,q,q,!0,q,q,q,q,q,q,q,q),f),A.a6,A.c5,q,A.dP,A.c4)
w.eI()
v=w.b
u=v.c
v=v.a.c
t=g*0.8
s=B.bz(B.bN(A.J,v.gbc(v)+g*0.7,u+g*1.1),new B.aQ(t,t))
t=$.V()
u=B.K()
u.r=i.gp(0)
d.aD(s,u)
t=new B.aI(t.r,A.ai,q,q,B.a([],y.v))
u=-g
v=s.d
r=v-1
t.D(new B.b0(u*0.3,r))
t.D(new B.ap(u*0.7,v+g*0.6))
t.D(new B.ap(g*0.2,r))
t.D(new B.bv())
r=B.K()
r.r=i.gp(0)
d.aJ(t,r)
r=w.b
t=r.c
r=r.a.c
w.a5(d,new B.t(-t/2,-r.gbc(r)/2))
x.restore()},
h0a(d,e,f,g){var x,w=A.k.E(Math.abs(Math.cos(g)),0.15,1),v=f*2,u=v*w,t=B.bN(e,v,u)
$.V()
x=B.K()
x.r=A.bI.gp(0)
d.dX(t,x)
d.dX(B.bN(e,v,u),E.yB(A.pO,f*0.18))
if(w>0.5)D.r_(d,"$",e,f*1.2,A.pO,9999)},
hTD(d,e,f,g){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=new B.eb()
k.d5(4)
for(x=e.a,w=f-g,v=e.b,u=d.a,t=f*3,s=v*0.025,r=v*0.012,q=0;q<18;++q){p=k.aj()
o=A.k.F(w*(40+k.aj()*60)+k.aj()*v,v)
J.bq(u.save())
u.translate(p*x,o)
u.rotate((t+q)*180/3.141592653589793,0,0)
p=B.bN(A.J,r,s)
n=C.avL[A.o.F(q,5)]
$.V()
m=new B.aq(A.U,A.S,A.Y,A.Z,A.W)
m.r=n.gp(0)
l=m.H()
u.drawRect(B.bQ(p),l)
l.delete()
u.restore()}},
i2w(d,e,f,g){switch(A.o.F(f,11)){case 0:D.hTf(d,e,g)
break
case 1:D.hWg(d,e,g)
break
case 2:D.i0z(d,e,g)
break
case 3:D.i0O(d,e,g)
break
case 4:D.i_I(d,e,g)
break
case 5:D.hVX(d,e,g)
break
case 6:D.hSG(d,e,g)
break
case 7:D.i1z(d,e,g)
break
case 8:D.hUY(d,e,g)
break
case 9:D.hWk(d,e,g)
break
default:D.hVy(d,e,g)}},
hTf(a2,a3,a4){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null,d=a3.a,a0=a3.b,a1=a0*0.94
for(x=a2.a,w=d*0.12,v=d*0.06,u=a0*0.06,t=y.v,s=0;s<6;++s){r=d*(0.04+s*0.17)
q=a0*(0.18+0.08*A.o.F(s,3))
p=a1-q
o=r+w
n=A.c.j(0.2)
m=$.V()
l=new B.aq(A.U,A.S,A.Y,A.Z,A.W)
l.r=n.gp(0)
k=l.H()
x.drawRect(B.bQ(new B.a5(r,p,o,p+q)),k)
k.delete()
l=B.a([],t)
m=new B.aI(m.r,A.ai,e,e,l)
l.push(new B.b0(r-3,p))
l.push(new B.ap(r+v,p-u))
l.push(new B.ap(o+3,p))
l.push(new B.bv())
p=new B.aq(A.U,A.S,A.Y,A.Z,A.W)
p.r=A.c.j(0.3).gp(0)
k=p.H()
p=m.gbB().a.snapshot()
x.drawPath((m.e=new B.cv(p)).a,k)
k.delete()}w=A.w.j(0.18)
$.V()
v=B.K()
v.r=w.gp(0)
a2.aU(new B.a5(0,a1,0+d,a1+(a0-a1)),v)
j=Math.cos(a4*1.6)
i=Math.min(d*0.46,a0*0.95)
h=i*0.62
J.bq(x.save())
v=d*0.58
x.translate(v,a0*0.45)
a2.p_(0,Math.max(0.08,Math.abs(j)),1)
w=h*0.1
g=B.bz(B.bN(A.J,h,i),new B.aQ(w,w))
u=B.K()
t=j>=0
u.sar(new B.a9(A.a3,A.a8,A.x,t?C.dpn:C.dfn,e,e).aA(0,new B.a5(g.a,g.b,g.c,g.d)))
a2.aD(g,u)
a2.aD(g,E.yB(A.d8,2))
if(t){u=-i
t=u*0.28
p=-h
o=p*0.05
n=h*0.22
m=B.K()
m.r=F.mx.gp(0)
a2.ae(new B.t(t,o),n,m)
n=B.bX(new B.t(t,o),n)
o=B.K()
o.r=F.mr.gp(0)
a2.e2(n,3.141592653589793,3.141592653589793,!0,o)
for(u*=0.05,t=p*0.25,o=h*0.07,s=0;s<3;++s){n=t+s*h*0.16
n=B.bz(new B.a5(u,n,u+i*(0.42-s*0.06),n+o),A.hM)
m=new B.aq(A.U,A.S,A.Y,A.Z,A.W)
m.r=A.dt.gp(0)
k=m.H()
x.drawRRect(B.eL(n),k)
k.delete()}D.r_(a2,"COMMUNITY ID",new B.t(0,p*0.4),w,A.d8,i*0.8)}else D.r_(a2,"\u2605 NGMY \u2605",A.J,h*0.16,A.c,i*0.8)
x.restore()
w=a4>2.6
if(w){s=A.k.E((a4-2.6)/0.35,0,1)
J.bq(x.save())
x.translate(v,a0*0.52)
a2.j_(0,-0.25)
a2.bX(0,2.2-1.2*A.ew.aw(0,s))
f=B.bN(A.J,h*0.3,i*0.7)
a2.aD(B.bz(f,A.i2),E.yB(A.cS.j(s),3))
D.r_(a2,"\u2713 REGISTERED",A.J,h*0.13,A.cS.j(s),(f.c-f.a)*0.9)
x.restore()}x=a4*5
v=Math.sin(x)
x=Math.sin(x)
w=w&&a4<4
E.AS(a2,new B.t(d*0.2,a1),a0*0.7,a4,!1,Math.abs(x)*a0*0.015,0,A.cS,F.mx,w,(v+1)/2)
if(a4>3)D.hTD(a2,new B.au(d,a0*0.9),a4,3)},
hWg(a6,a7,a8){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=a7.a,a3=a7.b,a4=a3*0.94,a5=A.w.j(0.2)
$.V()
x=B.K()
x.r=a5.gp(0)
a6.aU(new B.a5(0,a4,0+a2,a4+(a3-a4)),x)
w=a2*0.62
v=a2*0.3
u=a3*0.62
x=a4-u
a5=w+v
t=B.K()
t.r=A.bn.gp(0)
a6.aU(new B.a5(w,x,a5,x+u),t)
for(t=a6.a,s=a8*1.5,r=v*0.2,q=u*0.1,p=0;p<4;++p)for(o=x+u*(0.1+p*0.17),n=o+q,m=0;m<3;++m){l=w+v*(0.12+m*0.3)
k=A.o.F(p+m+A.k.bm(s),3)===0?A.dR:A.aR.j(0.6)
$.V()
j=new B.aq(A.U,A.S,A.Y,A.Z,A.W)
j.r=k.gp(0)
i=j.H()
t.drawRect(B.bQ(new B.a5(l,o,l+r,n)),i)
i.delete()}s=w+v*0.38
r=u*0.16
q=a4-r
$.V()
o=B.K()
o.r=A.h1.gp(0)
a6.aU(new B.a5(s,q,s+v*0.24,q+r),o)
o=x-a3*0.09
r=a3*0.02
o=B.bz(new B.a5(w,o,a5,o+a3*0.08),new B.aQ(r,r))
a5=B.K()
a5.r=A.aE.gp(0)
a6.aD(o,a5)
a5=a3*0.05
o=a3*0.06
D.r_(a6,"JOBS",new B.t(w+v/2,x-a5),o,A.c,9999)
h=A.k.E(a8/2.8,0,1)
x=a2*0.12
g=x+(w+v*0.3-x)*A.dB.aw(0,h)
x=h<1
f=x?Math.abs(Math.sin(a8*12))*a3*0.02:0
s=h>=1
q=s?(Math.sin(a8*6)+1)/2:0
E.AS(a6,new B.t(g,a4),a3*0.6,a8,!1,f,2,A.b5,A.oS,s,q)
if(x){x=B.bz(B.bN(new B.t(g-a3*0.12,a4-a3*0.17-f),a3*0.075,a3*0.1),A.hM)
q=B.K()
q.r=A.h1.gp(0)
a6.aD(x,q)}if(s){x=a8-2.8
D.agd(a6,new B.t(g+a5,a4-a3*0.78),"Hired! \ud83c\udf89",a3*0.07,x/0.4,A.c)
for(a5=x*0.8,x=a4-a3*0.5,s=a3*0.03,q=a8*8,e=0;e<6;++e){d=A.k.F(a5+e*0.17,1)
D.h0a(a6,new B.t(g+Math.sin(e*2.1)*a3*0.2,x-d*a3*0.25),s,q+e)}}a5=a2*0.04
x=a5+v
s=o+a3*0.3
r=B.bz(new B.a5(a5,o,x,s),new B.aQ(r,r))
$.V()
q=B.K()
q.r=A.iq.gp(0)
a6.aD(r,q)
for(x-=a5,r=a5+x*0.08,s-=o,q=x*0.84,n=s*0.24,a5+=x*0.14,x*=0.5,l=s*0.05,e=0;e<3;++e){k=(1-A.k.E((a8-e*0.5)/0.5,0,1))*a2*0.3
j=r+k
a0=e*0.3
a1=o+s*(0.08+a0)
a1=B.bz(new B.a5(j,a1,j+q,a1+n),A.hM)
j=new B.aq(A.U,A.S,A.Y,A.Z,A.W)
j.r=A.c.gp(0)
i=j.H()
t.drawRRect(B.eL(a1),i)
i.delete()
k=a5+k
a0=o+s*(0.14+a0)
a1=new B.aq(A.U,A.S,A.Y,A.Z,A.W)
a1.r=A.bL.gp(0)
i=a1.H()
t.drawRect(B.bQ(new B.a5(k,a0,k+x,a0+l)),i)
i.delete()}},
i0z(a1,a2,a3){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=a2.a,e=a2.b,d=e*0.94,a0=A.h1.j(0.6)
$.V()
x=B.K()
x.r=a0.gp(0)
a1.aU(new B.a5(0,d,0+f,d+(e-d)),x)
w=f*0.3
v=f*0.66
for(a0=v/12,x=e*0.14,u=a0+1,t=x+e*0.12,s=a1.a,r=0;r<12;++r){q=w+a0*r
p=new B.aq(A.U,A.S,A.Y,A.Z,A.W)
p.r=C.ayY[A.o.F(r,4)].gp(0)
o=p.H()
s.drawRect(B.bQ(new B.a5(q,x,q+u,t)),o)
o.delete()}for(u=e*0.2,t=e*0.1,q=u+t,r=0;r<12;++r){p=w+a0*r
n=new B.aq(A.U,A.S,A.Y,A.Z,A.W)
n.r=C.ayY[A.o.F(r,4)].gp(0)
o=n.H()
s.drawArc.apply(s,[B.bQ(new B.a5(p,u,p+a0,q)),0,180,!0,o])
o.delete()}a0=w+4
u=e*0.3
q=u+(d-u)
p=B.K()
p.r=A.h1.gp(0)
a1.aU(new B.a5(a0,u,a0+4,q),p)
p=w+v
a0=p-8
n=B.K()
n.r=A.h1.gp(0)
a1.aU(new B.a5(a0,u,a0+4,q),n)
n=e*0.68
q=n+e*0.26
a0=B.bz(new B.a5(w,n,p,q),A.iC)
u=B.K()
u.r=A.iq.gp(0)
a1.aD(a0,u)
for(a0=p-w,u=a0/6,p=n+2,a0/=12,q=p+(q-n-4),r=0;r<6;++r){m=w+u*r
l=new B.aq(A.U,A.S,A.Y,A.Z,A.W)
l.r=((r&1)===0?A.bx:A.bI).j(0.9).gp(0)
o=l.H()
s.drawRect(B.bQ(new B.a5(m,p,m+a0,q)),o)
o.delete()}a0=w+v*0.2
u=e*0.62
k=new B.t(a0,u)
q=e*0.17
p=e*0.03
m=B.bz(B.bN(k,e*0.11,q),new B.aQ(p,p))
l=B.K()
l.r=A.cp.gp(0)
a1.aD(m,l)
l=-e
q=B.bN(k.a9(0,new B.t(0,l*0.05)),e*0.04,q)
m=B.K()
m.r=A.fu.gp(0)
a1.dX(q,m)
for(q=a3*0.8,l*=0.08,m=e*0.015,r=0;r<3;++r){j=A.k.F(q+r*0.33,1)
i=Math.sin(j*6+r)
h=j*e
g=new B.aq(A.U,A.S,A.Y,A.Z,A.W)
g.r=A.c.j(0.6*(1-j)).gp(0)
o=g.H()
s.drawCircle(a0+i*5,u+(l-h*0.14),m+h*0.02,o)
o.delete()}for(a0=w+v*0.5,q=e*0.018,r=0;r<5;++r){m=B.bN(new B.t(a0,u),x,e*(0.1+r*0.01))
l=new B.aq(A.U,A.S,A.Y,A.Z,A.W)
l.b=A.ac
l.c=q
l.r=A.bI.gp(0)
l.d=A.bG
o=l.H()
s.drawArc.apply(s,[B.bQ(m),(0.4+r*0.1)*57.29577951308232,108.8619810748564,!1,o])
o.delete()}for(a0=e*0.63,x=e*0.032,r=0;r<4;++r){u=A.o.F(r,2)
q=A.o.an(r,2)
m=(r&1)===0?A.ca:A.vC
l=new B.aq(A.U,A.S,A.Y,A.Z,A.W)
l.r=m.gp(0)
o=l.H()
s.drawCircle(w+v*(0.72+0.06*u)+r*e*0.02,a0+q*e*0.035,x,o)
o.delete()}E.AS(a1,new B.t(f*0.14,d),n,a3,!1,0,1,A.bI,G.afj,!0,(Math.sin(a3*5)+1)/2)
for(a0=a3*0.45,x=f*0.16,u=e*0.45,s=e*0.06,r=0;r<5;++r){j=A.k.F(a0+r*0.2,1)
D.r_(a1,"\u2665",new B.t(x+Math.sin(j*5+r)*e*0.08+r*e*0.03,u-j*e*0.4),s,A.aw.j(1-j),9999)}a0=w+v/2
x=e*0.08
p=B.bz(B.bN(new B.t(a0,x),t,v*0.7),new B.aQ(p,p))
$.V()
t=B.K()
t.r=A.au.gp(0)
a1.aD(p,t)
D.r_(a1,"NGMY STORE \xb7 African food",new B.t(a0,x),e*0.05,A.dR,v*0.64)},
i0O(d,e,f){var x,w,v,u,t,s,r,q=e.a,p=e.b,o=p*0.94,n=A.w.j(0.2)
$.V()
x=B.K()
x.r=n.gp(0)
d.aU(new B.a5(0,o,0+q,o+(p-o)),x)
w=A.o.F(A.o.an(Date.now(),6000)*3+A.o.E(A.k.bm(f/2),0,2),14)
v=A.k.F(f,2)
u=v<1
x=p*0.68
n=u?(Math.sin(f*8)+1)/2:0
t=u?Math.abs(Math.sin(f*8))*p*0.01:0
E.AS(d,new B.t(q*0.25,o),x,f,!1,t,2,A.cS,F.mx,u,n)
n=u?0:(Math.sin(f*8)+1)/2
t=u?0:Math.abs(Math.sin(f*8))*p*0.01
E.AS(d,new B.t(q*0.75,o),x,f,!1,t,0,A.bj,C.ael,!u,n)
s=new D.fre(p,q)
n=p*0.15
if(u){x=C.ay0[w].a
D.agd(d,new B.t(q*0.27,n),x,s.$1(x),v/0.25,A.oU)}else{x=C.ay0[w].b
D.agd(d,new B.t(q*0.73,n),x,s.$1(x),(v-1)/0.25,A.eC)}for(n=q*0.5,x=p*0.07,t=f*2,r=0;r<3;++r)D.r_(d,"\u2192",new B.t(n,p*(0.35+r*0.1)),x,A.c.j(0.3+0.5*A.k.F(t+r,1)),9999)},
i_I(a1,a2,a3){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=a2.a,e=a2.b,d=e*0.94,a0=A.w.j(0.2)
$.V()
x=B.K()
x.r=a0.gp(0)
a1.aU(new B.a5(0,d,0+f,d+(e-d)),x)
x=f*0.3
w=B.bN(new B.t(f*0.6,e*0.45),e*0.7,Math.min(x,e*0.55))
a0=B.bz(w,A.iC)
v=B.K()
v.r=A.c.gp(0)
a1.aD(a0,v)
for(a0=w.d,v=w.b,u=a0-v,t=u*0.03,s=a1.a,r=w.a,q=w.c,p=q-r,o=r+p*0.1,n=0;n<9;++n){m=v+u*(0.1+n*0.095)
l=A.o.F(n,3)===2?0.5:0.8
k=new B.aq(A.U,A.S,A.Y,A.Z,A.W)
k.r=A.cr.gp(0)
j=k.H()
s.drawRect(B.bQ(new B.a5(o,m,o+p*l,m+t)),j)
j.delete()}i=A.k.E(a3/3,0,1)
h=v+u*i
if(i<1){a0=r-8
u=h-2
p=a0+(p+16)
t=B.K()
t.r=A.bm.gp(0)
a1.aU(new B.a5(a0,u,p,u+4),t)
t=A.bm.j(0.18)
u=B.K()
u.r=t.gp(0)
a1.aU(new B.a5(a0,v,p,v+(h-v)),u)}else{n=A.k.E((a3-3)/0.4,0,1)
u=A.lo.aw(0,n)
t=B.K()
t.r=A.bx.gp(0)
a1.ae(new B.t(q,v),e*0.08*u,t)
D.r_(a1,"PDF",new B.t(q,v),e*0.045*n,A.c,9999)
v=e*0.06
D.r_(a1,"\u2713 Saved",new B.t(w.gbN().a,a0+v),v,A.c.j(n),9999)}a0=a3*4
v=Math.sin(a0)
E.AS(a1,new B.t(f*0.2,d),e*0.66,a3,!0,Math.abs(Math.sin(a0))*e*0.01,0,A.cC,F.mx,!1,(v+1)/2)
g=B.bN(new B.t(x,e*0.3),e*0.18,e*0.1)
x=e*0.02
x=B.bz(g,new B.aQ(x,x))
v=B.K()
v.r=A.au.gp(0)
a1.aD(x,v)
v=e*0.015
v=B.bz(g.ct(-3),new B.aQ(v,v))
x=A.bm.j(0.35+0.3*Math.sin(a3*6))
a0=B.K()
a0.r=x.gp(0)
a1.aD(v,a0)},
hVX(a6,a7,a8){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=a7.a,a3=a7.b,a4=a3*0.94,a5=A.w.j(0.2)
$.V()
x=B.K()
x.r=a5.gp(0)
a6.aU(new B.a5(0,a4,0+a2,a4+(a3-a4)),x)
w=B.bN(new B.t(a2*0.62,a3*0.47),a3*0.8,Math.min(a2*0.4,a3*0.75))
x=B.bz(w,A.rR)
a5=B.K()
a5.r=A.c.gp(0)
a6.aD(x,a5)
a5=w.a
x=w.c
v=x-a5
u=w.b
t=w.d-u
D.r_(a6,"INVOICE",new B.t(a5+v*0.3,u+t*0.09),t*0.07,A.d8,9999)
for(s=a6.a,r=v*0.08,q=a5+r,p=t*0.045,o=q+v*0.5,n=x-v*0.17,m=t*0.02,l=t*0.06,k=a8-0.5,j=0,i=0;i<3;++i){h=A.k.E((k-i*0.6)/0.4,0,1)
if(h<=0)continue
j+=C.ax5[i].b
g=u+t*(0.24+i*0.14)
J.bq(s.save())
s.translate((1-h)*30,0)
f=A.cr.j(h)
$.V()
e=new B.aq(A.U,A.S,A.Y,A.Z,A.W)
e.r=f.gp(0)
d=e.H()
s.drawRect(B.bQ(new B.a5(q,g,o,g+p)),d)
d.delete()
D.r_(a6,"$"+C.ax5[i].b,new B.t(n,g+m),l,A.au.j(h),9999)
s.restore()}p=u+t*0.7
a6.br(new B.t(q,p),new B.t(x-r,p),E.yB(A.dp,1.4))
D.r_(a6,"TOTAL  $"+j,new B.t(w.gbN().a,u+t*0.78),t*0.075,A.au,v*0.8)
x=a8>2.8
if(x){r=a8-2.8
i=A.k.E(r/0.3,0,1)
J.bq(s.save())
s.translate(w.gbN().a,u+t*0.55)
a6.j_(0,-0.3)
a6.bX(0,2-A.ew.aw(0,i))
a6.aD(B.bz(B.bN(A.J,t*0.17,v*0.6),A.i2),E.yB(A.cS.j(i),3.5))
D.r_(a6,"PAID",A.J,t*0.11,A.cS.j(i),9999)
s.restore()
for(v=r*0.7,a5-=a3*0.05,u=a3*0.7,t=a3*0.03,s=a8*8,a0=0;a0<6;++a0){a1=A.k.F(v+a0*0.17,1)
D.h0a(a6,new B.t(a5+Math.sin(a0*2)*a3*0.1,u-a1*a3*0.5),t,s+a0)}}a5=x?(Math.sin(a8*6)+1)/2:0
E.AS(a6,new B.t(a2*0.2,a4),a3*0.66,a8,!0,0,1,A.bA,A.oS,x,a5)},
hrP(d,e,f,g){var x,w=B.bN(e,f*0.62,f*2.5),v=f*0.31,u=B.bz(w,new B.aQ(v,v))
$.V()
x=B.K()
x.r=A.c.gp(0)
d.aD(u,x)
d.aD(B.bz(w,new B.aQ(v,v)),E.yB(A.bA,f*0.05))
D.r_(d,"\u2665 "+g,e,f*0.4,A.qV,f*2.2)},
yO(d,e,f,g,a0,a1,a2){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
if(a2<=0)return
x=new D.fKg(e,f,g)
w=A.k.dk(22*A.k.E(a2,0,1))
for(v=a1-a0,u=d.a,t=e,s=1;s<=w;++s,t=q){r=Math.min(s/22,A.k.E(a2,0,1))
q=x.$1(r)
$.V()
p=new B.aq(A.U,A.S,A.Y,A.Z,A.W)
p.b=A.ac
o=p.c=a0+v*r
p.r=A.oS.gp(0)
p.d=A.bG
n=p.H()
p=t.a
m=t.b
l=q.a
k=q.b
u.drawLine.apply(u,[p,m,l,k,n])
n.delete()
j=-o*0.18
i=B.ar(A.oS,A.c,0.18)
i.toString
h=new B.aq(A.U,A.S,A.Y,A.Z,A.W)
h.b=A.ac
h.c=o*0.28
h.r=i.gp(0)
h.d=A.bG
n=h.H()
u.drawLine.apply(u,[p+j,m+0,l+j,k+0,n])
n.delete()}},
icA(d,e,f,g){var x,w,v,u,t,s
for(x=g*0.45,w=e.a,v=g*2,u=e.b,t=0;t<7;++t){s=A.k.F(x+t/7,1)
D.r_(d,"\u2665",new B.t(w+Math.sin(t*2.3+v)*f*0.12+(t-3.5)*f*0.03,u-s*f*0.45),f*(0.04+0.02*A.o.F(t,3)),B.ar(A.bA,A.i8,A.o.F(t,2)).j((1-s)*0.9),9999)}},
hSG(b4,b5,b6){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=null,a8=b5.a,a9=b5.b,b0=a9*0.94,b1=A.dY.j(0.7),b2=$.V(),b3=B.K()
b3.r=b1.gp(0)
b4.aU(new B.a5(0,b0,0+a8,b0+(a9-b0)),b3)
x=new D.fea(b6)
w=new D.fe7()
v=Math.min(a8*0.34,a9*0.62)
b3=a8*0.64
b1=v*0.2
u=b0-b1
t=new B.t(b3,u)
s=v*0.5
r=v*0.08
r=B.bz(B.bN(t,s,v*2.15),new B.aQ(r,r))
q=B.K()
q.r=A.hC.gp(0)
b4.aD(r,q)
b2=b2.r
q=y.v
p=new B.aI(b2,A.ai,a7,a7,B.a([],q))
r=u-b1
p.D(new B.b0(b3,r))
o=b3-s
n=v*0.3
m=u-n
l=b3-v
k=v*0.16
j=u-k
p.D(new B.c8(o,m,l,j))
i=u+v*0.14
p.D(new B.ap(l,i))
l=u+v*0.02
k=u+k
p.D(new B.c8(o,l,b3,k))
p.D(new B.bv())
o=B.K()
o.r=A.h0.gp(0)
b4.aJ(p,o)
h=new B.aI(b2,A.ai,a7,a7,B.a([],q))
h.D(new B.b0(b3,r))
s=b3+s
r=b3+v
h.D(new B.c8(s,m,r,j))
h.D(new B.ap(r,i))
h.D(new B.c8(s,l,b3,k))
h.D(new B.bv())
k=B.K()
k.r=A.hQ.gp(0)
b4.aJ(h,k)
for(b2=v*0.85,s=b3-b2,r=u-v*0.06,q=b3-b1,u-=v*0.1,o=b4.a,b1=b3+b1,b2=b3+b2,g=0;g<3;++g){b3=g*v*0.06
m=r+b3
b3=u+b3
l=new B.aq(A.U,A.S,A.Y,A.Z,A.W)
l.b=A.ac
l.c=1.4
l.r=C.ahm.gp(0)
l.d=A.bG
f=l.H()
o.drawLine.apply(o,[s,m,q,b3,f])
f.delete()
l=new B.aq(A.U,A.S,A.Y,A.Z,A.W)
l.b=A.ac
l.c=1.4
l.r=C.ahm.gp(0)
l.d=A.bG
f=l.H()
o.drawLine.apply(o,[b1,b3,b2,m,f])
f.delete()}e=w.$1(x.$2(0.2,1))
b1=t.aF(0,new B.t(0,n))
b2=b6*4
b3=Math.sin(b2)
u=B.K()
u.sar(new B.c0(A.A,0.5,A.x,a7,0,B.a([A.dR.j(0.6*e),A.K],y.O),a7,a7).aA(0,B.bX(t.aF(0,new B.t(0,n)),v*0.7)))
b4.ae(b1,v*(0.5+0.1*b3)*e,u)
d=t.aF(0,new B.t(0,v*0.12))
a0=new D.fe9(t,a9,d)
a1=w.$1(x.$2(0.5,1.1))
a2=w.$1(x.$2(1.3,1.2))
for(b1=b6*2,a3=0;a3<4;++a3){b3=C.cHx[a3]
a4=b3.a
u=a0.$2(a4,b3.b)
s=Math.sin(b1+a4*9)
r=new B.aq(A.U,A.S,A.Y,A.Z,A.W)
r.r=A.cS.j(0.9).gp(0)
f=r.H()
o.drawCircle(u.a,u.b,a9*b3.c*a2+s*1.2,f)
f.delete()}D.yO(b4,d,d.a9(0,new B.t(0,-a9*0.08)),a0.$2(0,0.22),a9*0.05,a9*0.035,a1)
a5=w.$1(x.$2(1.2,0.8))
b1=a9*0.032
b3=a9*0.02
D.yO(b4,a0.$2(0,0.22),a0.$2(-0.06,0.28),a0.$2(-0.2,0.36),b1,b3,a5)
D.yO(b4,a0.$2(0,0.22),a0.$2(0.06,0.28),a0.$2(0.2,0.36),b1,b3,a5)
a6=w.$1(x.$2(2.4,0.7))
D.yO(b4,a0.$2(0,0.22),a0.$2(0,0.4),a0.$2(0,0.57),a9*0.03,a9*0.016,a6)
b3=new D.fe8(x,b4,b6)
b1=a9*0.088
b3.$5(2,"Mama",a0.$2(-0.2,0.36),b1,1.9)
b3.$5(3,"Baba",a0.$2(0.2,0.36),b1,2.4)
b3.$5(4,"Dada",a0.$2(0,0.57),a9*0.08,3)
if(b6>3.6)D.icA(b4,a0.$2(0,0.36),a9,b6-3.6)
b1=a8*0.2
b3=Math.sin(b2)
E.AS(b4,new B.t(b1,b0),a9*0.66,b6,!1,Math.abs(Math.sin(b2))*a9*0.01,2,A.aC,F.mx,b6>3,(b3+1)/2)
D.agd(b4,new B.t(b1,a9*0.1),"My tree!",a9*0.06,x.$2(3,0.4),A.c)},
i1z(d,e,f){var x,w,v,u,t,s,r,q,p,o,n=e.a,m=e.b,l=m*0.94,k=A.w.j(0.2)
$.V()
x=B.K()
x.r=k.gp(0)
d.aU(new B.a5(0,l,0+n,l+(m-l)),x)
w=A.k.bm(A.k.E(f/5.5,0,1)*9)+1
for(v=n*0.62,k=l-m*0.03,x=m*0.26,u=m*0.07,t=d.a,s=0;s<w;++s){r=k-s*m*0.055
q=B.bN(new B.t(v,r),u,x)
p=new B.aq(A.U,A.S,A.Y,A.Z,A.W)
p.r=A.bI.gp(0)
o=p.H()
t.drawOval(B.bQ(q),o)
o.delete()
r=B.bN(new B.t(v,r),u,x)
q=new B.aq(A.U,A.S,A.Y,A.Z,A.W)
q.b=A.ac
q.c=2
q.r=A.pO.gp(0)
q.d=A.bG
o=q.H()
t.drawOval(B.bQ(r),o)
o.delete()}k=m*0.1
D.h0a(d,new B.t(v,k+A.k.F(f*1.6,1)*(l-u-w*m*0.055-k)),m*0.05,f*8)
k=m*0.08
D.r_(d,"$"+w*25,new B.t(v,k),k,A.dR,9999)
k=f*5
u=Math.sin(k)
E.AS(d,new B.t(n*0.25,l),m*0.66,f,!1,Math.abs(Math.sin(k))*m*0.012,1,A.cC,F.mx,!0,(u+1)/2)},
hUY(d,a0,a1){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=a0.a,g=a0.b,f=g*0.94,e=A.w.j(0.2)
$.V()
x=B.K()
x.r=e.gp(0)
d.aU(new B.a5(0,f,0+h,f+(g-f)),x)
for(e=d.a,x=g*0.012,w=g*0.55,v=a1*4,u=a1*2,t=g*0.15,s=g*0.03,r=0;r<3;r=n){q=Math.sin(v+r*1.7)
J.bq(e.save())
e.translate(h*(0.5+0.14*r),w-Math.abs(q)*g*0.3)
e.rotate((u+r)*180/3.141592653589793,0,0)
q=B.bz(B.bN(A.J,t,t),new B.aQ(s,s))
p=new B.aq(A.U,A.S,A.Y,A.Z,A.W)
p.r=A.c.gp(0)
o=p.H()
e.drawRRect(B.eL(q),o)
o.delete()
n=r+1
q=n*2
p=r===0
m=0
for(;;){if(!(m<q-(p?1:0)))break
l=m*2.1
k=Math.cos(l)
l=Math.sin(l)
j=new B.aq(A.U,A.S,A.Y,A.Z,A.W)
j.r=A.bk.gp(0)
o=j.H()
e.drawCircle(k*g*0.04,l*g*0.04,x,o)
o.delete();++m}e.restore()}for(e=a1*0.6,w=g*0.25,v=g*0.06,r=0;r<5;++r){i=A.k.F(e+r*0.2,1)
D.r_(d,"\u2605",new B.t(h*(0.45+r*0.1),w-i*g*0.2),v,A.dR.j(1-i),9999)}e=h*0.22
w=a1*6
v=Math.sin(w)
E.AS(d,new B.t(e,f),g*0.66,a1,!0,Math.abs(Math.sin(w))*g*0.015,0,A.ca,F.mx,!0,(v+1)/2)
v=f-g*0.28
s=B.bz(B.bN(new B.t(e,v),g*0.07,g*0.16),new B.aQ(s,s))
$.V()
w=B.K()
w.r=A.cp.gp(0)
d.aD(s,w)
w=B.K()
w.r=A.aw.gp(0)
d.ae(new B.t(e+g*0.05,v),x,w)},
hWk(d,e,a0){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=e.a,j=e.b,i=j*0.94,h=A.w.j(0.2),g=$.V(),f=B.K()
f.r=h.gp(0)
d.aU(new B.a5(0,i,0+k,i+(j-i)),f)
f=k*0.42
h=j*0.18
x=j*0.08
w=B.bz(new B.a5(f,h,f+k*0.5,h+j*0.5),new B.aQ(x,x))
v=new B.aI(g.r,A.ai,null,null,B.a([],y.v))
v.D(new B.iN(w))
d.aJ(v,E.yB(A.c.j(0.5),4))
u=new B.SQ(new B.tk(B.xi(v),!1,B.a([],y.L))).gI(0)
for(h=a0*0.18,g=u.a,x=u.b,t=g.e,s=j*0.016,r=d.a,q=0;q<10;++q){p=A.k.F(h+q/10,1)
g.ii()
o=t[x].b
o===$&&B.c()
o=o.a.length()
g.ii()
o=t[x].H2(p*o).a
p=new B.aq(A.U,A.S,A.Y,A.Z,A.W)
p.r=A.dR.gp(0)
n=p.H()
r.drawCircle(o.a,o.b,s,n)
n.delete()}m=a0>1.5
h=j*0.43
l=new B.t(k*0.92,h)
if(m){g=A.dR.j(0.4+0.2*Math.sin(a0*8))
x=B.K()
x.r=g.gp(0)
x.z=A.zs
d.ae(l,j*0.2,x)}g=j*0.07
x=m?A.oU:A.bL
t=B.K()
t.r=x.gp(0)
d.ae(l,g,t)
h=B.bz(B.bN(new B.t(f,h),j*0.2,j*0.1),A.iC)
t=B.K()
t.r=A.cS.gp(0)
d.aD(h,t)
D.r_(d,"+",new B.t(f,j*0.36),g,A.c,9999)
h=m?(Math.sin(a0*6)+1)/2:0
f=m?Math.abs(Math.sin(a0*6))*j*0.012:0
E.AS(d,new B.t(k*0.2,i),j*0.68,a0,!1,f,0,A.bP,F.mx,m,h)
if(m)D.agd(d,new B.t(k*0.24,j*0.16),"It works!",g,(a0-1.5)/0.4,A.c)},
hVy(d,a0,a1){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=a0.a,g=a0.b,f=g*0.94,e=A.w.j(0.2)
$.V()
x=B.K()
x.r=e.gp(0)
d.aU(new B.a5(0,f,0+h,f+(g-f)),x)
w=A.k.E((a1-0.3)/0.4,0,1)
v=A.k.E((a1-1.8)/0.4,0,1)
x=g*0.2
e=g*0.065
D.agd(d,new B.t(h*0.3,x),"How do I enroll?",e,w,A.oU)
if(a1>1&&a1<1.8)for(u=h*0.72,t=g*0.38,s=a1*9,r=g*0.015,q=d.a,p=0;p<3;++p){o=Math.sin(s+p)
n=new B.aq(A.U,A.S,A.Y,A.Z,A.W)
n.r=A.c.gp(0)
m=n.H()
q.drawCircle(u+p*g*0.05,t-Math.abs(o)*g*0.02,r,m)
m.delete()}D.agd(d,new B.t(h*0.7,g*0.38),"Tap Civic Registry!",e,v,A.eC)
E.AS(d,new B.t(h*0.2,f),g*0.62,a1,!1,0,2,A.aw,F.mx,a1<1,0)
l=h*0.78
k=f-g*0.28
e=g*0.04
x=B.bz(B.bN(new B.t(l,k),g*0.22,x),new B.aQ(e,e))
u=B.K()
u.r=A.aM.gp(0)
d.aD(x,u)
u=g*0.18
x=k-u
e=B.bz(B.bN(new B.t(l,x),g*0.14,u),new B.aQ(e,e))
u=B.K()
u.r=A.cr.gp(0)
d.aD(e,u)
for(e=d.a,u=a1*1.1,t=g*0.02,j=0;j<2;++j){i=F.je[j]
s=A.k.F(u,1)>0.08?A.bc:A.f5
r=new B.aq(A.U,A.S,A.Y,A.Z,A.W)
r.r=s.gp(0)
m=r.H()
e.drawCircle(l+i*g*0.04,x,t,m)
m.delete()}d.br(new B.t(l,k-g*0.25),new B.t(l,k-g*0.3),E.yB(A.ae,3))
e=B.K()
e.r=A.aw.gp(0)
d.ae(new B.t(l,k-g*0.31),g*0.015,e)},
frk:function frk(d,e,f){this.a=d
this.b=e
this.c=f},
fre:function fre(d,e){this.a=d
this.b=e},
fKg:function fKg(d,e,f){this.a=d
this.b=e
this.c=f},
fea:function fea(d){this.a=d},
fe7:function fe7(){},
fe9:function fe9(d,e,f){this.a=d
this.b=e
this.c=f},
fe8:function fe8(d,e,f){this.a=d
this.b=e
this.c=f},
aO6(d,e,f,g,h,i,j,k){var x=new D.fiD(e,h,i,k),w=x.$1(g),v=w.b.c
if(v>j&&v>0)w=x.$1(Math.max(2,g*j/v))
x=w.b
v=x.c
x=x.a.c
w.a5(d,f.aF(0,new B.t(v/2,x.gbc(x)/2)))},
Lo(d,e,f,a0){var x,w,v,u,t,s,r,q,p,o,n,m=A.o.F(a0==null?A.k.bm(f/6):a0,11),l=A.k.F(f,6),k=C.d9p[m],j=e.a,i=e.b,h=0+j,g=0+i
$.V()
x=B.K()
x.sar(new B.a9(A.ay,A.aD,A.x,B.a([k.c,k.d],y.O),null,null).aA(0,new B.a5(0,0,h,g)))
d.aU(new B.a5(0,0,h,g),x)
w=i*(j>=i?0.7:0.6)
g=d.a
J.bq(g.save())
g.clipRect(B.bQ(new B.a5(0,0,h,0+w)),$.nc()[1],!0)
D.i2w(d,new B.au(j,w),m,l)
g.restore()
v=i-w
x=A.w.j(0.3)
u=B.K()
u.r=x.gp(0)
d.aU(new B.a5(0,w,h,w+v),u)
t=A.cu.aw(0,A.k.E((l-0.2)/0.5,0,1))
J.bq(g.save())
g.translate((1-t)*j*0.25,0)
u=j/2
h=j*0.94
D.aO6(d,k.a,new B.t(u,w+v*0.3),v*0.36,A.c.j(t),!0,h,0)
D.aO6(d,k.b,new B.t(u,w+v*0.64),v*0.2,A.c.j(0.92*t),!1,h,0)
g.restore()
for(h=i*0.965,x=i*0.009,s=i*0.004,r=0;r<11;++r){q=r===m
p=q?s:0
o=new B.aq(A.U,A.S,A.Y,A.Z,A.W)
o.r=A.c.j(q?0.95:0.35).gp(0)
n=o.H()
g.drawCircle(u+(r-5)*i*0.035,h,x+p,n)
n.delete()}h=j-i*0.07
g=i*0.06
D.aO6(d,"AD",new B.t(h,g),i*0.045,A.c.j(0.85),!0,9999,1)
x=i*0.02
x=B.bz(B.bN(new B.t(h,g),i*0.065,i*0.1),new B.aQ(x,x))
g=B.K()
g.b=A.ac
g.c=1
g.r=A.ae.gp(0)
g.d=A.bG
d.aD(x,g)},
RI(d,e,f,g){var x,w=d.a
J.bq(w.save())
w.clipRect(B.bQ(new B.a5(0,0,0+e.a,0+e.b)),$.nc()[1],!0)
x=C.ki[A.o.F(f,8)].e
if(x===-2)D.hSP(d,e,g)
else if(x===-1)D.Lo(d,e,g,null)
else D.Lo(d,e,g,x)
w.restore()},
hSP(d,a0,a1){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=a0.a,h=a0.b,g=new B.U(Date.now(),0,!1),f=0+i,e=0+h
$.V()
x=B.K()
x.sar(C.c_h.aA(0,new B.a5(0,0,f,e)))
d.aU(new B.a5(0,0,f,e),x)
x=B.K()
x.r=A.bx.gp(0)
d.aU(new B.a5(0,0,f,0+h*0.15),x)
D.aO6(d,A.pd[B.bJ(g)-1]+" "+B.bC(g),new B.t(i/2,h*0.075),h*0.08,A.c,!0,i*0.9,0)
w=i/7
for(f=h*0.21,e=h*0.05,v=0;v<7;++v)D.aO6(d,C.do9[v],new B.t(w*(v+0.5),f),e,A.aB,!0,9999,0)
u=B.c3(B.bC(g),B.bJ(g),1,0,0,0,0,0)
t=B.bV(B.c3(B.bC(g),B.bJ(g)+1,0,0,0,0,0,0))
s=B.mH(u)-1
r=h*0.74/A.k.dk((s+t)/7)
for(f=h*0.26,e=a1*3,x=d.a,q=1;q<=t;++q){p=s+q-1
o=w*(A.o.F(p,7)+0.5)
n=f+r*(A.o.an(p,7)+0.5)
if(q===B.bV(g)){m=Math.min(w,r)
l=A.aR.j(0.5+0.2*Math.sin(e))
$.V()
k=new B.aq(A.U,A.S,A.Y,A.Z,A.W)
k.r=l.gp(0)
j=k.H()
x.drawCircle(o,n,m*0.42,j)
j.delete()}m=Math.min(w,r)
l=q===B.bV(g)?A.c:A.ae
D.aO6(d,""+q,new B.t(o,n),m*0.42,l,!0,9999,0)}},
fiD:function fiD(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ws:function ws(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
vX:function vX(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
h4M(d,e,f,g,h,a0){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i=d.a
J.bq(i.save())
x=e.a
w=e.b
v=0+x
u=0+w
i.clipRect(B.bQ(new B.a5(0,0,v,u)),$.nc()[1],!0)
if(h<3){$.V()
t=B.K()
t.r=C.bax.gp(0)
d.aU(new B.a5(0,0,v,u),t)
if(h<0.5)u=h/0.5
else u=h>2.4?(3-h)/0.6:1
s=A.k.E(u,0,1)
u=e.eg(A.J)
t=e.gdB()
r=B.K()
r.sar(new B.c0(A.A,0.5,A.x,j,0,B.a([A.aR.j(0.35*s),A.K],y.O),j,j).aA(0,B.bX(e.eg(A.J),e.gdB()*0.5)))
d.ae(u,t*0.5,r)
D.Gy(d,"NGMY",new B.t(0,w*0.36),w*0.2,A.c.j(s),A.L,w*0.03,x)
D.Gy(d,"T V",new B.t(0,w*0.6),w*0.08,A.aR.j(s),A.L,w*0.05,x)
r=x*0.3
t=w*0.78
u=B.K()
u.r=A.aR.j(s).gp(0)
d.aU(new B.a5(r,t,r+x*0.4*(h/3),t+3),u)}else if(a0>=0)D.RI(d,e,a0,g)
else{q=A.k.E((h-3)/0.5,0,1)
p=A.o.F(f,10)
switch(p){case 0:D.i19(d,e,g)
break
case 1:D.hTr(d,e,g)
break
case 2:D.i0p(d,e,g)
break
case 3:D.hYd(d,e,g)
break
case 4:D.hZu(d,e,g)
break
case 5:D.i0q(d,e,g)
break
case 6:D.hUN(d,e,g)
break
case 7:D.i18(d,e,g)
break
case 8:D.i_h(d,e,g)
break
default:D.hUZ(d,e,g)}t=x-w*0.34
r=w*0.04
o=w*0.03
n=B.bz(new B.a5(t,r,t+w*0.3,r+w*0.1),new B.aQ(o,o))
$.V()
o=B.K()
o.r=A.w.j(0.55).gp(0)
d.aD(n,o)
D.Gy(d,"NGMY",new B.t(n.a+w*0.025,n.b+w*0.012),w*0.07,A.c,A.bi,1,j)
o=w*0.86
t=B.K()
t.r=A.w.j(0.6).gp(0)
d.aU(new B.a5(0,o,v,o+w*0.14),t)
D.Gy(d,"CH "+(f+1)+"  \xb7  "+C.QC[p].a,new B.t(r,w*0.885),w*0.075,A.c,A.bi,0,x-w*0.08)
if(q<1){t=B.K()
t.r=A.c.j(0.6*(1-q)).gp(0)
d.aU(new B.a5(0,0,v,u),t)}}$.V()
m=B.K()
m.r=A.w.j(0.07).gp(0)
for(l=0;l<w;l+=3){k=m.H()
i.drawRect(B.bQ(new B.a5(0,l,v,l+1)),k)
k.delete()}v=new B.aI($.V().r,A.ai,j,j,B.a([],y.v))
v.D(new B.b0(0,0))
v.D(new B.ap(x*0.45,0))
v.D(new B.ap(0,w*0.5))
v.D(new B.bv())
w=B.K()
w.r=A.c.j(0.04).gp(0)
d.aJ(v,w)
i.restore()},
Gy(d,e,f,g,h,i,j,k){var x=null,w=B.fS(x,x,1,x,B.cX(x,x,x,x,x,x,x,x,x,B.l(x,x,h,x,x,x,x,x,x,x,x,g,x,x,A.u,x,x,!0,x,j,x,x,x,x,x,x),e),i,A.c5,x,A.dP,A.c4),v=k==null
w.qR(v?9999:k)
w.a5(d,f.a9(0,new B.t(i===A.L&&!v?(k-w.b.c)/2:0,0)))},
aO1(d,e,f,g,h,i,j){var x=new D.fgr(e,h,i,j),w=x.$1(g),v=w.b.c,u=f.c-f.a
if(v>u&&v>0)w=x.$1(g*u/v)
x=f.gbN()
v=w.b
u=v.c
v=v.a.c
w.a5(d,x.aF(0,new B.t(u/2,v.gbc(v)/2)))},
i19(d5,d6,d7){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5=null,c6=d6.a,c7=d6.b,c8=A.k.F(d7,14),c9=new D.frE(c8),d0=new D.frA(),d1=0+c6,d2=0+c7,d3=$.V(),d4=B.K()
d4.sar(C.c0p.aA(0,new B.a5(0,0,d1,d2)))
d5.aU(new B.a5(0,0,d1,d2),d4)
x=c6*0.34
w=new D.frD(x,c7)
v=w.$2(0,0.5)
d4=c7*0.75
u=B.K()
u.sar(new B.c0(A.A,0.5,A.x,c5,0,B.a([A.bM.j(0.55),A.K],y.O),c5,c5).aA(0,B.bX(v,d4)))
d5.ae(v,d4,u)
t=new B.eb()
t.d5(11)
for(d4=d7*2,u=d5.a,s=0;s<26;++s){r=t.aj()
q=t.aj()
p=t.aj()
o=new B.aq(A.U,A.S,A.Y,A.Z,A.W)
o.r=A.c.j(0.35+0.4*Math.sin(d4+s)).gp(0)
n=o.H()
u.drawCircle(r*c6,q*c7*0.45,0.6+p*1.1,n)
n.delete()}for(r=y.v,m=0;m<2;++m){q=B.a([],r)
l=new B.aI(d3.r,A.ai,c5,c5,q)
q.push(new B.b0(0,c7))
for(d3=m*2,p=m===0,k=0;k<=c6;k+=6){o=p?0.78:0.82
o=new B.ap(k,c7*o+Math.sin(k/(p?70:50)+d3)*c7*0.02)
q.push(o)
j=l.f
if(j!=null)o.by(j)
o=l.e
if(o!=null)o.a.delete()
l.e=null}d3=new B.ap(c6,c7)
q.push(d3)
q=l.f
if(q!=null)d3.by(q)
d3=l.e
if(d3!=null)d3.a.delete()
l.e=null
d3=$.V()
q=new B.aq(A.U,A.S,A.Y,A.Z,A.W)
q.r=(p?C.WO:C.bm9).gp(0)
n=q.H()
q=l.e
u.drawPath((q==null?l.e=new B.cv(l.gbB().a.snapshot()):q).a,n)
n.delete()}i=w.$2(0,0.81)
h=d0.$1(c9.$2(0.2,1.6))
g=d0.$1(c9.$2(2.4,2.6))
for(d3=d7*1.4,f=0;f<8;++f){r=C.ay1[f]
e=r.a
d=r.b
a0=Math.sin(d3+e*7)*c7*0.006
q=w.$2(e,d)
p=q.a
q=q.b
r=c7*r.c
o=new B.aq(A.U,A.S,A.Y,A.Z,A.W)
o.r=A.hc.gp(0)
n=o.H()
u.drawCircle(p+a0,q+0,r*g,n)
n.delete()
q=w.$2(e,d-0.015)
p=q.a
q=q.b
o=new B.aq(A.U,A.S,A.Y,A.Z,A.W)
o.r=A.eh.gp(0)
n=o.H()
u.drawCircle(p+a0,q+0,r*0.82*g,n)
n.delete()}for(d3=c7*0.01,r=i.a,q=i.b,p=q+d3,o=c7*0.015,q+=o,j=c7*0.04,f=0;f<2;++f){a1=F.je[f]*c7
D.yO(d5,i,new B.t(r+a1*0.04,p),new B.t(r+a1*0.12,q),j,d3,h)}r=c7*0.085
D.yO(d5,i,w.$2(0.02,0.7),w.$2(0,0.6),r,c7*0.055,h)
a2=d0.$1(c9.$2(1.8,1.6))
q=c7*0.05
p=c7*0.026
D.yO(d5,w.$2(0,0.6),w.$2(-0.1,0.55),w.$2(-0.34,0.44),q,p,a2)
D.yO(d5,w.$2(0,0.6),w.$2(0.1,0.55),w.$2(0.34,0.44),q,p,a2)
a3=d0.$1(c9.$2(3.2,1.3))
p=c7*0.024
a1=c7*0.018
D.yO(d5,w.$2(-0.34,0.44),w.$2(-0.17,0.33),w.$2(0,0.39),p,a1,a3)
D.yO(d5,w.$2(0.34,0.44),w.$2(0.17,0.33),w.$2(0,0.39),p,a1,a3)
a4=d0.$1(c9.$2(4.4,1.3))
a1=c7*0.02
p=c7*0.012
D.yO(d5,w.$2(0,0.39),w.$2(-0.1,0.3),w.$2(-0.17,0.2),a1,p,a4)
D.yO(d5,w.$2(0,0.39),w.$2(0.1,0.3),w.$2(0.17,0.2),a1,p,a4)
a1=c7*0.016
D.yO(d5,w.$2(-0.27,0.72),w.$2(-0.14,0.78),w.$2(0,0.7),a1,p,d0.$1(c9.$2(3.6,1)))
D.yO(d5,w.$2(0.27,0.72),w.$2(0.14,0.78),w.$2(0,0.7),a1,p,d0.$1(c9.$2(3.6,1)))
a5=new B.eb()
a5.d5(5)
for(a1=d7*1.6,a6=d7*1.3,a7=g*1.4,a8=c7*0.03,s=0;s<110;++s){a9=C.ay1[A.o.F(s,8)]
b0=a5.aj()*3.141592653589793*2
b1=Math.sqrt(a5.aj())*a9.c*0.95
b2=w.$2(a9.a+Math.cos(b0)*b1,a9.b+Math.sin(b0)*b1)
b3=Math.sin(a1+s)
b4=b2.a
b2=b2.b
J.bq(u.save())
u.translate(b4+b3*c7*0.006,b2+0)
u.rotate((b0+Math.sin(a6+s)*0.2)*180/3.141592653589793,0,0)
b5=A.k.E(a7-A.o.F(s,10)*0.05,0,1)
b2=B.bN(A.J,o*b5,a8*b5)
$.V()
b3=new B.aq(A.U,A.S,A.Y,A.Z,A.W)
b3.r=B.ar(A.be,A.eo,(Math.sin(d4+s)+1)/2).gp(0)
n=b3.H()
u.drawOval(B.bQ(b2),n)
n.delete()
u.restore()}b6=new D.frB(c9,d5,d7,c8)
u=c7*0.075
b6.$5(0,"Bibi",w.$2(-0.27,0.72),u,5)
b6.$5(1,"Babu",w.$2(0.27,0.72),u,5.6)
b6.$5(2,"Mama",w.$2(-0.34,0.44),r,6.4)
b6.$5(3,"Baba",w.$2(0.34,0.44),r,7)
b6.$5(4,"Dada",w.$2(-0.17,0.2),u,8)
b6.$5(5,"Kaka",w.$2(0.17,0.2),u,8.6)
b7=new D.frC(c9,d7,d5)
b7.$3(w.$2(0,0.7),c7*0.028,5.9)
b7.$3(w.$2(0,0.39),c7*0.035,7.4)
if(c8>9.3)for(r=(c8-9.3)*0.4,s=0;s<7;++s){b8=A.k.F(r+s/7,1)
D.Gy(d5,"\u2665",w.$2(Math.sin(s*2.3+d4)*0.3,0.38-b8*0.3),c7*(0.04+0.02*A.o.F(s,3)),A.i8.j((1-b8)*0.85),A.bi,0,c5)}d4=c6*0.655+(1-d0.$1(c9.$2(1,0.9)))*c6*0.4
r=c7*0.1
o=d4+c6*0.315
b9=new B.a5(d4,r,o,r+c7*0.64)
a1=B.bz(b9,new B.aQ(q,q))
$.V()
a6=B.K()
a6.r=C.jJ.j(0.88).gp(0)
d5.aD(a1,a6)
a6=B.bz(b9,new B.aQ(q,q))
a1=B.K()
a1.b=A.ac
a1.c=p
a1.r=F.fv.gp(0)
d5.aD(a6,a1)
c0=new D.frF(b9,c7)
D.aO1(d5,"NGMY",c0.$2(0.13,0.06),c7*0.06,F.fv,!0,p)
D.aO1(d5,"Family",c0.$2(0.2,0.1),r,A.c,!0,0)
D.aO1(d5,"Tree",c0.$2(0.3,0.1),r,A.c,!0,0)
for(s=0;s<3;++s){c1=c9.$2(5.5+s*1.5,0.5)
if(c1<=0)continue
D.aO1(d5,"\u2665 "+C.c3H[s],c0.$2(0.43+s*0.075,0.06).eS(new B.t((1-c1)*30,0)),q,A.i7.j(c1),!1,0)}c2=c9.$2(11,0.5)
if(c2>0){c3=B.bN(new B.t(b9.gbN().a,c7*0.67),u,(o-d4)*0.6*A.ew.aw(0,c2))
d4=B.bz(c3,new B.aQ(j,j))
$.V()
u=B.K()
u.r=F.fv.gp(0)
d5.aD(d4,u)
if(c2>0.8)D.aO1(d5,"ngmy.org",c3.ct(-d3),q,C.jJ,!0,0)}if(c8>11.6){d3=c7*0.82
D.aO1(d5,"Family is everything",new B.a5(0,d3,0+x*2,d3+q),q,A.c.j(A.k.E((c8-11.6)/0.5,0,1)),!0,0)}if(c8<0.4)c4=1-c8/0.4
else c4=c8>13.5?(c8-13.5)/0.5:0
if(c4>0){$.V()
d3=B.K()
d3.r=A.w.j(c4).gp(0)
d5.aU(new B.a5(0,0,d1,d2),d3)}},
hTr(d,e,a0){var x,w,v,u,t,s,r,q,p,o,n,m,l=null,k=e.a,j=e.b,i=0+k,h=0+j,g=$.V(),f=B.K()
f.sar(C.c_t.aA(0,new B.a5(0,0,i,h)))
d.aU(new B.a5(0,0,i,h),f)
x=a0*40
for(i=d.a,h=y.v,w=0;w<2;++w,g=f){f=B.a([],h)
v=new B.aI(g.r,A.ai,l,l,f)
f.push(new B.b0(0,j))
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
f=$.V()
t=new B.aq(A.U,A.S,A.Y,A.Z,A.W)
t.r=(g?A.jo:A.dY).gp(0)
q=t.H()
g=v.e
i.drawPath((g==null?v.e=new B.cv(v.gbB().a.snapshot()):g).a,q)
q.delete()}for(i=j*0.04,h=x*1.3,g=k+60,f=k*0.3,p=0,o=0;o<6;++o){u=A.k.F(o*90-h,g)-30
t=Math.sin(o*1.7+a0)
if(Math.abs(u-f)<12)++p
D.i0u(d,new B.t(u,j*(0.35+0.08*t)),i,A.dR)}n=Math.abs(Math.sin(a0*5))
m=new B.t(f,j*0.72-n*j*0.22)
i=B.bN(new B.t(f,j*0.82),j*0.025,j*0.14*(1-n*0.4))
$.V()
h=B.K()
h.r=A.dp.gp(0)
d.dX(i,h)
h=j*0.085
i=B.K()
i.sar(C.enT.aA(0,B.bX(m,h)))
d.ae(m,h,i)
i=B.K()
i.b=A.ac
i.c=2
i.r=A.pO.gp(0)
d.ae(m,h,i)
i=-j
D.Gy(d,"$",m.a9(0,new B.t(i*0.03,i*0.045)),j*0.09,A.pO,A.bi,0,l)
h=i*0.01
i=m.a9(0,new B.t(i*0.028,h))
g=B.K()
g.r=A.w.gp(0)
d.ae(i,2.4,g)
h=m.a9(0,new B.t(j*0.028,h))
g=B.K()
g.r=A.w.gp(0)
d.ae(h,2.4,g)
D.Gy(d,"Saved: $"+(A.o.F(A.k.bm(a0*3),1000)+p),new B.t(j*0.05,j*0.06),j*0.08,A.c,A.bi,0,l)},
i0u(d,e,f,g){var x,w,v,u,t,s,r,q=$.V(),p=B.a([],y.v),o=new B.aI(q.r,A.ai,null,null,p)
for(q=e.a,x=e.b,w=f*0.45,v=0;v<10;++v){u=-1.5707963267948966+v*3.141592653589793/5
t=(v&1)===0?f:w
s=q+Math.cos(u)*t
r=x+Math.sin(u)*t
if(v===0){s=new B.b0(s,r)
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
o.e=null}}o.D(new B.bv())
$.V()
q=B.K()
q.r=g.gp(0)
d.aJ(o,q)},
i0p(a1,a2,a3){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=a2.a,e=a2.b,d=$.V(),a0=B.K()
a0.r=C.bii.gp(0)
a1.aU(new B.a5(0,0,0+f,0+e),a0)
x=new B.eb()
x.d5(7)
for(a0=a3*3,w=a1.a,v=0;v<60;++v){u=A.k.F(A.k.F(x.aj()*f-a3*(10+x.aj()*60),f)+f,f)
t=x.aj()
s=x.aj()
r=new B.aq(A.U,A.S,A.Y,A.Z,A.W)
r.r=A.c.j(0.5+0.5*Math.sin(a0+v)).gp(0)
q=r.H()
w.drawCircle(u,t*e*0.85,0.6+s*1.4,q)
q.delete()}p=f*1.2-A.k.F(a3*22,f*1.6)
a0=e*0.3
t=e*0.2
s=B.K()
s.sar(C.enR.aA(0,B.bX(new B.t(p,a0),t)))
a1.ae(new B.t(p,a0),t,s)
a0=B.bN(new B.t(p,a0),e*0.07,e*0.6)
s=B.K()
s.b=A.ac
s.c=3
s.r=A.bM.j(0.7).gp(0)
a1.dX(a0,s)
s=Math.sin(a3*2)
J.bq(w.save())
w.translate(f*0.42,e*0.52+s*e*0.04)
a1.j_(0,-0.25)
d=d.r
s=y.v
o=new B.aI(d,A.ai,g,g,B.a([],s))
a0=-e
t=a0*0.04
r=e*0.1
o.D(new B.b0(t,r))
n=e*0.04
o.D(new B.c8(0,e*(0.2+0.05*Math.sin(a3*30)),n,r))
o.D(new B.bv())
m=B.K()
l=e*0.12
m.sar(C.c0a.aA(0,new B.a5(t,r,t+e*0.08,r+l)))
a1.aJ(o,m)
k=new B.aI(d,A.ai,g,g,B.a([],s))
m=a0*0.17
k.D(new B.b0(0,m))
t=a0*0.05
j=e*0.05
k.D(new B.c8(e*0.09,t,j,r))
k.D(new B.ap(t,r))
k.D(new B.c8(a0*0.09,t,0,m))
k.D(new B.bv())
i=B.K()
h=a0*0.08
i.sar(C.c0r.aA(0,new B.a5(h,m,h+e*0.16,m+e*0.27)))
a1.aJ(k,i)
i=B.K()
i.r=A.aR.gp(0)
a1.ae(new B.t(0,t),e*0.035,i)
i=new B.aI(d,A.ai,g,g,B.a([],s))
i.D(new B.b0(t,n))
i.D(new B.ap(a0*0.1,l))
i.D(new B.ap(t,r))
i.D(new B.bv())
t=B.K()
t.r=A.aw.gp(0)
a1.aJ(i,t)
s=new B.aI(d,A.ai,g,g,B.a([],s))
s.D(new B.b0(j,n))
s.D(new B.ap(r,l))
s.D(new B.ap(j,r))
s.D(new B.bv())
r=B.K()
r.r=A.aw.gp(0)
a1.aJ(s,r)
w.restore()},
hYd(a1,a2,a3){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null,h=a2.a,g=a2.b,f=0+h,e=0+g,d=$.V(),a0=B.K()
a0.sar(C.c_b.aA(0,new B.a5(0,0,f,e)))
a1.aU(new B.a5(0,0,f,e),a0)
for(f=a1.a,e=g*0.85,a0=g*0.7,x=y.v,d=d.r,w=0;w<4;++w){v=h*(0.1+0.25*w)
u=B.a([],x)
t=new B.aI(d,A.ai,i,i,u)
u.push(new B.b0(v,g))
u.push(new B.c8(v+Math.sin(a3+w)*10,e,v+4,a0+w*6))
u=new B.aq(A.U,A.S,A.Y,A.Z,A.W)
u.b=A.ac
u.c=5
u.r=A.cS.gp(0)
s=u.H()
u=t.gbB().a.snapshot()
f.drawPath((t.e=new B.cv(u)).a,s)
s.delete()}e=A.k.F(a3*18,h*1.5)
J.bq(f.save())
f.translate(e-h*0.25,g*0.35+Math.sin(a3)*6)
e=B.bN(A.J,g*0.22,g*0.5)
a0=B.K()
a0.r=A.bs.gp(0)
a1.dX(e,a0)
a0=new B.aI(d,A.ai,i,i,B.a([],x))
e=-g
u=e*0.22
a0.D(new B.b0(u,0))
a0.D(new B.c8(e*0.36,e*0.12+Math.sin(a3*3)*5,e*0.34,e*0.16))
t=e*0.02
a0.D(new B.c8(e*0.28,t,u,0))
u=B.K()
u.r=A.bs.gp(0)
a1.aJ(a0,u)
u=g*0.03
a0=g*0.1
r=B.bN(new B.t(0,u),a0,g*0.34)
q=B.K()
q.r=A.aM.gp(0)
a1.dX(r,q)
q=B.K()
q.r=A.c.gp(0)
a1.ae(new B.t(g*0.15,t),3,q)
q=B.K()
q.r=A.w.gp(0)
a1.ae(new B.t(g*0.155,t),1.5,q)
f.restore()
for(t=e*0.005,r=e*0.08,q=e*0.03,p=g*0.06,e*=0.04,o=h+40,n=a3*2,w=0;w<6;++w){m=(w&1)===0?1:-1
l=A.k.F(A.k.F(a3*(24+w*7)*m+w*80,o)+h+40,o)
k=Math.sin(n+w)
J.bq(f.save())
f.translate(l-20,g*(0.52+0.06*w)+k*6)
f.scale(m,1)
l=B.bN(A.J,p,a0)
k=new B.aq(A.U,A.S,A.Y,A.Z,A.W)
j=A.o.F(w,4)
k.r=C.awK[j].gp(0)
s=k.H()
f.drawOval(B.bQ(l),s)
s.delete()
l=B.a([],x)
k=new B.aI(d,A.ai,i,i,l)
l.push(new B.b0(e,0))
l.push(new B.ap(r,q))
l.push(new B.ap(r,u))
l.push(new B.bv())
l=new B.aq(A.U,A.S,A.Y,A.Z,A.W)
l.r=C.awK[j].gp(0)
s=l.H()
l=k.gbB().a.snapshot()
f.drawPath((k.e=new B.cv(l)).a,s)
s.delete()
l=new B.aq(A.U,A.S,A.Y,A.Z,A.W)
l.r=A.w.gp(0)
s=l.H()
f.drawCircle(u,t,1.8,s)
s.delete()
f.restore()}for(w=0;w<14;++w){e=A.k.F(w*0.071+0.05,1)
d=A.k.F(a3*(14+w*3)+w*40,g)
a0=Math.sin(n+w)
x=A.o.F(w,3)
u=new B.aq(A.U,A.S,A.Y,A.Z,A.W)
u.b=A.ac
u.c=1.2
u.r=A.c.j(0.7).gp(0)
s=u.H()
f.drawCircle(h*e+a0*4,g-d,2+x,s)
s.delete()}},
hZu(a7,a8,a9){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null,d=a8.a,a0=a8.b,a1=A.k.F(a9,12),a2=a1<7,a3=0+d,a4=0+a0,a5=$.V(),a6=B.K()
a6.sar(new B.a9(A.b3,A.b6,A.x,a2?C.diY:C.d5Q,e,e).aA(0,new B.a5(0,0,a3,a4)))
a7.aU(new B.a5(0,0,a3,a4),a6)
a6=a0*0.74
x=B.K()
x.r=(a2?C.bmI:A.ET).gp(0)
a7.aU(new B.a5(0,a6,a3,a6+a0*0.26),x)
for(x=a7.a,w=a0*0.07,v=a0*0.06,u=a0*0.2,t=a0*0.1,s=a0*0.09,r=y.v,q=a9*2,a5=a5.r,p=0;p<4;++p){o=d*(0.08+0.24*p)
n=a0*(0.14+0.03*A.o.F(p,2))
m=a6-n
l=o+u
k=new B.aq(A.U,A.S,A.Y,A.Z,A.W)
k.r=C.cTb[p].gp(0)
j=k.H()
x.drawRect(B.bQ(new B.a5(o,m,l,m+n)),j)
j.delete()
k=B.a([],r)
i=new B.aI(a5,A.ai,e,e,k)
k.push(new B.b0(o-4,m))
k.push(new B.ap(o+t,m-s))
k.push(new B.ap(l+4,m))
k.push(new B.bv())
m=new B.aq(A.U,A.S,A.Y,A.Z,A.W)
m.r=A.ev.gp(0)
j=m.H()
m=i.gbB().a.snapshot()
x.drawPath((i.e=new B.cv(m)).a,j)
j.delete()
m=o+w
l=n*0.55
k=a6-l
i=new B.aq(A.U,A.S,A.Y,A.Z,A.W)
i.r=(a2&&A.o.F(A.k.bm(q),2)===0?A.lW:A.h1).gp(0)
j=i.H()
x.drawRect(B.bQ(new B.a5(m,k,m+v,k+l)),j)
j.delete()}if(a2){for(a6=a9*20,v=a9*260,u=a0*0.8,p=0;p<70;++p){o=A.k.F(p*37+a6,d)
h=A.k.F(p*53+v,u)
s=new B.aq(A.U,A.S,A.Y,A.Z,A.W)
s.r=A.fi.gp(0)
s.c=1.4
j=s.H()
x.drawLine.apply(x,[o,h,o-3,h+9,j])
j.delete()}a6=a9*3
if(A.o.F(A.k.bm(a6),7)===0&&A.k.F(a6,1)<0.3){a6=B.K()
a6.r=A.c.j(0.5).gp(0)
a7.aU(new B.a5(0,0,a3,a4),a6)
r=new B.aI(a5,A.ai,e,e,B.a([],r))
r.D(new B.b0(d*0.6,t))
t=d*0.55
a5=a0*0.3
r.D(new B.ap(t,a5))
r.D(new B.ap(d*0.62,a5))
r.D(new B.ap(t,a0*0.55))
t=B.K()
t.b=A.ac
t.c=4
t.r=A.lW.gp(0)
a7.aJ(r,t)}}else{for(a3=d*0.5,a4=a0*0.035,a5=3.141592653589793*A.k.E((a1-7)/2,0,1)*57.29577951308232,p=0;p<6;++p){v=d*(0.9-p*0.07)
v=B.bN(new B.t(a3,a6),v,v)
u=new B.aq(A.U,A.S,A.Y,A.Z,A.W)
u.b=A.ac
u.c=a4
u.r=C.dn9[p].j(0.9).gp(0)
j=u.H()
x.drawArc.apply(x,[B.bQ(v),180,a5,!1,j])
j.delete()}a3=B.K()
a3.r=A.dR.gp(0)
a7.ae(new B.t(d*0.86,a0*0.16),a0*0.08,a3)}for(a3=d+120,p=0;p<3;++p){o=A.k.F(a9*(8+p*4)+p*120,a3)-60
for(a4=a0*(0.12+0.1*p),g=0;g<4;++g){f=C.co4[g]
$.V()
a5=new B.aq(A.U,A.S,A.Y,A.Z,A.W)
a5.r=(a2?A.bn:A.c.j(0.95)).gp(0)
j=a5.H()
x.drawCircle(o+f.a,a4+f.b,w,j)
j.delete()}}},
i0q(a1,a2,a3){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=a2.a,a0=a2.b
$.V()
x=B.K()
x.r=A.dd.gp(0)
a1.aU(new B.a5(0,0,0+d,0+a0),x)
w=B.K()
w.r=A.c.j(0.05).gp(0)
for(x=a1.a,v=0;v<d;v+=16){u=w.H()
x.drawLine.apply(x,[v,0,v,a0,u])
u.delete()}for(t=0;t<a0;t+=16){u=w.H()
x.drawLine.apply(x,[0,t,d,t,u])
u.delete()}s=d*0.14
r=a0*0.2
q=a0*0.08
p=B.bz(new B.a5(s,r,s+d*0.72,r+a0*0.5),new B.aQ(q,q))
o=new B.aI($.V().r,A.ai,null,null,B.a([],y.v))
o.D(new B.iN(p))
r=B.K()
r.b=A.ac
r.c=5
r.r=A.bs.gp(0)
a1.aJ(o,r)
n=new B.SQ(new B.tk(B.xi(o),!1,B.a([],y.L))).gI(0)
r=n.a
m=n.b
r.ii()
l=r.e
k=l[m].b
k===$&&B.c()
k=k.a.length()
r.ii()
j=l[m].b
j===$&&B.c()
i=A.k.F(a3*k/5,j.a.length())
for(h=0;h<10;++h){r.ii()
k=l[m].b
k===$&&B.c()
k=A.k.F(i-h*9,k.a.length())
r.ii()
g=l[m].H2(k).a
k=new B.aq(A.U,A.S,A.Y,A.Z,A.W)
k.r=A.dR.j(1-h*0.09).gp(0)
k.z=N.RM
u=k.H()
x.drawCircle(g.a,g.b,6-h*0.5,u)
u.delete()}x=a0*0.45
r=B.bz(B.bN(new B.t(s,x),a0*0.22,a0*0.12),A.iC)
m=B.K()
m.r=A.cS.gp(0)
a1.aD(r,m)
D.Gy(a1,"+",new B.t(s-5,a0*0.33),a0*0.07,A.c,A.bi,0,null)
f=(Math.sin(a3*2)+1)/2
e=new B.t(d*0.86,x)
x=B.K()
x.r=A.dR.j(0.25+0.5*f).gp(0)
x.z=K.I1
a1.ae(e,a0*0.16,x)
x=B.K()
x.r=B.ar(A.bL,A.oU,f).gp(0)
a1.ae(e,q,x)
D.Gy(a1,"Electricity needs a full loop!",new B.t(0,a0*0.74),a0*0.075,A.hn,A.L,0,d)},
hUN(a4,a5,a6){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=a5.a,a1=a5.b,a2=0+a0,a3=0+a1
$.V()
x=B.K()
x.sar(C.c2n.aA(0,new B.a5(0,0,a2,a3)))
a4.aU(new B.a5(0,0,a2,a3),x)
x=a1*0.82
a3=B.K()
a3.r=A.dd.gp(0)
a4.aU(new B.a5(0,x,a2,x+a1*0.18),a3)
for(a2=a0*0.1,a3=a4.a,w=0;w<7;++w){v=a0*(0.05+w*0.15)
u=a1*(0.1+0.07*A.o.F(w*5,4))
t=x-u
s=new B.aq(A.U,A.S,A.Y,A.Z,A.W)
s.r=A.au.gp(0)
r=s.H()
a3.drawRect(B.bQ(new B.a5(v,t,v+a2,t+u)),r)
r.delete()}for(a2=a1*0.2,t=a6*0.55,q=0;q<4;++q){s=t+q*0.27
p=A.k.F(s,1)
o=A.k.bm(s)*7+q*3
n=a0*(0.15+0.7*A.k.F(o*0.37,1))
m=a1*(0.2+0.25*A.k.F(o*0.53,1))
l=C.avL[A.o.F(Math.abs(o),5)]
if(p<0.3){$.V()
s=new B.aq(A.U,A.S,A.Y,A.Z,A.W)
s.r=A.c.gp(0)
r=s.H()
a3.drawCircle(n,x-(x-m)*(p/0.3),2.5,r)
r.delete()}else{w=(p-0.3)/0.7
for(s=w*w*a1*0.08,k=1-w,j=2.4*k+0.4,i=0;i<28;++i){h=i*3.141592653589793*2/28
g=a2*A.dZ.aw(0,w)
f=Math.cos(h)
e=Math.sin(h)
$.V()
d=new B.aq(A.U,A.S,A.Y,A.Z,A.W)
d.r=l.j(A.k.E(k,0,1)).gp(0)
d.z=C.dvx
r=d.H()
a3.drawCircle(n+f*g,m+e*g+s,j,r)
r.delete()}}}},
i18(a4,a5,a6){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=a5.a,d=a5.b,a0=0+e,a1=0+d,a2=$.V(),a3=B.K()
a3.sar(C.c1g.aA(0,new B.a5(0,0,a0,a1)))
a4.aU(new B.a5(0,0,a0,a1),a3)
for(a1=a4.a,a3=y.v,x=0;x<2;++x,a2=w){w=B.a([],a3)
v=new B.aI(a2.r,A.ai,null,null,w)
w.push(new B.b0(0,d))
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
w=$.V()
t=new B.aq(A.U,A.S,A.Y,A.Z,A.W)
t.r=(a2?A.EY:A.ET).gp(0)
q=t.H()
a2=v.e
a1.drawPath((a2==null?v.e=new B.cv(v.gbB().a.snapshot()):a2).a,q)
q.delete()}a2=d*0.8
a3=B.K()
a3.r=A.bs.gp(0)
a4.aU(new B.a5(0,a2,a0,a2+d*0.04),a3)
for(u=-A.k.F(a6*80,24),a0=d*0.84,a3=d*0.03,w=a0+a3;u<e;u+=24){t=new B.aq(A.U,A.S,A.Y,A.Z,A.W)
t.r=A.h1.gp(0)
q=t.H()
a1.drawRect(B.bQ(new B.a5(u,a0,u+8,w)),q)
q.delete()}p=Math.sin(a6*14)*1.2
o=e*0.12
for(a0=a2+p,a2=d*0.025,w=e*0.012,t=d*0.02,s=d*0.62+p,a3=s+a3,r=a3+d*0.06,n=s+d*0.18,m=0;m<4;++m){l=m===0
k=o+e*(l?0.16:0.15)
j=B.bz(new B.a5(o,s,k,n),new B.aQ(t,t))
i=new B.aq(A.U,A.S,A.Y,A.Z,A.W)
i.r=(l?A.bx:C.d5S[m-1]).gp(0)
q=i.H()
a1.drawRRect(B.eL(j),q)
q.delete()
for(k-=o,j=k*0.18,h=0;h<3;++h){i=o+k*(0.12+h*0.28)
g=new B.aq(A.U,A.S,A.Y,A.Z,A.W)
g.r=A.fi.gp(0)
q=g.H()
a1.drawRect(B.bQ(new B.a5(i,a3,i+j,r)),q)
q.delete()}j=new B.aq(A.U,A.S,A.Y,A.Z,A.W)
j.r=A.bk.gp(0)
q=j.H()
a1.drawCircle(o+k*0.25,a0,a2,q)
q.delete()
j=new B.aq(A.U,A.S,A.Y,A.Z,A.W)
j.r=A.bk.gp(0)
q=j.H()
a1.drawCircle(o+k*0.75,a0,a2,q)
q.delete()
o+=k+w}for(a0=a6*0.8,a2=e*0.2,a3=d*0.6,m=0;m<5;++m){f=A.k.F(a0+m*0.2,1)
w=f*d
s=new B.aq(A.U,A.S,A.Y,A.Z,A.W)
s.r=A.c.j(0.7*(1-f)).gp(0)
q=s.H()
a1.drawCircle(a2-f*e*0.12,a3-w*0.25,t+w*0.04,q)
q.delete()}},
i_h(a2,a3,a4){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=a3.a,d=a3.b,a0=0+e,a1=0+d
$.V()
x=B.K()
w=a4*2
v=B.ar(A.jo,A.f5,(Math.sin(w)+1)/2)
v.toString
x.sar(new B.a9(A.ay,A.aD,A.x,B.a([v,A.au],y.O),null,null).aA(0,new B.a5(0,0,a0,a1)))
a2.aU(new B.a5(0,0,a0,a1),x)
for(a0=a2.a,a1=d*0.86,x=e/8-2,v=d*0.14,u=a1+v,t=0;t<8;++t){s=e*t/8
r=new B.aq(A.U,A.S,A.Y,A.Z,A.W)
r.r=(A.k.F(w+t,2)<1?A.c8:A.aR).j(0.5).gp(0)
q=r.H()
a0.drawRect(B.bQ(new B.a5(s,a1,s+x,u)),q)
q.delete()}a1=a4*6
p=Math.sin(a1)
J.bq(a0.save())
x=-d
a0.translate(e*0.5,d*0.55+Math.abs(p)*x*0.03)
a2.j_(0,p*0.06)
u=d*0.26
s=d*0.3
r=d*0.04
o=B.bz(B.bN(A.J,s,u),new B.aQ(r,r))
n=B.K()
n.sar(C.c2M.aA(0,B.bN(A.J,s,u)))
a2.aD(o,n)
n=d*0.08
v=B.bN(new B.t(0,d*0.02),n,v)
o=B.K()
o.r=A.bc.j(0.7).gp(0)
a2.aU(v,o)
o=B.bz(B.bN(new B.t(0,x*0.25),d*0.17,d*0.22),new B.aQ(r,r))
v=B.K()
v.r=A.cr.gp(0)
a2.aD(o,v)
m=A.k.F(a4*1.3,1)>0.08
for(v=x*0.26,u=d*0.025,l=0;l<2;++l){k=C.cnH[l]
s=new B.aq(A.U,A.S,A.Y,A.Z,A.W)
s.r=(m?A.bc:A.f5).gp(0)
q=s.H()
a0.drawCircle(k*d,v,u,q)
q.delete()}v=B.K()
v.r=A.ae.gp(0)
v.c=3
a2.br(new B.t(0,x*0.335),new B.t(0,x*0.38),v)
v=B.K()
v.r=A.aw.gp(0)
a2.ae(new B.t(0,x*0.39),d*0.015,v)
for(v=-p,u=d*0.035,s=d*0.15,o=d*0.28,x*=0.08,l=0;l<2;++l){j=F.je[l]
J.bq(a0.save())
i=j*d
a0.translate(i*0.14,x)
h=j>0
a0.rotate(j*(0.7+Math.sin(a1+(h?0:3.141592653589793))*0.8)*180/3.141592653589793,0,0)
g=new B.aq(A.U,A.S,A.Y,A.Z,A.W)
g.r=A.bL.gp(0)
g.c=u
g.d=A.bG
q=g.H()
a0.drawLine.apply(a0,[0,0,i*0.16,0,q])
q.delete()
a0.restore()
h=h?p:v
g=new B.aq(A.U,A.S,A.Y,A.Z,A.W)
g.r=A.bL.gp(0)
g.c=r
g.d=A.bG
q=g.H()
a0.drawLine.apply(a0,[i*0.06,s,i*0.08,o+h*d*0.02,q])
q.delete()}a0.restore()
for(a0=a4*0.7,a1=d*0.7,t=0;t<4;++t){f=A.k.F(a0+t*0.25,1)
D.Gy(a2,"\u266a",new B.t(e*(0.2+0.18*t)+Math.sin(w+t)*8,a1-f*d*0.5),n,A.c.j(1-f),A.bi,0,null)}},
hUZ(a1,a2,a3){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=a2.a,e=a2.b,d=0+f,a0=0+e
$.V()
x=B.K()
x.sar(C.c1n.aA(0,new B.a5(0,0,d,a0)))
a1.aU(new B.a5(0,0,d,a0),x)
x=B.K()
x.r=A.dR.gp(0)
a1.ae(new B.t(f*0.12,e*0.16),e*0.07,x)
x=e*0.72
a0=B.K()
a0.r=A.EY.gp(0)
a1.aU(new B.a5(0,x,d,x+e*0.28),a0)
for(d=a3*0.25,a0=e*0.78,x=a1.a,w=e*0.016,v=a3*0.3,u=e*0.022,t=0;t<9;++t){s=f*(0.07+t*0.105)
r=A.k.E(A.k.F(d-t*0.12,3),0,1)
q=A.o.F(t,3)
p=s+Math.sin(a3+t)*3
q=a0-e*(0.12+0.05*q)*r
o=new B.aq(A.U,A.S,A.Y,A.Z,A.W)
o.r=A.hc.gp(0)
o.c=3
n=o.H()
x.drawLine.apply(x,[s,a0,p,q,n])
n.delete()
if(r>0.7){for(m=0;m<6;++m){l=m*3.141592653589793/3+v
o=Math.cos(l)
k=Math.sin(l)
j=new B.aq(A.U,A.S,A.Y,A.Z,A.W)
j.r=C.axM[A.o.F(t,5)].gp(0)
n=j.H()
x.drawCircle(p+o*e*0.028,q+k*e*0.028,u,n)
n.delete()}o=new B.aq(A.U,A.S,A.Y,A.Z,A.W)
o.r=A.dR.gp(0)
n=o.H()
x.drawCircle(p,q,w,n)
n.delete()}}for(d=e*0.03,a0=e*0.05,w=e*0.06,v=a3*0.9,u=a3*1.3,q=a3*18,t=0;t<3;++t){s=f*(0.2+0.28*t)+Math.sin(v+t*2)*f*0.12
i=e*(0.3+0.1*t)+Math.cos(u+t)*e*0.06
h=Math.abs(Math.sin(q+t))
for(p=a0*h+2,o=(t+2)%5,g=0;g<2;++g){k=B.bN(new B.t(s+F.je[g]*e*0.025*h,i),w,p)
j=new B.aq(A.U,A.S,A.Y,A.Z,A.W)
j.r=C.axM[o].gp(0)
n=j.H()
x.drawOval(B.bQ(k),n)
n.delete()}p=new B.aq(A.U,A.S,A.Y,A.Z,A.W)
p.r=A.bk.gp(0)
p.c=2
n=p.H()
x.drawLine.apply(x,[s,i-d,s,i+d,n])
n.delete()}},
h54(d,e,f,g,h,i){return B.a3(d,!1).cg(B.uQ(null,!1,!0,!0,new D.fSn(e,h,g,i,f),A.eO,null,A.q1,new D.fSo(),y.S))},
xP:function xP(d,e){this.a=d
this.b=e},
fgr:function fgr(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
frE:function frE(d){this.a=d},
frA:function frA(){},
frD:function frD(d,e){this.a=d
this.b=e},
frB:function frB(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
frC:function frC(d,e,f){this.a=d
this.b=e
this.c=f},
frF:function frF(d,e){this.a=d
this.b=e},
fSn:function fSn(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fSo:function fSo(){},
Wt:function Wt(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aEQ:function aEQ(d,e){var _=this
_.e=_.d=$
_.f=-1
_.r=!1
_.w=null
_.x=0
_.y=!0
_.z=null
_.bx$=d
_.aa$=e
_.c=_.a=null},
eGQ:function eGQ(d){this.a=d},
eGP:function eGP(d){this.a=d},
eGO:function eGO(d,e){this.a=d
this.b=e},
eGR:function eGR(d,e){this.a=d
this.b=e},
eH_:function eH_(d){this.a=d},
eGZ:function eGZ(d){this.a=d},
eGY:function eGY(){},
eGT:function eGT(d){this.a=d},
eGU:function eGU(d){this.a=d},
eGV:function eGV(d){this.a=d},
eGW:function eGW(d){this.a=d},
eGS:function eGS(d){this.a=d},
eGX:function eGX(d){this.a=d},
eGN:function eGN(d){this.a=d},
eGM:function eGM(d){this.a=d},
buL:function buL(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.a=h},
aMx:function aMx(){},
h59(d){var x
A:{if("lgtv"===d){x="lg"
break A}if("sonytv"===d){x="sony"
break A}if("appletv"===d){x="apple"
break A}if("bangtv"===d){x="bo"
break A}x="samsung"
break A}return x},
ieX(d){var x,w=D.h59(d)
A:{if("lg"===w){x=A.hl
break A}if("sony"===w){x=A.dv
break A}if("apple"===w){x=A.bO
break A}if("bo"===w){x=C.tv
break A}x=A.aR
break A}return x},
as8:function as8(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bkW:function bkW(){this.d=0
this.c=this.a=null},
eGK:function eGK(d,e){this.a=d
this.b=e},
eGL:function eGL(d,e){this.a=d
this.b=e},
eGH:function eGH(){},
eGG:function eGG(d){this.a=d},
eGI:function eGI(d){this.a=d},
eGJ:function eGJ(d){this.a=d},
eGE:function eGE(d){this.a=d},
eGF:function eGF(d,e){this.a=d
this.b=e},
hKs(b3,b4,b5,b6,b7){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9=A.o.an(22050*b4,1000),b0=a9*2,b1=new DataView(new ArrayBuffer(44+b0)),b2=new D.cif(b1)
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
x=new B.eb()
x.d5(3)
w=3
v=0.006
u=!1
t=0
switch(b7){case"piano":s=C.cZY
r=C.d4l
w=3.4
break
case"organ":s=C.d3a
r=C.dj1
v=0.02
u=!0
break
case"bell":s=C.cVE
r=C.cUp
w=2.4
break
case"pluck":s=C.cZX
r=C.cG9
w=7
break
case"synth":s=C.djU
r=C.dlE
v=0.012
u=!0
break
case"flute":s=C.dq5
r=C.cgp
v=0.07
u=!0
t=0.035
break
default:s=C.aqj
r=C.aqj}b0=s.length
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
break A}a4=a3*(Math.min(1,d/120)*Math.pow(a1,1.6))}b1.setInt16(44+d*2,A.o.E(A.k.V(a4*0.8*32e3),-32768,32767),!0)}return J.eV(A.dF.gaQ(b1))},
dX(d,e,f,g,h,i){return D.hKt(d,e,f,g,h,i)},
hKt(d,e,f,g,h,i){var x=0,w=B.j(y.H),v=1,u=[],t,s,r,q,p,o
var $async$dX=B.e(function(j,k){if(j===1){u.push(k)
x=v}for(;;)switch(x){case 0:v=3
t=""+A.k.V(d)+"|"+f+"|"+i+"|"+B.w(g)+"|"+e
s=$.hKr.c4(0,t,new D.cih(d,f,i,g,e))
if($.cie.length<12){q=B.aiz()
q.N5(A.aO5)
$.cie.push(q)}q=$.hez
$.hez=q+1
r=$.cie[A.o.F(q,$.cie.length)]
x=6
return B.b(J.hxy(r,new B.a3j(s,null),h),$async$dX)
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
cif:function cif(d){this.a=d},
cih:function cih(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h}},C,E,F,O
J=c[1]
B=c[0]
A=c[2]
G=c[225]
I=c[128]
K=c[130]
L=c[177]
M=c[100]
H=c[123]
N=c[101]
D=a.updateHolder(c[26],D)
C=c[97]
E=c[38]
F=c[98]
O=c[238]
D.ws.prototype={}
D.vX.prototype={}
D.xP.prototype={}
D.Wt.prototype={
U(){return new D.aEQ(null,null)}}
D.aEQ.prototype={
gaej(){var x,w=this,v=w.d
if(v===$){x=B.bl(null,A.o5,null,1,null,w)
x.cp(0)
w.d!==$&&B.bF()
w.d=x
v=x}return v},
gDp(){var x=this.e
return x===$?this.e=this.a.e:x},
a_(){var x=this
x.a2()
x.w=B.cL(x.a.r,x.gaZy())
x.aVF()
D.dX(520,"",80,0,0.25,"tri")},
aVF(){var x=this.z
if(x!=null)x.a3(0)
this.z=B.cL(A.kc,new D.eGQ(this))},
c7N(){var x=this.c
if(x!=null&&B.a3(x,!1).pJ()){x=this.c
x.toString
B.a3(x,!1).N(this.gDp())}},
ajd(){var x=this,w=x.w
if(w!=null)w.a3(0)
x.w=null
x.y=!0
x.aVF()},
axl(d){this.m(new D.eGO(this,d))
D.dX(900,"",40,0,0.3,"noise")},
b0j(d){this.m(new D.eGR(this,d))
D.dX(700,"",60,0,0.3,"tri")},
t(){var x=this,w=x.w
if(w!=null)w.a3(0)
w=x.z
if(w!=null)w.a3(0)
x.gaej().t()
x.bwB()},
B(d){var x,w,v,u,t=this,s=null,r=B.m(10),q=B.I(t.gc7O(),A.r,6),p=B.a([new B.ac(0,A.G,D.ieX(t.a.d).j(0.25),A.J,40)],y.V),o=B.m(4),n=y.p,m=B.a([B.c9(t.gaej(),new D.eGZ(t),s)],n)
if(t.r)m.push(t.bC6())
r=B.at(new B.fL(1.7777777777777777,B.p(s,B.bx(o,new B.an(A.a_,s,A.b1,A.t,m,s),A.aq),A.f,s,s,new B.o(s,s,q,r,p,s,A.n),s,s,s,s,s,s,s,s),s),s,s,s)
q=t.y
p=q?1:0
o=B.nG(s,A.aW,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s)
o=B.aJ(s,s,s,s,B.X(A.cx,A.c,s,s,s,s),s,s,s,t.gaZy(),s,s,s,o,"Back to the board",s)
m=B.m(20)
x=t.f
w=t.a
o=B.B(B.a([o,A.b0,B.p(s,B.d(x>=0?w.c+" \xb7 "+C.ki[x].a:w.c+" \xb7 CH "+(t.gDp()+1),s,s,s,s,s,s,F.A1,s,s,s),A.f,s,s,new B.o(A.aW,s,s,m,s,s,A.n),s,s,s,s,A.mD,s,s,s)],n),A.m,s,A.e,A.j,0,s,s)
m=t.coQ()
x=A.w.j(0.65)
w=B.m(18)
v=t.f
v=B.d(v>=0?C.ki[v].a:C.QC[t.gDp()].a,s,s,s,s,s,s,A.hx,A.L,s,s)
u=t.f
return B.c5(s,A.w,B.bm(!0,B.aB(A.cc,new B.an(A.a_,s,A.b1,A.t,B.a([r,B.Dk(B.e2(B.x(B.a([new B.D(C.bvk,o,s),A.am,m,A.b0,B.p(s,B.x(B.a([v,B.d(u>=0?C.ki[u].c:C.QC[t.gDp()].b,s,s,s,s,s,s,M.a8R,A.L,s,s)],n),A.m,s,A.e,A.P,0,A.p),A.f,s,s,new B.o(x,s,s,w,s,s,A.n),s,s,s,A.bh,A.bT,s,s,s)],n),A.m,s,A.e,A.j,0,A.p),!q,s),A.b7,A.is,p)],n),s),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new D.eH_(t),s,s,s,s,s,s,!1,A.a4),!0,!1,A.af,!0,!0),s,!1,!1,s,s)},
coQ(){var x=this,w=null,v=new D.eGY(),u=A.w.j(0.72),t=B.m(22),s=B.I(A.aR.j(0.5),A.r,1)
return B.p(w,B.B(B.a([v.$3(A.yM,"CH \u2212",new D.eGT(x)),v.$3(A.hH,"CH +",new D.eGU(x)),v.$5$color$on(A.GC,"TV",new D.eGV(x),A.aR,x.f<0),v.$5$color$on(A.yx,"APPS",new D.eGW(x),A.by,x.r),v.$5$color$on(A.BZ,"ADS",new D.eGX(x),A.c8,x.f===0)],y.p),A.m,w,A.e,A.P,0,w,w),A.f,w,w,new B.o(u,w,s,t,w,w,A.n),w,w,w,w,A.a_3,w,w,w)},
bC6(){return new D.as8(this.a.d,this.gcdw(),new D.eGN(this),null)},
gc7O(){var x,w=D.h59(this.a.d)
A:{if("apple"===w){x=A.dv
break A}if("bo"===w){x=C.EK
break A}if("sony"===w){x=C.bat
break A}if("lg"===w){x=A.eg
break A}x=A.cp
break A}return x}}
D.buL.prototype={
a5(d,e){var x=this
return D.h4M(d,e,x.b,x.d,x.e,x.c)},
av(d){return!0}}
D.aMx.prototype={
t(){var x=this,w=x.aa$
if(w!=null)w.a6(0,x.gbE())
x.aa$=null
x.a1()},
aW(){this.b6()
this.b5()
this.bF()}}
D.as8.prototype={
U(){return new D.bkW()},
a5Q(d,e){return this.d.$1(e)}}
D.bkW.prototype={
aZz(d){this.m(new D.eGK(this,d))
this.a.a5Q(0,d)},
B(d){var x,w=this,v=D.h59(w.a.c)
A:{if("lg"===v){x=w.c0u()
break A}if("sony"===v){x=w.cwD()
break A}if("apple"===v){x=w.c7P()
break A}if("bo"===v){x=w.bD0()
break A}x=w.cqU()
break A}return x},
gaek(){var x=new B.U(Date.now(),0,!1)
return A.a.aZ(A.o.u(B.dl(x)),2,"0")+":"+A.a.aZ(A.o.u(B.h3(x)),2,"0")},
axm(d,e,f,g,h,i,j){var x,w,v=null,u=C.ki[d],t=this.d===d,s=u.d,r=B.ar(s,A.w,0.55)
r.toString
r=B.a([s,r],y.O)
s=B.m(h)
if(t)x=i
else x=A.K
x=B.I(x,A.r,t?2.5:0)
w=B.a([B.d(u.b,v,v,v,v,v,v,B.l(v,v,v,v,v,v,v,v,v,v,v,e,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],y.p)
if(g)w.push(new B.D(A.tW,B.d(u.a,v,1,A.a2,v,v,v,A.Ur,v,v,v),v))
return B.aB(v,B.p(v,B.x(w,A.m,v,A.b8,A.j,0,A.p),A.f,v,v,new B.o(v,v,x,s,v,new B.a9(A.ay,A.aD,A.x,r,v,v),A.n),v,f,v,v,v,v,v,j),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new D.eGL(this,d),v,v,v,v,v,v,!1,A.a4)},
aZA(d,e,f,g,h,i){return this.axm(d,e,f,!1,g,h,i)},
cqU(){var x,w,v,u,t,s,r=this,q=null,p=r.a.e,o=y.p,n=B.B(B.a([C.fxP,A.ab,C.fq1,A.b0,C.bU3,A.ab,C.bPV,A.ab,B.d(r.gaek(),q,q,q,q,q,q,C.aSf,q,q,q)],o),A.m,q,A.e,A.j,0,q,q),m=C.ki[r.d],l=B.d(m.a,q,q,q,q,q,q,A.lN,q,q,q)
m=B.d(m.c,q,1,A.a2,q,q,q,C.fhB,q,q,q)
x=A.c.j(0.08)
w=B.a([],o)
for(v=0;v<2;++v){u=new B.aQ(8,8)
w.push(B.p(q,B.X(C.cnv[v],A.ae,q,q,q,17),A.f,q,q,new B.o(A.bz,q,q,new B.bk(u,u,u,u),q,q,A.n),q,34,q,A.ML,q,q,q,34))}u=B.a([],o)
for(t=0;t<8;++t){s=r.d===t?1.12:1
u.push(new B.D(A.ML,new B.yU(r.axm(t,14,44,!0,8,A.aR,52),s,A.b7,A.fH,q,q),q))}w.push(B.E(B.cd(B.B(u,A.m,q,A.e,A.j,0,q,q),A.t,q,A.y,q,q,q,q,A.aN),1))
return B.aB(q,B.p(q,B.x(B.a([n,A.b0,new B.bL(A.a3,q,q,l,q),new B.bL(A.a3,q,q,m,q),A.am,B.p(q,B.B(w,A.m,q,A.e,A.j,0,q,q),A.f,q,q,new B.o(x,q,q,A.W0,q,q,A.n),q,q,q,q,A.Nc,q,q,q)],o),A.m,q,A.e,A.j,0,A.p),A.f,q,q,C.b2p,q,q,q,q,G.aiu,q,q,q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,p,q,q,q,q,q,q,!1,A.a4)},
c0u(){var x=null,w=this.a.e,v=y.p
return B.aB(x,B.p(x,B.x(B.a([B.B(B.a([B.p(x,C.fDW,A.f,x,x,new B.o(A.hl,x,x,B.m(10),x,x,A.n),x,x,x,x,A.mF,x,x,x),A.bo,C.fwO,A.b0,B.d(this.gaek(),x,x,x,x,x,x,A.DN,x,x,x)],v),A.m,x,A.e,A.j,0,x,x),A.b0,new B.a7(x,62,B.hN(x,new D.eGG(this),8,x,x,A.aN,new D.eGH(),!1),x)],v),A.E,x,A.e,A.j,0,A.p),A.f,x,x,C.b2A,x,x,x,x,O.MS,x,x,x),A.y,!1,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,w,x,x,x,x,x,x,!1,A.a4)},
cwD(){var x,w,v,u,t=this,s=null,r=C.ki[t.d],q=t.a.e,p=y.p,o=B.a([B.p(s,C.eWf,A.f,s,s,new B.o(A.ds,s,s,B.m(12),s,s,A.n),s,s,s,s,A.yh,s,s,s),A.ab],p)
for(x=0;x<3;++x){w=C.dfQ[x]
v=w==="Apps"?A.c:A.aB
o.push(new B.D(A.it,new B.y(w,s,new B.F(!0,v,s,s,s,s,9.5,A.O,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s),s,s,s,s,s,s,s,s,s),s))}o.push(A.b0)
o.push(B.d(t.gaek(),s,s,s,s,s,s,C.fgZ,s,s,s))
o=B.B(o,A.m,s,A.e,A.j,0,s,s)
v=r.d
u=B.ar(v,A.w,0.7)
u.toString
u=B.a([v,u],y.O)
v=B.m(10)
return B.aB(s,B.p(s,B.x(B.a([o,A.fM,B.E(B.B(B.a([B.E(B.p(s,B.x(B.a([B.d(r.b,s,s,s,s,s,s,A.pt,s,s,s),B.d(r.a,s,s,s,s,s,s,A.nE,s,s,s),B.d(r.c,s,2,A.a2,s,s,s,C.fnm,s,s,s),A.cK,B.aB(s,B.p(s,C.ftC,A.f,s,s,new B.o(A.c,s,s,B.m(10),s,s,A.n),s,s,s,s,A.yh,s,s,s),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new D.eGI(t),s,s,s,s,s,s,!1,A.a4)],p),A.E,s,A.mO,A.j,0,A.p),A.f,s,s,new B.o(s,s,s,v,s,new B.a9(A.a3,A.a8,A.x,u,s,s),A.n),s,s,s,s,A.cm,s,s,s),5),A.ab,B.E(B.ix(!0,s,s,A.y,C.f1K,new D.eGJ(t),8,A.af,s,A.ag,!1),6)],p),A.m,s,A.e,A.j,0,s,s),1)],p),A.E,s,A.e,A.j,0,A.p),A.f,C.bmc,s,s,s,s,s,s,A.h4,s,s,s),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,q,s,s,s,s,s,s,!1,A.a4)},
c7P(){var x,w,v,u,t=this,s=null,r=t.a.e,q=y.p,p=B.B(B.a([C.bUF,A.qz,C.fK_,A.b0,B.d(t.gaek(),s,s,s,s,s,s,A.DQ,s,s,s)],q),A.m,s,A.e,A.j,0,s,s),o=B.a([],q)
for(x=0;x<8;++x){w=t.d===x
v=w?6:0
u=w?C.dlo:A.QX
w=w?1.18:1
o.push(new B.D(A.eU,B.d9(s,new B.yU(t.aZA(x,20,44,12,A.c,44),w,A.b7,A.eM,s,s),s,s,A.b7,new B.o(s,s,s,s,u,s,A.n),A.eM,s,s,new B.Q(0,0,0,v),s,s,s,s),s))}return B.aB(s,B.p(s,B.x(B.a([p,A.b0,new B.a7(s,68,B.cd(B.B(o,A.dE,s,A.e,A.j,0,s,s),A.t,s,A.y,s,s,s,s,A.aN),s),A.av,B.d(C.ki[t.d].a,s,s,s,s,s,s,A.oA,s,s,s)],q),A.m,s,A.e,A.j,0,A.p),A.f,s,s,C.b2r,s,s,s,s,C.Zk,s,s,s),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,r,s,s,s,s,s,s,!1,A.a4)},
bD0(){var x,w,v,u,t,s,r=this,q=null,p=r.a.e,o=C.ki[r.d],n=y.p
o=B.E(B.x(B.a([C.fta,A.b0,B.d(o.b,q,q,q,q,q,q,A.nD,q,q,q),A.av,B.d(o.a,q,q,q,q,q,q,C.f9d,q,q,q),A.bC,B.d(o.c,q,q,q,q,q,q,C.fnF,q,q,q),A.am,B.aB(q,B.p(q,C.fM7,A.f,q,q,C.b2X,q,q,q,q,C.buv,q,q,q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new D.eGE(r),q,q,q,q,q,q,!1,A.a4),A.b0],n),A.E,q,A.e,A.j,0,A.p),4)
x=B.p(q,q,A.f,C.bk4,q,q,q,q,q,A.fI,q,q,q,0.6)
w=B.a([],n)
for(v=0;v<8;++v){u=C.ki[v]
t=r.d===v
s=t?C.tv:C.adE
t=t?12:10.5
w.push(B.aB(q,new B.D(A.y1,new B.y(u.a,q,new B.F(!0,s,q,"serif",q,q,t,A.kd,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q),q,q,q,q,q,q,q,q,q),q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new D.eGF(r,v),q,q,q,q,q,q,!1,A.a4))}return B.aB(q,B.p(q,B.B(B.a([o,x,B.E(B.cq(w,q,q,q,q,A.ag,!1),3)],n),A.m,q,A.e,A.j,0,q,q),A.f,C.bpH,q,q,q,q,q,q,A.FS,q,q,q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,p,q,q,q,q,q,q,!1,A.a4)}}
var z=a.updateTypes(["~()","Wt(Y,br<L>,br<L>)","~(H)"])
D.frk.prototype={
$1(d){var x=null,w=B.fS(x,x,1,x,B.cX(x,x,x,x,x,x,x,x,x,B.l(x,x,this.b,x,x,x,x,x,x,x,x,d,x,x,A.u,x,x,!0,x,x,x,x,x,x,x,x),this.a),A.a6,A.c5,x,A.dP,A.c4)
w.eI()
return w},
$S:395}
D.fre.prototype={
$1(d){return Math.min(this.a*0.085,this.b*0.44/(d.length*0.62))},
$S:704}
D.fKg.prototype={
$1(d){var x=this.b,w=B.kv(this.a,x,d)
w.toString
x=B.kv(x,this.c,d)
x.toString
x=B.kv(w,x,d)
x.toString
return x},
$S:1958}
D.fea.prototype={
$2(d,e){return A.k.E((this.a-d)/e,0,1)},
$S:78}
D.fe7.prototype={
$1(d){return A.dB.aw(0,d)},
$S:5}
D.fe9.prototype={
$2(d,e){var x=this.b
return new B.t(this.a.a+d*x,this.c.b-e*x)},
$S:366}
D.fe8.prototype={
$5(d,e,f,g,h){var x,w,v,u=this.a.$2(h,0.5)
if(u<=0)return
x=this.b
w=x.a
J.bq(w.save())
w.translate(f.a,f.b)
x.bX(0,A.k.E(A.lo.aw(0,u),0.01,1.3))
v=this.c
E.fKh(x,A.J,g,d,v,v>4.5?0.6:0)
D.hrP(x,new B.t(0,g*1.42),g,e)
w.restore()},
$S:750}
D.fiD.prototype={
$1(d){var x=this,w=null,v=x.c?A.u:A.a7
v=B.fS(w,w,1,w,B.cX(w,w,w,w,w,w,w,w,w,B.l(w,w,x.b,w,w,w,w,w,w,w,w,d,w,w,v,w,w,!0,w,x.d,w,w,w,w,w,w),x.a),A.a6,A.c5,w,A.dP,A.c4)
v.eI()
return v},
$S:395}
D.fgr.prototype={
$1(d){var x=this,w=null,v=x.c?A.u:A.O
v=B.fS(w,w,1,w,B.cX(w,w,w,w,w,w,w,w,w,B.l(w,w,x.b,w,w,w,w,w,w,w,w,d,w,w,v,w,w,!0,w,x.d,w,w,w,w,w,w),x.a),A.a6,A.c5,w,A.dP,A.c4)
v.eI()
return v},
$S:395}
D.frE.prototype={
$2(d,e){return A.k.E((this.a-d)/e,0,1)},
$S:78}
D.frA.prototype={
$1(d){return A.dB.aw(0,d)},
$S:5}
D.frD.prototype={
$2(d,e){var x=this.b
return new B.t(this.a+d*x,e*x)},
$S:366}
D.frB.prototype={
$5(d,e,f,g,h){var x,w,v,u=this,t=u.a.$2(h,0.6)
if(t<=0)return
x=u.b
w=x.a
J.bq(w.save())
w.translate(f.a,f.b)
x.bX(0,A.k.E(A.lo.aw(0,t),0.01,1.3))
v=u.c
E.fKh(x,A.J,g,d,v,u.d>9.5?0.5+0.3*Math.sin(v*3+d):0)
D.hrP(x,new B.t(0,g*1.42),g,e)
w.restore()},
$S:750}
D.frC.prototype={
$3(d,e,f){var x,w,v,u,t=this.a.$2(f,0.5)
if(t<=0)return
x=A.k.E(A.lo.aw(0,t),0.01,1.3)*(1+0.07*Math.sin(this.b*6))
w=this.c
v=e*x
$.V()
u=B.K()
u.r=A.bA.gp(0)
w.ae(d,v,u)
u=B.K()
u.b=A.ac
u.c=2
u.r=A.c.gp(0)
w.ae(d,v,u)
D.Gy(w,"\u2665",d.aF(0,new B.t(e*0.5*x,e*0.62*x)),e*1.3*x,A.c,A.bi,0,null)},
$S:445}
D.frF.prototype={
$2(d,e){var x,w,v=this.a,u=v.a
v=v.c-u
u+=v*0.08
x=this.b
w=x*d
return new B.a5(u,w,u+v*0.84,w+x*e)},
$S:1960}
D.fSn.prototype={
$3(d,e,f){var x=this
return new D.Wt(x.d,x.e,x.a,x.c,x.b,null)},
$C:"$3",
$R:3,
$S:z+1}
D.fSo.prototype={
$4(d,e,f,g){var x=y.t
return new B.d0(e,!1,B.iq(A.A,g,null,new B.bf(B.cJ(A.cu,e,null),new B.bn(0.85,1,x),x.k("bf<bM.T>"))),null)},
$C:"$4",
$R:4,
$S:32}
D.eGQ.prototype={
$0(){var x=this.a
if(x.c!=null&&!x.r)x.m(new D.eGP(x))},
$S:0}
D.eGP.prototype={
$0(){return this.a.y=!1},
$S:0}
D.eGO.prototype={
$0(){var x,w=this.a
w.f=-1
w.e=A.o.F(w.gDp()+this.b,10)
if(w.gDp()<0)w.e=w.gDp()+10
x=w.gaej().y
x=x==null?null:A.o.an(x.a,1000)
w.x=x==null?0:x
w.ajd()},
$S:0}
D.eGR.prototype={
$0(){var x=this.a
x.f=this.b
x.r=!1
x.ajd()},
$S:0}
D.eH_.prototype={
$0(){var x=this.a
return x.m(x.gcBB())},
$S:0}
D.eGZ.prototype={
$2(d,e){var x=null,w=this.a,v=w.gaej().y,u=v==null?x:A.o.an(v.a,1000),t=(u==null?0:u)/1000,s=w.x===0&&w.a.f?t:99
return B.b4(x,x,x,new D.buL(w.gDp(),w.f,t,s,x),A.fL)},
$S:68}
D.eGY.prototype={
$5$color$on(d,e,f,g,h){var x=null,w=h?g.j(0.28):A.c.j(0.08),v=B.m(14),u=B.I(h?g:A.aZ,A.r,1)
return B.aB(x,B.p(x,B.x(B.a([B.X(d,g,x,x,x,20),A.v5,B.d(e,x,x,x,x,x,x,B.l(x,x,g,x,x,x,x,x,x,x,x,9.5,x,x,A.H,x,x,!0,x,x,x,x,x,x,x,x),x,x,x)],y.p),A.m,x,A.e,A.P,0,A.p),A.f,x,x,new B.o(w,x,u,v,x,x,A.n),x,x,x,A.jy,A.l0,x,x,56),A.y,!1,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,f,x,x,x,x,x,x,!1,A.a4)},
$3(d,e,f){return this.$5$color$on(d,e,f,A.c,!1)},
$4$color(d,e,f,g){return this.$5$color$on(d,e,f,g,!1)},
$S:1961}
D.eGT.prototype={
$0(){return this.a.axl(-1)},
$S:0}
D.eGU.prototype={
$0(){return this.a.axl(1)},
$S:0}
D.eGV.prototype={
$0(){return this.a.axl(0)},
$S:0}
D.eGW.prototype={
$0(){var x=this.a
return x.m(new D.eGS(x))},
$S:0}
D.eGS.prototype={
$0(){var x=this.a
x.r=!x.r
x.ajd()},
$S:0}
D.eGX.prototype={
$0(){return this.a.b0j(0)},
$S:0}
D.eGN.prototype={
$0(){var x=this.a
return x.m(new D.eGM(x))},
$S:0}
D.eGM.prototype={
$0(){return this.a.r=!1},
$S:0}
D.eGK.prototype={
$0(){return this.a.d=this.b},
$S:0}
D.eGL.prototype={
$0(){return this.a.aZz(this.b)},
$S:0}
D.eGH.prototype={
$2(d,e){return A.bo},
$S:36}
D.eGG.prototype={
$2(d,e){var x=null,w=this.a,v=w.d===e?1.1:1
v=B.a([B.vy(w.aZA(e,18,46,6,A.c,80),A.b7,A.fH,v)],y.p)
if(w.d===e)v.push(new B.D(A.tW,B.d(C.ki[e].a,x,x,x,x,x,x,C.flS,x,x,x),x))
return B.x(v,A.m,x,A.e,A.P,0,A.p)},
$S:676}
D.eGI.prototype={
$0(){var x=this.a
return x.a.a5Q(0,x.d)},
$S:0}
D.eGJ.prototype={
$2(d,e){return this.a.axm(e,15,1/0,!0,8,A.c,1/0)},
$S:42}
D.eGE.prototype={
$0(){var x=this.a
return x.a.a5Q(0,x.d)},
$S:0}
D.eGF.prototype={
$0(){return this.a.aZz(this.b)},
$S:0}
D.cif.prototype={
$2(d,e){var x,w,v,u
for(x=e.length,w=this.a,v=w.$flags|0,u=0;u<x;++u){v&2&&B.aj(w,9)
w.setUint8(d+u,e.charCodeAt(u))}},
$S:740}
D.cih.prototype={
$0(){var x=this
return D.hKs(x.a,x.b,x.c,x.d,x.e)},
$S:338};(function aliases(){var x=D.aMx.prototype
x.bwB=x.t})();(function installTearOffs(){var x=a._instance_0u,w=a._instance_1u
var v
x(v=D.aEQ.prototype,"gaZy","c7N",0)
x(v,"gcBB","ajd",0)
w(v,"gcdw","b0j",2)})();(function inheritance(){var x=a.mixinHard,w=a.inheritMany,v=a.inherit
w(B.hK,[D.frk,D.fre,D.fKg,D.fe7,D.fe8,D.fiD,D.fgr,D.frA,D.frB,D.frC,D.fSn,D.fSo,D.eGY])
w(B.ka,[D.fea,D.fe9,D.frE,D.frD,D.frF,D.eGZ,D.eGH,D.eGG,D.eGJ,D.cif])
w(B.aD,[D.ws,D.vX,D.xP])
w(B.ag,[D.Wt,D.as8])
w(B.ah,[D.aMx,D.bkW])
v(D.aEQ,D.aMx)
w(B.jc,[D.eGQ,D.eGP,D.eGO,D.eGR,D.eH_,D.eGT,D.eGU,D.eGV,D.eGW,D.eGS,D.eGX,D.eGN,D.eGM,D.eGK,D.eGL,D.eGI,D.eGE,D.eGF,D.cih])
v(D.buL,B.mT)
x(D.aMx,B.co)})()
B.jk(b.typeUniverse,JSON.parse('{"Wt":{"ag":[],"v":[]},"aEQ":{"ah":["Wt"]},"buL":{"aC":[]},"as8":{"ag":[],"v":[]},"bkW":{"ah":["as8"]},"Nv":{"ag":[],"v":[]}}'))
var y=(function rtii(){var x=B.aw
return{L:x("O<a39>"),V:x("O<ac>"),O:x("O<u>"),v:x("O<h9>"),C:x("O<+(L,L,L)>"),s:x("O<n>"),p:x("O<v>"),n:x("O<L>"),t:x("bn<L>"),i:x("L"),S:x("H"),H:x("~")}})();(function constants(){var x=a.makeConstList
C.bcL=new B.u(1,0.0196078431372549,0.03137254901960784,0.058823529411764705,A.q)
C.bnS=new B.u(1,0.043137254901960784,0.10196078431372549,0.2,A.q)
C.dcy=x([C.bcL,C.bnS],y.O)
C.c22=new B.a9(A.b3,A.b6,A.x,C.dcy,null,null)
C.b2p=new B.o(null,null,null,null,null,C.c22,A.n)
C.blA=new B.u(1,0.42745098039215684,0.47843137254901963,0.5764705882352941,A.q)
C.baU=new B.u(1,0.16862745098039217,0.1803921568627451,0.26666666666666666,A.q)
C.bbZ=new B.u(1,0.4823529411764706,0.29411764705882354,0.41568627450980394,A.q)
C.doz=x([C.blA,C.baU,C.bbZ],y.O)
C.c0n=new B.a9(A.ay,A.aD,A.x,C.doz,null,null)
C.b2r=new B.o(null,null,null,null,null,C.c0n,A.n)
C.aYT=new B.df(0.5,-0.6)
C.bp9=new B.u(1,0.22745098039215686,0.054901960784313725,0.10980392156862745,A.q)
C.d7S=x([C.bp9,A.eg],y.O)
C.eoa=new B.c0(C.aYT,1.3,A.x,null,0,C.d7S,null,null)
C.b2A=new B.o(null,null,null,null,null,C.eoa,A.n)
C.tv=new B.u(1,0.8392156862745098,0.7176470588235294,0.4823529411764706,A.q)
C.b0E=new B.ay(C.tv,1,A.r,-1)
C.b0R=new B.bI(A.a0,A.a0,C.b0E,A.a0)
C.b2X=new B.o(null,null,C.b0R,null,null,null,A.n)
C.adc=new B.u(0.9490196078431372,0.06666666666666667,0.07450980392156863,0.09411764705882353,A.q)
C.bat=new B.u(1,0.16470588235294117,0.16470588235294117,0.17647058823529413,A.q)
C.bax=new B.u(1,0.00784313725490196,0.01568627450980392,0.03529411764705882,A.q)
C.adE=new B.u(1,0.6588235294117647,0.6235294117647059,0.5647058823529412,A.q)
C.WO=new B.u(1,0.24705882352941178,0.5607843137254902,0.30196078431372547,A.q)
C.EK=new B.u(1,0.7215686274509804,0.6980392156862745,0.6549019607843137,A.q)
C.ael=new B.u(1,0.8784313725490196,0.6745098039215687,0.4117647058823529,A.q)
C.aeE=new B.u(1,0.00784313725490196,0.011764705882352941,0.0392156862745098,A.q)
C.F4=new B.u(1,0.06666666666666667,0.0784313725490196,0.09411764705882353,A.q)
C.bii=new B.u(1,0.011764705882352941,0.023529411764705882,0.09019607843137255,A.q)
C.B1=new B.u(1,0.09019607843137255,0.09019607843137255,0.10196078431372549,A.q)
C.B3=new B.u(1,0.054901960784313725,0.07058823529411765,0.09411764705882353,A.q)
C.bk4=new B.u(1,0.2901960784313726,0.26666666666666666,0.23529411764705882,A.q)
C.jJ=new B.u(1,0.043137254901960784,0.12156862745098039,0.29411764705882354,A.q)
C.lv=new B.u(1,0.09019607843137255,0.09019607843137255,0.10980392156862745,A.q)
C.bm9=new B.u(1,0.1843137254901961,0.43529411764705883,0.23137254901960785,A.q)
C.bmc=new B.u(1,0.08627450980392157,0.09411764705882353,0.10980392156862745,A.q)
C.bmI=new B.u(1,0.24705882352941178,0.3843137254901961,0.07058823529411765,A.q)
C.nd=new B.u(1,0.10588235294117647,0.10588235294117647,0.12156862745098039,A.q)
C.Yk=new B.u(1,1,0.9529411764705882,0.6274509803921569,A.q)
C.ahm=new B.u(1,0.8392156862745098,0.7254901960784313,0.5490196078431373,A.q)
C.bpH=new B.u(1,0.10196078431372549,0.09019607843137255,0.0784313725490196,A.q)
C.buv=new B.Q(0,0,0,1)
C.tU=new B.Q(0,0,7,0)
C.bvk=new B.Q(10,10,10,0)
C.Zk=new B.Q(10,6,10,8)
C.aiL=new B.Q(14,10,10,10)
C.amf=new B.a1(62970,"MaterialIcons",!1)
C.anc=new B.a1(983316,"MaterialIcons",!1)
C.ur=new B.a1(983617,"MaterialIcons",!1)
C.bPV=new B.ae(A.GM,13,A.ae,null,null,null)
C.bU3=new B.ae(A.fj,13,A.ae,null,null,null)
C.bLw=new B.a1(983768,"MaterialIcons",!1)
C.bUF=new B.ae(C.bLw,13,A.c,null,null,null)
C.cHi=x([A.aR,A.jt,A.r1],y.O)
C.c_b=new B.a9(A.b3,A.b6,A.x,C.cHi,null,null)
C.c_h=new B.a9(A.b3,A.b6,A.x,L.Qv,null,null)
C.d19=x([A.fe,A.dD,A.cZ],y.O)
C.c_t=new B.a9(A.b3,A.b6,A.x,C.d19,null,null)
C.d_o=x([A.dR,A.aw],y.O)
C.c0a=new B.a9(A.b3,A.b6,A.x,C.d_o,null,null)
C.Ln=new B.u(1,0.11764705882352941,0.30980392156862746,0.6392156862745098,A.q)
C.cGP=x([C.jJ,C.Ln,A.aE,A.bM],y.O)
C.dg6=x([0,0.42,0.8,1],y.n)
C.c0p=new B.a9(A.b3,A.b6,A.x,C.cGP,C.dg6,null)
C.dnG=x([A.bO,A.c,A.bL],y.O)
C.c0r=new B.a9(A.a3,A.a8,A.x,C.dnG,null,null)
C.dog=x([A.hn,A.h0],y.O)
C.c1g=new B.a9(A.b3,A.b6,A.x,C.dog,null,null)
C.dfm=x([A.dt,A.oU],y.O)
C.c1n=new B.a9(A.b3,A.b6,A.x,C.dfm,null,null)
C.c2n=new B.a9(A.b3,A.b6,A.x,H.avY,null,null)
C.daB=x([A.aM,A.al],y.O)
C.c2M=new B.a9(A.b3,A.b6,A.x,C.daB,null,null)
C.c3H=x(["Add every person","Link mums, dads, kids","Keep it for ever"],y.s)
C.aqj=x([1],y.n)
C.cgp=x([1,2,3],y.n)
C.atX=x([1,-1],y.n)
C.T9=new B.z(2,3)
C.Ta=new B.z(3,4)
C.cnv=x([A.m3,A.yx],B.aw("O<a1>"))
C.cnH=x([-0.05,0.05],y.n)
C.ecp=new B.t(26,-8)
C.ed9=new B.t(52,0)
C.eco=new B.t(26,8)
C.co4=x([A.J,C.ecp,C.ed9,C.eco],B.aw("O<t>"))
C.avL=x([A.c8,A.aR,A.dR,A.bm,A.cZ],y.O)
C.cG9=x([1,2,3,4,5,6,7],y.n)
C.eQI=new B.bj(-0.2,0.46,0.12)
C.eOn=new B.bj(0.2,0.46,0.12)
C.eP5=new B.bj(0,0.52,0.15)
C.eNG=new B.bj(0,0.7,0.1)
C.cHx=x([C.eQI,C.eOn,C.eP5,C.eNG],y.C)
C.cTb=x([A.f3,A.bM,A.M1,A.eo],y.O)
C.cUp=x([1,2.76,5.4,8.93,13.3],y.n)
C.awK=x([A.cZ,A.bI,A.c8,A.bm],y.O)
C.cVE=x([1,0.6,0.38,0.22,0.12],y.n)
C.evF=new B.z("Chairs",120)
C.evI=new B.z("Cloth",80)
C.ew_=new B.z("Delivery",25)
C.ax5=x([C.evF,C.evI,C.ew_],B.aw("O<+(n,H)>"))
C.cZX=x([1,0.7,0.45,0.28,0.16,0.1,0.06],y.n)
C.cZY=x([1,0.55,0.32,0.2,0.12,0.07],y.n)
C.e69=new D.xP("NGMY Tree Story","A family grows, one branch at a time")
C.e64=new D.xP("Coin Hero","A little coin saves up and wins the day")
C.e6c=new D.xP("Space Voyage","The NGMY rocket explores the stars")
C.e63=new D.xP("Ocean Friends","Fish, bubbles and a friendly whale")
C.e65=new D.xP("Rainy Village","Storm clouds, then a rainbow")
C.e67=new D.xP("Spark Adventure","Follow a spark round a circuit")
C.e66=new D.xP("Fireworks Night","Colour bursts over the city")
C.e6b=new D.xP("Little Train","A train rolls past the hills")
C.e68=new D.xP("Robot Disco","A robot dances to the beat")
C.e6a=new D.xP("Garden Time","Flowers grow and butterflies fly")
C.QC=x([C.e69,C.e64,C.e6c,C.e63,C.e65,C.e67,C.e66,C.e6b,C.e68,C.e6a],B.aw("O<xP>"))
C.d3a=x([1,0.6,0.45,0.3,0.22,0.15],y.n)
C.axM=x([A.c8,A.bI,A.aw,A.by,A.cZ],y.O)
C.d4l=x([1,2,3,4,5,6],y.n)
C.d5Q=x([A.hn,A.oU],y.O)
C.d5S=x([A.bj,A.aE,A.cS],y.O)
C.dxW=new D.vX("NGMY Ads","\ud83d\udce2","Every NGMY promotion, as cartoons",A.c8,-1)
C.dxU=new D.vX("Civic Registry","\ud83e\udeaa","Enroll your family in your community",A.d0,0)
C.dxX=new D.vX("Jobs","\ud83d\udcbc","Find work and get hired",A.aE,1)
C.dxZ=new D.vX("NGMY Store","\ud83d\udecd\ufe0f","African food and traditions",A.fu,2)
C.dy_=new D.vX("Kiswahili","\ud83d\udde3\ufe0f","Learn Swahili and English",A.bP,3)
C.dxY=new D.vX("Doc Scanner","\ud83d\udcc4","Scan, save and share",A.c9,4)
C.dxV=new D.vX("Invoices","\ud83e\uddfe","Professional invoices",A.bA,5)
C.dxT=new D.vX("Calendar","\ud83d\udcc5","This month, today lit up",A.aw,-2)
C.ki=x([C.dxW,C.dxU,C.dxX,C.dxZ,C.dy_,C.dxY,C.dxV,C.dxT],B.aw("O<vX>"))
C.eCJ=new B.z("Jambo! Habari yako?","Nzuri, asante!")
C.ew8=new B.z("Jina lako nani?","Jina langu ni Amina.")
C.ewR=new B.z("Karibu nyumbani!","Asante sana!")
C.eCI=new B.z("Naenda shule leo.","I am going to school.")
C.eDN=new B.z("Ninapenda kujifunza!","I love to learn!")
C.eMQ=new B.z("Maji, tafadhali.","Water, please.")
C.eAH=new B.z("Rafiki yangu mpendwa","My dear friend")
C.eFj=new B.z("Tuonane kesho!","See you tomorrow!")
C.eGd=new B.z("Pole sana, rafiki.","I am so sorry, friend.")
C.eCH=new B.z("Hongera! Umefaulu!","Congratulations! You passed!")
C.ey3=new B.z("Mimi ni mwanafunzi.","I am a student.")
C.esG=new B.z("Chakula kitamu sana!","The food is so delicious!")
C.eMq=new B.z("Safari njema!","Have a good trip!")
C.eoQ=new B.z("Unaongea Kiswahili vizuri!","You speak Swahili well!")
C.ay0=x([C.eCJ,C.ew8,C.ewR,C.eCI,C.eDN,C.eMQ,C.eAH,C.eFj,C.eGd,C.eCH,C.ey3,C.esG,C.eMq,C.eoQ],B.aw("O<+(n,n)>"))
C.ePL=new B.bj(-0.3,0.32,0.2)
C.eNM=new B.bj(-0.08,0.17,0.22)
C.eNN=new B.bj(0.14,0.14,0.2)
C.ePd=new B.bj(0.34,0.3,0.2)
C.eR8=new B.bj(0,0.32,0.26)
C.eOX=new B.bj(-0.42,0.46,0.15)
C.eR3=new B.bj(0.42,0.46,0.15)
C.ePY=new B.bj(0,0.07,0.15)
C.ay1=x([C.ePL,C.eNM,C.eNN,C.ePd,C.eR8,C.eOX,C.eR3,C.ePY],y.C)
C.h9g=new D.ws("NGMY Civic Registry","Enroll your family. Stay counted and helped together.",A.d8,A.aR)
C.h9u=new D.ws("NGMY Jobs","Find work. Get hired. Get paid.",A.d9,A.aT)
C.h9r=new D.ws("NGMY Store","African food and traditions. Support our Congolese and African community.",A.k9,A.bI)
C.h9m=new D.ws("Kiswahili School","Learn Swahili and English, step by step.",A.cN,A.nc)
C.h9j=new D.ws("Document Scanner","Scan, save and share your papers.",A.pU,A.hb)
C.h9h=new D.ws("Invoice Creator","Make professional invoices in minutes.",A.qV,A.nO)
C.h9d=new D.ws("Family Book and Tree","Write your family story. Grow your tree.",A.j5,A.La)
C.h9f=new D.ws("NGMY Wallet","Save, send and earn coins.",A.pO,A.dR)
C.h9i=new D.ws("Vault Games","Play, win and learn.",A.dK,A.bc)
C.h9s=new D.ws("Electronics Lab","Build real circuits and learn.",A.f5,A.b2)
C.h9n=new D.ws("NGMY Helper and Advisors","Friendly help, any time.",A.lq,A.cZ)
C.d9p=x([C.h9g,C.h9u,C.h9r,C.h9m,C.h9j,C.h9h,C.h9d,C.h9f,C.h9i,C.h9s,C.h9n],B.aw("O<ws>"))
C.dfn=x([A.dK,A.fe],y.O)
C.dfQ=x(["For you","Apps","Library"],y.s)
C.ayY=x([A.bx,A.bI,A.cS,A.au],y.O)
C.az2=x([-16,16],y.n)
C.Rd=x([-22,22],y.n)
C.a47=x([-24,24],y.n)
C.a49=x([-5,5],y.n)
C.az8=x([-8,8],y.n)
C.diY=x([A.aJ,A.al],y.O)
C.dj1=x([1,2,3,4,6,8],y.n)
C.djU=x([1,0.5,0.33,0.25,0.2,0.16,0.14,0.12],y.n)
C.b4U=new B.ac(0,A.G,A.aW,A.dq,14)
C.dlo=x([C.b4U],y.V)
C.dlE=x([1,2,3,4,5,6,7,8],y.n)
C.dn9=x([A.aw,A.ca,A.bI,A.be,A.d0,A.b5],y.O)
C.do9=x(["M","T","W","T","F","S","S"],y.s)
C.dpn=x([A.c,A.nR],y.O)
C.dq5=x([1,0.18,0.06],y.n)
C.e9C={"SPARK PAINTER":0,"MANDALA MAKER":1,"TITLE ANIMATOR":2,"PALETTE LAB":3,"GRAVITY TOY":4,"FIREWORK DESIGNER":5,"CIRCUIT LAB":6,"PERIODIC TABLE":7,"BODY EXPLORER":8,"SPIN THE WHEEL":9,"FOCUS TIMER":10,"MEMORY MATCH":11,"LUCKY POCKET":12,"ELECTRONICS LAB":13,"CONSTRUCTION LAB":14,"AI INVENTOR":15,"MAGNET LAB":16,"RADIO LAB":17,"POWER PLANT":18,"POWER GRID":19,"INTERNET JOURNEY":20,"ROBOT CODER":21,"BUG SMASHER":22,"ROCKET LANDER":23,"DATA SNAKE":24,"BINARY 2048":25,"SIGNAL BREAKER":26,"PASSWORD LAB":27,"WAVE LAB":28,"BUG HUNT":29,"OPTICS LAB":30,"ATOM BUILDER":31,"PIXEL TV":32}
C.aFc=new B.bu(C.e9C,["sparkle","sparkle","whoosh","click","bounce","pop","tech","lab","organic","click","tech","bubble","click","tech","tech","tech","tech","tech","tech","tech","tech","tech","pop","space","bubble","click","zap","click","tech","click","sparkle","lab","tech"],B.aw("bu<n,n>"))
C.adj=new B.u(1,0.16862745098039217,0.1843137254901961,0.21176470588235294,A.q)
C.dvx=new B.hC(A.G,1.2)
C.co8=x([A.f3,A.el,A.kz],y.O)
C.enR=new B.c0(I.xd,0.5,A.x,null,0,C.co8,null,null)
C.cE7=x([A.lW,A.n4],y.O)
C.enT=new B.c0(H.aaY,0.5,A.x,null,0,C.cE7,null,null)
C.bV9=new B.ae(A.fj,11,A.ae,null,null,null)
C.fjM=new B.F(!0,A.aQ,null,null,null,null,9,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.fGX=new B.y("Search",null,C.fjM,null,null,null,null,null,null,null,null,null)
C.cIx=x([C.bV9,A.qz,C.fGX],y.p)
C.eWf=new B.cb(A.aN,A.e,A.j,A.m,null,A.p,null,0,C.cIx,null)
C.f1K=new B.hQ(3,5,5,1.35,null)
C.bot=new B.u(1,0.9450980392156862,0.9098039215686274,0.8470588235294118,A.q)
C.f9d=new B.F(!0,C.bot,null,"serif",null,null,15,A.kd,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.fgZ=new B.F(!0,A.ae,null,null,null,null,9.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.fhB=new B.F(!0,A.aQ,null,null,null,null,9.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.Un=new B.F(!0,A.ae,null,null,null,null,12.5,null,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.aSf=new B.F(!0,A.ae,null,null,null,null,10,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.flS=new B.F(!0,A.c,null,null,null,null,8.5,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.DW=new B.F(!0,A.ae,null,null,null,null,12.5,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.fnm=new B.F(!0,A.ae,null,null,null,null,8.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.fnF=new B.F(!0,C.adE,null,null,null,null,8.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.fem=new B.F(!0,A.aB,null,null,null,null,9.5,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.fq1=new B.y("NGMY Apps",null,C.fem,null,null,null,null,null,null,null,null,null)
C.a8D=new B.F(!0,A.aB,null,null,null,null,12.5,null,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.faT=new B.F(!0,C.tv,null,null,null,null,8,A.a7,null,3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.fta=new B.y("BANG & OLUFSEN",null,C.faT,null,null,null,null,null,null,null,null,null)
C.fgJ=new B.F(!0,A.w,null,null,null,null,9,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.ftC=new B.y("Open",null,C.fgJ,null,null,null,null,null,null,null,null,null)
C.fwO=new B.y("Home",null,C.aSf,null,null,null,null,null,null,null,null,null)
C.fxP=new B.y("SAMSUNG",null,A.aRY,null,null,null,null,null,null,null,null,null)
C.fDW=new B.y("LG",null,A.wR,null,null,null,null,null,null,null,null,null)
C.fK_=new B.y("tv",null,A.qD,null,null,null,null,null,null,null,null,null)
C.feg=new B.F(!0,C.tv,null,null,null,null,8.5,null,null,2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.fM7=new B.y("OPEN",null,C.feg,null,null,null,null,null,null,null,null,null)})();(function staticFields(){$.hKr=B.T(B.aw("n"),B.aw("dK"))
$.cie=B.a([],B.aw("O<aiy>"))
$.hez=0
$.as5="music"})()};
(a=>{a["isSy5z/JZinFQ2xVisfb0/DOSyI="]=a.current})($__dart_deferred_initializers__);