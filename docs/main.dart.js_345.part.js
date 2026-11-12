((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,A,H,I,K,L,G,M,N,O,P,Q,R,D={
rb(d,e,f,g,h,i){var x=new D.fAK(e,h,!0),w=x.$1(g),v=w.b.c
if(v>i&&v>0)w=x.$1(Math.max(2,g*i/v))
x=w.b
v=x.c
x=x.a.c
w.a4(d,f.aK(0,new B.q(v/2,x.gba(x)/2)))},
agW(d,e,f,g,h,i){var x,w,v,u,t,s,r,q=null
if(h<=0)return
x=d.c
J.bq(x.save())
x.translate(e.a,e.b)
d.bV(0,A.k.F(A.lz.aE(0,A.k.F(h,0,1)),0.01,1.3))
w=B.fv(q,A.ct,q,q,q,B.cQ(q,q,q,q,q,q,q,q,q,B.l(q,q,A.av,q,q,q,q,q,q,q,q,g,q,q,A.u,q,q,!0,q,q,q,q,q,q,q,q),f),A.a5,A.bW,q,A.dD,A.bX)
w.ef()
v=w.b
u=v.c
v=v.a.c
t=g*0.8
s=B.br(B.bJ(A.I,v.gba(v)+g*0.7,u+g*1.1),new B.aP(t,t))
t=$.S()
u=B.K()
u.r=i.gp(0)
d.ap(s,u)
t=new B.aE(t.r,A.ah,q,q,B.a([],y.a))
u=-g
v=s.d
r=v-1
t.D(new B.aY(u*0.3,r))
t.D(new B.aq(u*0.7,v+g*0.6))
t.D(new B.aq(g*0.2,r))
t.D(new B.bt())
r=B.K()
r.r=i.gp(0)
d.ae(t,r)
r=w.b
t=r.c
r=r.a.c
w.a4(d,new B.q(-t/2,-r.gba(r)/2))
x.restore()},
hap(d,e,f,g){var x,w=A.k.F(Math.abs(Math.cos(g)),0.15,1),v=f*2,u=v*w,t=B.bJ(e,v,u)
$.S()
x=B.K()
x.r=A.br.gp(0)
d.bY(t,x)
d.bY(B.bJ(e,v,u),E.yW(A.q9,f*0.18))
if(w>0.5)D.rb(d,"$",e,f*1.2,A.q9,9999)},
i47(d,e,f,g){var x,w,v,u,t,s,r,q,p,o,n,m,l=new B.e4()
l.d_(4)
for(x=e.a,w=f-g,v=e.b,u=d.c,t=f*3,s=v*0.025,r=v*0.012,q=0;q<18;++q){p=l.aj()
o=A.k.E(w*(40+l.aj()*60)+l.aj()*v,v)
J.bq(u.save())
u.translate(p*x,o)
u.rotate((t+q)*180/3.141592653589793,0,0)
p=B.bJ(A.I,r,s)
n=C.ayB[A.o.E(q,5)]
$.S()
m=new B.ao(A.Q,A.N,A.T,A.U,A.S)
m.r=n.gp(0)
d.au(p,m)
u.restore()}},
ie3(d,e,f,g){switch(A.o.E(f,11)){case 0:D.i3L(d,e,g)
break
case 1:D.i6P(d,e,g)
break
case 2:D.icc(d,e,g)
break
case 3:D.ics(d,e,g)
break
case 4:D.ibl(d,e,g)
break
case 5:D.i6v(d,e,g)
break
case 6:D.i37(d,e,g)
break
case 7:D.idf(d,e,g)
break
case 8:D.i5v(d,e,g)
break
case 9:D.i6U(d,e,g)
break
default:D.i67(d,e,g)}},
i3L(a1,a2,a3){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a2.a,d=a2.b,a0=d*0.94
for(x=e*0.12,w=e*0.06,v=d*0.06,u=y.a,t=0;t<6;++t){s=e*(0.04+t*0.17)
r=d*(0.18+0.08*A.o.E(t,3))
q=a0-r
p=s+x
o=A.c.j(0.2)
n=$.S()
m=new B.ao(A.Q,A.N,A.T,A.U,A.S)
m.r=o.gp(0)
a1.au(new B.a2(s,q,p,q+r),m)
m=B.a([],u)
n=new B.aE(n.r,A.ah,f,f,m)
m.push(new B.aY(s-3,q))
n.a8()
o=new B.aq(s+w,q-v)
m.push(o)
l=n.f
if(l!=null)o.ai(l)
n.a8()
q=new B.aq(p+3,q)
m.push(q)
p=n.f
if(p!=null)q.ai(p)
n.a8()
q=new B.bt()
m.push(q)
p=n.f
if(p!=null)q.ai(p)
n.a8()
q=new B.ao(A.Q,A.N,A.T,A.U,A.S)
q.r=A.c.j(0.3).gp(0)
a1.ae(n,q)}x=A.w.j(0.18)
$.S()
w=B.K()
w.r=x.gp(0)
a1.au(new B.a2(0,a0,0+e,a0+(d-a0)),w)
k=Math.cos(a3*1.6)
j=Math.min(e*0.46,d*0.95)
i=j*0.62
w=a1.c
J.bq(w.save())
x=e*0.58
w.translate(x,d*0.45)
a1.pg(0,Math.max(0.08,Math.abs(k)),1)
v=i*0.1
h=B.br(B.bJ(A.I,i,j),new B.aP(v,v))
u=B.K()
q=k>=0
u.sar(new B.a9(A.a6,A.a9,A.x,q?C.dxt:C.dn4,f,f).aG(0,new B.a2(h.a,h.b,h.c,h.d)))
a1.ap(h,u)
a1.ap(h,E.yW(A.d9,2))
if(q){u=-j
q=u*0.28
p=-i
o=p*0.05
n=i*0.22
m=B.K()
m.r=F.mL.gp(0)
a1.N(new B.q(q,o),n,m)
n=B.bX(new B.q(q,o),n)
o=B.K()
o.r=F.lD.gp(0)
a1.cN(n,3.141592653589793,3.141592653589793,!0,o)
for(u*=0.05,q=p*0.25,o=i*0.07,t=0;t<3;++t){n=q+t*i*0.16
n=B.br(new B.a2(u,n,u+j*(0.42-t*0.06),n+o),A.hM)
m=new B.ao(A.Q,A.N,A.T,A.U,A.S)
m.r=A.dw.gp(0)
a1.ap(n,m)}D.rb(a1,"COMMUNITY ID",new B.q(0,p*0.4),v,A.d9,j*0.8)}else D.rb(a1,"\u2605 NGMY \u2605",A.I,i*0.16,A.c,j*0.8)
w.restore()
v=a3>2.6
if(v){t=A.k.F((a3-2.6)/0.35,0,1)
J.bq(w.save())
w.translate(x,d*0.52)
a1.ir(0,-0.25)
a1.bV(0,2.2-1.2*A.ew.aE(0,t))
g=B.bJ(A.I,i*0.3,j*0.7)
a1.ap(B.br(g,A.hN),E.yW(A.cV.j(t),3))
D.rb(a1,"\u2713 REGISTERED",A.I,i*0.13,A.cV.j(t),(g.c-g.a)*0.9)
w.restore()}x=a3*5
w=Math.sin(x)
x=Math.sin(x)
v=v&&a3<4
E.Bb(a1,new B.q(e*0.2,a0),d*0.7,a3,!1,Math.abs(x)*d*0.015,0,A.cV,F.mL,v,(w+1)/2)
if(a3>3)D.i47(a1,new B.av(e,d*0.9),a3,3)},
i6P(a4,a5,a6){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=a5.a,a1=a5.b,a2=a1*0.94,a3=A.w.j(0.2)
$.S()
x=B.K()
x.r=a3.gp(0)
a4.au(new B.a2(0,a2,0+a0,a2+(a1-a2)),x)
w=a0*0.62
v=a0*0.3
u=a1*0.62
x=a2-u
a3=w+v
t=B.K()
t.r=A.bp.gp(0)
a4.au(new B.a2(w,x,a3,x+u),t)
for(t=a6*1.5,s=v*0.2,r=u*0.1,q=0;q<4;++q)for(p=x+u*(0.1+q*0.17),o=p+r,n=0;n<3;++n){m=w+v*(0.12+n*0.3)
l=A.o.E(q+n+A.k.bh(t),3)===0?A.dE:A.aJ.j(0.6)
$.S()
k=new B.ao(A.Q,A.N,A.T,A.U,A.S)
k.r=l.gp(0)
a4.au(new B.a2(m,p,m+s,o),k)}t=w+v*0.38
s=u*0.16
r=a2-s
$.S()
p=B.K()
p.r=A.fZ.gp(0)
a4.au(new B.a2(t,r,t+v*0.24,r+s),p)
p=x-a1*0.09
s=a1*0.02
p=B.br(new B.a2(w,p,a3,p+a1*0.08),new B.aP(s,s))
a3=B.K()
a3.r=A.ay.gp(0)
a4.ap(p,a3)
a3=a1*0.05
p=a1*0.06
D.rb(a4,"JOBS",new B.q(w+v/2,x-a3),p,A.c,9999)
j=A.k.F(a6/2.8,0,1)
x=a0*0.12
i=x+(w+v*0.3-x)*A.dy.aE(0,j)
x=j<1
h=x?Math.abs(Math.sin(a6*12))*a1*0.02:0
t=j>=1
r=t?(Math.sin(a6*6)+1)/2:0
E.Bb(a4,new B.q(i,a2),a1*0.6,a6,!1,h,2,A.b8,A.og,t,r)
if(x){x=B.br(B.bJ(new B.q(i-a1*0.12,a2-a1*0.17-h),a1*0.075,a1*0.1),A.hM)
r=B.K()
r.r=A.fZ.gp(0)
a4.ap(x,r)}if(t){x=a6-2.8
D.agW(a4,new B.q(i+a3,a2-a1*0.78),"Hired! \ud83c\udf89",a1*0.07,x/0.4,A.c)
for(a3=x*0.8,x=a2-a1*0.5,t=a1*0.03,r=a6*8,g=0;g<6;++g){f=A.k.E(a3+g*0.17,1)
D.hap(a4,new B.q(i+Math.sin(g*2.1)*a1*0.2,x-f*a1*0.25),t,r+g)}}a3=a0*0.04
x=a3+v
t=p+a1*0.3
s=B.br(new B.a2(a3,p,x,t),new B.aP(s,s))
$.S()
r=B.K()
r.r=A.ir.gp(0)
a4.ap(s,r)
for(x-=a3,s=a3+x*0.08,t-=p,r=x*0.84,o=t*0.24,a3+=x*0.14,x*=0.5,m=t*0.05,g=0;g<3;++g){l=(1-A.k.F((a6-g*0.5)/0.5,0,1))*a0*0.3
k=s+l
e=g*0.3
d=p+t*(0.08+e)
d=B.br(new B.a2(k,d,k+r,d+o),A.hM)
k=new B.ao(A.Q,A.N,A.T,A.U,A.S)
k.r=A.c.gp(0)
a4.ap(d,k)
l=a3+l
e=p+t*(0.14+e)
k=new B.ao(A.Q,A.N,A.T,A.U,A.S)
k.r=A.bM.gp(0)
a4.au(new B.a2(l,e,l+x,e+m),k)}},
icc(d,a0,a1){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=a0.a,g=a0.b,f=g*0.94,e=A.fZ.j(0.6)
$.S()
x=B.K()
x.r=e.gp(0)
d.au(new B.a2(0,f,0+h,f+(g-f)),x)
w=h*0.3
v=h*0.66
for(e=v/12,x=g*0.14,u=e+1,t=x+g*0.12,s=0;s<12;++s){r=w+e*s
q=new B.ao(A.Q,A.N,A.T,A.U,A.S)
q.r=C.aBU[A.o.E(s,4)].gp(0)
d.au(new B.a2(r,x,r+u,t),q)}for(u=g*0.2,t=g*0.1,r=u+t,s=0;s<12;++s){q=w+e*s
p=new B.ao(A.Q,A.N,A.T,A.U,A.S)
p.r=C.aBU[A.o.E(s,4)].gp(0)
d.cN(new B.a2(q,u,q+e,r),0,3.141592653589793,!0,p)}e=w+4
u=g*0.3
r=u+(f-u)
q=B.K()
q.r=A.fZ.gp(0)
d.au(new B.a2(e,u,e+4,r),q)
q=w+v
e=q-8
p=B.K()
p.r=A.fZ.gp(0)
d.au(new B.a2(e,u,e+4,r),p)
p=g*0.68
r=p+g*0.26
e=B.br(new B.a2(w,p,q,r),A.ij)
u=B.K()
u.r=A.ir.gp(0)
d.ap(e,u)
for(e=q-w,u=e/6,q=p+2,e/=12,r=q+(r-p-4),s=0;s<6;++s){o=w+u*s
n=new B.ao(A.Q,A.N,A.T,A.U,A.S)
n.r=((s&1)===0?A.bC:A.br).j(0.9).gp(0)
d.au(new B.a2(o,q,o+e,r),n)}e=w+v*0.2
u=g*0.62
m=new B.q(e,u)
r=g*0.17
q=g*0.03
o=B.br(B.bJ(m,g*0.11,r),new B.aP(q,q))
n=B.K()
n.r=A.cs.gp(0)
d.ap(o,n)
n=-g
r=B.bJ(m.a6(0,new B.q(0,n*0.05)),g*0.04,r)
o=B.K()
o.r=A.fx.gp(0)
d.bY(r,o)
for(r=a1*0.8,n*=0.08,o=g*0.015,s=0;s<3;++s){l=A.k.E(r+s*0.33,1)
k=Math.sin(l*6+s)
j=l*g
i=new B.ao(A.Q,A.N,A.T,A.U,A.S)
i.r=A.c.j(0.6*(1-l)).gp(0)
d.N(new B.q(e+k*5,u+(n-j*0.14)),o+j*0.02,i)}for(e=w+v*0.5,r=g*0.018,s=0;s<5;++s){o=B.bJ(new B.q(e,u),x,g*(0.1+s*0.01))
n=new B.ao(A.Q,A.N,A.T,A.U,A.S)
n.b=A.aa
n.c=r
n.r=A.br.gp(0)
n.d=A.bA
d.cN(o,0.4+s*0.1,1.9,!1,n)}for(e=g*0.63,x=g*0.032,s=0;s<4;++s){u=A.o.E(s,2)
r=A.o.aq(s,2)
o=(s&1)===0?A.cf:A.w_
n=new B.ao(A.Q,A.N,A.T,A.U,A.S)
n.r=o.gp(0)
d.N(new B.q(w+v*(0.72+0.06*u)+s*g*0.02,e+r*g*0.035),x,n)}E.Bb(d,new B.q(h*0.14,f),p,a1,!1,0,1,A.br,H.ahx,!0,(Math.sin(a1*5)+1)/2)
for(e=a1*0.45,x=h*0.16,u=g*0.45,r=g*0.06,s=0;s<5;++s){l=A.k.E(e+s*0.2,1)
D.rb(d,"\u2665",new B.q(x+Math.sin(l*5+s)*g*0.08+s*g*0.03,u-l*g*0.4),r,A.ax.j(1-l),9999)}e=w+v/2
x=g*0.08
q=B.br(B.bJ(new B.q(e,x),t,v*0.7),new B.aP(q,q))
$.S()
t=B.K()
t.r=A.av.gp(0)
d.ap(q,t)
D.rb(d,"NGMY STORE \xb7 African food",new B.q(e,x),g*0.05,A.dE,v*0.64)},
ics(d,e,f){var x,w,v,u,t,s,r,q=e.a,p=e.b,o=p*0.94,n=A.w.j(0.2)
$.S()
x=B.K()
x.r=n.gp(0)
d.au(new B.a2(0,o,0+q,o+(p-o)),x)
w=A.o.E(A.o.aq(Date.now(),6000)*3+A.o.F(A.k.bh(f/2),0,2),14)
v=A.k.E(f,2)
u=v<1
x=p*0.68
n=u?(Math.sin(f*8)+1)/2:0
t=u?Math.abs(Math.sin(f*8))*p*0.01:0
E.Bb(d,new B.q(q*0.25,o),x,f,!1,t,2,A.cV,F.mL,u,n)
n=u?0:(Math.sin(f*8)+1)/2
t=u?0:Math.abs(Math.sin(f*8))*p*0.01
E.Bb(d,new B.q(q*0.75,o),x,f,!1,t,0,A.bm,C.agu,!u,n)
s=new D.fAE(p,q)
n=p*0.15
if(u){x=C.aAX[w].a
D.agW(d,new B.q(q*0.27,n),x,s.$1(x),v/0.25,A.pb)}else{x=C.aAX[w].b
D.agW(d,new B.q(q*0.73,n),x,s.$1(x),(v-1)/0.25,A.eC)}for(n=q*0.5,x=p*0.07,t=f*2,r=0;r<3;++r)D.rb(d,"\u2192",new B.q(n,p*(0.35+r*0.1)),x,A.c.j(0.3+0.5*A.k.E(t+r,1)),9999)},
ibl(d,a0,a1){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=a0.a,g=a0.b,f=g*0.94,e=A.w.j(0.2)
$.S()
x=B.K()
x.r=e.gp(0)
d.au(new B.a2(0,f,0+h,f+(g-f)),x)
x=h*0.3
w=B.bJ(new B.q(h*0.6,g*0.45),g*0.7,Math.min(x,g*0.55))
e=B.br(w,A.ij)
v=B.K()
v.r=A.c.gp(0)
d.ap(e,v)
for(e=w.d,v=w.b,u=e-v,t=u*0.03,s=w.a,r=w.c,q=r-s,p=s+q*0.1,o=0;o<9;++o){n=v+u*(0.1+o*0.095)
m=A.o.E(o,3)===2?0.5:0.8
l=new B.ao(A.Q,A.N,A.T,A.U,A.S)
l.r=A.cr.gp(0)
d.au(new B.a2(p,n,p+q*m,n+t),l)}k=A.k.F(a1/3,0,1)
j=v+u*k
if(k<1){e=s-8
u=j-2
q=e+(q+16)
t=B.K()
t.r=A.b9.gp(0)
d.au(new B.a2(e,u,q,u+4),t)
t=A.b9.j(0.18)
u=B.K()
u.r=t.gp(0)
d.au(new B.a2(e,v,q,v+(j-v)),u)}else{o=A.k.F((a1-3)/0.4,0,1)
u=A.lz.aE(0,o)
t=B.K()
t.r=A.bC.gp(0)
d.N(new B.q(r,v),g*0.08*u,t)
D.rb(d,"PDF",new B.q(r,v),g*0.045*o,A.c,9999)
v=g*0.06
D.rb(d,"\u2713 Saved",new B.q(w.gbK().a,e+v),v,A.c.j(o),9999)}e=a1*4
v=Math.sin(e)
E.Bb(d,new B.q(h*0.2,f),g*0.66,a1,!0,Math.abs(Math.sin(e))*g*0.01,0,A.cy,F.mL,!1,(v+1)/2)
i=B.bJ(new B.q(x,g*0.3),g*0.18,g*0.1)
x=g*0.02
x=B.br(i,new B.aP(x,x))
v=B.K()
v.r=A.av.gp(0)
d.ap(x,v)
v=g*0.015
v=B.br(i.cr(-3),new B.aP(v,v))
x=A.b9.j(0.35+0.3*Math.sin(a1*6))
e=B.K()
e.r=x.gp(0)
d.ap(v,e)},
i6v(a5,a6,a7){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=a6.a,a2=a6.b,a3=a2*0.94,a4=A.w.j(0.2)
$.S()
x=B.K()
x.r=a4.gp(0)
a5.au(new B.a2(0,a3,0+a1,a3+(a2-a3)),x)
w=B.bJ(new B.q(a1*0.62,a2*0.47),a2*0.8,Math.min(a1*0.4,a2*0.75))
x=B.br(w,A.n3)
a4=B.K()
a4.r=A.c.gp(0)
a5.ap(x,a4)
a4=w.a
x=w.c
v=x-a4
u=w.b
t=w.d-u
D.rb(a5,"INVOICE",new B.q(a4+v*0.3,u+t*0.09),t*0.07,A.d9,9999)
for(s=a5.c,r=v*0.08,q=a4+r,p=t*0.045,o=q+v*0.5,n=x-v*0.17,m=t*0.02,l=t*0.06,k=a7-0.5,j=0,i=0;i<3;++i){h=A.k.F((k-i*0.6)/0.4,0,1)
if(h<=0)continue
j+=C.azY[i].b
g=u+t*(0.24+i*0.14)
J.bq(s.save())
s.translate((1-h)*30,0)
f=A.cr.j(h)
$.S()
e=new B.ao(A.Q,A.N,A.T,A.U,A.S)
e.r=f.gp(0)
a5.au(new B.a2(q,g,o,g+p),e)
D.rb(a5,"$"+C.azY[i].b,new B.q(n,g+m),l,A.av.j(h),9999)
s.restore()}p=u+t*0.7
a5.ah(new B.q(q,p),new B.q(x-r,p),E.yW(A.dq,1.4))
D.rb(a5,"TOTAL  $"+j,new B.q(w.gbK().a,u+t*0.78),t*0.075,A.av,v*0.8)
x=a7>2.8
if(x){r=a7-2.8
i=A.k.F(r/0.3,0,1)
J.bq(s.save())
s.translate(w.gbK().a,u+t*0.55)
a5.ir(0,-0.3)
a5.bV(0,2-A.ew.aE(0,i))
a5.ap(B.br(B.bJ(A.I,t*0.17,v*0.6),A.hN),E.yW(A.cV.j(i),3.5))
D.rb(a5,"PAID",A.I,t*0.11,A.cV.j(i),9999)
s.restore()
for(v=r*0.7,a4-=a2*0.05,u=a2*0.7,t=a2*0.03,s=a7*8,d=0;d<6;++d){a0=A.k.E(v+d*0.17,1)
D.hap(a5,new B.q(a4+Math.sin(d*2)*a2*0.1,u-a0*a2*0.5),t,s+d)}}a4=x?(Math.sin(a7*6)+1)/2:0
E.Bb(a5,new B.q(a1*0.2,a3),a2*0.66,a7,!0,0,1,A.bF,A.og,x,a4)},
hCH(d,e,f,g){var x,w=B.bJ(e,f*0.62,f*2.5),v=f*0.31,u=B.br(w,new B.aP(v,v))
$.S()
x=B.K()
x.r=A.c.gp(0)
d.ap(u,x)
d.ap(B.br(w,new B.aP(v,v)),E.yW(A.bF,f*0.05))
D.rb(d,"\u2665 "+g,e,f*0.4,A.q0,f*2.2)},
z7(d,e,f,g,h,i,j){var x,w,v,u,t,s,r,q,p,o,n,m,l
if(j<=0)return
x=new D.fUm(e,f,g)
w=A.k.cJ(22*A.k.F(j,0,1))
for(v=i-h,u=e,t=1;t<=w;++t,u=r){s=Math.min(t/22,A.k.F(j,0,1))
r=x.$1(s)
$.S()
q=new B.ao(A.Q,A.N,A.T,A.U,A.S)
q.b=A.aa
p=q.c=h+v*s
q.r=A.og.gp(0)
q.d=A.bA
d.ah(u,r,q)
q=-p*0.18
o=r.a
n=r.b
m=B.ar(A.og,A.c,0.18)
m.toString
l=new B.ao(A.Q,A.N,A.T,A.U,A.S)
l.b=A.aa
l.c=p*0.28
l.r=m.gp(0)
l.d=A.bA
d.ah(new B.q(u.a+q,u.b+0),new B.q(o+q,n+0),l)}},
ioe(d,e,f,g){var x,w,v,u,t,s
for(x=g*0.45,w=e.a,v=g*2,u=e.b,t=0;t<7;++t){s=A.k.E(x+t/7,1)
D.rb(d,"\u2665",new B.q(w+Math.sin(t*2.3+v)*f*0.12+(t-3.5)*f*0.03,u-s*f*0.45),f*(0.04+0.02*A.o.E(t,3)),B.ar(A.bF,A.i3,A.o.E(t,2)).j((1-s)*0.9),9999)}},
i37(b3,b4,b5){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6=null,a7=b4.a,a8=b4.b,a9=a8*0.94,b0=A.e_.j(0.7),b1=$.S(),b2=B.K()
b2.r=b0.gp(0)
b3.au(new B.a2(0,a9,0+a7,a9+(a8-a9)),b2)
x=new D.fn2(b5)
w=new D.fn_()
v=Math.min(a7*0.34,a8*0.62)
b2=a7*0.64
b0=v*0.2
u=a9-b0
t=new B.q(b2,u)
s=v*0.5
r=v*0.08
r=B.br(B.bJ(t,s,v*2.15),new B.aP(r,r))
q=B.K()
q.r=A.hR.gp(0)
b3.ap(r,q)
b1=b1.r
q=y.a
p=new B.aE(b1,A.ah,a6,a6,B.a([],q))
r=u-b0
p.D(new B.aY(b2,r))
o=b2-s
n=v*0.3
m=u-n
l=b2-v
k=v*0.16
j=u-k
p.D(new B.c4(o,m,l,j))
i=u+v*0.14
p.D(new B.aq(l,i))
l=u+v*0.02
k=u+k
p.D(new B.c4(o,l,b2,k))
p.D(new B.bt())
o=B.K()
o.r=A.fY.gp(0)
b3.ae(p,o)
h=new B.aE(b1,A.ah,a6,a6,B.a([],q))
h.D(new B.aY(b2,r))
s=b2+s
r=b2+v
h.D(new B.c4(s,m,r,j))
h.D(new B.aq(r,i))
h.D(new B.c4(s,l,b2,k))
h.D(new B.bt())
k=B.K()
k.r=A.i4.gp(0)
b3.ae(h,k)
for(b1=v*0.85,s=b2-b1,r=u-v*0.06,q=b2-b0,u-=v*0.1,b0=b2+b0,b1=b2+b1,g=0;g<3;++g){b2=g*v*0.06
o=r+b2
b2=u+b2
m=new B.ao(A.Q,A.N,A.T,A.U,A.S)
m.b=A.aa
m.c=1.4
m.r=C.ajU.gp(0)
m.d=A.bA
b3.ah(new B.q(s,o),new B.q(q,b2),m)
m=new B.ao(A.Q,A.N,A.T,A.U,A.S)
m.b=A.aa
m.c=1.4
m.r=C.ajU.gp(0)
m.d=A.bA
b3.ah(new B.q(b0,b2),new B.q(b1,o),m)}f=w.$1(x.$2(0.2,1))
b0=t.aK(0,new B.q(0,n))
b1=b5*4
b2=Math.sin(b1)
u=B.K()
u.sar(new B.c_(A.A,0.5,A.x,a6,0,B.a([A.dE.j(0.6*f),A.L],y.c),a6,a6).aG(0,B.bX(t.aK(0,new B.q(0,n)),v*0.7)))
b3.N(b0,v*(0.5+0.1*b2)*f,u)
e=t.aK(0,new B.q(0,v*0.12))
d=new D.fn1(t,a8,e)
a0=w.$1(x.$2(0.5,1.1))
a1=w.$1(x.$2(1.3,1.2))
for(b0=b5*2,a2=0;a2<4;++a2){b2=C.cNT[a2]
a3=b2.a
u=d.$2(a3,b2.b)
s=Math.sin(b0+a3*9)
r=new B.ao(A.Q,A.N,A.T,A.U,A.S)
r.r=A.cV.j(0.9).gp(0)
b3.N(u,a8*b2.c*a1+s*1.2,r)}D.z7(b3,e,e.a6(0,new B.q(0,-a8*0.08)),d.$2(0,0.22),a8*0.05,a8*0.035,a0)
a4=w.$1(x.$2(1.2,0.8))
b0=a8*0.032
b2=a8*0.02
D.z7(b3,d.$2(0,0.22),d.$2(-0.06,0.28),d.$2(-0.2,0.36),b0,b2,a4)
D.z7(b3,d.$2(0,0.22),d.$2(0.06,0.28),d.$2(0.2,0.36),b0,b2,a4)
a5=w.$1(x.$2(2.4,0.7))
D.z7(b3,d.$2(0,0.22),d.$2(0,0.4),d.$2(0,0.57),a8*0.03,a8*0.016,a5)
b2=new D.fn0(x,b3,b5)
b0=a8*0.088
b2.$5(2,"Mama",d.$2(-0.2,0.36),b0,1.9)
b2.$5(3,"Baba",d.$2(0.2,0.36),b0,2.4)
b2.$5(4,"Dada",d.$2(0,0.57),a8*0.08,3)
if(b5>3.6)D.ioe(b3,d.$2(0,0.36),a8,b5-3.6)
b0=a7*0.2
b2=Math.sin(b1)
E.Bb(b3,new B.q(b0,a9),a8*0.66,b5,!1,Math.abs(Math.sin(b1))*a8*0.01,2,A.aE,F.mL,b5>3,(b2+1)/2)
D.agW(b3,new B.q(b0,a8*0.1),"My tree!",a8*0.06,x.$2(3,0.4),A.c)},
idf(d,e,f){var x,w,v,u,t,s,r,q,p=e.a,o=e.b,n=o*0.94,m=A.w.j(0.2)
$.S()
x=B.K()
x.r=m.gp(0)
d.au(new B.a2(0,n,0+p,n+(o-n)),x)
w=A.k.bh(A.k.F(f/5.5,0,1)*9)+1
for(v=p*0.62,m=n-o*0.03,x=o*0.26,u=o*0.07,t=0;t<w;++t){s=m-t*o*0.055
r=B.bJ(new B.q(v,s),u,x)
q=new B.ao(A.Q,A.N,A.T,A.U,A.S)
q.r=A.br.gp(0)
d.bY(r,q)
s=B.bJ(new B.q(v,s),u,x)
q=new B.ao(A.Q,A.N,A.T,A.U,A.S)
q.b=A.aa
q.c=2
q.r=A.q9.gp(0)
q.d=A.bA
d.bY(s,q)}m=o*0.1
D.hap(d,new B.q(v,m+A.k.E(f*1.6,1)*(n-u-w*o*0.055-m)),o*0.05,f*8)
m=o*0.08
D.rb(d,"$"+w*25,new B.q(v,m),m,A.dE,9999)
m=f*5
u=Math.sin(m)
E.Bb(d,new B.q(p*0.25,n),o*0.66,f,!1,Math.abs(Math.sin(m))*o*0.012,1,A.cy,F.mL,!0,(u+1)/2)},
i5v(d,e,a0){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=e.a,h=e.b,g=h*0.94,f=A.w.j(0.2)
$.S()
x=B.K()
x.r=f.gp(0)
d.au(new B.a2(0,g,0+i,g+(h-g)),x)
for(f=d.c,x=h*0.012,w=h*0.55,v=a0*4,u=a0*2,t=h*0.15,s=h*0.03,r=0;r<3;r=o){q=Math.sin(v+r*1.7)
J.bq(f.save())
f.translate(i*(0.5+0.14*r),w-Math.abs(q)*h*0.3)
f.rotate((u+r)*180/3.141592653589793,0,0)
q=B.br(B.bJ(A.I,t,t),new B.aP(s,s))
p=new B.ao(A.Q,A.N,A.T,A.U,A.S)
p.r=A.c.gp(0)
d.ap(q,p)
o=r+1
q=o*2
p=r===0
n=0
for(;;){if(!(n<q-(p?1:0)))break
m=n*2.1
l=Math.cos(m)
m=Math.sin(m)
k=new B.ao(A.Q,A.N,A.T,A.U,A.S)
k.r=A.bl.gp(0)
d.N(new B.q(l*h*0.04,m*h*0.04),x,k);++n}f.restore()}for(f=a0*0.6,w=h*0.25,v=h*0.06,r=0;r<5;++r){j=A.k.E(f+r*0.2,1)
D.rb(d,"\u2605",new B.q(i*(0.45+r*0.1),w-j*h*0.2),v,A.dE.j(1-j),9999)}f=i*0.22
w=a0*6
v=Math.sin(w)
E.Bb(d,new B.q(f,g),h*0.66,a0,!0,Math.abs(Math.sin(w))*h*0.015,0,A.cf,F.mL,!0,(v+1)/2)
v=g-h*0.28
s=B.br(B.bJ(new B.q(f,v),h*0.07,h*0.16),new B.aP(s,s))
$.S()
w=B.K()
w.r=A.cs.gp(0)
d.ap(s,w)
w=B.K()
w.r=A.ax.gp(0)
d.N(new B.q(f+h*0.05,v),x,w)},
i6U(d,e,f){var x,w,v,u,t,s,r,q,p,o,n,m=e.a,l=e.b,k=l*0.94,j=A.w.j(0.2),i=$.S(),h=B.K()
h.r=j.gp(0)
d.au(new B.a2(0,k,0+m,k+(l-k)),h)
h=m*0.42
j=l*0.18
x=l*0.08
w=B.br(new B.a2(h,j,h+m*0.5,j+l*0.5),new B.aP(x,x))
v=new B.aE(i.r,A.ah,null,null,B.a([],y.a))
v.D(new B.iU(w))
d.ae(v,E.yW(A.c.j(0.5),4))
u=new B.TF(new B.rs(B.xD(v),!1,B.a([],y.C))).gH(0)
for(j=f*0.18,i=u.a,x=u.b,t=i.e,s=l*0.016,r=0;r<10;++r){q=A.k.E(j+r/10,1)
i.ik()
p=t[x].b
p===$&&B.c()
p=p.a.length()
i.ik()
p=t[x].Hp(q*p)
q=new B.ao(A.Q,A.N,A.T,A.U,A.S)
q.r=A.dE.gp(0)
d.N(p.a,s,q)}o=f>1.5
j=l*0.43
n=new B.q(m*0.92,j)
if(o){i=A.dE.j(0.4+0.2*Math.sin(f*8))
x=B.K()
x.r=i.gp(0)
x.y=A.yO
d.N(n,l*0.2,x)}i=l*0.07
x=o?A.pb:A.bM
t=B.K()
t.r=x.gp(0)
d.N(n,i,t)
j=B.br(B.bJ(new B.q(h,j),l*0.2,l*0.1),A.ij)
t=B.K()
t.r=A.cV.gp(0)
d.ap(j,t)
D.rb(d,"+",new B.q(h,l*0.36),i,A.c,9999)
j=o?(Math.sin(f*6)+1)/2:0
h=o?Math.abs(Math.sin(f*6))*l*0.012:0
E.Bb(d,new B.q(m*0.2,k),l*0.68,f,!1,h,0,A.bQ,F.mL,o,j)
if(o)D.agW(d,new B.q(m*0.24,l*0.16),"It works!",i,(f-1.5)/0.4,A.c)},
i67(d,e,f){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=e.a,i=e.b,h=i*0.94,g=A.w.j(0.2)
$.S()
x=B.K()
x.r=g.gp(0)
d.au(new B.a2(0,h,0+j,h+(i-h)),x)
w=A.k.F((f-0.3)/0.4,0,1)
v=A.k.F((f-1.8)/0.4,0,1)
x=i*0.2
g=i*0.065
D.agW(d,new B.q(j*0.3,x),"How do I enroll?",g,w,A.pb)
if(f>1&&f<1.8)for(u=j*0.72,t=i*0.38,s=f*9,r=i*0.015,q=0;q<3;++q){p=Math.sin(s+q)
o=new B.ao(A.Q,A.N,A.T,A.U,A.S)
o.r=A.c.gp(0)
d.N(new B.q(u+q*i*0.05,t-Math.abs(p)*i*0.02),r,o)}D.agW(d,new B.q(j*0.7,i*0.38),"Tap Civic Registry!",g,v,A.eC)
E.Bb(d,new B.q(j*0.2,h),i*0.62,f,!1,0,2,A.ax,F.mL,f<1,0)
n=j*0.78
m=h-i*0.28
g=i*0.04
x=B.br(B.bJ(new B.q(n,m),i*0.22,x),new B.aP(g,g))
u=B.K()
u.r=A.aO.gp(0)
d.ap(x,u)
u=i*0.18
x=m-u
g=B.br(B.bJ(new B.q(n,x),i*0.14,u),new B.aP(g,g))
u=B.K()
u.r=A.cr.gp(0)
d.ap(g,u)
for(g=f*1.1,u=i*0.02,l=0;l<2;++l){k=F.hg[l]
t=A.k.E(g,1)>0.08?A.bb:A.eR
s=new B.ao(A.Q,A.N,A.T,A.U,A.S)
s.r=t.gp(0)
d.N(new B.q(n+k*i*0.04,x),u,s)}d.ah(new B.q(n,m-i*0.25),new B.q(n,m-i*0.3),E.yW(A.ad,3))
g=B.K()
g.r=A.ax.gp(0)
d.N(new B.q(n,m-i*0.31),i*0.015,g)},
fAK:function fAK(d,e,f){this.a=d
this.b=e
this.c=f},
fAE:function fAE(d,e){this.a=d
this.b=e},
fUm:function fUm(d,e,f){this.a=d
this.b=e
this.c=f},
fn2:function fn2(d){this.a=d},
fn_:function fn_(){},
fn1:function fn1(d,e,f){this.a=d
this.b=e
this.c=f},
fn0:function fn0(d,e,f){this.a=d
this.b=e
this.c=f},
aPp(d,e,f,g,h,i,j,k){var x=new D.frD(e,h,i,k),w=x.$1(g),v=w.b.c
if(v>j&&v>0)w=x.$1(Math.max(2,g*j/v))
x=w.b
v=x.c
x=x.a.c
w.a4(d,f.aK(0,new B.q(v/2,x.gba(x)/2)))},
LU(d,e,f,g){var x,w,v,u,t,s,r,q,p,o=A.o.E(g==null?A.k.bh(f/6):g,11),n=A.k.E(f,6),m=C.dgQ[o],l=e.a,k=e.b,j=0+l,i=0+k
$.S()
x=B.K()
x.sar(new B.a9(A.aA,A.aF,A.x,B.a([m.c,m.d],y.c),null,null).aG(0,new B.a2(0,0,j,i)))
d.au(new B.a2(0,0,j,i),x)
w=k*(l>=k?0.7:0.6)
i=d.c
J.bq(i.save())
i.clipRect(B.i_(new B.a2(0,0,j,0+w)),$.mz()[1],!0)
D.ie3(d,new B.av(l,w),o,n)
i.restore()
v=k-w
x=A.w.j(0.3)
u=B.K()
u.r=x.gp(0)
d.au(new B.a2(0,w,j,w+v),u)
t=A.cw.aE(0,A.k.F((n-0.2)/0.5,0,1))
J.bq(i.save())
i.translate((1-t)*l*0.25,0)
u=l/2
j=l*0.94
D.aPp(d,m.a,new B.q(u,w+v*0.3),v*0.36,A.c.j(t),!0,j,0)
D.aPp(d,m.b,new B.q(u,w+v*0.64),v*0.2,A.c.j(0.92*t),!1,j,0)
i.restore()
for(j=k*0.965,i=k*0.009,x=k*0.004,s=0;s<11;++s){r=s===o
q=r?x:0
p=new B.ao(A.Q,A.N,A.T,A.U,A.S)
p.r=A.c.j(r?0.95:0.35).gp(0)
d.N(new B.q(u+(s-5)*k*0.035,j),i+q,p)}j=l-k*0.07
i=k*0.06
D.aPp(d,"AD",new B.q(j,i),k*0.045,A.c.j(0.85),!0,9999,1)
x=k*0.02
x=B.br(B.bJ(new B.q(j,i),k*0.065,k*0.1),new B.aP(x,x))
i=B.K()
i.b=A.aa
i.c=1
i.r=A.ad.gp(0)
i.d=A.bA
d.ap(x,i)},
LV(d,e,f,g){var x,w=d.c
J.bq(w.save())
w.clipRect(B.i_(new B.a2(0,0,0+e.a,0+e.b)),$.mz()[1],!0)
x=C.kw[A.o.E(f,8)].e
if(x===-2)D.i3k(d,e,g)
else if(x===-1)D.LU(d,e,g,null)
else D.LU(d,e,g,x)
w.restore()},
i3k(d,e,f){var x,w,v,u,t,s,r,q,p,o,n,m,l=e.a,k=e.b,j=new B.V(Date.now(),0,!1),i=0+l,h=0+k
$.S()
x=B.K()
x.sar(C.c5p.aG(0,new B.a2(0,0,i,h)))
d.au(new B.a2(0,0,i,h),x)
x=B.K()
x.r=A.bC.gp(0)
d.au(new B.a2(0,0,i,0+k*0.15),x)
D.aPp(d,A.oG[B.bK(j)-1]+" "+B.bB(j),new B.q(l/2,k*0.075),k*0.08,A.c,!0,l*0.9,0)
w=l/7
for(i=k*0.21,h=k*0.05,v=0;v<7;++v)D.aPp(d,C.dwd[v],new B.q(w*(v+0.5),i),h,A.aD,!0,9999,0)
u=B.c1(B.bB(j),B.bK(j),1,0,0,0,0,0)
t=B.bV(B.c1(B.bB(j),B.bK(j)+1,0,0,0,0,0,0))
s=B.mn(u)-1
r=k*0.74/A.k.cJ((s+t)/7)
for(i=k*0.26,h=f*3,q=1;q<=t;++q){p=s+q-1
o=new B.q(w*(A.o.E(p,7)+0.5),i+r*(A.o.aq(p,7)+0.5))
if(q===B.bV(j)){x=Math.min(w,r)
n=A.aJ.j(0.5+0.2*Math.sin(h))
$.S()
m=new B.ao(A.Q,A.N,A.T,A.U,A.S)
m.r=n.gp(0)
d.N(o,x*0.42,m)}x=Math.min(w,r)
n=q===B.bV(j)?A.c:A.ad
D.aPp(d,""+q,o,x*0.42,n,!0,9999,0)}},
frD:function frD(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
wN:function wN(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
wg:function wg(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
hfb(d,e,f,g,h,i){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=d.c
J.bq(j.save())
x=e.a
w=e.b
v=0+x
u=0+w
j.clipRect(B.i_(new B.a2(0,0,v,u)),$.mz()[1],!0)
if(h<3){$.S()
t=B.K()
t.r=C.beT.gp(0)
d.au(new B.a2(0,0,v,u),t)
if(h<0.5)u=h/0.5
else u=h>2.4?(3-h)/0.6:1
s=A.k.F(u,0,1)
u=e.ej(A.I)
t=e.gdz()
r=B.K()
r.sar(new B.c_(A.A,0.5,A.x,k,0,B.a([A.aJ.j(0.35*s),A.L],y.c),k,k).aG(0,B.bX(e.ej(A.I),e.gdz()*0.5)))
d.N(u,t*0.5,r)
D.H1(d,"NGMY",new B.q(0,w*0.36),w*0.2,A.c.j(s),A.K,w*0.03,x)
D.H1(d,"T V",new B.q(0,w*0.6),w*0.08,A.aJ.j(s),A.K,w*0.05,x)
r=x*0.3
t=w*0.78
u=B.K()
u.r=A.aJ.j(s).gp(0)
d.au(new B.a2(r,t,r+x*0.4*(h/3),t+3),u)}else if(i>=0)D.LV(d,e,i,g)
else{q=A.k.F((h-3)/0.5,0,1)
p=A.o.E(f,10)
switch(p){case 0:D.icP(d,e,g)
break
case 1:D.i3X(d,e,g)
break
case 2:D.ic2(d,e,g)
break
case 3:D.i8R(d,e,g)
break
case 4:D.iaa(d,e,g)
break
case 5:D.ic3(d,e,g)
break
case 6:D.i5j(d,e,g)
break
case 7:D.icO(d,e,g)
break
case 8:D.iaY(d,e,g)
break
default:D.i5w(d,e,g)}t=x-w*0.34
r=w*0.04
o=w*0.03
n=B.br(new B.a2(t,r,t+w*0.3,r+w*0.1),new B.aP(o,o))
$.S()
o=B.K()
o.r=A.w.j(0.55).gp(0)
d.ap(n,o)
D.H1(d,"NGMY",new B.q(n.a+w*0.025,n.b+w*0.012),w*0.07,A.c,A.bk,1,k)
o=w*0.86
t=B.K()
t.r=A.w.j(0.6).gp(0)
d.au(new B.a2(0,o,v,o+w*0.14),t)
D.H1(d,"CH "+(f+1)+"  \xb7  "+C.RS[p].a,new B.q(r,w*0.885),w*0.075,A.c,A.bk,0,x-w*0.08)
if(q<1){t=B.K()
t.r=A.c.j(0.6*(1-q)).gp(0)
d.au(new B.a2(0,0,v,u),t)}}$.S()
m=B.K()
m.r=A.w.j(0.07).gp(0)
for(l=0;l<w;l+=3)d.au(new B.a2(0,l,v,l+1),m)
v=new B.aE($.S().r,A.ah,k,k,B.a([],y.a))
v.D(new B.aY(0,0))
v.D(new B.aq(x*0.45,0))
v.D(new B.aq(0,w*0.5))
v.D(new B.bt())
w=B.K()
w.r=A.c.j(0.04).gp(0)
d.ae(v,w)
j.restore()},
H1(d,e,f,g,h,i,j,k){var x=null,w=B.fv(x,A.ct,x,1,x,B.cQ(x,x,x,x,x,x,x,x,x,B.l(x,x,h,x,x,x,x,x,x,x,x,g,x,x,A.u,x,x,!0,x,j,x,x,x,x,x,x),e),i,A.bW,x,A.dD,A.bX),v=k==null
w.o3(v?9999:k)
w.a4(d,f.a6(0,new B.q(i===A.K&&!v?(k-w.b.c)/2:0,0)))},
aPk(d,e,f,g,h,i,j){var x=new D.fpp(e,h,i,j),w=x.$1(g),v=w.b.c,u=f.c-f.a
if(v>u&&v>0)w=x.$1(g*u/v)
x=f.gbK()
v=w.b
u=v.c
v=v.a.c
w.a4(d,x.aK(0,new B.q(u/2,v.gba(v)/2)))},
icP(d4,d5,d6){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4=null,c5=d5.a,c6=d5.b,c7=A.k.E(d6,14),c8=new D.fB5(c7),c9=new D.fB1(),d0=0+c5,d1=0+c6,d2=$.S(),d3=B.K()
d3.sar(C.c6x.aG(0,new B.a2(0,0,d0,d1)))
d4.au(new B.a2(0,0,d0,d1),d3)
x=c5*0.34
w=new D.fB4(x,c6)
v=w.$2(0,0.5)
d3=c6*0.75
u=B.K()
u.sar(new B.c_(A.A,0.5,A.x,c4,0,B.a([A.bN.j(0.55),A.L],y.c),c4,c4).aG(0,B.bX(v,d3)))
d4.N(v,d3,u)
t=new B.e4()
t.d_(11)
for(d3=d6*2,s=0;s<26;++s){u=t.aj()
r=t.aj()
q=t.aj()
p=new B.ao(A.Q,A.N,A.T,A.U,A.S)
p.r=A.c.j(0.35+0.4*Math.sin(d3+s)).gp(0)
d4.N(new B.q(u*c5,r*c6*0.45),0.6+q*1.1,p)}for(u=y.a,o=0;o<2;++o){r=B.a([],u)
n=new B.aE(d2.r,A.ah,c4,c4,r)
r.push(new B.aY(0,c6))
n.a8()
for(d2=o*2,q=o===0,m=0;m<=c5;m+=6){p=q?0.78:0.82
p=new B.aq(m,c6*p+Math.sin(m/(q?70:50)+d2)*c6*0.02)
r.push(p)
l=n.f
if(l!=null)p.ai(l)
n.a8()}d2=new B.aq(c5,c6)
r.push(d2)
r=n.f
if(r!=null)d2.ai(r)
n.a8()
d2=$.S()
r=new B.ao(A.Q,A.N,A.T,A.U,A.S)
r.r=(q?C.Y9:C.bra).gp(0)
d4.ae(n,r)}k=w.$2(0,0.81)
j=c9.$1(c8.$2(0.2,1.6))
i=c9.$1(c8.$2(2.4,2.6))
for(d2=d6*1.4,h=0;h<8;++h){u=C.aAY[h]
g=u.a
f=u.b
e=Math.sin(d2+g*7)*c6*0.006
r=w.$2(g,f)
q=r.a
r=r.b
u=c6*u.c
p=new B.ao(A.Q,A.N,A.T,A.U,A.S)
p.r=A.hl.gp(0)
d4.N(new B.q(q+e,r+0),u*i,p)
p=w.$2(g,f-0.015)
r=p.a
p=p.b
q=new B.ao(A.Q,A.N,A.T,A.U,A.S)
q.r=A.en.gp(0)
d4.N(new B.q(r+e,p+0),u*0.82*i,q)}for(d2=c6*0.01,u=k.a,r=k.b,q=r+d2,p=c6*0.015,r+=p,l=c6*0.04,h=0;h<2;++h){d=F.hg[h]*c6
D.z7(d4,k,new B.q(u+d*0.04,q),new B.q(u+d*0.12,r),l,d2,j)}u=c6*0.085
D.z7(d4,k,w.$2(0.02,0.7),w.$2(0,0.6),u,c6*0.055,j)
a0=c9.$1(c8.$2(1.8,1.6))
r=c6*0.05
q=c6*0.026
D.z7(d4,w.$2(0,0.6),w.$2(-0.1,0.55),w.$2(-0.34,0.44),r,q,a0)
D.z7(d4,w.$2(0,0.6),w.$2(0.1,0.55),w.$2(0.34,0.44),r,q,a0)
a1=c9.$1(c8.$2(3.2,1.3))
q=c6*0.024
d=c6*0.018
D.z7(d4,w.$2(-0.34,0.44),w.$2(-0.17,0.33),w.$2(0,0.39),q,d,a1)
D.z7(d4,w.$2(0.34,0.44),w.$2(0.17,0.33),w.$2(0,0.39),q,d,a1)
a2=c9.$1(c8.$2(4.4,1.3))
d=c6*0.02
q=c6*0.012
D.z7(d4,w.$2(0,0.39),w.$2(-0.1,0.3),w.$2(-0.17,0.2),d,q,a2)
D.z7(d4,w.$2(0,0.39),w.$2(0.1,0.3),w.$2(0.17,0.2),d,q,a2)
d=c6*0.016
D.z7(d4,w.$2(-0.27,0.72),w.$2(-0.14,0.78),w.$2(0,0.7),d,q,c9.$1(c8.$2(3.6,1)))
D.z7(d4,w.$2(0.27,0.72),w.$2(0.14,0.78),w.$2(0,0.7),d,q,c9.$1(c8.$2(3.6,1)))
a3=new B.e4()
a3.d_(5)
for(d=d6*1.6,a4=d4.c,a5=d6*1.3,a6=i*1.4,a7=c6*0.03,s=0;s<110;++s){a8=C.aAY[A.o.E(s,8)]
a9=a3.aj()*3.141592653589793*2
b0=Math.sqrt(a3.aj())*a8.c*0.95
b1=w.$2(a8.a+Math.cos(a9)*b0,a8.b+Math.sin(a9)*b0)
b2=Math.sin(d+s)
b3=b1.a
b1=b1.b
J.bq(a4.save())
a4.translate(b3+b2*c6*0.006,b1+0)
a4.rotate((a9+Math.sin(a5+s)*0.2)*180/3.141592653589793,0,0)
b4=A.k.F(a6-A.o.E(s,10)*0.05,0,1)
b1=B.bJ(A.I,p*b4,a7*b4)
$.S()
b2=new B.ao(A.Q,A.N,A.T,A.U,A.S)
b2.r=B.ar(A.bg,A.et,(Math.sin(d3+s)+1)/2).gp(0)
d4.bY(b1,b2)
a4.restore()}b5=new D.fB2(c8,d4,d6,c7)
p=c6*0.075
b5.$5(0,"Bibi",w.$2(-0.27,0.72),p,5)
b5.$5(1,"Babu",w.$2(0.27,0.72),p,5.6)
b5.$5(2,"Mama",w.$2(-0.34,0.44),u,6.4)
b5.$5(3,"Baba",w.$2(0.34,0.44),u,7)
b5.$5(4,"Dada",w.$2(-0.17,0.2),p,8)
b5.$5(5,"Kaka",w.$2(0.17,0.2),p,8.6)
b6=new D.fB3(c8,d6,d4)
b6.$3(w.$2(0,0.7),c6*0.028,5.9)
b6.$3(w.$2(0,0.39),c6*0.035,7.4)
if(c7>9.3)for(u=(c7-9.3)*0.4,s=0;s<7;++s){b7=A.k.E(u+s/7,1)
D.H1(d4,"\u2665",w.$2(Math.sin(s*2.3+d3)*0.3,0.38-b7*0.3),c6*(0.04+0.02*A.o.E(s,3)),A.i3.j((1-b7)*0.85),A.bk,0,c4)}d3=c5*0.655+(1-c9.$1(c8.$2(1,0.9)))*c5*0.4
u=c6*0.1
d=d3+c5*0.315
b8=new B.a2(d3,u,d,u+c6*0.64)
a4=B.br(b8,new B.aP(r,r))
$.S()
a5=B.K()
a5.r=C.iD.j(0.88).gp(0)
d4.ap(a4,a5)
a5=B.br(b8,new B.aP(r,r))
a4=B.K()
a4.b=A.aa
a4.c=q
a4.r=F.f0.gp(0)
d4.ap(a5,a4)
b9=new D.fB6(b8,c6)
D.aPk(d4,"NGMY",b9.$2(0.13,0.06),c6*0.06,F.f0,!0,q)
D.aPk(d4,"Family",b9.$2(0.2,0.1),u,A.c,!0,0)
D.aPk(d4,"Tree",b9.$2(0.3,0.1),u,A.c,!0,0)
for(s=0;s<3;++s){c0=c8.$2(5.5+s*1.5,0.5)
if(c0<=0)continue
D.aPk(d4,"\u2665 "+C.c9S[s],b9.$2(0.43+s*0.075,0.06).eQ(new B.q((1-c0)*30,0)),r,A.ip.j(c0),!1,0)}c1=c8.$2(11,0.5)
if(c1>0){c2=B.bJ(new B.q(b8.gbK().a,c6*0.67),p,(d-d3)*0.6*A.ew.aE(0,c1))
d3=B.br(c2,new B.aP(l,l))
$.S()
u=B.K()
u.r=F.f0.gp(0)
d4.ap(d3,u)
if(c1>0.8)D.aPk(d4,"ngmy.org",c2.cr(-d2),r,C.iD,!0,0)}if(c7>11.6){d2=c6*0.82
D.aPk(d4,"Family is everything",new B.a2(0,d2,0+x*2,d2+r),r,A.c.j(A.k.F((c7-11.6)/0.5,0,1)),!0,0)}if(c7<0.4)c3=1-c7/0.4
else c3=c7>13.5?(c7-13.5)/0.5:0
if(c3>0){$.S()
d2=B.K()
d2.r=A.w.j(c3).gp(0)
d4.au(new B.a2(0,0,d0,d1),d2)}},
i3X(d,e,f){var x,w,v,u,t,s,r,q,p,o,n=null,m=e.a,l=e.b,k=0+m,j=0+l,i=$.S(),h=B.K()
h.sar(C.c5B.aG(0,new B.a2(0,0,k,j)))
d.au(new B.a2(0,0,k,j),h)
x=f*40
for(k=y.a,j=i,w=0;w<2;++w,j=i){i=B.a([],k)
v=new B.aE(j.r,A.ah,n,n,i)
i.push(new B.aY(0,l))
v.a8()
for(j=w===0,u=0;u<=m;u+=6){h=j?0.4:1
t=j?0.62:0.78
s=j?40:28
s=new B.aq(u,l*t+Math.sin((u+x*h)/s)*l*0.05)
i.push(s)
h=v.f
if(h!=null)s.ai(h)
v.a8()}h=new B.aq(m,l)
i.push(h)
i=v.f
if(i!=null)h.ai(i)
v.a8()
i=$.S()
h=new B.ao(A.Q,A.N,A.T,A.U,A.S)
h.r=(j?A.jx:A.e_).gp(0)
d.ae(v,h)}for(k=l*0.04,j=x*1.3,i=m+60,h=m*0.3,r=0,q=0;q<6;++q){u=A.k.E(q*90-j,i)-30
t=Math.sin(q*1.7+f)
if(Math.abs(u-h)<12)++r
D.ic7(d,new B.q(u,l*(0.35+0.08*t)),k,A.dE)}p=Math.abs(Math.sin(f*5))
o=new B.q(h,l*0.72-p*l*0.22)
k=B.bJ(new B.q(h,l*0.82),l*0.025,l*0.14*(1-p*0.4))
$.S()
j=B.K()
j.r=A.dq.gp(0)
d.bY(k,j)
j=l*0.085
k=B.K()
k.sar(C.exB.aG(0,B.bX(o,j)))
d.N(o,j,k)
k=B.K()
k.b=A.aa
k.c=2
k.r=A.q9.gp(0)
d.N(o,j,k)
k=-l
D.H1(d,"$",o.a6(0,new B.q(k*0.03,k*0.045)),l*0.09,A.q9,A.bk,0,n)
j=k*0.01
k=o.a6(0,new B.q(k*0.028,j))
i=B.K()
i.r=A.w.gp(0)
d.N(k,2.4,i)
j=o.a6(0,new B.q(l*0.028,j))
i=B.K()
i.r=A.w.gp(0)
d.N(j,2.4,i)
D.H1(d,"Saved: $"+(A.o.E(A.k.bh(f*3),1000)+r),new B.q(l*0.05,l*0.06),l*0.08,A.c,A.bk,0,n)},
ic7(d,e,f,g){var x,w,v,u,t,s,r,q=$.S(),p=B.a([],y.a),o=new B.aE(q.r,A.ah,null,null,p)
for(q=e.a,x=e.b,w=f*0.45,v=0;v<10;++v){u=-1.5707963267948966+v*3.141592653589793/5
t=(v&1)===0?f:w
s=q+Math.cos(u)*t
r=x+Math.sin(u)*t
if(v===0){s=new B.aY(s,r)
p.push(s)
r=o.f
if(r!=null)s.ai(r)
o.a8()}else{s=new B.aq(s,r)
p.push(s)
r=o.f
if(r!=null)s.ai(r)
o.a8()}}o.D(new B.bt())
$.S()
q=B.K()
q.r=g.gp(0)
d.ae(o,q)},
ic2(a0,a1,a2){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=null,g=a1.a,f=a1.b,e=$.S(),d=B.K()
d.r=M.ahK.gp(0)
a0.au(new B.a2(0,0,0+g,0+f),d)
x=new B.e4()
x.d_(7)
for(d=a2*3,w=0;w<60;++w){v=A.k.E(A.k.E(x.aj()*g-a2*(10+x.aj()*60),g)+g,g)
u=x.aj()
t=x.aj()
s=new B.ao(A.Q,A.N,A.T,A.U,A.S)
s.r=A.c.j(0.5+0.5*Math.sin(d+w)).gp(0)
a0.N(new B.q(v,u*f*0.85),0.6+t*1.4,s)}r=g*1.2-A.k.E(a2*22,g*1.6)
d=f*0.3
u=f*0.2
t=B.K()
t.sar(C.exz.aG(0,B.bX(new B.q(r,d),u)))
a0.N(new B.q(r,d),u,t)
d=B.bJ(new B.q(r,d),f*0.07,f*0.6)
t=B.K()
t.b=A.aa
t.c=3
t.r=A.bN.j(0.7).gp(0)
a0.bY(d,t)
t=Math.sin(a2*2)
d=a0.c
J.bq(d.save())
d.translate(g*0.42,f*0.52+t*f*0.04)
a0.ir(0,-0.25)
e=e.r
t=y.a
q=new B.aE(e,A.ah,h,h,B.a([],t))
u=-f
s=u*0.04
p=f*0.1
q.D(new B.aY(s,p))
o=f*0.04
q.D(new B.c4(0,f*(0.2+0.05*Math.sin(a2*30)),o,p))
q.D(new B.bt())
n=B.K()
m=f*0.12
n.sar(C.c6i.aG(0,new B.a2(s,p,s+f*0.08,p+m)))
a0.ae(q,n)
l=new B.aE(e,A.ah,h,h,B.a([],t))
n=u*0.17
l.D(new B.aY(0,n))
s=u*0.05
k=f*0.05
l.D(new B.c4(f*0.09,s,k,p))
l.D(new B.aq(s,p))
l.D(new B.c4(u*0.09,s,0,n))
l.D(new B.bt())
j=B.K()
i=u*0.08
j.sar(C.c6z.aG(0,new B.a2(i,n,i+f*0.16,n+f*0.27)))
a0.ae(l,j)
j=B.K()
j.r=A.aJ.gp(0)
a0.N(new B.q(0,s),f*0.035,j)
j=new B.aE(e,A.ah,h,h,B.a([],t))
j.D(new B.aY(s,o))
j.D(new B.aq(u*0.1,m))
j.D(new B.aq(s,p))
j.D(new B.bt())
s=B.K()
s.r=A.ax.gp(0)
a0.ae(j,s)
t=new B.aE(e,A.ah,h,h,B.a([],t))
t.D(new B.aY(k,o))
t.D(new B.aq(p,m))
t.D(new B.aq(k,p))
t.D(new B.bt())
p=B.K()
p.r=A.ax.gp(0)
a0.ae(t,p)
d.restore()},
i8R(a2,a3,a4){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=null,g=a3.a,f=a3.b,e=0+g,d=0+f,a0=$.S(),a1=B.K()
a1.sar(C.c5j.aG(0,new B.a2(0,0,e,d)))
a2.au(new B.a2(0,0,e,d),a1)
for(e=f*0.85,d=f*0.7,a1=y.a,a0=a0.r,x=0;x<4;++x){w=g*(0.1+0.25*x)
v=B.a([],a1)
u=new B.aE(a0,A.ah,h,h,v)
v.push(new B.aY(w,f))
u.a8()
t=new B.c4(w+Math.sin(a4+x)*10,e,w+4,d+x*6)
v.push(t)
v=u.f
if(v!=null)t.ai(v)
u.a8()
v=new B.ao(A.Q,A.N,A.T,A.U,A.S)
v.b=A.aa
v.c=5
v.r=A.cV.gp(0)
a2.ae(u,v)}e=A.k.E(a4*18,g*1.5)
d=a2.c
J.bq(d.save())
d.translate(e-g*0.25,f*0.35+Math.sin(a4)*6)
e=B.bJ(A.I,f*0.22,f*0.5)
v=B.K()
v.r=A.bu.gp(0)
a2.bY(e,v)
v=new B.aE(a0,A.ah,h,h,B.a([],a1))
e=-f
u=e*0.22
v.D(new B.aY(u,0))
v.D(new B.c4(e*0.36,e*0.12+Math.sin(a4*3)*5,e*0.34,e*0.16))
t=e*0.02
v.D(new B.c4(e*0.28,t,u,0))
u=B.K()
u.r=A.bu.gp(0)
a2.ae(v,u)
u=f*0.03
v=f*0.1
s=B.bJ(new B.q(0,u),v,f*0.34)
r=B.K()
r.r=A.aO.gp(0)
a2.bY(s,r)
r=B.K()
r.r=A.c.gp(0)
a2.N(new B.q(f*0.15,t),3,r)
r=B.K()
r.r=A.w.gp(0)
a2.N(new B.q(f*0.155,t),1.5,r)
d.restore()
for(t=e*0.005,s=e*0.08,r=e*0.03,q=f*0.06,e*=0.04,p=g+40,o=a4*2,x=0;x<6;++x){n=(x&1)===0?1:-1
m=A.k.E(A.k.E(a4*(24+x*7)*n+x*80,p)+g+40,p)
l=Math.sin(o+x)
J.bq(d.save())
d.translate(m-20,f*(0.52+0.06*x)+l*6)
d.scale(n,1)
m=B.bJ(A.I,q,v)
l=new B.ao(A.Q,A.N,A.T,A.U,A.S)
k=A.o.E(x,4)
l.r=C.azB[k].gp(0)
a2.bY(m,l)
l=B.a([],a1)
m=new B.aE(a0,A.ah,h,h,l)
l.push(new B.aY(e,0))
m.a8()
j=new B.aq(s,r)
l.push(j)
i=m.f
if(i!=null)j.ai(i)
m.a8()
j=new B.aq(s,u)
l.push(j)
i=m.f
if(i!=null)j.ai(i)
m.a8()
j=new B.bt()
l.push(j)
l=m.f
if(l!=null)j.ai(l)
m.a8()
l=new B.ao(A.Q,A.N,A.T,A.U,A.S)
l.r=C.azB[k].gp(0)
a2.ae(m,l)
l=new B.ao(A.Q,A.N,A.T,A.U,A.S)
l.r=A.w.gp(0)
a2.N(new B.q(u,t),1.8,l)
d.restore()}for(x=0;x<14;++x){e=A.k.E(x*0.071+0.05,1)
d=A.k.E(a4*(14+x*3)+x*40,f)
a0=Math.sin(o+x)
a1=A.o.E(x,3)
v=new B.ao(A.Q,A.N,A.T,A.U,A.S)
v.b=A.aa
v.c=1.2
v.r=A.c.j(0.7).gp(0)
a2.N(new B.q(g*e+a0*4,f-d),2+a1,v)}},
iaa(a7,a8,a9){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null,d=a8.a,a0=a8.b,a1=A.k.E(a9,12),a2=a1<7,a3=0+d,a4=0+a0,a5=$.S(),a6=B.K()
a6.sar(new B.a9(A.b1,A.b7,A.x,a2?C.dqQ:C.dd1,e,e).aG(0,new B.a2(0,0,a3,a4)))
a7.au(new B.a2(0,0,a3,a4),a6)
a6=a0*0.74
x=B.K()
x.r=(a2?C.brN:A.FG).gp(0)
a7.au(new B.a2(0,a6,a3,a6+a0*0.26),x)
for(x=a0*0.07,w=a0*0.06,v=a0*0.2,u=a0*0.1,t=a0*0.09,s=y.a,r=a9*2,a5=a5.r,q=0;q<4;++q){p=d*(0.08+0.24*q)
o=a0*(0.14+0.03*A.o.E(q,2))
n=a6-o
m=p+v
l=new B.ao(A.Q,A.N,A.T,A.U,A.S)
l.r=C.cZF[q].gp(0)
a7.au(new B.a2(p,n,m,n+o),l)
l=B.a([],s)
k=new B.aE(a5,A.ah,e,e,l)
l.push(new B.aY(p-4,n))
k.a8()
j=new B.aq(p+u,n-t)
l.push(j)
i=k.f
if(i!=null)j.ai(i)
k.a8()
n=new B.aq(m+4,n)
l.push(n)
m=k.f
if(m!=null)n.ai(m)
k.a8()
n=new B.bt()
l.push(n)
m=k.f
if(m!=null)n.ai(m)
k.a8()
n=new B.ao(A.Q,A.N,A.T,A.U,A.S)
n.r=A.eo.gp(0)
a7.ae(k,n)
n=p+x
k=o*0.55
m=a6-k
l=new B.ao(A.Q,A.N,A.T,A.U,A.S)
l.r=(a2&&A.o.E(A.k.bh(r),2)===0?A.m3:A.fZ).gp(0)
a7.au(new B.a2(n,m,n+w,m+k),l)}if(a2){for(a6=a9*20,w=a9*260,v=a0*0.8,q=0;q<70;++q){p=A.k.E(q*37+a6,d)
h=A.k.E(q*53+w,v)
t=new B.ao(A.Q,A.N,A.T,A.U,A.S)
t.r=A.fq.gp(0)
t.c=1.4
a7.ah(new B.q(p,h),new B.q(p-3,h+9),t)}a6=a9*3
if(A.o.E(A.k.bh(a6),7)===0&&A.k.E(a6,1)<0.3){a6=B.K()
a6.r=A.c.j(0.5).gp(0)
a7.au(new B.a2(0,0,a3,a4),a6)
s=new B.aE(a5,A.ah,e,e,B.a([],s))
s.D(new B.aY(d*0.6,u))
u=d*0.55
a5=a0*0.3
s.D(new B.aq(u,a5))
s.D(new B.aq(d*0.62,a5))
s.D(new B.aq(u,a0*0.55))
u=B.K()
u.b=A.aa
u.c=4
u.r=A.m3.gp(0)
a7.ae(s,u)}}else{for(a3=d*0.5,a4=3.141592653589793*A.k.F((a1-7)/2,0,1),a5=a0*0.035,q=0;q<6;++q){w=d*(0.9-q*0.07)
w=B.bJ(new B.q(a3,a6),w,w)
v=new B.ao(A.Q,A.N,A.T,A.U,A.S)
v.b=A.aa
v.c=a5
v.r=C.dva[q].j(0.9).gp(0)
a7.cN(w,3.141592653589793,a4,!1,v)}a3=B.K()
a3.r=A.dE.gp(0)
a7.N(new B.q(d*0.86,a0*0.16),a0*0.08,a3)}for(a3=d+120,q=0;q<3;++q){p=A.k.E(a9*(8+q*4)+q*120,a3)-60
for(a4=a0*(0.12+0.1*q),g=0;g<4;++g){f=C.cuf[g]
$.S()
a5=new B.ao(A.Q,A.N,A.T,A.U,A.S)
a5.r=(a2?A.bp:A.c.j(0.95)).gp(0)
a7.N(new B.q(p+f.a,a4+f.b),x,a5)}}},
ic3(d,e,a0){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=e.a,f=e.b
$.S()
x=B.K()
x.r=A.df.gp(0)
d.au(new B.a2(0,0,0+g,0+f),x)
w=B.K()
w.r=A.c.j(0.05).gp(0)
for(v=0;v<g;v+=16)d.ah(new B.q(v,0),new B.q(v,f),w)
for(u=0;u<f;u+=16)d.ah(new B.q(0,u),new B.q(g,u),w)
x=g*0.14
t=f*0.2
s=f*0.08
r=B.br(new B.a2(x,t,x+g*0.72,t+f*0.5),new B.aP(s,s))
q=new B.aE($.S().r,A.ah,null,null,B.a([],y.a))
q.D(new B.iU(r))
t=B.K()
t.b=A.aa
t.c=5
t.r=A.bu.gp(0)
d.ae(q,t)
p=new B.TF(new B.rs(B.xD(q),!1,B.a([],y.C))).gH(0)
t=p.a
o=p.b
t.ik()
n=t.e
m=n[o].b
m===$&&B.c()
m=m.a.length()
t.ik()
l=n[o].b
l===$&&B.c()
k=A.k.E(a0*m/5,l.a.length())
for(j=0;j<10;++j){t.ik()
m=n[o].b
m===$&&B.c()
m=A.k.E(k-j*9,m.a.length())
t.ik()
m=n[o].Hp(m)
l=new B.ao(A.Q,A.N,A.T,A.U,A.S)
l.r=A.dE.j(1-j*0.09).gp(0)
l.y=O.Oi
d.N(m.a,6-j*0.5,l)}t=f*0.45
o=B.br(B.bJ(new B.q(x,t),f*0.22,f*0.12),A.ij)
n=B.K()
n.r=A.cV.gp(0)
d.ap(o,n)
D.H1(d,"+",new B.q(x-5,f*0.33),f*0.07,A.c,A.bk,0,null)
i=(Math.sin(a0*2)+1)/2
h=new B.q(g*0.86,t)
t=B.K()
t.r=A.dE.j(0.25+0.5*i).gp(0)
t.y=K.H0
d.N(h,f*0.16,t)
t=B.K()
t.r=B.ar(A.bM,A.pb,i).gp(0)
d.N(h,s,t)
D.H1(d,"Electricity needs a full loop!",new B.q(0,f*0.74),f*0.075,A.ho,A.K,0,g)},
i5j(a2,a3,a4){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=a3.a,d=a3.b,a0=0+e,a1=0+d
$.S()
x=B.K()
x.sar(C.c8w.aG(0,new B.a2(0,0,a0,a1)))
a2.au(new B.a2(0,0,a0,a1),x)
x=d*0.82
a1=B.K()
a1.r=A.df.gp(0)
a2.au(new B.a2(0,x,a0,x+d*0.18),a1)
for(a0=e*0.1,w=0;w<7;++w){v=e*(0.05+w*0.15)
u=d*(0.1+0.07*A.o.E(w*5,4))
a1=x-u
t=new B.ao(A.Q,A.N,A.T,A.U,A.S)
t.r=A.av.gp(0)
a2.au(new B.a2(v,a1,v+a0,a1+u),t)}for(a0=d*0.2,a1=a4*0.55,s=0;s<4;++s){t=a1+s*0.27
r=A.k.E(t,1)
q=A.k.bh(t)*7+s*3
p=e*(0.15+0.7*A.k.E(q*0.37,1))
o=d*(0.2+0.25*A.k.E(q*0.53,1))
n=C.ayB[A.o.E(Math.abs(q),5)]
if(r<0.3){$.S()
t=new B.ao(A.Q,A.N,A.T,A.U,A.S)
t.r=A.c.gp(0)
a2.N(new B.q(p,x-(x-o)*(r/0.3)),2.5,t)}else{w=(r-0.3)/0.7
for(t=w*w*d*0.08,m=1-w,l=2.4*m+0.4,k=0;k<28;++k){j=k*3.141592653589793*2/28
i=a0*A.dW.aE(0,w)
h=Math.cos(j)
g=Math.sin(j)
$.S()
f=new B.ao(A.Q,A.N,A.T,A.U,A.S)
f.r=n.j(A.k.F(m,0,1)).gp(0)
f.y=C.bHt
a2.N(new B.q(p+h*i,o+g*i+t),l,f)}}}},
icO(a2,a3,a4){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=a3.a,f=a3.b,e=0+g,d=0+f,a0=$.S(),a1=B.K()
a1.sar(C.c7o.aG(0,new B.a2(0,0,e,d)))
a2.au(new B.a2(0,0,e,d),a1)
for(d=y.a,x=0;x<2;++x,a0=a1){a1=B.a([],d)
w=new B.aE(a0.r,A.ah,null,null,a1)
a1.push(new B.aY(0,f))
w.a8()
for(a0=x===0,v=0;v<=g;v+=6){u=a0?8:20
t=a0?0.55:0.68
s=a0?50:34
s=new B.aq(v,f*t+Math.sin((v+a4*u)/s)*f*0.06)
a1.push(s)
u=w.f
if(u!=null)s.ai(u)
w.a8()}u=new B.aq(g,f)
a1.push(u)
a1=w.f
if(a1!=null)u.ai(a1)
w.a8()
a1=$.S()
u=new B.ao(A.Q,A.N,A.T,A.U,A.S)
u.r=(a0?A.FN:A.FG).gp(0)
a2.ae(w,u)}d=f*0.8
a0=B.K()
a0.r=A.bu.gp(0)
a2.au(new B.a2(0,d,e,d+f*0.04),a0)
for(v=-A.k.E(a4*80,24),e=f*0.84,a0=f*0.03,a1=e+a0;v<g;v+=24){u=new B.ao(A.Q,A.N,A.T,A.U,A.S)
u.r=A.fZ.gp(0)
a2.au(new B.a2(v,e,v+8,a1),u)}r=Math.sin(a4*14)*1.2
q=g*0.12
for(e=d+r,d=f*0.025,a1=g*0.012,u=f*0.02,t=f*0.62+r,a0=t+a0,s=a0+f*0.06,p=t+f*0.18,o=0;o<4;++o){n=o===0
m=q+g*(n?0.16:0.15)
l=B.br(new B.a2(q,t,m,p),new B.aP(u,u))
k=new B.ao(A.Q,A.N,A.T,A.U,A.S)
k.r=(n?A.bC:C.dd3[o-1]).gp(0)
a2.ap(l,k)
for(m-=q,l=m*0.18,j=0;j<3;++j){k=q+m*(0.12+j*0.28)
i=new B.ao(A.Q,A.N,A.T,A.U,A.S)
i.r=A.fq.gp(0)
a2.au(new B.a2(k,a0,k+l,s),i)}l=new B.ao(A.Q,A.N,A.T,A.U,A.S)
l.r=A.bl.gp(0)
a2.N(new B.q(q+m*0.25,e),d,l)
l=new B.ao(A.Q,A.N,A.T,A.U,A.S)
l.r=A.bl.gp(0)
a2.N(new B.q(q+m*0.75,e),d,l)
q+=m+a1}for(e=a4*0.8,d=g*0.2,a0=f*0.6,o=0;o<5;++o){h=A.k.E(e+o*0.2,1)
a1=h*f
t=new B.ao(A.Q,A.N,A.T,A.U,A.S)
t.r=A.c.j(0.7*(1-h)).gp(0)
a2.N(new B.q(d-h*g*0.12,a0-a1*0.25),u+a1*0.04,t)}},
iaY(a1,a2,a3){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=a2.a,e=a2.b,d=0+f,a0=0+e
$.S()
x=B.K()
w=a3*2
v=B.ar(A.jx,A.eR,(Math.sin(w)+1)/2)
v.toString
x.sar(new B.a9(A.aA,A.aF,A.x,B.a([v,A.av],y.c),null,null).aG(0,new B.a2(0,0,d,a0)))
a1.au(new B.a2(0,0,d,a0),x)
for(d=e*0.86,a0=f/8-2,x=e*0.14,v=d+x,u=0;u<8;++u){t=f*u/8
s=new B.ao(A.Q,A.N,A.T,A.U,A.S)
s.r=(A.k.E(w+u,2)<1?A.c1:A.aJ).j(0.5).gp(0)
a1.au(new B.a2(t,d,t+a0,v),s)}d=a3*6
r=Math.sin(d)
a0=a1.c
J.bq(a0.save())
v=-e
a0.translate(f*0.5,e*0.55+Math.abs(r)*v*0.03)
a1.ir(0,r*0.06)
t=e*0.26
s=e*0.3
q=e*0.04
p=B.br(B.bJ(A.I,s,t),new B.aP(q,q))
o=B.K()
o.sar(C.c8V.aG(0,B.bJ(A.I,s,t)))
a1.ap(p,o)
o=e*0.08
x=B.bJ(new B.q(0,e*0.02),o,x)
p=B.K()
p.r=A.bb.j(0.7).gp(0)
a1.au(x,p)
p=B.br(B.bJ(new B.q(0,v*0.25),e*0.17,e*0.22),new B.aP(q,q))
x=B.K()
x.r=A.cr.gp(0)
a1.ap(p,x)
n=A.k.E(a3*1.3,1)>0.08
for(x=v*0.26,t=e*0.025,m=0;m<2;++m){l=C.ctS[m]
s=new B.ao(A.Q,A.N,A.T,A.U,A.S)
s.r=(n?A.bb:A.eR).gp(0)
a1.N(new B.q(l*e,x),t,s)}x=B.K()
x.r=A.ad.gp(0)
x.c=3
a1.ah(new B.q(0,v*0.335),new B.q(0,v*0.38),x)
x=B.K()
x.r=A.ax.gp(0)
a1.N(new B.q(0,v*0.39),e*0.015,x)
for(x=-r,t=e*0.035,s=e*0.15,p=e*0.28,v*=0.08,m=0;m<2;++m){k=F.hg[m]
J.bq(a0.save())
j=k*e
a0.translate(j*0.14,v)
i=k>0
a0.rotate(k*(0.7+Math.sin(d+(i?0:3.141592653589793))*0.8)*180/3.141592653589793,0,0)
h=new B.ao(A.Q,A.N,A.T,A.U,A.S)
h.r=A.bM.gp(0)
h.c=t
h.d=A.bA
a1.ah(A.I,new B.q(j*0.16,0),h)
a0.restore()
i=i?r:x
h=new B.ao(A.Q,A.N,A.T,A.U,A.S)
h.r=A.bM.gp(0)
h.c=q
h.d=A.bA
a1.ah(new B.q(j*0.06,s),new B.q(j*0.08,p+i*e*0.02),h)}a0.restore()
for(d=a3*0.7,a0=e*0.7,u=0;u<4;++u){g=A.k.E(d+u*0.25,1)
D.H1(a1,"\u266a",new B.q(f*(0.2+0.18*u)+Math.sin(w+u)*8,a0-g*e*0.5),o,A.c.j(1-g),A.bk,0,null)}},
i5w(a0,a1,a2){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=a1.a,f=a1.b,e=0+g,d=0+f
$.S()
x=B.K()
x.sar(C.c7v.aG(0,new B.a2(0,0,e,d)))
a0.au(new B.a2(0,0,e,d),x)
x=B.K()
x.r=A.dE.gp(0)
a0.N(new B.q(g*0.12,f*0.16),f*0.07,x)
x=f*0.72
d=B.K()
d.r=A.FN.gp(0)
a0.au(new B.a2(0,x,e,x+f*0.28),d)
for(e=a2*0.25,d=f*0.78,x=f*0.016,w=a2*0.3,v=f*0.022,u=0;u<9;++u){t=g*(0.07+u*0.105)
s=A.k.F(A.k.E(e-u*0.12,3),0,1)
r=A.o.E(u,3)
q=t+Math.sin(a2+u)*3
r=d-f*(0.12+0.05*r)*s
p=new B.q(q,r)
o=new B.ao(A.Q,A.N,A.T,A.U,A.S)
o.r=A.hl.gp(0)
o.c=3
a0.ah(new B.q(t,d),p,o)
if(s>0.7){for(n=0;n<6;++n){m=n*3.141592653589793/3+w
o=Math.cos(m)
l=Math.sin(m)
k=new B.ao(A.Q,A.N,A.T,A.U,A.S)
k.r=C.aAH[A.o.E(u,5)].gp(0)
a0.N(new B.q(q+o*f*0.028,r+l*f*0.028),v,k)}r=new B.ao(A.Q,A.N,A.T,A.U,A.S)
r.r=A.dE.gp(0)
a0.N(p,x,r)}}for(e=f*0.03,d=f*0.05,x=f*0.06,w=a2*0.9,v=a2*1.3,r=a2*18,u=0;u<3;++u){t=g*(0.2+0.28*u)+Math.sin(w+u*2)*g*0.12
j=f*(0.3+0.1*u)+Math.cos(v+u)*f*0.06
i=Math.abs(Math.sin(r+u))
for(q=d*i+2,o=(u+2)%5,h=0;h<2;++h){l=B.bJ(new B.q(t+F.hg[h]*f*0.025*i,j),x,q)
k=new B.ao(A.Q,A.N,A.T,A.U,A.S)
k.r=C.aAH[o].gp(0)
a0.bY(l,k)}q=new B.ao(A.Q,A.N,A.T,A.U,A.S)
q.r=A.bl.gp(0)
q.c=2
a0.ah(new B.q(t,j-e),new B.q(t,j+e),q)}},
hfy(d,e,f,g,h,i){return B.a6(d,!1).cd(B.v8(null,!1,!0,!0,new D.h1z(e,h,g,i,f),A.eS,null,A.pf,new D.h1A(),y.e))},
yb:function yb(d,e){this.a=d
this.b=e},
fpp:function fpp(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fB5:function fB5(d){this.a=d},
fB1:function fB1(){},
fB4:function fB4(d,e){this.a=d
this.b=e},
fB2:function fB2(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fB3:function fB3(d,e,f){this.a=d
this.b=e
this.c=f},
fB6:function fB6(d,e){this.a=d
this.b=e},
h1z:function h1z(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
h1A:function h1A(){},
Xg:function Xg(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aFZ:function aFZ(d,e){var _=this
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
eP4:function eP4(d){this.a=d},
eP3:function eP3(d){this.a=d},
eP2:function eP2(d,e){this.a=d
this.b=e},
eP5:function eP5(d,e){this.a=d
this.b=e},
ePe:function ePe(d){this.a=d},
ePd:function ePd(d){this.a=d},
ePc:function ePc(){},
eP7:function eP7(d){this.a=d},
eP8:function eP8(d){this.a=d},
eP9:function eP9(d){this.a=d},
ePa:function ePa(d){this.a=d},
eP6:function eP6(d){this.a=d},
ePb:function ePb(d){this.a=d},
eP1:function eP1(d){this.a=d},
eP0:function eP0(d){this.a=d},
bwJ:function bwJ(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.a=h},
aNQ:function aNQ(){},
hfG(d){var x
switch(d){case"lgtv":x="lg"
break
case"sonytv":x="sony"
break
case"appletv":x="apple"
break
case"bangtv":x="bo"
break
default:x="samsung"
break}return x},
iqD(d){var x
switch(D.hfG(d)){case"lg":x=A.hB
break
case"sony":x=A.dj
break
case"apple":x=A.bP
break
case"bo":x=C.tY
break
default:x=A.aJ
break}return x},
at7:function at7(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bmG:function bmG(){this.d=0
this.c=this.a=null},
eOZ:function eOZ(d,e){this.a=d
this.b=e},
eP_:function eP_(d,e){this.a=d
this.b=e},
eOW:function eOW(){},
eOV:function eOV(d){this.a=d},
eOX:function eOX(d){this.a=d},
eOY:function eOY(d){this.a=d},
eOT:function eOT(d){this.a=d},
eOU:function eOU(d,e){this.a=d
this.b=e}},C,E,F,S
J=c[1]
B=c[0]
A=c[2]
H=c[232]
I=c[132]
K=c[137]
L=c[183]
G=c[38]
M=c[107]
N=c[267]
O=c[101]
P=c[120]
Q=c[100]
R=c[127]
D=a.updateHolder(c[28],D)
C=c[98]
E=c[42]
F=c[96]
S=c[251]
D.wN.prototype={}
D.wg.prototype={}
D.yb.prototype={}
D.Xg.prototype={
S(){return new D.aFZ(null,null)}}
D.aFZ.prototype={
gaf5(){var x,w=this,v=w.d
if(v===$){x=B.bl(null,A.ol,null,1,null,w)
x.cq(0)
w.d!==$&&B.bE()
w.d=x
v=x}return v},
gDP(){var x=this.e
return x===$?this.e=this.a.e:x},
Y(){var x=this
x.a3()
x.w=B.cz(x.a.r,x.gb0L())
x.aXB()
G.dE(520,"",80,0,0.25,"tri")},
aXB(){var x=this.z
if(x!=null)x.a1(0)
this.z=B.cz(A.jZ,new D.eP4(this))},
cbd(){var x=this.c
if(x!=null&&B.a6(x,!1).pV()){x=this.c
x.toString
B.a6(x,!1).O(this.gDP())}},
ak7(){var x=this,w=x.w
if(w!=null)w.a1(0)
x.w=null
x.y=!0
x.aXB()},
ayM(d){this.m(new D.eP2(this,d))
G.dE(900,"",40,0,0.3,"noise")},
b2E(d){this.m(new D.eP5(this,d))
G.dE(700,"",60,0,0.3,"tri")},
t(){var x=this,w=x.w
if(w!=null)w.a1(0)
w=x.z
if(w!=null)w.a1(0)
x.gaf5().t()
x.bzA()},
B(d){var x,w,v,u,t=this,s=null,r=B.n(10),q=B.L(t.gcbe(),A.r,6),p=B.a([new B.ac(0,A.G,D.iqD(t.a.d).j(0.25),A.I,40)],y.r),o=B.n(4),n=y.u,m=B.a([B.c9(t.gaf5(),new D.ePd(t),s)],n)
if(t.r)m.push(t.bFc())
r=B.at(new B.fF(1.7777777777777777,B.p(s,B.bx(o,new B.an(A.a0,s,A.b4,A.t,m,s),A.aq),A.f,s,s,new B.o(s,s,q,r,p,s,A.n),s,s,s,s,s,s,s,s),s),s,s,s)
q=t.y
p=q?1:0
o=B.nU(s,A.aT,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s)
o=B.aG(s,s,s,s,B.X(A.cz,A.c,s,s,s,s),s,s,s,t.gb0L(),s,s,s,o,"Back to the board",s)
m=B.n(20)
x=t.f
w=t.a
o=B.A(B.a([o,A.b3,B.p(s,B.d(x>=0?w.c+" \xb7 "+C.kw[x].a:w.c+" \xb7 CH "+(t.gDP()+1),s,s,s,s,s,s,P.AF,s,s,s),A.f,s,s,new B.o(A.aT,s,s,m,s,s,A.n),s,s,s,s,A.mP,s,s,s)],n),A.m,s,A.e,A.i,0,s,s)
m=t.csS()
x=A.w.j(0.65)
w=B.n(18)
v=t.f
v=B.d(v>=0?C.kw[v].a:C.RS[t.gDP()].a,s,s,s,s,s,s,A.hz,A.K,s,s)
u=t.f
return B.c5(s,A.w,B.bm(!0,B.aA(A.c5,new B.an(A.a0,s,A.b4,A.t,B.a([r,B.Bs(new B.dx(!q,B.x(B.a([new B.D(C.bAB,o,s),A.an,m,A.b3,B.p(s,B.x(B.a([v,B.d(u>=0?C.kw[u].c:C.RS[t.gDP()].b,s,s,s,s,s,s,Q.aaM,A.K,s,s)],n),A.m,s,A.e,A.O,0,A.p),A.f,s,s,new B.o(x,s,s,w,s,s,A.n),s,s,s,A.bh,A.bU,s,s,s)],n),A.m,s,A.e,A.i,0,A.p),s),A.b6,A.iI,p)],n),s),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new D.ePe(t),s,s,s,s,s,s,!1,A.a4),!0,!1,A.ag,!0,!0),s,!1,!1,s,s)},
csS(){var x=this,w=null,v=new D.ePc(),u=A.w.j(0.72),t=B.n(22),s=B.L(A.aJ.j(0.5),A.r,1)
return B.p(w,B.A(B.a([v.$3(A.wF,"CH \u2212",new D.eP7(x)),v.$3(A.hU,"CH +",new D.eP8(x)),v.$5$color$on(A.Hz,"TV",new D.eP9(x),A.aJ,x.f<0),v.$5$color$on(A.z4,"APPS",new D.ePa(x),A.bs,x.r),v.$5$color$on(A.CA,"ADS",new D.ePb(x),A.c1,x.f===0)],y.u),A.m,w,A.e,A.O,0,w,w),A.f,w,w,new B.o(u,w,s,t,w,w,A.n),w,w,w,w,A.a0x,w,w,w)},
bFc(){return new D.at7(this.a.d,this.gchu(),new D.eP1(this),null)},
gcbe(){switch(D.hfG(this.a.d)){case"apple":var x=A.dj
break
case"bo":x=C.Fz
break
case"sony":x=C.beP
break
case"lg":x=A.em
break
default:x=A.cs
break}return x}}
D.bwJ.prototype={
a4(d,e){var x=this
return D.hfb(d,e,x.b,x.d,x.e,x.c)},
aC(d){return!0}}
D.aNQ.prototype={
t(){var x=this,w=x.aa$
if(w!=null)w.a5(0,x.gbA())
x.aa$=null
x.a2()},
aY(){this.b5()
this.b4()
this.bB()}}
D.at7.prototype={
S(){return new D.bmG()},
a6x(d,e){return this.d.$1(e)}}
D.bmG.prototype={
b0M(d){this.m(new D.eOZ(this,d))
this.a.a6x(0,d)},
B(d){var x,w=this
switch(D.hfG(w.a.c)){case"lg":x=w.c3R()
break
case"sony":x=w.cAD()
break
case"apple":x=w.cbf()
break
case"bo":x=w.bG7()
break
default:x=w.cuW()
break}return x},
gaf6(){var x=new B.V(Date.now(),0,!1)
return A.a.b_(A.o.u(B.dg(x)),2,"0")+":"+A.a.b_(A.o.u(B.fP(x)),2,"0")},
ayN(d,e,f,g,h,i,j){var x,w,v=null,u=C.kw[d],t=this.d===d,s=u.d,r=B.ar(s,A.w,0.55)
r.toString
r=B.a([s,r],y.c)
s=B.n(h)
if(t)x=i
else x=A.L
x=B.L(x,A.r,t?2.5:0)
w=B.a([B.d(u.b,v,v,v,v,v,v,B.l(v,v,v,v,v,v,v,v,v,v,v,e,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],y.u)
if(g)w.push(new B.D(A.un,B.d(u.a,v,1,A.a2,v,v,v,A.VE,v,v,v),v))
return B.aA(v,B.p(v,B.x(w,A.m,v,A.ba,A.i,0,A.p),A.f,v,v,new B.o(v,v,x,s,v,new B.a9(A.aA,A.aF,A.x,r,v,v),A.n),v,f,v,v,v,v,v,j),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new D.eP_(this,d),v,v,v,v,v,v,!1,A.a4)},
b0N(d,e,f,g,h,i){return this.ayN(d,e,f,!1,g,h,i)},
cuW(){var x,w,v,u,t,s,r=this,q=null,p=r.a.e,o=y.u,n=B.A(B.a([C.fKS,A.ae,C.fCS,A.b3,C.c_8,A.ae,C.bVT,A.ae,B.d(r.gaf6(),q,q,q,q,q,q,C.aVI,q,q,q)],o),A.m,q,A.e,A.i,0,q,q),m=C.kw[r.d],l=B.d(m.a,q,q,q,q,q,q,A.lu,q,q,q)
m=B.d(m.c,q,1,A.a2,q,q,q,C.fue,q,q,q)
x=A.c.j(0.08)
w=B.a([],o)
for(v=0;v<2;++v){u=new B.aP(8,8)
w.push(B.p(q,B.X(C.ctF[v],A.ad,q,q,q,17),A.f,q,q,new B.o(A.bB,q,q,new B.bg(u,u,u,u),q,q,A.n),q,34,q,A.NP,q,q,q,34))}u=B.a([],o)
for(t=0;t<8;++t){s=r.d===t?1.12:1
u.push(new B.D(A.NP,new B.zc(r.ayN(t,14,44,!0,8,A.aJ,52),s,A.b6,A.fS,q,q),q))}w.push(B.E(B.cg(B.A(u,A.m,q,A.e,A.i,0,q,q),A.t,q,A.y,q,q,q,q,A.aL),1))
return B.aA(q,B.p(q,B.x(B.a([n,A.b3,new B.bL(A.a6,q,q,l,q),new B.bL(A.a6,q,q,m,q),A.an,B.p(q,B.A(w,A.m,q,A.e,A.i,0,q,q),A.f,q,q,new B.o(x,q,q,A.Xk,q,q,A.n),q,q,q,q,A.Of,q,q,q)],o),A.m,q,A.e,A.i,0,A.p),A.f,q,q,C.b6G,q,q,q,q,H.al4,q,q,q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,p,q,q,q,q,q,q,!1,A.a4)},
c3R(){var x=null,w=this.a.e,v=y.u
return B.aA(x,B.p(x,B.x(B.a([B.A(B.a([B.p(x,C.fR4,A.f,x,x,new B.o(A.hB,x,x,B.n(10),x,x,A.n),x,x,x,x,A.mR,x,x,x),A.bn,C.fJP,A.b3,B.d(this.gaf6(),x,x,x,x,x,x,A.Ez,x,x,x)],v),A.m,x,A.e,A.i,0,x,x),A.b3,new B.a5(x,62,B.hN(x,new D.eOV(this),8,x,x,A.aL,new D.eOW(),!1),x)],v),A.E,x,A.e,A.i,0,A.p),A.f,x,x,C.b6R,x,x,x,x,S.NV,x,x,x),A.y,!1,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,w,x,x,x,x,x,x,!1,A.a4)},
cAD(){var x,w,v,u,t=this,s=null,r=C.kw[t.d],q=t.a.e,p=y.u,o=B.a([B.p(s,C.f74,A.f,s,s,new B.o(A.dt,s,s,B.n(12),s,s,A.n),s,s,s,s,A.yM,s,s,s),A.ae],p)
for(x=0;x<3;++x){w=C.dnx[x]
v=w==="Apps"?A.c:A.aD
o.push(new B.D(A.iK,B.d(w,s,s,s,s,s,s,new B.G(!0,v,s,s,s,s,9.5,A.V,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s),s,s,s),s))}o.push(A.b3)
o.push(B.d(t.gaf6(),s,s,s,s,s,s,C.ftD,s,s,s))
o=B.A(o,A.m,s,A.e,A.i,0,s,s)
v=r.d
u=B.ar(v,A.w,0.7)
u.toString
u=B.a([v,u],y.c)
v=B.n(10)
return B.aA(s,B.p(s,B.x(B.a([o,A.fK,B.E(B.A(B.a([B.E(B.p(s,B.x(B.a([B.d(r.b,s,s,s,s,s,s,A.pO,s,s,s),B.d(r.a,s,s,s,s,s,s,A.nT,s,s,s),B.d(r.c,s,2,A.a2,s,s,s,C.fAb,s,s,s),A.cU,B.aA(s,B.p(s,C.fGz,A.f,s,s,new B.o(A.c,s,s,B.n(10),s,s,A.n),s,s,s,s,A.yM,s,s,s),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new D.eOX(t),s,s,s,s,s,s,!1,A.a4)],p),A.E,s,A.mn,A.i,0,A.p),A.f,s,s,new B.o(s,s,s,v,s,new B.a9(A.a6,A.a9,A.x,u,s,s),A.n),s,s,s,s,A.cl,s,s,s),5),A.ae,B.E(B.il(!0,s,s,A.y,C.fec,new D.eOY(t),8,A.ag,s,A.ai,!1),6)],p),A.m,s,A.e,A.i,0,s,s),1)],p),A.E,s,A.e,A.i,0,A.p),A.f,C.bre,s,s,s,s,s,s,A.ha,s,s,s),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,q,s,s,s,s,s,s,!1,A.a4)},
cbf(){var x,w,v,u,t=this,s=null,r=t.a.e,q=y.u,p=B.A(B.a([C.c_K,A.r2,C.fXb,A.b3,B.d(t.gaf6(),s,s,s,s,s,s,A.EB,s,s,s)],q),A.m,s,A.e,A.i,0,s,s),o=B.a([],q)
for(x=0;x<8;++x){w=t.d===x
v=w?6:0
u=w?C.dtm:A.Sd
w=w?1.18:1
o.push(new B.D(A.f2,B.cV(s,new B.zc(t.b0N(x,20,44,12,A.c,44),w,A.b6,A.eJ,s,s),s,s,A.b6,new B.o(s,s,s,s,u,s,A.n),A.eJ,s,s,s,new B.Q(0,0,0,v),s,s,s,s),s))}return B.aA(s,B.p(s,B.x(B.a([p,A.b3,new B.a5(s,68,B.cg(B.A(o,A.dK,s,A.e,A.i,0,s,s),A.t,s,A.y,s,s,s,s,A.aL),s),A.aw,B.d(C.kw[t.d].a,s,s,s,s,s,s,A.oW,s,s,s)],q),A.m,s,A.e,A.i,0,A.p),A.f,s,s,C.b6I,s,s,s,s,C.a_M,s,s,s),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,r,s,s,s,s,s,s,!1,A.a4)},
bG7(){var x,w,v,u,t,s,r=this,q=null,p=r.a.e,o=C.kw[r.d],n=y.u
o=B.E(B.x(B.a([C.fG6,A.b3,B.d(o.b,q,q,q,q,q,q,A.n9,q,q,q),A.aw,B.d(o.a,q,q,q,q,q,q,C.flG,q,q,q),A.bG,B.d(o.c,q,q,q,q,q,q,C.fAu,q,q,q),A.an,B.aA(q,B.p(q,C.fZj,A.f,q,q,C.b7d,q,q,q,q,C.bzK,q,q,q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new D.eOT(r),q,q,q,q,q,q,!1,A.a4),A.b3],n),A.E,q,A.e,A.i,0,A.p),4)
x=B.p(q,q,A.f,C.boZ,q,q,q,q,q,A.f1,q,q,q,0.6)
w=B.a([],n)
for(v=0;v<8;++v){u=C.kw[v]
t=r.d===v
s=t?C.tY:C.afL
t=t?12:10.5
w.push(B.aA(q,new B.D(A.wb,B.d(u.a,q,q,q,q,q,q,new B.G(!0,s,q,"serif",q,q,t,A.k1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q),q,q,q),q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new D.eOU(r,v),q,q,q,q,q,q,!1,A.a4))}return B.aA(q,B.p(q,B.A(B.a([o,x,B.E(B.cj(w,q,q,q,q,q,A.ai,!1),3)],n),A.m,q,A.e,A.i,0,q,q),A.f,C.buR,q,q,q,q,q,q,A.GN,q,q,q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,p,q,q,q,q,q,q,!1,A.a4)}}
var z=a.updateTypes(["~()","Xg(Z,bu<I>,bu<I>)","~(F)"])
D.fAK.prototype={
$1(d){var x=null,w=B.fv(x,A.ct,x,1,x,B.cQ(x,x,x,x,x,x,x,x,x,B.l(x,x,this.b,x,x,x,x,x,x,x,x,d,x,x,A.u,x,x,!0,x,x,x,x,x,x,x,x),this.a),A.a5,A.bW,x,A.dD,A.bX)
w.ef()
return w},
$S:435}
D.fAE.prototype={
$1(d){return Math.min(this.a*0.085,this.b*0.44/(d.length*0.62))},
$S:447}
D.fUm.prototype={
$1(d){var x=this.b,w=B.kD(this.a,x,d)
w.toString
x=B.kD(x,this.c,d)
x.toString
x=B.kD(w,x,d)
x.toString
return x},
$S:1996}
D.fn2.prototype={
$2(d,e){return A.k.F((this.a-d)/e,0,1)},
$S:80}
D.fn_.prototype={
$1(d){return A.dy.aE(0,d)},
$S:5}
D.fn1.prototype={
$2(d,e){var x=this.b
return new B.q(this.a.a+d*x,this.c.b-e*x)},
$S:351}
D.fn0.prototype={
$5(d,e,f,g,h){var x,w,v,u=this.a.$2(h,0.5)
if(u<=0)return
x=this.b
w=x.c
J.bq(w.save())
w.translate(f.a,f.b)
x.bV(0,A.k.F(A.lz.aE(0,u),0.01,1.3))
v=this.c
E.fUn(x,A.I,g,d,v,v>4.5?0.6:0)
D.hCH(x,new B.q(0,g*1.42),g,e)
w.restore()},
$S:598}
D.frD.prototype={
$1(d){var x=this,w=null,v=x.c?A.u:A.a8
v=B.fv(w,A.ct,w,1,w,B.cQ(w,w,w,w,w,w,w,w,w,B.l(w,w,x.b,w,w,w,w,w,w,w,w,d,w,w,v,w,w,!0,w,x.d,w,w,w,w,w,w),x.a),A.a5,A.bW,w,A.dD,A.bX)
v.ef()
return v},
$S:435}
D.fpp.prototype={
$1(d){var x=this,w=null,v=x.c?A.u:A.V
v=B.fv(w,A.ct,w,1,w,B.cQ(w,w,w,w,w,w,w,w,w,B.l(w,w,x.b,w,w,w,w,w,w,w,w,d,w,w,v,w,w,!0,w,x.d,w,w,w,w,w,w),x.a),A.a5,A.bW,w,A.dD,A.bX)
v.ef()
return v},
$S:435}
D.fB5.prototype={
$2(d,e){return A.k.F((this.a-d)/e,0,1)},
$S:80}
D.fB1.prototype={
$1(d){return A.dy.aE(0,d)},
$S:5}
D.fB4.prototype={
$2(d,e){var x=this.b
return new B.q(this.a+d*x,e*x)},
$S:351}
D.fB2.prototype={
$5(d,e,f,g,h){var x,w,v,u=this,t=u.a.$2(h,0.6)
if(t<=0)return
x=u.b
w=x.c
J.bq(w.save())
w.translate(f.a,f.b)
x.bV(0,A.k.F(A.lz.aE(0,t),0.01,1.3))
v=u.c
E.fUn(x,A.I,g,d,v,u.d>9.5?0.5+0.3*Math.sin(v*3+d):0)
D.hCH(x,new B.q(0,g*1.42),g,e)
w.restore()},
$S:598}
D.fB3.prototype={
$3(d,e,f){var x,w,v,u,t=this.a.$2(f,0.5)
if(t<=0)return
x=A.k.F(A.lz.aE(0,t),0.01,1.3)*(1+0.07*Math.sin(this.b*6))
w=this.c
v=e*x
$.S()
u=B.K()
u.r=A.bF.gp(0)
w.N(d,v,u)
u=B.K()
u.b=A.aa
u.c=2
u.r=A.c.gp(0)
w.N(d,v,u)
D.H1(w,"\u2665",d.aK(0,new B.q(e*0.5*x,e*0.62*x)),e*1.3*x,A.c,A.bk,0,null)},
$S:398}
D.fB6.prototype={
$2(d,e){var x,w,v=this.a,u=v.a
v=v.c-u
u+=v*0.08
x=this.b
w=x*d
return new B.a2(u,w,u+v*0.84,w+x*e)},
$S:1998}
D.h1z.prototype={
$3(d,e,f){var x=this
return new D.Xg(x.d,x.e,x.a,x.c,x.b,null)},
$C:"$3",
$R:3,
$S:z+1}
D.h1A.prototype={
$4(d,e,f,g){var x=y.g
return new B.d_(e,!1,B.is(A.A,g,null,new B.bf(B.cJ(A.cw,e,null),new B.bp(0.85,1,x),x.k("bf<bN.T>"))),null)},
$C:"$4",
$R:4,
$S:34}
D.eP4.prototype={
$0(){var x=this.a
if(x.c!=null&&!x.r)x.m(new D.eP3(x))},
$S:0}
D.eP3.prototype={
$0(){return this.a.y=!1},
$S:0}
D.eP2.prototype={
$0(){var x,w=this.a
w.f=-1
w.e=A.o.E(w.gDP()+this.b,10)
if(w.gDP()<0)w.e=w.gDP()+10
x=w.gaf5().y
x=x==null?null:A.o.aq(x.a,1000)
w.x=x==null?0:x
w.ak7()},
$S:0}
D.eP5.prototype={
$0(){var x=this.a
x.f=this.b
x.r=!1
x.ak7()},
$S:0}
D.ePe.prototype={
$0(){var x=this.a
return x.m(x.gcFK())},
$S:0}
D.ePd.prototype={
$2(d,e){var x=null,w=this.a,v=w.gaf5().y,u=v==null?x:A.o.aq(v.a,1000),t=(u==null?0:u)/1000,s=w.x===0&&w.a.f?t:99
return B.b4(x,x,x,new D.bwJ(w.gDP(),w.f,t,s,x),A.fJ)},
$S:62}
D.ePc.prototype={
$5$color$on(d,e,f,g,h){var x=null,w=h?g.j(0.28):A.c.j(0.08),v=B.n(14),u=B.L(h?g:A.aW,A.r,1)
return B.aA(x,B.p(x,B.x(B.a([B.X(d,g,x,x,x,20),A.vu,B.d(e,x,x,x,x,x,x,B.l(x,x,g,x,x,x,x,x,x,x,x,9.5,x,x,A.H,x,x,!0,x,x,x,x,x,x,x,x),x,x,x)],y.u),A.m,x,A.e,A.O,0,A.p),A.f,x,x,new B.o(w,x,u,v,x,x,A.n),x,x,x,A.jE,A.kT,x,x,56),A.y,!1,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,f,x,x,x,x,x,x,!1,A.a4)},
$3(d,e,f){return this.$5$color$on(d,e,f,A.c,!1)},
$4$color(d,e,f,g){return this.$5$color$on(d,e,f,g,!1)},
$S:1999}
D.eP7.prototype={
$0(){return this.a.ayM(-1)},
$S:0}
D.eP8.prototype={
$0(){return this.a.ayM(1)},
$S:0}
D.eP9.prototype={
$0(){return this.a.ayM(0)},
$S:0}
D.ePa.prototype={
$0(){var x=this.a
return x.m(new D.eP6(x))},
$S:0}
D.eP6.prototype={
$0(){var x=this.a
x.r=!x.r
x.ak7()},
$S:0}
D.ePb.prototype={
$0(){return this.a.b2E(0)},
$S:0}
D.eP1.prototype={
$0(){var x=this.a
return x.m(new D.eP0(x))},
$S:0}
D.eP0.prototype={
$0(){return this.a.r=!1},
$S:0}
D.eOZ.prototype={
$0(){return this.a.d=this.b},
$S:0}
D.eP_.prototype={
$0(){return this.a.b0M(this.b)},
$S:0}
D.eOW.prototype={
$2(d,e){return A.bn},
$S:37}
D.eOV.prototype={
$2(d,e){var x=null,w=this.a,v=w.d===e?1.1:1
v=B.a([B.vS(w.b0N(e,18,46,6,A.c,80),A.b6,A.fS,v)],y.u)
if(w.d===e)v.push(new B.D(A.un,B.d(C.kw[e].a,x,x,x,x,x,x,C.fyE,x,x,x),x))
return B.x(v,A.m,x,A.e,A.O,0,A.p)},
$S:652}
D.eOX.prototype={
$0(){var x=this.a
return x.a.a6x(0,x.d)},
$S:0}
D.eOY.prototype={
$2(d,e){return this.a.ayN(e,15,1/0,!0,8,A.c,1/0)},
$S:41}
D.eOT.prototype={
$0(){var x=this.a
return x.a.a6x(0,x.d)},
$S:0}
D.eOU.prototype={
$0(){return this.a.b0M(this.b)},
$S:0};(function aliases(){var x=D.aNQ.prototype
x.bzA=x.t})();(function installTearOffs(){var x=a._instance_0u,w=a._instance_1u
var v
x(v=D.aFZ.prototype,"gb0L","cbd",0)
x(v,"gcFK","ak7",0)
w(v,"gchu","b2E",2)})();(function inheritance(){var x=a.mixinHard,w=a.inheritMany,v=a.inherit
w(B.hu,[D.fAK,D.fAE,D.fUm,D.fn_,D.fn0,D.frD,D.fpp,D.fB1,D.fB2,D.fB3,D.h1z,D.h1A,D.ePc])
w(B.jt,[D.fn2,D.fn1,D.fB5,D.fB4,D.fB6,D.ePd,D.eOW,D.eOV,D.eOY])
w(B.aF,[D.wN,D.wg,D.yb])
w(B.af,[D.Xg,D.at7])
w(B.ah,[D.aNQ,D.bmG])
v(D.aFZ,D.aNQ)
w(B.iG,[D.eP4,D.eP3,D.eP2,D.eP5,D.ePe,D.eP7,D.eP8,D.eP9,D.ePa,D.eP6,D.ePb,D.eP1,D.eP0,D.eOZ,D.eP_,D.eOX,D.eOT,D.eOU])
v(D.bwJ,B.mg)
x(D.aNQ,B.cd)})()
B.j0(b.typeUniverse,JSON.parse('{"Xg":{"af":[],"v":[]},"aFZ":{"ah":["Xg"]},"bwJ":{"aC":[]},"at7":{"af":[],"v":[]},"bmG":{"ah":["at7"]},"O1":{"af":[],"v":[]}}'))
var y=(function rtii(){var x=B.as
return{C:x("O<SI>"),r:x("O<ac>"),c:x("O<u>"),a:x("O<fT>"),s:x("O<+(I,I,I)>"),x:x("O<m>"),u:x("O<v>"),h:x("O<I>"),g:x("bp<I>"),e:x("F")}})();(function constants(){var x=a.makeConstList
C.ag2=new B.u(1,0.0196078431372549,0.03137254901960784,0.058823529411764705,A.q)
C.bsY=new B.u(1,0.043137254901960784,0.10196078431372549,0.2,A.q)
C.dk8=x([C.ag2,C.bsY],y.c)
C.c8b=new B.a9(A.b1,A.b7,A.x,C.dk8,null,null)
C.b6G=new B.o(null,null,null,null,null,C.c8b,A.n)
C.bqA=new B.u(1,0.42745098039215684,0.47843137254901963,0.5764705882352941,A.q)
C.bfi=new B.u(1,0.16862745098039217,0.1803921568627451,0.26666666666666666,A.q)
C.bgu=new B.u(1,0.4823529411764706,0.29411764705882354,0.41568627450980394,A.q)
C.dwE=x([C.bqA,C.bfi,C.bgu],y.c)
C.c6v=new B.a9(A.aA,A.aF,A.x,C.dwE,null,null)
C.b6I=new B.o(null,null,null,null,null,C.c6v,A.n)
C.b1V=new B.d9(0.5,-0.6)
C.bui=new B.u(1,0.22745098039215686,0.054901960784313725,0.10980392156862745,A.q)
C.dfc=x([C.bui,A.em],y.c)
C.exU=new B.c_(C.b1V,1.3,A.x,null,0,C.dfc,null,null)
C.b6R=new B.o(null,null,null,null,null,C.exU,A.n)
C.tY=new B.u(1,0.8392156862745098,0.7176470588235294,0.4823529411764706,A.q)
C.b4Y=new B.ay(C.tY,1,A.r,-1)
C.b5a=new B.bG(A.a1,A.a1,C.b4Y,A.a1)
C.b7d=new B.o(null,null,C.b5a,null,null,null,A.n)
C.afg=new B.u(0.9490196078431372,0.06666666666666667,0.07450980392156863,0.09411764705882353,A.q)
C.beP=new B.u(1,0.16470588235294117,0.16470588235294117,0.17647058823529413,A.q)
C.Y0=new B.u(1,0.16862745098039217,0.1843137254901961,0.21176470588235294,A.q)
C.beT=new B.u(1,0.00784313725490196,0.01568627450980392,0.03529411764705882,A.q)
C.afL=new B.u(1,0.6588235294117647,0.6235294117647059,0.5647058823529412,A.q)
C.Y9=new B.u(1,0.24705882352941178,0.5607843137254902,0.30196078431372547,A.q)
C.Fz=new B.u(1,0.7215686274509804,0.6980392156862745,0.6549019607843137,A.q)
C.agu=new B.u(1,0.8784313725490196,0.6745098039215687,0.4117647058823529,A.q)
C.Mt=new B.u(1,1,0.23137254901960785,0.12156862745098039,A.q)
C.agQ=new B.u(1,0.00784313725490196,0.011764705882352941,0.0392156862745098,A.q)
C.y7=new B.u(1,0.06666666666666667,0.0784313725490196,0.09411764705882353,A.q)
C.ya=new B.u(1,0.054901960784313725,0.07058823529411765,0.09411764705882353,A.q)
C.boZ=new B.u(1,0.2901960784313726,0.26666666666666666,0.23529411764705882,A.q)
C.iD=new B.u(1,0.043137254901960784,0.12156862745098039,0.29411764705882354,A.q)
C.mI=new B.u(1,0.09019607843137255,0.09019607843137255,0.10980392156862745,A.q)
C.bra=new B.u(1,0.1843137254901961,0.43529411764705883,0.23137254901960785,A.q)
C.bre=new B.u(1,0.08627450980392157,0.09411764705882353,0.10980392156862745,A.q)
C.brN=new B.u(1,0.24705882352941178,0.3843137254901961,0.07058823529411765,A.q)
C.ZK=new B.u(1,1,0.9529411764705882,0.6274509803921569,A.q)
C.ajU=new B.u(1,0.8392156862745098,0.7254901960784313,0.5490196078431373,A.q)
C.buR=new B.u(1,0.10196078431372549,0.09019607843137255,0.0784313725490196,A.q)
C.bzK=new B.Q(0,0,0,1)
C.bAB=new B.Q(10,10,10,0)
C.a_M=new B.Q(10,6,10,8)
C.alk=new B.Q(14,10,10,10)
C.bHt=new B.hl(A.G,1.2)
C.a29=new B.a0(62970,"MaterialIcons",!1)
C.apX=new B.a0(983316,"MaterialIcons",!1)
C.pp=new B.a0(983617,"MaterialIcons",!1)
C.bVT=new B.ae(A.CS,13,A.ad,null,null,null)
C.c_8=new B.ae(A.eW,13,A.ad,null,null,null)
C.bRu=new B.a0(983768,"MaterialIcons",!1)
C.c_K=new B.ae(C.bRu,13,A.c,null,null,null)
C.cNE=x([A.aJ,A.jB,A.q7],y.c)
C.c5j=new B.a9(A.b1,A.b7,A.x,C.cNE,null,null)
C.c5p=new B.a9(A.b1,A.b7,A.x,L.RM,null,null)
C.d8a=x([A.fj,A.dJ,A.cJ],y.c)
C.c5B=new B.a9(A.b1,A.b7,A.x,C.d8a,null,null)
C.d6l=x([A.dE,A.ax],y.c)
C.c6i=new B.a9(A.b1,A.b7,A.x,C.d6l,null,null)
C.Mi=new B.u(1,0.11764705882352941,0.30980392156862746,0.6392156862745098,A.q)
C.cN9=x([C.iD,C.Mi,A.ay,A.bN],y.c)
C.dnO=x([0,0.42,0.8,1],y.h)
C.c6x=new B.a9(A.b1,A.b7,A.x,C.cN9,C.dnO,null)
C.dvH=x([A.bP,A.c,A.bM],y.c)
C.c6z=new B.a9(A.a6,A.a9,A.x,C.dvH,null,null)
C.dwk=x([A.ho,A.fY],y.c)
C.c7o=new B.a9(A.b1,A.b7,A.x,C.dwk,null,null)
C.dn3=x([A.dw,A.pb],y.c)
C.c7v=new B.a9(A.b1,A.b7,A.x,C.dn3,null,null)
C.c8w=new B.a9(A.b1,A.b7,A.x,N.a4o,null,null)
C.di3=x([A.aO,A.am],y.c)
C.c8V=new B.a9(A.b1,A.b7,A.x,C.di3,null,null)
C.c9S=x(["Add every person","Link mums, dads, kids","Keep it for ever"],y.x)
C.Uo=new B.y(2,3)
C.Up=new B.y(3,4)
C.ctF=x([A.lM,A.z4],B.as("O<a0>"))
C.ctS=x([-0.05,0.05],y.h)
C.elk=new B.q(26,-8)
C.ema=new B.q(52,0)
C.elj=new B.q(26,8)
C.cuf=x([A.I,C.elk,C.ema,C.elj],B.as("O<q>"))
C.ayB=x([A.c1,A.aJ,A.dE,A.b9,A.cJ],y.c)
C.f1h=new B.b5(-0.2,0.46,0.12)
C.eZo=new B.b5(0.2,0.46,0.12)
C.f_e=new B.b5(0,0.52,0.15)
C.eYt=new B.b5(0,0.7,0.1)
C.cNT=x([C.f1h,C.eZo,C.f_e,C.eYt],y.s)
C.cZF=x([A.eQ,A.bN,A.N2,A.et],y.c)
C.azB=x([A.cJ,A.br,A.c1,A.b9],y.c)
C.eFA=new B.y("Chairs",120)
C.eFD=new B.y("Cloth",80)
C.eFX=new B.y("Delivery",25)
C.azY=x([C.eFA,C.eFD,C.eFX],B.as("O<+(m,F)>"))
C.eeA=new D.yb("NGMY Tree Story","A family grows, one branch at a time")
C.eev=new D.yb("Coin Hero","A little coin saves up and wins the day")
C.eeD=new D.yb("Space Voyage","The NGMY rocket explores the stars")
C.eeu=new D.yb("Ocean Friends","Fish, bubbles and a friendly whale")
C.eew=new D.yb("Rainy Village","Storm clouds, then a rainbow")
C.eey=new D.yb("Spark Adventure","Follow a spark round a circuit")
C.eex=new D.yb("Fireworks Night","Colour bursts over the city")
C.eeC=new D.yb("Little Train","A train rolls past the hills")
C.eez=new D.yb("Robot Disco","A robot dances to the beat")
C.eeB=new D.yb("Garden Time","Flowers grow and butterflies fly")
C.RS=x([C.eeA,C.eev,C.eeD,C.eeu,C.eew,C.eey,C.eex,C.eeC,C.eez,C.eeB],B.as("O<yb>"))
C.aAH=x([A.c1,A.br,A.ax,A.bs,A.cJ],y.c)
C.dd1=x([A.ho,A.pb],y.c)
C.dd3=x([A.bm,A.ay,A.cV],y.c)
C.dG3=new D.wg("NGMY Ads","\ud83d\udce2","Every NGMY promotion, as cartoons",A.c1,-1)
C.dFZ=new D.wg("Civic Registry","\ud83e\udeaa","Enroll your family in your community",A.d5,0)
C.dG4=new D.wg("Jobs","\ud83d\udcbc","Find work and get hired",A.ay,1)
C.dG9=new D.wg("NGMY Store","\ud83d\udecd\ufe0f","African food and traditions",A.fx,2)
C.dGa=new D.wg("Kiswahili","\ud83d\udde3\ufe0f","Learn Swahili and English",A.bQ,3)
C.dG7=new D.wg("Doc Scanner","\ud83d\udcc4","Scan, save and share",A.ch,4)
C.dG_=new D.wg("Invoices","\ud83e\uddfe","Professional invoices",A.bF,5)
C.dFX=new D.wg("Calendar","\ud83d\udcc5","This month, today lit up",A.ax,-2)
C.kw=x([C.dG3,C.dFZ,C.dG4,C.dG9,C.dGa,C.dG7,C.dG_,C.dFX],B.as("O<wg>"))
C.eMW=new B.y("Jambo! Habari yako?","Nzuri, asante!")
C.eG5=new B.y("Jina lako nani?","Jina langu ni Amina.")
C.eGP=new B.y("Karibu nyumbani!","Asante sana!")
C.eMV=new B.y("Naenda shule leo.","I am going to school.")
C.eO1=new B.y("Ninapenda kujifunza!","I love to learn!")
C.eXA=new B.y("Maji, tafadhali.","Water, please.")
C.eKP=new B.y("Rafiki yangu mpendwa","My dear friend")
C.ePB=new B.y("Tuonane kesho!","See you tomorrow!")
C.eQA=new B.y("Pole sana, rafiki.","I am so sorry, friend.")
C.eMU=new B.y("Hongera! Umefaulu!","Congratulations! You passed!")
C.eI4=new B.y("Mimi ni mwanafunzi.","I am a student.")
C.eCw=new B.y("Chakula kitamu sana!","The food is so delicious!")
C.eX8=new B.y("Safari njema!","Have a good trip!")
C.eyy=new B.y("Unaongea Kiswahili vizuri!","You speak Swahili well!")
C.aAX=x([C.eMW,C.eG5,C.eGP,C.eMV,C.eO1,C.eXA,C.eKP,C.ePB,C.eQA,C.eMU,C.eI4,C.eCw,C.eX8,C.eyy],B.as("O<+(m,m)>"))
C.f05=new B.b5(-0.3,0.32,0.2)
C.eYC=new B.b5(-0.08,0.17,0.22)
C.eYD=new B.b5(0.14,0.14,0.2)
C.f_m=new B.b5(0.34,0.3,0.2)
C.f1L=new B.b5(0,0.32,0.26)
C.f_3=new B.b5(-0.42,0.46,0.15)
C.f1G=new B.b5(0.42,0.46,0.15)
C.f0m=new B.b5(0,0.07,0.15)
C.aAY=x([C.f05,C.eYC,C.eYD,C.f_m,C.f1L,C.f_3,C.f1G,C.f0m],y.s)
C.hqb=new D.wN("NGMY Civic Registry","Enroll your family. Stay counted and helped together.",A.d9,A.aJ)
C.hqp=new D.wN("NGMY Jobs","Find work. Get hired. Get paid.",A.d2,A.aU)
C.hqm=new D.wN("NGMY Store","African food and traditions. Support our Congolese and African community.",A.kq,A.br)
C.hqh=new D.wN("Kiswahili School","Learn Swahili and English, step by step.",A.cS,A.mK)
C.hqe=new D.wN("Document Scanner","Scan, save and share your papers.",A.qg,A.hk)
C.hqc=new D.wN("Invoice Creator","Make professional invoices in minutes.",A.q0,A.o1)
C.hq8=new D.wN("Family Book and Tree","Write your family story. Grow your tree.",A.iZ,A.M4)
C.hqa=new D.wN("NGMY Wallet","Save, send and earn coins.",A.q9,A.dE)
C.hqd=new D.wN("Vault Games","Play, win and learn.",A.dH,A.bb)
C.hqn=new D.wN("Electronics Lab","Build real circuits and learn.",A.eR,A.b0)
C.hqi=new D.wN("NGMY Helper and Advisors","Friendly help, any time.",A.l9,A.cJ)
C.dgQ=x([C.hqb,C.hqp,C.hqm,C.hqh,C.hqe,C.hqc,C.hq8,C.hqa,C.hqd,C.hqn,C.hqi],B.as("O<wN>"))
C.dn4=x([A.dH,A.fj],y.c)
C.dnx=x(["For you","Apps","Library"],y.x)
C.aBU=x([A.bC,A.br,A.cV,A.av],y.c)
C.aBZ=x([-16,16],y.h)
C.St=x([-22,22],y.h)
C.Su=x([-24,24],y.h)
C.a5N=x([-5,5],y.h)
C.aC5=x([-8,8],y.h)
C.dqQ=x([A.aM,A.am],y.c)
C.b9b=new B.ac(0,A.G,A.aT,A.du,14)
C.dtm=x([C.b9b],y.r)
C.dva=x([A.ax,A.cf,A.br,A.bg,A.d5,A.b8],y.c)
C.dwd=x(["M","T","W","T","F","S","S"],y.x)
C.dxt=x([A.c,A.o4],y.c)
C.cuj=x([A.eQ,A.ep,A.jU],y.c)
C.exz=new B.c_(I.xF,0.5,A.x,null,0,C.cuj,null,null)
C.cKs=x([A.m3,A.m2],y.c)
C.exB=new B.c_(R.acZ,0.5,A.x,null,0,C.cKs,null,null)
C.c0e=new B.ae(A.eW,11,A.ad,null,null,null)
C.fws=new B.G(!0,A.aS,null,null,null,null,9,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.fU6=new B.B("Search",null,C.fws,null,null,null,null,null,null,null,null,null)
C.cOT=x([C.c0e,A.r2,C.fU6],y.u)
C.f74=new B.c6(A.aL,A.e,A.i,A.m,null,A.p,null,0,C.cOT,null)
C.fec=new B.hG(3,5,5,1.35,null)
C.btA=new B.u(1,0.9450980392156862,0.9098039215686274,0.8470588235294118,A.q)
C.flG=new B.G(!0,C.btA,null,"serif",null,null,15,A.k1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.ftD=new B.G(!0,A.ad,null,null,null,null,9.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.fue=new B.G(!0,A.aS,null,null,null,null,9.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.aaS=new B.G(!0,A.ad,null,null,null,null,12.5,null,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.aVI=new B.G(!0,A.ad,null,null,null,null,10,A.V,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.fyE=new B.G(!0,A.c,null,null,null,null,8.5,A.V,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.fAb=new B.G(!0,A.ad,null,null,null,null,8.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.fAu=new B.G(!0,C.afL,null,null,null,null,8.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.fqX=new B.G(!0,A.aD,null,null,null,null,9.5,A.V,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.fCS=new B.B("NGMY Apps",null,C.fqX,null,null,null,null,null,null,null,null,null)
C.fno=new B.G(!0,C.tY,null,null,null,null,8,A.a8,null,3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.fG6=new B.B("BANG & OLUFSEN",null,C.fno,null,null,null,null,null,null,null,null,null)
C.ftl=new B.G(!0,A.w,null,null,null,null,9,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.fGz=new B.B("Open",null,C.ftl,null,null,null,null,null,null,null,null,null)
C.fJP=new B.B("Home",null,C.aVI,null,null,null,null,null,null,null,null,null)
C.fKS=new B.B("SAMSUNG",null,A.aVo,null,null,null,null,null,null,null,null,null)
C.fR4=new B.B("LG",null,A.xh,null,null,null,null,null,null,null,null,null)
C.fXb=new B.B("tv",null,A.r6,null,null,null,null,null,null,null,null,null)
C.fqR=new B.G(!0,C.tY,null,null,null,null,8.5,null,null,2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.fZj=new B.B("OPEN",null,C.fqR,null,null,null,null,null,null,null,null,null)})()};
(a=>{a["XSEBwLoZECzzexU3s+AicZiGo88="]=a.current})($__dart_deferred_initializers__);