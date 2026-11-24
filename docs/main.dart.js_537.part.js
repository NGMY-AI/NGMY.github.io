((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,A,O,P,L,G,E,M,Q,I,R,S,T,H,U,V,W,X,Y,K,D={
hYU(d,e,f,g,h){var w,v,u,t,s=null,r=e.length
if(A.o.F(r,2)!==0)throw B.Y(B.dK('"positions" length must be even.',s))
w=f.length
if(w*2!==r)throw B.Y(B.dK('"positions" and "colors" lengths must match.',s))
if(!A.pa.gar(e)){$.T()
v=J.uU(A.ig.gaS(f),f.byteOffset,w)
r=$.hUC()[d.a]
w=$.ex.cq()
u=v
t=new B.aW8(B.jJ(w,"MakeVertices",[r,e,null,u,null]))}else t=s
return D.hYT(t)},
hYT(d){var w=new D.bT5(d)
w.bDg(d)
return w},
bT5:function bT5(d){this.a=d
this.b=$
this.c=!1},
bT6:function bT6(){},
icG(d,e,f){return D.hYU(d,e,f,null,null)},
cHa:function cHa(d,e){this.a=d
this.b=e},
fKo(d,e,f,g,h,i){var w,v,u,t=null
if(h==null){w=A.i.fO(e*2)
v=A.i.fO(g*4)
u=B.l(t,t,D.ajt(f),t,t,t,t,t,"Roboto",t,t,w/2,t,t,i,t,1.12,!0,t,v/4,t,t,t,t,t,t)
return D.a4_(d,u,A.b8,t,1,1/0)}$.T()
w=B.L()
w.san(h)
w=B.d_(t,t,t,t,t,t,t,t,t,B.l(t,t,t,t,t,t,t,t,"Roboto",t,t,e,t,t,i,w,1.12,!0,t,g,t,t,t,t,t,t),d)
w=B.h2(t,A.cL,t,1,t,w,A.a7,A.cf,t,A.e5,A.cg)
w.nA(1/0)
return w},
ms(d,e,f,g,h,i,j,k,l,m){var w,v,u,t
if(e.length===0||g<1)return 0
w=new D.fKb(j,f,i,l)
v=D.fKo(e,g,h,k,w.$1(g),m)
u=v.b.c
if(u>l&&u>0){t=g*l/u
v=D.fKo(e,t,h,k*l/u,w.$1(t),m)}v.a4(d,new B.r(f.a-v.b.c*i,f.b))
w=v.b.a.c
return w.gb8(w)},
hJ6(d,e,f,g,h,i,j,k,l){var w,v,u=null,t=A.i.fO(g*2)
t=B.l(u,u,D.ajt(h),u,u,u,u,u,"Roboto",u,u,t/2,u,u,l,u,1.25,!0,u,u,u,u,u,u,u,u)
w=j===0
v=D.a4_(e,t,w?A.b8:A.K,"\u2026",k,i)
t=f.a
t=w?t:t-i/2
v.a4(d,new B.r(t,f.b))
t=v.b.a.c
return t.gb8(t)},
Hi(d,e,f,g,h){var w,v,u,t=null
if(g<1)return
w=B.lx(e.a)
v=A.i.fO(g*2)
u=D.a4_(w,B.l(t,t,D.ajt(h),t,t,t,t,t,e.b,t,t,v/2,t,t,t,t,1,!0,t,t,t,t,t,t,t,t),A.b8,t,1,1/0)
v=u.b
w=v.c
v=v.a.c
u.a4(d,f.aI(0,new B.r(w/2,v.gb8(v)/2)))},
ime(d,e){var w=A.i.a5(d,e).split("."),v=B.o4(w[0],B.ag("\\B(?=(\\d{3})+(?!\\d))",!0,!1,!1,!1),new D.fE_(),null)
return w.length>1?v+"."+w[1]:v},
bFk(d,e,f,g){var w,v
if(e<=0)return
w=d.c
J.bs(w.save())
v=f.d-f.b
w.clipRect(B.hQ(f.cs(v*0.08)),$.lD()[1],!0)
w.translate(0,(1-A.co.aA(0,A.i.D(e,0,1)))*v*1.05)
g.$0()
w.restore()},
ipM(a0,a1,a2,a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=a1.a,j=a1.b,i=0+k,h=new B.a4(0,0,i,0+j),g=$.T(),f=B.L(),e=a2.d,d=B.ap(e,A.v,0.05)
d.toString
w=B.ap(e,A.v,0.55)
w.toString
v=x.O
f.san(new B.bT(C.b5j,1.25,A.x,l,0,B.a([d,w,C.bnK],v),A.vI,l).az(0,h))
a0.aE(h,f)
u=Math.sin(a3*0.35)*k*0.04
t=new B.aH(g.r,A.aj,l,l,B.a([],x.v))
t.E(new B.aZ(k*0.52+u,0))
t.E(new B.aq(k*0.7+u,0))
t.E(new B.aq(k*0.98,j))
t.E(new B.aq(k*0.34,j))
t.E(new B.bA())
g=B.L()
g.san(new B.a8(A.aX,A.b1,A.x,B.a([A.c.j(0.1),A.c.j(0)],v),l,l).az(0,h))
a0.af(t,g)
s=j*0.8
g=s+(j-s)
f=B.L()
f.san(new B.a8(A.aX,A.b1,A.x,B.a([B.ap(e,A.v,0.6).j(0.85),A.v],v),l,l).az(0,new B.a4(0,s,i,g)))
a0.aE(new B.a4(0,s,i,g),f)
f=s-1
g=B.L()
e=a2.e
g.san(new B.a8(A.a5,A.a9,A.x,B.a([A.L,e.j(0.55),A.L],v),l,l).az(0,new B.a4(0,s,i,s+2)))
a0.aE(new B.a4(0,f,i,f+2),g)
r=a1.gdl()>=300
q=new B.e1()
q.cT(a4*7+3)
for(i=a3*1.3,g=a3*k*0.012,f=k*1.1,d=k*0.05,p=0;p<9;++p){w=A.i.F(q.ai()*k+g*(0.5+q.ai()),f)
v=q.ai()
o=j*(0.025+q.ai()*0.05)
n=(p&1)===0?e:A.c
m=new B.as(A.T,A.Q,A.W,A.X,A.V)
m.r=n.j(0.06+0.08*(0.5+0.5*Math.sin(i+p))).gp(0)
if(r)m.y=new B.h1(A.H,o*0.5)
a0.O(new B.r(w-d,v*j*0.72),o,m)}},
hH_(d,e,f,g,h,i){var w
$.T()
w=B.L()
w.r=A.v.j(h).gp(0)
if(i)w.y=new B.h1(A.H,g*0.6)
d.c1(B.bY(e,g,f),w)},
hn0(d,e,f,g){var w=B.dz(),v=w.a
v.$flags&2&&B.ak(v)
v[11]=1/(d*2.6)
w.fI(e)
w.jZ(f)
w.ei(0,0,g,1)
return w},
in9(d,e,f,a0,a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=f*0.49,i=j*0.17,h=B.by(B.bY(A.J,f,j),new B.aP(i,i)),g=j*0.085
$.T()
w=B.L()
i=h.a
v=h.b
u=h.c
t=h.d
w.san(C.cc4.az(0,new B.a4(i,v,u,t)))
for(s=d.c,r=e.a,q=e.b,p=6;p>=1;--p){J.bs(s.save())
s.translate(r,q)
o=D.hn0(f,a0,a1,g*p/6)
s.concat(B.bIx(B.E2(o.a)))
d.aq(h,w)
s.restore()}J.bs(s.save())
s.translate(r,q)
d.aA(0,D.hn0(f,a0,a1,0).a)
r=$.T()
q=B.L()
q.r=C.bhX.gp(0)
d.aq(h,q)
q=h.cs(-(j*0.006))
o=B.L()
o.b=A.ac
o.c=j*0.012
o.san(C.cbX.az(0,new B.a4(i,v,u,t)))
d.aq(q,o)
n=h.cs(-(j*0.035))
J.bs(s.save())
s.clipRRect(B.nc(n),$.mQ(),!0)
o=n.a
q=n.b
t=n.c
u=n.d
D.ioM(d,new B.a4(o,q,t,u),a2,a3)
v=t-o
m=o+v*(0.2-a0*0.6)
l=new B.aH(r.r,A.aj,k,k,B.a([],x.v))
l.E(new B.aZ(m,q))
l.E(new B.aq(m+v*0.45,q))
l.E(new B.aq(m-v*0.15,u))
l.E(new B.aq(m-v*0.6,u))
l.E(new B.bA())
v=B.L()
v.san(new B.a8(A.aX,A.b1,A.x,B.a([A.c.j(0.16),A.c.j(0.02)],x.O),k,k).az(0,new B.a4(o,q,t,u)))
d.af(l,v)
s.restore()
v=j*0.04
v=B.by(B.bY(new B.r(0,q+j*0.06),j*0.075,j*0.28),new B.aP(v,v))
q=B.L()
q.r=A.v.gp(0)
d.aq(v,q)
s.restore()},
ioM(c3,c4,c5,c6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8=null,b9=1e9,c0=c4.c,c1=c4.a,c2=c0-c1
$.T()
w=B.L()
v=c5.d
u=B.ap(v,A.v,0.72)
u.toString
t=x.O
w.san(new B.a8(A.aX,A.b1,A.x,B.a([C.btP,u],t),b8,b8).az(0,c4))
c3.aE(c4,w)
w=c4.b
u=c4.d
s=u-w
r=c1+c2
q=new B.a4(c1,w,r,w+s*0.3)
p=B.L()
o=c5.e
p.san(new B.a8(A.ay,A.aD,A.x,B.a([v,o],t),b8,b8).az(0,q))
c3.aE(q,p)
p=c2*0.1
n=B.L()
n.r=A.c.j(0.08).gp(0)
c3.O(new B.r(r-p,w+c2*0.12),c2*0.42,n)
n=c2*0.045
D.ms(c3,"9:41",new B.r(c1+c2*0.09,w+c2*0.035),n,A.c,0,b8,0,b9,A.F)
r=c2*0.06
D.Hi(c3,C.bTK,new B.r(c0-p,w+r),r,A.c)
c0=c2*0.07
m=c1+c0
l=s*0.085
k=w+l
j=c2*0.17
i=c2*0.05
h=B.by(new B.a4(m,k,m+j,k+j),new B.aP(i,i))
j=B.L()
j.r=A.c.j(0.22).gp(0)
c3.aq(h,j)
D.Hi(c3,c5.c,h.gbD(),c2*0.11,A.c)
j=h.c+i
k=h.b
D.ms(c3,c5.y,new B.r(j,k+c2*0.012),c0,A.c,0,b8,0,c2*0.62,A.u)
D.ms(c3,"NGMY",new B.r(j,k+c2*0.095),n,A.ab,0,b8,c2*0.006,b9,A.F)
c1+=r
w+=s*0.215
k=c1+c2*0.88
g=B.by(new B.a4(c1,w,k,w+s*0.165),new B.aP(r,r))
w=g.eI(new B.r(0,c2*0.015))
j=B.L()
j.r=A.v.j(0.25).gp(0)
c3.aq(w,j)
j=B.L()
j.r=A.c.gp(0)
c3.aq(g,j)
f=A.co.aA(0,A.i.D((c6-1)/2.6,0,1))
r=g.a+r
j=g.b
w=g.d
c0=w-j
D.ms(c3,c5.as,new B.r(r,j+c0*0.16),c2*0.042,A.an,0,b8,0,c2*0.6,A.P)
m=D.ime(c5.z*f,c5.at)
D.ms(c3,B.aL(c5.Q,"#",m),new B.r(r,j+c0*0.42),p,A.a_,0,b8,0,c2*0.58,A.u)
r=g.c-c2*0.25
j+=c0*0.32
e=B.by(new B.a4(r,j,r+c2*0.2,j+c0*0.36),new B.aP(i,i))
c0=B.L()
c0.r=B.ap(o,A.c,0.75).gp(0)
c3.aq(e,c0)
c0=e.gbD()
j=B.ap(v,A.v,0.1)
j.toString
D.Hi(c3,A.mw,c0,c2*0.065,j)
d=w+s*0.04
a0=s*0.088
for(c0=a0+s*0.022,w=c5.ax,r=c3.c,p=a0*0.55,m=a0*0.33,j=a0*0.38,a1=a0*1.05,a2=c2*0.03,a3=c2*0.46,a4=c2*0.04,a5=c2*0.028,a6=c2*0.046,a7=c2*0.26,a8=0;a8<3;++a8){a9=w[a8]
b0=A.co.aA(0,A.i.D(A.i.D((c6-(1.3+a8*0.35))/0.5,0,1),0,1))
if(b0>0){J.bs(r.save())
r.translate((1-b0)*c2*0.6,0)
b1=B.by(new B.a4(c1,d,k,d+a0),new B.aP(n,n))
$.T()
b2=new B.as(A.T,A.Q,A.W,A.X,A.V)
b2.r=A.c.j(0.075*b0).gp(0)
c3.aq(b1,b2)
b2=b1.a
b3=b2+p
b4=b1.b
b4+=(b1.d-b4)/2
b5=new B.as(A.T,A.Q,A.W,A.X,A.V)
b5.r=o.j(0.22).gp(0)
c3.O(new B.r(b3,b4),m,b5)
b5=B.ap(o,A.c,0.2)
b5.toString
D.Hi(c3,a9.a,new B.r(b3,b4),j,b5)
D.ms(c3,a9.b,new B.r(b2+a1,b4-a2),i,A.c,0,b8,0,a3,A.P)
b2=B.ap(o,A.c,0.3)
b2.toString
D.ms(c3,a9.c,new B.r(b1.c-a4,b4-a5),a6,b2,1,b8,0,a7,A.F)
r.restore()}d+=c0}b6=A.i.D((c6-5.2)/0.15,0,1)*(1-A.i.D((c6-5.45)/0.2,0,1))
c0=c2*0.08
b7=B.by(B.bY(new B.r(c4.gbD().a,u-l),s*0.075*(1-b6*0.08),c2*0.8*(1-b6*0.05)),new B.aP(c0,c0))
$.T()
c0=B.L()
s=b7.a
l=b7.c
c0.san(new B.a8(A.a5,A.a9,A.x,B.a([v,o],t),b8,b8).az(0,new B.a4(s,b7.b,l,b7.d)))
c3.aq(b7,c0)
D.ms(c3,"Open NGMY",new B.r(b7.gbD().a,b7.gbD().b-c2*0.033),c2*0.052,A.c,0.5,b8,0,(l-s)*0.85,A.u)
if(b6>0){c0=b7.gbD()
c1=B.L()
c1.r=A.c.j(0.25*(1-b6)).gp(0)
c3.O(c0,i+b6*c2*0.3,c1)}},
fyY(a5,a6,a7,a8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=null,a3="NGMY",a4=1e9
switch(a6.ay.a){case 0:w=B.bX(A.J,a7)
$.T()
v=B.L()
v.san(C.eKG.az(0,w))
a5.c1(w,v)
v=B.L()
v.b=A.ac
v.c=a7*0.05
v.r=C.ahB.j(0.7).gp(0)
a5.O(A.J,a7*0.82,v)
for(v=a7*0.02,u=0;u<40;++u){t=u/40*3.141592653589793*2
s=Math.cos(t)
r=Math.sin(t)
q=Math.cos(t)
p=Math.sin(t)
o=new B.as(A.T,A.Q,A.W,A.X,A.V)
o.c=v
o.r=C.ahB.j(0.5).gp(0)
a5.ah(new B.r(s*a7*0.9,r*a7*0.9),new B.r(q*a7*0.97,p*a7*0.97),o)}n=a8?a3:a6.ch
v=n.length
if(v<=1)m=a7*0.95
else m=v<=3?a7*0.5:a7*0.36
v=-m*0.56
s=a7*1.4
D.ms(a5,n,new B.r(0,v+a7*0.03),m,A.ta.j(0.7),0.5,a2,0,s,A.u)
D.ms(a5,n,new B.r(0,v),m,C.bm6,0.5,a2,0,s,A.u)
break
case 2:w=B.bX(A.J,a7)
$.T()
v=B.L()
v.san(E.aWP.az(0,w))
a5.c1(w,v)
l=B.bX(A.J,a7*0.84)
v=B.L()
s=a6.e
r=B.ap(s,A.c,0.35)
r.toString
q=a6.d
p=B.ap(q,A.v,0.25)
p.toString
v.san(new B.bT(A.mR,0.5,A.x,a2,0,B.a([r,s,p],x.O),A.xF,a2).az(0,l))
a5.c1(l,v)
v=B.L()
v.b=A.ac
v.c=a7*0.025
v.r=A.c.j(0.35).gp(0)
a5.O(A.J,a7*0.72,v)
if(a8)D.ms(a5,a3,new B.r(0,-a7*0.2),a7*0.38,A.c,0.5,a2,a7*0.02,a7*1.3,A.u)
else{v=a6.a
s=v==null
r=s?a6.c:v
p=a7*0.95
D.Hi(a5,r,new B.r(0,a7*0.03),p,B.ap(q,A.v,0.45).j(0.35))
D.Hi(a5,s?a6.c:v,A.J,p,A.c)}break
case 1:k=B.bY(A.J,a7*1.9,a7*3)
v=a7*0.16
j=B.by(k,new B.aP(v,v))
if(a8){$.T()
s=B.L()
r=a6.d
q=B.ap(r,A.v,0.5)
q.toString
r=B.ap(r,A.v,0.75)
r.toString
s.san(new B.a8(A.ay,A.aD,A.x,B.a([q,r],x.O),a2,a2).az(0,k))
a5.aq(j,s)
s=k.a
r=k.b
q=k.d
p=q-r
o=p*0.16
i=r+o
h=k.c
g=h-s
f=p*0.2
e=B.L()
e.r=A.v.j(0.85).gp(0)
a5.aE(new B.a4(s,i,s+g,i+f),e)
e=g*0.08
s+=e
p=r+p*0.5
r=a7*0.03
r=B.by(new B.a4(s,p,s+g*0.55,p+o),new B.aP(r,r))
o=B.L()
o.r=A.c.j(0.9).gp(0)
a5.aq(r,o)
D.ms(a5,"ngmy.org",new B.r(h-e,q-f),v,A.ab,1,a2,0,a4,A.P)
return}$.T()
v=B.L()
s=B.ap(a6.d,A.v,0.15)
s.toString
v.san(new B.a8(A.ay,A.aD,A.x,B.a([s,a6.e],x.O),a2,a2).az(0,k))
a5.aq(j,v)
v=a5.c
J.bs(v.save())
v.clipRRect(B.nc(j),$.mQ(),!0)
s=k.c
r=k.b
q=a7*0.2
p=B.L()
p.r=A.c.j(0.08).gp(0)
a5.O(new B.r(s-a7*0.3,r+q),a7*1.3,p)
p=k.a
o=k.d
i=B.L()
i.r=A.v.j(0.1).gp(0)
a5.O(new B.r(p+q,o),a7*0.9,i)
v.restore()
v=s-p
o-=r
i=a7*0.03
D.ms(a5,a3,new B.r(p+v*0.07,r+o*0.1),a7*0.26,A.c,0,a2,i,a4,A.u)
D.Hi(a5,a6.c,new B.r(s-v*0.12,r+o*0.2),a7*0.32,A.c.j(0.9))
p+=v*0.08
s=r+o*0.38
q=a7*0.06
d=B.by(new B.a4(p,s,p+a7*0.48,s+a7*0.36),new B.aP(q,q))
q=B.L()
s=d.a
h=d.b
g=d.c
f=d.d
q.san(C.av7.az(0,new B.a4(s,h,g,f)))
a5.aq(d,q)
q=d.gbD()
e=d.gbD()
a0=B.L()
a0.r=C.ahQ.gp(0)
a1=a7*0.012
a0.c=a1
a5.ah(new B.r(s,q.b),new B.r(g,e.b),a0)
a0=d.gbD()
e=d.gbD()
q=B.L()
q.r=C.ahQ.gp(0)
q.c=a1
a5.ah(new B.r(a0.a,h),new B.r(e.a,f),q)
D.Hi(a5,A.a45,new B.r(g+a7*0.25,d.gbD().b),a7*0.28,A.ab)
D.ms(a5,"\u2022\u2022\u2022\u2022  \u2022\u2022\u2022\u2022  2026",new B.r(p,r+o*0.64),a7*0.17,A.c.j(0.9),0,a2,a7*0.02,a4,A.P)
D.ms(a5,a6.ch,new B.r(p,r+o*0.8),a7*0.15,A.c,0,a2,i,v*0.6,A.u)
break}},
ijw(d,e,f,g,h,i){var w,v,u,t,s=null,r=g.ay,q=r===C.UC,p=q?f*0.06:f*0.16,o=Math.cos(h),n=$.T(),m=B.L()
switch(r.a){case 0:r=A.CA
break
case 2:r=A.an
break
case 1:r=B.ap(g.d,A.c,0.55)
r.toString
break
default:r=s}m.r=r.gp(0)
r=x.v
n=n.r
if(q){w=new B.aH(n,A.aj,s,s,B.a([],r))
r=f*0.16
w.E(new B.jp(B.by(B.bY(A.J,f*1.9,f*3),new B.aP(r,r))))}else{w=new B.aH(n,A.aj,s,s,B.a([],r))
w.E(new B.jK(B.bX(A.J,f)))}v=new D.fyZ(d,e,f,h)
r=B.a([],x.n)
for(u=1;u<8;++u)r.push(p*u/8)
if(o>=0){v.$2(p,new D.fz_(d,g,f))
for(q=x.Q,r=new B.dr(r,q),r=new B.bP(r,r.gJ(0),q.k("bP<aj.E>")),q=q.k("aj.E");r.C();){o=r.d
if(o==null)o=q.a(o)
v.$2(o,new D.fz0(d,w,m))}v.$2(0,new D.fz1(d,g,f,i,w))}else{v.$2(0,new D.fz2(d,g,f))
for(q=r.length,t=0;t<r.length;r.length===q||(0,B.I)(r),++t)v.$2(r[t],new D.fz3(d,w,m))
v.$2(p,new D.fz4(d,g,f))}},
hJ0(a0,a1,a2,a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
for(w=a1.a,v=a1.b-a2*0.22,u=a4*1.4,t=a2*0.07,s=a3.e,r=a3.d,q=x.O,p=a3.ax,o=a4*0.7,n=0;n<3;++n){m=o+n*3.141592653589793*2/3
l=Math.sin(m)
if(l<0!==a5)continue
k=w+Math.cos(m)*a2*0.4
j=v+n*a2*0.2+Math.sin(u+n)*a2*0.025
i=new B.r(k,j)
h=t*(0.85-l*0.25)
g=B.bX(i,h)
$.T()
f=new B.as(A.T,A.Q,A.W,A.X,A.V)
f.r=A.v.j(0.25).gp(0)
a0.O(new B.r(k+0,j+h*0.25),h,f)
f=new B.as(A.T,A.Q,A.W,A.X,A.V)
e=B.ap(s,A.c,0.55)
e.toString
d=B.ap(r,A.v,0.35)
d.toString
f.san(new B.bT(A.Mv,0.5,A.x,null,0,B.a([e,s,d],q),A.xF,null).az(0,g))
a0.c1(g,f)
D.Hi(a0,p[n].a,i,h,A.c)
f=-h
f=B.bY(new B.r(k+f*0.32,j+f*0.48),h*0.32,h*0.7)
j=new B.as(A.T,A.Q,A.W,A.X,A.V)
j.r=A.c.j(0.45).gp(0)
a0.c1(f,j)}},
hqN(f2,f3,f4,f5,f6,f7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6,d7,d8,d9,e0,e1,e2,e3,e4,e5,e6,e7,e8,e9=null,f0=1e9,f1={}
f1.a=f5
w=A.o.F(f4,14)
v=C.T_[w]
u=f3.a
t=f3.b
if(u<=0||t<=0)return
f5=f1.a=A.i.D(f5,0,10)
s=f2.c
J.bs(s.save())
r=0+u
q=0+t
s.clipRect(B.hQ(new B.a4(0,0,r,q)),$.lD()[1],!0)
if(f3.gdl()<180){r=f3.gdl()
s.restore()
D.hN1(f2,new B.dZ(["ad",w,f6,u,t]),f3,f5+w*1000,new D.h44(f1,180/r,u,t,f4,f6))
return}p=f3.gdl()>=300
D.ipM(f2,f3,v,f5,f4,!0)
o=u>=t*1.15
n=o?t:Math.min(t*0.62,u*1.05)
m=o?u*0.07:u/2
l=o?0:0.5
k=o?u*0.42:u*0.88
j=o?t*0.22:t*0.63
i=o?new B.r(u*0.73,t*0.47):new B.r(u/2,t*0.33)
h=o?t*0.8:Math.min(t*0.5,u*0.6/0.49)
g=f7==null
f=g?0:A.ej.aA(0,A.i.D(f7.b/1.1,0,1))*3.141592653589793*2
e=Math.sin(f5*1.1)
if(f5<6.9){d=A.co.aA(0,A.i.D(A.i.D(f5/1.1,0,1),0,1))
a0=A.dQ.aA(0,A.i.D((f5-3.2)/0.9,0,1))
a1=A.qY.aA(0,A.i.D((f5-6.3)/0.6,0,1))
a2=i.a+(1-d)*u*0.45+a1*u*0.7
a3=i.b+Math.sin(f5*1.6)*h*0.012
a4=h*(1+a0*0.06)
a5=new B.r(a2,a3)
D.hH_(f2,new B.r(a2,a3+a4*0.55),a4*0.62,a4*0.07,0.5,p)
D.hJ0(f2,a5,a4,v,f5,!1)
D.in9(f2,a5,a4,-1.15+d*0.73+a0*0.3+a1*0.9+e*0.05+f,0.07-a0*0.03,v,f5)
D.hJ0(f2,a5,a4,v,f5,!0)}if(f5>=6.2&&f5<8.9){a6=A.ej.aA(0,A.i.D((f5-6.4)/0.7,0,1))
a7=A.qY.aA(0,A.i.D((f5-8.4)/0.45,0,1))
e=v.ay
a8=e===C.UC
a9=(a8?n*0.15:n*0.2)*a6*(1-a7*0.4)
if(a9>1){b0=Math.sin(f5*1.5)
b1=i.a
b2=i.b
b3=n*0.02
b4=b2-b3+Math.sin(f5*2)*n*0.012
a5=new B.r(b1,b4)
b5=a9*2
$.T()
b6=B.L()
b7=x.O
b6.san(new B.bT(A.z,0.5,A.x,e9,0,B.a([v.e.j(0.35*a6),A.L],b7),e9,e9).az(0,B.bX(a5,b5)))
f2.O(a5,b5,b6)
D.hH_(f2,new B.r(b1,b2+n*0.33),a9*2.2,a9*0.25,0.45*a6,p)
D.ijw(f2,a5,a9,v,(1-a6)*3.141592653589793*1.5+b0*0.35+f+a7*3.141592653589793,A.i.D((f5-7.2)/0.9,0,1))
if(!a8){b8=A.co.aA(0,A.i.D(A.i.D((f5-7)/0.4,0,1),0,1))*(1-a7)
if(b8>0){b9=B.by(B.bY(new B.r(b1,b4+a9*1.28),n*0.075,a9*1.9*b8),new B.aP(b3,b3))
a8=b9.eI(new B.r(0,n*0.008))
b0=B.L()
b0.r=A.v.j(0.3).gp(0)
f2.aq(a8,b0)
b0=B.L()
a8=v.d
b1=B.ap(a8,A.v,0.1)
b1.toString
b2=B.ap(a8,A.v,0.1)
b2.toString
b3=b9.a
b4=b9.c
b0.san(new B.a8(A.a5,A.a9,A.x,B.a([b1,a8,b2],b7),e9,e9).az(0,new B.a4(b3,b9.b,b4,b9.d)))
f2.aq(b9,b0)
if(b8>0.6){e=e===C.a8M?A.a.eq(v.b,"NGMY ","").toUpperCase():v.ch
D.ms(f2,e,new B.r(b9.gbD().a,b9.gbD().b-n*0.025),n*0.042,A.c,0.5,e9,n*0.004,(b4-b3)*0.86,A.u)}}}}}e=v.e
a8=B.ap(e,A.c,0.25)
a8.toString
c0=n*(o?0.105:0.095)
if(f5<3.3){c1=1-A.i.D((f5-3)/0.3,0,1)
D.bFk(f2,A.i.D((f5-0.2)/0.4,0,1)*c1,new B.a4(0,j,r,j+n*0.05),new D.h45(f2,v,m,j,n,a8,k,l))
c2=j+n*0.07
a8=c0*1.15
D.bFk(f2,A.i.D((f5-0.45)/0.5,0,1)*c1,new B.a4(0,c2,r,c2+a8),new D.h46(f2,v,m,c2,c0,k,l))
c3=c2+c0*1.18
D.bFk(f2,A.i.D((f5-0.85)/0.5,0,1)*c1,new B.a4(0,c3,r,c3+a8),new D.h47(f2,v,m,c3,c0,k,l))
c4=c3+c0*1.35
c5=n*0.22*(A.co.aA(0,A.i.D(A.i.D((f5-1.3)/0.6,0,1),0,1))*c1)
a8=o?m:m-c5/2
b0=n*0.004
b0=B.by(new B.a4(a8,c4,a8+c5,c4+n*0.008),new B.aP(b0,b0))
$.T()
a8=B.L()
a8.r=e.gp(0)
f2.aq(b0,a8)}else if(f5<6.5){c1=1-A.i.D((f5-6.2)/0.3,0,1)
D.bFk(f2,A.i.D((f5-3.3)/0.4,0,1)*c1,new B.a4(0,j,r,j+n*0.05),new D.h48(f2,v,m,j,n,a8,k,l))
c4=j+n*0.07
c6=A.i.D((f5-3.45)/0.5,0,1)*c1
if(c6>0){J.bs(s.save())
s.translate(0,(1-A.co.aA(0,A.i.D(c6,0,1)))*n*0.04)
a8=o?0.05:0.046
c7=D.hJ6(f2,v.w,new B.r(m,c4),n*a8,A.c.j(c6),k,l,2,A.P)
s.restore()}else c7=n*0.12
a8=n*0.04
c8=c4+Math.max(c7,n*0.06)+a8
for(b0=n*0.075,b1=v.x,b2=v.d,c9=k-a8*1.8,b3=a8*0.55,b4=m+b3,b5=a8*0.62,b6=a8*0.8,b7=a8*1.6,d0=m+b7,d1=k-b7,d2=0;d2<3;++d2){d3=A.co.aA(0,A.i.D(A.i.D((f1.a-(3.9+d2*0.3))/0.4,0,1),0,1))*c1
if(d3>0){d4=0.92*d3
d5=(1-d3)*n
if(o){d6=c8+b5
$.T()
d7=new B.as(A.T,A.Q,A.W,A.X,A.V)
d7.r=e.gp(0)
f2.O(new B.r(b4,d6),b3*d3,d7)
d7=B.ap(b2,A.v,0.4)
d7.toString
D.Hi(f2,A.hn,new B.r(b4,d6),b6*d3,d7)
J.bs(s.save())
s.translate(d5*0.05,0)
D.ms(f2,b1[d2],new B.r(d0,c8),a8,A.c.j(d4),0,e9,0,c9,A.P)
s.restore()}else{d8=m-(Math.min(D.fKo(b1[d2],a8,A.c,0,e9,A.P).b.c,d1)+b7)/2
d9=c8+d5*0.03
d5=d8+b3
d6=d9+b5
$.T()
d7=new B.as(A.T,A.Q,A.W,A.X,A.V)
d7.r=e.j(d3).gp(0)
f2.O(new B.r(d5,d6),b3,d7)
D.Hi(f2,A.hn,new B.r(d5,d6),b6,B.ap(b2,A.v,0.4).j(d3))
D.ms(f2,b1[d2],new B.r(d8+b7,d9),a8,A.c.j(d4),0,e9,0,d1,A.P)}}c8+=b0}}else if(f5<8.6){c1=1-A.i.D((f5-8.3)/0.3,0,1)
D.bFk(f2,A.i.D((f5-6.6)/0.4,0,1)*c1,new B.a4(0,j,r,j+n*0.05),new D.h49(f2,v,m,j,n,a8,k,l))
d3=A.i.D((f5-6.8)/0.5,0,1)*c1
if(d3>0){J.bs(s.save())
s.translate(0,(1-A.co.aA(0,A.i.D(d3,0,1)))*n*0.05)
a8=o?0.085:0.075
b0=A.c.j(d3)
b1=o?3:2
D.hJ6(f2,v.CW,new B.r(m,j+n*0.07),n*a8,b0,k,l,b1,A.u)
s.restore()}}a8=f1.a
if(a8>=8.5){a6=A.i.D((a8-8.5)/0.35,0,1)
$.T()
a8=B.L()
a8.r=A.v.j(0.45*a6).gp(0)
f2.aE(new B.a4(0,0,r,q),a8)
e0=t*(o?0.36:0.38)
e1=A.ej.aA(0,A.i.D((f1.a-8.55)/0.5,0,1))
J.bs(s.save())
a8=u/2
s.translate(a8,e0)
f2.bV(0,0.7+0.3*e1)
s.translate(-u/2,-e0)
e2=Math.min(n*0.17,u*0.2)
b0=A.c.j(a6)
b1=B.ap(e,A.c,0.3)
b1.toString
b2=x.O
D.ms(f2,"NGMY",new B.r(a8,e0-e2*0.6),e2,b0,0.5,B.a([A.c,b1],b2),e2*0.12,f0,A.u)
s.restore()
b1=e0+e2*0.62
D.ms(f2,v.b,new B.r(a8,b1),n*0.048,A.c.j(0.85*A.i.D((f1.a-8.7)/0.3,0,1)),0.5,e9,0,u*0.86,A.F)
d3=A.ej.aA(0,A.i.D((f1.a-8.8)/0.45,0,1))
if(d3>0){b0=n*0.05
e3=B.by(B.bY(new B.r(a8,b1+n*0.16),n*0.1,Math.min(u*0.6,Math.max(u*0.3,n*0.5))*d3),new B.aP(b0,b0))
e4=B.L()
e4.r=e.j(0.45).gp(0)
if(p)e4.y=new B.h1(A.H,n*0.03)
f2.aq(e3,e4)
b1=B.L()
b3=e3.a
b4=e3.b
b5=e3.c
b6=e3.d
b1.san(new B.a8(A.a5,A.a9,A.x,B.a([v.d,e],b2),e9,e9).az(0,new B.a4(b3,b4,b5,b6)))
f2.aq(e3,b1)
J.bs(s.save())
s.clipRRect(B.nc(e3),$.mQ(),!0)
b5-=b3
e5=b3-b5*0.3+A.i.D((f1.a-9)/0.9,0,1)*b5*1.6
b3=e5+b5*0.25
b1=B.L()
b1.san(new B.a8(A.a5,A.a9,A.x,B.a([A.c.j(0),A.c.j(0.5),A.c.j(0)],b2),e9,e9).az(0,new B.a4(e5,0,b3,1)))
f2.aE(new B.a4(e5,b4,b3,b4+(b6-b4)),b1)
s.restore()
if(d3>0.7)D.ms(f2,"Open NGMY",new B.r(a8,e3.gbD().b-n*0.03),b0,A.c,0.5,e9,0,b5*0.8,A.u)
D.ms(f2,"ngmy.org",new B.r(a8,b6+n*0.035),n*0.036,A.c.j(0.65*A.i.D(d3,0,1)),0.5,e9,n*0.004,f0,A.P)}}a9=new B.a4(0,0,r,q)
$.T()
e=B.L()
e.san(new B.bT(A.z,0.95,A.x,e9,0,B.a([A.L,A.v.j(0.45)],x.O),E.aCI,e9).az(0,a9))
f2.aE(a9,e)
if(!g&&f7.b<0.7){b8=f7.b/0.7
g=f7.a
e=B.L()
e.b=A.ac
a8=1-b8
e.c=n*0.012*a8
e.r=A.c.j(0.8*a8).gp(0)
f2.O(new B.r(g.a*u,g.b*t),n*(0.05+0.3*b8),e)}e6=n*0.035
e7=f6?"Ad "+(w+1)+" of 14":"Ad"
w=e6*0.9
g=D.fKo(e7,w,A.c,0,e9,A.F).b
e=g.c
g=g.a.c
a8=e6*0.4
e8=B.by(new B.a4(e6,e6,e6+(e+e6*1.2),e6+(g.gb8(g)+e6*0.5)),new B.aP(a8,a8))
a8=B.L()
a8.r=A.bt.j(0.95).gp(0)
f2.aq(e8,a8)
D.ms(f2,e7,new B.r(e8.a+e6*0.6,e8.b+e6*0.25),w,A.aw,0,e9,0,f0,A.F)
w=n*0.012
a8=t-w
w=a8+w
g=B.L()
g.r=A.c.j(0.2).gp(0)
f2.aE(new B.a4(0,a8,r,w),g)
g=f1.a
e=B.L()
e.r=A.bt.gp(0)
f2.aE(new B.a4(0,a8,0+u*g/10,w),e)
w=f1.a
if(w<0.25)c1=1-w/0.25
else c1=w>9.8?(w-9.8)/0.2:0
if(c1>0){w=B.L()
w.r=A.v.j(A.i.D(c1,0,1)).gp(0)
f2.aE(new B.a4(0,0,r,q),w)}s.restore()},
apZ:function apZ(d,e){this.a=d
this.b=e},
i8:function i8(d,e,f){this.a=d
this.b=e
this.c=f},
rY:function rY(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l
_.y=m
_.z=n
_.Q=o
_.as=p
_.at=q
_.ax=r
_.ay=s
_.ch=t
_.CW=u
_.cx=v},
b0o:function b0o(d,e){this.a=d
this.b=e},
fKb:function fKb(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fE_:function fE_(){},
fyZ:function fyZ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fz_:function fz_(d,e,f){this.a=d
this.b=e
this.c=f},
fz0:function fz0(d,e,f){this.a=d
this.b=e
this.c=f},
fz1:function fz1(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fz2:function fz2(d,e,f){this.a=d
this.b=e
this.c=f},
fz3:function fz3(d,e,f){this.a=d
this.b=e
this.c=f},
fz4:function fz4(d,e,f){this.a=d
this.b=e
this.c=f},
h44:function h44(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
h45:function h45(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
h46:function h46(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
h47:function h47(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
h48:function h48(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
h49:function h49(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
Jb:function Jb(d,e,f){this.c=d
this.d=e
this.a=f},
c5U:function c5U(d){this.a=d},
ipV(d,e,f,g,h,i){var w=new D.fK3(e,h,!0),v=w.$1(g),u=v.b.c
if(u>i&&u>0)v=w.$1(Math.max(2,g*i/u))
w=v.b
u=w.c
w=w.a.c
v.a4(d,f.aI(0,new B.r(u/2,w.gb8(w)/2)))},
Mq(d,e,f,g,h,i,j){var w,v,u,t,s,r,q,p,o,n,m,l,k
if(j<=0)return
w=new D.h43(e,f,g)
v=A.i.cF(22*A.i.D(j,0,1))
for(u=i-h,t=e,s=1;s<=v;++s,t=q){r=Math.min(s/22,A.i.D(j,0,1))
q=w.$1(r)
$.T()
p=new B.as(A.T,A.Q,A.W,A.X,A.V)
p.b=A.ac
o=p.c=h+u*r
p.r=A.qR.gp(0)
p.d=A.bF
d.ah(t,q,p)
p=-o*0.18
n=q.a
m=q.b
l=B.ap(A.qR,A.c,0.18)
l.toString
k=new B.as(A.T,A.Q,A.W,A.X,A.V)
k.b=A.ac
k.c=o*0.28
k.r=l.gp(0)
k.d=A.bF
d.ah(new B.r(t.a+p,t.b+0),new B.r(n+p,m+0),k)}},
fK3:function fK3(d,e,f){this.a=d
this.b=e
this.c=f},
h43:function h43(d,e,f){this.a=d
this.b=e
this.c=f},
hml(d,e,f,g,h,i){var w=new D.fAy(e,h,!0,0),v=w.$1(g),u=v.b.c
if(u>i&&u>0)v=w.$1(Math.max(2,g*i/u))
w=v.b
u=w.c
w=w.a.c
v.a4(d,f.aI(0,new B.r(u/2,w.gb8(w)/2)))},
Mr(d,e,f,g,h,i){var w=h==null,v=w?A.o.F(A.i.bc(f/10),14):h,u=A.i.F(f,10)
D.hqN(d,e,v,u,g||w,i)},
Ms(d,e,f,g,h,i){var w,v=d.c
J.bs(v.save())
v.clipRect(B.hQ(new B.a4(0,0,0+e.a,0+e.b)),$.lD()[1],!0)
w=C.iv[A.o.F(f,8)].e
if(w===-2)D.igI(d,e,g)
else if(w===-1)D.Mr(d,e,g,!0,h,i)
else D.Mr(d,e,g,!1,w,i)
v.restore()},
igI(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k=e.a,j=e.b,i=new B.V(Date.now(),0,!1),h=0+k,g=0+j
$.T()
w=B.L()
w.san(C.caR.az(0,new B.a4(0,0,h,g)))
d.aE(new B.a4(0,0,h,g),w)
w=B.L()
w.r=A.bE.gp(0)
d.aE(new B.a4(0,0,h,0+j*0.15),w)
D.hml(d,A.p5[B.bN(i)-1]+" "+B.bD(i),new B.r(k/2,j*0.075),j*0.08,A.c,k*0.9)
v=k/7
for(h=j*0.21,g=j*0.05,u=0;u<7;++u)D.hml(d,C.dG7[u],new B.r(v*(u+0.5),h),g,A.aF,9999)
t=B.c0(B.bD(i),B.bN(i),1,0,0,0,0,0)
s=B.bW(B.c0(B.bD(i),B.bN(i)+1,0,0,0,0,0,0))
r=B.lU(t)-1
q=j*0.74/A.i.cF((r+s)/7)
for(h=j*0.26,g=f*3,p=1;p<=s;++p){o=r+p-1
n=new B.r(v*(A.o.F(o,7)+0.5),h+q*(A.o.ao(o,7)+0.5))
if(p===B.bW(i)){w=Math.min(v,q)
m=A.aH.j(0.5+0.2*Math.sin(g))
$.T()
l=new B.as(A.T,A.Q,A.W,A.X,A.V)
l.r=m.gp(0)
d.O(n,w*0.42,l)}w=Math.min(v,q)
m=p===B.bW(i)?A.c:A.ab
D.hml(d,""+p,n,w*0.42,m,9999)}},
fAy:function fAy(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
wF:function wF(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
h4f(d,e,f,g,h,i,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=e.a
if(j<=0||e.b<=0)return
if(e.gdl()<180){w=e.gdl()
v=h<3
u=v?h:g
D.hN1(d,new B.bts(["tv",f,i,a0,j,e.b,v]),e,u,new D.h4g(180/w,e,f,g,h,i,a1,a0))
return}w=d.c
J.bs(w.save())
u=e.b
t=0+j
s=0+u
w.clipRect(B.hQ(new B.a4(0,0,t,s)),$.lD()[1],!0)
if(h<3){$.T()
r=B.L()
r.r=C.Zz.gp(0)
d.aE(new B.a4(0,0,t,s),r)
if(h<0.5)t=h/0.5
else t=h>2.4?(3-h)/0.6:1
q=A.i.D(t,0,1)
t=e.eo(A.J)
s=e.gdl()
r=B.L()
r.san(new B.bT(A.z,0.5,A.x,k,0,B.a([A.aH.j(0.35*q),A.L],x.O),k,k).az(0,B.bX(e.eo(A.J),e.gdl()*0.5)))
d.O(t,s*0.5,r)
D.aRZ(d,"NGMY",new B.r(0,u*0.36),u*0.2,A.c.j(q),A.K,u*0.03,j)
D.aRZ(d,"T V",new B.r(0,u*0.6),u*0.08,A.aH.j(q),A.K,u*0.05,j)
r=j*0.3
s=u*0.78
t=B.L()
t.r=A.aH.j(q).gp(0)
d.aE(new B.a4(r,s,r+j*0.4*(h/3),s+3),t)}else if(i>=0){D.Ms(d,e,i,g,a0,a1)
p=C.iv[A.o.F(i,8)].e
if(p!==-2){if(p>=0)o=p
else o=a0==null?A.o.F(A.i.bc(g/10),14):a0
D.hFQ(d,e,"ADS  \xb7  "+C.T_[A.o.F(o,14)].b)}}else{n=A.i.D((h-3)/0.5,0,1)
m=A.o.F(f,10)
l=C.aKV.h(0,m)
if(m===0)D.iqe(d,e,g)
else if(l==null)D.iBY(d,e,g)
else D.hqN(d,e,D.hOF(l),A.i.F(g,10),!1,a1)
D.hFQ(d,e,"CH "+(m+1)+"  \xb7  "+C.Tt[m].a)
if(n<1){$.T()
r=B.L()
r.r=A.c.j(0.6*(1-n)).gp(0)
d.aE(new B.a4(0,0,t,s),r)}}t=new B.aH($.T().r,A.aj,k,k,B.a([],x.v))
t.E(new B.aZ(0,0))
t.E(new B.aq(j*0.45,0))
t.E(new B.aq(0,u*0.5))
t.E(new B.bA())
u=B.L()
u.r=A.c.j(0.04).gp(0)
d.af(t,u)
w.restore()},
aRZ(d,e,f,g,h,i,j,k){var w,v=null,u=D.ajt(h),t=A.i.fO(g*2)
u=B.l(v,v,u,v,v,v,v,v,v,v,v,t/2,v,v,A.u,v,v,!0,v,j,v,v,v,v,v,v)
t=k==null
w=D.a4_(e,u,i,v,1,t?9999:k)
w.a4(d,f.a7(0,new B.r(i===A.K&&!t?(k-w.b.c)/2:0,0)))},
hFQ(d,e,f){var w=e.b,v=e.a,u=v-w*0.34,t=w*0.04,s=w*0.03,r=B.by(new B.a4(u,t,u+w*0.3,t+w*0.1),new B.aP(s,s))
$.T()
s=B.L()
s.r=A.v.j(0.55).gp(0)
d.aq(r,s)
D.aRZ(d,"NGMY",new B.r(r.a+w*0.025,r.b+w*0.012),w*0.07,A.c,A.b8,1,null)
s=w*0.86
u=B.L()
u.r=A.v.j(0.6).gp(0)
d.aE(new B.a4(0,s,0+v,s+w*0.14),u)
D.aRZ(d,f,new B.r(t,w*0.885),w*0.075,A.c,A.b8,0,v*0.74-t)},
aR5(d,e,f,g,h,i,j){var w=new D.fyb(e,h,i,j),v=w.$1(g),u=v.b.c,t=f.c-f.a
if(u>t&&u>0)v=w.$1(g*t/u)
w=f.gbD()
u=v.b
t=u.c
u=u.a.c
v.a4(d,w.aI(0,new B.r(t/2,u.gb8(u)/2)))},
iqe(d5,d6,d7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5=null,c6=d6.a,c7=d6.b,c8=A.i.F(d7,14),c9=new D.fKu(c8),d0=new D.fKq(),d1=0+c6,d2=0+c7,d3=$.T(),d4=B.L()
d4.san(C.cc2.az(0,new B.a4(0,0,d1,d2)))
d5.aE(new B.a4(0,0,d1,d2),d4)
w=c6*0.34
v=new D.fKt(w,c7)
u=v.$2(0,0.5)
d4=c7*0.75
t=B.L()
t.san(new B.bT(A.z,0.5,A.x,c5,0,B.a([A.bM.j(0.55),A.L],x.O),c5,c5).az(0,B.bX(u,d4)))
d5.O(u,d4,t)
s=new B.e1()
s.cT(11)
for(d4=d7*2,r=0;r<26;++r){t=s.ai()
q=s.ai()
p=s.ai()
o=new B.as(A.T,A.Q,A.W,A.X,A.V)
o.r=A.c.j(0.35+0.4*Math.sin(d4+r)).gp(0)
d5.O(new B.r(t*c6,q*c7*0.45),0.6+p*1.1,o)}for(t=x.v,n=0;n<2;++n){q=B.a([],t)
m=new B.aH(d3.r,A.aj,c5,c5,q)
q.push(new B.aZ(0,c7))
m.ac()
for(d3=n*2,p=n===0,l=0;l<=c6;l+=6){o=p?0.78:0.82
o=new B.aq(l,c7*o+Math.sin(l/(p?70:50)+d3)*c7*0.02)
q.push(o)
k=m.f
if(k!=null)o.aj(k)
m.ac()}d3=new B.aq(c6,c7)
q.push(d3)
q=m.f
if(q!=null)d3.aj(q)
m.ac()
d3=$.T()
q=new B.as(A.T,A.Q,A.W,A.X,A.V)
q.r=(p?C.Nm:C.bvE).gp(0)
d5.af(m,q)}j=v.$2(0,0.81)
i=d0.$1(c9.$2(0.2,1.6))
h=d0.$1(c9.$2(2.4,2.6))
for(d3=d7*1.4,g=0;g<8;++g){t=C.aDw[g]
f=t.a
e=t.b
d=Math.sin(d3+f*7)*c7*0.006
q=v.$2(f,e)
p=q.a
q=q.b
t=c7*t.c
o=new B.as(A.T,A.Q,A.W,A.X,A.V)
o.r=A.hX.gp(0)
d5.O(new B.r(p+d,q+0),t*h,o)
o=v.$2(f,e-0.015)
q=o.a
o=o.b
p=new B.as(A.T,A.Q,A.W,A.X,A.V)
p.r=A.es.gp(0)
d5.O(new B.r(q+d,o+0),t*0.82*h,p)}for(d3=c7*0.01,t=j.a,q=j.b,p=q+d3,o=c7*0.015,q+=o,k=c7*0.04,g=0;g<2;++g){a0=F.hp[g]*c7
D.Mq(d5,j,new B.r(t+a0*0.04,p),new B.r(t+a0*0.12,q),k,d3,i)}t=c7*0.085
D.Mq(d5,j,v.$2(0.02,0.7),v.$2(0,0.6),t,c7*0.055,i)
a1=d0.$1(c9.$2(1.8,1.6))
q=c7*0.05
p=c7*0.026
D.Mq(d5,v.$2(0,0.6),v.$2(-0.1,0.55),v.$2(-0.34,0.44),q,p,a1)
D.Mq(d5,v.$2(0,0.6),v.$2(0.1,0.55),v.$2(0.34,0.44),q,p,a1)
a2=d0.$1(c9.$2(3.2,1.3))
p=c7*0.024
a0=c7*0.018
D.Mq(d5,v.$2(-0.34,0.44),v.$2(-0.17,0.33),v.$2(0,0.39),p,a0,a2)
D.Mq(d5,v.$2(0.34,0.44),v.$2(0.17,0.33),v.$2(0,0.39),p,a0,a2)
a3=d0.$1(c9.$2(4.4,1.3))
a0=c7*0.02
p=c7*0.012
D.Mq(d5,v.$2(0,0.39),v.$2(-0.1,0.3),v.$2(-0.17,0.2),a0,p,a3)
D.Mq(d5,v.$2(0,0.39),v.$2(0.1,0.3),v.$2(0.17,0.2),a0,p,a3)
a0=c7*0.016
D.Mq(d5,v.$2(-0.27,0.72),v.$2(-0.14,0.78),v.$2(0,0.7),a0,p,d0.$1(c9.$2(3.6,1)))
D.Mq(d5,v.$2(0.27,0.72),v.$2(0.14,0.78),v.$2(0,0.7),a0,p,d0.$1(c9.$2(3.6,1)))
a4=new B.e1()
a4.cT(5)
for(a0=d7*1.6,a5=d5.c,a6=d7*1.3,a7=h*1.4,a8=c7*0.03,r=0;r<110;++r){a9=C.aDw[A.o.F(r,8)]
b0=a4.ai()*3.141592653589793*2
b1=Math.sqrt(a4.ai())*a9.c*0.95
b2=v.$2(a9.a+Math.cos(b0)*b1,a9.b+Math.sin(b0)*b1)
b3=Math.sin(a0+r)
b4=b2.a
b2=b2.b
J.bs(a5.save())
a5.translate(b4+b3*c7*0.006,b2+0)
a5.rotate((b0+Math.sin(a6+r)*0.2)*180/3.141592653589793,0,0)
b5=A.i.D(a7-A.o.F(r,10)*0.05,0,1)
b2=B.bY(A.J,o*b5,a8*b5)
$.T()
b3=new B.as(A.T,A.Q,A.W,A.X,A.V)
b3.r=B.ap(A.bj,A.eE,(Math.sin(d4+r)+1)/2).gp(0)
d5.c1(b2,b3)
a5.restore()}b6=new D.fKr(c9,d5,d7,c8)
o=c7*0.075
b6.$5(0,"Bibi",v.$2(-0.27,0.72),o,5)
b6.$5(1,"Babu",v.$2(0.27,0.72),o,5.6)
b6.$5(2,"Mama",v.$2(-0.34,0.44),t,6.4)
b6.$5(3,"Baba",v.$2(0.34,0.44),t,7)
b6.$5(4,"Dada",v.$2(-0.17,0.2),o,8)
b6.$5(5,"Kaka",v.$2(0.17,0.2),o,8.6)
b7=new D.fKs(c9,d7,d5)
b7.$3(v.$2(0,0.7),c7*0.028,5.9)
b7.$3(v.$2(0,0.39),c7*0.035,7.4)
if(c8>9.3)for(t=(c8-9.3)*0.4,r=0;r<7;++r){b8=A.i.F(t+r/7,1)
D.aRZ(d5,"\u2665",v.$2(Math.sin(r*2.3+d4)*0.3,0.38-b8*0.3),c7*(0.04+0.02*A.o.F(r,3)),A.hY.j((1-b8)*0.85),A.b8,0,c5)}d4=c6*0.655+(1-d0.$1(c9.$2(1,0.9)))*c6*0.4
t=c7*0.1
a0=d4+c6*0.315
b9=new B.a4(d4,t,a0,t+c7*0.64)
a5=B.by(b9,new B.aP(q,q))
$.T()
a6=B.L()
a6.r=C.iY.j(0.88).gp(0)
d5.aq(a5,a6)
a6=B.by(b9,new B.aP(q,q))
a5=B.L()
a5.b=A.ac
a5.c=p
a5.r=F.fc.gp(0)
d5.aq(a6,a5)
c0=new D.fKv(b9,c7)
D.aR5(d5,"NGMY",c0.$2(0.13,0.06),c7*0.06,F.fc,!0,p)
D.aR5(d5,"Family",c0.$2(0.2,0.1),t,A.c,!0,0)
D.aR5(d5,"Tree",c0.$2(0.3,0.1),t,A.c,!0,0)
for(r=0;r<3;++r){c1=c9.$2(5.5+r*1.5,0.5)
if(c1<=0)continue
D.aR5(d5,"\u2665 "+C.cfC[r],c0.$2(0.43+r*0.075,0.06).eI(new B.r((1-c1)*30,0)),q,A.iH.j(c1),!1,0)}c2=c9.$2(11,0.5)
if(c2>0){c3=B.bY(new B.r(b9.gbD().a,c7*0.67),o,(a0-d4)*0.6*A.ej.aA(0,c2))
d4=B.by(c3,new B.aP(k,k))
$.T()
t=B.L()
t.r=F.fc.gp(0)
d5.aq(d4,t)
if(c2>0.8)D.aR5(d5,"ngmy.org",c3.cs(-d3),q,C.iY,!0,0)}if(c8>11.6){d3=c7*0.82
D.aR5(d5,"Family is everything",new B.a4(0,d3,0+w*2,d3+q),q,A.c.j(A.i.D((c8-11.6)/0.5,0,1)),!0,0)}if(c8<0.4)c4=1-c8/0.4
else c4=c8>13.5?(c8-13.5)/0.5:0
if(c4>0){$.T()
d3=B.L()
d3.r=A.v.j(c4).gp(0)
d5.aE(new B.a4(0,0,d1,d2),d3)}},
hr9(d,e,f,g,h,i){return B.a7(d,!1).cb(B.vz(null,!1,!0,!0,new D.hcF(e,h,g,i,f),A.eX,null,A.pN,new D.hcG(),x.S))},
yy:function yy(d,e){this.a=d
this.b=e},
h4g:function h4g(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
fyb:function fyb(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fKu:function fKu(d){this.a=d},
fKq:function fKq(){},
fKt:function fKt(d,e){this.a=d
this.b=e},
fKr:function fKr(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fKs:function fKs(d,e,f){this.a=d
this.b=e
this.c=f},
fKv:function fKv(d,e){this.a=d
this.b=e},
hcF:function hcF(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
hcG:function hcG(){},
Y7:function Y7(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aHD:function aHD(d,e,f){var _=this
_.e=_.d=$
_.f=-1
_.r=!1
_.w=null
_.x=0
_.z=_.y=!1
_.Q=null
_.as=$
_.at=-99
_.ax=d
_.ch=_.ay=0
_.bv$=e
_.aa$=f
_.c=_.a=null},
eXv:function eXv(d,e,f){this.a=d
this.b=e
this.c=f},
eXm:function eXm(d,e,f){this.a=d
this.b=e
this.c=f},
eXu:function eXu(d){this.a=d},
eXj:function eXj(d,e){this.a=d
this.b=e},
eXi:function eXi(d,e){this.a=d
this.b=e},
eXk:function eXk(d){this.a=d},
eXh:function eXh(d,e){this.a=d
this.b=e},
eXl:function eXl(d,e){this.a=d
this.b=e},
eXB:function eXB(d,e){this.a=d
this.b=e},
eXA:function eXA(d,e){this.a=d
this.b=e},
eXz:function eXz(d){this.a=d},
eXy:function eXy(d){this.a=d},
eXC:function eXC(d){this.a=d},
eXw:function eXw(d,e){this.a=d
this.b=e},
eXx:function eXx(d){this.a=d},
eXt:function eXt(){},
eXo:function eXo(d){this.a=d},
eXp:function eXp(d){this.a=d},
eXq:function eXq(d){this.a=d},
eXr:function eXr(d){this.a=d},
eXn:function eXn(d){this.a=d},
eXs:function eXs(d){this.a=d},
eXg:function eXg(d){this.a=d},
eXf:function eXf(d){this.a=d},
bz2:function bz2(d,e,f,g,h,i,j){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.a=j},
aPy:function aPy(){},
Sp(d,e,f,g,h,i,j,k,l,m){var w,v,u
if(g<1||e.length===0)return 0
w=new D.fKa(j,e,m,k,h,f,i,l)
v=w.$1(g)
u=v.b.c
if(u>l&&u>0)v=w.$1(g*l/u)
v.a4(d,new B.r(f.a-v.b.c*i,f.b))
w=v.b.a.c
return w.gb8(w)},
aQL(d,e,f,g,h,i,j,k,l){var w,v,u,t,s,r,q,p,o=h/2,n=f-o,m=f+o
o=i/2
w=g-o
v=g+o
u=l+j
o=new D.fvF()
t=x.g
s=o.$1(B.a([e.hh(n,l,w).a,e.hh(m,l,w).a,e.hh(m,u,w).a,e.hh(n,u,w).a],t))
$.T()
r=B.L()
r.r=B.ap(k,A.v,0.28).gp(0)
d.af(s,r)
r=e.b
r===$&&B.d()
q=r<0?m:n
s=o.$1(B.a([e.hh(q,l,w).a,e.hh(q,l,v).a,e.hh(q,u,v).a,e.hh(q,u,w).a],t))
r=B.L()
r.r=B.ap(k,A.v,0.45).gp(0)
d.af(s,r)
p=o.$1(B.a([e.hh(n,u,w).a,e.hh(m,u,w).a,e.hh(m,u,v).a,e.hh(n,u,v).a],t))
t=B.L()
o=B.ap(k,A.c,0.25)
o.toString
t.san(new B.a8(A.ay,A.aD,A.x,B.a([o,k],x.O),null,null).az(0,B.aiu(p.glc().a.getBounds())))
d.af(p,t)},
fwY(d,e,f,a0,a1,a2,a3,a4,a5){var w,v,u,t,s,r,q,p,o,n=null,m=e.hh(f,a5,a0),l=m.a,k=e.hh(f,a5+a2,a0),j=k.a,i=a1*m.b,h=a1*k.b,g=e.c
g===$&&B.d()
w=Math.sin(g)*0.55+0.1
g=l.a
v=g-i
u=j.a
t=u-h
s=Math.min(v,t)
r=j.b
u+=h
g=Math.max(g+i,u)
q=l.b
p=new B.aH($.T().r,A.aj,n,n,B.a([],x.v))
p.E(new B.aZ(t,r))
p.E(new B.aq(v,q))
v=i*2
p.E(new B.aky(B.bY(l,v*w,v),3.141592653589793,-3.141592653589793,!1))
p.E(new B.aq(u,r))
p.E(new B.bA())
u=B.L()
u.san(new B.a8(A.a5,A.a9,A.x,a3,M.T4,n).az(0,new B.a4(s,r,g,q)))
d.af(p,u)
g=h*2
o=B.bY(j,g*w,g)
g=B.L()
v=B.ap(a4,A.c,0.4)
v.toString
g.san(new B.bT(A.mR,0.5,A.x,n,0,B.a([v,a4],x.O),n,n).az(0,o))
d.c1(o,g)},
fE1(d){var w,v,u,t,s=A.i.F(d,1)*7.48,r=[1.24,2.5,1.24,2.5]
for(w=0;w<4;++w){v=r[w]
if(s<=v){v=[C.fiY,C.fkr,C.fj3,C.fiN][w].a
u=v[0]
t=v[1]
return new B.y(u+v[2]*s,t+v[3]*s)}s-=v}return C.f9Z},
iBY(g1,g2,g3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6,d7,d8,d9,e0,e1,e2,e3,e4,e5,e6,e7,e8,e9,f0,f1,f2,f3,f4,f5,f6,f7=null,f8=1e9,f9=g2.a,g0=g2.b
if(f9<=0||g0<=0)return
w=A.i.F(g3,10)
v=new B.a4(0,0,0+f9,0+g0)
u=g1.c
J.bs(u.save())
u.clipRect(B.hQ(v),$.lD()[1],!0)
t=$.T()
s=B.L()
s.san(C.eKB.az(0,v))
g1.aE(v,s)
r=g2.gdl()>=120
if(r){q=new B.e1()
q.cT(5)
for(s=g3*f9*0.01,p=g0*0.02,o=0;o<8;++o){n=A.i.F(q.ai()*f9+s,f9)
m=q.ai()
l=q.ai()
k=new B.as(A.T,A.Q,A.W,A.X,A.V)
k.r=A.aH.j(0.07).gp(0)
k.y=new B.h1(A.H,p)
g1.O(new B.r(n,m*g0*0.5),g0*(0.02+l*0.04),k)}}j=new D.cX0(g2)
j.b=Math.sin(g3*0.32)*0.22
s=0.86+Math.sin(g3*0.21)*0.05
j.c=s
j.d=g0*1.8
j.e=new B.r(f9*0.5,g0*0.5)
i=A.co.aA(0,A.i.D(A.i.D((w-1.6)/0.5,0,1),0,1))
h=w<2.2?-1:(w-2.2)/3.4
g=h>=0.5828877005347594
f=g?0.75+0.25*Math.abs(Math.sin(g3*9)):0
t=t.r
p=x.v
e=new B.aH(t,A.aj,f7,f7,B.a([],p))
n=x.g
m=x.H
l=B.B(B.a([j.hh(-1.85,-0.09000000000000001,-1.2).a,j.hh(1.85,-0.09000000000000001,-1.2).a,j.hh(1.85,-0.09000000000000001,1.1500000000000001).a,j.hh(-1.85,-0.09000000000000001,1.1500000000000001).a],n),m)
e.E(new B.zz(l,!0))
d=B.L()
d.r=A.v.j(0.55).gp(0)
if(r)d.y=new B.h1(A.H,g0*0.025)
g1.af(e,d)
l=new B.aH(t,A.aj,f7,f7,B.a([],p))
k=B.B(B.a([j.hh(-1.75,-0.07,-1.05).a,j.hh(1.75,-0.07,-1.05).a,j.hh(1.75,0,-1.05).a,j.hh(-1.75,0,-1.05).a],n),m)
l.E(new B.zz(k,!0))
k=B.L()
k.r=C.bto.gp(0)
g1.af(l,k)
a0=new B.aH(t,A.aj,f7,f7,B.a([],p))
t=B.B(B.a([j.hh(-1.75,0,-1.05).a,j.hh(1.75,0,-1.05).a,j.hh(1.75,0,1.05).a,j.hh(-1.75,0,1.05).a],n),m)
a0.E(new B.zz(t,!0))
t=B.L()
t.san(C.cdh.az(0,B.aiu(a0.glc().a.getBounds())))
g1.af(a0,t)
if(r){a1=B.L()
a1.r=A.bv.j(0.08).gp(0)
a1.c=1
for(a2=-1.75;a2<=1.76;a2+=0.25)g1.ah(j.hh(a2,0,-1.05).a,j.hh(a2,0,1.05).a,a1)
for(a3=-1.05;a3<=1.06;a3+=0.25)g1.ah(j.hh(-1.75,0,a3).a,j.hh(1.75,0,a3).a,a1)}for(t=[C.faI,C.f8k,C.f4s,C.f63],n=t.length,a4=0;a4<n;++a4){m=t[a4]
a5=j.hh(m.a,0,m.b)
a6=a5.a
a7=a5.b
a8=Math.sin(s)*0.55+0.1
m=a7*0.12
m=B.bY(a6,m*a8,m)
$.T()
l=new B.as(A.T,A.Q,A.W,A.X,A.V)
l.r=E.H9.gp(0)
g1.c1(m,l)
l=a7*0.06
l=B.bY(a6,l*a8,l)
m=new B.as(A.T,A.Q,A.W,A.X,A.V)
m.r=C.Zz.gp(0)
g1.c1(l,m)}t=$.T()
s=B.a([],p)
a9=new B.aH(t.r,A.aj,f7,f7,s)
for(o=0;o<=120;++o){b0=D.fE1(o/120)
a6=j.hh(b0.a,0.004,b0.b).a
t=a6.a
n=a6.b
if(o===0){t=new B.aZ(t,n)
s.push(t)
n=a9.f
if(n!=null)t.aj(n)
a9.ac()}else{t=new B.aq(t,n)
s.push(t)
n=a9.f
if(n!=null)t.aj(n)
a9.ac()}}b1=j.hh(0,0,0).b
$.T()
t=B.L()
t.b=A.ac
t.c=b1*0.07
t.e=A.dP
t.r=C.bsc.gp(0)
g1.af(a9,t)
t=B.L()
t.b=A.ac
t.c=b1*0.045
t.e=A.dP
t.san(C.av7.az(0,v))
g1.af(a9,t)
if(g){b2=B.L()
b2.b=A.ac
b2.c=b1*0.09
b2.r=A.hk.j(0.25+0.1*Math.sin(g3*6)).gp(0)
if(r)b2.y=new B.h1(A.H,b1*0.04)
g1.af(a9,b2)}for(t=[C.eUJ,C.eTN],s=t.length,a4=0;a4<s;++a4){n=t[a4]
b3=n.a
b4=n.b
for(n=b3-0.2,m=b4-0.17,l=b4+0.17,o=0;o<5;++o){b5=n+o*0.1
D.aQL(g1,j,b5,m,0.035,0.08,0.03,A.cC,0)
D.aQL(g1,j,b5,l,0.035,0.08,0.03,A.cC,0)}D.aQL(g1,j,b3,b4,0.55,0.3,0.08,A.cw,0)
b6=j.hh(b3,0.081,b4)
b7=b6.a
a7=b6.b
D.Sp(g1,"NGMY",new B.r(b7.a,b7.b-a7*0.05),a7*0.08,A.c.j(0.75),0.5,f7,a7*0.01,f8,A.u)}D.aQL(g1,j,-0.55,0.62,0.34,0.2,0.08,A.aM,0)
b8=j.hh(-0.7,0.1,0.62).a
b9=(1-i)*0.75
c0=j.hh(-0.7+0.32*Math.cos(b9),0.1+0.32*Math.sin(b9),0.62).a
$.T()
t=B.L()
t.c=b1*0.04
t.d=A.bF
t.san(C.avc.az(0,B.rc(b8,c0)))
g1.ah(b8,c0,t)
t=B.L()
t.r=A.aB.gp(0)
g1.O(b8,b1*0.025,t)
if(i>0.95&&w<2.6){t=A.i.D((w-2.1)/0.5,0,1)
s=B.L()
s.r=A.bM.j(0.8).gp(0)
g1.O(c0,b1*0.08*(1-t),s)}D.aQL(g1,j,0.55,0.62,0.46,0.12,0.1,C.bxr,0.02)
for(t=[C.f0U,C.f44,C.eVP,C.eSv],s=t.length,a4=0;a4<s;++a4){n=t[a4]
D.aQL(g1,j,0.41000000000000003+n.a*0.09,0.62,0.035,0.125,0.105,n.b,0.02)}D.fwY(g1,j,-1.25,0,0.17,0.62,C.cDi,C.ait,0)
c1=j.hh(-1.25,0.62,0)
a7=c1.b
D.fwY(g1,j,-1.25,0,0.06,0.06,C.ddv,C.am8,0.62)
D.Sp(g1,"9V",j.hh(-1.25,0.3,0).a.aI(0,new B.r(0,a7*0.06)),a7*0.11,A.bt,0.5,f7,0,f8,A.u)
D.Sp(g1,"+",c1.a.aI(0,new B.r(a7*0.16,a7*0.18)),a7*0.12,A.ab,0.5,f7,0,f8,A.u)
D.fwY(g1,j,0,-0.62,0.13,0.36,C.dt9,A.dT,0)
D.fwY(g1,j,1.25,0,0.12,0.16,C.d8l,A.d0,0)
c2=j.hh(1.25,0.36,0)
b2=c2.a
c3=c2.b*0.22
t=f>0
if(t){$.T()
c4=B.L()
s=c3*4
c4.san(new B.bT(A.z,0.5,A.x,f7,0,B.a([A.bM.j(0.65*f),A.as.j(0.18*f),A.L],x.O),A_.SX,f7).az(0,B.bX(b2,s)))
g1.O(b2,s,c4)}c5=B.bX(b2,c3)
s=$.T()
n=B.L()
m=x.O
n.san(new B.bT(A.Mw,0.5,A.x,f7,0,t?B.a([A.c,A.bM,A.as],m):B.a([A.c.j(0.5),A.bP.j(0.35),A.aM.j(0.55)],m),f7,f7).az(0,c5))
g1.c1(c5,n)
c6=B.L()
c6.b=A.ac
c6.c=Math.max(1,c3*0.06)
c6.r=(t?A.c:A.iG).gp(0)
p=B.a([],p)
c7=new B.aH(s.r,A.aj,f7,f7,p)
s=b2.a
n=c3*0.35
l=s-n
k=b2.b
c8=k+c3*0.3
c7.E(new B.aZ(l,c8))
for(t=c3*0.12,c9=c3*0.14,d0=-c3,d1=d0*0.05,o=0;o<6;o=d2){d2=o+1
d3=(o&1)===0?d1:t
d3=new B.aq(l+c9*d2,k+d3)
p.push(d3)
d4=c7.f
if(d4!=null)d3.aj(d4)
c7.ac()}c7.E(new B.aq(s+n,c8))
g1.af(c7,c6)
t=B.bY(b2.a7(0,new B.r(d0*0.35,d0*0.4)),c3*0.25,c3*0.45)
$.T()
s=B.L()
s.r=A.c.j(0.6).gp(0)
g1.c1(t,s)
t=h>=0
if(t){for(o=14;o>=0;--o){d5=h-o*0.008
if(d5<0)continue
d6=D.fE1(d5)
d7=j.hh(d6.a,0.06,d6.b)
d8=1-o/15
$.T()
s=new B.as(A.T,A.Q,A.W,A.X,A.V)
s.r=A.hk.j(0.35*d8).gp(0)
g1.O(d7.a,d7.b*0.05*(0.4+0.6*d8),s)}d9=D.fE1(h)
e0=j.hh(d9.a,0.06,d9.b)
a6=e0.a
e1=e0.b*0.09
s=e1*3
$.T()
p=B.L()
p.san(new B.bT(A.z,0.5,A.x,f7,0,B.a([A.fC.j(0.7),A.aH.j(0.2),A.L],m),M.T4,f7).az(0,B.bX(a6,s)))
g1.O(a6,s,p)
p=B.L()
p.san(new B.bT(A.z,0.5,A.x,f7,0,C.dpm,f7,f7).az(0,B.bX(a6,e1)))
g1.O(a6,e1,p)
q=new B.e1()
q.cT(A.i.bc(g3*20))
for(s=a6.a,p=a6.b,n=e1*0.12,o=0;o<6;++o){d8=q.ai()*3.141592653589793*2
e2=e1*(1.2+q.ai()*1.6)
l=Math.cos(d8)
k=Math.sin(d8)
c8=Math.cos(d8)
c9=Math.sin(d8)
d0=new B.as(A.T,A.Q,A.W,A.X,A.V)
d0.c=Math.max(1,n)
d0.d=A.bF
d0.r=A.c.j(0.8).gp(0)
g1.ah(new B.r(s+l*e1,p+k*e1),new B.r(s+c8*e2,p+c9*e2),d0)}}if(g2.gdl()<90){u.restore()
return}e3=Math.min(g0,f9*0.6)
if(w<1.9){d8=A.i.D((w-0.2)/0.5,0,1)*(1-A.i.D((w-1.5)/0.4,0,1))
s=f9/2
D.Sp(g1,"NGMY ELECTRONICS LAB PRESENTS",new B.r(s,g0*0.08),e3*0.035,A.hk.j(d8),0.5,f7,e3*0.006,f8,A.u)
J.bs(u.save())
u.translate(0,(1-A.co.aA(0,A.i.D(A.i.D((w-0.4)/0.6,0,1),0,1)))*e3*0.05)
D.Sp(g1,"Spark Adventure",new B.r(s,g0*0.13),e3*0.1,A.c.j(d8),0.5,B.a([A.c,A.hk],m),0,f9*0.9,A.u)
u.restore()}if(w>=1.6&&w<2.6){e4="The switch closes"
e5=1}else{e5=2
if(t&&!g){e6=D.fE1(h)
e7=e6.a
if(e6.b>0.61&&e7>0.1)e4="The resistor slows the current"
else if(e7>1.24){e4="Almost at the bulb"
e5=3}else e4="Current flows from the battery"}else if(g&&w<7.6){e4="The bulb lights up!"
e5=4}else{e4=f7
e5=0}}if(e4!=null){b7=D.a4_(e4,B.l(f7,f7,A.c,f7,f7,f7,f7,f7,"Roboto",f7,f7,A.i.fO(e3*0.045*2)/2,f7,f7,A.F,f7,f7,!0,f7,f7,f7,f7,f7,f7,f7,f7),A.b8,f7,1,1/0)
e8=e3*0.025
e9=e3*0.06
t=f9*0.05
s=g0*0.66
p=b7.b
n=p.c
p=p.a.c
l=e3*0.04
f0=B.by(new B.a4(t,s,t+(e9+e8*3+n),s+(p.gb8(p)+e8*1.4)),new B.aP(l,l))
l=B.L()
l.r=A.v.j(0.6).gp(0)
g1.aq(f0,l)
l=B.L()
l.b=A.ac
l.c=1
l.r=A.aH.j(0.6).gp(0)
g1.aq(f0,l)
l=f0.a
p=e9/2
f1=new B.r(l+e8+p,f0.gbD().b)
s=B.L()
s.r=A.aH.gp(0)
g1.O(f1,p,s)
D.Sp(g1,""+e5,f1.aI(0,new B.r(0,e9*0.38)),e9*0.6,A.bC,0.5,f7,0,f8,A.u)
s=f0.gbD()
p=b7.b.a.c
b7.a4(g1,new B.r(l+e8*2+e9,s.b-p.gb8(p)/2))}if(w>=7.6){a7=A.i.D((w-7.6)/0.4,0,1)
t=B.L()
t.r=A.v.j(0.55*a7).gp(0)
g1.aE(v,t)
f2=A.ej.aA(0,A.i.D((w-7.7)/0.5,0,1))
f3=g0*0.3
J.bs(u.save())
t=f9/2
u.translate(t,f3)
g1.bV(0,0.75+0.25*f2)
u.translate(-f9/2,-f3)
s=e3*0.1
D.Sp(g1,"Build it yourself",new B.r(t,f3-e3*0.06),s,A.c.j(a7),0.5,B.a([A.c,A.hk],m),0,f9*0.9,A.u)
u.restore()
m=e3*0.05
D.Sp(g1,"NGMY Electronics Lab",new B.r(t,f3+e3*0.08),m,A.ab.j(0.85*a7),0.5,f7,0,f8,A.F)
f4=A.ej.aA(0,A.i.D((w-8.1)/0.4,0,1))
if(f4>0){f5=B.by(B.bY(new B.r(t,f3+e3*0.24),s,Math.max(f9*0.3,e3*0.55)*f4),new B.aP(m,m))
s=B.L()
p=f5.a
n=f5.c
s.san(C.ccE.az(0,new B.a4(p,f5.b,n,f5.d)))
g1.aq(f5,s)
if(f4>0.7)D.Sp(g1,"Open the Electronics Lab",new B.r(t,f5.gbD().b-e3*0.03),e3*0.045,A.c,0.5,f7,0,(n-p)*0.85,A.u)}}if(w<0.3)f6=1-w/0.3
else f6=w>9.7?(w-9.7)/0.3:0
if(f6>0){t=B.L()
t.r=A.v.j(A.i.D(f6,0,1)).gp(0)
g1.aE(v,t)}u.restore()},
fKa:function fKa(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
cX0:function cX0(d){var _=this
_.a=d
_.e=_.d=_.c=_.b=$},
fvF:function fvF(){},
hdG(d){var w
switch(d){case"lgtv":w="lg"
break
case"sonytv":w="sony"
break
case"appletv":w="apple"
break
case"bangtv":w="bo"
break
default:w="samsung"
break}return w},
iEq(d){var w
switch(D.hdG(d)){case"lg":w=A.hG
break
case"sony":w=A.d0
break
case"apple":w=A.bO
break
case"bo":w=C.wH
break
default:w=A.aH
break}return w},
auA:function auA(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
boR:function boR(){this.d=0
this.c=this.a=null},
eXd:function eXd(d,e){this.a=d
this.b=e},
eXe:function eXe(d,e){this.a=d
this.b=e},
eXa:function eXa(){},
eX9:function eX9(d){this.a=d},
eXb:function eXb(d){this.a=d},
eXc:function eXc(d){this.a=d},
eX7:function eX7(d){this.a=d},
eX8:function eX8(d,e){this.a=d
this.b=e},
b5G:function b5G(d,e,f){this.c=d
this.d=e
this.a=f},
bdh:function bdh(d){this.a=d},
ii4(){var w,v,u,t
try{v=$.en().gie().b
w=new B.ba(v,B.a3(v).k("ba<2>"))
if(w.a.a===0)v=2
else{J.fq(w)
v=$.ll()
u=v.d
v=u==null?v.ghs():u}return v}catch(t){return 2}},
hN1(d,e,f,g,h){var w,v,u,t,s,r,q,p,o,n,m,l,k=f.a
if(k<=0||f.b<=0)return
if($.bHe){w=d.c
J.bs(w.save())
w.clipRect(B.hQ(new B.a4(0,0,0+k,0+f.b)),$.lD()[1],!0)
h.$1(d)
w.restore()
return}v=A.i.bc(g*15)
u=$.Sl.X(0,e)
w=u==null
if(w||u.a!==v){t=f.b
s=Math.max(k,t)
r=A.i.D(Math.min(4*D.ii4(),1600/s),1,64)
$.T()
q=new B.oU(new B.oo())
p=B.v1(q,null)
p.bV(0,r)
h.$1(p)
o=q.mZ()
n=o.a8j(Math.max(1,A.i.S(k*r)),Math.max(1,A.i.S(t*r)))
o.t()
if(!w)u.b.t()
u=new D.bvI(v,n)}$.Sl.n(0,e,u)
for(w=new B.dq($.Sl,$.Sl.r,$.Sl.e),m=0;w.C();){t=w.d.b
m+=t.c*t.d}w=B.a3($.Sl).k("cq<1>")
for(;;){t=$.Sl.a
if(t>1)t=t>24||m>6e6
else t=!1
if(!t)break
l=new B.cq($.Sl,w).gae(0)
if(!l.C())B.bi(B.ff())
t=$.Sl.X(0,l.gP(0)).b
m-=t.c*t.d
t.t()}n=u.b
d.o9(n,new B.a4(0,0,n.c,n.d),new B.a4(0,0,0+k,0+f.b),$.hUe())},
bvI:function bvI(d,e){this.a=d
this.b=e},
i_v(d,e,f){var w=d.BYTES_PER_ELEMENT,v=(B.kt(e,f,A.o.ea(d.byteLength,w),null,null)-e)*w
if(A.o.F(v,4)!==0)throw B.Y(B.dK(y.a,null))
return J.a4N(A.ig.gaS(d),d.byteOffset+e*w,A.o.ao(v,4))},
hZq(d,e,f){var w=d.BYTES_PER_ELEMENT,v=(B.kt(e,f,A.o.ea(d.byteLength,w),null,null)-e)*w
if(A.o.F(v,4)!==0)throw B.Y(B.dK(y.a,null))
return J.aUp(A.pa.gaS(d),d.byteOffset+e*w,A.o.ao(v,4))},
hMo(){var w,v=null,u=$.T().r,t=x.v,s=new B.aH(u,A.aj,v,v,B.a([],t))
s.E(new B.aZ(0.5,0.33))
s.E(new B.i6(0.42,0.33,0.33,0.27,0.22,0.27))
s.E(new B.i6(0.08,0.27,-0.03,0.4,-0.03,0.58))
s.E(new B.i6(-0.03,0.78,0.09,0.98,0.19,1.06))
s.E(new B.i6(0.26,1.11,0.33,1.11,0.39,1.08))
s.E(new B.i6(0.45,1.05,0.55,1.05,0.61,1.08))
s.E(new B.i6(0.67,1.11,0.74,1.11,0.81,1.05))
s.E(new B.i6(0.88,0.98,0.95,0.88,0.99,0.79))
s.E(new B.i6(0.86,0.74,0.79,0.62,0.8,0.51))
s.E(new B.i6(0.81,0.42,0.86,0.36,0.92,0.33))
s.E(new B.i6(0.85,0.28,0.77,0.26,0.7,0.26))
s.E(new B.i6(0.61,0.26,0.56,0.33,0.5,0.33))
s.E(new B.bA())
w=new B.aH(u,A.aj,v,v,B.a([],t))
w.E(new B.aZ(0.49,0.25))
w.E(new B.i6(0.48,0.14,0.56,0.03,0.7,0))
w.E(new B.i6(0.71,0.12,0.62,0.23,0.49,0.25))
w.E(new B.bA())
t=new B.aH(u,A.aj,v,v,B.a([],t))
t.Ly(0,s,A.J)
t.Ly(0,w,A.J)
return t},
hOF(d){return C.dr1[A.o.D(d,0,7)]},
ajt(d){return d.j(A.i.fO(d.a*16)/16)},
a4_(d,e,f,g,h,i){var w,v,u=null,t=isFinite(i),s=new B.bto([d,e,h,g,f,t?A.i.fO(i*2)/2:-1]),r=$.aht.X(0,s)
if(r!=null){$.aht.n(0,s,r)
return r}w=B.h2(g,A.cL,u,h,u,B.d_(u,u,u,u,u,u,u,u,u,e,d),f,A.cf,u,A.e5,A.cg)
w.nA(t?A.i.fO(i*2)/2:1/0)
$.aht.n(0,s,w)
for(t=B.a3($.aht).k("cq<1>");$.aht.a>800;){v=new B.cq($.aht,t).gae(0)
if(!v.C())B.bi(B.ff())
$.aht.X(0,v.gP(0)).t()}return w}},C,N,F,Z,A_
J=c[1]
B=c[0]
A=c[2]
O=c[285]
P=c[352]
L=c[149]
G=c[53]
E=c[201]
M=c[324]
Q=c[330]
I=c[173]
R=c[130]
S=c[266]
T=c[161]
H=c[50]
U=c[198]
V=c[184]
W=c[158]
X=c[270]
Y=c[293]
K=c[211]
D=a.updateHolder(c[33],D)
C=c[156]
N=c[56]
F=c[154]
Z=c[128]
A_=c[325]
D.bT5.prototype={
bDg(d){var w=this,v=w.a
if(v!=null){v=B.bbB(w,v,"Vertices",new D.bT6(),x.J)
w.b!==$&&B.aS()
w.b=v}else{w.b!==$&&B.aS()
w.b=null}},
ga5Y(){if(this.c)throw B.Y(B.bc("Attempted to use a disposed Vertices."))
return this.a},
t(){if(this.c)return
var w=this.b
w===$&&B.d()
if(w!=null)w.t()
this.c=!0}}
D.cHa.prototype={
a9(){return"VertexMode."+this.b}}
D.apZ.prototype={
a9(){return"NgmyAdHero."+this.b}}
D.i8.prototype={}
D.rY.prototype={}
D.b0o.prototype={}
D.Jb.prototype={
B(d){var w,v,u,t,s=null,r=B.aF(d,A.bX,x.w).w,q=B.n(24),p=this.c,o=p.e,n=B.K(o.j(0.45),A.r,1),m=B.a([new B.aa(0,A.H,o.j(0.25),A.J,30)],x.V),l=p.d,k=B.a([l,o],x.O),j=A.c.j(0.22),i=B.n(14),h=x.p
k=B.a([B.p(s,B.A(B.a([B.p(s,B.W(p.c,A.c,s,s,s,28),A.f,s,s,new B.o(j,s,s,i,s,s,A.m),s,48,s,s,s,s,s,48),A.bc,B.E(B.x(B.a([B.c(p.b,s,s,s,s,s,s,A.dt,s,s,s),A.bw,B.c(p.f+" "+p.r,s,s,s,s,s,s,B.l(s,s,A.c.j(0.85),s,s,s,s,s,s,s,s,12.5,s,s,A.P,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],h),A.B,s,A.e,A.h,0,A.p),1)],h),A.l,s,A.e,A.h,0,s,s),A.f,s,s,new B.o(s,s,s,s,s,new B.a8(A.ay,A.aD,A.x,k,s,s),A.m),s,s,s,s,A.Pi,s,s,s),new B.D(K.aon,B.c(p.w,s,s,s,s,s,s,C.fQw,s,s,s),s)],h)
for(j=p.x,w=0;w<3;++w){v=j[w]
i=B.ap(l,A.v,0.4)
i.toString
k.push(new B.D(C.bIt,new B.c2(A.aK,A.e,A.h,A.l,s,A.p,s,0,B.a([B.p(s,B.W(A.hn,i,s,s,s,14),A.f,s,s,new B.o(o,s,s,s,s,s,A.a6),s,20,s,s,s,s,s,20),A.ar,new B.bx(1,A.ba,B.c(v,s,s,s,s,s,s,A.LE,s,s,s),s)],h),s),s))}j=o.j(0.12)
i=B.n(14)
u=B.K(o.j(0.4),A.r,1)
t=B.ap(o,A.c,0.2)
t.toString
k.push(B.p(s,B.A(B.a([B.W(A.mu,t,s,s,s,20),A.aa,B.E(B.x(B.a([C.hc6,A.bw,B.c(p.cx,s,s,s,s,s,s,A.kS,s,s,s)],h),A.B,s,A.e,A.h,0,A.p),1)],h),A.l,s,A.e,A.h,0,s,s),A.f,s,s,new B.o(j,s,u,i,s,s,A.m),s,s,C.hH1,C.bI5,A.bg,s,s,s))
i=B.E(B.ep(C.c0E,C.hHL,C.hfx,this.d,B.dk(s,s,s,s,s,s,s,s,s,A.c,s,s,A.kK,s,new B.b9(B.n(14),A.a1),K.afO,s,s,s,s)),1)
l=B.ap(l,A.v,0.5)
l.toString
k.push(new B.D(A.x4,B.A(B.a([i,A.ar,B.E(B.bI(A.adn,C.hGj,new D.c5U(d),B.bp(o,s,s,s,l,s,A.kK,s,new B.b9(B.n(14),A.a1),s,s,s)),1)],h),A.l,s,A.e,A.h,0,s,s),s))
return B.bo(!0,B.at(new B.cR(new B.aY(0,520,0,r.a.b*0.9),B.p(s,B.ca(B.x(k,A.am,s,A.e,A.M,0,A.p),A.t,s,A.y,s,s,s,s,s,A.ah),A.aq,s,s,new B.o(A.ZT,s,n,q,m,s,A.m),s,s,C.hGR,O.ty,s,s,s,s),s),1,s,s),!0,!1,A.ag,!0,!1)}}
D.wF.prototype={}
D.yy.prototype={}
D.Y7.prototype={
R(){return new D.aHD(K.B3,null,null)}}
D.aHD.prototype={
gQR(){var w,v=this,u=v.d
if(u===$){w=B.br(null,A.oO,null,1,null,v)
w.ct(0)
v.d!==$&&B.bF()
v.d=w
u=w}return u},
gyl(){var w=this.e
return w===$?this.e=this.a.e:w},
gaSr(){var w=this.as
if(w===$)w=this.as=this.a.f?3:0
return w},
gBu(){var w=this.gQR().y
w=w==null?null:A.o.ao(w.a,1000)
return(w==null?0:w)/1000},
gay_(){var w=this.f
return w>=0&&C.iv[w].e===-1},
agb(){var w,v,u=this
if(u.r)return null
w=u.f
if(w>=0){v=C.iv[w].e
if(v===-2)return null
if(v===-1)return A.o.F(u.ay+A.i.bc(Math.max(0,u.gBu()-u.ch)/10),14)
return v}v=C.aKV.h(0,A.o.F(u.gyl(),10))
return v==null?null:D.hOF(v)},
ced(d,e){if(e.a<=0||e.b<=0)return
this.l(new D.eXv(this,d,e))
H.dF(660,"",90,0,0.25,"tri")},
ce9(d){this.l(new D.eXm(this,d,14))
H.dF(900,"",40,0,0.25,"noise")},
ceb(){this.l(new D.eXu(this))
this.Xp()},
agd(){return this.c6a()},
c6a(){var w=0,v=B.j(x.o),u,t=this,s,r,q
var $async$agd=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r={}
q=t.agb()
if(q==null){w=1
break}s=t.Q
if(s!=null)s.a1(0)
t.l(t.gbcA())
r.a=!1
s=t.c
s.toString
w=3
return B.b(B.bU(A.L,null,new D.eXj(r,q),s,!0,!0,!0,null,!1,!1,x.o),$async$agd)
case 3:if(t.c==null){w=1
break}if(r.a)t.ceb()
else t.Xp()
case 1:return B.h(u,v)}})
return B.i($async$agd,v)},
Xp(){var w=this,v=w.Q
if(v!=null)v.a1(0)
w.Q=B.cA(B.dy(0,0,0,0,0,w.gaSr()>0&&w.gBu()<3.2?13:10),w.gcax())},
cay(){var w=this
if(w.c==null)return
if(w.f<0&&!w.r){w.l(new D.eXk(w))
H.dF(900,"",40,0,0.2,"noise")}w.Xp()},
a_(){var w=this
w.a3()
w.w=B.cA(w.a.r,w.gb2u())
w.Xp()
H.dF(520,"",80,0,0.25,"tri")},
ce6(){var w=this.c
if(w!=null&&B.a7(w,!1).q7()){w=this.c
w.toString
B.a7(w,!1).N(this.gyl())}},
BY(){var w=this.w
if(w!=null)w.a1(0)
this.w=null},
agc(d){this.l(new D.eXh(this,d))
H.dF(900,"",40,0,0.3,"noise")},
b2w(d){this.l(new D.eXl(this,d))
H.dF(700,"",60,0,0.3,"tri")},
t(){var w,v=this
if(v.y){G.D9(E.Ll)
G.bGX()}w=v.w
if(w!=null)w.a1(0)
w=v.Q
if(w!=null)w.a1(0)
v.gQR().t()
v.bBK()},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.y,i=!j||!l.z
j=j?B.aF(d,A.dK,x.w).w.r.b+26:10
w=l.cec(A.cB,"Back to the board",l.gb2u())
v=l.y
u=v?T.Io:A.xl
v=v?"Leave full screen":"Full screen"
v=l.b2x(u,v,l.gcee(),C.hHC)
u=B.n(20)
t=l.f
s=l.a
r=x.p
q=new B.D(new B.R(10,j,10,0),B.A(B.a([w,A.aa,v,A.aa,B.E(new B.bK(A.a9,k,k,B.p(k,B.c(t>=0?s.c+" \xb7 "+C.iv[t].a:s.c+" \xb7 CH "+(l.gyl()+1),k,1,A.a2,k,k,k,V.y3,k,k,k),A.f,k,k,new B.o(A.b7,k,k,u,k,k,A.m),k,k,k,k,A.lX,k,k,k),k),1)],r),A.l,k,A.e,A.h,0,k,k),k)
p=new B.ax(l.gb2v(),6,A.r,-1)
if(l.y)j=A.agu
else{j=B.n(10)
j=new B.o(k,k,new B.bE(p,p,new B.ax(l.gb2v(),16,A.r,-1),p),j,B.a([new B.aa(0,A.H,D.iEq(l.a.d).j(0.25),A.J,40)],x.V),k,A.m)}j=B.a([B.p(k,B.bw(B.n(l.y?0:4),B.ce(new D.eXB(l,i)),A.aq),A.f,k,k,j,k,k,C.hHw,k,k,k,k,k)],r)
if(!l.y)j.push(B.ao(0,new B.du(!0,B.at(new D.b5G(l.a.d,9.92,k),k,k,k),k),16,k,0,0,k,k))
o=B.at(new B.fL(1.7777777777777777,new B.an(A.a0,k,A.b4,A.t,j,k),k),k,k,k)
j=l.y
w=!j
v=j?l.gb2y():k
if(j){j=i?1:0
r=new B.an(A.a0,k,A.b4,A.t,B.a([o,B.ao(k,B.xL(new B.du(!i,q,k),A.b_,A.ia,j),k,k,0,0,0,k)],r),k)
j=r}else{j=l.cea()
u=B.E(new B.D(A.fD,o,k),1)
t=A.v.j(0.65)
s=B.n(18)
n=l.f
n=B.c(n>=0?C.iv[n].a:C.Tt[l.gyl()].a,k,k,k,k,k,k,A.hs,A.K,k,k)
m=l.f
j=B.x(B.a([q,A.ak,j,A.N,u,B.p(k,B.x(B.a([n,B.c(m>=0?C.iv[m].c:C.Tt[l.gyl()].b,k,k,k,k,k,k,W.acR,A.K,k,k)],r),A.l,k,A.e,A.M,0,A.p),A.f,k,k,new B.o(t,k,k,s,k,k,A.m),k,k,C.hHc,X.HC,A.bS,k,k,k)],r),A.l,k,A.e,A.h,0,A.p)}return B.c5(k,A.v,B.bo(w,B.aA(A.c0,j,A.y,!1,k,v,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,new D.eXC(l),k,k,k,k,k,k,!1,A.a4),w,!1,A.ag,w,w),k,!1,!1,k,k)},
cef(){var w=!this.y
this.l(new D.eXw(this,w))
if(w){G.D9(E.aci)
G.hpr(!0)}else{G.D9(E.Ll)
G.bGX()}},
ceg(){var w,v=this
B.jD()
v.l(new D.eXx(v))
w=v.c.K(x.q).f
w.ME()
if(v.z)w.T(C.aWt)},
cea(){var w=this,v=null,u=new D.eXt(),t=A.v.j(0.72),s=B.n(22),r=B.K(A.aH.j(0.5),A.r,1)
return B.p(v,B.A(B.a([u.$3(A.xq,"CH \u2212",new D.eXo(w)),u.$3(A.ic,"CH +",new D.eXp(w)),u.$5$color$on(A.It,"TV",new D.eXq(w),A.aH,w.f<0),u.$5$color$on(A.zS,"APPS",new D.eXr(w),A.bl,w.r),u.$5$color$on(A.zV,"ADS",new D.eXs(w),A.c3,w.f===0)],x.p),A.l,v,A.e,A.M,0,v,v),A.f,v,v,new B.o(t,v,r,s,v,v,A.m),v,v,v,v,A.Pt,v,v,v)},
bHq(){return new D.auA(this.a.d,this.gce8(),new D.eXg(this),null)},
gb2v(){switch(D.hdG(this.a.d)){case"apple":var w=A.d0
break
case"bo":w=C.Ci
break
case"sony":w=C.biy
break
case"lg":w=A.ex
break
default:w=A.cw
break}return w},
b2x(d,e,f,g){var w=null,v=B.nm(w,A.b7,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w)
return B.aI(w,w,w,w,B.W(d,A.c,w,w,w,w),w,w,g,f,w,w,w,v,e,w)},
cec(d,e,f){return this.b2x(d,e,f,null)}}
D.bz2.prototype={
a4(d,e){var w=this
return D.h4f(d,e,w.b,w.d,w.e,w.c,w.r,w.f)},
aD(d){return!0}}
D.aPy.prototype={
t(){var w=this,v=w.aa$
if(v!=null)v.a8(0,w.gbB())
w.aa$=null
w.a2()},
aZ(){this.b7()
this.b5()
this.bC()}}
D.cX0.prototype={
hh(d,e,f){var w,v,u,t,s,r,q=this,p=q.b
p===$&&B.d()
w=Math.cos(p)
v=Math.sin(p)
u=d*v+f*w
p=q.c
p===$&&B.d()
t=Math.cos(p)
s=Math.sin(p)
p=q.d
p===$&&B.d()
r=p/(6+u*t-e*s)
p=q.e
p===$&&B.d()
return new B.y(new B.r(p.a+(d*w-f*v)*r,p.b-(e*t+u*s)*r+q.a.b*0.03),r)},
ga0(d){return this.a}}
D.auA.prototype={
R(){return new D.boR()},
a7w(d,e){return this.d.$1(e)}}
D.boR.prototype={
b2z(d){this.l(new D.eXd(this,d))
this.a.a7w(0,d)},
B(d){var w,v=this
switch(D.hdG(v.a.c)){case"lg":w=v.c6r()
break
case"sony":w=v.cEg()
break
case"apple":w=v.ceh()
break
case"bo":w=v.bIo()
break
default:w=v.cyn()
break}return w},
gage(){var w=new B.V(Date.now(),0,!1)
return A.a.b0(A.o.v(B.d7(w)),2,"0")+":"+A.a.b0(A.o.v(B.fH(w)),2,"0")},
aAa(d,e,f,g,h,i,j){var w,v,u=null,t=C.iv[d],s=this.d===d,r=t.d,q=B.ap(r,A.v,0.55)
q.toString
q=B.a([r,q],x.O)
r=B.n(h)
if(s)w=i
else w=A.L
w=B.K(w,A.r,s?2.5:0)
v=B.a([B.c(t.b,u,u,u,u,u,u,B.l(u,u,u,u,u,u,u,u,u,u,u,e,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],x.p)
if(g)v.push(new B.D(A.v8,B.c(t.a,u,1,A.a2,u,u,u,A.X1,u,u,u),u))
return B.aA(u,B.p(u,B.x(v,A.l,u,A.b9,A.h,0,A.p),A.f,u,u,new B.o(u,u,w,r,u,new B.a8(A.ay,A.aD,A.x,q,u,u),A.m),u,f,u,u,u,u,u,j),A.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new D.eXe(this,d),u,u,u,u,u,u,!1,A.a4)},
b2A(d,e,f,g,h,i){return this.aAa(d,e,f,!1,g,h,i)},
cyn(){var w,v,u,t,s,r,q=this,p=null,o=q.a.e,n=x.p,m=B.A(B.a([C.h1I,A.aa,C.fUs,A.aV,C.c4o,A.aa,C.c_T,A.aa,B.c(q.gage(),p,p,p,p,p,p,C.aYH,p,p,p)],n),A.l,p,A.e,A.h,0,p,p),l=C.iv[q.d],k=B.c(l.a,p,p,p,p,p,p,A.kS,p,p,p)
l=B.c(l.c,p,1,A.a2,p,p,p,C.fLw,p,p,p)
w=A.c.j(0.08)
v=B.a([],n)
for(u=0;u<2;++u){t=new B.aP(8,8)
v.push(B.p(p,B.W(C.czC[u],A.ab,p,p,p,17),A.f,p,p,new B.o(A.bx,p,p,new B.bb(t,t,t,t),p,p,A.m),p,34,p,A.P0,p,p,p,34))}t=B.a([],n)
for(s=0;s<8;++s){r=q.d===s?1.12:1
t.push(new B.D(A.P0,new B.zA(q.aAa(s,14,44,!0,8,A.aH,52),r,A.b_,A.ha,p,p),p))}v.push(B.E(B.ca(B.A(t,A.l,p,A.e,A.h,0,p,p),A.t,p,A.y,p,p,p,p,p,A.aK),1))
return B.aA(p,B.p(p,B.x(B.a([m,A.aV,new B.bK(A.a5,p,p,k,p),new B.bK(A.a5,p,p,l,p),A.ak,B.p(p,B.A(v,A.l,p,A.e,A.h,0,p,p),A.f,p,p,new B.o(w,p,p,A.YO,p,p,A.m),p,p,p,p,R.Pq,p,p,p)],n),A.l,p,A.e,A.h,0,A.p),A.f,p,p,C.ba9,p,p,p,p,E.ank,p,p,p),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,o,p,p,p,p,p,p,!1,A.a4)},
c6r(){var w=null,v=this.a.e,u=x.p
return B.aA(w,B.p(w,B.x(B.a([B.A(B.a([B.p(w,C.h7X,A.f,w,w,new B.o(A.hG,w,w,B.n(10),w,w,A.m),w,w,w,w,A.nf,w,w,w),A.bb,C.h0A,A.aV,B.c(this.gage(),w,w,w,w,w,w,A.Ft,w,w,w)],u),A.l,w,A.e,A.h,0,w,w),A.aV,new B.a6(w,62,B.hV(A.t,w,new D.eX9(this),8,w,w,A.aK,new D.eXa(),!1),w)],u),A.B,w,A.e,A.h,0,A.p),A.f,w,w,C.bak,w,w,w,w,P.P6,w,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,v,w,w,w,w,w,w,!1,A.a4)},
cEg(){var w,v,u,t,s=this,r=null,q=C.iv[s.d],p=s.a.e,o=x.p,n=B.a([B.p(r,C.fnY,A.f,r,r,new B.o(A.dv,r,r,B.n(12),r,r,A.m),r,r,r,r,A.zA,r,r,r),A.aa],o)
for(w=0;w<3;++w){v=C.dwJ[w]
u=v==="Apps"?A.c:A.aF
n.push(new B.D(A.j3,B.c(v,r,r,r,r,r,r,new B.H(!0,u,r,r,r,r,9.5,A.P,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r),r,r,r),r))}n.push(A.aV)
n.push(B.c(s.gage(),r,r,r,r,r,r,C.fKT,r,r,r))
n=B.A(n,A.l,r,A.e,A.h,0,r,r)
u=q.d
t=B.ap(u,A.v,0.7)
t.toString
t=B.a([u,t],x.O)
u=B.n(10)
return B.aA(r,B.p(r,B.x(B.a([n,A.fP,B.E(B.A(B.a([B.E(B.p(r,B.x(B.a([B.c(q.b,r,r,r,r,r,r,A.qq,r,r,r),B.c(q.a,r,r,r,r,r,r,A.on,r,r,r),B.c(q.c,r,2,A.a2,r,r,r,C.fRK,r,r,r),A.cO,B.aA(r,B.p(r,C.fYj,A.f,r,r,new B.o(A.c,r,r,B.n(10),r,r,A.m),r,r,r,r,A.zA,r,r,r),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new D.eXb(s),r,r,r,r,r,r,!1,A.a4)],o),A.B,r,A.mD,A.h,0,A.p),A.f,r,r,new B.o(r,r,r,u,r,new B.a8(A.a5,A.a9,A.x,t,r,r),A.m),r,r,r,r,A.ct,r,r,r),5),A.aa,B.E(B.iK(!0,r,r,A.y,C.fv8,new D.eXc(s),8,A.ag,r,A.ah,!1),6)],o),A.l,r,A.e,A.h,0,r,r),1)],o),A.B,r,A.e,A.h,0,A.p),A.f,C.bvI,r,r,r,r,r,r,A.fN,r,r,r),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,p,r,r,r,r,r,r,!1,A.a4)},
ceh(){var w,v,u,t,s=this,r=null,q=s.a.e,p=x.p,o=B.A(B.a([C.c5_,A.pj,C.hed,A.aV,B.c(s.gage(),r,r,r,r,r,r,A.Fw,r,r,r)],p),A.l,r,A.e,A.h,0,r,r),n=B.a([],p)
for(w=0;w<8;++w){v=s.d===w
u=v?6:0
t=v?C.dD0:A.TC
v=v?1.18:1
n.push(new B.D(A.fd,B.cV(r,new B.zA(s.b2A(w,20,44,12,A.c,44),v,A.b_,A.eK,r,r),r,r,A.b_,new B.o(r,r,r,r,t,r,A.m),A.eK,r,r,r,new B.R(0,0,0,u),r,r,r,r),r))}return B.aA(r,B.p(r,B.x(B.a([o,A.aV,new B.a6(r,68,B.ca(B.A(n,A.dC,r,A.e,A.h,0,r,r),A.t,r,A.y,r,r,r,r,r,A.aK),r),A.au,B.c(C.iv[s.d].a,r,r,r,r,r,r,A.pn,r,r,r)],p),A.l,r,A.e,A.h,0,A.p),A.f,r,r,C.bab,r,r,r,r,C.anl,r,r,r),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,!1,A.a4)},
bIo(){var w,v,u,t,s,r,q=this,p=null,o=q.a.e,n=C.iv[q.d],m=x.p
n=B.E(B.x(B.a([C.fXR,A.aV,B.c(n.b,p,p,p,p,p,p,A.mM,p,p,p),A.au,B.c(n.a,p,p,p,p,p,p,C.fCE,p,p,p),A.bw,B.c(n.c,p,p,p,p,p,p,C.fS2,p,p,p),A.ak,B.aA(p,B.p(p,C.hgo,A.f,p,p,C.baH,p,p,p,p,C.bEt,p,p,p),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new D.eX7(q),p,p,p,p,p,p,!1,A.a4),A.aV],m),A.B,p,A.e,A.h,0,A.p),4)
w=B.p(p,p,A.f,C.btk,p,p,p,p,p,A.f2,p,p,p,0.6)
v=B.a([],m)
for(u=0;u<8;++u){t=C.iv[u]
s=q.d===u
r=s?C.wH:C.ai0
s=s?12:10.5
v.push(B.aA(p,new B.D(A.va,B.c(t.a,p,p,p,p,p,p,new B.H(!0,r,p,"serif",p,p,s,A.kh,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p),p,p,p),p),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new D.eX8(q,u),p,p,p,p,p,p,!1,A.a4))}return B.aA(p,B.p(p,B.A(B.a([n,w,B.E(B.cn(v,p,p,p,p,p,A.ah,!1),3)],m),A.l,p,A.e,A.h,0,p,p),A.f,C.bzC,p,p,p,p,p,p,A.HL,p,p,p),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,o,p,p,p,p,p,p,!1,A.a4)}}
D.b5G.prototype={
B(d){var w,v,u=null,t=D.hdG(this.c)
if(t==="apple"){w=this.d
return new B.a6(w/1.1,w,B.b4(u,u,u,new D.bdh(u),A.az),C.hGs)}switch(t){case"lg":w=C.aTD
break
case"sony":w=C.aTv
break
case"bo":w=C.aTx
break
default:w=C.f_r
break}v=this.d
return B.c(w.a,C.hGe,u,u,u,u,u,B.l(u,u,w.b,u,u,u,u,u,u,u,u,v*0.82,u,u,A.F,u,1,!0,u,v*0.08,u,u,u,u,u,u),u,u,u)}}
D.bdh.prototype={
a4(d,e){var w,v
d.nK(0,e.a,e.b/1.1)
w=D.hMo()
$.T()
v=B.L()
v.r=A.cT.gp(0)
d.af(w,v)},
aD(d){return!1}}
D.bvI.prototype={}
var z=a.updateTypes(["~()","Y7(Z,bz<G>,bz<G>)","ay<~>()","~(F)","Jb(Z)"])
D.bT6.prototype={
$1(d){d.a.delete()
return null},
$S:1572}
D.fKb.prototype={
$1(d){var w,v,u,t=this,s=t.a
if(s==null)s=null
else{w=t.b
v=t.d
u=w.a-t.c*A.i.D(v,0,4000)
w=w.b
w=new B.a8(A.a5,A.a9,A.x,s,null,null).az(0,new B.a4(u,w,u+A.i.D(v,1,4000),w+d))
s=w}return s},
$S:1573}
D.fE_.prototype={
$1(d){return","},
$S:57}
D.fyZ.prototype={
$2(d,e){var w,v=this,u=v.a,t=u.c
J.bs(t.save())
w=v.b
t.translate(w.a,w.b)
u.aA(0,D.hn0(v.c*3,v.d,-0.12,d).a)
e.$0()
t.restore()},
$S:1574}
D.fz_.prototype={
$0(){var w=this.a
w.nK(0,-1,1)
D.fyY(w,this.b,this.c,!0)},
$S:0}
D.fz0.prototype={
$0(){return this.a.af(this.b,this.c)},
$S:0}
D.fz1.prototype={
$0(){var w,v,u,t,s=this,r=s.a,q=s.c
D.fyY(r,s.b,q,!1)
w=s.d
if(w>0&&w<1){r.mz(0,s.e)
v=-q
w=v*3+w*q*6-q*0.5
v*=2
u=w+q
$.T()
t=B.L()
t.san(new B.a8(A.a5,A.a9,A.x,B.a([A.c.j(0),A.c.j(0.45),A.c.j(0)],x.O),null,null).az(0,new B.a4(w,0,u,1)))
r.aE(new B.a4(w,v,u,v+q*4),t)}},
$S:0}
D.fz2.prototype={
$0(){return D.fyY(this.a,this.b,this.c,!1)},
$S:0}
D.fz3.prototype={
$0(){return this.a.af(this.b,this.c)},
$S:0}
D.fz4.prototype={
$0(){var w=this.a
w.nK(0,-1,1)
D.fyY(w,this.b,this.c,!0)},
$S:0}
D.h44.prototype={
$1(d){var w=this,v=w.b
d.bV(0,1/v)
D.hqN(d,new B.av(w.c*v,w.d*v),w.e,w.a.a,w.f,null)},
$S:338}
D.h45.prototype={
$0(){var w=this,v=w.e
return D.ms(w.a,w.b.b.toUpperCase(),new B.r(w.c,w.d),v*0.036,w.f,w.w,null,v*0.006,w.r,A.u)},
$S:0}
D.h46.prototype={
$0(){var w=this,v=w.e
return D.ms(w.a,w.b.f,new B.r(w.c,w.d),v,A.c,w.r,null,-v*0.02,w.f,A.u)},
$S:0}
D.h47.prototype={
$0(){var w=this,v=w.b,u=w.e,t=B.ap(v.e,A.c,0.35)
t.toString
return D.ms(w.a,v.r,new B.r(w.c,w.d),u,A.c,w.r,B.a([A.c,t],x.O),-u*0.02,w.f,A.u)},
$S:0}
D.h48.prototype={
$0(){var w=this,v=w.e
return D.ms(w.a,w.b.b.toUpperCase(),new B.r(w.c,w.d),v*0.036,w.f,w.w,null,v*0.006,w.r,A.u)},
$S:0}
D.h49.prototype={
$0(){var w=this,v=w.e
return D.ms(w.a,w.b.b.toUpperCase(),new B.r(w.c,w.d),v*0.036,w.f,w.w,null,v*0.006,w.r,A.u)},
$S:0}
D.c5U.prototype={
$0(){return B.a7(this.a,!1).e3()},
$S:0}
D.fK3.prototype={
$1(d){var w=null,v=B.h2(w,A.cL,w,1,w,B.d_(w,w,w,w,w,w,w,w,w,B.l(w,w,this.b,w,w,w,w,w,w,w,w,d,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),this.a),A.a7,A.cf,w,A.e5,A.cg)
v.eY()
return v},
$S:342}
D.h43.prototype={
$1(d){var w=this.b,v=B.kZ(this.a,w,d)
v.toString
w=B.kZ(w,this.c,d)
w.toString
w=B.kZ(v,w,d)
w.toString
return w},
$S:1577}
D.fAy.prototype={
$1(d){var w=null,v=D.ajt(this.b),u=A.i.fO(d*2)
return D.a4_(this.a,B.l(w,w,v,w,w,w,w,w,w,w,w,u/2,w,w,A.u,w,w,!0,w,this.d,w,w,w,w,w,w),A.b8,w,1,1/0)},
$S:342}
D.h4g.prototype={
$1(d){var w,v=this,u=v.a
d.bV(0,1/u)
w=v.b
D.h4f(d,new B.av(w.a*u,w.b*u),v.c,v.d,v.e,v.f,v.w,v.r)},
$S:338}
D.fyb.prototype={
$1(d){var w=this,v=null,u=D.ajt(w.b),t=A.i.fO(d*2),s=w.c?A.u:A.P
return D.a4_(w.a,B.l(v,v,u,v,v,v,v,v,v,v,v,t/2,v,v,s,v,v,!0,v,w.d,v,v,v,v,v,v),A.b8,v,1,1/0)},
$S:342}
D.fKu.prototype={
$2(d,e){return A.i.D((this.a-d)/e,0,1)},
$S:80}
D.fKq.prototype={
$1(d){return A.dQ.aA(0,d)},
$S:5}
D.fKt.prototype={
$2(d,e){var w=this.b
return new B.r(this.a+d*w,e*w)},
$S:671}
D.fKr.prototype={
$5(d,e,f,g,h){var w,v,u,t,s,r,q,p=this,o=p.a.$2(h,0.6)
if(o<=0)return
w=p.b
v=w.c
J.bs(v.save())
v.translate(f.a,f.b)
w.bV(0,A.i.D(A.nA.aA(0,o),0.01,1.3))
u=p.c
N.hqM(w,A.J,g,d,u,p.d>9.5?0.5+0.3*Math.sin(u*3+d):0)
u=new B.r(0,g*1.42)
t=B.bY(u,g*0.62,g*2.5)
s=g*0.31
r=B.by(t,new B.aP(s,s))
$.T()
q=B.L()
q.r=A.c.gp(0)
w.aq(r,q)
w.aq(B.by(t,new B.aP(s,s)),N.ai_(A.bB,g*0.05))
D.ipV(w,"\u2665 "+e,u,g*0.4,A.qC,g*2.2)
v.restore()},
$S:1578}
D.fKs.prototype={
$3(d,e,f){var w,v,u,t,s=this.a.$2(f,0.5)
if(s<=0)return
w=A.i.D(A.nA.aA(0,s),0.01,1.3)*(1+0.07*Math.sin(this.b*6))
v=this.c
u=e*w
$.T()
t=B.L()
t.r=A.bB.gp(0)
v.O(d,u,t)
t=B.L()
t.b=A.ac
t.c=2
t.r=A.c.gp(0)
v.O(d,u,t)
D.aRZ(v,"\u2665",d.aI(0,new B.r(e*0.5*w,e*0.62*w)),e*1.3*w,A.c,A.b8,0,null)},
$S:425}
D.fKv.prototype={
$2(d,e){var w,v,u=this.a,t=u.a
u=u.c-t
t+=u*0.08
w=this.b
v=w*d
return new B.a4(t,v,t+u*0.84,v+w*e)},
$S:1580}
D.hcF.prototype={
$3(d,e,f){var w=this
return new D.Y7(w.d,w.e,w.a,w.c,w.b,null)},
$C:"$3",
$R:3,
$S:z+1}
D.hcG.prototype={
$4(d,e,f,g){var w=x.t
return new B.da(e,!1,B.iC(A.z,g,null,new B.bk(B.cK(A.co,e,null),new B.bq(0.85,1,w),w.k("bk<bR.T>"))),null)},
$C:"$4",
$R:4,
$S:34}
D.eXv.prototype={
$0(){var w=this.a,v=this.b,u=this.c
w.ax=new B.r(v.a/u.a,v.b/u.b)
w.at=w.gBu()
w.BY()},
$S:0}
D.eXm.prototype={
$0(){var w,v=this.a
v.f=0
v.r=!1
w=this.c
v.ay=A.o.F(A.o.F(this.b,w)+w,w)
v.ch=v.gBu()
v.BY()},
$S:0}
D.eXu.prototype={
$0(){var w,v=this.a
if(v.gay_()){w=v.agb()
v.ay=w==null?v.ay:w
v.ch=v.gBu()}else{v.as=v.gBu()
v.x=Math.max(1,v.x)}v.BY()},
$S:0}
D.eXj.prototype={
$1(d){return new D.Jb(C.T_[this.b],new D.eXi(this.a,d),null)},
$S:z+4}
D.eXi.prototype={
$0(){this.a.a=!0
B.a7(this.b,!1).e3()},
$S:0}
D.eXk.prototype={
$0(){var w,v=this.a
v.e=A.o.F(v.gyl()+1,10)
w=v.gQR().y
w=w==null?null:A.o.ao(w.a,1000)
v.x=w==null?1:w
v.as=v.gBu()},
$S:0}
D.eXh.prototype={
$0(){var w,v=this.a
v.f=-1
v.e=A.o.F(v.gyl()+this.b,10)
if(v.gyl()<0)v.e=v.gyl()+10
w=v.gQR().y
w=w==null?null:A.o.ao(w.a,1000)
v.x=w==null?1:w
v.as=v.gBu()
v.Xp()
v.BY()},
$S:0}
D.eXl.prototype={
$0(){var w=this.a
w.f=this.b
w.r=!1
w.ay=0
w.ch=w.gBu()
w.BY()},
$S:0}
D.eXB.prototype={
$2(d,e){var w,v,u=null,t=e.d*0.14,s=A.i.D(t*0.62,18,30),r=this.a,q=r.y?r.gb2y():u,p=x.p
q=B.a([B.aA(A.c0,B.c9(r.gQR(),new D.eXy(r),u),A.y,!1,C.hHB,q,u,u,u,new D.eXz(r),u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new D.eXA(r,e),u,u,u,!1,A.a4)],p)
if(r.r)q.push(r.bHq())
if(this.b&&!r.r&&r.agb()!=null){w=A.c.j(0.92)
v=s*0.42
q.push(B.ao(t/2-s/2,B.aG(!1,A.a3,!0,u,B.aM(!1,u,!0,new B.D(new B.R(v,0,v,0),B.A(B.a([B.W(A.kM,A.aw,u,u,u,s*0.55),new B.a6(s*0.18,u,u,u),B.c("Learn more",u,u,u,u,u,u,B.l(u,u,A.aw,u,u,u,u,u,u,u,u,s*0.44,u,u,A.F,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],p),A.l,u,A.e,A.M,0,u,u),u),A.nr,!0,u,u,u,u,C.hHj,u,u,u,u,u,u,r.gce7(),u,u,u,u,u,u,u),A.f,w,0,u,u,A.nr,u,u,A.ai),s,u,u,t*0.3,u,u))}return new B.an(A.a0,u,A.b4,A.t,q,u)},
$S:62}
D.eXA.prototype={
$1(d){var w=this.b
return this.a.ced(d.b,new B.av(B.aT(1/0,w.a,w.b),B.aT(1/0,w.c,w.d)))},
$S:56}
D.eXz.prototype={
$1(d){var w,v,u,t=d.d
if(t==null)t=0
if(Math.abs(t)>120){w=this.a
v=t<0?1:-1
if(w.gay_()){u=w.agb()
w.ce9((u==null?0:u)+v)}else w.agc(v)}},
$S:38}
D.eXy.prototype={
$2(d,e){var w,v,u,t,s,r=null,q=this.a,p=q.gQR().y,o=p==null?r:A.o.ao(p.a,1000),n=(o==null?0:o)/1000,m=q.x===0&&q.a.f?n:99
p=n-q.at
w=p<1.4?new D.b0o(q.ax,p):r
v=q.gay_()
u=Math.max(0,n-q.ch)
t=v?A.o.F(q.ay+A.i.bc(u/10),14):r
if(v)s=u
else s=m<3?n:Math.max(0,n-q.gaSr())
return B.b4(r,r,r,new D.bz2(q.gyl(),q.f,s,m,w,t,r),A.hf)},
$S:58}
D.eXC.prototype={
$0(){var w=this.a
return w.l(w.gbcA())},
$S:0}
D.eXw.prototype={
$0(){var w=this.a
w.y=this.b
w.z=!1
w.BY()},
$S:0}
D.eXx.prototype={
$0(){var w=this.a
w.z=!w.z
w.BY()},
$S:0}
D.eXt.prototype={
$5$color$on(d,e,f,g,h){var w=null,v=h?g.j(0.28):A.c.j(0.08),u=B.n(14),t=B.K(h?g:A.aT,A.r,1)
return B.aA(w,B.p(w,B.x(B.a([B.W(d,g,w,w,w,20),A.rG,B.c(e,w,w,w,w,w,w,B.l(w,w,g,w,w,w,w,w,w,w,w,9.5,w,w,A.F,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.l,w,A.e,A.M,0,A.p),A.f,w,w,new B.o(v,w,t,u,w,w,A.m),w,w,w,A.jj,A.jX,w,w,56),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,!1,A.a4)},
$3(d,e,f){return this.$5$color$on(d,e,f,A.c,!1)},
$4$color(d,e,f,g){return this.$5$color$on(d,e,f,g,!1)},
$S:693}
D.eXo.prototype={
$0(){return this.a.agc(-1)},
$S:0}
D.eXp.prototype={
$0(){return this.a.agc(1)},
$S:0}
D.eXq.prototype={
$0(){return this.a.agc(0)},
$S:0}
D.eXr.prototype={
$0(){var w=this.a
return w.l(new D.eXn(w))},
$S:0}
D.eXn.prototype={
$0(){var w=this.a
w.r=!w.r
w.BY()},
$S:0}
D.eXs.prototype={
$0(){return this.a.b2w(0)},
$S:0}
D.eXg.prototype={
$0(){var w=this.a
return w.l(new D.eXf(w))},
$S:0}
D.eXf.prototype={
$0(){return this.a.r=!1},
$S:0}
D.fKa.prototype={
$1(d){var w,v,u,t,s=this,r=null,q=s.a,p=s.b,o=s.c,n=s.d
if(q==null){q=A.i.fO(d*2)
n=D.a4_(p,B.l(r,r,D.ajt(s.e),r,r,r,r,r,"Roboto",r,r,q/2,r,r,o,r,1.1,!0,r,n,r,r,r,r,r,r),A.b8,r,1,1/0)
q=n}else{$.T()
w=B.L()
v=s.f
u=s.w
t=v.a-s.r*A.i.D(u,0,4000)
v=v.b
w.san(new B.a8(A.a5,A.a9,A.x,q,r,r).az(0,new B.a4(t,v,t+A.i.D(u,1,4000),v+d)))
p=B.h2(r,A.cL,r,1,r,B.d_(r,r,r,r,r,r,r,r,r,B.l(r,r,r,r,r,r,r,r,"Roboto",r,r,d,r,r,o,w,1.1,!0,r,n,r,r,r,r,r,r),p),A.a7,A.cf,r,A.e5,A.cg)
q=p}q.eY()
return q},
$S:342}
D.fvF.prototype={
$1(d){var w=new B.aH($.T().r,A.aj,null,null,B.a([],x.v)),v=B.B(d,x.H)
w.E(new B.zz(v,!0))
return w},
$S:1582}
D.eXd.prototype={
$0(){return this.a.d=this.b},
$S:0}
D.eXe.prototype={
$0(){return this.a.b2z(this.b)},
$S:0}
D.eXa.prototype={
$2(d,e){return A.bb},
$S:37}
D.eX9.prototype={
$2(d,e){var w=null,v=this.a,u=v.d===e?1.1:1
u=B.a([B.uW(v.b2A(e,18,46,6,A.c,80),A.b_,A.ha,u)],x.p)
if(v.d===e)u.push(new B.D(A.v8,B.c(C.iv[e].a,w,w,w,w,w,w,C.fQ6,w,w,w),w))
return B.x(u,A.l,w,A.e,A.M,0,A.p)},
$S:694}
D.eXb.prototype={
$0(){var w=this.a
return w.a.a7w(0,w.d)},
$S:0}
D.eXc.prototype={
$2(d,e){return this.a.aAa(e,15,1/0,!0,8,A.c,1/0)},
$S:45}
D.eX7.prototype={
$0(){var w=this.a
return w.a.a7w(0,w.d)},
$S:0}
D.eX8.prototype={
$0(){return this.a.b2z(this.b)},
$S:0};(function aliases(){var w=D.aPy.prototype
w.bBK=w.t})();(function installTearOffs(){var w=a._instance_0u,v=a._instance_1u
var u
w(u=D.aHD.prototype,"gce7","agd",2)
w(u,"gcax","cay",0)
w(u,"gb2u","ce6",0)
w(u,"gbcA","BY",0)
v(u,"gce8","b2w",3)
w(u,"gcee","cef",0)
w(u,"gb2y","ceg",0)})();(function inheritance(){var w=a.mixinHard,v=a.inheritMany,u=a.inherit
v(B.aE,[D.bT5,D.i8,D.rY,D.b0o,D.wF,D.yy,D.cX0,D.bvI])
v(B.fR,[D.bT6,D.fKb,D.fE_,D.h44,D.fK3,D.h43,D.fAy,D.h4g,D.fyb,D.fKq,D.fKr,D.fKs,D.hcF,D.hcG,D.eXj,D.eXA,D.eXz,D.eXt,D.fKa,D.fvF])
v(B.kQ,[D.cHa,D.apZ])
v(B.ie,[D.fyZ,D.fKu,D.fKt,D.fKv,D.eXB,D.eXy,D.eXa,D.eX9,D.eXc])
v(B.hR,[D.fz_,D.fz0,D.fz1,D.fz2,D.fz3,D.fz4,D.h45,D.h46,D.h47,D.h48,D.h49,D.c5U,D.eXv,D.eXm,D.eXu,D.eXi,D.eXk,D.eXh,D.eXl,D.eXC,D.eXw,D.eXx,D.eXo,D.eXp,D.eXq,D.eXr,D.eXn,D.eXs,D.eXg,D.eXf,D.eXd,D.eXe,D.eXb,D.eX7,D.eX8])
v(B.aw,[D.Jb,D.b5G])
v(B.af,[D.Y7,D.auA])
v(B.ah,[D.aPy,D.boR])
u(D.aHD,D.aPy)
v(B.lK,[D.bz2,D.bdh])
w(D.aPy,B.ch)})()
B.i0(b.typeUniverse,JSON.parse('{"Jb":{"aw":[],"w":[]},"Y7":{"af":[],"w":[]},"aHD":{"ah":["Y7"]},"bz2":{"aC":[]},"auA":{"af":[],"w":[]},"boR":{"ah":["auA"]},"b5G":{"aw":[],"w":[]},"bdh":{"aC":[]},"OA":{"af":[],"w":[]}}'))
var y={a:"The number of bytes to view must be a multiple of 4"}
var x=(function rtii(){var w=B.ar
return{J:w("bL2"),V:w("N<aa>"),O:w("N<u>"),X:w("N<i8>"),g:w("N<r>"),v:w("N<fZ>"),s:w("N<m>"),p:w("N<w>"),n:w("N<G>"),w:w("hW"),H:w("r"),Q:w("dr<G>"),t:w("bq<G>"),W:w("bf<m>"),q:w("ky"),S:w("F"),o:w("~")}})();(function constants(){var w=a.makeConstList
C.b5j=new B.dg(0.35,-0.25)
C.b6V=new B.Ei(2,"dst")
C.aih=new B.u(1,0.0196078431372549,0.03137254901960784,0.058823529411764705,A.q)
C.bxy=new B.u(1,0.043137254901960784,0.10196078431372549,0.2,A.q)
C.dt1=w([C.aih,C.bxy],x.O)
C.cdL=new B.a8(A.aX,A.b1,A.x,C.dt1,null,null)
C.ba9=new B.o(null,null,null,null,null,C.cdL,A.m)
C.bv0=new B.u(1,0.42745098039215684,0.47843137254901963,0.5764705882352941,A.q)
C.bj0=new B.u(1,0.16862745098039217,0.1803921568627451,0.26666666666666666,A.q)
C.bkg=new B.u(1,0.4823529411764706,0.29411764705882354,0.41568627450980394,A.q)
C.dGD=w([C.bv0,C.bj0,C.bkg],x.O)
C.cc0=new B.a8(A.ay,A.aD,A.x,C.dGD,null,null)
C.bab=new B.o(null,null,null,null,null,C.cc0,A.m)
C.b5m=new B.dg(0.5,-0.6)
C.byZ=new B.u(1,0.22745098039215686,0.054901960784313725,0.10980392156862745,A.q)
C.dnK=w([C.byZ,A.ex],x.O)
C.eKL=new B.bT(C.b5m,1.3,A.x,null,0,C.dnK,null,null)
C.bak=new B.o(null,null,null,null,null,C.eKL,A.m)
C.wH=new B.u(1,0.8392156862745098,0.7176470588235294,0.4823529411764706,A.q)
C.b8q=new B.ax(C.wH,1,A.r,-1)
C.b8D=new B.bE(A.a1,A.a1,C.b8q,A.a1)
C.baH=new B.o(null,null,C.b8D,null,null,null,A.m)
C.bhX=new B.u(1,0.027450980392156862,0.03137254901960784,0.047058823529411764,A.q)
C.Zx=new B.u(0.9490196078431372,0.06666666666666667,0.07450980392156863,0.09411764705882353,A.q)
C.biy=new B.u(1,0.16470588235294117,0.16470588235294117,0.17647058823529413,A.q)
C.ahB=new B.u(1,0.6039215686274509,0.4196078431372549,0.07058823529411765,A.q)
C.Ne=new B.u(1,0.16862745098039217,0.1843137254901961,0.21176470588235294,A.q)
C.Zz=new B.u(1,0.00784313725490196,0.01568627450980392,0.03529411764705882,A.q)
C.ahQ=new B.u(1,0.5411764705882353,0.42745098039215684,0.06274509803921569,A.q)
C.ai0=new B.u(1,0.6588235294117647,0.6235294117647059,0.5647058823529412,A.q)
C.Nm=new B.u(1,0.24705882352941178,0.5607843137254902,0.30196078431372547,A.q)
C.Ci=new B.u(1,0.7215686274509804,0.6980392156862745,0.6549019607843137,A.q)
C.ait=new B.u(1,0.7215686274509804,0.45098039215686275,0.2,A.q)
C.bm6=new B.u(1,0.47843137254901963,0.3058823529411765,0.0196078431372549,A.q)
C.bnK=new B.u(1,0.01568627450980392,0.0196078431372549,0.0392156862745098,A.q)
C.ND=new B.u(1,1,0.23137254901960785,0.12156862745098039,A.q)
C.aj5=new B.u(1,0.00784313725490196,0.011764705882352941,0.0392156862745098,A.q)
C.NJ=new B.u(1,0.7215686274509804,0.7529411764705882,0.8,A.q)
C.yV=new B.u(1,0.06666666666666667,0.0784313725490196,0.09411764705882353,A.q)
C.nJ=new B.u(1,0.054901960784313725,0.07058823529411765,0.09411764705882353,A.q)
C.bsc=new B.u(1,0.5411764705882353,0.41568627450980394,0.06274509803921569,A.q)
C.btk=new B.u(1,0.2901960784313726,0.26666666666666666,0.23529411764705882,A.q)
C.bto=new B.u(1,0.0196078431372549,0.18823529411764706,0.12156862745098039,A.q)
C.iY=new B.u(1,0.043137254901960784,0.12156862745098039,0.29411764705882354,A.q)
C.btP=new B.u(1,0.054901960784313725,0.07058823529411765,0.13333333333333333,A.q)
C.n5=new B.u(1,0.09019607843137255,0.09019607843137255,0.10980392156862745,A.q)
C.bvE=new B.u(1,0.1843137254901961,0.43529411764705883,0.23137254901960785,A.q)
C.bvI=new B.u(1,0.08627450980392157,0.09411764705882353,0.10980392156862745,A.q)
C.bxr=new B.u(1,0.9058823529411765,0.8235294117647058,0.6509803921568628,A.q)
C.a0w=new B.u(1,1,0.9529411764705882,0.6274509803921569,A.q)
C.am8=new B.u(1,0.9607843137254902,0.7686274509803922,0.6039215686274509,A.q)
C.bzC=new B.u(1,0.10196078431372549,0.09019607843137255,0.0784313725490196,A.q)
C.ami=new B.u(1,0.7176470588235294,0.4745098039215686,0.12156862745098039,A.q)
C.bEt=new B.R(0,0,0,1)
C.anl=new B.R(10,6,10,8)
C.anB=new B.R(14,10,10,10)
C.bI5=new B.R(18,14,18,0)
C.bIt=new B.R(18,6,18,0)
C.bTK=new B.a_(62895,"MaterialIcons",!1)
C.Qk=new B.a_(62970,"MaterialIcons",!1)
C.asf=new B.a_(983316,"MaterialIcons",!1)
C.oY=new B.a_(983617,"MaterialIcons",!1)
C.c_T=new B.ae(A.DL,13,A.ab,null,null,null)
C.c0E=new B.ae(A.o6,18,null,null,null,null)
C.c4o=new B.ae(A.eN,13,A.ab,null,null,null)
C.bWr=new B.a_(983768,"MaterialIcons",!1)
C.c5_=new B.ae(C.bWr,13,A.c,null,null,null)
C.caR=new B.a8(A.aX,A.b1,A.x,S.T9,null,null)
C.d8d=w([A.bM,E.H9,A.bM],x.O)
C.av7=new B.a8(A.a5,A.a9,A.x,C.d8d,null,null)
C.dpY=w([A.bO,A.bk,A.dT],x.O)
C.cbX=new B.a8(A.ay,A.aD,A.x,C.dpY,null,null)
C.Ns=new B.u(1,0.11764705882352941,0.30980392156862746,0.6392156862745098,A.q)
C.cTr=w([C.iY,C.Ns,A.as,A.bM],x.O)
C.dx1=w([0,0.42,0.8,1],x.n)
C.cc2=new B.a8(A.aX,A.b1,A.x,C.cTr,C.dx1,null)
C.aky=new B.u(1,0.16862745098039217,0.18823529411764706,0.23137254901960785,A.q)
C.byu=new B.u(1,0.788235294117647,0.8196078431372549,0.8627450980392157,A.q)
C.bvc=new B.u(1,0.34901960784313724,0.3764705882352941,0.43137254901960786,A.q)
C.d5L=w([C.aky,C.byu,C.bvc,C.aky],x.O)
C.cc4=new B.a8(A.a5,A.a9,A.x,C.d5L,A.E7,null)
C.cGl=w([A.bO,A.d0],x.O)
C.avc=new B.a8(A.a5,A.a9,A.x,C.cGl,null,null)
C.d7R=w([A.yY,A.aH],x.O)
C.ccE=new B.a8(A.a5,A.a9,A.x,C.d7R,null,null)
C.boq=new B.u(1,0.0784313725490196,0.3803921568627451,0.24705882352941178,A.q)
C.buW=new B.u(1,0.043137254901960784,0.2901960784313726,0.18823529411764706,A.q)
C.bi1=new B.u(1,0.03137254901960784,0.2196078431372549,0.13725490196078433,A.q)
C.dbi=w([C.boq,C.buW,C.bi1],x.O)
C.cdh=new B.a8(A.ay,A.aD,A.x,C.dbi,null,null)
C.aht=new B.u(1,0.12156862745098039,0.1411764705882353,0.18823529411764706,A.q)
C.cfC=w(["Add every person","Link mums, dads, kids","Keep it for ever"],x.s)
C.dSo=new D.wF("NGMY Ads","\ud83d\udce2","Every NGMY ad, as a real 3D commercial",A.c3,-1)
C.dSi=new D.wF("Civic Registry","\ud83e\udeaa","Enroll your family in your community",A.df,0)
C.dSn=new D.wF("Jobs","\ud83d\udcbc","Find work and get hired",A.as,1)
C.dSt=new D.wF("NGMY Store","\ud83d\udecd\ufe0f","African food and traditions",A.fL,2)
C.dSu=new D.wF("Kiswahili","\ud83d\udde3\ufe0f","Learn Swahili and English",A.bR,3)
C.dSr=new D.wF("Doc Scanner","\ud83d\udcc4","Scan, save and share",A.ce,4)
C.dSj=new D.wF("Invoices","\ud83e\uddfe","Professional invoices",A.bB,5)
C.dSg=new D.wF("Calendar","\ud83d\udcc5","This month, today lit up",A.aB,-2)
C.iv=w([C.dSo,C.dSi,C.dSn,C.dSt,C.dSu,C.dSr,C.dSj,C.dSg],B.ar("N<wF>"))
C.VO=new B.y(2,3)
C.VP=new B.y(3,4)
C.czC=w([A.kL,A.zS],B.ar("N<a_>"))
C.cDi=w([A.aw,A.cx,F.n6],x.O)
C.alg=new B.u(1,0.24705882352941178,0.22745098039215686,0.2,A.q)
C.dvP=w(["A Registry ID card for every member","Birthdays and children remembered","Votes and receipts everyone can see"],x.s)
C.dQp=new D.i8(A.f3,"Registry ID","Active")
C.dQd=new D.i8(A.If,"Birthdays","On")
C.dQG=new D.i8(A.oV,"Community vote","Open")
C.dIK=w([C.dQp,C.dQd,C.dQG],x.X)
C.UC=new D.apZ(1,"card")
C.dQU=new D.rY(null,"NGMY Civic Registry",A.mt,A.dk,A.aH,"Your family.","Counted. Helped.","Enroll your whole family in the community registry.",C.dvP,"Civic Registry",6,"#","Family members enrolled",0,C.dIK,C.UC,"REGISTRY ID","One card for your whole community life.","NGMY Hub tab, then Civic Registry")
C.dn9=w(["Find jobs near you","Book house repairs and workers","Advisors help with applications"],x.s)
C.dQS=new D.i8(Z.R_,"Warehouse helper","Apply")
C.dQz=new D.i8(A.a4l,"House repair","Book")
C.dQF=new D.i8(A.zW,"House worker","Hire")
C.cYw=w([C.dQS,C.dQz,C.dQF],x.X)
C.u2=new D.apZ(2,"badge")
C.dR5=new D.rY(A.at1,"NGMY Jobs and Help",A.q1,A.kc,A.aQ,"Need work?","Get hired.","Jobs, house repairs and house workers, all in one Help Center.",C.dn9,"Help Center",24,"#","Jobs near you",0,C.cYw,C.u2,"HIRED","From the search to the first paycheck.","NGMY Hub tab, then Help Center")
C.dlV=w(["African food and traditions","Open your own store","Support Congolese and African sellers"],x.s)
C.bVM=new B.a_(983309,"MaterialIcons",!1)
C.dQr=new D.i8(C.bVM,"Fufu flour 2 kg","$12")
C.bV3=new B.a_(63590,"MaterialIcons",!1)
C.dQg=new D.i8(C.bV3,"Congolese coffee","$18")
C.dQq=new D.i8(A.art,"Wax print fabric","$15")
C.dut=w([C.dQr,C.dQg,C.dQq],x.X)
C.dQV=new D.rY(A.QS,"NGMY Store",A.kn,A.kc,A.cV,"Shop our community.","Sell yours too.","Buy and sell inside NGMY. Approved members can open a store.",C.dlV,"NGMY Store",45,"$#.00","Your cart",0,C.dut,C.u2,"OPEN NOW","Every order supports our community.","NGMY Hub tab, then NGMY Store")
C.asX=new B.a_(983989,"MaterialIcons",!1)
C.def=w(["Short daily lessons","A picture for every word","Swahili and English both ways"],x.s)
C.dQk=new D.i8(C.asX,"Jambo","Hello")
C.dQl=new D.i8(A.hP,"Asante","Thank you")
C.dQi=new D.i8(A.xj,"Familia","Family")
C.dsI=w([C.dQk,C.dQl,C.dQi],x.X)
C.dQY=new D.rY(C.asX,"Kiswahili School",A.oZ,A.t5,A.n7,"Habari!","Learn Swahili.","Learn Swahili and English, one short lesson at a time.",C.def,"Kiswahili School",12,"# days","Your learning streak",0,C.dsI,C.u2,"KARIBU","Karibu means welcome.","Creator Hub tab, then Kiswahili School")
C.cQo=w(["Sharp scans from your camera","Saved as a PDF","Share it anywhere"],x.s)
C.dQR=new D.i8(A.tH,"Lease.pdf","2 pages")
C.dQJ=new D.i8(A.h0,"Receipt.pdf","1 page")
C.dQO=new D.i8(A.mt,"ID copy.pdf","Shared")
C.dj9=w([C.dQR,C.dQJ,C.dQO],x.X)
C.dQT=new D.rY(Q.IA,"Document Scanner",A.a48,A.aiR,A.hj,"Paper in.","PDF out.","Scan, save and share your papers in seconds.",C.cQo,"Document Scanner",3,"# pages","Scanned today",0,C.dj9,C.u2,"PDF","Every paper, safe on your phone.","NGMY Hub tab, then Document Scanner")
C.dyM=w(["Your logo and business details","Totals worked out for you","Send it as a PDF"],x.s)
C.dQv=new D.i8(A.DD,"Kitchen repair","$850")
C.dQK=new D.i8(A.Ir,"Materials","$320")
C.dQe=new D.i8(A.DH,"Delivery","$80")
C.cs3=w([C.dQv,C.dQK,C.dQe],x.X)
C.dR0=new D.rY(A.la,"NGMY Invoices",A.h0,A.k8,A.c3,"Look professional.","Get paid faster.","Make clean invoices and receipts in minutes.",C.dyM,"Invoice 1042",1250,"$#.00","Total due",0,C.cs3,C.u2,"PAID","Paid. Stamped. Done.","Tool Hub tab, then Business Essentials")
C.dni=w(["Grandparents to grandchildren","A photo on every branch","Share it with the family"],x.s)
C.bUo=new B.a_(63229,"MaterialIcons",!1)
C.dQo=new D.i8(C.bUo,"Grandparents","4")
C.bVu=new B.a_(983134,"MaterialIcons",!1)
C.dQj=new D.i8(C.bVu,"Parents","6")
C.dQx=new D.i8(A.Qo,"Children","8")
C.dHA=w([C.dQo,C.dQj,C.dQx],x.X)
C.dR1=new D.rY(F.at5,"NGMY Family Tree",A.Qd,A.n1,A.Nd,"Every branch.","Every story.","Grow your family tree and write your family book.",C.dni,"Family Tree",18,"#","Family members",0,C.dHA,C.u2,"FAMILY","Family is everything.","Profile tab, then Worksheets, then Family Tree")
C.dvK=w(["Kept safe on the server","A receipt for every payment","Rewards in one place"],x.s)
C.dQD=new D.i8(A.j7,"Crown reward","+$1.00")
C.dQI=new D.i8(A.kL,"House Care","-$25.00")
C.dQE=new D.i8(A.a4D,"Gift received","+$20.00")
C.dEm=w([C.dQD,C.dQI,C.dQE],x.X)
C.a8M=new D.apZ(0,"coin")
C.dQW=new D.rY(null,"NGMY Wallet",A.jD,A.wE,A.eF,"One balance.","Everywhere.","Your NGMY balance is the same on every phone you use.",C.dvK,"NGMY Wallet",1250.75,"$#","Balance",2,C.dEm,C.a8M,"$","Your money, always in sync.","Your balance shows on Home and all across NGMY")
C.dCm=w(["Quick arcade games","Play offline, counted later","Every win has a receipt"],x.s)
C.dQP=new D.i8(A.o2,"Lucky Dice","Play")
C.dQf=new D.i8(Y.Qu,"Puzzle Rush","Play")
C.dQm=new D.i8(A.m0,"Top score","2,400")
C.dB8=w([C.dQP,C.dQf,C.dQm],x.X)
C.dQZ=new D.rY(null,"NGMY Game Center",A.o7,A.lU,A.bd,"Play.","Win coins.","Arcade games in the Vault Channel, with your own game receipts.",C.dCm,"Vault Arcade",2400,"#","High score",0,C.dB8,C.a8M,"WIN","Game on, any time.","Home tab, then Vault Channel")
C.d1y=w(["Parts that really work","An AI Inventor to help you","See how electricity flows"],x.s)
C.bTJ=new B.a_(62894,"MaterialIcons",!1)
C.dQu=new D.i8(C.bTJ,"Battery","9 V")
C.dQC=new D.i8(C.oY,"Switch","On")
C.dQH=new D.i8(L.l8,"Bulb","Lit")
C.dFr=w([C.dQu,C.dQC,C.dQH],x.X)
C.dQX=new D.rY(L.l8,"NGMY Electronics Lab",I.vq,A.yY,A.b3,"Build it.","Watch it light up.","Wire real circuits: batteries, switches, bulbs, TVs and more.",C.d1y,"Electronics Lab",9,"# V","Battery",0,C.dFr,C.u2,"IT WORKS","Learn by building.","Home tab, then Core Protocol, then Electronics Lab")
C.dgx=w(["Chat like with a real person","Help with jobs and benefits","Answers in Swahili too"],x.s)
C.dQw=new D.i8(A.Dw,"How do I apply?","Answered")
C.dQM=new D.i8(A.tH,"Check my letter","Done")
C.dQt=new D.i8(A.oZ,"Jibu kwa Kiswahili","Sawa")
C.dcU=w([C.dQw,C.dQM,C.dQt],x.X)
C.dR4=new D.rY(A.xk,"NGMY Advisors",A.DM,A.qC,A.cV,"Questions?","Ask an advisor.","Friendly AI advisors for jobs, applications and everyday life.",C.dgx,"NGMY Advisors",24,"# / 7","Always here",0,C.dcU,C.u2,"ASK ME","Help is one message away.","Advisors tab")
C.dFJ=w(["Walk through every room","Wire lights and outlets","Learn a trade step by step"],x.s)
C.dQQ=new D.i8(F.arN,"Frame","Done")
C.dQB=new D.i8(I.vq,"Wiring","Done")
C.dQh=new D.i8(I.a4B,"Plumbing","Now")
C.dI6=w([C.dQQ,C.dQB,C.dQh],x.X)
C.dR_=new D.rY(A.kL,"NGMY Construction Lab",A.re,A.ip,A.as,"Frame. Wire.","Finish a house.","Real 3D wiring, plumbing and a whole house to build.",C.dFJ,"Construction Lab",86,"#%","House finished",0,C.dI6,C.u2,"BUILT","Learn the trade, room by room.","Home tab, then Core Protocol, then Construction Lab")
C.dpV=w(["Record and edit audio","Make videos with titles","QR codes and Doc Share"],x.s)
C.dQn=new D.i8(A.oW,"Recorder Studio","Open")
C.dQL=new D.i8(A.QM,"Video Studio","Open")
C.dQs=new D.i8(A.jG,"QR Generator","Open")
C.d5p=w([C.dQn,C.dQL,C.dQs],x.X)
C.dR2=new D.rY(A.fO,"NGMY Creator Hub",A.eg,A.i0,A.c3,"Record. Film.","Create.","Recorder, Video Studio, QR codes and more in one place.",C.dpV,"Creator Hub",8,"#","Studios ready for you",0,C.d5p,C.u2,"ACTION","Your ideas, made real.","Creator Hub tab")
C.dyn=w(["Many designs to choose from","Your logo and your colours","Share by QR or as a picture"],x.s)
C.dQN=new D.i8(A.m2,"Design","Midnight")
C.bVF=new B.a_(983243,"MaterialIcons",!1)
C.dQy=new D.i8(C.bVF,"QR code","On")
C.dQA=new D.i8(A.IE,"Shared","12 times")
C.dyO=w([C.dQN,C.dQy,C.dQA],x.X)
C.dR3=new D.rY(null,"NGMY Business Cards",A.a44,A.cY,A.fY,"First impressions","that last.","Design a card people remember and share it with a QR code.",C.dyn,"Business Card",250,"#","Card scans",0,C.dyO,C.UC,"YOUR NAME","Hand it over. Be remembered.","Tool Hub tab, then Business Card Creator")
C.T_=w([C.dQU,C.dR5,C.dQV,C.dQY,C.dQT,C.dR0,C.dR1,C.dQW,C.dQZ,C.dQX,C.dR4,C.dR_,C.dR2,C.dR3],B.ar("N<rY>"))
C.d8l=w([A.bk,A.bO,A.cx],x.O)
C.bmB=new B.u(1,0.5411764705882353,0.3333333333333333,0.13725490196078433,A.q)
C.ddv=w([C.ait,C.am8,C.bmB],x.O)
C.feg=new B.b0(-0.3,0.32,0.2)
C.fbC=new B.b0(-0.08,0.17,0.22)
C.fbD=new B.b0(0.14,0.14,0.2)
C.fds=new B.b0(0.34,0.3,0.2)
C.fg0=new B.b0(0,0.32,0.26)
C.fd9=new B.b0(-0.42,0.46,0.15)
C.ffW=new B.b0(0.42,0.46,0.15)
C.fey=new B.b0(0,0.07,0.15)
C.aDw=w([C.feg,C.fbC,C.fbD,C.fds,C.fg0,C.fd9,C.ffW,C.fey],B.ar("N<+(G,G,G)>"))
C.dpm=w([A.c,A.fC,A.aH],x.O)
C.dr1=w([11,9,10,8,0,12,13,2],B.ar("N<F>"))
C.erm=new D.yy("NGMY Tree Story","A family grows, one branch at a time")
C.erl=new D.yy("NGMY Store","Open the doors to something new")
C.ern=new D.yy("NGMY Construction Lab","Build, wire and finish a real house")
C.erg=new D.yy("NGMY Electronics Lab","Build circuits that really light up")
C.erj=new D.yy("NGMY Advisors","Say hi to a friendly advisor")
C.erh=new D.yy("Spark Adventure","Follow Sparky round a circuit board")
C.ero=new D.yy("NGMY Game Center","Play games and win coins")
C.eri=new D.yy("NGMY Business Cards","Make a card people remember")
C.erf=new D.yy("NGMY Civic Registry","Your family, counted and helped")
C.erk=new D.yy("NGMY Creator Hub","Record, film and create")
C.Tt=w([C.erm,C.erl,C.ern,C.erg,C.erj,C.erh,C.ero,C.eri,C.erf,C.erk],B.ar("N<yy>"))
C.dt9=w([A.dk,A.cv,A.GP],x.O)
C.dwJ=w(["For you","Apps","Library"],x.s)
C.aEy=w([-16,16],x.n)
C.TR=w([-22,22],x.n)
C.TS=w([-24,24],x.n)
C.a7C=w([-5,5],x.n)
C.bcO=new B.aa(0,A.H,A.b7,A.ds,14)
C.dD0=w([C.bcO],x.V)
C.dG7=w(["M","T","W","T","F","S","S"],x.s)
C.aKV=new B.cX([1,7,2,0,3,1,4,2,6,3,7,6,8,4,9,5],B.ar("cX<F,F>"))
C.bo0=new B.u(1,0.054901960784313725,0.16470588235294117,0.22745098039215686,A.q)
C.bzj=new B.u(1,0.027450980392156862,0.08235294117647059,0.12941176470588237,A.q)
C.dhr=w([C.bo0,C.bzj,C.Zz],x.O)
C.eKB=new B.bT(A.BT,1.1,A.x,null,0,C.dhr,A.vI,null)
C.buH=new B.u(1,0.9607843137254902,0.7725490196078432,0.25882352941176473,A.q)
C.deC=w([U.CG,C.buH,C.ami],x.O)
C.eKG=new B.bT(A.Mw,0.5,A.x,null,0,C.deC,A.m5,null)
C.aTv=new B.y("SONY",A.bO)
C.eSv=new B.y(3,E.H9)
C.eTN=new B.y(0.45,0.05)
C.eUJ=new B.y(-0.35,-0.05)
C.eVP=new B.y(2,A.bE)
C.aTx=new B.y("B&O",C.alg)
C.f_r=new B.y("SAMSUNG",A.cC)
C.f0U=new B.y(0,A.ip)
C.aTD=new B.y("LG",A.dT)
C.f44=new B.y(1,A.v)
C.f4s=new B.y(-1.6,0.9)
C.f63=new B.y(1.6,0.9)
C.f8k=new B.y(1.6,-0.9)
C.f9Z=new B.y(-1.25,-0.62)
C.faI=new B.y(-1.6,-0.9)
C.fiN=new B.b7([1.25,-0.62,-1,0])
C.fiY=new B.b7([-1.25,-0.62,0,1])
C.fj3=new B.b7([1.25,0.62,0,-1])
C.fkr=new B.b7([-1.25,0.62,1,0])
C.c5z=new B.ae(A.eN,11,A.ab,null,null,null)
C.fNP=new B.H(!0,A.aR,null,null,null,null,9,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.hb6=new B.C("Search",null,C.fNP,null,null,null,null,null,null,null,null,null)
C.cVf=w([C.c5z,A.pj,C.hb6],x.p)
C.fnY=new B.c2(A.aK,A.e,A.h,A.l,null,A.p,null,0,C.cVf,null)
C.fv8=new B.hY(3,5,5,1.35,null)
C.fVS=new B.C("Buttons hidden. Double-tap to show them again.",null,null,null,null,null,null,null,null,null,null,null)
C.aWt=new B.b2(C.fVS,null,null,null,null,null,null,null,A.iR,null,null,null,null,A.nS,!1,null,null,null,A.t,null)
C.byb=new B.u(1,0.9450980392156862,0.9098039215686274,0.8470588235294118,A.q)
C.fCE=new B.H(!0,C.byb,null,"serif",null,null,15,A.kh,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.fKT=new B.H(!0,A.ab,null,null,null,null,9.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.fLw=new B.H(!0,A.aR,null,null,null,null,9.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.acW=new B.H(!0,A.ab,null,null,null,null,12.5,null,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.aYH=new B.H(!0,A.ab,null,null,null,null,10,A.P,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.fQ6=new B.H(!0,A.c,null,null,null,null,8.5,A.P,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.fQw=new B.H(!0,A.c,null,null,null,null,14.5,A.P,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.fRK=new B.H(!0,A.ab,null,null,null,null,8.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.fS2=new B.H(!0,C.ai0,null,null,null,null,8.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.fI5=new B.H(!0,A.aF,null,null,null,null,9.5,A.P,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.fUs=new B.C("NGMY Apps",null,C.fI5,null,null,null,null,null,null,null,null,null)
C.fEp=new B.H(!0,C.wH,null,null,null,null,8,A.a8,null,3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.fXR=new B.C("BANG & OLUFSEN",null,C.fEp,null,null,null,null,null,null,null,null,null)
C.fKz=new B.H(!0,A.v,null,null,null,null,9,A.F,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.fYj=new B.C("Open",null,C.fKz,null,null,null,null,null,null,null,null,null)
C.h0A=new B.C("Home",null,C.aYH,null,null,null,null,null,null,null,null,null)
C.h1I=new B.C("SAMSUNG",null,A.aYk,null,null,null,null,null,null,null,null,null)
C.h7X=new B.C("LG",null,A.ya,null,null,null,null,null,null,null,null,null)
C.fSs=new B.H(!0,A.aF,null,null,null,null,10,A.u,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.hc6=new B.C("WHERE TO FIND IT",null,C.fSs,null,null,null,null,null,null,null,null,null)
C.hed=new B.C("tv",null,A.rJ,null,null,null,null,null,null,null,null,null)
C.hfx=new B.C("Watch again",null,A.cc,null,null,null,null,null,null,null,null,null)
C.fI_=new B.H(!0,C.wH,null,null,null,null,8.5,null,null,2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.hgo=new B.C("OPEN",null,C.fI_,null,null,null,null,null,null,null,null,null)
C.hGe=new B.bf("tv-maker-name",x.W)
C.hGj=new B.bf("ad-info-ok",x.W)
C.hGs=new B.bf("tv-maker-apple",x.W)
C.hGR=new B.bf("ad-info-sheet",x.W)
C.hH1=new B.bf("ad-info-find",x.W)
C.hHc=new B.bf("tv-info",x.W)
C.hHj=new B.bf("tv-learn-more",x.W)
C.hHw=new B.bf("tv-frame",x.W)
C.hHB=new B.bf("tv-picture",x.W)
C.hHC=new B.bf("tv-fullscreen",x.W)
C.hHL=new B.bf("ad-info-replay",x.W)
C.hIc=new D.cHa(0,"triangles")})();(function staticFields(){$.Sl=B.S(B.ar("aE"),B.ar("bvI"))
$.bHe=!1
$.aht=B.S(B.ar("aE"),B.ar("j8"))})();(function lazyInitializers(){var w=a.lazyFinal
w($,"iMA","hUe",()=>{var v=B.crL()
v.z=A.he
v.f=!0
return v})})()};
(a=>{a["fYBNmfxY9INrSPDrc9LFY5JGY2M="]=a.current})($__dart_deferred_initializers__);