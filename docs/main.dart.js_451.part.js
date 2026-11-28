((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,A,O,L,G,E,M,P,I,Q,R,S,H,T,U,K,D={
i51(d,e,f,g,h){var w,v,u,t,s=null,r=e.length
if(A.n.F(r,2)!==0)throw B.Y(B.dM('"positions" length must be even.',s))
w=f.length
if(w*2!==r)throw B.Y(B.dM('"positions" and "colors" lengths must match.',s))
if(!A.pl.gar(e)){$.U()
v=J.v5(A.ik.gaS(f),f.byteOffset,w)
r=$.i0J()[d.a]
w=$.eC.cr()
u=v
t=new B.aXp(B.jN(w,"MakeVertices",[r,e,null,u,null]))}else t=s
return D.i50(t)},
i50(d){var w=new D.bUJ(d)
w.bFn(d)
return w},
bUJ:function bUJ(d){this.a=d
this.b=$
this.c=!1},
bUK:function bUK(){},
ijT(d,e,f){return D.i51(d,e,f,null,null)},
cIV:function cIV(d,e){this.a=d
this.b=e},
fPr(d,e,f,g,h,i){var w,v,u,t=null
if(h==null){w=A.h.bd(e*2)
v=A.h.bd(g*4)
u=B.l(t,t,D.akh(f),t,t,t,t,t,"Roboto",t,t,w/2,t,t,i,t,1.12,!0,t,v/4,t,t,t,t,t,t)
return D.a4F(d,u,A.aU,t,1,1/0)}$.U()
w=B.M()
w.san(h)
w=B.cX(t,t,t,t,t,t,t,t,t,B.l(t,t,t,t,t,t,t,t,"Roboto",t,t,e,t,t,i,w,1.12,!0,t,g,t,t,t,t,t,t),d)
w=B.h2(t,A.cK,t,1,t,w,A.a8,A.cb,t,A.e6,A.cc)
w.nM(1/0)
return w},
mD(d,e,f,g,h,i,j,k,l,m){var w,v,u,t
if(e.length===0||g<1)return 0
w=new D.fPd(j,f,i,l)
v=D.fPr(e,g,h,k,w.$1(g),m)
u=v.b.c
if(u>l&&u>0){t=g*l/u
v=D.fPr(e,t,h,k*l/u,w.$1(t),m)}v.a5(d,new B.m(f.a-v.b.c*i,f.b))
w=v.b.a.c
return w.gb4(w)},
hPV(d,e,f,g,h,i,j,k,l){var w,v,u=null,t=A.h.bd(g*2)
t=B.l(u,u,D.akh(h),u,u,u,u,u,"Roboto",u,u,t/2,u,u,l,u,1.25,!0,u,u,u,u,u,u,u,u)
w=j===0
v=D.a4F(e,t,w?A.aU:A.K,"\u2026",k,i)
t=f.a
t=w?t:t-i/2
v.a5(d,new B.m(t,f.b))
t=v.b.a.c
return t.gb4(t)},
Hy(d,e,f,g,h){var w,v,u,t=null
if(g<1)return
w=B.lD(e.a)
v=A.h.bd(g*2)
u=D.a4F(w,B.l(t,t,D.akh(h),t,t,t,t,t,e.b,t,t,v/2,t,t,t,t,1,!0,t,t,t,t,t,t,t,t),A.aU,t,1,1/0)
v=u.b
w=v.c
v=v.a.c
u.a5(d,f.aI(0,new B.m(w/2,v.gb4(v)/2)))},
itS(d,e){var w=A.h.a1(d,e).split("."),v=B.of(w[0],B.ag("\\B(?=(\\d{3})+(?!\\d))",!0,!1,!1,!1),new D.fIV(),null)
return w.length>1?v+"."+w[1]:v},
bGZ(d,e,f,g){var w,v
if(e<=0)return
w=d.c
J.bs(w.save())
v=f.d-f.b
w.clipRect(B.hS(f.cu(v*0.08)),$.lJ()[1],!0)
w.translate(0,(1-A.cn.aA(0,A.h.D(e,0,1)))*v*1.05)
g.$0()
w.restore()},
ixC(a0,a1,a2,a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=a1.a,j=a1.b,i=0+k,h=new B.a5(0,0,i,0+j),g=$.U(),f=B.M(),e=a2.d,d=B.ap(e,A.v,0.05)
d.toString
w=B.ap(e,A.v,0.55)
w.toString
v=x.O
f.san(new B.bW(C.b6V,1.25,A.w,l,0,B.a([d,w,C.bpn],v),A.vU,l).az(0,h))
a0.aE(h,f)
u=Math.sin(a3*0.35)*k*0.04
t=new B.aJ(g.r,A.ak,l,l,B.a([],x.v))
t.E(new B.b_(k*0.52+u,0))
t.E(new B.aq(k*0.7+u,0))
t.E(new B.aq(k*0.98,j))
t.E(new B.aq(k*0.34,j))
t.E(new B.bz())
g=B.M()
g.san(new B.a6(A.aW,A.b0,A.w,B.a([A.c.j(0.1),A.c.j(0)],v),l,l).az(0,h))
a0.af(t,g)
s=j*0.8
g=s+(j-s)
f=B.M()
f.san(new B.a6(A.aW,A.b0,A.w,B.a([B.ap(e,A.v,0.6).j(0.85),A.v],v),l,l).az(0,new B.a5(0,s,i,g)))
a0.aE(new B.a5(0,s,i,g),f)
f=s-1
g=B.M()
e=a2.e
g.san(new B.a6(A.a5,A.a9,A.w,B.a([A.L,e.j(0.55),A.L],v),l,l).az(0,new B.a5(0,s,i,s+2)))
a0.aE(new B.a5(0,f,i,f+2),g)
r=a1.gdm()>=300
q=new B.e7()
q.cW(a4*7+3)
for(i=a3*1.3,g=a3*k*0.012,f=k*1.1,d=k*0.05,p=0;p<9;++p){w=A.h.F(q.ai()*k+g*(0.5+q.ai()),f)
v=q.ai()
o=j*(0.025+q.ai()*0.05)
n=(p&1)===0?e:A.c
m=new B.ar(A.V,A.R,A.X,A.Y,A.W)
m.r=n.j(0.06+0.08*(0.5+0.5*Math.sin(i+p))).gp(0)
if(r)m.y=new B.h5(A.G,o*0.5)
a0.P(new B.m(w-d,v*j*0.72),o,m)}},
hNE(d,e,f,g,h,i){var w
$.U()
w=B.M()
w.r=A.v.j(h).gp(0)
if(i)w.y=new B.h5(A.G,g*0.6)
d.c3(B.c1(e,g,f),w)},
hto(d,e,f,g){var w=B.dB(),v=w.a
v.$flags&2&&B.ak(v)
v[11]=1/(d*2.6)
w.fO(e)
w.kd(f)
w.ek(0,0,g,1)
return w},
iuN(d,e,f,a0,a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=f*0.49,i=j*0.17,h=B.bx(B.c1(A.J,f,j),new B.aQ(i,i)),g=j*0.085
$.U()
w=B.M()
i=h.a
v=h.b
u=h.c
t=h.d
w.san(C.ce6.az(0,new B.a5(i,v,u,t)))
for(s=d.c,r=e.a,q=e.b,p=6;p>=1;--p){J.bs(s.save())
s.translate(r,q)
o=D.hto(f,a0,a1,g*p/6)
s.concat(B.bKb(B.Eg(o.a)))
d.aq(h,w)
s.restore()}J.bs(s.save())
s.translate(r,q)
d.aA(0,D.hto(f,a0,a1,0).a)
r=$.U()
q=B.M()
q.r=C.bjz.gp(0)
d.aq(h,q)
q=h.cu(-(j*0.006))
o=B.M()
o.b=A.af
o.c=j*0.012
o.san(C.cdZ.az(0,new B.a5(i,v,u,t)))
d.aq(q,o)
n=h.cu(-(j*0.035))
J.bs(s.save())
s.clipRRect(B.nn(n),$.n0(),!0)
o=n.a
q=n.b
t=n.c
u=n.d
D.iwx(d,new B.a5(o,q,t,u),a2,a3)
v=t-o
m=o+v*(0.2-a0*0.6)
l=new B.aJ(r.r,A.ak,k,k,B.a([],x.v))
l.E(new B.b_(m,q))
l.E(new B.aq(m+v*0.45,q))
l.E(new B.aq(m-v*0.15,u))
l.E(new B.aq(m-v*0.6,u))
l.E(new B.bz())
v=B.M()
v.san(new B.a6(A.aW,A.b0,A.w,B.a([A.c.j(0.16),A.c.j(0.02)],x.O),k,k).az(0,new B.a5(o,q,t,u)))
d.af(l,v)
s.restore()
v=j*0.04
v=B.bx(B.c1(new B.m(0,q+j*0.06),j*0.075,j*0.28),new B.aQ(v,v))
q=B.M()
q.r=A.v.gp(0)
d.aq(v,q)
s.restore()},
iwx(c3,c4,c5,c6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8=null,b9=1e9,c0=c4.c,c1=c4.a,c2=c0-c1
$.U()
w=B.M()
v=c5.d
u=B.ap(v,A.v,0.72)
u.toString
t=x.O
w.san(new B.a6(A.aW,A.b0,A.w,B.a([C.bvt,u],t),b8,b8).az(0,c4))
c3.aE(c4,w)
w=c4.b
u=c4.d
s=u-w
r=c1+c2
q=new B.a5(c1,w,r,w+s*0.3)
p=B.M()
o=c5.e
p.san(new B.a6(A.aw,A.aD,A.w,B.a([v,o],t),b8,b8).az(0,q))
c3.aE(q,p)
p=c2*0.1
n=B.M()
n.r=A.c.j(0.08).gp(0)
c3.P(new B.m(r-p,w+c2*0.12),c2*0.42,n)
n=c2*0.045
D.mD(c3,"9:41",new B.m(c1+c2*0.09,w+c2*0.035),n,A.c,0,b8,0,b9,A.C)
r=c2*0.06
D.Hy(c3,C.bVz,new B.m(c0-p,w+r),r,A.c)
c0=c2*0.07
m=c1+c0
l=s*0.085
k=w+l
j=c2*0.17
i=c2*0.05
h=B.bx(new B.a5(m,k,m+j,k+j),new B.aQ(i,i))
j=B.M()
j.r=A.c.j(0.22).gp(0)
c3.aq(h,j)
D.Hy(c3,c5.c,h.gbD(),c2*0.11,A.c)
j=h.c+i
k=h.b
D.mD(c3,c5.y,new B.m(j,k+c2*0.012),c0,A.c,0,b8,0,c2*0.62,A.u)
D.mD(c3,"NGMY",new B.m(j,k+c2*0.095),n,A.ab,0,b8,c2*0.006,b9,A.C)
c1+=r
w+=s*0.215
k=c1+c2*0.88
g=B.bx(new B.a5(c1,w,k,w+s*0.165),new B.aQ(r,r))
w=g.eN(new B.m(0,c2*0.015))
j=B.M()
j.r=A.v.j(0.25).gp(0)
c3.aq(w,j)
j=B.M()
j.r=A.c.gp(0)
c3.aq(g,j)
f=A.cn.aA(0,A.h.D((c6-1)/2.6,0,1))
r=g.a+r
j=g.b
w=g.d
c0=w-j
D.mD(c3,c5.as,new B.m(r,j+c0*0.16),c2*0.042,A.an,0,b8,0,c2*0.6,A.O)
m=D.itS(c5.z*f,c5.at)
D.mD(c3,B.aD(c5.Q,"#",m),new B.m(r,j+c0*0.42),p,A.a_,0,b8,0,c2*0.58,A.u)
r=g.c-c2*0.25
j+=c0*0.32
e=B.bx(new B.a5(r,j,r+c2*0.2,j+c0*0.36),new B.aQ(i,i))
c0=B.M()
c0.r=B.ap(o,A.c,0.75).gp(0)
c3.aq(e,c0)
c0=e.gbD()
j=B.ap(v,A.v,0.1)
j.toString
D.Hy(c3,A.mJ,c0,c2*0.065,j)
d=w+s*0.04
a0=s*0.088
for(c0=a0+s*0.022,w=c5.ax,r=c3.c,p=a0*0.55,m=a0*0.33,j=a0*0.38,a1=a0*1.05,a2=c2*0.03,a3=c2*0.46,a4=c2*0.04,a5=c2*0.028,a6=c2*0.046,a7=c2*0.26,a8=0;a8<3;++a8){a9=w[a8]
b0=A.cn.aA(0,A.h.D(A.h.D((c6-(1.3+a8*0.35))/0.5,0,1),0,1))
if(b0>0){J.bs(r.save())
r.translate((1-b0)*c2*0.6,0)
b1=B.bx(new B.a5(c1,d,k,d+a0),new B.aQ(n,n))
$.U()
b2=new B.ar(A.V,A.R,A.X,A.Y,A.W)
b2.r=A.c.j(0.075*b0).gp(0)
c3.aq(b1,b2)
b2=b1.a
b3=b2+p
b4=b1.b
b4+=(b1.d-b4)/2
b5=new B.ar(A.V,A.R,A.X,A.Y,A.W)
b5.r=o.j(0.22).gp(0)
c3.P(new B.m(b3,b4),m,b5)
b5=B.ap(o,A.c,0.2)
b5.toString
D.Hy(c3,a9.a,new B.m(b3,b4),j,b5)
D.mD(c3,a9.b,new B.m(b2+a1,b4-a2),i,A.c,0,b8,0,a3,A.O)
b2=B.ap(o,A.c,0.3)
b2.toString
D.mD(c3,a9.c,new B.m(b1.c-a4,b4-a5),a6,b2,1,b8,0,a7,A.C)
r.restore()}d+=c0}b6=A.h.D((c6-5.2)/0.15,0,1)*(1-A.h.D((c6-5.45)/0.2,0,1))
c0=c2*0.08
b7=B.bx(B.c1(new B.m(c4.gbD().a,u-l),s*0.075*(1-b6*0.08),c2*0.8*(1-b6*0.05)),new B.aQ(c0,c0))
$.U()
c0=B.M()
s=b7.a
l=b7.c
c0.san(new B.a6(A.a5,A.a9,A.w,B.a([v,o],t),b8,b8).az(0,new B.a5(s,b7.b,l,b7.d)))
c3.aq(b7,c0)
D.mD(c3,"Open NGMY",new B.m(b7.gbD().a,b7.gbD().b-c2*0.033),c2*0.052,A.c,0.5,b8,0,(l-s)*0.85,A.u)
if(b6>0){c0=b7.gbD()
c1=B.M()
c1.r=A.c.j(0.25*(1-b6)).gp(0)
c3.P(c0,i+b6*c2*0.3,c1)}},
fDS(a5,a6,a7,a8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=null,a3="NGMY",a4=1e9
switch(a6.ay.a){case 0:w=B.c0(A.J,a7)
$.U()
v=B.M()
v.san(C.eT5.az(0,w))
a5.c3(w,v)
v=B.M()
v.b=A.af
v.c=a7*0.05
v.r=C.ait.j(0.7).gp(0)
a5.P(A.J,a7*0.82,v)
for(v=a7*0.02,u=0;u<40;++u){t=u/40*3.141592653589793*2
s=Math.cos(t)
r=Math.sin(t)
q=Math.cos(t)
p=Math.sin(t)
o=new B.ar(A.V,A.R,A.X,A.Y,A.W)
o.c=v
o.r=C.ait.j(0.5).gp(0)
a5.ah(new B.m(s*a7*0.9,r*a7*0.9),new B.m(q*a7*0.97,p*a7*0.97),o)}n=a8?a3:a6.ch
v=n.length
if(v<=1)m=a7*0.95
else m=v<=3?a7*0.5:a7*0.36
v=-m*0.56
s=a7*1.4
D.mD(a5,n,new B.m(0,v+a7*0.03),m,A.to.j(0.7),0.5,a2,0,s,A.u)
D.mD(a5,n,new B.m(0,v),m,C.bnK,0.5,a2,0,s,A.u)
break
case 2:w=B.c0(A.J,a7)
$.U()
v=B.M()
v.san(E.aYg.az(0,w))
a5.c3(w,v)
l=B.c0(A.J,a7*0.84)
v=B.M()
s=a6.e
r=B.ap(s,A.c,0.35)
r.toString
q=a6.d
p=B.ap(q,A.v,0.25)
p.toString
v.san(new B.bW(A.n2,0.5,A.w,a2,0,B.a([r,s,p],x.O),A.xV,a2).az(0,l))
a5.c3(l,v)
v=B.M()
v.b=A.af
v.c=a7*0.025
v.r=A.c.j(0.35).gp(0)
a5.P(A.J,a7*0.72,v)
if(a8)D.mD(a5,a3,new B.m(0,-a7*0.2),a7*0.38,A.c,0.5,a2,a7*0.02,a7*1.3,A.u)
else{v=a6.a
s=v==null
r=s?a6.c:v
p=a7*0.95
D.Hy(a5,r,new B.m(0,a7*0.03),p,B.ap(q,A.v,0.45).j(0.35))
D.Hy(a5,s?a6.c:v,A.J,p,A.c)}break
case 1:k=B.c1(A.J,a7*1.9,a7*3)
v=a7*0.16
j=B.bx(k,new B.aQ(v,v))
if(a8){$.U()
s=B.M()
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
e=B.M()
e.r=A.v.j(0.85).gp(0)
a5.aE(new B.a5(s,i,s+g,i+f),e)
e=g*0.08
s+=e
p=r+p*0.5
r=a7*0.03
r=B.bx(new B.a5(s,p,s+g*0.55,p+o),new B.aQ(r,r))
o=B.M()
o.r=A.c.j(0.9).gp(0)
a5.aq(r,o)
D.mD(a5,"ngmy.org",new B.m(h-e,q-f),v,A.ab,1,a2,0,a4,A.O)
return}$.U()
v=B.M()
s=B.ap(a6.d,A.v,0.15)
s.toString
v.san(new B.a6(A.aw,A.aD,A.w,B.a([s,a6.e],x.O),a2,a2).az(0,k))
a5.aq(j,v)
v=a5.c
J.bs(v.save())
v.clipRRect(B.nn(j),$.n0(),!0)
s=k.c
r=k.b
q=a7*0.2
p=B.M()
p.r=A.c.j(0.08).gp(0)
a5.P(new B.m(s-a7*0.3,r+q),a7*1.3,p)
p=k.a
o=k.d
i=B.M()
i.r=A.v.j(0.1).gp(0)
a5.P(new B.m(p+q,o),a7*0.9,i)
v.restore()
v=s-p
o-=r
i=a7*0.03
D.mD(a5,a3,new B.m(p+v*0.07,r+o*0.1),a7*0.26,A.c,0,a2,i,a4,A.u)
D.Hy(a5,a6.c,new B.m(s-v*0.12,r+o*0.2),a7*0.32,A.c.j(0.9))
p+=v*0.08
s=r+o*0.38
q=a7*0.06
d=B.bx(new B.a5(p,s,p+a7*0.48,s+a7*0.36),new B.aQ(q,q))
q=B.M()
s=d.a
h=d.b
g=d.c
f=d.d
q.san(C.awh.az(0,new B.a5(s,h,g,f)))
a5.aq(d,q)
q=d.gbD()
e=d.gbD()
a0=B.M()
a0.r=C.aiI.gp(0)
a1=a7*0.012
a0.c=a1
a5.ah(new B.m(s,q.b),new B.m(g,e.b),a0)
a0=d.gbD()
e=d.gbD()
q=B.M()
q.r=C.aiI.gp(0)
q.c=a1
a5.ah(new B.m(a0.a,h),new B.m(e.a,f),q)
D.Hy(a5,A.a4L,new B.m(g+a7*0.25,d.gbD().b),a7*0.28,A.ab)
D.mD(a5,"\u2022\u2022\u2022\u2022  \u2022\u2022\u2022\u2022  2026",new B.m(p,r+o*0.64),a7*0.17,A.c.j(0.9),0,a2,a7*0.02,a4,A.O)
D.mD(a5,a6.ch,new B.m(p,r+o*0.8),a7*0.15,A.c,0,a2,i,v*0.6,A.u)
break}},
ir2(d,e,f,g,h,i){var w,v,u,t,s=null,r=g.ay,q=r===C.Vc,p=q?f*0.06:f*0.16,o=Math.cos(h),n=$.U(),m=B.M()
switch(r.a){case 0:r=A.CS
break
case 2:r=A.an
break
case 1:r=B.ap(g.d,A.c,0.55)
r.toString
break
default:r=s}m.r=r.gp(0)
r=x.v
n=n.r
if(q){w=new B.aJ(n,A.ak,s,s,B.a([],r))
r=f*0.16
w.E(new B.ju(B.bx(B.c1(A.J,f*1.9,f*3),new B.aQ(r,r))))}else{w=new B.aJ(n,A.ak,s,s,B.a([],r))
w.E(new B.jO(B.c0(A.J,f)))}v=new D.fDT(d,e,f,h)
r=B.a([],x.n)
for(u=1;u<8;++u)r.push(p*u/8)
if(o>=0){v.$2(p,new D.fDU(d,g,f))
for(q=x.Q,r=new B.dn(r,q),r=new B.bQ(r,r.gI(0),q.k("bQ<aj.E>")),q=q.k("aj.E");r.A();){o=r.d
if(o==null)o=q.a(o)
v.$2(o,new D.fDV(d,w,m))}v.$2(0,new D.fDW(d,g,f,i,w))}else{v.$2(0,new D.fDX(d,g,f))
for(q=r.length,t=0;t<r.length;r.length===q||(0,B.I)(r),++t)v.$2(r[t],new D.fDY(d,w,m))
v.$2(p,new D.fDZ(d,g,f))}},
hPO(a0,a1,a2,a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
for(w=a1.a,v=a1.b-a2*0.22,u=a4*1.4,t=a2*0.07,s=a3.e,r=a3.d,q=x.O,p=a3.ax,o=a4*0.7,n=0;n<3;++n){m=o+n*3.141592653589793*2/3
l=Math.sin(m)
if(l<0!==a5)continue
k=w+Math.cos(m)*a2*0.4
j=v+n*a2*0.2+Math.sin(u+n)*a2*0.025
i=new B.m(k,j)
h=t*(0.85-l*0.25)
g=B.c0(i,h)
$.U()
f=new B.ar(A.V,A.R,A.X,A.Y,A.W)
f.r=A.v.j(0.25).gp(0)
a0.P(new B.m(k+0,j+h*0.25),h,f)
f=new B.ar(A.V,A.R,A.X,A.Y,A.W)
e=B.ap(s,A.c,0.55)
e.toString
d=B.ap(r,A.v,0.35)
d.toString
f.san(new B.bW(A.MU,0.5,A.w,null,0,B.a([e,s,d],q),A.xV,null).az(0,g))
a0.c3(g,f)
D.Hy(a0,p[n].a,i,h,A.c)
f=-h
f=B.c1(new B.m(k+f*0.32,j+f*0.48),h*0.32,h*0.7)
j=new B.ar(A.V,A.R,A.X,A.Y,A.W)
j.r=A.c.j(0.45).gp(0)
a0.c3(f,j)}},
hxp(f2,f3,f4,f5,f6,f7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6,d7,d8,d9,e0,e1,e2,e3,e4,e5,e6,e7,e8,e9=null,f0=1e9,f1={}
f1.a=f5
w=A.n.F(f4,14)
v=C.Tz[w]
u=f3.a
t=f3.b
if(u<=0||t<=0)return
f5=f1.a=A.h.D(f5,0,10)
s=f2.c
J.bs(s.save())
r=0+u
q=0+t
s.clipRect(B.hS(new B.a5(0,0,r,q)),$.lJ()[1],!0)
if(f3.gdm()<180){r=f3.gdm()
s.restore()
D.hU2(f2,new B.e1(["ad",w,f6,u,t]),f3,f5+w*1000,new D.ha8(f1,180/r,u,t,f4,f6))
return}p=f3.gdm()>=300
D.ixC(f2,f3,v,f5,f4,!0)
o=u>=t*1.15
n=o?t:Math.min(t*0.62,u*1.05)
m=o?u*0.07:u/2
l=o?0:0.5
k=o?u*0.42:u*0.88
j=o?t*0.22:t*0.63
i=o?new B.m(u*0.73,t*0.47):new B.m(u/2,t*0.33)
h=o?t*0.8:Math.min(t*0.5,u*0.6/0.49)
g=f7==null
f=g?0:A.ek.aA(0,A.h.D(f7.b/1.1,0,1))*3.141592653589793*2
e=Math.sin(f5*1.1)
if(f5<6.9){d=A.cn.aA(0,A.h.D(A.h.D(f5/1.1,0,1),0,1))
a0=A.dS.aA(0,A.h.D((f5-3.2)/0.9,0,1))
a1=A.rf.aA(0,A.h.D((f5-6.3)/0.6,0,1))
a2=i.a+(1-d)*u*0.45+a1*u*0.7
a3=i.b+Math.sin(f5*1.6)*h*0.012
a4=h*(1+a0*0.06)
a5=new B.m(a2,a3)
D.hNE(f2,new B.m(a2,a3+a4*0.55),a4*0.62,a4*0.07,0.5,p)
D.hPO(f2,a5,a4,v,f5,!1)
D.iuN(f2,a5,a4,-1.15+d*0.73+a0*0.3+a1*0.9+e*0.05+f,0.07-a0*0.03,v,f5)
D.hPO(f2,a5,a4,v,f5,!0)}if(f5>=6.2&&f5<8.9){a6=A.ek.aA(0,A.h.D((f5-6.4)/0.7,0,1))
a7=A.rf.aA(0,A.h.D((f5-8.4)/0.45,0,1))
e=v.ay
a8=e===C.Vc
a9=(a8?n*0.15:n*0.2)*a6*(1-a7*0.4)
if(a9>1){b0=Math.sin(f5*1.5)
b1=i.a
b2=i.b
b3=n*0.02
b4=b2-b3+Math.sin(f5*2)*n*0.012
a5=new B.m(b1,b4)
b5=a9*2
$.U()
b6=B.M()
b7=x.O
b6.san(new B.bW(A.z,0.5,A.w,e9,0,B.a([v.e.j(0.35*a6),A.L],b7),e9,e9).az(0,B.c0(a5,b5)))
f2.P(a5,b5,b6)
D.hNE(f2,new B.m(b1,b2+n*0.33),a9*2.2,a9*0.25,0.45*a6,p)
D.ir2(f2,a5,a9,v,(1-a6)*3.141592653589793*1.5+b0*0.35+f+a7*3.141592653589793,A.h.D((f5-7.2)/0.9,0,1))
if(!a8){b8=A.cn.aA(0,A.h.D(A.h.D((f5-7)/0.4,0,1),0,1))*(1-a7)
if(b8>0){b9=B.bx(B.c1(new B.m(b1,b4+a9*1.28),n*0.075,a9*1.9*b8),new B.aQ(b3,b3))
a8=b9.eN(new B.m(0,n*0.008))
b0=B.M()
b0.r=A.v.j(0.3).gp(0)
f2.aq(a8,b0)
b0=B.M()
a8=v.d
b1=B.ap(a8,A.v,0.1)
b1.toString
b2=B.ap(a8,A.v,0.1)
b2.toString
b3=b9.a
b4=b9.c
b0.san(new B.a6(A.a5,A.a9,A.w,B.a([b1,a8,b2],b7),e9,e9).az(0,new B.a5(b3,b9.b,b4,b9.d)))
f2.aq(b9,b0)
if(b8>0.6){e=e===C.a9v?A.a.es(v.b,"NGMY ","").toUpperCase():v.ch
D.mD(f2,e,new B.m(b9.gbD().a,b9.gbD().b-n*0.025),n*0.042,A.c,0.5,e9,n*0.004,(b4-b3)*0.86,A.u)}}}}}e=v.e
a8=B.ap(e,A.c,0.25)
a8.toString
c0=n*(o?0.105:0.095)
if(f5<3.3){c1=1-A.h.D((f5-3)/0.3,0,1)
D.bGZ(f2,A.h.D((f5-0.2)/0.4,0,1)*c1,new B.a5(0,j,r,j+n*0.05),new D.ha9(f2,v,m,j,n,a8,k,l))
c2=j+n*0.07
a8=c0*1.15
D.bGZ(f2,A.h.D((f5-0.45)/0.5,0,1)*c1,new B.a5(0,c2,r,c2+a8),new D.haa(f2,v,m,c2,c0,k,l))
c3=c2+c0*1.18
D.bGZ(f2,A.h.D((f5-0.85)/0.5,0,1)*c1,new B.a5(0,c3,r,c3+a8),new D.hab(f2,v,m,c3,c0,k,l))
c4=c3+c0*1.35
c5=n*0.22*(A.cn.aA(0,A.h.D(A.h.D((f5-1.3)/0.6,0,1),0,1))*c1)
a8=o?m:m-c5/2
b0=n*0.004
b0=B.bx(new B.a5(a8,c4,a8+c5,c4+n*0.008),new B.aQ(b0,b0))
$.U()
a8=B.M()
a8.r=e.gp(0)
f2.aq(b0,a8)}else if(f5<6.5){c1=1-A.h.D((f5-6.2)/0.3,0,1)
D.bGZ(f2,A.h.D((f5-3.3)/0.4,0,1)*c1,new B.a5(0,j,r,j+n*0.05),new D.hac(f2,v,m,j,n,a8,k,l))
c4=j+n*0.07
c6=A.h.D((f5-3.45)/0.5,0,1)*c1
if(c6>0){J.bs(s.save())
s.translate(0,(1-A.cn.aA(0,A.h.D(c6,0,1)))*n*0.04)
a8=o?0.05:0.046
c7=D.hPV(f2,v.w,new B.m(m,c4),n*a8,A.c.j(c6),k,l,2,A.O)
s.restore()}else c7=n*0.12
a8=n*0.04
c8=c4+Math.max(c7,n*0.06)+a8
for(b0=n*0.075,b1=v.x,b2=v.d,c9=k-a8*1.8,b3=a8*0.55,b4=m+b3,b5=a8*0.62,b6=a8*0.8,b7=a8*1.6,d0=m+b7,d1=k-b7,d2=0;d2<3;++d2){d3=A.cn.aA(0,A.h.D(A.h.D((f1.a-(3.9+d2*0.3))/0.4,0,1),0,1))*c1
if(d3>0){d4=0.92*d3
d5=(1-d3)*n
if(o){d6=c8+b5
$.U()
d7=new B.ar(A.V,A.R,A.X,A.Y,A.W)
d7.r=e.gp(0)
f2.P(new B.m(b4,d6),b3*d3,d7)
d7=B.ap(b2,A.v,0.4)
d7.toString
D.Hy(f2,A.h2,new B.m(b4,d6),b6*d3,d7)
J.bs(s.save())
s.translate(d5*0.05,0)
D.mD(f2,b1[d2],new B.m(d0,c8),a8,A.c.j(d4),0,e9,0,c9,A.O)
s.restore()}else{d8=m-(Math.min(D.fPr(b1[d2],a8,A.c,0,e9,A.O).b.c,d1)+b7)/2
d9=c8+d5*0.03
d5=d8+b3
d6=d9+b5
$.U()
d7=new B.ar(A.V,A.R,A.X,A.Y,A.W)
d7.r=e.j(d3).gp(0)
f2.P(new B.m(d5,d6),b3,d7)
D.Hy(f2,A.h2,new B.m(d5,d6),b6,B.ap(b2,A.v,0.4).j(d3))
D.mD(f2,b1[d2],new B.m(d8+b7,d9),a8,A.c.j(d4),0,e9,0,d1,A.O)}}c8+=b0}}else if(f5<8.6){c1=1-A.h.D((f5-8.3)/0.3,0,1)
D.bGZ(f2,A.h.D((f5-6.6)/0.4,0,1)*c1,new B.a5(0,j,r,j+n*0.05),new D.had(f2,v,m,j,n,a8,k,l))
d3=A.h.D((f5-6.8)/0.5,0,1)*c1
if(d3>0){J.bs(s.save())
s.translate(0,(1-A.cn.aA(0,A.h.D(d3,0,1)))*n*0.05)
a8=o?0.085:0.075
b0=A.c.j(d3)
b1=o?3:2
D.hPV(f2,v.CW,new B.m(m,j+n*0.07),n*a8,b0,k,l,b1,A.u)
s.restore()}}a8=f1.a
if(a8>=8.5){a6=A.h.D((a8-8.5)/0.35,0,1)
$.U()
a8=B.M()
a8.r=A.v.j(0.45*a6).gp(0)
f2.aE(new B.a5(0,0,r,q),a8)
e0=t*(o?0.36:0.38)
e1=A.ek.aA(0,A.h.D((f1.a-8.55)/0.5,0,1))
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
D.mD(f2,"NGMY",new B.m(a8,e0-e2*0.6),e2,b0,0.5,B.a([A.c,b1],b2),e2*0.12,f0,A.u)
s.restore()
b1=e0+e2*0.62
D.mD(f2,v.b,new B.m(a8,b1),n*0.048,A.c.j(0.85*A.h.D((f1.a-8.7)/0.3,0,1)),0.5,e9,0,u*0.86,A.C)
d3=A.ek.aA(0,A.h.D((f1.a-8.8)/0.45,0,1))
if(d3>0){b0=n*0.05
e3=B.bx(B.c1(new B.m(a8,b1+n*0.16),n*0.1,Math.min(u*0.6,Math.max(u*0.3,n*0.5))*d3),new B.aQ(b0,b0))
e4=B.M()
e4.r=e.j(0.45).gp(0)
if(p)e4.y=new B.h5(A.G,n*0.03)
f2.aq(e3,e4)
b1=B.M()
b3=e3.a
b4=e3.b
b5=e3.c
b6=e3.d
b1.san(new B.a6(A.a5,A.a9,A.w,B.a([v.d,e],b2),e9,e9).az(0,new B.a5(b3,b4,b5,b6)))
f2.aq(e3,b1)
J.bs(s.save())
s.clipRRect(B.nn(e3),$.n0(),!0)
b5-=b3
e5=b3-b5*0.3+A.h.D((f1.a-9)/0.9,0,1)*b5*1.6
b3=e5+b5*0.25
b1=B.M()
b1.san(new B.a6(A.a5,A.a9,A.w,B.a([A.c.j(0),A.c.j(0.5),A.c.j(0)],b2),e9,e9).az(0,new B.a5(e5,0,b3,1)))
f2.aE(new B.a5(e5,b4,b3,b4+(b6-b4)),b1)
s.restore()
if(d3>0.7)D.mD(f2,"Open NGMY",new B.m(a8,e3.gbD().b-n*0.03),b0,A.c,0.5,e9,0,b5*0.8,A.u)
D.mD(f2,"ngmy.org",new B.m(a8,b6+n*0.035),n*0.036,A.c.j(0.65*A.h.D(d3,0,1)),0.5,e9,n*0.004,f0,A.O)}}a9=new B.a5(0,0,r,q)
$.U()
e=B.M()
e.san(new B.bW(A.z,0.95,A.w,e9,0,B.a([A.L,A.v.j(0.45)],x.O),E.aDS,e9).az(0,a9))
f2.aE(a9,e)
if(!g&&f7.b<0.7){b8=f7.b/0.7
g=f7.a
e=B.M()
e.b=A.af
a8=1-b8
e.c=n*0.012*a8
e.r=A.c.j(0.8*a8).gp(0)
f2.P(new B.m(g.a*u,g.b*t),n*(0.05+0.3*b8),e)}e6=n*0.035
e7=f6?"Ad "+(w+1)+" of 14":"Ad"
w=e6*0.9
g=D.fPr(e7,w,A.c,0,e9,A.C).b
e=g.c
g=g.a.c
a8=e6*0.4
e8=B.bx(new B.a5(e6,e6,e6+(e+e6*1.2),e6+(g.gb4(g)+e6*0.5)),new B.aQ(a8,a8))
a8=B.M()
a8.r=A.bu.j(0.95).gp(0)
f2.aq(e8,a8)
D.mD(f2,e7,new B.m(e8.a+e6*0.6,e8.b+e6*0.25),w,A.ax,0,e9,0,f0,A.C)
w=n*0.012
a8=t-w
w=a8+w
g=B.M()
g.r=A.c.j(0.2).gp(0)
f2.aE(new B.a5(0,a8,r,w),g)
g=f1.a
e=B.M()
e.r=A.bu.gp(0)
f2.aE(new B.a5(0,a8,0+u*g/10,w),e)
w=f1.a
if(w<0.25)c1=1-w/0.25
else c1=w>9.8?(w-9.8)/0.2:0
if(c1>0){w=B.M()
w.r=A.v.j(A.h.D(c1,0,1)).gp(0)
f2.aE(new B.a5(0,0,r,q),w)}s.restore()},
aqR:function aqR(d,e){this.a=d
this.b=e},
i7:function i7(d,e,f){this.a=d
this.b=e
this.c=f},
t7:function t7(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v){var _=this
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
b1E:function b1E(d,e){this.a=d
this.b=e},
fPd:function fPd(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fIV:function fIV(){},
fDT:function fDT(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fDU:function fDU(d,e,f){this.a=d
this.b=e
this.c=f},
fDV:function fDV(d,e,f){this.a=d
this.b=e
this.c=f},
fDW:function fDW(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fDX:function fDX(d,e,f){this.a=d
this.b=e
this.c=f},
fDY:function fDY(d,e,f){this.a=d
this.b=e
this.c=f},
fDZ:function fDZ(d,e,f){this.a=d
this.b=e
this.c=f},
ha8:function ha8(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
ha9:function ha9(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
haa:function haa(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
hab:function hab(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
hac:function hac(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
had:function had(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
Jv:function Jv(d,e,f){this.c=d
this.d=e
this.a=f},
c7w:function c7w(d){this.a=d},
ixM(d,e,f,g,h,i){var w=new D.fP5(e,h,!0),v=w.$1(g),u=v.b.c
if(u>i&&u>0)v=w.$1(Math.max(2,g*i/u))
w=v.b
u=w.c
w=w.a.c
v.a5(d,f.aI(0,new B.m(u/2,w.gb4(w)/2)))},
MP(d,e,f,g,h,i,j){var w,v,u,t,s,r,q,p,o,n,m,l,k
if(j<=0)return
w=new D.ha7(e,f,g)
v=A.h.cB(22*A.h.D(j,0,1))
for(u=i-h,t=e,s=1;s<=v;++s,t=q){r=Math.min(s/22,A.h.D(j,0,1))
q=w.$1(r)
$.U()
p=new B.ar(A.V,A.R,A.X,A.Y,A.W)
p.b=A.af
o=p.c=h+u*r
p.r=A.r6.gp(0)
p.d=A.bH
d.ah(t,q,p)
p=-o*0.18
n=q.a
m=q.b
l=B.ap(A.r6,A.c,0.18)
l.toString
k=new B.ar(A.V,A.R,A.X,A.Y,A.W)
k.b=A.af
k.c=o*0.28
k.r=l.gp(0)
k.d=A.bH
d.ah(new B.m(t.a+p,t.b+0),new B.m(n+p,m+0),k)}},
fP5:function fP5(d,e,f){this.a=d
this.b=e
this.c=f},
ha7:function ha7(d,e,f){this.a=d
this.b=e
this.c=f},
hsJ(d,e,f,g,h,i){var w=new D.fFs(e,h,!0,0),v=w.$1(g),u=v.b.c
if(u>i&&u>0)v=w.$1(Math.max(2,g*i/u))
w=v.b
u=w.c
w=w.a.c
v.a5(d,f.aI(0,new B.m(u/2,w.gb4(w)/2)))},
MQ(d,e,f,g,h,i){var w=h==null,v=w?A.n.F(A.h.ba(f/10),14):h,u=A.h.F(f,10)
D.hxp(d,e,v,u,g||w,i)},
MR(d,e,f,g,h,i){var w,v=d.c
J.bs(v.save())
v.clipRect(B.hS(new B.a5(0,0,0+e.a,0+e.b)),$.lJ()[1],!0)
w=C.iz[A.n.F(f,8)].e
if(w===-2)D.inZ(d,e,g)
else if(w===-1)D.MQ(d,e,g,!0,h,i)
else D.MQ(d,e,g,!1,w,i)
v.restore()},
inZ(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k=e.a,j=e.b,i=new B.W(Date.now(),0,!1),h=0+k,g=0+j
$.U()
w=B.M()
w.san(C.ccU.az(0,new B.a5(0,0,h,g)))
d.aE(new B.a5(0,0,h,g),w)
w=B.M()
w.r=A.bC.gp(0)
d.aE(new B.a5(0,0,h,0+j*0.15),w)
D.hsJ(d,A.pg[B.bO(i)-1]+" "+B.bD(i),new B.m(k/2,j*0.075),j*0.08,A.c,k*0.9)
v=k/7
for(h=j*0.21,g=j*0.05,u=0;u<7;++u)D.hsJ(d,C.dJY[u],new B.m(v*(u+0.5),h),g,A.aE,9999)
t=B.c3(B.bD(i),B.bO(i),1,0,0,0,0,0)
s=B.bY(B.c3(B.bD(i),B.bO(i)+1,0,0,0,0,0,0))
r=B.m1(t)-1
q=j*0.74/A.h.cB((r+s)/7)
for(h=j*0.26,g=f*3,p=1;p<=s;++p){o=r+p-1
n=new B.m(v*(A.n.F(o,7)+0.5),h+q*(A.n.ao(o,7)+0.5))
if(p===B.bY(i)){w=Math.min(v,q)
m=A.aH.j(0.5+0.2*Math.sin(g))
$.U()
l=new B.ar(A.V,A.R,A.X,A.Y,A.W)
l.r=m.gp(0)
d.P(n,w*0.42,l)}w=Math.min(v,q)
m=p===B.bY(i)?A.c:A.ab
D.hsJ(d,""+p,n,w*0.42,m,9999)}},
fFs:function fFs(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
wT:function wT(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
haj(d,e,f,g,h,i,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=e.a
if(j<=0||e.b<=0)return
if(e.gdm()<180){w=e.gdm()
v=h<3
u=v?h:g
D.hU2(d,new B.buY(["tv",f,i,a0,j,e.b,v]),e,u,new D.hak(180/w,e,f,g,h,i,a1,a0))
return}w=d.c
J.bs(w.save())
u=e.b
t=0+j
s=0+u
w.clipRect(B.hS(new B.a5(0,0,t,s)),$.lJ()[1],!0)
if(h<3){$.U()
r=B.M()
r.r=C.a_a.gp(0)
d.aE(new B.a5(0,0,t,s),r)
if(h<0.5)t=h/0.5
else t=h>2.4?(3-h)/0.6:1
q=A.h.D(t,0,1)
t=e.eq(A.J)
s=e.gdm()
r=B.M()
r.san(new B.bW(A.z,0.5,A.w,k,0,B.a([A.aH.j(0.35*q),A.L],x.O),k,k).az(0,B.c0(e.eq(A.J),e.gdm()*0.5)))
d.P(t,s*0.5,r)
D.aT8(d,"NGMY",new B.m(0,u*0.36),u*0.2,A.c.j(q),A.K,u*0.03,j)
D.aT8(d,"T V",new B.m(0,u*0.6),u*0.08,A.aH.j(q),A.K,u*0.05,j)
r=j*0.3
s=u*0.78
t=B.M()
t.r=A.aH.j(q).gp(0)
d.aE(new B.a5(r,s,r+j*0.4*(h/3),s+3),t)}else if(i>=0){D.MR(d,e,i,g,a0,a1)
p=C.iz[A.n.F(i,8)].e
if(p!==-2){if(p>=0)o=p
else o=a0==null?A.n.F(A.h.ba(g/10),14):a0
D.hMo(d,e,"ADS  \xb7  "+C.Tz[A.n.F(o,14)].b)}}else{n=A.h.D((h-3)/0.5,0,1)
m=A.n.F(f,10)
l=C.aM9.h(0,m)
if(m===0)D.iy5(d,e,g)
else if(l==null)D.iKs(d,e,g)
else D.hxp(d,e,D.hVJ(l),A.h.F(g,10),!1,a1)
D.hMo(d,e,"CH "+(m+1)+"  \xb7  "+C.U3[m].a)
if(n<1){$.U()
r=B.M()
r.r=A.c.j(0.6*(1-n)).gp(0)
d.aE(new B.a5(0,0,t,s),r)}}t=new B.aJ($.U().r,A.ak,k,k,B.a([],x.v))
t.E(new B.b_(0,0))
t.E(new B.aq(j*0.45,0))
t.E(new B.aq(0,u*0.5))
t.E(new B.bz())
u=B.M()
u.r=A.c.j(0.04).gp(0)
d.af(t,u)
w.restore()},
aT8(d,e,f,g,h,i,j,k){var w,v=null,u=D.akh(h),t=A.h.bd(g*2)
u=B.l(v,v,u,v,v,v,v,v,v,v,v,t/2,v,v,A.u,v,v,!0,v,j,v,v,v,v,v,v)
t=k==null
w=D.a4F(e,u,i,v,1,t?9999:k)
w.a5(d,f.a6(0,new B.m(i===A.K&&!t?(k-w.b.c)/2:0,0)))},
hMo(d,e,f){var w=e.b,v=e.a,u=v-w*0.34,t=w*0.04,s=w*0.03,r=B.bx(new B.a5(u,t,u+w*0.3,t+w*0.1),new B.aQ(s,s))
$.U()
s=B.M()
s.r=A.v.j(0.55).gp(0)
d.aq(r,s)
D.aT8(d,"NGMY",new B.m(r.a+w*0.025,r.b+w*0.012),w*0.07,A.c,A.aU,1,null)
s=w*0.86
u=B.M()
u.r=A.v.j(0.6).gp(0)
d.aE(new B.a5(0,s,0+v,s+w*0.14),u)
D.aT8(d,f,new B.m(t,w*0.885),w*0.075,A.c,A.aU,0,v*0.74-t)},
aSf(d,e,f,g,h,i,j){var w=new D.fD4(e,h,i,j),v=w.$1(g),u=v.b.c,t=f.c-f.a
if(u>t&&u>0)v=w.$1(g*t/u)
w=f.gbD()
u=v.b
t=u.c
u=u.a.c
v.a5(d,w.aI(0,new B.m(t/2,u.gb4(u)/2)))},
iy5(d5,d6,d7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5=null,c6=d6.a,c7=d6.b,c8=A.h.F(d7,14),c9=new D.fPy(c8),d0=new D.fPu(),d1=0+c6,d2=0+c7,d3=$.U(),d4=B.M()
d4.san(C.ce4.az(0,new B.a5(0,0,d1,d2)))
d5.aE(new B.a5(0,0,d1,d2),d4)
w=c6*0.34
v=new D.fPx(w,c7)
u=v.$2(0,0.5)
d4=c7*0.75
t=B.M()
t.san(new B.bW(A.z,0.5,A.w,c5,0,B.a([A.bO.j(0.55),A.L],x.O),c5,c5).az(0,B.c0(u,d4)))
d5.P(u,d4,t)
s=new B.e7()
s.cW(11)
for(d4=d7*2,r=0;r<26;++r){t=s.ai()
q=s.ai()
p=s.ai()
o=new B.ar(A.V,A.R,A.X,A.Y,A.W)
o.r=A.c.j(0.35+0.4*Math.sin(d4+r)).gp(0)
d5.P(new B.m(t*c6,q*c7*0.45),0.6+p*1.1,o)}for(t=x.v,n=0;n<2;++n){q=B.a([],t)
m=new B.aJ(d3.r,A.ak,c5,c5,q)
q.push(new B.b_(0,c7))
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
d3=$.U()
q=new B.ar(A.V,A.R,A.X,A.Y,A.W)
q.r=(p?C.NO:C.bxi).gp(0)
d5.af(m,q)}j=v.$2(0,0.81)
i=d0.$1(c9.$2(0.2,1.6))
h=d0.$1(c9.$2(2.4,2.6))
for(d3=d7*1.4,g=0;g<8;++g){t=C.aEG[g]
f=t.a
e=t.b
d=Math.sin(d3+f*7)*c7*0.006
q=v.$2(f,e)
p=q.a
q=q.b
t=c7*t.c
o=new B.ar(A.V,A.R,A.X,A.Y,A.W)
o.r=A.hY.gp(0)
d5.P(new B.m(p+d,q+0),t*h,o)
o=v.$2(f,e-0.015)
q=o.a
o=o.b
p=new B.ar(A.V,A.R,A.X,A.Y,A.W)
p.r=A.ew.gp(0)
d5.P(new B.m(q+d,o+0),t*0.82*h,p)}for(d3=c7*0.01,t=j.a,q=j.b,p=q+d3,o=c7*0.015,q+=o,k=c7*0.04,g=0;g<2;++g){a0=F.ht[g]*c7
D.MP(d5,j,new B.m(t+a0*0.04,p),new B.m(t+a0*0.12,q),k,d3,i)}t=c7*0.085
D.MP(d5,j,v.$2(0.02,0.7),v.$2(0,0.6),t,c7*0.055,i)
a1=d0.$1(c9.$2(1.8,1.6))
q=c7*0.05
p=c7*0.026
D.MP(d5,v.$2(0,0.6),v.$2(-0.1,0.55),v.$2(-0.34,0.44),q,p,a1)
D.MP(d5,v.$2(0,0.6),v.$2(0.1,0.55),v.$2(0.34,0.44),q,p,a1)
a2=d0.$1(c9.$2(3.2,1.3))
p=c7*0.024
a0=c7*0.018
D.MP(d5,v.$2(-0.34,0.44),v.$2(-0.17,0.33),v.$2(0,0.39),p,a0,a2)
D.MP(d5,v.$2(0.34,0.44),v.$2(0.17,0.33),v.$2(0,0.39),p,a0,a2)
a3=d0.$1(c9.$2(4.4,1.3))
a0=c7*0.02
p=c7*0.012
D.MP(d5,v.$2(0,0.39),v.$2(-0.1,0.3),v.$2(-0.17,0.2),a0,p,a3)
D.MP(d5,v.$2(0,0.39),v.$2(0.1,0.3),v.$2(0.17,0.2),a0,p,a3)
a0=c7*0.016
D.MP(d5,v.$2(-0.27,0.72),v.$2(-0.14,0.78),v.$2(0,0.7),a0,p,d0.$1(c9.$2(3.6,1)))
D.MP(d5,v.$2(0.27,0.72),v.$2(0.14,0.78),v.$2(0,0.7),a0,p,d0.$1(c9.$2(3.6,1)))
a4=new B.e7()
a4.cW(5)
for(a0=d7*1.6,a5=d5.c,a6=d7*1.3,a7=h*1.4,a8=c7*0.03,r=0;r<110;++r){a9=C.aEG[A.n.F(r,8)]
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
b2=B.c1(A.J,o*b5,a8*b5)
$.U()
b3=new B.ar(A.V,A.R,A.X,A.Y,A.W)
b3.r=B.ap(A.bh,A.ej,(Math.sin(d4+r)+1)/2).gp(0)
d5.c3(b2,b3)
a5.restore()}b6=new D.fPv(c9,d5,d7,c8)
o=c7*0.075
b6.$5(0,"Bibi",v.$2(-0.27,0.72),o,5)
b6.$5(1,"Babu",v.$2(0.27,0.72),o,5.6)
b6.$5(2,"Mama",v.$2(-0.34,0.44),t,6.4)
b6.$5(3,"Baba",v.$2(0.34,0.44),t,7)
b6.$5(4,"Dada",v.$2(-0.17,0.2),o,8)
b6.$5(5,"Kaka",v.$2(0.17,0.2),o,8.6)
b7=new D.fPw(c9,d7,d5)
b7.$3(v.$2(0,0.7),c7*0.028,5.9)
b7.$3(v.$2(0,0.39),c7*0.035,7.4)
if(c8>9.3)for(t=(c8-9.3)*0.4,r=0;r<7;++r){b8=A.h.F(t+r/7,1)
D.aT8(d5,"\u2665",v.$2(Math.sin(r*2.3+d4)*0.3,0.38-b8*0.3),c7*(0.04+0.02*A.n.F(r,3)),A.hZ.j((1-b8)*0.85),A.aU,0,c5)}d4=c6*0.655+(1-d0.$1(c9.$2(1,0.9)))*c6*0.4
t=c7*0.1
a0=d4+c6*0.315
b9=new B.a5(d4,t,a0,t+c7*0.64)
a5=B.bx(b9,new B.aQ(q,q))
$.U()
a6=B.M()
a6.r=C.j2.j(0.88).gp(0)
d5.aq(a5,a6)
a6=B.bx(b9,new B.aQ(q,q))
a5=B.M()
a5.b=A.af
a5.c=p
a5.r=F.ff.gp(0)
d5.aq(a6,a5)
c0=new D.fPz(b9,c7)
D.aSf(d5,"NGMY",c0.$2(0.13,0.06),c7*0.06,F.ff,!0,p)
D.aSf(d5,"Family",c0.$2(0.2,0.1),t,A.c,!0,0)
D.aSf(d5,"Tree",c0.$2(0.3,0.1),t,A.c,!0,0)
for(r=0;r<3;++r){c1=c9.$2(5.5+r*1.5,0.5)
if(c1<=0)continue
D.aSf(d5,"\u2665 "+C.chF[r],c0.$2(0.43+r*0.075,0.06).eN(new B.m((1-c1)*30,0)),q,A.iK.j(c1),!1,0)}c2=c9.$2(11,0.5)
if(c2>0){c3=B.c1(new B.m(b9.gbD().a,c7*0.67),o,(a0-d4)*0.6*A.ek.aA(0,c2))
d4=B.bx(c3,new B.aQ(k,k))
$.U()
t=B.M()
t.r=F.ff.gp(0)
d5.aq(d4,t)
if(c2>0.8)D.aSf(d5,"ngmy.org",c3.cu(-d3),q,C.j2,!0,0)}if(c8>11.6){d3=c7*0.82
D.aSf(d5,"Family is everything",new B.a5(0,d3,0+w*2,d3+q),q,A.c.j(A.h.D((c8-11.6)/0.5,0,1)),!0,0)}if(c8<0.4)c4=1-c8/0.4
else c4=c8>13.5?(c8-13.5)/0.5:0
if(c4>0){$.U()
d3=B.M()
d3.r=A.v.j(c4).gp(0)
d5.aE(new B.a5(0,0,d1,d2),d3)}},
hxK(d,e,f,g,h,i){return B.a7(d,!1).ca(B.vM(null,!1,!0,!0,new D.hiT(e,h,g,i,f),A.f2,null,A.pY,new D.hiU(),x.S))},
yH:function yH(d,e){this.a=d
this.b=e},
hak:function hak(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
fD4:function fD4(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fPy:function fPy(d){this.a=d},
fPu:function fPu(){},
fPx:function fPx(d,e){this.a=d
this.b=e},
fPv:function fPv(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fPw:function fPw(d,e,f){this.a=d
this.b=e
this.c=f},
fPz:function fPz(d,e){this.a=d
this.b=e},
hiT:function hiT(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
hiU:function hiU(){},
YA:function YA(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aIE:function aIE(d,e,f){var _=this
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
_.bw$=e
_.ab$=f
_.c=_.a=null},
f0R:function f0R(d,e,f){this.a=d
this.b=e
this.c=f},
f0I:function f0I(d,e,f){this.a=d
this.b=e
this.c=f},
f0Q:function f0Q(d){this.a=d},
f0F:function f0F(d,e){this.a=d
this.b=e},
f0E:function f0E(d,e){this.a=d
this.b=e},
f0G:function f0G(d){this.a=d},
f0D:function f0D(d,e){this.a=d
this.b=e},
f0H:function f0H(d,e){this.a=d
this.b=e},
f0X:function f0X(d,e){this.a=d
this.b=e},
f0W:function f0W(d,e){this.a=d
this.b=e},
f0V:function f0V(d){this.a=d},
f0U:function f0U(d){this.a=d},
f0Y:function f0Y(d){this.a=d},
f0S:function f0S(d,e){this.a=d
this.b=e},
f0T:function f0T(d){this.a=d},
f0P:function f0P(){},
f0K:function f0K(d){this.a=d},
f0L:function f0L(d){this.a=d},
f0M:function f0M(d){this.a=d},
f0N:function f0N(d){this.a=d},
f0J:function f0J(d){this.a=d},
f0O:function f0O(d){this.a=d},
f0C:function f0C(d){this.a=d},
f0B:function f0B(d){this.a=d},
bAB:function bAB(d,e,f,g,h,i,j){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.a=j},
aQH:function aQH(){},
SS(d,e,f,g,h,i,j,k,l,m){var w,v,u
if(g<1||e.length===0)return 0
w=new D.fPc(j,e,m,k,h,f,i,l)
v=w.$1(g)
u=v.b.c
if(u>l&&u>0)v=w.$1(g*l/u)
v.a5(d,new B.m(f.a-v.b.c*i,f.b))
w=v.b.a.c
return w.gb4(w)},
aRV(d,e,f,g,h,i,j,k,l){var w,v,u,t,s,r,q,p,o=h/2,n=f-o,m=f+o
o=i/2
w=g-o
v=g+o
u=l+j
o=new D.fAs()
t=x.g
s=o.$1(B.a([e.hl(n,l,w).a,e.hl(m,l,w).a,e.hl(m,u,w).a,e.hl(n,u,w).a],t))
$.U()
r=B.M()
r.r=B.ap(k,A.v,0.28).gp(0)
d.af(s,r)
r=e.b
r===$&&B.d()
q=r<0?m:n
s=o.$1(B.a([e.hl(q,l,w).a,e.hl(q,l,v).a,e.hl(q,u,v).a,e.hl(q,u,w).a],t))
r=B.M()
r.r=B.ap(k,A.v,0.45).gp(0)
d.af(s,r)
p=o.$1(B.a([e.hl(n,u,w).a,e.hl(m,u,w).a,e.hl(m,u,v).a,e.hl(n,u,v).a],t))
t=B.M()
o=B.ap(k,A.c,0.25)
o.toString
t.san(new B.a6(A.aw,A.aD,A.w,B.a([o,k],x.O),null,null).az(0,B.ajg(p.glm().a.getBounds())))
d.af(p,t)},
fBM(d,e,f,a0,a1,a2,a3,a4,a5){var w,v,u,t,s,r,q,p,o,n=null,m=e.hl(f,a5,a0),l=m.a,k=e.hl(f,a5+a2,a0),j=k.a,i=a1*m.b,h=a1*k.b,g=e.c
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
p=new B.aJ($.U().r,A.ak,n,n,B.a([],x.v))
p.E(new B.b_(t,r))
p.E(new B.aq(v,q))
v=i*2
p.E(new B.aln(B.c1(l,v*w,v),3.141592653589793,-3.141592653589793,!1))
p.E(new B.aq(u,r))
p.E(new B.bz())
u=B.M()
u.san(new B.a6(A.a5,A.a9,A.w,a3,M.TE,n).az(0,new B.a5(s,r,g,q)))
d.af(p,u)
g=h*2
o=B.c1(j,g*w,g)
g=B.M()
v=B.ap(a4,A.c,0.4)
v.toString
g.san(new B.bW(A.n2,0.5,A.w,n,0,B.a([v,a4],x.O),n,n).az(0,o))
d.c3(o,g)},
fIX(d){var w,v,u,t,s=A.h.F(d,1)*7.48,r=[1.24,2.5,1.24,2.5]
for(w=0;w<4;++w){v=r[w]
if(s<=v){v=[C.fse,C.ftO,C.fsl,C.fs2][w].a
u=v[0]
t=v[1]
return new B.y(u+v[2]*s,t+v[3]*s)}s-=v}return C.fj4},
iKs(g1,g2,g3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6,d7,d8,d9,e0,e1,e2,e3,e4,e5,e6,e7,e8,e9,f0,f1,f2,f3,f4,f5,f6,f7=null,f8=1e9,f9=g2.a,g0=g2.b
if(f9<=0||g0<=0)return
w=A.h.F(g3,10)
v=new B.a5(0,0,0+f9,0+g0)
u=g1.c
J.bs(u.save())
u.clipRect(B.hS(v),$.lJ()[1],!0)
t=$.U()
s=B.M()
s.san(C.eT0.az(0,v))
g1.aE(v,s)
r=g2.gdm()>=120
if(r){q=new B.e7()
q.cW(5)
for(s=g3*f9*0.01,p=g0*0.02,o=0;o<8;++o){n=A.h.F(q.ai()*f9+s,f9)
m=q.ai()
l=q.ai()
k=new B.ar(A.V,A.R,A.X,A.Y,A.W)
k.r=A.aH.j(0.07).gp(0)
k.y=new B.h5(A.G,p)
g1.P(new B.m(n,m*g0*0.5),g0*(0.02+l*0.04),k)}}j=new D.cZ3(g2)
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
e=new B.aJ(t,A.ak,f7,f7,B.a([],p))
n=x.g
m=x.H
l=B.B(B.a([j.hl(-1.85,-0.09000000000000001,-1.2).a,j.hl(1.85,-0.09000000000000001,-1.2).a,j.hl(1.85,-0.09000000000000001,1.1500000000000001).a,j.hl(-1.85,-0.09000000000000001,1.1500000000000001).a],n),m)
e.E(new B.zL(l,!0))
d=B.M()
d.r=A.v.j(0.55).gp(0)
if(r)d.y=new B.h5(A.G,g0*0.025)
g1.af(e,d)
l=new B.aJ(t,A.ak,f7,f7,B.a([],p))
k=B.B(B.a([j.hl(-1.75,-0.07,-1.05).a,j.hl(1.75,-0.07,-1.05).a,j.hl(1.75,0,-1.05).a,j.hl(-1.75,0,-1.05).a],n),m)
l.E(new B.zL(k,!0))
k=B.M()
k.r=C.bv3.gp(0)
g1.af(l,k)
a0=new B.aJ(t,A.ak,f7,f7,B.a([],p))
t=B.B(B.a([j.hl(-1.75,0,-1.05).a,j.hl(1.75,0,-1.05).a,j.hl(1.75,0,1.05).a,j.hl(-1.75,0,1.05).a],n),m)
a0.E(new B.zL(t,!0))
t=B.M()
t.san(C.cfj.az(0,B.ajg(a0.glm().a.getBounds())))
g1.af(a0,t)
if(r){a1=B.M()
a1.r=A.bw.j(0.08).gp(0)
a1.c=1
for(a2=-1.75;a2<=1.76;a2+=0.25)g1.ah(j.hl(a2,0,-1.05).a,j.hl(a2,0,1.05).a,a1)
for(a3=-1.05;a3<=1.06;a3+=0.25)g1.ah(j.hl(-1.75,0,a3).a,j.hl(1.75,0,a3).a,a1)}for(t=[C.fjS,C.fhf,C.fdf,C.feU],n=t.length,a4=0;a4<n;++a4){m=t[a4]
a5=j.hl(m.a,0,m.b)
a6=a5.a
a7=a5.b
a8=Math.sin(s)*0.55+0.1
m=a7*0.12
m=B.c1(a6,m*a8,m)
$.U()
l=new B.ar(A.V,A.R,A.X,A.Y,A.W)
l.r=E.Hv.gp(0)
g1.c3(m,l)
l=a7*0.06
l=B.c1(a6,l*a8,l)
m=new B.ar(A.V,A.R,A.X,A.Y,A.W)
m.r=C.a_a.gp(0)
g1.c3(l,m)}t=$.U()
s=B.a([],p)
a9=new B.aJ(t.r,A.ak,f7,f7,s)
for(o=0;o<=120;++o){b0=D.fIX(o/120)
a6=j.hl(b0.a,0.004,b0.b).a
t=a6.a
n=a6.b
if(o===0){t=new B.b_(t,n)
s.push(t)
n=a9.f
if(n!=null)t.aj(n)
a9.ac()}else{t=new B.aq(t,n)
s.push(t)
n=a9.f
if(n!=null)t.aj(n)
a9.ac()}}b1=j.hl(0,0,0).b
$.U()
t=B.M()
t.b=A.af
t.c=b1*0.07
t.e=A.dQ
t.r=C.btS.gp(0)
g1.af(a9,t)
t=B.M()
t.b=A.af
t.c=b1*0.045
t.e=A.dQ
t.san(C.awh.az(0,v))
g1.af(a9,t)
if(g){b2=B.M()
b2.b=A.af
b2.c=b1*0.09
b2.r=A.hn.j(0.25+0.1*Math.sin(g3*6)).gp(0)
if(r)b2.y=new B.h5(A.G,b1*0.04)
g1.af(a9,b2)}for(t=[C.f2h,C.f1k],s=t.length,a4=0;a4<s;++a4){n=t[a4]
b3=n.a
b4=n.b
for(n=b3-0.2,m=b4-0.17,l=b4+0.17,o=0;o<5;++o){b5=n+o*0.1
D.aRV(g1,j,b5,m,0.035,0.08,0.03,A.cH,0)
D.aRV(g1,j,b5,l,0.035,0.08,0.03,A.cH,0)}D.aRV(g1,j,b3,b4,0.55,0.3,0.08,A.cx,0)
b6=j.hl(b3,0.081,b4)
b7=b6.a
a7=b6.b
D.SS(g1,"NGMY",new B.m(b7.a,b7.b-a7*0.05),a7*0.08,A.c.j(0.75),0.5,f7,a7*0.01,f8,A.u)}D.aRV(g1,j,-0.55,0.62,0.34,0.2,0.08,A.aM,0)
b8=j.hl(-0.7,0.1,0.62).a
b9=(1-i)*0.75
c0=j.hl(-0.7+0.32*Math.cos(b9),0.1+0.32*Math.sin(b9),0.62).a
$.U()
t=B.M()
t.c=b1*0.04
t.d=A.bH
t.san(C.awm.az(0,B.rm(b8,c0)))
g1.ah(b8,c0,t)
t=B.M()
t.r=A.aC.gp(0)
g1.P(b8,b1*0.025,t)
if(i>0.95&&w<2.6){t=A.h.D((w-2.1)/0.5,0,1)
s=B.M()
s.r=A.bO.j(0.8).gp(0)
g1.P(c0,b1*0.08*(1-t),s)}D.aRV(g1,j,0.55,0.62,0.46,0.12,0.1,C.bz6,0.02)
for(t=[C.f9D,C.fcS,C.f3q,C.f02],s=t.length,a4=0;a4<s;++a4){n=t[a4]
D.aRV(g1,j,0.41000000000000003+n.a*0.09,0.62,0.035,0.125,0.105,n.b,0.02)}D.fBM(g1,j,-1.25,0,0.17,0.62,C.cFo,C.ajl,0)
c1=j.hl(-1.25,0.62,0)
a7=c1.b
D.fBM(g1,j,-1.25,0,0.06,0.06,C.dg1,C.an5,0.62)
D.SS(g1,"9V",j.hl(-1.25,0.3,0).a.aI(0,new B.m(0,a7*0.06)),a7*0.11,A.bu,0.5,f7,0,f8,A.u)
D.SS(g1,"+",c1.a.aI(0,new B.m(a7*0.16,a7*0.18)),a7*0.12,A.ab,0.5,f7,0,f8,A.u)
D.fBM(g1,j,0,-0.62,0.13,0.36,C.dwq,A.dW,0)
D.fBM(g1,j,1.25,0,0.12,0.16,C.daJ,A.d1,0)
c2=j.hl(1.25,0.36,0)
b2=c2.a
c3=c2.b*0.22
t=f>0
if(t){$.U()
c4=B.M()
s=c3*4
c4.san(new B.bW(A.z,0.5,A.w,f7,0,B.a([A.bO.j(0.65*f),A.as.j(0.18*f),A.L],x.O),W.Tw,f7).az(0,B.c0(b2,s)))
g1.P(b2,s,c4)}c5=B.c0(b2,c3)
s=$.U()
n=B.M()
m=x.O
n.san(new B.bW(A.MV,0.5,A.w,f7,0,t?B.a([A.c,A.bO,A.as],m):B.a([A.c.j(0.5),A.bQ.j(0.35),A.aM.j(0.55)],m),f7,f7).az(0,c5))
g1.c3(c5,n)
c6=B.M()
c6.b=A.af
c6.c=Math.max(1,c3*0.06)
c6.r=(t?A.c:A.iJ).gp(0)
p=B.a([],p)
c7=new B.aJ(s.r,A.ak,f7,f7,p)
s=b2.a
n=c3*0.35
l=s-n
k=b2.b
c8=k+c3*0.3
c7.E(new B.b_(l,c8))
for(t=c3*0.12,c9=c3*0.14,d0=-c3,d1=d0*0.05,o=0;o<6;o=d2){d2=o+1
d3=(o&1)===0?d1:t
d3=new B.aq(l+c9*d2,k+d3)
p.push(d3)
d4=c7.f
if(d4!=null)d3.aj(d4)
c7.ac()}c7.E(new B.aq(s+n,c8))
g1.af(c7,c6)
t=B.c1(b2.a6(0,new B.m(d0*0.35,d0*0.4)),c3*0.25,c3*0.45)
$.U()
s=B.M()
s.r=A.c.j(0.6).gp(0)
g1.c3(t,s)
t=h>=0
if(t){for(o=14;o>=0;--o){d5=h-o*0.008
if(d5<0)continue
d6=D.fIX(d5)
d7=j.hl(d6.a,0.06,d6.b)
d8=1-o/15
$.U()
s=new B.ar(A.V,A.R,A.X,A.Y,A.W)
s.r=A.hn.j(0.35*d8).gp(0)
g1.P(d7.a,d7.b*0.05*(0.4+0.6*d8),s)}d9=D.fIX(h)
e0=j.hl(d9.a,0.06,d9.b)
a6=e0.a
e1=e0.b*0.09
s=e1*3
$.U()
p=B.M()
p.san(new B.bW(A.z,0.5,A.w,f7,0,B.a([A.fC.j(0.7),A.aH.j(0.2),A.L],m),M.TE,f7).az(0,B.c0(a6,s)))
g1.P(a6,s,p)
p=B.M()
p.san(new B.bW(A.z,0.5,A.w,f7,0,C.dss,f7,f7).az(0,B.c0(a6,e1)))
g1.P(a6,e1,p)
q=new B.e7()
q.cW(A.h.ba(g3*20))
for(s=a6.a,p=a6.b,n=e1*0.12,o=0;o<6;++o){d8=q.ai()*3.141592653589793*2
e2=e1*(1.2+q.ai()*1.6)
l=Math.cos(d8)
k=Math.sin(d8)
c8=Math.cos(d8)
c9=Math.sin(d8)
d0=new B.ar(A.V,A.R,A.X,A.Y,A.W)
d0.c=Math.max(1,n)
d0.d=A.bH
d0.r=A.c.j(0.8).gp(0)
g1.ah(new B.m(s+l*e1,p+k*e1),new B.m(s+c8*e2,p+c9*e2),d0)}}if(g2.gdm()<90){u.restore()
return}e3=Math.min(g0,f9*0.6)
if(w<1.9){d8=A.h.D((w-0.2)/0.5,0,1)*(1-A.h.D((w-1.5)/0.4,0,1))
s=f9/2
D.SS(g1,"NGMY ELECTRONICS LAB PRESENTS",new B.m(s,g0*0.08),e3*0.035,A.hn.j(d8),0.5,f7,e3*0.006,f8,A.u)
J.bs(u.save())
u.translate(0,(1-A.cn.aA(0,A.h.D(A.h.D((w-0.4)/0.6,0,1),0,1)))*e3*0.05)
D.SS(g1,"Spark Adventure",new B.m(s,g0*0.13),e3*0.1,A.c.j(d8),0.5,B.a([A.c,A.hn],m),0,f9*0.9,A.u)
u.restore()}if(w>=1.6&&w<2.6){e4="The switch closes"
e5=1}else{e5=2
if(t&&!g){e6=D.fIX(h)
e7=e6.a
if(e6.b>0.61&&e7>0.1)e4="The resistor slows the current"
else if(e7>1.24){e4="Almost at the bulb"
e5=3}else e4="Current flows from the battery"}else if(g&&w<7.6){e4="The bulb lights up!"
e5=4}else{e4=f7
e5=0}}if(e4!=null){b7=D.a4F(e4,B.l(f7,f7,A.c,f7,f7,f7,f7,f7,"Roboto",f7,f7,A.h.bd(e3*0.045*2)/2,f7,f7,A.C,f7,f7,!0,f7,f7,f7,f7,f7,f7,f7,f7),A.aU,f7,1,1/0)
e8=e3*0.025
e9=e3*0.06
t=f9*0.05
s=g0*0.66
p=b7.b
n=p.c
p=p.a.c
l=e3*0.04
f0=B.bx(new B.a5(t,s,t+(e9+e8*3+n),s+(p.gb4(p)+e8*1.4)),new B.aQ(l,l))
l=B.M()
l.r=A.v.j(0.6).gp(0)
g1.aq(f0,l)
l=B.M()
l.b=A.af
l.c=1
l.r=A.aH.j(0.6).gp(0)
g1.aq(f0,l)
l=f0.a
p=e9/2
f1=new B.m(l+e8+p,f0.gbD().b)
s=B.M()
s.r=A.aH.gp(0)
g1.P(f1,p,s)
D.SS(g1,""+e5,f1.aI(0,new B.m(0,e9*0.38)),e9*0.6,A.bF,0.5,f7,0,f8,A.u)
s=f0.gbD()
p=b7.b.a.c
b7.a5(g1,new B.m(l+e8*2+e9,s.b-p.gb4(p)/2))}if(w>=7.6){a7=A.h.D((w-7.6)/0.4,0,1)
t=B.M()
t.r=A.v.j(0.55*a7).gp(0)
g1.aE(v,t)
f2=A.ek.aA(0,A.h.D((w-7.7)/0.5,0,1))
f3=g0*0.3
J.bs(u.save())
t=f9/2
u.translate(t,f3)
g1.bW(0,0.75+0.25*f2)
u.translate(-f9/2,-f3)
s=e3*0.1
D.SS(g1,"Build it yourself",new B.m(t,f3-e3*0.06),s,A.c.j(a7),0.5,B.a([A.c,A.hn],m),0,f9*0.9,A.u)
u.restore()
m=e3*0.05
D.SS(g1,"NGMY Electronics Lab",new B.m(t,f3+e3*0.08),m,A.ab.j(0.85*a7),0.5,f7,0,f8,A.C)
f4=A.ek.aA(0,A.h.D((w-8.1)/0.4,0,1))
if(f4>0){f5=B.bx(B.c1(new B.m(t,f3+e3*0.24),s,Math.max(f9*0.3,e3*0.55)*f4),new B.aQ(m,m))
s=B.M()
p=f5.a
n=f5.c
s.san(C.ceG.az(0,new B.a5(p,f5.b,n,f5.d)))
g1.aq(f5,s)
if(f4>0.7)D.SS(g1,"Open the Electronics Lab",new B.m(t,f5.gbD().b-e3*0.03),e3*0.045,A.c,0.5,f7,0,(n-p)*0.85,A.u)}}if(w<0.3)f6=1-w/0.3
else f6=w>9.7?(w-9.7)/0.3:0
if(f6>0){t=B.M()
t.r=A.v.j(A.h.D(f6,0,1)).gp(0)
g1.aE(v,t)}u.restore()},
fPc:function fPc(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
cZ3:function cZ3(d){var _=this
_.a=d
_.e=_.d=_.c=_.b=$},
fAs:function fAs(){},
hjU(d){var w
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
iN1(d){var w
switch(D.hjU(d)){case"lg":w=A.hL
break
case"sony":w=A.d1
break
case"apple":w=A.bP
break
case"bo":w=C.wY
break
default:w=A.aH
break}return w},
avy:function avy(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bqm:function bqm(){this.d=0
this.c=this.a=null},
f0z:function f0z(d,e){this.a=d
this.b=e},
f0A:function f0A(d,e){this.a=d
this.b=e},
f0w:function f0w(){},
f0v:function f0v(d){this.a=d},
f0x:function f0x(d){this.a=d},
f0y:function f0y(d){this.a=d},
f0t:function f0t(d){this.a=d},
f0u:function f0u(d,e){this.a=d
this.b=e},
b73:function b73(d,e,f){this.c=d
this.d=e
this.a=f},
beH:function beH(d){this.a=d},
ipt(){var w,v,u,t
try{v=$.er().gio().b
w=new B.ba(v,B.a3(v).k("ba<2>"))
if(w.a.a===0)v=2
else{J.ey(w)
v=$.ls()
u=v.d
v=u==null?v.ghw():u}return v}catch(t){return 2}},
hU2(d,e,f,g,h){var w,v,u,t,s,r,q,p,o,n,m,l,k=f.a
if(k<=0||f.b<=0)return
if($.bIT){w=d.c
J.bs(w.save())
w.clipRect(B.hS(new B.a5(0,0,0+k,0+f.b)),$.lJ()[1],!0)
h.$1(d)
w.restore()
return}v=A.h.ba(g*15)
u=$.SO.X(0,e)
w=u==null
if(w||u.a!==v){t=f.b
s=Math.max(k,t)
r=A.h.D(Math.min(4*D.ipt(),1600/s),1,64)
$.U()
q=new B.p2(new B.oD())
p=B.vc(q,null)
p.bW(0,r)
h.$1(p)
o=q.ne()
n=o.a9q(Math.max(1,A.h.S(k*r)),Math.max(1,A.h.S(t*r)))
o.t()
if(!w)u.b.t()
u=new D.bxe(v,n)}$.SO.n(0,e,u)
for(w=new B.ds($.SO,$.SO.r,$.SO.e),m=0;w.A();){t=w.d.b
m+=t.c*t.d}w=B.a3($.SO).k("cv<1>")
for(;;){t=$.SO.a
if(t>1)t=t>24||m>6e6
else t=!1
if(!t)break
l=new B.cv($.SO,w).gae(0)
if(!l.A())B.bi(B.fd())
t=$.SO.X(0,l.gO(0)).b
m-=t.c*t.d
t.t()}n=u.b
d.oq(n,new B.a5(0,0,n.c,n.d),new B.a5(0,0,0+k,0+f.b),$.i0l())},
bxe:function bxe(d,e){this.a=d
this.b=e},
i6D(d,e,f){var w=d.BYTES_PER_ELEMENT,v=(B.kB(e,f,A.n.eb(d.byteLength,w),null,null)-e)*w
if(A.n.F(v,4)!==0)throw B.Y(B.dM(y.a,null))
return J.a5s(A.ik.gaS(d),d.byteOffset+e*w,A.n.ao(v,4))},
i5y(d,e,f){var w=d.BYTES_PER_ELEMENT,v=(B.kB(e,f,A.n.eb(d.byteLength,w),null,null)-e)*w
if(A.n.F(v,4)!==0)throw B.Y(B.dM(y.a,null))
return J.aVF(A.pl.gaS(d),d.byteOffset+e*w,A.n.ao(v,4))},
hTi(){var w,v=null,u=$.U().r,t=x.v,s=new B.aJ(u,A.ak,v,v,B.a([],t))
s.E(new B.b_(0.5,0.33))
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
w=new B.aJ(u,A.ak,v,v,B.a([],t))
w.E(new B.b_(0.49,0.25))
w.E(new B.i6(0.48,0.14,0.56,0.03,0.7,0))
w.E(new B.i6(0.71,0.12,0.62,0.23,0.49,0.25))
w.E(new B.bz())
t=new B.aJ(u,A.ak,v,v,B.a([],t))
t.Ml(0,s,A.J)
t.Ml(0,w,A.J)
return t},
hVJ(d){return C.du9[A.n.D(d,0,7)]},
akh(d){return d.j(A.h.bd(d.a*16)/16)},
a4F(d,e,f,g,h,i){var w,v,u=null,t=isFinite(i),s=new B.a2G([d,e,h,g,f,t?A.h.bd(i*2)/2:-1]),r=$.aih.X(0,s)
if(r!=null){$.aih.n(0,s,r)
return r}w=B.h2(g,A.cK,u,h,u,B.cX(u,u,u,u,u,u,u,u,u,e,d),f,A.cb,u,A.e6,A.cc)
w.nM(t?A.h.bd(i*2)/2:1/0)
$.aih.n(0,s,w)
for(t=B.a3($.aih).k("cv<1>");$.aih.a>800;){v=new B.cv($.aih,t).gae(0)
if(!v.A())B.bi(B.fd())
$.aih.X(0,v.gO(0)).t()}return w}},C,N,F,V,W
J=c[1]
B=c[0]
A=c[2]
O=c[294]
L=c[126]
G=c[46]
E=c[171]
M=c[266]
P=c[272]
I=c[147]
Q=c[108]
R=c[231]
S=c[137]
H=c[45]
T=c[168]
U=c[155]
K=c[181]
D=a.updateHolder(c[33],D)
C=c[133]
N=c[49]
F=c[131]
V=c[119]
W=c[267]
D.bUJ.prototype={
bFn(d){var w=this,v=w.a
if(v!=null){v=B.bd_(w,v,"Vertices",new D.bUK(),x.J)
w.b!==$&&B.aT()
w.b=v}else{w.b!==$&&B.aT()
w.b=null}},
ga72(){if(this.c)throw B.Y(B.be("Attempted to use a disposed Vertices."))
return this.a},
t(){if(this.c)return
var w=this.b
w===$&&B.d()
if(w!=null)w.t()
this.c=!0}}
D.cIV.prototype={
a9(){return"VertexMode."+this.b}}
D.aqR.prototype={
a9(){return"NgmyAdHero."+this.b}}
D.i7.prototype={}
D.t7.prototype={}
D.b1E.prototype={}
D.Jv.prototype={
C(d){var w,v,u,t,s=null,r=B.aE(d,A.bY,x.w).w,q=B.n(24),p=this.c,o=p.e,n=B.K(o.j(0.45),A.r,1),m=B.a([new B.ac(0,A.G,o.j(0.25),A.J,30)],x.V),l=p.d,k=B.a([l,o],x.O),j=A.c.j(0.22),i=B.n(14),h=x.p
k=B.a([B.q(s,B.A(B.a([B.q(s,B.V(p.c,A.c,s,s,s,28),A.f,s,s,new B.p(j,s,s,i,s,s,A.m),s,48,s,s,s,s,s,48),A.bd,B.E(B.w(B.a([B.c(p.b,s,s,s,s,s,s,A.dw,s,s,s),A.bs,B.c(p.f+" "+p.r,s,s,s,s,s,s,B.l(s,s,A.c.j(0.85),s,s,s,s,s,s,s,s,12.5,s,s,A.O,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],h),A.B,s,A.e,A.i,0,A.p),1)],h),A.l,s,A.e,A.i,0,s,s),A.f,s,s,new B.p(s,s,s,s,s,new B.a6(A.aw,A.aD,A.w,k,s,s),A.m),s,s,s,s,A.PO,s,s,s),new B.C(K.apl,B.c(p.w,s,s,s,s,s,s,C.h_7,s,s,s),s)],h)
for(j=p.x,w=0;w<3;++w){v=j[w]
i=B.ap(l,A.v,0.4)
i.toString
k.push(new B.C(C.bK7,new B.c_(A.aJ,A.e,A.i,A.l,s,A.p,s,0,B.a([B.q(s,B.V(A.h2,i,s,s,s,14),A.f,s,s,new B.p(o,s,s,s,s,s,A.a6),s,20,s,s,s,s,s,20),A.ar,new B.bu(1,A.ba,B.c(v,s,s,s,s,s,s,A.Xv,s,s,s),s)],h),s),s))}j=o.j(0.12)
i=B.n(14)
u=B.K(o.j(0.4),A.r,1)
t=B.ap(o,A.c,0.2)
t.toString
k.push(B.q(s,B.A(B.a([B.V(A.mG,t,s,s,s,20),A.aa,B.E(B.w(B.a([C.hlS,A.bs,B.c(p.cx,s,s,s,s,s,s,A.kY,s,s,s)],h),A.B,s,A.e,A.i,0,A.p),1)],h),A.l,s,A.e,A.i,0,s,s),A.f,s,s,new B.p(j,s,u,i,s,s,A.m),s,s,C.hR8,C.bJL,A.bg,s,s,s))
i=B.E(B.eo(C.c2E,C.hRT,C.hpm,this.d,B.dj(s,s,s,s,s,s,s,s,s,A.c,s,s,A.kO,s,new B.bb(B.n(14),A.a1),K.agC,s,s,s,s)),1)
l=B.ap(l,A.v,0.5)
l.toString
k.push(new B.C(A.xk,B.A(B.a([i,A.ar,B.E(B.bI(A.aeb,C.hQc,new D.c7w(d),B.bp(o,s,s,s,l,s,A.kO,s,new B.bb(B.n(14),A.a1),s,s,s)),1)],h),A.l,s,A.e,A.i,0,s,s),s))
return B.bl(!0,B.at(new B.cO(new B.aY(0,520,0,r.a.b*0.9),B.q(s,B.cb(B.w(k,A.al,s,A.e,A.P,0,A.p),A.t,s,A.y,s,s,s,s,s,A.ah),A.ap,s,s,new B.p(A.a_u,s,n,q,m,s,A.m),s,s,C.hQK,A.tM,s,s,s,s),s),1,s,s),!0,!1,A.ag,!0,!1)}}
D.wT.prototype={}
D.yH.prototype={}
D.YA.prototype={
R(){return new D.aIE(K.Bl,null,null)}}
D.aIE.prototype={
gRE(){var w,v=this,u=v.d
if(u===$){w=B.br(null,A.p0,null,1,null,v)
w.ct(0)
v.d!==$&&B.bF()
v.d=w
u=w}return u},
gyS(){var w=this.e
return w===$?this.e=this.a.e:w},
gaU6(){var w=this.as
if(w===$)w=this.as=this.a.f?3:0
return w},
gC2(){var w=this.gRE().y
w=w==null?null:A.n.ao(w.a,1000)
return(w==null?0:w)/1000},
gazo(){var w=this.f
return w>=0&&C.iz[w].e===-1},
ahq(){var w,v,u=this
if(u.r)return null
w=u.f
if(w>=0){v=C.iz[w].e
if(v===-2)return null
if(v===-1)return A.n.F(u.ay+A.h.ba(Math.max(0,u.gC2()-u.ch)/10),14)
return v}v=C.aM9.h(0,A.n.F(u.gyS(),10))
return v==null?null:D.hVJ(v)},
cgv(d,e){if(e.a<=0||e.b<=0)return
this.l(new D.f0R(this,d,e))
H.dI(660,"",90,0,0.25,"tri")},
cgr(d){this.l(new D.f0I(this,d,14))
H.dI(900,"",40,0,0.25,"noise")},
cgt(){this.l(new D.f0Q(this))
this.Yi()},
ahs(){return this.c8o()},
c8o(){var w=0,v=B.j(x.o),u,t=this,s,r,q
var $async$ahs=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r={}
q=t.ahq()
if(q==null){w=1
break}s=t.Q
if(s!=null)s.a2(0)
t.l(t.gber())
r.a=!1
s=t.c
s.toString
w=3
return B.b(B.bU(A.L,null,new D.f0F(r,q),s,!0,!0,!0,null,!1,!1,x.o),$async$ahs)
case 3:if(t.c==null){w=1
break}if(r.a)t.cgt()
else t.Yi()
case 1:return B.h(u,v)}})
return B.i($async$ahs,v)},
Yi(){var w=this,v=w.Q
if(v!=null)v.a2(0)
w.Q=B.cD(B.dw(0,0,0,0,0,w.gaU6()>0&&w.gC2()<3.2?13:10),w.gccN())},
ccO(){var w=this
if(w.c==null)return
if(w.f<0&&!w.r){w.l(new D.f0G(w))
H.dI(900,"",40,0,0.2,"noise")}w.Yi()},
Z(){var w=this
w.a4()
w.w=B.cD(w.a.r,w.gb4g())
w.Yi()
H.dI(520,"",80,0,0.25,"tri")},
cgo(){var w=this.c
if(w!=null&&B.a7(w,!1).qn()){w=this.c
w.toString
B.a7(w,!1).N(this.gyS())}},
Cy(){var w=this.w
if(w!=null)w.a2(0)
this.w=null},
ahr(d){this.l(new D.f0D(this,d))
H.dI(900,"",40,0,0.3,"noise")},
b4i(d){this.l(new D.f0H(this,d))
H.dI(700,"",60,0,0.3,"tri")},
t(){var w,v=this
if(v.y){G.Dm(E.LH)
G.bIB()}w=v.w
if(w!=null)w.a2(0)
w=v.Q
if(w!=null)w.a2(0)
v.gRE().t()
v.bDR()},
C(d){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.y,i=!j||!l.z
j=j?B.aE(d,A.dL,x.w).w.r.b+26:10
w=l.cgu(A.cE,"Back to the board",l.gb4g())
v=l.y
u=v?S.IH:A.xy
v=v?"Leave full screen":"Full screen"
v=l.b4j(u,v,l.gcgw(),C.hRK)
u=B.n(20)
t=l.f
s=l.a
r=x.p
q=new B.C(new B.R(10,j,10,0),B.A(B.a([w,A.aa,v,A.aa,B.E(new B.bH(A.a9,k,k,B.q(k,B.c(t>=0?s.c+" \xb7 "+C.iz[t].a:s.c+" \xb7 CH "+(l.gyS()+1),k,1,A.a2,k,k,k,U.yh,k,k,k),A.f,k,k,new B.p(A.b8,k,k,u,k,k,A.m),k,k,k,k,A.lG,k,k,k),k),1)],r),A.l,k,A.e,A.i,0,k,k),k)
p=new B.ax(l.gb4h(),6,A.r,-1)
if(l.y)j=A.ahm
else{j=B.n(10)
j=new B.p(k,k,new B.bE(p,p,new B.ax(l.gb4h(),16,A.r,-1),p),j,B.a([new B.ac(0,A.G,D.iN1(l.a.d).j(0.25),A.J,40)],x.V),k,A.m)}j=B.a([B.q(k,B.bv(B.n(l.y?0:4),B.cg(new D.f0X(l,i)),A.ap),A.f,k,k,j,k,k,C.hRE,k,k,k,k,k)],r)
if(!l.y)j.push(B.ao(0,new B.dp(!0,B.at(new D.b73(l.a.d,9.92,k),k,k,k),k),16,k,0,0,k,k))
o=B.at(new B.fC(1.7777777777777777,new B.am(A.a0,k,A.b6,A.t,j,k),k),k,k,k)
j=l.y
w=!j
v=j?l.gb4k():k
if(j){j=i?1:0
r=new B.am(A.a0,k,A.b6,A.t,B.a([o,B.ao(k,B.xV(new B.dp(!i,q,k),A.b1,A.ig,j),k,k,0,0,0,k)],r),k)
j=r}else{j=l.cgs()
u=B.E(new B.C(A.fD,o,k),1)
t=A.v.j(0.65)
s=B.n(18)
n=l.f
n=B.c(n>=0?C.iz[n].a:C.U3[l.gyS()].a,k,k,k,k,k,k,A.hk,A.K,k,k)
m=l.f
j=B.w(B.a([q,A.aj,j,A.N,u,B.q(k,B.w(B.a([n,B.c(m>=0?C.iz[m].c:C.U3[l.gyS()].b,k,k,k,k,k,k,A.adE,A.K,k,k)],r),A.l,k,A.e,A.P,0,A.p),A.f,k,k,new B.p(t,k,k,s,k,k,A.m),k,k,C.hRk,A.Dn,A.bS,k,k,k)],r),A.l,k,A.e,A.i,0,A.p)}return B.c6(k,A.v,B.bl(w,B.aA(A.c0,j,A.y,!1,k,v,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,new D.f0Y(l),k,k,k,k,k,k,!1,A.a4),w,!1,A.ag,w,w),k,!1,!1,k,k)},
cgx(){var w=!this.y
this.l(new D.f0S(this,w))
if(w){G.Dm(E.ad4)
G.hvX(!0)}else{G.Dm(E.LH)
G.bIB()}},
cgy(){var w,v=this
B.jJ()
v.l(new D.f0T(v))
w=v.c.M(x.q).f
w.Np()
if(v.z)w.T(C.aXV)},
cgs(){var w=this,v=null,u=new D.f0P(),t=A.v.j(0.72),s=B.n(22),r=B.K(A.aH.j(0.5),A.r,1)
return B.q(v,B.A(B.a([u.$3(A.xD,"CH \u2212",new D.f0K(w)),u.$3(A.ii,"CH +",new D.f0L(w)),u.$5$color$on(A.IM,"TV",new D.f0M(w),A.aH,w.f<0),u.$5$color$on(A.A6,"APPS",new D.f0N(w),A.bk,w.r),u.$5$color$on(A.Aa,"ADS",new D.f0O(w),A.c6,w.f===0)],x.p),A.l,v,A.e,A.P,0,v,v),A.f,v,v,new B.p(t,v,r,s,v,v,A.m),v,v,v,v,A.Ia,v,v,v)},
bJx(){return new D.avy(this.a.d,this.gcgq(),new D.f0C(this),null)},
gb4h(){switch(D.hjU(this.a.d)){case"apple":var w=A.d1
break
case"bo":w=C.Cz
break
case"sony":w=C.bk9
break
case"lg":w=A.eD
break
default:w=A.cx
break}return w},
b4j(d,e,f,g){var w=null,v=B.nu(w,A.b8,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w)
return B.aI(w,w,w,w,B.V(d,A.c,w,w,w,w),w,w,g,f,w,w,w,v,e,w)},
cgu(d,e,f){return this.b4j(d,e,f,null)}}
D.bAB.prototype={
a5(d,e){var w=this
return D.haj(d,e,w.b,w.d,w.e,w.c,w.r,w.f)},
aC(d){return!0}}
D.aQH.prototype={
t(){var w=this,v=w.ab$
if(v!=null)v.a8(0,w.gbE())
w.ab$=null
w.a3()},
b0(){this.b8()
this.b6()
this.bF()}}
D.cZ3.prototype={
hl(d,e,f){var w,v,u,t,s,r,q=this,p=q.b
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
D.avy.prototype={
R(){return new D.bqm()},
a8C(d,e){return this.d.$1(e)}}
D.bqm.prototype={
b4l(d){this.l(new D.f0z(this,d))
this.a.a8C(0,d)},
C(d){var w,v=this
switch(D.hjU(v.a.c)){case"lg":w=v.c8F()
break
case"sony":w=v.cGY()
break
case"apple":w=v.cgz()
break
case"bo":w=v.bKv()
break
default:w=v.cB0()
break}return w},
gaht(){var w=new B.W(Date.now(),0,!1)
return A.a.aY(A.n.v(B.cY(w)),2,"0")+":"+A.a.aY(A.n.v(B.fy(w)),2,"0")},
aBz(d,e,f,g,h,i,j){var w,v,u=null,t=C.iz[d],s=this.d===d,r=t.d,q=B.ap(r,A.v,0.55)
q.toString
q=B.a([r,q],x.O)
r=B.n(h)
if(s)w=i
else w=A.L
w=B.K(w,A.r,s?2.5:0)
v=B.a([B.c(t.b,u,u,u,u,u,u,B.l(u,u,u,u,u,u,u,u,u,u,u,e,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],x.p)
if(g)v.push(new B.C(A.tJ,B.c(t.a,u,1,A.a2,u,u,u,A.XE,u,u,u),u))
return B.aA(u,B.q(u,B.w(v,A.l,u,A.bc,A.i,0,A.p),A.f,u,u,new B.p(u,u,w,r,u,new B.a6(A.aw,A.aD,A.w,q,u,u),A.m),u,f,u,u,u,u,u,j),A.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new D.f0A(this,d),u,u,u,u,u,u,!1,A.a4)},
b4m(d,e,f,g,h,i){return this.aBz(d,e,f,!1,g,h,i)},
cB0(){var w,v,u,t,s,r,q=this,p=null,o=q.a.e,n=x.p,m=B.A(B.a([C.hbo,A.aa,C.h35,A.aY,C.c6q,A.aa,C.c1T,A.aa,B.c(q.gaht(),p,p,p,p,p,p,C.b_h,p,p,p)],n),A.l,p,A.e,A.i,0,p,p),l=C.iz[q.d],k=B.c(l.a,p,p,p,p,p,p,A.kY,p,p,p)
l=B.c(l.c,p,1,A.a2,p,p,p,C.fV7,p,p,p)
w=A.c.j(0.08)
v=B.a([],n)
for(u=0;u<2;++u){t=new B.aQ(8,8)
v.push(B.q(p,B.V(C.cBI[u],A.ab,p,p,p,17),A.f,p,p,new B.p(A.by,p,p,new B.bc(t,t,t,t),p,p,A.m),p,34,p,A.Pw,p,p,p,34))}t=B.a([],n)
for(s=0;s<8;++s){r=q.d===s?1.12:1
t.push(new B.C(A.Pw,new B.zM(q.aBz(s,14,44,!0,8,A.aH,52),r,A.b1,A.hd,p,p),p))}v.push(B.E(B.cb(B.A(t,A.l,p,A.e,A.i,0,p,p),A.t,p,A.y,p,p,p,p,p,A.aJ),1))
return B.aA(p,B.q(p,B.w(B.a([m,A.aY,new B.bH(A.a5,p,p,k,p),new B.bH(A.a5,p,p,l,p),A.aj,B.q(p,B.A(v,A.l,p,A.e,A.i,0,p,p),A.f,p,p,new B.p(w,p,p,A.Zp,p,p,A.m),p,p,p,p,Q.PW,p,p,p)],n),A.l,p,A.e,A.i,0,A.p),A.f,p,p,C.bbK,p,p,p,p,E.aog,p,p,p),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,o,p,p,p,p,p,p,!1,A.a4)},
c8F(){var w=null,v=this.a.e,u=x.p
return B.aA(w,B.q(w,B.w(B.a([B.A(B.a([B.q(w,C.hhD,A.f,w,w,new B.p(A.hL,w,w,B.n(10),w,w,A.m),w,w,w,w,A.nq,w,w,w),A.b7,C.hag,A.aY,B.c(this.gaht(),w,w,w,w,w,w,A.FQ,w,w,w)],u),A.l,w,A.e,A.i,0,w,w),A.aY,new B.a4(w,62,B.hO(A.t,w,new D.f0v(this),8,w,w,A.aJ,new D.f0w(),!1),w)],u),A.B,w,A.e,A.i,0,A.p),A.f,w,w,C.bbV,w,w,w,w,O.PC,w,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,v,w,w,w,w,w,w,!1,A.a4)},
cGY(){var w,v,u,t,s=this,r=null,q=C.iz[s.d],p=s.a.e,o=x.p,n=B.a([B.q(r,C.fxp,A.f,r,r,new B.p(A.dA,r,r,B.n(12),r,r,A.m),r,r,r,r,A.zP,r,r,r),A.aa],o)
for(w=0;w<3;++w){v=C.dAa[w]
u=v==="Apps"?A.c:A.aE
n.push(new B.C(A.i3,B.c(v,r,r,r,r,r,r,new B.H(!0,u,r,r,r,r,9.5,A.O,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r),r,r,r),r))}n.push(A.aY)
n.push(B.c(s.gaht(),r,r,r,r,r,r,C.fUt,r,r,r))
n=B.A(n,A.l,r,A.e,A.i,0,r,r)
u=q.d
t=B.ap(u,A.v,0.7)
t.toString
t=B.a([u,t],x.O)
u=B.n(10)
return B.aA(r,B.q(r,B.w(B.a([n,A.fT,B.E(B.A(B.a([B.E(B.q(r,B.w(B.a([B.c(q.b,r,r,r,r,r,r,A.qE,r,r,r),B.c(q.a,r,r,r,r,r,r,A.oA,r,r,r),B.c(q.c,r,2,A.a2,r,r,r,C.h0l,r,r,r),A.cR,B.aA(r,B.q(r,C.h6Y,A.f,r,r,new B.p(A.c,r,r,B.n(10),r,r,A.m),r,r,r,r,A.zP,r,r,r),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new D.f0x(s),r,r,r,r,r,r,!1,A.a4)],o),A.B,r,A.mO,A.i,0,A.p),A.f,r,r,new B.p(r,r,r,u,r,new B.a6(A.a5,A.a9,A.w,t,r,r),A.m),r,r,r,r,A.ct,r,r,r),5),A.aa,B.E(B.ie(!0,r,r,A.y,C.fEA,new D.f0y(s),8,A.ag,r,A.ah,!1),6)],o),A.l,r,A.e,A.i,0,r,r),1)],o),A.B,r,A.e,A.i,0,A.p),A.f,C.bxm,r,r,r,r,r,r,A.h0,r,r,r),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,p,r,r,r,r,r,r,!1,A.a4)},
cgz(){var w,v,u,t,s=this,r=null,q=s.a.e,p=x.p,o=B.A(B.a([C.c73,A.pv,C.ho2,A.aY,B.c(s.gaht(),r,r,r,r,r,r,A.FS,r,r,r)],p),A.l,r,A.e,A.i,0,r,r),n=B.a([],p)
for(w=0;w<8;++w){v=s.d===w
u=v?6:0
t=v?C.dGI:A.Ud
v=v?1.18:1
n.push(new B.C(A.fd,B.cZ(r,new B.zM(s.b4m(w,20,44,12,A.c,44),v,A.b1,A.eN,r,r),r,r,A.b1,new B.p(r,r,r,r,t,r,A.m),A.eN,r,r,r,new B.R(0,0,0,u),r,r,r,r),r))}return B.aA(r,B.q(r,B.w(B.a([o,A.aY,new B.a4(r,68,B.cb(B.A(n,A.dr,r,A.e,A.i,0,r,r),A.t,r,A.y,r,r,r,r,r,A.aJ),r),A.at,B.c(C.iz[s.d].a,r,r,r,r,r,r,A.pA,r,r,r)],p),A.l,r,A.e,A.i,0,A.p),A.f,r,r,C.bbM,r,r,r,r,C.aoh,r,r,r),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,!1,A.a4)},
bKv(){var w,v,u,t,s,r,q=this,p=null,o=q.a.e,n=C.iz[q.d],m=x.p
n=B.E(B.w(B.a([C.h6v,A.aY,B.c(n.b,p,p,p,p,p,p,A.mX,p,p,p),A.at,B.c(n.a,p,p,p,p,p,p,C.fMb,p,p,p),A.bs,B.c(n.c,p,p,p,p,p,p,C.h0F,p,p,p),A.aj,B.aA(p,B.q(p,C.hqh,A.f,p,p,C.bch,p,p,p,p,C.bG8,p,p,p),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new D.f0t(q),p,p,p,p,p,p,!1,A.a4),A.aY],m),A.B,p,A.e,A.i,0,A.p),4)
w=B.q(p,p,A.f,C.bv_,p,p,p,p,p,A.eG,p,p,p,0.6)
v=B.a([],m)
for(u=0;u<8;++u){t=C.iz[u]
s=q.d===u
r=s?C.wY:C.aiT
s=s?12:10.5
v.push(B.aA(p,new B.C(A.vl,B.c(t.a,p,p,p,p,p,p,new B.H(!0,r,p,"serif",p,p,s,A.k_,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p),p,p,p),p),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new D.f0u(q,u),p,p,p,p,p,p,!1,A.a4))}return B.aA(p,B.q(p,B.A(B.a([n,w,B.E(B.ck(v,p,p,p,p,p,A.ah,!1),3)],m),A.l,p,A.e,A.i,0,p,p),A.f,C.bBi,p,p,p,p,p,p,A.I3,p,p,p),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,o,p,p,p,p,p,p,!1,A.a4)}}
D.b73.prototype={
C(d){var w,v,u=null,t=D.hjU(this.c)
if(t==="apple"){w=this.d
return new B.a4(w/1.1,w,B.b5(u,u,u,new D.beH(u),A.az),C.hQl)}switch(t){case"lg":w=C.aV3
break
case"sony":w=C.aUS
break
case"bo":w=C.aUU
break
default:w=C.f86
break}v=this.d
return B.c(w.a,C.hQ7,u,u,u,u,u,B.l(u,u,w.b,u,u,u,u,u,u,u,u,v*0.82,u,u,A.C,u,1,!0,u,v*0.08,u,u,u,u,u,u),u,u,u)}}
D.beH.prototype={
a5(d,e){var w,v
d.nY(0,e.a,e.b/1.1)
w=D.hTi()
$.U()
v=B.M()
v.r=A.cU.gp(0)
d.af(w,v)},
aC(d){return!1}}
D.bxe.prototype={}
var z=a.updateTypes(["~()","YA(Z,bA<G>,bA<G>)","az<~>()","~(F)","Jv(Z)"])
D.bUK.prototype={
$1(d){d.a.delete()
return null},
$S:1683}
D.fPd.prototype={
$1(d){var w,v,u,t=this,s=t.a
if(s==null)s=null
else{w=t.b
v=t.d
u=w.a-t.c*A.h.D(v,0,4000)
w=w.b
w=new B.a6(A.a5,A.a9,A.w,s,null,null).az(0,new B.a5(u,w,u+A.h.D(v,1,4000),w+d))
s=w}return s},
$S:1684}
D.fIV.prototype={
$1(d){return","},
$S:58}
D.fDT.prototype={
$2(d,e){var w,v=this,u=v.a,t=u.c
J.bs(t.save())
w=v.b
t.translate(w.a,w.b)
u.aA(0,D.hto(v.c*3,v.d,-0.12,d).a)
e.$0()
t.restore()},
$S:1685}
D.fDU.prototype={
$0(){var w=this.a
w.nY(0,-1,1)
D.fDS(w,this.b,this.c,!0)},
$S:0}
D.fDV.prototype={
$0(){return this.a.af(this.b,this.c)},
$S:0}
D.fDW.prototype={
$0(){var w,v,u,t,s=this,r=s.a,q=s.c
D.fDS(r,s.b,q,!1)
w=s.d
if(w>0&&w<1){r.mN(0,s.e)
v=-q
w=v*3+w*q*6-q*0.5
v*=2
u=w+q
$.U()
t=B.M()
t.san(new B.a6(A.a5,A.a9,A.w,B.a([A.c.j(0),A.c.j(0.45),A.c.j(0)],x.O),null,null).az(0,new B.a5(w,0,u,1)))
r.aE(new B.a5(w,v,u,v+q*4),t)}},
$S:0}
D.fDX.prototype={
$0(){return D.fDS(this.a,this.b,this.c,!1)},
$S:0}
D.fDY.prototype={
$0(){return this.a.af(this.b,this.c)},
$S:0}
D.fDZ.prototype={
$0(){var w=this.a
w.nY(0,-1,1)
D.fDS(w,this.b,this.c,!0)},
$S:0}
D.ha8.prototype={
$1(d){var w=this,v=w.b
d.bW(0,1/v)
D.hxp(d,new B.av(w.c*v,w.d*v),w.e,w.a.a,w.f,null)},
$S:338}
D.ha9.prototype={
$0(){var w=this,v=w.e
return D.mD(w.a,w.b.b.toUpperCase(),new B.m(w.c,w.d),v*0.036,w.f,w.w,null,v*0.006,w.r,A.u)},
$S:0}
D.haa.prototype={
$0(){var w=this,v=w.e
return D.mD(w.a,w.b.f,new B.m(w.c,w.d),v,A.c,w.r,null,-v*0.02,w.f,A.u)},
$S:0}
D.hab.prototype={
$0(){var w=this,v=w.b,u=w.e,t=B.ap(v.e,A.c,0.35)
t.toString
return D.mD(w.a,v.r,new B.m(w.c,w.d),u,A.c,w.r,B.a([A.c,t],x.O),-u*0.02,w.f,A.u)},
$S:0}
D.hac.prototype={
$0(){var w=this,v=w.e
return D.mD(w.a,w.b.b.toUpperCase(),new B.m(w.c,w.d),v*0.036,w.f,w.w,null,v*0.006,w.r,A.u)},
$S:0}
D.had.prototype={
$0(){var w=this,v=w.e
return D.mD(w.a,w.b.b.toUpperCase(),new B.m(w.c,w.d),v*0.036,w.f,w.w,null,v*0.006,w.r,A.u)},
$S:0}
D.c7w.prototype={
$0(){return B.a7(this.a,!1).dY()},
$S:0}
D.fP5.prototype={
$1(d){var w=null,v=B.h2(w,A.cK,w,1,w,B.cX(w,w,w,w,w,w,w,w,w,B.l(w,w,this.b,w,w,w,w,w,w,w,w,d,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),this.a),A.a8,A.cb,w,A.e6,A.cc)
v.eL()
return v},
$S:339}
D.ha7.prototype={
$1(d){var w=this.b,v=B.l1(this.a,w,d)
v.toString
w=B.l1(w,this.c,d)
w.toString
w=B.l1(v,w,d)
w.toString
return w},
$S:1688}
D.fFs.prototype={
$1(d){var w=null,v=D.akh(this.b),u=A.h.bd(d*2)
return D.a4F(this.a,B.l(w,w,v,w,w,w,w,w,w,w,w,u/2,w,w,A.u,w,w,!0,w,this.d,w,w,w,w,w,w),A.aU,w,1,1/0)},
$S:339}
D.hak.prototype={
$1(d){var w,v=this,u=v.a
d.bW(0,1/u)
w=v.b
D.haj(d,new B.av(w.a*u,w.b*u),v.c,v.d,v.e,v.f,v.w,v.r)},
$S:338}
D.fD4.prototype={
$1(d){var w=this,v=null,u=D.akh(w.b),t=A.h.bd(d*2),s=w.c?A.u:A.O
return D.a4F(w.a,B.l(v,v,u,v,v,v,v,v,v,v,v,t/2,v,v,s,v,v,!0,v,w.d,v,v,v,v,v,v),A.aU,v,1,1/0)},
$S:339}
D.fPy.prototype={
$2(d,e){return A.h.D((this.a-d)/e,0,1)},
$S:83}
D.fPu.prototype={
$1(d){return A.dS.aA(0,d)},
$S:5}
D.fPx.prototype={
$2(d,e){var w=this.b
return new B.m(this.a+d*w,e*w)},
$S:409}
D.fPv.prototype={
$5(d,e,f,g,h){var w,v,u,t,s,r,q,p=this,o=p.a.$2(h,0.6)
if(o<=0)return
w=p.b
v=w.c
J.bs(v.save())
v.translate(f.a,f.b)
w.bW(0,A.h.D(A.n4.aA(0,o),0.01,1.3))
u=p.c
N.hxo(w,A.J,g,d,u,p.d>9.5?0.5+0.3*Math.sin(u*3+d):0)
u=new B.m(0,g*1.42)
t=B.c1(u,g*0.62,g*2.5)
s=g*0.31
r=B.bx(t,new B.aQ(s,s))
$.U()
q=B.M()
q.r=A.c.gp(0)
w.aq(r,q)
w.aq(B.bx(t,new B.aQ(s,s)),N.aiO(A.bE,g*0.05))
D.ixM(w,"\u2665 "+e,u,g*0.4,A.qT,g*2.2)
v.restore()},
$S:1689}
D.fPw.prototype={
$3(d,e,f){var w,v,u,t,s=this.a.$2(f,0.5)
if(s<=0)return
w=A.h.D(A.n4.aA(0,s),0.01,1.3)*(1+0.07*Math.sin(this.b*6))
v=this.c
u=e*w
$.U()
t=B.M()
t.r=A.bE.gp(0)
v.P(d,u,t)
t=B.M()
t.b=A.af
t.c=2
t.r=A.c.gp(0)
v.P(d,u,t)
D.aT8(v,"\u2665",d.aI(0,new B.m(e*0.5*w,e*0.62*w)),e*1.3*w,A.c,A.aU,0,null)},
$S:437}
D.fPz.prototype={
$2(d,e){var w,v,u=this.a,t=u.a
u=u.c-t
t+=u*0.08
w=this.b
v=w*d
return new B.a5(t,v,t+u*0.84,v+w*e)},
$S:1691}
D.hiT.prototype={
$3(d,e,f){var w=this
return new D.YA(w.d,w.e,w.a,w.c,w.b,null)},
$C:"$3",
$R:3,
$S:z+1}
D.hiU.prototype={
$4(d,e,f,g){var w=x.t
return new B.df(e,!1,B.iF(A.z,g,null,new B.bk(B.cN(A.cn,e,null),new B.bq(0.85,1,w),w.k("bk<bT.T>"))),null)},
$C:"$4",
$R:4,
$S:34}
D.f0R.prototype={
$0(){var w=this.a,v=this.b,u=this.c
w.ax=new B.m(v.a/u.a,v.b/u.b)
w.at=w.gC2()
w.Cy()},
$S:0}
D.f0I.prototype={
$0(){var w,v=this.a
v.f=0
v.r=!1
w=this.c
v.ay=A.n.F(A.n.F(this.b,w)+w,w)
v.ch=v.gC2()
v.Cy()},
$S:0}
D.f0Q.prototype={
$0(){var w,v=this.a
if(v.gazo()){w=v.ahq()
v.ay=w==null?v.ay:w
v.ch=v.gC2()}else{v.as=v.gC2()
v.x=Math.max(1,v.x)}v.Cy()},
$S:0}
D.f0F.prototype={
$1(d){return new D.Jv(C.Tz[this.b],new D.f0E(this.a,d),null)},
$S:z+4}
D.f0E.prototype={
$0(){this.a.a=!0
B.a7(this.b,!1).dY()},
$S:0}
D.f0G.prototype={
$0(){var w,v=this.a
v.e=A.n.F(v.gyS()+1,10)
w=v.gRE().y
w=w==null?null:A.n.ao(w.a,1000)
v.x=w==null?1:w
v.as=v.gC2()},
$S:0}
D.f0D.prototype={
$0(){var w,v=this.a
v.f=-1
v.e=A.n.F(v.gyS()+this.b,10)
if(v.gyS()<0)v.e=v.gyS()+10
w=v.gRE().y
w=w==null?null:A.n.ao(w.a,1000)
v.x=w==null?1:w
v.as=v.gC2()
v.Yi()
v.Cy()},
$S:0}
D.f0H.prototype={
$0(){var w=this.a
w.f=this.b
w.r=!1
w.ay=0
w.ch=w.gC2()
w.Cy()},
$S:0}
D.f0X.prototype={
$2(d,e){var w,v,u=null,t=e.d*0.14,s=A.h.D(t*0.62,18,30),r=this.a,q=r.y?r.gb4k():u,p=x.p
q=B.a([B.aA(A.c0,B.ca(r.gRE(),new D.f0U(r),u),A.y,!1,C.hRJ,q,u,u,u,new D.f0V(r),u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new D.f0W(r,e),u,u,u,!1,A.a4)],p)
if(r.r)q.push(r.bJx())
if(this.b&&!r.r&&r.ahq()!=null){w=A.c.j(0.92)
v=s*0.42
q.push(B.ao(t/2-s/2,B.aF(!1,A.a3,!0,u,B.aN(!1,u,!0,new B.C(new B.R(v,0,v,0),B.A(B.a([B.V(A.kR,A.ax,u,u,u,s*0.55),new B.a4(s*0.18,u,u,u),B.c("Learn more",u,u,u,u,u,u,B.l(u,u,A.ax,u,u,u,u,u,u,u,u,s*0.44,u,u,A.C,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],p),A.l,u,A.e,A.P,0,u,u),u),A.nD,!0,u,u,u,u,C.hRr,u,u,u,u,u,u,r.gcgp(),u,u,u,u,u,u,u),A.f,w,0,u,u,A.nD,u,u,A.ai),s,u,u,t*0.3,u,u))}return new B.am(A.a0,u,A.b6,A.t,q,u)},
$S:63}
D.f0W.prototype={
$1(d){var w=this.b
return this.a.cgv(d.b,new B.av(B.aU(1/0,w.a,w.b),B.aU(1/0,w.c,w.d)))},
$S:55}
D.f0V.prototype={
$1(d){var w,v,u,t=d.d
if(t==null)t=0
if(Math.abs(t)>120){w=this.a
v=t<0?1:-1
if(w.gazo()){u=w.ahq()
w.cgr((u==null?0:u)+v)}else w.ahr(v)}},
$S:38}
D.f0U.prototype={
$2(d,e){var w,v,u,t,s,r=null,q=this.a,p=q.gRE().y,o=p==null?r:A.n.ao(p.a,1000),n=(o==null?0:o)/1000,m=q.x===0&&q.a.f?n:99
p=n-q.at
w=p<1.4?new D.b1E(q.ax,p):r
v=q.gazo()
u=Math.max(0,n-q.ch)
t=v?A.n.F(q.ay+A.h.ba(u/10),14):r
if(v)s=u
else s=m<3?n:Math.max(0,n-q.gaU6())
return B.b5(r,r,r,new D.bAB(q.gyS(),q.f,s,m,w,t,r),A.hi)},
$S:52}
D.f0Y.prototype={
$0(){var w=this.a
return w.l(w.gber())},
$S:0}
D.f0S.prototype={
$0(){var w=this.a
w.y=this.b
w.z=!1
w.Cy()},
$S:0}
D.f0T.prototype={
$0(){var w=this.a
w.z=!w.z
w.Cy()},
$S:0}
D.f0P.prototype={
$5$color$on(d,e,f,g,h){var w=null,v=h?g.j(0.28):A.c.j(0.08),u=B.n(14),t=B.K(h?g:A.aT,A.r,1)
return B.aA(w,B.q(w,B.w(B.a([B.V(d,g,w,w,w,20),A.rX,B.c(e,w,w,w,w,w,w,B.l(w,w,g,w,w,w,w,w,w,w,w,9.5,w,w,A.C,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.l,w,A.e,A.P,0,A.p),A.f,w,w,new B.p(v,w,t,u,w,w,A.m),w,w,w,A.jk,A.jZ,w,w,56),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,!1,A.a4)},
$3(d,e,f){return this.$5$color$on(d,e,f,A.c,!1)},
$4$color(d,e,f,g){return this.$5$color$on(d,e,f,g,!1)},
$S:601}
D.f0K.prototype={
$0(){return this.a.ahr(-1)},
$S:0}
D.f0L.prototype={
$0(){return this.a.ahr(1)},
$S:0}
D.f0M.prototype={
$0(){return this.a.ahr(0)},
$S:0}
D.f0N.prototype={
$0(){var w=this.a
return w.l(new D.f0J(w))},
$S:0}
D.f0J.prototype={
$0(){var w=this.a
w.r=!w.r
w.Cy()},
$S:0}
D.f0O.prototype={
$0(){return this.a.b4i(0)},
$S:0}
D.f0C.prototype={
$0(){var w=this.a
return w.l(new D.f0B(w))},
$S:0}
D.f0B.prototype={
$0(){return this.a.r=!1},
$S:0}
D.fPc.prototype={
$1(d){var w,v,u,t,s=this,r=null,q=s.a,p=s.b,o=s.c,n=s.d
if(q==null){q=A.h.bd(d*2)
n=D.a4F(p,B.l(r,r,D.akh(s.e),r,r,r,r,r,"Roboto",r,r,q/2,r,r,o,r,1.1,!0,r,n,r,r,r,r,r,r),A.aU,r,1,1/0)
q=n}else{$.U()
w=B.M()
v=s.f
u=s.w
t=v.a-s.r*A.h.D(u,0,4000)
v=v.b
w.san(new B.a6(A.a5,A.a9,A.w,q,r,r).az(0,new B.a5(t,v,t+A.h.D(u,1,4000),v+d)))
p=B.h2(r,A.cK,r,1,r,B.cX(r,r,r,r,r,r,r,r,r,B.l(r,r,r,r,r,r,r,r,"Roboto",r,r,d,r,r,o,w,1.1,!0,r,n,r,r,r,r,r,r),p),A.a8,A.cb,r,A.e6,A.cc)
q=p}q.eL()
return q},
$S:339}
D.fAs.prototype={
$1(d){var w=new B.aJ($.U().r,A.ak,null,null,B.a([],x.v)),v=B.B(d,x.H)
w.E(new B.zL(v,!0))
return w},
$S:1693}
D.f0z.prototype={
$0(){return this.a.d=this.b},
$S:0}
D.f0A.prototype={
$0(){return this.a.b4l(this.b)},
$S:0}
D.f0w.prototype={
$2(d,e){return A.b7},
$S:37}
D.f0v.prototype={
$2(d,e){var w=null,v=this.a,u=v.d===e?1.1:1
u=B.a([B.v6(v.b4m(e,18,46,6,A.c,80),A.b1,A.hd,u)],x.p)
if(v.d===e)u.push(new B.C(A.tJ,B.c(C.iz[e].a,w,w,w,w,w,w,C.fZI,w,w,w),w))
return B.w(u,A.l,w,A.e,A.P,0,A.p)},
$S:600}
D.f0x.prototype={
$0(){var w=this.a
return w.a.a8C(0,w.d)},
$S:0}
D.f0y.prototype={
$2(d,e){return this.a.aBz(e,15,1/0,!0,8,A.c,1/0)},
$S:42}
D.f0t.prototype={
$0(){var w=this.a
return w.a.a8C(0,w.d)},
$S:0}
D.f0u.prototype={
$0(){return this.a.b4l(this.b)},
$S:0};(function aliases(){var w=D.aQH.prototype
w.bDR=w.t})();(function installTearOffs(){var w=a._instance_0u,v=a._instance_1u
var u
w(u=D.aIE.prototype,"gcgp","ahs",2)
w(u,"gccN","ccO",0)
w(u,"gb4g","cgo",0)
w(u,"gber","Cy",0)
v(u,"gcgq","b4i",3)
w(u,"gcgw","cgx",0)
w(u,"gb4k","cgy",0)})();(function inheritance(){var w=a.mixinHard,v=a.inheritMany,u=a.inherit
v(B.aH,[D.bUJ,D.i7,D.t7,D.b1E,D.wT,D.yH,D.cZ3,D.bxe])
v(B.hr,[D.bUK,D.fPd,D.fIV,D.ha8,D.fP5,D.ha7,D.fFs,D.hak,D.fD4,D.fPu,D.fPv,D.fPw,D.hiT,D.hiU,D.f0F,D.f0W,D.f0V,D.f0P,D.fPc,D.fAs])
v(B.ln,[D.cIV,D.aqR])
v(B.j1,[D.fDT,D.fPy,D.fPx,D.fPz,D.f0X,D.f0U,D.f0w,D.f0v,D.f0y])
v(B.j0,[D.fDU,D.fDV,D.fDW,D.fDX,D.fDY,D.fDZ,D.ha9,D.haa,D.hab,D.hac,D.had,D.c7w,D.f0R,D.f0I,D.f0Q,D.f0E,D.f0G,D.f0D,D.f0H,D.f0Y,D.f0S,D.f0T,D.f0K,D.f0L,D.f0M,D.f0N,D.f0J,D.f0O,D.f0C,D.f0B,D.f0z,D.f0A,D.f0x,D.f0t,D.f0u])
v(B.aw,[D.Jv,D.b73])
v(B.af,[D.YA,D.avy])
v(B.ai,[D.aQH,D.bqm])
u(D.aIE,D.aQH)
v(B.lR,[D.bAB,D.beH])
w(D.aQH,B.cm)})()
B.jj(b.typeUniverse,JSON.parse('{"Jv":{"aw":[],"x":[]},"YA":{"af":[],"x":[]},"aIE":{"ai":["YA"]},"bAB":{"aC":[]},"avy":{"af":[],"x":[]},"bqm":{"ai":["avy"]},"b73":{"aw":[],"x":[]},"beH":{"aC":[]},"OZ":{"af":[],"x":[]}}'))
var y={a:"The number of bytes to view must be a multiple of 4"}
var x=(function rtii(){var w=B.as
return{J:w("bMG"),V:w("N<ac>"),O:w("N<u>"),X:w("N<i7>"),g:w("N<m>"),v:w("N<h1>"),s:w("N<o>"),p:w("N<x>"),n:w("N<G>"),w:w("iq"),H:w("m"),Q:w("dn<G>"),t:w("bq<G>"),W:w("b9<o>"),q:w("l6"),S:w("F"),o:w("~")}})();(function constants(){var w=a.makeConstList
C.b6V=new B.dl(0.35,-0.25)
C.b8x=new B.Ew(2,"dst")
C.aj9=new B.u(1,0.0196078431372549,0.03137254901960784,0.058823529411764705,A.q)
C.bzd=new B.u(1,0.043137254901960784,0.10196078431372549,0.2,A.q)
C.dwi=w([C.aj9,C.bzd],x.O)
C.cfO=new B.a6(A.aW,A.b0,A.w,C.dwi,null,null)
C.bbK=new B.p(null,null,null,null,null,C.cfO,A.m)
C.bwG=new B.u(1,0.42745098039215684,0.47843137254901963,0.5764705882352941,A.q)
C.bkC=new B.u(1,0.16862745098039217,0.1803921568627451,0.26666666666666666,A.q)
C.blS=new B.u(1,0.4823529411764706,0.29411764705882354,0.41568627450980394,A.q)
C.dKs=w([C.bwG,C.bkC,C.blS],x.O)
C.ce2=new B.a6(A.aw,A.aD,A.w,C.dKs,null,null)
C.bbM=new B.p(null,null,null,null,null,C.ce2,A.m)
C.b6Y=new B.dl(0.5,-0.6)
C.bAE=new B.u(1,0.22745098039215686,0.054901960784313725,0.10980392156862745,A.q)
C.dqK=w([C.bAE,A.eD],x.O)
C.eTa=new B.bW(C.b6Y,1.3,A.w,null,0,C.dqK,null,null)
C.bbV=new B.p(null,null,null,null,null,C.eTa,A.m)
C.wY=new B.u(1,0.8392156862745098,0.7176470588235294,0.4823529411764706,A.q)
C.ba2=new B.ax(C.wY,1,A.r,-1)
C.baf=new B.bE(A.a1,A.a1,C.ba2,A.a1)
C.bch=new B.p(null,null,C.baf,null,null,null,A.m)
C.bjz=new B.u(1,0.027450980392156862,0.03137254901960784,0.047058823529411764,A.q)
C.a_7=new B.u(0.9490196078431372,0.06666666666666667,0.07450980392156863,0.09411764705882353,A.q)
C.bk9=new B.u(1,0.16470588235294117,0.16470588235294117,0.17647058823529413,A.q)
C.ait=new B.u(1,0.6039215686274509,0.4196078431372549,0.07058823529411765,A.q)
C.NG=new B.u(1,0.16862745098039217,0.1843137254901961,0.21176470588235294,A.q)
C.a_a=new B.u(1,0.00784313725490196,0.01568627450980392,0.03529411764705882,A.q)
C.aiI=new B.u(1,0.5411764705882353,0.42745098039215684,0.06274509803921569,A.q)
C.aiT=new B.u(1,0.6588235294117647,0.6235294117647059,0.5647058823529412,A.q)
C.NO=new B.u(1,0.24705882352941178,0.5607843137254902,0.30196078431372547,A.q)
C.Cz=new B.u(1,0.7215686274509804,0.6980392156862745,0.6549019607843137,A.q)
C.ajl=new B.u(1,0.7215686274509804,0.45098039215686275,0.2,A.q)
C.bnK=new B.u(1,0.47843137254901963,0.3058823529411765,0.0196078431372549,A.q)
C.bpn=new B.u(1,0.01568627450980392,0.0196078431372549,0.0392156862745098,A.q)
C.O4=new B.u(1,1,0.23137254901960785,0.12156862745098039,A.q)
C.ajZ=new B.u(1,0.00784313725490196,0.011764705882352941,0.0392156862745098,A.q)
C.Oa=new B.u(1,0.7215686274509804,0.7529411764705882,0.8,A.q)
C.zb=new B.u(1,0.06666666666666667,0.0784313725490196,0.09411764705882353,A.q)
C.nW=new B.u(1,0.054901960784313725,0.07058823529411765,0.09411764705882353,A.q)
C.btS=new B.u(1,0.5411764705882353,0.41568627450980394,0.06274509803921569,A.q)
C.bv_=new B.u(1,0.2901960784313726,0.26666666666666666,0.23529411764705882,A.q)
C.bv3=new B.u(1,0.0196078431372549,0.18823529411764706,0.12156862745098039,A.q)
C.j2=new B.u(1,0.043137254901960784,0.12156862745098039,0.29411764705882354,A.q)
C.bvt=new B.u(1,0.054901960784313725,0.07058823529411765,0.13333333333333333,A.q)
C.nj=new B.u(1,0.09019607843137255,0.09019607843137255,0.10980392156862745,A.q)
C.bxi=new B.u(1,0.1843137254901961,0.43529411764705883,0.23137254901960785,A.q)
C.bxm=new B.u(1,0.08627450980392157,0.09411764705882353,0.10980392156862745,A.q)
C.bz6=new B.u(1,0.9058823529411765,0.8235294117647058,0.6509803921568628,A.q)
C.a17=new B.u(1,1,0.9529411764705882,0.6274509803921569,A.q)
C.an5=new B.u(1,0.9607843137254902,0.7686274509803922,0.6039215686274509,A.q)
C.bBi=new B.u(1,0.10196078431372549,0.09019607843137255,0.0784313725490196,A.q)
C.anf=new B.u(1,0.7176470588235294,0.4745098039215686,0.12156862745098039,A.q)
C.bG8=new B.R(0,0,0,1)
C.aoh=new B.R(10,6,10,8)
C.aoy=new B.R(14,10,10,10)
C.bJL=new B.R(18,14,18,0)
C.bK7=new B.R(18,6,18,0)
C.bVz=new B.a_(62895,"MaterialIcons",!1)
C.QP=new B.a_(62970,"MaterialIcons",!1)
C.atm=new B.a_(983316,"MaterialIcons",!1)
C.p9=new B.a_(983617,"MaterialIcons",!1)
C.c1T=new B.ae(A.E6,13,A.ab,null,null,null)
C.c2E=new B.ae(A.oj,18,null,null,null,null)
C.c6q=new B.ae(A.eR,13,A.ab,null,null,null)
C.bYj=new B.a_(983768,"MaterialIcons",!1)
C.c73=new B.ae(C.bYj,13,A.c,null,null,null)
C.ccU=new B.a6(A.aW,A.b0,A.w,R.TJ,null,null)
C.daB=w([A.bO,E.Hv,A.bO],x.O)
C.awh=new B.a6(A.a5,A.a9,A.w,C.daB,null,null)
C.dt4=w([A.bP,A.bl,A.dW],x.O)
C.cdZ=new B.a6(A.aw,A.aD,A.w,C.dt4,null,null)
C.NU=new B.u(1,0.11764705882352941,0.30980392156862746,0.6392156862745098,A.q)
C.cVB=w([C.j2,C.NU,A.as,A.bO],x.O)
C.dAt=w([0,0.42,0.8,1],x.n)
C.ce4=new B.a6(A.aW,A.b0,A.w,C.cVB,C.dAt,null)
C.als=new B.u(1,0.16862745098039217,0.18823529411764706,0.23137254901960785,A.q)
C.bA9=new B.u(1,0.788235294117647,0.8196078431372549,0.8627450980392157,A.q)
C.bwS=new B.u(1,0.34901960784313724,0.3764705882352941,0.43137254901960786,A.q)
C.d81=w([C.als,C.bA9,C.bwS,C.als],x.O)
C.ce6=new B.a6(A.a5,A.a9,A.w,C.d81,A.Et,null)
C.cIs=w([A.bP,A.d1],x.O)
C.awm=new B.a6(A.a5,A.a9,A.w,C.cIs,null,null)
C.dae=w([A.ze,A.aH],x.O)
C.ceG=new B.a6(A.a5,A.a9,A.w,C.dae,null,null)
C.bq3=new B.u(1,0.0784313725490196,0.3803921568627451,0.24705882352941178,A.q)
C.bwA=new B.u(1,0.043137254901960784,0.2901960784313726,0.18823529411764706,A.q)
C.bjE=new B.u(1,0.03137254901960784,0.2196078431372549,0.13725490196078433,A.q)
C.ddL=w([C.bq3,C.bwA,C.bjE],x.O)
C.cfj=new B.a6(A.aw,A.aD,A.w,C.ddL,null,null)
C.ail=new B.u(1,0.12156862745098039,0.1411764705882353,0.18823529411764706,A.q)
C.chF=w(["Add every person","Link mums, dads, kids","Keep it for ever"],x.s)
C.dWn=new D.wT("NGMY Ads","\ud83d\udce2","Every NGMY ad, as a real 3D commercial",A.c6,-1)
C.dWh=new D.wT("Civic Registry","\ud83e\udeaa","Enroll your family in your community",A.di,0)
C.dWm=new D.wT("Jobs","\ud83d\udcbc","Find work and get hired",A.as,1)
C.dWs=new D.wT("NGMY Store","\ud83d\udecd\ufe0f","African food and traditions",A.fO,2)
C.dWt=new D.wT("Kiswahili","\ud83d\udde3\ufe0f","Learn Swahili and English",A.bU,3)
C.dWq=new D.wT("Doc Scanner","\ud83d\udcc4","Scan, save and share",A.cj,4)
C.dWi=new D.wT("Invoices","\ud83e\uddfe","Professional invoices",A.bE,5)
C.dWf=new D.wT("Calendar","\ud83d\udcc5","This month, today lit up",A.aC,-2)
C.iz=w([C.dWn,C.dWh,C.dWm,C.dWs,C.dWt,C.dWq,C.dWi,C.dWf],B.as("N<wT>"))
C.Wp=new B.y(2,3)
C.Wq=new B.y(3,4)
C.cBI=w([A.kQ,A.A6],B.as("N<a_>"))
C.cFo=w([A.ax,A.cz,F.nl],x.O)
C.amb=new B.u(1,0.24705882352941178,0.22745098039215686,0.2,A.q)
C.dze=w(["A Registry ID card for every member","Birthdays and children remembered","Votes and receipts everyone can see"],x.s)
C.dUo=new D.i7(A.f9,"Registry ID","Active")
C.dUc=new D.i7(A.Ix,"Birthdays","On")
C.dUF=new D.i7(A.p7,"Community vote","Open")
C.dMD=w([C.dUo,C.dUc,C.dUF],x.X)
C.Vc=new D.aqR(1,"card")
C.dUT=new D.t7(null,"NGMY Civic Registry",A.mE,A.dl,A.aH,"Your family.","Counted. Helped.","Enroll your whole family in the community registry.",C.dze,"Civic Registry",6,"#","Family members enrolled",0,C.dMD,C.Vc,"REGISTRY ID","One card for your whole community life.","NGMY Hub tab, then Civic Registry")
C.dq9=w(["Find jobs near you","Book house repairs and workers","Advisors help with applications"],x.s)
C.dUR=new D.i7(V.Ry,"Warehouse helper","Apply")
C.dUy=new D.i7(A.Rb,"House repair","Book")
C.dUE=new D.i7(A.Ab,"House worker","Hire")
C.d_L=w([C.dUR,C.dUy,C.dUE],x.X)
C.uf=new D.aqR(2,"badge")
C.dV4=new D.t7(A.au7,"NGMY Jobs and Help",A.qf,A.kg,A.aQ,"Need work?","Get hired.","Jobs, house repairs and house workers, all in one Help Center.",C.dq9,"Help Center",24,"#","Jobs near you",0,C.d_L,C.uf,"HIRED","From the search to the first paycheck.","NGMY Hub tab, then Help Center")
C.doQ=w(["African food and traditions","Open your own store","Support Congolese and African sellers"],x.s)
C.bXC=new B.a_(983309,"MaterialIcons",!1)
C.dUq=new D.i7(C.bXC,"Fufu flour 2 kg","$12")
C.bWT=new B.a_(63590,"MaterialIcons",!1)
C.dUf=new D.i7(C.bWT,"Congolese coffee","$18")
C.dUp=new D.i7(A.asy,"Wax print fabric","$15")
C.dxN=w([C.dUq,C.dUf,C.dUp],x.X)
C.dUU=new D.t7(A.Rr,"NGMY Store",A.kr,A.kg,A.cY,"Shop our community.","Sell yours too.","Buy and sell inside NGMY. Approved members can open a store.",C.doQ,"NGMY Store",45,"$#.00","Your cart",0,C.dxN,C.uf,"OPEN NOW","Every order supports our community.","NGMY Hub tab, then NGMY Store")
C.au2=new B.a_(983989,"MaterialIcons",!1)
C.dgN=w(["Short daily lessons","A picture for every word","Swahili and English both ways"],x.s)
C.dUj=new D.i7(C.au2,"Jambo","Hello")
C.dUk=new D.i7(A.hQ,"Asante","Thank you")
C.dUh=new D.i7(A.xx,"Familia","Family")
C.dvZ=w([C.dUj,C.dUk,C.dUh],x.X)
C.dUX=new D.t7(C.au2,"Kiswahili School",A.pa,A.tj,A.mu,"Habari!","Learn Swahili.","Learn Swahili and English, one short lesson at a time.",C.dgN,"Kiswahili School",12,"# days","Your learning streak",0,C.dvZ,C.uf,"KARIBU","Karibu means welcome.","Creator Hub tab, then Kiswahili School")
C.cSw=w(["Sharp scans from your camera","Saved as a PDF","Share it anywhere"],x.s)
C.dUQ=new D.i7(A.tV,"Lease.pdf","2 pages")
C.dUI=new D.i7(A.h4,"Receipt.pdf","1 page")
C.dUN=new D.i7(A.mE,"ID copy.pdf","Shared")
C.dlY=w([C.dUQ,C.dUI,C.dUN],x.X)
C.dUS=new D.t7(P.IS,"Document Scanner",A.a4O,A.ajK,A.hm,"Paper in.","PDF out.","Scan, save and share your papers in seconds.",C.cSw,"Document Scanner",3,"# pages","Scanned today",0,C.dlY,C.uf,"PDF","Every paper, safe on your phone.","NGMY Hub tab, then Document Scanner")
C.dCe=w(["Your logo and business details","Totals worked out for you","Send it as a PDF"],x.s)
C.dUu=new D.i7(A.DY,"Kitchen repair","$850")
C.dUJ=new D.i7(A.IK,"Materials","$320")
C.dUd=new D.i7(A.E1,"Delivery","$80")
C.cu6=w([C.dUu,C.dUJ,C.dUd],x.X)
C.dV_=new D.t7(A.kS,"NGMY Invoices",A.h4,A.kc,A.c6,"Look professional.","Get paid faster.","Make clean invoices and receipts in minutes.",C.dCe,"Invoice 1042",1250,"$#.00","Total due",0,C.cu6,C.uf,"PAID","Paid. Stamped. Done.","Tool Hub tab, then Business Essentials")
C.dqi=w(["Grandparents to grandchildren","A photo on every branch","Share it with the family"],x.s)
C.bWe=new B.a_(63229,"MaterialIcons",!1)
C.dUn=new D.i7(C.bWe,"Grandparents","4")
C.bXk=new B.a_(983134,"MaterialIcons",!1)
C.dUi=new D.i7(C.bXk,"Parents","6")
C.dUw=new D.i7(A.QT,"Children","8")
C.dLr=w([C.dUn,C.dUi,C.dUw],x.X)
C.dV0=new D.t7(F.aub,"NGMY Family Tree",A.QJ,A.ne,A.NF,"Every branch.","Every story.","Grow your family tree and write your family book.",C.dqi,"Family Tree",18,"#","Family members",0,C.dLr,C.uf,"FAMILY","Family is everything.","Profile tab, then Worksheets, then Family Tree")
C.dz7=w(["Kept safe on the server","A receipt for every payment","Rewards in one place"],x.s)
C.dUC=new D.i7(A.j9,"Crown reward","+$1.00")
C.dUH=new D.i7(A.kQ,"House Care","-$25.00")
C.dUD=new D.i7(A.Rm,"Gift received","+$20.00")
C.dI6=w([C.dUC,C.dUH,C.dUD],x.X)
C.a9v=new D.aqR(0,"coin")
C.dUV=new D.t7(null,"NGMY Wallet",A.jG,A.wV,A.eL,"One balance.","Everywhere.","Your NGMY balance is the same on every phone you use.",C.dz7,"NGMY Wallet",1250.75,"$#","Balance",2,C.dI6,C.a9v,"$","Your money, always in sync.","Your balance shows on Home and all across NGMY")
C.dG1=w(["Quick arcade games","Play offline, counted later","Every win has a receipt"],x.s)
C.dUO=new D.i7(A.of,"Lucky Dice","Play")
C.dUe=new D.i7(A.R_,"Puzzle Rush","Play")
C.dUl=new D.i7(A.m8,"Top score","2,400")
C.dEH=w([C.dUO,C.dUe,C.dUl],x.X)
C.dUY=new D.t7(null,"NGMY Game Center",A.ok,A.m2,A.be,"Play.","Win coins.","Arcade games in the Vault Channel, with your own game receipts.",C.dG1,"Vault Arcade",2400,"#","High score",0,C.dEH,C.a9v,"WIN","Game on, any time.","Home tab, then Vault Channel")
C.d3N=w(["Parts that really work","An AI Inventor to help you","See how electricity flows"],x.s)
C.bVy=new B.a_(62894,"MaterialIcons",!1)
C.dUt=new D.i7(C.bVy,"Battery","9 V")
C.dUB=new D.i7(C.p9,"Switch","On")
C.dUG=new D.i7(L.lf,"Bulb","Lit")
C.dJf=w([C.dUt,C.dUB,C.dUG],x.X)
C.dUW=new D.t7(L.lf,"NGMY Electronics Lab",I.vC,A.ze,A.b5,"Build it.","Watch it light up.","Wire real circuits: batteries, switches, bulbs, TVs and more.",C.d3N,"Electronics Lab",9,"# V","Battery",0,C.dJf,C.uf,"IT WORKS","Learn by building.","Home tab, then Core Protocol, then Electronics Lab")
C.djd=w(["Chat like with a real person","Help with jobs and benefits","Answers in Swahili too"],x.s)
C.dUv=new D.i7(A.DS,"How do I apply?","Answered")
C.dUL=new D.i7(A.tV,"Check my letter","Done")
C.dUs=new D.i7(A.pa,"Jibu kwa Kiswahili","Sawa")
C.dfq=w([C.dUv,C.dUL,C.dUs],x.X)
C.dV3=new D.t7(A.vE,"NGMY Advisors",A.Ar,A.qT,A.cY,"Questions?","Ask an advisor.","Friendly AI advisors for jobs, applications and everyday life.",C.djd,"NGMY Advisors",24,"# / 7","Always here",0,C.dfq,C.uf,"ASK ME","Help is one message away.","Advisors tab")
C.dJx=w(["Walk through every room","Wire lights and outlets","Learn a trade step by step"],x.s)
C.dUP=new D.i7(F.asT,"Frame","Done")
C.dUA=new D.i7(I.vC,"Wiring","Done")
C.dUg=new D.i7(I.a5f,"Plumbing","Now")
C.dLY=w([C.dUP,C.dUA,C.dUg],x.X)
C.dUZ=new D.t7(A.kQ,"NGMY Construction Lab",A.rw,A.it,A.as,"Frame. Wire.","Finish a house.","Real 3D wiring, plumbing and a whole house to build.",C.dJx,"Construction Lab",86,"#%","House finished",0,C.dLY,C.uf,"BUILT","Learn the trade, room by room.","Home tab, then Core Protocol, then Construction Lab")
C.dt1=w(["Record and edit audio","Make videos with titles","QR codes and Doc Share"],x.s)
C.dUm=new D.i7(A.oh,"Recorder Studio","Open")
C.dUK=new D.i7(A.Ri,"Video Studio","Open")
C.dUr=new D.i7(A.jI,"QR Generator","Open")
C.d7G=w([C.dUm,C.dUK,C.dUr],x.X)
C.dV1=new D.t7(A.fS,"NGMY Creator Hub",A.e9,A.i2,A.c6,"Record. Film.","Create.","Recorder, Video Studio, QR codes and more in one place.",C.dt1,"Creator Hub",8,"#","Studios ready for you",0,C.d7G,C.uf,"ACTION","Your ideas, made real.","Creator Hub tab")
C.dBQ=w(["Many designs to choose from","Your logo and your colours","Share by QR or as a picture"],x.s)
C.dUM=new D.i7(A.ma,"Design","Midnight")
C.bXv=new B.a_(983243,"MaterialIcons",!1)
C.dUx=new D.i7(C.bXv,"QR code","On")
C.dUz=new D.i7(A.IW,"Shared","12 times")
C.dCg=w([C.dUM,C.dUx,C.dUz],x.X)
C.dV2=new D.t7(null,"NGMY Business Cards",A.a4K,A.cZ,A.fM,"First impressions","that last.","Design a card people remember and share it with a QR code.",C.dBQ,"Business Card",250,"#","Card scans",0,C.dCg,C.Vc,"YOUR NAME","Hand it over. Be remembered.","Tool Hub tab, then Business Card Creator")
C.Tz=w([C.dUT,C.dV4,C.dUU,C.dUX,C.dUS,C.dV_,C.dV0,C.dUV,C.dUY,C.dUW,C.dV3,C.dUZ,C.dV1,C.dV2],B.as("N<t7>"))
C.daJ=w([A.bl,A.bP,A.cz],x.O)
C.boe=new B.u(1,0.5411764705882353,0.3333333333333333,0.13725490196078433,A.q)
C.dg1=w([C.ajl,C.an5,C.boe],x.O)
C.fnr=new B.aV(-0.3,0.32,0.2)
C.fkN=new B.aV(-0.08,0.17,0.22)
C.fkO=new B.aV(0.14,0.14,0.2)
C.fmD=new B.aV(0.34,0.3,0.2)
C.fpd=new B.aV(0,0.32,0.26)
C.fmk=new B.aV(-0.42,0.46,0.15)
C.fp8=new B.aV(0.42,0.46,0.15)
C.fnJ=new B.aV(0,0.07,0.15)
C.aEG=w([C.fnr,C.fkN,C.fkO,C.fmD,C.fpd,C.fmk,C.fp8,C.fnJ],B.as("N<+(G,G,G)>"))
C.dss=w([A.c,A.fC,A.aH],x.O)
C.du9=w([11,9,10,8,0,12,13,2],B.as("N<F>"))
C.ezx=new D.yH("NGMY Tree Story","A family grows, one branch at a time")
C.ezw=new D.yH("NGMY Store","Open the doors to something new")
C.ezy=new D.yH("NGMY Construction Lab","Build, wire and finish a real house")
C.ezr=new D.yH("NGMY Electronics Lab","Build circuits that really light up")
C.ezu=new D.yH("NGMY Advisors","Say hi to a friendly advisor")
C.ezs=new D.yH("Spark Adventure","Follow Sparky round a circuit board")
C.ezz=new D.yH("NGMY Game Center","Play games and win coins")
C.ezt=new D.yH("NGMY Business Cards","Make a card people remember")
C.ezq=new D.yH("NGMY Civic Registry","Your family, counted and helped")
C.ezv=new D.yH("NGMY Creator Hub","Record, film and create")
C.U3=w([C.ezx,C.ezw,C.ezy,C.ezr,C.ezu,C.ezs,C.ezz,C.ezt,C.ezq,C.ezv],B.as("N<yH>"))
C.dwq=w([A.dl,A.cw,A.Ha],x.O)
C.dAa=w(["For you","Apps","Library"],x.s)
C.aFK=w([-16,16],x.n)
C.Us=w([-22,22],x.n)
C.Ut=w([-24,24],x.n)
C.a8k=w([-5,5],x.n)
C.bep=new B.ac(0,A.G,A.b8,A.dv,14)
C.dGI=w([C.bep],x.V)
C.dJY=w(["M","T","W","T","F","S","S"],x.s)
C.aM9=new B.d2([1,7,2,0,3,1,4,2,6,3,7,6,8,4,9,5],B.as("d2<F,F>"))
C.bpE=new B.u(1,0.054901960784313725,0.16470588235294117,0.22745098039215686,A.q)
C.bB_=new B.u(1,0.027450980392156862,0.08235294117647059,0.12941176470588237,A.q)
C.dkc=w([C.bpE,C.bB_,C.a_a],x.O)
C.eT0=new B.bW(A.Ca,1.1,A.w,null,0,C.dkc,A.vU,null)
C.bwl=new B.u(1,0.9607843137254902,0.7725490196078432,0.25882352941176473,A.q)
C.dh8=w([T.CY,C.bwl,C.anf],x.O)
C.eT5=new B.bW(A.MV,0.5,A.w,null,0,C.dh8,A.md,null)
C.aUS=new B.y("SONY",A.bP)
C.f02=new B.y(3,E.Hv)
C.f1k=new B.y(0.45,0.05)
C.f2h=new B.y(-0.35,-0.05)
C.f3q=new B.y(2,A.bC)
C.aUU=new B.y("B&O",C.amb)
C.f86=new B.y("SAMSUNG",A.cH)
C.f9D=new B.y(0,A.it)
C.aV3=new B.y("LG",A.dW)
C.fcS=new B.y(1,A.v)
C.fdf=new B.y(-1.6,0.9)
C.feU=new B.y(1.6,0.9)
C.fhf=new B.y(1.6,-0.9)
C.fj4=new B.y(-1.25,-0.62)
C.fjS=new B.y(-1.6,-0.9)
C.fs2=new B.b4([1.25,-0.62,-1,0])
C.fse=new B.b4([-1.25,-0.62,0,1])
C.fsl=new B.b4([1.25,0.62,0,-1])
C.ftO=new B.b4([-1.25,0.62,1,0])
C.c7D=new B.ae(A.eR,11,A.ab,null,null,null)
C.fXp=new B.H(!0,A.aR,null,null,null,null,9,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.hkQ=new B.D("Search",null,C.fXp,null,null,null,null,null,null,null,null,null)
C.cXs=w([C.c7D,A.pv,C.hkQ],x.p)
C.fxp=new B.c_(A.aJ,A.e,A.i,A.l,null,A.p,null,0,C.cXs,null)
C.fEA=new B.i_(3,5,5,1.35,null)
C.h4w=new B.D("Buttons hidden. Double-tap to show them again.",null,null,null,null,null,null,null,null,null,null,null)
C.aXV=new B.b3(C.h4w,null,null,null,null,null,null,null,A.iX,null,null,null,null,A.o4,!1,null,null,null,A.t,null)
C.bzR=new B.u(1,0.9450980392156862,0.9098039215686274,0.8470588235294118,A.q)
C.fMb=new B.H(!0,C.bzR,null,"serif",null,null,15,A.k_,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.fUt=new B.H(!0,A.ab,null,null,null,null,9.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.fV7=new B.H(!0,A.aR,null,null,null,null,9.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.adK=new B.H(!0,A.ab,null,null,null,null,12.5,null,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.b_h=new B.H(!0,A.ab,null,null,null,null,10,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.fZI=new B.H(!0,A.c,null,null,null,null,8.5,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.h_7=new B.H(!0,A.c,null,null,null,null,14.5,A.O,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.h0l=new B.H(!0,A.ab,null,null,null,null,8.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.h0F=new B.H(!0,C.aiT,null,null,null,null,8.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.fRI=new B.H(!0,A.aE,null,null,null,null,9.5,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.h35=new B.D("NGMY Apps",null,C.fRI,null,null,null,null,null,null,null,null,null)
C.fNX=new B.H(!0,C.wY,null,null,null,null,8,A.a7,null,3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.h6v=new B.D("BANG & OLUFSEN",null,C.fNX,null,null,null,null,null,null,null,null,null)
C.fU9=new B.H(!0,A.v,null,null,null,null,9,A.C,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.h6Y=new B.D("Open",null,C.fU9,null,null,null,null,null,null,null,null,null)
C.hag=new B.D("Home",null,C.b_h,null,null,null,null,null,null,null,null,null)
C.hbo=new B.D("SAMSUNG",null,A.aZS,null,null,null,null,null,null,null,null,null)
C.hhD=new B.D("LG",null,A.yr,null,null,null,null,null,null,null,null,null)
C.h15=new B.H(!0,A.aE,null,null,null,null,10,A.u,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.hlS=new B.D("WHERE TO FIND IT",null,C.h15,null,null,null,null,null,null,null,null,null)
C.ho2=new B.D("tv",null,A.qF,null,null,null,null,null,null,null,null,null)
C.hpm=new B.D("Watch again",null,A.cg,null,null,null,null,null,null,null,null,null)
C.fRC=new B.H(!0,C.wY,null,null,null,null,8.5,null,null,2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.hqh=new B.D("OPEN",null,C.fRC,null,null,null,null,null,null,null,null,null)
C.hQ7=new B.b9("tv-maker-name",x.W)
C.hQc=new B.b9("ad-info-ok",x.W)
C.hQl=new B.b9("tv-maker-apple",x.W)
C.hQK=new B.b9("ad-info-sheet",x.W)
C.hR8=new B.b9("ad-info-find",x.W)
C.hRk=new B.b9("tv-info",x.W)
C.hRr=new B.b9("tv-learn-more",x.W)
C.hRE=new B.b9("tv-frame",x.W)
C.hRJ=new B.b9("tv-picture",x.W)
C.hRK=new B.b9("tv-fullscreen",x.W)
C.hRT=new B.b9("ad-info-replay",x.W)
C.hSk=new D.cIV(0,"triangles")})();(function staticFields(){$.SO=B.S(B.as("aH"),B.as("bxe"))
$.bIT=!1
$.aih=B.S(B.as("aH"),B.as("iT"))})();(function lazyInitializers(){var w=a.lazyFinal
w($,"iVd","i0l",()=>{var v=B.ctx()
v.z=A.hg
v.f=!0
return v})})()};
(a=>{a["6z2eChVP0caOQ3GNpEIltP2afQ0="]=a.current})($__dart_deferred_initializers__);