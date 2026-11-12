((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,A,G,I,H,K,L,M,N,C={
re(d,e,f,g,h,i){var x=new C.fBy(e,h,!0),w=x.$1(g),v=w.b.c
if(v>i&&v>0)w=x.$1(Math.max(2,g*i/v))
x=w.b
v=x.c
x=x.a.c
w.a5(d,f.aJ(0,new B.o(v/2,x.gba(x)/2)))},
ah7(d,e,f,g,h,i){var x,w,v,u,t,s,r,q=null
if(h<=0)return
x=d.c
J.bo(x.save())
x.translate(e.a,e.b)
d.bU(0,A.j.E(A.l9.aA(0,A.j.E(h,0,1)),0.01,1.3))
w=B.fq(q,A.cs,q,q,q,B.cP(q,q,q,q,q,q,q,q,q,B.l(q,q,A.as,q,q,q,q,q,q,q,q,g,q,q,A.u,q,q,!0,q,q,q,q,q,q,q,q),f),A.a5,A.bX,q,A.dz,A.bY)
w.e5()
v=w.b
u=v.c
v=v.a.c
t=g*0.8
s=B.bl(B.bs(A.I,v.gba(v)+g*0.7,u+g*1.1),new B.aN(t,t))
t=$.Q()
u=B.K()
u.r=i.gp(0)
d.am(s,u)
t=new B.aF(t.r,A.ai,q,q,B.a([],y.v))
u=-g
v=s.d
r=v-1
t.D(new B.aZ(u*0.3,r))
t.D(new B.aq(u*0.7,v+g*0.6))
t.D(new B.aq(g*0.2,r))
t.D(new B.bv())
r=B.K()
r.r=i.gp(0)
d.af(t,r)
r=w.b
t=r.c
r=r.a.c
w.a5(d,new B.o(-t/2,-r.gba(r)/2))
x.restore()},
hbt(d,e,f,g){var x,w=A.j.E(Math.abs(Math.cos(g)),0.15,1),v=f*2,u=v*w,t=B.bs(e,v,u)
$.Q()
x=B.K()
x.r=A.bi.gp(0)
d.bZ(t,x)
d.bZ(B.bs(e,v,u),E.z2(A.u8,f*0.18))
if(w>0.5)C.re(d,"$",e,f*1.2,A.u8,9999)},
i5D(d,e,f,g){var x,w,v,u,t,s,r,q,p,o,n,m,l=new B.e4()
l.d_(4)
for(x=e.a,w=f-g,v=e.b,u=d.c,t=f*3,s=v*0.025,r=v*0.012,q=0;q<18;++q){p=l.ai()
o=A.j.F(w*(40+l.ai()*60)+l.ai()*v,v)
J.bo(u.save())
u.translate(p*x,o)
u.rotate((t+q)*180/3.141592653589793,0,0)
p=B.bs(A.I,r,s)
n=D.cL5[A.o.F(q,5)]
$.Q()
m=new B.ao(A.O,A.M,A.R,A.T,A.P)
m.r=n.gp(0)
d.ar(p,m)
u.restore()}},
ifS(d,e,f,g){switch(A.o.F(f,11)){case 0:C.i5g(d,e,g)
break
case 1:C.i8u(d,e,g)
break
case 2:C.idO(d,e,g)
break
case 3:C.ieb(d,e,g)
break
case 4:C.id_(d,e,g)
break
case 5:C.i8a(d,e,g)
break
case 6:C.i4z(d,e,g)
break
case 7:C.if1(d,e,g)
break
case 8:C.i77(d,e,g)
break
case 9:C.i8z(d,e,g)
break
default:C.i7N(d,e,g)}},
i5g(a1,a2,a3){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a2.a,d=a2.b,a0=d*0.94
for(x=e*0.12,w=e*0.06,v=d*0.06,u=y.v,t=0;t<6;++t){s=e*(0.04+t*0.17)
r=d*(0.18+0.08*A.o.F(t,3))
q=a0-r
p=s+x
o=A.c.j(0.2)
n=$.Q()
m=new B.ao(A.O,A.M,A.R,A.T,A.P)
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
q=new B.bv()
m.push(q)
p=n.f
if(p!=null)q.ak(p)
n.ab()
q=new B.ao(A.O,A.M,A.R,A.T,A.P)
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
J.bo(w.save())
x=e*0.58
w.translate(x,d*0.45)
a1.pj(0,Math.max(0.08,Math.abs(k)),1)
v=i*0.1
h=B.bl(B.bs(A.I,i,j),new B.aN(v,v))
u=B.K()
q=k>=0
u.sav(new B.a9(A.a6,A.aa,A.x,q?D.dya:D.dnM,f,f).aK(0,new B.a1(h.a,h.b,h.c,h.d)))
a1.am(h,u)
a1.am(h,E.z2(A.d6,2))
if(q){u=-j
q=u*0.28
p=-i
o=p*0.05
n=i*0.22
m=B.K()
m.r=F.mT.gp(0)
a1.N(new B.o(q,o),n,m)
n=B.bX(new B.o(q,o),n)
o=B.K()
o.r=F.lD.gp(0)
a1.cC(n,3.141592653589793,3.141592653589793,!0,o)
for(u*=0.05,q=p*0.25,o=i*0.07,t=0;t<3;++t){n=q+t*i*0.16
n=B.bl(new B.a1(u,n,u+j*(0.42-t*0.06),n+o),A.hP)
m=new B.ao(A.O,A.M,A.R,A.T,A.P)
m.r=A.dk.gp(0)
a1.am(n,m)}C.re(a1,"COMMUNITY ID",new B.o(0,p*0.4),v,A.d6,j*0.8)}else C.re(a1,"\u2605 NGMY \u2605",A.I,i*0.16,A.c,j*0.8)
w.restore()
v=a3>2.6
if(v){t=A.j.E((a3-2.6)/0.35,0,1)
J.bo(w.save())
w.translate(x,d*0.52)
a1.hW(0,-0.25)
a1.bU(0,2.2-1.2*A.e7.aA(0,t))
g=B.bs(A.I,i*0.3,j*0.7)
a1.am(B.bl(g,A.hQ),E.z2(A.cX.j(t),3))
C.re(a1,"\u2713 REGISTERED",A.I,i*0.13,A.cX.j(t),(g.c-g.a)*0.9)
w.restore()}x=a3*5
w=Math.sin(x)
x=Math.sin(x)
v=v&&a3<4
E.Bj(a1,new B.o(e*0.2,a0),d*0.7,a3,!1,Math.abs(x)*d*0.015,0,A.cX,F.mT,v,(w+1)/2)
if(a3>3)C.i5D(a1,new B.av(e,d*0.9),a3,3)},
i8u(a4,a5,a6){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=a5.a,a1=a5.b,a2=a1*0.94,a3=A.w.j(0.2)
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
l=A.o.F(q+n+A.j.bh(t),3)===0?A.dy:A.aH.j(0.6)
$.Q()
k=new B.ao(A.O,A.M,A.R,A.T,A.P)
k.r=l.gp(0)
a4.ar(new B.a1(m,p,m+s,o),k)}t=w+v*0.38
s=u*0.16
r=a2-s
$.Q()
p=B.K()
p.r=A.h9.gp(0)
a4.ar(new B.a1(t,r,t+v*0.24,r+s),p)
p=x-a1*0.09
s=a1*0.02
p=B.bl(new B.a1(w,p,a3,p+a1*0.08),new B.aN(s,s))
a3=B.K()
a3.r=A.av.gp(0)
a4.am(p,a3)
a3=a1*0.05
p=a1*0.06
C.re(a4,"JOBS",new B.o(w+v/2,x-a3),p,A.c,9999)
j=A.j.E(a6/2.8,0,1)
x=a0*0.12
i=x+(w+v*0.3-x)*A.dC.aA(0,j)
x=j<1
h=x?Math.abs(Math.sin(a6*12))*a1*0.02:0
t=j>=1
r=t?(Math.sin(a6*6)+1)/2:0
E.Bj(a4,new B.o(i,a2),a1*0.6,a6,!1,h,2,A.b8,A.oi,t,r)
if(x){x=B.bl(B.bs(new B.o(i-a1*0.12,a2-a1*0.17-h),a1*0.075,a1*0.1),A.hP)
r=B.K()
r.r=A.h9.gp(0)
a4.am(x,r)}if(t){x=a6-2.8
C.ah7(a4,new B.o(i+a3,a2-a1*0.78),"Hired! \ud83c\udf89",a1*0.07,x/0.4,A.c)
for(a3=x*0.8,x=a2-a1*0.5,t=a1*0.03,r=a6*8,g=0;g<6;++g){f=A.j.F(a3+g*0.17,1)
C.hbt(a4,new B.o(i+Math.sin(g*2.1)*a1*0.2,x-f*a1*0.25),t,r+g)}}a3=a0*0.04
x=a3+v
t=p+a1*0.3
s=B.bl(new B.a1(a3,p,x,t),new B.aN(s,s))
$.Q()
r=B.K()
r.r=A.i7.gp(0)
a4.am(s,r)
for(x-=a3,s=a3+x*0.08,t-=p,r=x*0.84,o=t*0.24,a3+=x*0.14,x*=0.5,m=t*0.05,g=0;g<3;++g){l=(1-A.j.E((a6-g*0.5)/0.5,0,1))*a0*0.3
k=s+l
e=g*0.3
d=p+t*(0.08+e)
d=B.bl(new B.a1(k,d,k+r,d+o),A.hP)
k=new B.ao(A.O,A.M,A.R,A.T,A.P)
k.r=A.c.gp(0)
a4.am(d,k)
l=a3+l
e=p+t*(0.14+e)
k=new B.ao(A.O,A.M,A.R,A.T,A.P)
k.r=A.bK.gp(0)
a4.ar(new B.a1(l,e,l+x,e+m),k)}},
idO(d,a0,a1){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=a0.a,g=a0.b,f=g*0.94,e=A.h9.j(0.6)
$.Q()
x=B.K()
x.r=e.gp(0)
d.ar(new B.a1(0,f,0+h,f+(g-f)),x)
w=h*0.3
v=h*0.66
for(e=v/12,x=g*0.14,u=e+1,t=x+g*0.12,s=0;s<12;++s){r=w+e*s
q=new B.ao(A.O,A.M,A.R,A.T,A.P)
q.r=D.aC3[A.o.F(s,4)].gp(0)
d.ar(new B.a1(r,x,r+u,t),q)}for(u=g*0.2,t=g*0.1,r=u+t,s=0;s<12;++s){q=w+e*s
p=new B.ao(A.O,A.M,A.R,A.T,A.P)
p.r=D.aC3[A.o.F(s,4)].gp(0)
d.cC(new B.a1(q,u,q+e,r),0,3.141592653589793,!0,p)}e=w+4
u=g*0.3
r=u+(f-u)
q=B.K()
q.r=A.h9.gp(0)
d.ar(new B.a1(e,u,e+4,r),q)
q=w+v
e=q-8
p=B.K()
p.r=A.h9.gp(0)
d.ar(new B.a1(e,u,e+4,r),p)
p=g*0.68
r=p+g*0.26
e=B.bl(new B.a1(w,p,q,r),A.ix)
u=B.K()
u.r=A.i7.gp(0)
d.am(e,u)
for(e=q-w,u=e/6,q=p+2,e/=12,r=q+(r-p-4),s=0;s<6;++s){o=w+u*s
n=new B.ao(A.O,A.M,A.R,A.T,A.P)
n.r=((s&1)===0?A.bC:A.bi).j(0.9).gp(0)
d.ar(new B.a1(o,q,o+e,r),n)}e=w+v*0.2
u=g*0.62
m=new B.o(e,u)
r=g*0.17
q=g*0.03
o=B.bl(B.bs(m,g*0.11,r),new B.aN(q,q))
n=B.K()
n.r=A.cq.gp(0)
d.am(o,n)
n=-g
r=B.bs(m.a2(0,new B.o(0,n*0.05)),g*0.04,r)
o=B.K()
o.r=A.fp.gp(0)
d.bZ(r,o)
for(r=a1*0.8,n*=0.08,o=g*0.015,s=0;s<3;++s){l=A.j.F(r+s*0.33,1)
k=Math.sin(l*6+s)
j=l*g
i=new B.ao(A.O,A.M,A.R,A.T,A.P)
i.r=A.c.j(0.6*(1-l)).gp(0)
d.N(new B.o(e+k*5,u+(n-j*0.14)),o+j*0.02,i)}for(e=w+v*0.5,r=g*0.018,s=0;s<5;++s){o=B.bs(new B.o(e,u),x,g*(0.1+s*0.01))
n=new B.ao(A.O,A.M,A.R,A.T,A.P)
n.b=A.a9
n.c=r
n.r=A.bi.gp(0)
n.d=A.bw
d.cC(o,0.4+s*0.1,1.9,!1,n)}for(e=g*0.63,x=g*0.032,s=0;s<4;++s){u=A.o.F(s,2)
r=A.o.aq(s,2)
o=(s&1)===0?A.ca:A.w2
n=new B.ao(A.O,A.M,A.R,A.T,A.P)
n.r=o.gp(0)
d.N(new B.o(w+v*(0.72+0.06*u)+s*g*0.02,e+r*g*0.035),x,n)}E.Bj(d,new B.o(h*0.14,f),p,a1,!1,0,1,A.bi,G.ahL,!0,(Math.sin(a1*5)+1)/2)
for(e=a1*0.45,x=h*0.16,u=g*0.45,r=g*0.06,s=0;s<5;++s){l=A.j.F(e+s*0.2,1)
C.re(d,"\u2665",new B.o(x+Math.sin(l*5+s)*g*0.08+s*g*0.03,u-l*g*0.4),r,A.ay.j(1-l),9999)}e=w+v/2
x=g*0.08
q=B.bl(B.bs(new B.o(e,x),t,v*0.7),new B.aN(q,q))
$.Q()
t=B.K()
t.r=A.as.gp(0)
d.am(q,t)
C.re(d,"NGMY STORE \xb7 African food",new B.o(e,x),g*0.05,A.dy,v*0.64)},
ieb(d,e,f){var x,w,v,u,t,s,r,q=e.a,p=e.b,o=p*0.94,n=A.w.j(0.2)
$.Q()
x=B.K()
x.r=n.gp(0)
d.ar(new B.a1(0,o,0+q,o+(p-o)),x)
w=A.o.F(A.o.aq(Date.now(),6000)*3+A.o.E(A.j.bh(f/2),0,2),14)
v=A.j.F(f,2)
u=v<1
x=p*0.68
n=u?(Math.sin(f*8)+1)/2:0
t=u?Math.abs(Math.sin(f*8))*p*0.01:0
E.Bj(d,new B.o(q*0.25,o),x,f,!1,t,2,A.cX,F.mT,u,n)
n=u?0:(Math.sin(f*8)+1)/2
t=u?0:Math.abs(Math.sin(f*8))*p*0.01
E.Bj(d,new B.o(q*0.75,o),x,f,!1,t,0,A.bl,D.agH,!u,n)
s=new C.fBs(p,q)
n=p*0.15
if(u){x=D.aB6[w].a
C.ah7(d,new B.o(q*0.27,n),x,s.$1(x),v/0.25,A.qj)}else{x=D.aB6[w].b
C.ah7(d,new B.o(q*0.73,n),x,s.$1(x),(v-1)/0.25,A.eE)}for(n=q*0.5,x=p*0.07,t=f*2,r=0;r<3;++r)C.re(d,"\u2192",new B.o(n,p*(0.35+r*0.1)),x,A.c.j(0.3+0.5*A.j.F(t+r,1)),9999)},
id_(d,a0,a1){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=a0.a,g=a0.b,f=g*0.94,e=A.w.j(0.2)
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
l=new B.ao(A.O,A.M,A.R,A.T,A.P)
l.r=A.cu.gp(0)
d.ar(new B.a1(p,n,p+q*m,n+t),l)}k=A.j.E(a1/3,0,1)
j=v+u*k
if(k<1){e=s-8
u=j-2
q=e+(q+16)
t=B.K()
t.r=A.b4.gp(0)
d.ar(new B.a1(e,u,q,u+4),t)
t=A.b4.j(0.18)
u=B.K()
u.r=t.gp(0)
d.ar(new B.a1(e,v,q,v+(j-v)),u)}else{o=A.j.E((a1-3)/0.4,0,1)
u=A.l9.aA(0,o)
t=B.K()
t.r=A.bC.gp(0)
d.N(new B.o(r,v),g*0.08*u,t)
C.re(d,"PDF",new B.o(r,v),g*0.045*o,A.c,9999)
v=g*0.06
C.re(d,"\u2713 Saved",new B.o(w.gbw().a,e+v),v,A.c.j(o),9999)}e=a1*4
v=Math.sin(e)
E.Bj(d,new B.o(h*0.2,f),g*0.66,a1,!0,Math.abs(Math.sin(e))*g*0.01,0,A.cy,F.mT,!1,(v+1)/2)
i=B.bs(new B.o(x,g*0.3),g*0.18,g*0.1)
x=g*0.02
x=B.bl(i,new B.aN(x,x))
v=B.K()
v.r=A.as.gp(0)
d.am(x,v)
v=g*0.015
v=B.bl(i.cn(-3),new B.aN(v,v))
x=A.b4.j(0.35+0.3*Math.sin(a1*6))
e=B.K()
e.r=x.gp(0)
d.am(v,e)},
i8a(a5,a6,a7){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=a6.a,a2=a6.b,a3=a2*0.94,a4=A.w.j(0.2)
$.Q()
x=B.K()
x.r=a4.gp(0)
a5.ar(new B.a1(0,a3,0+a1,a3+(a2-a3)),x)
w=B.bs(new B.o(a1*0.62,a2*0.47),a2*0.8,Math.min(a1*0.4,a2*0.75))
x=B.bl(w,A.mv)
a4=B.K()
a4.r=A.c.gp(0)
a5.am(x,a4)
a4=w.a
x=w.c
v=x-a4
u=w.b
t=w.d-u
C.re(a5,"INVOICE",new B.o(a4+v*0.3,u+t*0.09),t*0.07,A.d6,9999)
for(s=a5.c,r=v*0.08,q=a4+r,p=t*0.045,o=q+v*0.5,n=x-v*0.17,m=t*0.02,l=t*0.06,k=a7-0.5,j=0,i=0;i<3;++i){h=A.j.E((k-i*0.6)/0.4,0,1)
if(h<=0)continue
j+=D.aA9[i].b
g=u+t*(0.24+i*0.14)
J.bo(s.save())
s.translate((1-h)*30,0)
f=A.cu.j(h)
$.Q()
e=new B.ao(A.O,A.M,A.R,A.T,A.P)
e.r=f.gp(0)
a5.ar(new B.a1(q,g,o,g+p),e)
C.re(a5,"$"+D.aA9[i].b,new B.o(n,g+m),l,A.as.j(h),9999)
s.restore()}p=u+t*0.7
a5.ah(new B.o(q,p),new B.o(x-r,p),E.z2(A.ds,1.4))
C.re(a5,"TOTAL  $"+j,new B.o(w.gbw().a,u+t*0.78),t*0.075,A.as,v*0.8)
x=a7>2.8
if(x){r=a7-2.8
i=A.j.E(r/0.3,0,1)
J.bo(s.save())
s.translate(w.gbw().a,u+t*0.55)
a5.hW(0,-0.3)
a5.bU(0,2-A.e7.aA(0,i))
a5.am(B.bl(B.bs(A.I,t*0.17,v*0.6),A.hQ),E.z2(A.cX.j(i),3.5))
C.re(a5,"PAID",A.I,t*0.11,A.cX.j(i),9999)
s.restore()
for(v=r*0.7,a4-=a2*0.05,u=a2*0.7,t=a2*0.03,s=a7*8,d=0;d<6;++d){a0=A.j.F(v+d*0.17,1)
C.hbt(a5,new B.o(a4+Math.sin(d*2)*a2*0.1,u-a0*a2*0.5),t,s+d)}}a4=x?(Math.sin(a7*6)+1)/2:0
E.Bj(a5,new B.o(a1*0.2,a3),a2*0.66,a7,!0,0,1,A.bD,A.oi,x,a4)},
hDX(d,e,f,g){var x,w=B.bs(e,f*0.62,f*2.5),v=f*0.31,u=B.bl(w,new B.aN(v,v))
$.Q()
x=B.K()
x.r=A.c.gp(0)
d.am(u,x)
d.am(B.bl(w,new B.aN(v,v)),E.z2(A.bD,f*0.05))
C.re(d,"\u2665 "+g,e,f*0.4,A.q4,f*2.2)},
ze(d,e,f,g,h,i,j){var x,w,v,u,t,s,r,q,p,o,n,m,l
if(j<=0)return
x=new C.fVk(e,f,g)
w=A.j.cL(22*A.j.E(j,0,1))
for(v=i-h,u=e,t=1;t<=w;++t,u=r){s=Math.min(t/22,A.j.E(j,0,1))
r=x.$1(s)
$.Q()
q=new B.ao(A.O,A.M,A.R,A.T,A.P)
q.b=A.a9
p=q.c=h+v*s
q.r=A.oi.gp(0)
q.d=A.bw
d.ah(u,r,q)
q=-p*0.18
o=r.a
n=r.b
m=B.ar(A.oi,A.c,0.18)
m.toString
l=new B.ao(A.O,A.M,A.R,A.T,A.P)
l.b=A.a9
l.c=p*0.28
l.r=m.gp(0)
l.d=A.bw
d.ah(new B.o(u.a+q,u.b+0),new B.o(o+q,n+0),l)}},
iqB(d,e,f,g){var x,w,v,u,t,s
for(x=g*0.45,w=e.a,v=g*2,u=e.b,t=0;t<7;++t){s=A.j.F(x+t/7,1)
C.re(d,"\u2665",new B.o(w+Math.sin(t*2.3+v)*f*0.12+(t-3.5)*f*0.03,u-s*f*0.45),f*(0.04+0.02*A.o.F(t,3)),B.ar(A.bD,A.hT,A.o.F(t,2)).j((1-s)*0.9),9999)}},
i4z(b3,b4,b5){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6=null,a7=b4.a,a8=b4.b,a9=a8*0.94,b0=A.e5.j(0.7),b1=$.Q(),b2=B.K()
b2.r=b0.gp(0)
b3.ar(new B.a1(0,a9,0+a7,a9+(a8-a9)),b2)
x=new C.fnE(b5)
w=new C.fnB()
v=Math.min(a7*0.34,a8*0.62)
b2=a7*0.64
b0=v*0.2
u=a9-b0
t=new B.o(b2,u)
s=v*0.5
r=v*0.08
r=B.bl(B.bs(t,s,v*2.15),new B.aN(r,r))
q=B.K()
q.r=A.hE.gp(0)
b3.am(r,q)
b1=b1.r
q=y.v
p=new B.aF(b1,A.ai,a6,a6,B.a([],q))
r=u-b0
p.D(new B.aZ(b2,r))
o=b2-s
n=v*0.3
m=u-n
l=b2-v
k=v*0.16
j=u-k
p.D(new B.c5(o,m,l,j))
i=u+v*0.14
p.D(new B.aq(l,i))
l=u+v*0.02
k=u+k
p.D(new B.c5(o,l,b2,k))
p.D(new B.bv())
o=B.K()
o.r=A.h_.gp(0)
b3.af(p,o)
h=new B.aF(b1,A.ai,a6,a6,B.a([],q))
h.D(new B.aZ(b2,r))
s=b2+s
r=b2+v
h.D(new B.c5(s,m,r,j))
h.D(new B.aq(r,i))
h.D(new B.c5(s,l,b2,k))
h.D(new B.bv())
k=B.K()
k.r=A.i5.gp(0)
b3.af(h,k)
for(b1=v*0.85,s=b2-b1,r=u-v*0.06,q=b2-b0,u-=v*0.1,b0=b2+b0,b1=b2+b1,g=0;g<3;++g){b2=g*v*0.06
o=r+b2
b2=u+b2
m=new B.ao(A.O,A.M,A.R,A.T,A.P)
m.b=A.a9
m.c=1.4
m.r=D.ZY.gp(0)
m.d=A.bw
b3.ah(new B.o(s,o),new B.o(q,b2),m)
m=new B.ao(A.O,A.M,A.R,A.T,A.P)
m.b=A.a9
m.c=1.4
m.r=D.ZY.gp(0)
m.d=A.bw
b3.ah(new B.o(b0,b2),new B.o(b1,o),m)}f=w.$1(x.$2(0.2,1))
b0=t.aJ(0,new B.o(0,n))
b1=b5*4
b2=Math.sin(b1)
u=B.K()
u.sav(new B.c_(A.A,0.5,A.x,a6,0,B.a([A.dy.j(0.6*f),A.L],y.O),a6,a6).aK(0,B.bX(t.aJ(0,new B.o(0,n)),v*0.7)))
b3.N(b0,v*(0.5+0.1*b2)*f,u)
e=t.aJ(0,new B.o(0,v*0.12))
d=new C.fnD(t,a8,e)
a0=w.$1(x.$2(0.5,1.1))
a1=w.$1(x.$2(1.3,1.2))
for(b0=b5*2,a2=0;a2<4;++a2){b2=D.cOk[a2]
a3=b2.a
u=d.$2(a3,b2.b)
s=Math.sin(b0+a3*9)
r=new B.ao(A.O,A.M,A.R,A.T,A.P)
r.r=A.cX.j(0.9).gp(0)
b3.N(u,a8*b2.c*a1+s*1.2,r)}C.ze(b3,e,e.a2(0,new B.o(0,-a8*0.08)),d.$2(0,0.22),a8*0.05,a8*0.035,a0)
a4=w.$1(x.$2(1.2,0.8))
b0=a8*0.032
b2=a8*0.02
C.ze(b3,d.$2(0,0.22),d.$2(-0.06,0.28),d.$2(-0.2,0.36),b0,b2,a4)
C.ze(b3,d.$2(0,0.22),d.$2(0.06,0.28),d.$2(0.2,0.36),b0,b2,a4)
a5=w.$1(x.$2(2.4,0.7))
C.ze(b3,d.$2(0,0.22),d.$2(0,0.4),d.$2(0,0.57),a8*0.03,a8*0.016,a5)
b2=new C.fnC(x,b3,b5)
b0=a8*0.088
b2.$5(2,"Mama",d.$2(-0.2,0.36),b0,1.9)
b2.$5(3,"Baba",d.$2(0.2,0.36),b0,2.4)
b2.$5(4,"Dada",d.$2(0,0.57),a8*0.08,3)
if(b5>3.6)C.iqB(b3,d.$2(0,0.36),a8,b5-3.6)
b0=a7*0.2
b2=Math.sin(b1)
E.Bj(b3,new B.o(b0,a9),a8*0.66,b5,!1,Math.abs(Math.sin(b1))*a8*0.01,2,A.aE,F.mT,b5>3,(b2+1)/2)
C.ah7(b3,new B.o(b0,a8*0.1),"My tree!",a8*0.06,x.$2(3,0.4),A.c)},
if1(d,e,f){var x,w,v,u,t,s,r,q,p=e.a,o=e.b,n=o*0.94,m=A.w.j(0.2)
$.Q()
x=B.K()
x.r=m.gp(0)
d.ar(new B.a1(0,n,0+p,n+(o-n)),x)
w=A.j.bh(A.j.E(f/5.5,0,1)*9)+1
for(v=p*0.62,m=n-o*0.03,x=o*0.26,u=o*0.07,t=0;t<w;++t){s=m-t*o*0.055
r=B.bs(new B.o(v,s),u,x)
q=new B.ao(A.O,A.M,A.R,A.T,A.P)
q.r=A.bi.gp(0)
d.bZ(r,q)
s=B.bs(new B.o(v,s),u,x)
q=new B.ao(A.O,A.M,A.R,A.T,A.P)
q.b=A.a9
q.c=2
q.r=A.u8.gp(0)
q.d=A.bw
d.bZ(s,q)}m=o*0.1
C.hbt(d,new B.o(v,m+A.j.F(f*1.6,1)*(n-u-w*o*0.055-m)),o*0.05,f*8)
m=o*0.08
C.re(d,"$"+w*25,new B.o(v,m),m,A.dy,9999)
m=f*5
u=Math.sin(m)
E.Bj(d,new B.o(p*0.25,n),o*0.66,f,!1,Math.abs(Math.sin(m))*o*0.012,1,A.cy,F.mT,!0,(u+1)/2)},
i77(d,e,a0){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=e.a,h=e.b,g=h*0.94,f=A.w.j(0.2)
$.Q()
x=B.K()
x.r=f.gp(0)
d.ar(new B.a1(0,g,0+i,g+(h-g)),x)
for(f=d.c,x=h*0.012,w=h*0.55,v=a0*4,u=a0*2,t=h*0.15,s=h*0.03,r=0;r<3;r=o){q=Math.sin(v+r*1.7)
J.bo(f.save())
f.translate(i*(0.5+0.14*r),w-Math.abs(q)*h*0.3)
f.rotate((u+r)*180/3.141592653589793,0,0)
q=B.bl(B.bs(A.I,t,t),new B.aN(s,s))
p=new B.ao(A.O,A.M,A.R,A.T,A.P)
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
k=new B.ao(A.O,A.M,A.R,A.T,A.P)
k.r=A.bo.gp(0)
d.N(new B.o(l*h*0.04,m*h*0.04),x,k);++n}f.restore()}for(f=a0*0.6,w=h*0.25,v=h*0.06,r=0;r<5;++r){j=A.j.F(f+r*0.2,1)
C.re(d,"\u2605",new B.o(i*(0.45+r*0.1),w-j*h*0.2),v,A.dy.j(1-j),9999)}f=i*0.22
w=a0*6
v=Math.sin(w)
E.Bj(d,new B.o(f,g),h*0.66,a0,!0,Math.abs(Math.sin(w))*h*0.015,0,A.ca,F.mT,!0,(v+1)/2)
v=g-h*0.28
s=B.bl(B.bs(new B.o(f,v),h*0.07,h*0.16),new B.aN(s,s))
$.Q()
w=B.K()
w.r=A.cq.gp(0)
d.am(s,w)
w=B.K()
w.r=A.ay.gp(0)
d.N(new B.o(f+h*0.05,v),x,w)},
i8z(d,e,f){var x,w,v,u,t,s,r,q,p,o,n,m=e.a,l=e.b,k=l*0.94,j=A.w.j(0.2),i=$.Q(),h=B.K()
h.r=j.gp(0)
d.ar(new B.a1(0,k,0+m,k+(l-k)),h)
h=m*0.42
j=l*0.18
x=l*0.08
w=B.bl(new B.a1(h,j,h+m*0.5,j+l*0.5),new B.aN(x,x))
v=new B.aF(i.r,A.ai,null,null,B.a([],y.v))
v.D(new B.j8(w))
d.af(v,E.z2(A.c.j(0.5),4))
u=new B.TO(new B.rv(B.xI(v),!1,B.a([],y.L))).gH(0)
for(j=f*0.18,i=u.a,x=u.b,t=i.e,s=l*0.016,r=0;r<10;++r){q=A.j.F(j+r/10,1)
i.iy()
p=t[x].b
p===$&&B.c()
p=p.a.length()
i.iy()
p=t[x].De(q*p)
q=new B.ao(A.O,A.M,A.R,A.T,A.P)
q.r=A.dy.gp(0)
d.N(p.a,s,q)}o=f>1.5
j=l*0.43
n=new B.o(m*0.92,j)
if(o){i=A.dy.j(0.4+0.2*Math.sin(f*8))
x=B.K()
x.r=i.gp(0)
x.y=A.wo
d.N(n,l*0.2,x)}i=l*0.07
x=o?A.qj:A.bK
t=B.K()
t.r=x.gp(0)
d.N(n,i,t)
j=B.bl(B.bs(new B.o(h,j),l*0.2,l*0.1),A.ix)
t=B.K()
t.r=A.cX.gp(0)
d.am(j,t)
C.re(d,"+",new B.o(h,l*0.36),i,A.c,9999)
j=o?(Math.sin(f*6)+1)/2:0
h=o?Math.abs(Math.sin(f*6))*l*0.012:0
E.Bj(d,new B.o(m*0.2,k),l*0.68,f,!1,h,0,A.bR,F.mT,o,j)
if(o)C.ah7(d,new B.o(m*0.24,l*0.16),"It works!",i,(f-1.5)/0.4,A.c)},
i7N(d,e,f){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=e.a,i=e.b,h=i*0.94,g=A.w.j(0.2)
$.Q()
x=B.K()
x.r=g.gp(0)
d.ar(new B.a1(0,h,0+j,h+(i-h)),x)
w=A.j.E((f-0.3)/0.4,0,1)
v=A.j.E((f-1.8)/0.4,0,1)
x=i*0.2
g=i*0.065
C.ah7(d,new B.o(j*0.3,x),"How do I enroll?",g,w,A.qj)
if(f>1&&f<1.8)for(u=j*0.72,t=i*0.38,s=f*9,r=i*0.015,q=0;q<3;++q){p=Math.sin(s+q)
o=new B.ao(A.O,A.M,A.R,A.T,A.P)
o.r=A.c.gp(0)
d.N(new B.o(u+q*i*0.05,t-Math.abs(p)*i*0.02),r,o)}C.ah7(d,new B.o(j*0.7,i*0.38),"Tap Civic Registry!",g,v,A.eE)
E.Bj(d,new B.o(j*0.2,h),i*0.62,f,!1,0,2,A.ay,F.mT,f<1,0)
n=j*0.78
m=h-i*0.28
g=i*0.04
x=B.bl(B.bs(new B.o(n,m),i*0.22,x),new B.aN(g,g))
u=B.K()
u.r=A.aO.gp(0)
d.am(x,u)
u=i*0.18
x=m-u
g=B.bl(B.bs(new B.o(n,x),i*0.14,u),new B.aN(g,g))
u=B.K()
u.r=A.cu.gp(0)
d.am(g,u)
for(g=f*1.1,u=i*0.02,l=0;l<2;++l){k=F.fI[l]
t=A.j.F(g,1)>0.08?A.ba:A.eX
s=new B.ao(A.O,A.M,A.R,A.T,A.P)
s.r=t.gp(0)
d.N(new B.o(n+k*i*0.04,x),u,s)}d.ah(new B.o(n,m-i*0.25),new B.o(n,m-i*0.3),E.z2(A.ab,3))
g=B.K()
g.r=A.ay.gp(0)
d.N(new B.o(n,m-i*0.31),i*0.015,g)},
fBy:function fBy(d,e,f){this.a=d
this.b=e
this.c=f},
fBs:function fBs(d,e){this.a=d
this.b=e},
fVk:function fVk(d,e,f){this.a=d
this.b=e
this.c=f},
fnE:function fnE(d){this.a=d},
fnB:function fnB(){},
fnD:function fnD(d,e,f){this.a=d
this.b=e
this.c=f},
fnC:function fnC(d,e,f){this.a=d
this.b=e
this.c=f},
aPD(d,e,f,g,h,i,j,k){var x=new C.fsk(e,h,i,k),w=x.$1(g),v=w.b.c
if(v>j&&v>0)w=x.$1(Math.max(2,g*j/v))
x=w.b
v=x.c
x=x.a.c
w.a5(d,f.aJ(0,new B.o(v/2,x.gba(x)/2)))},
M1(d,e,f,g){var x,w,v,u,t,s,r,q,p,o=A.o.F(g==null?A.j.bh(f/6):g,11),n=A.j.F(f,6),m=D.dhs[o],l=e.a,k=e.b,j=0+l,i=0+k
$.Q()
x=B.K()
x.sav(new B.a9(A.aA,A.aF,A.x,B.a([m.c,m.d],y.O),null,null).aK(0,new B.a1(0,0,j,i)))
d.ar(new B.a1(0,0,j,i),x)
w=k*(l>=k?0.7:0.6)
i=d.c
J.bo(i.save())
i.clipRect(B.hR(new B.a1(0,0,j,0+w)),$.mf()[1],!0)
C.ifS(d,new B.av(l,w),o,n)
i.restore()
v=k-w
x=A.w.j(0.3)
u=B.K()
u.r=x.gp(0)
d.ar(new B.a1(0,w,j,w+v),u)
t=A.cw.aA(0,A.j.E((n-0.2)/0.5,0,1))
J.bo(i.save())
i.translate((1-t)*l*0.25,0)
u=l/2
j=l*0.94
C.aPD(d,m.a,new B.o(u,w+v*0.3),v*0.36,A.c.j(t),!0,j,0)
C.aPD(d,m.b,new B.o(u,w+v*0.64),v*0.2,A.c.j(0.92*t),!1,j,0)
i.restore()
for(j=k*0.965,i=k*0.009,x=k*0.004,s=0;s<11;++s){r=s===o
q=r?x:0
p=new B.ao(A.O,A.M,A.R,A.T,A.P)
p.r=A.c.j(r?0.95:0.35).gp(0)
d.N(new B.o(u+(s-5)*k*0.035,j),i+q,p)}j=l-k*0.07
i=k*0.06
C.aPD(d,"AD",new B.o(j,i),k*0.045,A.c.j(0.85),!0,9999,1)
x=k*0.02
x=B.bl(B.bs(new B.o(j,i),k*0.065,k*0.1),new B.aN(x,x))
i=B.K()
i.b=A.a9
i.c=1
i.r=A.ab.gp(0)
i.d=A.bw
d.am(x,i)},
M2(d,e,f,g){var x,w=d.c
J.bo(w.save())
w.clipRect(B.hR(new B.a1(0,0,0+e.a,0+e.b)),$.mf()[1],!0)
x=D.kx[A.o.F(f,8)].e
if(x===-2)C.i4M(d,e,g)
else if(x===-1)C.M1(d,e,g,null)
else C.M1(d,e,g,x)
w.restore()},
i4M(d,e,f){var x,w,v,u,t,s,r,q,p,o,n,m,l=e.a,k=e.b,j=new B.V(Date.now(),0,!1),i=0+l,h=0+k
$.Q()
x=B.K()
x.sav(D.c5R.aK(0,new B.a1(0,0,i,h)))
d.ar(new B.a1(0,0,i,h),x)
x=B.K()
x.r=A.bC.gp(0)
d.ar(new B.a1(0,0,i,0+k*0.15),x)
C.aPD(d,A.oI[B.bK(j)-1]+" "+B.bC(j),new B.o(l/2,k*0.075),k*0.08,A.c,!0,l*0.9,0)
w=l/7
for(i=k*0.21,h=k*0.05,v=0;v<7;++v)C.aPD(d,D.dwW[v],new B.o(w*(v+0.5),i),h,A.aD,!0,9999,0)
u=B.c1(B.bC(j),B.bK(j),1,0,0,0,0,0)
t=B.bW(B.c1(B.bC(j),B.bK(j)+1,0,0,0,0,0,0))
s=B.ms(u)-1
r=k*0.74/A.j.cL((s+t)/7)
for(i=k*0.26,h=f*3,q=1;q<=t;++q){p=s+q-1
o=new B.o(w*(A.o.F(p,7)+0.5),i+r*(A.o.aq(p,7)+0.5))
if(q===B.bW(j)){x=Math.min(w,r)
n=A.aH.j(0.5+0.2*Math.sin(h))
$.Q()
m=new B.ao(A.O,A.M,A.R,A.T,A.P)
m.r=n.gp(0)
d.N(o,x*0.42,m)}x=Math.min(w,r)
n=q===B.bW(j)?A.c:A.ab
C.aPD(d,""+q,o,x*0.42,n,!0,9999,0)}},
fsk:function fsk(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
wU:function wU(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
wn:function wn(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
hgj(d,e,f,g,h,i){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=d.c
J.bo(j.save())
x=e.a
w=e.b
v=0+x
u=0+w
j.clipRect(B.hR(new B.a1(0,0,v,u)),$.mf()[1],!0)
if(h<3){$.Q()
t=B.K()
t.r=D.bfd.gp(0)
d.ar(new B.a1(0,0,v,u),t)
if(h<0.5)u=h/0.5
else u=h>2.4?(3-h)/0.6:1
s=A.j.E(u,0,1)
u=e.ej(A.I)
t=e.gdA()
r=B.K()
r.sav(new B.c_(A.A,0.5,A.x,k,0,B.a([A.aH.j(0.35*s),A.L],y.O),k,k).aK(0,B.bX(e.ej(A.I),e.gdA()*0.5)))
d.N(u,t*0.5,r)
C.aQn(d,"NGMY",new B.o(0,w*0.36),w*0.2,A.c.j(s),A.K,w*0.03,x)
C.aQn(d,"T V",new B.o(0,w*0.6),w*0.08,A.aH.j(s),A.K,w*0.05,x)
r=x*0.3
t=w*0.78
u=B.K()
u.r=A.aH.j(s).gp(0)
d.ar(new B.a1(r,t,r+x*0.4*(h/3),t+3),u)}else if(i>=0)C.M2(d,e,i,g)
else{q=A.j.E((h-3)/0.5,0,1)
p=A.o.F(f,10)
switch(p){case 0:C.iex(d,e,g)
break
case 1:C.a3H(d,e,7,g)
break
case 2:C.a3H(d,e,0,g)
break
case 3:C.a3H(d,e,1,g)
break
case 4:C.a3H(d,e,2,g)
break
case 5:C.iqE(d,e,g)
break
case 6:C.a3H(d,e,3,g)
break
case 7:C.a3H(d,e,6,g)
break
case 8:C.a3H(d,e,4,g)
break
default:C.a3H(d,e,5,g)}t=x-w*0.34
r=w*0.04
o=w*0.03
n=B.bl(new B.a1(t,r,t+w*0.3,r+w*0.1),new B.aN(o,o))
$.Q()
o=B.K()
o.r=A.w.j(0.55).gp(0)
d.am(n,o)
C.aQn(d,"NGMY",new B.o(n.a+w*0.025,n.b+w*0.012),w*0.07,A.c,A.bn,1,k)
o=w*0.86
t=B.K()
t.r=A.w.j(0.6).gp(0)
d.ar(new B.a1(0,o,v,o+w*0.14),t)
C.aQn(d,"CH "+(f+1)+"  \xb7  "+D.Rj[p].a,new B.o(r,w*0.885),w*0.075,A.c,A.bn,0,x-w*0.08)
if(q<1){t=B.K()
t.r=A.c.j(0.6*(1-q)).gp(0)
d.ar(new B.a1(0,0,v,u),t)}}$.Q()
m=B.K()
m.r=A.w.j(0.07).gp(0)
for(l=0;l<w;l+=3)d.ar(new B.a1(0,l,v,l+1),m)
v=new B.aF($.Q().r,A.ai,k,k,B.a([],y.v))
v.D(new B.aZ(0,0))
v.D(new B.aq(x*0.45,0))
v.D(new B.aq(0,w*0.5))
v.D(new B.bv())
w=B.K()
w.r=A.c.j(0.04).gp(0)
d.af(v,w)
j.restore()},
aQn(d,e,f,g,h,i,j,k){var x=null,w=B.fq(x,A.cs,x,1,x,B.cP(x,x,x,x,x,x,x,x,x,B.l(x,x,h,x,x,x,x,x,x,x,x,g,x,x,A.u,x,x,!0,x,j,x,x,x,x,x,x),e),i,A.bX,x,A.dz,A.bY),v=k==null
w.o5(v?9999:k)
w.a5(d,f.a2(0,new B.o(i===A.K&&!v?(k-w.b.c)/2:0,0)))},
aPy(d,e,f,g,h,i,j){var x=new C.fq6(e,h,i,j),w=x.$1(g),v=w.b.c,u=f.c-f.a
if(v>u&&v>0)w=x.$1(g*u/v)
x=f.gbw()
v=w.b
u=v.c
v=v.a.c
w.a5(d,x.aJ(0,new B.o(u/2,v.gba(v)/2)))},
iex(d4,d5,d6){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4=null,c5=d5.a,c6=d5.b,c7=A.j.F(d6,14),c8=new C.fBU(c7),c9=new C.fBQ(),d0=0+c5,d1=0+c6,d2=$.Q(),d3=B.K()
d3.sav(D.c6Y.aK(0,new B.a1(0,0,d0,d1)))
d4.ar(new B.a1(0,0,d0,d1),d3)
x=c5*0.34
w=new C.fBT(x,c6)
v=w.$2(0,0.5)
d3=c6*0.75
u=B.K()
u.sav(new B.c_(A.A,0.5,A.x,c4,0,B.a([A.bN.j(0.55),A.L],y.O),c4,c4).aK(0,B.bX(v,d3)))
d4.N(v,d3,u)
t=new B.e4()
t.d_(11)
for(d3=d6*2,s=0;s<26;++s){u=t.ai()
r=t.ai()
q=t.ai()
p=new B.ao(A.O,A.M,A.R,A.T,A.P)
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
r=new B.ao(A.O,A.M,A.R,A.T,A.P)
r.r=(q?D.Mi:D.brG).gp(0)
d4.af(n,r)}k=w.$2(0,0.81)
j=c9.$1(c8.$2(0.2,1.6))
i=c9.$1(c8.$2(2.4,2.6))
for(d2=d6*1.4,h=0;h<8;++h){u=D.aB7[h]
g=u.a
f=u.b
e=Math.sin(d2+g*7)*c6*0.006
r=w.$2(g,f)
q=r.a
r=r.b
u=c6*u.c
p=new B.ao(A.O,A.M,A.R,A.T,A.P)
p.r=A.hp.gp(0)
d4.N(new B.o(q+e,r+0),u*i,p)
p=w.$2(g,f-0.015)
r=p.a
p=p.b
q=new B.ao(A.O,A.M,A.R,A.T,A.P)
q.r=A.eq.gp(0)
d4.N(new B.o(r+e,p+0),u*0.82*i,q)}for(d2=c6*0.01,u=k.a,r=k.b,q=r+d2,p=c6*0.015,r+=p,l=c6*0.04,h=0;h<2;++h){d=F.fI[h]*c6
C.ze(d4,k,new B.o(u+d*0.04,q),new B.o(u+d*0.12,r),l,d2,j)}u=c6*0.085
C.ze(d4,k,w.$2(0.02,0.7),w.$2(0,0.6),u,c6*0.055,j)
a0=c9.$1(c8.$2(1.8,1.6))
r=c6*0.05
q=c6*0.026
C.ze(d4,w.$2(0,0.6),w.$2(-0.1,0.55),w.$2(-0.34,0.44),r,q,a0)
C.ze(d4,w.$2(0,0.6),w.$2(0.1,0.55),w.$2(0.34,0.44),r,q,a0)
a1=c9.$1(c8.$2(3.2,1.3))
q=c6*0.024
d=c6*0.018
C.ze(d4,w.$2(-0.34,0.44),w.$2(-0.17,0.33),w.$2(0,0.39),q,d,a1)
C.ze(d4,w.$2(0.34,0.44),w.$2(0.17,0.33),w.$2(0,0.39),q,d,a1)
a2=c9.$1(c8.$2(4.4,1.3))
d=c6*0.02
q=c6*0.012
C.ze(d4,w.$2(0,0.39),w.$2(-0.1,0.3),w.$2(-0.17,0.2),d,q,a2)
C.ze(d4,w.$2(0,0.39),w.$2(0.1,0.3),w.$2(0.17,0.2),d,q,a2)
d=c6*0.016
C.ze(d4,w.$2(-0.27,0.72),w.$2(-0.14,0.78),w.$2(0,0.7),d,q,c9.$1(c8.$2(3.6,1)))
C.ze(d4,w.$2(0.27,0.72),w.$2(0.14,0.78),w.$2(0,0.7),d,q,c9.$1(c8.$2(3.6,1)))
a3=new B.e4()
a3.d_(5)
for(d=d6*1.6,a4=d4.c,a5=d6*1.3,a6=i*1.4,a7=c6*0.03,s=0;s<110;++s){a8=D.aB7[A.o.F(s,8)]
a9=a3.ai()*3.141592653589793*2
b0=Math.sqrt(a3.ai())*a8.c*0.95
b1=w.$2(a8.a+Math.cos(a9)*b0,a8.b+Math.sin(a9)*b0)
b2=Math.sin(d+s)
b3=b1.a
b1=b1.b
J.bo(a4.save())
a4.translate(b3+b2*c6*0.006,b1+0)
a4.rotate((a9+Math.sin(a5+s)*0.2)*180/3.141592653589793,0,0)
b4=A.j.E(a6-A.o.F(s,10)*0.05,0,1)
b1=B.bs(A.I,p*b4,a7*b4)
$.Q()
b2=new B.ao(A.O,A.M,A.R,A.T,A.P)
b2.r=B.ar(A.bg,A.ev,(Math.sin(d3+s)+1)/2).gp(0)
d4.bZ(b1,b2)
a4.restore()}b5=new C.fBR(c8,d4,d6,c7)
p=c6*0.075
b5.$5(0,"Bibi",w.$2(-0.27,0.72),p,5)
b5.$5(1,"Babu",w.$2(0.27,0.72),p,5.6)
b5.$5(2,"Mama",w.$2(-0.34,0.44),u,6.4)
b5.$5(3,"Baba",w.$2(0.34,0.44),u,7)
b5.$5(4,"Dada",w.$2(-0.17,0.2),p,8)
b5.$5(5,"Kaka",w.$2(0.17,0.2),p,8.6)
b6=new C.fBS(c8,d6,d4)
b6.$3(w.$2(0,0.7),c6*0.028,5.9)
b6.$3(w.$2(0,0.39),c6*0.035,7.4)
if(c7>9.3)for(u=(c7-9.3)*0.4,s=0;s<7;++s){b7=A.j.F(u+s/7,1)
C.aQn(d4,"\u2665",w.$2(Math.sin(s*2.3+d3)*0.3,0.38-b7*0.3),c6*(0.04+0.02*A.o.F(s,3)),A.hT.j((1-b7)*0.85),A.bn,0,c4)}d3=c5*0.655+(1-c9.$1(c8.$2(1,0.9)))*c5*0.4
u=c6*0.1
d=d3+c5*0.315
b8=new B.a1(d3,u,d,u+c6*0.64)
a4=B.bl(b8,new B.aN(r,r))
$.Q()
a5=B.K()
a5.r=D.iE.j(0.88).gp(0)
d4.am(a4,a5)
a5=B.bl(b8,new B.aN(r,r))
a4=B.K()
a4.b=A.a9
a4.c=q
a4.r=F.f2.gp(0)
d4.am(a5,a4)
b9=new C.fBV(b8,c6)
C.aPy(d4,"NGMY",b9.$2(0.13,0.06),c6*0.06,F.f2,!0,q)
C.aPy(d4,"Family",b9.$2(0.2,0.1),u,A.c,!0,0)
C.aPy(d4,"Tree",b9.$2(0.3,0.1),u,A.c,!0,0)
for(s=0;s<3;++s){c0=c8.$2(5.5+s*1.5,0.5)
if(c0<=0)continue
C.aPy(d4,"\u2665 "+D.cag[s],b9.$2(0.43+s*0.075,0.06).eQ(new B.o((1-c0)*30,0)),r,A.ir.j(c0),!1,0)}c1=c8.$2(11,0.5)
if(c1>0){c2=B.bs(new B.o(b8.gbw().a,c6*0.67),p,(d-d3)*0.6*A.e7.aA(0,c1))
d3=B.bl(c2,new B.aN(l,l))
$.Q()
u=B.K()
u.r=F.f2.gp(0)
d4.am(d3,u)
if(c1>0.8)C.aPy(d4,"ngmy.org",c2.cn(-d2),r,D.iE,!0,0)}if(c7>11.6){d2=c6*0.82
C.aPy(d4,"Family is everything",new B.a1(0,d2,0+x*2,d2+r),r,A.c.j(A.j.E((c7-11.6)/0.5,0,1)),!0,0)}if(c7<0.4)c3=1-c7/0.4
else c3=c7>13.5?(c7-13.5)/0.5:0
if(c3>0){$.Q()
d2=B.K()
d2.r=A.w.j(c3).gp(0)
d4.ar(new B.a1(0,0,d0,d1),d2)}},
hgG(d,e,f,g,h,i){return B.a6(d,!1).cd(B.ve(null,!1,!0,!0,new C.h2z(e,h,g,i,f),A.eR,null,A.pi,new C.h2A(),y.S))},
yg:function yg(d,e){this.a=d
this.b=e},
fq6:function fq6(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fBU:function fBU(d){this.a=d},
fBQ:function fBQ(){},
fBT:function fBT(d,e){this.a=d
this.b=e},
fBR:function fBR(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fBS:function fBS(d,e,f){this.a=d
this.b=e
this.c=f},
fBV:function fBV(d,e){this.a=d
this.b=e},
h2z:function h2z(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
h2A:function h2A(){},
Xp:function Xp(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aGc:function aGc(d,e){var _=this
_.e=_.d=$
_.f=-1
_.r=!1
_.w=null
_.x=0
_.y=!0
_.Q=_.z=null
_.as=$
_.by$=d
_.a9$=e
_.c=_.a=null},
ePy:function ePy(d){this.a=d},
ePx:function ePx(d){this.a=d},
ePw:function ePw(d){this.a=d},
ePv:function ePv(d,e){this.a=d
this.b=e},
ePz:function ePz(d,e){this.a=d
this.b=e},
ePI:function ePI(d){this.a=d},
ePH:function ePH(d){this.a=d},
ePG:function ePG(){},
ePB:function ePB(d){this.a=d},
ePC:function ePC(d){this.a=d},
ePD:function ePD(d){this.a=d},
ePE:function ePE(d){this.a=d},
ePA:function ePA(d){this.a=d},
ePF:function ePF(d){this.a=d},
ePu:function ePu(d){this.a=d},
ePt:function ePt(d){this.a=d},
bwX:function bwX(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.a=h},
aO3:function aO3(){},
hzt(d,e,f,g,h,i){var x=new C.fC3(e,h,!0),w=x.$1(g)
if(i>0&&w.b.c>i)w=x.$1(g*i/w.b.c)
x=w.b.c
w.a5(d,new B.o(f.a-x/2,f.b))},
iqE(c7,c8,c9){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3=null,c4=c8.a,c5=c8.b,c6=new B.a1(0,0,0+c4,0+c5)
$.Q()
x=B.K()
x.sav(D.c6V.aK(0,c6))
c7.ar(c6,x)
w=B.K()
w.r=A.aH.j(0.07).gp(0)
for(v=0;v<c4;v+=18)c7.ah(new B.o(v,0),new B.o(v,c5),w)
for(u=0;u<c5;u+=18)c7.ah(new B.o(0,u),new B.o(c4,u),w)
for(x=c9*0.02,t=0;t<18;++t){s=A.j.F(t*0.173,1)
r=A.o.F(t,3)
q=A.j.F(t*0.311+x*(1+r),1)
$.Q()
p=new B.ao(A.O,A.M,A.R,A.T,A.P)
p.r=A.hs.j(0.25).gp(0)
c7.N(new B.o(c4*s,c5*q),1.2+r,p)}o=c4*0.12
n=c4*0.88
m=c5*0.2
l=c5*0.62
x=$.Q()
s=y.v
k=new B.aF(x.r,A.ai,c3,c3,B.a([],s))
k.D(new B.aZ(o,m))
k.D(new B.aq(n,m))
k.D(new B.aq(n,l))
k.D(new B.aq(o,l))
k.D(new B.bv())
j=A.j.F(c9,10)
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
h=new B.TO(new B.rv(B.xI(k),!1,B.a([],y.L))).gH(0)
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
a0=B.bl(B.bs(new B.o(o,f),c5*0.26,e),new B.aN(d,d))
a1=B.K()
a1.r=A.as.gp(0)
c7.am(a0,a1)
for(a0=o+0,a1=c5*0.11,a2=c5*0.05,t=0;t<3;++t){a3=B.bs(new B.o(a0,f+(t-1)*c5*0.075),a2,a1)
a4=new B.ao(A.O,A.M,A.R,A.T,A.P)
a4.r=A.bg.gp(0)
c7.ar(a3,a4)}a0=c5*0.07
C.hzt(c7,"+",new B.o(o,f-c5*0.22),a0,A.c,0)
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
a8.d=A.bw
a8.r=(i?A.bi:A.ab).gp(0)
c7.ah(a4,a6,a8)
a1=o+a1*0.62
a4=B.bs(new B.o(a1,m),a2,c5*0.3)
a6=B.K()
a6.r=A.S.gp(0)
c7.ar(a4,a6)
s=B.a([],s)
b0=new B.aF(x.r,A.ai,c3,c3,s)
x=c5*0.14
a6=a1-x
b0.D(new B.aZ(a6,m))
for(a4=c5*0.035,a8=a3*0.035,t=0;t<6;++t){b1=(t&1)===0?a8:a4
b1=new B.aq(a6+(t+0.5)*c5*0.28/6,m+b1)
s.push(b1)
b2=b0.f
if(b2!=null)b1.ak(b2)
b0.ab()}b0.D(new B.aq(a1+x,m))
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
s.r=A.S.gp(0)
c7.ar(x,s)
s=B.bs(b3.a2(0,new B.o(a3*0.02,0)),e,4)
x=B.K()
x.r=A.br.gp(0)
c7.ar(s,x)
e=B.bs(b3.a2(0,new B.o(d,0)),e,4)
x=B.K()
x.r=A.br.gp(0)
c7.ar(e,x)
b4=i&&j>3.2
b5=b4?0.7+0.3*Math.sin(c9*6):0
b6=new B.o(n,f)
if(b4){x=0.03*b5
s=B.K()
s.r=A.dy.j(0.28).gp(0)
s.y=A.wo
c7.N(b6,c5*(0.2+x),s)
for(s=c9*0.5,x=0.15+x,t=0;t<8;++t){b7=t*3.141592653589793/4+s
e=Math.cos(b7)
a1=Math.sin(b7)
a6=Math.cos(b7)
a8=Math.sin(b7)
b1=new B.ao(A.O,A.M,A.R,A.T,A.P)
b1.c=3
b1.d=A.bw
b1.r=A.m3.gp(0)
c7.ah(new B.o(n+e*c5*0.1,f+a1*c5*0.1),new B.o(n+a6*c5*x,f+a8*c5*x),b1)}}x=B.K()
x.r=(b4?A.qj:A.bv).gp(0)
c7.N(b6,c5*0.075,x)
x=c5*0.1
s=B.bs(b6.a2(0,new B.o(0,x)),c5*0.04,a0)
f=B.K()
f.r=A.bK.gp(0)
c7.ar(s,f)
b8=A.j.F((i?(j-1.8)/4.6:0)*g,g)
if(i)for(s=g*4,b9=14;b9>=1;--b9){f=A.j.F(b8-b9*7+s,g)
r.iy()
f=p[q].De(f)
e=new B.ao(A.O,A.M,A.R,A.T,A.P)
e.r=A.dy.j(0.8*(1-b9/15)).gp(0)
e.y=K.Oo
c7.N(f.a,7-b9*0.4,e)}s=i?b8:g*0.88
r.iy()
c0=p[q].De(s).a
s=B.K()
s.r=A.dy.j(0.35).gp(0)
s.y=A.mf
c7.N(c0,a0,s)
s=B.K()
s.r=A.m3.gp(0)
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
c2=B.bl(B.bs(new B.o(s,r),x,c4*0.8),new B.aN(a2,a2))
a2=B.K()
a2.r=A.dA.j(0.7).gp(0)
c7.am(c2,a2)
C.hzt(c7,c1,new B.o(s,r-a4),a7,A.hs,c4*0.76)},
fC3:function fC3(d,e,f){this.a=d
this.b=e
this.c=f},
hgO(d){var x
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
it3(d){var x
switch(C.hgO(d)){case"lg":x=A.hD
break
case"sony":x=A.db
break
case"apple":x=A.bP
break
case"bo":x=D.u1
break
default:x=A.aH
break}return x},
atm:function atm(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bmU:function bmU(){this.d=0
this.c=this.a=null},
ePr:function ePr(d,e){this.a=d
this.b=e},
ePs:function ePs(d,e){this.a=d
this.b=e},
ePo:function ePo(){},
ePn:function ePn(d){this.a=d},
ePp:function ePp(d){this.a=d},
ePq:function ePq(d){this.a=d},
ePl:function ePl(d){this.a=d},
ePm:function ePm(d,e){this.a=d
this.b=e},
Bh(d,e,f,g,h,i,j,k){var x=new C.fC4(e,h,i),w=x.$1(g)
if(k>0&&w.b.c>k)w=x.$1(g*k/w.b.c)
x=f.a
x=j?x:x-w.b.c/2
w.a5(d,new B.o(x,f.b))},
lE(d,e,f,g){var x
$.Q()
x=B.K()
x.r=g.gp(0)
return d.N(e,f,x)},
iI(d,e,f,g){var x,w=B.bl(e,new B.aN(f,f))
$.Q()
x=B.K()
x.r=g.gp(0)
return d.am(w,x)},
aPG(d,e,f,g,h){var x
$.Q()
x=B.K()
x.c=g
x.d=A.bw
x.r=h.gp(0)
return d.ah(e,f,x)},
z0(d,e,f,g,h){var x,w,v,u=A.j.E((f-g)/0.5,0,1)
if(u<=0)return
x=d.c
J.bo(x.save())
w=e.a
v=e.b
x.translate(w,v)
d.bU(0,A.j.E(A.l9.aA(0,u),0.01,1.25))
x.translate(-w,-v)
h.$0()
x.restore()},
i9G(a0,a1,a2,a3,a4){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=a1.a,j=a1.b,i=a4.length,h=A.j.F(a2,i*2.5),g=i-1,f=A.o.E(A.j.bh(h/2.5),0,g),e=h-f*2.5,d=new B.a1(0,0,0+k,0+j)
$.Q()
x=B.K()
x.sav(new B.a9(A.aA,A.aF,A.x,a3,null,null).aK(0,d))
a0.ar(d,x)
for(x=a2*0.6,w=a2*0.5,v=0;v<3;++v){u=Math.sin(x+v)
t=Math.cos(w+v)
s=new B.ao(A.O,A.M,A.R,A.T,A.P)
s.r=A.c.j(0.05).gp(0)
a0.N(new B.o(k*(0.15+0.35*v+0.05*u),j*(0.28+0.1*t)),j*(0.3+0.05*v),s)}r=A.cw.aA(0,A.j.E(e/0.4,0,1))
q=a4[f]
x=a0.c
J.bo(x.save())
x.clipRect(B.hR(d),$.mf()[1],!0)
w=1-r
x.translate(w*k*0.3,0)
q.c.$3(a0,a1,e)
x.restore()
x=k*0.04
u=j*0.04
t=j*0.05
p=B.bl(new B.a1(x,u,x+j*0.3,u+j*0.1),new B.aN(t,t))
x=B.K()
x.r=A.w.j(0.35).gp(0)
a0.am(p,x)
C.Bh(a0,"NGMY",new B.o(p.a+u,p.b+j*0.012),j*0.07,A.c,!0,!0,0)
o=w*j*0.05
w=k/2
x=k*0.92
C.Bh(a0,q.a,new B.o(w,j*0.64+o),j*0.095,A.c.j(r),!0,!1,x)
C.Bh(a0,q.b,new B.o(w,j*0.76+o),t,A.c.j(0.85*r),!1,!1,x)
if(f===g){n=B.bs(new B.o(w,j*0.835),j*0.06,k*0.46)
C.iI(a0,n,j*0.03,A.c.j(0.92*A.j.E((e-0.4)/0.4,0,1)))
C.Bh(a0,"Get NGMY  \xb7  ngmy.org",new B.o(w,n.b+j*0.008),u,A.as,!0,!1,n.c-n.a-12)}else for(x=j*0.01,g/=2,u=j*0.835,t=j*0.014,v=0;v<i;++v){s=v===f
m=s?t:x
l=new B.ao(A.O,A.M,A.R,A.T,A.P)
l.r=A.c.j(s?0.95:0.4).gp(0)
a0.N(new B.o(w+(v-g)*j*0.045,u),m,l)}},
hdE(d){var x=d.a,w=d.b
return new B.a1(x*0.2,w*0.16,x*0.8,w*0.56)},
hdt(d,e,f,g){var x,w,v,u,t,s,r,q=C.hdE(e),p=q.a,o=q.d,n=q.c
$.Q()
x=B.K()
x.r=D.aii.gp(0)
d.ar(new B.a1(p,o,n,o+e.b*0.03),x)
for(n-=p,x=q.b,w=o-x,v=0;v<9;++v){u=g?1:A.dH.aA(0,A.j.E((f-v*0.18)/0.35,0,1))
t=p+v*n/8
s=new B.ao(A.O,A.M,A.R,A.T,A.P)
s.r=D.bjA.gp(0)
d.ar(new B.a1(t-3,o-w*u,t+3,o),s)}r=g?1:A.j.E((f-1.6)/0.4,0,1)
p-=4
o=B.K()
o.r=D.bq_.gp(0)
d.ar(new B.a1(p,x-5,p+(n+8)*r,x+3),o)},
i5H(d,e,f){return C.hdt(d,e,f,!1)},
i5J(d,e,f){var x,w,v,u,t,s,r,q,p,o,n,m,l,k
C.hdt(d,e,f,!0)
x=C.hdE(e)
w=x.b
v=x.d-w
u=w+v*0.55
w=x.a
t=x.c-w
C.aPG(d,new B.o(w,u),new B.o(w+t*A.j.E((f-0.2)/1.4,0,1),u),5,A.bi)
t=w+t*0.5
w=u+v*0.18
s=new B.o(t,w)
C.z0(d,s,f,1.2,new C.foH(d,s,x))
if(f>1.6)for(r=f*4,q=0;q<6;++q){p=q*3.141592653589793/3+r
o=Math.cos(p)
n=Math.sin(p)
m=Math.cos(p)
l=Math.sin(p)
$.Q()
k=new B.ao(A.O,A.M,A.R,A.T,A.P)
k.c=3
k.d=A.bw
k.r=A.m3.gp(0)
d.ah(new B.o(t+o*v*0.13,w+n*v*0.13),new B.o(t+m*v*0.2,w+l*v*0.2),k)}},
i5G(d,e,f){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
C.hdt(d,e,f,!0)
x=C.hdE(e)
for(w=x.a,v=x.c-w,u=e.a,t=x.b,s=v/3,r=s-2,q=x.d-t,p=t+q,o=0;o<3;++o){n=A.cw.aA(0,A.j.E((f-(0.1+o*0.5))/0.6,0,1))
m=w+o*v/3
l=m+(1-n)*u*0.6
$.Q()
k=new B.ao(A.O,A.M,A.R,A.T,A.P)
k.r=A.bP.gp(0)
d.ar(new B.a1(l,t,l+r,p),k)
if(n>=1)for(l=m+6,k=m+s-8,j=0;j<4;++j){i=t+(j+0.5)*q/4
h=new B.ao(A.O,A.M,A.R,A.T,A.P)
h.r=A.db.gp(0)
d.N(new B.o(l,i),2,h)
h=new B.ao(A.O,A.M,A.R,A.T,A.P)
h.r=A.db.gp(0)
d.N(new B.o(k,i),2,h)}}},
i5I(d,e,a0){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=e.a,i=e.b,h=i*0.56,g=$.Q(),f=B.K()
f.r=D.aii.gp(0)
d.ar(new B.a1(0,h,0+j,h+i*0.03),f)
x=i*0.55
w=i*0.28
f=j/2
v=f-x/2
C.lE(d,new B.o(j*0.8,h-i*0.3*A.dH.aA(0,A.j.E(a0/1.5,0,1))),i*0.07,A.dy)
u=h-w
t=B.K()
t.r=D.bni.gp(0)
d.ar(new B.a1(v,u,v+x,u+w),t)
g=new B.aF(g.r,A.ai,null,null,B.a([],y.v))
g.D(new B.aZ(v-x*0.08,u))
g.D(new B.aq(f,u-w*0.55))
g.D(new B.aq(v+x*1.08,u))
g.D(new B.bv())
u=B.K()
u.r=A.er.gp(0)
d.af(g,u)
u=v+x*0.14
g=w*0.62
t=h-g
s=B.K()
s.r=D.ait.gp(0)
d.ar(new B.a1(u,t,u+x*0.2,t+g),s)
r=A.j.E((a0-0.8)/0.5,0,1)
for(g=h-w*0.75,u=x*0.17,t=g+w*0.38,q=0;q<2;++q){p=v+x*(0.5+0.25*q)
s=new B.ao(A.O,A.M,A.R,A.T,A.P)
s.r=B.ar(A.dk,A.dy,r).gp(0)
d.ar(new B.a1(p,g,p+u,t),s)}for(g=a0*2,u=h-w*1.4,t=a0-1.2,s=t/1,t/=0.3,q=0;q<6;++q){o=q*3.141592653589793/3+g
n=Math.cos(o)
m=Math.sin(o)
l=A.j.E(s,0,1)
k=new B.ao(A.O,A.M,A.R,A.T,A.P)
k.r=D.dEm.j(A.j.E(t,0,1)).gp(0)
d.N(new B.o(f+n*i*0.1*l,u+m*i*0.1*l),3,k)}},
i6q(d,e,a0){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=e.b,j=e.a,i=j*0.28,h=j*0.72,g=k*0.2,f=k*0.52
$.Q()
x=B.K()
x.r=A.aV.gp(0)
x.b=A.a9
w=k*0.012
x.c=w
d.ar(new B.a1(i,g,h,f),x)
v=(g+f)/2
u=k*0.1
C.iI(d,B.bs(new B.o(i,v),k*0.15,u),3,A.as)
C.iI(d,B.bs(new B.o(i,v-k*0.035),k*0.06,u),3,A.bg)
u=h-i
t=f-g
s=2*(u+t)
for(r=a0*110,q=0;q<16;++q){p=A.j.F(r+q*s/16,s)
if(p<u)o=new B.o(i+p,g)
else{p-=u
if(p<t)o=new B.o(h,g+p)
else{p-=t
o=p<u?new B.o(h-p,f):new B.o(i,f-(p-u))}}n=new B.ao(A.O,A.M,A.R,A.T,A.P)
n.r=A.c.gp(0)
d.N(o,w,n)}m=A.j.E((a0-0.6)/0.5,0,1)*(0.7+0.3*Math.sin(a0*7))
l=new B.o(h,v)
C.lE(d,l,k*(0.14+0.03*m),A.dy.j(0.28*m))
w=B.ar(A.am,A.qj,m)
w.toString
C.lE(d,l,k*0.07,w)},
i6p(d,e,a0){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=e.b,g=e.a,f=B.bs(new B.o(g/2,h*0.34),h*0.38,g*0.62)
C.iI(d,f,10,A.bO)
for(x=f.a,w=x+14,v=f.c-x,u=v-28,t=f.b,s=t+14,r=f.d-t,q=r-28,p=0;p<18;++p)for(o=w+p*u/17,n=0;n<6;++n){$.Q()
m=new B.ao(A.O,A.M,A.R,A.T,A.P)
m.r=A.bK.gp(0)
d.N(new B.o(o,s+n*q/5),2,m)}l=new B.o(x+v*0.25,t+r*0.3)
C.z0(d,l,a0,0.2,new C.fpd(d,l,f))
k=new B.o(x+v*0.55,t+r*0.32)
C.z0(d,k,a0,0.7,new C.fpe(d,k,f))
j=new B.o(x+v*0.78,t+r*0.55)
C.z0(d,j,a0,1.1,new C.fpf(d,j,f))
i=A.j.E((a0-1.4)/0.7,0,1)
w=t+r*0.8
$.Q()
u=B.K()
u.c=4
u.r=A.cX.gp(0)
u.d=A.bw
d.ah(new B.o(x+v*0.1,w),new B.o(x+v*(0.1+0.6*i),w),u)
if(a0>2)C.lE(d,k,r*0.2,A.ay.j(0.3*(0.6+0.4*Math.sin(a0*12))))},
i6s(d,e,f){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=e.b,j=e.a,i=B.bs(new B.o(j*0.4,k*0.32),k*0.36,k*0.62)
C.iI(d,i.cn(5),8,A.as)
x=d.c
J.bo(x.save())
x.clipRRect(B.nP(B.bl(i,A.mv)),$.np(),!0)
w=A.j.E((f-0.7)/0.2,0,1)
for(v=i.a,u=i.c,t=u-v,s=i.b,r=t/7+1,q=s+(i.d-s),p=0;p<7;++p){o=v+p*t/7
$.Q()
n=new B.ao(A.O,A.M,A.R,A.T,A.P)
n.r=B.ar(A.dA,D.cuG[p],w).gp(0)
d.ar(new B.a1(o,s,o+r,q),n)}x.restore()
m=B.bs(new B.o(j*0.8,k*0.4),k*0.24,k*0.16)
C.iI(d,m,6,A.as)
C.iI(d,m.cn(-5),4,A.bg)
C.Bh(d,"12 V",new B.o(m.gbw().a,m.gbw().b-k*0.025),k*0.05,A.w,!0,!1,0)
l=A.j.E((f-0.1)/0.6,0,1)
x=m.a
v=m.gbw()
t=m.gbw()
$.Q()
s=B.K()
s.c=4
s.r=A.aV.gp(0)
s.d=A.bw
d.ah(new B.o(x,v.b),new B.o(x-(x-u)*l,t.b),s)},
i6r(d,e,f){var x,w,v,u,t,s,r,q,p=e.b,o=e.a,n=B.bs(new B.o(o/2,p*0.32),p*0.48,p*0.42)
C.iI(d,n,14,A.av)
x=n.a
w=x+10
v=n.b
u=v+10
t=n.c
s=t-x
r=n.d
q=(r-v)*0.3
C.iI(d,new B.a1(w,u,w+(s-20),u+q),6,A.i8)
u=(f-0.2)/1.6
C.Bh(d,A.j.ad(12*A.dH.aA(0,A.j.E(u,0,1)),1)+" V",new B.o(n.gbw().a,v+14),p*0.085,A.eV,!0,!1,s-30)
q=r-q
C.lE(d,new B.o(n.gbw().a,q),s*0.22,A.as)
v=d.c
J.bo(v.save())
v.translate(n.gbw().a,q)
d.hW(0,-1.2+2.4*A.j.E(u,0,1))
C.aPG(d,A.I,new B.o(0,-s*0.18),3,A.c)
v.restore()
v=1-A.dH.aA(0,A.j.E(f/0.8,0,1))
s=p*0.5
C.aPG(d,new B.o(x,r),new B.o(o*0.2+v*-40,s),4,A.ay)
C.aPG(d,new B.o(t,r),new B.o(o*0.8+v*40,s),4,A.as)},
fno(d,e,f,g){var x,w
C.lE(d,e,f,g)
C.lE(d,e.a2(0,new B.o(0,-f*0.18)),f*0.38,A.c.j(0.92))
x=B.bs(e.a2(0,new B.o(0,f*0.95)),f*1.1,f*1.3)
$.Q()
w=B.K()
w.r=A.c.j(0.92).gp(0)
d.cC(x,3.141592653589793,3.141592653589793,!0,w)},
hdl(d,e,f,g){var x,w,v,u,t,s,r,q=$.Q(),p=B.a([],y.v),o=new B.aF(q.r,A.ai,null,null,p)
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
o.ab()}}o.D(new B.bv())
$.Q()
q=B.K()
q.r=g.gp(0)
d.af(o,q)},
i46(d,e,f){var x,w,v,u,t,s,r=e.b,q=e.a,p=new B.o(q*0.38,r*0.32)
C.z0(d,p,f,0.1,new C.fmj(d,p,r))
x=r*0.11
w=p.a2(0,new B.o(x,x))
C.z0(d,w,f,0.7,new C.fmk(d,w,r))
x=q*0.52
v=r*0.22
u=A.j.E((f-0.5)/0.6,0,1)
t=x+q*0.3-x
C.iI(d,new B.a1(x,v,x+t*u,v+(v+r*0.2-v)),10,A.c.j(0.92))
if(u>0.6){x+=10
s=v+12
C.iI(d,new B.a1(x,s,x+t*0.7,s+8),3,A.as)
s=v+30
C.iI(d,new B.a1(x,s,x+t*0.5,s+6),3,A.bK)
v+=46
C.iI(d,new B.a1(x,v,x+t*0.6,v+6),3,A.bK)}},
i44(d,e,f){var x,w,v,u,t,s,r,q,p=e.b,o=e.a,n=new C.fmg(d,f,p),m=p*0.07
C.fno(d,new B.o(o*0.14,p*0.2),m,A.aH)
C.fno(d,new B.o(o*0.86,p*0.42),m,A.bT)
m=o*0.25
x=p*0.13
w=p*0.14
n.$4(new B.a1(m,x,m+o*0.42,x+w),A.c,0.2,A.as)
if(f>0.9&&f<1.5)for(m=o*0.6,x=p*0.38,v=p*0.012,u=p*0.008,t=f*12,s=0;s<3;++s){r=Math.sin(t+s)
$.Q()
q=new B.ao(A.O,A.M,A.R,A.T,A.P)
q.r=A.c.gp(0)
d.N(new B.o(m+s*p*0.04,x),v+u*r,q)}m=o*0.33
x=p*0.32
n.$4(new B.a1(m,x,m+o*0.46,x+w),A.as,1.5,A.c)},
i47(d,e,f){var x,w,v,u,t,s,r,q,p=e.b
for(x=e.a/2,w=p*0.3,v=p*0.06,u=0;u<5;++u){t=new B.o(x+(u-2)*p*0.13,w)
s=0.2+u*0.35
r=f>s
C.z0(d,t,f,s,new C.fml(d,t,p,r))
if(!r)C.hdl(d,t,v,A.am.j(0.5))}q=A.j.E((f-2)/0.4,0,1)
if(q>0)C.Bh(d,"5.0  \xb7  Loved by members",new B.o(x,p*0.46),p*0.05,A.c.j(q),!0,!1,0)},
i45(d,e,f){var x,w,v,u,t,s,r=e.b,q=e.a
for(x=q/2,w=r*0.2,v=0;v<6;++v){u=new B.o(x+(A.o.F(v,3)-1)*r*0.2,w+A.o.aq(v,3)*r*0.2)
C.z0(d,u,f,v*0.2,new C.fmi(d,u,r,v))}t=1+0.06*Math.sin(f*8)
s=B.bs(new B.o(x,r*0.5),r*0.07*t,q*0.22*t)
if(f>1.4){C.iI(d,s,r*0.035,A.hT)
C.Bh(d,"Say hi",new B.o(s.gbw().a,s.b+r*0.012),r*0.045,A.c,!0,!1,s.c-s.a-10)}},
i5s(d,e,f){var x,w,v,u,t,s,r,q,p,o,n,m=e.b,l=e.a
for(x=f*0.5,w=m*0.08,v=m*0.06,u=m*0.035,t=0;t<9;++t){s=A.j.F(x+t/9,1)
r=l*(0.15+0.7*A.j.F(t*0.37,1))
q=w+s*m*0.5
p=0.3+0.7*Math.abs(Math.cos(s*22))
o=B.bs(new B.o(r,q),v,v*p)
$.Q()
n=new B.ao(A.O,A.M,A.R,A.T,A.P)
n.r=A.bi.gp(0)
d.bZ(o,n)
p=B.bs(new B.o(r,q),u,u*p)
n=new B.ao(A.O,A.M,A.R,A.T,A.P)
n.r=A.bN.gp(0)
d.bZ(p,n)}},
i78(a3,a4,a5){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=a4.b,a2=a4.a
for(x=a1*0.28,w=a1*0.36,v=a1*0.07,u=a2/2,t=a1*0.32,s=a1*0.02,r=-a1,q=r*0.02,r*=0.03,p=a1*0.03,o=a1*0.06,n=a1*0.045,m=0;m<3;++m){l=A.e7.aA(0,A.j.E((a5-m*0.3)/0.6,0,1))
k=m===1
j=k?s:0
i=B.bs(new B.o(u+(m-1)*a1*0.32+(1-l)*a2*0.5,t-j),w,x)
j=D.RW[m]
h=B.bl(i,new B.aN(12,12))
$.Q()
g=new B.ao(A.O,A.M,A.R,A.T,A.P)
g.r=j.gp(0)
a3.am(h,g)
g=i.a
h=i.b
j=i.c
f=i.d
e=A.c.j(0.2)
d=B.bl(new B.a1(g- -8,h- -8,j+-8,f+-8),new B.aN(8,8))
a0=new B.ao(A.O,A.M,A.R,A.T,A.P)
a0.r=e.gp(0)
a3.am(d,a0)
g+=(j-g)/2
h+=(f-h)/2
f=new B.ao(A.O,A.M,A.R,A.T,A.P)
f.r=A.c.j(0.9).gp(0)
a3.N(new B.o(g,h),v,f)
if(m===0){j=D.RW[m]
f=new B.ao(A.O,A.M,A.R,A.T,A.P)
f.c=5
f.d=A.bw
f.r=j.gp(0)
a3.ah(new B.o(g+q,h+r),new B.o(g+p,h+0),f)}if(k){k=B.bs(new B.o(g,h),o,o)
j=D.RW[m]
k=B.bl(k,new B.aN(4,4))
f=new B.ao(A.O,A.M,A.R,A.T,A.P)
f.r=j.gp(0)
a3.am(k,f)}if(m===2)C.hdl(a3,new B.o(g,h),n,D.RW[m])}if(a5>1.3)C.lE(a3,new B.o(u+a1*0.05,a1*0.5-A.j.E(a5-1.3,0,0.5)*a1*0.1),a1*0.025,A.c.j(0.85))},
i79(d,e,f){var x,w,v,u,t,s,r,q,p,o=e.b
C.i5s(d,e,f)
x=B.bs(new B.o(e.a/2,o*0.46),o*0.16,o*0.5)
w=o*0.07
C.iI(d,x,w,A.as)
C.iI(d,x.cn(-3),o*0.065,A.cq)
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
r=A.o.F(A.j.bh(f*4),2)===0
s=x.c
u=x.gbw()
t=o*0.015
q=o*0.025
p=r?A.c0:A.mO
C.lE(d,new B.o(s-o*0.12,u.b+t),q,p)
p=x.gbw()
u=r?A.hp:A.b4
C.lE(d,new B.o(s-w,p.b-t),q,u)},
i7a(d,e,f){var x,w,v,u,t=e.b,s=e.a,r=t*0.3,q=B.bs(new B.o(s/2,r),r,s*0.5)
C.iI(d,q,14,A.S)
r=q.b
x=t*0.05
C.Bh(d,"SCORE",new B.o(q.gbw().a,r+t*0.02),x,A.hs,!0,!1,0)
w=(f-0.1)/1.9
v=q.a
u=q.c-v
C.Bh(d,""+A.j.V(A.dH.aA(0,A.j.E(w,0,1))*9800),new B.o(q.gbw().a,r+t*0.085),t*0.12,A.dy,!0,!1,u-20)
v+=16
x=q.d-x
u=v+(u-32)
r=x+t*0.025
C.iI(d,new B.a1(v,x,u,r),6,A.aT)
C.iI(d,new B.a1(v,x,v+(u-v)*A.j.E(w,0,1),x+(r-x)),6,A.b4)},
i7b(d,e,f){var x,w,v,u,t,s,r,q,p,o,n,m,l=e.b,k=e.a/2,j=A.e7.aA(0,A.j.E(f/0.8,0,1)),i=d.c
J.bo(i.save())
i.translate(k,l*0.5+(1-j)*l*0.3)
x=new B.aF($.Q().r,A.ai,null,null,B.a([],y.v))
w=-l
v=w*0.09
u=w*0.26
x.D(new B.aZ(v,u))
t=l*0.09
x.D(new B.aq(t,u))
s=w*0.1
r=w*0.08
x.D(new B.c5(t,s,0,r))
x.D(new B.c5(v,s,v,u))
x.D(new B.bv())
u=B.K()
u.r=A.bi.gp(0)
d.af(x,u)
u=w*0.03
x=B.K()
x.r=A.y8.gp(0)
d.ar(new B.a1(w*0.015,r,l*0.015,u),x)
C.iI(d,new B.a1(w*0.07,u,l*0.07,0),4,A.i7)
i.restore()
q=new B.e4()
q.d_(3)
for(i=(f-0.6)/1.8,x=l*0.25,p=0;p<22;++p){o=q.ai()*3.141592653589793*2
n=0.4+q.ai()
m=A.j.E(i,0,1)
w=B.bs(new B.o(k+Math.cos(o)*l*0.4*n*m,x+(Math.sin(o)*l*0.25*n*m+30*m*m)),4,6)
v=new B.ao(A.O,A.M,A.R,A.T,A.P)
v.r=[A.bT,A.aH,A.bi,A.b4][A.o.F(p,4)].j(1-m*0.6).gp(0)
d.ar(w,v)}},
idR(d,e,f){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=e.b,h=e.a/2,g=B.bs(new B.o(h,i*0.38),i*0.34,i*0.7)
C.iI(d,g,6,A.h_)
for(x=g.a,w=x-6,v=g.c,u=v-x,t=u+12,s=g.b,r=i*0.07,q=s-r+0,p=t/8,o=i*0.1,n=q+o*G.XF.aA(0,A.j.E((f-0.1)/0.9,0,1)),m=0;m<8;++m){l=w+m*t/8
$.Q()
k=new B.ao(A.O,A.M,A.R,A.T,A.P)
k.r=((m&1)===0?A.ay:A.c).gp(0)
d.ar(new B.a1(l,q,l+p,n),k)}x+=14
o=s+o
w=g.d-s
C.iI(d,new B.a1(x,o,x+u*0.35,o+w*0.55),4,A.dk)
v-=u*0.3
C.iI(d,new B.a1(v,o,v+u*0.2,o+w*0.7),4,A.h9)
j=A.j.E((f-1)/0.5,0,1)
if(j>0)C.Bh(d,"OPEN",new B.o(h,s-i*0.14),r*j,A.dy,!0,!1,0)},
idY(d,e,f){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=e.b
for(x=e.a/2,w=h*0.32,v=h*0.28,u=h*0.38,t=h*0.05,s=h*0.06,r=0;r<3;++r){q=B.bs(new B.o(x+(r-1)*h*0.33,w+(1-A.e7.aA(0,A.j.E((f-r*0.35)/0.6,0,1)))*h*0.4),u,v)
p=B.bl(q,new B.aN(12,12))
$.Q()
o=new B.ao(A.O,A.M,A.R,A.T,A.P)
o.r=A.c.gp(0)
d.am(p,o)
o=q.a
p=o+8
n=q.b
m=n+8
l=q.c-o
k=q.d
n=k-n
j=D.dhr[r]
p=B.bl(new B.a1(p,m,p+(l-16),m+n*0.55),new B.aN(8,8))
i=new B.ao(A.O,A.M,A.R,A.T,A.P)
i.r=j.gp(0)
d.am(p,i)
i=o+l/2
p=new B.ao(A.O,A.M,A.R,A.T,A.P)
p.r=A.c.j(0.85).gp(0)
d.N(new B.o(i,m+n*0.27),t,p)
o+=12
p=k-n*0.3
p=B.bl(new B.a1(o,p,o+l*0.5,p+7),new B.aN(3,3))
l=new B.ao(A.O,A.M,A.R,A.T,A.P)
l.r=A.bK.gp(0)
d.am(p,l)
C.Bh(d,D.c9w[r],new B.o(i,k-n*0.18),s,A.as,!0,!1,0)}},
idP(d,e,f){var x,w,v,u,t,s,r,q,p,o,n=e.b,m=n*0.2,l=B.bs(new B.o(e.a*(0.2+0.3*A.dH.aA(0,A.j.E(f/1,0,1)))+m,n*0.4),m,n*0.44)
for(m=l.a,x=l.c,w=m+(x-m)/2,v=l.b,u=n*0.13,t=n*0.09,s=0;s<3;++s){r=A.j.E((f-(0.6+s*0.4))/0.5,0,1)
if(r<=0)continue
q=B.bs(new B.o(w+(s-1)*n*0.1,v-u*(1-r)*2+4),t,t)
p=[A.cn,A.bT,A.bi][s]
q=B.bl(q,new B.aN(5,5))
$.Q()
o=new B.ao(A.O,A.M,A.R,A.T,A.P)
o.r=p.gp(0)
d.am(q,o)}w=new B.aF($.Q().r,A.ai,null,null,B.a([],y.v))
w.D(new B.aZ(m,v))
w.D(new B.aq(x,v))
u=n*0.04
t=l.d
w.D(new B.aq(x-u,t))
w.D(new B.aq(m+u,t))
w.D(new B.bv())
u=B.K()
u.r=A.aO.gp(0)
d.af(w,u)
C.aPG(d,new B.o(m,v),new B.o(m-n*0.05,v-n*0.07),4,A.aO)
v=n*0.08
t+=n*0.03
u=n*0.025
C.lE(d,new B.o(m+v,t),u,A.as)
C.lE(d,new B.o(x-v,t),u,A.as)},
idQ(d,e,f){var x,w=e.b,v=e.a,u=-w,t=u*0.4+(v+w*0.6)*A.j.E(f/2.4,0,1),s=w*0.36,r=t+w*0.28
C.iI(d,new B.a1(t,s,r,s+w*0.17),5,A.c)
s=w*0.4
C.iI(d,new B.a1(r,s,r+w*0.12,s+w*0.13),5,A.cF)
s=w*0.54
r=w*0.03
C.lE(d,new B.o(t+w*0.07,s),r,A.as)
C.lE(d,new B.o(t+w*0.32,s),r,A.as)
x=new B.o(v/2,w*0.24)
C.z0(d,x,f,0.5,new C.fB7(d,x,w))
C.z0(d,x.a2(0,new B.o(w*0.11,u*0.07)),f,1.1,new C.fB8(d,x,w))},
hbl(d){var x=d.b
return B.bs(new B.o(d.a*0.45,x*0.32),x*0.36,x*0.62)},
aPf(d,e,f,g){var x,w,v,u,t,s,r=e.d,q=e.b,p=r-q
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
r.r=A.av.gp(0)
d.ar(new B.a1(x,v,x+w*0.88*f,v+p*0.04),r)},
i57(d,e,f){var x=C.hbl(e)
C.z0(d,x.gbw(),f,0,new C.fo_(d,x))
C.aPf(d,x,A.dH.aA(0,A.j.E((f-0.4)/1.6,0,1)),A.cG)},
i56(d,e,f){var x,w,v,u,t,s,r,q,p=C.hbl(e),o=A.o.F(A.j.bh(f/0.6),4),n=d.c
J.bo(n.save())
n.translate(p.gbw().a,p.gbw().b)
d.hW(0,-0.06+0.03*Math.sin(f*3))
n.translate(-p.gbw().a,-p.gbw().b)
C.aPf(d,p,1,D.aub[o])
n.restore()
for(n=e.a*0.78,x=e.b,w=x*0.16,v=x*0.032,u=x*0.045,t=0;t<4;++t){s=w+t*x*0.09
r=D.aub[t]
$.Q()
q=new B.ao(A.O,A.M,A.R,A.T,A.P)
q.r=r.gp(0)
d.N(new B.o(n,s),v,q)
if(t===o){r=new B.ao(A.O,A.M,A.R,A.T,A.P)
r.b=A.a9
r.c=3
r.r=A.c.gp(0)
d.N(new B.o(n,s),u,r)}}},
i58(d,e,f){var x,w,v,u,t,s,r=e.b,q=e.a,p=r*0.32,o=d.c
J.bo(o.save())
o.translate(q*0.34,p)
d.hW(0,-0.1)
C.aPf(d,B.bs(A.I,r*0.24,r*0.4),1,A.cG)
o.restore()
x=B.bs(new B.o(q*0.74,p),r*0.3,r*0.17)
C.iI(d,x,r*0.03,A.dA)
C.iI(d,x.cn(-3),r*0.025,A.aH)
for(p=f*0.9,o=x.a,w=x.b,w+=(x.d-w)/2,v=0;v<3;++v){u=A.j.F(p+v/3,1)
t=B.bX(new B.o(o,w),r*(0.04+0.16*u))
$.Q()
s=new B.ao(A.O,A.M,A.R,A.T,A.P)
s.b=A.a9
s.c=3
s.r=A.c.j(1-u).gp(0)
d.cC(t,2.199114857512855,1.8849555921538759,!1,s)}if(f>1.4){u=A.e7.aA(0,A.j.E((f-1.4)/0.5,0,1))
p=x.c-o
C.aPf(d,B.bs(x.gbw(),p*0.5*u,p*0.8*u),1,A.cG)}},
i59(d,e,f){var x,w,v,u,t,s,r,q,p,o,n,m=C.hbl(e)
for(x=d.c,w=m.a,v=m.c-w,w+=v/2,u=e.b,t=m.b,s=m.d-t,t+=s/2,v*=0.8,s*=0.9,r=0;r<4;++r){q=A.e7.aA(0,A.j.E((f-r*0.25)/0.6,0,1))
J.bo(x.save())
p=r-1.5
x.translate(w+p*u*0.1,t)
x.rotate(p*0.18*q*180/3.141592653589793,0,0)
p=B.bs(A.I,s,v)
o=D.dsb[r]
p=B.bl(p,new B.aN(10,10))
$.Q()
n=new B.ao(A.O,A.M,A.R,A.T,A.P)
n.r=o.gp(0)
d.am(p,n)
x.restore()}C.z0(d,m.gbw(),f,1.2,new C.fo0(d,m,e))},
ieS(d,e,f){var x,w=e.b,v=new B.o(e.a/2,w*0.38),u=w*0.2,t=B.bs(v.a2(0,new B.o(0,-w*0.07-(1-A.e7.aA(0,A.j.E((f-0.2)/1,0,1)))*w*0.07)),u,w*0.17)
$.Q()
x=B.K()
x.b=A.a9
x.c=w*0.03
x.r=A.cu.gp(0)
d.cC(t,3.141592653589793,3.141592653589793,!1,x)
C.iI(d,B.bs(v,u,w*0.26),10,A.bi)
C.lE(d,v,w*0.025,A.Gg)
u=B.bs(v.a2(0,new B.o(0,w*0.04)),w*0.05,w*0.012)
x=B.K()
x.r=A.Gg.gp(0)
d.ar(u,x)
if(f>1.2){u=A.j.F(f*2,1)
C.lE(d,v,w*(0.17+0.04*u),A.dy.j(0.25*(1-u)))}},
ieR(d,e,f){var x,w,v,u,t=e.b,s=e.a/2,r=t*0.34,q=new B.o(s,r),p=t*0.24
C.lE(d,q,p*1.1,A.dh)
C.lE(d,q,p,A.bK)
C.lE(d,q,p*0.9,A.cu)
x=d.c
J.bo(x.save())
x.translate(s,r)
r=f<1.4?1:0.3
d.hW(0,f*3*r)
C.lE(d,A.I,p*0.35,A.bv)
for(r=p*0.6,w=0;w<6;++w){v=B.bs(A.I,3,r)
$.Q()
u=new B.ao(A.O,A.M,A.R,A.T,A.P)
u.r=A.ab.gp(0)
d.ar(v,u)
x.rotate(29.999999999999996,0,0)}x.restore()
for(r=t*0.6-t*0.04,x=t*0.014,w=0;w<4;++w){v=f>0.4+w*0.5?A.b4:A.aT
$.Q()
u=new B.ao(A.O,A.M,A.R,A.T,A.P)
u.r=v.gp(0)
d.N(new B.o(s+(w-1.5)*t*0.06,r),x,u)}},
ieU(d,e,f){var x,w,v,u,t,s,r,q,p,o,n=e.b,m=e.a,l=new B.o(m*0.62,n*0.34),k=n*0.22
C.lE(d,l,k*1.1,A.dh)
C.lE(d,l,k*0.7,A.dy.j(0.12))
x=B.bs(l.a2(0,new B.o(-k*1.15,0)),k*2,k*0.35)
$.Q()
w=B.K()
w.r=A.bK.gp(0)
d.bZ(x,w)
for(x=n*0.12,w=n*0.15,v=n*0.07,u=d.c,t=m*0.12,s=0;s<3;++s){r=A.jC.aA(0,A.j.E((f-(0.2+s*0.6))/0.9,0,1))
q=B.ks(new B.o(t,n*(0.18+s*0.12)),l,r)
q.toString
J.bo(u.save())
u.translate(q.a,q.b)
u.rotate(0.4*(1-r)*180/3.141592653589793,0,0)
q=1-0.6*r
u.scale(q,q)
q=B.bs(A.I,w,x)
p=D.dtY[s]
q=B.bl(q,new B.aN(5,5))
o=new B.ao(A.O,A.M,A.R,A.T,A.P)
o.r=p.gp(0)
d.am(q,o)
o=B.bs(A.I,3,v)
q=new B.ao(A.O,A.M,A.R,A.T,A.P)
q.r=A.ds.gp(0)
d.ar(o,q)
u.restore()}},
ieT(d,e,f){var x,w,v,u,t,s,r,q,p=null,o=e.b,n=e.a/2,m=o*0.32,l=new B.o(n,m)
for(x=f*0.7,w=0;w<3;++w){v=A.j.F(x+w/3,1)
$.Q()
u=new B.ao(A.O,A.M,A.R,A.T,A.P)
u.b=A.a9
u.c=3
u.r=A.aH.j(0.6*(1-v)).gp(0)
d.N(l,o*(0.12+0.22*v),u)}v=A.e7.aA(0,A.j.E(f/0.7,0,1))
x=d.c
J.bo(x.save())
x.translate(n,m)
d.bU(0,v)
m=$.Q().r
n=y.v
u=new B.aF(m,A.ai,p,p,B.a([],n))
t=-o
u.D(new B.aZ(0,t*0.17))
s=o*0.14
r=t*0.11
u.D(new B.aq(s,r))
q=o*0.09
u.D(new B.c5(s,q,0,o*0.18))
s=t*0.14
u.D(new B.c5(s,q,s,r))
u.D(new B.bv())
r=B.K()
r.r=A.aH.gp(0)
d.af(u,r)
n=new B.aF(m,A.ai,p,p,B.a([],n))
n.D(new B.aZ(t*0.06,0))
n.D(new B.aq(t*0.015,o*0.05))
n.D(new B.aq(o*0.07,t*0.05))
t=B.K()
t.b=A.a9
t.c=o*0.03
t.d=A.bw
t.r=A.c.gp(0)
d.af(n,t)
x.restore()},
ie4(d,e,f){var x,w,v,u,t=e.b,s=t*0.15
for(x=e.a/2,w=t*0.2,v=0;v<6;++v){u=new B.o(x+(A.o.F(v,3)-1)*s*1.35,w+A.o.aq(v,3)*s*1.35)
C.z0(d,u,f,0.1+v*0.3,new C.fBk(d,u,s,v))}},
ie3(d,e,f){var x,w,v,u,t,s,r,q,p,o,n=e.b,m=A.j.E((f-0.1)/2,0,1)
for(x=m*6,w=e.a/2,v=n*0.56,u=n*0.035,t=0;t<6;++t){s=A.j.E(x-t,0,1)
r=n*(0.36-t*0.04)*2
r=B.bs(new B.o(w,v),r,r)
$.Q()
q=new B.ao(A.O,A.M,A.R,A.T,A.P)
q.b=A.a9
q.c=u
q.d=A.bw
q.r=D.d98[t].gp(0)
d.cC(r,3.141592653589793,3.141592653589793*s,!1,q)}p=3.141592653589793+3.141592653589793*m
o=new B.o(w+Math.cos(p)*n*0.2,v+Math.sin(p)*n*0.2)
C.lE(d,o,n*0.03,A.c)
C.aPG(d,o,o.a2(0,new B.o(n*0.06,-n*0.07)),5,A.dX)},
ie2(d,e,f){var x,w,v,u,t,s,r,q,p,o,n=e.b,m=e.a
for(x=f*7,w=m/2,v=n*0.5,u=n*0.07,t=0;t<7;++t){s=n*(0.08+0.2*(0.5+0.5*Math.sin(x+t*1.3)))
r=w+(t-3.5)*n*0.09
q=v-s
p=D.d9u[t]
q=B.bl(new B.a1(r,q,r+u,q+s),new B.aN(5,5))
$.Q()
r=new B.ao(A.O,A.M,A.R,A.T,A.P)
r.r=p.gp(0)
d.am(q,r)}for(x=f*0.6,w=n*0.3,t=0;t<3;++t){o=A.j.F(x+t/3,1)
v=m*(0.3+0.4*t/2)+10*Math.sin(o*6)
u=w-o*n*0.2
r=1-o
q=A.c.j(r)
$.Q()
p=new B.ao(A.O,A.M,A.R,A.T,A.P)
p.r=q.gp(0)
d.N(new B.o(v,u),6,p)
v+=5
r=A.c.j(r)
p=new B.ao(A.O,A.M,A.R,A.T,A.P)
p.c=2.5
p.d=A.bw
p.r=r.gp(0)
d.ah(new B.o(v,u+0),new B.o(v,u+-18),p)}},
ie5(d,e,f){var x,w,v,u,t,s,r,q=e.b
for(x=e.a/2,w=q*0.14,v=q*0.26,u=0;u<4;++u){t=A.j.E((f-u*0.3)/0.7,0,1)
if(t<=0)continue
s=G.XF.aA(0,t)
C.Bh(d,"NGMY"[u],new B.o(x+(u-1.5)*q*0.2,w-(1-s)*q*0.25),v,D.dg6[u],!0,!1,0)}r=A.j.E((f-1.4)/0.6,0,1)
x-=q*0.4
w=q*0.46
$.Q()
v=B.K()
v.r=A.c.gp(0)
d.ar(new B.a1(x,w,x+q*0.8*r,w+4),v)},
a3H(d,e,f,g){var x=$.i43[A.o.E(f,0,7)]
C.i9G(d,e,g,y.T.a(x[0]),y.m.a(x[1]))},
js:function js(d,e,f){this.a=d
this.b=e
this.c=f},
fC4:function fC4(d,e,f){this.a=d
this.b=e
this.c=f},
foH:function foH(d,e,f){this.a=d
this.b=e
this.c=f},
fpd:function fpd(d,e,f){this.a=d
this.b=e
this.c=f},
fpe:function fpe(d,e,f){this.a=d
this.b=e
this.c=f},
fpf:function fpf(d,e,f){this.a=d
this.b=e
this.c=f},
fmj:function fmj(d,e,f){this.a=d
this.b=e
this.c=f},
fmk:function fmk(d,e,f){this.a=d
this.b=e
this.c=f},
fmg:function fmg(d,e,f){this.a=d
this.b=e
this.c=f},
fmh:function fmh(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fml:function fml(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fmi:function fmi(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fB7:function fB7(d,e,f){this.a=d
this.b=e
this.c=f},
fB8:function fB8(d,e,f){this.a=d
this.b=e
this.c=f},
fo_:function fo_(d,e){this.a=d
this.b=e},
fo0:function fo0(d,e,f){this.a=d
this.b=e
this.c=f},
fBk:function fBk(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g}},D,E,F,O
J=c[1]
B=c[0]
A=c[2]
G=c[236]
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
O=c[255]
C.wU.prototype={}
C.wn.prototype={}
C.yg.prototype={}
C.Xp.prototype={
S(){return new C.aGc(null,null)}}
C.aGc.prototype={
gQc(){var x,w=this,v=w.d
if(v===$){x=B.bn(null,A.on,null,1,null,w)
x.cr(0)
w.d!==$&&B.bG()
w.d=x
v=x}return v},
gAq(){var x=this.e
return x===$?this.e=this.a.e:x},
gaR5(){var x=this.as
if(x===$)x=this.as=this.a.f?3:0
return x},
gazJ(){var x=this.gQc().y
x=x==null?null:A.o.aq(x.a,1000)
return(x==null?0:x)/1000},
asB(){var x=this,w=x.Q
if(w!=null)w.a1(0)
x.Q=B.cy(B.dv(0,0,0,0,0,x.gaR5()>0&&x.gazJ()<3.2?13:10),x.gc89())},
c8a(){var x=this
if(x.c==null)return
if(x.f<0&&!x.r){x.m(new C.ePy(x))
H.dE(900,"",40,0,0.2,"noise")}x.asB()},
Y(){var x=this
x.a3()
x.w=B.cy(x.a.r,x.gb10())
x.asB()
x.aXS()
H.dE(520,"",80,0,0.25,"tri")},
aXS(){var x=this.z
if(x!=null)x.a1(0)
this.z=B.cy(A.k_,new C.ePx(this))},
cbC(){var x=this.c
if(x!=null&&B.a6(x,!1).pX()){x=this.c
x.toString
B.a6(x,!1).O(this.gAq())}},
ake(){var x=this,w=x.w
if(w!=null)w.a1(0)
x.w=null
x.y=!0
x.aXS()},
ayZ(d){this.m(new C.ePv(this,d))
H.dE(900,"",40,0,0.3,"noise")},
b2X(d){this.m(new C.ePz(this,d))
H.dE(700,"",60,0,0.3,"tri")},
t(){var x=this,w=x.w
if(w!=null)w.a1(0)
w=x.z
if(w!=null)w.a1(0)
w=x.Q
if(w!=null)w.a1(0)
x.gQc().t()
x.bzU()},
B(d){var x,w,v,u,t=this,s=null,r=B.m(10),q=B.L(t.gcbD(),A.r,6),p=B.a([new B.ac(0,A.G,C.it3(t.a.d).j(0.25),A.I,40)],y.V),o=B.m(4),n=y.p,m=B.a([B.c9(t.gQc(),new C.ePH(t),s)],n)
if(t.r)m.push(t.bFx())
r=B.at(new B.fF(1.7777777777777777,B.q(s,B.by(o,new B.an(A.a0,s,A.b2,A.t,m,s),A.aq),A.f,s,s,new B.p(s,s,q,r,p,s,A.n),s,s,s,s,s,s,s,s),s),s,s,s)
q=t.y
p=q?1:0
o=B.o_(s,A.aU,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s)
o=B.aG(s,s,s,s,B.X(A.cz,A.c,s,s,s,s),s,s,s,t.gb10(),s,s,s,o,"Back to the board",s)
m=B.m(20)
x=t.f
w=t.a
o=B.A(B.a([o,A.b5,B.q(s,B.d(x>=0?w.c+" \xb7 "+D.kx[x].a:w.c+" \xb7 CH "+(t.gAq()+1),s,s,s,s,s,s,L.AI,s,s,s),A.f,s,s,new B.p(A.aU,s,s,m,s,s,A.n),s,s,s,s,A.mc,s,s,s)],n),A.m,s,A.e,A.i,0,s,s)
m=t.ctf()
x=A.w.j(0.65)
w=B.m(18)
v=t.f
v=B.d(v>=0?D.kx[v].a:D.Rj[t.gAq()].a,s,s,s,s,s,s,A.hk,A.K,s,s)
u=t.f
return B.c4(s,A.w,B.bm(!0,B.aA(A.c5,new B.an(A.a0,s,A.b2,A.t,B.a([r,B.zj(new B.dx(!q,B.x(B.a([new B.D(D.bB7,o,s),A.an,m,A.b5,B.q(s,B.x(B.a([v,B.d(u>=0?D.kx[u].c:D.Rj[t.gAq()].b,s,s,s,s,s,s,M.ab0,A.K,s,s)],n),A.m,s,A.e,A.Q,0,A.p),A.f,s,s,new B.p(x,s,s,w,s,s,A.n),s,s,s,A.bh,A.bV,s,s,s)],n),A.m,s,A.e,A.i,0,A.p),s),A.b3,A.iI,p)],n),s),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new C.ePI(t),s,s,s,s,s,s,!1,A.a4),!0,!1,A.ag,!0,!0),s,!1,!1,s,s)},
ctf(){var x=this,w=null,v=new C.ePG(),u=A.w.j(0.72),t=B.m(22),s=B.L(A.aH.j(0.5),A.r,1)
return B.q(w,B.A(B.a([v.$3(A.wH,"CH \u2212",new C.ePB(x)),v.$3(A.hW,"CH +",new C.ePC(x)),v.$5$color$on(A.HD,"TV",new C.ePD(x),A.aH,x.f<0),v.$5$color$on(A.z7,"APPS",new C.ePE(x),A.br,x.r),v.$5$color$on(A.CE,"ADS",new C.ePF(x),A.bT,x.f===0)],y.p),A.m,w,A.e,A.Q,0,w,w),A.f,w,w,new B.p(u,w,s,t,w,w,A.n),w,w,w,w,A.a0K,w,w,w)},
bFx(){return new C.atm(this.a.d,this.gchS(),new C.ePu(this),null)},
gcbD(){switch(C.hgO(this.a.d)){case"apple":var x=A.db
break
case"bo":x=D.FD
break
case"sony":x=D.bf9
break
case"lg":x=A.ep
break
default:x=A.cq
break}return x}}
C.bwX.prototype={
a5(d,e){var x=this
return C.hgj(d,e,x.b,x.d,x.e,x.c)},
aE(d){return!0}}
C.aO3.prototype={
t(){var x=this,w=x.a9$
if(w!=null)w.a6(0,x.gbB())
x.a9$=null
x.a4()},
aY(){this.b5()
this.b4()
this.bC()}}
C.atm.prototype={
S(){return new C.bmU()},
a6B(d,e){return this.d.$1(e)}}
C.bmU.prototype={
b11(d){this.m(new C.ePr(this,d))
this.a.a6B(0,d)},
B(d){var x,w=this
switch(C.hgO(w.a.c)){case"lg":x=w.c4e()
break
case"sony":x=w.cB0()
break
case"apple":x=w.cbE()
break
case"bo":x=w.bGs()
break
default:x=w.cvj()
break}return x},
gafb(){var x=new B.V(Date.now(),0,!1)
return A.a.b0(A.o.u(B.dg(x)),2,"0")+":"+A.a.b0(A.o.u(B.fP(x)),2,"0")},
az_(d,e,f,g,h,i,j){var x,w,v=null,u=D.kx[d],t=this.d===d,s=u.d,r=B.ar(s,A.w,0.55)
r.toString
r=B.a([s,r],y.O)
s=B.m(h)
if(t)x=i
else x=A.L
x=B.L(x,A.r,t?2.5:0)
w=B.a([B.d(u.b,v,v,v,v,v,v,B.l(v,v,v,v,v,v,v,v,v,v,v,e,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],y.p)
if(g)w.push(new B.D(A.uq,B.d(u.a,v,1,A.a2,v,v,v,A.VG,v,v,v),v))
return B.aA(v,B.q(v,B.x(w,A.m,v,A.bb,A.i,0,A.p),A.f,v,v,new B.p(v,v,x,s,v,new B.a9(A.aA,A.aF,A.x,r,v,v),A.n),v,f,v,v,v,v,v,j),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.ePs(this,d),v,v,v,v,v,v,!1,A.a4)},
b12(d,e,f,g,h,i){return this.az_(d,e,f,!1,g,h,i)},
cvj(){var x,w,v,u,t,s,r=this,q=null,p=r.a.e,o=y.p,n=B.A(B.a([D.fLX,A.ae,D.fDZ,A.b5,D.c_B,A.ae,D.bWm,A.ae,B.d(r.gafb(),q,q,q,q,q,q,D.aW_,q,q,q)],o),A.m,q,A.e,A.i,0,q,q),m=D.kx[r.d],l=B.d(m.a,q,q,q,q,q,q,A.l4,q,q,q)
m=B.d(m.c,q,1,A.a2,q,q,q,D.fvm,q,q,q)
x=A.c.j(0.08)
w=B.a([],o)
for(v=0;v<2;++v){u=new B.aN(8,8)
w.push(B.q(q,B.X(D.cu3[v],A.ab,q,q,q,17),A.f,q,q,new B.p(A.bA,q,q,new B.be(u,u,u,u),q,q,A.n),q,34,q,A.NT,q,q,q,34))}u=B.a([],o)
for(t=0;t<8;++t){s=r.d===t?1.12:1
u.push(new B.D(A.NT,new B.zk(r.az_(t,14,44,!0,8,A.aH,52),s,A.b3,A.fU,q,q),q))}w.push(B.E(B.cg(B.A(u,A.m,q,A.e,A.i,0,q,q),A.t,q,A.y,q,q,q,q,A.aL),1))
return B.aA(q,B.q(q,B.x(B.a([n,A.b5,new B.bL(A.a6,q,q,l,q),new B.bL(A.a6,q,q,m,q),A.an,B.q(q,B.A(w,A.m,q,A.e,A.i,0,q,q),A.f,q,q,new B.p(x,q,q,A.Xn,q,q,A.n),q,q,q,q,A.Ok,q,q,q)],o),A.m,q,A.e,A.i,0,A.p),A.f,q,q,D.b71,q,q,q,q,G.alg,q,q,q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,p,q,q,q,q,q,q,!1,A.a4)},
c4e(){var x=null,w=this.a.e,v=y.p
return B.aA(x,B.q(x,B.x(B.a([B.A(B.a([B.q(x,D.fSb,A.f,x,x,new B.p(A.hD,x,x,B.m(10),x,x,A.n),x,x,x,x,A.n_,x,x,x),A.bm,D.fKU,A.b5,B.d(this.gafb(),x,x,x,x,x,x,A.EC,x,x,x)],v),A.m,x,A.e,A.i,0,x,x),A.b5,new B.a5(x,62,B.hN(x,new C.ePn(this),8,x,x,A.aL,new C.ePo(),!1),x)],v),A.E,x,A.e,A.i,0,A.p),A.f,x,x,D.b7c,x,x,x,x,O.NZ,x,x,x),A.y,!1,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,w,x,x,x,x,x,x,!1,A.a4)},
cB0(){var x,w,v,u,t=this,s=null,r=D.kx[t.d],q=t.a.e,p=y.p,o=B.a([B.q(s,D.f8a,A.f,s,s,new B.p(A.dl,s,s,B.m(12),s,s,A.n),s,s,s,s,A.yQ,s,s,s),A.ae],p)
for(x=0;x<3;++x){w=D.doe[x]
v=w==="Apps"?A.c:A.aD
o.push(new B.D(A.iK,B.d(w,s,s,s,s,s,s,new B.H(!0,v,s,s,s,s,9.5,A.V,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s),s,s,s),s))}o.push(A.b5)
o.push(B.d(t.gafb(),s,s,s,s,s,s,D.fuL,s,s,s))
o=B.A(o,A.m,s,A.e,A.i,0,s,s)
v=r.d
u=B.ar(v,A.w,0.7)
u.toString
u=B.a([v,u],y.O)
v=B.m(10)
return B.aA(s,B.q(s,B.x(B.a([o,A.fM,B.E(B.A(B.a([B.E(B.q(s,B.x(B.a([B.d(r.b,s,s,s,s,s,s,A.pS,s,s,s),B.d(r.a,s,s,s,s,s,s,A.nX,s,s,s),B.d(r.c,s,2,A.a2,s,s,s,D.fBk,s,s,s),A.cU,B.aA(s,B.q(s,D.fHF,A.f,s,s,new B.p(A.c,s,s,B.m(10),s,s,A.n),s,s,s,s,A.yQ,s,s,s),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new C.ePp(t),s,s,s,s,s,s,!1,A.a4)],p),A.E,s,A.mq,A.i,0,A.p),A.f,s,s,new B.p(s,s,s,v,s,new B.a9(A.a6,A.aa,A.x,u,s,s),A.n),s,s,s,s,A.cl,s,s,s),5),A.ae,B.E(B.im(!0,s,s,A.y,D.ffh,new C.ePq(t),8,A.ag,s,A.ah,!1),6)],p),A.m,s,A.e,A.i,0,s,s),1)],p),A.E,s,A.e,A.i,0,A.p),A.f,D.brK,s,s,s,s,s,s,A.hc,s,s,s),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,q,s,s,s,s,s,s,!1,A.a4)},
cbE(){var x,w,v,u,t=this,s=null,r=t.a.e,q=y.p,p=B.A(B.a([D.c0d,A.r4,D.fYm,A.b5,B.d(t.gafb(),s,s,s,s,s,s,A.EE,s,s,s)],q),A.m,s,A.e,A.i,0,s,s),o=B.a([],q)
for(x=0;x<8;++x){w=t.d===x
v=w?6:0
u=w?D.du4:A.Si
w=w?1.18:1
o.push(new B.D(A.f4,B.cT(s,new B.zk(t.b12(x,20,44,12,A.c,44),w,A.b3,A.eH,s,s),s,s,A.b3,new B.p(s,s,s,s,u,s,A.n),A.eH,s,s,s,new B.R(0,0,0,v),s,s,s,s),s))}return B.aA(s,B.q(s,B.x(B.a([p,A.b5,new B.a5(s,68,B.cg(B.A(o,A.dL,s,A.e,A.i,0,s,s),A.t,s,A.y,s,s,s,s,A.aL),s),A.ax,B.d(D.kx[t.d].a,s,s,s,s,s,s,A.oZ,s,s,s)],q),A.m,s,A.e,A.i,0,A.p),A.f,s,s,D.b73,s,s,s,s,D.a_Y,s,s,s),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,r,s,s,s,s,s,s,!1,A.a4)},
bGs(){var x,w,v,u,t,s,r=this,q=null,p=r.a.e,o=D.kx[r.d],n=y.p
o=B.E(B.x(B.a([D.fHc,A.b5,B.d(o.b,q,q,q,q,q,q,A.mA,q,q,q),A.ax,B.d(o.a,q,q,q,q,q,q,D.fmM,q,q,q),A.bH,B.d(o.c,q,q,q,q,q,q,D.fBD,q,q,q),A.an,B.aA(q,B.q(q,D.h_u,A.f,q,q,D.b7z,q,q,q,q,D.bAg,q,q,q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.ePl(r),q,q,q,q,q,q,!1,A.a4),A.b5],n),A.E,q,A.e,A.i,0,A.p),4)
x=B.q(q,q,A.f,D.bps,q,q,q,q,q,A.f3,q,q,q,0.6)
w=B.a([],n)
for(v=0;v<8;++v){u=D.kx[v]
t=r.d===v
s=t?D.u1:D.afZ
t=t?12:10.5
w.push(B.aA(q,new B.D(A.wd,B.d(u.a,q,q,q,q,q,q,new B.H(!0,s,q,"serif",q,q,t,A.k2,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q),q,q,q),q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.ePm(r,v),q,q,q,q,q,q,!1,A.a4))}return B.aA(q,B.q(q,B.A(B.a([o,x,B.E(B.cl(w,q,q,q,q,q,A.ah,!1),3)],n),A.m,q,A.e,A.i,0,q,q),A.f,D.bvn,q,q,q,q,q,q,A.GR,q,q,q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,p,q,q,q,q,q,q,!1,A.a4)}}
C.js.prototype={}
var z=a.updateTypes(["~(uK,av,F)","~()","Xp(Z,bw<F>,bw<F>)","~(G)"])
C.fBy.prototype={
$1(d){var x=null,w=B.fq(x,A.cs,x,1,x,B.cP(x,x,x,x,x,x,x,x,x,B.l(x,x,this.b,x,x,x,x,x,x,x,x,d,x,x,A.u,x,x,!0,x,x,x,x,x,x,x,x),this.a),A.a5,A.bX,x,A.dz,A.bY)
w.e5()
return w},
$S:265}
C.fBs.prototype={
$1(d){return Math.min(this.a*0.085,this.b*0.44/(d.length*0.62))},
$S:465}
C.fVk.prototype={
$1(d){var x=this.b,w=B.ks(this.a,x,d)
w.toString
x=B.ks(x,this.c,d)
x.toString
x=B.ks(w,x,d)
x.toString
return x},
$S:2001}
C.fnE.prototype={
$2(d,e){return A.j.E((this.a-d)/e,0,1)},
$S:79}
C.fnB.prototype={
$1(d){return A.dC.aA(0,d)},
$S:5}
C.fnD.prototype={
$2(d,e){var x=this.b
return new B.o(this.a.a+d*x,this.c.b-e*x)},
$S:421}
C.fnC.prototype={
$5(d,e,f,g,h){var x,w,v,u=this.a.$2(h,0.5)
if(u<=0)return
x=this.b
w=x.c
J.bo(w.save())
w.translate(f.a,f.b)
x.bU(0,A.j.E(A.l9.aA(0,u),0.01,1.3))
v=this.c
E.fVl(x,A.I,g,d,v,v>4.5?0.6:0)
C.hDX(x,new B.o(0,g*1.42),g,e)
w.restore()},
$S:769}
C.fsk.prototype={
$1(d){var x=this,w=null,v=x.c?A.u:A.a8
v=B.fq(w,A.cs,w,1,w,B.cP(w,w,w,w,w,w,w,w,w,B.l(w,w,x.b,w,w,w,w,w,w,w,w,d,w,w,v,w,w,!0,w,x.d,w,w,w,w,w,w),x.a),A.a5,A.bX,w,A.dz,A.bY)
v.e5()
return v},
$S:265}
C.fq6.prototype={
$1(d){var x=this,w=null,v=x.c?A.u:A.V
v=B.fq(w,A.cs,w,1,w,B.cP(w,w,w,w,w,w,w,w,w,B.l(w,w,x.b,w,w,w,w,w,w,w,w,d,w,w,v,w,w,!0,w,x.d,w,w,w,w,w,w),x.a),A.a5,A.bX,w,A.dz,A.bY)
v.e5()
return v},
$S:265}
C.fBU.prototype={
$2(d,e){return A.j.E((this.a-d)/e,0,1)},
$S:79}
C.fBQ.prototype={
$1(d){return A.dC.aA(0,d)},
$S:5}
C.fBT.prototype={
$2(d,e){var x=this.b
return new B.o(this.a+d*x,e*x)},
$S:421}
C.fBR.prototype={
$5(d,e,f,g,h){var x,w,v,u=this,t=u.a.$2(h,0.6)
if(t<=0)return
x=u.b
w=x.c
J.bo(w.save())
w.translate(f.a,f.b)
x.bU(0,A.j.E(A.l9.aA(0,t),0.01,1.3))
v=u.c
E.fVl(x,A.I,g,d,v,u.d>9.5?0.5+0.3*Math.sin(v*3+d):0)
C.hDX(x,new B.o(0,g*1.42),g,e)
w.restore()},
$S:769}
C.fBS.prototype={
$3(d,e,f){var x,w,v,u,t=this.a.$2(f,0.5)
if(t<=0)return
x=A.j.E(A.l9.aA(0,t),0.01,1.3)*(1+0.07*Math.sin(this.b*6))
w=this.c
v=e*x
$.Q()
u=B.K()
u.r=A.bD.gp(0)
w.N(d,v,u)
u=B.K()
u.b=A.a9
u.c=2
u.r=A.c.gp(0)
w.N(d,v,u)
C.aQn(w,"\u2665",d.aJ(0,new B.o(e*0.5*x,e*0.62*x)),e*1.3*x,A.c,A.bn,0,null)},
$S:437}
C.fBV.prototype={
$2(d,e){var x,w,v=this.a,u=v.a
v=v.c-u
u+=v*0.08
x=this.b
w=x*d
return new B.a1(u,w,u+v*0.84,w+x*e)},
$S:2003}
C.h2z.prototype={
$3(d,e,f){var x=this
return new C.Xp(x.d,x.e,x.a,x.c,x.b,null)},
$C:"$3",
$R:3,
$S:z+2}
C.h2A.prototype={
$4(d,e,f,g){var x=y.t
return new B.d0(e,!1,B.it(A.A,g,null,new B.bg(B.cJ(A.cw,e,null),new B.br(0.85,1,x),x.k("bg<bO.T>"))),null)},
$C:"$4",
$R:4,
$S:34}
C.ePy.prototype={
$0(){var x,w=this.a
w.e=A.o.F(w.gAq()+1,10)
x=w.gQc().y
x=x==null?null:A.o.aq(x.a,1000)
w.x=x==null?1:x
w.as=w.gazJ()},
$S:0}
C.ePx.prototype={
$0(){var x=this.a
if(x.c!=null&&!x.r)x.m(new C.ePw(x))},
$S:0}
C.ePw.prototype={
$0(){return this.a.y=!1},
$S:0}
C.ePv.prototype={
$0(){var x,w=this.a
w.f=-1
w.e=A.o.F(w.gAq()+this.b,10)
if(w.gAq()<0)w.e=w.gAq()+10
x=w.gQc().y
x=x==null?null:A.o.aq(x.a,1000)
w.x=x==null?1:x
w.as=w.gazJ()
w.asB()
w.ake()},
$S:0}
C.ePz.prototype={
$0(){var x=this.a
x.f=this.b
x.r=!1
x.ake()},
$S:0}
C.ePI.prototype={
$0(){var x=this.a
return x.m(x.gcG7())},
$S:0}
C.ePH.prototype={
$2(d,e){var x,w=null,v=this.a,u=v.gQc().y,t=u==null?w:A.o.aq(u.a,1000),s=(t==null?0:t)/1000,r=v.x===0&&v.a.f?s:99
u=v.gAq()
x=r<3?s:Math.max(0,s-v.gaR5())
return B.b4(w,w,w,new C.bwX(u,v.f,x,r,w),A.fL)},
$S:63}
C.ePG.prototype={
$5$color$on(d,e,f,g,h){var x=null,w=h?g.j(0.28):A.c.j(0.08),v=B.m(14),u=B.L(h?g:A.aT,A.r,1)
return B.aA(x,B.q(x,B.x(B.a([B.X(d,g,x,x,x,20),A.vv,B.d(e,x,x,x,x,x,x,B.l(x,x,g,x,x,x,x,x,x,x,x,9.5,x,x,A.H,x,x,!0,x,x,x,x,x,x,x,x),x,x,x)],y.p),A.m,x,A.e,A.Q,0,A.p),A.f,x,x,new B.p(w,x,u,v,x,x,A.n),x,x,x,A.jo,A.kT,x,x,56),A.y,!1,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,f,x,x,x,x,x,x,!1,A.a4)},
$3(d,e,f){return this.$5$color$on(d,e,f,A.c,!1)},
$4$color(d,e,f,g){return this.$5$color$on(d,e,f,g,!1)},
$S:2004}
C.ePB.prototype={
$0(){return this.a.ayZ(-1)},
$S:0}
C.ePC.prototype={
$0(){return this.a.ayZ(1)},
$S:0}
C.ePD.prototype={
$0(){return this.a.ayZ(0)},
$S:0}
C.ePE.prototype={
$0(){var x=this.a
return x.m(new C.ePA(x))},
$S:0}
C.ePA.prototype={
$0(){var x=this.a
x.r=!x.r
x.ake()},
$S:0}
C.ePF.prototype={
$0(){return this.a.b2X(0)},
$S:0}
C.ePu.prototype={
$0(){var x=this.a
return x.m(new C.ePt(x))},
$S:0}
C.ePt.prototype={
$0(){return this.a.r=!1},
$S:0}
C.fC3.prototype={
$1(d){var x=null,w=B.fq(x,A.cs,x,1,x,B.cP(x,x,x,x,x,x,x,x,x,B.l(x,x,this.b,x,x,x,x,x,x,x,x,d,x,x,A.u,x,x,!0,x,0.4,x,x,x,x,x,x),this.a),A.a5,A.bX,x,A.dz,A.bY)
w.e5()
return w},
$S:265}
C.ePr.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.ePs.prototype={
$0(){return this.a.b11(this.b)},
$S:0}
C.ePo.prototype={
$2(d,e){return A.bm},
$S:36}
C.ePn.prototype={
$2(d,e){var x=null,w=this.a,v=w.d===e?1.1:1
v=B.a([B.vY(w.b12(e,18,46,6,A.c,80),A.b3,A.fU,v)],y.p)
if(w.d===e)v.push(new B.D(A.uq,B.d(D.kx[e].a,x,x,x,x,x,x,D.fzO,x,x,x),x))
return B.x(v,A.m,x,A.e,A.Q,0,A.p)},
$S:719}
C.ePp.prototype={
$0(){var x=this.a
return x.a.a6B(0,x.d)},
$S:0}
C.ePq.prototype={
$2(d,e){return this.a.az_(e,15,1/0,!0,8,A.c,1/0)},
$S:41}
C.ePl.prototype={
$0(){var x=this.a
return x.a.a6B(0,x.d)},
$S:0}
C.ePm.prototype={
$0(){return this.a.b11(this.b)},
$S:0}
C.fC4.prototype={
$1(d){var x=null,w=this.c?A.u:A.a8
w=B.fq(x,A.cs,x,1,x,B.cP(x,x,x,x,x,x,x,x,x,B.l(x,x,this.b,x,x,x,x,x,x,x,x,d,x,x,w,x,x,!0,x,0.4,x,x,x,x,x,x),this.a),A.a5,A.bX,x,A.dz,A.bY)
w.e5()
return w},
$S:265}
C.foH.prototype={
$0(){var x=this.a,w=this.b,v=this.c
v=v.d-v.b
C.iI(x,B.bs(w,v*0.2,v*0.14),4,A.bl)
C.iI(x,B.bs(w,v*0.13,v*0.09),3,A.nm)},
$S:0}
C.fpd.prototype={
$0(){var x,w,v,u,t,s=this.a,r=this.b,q=this.c,p=q.c-q.a
q=(q.d-q.b)*0.12
C.iI(s,B.bs(r,q,p*0.16),6,D.ZY)
for(x=r.a,r=r.b+0,w=0;w<3;++w){v=D.cAA[w]
u=v.b
v=B.bs(new B.o(x+v.a*p,r),q,4)
$.Q()
t=new B.ao(A.O,A.M,A.R,A.T,A.P)
t.r=u.gp(u)
s.ar(v,t)}},
$S:0}
C.fpe.prototype={
$0(){var x=this.a,w=this.b,v=this.c
v=v.d-v.b
C.lE(x,w,v*0.13,A.ay)
C.lE(x,w.a2(0,new B.o(-3,-4)),v*0.04,A.c.j(0.7))},
$S:0}
C.fpf.prototype={
$0(){var x=this.a,w=this.b,v=this.c
v=v.d-v.b
C.iI(x,B.bs(w,v*0.26,v*0.16),5,A.bl)
v=B.bs(w,v*0.2,4)
$.Q()
w=B.K()
w.r=A.c.gp(0)
x.ar(v,w)},
$S:0}
C.fmj.prototype={
$0(){return C.fno(this.a,this.b,this.c*0.15,A.bT)},
$S:0}
C.fmk.prototype={
$0(){var x,w,v=this.a,u=this.b,t=this.c
C.lE(v,u,t*0.045,A.bg)
x=new B.aF($.Q().r,A.ai,null,null,B.a([],y.v))
w=u.a
u=u.b
x.D(new B.aZ(w-t*0.02,u))
x.D(new B.aq(w-t*0.005,u+t*0.015))
x.D(new B.aq(w+t*0.022,u-t*0.014))
t=B.K()
t.b=A.a9
t.c=3
t.r=A.c.gp(0)
v.af(x,t)},
$S:0}
C.fmg.prototype={
$4(d,e,f,g){var x=this.a
C.z0(x,d.gbw(),this.b,f,new C.fmh(x,d,this.c,e,g))},
$S:2005}
C.fmh.prototype={
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
C.fml.prototype={
$0(){var x=this,w=x.d?A.bi:A.am
return C.hdl(x.a,x.b,x.c*0.065,w)},
$S:0}
C.fmi.prototype={
$0(){var x=this
return C.fno(x.a,x.b,x.c*0.075,D.dhw[x.d])},
$S:0}
C.fB7.prototype={
$0(){var x=this.a,w=this.b,v=this.c,u=v*0.16
C.iI(x,B.bs(w,u,v*0.2),6,D.beB)
v=B.bs(w,u,v*0.03)
$.Q()
u=B.K()
u.r=A.cZ.gp(0)
x.ar(v,u)},
$S:0}
C.fB8.prototype={
$0(){var x,w,v,u=this.a,t=this.b,s=this.c
C.lE(u,t.a2(0,new B.o(s*0.11,-s*0.07)),s*0.045,A.bg)
x=new B.aF($.Q().r,A.ai,null,null,B.a([],y.v))
w=t.a
v=s*0.09
t=t.b
x.D(new B.aZ(w+v,t-s*0.07))
x.D(new B.aq(w+s*0.105,t-s*0.055))
x.D(new B.aq(w+s*0.135,t-v))
v=B.K()
v.b=A.a9
v.c=3
v.r=A.c.gp(0)
u.af(x,v)},
$S:0}
C.fo_.prototype={
$0(){return C.aPf(this.a,this.b,0,A.cG)},
$S:0}
C.fo0.prototype={
$0(){var x=this.b
return C.aPf(this.a,B.bs(x.gbw().a2(0,new B.o(0,-this.c.b*0.01)),(x.d-x.b)*0.9,(x.c-x.a)*0.9),1,A.cG)},
$S:0}
C.fBk.prototype={
$0(){var x=this,w=x.a,v=x.b,u=x.c
C.iI(w,B.bs(v,u,u),u*0.28,D.cWd[x.d])
C.lE(w,v,u*0.22,A.c.j(0.9))},
$S:0};(function aliases(){var x=C.aO3.prototype
x.bzU=x.t})();(function installTearOffs(){var x=a._instance_0u,w=a._instance_1u,v=a.installStaticTearOff
var u
x(u=C.aGc.prototype,"gc89","c8a",1)
x(u,"gb10","cbC",1)
x(u,"gcG7","ake",1)
w(u,"gchS","b2X",3)
v(C,"ipm",3,null,["$3"],["i5H"],0,0)
v(C,"ipo",3,null,["$3"],["i5J"],0,0)
v(C,"ipl",3,null,["$3"],["i5G"],0,0)
v(C,"ipn",3,null,["$3"],["i5I"],0,0)
v(C,"ipq",3,null,["$3"],["i6q"],0,0)
v(C,"ipp",3,null,["$3"],["i6p"],0,0)
v(C,"ips",3,null,["$3"],["i6s"],0,0)
v(C,"ipr",3,null,["$3"],["i6r"],0,0)
v(C,"ipf",3,null,["$3"],["i46"],0,0)
v(C,"ipd",3,null,["$3"],["i44"],0,0)
v(C,"ipg",3,null,["$3"],["i47"],0,0)
v(C,"ipe",3,null,["$3"],["i45"],0,0)
v(C,"ipt",3,null,["$3"],["i78"],0,0)
v(C,"ipu",3,null,["$3"],["i79"],0,0)
v(C,"ipv",3,null,["$3"],["i7a"],0,0)
v(C,"ipw",3,null,["$3"],["i7b"],0,0)
v(C,"ipz",3,null,["$3"],["idR"],0,0)
v(C,"ipA",3,null,["$3"],["idY"],0,0)
v(C,"ipx",3,null,["$3"],["idP"],0,0)
v(C,"ipy",3,null,["$3"],["idQ"],0,0)
v(C,"ipi",3,null,["$3"],["i57"],0,0)
v(C,"iph",3,null,["$3"],["i56"],0,0)
v(C,"ipj",3,null,["$3"],["i58"],0,0)
v(C,"ipk",3,null,["$3"],["i59"],0,0)
v(C,"ipG",3,null,["$3"],["ieS"],0,0)
v(C,"ipF",3,null,["$3"],["ieR"],0,0)
v(C,"ipI",3,null,["$3"],["ieU"],0,0)
v(C,"ipH",3,null,["$3"],["ieT"],0,0)
v(C,"ipD",3,null,["$3"],["ie4"],0,0)
v(C,"ipC",3,null,["$3"],["ie3"],0,0)
v(C,"ipB",3,null,["$3"],["ie2"],0,0)
v(C,"ipE",3,null,["$3"],["ie5"],0,0)})();(function inheritance(){var x=a.mixinHard,w=a.inheritMany,v=a.inherit
w(B.ht,[C.fBy,C.fBs,C.fVk,C.fnB,C.fnC,C.fsk,C.fq6,C.fBQ,C.fBR,C.fBS,C.h2z,C.h2A,C.ePG,C.fC3,C.fC4,C.fmg])
w(B.jw,[C.fnE,C.fnD,C.fBU,C.fBT,C.fBV,C.ePH,C.ePo,C.ePn,C.ePq])
w(B.aE,[C.wU,C.wn,C.yg,C.js])
w(B.af,[C.Xp,C.atm])
w(B.ah,[C.aO3,C.bmU])
v(C.aGc,C.aO3)
w(B.iJ,[C.ePy,C.ePx,C.ePw,C.ePv,C.ePz,C.ePI,C.ePB,C.ePC,C.ePD,C.ePE,C.ePA,C.ePF,C.ePu,C.ePt,C.ePr,C.ePs,C.ePp,C.ePl,C.ePm,C.foH,C.fpd,C.fpe,C.fpf,C.fmj,C.fmk,C.fmh,C.fml,C.fmi,C.fB7,C.fB8,C.fo_,C.fo0,C.fBk])
v(C.bwX,B.mk)
x(C.aO3,B.cc)})()
B.iT(b.typeUniverse,JSON.parse('{"Xp":{"af":[],"v":[]},"aGc":{"ah":["Xp"]},"bwX":{"aC":[]},"atm":{"af":[],"v":[]},"bmU":{"ah":["atm"]},"Oa":{"af":[],"v":[]}}'))
var y=(function rtii(){var x=B.as
return{L:x("O<SR>"),V:x("O<ac>"),O:x("O<u>"),v:x("O<fT>"),C:x("O<+(F,F,F)>"),s:x("O<n>"),p:x("O<v>"),f:x("O<js>"),n:x("O<F>"),T:x("ai<u>"),m:x("ai<js>"),t:x("br<F>"),S:x("G")}})();(function constants(){var x=a.makeConstList
D.agf=new B.u(1,0.0196078431372549,0.03137254901960784,0.058823529411764705,A.q)
D.bts=new B.u(1,0.043137254901960784,0.10196078431372549,0.2,A.q)
D.dkP=x([D.agf,D.bts],y.O)
D.c8z=new B.a9(A.b7,A.b9,A.x,D.dkP,null,null)
D.b71=new B.p(null,null,null,null,null,D.c8z,A.n)
D.br5=new B.u(1,0.42745098039215684,0.47843137254901963,0.5764705882352941,A.q)
D.bfE=new B.u(1,0.16862745098039217,0.1803921568627451,0.26666666666666666,A.q)
D.bgQ=new B.u(1,0.4823529411764706,0.29411764705882354,0.41568627450980394,A.q)
D.dxl=x([D.br5,D.bfE,D.bgQ],y.O)
D.c6W=new B.a9(A.aA,A.aF,A.x,D.dxl,null,null)
D.b73=new B.p(null,null,null,null,null,D.c6W,A.n)
D.b2f=new B.d9(0.5,-0.6)
D.buN=new B.u(1,0.22745098039215686,0.054901960784313725,0.10980392156862745,A.q)
D.dfN=x([D.buN,A.ep],y.O)
D.eyX=new B.c_(D.b2f,1.3,A.x,null,0,D.dfN,null,null)
D.b7c=new B.p(null,null,null,null,null,D.eyX,A.n)
D.u1=new B.u(1,0.8392156862745098,0.7176470588235294,0.4823529411764706,A.q)
D.b5i=new B.ay(D.u1,1,A.r,-1)
D.b5v=new B.bF(A.a1,A.a1,D.b5i,A.a1)
D.b7z=new B.p(null,null,D.b5v,null,null,null,A.n)
D.beB=new B.u(1,0.8392156862745098,0.6352941176470588,0.3568627450980392,A.q)
D.aft=new B.u(0.9490196078431372,0.06666666666666667,0.07450980392156863,0.09411764705882353,A.q)
D.bf9=new B.u(1,0.16470588235294117,0.16470588235294117,0.17647058823529413,A.q)
D.Y5=new B.u(1,0.16862745098039217,0.1843137254901961,0.21176470588235294,A.q)
D.bfd=new B.u(1,0.00784313725490196,0.01568627450980392,0.03529411764705882,A.q)
D.afZ=new B.u(1,0.6588235294117647,0.6235294117647059,0.5647058823529412,A.q)
D.Mi=new B.u(1,0.24705882352941178,0.5607843137254902,0.30196078431372547,A.q)
D.FD=new B.u(1,0.7215686274509804,0.6980392156862745,0.6549019607843137,A.q)
D.agH=new B.u(1,0.8784313725490196,0.6745098039215687,0.4117647058823529,A.q)
D.bjA=new B.u(1,0.8509803921568627,0.6549019607843137,0.3764705882352941,A.q)
D.Mz=new B.u(1,1,0.23137254901960785,0.12156862745098039,A.q)
D.ah2=new B.u(1,0.00784313725490196,0.011764705882352941,0.0392156862745098,A.q)
D.y7=new B.u(1,0.06666666666666667,0.0784313725490196,0.09411764705882353,A.q)
D.bni=new B.u(1,0.9568627450980393,0.8509803921568627,0.6588235294117647,A.q)
D.yb=new B.u(1,0.054901960784313725,0.07058823529411765,0.09411764705882353,A.q)
D.aii=new B.u(1,0.24705882352941178,0.16470588235294117,0.0784313725490196,A.q)
D.ait=new B.u(1,0.4196078431372549,0.24705882352941178,0.11372549019607843,A.q)
D.bps=new B.u(1,0.2901960784313726,0.26666666666666666,0.23529411764705882,A.q)
D.iE=new B.u(1,0.043137254901960784,0.12156862745098039,0.29411764705882354,A.q)
D.bq_=new B.u(1,0.7529411764705882,0.5411764705882353,0.2901960784313726,A.q)
D.mQ=new B.u(1,0.09019607843137255,0.09019607843137255,0.10980392156862745,A.q)
D.brG=new B.u(1,0.1843137254901961,0.43529411764705883,0.23137254901960785,A.q)
D.brK=new B.u(1,0.08627450980392157,0.09411764705882353,0.10980392156862745,A.q)
D.ZU=new B.u(1,1,0.9529411764705882,0.6274509803921569,A.q)
D.ZY=new B.u(1,0.8392156862745098,0.7254901960784313,0.5490196078431373,A.q)
D.bvn=new B.u(1,0.10196078431372549,0.09019607843137255,0.0784313725490196,A.q)
D.aWn=new B.H(!0,A.aS,null,null,null,null,10.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bAg=new B.R(0,0,0,1)
D.bB7=new B.R(10,10,10,0)
D.a_Y=new B.R(10,6,10,8)
D.alw=new B.R(14,10,10,10)
D.P8=new B.a0(62970,"MaterialIcons",!1)
D.aq7=new B.a0(983316,"MaterialIcons",!1)
D.pt=new B.a0(983617,"MaterialIcons",!1)
D.bWm=new B.ae(A.CW,13,A.ab,null,null,null)
D.c_B=new B.ae(A.eS,13,A.ab,null,null,null)
D.bRZ=new B.a0(983768,"MaterialIcons",!1)
D.c0d=new B.ae(D.bRZ,13,A.c,null,null,null)
D.c5R=new B.a9(A.b7,A.b9,A.x,I.RR,null,null)
D.djs=x([A.dA,A.S,A.FW],y.O)
D.c6V=new B.a9(A.b7,A.b9,A.x,D.djs,null,null)
D.Mo=new B.u(1,0.11764705882352941,0.30980392156862746,0.6392156862745098,A.q)
D.cNC=x([D.iE,D.Mo,A.av,A.bN],y.O)
D.dov=x([0,0.42,0.8,1],y.n)
D.c6Y=new B.a9(A.b7,A.b9,A.x,D.cNC,D.dov,null)
D.afw=new B.u(1,0.12156862745098039,0.1411764705882353,0.18823529411764706,A.q)
D.c9w=x(["$12","$8","$25"],y.s)
D.cag=x(["Add every person","Link mums, dads, kids","Keep it for ever"],y.s)
D.aub=x([A.cG,A.aE,A.dK,A.fp],y.O)
D.Us=new B.y(2,3)
D.Ut=new B.y(3,4)
D.cu3=x([A.lM,A.z7],B.as("O<a0>"))
D.cuG=x([A.c,A.bi,A.ba,A.b4,A.nt,A.ay,A.d5],y.O)
D.eTm=new B.y(-0.04,A.bC)
D.eYX=new B.y(0,A.aE)
D.eFZ=new B.y(0.04,A.av)
D.cAA=x([D.eTm,D.eYX,D.eFZ],B.as("O<+(F,u)>"))
D.efC=new C.yg("NGMY Tree Story","A family grows, one branch at a time")
D.efB=new C.yg("NGMY Store","Open the doors to something new")
D.efE=new C.yg("NGMY Construction Lab","Build, wire and finish a real house")
D.efx=new C.yg("NGMY Electronics Lab","Build circuits that really light up")
D.efA=new C.yg("NGMY Advisors","Say hi to a friendly advisor")
D.efy=new C.yg("Spark Adventure","Follow Sparky round a circuit board")
D.efF=new C.yg("NGMY Game Center","Play games and win coins")
D.efz=new C.yg("NGMY Business Cards","Make a card people remember")
D.efw=new C.yg("NGMY Vault","Keep what matters safe")
D.efD=new C.yg("NGMY Studios","Make music, art, titles and more")
D.Rj=x([D.efC,D.efB,D.efE,D.efx,D.efA,D.efy,D.efF,D.efz,D.efw,D.efD],B.as("O<yg>"))
D.hzU=new C.js("NGMY Game Center","Lots of games in one place",C.ipt())
D.hAg=new C.js("Play","Tap, jump and catch the coins",C.ipu())
D.hzV=new C.js("Beat the score","Climb the board every day",C.ipv())
D.hA3=new C.js("Win coins","Win, celebrate, play again",C.ipw())
D.cIb=x([D.hzU,D.hAg,D.hzV,D.hA3],y.f)
D.cL5=x([A.bT,A.aH,A.dy,A.b4,A.cF],y.O)
D.f2n=new B.b5(-0.2,0.46,0.12)
D.f_v=new B.b5(0.2,0.46,0.12)
D.f0k=new B.b5(0,0.52,0.15)
D.eZz=new B.b5(0,0.7,0.1)
D.cOk=x([D.f2n,D.f_v,D.f0k,D.eZz],y.C)
D.cWd=x([A.aH,A.b4,A.cF,A.bT,A.bi,A.br],y.O)
D.hA6=new C.js("NGMY Studios","A studio for every idea",C.ipD())
D.hAb=new C.js("Paint with light","Colours that glow",C.ipC())
D.hA9=new C.js("Make music","Beats, notes and tunes",C.ipB())
D.hzT=new C.js("Add your title","Moving words for any picture",C.ipE())
D.cXc=x([D.hA6,D.hAb,D.hA9,D.hzT],y.f)
D.d1I=x([A.cZ,A.hE],y.O)
D.d1M=x([A.cG,A.d6],y.O)
D.hAf=new C.js("NGMY Business Cards","Design a card in seconds",C.ipi())
D.hA2=new C.js("Make it yours","Pick your colours and your look",C.iph())
D.hzS=new C.js("Share it","One tap and it is on their phone",C.ipj())
D.hzR=new C.js("Be remembered","Cards people keep",C.ipk())
D.d3K=x([D.hAf,D.hA2,D.hzS,D.hzR],y.f)
D.eGE=new B.y("Chairs",120)
D.eGH=new B.y("Cloth",80)
D.eH0=new B.y("Delivery",25)
D.aA9=x([D.eGE,D.eGH,D.eH0],B.as("O<+(n,G)>"))
D.d98=x([A.ay,A.av,A.bi,A.b4,A.aH,A.br],y.O)
D.d9u=x([A.aH,A.b4,A.bi,A.cF,A.bT,A.br,A.aH],y.O)
D.d9z=x([A.cX,A.eV],y.O)
D.RW=x([A.ay,A.d5,A.av],y.O)
D.dbc=x([A.aE,A.kJ],y.O)
D.dcA=x([A.jV,A.cy],y.O)
D.dH5=new C.wn("NGMY Ads","\ud83d\udce2","Every NGMY promotion, as cartoons",A.bT,-1)
D.dH0=new C.wn("Civic Registry","\ud83e\udeaa","Enroll your family in your community",A.d5,0)
D.dH6=new C.wn("Jobs","\ud83d\udcbc","Find work and get hired",A.av,1)
D.dHb=new C.wn("NGMY Store","\ud83d\udecd\ufe0f","African food and traditions",A.fp,2)
D.dHc=new C.wn("Kiswahili","\ud83d\udde3\ufe0f","Learn Swahili and English",A.bR,3)
D.dH9=new C.wn("Doc Scanner","\ud83d\udcc4","Scan, save and share",A.ch,4)
D.dH1=new C.wn("Invoices","\ud83e\uddfe","Professional invoices",A.bD,5)
D.dGZ=new C.wn("Calendar","\ud83d\udcc5","This month, today lit up",A.ay,-2)
D.kx=x([D.dH5,D.dH0,D.dH6,D.dHb,D.dHc,D.dH9,D.dH1,D.dGZ],B.as("O<wn>"))
D.deN=x([A.dX,A.ry],y.O)
D.dg6=x([A.aH,A.b4,A.bi,A.bT],y.O)
D.eO_=new B.y("Jambo! Habari yako?","Nzuri, asante!")
D.eH9=new B.y("Jina lako nani?","Jina langu ni Amina.")
D.eHT=new B.y("Karibu nyumbani!","Asante sana!")
D.eNZ=new B.y("Naenda shule leo.","I am going to school.")
D.eP7=new B.y("Ninapenda kujifunza!","I love to learn!")
D.eYF=new B.y("Maji, tafadhali.","Water, please.")
D.eLT=new B.y("Rafiki yangu mpendwa","My dear friend")
D.eQH=new B.y("Tuonane kesho!","See you tomorrow!")
D.eRF=new B.y("Pole sana, rafiki.","I am so sorry, friend.")
D.eNY=new B.y("Hongera! Umefaulu!","Congratulations! You passed!")
D.eJ8=new B.y("Mimi ni mwanafunzi.","I am a student.")
D.eDz=new B.y("Chakula kitamu sana!","The food is so delicious!")
D.eYd=new B.y("Safari njema!","Have a good trip!")
D.ezB=new B.y("Unaongea Kiswahili vizuri!","You speak Swahili well!")
D.aB6=x([D.eO_,D.eH9,D.eHT,D.eNZ,D.eP7,D.eYF,D.eLT,D.eQH,D.eRF,D.eNY,D.eJ8,D.eDz,D.eYd,D.ezB],B.as("O<+(n,n)>"))
D.f1c=new B.b5(-0.3,0.32,0.2)
D.eZI=new B.b5(-0.08,0.17,0.22)
D.eZJ=new B.b5(0.14,0.14,0.2)
D.f0s=new B.b5(0.34,0.3,0.2)
D.f2R=new B.b5(0,0.32,0.26)
D.f0a=new B.b5(-0.42,0.46,0.15)
D.f2M=new B.b5(0.42,0.46,0.15)
D.f1t=new B.b5(0,0.07,0.15)
D.aB7=x([D.f1c,D.eZI,D.eZJ,D.f0s,D.f2R,D.f0a,D.f2M,D.f1t],y.C)
D.hAd=new C.js("NGMY Construction Lab","Frame a room, stud by stud",C.ipm())
D.hA_=new C.js("Wire it","Pull the cable, set the box, no shocks",C.ipo())
D.hzX=new C.js("Hang the drywall","Screw it, tape it, mud it, sand it",C.ipl())
D.hzP=new C.js("Move in","Learn real trades, one room at a time",C.ipn())
D.dgU=x([D.hAd,D.hA_,D.hzX,D.hzP],y.f)
D.dhr=x([A.cn,A.bx,A.bT],y.O)
D.hrm=new C.wU("NGMY Civic Registry","Enroll your family. Stay counted and helped together.",A.d6,A.aH)
D.hrA=new C.wU("NGMY Jobs","Find work. Get hired. Get paid.",A.cZ,A.aV)
D.hrx=new C.wU("NGMY Store","African food and traditions. Support our Congolese and African community.",A.kr,A.bi)
D.hrs=new C.wU("Kiswahili School","Learn Swahili and English, step by step.",A.cG,A.mS)
D.hrp=new C.wU("Document Scanner","Scan, save and share your papers.",A.qi,A.ho)
D.hrn=new C.wU("Invoice Creator","Make professional invoices in minutes.",A.q4,A.o5)
D.hrj=new C.wU("Family Book and Tree","Write your family story. Grow your tree.",A.iZ,A.Ma)
D.hrl=new C.wU("NGMY Wallet","Save, send and earn coins.",A.u8,A.dy)
D.hro=new C.wU("Vault Games","Play, win and learn.",A.dJ,A.ba)
D.hry=new C.wU("Electronics Lab","Build real circuits and learn.",A.eX,A.b0)
D.hrt=new C.wU("NGMY Helper and Advisors","Friendly help, any time.",A.kJ,A.cF)
D.dhs=x([D.hrm,D.hrA,D.hrx,D.hrs,D.hrp,D.hrn,D.hrj,D.hrl,D.hro,D.hry,D.hrt],B.as("O<wU>"))
D.dhw=x([A.bT,A.aH,A.bi,A.b4,A.br,A.cF],y.O)
D.hA4=new C.js("NGMY Electronics Lab","Power goes round a loop",C.ipq())
D.hzQ=new C.js("Build it","Drop in resistors, LEDs and capacitors",C.ipp())
D.hzZ=new C.js("Run a TV","Real volts, real gadgets",C.ips())
D.hAa=new C.js("Measure it","Read the volts like a pro",C.ipr())
D.dhT=x([D.hA4,D.hzQ,D.hzZ,D.hAa],y.f)
D.hzO=new C.js("NGMY Vault","Lock away what matters",C.ipG())
D.hAc=new C.js("Dial it","Only you know the code",C.ipF())
D.hzW=new C.js("Store it","Photos, notes and documents",C.ipI())
D.hAh=new C.js("Stay safe","Private, protected, always yours",C.ipH())
D.diu=x([D.hzO,D.hAc,D.hzW,D.hAh],y.f)
D.hAe=new C.js("NGMY Store","Open the doors to something new",C.ipz())
D.hzN=new C.js("Find anything","Shop gadgets, books and more",C.ipA())
D.hzY=new C.js("Add to cart","Fill it up, pay your way",C.ipx())
D.hA8=new C.js("Delivered","Right to your door",C.ipy())
D.dkx=x([D.hAe,D.hzN,D.hzY,D.hA8],y.f)
D.dlT=x([A.eX,A.dx],y.O)
D.dnM=x([A.dJ,A.fn],y.O)
D.doe=x(["For you","Apps","Library"],y.s)
D.aC3=x([A.bC,A.bi,A.cX,A.as],y.O)
D.aC9=x([-16,16],y.n)
D.Sy=x([-22,22],y.n)
D.IE=x([-24,24],y.n)
D.a60=x([-5,5],y.n)
D.aCg=x([-8,8],y.n)
D.dsb=x([A.bN,A.eU,A.N7,A.ev],y.O)
D.dtY=x([A.aH,A.bi,A.bO],y.O)
D.b9x=new B.ac(0,A.G,A.aU,A.dv,14)
D.du4=x([D.b9x],y.V)
D.dwW=x(["M","T","W","T","F","S","S"],y.s)
D.dya=x([A.c,A.nm],y.O)
D.hA7=new C.js("NGMY Advisors","Meet a friendly, checked advisor",C.ipf())
D.hA1=new C.js("Ask anything","Chat and get an answer",C.ipd())
D.hA5=new C.js("Loved by members","Real help, five stars",C.ipg())
D.hA0=new C.js("Say hi today","Pick an advisor and start",C.ipe())
D.dzn=x([D.hA7,D.hA1,D.hA5,D.hA0],y.f)
D.blS=new B.u(1,1,1,0.5529411764705883,A.q)
D.bpt=new B.u(1,1,0.9176470588235294,0,A.q)
D.bfx=new B.u(1,1,0.8392156862745098,0,A.q)
D.dCh=new B.cZ([100,D.blS,200,A.Z2,400,D.bpt,700,D.bfx],B.as("cZ<G,u>"))
D.dEm=new B.EQ(D.dCh,1,1,1,0,A.q)
D.enf=new B.o(5,0)
D.c0I=new B.ae(A.eS,11,A.ab,null,null,null)
D.fxB=new B.H(!0,A.aS,null,null,null,null,9,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fVh=new B.B("Search",null,D.fxB,null,null,null,null,null,null,null,null,null)
D.cPk=x([D.c0I,A.r4,D.fVh],y.p)
D.f8a=new B.c7(A.aL,A.e,A.i,A.m,null,A.p,null,0,D.cPk,null)
D.ffh=new B.hG(3,5,5,1.35,null)
D.bu4=new B.u(1,0.9450980392156862,0.9098039215686274,0.8470588235294118,A.q)
D.fmM=new B.H(!0,D.bu4,null,"serif",null,null,15,A.k2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fuL=new B.H(!0,A.ab,null,null,null,null,9.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fvm=new B.H(!0,A.aS,null,null,null,null,9.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ab6=new B.H(!0,A.ab,null,null,null,null,12.5,null,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aW_=new B.H(!0,A.ab,null,null,null,null,10,A.V,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fzO=new B.H(!0,A.c,null,null,null,null,8.5,A.V,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fBk=new B.H(!0,A.ab,null,null,null,null,8.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fBD=new B.H(!0,D.afZ,null,null,null,null,8.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fs3=new B.H(!0,A.aD,null,null,null,null,9.5,A.V,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fDZ=new B.B("NGMY Apps",null,D.fs3,null,null,null,null,null,null,null,null,null)
D.fov=new B.H(!0,D.u1,null,null,null,null,8,A.a8,null,3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fHc=new B.B("BANG & OLUFSEN",null,D.fov,null,null,null,null,null,null,null,null,null)
D.fut=new B.H(!0,A.w,null,null,null,null,9,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fHF=new B.B("Open",null,D.fut,null,null,null,null,null,null,null,null,null)
D.fKU=new B.B("Home",null,D.aW_,null,null,null,null,null,null,null,null,null)
D.fLX=new B.B("SAMSUNG",null,A.aVG,null,null,null,null,null,null,null,null,null)
D.fSb=new B.B("LG",null,A.xk,null,null,null,null,null,null,null,null,null)
D.fYm=new B.B("tv",null,A.r8,null,null,null,null,null,null,null,null,null)
D.frY=new B.H(!0,D.u1,null,null,null,null,8.5,null,null,2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h_u=new B.B("OPEN",null,D.frY,null,null,null,null,null,null,null,null,null)})();(function staticFields(){$.i43=function(){var x=B.as("O<aE>")
return B.a([B.a([D.d1I,D.dgU],x),B.a([D.dlT,D.dhT],x),B.a([D.dbc,D.dzn],x),B.a([D.d9z,D.cIb],x),B.a([N.aCP,D.diu],x),B.a([D.dcA,D.cXc],x),B.a([D.d1M,D.d3K],x),B.a([D.deN,D.dkx],x)],B.as("O<ai<aE>>"))}()})()};
(a=>{a["tEype2im4hkGK0v29pZOZa0eHck="]=a.current})($__dart_deferred_initializers__);