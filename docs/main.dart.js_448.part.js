((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,A,O,L,G,E,M,P,I,Q,R,S,H,T,U,K,D={
i0I(d,e,f,g,h){var w,v,u,t,s=null,r=e.length
if(A.o.F(r,2)!==0)throw B.Y(B.dM('"positions" length must be even.',s))
w=f.length
if(w*2!==r)throw B.Y(B.dM('"positions" and "colors" lengths must match.',s))
if(!A.pg.gar(e)){$.T()
v=J.uX(A.ij.gaS(f),f.byteOffset,w)
r=$.hXp()[d.a]
w=$.eA.cq()
u=v
t=new B.aWA(B.jK(w,"MakeVertices",[r,e,null,u,null]))}else t=s
return D.i0H(t)},
i0H(d){var w=new D.bTE(d)
w.bDW(d)
return w},
bTE:function bTE(d){this.a=d
this.b=$
this.c=!1},
bTF:function bTF(){},
ifw(d,e,f){return D.i0I(d,e,f,null,null)},
cHM:function cHM(d,e){this.a=d
this.b=e},
fMC(d,e,f,g,h,i){var w,v,u,t=null
if(h==null){w=A.i.fJ(e*2)
v=A.i.fJ(g*4)
u=B.l(t,t,D.ajO(f),t,t,t,t,t,"Roboto",t,t,w/2,t,t,i,t,1.12,!0,t,v/4,t,t,t,t,t,t)
return D.a4g(d,u,A.ba,t,1,1/0)}$.T()
w=B.L()
w.san(h)
w=B.cW(t,t,t,t,t,t,t,t,t,B.l(t,t,t,t,t,t,t,t,"Roboto",t,t,e,t,t,i,w,1.12,!0,t,g,t,t,t,t,t,t),d)
w=B.h_(t,A.cL,t,1,t,w,A.a8,A.cd,t,A.e4,A.ce)
w.nB(1/0)
return w},
mv(d,e,f,g,h,i,j,k,l,m){var w,v,u,t
if(e.length===0||g<1)return 0
w=new D.fMp(j,f,i,l)
v=D.fMC(e,g,h,k,w.$1(g),m)
u=v.b.c
if(u>l&&u>0){t=g*l/u
v=D.fMC(e,t,h,k*l/u,w.$1(t),m)}v.a4(d,new B.r(f.a-v.b.c*i,f.b))
w=v.b.a.c
return w.gb4(w)},
hLN(d,e,f,g,h,i,j,k,l){var w,v,u=null,t=A.i.fJ(g*2)
t=B.l(u,u,D.ajO(h),u,u,u,u,u,"Roboto",u,u,t/2,u,u,l,u,1.25,!0,u,u,u,u,u,u,u,u)
w=j===0
v=D.a4g(e,t,w?A.ba:A.K,"\u2026",k,i)
t=f.a
t=w?t:t-i/2
v.a4(d,new B.r(t,f.b))
t=v.b.a.c
return t.gb4(t)},
Ho(d,e,f,g,h){var w,v,u,t=null
if(g<1)return
w=B.lA(e.a)
v=A.i.fJ(g*2)
u=D.a4g(w,B.l(t,t,D.ajO(h),t,t,t,t,t,e.b,t,t,v/2,t,t,t,t,1,!0,t,t,t,t,t,t,t,t),A.ba,t,1,1/0)
v=u.b
w=v.c
v=v.a.c
u.a4(d,f.aI(0,new B.r(w/2,v.gb4(v)/2)))},
ip5(d,e){var w=A.i.a5(d,e).split("."),v=B.o9(w[0],B.ag("\\B(?=(\\d{3})+(?!\\d))",!0,!1,!1,!1),new D.fGd(),null)
return w.length>1?v+"."+w[1]:v},
bFT(d,e,f,g){var w,v
if(e<=0)return
w=d.c
J.bs(w.save())
v=f.d-f.b
w.clipRect(B.hS(f.ct(v*0.08)),$.lF()[1],!0)
w.translate(0,(1-A.cn.aA(0,A.i.D(e,0,1)))*v*1.05)
g.$0()
w.restore()},
isE(a0,a1,a2,a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=a1.a,j=a1.b,i=0+k,h=new B.a5(0,0,i,0+j),g=$.T(),f=B.L(),e=a2.d,d=B.ap(e,A.v,0.05)
d.toString
w=B.ap(e,A.v,0.55)
w.toString
v=x.O
f.san(new B.bU(C.b5S,1.25,A.w,l,0,B.a([d,w,C.boi],v),A.vP,l).az(0,h))
a0.aE(h,f)
u=Math.sin(a3*0.35)*k*0.04
t=new B.aH(g.r,A.ak,l,l,B.a([],x.v))
t.E(new B.aZ(k*0.52+u,0))
t.E(new B.aq(k*0.7+u,0))
t.E(new B.aq(k*0.98,j))
t.E(new B.aq(k*0.34,j))
t.E(new B.bA())
g=B.L()
g.san(new B.a6(A.aU,A.b1,A.w,B.a([A.c.j(0.1),A.c.j(0)],v),l,l).az(0,h))
a0.af(t,g)
s=j*0.8
g=s+(j-s)
f=B.L()
f.san(new B.a6(A.aU,A.b1,A.w,B.a([B.ap(e,A.v,0.6).j(0.85),A.v],v),l,l).az(0,new B.a5(0,s,i,g)))
a0.aE(new B.a5(0,s,i,g),f)
f=s-1
g=B.L()
e=a2.e
g.san(new B.a6(A.a5,A.a9,A.w,B.a([A.L,e.j(0.55),A.L],v),l,l).az(0,new B.a5(0,s,i,s+2)))
a0.aE(new B.a5(0,f,i,f+2),g)
r=a1.gdl()>=300
q=new B.e4()
q.cV(a4*7+3)
for(i=a3*1.3,g=a3*k*0.012,f=k*1.1,d=k*0.05,p=0;p<9;++p){w=A.i.F(q.ai()*k+g*(0.5+q.ai()),f)
v=q.ai()
o=j*(0.025+q.ai()*0.05)
n=(p&1)===0?e:A.c
m=new B.ar(A.U,A.R,A.X,A.Y,A.W)
m.r=n.j(0.06+0.08*(0.5+0.5*Math.sin(i+p))).gp(0)
if(r)m.y=new B.h2(A.H,o*0.5)
a0.O(new B.r(w-d,v*j*0.72),o,m)}},
hJC(d,e,f,g,h,i){var w
$.T()
w=B.L()
w.r=A.v.j(h).gp(0)
if(i)w.y=new B.h2(A.H,g*0.6)
d.c1(B.bZ(e,g,f),w)},
hpz(d,e,f,g){var w=B.dA(),v=w.a
v.$flags&2&&B.ak(v)
v[11]=1/(d*2.6)
w.fI(e)
w.k_(f)
w.ei(0,0,g,1)
return w},
iq0(d,e,f,a0,a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=f*0.49,i=j*0.17,h=B.bx(B.bZ(A.J,f,j),new B.aP(i,i)),g=j*0.085
$.T()
w=B.L()
i=h.a
v=h.b
u=h.c
t=h.d
w.san(C.ccH.az(0,new B.a5(i,v,u,t)))
for(s=d.c,r=e.a,q=e.b,p=6;p>=1;--p){J.bs(s.save())
s.translate(r,q)
o=D.hpz(f,a0,a1,g*p/6)
s.concat(B.bJ5(B.E5(o.a)))
d.aq(h,w)
s.restore()}J.bs(s.save())
s.translate(r,q)
d.aA(0,D.hpz(f,a0,a1,0).a)
r=$.T()
q=B.L()
q.r=C.biw.gp(0)
d.aq(h,q)
q=h.ct(-(j*0.006))
o=B.L()
o.b=A.ad
o.c=j*0.012
o.san(C.ccz.az(0,new B.a5(i,v,u,t)))
d.aq(q,o)
n=h.ct(-(j*0.035))
J.bs(s.save())
s.clipRRect(B.nf(n),$.mS(),!0)
o=n.a
q=n.b
t=n.c
u=n.d
D.irD(d,new B.a5(o,q,t,u),a2,a3)
v=t-o
m=o+v*(0.2-a0*0.6)
l=new B.aH(r.r,A.ak,k,k,B.a([],x.v))
l.E(new B.aZ(m,q))
l.E(new B.aq(m+v*0.45,q))
l.E(new B.aq(m-v*0.15,u))
l.E(new B.aq(m-v*0.6,u))
l.E(new B.bA())
v=B.L()
v.san(new B.a6(A.aU,A.b1,A.w,B.a([A.c.j(0.16),A.c.j(0.02)],x.O),k,k).az(0,new B.a5(o,q,t,u)))
d.af(l,v)
s.restore()
v=j*0.04
v=B.bx(B.bZ(new B.r(0,q+j*0.06),j*0.075,j*0.28),new B.aP(v,v))
q=B.L()
q.r=A.v.gp(0)
d.aq(v,q)
s.restore()},
irD(c3,c4,c5,c6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8=null,b9=1e9,c0=c4.c,c1=c4.a,c2=c0-c1
$.T()
w=B.L()
v=c5.d
u=B.ap(v,A.v,0.72)
u.toString
t=x.O
w.san(new B.a6(A.aU,A.b1,A.w,B.a([C.bup,u],t),b8,b8).az(0,c4))
c3.aE(c4,w)
w=c4.b
u=c4.d
s=u-w
r=c1+c2
q=new B.a5(c1,w,r,w+s*0.3)
p=B.L()
o=c5.e
p.san(new B.a6(A.aw,A.aD,A.w,B.a([v,o],t),b8,b8).az(0,q))
c3.aE(q,p)
p=c2*0.1
n=B.L()
n.r=A.c.j(0.08).gp(0)
c3.O(new B.r(r-p,w+c2*0.12),c2*0.42,n)
n=c2*0.045
D.mv(c3,"9:41",new B.r(c1+c2*0.09,w+c2*0.035),n,A.c,0,b8,0,b9,A.C)
r=c2*0.06
D.Ho(c3,C.bUm,new B.r(c0-p,w+r),r,A.c)
c0=c2*0.07
m=c1+c0
l=s*0.085
k=w+l
j=c2*0.17
i=c2*0.05
h=B.bx(new B.a5(m,k,m+j,k+j),new B.aP(i,i))
j=B.L()
j.r=A.c.j(0.22).gp(0)
c3.aq(h,j)
D.Ho(c3,c5.c,h.gbD(),c2*0.11,A.c)
j=h.c+i
k=h.b
D.mv(c3,c5.y,new B.r(j,k+c2*0.012),c0,A.c,0,b8,0,c2*0.62,A.u)
D.mv(c3,"NGMY",new B.r(j,k+c2*0.095),n,A.ac,0,b8,c2*0.006,b9,A.C)
c1+=r
w+=s*0.215
k=c1+c2*0.88
g=B.bx(new B.a5(c1,w,k,w+s*0.165),new B.aP(r,r))
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
D.mv(c3,c5.as,new B.r(r,j+c0*0.16),c2*0.042,A.an,0,b8,0,c2*0.6,A.O)
m=D.ip5(c5.z*f,c5.at)
D.mv(c3,B.aK(c5.Q,"#",m),new B.r(r,j+c0*0.42),p,A.a_,0,b8,0,c2*0.58,A.u)
r=g.c-c2*0.25
j+=c0*0.32
e=B.bx(new B.a5(r,j,r+c2*0.2,j+c0*0.36),new B.aP(i,i))
c0=B.L()
c0.r=B.ap(o,A.c,0.75).gp(0)
c3.aq(e,c0)
c0=e.gbD()
j=B.ap(v,A.v,0.1)
j.toString
D.Ho(c3,A.mG,c0,c2*0.065,j)
d=w+s*0.04
a0=s*0.088
for(c0=a0+s*0.022,w=c5.ax,r=c3.c,p=a0*0.55,m=a0*0.33,j=a0*0.38,a1=a0*1.05,a2=c2*0.03,a3=c2*0.46,a4=c2*0.04,a5=c2*0.028,a6=c2*0.046,a7=c2*0.26,a8=0;a8<3;++a8){a9=w[a8]
b0=A.cn.aA(0,A.i.D(A.i.D((c6-(1.3+a8*0.35))/0.5,0,1),0,1))
if(b0>0){J.bs(r.save())
r.translate((1-b0)*c2*0.6,0)
b1=B.bx(new B.a5(c1,d,k,d+a0),new B.aP(n,n))
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
c3.O(new B.r(b3,b4),m,b5)
b5=B.ap(o,A.c,0.2)
b5.toString
D.Ho(c3,a9.a,new B.r(b3,b4),j,b5)
D.mv(c3,a9.b,new B.r(b2+a1,b4-a2),i,A.c,0,b8,0,a3,A.O)
b2=B.ap(o,A.c,0.3)
b2.toString
D.mv(c3,a9.c,new B.r(b1.c-a4,b4-a5),a6,b2,1,b8,0,a7,A.C)
r.restore()}d+=c0}b6=A.i.D((c6-5.2)/0.15,0,1)*(1-A.i.D((c6-5.45)/0.2,0,1))
c0=c2*0.08
b7=B.bx(B.bZ(new B.r(c4.gbD().a,u-l),s*0.075*(1-b6*0.08),c2*0.8*(1-b6*0.05)),new B.aP(c0,c0))
$.T()
c0=B.L()
s=b7.a
l=b7.c
c0.san(new B.a6(A.a5,A.a9,A.w,B.a([v,o],t),b8,b8).az(0,new B.a5(s,b7.b,l,b7.d)))
c3.aq(b7,c0)
D.mv(c3,"Open NGMY",new B.r(b7.gbD().a,b7.gbD().b-c2*0.033),c2*0.052,A.c,0.5,b8,0,(l-s)*0.85,A.u)
if(b6>0){c0=b7.gbD()
c1=B.L()
c1.r=A.c.j(0.25*(1-b6)).gp(0)
c3.O(c0,i+b6*c2*0.3,c1)}},
fBa(a5,a6,a7,a8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=null,a3="NGMY",a4=1e9
switch(a6.ay.a){case 0:w=B.bY(A.J,a7)
$.T()
v=B.L()
v.san(C.eP0.az(0,w))
a5.c1(w,v)
v=B.L()
v.b=A.ad
v.c=a7*0.05
v.r=C.ahW.j(0.7).gp(0)
a5.O(A.J,a7*0.82,v)
for(v=a7*0.02,u=0;u<40;++u){t=u/40*3.141592653589793*2
s=Math.cos(t)
r=Math.sin(t)
q=Math.cos(t)
p=Math.sin(t)
o=new B.ar(A.U,A.R,A.X,A.Y,A.W)
o.c=v
o.r=C.ahW.j(0.5).gp(0)
a5.ah(new B.r(s*a7*0.9,r*a7*0.9),new B.r(q*a7*0.97,p*a7*0.97),o)}n=a8?a3:a6.ch
v=n.length
if(v<=1)m=a7*0.95
else m=v<=3?a7*0.5:a7*0.36
v=-m*0.56
s=a7*1.4
D.mv(a5,n,new B.r(0,v+a7*0.03),m,A.th.j(0.7),0.5,a2,0,s,A.u)
D.mv(a5,n,new B.r(0,v),m,C.bmG,0.5,a2,0,s,A.u)
break
case 2:w=B.bY(A.J,a7)
$.T()
v=B.L()
v.san(E.aXi.az(0,w))
a5.c1(w,v)
l=B.bY(A.J,a7*0.84)
v=B.L()
s=a6.e
r=B.ap(s,A.c,0.35)
r.toString
q=a6.d
p=B.ap(q,A.v,0.25)
p.toString
v.san(new B.bU(A.n_,0.5,A.w,a2,0,B.a([r,s,p],x.O),A.xM,a2).az(0,l))
a5.c1(l,v)
v=B.L()
v.b=A.ad
v.c=a7*0.025
v.r=A.c.j(0.35).gp(0)
a5.O(A.J,a7*0.72,v)
if(a8)D.mv(a5,a3,new B.r(0,-a7*0.2),a7*0.38,A.c,0.5,a2,a7*0.02,a7*1.3,A.u)
else{v=a6.a
s=v==null
r=s?a6.c:v
p=a7*0.95
D.Ho(a5,r,new B.r(0,a7*0.03),p,B.ap(q,A.v,0.45).j(0.35))
D.Ho(a5,s?a6.c:v,A.J,p,A.c)}break
case 1:k=B.bZ(A.J,a7*1.9,a7*3)
v=a7*0.16
j=B.bx(k,new B.aP(v,v))
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
a5.aE(new B.a5(s,i,s+g,i+f),e)
e=g*0.08
s+=e
p=r+p*0.5
r=a7*0.03
r=B.bx(new B.a5(s,p,s+g*0.55,p+o),new B.aP(r,r))
o=B.L()
o.r=A.c.j(0.9).gp(0)
a5.aq(r,o)
D.mv(a5,"ngmy.org",new B.r(h-e,q-f),v,A.ac,1,a2,0,a4,A.O)
return}$.T()
v=B.L()
s=B.ap(a6.d,A.v,0.15)
s.toString
v.san(new B.a6(A.aw,A.aD,A.w,B.a([s,a6.e],x.O),a2,a2).az(0,k))
a5.aq(j,v)
v=a5.c
J.bs(v.save())
v.clipRRect(B.nf(j),$.mS(),!0)
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
D.mv(a5,a3,new B.r(p+v*0.07,r+o*0.1),a7*0.26,A.c,0,a2,i,a4,A.u)
D.Ho(a5,a6.c,new B.r(s-v*0.12,r+o*0.2),a7*0.32,A.c.j(0.9))
p+=v*0.08
s=r+o*0.38
q=a7*0.06
d=B.bx(new B.a5(p,s,p+a7*0.48,s+a7*0.36),new B.aP(q,q))
q=B.L()
s=d.a
h=d.b
g=d.c
f=d.d
q.san(C.avA.az(0,new B.a5(s,h,g,f)))
a5.aq(d,q)
q=d.gbD()
e=d.gbD()
a0=B.L()
a0.r=C.aia.gp(0)
a1=a7*0.012
a0.c=a1
a5.ah(new B.r(s,q.b),new B.r(g,e.b),a0)
a0=d.gbD()
e=d.gbD()
q=B.L()
q.r=C.aia.gp(0)
q.c=a1
a5.ah(new B.r(a0.a,h),new B.r(e.a,f),q)
D.Ho(a5,A.a4r,new B.r(g+a7*0.25,d.gbD().b),a7*0.28,A.ac)
D.mv(a5,"\u2022\u2022\u2022\u2022  \u2022\u2022\u2022\u2022  2026",new B.r(p,r+o*0.64),a7*0.17,A.c.j(0.9),0,a2,a7*0.02,a4,A.O)
D.mv(a5,a6.ch,new B.r(p,r+o*0.8),a7*0.15,A.c,0,a2,i,v*0.6,A.u)
break}},
imn(d,e,f,g,h,i){var w,v,u,t,s=null,r=g.ay,q=r===C.UQ,p=q?f*0.06:f*0.16,o=Math.cos(h),n=$.T(),m=B.L()
switch(r.a){case 0:r=A.CG
break
case 2:r=A.an
break
case 1:r=B.ap(g.d,A.c,0.55)
r.toString
break
default:r=s}m.r=r.gp(0)
r=x.v
n=n.r
if(q){w=new B.aH(n,A.ak,s,s,B.a([],r))
r=f*0.16
w.E(new B.jr(B.bx(B.bZ(A.J,f*1.9,f*3),new B.aP(r,r))))}else{w=new B.aH(n,A.ak,s,s,B.a([],r))
w.E(new B.jL(B.bY(A.J,f)))}v=new D.fBb(d,e,f,h)
r=B.a([],x.n)
for(u=1;u<8;++u)r.push(p*u/8)
if(o>=0){v.$2(p,new D.fBc(d,g,f))
for(q=x.Q,r=new B.dy(r,q),r=new B.bR(r,r.gJ(0),q.k("bR<aj.E>")),q=q.k("aj.E");r.C();){o=r.d
if(o==null)o=q.a(o)
v.$2(o,new D.fBd(d,w,m))}v.$2(0,new D.fBe(d,g,f,i,w))}else{v.$2(0,new D.fBf(d,g,f))
for(q=r.length,t=0;t<r.length;r.length===q||(0,B.I)(r),++t)v.$2(r[t],new D.fBg(d,w,m))
v.$2(p,new D.fBh(d,g,f))}},
hLH(a0,a1,a2,a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
for(w=a1.a,v=a1.b-a2*0.22,u=a4*1.4,t=a2*0.07,s=a3.e,r=a3.d,q=x.O,p=a3.ax,o=a4*0.7,n=0;n<3;++n){m=o+n*3.141592653589793*2/3
l=Math.sin(m)
if(l<0!==a5)continue
k=w+Math.cos(m)*a2*0.4
j=v+n*a2*0.2+Math.sin(u+n)*a2*0.025
i=new B.r(k,j)
h=t*(0.85-l*0.25)
g=B.bY(i,h)
$.T()
f=new B.ar(A.U,A.R,A.X,A.Y,A.W)
f.r=A.v.j(0.25).gp(0)
a0.O(new B.r(k+0,j+h*0.25),h,f)
f=new B.ar(A.U,A.R,A.X,A.Y,A.W)
e=B.ap(s,A.c,0.55)
e.toString
d=B.ap(r,A.v,0.35)
d.toString
f.san(new B.bU(A.ME,0.5,A.w,null,0,B.a([e,s,d],q),A.xM,null).az(0,g))
a0.c1(g,f)
D.Ho(a0,p[n].a,i,h,A.c)
f=-h
f=B.bZ(new B.r(k+f*0.32,j+f*0.48),h*0.32,h*0.7)
j=new B.ar(A.U,A.R,A.X,A.Y,A.W)
j.r=A.c.j(0.45).gp(0)
a0.c1(f,j)}},
htp(f2,f3,f4,f5,f6,f7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6,d7,d8,d9,e0,e1,e2,e3,e4,e5,e6,e7,e8,e9=null,f0=1e9,f1={}
f1.a=f5
w=A.o.F(f4,14)
v=C.Td[w]
u=f3.a
t=f3.b
if(u<=0||t<=0)return
f5=f1.a=A.i.D(f5,0,10)
s=f2.c
J.bs(s.save())
r=0+u
q=0+t
s.clipRect(B.hS(new B.a5(0,0,r,q)),$.lF()[1],!0)
if(f3.gdl()<180){r=f3.gdl()
s.restore()
D.hPN(f2,new B.e1(["ad",w,f6,u,t]),f3,f5+w*1000,new D.h6v(f1,180/r,u,t,f4,f6))
return}p=f3.gdl()>=300
D.isE(f2,f3,v,f5,f4,!0)
o=u>=t*1.15
n=o?t:Math.min(t*0.62,u*1.05)
m=o?u*0.07:u/2
l=o?0:0.5
k=o?u*0.42:u*0.88
j=o?t*0.22:t*0.63
i=o?new B.r(u*0.73,t*0.47):new B.r(u/2,t*0.33)
h=o?t*0.8:Math.min(t*0.5,u*0.6/0.49)
g=f7==null
f=g?0:A.eg.aA(0,A.i.D(f7.b/1.1,0,1))*3.141592653589793*2
e=Math.sin(f5*1.1)
if(f5<6.9){d=A.cn.aA(0,A.i.D(A.i.D(f5/1.1,0,1),0,1))
a0=A.dQ.aA(0,A.i.D((f5-3.2)/0.9,0,1))
a1=A.r5.aA(0,A.i.D((f5-6.3)/0.6,0,1))
a2=i.a+(1-d)*u*0.45+a1*u*0.7
a3=i.b+Math.sin(f5*1.6)*h*0.012
a4=h*(1+a0*0.06)
a5=new B.r(a2,a3)
D.hJC(f2,new B.r(a2,a3+a4*0.55),a4*0.62,a4*0.07,0.5,p)
D.hLH(f2,a5,a4,v,f5,!1)
D.iq0(f2,a5,a4,-1.15+d*0.73+a0*0.3+a1*0.9+e*0.05+f,0.07-a0*0.03,v,f5)
D.hLH(f2,a5,a4,v,f5,!0)}if(f5>=6.2&&f5<8.9){a6=A.eg.aA(0,A.i.D((f5-6.4)/0.7,0,1))
a7=A.r5.aA(0,A.i.D((f5-8.4)/0.45,0,1))
e=v.ay
a8=e===C.UQ
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
b6.san(new B.bU(A.z,0.5,A.w,e9,0,B.a([v.e.j(0.35*a6),A.L],b7),e9,e9).az(0,B.bY(a5,b5)))
f2.O(a5,b5,b6)
D.hJC(f2,new B.r(b1,b2+n*0.33),a9*2.2,a9*0.25,0.45*a6,p)
D.imn(f2,a5,a9,v,(1-a6)*3.141592653589793*1.5+b0*0.35+f+a7*3.141592653589793,A.i.D((f5-7.2)/0.9,0,1))
if(!a8){b8=A.cn.aA(0,A.i.D(A.i.D((f5-7)/0.4,0,1),0,1))*(1-a7)
if(b8>0){b9=B.bx(B.bZ(new B.r(b1,b4+a9*1.28),n*0.075,a9*1.9*b8),new B.aP(b3,b3))
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
b0.san(new B.a6(A.a5,A.a9,A.w,B.a([b1,a8,b2],b7),e9,e9).az(0,new B.a5(b3,b9.b,b4,b9.d)))
f2.aq(b9,b0)
if(b8>0.6){e=e===C.a96?A.a.eq(v.b,"NGMY ","").toUpperCase():v.ch
D.mv(f2,e,new B.r(b9.gbD().a,b9.gbD().b-n*0.025),n*0.042,A.c,0.5,e9,n*0.004,(b4-b3)*0.86,A.u)}}}}}e=v.e
a8=B.ap(e,A.c,0.25)
a8.toString
c0=n*(o?0.105:0.095)
if(f5<3.3){c1=1-A.i.D((f5-3)/0.3,0,1)
D.bFT(f2,A.i.D((f5-0.2)/0.4,0,1)*c1,new B.a5(0,j,r,j+n*0.05),new D.h6w(f2,v,m,j,n,a8,k,l))
c2=j+n*0.07
a8=c0*1.15
D.bFT(f2,A.i.D((f5-0.45)/0.5,0,1)*c1,new B.a5(0,c2,r,c2+a8),new D.h6x(f2,v,m,c2,c0,k,l))
c3=c2+c0*1.18
D.bFT(f2,A.i.D((f5-0.85)/0.5,0,1)*c1,new B.a5(0,c3,r,c3+a8),new D.h6y(f2,v,m,c3,c0,k,l))
c4=c3+c0*1.35
c5=n*0.22*(A.cn.aA(0,A.i.D(A.i.D((f5-1.3)/0.6,0,1),0,1))*c1)
a8=o?m:m-c5/2
b0=n*0.004
b0=B.bx(new B.a5(a8,c4,a8+c5,c4+n*0.008),new B.aP(b0,b0))
$.T()
a8=B.L()
a8.r=e.gp(0)
f2.aq(b0,a8)}else if(f5<6.5){c1=1-A.i.D((f5-6.2)/0.3,0,1)
D.bFT(f2,A.i.D((f5-3.3)/0.4,0,1)*c1,new B.a5(0,j,r,j+n*0.05),new D.h6z(f2,v,m,j,n,a8,k,l))
c4=j+n*0.07
c6=A.i.D((f5-3.45)/0.5,0,1)*c1
if(c6>0){J.bs(s.save())
s.translate(0,(1-A.cn.aA(0,A.i.D(c6,0,1)))*n*0.04)
a8=o?0.05:0.046
c7=D.hLN(f2,v.w,new B.r(m,c4),n*a8,A.c.j(c6),k,l,2,A.O)
s.restore()}else c7=n*0.12
a8=n*0.04
c8=c4+Math.max(c7,n*0.06)+a8
for(b0=n*0.075,b1=v.x,b2=v.d,c9=k-a8*1.8,b3=a8*0.55,b4=m+b3,b5=a8*0.62,b6=a8*0.8,b7=a8*1.6,d0=m+b7,d1=k-b7,d2=0;d2<3;++d2){d3=A.cn.aA(0,A.i.D(A.i.D((f1.a-(3.9+d2*0.3))/0.4,0,1),0,1))*c1
if(d3>0){d4=0.92*d3
d5=(1-d3)*n
if(o){d6=c8+b5
$.T()
d7=new B.ar(A.U,A.R,A.X,A.Y,A.W)
d7.r=e.gp(0)
f2.O(new B.r(b4,d6),b3*d3,d7)
d7=B.ap(b2,A.v,0.4)
d7.toString
D.Ho(f2,A.h1,new B.r(b4,d6),b6*d3,d7)
J.bs(s.save())
s.translate(d5*0.05,0)
D.mv(f2,b1[d2],new B.r(d0,c8),a8,A.c.j(d4),0,e9,0,c9,A.O)
s.restore()}else{d8=m-(Math.min(D.fMC(b1[d2],a8,A.c,0,e9,A.O).b.c,d1)+b7)/2
d9=c8+d5*0.03
d5=d8+b3
d6=d9+b5
$.T()
d7=new B.ar(A.U,A.R,A.X,A.Y,A.W)
d7.r=e.j(d3).gp(0)
f2.O(new B.r(d5,d6),b3,d7)
D.Ho(f2,A.h1,new B.r(d5,d6),b6,B.ap(b2,A.v,0.4).j(d3))
D.mv(f2,b1[d2],new B.r(d8+b7,d9),a8,A.c.j(d4),0,e9,0,d1,A.O)}}c8+=b0}}else if(f5<8.6){c1=1-A.i.D((f5-8.3)/0.3,0,1)
D.bFT(f2,A.i.D((f5-6.6)/0.4,0,1)*c1,new B.a5(0,j,r,j+n*0.05),new D.h6A(f2,v,m,j,n,a8,k,l))
d3=A.i.D((f5-6.8)/0.5,0,1)*c1
if(d3>0){J.bs(s.save())
s.translate(0,(1-A.cn.aA(0,A.i.D(d3,0,1)))*n*0.05)
a8=o?0.085:0.075
b0=A.c.j(d3)
b1=o?3:2
D.hLN(f2,v.CW,new B.r(m,j+n*0.07),n*a8,b0,k,l,b1,A.u)
s.restore()}}a8=f1.a
if(a8>=8.5){a6=A.i.D((a8-8.5)/0.35,0,1)
$.T()
a8=B.L()
a8.r=A.v.j(0.45*a6).gp(0)
f2.aE(new B.a5(0,0,r,q),a8)
e0=t*(o?0.36:0.38)
e1=A.eg.aA(0,A.i.D((f1.a-8.55)/0.5,0,1))
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
D.mv(f2,"NGMY",new B.r(a8,e0-e2*0.6),e2,b0,0.5,B.a([A.c,b1],b2),e2*0.12,f0,A.u)
s.restore()
b1=e0+e2*0.62
D.mv(f2,v.b,new B.r(a8,b1),n*0.048,A.c.j(0.85*A.i.D((f1.a-8.7)/0.3,0,1)),0.5,e9,0,u*0.86,A.C)
d3=A.eg.aA(0,A.i.D((f1.a-8.8)/0.45,0,1))
if(d3>0){b0=n*0.05
e3=B.bx(B.bZ(new B.r(a8,b1+n*0.16),n*0.1,Math.min(u*0.6,Math.max(u*0.3,n*0.5))*d3),new B.aP(b0,b0))
e4=B.L()
e4.r=e.j(0.45).gp(0)
if(p)e4.y=new B.h2(A.H,n*0.03)
f2.aq(e3,e4)
b1=B.L()
b3=e3.a
b4=e3.b
b5=e3.c
b6=e3.d
b1.san(new B.a6(A.a5,A.a9,A.w,B.a([v.d,e],b2),e9,e9).az(0,new B.a5(b3,b4,b5,b6)))
f2.aq(e3,b1)
J.bs(s.save())
s.clipRRect(B.nf(e3),$.mS(),!0)
b5-=b3
e5=b3-b5*0.3+A.i.D((f1.a-9)/0.9,0,1)*b5*1.6
b3=e5+b5*0.25
b1=B.L()
b1.san(new B.a6(A.a5,A.a9,A.w,B.a([A.c.j(0),A.c.j(0.5),A.c.j(0)],b2),e9,e9).az(0,new B.a5(e5,0,b3,1)))
f2.aE(new B.a5(e5,b4,b3,b4+(b6-b4)),b1)
s.restore()
if(d3>0.7)D.mv(f2,"Open NGMY",new B.r(a8,e3.gbD().b-n*0.03),b0,A.c,0.5,e9,0,b5*0.8,A.u)
D.mv(f2,"ngmy.org",new B.r(a8,b6+n*0.035),n*0.036,A.c.j(0.65*A.i.D(d3,0,1)),0.5,e9,n*0.004,f0,A.O)}}a9=new B.a5(0,0,r,q)
$.T()
e=B.L()
e.san(new B.bU(A.z,0.95,A.w,e9,0,B.a([A.L,A.v.j(0.45)],x.O),E.aD8,e9).az(0,a9))
f2.aE(a9,e)
if(!g&&f7.b<0.7){b8=f7.b/0.7
g=f7.a
e=B.L()
e.b=A.ad
a8=1-b8
e.c=n*0.012*a8
e.r=A.c.j(0.8*a8).gp(0)
f2.O(new B.r(g.a*u,g.b*t),n*(0.05+0.3*b8),e)}e6=n*0.035
e7=f6?"Ad "+(w+1)+" of 14":"Ad"
w=e6*0.9
g=D.fMC(e7,w,A.c,0,e9,A.C).b
e=g.c
g=g.a.c
a8=e6*0.4
e8=B.bx(new B.a5(e6,e6,e6+(e+e6*1.2),e6+(g.gb4(g)+e6*0.5)),new B.aP(a8,a8))
a8=B.L()
a8.r=A.bu.j(0.95).gp(0)
f2.aq(e8,a8)
D.mv(f2,e7,new B.r(e8.a+e6*0.6,e8.b+e6*0.25),w,A.ax,0,e9,0,f0,A.C)
w=n*0.012
a8=t-w
w=a8+w
g=B.L()
g.r=A.c.j(0.2).gp(0)
f2.aE(new B.a5(0,a8,r,w),g)
g=f1.a
e=B.L()
e.r=A.bu.gp(0)
f2.aE(new B.a5(0,a8,0+u*g/10,w),e)
w=f1.a
if(w<0.25)c1=1-w/0.25
else c1=w>9.8?(w-9.8)/0.2:0
if(c1>0){w=B.L()
w.r=A.v.j(A.i.D(c1,0,1)).gp(0)
f2.aE(new B.a5(0,0,r,q),w)}s.restore()},
aqk:function aqk(d,e){this.a=d
this.b=e},
i6:function i6(d,e,f){this.a=d
this.b=e
this.c=f},
rZ:function rZ(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v){var _=this
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
b0R:function b0R(d,e){this.a=d
this.b=e},
fMp:function fMp(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fGd:function fGd(){},
fBb:function fBb(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fBc:function fBc(d,e,f){this.a=d
this.b=e
this.c=f},
fBd:function fBd(d,e,f){this.a=d
this.b=e
this.c=f},
fBe:function fBe(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fBf:function fBf(d,e,f){this.a=d
this.b=e
this.c=f},
fBg:function fBg(d,e,f){this.a=d
this.b=e
this.c=f},
fBh:function fBh(d,e,f){this.a=d
this.b=e
this.c=f},
h6v:function h6v(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
h6w:function h6w(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
h6x:function h6x(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
h6y:function h6y(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
h6z:function h6z(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
h6A:function h6A(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
Jh:function Jh(d,e,f){this.c=d
this.d=e
this.a=f},
c6r:function c6r(d){this.a=d},
isN(d,e,f,g,h,i){var w=new D.fMh(e,h,!0),v=w.$1(g),u=v.b.c
if(u>i&&u>0)v=w.$1(Math.max(2,g*i/u))
w=v.b
u=w.c
w=w.a.c
v.a4(d,f.aI(0,new B.r(u/2,w.gb4(w)/2)))},
My(d,e,f,g,h,i,j){var w,v,u,t,s,r,q,p,o,n,m,l,k
if(j<=0)return
w=new D.h6u(e,f,g)
v=A.i.cG(22*A.i.D(j,0,1))
for(u=i-h,t=e,s=1;s<=v;++s,t=q){r=Math.min(s/22,A.i.D(j,0,1))
q=w.$1(r)
$.T()
p=new B.ar(A.U,A.R,A.X,A.Y,A.W)
p.b=A.ad
o=p.c=h+u*r
p.r=A.qX.gp(0)
p.d=A.bG
d.ah(t,q,p)
p=-o*0.18
n=q.a
m=q.b
l=B.ap(A.qX,A.c,0.18)
l.toString
k=new B.ar(A.U,A.R,A.X,A.Y,A.W)
k.b=A.ad
k.c=o*0.28
k.r=l.gp(0)
k.d=A.bG
d.ah(new B.r(t.a+p,t.b+0),new B.r(n+p,m+0),k)}},
fMh:function fMh(d,e,f){this.a=d
this.b=e
this.c=f},
h6u:function h6u(d,e,f){this.a=d
this.b=e
this.c=f},
hoU(d,e,f,g,h,i){var w=new D.fCL(e,h,!0,0),v=w.$1(g),u=v.b.c
if(u>i&&u>0)v=w.$1(Math.max(2,g*i/u))
w=v.b
u=w.c
w=w.a.c
v.a4(d,f.aI(0,new B.r(u/2,w.gb4(w)/2)))},
Mz(d,e,f,g,h,i){var w=h==null,v=w?A.o.F(A.i.bd(f/10),14):h,u=A.i.F(f,10)
D.htp(d,e,v,u,g||w,i)},
MA(d,e,f,g,h,i){var w,v=d.c
J.bs(v.save())
v.clipRect(B.hS(new B.a5(0,0,0+e.a,0+e.b)),$.lF()[1],!0)
w=C.iy[A.o.F(f,8)].e
if(w===-2)D.ijy(d,e,g)
else if(w===-1)D.Mz(d,e,g,!0,h,i)
else D.Mz(d,e,g,!1,w,i)
v.restore()},
ijy(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k=e.a,j=e.b,i=new B.W(Date.now(),0,!1),h=0+k,g=0+j
$.T()
w=B.L()
w.san(C.cbt.az(0,new B.a5(0,0,h,g)))
d.aE(new B.a5(0,0,h,g),w)
w=B.L()
w.r=A.bC.gp(0)
d.aE(new B.a5(0,0,h,0+j*0.15),w)
D.hoU(d,A.pb[B.bN(i)-1]+" "+B.bD(i),new B.r(k/2,j*0.075),j*0.08,A.c,k*0.9)
v=k/7
for(h=j*0.21,g=j*0.05,u=0;u<7;++u)D.hoU(d,C.dHe[u],new B.r(v*(u+0.5),h),g,A.aF,9999)
t=B.c2(B.bD(i),B.bN(i),1,0,0,0,0,0)
s=B.bW(B.c2(B.bD(i),B.bN(i)+1,0,0,0,0,0,0))
r=B.lX(t)-1
q=j*0.74/A.i.cG((r+s)/7)
for(h=j*0.26,g=f*3,p=1;p<=s;++p){o=r+p-1
n=new B.r(v*(A.o.F(o,7)+0.5),h+q*(A.o.ao(o,7)+0.5))
if(p===B.bW(i)){w=Math.min(v,q)
m=A.aH.j(0.5+0.2*Math.sin(g))
$.T()
l=new B.ar(A.U,A.R,A.X,A.Y,A.W)
l.r=m.gp(0)
d.O(n,w*0.42,l)}w=Math.min(v,q)
m=p===B.bW(i)?A.c:A.ac
D.hoU(d,""+p,n,w*0.42,m,9999)}},
fCL:function fCL(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
wI:function wI(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
h6G(d,e,f,g,h,i,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=e.a
if(j<=0||e.b<=0)return
if(e.gdl()<180){w=e.gdl()
v=h<3
u=v?h:g
D.hPN(d,new B.btX(["tv",f,i,a0,j,e.b,v]),e,u,new D.h6H(180/w,e,f,g,h,i,a1,a0))
return}w=d.c
J.bs(w.save())
u=e.b
t=0+j
s=0+u
w.clipRect(B.hS(new B.a5(0,0,t,s)),$.lF()[1],!0)
if(h<3){$.T()
r=B.L()
r.r=C.ZP.gp(0)
d.aE(new B.a5(0,0,t,s),r)
if(h<0.5)t=h/0.5
else t=h>2.4?(3-h)/0.6:1
q=A.i.D(t,0,1)
t=e.eo(A.J)
s=e.gdl()
r=B.L()
r.san(new B.bU(A.z,0.5,A.w,k,0,B.a([A.aH.j(0.35*q),A.L],x.O),k,k).az(0,B.bY(e.eo(A.J),e.gdl()*0.5)))
d.O(t,s*0.5,r)
D.aSp(d,"NGMY",new B.r(0,u*0.36),u*0.2,A.c.j(q),A.K,u*0.03,j)
D.aSp(d,"T V",new B.r(0,u*0.6),u*0.08,A.aH.j(q),A.K,u*0.05,j)
r=j*0.3
s=u*0.78
t=B.L()
t.r=A.aH.j(q).gp(0)
d.aE(new B.a5(r,s,r+j*0.4*(h/3),s+3),t)}else if(i>=0){D.MA(d,e,i,g,a0,a1)
p=C.iy[A.o.F(i,8)].e
if(p!==-2){if(p>=0)o=p
else o=a0==null?A.o.F(A.i.bd(g/10),14):a0
D.hIs(d,e,"ADS  \xb7  "+C.Td[A.o.F(o,14)].b)}}else{n=A.i.D((h-3)/0.5,0,1)
m=A.o.F(f,10)
l=C.aLm.h(0,m)
if(m===0)D.it6(d,e,g)
else if(l==null)D.iET(d,e,g)
else D.htp(d,e,D.hRr(l),A.i.F(g,10),!1,a1)
D.hIs(d,e,"CH "+(m+1)+"  \xb7  "+C.TH[m].a)
if(n<1){$.T()
r=B.L()
r.r=A.c.j(0.6*(1-n)).gp(0)
d.aE(new B.a5(0,0,t,s),r)}}t=new B.aH($.T().r,A.ak,k,k,B.a([],x.v))
t.E(new B.aZ(0,0))
t.E(new B.aq(j*0.45,0))
t.E(new B.aq(0,u*0.5))
t.E(new B.bA())
u=B.L()
u.r=A.c.j(0.04).gp(0)
d.af(t,u)
w.restore()},
aSp(d,e,f,g,h,i,j,k){var w,v=null,u=D.ajO(h),t=A.i.fJ(g*2)
u=B.l(v,v,u,v,v,v,v,v,v,v,v,t/2,v,v,A.u,v,v,!0,v,j,v,v,v,v,v,v)
t=k==null
w=D.a4g(e,u,i,v,1,t?9999:k)
w.a4(d,f.a7(0,new B.r(i===A.K&&!t?(k-w.b.c)/2:0,0)))},
hIs(d,e,f){var w=e.b,v=e.a,u=v-w*0.34,t=w*0.04,s=w*0.03,r=B.bx(new B.a5(u,t,u+w*0.3,t+w*0.1),new B.aP(s,s))
$.T()
s=B.L()
s.r=A.v.j(0.55).gp(0)
d.aq(r,s)
D.aSp(d,"NGMY",new B.r(r.a+w*0.025,r.b+w*0.012),w*0.07,A.c,A.ba,1,null)
s=w*0.86
u=B.L()
u.r=A.v.j(0.6).gp(0)
d.aE(new B.a5(0,s,0+v,s+w*0.14),u)
D.aSp(d,f,new B.r(t,w*0.885),w*0.075,A.c,A.ba,0,v*0.74-t)},
aRw(d,e,f,g,h,i,j){var w=new D.fAo(e,h,i,j),v=w.$1(g),u=v.b.c,t=f.c-f.a
if(u>t&&u>0)v=w.$1(g*t/u)
w=f.gbD()
u=v.b
t=u.c
u=u.a.c
v.a4(d,w.aI(0,new B.r(t/2,u.gb4(u)/2)))},
it6(d5,d6,d7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5=null,c6=d6.a,c7=d6.b,c8=A.i.F(d7,14),c9=new D.fMJ(c8),d0=new D.fMF(),d1=0+c6,d2=0+c7,d3=$.T(),d4=B.L()
d4.san(C.ccF.az(0,new B.a5(0,0,d1,d2)))
d5.aE(new B.a5(0,0,d1,d2),d4)
w=c6*0.34
v=new D.fMI(w,c7)
u=v.$2(0,0.5)
d4=c7*0.75
t=B.L()
t.san(new B.bU(A.z,0.5,A.w,c5,0,B.a([A.bM.j(0.55),A.L],x.O),c5,c5).az(0,B.bY(u,d4)))
d5.O(u,d4,t)
s=new B.e4()
s.cV(11)
for(d4=d7*2,r=0;r<26;++r){t=s.ai()
q=s.ai()
p=s.ai()
o=new B.ar(A.U,A.R,A.X,A.Y,A.W)
o.r=A.c.j(0.35+0.4*Math.sin(d4+r)).gp(0)
d5.O(new B.r(t*c6,q*c7*0.45),0.6+p*1.1,o)}for(t=x.v,n=0;n<2;++n){q=B.a([],t)
m=new B.aH(d3.r,A.ak,c5,c5,q)
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
q.r=(p?C.Nx:C.bwf).gp(0)
d5.af(m,q)}j=v.$2(0,0.81)
i=d0.$1(c9.$2(0.2,1.6))
h=d0.$1(c9.$2(2.4,2.6))
for(d3=d7*1.4,g=0;g<8;++g){t=C.aDW[g]
f=t.a
e=t.b
d=Math.sin(d3+f*7)*c7*0.006
q=v.$2(f,e)
p=q.a
q=q.b
t=c7*t.c
o=new B.ar(A.U,A.R,A.X,A.Y,A.W)
o.r=A.hY.gp(0)
d5.O(new B.r(p+d,q+0),t*h,o)
o=v.$2(f,e-0.015)
q=o.a
o=o.b
p=new B.ar(A.U,A.R,A.X,A.Y,A.W)
p.r=A.et.gp(0)
d5.O(new B.r(q+d,o+0),t*0.82*h,p)}for(d3=c7*0.01,t=j.a,q=j.b,p=q+d3,o=c7*0.015,q+=o,k=c7*0.04,g=0;g<2;++g){a0=F.hr[g]*c7
D.My(d5,j,new B.r(t+a0*0.04,p),new B.r(t+a0*0.12,q),k,d3,i)}t=c7*0.085
D.My(d5,j,v.$2(0.02,0.7),v.$2(0,0.6),t,c7*0.055,i)
a1=d0.$1(c9.$2(1.8,1.6))
q=c7*0.05
p=c7*0.026
D.My(d5,v.$2(0,0.6),v.$2(-0.1,0.55),v.$2(-0.34,0.44),q,p,a1)
D.My(d5,v.$2(0,0.6),v.$2(0.1,0.55),v.$2(0.34,0.44),q,p,a1)
a2=d0.$1(c9.$2(3.2,1.3))
p=c7*0.024
a0=c7*0.018
D.My(d5,v.$2(-0.34,0.44),v.$2(-0.17,0.33),v.$2(0,0.39),p,a0,a2)
D.My(d5,v.$2(0.34,0.44),v.$2(0.17,0.33),v.$2(0,0.39),p,a0,a2)
a3=d0.$1(c9.$2(4.4,1.3))
a0=c7*0.02
p=c7*0.012
D.My(d5,v.$2(0,0.39),v.$2(-0.1,0.3),v.$2(-0.17,0.2),a0,p,a3)
D.My(d5,v.$2(0,0.39),v.$2(0.1,0.3),v.$2(0.17,0.2),a0,p,a3)
a0=c7*0.016
D.My(d5,v.$2(-0.27,0.72),v.$2(-0.14,0.78),v.$2(0,0.7),a0,p,d0.$1(c9.$2(3.6,1)))
D.My(d5,v.$2(0.27,0.72),v.$2(0.14,0.78),v.$2(0,0.7),a0,p,d0.$1(c9.$2(3.6,1)))
a4=new B.e4()
a4.cV(5)
for(a0=d7*1.6,a5=d5.c,a6=d7*1.3,a7=h*1.4,a8=c7*0.03,r=0;r<110;++r){a9=C.aDW[A.o.F(r,8)]
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
b2=B.bZ(A.J,o*b5,a8*b5)
$.T()
b3=new B.ar(A.U,A.R,A.X,A.Y,A.W)
b3.r=B.ap(A.bk,A.eG,(Math.sin(d4+r)+1)/2).gp(0)
d5.c1(b2,b3)
a5.restore()}b6=new D.fMG(c9,d5,d7,c8)
o=c7*0.075
b6.$5(0,"Bibi",v.$2(-0.27,0.72),o,5)
b6.$5(1,"Babu",v.$2(0.27,0.72),o,5.6)
b6.$5(2,"Mama",v.$2(-0.34,0.44),t,6.4)
b6.$5(3,"Baba",v.$2(0.34,0.44),t,7)
b6.$5(4,"Dada",v.$2(-0.17,0.2),o,8)
b6.$5(5,"Kaka",v.$2(0.17,0.2),o,8.6)
b7=new D.fMH(c9,d7,d5)
b7.$3(v.$2(0,0.7),c7*0.028,5.9)
b7.$3(v.$2(0,0.39),c7*0.035,7.4)
if(c8>9.3)for(t=(c8-9.3)*0.4,r=0;r<7;++r){b8=A.i.F(t+r/7,1)
D.aSp(d5,"\u2665",v.$2(Math.sin(r*2.3+d4)*0.3,0.38-b8*0.3),c7*(0.04+0.02*A.o.F(r,3)),A.hZ.j((1-b8)*0.85),A.ba,0,c5)}d4=c6*0.655+(1-d0.$1(c9.$2(1,0.9)))*c6*0.4
t=c7*0.1
a0=d4+c6*0.315
b9=new B.a5(d4,t,a0,t+c7*0.64)
a5=B.bx(b9,new B.aP(q,q))
$.T()
a6=B.L()
a6.r=C.j0.j(0.88).gp(0)
d5.aq(a5,a6)
a6=B.bx(b9,new B.aP(q,q))
a5=B.L()
a5.b=A.ad
a5.c=p
a5.r=F.ff.gp(0)
d5.aq(a6,a5)
c0=new D.fMK(b9,c7)
D.aRw(d5,"NGMY",c0.$2(0.13,0.06),c7*0.06,F.ff,!0,p)
D.aRw(d5,"Family",c0.$2(0.2,0.1),t,A.c,!0,0)
D.aRw(d5,"Tree",c0.$2(0.3,0.1),t,A.c,!0,0)
for(r=0;r<3;++r){c1=c9.$2(5.5+r*1.5,0.5)
if(c1<=0)continue
D.aRw(d5,"\u2665 "+C.cge[r],c0.$2(0.43+r*0.075,0.06).eI(new B.r((1-c1)*30,0)),q,A.iJ.j(c1),!1,0)}c2=c9.$2(11,0.5)
if(c2>0){c3=B.bZ(new B.r(b9.gbD().a,c7*0.67),o,(a0-d4)*0.6*A.eg.aA(0,c2))
d4=B.bx(c3,new B.aP(k,k))
$.T()
t=B.L()
t.r=F.ff.gp(0)
d5.aq(d4,t)
if(c2>0.8)D.aRw(d5,"ngmy.org",c3.ct(-d3),q,C.j0,!0,0)}if(c8>11.6){d3=c7*0.82
D.aRw(d5,"Family is everything",new B.a5(0,d3,0+w*2,d3+q),q,A.c.j(A.i.D((c8-11.6)/0.5,0,1)),!0,0)}if(c8<0.4)c4=1-c8/0.4
else c4=c8>13.5?(c8-13.5)/0.5:0
if(c4>0){$.T()
d3=B.L()
d3.r=A.v.j(c4).gp(0)
d5.aE(new B.a5(0,0,d1,d2),d3)}},
htL(d,e,f,g,h,i){return B.a8(d,!1).ca(B.vC(null,!1,!0,!0,new D.hf8(e,h,g,i,f),A.eX,null,A.pS,new D.hf9(),x.S))},
yy:function yy(d,e){this.a=d
this.b=e},
h6H:function h6H(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
fAo:function fAo(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fMJ:function fMJ(d){this.a=d},
fMF:function fMF(){},
fMI:function fMI(d,e){this.a=d
this.b=e},
fMG:function fMG(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fMH:function fMH(d,e,f){this.a=d
this.b=e
this.c=f},
fMK:function fMK(d,e){this.a=d
this.b=e},
hf8:function hf8(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
hf9:function hf9(){},
Yh:function Yh(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aI_:function aI_(d,e,f){var _=this
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
eZy:function eZy(d,e,f){this.a=d
this.b=e
this.c=f},
eZp:function eZp(d,e,f){this.a=d
this.b=e
this.c=f},
eZx:function eZx(d){this.a=d},
eZm:function eZm(d,e){this.a=d
this.b=e},
eZl:function eZl(d,e){this.a=d
this.b=e},
eZn:function eZn(d){this.a=d},
eZk:function eZk(d,e){this.a=d
this.b=e},
eZo:function eZo(d,e){this.a=d
this.b=e},
eZE:function eZE(d,e){this.a=d
this.b=e},
eZD:function eZD(d,e){this.a=d
this.b=e},
eZC:function eZC(d){this.a=d},
eZB:function eZB(d){this.a=d},
eZF:function eZF(d){this.a=d},
eZz:function eZz(d,e){this.a=d
this.b=e},
eZA:function eZA(d){this.a=d},
eZw:function eZw(){},
eZr:function eZr(d){this.a=d},
eZs:function eZs(d){this.a=d},
eZt:function eZt(d){this.a=d},
eZu:function eZu(d){this.a=d},
eZq:function eZq(d){this.a=d},
eZv:function eZv(d){this.a=d},
eZj:function eZj(d){this.a=d},
eZi:function eZi(d){this.a=d},
bzz:function bzz(d,e,f,g,h,i,j){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.a=j},
aPZ:function aPZ(){},
Sz(d,e,f,g,h,i,j,k,l,m){var w,v,u
if(g<1||e.length===0)return 0
w=new D.fMo(j,e,m,k,h,f,i,l)
v=w.$1(g)
u=v.b.c
if(u>l&&u>0)v=w.$1(g*l/u)
v.a4(d,new B.r(f.a-v.b.c*i,f.b))
w=v.b.a.c
return w.gb4(w)},
aRb(d,e,f,g,h,i,j,k,l){var w,v,u,t,s,r,q,p,o=h/2,n=f-o,m=f+o
o=i/2
w=g-o
v=g+o
u=l+j
o=new D.fxT()
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
t.san(new B.a6(A.aw,A.aD,A.w,B.a([o,k],x.O),null,null).az(0,B.aiP(p.gld().a.getBounds())))
d.af(p,t)},
fza(d,e,f,a0,a1,a2,a3,a4,a5){var w,v,u,t,s,r,q,p,o,n=null,m=e.hh(f,a5,a0),l=m.a,k=e.hh(f,a5+a2,a0),j=k.a,i=a1*m.b,h=a1*k.b,g=e.c
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
p=new B.aH($.T().r,A.ak,n,n,B.a([],x.v))
p.E(new B.aZ(t,r))
p.E(new B.aq(v,q))
v=i*2
p.E(new B.akT(B.bZ(l,v*w,v),3.141592653589793,-3.141592653589793,!1))
p.E(new B.aq(u,r))
p.E(new B.bA())
u=B.L()
u.san(new B.a6(A.a5,A.a9,A.w,a3,M.Ti,n).az(0,new B.a5(s,r,g,q)))
d.af(p,u)
g=h*2
o=B.bZ(j,g*w,g)
g=B.L()
v=B.ap(a4,A.c,0.4)
v.toString
g.san(new B.bU(A.n_,0.5,A.w,n,0,B.a([v,a4],x.O),n,n).az(0,o))
d.c1(o,g)},
fGf(d){var w,v,u,t,s=A.i.F(d,1)*7.48,r=[1.24,2.5,1.24,2.5]
for(w=0;w<4;++w){v=r[w]
if(s<=v){v=[C.fnm,C.foR,C.fnr,C.fnb][w].a
u=v[0]
t=v[1]
return new B.y(u+v[2]*s,t+v[3]*s)}s-=v}return C.fen},
iET(g1,g2,g3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6,d7,d8,d9,e0,e1,e2,e3,e4,e5,e6,e7,e8,e9,f0,f1,f2,f3,f4,f5,f6,f7=null,f8=1e9,f9=g2.a,g0=g2.b
if(f9<=0||g0<=0)return
w=A.i.F(g3,10)
v=new B.a5(0,0,0+f9,0+g0)
u=g1.c
J.bs(u.save())
u.clipRect(B.hS(v),$.lF()[1],!0)
t=$.T()
s=B.L()
s.san(C.eOW.az(0,v))
g1.aE(v,s)
r=g2.gdl()>=120
if(r){q=new B.e4()
q.cV(5)
for(s=g3*f9*0.01,p=g0*0.02,o=0;o<8;++o){n=A.i.F(q.ai()*f9+s,f9)
m=q.ai()
l=q.ai()
k=new B.ar(A.U,A.R,A.X,A.Y,A.W)
k.r=A.aH.j(0.07).gp(0)
k.y=new B.h2(A.H,p)
g1.O(new B.r(n,m*g0*0.5),g0*(0.02+l*0.04),k)}}j=new D.cXV(g2)
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
e=new B.aH(t,A.ak,f7,f7,B.a([],p))
n=x.g
m=x.H
l=B.B(B.a([j.hh(-1.85,-0.09000000000000001,-1.2).a,j.hh(1.85,-0.09000000000000001,-1.2).a,j.hh(1.85,-0.09000000000000001,1.1500000000000001).a,j.hh(-1.85,-0.09000000000000001,1.1500000000000001).a],n),m)
e.E(new B.zA(l,!0))
d=B.L()
d.r=A.v.j(0.55).gp(0)
if(r)d.y=new B.h2(A.H,g0*0.025)
g1.af(e,d)
l=new B.aH(t,A.ak,f7,f7,B.a([],p))
k=B.B(B.a([j.hh(-1.75,-0.07,-1.05).a,j.hh(1.75,-0.07,-1.05).a,j.hh(1.75,0,-1.05).a,j.hh(-1.75,0,-1.05).a],n),m)
l.E(new B.zA(k,!0))
k=B.L()
k.r=C.bu_.gp(0)
g1.af(l,k)
a0=new B.aH(t,A.ak,f7,f7,B.a([],p))
t=B.B(B.a([j.hh(-1.75,0,-1.05).a,j.hh(1.75,0,-1.05).a,j.hh(1.75,0,1.05).a,j.hh(-1.75,0,1.05).a],n),m)
a0.E(new B.zA(t,!0))
t=B.L()
t.san(C.cdU.az(0,B.aiP(a0.gld().a.getBounds())))
g1.af(a0,t)
if(r){a1=B.L()
a1.r=A.bw.j(0.08).gp(0)
a1.c=1
for(a2=-1.75;a2<=1.76;a2+=0.25)g1.ah(j.hh(a2,0,-1.05).a,j.hh(a2,0,1.05).a,a1)
for(a3=-1.05;a3<=1.06;a3+=0.25)g1.ah(j.hh(-1.75,0,a3).a,j.hh(1.75,0,a3).a,a1)}for(t=[C.ff6,C.fcJ,C.f8N,C.fap],n=t.length,a4=0;a4<n;++a4){m=t[a4]
a5=j.hh(m.a,0,m.b)
a6=a5.a
a7=a5.b
a8=Math.sin(s)*0.55+0.1
m=a7*0.12
m=B.bZ(a6,m*a8,m)
$.T()
l=new B.ar(A.U,A.R,A.X,A.Y,A.W)
l.r=E.Hj.gp(0)
g1.c1(m,l)
l=a7*0.06
l=B.bZ(a6,l*a8,l)
m=new B.ar(A.U,A.R,A.X,A.Y,A.W)
m.r=C.ZP.gp(0)
g1.c1(l,m)}t=$.T()
s=B.a([],p)
a9=new B.aH(t.r,A.ak,f7,f7,s)
for(o=0;o<=120;++o){b0=D.fGf(o/120)
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
t.b=A.ad
t.c=b1*0.07
t.e=A.dP
t.r=C.bsO.gp(0)
g1.af(a9,t)
t=B.L()
t.b=A.ad
t.c=b1*0.045
t.e=A.dP
t.san(C.avA.az(0,v))
g1.af(a9,t)
if(g){b2=B.L()
b2.b=A.ad
b2.c=b1*0.09
b2.r=A.hm.j(0.25+0.1*Math.sin(g3*6)).gp(0)
if(r)b2.y=new B.h2(A.H,b1*0.04)
g1.af(a9,b2)}for(t=[C.eZ3,C.eY6],s=t.length,a4=0;a4<s;++a4){n=t[a4]
b3=n.a
b4=n.b
for(n=b3-0.2,m=b4-0.17,l=b4+0.17,o=0;o<5;++o){b5=n+o*0.1
D.aRb(g1,j,b5,m,0.035,0.08,0.03,A.cE,0)
D.aRb(g1,j,b5,l,0.035,0.08,0.03,A.cE,0)}D.aRb(g1,j,b3,b4,0.55,0.3,0.08,A.cx,0)
b6=j.hh(b3,0.081,b4)
b7=b6.a
a7=b6.b
D.Sz(g1,"NGMY",new B.r(b7.a,b7.b-a7*0.05),a7*0.08,A.c.j(0.75),0.5,f7,a7*0.01,f8,A.u)}D.aRb(g1,j,-0.55,0.62,0.34,0.2,0.08,A.aM,0)
b8=j.hh(-0.7,0.1,0.62).a
b9=(1-i)*0.75
c0=j.hh(-0.7+0.32*Math.cos(b9),0.1+0.32*Math.sin(b9),0.62).a
$.T()
t=B.L()
t.c=b1*0.04
t.d=A.bG
t.san(C.avF.az(0,B.rc(b8,c0)))
g1.ah(b8,c0,t)
t=B.L()
t.r=A.aC.gp(0)
g1.O(b8,b1*0.025,t)
if(i>0.95&&w<2.6){t=A.i.D((w-2.1)/0.5,0,1)
s=B.L()
s.r=A.bM.j(0.8).gp(0)
g1.O(c0,b1*0.08*(1-t),s)}D.aRb(g1,j,0.55,0.62,0.46,0.12,0.1,C.by2,0.02)
for(t=[C.f5f,C.f8p,C.f_9,C.eWP],s=t.length,a4=0;a4<s;++a4){n=t[a4]
D.aRb(g1,j,0.41000000000000003+n.a*0.09,0.62,0.035,0.125,0.105,n.b,0.02)}D.fza(g1,j,-1.25,0,0.17,0.62,C.cDW,C.aiO,0)
c1=j.hh(-1.25,0.62,0)
a7=c1.b
D.fza(g1,j,-1.25,0,0.06,0.06,C.deh,C.amw,0.62)
D.Sz(g1,"9V",j.hh(-1.25,0.3,0).a.aI(0,new B.r(0,a7*0.06)),a7*0.11,A.bu,0.5,f7,0,f8,A.u)
D.Sz(g1,"+",c1.a.aI(0,new B.r(a7*0.16,a7*0.18)),a7*0.12,A.ac,0.5,f7,0,f8,A.u)
D.fza(g1,j,0,-0.62,0.13,0.36,C.du9,A.dU,0)
D.fza(g1,j,1.25,0,0.12,0.16,C.d94,A.d0,0)
c2=j.hh(1.25,0.36,0)
b2=c2.a
c3=c2.b*0.22
t=f>0
if(t){$.T()
c4=B.L()
s=c3*4
c4.san(new B.bU(A.z,0.5,A.w,f7,0,B.a([A.bM.j(0.65*f),A.as.j(0.18*f),A.L],x.O),W.Ta,f7).az(0,B.bY(b2,s)))
g1.O(b2,s,c4)}c5=B.bY(b2,c3)
s=$.T()
n=B.L()
m=x.O
n.san(new B.bU(A.MF,0.5,A.w,f7,0,t?B.a([A.c,A.bM,A.as],m):B.a([A.c.j(0.5),A.bQ.j(0.35),A.aM.j(0.55)],m),f7,f7).az(0,c5))
g1.c1(c5,n)
c6=B.L()
c6.b=A.ad
c6.c=Math.max(1,c3*0.06)
c6.r=(t?A.c:A.iI).gp(0)
p=B.a([],p)
c7=new B.aH(s.r,A.ak,f7,f7,p)
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
t=B.bZ(b2.a7(0,new B.r(d0*0.35,d0*0.4)),c3*0.25,c3*0.45)
$.T()
s=B.L()
s.r=A.c.j(0.6).gp(0)
g1.c1(t,s)
t=h>=0
if(t){for(o=14;o>=0;--o){d5=h-o*0.008
if(d5<0)continue
d6=D.fGf(d5)
d7=j.hh(d6.a,0.06,d6.b)
d8=1-o/15
$.T()
s=new B.ar(A.U,A.R,A.X,A.Y,A.W)
s.r=A.hm.j(0.35*d8).gp(0)
g1.O(d7.a,d7.b*0.05*(0.4+0.6*d8),s)}d9=D.fGf(h)
e0=j.hh(d9.a,0.06,d9.b)
a6=e0.a
e1=e0.b*0.09
s=e1*3
$.T()
p=B.L()
p.san(new B.bU(A.z,0.5,A.w,f7,0,B.a([A.fC.j(0.7),A.aH.j(0.2),A.L],m),M.Ti,f7).az(0,B.bY(a6,s)))
g1.O(a6,s,p)
p=B.L()
p.san(new B.bU(A.z,0.5,A.w,f7,0,C.dqi,f7,f7).az(0,B.bY(a6,e1)))
g1.O(a6,e1,p)
q=new B.e4()
q.cV(A.i.bd(g3*20))
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
g1.ah(new B.r(s+l*e1,p+k*e1),new B.r(s+c8*e2,p+c9*e2),d0)}}if(g2.gdl()<90){u.restore()
return}e3=Math.min(g0,f9*0.6)
if(w<1.9){d8=A.i.D((w-0.2)/0.5,0,1)*(1-A.i.D((w-1.5)/0.4,0,1))
s=f9/2
D.Sz(g1,"NGMY ELECTRONICS LAB PRESENTS",new B.r(s,g0*0.08),e3*0.035,A.hm.j(d8),0.5,f7,e3*0.006,f8,A.u)
J.bs(u.save())
u.translate(0,(1-A.cn.aA(0,A.i.D(A.i.D((w-0.4)/0.6,0,1),0,1)))*e3*0.05)
D.Sz(g1,"Spark Adventure",new B.r(s,g0*0.13),e3*0.1,A.c.j(d8),0.5,B.a([A.c,A.hm],m),0,f9*0.9,A.u)
u.restore()}if(w>=1.6&&w<2.6){e4="The switch closes"
e5=1}else{e5=2
if(t&&!g){e6=D.fGf(h)
e7=e6.a
if(e6.b>0.61&&e7>0.1)e4="The resistor slows the current"
else if(e7>1.24){e4="Almost at the bulb"
e5=3}else e4="Current flows from the battery"}else if(g&&w<7.6){e4="The bulb lights up!"
e5=4}else{e4=f7
e5=0}}if(e4!=null){b7=D.a4g(e4,B.l(f7,f7,A.c,f7,f7,f7,f7,f7,"Roboto",f7,f7,A.i.fJ(e3*0.045*2)/2,f7,f7,A.C,f7,f7,!0,f7,f7,f7,f7,f7,f7,f7,f7),A.ba,f7,1,1/0)
e8=e3*0.025
e9=e3*0.06
t=f9*0.05
s=g0*0.66
p=b7.b
n=p.c
p=p.a.c
l=e3*0.04
f0=B.bx(new B.a5(t,s,t+(e9+e8*3+n),s+(p.gb4(p)+e8*1.4)),new B.aP(l,l))
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
f1=new B.r(l+e8+p,f0.gbD().b)
s=B.L()
s.r=A.aH.gp(0)
g1.O(f1,p,s)
D.Sz(g1,""+e5,f1.aI(0,new B.r(0,e9*0.38)),e9*0.6,A.bF,0.5,f7,0,f8,A.u)
s=f0.gbD()
p=b7.b.a.c
b7.a4(g1,new B.r(l+e8*2+e9,s.b-p.gb4(p)/2))}if(w>=7.6){a7=A.i.D((w-7.6)/0.4,0,1)
t=B.L()
t.r=A.v.j(0.55*a7).gp(0)
g1.aE(v,t)
f2=A.eg.aA(0,A.i.D((w-7.7)/0.5,0,1))
f3=g0*0.3
J.bs(u.save())
t=f9/2
u.translate(t,f3)
g1.bV(0,0.75+0.25*f2)
u.translate(-f9/2,-f3)
s=e3*0.1
D.Sz(g1,"Build it yourself",new B.r(t,f3-e3*0.06),s,A.c.j(a7),0.5,B.a([A.c,A.hm],m),0,f9*0.9,A.u)
u.restore()
m=e3*0.05
D.Sz(g1,"NGMY Electronics Lab",new B.r(t,f3+e3*0.08),m,A.ac.j(0.85*a7),0.5,f7,0,f8,A.C)
f4=A.eg.aA(0,A.i.D((w-8.1)/0.4,0,1))
if(f4>0){f5=B.bx(B.bZ(new B.r(t,f3+e3*0.24),s,Math.max(f9*0.3,e3*0.55)*f4),new B.aP(m,m))
s=B.L()
p=f5.a
n=f5.c
s.san(C.cdg.az(0,new B.a5(p,f5.b,n,f5.d)))
g1.aq(f5,s)
if(f4>0.7)D.Sz(g1,"Open the Electronics Lab",new B.r(t,f5.gbD().b-e3*0.03),e3*0.045,A.c,0.5,f7,0,(n-p)*0.85,A.u)}}if(w<0.3)f6=1-w/0.3
else f6=w>9.7?(w-9.7)/0.3:0
if(f6>0){t=B.L()
t.r=A.v.j(A.i.D(f6,0,1)).gp(0)
g1.aE(v,t)}u.restore()},
fMo:function fMo(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
cXV:function cXV(d){var _=this
_.a=d
_.e=_.d=_.c=_.b=$},
fxT:function fxT(){},
hg9(d){var w
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
iHn(d){var w
switch(D.hg9(d)){case"lg":w=A.hK
break
case"sony":w=A.d0
break
case"apple":w=A.bP
break
case"bo":w=C.wP
break
default:w=A.aH
break}return w},
auX:function auX(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bpm:function bpm(){this.d=0
this.c=this.a=null},
eZg:function eZg(d,e){this.a=d
this.b=e},
eZh:function eZh(d,e){this.a=d
this.b=e},
eZd:function eZd(){},
eZc:function eZc(d){this.a=d},
eZe:function eZe(d){this.a=d},
eZf:function eZf(d){this.a=d},
eZa:function eZa(d){this.a=d},
eZb:function eZb(d,e){this.a=d
this.b=e},
b6a:function b6a(d,e,f){this.c=d
this.d=e
this.a=f},
bdN:function bdN(d){this.a=d},
ikW(){var w,v,u,t
try{v=$.eq().gie().b
w=new B.ba(v,B.a3(v).k("ba<2>"))
if(w.a.a===0)v=2
else{J.fs(w)
v=$.lp()
u=v.d
v=u==null?v.ghs():u}return v}catch(t){return 2}},
hPN(d,e,f,g,h){var w,v,u,t,s,r,q,p,o,n,m,l,k=f.a
if(k<=0||f.b<=0)return
if($.bHN){w=d.c
J.bs(w.save())
w.clipRect(B.hS(new B.a5(0,0,0+k,0+f.b)),$.lF()[1],!0)
h.$1(d)
w.restore()
return}v=A.i.bd(g*15)
u=$.Sv.X(0,e)
w=u==null
if(w||u.a!==v){t=f.b
s=Math.max(k,t)
r=A.i.D(Math.min(4*D.ikW(),1600/s),1,64)
$.T()
q=new B.oY(new B.ov())
p=B.v4(q,null)
p.bV(0,r)
h.$1(p)
o=q.n1()
n=o.a8E(Math.max(1,A.i.S(k*r)),Math.max(1,A.i.S(t*r)))
o.t()
if(!w)u.b.t()
u=new D.bwd(v,n)}$.Sv.n(0,e,u)
for(w=new B.ds($.Sv,$.Sv.r,$.Sv.e),m=0;w.C();){t=w.d.b
m+=t.c*t.d}w=B.a3($.Sv).k("ct<1>")
for(;;){t=$.Sv.a
if(t>1)t=t>24||m>6e6
else t=!1
if(!t)break
l=new B.ct($.Sv,w).gae(0)
if(!l.C())B.bi(B.fa())
t=$.Sv.X(0,l.gP(0)).b
m-=t.c*t.d
t.t()}n=u.b
d.ob(n,new B.a5(0,0,n.c,n.d),new B.a5(0,0,0+k,0+f.b),$.hX1())},
bwd:function bwd(d,e){this.a=d
this.b=e},
i2j(d,e,f){var w=d.BYTES_PER_ELEMENT,v=(B.kz(e,f,A.o.ea(d.byteLength,w),null,null)-e)*w
if(A.o.F(v,4)!==0)throw B.Y(B.dM(y.a,null))
return J.a52(A.ij.gaS(d),d.byteOffset+e*w,A.o.ao(v,4))},
i1e(d,e,f){var w=d.BYTES_PER_ELEMENT,v=(B.kz(e,f,A.o.ea(d.byteLength,w),null,null)-e)*w
if(A.o.F(v,4)!==0)throw B.Y(B.dM(y.a,null))
return J.aUR(A.pg.gaS(d),d.byteOffset+e*w,A.o.ao(v,4))},
hP5(){var w,v=null,u=$.T().r,t=x.v,s=new B.aH(u,A.ak,v,v,B.a([],t))
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
w=new B.aH(u,A.ak,v,v,B.a([],t))
w.E(new B.aZ(0.49,0.25))
w.E(new B.i5(0.48,0.14,0.56,0.03,0.7,0))
w.E(new B.i5(0.71,0.12,0.62,0.23,0.49,0.25))
w.E(new B.bA())
t=new B.aH(u,A.ak,v,v,B.a([],t))
t.LH(0,s,A.J)
t.LH(0,w,A.J)
return t},
hRr(d){return C.drZ[A.o.D(d,0,7)]},
ajO(d){return d.j(A.i.fJ(d.a*16)/16)},
a4g(d,e,f,g,h,i){var w,v,u=null,t=isFinite(i),s=new B.btT([d,e,h,g,f,t?A.i.fJ(i*2)/2:-1]),r=$.ahQ.X(0,s)
if(r!=null){$.ahQ.n(0,s,r)
return r}w=B.h_(g,A.cL,u,h,u,B.cW(u,u,u,u,u,u,u,u,u,e,d),f,A.cd,u,A.e4,A.ce)
w.nB(t?A.i.fJ(i*2)/2:1/0)
$.ahQ.n(0,s,w)
for(t=B.a3($.ahQ).k("ct<1>");$.ahQ.a>800;){v=new B.ct($.ahQ,t).gae(0)
if(!v.C())B.bi(B.fa())
$.ahQ.X(0,v.gP(0)).t()}return w}},C,N,F,V,W
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
D.bTE.prototype={
bDW(d){var w=this,v=w.a
if(v!=null){v=B.bc5(w,v,"Vertices",new D.bTF(),x.J)
w.b!==$&&B.aT()
w.b=v}else{w.b!==$&&B.aT()
w.b=null}},
ga6i(){if(this.c)throw B.Y(B.bd("Attempted to use a disposed Vertices."))
return this.a},
t(){if(this.c)return
var w=this.b
w===$&&B.d()
if(w!=null)w.t()
this.c=!0}}
D.cHM.prototype={
a9(){return"VertexMode."+this.b}}
D.aqk.prototype={
a9(){return"NgmyAdHero."+this.b}}
D.i6.prototype={}
D.rZ.prototype={}
D.b0R.prototype={}
D.Jh.prototype={
B(d){var w,v,u,t,s=null,r=B.aF(d,A.bZ,x.w).w,q=B.m(24),p=this.c,o=p.e,n=B.K(o.j(0.45),A.r,1),m=B.a([new B.aa(0,A.H,o.j(0.25),A.J,30)],x.V),l=p.d,k=B.a([l,o],x.O),j=A.c.j(0.22),i=B.m(14),h=x.p
k=B.a([B.p(s,B.A(B.a([B.p(s,B.V(p.c,A.c,s,s,s,28),A.f,s,s,new B.o(j,s,s,i,s,s,A.m),s,48,s,s,s,s,s,48),A.bc,B.E(B.w(B.a([B.c(p.b,s,s,s,s,s,s,A.dw,s,s,s),A.bs,B.c(p.f+" "+p.r,s,s,s,s,s,s,B.l(s,s,A.c.j(0.85),s,s,s,s,s,s,s,s,12.5,s,s,A.O,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],h),A.B,s,A.e,A.h,0,A.p),1)],h),A.l,s,A.e,A.h,0,s,s),A.f,s,s,new B.o(s,s,s,s,s,new B.a6(A.aw,A.aD,A.w,k,s,s),A.m),s,s,s,s,A.Pv,s,s,s),new B.C(K.aoL,B.c(p.w,s,s,s,s,s,s,C.fUZ,s,s,s),s)],h)
for(j=p.x,w=0;w<3;++w){v=j[w]
i=B.ap(l,A.v,0.4)
i.toString
k.push(new B.C(C.bJ4,new B.c0(A.aK,A.e,A.h,A.l,s,A.p,s,0,B.a([B.p(s,B.V(A.h1,i,s,s,s,14),A.f,s,s,new B.o(o,s,s,s,s,s,A.a6),s,20,s,s,s,s,s,20),A.ar,new B.bu(1,A.b6,B.c(v,s,s,s,s,s,s,A.X7,s,s,s),s)],h),s),s))}j=o.j(0.12)
i=B.m(14)
u=B.K(o.j(0.4),A.r,1)
t=B.ap(o,A.c,0.2)
t.toString
k.push(B.p(s,B.A(B.a([B.V(A.mE,t,s,s,s,20),A.aa,B.E(B.w(B.a([C.hgz,A.bs,B.c(p.cx,s,s,s,s,s,s,A.kX,s,s,s)],h),A.B,s,A.e,A.h,0,A.p),1)],h),A.l,s,A.e,A.h,0,s,s),A.f,s,s,new B.o(j,s,u,i,s,s,A.m),s,s,C.hLu,C.bII,A.bg,s,s,s))
i=B.E(B.em(C.c1j,C.hMd,C.hk_,this.d,B.dh(s,s,s,s,s,s,s,s,s,A.c,s,s,A.kN,s,new B.b9(B.m(14),A.a1),K.ag6,s,s,s,s)),1)
l=B.ap(l,A.v,0.5)
l.toString
k.push(new B.C(A.xb,B.A(B.a([i,A.ar,B.E(B.bH(A.adG,C.hKM,new D.c6r(d),B.bp(o,s,s,s,l,s,A.kN,s,new B.b9(B.m(14),A.a1),s,s,s)),1)],h),A.l,s,A.e,A.h,0,s,s),s))
return B.bo(!0,B.at(new B.cP(new B.aX(0,520,0,r.a.b*0.9),B.p(s,B.cc(B.w(k,A.al,s,A.e,A.P,0,A.p),A.t,s,A.y,s,s,s,s,s,A.ah),A.ap,s,s,new B.o(A.a_8,s,n,q,m,s,A.m),s,s,C.hLj,A.tE,s,s,s,s),s),1,s,s),!0,!1,A.ag,!0,!1)}}
D.wI.prototype={}
D.yy.prototype={}
D.Yh.prototype={
R(){return new D.aI_(K.Bb,null,null)}}
D.aI_.prototype={
gR0(){var w,v=this,u=v.d
if(u===$){w=B.br(null,A.oV,null,1,null,v)
w.cs(0)
v.d!==$&&B.bF()
v.d=w
u=w}return u},
gys(){var w=this.e
return w===$?this.e=this.a.e:w},
gaSV(){var w=this.as
if(w===$)w=this.as=this.a.f?3:0
return w},
gBA(){var w=this.gR0().y
w=w==null?null:A.o.ao(w.a,1000)
return(w==null?0:w)/1000},
gaym(){var w=this.f
return w>=0&&C.iy[w].e===-1},
agA(){var w,v,u=this
if(u.r)return null
w=u.f
if(w>=0){v=C.iy[w].e
if(v===-2)return null
if(v===-1)return A.o.F(u.ay+A.i.bd(Math.max(0,u.gBA()-u.ch)/10),14)
return v}v=C.aLm.h(0,A.o.F(u.gys(),10))
return v==null?null:D.hRr(v)},
cf3(d,e){if(e.a<=0||e.b<=0)return
this.l(new D.eZy(this,d,e))
H.dH(660,"",90,0,0.25,"tri")},
cf_(d){this.l(new D.eZp(this,d,14))
H.dH(900,"",40,0,0.25,"noise")},
cf1(){this.l(new D.eZx(this))
this.XE()},
agC(){return this.c6X()},
c6X(){var w=0,v=B.j(x.o),u,t=this,s,r,q
var $async$agC=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r={}
q=t.agA()
if(q==null){w=1
break}s=t.Q
if(s!=null)s.a1(0)
t.l(t.gbd9())
r.a=!1
s=t.c
s.toString
w=3
return B.b(B.bV(A.L,null,new D.eZm(r,q),s,!0,!0,!0,null,!1,!1,x.o),$async$agC)
case 3:if(t.c==null){w=1
break}if(r.a)t.cf1()
else t.XE()
case 1:return B.h(u,v)}})
return B.i($async$agC,v)},
XE(){var w=this,v=w.Q
if(v!=null)v.a1(0)
w.Q=B.cC(B.dt(0,0,0,0,0,w.gaSV()>0&&w.gBA()<3.2?13:10),w.gcbm())},
cbn(){var w=this
if(w.c==null)return
if(w.f<0&&!w.r){w.l(new D.eZn(w))
H.dH(900,"",40,0,0.2,"noise")}w.XE()},
Z(){var w=this
w.a3()
w.w=B.cC(w.a.r,w.gb3_())
w.XE()
H.dH(520,"",80,0,0.25,"tri")},
ceX(){var w=this.c
if(w!=null&&B.a8(w,!1).q8()){w=this.c
w.toString
B.a8(w,!1).N(this.gys())}},
C4(){var w=this.w
if(w!=null)w.a1(0)
this.w=null},
agB(d){this.l(new D.eZk(this,d))
H.dH(900,"",40,0,0.3,"noise")},
b31(d){this.l(new D.eZo(this,d))
H.dH(700,"",60,0,0.3,"tri")},
t(){var w,v=this
if(v.y){G.Db(E.Lx)
G.bHv()}w=v.w
if(w!=null)w.a1(0)
w=v.Q
if(w!=null)w.a1(0)
v.gR0().t()
v.bCp()},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.y,i=!j||!l.z
j=j?B.aF(d,A.dK,x.w).w.r.b+26:10
w=l.cf2(A.cC,"Back to the board",l.gb3_())
v=l.y
u=v?S.Iy:A.xr
v=v?"Leave full screen":"Full screen"
v=l.b32(u,v,l.gcf4(),C.hM4)
u=B.m(20)
t=l.f
s=l.a
r=x.p
q=new B.C(new B.R(10,j,10,0),B.A(B.a([w,A.aa,v,A.aa,B.E(new B.bL(A.a9,k,k,B.p(k,B.c(t>=0?s.c+" \xb7 "+C.iy[t].a:s.c+" \xb7 CH "+(l.gys()+1),k,1,A.a2,k,k,k,U.y9,k,k,k),A.f,k,k,new B.o(A.b9,k,k,u,k,k,A.m),k,k,k,k,A.lD,k,k,k),k),1)],r),A.l,k,A.e,A.h,0,k,k),k)
p=new B.ax(l.gb30(),6,A.r,-1)
if(l.y)j=A.agP
else{j=B.m(10)
j=new B.o(k,k,new B.bE(p,p,new B.ax(l.gb30(),16,A.r,-1),p),j,B.a([new B.aa(0,A.H,D.iHn(l.a.d).j(0.25),A.J,40)],x.V),k,A.m)}j=B.a([B.p(k,B.bv(B.m(l.y?0:4),B.cg(new D.eZE(l,i)),A.ap),A.f,k,k,j,k,k,C.hLZ,k,k,k,k,k)],r)
if(!l.y)j.push(B.ao(0,new B.dp(!0,B.at(new D.b6a(l.a.d,9.92,k),k,k,k),k),16,k,0,0,k,k))
o=B.at(new B.fN(1.7777777777777777,new B.am(A.a0,k,A.b4,A.t,j,k),k),k,k,k)
j=l.y
w=!j
v=j?l.gb33():k
if(j){j=i?1:0
r=new B.am(A.a0,k,A.b4,A.t,B.a([o,B.ao(k,B.xM(new B.dp(!i,q,k),A.aZ,A.id,j),k,k,0,0,0,k)],r),k)
j=r}else{j=l.cf0()
u=B.E(new B.C(A.fD,o,k),1)
t=A.v.j(0.65)
s=B.m(18)
n=l.f
n=B.c(n>=0?C.iy[n].a:C.TH[l.gys()].a,k,k,k,k,k,k,A.hk,A.K,k,k)
m=l.f
j=B.w(B.a([q,A.aj,j,A.N,u,B.p(k,B.w(B.a([n,B.c(m>=0?C.iy[m].c:C.TH[l.gys()].b,k,k,k,k,k,k,A.ad9,A.K,k,k)],r),A.l,k,A.e,A.P,0,A.p),A.f,k,k,new B.o(t,k,k,s,k,k,A.m),k,k,C.hLF,A.HK,A.bS,k,k,k)],r),A.l,k,A.e,A.h,0,A.p)}return B.c6(k,A.v,B.bo(w,B.aA(A.c0,j,A.y,!1,k,v,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,new D.eZF(l),k,k,k,k,k,k,!1,A.a4),w,!1,A.ag,w,w),k,!1,!1,k,k)},
cf5(){var w=!this.y
this.l(new D.eZz(this,w))
if(w){G.Db(E.acB)
G.hs0(!0)}else{G.Db(E.Lx)
G.bHv()}},
cf6(){var w,v=this
B.jG()
v.l(new D.eZA(v))
w=v.c.K(x.q).f
w.MN()
if(v.z)w.T(C.aWX)},
cf0(){var w=this,v=null,u=new D.eZw(),t=A.v.j(0.72),s=B.m(22),r=B.K(A.aH.j(0.5),A.r,1)
return B.p(v,B.A(B.a([u.$3(A.xw,"CH \u2212",new D.eZr(w)),u.$3(A.ig,"CH +",new D.eZs(w)),u.$5$color$on(A.ID,"TV",new D.eZt(w),A.aH,w.f<0),u.$5$color$on(A.zZ,"APPS",new D.eZu(w),A.bj,w.r),u.$5$color$on(A.A1,"ADS",new D.eZv(w),A.c5,w.f===0)],x.p),A.l,v,A.e,A.P,0,v,v),A.f,v,v,new B.o(t,v,r,s,v,v,A.m),v,v,v,v,A.I0,v,v,v)},
bI5(){return new D.auX(this.a.d,this.gceZ(),new D.eZj(this),null)},
gb30(){switch(D.hg9(this.a.d)){case"apple":var w=A.d0
break
case"bo":w=C.Co
break
case"sony":w=C.bj6
break
case"lg":w=A.ey
break
default:w=A.cx
break}return w},
b32(d,e,f,g){var w=null,v=B.np(w,A.b9,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w)
return B.aI(w,w,w,w,B.V(d,A.c,w,w,w,w),w,w,g,f,w,w,w,v,e,w)},
cf2(d,e,f){return this.b32(d,e,f,null)}}
D.bzz.prototype={
a4(d,e){var w=this
return D.h6G(d,e,w.b,w.d,w.e,w.c,w.r,w.f)},
aD(d){return!0}}
D.aPZ.prototype={
t(){var w=this,v=w.ab$
if(v!=null)v.a8(0,w.gbB())
w.ab$=null
w.a2()},
b0(){this.b8()
this.b5()
this.bC()}}
D.cXV.prototype={
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
D.auX.prototype={
R(){return new D.bpm()},
a7S(d,e){return this.d.$1(e)}}
D.bpm.prototype={
b34(d){this.l(new D.eZg(this,d))
this.a.a7S(0,d)},
B(d){var w,v=this
switch(D.hg9(v.a.c)){case"lg":w=v.c7e()
break
case"sony":w=v.cFt()
break
case"apple":w=v.cf7()
break
case"bo":w=v.bJ3()
break
default:w=v.czx()
break}return w},
gagD(){var w=new B.W(Date.now(),0,!1)
return A.a.aZ(A.o.v(B.cX(w)),2,"0")+":"+A.a.aZ(A.o.v(B.fx(w)),2,"0")},
aAy(d,e,f,g,h,i,j){var w,v,u=null,t=C.iy[d],s=this.d===d,r=t.d,q=B.ap(r,A.v,0.55)
q.toString
q=B.a([r,q],x.O)
r=B.m(h)
if(s)w=i
else w=A.L
w=B.K(w,A.r,s?2.5:0)
v=B.a([B.c(t.b,u,u,u,u,u,u,B.l(u,u,u,u,u,u,u,u,u,u,u,e,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],x.p)
if(g)v.push(new B.C(A.tB,B.c(t.a,u,1,A.a2,u,u,u,A.Xh,u,u,u),u))
return B.aA(u,B.p(u,B.w(v,A.l,u,A.bb,A.h,0,A.p),A.f,u,u,new B.o(u,u,w,r,u,new B.a6(A.aw,A.aD,A.w,q,u,u),A.m),u,f,u,u,u,u,u,j),A.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new D.eZh(this,d),u,u,u,u,u,u,!1,A.a4)},
b35(d,e,f,g,h,i){return this.aAy(d,e,f,!1,g,h,i)},
czx(){var w,v,u,t,s,r,q=this,p=null,o=q.a.e,n=x.p,m=B.A(B.a([C.h6b,A.aa,C.fYX,A.aX,C.c52,A.aa,C.c0z,A.aa,B.c(q.gagD(),p,p,p,p,p,p,C.aZe,p,p,p)],n),A.l,p,A.e,A.h,0,p,p),l=C.iy[q.d],k=B.c(l.a,p,p,p,p,p,p,A.kX,p,p,p)
l=B.c(l.c,p,1,A.a2,p,p,p,C.fQ_,p,p,p)
w=A.c.j(0.08)
v=B.a([],n)
for(u=0;u<2;++u){t=new B.aP(8,8)
v.push(B.p(p,B.V(C.cAf[u],A.ac,p,p,p,17),A.f,p,p,new B.o(A.by,p,p,new B.bc(t,t,t,t),p,p,A.m),p,34,p,A.Pd,p,p,p,34))}t=B.a([],n)
for(s=0;s<8;++s){r=q.d===s?1.12:1
t.push(new B.C(A.Pd,new B.zB(q.aAy(s,14,44,!0,8,A.aH,52),r,A.aZ,A.hc,p,p),p))}v.push(B.E(B.cc(B.A(t,A.l,p,A.e,A.h,0,p,p),A.t,p,A.y,p,p,p,p,p,A.aK),1))
return B.aA(p,B.p(p,B.w(B.a([m,A.aX,new B.bL(A.a5,p,p,k,p),new B.bL(A.a5,p,p,l,p),A.aj,B.p(p,B.A(v,A.l,p,A.e,A.h,0,p,p),A.f,p,p,new B.o(w,p,p,A.Z3,p,p,A.m),p,p,p,p,Q.PD,p,p,p)],n),A.l,p,A.e,A.h,0,A.p),A.f,p,p,C.baI,p,p,p,p,E.anH,p,p,p),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,o,p,p,p,p,p,p,!1,A.a4)},
c7e(){var w=null,v=this.a.e,u=x.p
return B.aA(w,B.p(w,B.w(B.a([B.A(B.a([B.p(w,C.hcp,A.f,w,w,new B.o(A.hK,w,w,B.m(10),w,w,A.m),w,w,w,w,A.nm,w,w,w),A.b7,C.h53,A.aX,B.c(this.gagD(),w,w,w,w,w,w,A.FC,w,w,w)],u),A.l,w,A.e,A.h,0,w,w),A.aX,new B.a4(w,62,B.hN(A.t,w,new D.eZc(this),8,w,w,A.aK,new D.eZd(),!1),w)],u),A.B,w,A.e,A.h,0,A.p),A.f,w,w,C.baT,w,w,w,w,O.Pj,w,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,v,w,w,w,w,w,w,!1,A.a4)},
cFt(){var w,v,u,t,s=this,r=null,q=C.iy[s.d],p=s.a.e,o=x.p,n=B.a([B.p(r,C.fsn,A.f,r,r,new B.o(A.dz,r,r,B.m(12),r,r,A.m),r,r,r,r,A.zH,r,r,r),A.aa],o)
for(w=0;w<3;++w){v=C.dxN[w]
u=v==="Apps"?A.c:A.aF
n.push(new B.C(A.j5,B.c(v,r,r,r,r,r,r,new B.F(!0,u,r,r,r,r,9.5,A.O,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r),r,r,r),r))}n.push(A.aX)
n.push(B.c(s.gagD(),r,r,r,r,r,r,C.fPl,r,r,r))
n=B.A(n,A.l,r,A.e,A.h,0,r,r)
u=q.d
t=B.ap(u,A.v,0.7)
t.toString
t=B.a([u,t],x.O)
u=B.m(10)
return B.aA(r,B.p(r,B.w(B.a([n,A.fR,B.E(B.A(B.a([B.E(B.p(r,B.w(B.a([B.c(q.b,r,r,r,r,r,r,A.qw,r,r,r),B.c(q.a,r,r,r,r,r,r,A.ou,r,r,r),B.c(q.c,r,2,A.a2,r,r,r,C.fWc,r,r,r),A.cQ,B.aA(r,B.p(r,C.h1N,A.f,r,r,new B.o(A.c,r,r,B.m(10),r,r,A.m),r,r,r,r,A.zH,r,r,r),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new D.eZe(s),r,r,r,r,r,r,!1,A.a4)],o),A.B,r,A.mM,A.h,0,A.p),A.f,r,r,new B.o(r,r,r,u,r,new B.a6(A.a5,A.a9,A.w,t,r,r),A.m),r,r,r,r,A.cu,r,r,r),5),A.aa,B.E(B.iL(!0,r,r,A.y,C.fzw,new D.eZf(s),8,A.ag,r,A.ah,!1),6)],o),A.l,r,A.e,A.h,0,r,r),1)],o),A.B,r,A.e,A.h,0,A.p),A.f,C.bwj,r,r,r,r,r,r,A.h0,r,r,r),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,p,r,r,r,r,r,r,!1,A.a4)},
cf7(){var w,v,u,t,s=this,r=null,q=s.a.e,p=x.p,o=B.A(B.a([C.c5E,A.pq,C.hiG,A.aX,B.c(s.gagD(),r,r,r,r,r,r,A.FF,r,r,r)],p),A.l,r,A.e,A.h,0,r,r),n=B.a([],p)
for(w=0;w<8;++w){v=s.d===w
u=v?6:0
t=v?C.dE5:A.TQ
v=v?1.18:1
n.push(new B.C(A.fc,B.cY(r,new B.zB(s.b35(w,20,44,12,A.c,44),v,A.aZ,A.eK,r,r),r,r,A.aZ,new B.o(r,r,r,r,t,r,A.m),A.eK,r,r,r,new B.R(0,0,0,u),r,r,r,r),r))}return B.aA(r,B.p(r,B.w(B.a([o,A.aX,new B.a4(r,68,B.cc(B.A(n,A.dr,r,A.e,A.h,0,r,r),A.t,r,A.y,r,r,r,r,r,A.aK),r),A.at,B.c(C.iy[s.d].a,r,r,r,r,r,r,A.pu,r,r,r)],p),A.l,r,A.e,A.h,0,A.p),A.f,r,r,C.baK,r,r,r,r,C.anI,r,r,r),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,!1,A.a4)},
bJ3(){var w,v,u,t,s,r,q=this,p=null,o=q.a.e,n=C.iy[q.d],m=x.p
n=B.E(B.w(B.a([C.h1k,A.aX,B.c(n.b,p,p,p,p,p,p,A.mV,p,p,p),A.at,B.c(n.a,p,p,p,p,p,p,C.fH2,p,p,p),A.bs,B.c(n.c,p,p,p,p,p,p,C.fWw,p,p,p),A.aj,B.aA(p,B.p(p,C.hkR,A.f,p,p,C.bbf,p,p,p,p,C.bF5,p,p,p),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new D.eZa(q),p,p,p,p,p,p,!1,A.a4),A.aX],m),A.B,p,A.e,A.h,0,A.p),4)
w=B.p(p,p,A.f,C.btW,p,p,p,p,p,A.eY,p,p,p,0.6)
v=B.a([],m)
for(u=0;u<8;++u){t=C.iy[u]
s=q.d===u
r=s?C.wP:C.ail
s=s?12:10.5
v.push(B.aA(p,new B.C(A.vi,B.c(t.a,p,p,p,p,p,p,new B.F(!0,r,p,"serif",p,p,s,A.kj,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p),p,p,p),p),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new D.eZb(q,u),p,p,p,p,p,p,!1,A.a4))}return B.aA(p,B.p(p,B.A(B.a([n,w,B.E(B.co(v,p,p,p,p,p,A.ah,!1),3)],m),A.l,p,A.e,A.h,0,p,p),A.f,C.bAe,p,p,p,p,p,p,A.HT,p,p,p),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,o,p,p,p,p,p,p,!1,A.a4)}}
D.b6a.prototype={
B(d){var w,v,u=null,t=D.hg9(this.c)
if(t==="apple"){w=this.d
return new B.a4(w/1.1,w,B.b4(u,u,u,new D.bdN(u),A.aA),C.hKV)}switch(t){case"lg":w=C.aU3
break
case"sony":w=C.aTW
break
case"bo":w=C.aTY
break
default:w=C.f3N
break}v=this.d
return B.c(w.a,C.hKH,u,u,u,u,u,B.l(u,u,w.b,u,u,u,u,u,u,u,u,v*0.82,u,u,A.C,u,1,!0,u,v*0.08,u,u,u,u,u,u),u,u,u)}}
D.bdN.prototype={
a4(d,e){var w,v
d.nL(0,e.a,e.b/1.1)
w=D.hP5()
$.T()
v=B.L()
v.r=A.cU.gp(0)
d.af(w,v)},
aD(d){return!1}}
D.bwd.prototype={}
var z=a.updateTypes(["~()","Yh(Z,bz<H>,bz<H>)","az<~>()","~(G)","Jh(Z)"])
D.bTF.prototype={
$1(d){d.a.delete()
return null},
$S:1684}
D.fMp.prototype={
$1(d){var w,v,u,t=this,s=t.a
if(s==null)s=null
else{w=t.b
v=t.d
u=w.a-t.c*A.i.D(v,0,4000)
w=w.b
w=new B.a6(A.a5,A.a9,A.w,s,null,null).az(0,new B.a5(u,w,u+A.i.D(v,1,4000),w+d))
s=w}return s},
$S:1685}
D.fGd.prototype={
$1(d){return","},
$S:59}
D.fBb.prototype={
$2(d,e){var w,v=this,u=v.a,t=u.c
J.bs(t.save())
w=v.b
t.translate(w.a,w.b)
u.aA(0,D.hpz(v.c*3,v.d,-0.12,d).a)
e.$0()
t.restore()},
$S:1686}
D.fBc.prototype={
$0(){var w=this.a
w.nL(0,-1,1)
D.fBa(w,this.b,this.c,!0)},
$S:0}
D.fBd.prototype={
$0(){return this.a.af(this.b,this.c)},
$S:0}
D.fBe.prototype={
$0(){var w,v,u,t,s=this,r=s.a,q=s.c
D.fBa(r,s.b,q,!1)
w=s.d
if(w>0&&w<1){r.mA(0,s.e)
v=-q
w=v*3+w*q*6-q*0.5
v*=2
u=w+q
$.T()
t=B.L()
t.san(new B.a6(A.a5,A.a9,A.w,B.a([A.c.j(0),A.c.j(0.45),A.c.j(0)],x.O),null,null).az(0,new B.a5(w,0,u,1)))
r.aE(new B.a5(w,v,u,v+q*4),t)}},
$S:0}
D.fBf.prototype={
$0(){return D.fBa(this.a,this.b,this.c,!1)},
$S:0}
D.fBg.prototype={
$0(){return this.a.af(this.b,this.c)},
$S:0}
D.fBh.prototype={
$0(){var w=this.a
w.nL(0,-1,1)
D.fBa(w,this.b,this.c,!0)},
$S:0}
D.h6v.prototype={
$1(d){var w=this,v=w.b
d.bV(0,1/v)
D.htp(d,new B.av(w.c*v,w.d*v),w.e,w.a.a,w.f,null)},
$S:315}
D.h6w.prototype={
$0(){var w=this,v=w.e
return D.mv(w.a,w.b.b.toUpperCase(),new B.r(w.c,w.d),v*0.036,w.f,w.w,null,v*0.006,w.r,A.u)},
$S:0}
D.h6x.prototype={
$0(){var w=this,v=w.e
return D.mv(w.a,w.b.f,new B.r(w.c,w.d),v,A.c,w.r,null,-v*0.02,w.f,A.u)},
$S:0}
D.h6y.prototype={
$0(){var w=this,v=w.b,u=w.e,t=B.ap(v.e,A.c,0.35)
t.toString
return D.mv(w.a,v.r,new B.r(w.c,w.d),u,A.c,w.r,B.a([A.c,t],x.O),-u*0.02,w.f,A.u)},
$S:0}
D.h6z.prototype={
$0(){var w=this,v=w.e
return D.mv(w.a,w.b.b.toUpperCase(),new B.r(w.c,w.d),v*0.036,w.f,w.w,null,v*0.006,w.r,A.u)},
$S:0}
D.h6A.prototype={
$0(){var w=this,v=w.e
return D.mv(w.a,w.b.b.toUpperCase(),new B.r(w.c,w.d),v*0.036,w.f,w.w,null,v*0.006,w.r,A.u)},
$S:0}
D.c6r.prototype={
$0(){return B.a8(this.a,!1).e4()},
$S:0}
D.fMh.prototype={
$1(d){var w=null,v=B.h_(w,A.cL,w,1,w,B.cW(w,w,w,w,w,w,w,w,w,B.l(w,w,this.b,w,w,w,w,w,w,w,w,d,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),this.a),A.a8,A.cd,w,A.e4,A.ce)
v.eL()
return v},
$S:300}
D.h6u.prototype={
$1(d){var w=this.b,v=B.kY(this.a,w,d)
v.toString
w=B.kY(w,this.c,d)
w.toString
w=B.kY(v,w,d)
w.toString
return w},
$S:1689}
D.fCL.prototype={
$1(d){var w=null,v=D.ajO(this.b),u=A.i.fJ(d*2)
return D.a4g(this.a,B.l(w,w,v,w,w,w,w,w,w,w,w,u/2,w,w,A.u,w,w,!0,w,this.d,w,w,w,w,w,w),A.ba,w,1,1/0)},
$S:300}
D.h6H.prototype={
$1(d){var w,v=this,u=v.a
d.bV(0,1/u)
w=v.b
D.h6G(d,new B.av(w.a*u,w.b*u),v.c,v.d,v.e,v.f,v.w,v.r)},
$S:315}
D.fAo.prototype={
$1(d){var w=this,v=null,u=D.ajO(w.b),t=A.i.fJ(d*2),s=w.c?A.u:A.O
return D.a4g(w.a,B.l(v,v,u,v,v,v,v,v,v,v,v,t/2,v,v,s,v,v,!0,v,w.d,v,v,v,v,v,v),A.ba,v,1,1/0)},
$S:300}
D.fMJ.prototype={
$2(d,e){return A.i.D((this.a-d)/e,0,1)},
$S:83}
D.fMF.prototype={
$1(d){return A.dQ.aA(0,d)},
$S:5}
D.fMI.prototype={
$2(d,e){var w=this.b
return new B.r(this.a+d*w,e*w)},
$S:677}
D.fMG.prototype={
$5(d,e,f,g,h){var w,v,u,t,s,r,q,p=this,o=p.a.$2(h,0.6)
if(o<=0)return
w=p.b
v=w.c
J.bs(v.save())
v.translate(f.a,f.b)
w.bV(0,A.i.D(A.n1.aA(0,o),0.01,1.3))
u=p.c
N.hto(w,A.J,g,d,u,p.d>9.5?0.5+0.3*Math.sin(u*3+d):0)
u=new B.r(0,g*1.42)
t=B.bZ(u,g*0.62,g*2.5)
s=g*0.31
r=B.bx(t,new B.aP(s,s))
$.T()
q=B.L()
q.r=A.c.gp(0)
w.aq(r,q)
w.aq(B.bx(t,new B.aP(s,s)),N.aim(A.bE,g*0.05))
D.isN(w,"\u2665 "+e,u,g*0.4,A.qJ,g*2.2)
v.restore()},
$S:1690}
D.fMH.prototype={
$3(d,e,f){var w,v,u,t,s=this.a.$2(f,0.5)
if(s<=0)return
w=A.i.D(A.n1.aA(0,s),0.01,1.3)*(1+0.07*Math.sin(this.b*6))
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
D.aSp(v,"\u2665",d.aI(0,new B.r(e*0.5*w,e*0.62*w)),e*1.3*w,A.c,A.ba,0,null)},
$S:486}
D.fMK.prototype={
$2(d,e){var w,v,u=this.a,t=u.a
u=u.c-t
t+=u*0.08
w=this.b
v=w*d
return new B.a5(t,v,t+u*0.84,v+w*e)},
$S:1692}
D.hf8.prototype={
$3(d,e,f){var w=this
return new D.Yh(w.d,w.e,w.a,w.c,w.b,null)},
$C:"$3",
$R:3,
$S:z+1}
D.hf9.prototype={
$4(d,e,f,g){var w=x.t
return new B.dd(e,!1,B.iB(A.z,g,null,new B.bk(B.cM(A.cn,e,null),new B.bq(0.85,1,w),w.k("bk<bS.T>"))),null)},
$C:"$4",
$R:4,
$S:34}
D.eZy.prototype={
$0(){var w=this.a,v=this.b,u=this.c
w.ax=new B.r(v.a/u.a,v.b/u.b)
w.at=w.gBA()
w.C4()},
$S:0}
D.eZp.prototype={
$0(){var w,v=this.a
v.f=0
v.r=!1
w=this.c
v.ay=A.o.F(A.o.F(this.b,w)+w,w)
v.ch=v.gBA()
v.C4()},
$S:0}
D.eZx.prototype={
$0(){var w,v=this.a
if(v.gaym()){w=v.agA()
v.ay=w==null?v.ay:w
v.ch=v.gBA()}else{v.as=v.gBA()
v.x=Math.max(1,v.x)}v.C4()},
$S:0}
D.eZm.prototype={
$1(d){return new D.Jh(C.Td[this.b],new D.eZl(this.a,d),null)},
$S:z+4}
D.eZl.prototype={
$0(){this.a.a=!0
B.a8(this.b,!1).e4()},
$S:0}
D.eZn.prototype={
$0(){var w,v=this.a
v.e=A.o.F(v.gys()+1,10)
w=v.gR0().y
w=w==null?null:A.o.ao(w.a,1000)
v.x=w==null?1:w
v.as=v.gBA()},
$S:0}
D.eZk.prototype={
$0(){var w,v=this.a
v.f=-1
v.e=A.o.F(v.gys()+this.b,10)
if(v.gys()<0)v.e=v.gys()+10
w=v.gR0().y
w=w==null?null:A.o.ao(w.a,1000)
v.x=w==null?1:w
v.as=v.gBA()
v.XE()
v.C4()},
$S:0}
D.eZo.prototype={
$0(){var w=this.a
w.f=this.b
w.r=!1
w.ay=0
w.ch=w.gBA()
w.C4()},
$S:0}
D.eZE.prototype={
$2(d,e){var w,v,u=null,t=e.d*0.14,s=A.i.D(t*0.62,18,30),r=this.a,q=r.y?r.gb33():u,p=x.p
q=B.a([B.aA(A.c0,B.c9(r.gR0(),new D.eZB(r),u),A.y,!1,C.hM3,q,u,u,u,new D.eZC(r),u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new D.eZD(r,e),u,u,u,!1,A.a4)],p)
if(r.r)q.push(r.bI5())
if(this.b&&!r.r&&r.agA()!=null){w=A.c.j(0.92)
v=s*0.42
q.push(B.ao(t/2-s/2,B.aE(!1,A.a3,!0,u,B.aM(!1,u,!0,new B.C(new B.R(v,0,v,0),B.A(B.a([B.V(A.kQ,A.ax,u,u,u,s*0.55),new B.a4(s*0.18,u,u,u),B.c("Learn more",u,u,u,u,u,u,B.l(u,u,A.ax,u,u,u,u,u,u,u,u,s*0.44,u,u,A.C,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],p),A.l,u,A.e,A.P,0,u,u),u),A.nz,!0,u,u,u,u,C.hLM,u,u,u,u,u,u,r.gceY(),u,u,u,u,u,u,u),A.f,w,0,u,u,A.nz,u,u,A.ai),s,u,u,t*0.3,u,u))}return new B.am(A.a0,u,A.b4,A.t,q,u)},
$S:61}
D.eZD.prototype={
$1(d){var w=this.b
return this.a.cf3(d.b,new B.av(B.aU(1/0,w.a,w.b),B.aU(1/0,w.c,w.d)))},
$S:57}
D.eZC.prototype={
$1(d){var w,v,u,t=d.d
if(t==null)t=0
if(Math.abs(t)>120){w=this.a
v=t<0?1:-1
if(w.gaym()){u=w.agA()
w.cf_((u==null?0:u)+v)}else w.agB(v)}},
$S:38}
D.eZB.prototype={
$2(d,e){var w,v,u,t,s,r=null,q=this.a,p=q.gR0().y,o=p==null?r:A.o.ao(p.a,1000),n=(o==null?0:o)/1000,m=q.x===0&&q.a.f?n:99
p=n-q.at
w=p<1.4?new D.b0R(q.ax,p):r
v=q.gaym()
u=Math.max(0,n-q.ch)
t=v?A.o.F(q.ay+A.i.bd(u/10),14):r
if(v)s=u
else s=m<3?n:Math.max(0,n-q.gaSV())
return B.b4(r,r,r,new D.bzz(q.gys(),q.f,s,m,w,t,r),A.hh)},
$S:52}
D.eZF.prototype={
$0(){var w=this.a
return w.l(w.gbd9())},
$S:0}
D.eZz.prototype={
$0(){var w=this.a
w.y=this.b
w.z=!1
w.C4()},
$S:0}
D.eZA.prototype={
$0(){var w=this.a
w.z=!w.z
w.C4()},
$S:0}
D.eZw.prototype={
$5$color$on(d,e,f,g,h){var w=null,v=h?g.j(0.28):A.c.j(0.08),u=B.m(14),t=B.K(h?g:A.aT,A.r,1)
return B.aA(w,B.p(w,B.w(B.a([B.V(d,g,w,w,w,20),A.rN,B.c(e,w,w,w,w,w,w,B.l(w,w,g,w,w,w,w,w,w,w,w,9.5,w,w,A.C,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.l,w,A.e,A.P,0,A.p),A.f,w,w,new B.o(v,w,t,u,w,w,A.m),w,w,w,A.jk,A.k_,w,w,56),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,!1,A.a4)},
$3(d,e,f){return this.$5$color$on(d,e,f,A.c,!1)},
$4$color(d,e,f,g){return this.$5$color$on(d,e,f,g,!1)},
$S:678}
D.eZr.prototype={
$0(){return this.a.agB(-1)},
$S:0}
D.eZs.prototype={
$0(){return this.a.agB(1)},
$S:0}
D.eZt.prototype={
$0(){return this.a.agB(0)},
$S:0}
D.eZu.prototype={
$0(){var w=this.a
return w.l(new D.eZq(w))},
$S:0}
D.eZq.prototype={
$0(){var w=this.a
w.r=!w.r
w.C4()},
$S:0}
D.eZv.prototype={
$0(){return this.a.b31(0)},
$S:0}
D.eZj.prototype={
$0(){var w=this.a
return w.l(new D.eZi(w))},
$S:0}
D.eZi.prototype={
$0(){return this.a.r=!1},
$S:0}
D.fMo.prototype={
$1(d){var w,v,u,t,s=this,r=null,q=s.a,p=s.b,o=s.c,n=s.d
if(q==null){q=A.i.fJ(d*2)
n=D.a4g(p,B.l(r,r,D.ajO(s.e),r,r,r,r,r,"Roboto",r,r,q/2,r,r,o,r,1.1,!0,r,n,r,r,r,r,r,r),A.ba,r,1,1/0)
q=n}else{$.T()
w=B.L()
v=s.f
u=s.w
t=v.a-s.r*A.i.D(u,0,4000)
v=v.b
w.san(new B.a6(A.a5,A.a9,A.w,q,r,r).az(0,new B.a5(t,v,t+A.i.D(u,1,4000),v+d)))
p=B.h_(r,A.cL,r,1,r,B.cW(r,r,r,r,r,r,r,r,r,B.l(r,r,r,r,r,r,r,r,"Roboto",r,r,d,r,r,o,w,1.1,!0,r,n,r,r,r,r,r,r),p),A.a8,A.cd,r,A.e4,A.ce)
q=p}q.eL()
return q},
$S:300}
D.fxT.prototype={
$1(d){var w=new B.aH($.T().r,A.ak,null,null,B.a([],x.v)),v=B.B(d,x.H)
w.E(new B.zA(v,!0))
return w},
$S:1694}
D.eZg.prototype={
$0(){return this.a.d=this.b},
$S:0}
D.eZh.prototype={
$0(){return this.a.b34(this.b)},
$S:0}
D.eZd.prototype={
$2(d,e){return A.b7},
$S:36}
D.eZc.prototype={
$2(d,e){var w=null,v=this.a,u=v.d===e?1.1:1
u=B.a([B.uZ(v.b35(e,18,46,6,A.c,80),A.aZ,A.hc,u)],x.p)
if(v.d===e)u.push(new B.C(A.tB,B.c(C.iy[e].a,w,w,w,w,w,w,C.fUz,w,w,w),w))
return B.w(u,A.l,w,A.e,A.P,0,A.p)},
$S:679}
D.eZe.prototype={
$0(){var w=this.a
return w.a.a7S(0,w.d)},
$S:0}
D.eZf.prototype={
$2(d,e){return this.a.aAy(e,15,1/0,!0,8,A.c,1/0)},
$S:42}
D.eZa.prototype={
$0(){var w=this.a
return w.a.a7S(0,w.d)},
$S:0}
D.eZb.prototype={
$0(){return this.a.b34(this.b)},
$S:0};(function aliases(){var w=D.aPZ.prototype
w.bCp=w.t})();(function installTearOffs(){var w=a._instance_0u,v=a._instance_1u
var u
w(u=D.aI_.prototype,"gceY","agC",2)
w(u,"gcbm","cbn",0)
w(u,"gb3_","ceX",0)
w(u,"gbd9","C4",0)
v(u,"gceZ","b31",3)
w(u,"gcf4","cf5",0)
w(u,"gb33","cf6",0)})();(function inheritance(){var w=a.mixinHard,v=a.inheritMany,u=a.inherit
v(B.aG,[D.bTE,D.i6,D.rZ,D.b0R,D.wI,D.yy,D.cXV,D.bwd])
v(B.hq,[D.bTF,D.fMp,D.fGd,D.h6v,D.fMh,D.h6u,D.fCL,D.h6H,D.fAo,D.fMF,D.fMG,D.fMH,D.hf8,D.hf9,D.eZm,D.eZD,D.eZC,D.eZw,D.fMo,D.fxT])
v(B.lk,[D.cHM,D.aqk])
v(B.iW,[D.fBb,D.fMJ,D.fMI,D.fMK,D.eZE,D.eZB,D.eZd,D.eZc,D.eZf])
v(B.iV,[D.fBc,D.fBd,D.fBe,D.fBf,D.fBg,D.fBh,D.h6w,D.h6x,D.h6y,D.h6z,D.h6A,D.c6r,D.eZy,D.eZp,D.eZx,D.eZl,D.eZn,D.eZk,D.eZo,D.eZF,D.eZz,D.eZA,D.eZr,D.eZs,D.eZt,D.eZu,D.eZq,D.eZv,D.eZj,D.eZi,D.eZg,D.eZh,D.eZe,D.eZa,D.eZb])
v(B.aw,[D.Jh,D.b6a])
v(B.af,[D.Yh,D.auX])
v(B.ah,[D.aPZ,D.bpm])
u(D.aI_,D.aPZ)
v(B.lM,[D.bzz,D.bdN])
w(D.aPZ,B.cj)})()
B.jd(b.typeUniverse,JSON.parse('{"Jh":{"aw":[],"x":[]},"Yh":{"af":[],"x":[]},"aI_":{"ah":["Yh"]},"bzz":{"aC":[]},"auX":{"af":[],"x":[]},"bpm":{"ah":["auX"]},"b6a":{"aw":[],"x":[]},"bdN":{"aC":[]},"OI":{"af":[],"x":[]}}'))
var y={a:"The number of bytes to view must be a multiple of 4"}
var x=(function rtii(){var w=B.as
return{J:w("bLB"),V:w("N<aa>"),O:w("N<u>"),X:w("N<i6>"),g:w("N<r>"),v:w("N<fZ>"),s:w("N<n>"),p:w("N<x>"),n:w("N<H>"),w:w("im"),H:w("r"),Q:w("dy<H>"),t:w("bq<H>"),W:w("bg<n>"),q:w("l2"),S:w("G"),o:w("~")}})();(function constants(){var w=a.makeConstList
C.b5S=new B.di(0.35,-0.25)
C.b7u=new B.El(2,"dst")
C.aiC=new B.u(1,0.0196078431372549,0.03137254901960784,0.058823529411764705,A.q)
C.by9=new B.u(1,0.043137254901960784,0.10196078431372549,0.2,A.q)
C.du1=w([C.aiC,C.by9],x.O)
C.cen=new B.a6(A.aU,A.b1,A.w,C.du1,null,null)
C.baI=new B.o(null,null,null,null,null,C.cen,A.m)
C.bvC=new B.u(1,0.42745098039215684,0.47843137254901963,0.5764705882352941,A.q)
C.bjz=new B.u(1,0.16862745098039217,0.1803921568627451,0.26666666666666666,A.q)
C.bkP=new B.u(1,0.4823529411764706,0.29411764705882354,0.41568627450980394,A.q)
C.dHI=w([C.bvC,C.bjz,C.bkP],x.O)
C.ccD=new B.a6(A.aw,A.aD,A.w,C.dHI,null,null)
C.baK=new B.o(null,null,null,null,null,C.ccD,A.m)
C.b5V=new B.di(0.5,-0.6)
C.bzA=new B.u(1,0.22745098039215686,0.054901960784313725,0.10980392156862745,A.q)
C.doG=w([C.bzA,A.ey],x.O)
C.eP5=new B.bU(C.b5V,1.3,A.w,null,0,C.doG,null,null)
C.baT=new B.o(null,null,null,null,null,C.eP5,A.m)
C.wP=new B.u(1,0.8392156862745098,0.7176470588235294,0.4823529411764706,A.q)
C.b9_=new B.ax(C.wP,1,A.r,-1)
C.b9c=new B.bE(A.a1,A.a1,C.b9_,A.a1)
C.bbf=new B.o(null,null,C.b9c,null,null,null,A.m)
C.biw=new B.u(1,0.027450980392156862,0.03137254901960784,0.047058823529411764,A.q)
C.ZM=new B.u(0.9490196078431372,0.06666666666666667,0.07450980392156863,0.09411764705882353,A.q)
C.bj6=new B.u(1,0.16470588235294117,0.16470588235294117,0.17647058823529413,A.q)
C.ahW=new B.u(1,0.6039215686274509,0.4196078431372549,0.07058823529411765,A.q)
C.Np=new B.u(1,0.16862745098039217,0.1843137254901961,0.21176470588235294,A.q)
C.ZP=new B.u(1,0.00784313725490196,0.01568627450980392,0.03529411764705882,A.q)
C.aia=new B.u(1,0.5411764705882353,0.42745098039215684,0.06274509803921569,A.q)
C.ail=new B.u(1,0.6588235294117647,0.6235294117647059,0.5647058823529412,A.q)
C.Nx=new B.u(1,0.24705882352941178,0.5607843137254902,0.30196078431372547,A.q)
C.Co=new B.u(1,0.7215686274509804,0.6980392156862745,0.6549019607843137,A.q)
C.aiO=new B.u(1,0.7215686274509804,0.45098039215686275,0.2,A.q)
C.bmG=new B.u(1,0.47843137254901963,0.3058823529411765,0.0196078431372549,A.q)
C.boi=new B.u(1,0.01568627450980392,0.0196078431372549,0.0392156862745098,A.q)
C.NO=new B.u(1,1,0.23137254901960785,0.12156862745098039,A.q)
C.ajr=new B.u(1,0.00784313725490196,0.011764705882352941,0.0392156862745098,A.q)
C.NU=new B.u(1,0.7215686274509804,0.7529411764705882,0.8,A.q)
C.z3=new B.u(1,0.06666666666666667,0.0784313725490196,0.09411764705882353,A.q)
C.nR=new B.u(1,0.054901960784313725,0.07058823529411765,0.09411764705882353,A.q)
C.bsO=new B.u(1,0.5411764705882353,0.41568627450980394,0.06274509803921569,A.q)
C.btW=new B.u(1,0.2901960784313726,0.26666666666666666,0.23529411764705882,A.q)
C.bu_=new B.u(1,0.0196078431372549,0.18823529411764706,0.12156862745098039,A.q)
C.j0=new B.u(1,0.043137254901960784,0.12156862745098039,0.29411764705882354,A.q)
C.bup=new B.u(1,0.054901960784313725,0.07058823529411765,0.13333333333333333,A.q)
C.ng=new B.u(1,0.09019607843137255,0.09019607843137255,0.10980392156862745,A.q)
C.bwf=new B.u(1,0.1843137254901961,0.43529411764705883,0.23137254901960785,A.q)
C.bwj=new B.u(1,0.08627450980392157,0.09411764705882353,0.10980392156862745,A.q)
C.by2=new B.u(1,0.9058823529411765,0.8235294117647058,0.6509803921568628,A.q)
C.a0O=new B.u(1,1,0.9529411764705882,0.6274509803921569,A.q)
C.amw=new B.u(1,0.9607843137254902,0.7686274509803922,0.6039215686274509,A.q)
C.bAe=new B.u(1,0.10196078431372549,0.09019607843137255,0.0784313725490196,A.q)
C.amG=new B.u(1,0.7176470588235294,0.4745098039215686,0.12156862745098039,A.q)
C.bF5=new B.R(0,0,0,1)
C.anI=new B.R(10,6,10,8)
C.anY=new B.R(14,10,10,10)
C.bII=new B.R(18,14,18,0)
C.bJ4=new B.R(18,6,18,0)
C.bUm=new B.a_(62895,"MaterialIcons",!1)
C.Qv=new B.a_(62970,"MaterialIcons",!1)
C.asG=new B.a_(983316,"MaterialIcons",!1)
C.p4=new B.a_(983617,"MaterialIcons",!1)
C.c0z=new B.ae(A.DU,13,A.ac,null,null,null)
C.c1j=new B.ae(A.od,18,null,null,null,null)
C.c52=new B.ae(A.eO,13,A.ac,null,null,null)
C.bX5=new B.a_(983768,"MaterialIcons",!1)
C.c5E=new B.ae(C.bX5,13,A.c,null,null,null)
C.cbt=new B.a6(A.aU,A.b1,A.w,R.Tn,null,null)
C.d8X=w([A.bM,E.Hj,A.bM],x.O)
C.avA=new B.a6(A.a5,A.a9,A.w,C.d8X,null,null)
C.dqU=w([A.bP,A.bl,A.dU],x.O)
C.ccz=new B.a6(A.aw,A.aD,A.w,C.dqU,null,null)
C.ND=new B.u(1,0.11764705882352941,0.30980392156862746,0.6392156862745098,A.q)
C.cU5=w([C.j0,C.ND,A.as,A.bM],x.O)
C.dy5=w([0,0.42,0.8,1],x.n)
C.ccF=new B.a6(A.aU,A.b1,A.w,C.cU5,C.dy5,null)
C.akU=new B.u(1,0.16862745098039217,0.18823529411764706,0.23137254901960785,A.q)
C.bz5=new B.u(1,0.788235294117647,0.8196078431372549,0.8627450980392157,A.q)
C.bvO=new B.u(1,0.34901960784313724,0.3764705882352941,0.43137254901960786,A.q)
C.d6q=w([C.akU,C.bz5,C.bvO,C.akU],x.O)
C.ccH=new B.a6(A.a5,A.a9,A.w,C.d6q,A.Eg,null)
C.cGZ=w([A.bP,A.d0],x.O)
C.avF=new B.a6(A.a5,A.a9,A.w,C.cGZ,null,null)
C.d8z=w([A.z6,A.aH],x.O)
C.cdg=new B.a6(A.a5,A.a9,A.w,C.d8z,null,null)
C.boZ=new B.u(1,0.0784313725490196,0.3803921568627451,0.24705882352941178,A.q)
C.bvw=new B.u(1,0.043137254901960784,0.2901960784313726,0.18823529411764706,A.q)
C.biB=new B.u(1,0.03137254901960784,0.2196078431372549,0.13725490196078433,A.q)
C.dc2=w([C.boZ,C.bvw,C.biB],x.O)
C.cdU=new B.a6(A.aw,A.aD,A.w,C.dc2,null,null)
C.ahO=new B.u(1,0.12156862745098039,0.1411764705882353,0.18823529411764706,A.q)
C.cge=w(["Add every person","Link mums, dads, kids","Keep it for ever"],x.s)
C.dTv=new D.wI("NGMY Ads","\ud83d\udce2","Every NGMY ad, as a real 3D commercial",A.c5,-1)
C.dTp=new D.wI("Civic Registry","\ud83e\udeaa","Enroll your family in your community",A.dh,0)
C.dTu=new D.wI("Jobs","\ud83d\udcbc","Find work and get hired",A.as,1)
C.dTA=new D.wI("NGMY Store","\ud83d\udecd\ufe0f","African food and traditions",A.fM,2)
C.dTB=new D.wI("Kiswahili","\ud83d\udde3\ufe0f","Learn Swahili and English",A.bU,3)
C.dTy=new D.wI("Doc Scanner","\ud83d\udcc4","Scan, save and share",A.ci,4)
C.dTq=new D.wI("Invoices","\ud83e\uddfe","Professional invoices",A.bE,5)
C.dTn=new D.wI("Calendar","\ud83d\udcc5","This month, today lit up",A.aC,-2)
C.iy=w([C.dTv,C.dTp,C.dTu,C.dTA,C.dTB,C.dTy,C.dTq,C.dTn],B.as("N<wI>"))
C.W1=new B.y(2,3)
C.W2=new B.y(3,4)
C.cAf=w([A.kP,A.zZ],B.as("N<a_>"))
C.cDW=w([A.ax,A.cz,F.ni],x.O)
C.alC=new B.u(1,0.24705882352941178,0.22745098039215686,0.2,A.q)
C.dwS=w(["A Registry ID card for every member","Birthdays and children remembered","Votes and receipts everyone can see"],x.s)
C.dRw=new D.i6(A.f6,"Registry ID","Active")
C.dRk=new D.i6(A.Io,"Birthdays","On")
C.dRN=new D.i6(A.p1,"Community vote","Open")
C.dJQ=w([C.dRw,C.dRk,C.dRN],x.X)
C.UQ=new D.aqk(1,"card")
C.dS0=new D.rZ(null,"NGMY Civic Registry",A.mC,A.dl,A.aH,"Your family.","Counted. Helped.","Enroll your whole family in the community registry.",C.dwS,"Civic Registry",6,"#","Family members enrolled",0,C.dJQ,C.UQ,"REGISTRY ID","One card for your whole community life.","NGMY Hub tab, then Civic Registry")
C.do5=w(["Find jobs near you","Book house repairs and workers","Advisors help with applications"],x.s)
C.dRZ=new D.i6(V.Rc,"Warehouse helper","Apply")
C.dRG=new D.i6(A.QR,"House repair","Book")
C.dRM=new D.i6(A.A2,"House worker","Hire")
C.cZb=w([C.dRZ,C.dRG,C.dRM],x.X)
C.ua=new D.aqk(2,"badge")
C.dSc=new D.rZ(A.atr,"NGMY Jobs and Help",A.q7,A.kf,A.aQ,"Need work?","Get hired.","Jobs, house repairs and house workers, all in one Help Center.",C.do5,"Help Center",24,"#","Jobs near you",0,C.cZb,C.ua,"HIRED","From the search to the first paycheck.","NGMY Hub tab, then Help Center")
C.dmP=w(["African food and traditions","Open your own store","Support Congolese and African sellers"],x.s)
C.bWp=new B.a_(983309,"MaterialIcons",!1)
C.dRy=new D.i6(C.bWp,"Fufu flour 2 kg","$12")
C.bVG=new B.a_(63590,"MaterialIcons",!1)
C.dRn=new D.i6(C.bVG,"Congolese coffee","$18")
C.dRx=new D.i6(A.arT,"Wax print fabric","$15")
C.dvu=w([C.dRy,C.dRn,C.dRx],x.X)
C.dS1=new D.rZ(A.R5,"NGMY Store",A.kp,A.kf,A.cW,"Shop our community.","Sell yours too.","Buy and sell inside NGMY. Approved members can open a store.",C.dmP,"NGMY Store",45,"$#.00","Your cart",0,C.dvu,C.ua,"OPEN NOW","Every order supports our community.","NGMY Hub tab, then NGMY Store")
C.atm=new B.a_(983989,"MaterialIcons",!1)
C.df0=w(["Short daily lessons","A picture for every word","Swahili and English both ways"],x.s)
C.dRr=new D.i6(C.atm,"Jambo","Hello")
C.dRs=new D.i6(A.hQ,"Asante","Thank you")
C.dRp=new D.i6(A.xq,"Familia","Family")
C.dtI=w([C.dRr,C.dRs,C.dRp],x.X)
C.dS4=new D.rZ(C.atm,"Kiswahili School",A.p5,A.tc,A.mr,"Habari!","Learn Swahili.","Learn Swahili and English, one short lesson at a time.",C.df0,"Kiswahili School",12,"# days","Your learning streak",0,C.dtI,C.ua,"KARIBU","Karibu means welcome.","Creator Hub tab, then Kiswahili School")
C.cR2=w(["Sharp scans from your camera","Saved as a PDF","Share it anywhere"],x.s)
C.dRY=new D.i6(A.tP,"Lease.pdf","2 pages")
C.dRQ=new D.i6(A.h3,"Receipt.pdf","1 page")
C.dRV=new D.i6(A.mC,"ID copy.pdf","Shared")
C.dk_=w([C.dRY,C.dRQ,C.dRV],x.X)
C.dS_=new D.rZ(P.IK,"Document Scanner",A.a4u,A.ajc,A.h9,"Paper in.","PDF out.","Scan, save and share your papers in seconds.",C.cR2,"Document Scanner",3,"# pages","Scanned today",0,C.dk_,C.ua,"PDF","Every paper, safe on your phone.","NGMY Hub tab, then Document Scanner")
C.dzP=w(["Your logo and business details","Totals worked out for you","Send it as a PDF"],x.s)
C.dRC=new D.i6(A.DM,"Kitchen repair","$850")
C.dRR=new D.i6(A.IB,"Materials","$320")
C.dRl=new D.i6(A.DQ,"Delivery","$80")
C.csG=w([C.dRC,C.dRR,C.dRl],x.X)
C.dS7=new D.rZ(A.kR,"NGMY Invoices",A.h3,A.kb,A.c5,"Look professional.","Get paid faster.","Make clean invoices and receipts in minutes.",C.dzP,"Invoice 1042",1250,"$#.00","Total due",0,C.csG,C.ua,"PAID","Paid. Stamped. Done.","Tool Hub tab, then Business Essentials")
C.doe=w(["Grandparents to grandchildren","A photo on every branch","Share it with the family"],x.s)
C.bV0=new B.a_(63229,"MaterialIcons",!1)
C.dRv=new D.i6(C.bV0,"Grandparents","4")
C.bW7=new B.a_(983134,"MaterialIcons",!1)
C.dRq=new D.i6(C.bW7,"Parents","6")
C.dRE=new D.i6(A.Qy,"Children","8")
C.dIG=w([C.dRv,C.dRq,C.dRE],x.X)
C.dS8=new D.rZ(F.atv,"NGMY Family Tree",A.Qp,A.nb,A.No,"Every branch.","Every story.","Grow your family tree and write your family book.",C.doe,"Family Tree",18,"#","Family members",0,C.dIG,C.ua,"FAMILY","Family is everything.","Profile tab, then Worksheets, then Family Tree")
C.dwM=w(["Kept safe on the server","A receipt for every payment","Rewards in one place"],x.s)
C.dRK=new D.i6(A.j9,"Crown reward","+$1.00")
C.dRP=new D.i6(A.kP,"House Care","-$25.00")
C.dRL=new D.i6(A.a4X,"Gift received","+$20.00")
C.dFs=w([C.dRK,C.dRP,C.dRL],x.X)
C.a96=new D.aqk(0,"coin")
C.dS2=new D.rZ(null,"NGMY Wallet",A.jG,A.wM,A.eH,"One balance.","Everywhere.","Your NGMY balance is the same on every phone you use.",C.dwM,"NGMY Wallet",1250.75,"$#","Balance",2,C.dFs,C.a96,"$","Your money, always in sync.","Your balance shows on Home and all across NGMY")
C.dDr=w(["Quick arcade games","Play offline, counted later","Every win has a receipt"],x.s)
C.dRW=new D.i6(A.oa,"Lucky Dice","Play")
C.dRm=new D.i6(A.QF,"Puzzle Rush","Play")
C.dRt=new D.i6(A.m5,"Top score","2,400")
C.dCb=w([C.dRW,C.dRm,C.dRt],x.X)
C.dS5=new D.rZ(null,"NGMY Game Center",A.oe,A.m_,A.bd,"Play.","Win coins.","Arcade games in the Vault Channel, with your own game receipts.",C.dDr,"Vault Arcade",2400,"#","High score",0,C.dCb,C.a96,"WIN","Game on, any time.","Home tab, then Vault Channel")
C.d2d=w(["Parts that really work","An AI Inventor to help you","See how electricity flows"],x.s)
C.bUl=new B.a_(62894,"MaterialIcons",!1)
C.dRB=new D.i6(C.bUl,"Battery","9 V")
C.dRJ=new D.i6(C.p4,"Switch","On")
C.dRO=new D.i6(L.lf,"Bulb","Lit")
C.dGy=w([C.dRB,C.dRJ,C.dRO],x.X)
C.dS3=new D.rZ(L.lf,"NGMY Electronics Lab",I.vw,A.z6,A.b3,"Build it.","Watch it light up.","Wire real circuits: batteries, switches, bulbs, TVs and more.",C.d2d,"Electronics Lab",9,"# V","Battery",0,C.dGy,C.ua,"IT WORKS","Learn by building.","Home tab, then Core Protocol, then Electronics Lab")
C.dhl=w(["Chat like with a real person","Help with jobs and benefits","Answers in Swahili too"],x.s)
C.dRD=new D.i6(A.DF,"How do I apply?","Answered")
C.dRT=new D.i6(A.tP,"Check my letter","Done")
C.dRA=new D.i6(A.p5,"Jibu kwa Kiswahili","Sawa")
C.ddG=w([C.dRD,C.dRT,C.dRA],x.X)
C.dSb=new D.rZ(A.vy,"NGMY Advisors",A.DV,A.qJ,A.cW,"Questions?","Ask an advisor.","Friendly AI advisors for jobs, applications and everyday life.",C.dhl,"NGMY Advisors",24,"# / 7","Always here",0,C.ddG,C.ua,"ASK ME","Help is one message away.","Advisors tab")
C.dGQ=w(["Walk through every room","Wire lights and outlets","Learn a trade step by step"],x.s)
C.dRX=new D.i6(F.asd,"Frame","Done")
C.dRI=new D.i6(I.vw,"Wiring","Done")
C.dRo=new D.i6(I.a4W,"Plumbing","Now")
C.dJc=w([C.dRX,C.dRI,C.dRo],x.X)
C.dS6=new D.rZ(A.kP,"NGMY Construction Lab",A.rm,A.is,A.as,"Frame. Wire.","Finish a house.","Real 3D wiring, plumbing and a whole house to build.",C.dGQ,"Construction Lab",86,"#%","House finished",0,C.dJc,C.ua,"BUILT","Learn the trade, room by room.","Home tab, then Core Protocol, then Construction Lab")
C.dqR=w(["Record and edit audio","Make videos with titles","QR codes and Doc Share"],x.s)
C.dRu=new D.i6(A.p2,"Recorder Studio","Open")
C.dRS=new D.i6(A.QY,"Video Studio","Open")
C.dRz=new D.i6(A.jI,"QR Generator","Open")
C.d64=w([C.dRu,C.dRS,C.dRz],x.X)
C.dS9=new D.rZ(A.fQ,"NGMY Creator Hub",A.eh,A.i2,A.c5,"Record. Film.","Create.","Recorder, Video Studio, QR codes and more in one place.",C.dqR,"Creator Hub",8,"#","Studios ready for you",0,C.d64,C.ua,"ACTION","Your ideas, made real.","Creator Hub tab")
C.dzq=w(["Many designs to choose from","Your logo and your colours","Share by QR or as a picture"],x.s)
C.dRU=new D.i6(A.m7,"Design","Midnight")
C.bWi=new B.a_(983243,"MaterialIcons",!1)
C.dRF=new D.i6(C.bWi,"QR code","On")
C.dRH=new D.i6(A.IO,"Shared","12 times")
C.dzR=w([C.dRU,C.dRF,C.dRH],x.X)
C.dSa=new D.rZ(null,"NGMY Business Cards",A.a4q,A.cX,A.fK,"First impressions","that last.","Design a card people remember and share it with a QR code.",C.dzq,"Business Card",250,"#","Card scans",0,C.dzR,C.UQ,"YOUR NAME","Hand it over. Be remembered.","Tool Hub tab, then Business Card Creator")
C.Td=w([C.dS0,C.dSc,C.dS1,C.dS4,C.dS_,C.dS7,C.dS8,C.dS2,C.dS5,C.dS3,C.dSb,C.dS6,C.dS9,C.dSa],B.as("N<rZ>"))
C.d94=w([A.bl,A.bP,A.cz],x.O)
C.bna=new B.u(1,0.5411764705882353,0.3333333333333333,0.13725490196078433,A.q)
C.deh=w([C.aiO,C.amw,C.bna],x.O)
C.fiF=new B.b1(-0.3,0.32,0.2)
C.fg0=new B.b1(-0.08,0.17,0.22)
C.fg1=new B.b1(0.14,0.14,0.2)
C.fhR=new B.b1(0.34,0.3,0.2)
C.fkp=new B.b1(0,0.32,0.26)
C.fhy=new B.b1(-0.42,0.46,0.15)
C.fkk=new B.b1(0.42,0.46,0.15)
C.fiX=new B.b1(0,0.07,0.15)
C.aDW=w([C.fiF,C.fg0,C.fg1,C.fhR,C.fkp,C.fhy,C.fkk,C.fiX],B.as("N<+(H,H,H)>"))
C.dqi=w([A.c,A.fC,A.aH],x.O)
C.drZ=w([11,9,10,8,0,12,13,2],B.as("N<G>"))
C.evF=new D.yy("NGMY Tree Story","A family grows, one branch at a time")
C.evE=new D.yy("NGMY Store","Open the doors to something new")
C.evG=new D.yy("NGMY Construction Lab","Build, wire and finish a real house")
C.evz=new D.yy("NGMY Electronics Lab","Build circuits that really light up")
C.evC=new D.yy("NGMY Advisors","Say hi to a friendly advisor")
C.evA=new D.yy("Spark Adventure","Follow Sparky round a circuit board")
C.evH=new D.yy("NGMY Game Center","Play games and win coins")
C.evB=new D.yy("NGMY Business Cards","Make a card people remember")
C.evy=new D.yy("NGMY Civic Registry","Your family, counted and helped")
C.evD=new D.yy("NGMY Creator Hub","Record, film and create")
C.TH=w([C.evF,C.evE,C.evG,C.evz,C.evC,C.evA,C.evH,C.evB,C.evy,C.evD],B.as("N<yy>"))
C.du9=w([A.dl,A.cw,A.GZ],x.O)
C.dxN=w(["For you","Apps","Library"],x.s)
C.aEY=w([-16,16],x.n)
C.U4=w([-22,22],x.n)
C.U5=w([-24,24],x.n)
C.a7X=w([-5,5],x.n)
C.bdm=new B.aa(0,A.H,A.b9,A.dv,14)
C.dE5=w([C.bdm],x.V)
C.dHe=w(["M","T","W","T","F","S","S"],x.s)
C.aLm=new B.d1([1,7,2,0,3,1,4,2,6,3,7,6,8,4,9,5],B.as("d1<G,G>"))
C.boz=new B.u(1,0.054901960784313725,0.16470588235294117,0.22745098039215686,A.q)
C.bzW=new B.u(1,0.027450980392156862,0.08235294117647059,0.12941176470588237,A.q)
C.dig=w([C.boz,C.bzW,C.ZP],x.O)
C.eOW=new B.bU(A.C_,1.1,A.w,null,0,C.dig,A.vP,null)
C.bvh=new B.u(1,0.9607843137254902,0.7725490196078432,0.25882352941176473,A.q)
C.dfm=w([T.CM,C.bvh,C.amG],x.O)
C.eP0=new B.bU(A.MF,0.5,A.w,null,0,C.dfm,A.mb,null)
C.aTW=new B.y("SONY",A.bP)
C.eWP=new B.y(3,E.Hj)
C.eY6=new B.y(0.45,0.05)
C.eZ3=new B.y(-0.35,-0.05)
C.f_9=new B.y(2,A.bC)
C.aTY=new B.y("B&O",C.alC)
C.f3N=new B.y("SAMSUNG",A.cE)
C.f5f=new B.y(0,A.is)
C.aU3=new B.y("LG",A.dU)
C.f8p=new B.y(1,A.v)
C.f8N=new B.y(-1.6,0.9)
C.fap=new B.y(1.6,0.9)
C.fcJ=new B.y(1.6,-0.9)
C.fen=new B.y(-1.25,-0.62)
C.ff6=new B.y(-1.6,-0.9)
C.fnb=new B.b7([1.25,-0.62,-1,0])
C.fnm=new B.b7([-1.25,-0.62,0,1])
C.fnr=new B.b7([1.25,0.62,0,-1])
C.foR=new B.b7([-1.25,0.62,1,0])
C.c6d=new B.ae(A.eO,11,A.ac,null,null,null)
C.fSh=new B.F(!0,A.aR,null,null,null,null,9,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.hfz=new B.D("Search",null,C.fSh,null,null,null,null,null,null,null,null,null)
C.cVU=w([C.c6d,A.pq,C.hfz],x.p)
C.fsn=new B.c0(A.aK,A.e,A.h,A.l,null,A.p,null,0,C.cVU,null)
C.fzw=new B.hY(3,5,5,1.35,null)
C.h_m=new B.D("Buttons hidden. Double-tap to show them again.",null,null,null,null,null,null,null,null,null,null,null)
C.aWX=new B.b3(C.h_m,null,null,null,null,null,null,null,A.iV,null,null,null,null,A.o_,!1,null,null,null,A.t,null)
C.byN=new B.u(1,0.9450980392156862,0.9098039215686274,0.8470588235294118,A.q)
C.fH2=new B.F(!0,C.byN,null,"serif",null,null,15,A.kj,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.fPl=new B.F(!0,A.ac,null,null,null,null,9.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.fQ_=new B.F(!0,A.aR,null,null,null,null,9.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.ade=new B.F(!0,A.ac,null,null,null,null,12.5,null,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.aZe=new B.F(!0,A.ac,null,null,null,null,10,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.fUz=new B.F(!0,A.c,null,null,null,null,8.5,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.fUZ=new B.F(!0,A.c,null,null,null,null,14.5,A.O,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.fWc=new B.F(!0,A.ac,null,null,null,null,8.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.fWw=new B.F(!0,C.ail,null,null,null,null,8.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.fMx=new B.F(!0,A.aF,null,null,null,null,9.5,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.fYX=new B.D("NGMY Apps",null,C.fMx,null,null,null,null,null,null,null,null,null)
C.fIP=new B.F(!0,C.wP,null,null,null,null,8,A.a7,null,3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.h1k=new B.D("BANG & OLUFSEN",null,C.fIP,null,null,null,null,null,null,null,null,null)
C.fP1=new B.F(!0,A.v,null,null,null,null,9,A.C,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.h1N=new B.D("Open",null,C.fP1,null,null,null,null,null,null,null,null,null)
C.h53=new B.D("Home",null,C.aZe,null,null,null,null,null,null,null,null,null)
C.h6b=new B.D("SAMSUNG",null,A.aYQ,null,null,null,null,null,null,null,null,null)
C.hcp=new B.D("LG",null,A.yh,null,null,null,null,null,null,null,null,null)
C.fWX=new B.F(!0,A.aF,null,null,null,null,10,A.u,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.hgz=new B.D("WHERE TO FIND IT",null,C.fWX,null,null,null,null,null,null,null,null,null)
C.hiG=new B.D("tv",null,A.qx,null,null,null,null,null,null,null,null,null)
C.hk_=new B.D("Watch again",null,A.ch,null,null,null,null,null,null,null,null,null)
C.fMr=new B.F(!0,C.wP,null,null,null,null,8.5,null,null,2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.hkR=new B.D("OPEN",null,C.fMr,null,null,null,null,null,null,null,null,null)
C.hKH=new B.bg("tv-maker-name",x.W)
C.hKM=new B.bg("ad-info-ok",x.W)
C.hKV=new B.bg("tv-maker-apple",x.W)
C.hLj=new B.bg("ad-info-sheet",x.W)
C.hLu=new B.bg("ad-info-find",x.W)
C.hLF=new B.bg("tv-info",x.W)
C.hLM=new B.bg("tv-learn-more",x.W)
C.hLZ=new B.bg("tv-frame",x.W)
C.hM3=new B.bg("tv-picture",x.W)
C.hM4=new B.bg("tv-fullscreen",x.W)
C.hMd=new B.bg("ad-info-replay",x.W)
C.hMF=new D.cHM(0,"triangles")})();(function staticFields(){$.Sv=B.S(B.as("aG"),B.as("bwd"))
$.bHN=!1
$.ahQ=B.S(B.as("aG"),B.as("j4"))})();(function lazyInitializers(){var w=a.lazyFinal
w($,"iPy","hX1",()=>{var v=B.csm()
v.z=A.hg
v.f=!0
return v})})()};
(a=>{a["as9qOZRCQ63vGB2mE2yihtIw7p0="]=a.current})($__dart_deferred_initializers__);