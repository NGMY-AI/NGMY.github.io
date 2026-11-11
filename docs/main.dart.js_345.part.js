((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,A,H,I,K,L,G,M,N,O,P,Q,R,D={
rc(d,e,f,g,h,i){var x=new D.fA_(e,h,!0),w=x.$1(g),v=w.b.c
if(v>i&&v>0)w=x.$1(Math.max(2,g*i/v))
x=w.b
v=x.c
x=x.a.c
w.a4(d,f.aF(0,new B.u(v/2,x.gba(x)/2)))},
agO(d,e,f,g,h,i){var x,w,v,u,t,s,r,q=null
if(h<=0)return
x=d.a
J.bl(x.save())
x.translate(e.a,e.b)
d.bW(0,A.k.E(A.lw.aw(0,A.k.E(h,0,1)),0.01,1.3))
w=B.fz(q,q,q,q,B.cT(q,q,q,q,q,q,q,q,q,B.l(q,q,A.au,q,q,q,q,q,q,q,q,g,q,q,A.u,q,q,!0,q,q,q,q,q,q,q,q),f),A.a4,A.bX,q,A.dA,A.bV)
w.eg()
v=w.b
u=v.c
v=v.a.c
t=g*0.8
s=B.br(B.bK(A.I,v.gba(v)+g*0.7,u+g*1.1),new B.aP(t,t))
t=$.S()
u=B.J()
u.r=i.gp(0)
d.az(s,u)
t=new B.aF(t.r,A.ag,q,q,B.a([],y.a))
u=-g
v=s.d
r=v-1
t.D(new B.aY(u*0.3,r))
t.D(new B.aq(u*0.7,v+g*0.6))
t.D(new B.aq(g*0.2,r))
t.D(new B.bt())
r=B.J()
r.r=i.gp(0)
d.aK(t,r)
r=w.b
t=r.c
r=r.a.c
w.a4(d,new B.u(-t/2,-r.gba(r)/2))
x.restore()},
h9o(d,e,f,g){var x,w=A.k.E(Math.abs(Math.cos(g)),0.15,1),v=f*2,u=v*w,t=B.bK(e,v,u)
$.S()
x=B.J()
x.r=A.bs.gp(0)
d.dQ(t,x)
d.dQ(B.bK(e,v,u),E.yP(A.q4,f*0.18))
if(w>0.5)D.rc(d,"$",e,f*1.2,A.q4,9999)},
i2p(d,e,f,g){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=new B.e6()
k.cZ(4)
for(x=e.a,w=f-g,v=e.b,u=d.a,t=f*3,s=v*0.025,r=v*0.012,q=0;q<18;++q){p=k.ag()
o=A.k.F(w*(40+k.ag()*60)+k.ag()*v,v)
J.bl(u.save())
u.translate(p*x,o)
u.rotate((t+q)*180/3.141592653589793,0,0)
p=B.bK(A.I,r,s)
n=C.ayf[A.o.F(q,5)]
$.S()
m=new B.ao(A.Q,A.M,A.S,A.T,A.R)
m.r=n.gp(0)
l=m.G()
u.drawRect(B.bH(p),l)
l.delete()
u.restore()}},
icx(d,e,f,g){switch(A.o.F(f,11)){case 0:D.i21(d,e,g)
break
case 1:D.i57(d,e,g)
break
case 2:D.iav(d,e,g)
break
case 3:D.iaK(d,e,g)
break
case 4:D.i9E(d,e,g)
break
case 5:D.i4O(d,e,g)
break
case 6:D.i1o(d,e,g)
break
case 7:D.ibx(d,e,g)
break
case 8:D.i3N(d,e,g)
break
case 9:D.i5b(d,e,g)
break
default:D.i4p(d,e,g)}},
i21(a2,a3,a4){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null,d=a3.a,a0=a3.b,a1=a0*0.94
for(x=a2.a,w=d*0.12,v=d*0.06,u=a0*0.06,t=y.a,s=0;s<6;++s){r=d*(0.04+s*0.17)
q=a0*(0.18+0.08*A.o.F(s,3))
p=a1-q
o=r+w
n=A.c.j(0.2)
m=$.S()
l=new B.ao(A.Q,A.M,A.S,A.T,A.R)
l.r=n.gp(0)
k=l.G()
x.drawRect(B.bH(new B.a3(r,p,o,p+q)),k)
k.delete()
l=B.a([],t)
m=new B.aF(m.r,A.ag,e,e,l)
l.push(new B.aY(r-3,p))
l.push(new B.aq(r+v,p-u))
l.push(new B.aq(o+3,p))
l.push(new B.bt())
p=new B.ao(A.Q,A.M,A.S,A.T,A.R)
p.r=A.c.j(0.3).gp(0)
k=p.G()
p=m.gbu().a.snapshot()
x.drawPath((m.e=new B.cd(p)).a,k)
k.delete()}w=A.w.j(0.18)
$.S()
v=B.J()
v.r=w.gp(0)
a2.aQ(new B.a3(0,a1,0+d,a1+(a0-a1)),v)
j=Math.cos(a4*1.6)
i=Math.min(d*0.46,a0*0.95)
h=i*0.62
J.bl(x.save())
v=d*0.58
x.translate(v,a0*0.45)
a2.pc(0,Math.max(0.08,Math.abs(j)),1)
w=h*0.1
g=B.br(B.bK(A.I,h,i),new B.aP(w,w))
u=B.J()
t=j>=0
u.sam(new B.a9(A.a5,A.a8,A.x,t?C.dw8:C.dlJ,e,e).aA(0,new B.a3(g.a,g.b,g.c,g.d)))
a2.az(g,u)
a2.az(g,E.yP(A.d7,2))
if(t){u=-i
t=u*0.28
p=-h
o=p*0.05
n=h*0.22
m=B.J()
m.r=F.mH.gp(0)
a2.ad(new B.u(t,o),n,m)
n=B.bY(new B.u(t,o),n)
o=B.J()
o.r=F.lA.gp(0)
a2.e4(n,3.141592653589793,3.141592653589793,!0,o)
for(u*=0.05,t=p*0.25,o=h*0.07,s=0;s<3;++s){n=t+s*h*0.16
n=B.br(new B.a3(u,n,u+i*(0.42-s*0.06),n+o),A.hH)
m=new B.ao(A.Q,A.M,A.S,A.T,A.R)
m.r=A.du.gp(0)
k=m.G()
x.drawRRect(B.e7(n),k)
k.delete()}D.rc(a2,"COMMUNITY ID",new B.u(0,p*0.4),w,A.d7,i*0.8)}else D.rc(a2,"\u2605 NGMY \u2605",A.I,h*0.16,A.c,i*0.8)
x.restore()
w=a4>2.6
if(w){s=A.k.E((a4-2.6)/0.35,0,1)
J.bl(x.save())
x.translate(v,a0*0.52)
a2.io(0,-0.25)
a2.bW(0,2.2-1.2*A.et.aw(0,s))
f=B.bK(A.I,h*0.3,i*0.7)
a2.az(B.br(f,A.hI),E.yP(A.cT.j(s),3))
D.rc(a2,"\u2713 REGISTERED",A.I,h*0.13,A.cT.j(s),(f.c-f.a)*0.9)
x.restore()}x=a4*5
v=Math.sin(x)
x=Math.sin(x)
w=w&&a4<4
E.B2(a2,new B.u(d*0.2,a1),a0*0.7,a4,!1,Math.abs(x)*a0*0.015,0,A.cT,F.mH,w,(v+1)/2)
if(a4>3)D.i2p(a2,new B.av(d,a0*0.9),a4,3)},
i57(a6,a7,a8){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=a7.a,a3=a7.b,a4=a3*0.94,a5=A.w.j(0.2)
$.S()
x=B.J()
x.r=a5.gp(0)
a6.aQ(new B.a3(0,a4,0+a2,a4+(a3-a4)),x)
w=a2*0.62
v=a2*0.3
u=a3*0.62
x=a4-u
a5=w+v
t=B.J()
t.r=A.bo.gp(0)
a6.aQ(new B.a3(w,x,a5,x+u),t)
for(t=a6.a,s=a8*1.5,r=v*0.2,q=u*0.1,p=0;p<4;++p)for(o=x+u*(0.1+p*0.17),n=o+q,m=0;m<3;++m){l=w+v*(0.12+m*0.3)
k=A.o.F(p+m+A.k.bf(s),3)===0?A.dB:A.aJ.j(0.6)
$.S()
j=new B.ao(A.Q,A.M,A.S,A.T,A.R)
j.r=k.gp(0)
i=j.G()
t.drawRect(B.bH(new B.a3(l,o,l+r,n)),i)
i.delete()}s=w+v*0.38
r=u*0.16
q=a4-r
$.S()
o=B.J()
o.r=A.fV.gp(0)
a6.aQ(new B.a3(s,q,s+v*0.24,q+r),o)
o=x-a3*0.09
r=a3*0.02
o=B.br(new B.a3(w,o,a5,o+a3*0.08),new B.aP(r,r))
a5=B.J()
a5.r=A.ay.gp(0)
a6.az(o,a5)
a5=a3*0.05
o=a3*0.06
D.rc(a6,"JOBS",new B.u(w+v/2,x-a5),o,A.c,9999)
h=A.k.E(a8/2.8,0,1)
x=a2*0.12
g=x+(w+v*0.3-x)*A.dw.aw(0,h)
x=h<1
f=x?Math.abs(Math.sin(a8*12))*a3*0.02:0
s=h>=1
q=s?(Math.sin(a8*6)+1)/2:0
E.B2(a6,new B.u(g,a4),a3*0.6,a8,!1,f,2,A.b7,A.oc,s,q)
if(x){x=B.br(B.bK(new B.u(g-a3*0.12,a4-a3*0.17-f),a3*0.075,a3*0.1),A.hH)
q=B.J()
q.r=A.fV.gp(0)
a6.az(x,q)}if(s){x=a8-2.8
D.agO(a6,new B.u(g+a5,a4-a3*0.78),"Hired! \ud83c\udf89",a3*0.07,x/0.4,A.c)
for(a5=x*0.8,x=a4-a3*0.5,s=a3*0.03,q=a8*8,e=0;e<6;++e){d=A.k.F(a5+e*0.17,1)
D.h9o(a6,new B.u(g+Math.sin(e*2.1)*a3*0.2,x-d*a3*0.25),s,q+e)}}a5=a2*0.04
x=a5+v
s=o+a3*0.3
r=B.br(new B.a3(a5,o,x,s),new B.aP(r,r))
$.S()
q=B.J()
q.r=A.iq.gp(0)
a6.az(r,q)
for(x-=a5,r=a5+x*0.08,s-=o,q=x*0.84,n=s*0.24,a5+=x*0.14,x*=0.5,l=s*0.05,e=0;e<3;++e){k=(1-A.k.E((a8-e*0.5)/0.5,0,1))*a2*0.3
j=r+k
a0=e*0.3
a1=o+s*(0.08+a0)
a1=B.br(new B.a3(j,a1,j+q,a1+n),A.hH)
j=new B.ao(A.Q,A.M,A.S,A.T,A.R)
j.r=A.c.gp(0)
i=j.G()
t.drawRRect(B.e7(a1),i)
i.delete()
k=a5+k
a0=o+s*(0.14+a0)
a1=new B.ao(A.Q,A.M,A.S,A.T,A.R)
a1.r=A.bL.gp(0)
i=a1.G()
t.drawRect(B.bH(new B.a3(k,a0,k+x,a0+l)),i)
i.delete()}},
iav(a1,a2,a3){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=a2.a,e=a2.b,d=e*0.94,a0=A.fV.j(0.6)
$.S()
x=B.J()
x.r=a0.gp(0)
a1.aQ(new B.a3(0,d,0+f,d+(e-d)),x)
w=f*0.3
v=f*0.66
for(a0=v/12,x=e*0.14,u=a0+1,t=x+e*0.12,s=a1.a,r=0;r<12;++r){q=w+a0*r
p=new B.ao(A.Q,A.M,A.S,A.T,A.R)
p.r=C.aBx[A.o.F(r,4)].gp(0)
o=p.G()
s.drawRect(B.bH(new B.a3(q,x,q+u,t)),o)
o.delete()}for(u=e*0.2,t=e*0.1,q=u+t,r=0;r<12;++r){p=w+a0*r
n=new B.ao(A.Q,A.M,A.S,A.T,A.R)
n.r=C.aBx[A.o.F(r,4)].gp(0)
o=n.G()
s.drawArc.apply(s,[B.bH(new B.a3(p,u,p+a0,q)),0,180,!0,o])
o.delete()}a0=w+4
u=e*0.3
q=u+(d-u)
p=B.J()
p.r=A.fV.gp(0)
a1.aQ(new B.a3(a0,u,a0+4,q),p)
p=w+v
a0=p-8
n=B.J()
n.r=A.fV.gp(0)
a1.aQ(new B.a3(a0,u,a0+4,q),n)
n=e*0.68
q=n+e*0.26
a0=B.br(new B.a3(w,n,p,q),A.ii)
u=B.J()
u.r=A.iq.gp(0)
a1.az(a0,u)
for(a0=p-w,u=a0/6,p=n+2,a0/=12,q=p+(q-n-4),r=0;r<6;++r){m=w+u*r
l=new B.ao(A.Q,A.M,A.S,A.T,A.R)
l.r=((r&1)===0?A.bB:A.bs).j(0.9).gp(0)
o=l.G()
s.drawRect(B.bH(new B.a3(m,p,m+a0,q)),o)
o.delete()}a0=w+v*0.2
u=e*0.62
k=new B.u(a0,u)
q=e*0.17
p=e*0.03
m=B.br(B.bK(k,e*0.11,q),new B.aP(p,p))
l=B.J()
l.r=A.cr.gp(0)
a1.az(m,l)
l=-e
q=B.bK(k.a7(0,new B.u(0,l*0.05)),e*0.04,q)
m=B.J()
m.r=A.fs.gp(0)
a1.dQ(q,m)
for(q=a3*0.8,l*=0.08,m=e*0.015,r=0;r<3;++r){j=A.k.F(q+r*0.33,1)
i=Math.sin(j*6+r)
h=j*e
g=new B.ao(A.Q,A.M,A.S,A.T,A.R)
g.r=A.c.j(0.6*(1-j)).gp(0)
o=g.G()
s.drawCircle(a0+i*5,u+(l-h*0.14),m+h*0.02,o)
o.delete()}for(a0=w+v*0.5,q=e*0.018,r=0;r<5;++r){m=B.bK(new B.u(a0,u),x,e*(0.1+r*0.01))
l=new B.ao(A.Q,A.M,A.S,A.T,A.R)
l.b=A.a9
l.c=q
l.r=A.bs.gp(0)
l.d=A.by
o=l.G()
s.drawArc.apply(s,[B.bH(m),(0.4+r*0.1)*57.29577951308232,108.8619810748564,!1,o])
o.delete()}for(a0=e*0.63,x=e*0.032,r=0;r<4;++r){u=A.o.F(r,2)
q=A.o.ao(r,2)
m=(r&1)===0?A.cd:A.vX
l=new B.ao(A.Q,A.M,A.S,A.T,A.R)
l.r=m.gp(0)
o=l.G()
s.drawCircle(w+v*(0.72+0.06*u)+r*e*0.02,a0+q*e*0.035,x,o)
o.delete()}E.B2(a1,new B.u(f*0.14,d),n,a3,!1,0,1,A.bs,H.ahh,!0,(Math.sin(a3*5)+1)/2)
for(a0=a3*0.45,x=f*0.16,u=e*0.45,s=e*0.06,r=0;r<5;++r){j=A.k.F(a0+r*0.2,1)
D.rc(a1,"\u2665",new B.u(x+Math.sin(j*5+r)*e*0.08+r*e*0.03,u-j*e*0.4),s,A.aw.j(1-j),9999)}a0=w+v/2
x=e*0.08
p=B.br(B.bK(new B.u(a0,x),t,v*0.7),new B.aP(p,p))
$.S()
t=B.J()
t.r=A.au.gp(0)
a1.az(p,t)
D.rc(a1,"NGMY STORE \xb7 African food",new B.u(a0,x),e*0.05,A.dB,v*0.64)},
iaK(d,e,f){var x,w,v,u,t,s,r,q=e.a,p=e.b,o=p*0.94,n=A.w.j(0.2)
$.S()
x=B.J()
x.r=n.gp(0)
d.aQ(new B.a3(0,o,0+q,o+(p-o)),x)
w=A.o.F(A.o.ao(Date.now(),6000)*3+A.o.E(A.k.bf(f/2),0,2),14)
v=A.k.F(f,2)
u=v<1
x=p*0.68
n=u?(Math.sin(f*8)+1)/2:0
t=u?Math.abs(Math.sin(f*8))*p*0.01:0
E.B2(d,new B.u(q*0.25,o),x,f,!1,t,2,A.cT,F.mH,u,n)
n=u?0:(Math.sin(f*8)+1)/2
t=u?0:Math.abs(Math.sin(f*8))*p*0.01
E.B2(d,new B.u(q*0.75,o),x,f,!1,t,0,A.bl,C.agc,!u,n)
s=new D.fzU(p,q)
n=p*0.15
if(u){x=C.aAB[w].a
D.agO(d,new B.u(q*0.27,n),x,s.$1(x),v/0.25,A.p7)}else{x=C.aAB[w].b
D.agO(d,new B.u(q*0.73,n),x,s.$1(x),(v-1)/0.25,A.eA)}for(n=q*0.5,x=p*0.07,t=f*2,r=0;r<3;++r)D.rc(d,"\u2192",new B.u(n,p*(0.35+r*0.1)),x,A.c.j(0.3+0.5*A.k.F(t+r,1)),9999)},
i9E(a1,a2,a3){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=a2.a,e=a2.b,d=e*0.94,a0=A.w.j(0.2)
$.S()
x=B.J()
x.r=a0.gp(0)
a1.aQ(new B.a3(0,d,0+f,d+(e-d)),x)
x=f*0.3
w=B.bK(new B.u(f*0.6,e*0.45),e*0.7,Math.min(x,e*0.55))
a0=B.br(w,A.ii)
v=B.J()
v.r=A.c.gp(0)
a1.az(a0,v)
for(a0=w.d,v=w.b,u=a0-v,t=u*0.03,s=a1.a,r=w.a,q=w.c,p=q-r,o=r+p*0.1,n=0;n<9;++n){m=v+u*(0.1+n*0.095)
l=A.o.F(n,3)===2?0.5:0.8
k=new B.ao(A.Q,A.M,A.S,A.T,A.R)
k.r=A.cq.gp(0)
j=k.G()
s.drawRect(B.bH(new B.a3(o,m,o+p*l,m+t)),j)
j.delete()}i=A.k.E(a3/3,0,1)
h=v+u*i
if(i<1){a0=r-8
u=h-2
p=a0+(p+16)
t=B.J()
t.r=A.ba.gp(0)
a1.aQ(new B.a3(a0,u,p,u+4),t)
t=A.ba.j(0.18)
u=B.J()
u.r=t.gp(0)
a1.aQ(new B.a3(a0,v,p,v+(h-v)),u)}else{n=A.k.E((a3-3)/0.4,0,1)
u=A.lw.aw(0,n)
t=B.J()
t.r=A.bB.gp(0)
a1.ad(new B.u(q,v),e*0.08*u,t)
D.rc(a1,"PDF",new B.u(q,v),e*0.045*n,A.c,9999)
v=e*0.06
D.rc(a1,"\u2713 Saved",new B.u(w.gbL().a,a0+v),v,A.c.j(n),9999)}a0=a3*4
v=Math.sin(a0)
E.B2(a1,new B.u(f*0.2,d),e*0.66,a3,!0,Math.abs(Math.sin(a0))*e*0.01,0,A.cw,F.mH,!1,(v+1)/2)
g=B.bK(new B.u(x,e*0.3),e*0.18,e*0.1)
x=e*0.02
x=B.br(g,new B.aP(x,x))
v=B.J()
v.r=A.au.gp(0)
a1.az(x,v)
v=e*0.015
v=B.br(g.cr(-3),new B.aP(v,v))
x=A.ba.j(0.35+0.3*Math.sin(a3*6))
a0=B.J()
a0.r=x.gp(0)
a1.az(v,a0)},
i4O(a6,a7,a8){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=a7.a,a3=a7.b,a4=a3*0.94,a5=A.w.j(0.2)
$.S()
x=B.J()
x.r=a5.gp(0)
a6.aQ(new B.a3(0,a4,0+a2,a4+(a3-a4)),x)
w=B.bK(new B.u(a2*0.62,a3*0.47),a3*0.8,Math.min(a2*0.4,a3*0.75))
x=B.br(w,A.mZ)
a5=B.J()
a5.r=A.c.gp(0)
a6.az(x,a5)
a5=w.a
x=w.c
v=x-a5
u=w.b
t=w.d-u
D.rc(a6,"INVOICE",new B.u(a5+v*0.3,u+t*0.09),t*0.07,A.d7,9999)
for(s=a6.a,r=v*0.08,q=a5+r,p=t*0.045,o=q+v*0.5,n=x-v*0.17,m=t*0.02,l=t*0.06,k=a8-0.5,j=0,i=0;i<3;++i){h=A.k.E((k-i*0.6)/0.4,0,1)
if(h<=0)continue
j+=C.azC[i].b
g=u+t*(0.24+i*0.14)
J.bl(s.save())
s.translate((1-h)*30,0)
f=A.cq.j(h)
$.S()
e=new B.ao(A.Q,A.M,A.S,A.T,A.R)
e.r=f.gp(0)
d=e.G()
s.drawRect(B.bH(new B.a3(q,g,o,g+p)),d)
d.delete()
D.rc(a6,"$"+C.azC[i].b,new B.u(n,g+m),l,A.au.j(h),9999)
s.restore()}p=u+t*0.7
a6.bo(new B.u(q,p),new B.u(x-r,p),E.yP(A.dm,1.4))
D.rc(a6,"TOTAL  $"+j,new B.u(w.gbL().a,u+t*0.78),t*0.075,A.au,v*0.8)
x=a8>2.8
if(x){r=a8-2.8
i=A.k.E(r/0.3,0,1)
J.bl(s.save())
s.translate(w.gbL().a,u+t*0.55)
a6.io(0,-0.3)
a6.bW(0,2-A.et.aw(0,i))
a6.az(B.br(B.bK(A.I,t*0.17,v*0.6),A.hI),E.yP(A.cT.j(i),3.5))
D.rc(a6,"PAID",A.I,t*0.11,A.cT.j(i),9999)
s.restore()
for(v=r*0.7,a5-=a3*0.05,u=a3*0.7,t=a3*0.03,s=a8*8,a0=0;a0<6;++a0){a1=A.k.F(v+a0*0.17,1)
D.h9o(a6,new B.u(a5+Math.sin(a0*2)*a3*0.1,u-a1*a3*0.5),t,s+a0)}}a5=x?(Math.sin(a8*6)+1)/2:0
E.B2(a6,new B.u(a2*0.2,a4),a3*0.66,a8,!0,0,1,A.bE,A.oc,x,a5)},
hBo(d,e,f,g){var x,w=B.bK(e,f*0.62,f*2.5),v=f*0.31,u=B.br(w,new B.aP(v,v))
$.S()
x=B.J()
x.r=A.c.gp(0)
d.az(u,x)
d.az(B.br(w,new B.aP(v,v)),E.yP(A.bE,f*0.05))
D.rc(d,"\u2665 "+g,e,f*0.4,A.pW,f*2.2)},
z0(d,e,f,g,a0,a1,a2){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
if(a2<=0)return
x=new D.fTo(e,f,g)
w=A.k.cO(22*A.k.E(a2,0,1))
for(v=a1-a0,u=d.a,t=e,s=1;s<=w;++s,t=q){r=Math.min(s/22,A.k.E(a2,0,1))
q=x.$1(r)
$.S()
p=new B.ao(A.Q,A.M,A.S,A.T,A.R)
p.b=A.a9
o=p.c=a0+v*r
p.r=A.oc.gp(0)
p.d=A.by
n=p.G()
p=t.a
m=t.b
l=q.a
k=q.b
u.drawLine.apply(u,[p,m,l,k,n])
n.delete()
j=-o*0.18
i=B.ar(A.oc,A.c,0.18)
i.toString
h=new B.ao(A.Q,A.M,A.S,A.T,A.R)
h.b=A.a9
h.c=o*0.28
h.r=i.gp(0)
h.d=A.by
n=h.G()
u.drawLine.apply(u,[p+j,m+0,l+j,k+0,n])
n.delete()}},
imE(d,e,f,g){var x,w,v,u,t,s
for(x=g*0.45,w=e.a,v=g*2,u=e.b,t=0;t<7;++t){s=A.k.F(x+t/7,1)
D.rc(d,"\u2665",new B.u(w+Math.sin(t*2.3+v)*f*0.12+(t-3.5)*f*0.03,u-s*f*0.45),f*(0.04+0.02*A.o.F(t,3)),B.ar(A.bE,A.i1,A.o.F(t,2)).j((1-s)*0.9),9999)}},
i1o(b4,b5,b6){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=null,a8=b5.a,a9=b5.b,b0=a9*0.94,b1=A.dY.j(0.7),b2=$.S(),b3=B.J()
b3.r=b1.gp(0)
b4.aQ(new B.a3(0,b0,0+a8,b0+(a9-b0)),b3)
x=new D.fmk(b6)
w=new D.fmh()
v=Math.min(a8*0.34,a9*0.62)
b3=a8*0.64
b1=v*0.2
u=b0-b1
t=new B.u(b3,u)
s=v*0.5
r=v*0.08
r=B.br(B.bK(t,s,v*2.15),new B.aP(r,r))
q=B.J()
q.r=A.hP.gp(0)
b4.az(r,q)
b2=b2.r
q=y.a
p=new B.aF(b2,A.ag,a7,a7,B.a([],q))
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
p.D(new B.bt())
o=B.J()
o.r=A.fU.gp(0)
b4.aK(p,o)
h=new B.aF(b2,A.ag,a7,a7,B.a([],q))
h.D(new B.aY(b3,r))
s=b3+s
r=b3+v
h.D(new B.c5(s,m,r,j))
h.D(new B.aq(r,i))
h.D(new B.c5(s,l,b3,k))
h.D(new B.bt())
k=B.J()
k.r=A.i2.gp(0)
b4.aK(h,k)
for(b2=v*0.85,s=b3-b2,r=u-v*0.06,q=b3-b1,u-=v*0.1,o=b4.a,b1=b3+b1,b2=b3+b2,g=0;g<3;++g){b3=g*v*0.06
m=r+b3
b3=u+b3
l=new B.ao(A.Q,A.M,A.S,A.T,A.R)
l.b=A.a9
l.c=1.4
l.r=C.ajI.gp(0)
l.d=A.by
f=l.G()
o.drawLine.apply(o,[s,m,q,b3,f])
f.delete()
l=new B.ao(A.Q,A.M,A.S,A.T,A.R)
l.b=A.a9
l.c=1.4
l.r=C.ajI.gp(0)
l.d=A.by
f=l.G()
o.drawLine.apply(o,[b1,b3,b2,m,f])
f.delete()}e=w.$1(x.$2(0.2,1))
b1=t.aF(0,new B.u(0,n))
b2=b6*4
b3=Math.sin(b2)
u=B.J()
u.sam(new B.c_(A.A,0.5,A.x,a7,0,B.a([A.dB.j(0.6*e),A.L],y.c),a7,a7).aA(0,B.bY(t.aF(0,new B.u(0,n)),v*0.7)))
b4.ad(b1,v*(0.5+0.1*b3)*e,u)
d=t.aF(0,new B.u(0,v*0.12))
a0=new D.fmj(t,a9,d)
a1=w.$1(x.$2(0.5,1.1))
a2=w.$1(x.$2(1.3,1.2))
for(b1=b6*2,a3=0;a3<4;++a3){b3=C.cMD[a3]
a4=b3.a
u=a0.$2(a4,b3.b)
s=Math.sin(b1+a4*9)
r=new B.ao(A.Q,A.M,A.S,A.T,A.R)
r.r=A.cT.j(0.9).gp(0)
f=r.G()
o.drawCircle(u.a,u.b,a9*b3.c*a2+s*1.2,f)
f.delete()}D.z0(b4,d,d.a7(0,new B.u(0,-a9*0.08)),a0.$2(0,0.22),a9*0.05,a9*0.035,a1)
a5=w.$1(x.$2(1.2,0.8))
b1=a9*0.032
b3=a9*0.02
D.z0(b4,a0.$2(0,0.22),a0.$2(-0.06,0.28),a0.$2(-0.2,0.36),b1,b3,a5)
D.z0(b4,a0.$2(0,0.22),a0.$2(0.06,0.28),a0.$2(0.2,0.36),b1,b3,a5)
a6=w.$1(x.$2(2.4,0.7))
D.z0(b4,a0.$2(0,0.22),a0.$2(0,0.4),a0.$2(0,0.57),a9*0.03,a9*0.016,a6)
b3=new D.fmi(x,b4,b6)
b1=a9*0.088
b3.$5(2,"Mama",a0.$2(-0.2,0.36),b1,1.9)
b3.$5(3,"Baba",a0.$2(0.2,0.36),b1,2.4)
b3.$5(4,"Dada",a0.$2(0,0.57),a9*0.08,3)
if(b6>3.6)D.imE(b4,a0.$2(0,0.36),a9,b6-3.6)
b1=a8*0.2
b3=Math.sin(b2)
E.B2(b4,new B.u(b1,b0),a9*0.66,b6,!1,Math.abs(Math.sin(b2))*a9*0.01,2,A.aD,F.mH,b6>3,(b3+1)/2)
D.agO(b4,new B.u(b1,a9*0.1),"My tree!",a9*0.06,x.$2(3,0.4),A.c)},
ibx(d,e,f){var x,w,v,u,t,s,r,q,p,o,n=e.a,m=e.b,l=m*0.94,k=A.w.j(0.2)
$.S()
x=B.J()
x.r=k.gp(0)
d.aQ(new B.a3(0,l,0+n,l+(m-l)),x)
w=A.k.bf(A.k.E(f/5.5,0,1)*9)+1
for(v=n*0.62,k=l-m*0.03,x=m*0.26,u=m*0.07,t=d.a,s=0;s<w;++s){r=k-s*m*0.055
q=B.bK(new B.u(v,r),u,x)
p=new B.ao(A.Q,A.M,A.S,A.T,A.R)
p.r=A.bs.gp(0)
o=p.G()
t.drawOval(B.bH(q),o)
o.delete()
r=B.bK(new B.u(v,r),u,x)
q=new B.ao(A.Q,A.M,A.S,A.T,A.R)
q.b=A.a9
q.c=2
q.r=A.q4.gp(0)
q.d=A.by
o=q.G()
t.drawOval(B.bH(r),o)
o.delete()}k=m*0.1
D.h9o(d,new B.u(v,k+A.k.F(f*1.6,1)*(l-u-w*m*0.055-k)),m*0.05,f*8)
k=m*0.08
D.rc(d,"$"+w*25,new B.u(v,k),k,A.dB,9999)
k=f*5
u=Math.sin(k)
E.B2(d,new B.u(n*0.25,l),m*0.66,f,!1,Math.abs(Math.sin(k))*m*0.012,1,A.cw,F.mH,!0,(u+1)/2)},
i3N(d,a0,a1){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=a0.a,g=a0.b,f=g*0.94,e=A.w.j(0.2)
$.S()
x=B.J()
x.r=e.gp(0)
d.aQ(new B.a3(0,f,0+h,f+(g-f)),x)
for(e=d.a,x=g*0.012,w=g*0.55,v=a1*4,u=a1*2,t=g*0.15,s=g*0.03,r=0;r<3;r=n){q=Math.sin(v+r*1.7)
J.bl(e.save())
e.translate(h*(0.5+0.14*r),w-Math.abs(q)*g*0.3)
e.rotate((u+r)*180/3.141592653589793,0,0)
q=B.br(B.bK(A.I,t,t),new B.aP(s,s))
p=new B.ao(A.Q,A.M,A.S,A.T,A.R)
p.r=A.c.gp(0)
o=p.G()
e.drawRRect(B.e7(q),o)
o.delete()
n=r+1
q=n*2
p=r===0
m=0
for(;;){if(!(m<q-(p?1:0)))break
l=m*2.1
k=Math.cos(l)
l=Math.sin(l)
j=new B.ao(A.Q,A.M,A.S,A.T,A.R)
j.r=A.bk.gp(0)
o=j.G()
e.drawCircle(k*g*0.04,l*g*0.04,x,o)
o.delete();++m}e.restore()}for(e=a1*0.6,w=g*0.25,v=g*0.06,r=0;r<5;++r){i=A.k.F(e+r*0.2,1)
D.rc(d,"\u2605",new B.u(h*(0.45+r*0.1),w-i*g*0.2),v,A.dB.j(1-i),9999)}e=h*0.22
w=a1*6
v=Math.sin(w)
E.B2(d,new B.u(e,f),g*0.66,a1,!0,Math.abs(Math.sin(w))*g*0.015,0,A.cd,F.mH,!0,(v+1)/2)
v=f-g*0.28
s=B.br(B.bK(new B.u(e,v),g*0.07,g*0.16),new B.aP(s,s))
$.S()
w=B.J()
w.r=A.cr.gp(0)
d.az(s,w)
w=B.J()
w.r=A.aw.gp(0)
d.ad(new B.u(e+g*0.05,v),x,w)},
i5b(d,e,a0){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=e.a,j=e.b,i=j*0.94,h=A.w.j(0.2),g=$.S(),f=B.J()
f.r=h.gp(0)
d.aQ(new B.a3(0,i,0+k,i+(j-i)),f)
f=k*0.42
h=j*0.18
x=j*0.08
w=B.br(new B.a3(f,h,f+k*0.5,h+j*0.5),new B.aP(x,x))
v=new B.aF(g.r,A.ag,null,null,B.a([],y.a))
v.D(new B.iV(w))
d.aK(v,E.yP(A.c.j(0.5),4))
u=new B.Tj(new B.rs(B.xz(v),!1,B.a([],y.C))).gI(0)
for(h=a0*0.18,g=u.a,x=u.b,t=g.e,s=j*0.016,r=d.a,q=0;q<10;++q){p=A.k.F(h+q/10,1)
g.ii()
o=t[x].b
o===$&&B.c()
o=o.a.length()
g.ii()
o=t[x].Hh(p*o).a
p=new B.ao(A.Q,A.M,A.S,A.T,A.R)
p.r=A.dB.gp(0)
n=p.G()
r.drawCircle(o.a,o.b,s,n)
n.delete()}m=a0>1.5
h=j*0.43
l=new B.u(k*0.92,h)
if(m){g=A.dB.j(0.4+0.2*Math.sin(a0*8))
x=B.J()
x.r=g.gp(0)
x.z=A.zO
d.ad(l,j*0.2,x)}g=j*0.07
x=m?A.p7:A.bL
t=B.J()
t.r=x.gp(0)
d.ad(l,g,t)
h=B.br(B.bK(new B.u(f,h),j*0.2,j*0.1),A.ii)
t=B.J()
t.r=A.cT.gp(0)
d.az(h,t)
D.rc(d,"+",new B.u(f,j*0.36),g,A.c,9999)
h=m?(Math.sin(a0*6)+1)/2:0
f=m?Math.abs(Math.sin(a0*6))*j*0.012:0
E.B2(d,new B.u(k*0.2,i),j*0.68,a0,!1,f,0,A.bP,F.mH,m,h)
if(m)D.agO(d,new B.u(k*0.24,j*0.16),"It works!",g,(a0-1.5)/0.4,A.c)},
i4p(d,a0,a1){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=a0.a,g=a0.b,f=g*0.94,e=A.w.j(0.2)
$.S()
x=B.J()
x.r=e.gp(0)
d.aQ(new B.a3(0,f,0+h,f+(g-f)),x)
w=A.k.E((a1-0.3)/0.4,0,1)
v=A.k.E((a1-1.8)/0.4,0,1)
x=g*0.2
e=g*0.065
D.agO(d,new B.u(h*0.3,x),"How do I enroll?",e,w,A.p7)
if(a1>1&&a1<1.8)for(u=h*0.72,t=g*0.38,s=a1*9,r=g*0.015,q=d.a,p=0;p<3;++p){o=Math.sin(s+p)
n=new B.ao(A.Q,A.M,A.S,A.T,A.R)
n.r=A.c.gp(0)
m=n.G()
q.drawCircle(u+p*g*0.05,t-Math.abs(o)*g*0.02,r,m)
m.delete()}D.agO(d,new B.u(h*0.7,g*0.38),"Tap Civic Registry!",e,v,A.eA)
E.B2(d,new B.u(h*0.2,f),g*0.62,a1,!1,0,2,A.aw,F.mH,a1<1,0)
l=h*0.78
k=f-g*0.28
e=g*0.04
x=B.br(B.bK(new B.u(l,k),g*0.22,x),new B.aP(e,e))
u=B.J()
u.r=A.aN.gp(0)
d.az(x,u)
u=g*0.18
x=k-u
e=B.br(B.bK(new B.u(l,x),g*0.14,u),new B.aP(e,e))
u=B.J()
u.r=A.cq.gp(0)
d.az(e,u)
for(e=d.a,u=a1*1.1,t=g*0.02,j=0;j<2;++j){i=F.hd[j]
s=A.k.F(u,1)>0.08?A.b8:A.eP
r=new B.ao(A.Q,A.M,A.S,A.T,A.R)
r.r=s.gp(0)
m=r.G()
e.drawCircle(l+i*g*0.04,x,t,m)
m.delete()}d.bo(new B.u(l,k-g*0.25),new B.u(l,k-g*0.3),E.yP(A.ac,3))
e=B.J()
e.r=A.aw.gp(0)
d.ad(new B.u(l,k-g*0.31),g*0.015,e)},
fA_:function fA_(d,e,f){this.a=d
this.b=e
this.c=f},
fzU:function fzU(d,e){this.a=d
this.b=e},
fTo:function fTo(d,e,f){this.a=d
this.b=e
this.c=f},
fmk:function fmk(d){this.a=d},
fmh:function fmh(){},
fmj:function fmj(d,e,f){this.a=d
this.b=e
this.c=f},
fmi:function fmi(d,e,f){this.a=d
this.b=e
this.c=f},
aPm(d,e,f,g,h,i,j,k){var x=new D.fqT(e,h,i,k),w=x.$1(g),v=w.b.c
if(v>j&&v>0)w=x.$1(Math.max(2,g*j/v))
x=w.b
v=x.c
x=x.a.c
w.a4(d,f.aF(0,new B.u(v/2,x.gba(x)/2)))},
LJ(d,e,f,a0){var x,w,v,u,t,s,r,q,p,o,n,m=A.o.F(a0==null?A.k.bf(f/6):a0,11),l=A.k.F(f,6),k=C.dfy[m],j=e.a,i=e.b,h=0+j,g=0+i
$.S()
x=B.J()
x.sam(new B.a9(A.az,A.aE,A.x,B.a([k.c,k.d],y.c),null,null).aA(0,new B.a3(0,0,h,g)))
d.aQ(new B.a3(0,0,h,g),x)
w=i*(j>=i?0.7:0.6)
g=d.a
J.bl(g.save())
g.clipRect(B.bH(new B.a3(0,0,h,0+w)),$.mz()[1],!0)
D.icx(d,new B.av(j,w),m,l)
g.restore()
v=i-w
x=A.w.j(0.3)
u=B.J()
u.r=x.gp(0)
d.aQ(new B.a3(0,w,h,w+v),u)
t=A.cu.aw(0,A.k.E((l-0.2)/0.5,0,1))
J.bl(g.save())
g.translate((1-t)*j*0.25,0)
u=j/2
h=j*0.94
D.aPm(d,k.a,new B.u(u,w+v*0.3),v*0.36,A.c.j(t),!0,h,0)
D.aPm(d,k.b,new B.u(u,w+v*0.64),v*0.2,A.c.j(0.92*t),!1,h,0)
g.restore()
for(h=i*0.965,x=i*0.009,s=i*0.004,r=0;r<11;++r){q=r===m
p=q?s:0
o=new B.ao(A.Q,A.M,A.S,A.T,A.R)
o.r=A.c.j(q?0.95:0.35).gp(0)
n=o.G()
g.drawCircle(u+(r-5)*i*0.035,h,x+p,n)
n.delete()}h=j-i*0.07
g=i*0.06
D.aPm(d,"AD",new B.u(h,g),i*0.045,A.c.j(0.85),!0,9999,1)
x=i*0.02
x=B.br(B.bK(new B.u(h,g),i*0.065,i*0.1),new B.aP(x,x))
g=B.J()
g.b=A.a9
g.c=1
g.r=A.ac.gp(0)
g.d=A.by
d.az(x,g)},
Sc(d,e,f,g){var x,w=d.a
J.bl(w.save())
w.clipRect(B.bH(new B.a3(0,0,0+e.a,0+e.b)),$.mz()[1],!0)
x=C.kr[A.o.F(f,8)].e
if(x===-2)D.i1B(d,e,g)
else if(x===-1)D.LJ(d,e,g,null)
else D.LJ(d,e,g,x)
w.restore()},
i1B(d,a0,a1){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=a0.a,h=a0.b,g=new B.V(Date.now(),0,!1),f=0+i,e=0+h
$.S()
x=B.J()
x.sam(C.c4b.aA(0,new B.a3(0,0,f,e)))
d.aQ(new B.a3(0,0,f,e),x)
x=B.J()
x.r=A.bB.gp(0)
d.aQ(new B.a3(0,0,f,0+h*0.15),x)
D.aPm(d,A.oA[B.bL(g)-1]+" "+B.bC(g),new B.u(i/2,h*0.075),h*0.08,A.c,!0,i*0.9,0)
w=i/7
for(f=h*0.21,e=h*0.05,v=0;v<7;++v)D.aPm(d,C.duU[v],new B.u(w*(v+0.5),f),e,A.aC,!0,9999,0)
u=B.c3(B.bC(g),B.bL(g),1,0,0,0,0,0)
t=B.bW(B.c3(B.bC(g),B.bL(g)+1,0,0,0,0,0,0))
s=B.mn(u)-1
r=h*0.74/A.k.cO((s+t)/7)
for(f=h*0.26,e=a1*3,x=d.a,q=1;q<=t;++q){p=s+q-1
o=w*(A.o.F(p,7)+0.5)
n=f+r*(A.o.ao(p,7)+0.5)
if(q===B.bW(g)){m=Math.min(w,r)
l=A.aJ.j(0.5+0.2*Math.sin(e))
$.S()
k=new B.ao(A.Q,A.M,A.S,A.T,A.R)
k.r=l.gp(0)
j=k.G()
x.drawCircle(o,n,m*0.42,j)
j.delete()}m=Math.min(w,r)
l=q===B.bW(g)?A.c:A.ac
D.aPm(d,""+q,new B.u(o,n),m*0.42,l,!0,9999,0)}},
fqT:function fqT(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
wM:function wM(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
wf:function wf(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
he2(d,e,f,g,h,a0){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i=d.a
J.bl(i.save())
x=e.a
w=e.b
v=0+x
u=0+w
i.clipRect(B.bH(new B.a3(0,0,v,u)),$.mz()[1],!0)
if(h<3){$.S()
t=B.J()
t.r=C.bdX.gp(0)
d.aQ(new B.a3(0,0,v,u),t)
if(h<0.5)u=h/0.5
else u=h>2.4?(3-h)/0.6:1
s=A.k.E(u,0,1)
u=e.ek(A.I)
t=e.gdE()
r=B.J()
r.sam(new B.c_(A.A,0.5,A.x,j,0,B.a([A.aJ.j(0.35*s),A.L],y.c),j,j).aA(0,B.bY(e.ek(A.I),e.gdE()*0.5)))
d.ad(u,t*0.5,r)
D.GR(d,"NGMY",new B.u(0,w*0.36),w*0.2,A.c.j(s),A.K,w*0.03,x)
D.GR(d,"T V",new B.u(0,w*0.6),w*0.08,A.aJ.j(s),A.K,w*0.05,x)
r=x*0.3
t=w*0.78
u=B.J()
u.r=A.aJ.j(s).gp(0)
d.aQ(new B.a3(r,t,r+x*0.4*(h/3),t+3),u)}else if(a0>=0)D.Sc(d,e,a0,g)
else{q=A.k.E((h-3)/0.5,0,1)
p=A.o.F(f,10)
switch(p){case 0:D.ib6(d,e,g)
break
case 1:D.i2d(d,e,g)
break
case 2:D.ial(d,e,g)
break
case 3:D.i76(d,e,g)
break
case 4:D.i8q(d,e,g)
break
case 5:D.iam(d,e,g)
break
case 6:D.i3B(d,e,g)
break
case 7:D.ib5(d,e,g)
break
case 8:D.i9d(d,e,g)
break
default:D.i3O(d,e,g)}t=x-w*0.34
r=w*0.04
o=w*0.03
n=B.br(new B.a3(t,r,t+w*0.3,r+w*0.1),new B.aP(o,o))
$.S()
o=B.J()
o.r=A.w.j(0.55).gp(0)
d.az(n,o)
D.GR(d,"NGMY",new B.u(n.a+w*0.025,n.b+w*0.012),w*0.07,A.c,A.bj,1,j)
o=w*0.86
t=B.J()
t.r=A.w.j(0.6).gp(0)
d.aQ(new B.a3(0,o,v,o+w*0.14),t)
D.GR(d,"CH "+(f+1)+"  \xb7  "+C.RB[p].a,new B.u(r,w*0.885),w*0.075,A.c,A.bj,0,x-w*0.08)
if(q<1){t=B.J()
t.r=A.c.j(0.6*(1-q)).gp(0)
d.aQ(new B.a3(0,0,v,u),t)}}$.S()
m=B.J()
m.r=A.w.j(0.07).gp(0)
for(l=0;l<w;l+=3){k=m.G()
i.drawRect(B.bH(new B.a3(0,l,v,l+1)),k)
k.delete()}v=new B.aF($.S().r,A.ag,j,j,B.a([],y.a))
v.D(new B.aY(0,0))
v.D(new B.aq(x*0.45,0))
v.D(new B.aq(0,w*0.5))
v.D(new B.bt())
w=B.J()
w.r=A.c.j(0.04).gp(0)
d.aK(v,w)
i.restore()},
GR(d,e,f,g,h,i,j,k){var x=null,w=B.fz(x,x,1,x,B.cT(x,x,x,x,x,x,x,x,x,B.l(x,x,h,x,x,x,x,x,x,x,x,g,x,x,A.u,x,x,!0,x,j,x,x,x,x,x,x),e),i,A.bX,x,A.dA,A.bV),v=k==null
w.o2(v?9999:k)
w.a4(d,f.a7(0,new B.u(i===A.K&&!v?(k-w.b.c)/2:0,0)))},
aPh(d,e,f,g,h,i,j){var x=new D.foG(e,h,i,j),w=x.$1(g),v=w.b.c,u=f.c-f.a
if(v>u&&v>0)w=x.$1(g*u/v)
x=f.gbL()
v=w.b
u=v.c
v=v.a.c
w.a4(d,x.aF(0,new B.u(u/2,v.gba(v)/2)))},
ib6(d5,d6,d7){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5=null,c6=d6.a,c7=d6.b,c8=A.k.F(d7,14),c9=new D.fAk(c8),d0=new D.fAg(),d1=0+c6,d2=0+c7,d3=$.S(),d4=B.J()
d4.sam(C.c5j.aA(0,new B.a3(0,0,d1,d2)))
d5.aQ(new B.a3(0,0,d1,d2),d4)
x=c6*0.34
w=new D.fAj(x,c7)
v=w.$2(0,0.5)
d4=c7*0.75
u=B.J()
u.sam(new B.c_(A.A,0.5,A.x,c5,0,B.a([A.bM.j(0.55),A.L],y.c),c5,c5).aA(0,B.bY(v,d4)))
d5.ad(v,d4,u)
t=new B.e6()
t.cZ(11)
for(d4=d7*2,u=d5.a,s=0;s<26;++s){r=t.ag()
q=t.ag()
p=t.ag()
o=new B.ao(A.Q,A.M,A.S,A.T,A.R)
o.r=A.c.j(0.35+0.4*Math.sin(d4+s)).gp(0)
n=o.G()
u.drawCircle(r*c6,q*c7*0.45,0.6+p*1.1,n)
n.delete()}for(r=y.a,m=0;m<2;++m){q=B.a([],r)
l=new B.aF(d3.r,A.ag,c5,c5,q)
q.push(new B.aY(0,c7))
for(d3=m*2,p=m===0,k=0;k<=c6;k+=6){o=p?0.78:0.82
o=new B.aq(k,c7*o+Math.sin(k/(p?70:50)+d3)*c7*0.02)
q.push(o)
j=l.f
if(j!=null)o.bx(j)
o=l.e
if(o!=null)o.a.delete()
l.e=null}d3=new B.aq(c6,c7)
q.push(d3)
q=l.f
if(q!=null)d3.bx(q)
d3=l.e
if(d3!=null)d3.a.delete()
l.e=null
d3=$.S()
q=new B.ao(A.Q,A.M,A.S,A.T,A.R)
q.r=(p?C.Y_:C.bqj).gp(0)
n=q.G()
q=l.e
u.drawPath((q==null?l.e=new B.cd(l.gbu().a.snapshot()):q).a,n)
n.delete()}i=w.$2(0,0.81)
h=d0.$1(c9.$2(0.2,1.6))
g=d0.$1(c9.$2(2.4,2.6))
for(d3=d7*1.4,f=0;f<8;++f){r=C.aAC[f]
e=r.a
d=r.b
a0=Math.sin(d3+e*7)*c7*0.006
q=w.$2(e,d)
p=q.a
q=q.b
r=c7*r.c
o=new B.ao(A.Q,A.M,A.S,A.T,A.R)
o.r=A.hi.gp(0)
n=o.G()
u.drawCircle(p+a0,q+0,r*g,n)
n.delete()
q=w.$2(e,d-0.015)
p=q.a
q=q.b
o=new B.ao(A.Q,A.M,A.S,A.T,A.R)
o.r=A.ej.gp(0)
n=o.G()
u.drawCircle(p+a0,q+0,r*0.82*g,n)
n.delete()}for(d3=c7*0.01,r=i.a,q=i.b,p=q+d3,o=c7*0.015,q+=o,j=c7*0.04,f=0;f<2;++f){a1=F.hd[f]*c7
D.z0(d5,i,new B.u(r+a1*0.04,p),new B.u(r+a1*0.12,q),j,d3,h)}r=c7*0.085
D.z0(d5,i,w.$2(0.02,0.7),w.$2(0,0.6),r,c7*0.055,h)
a2=d0.$1(c9.$2(1.8,1.6))
q=c7*0.05
p=c7*0.026
D.z0(d5,w.$2(0,0.6),w.$2(-0.1,0.55),w.$2(-0.34,0.44),q,p,a2)
D.z0(d5,w.$2(0,0.6),w.$2(0.1,0.55),w.$2(0.34,0.44),q,p,a2)
a3=d0.$1(c9.$2(3.2,1.3))
p=c7*0.024
a1=c7*0.018
D.z0(d5,w.$2(-0.34,0.44),w.$2(-0.17,0.33),w.$2(0,0.39),p,a1,a3)
D.z0(d5,w.$2(0.34,0.44),w.$2(0.17,0.33),w.$2(0,0.39),p,a1,a3)
a4=d0.$1(c9.$2(4.4,1.3))
a1=c7*0.02
p=c7*0.012
D.z0(d5,w.$2(0,0.39),w.$2(-0.1,0.3),w.$2(-0.17,0.2),a1,p,a4)
D.z0(d5,w.$2(0,0.39),w.$2(0.1,0.3),w.$2(0.17,0.2),a1,p,a4)
a1=c7*0.016
D.z0(d5,w.$2(-0.27,0.72),w.$2(-0.14,0.78),w.$2(0,0.7),a1,p,d0.$1(c9.$2(3.6,1)))
D.z0(d5,w.$2(0.27,0.72),w.$2(0.14,0.78),w.$2(0,0.7),a1,p,d0.$1(c9.$2(3.6,1)))
a5=new B.e6()
a5.cZ(5)
for(a1=d7*1.6,a6=d7*1.3,a7=g*1.4,a8=c7*0.03,s=0;s<110;++s){a9=C.aAC[A.o.F(s,8)]
b0=a5.ag()*3.141592653589793*2
b1=Math.sqrt(a5.ag())*a9.c*0.95
b2=w.$2(a9.a+Math.cos(b0)*b1,a9.b+Math.sin(b0)*b1)
b3=Math.sin(a1+s)
b4=b2.a
b2=b2.b
J.bl(u.save())
u.translate(b4+b3*c7*0.006,b2+0)
u.rotate((b0+Math.sin(a6+s)*0.2)*180/3.141592653589793,0,0)
b5=A.k.E(a7-A.o.F(s,10)*0.05,0,1)
b2=B.bK(A.I,o*b5,a8*b5)
$.S()
b3=new B.ao(A.Q,A.M,A.S,A.T,A.R)
b3.r=B.ar(A.bf,A.ep,(Math.sin(d4+s)+1)/2).gp(0)
n=b3.G()
u.drawOval(B.bH(b2),n)
n.delete()
u.restore()}b6=new D.fAh(c9,d5,d7,c8)
u=c7*0.075
b6.$5(0,"Bibi",w.$2(-0.27,0.72),u,5)
b6.$5(1,"Babu",w.$2(0.27,0.72),u,5.6)
b6.$5(2,"Mama",w.$2(-0.34,0.44),r,6.4)
b6.$5(3,"Baba",w.$2(0.34,0.44),r,7)
b6.$5(4,"Dada",w.$2(-0.17,0.2),u,8)
b6.$5(5,"Kaka",w.$2(0.17,0.2),u,8.6)
b7=new D.fAi(c9,d7,d5)
b7.$3(w.$2(0,0.7),c7*0.028,5.9)
b7.$3(w.$2(0,0.39),c7*0.035,7.4)
if(c8>9.3)for(r=(c8-9.3)*0.4,s=0;s<7;++s){b8=A.k.F(r+s/7,1)
D.GR(d5,"\u2665",w.$2(Math.sin(s*2.3+d4)*0.3,0.38-b8*0.3),c7*(0.04+0.02*A.o.F(s,3)),A.i1.j((1-b8)*0.85),A.bj,0,c5)}d4=c6*0.655+(1-d0.$1(c9.$2(1,0.9)))*c6*0.4
r=c7*0.1
o=d4+c6*0.315
b9=new B.a3(d4,r,o,r+c7*0.64)
a1=B.br(b9,new B.aP(q,q))
$.S()
a6=B.J()
a6.r=C.iC.j(0.88).gp(0)
d5.az(a1,a6)
a6=B.br(b9,new B.aP(q,q))
a1=B.J()
a1.b=A.a9
a1.c=p
a1.r=F.eY.gp(0)
d5.az(a6,a1)
c0=new D.fAl(b9,c7)
D.aPh(d5,"NGMY",c0.$2(0.13,0.06),c7*0.06,F.eY,!0,p)
D.aPh(d5,"Family",c0.$2(0.2,0.1),r,A.c,!0,0)
D.aPh(d5,"Tree",c0.$2(0.3,0.1),r,A.c,!0,0)
for(s=0;s<3;++s){c1=c9.$2(5.5+s*1.5,0.5)
if(c1<=0)continue
D.aPh(d5,"\u2665 "+C.c8D[s],c0.$2(0.43+s*0.075,0.06).eP(new B.u((1-c1)*30,0)),q,A.io.j(c1),!1,0)}c2=c9.$2(11,0.5)
if(c2>0){c3=B.bK(new B.u(b9.gbL().a,c7*0.67),u,(o-d4)*0.6*A.et.aw(0,c2))
d4=B.br(c3,new B.aP(j,j))
$.S()
u=B.J()
u.r=F.eY.gp(0)
d5.az(d4,u)
if(c2>0.8)D.aPh(d5,"ngmy.org",c3.cr(-d3),q,C.iC,!0,0)}if(c8>11.6){d3=c7*0.82
D.aPh(d5,"Family is everything",new B.a3(0,d3,0+x*2,d3+q),q,A.c.j(A.k.E((c8-11.6)/0.5,0,1)),!0,0)}if(c8<0.4)c4=1-c8/0.4
else c4=c8>13.5?(c8-13.5)/0.5:0
if(c4>0){$.S()
d3=B.J()
d3.r=A.w.j(c4).gp(0)
d5.aQ(new B.a3(0,0,d1,d2),d3)}},
i2d(d,e,a0){var x,w,v,u,t,s,r,q,p,o,n,m,l=null,k=e.a,j=e.b,i=0+k,h=0+j,g=$.S(),f=B.J()
f.sam(C.c4n.aA(0,new B.a3(0,0,i,h)))
d.aQ(new B.a3(0,0,i,h),f)
x=a0*40
for(i=d.a,h=y.a,w=0;w<2;++w,g=f){f=B.a([],h)
v=new B.aF(g.r,A.ag,l,l,f)
f.push(new B.aY(0,j))
for(g=w===0,u=0;u<=k;u+=6){t=g?0.4:1
s=g?0.62:0.78
r=g?40:28
r=new B.aq(u,j*s+Math.sin((u+x*t)/r)*j*0.05)
f.push(r)
t=v.f
if(t!=null)r.bx(t)
t=v.e
if(t!=null)t.a.delete()
v.e=null}t=new B.aq(k,j)
f.push(t)
f=v.f
if(f!=null)t.bx(f)
f=v.e
if(f!=null)f.a.delete()
v.e=null
f=$.S()
t=new B.ao(A.Q,A.M,A.S,A.T,A.R)
t.r=(g?A.ju:A.dY).gp(0)
q=t.G()
g=v.e
i.drawPath((g==null?v.e=new B.cd(v.gbu().a.snapshot()):g).a,q)
q.delete()}for(i=j*0.04,h=x*1.3,g=k+60,f=k*0.3,p=0,o=0;o<6;++o){u=A.k.F(o*90-h,g)-30
t=Math.sin(o*1.7+a0)
if(Math.abs(u-f)<12)++p
D.iaq(d,new B.u(u,j*(0.35+0.08*t)),i,A.dB)}n=Math.abs(Math.sin(a0*5))
m=new B.u(f,j*0.72-n*j*0.22)
i=B.bK(new B.u(f,j*0.82),j*0.025,j*0.14*(1-n*0.4))
$.S()
h=B.J()
h.r=A.dm.gp(0)
d.dQ(i,h)
h=j*0.085
i=B.J()
i.sam(C.ew6.aA(0,B.bY(m,h)))
d.ad(m,h,i)
i=B.J()
i.b=A.a9
i.c=2
i.r=A.q4.gp(0)
d.ad(m,h,i)
i=-j
D.GR(d,"$",m.a7(0,new B.u(i*0.03,i*0.045)),j*0.09,A.q4,A.bj,0,l)
h=i*0.01
i=m.a7(0,new B.u(i*0.028,h))
g=B.J()
g.r=A.w.gp(0)
d.ad(i,2.4,g)
h=m.a7(0,new B.u(j*0.028,h))
g=B.J()
g.r=A.w.gp(0)
d.ad(h,2.4,g)
D.GR(d,"Saved: $"+(A.o.F(A.k.bf(a0*3),1000)+p),new B.u(j*0.05,j*0.06),j*0.08,A.c,A.bj,0,l)},
iaq(d,e,f,g){var x,w,v,u,t,s,r,q=$.S(),p=B.a([],y.a),o=new B.aF(q.r,A.ag,null,null,p)
for(q=e.a,x=e.b,w=f*0.45,v=0;v<10;++v){u=-1.5707963267948966+v*3.141592653589793/5
t=(v&1)===0?f:w
s=q+Math.cos(u)*t
r=x+Math.sin(u)*t
if(v===0){s=new B.aY(s,r)
p.push(s)
r=o.f
if(r!=null)s.bx(r)
s=o.e
if(s!=null)s.a.delete()
o.e=null}else{s=new B.aq(s,r)
p.push(s)
r=o.f
if(r!=null)s.bx(r)
s=o.e
if(s!=null)s.a.delete()
o.e=null}}o.D(new B.bt())
$.S()
q=B.J()
q.r=g.gp(0)
d.aK(o,q)},
ial(a1,a2,a3){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=a2.a,e=a2.b,d=$.S(),a0=B.J()
a0.r=M.ahu.gp(0)
a1.aQ(new B.a3(0,0,0+f,0+e),a0)
x=new B.e6()
x.cZ(7)
for(a0=a3*3,w=a1.a,v=0;v<60;++v){u=A.k.F(A.k.F(x.ag()*f-a3*(10+x.ag()*60),f)+f,f)
t=x.ag()
s=x.ag()
r=new B.ao(A.Q,A.M,A.S,A.T,A.R)
r.r=A.c.j(0.5+0.5*Math.sin(a0+v)).gp(0)
q=r.G()
w.drawCircle(u,t*e*0.85,0.6+s*1.4,q)
q.delete()}p=f*1.2-A.k.F(a3*22,f*1.6)
a0=e*0.3
t=e*0.2
s=B.J()
s.sam(C.ew4.aA(0,B.bY(new B.u(p,a0),t)))
a1.ad(new B.u(p,a0),t,s)
a0=B.bK(new B.u(p,a0),e*0.07,e*0.6)
s=B.J()
s.b=A.a9
s.c=3
s.r=A.bM.j(0.7).gp(0)
a1.dQ(a0,s)
s=Math.sin(a3*2)
J.bl(w.save())
w.translate(f*0.42,e*0.52+s*e*0.04)
a1.io(0,-0.25)
d=d.r
s=y.a
o=new B.aF(d,A.ag,g,g,B.a([],s))
a0=-e
t=a0*0.04
r=e*0.1
o.D(new B.aY(t,r))
n=e*0.04
o.D(new B.c5(0,e*(0.2+0.05*Math.sin(a3*30)),n,r))
o.D(new B.bt())
m=B.J()
l=e*0.12
m.sam(C.c54.aA(0,new B.a3(t,r,t+e*0.08,r+l)))
a1.aK(o,m)
k=new B.aF(d,A.ag,g,g,B.a([],s))
m=a0*0.17
k.D(new B.aY(0,m))
t=a0*0.05
j=e*0.05
k.D(new B.c5(e*0.09,t,j,r))
k.D(new B.aq(t,r))
k.D(new B.c5(a0*0.09,t,0,m))
k.D(new B.bt())
i=B.J()
h=a0*0.08
i.sam(C.c5l.aA(0,new B.a3(h,m,h+e*0.16,m+e*0.27)))
a1.aK(k,i)
i=B.J()
i.r=A.aJ.gp(0)
a1.ad(new B.u(0,t),e*0.035,i)
i=new B.aF(d,A.ag,g,g,B.a([],s))
i.D(new B.aY(t,n))
i.D(new B.aq(a0*0.1,l))
i.D(new B.aq(t,r))
i.D(new B.bt())
t=B.J()
t.r=A.aw.gp(0)
a1.aK(i,t)
s=new B.aF(d,A.ag,g,g,B.a([],s))
s.D(new B.aY(j,n))
s.D(new B.aq(r,l))
s.D(new B.aq(j,r))
s.D(new B.bt())
r=B.J()
r.r=A.aw.gp(0)
a1.aK(s,r)
w.restore()},
i76(a1,a2,a3){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null,h=a2.a,g=a2.b,f=0+h,e=0+g,d=$.S(),a0=B.J()
a0.sam(C.c45.aA(0,new B.a3(0,0,f,e)))
a1.aQ(new B.a3(0,0,f,e),a0)
for(f=a1.a,e=g*0.85,a0=g*0.7,x=y.a,d=d.r,w=0;w<4;++w){v=h*(0.1+0.25*w)
u=B.a([],x)
t=new B.aF(d,A.ag,i,i,u)
u.push(new B.aY(v,g))
u.push(new B.c5(v+Math.sin(a3+w)*10,e,v+4,a0+w*6))
u=new B.ao(A.Q,A.M,A.S,A.T,A.R)
u.b=A.a9
u.c=5
u.r=A.cT.gp(0)
s=u.G()
u=t.gbu().a.snapshot()
f.drawPath((t.e=new B.cd(u)).a,s)
s.delete()}e=A.k.F(a3*18,h*1.5)
J.bl(f.save())
f.translate(e-h*0.25,g*0.35+Math.sin(a3)*6)
e=B.bK(A.I,g*0.22,g*0.5)
a0=B.J()
a0.r=A.bt.gp(0)
a1.dQ(e,a0)
a0=new B.aF(d,A.ag,i,i,B.a([],x))
e=-g
u=e*0.22
a0.D(new B.aY(u,0))
a0.D(new B.c5(e*0.36,e*0.12+Math.sin(a3*3)*5,e*0.34,e*0.16))
t=e*0.02
a0.D(new B.c5(e*0.28,t,u,0))
u=B.J()
u.r=A.bt.gp(0)
a1.aK(a0,u)
u=g*0.03
a0=g*0.1
r=B.bK(new B.u(0,u),a0,g*0.34)
q=B.J()
q.r=A.aN.gp(0)
a1.dQ(r,q)
q=B.J()
q.r=A.c.gp(0)
a1.ad(new B.u(g*0.15,t),3,q)
q=B.J()
q.r=A.w.gp(0)
a1.ad(new B.u(g*0.155,t),1.5,q)
f.restore()
for(t=e*0.005,r=e*0.08,q=e*0.03,p=g*0.06,e*=0.04,o=h+40,n=a3*2,w=0;w<6;++w){m=(w&1)===0?1:-1
l=A.k.F(A.k.F(a3*(24+w*7)*m+w*80,o)+h+40,o)
k=Math.sin(n+w)
J.bl(f.save())
f.translate(l-20,g*(0.52+0.06*w)+k*6)
f.scale(m,1)
l=B.bK(A.I,p,a0)
k=new B.ao(A.Q,A.M,A.S,A.T,A.R)
j=A.o.F(w,4)
k.r=C.azf[j].gp(0)
s=k.G()
f.drawOval(B.bH(l),s)
s.delete()
l=B.a([],x)
k=new B.aF(d,A.ag,i,i,l)
l.push(new B.aY(e,0))
l.push(new B.aq(r,q))
l.push(new B.aq(r,u))
l.push(new B.bt())
l=new B.ao(A.Q,A.M,A.S,A.T,A.R)
l.r=C.azf[j].gp(0)
s=l.G()
l=k.gbu().a.snapshot()
f.drawPath((k.e=new B.cd(l)).a,s)
s.delete()
l=new B.ao(A.Q,A.M,A.S,A.T,A.R)
l.r=A.w.gp(0)
s=l.G()
f.drawCircle(u,t,1.8,s)
s.delete()
f.restore()}for(w=0;w<14;++w){e=A.k.F(w*0.071+0.05,1)
d=A.k.F(a3*(14+w*3)+w*40,g)
a0=Math.sin(n+w)
x=A.o.F(w,3)
u=new B.ao(A.Q,A.M,A.S,A.T,A.R)
u.b=A.a9
u.c=1.2
u.r=A.c.j(0.7).gp(0)
s=u.G()
f.drawCircle(h*e+a0*4,g-d,2+x,s)
s.delete()}},
i8q(a7,a8,a9){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null,d=a8.a,a0=a8.b,a1=A.k.F(a9,12),a2=a1<7,a3=0+d,a4=0+a0,a5=$.S(),a6=B.J()
a6.sam(new B.a9(A.b0,A.b6,A.x,a2?C.dpw:C.dbL,e,e).aA(0,new B.a3(0,0,a3,a4)))
a7.aQ(new B.a3(0,0,a3,a4),a6)
a6=a0*0.74
x=B.J()
x.r=(a2?C.bqV:A.Fy).gp(0)
a7.aQ(new B.a3(0,a6,a3,a6+a0*0.26),x)
for(x=a7.a,w=a0*0.07,v=a0*0.06,u=a0*0.2,t=a0*0.1,s=a0*0.09,r=y.a,q=a9*2,a5=a5.r,p=0;p<4;++p){o=d*(0.08+0.24*p)
n=a0*(0.14+0.03*A.o.F(p,2))
m=a6-n
l=o+u
k=new B.ao(A.Q,A.M,A.S,A.T,A.R)
k.r=C.cYp[p].gp(0)
j=k.G()
x.drawRect(B.bH(new B.a3(o,m,l,m+n)),j)
j.delete()
k=B.a([],r)
i=new B.aF(a5,A.ag,e,e,k)
k.push(new B.aY(o-4,m))
k.push(new B.aq(o+t,m-s))
k.push(new B.aq(l+4,m))
k.push(new B.bt())
m=new B.ao(A.Q,A.M,A.S,A.T,A.R)
m.r=A.ek.gp(0)
j=m.G()
m=i.gbu().a.snapshot()
x.drawPath((i.e=new B.cd(m)).a,j)
j.delete()
m=o+w
l=n*0.55
k=a6-l
i=new B.ao(A.Q,A.M,A.S,A.T,A.R)
i.r=(a2&&A.o.F(A.k.bf(q),2)===0?A.m1:A.fV).gp(0)
j=i.G()
x.drawRect(B.bH(new B.a3(m,k,m+v,k+l)),j)
j.delete()}if(a2){for(a6=a9*20,v=a9*260,u=a0*0.8,p=0;p<70;++p){o=A.k.F(p*37+a6,d)
h=A.k.F(p*53+v,u)
s=new B.ao(A.Q,A.M,A.S,A.T,A.R)
s.r=A.fl.gp(0)
s.c=1.4
j=s.G()
x.drawLine.apply(x,[o,h,o-3,h+9,j])
j.delete()}a6=a9*3
if(A.o.F(A.k.bf(a6),7)===0&&A.k.F(a6,1)<0.3){a6=B.J()
a6.r=A.c.j(0.5).gp(0)
a7.aQ(new B.a3(0,0,a3,a4),a6)
r=new B.aF(a5,A.ag,e,e,B.a([],r))
r.D(new B.aY(d*0.6,t))
t=d*0.55
a5=a0*0.3
r.D(new B.aq(t,a5))
r.D(new B.aq(d*0.62,a5))
r.D(new B.aq(t,a0*0.55))
t=B.J()
t.b=A.a9
t.c=4
t.r=A.m1.gp(0)
a7.aK(r,t)}}else{for(a3=d*0.5,a4=a0*0.035,a5=3.141592653589793*A.k.E((a1-7)/2,0,1)*57.29577951308232,p=0;p<6;++p){v=d*(0.9-p*0.07)
v=B.bK(new B.u(a3,a6),v,v)
u=new B.ao(A.Q,A.M,A.S,A.T,A.R)
u.b=A.a9
u.c=a4
u.r=C.dtR[p].j(0.9).gp(0)
j=u.G()
x.drawArc.apply(x,[B.bH(v),180,a5,!1,j])
j.delete()}a3=B.J()
a3.r=A.dB.gp(0)
a7.ad(new B.u(d*0.86,a0*0.16),a0*0.08,a3)}for(a3=d+120,p=0;p<3;++p){o=A.k.F(a9*(8+p*4)+p*120,a3)-60
for(a4=a0*(0.12+0.1*p),g=0;g<4;++g){f=C.ct1[g]
$.S()
a5=new B.ao(A.Q,A.M,A.S,A.T,A.R)
a5.r=(a2?A.bo:A.c.j(0.95)).gp(0)
j=a5.G()
x.drawCircle(o+f.a,a4+f.b,w,j)
j.delete()}}},
iam(a1,a2,a3){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=a2.a,a0=a2.b
$.S()
x=B.J()
x.r=A.dd.gp(0)
a1.aQ(new B.a3(0,0,0+d,0+a0),x)
w=B.J()
w.r=A.c.j(0.05).gp(0)
for(x=a1.a,v=0;v<d;v+=16){u=w.G()
x.drawLine.apply(x,[v,0,v,a0,u])
u.delete()}for(t=0;t<a0;t+=16){u=w.G()
x.drawLine.apply(x,[0,t,d,t,u])
u.delete()}s=d*0.14
r=a0*0.2
q=a0*0.08
p=B.br(new B.a3(s,r,s+d*0.72,r+a0*0.5),new B.aP(q,q))
o=new B.aF($.S().r,A.ag,null,null,B.a([],y.a))
o.D(new B.iV(p))
r=B.J()
r.b=A.a9
r.c=5
r.r=A.bt.gp(0)
a1.aK(o,r)
n=new B.Tj(new B.rs(B.xz(o),!1,B.a([],y.C))).gI(0)
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
g=l[m].Hh(k).a
k=new B.ao(A.Q,A.M,A.S,A.T,A.R)
k.r=A.dB.j(1-h*0.09).gp(0)
k.z=O.SO
u=k.G()
x.drawCircle(g.a,g.b,6-h*0.5,u)
u.delete()}x=a0*0.45
r=B.br(B.bK(new B.u(s,x),a0*0.22,a0*0.12),A.ii)
m=B.J()
m.r=A.cT.gp(0)
a1.az(r,m)
D.GR(a1,"+",new B.u(s-5,a0*0.33),a0*0.07,A.c,A.bj,0,null)
f=(Math.sin(a3*2)+1)/2
e=new B.u(d*0.86,x)
x=B.J()
x.r=A.dB.j(0.25+0.5*f).gp(0)
x.z=K.IO
a1.ad(e,a0*0.16,x)
x=B.J()
x.r=B.ar(A.bL,A.p7,f).gp(0)
a1.ad(e,q,x)
D.GR(a1,"Electricity needs a full loop!",new B.u(0,a0*0.74),a0*0.075,A.hl,A.K,0,d)},
i3B(a4,a5,a6){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=a5.a,a1=a5.b,a2=0+a0,a3=0+a1
$.S()
x=B.J()
x.sam(C.c7i.aA(0,new B.a3(0,0,a2,a3)))
a4.aQ(new B.a3(0,0,a2,a3),x)
x=a1*0.82
a3=B.J()
a3.r=A.dd.gp(0)
a4.aQ(new B.a3(0,x,a2,x+a1*0.18),a3)
for(a2=a0*0.1,a3=a4.a,w=0;w<7;++w){v=a0*(0.05+w*0.15)
u=a1*(0.1+0.07*A.o.F(w*5,4))
t=x-u
s=new B.ao(A.Q,A.M,A.S,A.T,A.R)
s.r=A.au.gp(0)
r=s.G()
a3.drawRect(B.bH(new B.a3(v,t,v+a2,t+u)),r)
r.delete()}for(a2=a1*0.2,t=a6*0.55,q=0;q<4;++q){s=t+q*0.27
p=A.k.F(s,1)
o=A.k.bf(s)*7+q*3
n=a0*(0.15+0.7*A.k.F(o*0.37,1))
m=a1*(0.2+0.25*A.k.F(o*0.53,1))
l=C.ayf[A.o.F(Math.abs(o),5)]
if(p<0.3){$.S()
s=new B.ao(A.Q,A.M,A.S,A.T,A.R)
s.r=A.c.gp(0)
r=s.G()
a3.drawCircle(n,x-(x-m)*(p/0.3),2.5,r)
r.delete()}else{w=(p-0.3)/0.7
for(s=w*w*a1*0.08,k=1-w,j=2.4*k+0.4,i=0;i<28;++i){h=i*3.141592653589793*2/28
g=a2*A.dU.aw(0,w)
f=Math.cos(h)
e=Math.sin(h)
$.S()
d=new B.ao(A.Q,A.M,A.S,A.T,A.R)
d.r=l.j(A.k.E(k,0,1)).gp(0)
d.z=C.dCp
r=d.G()
a3.drawCircle(n+f*g,m+e*g+s,j,r)
r.delete()}}}},
ib5(a4,a5,a6){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=a5.a,d=a5.b,a0=0+e,a1=0+d,a2=$.S(),a3=B.J()
a3.sam(C.c6a.aA(0,new B.a3(0,0,a0,a1)))
a4.aQ(new B.a3(0,0,a0,a1),a3)
for(a1=a4.a,a3=y.a,x=0;x<2;++x,a2=w){w=B.a([],a3)
v=new B.aF(a2.r,A.ag,null,null,w)
w.push(new B.aY(0,d))
for(a2=x===0,u=0;u<=e;u+=6){t=a2?8:20
s=a2?0.55:0.68
r=a2?50:34
r=new B.aq(u,d*s+Math.sin((u+a6*t)/r)*d*0.06)
w.push(r)
t=v.f
if(t!=null)r.bx(t)
t=v.e
if(t!=null)t.a.delete()
v.e=null}t=new B.aq(e,d)
w.push(t)
w=v.f
if(w!=null)t.bx(w)
w=v.e
if(w!=null)w.a.delete()
v.e=null
w=$.S()
t=new B.ao(A.Q,A.M,A.S,A.T,A.R)
t.r=(a2?A.FF:A.Fy).gp(0)
q=t.G()
a2=v.e
a1.drawPath((a2==null?v.e=new B.cd(v.gbu().a.snapshot()):a2).a,q)
q.delete()}a2=d*0.8
a3=B.J()
a3.r=A.bt.gp(0)
a4.aQ(new B.a3(0,a2,a0,a2+d*0.04),a3)
for(u=-A.k.F(a6*80,24),a0=d*0.84,a3=d*0.03,w=a0+a3;u<e;u+=24){t=new B.ao(A.Q,A.M,A.S,A.T,A.R)
t.r=A.fV.gp(0)
q=t.G()
a1.drawRect(B.bH(new B.a3(u,a0,u+8,w)),q)
q.delete()}p=Math.sin(a6*14)*1.2
o=e*0.12
for(a0=a2+p,a2=d*0.025,w=e*0.012,t=d*0.02,s=d*0.62+p,a3=s+a3,r=a3+d*0.06,n=s+d*0.18,m=0;m<4;++m){l=m===0
k=o+e*(l?0.16:0.15)
j=B.br(new B.a3(o,s,k,n),new B.aP(t,t))
i=new B.ao(A.Q,A.M,A.S,A.T,A.R)
i.r=(l?A.bB:C.dbN[m-1]).gp(0)
q=i.G()
a1.drawRRect(B.e7(j),q)
q.delete()
for(k-=o,j=k*0.18,h=0;h<3;++h){i=o+k*(0.12+h*0.28)
g=new B.ao(A.Q,A.M,A.S,A.T,A.R)
g.r=A.fl.gp(0)
q=g.G()
a1.drawRect(B.bH(new B.a3(i,a3,i+j,r)),q)
q.delete()}j=new B.ao(A.Q,A.M,A.S,A.T,A.R)
j.r=A.bk.gp(0)
q=j.G()
a1.drawCircle(o+k*0.25,a0,a2,q)
q.delete()
j=new B.ao(A.Q,A.M,A.S,A.T,A.R)
j.r=A.bk.gp(0)
q=j.G()
a1.drawCircle(o+k*0.75,a0,a2,q)
q.delete()
o+=k+w}for(a0=a6*0.8,a2=e*0.2,a3=d*0.6,m=0;m<5;++m){f=A.k.F(a0+m*0.2,1)
w=f*d
s=new B.ao(A.Q,A.M,A.S,A.T,A.R)
s.r=A.c.j(0.7*(1-f)).gp(0)
q=s.G()
a1.drawCircle(a2-f*e*0.12,a3-w*0.25,t+w*0.04,q)
q.delete()}},
i9d(a2,a3,a4){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=a3.a,d=a3.b,a0=0+e,a1=0+d
$.S()
x=B.J()
w=a4*2
v=B.ar(A.ju,A.eP,(Math.sin(w)+1)/2)
v.toString
x.sam(new B.a9(A.az,A.aE,A.x,B.a([v,A.au],y.c),null,null).aA(0,new B.a3(0,0,a0,a1)))
a2.aQ(new B.a3(0,0,a0,a1),x)
for(a0=a2.a,a1=d*0.86,x=e/8-2,v=d*0.14,u=a1+v,t=0;t<8;++t){s=e*t/8
r=new B.ao(A.Q,A.M,A.S,A.T,A.R)
r.r=(A.k.F(w+t,2)<1?A.c_:A.aJ).j(0.5).gp(0)
q=r.G()
a0.drawRect(B.bH(new B.a3(s,a1,s+x,u)),q)
q.delete()}a1=a4*6
p=Math.sin(a1)
J.bl(a0.save())
x=-d
a0.translate(e*0.5,d*0.55+Math.abs(p)*x*0.03)
a2.io(0,p*0.06)
u=d*0.26
s=d*0.3
r=d*0.04
o=B.br(B.bK(A.I,s,u),new B.aP(r,r))
n=B.J()
n.sam(C.c7H.aA(0,B.bK(A.I,s,u)))
a2.az(o,n)
n=d*0.08
v=B.bK(new B.u(0,d*0.02),n,v)
o=B.J()
o.r=A.b8.j(0.7).gp(0)
a2.aQ(v,o)
o=B.br(B.bK(new B.u(0,x*0.25),d*0.17,d*0.22),new B.aP(r,r))
v=B.J()
v.r=A.cq.gp(0)
a2.az(o,v)
m=A.k.F(a4*1.3,1)>0.08
for(v=x*0.26,u=d*0.025,l=0;l<2;++l){k=C.csE[l]
s=new B.ao(A.Q,A.M,A.S,A.T,A.R)
s.r=(m?A.b8:A.eP).gp(0)
q=s.G()
a0.drawCircle(k*d,v,u,q)
q.delete()}v=B.J()
v.r=A.ac.gp(0)
v.c=3
a2.bo(new B.u(0,x*0.335),new B.u(0,x*0.38),v)
v=B.J()
v.r=A.aw.gp(0)
a2.ad(new B.u(0,x*0.39),d*0.015,v)
for(v=-p,u=d*0.035,s=d*0.15,o=d*0.28,x*=0.08,l=0;l<2;++l){j=F.hd[l]
J.bl(a0.save())
i=j*d
a0.translate(i*0.14,x)
h=j>0
a0.rotate(j*(0.7+Math.sin(a1+(h?0:3.141592653589793))*0.8)*180/3.141592653589793,0,0)
g=new B.ao(A.Q,A.M,A.S,A.T,A.R)
g.r=A.bL.gp(0)
g.c=u
g.d=A.by
q=g.G()
a0.drawLine.apply(a0,[0,0,i*0.16,0,q])
q.delete()
a0.restore()
h=h?p:v
g=new B.ao(A.Q,A.M,A.S,A.T,A.R)
g.r=A.bL.gp(0)
g.c=r
g.d=A.by
q=g.G()
a0.drawLine.apply(a0,[i*0.06,s,i*0.08,o+h*d*0.02,q])
q.delete()}a0.restore()
for(a0=a4*0.7,a1=d*0.7,t=0;t<4;++t){f=A.k.F(a0+t*0.25,1)
D.GR(a2,"\u266a",new B.u(e*(0.2+0.18*t)+Math.sin(w+t)*8,a1-f*d*0.5),n,A.c.j(1-f),A.bj,0,null)}},
i3O(a1,a2,a3){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=a2.a,e=a2.b,d=0+f,a0=0+e
$.S()
x=B.J()
x.sam(C.c6h.aA(0,new B.a3(0,0,d,a0)))
a1.aQ(new B.a3(0,0,d,a0),x)
x=B.J()
x.r=A.dB.gp(0)
a1.ad(new B.u(f*0.12,e*0.16),e*0.07,x)
x=e*0.72
a0=B.J()
a0.r=A.FF.gp(0)
a1.aQ(new B.a3(0,x,d,x+e*0.28),a0)
for(d=a3*0.25,a0=e*0.78,x=a1.a,w=e*0.016,v=a3*0.3,u=e*0.022,t=0;t<9;++t){s=f*(0.07+t*0.105)
r=A.k.E(A.k.F(d-t*0.12,3),0,1)
q=A.o.F(t,3)
p=s+Math.sin(a3+t)*3
q=a0-e*(0.12+0.05*q)*r
o=new B.ao(A.Q,A.M,A.S,A.T,A.R)
o.r=A.hi.gp(0)
o.c=3
n=o.G()
x.drawLine.apply(x,[s,a0,p,q,n])
n.delete()
if(r>0.7){for(m=0;m<6;++m){l=m*3.141592653589793/3+v
o=Math.cos(l)
k=Math.sin(l)
j=new B.ao(A.Q,A.M,A.S,A.T,A.R)
j.r=C.aAl[A.o.F(t,5)].gp(0)
n=j.G()
x.drawCircle(p+o*e*0.028,q+k*e*0.028,u,n)
n.delete()}o=new B.ao(A.Q,A.M,A.S,A.T,A.R)
o.r=A.dB.gp(0)
n=o.G()
x.drawCircle(p,q,w,n)
n.delete()}}for(d=e*0.03,a0=e*0.05,w=e*0.06,v=a3*0.9,u=a3*1.3,q=a3*18,t=0;t<3;++t){s=f*(0.2+0.28*t)+Math.sin(v+t*2)*f*0.12
i=e*(0.3+0.1*t)+Math.cos(u+t)*e*0.06
h=Math.abs(Math.sin(q+t))
for(p=a0*h+2,o=(t+2)%5,g=0;g<2;++g){k=B.bK(new B.u(s+F.hd[g]*e*0.025*h,i),w,p)
j=new B.ao(A.Q,A.M,A.S,A.T,A.R)
j.r=C.aAl[o].gp(0)
n=j.G()
x.drawOval(B.bH(k),n)
n.delete()}p=new B.ao(A.Q,A.M,A.S,A.T,A.R)
p.r=A.bk.gp(0)
p.c=2
n=p.G()
x.drawLine.apply(x,[s,i-d,s,i+d,n])
n.delete()}},
hem(d,e,f,g,h,i){return B.a5(d,!1).cc(B.v8(null,!1,!0,!0,new D.h0y(e,h,g,i,f),A.eR,null,A.pb,new D.h0z(),y.e))},
y5:function y5(d,e){this.a=d
this.b=e},
foG:function foG(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fAk:function fAk(d){this.a=d},
fAg:function fAg(){},
fAj:function fAj(d,e){this.a=d
this.b=e},
fAh:function fAh(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fAi:function fAi(d,e,f){this.a=d
this.b=e
this.c=f},
fAl:function fAl(d,e){this.a=d
this.b=e},
h0y:function h0y(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
h0z:function h0z(){},
WW:function WW(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aFT:function aFT(d,e){var _=this
_.e=_.d=$
_.f=-1
_.r=!1
_.w=null
_.x=0
_.y=!0
_.z=null
_.bw$=d
_.a8$=e
_.c=_.a=null},
eO6:function eO6(d){this.a=d},
eO5:function eO5(d){this.a=d},
eO4:function eO4(d,e){this.a=d
this.b=e},
eO7:function eO7(d,e){this.a=d
this.b=e},
eOg:function eOg(d){this.a=d},
eOf:function eOf(d){this.a=d},
eOe:function eOe(){},
eO9:function eO9(d){this.a=d},
eOa:function eOa(d){this.a=d},
eOb:function eOb(d){this.a=d},
eOc:function eOc(d){this.a=d},
eO8:function eO8(d){this.a=d},
eOd:function eOd(d){this.a=d},
eO3:function eO3(d){this.a=d},
eO2:function eO2(d){this.a=d},
bwF:function bwF(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.a=h},
aNN:function aNN(){},
her(d){var x
A:{if("lgtv"===d){x="lg"
break A}if("sonytv"===d){x="sony"
break A}if("appletv"===d){x="apple"
break A}if("bangtv"===d){x="bo"
break A}x="samsung"
break A}return x},
ip2(d){var x,w=D.her(d)
A:{if("lg"===w){x=A.hx
break A}if("sony"===w){x=A.dn
break A}if("apple"===w){x=A.bO
break A}if("bo"===w){x=C.tR
break A}x=A.aJ
break A}return x},
asZ:function asZ(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bmH:function bmH(){this.d=0
this.c=this.a=null},
eO0:function eO0(d,e){this.a=d
this.b=e},
eO1:function eO1(d,e){this.a=d
this.b=e},
eNY:function eNY(){},
eNX:function eNX(d){this.a=d},
eNZ:function eNZ(d){this.a=d},
eO_:function eO_(d){this.a=d},
eNV:function eNV(d){this.a=d},
eNW:function eNW(d,e){this.a=d
this.b=e}},C,E,F,S
J=c[1]
B=c[0]
A=c[2]
H=c[233]
I=c[133]
K=c[138]
L=c[184]
G=c[38]
M=c[108]
N=c[268]
O=c[102]
P=c[121]
Q=c[101]
R=c[128]
D=a.updateHolder(c[28],D)
C=c[99]
E=c[42]
F=c[97]
S=c[252]
D.wM.prototype={}
D.wf.prototype={}
D.y5.prototype={}
D.WW.prototype={
R(){return new D.aFT(null,null)}}
D.aFT.prototype={
gaeZ(){var x,w=this,v=w.d
if(v===$){x=B.bm(null,A.og,null,1,null,w)
x.cq(0)
w.d!==$&&B.bE()
w.d=x
v=x}return v},
gDD(){var x=this.e
return x===$?this.e=this.a.e:x},
Z(){var x=this
x.a3()
x.w=B.cD(x.a.r,x.gb06())
x.aX_()
G.dG(520,"",80,0,0.25,"tri")},
aX_(){var x=this.z
if(x!=null)x.a2(0)
this.z=B.cD(A.jA,new D.eO6(this))},
cai(){var x=this.c
if(x!=null&&B.a5(x,!1).pT()){x=this.c
x.toString
B.a5(x,!1).O(this.gDD())}},
ajZ(){var x=this,w=x.w
if(w!=null)w.a2(0)
x.w=null
x.y=!0
x.aX_()},
ayl(d){this.m(new D.eO4(this,d))
G.dG(900,"",40,0,0.3,"noise")},
b2_(d){this.m(new D.eO7(this,d))
G.dG(700,"",60,0,0.3,"tri")},
t(){var x=this,w=x.w
if(w!=null)w.a2(0)
w=x.z
if(w!=null)w.a2(0)
x.gaeZ().t()
x.byM()},
B(d){var x,w,v,u,t=this,s=null,r=B.n(10),q=B.L(t.gcaj(),A.r,6),p=B.a([new B.ac(0,A.G,D.ip2(t.a.d).j(0.25),A.I,40)],y.r),o=B.n(4),n=y.u,m=B.a([B.cb(t.gaeZ(),new D.eOf(t),s)],n)
if(t.r)m.push(t.bEi())
r=B.at(new B.fK(1.7777777777777777,B.p(s,B.bx(o,new B.an(A.a_,s,A.b3,A.t,m,s),A.ap),A.f,s,s,new B.o(s,s,q,r,p,s,A.n),s,s,s,s,s,s,s,s),s),s,s,s)
q=t.y
p=q?1:0
o=B.nS(s,A.aS,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s)
o=B.aH(s,s,s,s,B.X(A.cx,A.c,s,s,s,s),s,s,s,t.gb06(),s,s,s,o,"Back to the board",s)
m=B.n(20)
x=t.f
w=t.a
o=B.B(B.a([o,A.b2,B.p(s,B.d(x>=0?w.c+" \xb7 "+C.kr[x].a:w.c+" \xb7 CH "+(t.gDD()+1),s,s,s,s,s,s,P.Ap,s,s,s),A.f,s,s,new B.o(A.aS,s,s,m,s,s,A.n),s,s,s,s,A.mL,s,s,s)],n),A.m,s,A.e,A.i,0,s,s)
m=t.crL()
x=A.w.j(0.65)
w=B.n(18)
v=t.f
v=B.d(v>=0?C.kr[v].a:C.RB[t.gDD()].a,s,s,s,s,s,s,A.hv,A.K,s,s)
u=t.f
return B.c6(s,A.w,B.bn(!0,B.aA(A.c6,new B.an(A.a_,s,A.b3,A.t,B.a([r,B.DC(B.e_(B.x(B.a([new B.D(C.bzH,o,s),A.am,m,A.b2,B.p(s,B.x(B.a([v,B.d(u>=0?C.kr[u].c:C.RB[t.gDD()].b,s,s,s,s,s,s,Q.aar,A.K,s,s)],n),A.m,s,A.e,A.P,0,A.p),A.f,s,s,new B.o(x,s,s,w,s,s,A.n),s,s,s,A.bg,A.bT,s,s,s)],n),A.m,s,A.e,A.i,0,A.p),!q,s),A.b5,A.iH,p)],n),s),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new D.eOg(t),s,s,s,s,s,s,!1,A.a3),!0,!1,A.af,!0,!0),s,!1,!1,s,s)},
crL(){var x=this,w=null,v=new D.eOe(),u=A.w.j(0.72),t=B.n(22),s=B.L(A.aJ.j(0.5),A.r,1)
return B.p(w,B.B(B.a([v.$3(A.wz,"CH \u2212",new D.eO9(x)),v.$3(A.hS,"CH +",new D.eOa(x)),v.$5$color$on(A.Hr,"TV",new D.eOb(x),A.aJ,x.f<0),v.$5$color$on(A.yW,"APPS",new D.eOc(x),A.bq,x.r),v.$5$color$on(A.Co,"ADS",new D.eOd(x),A.c_,x.f===0)],y.u),A.m,w,A.e,A.P,0,w,w),A.f,w,w,new B.o(u,w,s,t,w,w,A.n),w,w,w,w,A.a0i,w,w,w)},
bEi(){return new D.asZ(this.a.d,this.gcgp(),new D.eO3(this),null)},
gcaj(){var x,w=D.her(this.a.d)
A:{if("apple"===w){x=A.dn
break A}if("bo"===w){x=C.Fr
break A}if("sony"===w){x=C.bdT
break A}if("lg"===w){x=A.ei
break A}x=A.cr
break A}return x}}
D.bwF.prototype={
a4(d,e){var x=this
return D.he2(d,e,x.b,x.d,x.e,x.c)},
av(d){return!0}}
D.aNN.prototype={
t(){var x=this,w=x.a8$
if(w!=null)w.a5(0,x.gbB())
x.a8$=null
x.a1()},
aV(){this.b2()
this.b1()
this.bC()}}
D.asZ.prototype={
R(){return new D.bmH()},
a6t(d,e){return this.d.$1(e)}}
D.bmH.prototype={
b07(d){this.m(new D.eO0(this,d))
this.a.a6t(0,d)},
B(d){var x,w=this,v=D.her(w.a.c)
A:{if("lg"===v){x=w.c2W()
break A}if("sony"===v){x=w.czA()
break A}if("apple"===v){x=w.cak()
break A}if("bo"===v){x=w.bFd()
break A}x=w.ctR()
break A}return x},
gaf_(){var x=new B.V(Date.now(),0,!1)
return A.a.aY(A.o.u(B.dh(x)),2,"0")+":"+A.a.aY(A.o.u(B.fS(x)),2,"0")},
aym(d,e,f,g,h,i,j){var x,w,v=null,u=C.kr[d],t=this.d===d,s=u.d,r=B.ar(s,A.w,0.55)
r.toString
r=B.a([s,r],y.c)
s=B.n(h)
if(t)x=i
else x=A.L
x=B.L(x,A.r,t?2.5:0)
w=B.a([B.d(u.b,v,v,v,v,v,v,B.l(v,v,v,v,v,v,v,v,v,v,v,e,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],y.u)
if(g)w.push(new B.D(A.ui,B.d(u.a,v,1,A.a1,v,v,v,A.Vv,v,v,v),v))
return B.aA(v,B.p(v,B.x(w,A.m,v,A.b9,A.i,0,A.p),A.f,v,v,new B.o(v,v,x,s,v,new B.a9(A.az,A.aE,A.x,r,v,v),A.n),v,f,v,v,v,v,v,j),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new D.eO1(this,d),v,v,v,v,v,v,!1,A.a3)},
b08(d,e,f,g,h,i){return this.aym(d,e,f,!1,g,h,i)},
ctR(){var x,w,v,u,t,s,r=this,q=null,p=r.a.e,o=y.u,n=B.B(B.a([C.fIN,A.ad,C.fAO,A.b2,C.bYV,A.ad,C.bUG,A.ad,B.d(r.gaf_(),q,q,q,q,q,q,C.aVe,q,q,q)],o),A.m,q,A.e,A.i,0,q,q),m=C.kr[r.d],l=B.d(m.a,q,q,q,q,q,q,A.lr,q,q,q)
m=B.d(m.c,q,1,A.a1,q,q,q,C.fsa,q,q,q)
x=A.c.j(0.08)
w=B.a([],o)
for(v=0;v<2;++v){u=new B.aP(8,8)
w.push(B.p(q,B.X(C.csr[v],A.ac,q,q,q,17),A.f,q,q,new B.o(A.bz,q,q,new B.bh(u,u,u,u),q,q,A.n),q,34,q,A.ND,q,q,q,34))}u=B.a([],o)
for(t=0;t<8;++t){s=r.d===t?1.12:1
u.push(new B.D(A.ND,new B.z5(r.aym(t,14,44,!0,8,A.aJ,52),s,A.b5,A.fO,q,q),q))}w.push(B.E(B.ci(B.B(u,A.m,q,A.e,A.i,0,q,q),A.t,q,A.y,q,q,q,q,A.aL),1))
return B.aA(q,B.p(q,B.x(B.a([n,A.b2,new B.bN(A.a5,q,q,l,q),new B.bN(A.a5,q,q,m,q),A.am,B.p(q,B.B(w,A.m,q,A.e,A.i,0,q,q),A.f,q,q,new B.o(x,q,q,A.Xb,q,q,A.n),q,q,q,q,A.O3,q,q,q)],o),A.m,q,A.e,A.i,0,A.p),A.f,q,q,C.b5J,q,q,q,q,H.akS,q,q,q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,p,q,q,q,q,q,q,!1,A.a3)},
c2W(){var x=null,w=this.a.e,v=y.u
return B.aA(x,B.p(x,B.x(B.a([B.B(B.a([B.p(x,C.fP0,A.f,x,x,new B.o(A.hx,x,x,B.n(10),x,x,A.n),x,x,x,x,A.mN,x,x,x),A.bm,C.fHL,A.b2,B.d(this.gaf_(),x,x,x,x,x,x,A.Er,x,x,x)],v),A.m,x,A.e,A.i,0,x,x),A.b2,new B.a4(x,62,B.hS(x,new D.eNX(this),8,x,x,A.aL,new D.eNY(),!1),x)],v),A.E,x,A.e,A.i,0,A.p),A.f,x,x,C.b5U,x,x,x,x,S.NJ,x,x,x),A.y,!1,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,w,x,x,x,x,x,x,!1,A.a3)},
czA(){var x,w,v,u,t=this,s=null,r=C.kr[t.d],q=t.a.e,p=y.u,o=B.a([B.p(s,C.f5q,A.f,s,s,new B.o(A.dr,s,s,B.n(12),s,s,A.n),s,s,s,s,A.yE,s,s,s),A.ad],p)
for(x=0;x<3;++x){w=C.dmb[x]
v=w==="Apps"?A.c:A.aC
o.push(new B.D(A.iJ,new B.y(w,s,new B.F(!0,v,s,s,s,s,9.5,A.U,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s),s,s,s,s,s,s,s,s,s),s))}o.push(A.b2)
o.push(B.d(t.gaf_(),s,s,s,s,s,s,C.frz,s,s,s))
o=B.B(o,A.m,s,A.e,A.i,0,s,s)
v=r.d
u=B.ar(v,A.w,0.7)
u.toString
u=B.a([v,u],y.c)
v=B.n(10)
return B.aA(s,B.p(s,B.x(B.a([o,A.fG,B.E(B.B(B.a([B.E(B.p(s,B.x(B.a([B.d(r.b,s,s,s,s,s,s,A.pJ,s,s,s),B.d(r.a,s,s,s,s,s,s,A.nO,s,s,s),B.d(r.c,s,2,A.a1,s,s,s,C.fy7,s,s,s),A.cS,B.aA(s,B.p(s,C.fEv,A.f,s,s,new B.o(A.c,s,s,B.n(10),s,s,A.n),s,s,s,s,A.yE,s,s,s),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new D.eNZ(t),s,s,s,s,s,s,!1,A.a3)],p),A.E,s,A.mk,A.i,0,A.p),A.f,s,s,new B.o(s,s,s,v,s,new B.a9(A.a5,A.a8,A.x,u,s,s),A.n),s,s,s,s,A.ck,s,s,s),5),A.ad,B.E(B.ip(!0,s,s,A.y,C.fc7,new D.eO_(t),8,A.af,s,A.ah,!1),6)],p),A.m,s,A.e,A.i,0,s,s),1)],p),A.E,s,A.e,A.i,0,A.p),A.f,C.bqn,s,s,s,s,s,s,A.h7,s,s,s),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,q,s,s,s,s,s,s,!1,A.a3)},
cak(){var x,w,v,u,t=this,s=null,r=t.a.e,q=y.u,p=B.B(B.a([C.bZw,A.qY,C.fV6,A.b2,B.d(t.gaf_(),s,s,s,s,s,s,A.Et,s,s,s)],q),A.m,s,A.e,A.i,0,s,s),o=B.a([],q)
for(x=0;x<8;++x){w=t.d===x
v=w?6:0
u=w?C.ds2:A.RX
w=w?1.18:1
o.push(new B.D(A.f_,B.cY(s,new B.z5(t.b08(x,20,44,12,A.c,44),w,A.b5,A.eH,s,s),s,s,A.b5,new B.o(s,s,s,s,u,s,A.n),A.eH,s,s,s,new B.Q(0,0,0,v),s,s,s,s),s))}return B.aA(s,B.p(s,B.x(B.a([p,A.b2,new B.a4(s,68,B.ci(B.B(o,A.dI,s,A.e,A.i,0,s,s),A.t,s,A.y,s,s,s,s,A.aL),s),A.av,B.d(C.kr[t.d].a,s,s,s,s,s,s,A.oR,s,s,s)],q),A.m,s,A.e,A.i,0,A.p),A.f,s,s,C.b5L,s,s,s,s,C.a_x,s,s,s),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,r,s,s,s,s,s,s,!1,A.a3)},
bFd(){var x,w,v,u,t,s,r=this,q=null,p=r.a.e,o=C.kr[r.d],n=y.u
o=B.E(B.x(B.a([C.fE2,A.b2,B.d(o.b,q,q,q,q,q,q,A.n4,q,q,q),A.av,B.d(o.a,q,q,q,q,q,q,C.fjC,q,q,q),A.bF,B.d(o.c,q,q,q,q,q,q,C.fyq,q,q,q),A.am,B.aA(q,B.p(q,C.fXe,A.f,q,q,C.b6g,q,q,q,q,C.byQ,q,q,q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new D.eNV(r),q,q,q,q,q,q,!1,A.a3),A.b2],n),A.E,q,A.e,A.i,0,A.p),4)
x=B.p(q,q,A.f,C.bo7,q,q,q,q,q,A.eZ,q,q,q,0.6)
w=B.a([],n)
for(v=0;v<8;++v){u=C.kr[v]
t=r.d===v
s=t?C.tR:C.aft
t=t?12:10.5
w.push(B.aA(q,new B.D(A.w6,new B.y(u.a,q,new B.F(!0,s,q,"serif",q,q,t,A.jX,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q),q,q,q,q,q,q,q,q,q),q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new D.eNW(r,v),q,q,q,q,q,q,!1,A.a3))}return B.aA(q,B.p(q,B.B(B.a([o,x,B.E(B.cl(w,q,q,q,q,q,A.ah,!1),3)],n),A.m,q,A.e,A.i,0,q,q),A.f,C.btZ,q,q,q,q,q,q,A.GI,q,q,q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,p,q,q,q,q,q,q,!1,A.a3)}}
var z=a.updateTypes(["~()","WW(Z,bv<I>,bv<I>)","~(G)"])
D.fA_.prototype={
$1(d){var x=null,w=B.fz(x,x,1,x,B.cT(x,x,x,x,x,x,x,x,x,B.l(x,x,this.b,x,x,x,x,x,x,x,x,d,x,x,A.u,x,x,!0,x,x,x,x,x,x,x,x),this.a),A.a4,A.bX,x,A.dA,A.bV)
w.eg()
return w},
$S:366}
D.fzU.prototype={
$1(d){return Math.min(this.a*0.085,this.b*0.44/(d.length*0.62))},
$S:757}
D.fTo.prototype={
$1(d){var x=this.b,w=B.kB(this.a,x,d)
w.toString
x=B.kB(x,this.c,d)
x.toString
x=B.kB(w,x,d)
x.toString
return x},
$S:1988}
D.fmk.prototype={
$2(d,e){return A.k.E((this.a-d)/e,0,1)},
$S:80}
D.fmh.prototype={
$1(d){return A.dw.aw(0,d)},
$S:5}
D.fmj.prototype={
$2(d,e){var x=this.b
return new B.u(this.a.a+d*x,this.c.b-e*x)},
$S:390}
D.fmi.prototype={
$5(d,e,f,g,h){var x,w,v,u=this.a.$2(h,0.5)
if(u<=0)return
x=this.b
w=x.a
J.bl(w.save())
w.translate(f.a,f.b)
x.bW(0,A.k.E(A.lw.aw(0,u),0.01,1.3))
v=this.c
E.fTp(x,A.I,g,d,v,v>4.5?0.6:0)
D.hBo(x,new B.u(0,g*1.42),g,e)
w.restore()},
$S:745}
D.fqT.prototype={
$1(d){var x=this,w=null,v=x.c?A.u:A.a7
v=B.fz(w,w,1,w,B.cT(w,w,w,w,w,w,w,w,w,B.l(w,w,x.b,w,w,w,w,w,w,w,w,d,w,w,v,w,w,!0,w,x.d,w,w,w,w,w,w),x.a),A.a4,A.bX,w,A.dA,A.bV)
v.eg()
return v},
$S:366}
D.foG.prototype={
$1(d){var x=this,w=null,v=x.c?A.u:A.U
v=B.fz(w,w,1,w,B.cT(w,w,w,w,w,w,w,w,w,B.l(w,w,x.b,w,w,w,w,w,w,w,w,d,w,w,v,w,w,!0,w,x.d,w,w,w,w,w,w),x.a),A.a4,A.bX,w,A.dA,A.bV)
v.eg()
return v},
$S:366}
D.fAk.prototype={
$2(d,e){return A.k.E((this.a-d)/e,0,1)},
$S:80}
D.fAg.prototype={
$1(d){return A.dw.aw(0,d)},
$S:5}
D.fAj.prototype={
$2(d,e){var x=this.b
return new B.u(this.a+d*x,e*x)},
$S:390}
D.fAh.prototype={
$5(d,e,f,g,h){var x,w,v,u=this,t=u.a.$2(h,0.6)
if(t<=0)return
x=u.b
w=x.a
J.bl(w.save())
w.translate(f.a,f.b)
x.bW(0,A.k.E(A.lw.aw(0,t),0.01,1.3))
v=u.c
E.fTp(x,A.I,g,d,v,u.d>9.5?0.5+0.3*Math.sin(v*3+d):0)
D.hBo(x,new B.u(0,g*1.42),g,e)
w.restore()},
$S:745}
D.fAi.prototype={
$3(d,e,f){var x,w,v,u,t=this.a.$2(f,0.5)
if(t<=0)return
x=A.k.E(A.lw.aw(0,t),0.01,1.3)*(1+0.07*Math.sin(this.b*6))
w=this.c
v=e*x
$.S()
u=B.J()
u.r=A.bE.gp(0)
w.ad(d,v,u)
u=B.J()
u.b=A.a9
u.c=2
u.r=A.c.gp(0)
w.ad(d,v,u)
D.GR(w,"\u2665",d.aF(0,new B.u(e*0.5*x,e*0.62*x)),e*1.3*x,A.c,A.bj,0,null)},
$S:378}
D.fAl.prototype={
$2(d,e){var x,w,v=this.a,u=v.a
v=v.c-u
u+=v*0.08
x=this.b
w=x*d
return new B.a3(u,w,u+v*0.84,w+x*e)},
$S:1990}
D.h0y.prototype={
$3(d,e,f){var x=this
return new D.WW(x.d,x.e,x.a,x.c,x.b,null)},
$C:"$3",
$R:3,
$S:z+1}
D.h0z.prototype={
$4(d,e,f,g){var x=y.g
return new B.d1(e,!1,B.iv(A.A,g,null,new B.bg(B.cK(A.cu,e,null),new B.bq(0.85,1,x),x.k("bg<bO.T>"))),null)},
$C:"$4",
$R:4,
$S:33}
D.eO6.prototype={
$0(){var x=this.a
if(x.c!=null&&!x.r)x.m(new D.eO5(x))},
$S:0}
D.eO5.prototype={
$0(){return this.a.y=!1},
$S:0}
D.eO4.prototype={
$0(){var x,w=this.a
w.f=-1
w.e=A.o.F(w.gDD()+this.b,10)
if(w.gDD()<0)w.e=w.gDD()+10
x=w.gaeZ().y
x=x==null?null:A.o.ao(x.a,1000)
w.x=x==null?0:x
w.ajZ()},
$S:0}
D.eO7.prototype={
$0(){var x=this.a
x.f=this.b
x.r=!1
x.ajZ()},
$S:0}
D.eOg.prototype={
$0(){var x=this.a
return x.m(x.gcEE())},
$S:0}
D.eOf.prototype={
$2(d,e){var x=null,w=this.a,v=w.gaeZ().y,u=v==null?x:A.o.ao(v.a,1000),t=(u==null?0:u)/1000,s=w.x===0&&w.a.f?t:99
return B.b4(x,x,x,new D.bwF(w.gDD(),w.f,t,s,x),A.fF)},
$S:63}
D.eOe.prototype={
$5$color$on(d,e,f,g,h){var x=null,w=h?g.j(0.28):A.c.j(0.08),v=B.n(14),u=B.L(h?g:A.aX,A.r,1)
return B.aA(x,B.p(x,B.x(B.a([B.X(d,g,x,x,x,20),A.vq,B.d(e,x,x,x,x,x,x,B.l(x,x,g,x,x,x,x,x,x,x,x,9.5,x,x,A.H,x,x,!0,x,x,x,x,x,x,x,x),x,x,x)],y.u),A.m,x,A.e,A.P,0,A.p),A.f,x,x,new B.o(w,x,u,v,x,x,A.n),x,x,x,A.jC,A.kN,x,x,56),A.y,!1,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,f,x,x,x,x,x,x,!1,A.a3)},
$3(d,e,f){return this.$5$color$on(d,e,f,A.c,!1)},
$4$color(d,e,f,g){return this.$5$color$on(d,e,f,g,!1)},
$S:1991}
D.eO9.prototype={
$0(){return this.a.ayl(-1)},
$S:0}
D.eOa.prototype={
$0(){return this.a.ayl(1)},
$S:0}
D.eOb.prototype={
$0(){return this.a.ayl(0)},
$S:0}
D.eOc.prototype={
$0(){var x=this.a
return x.m(new D.eO8(x))},
$S:0}
D.eO8.prototype={
$0(){var x=this.a
x.r=!x.r
x.ajZ()},
$S:0}
D.eOd.prototype={
$0(){return this.a.b2_(0)},
$S:0}
D.eO3.prototype={
$0(){var x=this.a
return x.m(new D.eO2(x))},
$S:0}
D.eO2.prototype={
$0(){return this.a.r=!1},
$S:0}
D.eO0.prototype={
$0(){return this.a.d=this.b},
$S:0}
D.eO1.prototype={
$0(){return this.a.b07(this.b)},
$S:0}
D.eNY.prototype={
$2(d,e){return A.bm},
$S:37}
D.eNX.prototype={
$2(d,e){var x=null,w=this.a,v=w.d===e?1.1:1
v=B.a([B.vT(w.b08(e,18,46,6,A.c,80),A.b5,A.fO,v)],y.u)
if(w.d===e)v.push(new B.D(A.ui,B.d(C.kr[e].a,x,x,x,x,x,x,C.fwA,x,x,x),x))
return B.x(v,A.m,x,A.e,A.P,0,A.p)},
$S:712}
D.eNZ.prototype={
$0(){var x=this.a
return x.a.a6t(0,x.d)},
$S:0}
D.eO_.prototype={
$2(d,e){return this.a.aym(e,15,1/0,!0,8,A.c,1/0)},
$S:42}
D.eNV.prototype={
$0(){var x=this.a
return x.a.a6t(0,x.d)},
$S:0}
D.eNW.prototype={
$0(){return this.a.b07(this.b)},
$S:0};(function aliases(){var x=D.aNN.prototype
x.byM=x.t})();(function installTearOffs(){var x=a._instance_0u,w=a._instance_1u
var v
x(v=D.aFT.prototype,"gb06","cai",0)
x(v,"gcEE","ajZ",0)
w(v,"gcgp","b2_",2)})();(function inheritance(){var x=a.mixinHard,w=a.inheritMany,v=a.inherit
w(B.hz,[D.fA_,D.fzU,D.fTo,D.fmh,D.fmi,D.fqT,D.foG,D.fAg,D.fAh,D.fAi,D.h0y,D.h0z,D.eOe])
w(B.jx,[D.fmk,D.fmj,D.fAk,D.fAj,D.fAl,D.eOf,D.eNY,D.eNX,D.eO_])
w(B.aD,[D.wM,D.wf,D.y5])
w(B.af,[D.WW,D.asZ])
w(B.ah,[D.aNN,D.bmH])
v(D.aFT,D.aNN)
w(B.iI,[D.eO6,D.eO5,D.eO4,D.eO7,D.eOg,D.eO9,D.eOa,D.eOb,D.eOc,D.eO8,D.eOd,D.eO3,D.eO2,D.eO0,D.eO1,D.eNZ,D.eNV,D.eNW])
v(D.bwF,B.mg)
x(D.aNN,B.cg)})()
B.j2(b.typeUniverse,JSON.parse('{"WW":{"af":[],"v":[]},"aFT":{"ah":["WW"]},"bwF":{"aC":[]},"asZ":{"af":[],"v":[]},"bmH":{"ah":["asZ"]},"NU":{"af":[],"v":[]}}'))
var y=(function rtii(){var x=B.as
return{C:x("O<Sz>"),r:x("O<ac>"),c:x("O<t>"),a:x("O<fW>"),s:x("O<+(I,I,I)>"),x:x("O<m>"),u:x("O<v>"),h:x("O<I>"),g:x("bq<I>"),e:x("G")}})();(function constants(){var x=a.makeConstList
C.bgo=new B.t(1,0.0196078431372549,0.03137254901960784,0.058823529411764705,A.q)
C.bs5=new B.t(1,0.043137254901960784,0.10196078431372549,0.2,A.q)
C.diQ=x([C.bgo,C.bs5],y.c)
C.c6Y=new B.a9(A.b0,A.b6,A.x,C.diQ,null,null)
C.b5J=new B.o(null,null,null,null,null,C.c6Y,A.n)
C.bpJ=new B.t(1,0.42745098039215684,0.47843137254901963,0.5764705882352941,A.q)
C.bem=new B.t(1,0.16862745098039217,0.1803921568627451,0.26666666666666666,A.q)
C.bfz=new B.t(1,0.4823529411764706,0.29411764705882354,0.41568627450980394,A.q)
C.dvj=x([C.bpJ,C.bem,C.bfz],y.c)
C.c5h=new B.a9(A.az,A.aE,A.x,C.dvj,null,null)
C.b5L=new B.o(null,null,null,null,null,C.c5h,A.n)
C.b1b=new B.da(0.5,-0.6)
C.btq=new B.t(1,0.22745098039215686,0.054901960784313725,0.10980392156862745,A.q)
C.ddW=x([C.btq,A.ei],y.c)
C.ewp=new B.c_(C.b1b,1.3,A.x,null,0,C.ddW,null,null)
C.b5U=new B.o(null,null,null,null,null,C.ewp,A.n)
C.tR=new B.t(1,0.8392156862745098,0.7176470588235294,0.4823529411764706,A.q)
C.b40=new B.ay(C.tR,1,A.r,-1)
C.b4d=new B.bG(A.a0,A.a0,C.b40,A.a0)
C.b6g=new B.o(null,null,C.b4d,null,null,null,A.n)
C.aeZ=new B.t(0.9490196078431372,0.06666666666666667,0.07450980392156863,0.09411764705882353,A.q)
C.bdT=new B.t(1,0.16470588235294117,0.16470588235294117,0.17647058823529413,A.q)
C.XS=new B.t(1,0.16862745098039217,0.1843137254901961,0.21176470588235294,A.q)
C.bdX=new B.t(1,0.00784313725490196,0.01568627450980392,0.03529411764705882,A.q)
C.aft=new B.t(1,0.6588235294117647,0.6235294117647059,0.5647058823529412,A.q)
C.Y_=new B.t(1,0.24705882352941178,0.5607843137254902,0.30196078431372547,A.q)
C.Fr=new B.t(1,0.7215686274509804,0.6980392156862745,0.6549019607843137,A.q)
C.agc=new B.t(1,0.8784313725490196,0.6745098039215687,0.4117647058823529,A.q)
C.Yp=new B.t(1,1,0.23137254901960785,0.12156862745098039,A.q)
C.agA=new B.t(1,0.00784313725490196,0.011764705882352941,0.0392156862745098,A.q)
C.FN=new B.t(1,0.06666666666666667,0.0784313725490196,0.09411764705882353,A.q)
C.y4=new B.t(1,0.054901960784313725,0.07058823529411765,0.09411764705882353,A.q)
C.bo7=new B.t(1,0.2901960784313726,0.26666666666666666,0.23529411764705882,A.q)
C.iC=new B.t(1,0.043137254901960784,0.12156862745098039,0.29411764705882354,A.q)
C.mE=new B.t(1,0.09019607843137255,0.09019607843137255,0.10980392156862745,A.q)
C.bqj=new B.t(1,0.1843137254901961,0.43529411764705883,0.23137254901960785,A.q)
C.bqn=new B.t(1,0.08627450980392157,0.09411764705882353,0.10980392156862745,A.q)
C.bqV=new B.t(1,0.24705882352941178,0.3843137254901961,0.07058823529411765,A.q)
C.Zw=new B.t(1,1,0.9529411764705882,0.6274509803921569,A.q)
C.ajI=new B.t(1,0.8392156862745098,0.7254901960784313,0.5490196078431373,A.q)
C.btZ=new B.t(1,0.10196078431372549,0.09019607843137255,0.0784313725490196,A.q)
C.byQ=new B.Q(0,0,0,1)
C.bzH=new B.Q(10,10,10,0)
C.a_x=new B.Q(10,6,10,8)
C.al7=new B.Q(14,10,10,10)
C.a1X=new B.a0(62970,"MaterialIcons",!1)
C.apE=new B.a0(983316,"MaterialIcons",!1)
C.rS=new B.a0(983617,"MaterialIcons",!1)
C.bUG=new B.ae(A.CG,13,A.ac,null,null,null)
C.bYV=new B.ae(A.f1,13,A.ac,null,null,null)
C.bQg=new B.a0(983768,"MaterialIcons",!1)
C.bZw=new B.ae(C.bQg,13,A.c,null,null,null)
C.cMo=x([A.aJ,A.jy,A.q2],y.c)
C.c45=new B.a9(A.b0,A.b6,A.x,C.cMo,null,null)
C.c4b=new B.a9(A.b0,A.b6,A.x,L.Rv,null,null)
C.d6U=x([A.fe,A.dH,A.cG],y.c)
C.c4n=new B.a9(A.b0,A.b6,A.x,C.d6U,null,null)
C.d54=x([A.dB,A.aw],y.c)
C.c54=new B.a9(A.b0,A.b6,A.x,C.d54,null,null)
C.Mc=new B.t(1,0.11764705882352941,0.30980392156862746,0.6392156862745098,A.q)
C.cLU=x([C.iC,C.Mc,A.ay,A.bM],y.c)
C.dms=x([0,0.42,0.8,1],y.h)
C.c5j=new B.a9(A.b0,A.b6,A.x,C.cLU,C.dms,null)
C.dun=x([A.bO,A.c,A.bL],y.c)
C.c5l=new B.a9(A.a5,A.a8,A.x,C.dun,null,null)
C.dv0=x([A.hl,A.fU],y.c)
C.c6a=new B.a9(A.b0,A.b6,A.x,C.dv0,null,null)
C.dlI=x([A.du,A.p7],y.c)
C.c6h=new B.a9(A.b0,A.b6,A.x,C.dlI,null,null)
C.c7i=new B.a9(A.b0,A.b6,A.x,N.a4d,null,null)
C.dgM=x([A.aN,A.al],y.c)
C.c7H=new B.a9(A.b0,A.b6,A.x,C.dgM,null,null)
C.c8D=x(["Add every person","Link mums, dads, kids","Keep it for ever"],y.x)
C.U9=new B.z(2,3)
C.Ua=new B.z(3,4)
C.csr=x([A.lJ,A.yW],B.as("O<a0>"))
C.csE=x([-0.05,0.05],y.h)
C.ejT=new B.u(26,-8)
C.ekI=new B.u(52,0)
C.ejS=new B.u(26,8)
C.ct1=x([A.I,C.ejT,C.ekI,C.ejS],B.as("O<u>"))
C.ayf=x([A.c_,A.aJ,A.dB,A.ba,A.cG],y.c)
C.f_D=new B.b6(-0.2,0.46,0.12)
C.eXP=new B.b6(0.2,0.46,0.12)
C.eYE=new B.b6(0,0.52,0.15)
C.eWX=new B.b6(0,0.7,0.1)
C.cMD=x([C.f_D,C.eXP,C.eYE,C.eWX],y.s)
C.cYp=x([A.eO,A.bM,A.MR,A.ep],y.c)
C.azf=x([A.cG,A.bs,A.c_,A.ba],y.c)
C.eE5=new B.z("Chairs",120)
C.eE8=new B.z("Cloth",80)
C.eEs=new B.z("Delivery",25)
C.azC=x([C.eE5,C.eE8,C.eEs],B.as("O<+(m,G)>"))
C.edh=new D.y5("NGMY Tree Story","A family grows, one branch at a time")
C.edc=new D.y5("Coin Hero","A little coin saves up and wins the day")
C.edk=new D.y5("Space Voyage","The NGMY rocket explores the stars")
C.edb=new D.y5("Ocean Friends","Fish, bubbles and a friendly whale")
C.edd=new D.y5("Rainy Village","Storm clouds, then a rainbow")
C.edf=new D.y5("Spark Adventure","Follow a spark round a circuit")
C.ede=new D.y5("Fireworks Night","Colour bursts over the city")
C.edj=new D.y5("Little Train","A train rolls past the hills")
C.edg=new D.y5("Robot Disco","A robot dances to the beat")
C.edi=new D.y5("Garden Time","Flowers grow and butterflies fly")
C.RB=x([C.edh,C.edc,C.edk,C.edb,C.edd,C.edf,C.ede,C.edj,C.edg,C.edi],B.as("O<y5>"))
C.aAl=x([A.c_,A.bs,A.aw,A.bq,A.cG],y.c)
C.dbL=x([A.hl,A.p7],y.c)
C.dbN=x([A.bl,A.ay,A.cT],y.c)
C.dEU=new D.wf("NGMY Ads","\ud83d\udce2","Every NGMY promotion, as cartoons",A.c_,-1)
C.dEP=new D.wf("Civic Registry","\ud83e\udeaa","Enroll your family in your community",A.d3,0)
C.dEV=new D.wf("Jobs","\ud83d\udcbc","Find work and get hired",A.ay,1)
C.dF_=new D.wf("NGMY Store","\ud83d\udecd\ufe0f","African food and traditions",A.fs,2)
C.dF0=new D.wf("Kiswahili","\ud83d\udde3\ufe0f","Learn Swahili and English",A.bP,3)
C.dEY=new D.wf("Doc Scanner","\ud83d\udcc4","Scan, save and share",A.cf,4)
C.dEQ=new D.wf("Invoices","\ud83e\uddfe","Professional invoices",A.bE,5)
C.dEN=new D.wf("Calendar","\ud83d\udcc5","This month, today lit up",A.aw,-2)
C.kr=x([C.dEU,C.dEP,C.dEV,C.dF_,C.dF0,C.dEY,C.dEQ,C.dEN],B.as("O<wf>"))
C.eLr=new B.z("Jambo! Habari yako?","Nzuri, asante!")
C.eEB=new B.z("Jina lako nani?","Jina langu ni Amina.")
C.eFk=new B.z("Karibu nyumbani!","Asante sana!")
C.eLq=new B.z("Naenda shule leo.","I am going to school.")
C.eMx=new B.z("Ninapenda kujifunza!","I love to learn!")
C.eW3=new B.z("Maji, tafadhali.","Water, please.")
C.eJk=new B.z("Rafiki yangu mpendwa","My dear friend")
C.eO6=new B.z("Tuonane kesho!","See you tomorrow!")
C.eP4=new B.z("Pole sana, rafiki.","I am so sorry, friend.")
C.eLp=new B.z("Hongera! Umefaulu!","Congratulations! You passed!")
C.eGA=new B.z("Mimi ni mwanafunzi.","I am a student.")
C.eB1=new B.z("Chakula kitamu sana!","The food is so delicious!")
C.eVC=new B.z("Safari njema!","Have a good trip!")
C.ex3=new B.z("Unaongea Kiswahili vizuri!","You speak Swahili well!")
C.aAB=x([C.eLr,C.eEB,C.eFk,C.eLq,C.eMx,C.eW3,C.eJk,C.eO6,C.eP4,C.eLp,C.eGA,C.eB1,C.eVC,C.ex3],B.as("O<+(m,m)>"))
C.eZv=new B.b6(-0.3,0.32,0.2)
C.eX4=new B.b6(-0.08,0.17,0.22)
C.eX5=new B.b6(0.14,0.14,0.2)
C.eYM=new B.b6(0.34,0.3,0.2)
C.f06=new B.b6(0,0.32,0.26)
C.eYu=new B.b6(-0.42,0.46,0.15)
C.f01=new B.b6(0.42,0.46,0.15)
C.eZK=new B.b6(0,0.07,0.15)
C.aAC=x([C.eZv,C.eX4,C.eX5,C.eYM,C.f06,C.eYu,C.f01,C.eZK],y.s)
C.hn3=new D.wM("NGMY Civic Registry","Enroll your family. Stay counted and helped together.",A.d7,A.aJ)
C.hnh=new D.wM("NGMY Jobs","Find work. Get hired. Get paid.",A.d0,A.aT)
C.hne=new D.wM("NGMY Store","African food and traditions. Support our Congolese and African community.",A.kj,A.bs)
C.hn9=new D.wM("Kiswahili School","Learn Swahili and English, step by step.",A.cQ,A.mG)
C.hn6=new D.wM("Document Scanner","Scan, save and share your papers.",A.qb,A.hh)
C.hn4=new D.wM("Invoice Creator","Make professional invoices in minutes.",A.pW,A.nX)
C.hn0=new D.wM("Family Book and Tree","Write your family story. Grow your tree.",A.iY,A.M_)
C.hn2=new D.wM("NGMY Wallet","Save, send and earn coins.",A.q4,A.dB)
C.hn5=new D.wM("Vault Games","Play, win and learn.",A.dF,A.b8)
C.hnf=new D.wM("Electronics Lab","Build real circuits and learn.",A.eP,A.b_)
C.hna=new D.wM("NGMY Helper and Advisors","Friendly help, any time.",A.l4,A.cG)
C.dfy=x([C.hn3,C.hnh,C.hne,C.hn9,C.hn6,C.hn4,C.hn0,C.hn2,C.hn5,C.hnf,C.hna],B.as("O<wM>"))
C.dlJ=x([A.dF,A.fe],y.c)
C.dmb=x(["For you","Apps","Library"],y.x)
C.aBx=x([A.bB,A.bs,A.cT,A.au],y.c)
C.aBC=x([-16,16],y.h)
C.Sd=x([-22,22],y.h)
C.Se=x([-24,24],y.h)
C.a5B=x([-5,5],y.h)
C.aBK=x([-8,8],y.h)
C.dpw=x([A.aK,A.al],y.c)
C.b8e=new B.ac(0,A.G,A.aS,A.ds,14)
C.ds2=x([C.b8e],y.r)
C.dtR=x([A.aw,A.cd,A.bs,A.bf,A.d3,A.b7],y.c)
C.duU=x(["M","T","W","T","F","S","S"],y.x)
C.dw8=x([A.c,A.o_],y.c)
C.dCp=new B.hj(A.G,1.2)
C.ct5=x([A.eO,A.el,A.jR],y.c)
C.ew4=new B.c_(I.xz,0.5,A.x,null,0,C.ct5,null,null)
C.cJc=x([A.m1,A.m0],y.c)
C.ew6=new B.c_(R.acG,0.5,A.x,null,0,C.cJc,null,null)
C.c_0=new B.ae(A.f1,11,A.ac,null,null,null)
C.fuo=new B.F(!0,A.aR,null,null,null,null,9,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.fS1=new B.y("Search",null,C.fuo,null,null,null,null,null,null,null,null,null)
C.cND=x([C.c_0,A.qY,C.fS1],y.u)
C.f5q=new B.ca(A.aL,A.e,A.i,A.m,null,A.p,null,0,C.cND,null)
C.fc7=new B.hL(3,5,5,1.35,null)
C.bsI=new B.t(1,0.9450980392156862,0.9098039215686274,0.8470588235294118,A.q)
C.fjC=new B.F(!0,C.bsI,null,"serif",null,null,15,A.jX,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.frz=new B.F(!0,A.ac,null,null,null,null,9.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.fsa=new B.F(!0,A.aR,null,null,null,null,9.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.aax=new B.F(!0,A.ac,null,null,null,null,12.5,null,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.aVe=new B.F(!0,A.ac,null,null,null,null,10,A.U,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.fwA=new B.F(!0,A.c,null,null,null,null,8.5,A.U,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.fy7=new B.F(!0,A.ac,null,null,null,null,8.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.fyq=new B.F(!0,C.aft,null,null,null,null,8.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.foT=new B.F(!0,A.aC,null,null,null,null,9.5,A.U,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.fAO=new B.y("NGMY Apps",null,C.foT,null,null,null,null,null,null,null,null,null)
C.flk=new B.F(!0,C.tR,null,null,null,null,8,A.a7,null,3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.fE2=new B.y("BANG & OLUFSEN",null,C.flk,null,null,null,null,null,null,null,null,null)
C.frh=new B.F(!0,A.w,null,null,null,null,9,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.fEv=new B.y("Open",null,C.frh,null,null,null,null,null,null,null,null,null)
C.fHL=new B.y("Home",null,C.aVe,null,null,null,null,null,null,null,null,null)
C.fIN=new B.y("SAMSUNG",null,A.aUV,null,null,null,null,null,null,null,null,null)
C.fP0=new B.y("LG",null,A.xb,null,null,null,null,null,null,null,null,null)
C.fV6=new B.y("tv",null,A.r1,null,null,null,null,null,null,null,null,null)
C.foN=new B.F(!0,C.tR,null,null,null,null,8.5,null,null,2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.fXe=new B.y("OPEN",null,C.foN,null,null,null,null,null,null,null,null,null)})()};
(a=>{a["oBiRM5Au8HQ/oqa4GPnCUINvFQ8="]=a.current})($__dart_deferred_initializers__);