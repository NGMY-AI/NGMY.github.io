((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,A,N,G,E,L,O,I,P,Q,H,R,S,T,U,K,V,D={
fEN(d,e,f,g,h,i){var x,w,v,u=null
if(h==null){x=A.h.fK(e*2)
w=A.h.fK(g*4)
v=B.m(u,u,D.aj_(f),u,u,u,u,u,"Roboto",u,u,x/2,u,u,i,u,1.12,!0,u,w/4,u,u,u,u,u,u)
return D.a3B(d,v,A.b6,u,1,1/0)}$.S()
x=B.L()
x.san(h)
x=B.cS(u,u,u,u,u,u,u,u,u,B.m(u,u,u,u,u,u,u,u,"Roboto",u,u,e,u,u,i,x,1.12,!0,u,g,u,u,u,u,u,u),d)
x=B.fE(u,A.cx,u,1,u,x,A.a7,A.c1,u,A.dK,A.c2)
x.nB(1/0)
return x},
mi(d,e,f,g,h,i,j,k,l,m){var x,w,v,u
if(e.length===0||g<1)return 0
x=new D.fEC(j,f,i,l)
w=D.fEN(e,g,h,k,x.$1(g),m)
v=w.b.c
if(v>l&&v>0){u=g*l/v
w=D.fEN(e,u,h,k*l/v,x.$1(u),m)}w.a4(d,new B.r(f.a-w.b.c*i,f.b))
x=w.b.a.c
return x.gba(x)},
hCo(d,e,f,g,h,i,j,k,l){var x,w,v=null,u=A.h.fK(g*2)
u=B.m(v,v,D.aj_(h),v,v,v,v,v,"Roboto",v,v,u/2,v,v,l,v,1.25,!0,v,v,v,v,v,v,v,v)
x=j===0
w=D.a3B(e,u,x?A.b6:A.K,"\u2026",k,i)
u=f.a
u=x?u:u-i/2
w.a4(d,new B.r(u,f.b))
u=w.b.a.c
return u.gba(u)},
H4(d,e,f,g,h){var x,w,v,u=null
if(g<1)return
x=B.lq(e.a)
w=A.h.fK(g*2)
v=D.a3B(x,B.m(u,u,D.aj_(h),u,u,u,u,u,e.b,u,u,w/2,u,u,u,u,1,!0,u,u,u,u,u,u,u,u),A.b6,u,1,1/0)
w=v.b
x=w.c
w=w.a.c
v.a4(d,f.aJ(0,new B.r(x/2,w.gba(w)/2)))},
ieS(d,e){var x=A.h.ad(d,e).split("."),w=B.ox(x[0],B.ag("\\B(?=(\\d{3})+(?!\\d))",!0,!1,!1,!1),new D.fyv(),null)
return x.length>1?w+"."+x[1]:w},
bEd(d,e,f,g){var x,w
if(e<=0)return
x=d.c
J.bt(x.save())
w=f.d-f.b
x.clipRect(B.i2(f.cr(w*0.08)),$.mn()[1],!0)
x.translate(0,(1-A.ck.az(0,A.h.D(e,0,1)))*w*1.05)
g.$0()
x.restore()},
iil(d,a0,a1,a2,a3,a4){var x,w,v,u,t,s,r,q,p,o,n,m=null,l=a0.a,k=a0.b,j=0+l,i=new B.a4(0,0,j,0+k),h=$.S(),g=B.L(),f=a1.d,e=B.ap(f,A.w,0.05)
e.toString
x=B.ap(f,A.w,0.55)
x.toString
w=y.O
g.san(new B.bT(C.b4b,1.25,A.x,m,0,B.a([e,x,C.bmC],w),A.vk,m).aD(0,i))
d.aF(i,g)
v=Math.sin(a2*0.35)*l*0.04
u=new B.aH(h.r,A.aj,m,m,B.a([],y.v))
u.E(new B.aZ(l*0.52+v,0))
u.E(new B.aq(l*0.7+v,0))
u.E(new B.aq(l*0.98,k))
u.E(new B.aq(l*0.34,k))
u.E(new B.bx())
h=B.L()
h.san(new B.a7(A.aY,A.b3,A.x,B.a([A.c.j(0.1),A.c.j(0)],w),m,m).aD(0,i))
d.af(u,h)
t=k*0.8
h=t+(k-t)
g=B.L()
g.san(new B.a7(A.aY,A.b3,A.x,B.a([B.ap(f,A.w,0.6).j(0.85),A.w],w),m,m).aD(0,new B.a4(0,t,j,h)))
d.aF(new B.a4(0,t,j,h),g)
g=t-1
h=B.L()
f=a1.e
h.san(new B.a7(A.a5,A.a9,A.x,B.a([A.L,f.j(0.55),A.L],w),m,m).aD(0,new B.a4(0,t,j,t+2)))
d.aF(new B.a4(0,g,j,g+2),h)
s=a0.gdk()>=300
r=new B.e0()
r.cU(a3*7+3)
for(j=a2*1.3,h=a2*l*0.012,g=l*1.1,e=l*0.05,q=0;q<9;++q){x=A.h.F(r.ai()*l+h*(0.5+r.ai()),g)
w=r.ai()
p=k*(0.025+r.ai()*0.05)
o=(q&1)===0?f:A.c
n=new B.ar(A.S,A.Q,A.V,A.X,A.U)
n.r=o.j(0.06+0.08*(0.5+0.5*Math.sin(j+q))).gp(0)
if(s)n.y=new B.fT(A.G,p*0.5)
d.O(new B.r(x-e,w*k*0.72),p,n)}},
hAn(d,e,f,g,h,i){var x
$.S()
x=B.L()
x.r=A.w.j(h).gp(0)
if(i)x.y=new B.fT(A.G,g*0.6)
d.c0(B.bX(e,g,f),x)},
hgB(d,e,f,g){var x=B.dr(),w=x.a
w.$flags&2&&B.aj(w)
w[11]=1/(d*2.6)
x.fE(e)
x.k5(f)
x.eb(0,0,g,1)
return x},
ifN(d,e,f,g,a0,a1,a2){var x,w,v,u,t,s,r,q,p,o,n,m,l=null,k=f*0.49,j=k*0.17,i=B.by(B.bX(A.J,f,k),new B.aP(j,j)),h=k*0.085
$.S()
x=B.L()
j=i.a
w=i.b
v=i.c
u=i.d
x.san(C.caA.aD(0,new B.a4(j,w,v,u)))
for(t=d.c,s=e.a,r=e.b,q=6;q>=1;--q){J.bt(t.save())
t.translate(s,r)
p=D.hgB(f,g,a0,h*q/6)
t.concat(B.bHm(B.DP(p.a)))
d.aq(i,x)
t.restore()}J.bt(t.save())
t.translate(s,r)
d.az(0,D.hgB(f,g,a0,0).a)
s=$.S()
r=B.L()
r.r=C.bgQ.gp(0)
d.aq(i,r)
r=i.cr(-(k*0.006))
p=B.L()
p.b=A.aa
p.c=k*0.012
p.san(C.cas.aD(0,new B.a4(j,w,v,u)))
d.aq(r,p)
o=i.cr(-(k*0.035))
J.bt(t.save())
t.clipRRect(B.n6(o),$.mK(),!0)
p=o.a
r=o.b
u=o.c
v=o.d
D.ihp(d,new B.a4(p,r,u,v),a1,a2)
w=u-p
n=p+w*(0.2-g*0.6)
m=new B.aH(s.r,A.aj,l,l,B.a([],y.v))
m.E(new B.aZ(n,r))
m.E(new B.aq(n+w*0.45,r))
m.E(new B.aq(n-w*0.15,v))
m.E(new B.aq(n-w*0.6,v))
m.E(new B.bx())
w=B.L()
w.san(new B.a7(A.aY,A.b3,A.x,B.a([A.c.j(0.16),A.c.j(0.02)],y.O),l,l).aD(0,new B.a4(p,r,u,v)))
d.af(m,w)
t.restore()
w=k*0.04
w=B.by(B.bX(new B.r(0,r+k*0.06),k*0.075,k*0.28),new B.aP(w,w))
r=B.L()
r.r=A.w.gp(0)
d.aq(w,r)
t.restore()},
ihp(c2,c3,c4,c5){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7=null,b8=1e9,b9=c3.c,c0=c3.a,c1=b9-c0
$.S()
x=B.L()
w=c4.d
v=B.ap(w,A.w,0.72)
v.toString
u=y.O
x.san(new B.a7(A.aY,A.b3,A.x,B.a([C.bsE,v],u),b7,b7).aD(0,c3))
c2.aF(c3,x)
x=c3.b
v=c3.d
t=v-x
s=c0+c1
r=new B.a4(c0,x,s,x+t*0.3)
q=B.L()
p=c4.e
q.san(new B.a7(A.ay,A.aC,A.x,B.a([w,p],u),b7,b7).aD(0,r))
c2.aF(r,q)
q=c1*0.1
o=B.L()
o.r=A.c.j(0.08).gp(0)
c2.O(new B.r(s-q,x+c1*0.12),c1*0.42,o)
o=c1*0.045
D.mi(c2,"9:41",new B.r(c0+c1*0.09,x+c1*0.035),o,A.c,0,b7,0,b8,A.H)
s=c1*0.06
D.H4(c2,C.bSw,new B.r(b9-q,x+s),s,A.c)
b9=c1*0.07
n=c0+b9
m=t*0.085
l=x+m
k=c1*0.17
j=c1*0.05
i=B.by(new B.a4(n,l,n+k,l+k),new B.aP(j,j))
k=B.L()
k.r=A.c.j(0.22).gp(0)
c2.aq(i,k)
D.H4(c2,c4.c,i.gbE(),c1*0.11,A.c)
k=i.c+j
l=i.b
D.mi(c2,c4.y,new B.r(k,l+c1*0.012),b9,A.c,0,b7,0,c1*0.62,A.u)
D.mi(c2,"NGMY",new B.r(k,l+c1*0.095),o,A.ab,0,b7,c1*0.006,b8,A.H)
c0+=s
x+=t*0.215
l=c0+c1*0.88
h=B.by(new B.a4(c0,x,l,x+t*0.165),new B.aP(s,s))
x=h.eD(new B.r(0,c1*0.015))
k=B.L()
k.r=A.w.j(0.25).gp(0)
c2.aq(x,k)
k=B.L()
k.r=A.c.gp(0)
c2.aq(h,k)
g=A.ck.az(0,A.h.D((c5-1)/2.6,0,1))
s=h.a+s
k=h.b
x=h.d
b9=x-k
D.mi(c2,c4.as,new B.r(s,k+b9*0.16),c1*0.042,A.an,0,b7,0,c1*0.6,A.O)
n=D.ieS(c4.z*g,c4.at)
D.mi(c2,B.aL(c4.Q,"#",n),new B.r(s,k+b9*0.42),q,A.a_,0,b7,0,c1*0.58,A.u)
s=h.c-c1*0.25
k+=b9*0.32
f=B.by(new B.a4(s,k,s+c1*0.2,k+b9*0.36),new B.aP(j,j))
b9=B.L()
b9.r=B.ap(p,A.c,0.75).gp(0)
c2.aq(f,b9)
b9=f.gbE()
k=B.ap(w,A.w,0.1)
k.toString
D.H4(c2,A.pC,b9,c1*0.065,k)
e=x+t*0.04
d=t*0.088
for(b9=d+t*0.022,x=c4.ax,s=c2.c,q=d*0.55,n=d*0.33,k=d*0.38,a0=d*1.05,a1=c1*0.03,a2=c1*0.46,a3=c1*0.04,a4=c1*0.028,a5=c1*0.046,a6=c1*0.26,a7=0;a7<3;++a7){a8=x[a7]
a9=A.ck.az(0,A.h.D(A.h.D((c5-(1.3+a7*0.35))/0.5,0,1),0,1))
if(a9>0){J.bt(s.save())
s.translate((1-a9)*c1*0.6,0)
b0=B.by(new B.a4(c0,e,l,e+d),new B.aP(o,o))
$.S()
b1=new B.ar(A.S,A.Q,A.V,A.X,A.U)
b1.r=A.c.j(0.075*a9).gp(0)
c2.aq(b0,b1)
b1=b0.a
b2=b1+q
b3=b0.b
b3+=(b0.d-b3)/2
b4=new B.ar(A.S,A.Q,A.V,A.X,A.U)
b4.r=p.j(0.22).gp(0)
c2.O(new B.r(b2,b3),n,b4)
b4=B.ap(p,A.c,0.2)
b4.toString
D.H4(c2,a8.a,new B.r(b2,b3),k,b4)
D.mi(c2,a8.b,new B.r(b1+a0,b3-a1),j,A.c,0,b7,0,a2,A.O)
b1=B.ap(p,A.c,0.3)
b1.toString
D.mi(c2,a8.c,new B.r(b0.c-a3,b3-a4),a5,b1,1,b7,0,a6,A.H)
s.restore()}e+=b9}b5=A.h.D((c5-5.2)/0.15,0,1)*(1-A.h.D((c5-5.45)/0.2,0,1))
b9=c1*0.08
b6=B.by(B.bX(new B.r(c3.gbE().a,v-m),t*0.075*(1-b5*0.08),c1*0.8*(1-b5*0.05)),new B.aP(b9,b9))
$.S()
b9=B.L()
t=b6.a
m=b6.c
b9.san(new B.a7(A.a5,A.a9,A.x,B.a([w,p],u),b7,b7).aD(0,new B.a4(t,b6.b,m,b6.d)))
c2.aq(b6,b9)
D.mi(c2,"Open NGMY",new B.r(b6.gbE().a,b6.gbE().b-c1*0.033),c1*0.052,A.c,0.5,b7,0,(m-t)*0.85,A.u)
if(b5>0){b9=b6.gbE()
c0=B.L()
c0.r=A.c.j(0.25*(1-b5)).gp(0)
c2.O(b9,j+b5*c1*0.3,c0)}},
fty(a4,a5,a6,a7){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=null,a2="NGMY",a3=1e9
switch(a5.ay.a){case 0:x=B.bW(A.J,a6)
$.S()
w=B.L()
w.san(C.eGh.aD(0,x))
a4.c0(x,w)
w=B.L()
w.b=A.aa
w.c=a6*0.05
w.r=C.ah2.j(0.7).gp(0)
a4.O(A.J,a6*0.82,w)
for(w=a6*0.02,v=0;v<40;++v){u=v/40*3.141592653589793*2
t=Math.cos(u)
s=Math.sin(u)
r=Math.cos(u)
q=Math.sin(u)
p=new B.ar(A.S,A.Q,A.V,A.X,A.U)
p.c=w
p.r=C.ah2.j(0.5).gp(0)
a4.ah(new B.r(t*a6*0.9,s*a6*0.9),new B.r(r*a6*0.97,q*a6*0.97),p)}o=a7?a2:a5.ch
w=o.length
if(w<=1)n=a6*0.95
else n=w<=3?a6*0.5:a6*0.36
w=-n*0.56
t=a6*1.4
D.mi(a4,o,new B.r(0,w+a6*0.03),n,A.rK.j(0.7),0.5,a1,0,t,A.u)
D.mi(a4,o,new B.r(0,w),n,C.bl_,0.5,a1,0,t,A.u)
break
case 2:x=B.bW(A.J,a6)
$.S()
w=B.L()
w.san(E.aVZ.aD(0,x))
a4.c0(x,w)
m=B.bW(A.J,a6*0.84)
w=B.L()
t=a5.e
s=B.ap(t,A.c,0.35)
s.toString
r=a5.d
q=B.ap(r,A.w,0.25)
q.toString
w.san(new B.bT(A.nj,0.5,A.x,a1,0,B.a([s,t,q],y.O),A.xg,a1).aD(0,m))
a4.c0(m,w)
w=B.L()
w.b=A.aa
w.c=a6*0.025
w.r=A.c.j(0.35).gp(0)
a4.O(A.J,a6*0.72,w)
if(a7)D.mi(a4,a2,new B.r(0,-a6*0.2),a6*0.38,A.c,0.5,a1,a6*0.02,a6*1.3,A.u)
else{w=a5.a
t=w==null
s=t?a5.c:w
q=a6*0.95
D.H4(a4,s,new B.r(0,a6*0.03),q,B.ap(r,A.w,0.45).j(0.35))
D.H4(a4,t?a5.c:w,A.J,q,A.c)}break
case 1:l=B.bX(A.J,a6*1.9,a6*3)
w=a6*0.16
k=B.by(l,new B.aP(w,w))
if(a7){$.S()
t=B.L()
s=a5.d
r=B.ap(s,A.w,0.5)
r.toString
s=B.ap(s,A.w,0.75)
s.toString
t.san(new B.a7(A.ay,A.aC,A.x,B.a([r,s],y.O),a1,a1).aD(0,l))
a4.aq(k,t)
t=l.a
s=l.b
r=l.d
q=r-s
p=q*0.16
j=s+p
i=l.c
h=i-t
g=q*0.2
f=B.L()
f.r=A.w.j(0.85).gp(0)
a4.aF(new B.a4(t,j,t+h,j+g),f)
f=h*0.08
t+=f
q=s+q*0.5
s=a6*0.03
s=B.by(new B.a4(t,q,t+h*0.55,q+p),new B.aP(s,s))
p=B.L()
p.r=A.c.j(0.9).gp(0)
a4.aq(s,p)
D.mi(a4,"ngmy.org",new B.r(i-f,r-g),w,A.ab,1,a1,0,a3,A.O)
return}$.S()
w=B.L()
t=B.ap(a5.d,A.w,0.15)
t.toString
w.san(new B.a7(A.ay,A.aC,A.x,B.a([t,a5.e],y.O),a1,a1).aD(0,l))
a4.aq(k,w)
w=a4.c
J.bt(w.save())
w.clipRRect(B.n6(k),$.mK(),!0)
t=l.c
s=l.b
r=a6*0.2
q=B.L()
q.r=A.c.j(0.08).gp(0)
a4.O(new B.r(t-a6*0.3,s+r),a6*1.3,q)
q=l.a
p=l.d
j=B.L()
j.r=A.w.j(0.1).gp(0)
a4.O(new B.r(q+r,p),a6*0.9,j)
w.restore()
w=t-q
p-=s
j=a6*0.03
D.mi(a4,a2,new B.r(q+w*0.07,s+p*0.1),a6*0.26,A.c,0,a1,j,a3,A.u)
D.H4(a4,a5.c,new B.r(t-w*0.12,s+p*0.2),a6*0.32,A.c.j(0.9))
q+=w*0.08
t=s+p*0.38
r=a6*0.06
e=B.by(new B.a4(q,t,q+a6*0.48,t+a6*0.36),new B.aP(r,r))
r=B.L()
t=e.a
i=e.b
h=e.c
g=e.d
r.san(C.auo.aD(0,new B.a4(t,i,h,g)))
a4.aq(e,r)
r=e.gbE()
f=e.gbE()
d=B.L()
d.r=C.ahh.gp(0)
a0=a6*0.012
d.c=a0
a4.ah(new B.r(t,r.b),new B.r(h,f.b),d)
d=e.gbE()
f=e.gbE()
r=B.L()
r.r=C.ahh.gp(0)
r.c=a0
a4.ah(new B.r(d.a,i),new B.r(f.a,g),r)
D.H4(a4,A.a3v,new B.r(h+a6*0.25,e.gbE().b),a6*0.28,A.ab)
D.mi(a4,"\u2022\u2022\u2022\u2022  \u2022\u2022\u2022\u2022  2026",new B.r(q,s+p*0.64),a6*0.17,A.c.j(0.9),0,a1,a6*0.02,a3,A.O)
D.mi(a4,a5.ch,new B.r(q,s+p*0.8),a6*0.15,A.c,0,a1,j,w*0.6,A.u)
break}},
ic9(d,e,f,g,h,i){var x,w,v,u,t=null,s=g.ay,r=s===C.TW,q=r?f*0.06:f*0.16,p=Math.cos(h),o=$.S(),n=B.L()
switch(s.a){case 0:s=A.Cc
break
case 2:s=A.an
break
case 1:s=B.ap(g.d,A.c,0.55)
s.toString
break
default:s=t}n.r=s.gp(0)
s=y.v
o=o.r
if(r){x=new B.aH(o,A.aj,t,t,B.a([],s))
s=f*0.16
x.E(new B.jg(B.by(B.bX(A.J,f*1.9,f*3),new B.aP(s,s))))}else{x=new B.aH(o,A.aj,t,t,B.a([],s))
x.E(new B.jA(B.bW(A.J,f)))}w=new D.ftz(d,e,f,h)
s=B.a([],y.n)
for(v=1;v<8;++v)s.push(q*v/8)
if(p>=0){w.$2(q,new D.ftA(d,g,f))
for(r=y.Q,s=new B.ds(s,r),s=new B.bR(s,s.gJ(0),r.k("bR<ak.E>")),r=r.k("ak.E");s.C();){p=s.d
if(p==null)p=r.a(p)
w.$2(p,new D.ftB(d,x,n))}w.$2(0,new D.ftC(d,g,f,i,x))}else{w.$2(0,new D.ftD(d,g,f))
for(r=s.length,u=0;u<s.length;s.length===r||(0,B.I)(s),++u)w.$2(s[u],new D.ftE(d,x,n))
w.$2(q,new D.ftF(d,g,f))}},
hCi(d,a0,a1,a2,a3,a4){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
for(x=a0.a,w=a0.b-a1*0.22,v=a3*1.4,u=a1*0.07,t=a2.e,s=a2.d,r=y.O,q=a2.ax,p=a3*0.7,o=0;o<3;++o){n=p+o*3.141592653589793*2/3
m=Math.sin(n)
if(m<0!==a4)continue
l=x+Math.cos(n)*a1*0.4
k=w+o*a1*0.2+Math.sin(v+o)*a1*0.025
j=new B.r(l,k)
i=u*(0.85-m*0.25)
h=B.bW(j,i)
$.S()
g=new B.ar(A.S,A.Q,A.V,A.X,A.U)
g.r=A.w.j(0.25).gp(0)
d.O(new B.r(l+0,k+i*0.25),i,g)
g=new B.ar(A.S,A.Q,A.V,A.X,A.U)
f=B.ap(t,A.c,0.55)
f.toString
e=B.ap(s,A.w,0.35)
e.toString
g.san(new B.bT(A.M2,0.5,A.x,null,0,B.a([f,t,e],r),A.xg,null).aD(0,h))
d.c0(h,g)
D.H4(d,q[o].a,j,i,A.c)
g=-i
g=B.bX(new B.r(l+g*0.32,k+g*0.48),i*0.32,i*0.7)
k=new B.ar(A.S,A.Q,A.V,A.X,A.U)
k.r=A.c.j(0.45).gp(0)
d.c0(g,k)}},
hkj(f1,f2,f3,f4,f5,f6){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6,d7,d8,d9,e0,e1,e2,e3,e4,e5,e6,e7,e8=null,e9=1e9,f0={}
f0.a=f4
x=A.o.F(f3,14)
w=C.Sl[x]
v=f2.a
u=f2.b
if(v<=0||u<=0)return
f4=f0.a=A.h.D(f4,0,10)
t=f1.c
J.bt(t.save())
s=0+v
r=0+u
t.clipRect(B.i2(new B.a4(0,0,s,r)),$.mn()[1],!0)
if(f2.gdk()<180){s=f2.gdk()
t.restore()
D.hGh(f1,new B.dY(["ad",x,f5,v,u]),f2,f4+x*1000,new D.fYK(f0,180/s,v,u,f3,f5))
return}q=f2.gdk()>=300
D.iil(f1,f2,w,f4,f3,!0)
p=v>=u*1.15
o=p?u:Math.min(u*0.62,v*1.05)
n=p?v*0.07:v/2
m=p?0:0.5
l=p?v*0.42:v*0.88
k=p?u*0.22:u*0.63
j=p?new B.r(v*0.73,u*0.47):new B.r(v/2,u*0.33)
i=p?u*0.8:Math.min(u*0.5,v*0.6/0.49)
h=f6==null
g=h?0:A.ed.az(0,A.h.D(f6.b/1.1,0,1))*3.141592653589793*2
f=Math.sin(f4*1.1)
if(f4<6.9){e=A.ck.az(0,A.h.D(A.h.D(f4/1.1,0,1),0,1))
d=A.dH.az(0,A.h.D((f4-3.2)/0.9,0,1))
a0=A.qy.az(0,A.h.D((f4-6.3)/0.6,0,1))
a1=j.a+(1-e)*v*0.45+a0*v*0.7
a2=j.b+Math.sin(f4*1.6)*i*0.012
a3=i*(1+d*0.06)
a4=new B.r(a1,a2)
D.hAn(f1,new B.r(a1,a2+a3*0.55),a3*0.62,a3*0.07,0.5,q)
D.hCi(f1,a4,a3,w,f4,!1)
D.ifN(f1,a4,a3,-1.15+e*0.73+d*0.3+a0*0.9+f*0.05+g,0.07-d*0.03,w,f4)
D.hCi(f1,a4,a3,w,f4,!0)}if(f4>=6.2&&f4<8.9){a5=A.ed.az(0,A.h.D((f4-6.4)/0.7,0,1))
a6=A.qy.az(0,A.h.D((f4-8.4)/0.45,0,1))
f=w.ay
a7=f===C.TW
a8=(a7?o*0.15:o*0.2)*a5*(1-a6*0.4)
if(a8>1){a9=Math.sin(f4*1.5)
b0=j.a
b1=j.b
b2=o*0.02
b3=b1-b2+Math.sin(f4*2)*o*0.012
a4=new B.r(b0,b3)
b4=a8*2
$.S()
b5=B.L()
b6=y.O
b5.san(new B.bT(A.z,0.5,A.x,e8,0,B.a([w.e.j(0.35*a5),A.L],b6),e8,e8).aD(0,B.bW(a4,b4)))
f1.O(a4,b4,b5)
D.hAn(f1,new B.r(b0,b1+o*0.33),a8*2.2,a8*0.25,0.45*a5,q)
D.ic9(f1,a4,a8,w,(1-a5)*3.141592653589793*1.5+a9*0.35+g+a6*3.141592653589793,A.h.D((f4-7.2)/0.9,0,1))
if(!a7){b7=A.ck.az(0,A.h.D(A.h.D((f4-7)/0.4,0,1),0,1))*(1-a6)
if(b7>0){b8=B.by(B.bX(new B.r(b0,b3+a8*1.28),o*0.075,a8*1.9*b7),new B.aP(b2,b2))
a7=b8.eD(new B.r(0,o*0.008))
a9=B.L()
a9.r=A.w.j(0.3).gp(0)
f1.aq(a7,a9)
a9=B.L()
a7=w.d
b0=B.ap(a7,A.w,0.1)
b0.toString
b1=B.ap(a7,A.w,0.1)
b1.toString
b2=b8.a
b3=b8.c
a9.san(new B.a7(A.a5,A.a9,A.x,B.a([b0,a7,b1],b6),e8,e8).aD(0,new B.a4(b2,b8.b,b3,b8.d)))
f1.aq(b8,a9)
if(b7>0.6){f=f===C.a8f?A.a.el(w.b,"NGMY ","").toUpperCase():w.ch
D.mi(f1,f,new B.r(b8.gbE().a,b8.gbE().b-o*0.025),o*0.042,A.c,0.5,e8,o*0.004,(b3-b2)*0.86,A.u)}}}}}f=w.e
a7=B.ap(f,A.c,0.25)
a7.toString
b9=o*(p?0.105:0.095)
if(f4<3.3){c0=1-A.h.D((f4-3)/0.3,0,1)
D.bEd(f1,A.h.D((f4-0.2)/0.4,0,1)*c0,new B.a4(0,k,s,k+o*0.05),new D.fYL(f1,w,n,k,o,a7,l,m))
c1=k+o*0.07
a7=b9*1.15
D.bEd(f1,A.h.D((f4-0.45)/0.5,0,1)*c0,new B.a4(0,c1,s,c1+a7),new D.fYM(f1,w,n,c1,b9,l,m))
c2=c1+b9*1.18
D.bEd(f1,A.h.D((f4-0.85)/0.5,0,1)*c0,new B.a4(0,c2,s,c2+a7),new D.fYN(f1,w,n,c2,b9,l,m))
c3=c2+b9*1.35
c4=o*0.22*(A.ck.az(0,A.h.D(A.h.D((f4-1.3)/0.6,0,1),0,1))*c0)
a7=p?n:n-c4/2
a9=o*0.004
a9=B.by(new B.a4(a7,c3,a7+c4,c3+o*0.008),new B.aP(a9,a9))
$.S()
a7=B.L()
a7.r=f.gp(0)
f1.aq(a9,a7)}else if(f4<6.5){c0=1-A.h.D((f4-6.2)/0.3,0,1)
D.bEd(f1,A.h.D((f4-3.3)/0.4,0,1)*c0,new B.a4(0,k,s,k+o*0.05),new D.fYO(f1,w,n,k,o,a7,l,m))
c3=k+o*0.07
c5=A.h.D((f4-3.45)/0.5,0,1)*c0
if(c5>0){J.bt(t.save())
t.translate(0,(1-A.ck.az(0,A.h.D(c5,0,1)))*o*0.04)
a7=p?0.05:0.046
c6=D.hCo(f1,w.w,new B.r(n,c3),o*a7,A.c.j(c5),l,m,2,A.O)
t.restore()}else c6=o*0.12
a7=o*0.04
c7=c3+Math.max(c6,o*0.06)+a7
for(a9=o*0.075,b0=w.x,b1=w.d,c8=l-a7*1.8,b2=a7*0.55,b3=n+b2,b4=a7*0.62,b5=a7*0.8,b6=a7*1.6,c9=n+b6,d0=l-b6,d1=0;d1<3;++d1){d2=A.ck.az(0,A.h.D(A.h.D((f0.a-(3.9+d1*0.3))/0.4,0,1),0,1))*c0
if(d2>0){d3=0.92*d2
d4=(1-d2)*o
if(p){d5=c7+b4
$.S()
d6=new B.ar(A.S,A.Q,A.V,A.X,A.U)
d6.r=f.gp(0)
f1.O(new B.r(b3,d5),b2*d2,d6)
d6=B.ap(b1,A.w,0.4)
d6.toString
D.H4(f1,A.hd,new B.r(b3,d5),b5*d2,d6)
J.bt(t.save())
t.translate(d4*0.05,0)
D.mi(f1,b0[d1],new B.r(c9,c7),a7,A.c.j(d3),0,e8,0,c8,A.O)
t.restore()}else{d7=n-(Math.min(D.fEN(b0[d1],a7,A.c,0,e8,A.O).b.c,d0)+b6)/2
d8=c7+d4*0.03
d4=d7+b2
d5=d8+b4
$.S()
d6=new B.ar(A.S,A.Q,A.V,A.X,A.U)
d6.r=f.j(d2).gp(0)
f1.O(new B.r(d4,d5),b2,d6)
D.H4(f1,A.hd,new B.r(d4,d5),b5,B.ap(b1,A.w,0.4).j(d2))
D.mi(f1,b0[d1],new B.r(d7+b6,d8),a7,A.c.j(d3),0,e8,0,d0,A.O)}}c7+=a9}}else if(f4<8.6){c0=1-A.h.D((f4-8.3)/0.3,0,1)
D.bEd(f1,A.h.D((f4-6.6)/0.4,0,1)*c0,new B.a4(0,k,s,k+o*0.05),new D.fYP(f1,w,n,k,o,a7,l,m))
d2=A.h.D((f4-6.8)/0.5,0,1)*c0
if(d2>0){J.bt(t.save())
t.translate(0,(1-A.ck.az(0,A.h.D(d2,0,1)))*o*0.05)
a7=p?0.085:0.075
a9=A.c.j(d2)
b0=p?3:2
D.hCo(f1,w.CW,new B.r(n,k+o*0.07),o*a7,a9,l,m,b0,A.u)
t.restore()}}a7=f0.a
if(a7>=8.5){a5=A.h.D((a7-8.5)/0.35,0,1)
$.S()
a7=B.L()
a7.r=A.w.j(0.45*a5).gp(0)
f1.aF(new B.a4(0,0,s,r),a7)
d9=u*(p?0.36:0.38)
e0=A.ed.az(0,A.h.D((f0.a-8.55)/0.5,0,1))
J.bt(t.save())
a7=v/2
t.translate(a7,d9)
f1.bV(0,0.7+0.3*e0)
t.translate(-v/2,-d9)
e1=Math.min(o*0.17,v*0.2)
a9=A.c.j(a5)
b0=B.ap(f,A.c,0.3)
b0.toString
b1=y.O
D.mi(f1,"NGMY",new B.r(a7,d9-e1*0.6),e1,a9,0.5,B.a([A.c,b0],b1),e1*0.12,e9,A.u)
t.restore()
b0=d9+e1*0.62
D.mi(f1,w.b,new B.r(a7,b0),o*0.048,A.c.j(0.85*A.h.D((f0.a-8.7)/0.3,0,1)),0.5,e8,0,v*0.86,A.H)
d2=A.ed.az(0,A.h.D((f0.a-8.8)/0.45,0,1))
if(d2>0){a9=o*0.05
e2=B.by(B.bX(new B.r(a7,b0+o*0.16),o*0.1,Math.min(v*0.6,Math.max(v*0.3,o*0.5))*d2),new B.aP(a9,a9))
e3=B.L()
e3.r=f.j(0.45).gp(0)
if(q)e3.y=new B.fT(A.G,o*0.03)
f1.aq(e2,e3)
b0=B.L()
b2=e2.a
b3=e2.b
b4=e2.c
b5=e2.d
b0.san(new B.a7(A.a5,A.a9,A.x,B.a([w.d,f],b1),e8,e8).aD(0,new B.a4(b2,b3,b4,b5)))
f1.aq(e2,b0)
J.bt(t.save())
t.clipRRect(B.n6(e2),$.mK(),!0)
b4-=b2
e4=b2-b4*0.3+A.h.D((f0.a-9)/0.9,0,1)*b4*1.6
b2=e4+b4*0.25
b0=B.L()
b0.san(new B.a7(A.a5,A.a9,A.x,B.a([A.c.j(0),A.c.j(0.5),A.c.j(0)],b1),e8,e8).aD(0,new B.a4(e4,0,b2,1)))
f1.aF(new B.a4(e4,b3,b2,b3+(b5-b3)),b0)
t.restore()
if(d2>0.7)D.mi(f1,"Open NGMY",new B.r(a7,e2.gbE().b-o*0.03),a9,A.c,0.5,e8,0,b4*0.8,A.u)
D.mi(f1,"ngmy.org",new B.r(a7,b5+o*0.035),o*0.036,A.c.j(0.65*A.h.D(d2,0,1)),0.5,e8,o*0.004,e9,A.O)}}a8=new B.a4(0,0,s,r)
$.S()
f=B.L()
f.san(new B.bT(A.z,0.95,A.x,e8,0,B.a([A.L,A.w.j(0.45)],y.O),E.aBW,e8).aD(0,a8))
f1.aF(a8,f)
if(!h&&f6.b<0.7){b7=f6.b/0.7
h=f6.a
f=B.L()
f.b=A.aa
a7=1-b7
f.c=o*0.012*a7
f.r=A.c.j(0.8*a7).gp(0)
f1.O(new B.r(h.a*v,h.b*u),o*(0.05+0.3*b7),f)}e5=o*0.035
e6=f5?"Ad "+(x+1)+" of 14":"Ad"
x=e5*0.9
h=D.fEN(e6,x,A.c,0,e8,A.H).b
f=h.c
h=h.a.c
a7=e5*0.4
e7=B.by(new B.a4(e5,e5,e5+(f+e5*1.2),e5+(h.gba(h)+e5*0.5)),new B.aP(a7,a7))
a7=B.L()
a7.r=A.bt.j(0.95).gp(0)
f1.aq(e7,a7)
D.mi(f1,e6,new B.r(e7.a+e5*0.6,e7.b+e5*0.25),x,A.av,0,e8,0,e9,A.H)
x=o*0.012
a7=u-x
x=a7+x
h=B.L()
h.r=A.c.j(0.2).gp(0)
f1.aF(new B.a4(0,a7,s,x),h)
h=f0.a
f=B.L()
f.r=A.bt.gp(0)
f1.aF(new B.a4(0,a7,0+v*h/10,x),f)
x=f0.a
if(x<0.25)c0=1-x/0.25
else c0=x>9.8?(x-9.8)/0.2:0
if(c0>0){x=B.L()
x.r=A.w.j(A.h.D(c0,0,1)).gp(0)
f1.aF(new B.a4(0,0,s,r),x)}t.restore()},
apu:function apu(d,e){this.a=d
this.b=e},
hX:function hX(d,e,f){this.a=d
this.b=e
this.c=f},
rR:function rR(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v){var _=this
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
b_G:function b_G(d,e){this.a=d
this.b=e},
fEC:function fEC(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fyv:function fyv(){},
ftz:function ftz(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ftA:function ftA(d,e,f){this.a=d
this.b=e
this.c=f},
ftB:function ftB(d,e,f){this.a=d
this.b=e
this.c=f},
ftC:function ftC(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
ftD:function ftD(d,e,f){this.a=d
this.b=e
this.c=f},
ftE:function ftE(d,e,f){this.a=d
this.b=e
this.c=f},
ftF:function ftF(d,e,f){this.a=d
this.b=e
this.c=f},
fYK:function fYK(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fYL:function fYL(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
fYM:function fYM(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
fYN:function fYN(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
fYO:function fYO(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
fYP:function fYP(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
J3:function J3(d,e,f){this.c=d
this.d=e
this.a=f},
c4F:function c4F(d){this.a=d},
iiu(d,e,f,g,h,i){var x=new D.fEu(e,h,!0),w=x.$1(g),v=w.b.c
if(v>i&&v>0)w=x.$1(Math.max(2,g*i/v))
x=w.b
v=x.c
x=x.a.c
w.a4(d,f.aJ(0,new B.r(v/2,x.gba(x)/2)))},
Mg(d,e,f,g,h,i,j){var x,w,v,u,t,s,r,q,p,o,n,m,l
if(j<=0)return
x=new D.fYJ(e,f,g)
w=A.h.cC(22*A.h.D(j,0,1))
for(v=i-h,u=e,t=1;t<=w;++t,u=r){s=Math.min(t/22,A.h.D(j,0,1))
r=x.$1(s)
$.S()
q=new B.ar(A.S,A.Q,A.V,A.X,A.U)
q.b=A.aa
p=q.c=h+v*s
q.r=A.qs.gp(0)
q.d=A.bG
d.ah(u,r,q)
q=-p*0.18
o=r.a
n=r.b
m=B.ap(A.qs,A.c,0.18)
m.toString
l=new B.ar(A.S,A.Q,A.V,A.X,A.U)
l.b=A.aa
l.c=p*0.28
l.r=m.gp(0)
l.d=A.bG
d.ah(new B.r(u.a+q,u.b+0),new B.r(o+q,n+0),l)}},
fEu:function fEu(d,e,f){this.a=d
this.b=e
this.c=f},
fYJ:function fYJ(d,e,f){this.a=d
this.b=e
this.c=f},
hfV(d,e,f,g,h,i){var x=new D.fv8(e,h,!0,0),w=x.$1(g),v=w.b.c
if(v>i&&v>0)w=x.$1(Math.max(2,g*i/v))
x=w.b
v=x.c
x=x.a.c
w.a4(d,f.aJ(0,new B.r(v/2,x.gba(x)/2)))},
Mh(d,e,f,g,h,i){var x=h==null,w=x?A.o.F(A.h.bh(f/10),14):h,v=A.h.F(f,10)
D.hkj(d,e,w,v,g||x,i)},
Mi(d,e,f,g,h,i){var x,w=d.c
J.bt(w.save())
w.clipRect(B.i2(new B.a4(0,0,0+e.a,0+e.b)),$.mn()[1],!0)
x=C.ik[A.o.F(f,8)].e
if(x===-2)D.i9p(d,e,g)
else if(x===-1)D.Mh(d,e,g,!0,h,i)
else D.Mh(d,e,g,!1,x,i)
w.restore()},
i9p(d,e,f){var x,w,v,u,t,s,r,q,p,o,n,m,l=e.a,k=e.b,j=new B.V(Date.now(),0,!1),i=0+l,h=0+k
$.S()
x=B.L()
x.san(C.c9o.aD(0,new B.a4(0,0,i,h)))
d.aF(new B.a4(0,0,i,h),x)
x=B.L()
x.r=A.bD.gp(0)
d.aF(new B.a4(0,0,i,0+k*0.15),x)
D.hfV(d,A.oU[B.bM(j)-1]+" "+B.bD(j),new B.r(l/2,k*0.075),k*0.08,A.c,l*0.9)
w=l/7
for(i=k*0.21,h=k*0.05,v=0;v<7;++v)D.hfV(d,C.dC5[v],new B.r(w*(v+0.5),i),h,A.aE,9999)
u=B.c0(B.bD(j),B.bM(j),1,0,0,0,0,0)
t=B.bY(B.c0(B.bD(j),B.bM(j)+1,0,0,0,0,0,0))
s=B.mA(u)-1
r=k*0.74/A.h.cC((s+t)/7)
for(i=k*0.26,h=f*3,q=1;q<=t;++q){p=s+q-1
o=new B.r(w*(A.o.F(p,7)+0.5),i+r*(A.o.ar(p,7)+0.5))
if(q===B.bY(j)){x=Math.min(w,r)
n=A.aH.j(0.5+0.2*Math.sin(h))
$.S()
m=new B.ar(A.S,A.Q,A.V,A.X,A.U)
m.r=n.gp(0)
d.O(o,x*0.42,m)}x=Math.min(w,r)
n=q===B.bY(j)?A.c:A.ab
D.hfV(d,""+q,o,x*0.42,n,9999)}},
fv8:function fv8(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
wt:function wt(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fYV(d,e,f,g,h,i,j,a0){var x,w,v,u,t,s,r,q,p,o,n,m,l=null,k=e.a
if(k<=0||e.b<=0)return
if(e.gdk()<180){x=e.gdk()
w=h<3
v=w?h:g
D.hGh(d,new B.bss(["tv",f,i,j,k,e.b,w]),e,v,new D.fYW(180/x,e,f,g,h,i,a0,j))
return}x=d.c
J.bt(x.save())
v=e.b
u=0+k
t=0+v
x.clipRect(B.i2(new B.a4(0,0,u,t)),$.mn()[1],!0)
if(h<3){$.S()
s=B.L()
s.r=C.YW.gp(0)
d.aF(new B.a4(0,0,u,t),s)
if(h<0.5)u=h/0.5
else u=h>2.4?(3-h)/0.6:1
r=A.h.D(u,0,1)
u=e.ej(A.J)
t=e.gdk()
s=B.L()
s.san(new B.bT(A.z,0.5,A.x,l,0,B.a([A.aH.j(0.35*r),A.L],y.O),l,l).aD(0,B.bW(e.ej(A.J),e.gdk()*0.5)))
d.O(u,t*0.5,s)
D.aRl(d,"NGMY",new B.r(0,v*0.36),v*0.2,A.c.j(r),A.K,v*0.03,k)
D.aRl(d,"T V",new B.r(0,v*0.6),v*0.08,A.aH.j(r),A.K,v*0.05,k)
s=k*0.3
t=v*0.78
u=B.L()
u.r=A.aH.j(r).gp(0)
d.aF(new B.a4(s,t,s+k*0.4*(h/3),t+3),u)}else if(i>=0){D.Mi(d,e,i,g,j,a0)
q=C.ik[A.o.F(i,8)].e
if(q!==-2){if(q>=0)p=q
else p=j==null?A.o.F(A.h.bh(g/10),14):j
D.hzj(d,e,"ADS  \xb7  "+C.Sl[A.o.F(p,14)].b)}}else{o=A.h.D((h-3)/0.5,0,1)
n=A.o.F(f,10)
m=C.aK9.h(0,n)
if(n===0)D.iiN(d,e,g)
else if(m==null)D.iug(d,e,g)
else D.hkj(d,e,D.hHR(m),A.h.F(g,10),!1,a0)
D.hzj(d,e,"CH "+(n+1)+"  \xb7  "+C.SO[n].a)
if(o<1){$.S()
s=B.L()
s.r=A.c.j(0.6*(1-o)).gp(0)
d.aF(new B.a4(0,0,u,t),s)}}u=new B.aH($.S().r,A.aj,l,l,B.a([],y.v))
u.E(new B.aZ(0,0))
u.E(new B.aq(k*0.45,0))
u.E(new B.aq(0,v*0.5))
u.E(new B.bx())
v=B.L()
v.r=A.c.j(0.04).gp(0)
d.af(u,v)
x.restore()},
aRl(d,e,f,g,h,i,j,k){var x,w=null,v=D.aj_(h),u=A.h.fK(g*2)
v=B.m(w,w,v,w,w,w,w,w,w,w,w,u/2,w,w,A.u,w,w,!0,w,j,w,w,w,w,w,w)
u=k==null
x=D.a3B(e,v,i,w,1,u?9999:k)
x.a4(d,f.a5(0,new B.r(i===A.K&&!u?(k-x.b.c)/2:0,0)))},
hzj(d,e,f){var x=e.b,w=e.a,v=w-x*0.34,u=x*0.04,t=x*0.03,s=B.by(new B.a4(v,u,v+x*0.3,u+x*0.1),new B.aP(t,t))
$.S()
t=B.L()
t.r=A.w.j(0.55).gp(0)
d.aq(s,t)
D.aRl(d,"NGMY",new B.r(s.a+x*0.025,s.b+x*0.012),x*0.07,A.c,A.b6,1,null)
t=x*0.86
v=B.L()
v.r=A.w.j(0.6).gp(0)
d.aF(new B.a4(0,t,0+w,t+x*0.14),v)
D.aRl(d,f,new B.r(u,x*0.885),x*0.075,A.c,A.b6,0,w*0.74-u)},
aQu(d,e,f,g,h,i,j){var x=new D.fsM(e,h,i,j),w=x.$1(g),v=w.b.c,u=f.c-f.a
if(v>u&&v>0)w=x.$1(g*u/v)
x=f.gbE()
v=w.b
u=v.c
v=v.a.c
w.a4(d,x.aJ(0,new B.r(u/2,v.gba(v)/2)))},
iiN(d4,d5,d6){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4=null,c5=d5.a,c6=d5.b,c7=A.h.F(d6,14),c8=new D.fET(c7),c9=new D.fEP(),d0=0+c5,d1=0+c6,d2=$.S(),d3=B.L()
d3.san(C.cay.aD(0,new B.a4(0,0,d0,d1)))
d4.aF(new B.a4(0,0,d0,d1),d3)
x=c5*0.34
w=new D.fES(x,c6)
v=w.$2(0,0.5)
d3=c6*0.75
u=B.L()
u.san(new B.bT(A.z,0.5,A.x,c4,0,B.a([A.bL.j(0.55),A.L],y.O),c4,c4).aD(0,B.bW(v,d3)))
d4.O(v,d3,u)
t=new B.e0()
t.cU(11)
for(d3=d6*2,s=0;s<26;++s){u=t.ai()
r=t.ai()
q=t.ai()
p=new B.ar(A.S,A.Q,A.V,A.X,A.U)
p.r=A.c.j(0.35+0.4*Math.sin(d3+s)).gp(0)
d4.O(new B.r(u*c5,r*c6*0.45),0.6+q*1.1,p)}for(u=y.v,o=0;o<2;++o){r=B.a([],u)
n=new B.aH(d2.r,A.aj,c4,c4,r)
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
d2=$.S()
r=new B.ar(A.S,A.Q,A.V,A.X,A.U)
r.r=(q?C.MT:C.bus).gp(0)
d4.af(n,r)}k=w.$2(0,0.81)
j=c9.$1(c8.$2(0.2,1.6))
i=c9.$1(c8.$2(2.4,2.6))
for(d2=d6*1.4,h=0;h<8;++h){u=C.aCK[h]
g=u.a
f=u.b
e=Math.sin(d2+g*7)*c6*0.006
r=w.$2(g,f)
q=r.a
r=r.b
u=c6*u.c
p=new B.ar(A.S,A.Q,A.V,A.X,A.U)
p.r=A.hK.gp(0)
d4.O(new B.r(q+e,r+0),u*i,p)
p=w.$2(g,f-0.015)
r=p.a
p=p.b
q=new B.ar(A.S,A.Q,A.V,A.X,A.U)
q.r=A.ep.gp(0)
d4.O(new B.r(r+e,p+0),u*0.82*i,q)}for(d2=c6*0.01,u=k.a,r=k.b,q=r+d2,p=c6*0.015,r+=p,l=c6*0.04,h=0;h<2;++h){d=F.fP[h]*c6
D.Mg(d4,k,new B.r(u+d*0.04,q),new B.r(u+d*0.12,r),l,d2,j)}u=c6*0.085
D.Mg(d4,k,w.$2(0.02,0.7),w.$2(0,0.6),u,c6*0.055,j)
a0=c9.$1(c8.$2(1.8,1.6))
r=c6*0.05
q=c6*0.026
D.Mg(d4,w.$2(0,0.6),w.$2(-0.1,0.55),w.$2(-0.34,0.44),r,q,a0)
D.Mg(d4,w.$2(0,0.6),w.$2(0.1,0.55),w.$2(0.34,0.44),r,q,a0)
a1=c9.$1(c8.$2(3.2,1.3))
q=c6*0.024
d=c6*0.018
D.Mg(d4,w.$2(-0.34,0.44),w.$2(-0.17,0.33),w.$2(0,0.39),q,d,a1)
D.Mg(d4,w.$2(0.34,0.44),w.$2(0.17,0.33),w.$2(0,0.39),q,d,a1)
a2=c9.$1(c8.$2(4.4,1.3))
d=c6*0.02
q=c6*0.012
D.Mg(d4,w.$2(0,0.39),w.$2(-0.1,0.3),w.$2(-0.17,0.2),d,q,a2)
D.Mg(d4,w.$2(0,0.39),w.$2(0.1,0.3),w.$2(0.17,0.2),d,q,a2)
d=c6*0.016
D.Mg(d4,w.$2(-0.27,0.72),w.$2(-0.14,0.78),w.$2(0,0.7),d,q,c9.$1(c8.$2(3.6,1)))
D.Mg(d4,w.$2(0.27,0.72),w.$2(0.14,0.78),w.$2(0,0.7),d,q,c9.$1(c8.$2(3.6,1)))
a3=new B.e0()
a3.cU(5)
for(d=d6*1.6,a4=d4.c,a5=d6*1.3,a6=i*1.4,a7=c6*0.03,s=0;s<110;++s){a8=C.aCK[A.o.F(s,8)]
a9=a3.ai()*3.141592653589793*2
b0=Math.sqrt(a3.ai())*a8.c*0.95
b1=w.$2(a8.a+Math.cos(a9)*b0,a8.b+Math.sin(a9)*b0)
b2=Math.sin(d+s)
b3=b1.a
b1=b1.b
J.bt(a4.save())
a4.translate(b3+b2*c6*0.006,b1+0)
a4.rotate((a9+Math.sin(a5+s)*0.2)*180/3.141592653589793,0,0)
b4=A.h.D(a6-A.o.F(s,10)*0.05,0,1)
b1=B.bX(A.J,p*b4,a7*b4)
$.S()
b2=new B.ar(A.S,A.Q,A.V,A.X,A.U)
b2.r=B.ap(A.bi,A.ew,(Math.sin(d3+s)+1)/2).gp(0)
d4.c0(b1,b2)
a4.restore()}b5=new D.fEQ(c8,d4,d6,c7)
p=c6*0.075
b5.$5(0,"Bibi",w.$2(-0.27,0.72),p,5)
b5.$5(1,"Babu",w.$2(0.27,0.72),p,5.6)
b5.$5(2,"Mama",w.$2(-0.34,0.44),u,6.4)
b5.$5(3,"Baba",w.$2(0.34,0.44),u,7)
b5.$5(4,"Dada",w.$2(-0.17,0.2),p,8)
b5.$5(5,"Kaka",w.$2(0.17,0.2),p,8.6)
b6=new D.fER(c8,d6,d4)
b6.$3(w.$2(0,0.7),c6*0.028,5.9)
b6.$3(w.$2(0,0.39),c6*0.035,7.4)
if(c7>9.3)for(u=(c7-9.3)*0.4,s=0;s<7;++s){b7=A.h.F(u+s/7,1)
D.aRl(d4,"\u2665",w.$2(Math.sin(s*2.3+d3)*0.3,0.38-b7*0.3),c6*(0.04+0.02*A.o.F(s,3)),A.hL.j((1-b7)*0.85),A.b6,0,c4)}d3=c5*0.655+(1-c9.$1(c8.$2(1,0.9)))*c5*0.4
u=c6*0.1
d=d3+c5*0.315
b8=new B.a4(d3,u,d,u+c6*0.64)
a4=B.by(b8,new B.aP(r,r))
$.S()
a5=B.L()
a5.r=C.iM.j(0.88).gp(0)
d4.aq(a4,a5)
a5=B.by(b8,new B.aP(r,r))
a4=B.L()
a4.b=A.aa
a4.c=q
a4.r=F.f5.gp(0)
d4.aq(a5,a4)
b9=new D.fEU(b8,c6)
D.aQu(d4,"NGMY",b9.$2(0.13,0.06),c6*0.06,F.f5,!0,q)
D.aQu(d4,"Family",b9.$2(0.2,0.1),u,A.c,!0,0)
D.aQu(d4,"Tree",b9.$2(0.3,0.1),u,A.c,!0,0)
for(s=0;s<3;++s){c0=c8.$2(5.5+s*1.5,0.5)
if(c0<=0)continue
D.aQu(d4,"\u2665 "+C.ce_[s],b9.$2(0.43+s*0.075,0.06).eD(new B.r((1-c0)*30,0)),r,A.ix.j(c0),!1,0)}c1=c8.$2(11,0.5)
if(c1>0){c2=B.bX(new B.r(b8.gbE().a,c6*0.67),p,(d-d3)*0.6*A.ed.az(0,c1))
d3=B.by(c2,new B.aP(l,l))
$.S()
u=B.L()
u.r=F.f5.gp(0)
d4.aq(d3,u)
if(c1>0.8)D.aQu(d4,"ngmy.org",c2.cr(-d2),r,C.iM,!0,0)}if(c7>11.6){d2=c6*0.82
D.aQu(d4,"Family is everything",new B.a4(0,d2,0+x*2,d2+r),r,A.c.j(A.h.D((c7-11.6)/0.5,0,1)),!0,0)}if(c7<0.4)c3=1-c7/0.4
else c3=c7>13.5?(c7-13.5)/0.5:0
if(c3>0){$.S()
d2=B.L()
d2.r=A.w.j(c3).gp(0)
d4.aF(new B.a4(0,0,d0,d1),d2)}},
hkG(d,e,f,g,h,i){return B.a6(d,!1).ce(B.vm(null,!1,!0,!0,new D.h6i(e,h,g,i,f),A.eW,null,A.pt,new D.h6j(),y.S))},
yn:function yn(d,e){this.a=d
this.b=e},
fYW:function fYW(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
fsM:function fsM(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fET:function fET(d){this.a=d},
fEP:function fEP(){},
fES:function fES(d,e){this.a=d
this.b=e},
fEQ:function fEQ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fER:function fER(d,e,f){this.a=d
this.b=e
this.c=f},
fEU:function fEU(d,e){this.a=d
this.b=e},
h6i:function h6i(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
h6j:function h6j(){},
XN:function XN(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aH3:function aH3(d,e,f){var _=this
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
_.a9$=f
_.c=_.a=null},
eSj:function eSj(d,e,f){this.a=d
this.b=e
this.c=f},
eSa:function eSa(d,e,f){this.a=d
this.b=e
this.c=f},
eSi:function eSi(d){this.a=d},
eS7:function eS7(d,e){this.a=d
this.b=e},
eS6:function eS6(d,e){this.a=d
this.b=e},
eS8:function eS8(d){this.a=d},
eS5:function eS5(d,e){this.a=d
this.b=e},
eS9:function eS9(d,e){this.a=d
this.b=e},
eSp:function eSp(d,e){this.a=d
this.b=e},
eSo:function eSo(d,e){this.a=d
this.b=e},
eSn:function eSn(d){this.a=d},
eSm:function eSm(d){this.a=d},
eSq:function eSq(d){this.a=d},
eSk:function eSk(d,e){this.a=d
this.b=e},
eSl:function eSl(d){this.a=d},
eSh:function eSh(){},
eSc:function eSc(d){this.a=d},
eSd:function eSd(d){this.a=d},
eSe:function eSe(d){this.a=d},
eSf:function eSf(d){this.a=d},
eSb:function eSb(d){this.a=d},
eSg:function eSg(d){this.a=d},
eS4:function eS4(d){this.a=d},
eS3:function eS3(d){this.a=d},
by1:function by1(d,e,f,g,h,i,j){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.a=j},
aOZ:function aOZ(){},
S8(d,e,f,g,h,i,j,k,l,m){var x,w,v
if(g<1||e.length===0)return 0
x=new D.fEB(j,e,m,k,h,f,i,l)
w=x.$1(g)
v=w.b.c
if(v>l&&v>0)w=x.$1(g*l/v)
w.a4(d,new B.r(f.a-w.b.c*i,f.b))
x=w.b.a.c
return x.gba(x)},
aQa(d,e,f,g,h,i,j,k,l){var x,w,v,u,t,s,r,q,p=h/2,o=f-p,n=f+p
p=i/2
x=g-p
w=g+p
v=l+j
p=new D.fqk()
u=y.g
t=p.$1(B.a([e.hb(o,l,x).a,e.hb(n,l,x).a,e.hb(n,v,x).a,e.hb(o,v,x).a],u))
$.S()
s=B.L()
s.r=B.ap(k,A.w,0.28).gp(0)
d.af(t,s)
s=e.b
s===$&&B.c()
r=s<0?n:o
t=p.$1(B.a([e.hb(r,l,x).a,e.hb(r,l,w).a,e.hb(r,v,w).a,e.hb(r,v,x).a],u))
s=B.L()
s.r=B.ap(k,A.w,0.45).gp(0)
d.af(t,s)
q=p.$1(B.a([e.hb(o,v,x).a,e.hb(n,v,x).a,e.hb(n,v,w).a,e.hb(o,v,w).a],u))
u=B.L()
p=B.ap(k,A.c,0.25)
p.toString
u.san(new B.a7(A.ay,A.aC,A.x,B.a([p,k],y.O),null,null).aD(0,B.ai4(q.glg().a.getBounds())))
d.af(q,u)},
frB(d,e,f,g,a0,a1,a2,a3,a4){var x,w,v,u,t,s,r,q,p,o=null,n=e.hb(f,a4,g),m=n.a,l=e.hb(f,a4+a1,g),k=l.a,j=a0*n.b,i=a0*l.b,h=e.c
h===$&&B.c()
x=Math.sin(h)*0.55+0.1
h=m.a
w=h-j
v=k.a
u=v-i
t=Math.min(w,u)
s=k.b
v+=i
h=Math.max(h+j,v)
r=m.b
q=new B.aH($.S().r,A.aj,o,o,B.a([],y.v))
q.E(new B.aZ(u,s))
q.E(new B.aq(w,r))
w=j*2
q.E(new B.ak4(B.bX(m,w*x,w),3.141592653589793,-3.141592653589793,!1))
q.E(new B.aq(v,s))
q.E(new B.bx())
v=B.L()
v.san(new B.a7(A.a5,A.a9,A.x,a2,L.Sq,o).aD(0,new B.a4(t,s,h,r)))
d.af(q,v)
h=i*2
p=B.bX(k,h*x,h)
h=B.L()
w=B.ap(a3,A.c,0.4)
w.toString
h.san(new B.bT(A.nj,0.5,A.x,o,0,B.a([w,a3],y.O),o,o).aD(0,p))
d.c0(p,h)},
fyx(d){var x,w,v,u,t=A.h.F(d,1)*7.48,s=[1.24,2.5,1.24,2.5]
for(x=0;x<4;++x){w=s[x]
if(t<=w){w=[C.fdv,C.feX,C.fdA,C.fdk][x].a
v=w[0]
u=w[1]
return new B.y(v+w[2]*t,u+w[3]*t)}t-=w}return C.f4K},
iug(g0,g1,g2){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6,d7,d8,d9,e0,e1,e2,e3,e4,e5,e6,e7,e8,e9,f0,f1,f2,f3,f4,f5,f6=null,f7=1e9,f8=g1.a,f9=g1.b
if(f8<=0||f9<=0)return
x=A.h.F(g2,10)
w=new B.a4(0,0,0+f8,0+f9)
v=g0.c
J.bt(v.save())
v.clipRect(B.i2(w),$.mn()[1],!0)
u=$.S()
t=B.L()
t.san(C.eGc.aD(0,w))
g0.aF(w,t)
s=g1.gdk()>=120
if(s){r=new B.e0()
r.cU(5)
for(t=g2*f8*0.01,q=f9*0.02,p=0;p<8;++p){o=A.h.F(r.ai()*f8+t,f8)
n=r.ai()
m=r.ai()
l=new B.ar(A.S,A.Q,A.V,A.X,A.U)
l.r=A.aH.j(0.07).gp(0)
l.y=new B.fT(A.G,q)
g0.O(new B.r(o,n*f9*0.5),f9*(0.02+m*0.04),l)}}k=new D.cVx(g1)
k.b=Math.sin(g2*0.32)*0.22
t=0.86+Math.sin(g2*0.21)*0.05
k.c=t
k.d=f9*1.8
k.e=new B.r(f8*0.5,f9*0.5)
j=A.ck.az(0,A.h.D(A.h.D((x-1.6)/0.5,0,1),0,1))
i=x<2.2?-1:(x-2.2)/3.4
h=i>=0.5828877005347594
g=h?0.75+0.25*Math.abs(Math.sin(g2*9)):0
u=u.r
q=y.v
f=new B.aH(u,A.aj,f6,f6,B.a([],q))
o=y.g
n=y.H
m=B.C(B.a([k.hb(-1.85,-0.09000000000000001,-1.2).a,k.hb(1.85,-0.09000000000000001,-1.2).a,k.hb(1.85,-0.09000000000000001,1.1500000000000001).a,k.hb(-1.85,-0.09000000000000001,1.1500000000000001).a],o),n)
f.E(new B.zk(m,!0))
e=B.L()
e.r=A.w.j(0.55).gp(0)
if(s)e.y=new B.fT(A.G,f9*0.025)
g0.af(f,e)
m=new B.aH(u,A.aj,f6,f6,B.a([],q))
l=B.C(B.a([k.hb(-1.75,-0.07,-1.05).a,k.hb(1.75,-0.07,-1.05).a,k.hb(1.75,0,-1.05).a,k.hb(-1.75,0,-1.05).a],o),n)
m.E(new B.zk(l,!0))
l=B.L()
l.r=C.bsc.gp(0)
g0.af(m,l)
d=new B.aH(u,A.aj,f6,f6,B.a([],q))
u=B.C(B.a([k.hb(-1.75,0,-1.05).a,k.hb(1.75,0,-1.05).a,k.hb(1.75,0,1.05).a,k.hb(-1.75,0,1.05).a],o),n)
d.E(new B.zk(u,!0))
u=B.L()
u.san(C.cbN.aD(0,B.ai4(d.glg().a.getBounds())))
g0.af(d,u)
if(s){a0=B.L()
a0.r=A.bv.j(0.08).gp(0)
a0.c=1
for(a1=-1.75;a1<=1.76;a1+=0.25)g0.ah(k.hb(a1,0,-1.05).a,k.hb(a1,0,1.05).a,a0)
for(a2=-1.05;a2<=1.06;a2+=0.25)g0.ah(k.hb(-1.75,0,a2).a,k.hb(1.75,0,a2).a,a0)}for(u=[C.f5s,C.f37,C.f_p,C.f0Y],o=u.length,a3=0;a3<o;++a3){n=u[a3]
a4=k.hb(n.a,0,n.b)
a5=a4.a
a6=a4.b
a7=Math.sin(t)*0.55+0.1
n=a6*0.12
n=B.bX(a5,n*a7,n)
$.S()
m=new B.ar(A.S,A.Q,A.V,A.X,A.U)
m.r=E.GI.gp(0)
g0.c0(n,m)
m=a6*0.06
m=B.bX(a5,m*a7,m)
n=new B.ar(A.S,A.Q,A.V,A.X,A.U)
n.r=C.YW.gp(0)
g0.c0(m,n)}u=$.S()
t=B.a([],q)
a8=new B.aH(u.r,A.aj,f6,f6,t)
for(p=0;p<=120;++p){a9=D.fyx(p/120)
a5=k.hb(a9.a,0.004,a9.b).a
u=a5.a
o=a5.b
if(p===0){u=new B.aZ(u,o)
t.push(u)
o=a8.f
if(o!=null)u.ak(o)
a8.ab()}else{u=new B.aq(u,o)
t.push(u)
o=a8.f
if(o!=null)u.ak(o)
a8.ab()}}b0=k.hb(0,0,0).b
$.S()
u=B.L()
u.b=A.aa
u.c=b0*0.07
u.e=A.dQ
u.r=C.br_.gp(0)
g0.af(a8,u)
u=B.L()
u.b=A.aa
u.c=b0*0.045
u.e=A.dQ
u.san(C.auo.aD(0,w))
g0.af(a8,u)
if(h){b1=B.L()
b1.b=A.aa
b1.c=b0*0.09
b1.r=A.h9.j(0.25+0.1*Math.sin(g2*6)).gp(0)
if(s)b1.y=new B.fT(A.G,b0*0.04)
g0.af(a8,b1)}for(u=[C.eQ5,C.ePb],t=u.length,a3=0;a3<t;++a3){o=u[a3]
b2=o.a
b3=o.b
for(o=b2-0.2,n=b3-0.17,m=b3+0.17,p=0;p<5;++p){b4=o+p*0.1
D.aQa(g0,k,b4,n,0.035,0.08,0.03,A.cA,0)
D.aQa(g0,k,b4,m,0.035,0.08,0.03,A.cA,0)}D.aQa(g0,k,b2,b3,0.55,0.3,0.08,A.ct,0)
b5=k.hb(b2,0.081,b3)
b6=b5.a
a6=b5.b
D.S8(g0,"NGMY",new B.r(b6.a,b6.b-a6*0.05),a6*0.08,A.c.j(0.75),0.5,f6,a6*0.01,f7,A.u)}D.aQa(g0,k,-0.55,0.62,0.34,0.2,0.08,A.aL,0)
b7=k.hb(-0.7,0.1,0.62).a
b8=(1-j)*0.75
b9=k.hb(-0.7+0.32*Math.cos(b8),0.1+0.32*Math.sin(b8),0.62).a
$.S()
u=B.L()
u.c=b0*0.04
u.d=A.bG
u.san(C.aus.aD(0,B.r2(b7,b9)))
g0.ah(b7,b9,u)
u=B.L()
u.r=A.aA.gp(0)
g0.O(b7,b0*0.025,u)
if(j>0.95&&x<2.6){u=A.h.D((x-2.1)/0.5,0,1)
t=B.L()
t.r=A.bL.j(0.8).gp(0)
g0.O(b9,b0*0.08*(1-u),t)}D.aQa(g0,k,0.55,0.62,0.46,0.12,0.1,C.bwe,0.02)
for(u=[C.eX0,C.f_5,C.eR9,C.eNX],t=u.length,a3=0;a3<t;++a3){o=u[a3]
D.aQa(g0,k,0.41000000000000003+o.a*0.09,0.62,0.035,0.125,0.105,o.b,0.02)}D.frB(g0,k,-1.25,0,0.17,0.62,C.cBu,C.ahV,0)
c0=k.hb(-1.25,0.62,0)
a6=c0.b
D.frB(g0,k,-1.25,0,0.06,0.06,C.daP,C.alx,0.62)
D.S8(g0,"9V",k.hb(-1.25,0.3,0).a.aJ(0,new B.r(0,a6*0.06)),a6*0.11,A.bt,0.5,f6,0,f7,A.u)
D.S8(g0,"+",c0.a.aJ(0,new B.r(a6*0.16,a6*0.18)),a6*0.12,A.ab,0.5,f6,0,f7,A.u)
D.frB(g0,k,0,-0.62,0.13,0.36,C.dpD,A.dY,0)
D.frB(g0,k,1.25,0,0.12,0.16,C.d6_,A.d_,0)
c1=k.hb(1.25,0.36,0)
b1=c1.a
c2=c1.b*0.22
u=g>0
if(u){$.S()
c3=B.L()
t=c2*4
c3.san(new B.bT(A.z,0.5,A.x,f6,0,B.a([A.bL.j(0.65*g),A.at.j(0.18*g),A.L],y.O),N.Sj,f6).aD(0,B.bW(b1,t)))
g0.O(b1,t,c3)}c4=B.bW(b1,c2)
t=$.S()
o=B.L()
n=y.O
o.san(new B.bT(A.M3,0.5,A.x,f6,0,u?B.a([A.c,A.bL,A.at],n):B.a([A.c.j(0.5),A.bP.j(0.35),A.aL.j(0.55)],n),f6,f6).aD(0,c4))
g0.c0(c4,o)
c5=B.L()
c5.b=A.aa
c5.c=Math.max(1,c2*0.06)
c5.r=(u?A.c:A.iw).gp(0)
q=B.a([],q)
c6=new B.aH(t.r,A.aj,f6,f6,q)
t=b1.a
o=c2*0.35
m=t-o
l=b1.b
c7=l+c2*0.3
c6.E(new B.aZ(m,c7))
for(u=c2*0.12,c8=c2*0.14,c9=-c2,d0=c9*0.05,p=0;p<6;p=d1){d1=p+1
d2=(p&1)===0?d0:u
d2=new B.aq(m+c8*d1,l+d2)
q.push(d2)
d3=c6.f
if(d3!=null)d2.ak(d3)
c6.ab()}c6.E(new B.aq(t+o,c7))
g0.af(c6,c5)
u=B.bX(b1.a5(0,new B.r(c9*0.35,c9*0.4)),c2*0.25,c2*0.45)
$.S()
t=B.L()
t.r=A.c.j(0.6).gp(0)
g0.c0(u,t)
u=i>=0
if(u){for(p=14;p>=0;--p){d4=i-p*0.008
if(d4<0)continue
d5=D.fyx(d4)
d6=k.hb(d5.a,0.06,d5.b)
d7=1-p/15
$.S()
t=new B.ar(A.S,A.Q,A.V,A.X,A.U)
t.r=A.h9.j(0.35*d7).gp(0)
g0.O(d6.a,d6.b*0.05*(0.4+0.6*d7),t)}d8=D.fyx(i)
d9=k.hb(d8.a,0.06,d8.b)
a5=d9.a
e0=d9.b*0.09
t=e0*3
$.S()
q=B.L()
q.san(new B.bT(A.z,0.5,A.x,f6,0,B.a([A.ft.j(0.7),A.aH.j(0.2),A.L],n),L.Sq,f6).aD(0,B.bW(a5,t)))
g0.O(a5,t,q)
q=B.L()
q.san(new B.bT(A.z,0.5,A.x,f6,0,C.dm0,f6,f6).aD(0,B.bW(a5,e0)))
g0.O(a5,e0,q)
r=new B.e0()
r.cU(A.h.bh(g2*20))
for(t=a5.a,q=a5.b,o=e0*0.12,p=0;p<6;++p){d7=r.ai()*3.141592653589793*2
e1=e0*(1.2+r.ai()*1.6)
m=Math.cos(d7)
l=Math.sin(d7)
c7=Math.cos(d7)
c8=Math.sin(d7)
c9=new B.ar(A.S,A.Q,A.V,A.X,A.U)
c9.c=Math.max(1,o)
c9.d=A.bG
c9.r=A.c.j(0.8).gp(0)
g0.ah(new B.r(t+m*e0,q+l*e0),new B.r(t+c7*e1,q+c8*e1),c9)}}if(g1.gdk()<90){v.restore()
return}e2=Math.min(f9,f8*0.6)
if(x<1.9){d7=A.h.D((x-0.2)/0.5,0,1)*(1-A.h.D((x-1.5)/0.4,0,1))
t=f8/2
D.S8(g0,"NGMY ELECTRONICS LAB PRESENTS",new B.r(t,f9*0.08),e2*0.035,A.h9.j(d7),0.5,f6,e2*0.006,f7,A.u)
J.bt(v.save())
v.translate(0,(1-A.ck.az(0,A.h.D(A.h.D((x-0.4)/0.6,0,1),0,1)))*e2*0.05)
D.S8(g0,"Spark Adventure",new B.r(t,f9*0.13),e2*0.1,A.c.j(d7),0.5,B.a([A.c,A.h9],n),0,f8*0.9,A.u)
v.restore()}if(x>=1.6&&x<2.6){e3="The switch closes"
e4=1}else{e4=2
if(u&&!h){e5=D.fyx(i)
e6=e5.a
if(e5.b>0.61&&e6>0.1)e3="The resistor slows the current"
else if(e6>1.24){e3="Almost at the bulb"
e4=3}else e3="Current flows from the battery"}else if(h&&x<7.6){e3="The bulb lights up!"
e4=4}else{e3=f6
e4=0}}if(e3!=null){b6=D.a3B(e3,B.m(f6,f6,A.c,f6,f6,f6,f6,f6,"Roboto",f6,f6,A.h.fK(e2*0.045*2)/2,f6,f6,A.H,f6,f6,!0,f6,f6,f6,f6,f6,f6,f6,f6),A.b6,f6,1,1/0)
e7=e2*0.025
e8=e2*0.06
u=f8*0.05
t=f9*0.66
q=b6.b
o=q.c
q=q.a.c
m=e2*0.04
e9=B.by(new B.a4(u,t,u+(e8+e7*3+o),t+(q.gba(q)+e7*1.4)),new B.aP(m,m))
m=B.L()
m.r=A.w.j(0.6).gp(0)
g0.aq(e9,m)
m=B.L()
m.b=A.aa
m.c=1
m.r=A.aH.j(0.6).gp(0)
g0.aq(e9,m)
m=e9.a
q=e8/2
f0=new B.r(m+e7+q,e9.gbE().b)
t=B.L()
t.r=A.aH.gp(0)
g0.O(f0,q,t)
D.S8(g0,""+e4,f0.aJ(0,new B.r(0,e8*0.38)),e8*0.6,A.bA,0.5,f6,0,f7,A.u)
t=e9.gbE()
q=b6.b.a.c
b6.a4(g0,new B.r(m+e7*2+e8,t.b-q.gba(q)/2))}if(x>=7.6){a6=A.h.D((x-7.6)/0.4,0,1)
u=B.L()
u.r=A.w.j(0.55*a6).gp(0)
g0.aF(w,u)
f1=A.ed.az(0,A.h.D((x-7.7)/0.5,0,1))
f2=f9*0.3
J.bt(v.save())
u=f8/2
v.translate(u,f2)
g0.bV(0,0.75+0.25*f1)
v.translate(-f8/2,-f2)
t=e2*0.1
D.S8(g0,"Build it yourself",new B.r(u,f2-e2*0.06),t,A.c.j(a6),0.5,B.a([A.c,A.h9],n),0,f8*0.9,A.u)
v.restore()
n=e2*0.05
D.S8(g0,"NGMY Electronics Lab",new B.r(u,f2+e2*0.08),n,A.ab.j(0.85*a6),0.5,f6,0,f7,A.H)
f3=A.ed.az(0,A.h.D((x-8.1)/0.4,0,1))
if(f3>0){f4=B.by(B.bX(new B.r(u,f2+e2*0.24),t,Math.max(f8*0.3,e2*0.55)*f3),new B.aP(n,n))
t=B.L()
q=f4.a
o=f4.c
t.san(C.cb9.aD(0,new B.a4(q,f4.b,o,f4.d)))
g0.aq(f4,t)
if(f3>0.7)D.S8(g0,"Open the Electronics Lab",new B.r(u,f4.gbE().b-e2*0.03),e2*0.045,A.c,0.5,f6,0,(o-q)*0.85,A.u)}}if(x<0.3)f5=1-x/0.3
else f5=x>9.7?(x-9.7)/0.3:0
if(f5>0){u=B.L()
u.r=A.w.j(A.h.D(f5,0,1)).gp(0)
g0.aF(w,u)}v.restore()},
fEB:function fEB(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
cVx:function cVx(d){var _=this
_.a=d
_.e=_.d=_.c=_.b=$},
fqk:function fqk(){},
hkO(d){var x
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
iwI(d){var x
switch(D.hkO(d)){case"lg":x=A.hJ
break
case"sony":x=A.d_
break
case"apple":x=A.bO
break
case"bo":x=C.up
break
default:x=A.aH
break}return x},
au4:function au4(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bnU:function bnU(){this.d=0
this.c=this.a=null},
eS1:function eS1(d,e){this.a=d
this.b=e},
eS2:function eS2(d,e){this.a=d
this.b=e},
eRZ:function eRZ(){},
eRY:function eRY(d){this.a=d},
eS_:function eS_(d){this.a=d},
eS0:function eS0(d){this.a=d},
eRW:function eRW(d){this.a=d},
eRX:function eRX(d,e){this.a=d
this.b=e},
iaK(){var x,w,v,u
try{w=$.ei().gib().b
x=new B.b8(w,B.a3(w).k("b8<2>"))
if(x.a.a===0)w=2
else{J.fn(x)
w=$.le()
v=w.d
w=v==null?w.ghn():v}return w}catch(u){return 2}},
hGh(d,e,f,g,h){var x,w,v,u,t,s,r,q,p,o,n,m,l=f.a
if(l<=0||f.b<=0)return
if($.hjq){x=d.c
J.bt(x.save())
x.clipRect(B.i2(new B.a4(0,0,0+l,0+f.b)),$.mn()[1],!0)
h.$1(d)
x.restore()
return}w=A.h.bh(g*15)
v=$.S4.W(0,e)
x=v==null
if(x||v.a!==w){u=f.b
t=Math.max(l,u)
s=A.h.D(Math.min(4*D.iaK(),1600/t),1,64)
$.S()
r=new B.q8(new B.pJ())
q=B.zu(r,null)
q.bV(0,s)
h.$1(q)
p=r.o8()
o=p.a7M(Math.max(1,A.h.U(l*s)),Math.max(1,A.h.U(u*s)))
p.t()
if(!x)v.b.t()
v=new D.buI(w,o)}$.S4.n(0,e,v)
for(x=new B.dn($.S4,$.S4.r,$.S4.e),n=0;x.C();){u=x.d.b
n+=u.c*u.d}x=B.a3($.S4).k("cr<1>")
for(;;){u=$.S4.a
if(u>1)u=u>24||n>6e6
else u=!1
if(!u)break
m=new B.cr($.S4,x).gae(0)
if(!m.C())B.bj(B.fj())
u=$.S4.W(0,m.gP(0)).b
n-=u.c*u.d
u.t()}o=v.b
d.nt(o,new B.a4(0,0,o.c,o.d),new B.a4(0,0,0+l,0+f.b),$.hNk())},
buI:function buI(d,e){this.a=d
this.b=e},
hHR(d){return C.dnz[A.o.D(d,0,7)]},
aj_(d){return d.j(A.h.fK(d.a*16)/16)},
a3B(d,e,f,g,h,i){var x,w,v=null,u=isFinite(i),t=new B.bso([d,e,h,g,f,u?A.h.fK(i*2)/2:-1]),s=$.ah3.W(0,t)
if(s!=null){$.ah3.n(0,t,s)
return s}x=B.fE(g,A.cx,v,h,v,B.cS(v,v,v,v,v,v,v,v,v,e,d),f,A.c1,v,A.dK,A.c2)
x.nB(u?A.h.fK(i*2)/2:1/0)
$.ah3.n(0,t,x)
for(u=B.a3($.ah3).k("cr<1>");$.ah3.a>800;){w=new B.cr($.ah3,u).gae(0)
if(!w.C())B.bj(B.fj())
$.ah3.W(0,w.gP(0)).t()}return x}},C,M,F,W
J=c[1]
B=c[0]
A=c[2]
N=c[236]
G=c[42]
E=c[140]
L=c[235]
O=c[241]
I=c[115]
P=c[191]
Q=c[106]
H=c[39]
R=c[137]
S=c[124]
T=c[103]
U=c[132]
K=c[149]
V=c[195]
D=a.updateHolder(c[28],D)
C=c[101]
M=c[44]
F=c[99]
W=c[261]
D.apu.prototype={
a7(){return"NgmyAdHero."+this.b}}
D.hX.prototype={}
D.rR.prototype={}
D.b_G.prototype={}
D.J3.prototype={
B(d){var x,w,v,u,t=null,s=B.aE(d,A.c_,y.w).w,r=B.l(24),q=this.c,p=q.e,o=B.K(p.j(0.45),A.r,1),n=B.a([new B.ab(0,A.G,p.j(0.25),A.J,30)],y.V),m=q.d,l=B.a([m,p],y.O),k=A.c.j(0.22),j=B.l(14),i=y.p
l=B.a([B.p(t,B.A(B.a([B.p(t,B.X(q.c,A.c,t,t,t,28),A.f,t,t,new B.o(k,t,t,j,t,t,A.n),t,48,t,t,t,t,t,48),A.bc,B.E(B.x(B.a([B.d(q.b,t,t,t,t,t,t,A.dl,t,t,t),A.bF,B.d(q.f+" "+q.r,t,t,t,t,t,t,B.m(t,t,A.c.j(0.85),t,t,t,t,t,t,t,t,12.5,t,t,A.O,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],i),A.E,t,A.e,A.i,0,A.p),1)],i),A.l,t,A.e,A.i,0,t,t),A.f,t,t,new B.o(t,t,t,t,t,new B.a7(A.ay,A.aC,A.x,l,t,t),A.n),t,t,t,t,A.OK,t,t,t),new B.D(K.anK,B.d(q.w,t,t,t,t,t,t,C.fKH,t,t,t),t)],i)
for(k=q.x,x=0;x<3;++x){w=k[x]
j=B.ap(m,A.w,0.4)
j.toString
l.push(new B.D(C.bHd,new B.c8(A.aM,A.e,A.i,A.l,t,A.p,t,0,B.a([B.p(t,B.X(A.hd,j,t,t,t,14),A.f,t,t,new B.o(p,t,t,t,t,t,A.a6),t,20,t,t,t,t,t,20),A.as,new B.bz(1,A.bd,B.d(w,t,t,t,t,t,t,A.acl,t,t,t),t)],i),t),t))}k=p.j(0.12)
j=B.l(14)
v=B.K(p.j(0.4),A.r,1)
u=B.ap(p,A.c,0.2)
u.toString
l.push(B.p(t,B.A(B.a([B.X(A.mm,u,t,t,t,20),A.ae,B.E(B.x(B.a([C.h61,A.bF,B.d(q.cx,t,t,t,t,t,t,A.kq,t,t,t)],i),A.E,t,A.e,A.i,0,A.p),1)],i),A.l,t,A.e,A.i,0,t,t),A.f,t,t,new B.o(k,t,v,j,t,t,A.n),t,t,C.hAO,C.bGQ,A.bl,t,t,t))
j=B.E(B.ep(C.c_j,C.hBx,C.h9q,this.d,B.dj(t,t,t,t,t,t,t,t,t,A.c,t,t,A.kW,t,new B.ba(B.l(14),A.a1),K.aff,t,t,t,t)),1)
m=B.ap(m,A.w,0.5)
m.toString
l.push(new B.D(A.wG,B.A(B.a([j,A.as,B.E(B.bJ(A.acQ,C.hA8,new D.c4F(d),B.bp(p,t,t,t,m,t,A.kW,t,new B.ba(B.l(14),A.a1),t,t,t)),1)],i),A.l,t,A.e,A.i,0,t,t),t))
return B.bn(!0,B.as(new B.cN(new B.aY(0,520,0,s.a.b*0.9),B.p(t,B.ca(B.x(l,A.al,t,A.e,A.N,0,A.p),A.t,t,A.y,t,t,t,t,t,A.ah),A.aq,t,t,new B.o(A.Zf,t,o,r,n,t,A.n),t,t,C.hAD,A.t7,t,t,t,t),t),1,t,t),!0,!1,A.ag,!0,!1)}}
D.wt.prototype={}
D.yn.prototype={}
D.XN.prototype={
S(){return new D.aH3(K.AF,null,null)}}
D.aH3.prototype={
gQu(){var x,w=this,v=w.d
if(v===$){x=B.bo(null,A.ox,null,1,null,w)
x.cs(0)
w.d!==$&&B.bE()
w.d=x
v=x}return v},
gyf(){var x=this.e
return x===$?this.e=this.a.e:x},
gaRF(){var x=this.as
if(x===$)x=this.as=this.a.f?3:0
return x},
gBf(){var x=this.gQu().y
x=x==null?null:A.o.ar(x.a,1000)
return(x==null?0:x)/1000},
gaxo(){var x=this.f
return x>=0&&C.ik[x].e===-1},
afC(){var x,w,v=this
if(v.r)return null
x=v.f
if(x>=0){w=C.ik[x].e
if(w===-2)return null
if(w===-1)return A.o.F(v.ay+A.h.bh(Math.max(0,v.gBf()-v.ch)/10),14)
return w}w=C.aK9.h(0,A.o.F(v.gyf(),10))
return w==null?null:D.hHR(w)},
ccO(d,e){if(e.a<=0||e.b<=0)return
this.m(new D.eSj(this,d,e))
H.dA(660,"",90,0,0.25,"tri")},
ccK(d){this.m(new D.eSa(this,d,14))
H.dA(900,"",40,0,0.25,"noise")},
ccM(){this.m(new D.eSi(this))
this.X6()},
afE(){return this.c4Z()},
c4Z(){var x=0,w=B.j(y.o),v,u=this,t,s,r
var $async$afE=B.e(function(d,e){if(d===1)return B.f(e,w)
for(;;)switch(x){case 0:s={}
r=u.afC()
if(r==null){x=1
break}t=u.Q
if(t!=null)t.a1(0)
u.m(u.gbbC())
s.a=!1
t=u.c
t.toString
x=3
return B.b(B.bU(A.L,null,new D.eS7(s,r),t,!0,!0,!0,null,!1,!1,y.o),$async$afE)
case 3:if(u.c==null){x=1
break}if(s.a)u.ccM()
else u.X6()
case 1:return B.h(v,w)}})
return B.i($async$afE,w)},
X6(){var x=this,w=x.Q
if(w!=null)w.a1(0)
x.Q=B.cz(B.dx(0,0,0,0,0,x.gaRF()>0&&x.gBf()<3.2?13:10),x.gc99())},
c9a(){var x=this
if(x.c==null)return
if(x.f<0&&!x.r){x.m(new D.eS8(x))
H.dA(900,"",40,0,0.2,"noise")}x.X6()},
Y(){var x=this
x.a3()
x.w=B.cz(x.a.r,x.gb1H())
x.X6()
H.dA(520,"",80,0,0.25,"tri")},
ccG(){var x=this.c
if(x!=null&&B.a6(x,!1).q4()){x=this.c
x.toString
B.a6(x,!1).N(this.gyf())}},
BJ(){var x=this.w
if(x!=null)x.a1(0)
this.w=null},
afD(d){this.m(new D.eS5(this,d))
H.dA(900,"",40,0,0.3,"noise")},
b1I(d){this.m(new D.eS9(this,d))
H.dA(700,"",60,0,0.3,"tri")},
t(){var x,w=this
if(w.y){G.CW(E.KS)
G.bFO()}x=w.w
if(x!=null)x.a1(0)
x=w.Q
if(x!=null)x.a1(0)
w.gQu().t()
w.bAK()},
B(d){var x,w,v,u,t,s,r,q,p,o,n=this,m=null,l=n.y,k=!l||!n.z
l=l?B.aE(d,A.dD,y.w).w.r.b+26:10
x=n.ccN(A.cB,"Back to the board",n.gb1H())
w=n.y
v=w?Q.HX:A.wX
w=w?"Leave full screen":"Full screen"
w=n.b1J(v,w,n.gccP(),C.hBo)
v=B.l(20)
u=n.f
t=n.a
s=y.p
r=new B.D(new B.Q(10,l,10,0),B.A(B.a([x,A.ae,w,A.ae,B.E(new B.bK(A.a9,m,m,B.p(m,B.d(u>=0?t.c+" \xb7 "+C.ik[u].a:t.c+" \xb7 CH "+(n.gyf()+1),m,1,A.a2,m,m,m,S.xE,m,m,m),A.f,m,m,new B.o(A.b5,m,m,v,m,m,A.n),m,m,m,m,A.lO,m,m,m),m),1)],s),A.l,m,A.e,A.i,0,m,m),m)
if(n.y)l=A.afU
else{l=B.l(10)
l=new B.o(m,m,B.K(n.gccH(),A.r,6),l,B.a([new B.ab(0,A.G,D.iwI(n.a.d).j(0.25),A.J,40)],y.V),m,A.n)}x=n.y
q=B.as(new B.fH(1.7777777777777777,B.p(m,B.bv(B.l(x?0:4),B.ck(new D.eSp(n,k)),A.aq),A.f,m,m,l,m,m,C.hBi,m,m,m,m,m),m),m,m,m)
l=!x
w=x?n.gb1K():m
if(x){x=k?1:0
s=new B.an(A.a0,m,A.b1,A.t,B.a([q,B.ao(m,B.xA(new B.dt(!k,r,m),A.b0,A.ie,x),m,m,0,0,0,m)],s),m)
x=s}else{x=n.ccL()
v=B.E(new B.D(A.fv,q,m),1)
u=A.w.j(0.65)
t=B.l(18)
p=n.f
p=B.d(p>=0?C.ik[p].a:C.SO[n.gyf()].a,m,m,m,m,m,m,A.hu,A.K,m,m)
o=n.f
x=B.x(B.a([r,A.am,x,A.P,v,B.p(m,B.x(B.a([p,B.d(o>=0?C.ik[o].c:C.SO[n.gyf()].b,m,m,m,m,m,m,T.aci,A.K,m,m)],s),A.l,m,A.e,A.N,0,A.p),A.f,m,m,new B.o(u,m,m,t,m,m,A.n),m,m,C.hAZ,V.Oy,A.bS,m,m,m)],s),A.l,m,A.e,A.i,0,A.p)}return B.c6(m,A.w,B.bn(l,B.az(A.bZ,x,A.y,!1,m,w,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new D.eSq(n),m,m,m,m,m,m,!1,A.a4),l,!1,A.ag,l,l),m,!1,!1,m,m)},
ccQ(){var x=!this.y
this.m(new D.eSk(this,x))
if(x){G.CW(E.abN)
G.hj_(!0)}else{G.CW(E.KS)
G.bFO()}},
ccR(){var x,w=this
B.jv()
w.m(new D.eSl(w))
x=w.c.K(y.q).f
x.Mj()
if(w.z)x.T(C.aVD)},
ccL(){var x=this,w=null,v=new D.eSh(),u=A.w.j(0.72),t=B.l(22),s=B.K(A.aH.j(0.5),A.r,1)
return B.p(w,B.A(B.a([v.$3(A.x0,"CH \u2212",new D.eSc(x)),v.$3(A.i_,"CH +",new D.eSd(x)),v.$5$color$on(A.I1,"TV",new D.eSe(x),A.aH,x.f<0),v.$5$color$on(A.zr,"APPS",new D.eSf(x),A.bh,x.r),v.$5$color$on(A.zu,"ADS",new D.eSg(x),A.c4,x.f===0)],y.p),A.l,w,A.e,A.N,0,w,w),A.f,w,w,new B.o(u,w,s,t,w,w,A.n),w,w,w,w,A.OW,w,w,w)},
bGn(){return new D.au4(this.a.d,this.gccJ(),new D.eS4(this),null)},
gccH(){switch(D.hkO(this.a.d)){case"apple":var x=A.d_
break
case"bo":x=C.BU
break
case"sony":x=C.bhr
break
case"lg":x=A.eo
break
default:x=A.ct
break}return x},
b1J(d,e,f,g){var x=null,w=B.ne(x,A.b5,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x)
return B.aI(x,x,x,x,B.X(d,A.c,x,x,x,x),x,x,g,f,x,x,x,w,e,x)},
ccN(d,e,f){return this.b1J(d,e,f,null)}}
D.by1.prototype={
a4(d,e){var x=this
return D.fYV(d,e,x.b,x.d,x.e,x.c,x.r,x.f)},
aE(d){return!0}}
D.aOZ.prototype={
t(){var x=this,w=x.a9$
if(w!=null)w.a6(0,x.gbC())
x.a9$=null
x.a2()},
aX(){this.b8()
this.b5()
this.bD()}}
D.cVx.prototype={
hb(d,e,f){var x,w,v,u,t,s,r=this,q=r.b
q===$&&B.c()
x=Math.cos(q)
w=Math.sin(q)
v=d*w+f*x
q=r.c
q===$&&B.c()
u=Math.cos(q)
t=Math.sin(q)
q=r.d
q===$&&B.c()
s=q/(6+v*u-e*t)
q=r.e
q===$&&B.c()
return new B.y(new B.r(q.a+(d*x-f*w)*s,q.b-(e*u+v*t)*s+r.a.b*0.03),s)},
ga_(d){return this.a}}
D.au4.prototype={
S(){return new D.bnU()},
a7_(d,e){return this.d.$1(e)}}
D.bnU.prototype={
b1L(d){this.m(new D.eS1(this,d))
this.a.a7_(0,d)},
B(d){var x,w=this
switch(D.hkO(w.a.c)){case"lg":x=w.c5c()
break
case"sony":x=w.cCl()
break
case"apple":x=w.ccS()
break
case"bo":x=w.bHi()
break
default:x=w.cwD()
break}return x},
gafF(){var x=new B.V(Date.now(),0,!1)
return A.a.b1(A.o.v(B.dg(x)),2,"0")+":"+A.a.b1(A.o.v(B.fV(x)),2,"0")},
azx(d,e,f,g,h,i,j){var x,w,v=null,u=C.ik[d],t=this.d===d,s=u.d,r=B.ap(s,A.w,0.55)
r.toString
r=B.a([s,r],y.O)
s=B.l(h)
if(t)x=i
else x=A.L
x=B.K(x,A.r,t?2.5:0)
w=B.a([B.d(u.b,v,v,v,v,v,v,B.m(v,v,v,v,v,v,v,v,v,v,v,e,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],y.p)
if(g)w.push(new B.D(A.uJ,B.d(u.a,v,1,A.a2,v,v,v,A.Wo,v,v,v),v))
return B.az(v,B.p(v,B.x(w,A.l,v,A.b9,A.i,0,A.p),A.f,v,v,new B.o(v,v,x,s,v,new B.a7(A.ay,A.aC,A.x,r,v,v),A.n),v,f,v,v,v,v,v,j),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new D.eS2(this,d),v,v,v,v,v,v,!1,A.a4)},
b1M(d,e,f,g,h,i){return this.azx(d,e,f,!1,g,h,i)},
cwD(){var x,w,v,u,t,s,r=this,q=null,p=r.a.e,o=y.p,n=B.A(B.a([C.fWJ,A.ae,C.fOA,A.b4,C.c30,A.ae,C.bZB,A.ae,B.d(r.gafF(),q,q,q,q,q,q,C.aXR,q,q,q)],o),A.l,q,A.e,A.i,0,q,q),m=C.ik[r.d],l=B.d(m.a,q,q,q,q,q,q,A.kq,q,q,q)
m=B.d(m.c,q,1,A.a2,q,q,q,C.fFK,q,q,q)
x=A.c.j(0.08)
w=B.a([],o)
for(v=0;v<2;++v){u=new B.aP(8,8)
w.push(B.p(q,B.X(C.cxR[v],A.ab,q,q,q,17),A.f,q,q,new B.o(A.bw,q,q,new B.bf(u,u,u,u),q,q,A.n),q,34,q,A.Or,q,q,q,34))}u=B.a([],o)
for(t=0;t<8;++t){s=r.d===t?1.12:1
u.push(new B.D(A.Or,new B.zl(r.azx(t,14,44,!0,8,A.aH,52),s,A.b0,A.h1,q,q),q))}w.push(B.E(B.ca(B.A(u,A.l,q,A.e,A.i,0,q,q),A.t,q,A.y,q,q,q,q,q,A.aM),1))
return B.az(q,B.p(q,B.x(B.a([n,A.b4,new B.bK(A.a5,q,q,l,q),new B.bK(A.a5,q,q,m,q),A.am,B.p(q,B.A(w,A.l,q,A.e,A.i,0,q,q),A.f,q,q,new B.o(x,q,q,A.Y8,q,q,A.n),q,q,q,q,A.OT,q,q,q)],o),A.l,q,A.e,A.i,0,A.p),A.f,q,q,C.b91,q,q,q,q,E.amK,q,q,q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,p,q,q,q,q,q,q,!1,A.a4)},
c5c(){var x=null,w=this.a.e,v=y.p
return B.az(x,B.p(x,B.x(B.a([B.A(B.a([B.p(x,C.h1W,A.f,x,x,new B.o(A.hJ,x,x,B.l(10),x,x,A.n),x,x,x,x,A.n3,x,x,x),A.bn,C.fVC,A.b4,B.d(this.gafF(),x,x,x,x,x,x,A.F8,x,x,x)],v),A.l,x,A.e,A.i,0,x,x),A.b4,new B.a5(x,62,B.hW(x,new D.eRY(this),8,x,x,A.aM,new D.eRZ(),!1),x)],v),A.E,x,A.e,A.i,0,A.p),A.f,x,x,C.b9c,x,x,x,x,W.Ox,x,x,x),A.y,!1,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,w,x,x,x,x,x,x,!1,A.a4)},
cCl(){var x,w,v,u,t=this,s=null,r=C.ik[t.d],q=t.a.e,p=y.p,o=B.a([B.p(s,C.fik,A.f,s,s,new B.o(A.dq,s,s,B.l(12),s,s,A.n),s,s,s,s,A.z9,s,s,s),A.ae],p)
for(x=0;x<3;++x){w=C.dt0[x]
v=w==="Apps"?A.c:A.aE
o.push(new B.D(A.iS,B.d(w,s,s,s,s,s,s,new B.H(!0,v,s,s,s,s,9.5,A.O,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s),s,s,s),s))}o.push(A.b4)
o.push(B.d(t.gafF(),s,s,s,s,s,s,C.fF8,s,s,s))
o=B.A(o,A.l,s,A.e,A.i,0,s,s)
v=r.d
u=B.ap(v,A.w,0.7)
u.toString
u=B.a([v,u],y.O)
v=B.l(10)
return B.az(s,B.p(s,B.x(B.a([o,A.fE,B.E(B.A(B.a([B.E(B.p(s,B.x(B.a([B.d(r.b,s,s,s,s,s,s,A.q1,s,s,s),B.d(r.a,s,s,s,s,s,s,A.o6,s,s,s),B.d(r.c,s,2,A.a2,s,s,s,C.fLU,s,s,s),A.cS,B.az(s,B.p(s,C.fSl,A.f,s,s,new B.o(A.c,s,s,B.l(10),s,s,A.n),s,s,s,s,A.z9,s,s,s),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new D.eS_(t),s,s,s,s,s,s,!1,A.a4)],p),A.E,s,A.mu,A.i,0,A.p),A.f,s,s,new B.o(s,s,s,v,s,new B.a7(A.a5,A.a9,A.x,u,s,s),A.n),s,s,s,s,A.cq,s,s,s),5),A.ae,B.E(B.iA(!0,s,s,A.y,C.fpu,new D.eS0(t),8,A.ag,s,A.ah,!1),6)],p),A.l,s,A.e,A.i,0,s,s),1)],p),A.E,s,A.e,A.i,0,A.p),A.f,C.buw,s,s,s,s,s,s,A.hm,s,s,s),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,q,s,s,s,s,s,s,!1,A.a4)},
ccS(){var x,w,v,u,t=this,s=null,r=t.a.e,q=y.p,p=B.A(B.a([C.c3C,A.rd,C.h87,A.b4,B.d(t.gafF(),s,s,s,s,s,s,A.Fb,s,s,s)],q),A.l,s,A.e,A.i,0,s,s),o=B.a([],q)
for(x=0;x<8;++x){w=t.d===x
v=w?6:0
u=w?C.dz3:A.SX
w=w?1.18:1
o.push(new B.D(A.f6,B.cU(s,new B.zl(t.b1M(x,20,44,12,A.c,44),w,A.b0,A.eH,s,s),s,s,A.b0,new B.o(s,s,s,s,u,s,A.n),A.eH,s,s,s,new B.Q(0,0,0,v),s,s,s,s),s))}return B.az(s,B.p(s,B.x(B.a([p,A.b4,new B.a5(s,68,B.ca(B.A(o,A.dO,s,A.e,A.i,0,s,s),A.t,s,A.y,s,s,s,s,s,A.aM),s),A.ax,B.d(C.ik[t.d].a,s,s,s,s,s,s,A.p8,s,s,s)],q),A.l,s,A.e,A.i,0,A.p),A.f,s,s,C.b93,s,s,s,s,C.amL,s,s,s),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,r,s,s,s,s,s,s,!1,A.a4)},
bHi(){var x,w,v,u,t,s,r=this,q=null,p=r.a.e,o=C.ik[r.d],n=y.p
o=B.E(B.x(B.a([C.fRU,A.b4,B.d(o.b,q,q,q,q,q,q,A.mE,q,q,q),A.ax,B.d(o.a,q,q,q,q,q,q,C.fx0,q,q,q),A.bF,B.d(o.c,q,q,q,q,q,q,C.fMc,q,q,q),A.am,B.az(q,B.p(q,C.hag,A.f,q,q,C.b9z,q,q,q,q,C.bDg,q,q,q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new D.eRW(r),q,q,q,q,q,q,!1,A.a4),A.b4],n),A.E,q,A.e,A.i,0,A.p),4)
x=B.p(q,q,A.f,C.bs8,q,q,q,q,q,A.f3,q,q,q,0.6)
w=B.a([],n)
for(v=0;v<8;++v){u=C.ik[v]
t=r.d===v
s=t?C.up:C.ahs
t=t?12:10.5
w.push(B.az(q,new B.D(A.uL,B.d(u.a,q,q,q,q,q,q,new B.H(!0,s,q,"serif",q,q,t,A.k8,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q),q,q,q),q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new D.eRX(r,v),q,q,q,q,q,q,!1,A.a4))}return B.az(q,B.p(q,B.A(B.a([o,x,B.E(B.cw(w,q,q,q,q,q,A.ah,!1),3)],n),A.l,q,A.e,A.i,0,q,q),A.f,C.byn,q,q,q,q,q,q,A.Hi,q,q,q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,p,q,q,q,q,q,q,!1,A.a4)}}
D.buI.prototype={}
var z=a.updateTypes(["~()","XN(Z,bu<F>,bu<F>)","aB<~>()","~(G)","J3(Z)"])
D.fEC.prototype={
$1(d){var x,w,v,u=this,t=u.a
if(t==null)t=null
else{x=u.b
w=u.d
v=x.a-u.c*A.h.D(w,0,4000)
x=x.b
x=new B.a7(A.a5,A.a9,A.x,t,null,null).aD(0,new B.a4(v,x,v+A.h.D(w,1,4000),x+d))
t=x}return t},
$S:1919}
D.fyv.prototype={
$1(d){return","},
$S:58}
D.ftz.prototype={
$2(d,e){var x,w=this,v=w.a,u=v.c
J.bt(u.save())
x=w.b
u.translate(x.a,x.b)
v.az(0,D.hgB(w.c*3,w.d,-0.12,d).a)
e.$0()
u.restore()},
$S:1920}
D.ftA.prototype={
$0(){var x=this.a
x.op(0,-1,1)
D.fty(x,this.b,this.c,!0)},
$S:0}
D.ftB.prototype={
$0(){return this.a.af(this.b,this.c)},
$S:0}
D.ftC.prototype={
$0(){var x,w,v,u,t=this,s=t.a,r=t.c
D.fty(s,t.b,r,!1)
x=t.d
if(x>0&&x<1){s.mx(0,t.e)
w=-r
x=w*3+x*r*6-r*0.5
w*=2
v=x+r
$.S()
u=B.L()
u.san(new B.a7(A.a5,A.a9,A.x,B.a([A.c.j(0),A.c.j(0.45),A.c.j(0)],y.O),null,null).aD(0,new B.a4(x,0,v,1)))
s.aF(new B.a4(x,w,v,w+r*4),u)}},
$S:0}
D.ftD.prototype={
$0(){return D.fty(this.a,this.b,this.c,!1)},
$S:0}
D.ftE.prototype={
$0(){return this.a.af(this.b,this.c)},
$S:0}
D.ftF.prototype={
$0(){var x=this.a
x.op(0,-1,1)
D.fty(x,this.b,this.c,!0)},
$S:0}
D.fYK.prototype={
$1(d){var x=this,w=x.b
d.bV(0,1/w)
D.hkj(d,new B.av(x.c*w,x.d*w),x.e,x.a.a,x.f,null)},
$S:305}
D.fYL.prototype={
$0(){var x=this,w=x.e
return D.mi(x.a,x.b.b.toUpperCase(),new B.r(x.c,x.d),w*0.036,x.f,x.w,null,w*0.006,x.r,A.u)},
$S:0}
D.fYM.prototype={
$0(){var x=this,w=x.e
return D.mi(x.a,x.b.f,new B.r(x.c,x.d),w,A.c,x.r,null,-w*0.02,x.f,A.u)},
$S:0}
D.fYN.prototype={
$0(){var x=this,w=x.b,v=x.e,u=B.ap(w.e,A.c,0.35)
u.toString
return D.mi(x.a,w.r,new B.r(x.c,x.d),v,A.c,x.r,B.a([A.c,u],y.O),-v*0.02,x.f,A.u)},
$S:0}
D.fYO.prototype={
$0(){var x=this,w=x.e
return D.mi(x.a,x.b.b.toUpperCase(),new B.r(x.c,x.d),w*0.036,x.f,x.w,null,w*0.006,x.r,A.u)},
$S:0}
D.fYP.prototype={
$0(){var x=this,w=x.e
return D.mi(x.a,x.b.b.toUpperCase(),new B.r(x.c,x.d),w*0.036,x.f,x.w,null,w*0.006,x.r,A.u)},
$S:0}
D.c4F.prototype={
$0(){return B.a6(this.a,!1).ek()},
$S:0}
D.fEu.prototype={
$1(d){var x=null,w=B.fE(x,A.cx,x,1,x,B.cS(x,x,x,x,x,x,x,x,x,B.m(x,x,this.b,x,x,x,x,x,x,x,x,d,x,x,A.u,x,x,!0,x,x,x,x,x,x,x,x),this.a),A.a7,A.c1,x,A.dK,A.c2)
w.ep()
return w},
$S:285}
D.fYJ.prototype={
$1(d){var x=this.b,w=B.kN(this.a,x,d)
w.toString
x=B.kN(x,this.c,d)
x.toString
x=B.kN(w,x,d)
x.toString
return x},
$S:1922}
D.fv8.prototype={
$1(d){var x=null,w=D.aj_(this.b),v=A.h.fK(d*2)
return D.a3B(this.a,B.m(x,x,w,x,x,x,x,x,x,x,x,v/2,x,x,A.u,x,x,!0,x,this.d,x,x,x,x,x,x),A.b6,x,1,1/0)},
$S:285}
D.fYW.prototype={
$1(d){var x,w=this,v=w.a
d.bV(0,1/v)
x=w.b
D.fYV(d,new B.av(x.a*v,x.b*v),w.c,w.d,w.e,w.f,w.w,w.r)},
$S:305}
D.fsM.prototype={
$1(d){var x=this,w=null,v=D.aj_(x.b),u=A.h.fK(d*2),t=x.c?A.u:A.O
return D.a3B(x.a,B.m(w,w,v,w,w,w,w,w,w,w,w,u/2,w,w,t,w,w,!0,w,x.d,w,w,w,w,w,w),A.b6,w,1,1/0)},
$S:285}
D.fET.prototype={
$2(d,e){return A.h.D((this.a-d)/e,0,1)},
$S:84}
D.fEP.prototype={
$1(d){return A.dH.az(0,d)},
$S:5}
D.fES.prototype={
$2(d,e){var x=this.b
return new B.r(this.a+d*x,e*x)},
$S:510}
D.fEQ.prototype={
$5(d,e,f,g,h){var x,w,v,u,t,s,r,q=this,p=q.a.$2(h,0.6)
if(p<=0)return
x=q.b
w=x.c
J.bt(w.save())
w.translate(f.a,f.b)
x.bV(0,A.h.D(A.nk.az(0,p),0.01,1.3))
v=q.c
M.hki(x,A.J,g,d,v,q.d>9.5?0.5+0.3*Math.sin(v*3+d):0)
v=new B.r(0,g*1.42)
u=B.bX(v,g*0.62,g*2.5)
t=g*0.31
s=B.by(u,new B.aP(t,t))
$.S()
r=B.L()
r.r=A.c.gp(0)
x.aq(s,r)
x.aq(B.by(u,new B.aP(t,t)),M.ahA(A.bE,g*0.05))
D.iiu(x,"\u2665 "+e,v,g*0.4,A.qf,g*2.2)
w.restore()},
$S:1923}
D.fER.prototype={
$3(d,e,f){var x,w,v,u,t=this.a.$2(f,0.5)
if(t<=0)return
x=A.h.D(A.nk.az(0,t),0.01,1.3)*(1+0.07*Math.sin(this.b*6))
w=this.c
v=e*x
$.S()
u=B.L()
u.r=A.bE.gp(0)
w.O(d,v,u)
u=B.L()
u.b=A.aa
u.c=2
u.r=A.c.gp(0)
w.O(d,v,u)
D.aRl(w,"\u2665",d.aJ(0,new B.r(e*0.5*x,e*0.62*x)),e*1.3*x,A.c,A.b6,0,null)},
$S:472}
D.fEU.prototype={
$2(d,e){var x,w,v=this.a,u=v.a
v=v.c-u
u+=v*0.08
x=this.b
w=x*d
return new B.a4(u,w,u+v*0.84,w+x*e)},
$S:1924}
D.h6i.prototype={
$3(d,e,f){var x=this
return new D.XN(x.d,x.e,x.a,x.c,x.b,null)},
$C:"$3",
$R:3,
$S:z+1}
D.h6j.prototype={
$4(d,e,f,g){var x=y.t
return new B.d2(e,!1,B.ir(A.z,g,null,new B.bi(B.cG(A.ck,e,null),new B.bs(0.85,1,x),x.k("bi<bQ.T>"))),null)},
$C:"$4",
$R:4,
$S:34}
D.eSj.prototype={
$0(){var x=this.a,w=this.b,v=this.c
x.ax=new B.r(w.a/v.a,w.b/v.b)
x.at=x.gBf()
x.BJ()},
$S:0}
D.eSa.prototype={
$0(){var x,w=this.a
w.f=0
w.r=!1
x=this.c
w.ay=A.o.F(A.o.F(this.b,x)+x,x)
w.ch=w.gBf()
w.BJ()},
$S:0}
D.eSi.prototype={
$0(){var x,w=this.a
if(w.gaxo()){x=w.afC()
w.ay=x==null?w.ay:x
w.ch=w.gBf()}else{w.as=w.gBf()
w.x=Math.max(1,w.x)}w.BJ()},
$S:0}
D.eS7.prototype={
$1(d){return new D.J3(C.Sl[this.b],new D.eS6(this.a,d),null)},
$S:z+4}
D.eS6.prototype={
$0(){this.a.a=!0
B.a6(this.b,!1).ek()},
$S:0}
D.eS8.prototype={
$0(){var x,w=this.a
w.e=A.o.F(w.gyf()+1,10)
x=w.gQu().y
x=x==null?null:A.o.ar(x.a,1000)
w.x=x==null?1:x
w.as=w.gBf()},
$S:0}
D.eS5.prototype={
$0(){var x,w=this.a
w.f=-1
w.e=A.o.F(w.gyf()+this.b,10)
if(w.gyf()<0)w.e=w.gyf()+10
x=w.gQu().y
x=x==null?null:A.o.ar(x.a,1000)
w.x=x==null?1:x
w.as=w.gBf()
w.X6()
w.BJ()},
$S:0}
D.eS9.prototype={
$0(){var x=this.a
x.f=this.b
x.r=!1
x.ay=0
x.ch=x.gBf()
x.BJ()},
$S:0}
D.eSp.prototype={
$2(d,e){var x,w,v=null,u=e.d*0.14,t=A.h.D(u*0.62,18,30),s=this.a,r=s.y?s.gb1K():v,q=y.p
r=B.a([B.az(A.bZ,B.c7(s.gQu(),new D.eSm(s),v),A.y,!1,C.hBn,r,v,v,v,new D.eSn(s),v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new D.eSo(s,e),v,v,v,!1,A.a4)],q)
if(s.r)r.push(s.bGn())
if(this.b&&!s.r&&s.afC()!=null){x=A.c.j(0.92)
w=t*0.42
r.push(B.ao(u/2-t/2,B.aG(!1,A.a3,!0,v,B.aM(!1,v,!0,new B.D(new B.Q(w,0,w,0),B.A(B.a([B.X(A.l_,A.av,v,v,v,t*0.55),new B.a5(t*0.18,v,v,v),B.d("Learn more",v,v,v,v,v,v,B.m(v,v,A.av,v,v,v,v,v,v,v,v,t*0.44,v,v,A.H,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],q),A.l,v,A.e,A.N,0,v,v),v),A.o0,!0,v,v,v,v,C.hB5,v,v,v,v,v,v,s.gccI(),v,v,v,v,v,v,v),A.f,x,0,v,v,A.o0,v,v,A.ai),t,v,v,u*0.3,v,v))}return new B.an(A.a0,v,A.b1,A.t,r,v)},
$S:65}
D.eSo.prototype={
$1(d){var x=this.b
return this.a.ccO(d.b,new B.av(B.aS(1/0,x.a,x.b),B.aS(1/0,x.c,x.d)))},
$S:60}
D.eSn.prototype={
$1(d){var x,w,v,u=d.d
if(u==null)u=0
if(Math.abs(u)>120){x=this.a
w=u<0?1:-1
if(x.gaxo()){v=x.afC()
x.ccK((v==null?0:v)+w)}else x.afD(w)}},
$S:36}
D.eSm.prototype={
$2(d,e){var x,w,v,u,t,s=null,r=this.a,q=r.gQu().y,p=q==null?s:A.o.ar(q.a,1000),o=(p==null?0:p)/1000,n=r.x===0&&r.a.f?o:99
q=o-r.at
x=q<1.4?new D.b_G(r.ax,q):s
w=r.gaxo()
v=Math.max(0,o-r.ch)
u=w?A.o.F(r.ay+A.h.bh(v/10),14):s
if(w)t=v
else t=n<3?o:Math.max(0,o-r.gaRF())
return B.b5(s,s,s,new D.by1(r.gyf(),r.f,t,n,x,u,s),A.h4)},
$S:56}
D.eSq.prototype={
$0(){var x=this.a
return x.m(x.gbbC())},
$S:0}
D.eSk.prototype={
$0(){var x=this.a
x.y=this.b
x.z=!1
x.BJ()},
$S:0}
D.eSl.prototype={
$0(){var x=this.a
x.z=!x.z
x.BJ()},
$S:0}
D.eSh.prototype={
$5$color$on(d,e,f,g,h){var x=null,w=h?g.j(0.28):A.c.j(0.08),v=B.l(14),u=B.K(h?g:A.aT,A.r,1)
return B.az(x,B.p(x,B.x(B.a([B.X(d,g,x,x,x,20),A.rg,B.d(e,x,x,x,x,x,x,B.m(x,x,g,x,x,x,x,x,x,x,x,9.5,x,x,A.H,x,x,!0,x,x,x,x,x,x,x,x),x,x,x)],y.p),A.l,x,A.e,A.N,0,A.p),A.f,x,x,new B.o(w,x,u,v,x,x,A.n),x,x,x,A.j9,A.kC,x,x,56),A.y,!1,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,f,x,x,x,x,x,x,!1,A.a4)},
$3(d,e,f){return this.$5$color$on(d,e,f,A.c,!1)},
$4$color(d,e,f,g){return this.$5$color$on(d,e,f,g,!1)},
$S:765}
D.eSc.prototype={
$0(){return this.a.afD(-1)},
$S:0}
D.eSd.prototype={
$0(){return this.a.afD(1)},
$S:0}
D.eSe.prototype={
$0(){return this.a.afD(0)},
$S:0}
D.eSf.prototype={
$0(){var x=this.a
return x.m(new D.eSb(x))},
$S:0}
D.eSb.prototype={
$0(){var x=this.a
x.r=!x.r
x.BJ()},
$S:0}
D.eSg.prototype={
$0(){return this.a.b1I(0)},
$S:0}
D.eS4.prototype={
$0(){var x=this.a
return x.m(new D.eS3(x))},
$S:0}
D.eS3.prototype={
$0(){return this.a.r=!1},
$S:0}
D.fEB.prototype={
$1(d){var x,w,v,u,t=this,s=null,r=t.a,q=t.b,p=t.c,o=t.d
if(r==null){r=A.h.fK(d*2)
o=D.a3B(q,B.m(s,s,D.aj_(t.e),s,s,s,s,s,"Roboto",s,s,r/2,s,s,p,s,1.1,!0,s,o,s,s,s,s,s,s),A.b6,s,1,1/0)
r=o}else{$.S()
x=B.L()
w=t.f
v=t.w
u=w.a-t.r*A.h.D(v,0,4000)
w=w.b
x.san(new B.a7(A.a5,A.a9,A.x,r,s,s).aD(0,new B.a4(u,w,u+A.h.D(v,1,4000),w+d)))
q=B.fE(s,A.cx,s,1,s,B.cS(s,s,s,s,s,s,s,s,s,B.m(s,s,s,s,s,s,s,s,"Roboto",s,s,d,s,s,p,x,1.1,!0,s,o,s,s,s,s,s,s),q),A.a7,A.c1,s,A.dK,A.c2)
r=q}r.ep()
return r},
$S:285}
D.fqk.prototype={
$1(d){var x=new B.aH($.S().r,A.aj,null,null,B.a([],y.v)),w=B.C(d,y.H)
x.E(new B.zk(w,!0))
return x},
$S:1926}
D.eS1.prototype={
$0(){return this.a.d=this.b},
$S:0}
D.eS2.prototype={
$0(){return this.a.b1L(this.b)},
$S:0}
D.eRZ.prototype={
$2(d,e){return A.bn},
$S:38}
D.eRY.prototype={
$2(d,e){var x=null,w=this.a,v=w.d===e?1.1:1
v=B.a([B.uN(w.b1M(e,18,46,6,A.c,80),A.b0,A.h1,v)],y.p)
if(w.d===e)v.push(new B.D(A.uJ,B.d(C.ik[e].a,x,x,x,x,x,x,C.fKh,x,x,x),x))
return B.x(v,A.l,x,A.e,A.N,0,A.p)},
$S:649}
D.eS_.prototype={
$0(){var x=this.a
return x.a.a7_(0,x.d)},
$S:0}
D.eS0.prototype={
$2(d,e){return this.a.azx(e,15,1/0,!0,8,A.c,1/0)},
$S:43}
D.eRW.prototype={
$0(){var x=this.a
return x.a.a7_(0,x.d)},
$S:0}
D.eRX.prototype={
$0(){return this.a.b1L(this.b)},
$S:0};(function aliases(){var x=D.aOZ.prototype
x.bAK=x.t})();(function installTearOffs(){var x=a._instance_0u,w=a._instance_1u
var v
x(v=D.aH3.prototype,"gccI","afE",2)
x(v,"gc99","c9a",0)
x(v,"gb1H","ccG",0)
x(v,"gbbC","BJ",0)
w(v,"gccJ","b1I",3)
x(v,"gccP","ccQ",0)
x(v,"gb1K","ccR",0)})();(function inheritance(){var x=a.mixinHard,w=a.inherit,v=a.inheritMany
w(D.apu,B.l8)
v(B.aF,[D.hX,D.rR,D.b_G,D.wt,D.yn,D.cVx,D.buI])
v(B.ht,[D.fEC,D.fyv,D.fYK,D.fEu,D.fYJ,D.fv8,D.fYW,D.fsM,D.fEP,D.fEQ,D.fER,D.h6i,D.h6j,D.eS7,D.eSo,D.eSn,D.eSh,D.fEB,D.fqk])
v(B.jE,[D.ftz,D.fET,D.fES,D.fEU,D.eSp,D.eSm,D.eRZ,D.eRY,D.eS0])
v(B.iT,[D.ftA,D.ftB,D.ftC,D.ftD,D.ftE,D.ftF,D.fYL,D.fYM,D.fYN,D.fYO,D.fYP,D.c4F,D.eSj,D.eSa,D.eSi,D.eS6,D.eS8,D.eS5,D.eS9,D.eSq,D.eSk,D.eSl,D.eSc,D.eSd,D.eSe,D.eSf,D.eSb,D.eSg,D.eS4,D.eS3,D.eS1,D.eS2,D.eS_,D.eRW,D.eRX])
w(D.J3,B.aw)
v(B.af,[D.XN,D.au4])
v(B.ah,[D.aOZ,D.bnU])
w(D.aH3,D.aOZ)
w(D.by1,B.mt)
x(D.aOZ,B.cf)})()
B.j1(b.typeUniverse,JSON.parse('{"J3":{"aw":[],"v":[]},"XN":{"af":[],"v":[]},"aH3":{"ah":["XN"]},"by1":{"aC":[]},"au4":{"af":[],"v":[]},"bnU":{"ah":["au4"]},"Om":{"af":[],"v":[]}}'))
var y=(function rtii(){var x=B.at
return{V:x("O<ab>"),O:x("O<t>"),X:x("O<hX>"),g:x("O<r>"),v:x("O<fZ>"),s:x("O<n>"),p:x("O<v>"),n:x("O<F>"),w:x("iC"),H:x("r"),Q:x("ds<F>"),t:x("bs<F>"),W:x("bg<n>"),q:x("mf"),S:x("G"),o:x("~")}})();(function constants(){var x=a.makeConstList
C.b4b=new B.d7(0.35,-0.25)
C.ahJ=new B.t(1,0.0196078431372549,0.03137254901960784,0.058823529411764705,A.q)
C.bwl=new B.t(1,0.043137254901960784,0.10196078431372549,0.2,A.q)
C.dpw=x([C.ahJ,C.bwl],y.O)
C.ccg=new B.a7(A.aY,A.b3,A.x,C.dpw,null,null)
C.b91=new B.o(null,null,null,null,null,C.ccg,A.n)
C.btP=new B.t(1,0.42745098039215684,0.47843137254901963,0.5764705882352941,A.q)
C.bhU=new B.t(1,0.16862745098039217,0.1803921568627451,0.26666666666666666,A.q)
C.bj9=new B.t(1,0.4823529411764706,0.29411764705882354,0.41568627450980394,A.q)
C.dCy=x([C.btP,C.bhU,C.bj9],y.O)
C.caw=new B.a7(A.ay,A.aC,A.x,C.dCy,null,null)
C.b93=new B.o(null,null,null,null,null,C.caw,A.n)
C.b4e=new B.d7(0.5,-0.6)
C.bxL=new B.t(1,0.22745098039215686,0.054901960784313725,0.10980392156862745,A.q)
C.dkq=x([C.bxL,A.eo],y.O)
C.eGm=new B.bT(C.b4e,1.3,A.x,null,0,C.dkq,null,null)
C.b9c=new B.o(null,null,null,null,null,C.eGm,A.n)
C.up=new B.t(1,0.8392156862745098,0.7176470588235294,0.4823529411764706,A.q)
C.b7h=new B.ay(C.up,1,A.r,-1)
C.b7u=new B.bH(A.a1,A.a1,C.b7h,A.a1)
C.b9z=new B.o(null,null,C.b7u,null,null,null,A.n)
C.bgQ=new B.t(1,0.027450980392156862,0.03137254901960784,0.047058823529411764,A.q)
C.YT=new B.t(0.9490196078431372,0.06666666666666667,0.07450980392156863,0.09411764705882353,A.q)
C.bhr=new B.t(1,0.16470588235294117,0.16470588235294117,0.17647058823529413,A.q)
C.ah2=new B.t(1,0.6039215686274509,0.4196078431372549,0.07058823529411765,A.q)
C.YV=new B.t(1,0.16862745098039217,0.1843137254901961,0.21176470588235294,A.q)
C.YW=new B.t(1,0.00784313725490196,0.01568627450980392,0.03529411764705882,A.q)
C.ahh=new B.t(1,0.5411764705882353,0.42745098039215684,0.06274509803921569,A.q)
C.ahs=new B.t(1,0.6588235294117647,0.6235294117647059,0.5647058823529412,A.q)
C.MT=new B.t(1,0.24705882352941178,0.5607843137254902,0.30196078431372547,A.q)
C.BU=new B.t(1,0.7215686274509804,0.6980392156862745,0.6549019607843137,A.q)
C.ahV=new B.t(1,0.7215686274509804,0.45098039215686275,0.2,A.q)
C.bl_=new B.t(1,0.47843137254901963,0.3058823529411765,0.0196078431372549,A.q)
C.bmC=new B.t(1,0.01568627450980392,0.0196078431372549,0.0392156862745098,A.q)
C.N9=new B.t(1,1,0.23137254901960785,0.12156862745098039,A.q)
C.aix=new B.t(1,0.00784313725490196,0.011764705882352941,0.0392156862745098,A.q)
C.yv=new B.t(1,0.06666666666666667,0.0784313725490196,0.09411764705882353,A.q)
C.nt=new B.t(1,0.054901960784313725,0.07058823529411765,0.09411764705882353,A.q)
C.br_=new B.t(1,0.5411764705882353,0.41568627450980394,0.06274509803921569,A.q)
C.bs8=new B.t(1,0.2901960784313726,0.26666666666666666,0.23529411764705882,A.q)
C.bsc=new B.t(1,0.0196078431372549,0.18823529411764706,0.12156862745098039,A.q)
C.iM=new B.t(1,0.043137254901960784,0.12156862745098039,0.29411764705882354,A.q)
C.bsE=new B.t(1,0.054901960784313725,0.07058823529411765,0.13333333333333333,A.q)
C.mW=new B.t(1,0.09019607843137255,0.09019607843137255,0.10980392156862745,A.q)
C.bus=new B.t(1,0.1843137254901961,0.43529411764705883,0.23137254901960785,A.q)
C.buw=new B.t(1,0.08627450980392157,0.09411764705882353,0.10980392156862745,A.q)
C.bwe=new B.t(1,0.9058823529411765,0.8235294117647058,0.6509803921568628,A.q)
C.a_X=new B.t(1,1,0.9529411764705882,0.6274509803921569,A.q)
C.alx=new B.t(1,0.9607843137254902,0.7686274509803922,0.6039215686274509,A.q)
C.byn=new B.t(1,0.10196078431372549,0.09019607843137255,0.0784313725490196,A.q)
C.alI=new B.t(1,0.7176470588235294,0.4745098039215686,0.12156862745098039,A.q)
C.bDg=new B.Q(0,0,0,1)
C.amL=new B.Q(10,6,10,8)
C.an0=new B.Q(14,10,10,10)
C.bGQ=new B.Q(18,14,18,0)
C.bHd=new B.Q(18,6,18,0)
C.bSw=new B.a_(62895,"MaterialIcons",!1)
C.PL=new B.a_(62970,"MaterialIcons",!1)
C.arA=new B.a_(983316,"MaterialIcons",!1)
C.oL=new B.a_(983617,"MaterialIcons",!1)
C.bZB=new B.ae(A.Dr,13,A.ab,null,null,null)
C.c_j=new B.ae(A.nN,18,null,null,null,null)
C.c30=new B.ae(A.eL,13,A.ab,null,null,null)
C.bVf=new B.a_(983768,"MaterialIcons",!1)
C.c3C=new B.ae(C.bVf,13,A.c,null,null,null)
C.c9o=new B.a7(A.aY,A.b3,A.x,P.Sv,null,null)
C.d5T=x([A.bL,E.GI,A.bL],y.O)
C.auo=new B.a7(A.a5,A.a9,A.x,C.d5T,null,null)
C.dmA=x([A.bO,A.bj,A.dY],y.O)
C.cas=new B.a7(A.ay,A.aC,A.x,C.dmA,null,null)
C.MZ=new B.t(1,0.11764705882352941,0.30980392156862746,0.6392156862745098,A.q)
C.cRv=x([C.iM,C.MZ,A.at,A.bL],y.O)
C.dti=x([0,0.42,0.8,1],y.n)
C.cay=new B.a7(A.aY,A.b3,A.x,C.cRv,C.dti,null)
C.ak_=new B.t(1,0.16862745098039217,0.18823529411764706,0.23137254901960785,A.q)
C.bxg=new B.t(1,0.788235294117647,0.8196078431372549,0.8627450980392157,A.q)
C.bu0=new B.t(1,0.34901960784313724,0.3764705882352941,0.43137254901960786,A.q)
C.d3z=x([C.ak_,C.bxg,C.bu0,C.ak_],y.O)
C.caA=new B.a7(A.a5,A.a9,A.x,C.d3z,A.DP,null)
C.cEx=x([A.bO,A.d_],y.O)
C.aus=new B.a7(A.a5,A.a9,A.x,C.cEx,null,null)
C.d5w=x([A.yz,A.aH],y.O)
C.cb9=new B.a7(A.a5,A.a9,A.x,C.d5w,null,null)
C.bng=new B.t(1,0.0784313725490196,0.3803921568627451,0.24705882352941178,A.q)
C.btL=new B.t(1,0.043137254901960784,0.2901960784313726,0.18823529411764706,A.q)
C.bgV=new B.t(1,0.03137254901960784,0.2196078431372549,0.13725490196078433,A.q)
C.d8I=x([C.bng,C.btL,C.bgV],y.O)
C.cbN=new B.a7(A.ay,A.aC,A.x,C.d8I,null,null)
C.agV=new B.t(1,0.12156862745098039,0.1411764705882353,0.18823529411764706,A.q)
C.ce_=x(["Add every person","Link mums, dads, kids","Keep it for ever"],y.s)
C.dO4=new D.wt("NGMY Ads","\ud83d\udce2","Every NGMY ad, as a real 3D commercial",A.c4,-1)
C.dNZ=new D.wt("Civic Registry","\ud83e\udeaa","Enroll your family in your community",A.d9,0)
C.dO3=new D.wt("Jobs","\ud83d\udcbc","Find work and get hired",A.at,1)
C.dO9=new D.wt("NGMY Store","\ud83d\udecd\ufe0f","African food and traditions",A.fL,2)
C.dOa=new D.wt("Kiswahili","\ud83d\udde3\ufe0f","Learn Swahili and English",A.bQ,3)
C.dO7=new D.wt("Doc Scanner","\ud83d\udcc4","Scan, save and share",A.cj,4)
C.dO_=new D.wt("Invoices","\ud83e\uddfe","Professional invoices",A.bE,5)
C.dNX=new D.wt("Calendar","\ud83d\udcc5","This month, today lit up",A.aA,-2)
C.ik=x([C.dO4,C.dNZ,C.dO3,C.dO9,C.dOa,C.dO7,C.dO_,C.dNX],B.at("O<wt>"))
C.V8=new B.y(2,3)
C.V9=new B.y(3,4)
C.cxR=x([A.kD,A.zr],B.at("O<a_>"))
C.cBu=x([A.av,A.cy,F.mX],y.O)
C.dsa=x(["A Registry ID card for every member","Birthdays and children remembered","Votes and receipts everyone can see"],y.s)
C.dM5=new D.hX(A.eY,"Registry ID","Active")
C.dLU=new D.hX(A.HN,"Birthdays","On")
C.dMm=new D.hX(A.oF,"Community vote","Open")
C.dEw=x([C.dM5,C.dLU,C.dMm],y.X)
C.TW=new D.apu(1,"card")
C.dMA=new D.rR(null,"NGMY Civic Registry",A.mk,A.dh,A.aH,"Your family.","Counted. Helped.","Enroll your whole family in the community registry.",C.dsa,"Civic Registry",6,"#","Family members enrolled",0,C.dEw,C.TW,"REGISTRY ID","One card for your whole community life.","NGMY Hub tab, then Civic Registry")
C.djQ=x(["Find jobs near you","Book house repairs and workers","Advisors help with applications"],y.s)
C.dMy=new D.hX(A.Qn,"Warehouse helper","Apply")
C.dMf=new D.hX(A.a3L,"House repair","Book")
C.dMl=new D.hX(A.zv,"House worker","Hire")
C.cWv=x([C.dMy,C.dMf,C.dMl],y.X)
C.tD=new D.apu(2,"badge")
C.dMM=new D.rR(A.asj,"NGMY Jobs and Help",A.qX,A.k1,A.aQ,"Need work?","Get hired.","Jobs, house repairs and house workers, all in one Help Center.",C.djQ,"Help Center",24,"#","Jobs near you",0,C.cWv,C.tD,"HIRED","From the search to the first paycheck.","NGMY Hub tab, then Help Center")
C.diD=x(["African food and traditions","Open your own store","Support Congolese and African sellers"],y.s)
C.bUA=new B.a_(983309,"MaterialIcons",!1)
C.dM7=new D.hX(C.bUA,"Fufu flour 2 kg","$12")
C.bTR=new B.a_(63590,"MaterialIcons",!1)
C.dLX=new D.hX(C.bTR,"Congolese coffee","$18")
C.dM6=new D.hX(A.aqO,"Wax print fabric","$15")
C.dqT=x([C.dM7,C.dLX,C.dM6],y.X)
C.dMB=new D.rR(A.Qg,"NGMY Store",A.kf,A.k1,A.cP,"Shop our community.","Sell yours too.","Buy and sell inside NGMY. Approved members can open a store.",C.diD,"NGMY Store",45,"$#.00","Your cart",0,C.dqT,C.tD,"OPEN NOW","Every order supports our community.","NGMY Hub tab, then NGMY Store")
C.ase=new B.a_(983989,"MaterialIcons",!1)
C.dbu=x(["Short daily lessons","A picture for every word","Swahili and English both ways"],y.s)
C.dM0=new D.hX(C.ase,"Jambo","Hello")
C.dM1=new D.hX(A.hD,"Asante","Thank you")
C.dLZ=new D.hX(A.wW,"Familia","Family")
C.dpd=x([C.dM0,C.dM1,C.dLZ],y.X)
C.dME=new D.rR(C.ase,"Kiswahili School",A.oM,A.rF,A.mY,"Habari!","Learn Swahili.","Learn Swahili and English, one short lesson at a time.",C.dbu,"Kiswahili School",12,"# days","Your learning streak",0,C.dpd,C.tD,"KARIBU","Karibu means welcome.","Creator Hub tab, then Kiswahili School")
C.cOv=x(["Sharp scans from your camera","Saved as a PDF","Share it anywhere"],y.s)
C.dMx=new D.hX(A.ti,"Lease.pdf","2 pages")
C.dMp=new D.hX(A.h3,"Receipt.pdf","1 page")
C.dMu=new D.hX(A.mk,"ID copy.pdf","Shared")
C.dg1=x([C.dMx,C.dMp,C.dMu],y.X)
C.dMz=new D.rR(O.I8,"Document Scanner",A.a3y,A.aii,A.h8,"Paper in.","PDF out.","Scan, save and share your papers in seconds.",C.cOv,"Document Scanner",3,"# pages","Scanned today",0,C.dg1,C.tD,"PDF","Every paper, safe on your phone.","NGMY Hub tab, then Document Scanner")
C.dv0=x(["Your logo and business details","Totals worked out for you","Send it as a PDF"],y.s)
C.dMb=new D.hX(A.Di,"Kitchen repair","$850")
C.dMq=new D.hX(A.I_,"Materials","$320")
C.dLV=new D.hX(A.Dm,"Delivery","$80")
C.cqo=x([C.dMb,C.dMq,C.dLV],y.X)
C.dMH=new D.rR(A.l1,"NGMY Invoices",A.h3,A.jX,A.c4,"Look professional.","Get paid faster.","Make clean invoices and receipts in minutes.",C.dv0,"Invoice 1042",1250,"$#.00","Total due",0,C.cqo,C.tD,"PAID","Paid. Stamped. Done.","Tool Hub tab, then Business Essentials")
C.djZ=x(["Grandparents to grandchildren","A photo on every branch","Share it with the family"],y.s)
C.bTb=new B.a_(63229,"MaterialIcons",!1)
C.dM4=new D.hX(C.bTb,"Grandparents","4")
C.bUi=new B.a_(983134,"MaterialIcons",!1)
C.dM_=new D.hX(C.bUi,"Parents","6")
C.dMd=new D.hX(A.PO,"Children","8")
C.dDr=x([C.dM4,C.dM_,C.dMd],y.X)
C.dMI=new D.rR(F.asn,"NGMY Family Tree",A.PG,A.mR,A.ML,"Every branch.","Every story.","Grow your family tree and write your family book.",C.djZ,"Family Tree",18,"#","Family members",0,C.dDr,C.tD,"FAMILY","Family is everything.","Profile tab, then Worksheets, then Family Tree")
C.ds5=x(["Kept safe on the server","A receipt for every payment","Rewards in one place"],y.s)
C.dMj=new D.hX(A.iW,"Crown reward","+$1.00")
C.dMo=new D.hX(A.kD,"House Care","-$25.00")
C.dMk=new D.hX(A.a43,"Gift received","+$20.00")
C.dAo=x([C.dMj,C.dMo,C.dMk],y.X)
C.a8f=new D.apu(0,"coin")
C.dMC=new D.rR(null,"NGMY Wallet",A.js,A.wi,A.ex,"One balance.","Everywhere.","Your NGMY balance is the same on every phone you use.",C.ds5,"NGMY Wallet",1250.75,"$#","Balance",2,C.dAo,C.a8f,"$","Your money, always in sync.","Your balance shows on Home and all across NGMY")
C.dyp=x(["Quick arcade games","Play offline, counted later","Every win has a receipt"],y.s)
C.dMv=new D.hX(A.nL,"Lucky Dice","Play")
C.dLW=new D.hX(U.PU,"Puzzle Rush","Play")
C.dM2=new D.hX(A.ml,"Top score","2,400")
C.dxf=x([C.dMv,C.dLW,C.dM2],y.X)
C.dMF=new D.rR(null,"NGMY Game Center",A.nO,A.mc,A.ba,"Play.","Win coins.","Arcade games in the Vault Channel, with your own game receipts.",C.dyp,"Vault Arcade",2400,"#","High score",0,C.dxf,C.a8f,"WIN","Game on, any time.","Home tab, then Vault Channel")
C.d_v=x(["Parts that really work","An AI Inventor to help you","See how electricity flows"],y.s)
C.bSv=new B.a_(62894,"MaterialIcons",!1)
C.dMa=new D.hX(C.bSv,"Battery","9 V")
C.dMi=new D.hX(C.oL,"Switch","On")
C.dMn=new D.hX(A.lp,"Bulb","Lit")
C.dBr=x([C.dMa,C.dMi,C.dMn],y.X)
C.dMD=new D.rR(A.lp,"NGMY Electronics Lab",I.v_,A.yz,A.b_,"Build it.","Watch it light up.","Wire real circuits: batteries, switches, bulbs, TVs and more.",C.d_v,"Electronics Lab",9,"# V","Battery",0,C.dBr,C.tD,"IT WORKS","Learn by building.","Home tab, then Core Protocol, then Electronics Lab")
C.ddB=x(["Chat like with a real person","Help with jobs and benefits","Answers in Swahili too"],y.s)
C.dMc=new D.hX(A.Db,"How do I apply?","Answered")
C.dMs=new D.hX(A.ti,"Check my letter","Done")
C.dM9=new D.hX(A.oM,"Jibu kwa Kiswahili","Sawa")
C.dae=x([C.dMc,C.dMs,C.dM9],y.X)
C.dML=new D.rR(A.HW,"NGMY Advisors",A.Dt,A.qf,A.cP,"Questions?","Ask an advisor.","Friendly AI advisors for jobs, applications and everyday life.",C.ddB,"NGMY Advisors",24,"# / 7","Always here",0,C.dae,C.tD,"ASK ME","Help is one message away.","Advisors tab")
C.dBH=x(["Walk through every room","Wire lights and outlets","Learn a trade step by step"],y.s)
C.dMw=new D.hX(F.ar7,"Frame","Done")
C.dMh=new D.hX(I.v_,"Wiring","Done")
C.dLY=new D.hX(I.a40,"Plumbing","Now")
C.dDV=x([C.dMw,C.dMh,C.dLY],y.X)
C.dMG=new D.rR(A.kD,"NGMY Construction Lab",A.qR,A.ia,A.at,"Frame. Wire.","Finish a house.","Real 3D wiring, plumbing and a whole house to build.",C.dBH,"Construction Lab",86,"#%","House finished",0,C.dDV,C.tD,"BUILT","Learn the trade, room by room.","Home tab, then Core Protocol, then Construction Lab")
C.dmx=x(["Record and edit audio","Make videos with titles","QR codes and Doc Share"],y.s)
C.dM3=new D.hX(A.oH,"Recorder Studio","Open")
C.dMr=new D.hX(A.Qa,"Video Studio","Open")
C.dM8=new D.hX(A.ju,"QR Generator","Open")
C.d3f=x([C.dM3,C.dMr,C.dM8],y.X)
C.dMJ=new D.rR(A.he,"NGMY Creator Hub",A.e9,A.j7,A.c4,"Record. Film.","Create.","Recorder, Video Studio, QR codes and more in one place.",C.dmx,"Creator Hub",8,"#","Studios ready for you",0,C.d3f,C.tD,"ACTION","Your ideas, made real.","Creator Hub tab")
C.duB=x(["Many designs to choose from","Your logo and your colours","Share by QR or as a picture"],y.s)
C.dMt=new D.hX(A.lT,"Design","Midnight")
C.bUt=new B.a_(983243,"MaterialIcons",!1)
C.dMe=new D.hX(C.bUt,"QR code","On")
C.dMg=new D.hX(A.Ib,"Shared","12 times")
C.dv1=x([C.dMt,C.dMe,C.dMg],y.X)
C.dMK=new D.rR(null,"NGMY Business Cards",A.a3u,A.cW,A.fK,"First impressions","that last.","Design a card people remember and share it with a QR code.",C.duB,"Business Card",250,"#","Card scans",0,C.dv1,C.TW,"YOUR NAME","Hand it over. Be remembered.","Tool Hub tab, then Business Card Creator")
C.Sl=x([C.dMA,C.dMM,C.dMB,C.dME,C.dMz,C.dMH,C.dMI,C.dMC,C.dMF,C.dMD,C.dML,C.dMG,C.dMJ,C.dMK],B.at("O<rR>"))
C.d6_=x([A.bj,A.bO,A.cy],y.O)
C.blu=new B.t(1,0.5411764705882353,0.3333333333333333,0.13725490196078433,A.q)
C.daP=x([C.ahV,C.alx,C.blu],y.O)
C.f8R=new B.b3(-0.3,0.32,0.2)
C.f6k=new B.b3(-0.08,0.17,0.22)
C.f6l=new B.b3(0.14,0.14,0.2)
C.f85=new B.b3(0.34,0.3,0.2)
C.faz=new B.b3(0,0.32,0.26)
C.f7O=new B.b3(-0.42,0.46,0.15)
C.fau=new B.b3(0.42,0.46,0.15)
C.f97=new B.b3(0,0.07,0.15)
C.aCK=x([C.f8R,C.f6k,C.f6l,C.f85,C.faz,C.f7O,C.fau,C.f97],B.at("O<+(F,F,F)>"))
C.dm0=x([A.c,A.ft,A.aH],y.O)
C.dnz=x([11,9,10,8,0,12,13,2],B.at("O<G>"))
C.en_=new D.yn("NGMY Tree Story","A family grows, one branch at a time")
C.emZ=new D.yn("NGMY Store","Open the doors to something new")
C.en0=new D.yn("NGMY Construction Lab","Build, wire and finish a real house")
C.emU=new D.yn("NGMY Electronics Lab","Build circuits that really light up")
C.emX=new D.yn("NGMY Advisors","Say hi to a friendly advisor")
C.emV=new D.yn("Spark Adventure","Follow Sparky round a circuit board")
C.en1=new D.yn("NGMY Game Center","Play games and win coins")
C.emW=new D.yn("NGMY Business Cards","Make a card people remember")
C.emT=new D.yn("NGMY Civic Registry","Your family, counted and helped")
C.emY=new D.yn("NGMY Creator Hub","Record, film and create")
C.SO=x([C.en_,C.emZ,C.en0,C.emU,C.emX,C.emV,C.en1,C.emW,C.emT,C.emY],B.at("O<yn>"))
C.dpD=x([A.dh,A.cs,A.Go],y.O)
C.dt0=x(["For you","Apps","Library"],y.s)
C.aDM=x([-16,16],y.n)
C.Tb=x([-22,22],y.n)
C.J6=x([-24,24],y.n)
C.a76=x([-5,5],y.n)
C.aDT=x([-8,8],y.n)
C.bbH=new B.ab(0,A.G,A.b5,A.dp,14)
C.dz3=x([C.bbH],y.V)
C.dC5=x(["M","T","W","T","F","S","S"],y.s)
C.aK9=new B.cV([1,7,2,0,3,1,4,2,6,3,7,6,8,4,9,5],B.at("cV<G,G>"))
C.bmT=new B.t(1,0.054901960784313725,0.16470588235294117,0.22745098039215686,A.q)
C.by5=new B.t(1,0.027450980392156862,0.08235294117647059,0.12941176470588237,A.q)
C.deo=x([C.bmT,C.by5,C.YW],y.O)
C.eGc=new B.bT(A.Bu,1.1,A.x,null,0,C.deo,A.vk,null)
C.btw=new B.t(1,0.9607843137254902,0.7725490196078432,0.25882352941176473,A.q)
C.dbP=x([R.Ci,C.btw,C.alI],y.O)
C.eGh=new B.bT(A.M3,0.5,A.x,null,0,C.dbP,A.mq,null)
C.eNX=new B.y(3,E.GI)
C.ePb=new B.y(0.45,0.05)
C.eQ5=new B.y(-0.35,-0.05)
C.eR9=new B.y(2,A.bD)
C.eX0=new B.y(0,A.ia)
C.f_5=new B.y(1,A.w)
C.f_p=new B.y(-1.6,0.9)
C.f0Y=new B.y(1.6,0.9)
C.f37=new B.y(1.6,-0.9)
C.f4K=new B.y(-1.25,-0.62)
C.f5s=new B.y(-1.6,-0.9)
C.fdk=new B.b7([1.25,-0.62,-1,0])
C.fdv=new B.b7([-1.25,-0.62,0,1])
C.fdA=new B.b7([1.25,0.62,0,-1])
C.feX=new B.b7([-1.25,0.62,1,0])
C.c48=new B.ae(A.eL,11,A.ab,null,null,null)
C.fI1=new B.H(!0,A.aR,null,null,null,null,9,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.h53=new B.B("Search",null,C.fI1,null,null,null,null,null,null,null,null,null)
C.cTh=x([C.c48,A.rd,C.h53],y.p)
C.fik=new B.c8(A.aM,A.e,A.i,A.l,null,A.p,null,0,C.cTh,null)
C.fpu=new B.hN(3,5,5,1.35,null)
C.fPZ=new B.B("Buttons hidden. Double-tap to show them again.",null,null,null,null,null,null,null,null,null,null,null)
C.aVD=new B.b0(C.fPZ,null,null,null,null,null,null,null,A.iG,null,null,null,null,A.nC,!1,null,null,null,A.t,null)
C.bwY=new B.t(1,0.9450980392156862,0.9098039215686274,0.8470588235294118,A.q)
C.fx0=new B.H(!0,C.bwY,null,"serif",null,null,15,A.k8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.fF8=new B.H(!0,A.ab,null,null,null,null,9.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.fFK=new B.H(!0,A.aR,null,null,null,null,9.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.aco=new B.H(!0,A.ab,null,null,null,null,12.5,null,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.aXR=new B.H(!0,A.ab,null,null,null,null,10,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.fKh=new B.H(!0,A.c,null,null,null,null,8.5,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.fKH=new B.H(!0,A.c,null,null,null,null,14.5,A.O,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.fLU=new B.H(!0,A.ab,null,null,null,null,8.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.fMc=new B.H(!0,C.ahs,null,null,null,null,8.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.fCn=new B.H(!0,A.aE,null,null,null,null,9.5,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.fOA=new B.B("NGMY Apps",null,C.fCn,null,null,null,null,null,null,null,null,null)
C.fyM=new B.H(!0,C.up,null,null,null,null,8,A.a8,null,3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.fRU=new B.B("BANG & OLUFSEN",null,C.fyM,null,null,null,null,null,null,null,null,null)
C.fEQ=new B.H(!0,A.w,null,null,null,null,9,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.fSl=new B.B("Open",null,C.fEQ,null,null,null,null,null,null,null,null,null)
C.fVC=new B.B("Home",null,C.aXR,null,null,null,null,null,null,null,null,null)
C.fWJ=new B.B("SAMSUNG",null,A.aXu,null,null,null,null,null,null,null,null,null)
C.h1W=new B.B("LG",null,A.xL,null,null,null,null,null,null,null,null,null)
C.fMB=new B.H(!0,A.aE,null,null,null,null,10,A.u,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.h61=new B.B("WHERE TO FIND IT",null,C.fMB,null,null,null,null,null,null,null,null,null)
C.h87=new B.B("tv",null,A.rj,null,null,null,null,null,null,null,null,null)
C.h9q=new B.B("Watch again",null,A.ce,null,null,null,null,null,null,null,null,null)
C.fCh=new B.H(!0,C.up,null,null,null,null,8.5,null,null,2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.hag=new B.B("OPEN",null,C.fCh,null,null,null,null,null,null,null,null,null)
C.hA8=new B.bg("ad-info-ok",y.W)
C.hAD=new B.bg("ad-info-sheet",y.W)
C.hAO=new B.bg("ad-info-find",y.W)
C.hAZ=new B.bg("tv-info",y.W)
C.hB5=new B.bg("tv-learn-more",y.W)
C.hBi=new B.bg("tv-frame",y.W)
C.hBn=new B.bg("tv-picture",y.W)
C.hBo=new B.bg("tv-fullscreen",y.W)
C.hBx=new B.bg("ad-info-replay",y.W)})();(function staticFields(){$.S4=B.T(B.at("aF"),B.at("buI"))
$.hjq=!1
$.ah3=B.T(B.at("aF"),B.at("iF"))})();(function lazyInitializers(){var x=a.lazyFinal
x($,"iEQ","hNk",()=>{var w=B.huU()
w.z=A.h2
w.f=!0
return w})})()};
(a=>{a["GbA7KN14O0+dnmIaF8GwhrSfI3E="]=a.current})($__dart_deferred_initializers__);