((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,A,O,P,L,G,E,M,Q,I,R,S,T,H,U,V,W,X,Y,K,D={
hXX(d,e,f,g,h){var w,v,u,t,s=null,r=e.length
if(A.o.F(r,2)!==0)throw B.Y(B.dJ('"positions" length must be even.',s))
w=f.length
if(w*2!==r)throw B.Y(B.dJ('"positions" and "colors" lengths must match.',s))
if(!A.p9.gar(e)){$.T()
v=J.uU(A.ig.gaS(f),f.byteOffset,w)
r=$.hTF()[d.a]
w=$.ev.cq()
u=v
t=new B.aW4(B.jJ(w,"MakeVertices",[r,e,null,u,null]))}else t=s
return D.hXW(t)},
hXW(d){var w=new D.bSZ(d)
w.bD7(d)
return w},
bSZ:function bSZ(d){this.a=d
this.b=$
this.c=!1},
bT_:function bT_(){},
ibI(d,e,f){return D.hXX(d,e,f,null,null)},
cH3:function cH3(d,e){this.a=d
this.b=e},
fJs(d,e,f,g,h,i){var w,v,u,t=null
if(h==null){w=A.i.fO(e*2)
v=A.i.fO(g*4)
u=B.l(t,t,D.ajq(f),t,t,t,t,t,"Roboto",t,t,w/2,t,t,i,t,1.12,!0,t,v/4,t,t,t,t,t,t)
return D.a3W(d,u,A.b8,t,1,1/0)}$.T()
w=B.L()
w.san(h)
w=B.d1(t,t,t,t,t,t,t,t,t,B.l(t,t,t,t,t,t,t,t,"Roboto",t,t,e,t,t,i,w,1.12,!0,t,g,t,t,t,t,t,t),d)
w=B.h_(t,A.cH,t,1,t,w,A.a7,A.cc,t,A.e1,A.cd)
w.nA(1/0)
return w},
ms(d,e,f,g,h,i,j,k,l,m){var w,v,u,t
if(e.length===0||g<1)return 0
w=new D.fJf(j,f,i,l)
v=D.fJs(e,g,h,k,w.$1(g),m)
u=v.b.c
if(u>l&&u>0){t=g*l/u
v=D.fJs(e,t,h,k*l/u,w.$1(t),m)}v.a4(d,new B.r(f.a-v.b.c*i,f.b))
w=v.b.a.c
return w.gb8(w)},
hIa(d,e,f,g,h,i,j,k,l){var w,v,u=null,t=A.i.fO(g*2)
t=B.l(u,u,D.ajq(h),u,u,u,u,u,"Roboto",u,u,t/2,u,u,l,u,1.25,!0,u,u,u,u,u,u,u,u)
w=j===0
v=D.a3W(e,t,w?A.b8:A.K,"\u2026",k,i)
t=f.a
t=w?t:t-i/2
v.a4(d,new B.r(t,f.b))
t=v.b.a.c
return t.gb8(t)},
Hh(d,e,f,g,h){var w,v,u,t=null
if(g<1)return
w=B.lx(e.a)
v=A.i.fO(g*2)
u=D.a3W(w,B.l(t,t,D.ajq(h),t,t,t,t,t,e.b,t,t,v/2,t,t,t,t,1,!0,t,t,t,t,t,t,t,t),A.b8,t,1,1/0)
v=u.b
w=v.c
v=v.a.c
u.a4(d,f.aI(0,new B.r(w/2,v.gb8(v)/2)))},
ilh(d,e){var w=A.i.aa(d,e).split("."),v=B.o4(w[0],B.ag("\\B(?=(\\d{3})+(?!\\d))",!0,!1,!1,!1),new D.fD3(),null)
return w.length>1?v+"."+w[1]:v},
bFc(d,e,f,g){var w,v
if(e<=0)return
w=d.c
J.bs(w.save())
v=f.d-f.b
w.clipRect(B.hP(f.cs(v*0.08)),$.lD()[1],!0)
w.translate(0,(1-A.cn.aA(0,A.i.D(e,0,1)))*v*1.05)
g.$0()
w.restore()},
ioP(a0,a1,a2,a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=a1.a,j=a1.b,i=0+k,h=new B.a3(0,0,i,0+j),g=$.T(),f=B.L(),e=a2.d,d=B.ap(e,A.v,0.05)
d.toString
w=B.ap(e,A.v,0.55)
w.toString
v=x.O
f.san(new B.bT(C.b5e,1.25,A.x,l,0,B.a([d,w,C.bnF],v),A.vC,l).az(0,h))
a0.aD(h,f)
u=Math.sin(a3*0.35)*k*0.04
t=new B.aH(g.r,A.aj,l,l,B.a([],x.v))
t.E(new B.aZ(k*0.52+u,0))
t.E(new B.aq(k*0.7+u,0))
t.E(new B.aq(k*0.98,j))
t.E(new B.aq(k*0.34,j))
t.E(new B.bA())
g=B.L()
g.san(new B.a7(A.aX,A.b1,A.x,B.a([A.c.j(0.1),A.c.j(0)],v),l,l).az(0,h))
a0.af(t,g)
s=j*0.8
g=s+(j-s)
f=B.L()
f.san(new B.a7(A.aX,A.b1,A.x,B.a([B.ap(e,A.v,0.6).j(0.85),A.v],v),l,l).az(0,new B.a3(0,s,i,g)))
a0.aD(new B.a3(0,s,i,g),f)
f=s-1
g=B.L()
e=a2.e
g.san(new B.a7(A.a5,A.a9,A.x,B.a([A.L,e.j(0.55),A.L],v),l,l).az(0,new B.a3(0,s,i,s+2)))
a0.aD(new B.a3(0,f,i,f+2),g)
r=a1.gdk()>=300
q=new B.e0()
q.cT(a4*7+3)
for(i=a3*1.3,g=a3*k*0.012,f=k*1.1,d=k*0.05,p=0;p<9;++p){w=A.i.F(q.ai()*k+g*(0.5+q.ai()),f)
v=q.ai()
o=j*(0.025+q.ai()*0.05)
n=(p&1)===0?e:A.c
m=new B.as(A.T,A.Q,A.W,A.X,A.U)
m.r=n.j(0.06+0.08*(0.5+0.5*Math.sin(i+p))).gp(0)
if(r)m.y=new B.fZ(A.H,o*0.5)
a0.O(new B.r(w-d,v*j*0.72),o,m)}},
hG3(d,e,f,g,h,i){var w
$.T()
w=B.L()
w.r=A.v.j(h).gp(0)
if(i)w.y=new B.fZ(A.H,g*0.6)
d.c1(B.bY(e,g,f),w)},
hm4(d,e,f,g){var w=B.dw(),v=w.a
v.$flags&2&&B.aj(v)
v[11]=1/(d*2.6)
w.fI(e)
w.jZ(f)
w.ei(0,0,g,1)
return w},
imc(d,e,f,a0,a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=f*0.49,i=j*0.17,h=B.bx(B.bY(A.J,f,j),new B.aP(i,i)),g=j*0.085
$.T()
w=B.L()
i=h.a
v=h.b
u=h.c
t=h.d
w.san(C.cc3.az(0,new B.a3(i,v,u,t)))
for(s=d.c,r=e.a,q=e.b,p=6;p>=1;--p){J.bs(s.save())
s.translate(r,q)
o=D.hm4(f,a0,a1,g*p/6)
s.concat(B.bIq(B.E2(o.a)))
d.aq(h,w)
s.restore()}J.bs(s.save())
s.translate(r,q)
d.aA(0,D.hm4(f,a0,a1,0).a)
r=$.T()
q=B.L()
q.r=C.bhS.gp(0)
d.aq(h,q)
q=h.cs(-(j*0.006))
o=B.L()
o.b=A.ac
o.c=j*0.012
o.san(C.cbW.az(0,new B.a3(i,v,u,t)))
d.aq(q,o)
n=h.cs(-(j*0.035))
J.bs(s.save())
s.clipRRect(B.nb(n),$.mQ(),!0)
o=n.a
q=n.b
t=n.c
u=n.d
D.inP(d,new B.a3(o,q,t,u),a2,a3)
v=t-o
m=o+v*(0.2-a0*0.6)
l=new B.aH(r.r,A.aj,k,k,B.a([],x.v))
l.E(new B.aZ(m,q))
l.E(new B.aq(m+v*0.45,q))
l.E(new B.aq(m-v*0.15,u))
l.E(new B.aq(m-v*0.6,u))
l.E(new B.bA())
v=B.L()
v.san(new B.a7(A.aX,A.b1,A.x,B.a([A.c.j(0.16),A.c.j(0.02)],x.O),k,k).az(0,new B.a3(o,q,t,u)))
d.af(l,v)
s.restore()
v=j*0.04
v=B.bx(B.bY(new B.r(0,q+j*0.06),j*0.075,j*0.28),new B.aP(v,v))
q=B.L()
q.r=A.v.gp(0)
d.aq(v,q)
s.restore()},
inP(c3,c4,c5,c6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8=null,b9=1e9,c0=c4.c,c1=c4.a,c2=c0-c1
$.T()
w=B.L()
v=c5.d
u=B.ap(v,A.v,0.72)
u.toString
t=x.O
w.san(new B.a7(A.aX,A.b1,A.x,B.a([C.btK,u],t),b8,b8).az(0,c4))
c3.aD(c4,w)
w=c4.b
u=c4.d
s=u-w
r=c1+c2
q=new B.a3(c1,w,r,w+s*0.3)
p=B.L()
o=c5.e
p.san(new B.a7(A.ay,A.aC,A.x,B.a([v,o],t),b8,b8).az(0,q))
c3.aD(q,p)
p=c2*0.1
n=B.L()
n.r=A.c.j(0.08).gp(0)
c3.O(new B.r(r-p,w+c2*0.12),c2*0.42,n)
n=c2*0.045
D.ms(c3,"9:41",new B.r(c1+c2*0.09,w+c2*0.035),n,A.c,0,b8,0,b9,A.F)
r=c2*0.06
D.Hh(c3,C.bTK,new B.r(c0-p,w+r),r,A.c)
c0=c2*0.07
m=c1+c0
l=s*0.085
k=w+l
j=c2*0.17
i=c2*0.05
h=B.bx(new B.a3(m,k,m+j,k+j),new B.aP(i,i))
j=B.L()
j.r=A.c.j(0.22).gp(0)
c3.aq(h,j)
D.Hh(c3,c5.c,h.gbD(),c2*0.11,A.c)
j=h.c+i
k=h.b
D.ms(c3,c5.y,new B.r(j,k+c2*0.012),c0,A.c,0,b8,0,c2*0.62,A.u)
D.ms(c3,"NGMY",new B.r(j,k+c2*0.095),n,A.ab,0,b8,c2*0.006,b9,A.F)
c1+=r
w+=s*0.215
k=c1+c2*0.88
g=B.bx(new B.a3(c1,w,k,w+s*0.165),new B.aP(r,r))
w=g.eI(new B.r(0,c2*0.015))
j=B.L()
j.r=A.v.j(0.25).gp(0)
c3.aq(w,j)
j=B.L()
j.r=A.c.gp(0)
c3.aq(g,j)
f=A.cn.aA(0,A.i.D((c6-1)/2.6,0,1))
r=g.a+r
j=g.b
w=g.d
c0=w-j
D.ms(c3,c5.as,new B.r(r,j+c0*0.16),c2*0.042,A.an,0,b8,0,c2*0.6,A.O)
m=D.ilh(c5.z*f,c5.at)
D.ms(c3,B.aL(c5.Q,"#",m),new B.r(r,j+c0*0.42),p,A.a_,0,b8,0,c2*0.58,A.u)
r=g.c-c2*0.25
j+=c0*0.32
e=B.bx(new B.a3(r,j,r+c2*0.2,j+c0*0.36),new B.aP(i,i))
c0=B.L()
c0.r=B.ap(o,A.c,0.75).gp(0)
c3.aq(e,c0)
c0=e.gbD()
j=B.ap(v,A.v,0.1)
j.toString
D.Hh(c3,A.nf,c0,c2*0.065,j)
d=w+s*0.04
a0=s*0.088
for(c0=a0+s*0.022,w=c5.ax,r=c3.c,p=a0*0.55,m=a0*0.33,j=a0*0.38,a1=a0*1.05,a2=c2*0.03,a3=c2*0.46,a4=c2*0.04,a5=c2*0.028,a6=c2*0.046,a7=c2*0.26,a8=0;a8<3;++a8){a9=w[a8]
b0=A.cn.aA(0,A.i.D(A.i.D((c6-(1.3+a8*0.35))/0.5,0,1),0,1))
if(b0>0){J.bs(r.save())
r.translate((1-b0)*c2*0.6,0)
b1=B.bx(new B.a3(c1,d,k,d+a0),new B.aP(n,n))
$.T()
b2=new B.as(A.T,A.Q,A.W,A.X,A.U)
b2.r=A.c.j(0.075*b0).gp(0)
c3.aq(b1,b2)
b2=b1.a
b3=b2+p
b4=b1.b
b4+=(b1.d-b4)/2
b5=new B.as(A.T,A.Q,A.W,A.X,A.U)
b5.r=o.j(0.22).gp(0)
c3.O(new B.r(b3,b4),m,b5)
b5=B.ap(o,A.c,0.2)
b5.toString
D.Hh(c3,a9.a,new B.r(b3,b4),j,b5)
D.ms(c3,a9.b,new B.r(b2+a1,b4-a2),i,A.c,0,b8,0,a3,A.O)
b2=B.ap(o,A.c,0.3)
b2.toString
D.ms(c3,a9.c,new B.r(b1.c-a4,b4-a5),a6,b2,1,b8,0,a7,A.F)
r.restore()}d+=c0}b6=A.i.D((c6-5.2)/0.15,0,1)*(1-A.i.D((c6-5.45)/0.2,0,1))
c0=c2*0.08
b7=B.bx(B.bY(new B.r(c4.gbD().a,u-l),s*0.075*(1-b6*0.08),c2*0.8*(1-b6*0.05)),new B.aP(c0,c0))
$.T()
c0=B.L()
s=b7.a
l=b7.c
c0.san(new B.a7(A.a5,A.a9,A.x,B.a([v,o],t),b8,b8).az(0,new B.a3(s,b7.b,l,b7.d)))
c3.aq(b7,c0)
D.ms(c3,"Open NGMY",new B.r(b7.gbD().a,b7.gbD().b-c2*0.033),c2*0.052,A.c,0.5,b8,0,(l-s)*0.85,A.u)
if(b6>0){c0=b7.gbD()
c1=B.L()
c1.r=A.c.j(0.25*(1-b6)).gp(0)
c3.O(c0,i+b6*c2*0.3,c1)}},
fy1(a5,a6,a7,a8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=null,a3="NGMY",a4=1e9
switch(a6.ay.a){case 0:w=B.bX(A.J,a7)
$.T()
v=B.L()
v.san(C.eKH.az(0,w))
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
o=new B.as(A.T,A.Q,A.W,A.X,A.U)
o.c=v
o.r=C.ahB.j(0.5).gp(0)
a5.ah(new B.r(s*a7*0.9,r*a7*0.9),new B.r(q*a7*0.97,p*a7*0.97),o)}n=a8?a3:a6.ch
v=n.length
if(v<=1)m=a7*0.95
else m=v<=3?a7*0.5:a7*0.36
v=-m*0.56
s=a7*1.4
D.ms(a5,n,new B.r(0,v+a7*0.03),m,A.t3.j(0.7),0.5,a2,0,s,A.u)
D.ms(a5,n,new B.r(0,v),m,C.bm1,0.5,a2,0,s,A.u)
break
case 2:w=B.bX(A.J,a7)
$.T()
v=B.L()
v.san(E.aWL.az(0,w))
a5.c1(w,v)
l=B.bX(A.J,a7*0.84)
v=B.L()
s=a6.e
r=B.ap(s,A.c,0.35)
r.toString
q=a6.d
p=B.ap(q,A.v,0.25)
p.toString
v.san(new B.bT(A.mP,0.5,A.x,a2,0,B.a([r,s,p],x.O),A.xA,a2).az(0,l))
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
D.Hh(a5,r,new B.r(0,a7*0.03),p,B.ap(q,A.v,0.45).j(0.35))
D.Hh(a5,s?a6.c:v,A.J,p,A.c)}break
case 1:k=B.bY(A.J,a7*1.9,a7*3)
v=a7*0.16
j=B.bx(k,new B.aP(v,v))
if(a8){$.T()
s=B.L()
r=a6.d
q=B.ap(r,A.v,0.5)
q.toString
r=B.ap(r,A.v,0.75)
r.toString
s.san(new B.a7(A.ay,A.aC,A.x,B.a([q,r],x.O),a2,a2).az(0,k))
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
a5.aD(new B.a3(s,i,s+g,i+f),e)
e=g*0.08
s+=e
p=r+p*0.5
r=a7*0.03
r=B.bx(new B.a3(s,p,s+g*0.55,p+o),new B.aP(r,r))
o=B.L()
o.r=A.c.j(0.9).gp(0)
a5.aq(r,o)
D.ms(a5,"ngmy.org",new B.r(h-e,q-f),v,A.ab,1,a2,0,a4,A.O)
return}$.T()
v=B.L()
s=B.ap(a6.d,A.v,0.15)
s.toString
v.san(new B.a7(A.ay,A.aC,A.x,B.a([s,a6.e],x.O),a2,a2).az(0,k))
a5.aq(j,v)
v=a5.c
J.bs(v.save())
v.clipRRect(B.nb(j),$.mQ(),!0)
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
D.Hh(a5,a6.c,new B.r(s-v*0.12,r+o*0.2),a7*0.32,A.c.j(0.9))
p+=v*0.08
s=r+o*0.38
q=a7*0.06
d=B.bx(new B.a3(p,s,p+a7*0.48,s+a7*0.36),new B.aP(q,q))
q=B.L()
s=d.a
h=d.b
g=d.c
f=d.d
q.san(C.av3.az(0,new B.a3(s,h,g,f)))
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
D.Hh(a5,A.a43,new B.r(g+a7*0.25,d.gbD().b),a7*0.28,A.ab)
D.ms(a5,"\u2022\u2022\u2022\u2022  \u2022\u2022\u2022\u2022  2026",new B.r(p,r+o*0.64),a7*0.17,A.c.j(0.9),0,a2,a7*0.02,a4,A.O)
D.ms(a5,a6.ch,new B.r(p,r+o*0.8),a7*0.15,A.c,0,a2,i,v*0.6,A.u)
break}},
iiz(d,e,f,g,h,i){var w,v,u,t,s=null,r=g.ay,q=r===C.Uu,p=q?f*0.06:f*0.16,o=Math.cos(h),n=$.T(),m=B.L()
switch(r.a){case 0:r=A.Cx
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
w.E(new B.jp(B.bx(B.bY(A.J,f*1.9,f*3),new B.aP(r,r))))}else{w=new B.aH(n,A.aj,s,s,B.a([],r))
w.E(new B.jK(B.bX(A.J,f)))}v=new D.fy2(d,e,f,h)
r=B.a([],x.n)
for(u=1;u<8;++u)r.push(p*u/8)
if(o>=0){v.$2(p,new D.fy3(d,g,f))
for(q=x.Q,r=new B.dx(r,q),r=new B.bQ(r,r.gJ(0),q.k("bQ<ak.E>")),q=q.k("ak.E");r.C();){o=r.d
if(o==null)o=q.a(o)
v.$2(o,new D.fy4(d,w,m))}v.$2(0,new D.fy5(d,g,f,i,w))}else{v.$2(0,new D.fy6(d,g,f))
for(q=r.length,t=0;t<r.length;r.length===q||(0,B.I)(r),++t)v.$2(r[t],new D.fy7(d,w,m))
v.$2(p,new D.fy8(d,g,f))}},
hI4(a0,a1,a2,a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
for(w=a1.a,v=a1.b-a2*0.22,u=a4*1.4,t=a2*0.07,s=a3.e,r=a3.d,q=x.O,p=a3.ax,o=a4*0.7,n=0;n<3;++n){m=o+n*3.141592653589793*2/3
l=Math.sin(m)
if(l<0!==a5)continue
k=w+Math.cos(m)*a2*0.4
j=v+n*a2*0.2+Math.sin(u+n)*a2*0.025
i=new B.r(k,j)
h=t*(0.85-l*0.25)
g=B.bX(i,h)
$.T()
f=new B.as(A.T,A.Q,A.W,A.X,A.U)
f.r=A.v.j(0.25).gp(0)
a0.O(new B.r(k+0,j+h*0.25),h,f)
f=new B.as(A.T,A.Q,A.W,A.X,A.U)
e=B.ap(s,A.c,0.55)
e.toString
d=B.ap(r,A.v,0.35)
d.toString
f.san(new B.bT(A.Mu,0.5,A.x,null,0,B.a([e,s,d],q),A.xA,null).az(0,g))
a0.c1(g,f)
D.Hh(a0,p[n].a,i,h,A.c)
f=-h
f=B.bY(new B.r(k+f*0.32,j+f*0.48),h*0.32,h*0.7)
j=new B.as(A.T,A.Q,A.W,A.X,A.U)
j.r=A.c.j(0.45).gp(0)
a0.c1(f,j)}},
hpR(f2,f3,f4,f5,f6,f7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6,d7,d8,d9,e0,e1,e2,e3,e4,e5,e6,e7,e8,e9=null,f0=1e9,f1={}
f1.a=f5
w=A.o.F(f4,14)
v=C.SS[w]
u=f3.a
t=f3.b
if(u<=0||t<=0)return
f5=f1.a=A.i.D(f5,0,10)
s=f2.c
J.bs(s.save())
r=0+u
q=0+t
s.clipRect(B.hP(new B.a3(0,0,r,q)),$.lD()[1],!0)
if(f3.gdk()<180){r=f3.gdk()
s.restore()
D.hM4(f2,new B.dY(["ad",w,f6,u,t]),f3,f5+w*1000,new D.h38(f1,180/r,u,t,f4,f6))
return}p=f3.gdk()>=300
D.ioP(f2,f3,v,f5,f4,!0)
o=u>=t*1.15
n=o?t:Math.min(t*0.62,u*1.05)
m=o?u*0.07:u/2
l=o?0:0.5
k=o?u*0.42:u*0.88
j=o?t*0.22:t*0.63
i=o?new B.r(u*0.73,t*0.47):new B.r(u/2,t*0.33)
h=o?t*0.8:Math.min(t*0.5,u*0.6/0.49)
g=f7==null
f=g?0:A.ei.aA(0,A.i.D(f7.b/1.1,0,1))*3.141592653589793*2
e=Math.sin(f5*1.1)
if(f5<6.9){d=A.cn.aA(0,A.i.D(A.i.D(f5/1.1,0,1),0,1))
a0=A.dO.aA(0,A.i.D((f5-3.2)/0.9,0,1))
a1=A.qT.aA(0,A.i.D((f5-6.3)/0.6,0,1))
a2=i.a+(1-d)*u*0.45+a1*u*0.7
a3=i.b+Math.sin(f5*1.6)*h*0.012
a4=h*(1+a0*0.06)
a5=new B.r(a2,a3)
D.hG3(f2,new B.r(a2,a3+a4*0.55),a4*0.62,a4*0.07,0.5,p)
D.hI4(f2,a5,a4,v,f5,!1)
D.imc(f2,a5,a4,-1.15+d*0.73+a0*0.3+a1*0.9+e*0.05+f,0.07-a0*0.03,v,f5)
D.hI4(f2,a5,a4,v,f5,!0)}if(f5>=6.2&&f5<8.9){a6=A.ei.aA(0,A.i.D((f5-6.4)/0.7,0,1))
a7=A.qT.aA(0,A.i.D((f5-8.4)/0.45,0,1))
e=v.ay
a8=e===C.Uu
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
D.hG3(f2,new B.r(b1,b2+n*0.33),a9*2.2,a9*0.25,0.45*a6,p)
D.iiz(f2,a5,a9,v,(1-a6)*3.141592653589793*1.5+b0*0.35+f+a7*3.141592653589793,A.i.D((f5-7.2)/0.9,0,1))
if(!a8){b8=A.cn.aA(0,A.i.D(A.i.D((f5-7)/0.4,0,1),0,1))*(1-a7)
if(b8>0){b9=B.bx(B.bY(new B.r(b1,b4+a9*1.28),n*0.075,a9*1.9*b8),new B.aP(b3,b3))
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
b0.san(new B.a7(A.a5,A.a9,A.x,B.a([b1,a8,b2],b7),e9,e9).az(0,new B.a3(b3,b9.b,b4,b9.d)))
f2.aq(b9,b0)
if(b8>0.6){e=e===C.a8M?A.a.eq(v.b,"NGMY ","").toUpperCase():v.ch
D.ms(f2,e,new B.r(b9.gbD().a,b9.gbD().b-n*0.025),n*0.042,A.c,0.5,e9,n*0.004,(b4-b3)*0.86,A.u)}}}}}e=v.e
a8=B.ap(e,A.c,0.25)
a8.toString
c0=n*(o?0.105:0.095)
if(f5<3.3){c1=1-A.i.D((f5-3)/0.3,0,1)
D.bFc(f2,A.i.D((f5-0.2)/0.4,0,1)*c1,new B.a3(0,j,r,j+n*0.05),new D.h39(f2,v,m,j,n,a8,k,l))
c2=j+n*0.07
a8=c0*1.15
D.bFc(f2,A.i.D((f5-0.45)/0.5,0,1)*c1,new B.a3(0,c2,r,c2+a8),new D.h3a(f2,v,m,c2,c0,k,l))
c3=c2+c0*1.18
D.bFc(f2,A.i.D((f5-0.85)/0.5,0,1)*c1,new B.a3(0,c3,r,c3+a8),new D.h3b(f2,v,m,c3,c0,k,l))
c4=c3+c0*1.35
c5=n*0.22*(A.cn.aA(0,A.i.D(A.i.D((f5-1.3)/0.6,0,1),0,1))*c1)
a8=o?m:m-c5/2
b0=n*0.004
b0=B.bx(new B.a3(a8,c4,a8+c5,c4+n*0.008),new B.aP(b0,b0))
$.T()
a8=B.L()
a8.r=e.gp(0)
f2.aq(b0,a8)}else if(f5<6.5){c1=1-A.i.D((f5-6.2)/0.3,0,1)
D.bFc(f2,A.i.D((f5-3.3)/0.4,0,1)*c1,new B.a3(0,j,r,j+n*0.05),new D.h3c(f2,v,m,j,n,a8,k,l))
c4=j+n*0.07
c6=A.i.D((f5-3.45)/0.5,0,1)*c1
if(c6>0){J.bs(s.save())
s.translate(0,(1-A.cn.aA(0,A.i.D(c6,0,1)))*n*0.04)
a8=o?0.05:0.046
c7=D.hIa(f2,v.w,new B.r(m,c4),n*a8,A.c.j(c6),k,l,2,A.O)
s.restore()}else c7=n*0.12
a8=n*0.04
c8=c4+Math.max(c7,n*0.06)+a8
for(b0=n*0.075,b1=v.x,b2=v.d,c9=k-a8*1.8,b3=a8*0.55,b4=m+b3,b5=a8*0.62,b6=a8*0.8,b7=a8*1.6,d0=m+b7,d1=k-b7,d2=0;d2<3;++d2){d3=A.cn.aA(0,A.i.D(A.i.D((f1.a-(3.9+d2*0.3))/0.4,0,1),0,1))*c1
if(d3>0){d4=0.92*d3
d5=(1-d3)*n
if(o){d6=c8+b5
$.T()
d7=new B.as(A.T,A.Q,A.W,A.X,A.U)
d7.r=e.gp(0)
f2.O(new B.r(b4,d6),b3*d3,d7)
d7=B.ap(b2,A.v,0.4)
d7.toString
D.Hh(f2,A.hn,new B.r(b4,d6),b6*d3,d7)
J.bs(s.save())
s.translate(d5*0.05,0)
D.ms(f2,b1[d2],new B.r(d0,c8),a8,A.c.j(d4),0,e9,0,c9,A.O)
s.restore()}else{d8=m-(Math.min(D.fJs(b1[d2],a8,A.c,0,e9,A.O).b.c,d1)+b7)/2
d9=c8+d5*0.03
d5=d8+b3
d6=d9+b5
$.T()
d7=new B.as(A.T,A.Q,A.W,A.X,A.U)
d7.r=e.j(d3).gp(0)
f2.O(new B.r(d5,d6),b3,d7)
D.Hh(f2,A.hn,new B.r(d5,d6),b6,B.ap(b2,A.v,0.4).j(d3))
D.ms(f2,b1[d2],new B.r(d8+b7,d9),a8,A.c.j(d4),0,e9,0,d1,A.O)}}c8+=b0}}else if(f5<8.6){c1=1-A.i.D((f5-8.3)/0.3,0,1)
D.bFc(f2,A.i.D((f5-6.6)/0.4,0,1)*c1,new B.a3(0,j,r,j+n*0.05),new D.h3d(f2,v,m,j,n,a8,k,l))
d3=A.i.D((f5-6.8)/0.5,0,1)*c1
if(d3>0){J.bs(s.save())
s.translate(0,(1-A.cn.aA(0,A.i.D(d3,0,1)))*n*0.05)
a8=o?0.085:0.075
b0=A.c.j(d3)
b1=o?3:2
D.hIa(f2,v.CW,new B.r(m,j+n*0.07),n*a8,b0,k,l,b1,A.u)
s.restore()}}a8=f1.a
if(a8>=8.5){a6=A.i.D((a8-8.5)/0.35,0,1)
$.T()
a8=B.L()
a8.r=A.v.j(0.45*a6).gp(0)
f2.aD(new B.a3(0,0,r,q),a8)
e0=t*(o?0.36:0.38)
e1=A.ei.aA(0,A.i.D((f1.a-8.55)/0.5,0,1))
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
d3=A.ei.aA(0,A.i.D((f1.a-8.8)/0.45,0,1))
if(d3>0){b0=n*0.05
e3=B.bx(B.bY(new B.r(a8,b1+n*0.16),n*0.1,Math.min(u*0.6,Math.max(u*0.3,n*0.5))*d3),new B.aP(b0,b0))
e4=B.L()
e4.r=e.j(0.45).gp(0)
if(p)e4.y=new B.fZ(A.H,n*0.03)
f2.aq(e3,e4)
b1=B.L()
b3=e3.a
b4=e3.b
b5=e3.c
b6=e3.d
b1.san(new B.a7(A.a5,A.a9,A.x,B.a([v.d,e],b2),e9,e9).az(0,new B.a3(b3,b4,b5,b6)))
f2.aq(e3,b1)
J.bs(s.save())
s.clipRRect(B.nb(e3),$.mQ(),!0)
b5-=b3
e5=b3-b5*0.3+A.i.D((f1.a-9)/0.9,0,1)*b5*1.6
b3=e5+b5*0.25
b1=B.L()
b1.san(new B.a7(A.a5,A.a9,A.x,B.a([A.c.j(0),A.c.j(0.5),A.c.j(0)],b2),e9,e9).az(0,new B.a3(e5,0,b3,1)))
f2.aD(new B.a3(e5,b4,b3,b4+(b6-b4)),b1)
s.restore()
if(d3>0.7)D.ms(f2,"Open NGMY",new B.r(a8,e3.gbD().b-n*0.03),b0,A.c,0.5,e9,0,b5*0.8,A.u)
D.ms(f2,"ngmy.org",new B.r(a8,b6+n*0.035),n*0.036,A.c.j(0.65*A.i.D(d3,0,1)),0.5,e9,n*0.004,f0,A.O)}}a9=new B.a3(0,0,r,q)
$.T()
e=B.L()
e.san(new B.bT(A.z,0.95,A.x,e9,0,B.a([A.L,A.v.j(0.45)],x.O),E.aCE,e9).az(0,a9))
f2.aD(a9,e)
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
g=D.fJs(e7,w,A.c,0,e9,A.F).b
e=g.c
g=g.a.c
a8=e6*0.4
e8=B.bx(new B.a3(e6,e6,e6+(e+e6*1.2),e6+(g.gb8(g)+e6*0.5)),new B.aP(a8,a8))
a8=B.L()
a8.r=A.bt.j(0.95).gp(0)
f2.aq(e8,a8)
D.ms(f2,e7,new B.r(e8.a+e6*0.6,e8.b+e6*0.25),w,A.aw,0,e9,0,f0,A.F)
w=n*0.012
a8=t-w
w=a8+w
g=B.L()
g.r=A.c.j(0.2).gp(0)
f2.aD(new B.a3(0,a8,r,w),g)
g=f1.a
e=B.L()
e.r=A.bt.gp(0)
f2.aD(new B.a3(0,a8,0+u*g/10,w),e)
w=f1.a
if(w<0.25)c1=1-w/0.25
else c1=w>9.8?(w-9.8)/0.2:0
if(c1>0){w=B.L()
w.r=A.v.j(A.i.D(c1,0,1)).gp(0)
f2.aD(new B.a3(0,0,r,q),w)}s.restore()},
apW:function apW(d,e){this.a=d
this.b=e},
i7:function i7(d,e,f){this.a=d
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
b0k:function b0k(d,e){this.a=d
this.b=e},
fJf:function fJf(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fD3:function fD3(){},
fy2:function fy2(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fy3:function fy3(d,e,f){this.a=d
this.b=e
this.c=f},
fy4:function fy4(d,e,f){this.a=d
this.b=e
this.c=f},
fy5:function fy5(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fy6:function fy6(d,e,f){this.a=d
this.b=e
this.c=f},
fy7:function fy7(d,e,f){this.a=d
this.b=e
this.c=f},
fy8:function fy8(d,e,f){this.a=d
this.b=e
this.c=f},
h38:function h38(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
h39:function h39(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
h3a:function h3a(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
h3b:function h3b(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
h3c:function h3c(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
h3d:function h3d(d,e,f,g,h,i,j,k){var _=this
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
c5M:function c5M(d){this.a=d},
ioY(d,e,f,g,h,i){var w=new D.fJ7(e,h,!0),v=w.$1(g),u=v.b.c
if(u>i&&u>0)v=w.$1(Math.max(2,g*i/u))
w=v.b
u=w.c
w=w.a.c
v.a4(d,f.aI(0,new B.r(u/2,w.gb8(w)/2)))},
Mo(d,e,f,g,h,i,j){var w,v,u,t,s,r,q,p,o,n,m,l,k
if(j<=0)return
w=new D.h37(e,f,g)
v=A.i.cF(22*A.i.D(j,0,1))
for(u=i-h,t=e,s=1;s<=v;++s,t=q){r=Math.min(s/22,A.i.D(j,0,1))
q=w.$1(r)
$.T()
p=new B.as(A.T,A.Q,A.W,A.X,A.U)
p.b=A.ac
o=p.c=h+u*r
p.r=A.qM.gp(0)
p.d=A.bF
d.ah(t,q,p)
p=-o*0.18
n=q.a
m=q.b
l=B.ap(A.qM,A.c,0.18)
l.toString
k=new B.as(A.T,A.Q,A.W,A.X,A.U)
k.b=A.ac
k.c=o*0.28
k.r=l.gp(0)
k.d=A.bF
d.ah(new B.r(t.a+p,t.b+0),new B.r(n+p,m+0),k)}},
fJ7:function fJ7(d,e,f){this.a=d
this.b=e
this.c=f},
h37:function h37(d,e,f){this.a=d
this.b=e
this.c=f},
hlp(d,e,f,g,h,i){var w=new D.fzC(e,h,!0,0),v=w.$1(g),u=v.b.c
if(u>i&&u>0)v=w.$1(Math.max(2,g*i/u))
w=v.b
u=w.c
w=w.a.c
v.a4(d,f.aI(0,new B.r(u/2,w.gb8(w)/2)))},
Mp(d,e,f,g,h,i){var w=h==null,v=w?A.o.F(A.i.bc(f/10),14):h,u=A.i.F(f,10)
D.hpR(d,e,v,u,g||w,i)},
Mq(d,e,f,g,h,i){var w,v=d.c
J.bs(v.save())
v.clipRect(B.hP(new B.a3(0,0,0+e.a,0+e.b)),$.lD()[1],!0)
w=C.iv[A.o.F(f,8)].e
if(w===-2)D.ifK(d,e,g)
else if(w===-1)D.Mp(d,e,g,!0,h,i)
else D.Mp(d,e,g,!1,w,i)
v.restore()},
ifK(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k=e.a,j=e.b,i=new B.V(Date.now(),0,!1),h=0+k,g=0+j
$.T()
w=B.L()
w.san(C.caR.az(0,new B.a3(0,0,h,g)))
d.aD(new B.a3(0,0,h,g),w)
w=B.L()
w.r=A.bE.gp(0)
d.aD(new B.a3(0,0,h,0+j*0.15),w)
D.hlp(d,A.p4[B.bM(i)-1]+" "+B.bD(i),new B.r(k/2,j*0.075),j*0.08,A.c,k*0.9)
v=k/7
for(h=j*0.21,g=j*0.05,u=0;u<7;++u)D.hlp(d,C.dGa[u],new B.r(v*(u+0.5),h),g,A.aF,9999)
t=B.c0(B.bD(i),B.bM(i),1,0,0,0,0,0)
s=B.bW(B.c0(B.bD(i),B.bM(i)+1,0,0,0,0,0,0))
r=B.lU(t)-1
q=j*0.74/A.i.cF((r+s)/7)
for(h=j*0.26,g=f*3,p=1;p<=s;++p){o=r+p-1
n=new B.r(v*(A.o.F(o,7)+0.5),h+q*(A.o.ap(o,7)+0.5))
if(p===B.bW(i)){w=Math.min(v,q)
m=A.aH.j(0.5+0.2*Math.sin(g))
$.T()
l=new B.as(A.T,A.Q,A.W,A.X,A.U)
l.r=m.gp(0)
d.O(n,w*0.42,l)}w=Math.min(v,q)
m=p===B.bW(i)?A.c:A.ab
D.hlp(d,""+p,n,w*0.42,m,9999)}},
fzC:function fzC(d,e,f,g){var _=this
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
h3j(d,e,f,g,h,i,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=e.a
if(j<=0||e.b<=0)return
if(e.gdk()<180){w=e.gdk()
v=h<3
u=v?h:g
D.hM4(d,new B.btm(["tv",f,i,a0,j,e.b,v]),e,u,new D.h3k(180/w,e,f,g,h,i,a1,a0))
return}w=d.c
J.bs(w.save())
u=e.b
t=0+j
s=0+u
w.clipRect(B.hP(new B.a3(0,0,t,s)),$.lD()[1],!0)
if(h<3){$.T()
r=B.L()
r.r=C.Zt.gp(0)
d.aD(new B.a3(0,0,t,s),r)
if(h<0.5)t=h/0.5
else t=h>2.4?(3-h)/0.6:1
q=A.i.D(t,0,1)
t=e.eo(A.J)
s=e.gdk()
r=B.L()
r.san(new B.bT(A.z,0.5,A.x,k,0,B.a([A.aH.j(0.35*q),A.L],x.O),k,k).az(0,B.bX(e.eo(A.J),e.gdk()*0.5)))
d.O(t,s*0.5,r)
D.aRV(d,"NGMY",new B.r(0,u*0.36),u*0.2,A.c.j(q),A.K,u*0.03,j)
D.aRV(d,"T V",new B.r(0,u*0.6),u*0.08,A.aH.j(q),A.K,u*0.05,j)
r=j*0.3
s=u*0.78
t=B.L()
t.r=A.aH.j(q).gp(0)
d.aD(new B.a3(r,s,r+j*0.4*(h/3),s+3),t)}else if(i>=0){D.Mq(d,e,i,g,a0,a1)
p=C.iv[A.o.F(i,8)].e
if(p!==-2){if(p>=0)o=p
else o=a0==null?A.o.F(A.i.bc(g/10),14):a0
D.hEV(d,e,"ADS  \xb7  "+C.SS[A.o.F(o,14)].b)}}else{n=A.i.D((h-3)/0.5,0,1)
m=A.o.F(f,10)
l=C.aKR.h(0,m)
if(m===0)D.iph(d,e,g)
else if(l==null)D.iB0(d,e,g)
else D.hpR(d,e,D.hNI(l),A.i.F(g,10),!1,a1)
D.hEV(d,e,"CH "+(m+1)+"  \xb7  "+C.Tl[m].a)
if(n<1){$.T()
r=B.L()
r.r=A.c.j(0.6*(1-n)).gp(0)
d.aD(new B.a3(0,0,t,s),r)}}t=new B.aH($.T().r,A.aj,k,k,B.a([],x.v))
t.E(new B.aZ(0,0))
t.E(new B.aq(j*0.45,0))
t.E(new B.aq(0,u*0.5))
t.E(new B.bA())
u=B.L()
u.r=A.c.j(0.04).gp(0)
d.af(t,u)
w.restore()},
aRV(d,e,f,g,h,i,j,k){var w,v=null,u=D.ajq(h),t=A.i.fO(g*2)
u=B.l(v,v,u,v,v,v,v,v,v,v,v,t/2,v,v,A.u,v,v,!0,v,j,v,v,v,v,v,v)
t=k==null
w=D.a3W(e,u,i,v,1,t?9999:k)
w.a4(d,f.a6(0,new B.r(i===A.K&&!t?(k-w.b.c)/2:0,0)))},
hEV(d,e,f){var w=e.b,v=e.a,u=v-w*0.34,t=w*0.04,s=w*0.03,r=B.bx(new B.a3(u,t,u+w*0.3,t+w*0.1),new B.aP(s,s))
$.T()
s=B.L()
s.r=A.v.j(0.55).gp(0)
d.aq(r,s)
D.aRV(d,"NGMY",new B.r(r.a+w*0.025,r.b+w*0.012),w*0.07,A.c,A.b8,1,null)
s=w*0.86
u=B.L()
u.r=A.v.j(0.6).gp(0)
d.aD(new B.a3(0,s,0+v,s+w*0.14),u)
D.aRV(d,f,new B.r(t,w*0.885),w*0.075,A.c,A.b8,0,v*0.74-t)},
aR0(d,e,f,g,h,i,j){var w=new D.fxf(e,h,i,j),v=w.$1(g),u=v.b.c,t=f.c-f.a
if(u>t&&u>0)v=w.$1(g*t/u)
w=f.gbD()
u=v.b
t=u.c
u=u.a.c
v.a4(d,w.aI(0,new B.r(t/2,u.gb8(u)/2)))},
iph(d5,d6,d7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5=null,c6=d6.a,c7=d6.b,c8=A.i.F(d7,14),c9=new D.fJy(c8),d0=new D.fJu(),d1=0+c6,d2=0+c7,d3=$.T(),d4=B.L()
d4.san(C.cc1.az(0,new B.a3(0,0,d1,d2)))
d5.aD(new B.a3(0,0,d1,d2),d4)
w=c6*0.34
v=new D.fJx(w,c7)
u=v.$2(0,0.5)
d4=c7*0.75
t=B.L()
t.san(new B.bT(A.z,0.5,A.x,c5,0,B.a([A.bM.j(0.55),A.L],x.O),c5,c5).az(0,B.bX(u,d4)))
d5.O(u,d4,t)
s=new B.e0()
s.cT(11)
for(d4=d7*2,r=0;r<26;++r){t=s.ai()
q=s.ai()
p=s.ai()
o=new B.as(A.T,A.Q,A.W,A.X,A.U)
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
q=new B.as(A.T,A.Q,A.W,A.X,A.U)
q.r=(p?C.Nl:C.bvz).gp(0)
d5.af(m,q)}j=v.$2(0,0.81)
i=d0.$1(c9.$2(0.2,1.6))
h=d0.$1(c9.$2(2.4,2.6))
for(d3=d7*1.4,g=0;g<8;++g){t=C.aDs[g]
f=t.a
e=t.b
d=Math.sin(d3+f*7)*c7*0.006
q=v.$2(f,e)
p=q.a
q=q.b
t=c7*t.c
o=new B.as(A.T,A.Q,A.W,A.X,A.U)
o.r=A.hX.gp(0)
d5.O(new B.r(p+d,q+0),t*h,o)
o=v.$2(f,e-0.015)
q=o.a
o=o.b
p=new B.as(A.T,A.Q,A.W,A.X,A.U)
p.r=A.eq.gp(0)
d5.O(new B.r(q+d,o+0),t*0.82*h,p)}for(d3=c7*0.01,t=j.a,q=j.b,p=q+d3,o=c7*0.015,q+=o,k=c7*0.04,g=0;g<2;++g){a0=F.hp[g]*c7
D.Mo(d5,j,new B.r(t+a0*0.04,p),new B.r(t+a0*0.12,q),k,d3,i)}t=c7*0.085
D.Mo(d5,j,v.$2(0.02,0.7),v.$2(0,0.6),t,c7*0.055,i)
a1=d0.$1(c9.$2(1.8,1.6))
q=c7*0.05
p=c7*0.026
D.Mo(d5,v.$2(0,0.6),v.$2(-0.1,0.55),v.$2(-0.34,0.44),q,p,a1)
D.Mo(d5,v.$2(0,0.6),v.$2(0.1,0.55),v.$2(0.34,0.44),q,p,a1)
a2=d0.$1(c9.$2(3.2,1.3))
p=c7*0.024
a0=c7*0.018
D.Mo(d5,v.$2(-0.34,0.44),v.$2(-0.17,0.33),v.$2(0,0.39),p,a0,a2)
D.Mo(d5,v.$2(0.34,0.44),v.$2(0.17,0.33),v.$2(0,0.39),p,a0,a2)
a3=d0.$1(c9.$2(4.4,1.3))
a0=c7*0.02
p=c7*0.012
D.Mo(d5,v.$2(0,0.39),v.$2(-0.1,0.3),v.$2(-0.17,0.2),a0,p,a3)
D.Mo(d5,v.$2(0,0.39),v.$2(0.1,0.3),v.$2(0.17,0.2),a0,p,a3)
a0=c7*0.016
D.Mo(d5,v.$2(-0.27,0.72),v.$2(-0.14,0.78),v.$2(0,0.7),a0,p,d0.$1(c9.$2(3.6,1)))
D.Mo(d5,v.$2(0.27,0.72),v.$2(0.14,0.78),v.$2(0,0.7),a0,p,d0.$1(c9.$2(3.6,1)))
a4=new B.e0()
a4.cT(5)
for(a0=d7*1.6,a5=d5.c,a6=d7*1.3,a7=h*1.4,a8=c7*0.03,r=0;r<110;++r){a9=C.aDs[A.o.F(r,8)]
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
b3=new B.as(A.T,A.Q,A.W,A.X,A.U)
b3.r=B.ap(A.bi,A.eC,(Math.sin(d4+r)+1)/2).gp(0)
d5.c1(b2,b3)
a5.restore()}b6=new D.fJv(c9,d5,d7,c8)
o=c7*0.075
b6.$5(0,"Bibi",v.$2(-0.27,0.72),o,5)
b6.$5(1,"Babu",v.$2(0.27,0.72),o,5.6)
b6.$5(2,"Mama",v.$2(-0.34,0.44),t,6.4)
b6.$5(3,"Baba",v.$2(0.34,0.44),t,7)
b6.$5(4,"Dada",v.$2(-0.17,0.2),o,8)
b6.$5(5,"Kaka",v.$2(0.17,0.2),o,8.6)
b7=new D.fJw(c9,d7,d5)
b7.$3(v.$2(0,0.7),c7*0.028,5.9)
b7.$3(v.$2(0,0.39),c7*0.035,7.4)
if(c8>9.3)for(t=(c8-9.3)*0.4,r=0;r<7;++r){b8=A.i.F(t+r/7,1)
D.aRV(d5,"\u2665",v.$2(Math.sin(r*2.3+d4)*0.3,0.38-b8*0.3),c7*(0.04+0.02*A.o.F(r,3)),A.hY.j((1-b8)*0.85),A.b8,0,c5)}d4=c6*0.655+(1-d0.$1(c9.$2(1,0.9)))*c6*0.4
t=c7*0.1
a0=d4+c6*0.315
b9=new B.a3(d4,t,a0,t+c7*0.64)
a5=B.bx(b9,new B.aP(q,q))
$.T()
a6=B.L()
a6.r=C.iV.j(0.88).gp(0)
d5.aq(a5,a6)
a6=B.bx(b9,new B.aP(q,q))
a5=B.L()
a5.b=A.ac
a5.c=p
a5.r=F.fb.gp(0)
d5.aq(a6,a5)
c0=new D.fJz(b9,c7)
D.aR0(d5,"NGMY",c0.$2(0.13,0.06),c7*0.06,F.fb,!0,p)
D.aR0(d5,"Family",c0.$2(0.2,0.1),t,A.c,!0,0)
D.aR0(d5,"Tree",c0.$2(0.3,0.1),t,A.c,!0,0)
for(r=0;r<3;++r){c1=c9.$2(5.5+r*1.5,0.5)
if(c1<=0)continue
D.aR0(d5,"\u2665 "+C.cfC[r],c0.$2(0.43+r*0.075,0.06).eI(new B.r((1-c1)*30,0)),q,A.iF.j(c1),!1,0)}c2=c9.$2(11,0.5)
if(c2>0){c3=B.bY(new B.r(b9.gbD().a,c7*0.67),o,(a0-d4)*0.6*A.ei.aA(0,c2))
d4=B.bx(c3,new B.aP(k,k))
$.T()
t=B.L()
t.r=F.fb.gp(0)
d5.aq(d4,t)
if(c2>0.8)D.aR0(d5,"ngmy.org",c3.cs(-d3),q,C.iV,!0,0)}if(c8>11.6){d3=c7*0.82
D.aR0(d5,"Family is everything",new B.a3(0,d3,0+w*2,d3+q),q,A.c.j(A.i.D((c8-11.6)/0.5,0,1)),!0,0)}if(c8<0.4)c4=1-c8/0.4
else c4=c8>13.5?(c8-13.5)/0.5:0
if(c4>0){$.T()
d3=B.L()
d3.r=A.v.j(c4).gp(0)
d5.aD(new B.a3(0,0,d1,d2),d3)}},
hqd(d,e,f,g,h,i){return B.a8(d,!1).cc(B.vz(null,!1,!0,!0,new D.hbJ(e,h,g,i,f),A.eW,null,A.pI,new D.hbK(),x.S))},
yy:function yy(d,e){this.a=d
this.b=e},
h3k:function h3k(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
fxf:function fxf(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fJy:function fJy(d){this.a=d},
fJu:function fJu(){},
fJx:function fJx(d,e){this.a=d
this.b=e},
fJv:function fJv(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fJw:function fJw(d,e,f){this.a=d
this.b=e
this.c=f},
fJz:function fJz(d,e){this.a=d
this.b=e},
hbJ:function hbJ(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
hbK:function hbK(){},
Y3:function Y3(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aHx:function aHx(d,e,f){var _=this
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
_.a9$=f
_.c=_.a=null},
eWz:function eWz(d,e,f){this.a=d
this.b=e
this.c=f},
eWq:function eWq(d,e,f){this.a=d
this.b=e
this.c=f},
eWy:function eWy(d){this.a=d},
eWn:function eWn(d,e){this.a=d
this.b=e},
eWm:function eWm(d,e){this.a=d
this.b=e},
eWo:function eWo(d){this.a=d},
eWl:function eWl(d,e){this.a=d
this.b=e},
eWp:function eWp(d,e){this.a=d
this.b=e},
eWF:function eWF(d,e){this.a=d
this.b=e},
eWE:function eWE(d,e){this.a=d
this.b=e},
eWD:function eWD(d){this.a=d},
eWC:function eWC(d){this.a=d},
eWG:function eWG(d){this.a=d},
eWA:function eWA(d,e){this.a=d
this.b=e},
eWB:function eWB(d){this.a=d},
eWx:function eWx(){},
eWs:function eWs(d){this.a=d},
eWt:function eWt(d){this.a=d},
eWu:function eWu(d){this.a=d},
eWv:function eWv(d){this.a=d},
eWr:function eWr(d){this.a=d},
eWw:function eWw(d){this.a=d},
eWk:function eWk(d){this.a=d},
eWj:function eWj(d){this.a=d},
byW:function byW(d,e,f,g,h,i,j){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.a=j},
aPt:function aPt(){},
Sl(d,e,f,g,h,i,j,k,l,m){var w,v,u
if(g<1||e.length===0)return 0
w=new D.fJe(j,e,m,k,h,f,i,l)
v=w.$1(g)
u=v.b.c
if(u>l&&u>0)v=w.$1(g*l/u)
v.a4(d,new B.r(f.a-v.b.c*i,f.b))
w=v.b.a.c
return w.gb8(w)},
aQG(d,e,f,g,h,i,j,k,l){var w,v,u,t,s,r,q,p,o=h/2,n=f-o,m=f+o
o=i/2
w=g-o
v=g+o
u=l+j
o=new D.fuJ()
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
t.san(new B.a7(A.ay,A.aC,A.x,B.a([o,k],x.O),null,null).az(0,B.aiq(p.glc().a.getBounds())))
d.af(p,t)},
fw1(d,e,f,a0,a1,a2,a3,a4,a5){var w,v,u,t,s,r,q,p,o,n=null,m=e.hh(f,a5,a0),l=m.a,k=e.hh(f,a5+a2,a0),j=k.a,i=a1*m.b,h=a1*k.b,g=e.c
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
p.E(new B.akv(B.bY(l,v*w,v),3.141592653589793,-3.141592653589793,!1))
p.E(new B.aq(u,r))
p.E(new B.bA())
u=B.L()
u.san(new B.a7(A.a5,A.a9,A.x,a3,M.SX,n).az(0,new B.a3(s,r,g,q)))
d.af(p,u)
g=h*2
o=B.bY(j,g*w,g)
g=B.L()
v=B.ap(a4,A.c,0.4)
v.toString
g.san(new B.bT(A.mP,0.5,A.x,n,0,B.a([v,a4],x.O),n,n).az(0,o))
d.c1(o,g)},
fD5(d){var w,v,u,t,s=A.i.F(d,1)*7.48,r=[1.24,2.5,1.24,2.5]
for(w=0;w<4;++w){v=r[w]
if(s<=v){v=[C.fiW,C.fkp,C.fj1,C.fiL][w].a
u=v[0]
t=v[1]
return new B.y(u+v[2]*s,t+v[3]*s)}s-=v}return C.fa_},
iB0(g1,g2,g3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6,d7,d8,d9,e0,e1,e2,e3,e4,e5,e6,e7,e8,e9,f0,f1,f2,f3,f4,f5,f6,f7=null,f8=1e9,f9=g2.a,g0=g2.b
if(f9<=0||g0<=0)return
w=A.i.F(g3,10)
v=new B.a3(0,0,0+f9,0+g0)
u=g1.c
J.bs(u.save())
u.clipRect(B.hP(v),$.lD()[1],!0)
t=$.T()
s=B.L()
s.san(C.eKC.az(0,v))
g1.aD(v,s)
r=g2.gdk()>=120
if(r){q=new B.e0()
q.cT(5)
for(s=g3*f9*0.01,p=g0*0.02,o=0;o<8;++o){n=A.i.F(q.ai()*f9+s,f9)
m=q.ai()
l=q.ai()
k=new B.as(A.T,A.Q,A.W,A.X,A.U)
k.r=A.aH.j(0.07).gp(0)
k.y=new B.fZ(A.H,p)
g1.O(new B.r(n,m*g0*0.5),g0*(0.02+l*0.04),k)}}j=new D.cWU(g2)
j.b=Math.sin(g3*0.32)*0.22
s=0.86+Math.sin(g3*0.21)*0.05
j.c=s
j.d=g0*1.8
j.e=new B.r(f9*0.5,g0*0.5)
i=A.cn.aA(0,A.i.D(A.i.D((w-1.6)/0.5,0,1),0,1))
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
if(r)d.y=new B.fZ(A.H,g0*0.025)
g1.af(e,d)
l=new B.aH(t,A.aj,f7,f7,B.a([],p))
k=B.B(B.a([j.hh(-1.75,-0.07,-1.05).a,j.hh(1.75,-0.07,-1.05).a,j.hh(1.75,0,-1.05).a,j.hh(-1.75,0,-1.05).a],n),m)
l.E(new B.zz(k,!0))
k=B.L()
k.r=C.btj.gp(0)
g1.af(l,k)
a0=new B.aH(t,A.aj,f7,f7,B.a([],p))
t=B.B(B.a([j.hh(-1.75,0,-1.05).a,j.hh(1.75,0,-1.05).a,j.hh(1.75,0,1.05).a,j.hh(-1.75,0,1.05).a],n),m)
a0.E(new B.zz(t,!0))
t=B.L()
t.san(C.cdh.az(0,B.aiq(a0.glc().a.getBounds())))
g1.af(a0,t)
if(r){a1=B.L()
a1.r=A.bv.j(0.08).gp(0)
a1.c=1
for(a2=-1.75;a2<=1.76;a2+=0.25)g1.ah(j.hh(a2,0,-1.05).a,j.hh(a2,0,1.05).a,a1)
for(a3=-1.05;a3<=1.06;a3+=0.25)g1.ah(j.hh(-1.75,0,a3).a,j.hh(1.75,0,a3).a,a1)}for(t=[C.faJ,C.f8l,C.f4u,C.f65],n=t.length,a4=0;a4<n;++a4){m=t[a4]
a5=j.hh(m.a,0,m.b)
a6=a5.a
a7=a5.b
a8=Math.sin(s)*0.55+0.1
m=a7*0.12
m=B.bY(a6,m*a8,m)
$.T()
l=new B.as(A.T,A.Q,A.W,A.X,A.U)
l.r=E.H8.gp(0)
g1.c1(m,l)
l=a7*0.06
l=B.bY(a6,l*a8,l)
m=new B.as(A.T,A.Q,A.W,A.X,A.U)
m.r=C.Zt.gp(0)
g1.c1(l,m)}t=$.T()
s=B.a([],p)
a9=new B.aH(t.r,A.aj,f7,f7,s)
for(o=0;o<=120;++o){b0=D.fD5(o/120)
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
t.e=A.dN
t.r=C.bs7.gp(0)
g1.af(a9,t)
t=B.L()
t.b=A.ac
t.c=b1*0.045
t.e=A.dN
t.san(C.av3.az(0,v))
g1.af(a9,t)
if(g){b2=B.L()
b2.b=A.ac
b2.c=b1*0.09
b2.r=A.hj.j(0.25+0.1*Math.sin(g3*6)).gp(0)
if(r)b2.y=new B.fZ(A.H,b1*0.04)
g1.af(a9,b2)}for(t=[C.eUL,C.eTP],s=t.length,a4=0;a4<s;++a4){n=t[a4]
b3=n.a
b4=n.b
for(n=b3-0.2,m=b4-0.17,l=b4+0.17,o=0;o<5;++o){b5=n+o*0.1
D.aQG(g1,j,b5,m,0.035,0.08,0.03,A.cA,0)
D.aQG(g1,j,b5,l,0.035,0.08,0.03,A.cA,0)}D.aQG(g1,j,b3,b4,0.55,0.3,0.08,A.cu,0)
b6=j.hh(b3,0.081,b4)
b7=b6.a
a7=b6.b
D.Sl(g1,"NGMY",new B.r(b7.a,b7.b-a7*0.05),a7*0.08,A.c.j(0.75),0.5,f7,a7*0.01,f8,A.u)}D.aQG(g1,j,-0.55,0.62,0.34,0.2,0.08,A.aM,0)
b8=j.hh(-0.7,0.1,0.62).a
b9=(1-i)*0.75
c0=j.hh(-0.7+0.32*Math.cos(b9),0.1+0.32*Math.sin(b9),0.62).a
$.T()
t=B.L()
t.c=b1*0.04
t.d=A.bF
t.san(C.av8.az(0,B.rc(b8,c0)))
g1.ah(b8,c0,t)
t=B.L()
t.r=A.aB.gp(0)
g1.O(b8,b1*0.025,t)
if(i>0.95&&w<2.6){t=A.i.D((w-2.1)/0.5,0,1)
s=B.L()
s.r=A.bM.j(0.8).gp(0)
g1.O(c0,b1*0.08*(1-t),s)}D.aQG(g1,j,0.55,0.62,0.46,0.12,0.1,C.bxm,0.02)
for(t=[C.f0W,C.f46,C.eVQ,C.eSx],s=t.length,a4=0;a4<s;++a4){n=t[a4]
D.aQG(g1,j,0.41000000000000003+n.a*0.09,0.62,0.035,0.125,0.105,n.b,0.02)}D.fw1(g1,j,-1.25,0,0.17,0.62,C.cDh,C.ait,0)
c1=j.hh(-1.25,0.62,0)
a7=c1.b
D.fw1(g1,j,-1.25,0,0.06,0.06,C.dds,C.am8,0.62)
D.Sl(g1,"9V",j.hh(-1.25,0.3,0).a.aI(0,new B.r(0,a7*0.06)),a7*0.11,A.bt,0.5,f7,0,f8,A.u)
D.Sl(g1,"+",c1.a.aI(0,new B.r(a7*0.16,a7*0.18)),a7*0.12,A.ab,0.5,f7,0,f8,A.u)
D.fw1(g1,j,0,-0.62,0.13,0.36,C.dt8,A.dS,0)
D.fw1(g1,j,1.25,0,0.12,0.16,C.d8k,A.cX,0)
c2=j.hh(1.25,0.36,0)
b2=c2.a
c3=c2.b*0.22
t=f>0
if(t){$.T()
c4=B.L()
s=c3*4
c4.san(new B.bT(A.z,0.5,A.x,f7,0,B.a([A.bM.j(0.65*f),A.au.j(0.18*f),A.L],x.O),A_.SP,f7).az(0,B.bX(b2,s)))
g1.O(b2,s,c4)}c5=B.bX(b2,c3)
s=$.T()
n=B.L()
m=x.O
n.san(new B.bT(A.Mv,0.5,A.x,f7,0,t?B.a([A.c,A.bM,A.au],m):B.a([A.c.j(0.5),A.bP.j(0.35),A.aM.j(0.55)],m),f7,f7).az(0,c5))
g1.c1(c5,n)
c6=B.L()
c6.b=A.ac
c6.c=Math.max(1,c3*0.06)
c6.r=(t?A.c:A.iE).gp(0)
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
t=B.bY(b2.a6(0,new B.r(d0*0.35,d0*0.4)),c3*0.25,c3*0.45)
$.T()
s=B.L()
s.r=A.c.j(0.6).gp(0)
g1.c1(t,s)
t=h>=0
if(t){for(o=14;o>=0;--o){d5=h-o*0.008
if(d5<0)continue
d6=D.fD5(d5)
d7=j.hh(d6.a,0.06,d6.b)
d8=1-o/15
$.T()
s=new B.as(A.T,A.Q,A.W,A.X,A.U)
s.r=A.hj.j(0.35*d8).gp(0)
g1.O(d7.a,d7.b*0.05*(0.4+0.6*d8),s)}d9=D.fD5(h)
e0=j.hh(d9.a,0.06,d9.b)
a6=e0.a
e1=e0.b*0.09
s=e1*3
$.T()
p=B.L()
p.san(new B.bT(A.z,0.5,A.x,f7,0,B.a([A.fA.j(0.7),A.aH.j(0.2),A.L],m),M.SX,f7).az(0,B.bX(a6,s)))
g1.O(a6,s,p)
p=B.L()
p.san(new B.bT(A.z,0.5,A.x,f7,0,C.dpk,f7,f7).az(0,B.bX(a6,e1)))
g1.O(a6,e1,p)
q=new B.e0()
q.cT(A.i.bc(g3*20))
for(s=a6.a,p=a6.b,n=e1*0.12,o=0;o<6;++o){d8=q.ai()*3.141592653589793*2
e2=e1*(1.2+q.ai()*1.6)
l=Math.cos(d8)
k=Math.sin(d8)
c8=Math.cos(d8)
c9=Math.sin(d8)
d0=new B.as(A.T,A.Q,A.W,A.X,A.U)
d0.c=Math.max(1,n)
d0.d=A.bF
d0.r=A.c.j(0.8).gp(0)
g1.ah(new B.r(s+l*e1,p+k*e1),new B.r(s+c8*e2,p+c9*e2),d0)}}if(g2.gdk()<90){u.restore()
return}e3=Math.min(g0,f9*0.6)
if(w<1.9){d8=A.i.D((w-0.2)/0.5,0,1)*(1-A.i.D((w-1.5)/0.4,0,1))
s=f9/2
D.Sl(g1,"NGMY ELECTRONICS LAB PRESENTS",new B.r(s,g0*0.08),e3*0.035,A.hj.j(d8),0.5,f7,e3*0.006,f8,A.u)
J.bs(u.save())
u.translate(0,(1-A.cn.aA(0,A.i.D(A.i.D((w-0.4)/0.6,0,1),0,1)))*e3*0.05)
D.Sl(g1,"Spark Adventure",new B.r(s,g0*0.13),e3*0.1,A.c.j(d8),0.5,B.a([A.c,A.hj],m),0,f9*0.9,A.u)
u.restore()}if(w>=1.6&&w<2.6){e4="The switch closes"
e5=1}else{e5=2
if(t&&!g){e6=D.fD5(h)
e7=e6.a
if(e6.b>0.61&&e7>0.1)e4="The resistor slows the current"
else if(e7>1.24){e4="Almost at the bulb"
e5=3}else e4="Current flows from the battery"}else if(g&&w<7.6){e4="The bulb lights up!"
e5=4}else{e4=f7
e5=0}}if(e4!=null){b7=D.a3W(e4,B.l(f7,f7,A.c,f7,f7,f7,f7,f7,"Roboto",f7,f7,A.i.fO(e3*0.045*2)/2,f7,f7,A.F,f7,f7,!0,f7,f7,f7,f7,f7,f7,f7,f7),A.b8,f7,1,1/0)
e8=e3*0.025
e9=e3*0.06
t=f9*0.05
s=g0*0.66
p=b7.b
n=p.c
p=p.a.c
l=e3*0.04
f0=B.bx(new B.a3(t,s,t+(e9+e8*3+n),s+(p.gb8(p)+e8*1.4)),new B.aP(l,l))
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
D.Sl(g1,""+e5,f1.aI(0,new B.r(0,e9*0.38)),e9*0.6,A.bB,0.5,f7,0,f8,A.u)
s=f0.gbD()
p=b7.b.a.c
b7.a4(g1,new B.r(l+e8*2+e9,s.b-p.gb8(p)/2))}if(w>=7.6){a7=A.i.D((w-7.6)/0.4,0,1)
t=B.L()
t.r=A.v.j(0.55*a7).gp(0)
g1.aD(v,t)
f2=A.ei.aA(0,A.i.D((w-7.7)/0.5,0,1))
f3=g0*0.3
J.bs(u.save())
t=f9/2
u.translate(t,f3)
g1.bV(0,0.75+0.25*f2)
u.translate(-f9/2,-f3)
s=e3*0.1
D.Sl(g1,"Build it yourself",new B.r(t,f3-e3*0.06),s,A.c.j(a7),0.5,B.a([A.c,A.hj],m),0,f9*0.9,A.u)
u.restore()
m=e3*0.05
D.Sl(g1,"NGMY Electronics Lab",new B.r(t,f3+e3*0.08),m,A.ab.j(0.85*a7),0.5,f7,0,f8,A.F)
f4=A.ei.aA(0,A.i.D((w-8.1)/0.4,0,1))
if(f4>0){f5=B.bx(B.bY(new B.r(t,f3+e3*0.24),s,Math.max(f9*0.3,e3*0.55)*f4),new B.aP(m,m))
s=B.L()
p=f5.a
n=f5.c
s.san(C.ccE.az(0,new B.a3(p,f5.b,n,f5.d)))
g1.aq(f5,s)
if(f4>0.7)D.Sl(g1,"Open the Electronics Lab",new B.r(t,f5.gbD().b-e3*0.03),e3*0.045,A.c,0.5,f7,0,(n-p)*0.85,A.u)}}if(w<0.3)f6=1-w/0.3
else f6=w>9.7?(w-9.7)/0.3:0
if(f6>0){t=B.L()
t.r=A.v.j(A.i.D(f6,0,1)).gp(0)
g1.aD(v,t)}u.restore()},
fJe:function fJe(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
cWU:function cWU(d){var _=this
_.a=d
_.e=_.d=_.c=_.b=$},
fuJ:function fuJ(){},
hcK(d){var w
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
iDt(d){var w
switch(D.hcK(d)){case"lg":w=A.hH
break
case"sony":w=A.cX
break
case"apple":w=A.bO
break
case"bo":w=C.wC
break
default:w=A.aH
break}return w},
auw:function auw(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
boL:function boL(){this.d=0
this.c=this.a=null},
eWh:function eWh(d,e){this.a=d
this.b=e},
eWi:function eWi(d,e){this.a=d
this.b=e},
eWe:function eWe(){},
eWd:function eWd(d){this.a=d},
eWf:function eWf(d){this.a=d},
eWg:function eWg(d){this.a=d},
eWb:function eWb(d){this.a=d},
eWc:function eWc(d,e){this.a=d
this.b=e},
b5C:function b5C(d,e,f){this.c=d
this.d=e
this.a=f},
bdc:function bdc(d){this.a=d},
ih6(){var w,v,u,t
try{v=$.el().gie().b
w=new B.b9(v,B.a5(v).k("b9<2>"))
if(w.a.a===0)v=2
else{J.fo(w)
v=$.ll()
u=v.d
v=u==null?v.ghs():u}return v}catch(t){return 2}},
hM4(d,e,f,g,h){var w,v,u,t,s,r,q,p,o,n,m,l,k=f.a
if(k<=0||f.b<=0)return
if($.bH7){w=d.c
J.bs(w.save())
w.clipRect(B.hP(new B.a3(0,0,0+k,0+f.b)),$.lD()[1],!0)
h.$1(d)
w.restore()
return}v=A.i.bc(g*15)
u=$.Sh.X(0,e)
w=u==null
if(w||u.a!==v){t=f.b
s=Math.max(k,t)
r=A.i.D(Math.min(4*D.ih6(),1600/s),1,64)
$.T()
q=new B.oT(new B.oo())
p=B.v1(q,null)
p.bV(0,r)
h.$1(p)
o=q.mZ()
n=o.a8c(Math.max(1,A.i.R(k*r)),Math.max(1,A.i.R(t*r)))
o.t()
if(!w)u.b.t()
u=new D.bvC(v,n)}$.Sh.n(0,e,u)
for(w=new B.dp($.Sh,$.Sh.r,$.Sh.e),m=0;w.C();){t=w.d.b
m+=t.c*t.d}w=B.a5($.Sh).k("cq<1>")
for(;;){t=$.Sh.a
if(t>1)t=t>24||m>6e6
else t=!1
if(!t)break
l=new B.cq($.Sh,w).gae(0)
if(!l.C())B.bk(B.fi())
t=$.Sh.X(0,l.gP(0)).b
m-=t.c*t.d
t.t()}n=u.b
d.o9(n,new B.a3(0,0,n.c,n.d),new B.a3(0,0,0+k,0+f.b),$.hTh())},
bvC:function bvC(d,e){this.a=d
this.b=e},
hZy(d,e,f){var w=d.BYTES_PER_ELEMENT,v=(B.kt(e,f,A.o.ea(d.byteLength,w),null,null)-e)*w
if(A.o.F(v,4)!==0)throw B.Y(B.dJ(y.a,null))
return J.a4I(A.ig.gaS(d),d.byteOffset+e*w,A.o.ap(v,4))},
hYt(d,e,f){var w=d.BYTES_PER_ELEMENT,v=(B.kt(e,f,A.o.ea(d.byteLength,w),null,null)-e)*w
if(A.o.F(v,4)!==0)throw B.Y(B.dJ(y.a,null))
return J.aUl(A.p9.gaS(d),d.byteOffset+e*w,A.o.ap(v,4))},
hLr(){var w,v=null,u=$.T().r,t=x.v,s=new B.aH(u,A.aj,v,v,B.a([],t))
s.E(new B.aZ(0.5,0.33))
s.E(new B.i5(0.42,0.33,0.33,0.27,0.22,0.27))
s.E(new B.i5(0.08,0.27,-0.03,0.4,-0.03,0.58))
s.E(new B.i5(-0.03,0.78,0.09,0.98,0.19,1.06))
s.E(new B.i5(0.26,1.11,0.33,1.11,0.39,1.08))
s.E(new B.i5(0.45,1.05,0.55,1.05,0.61,1.08))
s.E(new B.i5(0.67,1.11,0.74,1.11,0.81,1.05))
s.E(new B.i5(0.88,0.98,0.95,0.88,0.99,0.79))
s.E(new B.i5(0.86,0.74,0.79,0.62,0.8,0.51))
s.E(new B.i5(0.81,0.42,0.86,0.36,0.92,0.33))
s.E(new B.i5(0.85,0.28,0.77,0.26,0.7,0.26))
s.E(new B.i5(0.61,0.26,0.56,0.33,0.5,0.33))
s.E(new B.bA())
w=new B.aH(u,A.aj,v,v,B.a([],t))
w.E(new B.aZ(0.49,0.25))
w.E(new B.i5(0.48,0.14,0.56,0.03,0.7,0))
w.E(new B.i5(0.71,0.12,0.62,0.23,0.49,0.25))
w.E(new B.bA())
t=new B.aH(u,A.aj,v,v,B.a([],t))
t.Lt(0,s,A.J)
t.Lt(0,w,A.J)
return t},
hNI(d){return C.dr_[A.o.D(d,0,7)]},
ajq(d){return d.j(A.i.fO(d.a*16)/16)},
a3W(d,e,f,g,h,i){var w,v,u=null,t=isFinite(i),s=new B.bti([d,e,h,g,f,t?A.i.fO(i*2)/2:-1]),r=$.ahq.X(0,s)
if(r!=null){$.ahq.n(0,s,r)
return r}w=B.h_(g,A.cH,u,h,u,B.d1(u,u,u,u,u,u,u,u,u,e,d),f,A.cc,u,A.e1,A.cd)
w.nA(t?A.i.fO(i*2)/2:1/0)
$.ahq.n(0,s,w)
for(t=B.a5($.ahq).k("cq<1>");$.ahq.a>800;){v=new B.cq($.ahq,t).gae(0)
if(!v.C())B.bk(B.fi())
$.ahq.X(0,v.gP(0)).t()}return w}},C,N,F,Z,A_
J=c[1]
B=c[0]
A=c[2]
O=c[284]
P=c[351]
L=c[150]
G=c[53]
E=c[201]
M=c[323]
Q=c[329]
I=c[173]
R=c[131]
S=c[265]
T=c[161]
H=c[50]
U=c[198]
V=c[184]
W=c[158]
X=c[269]
Y=c[292]
K=c[211]
D=a.updateHolder(c[33],D)
C=c[156]
N=c[56]
F=c[154]
Z=c[129]
A_=c[324]
D.bSZ.prototype={
bD7(d){var w=this,v=w.a
if(v!=null){v=B.bbw(w,v,"Vertices",new D.bT_(),x.J)
w.b!==$&&B.aR()
w.b=v}else{w.b!==$&&B.aR()
w.b=null}},
ga5R(){if(this.c)throw B.Y(B.bb("Attempted to use a disposed Vertices."))
return this.a},
t(){if(this.c)return
var w=this.b
w===$&&B.d()
if(w!=null)w.t()
this.c=!0}}
D.cH3.prototype={
a8(){return"VertexMode."+this.b}}
D.apW.prototype={
a8(){return"NgmyAdHero."+this.b}}
D.i7.prototype={}
D.rY.prototype={}
D.b0k.prototype={}
D.Jb.prototype={
B(d){var w,v,u,t,s=null,r=B.aF(d,A.bW,x.w).w,q=B.n(24),p=this.c,o=p.e,n=B.K(o.j(0.45),A.r,1),m=B.a([new B.aa(0,A.H,o.j(0.25),A.J,30)],x.V),l=p.d,k=B.a([l,o],x.O),j=A.c.j(0.22),i=B.n(14),h=x.p
k=B.a([B.p(s,B.A(B.a([B.p(s,B.W(p.c,A.c,s,s,s,28),A.f,s,s,new B.o(j,s,s,i,s,s,A.m),s,48,s,s,s,s,s,48),A.bb,B.E(B.x(B.a([B.c(p.b,s,s,s,s,s,s,A.dq,s,s,s),A.bC,B.c(p.f+" "+p.r,s,s,s,s,s,s,B.l(s,s,A.c.j(0.85),s,s,s,s,s,s,s,s,12.5,s,s,A.O,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],h),A.B,s,A.e,A.h,0,A.p),1)],h),A.l,s,A.e,A.h,0,s,s),A.f,s,s,new B.o(s,s,s,s,s,new B.a7(A.ay,A.aC,A.x,k,s,s),A.m),s,s,s,s,A.Pc,s,s,s),new B.D(K.aom,B.c(p.w,s,s,s,s,s,s,C.fQq,s,s,s),s)],h)
for(j=p.x,w=0;w<3;++w){v=j[w]
i=B.ap(l,A.v,0.4)
i.toString
k.push(new B.D(C.bIp,new B.c3(A.aL,A.e,A.h,A.l,s,A.p,s,0,B.a([B.p(s,B.W(A.hn,i,s,s,s,14),A.f,s,s,new B.o(o,s,s,s,s,s,A.a6),s,20,s,s,s,s,s,20),A.ar,new B.bz(1,A.ba,B.c(v,s,s,s,s,s,s,A.WL,s,s,s),s)],h),s),s))}j=o.j(0.12)
i=B.n(14)
u=B.K(o.j(0.4),A.r,1)
t=B.ap(o,A.c,0.2)
t.toString
k.push(B.p(s,B.A(B.a([B.W(A.mu,t,s,s,s,20),A.aa,B.E(B.x(B.a([C.hbY,A.bC,B.c(p.cx,s,s,s,s,s,s,A.kQ,s,s,s)],h),A.B,s,A.e,A.h,0,A.p),1)],h),A.l,s,A.e,A.h,0,s,s),A.f,s,s,new B.o(j,s,u,i,s,s,A.m),s,s,C.hGR,C.bI1,A.bl,s,s,s))
i=B.E(B.en(C.c0E,C.hHA,C.hfo,this.d,B.di(s,s,s,s,s,s,s,s,s,A.c,s,s,A.kI,s,new B.ba(B.n(14),A.a1),K.afO,s,s,s,s)),1)
l=B.ap(l,A.v,0.5)
l.toString
k.push(new B.D(A.wZ,B.A(B.a([i,A.ar,B.E(B.bI(A.adn,C.hG8,new D.c5M(d),B.bp(o,s,s,s,l,s,A.kI,s,new B.ba(B.n(14),A.a1),s,s,s)),1)],h),A.l,s,A.e,A.h,0,s,s),s))
return B.bo(!0,B.at(new B.cQ(new B.aY(0,520,0,r.a.b*0.9),B.p(s,B.cb(B.x(k,A.am,s,A.e,A.M,0,A.p),A.t,s,A.y,s,s,s,s,s,A.ah),A.aq,s,s,new B.o(A.ZN,s,n,q,m,s,A.m),s,s,C.hGG,O.tp,s,s,s,s),s),1,s,s),!0,!1,A.ag,!0,!1)}}
D.wF.prototype={}
D.yy.prototype={}
D.Y3.prototype={
S(){return new D.aHx(K.B0,null,null)}}
D.aHx.prototype={
gQM(){var w,v=this,u=v.d
if(u===$){w=B.br(null,A.oM,null,1,null,v)
w.ct(0)
v.d!==$&&B.bF()
v.d=w
u=w}return u},
gyl(){var w=this.e
return w===$?this.e=this.a.e:w},
gaSh(){var w=this.as
if(w===$)w=this.as=this.a.f?3:0
return w},
gBp(){var w=this.gQM().y
w=w==null?null:A.o.ap(w.a,1000)
return(w==null?0:w)/1000},
gaxU(){var w=this.f
return w>=0&&C.iv[w].e===-1},
ag5(){var w,v,u=this
if(u.r)return null
w=u.f
if(w>=0){v=C.iv[w].e
if(v===-2)return null
if(v===-1)return A.o.F(u.ay+A.i.bc(Math.max(0,u.gBp()-u.ch)/10),14)
return v}v=C.aKR.h(0,A.o.F(u.gyl(),10))
return v==null?null:D.hNI(v)},
ce_(d,e){if(e.a<=0||e.b<=0)return
this.l(new D.eWz(this,d,e))
H.dD(660,"",90,0,0.25,"tri")},
cdW(d){this.l(new D.eWq(this,d,14))
H.dD(900,"",40,0,0.25,"noise")},
cdY(){this.l(new D.eWy(this))
this.Xl()},
ag7(){return this.c5Y()},
c5Y(){var w=0,v=B.j(x.o),u,t=this,s,r,q
var $async$ag7=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r={}
q=t.ag5()
if(q==null){w=1
break}s=t.Q
if(s!=null)s.a1(0)
t.l(t.gbcq())
r.a=!1
s=t.c
s.toString
w=3
return B.b(B.bU(A.L,null,new D.eWn(r,q),s,!0,!0,!0,null,!1,!1,x.o),$async$ag7)
case 3:if(t.c==null){w=1
break}if(r.a)t.cdY()
else t.Xl()
case 1:return B.h(u,v)}})
return B.i($async$ag7,v)},
Xl(){var w=this,v=w.Q
if(v!=null)v.a1(0)
w.Q=B.cy(B.dv(0,0,0,0,0,w.gaSh()>0&&w.gBp()<3.2?13:10),w.gcaj())},
cak(){var w=this
if(w.c==null)return
if(w.f<0&&!w.r){w.l(new D.eWo(w))
H.dD(900,"",40,0,0.2,"noise")}w.Xl()},
a_(){var w=this
w.a3()
w.w=B.cy(w.a.r,w.gb2k())
w.Xl()
H.dD(520,"",80,0,0.25,"tri")},
cdT(){var w=this.c
if(w!=null&&B.a8(w,!1).q6()){w=this.c
w.toString
B.a8(w,!1).N(this.gyl())}},
BT(){var w=this.w
if(w!=null)w.a1(0)
this.w=null},
ag6(d){this.l(new D.eWl(this,d))
H.dD(900,"",40,0,0.3,"noise")},
b2m(d){this.l(new D.eWp(this,d))
H.dD(700,"",60,0,0.3,"tri")},
t(){var w,v=this
if(v.y){G.D9(E.Ll)
G.bGQ()}w=v.w
if(w!=null)w.a1(0)
w=v.Q
if(w!=null)w.a1(0)
v.gQM().t()
v.bBB()},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.y,i=!j||!l.z
j=j?B.aF(d,A.dH,x.w).w.r.b+26:10
w=l.cdZ(A.cz,"Back to the board",l.gb2k())
v=l.y
u=v?T.Ip:A.xf
v=v?"Leave full screen":"Full screen"
v=l.b2n(u,v,l.gce0(),C.hHr)
u=B.n(20)
t=l.f
s=l.a
r=x.p
q=new B.D(new B.R(10,j,10,0),B.A(B.a([w,A.aa,v,A.aa,B.E(new B.bK(A.a9,k,k,B.p(k,B.c(t>=0?s.c+" \xb7 "+C.iv[t].a:s.c+" \xb7 CH "+(l.gyl()+1),k,1,A.a2,k,k,k,V.xZ,k,k,k),A.f,k,k,new B.o(A.b7,k,k,u,k,k,A.m),k,k,k,k,A.lY,k,k,k),k),1)],r),A.l,k,A.e,A.h,0,k,k),k)
p=new B.ax(l.gb2l(),6,A.r,-1)
if(l.y)j=A.agu
else{j=B.n(10)
j=new B.o(k,k,new B.bE(p,p,new B.ax(l.gb2l(),16,A.r,-1),p),j,B.a([new B.aa(0,A.H,D.iDt(l.a.d).j(0.25),A.J,40)],x.V),k,A.m)}j=B.a([B.p(k,B.bw(B.n(l.y?0:4),B.cf(new D.eWF(l,i)),A.aq),A.f,k,k,j,k,k,C.hHl,k,k,k,k,k)],r)
if(!l.y)j.push(B.ao(0,new B.ds(!0,B.at(new D.b5C(l.a.d,9.92,k),k,k,k),k),16,k,0,0,k,k))
o=B.at(new B.fJ(1.7777777777777777,new B.an(A.a0,k,A.b4,A.t,j,k),k),k,k,k)
j=l.y
w=!j
v=j?l.gb2o():k
if(j){j=i?1:0
r=new B.an(A.a0,k,A.b4,A.t,B.a([o,B.ao(k,B.xL(new B.ds(!i,q,k),A.b_,A.i9,j),k,k,0,0,0,k)],r),k)
j=r}else{j=l.cdX()
u=B.E(new B.D(A.fC,o,k),1)
t=A.v.j(0.65)
s=B.n(18)
n=l.f
n=B.c(n>=0?C.iv[n].a:C.Tl[l.gyl()].a,k,k,k,k,k,k,A.hs,A.K,k,k)
m=l.f
j=B.x(B.a([q,A.ak,j,A.P,u,B.p(k,B.x(B.a([n,B.c(m>=0?C.iv[m].c:C.Tl[l.gyl()].b,k,k,k,k,k,k,W.acR,A.K,k,k)],r),A.l,k,A.e,A.M,0,A.p),A.f,k,k,new B.o(t,k,k,s,k,k,A.m),k,k,C.hH1,X.HD,A.bT,k,k,k)],r),A.l,k,A.e,A.h,0,A.p)}return B.c5(k,A.v,B.bo(w,B.aA(A.c_,j,A.y,!1,k,v,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,new D.eWG(l),k,k,k,k,k,k,!1,A.a4),w,!1,A.ag,w,w),k,!1,!1,k,k)},
ce1(){var w=!this.y
this.l(new D.eWA(this,w))
if(w){G.D9(E.aci)
G.hov(!0)}else{G.D9(E.Ll)
G.bGQ()}},
ce2(){var w,v=this
B.jC()
v.l(new D.eWB(v))
w=v.c.L(x.q).f
w.Mz()
if(v.z)w.T(C.aWp)},
cdX(){var w=this,v=null,u=new D.eWx(),t=A.v.j(0.72),s=B.n(22),r=B.K(A.aH.j(0.5),A.r,1)
return B.p(v,B.A(B.a([u.$3(A.xk,"CH \u2212",new D.eWs(w)),u.$3(A.ib,"CH +",new D.eWt(w)),u.$5$color$on(A.Iu,"TV",new D.eWu(w),A.aH,w.f<0),u.$5$color$on(A.zP,"APPS",new D.eWv(w),A.bk,w.r),u.$5$color$on(A.zS,"ADS",new D.eWw(w),A.c2,w.f===0)],x.p),A.l,v,A.e,A.M,0,v,v),A.f,v,v,new B.o(t,v,r,s,v,v,A.m),v,v,v,v,A.Pn,v,v,v)},
bHg(){return new D.auw(this.a.d,this.gcdV(),new D.eWk(this),null)},
gb2l(){switch(D.hcK(this.a.d)){case"apple":var w=A.cX
break
case"bo":w=C.Cf
break
case"sony":w=C.bit
break
case"lg":w=A.ew
break
default:w=A.cu
break}return w},
b2n(d,e,f,g){var w=null,v=B.nl(w,A.b7,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w)
return B.aI(w,w,w,w,B.W(d,A.c,w,w,w,w),w,w,g,f,w,w,w,v,e,w)},
cdZ(d,e,f){return this.b2n(d,e,f,null)}}
D.byW.prototype={
a4(d,e){var w=this
return D.h3j(d,e,w.b,w.d,w.e,w.c,w.r,w.f)},
aC(d){return!0}}
D.aPt.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a7(0,w.gbB())
w.a9$=null
w.a2()},
aZ(){this.b7()
this.b5()
this.bC()}}
D.cWU.prototype={
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
D.auw.prototype={
S(){return new D.boL()},
a7p(d,e){return this.d.$1(e)}}
D.boL.prototype={
b2p(d){this.l(new D.eWh(this,d))
this.a.a7p(0,d)},
B(d){var w,v=this
switch(D.hcK(v.a.c)){case"lg":w=v.c6e()
break
case"sony":w=v.cDX()
break
case"apple":w=v.ce3()
break
case"bo":w=v.bId()
break
default:w=v.cy7()
break}return w},
gag8(){var w=new B.V(Date.now(),0,!1)
return A.a.b0(A.o.v(B.d6(w)),2,"0")+":"+A.a.b0(A.o.v(B.fF(w)),2,"0")},
aA4(d,e,f,g,h,i,j){var w,v,u=null,t=C.iv[d],s=this.d===d,r=t.d,q=B.ap(r,A.v,0.55)
q.toString
q=B.a([r,q],x.O)
r=B.n(h)
if(s)w=i
else w=A.L
w=B.K(w,A.r,s?2.5:0)
v=B.a([B.c(t.b,u,u,u,u,u,u,B.l(u,u,u,u,u,u,u,u,u,u,u,e,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],x.p)
if(g)v.push(new B.D(A.v1,B.c(t.a,u,1,A.a2,u,u,u,A.WV,u,u,u),u))
return B.aA(u,B.p(u,B.x(v,A.l,u,A.b9,A.h,0,A.p),A.f,u,u,new B.o(u,u,w,r,u,new B.a7(A.ay,A.aC,A.x,q,u,u),A.m),u,f,u,u,u,u,u,j),A.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new D.eWi(this,d),u,u,u,u,u,u,!1,A.a4)},
b2q(d,e,f,g,h,i){return this.aA4(d,e,f,!1,g,h,i)},
cy7(){var w,v,u,t,s,r,q=this,p=null,o=q.a.e,n=x.p,m=B.A(B.a([C.h1A,A.aa,C.fUm,A.aY,C.c4o,A.aa,C.c_T,A.aa,B.c(q.gag8(),p,p,p,p,p,p,C.aYD,p,p,p)],n),A.l,p,A.e,A.h,0,p,p),l=C.iv[q.d],k=B.c(l.a,p,p,p,p,p,p,A.kQ,p,p,p)
l=B.c(l.c,p,1,A.a2,p,p,p,C.fLr,p,p,p)
w=A.c.j(0.08)
v=B.a([],n)
for(u=0;u<2;++u){t=new B.aP(8,8)
v.push(B.p(p,B.W(C.czC[u],A.ab,p,p,p,17),A.f,p,p,new B.o(A.bw,p,p,new B.bc(t,t,t,t),p,p,A.m),p,34,p,A.OW,p,p,p,34))}t=B.a([],n)
for(s=0;s<8;++s){r=q.d===s?1.12:1
t.push(new B.D(A.OW,new B.zA(q.aA4(s,14,44,!0,8,A.aH,52),r,A.b_,A.ha,p,p),p))}v.push(B.E(B.cb(B.A(t,A.l,p,A.e,A.h,0,p,p),A.t,p,A.y,p,p,p,p,p,A.aL),1))
return B.aA(p,B.p(p,B.x(B.a([m,A.aY,new B.bK(A.a5,p,p,k,p),new B.bK(A.a5,p,p,l,p),A.ak,B.p(p,B.A(v,A.l,p,A.e,A.h,0,p,p),A.f,p,p,new B.o(w,p,p,A.YI,p,p,A.m),p,p,p,p,R.Pk,p,p,p)],n),A.l,p,A.e,A.h,0,A.p),A.f,p,p,C.ba4,p,p,p,p,E.anj,p,p,p),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,o,p,p,p,p,p,p,!1,A.a4)},
c6e(){var w=null,v=this.a.e,u=x.p
return B.aA(w,B.p(w,B.x(B.a([B.A(B.a([B.p(w,C.h7P,A.f,w,w,new B.o(A.hH,w,w,B.n(10),w,w,A.m),w,w,w,w,A.nb,w,w,w),A.bf,C.h0t,A.aY,B.c(this.gag8(),w,w,w,w,w,w,A.Fr,w,w,w)],u),A.l,w,A.e,A.h,0,w,w),A.aY,new B.a6(w,62,B.hU(A.t,w,new D.eWd(this),8,w,w,A.aL,new D.eWe(),!1),w)],u),A.B,w,A.e,A.h,0,A.p),A.f,w,w,C.baf,w,w,w,w,P.P0,w,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,v,w,w,w,w,w,w,!1,A.a4)},
cDX(){var w,v,u,t,s=this,r=null,q=C.iv[s.d],p=s.a.e,o=x.p,n=B.a([B.p(r,C.fnW,A.f,r,r,new B.o(A.ds,r,r,B.n(12),r,r,A.m),r,r,r,r,A.zx,r,r,r),A.aa],o)
for(w=0;w<3;++w){v=C.dwK[w]
u=v==="Apps"?A.c:A.aF
n.push(new B.D(A.j_,B.c(v,r,r,r,r,r,r,new B.H(!0,u,r,r,r,r,9.5,A.O,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r),r,r,r),r))}n.push(A.aY)
n.push(B.c(s.gag8(),r,r,r,r,r,r,C.fKO,r,r,r))
n=B.A(n,A.l,r,A.e,A.h,0,r,r)
u=q.d
t=B.ap(u,A.v,0.7)
t.toString
t=B.a([u,t],x.O)
u=B.n(10)
return B.aA(r,B.p(r,B.x(B.a([n,A.fN,B.E(B.A(B.a([B.E(B.p(r,B.x(B.a([B.c(q.b,r,r,r,r,r,r,A.qj,r,r,r),B.c(q.a,r,r,r,r,r,r,A.ol,r,r,r),B.c(q.c,r,2,A.a2,r,r,r,C.fRD,r,r,r),A.cM,B.aA(r,B.p(r,C.fYc,A.f,r,r,new B.o(A.c,r,r,B.n(10),r,r,A.m),r,r,r,r,A.zx,r,r,r),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new D.eWf(s),r,r,r,r,r,r,!1,A.a4)],o),A.B,r,A.mC,A.h,0,A.p),A.f,r,r,new B.o(r,r,r,u,r,new B.a7(A.a5,A.a9,A.x,t,r,r),A.m),r,r,r,r,A.cr,r,r,r),5),A.aa,B.E(B.iK(!0,r,r,A.y,C.fv6,new D.eWg(s),8,A.ag,r,A.ah,!1),6)],o),A.l,r,A.e,A.h,0,r,r),1)],o),A.B,r,A.e,A.h,0,A.p),A.f,C.bvD,r,r,r,r,r,r,A.fM,r,r,r),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,p,r,r,r,r,r,r,!1,A.a4)},
ce3(){var w,v,u,t,s=this,r=null,q=s.a.e,p=x.p,o=B.A(B.a([C.c5_,A.ry,C.he4,A.aY,B.c(s.gag8(),r,r,r,r,r,r,A.Fu,r,r,r)],p),A.l,r,A.e,A.h,0,r,r),n=B.a([],p)
for(w=0;w<8;++w){v=s.d===w
u=v?6:0
t=v?C.dD2:A.Tu
v=v?1.18:1
n.push(new B.D(A.fd,B.cT(r,new B.zA(s.b2q(w,20,44,12,A.c,44),v,A.b_,A.eJ,r,r),r,r,A.b_,new B.o(r,r,r,r,t,r,A.m),A.eJ,r,r,r,new B.R(0,0,0,u),r,r,r,r),r))}return B.aA(r,B.p(r,B.x(B.a([o,A.aY,new B.a6(r,68,B.cb(B.A(n,A.dI,r,A.e,A.h,0,r,r),A.t,r,A.y,r,r,r,r,r,A.aL),r),A.at,B.c(C.iv[s.d].a,r,r,r,r,r,r,A.pl,r,r,r)],p),A.l,r,A.e,A.h,0,A.p),A.f,r,r,C.ba6,r,r,r,r,C.ank,r,r,r),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,!1,A.a4)},
bId(){var w,v,u,t,s,r,q=this,p=null,o=q.a.e,n=C.iv[q.d],m=x.p
n=B.E(B.x(B.a([C.fXK,A.aY,B.c(n.b,p,p,p,p,p,p,A.mK,p,p,p),A.at,B.c(n.a,p,p,p,p,p,p,C.fCC,p,p,p),A.bC,B.c(n.c,p,p,p,p,p,p,C.fRW,p,p,p),A.ak,B.aA(p,B.p(p,C.hgf,A.f,p,p,C.baC,p,p,p,p,C.bEo,p,p,p),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new D.eWb(q),p,p,p,p,p,p,!1,A.a4),A.aY],m),A.B,p,A.e,A.h,0,A.p),4)
w=B.p(p,p,A.f,C.btf,p,p,p,p,p,A.f2,p,p,p,0.6)
v=B.a([],m)
for(u=0;u<8;++u){t=C.iv[u]
s=q.d===u
r=s?C.wC:C.ai0
s=s?12:10.5
v.push(B.aA(p,new B.D(A.v3,B.c(t.a,p,p,p,p,p,p,new B.H(!0,r,p,"serif",p,p,s,A.kg,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p),p,p,p),p),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new D.eWc(q,u),p,p,p,p,p,p,!1,A.a4))}return B.aA(p,B.p(p,B.A(B.a([n,w,B.E(B.cp(v,p,p,p,p,p,A.ah,!1),3)],m),A.l,p,A.e,A.h,0,p,p),A.f,C.bzx,p,p,p,p,p,p,A.HM,p,p,p),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,o,p,p,p,p,p,p,!1,A.a4)}}
D.b5C.prototype={
B(d){var w,v,u=null,t=D.hcK(this.c)
if(t==="apple"){w=this.d
return new B.a6(w/1.1,w,B.b4(u,u,u,new D.bdc(u),A.az),C.hGh)}switch(t){case"lg":w=C.aTz
break
case"sony":w=C.aTr
break
case"bo":w=C.aTt
break
default:w=C.f_u
break}v=this.d
return B.c(w.a,C.hG3,u,u,u,u,u,B.l(u,u,w.b,u,u,u,u,u,u,u,u,v*0.82,u,u,A.F,u,1,!0,u,v*0.08,u,u,u,u,u,u),u,u,u)}}
D.bdc.prototype={
a4(d,e){var w,v
d.nK(0,e.a,e.b/1.1)
w=D.hLr()
$.T()
v=B.L()
v.r=A.cQ.gp(0)
d.af(w,v)},
aC(d){return!1}}
D.bvC.prototype={}
var z=a.updateTypes(["~()","Y3(Z,by<G>,by<G>)","ay<~>()","~(F)","Jb(Z)"])
D.bT_.prototype={
$1(d){d.a.delete()
return null},
$S:1572}
D.fJf.prototype={
$1(d){var w,v,u,t=this,s=t.a
if(s==null)s=null
else{w=t.b
v=t.d
u=w.a-t.c*A.i.D(v,0,4000)
w=w.b
w=new B.a7(A.a5,A.a9,A.x,s,null,null).az(0,new B.a3(u,w,u+A.i.D(v,1,4000),w+d))
s=w}return s},
$S:1573}
D.fD3.prototype={
$1(d){return","},
$S:57}
D.fy2.prototype={
$2(d,e){var w,v=this,u=v.a,t=u.c
J.bs(t.save())
w=v.b
t.translate(w.a,w.b)
u.aA(0,D.hm4(v.c*3,v.d,-0.12,d).a)
e.$0()
t.restore()},
$S:1574}
D.fy3.prototype={
$0(){var w=this.a
w.nK(0,-1,1)
D.fy1(w,this.b,this.c,!0)},
$S:0}
D.fy4.prototype={
$0(){return this.a.af(this.b,this.c)},
$S:0}
D.fy5.prototype={
$0(){var w,v,u,t,s=this,r=s.a,q=s.c
D.fy1(r,s.b,q,!1)
w=s.d
if(w>0&&w<1){r.mz(0,s.e)
v=-q
w=v*3+w*q*6-q*0.5
v*=2
u=w+q
$.T()
t=B.L()
t.san(new B.a7(A.a5,A.a9,A.x,B.a([A.c.j(0),A.c.j(0.45),A.c.j(0)],x.O),null,null).az(0,new B.a3(w,0,u,1)))
r.aD(new B.a3(w,v,u,v+q*4),t)}},
$S:0}
D.fy6.prototype={
$0(){return D.fy1(this.a,this.b,this.c,!1)},
$S:0}
D.fy7.prototype={
$0(){return this.a.af(this.b,this.c)},
$S:0}
D.fy8.prototype={
$0(){var w=this.a
w.nK(0,-1,1)
D.fy1(w,this.b,this.c,!0)},
$S:0}
D.h38.prototype={
$1(d){var w=this,v=w.b
d.bV(0,1/v)
D.hpR(d,new B.av(w.c*v,w.d*v),w.e,w.a.a,w.f,null)},
$S:342}
D.h39.prototype={
$0(){var w=this,v=w.e
return D.ms(w.a,w.b.b.toUpperCase(),new B.r(w.c,w.d),v*0.036,w.f,w.w,null,v*0.006,w.r,A.u)},
$S:0}
D.h3a.prototype={
$0(){var w=this,v=w.e
return D.ms(w.a,w.b.f,new B.r(w.c,w.d),v,A.c,w.r,null,-v*0.02,w.f,A.u)},
$S:0}
D.h3b.prototype={
$0(){var w=this,v=w.b,u=w.e,t=B.ap(v.e,A.c,0.35)
t.toString
return D.ms(w.a,v.r,new B.r(w.c,w.d),u,A.c,w.r,B.a([A.c,t],x.O),-u*0.02,w.f,A.u)},
$S:0}
D.h3c.prototype={
$0(){var w=this,v=w.e
return D.ms(w.a,w.b.b.toUpperCase(),new B.r(w.c,w.d),v*0.036,w.f,w.w,null,v*0.006,w.r,A.u)},
$S:0}
D.h3d.prototype={
$0(){var w=this,v=w.e
return D.ms(w.a,w.b.b.toUpperCase(),new B.r(w.c,w.d),v*0.036,w.f,w.w,null,v*0.006,w.r,A.u)},
$S:0}
D.c5M.prototype={
$0(){return B.a8(this.a,!1).e7()},
$S:0}
D.fJ7.prototype={
$1(d){var w=null,v=B.h_(w,A.cH,w,1,w,B.d1(w,w,w,w,w,w,w,w,w,B.l(w,w,this.b,w,w,w,w,w,w,w,w,d,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),this.a),A.a7,A.cc,w,A.e1,A.cd)
v.eY()
return v},
$S:343}
D.h37.prototype={
$1(d){var w=this.b,v=B.kY(this.a,w,d)
v.toString
w=B.kY(w,this.c,d)
w.toString
w=B.kY(v,w,d)
w.toString
return w},
$S:1577}
D.fzC.prototype={
$1(d){var w=null,v=D.ajq(this.b),u=A.i.fO(d*2)
return D.a3W(this.a,B.l(w,w,v,w,w,w,w,w,w,w,w,u/2,w,w,A.u,w,w,!0,w,this.d,w,w,w,w,w,w),A.b8,w,1,1/0)},
$S:343}
D.h3k.prototype={
$1(d){var w,v=this,u=v.a
d.bV(0,1/u)
w=v.b
D.h3j(d,new B.av(w.a*u,w.b*u),v.c,v.d,v.e,v.f,v.w,v.r)},
$S:342}
D.fxf.prototype={
$1(d){var w=this,v=null,u=D.ajq(w.b),t=A.i.fO(d*2),s=w.c?A.u:A.O
return D.a3W(w.a,B.l(v,v,u,v,v,v,v,v,v,v,v,t/2,v,v,s,v,v,!0,v,w.d,v,v,v,v,v,v),A.b8,v,1,1/0)},
$S:343}
D.fJy.prototype={
$2(d,e){return A.i.D((this.a-d)/e,0,1)},
$S:79}
D.fJu.prototype={
$1(d){return A.dO.aA(0,d)},
$S:5}
D.fJx.prototype={
$2(d,e){var w=this.b
return new B.r(this.a+d*w,e*w)},
$S:684}
D.fJv.prototype={
$5(d,e,f,g,h){var w,v,u,t,s,r,q,p=this,o=p.a.$2(h,0.6)
if(o<=0)return
w=p.b
v=w.c
J.bs(v.save())
v.translate(f.a,f.b)
w.bV(0,A.i.D(A.ny.aA(0,o),0.01,1.3))
u=p.c
N.hpQ(w,A.J,g,d,u,p.d>9.5?0.5+0.3*Math.sin(u*3+d):0)
u=new B.r(0,g*1.42)
t=B.bY(u,g*0.62,g*2.5)
s=g*0.31
r=B.bx(t,new B.aP(s,s))
$.T()
q=B.L()
q.r=A.c.gp(0)
w.aq(r,q)
w.aq(B.bx(t,new B.aP(s,s)),N.ahX(A.bA,g*0.05))
D.ioY(w,"\u2665 "+e,u,g*0.4,A.qw,g*2.2)
v.restore()},
$S:1578}
D.fJw.prototype={
$3(d,e,f){var w,v,u,t,s=this.a.$2(f,0.5)
if(s<=0)return
w=A.i.D(A.ny.aA(0,s),0.01,1.3)*(1+0.07*Math.sin(this.b*6))
v=this.c
u=e*w
$.T()
t=B.L()
t.r=A.bA.gp(0)
v.O(d,u,t)
t=B.L()
t.b=A.ac
t.c=2
t.r=A.c.gp(0)
v.O(d,u,t)
D.aRV(v,"\u2665",d.aI(0,new B.r(e*0.5*w,e*0.62*w)),e*1.3*w,A.c,A.b8,0,null)},
$S:426}
D.fJz.prototype={
$2(d,e){var w,v,u=this.a,t=u.a
u=u.c-t
t+=u*0.08
w=this.b
v=w*d
return new B.a3(t,v,t+u*0.84,v+w*e)},
$S:1580}
D.hbJ.prototype={
$3(d,e,f){var w=this
return new D.Y3(w.d,w.e,w.a,w.c,w.b,null)},
$C:"$3",
$R:3,
$S:z+1}
D.hbK.prototype={
$4(d,e,f,g){var w=x.t
return new B.d9(e,!1,B.iC(A.z,g,null,new B.bj(B.cI(A.cn,e,null),new B.bq(0.85,1,w),w.k("bj<bR.T>"))),null)},
$C:"$4",
$R:4,
$S:34}
D.eWz.prototype={
$0(){var w=this.a,v=this.b,u=this.c
w.ax=new B.r(v.a/u.a,v.b/u.b)
w.at=w.gBp()
w.BT()},
$S:0}
D.eWq.prototype={
$0(){var w,v=this.a
v.f=0
v.r=!1
w=this.c
v.ay=A.o.F(A.o.F(this.b,w)+w,w)
v.ch=v.gBp()
v.BT()},
$S:0}
D.eWy.prototype={
$0(){var w,v=this.a
if(v.gaxU()){w=v.ag5()
v.ay=w==null?v.ay:w
v.ch=v.gBp()}else{v.as=v.gBp()
v.x=Math.max(1,v.x)}v.BT()},
$S:0}
D.eWn.prototype={
$1(d){return new D.Jb(C.SS[this.b],new D.eWm(this.a,d),null)},
$S:z+4}
D.eWm.prototype={
$0(){this.a.a=!0
B.a8(this.b,!1).e7()},
$S:0}
D.eWo.prototype={
$0(){var w,v=this.a
v.e=A.o.F(v.gyl()+1,10)
w=v.gQM().y
w=w==null?null:A.o.ap(w.a,1000)
v.x=w==null?1:w
v.as=v.gBp()},
$S:0}
D.eWl.prototype={
$0(){var w,v=this.a
v.f=-1
v.e=A.o.F(v.gyl()+this.b,10)
if(v.gyl()<0)v.e=v.gyl()+10
w=v.gQM().y
w=w==null?null:A.o.ap(w.a,1000)
v.x=w==null?1:w
v.as=v.gBp()
v.Xl()
v.BT()},
$S:0}
D.eWp.prototype={
$0(){var w=this.a
w.f=this.b
w.r=!1
w.ay=0
w.ch=w.gBp()
w.BT()},
$S:0}
D.eWF.prototype={
$2(d,e){var w,v,u=null,t=e.d*0.14,s=A.i.D(t*0.62,18,30),r=this.a,q=r.y?r.gb2o():u,p=x.p
q=B.a([B.aA(A.c_,B.c9(r.gQM(),new D.eWC(r),u),A.y,!1,C.hHq,q,u,u,u,new D.eWD(r),u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new D.eWE(r,e),u,u,u,!1,A.a4)],p)
if(r.r)q.push(r.bHg())
if(this.b&&!r.r&&r.ag5()!=null){w=A.c.j(0.92)
v=s*0.42
q.push(B.ao(t/2-s/2,B.aG(!1,A.a3,!0,u,B.aM(!1,u,!0,new B.D(new B.R(v,0,v,0),B.A(B.a([B.W(A.kK,A.aw,u,u,u,s*0.55),new B.a6(s*0.18,u,u,u),B.c("Learn more",u,u,u,u,u,u,B.l(u,u,A.aw,u,u,u,u,u,u,u,u,s*0.44,u,u,A.F,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],p),A.l,u,A.e,A.M,0,u,u),u),A.no,!0,u,u,u,u,C.hH8,u,u,u,u,u,u,r.gcdU(),u,u,u,u,u,u,u),A.f,w,0,u,u,A.no,u,u,A.ai),s,u,u,t*0.3,u,u))}return new B.an(A.a0,u,A.b4,A.t,q,u)},
$S:63}
D.eWE.prototype={
$1(d){var w=this.b
return this.a.ce_(d.b,new B.av(B.aS(1/0,w.a,w.b),B.aS(1/0,w.c,w.d)))},
$S:56}
D.eWD.prototype={
$1(d){var w,v,u,t=d.d
if(t==null)t=0
if(Math.abs(t)>120){w=this.a
v=t<0?1:-1
if(w.gaxU()){u=w.ag5()
w.cdW((u==null?0:u)+v)}else w.ag6(v)}},
$S:37}
D.eWC.prototype={
$2(d,e){var w,v,u,t,s,r=null,q=this.a,p=q.gQM().y,o=p==null?r:A.o.ap(p.a,1000),n=(o==null?0:o)/1000,m=q.x===0&&q.a.f?n:99
p=n-q.at
w=p<1.4?new D.b0k(q.ax,p):r
v=q.gaxU()
u=Math.max(0,n-q.ch)
t=v?A.o.F(q.ay+A.i.bc(u/10),14):r
if(v)s=u
else s=m<3?n:Math.max(0,n-q.gaSh())
return B.b4(r,r,r,new D.byW(q.gyl(),q.f,s,m,w,t,r),A.h2)},
$S:59}
D.eWG.prototype={
$0(){var w=this.a
return w.l(w.gbcq())},
$S:0}
D.eWA.prototype={
$0(){var w=this.a
w.y=this.b
w.z=!1
w.BT()},
$S:0}
D.eWB.prototype={
$0(){var w=this.a
w.z=!w.z
w.BT()},
$S:0}
D.eWx.prototype={
$5$color$on(d,e,f,g,h){var w=null,v=h?g.j(0.28):A.c.j(0.08),u=B.n(14),t=B.K(h?g:A.aT,A.r,1)
return B.aA(w,B.p(w,B.x(B.a([B.W(d,g,w,w,w,20),A.rB,B.c(e,w,w,w,w,w,w,B.l(w,w,g,w,w,w,w,w,w,w,w,9.5,w,w,A.F,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.l,w,A.e,A.M,0,A.p),A.f,w,w,new B.o(v,w,t,u,w,w,A.m),w,w,w,A.jh,A.kf,w,w,56),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,!1,A.a4)},
$3(d,e,f){return this.$5$color$on(d,e,f,A.c,!1)},
$4$color(d,e,f,g){return this.$5$color$on(d,e,f,g,!1)},
$S:649}
D.eWs.prototype={
$0(){return this.a.ag6(-1)},
$S:0}
D.eWt.prototype={
$0(){return this.a.ag6(1)},
$S:0}
D.eWu.prototype={
$0(){return this.a.ag6(0)},
$S:0}
D.eWv.prototype={
$0(){var w=this.a
return w.l(new D.eWr(w))},
$S:0}
D.eWr.prototype={
$0(){var w=this.a
w.r=!w.r
w.BT()},
$S:0}
D.eWw.prototype={
$0(){return this.a.b2m(0)},
$S:0}
D.eWk.prototype={
$0(){var w=this.a
return w.l(new D.eWj(w))},
$S:0}
D.eWj.prototype={
$0(){return this.a.r=!1},
$S:0}
D.fJe.prototype={
$1(d){var w,v,u,t,s=this,r=null,q=s.a,p=s.b,o=s.c,n=s.d
if(q==null){q=A.i.fO(d*2)
n=D.a3W(p,B.l(r,r,D.ajq(s.e),r,r,r,r,r,"Roboto",r,r,q/2,r,r,o,r,1.1,!0,r,n,r,r,r,r,r,r),A.b8,r,1,1/0)
q=n}else{$.T()
w=B.L()
v=s.f
u=s.w
t=v.a-s.r*A.i.D(u,0,4000)
v=v.b
w.san(new B.a7(A.a5,A.a9,A.x,q,r,r).az(0,new B.a3(t,v,t+A.i.D(u,1,4000),v+d)))
p=B.h_(r,A.cH,r,1,r,B.d1(r,r,r,r,r,r,r,r,r,B.l(r,r,r,r,r,r,r,r,"Roboto",r,r,d,r,r,o,w,1.1,!0,r,n,r,r,r,r,r,r),p),A.a7,A.cc,r,A.e1,A.cd)
q=p}q.eY()
return q},
$S:343}
D.fuJ.prototype={
$1(d){var w=new B.aH($.T().r,A.aj,null,null,B.a([],x.v)),v=B.B(d,x.H)
w.E(new B.zz(v,!0))
return w},
$S:1582}
D.eWh.prototype={
$0(){return this.a.d=this.b},
$S:0}
D.eWi.prototype={
$0(){return this.a.b2p(this.b)},
$S:0}
D.eWe.prototype={
$2(d,e){return A.bf},
$S:38}
D.eWd.prototype={
$2(d,e){var w=null,v=this.a,u=v.d===e?1.1:1
u=B.a([B.uW(v.b2q(e,18,46,6,A.c,80),A.b_,A.ha,u)],x.p)
if(v.d===e)u.push(new B.D(A.v1,B.c(C.iv[e].a,w,w,w,w,w,w,C.fQ0,w,w,w),w))
return B.x(u,A.l,w,A.e,A.M,0,A.p)},
$S:650}
D.eWf.prototype={
$0(){var w=this.a
return w.a.a7p(0,w.d)},
$S:0}
D.eWg.prototype={
$2(d,e){return this.a.aA4(e,15,1/0,!0,8,A.c,1/0)},
$S:45}
D.eWb.prototype={
$0(){var w=this.a
return w.a.a7p(0,w.d)},
$S:0}
D.eWc.prototype={
$0(){return this.a.b2p(this.b)},
$S:0};(function aliases(){var w=D.aPt.prototype
w.bBB=w.t})();(function installTearOffs(){var w=a._instance_0u,v=a._instance_1u
var u
w(u=D.aHx.prototype,"gcdU","ag7",2)
w(u,"gcaj","cak",0)
w(u,"gb2k","cdT",0)
w(u,"gbcq","BT",0)
v(u,"gcdV","b2m",3)
w(u,"gce0","ce1",0)
w(u,"gb2o","ce2",0)})();(function inheritance(){var w=a.mixinHard,v=a.inheritMany,u=a.inherit
v(B.aE,[D.bSZ,D.i7,D.rY,D.b0k,D.wF,D.yy,D.cWU,D.bvC])
v(B.fN,[D.bT_,D.fJf,D.fD3,D.h38,D.fJ7,D.h37,D.fzC,D.h3k,D.fxf,D.fJu,D.fJv,D.fJw,D.hbJ,D.hbK,D.eWn,D.eWE,D.eWD,D.eWx,D.fJe,D.fuJ])
v(B.kP,[D.cH3,D.apW])
v(B.id,[D.fy2,D.fJy,D.fJx,D.fJz,D.eWF,D.eWC,D.eWe,D.eWd,D.eWg])
v(B.hQ,[D.fy3,D.fy4,D.fy5,D.fy6,D.fy7,D.fy8,D.h39,D.h3a,D.h3b,D.h3c,D.h3d,D.c5M,D.eWz,D.eWq,D.eWy,D.eWm,D.eWo,D.eWl,D.eWp,D.eWG,D.eWA,D.eWB,D.eWs,D.eWt,D.eWu,D.eWv,D.eWr,D.eWw,D.eWk,D.eWj,D.eWh,D.eWi,D.eWf,D.eWb,D.eWc])
v(B.aw,[D.Jb,D.b5C])
v(B.af,[D.Y3,D.auw])
v(B.ah,[D.aPt,D.boL])
u(D.aHx,D.aPt)
v(B.lK,[D.byW,D.bdc])
w(D.aPt,B.cg)})()
B.i_(b.typeUniverse,JSON.parse('{"Jb":{"aw":[],"w":[]},"Y3":{"af":[],"w":[]},"aHx":{"ah":["Y3"]},"byW":{"aC":[]},"auw":{"af":[],"w":[]},"boL":{"ah":["auw"]},"b5C":{"aw":[],"w":[]},"bdc":{"aC":[]},"Ow":{"af":[],"w":[]}}'))
var y={a:"The number of bytes to view must be a multiple of 4"}
var x=(function rtii(){var w=B.ar
return{J:w("bKW"),V:w("N<aa>"),O:w("N<u>"),X:w("N<i7>"),g:w("N<r>"),v:w("N<fW>"),s:w("N<m>"),p:w("N<w>"),n:w("N<G>"),w:w("hV"),H:w("r"),Q:w("dx<G>"),t:w("bq<G>"),W:w("bf<m>"),q:w("kx"),S:w("F"),o:w("~")}})();(function constants(){var w=a.makeConstList
C.b5e=new B.de(0.35,-0.25)
C.b6Q=new B.Eh(2,"dst")
C.aih=new B.u(1,0.0196078431372549,0.03137254901960784,0.058823529411764705,A.q)
C.bxt=new B.u(1,0.043137254901960784,0.10196078431372549,0.2,A.q)
C.dt0=w([C.aih,C.bxt],x.O)
C.cdL=new B.a7(A.aX,A.b1,A.x,C.dt0,null,null)
C.ba4=new B.o(null,null,null,null,null,C.cdL,A.m)
C.buW=new B.u(1,0.42745098039215684,0.47843137254901963,0.5764705882352941,A.q)
C.biW=new B.u(1,0.16862745098039217,0.1803921568627451,0.26666666666666666,A.q)
C.bkb=new B.u(1,0.4823529411764706,0.29411764705882354,0.41568627450980394,A.q)
C.dGF=w([C.buW,C.biW,C.bkb],x.O)
C.cc_=new B.a7(A.ay,A.aC,A.x,C.dGF,null,null)
C.ba6=new B.o(null,null,null,null,null,C.cc_,A.m)
C.b5h=new B.de(0.5,-0.6)
C.byU=new B.u(1,0.22745098039215686,0.054901960784313725,0.10980392156862745,A.q)
C.dnH=w([C.byU,A.ew],x.O)
C.eKM=new B.bT(C.b5h,1.3,A.x,null,0,C.dnH,null,null)
C.baf=new B.o(null,null,null,null,null,C.eKM,A.m)
C.wC=new B.u(1,0.8392156862745098,0.7176470588235294,0.4823529411764706,A.q)
C.b8l=new B.ax(C.wC,1,A.r,-1)
C.b8y=new B.bE(A.a1,A.a1,C.b8l,A.a1)
C.baC=new B.o(null,null,C.b8y,null,null,null,A.m)
C.bhS=new B.u(1,0.027450980392156862,0.03137254901960784,0.047058823529411764,A.q)
C.Zr=new B.u(0.9490196078431372,0.06666666666666667,0.07450980392156863,0.09411764705882353,A.q)
C.bit=new B.u(1,0.16470588235294117,0.16470588235294117,0.17647058823529413,A.q)
C.ahB=new B.u(1,0.6039215686274509,0.4196078431372549,0.07058823529411765,A.q)
C.Nd=new B.u(1,0.16862745098039217,0.1843137254901961,0.21176470588235294,A.q)
C.Zt=new B.u(1,0.00784313725490196,0.01568627450980392,0.03529411764705882,A.q)
C.ahQ=new B.u(1,0.5411764705882353,0.42745098039215684,0.06274509803921569,A.q)
C.ai0=new B.u(1,0.6588235294117647,0.6235294117647059,0.5647058823529412,A.q)
C.Nl=new B.u(1,0.24705882352941178,0.5607843137254902,0.30196078431372547,A.q)
C.Cf=new B.u(1,0.7215686274509804,0.6980392156862745,0.6549019607843137,A.q)
C.ait=new B.u(1,0.7215686274509804,0.45098039215686275,0.2,A.q)
C.bm1=new B.u(1,0.47843137254901963,0.3058823529411765,0.0196078431372549,A.q)
C.bnF=new B.u(1,0.01568627450980392,0.0196078431372549,0.0392156862745098,A.q)
C.NC=new B.u(1,1,0.23137254901960785,0.12156862745098039,A.q)
C.aj5=new B.u(1,0.00784313725490196,0.011764705882352941,0.0392156862745098,A.q)
C.NI=new B.u(1,0.7215686274509804,0.7529411764705882,0.8,A.q)
C.yS=new B.u(1,0.06666666666666667,0.0784313725490196,0.09411764705882353,A.q)
C.nH=new B.u(1,0.054901960784313725,0.07058823529411765,0.09411764705882353,A.q)
C.bs7=new B.u(1,0.5411764705882353,0.41568627450980394,0.06274509803921569,A.q)
C.btf=new B.u(1,0.2901960784313726,0.26666666666666666,0.23529411764705882,A.q)
C.btj=new B.u(1,0.0196078431372549,0.18823529411764706,0.12156862745098039,A.q)
C.iV=new B.u(1,0.043137254901960784,0.12156862745098039,0.29411764705882354,A.q)
C.btK=new B.u(1,0.054901960784313725,0.07058823529411765,0.13333333333333333,A.q)
C.n2=new B.u(1,0.09019607843137255,0.09019607843137255,0.10980392156862745,A.q)
C.bvz=new B.u(1,0.1843137254901961,0.43529411764705883,0.23137254901960785,A.q)
C.bvD=new B.u(1,0.08627450980392157,0.09411764705882353,0.10980392156862745,A.q)
C.bxm=new B.u(1,0.9058823529411765,0.8235294117647058,0.6509803921568628,A.q)
C.a0s=new B.u(1,1,0.9529411764705882,0.6274509803921569,A.q)
C.am8=new B.u(1,0.9607843137254902,0.7686274509803922,0.6039215686274509,A.q)
C.bzx=new B.u(1,0.10196078431372549,0.09019607843137255,0.0784313725490196,A.q)
C.ami=new B.u(1,0.7176470588235294,0.4745098039215686,0.12156862745098039,A.q)
C.bEo=new B.R(0,0,0,1)
C.ank=new B.R(10,6,10,8)
C.anB=new B.R(14,10,10,10)
C.bI1=new B.R(18,14,18,0)
C.bIp=new B.R(18,6,18,0)
C.bTK=new B.a_(62895,"MaterialIcons",!1)
C.Qd=new B.a_(62970,"MaterialIcons",!1)
C.asc=new B.a_(983316,"MaterialIcons",!1)
C.oX=new B.a_(983617,"MaterialIcons",!1)
C.c_T=new B.ae(A.DJ,13,A.ab,null,null,null)
C.c0E=new B.ae(A.o4,18,null,null,null,null)
C.c4o=new B.ae(A.eN,13,A.ab,null,null,null)
C.bWr=new B.a_(983768,"MaterialIcons",!1)
C.c5_=new B.ae(C.bWr,13,A.c,null,null,null)
C.caR=new B.a7(A.aX,A.b1,A.x,S.T1,null,null)
C.d8c=w([A.bM,E.H8,A.bM],x.O)
C.av3=new B.a7(A.a5,A.a9,A.x,C.d8c,null,null)
C.dpW=w([A.bO,A.bj,A.dS],x.O)
C.cbW=new B.a7(A.ay,A.aC,A.x,C.dpW,null,null)
C.Nr=new B.u(1,0.11764705882352941,0.30980392156862746,0.6392156862745098,A.q)
C.cTr=w([C.iV,C.Nr,A.au,A.bM],x.O)
C.dx2=w([0,0.42,0.8,1],x.n)
C.cc1=new B.a7(A.aX,A.b1,A.x,C.cTr,C.dx2,null)
C.aky=new B.u(1,0.16862745098039217,0.18823529411764706,0.23137254901960785,A.q)
C.byp=new B.u(1,0.788235294117647,0.8196078431372549,0.8627450980392157,A.q)
C.bv7=new B.u(1,0.34901960784313724,0.3764705882352941,0.43137254901960786,A.q)
C.d5M=w([C.aky,C.byp,C.bv7,C.aky],x.O)
C.cc3=new B.a7(A.a5,A.a9,A.x,C.d5M,A.E5,null)
C.cGk=w([A.bO,A.cX],x.O)
C.av8=new B.a7(A.a5,A.a9,A.x,C.cGk,null,null)
C.d7Q=w([A.yV,A.aH],x.O)
C.ccE=new B.a7(A.a5,A.a9,A.x,C.d7Q,null,null)
C.bol=new B.u(1,0.0784313725490196,0.3803921568627451,0.24705882352941178,A.q)
C.buR=new B.u(1,0.043137254901960784,0.2901960784313726,0.18823529411764706,A.q)
C.bhX=new B.u(1,0.03137254901960784,0.2196078431372549,0.13725490196078433,A.q)
C.dbe=w([C.bol,C.buR,C.bhX],x.O)
C.cdh=new B.a7(A.ay,A.aC,A.x,C.dbe,null,null)
C.aht=new B.u(1,0.12156862745098039,0.1411764705882353,0.18823529411764706,A.q)
C.cfC=w(["Add every person","Link mums, dads, kids","Keep it for ever"],x.s)
C.dSp=new D.wF("NGMY Ads","\ud83d\udce2","Every NGMY ad, as a real 3D commercial",A.c2,-1)
C.dSj=new D.wF("Civic Registry","\ud83e\udeaa","Enroll your family in your community",A.db,0)
C.dSo=new D.wF("Jobs","\ud83d\udcbc","Find work and get hired",A.au,1)
C.dSu=new D.wF("NGMY Store","\ud83d\udecd\ufe0f","African food and traditions",A.fK,2)
C.dSv=new D.wF("Kiswahili","\ud83d\udde3\ufe0f","Learn Swahili and English",A.bR,3)
C.dSs=new D.wF("Doc Scanner","\ud83d\udcc4","Scan, save and share",A.ce,4)
C.dSk=new D.wF("Invoices","\ud83e\uddfe","Professional invoices",A.bA,5)
C.dSh=new D.wF("Calendar","\ud83d\udcc5","This month, today lit up",A.aB,-2)
C.iv=w([C.dSp,C.dSj,C.dSo,C.dSu,C.dSv,C.dSs,C.dSk,C.dSh],B.ar("N<wF>"))
C.VG=new B.y(2,3)
C.VH=new B.y(3,4)
C.czC=w([A.kJ,A.zP],B.ar("N<a_>"))
C.cDh=w([A.aw,A.cv,F.n3],x.O)
C.alg=new B.u(1,0.24705882352941178,0.22745098039215686,0.2,A.q)
C.dvP=w(["A Registry ID card for every member","Birthdays and children remembered","Votes and receipts everyone can see"],x.s)
C.dQq=new D.i7(A.f3,"Registry ID","Active")
C.dQe=new D.i7(A.Ig,"Birthdays","On")
C.dQH=new D.i7(A.oU,"Community vote","Open")
C.dIL=w([C.dQq,C.dQe,C.dQH],x.X)
C.Uu=new D.apW(1,"card")
C.dQV=new D.rY(null,"NGMY Civic Registry",A.mt,A.dg,A.aH,"Your family.","Counted. Helped.","Enroll your whole family in the community registry.",C.dvP,"Civic Registry",6,"#","Family members enrolled",0,C.dIL,C.Uu,"REGISTRY ID","One card for your whole community life.","NGMY Hub tab, then Civic Registry")
C.dn6=w(["Find jobs near you","Book house repairs and workers","Advisors help with applications"],x.s)
C.dQT=new D.i7(Z.QS,"Warehouse helper","Apply")
C.dQA=new D.i7(A.a4j,"House repair","Book")
C.dQG=new D.i7(A.zT,"House worker","Hire")
C.cYx=w([C.dQT,C.dQA,C.dQG],x.X)
C.tU=new D.apW(2,"badge")
C.dR6=new D.rY(A.asZ,"NGMY Jobs and Help",A.rh,A.ka,A.aQ,"Need work?","Get hired.","Jobs, house repairs and house workers, all in one Help Center.",C.dn6,"Help Center",24,"#","Jobs near you",0,C.cYx,C.tU,"HIRED","From the search to the first paycheck.","NGMY Hub tab, then Help Center")
C.dlR=w(["African food and traditions","Open your own store","Support Congolese and African sellers"],x.s)
C.bVM=new B.a_(983309,"MaterialIcons",!1)
C.dQs=new D.i7(C.bVM,"Fufu flour 2 kg","$12")
C.bV3=new B.a_(63590,"MaterialIcons",!1)
C.dQh=new D.i7(C.bV3,"Congolese coffee","$18")
C.dQr=new D.i7(A.arq,"Wax print fabric","$15")
C.dus=w([C.dQs,C.dQh,C.dQr],x.X)
C.dQW=new D.rY(A.QL,"NGMY Store",A.km,A.ka,A.cS,"Shop our community.","Sell yours too.","Buy and sell inside NGMY. Approved members can open a store.",C.dlR,"NGMY Store",45,"$#.00","Your cart",0,C.dus,C.tU,"OPEN NOW","Every order supports our community.","NGMY Hub tab, then NGMY Store")
C.asU=new B.a_(983989,"MaterialIcons",!1)
C.deb=w(["Short daily lessons","A picture for every word","Swahili and English both ways"],x.s)
C.dQl=new D.i7(C.asU,"Jambo","Hello")
C.dQm=new D.i7(A.hP,"Asante","Thank you")
C.dQj=new D.i7(A.xd,"Familia","Family")
C.dsH=w([C.dQl,C.dQm,C.dQj],x.X)
C.dQZ=new D.rY(C.asU,"Kiswahili School",A.oY,A.rZ,A.n4,"Habari!","Learn Swahili.","Learn Swahili and English, one short lesson at a time.",C.deb,"Kiswahili School",12,"# days","Your learning streak",0,C.dsH,C.tU,"KARIBU","Karibu means welcome.","Creator Hub tab, then Kiswahili School")
C.cQn=w(["Sharp scans from your camera","Saved as a PDF","Share it anywhere"],x.s)
C.dQS=new D.i7(A.ty,"Lease.pdf","2 pages")
C.dQK=new D.i7(A.h_,"Receipt.pdf","1 page")
C.dQP=new D.i7(A.mt,"ID copy.pdf","Shared")
C.dj5=w([C.dQS,C.dQK,C.dQP],x.X)
C.dQU=new D.rY(Q.IB,"Document Scanner",A.a46,A.aiR,A.hi,"Paper in.","PDF out.","Scan, save and share your papers in seconds.",C.cQn,"Document Scanner",3,"# pages","Scanned today",0,C.dj5,C.tU,"PDF","Every paper, safe on your phone.","NGMY Hub tab, then Document Scanner")
C.dyO=w(["Your logo and business details","Totals worked out for you","Send it as a PDF"],x.s)
C.dQw=new D.i7(A.DB,"Kitchen repair","$850")
C.dQL=new D.i7(A.Is,"Materials","$320")
C.dQf=new D.i7(A.DF,"Delivery","$80")
C.cs3=w([C.dQw,C.dQL,C.dQf],x.X)
C.dR1=new D.rY(A.la,"NGMY Invoices",A.h_,A.k6,A.c2,"Look professional.","Get paid faster.","Make clean invoices and receipts in minutes.",C.dyO,"Invoice 1042",1250,"$#.00","Total due",0,C.cs3,C.tU,"PAID","Paid. Stamped. Done.","Tool Hub tab, then Business Essentials")
C.dnf=w(["Grandparents to grandchildren","A photo on every branch","Share it with the family"],x.s)
C.bUo=new B.a_(63229,"MaterialIcons",!1)
C.dQp=new D.i7(C.bUo,"Grandparents","4")
C.bVu=new B.a_(983134,"MaterialIcons",!1)
C.dQk=new D.i7(C.bVu,"Parents","6")
C.dQy=new D.i7(A.Qh,"Children","8")
C.dHC=w([C.dQp,C.dQk,C.dQy],x.X)
C.dR2=new D.rY(F.at2,"NGMY Family Tree",A.Q7,A.mZ,A.Nc,"Every branch.","Every story.","Grow your family tree and write your family book.",C.dnf,"Family Tree",18,"#","Family members",0,C.dHC,C.tU,"FAMILY","Family is everything.","Profile tab, then Worksheets, then Family Tree")
C.dvK=w(["Kept safe on the server","A receipt for every payment","Rewards in one place"],x.s)
C.dQE=new D.i7(A.j3,"Crown reward","+$1.00")
C.dQJ=new D.i7(A.kJ,"House Care","-$25.00")
C.dQF=new D.i7(A.a4C,"Gift received","+$20.00")
C.dEp=w([C.dQE,C.dQJ,C.dQF],x.X)
C.a8M=new D.apW(0,"coin")
C.dQX=new D.rY(null,"NGMY Wallet",A.jA,A.wz,A.eD,"One balance.","Everywhere.","Your NGMY balance is the same on every phone you use.",C.dvK,"NGMY Wallet",1250.75,"$#","Balance",2,C.dEp,C.a8M,"$","Your money, always in sync.","Your balance shows on Home and all across NGMY")
C.dCn=w(["Quick arcade games","Play offline, counted later","Every win has a receipt"],x.s)
C.dQQ=new D.i7(A.o0,"Lucky Dice","Play")
C.dQg=new D.i7(Y.Qn,"Puzzle Rush","Play")
C.dQn=new D.i7(A.m1,"Top score","2,400")
C.dBa=w([C.dQQ,C.dQg,C.dQn],x.X)
C.dR_=new D.rY(null,"NGMY Game Center",A.o5,A.lV,A.bc,"Play.","Win coins.","Arcade games in the Vault Channel, with your own game receipts.",C.dCn,"Vault Arcade",2400,"#","High score",0,C.dBa,C.a8M,"WIN","Game on, any time.","Home tab, then Vault Channel")
C.d1z=w(["Parts that really work","An AI Inventor to help you","See how electricity flows"],x.s)
C.bTJ=new B.a_(62894,"MaterialIcons",!1)
C.dQv=new D.i7(C.bTJ,"Battery","9 V")
C.dQD=new D.i7(C.oX,"Switch","On")
C.dQI=new D.i7(L.l8,"Bulb","Lit")
C.dFu=w([C.dQv,C.dQD,C.dQI],x.X)
C.dQY=new D.rY(L.l8,"NGMY Electronics Lab",I.vj,A.yV,A.b3,"Build it.","Watch it light up.","Wire real circuits: batteries, switches, bulbs, TVs and more.",C.d1z,"Electronics Lab",9,"# V","Battery",0,C.dFu,C.tU,"IT WORKS","Learn by building.","Home tab, then Core Protocol, then Electronics Lab")
C.dgu=w(["Chat like with a real person","Help with jobs and benefits","Answers in Swahili too"],x.s)
C.dQx=new D.i7(A.Du,"How do I apply?","Answered")
C.dQN=new D.i7(A.ty,"Check my letter","Done")
C.dQu=new D.i7(A.oY,"Jibu kwa Kiswahili","Sawa")
C.dcQ=w([C.dQx,C.dQN,C.dQu],x.X)
C.dR5=new D.rY(A.xe,"NGMY Advisors",A.DK,A.qw,A.cS,"Questions?","Ask an advisor.","Friendly AI advisors for jobs, applications and everyday life.",C.dgu,"NGMY Advisors",24,"# / 7","Always here",0,C.dcQ,C.tU,"ASK ME","Help is one message away.","Advisors tab")
C.dFM=w(["Walk through every room","Wire lights and outlets","Learn a trade step by step"],x.s)
C.dQR=new D.i7(F.arK,"Frame","Done")
C.dQC=new D.i7(I.vj,"Wiring","Done")
C.dQi=new D.i7(I.a4A,"Plumbing","Now")
C.dI8=w([C.dQR,C.dQC,C.dQi],x.X)
C.dR0=new D.rY(A.kJ,"NGMY Construction Lab",A.ra,A.ip,A.au,"Frame. Wire.","Finish a house.","Real 3D wiring, plumbing and a whole house to build.",C.dFM,"Construction Lab",86,"#%","House finished",0,C.dI8,C.tU,"BUILT","Learn the trade, room by room.","Home tab, then Core Protocol, then Construction Lab")
C.dpT=w(["Record and edit audio","Make videos with titles","QR codes and Doc Share"],x.s)
C.dQo=new D.i7(A.oV,"Recorder Studio","Open")
C.dQM=new D.i7(A.QE,"Video Studio","Open")
C.dQt=new D.i7(A.jD,"QR Generator","Open")
C.d5p=w([C.dQo,C.dQM,C.dQt],x.X)
C.dR3=new D.rY(A.fZ,"NGMY Creator Hub",A.ef,A.i0,A.c2,"Record. Film.","Create.","Recorder, Video Studio, QR codes and more in one place.",C.dpT,"Creator Hub",8,"#","Studios ready for you",0,C.d5p,C.tU,"ACTION","Your ideas, made real.","Creator Hub tab")
C.dyo=w(["Many designs to choose from","Your logo and your colours","Share by QR or as a picture"],x.s)
C.dQO=new D.i7(A.m3,"Design","Midnight")
C.bVF=new B.a_(983243,"MaterialIcons",!1)
C.dQz=new D.i7(C.bVF,"QR code","On")
C.dQB=new D.i7(A.IE,"Shared","12 times")
C.dyQ=w([C.dQO,C.dQz,C.dQB],x.X)
C.dR4=new D.rY(null,"NGMY Business Cards",A.a42,A.cU,A.fW,"First impressions","that last.","Design a card people remember and share it with a QR code.",C.dyo,"Business Card",250,"#","Card scans",0,C.dyQ,C.Uu,"YOUR NAME","Hand it over. Be remembered.","Tool Hub tab, then Business Card Creator")
C.SS=w([C.dQV,C.dR6,C.dQW,C.dQZ,C.dQU,C.dR1,C.dR2,C.dQX,C.dR_,C.dQY,C.dR5,C.dR0,C.dR3,C.dR4],B.ar("N<rY>"))
C.d8k=w([A.bj,A.bO,A.cv],x.O)
C.bmw=new B.u(1,0.5411764705882353,0.3333333333333333,0.13725490196078433,A.q)
C.dds=w([C.ait,C.am8,C.bmw],x.O)
C.fed=new B.b3(-0.3,0.32,0.2)
C.fbD=new B.b3(-0.08,0.17,0.22)
C.fbE=new B.b3(0.14,0.14,0.2)
C.fdr=new B.b3(0.34,0.3,0.2)
C.ffZ=new B.b3(0,0.32,0.26)
C.fd8=new B.b3(-0.42,0.46,0.15)
C.ffU=new B.b3(0.42,0.46,0.15)
C.few=new B.b3(0,0.07,0.15)
C.aDs=w([C.fed,C.fbD,C.fbE,C.fdr,C.ffZ,C.fd8,C.ffU,C.few],B.ar("N<+(G,G,G)>"))
C.dpk=w([A.c,A.fA,A.aH],x.O)
C.dr_=w([11,9,10,8,0,12,13,2],B.ar("N<F>"))
C.ern=new D.yy("NGMY Tree Story","A family grows, one branch at a time")
C.erm=new D.yy("NGMY Store","Open the doors to something new")
C.ero=new D.yy("NGMY Construction Lab","Build, wire and finish a real house")
C.erh=new D.yy("NGMY Electronics Lab","Build circuits that really light up")
C.erk=new D.yy("NGMY Advisors","Say hi to a friendly advisor")
C.eri=new D.yy("Spark Adventure","Follow Sparky round a circuit board")
C.erp=new D.yy("NGMY Game Center","Play games and win coins")
C.erj=new D.yy("NGMY Business Cards","Make a card people remember")
C.erg=new D.yy("NGMY Civic Registry","Your family, counted and helped")
C.erl=new D.yy("NGMY Creator Hub","Record, film and create")
C.Tl=w([C.ern,C.erm,C.ero,C.erh,C.erk,C.eri,C.erp,C.erj,C.erg,C.erl],B.ar("N<yy>"))
C.dt8=w([A.dg,A.ct,A.GM],x.O)
C.dwK=w(["For you","Apps","Library"],x.s)
C.aEu=w([-16,16],x.n)
C.TJ=w([-22,22],x.n)
C.TK=w([-24,24],x.n)
C.a7C=w([-5,5],x.n)
C.bcJ=new B.aa(0,A.H,A.b7,A.dp,14)
C.dD2=w([C.bcJ],x.V)
C.dGa=w(["M","T","W","T","F","S","S"],x.s)
C.aKR=new B.cV([1,7,2,0,3,1,4,2,6,3,7,6,8,4,9,5],B.ar("cV<F,F>"))
C.bnW=new B.u(1,0.054901960784313725,0.16470588235294117,0.22745098039215686,A.q)
C.bze=new B.u(1,0.027450980392156862,0.08235294117647059,0.12941176470588237,A.q)
C.dho=w([C.bnW,C.bze,C.Zt],x.O)
C.eKC=new B.bT(A.BQ,1.1,A.x,null,0,C.dho,A.vC,null)
C.buC=new B.u(1,0.9607843137254902,0.7725490196078432,0.25882352941176473,A.q)
C.dey=w([U.CD,C.buC,C.ami],x.O)
C.eKH=new B.bT(A.Mv,0.5,A.x,null,0,C.dey,A.my,null)
C.aTr=new B.y("SONY",A.bO)
C.eSx=new B.y(3,E.H8)
C.eTP=new B.y(0.45,0.05)
C.eUL=new B.y(-0.35,-0.05)
C.eVQ=new B.y(2,A.bE)
C.aTt=new B.y("B&O",C.alg)
C.f_u=new B.y("SAMSUNG",A.cA)
C.f0W=new B.y(0,A.ip)
C.aTz=new B.y("LG",A.dS)
C.f46=new B.y(1,A.v)
C.f4u=new B.y(-1.6,0.9)
C.f65=new B.y(1.6,0.9)
C.f8l=new B.y(1.6,-0.9)
C.fa_=new B.y(-1.25,-0.62)
C.faJ=new B.y(-1.6,-0.9)
C.fiL=new B.b7([1.25,-0.62,-1,0])
C.fiW=new B.b7([-1.25,-0.62,0,1])
C.fj1=new B.b7([1.25,0.62,0,-1])
C.fkp=new B.b7([-1.25,0.62,1,0])
C.c5y=new B.ae(A.eN,11,A.ab,null,null,null)
C.fNJ=new B.H(!0,A.aR,null,null,null,null,9,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.haZ=new B.C("Search",null,C.fNJ,null,null,null,null,null,null,null,null,null)
C.cVe=w([C.c5y,A.ry,C.haZ],x.p)
C.fnW=new B.c3(A.aL,A.e,A.h,A.l,null,A.p,null,0,C.cVe,null)
C.fv6=new B.hX(3,5,5,1.35,null)
C.fVN=new B.C("Buttons hidden. Double-tap to show them again.",null,null,null,null,null,null,null,null,null,null,null)
C.aWp=new B.b1(C.fVN,null,null,null,null,null,null,null,A.iP,null,null,null,null,A.nQ,!1,null,null,null,A.t,null)
C.by6=new B.u(1,0.9450980392156862,0.9098039215686274,0.8470588235294118,A.q)
C.fCC=new B.H(!0,C.by6,null,"serif",null,null,15,A.kg,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.fKO=new B.H(!0,A.ab,null,null,null,null,9.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.fLr=new B.H(!0,A.aR,null,null,null,null,9.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.acW=new B.H(!0,A.ab,null,null,null,null,12.5,null,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.aYD=new B.H(!0,A.ab,null,null,null,null,10,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.fQ0=new B.H(!0,A.c,null,null,null,null,8.5,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.fQq=new B.H(!0,A.c,null,null,null,null,14.5,A.O,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.fRD=new B.H(!0,A.ab,null,null,null,null,8.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.fRW=new B.H(!0,C.ai0,null,null,null,null,8.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.fI1=new B.H(!0,A.aF,null,null,null,null,9.5,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.fUm=new B.C("NGMY Apps",null,C.fI1,null,null,null,null,null,null,null,null,null)
C.fEn=new B.H(!0,C.wC,null,null,null,null,8,A.a8,null,3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.fXK=new B.C("BANG & OLUFSEN",null,C.fEn,null,null,null,null,null,null,null,null,null)
C.fKv=new B.H(!0,A.v,null,null,null,null,9,A.F,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.fYc=new B.C("Open",null,C.fKv,null,null,null,null,null,null,null,null,null)
C.h0t=new B.C("Home",null,C.aYD,null,null,null,null,null,null,null,null,null)
C.h1A=new B.C("SAMSUNG",null,A.aYg,null,null,null,null,null,null,null,null,null)
C.h7P=new B.C("LG",null,A.y5,null,null,null,null,null,null,null,null,null)
C.fSm=new B.H(!0,A.aF,null,null,null,null,10,A.u,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.hbY=new B.C("WHERE TO FIND IT",null,C.fSm,null,null,null,null,null,null,null,null,null)
C.he4=new B.C("tv",null,A.rE,null,null,null,null,null,null,null,null,null)
C.hfo=new B.C("Watch again",null,A.ca,null,null,null,null,null,null,null,null,null)
C.fHW=new B.H(!0,C.wC,null,null,null,null,8.5,null,null,2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.hgf=new B.C("OPEN",null,C.fHW,null,null,null,null,null,null,null,null,null)
C.hG3=new B.bf("tv-maker-name",x.W)
C.hG8=new B.bf("ad-info-ok",x.W)
C.hGh=new B.bf("tv-maker-apple",x.W)
C.hGG=new B.bf("ad-info-sheet",x.W)
C.hGR=new B.bf("ad-info-find",x.W)
C.hH1=new B.bf("tv-info",x.W)
C.hH8=new B.bf("tv-learn-more",x.W)
C.hHl=new B.bf("tv-frame",x.W)
C.hHq=new B.bf("tv-picture",x.W)
C.hHr=new B.bf("tv-fullscreen",x.W)
C.hHA=new B.bf("ad-info-replay",x.W)
C.hI1=new D.cH3(0,"triangles")})();(function staticFields(){$.Sh=B.S(B.ar("aE"),B.ar("bvC"))
$.bH7=!1
$.ahq=B.S(B.ar("aE"),B.ar("j8"))})();(function lazyInitializers(){var w=a.lazyFinal
w($,"iLD","hTh",()=>{var v=B.crD()
v.z=A.hd
v.f=!0
return v})})()};
(a=>{a["R0yC+Vy8jHd5+Vj8wgq8hPH42ec="]=a.current})($__dart_deferred_initializers__);