((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,A,G,I,H,K,L,M,N,C={
rd(d,e,f,g,h,i){var x=new C.fC8(e,h,!0),w=x.$1(g),v=w.b.c
if(v>i&&v>0)w=x.$1(Math.max(2,g*i/v))
x=w.b
v=x.c
x=x.a.c
w.a4(d,f.aJ(0,new B.o(v/2,x.gba(x)/2)))},
aha(d,e,f,g,h,i){var x,w,v,u,t,s,r,q=null
if(h<=0)return
x=d.c
J.bp(x.save())
x.translate(e.a,e.b)
d.bU(0,A.i.D(A.lb.aA(0,A.i.D(h,0,1)),0.01,1.3))
w=B.fq(q,A.cr,q,q,q,B.cP(q,q,q,q,q,q,q,q,q,B.l(q,q,A.as,q,q,q,q,q,q,q,q,g,q,q,A.u,q,q,!0,q,q,q,q,q,q,q,q),f),A.a5,A.bX,q,A.dz,A.bY)
w.e5()
v=w.b
u=v.c
v=v.a.c
t=g*0.8
s=B.bl(B.bs(A.I,v.gba(v)+g*0.7,u+g*1.1),new B.aO(t,t))
t=$.Q()
u=B.K()
u.r=i.gp(0)
d.am(s,u)
t=new B.aF(t.r,A.ai,q,q,B.a([],y.v))
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
w.a4(d,new B.o(-t/2,-r.gba(r)/2))
x.restore()},
hc2(d,e,f,g){var x,w=A.i.D(Math.abs(Math.cos(g)),0.15,1),v=f*2,u=v*w,t=B.bs(e,v,u)
$.Q()
x=B.K()
x.r=A.bh.gp(0)
d.bZ(t,x)
d.bZ(B.bs(e,v,u),E.z3(A.u9,f*0.18))
if(w>0.5)C.rd(d,"$",e,f*1.2,A.u9,9999)},
i6d(d,e,f,g){var x,w,v,u,t,s,r,q,p,o,n,m,l=new B.e1()
l.cY(4)
for(x=e.a,w=f-g,v=e.b,u=d.c,t=f*3,s=v*0.025,r=v*0.012,q=0;q<18;++q){p=l.ai()
o=A.i.F(w*(40+l.ai()*60)+l.ai()*v,v)
J.bp(u.save())
u.translate(p*x,o)
u.rotate((t+q)*180/3.141592653589793,0,0)
p=B.bs(A.I,r,s)
n=D.cL1[A.o.F(q,5)]
$.Q()
m=new B.ao(A.O,A.M,A.Q,A.S,A.P)
m.r=n.gp(0)
d.ar(p,m)
u.restore()}},
igq(d,e,f,g){switch(A.o.F(f,11)){case 0:C.i5R(d,e,g)
break
case 1:C.i94(d,e,g)
break
case 2:C.ien(d,e,g)
break
case 3:C.ieL(d,e,g)
break
case 4:C.idz(d,e,g)
break
case 5:C.i8L(d,e,g)
break
case 6:C.i59(d,e,g)
break
case 7:C.ifB(d,e,g)
break
case 8:C.i7I(d,e,g)
break
case 9:C.i99(d,e,g)
break
default:C.i8n(d,e,g)}},
i5R(a1,a2,a3){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a2.a,d=a2.b,a0=d*0.94
for(x=e*0.12,w=e*0.06,v=d*0.06,u=y.v,t=0;t<6;++t){s=e*(0.04+t*0.17)
r=d*(0.18+0.08*A.o.F(t,3))
q=a0-r
p=s+x
o=A.c.j(0.2)
n=$.Q()
m=new B.ao(A.O,A.M,A.Q,A.S,A.P)
m.r=o.gp(0)
a1.ar(new B.a1(s,q,p,q+r),m)
m=B.a([],u)
n=new B.aF(n.r,A.ai,f,f,m)
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
q=new B.ao(A.O,A.M,A.Q,A.S,A.P)
q.r=A.c.j(0.3).gp(0)
a1.af(n,q)}x=A.w.j(0.18)
$.Q()
w=B.K()
w.r=x.gp(0)
a1.ar(new B.a1(0,a0,0+e,a0+(d-a0)),w)
k=Math.cos(a3*1.6)
j=Math.min(e*0.46,d*0.95)
i=j*0.62
w=a1.c
J.bp(w.save())
x=e*0.58
w.translate(x,d*0.45)
a1.pi(0,Math.max(0.08,Math.abs(k)),1)
v=i*0.1
h=B.bl(B.bs(A.I,i,j),new B.aO(v,v))
u=B.K()
q=k>=0
u.sav(new B.a9(A.a6,A.aa,A.x,q?D.dy6:D.dnK,f,f).aK(0,new B.a1(h.a,h.b,h.c,h.d)))
a1.am(h,u)
a1.am(h,E.z3(A.d6,2))
if(q){u=-j
q=u*0.28
p=-i
o=p*0.05
n=i*0.22
m=B.K()
m.r=F.mT.gp(0)
a1.N(new B.o(q,o),n,m)
n=B.bY(new B.o(q,o),n)
o=B.K()
o.r=F.lF.gp(0)
a1.cC(n,3.141592653589793,3.141592653589793,!0,o)
for(u*=0.05,q=p*0.25,o=i*0.07,t=0;t<3;++t){n=q+t*i*0.16
n=B.bl(new B.a1(u,n,u+j*(0.42-t*0.06),n+o),A.hO)
m=new B.ao(A.O,A.M,A.Q,A.S,A.P)
m.r=A.du.gp(0)
a1.am(n,m)}C.rd(a1,"COMMUNITY ID",new B.o(0,p*0.4),v,A.d6,j*0.8)}else C.rd(a1,"\u2605 NGMY \u2605",A.I,i*0.16,A.c,j*0.8)
w.restore()
v=a3>2.6
if(v){t=A.i.D((a3-2.6)/0.35,0,1)
J.bp(w.save())
w.translate(x,d*0.52)
a1.hX(0,-0.25)
a1.bU(0,2.2-1.2*A.e4.aA(0,t))
g=B.bs(A.I,i*0.3,j*0.7)
a1.am(B.bl(g,A.hP),E.z3(A.cX.j(t),3))
C.rd(a1,"\u2713 REGISTERED",A.I,i*0.13,A.cX.j(t),(g.c-g.a)*0.9)
w.restore()}x=a3*5
w=Math.sin(x)
x=Math.sin(x)
v=v&&a3<4
E.Bk(a1,new B.o(e*0.2,a0),d*0.7,a3,!1,Math.abs(x)*d*0.015,0,A.cX,F.mT,v,(w+1)/2)
if(a3>3)C.i6d(a1,new B.av(e,d*0.9),a3,3)},
i94(a4,a5,a6){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=a5.a,a1=a5.b,a2=a1*0.94,a3=A.w.j(0.2)
$.Q()
x=B.K()
x.r=a3.gp(0)
a4.ar(new B.a1(0,a2,0+a0,a2+(a1-a2)),x)
w=a0*0.62
v=a0*0.3
u=a1*0.62
x=a2-u
a3=w+v
t=B.K()
t.r=A.bp.gp(0)
a4.ar(new B.a1(w,x,a3,x+u),t)
for(t=a6*1.5,s=v*0.2,r=u*0.1,q=0;q<4;++q)for(p=x+u*(0.1+q*0.17),o=p+r,n=0;n<3;++n){m=w+v*(0.12+n*0.3)
l=A.o.F(q+n+A.i.bh(t),3)===0?A.dy:A.aH.j(0.6)
$.Q()
k=new B.ao(A.O,A.M,A.Q,A.S,A.P)
k.r=l.gp(0)
a4.ar(new B.a1(m,p,m+s,o),k)}t=w+v*0.38
s=u*0.16
r=a2-s
$.Q()
p=B.K()
p.r=A.h7.gp(0)
a4.ar(new B.a1(t,r,t+v*0.24,r+s),p)
p=x-a1*0.09
s=a1*0.02
p=B.bl(new B.a1(w,p,a3,p+a1*0.08),new B.aO(s,s))
a3=B.K()
a3.r=A.ax.gp(0)
a4.am(p,a3)
a3=a1*0.05
p=a1*0.06
C.rd(a4,"JOBS",new B.o(w+v/2,x-a3),p,A.c,9999)
j=A.i.D(a6/2.8,0,1)
x=a0*0.12
i=x+(w+v*0.3-x)*A.dC.aA(0,j)
x=j<1
h=x?Math.abs(Math.sin(a6*12))*a1*0.02:0
t=j>=1
r=t?(Math.sin(a6*6)+1)/2:0
E.Bk(a4,new B.o(i,a2),a1*0.6,a6,!1,h,2,A.b9,A.oj,t,r)
if(x){x=B.bl(B.bs(new B.o(i-a1*0.12,a2-a1*0.17-h),a1*0.075,a1*0.1),A.hO)
r=B.K()
r.r=A.h7.gp(0)
a4.am(x,r)}if(t){x=a6-2.8
C.aha(a4,new B.o(i+a3,a2-a1*0.78),"Hired! \ud83c\udf89",a1*0.07,x/0.4,A.c)
for(a3=x*0.8,x=a2-a1*0.5,t=a1*0.03,r=a6*8,g=0;g<6;++g){f=A.i.F(a3+g*0.17,1)
C.hc2(a4,new B.o(i+Math.sin(g*2.1)*a1*0.2,x-f*a1*0.25),t,r+g)}}a3=a0*0.04
x=a3+v
t=p+a1*0.3
s=B.bl(new B.a1(a3,p,x,t),new B.aO(s,s))
$.Q()
r=B.K()
r.r=A.i6.gp(0)
a4.am(s,r)
for(x-=a3,s=a3+x*0.08,t-=p,r=x*0.84,o=t*0.24,a3+=x*0.14,x*=0.5,m=t*0.05,g=0;g<3;++g){l=(1-A.i.D((a6-g*0.5)/0.5,0,1))*a0*0.3
k=s+l
e=g*0.3
d=p+t*(0.08+e)
d=B.bl(new B.a1(k,d,k+r,d+o),A.hO)
k=new B.ao(A.O,A.M,A.Q,A.S,A.P)
k.r=A.c.gp(0)
a4.am(d,k)
l=a3+l
e=p+t*(0.14+e)
k=new B.ao(A.O,A.M,A.Q,A.S,A.P)
k.r=A.bK.gp(0)
a4.ar(new B.a1(l,e,l+x,e+m),k)}},
ien(d,a0,a1){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=a0.a,g=a0.b,f=g*0.94,e=A.h7.j(0.6)
$.Q()
x=B.K()
x.r=e.gp(0)
d.ar(new B.a1(0,f,0+h,f+(g-f)),x)
w=h*0.3
v=h*0.66
for(e=v/12,x=g*0.14,u=e+1,t=x+g*0.12,s=0;s<12;++s){r=w+e*s
q=new B.ao(A.O,A.M,A.Q,A.S,A.P)
q.r=D.aC6[A.o.F(s,4)].gp(0)
d.ar(new B.a1(r,x,r+u,t),q)}for(u=g*0.2,t=g*0.1,r=u+t,s=0;s<12;++s){q=w+e*s
p=new B.ao(A.O,A.M,A.Q,A.S,A.P)
p.r=D.aC6[A.o.F(s,4)].gp(0)
d.cC(new B.a1(q,u,q+e,r),0,3.141592653589793,!0,p)}e=w+4
u=g*0.3
r=u+(f-u)
q=B.K()
q.r=A.h7.gp(0)
d.ar(new B.a1(e,u,e+4,r),q)
q=w+v
e=q-8
p=B.K()
p.r=A.h7.gp(0)
d.ar(new B.a1(e,u,e+4,r),p)
p=g*0.68
r=p+g*0.26
e=B.bl(new B.a1(w,p,q,r),A.ix)
u=B.K()
u.r=A.i6.gp(0)
d.am(e,u)
for(e=q-w,u=e/6,q=p+2,e/=12,r=q+(r-p-4),s=0;s<6;++s){o=w+u*s
n=new B.ao(A.O,A.M,A.Q,A.S,A.P)
n.r=((s&1)===0?A.bC:A.bh).j(0.9).gp(0)
d.ar(new B.a1(o,q,o+e,r),n)}e=w+v*0.2
u=g*0.62
m=new B.o(e,u)
r=g*0.17
q=g*0.03
o=B.bl(B.bs(m,g*0.11,r),new B.aO(q,q))
n=B.K()
n.r=A.cu.gp(0)
d.am(o,n)
n=-g
r=B.bs(m.a5(0,new B.o(0,n*0.05)),g*0.04,r)
o=B.K()
o.r=A.fo.gp(0)
d.bZ(r,o)
for(r=a1*0.8,n*=0.08,o=g*0.015,s=0;s<3;++s){l=A.i.F(r+s*0.33,1)
k=Math.sin(l*6+s)
j=l*g
i=new B.ao(A.O,A.M,A.Q,A.S,A.P)
i.r=A.c.j(0.6*(1-l)).gp(0)
d.N(new B.o(e+k*5,u+(n-j*0.14)),o+j*0.02,i)}for(e=w+v*0.5,r=g*0.018,s=0;s<5;++s){o=B.bs(new B.o(e,u),x,g*(0.1+s*0.01))
n=new B.ao(A.O,A.M,A.Q,A.S,A.P)
n.b=A.a9
n.c=r
n.r=A.bh.gp(0)
n.d=A.bw
d.cC(o,0.4+s*0.1,1.9,!1,n)}for(e=g*0.63,x=g*0.032,s=0;s<4;++s){u=A.o.F(s,2)
r=A.o.ap(s,2)
o=(s&1)===0?A.ch:A.w2
n=new B.ao(A.O,A.M,A.Q,A.S,A.P)
n.r=o.gp(0)
d.N(new B.o(w+v*(0.72+0.06*u)+s*g*0.02,e+r*g*0.035),x,n)}E.Bk(d,new B.o(h*0.14,f),p,a1,!1,0,1,A.bh,G.ahK,!0,(Math.sin(a1*5)+1)/2)
for(e=a1*0.45,x=h*0.16,u=g*0.45,r=g*0.06,s=0;s<5;++s){l=A.i.F(e+s*0.2,1)
C.rd(d,"\u2665",new B.o(x+Math.sin(l*5+s)*g*0.08+s*g*0.03,u-l*g*0.4),r,A.aw.j(1-l),9999)}e=w+v/2
x=g*0.08
q=B.bl(B.bs(new B.o(e,x),t,v*0.7),new B.aO(q,q))
$.Q()
t=B.K()
t.r=A.as.gp(0)
d.am(q,t)
C.rd(d,"NGMY STORE \xb7 African food",new B.o(e,x),g*0.05,A.dy,v*0.64)},
ieL(d,e,f){var x,w,v,u,t,s,r,q=e.a,p=e.b,o=p*0.94,n=A.w.j(0.2)
$.Q()
x=B.K()
x.r=n.gp(0)
d.ar(new B.a1(0,o,0+q,o+(p-o)),x)
w=A.o.F(A.o.ap(Date.now(),6000)*3+A.o.D(A.i.bh(f/2),0,2),14)
v=A.i.F(f,2)
u=v<1
x=p*0.68
n=u?(Math.sin(f*8)+1)/2:0
t=u?Math.abs(Math.sin(f*8))*p*0.01:0
E.Bk(d,new B.o(q*0.25,o),x,f,!1,t,2,A.cX,F.mT,u,n)
n=u?0:(Math.sin(f*8)+1)/2
t=u?0:Math.abs(Math.sin(f*8))*p*0.01
E.Bk(d,new B.o(q*0.75,o),x,f,!1,t,0,A.bl,D.agH,!u,n)
s=new C.fC2(p,q)
n=p*0.15
if(u){x=D.aB9[w].a
C.aha(d,new B.o(q*0.27,n),x,s.$1(x),v/0.25,A.qj)}else{x=D.aB9[w].b
C.aha(d,new B.o(q*0.73,n),x,s.$1(x),(v-1)/0.25,A.eC)}for(n=q*0.5,x=p*0.07,t=f*2,r=0;r<3;++r)C.rd(d,"\u2192",new B.o(n,p*(0.35+r*0.1)),x,A.c.j(0.3+0.5*A.i.F(t+r,1)),9999)},
idz(d,a0,a1){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=a0.a,g=a0.b,f=g*0.94,e=A.w.j(0.2)
$.Q()
x=B.K()
x.r=e.gp(0)
d.ar(new B.a1(0,f,0+h,f+(g-f)),x)
x=h*0.3
w=B.bs(new B.o(h*0.6,g*0.45),g*0.7,Math.min(x,g*0.55))
e=B.bl(w,A.ix)
v=B.K()
v.r=A.c.gp(0)
d.am(e,v)
for(e=w.d,v=w.b,u=e-v,t=u*0.03,s=w.a,r=w.c,q=r-s,p=s+q*0.1,o=0;o<9;++o){n=v+u*(0.1+o*0.095)
m=A.o.F(o,3)===2?0.5:0.8
l=new B.ao(A.O,A.M,A.Q,A.S,A.P)
l.r=A.ct.gp(0)
d.ar(new B.a1(p,n,p+q*m,n+t),l)}k=A.i.D(a1/3,0,1)
j=v+u*k
if(k<1){e=s-8
u=j-2
q=e+(q+16)
t=B.K()
t.r=A.b5.gp(0)
d.ar(new B.a1(e,u,q,u+4),t)
t=A.b5.j(0.18)
u=B.K()
u.r=t.gp(0)
d.ar(new B.a1(e,v,q,v+(j-v)),u)}else{o=A.i.D((a1-3)/0.4,0,1)
u=A.lb.aA(0,o)
t=B.K()
t.r=A.bC.gp(0)
d.N(new B.o(r,v),g*0.08*u,t)
C.rd(d,"PDF",new B.o(r,v),g*0.045*o,A.c,9999)
v=g*0.06
C.rd(d,"\u2713 Saved",new B.o(w.gbw().a,e+v),v,A.c.j(o),9999)}e=a1*4
v=Math.sin(e)
E.Bk(d,new B.o(h*0.2,f),g*0.66,a1,!0,Math.abs(Math.sin(e))*g*0.01,0,A.cy,F.mT,!1,(v+1)/2)
i=B.bs(new B.o(x,g*0.3),g*0.18,g*0.1)
x=g*0.02
x=B.bl(i,new B.aO(x,x))
v=B.K()
v.r=A.as.gp(0)
d.am(x,v)
v=g*0.015
v=B.bl(i.cn(-3),new B.aO(v,v))
x=A.b5.j(0.35+0.3*Math.sin(a1*6))
e=B.K()
e.r=x.gp(0)
d.am(v,e)},
i8L(a5,a6,a7){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=a6.a,a2=a6.b,a3=a2*0.94,a4=A.w.j(0.2)
$.Q()
x=B.K()
x.r=a4.gp(0)
a5.ar(new B.a1(0,a3,0+a1,a3+(a2-a3)),x)
w=B.bs(new B.o(a1*0.62,a2*0.47),a2*0.8,Math.min(a1*0.4,a2*0.75))
x=B.bl(w,A.mw)
a4=B.K()
a4.r=A.c.gp(0)
a5.am(x,a4)
a4=w.a
x=w.c
v=x-a4
u=w.b
t=w.d-u
C.rd(a5,"INVOICE",new B.o(a4+v*0.3,u+t*0.09),t*0.07,A.d6,9999)
for(s=a5.c,r=v*0.08,q=a4+r,p=t*0.045,o=q+v*0.5,n=x-v*0.17,m=t*0.02,l=t*0.06,k=a7-0.5,j=0,i=0;i<3;++i){h=A.i.D((k-i*0.6)/0.4,0,1)
if(h<=0)continue
j+=D.aAb[i].b
g=u+t*(0.24+i*0.14)
J.bp(s.save())
s.translate((1-h)*30,0)
f=A.ct.j(h)
$.Q()
e=new B.ao(A.O,A.M,A.Q,A.S,A.P)
e.r=f.gp(0)
a5.ar(new B.a1(q,g,o,g+p),e)
C.rd(a5,"$"+D.aAb[i].b,new B.o(n,g+m),l,A.as.j(h),9999)
s.restore()}p=u+t*0.7
a5.ah(new B.o(q,p),new B.o(x-r,p),E.z3(A.dr,1.4))
C.rd(a5,"TOTAL  $"+j,new B.o(w.gbw().a,u+t*0.78),t*0.075,A.as,v*0.8)
x=a7>2.8
if(x){r=a7-2.8
i=A.i.D(r/0.3,0,1)
J.bp(s.save())
s.translate(w.gbw().a,u+t*0.55)
a5.hX(0,-0.3)
a5.bU(0,2-A.e4.aA(0,i))
a5.am(B.bl(B.bs(A.I,t*0.17,v*0.6),A.hP),E.z3(A.cX.j(i),3.5))
C.rd(a5,"PAID",A.I,t*0.11,A.cX.j(i),9999)
s.restore()
for(v=r*0.7,a4-=a2*0.05,u=a2*0.7,t=a2*0.03,s=a7*8,d=0;d<6;++d){a0=A.i.F(v+d*0.17,1)
C.hc2(a5,new B.o(a4+Math.sin(d*2)*a2*0.1,u-a0*a2*0.5),t,s+d)}}a4=x?(Math.sin(a7*6)+1)/2:0
E.Bk(a5,new B.o(a1*0.2,a3),a2*0.66,a7,!0,0,1,A.bF,A.oj,x,a4)},
hEv(d,e,f,g){var x,w=B.bs(e,f*0.62,f*2.5),v=f*0.31,u=B.bl(w,new B.aO(v,v))
$.Q()
x=B.K()
x.r=A.c.gp(0)
d.am(u,x)
d.am(B.bl(w,new B.aO(v,v)),E.z3(A.bF,f*0.05))
C.rd(d,"\u2665 "+g,e,f*0.4,A.q4,f*2.2)},
zf(d,e,f,g,h,i,j){var x,w,v,u,t,s,r,q,p,o,n,m,l
if(j<=0)return
x=new C.fVS(e,f,g)
w=A.i.cL(22*A.i.D(j,0,1))
for(v=i-h,u=e,t=1;t<=w;++t,u=r){s=Math.min(t/22,A.i.D(j,0,1))
r=x.$1(s)
$.Q()
q=new B.ao(A.O,A.M,A.Q,A.S,A.P)
q.b=A.a9
p=q.c=h+v*s
q.r=A.oj.gp(0)
q.d=A.bw
d.ah(u,r,q)
q=-p*0.18
o=r.a
n=r.b
m=B.ar(A.oj,A.c,0.18)
m.toString
l=new B.ao(A.O,A.M,A.Q,A.S,A.P)
l.b=A.a9
l.c=p*0.28
l.r=m.gp(0)
l.d=A.bw
d.ah(new B.o(u.a+q,u.b+0),new B.o(o+q,n+0),l)}},
ir8(d,e,f,g){var x,w,v,u,t,s
for(x=g*0.45,w=e.a,v=g*2,u=e.b,t=0;t<7;++t){s=A.i.F(x+t/7,1)
C.rd(d,"\u2665",new B.o(w+Math.sin(t*2.3+v)*f*0.12+(t-3.5)*f*0.03,u-s*f*0.45),f*(0.04+0.02*A.o.F(t,3)),B.ar(A.bF,A.hT,A.o.F(t,2)).j((1-s)*0.9),9999)}},
i59(b3,b4,b5){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6=null,a7=b4.a,a8=b4.b,a9=a8*0.94,b0=A.e3.j(0.7),b1=$.Q(),b2=B.K()
b2.r=b0.gp(0)
b3.ar(new B.a1(0,a9,0+a7,a9+(a8-a9)),b2)
x=new C.foi(b5)
w=new C.fof()
v=Math.min(a7*0.34,a8*0.62)
b2=a7*0.64
b0=v*0.2
u=a9-b0
t=new B.o(b2,u)
s=v*0.5
r=v*0.08
r=B.bl(B.bs(t,s,v*2.15),new B.aO(r,r))
q=B.K()
q.r=A.hC.gp(0)
b3.am(r,q)
b1=b1.r
q=y.v
p=new B.aF(b1,A.ai,a6,a6,B.a([],q))
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
o.r=A.fY.gp(0)
b3.af(p,o)
h=new B.aF(b1,A.ai,a6,a6,B.a([],q))
h.E(new B.aZ(b2,r))
s=b2+s
r=b2+v
h.E(new B.c6(s,m,r,j))
h.E(new B.aq(r,i))
h.E(new B.c6(s,l,b2,k))
h.E(new B.bu())
k=B.K()
k.r=A.i4.gp(0)
b3.af(h,k)
for(b1=v*0.85,s=b2-b1,r=u-v*0.06,q=b2-b0,u-=v*0.1,b0=b2+b0,b1=b2+b1,g=0;g<3;++g){b2=g*v*0.06
o=r+b2
b2=u+b2
m=new B.ao(A.O,A.M,A.Q,A.S,A.P)
m.b=A.a9
m.c=1.4
m.r=D.a__.gp(0)
m.d=A.bw
b3.ah(new B.o(s,o),new B.o(q,b2),m)
m=new B.ao(A.O,A.M,A.Q,A.S,A.P)
m.b=A.a9
m.c=1.4
m.r=D.a__.gp(0)
m.d=A.bw
b3.ah(new B.o(b0,b2),new B.o(b1,o),m)}f=w.$1(x.$2(0.2,1))
b0=t.aJ(0,new B.o(0,n))
b1=b5*4
b2=Math.sin(b1)
u=B.K()
u.sav(new B.c0(A.A,0.5,A.x,a6,0,B.a([A.dy.j(0.6*f),A.L],y.O),a6,a6).aK(0,B.bY(t.aJ(0,new B.o(0,n)),v*0.7)))
b3.N(b0,v*(0.5+0.1*b2)*f,u)
e=t.aJ(0,new B.o(0,v*0.12))
d=new C.foh(t,a8,e)
a0=w.$1(x.$2(0.5,1.1))
a1=w.$1(x.$2(1.3,1.2))
for(b0=b5*2,a2=0;a2<4;++a2){b2=D.cOg[a2]
a3=b2.a
u=d.$2(a3,b2.b)
s=Math.sin(b0+a3*9)
r=new B.ao(A.O,A.M,A.Q,A.S,A.P)
r.r=A.cX.j(0.9).gp(0)
b3.N(u,a8*b2.c*a1+s*1.2,r)}C.zf(b3,e,e.a5(0,new B.o(0,-a8*0.08)),d.$2(0,0.22),a8*0.05,a8*0.035,a0)
a4=w.$1(x.$2(1.2,0.8))
b0=a8*0.032
b2=a8*0.02
C.zf(b3,d.$2(0,0.22),d.$2(-0.06,0.28),d.$2(-0.2,0.36),b0,b2,a4)
C.zf(b3,d.$2(0,0.22),d.$2(0.06,0.28),d.$2(0.2,0.36),b0,b2,a4)
a5=w.$1(x.$2(2.4,0.7))
C.zf(b3,d.$2(0,0.22),d.$2(0,0.4),d.$2(0,0.57),a8*0.03,a8*0.016,a5)
b2=new C.fog(x,b3,b5)
b0=a8*0.088
b2.$5(2,"Mama",d.$2(-0.2,0.36),b0,1.9)
b2.$5(3,"Baba",d.$2(0.2,0.36),b0,2.4)
b2.$5(4,"Dada",d.$2(0,0.57),a8*0.08,3)
if(b5>3.6)C.ir8(b3,d.$2(0,0.36),a8,b5-3.6)
b0=a7*0.2
b2=Math.sin(b1)
E.Bk(b3,new B.o(b0,a9),a8*0.66,b5,!1,Math.abs(Math.sin(b1))*a8*0.01,2,A.aE,F.mT,b5>3,(b2+1)/2)
C.aha(b3,new B.o(b0,a8*0.1),"My tree!",a8*0.06,x.$2(3,0.4),A.c)},
ifB(d,e,f){var x,w,v,u,t,s,r,q,p=e.a,o=e.b,n=o*0.94,m=A.w.j(0.2)
$.Q()
x=B.K()
x.r=m.gp(0)
d.ar(new B.a1(0,n,0+p,n+(o-n)),x)
w=A.i.bh(A.i.D(f/5.5,0,1)*9)+1
for(v=p*0.62,m=n-o*0.03,x=o*0.26,u=o*0.07,t=0;t<w;++t){s=m-t*o*0.055
r=B.bs(new B.o(v,s),u,x)
q=new B.ao(A.O,A.M,A.Q,A.S,A.P)
q.r=A.bh.gp(0)
d.bZ(r,q)
s=B.bs(new B.o(v,s),u,x)
q=new B.ao(A.O,A.M,A.Q,A.S,A.P)
q.b=A.a9
q.c=2
q.r=A.u9.gp(0)
q.d=A.bw
d.bZ(s,q)}m=o*0.1
C.hc2(d,new B.o(v,m+A.i.F(f*1.6,1)*(n-u-w*o*0.055-m)),o*0.05,f*8)
m=o*0.08
C.rd(d,"$"+w*25,new B.o(v,m),m,A.dy,9999)
m=f*5
u=Math.sin(m)
E.Bk(d,new B.o(p*0.25,n),o*0.66,f,!1,Math.abs(Math.sin(m))*o*0.012,1,A.cy,F.mT,!0,(u+1)/2)},
i7I(d,e,a0){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=e.a,h=e.b,g=h*0.94,f=A.w.j(0.2)
$.Q()
x=B.K()
x.r=f.gp(0)
d.ar(new B.a1(0,g,0+i,g+(h-g)),x)
for(f=d.c,x=h*0.012,w=h*0.55,v=a0*4,u=a0*2,t=h*0.15,s=h*0.03,r=0;r<3;r=o){q=Math.sin(v+r*1.7)
J.bp(f.save())
f.translate(i*(0.5+0.14*r),w-Math.abs(q)*h*0.3)
f.rotate((u+r)*180/3.141592653589793,0,0)
q=B.bl(B.bs(A.I,t,t),new B.aO(s,s))
p=new B.ao(A.O,A.M,A.Q,A.S,A.P)
p.r=A.c.gp(0)
d.am(q,p)
o=r+1
q=o*2
p=r===0
n=0
for(;;){if(!(n<q-(p?1:0)))break
m=n*2.1
l=Math.cos(m)
m=Math.sin(m)
k=new B.ao(A.O,A.M,A.Q,A.S,A.P)
k.r=A.bo.gp(0)
d.N(new B.o(l*h*0.04,m*h*0.04),x,k);++n}f.restore()}for(f=a0*0.6,w=h*0.25,v=h*0.06,r=0;r<5;++r){j=A.i.F(f+r*0.2,1)
C.rd(d,"\u2605",new B.o(i*(0.45+r*0.1),w-j*h*0.2),v,A.dy.j(1-j),9999)}f=i*0.22
w=a0*6
v=Math.sin(w)
E.Bk(d,new B.o(f,g),h*0.66,a0,!0,Math.abs(Math.sin(w))*h*0.015,0,A.ch,F.mT,!0,(v+1)/2)
v=g-h*0.28
s=B.bl(B.bs(new B.o(f,v),h*0.07,h*0.16),new B.aO(s,s))
$.Q()
w=B.K()
w.r=A.cu.gp(0)
d.am(s,w)
w=B.K()
w.r=A.aw.gp(0)
d.N(new B.o(f+h*0.05,v),x,w)},
i99(d,e,f){var x,w,v,u,t,s,r,q,p,o,n,m=e.a,l=e.b,k=l*0.94,j=A.w.j(0.2),i=$.Q(),h=B.K()
h.r=j.gp(0)
d.ar(new B.a1(0,k,0+m,k+(l-k)),h)
h=m*0.42
j=l*0.18
x=l*0.08
w=B.bl(new B.a1(h,j,h+m*0.5,j+l*0.5),new B.aO(x,x))
v=new B.aF(i.r,A.ai,null,null,B.a([],y.v))
v.E(new B.j8(w))
d.af(v,E.z3(A.c.j(0.5),4))
u=new B.TO(new B.ru(B.xJ(v),!1,B.a([],y.L))).gH(0)
for(j=f*0.18,i=u.a,x=u.b,t=i.e,s=l*0.016,r=0;r<10;++r){q=A.i.F(j+r/10,1)
i.ix()
p=t[x].b
p===$&&B.c()
p=p.a.length()
i.ix()
p=t[x].De(q*p)
q=new B.ao(A.O,A.M,A.Q,A.S,A.P)
q.r=A.dy.gp(0)
d.N(p.a,s,q)}o=f>1.5
j=l*0.43
n=new B.o(m*0.92,j)
if(o){i=A.dy.j(0.4+0.2*Math.sin(f*8))
x=B.K()
x.r=i.gp(0)
x.y=A.wn
d.N(n,l*0.2,x)}i=l*0.07
x=o?A.qj:A.bK
t=B.K()
t.r=x.gp(0)
d.N(n,i,t)
j=B.bl(B.bs(new B.o(h,j),l*0.2,l*0.1),A.ix)
t=B.K()
t.r=A.cX.gp(0)
d.am(j,t)
C.rd(d,"+",new B.o(h,l*0.36),i,A.c,9999)
j=o?(Math.sin(f*6)+1)/2:0
h=o?Math.abs(Math.sin(f*6))*l*0.012:0
E.Bk(d,new B.o(m*0.2,k),l*0.68,f,!1,h,0,A.bQ,F.mT,o,j)
if(o)C.aha(d,new B.o(m*0.24,l*0.16),"It works!",i,(f-1.5)/0.4,A.c)},
i8n(d,e,f){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=e.a,i=e.b,h=i*0.94,g=A.w.j(0.2)
$.Q()
x=B.K()
x.r=g.gp(0)
d.ar(new B.a1(0,h,0+j,h+(i-h)),x)
w=A.i.D((f-0.3)/0.4,0,1)
v=A.i.D((f-1.8)/0.4,0,1)
x=i*0.2
g=i*0.065
C.aha(d,new B.o(j*0.3,x),"How do I enroll?",g,w,A.qj)
if(f>1&&f<1.8)for(u=j*0.72,t=i*0.38,s=f*9,r=i*0.015,q=0;q<3;++q){p=Math.sin(s+q)
o=new B.ao(A.O,A.M,A.Q,A.S,A.P)
o.r=A.c.gp(0)
d.N(new B.o(u+q*i*0.05,t-Math.abs(p)*i*0.02),r,o)}C.aha(d,new B.o(j*0.7,i*0.38),"Tap Civic Registry!",g,v,A.eC)
E.Bk(d,new B.o(j*0.2,h),i*0.62,f,!1,0,2,A.aw,F.mT,f<1,0)
n=j*0.78
m=h-i*0.28
g=i*0.04
x=B.bl(B.bs(new B.o(n,m),i*0.22,x),new B.aO(g,g))
u=B.K()
u.r=A.aO.gp(0)
d.am(x,u)
u=i*0.18
x=m-u
g=B.bl(B.bs(new B.o(n,x),i*0.14,u),new B.aO(g,g))
u=B.K()
u.r=A.ct.gp(0)
d.am(g,u)
for(g=f*1.1,u=i*0.02,l=0;l<2;++l){k=F.hK[l]
t=A.i.F(g,1)>0.08?A.bd:A.eV
s=new B.ao(A.O,A.M,A.Q,A.S,A.P)
s.r=t.gp(0)
d.N(new B.o(n+k*i*0.04,x),u,s)}d.ah(new B.o(n,m-i*0.25),new B.o(n,m-i*0.3),E.z3(A.ab,3))
g=B.K()
g.r=A.aw.gp(0)
d.N(new B.o(n,m-i*0.31),i*0.015,g)},
fC8:function fC8(d,e,f){this.a=d
this.b=e
this.c=f},
fC2:function fC2(d,e){this.a=d
this.b=e},
fVS:function fVS(d,e,f){this.a=d
this.b=e
this.c=f},
foi:function foi(d){this.a=d},
fof:function fof(){},
foh:function foh(d,e,f){this.a=d
this.b=e
this.c=f},
fog:function fog(d,e,f){this.a=d
this.b=e
this.c=f},
aPL(d,e,f,g,h,i,j,k){var x=new C.fsZ(e,h,i,k),w=x.$1(g),v=w.b.c
if(v>j&&v>0)w=x.$1(Math.max(2,g*j/v))
x=w.b
v=x.c
x=x.a.c
w.a4(d,f.aJ(0,new B.o(v/2,x.gba(x)/2)))},
M1(d,e,f,g){var x,w,v,u,t,s,r,q,p,o=A.o.F(g==null?A.i.bh(f/6):g,11),n=A.i.F(f,6),m=D.dhp[o],l=e.a,k=e.b,j=0+l,i=0+k
$.Q()
x=B.K()
x.sav(new B.a9(A.aA,A.aF,A.x,B.a([m.c,m.d],y.O),null,null).aK(0,new B.a1(0,0,j,i)))
d.ar(new B.a1(0,0,j,i),x)
w=k*(l>=k?0.7:0.6)
i=d.c
J.bp(i.save())
i.clipRect(B.hS(new B.a1(0,0,j,0+w)),$.mf()[1],!0)
C.igq(d,new B.av(l,w),o,n)
i.restore()
v=k-w
x=A.w.j(0.3)
u=B.K()
u.r=x.gp(0)
d.ar(new B.a1(0,w,j,w+v),u)
t=A.cw.aA(0,A.i.D((n-0.2)/0.5,0,1))
J.bp(i.save())
i.translate((1-t)*l*0.25,0)
u=l/2
j=l*0.94
C.aPL(d,m.a,new B.o(u,w+v*0.3),v*0.36,A.c.j(t),!0,j,0)
C.aPL(d,m.b,new B.o(u,w+v*0.64),v*0.2,A.c.j(0.92*t),!1,j,0)
i.restore()
for(j=k*0.965,i=k*0.009,x=k*0.004,s=0;s<11;++s){r=s===o
q=r?x:0
p=new B.ao(A.O,A.M,A.Q,A.S,A.P)
p.r=A.c.j(r?0.95:0.35).gp(0)
d.N(new B.o(u+(s-5)*k*0.035,j),i+q,p)}j=l-k*0.07
i=k*0.06
C.aPL(d,"AD",new B.o(j,i),k*0.045,A.c.j(0.85),!0,9999,1)
x=k*0.02
x=B.bl(B.bs(new B.o(j,i),k*0.065,k*0.1),new B.aO(x,x))
i=B.K()
i.b=A.a9
i.c=1
i.r=A.ab.gp(0)
i.d=A.bw
d.am(x,i)},
M2(d,e,f,g){var x,w=d.c
J.bp(w.save())
w.clipRect(B.hS(new B.a1(0,0,0+e.a,0+e.b)),$.mf()[1],!0)
x=D.kw[A.o.F(f,8)].e
if(x===-2)C.i5m(d,e,g)
else if(x===-1)C.M1(d,e,g,null)
else C.M1(d,e,g,x)
w.restore()},
i5m(d,e,f){var x,w,v,u,t,s,r,q,p,o,n,m,l=e.a,k=e.b,j=new B.V(Date.now(),0,!1),i=0+l,h=0+k
$.Q()
x=B.K()
x.sav(D.c5M.aK(0,new B.a1(0,0,i,h)))
d.ar(new B.a1(0,0,i,h),x)
x=B.K()
x.r=A.bC.gp(0)
d.ar(new B.a1(0,0,i,0+k*0.15),x)
C.aPL(d,A.oI[B.bK(j)-1]+" "+B.bC(j),new B.o(l/2,k*0.075),k*0.08,A.c,!0,l*0.9,0)
w=l/7
for(i=k*0.21,h=k*0.05,v=0;v<7;++v)C.aPL(d,D.dwT[v],new B.o(w*(v+0.5),i),h,A.aD,!0,9999,0)
u=B.bZ(B.bC(j),B.bK(j),1,0,0,0,0,0)
t=B.bU(B.bZ(B.bC(j),B.bK(j)+1,0,0,0,0,0,0))
s=B.mr(u)-1
r=k*0.74/A.i.cL((s+t)/7)
for(i=k*0.26,h=f*3,q=1;q<=t;++q){p=s+q-1
o=new B.o(w*(A.o.F(p,7)+0.5),i+r*(A.o.ap(p,7)+0.5))
if(q===B.bU(j)){x=Math.min(w,r)
n=A.aH.j(0.5+0.2*Math.sin(h))
$.Q()
m=new B.ao(A.O,A.M,A.Q,A.S,A.P)
m.r=n.gp(0)
d.N(o,x*0.42,m)}x=Math.min(w,r)
n=q===B.bU(j)?A.c:A.ab
C.aPL(d,""+q,o,x*0.42,n,!0,9999,0)}},
fsZ:function fsZ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
wU:function wU(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
wl:function wl(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
hgT(d,e,f,g,h,i){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=d.c
J.bp(j.save())
x=e.a
w=e.b
v=0+x
u=0+w
j.clipRect(B.hS(new B.a1(0,0,v,u)),$.mf()[1],!0)
if(h<3){$.Q()
t=B.K()
t.r=D.bf6.gp(0)
d.ar(new B.a1(0,0,v,u),t)
if(h<0.5)u=h/0.5
else u=h>2.4?(3-h)/0.6:1
s=A.i.D(u,0,1)
u=e.el(A.I)
t=e.gdA()
r=B.K()
r.sav(new B.c0(A.A,0.5,A.x,k,0,B.a([A.aH.j(0.35*s),A.L],y.O),k,k).aK(0,B.bY(e.el(A.I),e.gdA()*0.5)))
d.N(u,t*0.5,r)
C.aQv(d,"NGMY",new B.o(0,w*0.36),w*0.2,A.c.j(s),A.K,w*0.03,x)
C.aQv(d,"T V",new B.o(0,w*0.6),w*0.08,A.aH.j(s),A.K,w*0.05,x)
r=x*0.3
t=w*0.78
u=B.K()
u.r=A.aH.j(s).gp(0)
d.ar(new B.a1(r,t,r+x*0.4*(h/3),t+3),u)}else if(i>=0)C.M2(d,e,i,g)
else{q=A.i.D((h-3)/0.5,0,1)
p=A.o.F(f,10)
switch(p){case 0:C.if6(d,e,g)
break
case 1:C.a3K(d,e,7,g)
break
case 2:C.a3K(d,e,0,g)
break
case 3:C.a3K(d,e,1,g)
break
case 4:C.a3K(d,e,2,g)
break
case 5:C.irb(d,e,g)
break
case 6:C.a3K(d,e,3,g)
break
case 7:C.a3K(d,e,6,g)
break
case 8:C.a3K(d,e,4,g)
break
default:C.a3K(d,e,5,g)}t=x-w*0.34
r=w*0.04
o=w*0.03
n=B.bl(new B.a1(t,r,t+w*0.3,r+w*0.1),new B.aO(o,o))
$.Q()
o=B.K()
o.r=A.w.j(0.55).gp(0)
d.am(n,o)
C.aQv(d,"NGMY",new B.o(n.a+w*0.025,n.b+w*0.012),w*0.07,A.c,A.bn,1,k)
o=w*0.86
t=B.K()
t.r=A.w.j(0.6).gp(0)
d.ar(new B.a1(0,o,v,o+w*0.14),t)
C.aQv(d,"CH "+(f+1)+"  \xb7  "+D.Ro[p].a,new B.o(r,w*0.885),w*0.075,A.c,A.bn,0,x-w*0.08)
if(q<1){t=B.K()
t.r=A.c.j(0.6*(1-q)).gp(0)
d.ar(new B.a1(0,0,v,u),t)}}$.Q()
m=B.K()
m.r=A.w.j(0.07).gp(0)
for(l=0;l<w;l+=3)d.ar(new B.a1(0,l,v,l+1),m)
v=new B.aF($.Q().r,A.ai,k,k,B.a([],y.v))
v.E(new B.aZ(0,0))
v.E(new B.aq(x*0.45,0))
v.E(new B.aq(0,w*0.5))
v.E(new B.bu())
w=B.K()
w.r=A.c.j(0.04).gp(0)
d.af(v,w)
j.restore()},
aQv(d,e,f,g,h,i,j,k){var x=null,w=B.fq(x,A.cr,x,1,x,B.cP(x,x,x,x,x,x,x,x,x,B.l(x,x,h,x,x,x,x,x,x,x,x,g,x,x,A.u,x,x,!0,x,j,x,x,x,x,x,x),e),i,A.bX,x,A.dz,A.bY),v=k==null
w.o5(v?9999:k)
w.a4(d,f.a5(0,new B.o(i===A.K&&!v?(k-w.b.c)/2:0,0)))},
aPG(d,e,f,g,h,i,j){var x=new C.fqL(e,h,i,j),w=x.$1(g),v=w.b.c,u=f.c-f.a
if(v>u&&v>0)w=x.$1(g*u/v)
x=f.gbw()
v=w.b
u=v.c
v=v.a.c
w.a4(d,x.aJ(0,new B.o(u/2,v.gba(v)/2)))},
if6(d4,d5,d6){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4=null,c5=d5.a,c6=d5.b,c7=A.i.F(d6,14),c8=new C.fCu(c7),c9=new C.fCq(),d0=0+c5,d1=0+c6,d2=$.Q(),d3=B.K()
d3.sav(D.c6T.aK(0,new B.a1(0,0,d0,d1)))
d4.ar(new B.a1(0,0,d0,d1),d3)
x=c5*0.34
w=new C.fCt(x,c6)
v=w.$2(0,0.5)
d3=c6*0.75
u=B.K()
u.sav(new B.c0(A.A,0.5,A.x,c4,0,B.a([A.bN.j(0.55),A.L],y.O),c4,c4).aK(0,B.bY(v,d3)))
d4.N(v,d3,u)
t=new B.e1()
t.cY(11)
for(d3=d6*2,s=0;s<26;++s){u=t.ai()
r=t.ai()
q=t.ai()
p=new B.ao(A.O,A.M,A.Q,A.S,A.P)
p.r=A.c.j(0.35+0.4*Math.sin(d3+s)).gp(0)
d4.N(new B.o(u*c5,r*c6*0.45),0.6+q*1.1,p)}for(u=y.v,o=0;o<2;++o){r=B.a([],u)
n=new B.aF(d2.r,A.ai,c4,c4,r)
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
d2=$.Q()
r=new B.ao(A.O,A.M,A.Q,A.S,A.P)
r.r=(q?D.Yk:D.brx).gp(0)
d4.af(n,r)}k=w.$2(0,0.81)
j=c9.$1(c8.$2(0.2,1.6))
i=c9.$1(c8.$2(2.4,2.6))
for(d2=d6*1.4,h=0;h<8;++h){u=D.aBa[h]
g=u.a
f=u.b
e=Math.sin(d2+g*7)*c6*0.006
r=w.$2(g,f)
q=r.a
r=r.b
u=c6*u.c
p=new B.ao(A.O,A.M,A.Q,A.S,A.P)
p.r=A.hn.gp(0)
d4.N(new B.o(q+e,r+0),u*i,p)
p=w.$2(g,f-0.015)
r=p.a
p=p.b
q=new B.ao(A.O,A.M,A.Q,A.S,A.P)
q.r=A.eo.gp(0)
d4.N(new B.o(r+e,p+0),u*0.82*i,q)}for(d2=c6*0.01,u=k.a,r=k.b,q=r+d2,p=c6*0.015,r+=p,l=c6*0.04,h=0;h<2;++h){d=F.hK[h]*c6
C.zf(d4,k,new B.o(u+d*0.04,q),new B.o(u+d*0.12,r),l,d2,j)}u=c6*0.085
C.zf(d4,k,w.$2(0.02,0.7),w.$2(0,0.6),u,c6*0.055,j)
a0=c9.$1(c8.$2(1.8,1.6))
r=c6*0.05
q=c6*0.026
C.zf(d4,w.$2(0,0.6),w.$2(-0.1,0.55),w.$2(-0.34,0.44),r,q,a0)
C.zf(d4,w.$2(0,0.6),w.$2(0.1,0.55),w.$2(0.34,0.44),r,q,a0)
a1=c9.$1(c8.$2(3.2,1.3))
q=c6*0.024
d=c6*0.018
C.zf(d4,w.$2(-0.34,0.44),w.$2(-0.17,0.33),w.$2(0,0.39),q,d,a1)
C.zf(d4,w.$2(0.34,0.44),w.$2(0.17,0.33),w.$2(0,0.39),q,d,a1)
a2=c9.$1(c8.$2(4.4,1.3))
d=c6*0.02
q=c6*0.012
C.zf(d4,w.$2(0,0.39),w.$2(-0.1,0.3),w.$2(-0.17,0.2),d,q,a2)
C.zf(d4,w.$2(0,0.39),w.$2(0.1,0.3),w.$2(0.17,0.2),d,q,a2)
d=c6*0.016
C.zf(d4,w.$2(-0.27,0.72),w.$2(-0.14,0.78),w.$2(0,0.7),d,q,c9.$1(c8.$2(3.6,1)))
C.zf(d4,w.$2(0.27,0.72),w.$2(0.14,0.78),w.$2(0,0.7),d,q,c9.$1(c8.$2(3.6,1)))
a3=new B.e1()
a3.cY(5)
for(d=d6*1.6,a4=d4.c,a5=d6*1.3,a6=i*1.4,a7=c6*0.03,s=0;s<110;++s){a8=D.aBa[A.o.F(s,8)]
a9=a3.ai()*3.141592653589793*2
b0=Math.sqrt(a3.ai())*a8.c*0.95
b1=w.$2(a8.a+Math.cos(a9)*b0,a8.b+Math.sin(a9)*b0)
b2=Math.sin(d+s)
b3=b1.a
b1=b1.b
J.bp(a4.save())
a4.translate(b3+b2*c6*0.006,b1+0)
a4.rotate((a9+Math.sin(a5+s)*0.2)*180/3.141592653589793,0,0)
b4=A.i.D(a6-A.o.F(s,10)*0.05,0,1)
b1=B.bs(A.I,p*b4,a7*b4)
$.Q()
b2=new B.ao(A.O,A.M,A.Q,A.S,A.P)
b2.r=B.ar(A.b8,A.eu,(Math.sin(d3+s)+1)/2).gp(0)
d4.bZ(b1,b2)
a4.restore()}b5=new C.fCr(c8,d4,d6,c7)
p=c6*0.075
b5.$5(0,"Bibi",w.$2(-0.27,0.72),p,5)
b5.$5(1,"Babu",w.$2(0.27,0.72),p,5.6)
b5.$5(2,"Mama",w.$2(-0.34,0.44),u,6.4)
b5.$5(3,"Baba",w.$2(0.34,0.44),u,7)
b5.$5(4,"Dada",w.$2(-0.17,0.2),p,8)
b5.$5(5,"Kaka",w.$2(0.17,0.2),p,8.6)
b6=new C.fCs(c8,d6,d4)
b6.$3(w.$2(0,0.7),c6*0.028,5.9)
b6.$3(w.$2(0,0.39),c6*0.035,7.4)
if(c7>9.3)for(u=(c7-9.3)*0.4,s=0;s<7;++s){b7=A.i.F(u+s/7,1)
C.aQv(d4,"\u2665",w.$2(Math.sin(s*2.3+d3)*0.3,0.38-b7*0.3),c6*(0.04+0.02*A.o.F(s,3)),A.hT.j((1-b7)*0.85),A.bn,0,c4)}d3=c5*0.655+(1-c9.$1(c8.$2(1,0.9)))*c5*0.4
u=c6*0.1
d=d3+c5*0.315
b8=new B.a1(d3,u,d,u+c6*0.64)
a4=B.bl(b8,new B.aO(r,r))
$.Q()
a5=B.K()
a5.r=D.iE.j(0.88).gp(0)
d4.am(a4,a5)
a5=B.bl(b8,new B.aO(r,r))
a4=B.K()
a4.b=A.a9
a4.c=q
a4.r=F.f1.gp(0)
d4.am(a5,a4)
b9=new C.fCv(b8,c6)
C.aPG(d4,"NGMY",b9.$2(0.13,0.06),c6*0.06,F.f1,!0,q)
C.aPG(d4,"Family",b9.$2(0.2,0.1),u,A.c,!0,0)
C.aPG(d4,"Tree",b9.$2(0.3,0.1),u,A.c,!0,0)
for(s=0;s<3;++s){c0=c8.$2(5.5+s*1.5,0.5)
if(c0<=0)continue
C.aPG(d4,"\u2665 "+D.cac[s],b9.$2(0.43+s*0.075,0.06).eQ(new B.o((1-c0)*30,0)),r,A.iq.j(c0),!1,0)}c1=c8.$2(11,0.5)
if(c1>0){c2=B.bs(new B.o(b8.gbw().a,c6*0.67),p,(d-d3)*0.6*A.e4.aA(0,c1))
d3=B.bl(c2,new B.aO(l,l))
$.Q()
u=B.K()
u.r=F.f1.gp(0)
d4.am(d3,u)
if(c1>0.8)C.aPG(d4,"ngmy.org",c2.cn(-d2),r,D.iE,!0,0)}if(c7>11.6){d2=c6*0.82
C.aPG(d4,"Family is everything",new B.a1(0,d2,0+x*2,d2+r),r,A.c.j(A.i.D((c7-11.6)/0.5,0,1)),!0,0)}if(c7<0.4)c3=1-c7/0.4
else c3=c7>13.5?(c7-13.5)/0.5:0
if(c3>0){$.Q()
d2=B.K()
d2.r=A.w.j(c3).gp(0)
d4.ar(new B.a1(0,0,d0,d1),d2)}},
hhf(d,e,f,g,h,i){return B.a7(d,!1).ca(B.ve(null,!1,!0,!0,new C.h38(e,h,g,i,f),A.eQ,null,A.ph,new C.h39(),y.S))},
yh:function yh(d,e){this.a=d
this.b=e},
fqL:function fqL(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fCu:function fCu(d){this.a=d},
fCq:function fCq(){},
fCt:function fCt(d,e){this.a=d
this.b=e},
fCr:function fCr(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fCs:function fCs(d,e,f){this.a=d
this.b=e
this.c=f},
fCv:function fCv(d,e){this.a=d
this.b=e},
h38:function h38(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
h39:function h39(){},
Xq:function Xq(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aGi:function aGi(d,e){var _=this
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
eQc:function eQc(d){this.a=d},
eQb:function eQb(d){this.a=d},
eQa:function eQa(d){this.a=d},
eQ9:function eQ9(d,e){this.a=d
this.b=e},
eQd:function eQd(d,e){this.a=d
this.b=e},
eQm:function eQm(d){this.a=d},
eQl:function eQl(d){this.a=d},
eQk:function eQk(){},
eQf:function eQf(d){this.a=d},
eQg:function eQg(d){this.a=d},
eQh:function eQh(d){this.a=d},
eQi:function eQi(d){this.a=d},
eQe:function eQe(d){this.a=d},
eQj:function eQj(d){this.a=d},
eQ8:function eQ8(d){this.a=d},
eQ7:function eQ7(d){this.a=d},
bx8:function bx8(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.a=h},
aOa:function aOa(){},
hA1(d,e,f,g,h,i){var x=new C.fCE(e,h,!0),w=x.$1(g)
if(i>0&&w.b.c>i)w=x.$1(g*i/w.b.c)
x=w.b.c
w.a4(d,new B.o(f.a-x/2,f.b))},
irb(c7,c8,c9){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3=null,c4=c8.a,c5=c8.b,c6=new B.a1(0,0,0+c4,0+c5)
$.Q()
x=B.K()
x.sav(D.c6Q.aK(0,c6))
c7.ar(c6,x)
w=B.K()
w.r=A.aH.j(0.07).gp(0)
for(v=0;v<c4;v+=18)c7.ah(new B.o(v,0),new B.o(v,c5),w)
for(u=0;u<c5;u+=18)c7.ah(new B.o(0,u),new B.o(c4,u),w)
for(x=c9*0.02,t=0;t<18;++t){s=A.i.F(t*0.173,1)
r=A.o.F(t,3)
q=A.i.F(t*0.311+x*(1+r),1)
$.Q()
p=new B.ao(A.O,A.M,A.Q,A.S,A.P)
p.r=A.hq.j(0.25).gp(0)
c7.N(new B.o(c4*s,c5*q),1.2+r,p)}o=c4*0.12
n=c4*0.88
m=c5*0.2
l=c5*0.62
x=$.Q()
s=y.v
k=new B.aF(x.r,A.ai,c3,c3,B.a([],s))
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
r.r=A.bp.gp(0)
c7.af(k,r)
r=B.K()
r.b=A.a9
r.c=3
r.r=(i?A.aH:A.bv).gp(0)
c7.af(k,r)
h=new B.TO(new B.ru(B.xJ(k),!1,B.a([],y.L))).gH(0)
r=h.a
q=h.b
r.ix()
p=r.e
g=p[q].b
g===$&&B.c()
g=g.a.length()
f=(m+l)/2
e=c5*0.15
d=c5*0.02
a0=B.bl(B.bs(new B.o(o,f),c5*0.26,e),new B.aO(d,d))
a1=B.K()
a1.r=A.as.gp(0)
c7.am(a0,a1)
for(a0=o+0,a1=c5*0.11,a2=c5*0.05,t=0;t<3;++t){a3=B.bs(new B.o(a0,f+(t-1)*c5*0.075),a2,a1)
a4=new B.ao(A.O,A.M,A.Q,A.S,A.P)
a4.r=A.b8.gp(0)
c7.ar(a3,a4)}a0=c5*0.07
C.hA1(c7,"+",new B.o(o,f-c5*0.22),a0,A.c,0)
a1=n-o
a5=new B.o(o+a1*0.22,m)
a3=-c5
a4=a3*0.06
a6=a5.a5(0,new B.o(a4,0))
a7=B.K()
a7.r=A.c.gp(0)
c7.N(a6,4,a7)
a7=c5*0.06
a6=a5.a5(0,new B.o(a7,0))
a8=B.K()
a8.r=A.c.gp(0)
c7.N(a6,4,a8)
a9=i?0:0.6+0.05*Math.sin(c9*6)
a4=a5.a5(0,new B.o(a4,0))
a6=-a9
a6=a5.a5(0,new B.o(Math.cos(a6)*c5*0.12-a7,Math.sin(a6)*c5*0.12))
a8=B.K()
a8.c=4
a8.d=A.bw
a8.r=(i?A.bh:A.ab).gp(0)
c7.ah(a4,a6,a8)
a1=o+a1*0.62
a4=B.bs(new B.o(a1,m),a2,c5*0.3)
a6=B.K()
a6.r=A.T.gp(0)
c7.ar(a4,a6)
s=B.a([],s)
b0=new B.aF(x.r,A.ai,c3,c3,s)
x=c5*0.14
a6=a1-x
b0.E(new B.aZ(a6,m))
for(a4=c5*0.035,a8=a3*0.035,t=0;t<6;++t){b1=(t&1)===0?a8:a4
b1=new B.aq(a6+(t+0.5)*c5*0.28/6,m+b1)
s.push(b1)
b2=b0.f
if(b2!=null)b1.ak(b2)
b0.ab()}b0.E(new B.aq(a1+x,m))
$.Q()
x=B.K()
x.b=A.a9
x.c=3
x.e=A.dP
x.r=A.cF.gp(0)
c7.af(b0,x)
b3=new B.o((o+n)/2,l)
x=B.bs(b3,m,c5*0.16)
s=B.K()
s.r=A.T.gp(0)
c7.ar(x,s)
s=B.bs(b3.a5(0,new B.o(a3*0.02,0)),e,4)
x=B.K()
x.r=A.br.gp(0)
c7.ar(s,x)
e=B.bs(b3.a5(0,new B.o(d,0)),e,4)
x=B.K()
x.r=A.br.gp(0)
c7.ar(e,x)
b4=i&&j>3.2
b5=b4?0.7+0.3*Math.sin(c9*6):0
b6=new B.o(n,f)
if(b4){x=0.03*b5
s=B.K()
s.r=A.dy.j(0.28).gp(0)
s.y=A.wn
c7.N(b6,c5*(0.2+x),s)
for(s=c9*0.5,x=0.15+x,t=0;t<8;++t){b7=t*3.141592653589793/4+s
e=Math.cos(b7)
a1=Math.sin(b7)
a6=Math.cos(b7)
a8=Math.sin(b7)
b1=new B.ao(A.O,A.M,A.Q,A.S,A.P)
b1.c=3
b1.d=A.bw
b1.r=A.m4.gp(0)
c7.ah(new B.o(n+e*c5*0.1,f+a1*c5*0.1),new B.o(n+a6*c5*x,f+a8*c5*x),b1)}}x=B.K()
x.r=(b4?A.qj:A.bv).gp(0)
c7.N(b6,c5*0.075,x)
x=c5*0.1
s=B.bs(b6.a5(0,new B.o(0,x)),c5*0.04,a0)
f=B.K()
f.r=A.bK.gp(0)
c7.ar(s,f)
b8=A.i.F((i?(j-1.8)/4.6:0)*g,g)
if(i)for(s=g*4,b9=14;b9>=1;--b9){f=A.i.F(b8-b9*7+s,g)
r.ix()
f=p[q].De(f)
e=new B.ao(A.O,A.M,A.Q,A.S,A.P)
e.r=A.dy.j(0.8*(1-b9/15)).gp(0)
e.y=K.Ot
c7.N(f.a,7-b9*0.4,e)}s=i?b8:g*0.88
r.ix()
c0=p[q].De(s).a
s=B.K()
s.r=A.dy.j(0.35).gp(0)
s.y=A.mg
c7.N(c0,a0,s)
s=B.K()
s.r=A.m4.gp(0)
c7.N(c0,c5*0.045,s)
s=a3*0.005
a3=c0.a5(0,new B.o(a3*0.015,s))
a0=c5*0.008
q=B.K()
q.r=A.w.gp(0)
c7.N(a3,a0,q)
s=c0.a5(0,new B.o(c5*0.015,s))
q=B.K()
q.r=A.w.gp(0)
c7.N(s,a0,q)
d=B.bs(c0.a5(0,new B.o(0,c5*0.01)),d,c5*0.03)
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
c2=B.bl(B.bs(new B.o(s,r),x,c4*0.8),new B.aO(a2,a2))
a2=B.K()
a2.r=A.dA.j(0.7).gp(0)
c7.am(c2,a2)
C.hA1(c7,c1,new B.o(s,r-a4),a7,A.hq,c4*0.76)},
fCE:function fCE(d,e,f){this.a=d
this.b=e
this.c=f},
hhn(d){var x
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
itD(d){var x
switch(C.hhn(d)){case"lg":x=A.hB
break
case"sony":x=A.df
break
case"apple":x=A.bP
break
case"bo":x=D.u2
break
default:x=A.aH
break}return x},
atr:function atr(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bn4:function bn4(){this.d=0
this.c=this.a=null},
eQ5:function eQ5(d,e){this.a=d
this.b=e},
eQ6:function eQ6(d,e){this.a=d
this.b=e},
eQ2:function eQ2(){},
eQ1:function eQ1(d){this.a=d},
eQ3:function eQ3(d){this.a=d},
eQ4:function eQ4(d){this.a=d},
eQ_:function eQ_(d){this.a=d},
eQ0:function eQ0(d,e){this.a=d
this.b=e},
Bi(d,e,f,g,h,i,j,k){var x=new C.fCF(e,h,i),w=x.$1(g)
if(k>0&&w.b.c>k)w=x.$1(g*k/w.b.c)
x=f.a
x=j?x:x-w.b.c/2
w.a4(d,new B.o(x,f.b))},
lE(d,e,f,g){var x
$.Q()
x=B.K()
x.r=g.gp(0)
return d.N(e,f,x)},
iI(d,e,f,g){var x,w=B.bl(e,new B.aO(f,f))
$.Q()
x=B.K()
x.r=g.gp(0)
return d.am(w,x)},
aPO(d,e,f,g,h){var x
$.Q()
x=B.K()
x.c=g
x.d=A.bw
x.r=h.gp(0)
return d.ah(e,f,x)},
z1(d,e,f,g,h){var x,w,v,u=A.i.D((f-g)/0.5,0,1)
if(u<=0)return
x=d.c
J.bp(x.save())
w=e.a
v=e.b
x.translate(w,v)
d.bU(0,A.i.D(A.lb.aA(0,u),0.01,1.25))
x.translate(-w,-v)
h.$0()
x.restore()},
iag(a0,a1,a2,a3,a4){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=a1.a,j=a1.b,i=a4.length,h=A.i.F(a2,i*2.5),g=i-1,f=A.o.D(A.i.bh(h/2.5),0,g),e=h-f*2.5,d=new B.a1(0,0,0+k,0+j)
$.Q()
x=B.K()
x.sav(new B.a9(A.aA,A.aF,A.x,a3,null,null).aK(0,d))
a0.ar(d,x)
for(x=a2*0.6,w=a2*0.5,v=0;v<3;++v){u=Math.sin(x+v)
t=Math.cos(w+v)
s=new B.ao(A.O,A.M,A.Q,A.S,A.P)
s.r=A.c.j(0.05).gp(0)
a0.N(new B.o(k*(0.15+0.35*v+0.05*u),j*(0.28+0.1*t)),j*(0.3+0.05*v),s)}r=A.cw.aA(0,A.i.D(e/0.4,0,1))
q=a4[f]
x=a0.c
J.bp(x.save())
x.clipRect(B.hS(d),$.mf()[1],!0)
w=1-r
x.translate(w*k*0.3,0)
q.c.$3(a0,a1,e)
x.restore()
x=k*0.04
u=j*0.04
t=j*0.05
p=B.bl(new B.a1(x,u,x+j*0.3,u+j*0.1),new B.aO(t,t))
x=B.K()
x.r=A.w.j(0.35).gp(0)
a0.am(p,x)
C.Bi(a0,"NGMY",new B.o(p.a+u,p.b+j*0.012),j*0.07,A.c,!0,!0,0)
o=w*j*0.05
w=k/2
x=k*0.92
C.Bi(a0,q.a,new B.o(w,j*0.64+o),j*0.095,A.c.j(r),!0,!1,x)
C.Bi(a0,q.b,new B.o(w,j*0.76+o),t,A.c.j(0.85*r),!1,!1,x)
if(f===g){n=B.bs(new B.o(w,j*0.835),j*0.06,k*0.46)
C.iI(a0,n,j*0.03,A.c.j(0.92*A.i.D((e-0.4)/0.4,0,1)))
C.Bi(a0,"Get NGMY  \xb7  ngmy.org",new B.o(w,n.b+j*0.008),u,A.as,!0,!1,n.c-n.a-12)}else for(x=j*0.01,g/=2,u=j*0.835,t=j*0.014,v=0;v<i;++v){s=v===f
m=s?t:x
l=new B.ao(A.O,A.M,A.Q,A.S,A.P)
l.r=A.c.j(s?0.95:0.4).gp(0)
a0.N(new B.o(w+(v-g)*j*0.045,u),m,l)}},
hed(d){var x=d.a,w=d.b
return new B.a1(x*0.2,w*0.16,x*0.8,w*0.56)},
he2(d,e,f,g){var x,w,v,u,t,s,r,q=C.hed(e),p=q.a,o=q.d,n=q.c
$.Q()
x=B.K()
x.r=D.aii.gp(0)
d.ar(new B.a1(p,o,n,o+e.b*0.03),x)
for(n-=p,x=q.b,w=o-x,v=0;v<9;++v){u=g?1:A.dH.aA(0,A.i.D((f-v*0.18)/0.35,0,1))
t=p+v*n/8
s=new B.ao(A.O,A.M,A.Q,A.S,A.P)
s.r=D.bjs.gp(0)
d.ar(new B.a1(t-3,o-w*u,t+3,o),s)}r=g?1:A.i.D((f-1.6)/0.4,0,1)
p-=4
o=B.K()
o.r=D.bpQ.gp(0)
d.ar(new B.a1(p,x-5,p+(n+8)*r,x+3),o)},
i6h(d,e,f){return C.he2(d,e,f,!1)},
i6j(d,e,f){var x,w,v,u,t,s,r,q,p,o,n,m,l,k
C.he2(d,e,f,!0)
x=C.hed(e)
w=x.b
v=x.d-w
u=w+v*0.55
w=x.a
t=x.c-w
C.aPO(d,new B.o(w,u),new B.o(w+t*A.i.D((f-0.2)/1.4,0,1),u),5,A.bh)
t=w+t*0.5
w=u+v*0.18
s=new B.o(t,w)
C.z1(d,s,f,1.2,new C.fpl(d,s,x))
if(f>1.6)for(r=f*4,q=0;q<6;++q){p=q*3.141592653589793/3+r
o=Math.cos(p)
n=Math.sin(p)
m=Math.cos(p)
l=Math.sin(p)
$.Q()
k=new B.ao(A.O,A.M,A.Q,A.S,A.P)
k.c=3
k.d=A.bw
k.r=A.m4.gp(0)
d.ah(new B.o(t+o*v*0.13,w+n*v*0.13),new B.o(t+m*v*0.2,w+l*v*0.2),k)}},
i6g(d,e,f){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
C.he2(d,e,f,!0)
x=C.hed(e)
for(w=x.a,v=x.c-w,u=e.a,t=x.b,s=v/3,r=s-2,q=x.d-t,p=t+q,o=0;o<3;++o){n=A.cw.aA(0,A.i.D((f-(0.1+o*0.5))/0.6,0,1))
m=w+o*v/3
l=m+(1-n)*u*0.6
$.Q()
k=new B.ao(A.O,A.M,A.Q,A.S,A.P)
k.r=A.bP.gp(0)
d.ar(new B.a1(l,t,l+r,p),k)
if(n>=1)for(l=m+6,k=m+s-8,j=0;j<4;++j){i=t+(j+0.5)*q/4
h=new B.ao(A.O,A.M,A.Q,A.S,A.P)
h.r=A.df.gp(0)
d.N(new B.o(l,i),2,h)
h=new B.ao(A.O,A.M,A.Q,A.S,A.P)
h.r=A.df.gp(0)
d.N(new B.o(k,i),2,h)}}},
i6i(d,e,a0){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=e.a,i=e.b,h=i*0.56,g=$.Q(),f=B.K()
f.r=D.aii.gp(0)
d.ar(new B.a1(0,h,0+j,h+i*0.03),f)
x=i*0.55
w=i*0.28
f=j/2
v=f-x/2
C.lE(d,new B.o(j*0.8,h-i*0.3*A.dH.aA(0,A.i.D(a0/1.5,0,1))),i*0.07,A.dy)
u=h-w
t=B.K()
t.r=D.bna.gp(0)
d.ar(new B.a1(v,u,v+x,u+w),t)
g=new B.aF(g.r,A.ai,null,null,B.a([],y.v))
g.E(new B.aZ(v-x*0.08,u))
g.E(new B.aq(f,u-w*0.55))
g.E(new B.aq(v+x*1.08,u))
g.E(new B.bu())
u=B.K()
u.r=A.ep.gp(0)
d.af(g,u)
u=v+x*0.14
g=w*0.62
t=h-g
s=B.K()
s.r=D.bpb.gp(0)
d.ar(new B.a1(u,t,u+x*0.2,t+g),s)
r=A.i.D((a0-0.8)/0.5,0,1)
for(g=h-w*0.75,u=x*0.17,t=g+w*0.38,q=0;q<2;++q){p=v+x*(0.5+0.25*q)
s=new B.ao(A.O,A.M,A.Q,A.S,A.P)
s.r=B.ar(A.du,A.dy,r).gp(0)
d.ar(new B.a1(p,g,p+u,t),s)}for(g=a0*2,u=h-w*1.4,t=a0-1.2,s=t/1,t/=0.3,q=0;q<6;++q){o=q*3.141592653589793/3+g
n=Math.cos(o)
m=Math.sin(o)
l=A.i.D(s,0,1)
k=new B.ao(A.O,A.M,A.Q,A.S,A.P)
k.r=D.dEg.j(A.i.D(t,0,1)).gp(0)
d.N(new B.o(f+n*i*0.1*l,u+m*i*0.1*l),3,k)}},
i70(d,e,a0){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=e.b,j=e.a,i=j*0.28,h=j*0.72,g=k*0.2,f=k*0.52
$.Q()
x=B.K()
x.r=A.aU.gp(0)
x.b=A.a9
w=k*0.012
x.c=w
d.ar(new B.a1(i,g,h,f),x)
v=(g+f)/2
u=k*0.1
C.iI(d,B.bs(new B.o(i,v),k*0.15,u),3,A.as)
C.iI(d,B.bs(new B.o(i,v-k*0.035),k*0.06,u),3,A.b8)
u=h-i
t=f-g
s=2*(u+t)
for(r=a0*110,q=0;q<16;++q){p=A.i.F(r+q*s/16,s)
if(p<u)o=new B.o(i+p,g)
else{p-=u
if(p<t)o=new B.o(h,g+p)
else{p-=t
o=p<u?new B.o(h-p,f):new B.o(i,f-(p-u))}}n=new B.ao(A.O,A.M,A.Q,A.S,A.P)
n.r=A.c.gp(0)
d.N(o,w,n)}m=A.i.D((a0-0.6)/0.5,0,1)*(0.7+0.3*Math.sin(a0*7))
l=new B.o(h,v)
C.lE(d,l,k*(0.14+0.03*m),A.dy.j(0.28*m))
w=B.ar(A.an,A.qj,m)
w.toString
C.lE(d,l,k*0.07,w)},
i7_(d,e,a0){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=e.b,g=e.a,f=B.bs(new B.o(g/2,h*0.34),h*0.38,g*0.62)
C.iI(d,f,10,A.bO)
for(x=f.a,w=x+14,v=f.c-x,u=v-28,t=f.b,s=t+14,r=f.d-t,q=r-28,p=0;p<18;++p)for(o=w+p*u/17,n=0;n<6;++n){$.Q()
m=new B.ao(A.O,A.M,A.Q,A.S,A.P)
m.r=A.bK.gp(0)
d.N(new B.o(o,s+n*q/5),2,m)}l=new B.o(x+v*0.25,t+r*0.3)
C.z1(d,l,a0,0.2,new C.fpS(d,l,f))
k=new B.o(x+v*0.55,t+r*0.32)
C.z1(d,k,a0,0.7,new C.fpT(d,k,f))
j=new B.o(x+v*0.78,t+r*0.55)
C.z1(d,j,a0,1.1,new C.fpU(d,j,f))
i=A.i.D((a0-1.4)/0.7,0,1)
w=t+r*0.8
$.Q()
u=B.K()
u.c=4
u.r=A.cX.gp(0)
u.d=A.bw
d.ah(new B.o(x+v*0.1,w),new B.o(x+v*(0.1+0.6*i),w),u)
if(a0>2)C.lE(d,k,r*0.2,A.aw.j(0.3*(0.6+0.4*Math.sin(a0*12))))},
i72(d,e,f){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=e.b,j=e.a,i=B.bs(new B.o(j*0.4,k*0.32),k*0.36,k*0.62)
C.iI(d,i.cn(5),8,A.as)
x=d.c
J.bp(x.save())
x.clipRRect(B.nO(B.bl(i,A.mw)),$.no(),!0)
w=A.i.D((f-0.7)/0.2,0,1)
for(v=i.a,u=i.c,t=u-v,s=i.b,r=t/7+1,q=s+(i.d-s),p=0;p<7;++p){o=v+p*t/7
$.Q()
n=new B.ao(A.O,A.M,A.Q,A.S,A.P)
n.r=B.ar(A.dA,D.cuD[p],w).gp(0)
d.ar(new B.a1(o,s,o+r,q),n)}x.restore()
m=B.bs(new B.o(j*0.8,k*0.4),k*0.24,k*0.16)
C.iI(d,m,6,A.as)
C.iI(d,m.cn(-5),4,A.b8)
C.Bi(d,"12 V",new B.o(m.gbw().a,m.gbw().b-k*0.025),k*0.05,A.w,!0,!1,0)
l=A.i.D((f-0.1)/0.6,0,1)
x=m.a
v=m.gbw()
t=m.gbw()
$.Q()
s=B.K()
s.c=4
s.r=A.aU.gp(0)
s.d=A.bw
d.ah(new B.o(x,v.b),new B.o(x-(x-u)*l,t.b),s)},
i71(d,e,f){var x,w,v,u,t,s,r,q,p=e.b,o=e.a,n=B.bs(new B.o(o/2,p*0.32),p*0.48,p*0.42)
C.iI(d,n,14,A.ax)
x=n.a
w=x+10
v=n.b
u=v+10
t=n.c
s=t-x
r=n.d
q=(r-v)*0.3
C.iI(d,new B.a1(w,u,w+(s-20),u+q),6,A.i7)
u=(f-0.2)/1.6
C.Bi(d,A.i.ac(12*A.dH.aA(0,A.i.D(u,0,1)),1)+" V",new B.o(n.gbw().a,v+14),p*0.085,A.eT,!0,!1,s-30)
q=r-q
C.lE(d,new B.o(n.gbw().a,q),s*0.22,A.as)
v=d.c
J.bp(v.save())
v.translate(n.gbw().a,q)
d.hX(0,-1.2+2.4*A.i.D(u,0,1))
C.aPO(d,A.I,new B.o(0,-s*0.18),3,A.c)
v.restore()
v=1-A.dH.aA(0,A.i.D(f/0.8,0,1))
s=p*0.5
C.aPO(d,new B.o(x,r),new B.o(o*0.2+v*-40,s),4,A.aw)
C.aPO(d,new B.o(t,r),new B.o(o*0.8+v*40,s),4,A.as)},
fo2(d,e,f,g){var x,w
C.lE(d,e,f,g)
C.lE(d,e.a5(0,new B.o(0,-f*0.18)),f*0.38,A.c.j(0.92))
x=B.bs(e.a5(0,new B.o(0,f*0.95)),f*1.1,f*1.3)
$.Q()
w=B.K()
w.r=A.c.j(0.92).gp(0)
d.cC(x,3.141592653589793,3.141592653589793,!0,w)},
hdV(d,e,f,g){var x,w,v,u,t,s,r,q=$.Q(),p=B.a([],y.v),o=new B.aF(q.r,A.ai,null,null,p)
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
$.Q()
q=B.K()
q.r=g.gp(0)
d.af(o,q)},
i4H(d,e,f){var x,w,v,u,t,s,r=e.b,q=e.a,p=new B.o(q*0.38,r*0.32)
C.z1(d,p,f,0.1,new C.fmY(d,p,r))
x=r*0.11
w=p.a5(0,new B.o(x,x))
C.z1(d,w,f,0.7,new C.fmZ(d,w,r))
x=q*0.52
v=r*0.22
u=A.i.D((f-0.5)/0.6,0,1)
t=x+q*0.3-x
C.iI(d,new B.a1(x,v,x+t*u,v+(v+r*0.2-v)),10,A.c.j(0.92))
if(u>0.6){x+=10
s=v+12
C.iI(d,new B.a1(x,s,x+t*0.7,s+8),3,A.as)
s=v+30
C.iI(d,new B.a1(x,s,x+t*0.5,s+6),3,A.bK)
v+=46
C.iI(d,new B.a1(x,v,x+t*0.6,v+6),3,A.bK)}},
i4F(d,e,f){var x,w,v,u,t,s,r,q,p=e.b,o=e.a,n=new C.fmV(d,f,p),m=p*0.07
C.fo2(d,new B.o(o*0.14,p*0.2),m,A.aH)
C.fo2(d,new B.o(o*0.86,p*0.42),m,A.bU)
m=o*0.25
x=p*0.13
w=p*0.14
n.$4(new B.a1(m,x,m+o*0.42,x+w),A.c,0.2,A.as)
if(f>0.9&&f<1.5)for(m=o*0.6,x=p*0.38,v=p*0.012,u=p*0.008,t=f*12,s=0;s<3;++s){r=Math.sin(t+s)
$.Q()
q=new B.ao(A.O,A.M,A.Q,A.S,A.P)
q.r=A.c.gp(0)
d.N(new B.o(m+s*p*0.04,x),v+u*r,q)}m=o*0.33
x=p*0.32
n.$4(new B.a1(m,x,m+o*0.46,x+w),A.as,1.5,A.c)},
i4I(d,e,f){var x,w,v,u,t,s,r,q,p=e.b
for(x=e.a/2,w=p*0.3,v=p*0.06,u=0;u<5;++u){t=new B.o(x+(u-2)*p*0.13,w)
s=0.2+u*0.35
r=f>s
C.z1(d,t,f,s,new C.fn_(d,t,p,r))
if(!r)C.hdV(d,t,v,A.an.j(0.5))}q=A.i.D((f-2)/0.4,0,1)
if(q>0)C.Bi(d,"5.0  \xb7  Loved by members",new B.o(x,p*0.46),p*0.05,A.c.j(q),!0,!1,0)},
i4G(d,e,f){var x,w,v,u,t,s,r=e.b,q=e.a
for(x=q/2,w=r*0.2,v=0;v<6;++v){u=new B.o(x+(A.o.F(v,3)-1)*r*0.2,w+A.o.ap(v,3)*r*0.2)
C.z1(d,u,f,v*0.2,new C.fmX(d,u,r,v))}t=1+0.06*Math.sin(f*8)
s=B.bs(new B.o(x,r*0.5),r*0.07*t,q*0.22*t)
if(f>1.4){C.iI(d,s,r*0.035,A.hT)
C.Bi(d,"Say hi",new B.o(s.gbw().a,s.b+r*0.012),r*0.045,A.c,!0,!1,s.c-s.a-10)}},
i62(d,e,f){var x,w,v,u,t,s,r,q,p,o,n,m=e.b,l=e.a
for(x=f*0.5,w=m*0.08,v=m*0.06,u=m*0.035,t=0;t<9;++t){s=A.i.F(x+t/9,1)
r=l*(0.15+0.7*A.i.F(t*0.37,1))
q=w+s*m*0.5
p=0.3+0.7*Math.abs(Math.cos(s*22))
o=B.bs(new B.o(r,q),v,v*p)
$.Q()
n=new B.ao(A.O,A.M,A.Q,A.S,A.P)
n.r=A.bh.gp(0)
d.bZ(o,n)
p=B.bs(new B.o(r,q),u,u*p)
n=new B.ao(A.O,A.M,A.Q,A.S,A.P)
n.r=A.bN.gp(0)
d.bZ(p,n)}},
i7J(a3,a4,a5){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=a4.b,a2=a4.a
for(x=a1*0.28,w=a1*0.36,v=a1*0.07,u=a2/2,t=a1*0.32,s=a1*0.02,r=-a1,q=r*0.02,r*=0.03,p=a1*0.03,o=a1*0.06,n=a1*0.045,m=0;m<3;++m){l=A.e4.aA(0,A.i.D((a5-m*0.3)/0.6,0,1))
k=m===1
j=k?s:0
i=B.bs(new B.o(u+(m-1)*a1*0.32+(1-l)*a2*0.5,t-j),w,x)
j=D.S0[m]
h=B.bl(i,new B.aO(12,12))
$.Q()
g=new B.ao(A.O,A.M,A.Q,A.S,A.P)
g.r=j.gp(0)
a3.am(h,g)
g=i.a
h=i.b
j=i.c
f=i.d
e=A.c.j(0.2)
d=B.bl(new B.a1(g- -8,h- -8,j+-8,f+-8),new B.aO(8,8))
a0=new B.ao(A.O,A.M,A.Q,A.S,A.P)
a0.r=e.gp(0)
a3.am(d,a0)
g+=(j-g)/2
h+=(f-h)/2
f=new B.ao(A.O,A.M,A.Q,A.S,A.P)
f.r=A.c.j(0.9).gp(0)
a3.N(new B.o(g,h),v,f)
if(m===0){j=D.S0[m]
f=new B.ao(A.O,A.M,A.Q,A.S,A.P)
f.c=5
f.d=A.bw
f.r=j.gp(0)
a3.ah(new B.o(g+q,h+r),new B.o(g+p,h+0),f)}if(k){k=B.bs(new B.o(g,h),o,o)
j=D.S0[m]
k=B.bl(k,new B.aO(4,4))
f=new B.ao(A.O,A.M,A.Q,A.S,A.P)
f.r=j.gp(0)
a3.am(k,f)}if(m===2)C.hdV(a3,new B.o(g,h),n,D.S0[m])}if(a5>1.3)C.lE(a3,new B.o(u+a1*0.05,a1*0.5-A.i.D(a5-1.3,0,0.5)*a1*0.1),a1*0.025,A.c.j(0.85))},
i7K(d,e,f){var x,w,v,u,t,s,r,q,p,o=e.b
C.i62(d,e,f)
x=B.bs(new B.o(e.a/2,o*0.46),o*0.16,o*0.5)
w=o*0.07
C.iI(d,x,w,A.as)
C.iI(d,x.cn(-3),o*0.065,A.cu)
v=new B.o(x.a+o*0.1,x.gbw().b)
u=o*0.02
t=B.bs(v,u,w)
$.Q()
s=B.K()
s.r=A.ab.gp(0)
d.ar(t,s)
u=B.bs(v,w,u)
s=B.K()
s.r=A.ab.gp(0)
d.ar(u,s)
r=A.o.F(A.i.bh(f*4),2)===0
s=x.c
u=x.gbw()
t=o*0.015
q=o*0.025
p=r?A.c0:A.mP
C.lE(d,new B.o(s-o*0.12,u.b+t),q,p)
p=x.gbw()
u=r?A.hn:A.b5
C.lE(d,new B.o(s-w,p.b-t),q,u)},
i7L(d,e,f){var x,w,v,u,t=e.b,s=e.a,r=t*0.3,q=B.bs(new B.o(s/2,r),r,s*0.5)
C.iI(d,q,14,A.T)
r=q.b
x=t*0.05
C.Bi(d,"SCORE",new B.o(q.gbw().a,r+t*0.02),x,A.hq,!0,!1,0)
w=(f-0.1)/1.9
v=q.a
u=q.c-v
C.Bi(d,""+A.i.V(A.dH.aA(0,A.i.D(w,0,1))*9800),new B.o(q.gbw().a,r+t*0.085),t*0.12,A.dy,!0,!1,u-20)
v+=16
x=q.d-x
u=v+(u-32)
r=x+t*0.025
C.iI(d,new B.a1(v,x,u,r),6,A.aV)
C.iI(d,new B.a1(v,x,v+(u-v)*A.i.D(w,0,1),x+(r-x)),6,A.b5)},
i7M(d,e,f){var x,w,v,u,t,s,r,q,p,o,n,m,l=e.b,k=e.a/2,j=A.e4.aA(0,A.i.D(f/0.8,0,1)),i=d.c
J.bp(i.save())
i.translate(k,l*0.5+(1-j)*l*0.3)
x=new B.aF($.Q().r,A.ai,null,null,B.a([],y.v))
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
u.r=A.bh.gp(0)
d.af(x,u)
u=w*0.03
x=B.K()
x.r=A.y7.gp(0)
d.ar(new B.a1(w*0.015,r,l*0.015,u),x)
C.iI(d,new B.a1(w*0.07,u,l*0.07,0),4,A.i6)
i.restore()
q=new B.e1()
q.cY(3)
for(i=(f-0.6)/1.8,x=l*0.25,p=0;p<22;++p){o=q.ai()*3.141592653589793*2
n=0.4+q.ai()
m=A.i.D(i,0,1)
w=B.bs(new B.o(k+Math.cos(o)*l*0.4*n*m,x+(Math.sin(o)*l*0.25*n*m+30*m*m)),4,6)
v=new B.ao(A.O,A.M,A.Q,A.S,A.P)
v.r=[A.bU,A.aH,A.bh,A.b5][A.o.F(p,4)].j(1-m*0.6).gp(0)
d.ar(w,v)}},
ieq(d,e,f){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=e.b,h=e.a/2,g=B.bs(new B.o(h,i*0.38),i*0.34,i*0.7)
C.iI(d,g,6,A.fY)
for(x=g.a,w=x-6,v=g.c,u=v-x,t=u+12,s=g.b,r=i*0.07,q=s-r+0,p=t/8,o=i*0.1,n=q+o*G.XK.aA(0,A.i.D((f-0.1)/0.9,0,1)),m=0;m<8;++m){l=w+m*t/8
$.Q()
k=new B.ao(A.O,A.M,A.Q,A.S,A.P)
k.r=((m&1)===0?A.aw:A.c).gp(0)
d.ar(new B.a1(l,q,l+p,n),k)}x+=14
o=s+o
w=g.d-s
C.iI(d,new B.a1(x,o,x+u*0.35,o+w*0.55),4,A.du)
v-=u*0.3
C.iI(d,new B.a1(v,o,v+u*0.2,o+w*0.7),4,A.h7)
j=A.i.D((f-1)/0.5,0,1)
if(j>0)C.Bi(d,"OPEN",new B.o(h,s-i*0.14),r*j,A.dy,!0,!1,0)},
iex(d,e,f){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=e.b
for(x=e.a/2,w=h*0.32,v=h*0.28,u=h*0.38,t=h*0.05,s=h*0.06,r=0;r<3;++r){q=B.bs(new B.o(x+(r-1)*h*0.33,w+(1-A.e4.aA(0,A.i.D((f-r*0.35)/0.6,0,1)))*h*0.4),u,v)
p=B.bl(q,new B.aO(12,12))
$.Q()
o=new B.ao(A.O,A.M,A.Q,A.S,A.P)
o.r=A.c.gp(0)
d.am(p,o)
o=q.a
p=o+8
n=q.b
m=n+8
l=q.c-o
k=q.d
n=k-n
j=D.dho[r]
p=B.bl(new B.a1(p,m,p+(l-16),m+n*0.55),new B.aO(8,8))
i=new B.ao(A.O,A.M,A.Q,A.S,A.P)
i.r=j.gp(0)
d.am(p,i)
i=o+l/2
p=new B.ao(A.O,A.M,A.Q,A.S,A.P)
p.r=A.c.j(0.85).gp(0)
d.N(new B.o(i,m+n*0.27),t,p)
o+=12
p=k-n*0.3
p=B.bl(new B.a1(o,p,o+l*0.5,p+7),new B.aO(3,3))
l=new B.ao(A.O,A.M,A.Q,A.S,A.P)
l.r=A.bK.gp(0)
d.am(p,l)
C.Bi(d,D.c9r[r],new B.o(i,k-n*0.18),s,A.as,!0,!1,0)}},
ieo(d,e,f){var x,w,v,u,t,s,r,q,p,o,n=e.b,m=n*0.2,l=B.bs(new B.o(e.a*(0.2+0.3*A.dH.aA(0,A.i.D(f/1,0,1)))+m,n*0.4),m,n*0.44)
for(m=l.a,x=l.c,w=m+(x-m)/2,v=l.b,u=n*0.13,t=n*0.09,s=0;s<3;++s){r=A.i.D((f-(0.6+s*0.4))/0.5,0,1)
if(r<=0)continue
q=B.bs(new B.o(w+(s-1)*n*0.1,v-u*(1-r)*2+4),t,t)
p=[A.co,A.bU,A.bh][s]
q=B.bl(q,new B.aO(5,5))
$.Q()
o=new B.ao(A.O,A.M,A.Q,A.S,A.P)
o.r=p.gp(0)
d.am(q,o)}w=new B.aF($.Q().r,A.ai,null,null,B.a([],y.v))
w.E(new B.aZ(m,v))
w.E(new B.aq(x,v))
u=n*0.04
t=l.d
w.E(new B.aq(x-u,t))
w.E(new B.aq(m+u,t))
w.E(new B.bu())
u=B.K()
u.r=A.aO.gp(0)
d.af(w,u)
C.aPO(d,new B.o(m,v),new B.o(m-n*0.05,v-n*0.07),4,A.aO)
v=n*0.08
t+=n*0.03
u=n*0.025
C.lE(d,new B.o(m+v,t),u,A.as)
C.lE(d,new B.o(x-v,t),u,A.as)},
iep(d,e,f){var x,w=e.b,v=e.a,u=-w,t=u*0.4+(v+w*0.6)*A.i.D(f/2.4,0,1),s=w*0.36,r=t+w*0.28
C.iI(d,new B.a1(t,s,r,s+w*0.17),5,A.c)
s=w*0.4
C.iI(d,new B.a1(r,s,r+w*0.12,s+w*0.13),5,A.cF)
s=w*0.54
r=w*0.03
C.lE(d,new B.o(t+w*0.07,s),r,A.as)
C.lE(d,new B.o(t+w*0.32,s),r,A.as)
x=new B.o(v/2,w*0.24)
C.z1(d,x,f,0.5,new C.fBI(d,x,w))
C.z1(d,x.a5(0,new B.o(w*0.11,u*0.07)),f,1.1,new C.fBJ(d,x,w))},
hbV(d){var x=d.b
return B.bs(new B.o(d.a*0.45,x*0.32),x*0.36,x*0.62)},
aPm(d,e,f,g){var x,w,v,u,t,s,r=e.d,q=e.b,p=r-q
C.iI(d,e,p*0.08,A.c)
x=e.a
w=e.c-x
v=p*0.12
u=p*0.2
C.lE(d,new B.o(x+w*0.2,e.gbw().b-v),u,g)
t=x+w*0.42
u=q+u
C.iI(d,new B.a1(t,u,t+w*0.4*f,u+p*0.07),3,A.bp)
u=q+p*0.38
s=p*0.05
C.iI(d,new B.a1(t,u,t+w*0.3*f,u+s),3,A.bK)
q+=p*0.5
C.iI(d,new B.a1(t,q,t+w*0.36*f,q+s),3,A.bK)
x+=w*0.06
v=r-v
$.Q()
r=B.K()
r.r=A.ax.gp(0)
d.ar(new B.a1(x,v,x+w*0.88*f,v+p*0.04),r)},
i5I(d,e,f){var x=C.hbV(e)
C.z1(d,x.gbw(),f,0,new C.foF(d,x))
C.aPm(d,x,A.dH.aA(0,A.i.D((f-0.4)/1.6,0,1)),A.cG)},
i5H(d,e,f){var x,w,v,u,t,s,r,q,p=C.hbV(e),o=A.o.F(A.i.bh(f/0.6),4),n=d.c
J.bp(n.save())
n.translate(p.gbw().a,p.gbw().b)
d.hX(0,-0.06+0.03*Math.sin(f*3))
n.translate(-p.gbw().a,-p.gbw().b)
C.aPm(d,p,1,D.aud[o])
n.restore()
for(n=e.a*0.78,x=e.b,w=x*0.16,v=x*0.032,u=x*0.045,t=0;t<4;++t){s=w+t*x*0.09
r=D.aud[t]
$.Q()
q=new B.ao(A.O,A.M,A.Q,A.S,A.P)
q.r=r.gp(0)
d.N(new B.o(n,s),v,q)
if(t===o){r=new B.ao(A.O,A.M,A.Q,A.S,A.P)
r.b=A.a9
r.c=3
r.r=A.c.gp(0)
d.N(new B.o(n,s),u,r)}}},
i5J(d,e,f){var x,w,v,u,t,s,r=e.b,q=e.a,p=r*0.32,o=d.c
J.bp(o.save())
o.translate(q*0.34,p)
d.hX(0,-0.1)
C.aPm(d,B.bs(A.I,r*0.24,r*0.4),1,A.cG)
o.restore()
x=B.bs(new B.o(q*0.74,p),r*0.3,r*0.17)
C.iI(d,x,r*0.03,A.dA)
C.iI(d,x.cn(-3),r*0.025,A.aH)
for(p=f*0.9,o=x.a,w=x.b,w+=(x.d-w)/2,v=0;v<3;++v){u=A.i.F(p+v/3,1)
t=B.bY(new B.o(o,w),r*(0.04+0.16*u))
$.Q()
s=new B.ao(A.O,A.M,A.Q,A.S,A.P)
s.b=A.a9
s.c=3
s.r=A.c.j(1-u).gp(0)
d.cC(t,2.199114857512855,1.8849555921538759,!1,s)}if(f>1.4){u=A.e4.aA(0,A.i.D((f-1.4)/0.5,0,1))
p=x.c-o
C.aPm(d,B.bs(x.gbw(),p*0.5*u,p*0.8*u),1,A.cG)}},
i5K(d,e,f){var x,w,v,u,t,s,r,q,p,o,n,m=C.hbV(e)
for(x=d.c,w=m.a,v=m.c-w,w+=v/2,u=e.b,t=m.b,s=m.d-t,t+=s/2,v*=0.8,s*=0.9,r=0;r<4;++r){q=A.e4.aA(0,A.i.D((f-r*0.25)/0.6,0,1))
J.bp(x.save())
p=r-1.5
x.translate(w+p*u*0.1,t)
x.rotate(p*0.18*q*180/3.141592653589793,0,0)
p=B.bs(A.I,s,v)
o=D.ds9[r]
p=B.bl(p,new B.aO(10,10))
$.Q()
n=new B.ao(A.O,A.M,A.Q,A.S,A.P)
n.r=o.gp(0)
d.am(p,n)
x.restore()}C.z1(d,m.gbw(),f,1.2,new C.foG(d,m,e))},
ifr(d,e,f){var x,w=e.b,v=new B.o(e.a/2,w*0.38),u=w*0.2,t=B.bs(v.a5(0,new B.o(0,-w*0.07-(1-A.e4.aA(0,A.i.D((f-0.2)/1,0,1)))*w*0.07)),u,w*0.17)
$.Q()
x=B.K()
x.b=A.a9
x.c=w*0.03
x.r=A.ct.gp(0)
d.cC(t,3.141592653589793,3.141592653589793,!1,x)
C.iI(d,B.bs(v,u,w*0.26),10,A.bh)
C.lE(d,v,w*0.025,A.Gg)
u=B.bs(v.a5(0,new B.o(0,w*0.04)),w*0.05,w*0.012)
x=B.K()
x.r=A.Gg.gp(0)
d.ar(u,x)
if(f>1.2){u=A.i.F(f*2,1)
C.lE(d,v,w*(0.17+0.04*u),A.dy.j(0.25*(1-u)))}},
ifq(d,e,f){var x,w,v,u,t=e.b,s=e.a/2,r=t*0.34,q=new B.o(s,r),p=t*0.24
C.lE(d,q,p*1.1,A.dg)
C.lE(d,q,p,A.bK)
C.lE(d,q,p*0.9,A.ct)
x=d.c
J.bp(x.save())
x.translate(s,r)
r=f<1.4?1:0.3
d.hX(0,f*3*r)
C.lE(d,A.I,p*0.35,A.bv)
for(r=p*0.6,w=0;w<6;++w){v=B.bs(A.I,3,r)
$.Q()
u=new B.ao(A.O,A.M,A.Q,A.S,A.P)
u.r=A.ab.gp(0)
d.ar(v,u)
x.rotate(29.999999999999996,0,0)}x.restore()
for(r=t*0.6-t*0.04,x=t*0.014,w=0;w<4;++w){v=f>0.4+w*0.5?A.b5:A.aV
$.Q()
u=new B.ao(A.O,A.M,A.Q,A.S,A.P)
u.r=v.gp(0)
d.N(new B.o(s+(w-1.5)*t*0.06,r),x,u)}},
ift(d,e,f){var x,w,v,u,t,s,r,q,p,o,n=e.b,m=e.a,l=new B.o(m*0.62,n*0.34),k=n*0.22
C.lE(d,l,k*1.1,A.dg)
C.lE(d,l,k*0.7,A.dy.j(0.12))
x=B.bs(l.a5(0,new B.o(-k*1.15,0)),k*2,k*0.35)
$.Q()
w=B.K()
w.r=A.bK.gp(0)
d.bZ(x,w)
for(x=n*0.12,w=n*0.15,v=n*0.07,u=d.c,t=m*0.12,s=0;s<3;++s){r=A.jD.aA(0,A.i.D((f-(0.2+s*0.6))/0.9,0,1))
q=B.ks(new B.o(t,n*(0.18+s*0.12)),l,r)
q.toString
J.bp(u.save())
u.translate(q.a,q.b)
u.rotate(0.4*(1-r)*180/3.141592653589793,0,0)
q=1-0.6*r
u.scale(q,q)
q=B.bs(A.I,w,x)
p=D.dtW[s]
q=B.bl(q,new B.aO(5,5))
o=new B.ao(A.O,A.M,A.Q,A.S,A.P)
o.r=p.gp(0)
d.am(q,o)
o=B.bs(A.I,3,v)
q=new B.ao(A.O,A.M,A.Q,A.S,A.P)
q.r=A.dr.gp(0)
d.ar(o,q)
u.restore()}},
ifs(d,e,f){var x,w,v,u,t,s,r,q,p=null,o=e.b,n=e.a/2,m=o*0.32,l=new B.o(n,m)
for(x=f*0.7,w=0;w<3;++w){v=A.i.F(x+w/3,1)
$.Q()
u=new B.ao(A.O,A.M,A.Q,A.S,A.P)
u.b=A.a9
u.c=3
u.r=A.aH.j(0.6*(1-v)).gp(0)
d.N(l,o*(0.12+0.22*v),u)}v=A.e4.aA(0,A.i.D(f/0.7,0,1))
x=d.c
J.bp(x.save())
x.translate(n,m)
d.bU(0,v)
m=$.Q().r
n=y.v
u=new B.aF(m,A.ai,p,p,B.a([],n))
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
n=new B.aF(m,A.ai,p,p,B.a([],n))
n.E(new B.aZ(t*0.06,0))
n.E(new B.aq(t*0.015,o*0.05))
n.E(new B.aq(o*0.07,t*0.05))
t=B.K()
t.b=A.a9
t.c=o*0.03
t.d=A.bw
t.r=A.c.gp(0)
d.af(n,t)
x.restore()},
ieE(d,e,f){var x,w,v,u,t=e.b,s=t*0.15
for(x=e.a/2,w=t*0.2,v=0;v<6;++v){u=new B.o(x+(A.o.F(v,3)-1)*s*1.35,w+A.o.ap(v,3)*s*1.35)
C.z1(d,u,f,0.1+v*0.3,new C.fBV(d,u,s,v))}},
ieD(d,e,f){var x,w,v,u,t,s,r,q,p,o,n=e.b,m=A.i.D((f-0.1)/2,0,1)
for(x=m*6,w=e.a/2,v=n*0.56,u=n*0.035,t=0;t<6;++t){s=A.i.D(x-t,0,1)
r=n*(0.36-t*0.04)*2
r=B.bs(new B.o(w,v),r,r)
$.Q()
q=new B.ao(A.O,A.M,A.Q,A.S,A.P)
q.b=A.a9
q.c=u
q.d=A.bw
q.r=D.d94[t].gp(0)
d.cC(r,3.141592653589793,3.141592653589793*s,!1,q)}p=3.141592653589793+3.141592653589793*m
o=new B.o(w+Math.cos(p)*n*0.2,v+Math.sin(p)*n*0.2)
C.lE(d,o,n*0.03,A.c)
C.aPO(d,o,o.a5(0,new B.o(n*0.06,-n*0.07)),5,A.dW)},
ieC(d,e,f){var x,w,v,u,t,s,r,q,p,o,n=e.b,m=e.a
for(x=f*7,w=m/2,v=n*0.5,u=n*0.07,t=0;t<7;++t){s=n*(0.08+0.2*(0.5+0.5*Math.sin(x+t*1.3)))
r=w+(t-3.5)*n*0.09
q=v-s
p=D.d9q[t]
q=B.bl(new B.a1(r,q,r+u,q+s),new B.aO(5,5))
$.Q()
r=new B.ao(A.O,A.M,A.Q,A.S,A.P)
r.r=p.gp(0)
d.am(q,r)}for(x=f*0.6,w=n*0.3,t=0;t<3;++t){o=A.i.F(x+t/3,1)
v=m*(0.3+0.4*t/2)+10*Math.sin(o*6)
u=w-o*n*0.2
r=1-o
q=A.c.j(r)
$.Q()
p=new B.ao(A.O,A.M,A.Q,A.S,A.P)
p.r=q.gp(0)
d.N(new B.o(v,u),6,p)
v+=5
r=A.c.j(r)
p=new B.ao(A.O,A.M,A.Q,A.S,A.P)
p.c=2.5
p.d=A.bw
p.r=r.gp(0)
d.ah(new B.o(v,u+0),new B.o(v,u+-18),p)}},
ieF(d,e,f){var x,w,v,u,t,s,r,q=e.b
for(x=e.a/2,w=q*0.14,v=q*0.26,u=0;u<4;++u){t=A.i.D((f-u*0.3)/0.7,0,1)
if(t<=0)continue
s=G.XK.aA(0,t)
C.Bi(d,"NGMY"[u],new B.o(x+(u-1.5)*q*0.2,w-(1-s)*q*0.25),v,D.dg3[u],!0,!1,0)}r=A.i.D((f-1.4)/0.6,0,1)
x-=q*0.4
w=q*0.46
$.Q()
v=B.K()
v.r=A.c.gp(0)
d.ar(new B.a1(x,w,x+q*0.8*r,w+4),v)},
a3K(d,e,f,g){var x=$.i4E[A.o.D(f,0,7)]
C.iag(d,e,g,y.T.a(x[0]),y.m.a(x[1]))},
jt:function jt(d,e,f){this.a=d
this.b=e
this.c=f},
fCF:function fCF(d,e,f){this.a=d
this.b=e
this.c=f},
fpl:function fpl(d,e,f){this.a=d
this.b=e
this.c=f},
fpS:function fpS(d,e,f){this.a=d
this.b=e
this.c=f},
fpT:function fpT(d,e,f){this.a=d
this.b=e
this.c=f},
fpU:function fpU(d,e,f){this.a=d
this.b=e
this.c=f},
fmY:function fmY(d,e,f){this.a=d
this.b=e
this.c=f},
fmZ:function fmZ(d,e,f){this.a=d
this.b=e
this.c=f},
fmV:function fmV(d,e,f){this.a=d
this.b=e
this.c=f},
fmW:function fmW(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fn_:function fn_(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fmX:function fmX(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fBI:function fBI(d,e,f){this.a=d
this.b=e
this.c=f},
fBJ:function fBJ(d,e,f){this.a=d
this.b=e
this.c=f},
foF:function foF(d,e){this.a=d
this.b=e},
foG:function foG(d,e,f){this.a=d
this.b=e
this.c=f},
fBV:function fBV(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g}},D,E,F,O
J=c[1]
B=c[0]
A=c[2]
G=c[233]
I=c[184]
H=c[38]
K=c[101]
L=c[118]
M=c[100]
N=c[126]
C=a.updateHolder(c[28],C)
D=c[98]
E=c[43]
F=c[96]
O=c[252]
C.wU.prototype={}
C.wl.prototype={}
C.yh.prototype={}
C.Xq.prototype={
S(){return new C.aGi(null,null)}}
C.aGi.prototype={
gQg(){var x,w=this,v=w.d
if(v===$){x=B.bm(null,A.oo,null,1,null,w)
x.cr(0)
w.d!==$&&B.bF()
w.d=x
v=x}return v},
gAr(){var x=this.e
return x===$?this.e=this.a.e:x},
gaRh(){var x=this.as
if(x===$)x=this.as=this.a.f?3:0
return x},
gazP(){var x=this.gQg().y
x=x==null?null:A.o.ap(x.a,1000)
return(x==null?0:x)/1000},
asG(){var x=this,w=x.Q
if(w!=null)w.a1(0)
x.Q=B.cy(B.dq(0,0,0,0,0,x.gaRh()>0&&x.gazP()<3.2?13:10),x.gc8q())},
c8r(){var x=this
if(x.c==null)return
if(x.f<0&&!x.r){x.m(new C.eQc(x))
H.dE(900,"",40,0,0.2,"noise")}x.asG()},
Y(){var x=this
x.a2()
x.w=B.cy(x.a.r,x.gb1e())
x.asG()
x.aY3()
H.dE(520,"",80,0,0.25,"tri")},
aY3(){var x=this.z
if(x!=null)x.a1(0)
this.z=B.cy(A.jY,new C.eQb(this))},
cbV(){var x=this.c
if(x!=null&&B.a7(x,!1).pW()){x=this.c
x.toString
B.a7(x,!1).O(this.gAr())}},
akl(){var x=this,w=x.w
if(w!=null)w.a1(0)
x.w=null
x.y=!0
x.aY3()},
az4(d){this.m(new C.eQ9(this,d))
H.dE(900,"",40,0,0.3,"noise")},
b3a(d){this.m(new C.eQd(this,d))
H.dE(700,"",60,0,0.3,"tri")},
t(){var x=this,w=x.w
if(w!=null)w.a1(0)
w=x.z
if(w!=null)w.a1(0)
w=x.Q
if(w!=null)w.a1(0)
x.gQg().t()
x.bA9()},
B(d){var x,w,v,u,t=this,s=null,r=B.m(10),q=B.L(t.gcbW(),A.r,6),p=B.a([new B.ac(0,A.G,C.itD(t.a.d).j(0.25),A.I,40)],y.V),o=B.m(4),n=y.p,m=B.a([B.c9(t.gQg(),new C.eQl(t),s)],n)
if(t.r)m.push(t.bFM())
r=B.at(new B.fF(1.7777777777777777,B.q(s,B.by(o,new B.an(A.a0,s,A.b2,A.t,m,s),A.aq),A.f,s,s,new B.p(s,s,q,r,p,s,A.n),s,s,s,s,s,s,s,s),s),s,s,s)
q=t.y
p=q?1:0
o=B.nZ(s,A.aT,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s)
o=B.aG(s,s,s,s,B.X(A.cz,A.c,s,s,s,s),s,s,s,t.gb1e(),s,s,s,o,"Back to the board",s)
m=B.m(20)
x=t.f
w=t.a
o=B.A(B.a([o,A.b3,B.q(s,B.d(x>=0?w.c+" \xb7 "+D.kw[x].a:w.c+" \xb7 CH "+(t.gAr()+1),s,s,s,s,s,s,L.AG,s,s,s),A.f,s,s,new B.p(A.aT,s,s,m,s,s,A.n),s,s,s,s,A.md,s,s,s)],n),A.l,s,A.e,A.j,0,s,s)
m=t.ctA()
x=A.w.j(0.65)
w=B.m(18)
v=t.f
v=B.d(v>=0?D.kw[v].a:D.Ro[t.gAr()].a,s,s,s,s,s,s,A.hj,A.K,s,s)
u=t.f
return B.c4(s,A.w,B.bo(!0,B.aA(A.c5,new B.an(A.a0,s,A.b2,A.t,B.a([r,B.zk(new B.dy(!q,B.x(B.a([new B.D(D.bAY,o,s),A.am,m,A.b3,B.q(s,B.x(B.a([v,B.d(u>=0?D.kw[u].c:D.Ro[t.gAr()].b,s,s,s,s,s,s,M.ab_,A.K,s,s)],n),A.l,s,A.e,A.R,0,A.p),A.f,s,s,new B.p(x,s,s,w,s,s,A.n),s,s,s,A.bi,A.bV,s,s,s)],n),A.l,s,A.e,A.j,0,A.p),s),A.b4,A.iJ,p)],n),s),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new C.eQm(t),s,s,s,s,s,s,!1,A.a4),!0,!1,A.ag,!0,!0),s,!1,!1,s,s)},
ctA(){var x=this,w=null,v=new C.eQk(),u=A.w.j(0.72),t=B.m(22),s=B.L(A.aH.j(0.5),A.r,1)
return B.q(w,B.A(B.a([v.$3(A.wG,"CH \u2212",new C.eQf(x)),v.$3(A.hV,"CH +",new C.eQg(x)),v.$5$color$on(A.HE,"TV",new C.eQh(x),A.aH,x.f<0),v.$5$color$on(A.z6,"APPS",new C.eQi(x),A.br,x.r),v.$5$color$on(A.CC,"ADS",new C.eQj(x),A.bU,x.f===0)],y.p),A.l,w,A.e,A.R,0,w,w),A.f,w,w,new B.p(u,w,s,t,w,w,A.n),w,w,w,w,A.a0I,w,w,w)},
bFM(){return new C.atr(this.a.d,this.gcia(),new C.eQ8(this),null)},
gcbW(){switch(C.hhn(this.a.d)){case"apple":var x=A.df
break
case"bo":x=D.FC
break
case"sony":x=D.bf2
break
case"lg":x=A.en
break
default:x=A.cu
break}return x}}
C.bx8.prototype={
a4(d,e){var x=this
return C.hgT(d,e,x.b,x.d,x.e,x.c)},
aD(d){return!0}}
C.aOa.prototype={
t(){var x=this,w=x.a9$
if(w!=null)w.a6(0,x.gbB())
x.a9$=null
x.a3()},
aY(){this.b5()
this.b4()
this.bC()}}
C.atr.prototype={
S(){return new C.bn4()},
a6H(d,e){return this.d.$1(e)}}
C.bn4.prototype={
b1f(d){this.m(new C.eQ5(this,d))
this.a.a6H(0,d)},
B(d){var x,w=this
switch(C.hhn(w.a.c)){case"lg":x=w.c4v()
break
case"sony":x=w.cBl()
break
case"apple":x=w.cbX()
break
case"bo":x=w.bGH()
break
default:x=w.cvD()
break}return x},
gafh(){var x=new B.V(Date.now(),0,!1)
return A.a.b_(A.o.u(B.dh(x)),2,"0")+":"+A.a.b_(A.o.u(B.fP(x)),2,"0")},
az5(d,e,f,g,h,i,j){var x,w,v=null,u=D.kw[d],t=this.d===d,s=u.d,r=B.ar(s,A.w,0.55)
r.toString
r=B.a([s,r],y.O)
s=B.m(h)
if(t)x=i
else x=A.L
x=B.L(x,A.r,t?2.5:0)
w=B.a([B.d(u.b,v,v,v,v,v,v,B.l(v,v,v,v,v,v,v,v,v,v,v,e,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],y.p)
if(g)w.push(new B.D(A.us,B.d(u.a,v,1,A.a2,v,v,v,A.VL,v,v,v),v))
return B.aA(v,B.q(v,B.x(w,A.l,v,A.bb,A.j,0,A.p),A.f,v,v,new B.p(v,v,x,s,v,new B.a9(A.aA,A.aF,A.x,r,v,v),A.n),v,f,v,v,v,v,v,j),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.eQ6(this,d),v,v,v,v,v,v,!1,A.a4)},
b1g(d,e,f,g,h,i){return this.az5(d,e,f,!1,g,h,i)},
cvD(){var x,w,v,u,t,s,r=this,q=null,p=r.a.e,o=y.p,n=B.A(B.a([D.fLT,A.ae,D.fDR,A.b3,D.c_w,A.ae,D.bWh,A.ae,B.d(r.gafh(),q,q,q,q,q,q,D.aVW,q,q,q)],o),A.l,q,A.e,A.j,0,q,q),m=D.kw[r.d],l=B.d(m.a,q,q,q,q,q,q,A.l6,q,q,q)
m=B.d(m.c,q,1,A.a2,q,q,q,D.fvf,q,q,q)
x=A.c.j(0.08)
w=B.a([],o)
for(v=0;v<2;++v){u=new B.aO(8,8)
w.push(B.q(q,B.X(D.cu0[v],A.ab,q,q,q,17),A.f,q,q,new B.p(A.by,q,q,new B.bf(u,u,u,u),q,q,A.n),q,34,q,A.NW,q,q,q,34))}u=B.a([],o)
for(t=0;t<8;++t){s=r.d===t?1.12:1
u.push(new B.D(A.NW,new B.zl(r.az5(t,14,44,!0,8,A.aH,52),s,A.b4,A.fS,q,q),q))}w.push(B.E(B.ci(B.A(u,A.l,q,A.e,A.j,0,q,q),A.t,q,A.y,q,q,q,q,A.aL),1))
return B.aA(q,B.q(q,B.x(B.a([n,A.b3,new B.bM(A.a6,q,q,l,q),new B.bM(A.a6,q,q,m,q),A.am,B.q(q,B.A(w,A.l,q,A.e,A.j,0,q,q),A.f,q,q,new B.p(x,q,q,A.Xs,q,q,A.n),q,q,q,q,A.Op,q,q,q)],o),A.l,q,A.e,A.j,0,A.p),A.f,q,q,D.b6V,q,q,q,q,G.alh,q,q,q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,p,q,q,q,q,q,q,!1,A.a4)},
c4v(){var x=null,w=this.a.e,v=y.p
return B.aA(x,B.q(x,B.x(B.a([B.A(B.a([B.q(x,D.fS7,A.f,x,x,new B.p(A.hB,x,x,B.m(10),x,x,A.n),x,x,x,x,A.n_,x,x,x),A.bm,D.fKP,A.b3,B.d(this.gafh(),x,x,x,x,x,x,A.EB,x,x,x)],v),A.l,x,A.e,A.j,0,x,x),A.b3,new B.a6(x,62,B.hN(x,new C.eQ1(this),8,x,x,A.aL,new C.eQ2(),!1),x)],v),A.E,x,A.e,A.j,0,A.p),A.f,x,x,D.b75,x,x,x,x,O.O2,x,x,x),A.y,!1,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,w,x,x,x,x,x,x,!1,A.a4)},
cBl(){var x,w,v,u,t=this,s=null,r=D.kw[t.d],q=t.a.e,p=y.p,o=B.a([B.q(s,D.f7Y,A.f,s,s,new B.p(A.dk,s,s,B.m(12),s,s,A.n),s,s,s,s,A.yP,s,s,s),A.ae],p)
for(x=0;x<3;++x){w=D.doc[x]
v=w==="Apps"?A.c:A.aD
o.push(new B.D(A.iK,B.d(w,s,s,s,s,s,s,new B.G(!0,v,s,s,s,s,9.5,A.V,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s),s,s,s),s))}o.push(A.b3)
o.push(B.d(t.gafh(),s,s,s,s,s,s,D.fuE,s,s,s))
o=B.A(o,A.l,s,A.e,A.j,0,s,s)
v=r.d
u=B.ar(v,A.w,0.7)
u.toString
u=B.a([v,u],y.O)
v=B.m(10)
return B.aA(s,B.q(s,B.x(B.a([o,A.fK,B.E(B.A(B.a([B.E(B.q(s,B.x(B.a([B.d(r.b,s,s,s,s,s,s,A.pS,s,s,s),B.d(r.a,s,s,s,s,s,s,A.nY,s,s,s),B.d(r.c,s,2,A.a2,s,s,s,D.fBc,s,s,s),A.cU,B.aA(s,B.q(s,D.fHx,A.f,s,s,new B.p(A.c,s,s,B.m(10),s,s,A.n),s,s,s,s,A.yP,s,s,s),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new C.eQ3(t),s,s,s,s,s,s,!1,A.a4)],p),A.E,s,A.ms,A.j,0,A.p),A.f,s,s,new B.p(s,s,s,v,s,new B.a9(A.a6,A.aa,A.x,u,s,s),A.n),s,s,s,s,A.cm,s,s,s),5),A.ae,B.E(B.im(!0,s,s,A.y,D.ff6,new C.eQ4(t),8,A.ag,s,A.ah,!1),6)],p),A.l,s,A.e,A.j,0,s,s),1)],p),A.E,s,A.e,A.j,0,A.p),A.f,D.brB,s,s,s,s,s,s,A.ha,s,s,s),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,q,s,s,s,s,s,s,!1,A.a4)},
cbX(){var x,w,v,u,t=this,s=null,r=t.a.e,q=y.p,p=B.A(B.a([D.c07,A.r4,D.fYj,A.b3,B.d(t.gafh(),s,s,s,s,s,s,A.ED,s,s,s)],q),A.l,s,A.e,A.j,0,s,s),o=B.a([],q)
for(x=0;x<8;++x){w=t.d===x
v=w?6:0
u=w?D.du2:A.Sn
w=w?1.18:1
o.push(new B.D(A.f3,B.cT(s,new B.zl(t.b1g(x,20,44,12,A.c,44),w,A.b4,A.eG,s,s),s,s,A.b4,new B.p(s,s,s,s,u,s,A.n),A.eG,s,s,s,new B.R(0,0,0,v),s,s,s,s),s))}return B.aA(s,B.q(s,B.x(B.a([p,A.b3,new B.a6(s,68,B.ci(B.A(o,A.dL,s,A.e,A.j,0,s,s),A.t,s,A.y,s,s,s,s,A.aL),s),A.ay,B.d(D.kw[t.d].a,s,s,s,s,s,s,A.oZ,s,s,s)],q),A.l,s,A.e,A.j,0,A.p),A.f,s,s,D.b6X,s,s,s,s,D.a_X,s,s,s),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,r,s,s,s,s,s,s,!1,A.a4)},
bGH(){var x,w,v,u,t,s,r=this,q=null,p=r.a.e,o=D.kw[r.d],n=y.p
o=B.E(B.x(B.a([D.fH4,A.b3,B.d(o.b,q,q,q,q,q,q,A.mB,q,q,q),A.ay,B.d(o.a,q,q,q,q,q,q,D.fmE,q,q,q),A.bG,B.d(o.c,q,q,q,q,q,q,D.fBv,q,q,q),A.am,B.aA(q,B.q(q,D.h_r,A.f,q,q,D.b7s,q,q,q,q,D.bA6,q,q,q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.eQ_(r),q,q,q,q,q,q,!1,A.a4),A.b3],n),A.E,q,A.e,A.j,0,A.p),4)
x=B.q(q,q,A.f,D.bpi,q,q,q,q,q,A.f2,q,q,q,0.6)
w=B.a([],n)
for(v=0;v<8;++v){u=D.kw[v]
t=r.d===v
s=t?D.u2:D.afZ
t=t?12:10.5
w.push(B.aA(q,new B.D(A.rQ,B.d(u.a,q,q,q,q,q,q,new B.G(!0,s,q,"serif",q,q,t,A.k0,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q),q,q,q),q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.eQ0(r,v),q,q,q,q,q,q,!1,A.a4))}return B.aA(q,B.q(q,B.A(B.a([o,x,B.E(B.cd(w,q,q,q,q,q,A.ah,!1),3)],n),A.l,q,A.e,A.j,0,q,q),A.f,D.bvd,q,q,q,q,q,q,A.GS,q,q,q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,p,q,q,q,q,q,q,!1,A.a4)}}
C.jt.prototype={}
var z=a.updateTypes(["~(uK,av,H)","~()","Xq(Z,bv<H>,bv<H>)","~(F)"])
C.fC8.prototype={
$1(d){var x=null,w=B.fq(x,A.cr,x,1,x,B.cP(x,x,x,x,x,x,x,x,x,B.l(x,x,this.b,x,x,x,x,x,x,x,x,d,x,x,A.u,x,x,!0,x,x,x,x,x,x,x,x),this.a),A.a5,A.bX,x,A.dz,A.bY)
w.e5()
return w},
$S:275}
C.fC2.prototype={
$1(d){return Math.min(this.a*0.085,this.b*0.44/(d.length*0.62))},
$S:382}
C.fVS.prototype={
$1(d){var x=this.b,w=B.ks(this.a,x,d)
w.toString
x=B.ks(x,this.c,d)
x.toString
x=B.ks(w,x,d)
x.toString
return x},
$S:2002}
C.foi.prototype={
$2(d,e){return A.i.D((this.a-d)/e,0,1)},
$S:81}
C.fof.prototype={
$1(d){return A.dC.aA(0,d)},
$S:5}
C.foh.prototype={
$2(d,e){var x=this.b
return new B.o(this.a.a+d*x,this.c.b-e*x)},
$S:391}
C.fog.prototype={
$5(d,e,f,g,h){var x,w,v,u=this.a.$2(h,0.5)
if(u<=0)return
x=this.b
w=x.c
J.bp(w.save())
w.translate(f.a,f.b)
x.bU(0,A.i.D(A.lb.aA(0,u),0.01,1.3))
v=this.c
E.fVT(x,A.I,g,d,v,v>4.5?0.6:0)
C.hEv(x,new B.o(0,g*1.42),g,e)
w.restore()},
$S:768}
C.fsZ.prototype={
$1(d){var x=this,w=null,v=x.c?A.u:A.a8
v=B.fq(w,A.cr,w,1,w,B.cP(w,w,w,w,w,w,w,w,w,B.l(w,w,x.b,w,w,w,w,w,w,w,w,d,w,w,v,w,w,!0,w,x.d,w,w,w,w,w,w),x.a),A.a5,A.bX,w,A.dz,A.bY)
v.e5()
return v},
$S:275}
C.fqL.prototype={
$1(d){var x=this,w=null,v=x.c?A.u:A.V
v=B.fq(w,A.cr,w,1,w,B.cP(w,w,w,w,w,w,w,w,w,B.l(w,w,x.b,w,w,w,w,w,w,w,w,d,w,w,v,w,w,!0,w,x.d,w,w,w,w,w,w),x.a),A.a5,A.bX,w,A.dz,A.bY)
v.e5()
return v},
$S:275}
C.fCu.prototype={
$2(d,e){return A.i.D((this.a-d)/e,0,1)},
$S:81}
C.fCq.prototype={
$1(d){return A.dC.aA(0,d)},
$S:5}
C.fCt.prototype={
$2(d,e){var x=this.b
return new B.o(this.a+d*x,e*x)},
$S:391}
C.fCr.prototype={
$5(d,e,f,g,h){var x,w,v,u=this,t=u.a.$2(h,0.6)
if(t<=0)return
x=u.b
w=x.c
J.bp(w.save())
w.translate(f.a,f.b)
x.bU(0,A.i.D(A.lb.aA(0,t),0.01,1.3))
v=u.c
E.fVT(x,A.I,g,d,v,u.d>9.5?0.5+0.3*Math.sin(v*3+d):0)
C.hEv(x,new B.o(0,g*1.42),g,e)
w.restore()},
$S:768}
C.fCs.prototype={
$3(d,e,f){var x,w,v,u,t=this.a.$2(f,0.5)
if(t<=0)return
x=A.i.D(A.lb.aA(0,t),0.01,1.3)*(1+0.07*Math.sin(this.b*6))
w=this.c
v=e*x
$.Q()
u=B.K()
u.r=A.bF.gp(0)
w.N(d,v,u)
u=B.K()
u.b=A.a9
u.c=2
u.r=A.c.gp(0)
w.N(d,v,u)
C.aQv(w,"\u2665",d.aJ(0,new B.o(e*0.5*x,e*0.62*x)),e*1.3*x,A.c,A.bn,0,null)},
$S:437}
C.fCv.prototype={
$2(d,e){var x,w,v=this.a,u=v.a
v=v.c-u
u+=v*0.08
x=this.b
w=x*d
return new B.a1(u,w,u+v*0.84,w+x*e)},
$S:2004}
C.h38.prototype={
$3(d,e,f){var x=this
return new C.Xq(x.d,x.e,x.a,x.c,x.b,null)},
$C:"$3",
$R:3,
$S:z+2}
C.h39.prototype={
$4(d,e,f,g){var x=y.t
return new B.d0(e,!1,B.it(A.A,g,null,new B.bg(B.cJ(A.cw,e,null),new B.br(0.85,1,x),x.k("bg<bO.T>"))),null)},
$C:"$4",
$R:4,
$S:34}
C.eQc.prototype={
$0(){var x,w=this.a
w.e=A.o.F(w.gAr()+1,10)
x=w.gQg().y
x=x==null?null:A.o.ap(x.a,1000)
w.x=x==null?1:x
w.as=w.gazP()},
$S:0}
C.eQb.prototype={
$0(){var x=this.a
if(x.c!=null&&!x.r)x.m(new C.eQa(x))},
$S:0}
C.eQa.prototype={
$0(){return this.a.y=!1},
$S:0}
C.eQ9.prototype={
$0(){var x,w=this.a
w.f=-1
w.e=A.o.F(w.gAr()+this.b,10)
if(w.gAr()<0)w.e=w.gAr()+10
x=w.gQg().y
x=x==null?null:A.o.ap(x.a,1000)
w.x=x==null?1:x
w.as=w.gazP()
w.asG()
w.akl()},
$S:0}
C.eQd.prototype={
$0(){var x=this.a
x.f=this.b
x.r=!1
x.akl()},
$S:0}
C.eQm.prototype={
$0(){var x=this.a
return x.m(x.gcGt())},
$S:0}
C.eQl.prototype={
$2(d,e){var x,w=null,v=this.a,u=v.gQg().y,t=u==null?w:A.o.ap(u.a,1000),s=(t==null?0:t)/1000,r=v.x===0&&v.a.f?s:99
u=v.gAr()
x=r<3?s:Math.max(0,s-v.gaRh())
return B.b4(w,w,w,new C.bx8(u,v.f,x,r,w),A.fC)},
$S:61}
C.eQk.prototype={
$5$color$on(d,e,f,g,h){var x=null,w=h?g.j(0.28):A.c.j(0.08),v=B.m(14),u=B.L(h?g:A.aV,A.r,1)
return B.aA(x,B.q(x,B.x(B.a([B.X(d,g,x,x,x,20),A.vv,B.d(e,x,x,x,x,x,x,B.l(x,x,g,x,x,x,x,x,x,x,x,9.5,x,x,A.H,x,x,!0,x,x,x,x,x,x,x,x),x,x,x)],y.p),A.l,x,A.e,A.R,0,A.p),A.f,x,x,new B.p(w,x,u,v,x,x,A.n),x,x,x,A.jo,A.kU,x,x,56),A.y,!1,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,f,x,x,x,x,x,x,!1,A.a4)},
$3(d,e,f){return this.$5$color$on(d,e,f,A.c,!1)},
$4$color(d,e,f,g){return this.$5$color$on(d,e,f,g,!1)},
$S:2005}
C.eQf.prototype={
$0(){return this.a.az4(-1)},
$S:0}
C.eQg.prototype={
$0(){return this.a.az4(1)},
$S:0}
C.eQh.prototype={
$0(){return this.a.az4(0)},
$S:0}
C.eQi.prototype={
$0(){var x=this.a
return x.m(new C.eQe(x))},
$S:0}
C.eQe.prototype={
$0(){var x=this.a
x.r=!x.r
x.akl()},
$S:0}
C.eQj.prototype={
$0(){return this.a.b3a(0)},
$S:0}
C.eQ8.prototype={
$0(){var x=this.a
return x.m(new C.eQ7(x))},
$S:0}
C.eQ7.prototype={
$0(){return this.a.r=!1},
$S:0}
C.fCE.prototype={
$1(d){var x=null,w=B.fq(x,A.cr,x,1,x,B.cP(x,x,x,x,x,x,x,x,x,B.l(x,x,this.b,x,x,x,x,x,x,x,x,d,x,x,A.u,x,x,!0,x,0.4,x,x,x,x,x,x),this.a),A.a5,A.bX,x,A.dz,A.bY)
w.e5()
return w},
$S:275}
C.eQ5.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.eQ6.prototype={
$0(){return this.a.b1f(this.b)},
$S:0}
C.eQ2.prototype={
$2(d,e){return A.bm},
$S:37}
C.eQ1.prototype={
$2(d,e){var x=null,w=this.a,v=w.d===e?1.1:1
v=B.a([B.vW(w.b1g(e,18,46,6,A.c,80),A.b4,A.fS,v)],y.p)
if(w.d===e)v.push(new B.D(A.us,B.d(D.kw[e].a,x,x,x,x,x,x,D.fzG,x,x,x),x))
return B.x(v,A.l,x,A.e,A.R,0,A.p)},
$S:719}
C.eQ3.prototype={
$0(){var x=this.a
return x.a.a6H(0,x.d)},
$S:0}
C.eQ4.prototype={
$2(d,e){return this.a.az5(e,15,1/0,!0,8,A.c,1/0)},
$S:41}
C.eQ_.prototype={
$0(){var x=this.a
return x.a.a6H(0,x.d)},
$S:0}
C.eQ0.prototype={
$0(){return this.a.b1f(this.b)},
$S:0}
C.fCF.prototype={
$1(d){var x=null,w=this.c?A.u:A.a8
w=B.fq(x,A.cr,x,1,x,B.cP(x,x,x,x,x,x,x,x,x,B.l(x,x,this.b,x,x,x,x,x,x,x,x,d,x,x,w,x,x,!0,x,0.4,x,x,x,x,x,x),this.a),A.a5,A.bX,x,A.dz,A.bY)
w.e5()
return w},
$S:275}
C.fpl.prototype={
$0(){var x=this.a,w=this.b,v=this.c
v=v.d-v.b
C.iI(x,B.bs(w,v*0.2,v*0.14),4,A.bl)
C.iI(x,B.bs(w,v*0.13,v*0.09),3,A.nl)},
$S:0}
C.fpS.prototype={
$0(){var x,w,v,u,t,s=this.a,r=this.b,q=this.c,p=q.c-q.a
q=(q.d-q.b)*0.12
C.iI(s,B.bs(r,q,p*0.16),6,D.a__)
for(x=r.a,r=r.b+0,w=0;w<3;++w){v=D.cAx[w]
u=v.b
v=B.bs(new B.o(x+v.a*p,r),q,4)
$.Q()
t=new B.ao(A.O,A.M,A.Q,A.S,A.P)
t.r=u.gp(u)
s.ar(v,t)}},
$S:0}
C.fpT.prototype={
$0(){var x=this.a,w=this.b,v=this.c
v=v.d-v.b
C.lE(x,w,v*0.13,A.aw)
C.lE(x,w.a5(0,new B.o(-3,-4)),v*0.04,A.c.j(0.7))},
$S:0}
C.fpU.prototype={
$0(){var x=this.a,w=this.b,v=this.c
v=v.d-v.b
C.iI(x,B.bs(w,v*0.26,v*0.16),5,A.bl)
v=B.bs(w,v*0.2,4)
$.Q()
w=B.K()
w.r=A.c.gp(0)
x.ar(v,w)},
$S:0}
C.fmY.prototype={
$0(){return C.fo2(this.a,this.b,this.c*0.15,A.bU)},
$S:0}
C.fmZ.prototype={
$0(){var x,w,v=this.a,u=this.b,t=this.c
C.lE(v,u,t*0.045,A.b8)
x=new B.aF($.Q().r,A.ai,null,null,B.a([],y.v))
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
C.fmV.prototype={
$4(d,e,f,g){var x=this.a
C.z1(x,d.gbw(),this.b,f,new C.fmW(x,d,this.c,e,g))},
$S:2006}
C.fmW.prototype={
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
C.fn_.prototype={
$0(){var x=this,w=x.d?A.bh:A.an
return C.hdV(x.a,x.b,x.c*0.065,w)},
$S:0}
C.fmX.prototype={
$0(){var x=this
return C.fo2(x.a,x.b,x.c*0.075,D.dht[x.d])},
$S:0}
C.fBI.prototype={
$0(){var x=this.a,w=this.b,v=this.c,u=v*0.16
C.iI(x,B.bs(w,u,v*0.2),6,D.beu)
v=B.bs(w,u,v*0.03)
$.Q()
u=B.K()
u.r=A.cZ.gp(0)
x.ar(v,u)},
$S:0}
C.fBJ.prototype={
$0(){var x,w,v,u=this.a,t=this.b,s=this.c
C.lE(u,t.a5(0,new B.o(s*0.11,-s*0.07)),s*0.045,A.b8)
x=new B.aF($.Q().r,A.ai,null,null,B.a([],y.v))
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
C.foF.prototype={
$0(){return C.aPm(this.a,this.b,0,A.cG)},
$S:0}
C.foG.prototype={
$0(){var x=this.b
return C.aPm(this.a,B.bs(x.gbw().a5(0,new B.o(0,-this.c.b*0.01)),(x.d-x.b)*0.9,(x.c-x.a)*0.9),1,A.cG)},
$S:0}
C.fBV.prototype={
$0(){var x=this,w=x.a,v=x.b,u=x.c
C.iI(w,B.bs(v,u,u),u*0.28,D.cW9[x.d])
C.lE(w,v,u*0.22,A.c.j(0.9))},
$S:0};(function aliases(){var x=C.aOa.prototype
x.bA9=x.t})();(function installTearOffs(){var x=a._instance_0u,w=a._instance_1u,v=a.installStaticTearOff
var u
x(u=C.aGi.prototype,"gc8q","c8r",1)
x(u,"gb1e","cbV",1)
x(u,"gcGt","akl",1)
w(u,"gcia","b3a",3)
v(C,"ipU",3,null,["$3"],["i6h"],0,0)
v(C,"ipW",3,null,["$3"],["i6j"],0,0)
v(C,"ipT",3,null,["$3"],["i6g"],0,0)
v(C,"ipV",3,null,["$3"],["i6i"],0,0)
v(C,"ipY",3,null,["$3"],["i70"],0,0)
v(C,"ipX",3,null,["$3"],["i7_"],0,0)
v(C,"iq_",3,null,["$3"],["i72"],0,0)
v(C,"ipZ",3,null,["$3"],["i71"],0,0)
v(C,"ipN",3,null,["$3"],["i4H"],0,0)
v(C,"ipL",3,null,["$3"],["i4F"],0,0)
v(C,"ipO",3,null,["$3"],["i4I"],0,0)
v(C,"ipM",3,null,["$3"],["i4G"],0,0)
v(C,"iq0",3,null,["$3"],["i7J"],0,0)
v(C,"iq1",3,null,["$3"],["i7K"],0,0)
v(C,"iq2",3,null,["$3"],["i7L"],0,0)
v(C,"iq3",3,null,["$3"],["i7M"],0,0)
v(C,"iq6",3,null,["$3"],["ieq"],0,0)
v(C,"iq7",3,null,["$3"],["iex"],0,0)
v(C,"iq4",3,null,["$3"],["ieo"],0,0)
v(C,"iq5",3,null,["$3"],["iep"],0,0)
v(C,"ipQ",3,null,["$3"],["i5I"],0,0)
v(C,"ipP",3,null,["$3"],["i5H"],0,0)
v(C,"ipR",3,null,["$3"],["i5J"],0,0)
v(C,"ipS",3,null,["$3"],["i5K"],0,0)
v(C,"iqd",3,null,["$3"],["ifr"],0,0)
v(C,"iqc",3,null,["$3"],["ifq"],0,0)
v(C,"iqf",3,null,["$3"],["ift"],0,0)
v(C,"iqe",3,null,["$3"],["ifs"],0,0)
v(C,"iqa",3,null,["$3"],["ieE"],0,0)
v(C,"iq9",3,null,["$3"],["ieD"],0,0)
v(C,"iq8",3,null,["$3"],["ieC"],0,0)
v(C,"iqb",3,null,["$3"],["ieF"],0,0)})();(function inheritance(){var x=a.mixinHard,w=a.inheritMany,v=a.inherit
w(B.ht,[C.fC8,C.fC2,C.fVS,C.fof,C.fog,C.fsZ,C.fqL,C.fCq,C.fCr,C.fCs,C.h38,C.h39,C.eQk,C.fCE,C.fCF,C.fmV])
w(B.jw,[C.foi,C.foh,C.fCu,C.fCt,C.fCv,C.eQl,C.eQ2,C.eQ1,C.eQ4])
w(B.aE,[C.wU,C.wl,C.yh,C.jt])
w(B.ag,[C.Xq,C.atr])
w(B.ah,[C.aOa,C.bn4])
v(C.aGi,C.aOa)
w(B.iJ,[C.eQc,C.eQb,C.eQa,C.eQ9,C.eQd,C.eQm,C.eQf,C.eQg,C.eQh,C.eQi,C.eQe,C.eQj,C.eQ8,C.eQ7,C.eQ5,C.eQ6,C.eQ3,C.eQ_,C.eQ0,C.fpl,C.fpS,C.fpT,C.fpU,C.fmY,C.fmZ,C.fmW,C.fn_,C.fmX,C.fBI,C.fBJ,C.foF,C.foG,C.fBV])
v(C.bx8,B.mk)
x(C.aOa,B.cb)})()
B.iT(b.typeUniverse,JSON.parse('{"Xq":{"ag":[],"v":[]},"aGi":{"ah":["Xq"]},"bx8":{"aC":[]},"atr":{"ag":[],"v":[]},"bn4":{"ah":["atr"]},"Oa":{"ag":[],"v":[]}}'))
var y=(function rtii(){var x=B.as
return{L:x("O<SR>"),V:x("O<ac>"),O:x("O<u>"),v:x("O<fT>"),C:x("O<+(H,H,H)>"),s:x("O<n>"),p:x("O<v>"),f:x("O<jt>"),n:x("O<H>"),T:x("ai<u>"),m:x("ai<jt>"),t:x("br<H>"),S:x("F")}})();(function constants(){var x=a.makeConstList
D.agf=new B.u(1,0.0196078431372549,0.03137254901960784,0.058823529411764705,A.q)
D.bti=new B.u(1,0.043137254901960784,0.10196078431372549,0.2,A.q)
D.dkM=x([D.agf,D.bti],y.O)
D.c8u=new B.a9(A.b7,A.ba,A.x,D.dkM,null,null)
D.b6V=new B.p(null,null,null,null,null,D.c8u,A.n)
D.bqX=new B.u(1,0.42745098039215684,0.47843137254901963,0.5764705882352941,A.q)
D.bfx=new B.u(1,0.16862745098039217,0.1803921568627451,0.26666666666666666,A.q)
D.bgJ=new B.u(1,0.4823529411764706,0.29411764705882354,0.41568627450980394,A.q)
D.dxh=x([D.bqX,D.bfx,D.bgJ],y.O)
D.c6R=new B.a9(A.aA,A.aF,A.x,D.dxh,null,null)
D.b6X=new B.p(null,null,null,null,null,D.c6R,A.n)
D.b28=new B.d9(0.5,-0.6)
D.buD=new B.u(1,0.22745098039215686,0.054901960784313725,0.10980392156862745,A.q)
D.dfK=x([D.buD,A.en],y.O)
D.eyF=new B.c0(D.b28,1.3,A.x,null,0,D.dfK,null,null)
D.b75=new B.p(null,null,null,null,null,D.eyF,A.n)
D.u2=new B.u(1,0.8392156862745098,0.7176470588235294,0.4823529411764706,A.q)
D.b5b=new B.ay(D.u2,1,A.r,-1)
D.b5o=new B.bH(A.a1,A.a1,D.b5b,A.a1)
D.b7s=new B.p(null,null,D.b5o,null,null,null,A.n)
D.beu=new B.u(1,0.8392156862745098,0.6352941176470588,0.3568627450980392,A.q)
D.aft=new B.u(0.9490196078431372,0.06666666666666667,0.07450980392156863,0.09411764705882353,A.q)
D.bf2=new B.u(1,0.16470588235294117,0.16470588235294117,0.17647058823529413,A.q)
D.Ya=new B.u(1,0.16862745098039217,0.1843137254901961,0.21176470588235294,A.q)
D.bf6=new B.u(1,0.00784313725490196,0.01568627450980392,0.03529411764705882,A.q)
D.afZ=new B.u(1,0.6588235294117647,0.6235294117647059,0.5647058823529412,A.q)
D.Yk=new B.u(1,0.24705882352941178,0.5607843137254902,0.30196078431372547,A.q)
D.FC=new B.u(1,0.7215686274509804,0.6980392156862745,0.6549019607843137,A.q)
D.agH=new B.u(1,0.8784313725490196,0.6745098039215687,0.4117647058823529,A.q)
D.bjs=new B.u(1,0.8509803921568627,0.6549019607843137,0.3764705882352941,A.q)
D.MA=new B.u(1,1,0.23137254901960785,0.12156862745098039,A.q)
D.ah2=new B.u(1,0.00784313725490196,0.011764705882352941,0.0392156862745098,A.q)
D.y6=new B.u(1,0.06666666666666667,0.0784313725490196,0.09411764705882353,A.q)
D.bna=new B.u(1,0.9568627450980393,0.8509803921568627,0.6588235294117647,A.q)
D.ya=new B.u(1,0.054901960784313725,0.07058823529411765,0.09411764705882353,A.q)
D.aii=new B.u(1,0.24705882352941178,0.16470588235294117,0.0784313725490196,A.q)
D.bpb=new B.u(1,0.4196078431372549,0.24705882352941178,0.11372549019607843,A.q)
D.bpi=new B.u(1,0.2901960784313726,0.26666666666666666,0.23529411764705882,A.q)
D.iE=new B.u(1,0.043137254901960784,0.12156862745098039,0.29411764705882354,A.q)
D.bpQ=new B.u(1,0.7529411764705882,0.5411764705882353,0.2901960784313726,A.q)
D.nw=new B.u(1,0.09019607843137255,0.09019607843137255,0.10980392156862745,A.q)
D.brx=new B.u(1,0.1843137254901961,0.43529411764705883,0.23137254901960785,A.q)
D.brB=new B.u(1,0.08627450980392157,0.09411764705882353,0.10980392156862745,A.q)
D.ZX=new B.u(1,1,0.9529411764705882,0.6274509803921569,A.q)
D.a__=new B.u(1,0.8392156862745098,0.7254901960784313,0.5490196078431373,A.q)
D.bvd=new B.u(1,0.10196078431372549,0.09019607843137255,0.0784313725490196,A.q)
D.aWj=new B.G(!0,A.aS,null,null,null,null,10.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bA6=new B.R(0,0,0,1)
D.bAY=new B.R(10,10,10,0)
D.a_X=new B.R(10,6,10,8)
D.alx=new B.R(14,10,10,10)
D.Pd=new B.a_(62970,"MaterialIcons",!1)
D.aq9=new B.a_(983316,"MaterialIcons",!1)
D.ps=new B.a_(983617,"MaterialIcons",!1)
D.bWh=new B.ae(A.CU,13,A.ab,null,null,null)
D.c_w=new B.ae(A.eX,13,A.ab,null,null,null)
D.bRP=new B.a_(983768,"MaterialIcons",!1)
D.c07=new B.ae(D.bRP,13,A.c,null,null,null)
D.c5M=new B.a9(A.b7,A.ba,A.x,I.RW,null,null)
D.djp=x([A.dA,A.T,A.FW],y.O)
D.c6Q=new B.a9(A.b7,A.ba,A.x,D.djp,null,null)
D.Mp=new B.u(1,0.11764705882352941,0.30980392156862746,0.6392156862745098,A.q)
D.cNy=x([D.iE,D.Mp,A.ax,A.bN],y.O)
D.dot=x([0,0.42,0.8,1],y.n)
D.c6T=new B.a9(A.b7,A.ba,A.x,D.cNy,D.dot,null)
D.afw=new B.u(1,0.12156862745098039,0.1411764705882353,0.18823529411764706,A.q)
D.c9r=x(["$12","$8","$25"],y.s)
D.cac=x(["Add every person","Link mums, dads, kids","Keep it for ever"],y.s)
D.aud=x([A.cG,A.aE,A.dK,A.fo],y.O)
D.Uy=new B.y(2,3)
D.Uz=new B.y(3,4)
D.cu0=x([A.lP,A.z6],B.as("O<a_>"))
D.cuD=x([A.c,A.bh,A.bd,A.b5,A.nr,A.aw,A.d5],y.O)
D.eT8=new B.y(-0.04,A.bC)
D.eYK=new B.y(0,A.aE)
D.eFI=new B.y(0.04,A.ax)
D.cAx=x([D.eT8,D.eYK,D.eFI],B.as("O<+(H,u)>"))
D.efg=new C.yh("NGMY Tree Story","A family grows, one branch at a time")
D.eff=new C.yh("NGMY Store","Open the doors to something new")
D.efi=new C.yh("NGMY Construction Lab","Build, wire and finish a real house")
D.efb=new C.yh("NGMY Electronics Lab","Build circuits that really light up")
D.efe=new C.yh("NGMY Advisors","Say hi to a friendly advisor")
D.efc=new C.yh("Spark Adventure","Follow Sparky round a circuit board")
D.efj=new C.yh("NGMY Game Center","Play games and win coins")
D.efd=new C.yh("NGMY Business Cards","Make a card people remember")
D.efa=new C.yh("NGMY Vault","Keep what matters safe")
D.efh=new C.yh("NGMY Studios","Make music, art, titles and more")
D.Ro=x([D.efg,D.eff,D.efi,D.efb,D.efe,D.efc,D.efj,D.efd,D.efa,D.efh],B.as("O<yh>"))
D.hzM=new C.jt("NGMY Game Center","Lots of games in one place",C.iq0())
D.hA8=new C.jt("Play","Tap, jump and catch the coins",C.iq1())
D.hzN=new C.jt("Beat the score","Climb the board every day",C.iq2())
D.hzW=new C.jt("Win coins","Win, celebrate, play again",C.iq3())
D.cI7=x([D.hzM,D.hA8,D.hzN,D.hzW],y.f)
D.cL1=x([A.bU,A.aH,A.dy,A.b5,A.cF],y.O)
D.f2a=new B.b5(-0.2,0.46,0.12)
D.f_i=new B.b5(0.2,0.46,0.12)
D.f07=new B.b5(0,0.52,0.15)
D.eZm=new B.b5(0,0.7,0.1)
D.cOg=x([D.f2a,D.f_i,D.f07,D.eZm],y.C)
D.cW9=x([A.aH,A.b5,A.cF,A.bU,A.bh,A.br],y.O)
D.hzZ=new C.jt("NGMY Studios","A studio for every idea",C.iqa())
D.hA3=new C.jt("Paint with light","Colours that glow",C.iq9())
D.hA1=new C.jt("Make music","Beats, notes and tunes",C.iq8())
D.hzL=new C.jt("Add your title","Moving words for any picture",C.iqb())
D.cX8=x([D.hzZ,D.hA3,D.hA1,D.hzL],y.f)
D.d1D=x([A.cZ,A.hC],y.O)
D.d1H=x([A.cG,A.d6],y.O)
D.hA7=new C.jt("NGMY Business Cards","Design a card in seconds",C.ipQ())
D.hzV=new C.jt("Make it yours","Pick your colours and your look",C.ipP())
D.hzK=new C.jt("Share it","One tap and it is on their phone",C.ipR())
D.hzJ=new C.jt("Be remembered","Cards people keep",C.ipS())
D.d3G=x([D.hA7,D.hzV,D.hzK,D.hzJ],y.f)
D.eGn=new B.y("Chairs",120)
D.eGq=new B.y("Cloth",80)
D.eGK=new B.y("Delivery",25)
D.aAb=x([D.eGn,D.eGq,D.eGK],B.as("O<+(n,F)>"))
D.d94=x([A.aw,A.ax,A.bh,A.b5,A.aH,A.br],y.O)
D.d9q=x([A.aH,A.b5,A.bh,A.cF,A.bU,A.br,A.aH],y.O)
D.d9v=x([A.cX,A.eT],y.O)
D.S0=x([A.aw,A.d5,A.ax],y.O)
D.db7=x([A.aE,A.kK],y.O)
D.dcv=x([A.jT,A.cy],y.O)
D.dGK=new C.wl("NGMY Ads","\ud83d\udce2","Every NGMY promotion, as cartoons",A.bU,-1)
D.dGF=new C.wl("Civic Registry","\ud83e\udeaa","Enroll your family in your community",A.d5,0)
D.dGL=new C.wl("Jobs","\ud83d\udcbc","Find work and get hired",A.ax,1)
D.dGQ=new C.wl("NGMY Store","\ud83d\udecd\ufe0f","African food and traditions",A.fo,2)
D.dGR=new C.wl("Kiswahili","\ud83d\udde3\ufe0f","Learn Swahili and English",A.bQ,3)
D.dGO=new C.wl("Doc Scanner","\ud83d\udcc4","Scan, save and share",A.cg,4)
D.dGG=new C.wl("Invoices","\ud83e\uddfe","Professional invoices",A.bF,5)
D.dGD=new C.wl("Calendar","\ud83d\udcc5","This month, today lit up",A.aw,-2)
D.kw=x([D.dGK,D.dGF,D.dGL,D.dGQ,D.dGR,D.dGO,D.dGG,D.dGD],B.as("O<wl>"))
D.deK=x([A.dW,A.rx],y.O)
D.dg3=x([A.aH,A.b5,A.bh,A.bU],y.O)
D.eNL=new B.y("Jambo! Habari yako?","Nzuri, asante!")
D.eGT=new B.y("Jina lako nani?","Jina langu ni Amina.")
D.eHC=new B.y("Karibu nyumbani!","Asante sana!")
D.eNK=new B.y("Naenda shule leo.","I am going to school.")
D.eOR=new B.y("Ninapenda kujifunza!","I love to learn!")
D.eYs=new B.y("Maji, tafadhali.","Water, please.")
D.eLE=new B.y("Rafiki yangu mpendwa","My dear friend")
D.eQs=new B.y("Tuonane kesho!","See you tomorrow!")
D.eRr=new B.y("Pole sana, rafiki.","I am so sorry, friend.")
D.eNJ=new B.y("Hongera! Umefaulu!","Congratulations! You passed!")
D.eIT=new B.y("Mimi ni mwanafunzi.","I am a student.")
D.eDh=new B.y("Chakula kitamu sana!","The food is so delicious!")
D.eY0=new B.y("Safari njema!","Have a good trip!")
D.ezj=new B.y("Unaongea Kiswahili vizuri!","You speak Swahili well!")
D.aB9=x([D.eNL,D.eGT,D.eHC,D.eNK,D.eOR,D.eYs,D.eLE,D.eQs,D.eRr,D.eNJ,D.eIT,D.eDh,D.eY0,D.ezj],B.as("O<+(n,n)>"))
D.f1_=new B.b5(-0.3,0.32,0.2)
D.eZv=new B.b5(-0.08,0.17,0.22)
D.eZw=new B.b5(0.14,0.14,0.2)
D.f0f=new B.b5(0.34,0.3,0.2)
D.f2E=new B.b5(0,0.32,0.26)
D.f_Y=new B.b5(-0.42,0.46,0.15)
D.f2z=new B.b5(0.42,0.46,0.15)
D.f1g=new B.b5(0,0.07,0.15)
D.aBa=x([D.f1_,D.eZv,D.eZw,D.f0f,D.f2E,D.f_Y,D.f2z,D.f1g],y.C)
D.hA5=new C.jt("NGMY Construction Lab","Frame a room, stud by stud",C.ipU())
D.hzS=new C.jt("Wire it","Pull the cable, set the box, no shocks",C.ipW())
D.hzP=new C.jt("Hang the drywall","Screw it, tape it, mud it, sand it",C.ipT())
D.hzH=new C.jt("Move in","Learn real trades, one room at a time",C.ipV())
D.dgR=x([D.hA5,D.hzS,D.hzP,D.hzH],y.f)
D.dho=x([A.co,A.bx,A.bU],y.O)
D.hre=new C.wU("NGMY Civic Registry","Enroll your family. Stay counted and helped together.",A.d6,A.aH)
D.hrs=new C.wU("NGMY Jobs","Find work. Get hired. Get paid.",A.cZ,A.aU)
D.hrp=new C.wU("NGMY Store","African food and traditions. Support our Congolese and African community.",A.kq,A.bh)
D.hrk=new C.wU("Kiswahili School","Learn Swahili and English, step by step.",A.cG,A.mS)
D.hrh=new C.wU("Document Scanner","Scan, save and share your papers.",A.qi,A.hm)
D.hrf=new C.wU("Invoice Creator","Make professional invoices in minutes.",A.q4,A.o6)
D.hrb=new C.wU("Family Book and Tree","Write your family story. Grow your tree.",A.iZ,A.Mc)
D.hrd=new C.wU("NGMY Wallet","Save, send and earn coins.",A.u9,A.dy)
D.hrg=new C.wU("Vault Games","Play, win and learn.",A.dJ,A.bd)
D.hrq=new C.wU("Electronics Lab","Build real circuits and learn.",A.eV,A.b0)
D.hrl=new C.wU("NGMY Helper and Advisors","Friendly help, any time.",A.kK,A.cF)
D.dhp=x([D.hre,D.hrs,D.hrp,D.hrk,D.hrh,D.hrf,D.hrb,D.hrd,D.hrg,D.hrq,D.hrl],B.as("O<wU>"))
D.dht=x([A.bU,A.aH,A.bh,A.b5,A.br,A.cF],y.O)
D.hzX=new C.jt("NGMY Electronics Lab","Power goes round a loop",C.ipY())
D.hzI=new C.jt("Build it","Drop in resistors, LEDs and capacitors",C.ipX())
D.hzR=new C.jt("Run a TV","Real volts, real gadgets",C.iq_())
D.hA2=new C.jt("Measure it","Read the volts like a pro",C.ipZ())
D.dhQ=x([D.hzX,D.hzI,D.hzR,D.hA2],y.f)
D.hzG=new C.jt("NGMY Vault","Lock away what matters",C.iqd())
D.hA4=new C.jt("Dial it","Only you know the code",C.iqc())
D.hzO=new C.jt("Store it","Photos, notes and documents",C.iqf())
D.hA9=new C.jt("Stay safe","Private, protected, always yours",C.iqe())
D.dir=x([D.hzG,D.hA4,D.hzO,D.hA9],y.f)
D.hA6=new C.jt("NGMY Store","Open the doors to something new",C.iq6())
D.hzF=new C.jt("Find anything","Shop gadgets, books and more",C.iq7())
D.hzQ=new C.jt("Add to cart","Fill it up, pay your way",C.iq4())
D.hA0=new C.jt("Delivered","Right to your door",C.iq5())
D.dku=x([D.hA6,D.hzF,D.hzQ,D.hA0],y.f)
D.dlR=x([A.eV,A.dx],y.O)
D.dnK=x([A.dJ,A.fm],y.O)
D.doc=x(["For you","Apps","Library"],y.s)
D.aC6=x([A.bC,A.bh,A.cX,A.as],y.O)
D.aCc=x([-16,16],y.n)
D.SD=x([-22,22],y.n)
D.SE=x([-24,24],y.n)
D.a6_=x([-5,5],y.n)
D.aCj=x([-8,8],y.n)
D.ds9=x([A.bN,A.eS,A.N8,A.eu],y.O)
D.dtW=x([A.aH,A.bh,A.bO],y.O)
D.b9q=new B.ac(0,A.G,A.aT,A.dv,14)
D.du2=x([D.b9q],y.V)
D.dwT=x(["M","T","W","T","F","S","S"],y.s)
D.dy6=x([A.c,A.nl],y.O)
D.hA_=new C.jt("NGMY Advisors","Meet a friendly, checked advisor",C.ipN())
D.hzU=new C.jt("Ask anything","Chat and get an answer",C.ipL())
D.hzY=new C.jt("Loved by members","Real help, five stars",C.ipO())
D.hzT=new C.jt("Say hi today","Pick an advisor and start",C.ipM())
D.dzj=x([D.hA_,D.hzU,D.hzY,D.hzT],y.f)
D.blK=new B.u(1,1,1,0.5529411764705883,A.q)
D.bpj=new B.u(1,1,0.9176470588235294,0,A.q)
D.bfq=new B.u(1,1,0.8392156862745098,0,A.q)
D.dCc=new B.cZ([100,D.blK,200,A.Z8,400,D.bpj,700,D.bfq],B.as("cZ<F,u>"))
D.dEg=new B.EQ(D.dCc,1,1,1,0,A.q)
D.emP=new B.o(5,0)
D.c0C=new B.ae(A.eX,11,A.ab,null,null,null)
D.fxu=new B.G(!0,A.aS,null,null,null,null,9,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fVe=new B.B("Search",null,D.fxu,null,null,null,null,null,null,null,null,null)
D.cPg=x([D.c0C,A.r4,D.fVe],y.p)
D.f7Y=new B.c7(A.aL,A.e,A.j,A.l,null,A.p,null,0,D.cPg,null)
D.ff6=new B.hG(3,5,5,1.35,null)
D.btV=new B.u(1,0.9450980392156862,0.9098039215686274,0.8470588235294118,A.q)
D.fmE=new B.G(!0,D.btV,null,"serif",null,null,15,A.k0,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fuE=new B.G(!0,A.ab,null,null,null,null,9.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fvf=new B.G(!0,A.aS,null,null,null,null,9.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ab5=new B.G(!0,A.ab,null,null,null,null,12.5,null,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aVW=new B.G(!0,A.ab,null,null,null,null,10,A.V,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fzG=new B.G(!0,A.c,null,null,null,null,8.5,A.V,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fBc=new B.G(!0,A.ab,null,null,null,null,8.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fBv=new B.G(!0,D.afZ,null,null,null,null,8.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.frW=new B.G(!0,A.aD,null,null,null,null,9.5,A.V,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fDR=new B.B("NGMY Apps",null,D.frW,null,null,null,null,null,null,null,null,null)
D.fom=new B.G(!0,D.u2,null,null,null,null,8,A.a8,null,3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fH4=new B.B("BANG & OLUFSEN",null,D.fom,null,null,null,null,null,null,null,null,null)
D.ful=new B.G(!0,A.w,null,null,null,null,9,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fHx=new B.B("Open",null,D.ful,null,null,null,null,null,null,null,null,null)
D.fKP=new B.B("Home",null,D.aVW,null,null,null,null,null,null,null,null,null)
D.fLT=new B.B("SAMSUNG",null,A.aVC,null,null,null,null,null,null,null,null,null)
D.fS7=new B.B("LG",null,A.xj,null,null,null,null,null,null,null,null,null)
D.fYj=new B.B("tv",null,A.r8,null,null,null,null,null,null,null,null,null)
D.frQ=new B.G(!0,D.u2,null,null,null,null,8.5,null,null,2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h_r=new B.B("OPEN",null,D.frQ,null,null,null,null,null,null,null,null,null)})();(function staticFields(){$.i4E=function(){var x=B.as("O<aE>")
return B.a([B.a([D.d1D,D.dgR],x),B.a([D.dlR,D.dhQ],x),B.a([D.db7,D.dzj],x),B.a([D.d9v,D.cI7],x),B.a([N.aCS,D.dir],x),B.a([D.dcv,D.cX8],x),B.a([D.d1H,D.d3G],x),B.a([D.deK,D.dku],x)],B.as("O<ai<aE>>"))}()})()};
(a=>{a["MAvhny/27W1z42gUswhdD+YDPdM="]=a.current})($__dart_deferred_initializers__);