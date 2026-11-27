((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,A,O,L,G,E,M,P,I,Q,R,S,H,T,U,K,D={
i21(d,e,f,g,h){var w,v,u,t,s=null,r=e.length
if(A.n.F(r,2)!==0)throw B.Y(B.dM('"positions" length must be even.',s))
w=f.length
if(w*2!==r)throw B.Y(B.dM('"positions" and "colors" lengths must match.',s))
if(!A.ph.gar(e)){$.T()
v=J.v0(A.ij.gaS(f),f.byteOffset,w)
r=$.hYJ()[d.a]
w=$.ez.cr()
u=v
t=new B.aWT(B.jL(w,"MakeVertices",[r,e,null,u,null]))}else t=s
return D.i20(t)},
i20(d){var w=new D.bU_(d)
w.bEs(d)
return w},
bU_:function bU_(d){this.a=d
this.b=$
this.c=!1},
bU0:function bU0(){},
igT(d,e,f){return D.i21(d,e,f,null,null)},
cI8:function cI8(d,e){this.a=d
this.b=e},
fNg(d,e,f,g,h,i){var w,v,u,t=null
if(h==null){w=A.h.bO(e*2)
v=A.h.bO(g*4)
u=B.l(t,t,D.ajY(f),t,t,t,t,t,"Roboto",t,t,w/2,t,t,i,t,1.12,!0,t,v/4,t,t,t,t,t,t)
return D.a4r(d,u,A.aY,t,1,1/0)}$.T()
w=B.L()
w.san(h)
w=B.cW(t,t,t,t,t,t,t,t,t,B.l(t,t,t,t,t,t,t,t,"Roboto",t,t,e,t,t,i,w,1.12,!0,t,g,t,t,t,t,t,t),d)
w=B.h0(t,A.cJ,t,1,t,w,A.a7,A.ca,t,A.e4,A.cb)
w.nH(1/0)
return w},
mA(d,e,f,g,h,i,j,k,l,m){var w,v,u,t
if(e.length===0||g<1)return 0
w=new D.fN3(j,f,i,l)
v=D.fNg(e,g,h,k,w.$1(g),m)
u=v.b.c
if(u>l&&u>0){t=g*l/u
v=D.fNg(e,t,h,k*l/u,w.$1(t),m)}v.a5(d,new B.m(f.a-v.b.c*i,f.b))
w=v.b.a.c
return w.gb4(w)},
hN2(d,e,f,g,h,i,j,k,l){var w,v,u=null,t=A.h.bO(g*2)
t=B.l(u,u,D.ajY(h),u,u,u,u,u,"Roboto",u,u,t/2,u,u,l,u,1.25,!0,u,u,u,u,u,u,u,u)
w=j===0
v=D.a4r(e,t,w?A.aY:A.K,"\u2026",k,i)
t=f.a
t=w?t:t-i/2
v.a5(d,new B.m(t,f.b))
t=v.b.a.c
return t.gb4(t)},
Hu(d,e,f,g,h){var w,v,u,t=null
if(g<1)return
w=B.lC(e.a)
v=A.h.bO(g*2)
u=D.a4r(w,B.l(t,t,D.ajY(h),t,t,t,t,t,e.b,t,t,v/2,t,t,t,t,1,!0,t,t,t,t,t,t,t,t),A.aY,t,1,1/0)
v=u.b
w=v.c
v=v.a.c
u.a5(d,f.aI(0,new B.m(w/2,v.gb4(v)/2)))},
iqG(d,e){var w=A.h.a1(d,e).split("."),v=B.oe(w[0],B.ag("\\B(?=(\\d{3})+(?!\\d))",!0,!1,!1,!1),new D.fGN(),null)
return w.length>1?v+"."+w[1]:v},
bGf(d,e,f,g){var w,v
if(e<=0)return
w=d.c
J.bs(w.save())
v=f.d-f.b
w.clipRect(B.hS(f.cu(v*0.08)),$.lH()[1],!0)
w.translate(0,(1-A.cn.aA(0,A.h.D(e,0,1)))*v*1.05)
g.$0()
w.restore()},
ium(a0,a1,a2,a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=a1.a,j=a1.b,i=0+k,h=new B.a4(0,0,i,0+j),g=$.T(),f=B.L(),e=a2.d,d=B.ap(e,A.v,0.05)
d.toString
w=B.ap(e,A.v,0.55)
w.toString
v=x.O
f.san(new B.bU(C.b67,1.25,A.w,l,0,B.a([d,w,C.boy],v),A.vQ,l).az(0,h))
a0.aE(h,f)
u=Math.sin(a3*0.35)*k*0.04
t=new B.aI(g.r,A.ak,l,l,B.a([],x.v))
t.E(new B.aZ(k*0.52+u,0))
t.E(new B.aq(k*0.7+u,0))
t.E(new B.aq(k*0.98,j))
t.E(new B.aq(k*0.34,j))
t.E(new B.bz())
g=B.L()
g.san(new B.a6(A.aU,A.b2,A.w,B.a([A.c.j(0.1),A.c.j(0)],v),l,l).az(0,h))
a0.af(t,g)
s=j*0.8
g=s+(j-s)
f=B.L()
f.san(new B.a6(A.aU,A.b2,A.w,B.a([B.ap(e,A.v,0.6).j(0.85),A.v],v),l,l).az(0,new B.a4(0,s,i,g)))
a0.aE(new B.a4(0,s,i,g),f)
f=s-1
g=B.L()
e=a2.e
g.san(new B.a6(A.a5,A.a9,A.w,B.a([A.L,e.j(0.55),A.L],v),l,l).az(0,new B.a4(0,s,i,s+2)))
a0.aE(new B.a4(0,f,i,f+2),g)
r=a1.gdm()>=300
q=new B.e6()
q.cW(a4*7+3)
for(i=a3*1.3,g=a3*k*0.012,f=k*1.1,d=k*0.05,p=0;p<9;++p){w=A.h.F(q.ai()*k+g*(0.5+q.ai()),f)
v=q.ai()
o=j*(0.025+q.ai()*0.05)
n=(p&1)===0?e:A.c
m=new B.ar(A.U,A.R,A.X,A.Y,A.W)
m.r=n.j(0.06+0.08*(0.5+0.5*Math.sin(i+p))).gp(0)
if(r)m.y=new B.h3(A.H,o*0.5)
a0.O(new B.m(w-d,v*j*0.72),o,m)}},
hKS(d,e,f,g,h,i){var w
$.T()
w=B.L()
w.r=A.v.j(h).gp(0)
if(i)w.y=new B.h3(A.H,g*0.6)
d.c2(B.c_(e,g,f),w)},
hqP(d,e,f,g){var w=B.dA(),v=w.a
v.$flags&2&&B.ak(v)
v[11]=1/(d*2.6)
w.fL(e)
w.k9(f)
w.ek(0,0,g,1)
return w},
irB(d,e,f,a0,a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=f*0.49,i=j*0.17,h=B.bx(B.c_(A.J,f,j),new B.aQ(i,i)),g=j*0.085
$.T()
w=B.L()
i=h.a
v=h.b
u=h.c
t=h.d
w.san(C.cd7.az(0,new B.a4(i,v,u,t)))
for(s=d.c,r=e.a,q=e.b,p=6;p>=1;--p){J.bs(s.save())
s.translate(r,q)
o=D.hqP(f,a0,a1,g*p/6)
s.concat(B.bJs(B.Ea(o.a)))
d.aq(h,w)
s.restore()}J.bs(s.save())
s.translate(r,q)
d.aA(0,D.hqP(f,a0,a1,0).a)
r=$.T()
q=B.L()
q.r=C.biL.gp(0)
d.aq(h,q)
q=h.cu(-(j*0.006))
o=B.L()
o.b=A.ad
o.c=j*0.012
o.san(C.cd_.az(0,new B.a4(i,v,u,t)))
d.aq(q,o)
n=h.cu(-(j*0.035))
J.bs(s.save())
s.clipRRect(B.nk(n),$.mZ(),!0)
o=n.a
q=n.b
t=n.c
u=n.d
D.itk(d,new B.a4(o,q,t,u),a2,a3)
v=t-o
m=o+v*(0.2-a0*0.6)
l=new B.aI(r.r,A.ak,k,k,B.a([],x.v))
l.E(new B.aZ(m,q))
l.E(new B.aq(m+v*0.45,q))
l.E(new B.aq(m-v*0.15,u))
l.E(new B.aq(m-v*0.6,u))
l.E(new B.bz())
v=B.L()
v.san(new B.a6(A.aU,A.b2,A.w,B.a([A.c.j(0.16),A.c.j(0.02)],x.O),k,k).az(0,new B.a4(o,q,t,u)))
d.af(l,v)
s.restore()
v=j*0.04
v=B.bx(B.c_(new B.m(0,q+j*0.06),j*0.075,j*0.28),new B.aQ(v,v))
q=B.L()
q.r=A.v.gp(0)
d.aq(v,q)
s.restore()},
itk(c3,c4,c5,c6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8=null,b9=1e9,c0=c4.c,c1=c4.a,c2=c0-c1
$.T()
w=B.L()
v=c5.d
u=B.ap(v,A.v,0.72)
u.toString
t=x.O
w.san(new B.a6(A.aU,A.b2,A.w,B.a([C.buF,u],t),b8,b8).az(0,c4))
c3.aE(c4,w)
w=c4.b
u=c4.d
s=u-w
r=c1+c2
q=new B.a4(c1,w,r,w+s*0.3)
p=B.L()
o=c5.e
p.san(new B.a6(A.aw,A.aD,A.w,B.a([v,o],t),b8,b8).az(0,q))
c3.aE(q,p)
p=c2*0.1
n=B.L()
n.r=A.c.j(0.08).gp(0)
c3.O(new B.m(r-p,w+c2*0.12),c2*0.42,n)
n=c2*0.045
D.mA(c3,"9:41",new B.m(c1+c2*0.09,w+c2*0.035),n,A.c,0,b8,0,b9,A.C)
r=c2*0.06
D.Hu(c3,C.bUK,new B.m(c0-p,w+r),r,A.c)
c0=c2*0.07
m=c1+c0
l=s*0.085
k=w+l
j=c2*0.17
i=c2*0.05
h=B.bx(new B.a4(m,k,m+j,k+j),new B.aQ(i,i))
j=B.L()
j.r=A.c.j(0.22).gp(0)
c3.aq(h,j)
D.Hu(c3,c5.c,h.gbE(),c2*0.11,A.c)
j=h.c+i
k=h.b
D.mA(c3,c5.y,new B.m(j,k+c2*0.012),c0,A.c,0,b8,0,c2*0.62,A.u)
D.mA(c3,"NGMY",new B.m(j,k+c2*0.095),n,A.ab,0,b8,c2*0.006,b9,A.C)
c1+=r
w+=s*0.215
k=c1+c2*0.88
g=B.bx(new B.a4(c1,w,k,w+s*0.165),new B.aQ(r,r))
w=g.eM(new B.m(0,c2*0.015))
j=B.L()
j.r=A.v.j(0.25).gp(0)
c3.aq(w,j)
j=B.L()
j.r=A.c.gp(0)
c3.aq(g,j)
f=A.cn.aA(0,A.h.D((c6-1)/2.6,0,1))
r=g.a+r
j=g.b
w=g.d
c0=w-j
D.mA(c3,c5.as,new B.m(r,j+c0*0.16),c2*0.042,A.an,0,b8,0,c2*0.6,A.O)
m=D.iqG(c5.z*f,c5.at)
D.mA(c3,B.aH(c5.Q,"#",m),new B.m(r,j+c0*0.42),p,A.a_,0,b8,0,c2*0.58,A.u)
r=g.c-c2*0.25
j+=c0*0.32
e=B.bx(new B.a4(r,j,r+c2*0.2,j+c0*0.36),new B.aQ(i,i))
c0=B.L()
c0.r=B.ap(o,A.c,0.75).gp(0)
c3.aq(e,c0)
c0=e.gbE()
j=B.ap(v,A.v,0.1)
j.toString
D.Hu(c3,A.mH,c0,c2*0.065,j)
d=w+s*0.04
a0=s*0.088
for(c0=a0+s*0.022,w=c5.ax,r=c3.c,p=a0*0.55,m=a0*0.33,j=a0*0.38,a1=a0*1.05,a2=c2*0.03,a3=c2*0.46,a4=c2*0.04,a5=c2*0.028,a6=c2*0.046,a7=c2*0.26,a8=0;a8<3;++a8){a9=w[a8]
b0=A.cn.aA(0,A.h.D(A.h.D((c6-(1.3+a8*0.35))/0.5,0,1),0,1))
if(b0>0){J.bs(r.save())
r.translate((1-b0)*c2*0.6,0)
b1=B.bx(new B.a4(c1,d,k,d+a0),new B.aQ(n,n))
$.T()
b2=new B.ar(A.U,A.R,A.X,A.Y,A.W)
b2.r=A.c.j(0.075*b0).gp(0)
c3.aq(b1,b2)
b2=b1.a
b3=b2+p
b4=b1.b
b4+=(b1.d-b4)/2
b5=new B.ar(A.U,A.R,A.X,A.Y,A.W)
b5.r=o.j(0.22).gp(0)
c3.O(new B.m(b3,b4),m,b5)
b5=B.ap(o,A.c,0.2)
b5.toString
D.Hu(c3,a9.a,new B.m(b3,b4),j,b5)
D.mA(c3,a9.b,new B.m(b2+a1,b4-a2),i,A.c,0,b8,0,a3,A.O)
b2=B.ap(o,A.c,0.3)
b2.toString
D.mA(c3,a9.c,new B.m(b1.c-a4,b4-a5),a6,b2,1,b8,0,a7,A.C)
r.restore()}d+=c0}b6=A.h.D((c6-5.2)/0.15,0,1)*(1-A.h.D((c6-5.45)/0.2,0,1))
c0=c2*0.08
b7=B.bx(B.c_(new B.m(c4.gbE().a,u-l),s*0.075*(1-b6*0.08),c2*0.8*(1-b6*0.05)),new B.aQ(c0,c0))
$.T()
c0=B.L()
s=b7.a
l=b7.c
c0.san(new B.a6(A.a5,A.a9,A.w,B.a([v,o],t),b8,b8).az(0,new B.a4(s,b7.b,l,b7.d)))
c3.aq(b7,c0)
D.mA(c3,"Open NGMY",new B.m(b7.gbE().a,b7.gbE().b-c2*0.033),c2*0.052,A.c,0.5,b8,0,(l-s)*0.85,A.u)
if(b6>0){c0=b7.gbE()
c1=B.L()
c1.r=A.c.j(0.25*(1-b6)).gp(0)
c3.O(c0,i+b6*c2*0.3,c1)}},
fBK(a5,a6,a7,a8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=null,a3="NGMY",a4=1e9
switch(a6.ay.a){case 0:w=B.bY(A.J,a7)
$.T()
v=B.L()
v.san(C.ePR.az(0,w))
a5.c2(w,v)
v=B.L()
v.b=A.ad
v.c=a7*0.05
v.r=C.ai0.j(0.7).gp(0)
a5.O(A.J,a7*0.82,v)
for(v=a7*0.02,u=0;u<40;++u){t=u/40*3.141592653589793*2
s=Math.cos(t)
r=Math.sin(t)
q=Math.cos(t)
p=Math.sin(t)
o=new B.ar(A.U,A.R,A.X,A.Y,A.W)
o.c=v
o.r=C.ai0.j(0.5).gp(0)
a5.ah(new B.m(s*a7*0.9,r*a7*0.9),new B.m(q*a7*0.97,p*a7*0.97),o)}n=a8?a3:a6.ch
v=n.length
if(v<=1)m=a7*0.95
else m=v<=3?a7*0.5:a7*0.36
v=-m*0.56
s=a7*1.4
D.mA(a5,n,new B.m(0,v+a7*0.03),m,A.tj.j(0.7),0.5,a2,0,s,A.u)
D.mA(a5,n,new B.m(0,v),m,C.bmV,0.5,a2,0,s,A.u)
break
case 2:w=B.bY(A.J,a7)
$.T()
v=B.L()
v.san(E.aXw.az(0,w))
a5.c2(w,v)
l=B.bY(A.J,a7*0.84)
v=B.L()
s=a6.e
r=B.ap(s,A.c,0.35)
r.toString
q=a6.d
p=B.ap(q,A.v,0.25)
p.toString
v.san(new B.bU(A.n_,0.5,A.w,a2,0,B.a([r,s,p],x.O),A.xO,a2).az(0,l))
a5.c2(l,v)
v=B.L()
v.b=A.ad
v.c=a7*0.025
v.r=A.c.j(0.35).gp(0)
a5.O(A.J,a7*0.72,v)
if(a8)D.mA(a5,a3,new B.m(0,-a7*0.2),a7*0.38,A.c,0.5,a2,a7*0.02,a7*1.3,A.u)
else{v=a6.a
s=v==null
r=s?a6.c:v
p=a7*0.95
D.Hu(a5,r,new B.m(0,a7*0.03),p,B.ap(q,A.v,0.45).j(0.35))
D.Hu(a5,s?a6.c:v,A.J,p,A.c)}break
case 1:k=B.c_(A.J,a7*1.9,a7*3)
v=a7*0.16
j=B.bx(k,new B.aQ(v,v))
if(a8){$.T()
s=B.L()
r=a6.d
q=B.ap(r,A.v,0.5)
q.toString
r=B.ap(r,A.v,0.75)
r.toString
s.san(new B.a6(A.aw,A.aD,A.w,B.a([q,r],x.O),a2,a2).az(0,k))
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
r=B.bx(new B.a4(s,p,s+g*0.55,p+o),new B.aQ(r,r))
o=B.L()
o.r=A.c.j(0.9).gp(0)
a5.aq(r,o)
D.mA(a5,"ngmy.org",new B.m(h-e,q-f),v,A.ab,1,a2,0,a4,A.O)
return}$.T()
v=B.L()
s=B.ap(a6.d,A.v,0.15)
s.toString
v.san(new B.a6(A.aw,A.aD,A.w,B.a([s,a6.e],x.O),a2,a2).az(0,k))
a5.aq(j,v)
v=a5.c
J.bs(v.save())
v.clipRRect(B.nk(j),$.mZ(),!0)
s=k.c
r=k.b
q=a7*0.2
p=B.L()
p.r=A.c.j(0.08).gp(0)
a5.O(new B.m(s-a7*0.3,r+q),a7*1.3,p)
p=k.a
o=k.d
i=B.L()
i.r=A.v.j(0.1).gp(0)
a5.O(new B.m(p+q,o),a7*0.9,i)
v.restore()
v=s-p
o-=r
i=a7*0.03
D.mA(a5,a3,new B.m(p+v*0.07,r+o*0.1),a7*0.26,A.c,0,a2,i,a4,A.u)
D.Hu(a5,a6.c,new B.m(s-v*0.12,r+o*0.2),a7*0.32,A.c.j(0.9))
p+=v*0.08
s=r+o*0.38
q=a7*0.06
d=B.bx(new B.a4(p,s,p+a7*0.48,s+a7*0.36),new B.aQ(q,q))
q=B.L()
s=d.a
h=d.b
g=d.c
f=d.d
q.san(C.avK.az(0,new B.a4(s,h,g,f)))
a5.aq(d,q)
q=d.gbE()
e=d.gbE()
a0=B.L()
a0.r=C.aif.gp(0)
a1=a7*0.012
a0.c=a1
a5.ah(new B.m(s,q.b),new B.m(g,e.b),a0)
a0=d.gbE()
e=d.gbE()
q=B.L()
q.r=C.aif.gp(0)
q.c=a1
a5.ah(new B.m(a0.a,h),new B.m(e.a,f),q)
D.Hu(a5,A.a4v,new B.m(g+a7*0.25,d.gbE().b),a7*0.28,A.ab)
D.mA(a5,"\u2022\u2022\u2022\u2022  \u2022\u2022\u2022\u2022  2026",new B.m(p,r+o*0.64),a7*0.17,A.c.j(0.9),0,a2,a7*0.02,a4,A.O)
D.mA(a5,a6.ch,new B.m(p,r+o*0.8),a7*0.15,A.c,0,a2,i,v*0.6,A.u)
break}},
inW(d,e,f,g,h,i){var w,v,u,t,s=null,r=g.ay,q=r===C.UX,p=q?f*0.06:f*0.16,o=Math.cos(h),n=$.T(),m=B.L()
switch(r.a){case 0:r=A.CI
break
case 2:r=A.an
break
case 1:r=B.ap(g.d,A.c,0.55)
r.toString
break
default:r=s}m.r=r.gp(0)
r=x.v
n=n.r
if(q){w=new B.aI(n,A.ak,s,s,B.a([],r))
r=f*0.16
w.E(new B.js(B.bx(B.c_(A.J,f*1.9,f*3),new B.aQ(r,r))))}else{w=new B.aI(n,A.ak,s,s,B.a([],r))
w.E(new B.jM(B.bY(A.J,f)))}v=new D.fBL(d,e,f,h)
r=B.a([],x.n)
for(u=1;u<8;++u)r.push(p*u/8)
if(o>=0){v.$2(p,new D.fBM(d,g,f))
for(q=x.Q,r=new B.dp(r,q),r=new B.bQ(r,r.gI(0),q.k("bQ<aj.E>")),q=q.k("aj.E");r.B();){o=r.d
if(o==null)o=q.a(o)
v.$2(o,new D.fBN(d,w,m))}v.$2(0,new D.fBO(d,g,f,i,w))}else{v.$2(0,new D.fBP(d,g,f))
for(q=r.length,t=0;t<r.length;r.length===q||(0,B.I)(r),++t)v.$2(r[t],new D.fBQ(d,w,m))
v.$2(p,new D.fBR(d,g,f))}},
hMX(a0,a1,a2,a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
for(w=a1.a,v=a1.b-a2*0.22,u=a4*1.4,t=a2*0.07,s=a3.e,r=a3.d,q=x.O,p=a3.ax,o=a4*0.7,n=0;n<3;++n){m=o+n*3.141592653589793*2/3
l=Math.sin(m)
if(l<0!==a5)continue
k=w+Math.cos(m)*a2*0.4
j=v+n*a2*0.2+Math.sin(u+n)*a2*0.025
i=new B.m(k,j)
h=t*(0.85-l*0.25)
g=B.bY(i,h)
$.T()
f=new B.ar(A.U,A.R,A.X,A.Y,A.W)
f.r=A.v.j(0.25).gp(0)
a0.O(new B.m(k+0,j+h*0.25),h,f)
f=new B.ar(A.U,A.R,A.X,A.Y,A.W)
e=B.ap(s,A.c,0.55)
e.toString
d=B.ap(r,A.v,0.35)
d.toString
f.san(new B.bU(A.MH,0.5,A.w,null,0,B.a([e,s,d],q),A.xO,null).az(0,g))
a0.c2(g,f)
D.Hu(a0,p[n].a,i,h,A.c)
f=-h
f=B.c_(new B.m(k+f*0.32,j+f*0.48),h*0.32,h*0.7)
j=new B.ar(A.U,A.R,A.X,A.Y,A.W)
j.r=A.c.j(0.45).gp(0)
a0.c2(f,j)}},
huH(f2,f3,f4,f5,f6,f7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6,d7,d8,d9,e0,e1,e2,e3,e4,e5,e6,e7,e8,e9=null,f0=1e9,f1={}
f1.a=f5
w=A.n.F(f4,14)
v=C.Tk[w]
u=f3.a
t=f3.b
if(u<=0||t<=0)return
f5=f1.a=A.h.D(f5,0,10)
s=f2.c
J.bs(s.save())
r=0+u
q=0+t
s.clipRect(B.hS(new B.a4(0,0,r,q)),$.lH()[1],!0)
if(f3.gdm()<180){r=f3.gdm()
s.restore()
D.hR6(f2,new B.e1(["ad",w,f6,u,t]),f3,f5+w*1000,new D.h7G(f1,180/r,u,t,f4,f6))
return}p=f3.gdm()>=300
D.ium(f2,f3,v,f5,f4,!0)
o=u>=t*1.15
n=o?t:Math.min(t*0.62,u*1.05)
m=o?u*0.07:u/2
l=o?0:0.5
k=o?u*0.42:u*0.88
j=o?t*0.22:t*0.63
i=o?new B.m(u*0.73,t*0.47):new B.m(u/2,t*0.33)
h=o?t*0.8:Math.min(t*0.5,u*0.6/0.49)
g=f7==null
f=g?0:A.eg.aA(0,A.h.D(f7.b/1.1,0,1))*3.141592653589793*2
e=Math.sin(f5*1.1)
if(f5<6.9){d=A.cn.aA(0,A.h.D(A.h.D(f5/1.1,0,1),0,1))
a0=A.dS.aA(0,A.h.D((f5-3.2)/0.9,0,1))
a1=A.r9.aA(0,A.h.D((f5-6.3)/0.6,0,1))
a2=i.a+(1-d)*u*0.45+a1*u*0.7
a3=i.b+Math.sin(f5*1.6)*h*0.012
a4=h*(1+a0*0.06)
a5=new B.m(a2,a3)
D.hKS(f2,new B.m(a2,a3+a4*0.55),a4*0.62,a4*0.07,0.5,p)
D.hMX(f2,a5,a4,v,f5,!1)
D.irB(f2,a5,a4,-1.15+d*0.73+a0*0.3+a1*0.9+e*0.05+f,0.07-a0*0.03,v,f5)
D.hMX(f2,a5,a4,v,f5,!0)}if(f5>=6.2&&f5<8.9){a6=A.eg.aA(0,A.h.D((f5-6.4)/0.7,0,1))
a7=A.r9.aA(0,A.h.D((f5-8.4)/0.45,0,1))
e=v.ay
a8=e===C.UX
a9=(a8?n*0.15:n*0.2)*a6*(1-a7*0.4)
if(a9>1){b0=Math.sin(f5*1.5)
b1=i.a
b2=i.b
b3=n*0.02
b4=b2-b3+Math.sin(f5*2)*n*0.012
a5=new B.m(b1,b4)
b5=a9*2
$.T()
b6=B.L()
b7=x.O
b6.san(new B.bU(A.z,0.5,A.w,e9,0,B.a([v.e.j(0.35*a6),A.L],b7),e9,e9).az(0,B.bY(a5,b5)))
f2.O(a5,b5,b6)
D.hKS(f2,new B.m(b1,b2+n*0.33),a9*2.2,a9*0.25,0.45*a6,p)
D.inW(f2,a5,a9,v,(1-a6)*3.141592653589793*1.5+b0*0.35+f+a7*3.141592653589793,A.h.D((f5-7.2)/0.9,0,1))
if(!a8){b8=A.cn.aA(0,A.h.D(A.h.D((f5-7)/0.4,0,1),0,1))*(1-a7)
if(b8>0){b9=B.bx(B.c_(new B.m(b1,b4+a9*1.28),n*0.075,a9*1.9*b8),new B.aQ(b3,b3))
a8=b9.eM(new B.m(0,n*0.008))
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
b0.san(new B.a6(A.a5,A.a9,A.w,B.a([b1,a8,b2],b7),e9,e9).az(0,new B.a4(b3,b9.b,b4,b9.d)))
f2.aq(b9,b0)
if(b8>0.6){e=e===C.a9b?A.a.es(v.b,"NGMY ","").toUpperCase():v.ch
D.mA(f2,e,new B.m(b9.gbE().a,b9.gbE().b-n*0.025),n*0.042,A.c,0.5,e9,n*0.004,(b4-b3)*0.86,A.u)}}}}}e=v.e
a8=B.ap(e,A.c,0.25)
a8.toString
c0=n*(o?0.105:0.095)
if(f5<3.3){c1=1-A.h.D((f5-3)/0.3,0,1)
D.bGf(f2,A.h.D((f5-0.2)/0.4,0,1)*c1,new B.a4(0,j,r,j+n*0.05),new D.h7H(f2,v,m,j,n,a8,k,l))
c2=j+n*0.07
a8=c0*1.15
D.bGf(f2,A.h.D((f5-0.45)/0.5,0,1)*c1,new B.a4(0,c2,r,c2+a8),new D.h7I(f2,v,m,c2,c0,k,l))
c3=c2+c0*1.18
D.bGf(f2,A.h.D((f5-0.85)/0.5,0,1)*c1,new B.a4(0,c3,r,c3+a8),new D.h7J(f2,v,m,c3,c0,k,l))
c4=c3+c0*1.35
c5=n*0.22*(A.cn.aA(0,A.h.D(A.h.D((f5-1.3)/0.6,0,1),0,1))*c1)
a8=o?m:m-c5/2
b0=n*0.004
b0=B.bx(new B.a4(a8,c4,a8+c5,c4+n*0.008),new B.aQ(b0,b0))
$.T()
a8=B.L()
a8.r=e.gp(0)
f2.aq(b0,a8)}else if(f5<6.5){c1=1-A.h.D((f5-6.2)/0.3,0,1)
D.bGf(f2,A.h.D((f5-3.3)/0.4,0,1)*c1,new B.a4(0,j,r,j+n*0.05),new D.h7K(f2,v,m,j,n,a8,k,l))
c4=j+n*0.07
c6=A.h.D((f5-3.45)/0.5,0,1)*c1
if(c6>0){J.bs(s.save())
s.translate(0,(1-A.cn.aA(0,A.h.D(c6,0,1)))*n*0.04)
a8=o?0.05:0.046
c7=D.hN2(f2,v.w,new B.m(m,c4),n*a8,A.c.j(c6),k,l,2,A.O)
s.restore()}else c7=n*0.12
a8=n*0.04
c8=c4+Math.max(c7,n*0.06)+a8
for(b0=n*0.075,b1=v.x,b2=v.d,c9=k-a8*1.8,b3=a8*0.55,b4=m+b3,b5=a8*0.62,b6=a8*0.8,b7=a8*1.6,d0=m+b7,d1=k-b7,d2=0;d2<3;++d2){d3=A.cn.aA(0,A.h.D(A.h.D((f1.a-(3.9+d2*0.3))/0.4,0,1),0,1))*c1
if(d3>0){d4=0.92*d3
d5=(1-d3)*n
if(o){d6=c8+b5
$.T()
d7=new B.ar(A.U,A.R,A.X,A.Y,A.W)
d7.r=e.gp(0)
f2.O(new B.m(b4,d6),b3*d3,d7)
d7=B.ap(b2,A.v,0.4)
d7.toString
D.Hu(f2,A.h1,new B.m(b4,d6),b6*d3,d7)
J.bs(s.save())
s.translate(d5*0.05,0)
D.mA(f2,b1[d2],new B.m(d0,c8),a8,A.c.j(d4),0,e9,0,c9,A.O)
s.restore()}else{d8=m-(Math.min(D.fNg(b1[d2],a8,A.c,0,e9,A.O).b.c,d1)+b7)/2
d9=c8+d5*0.03
d5=d8+b3
d6=d9+b5
$.T()
d7=new B.ar(A.U,A.R,A.X,A.Y,A.W)
d7.r=e.j(d3).gp(0)
f2.O(new B.m(d5,d6),b3,d7)
D.Hu(f2,A.h1,new B.m(d5,d6),b6,B.ap(b2,A.v,0.4).j(d3))
D.mA(f2,b1[d2],new B.m(d8+b7,d9),a8,A.c.j(d4),0,e9,0,d1,A.O)}}c8+=b0}}else if(f5<8.6){c1=1-A.h.D((f5-8.3)/0.3,0,1)
D.bGf(f2,A.h.D((f5-6.6)/0.4,0,1)*c1,new B.a4(0,j,r,j+n*0.05),new D.h7L(f2,v,m,j,n,a8,k,l))
d3=A.h.D((f5-6.8)/0.5,0,1)*c1
if(d3>0){J.bs(s.save())
s.translate(0,(1-A.cn.aA(0,A.h.D(d3,0,1)))*n*0.05)
a8=o?0.085:0.075
b0=A.c.j(d3)
b1=o?3:2
D.hN2(f2,v.CW,new B.m(m,j+n*0.07),n*a8,b0,k,l,b1,A.u)
s.restore()}}a8=f1.a
if(a8>=8.5){a6=A.h.D((a8-8.5)/0.35,0,1)
$.T()
a8=B.L()
a8.r=A.v.j(0.45*a6).gp(0)
f2.aE(new B.a4(0,0,r,q),a8)
e0=t*(o?0.36:0.38)
e1=A.eg.aA(0,A.h.D((f1.a-8.55)/0.5,0,1))
J.bs(s.save())
a8=u/2
s.translate(a8,e0)
f2.bW(0,0.7+0.3*e1)
s.translate(-u/2,-e0)
e2=Math.min(n*0.17,u*0.2)
b0=A.c.j(a6)
b1=B.ap(e,A.c,0.3)
b1.toString
b2=x.O
D.mA(f2,"NGMY",new B.m(a8,e0-e2*0.6),e2,b0,0.5,B.a([A.c,b1],b2),e2*0.12,f0,A.u)
s.restore()
b1=e0+e2*0.62
D.mA(f2,v.b,new B.m(a8,b1),n*0.048,A.c.j(0.85*A.h.D((f1.a-8.7)/0.3,0,1)),0.5,e9,0,u*0.86,A.C)
d3=A.eg.aA(0,A.h.D((f1.a-8.8)/0.45,0,1))
if(d3>0){b0=n*0.05
e3=B.bx(B.c_(new B.m(a8,b1+n*0.16),n*0.1,Math.min(u*0.6,Math.max(u*0.3,n*0.5))*d3),new B.aQ(b0,b0))
e4=B.L()
e4.r=e.j(0.45).gp(0)
if(p)e4.y=new B.h3(A.H,n*0.03)
f2.aq(e3,e4)
b1=B.L()
b3=e3.a
b4=e3.b
b5=e3.c
b6=e3.d
b1.san(new B.a6(A.a5,A.a9,A.w,B.a([v.d,e],b2),e9,e9).az(0,new B.a4(b3,b4,b5,b6)))
f2.aq(e3,b1)
J.bs(s.save())
s.clipRRect(B.nk(e3),$.mZ(),!0)
b5-=b3
e5=b3-b5*0.3+A.h.D((f1.a-9)/0.9,0,1)*b5*1.6
b3=e5+b5*0.25
b1=B.L()
b1.san(new B.a6(A.a5,A.a9,A.w,B.a([A.c.j(0),A.c.j(0.5),A.c.j(0)],b2),e9,e9).az(0,new B.a4(e5,0,b3,1)))
f2.aE(new B.a4(e5,b4,b3,b4+(b6-b4)),b1)
s.restore()
if(d3>0.7)D.mA(f2,"Open NGMY",new B.m(a8,e3.gbE().b-n*0.03),b0,A.c,0.5,e9,0,b5*0.8,A.u)
D.mA(f2,"ngmy.org",new B.m(a8,b6+n*0.035),n*0.036,A.c.j(0.65*A.h.D(d3,0,1)),0.5,e9,n*0.004,f0,A.O)}}a9=new B.a4(0,0,r,q)
$.T()
e=B.L()
e.san(new B.bU(A.z,0.95,A.w,e9,0,B.a([A.L,A.v.j(0.45)],x.O),E.aDi,e9).az(0,a9))
f2.aE(a9,e)
if(!g&&f7.b<0.7){b8=f7.b/0.7
g=f7.a
e=B.L()
e.b=A.ad
a8=1-b8
e.c=n*0.012*a8
e.r=A.c.j(0.8*a8).gp(0)
f2.O(new B.m(g.a*u,g.b*t),n*(0.05+0.3*b8),e)}e6=n*0.035
e7=f6?"Ad "+(w+1)+" of 14":"Ad"
w=e6*0.9
g=D.fNg(e7,w,A.c,0,e9,A.C).b
e=g.c
g=g.a.c
a8=e6*0.4
e8=B.bx(new B.a4(e6,e6,e6+(e+e6*1.2),e6+(g.gb4(g)+e6*0.5)),new B.aQ(a8,a8))
a8=B.L()
a8.r=A.bu.j(0.95).gp(0)
f2.aq(e8,a8)
D.mA(f2,e7,new B.m(e8.a+e6*0.6,e8.b+e6*0.25),w,A.ax,0,e9,0,f0,A.C)
w=n*0.012
a8=t-w
w=a8+w
g=B.L()
g.r=A.c.j(0.2).gp(0)
f2.aE(new B.a4(0,a8,r,w),g)
g=f1.a
e=B.L()
e.r=A.bu.gp(0)
f2.aE(new B.a4(0,a8,0+u*g/10,w),e)
w=f1.a
if(w<0.25)c1=1-w/0.25
else c1=w>9.8?(w-9.8)/0.2:0
if(c1>0){w=B.L()
w.r=A.v.j(A.h.D(c1,0,1)).gp(0)
f2.aE(new B.a4(0,0,r,q),w)}s.restore()},
aqx:function aqx(d,e){this.a=d
this.b=e},
i7:function i7(d,e,f){this.a=d
this.b=e
this.c=f},
t5:function t5(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v){var _=this
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
b17:function b17(d,e){this.a=d
this.b=e},
fN3:function fN3(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fGN:function fGN(){},
fBL:function fBL(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fBM:function fBM(d,e,f){this.a=d
this.b=e
this.c=f},
fBN:function fBN(d,e,f){this.a=d
this.b=e
this.c=f},
fBO:function fBO(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fBP:function fBP(d,e,f){this.a=d
this.b=e
this.c=f},
fBQ:function fBQ(d,e,f){this.a=d
this.b=e
this.c=f},
fBR:function fBR(d,e,f){this.a=d
this.b=e
this.c=f},
h7G:function h7G(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
h7H:function h7H(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
h7I:function h7I(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
h7J:function h7J(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
h7K:function h7K(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
h7L:function h7L(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
Jn:function Jn(d,e,f){this.c=d
this.d=e
this.a=f},
c6N:function c6N(d){this.a=d},
iuv(d,e,f,g,h,i){var w=new D.fMW(e,h,!0),v=w.$1(g),u=v.b.c
if(u>i&&u>0)v=w.$1(Math.max(2,g*i/u))
w=v.b
u=w.c
w=w.a.c
v.a5(d,f.aI(0,new B.m(u/2,w.gb4(w)/2)))},
MG(d,e,f,g,h,i,j){var w,v,u,t,s,r,q,p,o,n,m,l,k
if(j<=0)return
w=new D.h7F(e,f,g)
v=A.h.cI(22*A.h.D(j,0,1))
for(u=i-h,t=e,s=1;s<=v;++s,t=q){r=Math.min(s/22,A.h.D(j,0,1))
q=w.$1(r)
$.T()
p=new B.ar(A.U,A.R,A.X,A.Y,A.W)
p.b=A.ad
o=p.c=h+u*r
p.r=A.r0.gp(0)
p.d=A.bG
d.ah(t,q,p)
p=-o*0.18
n=q.a
m=q.b
l=B.ap(A.r0,A.c,0.18)
l.toString
k=new B.ar(A.U,A.R,A.X,A.Y,A.W)
k.b=A.ad
k.c=o*0.28
k.r=l.gp(0)
k.d=A.bG
d.ah(new B.m(t.a+p,t.b+0),new B.m(n+p,m+0),k)}},
fMW:function fMW(d,e,f){this.a=d
this.b=e
this.c=f},
h7F:function h7F(d,e,f){this.a=d
this.b=e
this.c=f},
hq9(d,e,f,g,h,i){var w=new D.fDk(e,h,!0,0),v=w.$1(g),u=v.b.c
if(u>i&&u>0)v=w.$1(Math.max(2,g*i/u))
w=v.b
u=w.c
w=w.a.c
v.a5(d,f.aI(0,new B.m(u/2,w.gb4(w)/2)))},
MH(d,e,f,g,h,i){var w=h==null,v=w?A.n.F(A.h.bd(f/10),14):h,u=A.h.F(f,10)
D.huH(d,e,v,u,g||w,i)},
MI(d,e,f,g,h,i){var w,v=d.c
J.bs(v.save())
v.clipRect(B.hS(new B.a4(0,0,0+e.a,0+e.b)),$.lH()[1],!0)
w=C.iz[A.n.F(f,8)].e
if(w===-2)D.ikY(d,e,g)
else if(w===-1)D.MH(d,e,g,!0,h,i)
else D.MH(d,e,g,!1,w,i)
v.restore()},
ikY(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k=e.a,j=e.b,i=new B.W(Date.now(),0,!1),h=0+k,g=0+j
$.T()
w=B.L()
w.san(C.cbU.az(0,new B.a4(0,0,h,g)))
d.aE(new B.a4(0,0,h,g),w)
w=B.L()
w.r=A.bC.gp(0)
d.aE(new B.a4(0,0,h,0+j*0.15),w)
D.hq9(d,A.pc[B.bO(i)-1]+" "+B.bD(i),new B.m(k/2,j*0.075),j*0.08,A.c,k*0.9)
v=k/7
for(h=j*0.21,g=j*0.05,u=0;u<7;++u)D.hq9(d,C.dHO[u],new B.m(v*(u+0.5),h),g,A.aF,9999)
t=B.c3(B.bD(i),B.bO(i),1,0,0,0,0,0)
s=B.bW(B.c3(B.bD(i),B.bO(i)+1,0,0,0,0,0,0))
r=B.lZ(t)-1
q=j*0.74/A.h.cI((r+s)/7)
for(h=j*0.26,g=f*3,p=1;p<=s;++p){o=r+p-1
n=new B.m(v*(A.n.F(o,7)+0.5),h+q*(A.n.ao(o,7)+0.5))
if(p===B.bW(i)){w=Math.min(v,q)
m=A.aH.j(0.5+0.2*Math.sin(g))
$.T()
l=new B.ar(A.U,A.R,A.X,A.Y,A.W)
l.r=m.gp(0)
d.O(n,w*0.42,l)}w=Math.min(v,q)
m=p===B.bW(i)?A.c:A.ab
D.hq9(d,""+p,n,w*0.42,m,9999)}},
fDk:function fDk(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
wO:function wO(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
h7R(d,e,f,g,h,i,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=e.a
if(j<=0||e.b<=0)return
if(e.gdm()<180){w=e.gdm()
v=h<3
u=v?h:g
D.hR6(d,new B.buj(["tv",f,i,a0,j,e.b,v]),e,u,new D.h7S(180/w,e,f,g,h,i,a1,a0))
return}w=d.c
J.bs(w.save())
u=e.b
t=0+j
s=0+u
w.clipRect(B.hS(new B.a4(0,0,t,s)),$.lH()[1],!0)
if(h<3){$.T()
r=B.L()
r.r=C.ZW.gp(0)
d.aE(new B.a4(0,0,t,s),r)
if(h<0.5)t=h/0.5
else t=h>2.4?(3-h)/0.6:1
q=A.h.D(t,0,1)
t=e.eq(A.J)
s=e.gdm()
r=B.L()
r.san(new B.bU(A.z,0.5,A.w,k,0,B.a([A.aH.j(0.35*q),A.L],x.O),k,k).az(0,B.bY(e.eq(A.J),e.gdm()*0.5)))
d.O(t,s*0.5,r)
D.aSH(d,"NGMY",new B.m(0,u*0.36),u*0.2,A.c.j(q),A.K,u*0.03,j)
D.aSH(d,"T V",new B.m(0,u*0.6),u*0.08,A.aH.j(q),A.K,u*0.05,j)
r=j*0.3
s=u*0.78
t=B.L()
t.r=A.aH.j(q).gp(0)
d.aE(new B.a4(r,s,r+j*0.4*(h/3),s+3),t)}else if(i>=0){D.MI(d,e,i,g,a0,a1)
p=C.iz[A.n.F(i,8)].e
if(p!==-2){if(p>=0)o=p
else o=a0==null?A.n.F(A.h.bd(g/10),14):a0
D.hJH(d,e,"ADS  \xb7  "+C.Tk[A.n.F(o,14)].b)}}else{n=A.h.D((h-3)/0.5,0,1)
m=A.n.F(f,10)
l=C.aLy.h(0,m)
if(m===0)D.iuP(d,e,g)
else if(l==null)D.iGR(d,e,g)
else D.huH(d,e,D.hSK(l),A.h.F(g,10),!1,a1)
D.hJH(d,e,"CH "+(m+1)+"  \xb7  "+C.TO[m].a)
if(n<1){$.T()
r=B.L()
r.r=A.c.j(0.6*(1-n)).gp(0)
d.aE(new B.a4(0,0,t,s),r)}}t=new B.aI($.T().r,A.ak,k,k,B.a([],x.v))
t.E(new B.aZ(0,0))
t.E(new B.aq(j*0.45,0))
t.E(new B.aq(0,u*0.5))
t.E(new B.bz())
u=B.L()
u.r=A.c.j(0.04).gp(0)
d.af(t,u)
w.restore()},
aSH(d,e,f,g,h,i,j,k){var w,v=null,u=D.ajY(h),t=A.h.bO(g*2)
u=B.l(v,v,u,v,v,v,v,v,v,v,v,t/2,v,v,A.u,v,v,!0,v,j,v,v,v,v,v,v)
t=k==null
w=D.a4r(e,u,i,v,1,t?9999:k)
w.a5(d,f.a6(0,new B.m(i===A.K&&!t?(k-w.b.c)/2:0,0)))},
hJH(d,e,f){var w=e.b,v=e.a,u=v-w*0.34,t=w*0.04,s=w*0.03,r=B.bx(new B.a4(u,t,u+w*0.3,t+w*0.1),new B.aQ(s,s))
$.T()
s=B.L()
s.r=A.v.j(0.55).gp(0)
d.aq(r,s)
D.aSH(d,"NGMY",new B.m(r.a+w*0.025,r.b+w*0.012),w*0.07,A.c,A.aY,1,null)
s=w*0.86
u=B.L()
u.r=A.v.j(0.6).gp(0)
d.aE(new B.a4(0,s,0+v,s+w*0.14),u)
D.aSH(d,f,new B.m(t,w*0.885),w*0.075,A.c,A.aY,0,v*0.74-t)},
aRO(d,e,f,g,h,i,j){var w=new D.fAY(e,h,i,j),v=w.$1(g),u=v.b.c,t=f.c-f.a
if(u>t&&u>0)v=w.$1(g*t/u)
w=f.gbE()
u=v.b
t=u.c
u=u.a.c
v.a5(d,w.aI(0,new B.m(t/2,u.gb4(u)/2)))},
iuP(d5,d6,d7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5=null,c6=d6.a,c7=d6.b,c8=A.h.F(d7,14),c9=new D.fNn(c8),d0=new D.fNj(),d1=0+c6,d2=0+c7,d3=$.T(),d4=B.L()
d4.san(C.cd5.az(0,new B.a4(0,0,d1,d2)))
d5.aE(new B.a4(0,0,d1,d2),d4)
w=c6*0.34
v=new D.fNm(w,c7)
u=v.$2(0,0.5)
d4=c7*0.75
t=B.L()
t.san(new B.bU(A.z,0.5,A.w,c5,0,B.a([A.bO.j(0.55),A.L],x.O),c5,c5).az(0,B.bY(u,d4)))
d5.O(u,d4,t)
s=new B.e6()
s.cW(11)
for(d4=d7*2,r=0;r<26;++r){t=s.ai()
q=s.ai()
p=s.ai()
o=new B.ar(A.U,A.R,A.X,A.Y,A.W)
o.r=A.c.j(0.35+0.4*Math.sin(d4+r)).gp(0)
d5.O(new B.m(t*c6,q*c7*0.45),0.6+p*1.1,o)}for(t=x.v,n=0;n<2;++n){q=B.a([],t)
m=new B.aI(d3.r,A.ak,c5,c5,q)
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
q=new B.ar(A.U,A.R,A.X,A.Y,A.W)
q.r=(p?C.NA:C.bwu).gp(0)
d5.af(m,q)}j=v.$2(0,0.81)
i=d0.$1(c9.$2(0.2,1.6))
h=d0.$1(c9.$2(2.4,2.6))
for(d3=d7*1.4,g=0;g<8;++g){t=C.aE6[g]
f=t.a
e=t.b
d=Math.sin(d3+f*7)*c7*0.006
q=v.$2(f,e)
p=q.a
q=q.b
t=c7*t.c
o=new B.ar(A.U,A.R,A.X,A.Y,A.W)
o.r=A.hY.gp(0)
d5.O(new B.m(p+d,q+0),t*h,o)
o=v.$2(f,e-0.015)
q=o.a
o=o.b
p=new B.ar(A.U,A.R,A.X,A.Y,A.W)
p.r=A.et.gp(0)
d5.O(new B.m(q+d,o+0),t*0.82*h,p)}for(d3=c7*0.01,t=j.a,q=j.b,p=q+d3,o=c7*0.015,q+=o,k=c7*0.04,g=0;g<2;++g){a0=F.hr[g]*c7
D.MG(d5,j,new B.m(t+a0*0.04,p),new B.m(t+a0*0.12,q),k,d3,i)}t=c7*0.085
D.MG(d5,j,v.$2(0.02,0.7),v.$2(0,0.6),t,c7*0.055,i)
a1=d0.$1(c9.$2(1.8,1.6))
q=c7*0.05
p=c7*0.026
D.MG(d5,v.$2(0,0.6),v.$2(-0.1,0.55),v.$2(-0.34,0.44),q,p,a1)
D.MG(d5,v.$2(0,0.6),v.$2(0.1,0.55),v.$2(0.34,0.44),q,p,a1)
a2=d0.$1(c9.$2(3.2,1.3))
p=c7*0.024
a0=c7*0.018
D.MG(d5,v.$2(-0.34,0.44),v.$2(-0.17,0.33),v.$2(0,0.39),p,a0,a2)
D.MG(d5,v.$2(0.34,0.44),v.$2(0.17,0.33),v.$2(0,0.39),p,a0,a2)
a3=d0.$1(c9.$2(4.4,1.3))
a0=c7*0.02
p=c7*0.012
D.MG(d5,v.$2(0,0.39),v.$2(-0.1,0.3),v.$2(-0.17,0.2),a0,p,a3)
D.MG(d5,v.$2(0,0.39),v.$2(0.1,0.3),v.$2(0.17,0.2),a0,p,a3)
a0=c7*0.016
D.MG(d5,v.$2(-0.27,0.72),v.$2(-0.14,0.78),v.$2(0,0.7),a0,p,d0.$1(c9.$2(3.6,1)))
D.MG(d5,v.$2(0.27,0.72),v.$2(0.14,0.78),v.$2(0,0.7),a0,p,d0.$1(c9.$2(3.6,1)))
a4=new B.e6()
a4.cW(5)
for(a0=d7*1.6,a5=d5.c,a6=d7*1.3,a7=h*1.4,a8=c7*0.03,r=0;r<110;++r){a9=C.aE6[A.n.F(r,8)]
b0=a4.ai()*3.141592653589793*2
b1=Math.sqrt(a4.ai())*a9.c*0.95
b2=v.$2(a9.a+Math.cos(b0)*b1,a9.b+Math.sin(b0)*b1)
b3=Math.sin(a0+r)
b4=b2.a
b2=b2.b
J.bs(a5.save())
a5.translate(b4+b3*c7*0.006,b2+0)
a5.rotate((b0+Math.sin(a6+r)*0.2)*180/3.141592653589793,0,0)
b5=A.h.D(a7-A.n.F(r,10)*0.05,0,1)
b2=B.c_(A.J,o*b5,a8*b5)
$.T()
b3=new B.ar(A.U,A.R,A.X,A.Y,A.W)
b3.r=B.ap(A.bk,A.eH,(Math.sin(d4+r)+1)/2).gp(0)
d5.c2(b2,b3)
a5.restore()}b6=new D.fNk(c9,d5,d7,c8)
o=c7*0.075
b6.$5(0,"Bibi",v.$2(-0.27,0.72),o,5)
b6.$5(1,"Babu",v.$2(0.27,0.72),o,5.6)
b6.$5(2,"Mama",v.$2(-0.34,0.44),t,6.4)
b6.$5(3,"Baba",v.$2(0.34,0.44),t,7)
b6.$5(4,"Dada",v.$2(-0.17,0.2),o,8)
b6.$5(5,"Kaka",v.$2(0.17,0.2),o,8.6)
b7=new D.fNl(c9,d7,d5)
b7.$3(v.$2(0,0.7),c7*0.028,5.9)
b7.$3(v.$2(0,0.39),c7*0.035,7.4)
if(c8>9.3)for(t=(c8-9.3)*0.4,r=0;r<7;++r){b8=A.h.F(t+r/7,1)
D.aSH(d5,"\u2665",v.$2(Math.sin(r*2.3+d4)*0.3,0.38-b8*0.3),c7*(0.04+0.02*A.n.F(r,3)),A.hZ.j((1-b8)*0.85),A.aY,0,c5)}d4=c6*0.655+(1-d0.$1(c9.$2(1,0.9)))*c6*0.4
t=c7*0.1
a0=d4+c6*0.315
b9=new B.a4(d4,t,a0,t+c7*0.64)
a5=B.bx(b9,new B.aQ(q,q))
$.T()
a6=B.L()
a6.r=C.j1.j(0.88).gp(0)
d5.aq(a5,a6)
a6=B.bx(b9,new B.aQ(q,q))
a5=B.L()
a5.b=A.ad
a5.c=p
a5.r=F.ff.gp(0)
d5.aq(a6,a5)
c0=new D.fNo(b9,c7)
D.aRO(d5,"NGMY",c0.$2(0.13,0.06),c7*0.06,F.ff,!0,p)
D.aRO(d5,"Family",c0.$2(0.2,0.1),t,A.c,!0,0)
D.aRO(d5,"Tree",c0.$2(0.3,0.1),t,A.c,!0,0)
for(r=0;r<3;++r){c1=c9.$2(5.5+r*1.5,0.5)
if(c1<=0)continue
D.aRO(d5,"\u2665 "+C.cgF[r],c0.$2(0.43+r*0.075,0.06).eM(new B.m((1-c1)*30,0)),q,A.iK.j(c1),!1,0)}c2=c9.$2(11,0.5)
if(c2>0){c3=B.c_(new B.m(b9.gbE().a,c7*0.67),o,(a0-d4)*0.6*A.eg.aA(0,c2))
d4=B.bx(c3,new B.aQ(k,k))
$.T()
t=B.L()
t.r=F.ff.gp(0)
d5.aq(d4,t)
if(c2>0.8)D.aRO(d5,"ngmy.org",c3.cu(-d3),q,C.j1,!0,0)}if(c8>11.6){d3=c7*0.82
D.aRO(d5,"Family is everything",new B.a4(0,d3,0+w*2,d3+q),q,A.c.j(A.h.D((c8-11.6)/0.5,0,1)),!0,0)}if(c8<0.4)c4=1-c8/0.4
else c4=c8>13.5?(c8-13.5)/0.5:0
if(c4>0){$.T()
d3=B.L()
d3.r=A.v.j(c4).gp(0)
d5.aE(new B.a4(0,0,d1,d2),d3)}},
hv1(d,e,f,g,h,i){return B.a8(d,!1).c9(B.vH(null,!1,!0,!0,new D.hgl(e,h,g,i,f),A.eZ,null,A.pU,new D.hgm(),x.S))},
yC:function yC(d,e){this.a=d
this.b=e},
h7S:function h7S(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
fAY:function fAY(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fNn:function fNn(d){this.a=d},
fNj:function fNj(){},
fNm:function fNm(d,e){this.a=d
this.b=e},
fNk:function fNk(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fNl:function fNl(d,e,f){this.a=d
this.b=e
this.c=f},
fNo:function fNo(d,e){this.a=d
this.b=e},
hgl:function hgl(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
hgm:function hgm(){},
Ys:function Ys(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aIg:function aIg(d,e,f){var _=this
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
_.ab$=f
_.c=_.a=null},
f_a:function f_a(d,e,f){this.a=d
this.b=e
this.c=f},
f_1:function f_1(d,e,f){this.a=d
this.b=e
this.c=f},
f_9:function f_9(d){this.a=d},
eZZ:function eZZ(d,e){this.a=d
this.b=e},
eZY:function eZY(d,e){this.a=d
this.b=e},
f__:function f__(d){this.a=d},
eZX:function eZX(d,e){this.a=d
this.b=e},
f_0:function f_0(d,e){this.a=d
this.b=e},
f_g:function f_g(d,e){this.a=d
this.b=e},
f_f:function f_f(d,e){this.a=d
this.b=e},
f_e:function f_e(d){this.a=d},
f_d:function f_d(d){this.a=d},
f_h:function f_h(d){this.a=d},
f_b:function f_b(d,e){this.a=d
this.b=e},
f_c:function f_c(d){this.a=d},
f_8:function f_8(){},
f_3:function f_3(d){this.a=d},
f_4:function f_4(d){this.a=d},
f_5:function f_5(d){this.a=d},
f_6:function f_6(d){this.a=d},
f_2:function f_2(d){this.a=d},
f_7:function f_7(d){this.a=d},
eZW:function eZW(d){this.a=d},
eZV:function eZV(d){this.a=d},
bzV:function bzV(d,e,f,g,h,i,j){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.a=j},
aQg:function aQg(){},
SK(d,e,f,g,h,i,j,k,l,m){var w,v,u
if(g<1||e.length===0)return 0
w=new D.fN2(j,e,m,k,h,f,i,l)
v=w.$1(g)
u=v.b.c
if(u>l&&u>0)v=w.$1(g*l/u)
v.a5(d,new B.m(f.a-v.b.c*i,f.b))
w=v.b.a.c
return w.gb4(w)},
aRt(d,e,f,g,h,i,j,k,l){var w,v,u,t,s,r,q,p,o=h/2,n=f-o,m=f+o
o=i/2
w=g-o
v=g+o
u=l+j
o=new D.fyq()
t=x.g
s=o.$1(B.a([e.hj(n,l,w).a,e.hj(m,l,w).a,e.hj(m,u,w).a,e.hj(n,u,w).a],t))
$.T()
r=B.L()
r.r=B.ap(k,A.v,0.28).gp(0)
d.af(s,r)
r=e.b
r===$&&B.d()
q=r<0?m:n
s=o.$1(B.a([e.hj(q,l,w).a,e.hj(q,l,v).a,e.hj(q,u,v).a,e.hj(q,u,w).a],t))
r=B.L()
r.r=B.ap(k,A.v,0.45).gp(0)
d.af(s,r)
p=o.$1(B.a([e.hj(n,u,w).a,e.hj(m,u,w).a,e.hj(m,u,v).a,e.hj(n,u,v).a],t))
t=B.L()
o=B.ap(k,A.c,0.25)
o.toString
t.san(new B.a6(A.aw,A.aD,A.w,B.a([o,k],x.O),null,null).az(0,B.aiZ(p.gli().a.getBounds())))
d.af(p,t)},
fzI(d,e,f,a0,a1,a2,a3,a4,a5){var w,v,u,t,s,r,q,p,o,n=null,m=e.hj(f,a5,a0),l=m.a,k=e.hj(f,a5+a2,a0),j=k.a,i=a1*m.b,h=a1*k.b,g=e.c
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
p=new B.aI($.T().r,A.ak,n,n,B.a([],x.v))
p.E(new B.aZ(t,r))
p.E(new B.aq(v,q))
v=i*2
p.E(new B.al3(B.c_(l,v*w,v),3.141592653589793,-3.141592653589793,!1))
p.E(new B.aq(u,r))
p.E(new B.bz())
u=B.L()
u.san(new B.a6(A.a5,A.a9,A.w,a3,M.Tp,n).az(0,new B.a4(s,r,g,q)))
d.af(p,u)
g=h*2
o=B.c_(j,g*w,g)
g=B.L()
v=B.ap(a4,A.c,0.4)
v.toString
g.san(new B.bU(A.n_,0.5,A.w,n,0,B.a([v,a4],x.O),n,n).az(0,o))
d.c2(o,g)},
fGP(d){var w,v,u,t,s=A.h.F(d,1)*7.48,r=[1.24,2.5,1.24,2.5]
for(w=0;w<4;++w){v=r[w]
if(s<=v){v=[C.fof,C.fpM,C.fom,C.fo4][w].a
u=v[0]
t=v[1]
return new B.y(u+v[2]*s,t+v[3]*s)}s-=v}return C.ffe},
iGR(g1,g2,g3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6,d7,d8,d9,e0,e1,e2,e3,e4,e5,e6,e7,e8,e9,f0,f1,f2,f3,f4,f5,f6,f7=null,f8=1e9,f9=g2.a,g0=g2.b
if(f9<=0||g0<=0)return
w=A.h.F(g3,10)
v=new B.a4(0,0,0+f9,0+g0)
u=g1.c
J.bs(u.save())
u.clipRect(B.hS(v),$.lH()[1],!0)
t=$.T()
s=B.L()
s.san(C.ePM.az(0,v))
g1.aE(v,s)
r=g2.gdm()>=120
if(r){q=new B.e6()
q.cW(5)
for(s=g3*f9*0.01,p=g0*0.02,o=0;o<8;++o){n=A.h.F(q.ai()*f9+s,f9)
m=q.ai()
l=q.ai()
k=new B.ar(A.U,A.R,A.X,A.Y,A.W)
k.r=A.aH.j(0.07).gp(0)
k.y=new B.h3(A.H,p)
g1.O(new B.m(n,m*g0*0.5),g0*(0.02+l*0.04),k)}}j=new D.cYh(g2)
j.b=Math.sin(g3*0.32)*0.22
s=0.86+Math.sin(g3*0.21)*0.05
j.c=s
j.d=g0*1.8
j.e=new B.m(f9*0.5,g0*0.5)
i=A.cn.aA(0,A.h.D(A.h.D((w-1.6)/0.5,0,1),0,1))
h=w<2.2?-1:(w-2.2)/3.4
g=h>=0.5828877005347594
f=g?0.75+0.25*Math.abs(Math.sin(g3*9)):0
t=t.r
p=x.v
e=new B.aI(t,A.ak,f7,f7,B.a([],p))
n=x.g
m=x.H
l=B.B(B.a([j.hj(-1.85,-0.09000000000000001,-1.2).a,j.hj(1.85,-0.09000000000000001,-1.2).a,j.hj(1.85,-0.09000000000000001,1.1500000000000001).a,j.hj(-1.85,-0.09000000000000001,1.1500000000000001).a],n),m)
e.E(new B.zF(l,!0))
d=B.L()
d.r=A.v.j(0.55).gp(0)
if(r)d.y=new B.h3(A.H,g0*0.025)
g1.af(e,d)
l=new B.aI(t,A.ak,f7,f7,B.a([],p))
k=B.B(B.a([j.hj(-1.75,-0.07,-1.05).a,j.hj(1.75,-0.07,-1.05).a,j.hj(1.75,0,-1.05).a,j.hj(-1.75,0,-1.05).a],n),m)
l.E(new B.zF(k,!0))
k=B.L()
k.r=C.buf.gp(0)
g1.af(l,k)
a0=new B.aI(t,A.ak,f7,f7,B.a([],p))
t=B.B(B.a([j.hj(-1.75,0,-1.05).a,j.hj(1.75,0,-1.05).a,j.hj(1.75,0,1.05).a,j.hj(-1.75,0,1.05).a],n),m)
a0.E(new B.zF(t,!0))
t=B.L()
t.san(C.cek.az(0,B.aiZ(a0.gli().a.getBounds())))
g1.af(a0,t)
if(r){a1=B.L()
a1.r=A.bw.j(0.08).gp(0)
a1.c=1
for(a2=-1.75;a2<=1.76;a2+=0.25)g1.ah(j.hj(a2,0,-1.05).a,j.hj(a2,0,1.05).a,a1)
for(a3=-1.05;a3<=1.06;a3+=0.25)g1.ah(j.hj(-1.75,0,a3).a,j.hj(1.75,0,a3).a,a1)}for(t=[C.ffY,C.fdA,C.f9E,C.fbg],n=t.length,a4=0;a4<n;++a4){m=t[a4]
a5=j.hj(m.a,0,m.b)
a6=a5.a
a7=a5.b
a8=Math.sin(s)*0.55+0.1
m=a7*0.12
m=B.c_(a6,m*a8,m)
$.T()
l=new B.ar(A.U,A.R,A.X,A.Y,A.W)
l.r=E.Hl.gp(0)
g1.c2(m,l)
l=a7*0.06
l=B.c_(a6,l*a8,l)
m=new B.ar(A.U,A.R,A.X,A.Y,A.W)
m.r=C.ZW.gp(0)
g1.c2(l,m)}t=$.T()
s=B.a([],p)
a9=new B.aI(t.r,A.ak,f7,f7,s)
for(o=0;o<=120;++o){b0=D.fGP(o/120)
a6=j.hj(b0.a,0.004,b0.b).a
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
a9.ac()}}b1=j.hj(0,0,0).b
$.T()
t=B.L()
t.b=A.ad
t.c=b1*0.07
t.e=A.dQ
t.r=C.bt2.gp(0)
g1.af(a9,t)
t=B.L()
t.b=A.ad
t.c=b1*0.045
t.e=A.dQ
t.san(C.avK.az(0,v))
g1.af(a9,t)
if(g){b2=B.L()
b2.b=A.ad
b2.c=b1*0.09
b2.r=A.hm.j(0.25+0.1*Math.sin(g3*6)).gp(0)
if(r)b2.y=new B.h3(A.H,b1*0.04)
g1.af(a9,b2)}for(t=[C.eZU,C.eYX],s=t.length,a4=0;a4<s;++a4){n=t[a4]
b3=n.a
b4=n.b
for(n=b3-0.2,m=b4-0.17,l=b4+0.17,o=0;o<5;++o){b5=n+o*0.1
D.aRt(g1,j,b5,m,0.035,0.08,0.03,A.cF,0)
D.aRt(g1,j,b5,l,0.035,0.08,0.03,A.cF,0)}D.aRt(g1,j,b3,b4,0.55,0.3,0.08,A.cx,0)
b6=j.hj(b3,0.081,b4)
b7=b6.a
a7=b6.b
D.SK(g1,"NGMY",new B.m(b7.a,b7.b-a7*0.05),a7*0.08,A.c.j(0.75),0.5,f7,a7*0.01,f8,A.u)}D.aRt(g1,j,-0.55,0.62,0.34,0.2,0.08,A.aM,0)
b8=j.hj(-0.7,0.1,0.62).a
b9=(1-i)*0.75
c0=j.hj(-0.7+0.32*Math.cos(b9),0.1+0.32*Math.sin(b9),0.62).a
$.T()
t=B.L()
t.c=b1*0.04
t.d=A.bG
t.san(C.avP.az(0,B.ri(b8,c0)))
g1.ah(b8,c0,t)
t=B.L()
t.r=A.aC.gp(0)
g1.O(b8,b1*0.025,t)
if(i>0.95&&w<2.6){t=A.h.D((w-2.1)/0.5,0,1)
s=B.L()
s.r=A.bO.j(0.8).gp(0)
g1.O(c0,b1*0.08*(1-t),s)}D.aRt(g1,j,0.55,0.62,0.46,0.12,0.1,C.byi,0.02)
for(t=[C.f65,C.f9g,C.f0_,C.eXF],s=t.length,a4=0;a4<s;++a4){n=t[a4]
D.aRt(g1,j,0.41000000000000003+n.a*0.09,0.62,0.035,0.125,0.105,n.b,0.02)}D.fzI(g1,j,-1.25,0,0.17,0.62,C.cEm,C.aiT,0)
c1=j.hj(-1.25,0.62,0)
a7=c1.b
D.fzI(g1,j,-1.25,0,0.06,0.06,C.deJ,C.amD,0.62)
D.SK(g1,"9V",j.hj(-1.25,0.3,0).a.aI(0,new B.m(0,a7*0.06)),a7*0.11,A.bu,0.5,f7,0,f8,A.u)
D.SK(g1,"+",c1.a.aI(0,new B.m(a7*0.16,a7*0.18)),a7*0.12,A.ab,0.5,f7,0,f8,A.u)
D.fzI(g1,j,0,-0.62,0.13,0.36,C.duF,A.dV,0)
D.fzI(g1,j,1.25,0,0.12,0.16,C.d9w,A.d0,0)
c2=j.hj(1.25,0.36,0)
b2=c2.a
c3=c2.b*0.22
t=f>0
if(t){$.T()
c4=B.L()
s=c3*4
c4.san(new B.bU(A.z,0.5,A.w,f7,0,B.a([A.bO.j(0.65*f),A.as.j(0.18*f),A.L],x.O),W.Th,f7).az(0,B.bY(b2,s)))
g1.O(b2,s,c4)}c5=B.bY(b2,c3)
s=$.T()
n=B.L()
m=x.O
n.san(new B.bU(A.MI,0.5,A.w,f7,0,t?B.a([A.c,A.bO,A.as],m):B.a([A.c.j(0.5),A.bQ.j(0.35),A.aM.j(0.55)],m),f7,f7).az(0,c5))
g1.c2(c5,n)
c6=B.L()
c6.b=A.ad
c6.c=Math.max(1,c3*0.06)
c6.r=(t?A.c:A.iJ).gp(0)
p=B.a([],p)
c7=new B.aI(s.r,A.ak,f7,f7,p)
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
t=B.c_(b2.a6(0,new B.m(d0*0.35,d0*0.4)),c3*0.25,c3*0.45)
$.T()
s=B.L()
s.r=A.c.j(0.6).gp(0)
g1.c2(t,s)
t=h>=0
if(t){for(o=14;o>=0;--o){d5=h-o*0.008
if(d5<0)continue
d6=D.fGP(d5)
d7=j.hj(d6.a,0.06,d6.b)
d8=1-o/15
$.T()
s=new B.ar(A.U,A.R,A.X,A.Y,A.W)
s.r=A.hm.j(0.35*d8).gp(0)
g1.O(d7.a,d7.b*0.05*(0.4+0.6*d8),s)}d9=D.fGP(h)
e0=j.hj(d9.a,0.06,d9.b)
a6=e0.a
e1=e0.b*0.09
s=e1*3
$.T()
p=B.L()
p.san(new B.bU(A.z,0.5,A.w,f7,0,B.a([A.fC.j(0.7),A.aH.j(0.2),A.L],m),M.Tp,f7).az(0,B.bY(a6,s)))
g1.O(a6,s,p)
p=B.L()
p.san(new B.bU(A.z,0.5,A.w,f7,0,C.dqM,f7,f7).az(0,B.bY(a6,e1)))
g1.O(a6,e1,p)
q=new B.e6()
q.cW(A.h.bd(g3*20))
for(s=a6.a,p=a6.b,n=e1*0.12,o=0;o<6;++o){d8=q.ai()*3.141592653589793*2
e2=e1*(1.2+q.ai()*1.6)
l=Math.cos(d8)
k=Math.sin(d8)
c8=Math.cos(d8)
c9=Math.sin(d8)
d0=new B.ar(A.U,A.R,A.X,A.Y,A.W)
d0.c=Math.max(1,n)
d0.d=A.bG
d0.r=A.c.j(0.8).gp(0)
g1.ah(new B.m(s+l*e1,p+k*e1),new B.m(s+c8*e2,p+c9*e2),d0)}}if(g2.gdm()<90){u.restore()
return}e3=Math.min(g0,f9*0.6)
if(w<1.9){d8=A.h.D((w-0.2)/0.5,0,1)*(1-A.h.D((w-1.5)/0.4,0,1))
s=f9/2
D.SK(g1,"NGMY ELECTRONICS LAB PRESENTS",new B.m(s,g0*0.08),e3*0.035,A.hm.j(d8),0.5,f7,e3*0.006,f8,A.u)
J.bs(u.save())
u.translate(0,(1-A.cn.aA(0,A.h.D(A.h.D((w-0.4)/0.6,0,1),0,1)))*e3*0.05)
D.SK(g1,"Spark Adventure",new B.m(s,g0*0.13),e3*0.1,A.c.j(d8),0.5,B.a([A.c,A.hm],m),0,f9*0.9,A.u)
u.restore()}if(w>=1.6&&w<2.6){e4="The switch closes"
e5=1}else{e5=2
if(t&&!g){e6=D.fGP(h)
e7=e6.a
if(e6.b>0.61&&e7>0.1)e4="The resistor slows the current"
else if(e7>1.24){e4="Almost at the bulb"
e5=3}else e4="Current flows from the battery"}else if(g&&w<7.6){e4="The bulb lights up!"
e5=4}else{e4=f7
e5=0}}if(e4!=null){b7=D.a4r(e4,B.l(f7,f7,A.c,f7,f7,f7,f7,f7,"Roboto",f7,f7,A.h.bO(e3*0.045*2)/2,f7,f7,A.C,f7,f7,!0,f7,f7,f7,f7,f7,f7,f7,f7),A.aY,f7,1,1/0)
e8=e3*0.025
e9=e3*0.06
t=f9*0.05
s=g0*0.66
p=b7.b
n=p.c
p=p.a.c
l=e3*0.04
f0=B.bx(new B.a4(t,s,t+(e9+e8*3+n),s+(p.gb4(p)+e8*1.4)),new B.aQ(l,l))
l=B.L()
l.r=A.v.j(0.6).gp(0)
g1.aq(f0,l)
l=B.L()
l.b=A.ad
l.c=1
l.r=A.aH.j(0.6).gp(0)
g1.aq(f0,l)
l=f0.a
p=e9/2
f1=new B.m(l+e8+p,f0.gbE().b)
s=B.L()
s.r=A.aH.gp(0)
g1.O(f1,p,s)
D.SK(g1,""+e5,f1.aI(0,new B.m(0,e9*0.38)),e9*0.6,A.bF,0.5,f7,0,f8,A.u)
s=f0.gbE()
p=b7.b.a.c
b7.a5(g1,new B.m(l+e8*2+e9,s.b-p.gb4(p)/2))}if(w>=7.6){a7=A.h.D((w-7.6)/0.4,0,1)
t=B.L()
t.r=A.v.j(0.55*a7).gp(0)
g1.aE(v,t)
f2=A.eg.aA(0,A.h.D((w-7.7)/0.5,0,1))
f3=g0*0.3
J.bs(u.save())
t=f9/2
u.translate(t,f3)
g1.bW(0,0.75+0.25*f2)
u.translate(-f9/2,-f3)
s=e3*0.1
D.SK(g1,"Build it yourself",new B.m(t,f3-e3*0.06),s,A.c.j(a7),0.5,B.a([A.c,A.hm],m),0,f9*0.9,A.u)
u.restore()
m=e3*0.05
D.SK(g1,"NGMY Electronics Lab",new B.m(t,f3+e3*0.08),m,A.ab.j(0.85*a7),0.5,f7,0,f8,A.C)
f4=A.eg.aA(0,A.h.D((w-8.1)/0.4,0,1))
if(f4>0){f5=B.bx(B.c_(new B.m(t,f3+e3*0.24),s,Math.max(f9*0.3,e3*0.55)*f4),new B.aQ(m,m))
s=B.L()
p=f5.a
n=f5.c
s.san(C.cdH.az(0,new B.a4(p,f5.b,n,f5.d)))
g1.aq(f5,s)
if(f4>0.7)D.SK(g1,"Open the Electronics Lab",new B.m(t,f5.gbE().b-e3*0.03),e3*0.045,A.c,0.5,f7,0,(n-p)*0.85,A.u)}}if(w<0.3)f6=1-w/0.3
else f6=w>9.7?(w-9.7)/0.3:0
if(f6>0){t=B.L()
t.r=A.v.j(A.h.D(f6,0,1)).gp(0)
g1.aE(v,t)}u.restore()},
fN2:function fN2(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
cYh:function cYh(d){var _=this
_.a=d
_.e=_.d=_.c=_.b=$},
fyq:function fyq(){},
hhm(d){var w
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
iJm(d){var w
switch(D.hhm(d)){case"lg":w=A.hK
break
case"sony":w=A.d0
break
case"apple":w=A.bP
break
case"bo":w=C.wS
break
default:w=A.aH
break}return w},
avb:function avb(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bpI:function bpI(){this.d=0
this.c=this.a=null},
eZT:function eZT(d,e){this.a=d
this.b=e},
eZU:function eZU(d,e){this.a=d
this.b=e},
eZQ:function eZQ(){},
eZP:function eZP(d){this.a=d},
eZR:function eZR(d){this.a=d},
eZS:function eZS(d){this.a=d},
eZN:function eZN(d){this.a=d},
eZO:function eZO(d,e){this.a=d
this.b=e},
b6r:function b6r(d,e,f){this.c=d
this.d=e
this.a=f},
be5:function be5(d){this.a=d},
imn(){var w,v,u,t
try{v=$.er().gik().b
w=new B.b9(v,B.a3(v).k("b9<2>"))
if(w.a.a===0)v=2
else{J.eK(w)
v=$.lr()
u=v.d
v=u==null?v.ghv():u}return v}catch(t){return 2}},
hR6(d,e,f,g,h){var w,v,u,t,s,r,q,p,o,n,m,l,k=f.a
if(k<=0||f.b<=0)return
if($.bI9){w=d.c
J.bs(w.save())
w.clipRect(B.hS(new B.a4(0,0,0+k,0+f.b)),$.lH()[1],!0)
h.$1(d)
w.restore()
return}v=A.h.bd(g*15)
u=$.SG.X(0,e)
w=u==null
if(w||u.a!==v){t=f.b
s=Math.max(k,t)
r=A.h.D(Math.min(4*D.imn(),1600/s),1,64)
$.T()
q=new B.p1(new B.oB())
p=B.v8(q,null)
p.bW(0,r)
h.$1(p)
o=q.n9()
n=o.a90(Math.max(1,A.h.S(k*r)),Math.max(1,A.h.S(t*r)))
o.t()
if(!w)u.b.t()
u=new D.bwA(v,n)}$.SG.n(0,e,u)
for(w=new B.du($.SG,$.SG.r,$.SG.e),m=0;w.B();){t=w.d.b
m+=t.c*t.d}w=B.a3($.SG).k("cv<1>")
for(;;){t=$.SG.a
if(t>1)t=t>24||m>6e6
else t=!1
if(!t)break
l=new B.cv($.SG,w).gae(0)
if(!l.B())B.bi(B.fc())
t=$.SG.X(0,l.gP(0)).b
m-=t.c*t.d
t.t()}n=u.b
d.ol(n,new B.a4(0,0,n.c,n.d),new B.a4(0,0,0+k,0+f.b),$.hYl())},
bwA:function bwA(d,e){this.a=d
this.b=e},
i3D(d,e,f){var w=d.BYTES_PER_ELEMENT,v=(B.kA(e,f,A.n.ec(d.byteLength,w),null,null)-e)*w
if(A.n.F(v,4)!==0)throw B.Y(B.dM(y.a,null))
return J.a5c(A.ij.gaS(d),d.byteOffset+e*w,A.n.ao(v,4))},
i2y(d,e,f){var w=d.BYTES_PER_ELEMENT,v=(B.kA(e,f,A.n.ec(d.byteLength,w),null,null)-e)*w
if(A.n.F(v,4)!==0)throw B.Y(B.dM(y.a,null))
return J.aV8(A.ph.gaS(d),d.byteOffset+e*w,A.n.ao(v,4))},
hQp(){var w,v=null,u=$.T().r,t=x.v,s=new B.aI(u,A.ak,v,v,B.a([],t))
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
s.E(new B.bz())
w=new B.aI(u,A.ak,v,v,B.a([],t))
w.E(new B.aZ(0.49,0.25))
w.E(new B.i6(0.48,0.14,0.56,0.03,0.7,0))
w.E(new B.i6(0.71,0.12,0.62,0.23,0.49,0.25))
w.E(new B.bz())
t=new B.aI(u,A.ak,v,v,B.a([],t))
t.LY(0,s,A.J)
t.LY(0,w,A.J)
return t},
hSK(d){return C.dst[A.n.D(d,0,7)]},
ajY(d){return d.j(A.h.bO(d.a*16)/16)},
a4r(d,e,f,g,h,i){var w,v,u=null,t=isFinite(i),s=new B.buf([d,e,h,g,f,t?A.h.bO(i*2)/2:-1]),r=$.ai_.X(0,s)
if(r!=null){$.ai_.n(0,s,r)
return r}w=B.h0(g,A.cJ,u,h,u,B.cW(u,u,u,u,u,u,u,u,u,e,d),f,A.ca,u,A.e4,A.cb)
w.nH(t?A.h.bO(i*2)/2:1/0)
$.ai_.n(0,s,w)
for(t=B.a3($.ai_).k("cv<1>");$.ai_.a>800;){v=new B.cv($.ai_,t).gae(0)
if(!v.B())B.bi(B.fc())
$.ai_.X(0,v.gP(0)).t()}return w}},C,N,F,V,W
J=c[1]
B=c[0]
A=c[2]
O=c[292]
L=c[125]
G=c[46]
E=c[169]
M=c[264]
P=c[270]
I=c[146]
Q=c[108]
R=c[229]
S=c[136]
H=c[45]
T=c[166]
U=c[153]
K=c[179]
D=a.updateHolder(c[33],D)
C=c[132]
N=c[49]
F=c[130]
V=c[107]
W=c[265]
D.bU_.prototype={
bEs(d){var w=this,v=w.a
if(v!=null){v=B.bco(w,v,"Vertices",new D.bU0(),x.J)
w.b!==$&&B.aT()
w.b=v}else{w.b!==$&&B.aT()
w.b=null}},
ga6E(){if(this.c)throw B.Y(B.bd("Attempted to use a disposed Vertices."))
return this.a},
t(){if(this.c)return
var w=this.b
w===$&&B.d()
if(w!=null)w.t()
this.c=!0}}
D.cI8.prototype={
a9(){return"VertexMode."+this.b}}
D.aqx.prototype={
a9(){return"NgmyAdHero."+this.b}}
D.i7.prototype={}
D.t5.prototype={}
D.b17.prototype={}
D.Jn.prototype={
C(d){var w,v,u,t,s=null,r=B.aG(d,A.c_,x.w).w,q=B.n(24),p=this.c,o=p.e,n=B.K(o.j(0.45),A.r,1),m=B.a([new B.ac(0,A.H,o.j(0.25),A.J,30)],x.V),l=p.d,k=B.a([l,o],x.O),j=A.c.j(0.22),i=B.n(14),h=x.p
k=B.a([B.q(s,B.A(B.a([B.q(s,B.V(p.c,A.c,s,s,s,28),A.f,s,s,new B.p(j,s,s,i,s,s,A.m),s,48,s,s,s,s,s,48),A.bc,B.E(B.w(B.a([B.c(p.b,s,s,s,s,s,s,A.dw,s,s,s),A.bs,B.c(p.f+" "+p.r,s,s,s,s,s,s,B.l(s,s,A.c.j(0.85),s,s,s,s,s,s,s,s,12.5,s,s,A.O,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],h),A.B,s,A.e,A.i,0,A.p),1)],h),A.l,s,A.e,A.i,0,s,s),A.f,s,s,new B.p(s,s,s,s,s,new B.a6(A.aw,A.aD,A.w,k,s,s),A.m),s,s,s,s,A.Pz,s,s,s),new B.C(K.aoU,B.c(p.w,s,s,s,s,s,s,C.fVZ,s,s,s),s)],h)
for(j=p.x,w=0;w<3;++w){v=j[w]
i=B.ap(l,A.v,0.4)
i.toString
k.push(new B.C(C.bJi,new B.c1(A.aK,A.e,A.i,A.l,s,A.p,s,0,B.a([B.q(s,B.V(A.h1,i,s,s,s,14),A.f,s,s,new B.p(o,s,s,s,s,s,A.a6),s,20,s,s,s,s,s,20),A.ar,new B.bu(1,A.b8,B.c(v,s,s,s,s,s,s,A.Xd,s,s,s),s)],h),s),s))}j=o.j(0.12)
i=B.n(14)
u=B.K(o.j(0.4),A.r,1)
t=B.ap(o,A.c,0.2)
t.toString
k.push(B.q(s,B.A(B.a([B.V(A.mE,t,s,s,s,20),A.aa,B.E(B.w(B.a([C.hhB,A.bs,B.c(p.cx,s,s,s,s,s,s,A.kX,s,s,s)],h),A.B,s,A.e,A.i,0,A.p),1)],h),A.l,s,A.e,A.i,0,s,s),A.f,s,s,new B.p(j,s,u,i,s,s,A.m),s,s,C.hMw,C.bIW,A.bg,s,s,s))
i=B.E(B.en(C.c1K,C.hNg,C.hl1,this.d,B.dj(s,s,s,s,s,s,s,s,s,A.c,s,s,A.kN,s,new B.ba(B.n(14),A.a1),K.agb,s,s,s,s)),1)
l=B.ap(l,A.v,0.5)
l.toString
k.push(new B.C(A.xd,B.A(B.a([i,A.ar,B.E(B.bH(A.adL,C.hLO,new D.c6N(d),B.bp(o,s,s,s,l,s,A.kN,s,new B.ba(B.n(14),A.a1),s,s,s)),1)],h),A.l,s,A.e,A.i,0,s,s),s))
return B.bn(!0,B.at(new B.cQ(new B.aY(0,520,0,r.a.b*0.9),B.q(s,B.cc(B.w(k,A.al,s,A.e,A.P,0,A.p),A.t,s,A.y,s,s,s,s,s,A.ah),A.ap,s,s,new B.p(A.a_f,s,n,q,m,s,A.m),s,s,C.hMl,A.tH,s,s,s,s),s),1,s,s),!0,!1,A.ag,!0,!1)}}
D.wO.prototype={}
D.yC.prototype={}
D.Ys.prototype={
R(){return new D.aIg(K.Bc,null,null)}}
D.aIg.prototype={
gRh(){var w,v=this,u=v.d
if(u===$){w=B.br(null,A.oX,null,1,null,v)
w.ct(0)
v.d!==$&&B.bF()
v.d=w
u=w}return u},
gyE(){var w=this.e
return w===$?this.e=this.a.e:w},
gaTn(){var w=this.as
if(w===$)w=this.as=this.a.f?3:0
return w},
gBM(){var w=this.gRh().y
w=w==null?null:A.n.ao(w.a,1000)
return(w==null?0:w)/1000},
gayN(){var w=this.f
return w>=0&&C.iz[w].e===-1},
ah_(){var w,v,u=this
if(u.r)return null
w=u.f
if(w>=0){v=C.iz[w].e
if(v===-2)return null
if(v===-1)return A.n.F(u.ay+A.h.bd(Math.max(0,u.gBM()-u.ch)/10),14)
return v}v=C.aLy.h(0,A.n.F(u.gyE(),10))
return v==null?null:D.hSK(v)},
cfz(d,e){if(e.a<=0||e.b<=0)return
this.l(new D.f_a(this,d,e))
H.dI(660,"",90,0,0.25,"tri")},
cfv(d){this.l(new D.f_1(this,d,14))
H.dI(900,"",40,0,0.25,"noise")},
cfx(){this.l(new D.f_9(this))
this.XV()},
ah1(){return this.c7s()},
c7s(){var w=0,v=B.j(x.o),u,t=this,s,r,q
var $async$ah1=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r={}
q=t.ah_()
if(q==null){w=1
break}s=t.Q
if(s!=null)s.a2(0)
t.l(t.gbdD())
r.a=!1
s=t.c
s.toString
w=3
return B.b(B.bV(A.L,null,new D.eZZ(r,q),s,!0,!0,!0,null,!1,!1,x.o),$async$ah1)
case 3:if(t.c==null){w=1
break}if(r.a)t.cfx()
else t.XV()
case 1:return B.h(u,v)}})
return B.i($async$ah1,v)},
XV(){var w=this,v=w.Q
if(v!=null)v.a2(0)
w.Q=B.cC(B.dw(0,0,0,0,0,w.gaTn()>0&&w.gBM()<3.2?13:10),w.gcbS())},
cbT(){var w=this
if(w.c==null)return
if(w.f<0&&!w.r){w.l(new D.f__(w))
H.dI(900,"",40,0,0.2,"noise")}w.XV()},
Z(){var w=this
w.a4()
w.w=B.cC(w.a.r,w.gb3s())
w.XV()
H.dI(520,"",80,0,0.25,"tri")},
cfs(){var w=this.c
if(w!=null&&B.a8(w,!1).qg()){w=this.c
w.toString
B.a8(w,!1).N(this.gyE())}},
Cg(){var w=this.w
if(w!=null)w.a2(0)
this.w=null},
ah0(d){this.l(new D.eZX(this,d))
H.dI(900,"",40,0,0.3,"noise")},
b3u(d){this.l(new D.f_0(this,d))
H.dI(700,"",60,0,0.3,"tri")},
t(){var w,v=this
if(v.y){G.Dh(E.Ly)
G.bHS()}w=v.w
if(w!=null)w.a2(0)
w=v.Q
if(w!=null)w.a2(0)
v.gRh().t()
v.bCW()},
C(d){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.y,i=!j||!l.z
j=j?B.aG(d,A.dL,x.w).w.r.b+26:10
w=l.cfy(A.cC,"Back to the board",l.gb3s())
v=l.y
u=v?S.Iz:A.xt
v=v?"Leave full screen":"Full screen"
v=l.b3v(u,v,l.gcfA(),C.hN7)
u=B.n(20)
t=l.f
s=l.a
r=x.p
q=new B.C(new B.R(10,j,10,0),B.A(B.a([w,A.aa,v,A.aa,B.E(new B.bK(A.a9,k,k,B.q(k,B.c(t>=0?s.c+" \xb7 "+C.iz[t].a:s.c+" \xb7 CH "+(l.gyE()+1),k,1,A.a2,k,k,k,U.y9,k,k,k),A.f,k,k,new B.p(A.ba,k,k,u,k,k,A.m),k,k,k,k,A.lE,k,k,k),k),1)],r),A.l,k,A.e,A.i,0,k,k),k)
p=new B.ax(l.gb3t(),6,A.r,-1)
if(l.y)j=A.agU
else{j=B.n(10)
j=new B.p(k,k,new B.bE(p,p,new B.ax(l.gb3t(),16,A.r,-1),p),j,B.a([new B.ac(0,A.H,D.iJm(l.a.d).j(0.25),A.J,40)],x.V),k,A.m)}j=B.a([B.q(k,B.bv(B.n(l.y?0:4),B.cg(new D.f_g(l,i)),A.ap),A.f,k,k,j,k,k,C.hN1,k,k,k,k,k)],r)
if(!l.y)j.push(B.ao(0,new B.dn(!0,B.at(new D.b6r(l.a.d,9.92,k),k,k,k),k),16,k,0,0,k,k))
o=B.at(new B.fK(1.7777777777777777,new B.am(A.a0,k,A.b5,A.t,j,k),k),k,k,k)
j=l.y
w=!j
v=j?l.gb3w():k
if(j){j=i?1:0
r=new B.am(A.a0,k,A.b5,A.t,B.a([o,B.ao(k,B.xQ(new B.dn(!i,q,k),A.b_,A.id,j),k,k,0,0,0,k)],r),k)
j=r}else{j=l.cfw()
u=B.E(new B.C(A.fD,o,k),1)
t=A.v.j(0.65)
s=B.n(18)
n=l.f
n=B.c(n>=0?C.iz[n].a:C.TO[l.gyE()].a,k,k,k,k,k,k,A.hj,A.K,k,k)
m=l.f
j=B.w(B.a([q,A.aj,j,A.N,u,B.q(k,B.w(B.a([n,B.c(m>=0?C.iz[m].c:C.TO[l.gyE()].b,k,k,k,k,k,k,A.adf,A.K,k,k)],r),A.l,k,A.e,A.P,0,A.p),A.f,k,k,new B.p(t,k,k,s,k,k,A.m),k,k,C.hMI,A.HM,A.bS,k,k,k)],r),A.l,k,A.e,A.i,0,A.p)}return B.c6(k,A.v,B.bn(w,B.aA(A.bZ,j,A.y,!1,k,v,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,new D.f_h(l),k,k,k,k,k,k,!1,A.a4),w,!1,A.ag,w,w),k,!1,!1,k,k)},
cfB(){var w=!this.y
this.l(new D.f_b(this,w))
if(w){G.Dh(E.acH)
G.hth(!0)}else{G.Dh(E.Ly)
G.bHS()}},
cfC(){var w,v=this
B.jH()
v.l(new D.f_c(v))
w=v.c.L(x.q).f
w.N2()
if(v.z)w.T(C.aXa)},
cfw(){var w=this,v=null,u=new D.f_8(),t=A.v.j(0.72),s=B.n(22),r=B.K(A.aH.j(0.5),A.r,1)
return B.q(v,B.A(B.a([u.$3(A.xy,"CH \u2212",new D.f_3(w)),u.$3(A.ig,"CH +",new D.f_4(w)),u.$5$color$on(A.IE,"TV",new D.f_5(w),A.aH,w.f<0),u.$5$color$on(A.zY,"APPS",new D.f_6(w),A.bj,w.r),u.$5$color$on(A.A0,"ADS",new D.f_7(w),A.c5,w.f===0)],x.p),A.l,v,A.e,A.P,0,v,v),A.f,v,v,new B.p(t,v,r,s,v,v,A.m),v,v,v,v,A.I2,v,v,v)},
bIC(){return new D.avb(this.a.d,this.gcfu(),new D.eZW(this),null)},
gb3t(){switch(D.hhm(this.a.d)){case"apple":var w=A.d0
break
case"bo":w=C.Cp
break
case"sony":w=C.bjl
break
case"lg":w=A.ez
break
default:w=A.cx
break}return w},
b3v(d,e,f,g){var w=null,v=B.ns(w,A.ba,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w)
return B.aJ(w,w,w,w,B.V(d,A.c,w,w,w,w),w,w,g,f,w,w,w,v,e,w)},
cfy(d,e,f){return this.b3v(d,e,f,null)}}
D.bzV.prototype={
a5(d,e){var w=this
return D.h7R(d,e,w.b,w.d,w.e,w.c,w.r,w.f)},
aD(d){return!0}}
D.aQg.prototype={
t(){var w=this,v=w.ab$
if(v!=null)v.a8(0,w.gbB())
w.ab$=null
w.a3()},
b0(){this.b8()
this.b5()
this.bC()}}
D.cYh.prototype={
hj(d,e,f){var w,v,u,t,s,r,q=this,p=q.b
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
return new B.y(new B.m(p.a+(d*w-f*v)*r,p.b-(e*t+u*s)*r+q.a.b*0.03),r)},
ga0(d){return this.a}}
D.avb.prototype={
R(){return new D.bpI()},
a8d(d,e){return this.d.$1(e)}}
D.bpI.prototype={
b3x(d){this.l(new D.eZT(this,d))
this.a.a8d(0,d)},
C(d){var w,v=this
switch(D.hhm(v.a.c)){case"lg":w=v.c7K()
break
case"sony":w=v.cFW()
break
case"apple":w=v.cfD()
break
case"bo":w=v.bJA()
break
default:w=v.cA0()
break}return w},
gah2(){var w=new B.W(Date.now(),0,!1)
return A.a.aY(A.n.v(B.cX(w)),2,"0")+":"+A.a.aY(A.n.v(B.fx(w)),2,"0")},
aAY(d,e,f,g,h,i,j){var w,v,u=null,t=C.iz[d],s=this.d===d,r=t.d,q=B.ap(r,A.v,0.55)
q.toString
q=B.a([r,q],x.O)
r=B.n(h)
if(s)w=i
else w=A.L
w=B.K(w,A.r,s?2.5:0)
v=B.a([B.c(t.b,u,u,u,u,u,u,B.l(u,u,u,u,u,u,u,u,u,u,u,e,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],x.p)
if(g)v.push(new B.C(A.tE,B.c(t.a,u,1,A.a2,u,u,u,A.Xn,u,u,u),u))
return B.aA(u,B.q(u,B.w(v,A.l,u,A.bb,A.i,0,A.p),A.f,u,u,new B.p(u,u,w,r,u,new B.a6(A.aw,A.aD,A.w,q,u,u),A.m),u,f,u,u,u,u,u,j),A.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new D.eZU(this,d),u,u,u,u,u,u,!1,A.a4)},
b3y(d,e,f,g,h,i){return this.aAY(d,e,f,!1,g,h,i)},
cA0(){var w,v,u,t,s,r,q=this,p=null,o=q.a.e,n=x.p,m=B.A(B.a([C.h7b,A.aa,C.fZX,A.aX,C.c5t,A.aa,C.c1_,A.aa,B.c(q.gah2(),p,p,p,p,p,p,C.aZs,p,p,p)],n),A.l,p,A.e,A.i,0,p,p),l=C.iz[q.d],k=B.c(l.a,p,p,p,p,p,p,A.kX,p,p,p)
l=B.c(l.c,p,1,A.a2,p,p,p,C.fR_,p,p,p)
w=A.c.j(0.08)
v=B.a([],n)
for(u=0;u<2;++u){t=new B.aQ(8,8)
v.push(B.q(p,B.V(C.cAG[u],A.ab,p,p,p,17),A.f,p,p,new B.p(A.by,p,p,new B.bc(t,t,t,t),p,p,A.m),p,34,p,A.Ph,p,p,p,34))}t=B.a([],n)
for(s=0;s<8;++s){r=q.d===s?1.12:1
t.push(new B.C(A.Ph,new B.zG(q.aAY(s,14,44,!0,8,A.aH,52),r,A.b_,A.hb,p,p),p))}v.push(B.E(B.cc(B.A(t,A.l,p,A.e,A.i,0,p,p),A.t,p,A.y,p,p,p,p,p,A.aK),1))
return B.aA(p,B.q(p,B.w(B.a([m,A.aX,new B.bK(A.a5,p,p,k,p),new B.bK(A.a5,p,p,l,p),A.aj,B.q(p,B.A(v,A.l,p,A.e,A.i,0,p,p),A.f,p,p,new B.p(w,p,p,A.Za,p,p,A.m),p,p,p,p,Q.PH,p,p,p)],n),A.l,p,A.e,A.i,0,A.p),A.f,p,p,C.baY,p,p,p,p,E.anP,p,p,p),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,o,p,p,p,p,p,p,!1,A.a4)},
c7K(){var w=null,v=this.a.e,u=x.p
return B.aA(w,B.q(w,B.w(B.a([B.A(B.a([B.q(w,C.hdp,A.f,w,w,new B.p(A.hK,w,w,B.n(10),w,w,A.m),w,w,w,w,A.nm,w,w,w),A.b7,C.h63,A.aX,B.c(this.gah2(),w,w,w,w,w,w,A.FF,w,w,w)],u),A.l,w,A.e,A.i,0,w,w),A.aX,new B.a5(w,62,B.hN(A.t,w,new D.eZP(this),8,w,w,A.aK,new D.eZQ(),!1),w)],u),A.B,w,A.e,A.i,0,A.p),A.f,w,w,C.bb8,w,w,w,w,O.Pn,w,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,v,w,w,w,w,w,w,!1,A.a4)},
cFW(){var w,v,u,t,s=this,r=null,q=C.iz[s.d],p=s.a.e,o=x.p,n=B.a([B.q(r,C.ftl,A.f,r,r,new B.p(A.dA,r,r,B.n(12),r,r,A.m),r,r,r,r,A.zG,r,r,r),A.aa],o)
for(w=0;w<3;++w){v=C.dyl[w]
u=v==="Apps"?A.c:A.aF
n.push(new B.C(A.iv,B.c(v,r,r,r,r,r,r,new B.G(!0,u,r,r,r,r,9.5,A.O,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r),r,r,r),r))}n.push(A.aX)
n.push(B.c(s.gah2(),r,r,r,r,r,r,C.fQl,r,r,r))
n=B.A(n,A.l,r,A.e,A.i,0,r,r)
u=q.d
t=B.ap(u,A.v,0.7)
t.toString
t=B.a([u,t],x.O)
u=B.n(10)
return B.aA(r,B.q(r,B.w(B.a([n,A.fR,B.E(B.A(B.a([B.E(B.q(r,B.w(B.a([B.c(q.b,r,r,r,r,r,r,A.qz,r,r,r),B.c(q.a,r,r,r,r,r,r,A.ow,r,r,r),B.c(q.c,r,2,A.a2,r,r,r,C.fXc,r,r,r),A.cR,B.aA(r,B.q(r,C.h2N,A.f,r,r,new B.p(A.c,r,r,B.n(10),r,r,A.m),r,r,r,r,A.zG,r,r,r),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new D.eZR(s),r,r,r,r,r,r,!1,A.a4)],o),A.B,r,A.mM,A.i,0,A.p),A.f,r,r,new B.p(r,r,r,u,r,new B.a6(A.a5,A.a9,A.w,t,r,r),A.m),r,r,r,r,A.ct,r,r,r),5),A.aa,B.E(B.iA(!0,r,r,A.y,C.fAu,new D.eZS(s),8,A.ag,r,A.ah,!1),6)],o),A.l,r,A.e,A.i,0,r,r),1)],o),A.B,r,A.e,A.i,0,A.p),A.f,C.bwy,r,r,r,r,r,r,A.h0,r,r,r),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,p,r,r,r,r,r,r,!1,A.a4)},
cfD(){var w,v,u,t,s=this,r=null,q=s.a.e,p=x.p,o=B.A(B.a([C.c64,A.pr,C.hjI,A.aX,B.c(s.gah2(),r,r,r,r,r,r,A.FI,r,r,r)],p),A.l,r,A.e,A.i,0,r,r),n=B.a([],p)
for(w=0;w<8;++w){v=s.d===w
u=v?6:0
t=v?C.dEG:A.TY
v=v?1.18:1
n.push(new B.C(A.fd,B.cY(r,new B.zG(s.b3y(w,20,44,12,A.c,44),v,A.b_,A.eK,r,r),r,r,A.b_,new B.p(r,r,r,r,t,r,A.m),A.eK,r,r,r,new B.R(0,0,0,u),r,r,r,r),r))}return B.aA(r,B.q(r,B.w(B.a([o,A.aX,new B.a5(r,68,B.cc(B.A(n,A.dr,r,A.e,A.i,0,r,r),A.t,r,A.y,r,r,r,r,r,A.aK),r),A.at,B.c(C.iz[s.d].a,r,r,r,r,r,r,A.pw,r,r,r)],p),A.l,r,A.e,A.i,0,A.p),A.f,r,r,C.bb_,r,r,r,r,C.anQ,r,r,r),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,!1,A.a4)},
bJA(){var w,v,u,t,s,r,q=this,p=null,o=q.a.e,n=C.iz[q.d],m=x.p
n=B.E(B.w(B.a([C.h2k,A.aX,B.c(n.b,p,p,p,p,p,p,A.mV,p,p,p),A.at,B.c(n.a,p,p,p,p,p,p,C.fI2,p,p,p),A.bs,B.c(n.c,p,p,p,p,p,p,C.fXw,p,p,p),A.aj,B.aA(p,B.q(p,C.hlT,A.f,p,p,C.bbv,p,p,p,p,C.bFk,p,p,p),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new D.eZN(q),p,p,p,p,p,p,!1,A.a4),A.aX],m),A.B,p,A.e,A.i,0,A.p),4)
w=B.q(p,p,A.f,C.bub,p,p,p,p,p,A.eU,p,p,p,0.6)
v=B.a([],m)
for(u=0;u<8;++u){t=C.iz[u]
s=q.d===u
r=s?C.wS:C.aiq
s=s?12:10.5
v.push(B.aA(p,new B.C(A.vi,B.c(t.a,p,p,p,p,p,p,new B.G(!0,r,p,"serif",p,p,s,A.kj,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p),p,p,p),p),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new D.eZO(q,u),p,p,p,p,p,p,!1,A.a4))}return B.aA(p,B.q(p,B.A(B.a([n,w,B.E(B.co(v,p,p,p,p,p,A.ah,!1),3)],m),A.l,p,A.e,A.i,0,p,p),A.f,C.bAu,p,p,p,p,p,p,A.HV,p,p,p),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,o,p,p,p,p,p,p,!1,A.a4)}}
D.b6r.prototype={
C(d){var w,v,u=null,t=D.hhm(this.c)
if(t==="apple"){w=this.d
return new B.a5(w/1.1,w,B.b4(u,u,u,new D.be5(u),A.aA),C.hLX)}switch(t){case"lg":w=C.aUi
break
case"sony":w=C.aUa
break
case"bo":w=C.aUc
break
default:w=C.f4D
break}v=this.d
return B.c(w.a,C.hLJ,u,u,u,u,u,B.l(u,u,w.b,u,u,u,u,u,u,u,u,v*0.82,u,u,A.C,u,1,!0,u,v*0.08,u,u,u,u,u,u),u,u,u)}}
D.be5.prototype={
a5(d,e){var w,v
d.nT(0,e.a,e.b/1.1)
w=D.hQp()
$.T()
v=B.L()
v.r=A.cU.gp(0)
d.af(w,v)},
aD(d){return!1}}
D.bwA.prototype={}
var z=a.updateTypes(["~()","Ys(Z,bA<H>,bA<H>)","az<~>()","~(F)","Jn(Z)"])
D.bU0.prototype={
$1(d){d.a.delete()
return null},
$S:1683}
D.fN3.prototype={
$1(d){var w,v,u,t=this,s=t.a
if(s==null)s=null
else{w=t.b
v=t.d
u=w.a-t.c*A.h.D(v,0,4000)
w=w.b
w=new B.a6(A.a5,A.a9,A.w,s,null,null).az(0,new B.a4(u,w,u+A.h.D(v,1,4000),w+d))
s=w}return s},
$S:1684}
D.fGN.prototype={
$1(d){return","},
$S:58}
D.fBL.prototype={
$2(d,e){var w,v=this,u=v.a,t=u.c
J.bs(t.save())
w=v.b
t.translate(w.a,w.b)
u.aA(0,D.hqP(v.c*3,v.d,-0.12,d).a)
e.$0()
t.restore()},
$S:1685}
D.fBM.prototype={
$0(){var w=this.a
w.nT(0,-1,1)
D.fBK(w,this.b,this.c,!0)},
$S:0}
D.fBN.prototype={
$0(){return this.a.af(this.b,this.c)},
$S:0}
D.fBO.prototype={
$0(){var w,v,u,t,s=this,r=s.a,q=s.c
D.fBK(r,s.b,q,!1)
w=s.d
if(w>0&&w<1){r.mI(0,s.e)
v=-q
w=v*3+w*q*6-q*0.5
v*=2
u=w+q
$.T()
t=B.L()
t.san(new B.a6(A.a5,A.a9,A.w,B.a([A.c.j(0),A.c.j(0.45),A.c.j(0)],x.O),null,null).az(0,new B.a4(w,0,u,1)))
r.aE(new B.a4(w,v,u,v+q*4),t)}},
$S:0}
D.fBP.prototype={
$0(){return D.fBK(this.a,this.b,this.c,!1)},
$S:0}
D.fBQ.prototype={
$0(){return this.a.af(this.b,this.c)},
$S:0}
D.fBR.prototype={
$0(){var w=this.a
w.nT(0,-1,1)
D.fBK(w,this.b,this.c,!0)},
$S:0}
D.h7G.prototype={
$1(d){var w=this,v=w.b
d.bW(0,1/v)
D.huH(d,new B.av(w.c*v,w.d*v),w.e,w.a.a,w.f,null)},
$S:328}
D.h7H.prototype={
$0(){var w=this,v=w.e
return D.mA(w.a,w.b.b.toUpperCase(),new B.m(w.c,w.d),v*0.036,w.f,w.w,null,v*0.006,w.r,A.u)},
$S:0}
D.h7I.prototype={
$0(){var w=this,v=w.e
return D.mA(w.a,w.b.f,new B.m(w.c,w.d),v,A.c,w.r,null,-v*0.02,w.f,A.u)},
$S:0}
D.h7J.prototype={
$0(){var w=this,v=w.b,u=w.e,t=B.ap(v.e,A.c,0.35)
t.toString
return D.mA(w.a,v.r,new B.m(w.c,w.d),u,A.c,w.r,B.a([A.c,t],x.O),-u*0.02,w.f,A.u)},
$S:0}
D.h7K.prototype={
$0(){var w=this,v=w.e
return D.mA(w.a,w.b.b.toUpperCase(),new B.m(w.c,w.d),v*0.036,w.f,w.w,null,v*0.006,w.r,A.u)},
$S:0}
D.h7L.prototype={
$0(){var w=this,v=w.e
return D.mA(w.a,w.b.b.toUpperCase(),new B.m(w.c,w.d),v*0.036,w.f,w.w,null,v*0.006,w.r,A.u)},
$S:0}
D.c6N.prototype={
$0(){return B.a8(this.a,!1).e6()},
$S:0}
D.fMW.prototype={
$1(d){var w=null,v=B.h0(w,A.cJ,w,1,w,B.cW(w,w,w,w,w,w,w,w,w,B.l(w,w,this.b,w,w,w,w,w,w,w,w,d,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),this.a),A.a7,A.ca,w,A.e4,A.cb)
v.eJ()
return v},
$S:315}
D.h7F.prototype={
$1(d){var w=this.b,v=B.l_(this.a,w,d)
v.toString
w=B.l_(w,this.c,d)
w.toString
w=B.l_(v,w,d)
w.toString
return w},
$S:1688}
D.fDk.prototype={
$1(d){var w=null,v=D.ajY(this.b),u=A.h.bO(d*2)
return D.a4r(this.a,B.l(w,w,v,w,w,w,w,w,w,w,w,u/2,w,w,A.u,w,w,!0,w,this.d,w,w,w,w,w,w),A.aY,w,1,1/0)},
$S:315}
D.h7S.prototype={
$1(d){var w,v=this,u=v.a
d.bW(0,1/u)
w=v.b
D.h7R(d,new B.av(w.a*u,w.b*u),v.c,v.d,v.e,v.f,v.w,v.r)},
$S:328}
D.fAY.prototype={
$1(d){var w=this,v=null,u=D.ajY(w.b),t=A.h.bO(d*2),s=w.c?A.u:A.O
return D.a4r(w.a,B.l(v,v,u,v,v,v,v,v,v,v,v,t/2,v,v,s,v,v,!0,v,w.d,v,v,v,v,v,v),A.aY,v,1,1/0)},
$S:315}
D.fNn.prototype={
$2(d,e){return A.h.D((this.a-d)/e,0,1)},
$S:84}
D.fNj.prototype={
$1(d){return A.dS.aA(0,d)},
$S:5}
D.fNm.prototype={
$2(d,e){var w=this.b
return new B.m(this.a+d*w,e*w)},
$S:363}
D.fNk.prototype={
$5(d,e,f,g,h){var w,v,u,t,s,r,q,p=this,o=p.a.$2(h,0.6)
if(o<=0)return
w=p.b
v=w.c
J.bs(v.save())
v.translate(f.a,f.b)
w.bW(0,A.h.D(A.n1.aA(0,o),0.01,1.3))
u=p.c
N.huG(w,A.J,g,d,u,p.d>9.5?0.5+0.3*Math.sin(u*3+d):0)
u=new B.m(0,g*1.42)
t=B.c_(u,g*0.62,g*2.5)
s=g*0.31
r=B.bx(t,new B.aQ(s,s))
$.T()
q=B.L()
q.r=A.c.gp(0)
w.aq(r,q)
w.aq(B.bx(t,new B.aQ(s,s)),N.aiw(A.bE,g*0.05))
D.iuv(w,"\u2665 "+e,u,g*0.4,A.qN,g*2.2)
v.restore()},
$S:1689}
D.fNl.prototype={
$3(d,e,f){var w,v,u,t,s=this.a.$2(f,0.5)
if(s<=0)return
w=A.h.D(A.n1.aA(0,s),0.01,1.3)*(1+0.07*Math.sin(this.b*6))
v=this.c
u=e*w
$.T()
t=B.L()
t.r=A.bE.gp(0)
v.O(d,u,t)
t=B.L()
t.b=A.ad
t.c=2
t.r=A.c.gp(0)
v.O(d,u,t)
D.aSH(v,"\u2665",d.aI(0,new B.m(e*0.5*w,e*0.62*w)),e*1.3*w,A.c,A.aY,0,null)},
$S:453}
D.fNo.prototype={
$2(d,e){var w,v,u=this.a,t=u.a
u=u.c-t
t+=u*0.08
w=this.b
v=w*d
return new B.a4(t,v,t+u*0.84,v+w*e)},
$S:1691}
D.hgl.prototype={
$3(d,e,f){var w=this
return new D.Ys(w.d,w.e,w.a,w.c,w.b,null)},
$C:"$3",
$R:3,
$S:z+1}
D.hgm.prototype={
$4(d,e,f,g){var w=x.t
return new B.de(e,!1,B.iE(A.z,g,null,new B.bk(B.cN(A.cn,e,null),new B.bq(0.85,1,w),w.k("bk<bS.T>"))),null)},
$C:"$4",
$R:4,
$S:34}
D.f_a.prototype={
$0(){var w=this.a,v=this.b,u=this.c
w.ax=new B.m(v.a/u.a,v.b/u.b)
w.at=w.gBM()
w.Cg()},
$S:0}
D.f_1.prototype={
$0(){var w,v=this.a
v.f=0
v.r=!1
w=this.c
v.ay=A.n.F(A.n.F(this.b,w)+w,w)
v.ch=v.gBM()
v.Cg()},
$S:0}
D.f_9.prototype={
$0(){var w,v=this.a
if(v.gayN()){w=v.ah_()
v.ay=w==null?v.ay:w
v.ch=v.gBM()}else{v.as=v.gBM()
v.x=Math.max(1,v.x)}v.Cg()},
$S:0}
D.eZZ.prototype={
$1(d){return new D.Jn(C.Tk[this.b],new D.eZY(this.a,d),null)},
$S:z+4}
D.eZY.prototype={
$0(){this.a.a=!0
B.a8(this.b,!1).e6()},
$S:0}
D.f__.prototype={
$0(){var w,v=this.a
v.e=A.n.F(v.gyE()+1,10)
w=v.gRh().y
w=w==null?null:A.n.ao(w.a,1000)
v.x=w==null?1:w
v.as=v.gBM()},
$S:0}
D.eZX.prototype={
$0(){var w,v=this.a
v.f=-1
v.e=A.n.F(v.gyE()+this.b,10)
if(v.gyE()<0)v.e=v.gyE()+10
w=v.gRh().y
w=w==null?null:A.n.ao(w.a,1000)
v.x=w==null?1:w
v.as=v.gBM()
v.XV()
v.Cg()},
$S:0}
D.f_0.prototype={
$0(){var w=this.a
w.f=this.b
w.r=!1
w.ay=0
w.ch=w.gBM()
w.Cg()},
$S:0}
D.f_g.prototype={
$2(d,e){var w,v,u=null,t=e.d*0.14,s=A.h.D(t*0.62,18,30),r=this.a,q=r.y?r.gb3w():u,p=x.p
q=B.a([B.aA(A.bZ,B.c9(r.gRh(),new D.f_d(r),u),A.y,!1,C.hN6,q,u,u,u,new D.f_e(r),u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new D.f_f(r,e),u,u,u,!1,A.a4)],p)
if(r.r)q.push(r.bIC())
if(this.b&&!r.r&&r.ah_()!=null){w=A.c.j(0.92)
v=s*0.42
q.push(B.ao(t/2-s/2,B.aE(!1,A.a3,!0,u,B.aM(!1,u,!0,new B.C(new B.R(v,0,v,0),B.A(B.a([B.V(A.kQ,A.ax,u,u,u,s*0.55),new B.a5(s*0.18,u,u,u),B.c("Learn more",u,u,u,u,u,u,B.l(u,u,A.ax,u,u,u,u,u,u,u,u,s*0.44,u,u,A.C,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],p),A.l,u,A.e,A.P,0,u,u),u),A.nz,!0,u,u,u,u,C.hMP,u,u,u,u,u,u,r.gcft(),u,u,u,u,u,u,u),A.f,w,0,u,u,A.nz,u,u,A.ai),s,u,u,t*0.3,u,u))}return new B.am(A.a0,u,A.b5,A.t,q,u)},
$S:65}
D.f_f.prototype={
$1(d){var w=this.b
return this.a.cfz(d.b,new B.av(B.aU(1/0,w.a,w.b),B.aU(1/0,w.c,w.d)))},
$S:56}
D.f_e.prototype={
$1(d){var w,v,u,t=d.d
if(t==null)t=0
if(Math.abs(t)>120){w=this.a
v=t<0?1:-1
if(w.gayN()){u=w.ah_()
w.cfv((u==null?0:u)+v)}else w.ah0(v)}},
$S:38}
D.f_d.prototype={
$2(d,e){var w,v,u,t,s,r=null,q=this.a,p=q.gRh().y,o=p==null?r:A.n.ao(p.a,1000),n=(o==null?0:o)/1000,m=q.x===0&&q.a.f?n:99
p=n-q.at
w=p<1.4?new D.b17(q.ax,p):r
v=q.gayN()
u=Math.max(0,n-q.ch)
t=v?A.n.F(q.ay+A.h.bd(u/10),14):r
if(v)s=u
else s=m<3?n:Math.max(0,n-q.gaTn())
return B.b4(r,r,r,new D.bzV(q.gyE(),q.f,s,m,w,t,r),A.hg)},
$S:52}
D.f_h.prototype={
$0(){var w=this.a
return w.l(w.gbdD())},
$S:0}
D.f_b.prototype={
$0(){var w=this.a
w.y=this.b
w.z=!1
w.Cg()},
$S:0}
D.f_c.prototype={
$0(){var w=this.a
w.z=!w.z
w.Cg()},
$S:0}
D.f_8.prototype={
$5$color$on(d,e,f,g,h){var w=null,v=h?g.j(0.28):A.c.j(0.08),u=B.n(14),t=B.K(h?g:A.aT,A.r,1)
return B.aA(w,B.q(w,B.w(B.a([B.V(d,g,w,w,w,20),A.rR,B.c(e,w,w,w,w,w,w,B.l(w,w,g,w,w,w,w,w,w,w,w,9.5,w,w,A.C,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.l,w,A.e,A.P,0,A.p),A.f,w,w,new B.p(v,w,t,u,w,w,A.m),w,w,w,A.jk,A.jY,w,w,56),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,!1,A.a4)},
$3(d,e,f){return this.$5$color$on(d,e,f,A.c,!1)},
$4$color(d,e,f,g){return this.$5$color$on(d,e,f,g,!1)},
$S:679}
D.f_3.prototype={
$0(){return this.a.ah0(-1)},
$S:0}
D.f_4.prototype={
$0(){return this.a.ah0(1)},
$S:0}
D.f_5.prototype={
$0(){return this.a.ah0(0)},
$S:0}
D.f_6.prototype={
$0(){var w=this.a
return w.l(new D.f_2(w))},
$S:0}
D.f_2.prototype={
$0(){var w=this.a
w.r=!w.r
w.Cg()},
$S:0}
D.f_7.prototype={
$0(){return this.a.b3u(0)},
$S:0}
D.eZW.prototype={
$0(){var w=this.a
return w.l(new D.eZV(w))},
$S:0}
D.eZV.prototype={
$0(){return this.a.r=!1},
$S:0}
D.fN2.prototype={
$1(d){var w,v,u,t,s=this,r=null,q=s.a,p=s.b,o=s.c,n=s.d
if(q==null){q=A.h.bO(d*2)
n=D.a4r(p,B.l(r,r,D.ajY(s.e),r,r,r,r,r,"Roboto",r,r,q/2,r,r,o,r,1.1,!0,r,n,r,r,r,r,r,r),A.aY,r,1,1/0)
q=n}else{$.T()
w=B.L()
v=s.f
u=s.w
t=v.a-s.r*A.h.D(u,0,4000)
v=v.b
w.san(new B.a6(A.a5,A.a9,A.w,q,r,r).az(0,new B.a4(t,v,t+A.h.D(u,1,4000),v+d)))
p=B.h0(r,A.cJ,r,1,r,B.cW(r,r,r,r,r,r,r,r,r,B.l(r,r,r,r,r,r,r,r,"Roboto",r,r,d,r,r,o,w,1.1,!0,r,n,r,r,r,r,r,r),p),A.a7,A.ca,r,A.e4,A.cb)
q=p}q.eJ()
return q},
$S:315}
D.fyq.prototype={
$1(d){var w=new B.aI($.T().r,A.ak,null,null,B.a([],x.v)),v=B.B(d,x.H)
w.E(new B.zF(v,!0))
return w},
$S:1693}
D.eZT.prototype={
$0(){return this.a.d=this.b},
$S:0}
D.eZU.prototype={
$0(){return this.a.b3x(this.b)},
$S:0}
D.eZQ.prototype={
$2(d,e){return A.b7},
$S:37}
D.eZP.prototype={
$2(d,e){var w=null,v=this.a,u=v.d===e?1.1:1
u=B.a([B.v2(v.b3y(e,18,46,6,A.c,80),A.b_,A.hb,u)],x.p)
if(v.d===e)u.push(new B.C(A.tE,B.c(C.iz[e].a,w,w,w,w,w,w,C.fVz,w,w,w),w))
return B.w(u,A.l,w,A.e,A.P,0,A.p)},
$S:680}
D.eZR.prototype={
$0(){var w=this.a
return w.a.a8d(0,w.d)},
$S:0}
D.eZS.prototype={
$2(d,e){return this.a.aAY(e,15,1/0,!0,8,A.c,1/0)},
$S:43}
D.eZN.prototype={
$0(){var w=this.a
return w.a.a8d(0,w.d)},
$S:0}
D.eZO.prototype={
$0(){return this.a.b3x(this.b)},
$S:0};(function aliases(){var w=D.aQg.prototype
w.bCW=w.t})();(function installTearOffs(){var w=a._instance_0u,v=a._instance_1u
var u
w(u=D.aIg.prototype,"gcft","ah1",2)
w(u,"gcbS","cbT",0)
w(u,"gb3s","cfs",0)
w(u,"gbdD","Cg",0)
v(u,"gcfu","b3u",3)
w(u,"gcfA","cfB",0)
w(u,"gb3w","cfC",0)})();(function inheritance(){var w=a.mixinHard,v=a.inheritMany,u=a.inherit
v(B.aF,[D.bU_,D.i7,D.t5,D.b17,D.wO,D.yC,D.cYh,D.bwA])
v(B.hq,[D.bU0,D.fN3,D.fGN,D.h7G,D.fMW,D.h7F,D.fDk,D.h7S,D.fAY,D.fNj,D.fNk,D.fNl,D.hgl,D.hgm,D.eZZ,D.f_f,D.f_e,D.f_8,D.fN2,D.fyq])
v(B.lm,[D.cI8,D.aqx])
v(B.iZ,[D.fBL,D.fNn,D.fNm,D.fNo,D.f_g,D.f_d,D.eZQ,D.eZP,D.eZS])
v(B.iY,[D.fBM,D.fBN,D.fBO,D.fBP,D.fBQ,D.fBR,D.h7H,D.h7I,D.h7J,D.h7K,D.h7L,D.c6N,D.f_a,D.f_1,D.f_9,D.eZY,D.f__,D.eZX,D.f_0,D.f_h,D.f_b,D.f_c,D.f_3,D.f_4,D.f_5,D.f_6,D.f_2,D.f_7,D.eZW,D.eZV,D.eZT,D.eZU,D.eZR,D.eZN,D.eZO])
v(B.aw,[D.Jn,D.b6r])
v(B.af,[D.Ys,D.avb])
v(B.ai,[D.aQg,D.bpI])
u(D.aIg,D.aQg)
v(B.lO,[D.bzV,D.be5])
w(D.aQg,B.cl)})()
B.jg(b.typeUniverse,JSON.parse('{"Jn":{"aw":[],"x":[]},"Ys":{"af":[],"x":[]},"aIg":{"ai":["Ys"]},"bzV":{"aC":[]},"avb":{"af":[],"x":[]},"bpI":{"ai":["avb"]},"b6r":{"aw":[],"x":[]},"be5":{"aC":[]},"OR":{"af":[],"x":[]}}'))
var y={a:"The number of bytes to view must be a multiple of 4"}
var x=(function rtii(){var w=B.as
return{J:w("bLX"),V:w("N<ac>"),O:w("N<u>"),X:w("N<i7>"),g:w("N<m>"),v:w("N<h_>"),s:w("N<o>"),p:w("N<x>"),n:w("N<H>"),w:w("io"),H:w("m"),Q:w("dp<H>"),t:w("bq<H>"),W:w("bf<o>"),q:w("l4"),S:w("F"),o:w("~")}})();(function constants(){var w=a.makeConstList
C.b67=new B.dl(0.35,-0.25)
C.b7K=new B.Er(2,"dst")
C.aiH=new B.u(1,0.0196078431372549,0.03137254901960784,0.058823529411764705,A.q)
C.byp=new B.u(1,0.043137254901960784,0.10196078431372549,0.2,A.q)
C.dux=w([C.aiH,C.byp],x.O)
C.ceO=new B.a6(A.aU,A.b2,A.w,C.dux,null,null)
C.baY=new B.p(null,null,null,null,null,C.ceO,A.m)
C.bvS=new B.u(1,0.42745098039215684,0.47843137254901963,0.5764705882352941,A.q)
C.bjO=new B.u(1,0.16862745098039217,0.1803921568627451,0.26666666666666666,A.q)
C.bl3=new B.u(1,0.4823529411764706,0.29411764705882354,0.41568627450980394,A.q)
C.dIh=w([C.bvS,C.bjO,C.bl3],x.O)
C.cd3=new B.a6(A.aw,A.aD,A.w,C.dIh,null,null)
C.bb_=new B.p(null,null,null,null,null,C.cd3,A.m)
C.b6a=new B.dl(0.5,-0.6)
C.bzQ=new B.u(1,0.22745098039215686,0.054901960784313725,0.10980392156862745,A.q)
C.dp9=w([C.bzQ,A.ez],x.O)
C.ePW=new B.bU(C.b6a,1.3,A.w,null,0,C.dp9,null,null)
C.bb8=new B.p(null,null,null,null,null,C.ePW,A.m)
C.wS=new B.u(1,0.8392156862745098,0.7176470588235294,0.4823529411764706,A.q)
C.b9f=new B.ax(C.wS,1,A.r,-1)
C.b9s=new B.bE(A.a1,A.a1,C.b9f,A.a1)
C.bbv=new B.p(null,null,C.b9s,null,null,null,A.m)
C.biL=new B.u(1,0.027450980392156862,0.03137254901960784,0.047058823529411764,A.q)
C.ZT=new B.u(0.9490196078431372,0.06666666666666667,0.07450980392156863,0.09411764705882353,A.q)
C.bjl=new B.u(1,0.16470588235294117,0.16470588235294117,0.17647058823529413,A.q)
C.ai0=new B.u(1,0.6039215686274509,0.4196078431372549,0.07058823529411765,A.q)
C.Ns=new B.u(1,0.16862745098039217,0.1843137254901961,0.21176470588235294,A.q)
C.ZW=new B.u(1,0.00784313725490196,0.01568627450980392,0.03529411764705882,A.q)
C.aif=new B.u(1,0.5411764705882353,0.42745098039215684,0.06274509803921569,A.q)
C.aiq=new B.u(1,0.6588235294117647,0.6235294117647059,0.5647058823529412,A.q)
C.NA=new B.u(1,0.24705882352941178,0.5607843137254902,0.30196078431372547,A.q)
C.Cp=new B.u(1,0.7215686274509804,0.6980392156862745,0.6549019607843137,A.q)
C.aiT=new B.u(1,0.7215686274509804,0.45098039215686275,0.2,A.q)
C.bmV=new B.u(1,0.47843137254901963,0.3058823529411765,0.0196078431372549,A.q)
C.boy=new B.u(1,0.01568627450980392,0.0196078431372549,0.0392156862745098,A.q)
C.NR=new B.u(1,1,0.23137254901960785,0.12156862745098039,A.q)
C.ajw=new B.u(1,0.00784313725490196,0.011764705882352941,0.0392156862745098,A.q)
C.NX=new B.u(1,0.7215686274509804,0.7529411764705882,0.8,A.q)
C.z2=new B.u(1,0.06666666666666667,0.0784313725490196,0.09411764705882353,A.q)
C.nR=new B.u(1,0.054901960784313725,0.07058823529411765,0.09411764705882353,A.q)
C.bt2=new B.u(1,0.5411764705882353,0.41568627450980394,0.06274509803921569,A.q)
C.bub=new B.u(1,0.2901960784313726,0.26666666666666666,0.23529411764705882,A.q)
C.buf=new B.u(1,0.0196078431372549,0.18823529411764706,0.12156862745098039,A.q)
C.j1=new B.u(1,0.043137254901960784,0.12156862745098039,0.29411764705882354,A.q)
C.buF=new B.u(1,0.054901960784313725,0.07058823529411765,0.13333333333333333,A.q)
C.ng=new B.u(1,0.09019607843137255,0.09019607843137255,0.10980392156862745,A.q)
C.bwu=new B.u(1,0.1843137254901961,0.43529411764705883,0.23137254901960785,A.q)
C.bwy=new B.u(1,0.08627450980392157,0.09411764705882353,0.10980392156862745,A.q)
C.byi=new B.u(1,0.9058823529411765,0.8235294117647058,0.6509803921568628,A.q)
C.a0T=new B.u(1,1,0.9529411764705882,0.6274509803921569,A.q)
C.amD=new B.u(1,0.9607843137254902,0.7686274509803922,0.6039215686274509,A.q)
C.bAu=new B.u(1,0.10196078431372549,0.09019607843137255,0.0784313725490196,A.q)
C.amN=new B.u(1,0.7176470588235294,0.4745098039215686,0.12156862745098039,A.q)
C.bFk=new B.R(0,0,0,1)
C.anQ=new B.R(10,6,10,8)
C.ao6=new B.R(14,10,10,10)
C.bIW=new B.R(18,14,18,0)
C.bJi=new B.R(18,6,18,0)
C.bUK=new B.a_(62895,"MaterialIcons",!1)
C.QA=new B.a_(62970,"MaterialIcons",!1)
C.asQ=new B.a_(983316,"MaterialIcons",!1)
C.p5=new B.a_(983617,"MaterialIcons",!1)
C.c1_=new B.ae(A.DX,13,A.ab,null,null,null)
C.c1K=new B.ae(A.oe,18,null,null,null,null)
C.c5t=new B.ae(A.eP,13,A.ab,null,null,null)
C.bXu=new B.a_(983768,"MaterialIcons",!1)
C.c64=new B.ae(C.bXu,13,A.c,null,null,null)
C.cbU=new B.a6(A.aU,A.b2,A.w,R.Tu,null,null)
C.d9o=w([A.bO,E.Hl,A.bO],x.O)
C.avK=new B.a6(A.a5,A.a9,A.w,C.d9o,null,null)
C.dro=w([A.bP,A.bl,A.dV],x.O)
C.cd_=new B.a6(A.aw,A.aD,A.w,C.dro,null,null)
C.NG=new B.u(1,0.11764705882352941,0.30980392156862746,0.6392156862745098,A.q)
C.cUx=w([C.j1,C.NG,A.as,A.bO],x.O)
C.dyE=w([0,0.42,0.8,1],x.n)
C.cd5=new B.a6(A.aU,A.b2,A.w,C.cUx,C.dyE,null)
C.al_=new B.u(1,0.16862745098039217,0.18823529411764706,0.23137254901960785,A.q)
C.bzl=new B.u(1,0.788235294117647,0.8196078431372549,0.8627450980392157,A.q)
C.bw3=new B.u(1,0.34901960784313724,0.3764705882352941,0.43137254901960786,A.q)
C.d6S=w([C.al_,C.bzl,C.bw3,C.al_],x.O)
C.cd7=new B.a6(A.a5,A.a9,A.w,C.d6S,A.Ei,null)
C.cHp=w([A.bP,A.d0],x.O)
C.avP=new B.a6(A.a5,A.a9,A.w,C.cHp,null,null)
C.d91=w([A.z5,A.aH],x.O)
C.cdH=new B.a6(A.a5,A.a9,A.w,C.d91,null,null)
C.bpe=new B.u(1,0.0784313725490196,0.3803921568627451,0.24705882352941178,A.q)
C.bvM=new B.u(1,0.043137254901960784,0.2901960784313726,0.18823529411764706,A.q)
C.biQ=new B.u(1,0.03137254901960784,0.2196078431372549,0.13725490196078433,A.q)
C.dcu=w([C.bpe,C.bvM,C.biQ],x.O)
C.cek=new B.a6(A.aw,A.aD,A.w,C.dcu,null,null)
C.ahT=new B.u(1,0.12156862745098039,0.1411764705882353,0.18823529411764706,A.q)
C.cgF=w(["Add every person","Link mums, dads, kids","Keep it for ever"],x.s)
C.dU6=new D.wO("NGMY Ads","\ud83d\udce2","Every NGMY ad, as a real 3D commercial",A.c5,-1)
C.dU0=new D.wO("Civic Registry","\ud83e\udeaa","Enroll your family in your community",A.di,0)
C.dU5=new D.wO("Jobs","\ud83d\udcbc","Find work and get hired",A.as,1)
C.dUb=new D.wO("NGMY Store","\ud83d\udecd\ufe0f","African food and traditions",A.fM,2)
C.dUc=new D.wO("Kiswahili","\ud83d\udde3\ufe0f","Learn Swahili and English",A.bU,3)
C.dU9=new D.wO("Doc Scanner","\ud83d\udcc4","Scan, save and share",A.ci,4)
C.dU1=new D.wO("Invoices","\ud83e\uddfe","Professional invoices",A.bE,5)
C.dTZ=new D.wO("Calendar","\ud83d\udcc5","This month, today lit up",A.aC,-2)
C.iz=w([C.dU6,C.dU0,C.dU5,C.dUb,C.dUc,C.dU9,C.dU1,C.dTZ],B.as("N<wO>"))
C.W8=new B.y(2,3)
C.W9=new B.y(3,4)
C.cAG=w([A.kP,A.zY],B.as("N<a_>"))
C.cEm=w([A.ax,A.cz,F.ni],x.O)
C.alJ=new B.u(1,0.24705882352941178,0.22745098039215686,0.2,A.q)
C.dxq=w(["A Registry ID card for every member","Birthdays and children remembered","Votes and receipts everyone can see"],x.s)
C.dS7=new D.i7(A.f9,"Registry ID","Active")
C.dRW=new D.i7(A.Ip,"Birthdays","On")
C.dSo=new D.i7(A.p2,"Community vote","Open")
C.dKq=w([C.dS7,C.dRW,C.dSo],x.X)
C.UX=new D.aqx(1,"card")
C.dSC=new D.t5(null,"NGMY Civic Registry",A.mC,A.dl,A.aH,"Your family.","Counted. Helped.","Enroll your whole family in the community registry.",C.dxq,"Civic Registry",6,"#","Family members enrolled",0,C.dKq,C.UX,"REGISTRY ID","One card for your whole community life.","NGMY Hub tab, then Civic Registry")
C.doz=w(["Find jobs near you","Book house repairs and workers","Advisors help with applications"],x.s)
C.dSA=new D.i7(V.Rj,"Warehouse helper","Apply")
C.dSh=new D.i7(A.QX,"House repair","Book")
C.dSn=new D.i7(A.A1,"House worker","Hire")
C.cZD=w([C.dSA,C.dSh,C.dSn],x.X)
C.ub=new D.aqx(2,"badge")
C.dSO=new D.t5(A.atB,"NGMY Jobs and Help",A.q9,A.kd,A.aQ,"Need work?","Get hired.","Jobs, house repairs and house workers, all in one Help Center.",C.doz,"Help Center",24,"#","Jobs near you",0,C.cZD,C.ub,"HIRED","From the search to the first paycheck.","NGMY Hub tab, then Help Center")
C.dni=w(["African food and traditions","Open your own store","Support Congolese and African sellers"],x.s)
C.bWN=new B.a_(983309,"MaterialIcons",!1)
C.dS9=new D.i7(C.bWN,"Fufu flour 2 kg","$12")
C.bW3=new B.a_(63590,"MaterialIcons",!1)
C.dRZ=new D.i7(C.bW3,"Congolese coffee","$18")
C.dS8=new D.i7(A.as2,"Wax print fabric","$15")
C.dw1=w([C.dS9,C.dRZ,C.dS8],x.X)
C.dSD=new D.t5(A.Rc,"NGMY Store",A.kp,A.kd,A.cX,"Shop our community.","Sell yours too.","Buy and sell inside NGMY. Approved members can open a store.",C.dni,"NGMY Store",45,"$#.00","Your cart",0,C.dw1,C.ub,"OPEN NOW","Every order supports our community.","NGMY Hub tab, then NGMY Store")
C.atw=new B.a_(983989,"MaterialIcons",!1)
C.dfs=w(["Short daily lessons","A picture for every word","Swahili and English both ways"],x.s)
C.dS2=new D.i7(C.atw,"Jambo","Hello")
C.dS3=new D.i7(A.hQ,"Asante","Thank you")
C.dS0=new D.i7(A.xs,"Familia","Family")
C.dud=w([C.dS2,C.dS3,C.dS0],x.X)
C.dSG=new D.t5(C.atw,"Kiswahili School",A.p6,A.te,A.ms,"Habari!","Learn Swahili.","Learn Swahili and English, one short lesson at a time.",C.dfs,"Kiswahili School",12,"# days","Your learning streak",0,C.dud,C.ub,"KARIBU","Karibu means welcome.","Creator Hub tab, then Kiswahili School")
C.cRt=w(["Sharp scans from your camera","Saved as a PDF","Share it anywhere"],x.s)
C.dSz=new D.i7(A.tQ,"Lease.pdf","2 pages")
C.dSr=new D.i7(A.h3,"Receipt.pdf","1 page")
C.dSw=new D.i7(A.mC,"ID copy.pdf","Shared")
C.dkt=w([C.dSz,C.dSr,C.dSw],x.X)
C.dSB=new D.t5(P.IK,"Document Scanner",A.a4y,A.ajh,A.hl,"Paper in.","PDF out.","Scan, save and share your papers in seconds.",C.cRt,"Document Scanner",3,"# pages","Scanned today",0,C.dkt,C.ub,"PDF","Every paper, safe on your phone.","NGMY Hub tab, then Document Scanner")
C.dAn=w(["Your logo and business details","Totals worked out for you","Send it as a PDF"],x.s)
C.dSd=new D.i7(A.DO,"Kitchen repair","$850")
C.dSs=new D.i7(A.IC,"Materials","$320")
C.dRX=new D.i7(A.DS,"Delivery","$80")
C.ct6=w([C.dSd,C.dSs,C.dRX],x.X)
C.dSJ=new D.t5(A.kR,"NGMY Invoices",A.h3,A.k9,A.c5,"Look professional.","Get paid faster.","Make clean invoices and receipts in minutes.",C.dAn,"Invoice 1042",1250,"$#.00","Total due",0,C.ct6,C.ub,"PAID","Paid. Stamped. Done.","Tool Hub tab, then Business Essentials")
C.doI=w(["Grandparents to grandchildren","A photo on every branch","Share it with the family"],x.s)
C.bVo=new B.a_(63229,"MaterialIcons",!1)
C.dS6=new D.i7(C.bVo,"Grandparents","4")
C.bWv=new B.a_(983134,"MaterialIcons",!1)
C.dS1=new D.i7(C.bWv,"Parents","6")
C.dSf=new D.i7(A.QE,"Children","8")
C.dJg=w([C.dS6,C.dS1,C.dSf],x.X)
C.dSK=new D.t5(F.atF,"NGMY Family Tree",A.Qu,A.nb,A.Nr,"Every branch.","Every story.","Grow your family tree and write your family book.",C.doI,"Family Tree",18,"#","Family members",0,C.dJg,C.ub,"FAMILY","Family is everything.","Profile tab, then Worksheets, then Family Tree")
C.dxk=w(["Kept safe on the server","A receipt for every payment","Rewards in one place"],x.s)
C.dSl=new D.i7(A.j9,"Crown reward","+$1.00")
C.dSq=new D.i7(A.kP,"House Care","-$25.00")
C.dSm=new D.i7(A.R7,"Gift received","+$20.00")
C.dG1=w([C.dSl,C.dSq,C.dSm],x.X)
C.a9b=new D.aqx(0,"coin")
C.dSE=new D.t5(null,"NGMY Wallet",A.jG,A.wP,A.eI,"One balance.","Everywhere.","Your NGMY balance is the same on every phone you use.",C.dxk,"NGMY Wallet",1250.75,"$#","Balance",2,C.dG1,C.a9b,"$","Your money, always in sync.","Your balance shows on Home and all across NGMY")
C.dE1=w(["Quick arcade games","Play offline, counted later","Every win has a receipt"],x.s)
C.dSx=new D.i7(A.ob,"Lucky Dice","Play")
C.dRY=new D.i7(A.QL,"Puzzle Rush","Play")
C.dS4=new D.i7(A.m6,"Top score","2,400")
C.dCL=w([C.dSx,C.dRY,C.dS4],x.X)
C.dSH=new D.t5(null,"NGMY Game Center",A.of,A.m0,A.be,"Play.","Win coins.","Arcade games in the Vault Channel, with your own game receipts.",C.dE1,"Vault Arcade",2400,"#","High score",0,C.dCL,C.a9b,"WIN","Game on, any time.","Home tab, then Vault Channel")
C.d2F=w(["Parts that really work","An AI Inventor to help you","See how electricity flows"],x.s)
C.bUJ=new B.a_(62894,"MaterialIcons",!1)
C.dSc=new D.i7(C.bUJ,"Battery","9 V")
C.dSk=new D.i7(C.p5,"Switch","On")
C.dSp=new D.i7(L.lf,"Bulb","Lit")
C.dH7=w([C.dSc,C.dSk,C.dSp],x.X)
C.dSF=new D.t5(L.lf,"NGMY Electronics Lab",I.vx,A.z5,A.b4,"Build it.","Watch it light up.","Wire real circuits: batteries, switches, bulbs, TVs and more.",C.d2F,"Electronics Lab",9,"# V","Battery",0,C.dH7,C.ub,"IT WORKS","Learn by building.","Home tab, then Core Protocol, then Electronics Lab")
C.dhP=w(["Chat like with a real person","Help with jobs and benefits","Answers in Swahili too"],x.s)
C.dSe=new D.i7(A.DI,"How do I apply?","Answered")
C.dSu=new D.i7(A.tQ,"Check my letter","Done")
C.dSb=new D.i7(A.p6,"Jibu kwa Kiswahili","Sawa")
C.de7=w([C.dSe,C.dSu,C.dSb],x.X)
C.dSN=new D.t5(A.vz,"NGMY Advisors",A.Ah,A.qN,A.cX,"Questions?","Ask an advisor.","Friendly AI advisors for jobs, applications and everyday life.",C.dhP,"NGMY Advisors",24,"# / 7","Always here",0,C.de7,C.ub,"ASK ME","Help is one message away.","Advisors tab")
C.dHp=w(["Walk through every room","Wire lights and outlets","Learn a trade step by step"],x.s)
C.dSy=new D.i7(F.asn,"Frame","Done")
C.dSj=new D.i7(I.vx,"Wiring","Done")
C.dS_=new D.i7(I.a5_,"Plumbing","Now")
C.dJN=w([C.dSy,C.dSj,C.dS_],x.X)
C.dSI=new D.t5(A.kP,"NGMY Construction Lab",A.rr,A.is,A.as,"Frame. Wire.","Finish a house.","Real 3D wiring, plumbing and a whole house to build.",C.dHp,"Construction Lab",86,"#%","House finished",0,C.dJN,C.ub,"BUILT","Learn the trade, room by room.","Home tab, then Core Protocol, then Construction Lab")
C.drl=w(["Record and edit audio","Make videos with titles","QR codes and Doc Share"],x.s)
C.dS5=new D.i7(A.p3,"Recorder Studio","Open")
C.dSt=new D.i7(A.R3,"Video Studio","Open")
C.dSa=new D.i7(A.jI,"QR Generator","Open")
C.d6w=w([C.dS5,C.dSt,C.dSa],x.X)
C.dSL=new D.t5(A.fQ,"NGMY Creator Hub",A.eh,A.i2,A.c5,"Record. Film.","Create.","Recorder, Video Studio, QR codes and more in one place.",C.drl,"Creator Hub",8,"#","Studios ready for you",0,C.d6w,C.ub,"ACTION","Your ideas, made real.","Creator Hub tab")
C.dzZ=w(["Many designs to choose from","Your logo and your colours","Share by QR or as a picture"],x.s)
C.dSv=new D.i7(A.m8,"Design","Midnight")
C.bWG=new B.a_(983243,"MaterialIcons",!1)
C.dSg=new D.i7(C.bWG,"QR code","On")
C.dSi=new D.i7(A.IO,"Shared","12 times")
C.dAp=w([C.dSv,C.dSg,C.dSi],x.X)
C.dSM=new D.t5(null,"NGMY Business Cards",A.a4u,A.cY,A.fK,"First impressions","that last.","Design a card people remember and share it with a QR code.",C.dzZ,"Business Card",250,"#","Card scans",0,C.dAp,C.UX,"YOUR NAME","Hand it over. Be remembered.","Tool Hub tab, then Business Card Creator")
C.Tk=w([C.dSC,C.dSO,C.dSD,C.dSG,C.dSB,C.dSJ,C.dSK,C.dSE,C.dSH,C.dSF,C.dSN,C.dSI,C.dSL,C.dSM],B.as("N<t5>"))
C.d9w=w([A.bl,A.bP,A.cz],x.O)
C.bnp=new B.u(1,0.5411764705882353,0.3333333333333333,0.13725490196078433,A.q)
C.deJ=w([C.aiT,C.amD,C.bnp],x.O)
C.fjx=new B.b1(-0.3,0.32,0.2)
C.fgT=new B.b1(-0.08,0.17,0.22)
C.fgU=new B.b1(0.14,0.14,0.2)
C.fiJ=new B.b1(0.34,0.3,0.2)
C.flh=new B.b1(0,0.32,0.26)
C.fiq=new B.b1(-0.42,0.46,0.15)
C.flc=new B.b1(0.42,0.46,0.15)
C.fjP=new B.b1(0,0.07,0.15)
C.aE6=w([C.fjx,C.fgT,C.fgU,C.fiJ,C.flh,C.fiq,C.flc,C.fjP],B.as("N<+(H,H,H)>"))
C.dqM=w([A.c,A.fC,A.aH],x.O)
C.dst=w([11,9,10,8,0,12,13,2],B.as("N<F>"))
C.ewm=new D.yC("NGMY Tree Story","A family grows, one branch at a time")
C.ewl=new D.yC("NGMY Store","Open the doors to something new")
C.ewn=new D.yC("NGMY Construction Lab","Build, wire and finish a real house")
C.ewg=new D.yC("NGMY Electronics Lab","Build circuits that really light up")
C.ewj=new D.yC("NGMY Advisors","Say hi to a friendly advisor")
C.ewh=new D.yC("Spark Adventure","Follow Sparky round a circuit board")
C.ewo=new D.yC("NGMY Game Center","Play games and win coins")
C.ewi=new D.yC("NGMY Business Cards","Make a card people remember")
C.ewf=new D.yC("NGMY Civic Registry","Your family, counted and helped")
C.ewk=new D.yC("NGMY Creator Hub","Record, film and create")
C.TO=w([C.ewm,C.ewl,C.ewn,C.ewg,C.ewj,C.ewh,C.ewo,C.ewi,C.ewf,C.ewk],B.as("N<yC>"))
C.duF=w([A.dl,A.cw,A.H0],x.O)
C.dyl=w(["For you","Apps","Library"],x.s)
C.aF9=w([-16,16],x.n)
C.Uc=w([-22,22],x.n)
C.Ud=w([-24,24],x.n)
C.a81=w([-5,5],x.n)
C.bdD=new B.ac(0,A.H,A.ba,A.dv,14)
C.dEG=w([C.bdD],x.V)
C.dHO=w(["M","T","W","T","F","S","S"],x.s)
C.aLy=new B.d2([1,7,2,0,3,1,4,2,6,3,7,6,8,4,9,5],B.as("d2<F,F>"))
C.boP=new B.u(1,0.054901960784313725,0.16470588235294117,0.22745098039215686,A.q)
C.bAb=new B.u(1,0.027450980392156862,0.08235294117647059,0.12941176470588237,A.q)
C.diK=w([C.boP,C.bAb,C.ZW],x.O)
C.ePM=new B.bU(A.C0,1.1,A.w,null,0,C.diK,A.vQ,null)
C.bvx=new B.u(1,0.9607843137254902,0.7725490196078432,0.25882352941176473,A.q)
C.dfP=w([T.CO,C.bvx,C.amN],x.O)
C.ePR=new B.bU(A.MI,0.5,A.w,null,0,C.dfP,A.mc,null)
C.aUa=new B.y("SONY",A.bP)
C.eXF=new B.y(3,E.Hl)
C.eYX=new B.y(0.45,0.05)
C.eZU=new B.y(-0.35,-0.05)
C.f0_=new B.y(2,A.bC)
C.aUc=new B.y("B&O",C.alJ)
C.f4D=new B.y("SAMSUNG",A.cF)
C.f65=new B.y(0,A.is)
C.aUi=new B.y("LG",A.dV)
C.f9g=new B.y(1,A.v)
C.f9E=new B.y(-1.6,0.9)
C.fbg=new B.y(1.6,0.9)
C.fdA=new B.y(1.6,-0.9)
C.ffe=new B.y(-1.25,-0.62)
C.ffY=new B.y(-1.6,-0.9)
C.fo4=new B.b7([1.25,-0.62,-1,0])
C.fof=new B.b7([-1.25,-0.62,0,1])
C.fom=new B.b7([1.25,0.62,0,-1])
C.fpM=new B.b7([-1.25,0.62,1,0])
C.c6E=new B.ae(A.eP,11,A.ab,null,null,null)
C.fTh=new B.G(!0,A.aR,null,null,null,null,9,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.hgA=new B.D("Search",null,C.fTh,null,null,null,null,null,null,null,null,null)
C.cWl=w([C.c6E,A.pr,C.hgA],x.p)
C.ftl=new B.c1(A.aK,A.e,A.i,A.l,null,A.p,null,0,C.cWl,null)
C.fAu=new B.hZ(3,5,5,1.35,null)
C.h0m=new B.D("Buttons hidden. Double-tap to show them again.",null,null,null,null,null,null,null,null,null,null,null)
C.aXa=new B.b3(C.h0m,null,null,null,null,null,null,null,A.iW,null,null,null,null,A.o_,!1,null,null,null,A.t,null)
C.bz2=new B.u(1,0.9450980392156862,0.9098039215686274,0.8470588235294118,A.q)
C.fI2=new B.G(!0,C.bz2,null,"serif",null,null,15,A.kj,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.fQl=new B.G(!0,A.ab,null,null,null,null,9.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.fR_=new B.G(!0,A.aR,null,null,null,null,9.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.adk=new B.G(!0,A.ab,null,null,null,null,12.5,null,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.aZs=new B.G(!0,A.ab,null,null,null,null,10,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.fVz=new B.G(!0,A.c,null,null,null,null,8.5,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.fVZ=new B.G(!0,A.c,null,null,null,null,14.5,A.O,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.fXc=new B.G(!0,A.ab,null,null,null,null,8.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.fXw=new B.G(!0,C.aiq,null,null,null,null,8.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.fNx=new B.G(!0,A.aF,null,null,null,null,9.5,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.fZX=new B.D("NGMY Apps",null,C.fNx,null,null,null,null,null,null,null,null,null)
C.fJP=new B.G(!0,C.wS,null,null,null,null,8,A.a8,null,3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.h2k=new B.D("BANG & OLUFSEN",null,C.fJP,null,null,null,null,null,null,null,null,null)
C.fQ1=new B.G(!0,A.v,null,null,null,null,9,A.C,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.h2N=new B.D("Open",null,C.fQ1,null,null,null,null,null,null,null,null,null)
C.h63=new B.D("Home",null,C.aZs,null,null,null,null,null,null,null,null,null)
C.h7b=new B.D("SAMSUNG",null,A.aZ3,null,null,null,null,null,null,null,null,null)
C.hdp=new B.D("LG",null,A.yh,null,null,null,null,null,null,null,null,null)
C.fXX=new B.G(!0,A.aF,null,null,null,null,10,A.u,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.hhB=new B.D("WHERE TO FIND IT",null,C.fXX,null,null,null,null,null,null,null,null,null)
C.hjI=new B.D("tv",null,A.qA,null,null,null,null,null,null,null,null,null)
C.hl1=new B.D("Watch again",null,A.cf,null,null,null,null,null,null,null,null,null)
C.fNr=new B.G(!0,C.wS,null,null,null,null,8.5,null,null,2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.hlT=new B.D("OPEN",null,C.fNr,null,null,null,null,null,null,null,null,null)
C.hLJ=new B.bf("tv-maker-name",x.W)
C.hLO=new B.bf("ad-info-ok",x.W)
C.hLX=new B.bf("tv-maker-apple",x.W)
C.hMl=new B.bf("ad-info-sheet",x.W)
C.hMw=new B.bf("ad-info-find",x.W)
C.hMI=new B.bf("tv-info",x.W)
C.hMP=new B.bf("tv-learn-more",x.W)
C.hN1=new B.bf("tv-frame",x.W)
C.hN6=new B.bf("tv-picture",x.W)
C.hN7=new B.bf("tv-fullscreen",x.W)
C.hNg=new B.bf("ad-info-replay",x.W)
C.hNI=new D.cI8(0,"triangles")})();(function staticFields(){$.SG=B.S(B.as("aF"),B.as("bwA"))
$.bI9=!1
$.ai_=B.S(B.as("aF"),B.as("iS"))})();(function lazyInitializers(){var w=a.lazyFinal
w($,"iRy","hYl",()=>{var v=B.csL()
v.z=A.hf
v.f=!0
return v})})()};
(a=>{a["QuEW6teElnFvIYF/mbU7tRCcjIE="]=a.current})($__dart_deferred_initializers__);