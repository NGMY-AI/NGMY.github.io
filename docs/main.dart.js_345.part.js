((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,A,H,I,K,L,G,M,N,O,P,Q,R,D={
r7(d,e,f,g,h,i){var x=new D.fys(e,h,!0),w=x.$1(g),v=w.b.c
if(v>i&&v>0)w=x.$1(Math.max(2,g*i/v))
x=w.b
v=x.c
x=x.a.c
w.a3(d,f.aE(0,new B.t(v/2,x.gba(x)/2)))},
agB(d,e,f,g,h,i){var x,w,v,u,t,s,r,q=null
if(h<=0)return
x=d.a
J.bl(x.save())
x.translate(e.a,e.b)
d.bW(0,A.k.E(A.lv.aw(0,A.k.E(h,0,1)),0.01,1.3))
w=B.fy(q,q,q,q,B.cS(q,q,q,q,q,q,q,q,q,B.l(q,q,A.av,q,q,q,q,q,q,q,q,g,q,q,A.u,q,q,!0,q,q,q,q,q,q,q,q),f),A.a4,A.bX,q,A.dA,A.bV)
w.eg()
v=w.b
u=v.c
v=v.a.c
t=g*0.8
s=B.br(B.bK(A.I,v.gba(v)+g*0.7,u+g*1.1),new B.aP(t,t))
t=$.S()
u=B.I()
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
r=B.I()
r.r=i.gp(0)
d.aI(t,r)
r=w.b
t=r.c
r=r.a.c
w.a3(d,new B.t(-t/2,-r.gba(r)/2))
x.restore()},
h7w(d,e,f,g){var x,w=A.k.E(Math.abs(Math.cos(g)),0.15,1),v=f*2,u=v*w,t=B.bK(e,v,u)
$.S()
x=B.I()
x.r=A.bt.gp(0)
d.dQ(t,x)
d.dQ(B.bK(e,v,u),E.yL(A.q0,f*0.18))
if(w>0.5)D.r7(d,"$",e,f*1.2,A.q0,9999)},
i0h(d,e,f,g){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=new B.e6()
k.cX(4)
for(x=e.a,w=f-g,v=e.b,u=d.a,t=f*3,s=v*0.025,r=v*0.012,q=0;q<18;++q){p=k.ag()
o=A.k.F(w*(40+k.ag()*60)+k.ag()*v,v)
J.bl(u.save())
u.translate(p*x,o)
u.rotate((t+q)*180/3.141592653589793,0,0)
p=B.bK(A.I,r,s)
n=C.axO[A.o.F(q,5)]
$.S()
m=new B.ao(A.O,A.M,A.S,A.T,A.R)
m.r=n.gp(0)
l=m.G()
u.drawRect(B.bG(p),l)
l.delete()
u.restore()}},
ian(d,e,f,g){switch(A.o.F(f,11)){case 0:D.i_U(d,e,g)
break
case 1:D.i2Z(d,e,g)
break
case 2:D.i8m(d,e,g)
break
case 3:D.i8B(d,e,g)
break
case 4:D.i7v(d,e,g)
break
case 5:D.i2F(d,e,g)
break
case 6:D.i_j(d,e,g)
break
case 7:D.i9n(d,e,g)
break
case 8:D.i1E(d,e,g)
break
case 9:D.i32(d,e,g)
break
default:D.i2g(d,e,g)}},
i_U(a2,a3,a4){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null,d=a3.a,a0=a3.b,a1=a0*0.94
for(x=a2.a,w=d*0.12,v=d*0.06,u=a0*0.06,t=y.a,s=0;s<6;++s){r=d*(0.04+s*0.17)
q=a0*(0.18+0.08*A.o.F(s,3))
p=a1-q
o=r+w
n=A.c.j(0.2)
m=$.S()
l=new B.ao(A.O,A.M,A.S,A.T,A.R)
l.r=n.gp(0)
k=l.G()
x.drawRect(B.bG(new B.a3(r,p,o,p+q)),k)
k.delete()
l=B.a([],t)
m=new B.aF(m.r,A.ag,e,e,l)
l.push(new B.aY(r-3,p))
l.push(new B.aq(r+v,p-u))
l.push(new B.aq(o+3,p))
l.push(new B.bt())
p=new B.ao(A.O,A.M,A.S,A.T,A.R)
p.r=A.c.j(0.3).gp(0)
k=p.G()
p=m.gbu().a.snapshot()
x.drawPath((m.e=new B.cd(p)).a,k)
k.delete()}w=A.w.j(0.18)
$.S()
v=B.I()
v.r=w.gp(0)
a2.aP(new B.a3(0,a1,0+d,a1+(a0-a1)),v)
j=Math.cos(a4*1.6)
i=Math.min(d*0.46,a0*0.95)
h=i*0.62
J.bl(x.save())
v=d*0.58
x.translate(v,a0*0.45)
a2.p9(0,Math.max(0.08,Math.abs(j)),1)
w=h*0.1
g=B.br(B.bK(A.I,h,i),new B.aP(w,w))
u=B.I()
t=j>=0
u.sam(new B.a9(A.a5,A.a8,A.x,t?C.dv3:C.dkE,e,e).aA(0,new B.a3(g.a,g.b,g.c,g.d)))
a2.az(g,u)
a2.az(g,E.yL(A.d7,2))
if(t){u=-i
t=u*0.28
p=-h
o=p*0.05
n=h*0.22
m=B.I()
m.r=F.mF.gp(0)
a2.ad(new B.t(t,o),n,m)
n=B.bX(new B.t(t,o),n)
o=B.I()
o.r=F.lz.gp(0)
a2.e4(n,3.141592653589793,3.141592653589793,!0,o)
for(u*=0.05,t=p*0.25,o=h*0.07,s=0;s<3;++s){n=t+s*h*0.16
n=B.br(new B.a3(u,n,u+i*(0.42-s*0.06),n+o),A.hG)
m=new B.ao(A.O,A.M,A.S,A.T,A.R)
m.r=A.du.gp(0)
k=m.G()
x.drawRRect(B.e7(n),k)
k.delete()}D.r7(a2,"COMMUNITY ID",new B.t(0,p*0.4),w,A.d7,i*0.8)}else D.r7(a2,"\u2605 NGMY \u2605",A.I,h*0.16,A.c,i*0.8)
x.restore()
w=a4>2.6
if(w){s=A.k.E((a4-2.6)/0.35,0,1)
J.bl(x.save())
x.translate(v,a0*0.52)
a2.il(0,-0.25)
a2.bW(0,2.2-1.2*A.et.aw(0,s))
f=B.bK(A.I,h*0.3,i*0.7)
a2.az(B.br(f,A.hH),E.yL(A.cT.j(s),3))
D.r7(a2,"\u2713 REGISTERED",A.I,h*0.13,A.cT.j(s),(f.c-f.a)*0.9)
x.restore()}x=a4*5
v=Math.sin(x)
x=Math.sin(x)
w=w&&a4<4
E.AY(a2,new B.t(d*0.2,a1),a0*0.7,a4,!1,Math.abs(x)*a0*0.015,0,A.cT,F.mF,w,(v+1)/2)
if(a4>3)D.i0h(a2,new B.av(d,a0*0.9),a4,3)},
i2Z(a6,a7,a8){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=a7.a,a3=a7.b,a4=a3*0.94,a5=A.w.j(0.2)
$.S()
x=B.I()
x.r=a5.gp(0)
a6.aP(new B.a3(0,a4,0+a2,a4+(a3-a4)),x)
w=a2*0.62
v=a2*0.3
u=a3*0.62
x=a4-u
a5=w+v
t=B.I()
t.r=A.bo.gp(0)
a6.aP(new B.a3(w,x,a5,x+u),t)
for(t=a6.a,s=a8*1.5,r=v*0.2,q=u*0.1,p=0;p<4;++p)for(o=x+u*(0.1+p*0.17),n=o+q,m=0;m<3;++m){l=w+v*(0.12+m*0.3)
k=A.o.F(p+m+A.k.bf(s),3)===0?A.dB:A.aJ.j(0.6)
$.S()
j=new B.ao(A.O,A.M,A.S,A.T,A.R)
j.r=k.gp(0)
i=j.G()
t.drawRect(B.bG(new B.a3(l,o,l+r,n)),i)
i.delete()}s=w+v*0.38
r=u*0.16
q=a4-r
$.S()
o=B.I()
o.r=A.fV.gp(0)
a6.aP(new B.a3(s,q,s+v*0.24,q+r),o)
o=x-a3*0.09
r=a3*0.02
o=B.br(new B.a3(w,o,a5,o+a3*0.08),new B.aP(r,r))
a5=B.I()
a5.r=A.aA.gp(0)
a6.az(o,a5)
a5=a3*0.05
o=a3*0.06
D.r7(a6,"JOBS",new B.t(w+v/2,x-a5),o,A.c,9999)
h=A.k.E(a8/2.8,0,1)
x=a2*0.12
g=x+(w+v*0.3-x)*A.dw.aw(0,h)
x=h<1
f=x?Math.abs(Math.sin(a8*12))*a3*0.02:0
s=h>=1
q=s?(Math.sin(a8*6)+1)/2:0
E.AY(a6,new B.t(g,a4),a3*0.6,a8,!1,f,2,A.b7,A.ob,s,q)
if(x){x=B.br(B.bK(new B.t(g-a3*0.12,a4-a3*0.17-f),a3*0.075,a3*0.1),A.hG)
q=B.I()
q.r=A.fV.gp(0)
a6.az(x,q)}if(s){x=a8-2.8
D.agB(a6,new B.t(g+a5,a4-a3*0.78),"Hired! \ud83c\udf89",a3*0.07,x/0.4,A.c)
for(a5=x*0.8,x=a4-a3*0.5,s=a3*0.03,q=a8*8,e=0;e<6;++e){d=A.k.F(a5+e*0.17,1)
D.h7w(a6,new B.t(g+Math.sin(e*2.1)*a3*0.2,x-d*a3*0.25),s,q+e)}}a5=a2*0.04
x=a5+v
s=o+a3*0.3
r=B.br(new B.a3(a5,o,x,s),new B.aP(r,r))
$.S()
q=B.I()
q.r=A.io.gp(0)
a6.az(r,q)
for(x-=a5,r=a5+x*0.08,s-=o,q=x*0.84,n=s*0.24,a5+=x*0.14,x*=0.5,l=s*0.05,e=0;e<3;++e){k=(1-A.k.E((a8-e*0.5)/0.5,0,1))*a2*0.3
j=r+k
a0=e*0.3
a1=o+s*(0.08+a0)
a1=B.br(new B.a3(j,a1,j+q,a1+n),A.hG)
j=new B.ao(A.O,A.M,A.S,A.T,A.R)
j.r=A.c.gp(0)
i=j.G()
t.drawRRect(B.e7(a1),i)
i.delete()
k=a5+k
a0=o+s*(0.14+a0)
a1=new B.ao(A.O,A.M,A.S,A.T,A.R)
a1.r=A.bK.gp(0)
i=a1.G()
t.drawRect(B.bG(new B.a3(k,a0,k+x,a0+l)),i)
i.delete()}},
i8m(a1,a2,a3){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=a2.a,e=a2.b,d=e*0.94,a0=A.fV.j(0.6)
$.S()
x=B.I()
x.r=a0.gp(0)
a1.aP(new B.a3(0,d,0+f,d+(e-d)),x)
w=f*0.3
v=f*0.66
for(a0=v/12,x=e*0.14,u=a0+1,t=x+e*0.12,s=a1.a,r=0;r<12;++r){q=w+a0*r
p=new B.ao(A.O,A.M,A.S,A.T,A.R)
p.r=C.aB5[A.o.F(r,4)].gp(0)
o=p.G()
s.drawRect(B.bG(new B.a3(q,x,q+u,t)),o)
o.delete()}for(u=e*0.2,t=e*0.1,q=u+t,r=0;r<12;++r){p=w+a0*r
n=new B.ao(A.O,A.M,A.S,A.T,A.R)
n.r=C.aB5[A.o.F(r,4)].gp(0)
o=n.G()
s.drawArc.apply(s,[B.bG(new B.a3(p,u,p+a0,q)),0,180,!0,o])
o.delete()}a0=w+4
u=e*0.3
q=u+(d-u)
p=B.I()
p.r=A.fV.gp(0)
a1.aP(new B.a3(a0,u,a0+4,q),p)
p=w+v
a0=p-8
n=B.I()
n.r=A.fV.gp(0)
a1.aP(new B.a3(a0,u,a0+4,q),n)
n=e*0.68
q=n+e*0.26
a0=B.br(new B.a3(w,n,p,q),A.ie)
u=B.I()
u.r=A.io.gp(0)
a1.az(a0,u)
for(a0=p-w,u=a0/6,p=n+2,a0/=12,q=p+(q-n-4),r=0;r<6;++r){m=w+u*r
l=new B.ao(A.O,A.M,A.S,A.T,A.R)
l.r=((r&1)===0?A.bB:A.bt).j(0.9).gp(0)
o=l.G()
s.drawRect(B.bG(new B.a3(m,p,m+a0,q)),o)
o.delete()}a0=w+v*0.2
u=e*0.62
k=new B.t(a0,u)
q=e*0.17
p=e*0.03
m=B.br(B.bK(k,e*0.11,q),new B.aP(p,p))
l=B.I()
l.r=A.cr.gp(0)
a1.az(m,l)
l=-e
q=B.bK(k.a7(0,new B.t(0,l*0.05)),e*0.04,q)
m=B.I()
m.r=A.fs.gp(0)
a1.dQ(q,m)
for(q=a3*0.8,l*=0.08,m=e*0.015,r=0;r<3;++r){j=A.k.F(q+r*0.33,1)
i=Math.sin(j*6+r)
h=j*e
g=new B.ao(A.O,A.M,A.S,A.T,A.R)
g.r=A.c.j(0.6*(1-j)).gp(0)
o=g.G()
s.drawCircle(a0+i*5,u+(l-h*0.14),m+h*0.02,o)
o.delete()}for(a0=w+v*0.5,q=e*0.018,r=0;r<5;++r){m=B.bK(new B.t(a0,u),x,e*(0.1+r*0.01))
l=new B.ao(A.O,A.M,A.S,A.T,A.R)
l.b=A.a9
l.c=q
l.r=A.bt.gp(0)
l.d=A.by
o=l.G()
s.drawArc.apply(s,[B.bG(m),(0.4+r*0.1)*57.29577951308232,108.8619810748564,!1,o])
o.delete()}for(a0=e*0.63,x=e*0.032,r=0;r<4;++r){u=A.o.F(r,2)
q=A.o.ao(r,2)
m=(r&1)===0?A.cd:A.vT
l=new B.ao(A.O,A.M,A.S,A.T,A.R)
l.r=m.gp(0)
o=l.G()
s.drawCircle(w+v*(0.72+0.06*u)+r*e*0.02,a0+q*e*0.035,x,o)
o.delete()}E.AY(a1,new B.t(f*0.14,d),n,a3,!1,0,1,A.bt,H.agS,!0,(Math.sin(a3*5)+1)/2)
for(a0=a3*0.45,x=f*0.16,u=e*0.45,s=e*0.06,r=0;r<5;++r){j=A.k.F(a0+r*0.2,1)
D.r7(a1,"\u2665",new B.t(x+Math.sin(j*5+r)*e*0.08+r*e*0.03,u-j*e*0.4),s,A.ax.j(1-j),9999)}a0=w+v/2
x=e*0.08
p=B.br(B.bK(new B.t(a0,x),t,v*0.7),new B.aP(p,p))
$.S()
t=B.I()
t.r=A.av.gp(0)
a1.az(p,t)
D.r7(a1,"NGMY STORE \xb7 African food",new B.t(a0,x),e*0.05,A.dB,v*0.64)},
i8B(d,e,f){var x,w,v,u,t,s,r,q=e.a,p=e.b,o=p*0.94,n=A.w.j(0.2)
$.S()
x=B.I()
x.r=n.gp(0)
d.aP(new B.a3(0,o,0+q,o+(p-o)),x)
w=A.o.F(A.o.ao(Date.now(),6000)*3+A.o.E(A.k.bf(f/2),0,2),14)
v=A.k.F(f,2)
u=v<1
x=p*0.68
n=u?(Math.sin(f*8)+1)/2:0
t=u?Math.abs(Math.sin(f*8))*p*0.01:0
E.AY(d,new B.t(q*0.25,o),x,f,!1,t,2,A.cT,F.mF,u,n)
n=u?0:(Math.sin(f*8)+1)/2
t=u?0:Math.abs(Math.sin(f*8))*p*0.01
E.AY(d,new B.t(q*0.75,o),x,f,!1,t,0,A.bl,C.afQ,!u,n)
s=new D.fym(p,q)
n=p*0.15
if(u){x=C.aA9[w].a
D.agB(d,new B.t(q*0.27,n),x,s.$1(x),v/0.25,A.p5)}else{x=C.aA9[w].b
D.agB(d,new B.t(q*0.73,n),x,s.$1(x),(v-1)/0.25,A.eA)}for(n=q*0.5,x=p*0.07,t=f*2,r=0;r<3;++r)D.r7(d,"\u2192",new B.t(n,p*(0.35+r*0.1)),x,A.c.j(0.3+0.5*A.k.F(t+r,1)),9999)},
i7v(a1,a2,a3){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=a2.a,e=a2.b,d=e*0.94,a0=A.w.j(0.2)
$.S()
x=B.I()
x.r=a0.gp(0)
a1.aP(new B.a3(0,d,0+f,d+(e-d)),x)
x=f*0.3
w=B.bK(new B.t(f*0.6,e*0.45),e*0.7,Math.min(x,e*0.55))
a0=B.br(w,A.ie)
v=B.I()
v.r=A.c.gp(0)
a1.az(a0,v)
for(a0=w.d,v=w.b,u=a0-v,t=u*0.03,s=a1.a,r=w.a,q=w.c,p=q-r,o=r+p*0.1,n=0;n<9;++n){m=v+u*(0.1+n*0.095)
l=A.o.F(n,3)===2?0.5:0.8
k=new B.ao(A.O,A.M,A.S,A.T,A.R)
k.r=A.cq.gp(0)
j=k.G()
s.drawRect(B.bG(new B.a3(o,m,o+p*l,m+t)),j)
j.delete()}i=A.k.E(a3/3,0,1)
h=v+u*i
if(i<1){a0=r-8
u=h-2
p=a0+(p+16)
t=B.I()
t.r=A.be.gp(0)
a1.aP(new B.a3(a0,u,p,u+4),t)
t=A.be.j(0.18)
u=B.I()
u.r=t.gp(0)
a1.aP(new B.a3(a0,v,p,v+(h-v)),u)}else{n=A.k.E((a3-3)/0.4,0,1)
u=A.lv.aw(0,n)
t=B.I()
t.r=A.bB.gp(0)
a1.ad(new B.t(q,v),e*0.08*u,t)
D.r7(a1,"PDF",new B.t(q,v),e*0.045*n,A.c,9999)
v=e*0.06
D.r7(a1,"\u2713 Saved",new B.t(w.gbL().a,a0+v),v,A.c.j(n),9999)}a0=a3*4
v=Math.sin(a0)
E.AY(a1,new B.t(f*0.2,d),e*0.66,a3,!0,Math.abs(Math.sin(a0))*e*0.01,0,A.cw,F.mF,!1,(v+1)/2)
g=B.bK(new B.t(x,e*0.3),e*0.18,e*0.1)
x=e*0.02
x=B.br(g,new B.aP(x,x))
v=B.I()
v.r=A.av.gp(0)
a1.az(x,v)
v=e*0.015
v=B.br(g.cr(-3),new B.aP(v,v))
x=A.be.j(0.35+0.3*Math.sin(a3*6))
a0=B.I()
a0.r=x.gp(0)
a1.az(v,a0)},
i2F(a6,a7,a8){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=a7.a,a3=a7.b,a4=a3*0.94,a5=A.w.j(0.2)
$.S()
x=B.I()
x.r=a5.gp(0)
a6.aP(new B.a3(0,a4,0+a2,a4+(a3-a4)),x)
w=B.bK(new B.t(a2*0.62,a3*0.47),a3*0.8,Math.min(a2*0.4,a3*0.75))
x=B.br(w,A.mX)
a5=B.I()
a5.r=A.c.gp(0)
a6.az(x,a5)
a5=w.a
x=w.c
v=x-a5
u=w.b
t=w.d-u
D.r7(a6,"INVOICE",new B.t(a5+v*0.3,u+t*0.09),t*0.07,A.d7,9999)
for(s=a6.a,r=v*0.08,q=a5+r,p=t*0.045,o=q+v*0.5,n=x-v*0.17,m=t*0.02,l=t*0.06,k=a8-0.5,j=0,i=0;i<3;++i){h=A.k.E((k-i*0.6)/0.4,0,1)
if(h<=0)continue
j+=C.aza[i].b
g=u+t*(0.24+i*0.14)
J.bl(s.save())
s.translate((1-h)*30,0)
f=A.cq.j(h)
$.S()
e=new B.ao(A.O,A.M,A.S,A.T,A.R)
e.r=f.gp(0)
d=e.G()
s.drawRect(B.bG(new B.a3(q,g,o,g+p)),d)
d.delete()
D.r7(a6,"$"+C.aza[i].b,new B.t(n,g+m),l,A.av.j(h),9999)
s.restore()}p=u+t*0.7
a6.bo(new B.t(q,p),new B.t(x-r,p),E.yL(A.dm,1.4))
D.r7(a6,"TOTAL  $"+j,new B.t(w.gbL().a,u+t*0.78),t*0.075,A.av,v*0.8)
x=a8>2.8
if(x){r=a8-2.8
i=A.k.E(r/0.3,0,1)
J.bl(s.save())
s.translate(w.gbL().a,u+t*0.55)
a6.il(0,-0.3)
a6.bW(0,2-A.et.aw(0,i))
a6.az(B.br(B.bK(A.I,t*0.17,v*0.6),A.hH),E.yL(A.cT.j(i),3.5))
D.r7(a6,"PAID",A.I,t*0.11,A.cT.j(i),9999)
s.restore()
for(v=r*0.7,a5-=a3*0.05,u=a3*0.7,t=a3*0.03,s=a8*8,a0=0;a0<6;++a0){a1=A.k.F(v+a0*0.17,1)
D.h7w(a6,new B.t(a5+Math.sin(a0*2)*a3*0.1,u-a1*a3*0.5),t,s+a0)}}a5=x?(Math.sin(a8*6)+1)/2:0
E.AY(a6,new B.t(a2*0.2,a4),a3*0.66,a8,!0,0,1,A.bE,A.ob,x,a5)},
hzl(d,e,f,g){var x,w=B.bK(e,f*0.62,f*2.5),v=f*0.31,u=B.br(w,new B.aP(v,v))
$.S()
x=B.I()
x.r=A.c.gp(0)
d.az(u,x)
d.az(B.br(w,new B.aP(v,v)),E.yL(A.bE,f*0.05))
D.r7(d,"\u2665 "+g,e,f*0.4,A.pS,f*2.2)},
yX(d,e,f,g,a0,a1,a2){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
if(a2<=0)return
x=new D.fRx(e,f,g)
w=A.k.dc(22*A.k.E(a2,0,1))
for(v=a1-a0,u=d.a,t=e,s=1;s<=w;++s,t=q){r=Math.min(s/22,A.k.E(a2,0,1))
q=x.$1(r)
$.S()
p=new B.ao(A.O,A.M,A.S,A.T,A.R)
p.b=A.a9
o=p.c=a0+v*r
p.r=A.ob.gp(0)
p.d=A.by
n=p.G()
p=t.a
m=t.b
l=q.a
k=q.b
u.drawLine.apply(u,[p,m,l,k,n])
n.delete()
j=-o*0.18
i=B.ar(A.ob,A.c,0.18)
i.toString
h=new B.ao(A.O,A.M,A.S,A.T,A.R)
h.b=A.a9
h.c=o*0.28
h.r=i.gp(0)
h.d=A.by
n=h.G()
u.drawLine.apply(u,[p+j,m+0,l+j,k+0,n])
n.delete()}},
iks(d,e,f,g){var x,w,v,u,t,s
for(x=g*0.45,w=e.a,v=g*2,u=e.b,t=0;t<7;++t){s=A.k.F(x+t/7,1)
D.r7(d,"\u2665",new B.t(w+Math.sin(t*2.3+v)*f*0.12+(t-3.5)*f*0.03,u-s*f*0.45),f*(0.04+0.02*A.o.F(t,3)),B.ar(A.bE,A.hZ,A.o.F(t,2)).j((1-s)*0.9),9999)}},
i_j(b4,b5,b6){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=null,a8=b5.a,a9=b5.b,b0=a9*0.94,b1=A.dY.j(0.7),b2=$.S(),b3=B.I()
b3.r=b1.gp(0)
b4.aP(new B.a3(0,b0,0+a8,b0+(a9-b0)),b3)
x=new D.fkR(b6)
w=new D.fkO()
v=Math.min(a8*0.34,a9*0.62)
b3=a8*0.64
b1=v*0.2
u=b0-b1
t=new B.t(b3,u)
s=v*0.5
r=v*0.08
r=B.br(B.bK(t,s,v*2.15),new B.aP(r,r))
q=B.I()
q.r=A.hN.gp(0)
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
o=B.I()
o.r=A.fU.gp(0)
b4.aI(p,o)
h=new B.aF(b2,A.ag,a7,a7,B.a([],q))
h.D(new B.aY(b3,r))
s=b3+s
r=b3+v
h.D(new B.c5(s,m,r,j))
h.D(new B.aq(r,i))
h.D(new B.c5(s,l,b3,k))
h.D(new B.bt())
k=B.I()
k.r=A.i_.gp(0)
b4.aI(h,k)
for(b2=v*0.85,s=b3-b2,r=u-v*0.06,q=b3-b1,u-=v*0.1,o=b4.a,b1=b3+b1,b2=b3+b2,g=0;g<3;++g){b3=g*v*0.06
m=r+b3
b3=u+b3
l=new B.ao(A.O,A.M,A.S,A.T,A.R)
l.b=A.a9
l.c=1.4
l.r=C.ajd.gp(0)
l.d=A.by
f=l.G()
o.drawLine.apply(o,[s,m,q,b3,f])
f.delete()
l=new B.ao(A.O,A.M,A.S,A.T,A.R)
l.b=A.a9
l.c=1.4
l.r=C.ajd.gp(0)
l.d=A.by
f=l.G()
o.drawLine.apply(o,[b1,b3,b2,m,f])
f.delete()}e=w.$1(x.$2(0.2,1))
b1=t.aE(0,new B.t(0,n))
b2=b6*4
b3=Math.sin(b2)
u=B.I()
u.sam(new B.c_(A.A,0.5,A.x,a7,0,B.a([A.dB.j(0.6*e),A.L],y.c),a7,a7).aA(0,B.bX(t.aE(0,new B.t(0,n)),v*0.7)))
b4.ad(b1,v*(0.5+0.1*b3)*e,u)
d=t.aE(0,new B.t(0,v*0.12))
a0=new D.fkQ(t,a9,d)
a1=w.$1(x.$2(0.5,1.1))
a2=w.$1(x.$2(1.3,1.2))
for(b1=b6*2,a3=0;a3<4;++a3){b3=C.cLE[a3]
a4=b3.a
u=a0.$2(a4,b3.b)
s=Math.sin(b1+a4*9)
r=new B.ao(A.O,A.M,A.S,A.T,A.R)
r.r=A.cT.j(0.9).gp(0)
f=r.G()
o.drawCircle(u.a,u.b,a9*b3.c*a2+s*1.2,f)
f.delete()}D.yX(b4,d,d.a7(0,new B.t(0,-a9*0.08)),a0.$2(0,0.22),a9*0.05,a9*0.035,a1)
a5=w.$1(x.$2(1.2,0.8))
b1=a9*0.032
b3=a9*0.02
D.yX(b4,a0.$2(0,0.22),a0.$2(-0.06,0.28),a0.$2(-0.2,0.36),b1,b3,a5)
D.yX(b4,a0.$2(0,0.22),a0.$2(0.06,0.28),a0.$2(0.2,0.36),b1,b3,a5)
a6=w.$1(x.$2(2.4,0.7))
D.yX(b4,a0.$2(0,0.22),a0.$2(0,0.4),a0.$2(0,0.57),a9*0.03,a9*0.016,a6)
b3=new D.fkP(x,b4,b6)
b1=a9*0.088
b3.$5(2,"Mama",a0.$2(-0.2,0.36),b1,1.9)
b3.$5(3,"Baba",a0.$2(0.2,0.36),b1,2.4)
b3.$5(4,"Dada",a0.$2(0,0.57),a9*0.08,3)
if(b6>3.6)D.iks(b4,a0.$2(0,0.36),a9,b6-3.6)
b1=a8*0.2
b3=Math.sin(b2)
E.AY(b4,new B.t(b1,b0),a9*0.66,b6,!1,Math.abs(Math.sin(b2))*a9*0.01,2,A.aD,F.mF,b6>3,(b3+1)/2)
D.agB(b4,new B.t(b1,a9*0.1),"My tree!",a9*0.06,x.$2(3,0.4),A.c)},
i9n(d,e,f){var x,w,v,u,t,s,r,q,p,o,n=e.a,m=e.b,l=m*0.94,k=A.w.j(0.2)
$.S()
x=B.I()
x.r=k.gp(0)
d.aP(new B.a3(0,l,0+n,l+(m-l)),x)
w=A.k.bf(A.k.E(f/5.5,0,1)*9)+1
for(v=n*0.62,k=l-m*0.03,x=m*0.26,u=m*0.07,t=d.a,s=0;s<w;++s){r=k-s*m*0.055
q=B.bK(new B.t(v,r),u,x)
p=new B.ao(A.O,A.M,A.S,A.T,A.R)
p.r=A.bt.gp(0)
o=p.G()
t.drawOval(B.bG(q),o)
o.delete()
r=B.bK(new B.t(v,r),u,x)
q=new B.ao(A.O,A.M,A.S,A.T,A.R)
q.b=A.a9
q.c=2
q.r=A.q0.gp(0)
q.d=A.by
o=q.G()
t.drawOval(B.bG(r),o)
o.delete()}k=m*0.1
D.h7w(d,new B.t(v,k+A.k.F(f*1.6,1)*(l-u-w*m*0.055-k)),m*0.05,f*8)
k=m*0.08
D.r7(d,"$"+w*25,new B.t(v,k),k,A.dB,9999)
k=f*5
u=Math.sin(k)
E.AY(d,new B.t(n*0.25,l),m*0.66,f,!1,Math.abs(Math.sin(k))*m*0.012,1,A.cw,F.mF,!0,(u+1)/2)},
i1E(d,a0,a1){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=a0.a,g=a0.b,f=g*0.94,e=A.w.j(0.2)
$.S()
x=B.I()
x.r=e.gp(0)
d.aP(new B.a3(0,f,0+h,f+(g-f)),x)
for(e=d.a,x=g*0.012,w=g*0.55,v=a1*4,u=a1*2,t=g*0.15,s=g*0.03,r=0;r<3;r=n){q=Math.sin(v+r*1.7)
J.bl(e.save())
e.translate(h*(0.5+0.14*r),w-Math.abs(q)*g*0.3)
e.rotate((u+r)*180/3.141592653589793,0,0)
q=B.br(B.bK(A.I,t,t),new B.aP(s,s))
p=new B.ao(A.O,A.M,A.S,A.T,A.R)
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
j=new B.ao(A.O,A.M,A.S,A.T,A.R)
j.r=A.bk.gp(0)
o=j.G()
e.drawCircle(k*g*0.04,l*g*0.04,x,o)
o.delete();++m}e.restore()}for(e=a1*0.6,w=g*0.25,v=g*0.06,r=0;r<5;++r){i=A.k.F(e+r*0.2,1)
D.r7(d,"\u2605",new B.t(h*(0.45+r*0.1),w-i*g*0.2),v,A.dB.j(1-i),9999)}e=h*0.22
w=a1*6
v=Math.sin(w)
E.AY(d,new B.t(e,f),g*0.66,a1,!0,Math.abs(Math.sin(w))*g*0.015,0,A.cd,F.mF,!0,(v+1)/2)
v=f-g*0.28
s=B.br(B.bK(new B.t(e,v),g*0.07,g*0.16),new B.aP(s,s))
$.S()
w=B.I()
w.r=A.cr.gp(0)
d.az(s,w)
w=B.I()
w.r=A.ax.gp(0)
d.ad(new B.t(e+g*0.05,v),x,w)},
i32(d,e,a0){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=e.a,j=e.b,i=j*0.94,h=A.w.j(0.2),g=$.S(),f=B.I()
f.r=h.gp(0)
d.aP(new B.a3(0,i,0+k,i+(j-i)),f)
f=k*0.42
h=j*0.18
x=j*0.08
w=B.br(new B.a3(f,h,f+k*0.5,h+j*0.5),new B.aP(x,x))
v=new B.aF(g.r,A.ag,null,null,B.a([],y.a))
v.D(new B.iT(w))
d.aI(v,E.yL(A.c.j(0.5),4))
u=new B.T5(new B.rm(B.xu(v),!1,B.a([],y.C))).gI(0)
for(h=a0*0.18,g=u.a,x=u.b,t=g.e,s=j*0.016,r=d.a,q=0;q<10;++q){p=A.k.F(h+q/10,1)
g.ie()
o=t[x].b
o===$&&B.c()
o=o.a.length()
g.ie()
o=t[x].Hd(p*o).a
p=new B.ao(A.O,A.M,A.S,A.T,A.R)
p.r=A.dB.gp(0)
n=p.G()
r.drawCircle(o.a,o.b,s,n)
n.delete()}m=a0>1.5
h=j*0.43
l=new B.t(k*0.92,h)
if(m){g=A.dB.j(0.4+0.2*Math.sin(a0*8))
x=B.I()
x.r=g.gp(0)
x.z=A.zL
d.ad(l,j*0.2,x)}g=j*0.07
x=m?A.p5:A.bK
t=B.I()
t.r=x.gp(0)
d.ad(l,g,t)
h=B.br(B.bK(new B.t(f,h),j*0.2,j*0.1),A.ie)
t=B.I()
t.r=A.cT.gp(0)
d.az(h,t)
D.r7(d,"+",new B.t(f,j*0.36),g,A.c,9999)
h=m?(Math.sin(a0*6)+1)/2:0
f=m?Math.abs(Math.sin(a0*6))*j*0.012:0
E.AY(d,new B.t(k*0.2,i),j*0.68,a0,!1,f,0,A.bP,F.mF,m,h)
if(m)D.agB(d,new B.t(k*0.24,j*0.16),"It works!",g,(a0-1.5)/0.4,A.c)},
i2g(d,a0,a1){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=a0.a,g=a0.b,f=g*0.94,e=A.w.j(0.2)
$.S()
x=B.I()
x.r=e.gp(0)
d.aP(new B.a3(0,f,0+h,f+(g-f)),x)
w=A.k.E((a1-0.3)/0.4,0,1)
v=A.k.E((a1-1.8)/0.4,0,1)
x=g*0.2
e=g*0.065
D.agB(d,new B.t(h*0.3,x),"How do I enroll?",e,w,A.p5)
if(a1>1&&a1<1.8)for(u=h*0.72,t=g*0.38,s=a1*9,r=g*0.015,q=d.a,p=0;p<3;++p){o=Math.sin(s+p)
n=new B.ao(A.O,A.M,A.S,A.T,A.R)
n.r=A.c.gp(0)
m=n.G()
q.drawCircle(u+p*g*0.05,t-Math.abs(o)*g*0.02,r,m)
m.delete()}D.agB(d,new B.t(h*0.7,g*0.38),"Tap Civic Registry!",e,v,A.eA)
E.AY(d,new B.t(h*0.2,f),g*0.62,a1,!1,0,2,A.ax,F.mF,a1<1,0)
l=h*0.78
k=f-g*0.28
e=g*0.04
x=B.br(B.bK(new B.t(l,k),g*0.22,x),new B.aP(e,e))
u=B.I()
u.r=A.aN.gp(0)
d.az(x,u)
u=g*0.18
x=k-u
e=B.br(B.bK(new B.t(l,x),g*0.14,u),new B.aP(e,e))
u=B.I()
u.r=A.cq.gp(0)
d.az(e,u)
for(e=d.a,u=a1*1.1,t=g*0.02,j=0;j<2;++j){i=F.hq[j]
s=A.k.F(u,1)>0.08?A.b8:A.eP
r=new B.ao(A.O,A.M,A.S,A.T,A.R)
r.r=s.gp(0)
m=r.G()
e.drawCircle(l+i*g*0.04,x,t,m)
m.delete()}d.bo(new B.t(l,k-g*0.25),new B.t(l,k-g*0.3),E.yL(A.ac,3))
e=B.I()
e.r=A.ax.gp(0)
d.ad(new B.t(l,k-g*0.31),g*0.015,e)},
fys:function fys(d,e,f){this.a=d
this.b=e
this.c=f},
fym:function fym(d,e){this.a=d
this.b=e},
fRx:function fRx(d,e,f){this.a=d
this.b=e
this.c=f},
fkR:function fkR(d){this.a=d},
fkO:function fkO(){},
fkQ:function fkQ(d,e,f){this.a=d
this.b=e
this.c=f},
fkP:function fkP(d,e,f){this.a=d
this.b=e
this.c=f},
aP5(d,e,f,g,h,i,j,k){var x=new D.fpl(e,h,i,k),w=x.$1(g),v=w.b.c
if(v>j&&v>0)w=x.$1(Math.max(2,g*j/v))
x=w.b
v=x.c
x=x.a.c
w.a3(d,f.aE(0,new B.t(v/2,x.gba(x)/2)))},
Lz(d,e,f,a0){var x,w,v,u,t,s,r,q,p,o,n,m=A.o.F(a0==null?A.k.bf(f/6):a0,11),l=A.k.F(f,6),k=C.det[m],j=e.a,i=e.b,h=0+j,g=0+i
$.S()
x=B.I()
x.sam(new B.a9(A.ay,A.aE,A.x,B.a([k.c,k.d],y.c),null,null).aA(0,new B.a3(0,0,h,g)))
d.aP(new B.a3(0,0,h,g),x)
w=i*(j>=i?0.7:0.6)
g=d.a
J.bl(g.save())
g.clipRect(B.bG(new B.a3(0,0,h,0+w)),$.my()[1],!0)
D.ian(d,new B.av(j,w),m,l)
g.restore()
v=i-w
x=A.w.j(0.3)
u=B.I()
u.r=x.gp(0)
d.aP(new B.a3(0,w,h,w+v),u)
t=A.cu.aw(0,A.k.E((l-0.2)/0.5,0,1))
J.bl(g.save())
g.translate((1-t)*j*0.25,0)
u=j/2
h=j*0.94
D.aP5(d,k.a,new B.t(u,w+v*0.3),v*0.36,A.c.j(t),!0,h,0)
D.aP5(d,k.b,new B.t(u,w+v*0.64),v*0.2,A.c.j(0.92*t),!1,h,0)
g.restore()
for(h=i*0.965,x=i*0.009,s=i*0.004,r=0;r<11;++r){q=r===m
p=q?s:0
o=new B.ao(A.O,A.M,A.S,A.T,A.R)
o.r=A.c.j(q?0.95:0.35).gp(0)
n=o.G()
g.drawCircle(u+(r-5)*i*0.035,h,x+p,n)
n.delete()}h=j-i*0.07
g=i*0.06
D.aP5(d,"AD",new B.t(h,g),i*0.045,A.c.j(0.85),!0,9999,1)
x=i*0.02
x=B.br(B.bK(new B.t(h,g),i*0.065,i*0.1),new B.aP(x,x))
g=B.I()
g.b=A.a9
g.c=1
g.r=A.ac.gp(0)
g.d=A.by
d.az(x,g)},
RZ(d,e,f,g){var x,w=d.a
J.bl(w.save())
w.clipRect(B.bG(new B.a3(0,0,0+e.a,0+e.b)),$.my()[1],!0)
x=C.kp[A.o.F(f,8)].e
if(x===-2)D.i_t(d,e,g)
else if(x===-1)D.Lz(d,e,g,null)
else D.Lz(d,e,g,x)
w.restore()},
i_t(d,a0,a1){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=a0.a,h=a0.b,g=new B.V(Date.now(),0,!1),f=0+i,e=0+h
$.S()
x=B.I()
x.sam(C.c3g.aA(0,new B.a3(0,0,f,e)))
d.aP(new B.a3(0,0,f,e),x)
x=B.I()
x.r=A.bB.gp(0)
d.aP(new B.a3(0,0,f,0+h*0.15),x)
D.aP5(d,A.oz[B.bL(g)-1]+" "+B.bC(g),new B.t(i/2,h*0.075),h*0.08,A.c,!0,i*0.9,0)
w=i/7
for(f=h*0.21,e=h*0.05,v=0;v<7;++v)D.aP5(d,C.dtP[v],new B.t(w*(v+0.5),f),e,A.aC,!0,9999,0)
u=B.c3(B.bC(g),B.bL(g),1,0,0,0,0,0)
t=B.bW(B.c3(B.bC(g),B.bL(g)+1,0,0,0,0,0,0))
s=B.mm(u)-1
r=h*0.74/A.k.dc((s+t)/7)
for(f=h*0.26,e=a1*3,x=d.a,q=1;q<=t;++q){p=s+q-1
o=w*(A.o.F(p,7)+0.5)
n=f+r*(A.o.ao(p,7)+0.5)
if(q===B.bW(g)){m=Math.min(w,r)
l=A.aJ.j(0.5+0.2*Math.sin(e))
$.S()
k=new B.ao(A.O,A.M,A.S,A.T,A.R)
k.r=l.gp(0)
j=k.G()
x.drawCircle(o,n,m*0.42,j)
j.delete()}m=Math.min(w,r)
l=q===B.bW(g)?A.c:A.ac
D.aP5(d,""+q,new B.t(o,n),m*0.42,l,!0,9999,0)}},
fpl:function fpl(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
wF:function wF(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
w8:function w8(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
hc9(d,e,f,g,h,a0){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i=d.a
J.bl(i.save())
x=e.a
w=e.b
v=0+x
u=0+w
i.clipRect(B.bG(new B.a3(0,0,v,u)),$.my()[1],!0)
if(h<3){$.S()
t=B.I()
t.r=C.bdo.gp(0)
d.aP(new B.a3(0,0,v,u),t)
if(h<0.5)u=h/0.5
else u=h>2.4?(3-h)/0.6:1
s=A.k.E(u,0,1)
u=e.ek(A.I)
t=e.gdE()
r=B.I()
r.sam(new B.c_(A.A,0.5,A.x,j,0,B.a([A.aJ.j(0.35*s),A.L],y.c),j,j).aA(0,B.bX(e.ek(A.I),e.gdE()*0.5)))
d.ad(u,t*0.5,r)
D.GK(d,"NGMY",new B.t(0,w*0.36),w*0.2,A.c.j(s),A.K,w*0.03,x)
D.GK(d,"T V",new B.t(0,w*0.6),w*0.08,A.aJ.j(s),A.K,w*0.05,x)
r=x*0.3
t=w*0.78
u=B.I()
u.r=A.aJ.j(s).gp(0)
d.aP(new B.a3(r,t,r+x*0.4*(h/3),t+3),u)}else if(a0>=0)D.RZ(d,e,a0,g)
else{q=A.k.E((h-3)/0.5,0,1)
p=A.o.F(f,10)
switch(p){case 0:D.i8Y(d,e,g)
break
case 1:D.i05(d,e,g)
break
case 2:D.i8c(d,e,g)
break
case 3:D.i4Y(d,e,g)
break
case 4:D.i6h(d,e,g)
break
case 5:D.i8d(d,e,g)
break
case 6:D.i1s(d,e,g)
break
case 7:D.i8X(d,e,g)
break
case 8:D.i74(d,e,g)
break
default:D.i1F(d,e,g)}t=x-w*0.34
r=w*0.04
o=w*0.03
n=B.br(new B.a3(t,r,t+w*0.3,r+w*0.1),new B.aP(o,o))
$.S()
o=B.I()
o.r=A.w.j(0.55).gp(0)
d.az(n,o)
D.GK(d,"NGMY",new B.t(n.a+w*0.025,n.b+w*0.012),w*0.07,A.c,A.bj,1,j)
o=w*0.86
t=B.I()
t.r=A.w.j(0.6).gp(0)
d.aP(new B.a3(0,o,v,o+w*0.14),t)
D.GK(d,"CH "+(f+1)+"  \xb7  "+C.Ri[p].a,new B.t(r,w*0.885),w*0.075,A.c,A.bj,0,x-w*0.08)
if(q<1){t=B.I()
t.r=A.c.j(0.6*(1-q)).gp(0)
d.aP(new B.a3(0,0,v,u),t)}}$.S()
m=B.I()
m.r=A.w.j(0.07).gp(0)
for(l=0;l<w;l+=3){k=m.G()
i.drawRect(B.bG(new B.a3(0,l,v,l+1)),k)
k.delete()}v=new B.aF($.S().r,A.ag,j,j,B.a([],y.a))
v.D(new B.aY(0,0))
v.D(new B.aq(x*0.45,0))
v.D(new B.aq(0,w*0.5))
v.D(new B.bt())
w=B.I()
w.r=A.c.j(0.04).gp(0)
d.aI(v,w)
i.restore()},
GK(d,e,f,g,h,i,j,k){var x=null,w=B.fy(x,x,1,x,B.cS(x,x,x,x,x,x,x,x,x,B.l(x,x,h,x,x,x,x,x,x,x,x,g,x,x,A.u,x,x,!0,x,j,x,x,x,x,x,x),e),i,A.bX,x,A.dA,A.bV),v=k==null
w.o_(v?9999:k)
w.a3(d,f.a7(0,new B.t(i===A.K&&!v?(k-w.b.c)/2:0,0)))},
aP0(d,e,f,g,h,i,j){var x=new D.fn7(e,h,i,j),w=x.$1(g),v=w.b.c,u=f.c-f.a
if(v>u&&v>0)w=x.$1(g*u/v)
x=f.gbL()
v=w.b
u=v.c
v=v.a.c
w.a3(d,x.aE(0,new B.t(u/2,v.gba(v)/2)))},
i8Y(d5,d6,d7){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5=null,c6=d6.a,c7=d6.b,c8=A.k.F(d7,14),c9=new D.fyN(c8),d0=new D.fyJ(),d1=0+c6,d2=0+c7,d3=$.S(),d4=B.I()
d4.sam(C.c4o.aA(0,new B.a3(0,0,d1,d2)))
d5.aP(new B.a3(0,0,d1,d2),d4)
x=c6*0.34
w=new D.fyM(x,c7)
v=w.$2(0,0.5)
d4=c7*0.75
u=B.I()
u.sam(new B.c_(A.A,0.5,A.x,c5,0,B.a([A.bM.j(0.55),A.L],y.c),c5,c5).aA(0,B.bX(v,d4)))
d5.ad(v,d4,u)
t=new B.e6()
t.cX(11)
for(d4=d7*2,u=d5.a,s=0;s<26;++s){r=t.ag()
q=t.ag()
p=t.ag()
o=new B.ao(A.O,A.M,A.S,A.T,A.R)
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
q=new B.ao(A.O,A.M,A.S,A.T,A.R)
q.r=(p?C.XE:C.bpD).gp(0)
n=q.G()
q=l.e
u.drawPath((q==null?l.e=new B.cd(l.gbu().a.snapshot()):q).a,n)
n.delete()}i=w.$2(0,0.81)
h=d0.$1(c9.$2(0.2,1.6))
g=d0.$1(c9.$2(2.4,2.6))
for(d3=d7*1.4,f=0;f<8;++f){r=C.aAa[f]
e=r.a
d=r.b
a0=Math.sin(d3+e*7)*c7*0.006
q=w.$2(e,d)
p=q.a
q=q.b
r=c7*r.c
o=new B.ao(A.O,A.M,A.S,A.T,A.R)
o.r=A.hg.gp(0)
n=o.G()
u.drawCircle(p+a0,q+0,r*g,n)
n.delete()
q=w.$2(e,d-0.015)
p=q.a
q=q.b
o=new B.ao(A.O,A.M,A.S,A.T,A.R)
o.r=A.ej.gp(0)
n=o.G()
u.drawCircle(p+a0,q+0,r*0.82*g,n)
n.delete()}for(d3=c7*0.01,r=i.a,q=i.b,p=q+d3,o=c7*0.015,q+=o,j=c7*0.04,f=0;f<2;++f){a1=F.hq[f]*c7
D.yX(d5,i,new B.t(r+a1*0.04,p),new B.t(r+a1*0.12,q),j,d3,h)}r=c7*0.085
D.yX(d5,i,w.$2(0.02,0.7),w.$2(0,0.6),r,c7*0.055,h)
a2=d0.$1(c9.$2(1.8,1.6))
q=c7*0.05
p=c7*0.026
D.yX(d5,w.$2(0,0.6),w.$2(-0.1,0.55),w.$2(-0.34,0.44),q,p,a2)
D.yX(d5,w.$2(0,0.6),w.$2(0.1,0.55),w.$2(0.34,0.44),q,p,a2)
a3=d0.$1(c9.$2(3.2,1.3))
p=c7*0.024
a1=c7*0.018
D.yX(d5,w.$2(-0.34,0.44),w.$2(-0.17,0.33),w.$2(0,0.39),p,a1,a3)
D.yX(d5,w.$2(0.34,0.44),w.$2(0.17,0.33),w.$2(0,0.39),p,a1,a3)
a4=d0.$1(c9.$2(4.4,1.3))
a1=c7*0.02
p=c7*0.012
D.yX(d5,w.$2(0,0.39),w.$2(-0.1,0.3),w.$2(-0.17,0.2),a1,p,a4)
D.yX(d5,w.$2(0,0.39),w.$2(0.1,0.3),w.$2(0.17,0.2),a1,p,a4)
a1=c7*0.016
D.yX(d5,w.$2(-0.27,0.72),w.$2(-0.14,0.78),w.$2(0,0.7),a1,p,d0.$1(c9.$2(3.6,1)))
D.yX(d5,w.$2(0.27,0.72),w.$2(0.14,0.78),w.$2(0,0.7),a1,p,d0.$1(c9.$2(3.6,1)))
a5=new B.e6()
a5.cX(5)
for(a1=d7*1.6,a6=d7*1.3,a7=g*1.4,a8=c7*0.03,s=0;s<110;++s){a9=C.aAa[A.o.F(s,8)]
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
b3=new B.ao(A.O,A.M,A.S,A.T,A.R)
b3.r=B.ar(A.bf,A.ep,(Math.sin(d4+s)+1)/2).gp(0)
n=b3.G()
u.drawOval(B.bG(b2),n)
n.delete()
u.restore()}b6=new D.fyK(c9,d5,d7,c8)
u=c7*0.075
b6.$5(0,"Bibi",w.$2(-0.27,0.72),u,5)
b6.$5(1,"Babu",w.$2(0.27,0.72),u,5.6)
b6.$5(2,"Mama",w.$2(-0.34,0.44),r,6.4)
b6.$5(3,"Baba",w.$2(0.34,0.44),r,7)
b6.$5(4,"Dada",w.$2(-0.17,0.2),u,8)
b6.$5(5,"Kaka",w.$2(0.17,0.2),u,8.6)
b7=new D.fyL(c9,d7,d5)
b7.$3(w.$2(0,0.7),c7*0.028,5.9)
b7.$3(w.$2(0,0.39),c7*0.035,7.4)
if(c8>9.3)for(r=(c8-9.3)*0.4,s=0;s<7;++s){b8=A.k.F(r+s/7,1)
D.GK(d5,"\u2665",w.$2(Math.sin(s*2.3+d4)*0.3,0.38-b8*0.3),c7*(0.04+0.02*A.o.F(s,3)),A.hZ.j((1-b8)*0.85),A.bj,0,c5)}d4=c6*0.655+(1-d0.$1(c9.$2(1,0.9)))*c6*0.4
r=c7*0.1
o=d4+c6*0.315
b9=new B.a3(d4,r,o,r+c7*0.64)
a1=B.br(b9,new B.aP(q,q))
$.S()
a6=B.I()
a6.r=C.iA.j(0.88).gp(0)
d5.az(a1,a6)
a6=B.br(b9,new B.aP(q,q))
a1=B.I()
a1.b=A.a9
a1.c=p
a1.r=F.eY.gp(0)
d5.az(a6,a1)
c0=new D.fyO(b9,c7)
D.aP0(d5,"NGMY",c0.$2(0.13,0.06),c7*0.06,F.eY,!0,p)
D.aP0(d5,"Family",c0.$2(0.2,0.1),r,A.c,!0,0)
D.aP0(d5,"Tree",c0.$2(0.3,0.1),r,A.c,!0,0)
for(s=0;s<3;++s){c1=c9.$2(5.5+s*1.5,0.5)
if(c1<=0)continue
D.aP0(d5,"\u2665 "+C.c7H[s],c0.$2(0.43+s*0.075,0.06).eP(new B.t((1-c1)*30,0)),q,A.il.j(c1),!1,0)}c2=c9.$2(11,0.5)
if(c2>0){c3=B.bK(new B.t(b9.gbL().a,c7*0.67),u,(o-d4)*0.6*A.et.aw(0,c2))
d4=B.br(c3,new B.aP(j,j))
$.S()
u=B.I()
u.r=F.eY.gp(0)
d5.az(d4,u)
if(c2>0.8)D.aP0(d5,"ngmy.org",c3.cr(-d3),q,C.iA,!0,0)}if(c8>11.6){d3=c7*0.82
D.aP0(d5,"Family is everything",new B.a3(0,d3,0+x*2,d3+q),q,A.c.j(A.k.E((c8-11.6)/0.5,0,1)),!0,0)}if(c8<0.4)c4=1-c8/0.4
else c4=c8>13.5?(c8-13.5)/0.5:0
if(c4>0){$.S()
d3=B.I()
d3.r=A.w.j(c4).gp(0)
d5.aP(new B.a3(0,0,d1,d2),d3)}},
i05(d,e,a0){var x,w,v,u,t,s,r,q,p,o,n,m,l=null,k=e.a,j=e.b,i=0+k,h=0+j,g=$.S(),f=B.I()
f.sam(C.c3s.aA(0,new B.a3(0,0,i,h)))
d.aP(new B.a3(0,0,i,h),f)
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
t=new B.ao(A.O,A.M,A.S,A.T,A.R)
t.r=(g?A.jt:A.dY).gp(0)
q=t.G()
g=v.e
i.drawPath((g==null?v.e=new B.cd(v.gbu().a.snapshot()):g).a,q)
q.delete()}for(i=j*0.04,h=x*1.3,g=k+60,f=k*0.3,p=0,o=0;o<6;++o){u=A.k.F(o*90-h,g)-30
t=Math.sin(o*1.7+a0)
if(Math.abs(u-f)<12)++p
D.i8h(d,new B.t(u,j*(0.35+0.08*t)),i,A.dB)}n=Math.abs(Math.sin(a0*5))
m=new B.t(f,j*0.72-n*j*0.22)
i=B.bK(new B.t(f,j*0.82),j*0.025,j*0.14*(1-n*0.4))
$.S()
h=B.I()
h.r=A.dm.gp(0)
d.dQ(i,h)
h=j*0.085
i=B.I()
i.sam(C.euR.aA(0,B.bX(m,h)))
d.ad(m,h,i)
i=B.I()
i.b=A.a9
i.c=2
i.r=A.q0.gp(0)
d.ad(m,h,i)
i=-j
D.GK(d,"$",m.a7(0,new B.t(i*0.03,i*0.045)),j*0.09,A.q0,A.bj,0,l)
h=i*0.01
i=m.a7(0,new B.t(i*0.028,h))
g=B.I()
g.r=A.w.gp(0)
d.ad(i,2.4,g)
h=m.a7(0,new B.t(j*0.028,h))
g=B.I()
g.r=A.w.gp(0)
d.ad(h,2.4,g)
D.GK(d,"Saved: $"+(A.o.F(A.k.bf(a0*3),1000)+p),new B.t(j*0.05,j*0.06),j*0.08,A.c,A.bj,0,l)},
i8h(d,e,f,g){var x,w,v,u,t,s,r,q=$.S(),p=B.a([],y.a),o=new B.aF(q.r,A.ag,null,null,p)
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
q=B.I()
q.r=g.gp(0)
d.aI(o,q)},
i8c(a1,a2,a3){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=a2.a,e=a2.b,d=$.S(),a0=B.I()
a0.r=M.ah3.gp(0)
a1.aP(new B.a3(0,0,0+f,0+e),a0)
x=new B.e6()
x.cX(7)
for(a0=a3*3,w=a1.a,v=0;v<60;++v){u=A.k.F(A.k.F(x.ag()*f-a3*(10+x.ag()*60),f)+f,f)
t=x.ag()
s=x.ag()
r=new B.ao(A.O,A.M,A.S,A.T,A.R)
r.r=A.c.j(0.5+0.5*Math.sin(a0+v)).gp(0)
q=r.G()
w.drawCircle(u,t*e*0.85,0.6+s*1.4,q)
q.delete()}p=f*1.2-A.k.F(a3*22,f*1.6)
a0=e*0.3
t=e*0.2
s=B.I()
s.sam(C.euP.aA(0,B.bX(new B.t(p,a0),t)))
a1.ad(new B.t(p,a0),t,s)
a0=B.bK(new B.t(p,a0),e*0.07,e*0.6)
s=B.I()
s.b=A.a9
s.c=3
s.r=A.bM.j(0.7).gp(0)
a1.dQ(a0,s)
s=Math.sin(a3*2)
J.bl(w.save())
w.translate(f*0.42,e*0.52+s*e*0.04)
a1.il(0,-0.25)
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
m=B.I()
l=e*0.12
m.sam(C.c49.aA(0,new B.a3(t,r,t+e*0.08,r+l)))
a1.aI(o,m)
k=new B.aF(d,A.ag,g,g,B.a([],s))
m=a0*0.17
k.D(new B.aY(0,m))
t=a0*0.05
j=e*0.05
k.D(new B.c5(e*0.09,t,j,r))
k.D(new B.aq(t,r))
k.D(new B.c5(a0*0.09,t,0,m))
k.D(new B.bt())
i=B.I()
h=a0*0.08
i.sam(C.c4q.aA(0,new B.a3(h,m,h+e*0.16,m+e*0.27)))
a1.aI(k,i)
i=B.I()
i.r=A.aJ.gp(0)
a1.ad(new B.t(0,t),e*0.035,i)
i=new B.aF(d,A.ag,g,g,B.a([],s))
i.D(new B.aY(t,n))
i.D(new B.aq(a0*0.1,l))
i.D(new B.aq(t,r))
i.D(new B.bt())
t=B.I()
t.r=A.ax.gp(0)
a1.aI(i,t)
s=new B.aF(d,A.ag,g,g,B.a([],s))
s.D(new B.aY(j,n))
s.D(new B.aq(r,l))
s.D(new B.aq(j,r))
s.D(new B.bt())
r=B.I()
r.r=A.ax.gp(0)
a1.aI(s,r)
w.restore()},
i4Y(a1,a2,a3){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null,h=a2.a,g=a2.b,f=0+h,e=0+g,d=$.S(),a0=B.I()
a0.sam(C.c3a.aA(0,new B.a3(0,0,f,e)))
a1.aP(new B.a3(0,0,f,e),a0)
for(f=a1.a,e=g*0.85,a0=g*0.7,x=y.a,d=d.r,w=0;w<4;++w){v=h*(0.1+0.25*w)
u=B.a([],x)
t=new B.aF(d,A.ag,i,i,u)
u.push(new B.aY(v,g))
u.push(new B.c5(v+Math.sin(a3+w)*10,e,v+4,a0+w*6))
u=new B.ao(A.O,A.M,A.S,A.T,A.R)
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
a0=B.I()
a0.r=A.bs.gp(0)
a1.dQ(e,a0)
a0=new B.aF(d,A.ag,i,i,B.a([],x))
e=-g
u=e*0.22
a0.D(new B.aY(u,0))
a0.D(new B.c5(e*0.36,e*0.12+Math.sin(a3*3)*5,e*0.34,e*0.16))
t=e*0.02
a0.D(new B.c5(e*0.28,t,u,0))
u=B.I()
u.r=A.bs.gp(0)
a1.aI(a0,u)
u=g*0.03
a0=g*0.1
r=B.bK(new B.t(0,u),a0,g*0.34)
q=B.I()
q.r=A.aN.gp(0)
a1.dQ(r,q)
q=B.I()
q.r=A.c.gp(0)
a1.ad(new B.t(g*0.15,t),3,q)
q=B.I()
q.r=A.w.gp(0)
a1.ad(new B.t(g*0.155,t),1.5,q)
f.restore()
for(t=e*0.005,r=e*0.08,q=e*0.03,p=g*0.06,e*=0.04,o=h+40,n=a3*2,w=0;w<6;++w){m=(w&1)===0?1:-1
l=A.k.F(A.k.F(a3*(24+w*7)*m+w*80,o)+h+40,o)
k=Math.sin(n+w)
J.bl(f.save())
f.translate(l-20,g*(0.52+0.06*w)+k*6)
f.scale(m,1)
l=B.bK(A.I,p,a0)
k=new B.ao(A.O,A.M,A.S,A.T,A.R)
j=A.o.F(w,4)
k.r=C.ayO[j].gp(0)
s=k.G()
f.drawOval(B.bG(l),s)
s.delete()
l=B.a([],x)
k=new B.aF(d,A.ag,i,i,l)
l.push(new B.aY(e,0))
l.push(new B.aq(r,q))
l.push(new B.aq(r,u))
l.push(new B.bt())
l=new B.ao(A.O,A.M,A.S,A.T,A.R)
l.r=C.ayO[j].gp(0)
s=l.G()
l=k.gbu().a.snapshot()
f.drawPath((k.e=new B.cd(l)).a,s)
s.delete()
l=new B.ao(A.O,A.M,A.S,A.T,A.R)
l.r=A.w.gp(0)
s=l.G()
f.drawCircle(u,t,1.8,s)
s.delete()
f.restore()}for(w=0;w<14;++w){e=A.k.F(w*0.071+0.05,1)
d=A.k.F(a3*(14+w*3)+w*40,g)
a0=Math.sin(n+w)
x=A.o.F(w,3)
u=new B.ao(A.O,A.M,A.S,A.T,A.R)
u.b=A.a9
u.c=1.2
u.r=A.c.j(0.7).gp(0)
s=u.G()
f.drawCircle(h*e+a0*4,g-d,2+x,s)
s.delete()}},
i6h(a7,a8,a9){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null,d=a8.a,a0=a8.b,a1=A.k.F(a9,12),a2=a1<7,a3=0+d,a4=0+a0,a5=$.S(),a6=B.I()
a6.sam(new B.a9(A.b0,A.b6,A.x,a2?C.dor:C.daH,e,e).aA(0,new B.a3(0,0,a3,a4)))
a7.aP(new B.a3(0,0,a3,a4),a6)
a6=a0*0.74
x=B.I()
x.r=(a2?C.bqe:A.Fo).gp(0)
a7.aP(new B.a3(0,a6,a3,a6+a0*0.26),x)
for(x=a7.a,w=a0*0.07,v=a0*0.06,u=a0*0.2,t=a0*0.1,s=a0*0.09,r=y.a,q=a9*2,a5=a5.r,p=0;p<4;++p){o=d*(0.08+0.24*p)
n=a0*(0.14+0.03*A.o.F(p,2))
m=a6-n
l=o+u
k=new B.ao(A.O,A.M,A.S,A.T,A.R)
k.r=C.cXp[p].gp(0)
j=k.G()
x.drawRect(B.bG(new B.a3(o,m,l,m+n)),j)
j.delete()
k=B.a([],r)
i=new B.aF(a5,A.ag,e,e,k)
k.push(new B.aY(o-4,m))
k.push(new B.aq(o+t,m-s))
k.push(new B.aq(l+4,m))
k.push(new B.bt())
m=new B.ao(A.O,A.M,A.S,A.T,A.R)
m.r=A.ek.gp(0)
j=m.G()
m=i.gbu().a.snapshot()
x.drawPath((i.e=new B.cd(m)).a,j)
j.delete()
m=o+w
l=n*0.55
k=a6-l
i=new B.ao(A.O,A.M,A.S,A.T,A.R)
i.r=(a2&&A.o.F(A.k.bf(q),2)===0?A.m_:A.fV).gp(0)
j=i.G()
x.drawRect(B.bG(new B.a3(m,k,m+v,k+l)),j)
j.delete()}if(a2){for(a6=a9*20,v=a9*260,u=a0*0.8,p=0;p<70;++p){o=A.k.F(p*37+a6,d)
h=A.k.F(p*53+v,u)
s=new B.ao(A.O,A.M,A.S,A.T,A.R)
s.r=A.fl.gp(0)
s.c=1.4
j=s.G()
x.drawLine.apply(x,[o,h,o-3,h+9,j])
j.delete()}a6=a9*3
if(A.o.F(A.k.bf(a6),7)===0&&A.k.F(a6,1)<0.3){a6=B.I()
a6.r=A.c.j(0.5).gp(0)
a7.aP(new B.a3(0,0,a3,a4),a6)
r=new B.aF(a5,A.ag,e,e,B.a([],r))
r.D(new B.aY(d*0.6,t))
t=d*0.55
a5=a0*0.3
r.D(new B.aq(t,a5))
r.D(new B.aq(d*0.62,a5))
r.D(new B.aq(t,a0*0.55))
t=B.I()
t.b=A.a9
t.c=4
t.r=A.m_.gp(0)
a7.aI(r,t)}}else{for(a3=d*0.5,a4=a0*0.035,a5=3.141592653589793*A.k.E((a1-7)/2,0,1)*57.29577951308232,p=0;p<6;++p){v=d*(0.9-p*0.07)
v=B.bK(new B.t(a3,a6),v,v)
u=new B.ao(A.O,A.M,A.S,A.T,A.R)
u.b=A.a9
u.c=a4
u.r=C.dsM[p].j(0.9).gp(0)
j=u.G()
x.drawArc.apply(x,[B.bG(v),180,a5,!1,j])
j.delete()}a3=B.I()
a3.r=A.dB.gp(0)
a7.ad(new B.t(d*0.86,a0*0.16),a0*0.08,a3)}for(a3=d+120,p=0;p<3;++p){o=A.k.F(a9*(8+p*4)+p*120,a3)-60
for(a4=a0*(0.12+0.1*p),g=0;g<4;++g){f=C.cs3[g]
$.S()
a5=new B.ao(A.O,A.M,A.S,A.T,A.R)
a5.r=(a2?A.bo:A.c.j(0.95)).gp(0)
j=a5.G()
x.drawCircle(o+f.a,a4+f.b,w,j)
j.delete()}}},
i8d(a1,a2,a3){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=a2.a,a0=a2.b
$.S()
x=B.I()
x.r=A.dd.gp(0)
a1.aP(new B.a3(0,0,0+d,0+a0),x)
w=B.I()
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
o.D(new B.iT(p))
r=B.I()
r.b=A.a9
r.c=5
r.r=A.bs.gp(0)
a1.aI(o,r)
n=new B.T5(new B.rm(B.xu(o),!1,B.a([],y.C))).gI(0)
r=n.a
m=n.b
r.ie()
l=r.e
k=l[m].b
k===$&&B.c()
k=k.a.length()
r.ie()
j=l[m].b
j===$&&B.c()
i=A.k.F(a3*k/5,j.a.length())
for(h=0;h<10;++h){r.ie()
k=l[m].b
k===$&&B.c()
k=A.k.F(i-h*9,k.a.length())
r.ie()
g=l[m].Hd(k).a
k=new B.ao(A.O,A.M,A.S,A.T,A.R)
k.r=A.dB.j(1-h*0.09).gp(0)
k.z=O.Su
u=k.G()
x.drawCircle(g.a,g.b,6-h*0.5,u)
u.delete()}x=a0*0.45
r=B.br(B.bK(new B.t(s,x),a0*0.22,a0*0.12),A.ie)
m=B.I()
m.r=A.cT.gp(0)
a1.az(r,m)
D.GK(a1,"+",new B.t(s-5,a0*0.33),a0*0.07,A.c,A.bj,0,null)
f=(Math.sin(a3*2)+1)/2
e=new B.t(d*0.86,x)
x=B.I()
x.r=A.dB.j(0.25+0.5*f).gp(0)
x.z=K.IE
a1.ad(e,a0*0.16,x)
x=B.I()
x.r=B.ar(A.bK,A.p5,f).gp(0)
a1.ad(e,q,x)
D.GK(a1,"Electricity needs a full loop!",new B.t(0,a0*0.74),a0*0.075,A.hj,A.K,0,d)},
i1s(a4,a5,a6){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=a5.a,a1=a5.b,a2=0+a0,a3=0+a1
$.S()
x=B.I()
x.sam(C.c6n.aA(0,new B.a3(0,0,a2,a3)))
a4.aP(new B.a3(0,0,a2,a3),x)
x=a1*0.82
a3=B.I()
a3.r=A.dd.gp(0)
a4.aP(new B.a3(0,x,a2,x+a1*0.18),a3)
for(a2=a0*0.1,a3=a4.a,w=0;w<7;++w){v=a0*(0.05+w*0.15)
u=a1*(0.1+0.07*A.o.F(w*5,4))
t=x-u
s=new B.ao(A.O,A.M,A.S,A.T,A.R)
s.r=A.av.gp(0)
r=s.G()
a3.drawRect(B.bG(new B.a3(v,t,v+a2,t+u)),r)
r.delete()}for(a2=a1*0.2,t=a6*0.55,q=0;q<4;++q){s=t+q*0.27
p=A.k.F(s,1)
o=A.k.bf(s)*7+q*3
n=a0*(0.15+0.7*A.k.F(o*0.37,1))
m=a1*(0.2+0.25*A.k.F(o*0.53,1))
l=C.axO[A.o.F(Math.abs(o),5)]
if(p<0.3){$.S()
s=new B.ao(A.O,A.M,A.S,A.T,A.R)
s.r=A.c.gp(0)
r=s.G()
a3.drawCircle(n,x-(x-m)*(p/0.3),2.5,r)
r.delete()}else{w=(p-0.3)/0.7
for(s=w*w*a1*0.08,k=1-w,j=2.4*k+0.4,i=0;i<28;++i){h=i*3.141592653589793*2/28
g=a2*A.dU.aw(0,w)
f=Math.cos(h)
e=Math.sin(h)
$.S()
d=new B.ao(A.O,A.M,A.S,A.T,A.R)
d.r=l.j(A.k.E(k,0,1)).gp(0)
d.z=C.dBh
r=d.G()
a3.drawCircle(n+f*g,m+e*g+s,j,r)
r.delete()}}}},
i8X(a4,a5,a6){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=a5.a,d=a5.b,a0=0+e,a1=0+d,a2=$.S(),a3=B.I()
a3.sam(C.c5f.aA(0,new B.a3(0,0,a0,a1)))
a4.aP(new B.a3(0,0,a0,a1),a3)
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
t=new B.ao(A.O,A.M,A.S,A.T,A.R)
t.r=(a2?A.Fv:A.Fo).gp(0)
q=t.G()
a2=v.e
a1.drawPath((a2==null?v.e=new B.cd(v.gbu().a.snapshot()):a2).a,q)
q.delete()}a2=d*0.8
a3=B.I()
a3.r=A.bs.gp(0)
a4.aP(new B.a3(0,a2,a0,a2+d*0.04),a3)
for(u=-A.k.F(a6*80,24),a0=d*0.84,a3=d*0.03,w=a0+a3;u<e;u+=24){t=new B.ao(A.O,A.M,A.S,A.T,A.R)
t.r=A.fV.gp(0)
q=t.G()
a1.drawRect(B.bG(new B.a3(u,a0,u+8,w)),q)
q.delete()}p=Math.sin(a6*14)*1.2
o=e*0.12
for(a0=a2+p,a2=d*0.025,w=e*0.012,t=d*0.02,s=d*0.62+p,a3=s+a3,r=a3+d*0.06,n=s+d*0.18,m=0;m<4;++m){l=m===0
k=o+e*(l?0.16:0.15)
j=B.br(new B.a3(o,s,k,n),new B.aP(t,t))
i=new B.ao(A.O,A.M,A.S,A.T,A.R)
i.r=(l?A.bB:C.daJ[m-1]).gp(0)
q=i.G()
a1.drawRRect(B.e7(j),q)
q.delete()
for(k-=o,j=k*0.18,h=0;h<3;++h){i=o+k*(0.12+h*0.28)
g=new B.ao(A.O,A.M,A.S,A.T,A.R)
g.r=A.fl.gp(0)
q=g.G()
a1.drawRect(B.bG(new B.a3(i,a3,i+j,r)),q)
q.delete()}j=new B.ao(A.O,A.M,A.S,A.T,A.R)
j.r=A.bk.gp(0)
q=j.G()
a1.drawCircle(o+k*0.25,a0,a2,q)
q.delete()
j=new B.ao(A.O,A.M,A.S,A.T,A.R)
j.r=A.bk.gp(0)
q=j.G()
a1.drawCircle(o+k*0.75,a0,a2,q)
q.delete()
o+=k+w}for(a0=a6*0.8,a2=e*0.2,a3=d*0.6,m=0;m<5;++m){f=A.k.F(a0+m*0.2,1)
w=f*d
s=new B.ao(A.O,A.M,A.S,A.T,A.R)
s.r=A.c.j(0.7*(1-f)).gp(0)
q=s.G()
a1.drawCircle(a2-f*e*0.12,a3-w*0.25,t+w*0.04,q)
q.delete()}},
i74(a2,a3,a4){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=a3.a,d=a3.b,a0=0+e,a1=0+d
$.S()
x=B.I()
w=a4*2
v=B.ar(A.jt,A.eP,(Math.sin(w)+1)/2)
v.toString
x.sam(new B.a9(A.ay,A.aE,A.x,B.a([v,A.av],y.c),null,null).aA(0,new B.a3(0,0,a0,a1)))
a2.aP(new B.a3(0,0,a0,a1),x)
for(a0=a2.a,a1=d*0.86,x=e/8-2,v=d*0.14,u=a1+v,t=0;t<8;++t){s=e*t/8
r=new B.ao(A.O,A.M,A.S,A.T,A.R)
r.r=(A.k.F(w+t,2)<1?A.c_:A.aJ).j(0.5).gp(0)
q=r.G()
a0.drawRect(B.bG(new B.a3(s,a1,s+x,u)),q)
q.delete()}a1=a4*6
p=Math.sin(a1)
J.bl(a0.save())
x=-d
a0.translate(e*0.5,d*0.55+Math.abs(p)*x*0.03)
a2.il(0,p*0.06)
u=d*0.26
s=d*0.3
r=d*0.04
o=B.br(B.bK(A.I,s,u),new B.aP(r,r))
n=B.I()
n.sam(C.c6M.aA(0,B.bK(A.I,s,u)))
a2.az(o,n)
n=d*0.08
v=B.bK(new B.t(0,d*0.02),n,v)
o=B.I()
o.r=A.b8.j(0.7).gp(0)
a2.aP(v,o)
o=B.br(B.bK(new B.t(0,x*0.25),d*0.17,d*0.22),new B.aP(r,r))
v=B.I()
v.r=A.cq.gp(0)
a2.az(o,v)
m=A.k.F(a4*1.3,1)>0.08
for(v=x*0.26,u=d*0.025,l=0;l<2;++l){k=C.crG[l]
s=new B.ao(A.O,A.M,A.S,A.T,A.R)
s.r=(m?A.b8:A.eP).gp(0)
q=s.G()
a0.drawCircle(k*d,v,u,q)
q.delete()}v=B.I()
v.r=A.ac.gp(0)
v.c=3
a2.bo(new B.t(0,x*0.335),new B.t(0,x*0.38),v)
v=B.I()
v.r=A.ax.gp(0)
a2.ad(new B.t(0,x*0.39),d*0.015,v)
for(v=-p,u=d*0.035,s=d*0.15,o=d*0.28,x*=0.08,l=0;l<2;++l){j=F.hq[l]
J.bl(a0.save())
i=j*d
a0.translate(i*0.14,x)
h=j>0
a0.rotate(j*(0.7+Math.sin(a1+(h?0:3.141592653589793))*0.8)*180/3.141592653589793,0,0)
g=new B.ao(A.O,A.M,A.S,A.T,A.R)
g.r=A.bK.gp(0)
g.c=u
g.d=A.by
q=g.G()
a0.drawLine.apply(a0,[0,0,i*0.16,0,q])
q.delete()
a0.restore()
h=h?p:v
g=new B.ao(A.O,A.M,A.S,A.T,A.R)
g.r=A.bK.gp(0)
g.c=r
g.d=A.by
q=g.G()
a0.drawLine.apply(a0,[i*0.06,s,i*0.08,o+h*d*0.02,q])
q.delete()}a0.restore()
for(a0=a4*0.7,a1=d*0.7,t=0;t<4;++t){f=A.k.F(a0+t*0.25,1)
D.GK(a2,"\u266a",new B.t(e*(0.2+0.18*t)+Math.sin(w+t)*8,a1-f*d*0.5),n,A.c.j(1-f),A.bj,0,null)}},
i1F(a1,a2,a3){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=a2.a,e=a2.b,d=0+f,a0=0+e
$.S()
x=B.I()
x.sam(C.c5m.aA(0,new B.a3(0,0,d,a0)))
a1.aP(new B.a3(0,0,d,a0),x)
x=B.I()
x.r=A.dB.gp(0)
a1.ad(new B.t(f*0.12,e*0.16),e*0.07,x)
x=e*0.72
a0=B.I()
a0.r=A.Fv.gp(0)
a1.aP(new B.a3(0,x,d,x+e*0.28),a0)
for(d=a3*0.25,a0=e*0.78,x=a1.a,w=e*0.016,v=a3*0.3,u=e*0.022,t=0;t<9;++t){s=f*(0.07+t*0.105)
r=A.k.E(A.k.F(d-t*0.12,3),0,1)
q=A.o.F(t,3)
p=s+Math.sin(a3+t)*3
q=a0-e*(0.12+0.05*q)*r
o=new B.ao(A.O,A.M,A.S,A.T,A.R)
o.r=A.hg.gp(0)
o.c=3
n=o.G()
x.drawLine.apply(x,[s,a0,p,q,n])
n.delete()
if(r>0.7){for(m=0;m<6;++m){l=m*3.141592653589793/3+v
o=Math.cos(l)
k=Math.sin(l)
j=new B.ao(A.O,A.M,A.S,A.T,A.R)
j.r=C.azU[A.o.F(t,5)].gp(0)
n=j.G()
x.drawCircle(p+o*e*0.028,q+k*e*0.028,u,n)
n.delete()}o=new B.ao(A.O,A.M,A.S,A.T,A.R)
o.r=A.dB.gp(0)
n=o.G()
x.drawCircle(p,q,w,n)
n.delete()}}for(d=e*0.03,a0=e*0.05,w=e*0.06,v=a3*0.9,u=a3*1.3,q=a3*18,t=0;t<3;++t){s=f*(0.2+0.28*t)+Math.sin(v+t*2)*f*0.12
i=e*(0.3+0.1*t)+Math.cos(u+t)*e*0.06
h=Math.abs(Math.sin(q+t))
for(p=a0*h+2,o=(t+2)%5,g=0;g<2;++g){k=B.bK(new B.t(s+F.hq[g]*e*0.025*h,i),w,p)
j=new B.ao(A.O,A.M,A.S,A.T,A.R)
j.r=C.azU[o].gp(0)
n=j.G()
x.drawOval(B.bG(k),n)
n.delete()}p=new B.ao(A.O,A.M,A.S,A.T,A.R)
p.r=A.bk.gp(0)
p.c=2
n=p.G()
x.drawLine.apply(x,[s,i-d,s,i+d,n])
n.delete()}},
hct(d,e,f,g,h,i){return B.a5(d,!1).cc(B.v3(null,!1,!0,!0,new D.fZI(e,h,g,i,f),A.eR,null,A.p9,new D.fZJ(),y.e))},
y0:function y0(d,e){this.a=d
this.b=e},
fn7:function fn7(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fyN:function fyN(d){this.a=d},
fyJ:function fyJ(){},
fyM:function fyM(d,e){this.a=d
this.b=e},
fyK:function fyK(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fyL:function fyL(d,e,f){this.a=d
this.b=e
this.c=f},
fyO:function fyO(d,e){this.a=d
this.b=e},
fZI:function fZI(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fZJ:function fZJ(){},
WJ:function WJ(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aFC:function aFC(d,e){var _=this
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
eMD:function eMD(d){this.a=d},
eMC:function eMC(d){this.a=d},
eMB:function eMB(d,e){this.a=d
this.b=e},
eME:function eME(d,e){this.a=d
this.b=e},
eMN:function eMN(d){this.a=d},
eMM:function eMM(d){this.a=d},
eML:function eML(){},
eMG:function eMG(d){this.a=d},
eMH:function eMH(d){this.a=d},
eMI:function eMI(d){this.a=d},
eMJ:function eMJ(d){this.a=d},
eMF:function eMF(d){this.a=d},
eMK:function eMK(d){this.a=d},
eMA:function eMA(d){this.a=d},
eMz:function eMz(d){this.a=d},
bwi:function bwi(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.a=h},
aNw:function aNw(){},
hcy(d){var x
A:{if("lgtv"===d){x="lg"
break A}if("sonytv"===d){x="sony"
break A}if("appletv"===d){x="apple"
break A}if("bangtv"===d){x="bo"
break A}x="samsung"
break A}return x},
imR(d){var x,w=D.hcy(d)
A:{if("lg"===w){x=A.hw
break A}if("sony"===w){x=A.dn
break A}if("apple"===w){x=A.bO
break A}if("bo"===w){x=C.tM
break A}x=A.aJ
break A}return x},
asK:function asK(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bml:function bml(){this.d=0
this.c=this.a=null},
eMx:function eMx(d,e){this.a=d
this.b=e},
eMy:function eMy(d,e){this.a=d
this.b=e},
eMu:function eMu(){},
eMt:function eMt(d){this.a=d},
eMv:function eMv(d){this.a=d},
eMw:function eMw(d){this.a=d},
eMr:function eMr(d){this.a=d},
eMs:function eMs(d,e){this.a=d
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
D.wF.prototype={}
D.w8.prototype={}
D.y0.prototype={}
D.WJ.prototype={
R(){return new D.aFC(null,null)}}
D.aFC.prototype={
gaeR(){var x,w=this,v=w.d
if(v===$){x=B.bm(null,A.of,null,1,null,w)
x.cq(0)
w.d!==$&&B.bF()
w.d=x
v=x}return v},
gDz(){var x=this.e
return x===$?this.e=this.a.e:x},
Z(){var x=this
x.a2()
x.w=B.cG(x.a.r,x.gb_P())
x.aWJ()
G.dF(520,"",80,0,0.25,"tri")},
aWJ(){var x=this.z
if(x!=null)x.a4(0)
this.z=B.cG(A.jU,new D.eMD(this))},
c9I(){var x=this.c
if(x!=null&&B.a5(x,!1).pP()){x=this.c
x.toString
B.a5(x,!1).O(this.gDz())}},
ajQ(){var x=this,w=x.w
if(w!=null)w.a4(0)
x.w=null
x.y=!0
x.aWJ()},
ay7(d){this.m(new D.eMB(this,d))
G.dF(900,"",40,0,0.3,"noise")},
b1H(d){this.m(new D.eME(this,d))
G.dF(700,"",60,0,0.3,"tri")},
q(){var x=this,w=x.w
if(w!=null)w.a4(0)
w=x.z
if(w!=null)w.a4(0)
x.gaeR().q()
x.byi()},
B(d){var x,w,v,u,t=this,s=null,r=B.m(10),q=B.J(t.gc9J(),A.r,6),p=B.a([new B.ac(0,A.G,D.imR(t.a.d).j(0.25),A.I,40)],y.r),o=B.m(4),n=y.u,m=B.a([B.cb(t.gaeR(),new D.eMM(t),s)],n)
if(t.r)m.push(t.bDP())
r=B.as(new B.fI(1.7777777777777777,B.p(s,B.bx(o,new B.an(A.a_,s,A.b3,A.t,m,s),A.ap),A.f,s,s,new B.o(s,s,q,r,p,s,A.n),s,s,s,s,s,s,s,s),s),s,s,s)
q=t.y
p=q?1:0
o=B.nP(s,A.aS,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s)
o=B.aH(s,s,s,s,B.X(A.cx,A.c,s,s,s,s),s,s,s,t.gb_P(),s,s,s,o,"Back to the board",s)
m=B.m(20)
x=t.f
w=t.a
o=B.B(B.a([o,A.b2,B.p(s,B.d(x>=0?w.c+" \xb7 "+C.kp[x].a:w.c+" \xb7 CH "+(t.gDz()+1),s,s,s,s,s,s,P.Am,s,s,s),A.f,s,s,new B.o(A.aS,s,s,m,s,s,A.n),s,s,s,s,A.mJ,s,s,s)],n),A.m,s,A.e,A.i,0,s,s)
m=t.cqW()
x=A.w.j(0.65)
w=B.m(18)
v=t.f
v=B.d(v>=0?C.kp[v].a:C.Ri[t.gDz()].a,s,s,s,s,s,s,A.ht,A.K,s,s)
u=t.f
return B.c6(s,A.w,B.bn(!0,B.aA(A.c6,new B.an(A.a_,s,A.b3,A.t,B.a([r,B.Dw(B.e_(B.x(B.a([new B.D(C.byW,o,s),A.am,m,A.b2,B.p(s,B.x(B.a([v,B.d(u>=0?C.kp[u].c:C.Ri[t.gDz()].b,s,s,s,s,s,s,Q.aa5,A.K,s,s)],n),A.m,s,A.e,A.P,0,A.p),A.f,s,s,new B.o(x,s,s,w,s,s,A.n),s,s,s,A.bg,A.bT,s,s,s)],n),A.m,s,A.e,A.i,0,A.p),!q,s),A.b5,A.iF,p)],n),s),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new D.eMN(t),s,s,s,s,s,s,!1,A.a3),!0,!1,A.af,!0,!0),s,!1,!1,s,s)},
cqW(){var x=this,w=null,v=new D.eML(),u=A.w.j(0.72),t=B.m(22),s=B.J(A.aJ.j(0.5),A.r,1)
return B.p(w,B.B(B.a([v.$3(A.wv,"CH \u2212",new D.eMG(x)),v.$3(A.hQ,"CH +",new D.eMH(x)),v.$5$color$on(A.Hj,"TV",new D.eMI(x),A.aJ,x.f<0),v.$5$color$on(A.yS,"APPS",new D.eMJ(x),A.bq,x.r),v.$5$color$on(A.Ci,"ADS",new D.eMK(x),A.c_,x.f===0)],y.u),A.m,w,A.e,A.P,0,w,w),A.f,w,w,new B.o(u,w,s,t,w,w,A.n),w,w,w,w,A.a_Z,w,w,w)},
bDP(){return new D.asK(this.a.d,this.gcfB(),new D.eMA(this),null)},
gc9J(){var x,w=D.hcy(this.a.d)
A:{if("apple"===w){x=A.dn
break A}if("bo"===w){x=C.Fh
break A}if("sony"===w){x=C.bdk
break A}if("lg"===w){x=A.ei
break A}x=A.cr
break A}return x}}
D.bwi.prototype={
a3(d,e){var x=this
return D.hc9(d,e,x.b,x.d,x.e,x.c)},
av(d){return!0}}
D.aNw.prototype={
q(){var x=this,w=x.a8$
if(w!=null)w.a5(0,x.gbB())
x.a8$=null
x.a1()},
aV(){this.b1()
this.b0()
this.bC()}}
D.asK.prototype={
R(){return new D.bml()},
a6l(d,e){return this.d.$1(e)}}
D.bml.prototype={
b_Q(d){this.m(new D.eMx(this,d))
this.a.a6l(0,d)},
B(d){var x,w=this,v=D.hcy(w.a.c)
A:{if("lg"===v){x=w.c2m()
break A}if("sony"===v){x=w.cyK()
break A}if("apple"===v){x=w.c9K()
break A}if("bo"===v){x=w.bEK()
break A}x=w.ct_()
break A}return x},
gaeS(){var x=new B.V(Date.now(),0,!1)
return A.a.aX(A.o.u(B.dg(x)),2,"0")+":"+A.a.aX(A.o.u(B.fR(x)),2,"0")},
ay8(d,e,f,g,h,i,j){var x,w,v=null,u=C.kp[d],t=this.d===d,s=u.d,r=B.ar(s,A.w,0.55)
r.toString
r=B.a([s,r],y.c)
s=B.m(h)
if(t)x=i
else x=A.L
x=B.J(x,A.r,t?2.5:0)
w=B.a([B.d(u.b,v,v,v,v,v,v,B.l(v,v,v,v,v,v,v,v,v,v,v,e,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],y.u)
if(g)w.push(new B.D(A.uc,B.d(u.a,v,1,A.a1,v,v,v,A.Va,v,v,v),v))
return B.aA(v,B.p(v,B.x(w,A.m,v,A.b9,A.i,0,A.p),A.f,v,v,new B.o(v,v,x,s,v,new B.a9(A.ay,A.aE,A.x,r,v,v),A.n),v,f,v,v,v,v,v,j),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new D.eMy(this,d),v,v,v,v,v,v,!1,A.a3)},
b_R(d,e,f,g,h,i){return this.ay8(d,e,f,!1,g,h,i)},
ct_(){var x,w,v,u,t,s,r=this,q=null,p=r.a.e,o=y.u,n=B.B(B.a([C.fH8,A.ad,C.fzb,A.b2,C.bY_,A.ad,C.bTL,A.ad,B.d(r.gaeS(),q,q,q,q,q,q,C.aUK,q,q,q)],o),A.m,q,A.e,A.i,0,q,q),m=C.kp[r.d],l=B.d(m.a,q,q,q,q,q,q,A.lq,q,q,q)
m=B.d(m.c,q,1,A.a1,q,q,q,C.fqy,q,q,q)
x=A.c.j(0.08)
w=B.a([],o)
for(v=0;v<2;++v){u=new B.aP(8,8)
w.push(B.p(q,B.X(C.crt[v],A.ac,q,q,q,17),A.f,q,q,new B.o(A.bz,q,q,new B.bh(u,u,u,u),q,q,A.n),q,34,q,A.Nn,q,q,q,34))}u=B.a([],o)
for(t=0;t<8;++t){s=r.d===t?1.12:1
u.push(new B.D(A.Nn,new B.z1(r.ay8(t,14,44,!0,8,A.aJ,52),s,A.b5,A.fO,q,q),q))}w.push(B.E(B.ch(B.B(u,A.m,q,A.e,A.i,0,q,q),A.t,q,A.y,q,q,q,q,A.aM),1))
return B.aA(q,B.p(q,B.x(B.a([n,A.b2,new B.bM(A.a5,q,q,l,q),new B.bM(A.a5,q,q,m,q),A.am,B.p(q,B.B(w,A.m,q,A.e,A.i,0,q,q),A.f,q,q,new B.o(x,q,q,A.WR,q,q,A.n),q,q,q,q,A.NO,q,q,q)],o),A.m,q,A.e,A.i,0,A.p),A.f,q,q,C.b5b,q,q,q,q,H.akn,q,q,q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,p,q,q,q,q,q,q,!1,A.a3)},
c2m(){var x=null,w=this.a.e,v=y.u
return B.aA(x,B.p(x,B.x(B.a([B.B(B.a([B.p(x,C.fNl,A.f,x,x,new B.o(A.hw,x,x,B.m(10),x,x,A.n),x,x,x,x,A.mL,x,x,x),A.bm,C.fG6,A.b2,B.d(this.gaeS(),x,x,x,x,x,x,A.Ei,x,x,x)],v),A.m,x,A.e,A.i,0,x,x),A.b2,new B.a4(x,62,B.hR(x,new D.eMt(this),8,x,x,A.aM,new D.eMu(),!1),x)],v),A.E,x,A.e,A.i,0,A.p),A.f,x,x,C.b5m,x,x,x,x,S.Nt,x,x,x),A.y,!1,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,w,x,x,x,x,x,x,!1,A.a3)},
cyK(){var x,w,v,u,t=this,s=null,r=C.kp[t.d],q=t.a.e,p=y.u,o=B.a([B.p(s,C.f3S,A.f,s,s,new B.o(A.dr,s,s,B.m(12),s,s,A.n),s,s,s,s,A.yA,s,s,s),A.ad],p)
for(x=0;x<3;++x){w=C.dl6[x]
v=w==="Apps"?A.c:A.aC
o.push(new B.D(A.iG,new B.y(w,s,new B.F(!0,v,s,s,s,s,9.5,A.U,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s),s,s,s,s,s,s,s,s,s),s))}o.push(A.b2)
o.push(B.d(t.gaeS(),s,s,s,s,s,s,C.fpX,s,s,s))
o=B.B(o,A.m,s,A.e,A.i,0,s,s)
v=r.d
u=B.ar(v,A.w,0.7)
u.toString
u=B.a([v,u],y.c)
v=B.m(10)
return B.aA(s,B.p(s,B.x(B.a([o,A.fG,B.E(B.B(B.a([B.E(B.p(s,B.x(B.a([B.d(r.b,s,s,s,s,s,s,A.pG,s,s,s),B.d(r.a,s,s,s,s,s,s,A.nN,s,s,s),B.d(r.c,s,2,A.a1,s,s,s,C.fwv,s,s,s),A.cS,B.aA(s,B.p(s,C.fCR,A.f,s,s,new B.o(A.c,s,s,B.m(10),s,s,A.n),s,s,s,s,A.yA,s,s,s),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new D.eMv(t),s,s,s,s,s,s,!1,A.a3)],p),A.E,s,A.mh,A.i,0,A.p),A.f,s,s,new B.o(s,s,s,v,s,new B.a9(A.a5,A.a8,A.x,u,s,s),A.n),s,s,s,s,A.ck,s,s,s),5),A.ad,B.E(B.io(!0,s,s,A.y,C.fav,new D.eMw(t),8,A.af,s,A.ah,!1),6)],p),A.m,s,A.e,A.i,0,s,s),1)],p),A.E,s,A.e,A.i,0,A.p),A.f,C.bpH,s,s,s,s,s,s,A.h6,s,s,s),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,q,s,s,s,s,s,s,!1,A.a3)},
c9K(){var x,w,v,u,t=this,s=null,r=t.a.e,q=y.u,p=B.B(B.a([C.bYB,A.qU,C.fTr,A.b2,B.d(t.gaeS(),s,s,s,s,s,s,A.Ek,s,s,s)],q),A.m,s,A.e,A.i,0,s,s),o=B.a([],q)
for(x=0;x<8;++x){w=t.d===x
v=w?6:0
u=w?C.dqY:A.RE
w=w?1.18:1
o.push(new B.D(A.f_,B.cY(s,new B.z1(t.b_R(x,20,44,12,A.c,44),w,A.b5,A.eH,s,s),s,s,A.b5,new B.o(s,s,s,s,u,s,A.n),A.eH,s,s,s,new B.P(0,0,0,v),s,s,s,s),s))}return B.aA(s,B.p(s,B.x(B.a([p,A.b2,new B.a4(s,68,B.ch(B.B(o,A.dI,s,A.e,A.i,0,s,s),A.t,s,A.y,s,s,s,s,A.aM),s),A.au,B.d(C.kp[t.d].a,s,s,s,s,s,s,A.oQ,s,s,s)],q),A.m,s,A.e,A.i,0,A.p),A.f,s,s,C.b5d,s,s,s,s,C.a_d,s,s,s),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,r,s,s,s,s,s,s,!1,A.a3)},
bEK(){var x,w,v,u,t,s,r=this,q=null,p=r.a.e,o=C.kp[r.d],n=y.u
o=B.E(B.x(B.a([C.fCp,A.b2,B.d(o.b,q,q,q,q,q,q,A.n2,q,q,q),A.au,B.d(o.a,q,q,q,q,q,q,C.fi_,q,q,q),A.bF,B.d(o.c,q,q,q,q,q,q,C.fwO,q,q,q),A.am,B.aA(q,B.p(q,C.fVz,A.f,q,q,C.b5J,q,q,q,q,C.by4,q,q,q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new D.eMr(r),q,q,q,q,q,q,!1,A.a3),A.b2],n),A.E,q,A.e,A.i,0,A.p),4)
x=B.p(q,q,A.f,C.bns,q,q,q,q,q,A.eZ,q,q,q,0.6)
w=B.a([],n)
for(v=0;v<8;++v){u=C.kp[v]
t=r.d===v
s=t?C.tM:C.af7
t=t?12:10.5
w.push(B.aA(q,new B.D(A.w2,new B.y(u.a,q,new B.F(!0,s,q,"serif",q,q,t,A.jW,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q),q,q,q,q,q,q,q,q,q),q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new D.eMs(r,v),q,q,q,q,q,q,!1,A.a3))}return B.aA(q,B.p(q,B.B(B.a([o,x,B.E(B.cl(w,q,q,q,q,q,A.ah,!1),3)],n),A.m,q,A.e,A.i,0,q,q),A.f,C.btd,q,q,q,q,q,q,A.Gx,q,q,q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,p,q,q,q,q,q,q,!1,A.a3)}}
var z=a.updateTypes(["~()","WJ(Y,bv<K>,bv<K>)","~(G)"])
D.fys.prototype={
$1(d){var x=null,w=B.fy(x,x,1,x,B.cS(x,x,x,x,x,x,x,x,x,B.l(x,x,this.b,x,x,x,x,x,x,x,x,d,x,x,A.u,x,x,!0,x,x,x,x,x,x,x,x),this.a),A.a4,A.bX,x,A.dA,A.bV)
w.eg()
return w},
$S:466}
D.fym.prototype={
$1(d){return Math.min(this.a*0.085,this.b*0.44/(d.length*0.62))},
$S:714}
D.fRx.prototype={
$1(d){var x=this.b,w=B.kA(this.a,x,d)
w.toString
x=B.kA(x,this.c,d)
x.toString
x=B.kA(w,x,d)
x.toString
return x},
$S:1982}
D.fkR.prototype={
$2(d,e){return A.k.E((this.a-d)/e,0,1)},
$S:80}
D.fkO.prototype={
$1(d){return A.dw.aw(0,d)},
$S:5}
D.fkQ.prototype={
$2(d,e){var x=this.b
return new B.t(this.a.a+d*x,this.c.b-e*x)},
$S:351}
D.fkP.prototype={
$5(d,e,f,g,h){var x,w,v,u=this.a.$2(h,0.5)
if(u<=0)return
x=this.b
w=x.a
J.bl(w.save())
w.translate(f.a,f.b)
x.bW(0,A.k.E(A.lv.aw(0,u),0.01,1.3))
v=this.c
E.fRy(x,A.I,g,d,v,v>4.5?0.6:0)
D.hzl(x,new B.t(0,g*1.42),g,e)
w.restore()},
$S:756}
D.fpl.prototype={
$1(d){var x=this,w=null,v=x.c?A.u:A.a7
v=B.fy(w,w,1,w,B.cS(w,w,w,w,w,w,w,w,w,B.l(w,w,x.b,w,w,w,w,w,w,w,w,d,w,w,v,w,w,!0,w,x.d,w,w,w,w,w,w),x.a),A.a4,A.bX,w,A.dA,A.bV)
v.eg()
return v},
$S:466}
D.fn7.prototype={
$1(d){var x=this,w=null,v=x.c?A.u:A.U
v=B.fy(w,w,1,w,B.cS(w,w,w,w,w,w,w,w,w,B.l(w,w,x.b,w,w,w,w,w,w,w,w,d,w,w,v,w,w,!0,w,x.d,w,w,w,w,w,w),x.a),A.a4,A.bX,w,A.dA,A.bV)
v.eg()
return v},
$S:466}
D.fyN.prototype={
$2(d,e){return A.k.E((this.a-d)/e,0,1)},
$S:80}
D.fyJ.prototype={
$1(d){return A.dw.aw(0,d)},
$S:5}
D.fyM.prototype={
$2(d,e){var x=this.b
return new B.t(this.a+d*x,e*x)},
$S:351}
D.fyK.prototype={
$5(d,e,f,g,h){var x,w,v,u=this,t=u.a.$2(h,0.6)
if(t<=0)return
x=u.b
w=x.a
J.bl(w.save())
w.translate(f.a,f.b)
x.bW(0,A.k.E(A.lv.aw(0,t),0.01,1.3))
v=u.c
E.fRy(x,A.I,g,d,v,u.d>9.5?0.5+0.3*Math.sin(v*3+d):0)
D.hzl(x,new B.t(0,g*1.42),g,e)
w.restore()},
$S:756}
D.fyL.prototype={
$3(d,e,f){var x,w,v,u,t=this.a.$2(f,0.5)
if(t<=0)return
x=A.k.E(A.lv.aw(0,t),0.01,1.3)*(1+0.07*Math.sin(this.b*6))
w=this.c
v=e*x
$.S()
u=B.I()
u.r=A.bE.gp(0)
w.ad(d,v,u)
u=B.I()
u.b=A.a9
u.c=2
u.r=A.c.gp(0)
w.ad(d,v,u)
D.GK(w,"\u2665",d.aE(0,new B.t(e*0.5*x,e*0.62*x)),e*1.3*x,A.c,A.bj,0,null)},
$S:465}
D.fyO.prototype={
$2(d,e){var x,w,v=this.a,u=v.a
v=v.c-u
u+=v*0.08
x=this.b
w=x*d
return new B.a3(u,w,u+v*0.84,w+x*e)},
$S:1984}
D.fZI.prototype={
$3(d,e,f){var x=this
return new D.WJ(x.d,x.e,x.a,x.c,x.b,null)},
$C:"$3",
$R:3,
$S:z+1}
D.fZJ.prototype={
$4(d,e,f,g){var x=y.g
return new B.d1(e,!1,B.iu(A.A,g,null,new B.bg(B.cK(A.cu,e,null),new B.bq(0.85,1,x),x.k("bg<bO.T>"))),null)},
$C:"$4",
$R:4,
$S:33}
D.eMD.prototype={
$0(){var x=this.a
if(x.c!=null&&!x.r)x.m(new D.eMC(x))},
$S:0}
D.eMC.prototype={
$0(){return this.a.y=!1},
$S:0}
D.eMB.prototype={
$0(){var x,w=this.a
w.f=-1
w.e=A.o.F(w.gDz()+this.b,10)
if(w.gDz()<0)w.e=w.gDz()+10
x=w.gaeR().y
x=x==null?null:A.o.ao(x.a,1000)
w.x=x==null?0:x
w.ajQ()},
$S:0}
D.eME.prototype={
$0(){var x=this.a
x.f=this.b
x.r=!1
x.ajQ()},
$S:0}
D.eMN.prototype={
$0(){var x=this.a
return x.m(x.gcDM())},
$S:0}
D.eMM.prototype={
$2(d,e){var x=null,w=this.a,v=w.gaeR().y,u=v==null?x:A.o.ao(v.a,1000),t=(u==null?0:u)/1000,s=w.x===0&&w.a.f?t:99
return B.b4(x,x,x,new D.bwi(w.gDz(),w.f,t,s,x),A.fF)},
$S:59}
D.eML.prototype={
$5$color$on(d,e,f,g,h){var x=null,w=h?g.j(0.28):A.c.j(0.08),v=B.m(14),u=B.J(h?g:A.aX,A.r,1)
return B.aA(x,B.p(x,B.x(B.a([B.X(d,g,x,x,x,20),A.vm,B.d(e,x,x,x,x,x,x,B.l(x,x,g,x,x,x,x,x,x,x,x,9.5,x,x,A.H,x,x,!0,x,x,x,x,x,x,x,x),x,x,x)],y.u),A.m,x,A.e,A.P,0,A.p),A.f,x,x,new B.o(w,x,u,v,x,x,A.n),x,x,x,A.jA,A.kL,x,x,56),A.y,!1,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,f,x,x,x,x,x,x,!1,A.a3)},
$3(d,e,f){return this.$5$color$on(d,e,f,A.c,!1)},
$4$color(d,e,f,g){return this.$5$color$on(d,e,f,g,!1)},
$S:1985}
D.eMG.prototype={
$0(){return this.a.ay7(-1)},
$S:0}
D.eMH.prototype={
$0(){return this.a.ay7(1)},
$S:0}
D.eMI.prototype={
$0(){return this.a.ay7(0)},
$S:0}
D.eMJ.prototype={
$0(){var x=this.a
return x.m(new D.eMF(x))},
$S:0}
D.eMF.prototype={
$0(){var x=this.a
x.r=!x.r
x.ajQ()},
$S:0}
D.eMK.prototype={
$0(){return this.a.b1H(0)},
$S:0}
D.eMA.prototype={
$0(){var x=this.a
return x.m(new D.eMz(x))},
$S:0}
D.eMz.prototype={
$0(){return this.a.r=!1},
$S:0}
D.eMx.prototype={
$0(){return this.a.d=this.b},
$S:0}
D.eMy.prototype={
$0(){return this.a.b_Q(this.b)},
$S:0}
D.eMu.prototype={
$2(d,e){return A.bm},
$S:37}
D.eMt.prototype={
$2(d,e){var x=null,w=this.a,v=w.d===e?1.1:1
v=B.a([B.vM(w.b_R(e,18,46,6,A.c,80),A.b5,A.fO,v)],y.u)
if(w.d===e)v.push(new B.D(A.uc,B.d(C.kp[e].a,x,x,x,x,x,x,C.fuY,x,x,x),x))
return B.x(v,A.m,x,A.e,A.P,0,A.p)},
$S:692}
D.eMv.prototype={
$0(){var x=this.a
return x.a.a6l(0,x.d)},
$S:0}
D.eMw.prototype={
$2(d,e){return this.a.ay8(e,15,1/0,!0,8,A.c,1/0)},
$S:43}
D.eMr.prototype={
$0(){var x=this.a
return x.a.a6l(0,x.d)},
$S:0}
D.eMs.prototype={
$0(){return this.a.b_Q(this.b)},
$S:0};(function aliases(){var x=D.aNw.prototype
x.byi=x.q})();(function installTearOffs(){var x=a._instance_0u,w=a._instance_1u
var v
x(v=D.aFC.prototype,"gb_P","c9I",0)
x(v,"gcDM","ajQ",0)
w(v,"gcfB","b1H",2)})();(function inheritance(){var x=a.mixinHard,w=a.inheritMany,v=a.inherit
w(B.hy,[D.fys,D.fym,D.fRx,D.fkO,D.fkP,D.fpl,D.fn7,D.fyJ,D.fyK,D.fyL,D.fZI,D.fZJ,D.eML])
w(B.jv,[D.fkR,D.fkQ,D.fyN,D.fyM,D.fyO,D.eMM,D.eMu,D.eMt,D.eMw])
w(B.aD,[D.wF,D.w8,D.y0])
w(B.af,[D.WJ,D.asK])
w(B.ah,[D.aNw,D.bml])
v(D.aFC,D.aNw)
w(B.iH,[D.eMD,D.eMC,D.eMB,D.eME,D.eMN,D.eMG,D.eMH,D.eMI,D.eMJ,D.eMF,D.eMK,D.eMA,D.eMz,D.eMx,D.eMy,D.eMv,D.eMr,D.eMs])
v(D.bwi,B.mf)
x(D.aNw,B.cg)})()
B.j0(b.typeUniverse,JSON.parse('{"WJ":{"af":[],"v":[]},"aFC":{"ah":["WJ"]},"bwi":{"aC":[]},"asK":{"af":[],"v":[]},"bml":{"ah":["asK"]},"NI":{"af":[],"v":[]}}'))
var y=(function rtii(){var x=B.at
return{C:x("O<Sl>"),r:x("O<ac>"),c:x("O<u>"),a:x("O<fV>"),s:x("O<+(K,K,K)>"),x:x("O<n>"),u:x("O<v>"),h:x("O<K>"),g:x("bq<K>"),e:x("G")}})();(function constants(){var x=a.makeConstList
C.bfO=new B.u(1,0.0196078431372549,0.03137254901960784,0.058823529411764705,A.q)
C.brn=new B.u(1,0.043137254901960784,0.10196078431372549,0.2,A.q)
C.dhL=x([C.bfO,C.brn],y.c)
C.c62=new B.a9(A.b0,A.b6,A.x,C.dhL,null,null)
C.b5b=new B.o(null,null,null,null,null,C.c62,A.n)
C.bp2=new B.u(1,0.42745098039215684,0.47843137254901963,0.5764705882352941,A.q)
C.bdN=new B.u(1,0.16862745098039217,0.1803921568627451,0.26666666666666666,A.q)
C.bf_=new B.u(1,0.4823529411764706,0.29411764705882354,0.41568627450980394,A.q)
C.due=x([C.bp2,C.bdN,C.bf_],y.c)
C.c4m=new B.a9(A.ay,A.aE,A.x,C.due,null,null)
C.b5d=new B.o(null,null,null,null,null,C.c4m,A.n)
C.b0E=new B.da(0.5,-0.6)
C.bsG=new B.u(1,0.22745098039215686,0.054901960784313725,0.10980392156862745,A.q)
C.dcS=x([C.bsG,A.ei],y.c)
C.ev9=new B.c_(C.b0E,1.3,A.x,null,0,C.dcS,null,null)
C.b5m=new B.o(null,null,null,null,null,C.ev9,A.n)
C.tM=new B.u(1,0.8392156862745098,0.7176470588235294,0.4823529411764706,A.q)
C.b3t=new B.ay(C.tM,1,A.r,-1)
C.b3G=new B.bH(A.a0,A.a0,C.b3t,A.a0)
C.b5J=new B.o(null,null,C.b3G,null,null,null,A.n)
C.aeD=new B.u(0.9490196078431372,0.06666666666666667,0.07450980392156863,0.09411764705882353,A.q)
C.bdk=new B.u(1,0.16470588235294117,0.16470588235294117,0.17647058823529413,A.q)
C.bdo=new B.u(1,0.00784313725490196,0.01568627450980392,0.03529411764705882,A.q)
C.af7=new B.u(1,0.6588235294117647,0.6235294117647059,0.5647058823529412,A.q)
C.XE=new B.u(1,0.24705882352941178,0.5607843137254902,0.30196078431372547,A.q)
C.Fh=new B.u(1,0.7215686274509804,0.6980392156862745,0.6549019607843137,A.q)
C.afQ=new B.u(1,0.8784313725490196,0.6745098039215687,0.4117647058823529,A.q)
C.Y3=new B.u(1,1,0.23137254901960785,0.12156862745098039,A.q)
C.agc=new B.u(1,0.00784313725490196,0.011764705882352941,0.0392156862745098,A.q)
C.FC=new B.u(1,0.06666666666666667,0.0784313725490196,0.09411764705882353,A.q)
C.y0=new B.u(1,0.054901960784313725,0.07058823529411765,0.09411764705882353,A.q)
C.bns=new B.u(1,0.2901960784313726,0.26666666666666666,0.23529411764705882,A.q)
C.iA=new B.u(1,0.043137254901960784,0.12156862745098039,0.29411764705882354,A.q)
C.mC=new B.u(1,0.09019607843137255,0.09019607843137255,0.10980392156862745,A.q)
C.bpD=new B.u(1,0.1843137254901961,0.43529411764705883,0.23137254901960785,A.q)
C.bpH=new B.u(1,0.08627450980392157,0.09411764705882353,0.10980392156862745,A.q)
C.bqe=new B.u(1,0.24705882352941178,0.3843137254901961,0.07058823529411765,A.q)
C.Za=new B.u(1,1,0.9529411764705882,0.6274509803921569,A.q)
C.ajd=new B.u(1,0.8392156862745098,0.7254901960784313,0.5490196078431373,A.q)
C.btd=new B.u(1,0.10196078431372549,0.09019607843137255,0.0784313725490196,A.q)
C.by4=new B.P(0,0,0,1)
C.byW=new B.P(10,10,10,0)
C.a_d=new B.P(10,6,10,8)
C.akD=new B.P(14,10,10,10)
C.aof=new B.a0(62970,"MaterialIcons",!1)
C.apc=new B.a0(983316,"MaterialIcons",!1)
C.uI=new B.a0(983617,"MaterialIcons",!1)
C.bTL=new B.ae(A.Cx,13,A.ac,null,null,null)
C.bY_=new B.ae(A.fa,13,A.ac,null,null,null)
C.bPk=new B.a0(983768,"MaterialIcons",!1)
C.bYB=new B.ae(C.bPk,13,A.c,null,null,null)
C.cLp=x([A.aJ,A.jx,A.pZ],y.c)
C.c3a=new B.a9(A.b0,A.b6,A.x,C.cLp,null,null)
C.c3g=new B.a9(A.b0,A.b6,A.x,L.Rc,null,null)
C.d5Q=x([A.fe,A.dH,A.cM],y.c)
C.c3s=new B.a9(A.b0,A.b6,A.x,C.d5Q,null,null)
C.d40=x([A.dB,A.ax],y.c)
C.c49=new B.a9(A.b0,A.b6,A.x,C.d40,null,null)
C.M2=new B.u(1,0.11764705882352941,0.30980392156862746,0.6392156862745098,A.q)
C.cKW=x([C.iA,C.M2,A.aA,A.bM],y.c)
C.dln=x([0,0.42,0.8,1],y.h)
C.c4o=new B.a9(A.b0,A.b6,A.x,C.cKW,C.dln,null)
C.dti=x([A.bO,A.c,A.bK],y.c)
C.c4q=new B.a9(A.a5,A.a8,A.x,C.dti,null,null)
C.dtW=x([A.hj,A.fU],y.c)
C.c5f=new B.a9(A.b0,A.b6,A.x,C.dtW,null,null)
C.dkD=x([A.du,A.p5],y.c)
C.c5m=new B.a9(A.b0,A.b6,A.x,C.dkD,null,null)
C.c6n=new B.a9(A.b0,A.b6,A.x,N.a3S,null,null)
C.dfH=x([A.aN,A.al],y.c)
C.c6M=new B.a9(A.b0,A.b6,A.x,C.dfH,null,null)
C.c7H=x(["Add every person","Link mums, dads, kids","Keep it for ever"],y.x)
C.TP=new B.z(2,3)
C.TQ=new B.z(3,4)
C.crt=x([A.lI,A.yS],B.at("O<a0>"))
C.crG=x([-0.05,0.05],y.h)
C.eiD=new B.t(26,-8)
C.ejs=new B.t(52,0)
C.eiC=new B.t(26,8)
C.cs3=x([A.I,C.eiD,C.ejs,C.eiC],B.at("O<t>"))
C.axO=x([A.c_,A.aJ,A.dB,A.be,A.cM],y.c)
C.eZ4=new B.b7(-0.2,0.46,0.12)
C.eWt=new B.b7(0.2,0.46,0.12)
C.eXe=new B.b7(0,0.52,0.15)
C.eVF=new B.b7(0,0.7,0.1)
C.cLE=x([C.eZ4,C.eWt,C.eXe,C.eVF],y.s)
C.cXp=x([A.eO,A.bM,A.MF,A.ep],y.c)
C.ayO=x([A.cM,A.bt,A.c_,A.be],y.c)
C.eCQ=new B.z("Chairs",120)
C.eCT=new B.z("Cloth",80)
C.eDc=new B.z("Delivery",25)
C.aza=x([C.eCQ,C.eCT,C.eDc],B.at("O<+(n,G)>"))
C.ec8=new D.y0("NGMY Tree Story","A family grows, one branch at a time")
C.ec3=new D.y0("Coin Hero","A little coin saves up and wins the day")
C.ecb=new D.y0("Space Voyage","The NGMY rocket explores the stars")
C.ec2=new D.y0("Ocean Friends","Fish, bubbles and a friendly whale")
C.ec4=new D.y0("Rainy Village","Storm clouds, then a rainbow")
C.ec6=new D.y0("Spark Adventure","Follow a spark round a circuit")
C.ec5=new D.y0("Fireworks Night","Colour bursts over the city")
C.eca=new D.y0("Little Train","A train rolls past the hills")
C.ec7=new D.y0("Robot Disco","A robot dances to the beat")
C.ec9=new D.y0("Garden Time","Flowers grow and butterflies fly")
C.Ri=x([C.ec8,C.ec3,C.ecb,C.ec2,C.ec4,C.ec6,C.ec5,C.eca,C.ec7,C.ec9],B.at("O<y0>"))
C.azU=x([A.c_,A.bt,A.ax,A.bq,A.cM],y.c)
C.daH=x([A.hj,A.p5],y.c)
C.daJ=x([A.bl,A.aA,A.cT],y.c)
C.dDM=new D.w8("NGMY Ads","\ud83d\udce2","Every NGMY promotion, as cartoons",A.c_,-1)
C.dDH=new D.w8("Civic Registry","\ud83e\udeaa","Enroll your family in your community",A.d3,0)
C.dDN=new D.w8("Jobs","\ud83d\udcbc","Find work and get hired",A.aA,1)
C.dDS=new D.w8("NGMY Store","\ud83d\udecd\ufe0f","African food and traditions",A.fs,2)
C.dDT=new D.w8("Kiswahili","\ud83d\udde3\ufe0f","Learn Swahili and English",A.bP,3)
C.dDQ=new D.w8("Doc Scanner","\ud83d\udcc4","Scan, save and share",A.cf,4)
C.dDI=new D.w8("Invoices","\ud83e\uddfe","Professional invoices",A.bE,5)
C.dDF=new D.w8("Calendar","\ud83d\udcc5","This month, today lit up",A.ax,-2)
C.kp=x([C.dDM,C.dDH,C.dDN,C.dDS,C.dDT,C.dDQ,C.dDI,C.dDF],B.at("O<w8>"))
C.eKb=new B.z("Jambo! Habari yako?","Nzuri, asante!")
C.eDl=new B.z("Jina lako nani?","Jina langu ni Amina.")
C.eE4=new B.z("Karibu nyumbani!","Asante sana!")
C.eKa=new B.z("Naenda shule leo.","I am going to school.")
C.eLh=new B.z("Ninapenda kujifunza!","I love to learn!")
C.eUO=new B.z("Maji, tafadhali.","Water, please.")
C.eI4=new B.z("Rafiki yangu mpendwa","My dear friend")
C.eMR=new B.z("Tuonane kesho!","See you tomorrow!")
C.eNP=new B.z("Pole sana, rafiki.","I am so sorry, friend.")
C.eK9=new B.z("Hongera! Umefaulu!","Congratulations! You passed!")
C.eFk=new B.z("Mimi ni mwanafunzi.","I am a student.")
C.ezM=new B.z("Chakula kitamu sana!","The food is so delicious!")
C.eUm=new B.z("Safari njema!","Have a good trip!")
C.evO=new B.z("Unaongea Kiswahili vizuri!","You speak Swahili well!")
C.aA9=x([C.eKb,C.eDl,C.eE4,C.eKa,C.eLh,C.eUO,C.eI4,C.eMR,C.eNP,C.eK9,C.eFk,C.ezM,C.eUm,C.evO],B.at("O<+(n,n)>"))
C.eY1=new B.b7(-0.3,0.32,0.2)
C.eVL=new B.b7(-0.08,0.17,0.22)
C.eVM=new B.b7(0.14,0.14,0.2)
C.eXm=new B.b7(0.34,0.3,0.2)
C.eZy=new B.b7(0,0.32,0.26)
C.eX4=new B.b7(-0.42,0.46,0.15)
C.eZt=new B.b7(0.42,0.46,0.15)
C.eYg=new B.b7(0,0.07,0.15)
C.aAa=x([C.eY1,C.eVL,C.eVM,C.eXm,C.eZy,C.eX4,C.eZt,C.eYg],y.s)
C.hkj=new D.wF("NGMY Civic Registry","Enroll your family. Stay counted and helped together.",A.d7,A.aJ)
C.hkx=new D.wF("NGMY Jobs","Find work. Get hired. Get paid.",A.d0,A.aT)
C.hku=new D.wF("NGMY Store","African food and traditions. Support our Congolese and African community.",A.kh,A.bt)
C.hkp=new D.wF("Kiswahili School","Learn Swahili and English, step by step.",A.cQ,A.mE)
C.hkm=new D.wF("Document Scanner","Scan, save and share your papers.",A.q7,A.hf)
C.hkk=new D.wF("Invoice Creator","Make professional invoices in minutes.",A.pS,A.nW)
C.hkg=new D.wF("Family Book and Tree","Write your family story. Grow your tree.",A.iV,A.LQ)
C.hki=new D.wF("NGMY Wallet","Save, send and earn coins.",A.q0,A.dB)
C.hkl=new D.wF("Vault Games","Play, win and learn.",A.dF,A.b8)
C.hkv=new D.wF("Electronics Lab","Build real circuits and learn.",A.eP,A.b_)
C.hkq=new D.wF("NGMY Helper and Advisors","Friendly help, any time.",A.l2,A.cM)
C.det=x([C.hkj,C.hkx,C.hku,C.hkp,C.hkm,C.hkk,C.hkg,C.hki,C.hkl,C.hkv,C.hkq],B.at("O<wF>"))
C.dkE=x([A.dF,A.fe],y.c)
C.dl6=x(["For you","Apps","Library"],y.x)
C.aB5=x([A.bB,A.bt,A.cT,A.av],y.c)
C.aBa=x([-16,16],y.h)
C.RV=x([-22,22],y.h)
C.a5e=x([-24,24],y.h)
C.a5g=x([-5,5],y.h)
C.aBi=x([-8,8],y.h)
C.dor=x([A.aK,A.al],y.c)
C.b7H=new B.ac(0,A.G,A.aS,A.ds,14)
C.dqY=x([C.b7H],y.r)
C.dsM=x([A.ax,A.cd,A.bt,A.bf,A.d3,A.b7],y.c)
C.dtP=x(["M","T","W","T","F","S","S"],y.x)
C.dv3=x([A.c,A.nZ],y.c)
C.aeL=new B.u(1,0.16862745098039217,0.1843137254901961,0.21176470588235294,A.q)
C.dBh=new B.hi(A.G,1.2)
C.cs7=x([A.eO,A.el,A.jP],y.c)
C.euP=new B.c_(I.xv,0.5,A.x,null,0,C.cs7,null,null)
C.cIe=x([A.m_,A.lZ],y.c)
C.euR=new B.c_(R.ack,0.5,A.x,null,0,C.cIe,null,null)
C.bZ5=new B.ae(A.fa,11,A.ac,null,null,null)
C.fsM=new B.F(!0,A.aR,null,null,null,null,9,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.fQm=new B.y("Search",null,C.fsM,null,null,null,null,null,null,null,null,null)
C.cME=x([C.bZ5,A.qU,C.fQm],y.u)
C.f3S=new B.ca(A.aM,A.e,A.i,A.m,null,A.p,null,0,C.cME,null)
C.fav=new B.hK(3,5,5,1.35,null)
C.bs_=new B.u(1,0.9450980392156862,0.9098039215686274,0.8470588235294118,A.q)
C.fi_=new B.F(!0,C.bs_,null,"serif",null,null,15,A.jW,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.fpX=new B.F(!0,A.ac,null,null,null,null,9.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.fqy=new B.F(!0,A.aR,null,null,null,null,9.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.aab=new B.F(!0,A.ac,null,null,null,null,12.5,null,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.aUK=new B.F(!0,A.ac,null,null,null,null,10,A.U,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.fuY=new B.F(!0,A.c,null,null,null,null,8.5,A.U,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.fwv=new B.F(!0,A.ac,null,null,null,null,8.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.fwO=new B.F(!0,C.af7,null,null,null,null,8.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.fnf=new B.F(!0,A.aC,null,null,null,null,9.5,A.U,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.fzb=new B.y("NGMY Apps",null,C.fnf,null,null,null,null,null,null,null,null,null)
C.fjI=new B.F(!0,C.tM,null,null,null,null,8,A.a7,null,3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.fCp=new B.y("BANG & OLUFSEN",null,C.fjI,null,null,null,null,null,null,null,null,null)
C.fpF=new B.F(!0,A.w,null,null,null,null,9,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.fCR=new B.y("Open",null,C.fpF,null,null,null,null,null,null,null,null,null)
C.fG6=new B.y("Home",null,C.aUK,null,null,null,null,null,null,null,null,null)
C.fH8=new B.y("SAMSUNG",null,A.aUq,null,null,null,null,null,null,null,null,null)
C.fNl=new B.y("LG",null,A.x7,null,null,null,null,null,null,null,null,null)
C.fTr=new B.y("tv",null,A.qY,null,null,null,null,null,null,null,null,null)
C.fn9=new B.F(!0,C.tM,null,null,null,null,8.5,null,null,2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.fVz=new B.y("OPEN",null,C.fn9,null,null,null,null,null,null,null,null,null)})()};
(a=>{a["NsD76raT80pBBX8TzOzxdBCpxFM="]=a.current})($__dart_deferred_initializers__);