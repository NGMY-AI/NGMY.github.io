((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,C,A,U,V,M,W,X,Y,Z,A_,N,O,L,I,P,A0,A1,Q,R,B={bpx:function bpx(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},Rl:function Rl(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},XS:function XS(d){this.a=d},boE:function boE(d,e,f,g,h,i,j,k){var _=this
_.d=d
_.e=e
_.f=f
_.r=g
_.w=$
_.x=h
_.y=0
_.z="glow"
_.Q=0
_.as=12
_.at=i
_.ax=null
_.ay=!1
_.ch=!0
_.CW=0
_.bv$=j
_.aa$=k
_.c=_.a=null},eQu:function eQu(d){this.a=d},eQs:function eQs(d){this.a=d},eQt:function eQt(){},eQ5:function eQ5(){},eQ4:function eQ4(){},eQe:function eQe(d,e){this.a=d
this.b=e},eQg:function eQg(d){this.a=d},eQk:function eQk(d){this.a=d},eQf:function eQf(d){this.a=d},eQl:function eQl(d){this.a=d},eQm:function eQm(d){this.a=d},eQn:function eQn(d,e){this.a=d
this.b=e},eQd:function eQd(d,e){this.a=d
this.b=e},eQo:function eQo(d){this.a=d},eQc:function eQc(d){this.a=d},eQp:function eQp(d,e){this.a=d
this.b=e},eQb:function eQb(d,e){this.a=d
this.b=e},eQq:function eQq(d){this.a=d},eQa:function eQa(d,e){this.a=d
this.b=e},eQr:function eQr(d){this.a=d},eQ9:function eQ9(d){this.a=d},eQh:function eQh(d){this.a=d},eQ8:function eQ8(d){this.a=d},eQi:function eQi(d){this.a=d},eQ7:function eQ7(d){this.a=d},eQj:function eQj(d,e){this.a=d
this.b=e},eQ6:function eQ6(d,e){this.a=d
this.b=e},bwm:function bwm(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.a=h},aPs:function aPs(){},
lW(d,e,f,g,h,i){return new B.bap(h,d,f,g,i,e,null)},
hPL(d,e,f,g){var x=null
return C.ce(x,x,!0,x,new B.hcI(g,e,f),d,x,!0,!0,y.H)},
j6(d,e,f,g,h,i,j){return new B.baq(f,j,i,h,g,d,e,null)},
uQ(d,e,f){return B.iDC(d,e,f)},
iDC(d,e,f){var x=0,w=C.j(y.H),v,u=2,t=[],s,r,q,p,o,n,m
var $async$uQ=C.e(function(g,h){if(g===1){t.push(h)
x=u}for(;;)switch(x){case 0:u=4
o=$.aU.bk$.x.h(0,e)
o=o==null?null:o.gbg()
s=y.W.a(o)
if(s==null){x=1
break}x=7
return C.b(s.lv(2),$async$uQ)
case 7:r=h
x=8
return C.b(r.ho(A.ho),$async$uQ)
case 8:q=h
if(q==null){x=1
break}p=J.eU(A.dL.gaS(q))
x=9
return C.b(C.axY(C.a([C.cJ4(p,"image/png",f+".png")],y.u),null,"Made in NGMY Core Protocol"),$async$uQ)
case 9:u=2
x=6
break
case 4:u=3
m=t.pop()
if(d.e!=null)d.K(y.J).f.T(D.aWq)
x=6
break
case 3:x=2
break
case 6:case 1:return C.h(v,w)
case 2:return C.f(t.at(-1),w)}})
return C.i($async$uQ,w)},
mH(d,e,f,g){var x,w=$.aux
if(w==="music")return E.dE(261.63*Math.pow(2,e/12),d,f,0,g,"sine")
if(w==="space"){w=Math.pow(2,e/12)
x=d==="piano"||d==="bell"||d==="pluck"?"synth":d
return E.dE(261.63*w,x,f,0,g,"sine")}return B.him(w,e,f,g)},
him(d,e,f,g){var x="tri",w="sine",v="noise",u=261.63*Math.pow(2,A.o.D(e,-12,36)/12),t=Math.min(f,260)
switch(d){case"tech":return E.dE(u*2,"",Math.min(t,110),0,g*0.45,"square")
case"sparkle":return E.dE(u*2.5,"",130,-0.35,g*0.6,x)
case"bounce":return E.dE(140+A.o.F(e,12)*9,"",150,0.9,g,w)
case"bubble":return E.dE(260+A.o.F(e,12)*22,"",120,-0.55,g*0.85,w)
case"pop":E.dE(u,"",160,-0.7,g*0.4,x)
return E.dE(900,"",90,0,g*0.45,v)
case"zap":return E.dE(u*3,"",150,1.6,g*0.4,"square")
case"click":return E.dE(2600+A.o.F(e,7)*180,"",30,0,g*0.5,v)
case"whoosh":E.dE(320,"",220,-0.7,g*0.35,w)
return E.dE(1500,"",200,0,g*0.22,v)
case"organic":return E.dE(85+A.o.F(e,12)*5,"",190,1.1,g,w)
case"lab":return E.dE(u*1.6,"",140,-0.3,g*0.55,x)
default:return E.dE(u,"",t,0,g*0.5,x)}},
Y4(d,e,f){var x,w="sine",v="noise"
if(e===1)x=1.25
else x=e===2?0.8:1
switch(d){case"kick":E.dE(95*x,"",200,1.8,f,w)
break
case"snare":E.dE(220*x,"",140,0,f*0.65,v)
break
case"hat":E.dE(5000,"",50,0,f*0.35,v)
break
case"open":E.dE(5200,"",220,0,f*0.35,v)
break
case"clap":E.dE(1100*x,"",100,0,f*0.5,v)
break
case"tom":E.dE(150*x,"",230,1,f,w)
break
case"low":E.dE(100*x,"",260,0.9,f,w)
break
case"rim":E.dE(1700*x,"",60,0,f*0.4,"square")
break
case"cow":E.dE(820*x,"",240,0,f*0.3,"square")
break
case"crash":E.dE(3200,"",650,0,f*0.4,v)
break
case"shake":E.dE(7000,"",90,0,f*0.3,v)
break
default:E.dE(60*x,"",300,0,f,w)}},
bap:function bap(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
cDR:function cDR(d){this.a=d},
cDS:function cDS(d,e){this.a=d
this.b=e},
hcI:function hcI(d,e,f){this.a=d
this.b=e
this.c=f},
hcH:function hcH(d){this.a=d},
e0:function e0(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
cDN:function cDN(d){this.a=d},
fh:function fh(d,e,f){this.c=d
this.d=e
this.a=f},
baq:function baq(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
fI:function fI(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
cDM:function cDM(d){this.a=d},
Gm:function Gm(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
cDT:function cDT(d){this.a=d},
nW:function nW(){},
cDO:function cDO(d,e,f){this.a=d
this.b=e
this.c=f},
cDQ:function cDQ(d){this.a=d},
cDP:function cDP(){},
aj9(b1,b2,b3,b4,b5,b6,b7){var x=0,w=C.j(y.D),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
var $async$aj9=C.e(function(b8,b9){if(b8===1)return C.f(b9,w)
for(;;)switch(x){case 0:a7=new B.fZe(b3)
a8=y.a
a9=C.a([],a8)
u=0
case 3:if(!(u<8)){x=4
break}b0=a9
x=5
return C.b(a7.$1(A.i.bc(u*b4/8)),$async$aj9)
case 5:b0.push(b9);++u
b6.$1(u/8*0.1)
x=3
break
case 4:t=b7*4
s=new Uint8Array(t*b5)
for(r=0;r<b5;r=p){q=r*t
p=r+1
A.aI.ev(s,q,p*t,a9[A.o.F(r,8)],q)}A.d.a6(a9)
q=new C.zX(null,null,null,null,0,A.e2,0,0)
q.bDx(null,A.aI.gaS(s),0,null,A.bZ,0,0,A.e2,b5,null,0,4,A.N2,null,A.bZ,null,null,b7,!1)
o=A_.hwG(q,255,3)
n=new Uint8Array(768)
m=0
for(;;){q=o.a
q===$&&C.d()
if(!(m<q.a&&m<255))break
l=m*3
n[l]=A.o.M(q.ot(m))
n[l+1]=A.o.M(o.a.os(m))
n[l+2]=A.o.M(o.a.or(m));++m}k=B.iyG(b7,b5,b1)
a8=new C.adJ(C.a([],a8))
j=new B.chW(b7,b5,a8)
a8.I(0,new C.dh("GIF89a"))
j.Lo(b7)
j.Lo(b5)
a8.q2(247)
a8.q2(255)
a8.q2(0)
a8.I(0,n)
a8.I(0,D.cDe)
a8.I(0,new C.dh("NETSCAPE2.0"))
a8.I(0,D.d4U)
i=A.i.S(100/b2)
h=new Int16Array(2097152)
A.xJ.fX(h,0,2097152,-1)
q=y.H,l=b7*b5,g=null,f=0
case 6:if(!(f<b4)){x=8
break}x=9
return C.b(a7.$1(f),$async$aj9)
case 9:e=b9
d=new Uint8Array(l)
for(a0=0,a1=0;a0<l;++a0,a1+=4){a2=e[a1]
a3=e[a1+1]
a4=e[a1+2]
a5=(a2>>>1<<14|a3>>>1<<7|a4>>>1)>>>0
m=h[a5]
if(m<0){m=o.aZO(a4,a3,a2)
h[a5]=m}d[a0]=m}for(r=0;r<b5;++r){a6=k[r]
if(a6===0)continue
a2=r*b7
A.aI.fX(d,a2,a2+a6,255)
a2=(r+1)*b7
A.aI.fX(d,a2-a6,a2,255)}if(g==null)j.aIt(0,0,b7,b5,d,i)
else j.cP9(g,d,i);++f
b6.$1(0.1+f/b4*0.9)
x=10
return C.b(C.bL(A.bG,null,q),$async$aj9)
case 10:case 7:g=d
x=6
break
case 8:a8.q2(59)
v=a8.a89()
x=1
break
case 1:return C.h(v,w)}})
return C.i($async$aj9,w)},
iyG(d,e,f){var x,w,v,u,t,s=C.c2(e,0,!1,y.r)
if(f<=0)return s
f=Math.min(f,Math.min(d,e)/2)
for(x=f*f,w=e-1,v=0;v<e;++v){u=Math.min(v,w-v)+0.5
if(u>=f)continue
t=f-u
s[v]=A.i.S(f-Math.sqrt(x-t*t))}return s},
aTn(d,e){return B.iyP(d,e)},
iyP(d,e){var x=0,w=C.j(y.w),v,u=2,t=[],s,r,q,p
var $async$aTn=C.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:q=!1
u=4
x=7
return C.b(C.axY(C.a([C.cJ4(d,"image/gif",e+".gif")],y.u),null,"Made in NGMY Core Protocol"),$async$aTn)
case 7:s=g
q=s.b!==A.W9
u=2
x=6
break
case 4:u=3
p=t.pop()
x=6
break
case 3:x=2
break
case 6:x=!q?8:9
break
case 8:x=10
return C.b(B.h0Z(d,e+".gif","image/gif"),$async$aTn)
case 10:q=g
case 9:v=q
x=1
break
case 1:return C.h(v,w)
case 2:return C.f(t.at(-1),w)}})
return C.i($async$aTn,w)},
fZe:function fZe(d){this.a=d},
chW:function chW(d,e,f){this.a=d
this.b=e
this.c=f},
chY:function chY(d,e,f){this.a=d
this.b=e
this.c=f},
chX:function chX(d,e){this.a=d
this.b=e},
hHw(d,e){var x
$.T()
x=C.L()
x.r=d.gp(0)
x.c=e
x.b=A.ac
x.d=A.bF
return x},
uD(d,e,f){var x,w,v,u
if(f==null){x=e.length
if(x===2)x=null
else{w=C.a([],y.n)
for(v=x-1,u=0;u<x;++u)w.push(u/v)
x=w}}else x=f
return C.jP(A.J,new C.r(0,d.b),e,x,A.x,null)},
iiW(d,e,f){return $.iiX.c_(0,d+"|"+A.i.S(e)+"|"+f.m(),new B.fyd(d,f,e))},
iBy(e3,e4,e5,e6){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6,d7=null,d8=e4.a,d9=e4.b,e0=0+d9,e1=new C.a4(0,0,0+d8,e0),e2=new C.e1()
e2.cT(e6*97+5)
x=new B.h3Q(e2)
switch(A.o.F(e6,20)){case 0:$.T()
e0=C.L()
e0.san(B.uD(e4,D.dm0,d7))
e3.aE(e1,e0)
w=new C.r(d8*(0.5+0.2*Math.sin(6.283185307179586*e5)),d9*0.5)
e0=d8*0.5
v=C.L()
v.san(C.ws(w,e0,C.a([D.bzP,A.L],y.O),d7,A.x,d7,d7,0))
e3.O(w,e0,v)
break
case 1:$.T()
e0=C.L()
e0.san(B.uD(e4,D.d9W,d7))
e3.aE(e1,e0)
for(e0=6.283185307179586*e5,u=0;u<70;++u){v=x.$0()
t=x.$0()
s=e2.av(3)
r=x.$0()
q=new C.as(A.T,A.Q,A.W,A.X,A.U)
q.r=A.c.j(0.35+0.65*(0.5+0.5*Math.sin(e0*(1+s)+u))).gp(0)
e3.O(new C.r(v*d8,t*d9),0.6+r*1.4,q)}p=A.i.F(e5*2,1)
e0=d8*(0.1+p*0.7)
v=d9*(0.1+p*0.3)
e3.ah(new C.r(e0,v),new C.r(e0-d8*0.12,v-d9*0.05),B.hHw(A.c.j(1-p),2))
v=d8*0.85
e0=d9*0.2
t=C.L()
t.r=G.Or.gp(0)
e3.O(new C.r(v,e0),d9*0.09,t)
t=C.L()
t.r=D.a0v.gp(0)
e3.O(new C.r(v+d9*0.03,e0-d9*0.01),d9*0.08,t)
break
case 2:e0=$.T()
v=C.L()
v.san(B.uD(e4,D.dc4,d7))
e3.aE(e1,v)
for(u=0;u<40;++u){v=x.$0()
t=x.$0()
s=new C.as(A.T,A.Q,A.W,A.X,A.U)
s.r=A.c.j(0.5).gp(0)
e3.O(new C.r(v*d8,t*d9*0.6),0.7,s)}for(v=d9*0.12,t=d8/24,s=y.v,o=0;o<4;++o){r=C.a([],s)
n=new C.aH(e0.r,A.aj,d7,d7,r)
for(e0=d9*(0.3+0.07*o),q=o*1.3,m=0;m<=d8;m+=t){l=e0+Math.sin(6.283185307179586*(m/d8*1.4+e5)+q)*d9*0.09
if(m===0){k=new C.aZ(m,l)
r.push(k)
j=n.f
if(j!=null)k.aj(j)
n.ac()}else{k=new C.aq(m,l)
r.push(k)
j=n.f
if(j!=null)k.aj(j)
n.ac()}}e0=$.T()
r=new C.as(A.T,A.Q,A.W,A.X,A.U)
r.r=D.d9T[o].j(0.5).gp(0)
r.b=A.ac
r.c=v
r.y=A.apj
e3.af(n,r)}break
case 3:e0=$.T()
v=C.L()
v.san(B.uD(e4,D.dEi,D.dt3))
e3.aE(e1,v)
v=6.283185307179586*e5
i=new C.r(d8*0.5,d9*(0.64+0.01*Math.sin(v)))
t=d9*0.36
s=C.L()
s.san(C.ws(i,t,C.a([D.btT,A.L],y.O),d7,A.x,d7,d7,0))
e3.O(i,t,s)
s=C.L()
s.r=A.ZY.gp(0)
e3.O(i,d9*0.13,s)
for(t=y.v,h=0;h<3;++h,e0=s){s=C.a([],t)
n=new C.aH(e0.r,A.aj,d7,d7,s)
s.push(new C.aZ(0,d9))
n.ac()
for(e0=d9*(0.7+0.07*h),r=3+h,q=h*2,m=0;m<=d8;m+=8){k=new C.aq(m,e0+Math.sin(m/d8*r+q)*d9*0.04)
s.push(k)
j=n.f
if(j!=null)k.aj(j)
n.ac()}e0=new C.aq(d8,d9)
s.push(e0)
s=n.f
if(s!=null)e0.aj(s)
n.ac()
e0=[D.blt,D.bkz,A.GE][h]
s=$.T()
r=new C.as(A.T,A.Q,A.W,A.X,A.U)
r.r=e0.gp(0)
e3.af(n,r)}for(s=[0.18,0.78],r=s.length,q=d9*0.78,k=-d8,j=k*0.005,g=-d9,f=q+g*0.2,g=q+g*0.21,e=d8*0.2,d=d9*0.06,a0=0;a0<r;++a0){a1=d8*s[a0]
a2=a1+j
a3=new C.as(A.T,A.Q,A.W,A.X,A.U)
a3.r=D.alb.gp(0)
a3.c=3
a3.b=A.ac
a3.d=A.bF
e3.ah(new C.r(a1,q),new C.r(a2,f),a3)
a2=C.bY(new C.r(a2,g),d,e)
a3=new C.as(A.T,A.Q,A.W,A.X,A.U)
a3.r=D.alb.gp(0)
e3.c1(a2,a3)}for(s=k*0.05,v*=6,e0=e0.r,u=0;u<4;++u){w=A.i.F(e5+u*0.22,1)
r=s+w*d8*1.1
q=d9*(0.25+0.05*u)+Math.sin(6.283185307179586*w*3)*d9*0.02
k=Math.sin(v+u)
j=C.a([],t)
g=new C.aH(e0,A.aj,d7,d7,j)
k=q+k*d9*0.012
j.push(new C.aZ(r-8,k))
g.ac()
f=q-4
q=new C.ci(r-3,f,r,q)
j.push(q)
e=g.f
if(e!=null)q.aj(e)
g.ac()
r=new C.ci(r+3,f,r+8,k)
j.push(r)
q=g.f
if(q!=null)r.aj(q)
g.ac()
r=new C.as(A.T,A.Q,A.W,A.X,A.U)
r.r=A.GE.gp(0)
r.c=2
r.b=A.ac
r.d=A.bF
e3.af(g,r)}break
case 4:e0=$.T()
v=C.L()
v.san(B.uD(e4,D.dyo,D.dgM))
e3.aE(e1,v)
v=C.L()
v.r=D.bw1.gp(0)
e3.O(new C.r(d8*0.75,d9*0.2),d9*0.1,v)
for(v=y.v,h=0;h<5;++h,e0=t){t=C.a([],v)
n=new C.aH(e0.r,A.aj,d7,d7,t)
t.push(new C.aZ(0,d9))
n.ac()
for(e0=(h&1)===0,s=d9*(0.46+0.1*h),r=1.5+h*0.4,m=0;m<=d8;m+=6){q=e0?1:-1
q=new C.aq(m,s+Math.sin(6.283185307179586*(m/d8*r+e5*q))*d9*0.025)
t.push(q)
k=n.f
if(k!=null)q.aj(k)
n.ac()}e0=new C.aq(d8,d9)
t.push(e0)
t=n.f
if(t!=null)e0.aj(t)
n.ac()
e0=C.ap(A.cE,A.tc,h/5).j(0.85)
t=$.T()
s=new C.as(A.T,A.Q,A.W,A.X,A.U)
s.r=e0.gp(0)
e3.af(n,s)}break
case 5:$.T()
e0=C.L()
e0.san(B.uD(e4,D.dow,D.dbT))
e3.aE(e1,e0)
a4=d9*0.6
e0=d8/2
v=d9*0.26
t=C.L()
t.san(C.jP(new C.r(0,a4-v),new C.r(0,a4),D.dCB,d7,A.x,d7))
e3.O(new C.r(e0,a4),v,t)
for(v=d8*0.2,t=a4-d9*0.2,s=d9*0.012,r=v+d8*0.6,u=0;u<5;){q=t+u*d9*0.045;++u
k=new C.as(A.T,A.Q,A.W,A.X,A.U)
k.r=D.a0A.gp(0)
e3.aE(new C.a4(v,q,r,q+s*u*0.6),k)}v=C.L()
v.r=D.a0A.gp(0)
e3.aE(new C.a4(0,a4,d8,d9),v)
a5=B.hHw(A.NM.j(0.85),1.4)
for(v=d9-a4,o=0;o<10;++o){a6=(o+e5)/9
if(a6<0.02)continue
l=a4+a6*a6*v
e3.ah(new C.r(0,l),new C.r(d8,l),a5)}for(o=-8;o<=8;++o){v=o*d8
e3.ah(new C.r(e0+v*0.02,a4),new C.r(e0+v*0.2,d9),a5)}break
case 6:$.T()
e0=C.L()
e0.r=D.bvR.gp(0)
e3.aE(e1,e0)
a7=Math.max(12,d8/20)
for(e0=d8/a7,v=e5*12,t=a7*0.9,s=-a7,r=d9+a7*9,q=a7*2,a8=0;a8<e0;++a8){a9=1+A.o.F(a8,3)
b0=A.i.F(e5*a9+x.$0(),1)*r-q
for(k=a8*a7,j=a8*7,g=v*a9,o=0;o<10;++o){l=b0-o*a7
if(l<s||l>d9)continue
b1="01ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[A.o.F(j+o*3+A.i.bc(g),34)]
B.iiW(b1,t,o===0?D.biv:A.bj.j(1-o/9)).a4(e3,new C.r(k,l))}}break
case 7:$.T()
e0=C.L()
e0.san(B.uD(e4,D.dnI,d7))
e3.aE(e1,e0)
for(e0=d9+30,v=e3.c,t=6.283185307179586*e5,u=0;u<60;++u){s=x.$0()
r=A.i.F(e5*(1+e2.av(2))+x.$0(),1)
J.bs(v.save())
v.translate(s*d8+Math.sin(t+u)*8,r*e0-15)
v.rotate((t*(1+A.o.F(u,3))+u)*180/3.141592653589793,0,0)
r=C.bY(A.J,4,8)
s=new C.as(A.T,A.Q,A.W,A.X,A.U)
s.r=D.ddl[A.o.F(u,6)].gp(0)
e3.aE(r,s)
v.restore()}break
case 8:$.T()
e0=C.L()
e0.san(B.uD(e4,A3.aBl,d7))
e3.aE(e1,e0)
for(e0=d9*0.08,b2=0;b2<3;++b2){w=A.i.F(e5+b2/3,1)
b3=d8*(0.22+0.28*b2)
b4=d9*(0.3+0.1*A.o.F(b2,2))
if(w<0.22){v=d9*(1-w/0.22*(1-b4/d9))
$.T()
t=new C.as(A.T,A.Q,A.W,A.X,A.U)
t.r=A.ab.gp(0)
t.c=2
t.b=A.ac
t.d=A.bF
e3.ah(new C.r(b3,v),new C.r(b3,v+e0),t)}else{b5=(w-0.22)/0.78
v=1-b5
b6=1-Math.pow(v,3)
for(t=b5*b5*d9*0.1,s=2.6*v+0.4,u=0;u<28;++u){b7=6.283185307179586*u/28
r=Math.cos(b7)
q=Math.sin(b7)
k=D.daZ[b2].j(v)
$.T()
j=new C.as(A.T,A.Q,A.W,A.X,A.U)
j.r=k.gp(0)
e3.O(new C.r(b3+r*b6*d9*0.34,b4+q*b6*d9*0.34+t),s,j)}}}break
case 9:$.T()
e0=C.L()
e0.san(B.uD(e4,D.d5B,d7))
e3.aE(e1,e0)
for(e0=6.283185307179586*e5,u=0;u<30;++u){o=1+e2.av(2)
b8=x.$0()
v=x.$0()
b9=4+x.$0()*d9*0.05
l=d9-A.i.F(e5*o+b8,1)*(d9+b9*3)+b9
v=v*d8+Math.sin(e0*o+u)*10
w=new C.r(v,l)
t=new C.as(A.T,A.Q,A.W,A.X,A.U)
t.r=A.c.j(0.12).gp(0)
e3.O(w,b9,t)
t=new C.as(A.T,A.Q,A.W,A.X,A.U)
t.r=A.c.j(0.5).gp(0)
t.c=1.2
t.b=A.ac
t.d=A.bF
e3.O(w,b9,t)
t=-b9*0.3
s=new C.as(A.T,A.Q,A.W,A.X,A.U)
s.r=A.c.j(0.7).gp(0)
e3.O(new C.r(v+t,l+t),b9*0.2,s)}break
case 10:$.T()
e0=C.L()
e0.san(B.uD(e4,D.cGk,d7))
e3.aE(e1,e0)
e0=C.L()
e0.r=G.Or.gp(0)
e3.O(new C.r(d8*0.2,d9*0.2),d9*0.08,e0)
for(e0=d9+10,v=6.283185307179586*e5,u=0;u<90;++u){o=1+e2.av(3)
b8=x.$0()
t=x.$0()
s=A.i.F(e5*o+b8,1)
r=Math.sin(v*o+u)
q=x.$0()
k=new C.as(A.T,A.Q,A.W,A.X,A.U)
k.r=A.c.j(0.9).gp(0)
e3.O(new C.r(t*d8+r*12,s*e0-5),1.2+q*2.4,k)}e0=-d8*0.1
v=d9*0.9
t=C.L()
t.r=A.c.gp(0)
e3.c1(new C.a4(e0,v,e0+d8*1.2,v+d9*0.3),t)
break
case 11:$.T()
v=C.L()
v.r=A.ir.gp(0)
e3.aE(e1,v)
c0=d8/12
c1=A.i.F(e5*c0*6,c0*6)
for(u=-6;u<24;++u){m=u*c0+c1
v=new C.as(A.T,A.Q,A.W,A.X,A.U)
v.r=D.cO1[A.o.F(A.o.F(u,6)+6,6)].gp(0)
e3.aE(new C.a4(m,0,m+c0,e0),v)}for(e0=c0*0.3,v=c0/2,t=y.v,l=0;l<d9;l+=c0)for(s=l/c0,b4=l+v,r=b4-e0,q=b4+e0,u=-6;u<24;++u)if(A.o.F(u+A.i.bc(s),3)===0){b3=u*c0+c1+v
k=$.T()
j=C.a([],t)
k=new C.aH(k.r,A.aj,d7,d7,j)
j.push(new C.aZ(b3,r))
k.ac()
g=new C.aq(b3+e0,b4)
j.push(g)
f=k.f
if(f!=null)g.aj(f)
k.ac()
g=new C.aq(b3,q)
j.push(g)
f=k.f
if(f!=null)g.aj(f)
k.ac()
g=new C.aq(b3-e0,b4)
j.push(g)
f=k.f
if(f!=null)g.aj(f)
k.ac()
g=new C.bA()
j.push(g)
j=k.f
if(j!=null)g.aj(j)
k.ac()
j=new C.as(A.T,A.Q,A.W,A.X,A.U)
j.r=A.c.j(0.75).gp(0)
e3.af(k,j)}$.T()
e0=C.L()
e0.san(C.ws(e1.gbD(),d8*0.7,C.a([A.L,A.v.j(0.55)],y.O),C.a([0.4,1],y.n),A.x,d7,d7,0))
e3.aE(e1,e0)
break
case 12:$.T()
e0=C.L()
e0.san(B.uD(e4,D.d5U,d7))
e3.aE(e1,e0)
for(e0=6.283185307179586*e5,v=e0*2,u=0;u<18;++u){w=new C.r(x.$0()*d8+Math.sin(e0+u)*18,x.$0()*d9+Math.cos(e0+u*1.7)*14)
b9=d9*(0.05+x.$0()*0.1)*(1+0.15*Math.sin(v+u))
t=new C.as(A.T,A.Q,A.W,A.X,A.U)
s=A.o.F(u,5)
t.r=D.aC4[s].j(0.28).gp(0)
t.y=A.HW
e3.O(w,b9,t)
t=new C.as(A.T,A.Q,A.W,A.X,A.U)
t.r=D.aC4[s].j(0.35).gp(0)
t.c=1.2
t.b=A.ac
t.d=A.bF
e3.O(w,b9*0.9,t)}break
case 13:$.T()
e0=C.L()
e0.san(B.uD(e4,D.diQ,d7))
e3.aE(e1,e0)
c2=Math.max(0,1-Math.abs(e5-0.3)*14)
if(c2>0){e0=A.c.j(0.35*c2)
v=C.L()
v.r=e0.gp(0)
e3.aE(e1,v)}for(e0=d9+40,u=0;u<70;++u){m=x.$0()*d8
l=A.i.F(e5*(2+e2.av(2))+x.$0(),1)*e0-20
v=new C.as(A.T,A.Q,A.W,A.X,A.U)
v.r=A.dE.j(0.6).gp(0)
v.c=1.3
v.b=A.ac
v.d=A.bF
e3.ah(new C.r(m,l),new C.r(m-6,l+18),v)}for(u=0;u<10;++u){e0=C.bY(new C.r(x.$0()*d8,A.i.F(e5+x.$0(),1)*d9),11,7)
v=new C.as(A.T,A.Q,A.W,A.X,A.U)
v.r=A.c.j(0.18).gp(0)
e3.c1(e0,v)}break
case 14:e0=$.T()
v=C.L()
v.san(B.uD(e4,D.dc2,d7))
e3.aE(e1,v)
for(v=d8*0.035,t=y.v,s=d8*0.02,r=d8*0.08,q=d8*0.07,k=6.283185307179586*e5,j=k*3,g=k*2,e0=e0.r,u=0;u<7;++u){c3=d8*(u+0.5)/7
c4=d9*(0.28+0.1*Math.sin(g+u*2.1)+0.06*A.o.F(u,3))
f=C.a([],t)
w=new C.aH(e0,A.aj,d7,d7,f)
f.push(new C.aZ(c3-q,d9))
w.ac()
e=new C.i6(c3-r,d9-c4*0.5,c3+Math.sin(j+u)*6,d9-c4*0.8,c3,d9-c4)
f.push(e)
d=w.f
if(d!=null)e.aj(d)
w.ac()
e=new C.i6(c3+s,d9-c4*0.6,c3+r,d9-c4*0.4,c3+q,d9)
f.push(e)
d=w.f
if(d!=null)e.aj(d)
w.ac()
e=new C.bA()
f.push(e)
f=w.f
if(f!=null)e.aj(f)
w.ac()
f=new C.as(A.T,A.Q,A.W,A.X,A.U)
f.r=A.fL.j(0.85).gp(0)
e3.af(w,f)
f=C.a([],t)
e=new C.aH(e0,A.aj,d7,d7,f)
f.push(new C.aZ(c3-v,d9))
e.ac()
d=new C.ci(c3,d9-c4*0.9,c3+v,d9)
f.push(d)
a1=e.f
if(a1!=null)d.aj(a1)
e.ac()
d=new C.bA()
f.push(d)
f=e.f
if(f!=null)d.aj(f)
e.ac()
f=new C.as(A.T,A.Q,A.W,A.X,A.U)
f.r=A.eF.j(0.9).gp(0)
e3.af(e,f)}for(u=0;u<40;++u){o=1+e2.av(2)
b8=x.$0()
e0=x.$0()
v=A.i.F(e5*o+b8,1)
t=Math.sin(k*o+u)
s=new C.as(A.T,A.Q,A.W,A.X,A.U)
s.r=G.alx.j(0.9).gp(0)
e3.O(new C.r(e0*d8+t*10,d9-v*d9*0.9),1.5,s)}break
case 15:e0=$.T()
v=C.L()
v.san(B.uD(e4,D.cAi,d7))
e3.aE(e1,v)
v=C.L()
v.r=A.i9.gp(0)
e3.O(new C.r(d8*0.7,d9*0.28),d9*0.12,v)
for(v=d8+20,t=d8/12,s=6.283185307179586*e5,r=y.v,h=0;h<5;e0=q,h=c5){q=C.a([],r)
n=new C.aH(e0.r,A.aj,d7,d7,q)
q.push(new C.aZ(0,d9))
n.ac()
c5=h+1
b8=Math.sin(s+h)*d8*0.02*c5
for(e0=d9*(0.45+0.1*h),k=4+h,j=h*1.7,m=-20;m<=v;m+=t){g=new C.aq(m,e0-Math.abs(Math.sin((m+b8)/d8*k+j))*d9*0.18)
q.push(g)
f=n.f
if(f!=null)g.aj(f)
n.ac()}e0=new C.aq(v,d9)
q.push(e0)
q=n.f
if(q!=null)e0.aj(q)
n.ac()
e0=D.dcq[h]
q=$.T()
k=new C.as(A.T,A.Q,A.W,A.X,A.U)
k.r=e0.gp(0)
e3.af(n,k)}break
case 16:v=$.T()
t=C.L()
t.san(B.uD(e4,D.dor,d7))
e3.aE(e1,t)
c6=Math.sin(6.283185307179586*e5)*0.18
t=e3.c
J.bs(t.save())
s=d8/2
t.translate(s,0)
e3.jr(0,c6)
v=new C.aH(v.r,A.aj,d7,d7,C.a([],y.v))
r=-d8
v.E(new C.aZ(r*0.03,0))
q=d8*0.03
v.E(new C.aq(q,0))
v.E(new C.aq(d8*0.34,d9))
v.E(new C.aq(r*0.34,d9))
v.E(new C.bA())
r=C.L()
k=y.O
r.san(C.jP(A.J,new C.r(0,d9),C.a([A.c.j(0.5),A.c.j(0.04)],k),d7,A.x,d7))
e3.af(v,r)
t.restore()
s=C.bY(new C.r(s+Math.sin(c6)*d9,d9*0.95),d9*0.14,d8*0.6)
t=A.c.j(0.22)
r=C.L()
r.r=t.gp(0)
e3.c1(s,r)
for(v=[-1,1],t=v.length,s=d8*0.18,r=0+d9*0.06,c7=d8*0.82,a0=0;a0<t;++a0){j=v[a0]<0
c8=j?0:c7
for(u=0;u<6;++u){g=c8+u*d8*0.03
f=new C.as(A.T,A.Q,A.W,A.X,A.U)
e=C.a([A.ey,A.et,A.ey],k)
f.san(new C.a6m(new C.r(0,0),new C.r(q,0),e,A.m5,A.x,d7))
e3.aE(new C.a4(g,0,g+q,e0),f)}j=j?0:c7
g=new C.as(A.T,A.Q,A.W,A.X,A.U)
g.r=A.kH.gp(0)
e3.aE(new C.a4(j,0,j+s,r),g)}break
case 17:e0=$.T()
v=C.L()
v.san(C.ws(e1.gbD(),d8*0.7,D.ddT,A.m5,A.x,d7,d7,0))
e3.aE(e1,v)
v=e3.c
J.bs(v.save())
v.translate(d8/2,d9/2)
e3.jr(0,e5*6.283185307179586/8)
for(t=y.v,e0=e0.r,u=0;u<16;u+=2){c9=6.283185307179586*u/16
d0=6.283185307179586*(u+1)/16
s=C.a([],t)
r=new C.aH(e0,A.aj,d7,d7,s)
s.push(new C.aZ(0,0))
r.ac()
q=new C.aq(Math.cos(c9)*d8,Math.sin(c9)*d8)
s.push(q)
k=r.f
if(k!=null)q.aj(k)
r.ac()
q=new C.aq(Math.cos(d0)*d8,Math.sin(d0)*d8)
s.push(q)
k=r.f
if(k!=null)q.aj(k)
r.ac()
q=new C.bA()
s.push(q)
s=r.f
if(s!=null)q.aj(s)
r.ac()
s=new C.as(A.T,A.Q,A.W,A.X,A.U)
s.r=A.c.j(0.22).gp(0)
e3.af(r,s)}v.restore()
break
case 18:$.T()
e0=C.L()
e0.san(B.uD(e4,D.dw8,d7))
e3.aE(e1,e0)
for(e0=6.283185307179586*e5,v=e0*2,u=0;u<7;++u){t=x.$0()
s=Math.sin(e0+u*1.1)
r=x.$0()
q=Math.sin(v+u)
k=new C.as(A.T,A.Q,A.W,A.X,A.U)
k.r=D.dvo[A.o.F(u,4)].j(0.7).gp(0)
k.y=A.Dg
e3.O(new C.r(d8*(0.1+0.8*t)+q*10,d9*(0.5+0.38*s)),d9*(0.1+0.08*r),k)}break
case 19:$.T()
e0=C.L()
e0.san(B.uD(e4,D.dkh,D.aDS))
e3.aE(e1,e0)
for(u=0;u<40;++u){e0=x.$0()
v=x.$0()
t=new C.as(A.T,A.Q,A.W,A.X,A.U)
t.r=A.c.j(0.6).gp(0)
e3.O(new C.r(e0*d8,v*d9*0.45),0.7,t)}e0=C.L()
e0.r=G.Or.gp(0)
e3.O(new C.r(d8*0.8,d9*0.2),d9*0.07,e0)
m=-d8*0.02
for(e0=d9-8,v=e5*6,d1=0;m<d8;){d2=d8*(0.07+x.$0()*0.07)
d3=d9*(0.25+x.$0()*0.4)
t=d9-d3
s=m+d2
$.T()
r=new C.as(A.T,A.Q,A.W,A.X,A.U)
r.r=D.bng.gp(0)
e3.aE(new C.a4(m,t,s,t+d3),r)
for(d4=t+6,d5=m+4,t=s-6,s=d1*31;d4<e0;d4+=11)for(r=d4*7,q=d4+6,d6=d5;d6<t;d6+=9)if(A.o.F(s+A.i.S(r)+A.i.S(d6*3)+A.i.bc(v),5)!==0){k=D.bqD.j(0.85)
$.T()
j=new C.as(A.T,A.Q,A.W,A.X,A.U)
j.r=k.gp(0)
e3.aE(new C.a4(d6,d4,d6+4,q),j)}m+=d2+2;++d1}break}},
ig6(d){if(d<0.36363636363636365)return 7.5625*d*d
if(d<0.7272727272727273){d-=0.5454545454545454
return 7.5625*d*d+0.75}if(d<0.9090909090909091){d-=0.8181818181818182
return 7.5625*d*d+0.9375}d-=0.9545454545454546
return 7.5625*d*d+0.984375},
iqo(d,e,f,g,h,i,j){var x,w,v,u,t,s,r,q,p=new B.fte(),o=f<=1,n=o?0:e/(f-1),m=o?0:e/(f-1)
o=g/0.5
x=A.i.D((o-m*0.45)/0.55,0,1)
w=g<0.86?1:A.i.D((1-g)/0.14,0,1)
v=new C.e1()
v.cT(e*53+11)
switch(d){case"type":p.f=A.i.bc(g/0.55*f)>e?w:0
break
case"bounce":p.b=-Math.abs(Math.sin(A.i.F(g*2-n*0.5,1)*3.141592653589793))*h*0.5
break
case"wave":p.b=Math.sin(6.283185307179586*g-n*3)*h*0.28
break
case"neon":p.x=p.f=Math.sin(6.283185307179586*g*13+e*7)>0.92?0.25:1
break
case"glitch":u=A.o.F(A.i.bc(g*12),6)===0
p.a=u?Math.sin(e*12.9898+g*100)*h*0.14:0
if(u)p.w=(e&1)===0?A.bd:A.c3
break
case"zoom":p.c=p.d=A.nA.aA(0,x)
p.f=x*w
break
case"rainbow":p.w=new H.pA(1,A.i.F(g*360+e*40,360),0.75,1).jd()
break
case"drop":p.b=-(1-B.ig6(x))*h*4
p.f=A.i.D(x*6,0,1)*w
break
case"fly":p.a=-(1-A.ej.aA(0,x))*i*0.8
p.f=A.i.D(x*4,0,1)*w
break
case"spin":p.e=(1-x)*6.283185307179586
p.c=p.d=x
p.f=w
break
case"flip":p.c=Math.cos(3.141592653589793*(1-A.ea.aA(0,x)))
p.f=A.i.D(x*5,0,1)*w
break
case"jelly":t=Math.sin(6.283185307179586*g*2+e)*0.25
p.c=1+t
p.d=1-t
break
case"shake":o=6.283185307179586*g
p.a=Math.sin(o*30+e*3)*h*0.05
p.b=Math.cos(o*27+e*5)*h*0.05
break
case"float":o=6.283185307179586*g
p.b=Math.sin(o+e*0.8)*h*0.15
p.e=Math.sin(o+e)*0.05
break
case"pulse":p.c=p.d=1+0.18*Math.pow(Math.max(0,Math.sin(6.283185307179586*g*2)),3)
break
case"swing":p.r=-h*0.5
p.e=Math.sin(6.283185307179586*g+n*2)*0.35
break
case"reveal":p.f=A.i.D((A.i.D(o,0,1)-n)*6,0,1)*w
break
case"blur":p.c=p.d=2.4-1.4*A.ea.aA(0,x)
p.f=x*w
break
case"domino":p.e=Math.sin(A.i.D(g*1.6-n*0.6,0,1)*3.141592653589793)*0.9
p.r=h*0.5
break
case"spiral":o=1-x
s=o*3.141592653589793*3
r=o*h*3
p.a=Math.cos(s)*r
p.b=Math.sin(s)*r
p.f=x*w
break
case"cascade":q=Math.pow(Math.sin(3.141592653589793*A.i.F(g*2-n,1)),4)
p.w=C.ap(j,A.c,q)
p.x=q
break
case"wobble":o=6.283185307179586*g*2
p.e=Math.sin(o+e)*0.15
p.c=1+0.05*Math.sin(o+e*2)
break
case"rise":p.b=(1-A.cm.aA(0,x))*h*2
p.f=x*w
break
case"scatter":o=1-A.dQ.aA(0,x)
p.a=o*(v.ai()-0.5)*i
p.b=o*(v.ai()-0.5)*h*6
p.e=o*(v.ai()-0.5)*6
p.f=w
break}return p},
DQ(d,e,f,g){var x=null,w=C.h2(x,A.cK,x,x,x,C.d4(x,x,x,x,x,x,x,x,x,C.l(x,x,g==null?f:x,x,x,x,x,x,x,x,x,e,x,x,A.u,g,1,!0,x,x,x,x,x,x,x,x),d),A.a7,A.cf,x,A.e5,A.cg)
w.eY()
return w},
im1(d,e,f,g,h,i,a0){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=A.i.D(i,0,1)
if(j<=0.01)return
x=B.DQ(e,f,k,k)
w=x.b
v=-w.c/2
w=w.a.c
w=-w.gb8(w)/2
u=new C.r(v,w)
t=x.b
s=t.c
t=t.a.c
r=new C.a4(v,w,v+s,w+t.gb8(t))
q=new B.fEC(j)
p=new B.fED(e,f,d,u)
switch(g){case"outline":p.$2(q.$1(h),f*0.07)
break
case"three":t=C.ap(h,A.v,0.55)
t.toString
for(o=9;o>=1;--o){s=C.ap(h,t,o/9)
s.toString
n=o*f
B.DQ(e,f,q.$1(s),k).a4(d,new C.r(v+n*0.012,w+n*0.014))}B.DQ(e,f,q.$1(h),k).a4(d,u)
break
case"neon":p.$3$blur(q.$2(h,0.9*(0.6+0.4*a0)),f*0.16,new C.h1(A.H,f*0.2))
p.$2(q.$2(h,0.9),f*0.07)
p.$2(q.$2(A.c,0.95),f*0.025)
break
case"gradient":$.T()
m=C.L()
w=r.gaLZ()
v=r.gaGc()
t=C.ap(h,A.c,0.45)
t.toString
t=q.$1(t)
s=q.$1(h)
n=C.ap(h,A.aC,0.6)
n.toString
m.san(C.jP(w,v,C.a([t,s,q.$1(n)],y.O),A.m5,A.x,k))
B.DQ(e,f,k,m).a4(d,u)
break
case"sticker":B.DQ(e,f,q.$2(A.v,0.3),k).a4(d,u.a7(0,new C.r(f*0.04,f*0.06)))
p.$2(q.$1(A.c),f*0.2)
p.$4$blur$shift(q.$1(A.aw),f*0.24,k,A.J)
p.$2(q.$1(A.c),f*0.17)
B.DQ(e,f,q.$1(h),k).a4(d,u)
break
case"retro":t=H.a6K(h)
l=new H.pA(t.a,A.i.F(H.a6K(h).b+150,360),t.c,t.d).jd()
for(o=5;o>=1;--o){t=o*f*0.014
B.DQ(e,f,q.$1(l),k).a4(d,new C.r(v+t,w+t))}p.$2(q.$1(A.aw),f*0.05)
B.DQ(e,f,q.$1(h),k).a4(d,u)
break
case"gold":$.T()
m=C.L()
m.san(C.jP(r.gaLZ(),r.gaGc(),C.a([q.$1(A4.CG),q.$1(A.cY),q.$1(A.dd),q.$1(A.wB),q.$1(A.ip)],y.O),D.dHy,A.x,k))
p.$2(q.$1(A.ti),f*0.06)
B.DQ(e,f,k,m).a4(d,u)
break
default:B.DQ(e,f,q.$1(h),k).a4(d,u)}},
hP1(a5,a6,a7,a8,a9,b0,b1,b2,b3){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=null,a4=a5.c
J.bs(a4.save())
x=a6.a
w=a6.b
a4.clipRect(C.hQ(new C.a4(0,0,0+x,0+w)),$.lD()[1],!0)
B.iBy(a5,a6,a7,a8)
v=x<w?0.9:1
u=b0*x/360*v
v=A.a.i(b3)
if(v.length===0)t=C.a(["\u2026"],y.s)
else{v=new C.mI(v)
t=C.B(v,C.a3(v).k("M.E"))}v=C.a([],y.n)
for(s=t.length,r=0;r<t.length;t.length===s||(0,C.I)(t),++r){q=t[r]
p=q===" "
o=B.DQ(p?"n":q,u,a3,a3).b.c
v.push(o*(p?0.7:1))}n=x*0.86
s=y.t
m=C.a([C.a([],s)],y.x)
for(p=y.r,l=0,k=0,j=0;j<t.length;++j){if(t[j]===" "){A.d.gal(m).push(j)
l+=v[j]
k=A.d.gal(m).length
continue}if(l+v[j]>n&&A.d.gal(m).length!==0){i=k>0&&k<A.d.gal(m).length?A.d.fE(A.d.gal(m),k):C.a([],s)
if(i.length!==0){o=A.d.gal(m)
h=A.d.gal(m).length
o.$flags&1&&C.ak(o,18)
C.kt(k,h,o.length,a3,a3)
o.splice(k,h-k)}o=C.B(i,p)
m.push(o)
l=A.d.cE(i,0,new B.h3R(v))
k=0}A.d.gal(m).push(j)
l+=v[j]}g=u*1.15
f=w/2-m.length*g/2+g/2
for(w=x/2,e=0;e<m.length;++e){d=m[e]
a0=w-A.d.cE(d,0,new B.h3S(v))/2
for(s=d.length,p=f+e*g,r=0;r<d.length;d.length===s||(0,C.I)(d),++r,a0=a1){j=d[r]
o=v[j]
a1=a0+o
if(t[j]===" ")continue
a2=B.iqo(b1,j,t.length,a7,u,x,a9)
J.bs(a4.save())
a4.translate(a0+o/2+a2.a,p+a2.b)
o=a2.r
if(o!==0)a4.translate(0,o)
a4.rotate(a2.e*180/3.141592653589793,0,0)
o=a2.r
if(o!==0)a4.translate(0,-o)
o=a2.c
if(o===0)o=0.001
h=a2.d
if(h===0)h=0.001
a4.scale(o,h)
o=t[j]
h=a2.w
if(h==null)h=a9
B.im1(a5,o,u,b2,h,a2.f,a2.x)
a4.restore()}}a4.restore()},
hq3(d,e,f,g,h,i,j,k,l,m){var x=0,w=C.j(y.D),v,u,t,s,r
var $async$hq3=C.e(function(n,o){if(n===1)return C.f(o,w)
for(;;)switch(x){case 0:u=d>=1
t=A.i.S(u?i:i*d)
s=A.i.S(u?i/d:i)
r=A.i.S(3.2*h)
v=B.aj9(Math.max(t,s)*22/360,h,new B.h2x(t,s,r,m,j,l,e,f,g),r,s,k,t)
x=1
break
case 1:return C.h(v,w)}})
return C.i($async$hq3,w)},
fyd:function fyd(d,e,f){this.a=d
this.b=e
this.c=f},
h3Q:function h3Q(d){this.a=d},
fte:function fte(){var _=this
_.b=_.a=0
_.d=_.c=1
_.e=0
_.f=1
_.r=0
_.w=null
_.x=0},
fEC:function fEC(d){this.a=d},
fED:function fED(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bbj:function bbj(d,e,f,g,h,i,j,k){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.w=j
_.a=k},
h3R:function h3R(d){this.a=d},
h3S:function h3S(d){this.a=d},
h2x:function h2x(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
Y3:function Y3(d){this.a=d},
auw:function auw(d,e,f){var _=this
_.d=$
_.e=d
_.f="bounce"
_.r="solid"
_.w=3
_.x=56
_.z=_.y=0
_.Q=!0
_.as=0
_.at=-1
_.ax=""
_.bv$=e
_.aa$=f
_.c=_.a=null},
cp6:function cp6(d,e){this.a=d
this.b=e},
cp1:function cp1(d){this.a=d},
cp2:function cp2(d){this.a=d},
cp0:function cp0(d,e){this.a=d
this.b=e},
cp3:function cp3(d,e){this.a=d
this.b=e},
cp4:function cp4(d){this.a=d},
cp5:function cp5(d){this.a=d},
coR:function coR(d){this.a=d},
coS:function coS(d){this.a=d},
coQ:function coQ(){},
coT:function coT(d,e){this.a=d
this.b=e},
coU:function coU(d,e){this.a=d
this.b=e},
coP:function coP(d,e){this.a=d
this.b=e},
coV:function coV(d,e){this.a=d
this.b=e},
coO:function coO(d,e){this.a=d
this.b=e},
coW:function coW(d,e){this.a=d
this.b=e},
coN:function coN(d,e){this.a=d
this.b=e},
coX:function coX(d,e){this.a=d
this.b=e},
coM:function coM(d,e){this.a=d
this.b=e},
coY:function coY(d){this.a=d},
coL:function coL(d){this.a=d},
coZ:function coZ(d){this.a=d},
cp_:function cp_(d){this.a=d},
coK:function coK(d,e){this.a=d
this.b=e},
aHB:function aHB(){},
bbu(){var x=0,w=C.j(y.U),v,u=2,t=[],s,r,q
var $async$bbu=C.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
s=$.hjP
x=7
return C.b(s==null?$.hjP=B.cGp():s,$async$bbu)
case 7:s=e
v=s
x=1
break
u=2
x=6
break
case 4:u=3
q=t.pop()
$.hjP=null
throw q
x=6
break
case 3:x=2
break
case 6:case 1:return C.h(v,w)
case 2:return C.f(t.at(-1),w)}})
return C.i($async$bbu,w)},
cGp(){var x=0,w=C.j(y.U),v,u
var $async$cGp=C.e(function(d,e){if(d===1)return C.f(e,w)
for(;;)switch(x){case 0:u=B
x=3
return C.b($.oK().CZ("assets/data/world110.json",!1),$async$cGp)
case 3:v=u.ibp(e)
x=1
break
case 1:return C.h(v,w)}})
return C.i($async$cGp,w)},
ibp(a1){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=y.j,d=e.a(A.V.aP(0,a1,null)),a0=C.a([],y.h)
for(x=J.aR(d),w=y.n,v=y.b,u=y.d,t=y.f;x.C();){s=u.a(x.gP(x))
r=C.a([],t)
for(q=J.a2(s),p=J.aR(e.a(q.h(s,"r")));p.C();){o=p.gP(p)
n=C.a([],v)
for(m=J.aR(e.a(o));m.C();){l=m.gP(m)
k=J.a2(l)
n.push(C.a([C.dG(k.h(l,0)),C.dG(k.h(l,1))],w))}r.push(n)}p=C.cR(q.h(s,"n"))
n=C.cR(q.h(s,"a"))
m=C.cR(q.h(s,"ct"))
k=C.cR(q.h(s,"sr"))
j=C.dG(q.h(s,"pop"))
i=C.dG(q.h(s,"gdp"))
h=C.cR(q.h(s,"inc"))
g=C.ag("^\\d\\.\\s*",!0,!1,!1,!1)
h=C.aTV(h,g,"",0)
g=C.dG(J.t(q.h(s,"c"),0))
q=C.dG(J.t(q.h(s,"c"),1))
f=new B.acZ(p,n,m,k,j,i,h,g,q,r)
f.bE5(q,g,n,m,i,h,p,j,r,k)
a0.push(f)}return new B.ad_(a0)},
fP9(d){if(d>=1e12)return A.i.a5(d/1e12,1)+" trillion"
if(d>=1e9)return A.i.a5(d/1e9,2)+" billion"
if(d>=1e6)return A.i.a5(d/1e6,1)+" million"
if(d>=1000)return A.i.a5(d/1000,1)+" thousand"
return A.i.a5(d,0)},
HS(d){var x,w,v,u=A.o.v(A.i.S(d))
for(x=u.length,w=0,v="";w<x;++w){if(w>0&&A.o.F(x-w,3)===0)v+=","
v+=u[w]}return v.charCodeAt(0)==0?v:v},
acZ:function acZ(d,e,f,g,h,i,j,k,l,m){var _=this
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
_.ay=_.ax=_.at=_.as=_.Q=_.z=$},
ad_:function ad_(d){this.a=d},
vV:function vV(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
_.z=n},
Qt:function Qt(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
yU:function yU(d,e,f){this.a=d
this.b=e
this.c=f},
Qs:function Qs(d){this.a=0
this.b=d
this.c=0},
idm(d,e,f){return $.idn.c_(0,d+"|"+C.v(e)+"|"+f.m(),new B.dqe(d,e,f))},
X1:function X1(d){this.a=d},
aGr:function aGr(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
_.d=d
_.e=e
_.f=f
_.r=null
_.w=g
_.x=15
_.y=10
_.z=1
_.as=_.Q=0
_.ay=_.ax=_.at=null
_.db=_.cy=_.cx=_.CW=_.ch=!0
_.dx=!1
_.dy=14
_.fr=172
_.fx=null
_.fy=h
_.go=1
_.id=i
_.k1=!1
_.he$=j
_.mc$=k
_.fe$=l
_.hf$=m
_.bv$=n
_.aa$=o
_.c=_.a=null},
ea1:function ea1(d){this.a=d},
ea2:function ea2(d){this.a=d},
ea0:function ea0(d,e){this.a=d
this.b=e},
ea3:function ea3(d){this.a=d},
ea_:function ea_(d){this.a=d},
ea4:function ea4(d){this.a=d},
e9Y:function e9Y(d){this.a=d},
e9Z:function e9Z(d,e,f){this.a=d
this.b=e
this.c=f},
e9X:function e9X(d){this.a=d},
e9W:function e9W(){},
e9V:function e9V(d){this.a=d},
ean:function ean(d,e){this.a=d
this.b=e},
eao:function eao(d,e){this.a=d
this.b=e},
eac:function eac(d){this.a=d},
ead:function ead(d){this.a=d},
eab:function eab(d){this.a=d},
eae:function eae(d){this.a=d},
ea5:function ea5(d,e){this.a=d
this.b=e},
ea6:function ea6(d){this.a=d},
eap:function eap(d,e){this.a=d
this.b=e},
eaa:function eaa(d,e){this.a=d
this.b=e},
eat:function eat(d){this.a=d},
eam:function eam(d){this.a=d},
eau:function eau(d,e){this.a=d
this.b=e},
eal:function eal(d,e){this.a=d
this.b=e},
eav:function eav(d){this.a=d},
eak:function eak(d,e){this.a=d
this.b=e},
eaw:function eaw(d){this.a=d},
eaj:function eaj(d,e){this.a=d
this.b=e},
eax:function eax(d){this.a=d},
eai:function eai(d,e){this.a=d
this.b=e},
eay:function eay(d){this.a=d},
eah:function eah(d,e){this.a=d
this.b=e},
eaz:function eaz(d){this.a=d},
eag:function eag(d){this.a=d},
eaA:function eaA(d){this.a=d},
eaf:function eaf(d){this.a=d},
eaq:function eaq(d){this.a=d},
ea9:function ea9(d){this.a=d},
ear:function ear(d){this.a=d},
ea8:function ea8(d){this.a=d},
eas:function eas(d){this.a=d},
ea7:function ea7(d){this.a=d},
e9U:function e9U(){},
e9T:function e9T(d){this.a=d},
e9S:function e9S(d){this.a=d},
bjk:function bjk(d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.w=j
_.x=k
_.y=l
_.z=m
_.Q=n
_.as=o
_.a=p},
dqe:function dqe(d,e,f){this.a=d
this.b=e
this.c=f},
dqf:function dqf(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
aOR:function aOR(){},
aOS:function aOS(){},
ah9(d,e,f,g,h){return new B.byi(d,e,f,g,h)},
byi:function byi(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fzQ:function fzQ(){},
fzR:function fzR(){},
fzS:function fzS(){},
fzT:function fzT(){},
fzU:function fzU(){},
fzV:function fzV(){},
fzW:function fzW(){},
Y6:function Y6(d){this.a=d},
boQ:function boQ(){this.d=$
this.c=this.a=null},
eXn:function eXn(){},
eXo:function eXo(){},
eXk:function eXk(d){this.a=d},
eXl:function eXl(d){this.a=d},
eXj:function eXj(d){this.a=d},
eXm:function eXm(){},
eXi:function eXi(d,e){this.a=d
this.b=e},
eXh:function eXh(d){this.a=d},
idO(){var x,w,v=y.n,u=C.a([],v)
for(x=0;x<260;++x){w=new C.e1()
w.cT(x)
u.push(w.ai()*3.141592653589793*2)}v=C.a([],v)
for(x=0;x<260;++x){w=new C.e1()
w.cT(x+900)
v.push(2.2+w.ai())}return new B.boD(new C.cy(null,y.z),new B.Qs(A.cT),A.J,A.az,u,v,$,A.bG,0,C.a([],y.X),null,null)},
idQ(d){return d===0?0:30+150*Math.sqrt(d/30.1)},
idP(d){return 1.5+1.6*Math.log(d.d/1000+1)},
hEq(d,e,f){return $.ier.c_(0,d+"|"+C.v(e)+"|"+f.m(),new B.fhn(d,e,f))},
XR:function XR(d){this.a=d},
boD:function boD(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
_.d=d
_.e=e
_.f=0
_.r=30
_.w=1
_.x=f
_.y=1
_.Q=_.z=null
_.ay=_.ax=_.at=_.as=!0
_.ch=g
_.CW=h
_.cx=i
_.he$=j
_.mc$=k
_.fe$=l
_.hf$=m
_.bv$=n
_.aa$=o
_.c=_.a=null},
ePK:function ePK(d,e){this.a=d
this.b=e},
ePV:function ePV(d,e){this.a=d
this.b=e},
ePW:function ePW(d,e){this.a=d
this.b=e},
ePS:function ePS(d){this.a=d},
ePT:function ePT(d){this.a=d},
ePU:function ePU(d){this.a=d},
ePX:function ePX(d){this.a=d},
ePR:function ePR(d){this.a=d},
ePY:function ePY(d,e){this.a=d
this.b=e},
ePZ:function ePZ(d){this.a=d},
ePQ:function ePQ(d,e){this.a=d
this.b=e},
eQ_:function eQ_(d){this.a=d},
ePP:function ePP(d,e){this.a=d
this.b=e},
eQ0:function eQ0(d){this.a=d},
ePO:function ePO(d){this.a=d},
eQ1:function eQ1(d){this.a=d},
ePN:function ePN(d){this.a=d},
eQ2:function eQ2(d){this.a=d},
ePM:function ePM(d){this.a=d},
eQ3:function eQ3(d){this.a=d},
ePL:function ePL(d){this.a=d},
ePJ:function ePJ(){},
ePI:function ePI(){},
ePH:function ePH(d){this.a=d},
ePG:function ePG(d){this.a=d},
bwj:function bwj(d,e){this.b=d
this.a=e},
fhn:function fhn(d,e,f){this.a=d
this.b=e
this.c=f},
fho:function fho(){},
fhp:function fhp(){},
X2:function X2(d){this.a=d},
aGs:function aGs(d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
_.d="drop"
_.e=d
_.r=_.f=!1
_.w=0.4
_.x=!1
_.y=0
_.z=e
_.Q=f
_.as=g
_.at=50
_.ax=0.5
_.ay=7
_.ch=2
_.CW=!1
_.cx=h
_.cy=i
_.db=j
_.dx=""
_.dy=0
_.he$=k
_.mc$=l
_.fe$=m
_.hf$=n
_.bv$=o
_.aa$=p
_.c=_.a=null},
eaE:function eaE(){},
eb6:function eb6(){},
eaT:function eaT(d,e){this.a=d
this.b=e},
eaK:function eaK(d,e){this.a=d
this.b=e},
eaU:function eaU(d){this.a=d},
eaJ:function eaJ(d){this.a=d},
eaV:function eaV(d){this.a=d},
eaS:function eaS(d){this.a=d},
eaZ:function eaZ(d){this.a=d},
eaR:function eaR(d){this.a=d},
eb_:function eb_(d){this.a=d},
eaQ:function eaQ(d,e){this.a=d
this.b=e},
eb0:function eb0(d){this.a=d},
eb1:function eb1(d){this.a=d},
eaP:function eaP(d,e){this.a=d
this.b=e},
eb2:function eb2(d){this.a=d},
eaO:function eaO(d,e){this.a=d
this.b=e},
eb3:function eb3(d){this.a=d},
eaN:function eaN(d,e){this.a=d
this.b=e},
eb4:function eb4(d){this.a=d},
eaM:function eaM(d,e){this.a=d
this.b=e},
eb5:function eb5(d){this.a=d},
eaL:function eaL(d){this.a=d},
eaW:function eaW(d){this.a=d},
eaI:function eaI(d){this.a=d},
eaX:function eaX(d){this.a=d},
eaH:function eaH(d){this.a=d},
eaY:function eaY(d){this.a=d},
eaG:function eaG(d){this.a=d},
eaD:function eaD(d){this.a=d},
eaC:function eaC(){},
eaF:function eaF(d,e){this.a=d
this.b=e},
eaB:function eaB(d){this.a=d},
bes:function bes(d,e,f,g,h,i){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.a=i},
XK:function XK(d){this.a=d},
boA:function boA(d,e,f,g,h,i,j){var _=this
_.d=d
_.e=1
_.f=5
_.he$=e
_.mc$=f
_.fe$=g
_.hf$=h
_.bv$=i
_.aa$=j
_.c=_.a=null},
eIs:function eIs(d,e){this.a=d
this.b=e},
eIt:function eIt(d,e){this.a=d
this.b=e},
eIr:function eIr(d,e){this.a=d
this.b=e},
eIu:function eIu(d,e){this.a=d
this.b=e},
eIq:function eIq(d,e){this.a=d
this.b=e},
bvR:function bvR(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
ffw:function ffw(d){this.a=d},
aOT:function aOT(){},
bBD:function bBD(){},
aPo:function aPo(){},
bBO:function bBO(){},
aPr:function aPr(){},
bBQ:function bBQ(){},
idM(){var x,w,v,u=C.a([],y.A),t=C.a([],y.g)
for(x=0;x<150;++x){w=new C.e1()
w.cT(x)
w=w.ai()
v=new C.e1()
v.cT(x+500)
t.push(new C.r(w,v.ai()))}return new B.bnc(new C.cy(null,y.z),new B.Qs(A.cT),u,A.az,t,$,A.bG,0,C.a([],y.X),null,null)},
R1:function R1(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=1},
W3:function W3(d){this.a=d},
bnc:function bnc(d,e,f,g,h,i,j,k,l,m,n){var _=this
_.d=d
_.e=e
_.f=0
_.r=10
_.y=_.x=_.w=!0
_.z=f
_.Q=g
_.as=0
_.at=h
_.he$=i
_.mc$=j
_.fe$=k
_.hf$=l
_.bv$=m
_.aa$=n
_.c=_.a=null},
dSq:function dSq(){},
dSe:function dSe(){},
dSf:function dSf(d,e){this.a=d
this.b=e},
dSg:function dSg(d,e){this.a=d
this.b=e},
dSd:function dSd(d){this.a=d},
dSc:function dSc(d){this.a=d},
dSi:function dSi(d){this.a=d},
dSb:function dSb(d,e){this.a=d
this.b=e},
dSj:function dSj(d){this.a=d},
dSa:function dSa(d){this.a=d},
dSk:function dSk(d){this.a=d},
dS9:function dS9(d){this.a=d},
dSl:function dSl(d){this.a=d},
dS8:function dS8(d){this.a=d},
dSm:function dSm(d){this.a=d},
dS7:function dS7(d){this.a=d},
dSn:function dSn(d){this.a=d},
dS6:function dS6(d){this.a=d},
dSo:function dSo(d){this.a=d},
dS5:function dS5(d){this.a=d},
dSp:function dSp(d){this.a=d},
dS4:function dS4(d){this.a=d},
dSh:function dSh(d){this.a=d},
dS3:function dS3(d){this.a=d},
bdN:function bdN(d,e){this.b=d
this.a=e},
agO:function agO(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
X_:function X_(d){this.a=d},
bnH:function bnH(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u){var _=this
_.d=d
_.e=e
_.f=2
_.r=3.2
_.w=0
_.x=!1
_.z=_.y=!0
_.Q="spiral"
_.as=0.75
_.at=0
_.ax=1
_.ay=f
_.ch=!1
_.CW=g
_.cx=h
_.cy=i
_.db=j
_.dx=k
_.dy=l
_.fr=m
_.fx=n
_.fy=o
_.he$=p
_.mc$=q
_.fe$=r
_.hf$=s
_.bv$=t
_.aa$=u
_.c=_.a=null},
e9k:function e9k(d){this.a=d},
e9a:function e9a(d,e){this.a=d
this.b=e},
e9b:function e9b(d,e){this.a=d
this.b=e},
e99:function e99(d,e){this.a=d
this.b=e},
e9c:function e9c(d){this.a=d},
e98:function e98(d){this.a=d},
e9d:function e9d(d){this.a=d},
e97:function e97(d,e){this.a=d
this.b=e},
e9e:function e9e(d){this.a=d},
e96:function e96(d,e){this.a=d
this.b=e},
e9f:function e9f(d){this.a=d},
e95:function e95(d,e){this.a=d
this.b=e},
e9g:function e9g(d){this.a=d},
e94:function e94(d,e){this.a=d
this.b=e},
e9h:function e9h(d){this.a=d},
e93:function e93(d){this.a=d},
e9i:function e9i(d){this.a=d},
e92:function e92(d){this.a=d},
e9j:function e9j(d){this.a=d},
e91:function e91(d){this.a=d},
bjb:function bjb(d,e){this.b=d
this.a=e},
dno:function dno(d){this.a=d},
XF:function XF(d){this.a=d},
boz:function boz(d,e,f,g,h,i,j,k){var _=this
_.d=d
_.e=e
_.f="seasons"
_.w=_.r=0
_.x=!0
_.y=1
_.z=23.4
_.Q=!0
_.as=0
_.he$=f
_.mc$=g
_.fe$=h
_.hf$=i
_.bv$=j
_.aa$=k
_.c=_.a=null},
eFK:function eFK(d,e){this.a=d
this.b=e},
eFL:function eFL(d){this.a=d},
eFJ:function eFJ(d){this.a=d},
eFM:function eFM(d){this.a=d},
eFI:function eFI(d){this.a=d},
eFN:function eFN(d){this.a=d},
eFH:function eFH(d){this.a=d},
eFO:function eFO(d){this.a=d},
eFG:function eFG(d){this.a=d},
eFP:function eFP(d){this.a=d},
eFF:function eFF(d,e){this.a=d
this.b=e},
eFQ:function eFQ(d){this.a=d},
eFE:function eFE(d,e){this.a=d
this.b=e},
eFR:function eFR(d){this.a=d},
eFD:function eFD(d,e){this.a=d
this.b=e},
eFS:function eFS(d){this.a=d},
eFC:function eFC(d,e){this.a=d
this.b=e},
bv3:function bv3(d,e){this.b=d
this.a=e},
aOo:function aOo(){},
bBu:function bBu(){},
aOP:function aOP(){},
bBC:function bBC(){},
aPm:function aPm(){},
bBN:function bBN(){},
h0Z(d,e,f){return B.iyN(d,e,f)},
iyN(d,e,f){var x=0,w=C.j(y.w),v,u=2,t=[],s,r,q,p,o,n,m
var $async$h0Z=C.e(function(g,h){if(g===1){t.push(h)
x=u}for(;;)switch(x){case 0:u=4
s=C.i3([d],f)
p=(self.URL||self.webkitURL).createObjectURL(s)
p.toString
r=p
o=C.nf(r)
o.download=e
p=o.style
p.display="none"
q=o
p=document.body
if(p!=null)p.appendChild(q).toString
J.HW(q)
x=7
return C.b(C.bL(A.j_,null,y.H),$async$h0Z)
case 7:J.m2(q);(self.URL||self.webkitURL).revokeObjectURL(r)
v=!0
x=1
break
u=2
x=6
break
case 4:u=3
m=t.pop()
v=!1
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return C.h(v,w)
case 2:return C.f(t.at(-1),w)}})
return C.i($async$h0Z,w)}},D,E,F,A2,G,A3,K,A4,A5,A6,A7,S,A8,T,H,A9
J=c[1]
C=c[0]
A=c[2]
U=c[333]
V=c[149]
M=c[160]
W=c[367]
X=c[107]
Y=c[216]
Z=c[217]
A_=c[67]
N=c[148]
O=c[197]
L=c[208]
I=c[228]
P=c[163]
A0=c[222]
A1=c[194]
Q=c[207]
R=c[206]
B=a.updateHolder(c[34],B)
D=c[3]
E=c[50]
F=c[165]
A2=c[159]
G=c[355]
A3=c[362]
K=c[342]
A4=c[198]
A5=c[263]
A6=c[311]
A7=c[184]
S=c[212]
A8=c[187]
T=c[325]
H=c[72]
A9=c[368]
B.bpx.prototype={}
B.Rl.prototype={
ga0(d){return this.d}}
B.XS.prototype={
R(){var x=C.a([],y.G),w=C.a([],y.Z)
return new B.boE(new C.cy(null,y.z),x,w,A.cT,A.bG,D.H2,null,null)}}
B.boE.prototype={
b3L(d,e){var x,w,v,u=this
if(u.ch)x=!e&&u.y-u.CW<120
else x=!0
if(x)return
u.CW=u.y
x=u.c
x.toString
w=A.o.D(A.i.bc((1-d.b/(C.aF(x,null,y.m).w.a.b*0.7))*10),0,9)
v=D.aD7[A.o.F(w,5)]+12*A.o.ao(w,5)+12
switch(u.z){case"glow":B.mH("synth",v,420,0.3)
break
case"rainbow":B.mH("bell",v,700,0.35)
break
case"stars":B.mH("pluck",v+12,400,0.4)
break
case"sparks":E.dE(2400+u.r.av(2000),"",60,0,0.18,"noise")
break
default:E.dE(110+u.r.av(60),"",140,0,0.22,"noise")}},
che(d){return this.b3L(d,!1)},
a_(){var x,w=this
w.a3()
x=w.q9(new B.eQu(w))
x.fR(0)
w.w!==$&&C.aS()
w.w=x},
t(){var x=this.w
x===$&&C.d()
x.t()
this.bBC()},
gb5x(){var x=this.Q
return x<0?new H.pA(1,A.i.F(this.y*0.18,360),0.85,1).jd():D.Et[x]},
aVO(d){var x,w,v,u,t,s,r,q,p,o,n,m=this,l=m.gb5x(),k=m.z
if(k==="fire")x=5
else x=k==="sparks"?4:1
for(k=m.f,w=m.r,v=d.a,u=d.b+0,t=0;t<x;++t){s=w.ai()*3.141592653589793*2
switch(m.z){case"fire":r=w.ai()
q=m.as
p=w.ai()
o=w.ai()
n=C.ap(A.bt,A.aB,w.ai())
n.toString
k.push(new B.Rl(new C.r(v+(r-0.5)*q,u),new C.r((p-0.5)*40,-60-o*120),n,m.as*(0.3+w.ai()*0.4),m.y,700+w.av(500)))
break
case"sparks":r=Math.cos(s)
q=Math.sin(s)
p=40+w.ai()*200
o=C.ap(l,A.c,w.ai()*0.6)
o.toString
k.push(new B.Rl(d,new C.r(r*p,q*p),o,1.5+w.ai()*3,m.y,600+w.av(600)))
break
default:r=Math.cos(s)
q=Math.sin(s)
p=10+w.ai()*40
k.push(new B.Rl(d,new C.r(r*p,q*p),l,1.2+w.ai()*1.8,m.y,500))}}},
b2d(d,e){var x,w,v,u,t,s=this
s.ay=!0
x=s.z
if(x==="glow"||x==="rainbow"||x==="stars"){w=s.gb5x()
v=s.as
u=s.Q<0||s.z==="rainbow"
t=C.a([],y.g)
s.ax=new B.bpx(t,x,w,v,u)
t.push(e)
t=s.ax
t.toString
s.e.push(t)}s.aVO(e)
s.b3L(e,!0)
s.l(new B.eQ5())},
b2c(){this.ax=null
this.l(new B.eQ4())},
B(d){var x,w,v,u,t,s,r,q,p=this,o=null,n=y.p,m=C.a([C.aI(o,o,o,o,D.p2,o,o,o,new B.eQe(p,d),o,o,o,o,"Share",o)],n),l=p.e,k=C.a([C.b4(o,o,o,new B.bwm(l,p.f,p.y,p.at,o),A.az)],n)
if(!p.ay&&l.length===0)k.push(D.bfS)
l=C.aA(A.c_,new C.an(A.a0,o,A.b4,A.t,k,o),A.y,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,new B.eQf(p),new B.eQg(p),new B.eQk(p),o,o,o,o,o,o,o,o,o,new B.eQl(p),new B.eQm(p),o,o,o,!1,A.a4)
k=C.a([],n)
for(x=0;x<5;++x){w=D.ddI[x]
k.push(new B.e0(w.b,p.z===w.a,new B.eQn(p,w),w.c,A.c3,o))}v=C.a([new B.Gm(A.c,p.Q<0,new B.eQo(p),!0,o)],n)
for(u=0;u<8;++u)v.push(new B.Gm(D.Et[u],p.Q===u,new B.eQp(p,u),!1,o))
t=p.as
t=B.j6(A.c3,A.o.v(A.i.S(t)),"Size",36,4,new B.eQq(p),t)
s=p.ch
r=s?R.p_:Q.tP
r=C.a([new B.e0("Sound",s,new B.eQr(p),r,A.c3,o),new B.fI(A.pZ,"Undo",new B.eQh(p),A.c,o),new B.fI(D.xg,"Clear",new B.eQi(p),A.bY,o)],n)
for(x=0;x<4;++x){q=D.dwA[x]
r.push(new B.Gm(q,p.at.A(0,q),new B.eQj(p,q),!1,o))}return B.lW(A.c3,m,"Draw with your finger. Pick a brush: Glow leaves a neon line, Rainbow changes colour as you draw, Stars stamps little stars, Sparks and Fire throw live light that fades away.\n\nUndo removes your last line, Clear starts again, and Share saves a picture of your art.",new C.e5(l,p.d),"SPARK PAINTER",C.x(C.a([new B.fh(k,"BRUSH",o),new B.fh(v,"COLOUR",o),t,new B.fh(r,o,o)],n),A.l,o,A.e,A.M,0,A.p))}}
B.bwm.prototype={
a4(a3,a4){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=this,a2=null
$.T()
x=C.L()
w=a1.e
x.r=w.gp(w)
a3.aE(new C.a4(0,0,0+a4.a,0+a4.b),x)
for(x=a1.b,w=x.length,v=y.v,u=0;u<x.length;x.length===w||(0,C.I)(x),++u){t=x[u]
s=t.a
r=s.length
if(r===0)continue
switch(t.b){case"glow":r=$.T()
q=C.a([],v)
p=new C.aH(r.r,A.aj,a2,a2,q)
q.push(new C.aZ(A.d.gH(s).a,A.d.gH(s).b))
p.ac()
for(r=C.U(s),o=r.k("iO<1>"),n=new C.iO(s,1,a2,o),n.na(s,1,a2,r.c),n=new C.bQ(n,n.gJ(0),o.k("bQ<aj.E>")),o=o.k("aj.E");n.C();){r=n.d
if(r==null)r=o.a(r)
r=new C.aq(r.a,r.b)
q.push(r)
m=p.f
if(m!=null)r.aj(m)
p.ac()}if(s.length===1){s=A.d.gH(s)
$.T()
r=new C.as(A.T,A.Q,A.W,A.X,A.U)
r.r=t.c.gp(0)
a3.O(s,t.d/2,r)}$.T()
s=new C.as(A.T,A.Q,A.W,A.X,A.U)
s.b=A.ac
s.d=A.bF
s.e=A.dP
r=t.d
s.c=r*2.2
q=t.c
s.r=q.j(0.45).gp(0)
s.y=new C.h1(A.H,r)
a3.af(p,s)
s=new C.as(A.T,A.Q,A.W,A.X,A.U)
s.b=A.ac
s.d=A.bF
s.e=A.dP
s.c=r
s.r=q.gp(0)
a3.af(p,s)
s=new C.as(A.T,A.Q,A.W,A.X,A.U)
s.b=A.ac
s.d=A.bF
s.e=A.dP
s.c=r*0.35
s.r=A.c.j(0.85).gp(0)
a3.af(p,s)
break
case"rainbow":for(r=t.d,l=1;l<s.length;++l){k=new H.pA(1,A.o.F(l*5,360),0.85,1).jd()
q=s[l-1]
o=s[l]
$.T()
n=new C.as(A.T,A.Q,A.W,A.X,A.U)
n.c=r
n.d=A.bF
n.r=k.gp(0)
a3.ah(q,o,n)}break
case"stars":for(q=t.d,o=q*2.1,n=t.c,m=t.e,q*=0.9,j=a2,i=0,h=0,g=0;g<s.length;s.length===r||(0,C.I)(s),++g,j=f){f=s[g]
if(j!=null){e=f.a-j.a
d=f.b-j.b
i+=Math.sqrt(e*e+d*d)}e=A.d.gH(s)
if(e.a===f.a&&e.b===f.b||i>o){a0=h+1
e=m?new H.pA(1,A.o.F(a0*23,360),0.7,1).jd():n
a1.cdA(a3,f,q,h*0.5,e)
h=a0
i=0}}break}}for(x=a1.c,w=x.length,v=a1.d,u=0;u<x.length;x.length===w||(0,C.I)(x),++u){f=x[u]
h=A.i.D((v-f.e)/f.f,0,1)
s=f.a
$.T()
r=new C.as(A.T,A.Q,A.W,A.X,A.U)
r.r=f.c.j((1-h)*0.9).gp(0)
r.y=K.a2p
a3.O(s,f.d*(1-0.6*h)+1,r)}},
cdA(d,e,f,g,h){var x,w,v,u,t,s,r,q=$.T(),p=C.a([],y.v),o=new C.aH(q.r,A.aj,null,null,p)
for(q=e.a,x=e.b,w=f*0.45,v=0;v<10;++v){u=(v&1)===0?f:w
t=g+v*3.141592653589793/5-1.5707963267948966
s=q+Math.cos(t)*u
r=x+Math.sin(t)*u
if(v===0){s=new C.aZ(s,r)
p.push(s)
r=o.f
if(r!=null)s.aj(r)
o.ac()}else{s=new C.aq(s,r)
p.push(s)
r=o.f
if(r!=null)s.aj(r)
o.ac()}}o.E(new C.bA())
$.T()
q=C.L()
q.r=h.j(0.4).gp(0)
q.y=A.l6
d.af(o,q)
q=C.L()
q.r=h.gp(0)
d.af(o,q)},
aC(d){return!0}}
B.aPs.prototype={
t(){var x=this,w=x.aa$
if(w!=null)w.a8(0,x.gbB())
x.aa$=null
x.a2()},
aZ(){this.b7()
this.b5()
this.bC()}}
B.bap.prototype={
B(d){var x,w=this,v=null,u=w.c,t=F.aKX.h(0,u)
$.aux=t==null?"music":t
t=w.d
x=y.p
u=C.a([C.aI(v,v,v,v,A2.nj,v,v,v,new B.cDR(d),v,v,v,v,v,v),C.E(C.c(u,v,1,A.a2,v,v,v,C.l(v,v,t,v,v,v,v,v,v,v,v,14.5,v,v,A.u,v,v,!0,v,1.6,v,v,v,v,v,v),v,v,v),1)],x)
A.d.u(u,w.w)
u.push(C.aI(v,v,v,v,C.W(A.DF,t,v,v,v,22),v,v,v,new B.cDS(w,d),v,v,v,v,"How to play",v))
x=C.a([new C.D(D.bKF,C.A(u,A.l,v,A.e,A.h,0,v,v),v),C.E(w.f,1)],x)
x.push(C.p(v,w.r,A.f,v,v,new C.o(F.Cz,v,new C.bE(new C.ax(A.c.j(0.08),1,A.r,-1),A.a1,A.a1,A.a1),v,v,v,A.m),v,v,v,v,A.D0,v,v,1/0))
return C.c5(v,A.c5,C.bo(!0,C.x(x,A.l,v,A.e,A.h,0,A.p),!0,!1,A.ag,!0,!0),v,!1,!1,v,v)}}
B.e0.prototype={
B(d){var x,w,v,u=this,t=null,s=C.n(999),r=u.d,q=r?u.r.j(0.22):A.c.j(0.06),p=r?u.r:A.c.j(0.12)
p=C.K(p,A.r,r?1.6:1)
x=y.p
w=C.a([],x)
v=u.f
if(v!=null)A.d.u(w,C.a([C.W(v,r?u.r:A.aR,t,t,t,16),A.e3],x))
w.push(C.c(u.c,t,t,t,t,t,t,C.l(t,t,r?A.c:A.ab,t,t,t,t,t,t,t,t,12,t,t,A.F,t,t,!0,t,t,t,t,t,t,t,t),t,t,t))
return new C.D(F.oP,C.aA(t,C.cT(t,C.A(w,A.l,t,A.e,A.M,0,t,t),t,t,A.b_,new C.o(q,t,p,s,t,t,A.m),A.eK,t,t,t,t,A.hc,t,t,t),A.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new B.cDN(u),t,t,t,t,t,t,!1,A.a4),t)}}
B.fh.prototype={
B(d){var x=null,w=C.a([],y.p),v=this.d
if(v!=null)w.push(new C.a6(54,x,C.c(v,x,x,x,x,x,x,C.l(x,x,A.c.j(0.45),x,x,x,x,x,x,x,x,10.5,x,x,A.u,x,x,!0,x,0.8,x,x,x,x,x,x),x,x,x),x))
w.push(C.E(C.cb(C.A(this.c,A.l,x,A.e,A.h,0,x,x),A.t,x,A.y,x,x,x,x,x,A.aK),1))
return new C.D(A.cy,C.A(w,A.l,x,A.e,A.h,0,x,x),x)}}
B.baq.prototype={
B(d){var x,w,v=this,u=null,t=C.c(v.c,u,u,u,u,u,u,C.l(u,u,A.c.j(0.7),u,u,u,u,u,u,u,u,11.5,u,u,A.F,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),s=v.w
s=C.ac_(d).bha(s,A.bx,s.j(0.2),s,3.5)
x=v.f
w=v.r
s=C.E(C.Zu(C.ld(u,u,u,w,x,v.e,A.i.D(v.d,x,w)),s),1)
return new C.a6(u,34,C.A(C.a([new C.a6(78,u,t,u),s,new C.a6(38,u,C.c(v.x,u,u,u,u,u,u,Y.Lu,A.e4,u,u),u)],y.p),A.l,u,A.e,A.h,0,u,u),u)}}
B.fI.prototype={
B(d){var x=this,w=null,v=x.f,u=v.j(0.12)
return new C.D(F.oP,C.aG(!1,A.a3,!0,C.n(12),C.aM(!1,C.n(12),!0,new C.D(A5.anp,C.A(C.a([C.W(x.c,v,w,w,w,17),A.e3,C.c(x.d,w,w,w,w,w,w,C.l(w,w,v,w,w,w,w,w,w,w,w,12,w,w,A.F,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],y.p),A.l,w,A.e,A.M,0,w,w),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new B.cDM(x),w,w,w,w,w,w,w),A.f,u,0,w,w,w,w,w,A.ai),w)}}
B.Gm.prototype={
B(d){var x,w=this,v=null,u=w.d,t=u?34:28,s=u?34:28,r=w.f,q=r?v:w.c
r=r?D.fAO:v
x=u?A.c:A.aT
x=C.K(x,A.r,u?2.5:1)
return C.aA(v,C.cT(v,v,v,v,A.b_,new C.o(q,v,x,v,u?C.a([new C.aa(0,A.H,w.c.j(0.6),A.J,10)],y.V):v,r,A.a6),A.hl,v,s,v,D.ana,v,v,v,t),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new B.cDT(w),v,v,v,v,v,v,!1,A.a4)}}
B.nW.prototype={
Vd(d,e){var x=C.ds()
x.seX(C.cz(C.dy(0,0,0,d,0,0),new B.cDO(this,x,e)))
this.hf$.push(x.bn())},
mn(){var x=this,w=x.q9(new B.cDQ(x))
w.fR(0)
x.he$!==$&&C.aS()
x.he$=w}}
B.chW.prototype={
Lo(d){var x=this.c
x.q2(d&255)
x.q2(A.o.aH(d,8)&255)},
aIt(d,e,f,g,h,i){var x=this,w=x.c
w.I(0,D.cDd)
x.Lo(i)
w.q2(255)
w.q2(0)
w.q2(44)
x.Lo(d)
x.Lo(e)
x.Lo(f)
x.Lo(g)
w.q2(0)
w.q2(8)
x.c7T(h)
w.q2(0)},
cP9(d,e,f){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=k.a,i=k.b
for(x=i,w=j,v=-1,u=-1,t=0;t<i;++t){s=t*j
for(r=0;r<j;++r){q=s+r
if(d[q]!==e[q]){if(r<w)w=r
if(r>v)v=r
if(t<x)x=t
if(t>u)u=t}}}if(v<0){k.aIt(0,0,1,1,new Uint8Array(C.ca(D.cx5)),f)
return}p=v-w+1
o=u-x+1
n=new Uint8Array(p*o)
for(t=0;t<o;++t){s=(x+t)*j+w
for(q=t*p,r=0;r<p;++r){m=s+r
l=e[m]
m=l===d[m]?255:l
n[q+r]=m}}k.aIt(w,x,p,o,n,f)},
c7T(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j={},i=new Int32Array(5003)
A.ig.fX(i,0,5003,-1)
x=new Int32Array(5003)
j.a=9
j.b=j.c=0
w=new Uint8Array(255)
j.d=0
v=new B.chY(j,this,w)
u=new B.chX(j,v)
u.$1(256)
t=d[0]
A:for(s=d.length,r=258,q=1;q<s;++q){p=d[q]
o=(p<<12>>>0)+t
n=(p<<4^t)>>>0
m=i[n]
if(m===o){t=x[n]
continue A}if(m>=0){l=n===0?1:5003-n
do{n-=l
if(n<0)n+=5003
m=i[n]
if(m===o){t=x[n]
continue A}}while(m>=0)}u.$1(t)
if(r===4096){u.$1(256)
j.a=9
A.ig.fX(i,0,5003,-1)
r=258}else{m=j.a
if(r>=A.o.dH(1,m))j.a=m+1
k=r+1
x[n]=r
i[n]=o
r=k}t=p}u.$1(t)
u.$1(257)
if(j.b>0)v.$1(j.c&255)
s=j.d
if(s>0){m=this.c
m.q2(s)
m.I(0,C.vW(w,0,j.d))}}}
B.fte.prototype={}
B.bbj.prototype={
a4(d,e){var x=this
B.hP1(d,e,x.b,x.f,x.r,x.w,x.d,x.e,x.c)},
aC(d){var x=this
return d.b!==x.b||d.c!==x.c||d.d!==x.d||d.e!==x.e||d.f!==x.f||!d.r.A(0,x.r)||d.w!==x.w}}
B.Y3.prototype={
R(){return new B.auw(new C.au(new C.bd("NGMY",A.b6,A.aP),$.az()),null,null)}}
B.auw.prototype={
gK6(){var x,w=this,v=w.d
if(v===$){x=C.br(null,C.dy(0,0,0,3200,0,0),null,1,null,w)
x.cX(0)
w.d!==$&&C.bF()
w.d=x
v=x}return v},
gtQ(){var x=D.Et[this.w]
return x},
a_(){this.a3()
var x=this.gK6()
x.dq()
x.e_$.I(0,this.gcgA())},
cgB(){var x,w,v,u,t,s,r,q=this,p=q.gK6().x
p===$&&C.d()
x=q.e.a.a
w=Math.max(1,(x.length===0?A.mI:new C.mI(x)).gJ(0))
if(q.Q&&p>=q.as)for(x=w-1,v=w<=1,u=0;u<w;++u){t=q.f
s=t==="type"
if(s)r=u/w/1.8
else r=v?0:u/x*0.45
if(q.as<r&&p>=r)if(s)E.dE(1500,"",35,0,0.18,"square")
else if(t==="glitch")E.dE(400+u*60,"",70,0,0.2,"square")
else{t=t==="neon"?"synth":"pluck"
B.mH(t,D.aBY[A.o.F(u,8)]+12,450,0.35)}}q.as=p},
t(){this.gK6().t()
var x=this.e
x.V$=$.az()
x.W$=0
this.by2()},
bsO(d){var x
this.l(new B.cp6(this,d))
x=this.gK6()
x.iD(0,0)
x.cX(0)},
a65(){var x=0,w=C.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h
var $async$a65=C.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:if(s.at>=0){x=1
break}s.l(new B.cp1(s))
u=4
o=s.e
n=A.a.i(o.a.a)
if(n.length===0)n="title"
m=C.ag("[^A-Za-z0-9_-]+",!0,!1,!1,!1)
r=C.aL(n,m,"_")
o=o.a.a
n=s.f
m=s.r
l=s.y
k=s.gtQ()
j=s.x
x=7
return C.b(B.hq3(D.a7E[s.z].b,l,k,j,20,1080,n,new B.cp2(s),m,o),$async$a65)
case 7:q=e
if(J.ad(q)===0){o=C.bc("empty")
throw C.Y(o)}x=8
return C.b(B.aTn(q,r),$async$a65)
case 8:p=e
if(s.c!=null)s.l(new B.cp3(s,p))
u=2
x=6
break
case 4:u=3
h=t.pop()
if(s.c!=null)s.l(new B.cp4(s))
x=6
break
case 3:x=2
break
case 6:if(s.c!=null)s.l(new B.cp5(s))
case 1:return C.h(v,w)
case 2:return C.f(t.at(-1),w)}})
return C.i($async$a65,w)},
B(d){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=C.at(new C.fL(D.a7E[l.z].b,C.bx(C.n(22),new C.e5(C.c9(l.gK6(),new B.coR(l),k),k),A.aq),k),k,k,k),i=A.c.j(0.06)
i=C.aN(k,A.Z,!1,k,!0,A.t,k,C.aO(),l.e,k,k,k,k,k,2,C.bC(k,new C.b6(4,C.n(14),A.a1),k,k,k,k,"",k,!0,k,k,k,k,k,k,i,!0,k,k,k,k,k,k,k,k,k,k,k,k,k,L.FD,"Type your title",k,k,k,k,k,!0,k,k,k,!0,!0,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k),A.y,!0,k,!0,k,!1,k,A.al,k,k,k,k,k,k,k,28,k,1,k,k,!1,"\u2022",k,new B.coS(l),k,k,k,!1,k,k,!1,k,!0,k,A.ae,k,k,k,k,k,k,k,k,k,k,k,A.hh,!0,A.a7,k,A.ao,k,k,k,k)
x=y.p
w=C.a([],x)
for(v=0;v<24;++v){u=D.dCp[v]
w.push(new B.e0(u.b,l.f===u.a,new B.coT(l,u),k,A.bt,k))}t=C.a([],x)
for(v=0;v<8;++v){u=D.ddk[v]
t.push(new B.e0(u.b,l.r===u.a,new B.coU(l,u),k,A.c3,k))}s=C.a([],x)
for(r=0;r<20;++r){q=D.dHg[r]
s.push(new B.e0(q.a+" "+q.b,l.y===r,new B.coV(l,r),k,A.aH,k))}q=C.a([],x)
for(r=0;r<8;++r)q.push(new B.Gm(D.Et[r],l.w===r,new B.coW(l,r),!1,k))
p=C.a([],x)
for(r=0;r<3;++r)p.push(new B.e0(D.a7E[r].a,l.z===r,new B.coX(l,r),k,A.bt,k))
p.push(A.bc)
o=l.Q
n=o?"Sound on":"Sound off"
m=o?R.p_:Q.tP
p.push(new B.e0(n,o,new B.coY(l),m,A.bt,k))
p.push(A.bc)
p.push(new B.fI(A.o6,"Replay",new B.coZ(l),A.c,k))
m=l.x
m=C.a([i,A.O,new B.fh(w,"MOVE",k),new B.fh(t,"LOOK",k),new B.fh(s,"SCENE",k),new B.fh(q,"COLOUR",k),new B.fh(p,"SHAPE",k),B.j6(A.bt,A.o.v(A.i.S(m)),"Size",96,28,new B.cp_(l),m),A.au],x)
i=l.at
if(i>=0)m.push(new C.D(A.jX,C.x(C.a([C.bx(C.n(6),C.jE(A.bx,k,A.bt,8,k,i,k),A.aq),A.au,C.c("Making your animation\u2026 "+A.i.S(i*100)+"%",k,k,k,k,k,k,A.nu,k,k,k)],x),A.l,k,A.e,A.h,0,A.p),k))
else m.push(new C.a6(1/0,k,C.db(A.oa,k,D.h7Q,l.gcUe(),C.bp(A.bt,k,k,k,A.v,k,A.kK,k,k,k,k,k)),k))
i=l.ax
if(i.length!==0)m.push(new C.D(A.hJ,C.c(i,k,k,k,k,k,k,D.fD1,A.K,k,k),k))
return B.lW(A.bt,A.fe,"Type a word or a name. Pick how the letters move (24 ways), how they look (8 designs), and a moving background scene (20 designs). The title plays on a loop. Download saves the WHOLE animation as a sharp moving GIF to post or send.",new C.D(A.bH,j,k),"TITLE ANIMATOR",C.x(m,A.l,k,A.e,A.M,0,A.p))},
ga0(d){return this.x}}
B.aHB.prototype={
t(){var x=this,w=x.aa$
if(w!=null)w.a8(0,x.gbB())
x.aa$=null
x.a2()},
aZ(){this.b7()
this.b5()
this.bC()}}
B.acZ.prototype={
bE5(d,e,f,a0,a1,a2,a3,a4,a5,a6){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=-999
for(x=h.y,w=x.length,v=g,u=v,t=999,s=999,r=0;q=x.length,r<q;x.length===w||(0,C.I)(x),++r)for(q=A.d.gae(x[r]);q.C();){p=q.gP(0)
o=J.a2(p)
if(o.h(p,0)<t)t=o.h(p,0)
if(o.h(p,0)>u)u=o.h(p,0)
if(o.h(p,1)<s)s=o.h(p,1)
if(o.h(p,1)>v)v=o.h(p,1)}h.z!==$&&C.aS()
h.z=t
h.Q!==$&&C.aS()
h.Q=u
h.as!==$&&C.aS()
h.as=s
h.at!==$&&C.aS()
h.at=v
for(n=0,r=0;r<x.length;x.length===q||(0,C.I)(x),++r){for(w=A.d.gae(x[r]),m=g,l=m,k=999,j=999;w.C();){p=w.gP(0)
o=J.a2(p)
if(o.h(p,0)<k)k=o.h(p,0)
if(o.h(p,0)>l)l=o.h(p,0)
if(o.h(p,1)<j)j=o.h(p,1)
if(o.h(p,1)>m)m=o.h(p,1)}i=Math.max(l-k,m-j)
if(i>n)n=i}h.ax!==$&&C.aS()
h.ax=n
x=h.bHp()
h.ay!==$&&C.aS()
h.ay=x},
bHp(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k
for(x=this.y,w=x.length,v=0,u=0;u<x.length;x.length===w||(0,C.I)(x),++u){t=x[u]
for(s=0,r=0;r<t.length-1;r=q){q=r+1
p=(J.t(t[r],1)+J.t(t[q],1))/2*3.141592653589793/180
o=J.t(t[r],0)
n=Math.cos(p)
m=J.t(t[r],1)
l=J.t(t[q],0)
k=Math.cos(p)
s+=o*n*J.t(t[q],1)-l*k*m}v+=Math.abs(s)/2}return v*111.32*111.32},
Gx(d,e,f){var x,w,v,u,t,s,r,q,p,o,n,m=this,l=m.z
l===$&&C.d()
x=!0
if(!(e<l)){l=m.Q
l===$&&C.d()
if(!(e>l)){l=m.as
l===$&&C.d()
if(!(f<l)){l=m.at
l===$&&C.d()
l=f>l}else l=x}else l=x}else l=x
if(l)return!1
for(l=m.y,x=l.length,w=0;w<l.length;l.length===x||(0,C.I)(l),++w){v=l[w]
for(u=v.length-1,t=!1,s=0;s<v.length;r=s+1,u=s,s=r){q=J.t(v[s],0)
p=J.t(v[s],1)
o=J.t(v[u],0)
n=J.t(v[u],1)
if(p>f!==n>f&&e<(o-q)*(f-p)/(n-p)+q)t=!t}if(t)return!0}return!1}}
B.ad_.prototype={
cOj(d,e){var x,w,v,u,t,s,r,q
for(x=d;x>180;)x-=360
while(x<-180)x+=360
for(w=this.a,v=w.length,u=null,t=0;t<w.length;w.length===v||(0,C.I)(w),++t){s=w[t]
if(s.Gx(0,x,e)){if(u!=null){r=s.ax
r===$&&C.d()
q=u.ax
q===$&&C.d()
q=r<q
r=q}else r=!0
if(r)u=s}}return u}}
B.vV.prototype={}
B.Qt.prototype={}
B.yU.prototype={}
B.Qs.prototype={
fD(d,e,f){var x,w,v,u=this
if(!f)return
if((u.a+=e)<2.8)return
u.a=0
x=u.b
w=D.ceX[x.av(7)]
x=x.h9()?0:12
v=A.o.F(u.c++,3)===0?"flute":"bell"
B.mH(v,w+x-12,2200,0.1)}}
B.X1.prototype={
R(){var x=$.az()
return new B.aGr(new C.cy(null,y.z),new C.au(A.ax,x),new B.Qs(A.cT),D.dtE,A.az,D.a7k,$,A.bG,0,C.a([],y.X),null,null)}}
B.aGr.prototype={
a_(){var x=this
x.a3()
x.mn()
x.a.toString
x.b_F()},
b_F(){var x=this
x.l(new B.ea1(x))
B.bbu().bE(new B.ea2(x),y.P).eE(new B.ea3(x))},
t(){var x=this.e
x.V$=$.az()
x.W$=0
this.bB1()},
cBk(d){var x,w,v,u,t,s,r,q,p,o
this.r=d
x=C.a([],y.y)
for(w=d.a,v=w.length,u=y.l,t=0;t<w.length;w.length===v||(0,C.I)(w),++t){s=w[t]
r=C.a([],u)
for(q=s.y,p=q.length,o=0;o<q.length;q.length===p||(0,C.I)(q),++o)r.push(new B.ea4(q[o]).$0())
x.push(r)}this.w=x},
gXx(){var x=this.fy
return x.A(0,A.az)?100:Math.min(x.a,x.b)*0.43},
awr(d,e,f){var x=this
x.at=d
x.ax=e
x.ay=A.i.D(f,1,16)
x.Q=x.as=0},
aD6(d){var x
this.fx=d
x=d.ax
x===$&&C.d()
this.awr(d.x,d.w,105/Math.max(x,3))
C.f2()
B.mH("bell",(A.d.cc(D.a6W,d.c)+1)*3+12,900,0.45)
E.dE(300,"",280,1.4,0.15,"tri")},
mE(d){var x,w,v,u,t,s,r,q=this
q.f.fD(0,d,q.db)
if(q.at!=null){x=1-Math.exp(-d*3.6)
w=q.ax
w.toString
v=q.y
u=w-v
while(u>180)u-=360
while(u<-180)u+=360
q.y=v+u*x
w=q.x
v=q.at
v.toString
w+=(v-w)*x
q.x=w
t=q.z
s=q.ay
s.toString
t+=(s-t)*x
q.z=t
if(Math.abs(u)<0.2&&Math.abs(v-w)<0.2&&Math.abs(s-t)<0.02)q.at=q.ax=q.ay=null}else if(!q.dx){q.y=q.y+q.Q*d
q.x=A.i.D(q.x+q.as*d,-85,85)
r=Math.exp(-d*2.2)
w=q.Q*=r
q.as*=r
if(q.ch&&Math.abs(w)<3)q.y=q.y+7*d/Math.sqrt(q.z)}while(w=q.y,w>180)q.y=w-360
while(w<-180){w+=360
q.y=w}},
cgF(d){var x,w,v,u,t,s,r,q,p,o=this,n=o.r
if(n==null||o.fy.A(0,A.az))return null
x=o.fy
w=o.gXx()
v=o.z
u=(d.a-x.a/2)/(w*v)
t=(x.b/2-d.b)/(o.gXx()*v)
s=u*u+t*t
if(s>1)return null
r=Math.sqrt(1-s)
q=o.x*3.141592653589793/180
p=Math.asin(A.i.D(r*Math.sin(q)+t*Math.cos(q),-1,1))
return n.cOj((o.y*3.141592653589793/180+Math.atan2(u,r*Math.cos(q)-t*Math.sin(q)))*180/3.141592653589793,p*180/3.141592653589793)},
cgE(d){var x=this,w=x.r
if(w==null||A.a.i(d).length===0){x.l(new B.e9Y(x))
return}x.l(new B.e9Z(x,w,A.a.i(d).toLowerCase()))},
bUP(){var x=null,w=this.c
w.toString
C.ce(x,x,!0,x,new B.e9W(),w,x,!0,!0,y.H)},
B(d){var x,w,v,u,t,s,r,q,p=this,o=null,n=p.fx,m=y.p,l=C.a([C.aI(o,o,o,o,D.bYC,o,o,o,p.gbUO(),o,o,o,o,"Earth facts",o),C.aI(o,o,o,o,D.p2,o,o,o,new B.ean(p,d),o,o,o,o,"Share",o)],m),k=C.cf(new B.eao(p,n)),j=A.c.j(0.06)
j=C.a([C.aN(o,A.Z,!1,o,!0,A.t,o,C.aO(),p.e,o,o,o,o,o,2,C.bC(o,new C.b6(4,C.n(14),A.a1),o,o,o,o,o,o,!0,o,o,o,o,o,o,j,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,L.FD,"Search a country",o,o,o,o,o,!0,o,o,o,!0,!0,!1,o,D.c6o,o,o,o,o,o,o,o,o,o,o,o,o),A.y,!0,o,!0,o,!1,o,A.al,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,p.gcgD(),o,o,o,!1,o,o,!1,o,!0,o,A.ae,o,o,o,o,o,o,o,o,o,o,o,A.jN,!0,A.a7,o,A.ao,o,o,o,o)],m)
if(p.id.length!==0){x=C.a([],m)
for(w=p.id,v=w.length,u=0;u<w.length;w.length===v||(0,C.I)(w),++u){t=w[u]
x.push(new B.e0(t.a,!1,new B.eap(p,t),A.mu,A.aH,o))}j.push(new C.D(A.hJ,new C.a6(o,38,C.cn(x,o,o,o,o,o,A.aK,!1),o),o))}j.push(A.ak)
x=C.a([new B.e0("Whole Earth",!1,new B.eat(p),A.i1,A.aH,o)],m)
for(w=D.aKW.gdS(D.aKW),w=w.gae(w);w.C();){v=w.gP(w)
x.push(new B.e0(v.a,!1,new B.eau(p,v),o,A.aH,o))}x.push(new B.e0("Random",!1,new B.eav(p),A.o2,A.aH,o))
j.push(new B.fh(x,"GO TO",o))
x=p.z
j.push(B.j6(A.aH,A.i.a5(x,1)+"x","Zoom",16,0.8,new B.eaw(p),x))
x=p.dy
j.push(B.j6(A.bt,A.a.b0(A.o.v(A.i.bc(x)),2,"0")+":00","Time",24,0,new B.eax(p),x))
x=p.fr
j.push(B.j6(A.bf,p.cA2(),"Season",365,0,new B.eay(p),x))
x=p.ch
w=p.CW
v=p.cx
s=p.cy
r=p.db
q=r?A.lA:D.Iw
j.push(new B.fh(C.a([new B.e0("Spin",x,new B.eaz(p),A6.Qi,A.aH,o),new B.e0("Night",w,new B.eaA(p),A.vi,A.aH,o),new B.e0("Borders",v,new B.eaq(p),D.bTN,A.aH,o),new B.e0("Names",s,new B.ear(p),M.DG,A.aH,o),new B.e0("Music",r,new B.eas(p),q,A.aH,o)],m),o,o))
return B.lW(A.aH,l,"A turning Earth with every country on it.\n\nDrag to spin it. Pinch with two fingers, or use the Zoom slider, to get closer. TAP any country to select it: the globe flies there, zooms in, and shows its capital, people, size and more.\n\nType a name in the search box to fly to any country. The buttons jump to a continent. Night shows which side of Earth is dark right now; move the Time slider to turn the day, and the Season slider to see the Sun move north and south through the year.\n\nTurn Music on for quiet space sounds.",k,"EARTH GLOBE",C.x(j,A.l,o,A.e,A.M,0,A.p))},
cA2(){var x,w,v
for(x=this.fr,w=0,v=0;v<12;++v)if(x>=D.aDl[v])w=v
return A.iw[w]+" "+(A.i.bc(x-D.aDl[w])+1)},
cgC(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=d.ay
j===$&&C.d()
x=j>0?d.e/j:0
w=d.e
v=w/79e8*100
u=d.c
t=new H.pA(1,A.o.F((A.d.cc(D.a6W,u)+1)*47,360),0.55,1).jd()
s=new B.e9U()
r=C.n(20)
q=C.K(t.j(0.6),A.r,1)
p=y.p
o=C.A(C.a([C.p(k,k,A.f,k,k,new C.o(t,k,k,k,k,k,A.a6),k,10,k,k,k,k,k,10),A.aa,C.E(C.c(d.a,k,1,A.a2,k,k,k,A.dt,k,k,k),1),C.aI(k,k,k,k,S.R6,k,k,k,new B.e9T(this),k,k,k,k,k,A.cl)],p),A.l,k,A.e,A.h,0,k,k)
n=d.d
u=C.c(u+(n.length!==0?" \xb7 "+n:""),k,k,k,k,k,k,X.hE,k,k,k)
n=D.dLj.h(0,d.b)
n=s.$2("CAPITAL",n==null?"\u2014":n)
m=w>0
w=C.A(C.a([n,A.aa,s.$2("PEOPLE",m?B.fP9(w):"\u2014")],p),A.l,k,A.e,A.h,0,k,k)
j=s.$2("SIZE",B.HS(j)+" km\xb2")
if(m)n=(x<10?A.i.a5(x,1):B.HS(x))+" per km\xb2"
else n="\u2014"
n=C.A(C.a([j,A.aa,s.$2("CROWDING",n)],p),A.l,k,A.e,A.h,0,k,k)
j=s.$2("WORLD SHARE",(v<0.1?A.i.a5(v,3):A.i.a5(v,1))+"% of people")
m=d.f
l=d.r
return C.p(k,C.x(C.a([o,u,A.O,w,A.O,n,A.O,C.A(C.a([j,A.aa,s.$2("ECONOMY",m>0?"$"+B.fP9(m*1e6)+" \xb7 "+l:l)],p),A.l,k,A.e,A.h,0,k,k)],p),A.B,k,A.e,A.M,0,A.p),A.f,k,k,new C.o(D.ZI,k,q,r,k,k,A.m),k,k,k,k,D.anF,k,k,k)}}
B.bjk.prototype={
a4(d6,d7){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0=this,d1=null,d2=d7.a,d3=d7.b,d4=$.T(),d5=C.L()
d5.r=D.Cu.gp(0)
d6.aE(new C.a4(0,0,0+d2,0+d3),d5)
x=new C.e1()
x.cT(4)
for(w=0;w<90;++w){d5=x.ai()
v=x.ai()
u=x.ai()
t=new C.as(A.T,A.Q,A.W,A.X,A.U)
t.r=A.c.j(0.25+x.ai()*0.5).gp(0)
d6.O(new C.r(d5*d2,v*d3),u*1.2+0.3,t)}d2/=2
d3/=2
s=new C.r(d2,d3)
r=d0.f
d5=C.L()
v=y.O
d5.san(new C.bT(A.z,0.5,A.x,d1,0,C.a([A.L,A.aH.j(0.35),A.L],v),D.dbq,d1).az(0,C.bX(s,r*1.1)))
d6.O(s,r*1.05,d5)
q=C.bX(s,r)
d5=C.L()
d5.san(D.eKA.az(0,q))
d6.O(s,r,d5)
d5=d6.c
J.bs(d5.save())
u=y.v
d4=new C.aH(d4.r,A.aj,d1,d1,C.a([],u))
d4.E(new C.jK(q))
d6.mz(0,d4)
p=d0.d*3.141592653589793/180
o=d0.e*3.141592653589793/180
n=Math.sin(p)
m=Math.cos(p)
l=Math.sin(o)
k=Math.cos(o)
j=C.L()
j.b=A.ac
p=j.c=0.7
j.r=A.c.j(0.1).gp(0)
i=new B.dqf(o,n,m,s,r)
for(h=-60;h<=60;h+=30){for(d4=h*3.141592653589793/180,g=d1,f=-180;f<=180;f+=4){e=i.$2(d4,f*3.141592653589793/180)
if(e==null){if(g!=null)d6.af(g,j)
g=d1}else{t=e.a
d=e.b
if(g==null){a0=$.T()
a1=C.a([],u)
g=new C.aH(a0.r,A.aj,d1,d1,a1)
a1.push(new C.aZ(t,d))
g.ac()}else{t=new C.aq(t,d)
g.r.push(t)
d=g.f
if(d!=null)t.aj(d)
g.ac()}}}if(g!=null)d6.af(g,j)}for(f=-180;f<180;f+=30){for(d4=f*3.141592653589793/180,g=d1,h=-88;h<=88;h+=4){e=i.$2(h*3.141592653589793/180,d4)
if(e==null){if(g!=null)d6.af(g,j)
g=d1}else{t=e.a
d=e.b
if(g==null){a0=$.T()
a1=C.a([],u)
g=new C.aH(a0.r,A.aj,d1,d1,a1)
a1.push(new C.aZ(t,d))
g.ac()}else{t=new C.aq(t,d)
g.r.push(t)
d=g.f
if(d!=null)t.aj(d)
g.ac()}}}if(g!=null)d6.af(g,j)}a2=d0.b
if(a2!=null&&d0.c.length===a2.a.length){a3=C.a([],y.E)
for(d4=a2.a,t=d0.c,d=!d0.y,a0=d0.w,a4=0;a4<d4.length;++a4){a5=d4[a4]
a6=a5===a0
a7=A.o.F((A.d.cc(D.a6W,a5.c)+1)*47,360)
$.T()
a8=new C.as(A.T,A.Q,A.W,A.X,A.U)
a1=a6?0.35:0.5
a8.r=new H.pA(1,a7,a1,a6?1:0.62).jd().gp(0)
a9=new C.as(A.T,A.Q,A.W,A.X,A.U)
a9.b=A.ac
a9.c=a6?2.2:p
a9.e=A.dP
a9.r=(a6?A.c:A.v.j(0.55)).gp(0)
for(a1=t[a4],b0=a1.length,b1=0;b1<a1.length;a1.length===b0||(0,C.I)(a1),++b1){b2=a1[b1]
b3=b2.length/4|0
b4=$.T()
b5=C.a([],u)
b6=new C.aH(b4.r,A.aj,d1,d1,b5)
for(b7=!1,w=0;w<b3;++w){b4=w*4
b8=b2[b4]
b9=b2[b4+1]
c0=b2[b4+2]
c1=b2[b4+3]
c2=c1*k+c0*l
c3=r*b9*(c0*k-c1*l)
c4=r*(m*b8-n*b9*c2)
if(n*b8+m*b9*c2>=0)b7=!0
else{c5=Math.sqrt(c3*c3+c4*c4)
if(c5>0){c3=c3/c5*r
c4=c4/c5*r}}b4=d2+c3
c6=d3-c4
if(w===0){b4=new C.aZ(b4,c6)
b5.push(b4)
c6=b6.f
if(c6!=null)b4.aj(c6)
b6.ac()}else{b4=new C.aq(b4,c6)
b5.push(b4)
c6=b6.f
if(c6!=null)b4.aj(c6)
b6.ac()}}if(!b7)continue
b4=new C.bA()
b5.push(b4)
b5=b6.f
if(b5!=null)b4.aj(b5)
b6.ac()
d6.af(b6,a8)
if(!d||a6)d6.af(b6,a9)
if(a6)a3.push(b6)}}for(u=a3.length,b1=0;b1<a3.length;a3.length===u||(0,C.I)(a3),++b1){g=a3[b1]
$.T()
t=new C.as(A.T,A.Q,A.W,A.X,A.U)
t.b=A.ac
t.c=5
t.r=A.c.j(0.25).gp(0)
t.y=A.ve
d6.af(g,t)}if(d0.z)for(u=d4.length,t=d0.r,d=!(t<1.8),t=14/t,b1=0;b1<d4.length;d4.length===u||(0,C.I)(d4),++b1){a5=d4[b1]
a6=a5===a0
if(!a6)if(d){a1=a5.ax
a1===$&&C.d()
a1=a1<t}else a1=!0
else a1=!1
if(a1)continue
h=a5.x*3.141592653589793/180
f=a5.w*3.141592653589793/180
if(n*Math.sin(h)+m*Math.cos(h)*Math.cos(f-o)<0.25)continue
e=i.$2(h,f)
if(e==null)continue
a1=a6?13:10.5
b0=a6?A.c:A.c.j(0.9)
c7=B.idm(a5.a,a1,b0)
b0=c7.b
a1=b0.c
b0=b0.a.c
b0=b0.gb8(b0)
c7.a4(d6,new C.r(e.a-a1/2,e.b-b0/2))}}if(d0.x){c8=-23.44*Math.cos(6.283185307179586*(d0.as+10)/365)*3.141592653589793/180
b8=Math.sin(c8)
b9=Math.cos(c8)
d4=-(d0.Q-12)*15*3.141592653589793/180-o
c9=Math.sin(d4)
c2=Math.cos(d4)
d4=A.i.D(n*b8+m*b9*c2,-1,1)
$.T()
u=C.L()
u.san(new C.bT(A.z,0.5,A.x,d1,0,C.a([A.L,A.L,D.bj3.j(0.78)],v),D.du8,d1).az(0,C.bX(new C.r(d2+b9*c9*r,d3-(m*b8-n*b9*c2)*r),r*(1.15+0.5*(1-d4)*0.5))))
d6.O(s,r,u)}$.T()
d2=C.L()
d2.san(new C.bT(A.z,0.5,A.x,d1,0,C.a([A.L,A.v.j(0.4)],v),D.dIP,d1).az(0,q))
d6.O(s,r,d2)
d5.restore()
d5=C.L()
d5.b=A.ac
d5.c=1.4
d5.r=A.hk.j(0.5).gp(0)
d6.O(s,r,d5)},
aC(d){return!0}}
B.aOR.prototype={
t(){var x=this,w=x.aa$
if(w!=null)w.a8(0,x.gbB())
x.aa$=null
x.a2()},
aZ(){this.b7()
this.b5()
this.bC()}}
B.aOS.prototype={
t(){var x,w,v
for(x=this.hf$,w=x.length,v=0;v<x.length;x.length===w||(0,C.I)(x),++v)x[v].a1(0)
x=this.he$
x===$&&C.d()
x.t()
this.bB0()}}
B.byi.prototype={}
B.Y6.prototype={
R(){return new B.boQ()}}
B.boQ.prototype={
gaWg(){var x=this.d
if(x===$)x=this.d=A.cT.av(16)
return x},
a_(){this.a3()
B.bbu().fi(new B.eXn(),new B.eXo(),y.P)},
B(d){var x=null,w=C.eV(x,x,x,!0,!0,D.Cu,x,1,!0,x,0,!1,x,!1,x,x,C.aI(x,x,x,x,D.atV,x,x,x,new B.eXk(d),x,x,x,x,x,x),x,!0,x,x,x,x,x,D.hbc,x,x,x,1,x,!0),v=C.n(18),u=A.aH.j(0.1),t=C.K(A.aH.j(0.35),A.r,1),s=y.p
return C.c5(w,D.Cu,C.cn(C.a([C.p(x,C.A(C.a([D.bXg,A.ar,C.E(C.c(D.dg5[this.gaWg()],x,x,x,x,x,x,D.fSj,x,x,x),1),C.aI(x,x,x,x,D.c7q,x,x,x,new B.eXl(this),x,x,x,x,"Another fact",x)],s),A.l,x,A.e,A.h,0,x,x),A.f,x,x,new C.o(u,x,t,v,x,x,A.m),x,x,x,x,A.bH,x,x,x),A.aA,C.cf(new B.eXm())],s),x,x,A.a1T,x,x,A.ah,!1),x,!1,!1,x,x)}}
B.XR.prototype={
R(){return B.idO()}}
B.boD.prototype={
crz(d){var x=d.c,w=B.idQ(x),v=d.e,u=v<=0?0:6.283185307179586*(this.f/v)+x*1.7
return new C.r(Math.cos(u)*w,Math.sin(u)*w)},
a_(){this.a3()
this.mn()},
mE(d){var x,w,v,u=this
u.e.fD(0,d,u.ay)
u.f=u.f+d*u.r
x=u.Q
if(x!=null){w=u.crz(x)
v=new C.r(-w.a,-w.b).aO(0,u.w)
w=C.kZ(u.x,v,1-Math.exp(-d*5))
w.toString
u.x=w}},
gcgG(){var x=this.ch
return new C.r(x.a/2,x.b/2).a7(0,this.x)},
cgK(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=this
for(x=d.a,w=d.b,v=null,u=30,t=0;t<10;++t){s=D.Ep[t]
r=j.ch
q=j.x
p=s.c
o=p===0?0:30+150*Math.sqrt(p/30.1)
n=s.e
m=n<=0?0:6.283185307179586*(j.f/n)+p*1.7
p=Math.cos(m)
n=Math.sin(m)
l=j.w
p=r.a/2+q.a+p*o*l-x
l=r.b/2+q.b+n*o*l-w
k=Math.sqrt(p*p+l*l)
if(k<u){u=k
v=s}}return v},
b3t(d){this.l(new B.ePK(this,d))
C.f2()
B.mH("bell",D.dJ_[A.o.F(A.d.cc(D.Ep,d),10)]+12,1000,0.5)},
B(d){var x,w,v,u,t,s,r,q,p,o=this,n=null,m=o.z,l=y.p,k=C.a([C.aI(n,n,n,n,D.p2,n,n,n,new B.ePV(o,d),n,n,n,n,"Share",n)],l),j=C.cf(new B.ePW(o,m)),i=C.a([new B.e0("All",!1,new B.ePX(o),A.a4U,A.aQ,n)],l)
for(x=0;x<10;++x){w=D.Ep[x]
i.push(new B.e0(w.a,o.z===w,new B.ePY(o,w),n,C.b1(w.z),n))}v=Math.log(o.r+1)
u=Math.log(3651)
t=o.r
t=t<10?A.i.a5(t,0)+" d/s":""+A.i.S(t)+" d/s"
u=B.j6(A.aQ,t,"Time",1,0,new B.ePZ(o),v/u)
v=o.w
v=B.j6(A.aQ,A.i.a5(v,1)+"x","Zoom",9,0.5,new B.eQ_(o),v)
t=o.as
s=o.at
r=o.ax
q=o.ay
p=q?A.lA:D.Iw
return B.lW(A.aQ,k,"The Sun and its worlds, each going round at its own real speed. The distances are squeezed so everything fits.\n\nTap a planet, or use the buttons, to fly to it and read about it: how big it is, how long its day and year are, how strong its gravity is, how hot it is, and what you would weigh there.\n\nThe Time slider makes the planets move faster: at high speed you can watch a whole year of Earth go by in seconds, and see how much slower Neptune is. Pinch to zoom and drag to look around.",j,"SOLAR SYSTEM",C.x(C.a([new B.fh(i,"GO TO",n),u,v,new B.fh(C.a([new B.e0("Orbits",t,new B.eQ0(o),n,A.aQ,n),new B.e0("Names",s,new B.eQ1(o),n,A.aQ,n),new B.e0("Asteroids",r,new B.eQ2(o),n,A.aQ,n),new B.e0("Music",q,new B.eQ3(o),p,A.aQ,n)],l),n,n)],l),A.l,n,A.e,A.M,0,A.p))},
cgH(d){var x,w,v,u,t,s=null,r=C.b1(d.z),q=d.c,p=q*8.317,o=new B.ePI(),n=C.n(20),m=C.K(r.j(0.6),A.r,1),l=C.p(s,s,A.f,s,s,new C.o(r,s,s,s,s,s,A.a6),s,12,s,s,s,s,s,12),k=d.b,j=k==="star"
if(j)k="Star"
else k=k==="dwarf"?"Dwarf planet":"Planet"
x=y.p
k=C.A(C.a([l,A.aa,C.E(C.c(d.a+"  \xb7  "+k,s,s,s,s,s,s,A.jo,s,s,s),1),C.aI(s,s,s,s,S.R6,s,s,s,new B.ePH(this),s,s,s,s,s,A.cl)],x),A.l,s,A.e,A.h,0,s,s)
l=C.c(d.y,s,s,s,s,s,s,A8.FE,s,s,s)
w=o.$2("WIDTH",B.HS(d.d*2)+" km")
v=q===0
q=C.A(C.a([w,A.aa,o.$2("FROM THE SUN",v?"\u2014":C.v(q)+" AU ("+B.HS(q*149.6)+" million km)")],x),A.l,s,A.e,A.h,0,s,s)
w=d.e
w=o.$2("ONE YEAR",w===0?"\u2014":new B.ePJ().$1(w))
u=d.f
w=C.A(C.a([w,A.aa,o.$2("ONE DAY",u>=48?A.i.a5(u/24,0)+" Earth days":A.i.a5(u,1)+" hours")],x),A.l,s,A.e,A.h,0,s,s)
u=d.r
t=u>50?0:1
t=C.A(C.a([o.$2("GRAVITY",C.v(u)+" m/s\xb2 \xb7 a 50 kg person weighs "+A.i.a5(50*u/9.81,t)+" kg"),A.aa,o.$2("TEMPERATURE",""+A.o.S(d.x)+"\xb0C")],x),A.l,s,A.e,A.h,0,s,s)
u=o.$2("MOONS",j?"\u2014":""+d.w)
if(v)j="\u2014"
else j=p<90?A.i.a5(p,1)+" minutes":A.i.a5(p/60,1)+" hours"
return C.p(s,C.x(C.a([k,A.au,l,A.O,q,A.O,w,A.O,t,A.O,C.A(C.a([u,A.aa,o.$2("SUNLIGHT TAKES",j)],x),A.l,s,A.e,A.h,0,s,s)],x),A.B,s,A.e,A.M,0,A.p),A.f,s,s,new C.o(D.ZI,s,m,n,s,s,A.m),s,s,s,s,D.anF,s,s,s)}}
B.bwj.prototype={
a4(a6,a7){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=null,a4=a7.a,a5=a7.b
$.T()
x=C.L()
x.r=D.Cu.gp(0)
a6.aE(new C.a4(0,0,0+a4,0+a5),x)
w=new C.e1()
w.cT(8)
for(v=0;v<110;++v){x=w.ai()
u=w.ai()
t=w.ai()
s=new C.as(A.T,A.Q,A.W,A.X,A.U)
s.r=A.c.j(0.2+w.ai()*0.5).gp(0)
a6.O(new C.r(x*a4,u*a5),t*1.2+0.3,s)}a4=this.b
r=a4.gcgG()
q=a4.w
if(a4.as)for(a5=A.d.gae(D.Ep),x=new C.eK(a5,new B.fho());x.C();){u=a5.gP(0).c
u=u===0?0:30+150*Math.sqrt(u/30.1)
t=new C.as(A.T,A.Q,A.W,A.X,A.U)
t.b=A.ac
t.c=1
t.r=A.c.j(0.12).gp(0)
a6.O(r,u*q,t)}if(a4.ax)for(a5=a4.CW,x=r.a,u=r.b,t=a4.cx,v=0;v<a5.length;++v){s=a5[v]
p=a4.f
o=t[v]
n=s+p*0.0016/o
m=(o===0?0:30+150*Math.sqrt(o/30.1))*q
s=Math.cos(n)
p=Math.sin(n)
o=new C.as(A.T,A.Q,A.W,A.X,A.U)
o.r=A.c.j(0.5).gp(0)
a6.O(new C.r(x+s*m,u+p*m),0.9,o)}l=B.idP(A.d.gH(D.Ep))*Math.sqrt(q)*1.4
a5=l*3.2
x=C.L()
u=y.O
x.san(new C.bT(A.z,0.5,A.x,a3,0,C.a([A.aQ.j(0.5),A.L],u),a3,a3).az(0,C.bX(r,a5)))
a6.O(r,a5,x)
x=C.L()
x.san(D.eKu.az(0,C.bX(r,l)))
a6.O(r,l,x)
if(a4.at){k=B.hEq("Sun",10.5,A.ab)
k.a4(a6,r.a7(0,new C.r(-k.b.c/2,l+4)))}for(a5=A.d.gae(D.Ep),x=new C.eK(a5,new B.fhp()),t=q>1.6,s=r.a,p=r.b,o=a6.c;x.C();){j=a5.gP(0)
i=j.c
m=i===0?0:30+150*Math.sqrt(i/30.1)
h=j.e
n=h<=0?0:6.283185307179586*(a4.f/h)+i*1.7
i=s+Math.cos(n)*m*q
h=p+Math.sin(n)*m*q
g=new C.r(i,h)
m=(1.5+1.6*Math.log(j.d/1000+1))*Math.sqrt(q)
f=C.b1(j.z)
e=j.a
if(e==="Saturn"){J.bs(o.save())
o.translate(i,h)
o.rotate(-22.91831180523293,0,0)
d=C.bY(A.J,m*1.3,m*4.2)
a0=new C.as(A.T,A.Q,A.W,A.X,A.U)
a0.b=A.ac
a0.c=m*0.45
a0.r=A.bM.j(0.55).gp(0)
a6.c1(d,a0)
o.restore()}d=new C.as(A.T,A.Q,A.W,A.X,A.U)
d.r=f.j(0.3).gp(0)
d.y=A.ve
a6.O(g,m+3,d)
d=new C.as(A.T,A.Q,A.W,A.X,A.U)
a0=C.ap(f,A.v,0.55)
a0.toString
d.san(new C.bT(O.BS,0.5,A.x,a3,0,C.a([A.c,f,a0],u),T.SX,a3).az(0,C.bX(g,m)))
a6.O(g,m,d)
if(j===a4.z){j=new C.as(A.T,A.Q,A.W,A.X,A.U)
j.b=A.ac
j.c=2
j.r=A.c.gp(0)
a6.O(g,m+7,j)}if(t&&e==="Earth"){n=a4.f/27.3*2*3.141592653589793
a1=m+11*Math.sqrt(q)
j=Math.cos(n)
d=Math.sin(n)
a0=Math.sqrt(q)
a2=new C.as(A.T,A.Q,A.W,A.X,A.U)
a2.r=A.c.gp(0)
a6.O(new C.r(i+j*a1,h+d*a1),1.8*a0,a2)}if(t&&e==="Jupiter")for(v=0;v<4;++v){n=a4.f/D.dmg[v]*2*3.141592653589793
a1=m+(6+v*4)*Math.sqrt(q)
j=Math.cos(n)
d=Math.sin(n)
a0=Math.sqrt(q)
a2=new C.as(A.T,A.Q,A.W,A.X,A.U)
a2.r=A.ab.gp(0)
a6.O(new C.r(i+j*a1,h+d*a1),1.4*a0,a2)}if(a4.at){k=B.hEq(e,10.5,A.ab)
k.a4(a6,new C.r(i+-k.b.c/2,h+(m+4)))}}},
aC(d){return!0}}
B.X2.prototype={
R(){var x=y.i
return new B.aGs(new B.Qs(A.cT),C.c2(5,0,!1,x),C.c2(5,0,!1,x),C.c2(5,null,!1,y.B),A.J,A.J,C.a([],y.g),$,A.bG,0,C.a([],y.X),null,null)}}
B.aGs.prototype={
cEG(){var x,w,v,u,t=this
t.x=!0
t.y=0
for(x=t.z,w=t.Q,v=t.as,u=0;u<5;++u){x[u]=0
w[u]=0
v[u]=null}},
cgJ(){var x,w,v,u,t=this,s="An oval orbit: it goes round Earth again and again."
t.cx=D.exg
t.cy=new C.r(t.ay,0)
x=t.db
A.d.a6(x)
x.push(t.cx)
t.CW=!0
t.dy=0
w=Math.sqrt(58.86870477034412)
v=Math.sqrt(117.73740954068823)
x=t.ay
u=Math.abs(6771*x*x/398600-1)
if(x>=v)t.dx="It escapes Earth and never comes back."
else if(x>=w)t.dx=u<0.03?"A perfect circle: it orbits Earth forever.":s
else t.dx=6771*(1-u)/(1+u)>6371?s:"It is too slow, so it falls back to the ground."
E.dE(150,"",400,0,0.5,"noise")
E.dE(90,"",300,1.5,0.6,"sine")
t.l(new B.eaE())},
a_(){this.a3()
this.mn()},
mE(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=this
j.e.fD(0,d,j.d!=="drop")
if(j.d==="drop"&&j.x){x=d*j.w
j.y+=x
for(w=j.z,v=x/12,u=j.Q,t=j.as,s=0;s<5;++s){if(t[s]!=null)continue
r=D.AA[s]
q=r.c
if(j.f){p=j.r?1:0
o=1.6*q*p}else{p=j.r?1:0
o=0.002*q*p}for(q=r.b,n=0;n<12;++n){p=u[s]
p+=(q-o*p*Math.abs(p))*v
u[s]=p
p=w[s]+p*v
w[s]=p
if(p>=20){w[s]=20
t[s]=j.y
if(r.a!=="Sun")E.dE(60+q*5,"",220,0.6,0.55,"sine")
break}}}if(A.d.cw(t,new B.eb6()))j.x=!1}if(j.d==="cannon"&&j.CW){x=d*900/30
for(w=x/2,s=0;s<30;++s){u=j.cx
t=u.a
u=u.b
m=Math.sqrt(t*t+u*u)
u=j.cx
t=-398600/(m*m*m)
q=u.a
u=u.b
p=j.cy
l=p.a+q*t*w
t=p.b+u*t*w
j.cy=new C.r(l,t)
l=q+l*x
t=u+t*x
j.cx=new C.r(l,t)
k=Math.sqrt(l*l+t*t)
t=j.cy
l=j.cx
u=-398600/(k*k*k)
q=l.a
l=l.b
j.cy=new C.r(t.a+q*u*w,t.b+l*u*w)
j.dy+=x
if(Math.sqrt(q*q+l*l)<6371){j.CW=!1
E.dE(70,"",350,0,0.7,"noise")
break}}w=j.db
if(w.length===0||A.d.gal(w).aI(0,j.cx).gcL()>120)w.push(j.cx)
if(w.length>700)A.d.cJ(w,0)
if(j.cx.gcL()>6e5)j.CW=!1}},
B(d){var x,w,v,u,t,s,r,q=this,p=null,o=q.d
if(o==="drop")o=q.bSQ()
else o=o==="weight"?q.cMq():q.bKO()
x=y.p
w=C.a([],x)
for(v=0;v<3;++v){u=D.dFy[v]
w.push(new B.e0(u.b,q.d===u.a,new B.eaT(q,u),u.c,A.cU,p))}w=C.a([new B.fh(w,p,p)],x)
if(q.d==="drop"){t=q.f
s=q.r
r=s?"Air on":"Air off"
s=C.a([new B.e0("Hammer",!t,new B.eaU(q),A1.DE,A.cU,p),new B.e0("Feather",t,new B.eaV(q),M.Du,A.cU,p),new B.e0(r,s,new B.eaZ(q),A.Ih,A.aH,p)],x)
r=q.w
A.d.u(w,C.a([new B.fh(s,p,p),B.j6(A.cU,""+A.i.S(r*100)+"%","Slow motion",1,0.05,new B.eb_(q),r),new B.fh(C.a([new B.fI(A.pV,"Drop!",new B.eb0(q),A.bf,p)],x),p,p)],x))}if(q.d==="weight"){t=q.at
t=B.j6(A.cU,""+A.i.S(t)+" kg","Your weight",120,20,new B.eb1(q),t)
s=q.ax
A.d.u(w,C.a([t,B.j6(A.cU,""+A.i.S(s*100)+" cm","Your jump",1.2,0.1,new B.eb2(q),s)],x))}if(q.d==="cannon"){t=q.ay
t=B.j6(A.cU,A.i.a5(t,1)+" km/s","Speed",13,0,new B.eb3(q),t)
s=q.ch
A.d.u(w,C.a([t,B.j6(A.cU,A.i.a5(s,1)+"x out","View",8,0.5,new B.eb4(q),s),new B.fh(C.a([new B.fI(A.p0,"Fire!",q.gcgI(),A.bf,p),new B.fI(A.pV,"Falls",new B.eb5(q),A.c,p),new B.fI(A.pT,"Orbit 7.7",new B.eaW(q),A.c,p),new B.fI(D.bWJ,"Oval 9",new B.eaX(q),A.c,p),new B.fI(A.DJ,"Escape",new B.eaY(q),A.c,p)],x),p,p)],x))}return B.lW(A.cU,A.fe,"Gravity is the pull that every thing with mass has on every other thing. The more mass, the stronger the pull.\n\nDROP: let a hammer or a feather fall on the Moon, Mars, Earth, Jupiter and the Sun at the same time. With air switched off they land together on every world (as the Apollo astronauts showed), but a world with stronger gravity makes them land sooner. Switch air on and the feather floats.\n\nWEIGHT: see what you would weigh on each world, and how high you could jump.\n\nNEWTON'S CANNON: fire a ball sideways from a very tall mountain. Too slow and it falls back. At about 7.9 km/s it keeps missing the ground and goes into orbit. At 11.2 km/s it escapes Earth completely. This is how satellites and the Moon stay up.",o,"GRAVITY LAB",C.x(w,A.l,p,A.e,A.M,0,A.p))},
bSQ(){return new C.D(D.bFk,C.cf(new B.eaD(this)),null)},
cMq(){var x,w,v,u=null,t=[D.fc_,D.fdV,D.fe2,D.few,D.fe0,D.feE,D.fcO,D.ff2,D.fdy],s=y.p,r=C.a([D.fZr,A.S],s)
for(x=0;x<9;++x){w=t[x]
v=C.b1(w.c)
r.push(new C.D(A.cy,new C.c1(A.aK,A.e,A.h,A.l,u,A.p,u,0,C.a([new C.a6(62,u,C.c(w.a,u,u,u,u,u,u,new C.H(!0,v,u,u,u,u,12.5,A.u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u),u,u,u),u),new C.bu(1,A.ba,new C.Cm(new B.eaF(this,w),u),u)],s),u),u))}r.push(A.au)
r.push(D.h0T)
return C.cn(r,u,u,A.hy,u,u,A.ah,!1)},
bKO(){return C.cf(new B.eaB(this))}}
B.bes.prototype={
a4(d,e){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=e.a,i=e.b,h=$.T(),g=C.L()
g.r=D.Cu.gp(0)
d.aE(new C.a4(0,0,0+j,0+i),g)
x=new C.e1()
x.cT(2)
for(w=0;w<80;++w){g=x.ai()
v=x.ai()
u=x.ai()
t=new C.as(A.T,A.Q,A.W,A.X,A.U)
t.r=A.c.j(0.2+x.ai()*0.5).gp(0)
d.O(new C.r(g*j,v*i),u*1.1+0.3,t)}j=l.c
s=6371*j
i=l.b
g=C.L()
g.san(new C.bT(A.z,0.5,A.x,k,0,C.a([A.L,A.aH.j(0.35),A.L],y.O),D.dv7,k).az(0,C.bX(i,s*1.1)))
d.O(i,s*1.06,g)
g=C.L()
g.san(D.eKq.az(0,C.bX(i,s)))
d.O(i,s,g)
r=i.a7(0,new C.r(0,-s))
h=h.r
g=y.v
q=new C.aH(h,A.aj,k,k,C.a([],g))
v=r.a
u=r.b
t=u+3
q.E(new C.aZ(v-16,t))
q.E(new C.aq(v,u-400*j-4))
q.E(new C.aq(v+16,t))
q.E(new C.bA())
t=C.L()
t.r=A.an.gp(0)
d.af(q,t)
t=r.a7(0,new C.r(0,-400*j-6))
v=C.L()
v.r=A.c.gp(0)
d.O(t,4,v)
v=l.e
if(v.length>1){g=C.a([],g)
p=new C.aH(h,A.aj,k,k,g)
h=i.a
u=i.b
p.E(new C.aZ(h+A.d.gH(v).a*j,u+A.d.gH(v).b*j))
for(v=C.cS(v,1,k,C.U(v).c),t=v.$ti,v=new C.bQ(v,v.gJ(0),t.k("bQ<aj.E>")),t=t.k("aj.E");v.C();){o=v.d
if(o==null)o=t.a(o)
o=new C.aq(h+o.a*j,u+o.b*j)
g.push(o)
n=p.f
if(n!=null)o.aj(n)
p.ac()}$.T()
h=C.L()
h.b=A.ac
h.c=2.4
h.d=A.bF
h.r=A.cU.j(0.9).gp(0)
d.af(p,h)}if(l.f){h=l.d
m=i.a7(0,new C.r(h.a*j,h.b*j))
j=C.L()
j.r=A.cU.j(0.4).gp(0)
j.y=L.oQ
d.O(m,7,j)
j=C.L()
j.r=A.c.gp(0)
d.O(m,4,j)}},
aC(d){return!0}}
B.XK.prototype={
R(){return new B.boA(new C.cy(null,y.z),$,A.bG,0,C.a([],y.X),null,null)}}
B.boA.prototype={
a_(){this.a3()
this.mn()},
mE(d){},
B(d){var x,w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=D.Tb[m.e],j=D.Tb[m.f],i=k.b>=j.b,h=i?k:j,g=i?j:k
i=h.b
x=g.b
w=i/x
v=y.p
u=C.a([C.aI(l,l,l,l,D.p2,l,l,l,new B.eIs(m,d),l,l,l,l,"Share",l)],v)
t=C.E(C.b4(l,l,l,new B.bvR(g,h,w,l),A.hf),1)
s=h.a
r=w<10?A.i.a5(w,1):B.HS(w)
q=g.a
r=C.c(s+" is "+r+" times wider than "+q,l,l,l,l,l,l,A.hs,A.K,l,l)
p=B.HS(w*w*w)
o=A.a.c7(q,"s")?"":"s"
i=C.x(C.a([t,C.p(l,C.x(C.a([r,A.au,C.c("About "+p+" "+q+o+" would fit inside "+s+".",l,l,l,l,l,l,P.uo,A.K,l,l),A.bw,C.c(q+": "+B.HS(x*2)+" km wide. "+s+": "+B.HS(i*2)+" km wide.",l,l,l,l,l,l,P.Bv,A.K,l,l)],v),A.l,l,A.e,A.h,0,A.p),A.f,l,l,l,l,l,l,l,D.bHH,l,l,1/0)],v),A.l,l,A.e,A.h,0,A.p)
s=C.a([],v)
for(n=0;n<10;++n){x=D.Tb[n]
s.push(new B.e0(x.a,m.e===n,new B.eIt(m,n),l,C.b1(x.c),l))}x=C.a([],v)
for(n=0;n<10;++n){t=D.Tb[n]
x.push(new B.e0(t.a,m.f===n,new B.eIu(m,n),l,C.b1(t.c),l))}return B.lW(A.c3,u,"Pick two things in space and see them side by side at their true relative size. The text tells you how many times wider one is, and how many of the smaller one would fit inside the bigger.\n\nTry Earth and the Sun, then the Sun and Betelgeuse, to feel how big space really is.",new C.e5(i,m.d),"SIZE COMPARE",C.x(C.a([new B.fh(s,"FIRST",l),new B.fh(x,"SECOND",l)],v),A.l,l,A.e,A.M,0,A.p))}}
B.bvR.prototype={
a4(d,e){var x,w,v,u,t,s,r,q,p,o,n,m,l=null,k=e.a,j=e.b
$.T()
x=C.L()
x.r=D.bql.gp(0)
d.aE(new C.a4(0,0,0+k,0+j),x)
w=new C.e1()
w.cT(6)
for(v=0;v<70;++v){x=w.ai()
u=w.ai()
t=w.ai()
s=new C.as(A.T,A.Q,A.W,A.X,A.U)
s.r=A.c.j(0.2+w.ai()*0.4).gp(0)
d.O(new C.r(x*k,u*j),t+0.3,s)}r=Math.min(k/2-16,j/2-10)*0.98
q=Math.max(r/this.d,0.8)
k*=0.5
j*=0.5
p=new C.r(k,j)
x=new B.ffw(d)
u=this.c
x.$3(p,r,C.b1(u.c))
t=r-q
o=new C.r(k-r+q+6+t*0.1,j+r-q-6-t*0.05)
t=this.b
x.$3(o,q,C.b1(t.c))
x=C.L()
x.b=A.ac
x.c=1.4
x.r=A.ab.gp(0)
d.O(o,q+3,x)
n=C.h2(l,A.cK,l,l,l,C.d4(l,l,l,l,l,l,l,l,l,D.fJH,t.a),A.a7,A.cf,l,A.e5,A.cg)
n.eY()
t=n.b
x=t.c
k=-q
t=t.a.c
if(k-t.gb8(t)-6<4)k=q+6
else{j=n.b.a.c
j=k-j.gb8(j)-6
k=j}n.a4(d,o.a7(0,new C.r(-x/2,k)))
m=C.h2(l,A.cK,l,l,l,C.d4(l,l,l,l,l,l,l,l,l,D.fNe,u.a),A.a7,A.cf,l,A.e5,A.cg)
m.eY()
u=m.b
k=u.c
u=u.a.c
m.a4(d,p.a7(0,new C.r(-k/2,-u.gb8(u)/2)))},
aC(d){return!0}}
B.aOT.prototype={
t(){var x=this,w=x.aa$
if(w!=null)w.a8(0,x.gbB())
x.aa$=null
x.a2()},
aZ(){this.b7()
this.b5()
this.bC()}}
B.bBD.prototype={
t(){var x,w,v
for(x=this.hf$,w=x.length,v=0;v<x.length;x.length===w||(0,C.I)(x),++v)x[v].a1(0)
x=this.he$
x===$&&C.d()
x.t()
this.bB2()}}
B.aPo.prototype={
t(){var x=this,w=x.aa$
if(w!=null)w.a8(0,x.gbB())
x.aa$=null
x.a2()},
aZ(){this.b7()
this.b5()
this.bC()}}
B.bBO.prototype={
t(){var x,w,v
for(x=this.hf$,w=x.length,v=0;v<x.length;x.length===w||(0,C.I)(x),++v)x[v].a1(0)
x=this.he$
x===$&&C.d()
x.t()
this.bBy()}}
B.aPr.prototype={
t(){var x=this,w=x.aa$
if(w!=null)w.a8(0,x.gbB())
x.aa$=null
x.a2()},
aZ(){this.b7()
this.b5()
this.bC()}}
B.bBQ.prototype={
t(){var x,w,v
for(x=this.hf$,w=x.length,v=0;v<x.length;x.length===w||(0,C.I)(x),++v)x[v].a1(0)
x=this.he$
x===$&&C.d()
x.t()
this.bBB()}}
B.R1.prototype={}
B.W3.prototype={
R(){return B.idM()}}
B.bnc.prototype={
a_(){this.a3()
this.mn()},
mE(d){var x,w,v,u,t,s=this
s.f+=d
s.e.fD(0,d,s.y)
for(x=s.z,w=x.length,v=0;v<x.length;x.length===w||(0,C.I)(x),++v){u=x[v]
u.a=u.a+d*u.c/Math.pow(u.b,1.5)
t=u.b
t-=d*(0.5+1.6/t)*0.6
u.b=t
if(t<=1){u.e=0;++s.as
E.dE(70,"",500,0.3,0.5,"sine")}}A.d.bq(x,new B.dSq())},
b3u(d){var x,w,v,u=this.Q
if(u.A(0,A.az))return
x=this.gbcK()
w=d.aI(0,new C.r(u.a/2,u.b*0.42))
v=A.i.D(w.gcL()/x,1.5,12)
u=Math.atan2(w.b,w.a)
this.z.push(new B.R1(u,v,1.2,new C.rN(1,30+A.cT.ai()*40,0.9,0.7).jd()))
B.mH("bell",60+A.i.S(12-v)*2,400,0.35)},
gbcK(){var x=this.Q
return Math.min(x.a,x.b)*0.07},
B(d){var x,w,v,u,t,s,r,q,p=this,o=null,n=p.z,m=Math.sqrt(1-1/A.i.D(n.length===0?3:new C.O(n,new B.dSe(),C.U(n).k("O<1,G>")).eH(0,A.pt),1.0001,99))
n=y.p
x=C.a([C.aI(o,o,o,o,D.p2,o,o,o,new B.dSf(p,d),o,o,o,o,"Share",o)],n)
w=C.cf(new B.dSg(p,m))
v=Math.log(p.r)
u=Math.log(1e10)
t=p.r
t=t<1000?A.i.a5(t,0)+" Suns":B.fP9(t)+" Suns"
u=B.j6(A.bl,t,"Mass",1,0,new B.dSi(p),v/u)
v=C.a([new B.e0("Star (10)",!1,new B.dSj(p),o,A.bl,o),new B.e0("Cygnus X-1 (21)",!1,new B.dSk(p),o,A.bl,o),new B.e0("Milky Way core (4 million)",!1,new B.dSl(p),o,A.bl,o),new B.e0("M87 (6.5 billion)",!1,new B.dSm(p),o,A.bl,o)],n)
t=p.w
s=p.x
r=p.y
q=r?A.lA:D.Iw
return B.lW(A.bl,x,'A black hole is so heavy, squeezed into so small a place, that nothing can get out of it once it crosses the edge, called the event horizon. Not even light.\n\nTap anywhere to throw in a star and watch it spiral inwards, faster and faster. The stars behind the hole look bent, because the hole bends light itself (that is called lensing).\n\nChange the mass to see how big its edge is: if the Sun were squeezed into a ball only 3 km wide it would be a black hole. The "Time" number shows how much slower a clock runs for the star that is closest to the edge, as seen by someone far away.',w,"BLACK HOLE",C.x(C.a([u,new B.fh(v,"LIKE",o),new B.fh(C.a([new B.e0("Glowing ring",t,new B.dSn(p),o,A.bl,o),new B.e0("Bent light",s,new B.dSo(p),o,A.bl,o),new B.e0("Music",r,new B.dSp(p),q,A.bl,o),new B.fI(A.ni,"Clear",new B.dSh(p),A.c,o)],n),o,o)],n),A.l,o,A.e,A.M,0,A.p))},
ah4(d,e){var x=null
return C.E(C.x(C.a([C.c(d,x,x,x,x,x,x,D.fFb,x,x,x),A.bw,C.c(e,x,2,x,x,x,x,A7.y1,A.K,x,x)],y.p),A.l,x,A.e,A.h,0,A.p),1)}}
B.bdN.prototype={
a4(a9,b0){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=b0.a,a8=b0.b
$.T()
x=C.L()
x.r=D.bt6.gp(0)
a9.aE(new C.a4(0,0,0+a7,0+a8),x)
x=a7/2
w=a8*0.42
v=new C.r(x,w)
u=this.b
t=u.gbcK()*(0.9+0.35*Math.log(u.r)/2.302585092994046)
for(s=u.at,r=s.length,q=t*t*5,p=t*2.2,o=0;o<s.length;s.length===r||(0,C.I)(s),++o){n=s[o]
m=n.a*a7
l=n.b*a8
k=new C.r(m,l)
if(u.x){m-=x
l-=w
j=Math.sqrt(m*m+l*l)
if(j>1){i=j+A.i.D(q/j,0,p)
k=new C.r(x+m/j*i,w+l/j*i)}}m=new C.as(A.T,A.Q,A.W,A.X,A.U)
m.r=A.c.j(0.6).gp(0)
a9.O(k,0.9,m)}if(u.x){a7=C.L()
a7.b=A.ac
a7.c=2
a7.r=A.c.j(0.25).gp(0)
a7.y=K.a2p
a9.O(v,t*1.5,a7)}if(u.w)for(a7=t*0.2,h=0;h<90;++h){g=h/90
a8=1.6+g*2.6
f=t*a8
e=1.4/Math.pow(a8,1.5)
d=g*40
for(a8=1-g,s=0.25+0.6*a8,r=-(f*0.55),a8=0.18*a8,a0=0;a0<4;++a0){a1=d+a0*3.141592653589793/2+u.f*e*2.2
a2=Math.sin(a1)>0
a3=Math.cos(a1)*f
q=Math.sin(a1)
p=C.ap(A.uO,A.fL,g)
p.toString
m=Math.cos(a1)
$.T()
l=new C.as(A.T,A.Q,A.W,A.X,A.U)
i=a2?1:0.85
l.r=p.j(s*(0.4+(0.5+0.5*m)*0.6)*i).gp(0)
a9.O(new C.r(x+a3,w+q*f*0.28),1.3,l)
if(!a2&&u.x){q=Math.sin(-a1)
m=new C.as(A.T,A.Q,A.W,A.X,A.U)
m.r=p.j(a8).gp(0)
a9.O(new C.r(x+a3*0.5,w+(r*Math.abs(q)*0.6-a7)),1,m)}}}a7=t*1.25
$.T()
a8=C.L()
a8.san(new C.bT(A.z,0.5,A.x,null,0,C.a([A.v,A.v.j(0)],y.O),D.d5j,null).az(0,C.bX(v,a7)))
a9.O(v,a7,a8)
a8=C.L()
a8.r=A.v.gp(0)
a9.O(v,t,a8)
a8=C.L()
a8.b=A.ac
a8.c=1
a8.r=A.bl.j(0.55).gp(0)
a9.O(v,t,a8)
for(a7=u.z,a8=a7.length,o=0;o<a7.length;a7.length===a8||(0,C.I)(a7),++o){a4=a7[o]
f=t*a4.b
u=x+Math.cos(a4.a)*f
s=w+Math.sin(a4.a)*f*0.9
a5=1+A.i.D(3.5/a4.b,0,5)
a6=3*a5
r=-Math.sin(a4.a)*a6
q=Math.cos(a4.a)*a6
p=new C.as(A.T,A.Q,A.W,A.X,A.U)
p.c=4.2/Math.sqrt(a5)
p.d=A.bF
m=a4.d
p.r=m.j(A.i.D(a4.b/2,0.2,1)).gp(0)
a9.ah(new C.r(u-r,s-q),new C.r(u+r,s+q),p)
p=new C.as(A.T,A.Q,A.W,A.X,A.U)
p.r=m.j(0.2).gp(0)
p.y=L.oQ
a9.O(new C.r(u,s),6,p)}},
aC(d){return!0}}
B.agO.prototype={}
B.X_.prototype={
R(){var x=y.q,w=y.g
return new B.bnH(new C.cy(null,y.z),new B.Qs(A.cT),C.a([],x),A.J,A.J,C.a([],x),C.a([],w),C.a([],w),C.a([],w),C.a([],w),A.J,A.J,$,A.bG,0,C.a([],y.X),null,null)}}
B.bnH.prototype={
a_(){this.a3()
this.a0T()
this.mn()},
a0T(){var x,w,v,u,t,s,r,q,p=this,o=new C.e1()
o.cT(5)
x=C.a([],y.q)
w=p.Q==="elliptical"?1800:2300
for(v=0;v<w;++v)if(p.Q==="elliptical"){u=Math.pow(o.ai(),1.6)
x.push(new B.agO(u,o.ai()*3.141592653589793*2,(o.ai()-0.5)*0.5*u,25+o.ai()*20))}else{u=Math.pow(o.ai(),0.8)
t=o.av(p.f)
s=o.ai()
r=t*(6.283185307179586/p.f)+u*p.r+(s-0.5)*(0.55-u*0.25)
s=p.w
if(s>0&&u<0.3*s+0.05){s=o.h9()?0:3.141592653589793
r=s+(o.ai()-0.5)*0.25}s=o.ai()
q=u<0.25?35+o.ai()*15:205+o.ai()*50
x.push(new B.agO(u,r,(s-0.5)*0.05*(1-u),q))}p.ay=x},
cEw(){var x,w,v,u,t,s,r,q,p,o,n,m,l=this
l.ch=!0
l.CW=D.ezz
l.cx=D.ezC
x=new C.e1()
x.cT(9)
w=l.cy
A.d.a6(w)
v=C.a([],y.q)
for(u=0;u<900;++u)v.push(new B.agO(Math.pow(x.ai(),0.8)*0.7,x.ai()*3.141592653589793*2,0,320+x.ai()*30))
A.d.u(w,v)
v=y.g
t=C.a([],v)
for(s=w.length,r=0;r<w.length;w.length===s||(0,C.I)(w),++r){q=w[r]
p=q.b
o=q.a
t.push(new C.r(Math.cos(p)*o,Math.sin(p)*o))}l.dx=t
t=C.a([],v)
for(s=w.length,r=0;r<w.length;w.length===s||(0,C.I)(w),++r){q=w[r]
p=q.b
o=q.a+0.2
t.push(new C.r(-Math.sin(p)*0.55/Math.sqrt(o),Math.cos(p)*0.55/Math.sqrt(o)))}l.fr=t
w=C.a([],v)
for(t=l.ay,s=y.r,t=C.cS(t,0,C.dw(900,"count",s),C.U(t).c),p=t.$ti,t=new C.bQ(t,t.gJ(0),p.k("bQ<aj.E>")),p=p.k("aj.E");t.C();){o=t.d
if(o==null)o=p.a(o)
n=o.b
m=Math.cos(n)
o=o.a
w.push(new C.r(m*o,Math.sin(n)*o))}l.db=w
w=C.a([],v)
for(v=l.ay,v=C.cS(v,0,C.dw(900,"count",s),C.U(v).c),s=v.$ti,v=new C.bQ(v,v.gJ(0),s.k("bQ<aj.E>")),s=s.k("aj.E");v.C();){t=v.d
if(t==null)t=s.a(t)
p=t.b
o=Math.sin(p)
t=t.a+0.2
w.push(new C.r(-o*0.6/Math.sqrt(t),Math.cos(p)*0.6/Math.sqrt(t)))}l.dy=w
l.fy=l.fx=A.J
E.dE(110,"",900,0.5,0.45,"sine")},
mE(d){var x,w,v,u,t,s,r,q=this
q.e.fD(0,d,q.y)
x=q.at
w=q.ax
q.at=x+d*0.25*w
if(q.ch){v=d*0.9*w
u=q.CW.aI(0,q.fx)
t=Math.max(0.25,u.gcL())
s=u.f_(0,t).aO(0,0.9/(t*t))
x=q.fy.a7(0,s.aO(0,v))
q.fy=x
w=q.cx.aI(0,s.aO(0,v))
q.cx=w
x=q.fx.a7(0,x.aO(0,v))
q.fx=x
w=q.CW.a7(0,w.aO(0,v))
q.CW=w
r=new B.e9k(v)
r.$6(q.db,q.dy,x,w,0.5,0.35)
r.$6(q.dx,q.fr,q.CW,q.fx,0.35,0.5)}},
B(d){var x,w,v,u,t=this,s=null,r=y.p,q=C.a([C.aI(s,s,s,s,D.p2,s,s,s,new B.e9a(t,d),s,s,s,s,"Share",s)],r),p=C.b4(s,s,s,new B.bjb(t,s),A.az),o=A.v.j(0.5),n=C.n(14),m=C.K(A.bx,A.r,1)
if(t.ch)x="Two galaxies falling together. Gravity pulls long tails of stars out. In a few billion years they settle into one big, round galaxy."
else if(t.x)x="Dark matter (purple haze) is about 5 times more than all the stars and gas together. We cannot see it, but its gravity holds the galaxy together."
else x=t.Q==="elliptical"?"An elliptical galaxy: old red and yellow stars swarming in every direction, with little new star making.":"The bright blue arms are where new stars are born. The yellow middle is older stars."
n=C.a([p,C.ao(8,C.p(s,C.c(x,s,s,s,s,s,s,A.Lr,s,s,s),A.f,s,s,new C.o(o,s,m,n,s,s,A.m),s,s,s,s,A.bT,s,s,s),s,s,10,10,s,s)],r)
m=C.a([],r)
for(w=0;w<3;++w){v=D.dq0[w]
p=t.Q===v.a&&!t.ch
m.push(new B.e0(v.b,p,new B.e9b(t,v),s,A.hj,s))}m.push(new B.e0("Collide",t.ch,new B.e9c(t),A.xf,A.c3,s))
p=C.a([new B.fh(m,"TYPE",s)],r)
if(t.Q!=="elliptical"&&!t.ch){o=t.f
o=B.j6(A.hj,""+o,"Arms",6,2,new B.e9d(t),o)
m=t.r
A.d.u(p,C.a([o,B.j6(A.hj,A.i.a5(m,1),"Winding",6,0.8,new B.e9e(t),m)],r))}o=t.as
p.push(B.j6(A.hj,""+A.i.S(o*90)+"\xb0","Tilt",1,0.15,new B.e9f(t),o))
o=t.ax
p.push(B.j6(A.hj,A.i.a5(o,1)+"x","Speed",4,0,new B.e9g(t),o))
o=t.x
m=t.z
x=t.y
u=x?A.lA:D.Iw
p.push(new B.fh(C.a([new B.e0("Dark matter",o,new B.e9h(t),s,A.bl,s),new B.e0("You are here",m,new B.e9i(t),s,A.aQ,s),new B.e0("Music",x,new B.e9j(t),u,A.hj,s)],r),s,s))
return B.lW(A.hj,q,'A galaxy is a huge family of stars, gas and dust held together by gravity. Our galaxy, the Milky Way, has 100 to 400 billion stars. Our Sun is one of them, about two thirds of the way out, taking about 230 million years to go once round.\n\nBuild your own: change the number of arms, how tightly they wind, and add a bar through the middle. Try Elliptical for a galaxy shaped like a ball. "Dark matter" shows the invisible stuff that makes the outer stars move faster than the visible stars alone could explain.\n\nCollide: the Milky Way will meet the Andromeda galaxy in about 4.5 billion years. Press Collide to see what that might look like. The stars are so far apart that almost none will actually hit each other.',new C.e5(new C.an(A.a0,s,A.b4,A.t,n,s),t.d),"GALAXY",C.x(p,A.l,s,A.e,A.M,0,A.p))}}
B.bjb.prototype={
a4(a0,a1){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a1.a,d=a1.b
$.T()
x=C.L()
x.r=D.bvw.gp(0)
a0.aE(new C.a4(0,0,0+e,0+d),x)
w=new C.e1()
w.cT(3)
for(v=0;v<90;++v){x=w.ai()
u=w.ai()
t=w.ai()
s=new C.as(A.T,A.Q,A.W,A.X,A.U)
s.r=A.c.j(0.15+w.ai()*0.4).gp(0)
a0.O(new C.r(x*e,u*d),t*1.1+0.2,s)}r=new C.r(e/2,d*0.42)
q=Math.min(e*0.46,d*0.36)
e=this.b
if(e.x){d=q*1.3
x=C.L()
x.san(new C.bT(A.z,0.5,A.x,f,0,C.a([A.aC.j(0.32),A.aC.j(0.12),A.L],y.O),G.a5R,f).az(0,C.bX(r,d)))
a0.O(r,d,x)}p=new B.dno(e.as)
d=q*0.3
x=C.L()
x.san(new C.bT(A.z,0.5,A.x,f,0,C.a([A.h8.j(0.85),A.at.j(0.3),A.L],y.O),f,f).az(0,C.bX(r,d)))
a0.O(r,d,x)
if(!e.ch){o=C.L()
for(d=e.ay,x=d.length,n=0;n<d.length;d.length===x||(0,C.I)(d),++n){m=d[n]
u=m.a
l=e.x?1/(0.25+u*0.9):1/Math.pow(u+0.18,1.5)*0.35
t=e.at
s=Math.min(l,6)
k=m.b
j=p.$6(Math.cos(k)*u,Math.sin(k)*u,m.c,r,t*s*0.5,q)
s=m.d
t=A.i.F(s,360)
o.r=new H.pA(1,t,s>200?0.45:0.55,1).jd().j(0.35+(1-u)*0.5).gp(0)
a0.O(j,u<0.3?1.3:1,o)}if(e.z&&e.Q!=="elliptical"){l=e.x?1.1976047904191616:1/Math.pow(0.8300000000000001,1.5)*0.35
e=e.at
d=Math.min(l,6)
j=p.$6(Math.cos(0.9)*0.65,Math.sin(0.9)*0.65,0,r,e*d*0.5,q)
$.T()
d=C.L()
d.b=A.ac
d.c=1.6
d.r=A.aQ.gp(0)
a0.O(j,9,d)
i=C.h2(f,A.cK,f,f,f,D.fBY,A.a7,A.cf,f,A.e5,A.cg)
i.eY()
i.a4(a0,j.a7(0,new C.r(-i.b.c/2,12)))}}else{h=q*0.8
o=C.L()
for(d=e.db,x=d.length,n=0;n<d.length;d.length===x||(0,C.I)(d),++n){g=d[n]
o.r=D.bx0.j(0.6).gp(0)
a0.O(p.$6(g.a,g.b,0,r,0,h),1,o)}for(d=e.dx,x=d.length,n=0;n<d.length;d.length===x||(0,C.I)(d),++n){g=d[n]
o.r=D.bqJ.j(0.6).gp(0)
a0.O(p.$6(g.a,g.b,0,r,0,h),1,o)}d=e.fx
d=p.$6(d.a,d.b,0,r,0,h)
$.T()
x=C.L()
x.r=A.h8.gp(0)
a0.O(d,5,x)
e=e.CW
e=p.$6(e.a,e.b,0,r,0,h)
x=C.L()
x.r=A.iG.gp(0)
a0.O(e,5,x)}},
aC(d){return!0}}
B.XF.prototype={
R(){return new B.boz(new C.cy(null,y.z),new B.Qs(A.cT),$,A.bG,0,C.a([],y.X),null,null)}}
B.boz.prototype={
a_(){this.a3()
this.mn()},
mE(d){var x,w,v,u=this
u.e.fD(0,d,u.Q)
if(!u.x)return
x=u.f
w=u.y
if(x==="seasons")u.r=A.i.F(u.r+d*0.04*w,1)
else{x=A.i.F(u.w+d*0.05*w,1)
u.w=x
v=A.i.bc(x*4)
if(v!==A.i.bc(u.as))B.mH("bell",60+v*4,500,0.35)
u.as=v}},
gcA1(){var x=this.r
if(x<0.25)return"Spring in the north, autumn in the south"
if(x<0.5)return"Summer in the north, winter in the south"
if(x<0.75)return"Autumn in the north, spring in the south"
return"Winter in the north, summer in the south"},
gcq4(){var x=this.w
if(x<0.03||x>0.97)return"New Moon"
if(x<0.22)return"Waxing crescent"
if(x<0.28)return"First quarter"
if(x<0.47)return"Waxing gibbous"
if(x<0.53)return"Full Moon"
if(x<0.72)return"Waning gibbous"
if(x<0.78)return"Last quarter"
return"Waning crescent"},
B(d){var x,w,v,u,t,s=this,r=null,q=y.p,p=C.a([C.aI(r,r,r,r,D.p2,r,r,r,new B.eFK(s,d),r,r,r,r,"Share",r)],q),o=C.E(new C.e5(C.b4(r,r,r,new B.bv3(s,r),A.hf),s.d),1)
if(s.f==="seasons")x=s.gcA1()
else{x=s.gcq4()
w=A.i.ao(A.i.D(0.5-0.5*Math.cos(s.w*2*3.141592653589793),0,1)*100,1)
v=s.w
if(v>0.45&&v<0.55||v<0.05||v>0.95)v="  \xb7  Spring tides (the biggest)"
else{if(!(v>0.2&&v<0.3))v=v>0.7&&v<0.8
else v=!0
v=v?"  \xb7  Neap tides (the smallest)":""}v=x+"  \xb7  "+w+"% lit"+v
x=v}x=C.x(C.a([o,C.p(r,C.c(x,r,r,r,r,r,r,A0.WR,A.K,r,r),A.f,r,r,r,r,r,r,r,K.anO,r,r,1/0)],q),A.l,r,A.e,A.h,0,A.p)
o=s.f
w=s.x
v=w?"Pause":"Play"
w=w?Z.vv:A.fO
u=s.Q
t=u?A.lA:D.Iw
t=C.a([new B.fh(C.a([new B.e0("Seasons",o==="seasons",new B.eFL(s),A.DT,A.bv,r),new B.e0("Moon phases",o==="moon",new B.eFM(s),A.vi,A.bv,r),new B.e0(v,!1,new B.eFN(s),w,A.bv,r),new B.e0("Music",u,new B.eFO(s),t,A.bv,r)],q),r,r)],q)
if(s.f==="seasons"){o=s.r
o=B.j6(A.bv,D.dpb[A.o.F(A.i.bc(o*12),12)],"Month",1,0,new B.eFP(s),o)
w=s.z
A.d.u(t,C.a([o,B.j6(A.bv,A.i.a5(w,1)+"\xb0","Tilt",90,0,new B.eFQ(s),w)],q))}else{q=s.w
t.push(B.j6(A.bv,""+(A.i.bc(q*29.5)+1),"Day of month",1,0,new B.eFR(s),q))}q=s.y
t.push(B.j6(A.bv,A.i.a5(q,1)+"x","Speed",4,0.2,new B.eFS(s),q))
return B.lW(A.bv,p,"SEASONS: Earth is tipped over by 23.4\xb0. When the north leans towards the Sun it is summer there (long days, high Sun), and winter in the south. Six months later it is the other way round. It is not because Earth gets closer to the Sun. Try setting the tilt to 0\xb0: the seasons vanish!\n\nMOON: the Moon always has one half lit by the Sun. As it goes round Earth we see more or less of the lit half: that is the phase. The Moon also pulls the sea towards it, which makes the tides.",x,"SEASONS & MOON",C.x(t,A.l,r,A.e,A.M,0,A.p))}}
B.bv3.prototype={
a4(b7,b8){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2=null,b3=b8.a,b4=b8.b,b5=$.T(),b6=C.L()
b6.r=D.Cu.gp(0)
b7.aE(new C.a4(0,0,0+b3,0+b4),b6)
x=new C.e1()
x.cT(4)
for(w=0;w<70;++w){b6=x.ai()
v=x.ai()
u=x.ai()
t=new C.as(A.T,A.Q,A.W,A.X,A.U)
t.r=A.c.j(0.2+x.ai()*0.4).gp(0)
b7.O(new C.r(b6*b3,v*b4),u+0.3,t)}b6=b3/2
v=b4/2
s=new C.r(b6,v)
u=this.b
if(u.f==="seasons"){r=b3*0.36
q=b4*0.3
b6=C.bY(s,q*2,r*2)
v=C.L()
v.b=A.ac
v.c=1
v.r=A.aT.gp(0)
b7.c1(b6,v)
v=C.L()
v.san(D.eKr.az(0,C.bX(s,34)))
b7.O(s,22,v)
p=u.r*2*3.141592653589793
o=s.a7(0,new C.r(Math.cos(p)*r,Math.sin(p)*q))
n=Math.min(b3,b4)*0.075
m=u.z*3.141592653589793/180
l=s.aI(0,o).f_(0,s.aI(0,o).gcL())
u=b7.c
J.bs(u.save())
u.translate(o.a,o.b)
b4=C.L()
b4.r=D.bt2.gp(0)
b7.O(A.J,n,b4)
J.bs(u.save())
b5=new C.aH(b5.r,A.aj,b2,b2,C.a([],y.v))
b5.E(new C.jK(C.bX(A.J,n)))
b7.mz(0,b5)
b5=l.aO(0,n).aO(0,0.35)
b4=n*1.1
b3=C.L()
b3.san(D.eKz.az(0,C.bX(A.J,b4)))
b7.O(b5,b4,b3)
u.restore()
b3=-m
b4=Math.sin(b3)
b3=-Math.cos(b3)
k=new C.r(b4,b3)
b5=new C.r(-b4,-b3).aO(0,n).aO(0,1.7)
v=k.aO(0,n).aO(0,1.7)
b6=C.L()
b6.c=2
b6.r=A.bY.gp(0)
b7.ah(b5,v,b6)
b6=k.aO(0,n).aO(0,1.7)
v=C.L()
v.r=A.bY.gp(0)
b7.O(b6,3.2,v)
b3=b4*l.a+b3*l.b
j=-b3
u.restore()
if(Math.abs(j)<0.12)b3="equinox: day and night equal"
else b3=j*Math.sin(m)*0+b3>0?"north leans to Sun":"south leans to Sun"
i=C.h2(b2,A.cK,b2,b2,b2,C.d4(b2,b2,b2,b2,b2,b2,b2,b2,b2,F.ada,b3),A.a7,A.cf,b2,A.e5,A.cg)
i.eY()
i.a4(b7,o.a7(0,new C.r(-i.b.c/2,n+12)))}else{h=Math.min(b3*0.34,b4*0.32)
t=C.L()
t.b=A.ac
t.c=1
t.r=A.aT.gp(0)
b7.O(s,h,t)
for(t=b4*0.2,w=0;w<9;++w){g=t+w*b4*0.075
f=new C.as(A.T,A.Q,A.W,A.X,A.U)
f.r=A.aQ.j(0.6).gp(0)
f.c=2
b7.ah(new C.r(10,g),new C.r(40,g),f)}n=h*0.25
t=C.L()
t.san(new C.bT(new C.df(-0.5,0),1.1,A.x,b2,0,C.a([D.bnx,D.alF],y.O),D.deV,b2).az(0,C.bX(s,n)))
b7.O(s,n,t)
p=3.141592653589793+u.w*2*3.141592653589793
e=s.a7(0,new C.r(Math.cos(p)*h,Math.sin(p)*h))
d=h*0.12
t=C.L()
t.r=D.bkd.gp(0)
b7.O(e,d,t)
t=b7.c
J.bs(t.save())
b5=b5.r
g=y.v
f=new C.aH(b5,A.aj,b2,b2,C.a([],g))
f.E(new C.jK(C.bX(e,d)))
b7.mz(0,f)
f=e.a-d
a0=e.b-d
a1=C.L()
a1.r=A.bO.gp(0)
b7.aE(new C.a4(f,a0,f+d,a0+d*2),a1)
t.restore()
a2=e.aI(0,s).f_(0,e.aI(0,s).gcL())
for(f=a2.a,a0=a2.b,a1=n*0.28,a3=0;a3<2;++a3){a4=F.azj[a3]
a5=new C.as(A.T,A.Q,A.W,A.X,A.U)
a5.r=A.aH.j(0.45).gp(0)
a5.y=A.l6
b7.O(new C.r(b6+f*a4*n*1.05,v+a0*a4*n*1.05),a1,a5)}b6=b3-b3*0.17
v=b4*0.18
a6=new C.r(b6,v)
a7=Math.min(b3,b4)*0.1
b4=C.L()
b4.r=D.bk8.gp(0)
b7.O(a6,a7,b4)
a8=0.5-0.5*Math.cos(u.w*2*3.141592653589793)
J.bs(t.save())
b4=new C.aH(b5,A.aj,b2,b2,C.a([],g))
b4.E(new C.jK(C.bX(a6,a7)))
b7.mz(0,b4)
u=u.w
a9=new C.aH(b5,A.aj,b2,b2,C.a([],g))
b0=u<0.5?1:-1
b3=v-a7
a9.E(new C.aZ(b6,b3))
b4=b0>0
a9.aG1(new C.r(b6,v+a7),b4,new C.aP(a7,a7))
if(a8<0.5)b4=b0<0
a9.aG1(new C.r(b6,b3),b4,new C.aP(a7*Math.abs(1-2*a8),a7))
b4=C.L()
b4.r=A.bO.gp(0)
b7.af(a9,b4)
t.restore()
t=C.L()
t.b=A.ac
t.c=1
t.r=A.aT.gp(0)
b7.O(a6,a7,t)
b1=C.h2(b2,A.cK,b2,b2,b2,D.fBZ,A.a7,A.cf,b2,A.e5,A.cg)
b1.eY()
b1.a4(b7,a6.a7(0,new C.r(-b1.b.c/2,a7+6)))}},
aC(d){return!0}}
B.aOo.prototype={
t(){var x=this,w=x.aa$
if(w!=null)w.a8(0,x.gbB())
x.aa$=null
x.a2()},
aZ(){this.b7()
this.b5()
this.bC()}}
B.bBu.prototype={
t(){var x,w,v
for(x=this.hf$,w=x.length,v=0;v<x.length;x.length===w||(0,C.I)(x),++v)x[v].a1(0)
x=this.he$
x===$&&C.d()
x.t()
this.bAw()}}
B.aOP.prototype={
t(){var x=this,w=x.aa$
if(w!=null)w.a8(0,x.gbB())
x.aa$=null
x.a2()},
aZ(){this.b7()
this.b5()
this.bC()}}
B.bBC.prototype={
t(){var x,w,v
for(x=this.hf$,w=x.length,v=0;v<x.length;x.length===w||(0,C.I)(x),++v)x[v].a1(0)
x=this.he$
x===$&&C.d()
x.t()
this.bAY()}}
B.aPm.prototype={
t(){var x=this,w=x.aa$
if(w!=null)w.a8(0,x.gbB())
x.aa$=null
x.a2()},
aZ(){this.b7()
this.b5()
this.bC()}}
B.bBN.prototype={
t(){var x,w,v
for(x=this.hf$,w=x.length,v=0;v<x.length;x.length===w||(0,C.I)(x),++v)x[v].a1(0)
x=this.he$
x===$&&C.d()
x.t()
this.bBw()}}
var z=a.updateTypes(["~()","cm(ad_)","P(vV)","P(Rl)","ay<~>()","~(m)","P(acZ)","X1()","XR()","X2()","W3()","X_()","XK()","XF()","P(R1)","G(R1)"])
B.eQu.prototype={
$1(d){var x,w,v,u,t,s,r,q=this.a,p=d.a,o=A.i.D((p-q.x.a)/1e6,0,0.05)
q.x=d
q.y=A.o.ao(p,1000)
for(p=q.f,x=p.length,w=1-1.2*o,v=0;v<x;++v){u=p[v]
t=u.a
s=u.b
r=s.a
s=s.b
u.a=new C.r(t.a+r*o,t.b+s*o)
u.b=new C.r(r*w,s*w)}A.d.bq(p,new B.eQs(q))
if(q.c!=null)p=p.length!==0||q.ax!=null
else p=!1
if(p)q.l(new B.eQt())},
$S:7}
B.eQs.prototype={
$1(d){return this.a.y-d.e>d.f},
$S:z+3}
B.eQt.prototype={
$0(){},
$S:0}
B.eQ5.prototype={
$0(){},
$S:0}
B.eQ4.prototype={
$0(){},
$S:0}
B.eQe.prototype={
$0(){return B.uQ(this.b,this.a.d,"spark-painter")},
$S:0}
B.eQg.prototype={
$1(d){return this.a.b2d(0,d.b)},
$S:50}
B.eQk.prototype={
$1(d){var x,w=this.a,v=d.b,u=w.ax
if(u!=null){x=u.a
x=x.length===0||A.d.gal(x).aI(0,v).gcL()>2.5}else x=!1
if(x)u.a.push(v)
w.aVO(v)
w.che(v)
return null},
$S:19}
B.eQf.prototype={
$1(d){return this.a.b2c()},
$S:38}
B.eQl.prototype={
$1(d){return this.a.b2d(0,d.b)},
$S:23}
B.eQm.prototype={
$1(d){return this.a.b2c()},
$S:56}
B.eQn.prototype={
$0(){var x=this.a
return x.l(new B.eQd(x,this.b))},
$S:0}
B.eQd.prototype={
$0(){return this.a.z=this.b.a},
$S:0}
B.eQo.prototype={
$0(){var x=this.a
return x.l(new B.eQc(x))},
$S:0}
B.eQc.prototype={
$0(){return this.a.Q=-1},
$S:0}
B.eQp.prototype={
$0(){var x=this.a
return x.l(new B.eQb(x,this.b))},
$S:0}
B.eQb.prototype={
$0(){return this.a.Q=this.b},
$S:0}
B.eQq.prototype={
$1(d){var x=this.a
return x.l(new B.eQa(x,d))},
$S:6}
B.eQa.prototype={
$0(){return this.a.as=this.b},
$S:0}
B.eQr.prototype={
$0(){var x=this.a
return x.l(new B.eQ9(x))},
$S:0}
B.eQ9.prototype={
$0(){var x=this.a
return x.ch=!x.ch},
$S:0}
B.eQh.prototype={
$0(){var x=this.a
return x.l(new B.eQ8(x))},
$S:0}
B.eQ8.prototype={
$0(){var x=this.a.e
if(x.length!==0)x.pop()},
$S:0}
B.eQi.prototype={
$0(){var x=this.a
return x.l(new B.eQ7(x))},
$S:0}
B.eQ7.prototype={
$0(){var x=this.a
A.d.a6(x.e)
A.d.a6(x.f)},
$S:0}
B.eQj.prototype={
$0(){var x=this.a
return x.l(new B.eQ6(x,this.b))},
$S:0}
B.eQ6.prototype={
$0(){return this.a.at=this.b},
$S:0}
B.cDR.prototype={
$0(){return C.a8(this.a,!1).hY()},
$S:0}
B.cDS.prototype={
$0(){var x=this.a
return B.hPL(this.b,x.c,x.e,x.d)},
$S:0}
B.hcI.prototype={
$1(d){var x,w=null,v=C.n(24),u=this.a,t=u.j(0.4)
u=C.c(this.b,w,w,w,w,w,w,C.l(w,w,u,w,w,w,w,w,w,w,w,16,w,w,A.u,w,w,!0,w,1.2,w,w,w,w,w,w),w,w,w)
x=C.c(this.c,w,w,w,w,w,w,D.fFn,w,w,w)
return C.ei(C.a([C.bM(!1,D.fYy,w,w,!0,w,w,w,new B.hcH(d),w,w)],y.p),w,w,F.mm,x,w,w,w,new C.b9(v,new C.ax(t,1,A.r,-1)),u,w)},
$S:18}
B.hcH.prototype={
$0(){C.a8(this.a,!1).N(null)
return null},
$S:0}
B.cDN.prototype={
$0(){C.f2()
this.a.e.$0()},
$S:0}
B.cDM.prototype={
$0(){C.f2()
this.a.e.$0()},
$S:0}
B.cDT.prototype={
$0(){C.f2()
this.a.e.$0()},
$S:0}
B.cDO.prototype={
$0(){var x=this.a
A.d.X(x.hf$,this.b.bn())
if(x.c!=null)this.c.$0()},
$S:0}
B.cDQ.prototype={
$1(d){var x=this.a,w=d.a,v=A.i.D((w-x.mc$.a)/1e6,0,0.04)
x.mc$=d
x.fe$=A.o.ao(w,1000)
x.mE(v)
if(x.c!=null)x.l(new B.cDP())},
$S:7}
B.cDP.prototype={
$0(){},
$S:0}
B.fZe.prototype={
bqe(d){var x=0,w=C.j(y.D),v,u=this,t,s
var $async$$1=C.e(function(e,f){if(e===1)return C.f(f,w)
for(;;)switch(x){case 0:x=3
return C.b(u.a.$1(d),$async$$1)
case 3:t=f
x=4
return C.b(t.ho(A.a5i),$async$$1)
case 4:s=f
t.t()
if(s==null)throw C.Y(C.bc("no picture"))
v=J.ey(A.dL.gaS(s),s.byteOffset,s.byteLength)
x=1
break
case 1:return C.h(v,w)}})
return C.i($async$$1,w)},
$1(d){return this.bqe(d)},
$S:1987}
B.chY.prototype={
$1(d){var x=this.c,w=this.a,v=w.d,u=v+1
w.d=u
x.$flags&2&&C.ak(x)
x[v]=d
if(u===255){v=this.b.c
v.q2(255)
v.I(0,new Uint8Array(C.ca(x)))
w.d=0}},
$S:29}
B.chX.prototype={
$1(d){var x,w,v=this.a,u=v.c,t=v.b
u=v.c=(u|A.o.e5(d,t))>>>0
t=v.b=t+v.a
for(x=this.b;t>=8;t=u,u=w){x.$1(u&255)
w=v.c>>>8
v.c=w
u=v.b-=8}},
$S:29}
B.fyd.prototype={
$0(){var x=null,w=C.h2(x,A.cK,x,x,x,C.d4(x,x,x,x,x,x,x,x,x,C.l(x,x,this.b,x,x,x,x,x,"monospace",x,x,this.c,x,x,A.P,x,x,!0,x,x,x,x,x,x,x,x),this.a),A.a7,A.cf,x,A.e5,A.cg)
w.eY()
return w},
$S:253}
B.h3Q.prototype={
$0(){return this.a.ai()},
$S:81}
B.fEC.prototype={
$2(d,e){return d.j(A.i.D(d.a*this.a*e,0,1))},
$1(d){return this.$2(d,1)},
$S:1988}
B.fED.prototype={
$4$blur$shift(d,e,f,g){var x,w=this
$.T()
x=C.L()
x.b=A.ac
x.c=e
x.e=A.dP
x.r=d.gp(0)
if(f!=null)x.y=f
B.DQ(w.a,w.b,null,x).a4(w.c,w.d.a7(0,g))},
$2(d,e){return this.$4$blur$shift(d,e,null,A.J)},
$3$blur(d,e,f){return this.$4$blur$shift(d,e,f,A.J)},
$S:1989}
B.h3R.prototype={
$2(d,e){return d+this.a[e]},
$S:772}
B.h3S.prototype={
$2(d,e){return d+this.a[e]},
$S:772}
B.h2x.prototype={
$1(d){return this.bqs(d)},
bqs(d){var x=0,w=C.j(y.I),v,u=this,t,s,r,q,p
var $async$$1=C.e(function(e,f){if(e===1)return C.f(f,w)
for(;;)switch(x){case 0:$.T()
t=new C.oU(new C.oo())
s=u.a
r=u.b
B.hP1(C.v1(t,null),new C.av(s,r),d/u.c,u.r,u.w,u.x,u.e,u.f,u.d)
q=t.mZ()
x=3
return C.b(q.vI(s,r),$async$$1)
case 3:p=f
q.t()
v=p
x=1
break
case 1:return C.h(v,w)}})
return C.i($async$$1,w)},
$S:753}
B.cp6.prototype={
$0(){return this.a.f=this.b},
$S:0}
B.cp1.prototype={
$0(){var x=this.a
x.at=0
x.ax=""},
$S:0}
B.cp2.prototype={
$1(d){var x=this.a
if(x.c!=null)x.l(new B.cp0(x,d))},
$S:6}
B.cp0.prototype={
$0(){return this.a.at=this.b},
$S:0}
B.cp3.prototype={
$0(){var x=this.b?"Your animated title is saved (a moving GIF).":"Could not save here. Try another browser."
return this.a.ax=x},
$S:0}
B.cp4.prototype={
$0(){return this.a.ax="Could not make the animation. Try a shorter title."},
$S:0}
B.cp5.prototype={
$0(){return this.a.at=-1},
$S:0}
B.coR.prototype={
$2(d,e){var x=null,w=this.a,v=w.gK6().x
v===$&&C.d()
return C.b4(x,x,x,new B.bbj(v,w.e.a.a,w.f,w.r,w.y,w.gtQ(),w.x,x),A.hf)},
$S:58}
B.coS.prototype={
$1(d){return this.a.l(new B.coQ())},
$S:2}
B.coQ.prototype={
$0(){},
$S:0}
B.coT.prototype={
$0(){return this.a.bsO(this.b.a)},
$S:0}
B.coU.prototype={
$0(){var x=this.a
return x.l(new B.coP(x,this.b))},
$S:0}
B.coP.prototype={
$0(){return this.a.r=this.b.a},
$S:0}
B.coV.prototype={
$0(){var x=this.a
return x.l(new B.coO(x,this.b))},
$S:0}
B.coO.prototype={
$0(){return this.a.y=this.b},
$S:0}
B.coW.prototype={
$0(){var x=this.a
return x.l(new B.coN(x,this.b))},
$S:0}
B.coN.prototype={
$0(){return this.a.w=this.b},
$S:0}
B.coX.prototype={
$0(){var x=this.a
return x.l(new B.coM(x,this.b))},
$S:0}
B.coM.prototype={
$0(){return this.a.z=this.b},
$S:0}
B.coY.prototype={
$0(){var x=this.a
return x.l(new B.coL(x))},
$S:0}
B.coL.prototype={
$0(){var x=this.a
return x.Q=!x.Q},
$S:0}
B.coZ.prototype={
$0(){var x=this.a.gK6()
x.iD(0,0)
x.cX(0)},
$S:0}
B.cp_.prototype={
$1(d){var x=this.a
return x.l(new B.coK(x,d))},
$S:6}
B.coK.prototype={
$0(){return this.a.x=this.b},
$S:0}
B.ea1.prototype={
$0(){return this.a.k1=!1},
$S:0}
B.ea2.prototype={
$1(d){var x=this.a
if(x.c!=null)x.l(new B.ea0(x,d))},
$S:z+1}
B.ea0.prototype={
$0(){return this.a.cBk(this.b)},
$S:0}
B.ea3.prototype={
$1(d){var x=this.a
if(x.c!=null)x.l(new B.ea_(x))},
$S:74}
B.ea_.prototype={
$0(){return this.a.k1=!0},
$S:0}
B.ea4.prototype={
$0(){var x,w,v,u=this.a,t=J.a2(u),s=t.gJ(u),r=new Float64Array(s*4)
for(x=0;x<t.gJ(u);++x){w=J.t(t.h(u,x),0)*3.141592653589793/180
v=J.t(t.h(u,x),1)*3.141592653589793/180
s=x*4
r[s]=Math.sin(v)
r[s+1]=Math.cos(v)
r[s+2]=Math.sin(w)
r[s+3]=Math.cos(w)}return r},
$S:735}
B.e9Y.prototype={
$0(){return this.a.id=D.a7k},
$S:0}
B.e9Z.prototype={
$0(){var x=this.b.a,w=C.U(x).k("X<1>")
w=C.pY(new C.X(x,new B.e9X(this.c),w),6,w.k("M.E"))
x=C.B(w,C.a3(w).k("M.E"))
return this.a.id=x},
$S:0}
B.e9X.prototype={
$1(d){return A.a.q(d.a.toLowerCase(),this.a)},
$S:z+6}
B.e9W.prototype={
$1(d){var x=null,w=C.cb(C.c("Age: 4.54 billion years\nWidth: 12,742 km (circumference 40,075 km)\nSpin: once every 24 hours, about 1,670 km/h at the equator\nTilt: 23.4 degrees, which gives us the seasons\nOrbit: around the Sun in 365.25 days at about 107,000 km/h\nGravity: 9.81 m/s\xb2 at the surface\nSurface: about 71% ocean and 29% land\nMoon: 384,400 km away; its pull makes the tides\nAtmosphere: 78% nitrogen, 21% oxygen\nFarthest from the Sun in July, closest in January",x,x,x,x,x,x,C.l(x,x,A.ab,x,x,x,x,x,x,x,x,14,x,x,x,x,1.55,!0,x,x,x,x,x,x,x,x),x,x,x),A.t,x,A.y,x,x,x,x,x,A.ah)
return C.ei(C.a([C.bM(!1,A.qr,x,x,!0,x,x,x,new B.e9V(d),x,x)],y.p),x,x,F.mm,w,x,x,x,x,D.h8X,x)},
$S:18}
B.e9V.prototype={
$0(){C.a8(this.a,!1).N(null)
return null},
$S:0}
B.ean.prototype={
$0(){return B.uQ(this.b,this.a.d,"earth")},
$S:0}
B.eao.prototype={
$2(d,e){var x,w,v,u,t,s,r,q=null,p=this.a,o=new C.av(e.b,e.d)
p.fy=o
x=p.r
w=p.w
v=p.x
u=p.y
t=p.gXx()
s=p.z
r=y.p
o=C.a([C.aA(A.c_,C.b4(q,q,q,new B.bjk(x,w,v,u,t*s,s,p.fx,p.CW,p.cx,p.cy,p.dy,p.fr,q),o),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new B.eab(p),new B.eac(p),new B.ead(p),q,q,q,q,q,q,q,new B.eae(p),q,q,q,!1,A.a4)],r)
if(p.r==null&&!p.k1)o.push(D.bfl)
if(p.r==null&&p.k1)o.push(C.at(new C.D(A.r6,C.x(C.a([D.c65,A.S,D.h7G,A.ak,D.h_l,A.aA,C.db(A.vB,q,A.FH,p.gc7c(),q)],r),A.l,q,A.e,A.M,0,A.p),q),q,q,q))
x=this.b
if(x!=null)o.push(C.ao(8,p.cgC(x),q,q,10,10,q,q))
return new C.e5(new C.an(A.a0,q,A.b4,A.t,o,q),p.d)},
$S:219}
B.eac.prototype={
$1(d){var x=this.a
x.dx=!0
x.go=x.z
x.at=x.ax=x.ay=null},
$S:262}
B.ead.prototype={
$1(d){var x,w,v=this.a
if(d.w>=2)v.z=A.i.D(v.go*d.d,0.8,16)
else{x=57.2958/(v.gXx()*v.z)
w=d.a
v.y=v.y-w.a*x
v.x=A.i.D(v.x+w.b*x,-85,85)}},
$S:226}
B.eab.prototype={
$1(d){var x,w,v=this.a
v.dx=!1
x=57.2958/(v.gXx()*v.z)
w=d.a.a
v.Q=A.i.D(-w.a*x,-160,160)
v.as=A.i.D(w.b*x,-100,100)},
$S:515}
B.eae.prototype={
$1(d){var x=this.a,w=x.cgF(d.b)
if(w!=null)x.l(new B.ea5(x,w))
else x.l(new B.ea6(x))},
$S:56}
B.ea5.prototype={
$0(){return this.a.aD6(this.b)},
$S:0}
B.ea6.prototype={
$0(){return this.a.fx=null},
$S:0}
B.eap.prototype={
$0(){var x=this.a
x.e.bN(0,A.ci)
x.l(new B.eaa(x,this.b))},
$S:0}
B.eaa.prototype={
$0(){var x=this.a
x.id=D.a7k
x.aD6(this.b)},
$S:0}
B.eat.prototype={
$0(){var x=this.a
return x.l(new B.eam(x))},
$S:0}
B.eam.prototype={
$0(){var x=this.a
x.fx=null
x.awr(15,x.y,1)},
$S:0}
B.eau.prototype={
$0(){var x=this.a
return x.l(new B.eal(x,this.b))},
$S:0}
B.eal.prototype={
$0(){var x=this.b.b
return this.a.awr(x.a,x.b,x.c)},
$S:0}
B.eav.prototype={
$0(){var x=this.a,w=x.r
if(w!=null)x.l(new B.eak(x,w))},
$S:0}
B.eak.prototype={
$0(){var x=this.b.a
return this.a.aD6(x[A.cT.av(x.length)])},
$S:0}
B.eaw.prototype={
$1(d){var x=this.a
return x.l(new B.eaj(x,d))},
$S:6}
B.eaj.prototype={
$0(){var x=this.a
x.ay=null
x.z=this.b},
$S:0}
B.eax.prototype={
$1(d){var x=this.a
return x.l(new B.eai(x,d))},
$S:6}
B.eai.prototype={
$0(){return this.a.dy=this.b},
$S:0}
B.eay.prototype={
$1(d){var x=this.a
return x.l(new B.eah(x,d))},
$S:6}
B.eah.prototype={
$0(){return this.a.fr=this.b},
$S:0}
B.eaz.prototype={
$0(){var x=this.a
return x.l(new B.eag(x))},
$S:0}
B.eag.prototype={
$0(){var x=this.a
return x.ch=!x.ch},
$S:0}
B.eaA.prototype={
$0(){var x=this.a
return x.l(new B.eaf(x))},
$S:0}
B.eaf.prototype={
$0(){var x=this.a
return x.CW=!x.CW},
$S:0}
B.eaq.prototype={
$0(){var x=this.a
return x.l(new B.ea9(x))},
$S:0}
B.ea9.prototype={
$0(){var x=this.a
return x.cx=!x.cx},
$S:0}
B.ear.prototype={
$0(){var x=this.a
return x.l(new B.ea8(x))},
$S:0}
B.ea8.prototype={
$0(){var x=this.a
return x.cy=!x.cy},
$S:0}
B.eas.prototype={
$0(){var x=this.a
return x.l(new B.ea7(x))},
$S:0}
B.ea7.prototype={
$0(){var x=this.a
return x.db=!x.db},
$S:0}
B.e9U.prototype={
$2(d,e){var x=null
return C.E(C.x(C.a([C.c(d,x,x,x,x,x,x,D.aXf,x,x,x),A.rF,C.c(e,x,2,A.a2,x,x,x,A.X7,x,x,x)],y.p),A.B,x,A.e,A.h,0,A.p),1)},
$S:115}
B.e9T.prototype={
$0(){var x=this.a
return x.l(new B.e9S(x))},
$S:0}
B.e9S.prototype={
$0(){return this.a.fx=null},
$S:0}
B.dqe.prototype={
$0(){var x=null,w=C.h2(x,A.cK,x,x,x,C.d4(x,x,x,x,x,x,x,x,x,C.l(x,x,this.c,x,x,x,x,x,x,x,x,this.b,x,x,A.F,x,x,!0,x,x,x,x,x,D.djS,x,x),this.a),A.a7,A.cf,x,A.e5,A.cg)
w.eY()
return w},
$S:253}
B.dqf.prototype={
$2(d,e){var x,w,v,u=this,t=Math.sin(d),s=Math.cos(d),r=e-u.a,q=Math.sin(r),p=Math.cos(r)
r=u.b
x=u.c
if(r*t+x*s*p<0)return null
w=u.d
v=u.e
return new C.r(w.a+v*s*q,w.b-v*(x*t-r*s*p))},
$S:1992}
B.fzQ.prototype={
$0(){return D.e1D},
$S:z+7}
B.fzR.prototype={
$0(){return D.eqy},
$S:z+8}
B.fzS.prototype={
$0(){return D.e1F},
$S:z+9}
B.fzT.prototype={
$0(){return D.dWV},
$S:z+10}
B.fzU.prototype={
$0(){return D.e1C},
$S:z+11}
B.fzV.prototype={
$0(){return D.eoF},
$S:z+12}
B.fzW.prototype={
$0(){return D.eoD},
$S:z+13}
B.eXn.prototype={
$1(d){},
$S:z+1}
B.eXo.prototype={
$1(d){},
$S:74}
B.eXk.prototype={
$0(){return C.a8(this.a,!1).hY()},
$S:0}
B.eXl.prototype={
$0(){var x=this.a
return x.l(new B.eXj(x))},
$S:0}
B.eXj.prototype={
$0(){var x=this.a
return x.d=A.o.F(x.gaWg()+1,16)},
$S:0}
B.eXm.prototype={
$2(d,e){var x,w,v,u,t,s,r,q,p,o,n=null,m=(e.b-20)/3,l=y.p,k=C.a([],l)
for(x=$.hTD(),w=m*1.15,v=y.O,u=0;u<7;++u){t=x[u]
s=Math.max(w,140)
r=new C.aP(18,18)
q=t.d
p=new C.ax(q.j(0.5),1,A.r,-1)
o=C.a([q.j(0.28),D.bvs],v)
k.push(C.aA(n,C.p(n,C.x(C.a([C.W(t.c,q,n,n,n,30),A.O,C.c(t.a,n,2,n,n,n,n,D.fKh,A.K,n,n),A.cN,C.c(t.b,n,2,n,n,n,n,D.fPX,A.K,n,n)],l),A.l,n,A.b9,A.h,0,A.p),A.f,n,n,new C.o(n,n,new C.bE(p,p,p,p),new C.bb(r,r,r,r),n,new C.a7(A.ay,A.aD,A.x,o,n,n),A.m),n,s,n,n,A.cr,n,n,m),A.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new B.eXi(d,t),n,n,n,n,n,n,!1,A.a4))}return C.bZ(A.fV,k,A.br,n,10,10)},
$S:169}
B.eXi.prototype={
$0(){return C.a8(this.a,!1).cb(C.ea(new B.eXh(this.b),!1,null,y.H))},
$S:0}
B.eXh.prototype={
$1(d){return this.a.e.$0()},
$S:41}
B.ePK.prototype={
$0(){var x=this.a
x.Q=x.z=this.b
if(x.w<2.2)x.w=2.6},
$S:0}
B.ePV.prototype={
$0(){return B.uQ(this.b,this.a.d,"solar-system")},
$S:0}
B.ePW.prototype={
$2(d,e){var x,w=null,v=this.a,u=new C.av(e.b,e.d)
v.ch=u
u=C.a([C.aA(A.c_,C.b4(w,w,w,new B.bwj(v,w),u),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new B.ePS(v),new B.ePT(v),w,w,w,w,w,w,w,new B.ePU(v),w,w,w,!1,A.a4)],y.p)
x=this.b
if(x!=null)u.push(C.ao(8,v.cgH(x),w,w,10,10,w,w))
return new C.e5(new C.an(A.a0,w,A.b4,A.t,u,w),v.d)},
$S:219}
B.ePS.prototype={
$1(d){var x=this.a
x.y=x.w
x.Q=null},
$S:262}
B.ePT.prototype={
$1(d){var x=this.a
if(d.w>=2)x.w=A.i.D(x.y*d.d,0.5,9)
else x.x=x.x.a7(0,d.a)},
$S:226}
B.ePU.prototype={
$1(d){var x=this.a,w=x.cgK(d.b)
if(w!=null)x.b3t(w)},
$S:56}
B.ePX.prototype={
$0(){var x=this.a
return x.l(new B.ePR(x))},
$S:0}
B.ePR.prototype={
$0(){var x=this.a
x.z=x.Q=null
x.x=A.J
x.w=1},
$S:0}
B.ePY.prototype={
$0(){return this.a.b3t(this.b)},
$S:0}
B.ePZ.prototype={
$1(d){var x=this.a
return x.l(new B.ePQ(x,d))},
$S:6}
B.ePQ.prototype={
$0(){return this.a.r=Math.exp(this.b*Math.log(3651))-1},
$S:0}
B.eQ_.prototype={
$1(d){var x=this.a
return x.l(new B.ePP(x,d))},
$S:6}
B.ePP.prototype={
$0(){return this.a.w=this.b},
$S:0}
B.eQ0.prototype={
$0(){var x=this.a
return x.l(new B.ePO(x))},
$S:0}
B.ePO.prototype={
$0(){var x=this.a
return x.as=!x.as},
$S:0}
B.eQ1.prototype={
$0(){var x=this.a
return x.l(new B.ePN(x))},
$S:0}
B.ePN.prototype={
$0(){var x=this.a
return x.at=!x.at},
$S:0}
B.eQ2.prototype={
$0(){var x=this.a
return x.l(new B.ePM(x))},
$S:0}
B.ePM.prototype={
$0(){var x=this.a
return x.ax=!x.ax},
$S:0}
B.eQ3.prototype={
$0(){var x=this.a
return x.l(new B.ePL(x))},
$S:0}
B.ePL.prototype={
$0(){var x=this.a
return x.ay=!x.ay},
$S:0}
B.ePJ.prototype={
$1(d){var x
if(d>=730){x=d>8000?0:1
x=A.i.a5(d/365.25,x)+" Earth years"}else x=A.i.a5(d,0)+" Earth days"
return x},
$S:313}
B.ePI.prototype={
$2(d,e){var x=null
return C.E(C.x(C.a([C.c(d,x,x,x,x,x,x,D.aXf,x,x,x),A.rF,C.c(e,x,2,A.a2,x,x,x,A.X7,x,x,x)],y.p),A.B,x,A.e,A.h,0,A.p),1)},
$S:115}
B.ePH.prototype={
$0(){var x=this.a
return x.l(new B.ePG(x))},
$S:0}
B.ePG.prototype={
$0(){var x=this.a
x.Q=x.z=null},
$S:0}
B.fhn.prototype={
$0(){var x=null,w=C.h2(x,A.cK,x,x,x,C.d4(x,x,x,x,x,x,x,x,x,C.l(x,x,this.c,x,x,x,x,x,x,x,x,this.b,x,x,A.F,x,x,!0,x,x,x,x,x,K.Tn,x,x),this.a),A.a7,A.cf,x,A.e5,A.cg)
w.eY()
return w},
$S:253}
B.fho.prototype={
$1(d){return d.c>0},
$S:z+2}
B.fhp.prototype={
$1(d){return d.c>0},
$S:z+2}
B.eaE.prototype={
$0(){},
$S:0}
B.eb6.prototype={
$1(d){return d!=null},
$S:375}
B.eaT.prototype={
$0(){var x=this.a
return x.l(new B.eaK(x,this.b))},
$S:0}
B.eaK.prototype={
$0(){return this.a.d=this.b.a},
$S:0}
B.eaU.prototype={
$0(){var x=this.a
return x.l(new B.eaJ(x))},
$S:0}
B.eaJ.prototype={
$0(){return this.a.f=!1},
$S:0}
B.eaV.prototype={
$0(){var x=this.a
return x.l(new B.eaS(x))},
$S:0}
B.eaS.prototype={
$0(){return this.a.f=!0},
$S:0}
B.eaZ.prototype={
$0(){var x=this.a
return x.l(new B.eaR(x))},
$S:0}
B.eaR.prototype={
$0(){var x=this.a
return x.r=!x.r},
$S:0}
B.eb_.prototype={
$1(d){var x=this.a
return x.l(new B.eaQ(x,d))},
$S:6}
B.eaQ.prototype={
$0(){return this.a.w=this.b},
$S:0}
B.eb0.prototype={
$0(){var x=this.a
return x.l(x.gcEF())},
$S:0}
B.eb1.prototype={
$1(d){var x=this.a
return x.l(new B.eaP(x,d))},
$S:6}
B.eaP.prototype={
$0(){return this.a.at=this.b},
$S:0}
B.eb2.prototype={
$1(d){var x=this.a
return x.l(new B.eaO(x,d))},
$S:6}
B.eaO.prototype={
$0(){return this.a.ax=this.b},
$S:0}
B.eb3.prototype={
$1(d){var x=this.a
return x.l(new B.eaN(x,d))},
$S:6}
B.eaN.prototype={
$0(){return this.a.ay=this.b},
$S:0}
B.eb4.prototype={
$1(d){var x=this.a
return x.l(new B.eaM(x,d))},
$S:6}
B.eaM.prototype={
$0(){return this.a.ch=this.b},
$S:0}
B.eb5.prototype={
$0(){var x=this.a
return x.l(new B.eaL(x))},
$S:0}
B.eaL.prototype={
$0(){return this.a.ay=4},
$S:0}
B.eaW.prototype={
$0(){var x=this.a
return x.l(new B.eaI(x))},
$S:0}
B.eaI.prototype={
$0(){return this.a.ay=7.67},
$S:0}
B.eaX.prototype={
$0(){var x=this.a
return x.l(new B.eaH(x))},
$S:0}
B.eaH.prototype={
$0(){return this.a.ay=9},
$S:0}
B.eaY.prototype={
$0(){var x=this.a
return x.l(new B.eaG(x))},
$S:0}
B.eaG.prototype={
$0(){return this.a.ay=11.3},
$S:0}
B.eaD.prototype={
$2(a0,a1){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null,h=a1.b/5,g=a1.d,f=g-60,e=y.p,d=C.a([C.bS(0,new C.bP(new C.o(D.btE,i,i,C.n(20),i,i,A.m),A.bm,i,i),0,0,0)],e)
for(x=this.a,w=x.as,v=y.V,u=h/2,g-=f,t=f-54-22,s=x.z,r=0;r<5;++r){q=r*h
p=D.AA[r]
o=C.b1(p.d)
p=C.x(C.a([C.c(p.a,i,i,i,i,i,i,new C.H(!0,o,i,i,i,i,12.5,A.u,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i),i,i,i),C.c(C.v(D.AA[r].b)+" m/s\xb2",i,i,i,i,i,i,D.fPe,i,i,i)],e),A.l,i,A.e,A.h,0,A.p)
o=q+u
n=C.p(i,i,A.f,A.dv,i,i,i,i,i,i,i,i,i,1)
m=s[r]
l=x.f?C.W(M.Du,C.b1(D.AA[r].d),i,i,i,22):C.p(i,i,A.f,i,i,new C.o(C.b1(D.AA[r].d),i,i,i,C.a([new C.aa(0,A.H,C.b1(D.AA[r].d).j(0.6),A.J,10)],v),i,A.a6),i,22,i,i,i,i,i,22)
k=C.p(i,i,A.f,C.b1(D.AA[r].d).j(0.6),i,i,i,3,i,A.fD,i,i,i,i)
j=w[r]
if(j==null)j=x.x?"\u2026":"\u2014"
else j=A.i.a5(j,2)+" s"
j=C.c(j,i,i,i,i,i,i,A.us,i,i,i)
A.d.u(d,C.a([new C.cN(q,8,i,i,h,i,p,i),new C.cN(o-0.5,54,i,g,i,i,n,i),new C.cN(o-11,54+t*(m/20),i,i,i,i,l,i),new C.cN(q,i,i,8,h,i,C.x(C.a([k,A.au,j,C.c(w[r]==null?"":"to land",i,i,i,i,i,i,D.fGE,i,i,i)],e),A.l,i,A.e,A.h,0,A.p),i)],e))}if(!x.x&&A.d.cw(w,new B.eaC()))d.push(D.bfN)
return new C.an(A.a0,i,A.ad,A.t,d,i)},
$S:62}
B.eaC.prototype={
$1(d){return d==null},
$S:375}
B.eaF.prototype={
$2(d,e){var x,w=null,v=this.a,u=this.b,t=u.b,s=v.at*t/9.81,r=A.i.D(Math.log(s+1)/Math.log(v.at*274/9.81+1),0.02,1),q=C.n(8)
q=C.p(w,w,A.f,w,w,new C.o(A.c.j(0.05),w,w,q,w,w,A.m),w,26,w,w,w,w,w,w)
u=u.c
u=C.cT(w,w,w,w,A.b_,new C.o(w,w,w,C.n(8),w,new C.a7(A.a5,A.a9,A.x,C.a([C.b1(u).j(0.9),C.b1(u).j(0.4)],y.O),w,w),A.m),A.ia,w,26,w,w,w,w,w,e.b*r)
x=s<100?A.i.a5(s,1):B.HS(s)
v=v.ax*9.81/t
v=v<10?A.i.a5(v,2):A.i.a5(v,0)
return new C.an(A.a0,w,A.ad,A.t,C.a([q,u,C.ao(w,C.c(x+" kg  \xb7  jump "+v+" m",w,w,w,w,w,w,D.fNl,w,w,w),w,w,8,w,4,w)],y.p),w)},
$S:62}
B.eaB.prototype={
$2(d,e){var x,w=null,v=e.b,u=e.d,t=Math.min(v,u),s=this.a,r=s.ch,q=s.cx,p=s.db,o=s.CW||p.length!==0
o=C.b4(w,w,w,new B.bes(new C.r(v/2,u/2+u*0.05),t*0.18/6371*(2/r),q,p,o,w),A.az)
p=A.v.j(0.55)
q=C.n(14)
r=C.K(A.bx,A.r,1)
v=s.dx
u=v.length===0?"Set a speed and press Fire!":v
if(A.a.q(v,"forever")||A.a.q(v,"again"))v=A.bf
else v=A.a.q(v,"escapes")?A.aH:A.c
v=C.c(u,w,w,w,w,w,w,C.l(w,w,v,w,w,w,w,w,w,w,w,13.5,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)
u=A.i.a5(Math.sqrt(58.86870477034412),1)
t=A.i.a5(Math.sqrt(117.73740954068823),1)
s=s.CW?"  Height now: "+B.HS(A.i.D(s.cx.gcL()-6371,0,9e9))+" km":""
x=y.p
return new C.an(A.a0,w,A.b4,A.t,C.a([o,C.ao(w,C.p(w,C.x(C.a([v,A.bw,C.c("Circular orbit here: "+u+" km/s.  Escape speed: "+t+" km/s."+s,w,w,w,w,w,w,I.aZ3,w,w,w)],x),A.B,w,A.e,A.M,0,A.p),A.f,w,w,new C.o(p,w,r,q,w,w,A.m),w,w,w,w,A.bT,w,w,w),w,w,12,12,8,w)],x),w)},
$S:62}
B.eIs.prototype={
$0(){return B.uQ(this.b,this.a.d,"size-compare")},
$S:0}
B.eIt.prototype={
$0(){var x=this.a
return x.l(new B.eIr(x,this.b))},
$S:0}
B.eIr.prototype={
$0(){return this.a.e=this.b},
$S:0}
B.eIu.prototype={
$0(){var x=this.a
return x.l(new B.eIq(x,this.b))},
$S:0}
B.eIq.prototype={
$0(){return this.a.f=this.b},
$S:0}
B.ffw.prototype={
$3(d,e,f){var x,w,v=this.a
$.T()
x=C.L()
x.r=f.j(0.2).gp(0)
x.y=new C.h1(A.H,Math.max(2,e*0.18))
v.O(d,e*1.12,x)
x=C.L()
w=C.ap(f,A.v,0.6)
w.toString
x.san(new C.bT(O.BS,0.5,A.x,null,0,C.a([A.c,f,w],y.O),T.SX,null).az(0,C.bX(d,e)))
v.O(d,e,x)},
$S:1993}
B.dSq.prototype={
$1(d){return d.e<=0},
$S:z+14}
B.dSe.prototype={
$1(d){return d.b},
$S:z+15}
B.dSf.prototype={
$0(){return B.uQ(this.b,this.a.d,"black-hole")},
$S:0}
B.dSg.prototype={
$2(d,e){var x,w,v,u,t,s,r=null,q=this.a,p=new C.av(e.b,e.d)
q.Q=p
p=C.aA(A.c_,C.b4(r,r,r,new B.bdN(q,r),p),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new B.dSc(q),r,r,r,r,r,r,r,r,r,new B.dSd(q),r,r,r,r,!1,A.a4)
x=A.v.j(0.55)
w=C.n(14)
v=C.K(A.bx,A.r,1)
u=q.r
if(u<1000)u=A.i.a5(u,u<10?1:0)+" Suns"
else u=B.fP9(u)+" Suns"
u=q.ah4("MASS",u)
t=2.953*q.r
s=y.p
s=C.a([p,C.ao(r,C.p(r,C.A(C.a([u,q.ah4("EDGE WIDTH",(t<100?A.i.a5(t,1):B.HS(t))+" km"),q.ah4("TIME",A.i.a5(this.b*100,0)+"%"),q.ah4("EATEN",""+q.as)],s),A.l,r,A.e,A.h,0,r,r),A.f,r,r,new C.o(x,r,v,w,r,r,A.m),r,r,r,r,A.bT,r,r,r),r,r,10,10,8,r)],s)
if(q.z.length===0&&q.as===0)s.push(D.eJv)
return new C.e5(new C.an(A.a0,r,A.b4,A.t,s,r),q.d)},
$S:219}
B.dSd.prototype={
$1(d){return this.a.b3u(d.b)},
$S:23}
B.dSc.prototype={
$1(d){if(A.cT.ai()<0.12)this.a.b3u(d.b)},
$S:19}
B.dSi.prototype={
$1(d){var x=this.a
return x.l(new B.dSb(x,d))},
$S:6}
B.dSb.prototype={
$0(){return this.a.r=Math.max(3,Math.exp(this.b*Math.log(1e10)))},
$S:0}
B.dSj.prototype={
$0(){var x=this.a
return x.l(new B.dSa(x))},
$S:0}
B.dSa.prototype={
$0(){return this.a.r=10},
$S:0}
B.dSk.prototype={
$0(){var x=this.a
return x.l(new B.dS9(x))},
$S:0}
B.dS9.prototype={
$0(){return this.a.r=21},
$S:0}
B.dSl.prototype={
$0(){var x=this.a
return x.l(new B.dS8(x))},
$S:0}
B.dS8.prototype={
$0(){return this.a.r=43e5},
$S:0}
B.dSm.prototype={
$0(){var x=this.a
return x.l(new B.dS7(x))},
$S:0}
B.dS7.prototype={
$0(){return this.a.r=65e8},
$S:0}
B.dSn.prototype={
$0(){var x=this.a
return x.l(new B.dS6(x))},
$S:0}
B.dS6.prototype={
$0(){var x=this.a
return x.w=!x.w},
$S:0}
B.dSo.prototype={
$0(){var x=this.a
return x.l(new B.dS5(x))},
$S:0}
B.dS5.prototype={
$0(){var x=this.a
return x.x=!x.x},
$S:0}
B.dSp.prototype={
$0(){var x=this.a
return x.l(new B.dS4(x))},
$S:0}
B.dS4.prototype={
$0(){var x=this.a
return x.y=!x.y},
$S:0}
B.dSh.prototype={
$0(){var x=this.a
return x.l(new B.dS3(x))},
$S:0}
B.dS3.prototype={
$0(){var x=this.a
A.d.a6(x.z)
x.as=0},
$S:0}
B.e9k.prototype={
$6(d,e,f,g,h,i){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j
for(x=f.a,w=f.b,v=g.a,u=g.b,t=this.a,s=0;s<d.length;++s){r=d[s]
q=r.a
p=x-q
r=r.b
o=w-r
q=v-q
r=u-r
n=Math.max(0.12,Math.sqrt(p*p+o*o))
m=Math.max(0.12,Math.sqrt(q*q+r*r))
l=e[s]
k=h/(n*n)
j=i/(m*m)
q=l.a+(p/n*k+q/m*j)*t
j=l.b+(o/n*k+r/m*j)*t
e[s]=new C.r(q,j)
r=d[s]
d[s]=new C.r(r.a+q*t,r.b+j*t)}},
$S:1994}
B.e9a.prototype={
$0(){return B.uQ(this.b,this.a.d,"galaxy")},
$S:0}
B.e9b.prototype={
$0(){var x=this.a
return x.l(new B.e99(x,this.b))},
$S:0}
B.e99.prototype={
$0(){var x,w=this.a
w.ch=!1
x=this.b.a
w.Q=x
w.w=x==="barred"?1:0
w.a0T()},
$S:0}
B.e9c.prototype={
$0(){var x=this.a
return x.l(new B.e98(x))},
$S:0}
B.e98.prototype={
$0(){var x=this.a
if(x.Q==="elliptical"){x.Q="spiral"
x.a0T()}x.cEw()},
$S:0}
B.e9d.prototype={
$1(d){var x=this.a
return x.l(new B.e97(x,d))},
$S:6}
B.e97.prototype={
$0(){var x=this.a
x.f=A.i.S(this.b)
x.a0T()},
$S:0}
B.e9e.prototype={
$1(d){var x=this.a
return x.l(new B.e96(x,d))},
$S:6}
B.e96.prototype={
$0(){var x=this.a
x.r=this.b
x.a0T()},
$S:0}
B.e9f.prototype={
$1(d){var x=this.a
return x.l(new B.e95(x,d))},
$S:6}
B.e95.prototype={
$0(){return this.a.as=this.b},
$S:0}
B.e9g.prototype={
$1(d){var x=this.a
return x.l(new B.e94(x,d))},
$S:6}
B.e94.prototype={
$0(){return this.a.ax=this.b},
$S:0}
B.e9h.prototype={
$0(){var x=this.a
return x.l(new B.e93(x))},
$S:0}
B.e93.prototype={
$0(){var x=this.a
return x.x=!x.x},
$S:0}
B.e9i.prototype={
$0(){var x=this.a
return x.l(new B.e92(x))},
$S:0}
B.e92.prototype={
$0(){var x=this.a
return x.z=!x.z},
$S:0}
B.e9j.prototype={
$0(){var x=this.a
return x.l(new B.e91(x))},
$S:0}
B.e91.prototype={
$0(){var x=this.a
return x.y=!x.y},
$S:0}
B.dno.prototype={
$6(d,e,f,g,h,i){return g.a7(0,new C.r((d*Math.cos(h)-e*Math.sin(h))*i,(d*Math.sin(h)+e*Math.cos(h))*i*this.a-f*i*0.9))},
$S:1995}
B.eFK.prototype={
$0(){return B.uQ(this.b,this.a.d,"seasons-moon")},
$S:0}
B.eFL.prototype={
$0(){var x=this.a
return x.l(new B.eFJ(x))},
$S:0}
B.eFJ.prototype={
$0(){return this.a.f="seasons"},
$S:0}
B.eFM.prototype={
$0(){var x=this.a
return x.l(new B.eFI(x))},
$S:0}
B.eFI.prototype={
$0(){return this.a.f="moon"},
$S:0}
B.eFN.prototype={
$0(){var x=this.a
return x.l(new B.eFH(x))},
$S:0}
B.eFH.prototype={
$0(){var x=this.a
return x.x=!x.x},
$S:0}
B.eFO.prototype={
$0(){var x=this.a
return x.l(new B.eFG(x))},
$S:0}
B.eFG.prototype={
$0(){var x=this.a
return x.Q=!x.Q},
$S:0}
B.eFP.prototype={
$1(d){var x=this.a
return x.l(new B.eFF(x,d))},
$S:6}
B.eFF.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.eFQ.prototype={
$1(d){var x=this.a
return x.l(new B.eFE(x,d))},
$S:6}
B.eFE.prototype={
$0(){return this.a.z=this.b},
$S:0}
B.eFR.prototype={
$1(d){var x=this.a
return x.l(new B.eFD(x,d))},
$S:6}
B.eFD.prototype={
$0(){return this.a.w=this.b},
$S:0}
B.eFS.prototype={
$1(d){var x=this.a
return x.l(new B.eFC(x,d))},
$S:6}
B.eFC.prototype={
$0(){return this.a.y=this.b},
$S:0};(function aliases(){var x=B.aPs.prototype
x.bBC=x.t
x=B.aHB.prototype
x.by2=x.t
x=B.aOR.prototype
x.bB0=x.t
x=B.aOS.prototype
x.bB1=x.t
x=B.aOT.prototype
x.bB2=x.t
x=B.aPo.prototype
x.bBy=x.t
x=B.aPr.prototype
x.bBB=x.t
x=B.aOo.prototype
x.bAw=x.t
x=B.aOP.prototype
x.bAY=x.t
x=B.aPm.prototype
x.bBw=x.t})();(function installTearOffs(){var x=a._instance_0u,w=a._instance_1u
var v
x(v=B.auw.prototype,"gcgA","cgB",0)
x(v,"gcUe","a65",4)
x(v=B.aGr.prototype,"gc7c","b_F",0)
w(v,"gcgD","cgE",5)
x(v,"gbUO","bUP",0)
x(v=B.aGs.prototype,"gcEF","cEG",0)
x(v,"gcgI","cgJ",0)})();(function inheritance(){var x=a.mixinHard,w=a.inheritMany,v=a.inherit
w(C.aE,[B.bpx,B.Rl,B.nW,B.chW,B.fte,B.acZ,B.ad_,B.vV,B.Qt,B.yU,B.Qs,B.byi,B.R1,B.agO])
w(C.af,[B.XS,B.Y3,B.X1,B.Y6,B.XR,B.X2,B.XK,B.W3,B.X_,B.XF])
w(C.ah,[B.aPs,B.aHB,B.aOR,B.boQ,B.aPr,B.aOT,B.aPo,B.aOo,B.aOP,B.aPm])
v(B.boE,B.aPs)
w(C.fR,[B.eQu,B.eQs,B.eQg,B.eQk,B.eQf,B.eQl,B.eQm,B.eQq,B.hcI,B.cDQ,B.fZe,B.chY,B.chX,B.fEC,B.fED,B.h2x,B.cp2,B.coS,B.cp_,B.ea2,B.ea3,B.e9X,B.e9W,B.eac,B.ead,B.eab,B.eae,B.eaw,B.eax,B.eay,B.eXn,B.eXo,B.eXh,B.ePS,B.ePT,B.ePU,B.ePZ,B.eQ_,B.ePJ,B.fho,B.fhp,B.eb6,B.eb_,B.eb1,B.eb2,B.eb3,B.eb4,B.eaC,B.ffw,B.dSq,B.dSe,B.dSd,B.dSc,B.dSi,B.e9k,B.e9d,B.e9e,B.e9f,B.e9g,B.dno,B.eFP,B.eFQ,B.eFR,B.eFS])
w(C.hR,[B.eQt,B.eQ5,B.eQ4,B.eQe,B.eQn,B.eQd,B.eQo,B.eQc,B.eQp,B.eQb,B.eQa,B.eQr,B.eQ9,B.eQh,B.eQ8,B.eQi,B.eQ7,B.eQj,B.eQ6,B.cDR,B.cDS,B.hcH,B.cDN,B.cDM,B.cDT,B.cDO,B.cDP,B.fyd,B.h3Q,B.cp6,B.cp1,B.cp0,B.cp3,B.cp4,B.cp5,B.coQ,B.coT,B.coU,B.coP,B.coV,B.coO,B.coW,B.coN,B.coX,B.coM,B.coY,B.coL,B.coZ,B.coK,B.ea1,B.ea0,B.ea_,B.ea4,B.e9Y,B.e9Z,B.e9V,B.ean,B.ea5,B.ea6,B.eap,B.eaa,B.eat,B.eam,B.eau,B.eal,B.eav,B.eak,B.eaj,B.eai,B.eah,B.eaz,B.eag,B.eaA,B.eaf,B.eaq,B.ea9,B.ear,B.ea8,B.eas,B.ea7,B.e9T,B.e9S,B.dqe,B.fzQ,B.fzR,B.fzS,B.fzT,B.fzU,B.fzV,B.fzW,B.eXk,B.eXl,B.eXj,B.eXi,B.ePK,B.ePV,B.ePX,B.ePR,B.ePY,B.ePQ,B.ePP,B.eQ0,B.ePO,B.eQ1,B.ePN,B.eQ2,B.ePM,B.eQ3,B.ePL,B.ePH,B.ePG,B.fhn,B.eaE,B.eaT,B.eaK,B.eaU,B.eaJ,B.eaV,B.eaS,B.eaZ,B.eaR,B.eaQ,B.eb0,B.eaP,B.eaO,B.eaN,B.eaM,B.eb5,B.eaL,B.eaW,B.eaI,B.eaX,B.eaH,B.eaY,B.eaG,B.eIs,B.eIt,B.eIr,B.eIu,B.eIq,B.dSf,B.dSb,B.dSj,B.dSa,B.dSk,B.dS9,B.dSl,B.dS8,B.dSm,B.dS7,B.dSn,B.dS6,B.dSo,B.dS5,B.dSp,B.dS4,B.dSh,B.dS3,B.e9a,B.e9b,B.e99,B.e9c,B.e98,B.e97,B.e96,B.e95,B.e94,B.e9h,B.e93,B.e9i,B.e92,B.e9j,B.e91,B.eFK,B.eFL,B.eFJ,B.eFM,B.eFI,B.eFN,B.eFH,B.eFO,B.eFG,B.eFF,B.eFE,B.eFD,B.eFC])
w(C.lK,[B.bwm,B.bbj,B.bjk,B.bwj,B.bes,B.bvR,B.bdN,B.bjb,B.bv3])
w(C.aw,[B.bap,B.e0,B.fh,B.baq,B.fI,B.Gm])
w(C.ie,[B.h3R,B.h3S,B.coR,B.eao,B.e9U,B.dqf,B.eXm,B.ePW,B.ePI,B.eaD,B.eaF,B.eaB,B.dSg])
v(B.auw,B.aHB)
v(B.aOS,B.aOR)
v(B.aGr,B.aOS)
v(B.bBQ,B.aPr)
v(B.boD,B.bBQ)
v(B.bBD,B.aOT)
v(B.aGs,B.bBD)
v(B.bBO,B.aPo)
v(B.boA,B.bBO)
v(B.bBu,B.aOo)
v(B.bnc,B.bBu)
v(B.bBC,B.aOP)
v(B.bnH,B.bBC)
v(B.bBN,B.aPm)
v(B.boz,B.bBN)
x(B.aPs,C.ch)
x(B.aHB,C.ch)
x(B.aOR,C.ch)
x(B.aOS,B.nW)
x(B.aOT,C.ch)
x(B.bBD,B.nW)
x(B.aPo,C.ch)
x(B.bBO,B.nW)
x(B.aPr,C.ch)
x(B.bBQ,B.nW)
x(B.aOo,C.ch)
x(B.bBu,B.nW)
x(B.aOP,C.ch)
x(B.bBC,B.nW)
x(B.aPm,C.ch)
x(B.bBN,B.nW)})()
C.i0(b.typeUniverse,JSON.parse('{"XS":{"af":[],"w":[]},"boE":{"ah":["XS"]},"bwm":{"aC":[]},"bap":{"aw":[],"w":[]},"e0":{"aw":[],"w":[]},"fh":{"aw":[],"w":[]},"baq":{"aw":[],"w":[]},"fI":{"aw":[],"w":[]},"Gm":{"aw":[],"w":[]},"Y3":{"af":[],"w":[]},"bbj":{"aC":[]},"auw":{"ah":["Y3"]},"X1":{"af":[],"w":[]},"aGr":{"ah":["X1"]},"bjk":{"aC":[]},"Y6":{"af":[],"w":[]},"boQ":{"ah":["Y6"]},"XR":{"af":[],"w":[]},"X2":{"af":[],"w":[]},"XK":{"af":[],"w":[]},"boD":{"ah":["XR"]},"bwj":{"aC":[]},"aGs":{"ah":["X2"]},"bes":{"aC":[]},"boA":{"ah":["XK"]},"bvR":{"aC":[]},"W3":{"af":[],"w":[]},"X_":{"af":[],"w":[]},"XF":{"af":[],"w":[]},"bnc":{"ah":["W3"]},"bdN":{"aC":[]},"bnH":{"ah":["X_"]},"bjb":{"aC":[]},"boz":{"ah":["XF"]},"bv3":{"aC":[]}}'))
C.DC(b.typeUniverse,JSON.parse('{"nW":1}'))
var y=(function rtii(){var x=C.ar
return{I:x("vf"),V:x("N<aa>"),O:x("N<u>"),l:x("N<C9>"),y:x("N<ai<C9>>"),f:x("N<ai<ai<G>>>"),b:x("N<ai<G>>"),x:x("N<ai<F>>"),g:x("N<r>"),E:x("N<CO>"),v:x("N<fZ>"),L:x("N<+(m,m)>"),c:x("N<+(m,m,a_)>"),S:x("N<cY>"),s:x("N<m>"),X:x("N<Gx>"),h:x("N<acZ>"),a:x("N<dC>"),p:x("N<w>"),u:x("N<lf>"),A:x("N<R1>"),Z:x("N<Rl>"),G:x("N<bpx>"),q:x("N<agO>"),n:x("N<G>"),t:x("N<F>"),z:x("cy<ah<af>>"),j:x("ai<@>"),d:x("a9<m,@>"),m:x("hW"),P:x("cm"),U:x("ad_"),D:x("dC"),J:x("ky"),w:x("P"),i:x("G"),r:x("F"),W:x("oq?"),B:x("G?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.bfl=new C.cl(A.z,null,null,A.ahg,null)
D.haU=new C.C("Press Drop! and watch them fall from 20 metres.",null,A.kz,null,A.K,null,null,null,null,null,null,null)
D.eCC=new C.D(A.o0,D.haU,null)
D.bfN=new C.cl(A.z,null,null,D.eCC,null)
D.fQl=new C.H(!0,A.jU,null,null,null,null,18,A.F,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.hfU=new C.C("Draw anywhere",null,D.fQl,null,null,null,null,null,null,null,null,null)
D.bfS=new C.cl(A.z,null,null,D.hfU,null)
D.biv=new C.u(1,0.8509803921568627,1,0.8941176470588236,A.q)
D.bj3=new C.u(1,0.00784313725490196,0.0196078431372549,0.06274509803921569,A.q)
D.ZI=new C.u(0.9333333333333333,0.06666666666666667,0.07450980392156863,0.09411764705882353,A.q)
D.bk8=new C.u(1,0.08627450980392157,0.08627450980392157,0.11372549019607843,A.q)
D.bkd=new C.u(1,0.11764705882352941,0.11764705882352941,0.14901960784313725,A.q)
D.bkz=new C.u(1,0.24705882352941178,0.11372549019607843,0.2901960784313726,A.q)
D.blt=new C.u(1,0.4196078431372549,0.17647058823529413,0.3607843137254902,A.q)
D.bng=new C.u(1,0.043137254901960784,0.03137254901960784,0.12549019607843137,A.q)
D.bnx=new C.u(1,0.3568627450980392,0.6901960784313725,0.9607843137254902,A.q)
D.Cu=new C.u(1,0.0196078431372549,0.023529411764705882,0.043137254901960784,A.q)
D.bql=new C.u(1,0.027450980392156862,0.027450980392156862,0.043137254901960784,A.q)
D.bqD=new C.u(1,1,0.8235294117647058,0.47843137254901963,A.q)
D.bqJ=new C.u(1,0.984313725490196,0.6509803921568628,0.8509803921568627,A.q)
D.bt2=new C.u(1,0.043137254901960784,0.10588235294117647,0.2,A.q)
D.bt6=new C.u(1,0.00784313725490196,0.00784313725490196,0.01568627450980392,A.q)
D.btE=new C.u(1,0.043137254901960784,0.050980392156862744,0.07058823529411765,A.q)
D.btT=new C.u(0.4,1,0.8901960784313725,0.6392156862745098,A.q)
D.H2=new C.u(1,0.043137254901960784,0.043137254901960784,0.06274509803921569,A.q)
D.alb=new C.u(1,0.0784313725490196,0.0392156862745098,0.13333333333333333,A.q)
D.bvs=new C.u(1,0.043137254901960784,0.050980392156862744,0.0784313725490196,A.q)
D.bvw=new C.u(1,0.01568627450980392,0.01568627450980392,0.0392156862745098,A.q)
D.bvR=new C.u(1,0.00784313725490196,0.043137254901960784,0.0196078431372549,A.q)
D.bw1=new C.u(1,1,0.9686274509803922,0.6980392156862745,A.q)
D.alF=new C.u(1,0.054901960784313725,0.22745098039215686,0.4196078431372549,A.q)
D.bx0=new C.u(1,0.7490196078431373,0.8431372549019608,1,A.q)
D.a0v=new C.u(1,0.043137254901960784,0.06274509803921569,0.18823529411764706,A.q)
D.a0A=new C.u(1,0.0784313725490196,0,0.1803921568627451,A.q)
D.bzP=new C.u(0.2,0.5058823529411764,0.5490196078431373,0.9725490196078431,A.q)
D.ana=new C.R(0,0,9,0)
D.bFk=new C.R(10,10,10,6)
D.anF=new C.R(14,10,8,12)
D.bHH=new C.R(16,8,16,12)
D.bKF=new C.R(4,4,6,2)
D.bTN=new C.a_(62931,"MaterialIcons",!1)
D.arn=new C.a_(62951,"MaterialIcons",!1)
D.bU4=new C.a_(63070,"MaterialIcons",!1)
D.xg=new C.a_(63128,"MaterialIcons",!1)
D.Iw=new C.a_(63726,"MaterialIcons",!1)
D.asl=new C.a_(983415,"MaterialIcons",!1)
D.bWJ=new C.a_(984561,"MaterialIcons",!1)
D.bXg=new C.ae(V.l8,24,A.aQ,null,null,null)
D.bYC=new C.ae(A.nh,21,A.ab,null,null,null)
D.atV=new C.ae(A.eB,19,null,null,null,null)
D.p2=new C.ae(A.tI,21,A.ab,null,null,null)
D.c65=new C.ae(A.a42,46,A.aH,null,null,null)
D.c6o=new C.ae(A.eN,20,A.aF,null,null,null)
D.c7q=new C.ae(A.ni,null,A.aF,null,null,null)
D.ceX=x([0,2,4,6,7,9,11],y.t)
D.cx5=x([255],y.t)
D.cAi=x([A.bM,A.f1],y.O)
D.cDd=x([33,249,4,5],y.t)
D.cDe=x([33,255,11],y.t)
D.bn7=new C.u(1,0.043137254901960784,0.10588235294117647,0.24705882352941178,A.q)
D.cGk=x([D.bn7,A.dk],y.O)
D.cO1=x([A.cY,G.nF,A.ir,G.ahJ,A.cY,A.ir],y.O)
D.d4U=x([3,1,0,0,0],y.t)
D.d5j=x([0.78,1],y.n)
D.aBY=x([0,2,4,7,9,12,14,16],y.t)
D.d5B=x([A.fu,A.oG],y.O)
D.d5U=x([A.a_,A.fy],y.O)
D.aC4=x([A.c3,A.aH,A.bt,A.bl,A.bf],y.O)
D.d9T=x([A.bv,A.bd,A.bl,A.bf],y.O)
D.brh=new C.u(1,0.011764705882352941,0.023529411764705882,0.09019607843137255,A.q)
D.d9W=x([D.brh,G.akU],y.O)
D.daZ=x([A.bt,A.c3,A.aH],y.O)
D.dbq=x([0.93,0.975,1],y.n)
D.dbT=x([0,0.55,0.6],y.n)
D.blb=new C.u(1,0.23137254901960785,0.0392156862745098,0.0392156862745098,A.q)
D.dc2=x([A.uV,D.blb,A.ey],y.O)
D.buw=new C.u(1,0.01568627450980392,0.06666666666666667,0.16862745098039217,A.q)
D.bo9=new C.u(1,0.043137254901960784,0.16470588235294117,0.24705882352941178,A.q)
D.bsW=new C.u(1,0.0196078431372549,0.06274509803921569,0.11372549019607843,A.q)
D.dc4=x([D.buw,D.bo9,D.bsW],y.O)
D.dcq=x([A.at,A.fL,A.lP,A.i0,A.dB],y.O)
D.f8x=new C.y("solid","Solid")
D.eYE=new C.y("three","3D block")
D.f_Q=new C.y("neon","Neon tube")
D.f31=new C.y("gradient","Gradient")
D.f8F=new C.y("sticker","Sticker")
D.ddk=x([D.f8x,I.aTK,D.eYE,D.f_Q,D.f31,D.f8F,I.aTM,U.VQ],y.L)
D.ddl=x([A.bt,A.aH,A.bf,A.c3,A.c,A.cU],y.O)
D.hkG=new B.yU("Moon",1737,4291941851)
D.hkD=new B.yU("Earth",6371,4281908728)
D.hkH=new B.yU("Neptune",24622,4284524026)
D.hkI=new B.yU("Saturn",58232,4294829706)
D.hkE=new B.yU("Jupiter",69911,4294677052)
D.hkJ=new B.yU("Sun",696340,4294688548)
D.hkK=new B.yU("Sirius A",119e4,4290763774)
D.hkB=new B.yU("Arcturus",179e5,4294818420)
D.hkC=new B.yU("Betelgeuse",531e6,4294472049)
D.hkF=new B.yU("UY Scuti",667e6,4293870660)
D.Tb=x([D.hkG,D.hkD,D.hkH,D.hkI,D.hkE,D.hkJ,D.hkK,D.hkB,D.hkC,D.hkF],C.ar("N<yU>"))
D.ffU=new C.b0("glow","Glow",A.Ie)
D.fcL=new C.b0("rainbow","Rainbow",A.m2)
D.fdc=new C.b0("stars","Stars",A.id)
D.fcq=new C.b0("sparks","Sparks",A.eg)
D.feX=new C.b0("fire","Fire",A.vt)
D.ddI=x([D.ffU,D.fcL,D.fdc,D.fcq,D.feX],y.c)
D.ddT=x([W.alD,A.cU,A.dd],y.O)
D.deV=x([0.2,1],y.n)
D.dg5=x(["Light from the Sun takes about 8 minutes and 20 seconds to reach Earth.","There are more stars in the universe than grains of sand on all of Earth's beaches.","A day on Venus is longer than its year.","The Milky Way is about 100,000 light-years across and has 100 to 400 billion stars.","A neutron star is so dense that a teaspoon of it would weigh about a billion tonnes.","The Moon moves about 3.8 cm farther from Earth every year.","If you could fall into a black hole, tides would stretch you like spaghetti. Scientists call it spaghettification.","Earth spins at about 1,670 km/h at the equator, and orbits the Sun at about 107,000 km/h.","Gravity is the weakest of the four forces, yet it holds galaxies together.","Astronauts on the space station are not weightless because gravity is gone: they are in constant free fall around Earth.","The universe is about 13.8 billion years old and is still expanding.","Saturn is the only planet less dense than water.","On the Moon you could jump about six times higher than on Earth.","Most of the mass of a galaxy is dark matter that nobody has ever seen.","Jupiter's gravity is so strong it pulls comets and asteroids away from Earth.","A year on Neptune lasts 165 Earth years."],y.s)
D.dgM=x([0,0.42,0.43,1],y.n)
D.aD7=x([0,2,4,7,9],y.t)
D.diQ=x([A.cu,A.a_],y.O)
D.a6W=x(["Africa","Asia","Europe","North America","South America","Oceania","Antarctica","Seven seas (open ocean)"],y.s)
D.frn=new C.cY(A.bq,A.J,4)
D.djS=x([D.frn],y.S)
D.aDl=x([0,31,59,90,120,151,181,212,243,273,304,334],y.t)
D.bwU=new C.u(1,0.23137254901960785,0.16470588235294117,0.3686274509803922,A.q)
D.byz=new C.u(1,0.7058823529411765,0.37254901960784315,0.5411764705882353,A.q)
D.dkh=x([D.a0v,D.bwU,D.byz],y.O)
D.bjw=new C.u(1,0.10588235294117647,0.10588235294117647,0.2,A.q)
D.dm0=x([D.H2,D.bjw],y.O)
D.dmg=x([1.77,3.55,7.15,16.7],y.n)
D.dnI=x([N.CL,A.lP],y.O)
D.bxM=new C.u(1,0.10588235294117647,0.0392156862745098,0.0392156862745098,A.q)
D.brL=new C.u(1,0.16470588235294117,0.058823529411764705,0.058823529411764705,A.q)
D.dor=x([D.bxM,D.brL],y.O)
D.bs0=new C.u(1,0.2980392156862745,0.0392156862745098,0.3686274509803922,A.q)
D.bq7=new C.u(1,0.7058823529411765,0.09019607843137255,0.49019607843137253,A.q)
D.dow=x([D.a0A,D.bs0,D.bq7],y.O)
D.dpb=x(["March","April","May","June","July","August","September","October","November","December","January","February"],y.s)
D.f8z=new C.y("spiral","Spiral")
D.eQp=new C.y("barred","Barred spiral")
D.f1Z=new C.y("elliptical","Elliptical")
D.dq0=x([D.f8z,D.eQp,D.f1Z],y.L)
D.hkL=new B.Qt("Moon",1.62,0,4291941851)
D.hkM=new B.Qt("Mars",3.71,0.01,4294472049)
D.hkN=new B.Qt("Earth",9.81,1,4281908728)
D.hkP=new B.Qt("Jupiter",24.79,1.4,4294677052)
D.hkO=new B.Qt("Sun",274,2,4294688548)
D.AA=x([D.hkL,D.hkM,D.hkN,D.hkP,D.hkO],C.ar("N<Qt>"))
D.Tw=x([0,2,4,5,7,9,11],y.t)
D.aDS=x([0,0.7,1],y.n)
D.dt3=x([0,0.62,1],y.n)
D.dtE=x([],y.y)
D.a7k=x([],y.h)
D.du8=x([0,0.46,0.82],y.n)
D.dv7=x([0.9,0.97,1],y.n)
D.dvo=x([A.c3,A.cU,A.bt,A.bl],y.O)
D.dw8=x([N.CL,A.fX],y.O)
D.hkz=new B.vV("Sun","star",0,696340,0,609.6,274,0,5500,"It holds 99.86% of all the mass in the solar system. A million Earths would fit inside it.",4294688548)
D.hkA=new B.vV("Mercury","planet",0.39,2440,88,1407.6,3.7,0,167,"A year is only 88 days, but one sunrise to the next takes 176 Earth days.",4288455599)
D.hkr=new B.vV("Venus","planet",0.72,6052,224.7,5832.5,8.87,0,464,"The hottest planet, hotter than Mercury. It spins backwards, so the Sun rises in the west.",4294759245)
D.hky=new B.vV("Earth","planet",1,6371,365.25,24,9.81,1,15,"The only world we know with life. About 71% of its surface is ocean.",4281908728)
D.hkw=new B.vV("Mars","planet",1.52,3390,687,24.6,3.71,2,-65,"Home of Olympus Mons, a volcano 22 km high, almost three times Mount Everest.",4294472049)
D.hks=new B.vV("Jupiter","planet",5.2,69911,4331,9.9,24.79,95,-110,"Its Great Red Spot is a storm bigger than Earth that has raged for hundreds of years.",4294677052)
D.hkx=new B.vV("Saturn","planet",9.58,58232,10747,10.7,10.44,146,-140,"Its rings are mostly ice. Saturn is so light for its size that it would float in water.",4294829706)
D.hkt=new B.vV("Uranus","planet",19.2,25362,30589,17.2,8.87,28,-195,"It spins on its side, tipped over about 98 degrees, as if it rolled around its orbit.",4284999929)
D.hkv=new B.vV("Neptune","planet",30.1,24622,59800,16.1,11.15,16,-200,"Winds here reach about 2,000 km/h, the fastest in the solar system.",4284524026)
D.hku=new B.vV("Pluto","dwarf",39.5,1188,90560,153.3,0.62,5,-230,"A dwarf planet with a heart-shaped glacier. One Pluto year is 248 Earth years.",4292263162)
D.Ep=x([D.hkz,D.hkA,D.hkr,D.hky,D.hkw,D.hks,D.hkx,D.hkt,D.hkv,D.hku],C.ar("N<vV>"))
D.bss=new C.u(1,0.10588235294117647,0.043137254901960784,0.1803921568627451,A.q)
D.bpy=new C.u(1,0.023529411764705882,0.13333333333333333,0.16862745098039217,A.q)
D.dwA=x([D.H2,D.bss,D.bpy,A.aiY],y.O)
D.dyo=x([A.hk,A.eV,A.aH,A.GM],y.O)
D.eSZ=new C.y("Wide",1.7777777777777777)
D.f9E=new C.y("Tall",0.5625)
D.a7E=x([D.eSZ,I.aTy,D.f9E],C.ar("N<+(m,G)>"))
D.f98=new C.y("type","Typewriter")
D.f0N=new C.y("bounce","Bounce")
D.fa4=new C.y("wave","Wave")
D.f7l=new C.y("neon","Neon flicker")
D.fbd=new C.y("zoom","Pop")
D.eRc=new C.y("drop","Drop in")
D.eMI=new C.y("fly","Fly in")
D.f8C=new C.y("spin","Spin in")
D.f2u=new C.y("flip","Flip")
D.f3P=new C.y("jelly","Jelly")
D.f8q=new C.y("shake","Shake")
D.f2v=new C.y("float","Float")
D.f7j=new C.y("pulse","Heartbeat")
D.f8I=new C.y("swing","Swing")
D.f7X=new C.y("reveal","Reveal")
D.eT_=new C.y("blur","Zoom out")
D.f1C=new C.y("domino","Domino")
D.eS9=new C.y("spiral","Spiral in")
D.f42=new C.y("cascade","Shine sweep")
D.faa=new C.y("wobble","Wobble")
D.eY1=new C.y("rise","Rise up")
D.eXe=new C.y("scatter","Scatter & gather")
D.dCp=x([D.f98,D.f0N,D.fa4,D.f7l,I.aTE,D.fbd,I.aTL,D.eRc,D.eMI,D.f8C,D.f2u,D.f3P,D.f8q,D.f2v,D.f7j,D.f8I,D.f7X,D.eT_,D.f1C,D.eS9,D.f42,D.faa,D.eY1,D.eXe],y.L)
D.dCB=x([F.qU,A.NM],y.O)
D.Et=x([A.c3,A.bt,A.bf,A.aH,A.bl,A.bY,A.c,A.cU],y.O)
D.biq=new C.u(1,0.16862745098039217,0.06274509803921569,0.3333333333333333,A.q)
D.bmP=new C.u(1,0.984313725490196,0.8431372549019608,0.5254901960784314,A.q)
D.dEi=x([D.biq,G.ajs,D.bmP],y.O)
D.fbU=new C.b0("drop","Drop",F.a4L)
D.fbY=new C.b0("weight","Weight",A9.asS)
D.ffv=new C.b0("cannon","Newton's cannon",A.arP)
D.dFy=x([D.fbU,D.fbY,D.ffv],y.c)
D.f6t=new C.y("\ud83c\udf19","Midnight")
D.f5S=new C.y("\u2728","Starfield")
D.eNN=new C.y("\ud83c\udf0c","Aurora")
D.eTC=new C.y("\ud83c\udf05","Savanna sunset")
D.f5Z=new C.y("\ud83c\udf0a","Ocean waves")
D.eUp=new C.y("\ud83d\udd79\ufe0f","Neon grid")
D.f_i=new C.y("\ud83d\udcbb","Code rain")
D.eWt=new C.y("\ud83c\udf89","Confetti")
D.eZ7=new C.y("\ud83c\udf86","Fireworks")
D.eP9=new C.y("\ud83e\udee7","Bubbles")
D.f9C=new C.y("\u2744\ufe0f","Snowfall")
D.eV7=new C.y("\ud83e\uddf6","Kente weave")
D.eQH=new C.y("\ud83d\udd2e","Bokeh lights")
D.f_8=new C.y("\ud83c\udf27\ufe0f","Rain")
D.eRk=new C.y("\ud83d\udd25","Fire")
D.eZv=new C.y("\ud83c\udfd4\ufe0f","Paper hills")
D.eVs=new C.y("\ud83c\udfad","Stage")
D.eXh=new C.y("\u2600\ufe0f","Sunburst")
D.eZX=new C.y("\ud83e\udee0","Lava lamp")
D.eRY=new C.y("\ud83c\udf03","City night")
D.dHg=x([D.f6t,D.f5S,D.eNN,D.eTC,D.f5Z,D.eUp,D.f_i,D.eWt,D.eZ7,D.eP9,D.f9C,D.eV7,D.eQH,D.f_8,D.eRk,D.eZv,D.eVs,D.eXh,D.eZX,D.eRY],y.L)
D.dHy=x([0,0.35,0.55,0.75,1],y.n)
D.dIP=x([0.72,1],y.n)
D.dJ_=x([0,2,4,7,9,12,14,16,19,21],y.t)
D.eww={FJI:0,TZA:1,SAH:2,CAN:3,USA:4,KAZ:5,UZB:6,PNG:7,IDN:8,ARG:9,CHL:10,COD:11,SOM:12,KEN:13,SDN:14,TCD:15,HTI:16,DOM:17,RUS:18,BHS:19,FLK:20,NOR:21,GRL:22,ATF:23,TLS:24,ZAF:25,LSO:26,MEX:27,URY:28,BRA:29,BOL:30,PER:31,COL:32,PAN:33,CRI:34,NIC:35,HND:36,SLV:37,GTM:38,BLZ:39,VEN:40,GUY:41,SUR:42,FRA:43,ECU:44,PRI:45,JAM:46,CUB:47,ZWE:48,BWA:49,NAM:50,SEN:51,MLI:52,MRT:53,BEN:54,NER:55,NGA:56,CMR:57,TGO:58,GHA:59,CIV:60,GIN:61,GNB:62,LBR:63,SLE:64,BFA:65,CAF:66,COG:67,GAB:68,GNQ:69,ZMB:70,MWI:71,MOZ:72,SWZ:73,AGO:74,BDI:75,ISR:76,LBN:77,MDG:78,PSX:79,GMB:80,TUN:81,DZA:82,JOR:83,ARE:84,QAT:85,KWT:86,IRQ:87,OMN:88,VUT:89,KHM:90,THA:91,LAO:92,MMR:93,VNM:94,PRK:95,KOR:96,MNG:97,IND:98,BGD:99,BTN:100,NPL:101,PAK:102,AFG:103,TJK:104,KGZ:105,TKM:106,IRN:107,SYR:108,ARM:109,SWE:110,BLR:111,UKR:112,POL:113,AUT:114,HUN:115,MDA:116,ROU:117,LTU:118,LVA:119,EST:120,DEU:121,BGR:122,GRC:123,TUR:124,ALB:125,HRV:126,CHE:127,LUX:128,BEL:129,NLD:130,PRT:131,ESP:132,IRL:133,NCL:134,SLB:135,NZL:136,AUS:137,LKA:138,CHN:139,TWN:140,ITA:141,DNK:142,GBR:143,ISL:144,AZE:145,GEO:146,PHL:147,MYS:148,BRN:149,SVN:150,FIN:151,SVK:152,CZE:153,ERI:154,JPN:155,PRY:156,YEM:157,SAU:158,ATA:159,CYN:160,CYP:161,MAR:162,EGY:163,LBY:164,ETH:165,DJI:166,SOL:167,UGA:168,RWA:169,BIH:170,MKD:171,SRB:172,MNE:173,KOS:174,TTO:175,SDS:176}
D.dLj=new C.bl(D.eww,["Suva","Dodoma","El Aai\xfan (disputed)","Ottawa","Washington, D.C.","Astana","Tashkent","Port Moresby","Jakarta","Buenos Aires","Santiago","Kinshasa","Mogadishu","Nairobi","Khartoum","N'Djamena","Port-au-Prince","Santo Domingo","Moscow","Nassau","Stanley","Oslo","Nuuk","Port-aux-Fran\xe7ais","Dili","Pretoria, Cape Town, Bloemfontein","Maseru","Mexico City","Montevideo","Bras\xedlia","Sucre and La Paz","Lima","Bogot\xe1","Panama City","San Jos\xe9","Managua","Tegucigalpa","San Salvador","Guatemala City","Belmopan","Caracas","Georgetown","Paramaribo","Paris","Quito","San Juan","Kingston","Havana","Harare","Gaborone","Windhoek","Dakar","Bamako","Nouakchott","Porto-Novo","Niamey","Abuja","Yaound\xe9","Lom\xe9","Accra","Yamoussoukro","Conakry","Bissau","Monrovia","Freetown","Ouagadougou","Bangui","Brazzaville","Libreville","Malabo","Lusaka","Lilongwe","Maputo","Mbabane","Luanda","Gitega","Jerusalem","Beirut","Antananarivo","Ramallah (seat of government)","Banjul","Tunis","Algiers","Amman","Abu Dhabi","Doha","Kuwait City","Baghdad","Muscat","Port Vila","Phnom Penh","Bangkok","Vientiane","Naypyidaw","Hanoi","Pyongyang","Seoul","Ulaanbaatar","New Delhi","Dhaka","Thimphu","Kathmandu","Islamabad","Kabul","Dushanbe","Bishkek","Ashgabat","Tehran","Damascus","Yerevan","Stockholm","Minsk","Kyiv","Warsaw","Vienna","Budapest","Chi\u0219in\u0103u","Bucharest","Vilnius","Riga","Tallinn","Berlin","Sofia","Athens","Ankara","Tirana","Zagreb","Bern","Luxembourg","Brussels","Amsterdam","Lisbon","Madrid","Dublin","Noum\xe9a","Honiara","Wellington","Canberra","Sri Jayawardenepura Kotte","Beijing","Taipei","Rome","Copenhagen","London","Reykjav\xedk","Baku","Tbilisi","Manila","Kuala Lumpur","Bandar Seri Begawan","Ljubljana","Helsinki","Bratislava","Prague","Asmara","Tokyo","Asunci\xf3n","Sana'a","Riyadh","No capital (research stations)","North Nicosia","Nicosia","Rabat","Cairo","Tripoli","Addis Ababa","Djibouti","Hargeisa","Kampala","Kigali","Sarajevo","Skopje","Belgrade","Podgorica","Pristina","Port of Spain","Juba"],C.ar("bl<m,m>"))
D.ewd={Africa:0,Asia:1,Europe:2,"North America":3,"South America":4,Oceania:5,Antarctica:6}
D.fcv=new C.b0(3,20,1.9)
D.fbM=new C.b0(33,90,1.6)
D.fg_=new C.b0(52,15,3.2)
D.ffY=new C.b0(45,-100,1.8)
D.fdY=new C.b0(-15,-60,1.9)
D.fdi=new C.b0(-25,140,2.4)
D.fd6=new C.b0(-82,0,2.2)
D.aKW=new C.bl(D.ewd,[D.fcv,D.fbM,D.fg_,D.ffY,D.fdY,D.fdi,D.fd6],C.ar("bl<m,+(G,G,G)>"))
D.dNW=new C.cW([A.pQ,1,A.r7,1,A.r8,1,A.bZ,1,A.ki,2,A.xb,4,A.zK,1,A.zL,2,A.zM,4,A.vh,2,A.xa,4,A.zJ,8],C.ar("cW<tR,F>"))
D.dWV=new B.W3(null)
D.e1C=new B.X_(null)
D.e1D=new B.X1(null)
D.e1F=new B.X2(null)
D.eoD=new B.XF(null)
D.eoF=new B.XK(null)
D.eqy=new B.XR(null)
D.aNj=new B.XS(null)
D.aNr=new B.Y3(null)
D.aNs=new B.Y6(null)
D.exg=new C.r(0,-6771)
D.ezz=new C.r(1.9,-0.8)
D.ezC=new C.r(-0.22,0.09)
D.h9R=new C.C("Tap to throw in a star",null,A.kz,null,null,null,null,null,null,null,null,null)
D.bfP=new C.cl(A.z,null,null,D.h9R,null)
D.eJv=new C.cN(0,null,0,14,null,null,D.bfP,null)
D.box=new C.u(1,0.1803921568627451,0.49019607843137253,0.7686274509803922,A.q)
D.bv7=new C.u(1,0.027450980392156862,0.10196078431372549,0.2,A.q)
D.dk_=x([D.box,D.alF,D.bv7],y.O)
D.eKq=new C.bT(A.mR,0.5,A.x,null,0,D.dk_,D.aDS,null)
D.cO0=x([A.CJ,A.at,A.L],y.O)
D.dAI=x([0.3,0.7,1],y.n)
D.eKr=new C.bT(A.z,0.5,A.x,null,0,D.cO0,D.dAI,null)
D.dex=x([A.CJ,A.at,A.fL],y.O)
D.eKu=new C.bT(A.z,0.5,A.x,null,0,D.dex,null,null)
D.boO=new C.u(1,0.30980392156862746,0.6392156862745098,0.9411764705882353,A.q)
D.bma=new C.u(1,0.11372549019607843,0.37254901960784315,0.6588235294117647,A.q)
D.dhi=x([D.boO,D.bma],y.O)
D.eKz=new C.bT(A.z,0.5,A.x,null,0,D.dhi,null,null)
D.bup=new C.u(1,0.11372549019607843,0.3607843137254902,0.611764705882353,A.q)
D.brY=new C.u(1,0.043137254901960784,0.16470588235294117,0.3215686274509804,A.q)
D.bs4=new C.u(1,0.023529411764705882,0.0784313725490196,0.1568627450980392,A.q)
D.dHi=x([D.bup,D.brY,D.bs4],y.O)
D.eKA=new C.bT(A.Mv,0.5,A.x,null,0,D.dHi,G.aCD,null)
D.fc_=new C.b0("Moon",1.62,4291941851)
D.fcO=new C.b0("Neptune",11.15,4284524026)
D.fdy=new C.b0("Sun",274,4294688548)
D.fdV=new C.b0("Mercury",3.7,4288455599)
D.fe0=new C.b0("Earth",9.81,4281908728)
D.fe2=new C.b0("Mars",3.71,4294472049)
D.few=new C.b0("Venus",8.87,4294759245)
D.feE=new C.b0("Saturn",10.44,4294829706)
D.ff2=new C.b0("Jupiter",24.79,4294677052)
D.hf_=new C.C("Could not share the picture here. Try a screenshot instead.",null,null,null,null,null,null,null,null,null,null,null)
D.aWq=new C.b2(D.hf_,null,null,null,null,null,null,null,null,null,null,null,null,A.Y,!1,null,null,null,A.t,null)
D.dvS=x([A.bY,A.bt,A.bf,A.aH,A.pC,A.bY],y.O)
D.fAO=new C.hd(A.z,0,6.283185307179586,A.x,D.dvS,null,null)
D.fKv=new C.H(!0,A.aQ,null,null,null,null,10.5,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,K.Tn,null,null,null)
D.fBY=new C.eF("You are here (Sun)",null,null,A.cX,null,null,null,null,null,null,D.fKv)
D.fBZ=new C.eF("What we see",null,null,A.cX,null,null,null,null,null,null,F.ada)
D.aXf=new C.H(!0,A.bV,null,null,null,null,9.5,A.u,null,0.8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fD1=new C.H(!0,A.bf,null,null,null,null,12.5,A.P,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fFb=new C.H(!0,A.bV,null,null,null,null,9,A.u,null,0.8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fFn=new C.H(!0,A.ab,null,null,null,null,14,null,null,null,null,null,1.5,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fGE=new C.H(!0,A.bV,null,null,null,null,9,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.frF=new C.cY(A.b7,A.J,3)
D.aFy=x([D.frF],y.S)
D.fJH=new C.H(!0,A.c,null,null,null,null,11,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,K.Tn,null,null,null)
D.fKh=new C.H(!0,A.c,null,null,null,null,11.5,A.u,null,0.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.frr=new C.cY(A.v,A.J,5)
D.da8=x([D.frr],y.S)
D.fNe=new C.H(!0,A.c,null,null,null,null,13,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,D.da8,null,null,null)
D.fNl=new C.H(!0,A.c,null,null,null,null,12,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,D.aFy,null,null,null)
D.fPe=new C.H(!0,A.bV,null,null,null,null,9.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fPX=new C.H(!0,A.aF,null,null,null,null,10,null,null,null,null,null,1.25,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fSj=new C.H(!0,A.c,null,null,null,null,13,A.a8,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fYy=new C.C("Got it",null,null,null,null,null,null,null,null,null,null,null)
D.fZr=new C.C("Your mass never changes. What changes is how hard each world pulls on it.",null,A.Ly,null,null,null,null,null,null,null,null,null)
D.h_l=new C.C("Connect to the internet once and open the globe. After that it works with no internet at all.",null,A.X4,null,A.K,null,null,null,null,null,null,null)
D.fLK=new C.H(!0,A.jU,null,null,null,null,11,null,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h0T=new C.C("Bars use a squeezed scale so the Sun fits. The numbers are the true values: what a scale would read, and how high you could jump.",null,D.fLK,null,null,null,null,null,null,null,null,null)
D.h7G=new C.C("The map of the world is not saved on this phone yet",null,A.fR,null,A.K,null,null,null,null,null,null,null)
D.h7Q=new C.C("Download the animation (GIF)",null,A.cI,null,null,null,null,null,null,null,null,null)
D.fLF=new C.H(!0,A.aH,null,null,null,null,null,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h8X=new C.C("Planet Earth",null,D.fLF,null,null,null,null,null,null,null,null,null)
D.hbc=new C.C("UNIVERSE EXPLORER",null,I.acy,null,null,null,null,null,null,null,null,null)})();(function staticFields(){$.iiX=C.S(C.ar("m"),C.ar("j8"))
$.hjP=null
$.idn=C.S(C.ar("m"),C.ar("j8"))
$.ier=C.S(C.ar("m"),C.ar("j8"))})();(function lazyInitializers(){var x=a.lazyFinal
x($,"iLP","hTD",()=>C.a([B.ah9("EARTH GLOBE","Turn it, tap a country",A.nh,A.aH,new B.fzQ()),B.ah9("SOLAR SYSTEM","The Sun and its worlds",D.arn,A.aQ,new B.fzR()),B.ah9("GRAVITY LAB","Drop, weigh, orbit",F.a4L,A.cU,new B.fzS()),B.ah9("BLACK HOLE","Throw in a star",A.pR,A.bl,new B.fzT()),B.ah9("GALAXY","Build, tilt, collide",A.xf,A.hj,new B.fzU()),B.ah9("SIZE COMPARE","Earth next to a star",D.bU4,A.c3,new B.fzV()),B.ah9("SEASONS & MOON","Why it is summer",A.vi,A.bv,new B.fzW())],C.ar("N<byi>")))})()};
(a=>{a["TVXT7wfk3qS8M+HChvA+nuiRhaU="]=a.current})($__dart_deferred_initializers__);