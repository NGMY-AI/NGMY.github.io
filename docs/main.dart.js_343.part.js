((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,A,G,I,H,K,L,M,N,C={
rg(d,e,f,g,h,i){var x=new C.fCw(e,h,!0),w=x.$1(g),v=w.b.c
if(v>i&&v>0)w=x.$1(Math.max(2,g*i/v))
x=w.b
v=x.c
x=x.a.c
w.a5(d,f.aK(0,new B.o(v/2,x.gba(x)/2)))},
ahl(d,e,f,g,h,i){var x,w,v,u,t,s,r,q=null
if(h<=0)return
x=d.c
J.bo(x.save())
x.translate(e.a,e.b)
d.bU(0,A.i.D(A.l9.aA(0,A.i.D(h,0,1)),0.01,1.3))
w=B.fq(q,A.ct,q,q,q,B.cQ(q,q,q,q,q,q,q,q,q,B.m(q,q,A.as,q,q,q,q,q,q,q,q,g,q,q,A.u,q,q,!0,q,q,q,q,q,q,q,q),f),A.a5,A.bX,q,A.dB,A.bY)
w.e5()
v=w.b
u=v.c
v=v.a.c
t=g*0.8
s=B.bn(B.bs(A.H,v.gba(v)+g*0.7,u+g*1.1),new B.aN(t,t))
t=$.R()
u=B.K()
u.r=i.gp(0)
d.an(s,u)
t=new B.aG(t.r,A.ai,q,q,B.a([],y.v))
u=-g
v=s.d
r=v-1
t.E(new B.aZ(u*0.3,r))
t.E(new B.aq(u*0.7,v+g*0.6))
t.E(new B.aq(g*0.2,r))
t.E(new B.bu())
r=B.K()
r.r=i.gp(0)
d.af(t,r)
r=w.b
t=r.c
r=r.a.c
w.a5(d,new B.o(-t/2,-r.gba(r)/2))
x.restore()},
hcD(d,e,f,g){var x,w=A.i.D(Math.abs(Math.cos(g)),0.15,1),v=f*2,u=v*w,t=B.bs(e,v,u)
$.R()
x=B.K()
x.r=A.bj.gp(0)
d.bZ(t,x)
d.bZ(B.bs(e,v,u),E.z8(A.ug,f*0.18))
if(w>0.5)C.rg(d,"$",e,f*1.2,A.ug,9999)},
i6X(d,e,f,g){var x,w,v,u,t,s,r,q,p,o,n,m,l=new B.e5()
l.d_(4)
for(x=e.a,w=f-g,v=e.b,u=d.c,t=f*3,s=v*0.025,r=v*0.012,q=0;q<18;++q){p=l.ai()
o=A.i.F(w*(40+l.ai()*60)+l.ai()*v,v)
J.bo(u.save())
u.translate(p*x,o)
u.rotate((t+q)*180/3.141592653589793,0,0)
p=B.bs(A.H,r,s)
n=D.cLU[A.o.F(q,5)]
$.R()
m=new B.ao(A.O,A.M,A.R,A.S,A.Q)
m.r=n.gp(0)
d.aq(p,m)
u.restore()}},
iha(d,e,f,g){switch(A.o.F(f,11)){case 0:C.i6A(d,e,g)
break
case 1:C.i9O(d,e,g)
break
case 2:C.if6(d,e,g)
break
case 3:C.ifu(d,e,g)
break
case 4:C.iei(d,e,g)
break
case 5:C.i9u(d,e,g)
break
case 6:C.i5S(d,e,g)
break
case 7:C.igk(d,e,g)
break
case 8:C.i8r(d,e,g)
break
case 9:C.i9T(d,e,g)
break
default:C.i96(d,e,g)}},
i6A(a1,a2,a3){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a2.a,d=a2.b,a0=d*0.94
for(x=e*0.12,w=e*0.06,v=d*0.06,u=y.v,t=0;t<6;++t){s=e*(0.04+t*0.17)
r=d*(0.18+0.08*A.o.F(t,3))
q=a0-r
p=s+x
o=A.c.j(0.2)
n=$.R()
m=new B.ao(A.O,A.M,A.R,A.S,A.Q)
m.r=o.gp(0)
a1.aq(new B.a1(s,q,p,q+r),m)
m=B.a([],u)
n=new B.aG(n.r,A.ai,f,f,m)
m.push(new B.aZ(s-3,q))
n.ab()
o=new B.aq(s+w,q-v)
m.push(o)
l=n.f
if(l!=null)o.ak(l)
n.ab()
q=new B.aq(p+3,q)
m.push(q)
p=n.f
if(p!=null)q.ak(p)
n.ab()
q=new B.bu()
m.push(q)
p=n.f
if(p!=null)q.ak(p)
n.ab()
q=new B.ao(A.O,A.M,A.R,A.S,A.Q)
q.r=A.c.j(0.3).gp(0)
a1.af(n,q)}x=A.w.j(0.18)
$.R()
w=B.K()
w.r=x.gp(0)
a1.aq(new B.a1(0,a0,0+e,a0+(d-a0)),w)
k=Math.cos(a3*1.6)
j=Math.min(e*0.46,d*0.95)
i=j*0.62
w=a1.c
J.bo(w.save())
x=e*0.58
w.translate(x,d*0.45)
a1.pk(0,Math.max(0.08,Math.abs(k)),1)
v=i*0.1
h=B.bn(B.bs(A.H,i,j),new B.aN(v,v))
u=B.K()
q=k>=0
u.sav(new B.a8(A.a7,A.aa,A.x,q?D.dz4:D.doE,f,f).aJ(0,new B.a1(h.a,h.b,h.c,h.d)))
a1.an(h,u)
a1.an(h,E.z8(A.d7,2))
if(q){u=-j
q=u*0.28
p=-i
o=p*0.05
n=i*0.22
m=B.K()
m.r=F.mU.gp(0)
a1.N(new B.o(q,o),n,m)
n=B.bZ(new B.o(q,o),n)
o=B.K()
o.r=F.lE.gp(0)
a1.cC(n,3.141592653589793,3.141592653589793,!0,o)
for(u*=0.05,q=p*0.25,o=i*0.07,t=0;t<3;++t){n=q+t*i*0.16
n=B.bn(new B.a1(u,n,u+j*(0.42-t*0.06),n+o),A.hT)
m=new B.ao(A.O,A.M,A.R,A.S,A.Q)
m.r=A.dl.gp(0)
a1.an(n,m)}C.rg(a1,"COMMUNITY ID",new B.o(0,p*0.4),v,A.d7,j*0.8)}else C.rg(a1,"\u2605 NGMY \u2605",A.H,i*0.16,A.c,j*0.8)
w.restore()
v=a3>2.6
if(v){t=A.i.D((a3-2.6)/0.35,0,1)
J.bo(w.save())
w.translate(x,d*0.52)
a1.hW(0,-0.25)
a1.bU(0,2.2-1.2*A.e0.aA(0,t))
g=B.bs(A.H,i*0.3,j*0.7)
a1.an(B.bn(g,A.hU),E.z8(A.cY.j(t),3))
C.rg(a1,"\u2713 REGISTERED",A.H,i*0.13,A.cY.j(t),(g.c-g.a)*0.9)
w.restore()}x=a3*5
w=Math.sin(x)
x=Math.sin(x)
v=v&&a3<4
E.Bn(a1,new B.o(e*0.2,a0),d*0.7,a3,!1,Math.abs(x)*d*0.015,0,A.cY,F.mU,v,(w+1)/2)
if(a3>3)C.i6X(a1,new B.av(e,d*0.9),a3,3)},
i9O(a4,a5,a6){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=a5.a,a1=a5.b,a2=a1*0.94,a3=A.w.j(0.2)
$.R()
x=B.K()
x.r=a3.gp(0)
a4.aq(new B.a1(0,a2,0+a0,a2+(a1-a2)),x)
w=a0*0.62
v=a0*0.3
u=a1*0.62
x=a2-u
a3=w+v
t=B.K()
t.r=A.br.gp(0)
a4.aq(new B.a1(w,x,a3,x+u),t)
for(t=a6*1.5,s=v*0.2,r=u*0.1,q=0;q<4;++q)for(p=x+u*(0.1+q*0.17),o=p+r,n=0;n<3;++n){m=w+v*(0.12+n*0.3)
l=A.o.F(q+n+A.i.bh(t),3)===0?A.dA:A.aH.j(0.6)
$.R()
k=new B.ao(A.O,A.M,A.R,A.S,A.Q)
k.r=l.gp(0)
a4.aq(new B.a1(m,p,m+s,o),k)}t=w+v*0.38
s=u*0.16
r=a2-s
$.R()
p=B.K()
p.r=A.hd.gp(0)
a4.aq(new B.a1(t,r,t+v*0.24,r+s),p)
p=x-a1*0.09
s=a1*0.02
p=B.bn(new B.a1(w,p,a3,p+a1*0.08),new B.aN(s,s))
a3=B.K()
a3.r=A.av.gp(0)
a4.an(p,a3)
a3=a1*0.05
p=a1*0.06
C.rg(a4,"JOBS",new B.o(w+v/2,x-a3),p,A.c,9999)
j=A.i.D(a6/2.8,0,1)
x=a0*0.12
i=x+(w+v*0.3-x)*A.dE.aA(0,j)
x=j<1
h=x?Math.abs(Math.sin(a6*12))*a1*0.02:0
t=j>=1
r=t?(Math.sin(a6*6)+1)/2:0
E.Bn(a4,new B.o(i,a2),a1*0.6,a6,!1,h,2,A.b7,A.on,t,r)
if(x){x=B.bn(B.bs(new B.o(i-a1*0.12,a2-a1*0.17-h),a1*0.075,a1*0.1),A.hT)
r=B.K()
r.r=A.hd.gp(0)
a4.an(x,r)}if(t){x=a6-2.8
C.ahl(a4,new B.o(i+a3,a2-a1*0.78),"Hired! \ud83c\udf89",a1*0.07,x/0.4,A.c)
for(a3=x*0.8,x=a2-a1*0.5,t=a1*0.03,r=a6*8,g=0;g<6;++g){f=A.i.F(a3+g*0.17,1)
C.hcD(a4,new B.o(i+Math.sin(g*2.1)*a1*0.2,x-f*a1*0.25),t,r+g)}}a3=a0*0.04
x=a3+v
t=p+a1*0.3
s=B.bn(new B.a1(a3,p,x,t),new B.aN(s,s))
$.R()
r=B.K()
r.r=A.ic.gp(0)
a4.an(s,r)
for(x-=a3,s=a3+x*0.08,t-=p,r=x*0.84,o=t*0.24,a3+=x*0.14,x*=0.5,m=t*0.05,g=0;g<3;++g){l=(1-A.i.D((a6-g*0.5)/0.5,0,1))*a0*0.3
k=s+l
e=g*0.3
d=p+t*(0.08+e)
d=B.bn(new B.a1(k,d,k+r,d+o),A.hT)
k=new B.ao(A.O,A.M,A.R,A.S,A.Q)
k.r=A.c.gp(0)
a4.an(d,k)
l=a3+l
e=p+t*(0.14+e)
k=new B.ao(A.O,A.M,A.R,A.S,A.Q)
k.r=A.bL.gp(0)
a4.aq(new B.a1(l,e,l+x,e+m),k)}},
if6(d,a0,a1){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=a0.a,g=a0.b,f=g*0.94,e=A.hd.j(0.6)
$.R()
x=B.K()
x.r=e.gp(0)
d.aq(new B.a1(0,f,0+h,f+(g-f)),x)
w=h*0.3
v=h*0.66
for(e=v/12,x=g*0.14,u=e+1,t=x+g*0.12,s=0;s<12;++s){r=w+e*s
q=new B.ao(A.O,A.M,A.R,A.S,A.Q)
q.r=D.aCi[A.o.F(s,4)].gp(0)
d.aq(new B.a1(r,x,r+u,t),q)}for(u=g*0.2,t=g*0.1,r=u+t,s=0;s<12;++s){q=w+e*s
p=new B.ao(A.O,A.M,A.R,A.S,A.Q)
p.r=D.aCi[A.o.F(s,4)].gp(0)
d.cC(new B.a1(q,u,q+e,r),0,3.141592653589793,!0,p)}e=w+4
u=g*0.3
r=u+(f-u)
q=B.K()
q.r=A.hd.gp(0)
d.aq(new B.a1(e,u,e+4,r),q)
q=w+v
e=q-8
p=B.K()
p.r=A.hd.gp(0)
d.aq(new B.a1(e,u,e+4,r),p)
p=g*0.68
r=p+g*0.26
e=B.bn(new B.a1(w,p,q,r),A.iE)
u=B.K()
u.r=A.ic.gp(0)
d.an(e,u)
for(e=q-w,u=e/6,q=p+2,e/=12,r=q+(r-p-4),s=0;s<6;++s){o=w+u*s
n=new B.ao(A.O,A.M,A.R,A.S,A.Q)
n.r=((s&1)===0?A.bD:A.bj).j(0.9).gp(0)
d.aq(new B.a1(o,q,o+e,r),n)}e=w+v*0.2
u=g*0.62
m=new B.o(e,u)
r=g*0.17
q=g*0.03
o=B.bn(B.bs(m,g*0.11,r),new B.aN(q,q))
n=B.K()
n.r=A.cs.gp(0)
d.an(o,n)
n=-g
r=B.bs(m.a2(0,new B.o(0,n*0.05)),g*0.04,r)
o=B.K()
o.r=A.fq.gp(0)
d.bZ(r,o)
for(r=a1*0.8,n*=0.08,o=g*0.015,s=0;s<3;++s){l=A.i.F(r+s*0.33,1)
k=Math.sin(l*6+s)
j=l*g
i=new B.ao(A.O,A.M,A.R,A.S,A.Q)
i.r=A.c.j(0.6*(1-l)).gp(0)
d.N(new B.o(e+k*5,u+(n-j*0.14)),o+j*0.02,i)}for(e=w+v*0.5,r=g*0.018,s=0;s<5;++s){o=B.bs(new B.o(e,u),x,g*(0.1+s*0.01))
n=new B.ao(A.O,A.M,A.R,A.S,A.Q)
n.b=A.a9
n.c=r
n.r=A.bj.gp(0)
n.d=A.bu
d.cC(o,0.4+s*0.1,1.9,!1,n)}for(e=g*0.63,x=g*0.032,s=0;s<4;++s){u=A.o.F(s,2)
r=A.o.ar(s,2)
o=(s&1)===0?A.c6:A.w7
n=new B.ao(A.O,A.M,A.R,A.S,A.Q)
n.r=o.gp(0)
d.N(new B.o(w+v*(0.72+0.06*u)+s*g*0.02,e+r*g*0.035),x,n)}E.Bn(d,new B.o(h*0.14,f),p,a1,!1,0,1,A.bj,G.ahW,!0,(Math.sin(a1*5)+1)/2)
for(e=a1*0.45,x=h*0.16,u=g*0.45,r=g*0.06,s=0;s<5;++s){l=A.i.F(e+s*0.2,1)
C.rg(d,"\u2665",new B.o(x+Math.sin(l*5+s)*g*0.08+s*g*0.03,u-l*g*0.4),r,A.ay.j(1-l),9999)}e=w+v/2
x=g*0.08
q=B.bn(B.bs(new B.o(e,x),t,v*0.7),new B.aN(q,q))
$.R()
t=B.K()
t.r=A.as.gp(0)
d.an(q,t)
C.rg(d,"NGMY STORE \xb7 African food",new B.o(e,x),g*0.05,A.dA,v*0.64)},
ifu(d,e,f){var x,w,v,u,t,s,r,q=e.a,p=e.b,o=p*0.94,n=A.w.j(0.2)
$.R()
x=B.K()
x.r=n.gp(0)
d.aq(new B.a1(0,o,0+q,o+(p-o)),x)
w=A.o.F(A.o.ar(Date.now(),6000)*3+A.o.D(A.i.bh(f/2),0,2),14)
v=A.i.F(f,2)
u=v<1
x=p*0.68
n=u?(Math.sin(f*8)+1)/2:0
t=u?Math.abs(Math.sin(f*8))*p*0.01:0
E.Bn(d,new B.o(q*0.25,o),x,f,!1,t,2,A.cY,F.mU,u,n)
n=u?0:(Math.sin(f*8)+1)/2
t=u?0:Math.abs(Math.sin(f*8))*p*0.01
E.Bn(d,new B.o(q*0.75,o),x,f,!1,t,0,A.bl,D.agR,!u,n)
s=new C.fCq(p,q)
n=p*0.15
if(u){x=D.aBl[w].a
C.ahl(d,new B.o(q*0.27,n),x,s.$1(x),v/0.25,A.qp)}else{x=D.aBl[w].b
C.ahl(d,new B.o(q*0.73,n),x,s.$1(x),(v-1)/0.25,A.eG)}for(n=q*0.5,x=p*0.07,t=f*2,r=0;r<3;++r)C.rg(d,"\u2192",new B.o(n,p*(0.35+r*0.1)),x,A.c.j(0.3+0.5*A.i.F(t+r,1)),9999)},
iei(d,a0,a1){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=a0.a,g=a0.b,f=g*0.94,e=A.w.j(0.2)
$.R()
x=B.K()
x.r=e.gp(0)
d.aq(new B.a1(0,f,0+h,f+(g-f)),x)
x=h*0.3
w=B.bs(new B.o(h*0.6,g*0.45),g*0.7,Math.min(x,g*0.55))
e=B.bn(w,A.iE)
v=B.K()
v.r=A.c.gp(0)
d.an(e,v)
for(e=w.d,v=w.b,u=e-v,t=u*0.03,s=w.a,r=w.c,q=r-s,p=s+q*0.1,o=0;o<9;++o){n=v+u*(0.1+o*0.095)
m=A.o.F(o,3)===2?0.5:0.8
l=new B.ao(A.O,A.M,A.R,A.S,A.Q)
l.r=A.cv.gp(0)
d.aq(new B.a1(p,n,p+q*m,n+t),l)}k=A.i.D(a1/3,0,1)
j=v+u*k
if(k<1){e=s-8
u=j-2
q=e+(q+16)
t=B.K()
t.r=A.b5.gp(0)
d.aq(new B.a1(e,u,q,u+4),t)
t=A.b5.j(0.18)
u=B.K()
u.r=t.gp(0)
d.aq(new B.a1(e,v,q,v+(j-v)),u)}else{o=A.i.D((a1-3)/0.4,0,1)
u=A.l9.aA(0,o)
t=B.K()
t.r=A.bD.gp(0)
d.N(new B.o(r,v),g*0.08*u,t)
C.rg(d,"PDF",new B.o(r,v),g*0.045*o,A.c,9999)
v=g*0.06
C.rg(d,"\u2713 Saved",new B.o(w.gbw().a,e+v),v,A.c.j(o),9999)}e=a1*4
v=Math.sin(e)
E.Bn(d,new B.o(h*0.2,f),g*0.66,a1,!0,Math.abs(Math.sin(e))*g*0.01,0,A.cA,F.mU,!1,(v+1)/2)
i=B.bs(new B.o(x,g*0.3),g*0.18,g*0.1)
x=g*0.02
x=B.bn(i,new B.aN(x,x))
v=B.K()
v.r=A.as.gp(0)
d.an(x,v)
v=g*0.015
v=B.bn(i.cn(-3),new B.aN(v,v))
x=A.b5.j(0.35+0.3*Math.sin(a1*6))
e=B.K()
e.r=x.gp(0)
d.an(v,e)},
i9u(a5,a6,a7){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=a6.a,a2=a6.b,a3=a2*0.94,a4=A.w.j(0.2)
$.R()
x=B.K()
x.r=a4.gp(0)
a5.aq(new B.a1(0,a3,0+a1,a3+(a2-a3)),x)
w=B.bs(new B.o(a1*0.62,a2*0.47),a2*0.8,Math.min(a1*0.4,a2*0.75))
x=B.bn(w,A.mw)
a4=B.K()
a4.r=A.c.gp(0)
a5.an(x,a4)
a4=w.a
x=w.c
v=x-a4
u=w.b
t=w.d-u
C.rg(a5,"INVOICE",new B.o(a4+v*0.3,u+t*0.09),t*0.07,A.d7,9999)
for(s=a5.c,r=v*0.08,q=a4+r,p=t*0.045,o=q+v*0.5,n=x-v*0.17,m=t*0.02,l=t*0.06,k=a7-0.5,j=0,i=0;i<3;++i){h=A.i.D((k-i*0.6)/0.4,0,1)
if(h<=0)continue
j+=D.aAo[i].b
g=u+t*(0.24+i*0.14)
J.bo(s.save())
s.translate((1-h)*30,0)
f=A.cv.j(h)
$.R()
e=new B.ao(A.O,A.M,A.R,A.S,A.Q)
e.r=f.gp(0)
a5.aq(new B.a1(q,g,o,g+p),e)
C.rg(a5,"$"+D.aAo[i].b,new B.o(n,g+m),l,A.as.j(h),9999)
s.restore()}p=u+t*0.7
a5.ah(new B.o(q,p),new B.o(x-r,p),E.z8(A.dv,1.4))
C.rg(a5,"TOTAL  $"+j,new B.o(w.gbw().a,u+t*0.78),t*0.075,A.as,v*0.8)
x=a7>2.8
if(x){r=a7-2.8
i=A.i.D(r/0.3,0,1)
J.bo(s.save())
s.translate(w.gbw().a,u+t*0.55)
a5.hW(0,-0.3)
a5.bU(0,2-A.e0.aA(0,i))
a5.an(B.bn(B.bs(A.H,t*0.17,v*0.6),A.hU),E.z8(A.cY.j(i),3.5))
C.rg(a5,"PAID",A.H,t*0.11,A.cY.j(i),9999)
s.restore()
for(v=r*0.7,a4-=a2*0.05,u=a2*0.7,t=a2*0.03,s=a7*8,d=0;d<6;++d){a0=A.i.F(v+d*0.17,1)
C.hcD(a5,new B.o(a4+Math.sin(d*2)*a2*0.1,u-a0*a2*0.5),t,s+d)}}a4=x?(Math.sin(a7*6)+1)/2:0
E.Bn(a5,new B.o(a1*0.2,a3),a2*0.66,a7,!0,0,1,A.bE,A.on,x,a4)},
hFe(d,e,f,g){var x,w=B.bs(e,f*0.62,f*2.5),v=f*0.31,u=B.bn(w,new B.aN(v,v))
$.R()
x=B.K()
x.r=A.c.gp(0)
d.an(u,x)
d.an(B.bn(w,new B.aN(v,v)),E.z8(A.bE,f*0.05))
C.rg(d,"\u2665 "+g,e,f*0.4,A.qa,f*2.2)},
zi(d,e,f,g,h,i,j){var x,w,v,u,t,s,r,q,p,o,n,m,l
if(j<=0)return
x=new C.fWp(e,f,g)
w=A.i.cD(22*A.i.D(j,0,1))
for(v=i-h,u=e,t=1;t<=w;++t,u=r){s=Math.min(t/22,A.i.D(j,0,1))
r=x.$1(s)
$.R()
q=new B.ao(A.O,A.M,A.R,A.S,A.Q)
q.b=A.a9
p=q.c=h+v*s
q.r=A.on.gp(0)
q.d=A.bu
d.ah(u,r,q)
q=-p*0.18
o=r.a
n=r.b
m=B.ar(A.on,A.c,0.18)
m.toString
l=new B.ao(A.O,A.M,A.R,A.S,A.Q)
l.b=A.a9
l.c=p*0.28
l.r=m.gp(0)
l.d=A.bu
d.ah(new B.o(u.a+q,u.b+0),new B.o(o+q,n+0),l)}},
irZ(d,e,f,g){var x,w,v,u,t,s
for(x=g*0.45,w=e.a,v=g*2,u=e.b,t=0;t<7;++t){s=A.i.F(x+t/7,1)
C.rg(d,"\u2665",new B.o(w+Math.sin(t*2.3+v)*f*0.12+(t-3.5)*f*0.03,u-s*f*0.45),f*(0.04+0.02*A.o.F(t,3)),B.ar(A.bE,A.hY,A.o.F(t,2)).j((1-s)*0.9),9999)}},
i5S(b3,b4,b5){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6=null,a7=b4.a,a8=b4.b,a9=a8*0.94,b0=A.e9.j(0.7),b1=$.R(),b2=B.K()
b2.r=b0.gp(0)
b3.aq(new B.a1(0,a9,0+a7,a9+(a8-a9)),b2)
x=new C.foA(b5)
w=new C.fox()
v=Math.min(a7*0.34,a8*0.62)
b2=a7*0.64
b0=v*0.2
u=a9-b0
t=new B.o(b2,u)
s=v*0.5
r=v*0.08
r=B.bn(B.bs(t,s,v*2.15),new B.aN(r,r))
q=B.K()
q.r=A.fH.gp(0)
b3.an(r,q)
b1=b1.r
q=y.v
p=new B.aG(b1,A.ai,a6,a6,B.a([],q))
r=u-b0
p.E(new B.aZ(b2,r))
o=b2-s
n=v*0.3
m=u-n
l=b2-v
k=v*0.16
j=u-k
p.E(new B.c6(o,m,l,j))
i=u+v*0.14
p.E(new B.aq(l,i))
l=u+v*0.02
k=u+k
p.E(new B.c6(o,l,b2,k))
p.E(new B.bu())
o=B.K()
o.r=A.fz.gp(0)
b3.af(p,o)
h=new B.aG(b1,A.ai,a6,a6,B.a([],q))
h.E(new B.aZ(b2,r))
s=b2+s
r=b2+v
h.E(new B.c6(s,m,r,j))
h.E(new B.aq(r,i))
h.E(new B.c6(s,l,b2,k))
h.E(new B.bu())
k=B.K()
k.r=A.hH.gp(0)
b3.af(h,k)
for(b1=v*0.85,s=b2-b1,r=u-v*0.06,q=b2-b0,u-=v*0.1,b0=b2+b0,b1=b2+b1,g=0;g<3;++g){b2=g*v*0.06
o=r+b2
b2=u+b2
m=new B.ao(A.O,A.M,A.R,A.S,A.Q)
m.b=A.a9
m.c=1.4
m.r=D.a_9.gp(0)
m.d=A.bu
b3.ah(new B.o(s,o),new B.o(q,b2),m)
m=new B.ao(A.O,A.M,A.R,A.S,A.Q)
m.b=A.a9
m.c=1.4
m.r=D.a_9.gp(0)
m.d=A.bu
b3.ah(new B.o(b0,b2),new B.o(b1,o),m)}f=w.$1(x.$2(0.2,1))
b0=t.aK(0,new B.o(0,n))
b1=b5*4
b2=Math.sin(b1)
u=B.K()
u.sav(new B.bY(A.A,0.5,A.x,a6,0,B.a([A.dA.j(0.6*f),A.L],y.O),a6,a6).aJ(0,B.bZ(t.aK(0,new B.o(0,n)),v*0.7)))
b3.N(b0,v*(0.5+0.1*b2)*f,u)
e=t.aK(0,new B.o(0,v*0.12))
d=new C.foz(t,a8,e)
a0=w.$1(x.$2(0.5,1.1))
a1=w.$1(x.$2(1.3,1.2))
for(b0=b5*2,a2=0;a2<4;++a2){b2=D.cP8[a2]
a3=b2.a
u=d.$2(a3,b2.b)
s=Math.sin(b0+a3*9)
r=new B.ao(A.O,A.M,A.R,A.S,A.Q)
r.r=A.cY.j(0.9).gp(0)
b3.N(u,a8*b2.c*a1+s*1.2,r)}C.zi(b3,e,e.a2(0,new B.o(0,-a8*0.08)),d.$2(0,0.22),a8*0.05,a8*0.035,a0)
a4=w.$1(x.$2(1.2,0.8))
b0=a8*0.032
b2=a8*0.02
C.zi(b3,d.$2(0,0.22),d.$2(-0.06,0.28),d.$2(-0.2,0.36),b0,b2,a4)
C.zi(b3,d.$2(0,0.22),d.$2(0.06,0.28),d.$2(0.2,0.36),b0,b2,a4)
a5=w.$1(x.$2(2.4,0.7))
C.zi(b3,d.$2(0,0.22),d.$2(0,0.4),d.$2(0,0.57),a8*0.03,a8*0.016,a5)
b2=new C.foy(x,b3,b5)
b0=a8*0.088
b2.$5(2,"Mama",d.$2(-0.2,0.36),b0,1.9)
b2.$5(3,"Baba",d.$2(0.2,0.36),b0,2.4)
b2.$5(4,"Dada",d.$2(0,0.57),a8*0.08,3)
if(b5>3.6)C.irZ(b3,d.$2(0,0.36),a8,b5-3.6)
b0=a7*0.2
b2=Math.sin(b1)
E.Bn(b3,new B.o(b0,a9),a8*0.66,b5,!1,Math.abs(Math.sin(b1))*a8*0.01,2,A.aF,F.mU,b5>3,(b2+1)/2)
C.ahl(b3,new B.o(b0,a8*0.1),"My tree!",a8*0.06,x.$2(3,0.4),A.c)},
igk(d,e,f){var x,w,v,u,t,s,r,q,p=e.a,o=e.b,n=o*0.94,m=A.w.j(0.2)
$.R()
x=B.K()
x.r=m.gp(0)
d.aq(new B.a1(0,n,0+p,n+(o-n)),x)
w=A.i.bh(A.i.D(f/5.5,0,1)*9)+1
for(v=p*0.62,m=n-o*0.03,x=o*0.26,u=o*0.07,t=0;t<w;++t){s=m-t*o*0.055
r=B.bs(new B.o(v,s),u,x)
q=new B.ao(A.O,A.M,A.R,A.S,A.Q)
q.r=A.bj.gp(0)
d.bZ(r,q)
s=B.bs(new B.o(v,s),u,x)
q=new B.ao(A.O,A.M,A.R,A.S,A.Q)
q.b=A.a9
q.c=2
q.r=A.ug.gp(0)
q.d=A.bu
d.bZ(s,q)}m=o*0.1
C.hcD(d,new B.o(v,m+A.i.F(f*1.6,1)*(n-u-w*o*0.055-m)),o*0.05,f*8)
m=o*0.08
C.rg(d,"$"+w*25,new B.o(v,m),m,A.dA,9999)
m=f*5
u=Math.sin(m)
E.Bn(d,new B.o(p*0.25,n),o*0.66,f,!1,Math.abs(Math.sin(m))*o*0.012,1,A.cA,F.mU,!0,(u+1)/2)},
i8r(d,e,a0){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=e.a,h=e.b,g=h*0.94,f=A.w.j(0.2)
$.R()
x=B.K()
x.r=f.gp(0)
d.aq(new B.a1(0,g,0+i,g+(h-g)),x)
for(f=d.c,x=h*0.012,w=h*0.55,v=a0*4,u=a0*2,t=h*0.15,s=h*0.03,r=0;r<3;r=o){q=Math.sin(v+r*1.7)
J.bo(f.save())
f.translate(i*(0.5+0.14*r),w-Math.abs(q)*h*0.3)
f.rotate((u+r)*180/3.141592653589793,0,0)
q=B.bn(B.bs(A.H,t,t),new B.aN(s,s))
p=new B.ao(A.O,A.M,A.R,A.S,A.Q)
p.r=A.c.gp(0)
d.an(q,p)
o=r+1
q=o*2
p=r===0
n=0
for(;;){if(!(n<q-(p?1:0)))break
m=n*2.1
l=Math.cos(m)
m=Math.sin(m)
k=new B.ao(A.O,A.M,A.R,A.S,A.Q)
k.r=A.bp.gp(0)
d.N(new B.o(l*h*0.04,m*h*0.04),x,k);++n}f.restore()}for(f=a0*0.6,w=h*0.25,v=h*0.06,r=0;r<5;++r){j=A.i.F(f+r*0.2,1)
C.rg(d,"\u2605",new B.o(i*(0.45+r*0.1),w-j*h*0.2),v,A.dA.j(1-j),9999)}f=i*0.22
w=a0*6
v=Math.sin(w)
E.Bn(d,new B.o(f,g),h*0.66,a0,!0,Math.abs(Math.sin(w))*h*0.015,0,A.c6,F.mU,!0,(v+1)/2)
v=g-h*0.28
s=B.bn(B.bs(new B.o(f,v),h*0.07,h*0.16),new B.aN(s,s))
$.R()
w=B.K()
w.r=A.cs.gp(0)
d.an(s,w)
w=B.K()
w.r=A.ay.gp(0)
d.N(new B.o(f+h*0.05,v),x,w)},
i9T(d,e,f){var x,w,v,u,t,s,r,q,p,o,n,m=e.a,l=e.b,k=l*0.94,j=A.w.j(0.2),i=$.R(),h=B.K()
h.r=j.gp(0)
d.aq(new B.a1(0,k,0+m,k+(l-k)),h)
h=m*0.42
j=l*0.18
x=l*0.08
w=B.bn(new B.a1(h,j,h+m*0.5,j+l*0.5),new B.aN(x,x))
v=new B.aG(i.r,A.ai,null,null,B.a([],y.v))
v.E(new B.j8(w))
d.af(v,E.z8(A.c.j(0.5),4))
u=new B.U0(new B.ry(B.xN(v),!1,B.a([],y.L))).gH(0)
for(j=f*0.18,i=u.a,x=u.b,t=i.e,s=l*0.016,r=0;r<10;++r){q=A.i.F(j+r/10,1)
i.iy()
p=t[x].b
p===$&&B.c()
p=p.a.length()
i.iy()
p=t[x].Di(q*p)
q=new B.ao(A.O,A.M,A.R,A.S,A.Q)
q.r=A.dA.gp(0)
d.N(p.a,s,q)}o=f>1.5
j=l*0.43
n=new B.o(m*0.92,j)
if(o){i=A.dA.j(0.4+0.2*Math.sin(f*8))
x=B.K()
x.r=i.gp(0)
x.y=A.ww
d.N(n,l*0.2,x)}i=l*0.07
x=o?A.qp:A.bL
t=B.K()
t.r=x.gp(0)
d.N(n,i,t)
j=B.bn(B.bs(new B.o(h,j),l*0.2,l*0.1),A.iE)
t=B.K()
t.r=A.cY.gp(0)
d.an(j,t)
C.rg(d,"+",new B.o(h,l*0.36),i,A.c,9999)
j=o?(Math.sin(f*6)+1)/2:0
h=o?Math.abs(Math.sin(f*6))*l*0.012:0
E.Bn(d,new B.o(m*0.2,k),l*0.68,f,!1,h,0,A.bR,F.mU,o,j)
if(o)C.ahl(d,new B.o(m*0.24,l*0.16),"It works!",i,(f-1.5)/0.4,A.c)},
i96(d,e,f){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=e.a,i=e.b,h=i*0.94,g=A.w.j(0.2)
$.R()
x=B.K()
x.r=g.gp(0)
d.aq(new B.a1(0,h,0+j,h+(i-h)),x)
w=A.i.D((f-0.3)/0.4,0,1)
v=A.i.D((f-1.8)/0.4,0,1)
x=i*0.2
g=i*0.065
C.ahl(d,new B.o(j*0.3,x),"How do I enroll?",g,w,A.qp)
if(f>1&&f<1.8)for(u=j*0.72,t=i*0.38,s=f*9,r=i*0.015,q=0;q<3;++q){p=Math.sin(s+q)
o=new B.ao(A.O,A.M,A.R,A.S,A.Q)
o.r=A.c.gp(0)
d.N(new B.o(u+q*i*0.05,t-Math.abs(p)*i*0.02),r,o)}C.ahl(d,new B.o(j*0.7,i*0.38),"Tap Civic Registry!",g,v,A.eG)
E.Bn(d,new B.o(j*0.2,h),i*0.62,f,!1,0,2,A.ay,F.mU,f<1,0)
n=j*0.78
m=h-i*0.28
g=i*0.04
x=B.bn(B.bs(new B.o(n,m),i*0.22,x),new B.aN(g,g))
u=B.K()
u.r=A.bh.gp(0)
d.an(x,u)
u=i*0.18
x=m-u
g=B.bn(B.bs(new B.o(n,x),i*0.14,u),new B.aN(g,g))
u=B.K()
u.r=A.cv.gp(0)
d.an(g,u)
for(g=f*1.1,u=i*0.02,l=0;l<2;++l){k=F.fN[l]
t=A.i.F(g,1)>0.08?A.b9:A.eZ
s=new B.ao(A.O,A.M,A.R,A.S,A.Q)
s.r=t.gp(0)
d.N(new B.o(n+k*i*0.04,x),u,s)}d.ah(new B.o(n,m-i*0.25),new B.o(n,m-i*0.3),E.z8(A.ab,3))
g=B.K()
g.r=A.ay.gp(0)
d.N(new B.o(n,m-i*0.31),i*0.015,g)},
fCw:function fCw(d,e,f){this.a=d
this.b=e
this.c=f},
fCq:function fCq(d,e){this.a=d
this.b=e},
fWp:function fWp(d,e,f){this.a=d
this.b=e
this.c=f},
foA:function foA(d){this.a=d},
fox:function fox(){},
foz:function foz(d,e,f){this.a=d
this.b=e
this.c=f},
foy:function foy(d,e,f){this.a=d
this.b=e
this.c=f},
aPR(d,e,f,g,h,i,j,k){var x=new C.ftf(e,h,i,k),w=x.$1(g),v=w.b.c
if(v>j&&v>0)w=x.$1(Math.max(2,g*j/v))
x=w.b
v=x.c
x=x.a.c
w.a5(d,f.aK(0,new B.o(v/2,x.gba(x)/2)))},
M7(d,e,f,g){var x,w,v,u,t,s,r,q,p,o=A.o.F(g==null?A.i.bh(f/6):g,11),n=A.i.F(f,6),m=D.dik[o],l=e.a,k=e.b,j=0+l,i=0+k
$.R()
x=B.K()
x.sav(new B.a8(A.aA,A.aE,A.x,B.a([m.c,m.d],y.O),null,null).aJ(0,new B.a1(0,0,j,i)))
d.aq(new B.a1(0,0,j,i),x)
w=k*(l>=k?0.7:0.6)
i=d.c
J.bo(i.save())
i.clipRect(B.hU(new B.a1(0,0,j,0+w)),$.mh()[1],!0)
C.iha(d,new B.av(l,w),o,n)
i.restore()
v=k-w
x=A.w.j(0.3)
u=B.K()
u.r=x.gp(0)
d.aq(new B.a1(0,w,j,w+v),u)
t=A.cx.aA(0,A.i.D((n-0.2)/0.5,0,1))
J.bo(i.save())
i.translate((1-t)*l*0.25,0)
u=l/2
j=l*0.94
C.aPR(d,m.a,new B.o(u,w+v*0.3),v*0.36,A.c.j(t),!0,j,0)
C.aPR(d,m.b,new B.o(u,w+v*0.64),v*0.2,A.c.j(0.92*t),!1,j,0)
i.restore()
for(j=k*0.965,i=k*0.009,x=k*0.004,s=0;s<11;++s){r=s===o
q=r?x:0
p=new B.ao(A.O,A.M,A.R,A.S,A.Q)
p.r=A.c.j(r?0.95:0.35).gp(0)
d.N(new B.o(u+(s-5)*k*0.035,j),i+q,p)}j=l-k*0.07
i=k*0.06
C.aPR(d,"AD",new B.o(j,i),k*0.045,A.c.j(0.85),!0,9999,1)
x=k*0.02
x=B.bn(B.bs(new B.o(j,i),k*0.065,k*0.1),new B.aN(x,x))
i=B.K()
i.b=A.a9
i.c=1
i.r=A.ab.gp(0)
i.d=A.bu
d.an(x,i)},
M8(d,e,f,g){var x,w=d.c
J.bo(w.save())
w.clipRect(B.hU(new B.a1(0,0,0+e.a,0+e.b)),$.mh()[1],!0)
x=D.kz[A.o.F(f,8)].e
if(x===-2)C.i64(d,e,g)
else if(x===-1)C.M7(d,e,g,null)
else C.M7(d,e,g,x)
w.restore()},
i64(d,e,f){var x,w,v,u,t,s,r,q,p,o,n,m,l=e.a,k=e.b,j=new B.V(Date.now(),0,!1),i=0+l,h=0+k
$.R()
x=B.K()
x.sav(D.c6D.aJ(0,new B.a1(0,0,i,h)))
d.aq(new B.a1(0,0,i,h),x)
x=B.K()
x.r=A.bD.gp(0)
d.aq(new B.a1(0,0,i,0+k*0.15),x)
C.aPR(d,A.oO[B.bM(j)-1]+" "+B.bD(j),new B.o(l/2,k*0.075),k*0.08,A.c,!0,l*0.9,0)
w=l/7
for(i=k*0.21,h=k*0.05,v=0;v<7;++v)C.aPR(d,D.dxQ[v],new B.o(w*(v+0.5),i),h,A.aD,!0,9999,0)
u=B.c2(B.bD(j),B.bM(j),1,0,0,0,0,0)
t=B.bV(B.c2(B.bD(j),B.bM(j)+1,0,0,0,0,0,0))
s=B.mw(u)-1
r=k*0.74/A.i.cD((s+t)/7)
for(i=k*0.26,h=f*3,q=1;q<=t;++q){p=s+q-1
o=new B.o(w*(A.o.F(p,7)+0.5),i+r*(A.o.ar(p,7)+0.5))
if(q===B.bV(j)){x=Math.min(w,r)
n=A.aH.j(0.5+0.2*Math.sin(h))
$.R()
m=new B.ao(A.O,A.M,A.R,A.S,A.Q)
m.r=n.gp(0)
d.N(o,x*0.42,m)}x=Math.min(w,r)
n=q===B.bV(j)?A.c:A.ab
C.aPR(d,""+q,o,x*0.42,n,!0,9999,0)}},
ftf:function ftf(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
wY:function wY(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
wr:function wr(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
hht(d,e,f,g,h,i){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=d.c
J.bo(j.save())
x=e.a
w=e.b
v=0+x
u=0+w
j.clipRect(B.hU(new B.a1(0,0,v,u)),$.mh()[1],!0)
if(h<3){$.R()
t=B.K()
t.r=D.bfK.gp(0)
d.aq(new B.a1(0,0,v,u),t)
if(h<0.5)u=h/0.5
else u=h>2.4?(3-h)/0.6:1
s=A.i.D(u,0,1)
u=e.ei(A.H)
t=e.gdA()
r=B.K()
r.sav(new B.bY(A.A,0.5,A.x,k,0,B.a([A.aH.j(0.35*s),A.L],y.O),k,k).aJ(0,B.bZ(e.ei(A.H),e.gdA()*0.5)))
d.N(u,t*0.5,r)
C.aQF(d,"NGMY",new B.o(0,w*0.36),w*0.2,A.c.j(s),A.K,w*0.03,x)
C.aQF(d,"T V",new B.o(0,w*0.6),w*0.08,A.aH.j(s),A.K,w*0.05,x)
r=x*0.3
t=w*0.78
u=B.K()
u.r=A.aH.j(s).gp(0)
d.aq(new B.a1(r,t,r+x*0.4*(h/3),t+3),u)}else if(i>=0)C.M8(d,e,i,g)
else{q=A.i.D((h-3)/0.5,0,1)
p=A.o.F(f,10)
switch(p){case 0:C.ifQ(d,e,g)
break
case 1:C.a3T(d,e,7,g)
break
case 2:C.a3T(d,e,0,g)
break
case 3:C.a3T(d,e,1,g)
break
case 4:C.a3T(d,e,2,g)
break
case 5:C.is1(d,e,g)
break
case 6:C.a3T(d,e,3,g)
break
case 7:C.a3T(d,e,6,g)
break
case 8:C.a3T(d,e,4,g)
break
default:C.a3T(d,e,5,g)}t=x-w*0.34
r=w*0.04
o=w*0.03
n=B.bn(new B.a1(t,r,t+w*0.3,r+w*0.1),new B.aN(o,o))
$.R()
o=B.K()
o.r=A.w.j(0.55).gp(0)
d.an(n,o)
C.aQF(d,"NGMY",new B.o(n.a+w*0.025,n.b+w*0.012),w*0.07,A.c,A.bn,1,k)
o=w*0.86
t=B.K()
t.r=A.w.j(0.6).gp(0)
d.aq(new B.a1(0,o,v,o+w*0.14),t)
C.aQF(d,"CH "+(f+1)+"  \xb7  "+D.Ro[p].a,new B.o(r,w*0.885),w*0.075,A.c,A.bn,0,x-w*0.08)
if(q<1){t=B.K()
t.r=A.c.j(0.6*(1-q)).gp(0)
d.aq(new B.a1(0,0,v,u),t)}}$.R()
m=B.K()
m.r=A.w.j(0.07).gp(0)
for(l=0;l<w;l+=3)d.aq(new B.a1(0,l,v,l+1),m)
v=new B.aG($.R().r,A.ai,k,k,B.a([],y.v))
v.E(new B.aZ(0,0))
v.E(new B.aq(x*0.45,0))
v.E(new B.aq(0,w*0.5))
v.E(new B.bu())
w=B.K()
w.r=A.c.j(0.04).gp(0)
d.af(v,w)
j.restore()},
aQF(d,e,f,g,h,i,j,k){var x=null,w=B.fq(x,A.ct,x,1,x,B.cQ(x,x,x,x,x,x,x,x,x,B.m(x,x,h,x,x,x,x,x,x,x,x,g,x,x,A.u,x,x,!0,x,j,x,x,x,x,x,x),e),i,A.bX,x,A.dB,A.bY),v=k==null
w.o8(v?9999:k)
w.a5(d,f.a2(0,new B.o(i===A.K&&!v?(k-w.b.c)/2:0,0)))},
aPM(d,e,f,g,h,i,j){var x=new C.fr1(e,h,i,j),w=x.$1(g),v=w.b.c,u=f.c-f.a
if(v>u&&v>0)w=x.$1(g*u/v)
x=f.gbw()
v=w.b
u=v.c
v=v.a.c
w.a5(d,x.aK(0,new B.o(u/2,v.gba(v)/2)))},
ifQ(d4,d5,d6){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4=null,c5=d5.a,c6=d5.b,c7=A.i.F(d6,14),c8=new C.fCS(c7),c9=new C.fCO(),d0=0+c5,d1=0+c6,d2=$.R(),d3=B.K()
d3.sav(D.c7K.aJ(0,new B.a1(0,0,d0,d1)))
d4.aq(new B.a1(0,0,d0,d1),d3)
x=c5*0.34
w=new C.fCR(x,c6)
v=w.$2(0,0.5)
d3=c6*0.75
u=B.K()
u.sav(new B.bY(A.A,0.5,A.x,c4,0,B.a([A.bM.j(0.55),A.L],y.O),c4,c4).aJ(0,B.bZ(v,d3)))
d4.N(v,d3,u)
t=new B.e5()
t.d_(11)
for(d3=d6*2,s=0;s<26;++s){u=t.ai()
r=t.ai()
q=t.ai()
p=new B.ao(A.O,A.M,A.R,A.S,A.Q)
p.r=A.c.j(0.35+0.4*Math.sin(d3+s)).gp(0)
d4.N(new B.o(u*c5,r*c6*0.45),0.6+q*1.1,p)}for(u=y.v,o=0;o<2;++o){r=B.a([],u)
n=new B.aG(d2.r,A.ai,c4,c4,r)
r.push(new B.aZ(0,c6))
n.ab()
for(d2=o*2,q=o===0,m=0;m<=c5;m+=6){p=q?0.78:0.82
p=new B.aq(m,c6*p+Math.sin(m/(q?70:50)+d2)*c6*0.02)
r.push(p)
l=n.f
if(l!=null)p.ak(l)
n.ab()}d2=new B.aq(c5,c6)
r.push(d2)
r=n.f
if(r!=null)d2.ak(r)
n.ab()
d2=$.R()
r=new B.ao(A.O,A.M,A.R,A.S,A.Q)
r.r=(q?D.Mp:D.bsc).gp(0)
d4.af(n,r)}k=w.$2(0,0.81)
j=c9.$1(c8.$2(0.2,1.6))
i=c9.$1(c8.$2(2.4,2.6))
for(d2=d6*1.4,h=0;h<8;++h){u=D.aBm[h]
g=u.a
f=u.b
e=Math.sin(d2+g*7)*c6*0.006
r=w.$2(g,f)
q=r.a
r=r.b
u=c6*u.c
p=new B.ao(A.O,A.M,A.R,A.S,A.Q)
p.r=A.ht.gp(0)
d4.N(new B.o(q+e,r+0),u*i,p)
p=w.$2(g,f-0.015)
r=p.a
p=p.b
q=new B.ao(A.O,A.M,A.R,A.S,A.Q)
q.r=A.er.gp(0)
d4.N(new B.o(r+e,p+0),u*0.82*i,q)}for(d2=c6*0.01,u=k.a,r=k.b,q=r+d2,p=c6*0.015,r+=p,l=c6*0.04,h=0;h<2;++h){d=F.fN[h]*c6
C.zi(d4,k,new B.o(u+d*0.04,q),new B.o(u+d*0.12,r),l,d2,j)}u=c6*0.085
C.zi(d4,k,w.$2(0.02,0.7),w.$2(0,0.6),u,c6*0.055,j)
a0=c9.$1(c8.$2(1.8,1.6))
r=c6*0.05
q=c6*0.026
C.zi(d4,w.$2(0,0.6),w.$2(-0.1,0.55),w.$2(-0.34,0.44),r,q,a0)
C.zi(d4,w.$2(0,0.6),w.$2(0.1,0.55),w.$2(0.34,0.44),r,q,a0)
a1=c9.$1(c8.$2(3.2,1.3))
q=c6*0.024
d=c6*0.018
C.zi(d4,w.$2(-0.34,0.44),w.$2(-0.17,0.33),w.$2(0,0.39),q,d,a1)
C.zi(d4,w.$2(0.34,0.44),w.$2(0.17,0.33),w.$2(0,0.39),q,d,a1)
a2=c9.$1(c8.$2(4.4,1.3))
d=c6*0.02
q=c6*0.012
C.zi(d4,w.$2(0,0.39),w.$2(-0.1,0.3),w.$2(-0.17,0.2),d,q,a2)
C.zi(d4,w.$2(0,0.39),w.$2(0.1,0.3),w.$2(0.17,0.2),d,q,a2)
d=c6*0.016
C.zi(d4,w.$2(-0.27,0.72),w.$2(-0.14,0.78),w.$2(0,0.7),d,q,c9.$1(c8.$2(3.6,1)))
C.zi(d4,w.$2(0.27,0.72),w.$2(0.14,0.78),w.$2(0,0.7),d,q,c9.$1(c8.$2(3.6,1)))
a3=new B.e5()
a3.d_(5)
for(d=d6*1.6,a4=d4.c,a5=d6*1.3,a6=i*1.4,a7=c6*0.03,s=0;s<110;++s){a8=D.aBm[A.o.F(s,8)]
a9=a3.ai()*3.141592653589793*2
b0=Math.sqrt(a3.ai())*a8.c*0.95
b1=w.$2(a8.a+Math.cos(a9)*b0,a8.b+Math.sin(a9)*b0)
b2=Math.sin(d+s)
b3=b1.a
b1=b1.b
J.bo(a4.save())
a4.translate(b3+b2*c6*0.006,b1+0)
a4.rotate((a9+Math.sin(a5+s)*0.2)*180/3.141592653589793,0,0)
b4=A.i.D(a6-A.o.F(s,10)*0.05,0,1)
b1=B.bs(A.H,p*b4,a7*b4)
$.R()
b2=new B.ao(A.O,A.M,A.R,A.S,A.Q)
b2.r=B.ar(A.bd,A.es,(Math.sin(d3+s)+1)/2).gp(0)
d4.bZ(b1,b2)
a4.restore()}b5=new C.fCP(c8,d4,d6,c7)
p=c6*0.075
b5.$5(0,"Bibi",w.$2(-0.27,0.72),p,5)
b5.$5(1,"Babu",w.$2(0.27,0.72),p,5.6)
b5.$5(2,"Mama",w.$2(-0.34,0.44),u,6.4)
b5.$5(3,"Baba",w.$2(0.34,0.44),u,7)
b5.$5(4,"Dada",w.$2(-0.17,0.2),p,8)
b5.$5(5,"Kaka",w.$2(0.17,0.2),p,8.6)
b6=new C.fCQ(c8,d6,d4)
b6.$3(w.$2(0,0.7),c6*0.028,5.9)
b6.$3(w.$2(0,0.39),c6*0.035,7.4)
if(c7>9.3)for(u=(c7-9.3)*0.4,s=0;s<7;++s){b7=A.i.F(u+s/7,1)
C.aQF(d4,"\u2665",w.$2(Math.sin(s*2.3+d3)*0.3,0.38-b7*0.3),c6*(0.04+0.02*A.o.F(s,3)),A.hY.j((1-b7)*0.85),A.bn,0,c4)}d3=c5*0.655+(1-c9.$1(c8.$2(1,0.9)))*c5*0.4
u=c6*0.1
d=d3+c5*0.315
b8=new B.a1(d3,u,d,u+c6*0.64)
a4=B.bn(b8,new B.aN(r,r))
$.R()
a5=B.K()
a5.r=D.iL.j(0.88).gp(0)
d4.an(a4,a5)
a5=B.bn(b8,new B.aN(r,r))
a4=B.K()
a4.b=A.a9
a4.c=q
a4.r=F.f3.gp(0)
d4.an(a5,a4)
b9=new C.fCT(b8,c6)
C.aPM(d4,"NGMY",b9.$2(0.13,0.06),c6*0.06,F.f3,!0,q)
C.aPM(d4,"Family",b9.$2(0.2,0.1),u,A.c,!0,0)
C.aPM(d4,"Tree",b9.$2(0.3,0.1),u,A.c,!0,0)
for(s=0;s<3;++s){c0=c8.$2(5.5+s*1.5,0.5)
if(c0<=0)continue
C.aPM(d4,"\u2665 "+D.cb5[s],b9.$2(0.43+s*0.075,0.06).eQ(new B.o((1-c0)*30,0)),r,A.iu.j(c0),!1,0)}c1=c8.$2(11,0.5)
if(c1>0){c2=B.bs(new B.o(b8.gbw().a,c6*0.67),p,(d-d3)*0.6*A.e0.aA(0,c1))
d3=B.bn(c2,new B.aN(l,l))
$.R()
u=B.K()
u.r=F.f3.gp(0)
d4.an(d3,u)
if(c1>0.8)C.aPM(d4,"ngmy.org",c2.cn(-d2),r,D.iL,!0,0)}if(c7>11.6){d2=c6*0.82
C.aPM(d4,"Family is everything",new B.a1(0,d2,0+x*2,d2+r),r,A.c.j(A.i.D((c7-11.6)/0.5,0,1)),!0,0)}if(c7<0.4)c3=1-c7/0.4
else c3=c7>13.5?(c7-13.5)/0.5:0
if(c3>0){$.R()
d2=B.K()
d2.r=A.w.j(c3).gp(0)
d4.aq(new B.a1(0,0,d0,d1),d2)}},
hhQ(d,e,f,g,h,i){return B.a6(d,!1).ce(B.vk(null,!1,!0,!0,new C.h3L(e,h,g,i,f),A.eT,null,A.pn,new C.h3M(),y.S))},
ym:function ym(d,e){this.a=d
this.b=e},
fr1:function fr1(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fCS:function fCS(d){this.a=d},
fCO:function fCO(){},
fCR:function fCR(d,e){this.a=d
this.b=e},
fCP:function fCP(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fCQ:function fCQ(d,e,f){this.a=d
this.b=e
this.c=f},
fCT:function fCT(d,e){this.a=d
this.b=e},
h3L:function h3L(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
h3M:function h3M(){},
XC:function XC(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aGn:function aGn(d,e){var _=this
_.e=_.d=$
_.f=-1
_.r=!1
_.w=null
_.x=0
_.y=!0
_.Q=_.z=null
_.as=$
_.bx$=d
_.a9$=e
_.c=_.a=null},
eQm:function eQm(d){this.a=d},
eQl:function eQl(d){this.a=d},
eQk:function eQk(d){this.a=d},
eQj:function eQj(d,e){this.a=d
this.b=e},
eQn:function eQn(d,e){this.a=d
this.b=e},
eQw:function eQw(d){this.a=d},
eQv:function eQv(d){this.a=d},
eQu:function eQu(){},
eQp:function eQp(d){this.a=d},
eQq:function eQq(d){this.a=d},
eQr:function eQr(d){this.a=d},
eQs:function eQs(d){this.a=d},
eQo:function eQo(d){this.a=d},
eQt:function eQt(d){this.a=d},
eQi:function eQi(d){this.a=d},
eQh:function eQh(d){this.a=d},
bxf:function bxf(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.a=h},
aOh:function aOh(){},
hAK(d,e,f,g,h,i){var x=new C.fD1(e,h,!0),w=x.$1(g)
if(i>0&&w.b.c>i)w=x.$1(g*i/w.b.c)
x=w.b.c
w.a5(d,new B.o(f.a-x/2,f.b))},
is1(c7,c8,c9){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3=null,c4=c8.a,c5=c8.b,c6=new B.a1(0,0,0+c4,0+c5)
$.R()
x=B.K()
x.sav(D.c7H.aJ(0,c6))
c7.aq(c6,x)
w=B.K()
w.r=A.aH.j(0.07).gp(0)
for(v=0;v<c4;v+=18)c7.ah(new B.o(v,0),new B.o(v,c5),w)
for(u=0;u<c5;u+=18)c7.ah(new B.o(0,u),new B.o(c4,u),w)
for(x=c9*0.02,t=0;t<18;++t){s=A.i.F(t*0.173,1)
r=A.o.F(t,3)
q=A.i.F(t*0.311+x*(1+r),1)
$.R()
p=new B.ao(A.O,A.M,A.R,A.S,A.Q)
p.r=A.hw.j(0.25).gp(0)
c7.N(new B.o(c4*s,c5*q),1.2+r,p)}o=c4*0.12
n=c4*0.88
m=c5*0.2
l=c5*0.62
x=$.R()
s=y.v
k=new B.aG(x.r,A.ai,c3,c3,B.a([],s))
k.E(new B.aZ(o,m))
k.E(new B.aq(n,m))
k.E(new B.aq(n,l))
k.E(new B.aq(o,l))
k.E(new B.bu())
j=A.i.F(c9,10)
i=j>1.8
r=B.K()
r.b=A.a9
r.c=7
r.r=A.br.gp(0)
c7.af(k,r)
r=B.K()
r.b=A.a9
r.c=3
r.r=(i?A.aH:A.bw).gp(0)
c7.af(k,r)
h=new B.U0(new B.ry(B.xN(k),!1,B.a([],y.L))).gH(0)
r=h.a
q=h.b
r.iy()
p=r.e
g=p[q].b
g===$&&B.c()
g=g.a.length()
f=(m+l)/2
e=c5*0.15
d=c5*0.02
a0=B.bn(B.bs(new B.o(o,f),c5*0.26,e),new B.aN(d,d))
a1=B.K()
a1.r=A.as.gp(0)
c7.an(a0,a1)
for(a0=o+0,a1=c5*0.11,a2=c5*0.05,t=0;t<3;++t){a3=B.bs(new B.o(a0,f+(t-1)*c5*0.075),a2,a1)
a4=new B.ao(A.O,A.M,A.R,A.S,A.Q)
a4.r=A.bd.gp(0)
c7.aq(a3,a4)}a0=c5*0.07
C.hAK(c7,"+",new B.o(o,f-c5*0.22),a0,A.c,0)
a1=n-o
a5=new B.o(o+a1*0.22,m)
a3=-c5
a4=a3*0.06
a6=a5.a2(0,new B.o(a4,0))
a7=B.K()
a7.r=A.c.gp(0)
c7.N(a6,4,a7)
a7=c5*0.06
a6=a5.a2(0,new B.o(a7,0))
a8=B.K()
a8.r=A.c.gp(0)
c7.N(a6,4,a8)
a9=i?0:0.6+0.05*Math.sin(c9*6)
a4=a5.a2(0,new B.o(a4,0))
a6=-a9
a6=a5.a2(0,new B.o(Math.cos(a6)*c5*0.12-a7,Math.sin(a6)*c5*0.12))
a8=B.K()
a8.c=4
a8.d=A.bu
a8.r=(i?A.bj:A.ab).gp(0)
c7.ah(a4,a6,a8)
a1=o+a1*0.62
a4=B.bs(new B.o(a1,m),a2,c5*0.3)
a6=B.K()
a6.r=A.a_.gp(0)
c7.aq(a4,a6)
s=B.a([],s)
b0=new B.aG(x.r,A.ai,c3,c3,s)
x=c5*0.14
a6=a1-x
b0.E(new B.aZ(a6,m))
for(a4=c5*0.035,a8=a3*0.035,t=0;t<6;++t){b1=(t&1)===0?a8:a4
b1=new B.aq(a6+(t+0.5)*c5*0.28/6,m+b1)
s.push(b1)
b2=b0.f
if(b2!=null)b1.ak(b2)
b0.ab()}b0.E(new B.aq(a1+x,m))
$.R()
x=B.K()
x.b=A.a9
x.c=3
x.e=A.dT
x.r=A.cG.gp(0)
c7.af(b0,x)
b3=new B.o((o+n)/2,l)
x=B.bs(b3,m,c5*0.16)
s=B.K()
s.r=A.a_.gp(0)
c7.aq(x,s)
s=B.bs(b3.a2(0,new B.o(a3*0.02,0)),e,4)
x=B.K()
x.r=A.bq.gp(0)
c7.aq(s,x)
e=B.bs(b3.a2(0,new B.o(d,0)),e,4)
x=B.K()
x.r=A.bq.gp(0)
c7.aq(e,x)
b4=i&&j>3.2
b5=b4?0.7+0.3*Math.sin(c9*6):0
b6=new B.o(n,f)
if(b4){x=0.03*b5
s=B.K()
s.r=A.dA.j(0.28).gp(0)
s.y=A.ww
c7.N(b6,c5*(0.2+x),s)
for(s=c9*0.5,x=0.15+x,t=0;t<8;++t){b7=t*3.141592653589793/4+s
e=Math.cos(b7)
a1=Math.sin(b7)
a6=Math.cos(b7)
a8=Math.sin(b7)
b1=new B.ao(A.O,A.M,A.R,A.S,A.Q)
b1.c=3
b1.d=A.bu
b1.r=A.m5.gp(0)
c7.ah(new B.o(n+e*c5*0.1,f+a1*c5*0.1),new B.o(n+a6*c5*x,f+a8*c5*x),b1)}}x=B.K()
x.r=(b4?A.qp:A.bw).gp(0)
c7.N(b6,c5*0.075,x)
x=c5*0.1
s=B.bs(b6.a2(0,new B.o(0,x)),c5*0.04,a0)
f=B.K()
f.r=A.bL.gp(0)
c7.aq(s,f)
b8=A.i.F((i?(j-1.8)/4.6:0)*g,g)
if(i)for(s=g*4,b9=14;b9>=1;--b9){f=A.i.F(b8-b9*7+s,g)
r.iy()
f=p[q].Di(f)
e=new B.ao(A.O,A.M,A.R,A.S,A.Q)
e.r=A.dA.j(0.8*(1-b9/15)).gp(0)
e.y=K.Ot
c7.N(f.a,7-b9*0.4,e)}s=i?b8:g*0.88
r.iy()
c0=p[q].Di(s).a
s=B.K()
s.r=A.dA.j(0.35).gp(0)
s.y=A.mg
c7.N(c0,a0,s)
s=B.K()
s.r=A.m5.gp(0)
c7.N(c0,c5*0.045,s)
s=a3*0.005
a3=c0.a2(0,new B.o(a3*0.015,s))
a0=c5*0.008
q=B.K()
q.r=A.w.gp(0)
c7.N(a3,a0,q)
s=c0.a2(0,new B.o(c5*0.015,s))
q=B.K()
q.r=A.w.gp(0)
c7.N(s,a0,q)
d=B.bs(c0.a2(0,new B.o(0,c5*0.01)),d,c5*0.03)
q=B.K()
q.b=A.a9
q.c=1.5
q.r=A.w.gp(0)
c7.cC(d,0,3.141592653589793,!1,q)
if(j<1.8)c1="The switch is open: the loop is broken"
else if(j<3.2)c1="Click! The loop is closed, Sparky runs"
else{s=j<6?"The resistor slows the current down":"The bulb lights: a full loop!"
c1=s}s=c4/2
r=c5*0.76
c2=B.bn(B.bs(new B.o(s,r),x,c4*0.8),new B.aN(a2,a2))
a2=B.K()
a2.r=A.dC.j(0.7).gp(0)
c7.an(c2,a2)
C.hAK(c7,c1,new B.o(s,r-a4),a7,A.hw,c4*0.76)},
fD1:function fD1(d,e,f){this.a=d
this.b=e
this.c=f},
hhY(d){var x
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
iut(d){var x
switch(C.hhY(d)){case"lg":x=A.hG
break
case"sony":x=A.dc
break
case"apple":x=A.bP
break
case"bo":x=D.u8
break
default:x=A.aH
break}return x},
atw:function atw(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bnb:function bnb(){this.d=0
this.c=this.a=null},
eQf:function eQf(d,e){this.a=d
this.b=e},
eQg:function eQg(d,e){this.a=d
this.b=e},
eQc:function eQc(){},
eQb:function eQb(d){this.a=d},
eQd:function eQd(d){this.a=d},
eQe:function eQe(d){this.a=d},
eQ9:function eQ9(d){this.a=d},
eQa:function eQa(d,e){this.a=d
this.b=e},
Bl(d,e,f,g,h,i,j,k){var x=new C.fD2(e,h,i),w=x.$1(g)
if(k>0&&w.b.c>k)w=x.$1(g*k/w.b.c)
x=f.a
x=j?x:x-w.b.c/2
w.a5(d,new B.o(x,f.b))},
lE(d,e,f,g){var x
$.R()
x=B.K()
x.r=g.gp(0)
return d.N(e,f,x)},
iI(d,e,f,g){var x,w=B.bn(e,new B.aN(f,f))
$.R()
x=B.K()
x.r=g.gp(0)
return d.an(w,x)},
aPU(d,e,f,g,h){var x
$.R()
x=B.K()
x.c=g
x.d=A.bu
x.r=h.gp(0)
return d.ah(e,f,x)},
z6(d,e,f,g,h){var x,w,v,u=A.i.D((f-g)/0.5,0,1)
if(u<=0)return
x=d.c
J.bo(x.save())
w=e.a
v=e.b
x.translate(w,v)
d.bU(0,A.i.D(A.l9.aA(0,u),0.01,1.25))
x.translate(-w,-v)
h.$0()
x.restore()},
ib_(a0,a1,a2,a3,a4){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=a1.a,j=a1.b,i=a4.length,h=A.i.F(a2,i*2.5),g=i-1,f=A.o.D(A.i.bh(h/2.5),0,g),e=h-f*2.5,d=new B.a1(0,0,0+k,0+j)
$.R()
x=B.K()
x.sav(new B.a8(A.aA,A.aE,A.x,a3,null,null).aJ(0,d))
a0.aq(d,x)
for(x=a2*0.6,w=a2*0.5,v=0;v<3;++v){u=Math.sin(x+v)
t=Math.cos(w+v)
s=new B.ao(A.O,A.M,A.R,A.S,A.Q)
s.r=A.c.j(0.05).gp(0)
a0.N(new B.o(k*(0.15+0.35*v+0.05*u),j*(0.28+0.1*t)),j*(0.3+0.05*v),s)}r=A.cx.aA(0,A.i.D(e/0.4,0,1))
q=a4[f]
x=a0.c
J.bo(x.save())
x.clipRect(B.hU(d),$.mh()[1],!0)
w=1-r
x.translate(w*k*0.3,0)
q.c.$3(a0,a1,e)
x.restore()
x=k*0.04
u=j*0.04
t=j*0.05
p=B.bn(new B.a1(x,u,x+j*0.3,u+j*0.1),new B.aN(t,t))
x=B.K()
x.r=A.w.j(0.35).gp(0)
a0.an(p,x)
C.Bl(a0,"NGMY",new B.o(p.a+u,p.b+j*0.012),j*0.07,A.c,!0,!0,0)
o=w*j*0.05
w=k/2
x=k*0.92
C.Bl(a0,q.a,new B.o(w,j*0.64+o),j*0.095,A.c.j(r),!0,!1,x)
C.Bl(a0,q.b,new B.o(w,j*0.76+o),t,A.c.j(0.85*r),!1,!1,x)
if(f===g){n=B.bs(new B.o(w,j*0.835),j*0.06,k*0.46)
C.iI(a0,n,j*0.03,A.c.j(0.92*A.i.D((e-0.4)/0.4,0,1)))
C.Bl(a0,"Get NGMY  \xb7  ngmy.org",new B.o(w,n.b+j*0.008),u,A.as,!0,!1,n.c-n.a-12)}else for(x=j*0.01,g/=2,u=j*0.835,t=j*0.014,v=0;v<i;++v){s=v===f
m=s?t:x
l=new B.ao(A.O,A.M,A.R,A.S,A.Q)
l.r=A.c.j(s?0.95:0.4).gp(0)
a0.N(new B.o(w+(v-g)*j*0.045,u),m,l)}},
heO(d){var x=d.a,w=d.b
return new B.a1(x*0.2,w*0.16,x*0.8,w*0.56)},
heD(d,e,f,g){var x,w,v,u,t,s,r,q=C.heO(e),p=q.a,o=q.d,n=q.c
$.R()
x=B.K()
x.r=D.aiu.gp(0)
d.aq(new B.a1(p,o,n,o+e.b*0.03),x)
for(n-=p,x=q.b,w=o-x,v=0;v<9;++v){u=g?1:A.dK.aA(0,A.i.D((f-v*0.18)/0.35,0,1))
t=p+v*n/8
s=new B.ao(A.O,A.M,A.R,A.S,A.Q)
s.r=D.bk7.gp(0)
d.aq(new B.a1(t-3,o-w*u,t+3,o),s)}r=g?1:A.i.D((f-1.6)/0.4,0,1)
p-=4
o=B.K()
o.r=D.bqw.gp(0)
d.aq(new B.a1(p,x-5,p+(n+8)*r,x+3),o)},
i70(d,e,f){return C.heD(d,e,f,!1)},
i72(d,e,f){var x,w,v,u,t,s,r,q,p,o,n,m,l,k
C.heD(d,e,f,!0)
x=C.heO(e)
w=x.b
v=x.d-w
u=w+v*0.55
w=x.a
t=x.c-w
C.aPU(d,new B.o(w,u),new B.o(w+t*A.i.D((f-0.2)/1.4,0,1),u),5,A.bj)
t=w+t*0.5
w=u+v*0.18
s=new B.o(t,w)
C.z6(d,s,f,1.2,new C.fpC(d,s,x))
if(f>1.6)for(r=f*4,q=0;q<6;++q){p=q*3.141592653589793/3+r
o=Math.cos(p)
n=Math.sin(p)
m=Math.cos(p)
l=Math.sin(p)
$.R()
k=new B.ao(A.O,A.M,A.R,A.S,A.Q)
k.c=3
k.d=A.bu
k.r=A.m5.gp(0)
d.ah(new B.o(t+o*v*0.13,w+n*v*0.13),new B.o(t+m*v*0.2,w+l*v*0.2),k)}},
i7_(d,e,f){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
C.heD(d,e,f,!0)
x=C.heO(e)
for(w=x.a,v=x.c-w,u=e.a,t=x.b,s=v/3,r=s-2,q=x.d-t,p=t+q,o=0;o<3;++o){n=A.cx.aA(0,A.i.D((f-(0.1+o*0.5))/0.6,0,1))
m=w+o*v/3
l=m+(1-n)*u*0.6
$.R()
k=new B.ao(A.O,A.M,A.R,A.S,A.Q)
k.r=A.bP.gp(0)
d.aq(new B.a1(l,t,l+r,p),k)
if(n>=1)for(l=m+6,k=m+s-8,j=0;j<4;++j){i=t+(j+0.5)*q/4
h=new B.ao(A.O,A.M,A.R,A.S,A.Q)
h.r=A.dc.gp(0)
d.N(new B.o(l,i),2,h)
h=new B.ao(A.O,A.M,A.R,A.S,A.Q)
h.r=A.dc.gp(0)
d.N(new B.o(k,i),2,h)}}},
i71(d,e,a0){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=e.a,i=e.b,h=i*0.56,g=$.R(),f=B.K()
f.r=D.aiu.gp(0)
d.aq(new B.a1(0,h,0+j,h+i*0.03),f)
x=i*0.55
w=i*0.28
f=j/2
v=f-x/2
C.lE(d,new B.o(j*0.8,h-i*0.3*A.dK.aA(0,A.i.D(a0/1.5,0,1))),i*0.07,A.dA)
u=h-w
t=B.K()
t.r=D.bnQ.gp(0)
d.aq(new B.a1(v,u,v+x,u+w),t)
g=new B.aG(g.r,A.ai,null,null,B.a([],y.v))
g.E(new B.aZ(v-x*0.08,u))
g.E(new B.aq(f,u-w*0.55))
g.E(new B.aq(v+x*1.08,u))
g.E(new B.bu())
u=B.K()
u.r=A.et.gp(0)
d.af(g,u)
u=v+x*0.14
g=w*0.62
t=h-g
s=B.K()
s.r=D.aiF.gp(0)
d.aq(new B.a1(u,t,u+x*0.2,t+g),s)
r=A.i.D((a0-0.8)/0.5,0,1)
for(g=h-w*0.75,u=x*0.17,t=g+w*0.38,q=0;q<2;++q){p=v+x*(0.5+0.25*q)
s=new B.ao(A.O,A.M,A.R,A.S,A.Q)
s.r=B.ar(A.dl,A.dA,r).gp(0)
d.aq(new B.a1(p,g,p+u,t),s)}for(g=a0*2,u=h-w*1.4,t=a0-1.2,s=t/1,t/=0.3,q=0;q<6;++q){o=q*3.141592653589793/3+g
n=Math.cos(o)
m=Math.sin(o)
l=A.i.D(s,0,1)
k=new B.ao(A.O,A.M,A.R,A.S,A.Q)
k.r=D.dFg.j(A.i.D(t,0,1)).gp(0)
d.N(new B.o(f+n*i*0.1*l,u+m*i*0.1*l),3,k)}},
i7K(d,e,a0){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=e.b,j=e.a,i=j*0.28,h=j*0.72,g=k*0.2,f=k*0.52
$.R()
x=B.K()
x.r=A.aQ.gp(0)
x.b=A.a9
w=k*0.012
x.c=w
d.aq(new B.a1(i,g,h,f),x)
v=(g+f)/2
u=k*0.1
C.iI(d,B.bs(new B.o(i,v),k*0.15,u),3,A.as)
C.iI(d,B.bs(new B.o(i,v-k*0.035),k*0.06,u),3,A.bd)
u=h-i
t=f-g
s=2*(u+t)
for(r=a0*110,q=0;q<16;++q){p=A.i.F(r+q*s/16,s)
if(p<u)o=new B.o(i+p,g)
else{p-=u
if(p<t)o=new B.o(h,g+p)
else{p-=t
o=p<u?new B.o(h-p,f):new B.o(i,f-(p-u))}}n=new B.ao(A.O,A.M,A.R,A.S,A.Q)
n.r=A.c.gp(0)
d.N(o,w,n)}m=A.i.D((a0-0.6)/0.5,0,1)*(0.7+0.3*Math.sin(a0*7))
l=new B.o(h,v)
C.lE(d,l,k*(0.14+0.03*m),A.dA.j(0.28*m))
w=B.ar(A.an,A.qp,m)
w.toString
C.lE(d,l,k*0.07,w)},
i7J(d,e,a0){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=e.b,g=e.a,f=B.bs(new B.o(g/2,h*0.34),h*0.38,g*0.62)
C.iI(d,f,10,A.cc)
for(x=f.a,w=x+14,v=f.c-x,u=v-28,t=f.b,s=t+14,r=f.d-t,q=r-28,p=0;p<18;++p)for(o=w+p*u/17,n=0;n<6;++n){$.R()
m=new B.ao(A.O,A.M,A.R,A.S,A.Q)
m.r=A.bL.gp(0)
d.N(new B.o(o,s+n*q/5),2,m)}l=new B.o(x+v*0.25,t+r*0.3)
C.z6(d,l,a0,0.2,new C.fq8(d,l,f))
k=new B.o(x+v*0.55,t+r*0.32)
C.z6(d,k,a0,0.7,new C.fq9(d,k,f))
j=new B.o(x+v*0.78,t+r*0.55)
C.z6(d,j,a0,1.1,new C.fqa(d,j,f))
i=A.i.D((a0-1.4)/0.7,0,1)
w=t+r*0.8
$.R()
u=B.K()
u.c=4
u.r=A.cY.gp(0)
u.d=A.bu
d.ah(new B.o(x+v*0.1,w),new B.o(x+v*(0.1+0.6*i),w),u)
if(a0>2)C.lE(d,k,r*0.2,A.ay.j(0.3*(0.6+0.4*Math.sin(a0*12))))},
i7M(d,e,f){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=e.b,j=e.a,i=B.bs(new B.o(j*0.4,k*0.32),k*0.36,k*0.62)
C.iI(d,i.cn(5),8,A.as)
x=d.c
J.bo(x.save())
x.clipRRect(B.nR(B.bn(i,A.mw)),$.np(),!0)
w=A.i.D((f-0.7)/0.2,0,1)
for(v=i.a,u=i.c,t=u-v,s=i.b,r=t/7+1,q=s+(i.d-s),p=0;p<7;++p){o=v+p*t/7
$.R()
n=new B.ao(A.O,A.M,A.R,A.S,A.Q)
n.r=B.ar(A.dC,D.cvu[p],w).gp(0)
d.aq(new B.a1(o,s,o+r,q),n)}x.restore()
m=B.bs(new B.o(j*0.8,k*0.4),k*0.24,k*0.16)
C.iI(d,m,6,A.as)
C.iI(d,m.cn(-5),4,A.bd)
C.Bl(d,"12 V",new B.o(m.gbw().a,m.gbw().b-k*0.025),k*0.05,A.w,!0,!1,0)
l=A.i.D((f-0.1)/0.6,0,1)
x=m.a
v=m.gbw()
t=m.gbw()
$.R()
s=B.K()
s.c=4
s.r=A.aQ.gp(0)
s.d=A.bu
d.ah(new B.o(x,v.b),new B.o(x-(x-u)*l,t.b),s)},
i7L(d,e,f){var x,w,v,u,t,s,r,q,p=e.b,o=e.a,n=B.bs(new B.o(o/2,p*0.32),p*0.48,p*0.42)
C.iI(d,n,14,A.av)
x=n.a
w=x+10
v=n.b
u=v+10
t=n.c
s=t-x
r=n.d
q=(r-v)*0.3
C.iI(d,new B.a1(w,u,w+(s-20),u+q),6,A.id)
u=(f-0.2)/1.6
C.Bl(d,A.i.ad(12*A.dK.aA(0,A.i.D(u,0,1)),1)+" V",new B.o(n.gbw().a,v+14),p*0.085,A.eX,!0,!1,s-30)
q=r-q
C.lE(d,new B.o(n.gbw().a,q),s*0.22,A.as)
v=d.c
J.bo(v.save())
v.translate(n.gbw().a,q)
d.hW(0,-1.2+2.4*A.i.D(u,0,1))
C.aPU(d,A.H,new B.o(0,-s*0.18),3,A.c)
v.restore()
v=1-A.dK.aA(0,A.i.D(f/0.8,0,1))
s=p*0.5
C.aPU(d,new B.o(x,r),new B.o(o*0.2+v*-40,s),4,A.ay)
C.aPU(d,new B.o(t,r),new B.o(o*0.8+v*40,s),4,A.as)},
foj(d,e,f,g){var x,w
C.lE(d,e,f,g)
C.lE(d,e.a2(0,new B.o(0,-f*0.18)),f*0.38,A.c.j(0.92))
x=B.bs(e.a2(0,new B.o(0,f*0.95)),f*1.1,f*1.3)
$.R()
w=B.K()
w.r=A.c.j(0.92).gp(0)
d.cC(x,3.141592653589793,3.141592653589793,!0,w)},
hev(d,e,f,g){var x,w,v,u,t,s,r,q=$.R(),p=B.a([],y.v),o=new B.aG(q.r,A.ai,null,null,p)
for(q=e.a,x=e.b,w=f*0.45,v=0;v<10;++v){u=-1.5707963267948966+v*3.141592653589793/5
t=(v&1)===0?f:w
s=q+Math.cos(u)*t
r=x+Math.sin(u)*t
if(v===0){s=new B.aZ(s,r)
p.push(s)
r=o.f
if(r!=null)s.ak(r)
o.ab()}else{s=new B.aq(s,r)
p.push(s)
r=o.f
if(r!=null)s.ak(r)
o.ab()}}o.E(new B.bu())
$.R()
q=B.K()
q.r=g.gp(0)
d.af(o,q)},
i5p(d,e,f){var x,w,v,u,t,s,r=e.b,q=e.a,p=new B.o(q*0.38,r*0.32)
C.z6(d,p,f,0.1,new C.fne(d,p,r))
x=r*0.11
w=p.a2(0,new B.o(x,x))
C.z6(d,w,f,0.7,new C.fnf(d,w,r))
x=q*0.52
v=r*0.22
u=A.i.D((f-0.5)/0.6,0,1)
t=x+q*0.3-x
C.iI(d,new B.a1(x,v,x+t*u,v+(v+r*0.2-v)),10,A.c.j(0.92))
if(u>0.6){x+=10
s=v+12
C.iI(d,new B.a1(x,s,x+t*0.7,s+8),3,A.as)
s=v+30
C.iI(d,new B.a1(x,s,x+t*0.5,s+6),3,A.bL)
v+=46
C.iI(d,new B.a1(x,v,x+t*0.6,v+6),3,A.bL)}},
i5n(d,e,f){var x,w,v,u,t,s,r,q,p=e.b,o=e.a,n=new C.fnb(d,f,p),m=p*0.07
C.foj(d,new B.o(o*0.14,p*0.2),m,A.aH)
C.foj(d,new B.o(o*0.86,p*0.42),m,A.bT)
m=o*0.25
x=p*0.13
w=p*0.14
n.$4(new B.a1(m,x,m+o*0.42,x+w),A.c,0.2,A.as)
if(f>0.9&&f<1.5)for(m=o*0.6,x=p*0.38,v=p*0.012,u=p*0.008,t=f*12,s=0;s<3;++s){r=Math.sin(t+s)
$.R()
q=new B.ao(A.O,A.M,A.R,A.S,A.Q)
q.r=A.c.gp(0)
d.N(new B.o(m+s*p*0.04,x),v+u*r,q)}m=o*0.33
x=p*0.32
n.$4(new B.a1(m,x,m+o*0.46,x+w),A.as,1.5,A.c)},
i5q(d,e,f){var x,w,v,u,t,s,r,q,p=e.b
for(x=e.a/2,w=p*0.3,v=p*0.06,u=0;u<5;++u){t=new B.o(x+(u-2)*p*0.13,w)
s=0.2+u*0.35
r=f>s
C.z6(d,t,f,s,new C.fng(d,t,p,r))
if(!r)C.hev(d,t,v,A.an.j(0.5))}q=A.i.D((f-2)/0.4,0,1)
if(q>0)C.Bl(d,"5.0  \xb7  Loved by members",new B.o(x,p*0.46),p*0.05,A.c.j(q),!0,!1,0)},
i5o(d,e,f){var x,w,v,u,t,s,r=e.b,q=e.a
for(x=q/2,w=r*0.2,v=0;v<6;++v){u=new B.o(x+(A.o.F(v,3)-1)*r*0.2,w+A.o.ar(v,3)*r*0.2)
C.z6(d,u,f,v*0.2,new C.fnd(d,u,r,v))}t=1+0.06*Math.sin(f*8)
s=B.bs(new B.o(x,r*0.5),r*0.07*t,q*0.22*t)
if(f>1.4){C.iI(d,s,r*0.035,A.hY)
C.Bl(d,"Say hi",new B.o(s.gbw().a,s.b+r*0.012),r*0.045,A.c,!0,!1,s.c-s.a-10)}},
i6M(d,e,f){var x,w,v,u,t,s,r,q,p,o,n,m=e.b,l=e.a
for(x=f*0.5,w=m*0.08,v=m*0.06,u=m*0.035,t=0;t<9;++t){s=A.i.F(x+t/9,1)
r=l*(0.15+0.7*A.i.F(t*0.37,1))
q=w+s*m*0.5
p=0.3+0.7*Math.abs(Math.cos(s*22))
o=B.bs(new B.o(r,q),v,v*p)
$.R()
n=new B.ao(A.O,A.M,A.R,A.S,A.Q)
n.r=A.bj.gp(0)
d.bZ(o,n)
p=B.bs(new B.o(r,q),u,u*p)
n=new B.ao(A.O,A.M,A.R,A.S,A.Q)
n.r=A.bM.gp(0)
d.bZ(p,n)}},
i8s(a3,a4,a5){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=a4.b,a2=a4.a
for(x=a1*0.28,w=a1*0.36,v=a1*0.07,u=a2/2,t=a1*0.32,s=a1*0.02,r=-a1,q=r*0.02,r*=0.03,p=a1*0.03,o=a1*0.06,n=a1*0.045,m=0;m<3;++m){l=A.e0.aA(0,A.i.D((a5-m*0.3)/0.6,0,1))
k=m===1
j=k?s:0
i=B.bs(new B.o(u+(m-1)*a1*0.32+(1-l)*a2*0.5,t-j),w,x)
j=D.S0[m]
h=B.bn(i,new B.aN(12,12))
$.R()
g=new B.ao(A.O,A.M,A.R,A.S,A.Q)
g.r=j.gp(0)
a3.an(h,g)
g=i.a
h=i.b
j=i.c
f=i.d
e=A.c.j(0.2)
d=B.bn(new B.a1(g- -8,h- -8,j+-8,f+-8),new B.aN(8,8))
a0=new B.ao(A.O,A.M,A.R,A.S,A.Q)
a0.r=e.gp(0)
a3.an(d,a0)
g+=(j-g)/2
h+=(f-h)/2
f=new B.ao(A.O,A.M,A.R,A.S,A.Q)
f.r=A.c.j(0.9).gp(0)
a3.N(new B.o(g,h),v,f)
if(m===0){j=D.S0[m]
f=new B.ao(A.O,A.M,A.R,A.S,A.Q)
f.c=5
f.d=A.bu
f.r=j.gp(0)
a3.ah(new B.o(g+q,h+r),new B.o(g+p,h+0),f)}if(k){k=B.bs(new B.o(g,h),o,o)
j=D.S0[m]
k=B.bn(k,new B.aN(4,4))
f=new B.ao(A.O,A.M,A.R,A.S,A.Q)
f.r=j.gp(0)
a3.an(k,f)}if(m===2)C.hev(a3,new B.o(g,h),n,D.S0[m])}if(a5>1.3)C.lE(a3,new B.o(u+a1*0.05,a1*0.5-A.i.D(a5-1.3,0,0.5)*a1*0.1),a1*0.025,A.c.j(0.85))},
i8t(d,e,f){var x,w,v,u,t,s,r,q,p,o=e.b
C.i6M(d,e,f)
x=B.bs(new B.o(e.a/2,o*0.46),o*0.16,o*0.5)
w=o*0.07
C.iI(d,x,w,A.as)
C.iI(d,x.cn(-3),o*0.065,A.cs)
v=new B.o(x.a+o*0.1,x.gbw().b)
u=o*0.02
t=B.bs(v,u,w)
$.R()
s=B.K()
s.r=A.ab.gp(0)
d.aq(t,s)
u=B.bs(v,w,u)
s=B.K()
s.r=A.ab.gp(0)
d.aq(u,s)
r=A.o.F(A.i.bh(f*4),2)===0
s=x.c
u=x.gbw()
t=o*0.015
q=o*0.025
p=r?A.c0:A.mP
C.lE(d,new B.o(s-o*0.12,u.b+t),q,p)
p=x.gbw()
u=r?A.ht:A.b5
C.lE(d,new B.o(s-w,p.b-t),q,u)},
i8u(d,e,f){var x,w,v,u,t=e.b,s=e.a,r=t*0.3,q=B.bs(new B.o(s/2,r),r,s*0.5)
C.iI(d,q,14,A.a_)
r=q.b
x=t*0.05
C.Bl(d,"SCORE",new B.o(q.gbw().a,r+t*0.02),x,A.hw,!0,!1,0)
w=(f-0.1)/1.9
v=q.a
u=q.c-v
C.Bl(d,""+A.i.V(A.dK.aA(0,A.i.D(w,0,1))*9800),new B.o(q.gbw().a,r+t*0.085),t*0.12,A.dA,!0,!1,u-20)
v+=16
x=q.d-x
u=v+(u-32)
r=x+t*0.025
C.iI(d,new B.a1(v,x,u,r),6,A.aT)
C.iI(d,new B.a1(v,x,v+(u-v)*A.i.D(w,0,1),x+(r-x)),6,A.b5)},
i8v(d,e,f){var x,w,v,u,t,s,r,q,p,o,n,m,l=e.b,k=e.a/2,j=A.e0.aA(0,A.i.D(f/0.8,0,1)),i=d.c
J.bo(i.save())
i.translate(k,l*0.5+(1-j)*l*0.3)
x=new B.aG($.R().r,A.ai,null,null,B.a([],y.v))
w=-l
v=w*0.09
u=w*0.26
x.E(new B.aZ(v,u))
t=l*0.09
x.E(new B.aq(t,u))
s=w*0.1
r=w*0.08
x.E(new B.c6(t,s,0,r))
x.E(new B.c6(v,s,v,u))
x.E(new B.bu())
u=B.K()
u.r=A.bj.gp(0)
d.af(x,u)
u=w*0.03
x=B.K()
x.r=A.yg.gp(0)
d.aq(new B.a1(w*0.015,r,l*0.015,u),x)
C.iI(d,new B.a1(w*0.07,u,l*0.07,0),4,A.ic)
i.restore()
q=new B.e5()
q.d_(3)
for(i=(f-0.6)/1.8,x=l*0.25,p=0;p<22;++p){o=q.ai()*3.141592653589793*2
n=0.4+q.ai()
m=A.i.D(i,0,1)
w=B.bs(new B.o(k+Math.cos(o)*l*0.4*n*m,x+(Math.sin(o)*l*0.25*n*m+30*m*m)),4,6)
v=new B.ao(A.O,A.M,A.R,A.S,A.Q)
v.r=[A.bT,A.aH,A.bj,A.b5][A.o.F(p,4)].j(1-m*0.6).gp(0)
d.aq(w,v)}},
if9(d,e,f){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=e.b,h=e.a/2,g=B.bs(new B.o(h,i*0.38),i*0.34,i*0.7)
C.iI(d,g,6,A.fz)
for(x=g.a,w=x-6,v=g.c,u=v-x,t=u+12,s=g.b,r=i*0.07,q=s-r+0,p=t/8,o=i*0.1,n=q+o*G.XQ.aA(0,A.i.D((f-0.1)/0.9,0,1)),m=0;m<8;++m){l=w+m*t/8
$.R()
k=new B.ao(A.O,A.M,A.R,A.S,A.Q)
k.r=((m&1)===0?A.ay:A.c).gp(0)
d.aq(new B.a1(l,q,l+p,n),k)}x+=14
o=s+o
w=g.d-s
C.iI(d,new B.a1(x,o,x+u*0.35,o+w*0.55),4,A.dl)
v-=u*0.3
C.iI(d,new B.a1(v,o,v+u*0.2,o+w*0.7),4,A.hd)
j=A.i.D((f-1)/0.5,0,1)
if(j>0)C.Bl(d,"OPEN",new B.o(h,s-i*0.14),r*j,A.dA,!0,!1,0)},
ifg(d,e,f){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=e.b
for(x=e.a/2,w=h*0.32,v=h*0.28,u=h*0.38,t=h*0.05,s=h*0.06,r=0;r<3;++r){q=B.bs(new B.o(x+(r-1)*h*0.33,w+(1-A.e0.aA(0,A.i.D((f-r*0.35)/0.6,0,1)))*h*0.4),u,v)
p=B.bn(q,new B.aN(12,12))
$.R()
o=new B.ao(A.O,A.M,A.R,A.S,A.Q)
o.r=A.c.gp(0)
d.an(p,o)
o=q.a
p=o+8
n=q.b
m=n+8
l=q.c-o
k=q.d
n=k-n
j=D.dij[r]
p=B.bn(new B.a1(p,m,p+(l-16),m+n*0.55),new B.aN(8,8))
i=new B.ao(A.O,A.M,A.R,A.S,A.Q)
i.r=j.gp(0)
d.an(p,i)
i=o+l/2
p=new B.ao(A.O,A.M,A.R,A.S,A.Q)
p.r=A.c.j(0.85).gp(0)
d.N(new B.o(i,m+n*0.27),t,p)
o+=12
p=k-n*0.3
p=B.bn(new B.a1(o,p,o+l*0.5,p+7),new B.aN(3,3))
l=new B.ao(A.O,A.M,A.R,A.S,A.Q)
l.r=A.bL.gp(0)
d.an(p,l)
C.Bl(d,D.cak[r],new B.o(i,k-n*0.18),s,A.as,!0,!1,0)}},
if7(d,e,f){var x,w,v,u,t,s,r,q,p,o,n=e.b,m=n*0.2,l=B.bs(new B.o(e.a*(0.2+0.3*A.dK.aA(0,A.i.D(f/1,0,1)))+m,n*0.4),m,n*0.44)
for(m=l.a,x=l.c,w=m+(x-m)/2,v=l.b,u=n*0.13,t=n*0.09,s=0;s<3;++s){r=A.i.D((f-(0.6+s*0.4))/0.5,0,1)
if(r<=0)continue
q=B.bs(new B.o(w+(s-1)*n*0.1,v-u*(1-r)*2+4),t,t)
p=[A.cp,A.bT,A.bj][s]
q=B.bn(q,new B.aN(5,5))
$.R()
o=new B.ao(A.O,A.M,A.R,A.S,A.Q)
o.r=p.gp(0)
d.an(q,o)}w=new B.aG($.R().r,A.ai,null,null,B.a([],y.v))
w.E(new B.aZ(m,v))
w.E(new B.aq(x,v))
u=n*0.04
t=l.d
w.E(new B.aq(x-u,t))
w.E(new B.aq(m+u,t))
w.E(new B.bu())
u=B.K()
u.r=A.bh.gp(0)
d.af(w,u)
C.aPU(d,new B.o(m,v),new B.o(m-n*0.05,v-n*0.07),4,A.bh)
v=n*0.08
t+=n*0.03
u=n*0.025
C.lE(d,new B.o(m+v,t),u,A.as)
C.lE(d,new B.o(x-v,t),u,A.as)},
if8(d,e,f){var x,w=e.b,v=e.a,u=-w,t=u*0.4+(v+w*0.6)*A.i.D(f/2.4,0,1),s=w*0.36,r=t+w*0.28
C.iI(d,new B.a1(t,s,r,s+w*0.17),5,A.c)
s=w*0.4
C.iI(d,new B.a1(r,s,r+w*0.12,s+w*0.13),5,A.cG)
s=w*0.54
r=w*0.03
C.lE(d,new B.o(t+w*0.07,s),r,A.as)
C.lE(d,new B.o(t+w*0.32,s),r,A.as)
x=new B.o(v/2,w*0.24)
C.z6(d,x,f,0.5,new C.fC5(d,x,w))
C.z6(d,x.a2(0,new B.o(w*0.11,u*0.07)),f,1.1,new C.fC6(d,x,w))},
hcv(d){var x=d.b
return B.bs(new B.o(d.a*0.45,x*0.32),x*0.36,x*0.62)},
aPt(d,e,f,g){var x,w,v,u,t,s,r=e.d,q=e.b,p=r-q
C.iI(d,e,p*0.08,A.c)
x=e.a
w=e.c-x
v=p*0.12
u=p*0.2
C.lE(d,new B.o(x+w*0.2,e.gbw().b-v),u,g)
t=x+w*0.42
u=q+u
C.iI(d,new B.a1(t,u,t+w*0.4*f,u+p*0.07),3,A.br)
u=q+p*0.38
s=p*0.05
C.iI(d,new B.a1(t,u,t+w*0.3*f,u+s),3,A.bL)
q+=p*0.5
C.iI(d,new B.a1(t,q,t+w*0.36*f,q+s),3,A.bL)
x+=w*0.06
v=r-v
$.R()
r=B.K()
r.r=A.av.gp(0)
d.aq(new B.a1(x,v,x+w*0.88*f,v+p*0.04),r)},
i6r(d,e,f){var x=C.hcv(e)
C.z6(d,x.gbw(),f,0,new C.foW(d,x))
C.aPt(d,x,A.dK.aA(0,A.i.D((f-0.4)/1.6,0,1)),A.cH)},
i6q(d,e,f){var x,w,v,u,t,s,r,q,p=C.hcv(e),o=A.o.F(A.i.bh(f/0.6),4),n=d.c
J.bo(n.save())
n.translate(p.gbw().a,p.gbw().b)
d.hW(0,-0.06+0.03*Math.sin(f*3))
n.translate(-p.gbw().a,-p.gbw().b)
C.aPt(d,p,1,D.auq[o])
n.restore()
for(n=e.a*0.78,x=e.b,w=x*0.16,v=x*0.032,u=x*0.045,t=0;t<4;++t){s=w+t*x*0.09
r=D.auq[t]
$.R()
q=new B.ao(A.O,A.M,A.R,A.S,A.Q)
q.r=r.gp(0)
d.N(new B.o(n,s),v,q)
if(t===o){r=new B.ao(A.O,A.M,A.R,A.S,A.Q)
r.b=A.a9
r.c=3
r.r=A.c.gp(0)
d.N(new B.o(n,s),u,r)}}},
i6s(d,e,f){var x,w,v,u,t,s,r=e.b,q=e.a,p=r*0.32,o=d.c
J.bo(o.save())
o.translate(q*0.34,p)
d.hW(0,-0.1)
C.aPt(d,B.bs(A.H,r*0.24,r*0.4),1,A.cH)
o.restore()
x=B.bs(new B.o(q*0.74,p),r*0.3,r*0.17)
C.iI(d,x,r*0.03,A.dC)
C.iI(d,x.cn(-3),r*0.025,A.aH)
for(p=f*0.9,o=x.a,w=x.b,w+=(x.d-w)/2,v=0;v<3;++v){u=A.i.F(p+v/3,1)
t=B.bZ(new B.o(o,w),r*(0.04+0.16*u))
$.R()
s=new B.ao(A.O,A.M,A.R,A.S,A.Q)
s.b=A.a9
s.c=3
s.r=A.c.j(1-u).gp(0)
d.cC(t,2.199114857512855,1.8849555921538759,!1,s)}if(f>1.4){u=A.e0.aA(0,A.i.D((f-1.4)/0.5,0,1))
p=x.c-o
C.aPt(d,B.bs(x.gbw(),p*0.5*u,p*0.8*u),1,A.cH)}},
i6t(d,e,f){var x,w,v,u,t,s,r,q,p,o,n,m=C.hcv(e)
for(x=d.c,w=m.a,v=m.c-w,w+=v/2,u=e.b,t=m.b,s=m.d-t,t+=s/2,v*=0.8,s*=0.9,r=0;r<4;++r){q=A.e0.aA(0,A.i.D((f-r*0.25)/0.6,0,1))
J.bo(x.save())
p=r-1.5
x.translate(w+p*u*0.1,t)
x.rotate(p*0.18*q*180/3.141592653589793,0,0)
p=B.bs(A.H,s,v)
o=D.dt4[r]
p=B.bn(p,new B.aN(10,10))
$.R()
n=new B.ao(A.O,A.M,A.R,A.S,A.Q)
n.r=o.gp(0)
d.an(p,n)
x.restore()}C.z6(d,m.gbw(),f,1.2,new C.foX(d,m,e))},
iga(d,e,f){var x,w=e.b,v=new B.o(e.a/2,w*0.38),u=w*0.2,t=B.bs(v.a2(0,new B.o(0,-w*0.07-(1-A.e0.aA(0,A.i.D((f-0.2)/1,0,1)))*w*0.07)),u,w*0.17)
$.R()
x=B.K()
x.b=A.a9
x.c=w*0.03
x.r=A.cv.gp(0)
d.cC(t,3.141592653589793,3.141592653589793,!1,x)
C.iI(d,B.bs(v,u,w*0.26),10,A.bj)
C.lE(d,v,w*0.025,A.Gm)
u=B.bs(v.a2(0,new B.o(0,w*0.04)),w*0.05,w*0.012)
x=B.K()
x.r=A.Gm.gp(0)
d.aq(u,x)
if(f>1.2){u=A.i.F(f*2,1)
C.lE(d,v,w*(0.17+0.04*u),A.dA.j(0.25*(1-u)))}},
ig9(d,e,f){var x,w,v,u,t=e.b,s=e.a/2,r=t*0.34,q=new B.o(s,r),p=t*0.24
C.lE(d,q,p*1.1,A.bB)
C.lE(d,q,p,A.bL)
C.lE(d,q,p*0.9,A.cv)
x=d.c
J.bo(x.save())
x.translate(s,r)
r=f<1.4?1:0.3
d.hW(0,f*3*r)
C.lE(d,A.H,p*0.35,A.bw)
for(r=p*0.6,w=0;w<6;++w){v=B.bs(A.H,3,r)
$.R()
u=new B.ao(A.O,A.M,A.R,A.S,A.Q)
u.r=A.ab.gp(0)
d.aq(v,u)
x.rotate(29.999999999999996,0,0)}x.restore()
for(r=t*0.6-t*0.04,x=t*0.014,w=0;w<4;++w){v=f>0.4+w*0.5?A.b5:A.aT
$.R()
u=new B.ao(A.O,A.M,A.R,A.S,A.Q)
u.r=v.gp(0)
d.N(new B.o(s+(w-1.5)*t*0.06,r),x,u)}},
igc(d,e,f){var x,w,v,u,t,s,r,q,p,o,n=e.b,m=e.a,l=new B.o(m*0.62,n*0.34),k=n*0.22
C.lE(d,l,k*1.1,A.bB)
C.lE(d,l,k*0.7,A.dA.j(0.12))
x=B.bs(l.a2(0,new B.o(-k*1.15,0)),k*2,k*0.35)
$.R()
w=B.K()
w.r=A.bL.gp(0)
d.bZ(x,w)
for(x=n*0.12,w=n*0.15,v=n*0.07,u=d.c,t=m*0.12,s=0;s<3;++s){r=A.jE.aA(0,A.i.D((f-(0.2+s*0.6))/0.9,0,1))
q=B.ku(new B.o(t,n*(0.18+s*0.12)),l,r)
q.toString
J.bo(u.save())
u.translate(q.a,q.b)
u.rotate(0.4*(1-r)*180/3.141592653589793,0,0)
q=1-0.6*r
u.scale(q,q)
q=B.bs(A.H,w,x)
p=D.duQ[s]
q=B.bn(q,new B.aN(5,5))
o=new B.ao(A.O,A.M,A.R,A.S,A.Q)
o.r=p.gp(0)
d.an(q,o)
o=B.bs(A.H,3,v)
q=new B.ao(A.O,A.M,A.R,A.S,A.Q)
q.r=A.dv.gp(0)
d.aq(o,q)
u.restore()}},
igb(d,e,f){var x,w,v,u,t,s,r,q,p=null,o=e.b,n=e.a/2,m=o*0.32,l=new B.o(n,m)
for(x=f*0.7,w=0;w<3;++w){v=A.i.F(x+w/3,1)
$.R()
u=new B.ao(A.O,A.M,A.R,A.S,A.Q)
u.b=A.a9
u.c=3
u.r=A.aH.j(0.6*(1-v)).gp(0)
d.N(l,o*(0.12+0.22*v),u)}v=A.e0.aA(0,A.i.D(f/0.7,0,1))
x=d.c
J.bo(x.save())
x.translate(n,m)
d.bU(0,v)
m=$.R().r
n=y.v
u=new B.aG(m,A.ai,p,p,B.a([],n))
t=-o
u.E(new B.aZ(0,t*0.17))
s=o*0.14
r=t*0.11
u.E(new B.aq(s,r))
q=o*0.09
u.E(new B.c6(s,q,0,o*0.18))
s=t*0.14
u.E(new B.c6(s,q,s,r))
u.E(new B.bu())
r=B.K()
r.r=A.aH.gp(0)
d.af(u,r)
n=new B.aG(m,A.ai,p,p,B.a([],n))
n.E(new B.aZ(t*0.06,0))
n.E(new B.aq(t*0.015,o*0.05))
n.E(new B.aq(o*0.07,t*0.05))
t=B.K()
t.b=A.a9
t.c=o*0.03
t.d=A.bu
t.r=A.c.gp(0)
d.af(n,t)
x.restore()},
ifn(d,e,f){var x,w,v,u,t=e.b,s=t*0.15
for(x=e.a/2,w=t*0.2,v=0;v<6;++v){u=new B.o(x+(A.o.F(v,3)-1)*s*1.35,w+A.o.ar(v,3)*s*1.35)
C.z6(d,u,f,0.1+v*0.3,new C.fCi(d,u,s,v))}},
ifm(d,e,f){var x,w,v,u,t,s,r,q,p,o,n=e.b,m=A.i.D((f-0.1)/2,0,1)
for(x=m*6,w=e.a/2,v=n*0.56,u=n*0.035,t=0;t<6;++t){s=A.i.D(x-t,0,1)
r=n*(0.36-t*0.04)*2
r=B.bs(new B.o(w,v),r,r)
$.R()
q=new B.ao(A.O,A.M,A.R,A.S,A.Q)
q.b=A.a9
q.c=u
q.d=A.bu
q.r=D.da_[t].gp(0)
d.cC(r,3.141592653589793,3.141592653589793*s,!1,q)}p=3.141592653589793+3.141592653589793*m
o=new B.o(w+Math.cos(p)*n*0.2,v+Math.sin(p)*n*0.2)
C.lE(d,o,n*0.03,A.c)
C.aPU(d,o,o.a2(0,new B.o(n*0.06,-n*0.07)),5,A.e_)},
ifl(d,e,f){var x,w,v,u,t,s,r,q,p,o,n=e.b,m=e.a
for(x=f*7,w=m/2,v=n*0.5,u=n*0.07,t=0;t<7;++t){s=n*(0.08+0.2*(0.5+0.5*Math.sin(x+t*1.3)))
r=w+(t-3.5)*n*0.09
q=v-s
p=D.dal[t]
q=B.bn(new B.a1(r,q,r+u,q+s),new B.aN(5,5))
$.R()
r=new B.ao(A.O,A.M,A.R,A.S,A.Q)
r.r=p.gp(0)
d.an(q,r)}for(x=f*0.6,w=n*0.3,t=0;t<3;++t){o=A.i.F(x+t/3,1)
v=m*(0.3+0.4*t/2)+10*Math.sin(o*6)
u=w-o*n*0.2
r=1-o
q=A.c.j(r)
$.R()
p=new B.ao(A.O,A.M,A.R,A.S,A.Q)
p.r=q.gp(0)
d.N(new B.o(v,u),6,p)
v+=5
r=A.c.j(r)
p=new B.ao(A.O,A.M,A.R,A.S,A.Q)
p.c=2.5
p.d=A.bu
p.r=r.gp(0)
d.ah(new B.o(v,u+0),new B.o(v,u+-18),p)}},
ifo(d,e,f){var x,w,v,u,t,s,r,q=e.b
for(x=e.a/2,w=q*0.14,v=q*0.26,u=0;u<4;++u){t=A.i.D((f-u*0.3)/0.7,0,1)
if(t<=0)continue
s=G.XQ.aA(0,t)
C.Bl(d,"NGMY"[u],new B.o(x+(u-1.5)*q*0.2,w-(1-s)*q*0.25),v,D.dgZ[u],!0,!1,0)}r=A.i.D((f-1.4)/0.6,0,1)
x-=q*0.4
w=q*0.46
$.R()
v=B.K()
v.r=A.c.gp(0)
d.aq(new B.a1(x,w,x+q*0.8*r,w+4),v)},
a3T(d,e,f,g){var x=$.i5m[A.o.D(f,0,7)]
C.ib_(d,e,g,y.T.a(x[0]),y.m.a(x[1]))},
ju:function ju(d,e,f){this.a=d
this.b=e
this.c=f},
fD2:function fD2(d,e,f){this.a=d
this.b=e
this.c=f},
fpC:function fpC(d,e,f){this.a=d
this.b=e
this.c=f},
fq8:function fq8(d,e,f){this.a=d
this.b=e
this.c=f},
fq9:function fq9(d,e,f){this.a=d
this.b=e
this.c=f},
fqa:function fqa(d,e,f){this.a=d
this.b=e
this.c=f},
fne:function fne(d,e,f){this.a=d
this.b=e
this.c=f},
fnf:function fnf(d,e,f){this.a=d
this.b=e
this.c=f},
fnb:function fnb(d,e,f){this.a=d
this.b=e
this.c=f},
fnc:function fnc(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fng:function fng(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fnd:function fnd(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fC5:function fC5(d,e,f){this.a=d
this.b=e
this.c=f},
fC6:function fC6(d,e,f){this.a=d
this.b=e
this.c=f},
foW:function foW(d,e){this.a=d
this.b=e},
foX:function foX(d,e,f){this.a=d
this.b=e
this.c=f},
fCi:function fCi(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g}},D,E,F,O
J=c[1]
B=c[0]
A=c[2]
G=c[234]
I=c[187]
H=c[38]
K=c[102]
L=c[121]
M=c[101]
N=c[130]
C=a.updateHolder(c[28],C)
D=c[99]
E=c[43]
F=c[97]
O=c[253]
C.wY.prototype={}
C.wr.prototype={}
C.ym.prototype={}
C.XC.prototype={
S(){return new C.aGn(null,null)}}
C.aGn.prototype={
gQf(){var x,w=this,v=w.d
if(v===$){x=B.bl(null,A.ot,null,1,null,w)
x.cr(0)
w.d!==$&&B.bE()
w.d=x
v=x}return v},
gAu(){var x=this.e
return x===$?this.e=this.a.e:x},
gaRc(){var x=this.as
if(x===$)x=this.as=this.a.f?3:0
return x},
gazS(){var x=this.gQf().y
x=x==null?null:A.o.ar(x.a,1000)
return(x==null?0:x)/1000},
asI(){var x=this,w=x.Q
if(w!=null)w.a1(0)
x.Q=B.cy(B.dw(0,0,0,0,0,x.gaRc()>0&&x.gazS()<3.2?13:10),x.gc8o())},
c8p(){var x=this
if(x.c==null)return
if(x.f<0&&!x.r){x.m(new C.eQm(x))
H.dE(900,"",40,0,0.2,"noise")}x.asI()},
Y(){var x=this
x.a4()
x.w=B.cy(x.a.r,x.gb1a())
x.asI()
x.aY1()
H.dE(520,"",80,0,0.25,"tri")},
aY1(){var x=this.z
if(x!=null)x.a1(0)
this.z=B.cy(A.k2,new C.eQl(this))},
cbS(){var x=this.c
if(x!=null&&B.a6(x,!1).pY()){x=this.c
x.toString
B.a6(x,!1).O(this.gAu())}},
akj(){var x=this,w=x.w
if(w!=null)w.a1(0)
x.w=null
x.y=!0
x.aY1()},
az7(d){this.m(new C.eQj(this,d))
H.dE(900,"",40,0,0.3,"noise")},
b36(d){this.m(new C.eQn(this,d))
H.dE(700,"",60,0,0.3,"tri")},
t(){var x=this,w=x.w
if(w!=null)w.a1(0)
w=x.z
if(w!=null)w.a1(0)
w=x.Q
if(w!=null)w.a1(0)
x.gQf().t()
x.bA5()},
B(d){var x,w,v,u,t=this,s=null,r=B.l(10),q=B.L(t.gcbT(),A.r,6),p=B.a([new B.ac(0,A.G,C.iut(t.a.d).j(0.25),A.H,40)],y.V),o=B.l(4),n=y.p,m=B.a([B.c5(t.gQf(),new C.eQv(t),s)],n)
if(t.r)m.push(t.bFJ())
r=B.at(new B.fH(1.7777777777777777,B.r(s,B.bx(o,new B.an(A.a0,s,A.b1,A.t,m,s),A.aq),A.f,s,s,new B.p(s,s,q,r,p,s,A.n),s,s,s,s,s,s,s,s),s),s,s,s)
q=t.y
p=q?1:0
o=B.o1(s,A.aU,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s)
o=B.aI(s,s,s,s,B.X(A.cz,A.c,s,s,s,s),s,s,s,t.gb1a(),s,s,s,o,"Back to the board",s)
m=B.l(20)
x=t.f
w=t.a
o=B.A(B.a([o,A.b3,B.r(s,B.d(x>=0?w.c+" \xb7 "+D.kz[x].a:w.c+" \xb7 CH "+(t.gAu()+1),s,s,s,s,s,s,L.AP,s,s,s),A.f,s,s,new B.p(A.aU,s,s,m,s,s,A.n),s,s,s,s,A.md,s,s,s)],n),A.l,s,A.e,A.j,0,s,s)
m=t.ctx()
x=A.w.j(0.65)
w=B.l(18)
v=t.f
v=B.d(v>=0?D.kz[v].a:D.Ro[t.gAu()].a,s,s,s,s,s,s,A.hp,A.K,s,s)
u=t.f
return B.c4(s,A.w,B.bm(!0,B.az(A.c4,new B.an(A.a0,s,A.b1,A.t,B.a([r,B.zn(new B.du(!q,B.x(B.a([new B.D(D.bBI,o,s),A.am,m,A.b3,B.r(s,B.x(B.a([v,B.d(u>=0?D.kz[u].c:D.Ro[t.gAu()].b,s,s,s,s,s,s,M.aba,A.K,s,s)],n),A.l,s,A.e,A.P,0,A.p),A.f,s,s,new B.p(x,s,s,w,s,s,A.n),s,s,s,A.bg,A.bV,s,s,s)],n),A.l,s,A.e,A.j,0,A.p),s),A.b0,A.ix,p)],n),s),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new C.eQw(t),s,s,s,s,s,s,!1,A.a4),!0,!1,A.ag,!0,!0),s,!1,!1,s,s)},
ctx(){var x=this,w=null,v=new C.eQu(),u=A.w.j(0.72),t=B.l(22),s=B.L(A.aH.j(0.5),A.r,1)
return B.r(w,B.A(B.a([v.$3(A.wP,"CH \u2212",new C.eQp(x)),v.$3(A.i0,"CH +",new C.eQq(x)),v.$5$color$on(A.HH,"TV",new C.eQr(x),A.aH,x.f<0),v.$5$color$on(A.ze,"APPS",new C.eQs(x),A.bq,x.r),v.$5$color$on(A.CM,"ADS",new C.eQt(x),A.bT,x.f===0)],y.p),A.l,w,A.e,A.P,0,w,w),A.f,w,w,new B.p(u,w,s,t,w,w,A.n),w,w,w,w,A.a0Y,w,w,w)},
bFJ(){return new C.atw(this.a.d,this.gci8(),new C.eQi(this),null)},
gcbT(){switch(C.hhY(this.a.d)){case"apple":var x=A.dc
break
case"bo":x=D.FJ
break
case"sony":x=D.bfG
break
case"lg":x=A.eq
break
default:x=A.cs
break}return x}}
C.bxf.prototype={
a5(d,e){var x=this
return C.hht(d,e,x.b,x.d,x.e,x.c)},
aD(d){return!0}}
C.aOh.prototype={
t(){var x=this,w=x.a9$
if(w!=null)w.a6(0,x.gbB())
x.a9$=null
x.a3()},
aY(){this.b5()
this.b3()
this.bC()}}
C.atw.prototype={
S(){return new C.bnb()},
a6H(d,e){return this.d.$1(e)}}
C.bnb.prototype={
b1b(d){this.m(new C.eQf(this,d))
this.a.a6H(0,d)},
B(d){var x,w=this
switch(C.hhY(w.a.c)){case"lg":x=w.c4t()
break
case"sony":x=w.cBh()
break
case"apple":x=w.cbU()
break
case"bo":x=w.bGE()
break
default:x=w.cvA()
break}return x},
gafg(){var x=new B.V(Date.now(),0,!1)
return A.a.b_(A.o.u(B.dg(x)),2,"0")+":"+A.a.b_(A.o.u(B.fP(x)),2,"0")},
az8(d,e,f,g,h,i,j){var x,w,v=null,u=D.kz[d],t=this.d===d,s=u.d,r=B.ar(s,A.w,0.55)
r.toString
r=B.a([s,r],y.O)
s=B.l(h)
if(t)x=i
else x=A.L
x=B.L(x,A.r,t?2.5:0)
w=B.a([B.d(u.b,v,v,v,v,v,v,B.m(v,v,v,v,v,v,v,v,v,v,v,e,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],y.p)
if(g)w.push(new B.D(A.uv,B.d(u.a,v,1,A.a2,v,v,v,A.VN,v,v,v),v))
return B.az(v,B.r(v,B.x(w,A.l,v,A.ba,A.j,0,A.p),A.f,v,v,new B.p(v,v,x,s,v,new B.a8(A.aA,A.aE,A.x,r,v,v),A.n),v,f,v,v,v,v,v,j),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.eQg(this,d),v,v,v,v,v,v,!1,A.a4)},
b1c(d,e,f,g,h,i){return this.az8(d,e,f,!1,g,h,i)},
cvA(){var x,w,v,u,t,s,r=this,q=null,p=r.a.e,o=y.p,n=B.A(B.a([D.fNo,A.ae,D.fFk,A.b3,D.c0j,A.ae,D.bX0,A.ae,B.d(r.gafg(),q,q,q,q,q,q,D.aWj,q,q,q)],o),A.l,q,A.e,A.j,0,q,q),m=D.kz[r.d],l=B.d(m.a,q,q,q,q,q,q,A.l4,q,q,q)
m=B.d(m.c,q,1,A.a2,q,q,q,D.fwA,q,q,q)
x=A.c.j(0.08)
w=B.a([],o)
for(v=0;v<2;++v){u=new B.aN(8,8)
w.push(B.r(q,B.X(D.cuT[v],A.ab,q,q,q,17),A.f,q,q,new B.p(A.bA,q,q,new B.be(u,u,u,u),q,q,A.n),q,34,q,A.O_,q,q,q,34))}u=B.a([],o)
for(t=0;t<8;++t){s=r.d===t?1.12:1
u.push(new B.D(A.O_,new B.zo(r.az8(t,14,44,!0,8,A.aH,52),s,A.b0,A.h_,q,q),q))}w.push(B.E(B.ce(B.A(u,A.l,q,A.e,A.j,0,q,q),A.t,q,A.y,q,q,q,q,A.aL),1))
return B.az(q,B.r(q,B.x(B.a([n,A.b3,new B.bL(A.a7,q,q,l,q),new B.bL(A.a7,q,q,m,q),A.am,B.r(q,B.A(w,A.l,q,A.e,A.j,0,q,q),A.f,q,q,new B.p(x,q,q,A.Xv,q,q,A.n),q,q,q,q,A.Op,q,q,q)],o),A.l,q,A.e,A.j,0,A.p),A.f,q,q,D.b7u,q,q,q,q,G.als,q,q,q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,p,q,q,q,q,q,q,!1,A.a4)},
c4t(){var x=null,w=this.a.e,v=y.p
return B.az(x,B.r(x,B.x(B.a([B.A(B.a([B.r(x,D.fTE,A.f,x,x,new B.p(A.hG,x,x,B.l(10),x,x,A.n),x,x,x,x,A.n0,x,x,x),A.bm,D.fMi,A.b3,B.d(this.gafg(),x,x,x,x,x,x,A.EK,x,x,x)],v),A.l,x,A.e,A.j,0,x,x),A.b3,new B.a5(x,62,B.hP(x,new C.eQb(this),8,x,x,A.aL,new C.eQc(),!1),x)],v),A.E,x,A.e,A.j,0,A.p),A.f,x,x,D.b7F,x,x,x,x,O.O5,x,x,x),A.y,!1,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,w,x,x,x,x,x,x,!1,A.a4)},
cBh(){var x,w,v,u,t=this,s=null,r=D.kz[t.d],q=t.a.e,p=y.p,o=B.a([B.r(s,D.f9f,A.f,s,s,new B.p(A.dn,s,s,B.l(12),s,s,A.n),s,s,s,s,A.yX,s,s,s),A.ae],p)
for(x=0;x<3;++x){w=D.dp6[x]
v=w==="Apps"?A.c:A.aD
o.push(new B.D(A.iQ,B.d(w,s,s,s,s,s,s,new B.F(!0,v,s,s,s,s,9.5,A.U,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s),s,s,s),s))}o.push(A.b3)
o.push(B.d(t.gafg(),s,s,s,s,s,s,D.fvZ,s,s,s))
o=B.A(o,A.l,s,A.e,A.j,0,s,s)
v=r.d
u=B.ar(v,A.w,0.7)
u.toString
u=B.a([v,u],y.O)
v=B.l(10)
return B.az(s,B.r(s,B.x(B.a([o,A.fD,B.E(B.A(B.a([B.E(B.r(s,B.x(B.a([B.d(r.b,s,s,s,s,s,s,A.pZ,s,s,s),B.d(r.a,s,s,s,s,s,s,A.o0,s,s,s),B.d(r.c,s,2,A.a2,s,s,s,D.fCH,s,s,s),A.cQ,B.az(s,B.r(s,D.fJ2,A.f,s,s,new B.p(A.c,s,s,B.l(10),s,s,A.n),s,s,s,s,A.yX,s,s,s),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new C.eQd(t),s,s,s,s,s,s,!1,A.a4)],p),A.E,s,A.mr,A.j,0,A.p),A.f,s,s,new B.p(s,s,s,v,s,new B.a8(A.a7,A.aa,A.x,u,s,s),A.n),s,s,s,s,A.cm,s,s,s),5),A.ae,B.E(B.ip(!0,s,s,A.y,D.fgm,new C.eQe(t),8,A.ag,s,A.ah,!1),6)],p),A.l,s,A.e,A.j,0,s,s),1)],p),A.E,s,A.e,A.j,0,A.p),A.f,D.bsg,s,s,s,s,s,s,A.hg,s,s,s),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,q,s,s,s,s,s,s,!1,A.a4)},
cbU(){var x,w,v,u,t=this,s=null,r=t.a.e,q=y.p,p=B.A(B.a([D.c0W,A.r9,D.fZR,A.b3,B.d(t.gafg(),s,s,s,s,s,s,A.EM,s,s,s)],q),A.l,s,A.e,A.j,0,s,s),o=B.a([],q)
for(x=0;x<8;++x){w=t.d===x
v=w?6:0
u=w?D.duX:A.Sn
w=w?1.18:1
o.push(new B.D(A.f5,B.cT(s,new B.zo(t.b1c(x,20,44,12,A.c,44),w,A.b0,A.eJ,s,s),s,s,A.b0,new B.p(s,s,s,s,u,s,A.n),A.eJ,s,s,s,new B.S(0,0,0,v),s,s,s,s),s))}return B.az(s,B.r(s,B.x(B.a([p,A.b3,new B.a5(s,68,B.ce(B.A(o,A.dO,s,A.e,A.j,0,s,s),A.t,s,A.y,s,s,s,s,A.aL),s),A.ax,B.d(D.kz[t.d].a,s,s,s,s,s,s,A.p3,s,s,s)],q),A.l,s,A.e,A.j,0,A.p),A.f,s,s,D.b7w,s,s,s,s,D.a0a,s,s,s),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,r,s,s,s,s,s,s,!1,A.a4)},
bGE(){var x,w,v,u,t,s,r=this,q=null,p=r.a.e,o=D.kz[r.d],n=y.p
o=B.E(B.x(B.a([D.fIA,A.b3,B.d(o.b,q,q,q,q,q,q,A.mB,q,q,q),A.ax,B.d(o.a,q,q,q,q,q,q,D.fnS,q,q,q),A.bG,B.d(o.c,q,q,q,q,q,q,D.fD_,q,q,q),A.am,B.az(q,B.r(q,D.h0Z,A.f,q,q,D.b81,q,q,q,q,D.bAS,q,q,q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.eQ9(r),q,q,q,q,q,q,!1,A.a4),A.b3],n),A.E,q,A.e,A.j,0,A.p),4)
x=B.r(q,q,A.f,D.bq_,q,q,q,q,q,A.f4,q,q,q,0.6)
w=B.a([],n)
for(v=0;v<8;++v){u=D.kz[v]
t=r.d===v
s=t?D.u8:D.ag8
t=t?12:10.5
w.push(B.az(q,new B.D(A.wl,B.d(u.a,q,q,q,q,q,q,new B.F(!0,s,q,"serif",q,q,t,A.k5,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q),q,q,q),q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.eQa(r,v),q,q,q,q,q,q,!1,A.a4))}return B.az(q,B.r(q,B.A(B.a([o,x,B.E(B.cl(w,q,q,q,q,q,A.ah,!1),3)],n),A.l,q,A.e,A.j,0,q,q),A.f,D.bvX,q,q,q,q,q,q,A.GW,q,q,q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,p,q,q,q,q,q,q,!1,A.a4)}}
C.ju.prototype={}
var z=a.updateTypes(["~(uP,av,G)","~()","XC(Z,bw<G>,bw<G>)","~(H)"])
C.fCw.prototype={
$1(d){var x=null,w=B.fq(x,A.ct,x,1,x,B.cQ(x,x,x,x,x,x,x,x,x,B.m(x,x,this.b,x,x,x,x,x,x,x,x,d,x,x,A.u,x,x,!0,x,x,x,x,x,x,x,x),this.a),A.a5,A.bX,x,A.dB,A.bY)
w.e5()
return w},
$S:255}
C.fCq.prototype={
$1(d){return Math.min(this.a*0.085,this.b*0.44/(d.length*0.62))},
$S:357}
C.fWp.prototype={
$1(d){var x=this.b,w=B.ku(this.a,x,d)
w.toString
x=B.ku(x,this.c,d)
x.toString
x=B.ku(w,x,d)
x.toString
return x},
$S:2004}
C.foA.prototype={
$2(d,e){return A.i.D((this.a-d)/e,0,1)},
$S:81}
C.fox.prototype={
$1(d){return A.dE.aA(0,d)},
$S:5}
C.foz.prototype={
$2(d,e){var x=this.b
return new B.o(this.a.a+d*x,this.c.b-e*x)},
$S:359}
C.foy.prototype={
$5(d,e,f,g,h){var x,w,v,u=this.a.$2(h,0.5)
if(u<=0)return
x=this.b
w=x.c
J.bo(w.save())
w.translate(f.a,f.b)
x.bU(0,A.i.D(A.l9.aA(0,u),0.01,1.3))
v=this.c
E.fWq(x,A.H,g,d,v,v>4.5?0.6:0)
C.hFe(x,new B.o(0,g*1.42),g,e)
w.restore()},
$S:765}
C.ftf.prototype={
$1(d){var x=this,w=null,v=x.c?A.u:A.a8
v=B.fq(w,A.ct,w,1,w,B.cQ(w,w,w,w,w,w,w,w,w,B.m(w,w,x.b,w,w,w,w,w,w,w,w,d,w,w,v,w,w,!0,w,x.d,w,w,w,w,w,w),x.a),A.a5,A.bX,w,A.dB,A.bY)
v.e5()
return v},
$S:255}
C.fr1.prototype={
$1(d){var x=this,w=null,v=x.c?A.u:A.U
v=B.fq(w,A.ct,w,1,w,B.cQ(w,w,w,w,w,w,w,w,w,B.m(w,w,x.b,w,w,w,w,w,w,w,w,d,w,w,v,w,w,!0,w,x.d,w,w,w,w,w,w),x.a),A.a5,A.bX,w,A.dB,A.bY)
v.e5()
return v},
$S:255}
C.fCS.prototype={
$2(d,e){return A.i.D((this.a-d)/e,0,1)},
$S:81}
C.fCO.prototype={
$1(d){return A.dE.aA(0,d)},
$S:5}
C.fCR.prototype={
$2(d,e){var x=this.b
return new B.o(this.a+d*x,e*x)},
$S:359}
C.fCP.prototype={
$5(d,e,f,g,h){var x,w,v,u=this,t=u.a.$2(h,0.6)
if(t<=0)return
x=u.b
w=x.c
J.bo(w.save())
w.translate(f.a,f.b)
x.bU(0,A.i.D(A.l9.aA(0,t),0.01,1.3))
v=u.c
E.fWq(x,A.H,g,d,v,u.d>9.5?0.5+0.3*Math.sin(v*3+d):0)
C.hFe(x,new B.o(0,g*1.42),g,e)
w.restore()},
$S:765}
C.fCQ.prototype={
$3(d,e,f){var x,w,v,u,t=this.a.$2(f,0.5)
if(t<=0)return
x=A.i.D(A.l9.aA(0,t),0.01,1.3)*(1+0.07*Math.sin(this.b*6))
w=this.c
v=e*x
$.R()
u=B.K()
u.r=A.bE.gp(0)
w.N(d,v,u)
u=B.K()
u.b=A.a9
u.c=2
u.r=A.c.gp(0)
w.N(d,v,u)
C.aQF(w,"\u2665",d.aK(0,new B.o(e*0.5*x,e*0.62*x)),e*1.3*x,A.c,A.bn,0,null)},
$S:455}
C.fCT.prototype={
$2(d,e){var x,w,v=this.a,u=v.a
v=v.c-u
u+=v*0.08
x=this.b
w=x*d
return new B.a1(u,w,u+v*0.84,w+x*e)},
$S:2006}
C.h3L.prototype={
$3(d,e,f){var x=this
return new C.XC(x.d,x.e,x.a,x.c,x.b,null)},
$C:"$3",
$R:3,
$S:z+2}
C.h3M.prototype={
$4(d,e,f,g){var x=y.t
return new B.d1(e,!1,B.ig(A.A,g,null,new B.bg(B.cG(A.cx,e,null),new B.br(0.85,1,x),x.k("bg<bP.T>"))),null)},
$C:"$4",
$R:4,
$S:33}
C.eQm.prototype={
$0(){var x,w=this.a
w.e=A.o.F(w.gAu()+1,10)
x=w.gQf().y
x=x==null?null:A.o.ar(x.a,1000)
w.x=x==null?1:x
w.as=w.gazS()},
$S:0}
C.eQl.prototype={
$0(){var x=this.a
if(x.c!=null&&!x.r)x.m(new C.eQk(x))},
$S:0}
C.eQk.prototype={
$0(){return this.a.y=!1},
$S:0}
C.eQj.prototype={
$0(){var x,w=this.a
w.f=-1
w.e=A.o.F(w.gAu()+this.b,10)
if(w.gAu()<0)w.e=w.gAu()+10
x=w.gQf().y
x=x==null?null:A.o.ar(x.a,1000)
w.x=x==null?1:x
w.as=w.gazS()
w.asI()
w.akj()},
$S:0}
C.eQn.prototype={
$0(){var x=this.a
x.f=this.b
x.r=!1
x.akj()},
$S:0}
C.eQw.prototype={
$0(){var x=this.a
return x.m(x.gcGo())},
$S:0}
C.eQv.prototype={
$2(d,e){var x,w=null,v=this.a,u=v.gQf().y,t=u==null?w:A.o.ar(u.a,1000),s=(t==null?0:t)/1000,r=v.x===0&&v.a.f?s:99
u=v.gAu()
x=r<3?s:Math.max(0,s-v.gaRc())
return B.b2(w,w,w,new C.bxf(u,v.f,x,r,w),A.fQ)},
$S:55}
C.eQu.prototype={
$5$color$on(d,e,f,g,h){var x=null,w=h?g.j(0.28):A.c.j(0.08),v=B.l(14),u=B.L(h?g:A.aT,A.r,1)
return B.az(x,B.r(x,B.x(B.a([B.X(d,g,x,x,x,20),A.vC,B.d(e,x,x,x,x,x,x,B.m(x,x,g,x,x,x,x,x,x,x,x,9.5,x,x,A.I,x,x,!0,x,x,x,x,x,x,x,x),x,x,x)],y.p),A.l,x,A.e,A.P,0,A.p),A.f,x,x,new B.p(w,x,u,v,x,x,A.n),x,x,x,A.jr,A.kT,x,x,56),A.y,!1,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,f,x,x,x,x,x,x,!1,A.a4)},
$3(d,e,f){return this.$5$color$on(d,e,f,A.c,!1)},
$4$color(d,e,f,g){return this.$5$color$on(d,e,f,g,!1)},
$S:2007}
C.eQp.prototype={
$0(){return this.a.az7(-1)},
$S:0}
C.eQq.prototype={
$0(){return this.a.az7(1)},
$S:0}
C.eQr.prototype={
$0(){return this.a.az7(0)},
$S:0}
C.eQs.prototype={
$0(){var x=this.a
return x.m(new C.eQo(x))},
$S:0}
C.eQo.prototype={
$0(){var x=this.a
x.r=!x.r
x.akj()},
$S:0}
C.eQt.prototype={
$0(){return this.a.b36(0)},
$S:0}
C.eQi.prototype={
$0(){var x=this.a
return x.m(new C.eQh(x))},
$S:0}
C.eQh.prototype={
$0(){return this.a.r=!1},
$S:0}
C.fD1.prototype={
$1(d){var x=null,w=B.fq(x,A.ct,x,1,x,B.cQ(x,x,x,x,x,x,x,x,x,B.m(x,x,this.b,x,x,x,x,x,x,x,x,d,x,x,A.u,x,x,!0,x,0.4,x,x,x,x,x,x),this.a),A.a5,A.bX,x,A.dB,A.bY)
w.e5()
return w},
$S:255}
C.eQf.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.eQg.prototype={
$0(){return this.a.b1b(this.b)},
$S:0}
C.eQc.prototype={
$2(d,e){return A.bm},
$S:36}
C.eQb.prototype={
$2(d,e){var x=null,w=this.a,v=w.d===e?1.1:1
v=B.a([B.uJ(w.b1c(e,18,46,6,A.c,80),A.b0,A.h_,v)],y.p)
if(w.d===e)v.push(new B.D(A.uv,B.d(D.kz[e].a,x,x,x,x,x,x,D.fB7,x,x,x),x))
return B.x(v,A.l,x,A.e,A.P,0,A.p)},
$S:687}
C.eQd.prototype={
$0(){var x=this.a
return x.a.a6H(0,x.d)},
$S:0}
C.eQe.prototype={
$2(d,e){return this.a.az8(e,15,1/0,!0,8,A.c,1/0)},
$S:41}
C.eQ9.prototype={
$0(){var x=this.a
return x.a.a6H(0,x.d)},
$S:0}
C.eQa.prototype={
$0(){return this.a.b1b(this.b)},
$S:0}
C.fD2.prototype={
$1(d){var x=null,w=this.c?A.u:A.a8
w=B.fq(x,A.ct,x,1,x,B.cQ(x,x,x,x,x,x,x,x,x,B.m(x,x,this.b,x,x,x,x,x,x,x,x,d,x,x,w,x,x,!0,x,0.4,x,x,x,x,x,x),this.a),A.a5,A.bX,x,A.dB,A.bY)
w.e5()
return w},
$S:255}
C.fpC.prototype={
$0(){var x=this.a,w=this.b,v=this.c
v=v.d-v.b
C.iI(x,B.bs(w,v*0.2,v*0.14),4,A.bl)
C.iI(x,B.bs(w,v*0.13,v*0.09),3,A.no)},
$S:0}
C.fq8.prototype={
$0(){var x,w,v,u,t,s=this.a,r=this.b,q=this.c,p=q.c-q.a
q=(q.d-q.b)*0.12
C.iI(s,B.bs(r,q,p*0.16),6,D.a_9)
for(x=r.a,r=r.b+0,w=0;w<3;++w){v=D.cBo[w]
u=v.b
v=B.bs(new B.o(x+v.a*p,r),q,4)
$.R()
t=new B.ao(A.O,A.M,A.R,A.S,A.Q)
t.r=u.gp(u)
s.aq(v,t)}},
$S:0}
C.fq9.prototype={
$0(){var x=this.a,w=this.b,v=this.c
v=v.d-v.b
C.lE(x,w,v*0.13,A.ay)
C.lE(x,w.a2(0,new B.o(-3,-4)),v*0.04,A.c.j(0.7))},
$S:0}
C.fqa.prototype={
$0(){var x=this.a,w=this.b,v=this.c
v=v.d-v.b
C.iI(x,B.bs(w,v*0.26,v*0.16),5,A.bl)
v=B.bs(w,v*0.2,4)
$.R()
w=B.K()
w.r=A.c.gp(0)
x.aq(v,w)},
$S:0}
C.fne.prototype={
$0(){return C.foj(this.a,this.b,this.c*0.15,A.bT)},
$S:0}
C.fnf.prototype={
$0(){var x,w,v=this.a,u=this.b,t=this.c
C.lE(v,u,t*0.045,A.bd)
x=new B.aG($.R().r,A.ai,null,null,B.a([],y.v))
w=u.a
u=u.b
x.E(new B.aZ(w-t*0.02,u))
x.E(new B.aq(w-t*0.005,u+t*0.015))
x.E(new B.aq(w+t*0.022,u-t*0.014))
t=B.K()
t.b=A.a9
t.c=3
t.r=A.c.gp(0)
v.af(x,t)},
$S:0}
C.fnb.prototype={
$4(d,e,f,g){var x=this.a
C.z6(x,d.gbw(),this.b,f,new C.fnc(x,d,this.c,e,g))},
$S:2008}
C.fnc.prototype={
$0(){var x,w,v,u,t=this,s=t.a,r=t.b
C.iI(s,r,t.c*0.05,t.d)
x=r.a
w=x+12
v=r.gbw().b-9
x=r.c-x
u=t.e
C.iI(s,new B.a1(w,v,w+x*0.6,v+6),3,u.j(0.8))
r=r.gbw().b+3
C.iI(s,new B.a1(w,r,w+x*0.4,r+6),3,u.j(0.5))},
$S:0}
C.fng.prototype={
$0(){var x=this,w=x.d?A.bj:A.an
return C.hev(x.a,x.b,x.c*0.065,w)},
$S:0}
C.fnd.prototype={
$0(){var x=this
return C.foj(x.a,x.b,x.c*0.075,D.dio[x.d])},
$S:0}
C.fC5.prototype={
$0(){var x=this.a,w=this.b,v=this.c,u=v*0.16
C.iI(x,B.bs(w,u,v*0.2),6,D.bf8)
v=B.bs(w,u,v*0.03)
$.R()
u=B.K()
u.r=A.d_.gp(0)
x.aq(v,u)},
$S:0}
C.fC6.prototype={
$0(){var x,w,v,u=this.a,t=this.b,s=this.c
C.lE(u,t.a2(0,new B.o(s*0.11,-s*0.07)),s*0.045,A.bd)
x=new B.aG($.R().r,A.ai,null,null,B.a([],y.v))
w=t.a
v=s*0.09
t=t.b
x.E(new B.aZ(w+v,t-s*0.07))
x.E(new B.aq(w+s*0.105,t-s*0.055))
x.E(new B.aq(w+s*0.135,t-v))
v=B.K()
v.b=A.a9
v.c=3
v.r=A.c.gp(0)
u.af(x,v)},
$S:0}
C.foW.prototype={
$0(){return C.aPt(this.a,this.b,0,A.cH)},
$S:0}
C.foX.prototype={
$0(){var x=this.b
return C.aPt(this.a,B.bs(x.gbw().a2(0,new B.o(0,-this.c.b*0.01)),(x.d-x.b)*0.9,(x.c-x.a)*0.9),1,A.cH)},
$S:0}
C.fCi.prototype={
$0(){var x=this,w=x.a,v=x.b,u=x.c
C.iI(w,B.bs(v,u,u),u*0.28,D.cX2[x.d])
C.lE(w,v,u*0.22,A.c.j(0.9))},
$S:0};(function aliases(){var x=C.aOh.prototype
x.bA5=x.t})();(function installTearOffs(){var x=a._instance_0u,w=a._instance_1u,v=a.installStaticTearOff
var u
x(u=C.aGn.prototype,"gc8o","c8p",1)
x(u,"gb1a","cbS",1)
x(u,"gcGo","akj",1)
w(u,"gci8","b36",3)
v(C,"iqK",3,null,["$3"],["i70"],0,0)
v(C,"iqM",3,null,["$3"],["i72"],0,0)
v(C,"iqJ",3,null,["$3"],["i7_"],0,0)
v(C,"iqL",3,null,["$3"],["i71"],0,0)
v(C,"iqO",3,null,["$3"],["i7K"],0,0)
v(C,"iqN",3,null,["$3"],["i7J"],0,0)
v(C,"iqQ",3,null,["$3"],["i7M"],0,0)
v(C,"iqP",3,null,["$3"],["i7L"],0,0)
v(C,"iqD",3,null,["$3"],["i5p"],0,0)
v(C,"iqB",3,null,["$3"],["i5n"],0,0)
v(C,"iqE",3,null,["$3"],["i5q"],0,0)
v(C,"iqC",3,null,["$3"],["i5o"],0,0)
v(C,"iqR",3,null,["$3"],["i8s"],0,0)
v(C,"iqS",3,null,["$3"],["i8t"],0,0)
v(C,"iqT",3,null,["$3"],["i8u"],0,0)
v(C,"iqU",3,null,["$3"],["i8v"],0,0)
v(C,"iqX",3,null,["$3"],["if9"],0,0)
v(C,"iqY",3,null,["$3"],["ifg"],0,0)
v(C,"iqV",3,null,["$3"],["if7"],0,0)
v(C,"iqW",3,null,["$3"],["if8"],0,0)
v(C,"iqG",3,null,["$3"],["i6r"],0,0)
v(C,"iqF",3,null,["$3"],["i6q"],0,0)
v(C,"iqH",3,null,["$3"],["i6s"],0,0)
v(C,"iqI",3,null,["$3"],["i6t"],0,0)
v(C,"ir3",3,null,["$3"],["iga"],0,0)
v(C,"ir2",3,null,["$3"],["ig9"],0,0)
v(C,"ir5",3,null,["$3"],["igc"],0,0)
v(C,"ir4",3,null,["$3"],["igb"],0,0)
v(C,"ir0",3,null,["$3"],["ifn"],0,0)
v(C,"ir_",3,null,["$3"],["ifm"],0,0)
v(C,"iqZ",3,null,["$3"],["ifl"],0,0)
v(C,"ir1",3,null,["$3"],["ifo"],0,0)})();(function inheritance(){var x=a.mixinHard,w=a.inheritMany,v=a.inherit
w(B.ht,[C.fCw,C.fCq,C.fWp,C.fox,C.foy,C.ftf,C.fr1,C.fCO,C.fCP,C.fCQ,C.h3L,C.h3M,C.eQu,C.fD1,C.fD2,C.fnb])
w(B.jy,[C.foA,C.foz,C.fCS,C.fCR,C.fCT,C.eQv,C.eQc,C.eQb,C.eQe])
w(B.aE,[C.wY,C.wr,C.ym,C.ju])
w(B.af,[C.XC,C.atw])
w(B.ah,[C.aOh,C.bnb])
v(C.aGn,C.aOh)
w(B.iJ,[C.eQm,C.eQl,C.eQk,C.eQj,C.eQn,C.eQw,C.eQp,C.eQq,C.eQr,C.eQs,C.eQo,C.eQt,C.eQi,C.eQh,C.eQf,C.eQg,C.eQd,C.eQ9,C.eQa,C.fpC,C.fq8,C.fq9,C.fqa,C.fne,C.fnf,C.fnc,C.fng,C.fnd,C.fC5,C.fC6,C.foW,C.foX,C.fCi])
v(C.bxf,B.mn)
x(C.aOh,B.cc)})()
B.iT(b.typeUniverse,JSON.parse('{"XC":{"af":[],"v":[]},"aGn":{"ah":["XC"]},"bxf":{"aC":[]},"atw":{"af":[],"v":[]},"bnb":{"ah":["atw"]},"Oh":{"af":[],"v":[]}}'))
var y=(function rtii(){var x=B.as
return{L:x("O<T3>"),V:x("O<ac>"),O:x("O<u>"),v:x("O<fT>"),C:x("O<+(G,G,G)>"),s:x("O<n>"),p:x("O<v>"),f:x("O<ju>"),n:x("O<G>"),T:x("ai<u>"),m:x("ai<ju>"),t:x("br<G>"),S:x("H")}})();(function constants(){var x=a.makeConstList
D.agp=new B.u(1,0.0196078431372549,0.03137254901960784,0.058823529411764705,A.q)
D.bu0=new B.u(1,0.043137254901960784,0.10196078431372549,0.2,A.q)
D.dlG=x([D.agp,D.bu0],y.O)
D.c9n=new B.a8(A.b4,A.b8,A.x,D.dlG,null,null)
D.b7u=new B.p(null,null,null,null,null,D.c9n,A.n)
D.brC=new B.u(1,0.42745098039215684,0.47843137254901963,0.5764705882352941,A.q)
D.bga=new B.u(1,0.16862745098039217,0.1803921568627451,0.26666666666666666,A.q)
D.bhm=new B.u(1,0.4823529411764706,0.29411764705882354,0.41568627450980394,A.q)
D.dyf=x([D.brC,D.bga,D.bhm],y.O)
D.c7I=new B.a8(A.aA,A.aE,A.x,D.dyf,null,null)
D.b7w=new B.p(null,null,null,null,null,D.c7I,A.n)
D.b2I=new B.da(0.5,-0.6)
D.bvl=new B.u(1,0.22745098039215686,0.054901960784313725,0.10980392156862745,A.q)
D.dgF=x([D.bvl,A.eq],y.O)
D.ezY=new B.bY(D.b2I,1.3,A.x,null,0,D.dgF,null,null)
D.b7F=new B.p(null,null,null,null,null,D.ezY,A.n)
D.u8=new B.u(1,0.8392156862745098,0.7176470588235294,0.4823529411764706,A.q)
D.b5L=new B.ay(D.u8,1,A.r,-1)
D.b5Y=new B.bH(A.a1,A.a1,D.b5L,A.a1)
D.b81=new B.p(null,null,D.b5Y,null,null,null,A.n)
D.bf8=new B.u(1,0.8392156862745098,0.6352941176470588,0.3568627450980392,A.q)
D.afD=new B.u(0.9490196078431372,0.06666666666666667,0.07450980392156863,0.09411764705882353,A.q)
D.bfG=new B.u(1,0.16470588235294117,0.16470588235294117,0.17647058823529413,A.q)
D.Yg=new B.u(1,0.16862745098039217,0.1843137254901961,0.21176470588235294,A.q)
D.bfK=new B.u(1,0.00784313725490196,0.01568627450980392,0.03529411764705882,A.q)
D.ag8=new B.u(1,0.6588235294117647,0.6235294117647059,0.5647058823529412,A.q)
D.Mp=new B.u(1,0.24705882352941178,0.5607843137254902,0.30196078431372547,A.q)
D.FJ=new B.u(1,0.7215686274509804,0.6980392156862745,0.6549019607843137,A.q)
D.agR=new B.u(1,0.8784313725490196,0.6745098039215687,0.4117647058823529,A.q)
D.bk7=new B.u(1,0.8509803921568627,0.6549019607843137,0.3764705882352941,A.q)
D.MG=new B.u(1,1,0.23137254901960785,0.12156862745098039,A.q)
D.ahc=new B.u(1,0.00784313725490196,0.011764705882352941,0.0392156862745098,A.q)
D.yf=new B.u(1,0.06666666666666667,0.0784313725490196,0.09411764705882353,A.q)
D.bnQ=new B.u(1,0.9568627450980393,0.8509803921568627,0.6588235294117647,A.q)
D.yj=new B.u(1,0.054901960784313725,0.07058823529411765,0.09411764705882353,A.q)
D.aiu=new B.u(1,0.24705882352941178,0.16470588235294117,0.0784313725490196,A.q)
D.aiF=new B.u(1,0.4196078431372549,0.24705882352941178,0.11372549019607843,A.q)
D.bq_=new B.u(1,0.2901960784313726,0.26666666666666666,0.23529411764705882,A.q)
D.iL=new B.u(1,0.043137254901960784,0.12156862745098039,0.29411764705882354,A.q)
D.bqw=new B.u(1,0.7529411764705882,0.5411764705882353,0.2901960784313726,A.q)
D.mR=new B.u(1,0.09019607843137255,0.09019607843137255,0.10980392156862745,A.q)
D.bsc=new B.u(1,0.1843137254901961,0.43529411764705883,0.23137254901960785,A.q)
D.bsg=new B.u(1,0.08627450980392157,0.09411764705882353,0.10980392156862745,A.q)
D.a_5=new B.u(1,1,0.9529411764705882,0.6274509803921569,A.q)
D.a_9=new B.u(1,0.8392156862745098,0.7254901960784313,0.5490196078431373,A.q)
D.bvX=new B.u(1,0.10196078431372549,0.09019607843137255,0.0784313725490196,A.q)
D.bAS=new B.S(0,0,0,1)
D.bBI=new B.S(10,10,10,0)
D.a0a=new B.S(10,6,10,8)
D.alI=new B.S(14,10,10,10)
D.Pd=new B.a0(62970,"MaterialIcons",!1)
D.aqm=new B.a0(983316,"MaterialIcons",!1)
D.pA=new B.a0(983617,"MaterialIcons",!1)
D.bX0=new B.ae(A.D4,13,A.ab,null,null,null)
D.c0j=new B.ae(A.eU,13,A.ab,null,null,null)
D.bSD=new B.a0(983768,"MaterialIcons",!1)
D.c0W=new B.ae(D.bSD,13,A.c,null,null,null)
D.c6D=new B.a8(A.b4,A.b8,A.x,I.RW,null,null)
D.dkk=x([A.dC,A.a_,A.G1],y.O)
D.c7H=new B.a8(A.b4,A.b8,A.x,D.dkk,null,null)
D.Mv=new B.u(1,0.11764705882352941,0.30980392156862746,0.6392156862745098,A.q)
D.cOq=x([D.iL,D.Mv,A.av,A.bM],y.O)
D.dpn=x([0,0.42,0.8,1],y.n)
D.c7K=new B.a8(A.b4,A.b8,A.x,D.cOq,D.dpn,null)
D.afG=new B.u(1,0.12156862745098039,0.1411764705882353,0.18823529411764706,A.q)
D.cak=x(["$12","$8","$25"],y.s)
D.cb5=x(["Add every person","Link mums, dads, kids","Keep it for ever"],y.s)
D.auq=x([A.cH,A.aF,A.dN,A.fq],y.O)
D.Ux=new B.y(2,3)
D.Uy=new B.y(3,4)
D.cuT=x([A.lO,A.ze],B.as("O<a0>"))
D.cvu=x([A.c,A.bj,A.b9,A.b5,A.nu,A.ay,A.d5],y.O)
D.eUn=new B.y(-0.04,A.bD)
D.eZY=new B.y(0,A.aF)
D.eH_=new B.y(0.04,A.av)
D.cBo=x([D.eUn,D.eZY,D.eH_],B.as("O<+(G,u)>"))
D.egB=new C.ym("NGMY Tree Story","A family grows, one branch at a time")
D.egA=new C.ym("NGMY Store","Open the doors to something new")
D.egD=new C.ym("NGMY Construction Lab","Build, wire and finish a real house")
D.egw=new C.ym("NGMY Electronics Lab","Build circuits that really light up")
D.egz=new C.ym("NGMY Advisors","Say hi to a friendly advisor")
D.egx=new C.ym("Spark Adventure","Follow Sparky round a circuit board")
D.egE=new C.ym("NGMY Game Center","Play games and win coins")
D.egy=new C.ym("NGMY Business Cards","Make a card people remember")
D.egv=new C.ym("NGMY Vault","Keep what matters safe")
D.egC=new C.ym("NGMY Studios","Make music, art, titles and more")
D.Ro=x([D.egB,D.egA,D.egD,D.egw,D.egz,D.egx,D.egE,D.egy,D.egv,D.egC],B.as("O<ym>"))
D.hBB=new C.ju("NGMY Game Center","Lots of games in one place",C.iqR())
D.hBY=new C.ju("Play","Tap, jump and catch the coins",C.iqS())
D.hBC=new C.ju("Beat the score","Climb the board every day",C.iqT())
D.hBL=new C.ju("Win coins","Win, celebrate, play again",C.iqU())
D.cJ_=x([D.hBB,D.hBY,D.hBC,D.hBL],y.f)
D.cLU=x([A.bT,A.aH,A.dA,A.b5,A.cG],y.O)
D.f3r=new B.b5(-0.2,0.46,0.12)
D.f0w=new B.b5(0.2,0.46,0.12)
D.f1l=new B.b5(0,0.52,0.15)
D.f_A=new B.b5(0,0.7,0.1)
D.cP8=x([D.f3r,D.f0w,D.f1l,D.f_A],y.C)
D.cX2=x([A.aH,A.b5,A.cG,A.bT,A.bj,A.bq],y.O)
D.hBO=new C.ju("NGMY Studios","A studio for every idea",C.ir0())
D.hBT=new C.ju("Paint with light","Colours that glow",C.ir_())
D.hBR=new C.ju("Make music","Beats, notes and tunes",C.iqZ())
D.hBA=new C.ju("Add your title","Moving words for any picture",C.ir1())
D.cY1=x([D.hBO,D.hBT,D.hBR,D.hBA],y.f)
D.d2x=x([A.d_,A.fH],y.O)
D.d2B=x([A.cH,A.d7],y.O)
D.hBX=new C.ju("NGMY Business Cards","Design a card in seconds",C.iqG())
D.hBK=new C.ju("Make it yours","Pick your colours and your look",C.iqF())
D.hBz=new C.ju("Share it","One tap and it is on their phone",C.iqH())
D.hBy=new C.ju("Be remembered","Cards people keep",C.iqI())
D.d4z=x([D.hBX,D.hBK,D.hBz,D.hBy],y.f)
D.eHF=new B.y("Chairs",120)
D.eHI=new B.y("Cloth",80)
D.eI1=new B.y("Delivery",25)
D.aAo=x([D.eHF,D.eHI,D.eI1],B.as("O<+(n,H)>"))
D.da_=x([A.ay,A.av,A.bj,A.b5,A.aH,A.bq],y.O)
D.dal=x([A.aH,A.b5,A.bj,A.cG,A.bT,A.bq,A.aH],y.O)
D.daq=x([A.cY,A.eX],y.O)
D.S0=x([A.ay,A.d5,A.av],y.O)
D.dc4=x([A.aF,A.kL],y.O)
D.dds=x([A.jY,A.cA],y.O)
D.dI_=new C.wr("NGMY Ads","\ud83d\udce2","Every NGMY promotion, as cartoons",A.bT,-1)
D.dHV=new C.wr("Civic Registry","\ud83e\udeaa","Enroll your family in your community",A.d5,0)
D.dI0=new C.wr("Jobs","\ud83d\udcbc","Find work and get hired",A.av,1)
D.dI5=new C.wr("NGMY Store","\ud83d\udecd\ufe0f","African food and traditions",A.fq,2)
D.dI6=new C.wr("Kiswahili","\ud83d\udde3\ufe0f","Learn Swahili and English",A.bR,3)
D.dI3=new C.wr("Doc Scanner","\ud83d\udcc4","Scan, save and share",A.ch,4)
D.dHW=new C.wr("Invoices","\ud83e\uddfe","Professional invoices",A.bE,5)
D.dHT=new C.wr("Calendar","\ud83d\udcc5","This month, today lit up",A.ay,-2)
D.kz=x([D.dI_,D.dHV,D.dI0,D.dI5,D.dI6,D.dI3,D.dHW,D.dHT],B.as("O<wr>"))
D.dfF=x([A.e_,A.rF],y.O)
D.dgZ=x([A.aH,A.b5,A.bj,A.bT],y.O)
D.eP0=new B.y("Jambo! Habari yako?","Nzuri, asante!")
D.eIa=new B.y("Jina lako nani?","Jina langu ni Amina.")
D.eIU=new B.y("Karibu nyumbani!","Asante sana!")
D.eP_=new B.y("Naenda shule leo.","I am going to school.")
D.eQ8=new B.y("Ninapenda kujifunza!","I love to learn!")
D.eZG=new B.y("Maji, tafadhali.","Water, please.")
D.eMU=new B.y("Rafiki yangu mpendwa","My dear friend")
D.eRI=new B.y("Tuonane kesho!","See you tomorrow!")
D.eSG=new B.y("Pole sana, rafiki.","I am so sorry, friend.")
D.eOZ=new B.y("Hongera! Umefaulu!","Congratulations! You passed!")
D.eK9=new B.y("Mimi ni mwanafunzi.","I am a student.")
D.eEA=new B.y("Chakula kitamu sana!","The food is so delicious!")
D.eZe=new B.y("Safari njema!","Have a good trip!")
D.eAC=new B.y("Unaongea Kiswahili vizuri!","You speak Swahili well!")
D.aBl=x([D.eP0,D.eIa,D.eIU,D.eP_,D.eQ8,D.eZG,D.eMU,D.eRI,D.eSG,D.eOZ,D.eK9,D.eEA,D.eZe,D.eAC],B.as("O<+(n,n)>"))
D.f2e=new B.b5(-0.3,0.32,0.2)
D.f_J=new B.b5(-0.08,0.17,0.22)
D.f_K=new B.b5(0.14,0.14,0.2)
D.f1t=new B.b5(0.34,0.3,0.2)
D.f3W=new B.b5(0,0.32,0.26)
D.f1b=new B.b5(-0.42,0.46,0.15)
D.f3R=new B.b5(0.42,0.46,0.15)
D.f2v=new B.b5(0,0.07,0.15)
D.aBm=x([D.f2e,D.f_J,D.f_K,D.f1t,D.f3W,D.f1b,D.f3R,D.f2v],y.C)
D.hBV=new C.ju("NGMY Construction Lab","Frame a room, stud by stud",C.iqK())
D.hBH=new C.ju("Wire it","Pull the cable, set the box, no shocks",C.iqM())
D.hBE=new C.ju("Hang the drywall","Screw it, tape it, mud it, sand it",C.iqJ())
D.hBw=new C.ju("Move in","Learn real trades, one room at a time",C.iqL())
D.dhM=x([D.hBV,D.hBH,D.hBE,D.hBw],y.f)
D.dij=x([A.cp,A.bx,A.bT],y.O)
D.ht3=new C.wY("NGMY Civic Registry","Enroll your family. Stay counted and helped together.",A.d7,A.aH)
D.hth=new C.wY("NGMY Jobs","Find work. Get hired. Get paid.",A.d_,A.aQ)
D.hte=new C.wY("NGMY Store","African food and traditions. Support our Congolese and African community.",A.ku,A.bj)
D.ht9=new C.wY("Kiswahili School","Learn Swahili and English, step by step.",A.cH,A.mT)
D.ht6=new C.wY("Document Scanner","Scan, save and share your papers.",A.qo,A.hs)
D.ht4=new C.wY("Invoice Creator","Make professional invoices in minutes.",A.qa,A.o9)
D.ht0=new C.wY("Family Book and Tree","Write your family story. Grow your tree.",A.j3,A.Mh)
D.ht2=new C.wY("NGMY Wallet","Save, send and earn coins.",A.ug,A.dA)
D.ht5=new C.wY("Vault Games","Play, win and learn.",A.dM,A.b9)
D.htf=new C.wY("Electronics Lab","Build real circuits and learn.",A.eZ,A.b_)
D.hta=new C.wY("NGMY Helper and Advisors","Friendly help, any time.",A.kL,A.cG)
D.dik=x([D.ht3,D.hth,D.hte,D.ht9,D.ht6,D.ht4,D.ht0,D.ht2,D.ht5,D.htf,D.hta],B.as("O<wY>"))
D.dio=x([A.bT,A.aH,A.bj,A.b5,A.bq,A.cG],y.O)
D.hBM=new C.ju("NGMY Electronics Lab","Power goes round a loop",C.iqO())
D.hBx=new C.ju("Build it","Drop in resistors, LEDs and capacitors",C.iqN())
D.hBG=new C.ju("Run a TV","Real volts, real gadgets",C.iqQ())
D.hBS=new C.ju("Measure it","Read the volts like a pro",C.iqP())
D.diL=x([D.hBM,D.hBx,D.hBG,D.hBS],y.f)
D.hBv=new C.ju("NGMY Vault","Lock away what matters",C.ir3())
D.hBU=new C.ju("Dial it","Only you know the code",C.ir2())
D.hBD=new C.ju("Store it","Photos, notes and documents",C.ir5())
D.hBZ=new C.ju("Stay safe","Private, protected, always yours",C.ir4())
D.djm=x([D.hBv,D.hBU,D.hBD,D.hBZ],y.f)
D.hBW=new C.ju("NGMY Store","Open the doors to something new",C.iqX())
D.hBu=new C.ju("Find anything","Shop gadgets, books and more",C.iqY())
D.hBF=new C.ju("Add to cart","Fill it up, pay your way",C.iqV())
D.hBQ=new C.ju("Delivered","Right to your door",C.iqW())
D.dlo=x([D.hBW,D.hBu,D.hBF,D.hBQ],y.f)
D.dmK=x([A.eZ,A.dz],y.O)
D.doE=x([A.dM,A.fo],y.O)
D.dp6=x(["For you","Apps","Library"],y.s)
D.aCi=x([A.bD,A.bj,A.cY,A.as],y.O)
D.aCo=x([-16,16],y.n)
D.SD=x([-22,22],y.n)
D.IK=x([-24,24],y.n)
D.a6c=x([-5,5],y.n)
D.aCv=x([-8,8],y.n)
D.dt4=x([A.bM,A.eW,A.Ne,A.es],y.O)
D.duQ=x([A.aH,A.bj,A.cc],y.O)
D.ba4=new B.ac(0,A.G,A.aU,A.dq,14)
D.duX=x([D.ba4],y.V)
D.dxQ=x(["M","T","W","T","F","S","S"],y.s)
D.dz4=x([A.c,A.no],y.O)
D.hBP=new C.ju("NGMY Advisors","Meet a friendly, checked advisor",C.iqD())
D.hBJ=new C.ju("Ask anything","Chat and get an answer",C.iqB())
D.hBN=new C.ju("Loved by members","Real help, five stars",C.iqE())
D.hBI=new C.ju("Say hi today","Pick an advisor and start",C.iqC())
D.dAh=x([D.hBP,D.hBJ,D.hBN,D.hBI],y.f)
D.bmp=new B.u(1,1,1,0.5529411764705883,A.q)
D.bq0=new B.u(1,1,0.9176470588235294,0,A.q)
D.bg3=new B.u(1,1,0.8392156862745098,0,A.q)
D.dDb=new B.d_([100,D.bmp,200,A.Zd,400,D.bq0,700,D.bg3],B.as("d_<H,u>"))
D.dFg=new B.EV(D.dDb,1,1,1,0,A.q)
D.eoe=new B.o(5,0)
D.c1r=new B.ae(A.eU,11,A.ab,null,null,null)
D.fyT=new B.F(!0,A.aR,null,null,null,null,9,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fWL=new B.B("Search",null,D.fyT,null,null,null,null,null,null,null,null,null)
D.cQ8=x([D.c1r,A.r9,D.fWL],y.p)
D.f9f=new B.c8(A.aL,A.e,A.j,A.l,null,A.p,null,0,D.cQ8,null)
D.fgm=new B.hH(3,5,5,1.35,null)
D.buD=new B.u(1,0.9450980392156862,0.9098039215686274,0.8470588235294118,A.q)
D.fnS=new B.F(!0,D.buD,null,"serif",null,null,15,A.k5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fvZ=new B.F(!0,A.ab,null,null,null,null,9.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fwA=new B.F(!0,A.aR,null,null,null,null,9.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.abf=new B.F(!0,A.ab,null,null,null,null,12.5,null,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aWj=new B.F(!0,A.ab,null,null,null,null,10,A.U,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fB7=new B.F(!0,A.c,null,null,null,null,8.5,A.U,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fCH=new B.F(!0,A.ab,null,null,null,null,8.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fD_=new B.F(!0,D.ag8,null,null,null,null,8.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ftd=new B.F(!0,A.aD,null,null,null,null,9.5,A.U,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fFk=new B.B("NGMY Apps",null,D.ftd,null,null,null,null,null,null,null,null,null)
D.fpD=new B.F(!0,D.u8,null,null,null,null,8,A.a8,null,3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fIA=new B.B("BANG & OLUFSEN",null,D.fpD,null,null,null,null,null,null,null,null,null)
D.fvG=new B.F(!0,A.w,null,null,null,null,9,A.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fJ2=new B.B("Open",null,D.fvG,null,null,null,null,null,null,null,null,null)
D.fMi=new B.B("Home",null,D.aWj,null,null,null,null,null,null,null,null,null)
D.fNo=new B.B("SAMSUNG",null,A.aVZ,null,null,null,null,null,null,null,null,null)
D.fTE=new B.B("LG",null,A.xr,null,null,null,null,null,null,null,null,null)
D.fZR=new B.B("tv",null,A.rd,null,null,null,null,null,null,null,null,null)
D.ft7=new B.F(!0,D.u8,null,null,null,null,8.5,null,null,2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h0Z=new B.B("OPEN",null,D.ft7,null,null,null,null,null,null,null,null,null)})();(function staticFields(){$.i5m=function(){var x=B.as("O<aE>")
return B.a([B.a([D.d2x,D.dhM],x),B.a([D.dmK,D.diL],x),B.a([D.dc4,D.dAh],x),B.a([D.daq,D.cJ_],x),B.a([N.aD4,D.djm],x),B.a([D.dds,D.cY1],x),B.a([D.d2B,D.d4z],x),B.a([D.dfF,D.dlo],x)],B.as("O<ai<aE>>"))}()})()};
(a=>{a["HFdDL7U4y7AxFd1qDvRLUQ5+GeQ="]=a.current})($__dart_deferred_initializers__);