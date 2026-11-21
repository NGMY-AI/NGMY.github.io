((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,C,A,U,V,M,W,X,Y,Z,A_,N,O,L,I,P,A0,A1,Q,R,B={bpu:function bpu(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},Rk:function Rk(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},XQ:function XQ(d){this.a=d},boB:function boB(d,e,f,g,h,i,j,k){var _=this
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
_.a9$=k
_.c=_.a=null},ePZ:function ePZ(d){this.a=d},ePX:function ePX(d){this.a=d},ePY:function ePY(){},ePA:function ePA(){},ePz:function ePz(){},ePJ:function ePJ(d,e){this.a=d
this.b=e},ePL:function ePL(d){this.a=d},ePP:function ePP(d){this.a=d},ePK:function ePK(d){this.a=d},ePQ:function ePQ(d){this.a=d},ePR:function ePR(d){this.a=d},ePS:function ePS(d,e){this.a=d
this.b=e},ePI:function ePI(d,e){this.a=d
this.b=e},ePT:function ePT(d){this.a=d},ePH:function ePH(d){this.a=d},ePU:function ePU(d,e){this.a=d
this.b=e},ePG:function ePG(d,e){this.a=d
this.b=e},ePV:function ePV(d){this.a=d},ePF:function ePF(d,e){this.a=d
this.b=e},ePW:function ePW(d){this.a=d},ePE:function ePE(d){this.a=d},ePM:function ePM(d){this.a=d},ePD:function ePD(d){this.a=d},ePN:function ePN(d){this.a=d},ePC:function ePC(d){this.a=d},ePO:function ePO(d,e){this.a=d
this.b=e},ePB:function ePB(d,e){this.a=d
this.b=e},bwi:function bwi(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.a=h},aPo:function aPo(){},
lW(d,e,f,g,h,i){return new B.ban(h,d,f,g,i,e,null)},
hPd(d,e,f,g){var x=null
return C.ce(x,x,!0,x,new B.hcd(g,e,f),d,x,!0,!0,y.H)},
j6(d,e,f,g,h,i,j){return new B.bao(f,j,i,h,g,d,e,null)},
uQ(d,e,f){return B.iD5(d,e,f)},
iD5(d,e,f){var x=0,w=C.j(y.H),v,u=2,t=[],s,r,q,p,o,n,m
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
break}p=J.eR(A.dK.gaS(q))
x=9
return C.b(C.axU(C.a([C.cJ0(p,"image/png",f+".png")],y.u),null,"Made in NGMY Core Protocol"),$async$uQ)
case 9:u=2
x=6
break
case 4:u=3
m=t.pop()
if(d.e!=null)d.L(y.J).f.T(D.aWm)
x=6
break
case 3:x=2
break
case 6:case 1:return C.h(v,w)
case 2:return C.f(t.at(-1),w)}})
return C.i($async$uQ,w)},
mH(d,e,f,g){var x,w=$.aut
if(w==="music")return E.dD(261.63*Math.pow(2,e/12),d,f,0,g,"sine")
if(w==="space"){w=Math.pow(2,e/12)
x=d==="piano"||d==="bell"||d==="pluck"?"synth":d
return E.dD(261.63*w,x,f,0,g,"sine")}return B.hhR(w,e,f,g)},
hhR(d,e,f,g){var x="tri",w="sine",v="noise",u=261.63*Math.pow(2,A.o.D(e,-12,36)/12),t=Math.min(f,260)
switch(d){case"tech":return E.dD(u*2,"",Math.min(t,110),0,g*0.45,"square")
case"sparkle":return E.dD(u*2.5,"",130,-0.35,g*0.6,x)
case"bounce":return E.dD(140+A.o.F(e,12)*9,"",150,0.9,g,w)
case"bubble":return E.dD(260+A.o.F(e,12)*22,"",120,-0.55,g*0.85,w)
case"pop":E.dD(u,"",160,-0.7,g*0.4,x)
return E.dD(900,"",90,0,g*0.45,v)
case"zap":return E.dD(u*3,"",150,1.6,g*0.4,"square")
case"click":return E.dD(2600+A.o.F(e,7)*180,"",30,0,g*0.5,v)
case"whoosh":E.dD(320,"",220,-0.7,g*0.35,w)
return E.dD(1500,"",200,0,g*0.22,v)
case"organic":return E.dD(85+A.o.F(e,12)*5,"",190,1.1,g,w)
case"lab":return E.dD(u*1.6,"",140,-0.3,g*0.55,x)
default:return E.dD(u,"",t,0,g*0.5,x)}},
Y2(d,e,f){var x,w="sine",v="noise"
if(e===1)x=1.25
else x=e===2?0.8:1
switch(d){case"kick":E.dD(95*x,"",200,1.8,f,w)
break
case"snare":E.dD(220*x,"",140,0,f*0.65,v)
break
case"hat":E.dD(5000,"",50,0,f*0.35,v)
break
case"open":E.dD(5200,"",220,0,f*0.35,v)
break
case"clap":E.dD(1100*x,"",100,0,f*0.5,v)
break
case"tom":E.dD(150*x,"",230,1,f,w)
break
case"low":E.dD(100*x,"",260,0.9,f,w)
break
case"rim":E.dD(1700*x,"",60,0,f*0.4,"square")
break
case"cow":E.dD(820*x,"",240,0,f*0.3,"square")
break
case"crash":E.dD(3200,"",650,0,f*0.4,v)
break
case"shake":E.dD(7000,"",90,0,f*0.3,v)
break
default:E.dD(60*x,"",300,0,f,w)}},
ban:function ban(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
cDM:function cDM(d){this.a=d},
cDN:function cDN(d,e){this.a=d
this.b=e},
hcd:function hcd(d,e,f){this.a=d
this.b=e
this.c=f},
hcc:function hcc(d){this.a=d},
e_:function e_(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
cDI:function cDI(d){this.a=d},
ff:function ff(d,e,f){this.c=d
this.d=e
this.a=f},
bao:function bao(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
fG:function fG(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
cDH:function cDH(d){this.a=d},
Gm:function Gm(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
cDO:function cDO(d){this.a=d},
nW:function nW(){},
cDJ:function cDJ(d,e,f){this.a=d
this.b=e
this.c=f},
cDL:function cDL(d){this.a=d},
cDK:function cDK(){},
aj5(b1,b2,b3,b4,b5,b6,b7){var x=0,w=C.j(y.D),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
var $async$aj5=C.e(function(b8,b9){if(b8===1)return C.f(b9,w)
for(;;)switch(x){case 0:a7=new B.fYK(b3)
a8=y.a
a9=C.a([],a8)
u=0
case 3:if(!(u<8)){x=4
break}b0=a9
x=5
return C.b(a7.$1(A.i.bc(u*b4/8)),$async$aj5)
case 5:b0.push(b9);++u
b6.$1(u/8*0.1)
x=3
break
case 4:t=b7*4
s=new Uint8Array(t*b5)
for(r=0;r<b5;r=p){q=r*t
p=r+1
A.aI.ev(s,q,p*t,a9[A.o.F(r,8)],q)}A.d.a5(a9)
q=new C.zX(null,null,null,null,0,A.e0,0,0)
q.bDr(null,A.aI.gaS(s),0,null,A.bZ,0,0,A.e0,b5,null,0,4,A.N1,null,A.bZ,null,null,b7,!1)
o=A_.hwa(q,255,3)
n=new Uint8Array(768)
m=0
for(;;){q=o.a
q===$&&C.d()
if(!(m<q.a&&m<255))break
l=m*3
n[l]=A.o.M(q.ot(m))
n[l+1]=A.o.M(o.a.os(m))
n[l+2]=A.o.M(o.a.or(m));++m}k=B.iy9(b7,b5,b1)
a8=new C.adG(C.a([],a8))
j=new B.chR(b7,b5,a8)
a8.I(0,new C.dg("GIF89a"))
j.Lk(b7)
j.Lk(b5)
a8.q1(247)
a8.q1(255)
a8.q1(0)
a8.I(0,n)
a8.I(0,D.cDd)
a8.I(0,new C.dg("NETSCAPE2.0"))
a8.I(0,D.d4U)
i=A.i.R(100/b2)
h=new Int16Array(2097152)
A.xG.fX(h,0,2097152,-1)
q=y.H,l=b7*b5,g=null,f=0
case 6:if(!(f<b4)){x=8
break}x=9
return C.b(a7.$1(f),$async$aj5)
case 9:e=b9
d=new Uint8Array(l)
for(a0=0,a1=0;a0<l;++a0,a1+=4){a2=e[a1]
a3=e[a1+1]
a4=e[a1+2]
a5=(a2>>>1<<14|a3>>>1<<7|a4>>>1)>>>0
m=h[a5]
if(m<0){m=o.aZI(a4,a3,a2)
h[a5]=m}d[a0]=m}for(r=0;r<b5;++r){a6=k[r]
if(a6===0)continue
a2=r*b7
A.aI.fX(d,a2,a2+a6,255)
a2=(r+1)*b7
A.aI.fX(d,a2-a6,a2,255)}if(g==null)j.aIo(0,0,b7,b5,d,i)
else j.cOY(g,d,i);++f
b6.$1(0.1+f/b4*0.9)
x=10
return C.b(C.bL(A.bG,null,q),$async$aj5)
case 10:case 7:g=d
x=6
break
case 8:a8.q1(59)
v=a8.a86()
x=1
break
case 1:return C.h(v,w)}})
return C.i($async$aj5,w)},
iy9(d,e,f){var x,w,v,u,t,s=C.c1(e,0,!1,y.r)
if(f<=0)return s
f=Math.min(f,Math.min(d,e)/2)
for(x=f*f,w=e-1,v=0;v<e;++v){u=Math.min(v,w-v)+0.5
if(u>=f)continue
t=f-u
s[v]=A.i.R(f-Math.sqrt(x-t*t))}return s},
aTl(d,e){return B.iyi(d,e)},
iyi(d,e){var x=0,w=C.j(y.w),v,u=2,t=[],s,r,q,p
var $async$aTl=C.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:q=!1
u=4
x=7
return C.b(C.axU(C.a([C.cJ0(d,"image/gif",e+".gif")],y.u),null,"Made in NGMY Core Protocol"),$async$aTl)
case 7:s=g
q=s.b!==A.W1
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
return C.b(B.h0u(d,e+".gif","image/gif"),$async$aTl)
case 10:q=g
case 9:v=q
x=1
break
case 1:return C.h(v,w)
case 2:return C.f(t.at(-1),w)}})
return C.i($async$aTl,w)},
fYK:function fYK(d){this.a=d},
chR:function chR(d,e,f){this.a=d
this.b=e
this.c=f},
chT:function chT(d,e,f){this.a=d
this.b=e
this.c=f},
chS:function chS(d,e){this.a=d
this.b=e},
hH_(d,e){var x
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
iio(d,e,f){return $.iip.c_(0,d+"|"+A.i.R(e)+"|"+f.m(),new B.fxJ(d,f,e))},
iB1(e3,e4,e5,e6){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6,d7=null,d8=e4.a,d9=e4.b,e0=0+d9,e1=new C.a3(0,0,0+d8,e0),e2=new C.e0()
e2.cT(e6*97+5)
x=new B.h3l(e2)
switch(A.o.F(e6,20)){case 0:$.T()
e0=C.L()
e0.san(B.uD(e4,D.dlX,d7))
e3.aD(e1,e0)
w=new C.r(d8*(0.5+0.2*Math.sin(6.283185307179586*e5)),d9*0.5)
e0=d8*0.5
v=C.L()
v.san(C.ws(w,e0,C.a([D.bzK,A.L],y.O),d7,A.x,d7,d7,0))
e3.O(w,e0,v)
break
case 1:$.T()
e0=C.L()
e0.san(B.uD(e4,D.d9T,d7))
e3.aD(e1,e0)
for(e0=6.283185307179586*e5,u=0;u<70;++u){v=x.$0()
t=x.$0()
s=e2.av(3)
r=x.$0()
q=new C.as(A.T,A.Q,A.W,A.X,A.U)
q.r=A.c.j(0.35+0.65*(0.5+0.5*Math.sin(e0*(1+s)+u))).gp(0)
e3.O(new C.r(v*d8,t*d9),0.6+r*1.4,q)}p=A.i.F(e5*2,1)
e0=d8*(0.1+p*0.7)
v=d9*(0.1+p*0.3)
e3.ah(new C.r(e0,v),new C.r(e0-d8*0.12,v-d9*0.05),B.hH_(A.c.j(1-p),2))
v=d8*0.85
e0=d9*0.2
t=C.L()
t.r=G.Om.gp(0)
e3.O(new C.r(v,e0),d9*0.09,t)
t=C.L()
t.r=D.a0r.gp(0)
e3.O(new C.r(v+d9*0.03,e0-d9*0.01),d9*0.08,t)
break
case 2:e0=$.T()
v=C.L()
v.san(B.uD(e4,D.dc1,d7))
e3.aD(e1,v)
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
r.r=D.d9Q[o].j(0.5).gp(0)
r.b=A.ac
r.c=v
r.y=A.apg
e3.af(n,r)}break
case 3:e0=$.T()
v=C.L()
v.san(B.uD(e4,D.dEl,D.dt2))
e3.aD(e1,v)
v=6.283185307179586*e5
i=new C.r(d8*0.5,d9*(0.64+0.01*Math.sin(v)))
t=d9*0.36
s=C.L()
s.san(C.ws(i,t,C.a([D.btO,A.L],y.O),d7,A.x,d7,d7,0))
e3.O(i,t,s)
s=C.L()
s.r=A.ZS.gp(0)
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
e0=[D.blo,D.bku,A.GB][h]
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
q=new C.ch(r-3,f,r,q)
j.push(q)
e=g.f
if(e!=null)q.aj(e)
g.ac()
r=new C.ch(r+3,f,r+8,k)
j.push(r)
q=g.f
if(q!=null)r.aj(q)
g.ac()
r=new C.as(A.T,A.Q,A.W,A.X,A.U)
r.r=A.GB.gp(0)
r.c=2
r.b=A.ac
r.d=A.bF
e3.af(g,r)}break
case 4:e0=$.T()
v=C.L()
v.san(B.uD(e4,D.dyr,D.dgJ))
e3.aD(e1,v)
v=C.L()
v.r=D.bvX.gp(0)
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
e0=C.ap(A.cC,A.t5,h/5).j(0.85)
t=$.T()
s=new C.as(A.T,A.Q,A.W,A.X,A.U)
s.r=e0.gp(0)
e3.af(n,s)}break
case 5:$.T()
e0=C.L()
e0.san(B.uD(e4,D.dou,D.dbQ))
e3.aD(e1,e0)
a4=d9*0.6
e0=d8/2
v=d9*0.26
t=C.L()
t.san(C.jP(new C.r(0,a4-v),new C.r(0,a4),D.dCD,d7,A.x,d7))
e3.O(new C.r(e0,a4),v,t)
for(v=d8*0.2,t=a4-d9*0.2,s=d9*0.012,r=v+d8*0.6,u=0;u<5;){q=t+u*d9*0.045;++u
k=new C.as(A.T,A.Q,A.W,A.X,A.U)
k.r=D.a0w.gp(0)
e3.aD(new C.a3(v,q,r,q+s*u*0.6),k)}v=C.L()
v.r=D.a0w.gp(0)
e3.aD(new C.a3(0,a4,d8,d9),v)
a5=B.hH_(A.NL.j(0.85),1.4)
for(v=d9-a4,o=0;o<10;++o){a6=(o+e5)/9
if(a6<0.02)continue
l=a4+a6*a6*v
e3.ah(new C.r(0,l),new C.r(d8,l),a5)}for(o=-8;o<=8;++o){v=o*d8
e3.ah(new C.r(e0+v*0.02,a4),new C.r(e0+v*0.2,d9),a5)}break
case 6:$.T()
e0=C.L()
e0.r=D.bvM.gp(0)
e3.aD(e1,e0)
a7=Math.max(12,d8/20)
for(e0=d8/a7,v=e5*12,t=a7*0.9,s=-a7,r=d9+a7*9,q=a7*2,a8=0;a8<e0;++a8){a9=1+A.o.F(a8,3)
b0=A.i.F(e5*a9+x.$0(),1)*r-q
for(k=a8*a7,j=a8*7,g=v*a9,o=0;o<10;++o){l=b0-o*a7
if(l<s||l>d9)continue
b1="01ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[A.o.F(j+o*3+A.i.bc(g),34)]
B.iio(b1,t,o===0?D.biq:A.bi.j(1-o/9)).a4(e3,new C.r(k,l))}}break
case 7:$.T()
e0=C.L()
e0.san(B.uD(e4,D.dnF,d7))
e3.aD(e1,e0)
for(e0=d9+30,v=e3.c,t=6.283185307179586*e5,u=0;u<60;++u){s=x.$0()
r=A.i.F(e5*(1+e2.av(2))+x.$0(),1)
J.bs(v.save())
v.translate(s*d8+Math.sin(t+u)*8,r*e0-15)
v.rotate((t*(1+A.o.F(u,3))+u)*180/3.141592653589793,0,0)
r=C.bY(A.J,4,8)
s=new C.as(A.T,A.Q,A.W,A.X,A.U)
s.r=D.ddh[A.o.F(u,6)].gp(0)
e3.aD(r,s)
v.restore()}break
case 8:$.T()
e0=C.L()
e0.san(B.uD(e4,A3.aBh,d7))
e3.aD(e1,e0)
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
k=D.daV[b2].j(v)
$.T()
j=new C.as(A.T,A.Q,A.W,A.X,A.U)
j.r=k.gp(0)
e3.O(new C.r(b3+r*b6*d9*0.34,b4+q*b6*d9*0.34+t),s,j)}}}break
case 9:$.T()
e0=C.L()
e0.san(B.uD(e4,D.d5C,d7))
e3.aD(e1,e0)
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
e0.san(B.uD(e4,D.cGj,d7))
e3.aD(e1,e0)
e0=C.L()
e0.r=G.Om.gp(0)
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
e3.c1(new C.a3(e0,v,e0+d8*1.2,v+d9*0.3),t)
break
case 11:$.T()
v=C.L()
v.r=A.ir.gp(0)
e3.aD(e1,v)
c0=d8/12
c1=A.i.F(e5*c0*6,c0*6)
for(u=-6;u<24;++u){m=u*c0+c1
v=new C.as(A.T,A.Q,A.W,A.X,A.U)
v.r=D.cO0[A.o.F(A.o.F(u,6)+6,6)].gp(0)
e3.aD(new C.a3(m,0,m+c0,e0),v)}for(e0=c0*0.3,v=c0/2,t=y.v,l=0;l<d9;l+=c0)for(s=l/c0,b4=l+v,r=b4-e0,q=b4+e0,u=-6;u<24;++u)if(A.o.F(u+A.i.bc(s),3)===0){b3=u*c0+c1+v
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
e3.aD(e1,e0)
break
case 12:$.T()
e0=C.L()
e0.san(B.uD(e4,D.d5V,d7))
e3.aD(e1,e0)
for(e0=6.283185307179586*e5,v=e0*2,u=0;u<18;++u){w=new C.r(x.$0()*d8+Math.sin(e0+u)*18,x.$0()*d9+Math.cos(e0+u*1.7)*14)
b9=d9*(0.05+x.$0()*0.1)*(1+0.15*Math.sin(v+u))
t=new C.as(A.T,A.Q,A.W,A.X,A.U)
s=A.o.F(u,5)
t.r=D.aC0[s].j(0.28).gp(0)
t.y=A.HX
e3.O(w,b9,t)
t=new C.as(A.T,A.Q,A.W,A.X,A.U)
t.r=D.aC0[s].j(0.35).gp(0)
t.c=1.2
t.b=A.ac
t.d=A.bF
e3.O(w,b9*0.9,t)}break
case 13:$.T()
e0=C.L()
e0.san(B.uD(e4,D.diM,d7))
e3.aD(e1,e0)
c2=Math.max(0,1-Math.abs(e5-0.3)*14)
if(c2>0){e0=A.c.j(0.35*c2)
v=C.L()
v.r=e0.gp(0)
e3.aD(e1,v)}for(e0=d9+40,u=0;u<70;++u){m=x.$0()*d8
l=A.i.F(e5*(2+e2.av(2))+x.$0(),1)*e0-20
v=new C.as(A.T,A.Q,A.W,A.X,A.U)
v.r=A.dC.j(0.6).gp(0)
v.c=1.3
v.b=A.ac
v.d=A.bF
e3.ah(new C.r(m,l),new C.r(m-6,l+18),v)}for(u=0;u<10;++u){e0=C.bY(new C.r(x.$0()*d8,A.i.F(e5+x.$0(),1)*d9),11,7)
v=new C.as(A.T,A.Q,A.W,A.X,A.U)
v.r=A.c.j(0.18).gp(0)
e3.c1(e0,v)}break
case 14:e0=$.T()
v=C.L()
v.san(B.uD(e4,D.dc_,d7))
e3.aD(e1,v)
for(v=d8*0.035,t=y.v,s=d8*0.02,r=d8*0.08,q=d8*0.07,k=6.283185307179586*e5,j=k*3,g=k*2,e0=e0.r,u=0;u<7;++u){c3=d8*(u+0.5)/7
c4=d9*(0.28+0.1*Math.sin(g+u*2.1)+0.06*A.o.F(u,3))
f=C.a([],t)
w=new C.aH(e0,A.aj,d7,d7,f)
f.push(new C.aZ(c3-q,d9))
w.ac()
e=new C.i5(c3-r,d9-c4*0.5,c3+Math.sin(j+u)*6,d9-c4*0.8,c3,d9-c4)
f.push(e)
d=w.f
if(d!=null)e.aj(d)
w.ac()
e=new C.i5(c3+s,d9-c4*0.6,c3+r,d9-c4*0.4,c3+q,d9)
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
f.r=A.fK.j(0.85).gp(0)
e3.af(w,f)
f=C.a([],t)
e=new C.aH(e0,A.aj,d7,d7,f)
f.push(new C.aZ(c3-v,d9))
e.ac()
d=new C.ch(c3,d9-c4*0.9,c3+v,d9)
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
f.r=A.eD.j(0.9).gp(0)
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
v.san(B.uD(e4,D.cAh,d7))
e3.aD(e1,v)
v=C.L()
v.r=A.i8.gp(0)
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
e0=D.dcn[h]
q=$.T()
k=new C.as(A.T,A.Q,A.W,A.X,A.U)
k.r=e0.gp(0)
e3.af(n,k)}break
case 16:v=$.T()
t=C.L()
t.san(B.uD(e4,D.dop,d7))
e3.aD(e1,t)
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
e=C.a([A.ex,A.er,A.ex],k)
f.san(new C.a6j(new C.r(0,0),new C.r(q,0),e,A.my,A.x,d7))
e3.aD(new C.a3(g,0,g+q,e0),f)}j=j?0:c7
g=new C.as(A.T,A.Q,A.W,A.X,A.U)
g.r=A.kF.gp(0)
e3.aD(new C.a3(j,0,j+s,r),g)}break
case 17:e0=$.T()
v=C.L()
v.san(C.ws(e1.gbD(),d8*0.7,D.ddQ,A.my,A.x,d7,d7,0))
e3.aD(e1,v)
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
e0.san(B.uD(e4,D.dw9,d7))
e3.aD(e1,e0)
for(e0=6.283185307179586*e5,v=e0*2,u=0;u<7;++u){t=x.$0()
s=Math.sin(e0+u*1.1)
r=x.$0()
q=Math.sin(v+u)
k=new C.as(A.T,A.Q,A.W,A.X,A.U)
k.r=D.dvo[A.o.F(u,4)].j(0.7).gp(0)
k.y=A.De
e3.O(new C.r(d8*(0.1+0.8*t)+q*10,d9*(0.5+0.38*s)),d9*(0.1+0.08*r),k)}break
case 19:$.T()
e0=C.L()
e0.san(B.uD(e4,D.dkd,D.aDO))
e3.aD(e1,e0)
for(u=0;u<40;++u){e0=x.$0()
v=x.$0()
t=new C.as(A.T,A.Q,A.W,A.X,A.U)
t.r=A.c.j(0.6).gp(0)
e3.O(new C.r(e0*d8,v*d9*0.45),0.7,t)}e0=C.L()
e0.r=G.Om.gp(0)
e3.O(new C.r(d8*0.8,d9*0.2),d9*0.07,e0)
m=-d8*0.02
for(e0=d9-8,v=e5*6,d1=0;m<d8;){d2=d8*(0.07+x.$0()*0.07)
d3=d9*(0.25+x.$0()*0.4)
t=d9-d3
s=m+d2
$.T()
r=new C.as(A.T,A.Q,A.W,A.X,A.U)
r.r=D.bnb.gp(0)
e3.aD(new C.a3(m,t,s,t+d3),r)
for(d4=t+6,d5=m+4,t=s-6,s=d1*31;d4<e0;d4+=11)for(r=d4*7,q=d4+6,d6=d5;d6<t;d6+=9)if(A.o.F(s+A.i.R(r)+A.i.R(d6*3)+A.i.bc(v),5)!==0){k=D.bqy.j(0.85)
$.T()
j=new C.as(A.T,A.Q,A.W,A.X,A.U)
j.r=k.gp(0)
e3.aD(new C.a3(d6,d4,d6+4,q),j)}m+=d2+2;++d1}break}},
ify(d){if(d<0.36363636363636365)return 7.5625*d*d
if(d<0.7272727272727273){d-=0.5454545454545454
return 7.5625*d*d+0.75}if(d<0.9090909090909091){d-=0.8181818181818182
return 7.5625*d*d+0.9375}d-=0.9545454545454546
return 7.5625*d*d+0.984375},
ipS(d,e,f,g,h,i,j){var x,w,v,u,t,s,r,q,p=new B.fsJ(),o=f<=1,n=o?0:e/(f-1),m=o?0:e/(f-1)
o=g/0.5
x=A.i.D((o-m*0.45)/0.55,0,1)
w=g<0.86?1:A.i.D((1-g)/0.14,0,1)
v=new C.e0()
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
if(u)p.w=(e&1)===0?A.bc:A.c2
break
case"zoom":p.c=p.d=A.ny.aA(0,x)
p.f=x*w
break
case"rainbow":p.w=new H.pA(1,A.i.F(g*360+e*40,360),0.75,1).jd()
break
case"drop":p.b=-(1-B.ify(x))*h*4
p.f=A.i.D(x*6,0,1)*w
break
case"fly":p.a=-(1-A.ei.aA(0,x))*i*0.8
p.f=A.i.D(x*4,0,1)*w
break
case"spin":p.e=(1-x)*6.283185307179586
p.c=p.d=x
p.f=w
break
case"flip":p.c=Math.cos(3.141592653589793*(1-A.e8.aA(0,x)))
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
case"blur":p.c=p.d=2.4-1.4*A.e8.aA(0,x)
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
case"rise":p.b=(1-A.cn.aA(0,x))*h*2
p.f=x*w
break
case"scatter":o=1-A.dO.aA(0,x)
p.a=o*(v.ai()-0.5)*i
p.b=o*(v.ai()-0.5)*h*6
p.e=o*(v.ai()-0.5)*6
p.f=w
break}return p},
DQ(d,e,f,g){var x=null,w=C.h_(x,A.cH,x,x,x,C.d1(x,x,x,x,x,x,x,x,x,C.l(x,x,g==null?f:x,x,x,x,x,x,x,x,x,e,x,x,A.u,g,1,!0,x,x,x,x,x,x,x,x),d),A.a7,A.cc,x,A.e1,A.cd)
w.eY()
return w},
ilu(d,e,f,g,h,i,a0){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=A.i.D(i,0,1)
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
r=new C.a3(v,w,v+s,w+t.gb8(t))
q=new B.fE7(j)
p=new B.fE8(e,f,d,u)
switch(g){case"outline":p.$2(q.$1(h),f*0.07)
break
case"three":t=C.ap(h,A.v,0.55)
t.toString
for(o=9;o>=1;--o){s=C.ap(h,t,o/9)
s.toString
n=o*f
B.DQ(e,f,q.$1(s),k).a4(d,new C.r(v+n*0.012,w+n*0.014))}B.DQ(e,f,q.$1(h),k).a4(d,u)
break
case"neon":p.$3$blur(q.$2(h,0.9*(0.6+0.4*a0)),f*0.16,new C.fZ(A.H,f*0.2))
p.$2(q.$2(h,0.9),f*0.07)
p.$2(q.$2(A.c,0.95),f*0.025)
break
case"gradient":$.T()
m=C.L()
w=r.gaLU()
v=r.gaG8()
t=C.ap(h,A.c,0.45)
t.toString
t=q.$1(t)
s=q.$1(h)
n=C.ap(h,A.aD,0.6)
n.toString
m.san(C.jP(w,v,C.a([t,s,q.$1(n)],y.O),A.my,A.x,k))
B.DQ(e,f,k,m).a4(d,u)
break
case"sticker":B.DQ(e,f,q.$2(A.v,0.3),k).a4(d,u.a6(0,new C.r(f*0.04,f*0.06)))
p.$2(q.$1(A.c),f*0.2)
p.$4$blur$shift(q.$1(A.aw),f*0.24,k,A.J)
p.$2(q.$1(A.c),f*0.17)
B.DQ(e,f,q.$1(h),k).a4(d,u)
break
case"retro":t=H.a6H(h)
l=new H.pA(t.a,A.i.F(H.a6H(h).b+150,360),t.c,t.d).jd()
for(o=5;o>=1;--o){t=o*f*0.014
B.DQ(e,f,q.$1(l),k).a4(d,new C.r(v+t,w+t))}p.$2(q.$1(A.aw),f*0.05)
B.DQ(e,f,q.$1(h),k).a4(d,u)
break
case"gold":$.T()
m=C.L()
m.san(C.jP(r.gaLU(),r.gaG8(),C.a([q.$1(A4.CD),q.$1(A.cW),q.$1(A.d9),q.$1(A.wy),q.$1(A.ip)],y.O),D.dHA,A.x,k))
p.$2(q.$1(A.tb),f*0.06)
B.DQ(e,f,k,m).a4(d,u)
break
default:B.DQ(e,f,q.$1(h),k).a4(d,u)}},
hOu(a5,a6,a7,a8,a9,b0,b1,b2,b3){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=null,a4=a5.c
J.bs(a4.save())
x=a6.a
w=a6.b
a4.clipRect(C.hP(new C.a3(0,0,0+x,0+w)),$.lD()[1],!0)
B.iB1(a5,a6,a7,a8)
v=x<w?0.9:1
u=b0*x/360*v
v=A.a.i(b3)
if(v.length===0)t=C.a(["\u2026"],y.s)
else{v=new C.mI(v)
t=C.B(v,C.a5(v).k("M.E"))}v=C.a([],y.n)
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
o.$flags&1&&C.aj(o,18)
C.kt(k,h,o.length,a3,a3)
o.splice(k,h-k)}o=C.B(i,p)
m.push(o)
l=A.d.cD(i,0,new B.h3m(v))
k=0}A.d.gal(m).push(j)
l+=v[j]}g=u*1.15
f=w/2-m.length*g/2+g/2
for(w=x/2,e=0;e<m.length;++e){d=m[e]
a0=w-A.d.cD(d,0,new B.h3n(v))/2
for(s=d.length,p=f+e*g,r=0;r<d.length;d.length===s||(0,C.I)(d),++r,a0=a1){j=d[r]
o=v[j]
a1=a0+o
if(t[j]===" ")continue
a2=B.ipS(b1,j,t.length,a7,u,x,a9)
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
B.ilu(a5,o,u,b2,h,a2.f,a2.x)
a4.restore()}}a4.restore()},
hpx(d,e,f,g,h,i,j,k,l,m){var x=0,w=C.j(y.D),v,u,t,s,r
var $async$hpx=C.e(function(n,o){if(n===1)return C.f(o,w)
for(;;)switch(x){case 0:u=d>=1
t=A.i.R(u?i:i*d)
s=A.i.R(u?i/d:i)
r=A.i.R(3.2*h)
v=B.aj5(Math.max(t,s)*22/360,h,new B.h22(t,s,r,m,j,l,e,f,g),r,s,k,t)
x=1
break
case 1:return C.h(v,w)}})
return C.i($async$hpx,w)},
fxJ:function fxJ(d,e,f){this.a=d
this.b=e
this.c=f},
h3l:function h3l(d){this.a=d},
fsJ:function fsJ(){var _=this
_.b=_.a=0
_.d=_.c=1
_.e=0
_.f=1
_.r=0
_.w=null
_.x=0},
fE7:function fE7(d){this.a=d},
fE8:function fE8(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bbh:function bbh(d,e,f,g,h,i,j,k){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.w=j
_.a=k},
h3m:function h3m(d){this.a=d},
h3n:function h3n(d){this.a=d},
h22:function h22(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
Y1:function Y1(d){this.a=d},
aus:function aus(d,e,f){var _=this
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
_.a9$=f
_.c=_.a=null},
cp1:function cp1(d,e){this.a=d
this.b=e},
coX:function coX(d){this.a=d},
coY:function coY(d){this.a=d},
coW:function coW(d,e){this.a=d
this.b=e},
coZ:function coZ(d,e){this.a=d
this.b=e},
cp_:function cp_(d){this.a=d},
cp0:function cp0(d){this.a=d},
coM:function coM(d){this.a=d},
coN:function coN(d){this.a=d},
coL:function coL(){},
coO:function coO(d,e){this.a=d
this.b=e},
coP:function coP(d,e){this.a=d
this.b=e},
coK:function coK(d,e){this.a=d
this.b=e},
coQ:function coQ(d,e){this.a=d
this.b=e},
coJ:function coJ(d,e){this.a=d
this.b=e},
coR:function coR(d,e){this.a=d
this.b=e},
coI:function coI(d,e){this.a=d
this.b=e},
coS:function coS(d,e){this.a=d
this.b=e},
coH:function coH(d,e){this.a=d
this.b=e},
coT:function coT(d){this.a=d},
coG:function coG(d){this.a=d},
coU:function coU(d){this.a=d},
coV:function coV(d){this.a=d},
coF:function coF(d,e){this.a=d
this.b=e},
aHw:function aHw(){},
bbr(){var x=0,w=C.j(y.U),v,u=2,t=[],s,r,q
var $async$bbr=C.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
s=$.hjj
x=7
return C.b(s==null?$.hjj=B.cGl():s,$async$bbr)
case 7:s=e
v=s
x=1
break
u=2
x=6
break
case 4:u=3
q=t.pop()
$.hjj=null
throw q
x=6
break
case 3:x=2
break
case 6:case 1:return C.h(v,w)
case 2:return C.f(t.at(-1),w)}})
return C.i($async$bbr,w)},
cGl(){var x=0,w=C.j(y.U),v,u
var $async$cGl=C.e(function(d,e){if(d===1)return C.f(e,w)
for(;;)switch(x){case 0:u=B
x=3
return C.b($.oJ().CV("assets/data/world110.json",!1),$async$cGl)
case 3:v=u.iaR(e)
x=1
break
case 1:return C.h(v,w)}})
return C.i($async$cGl,w)},
iaR(a1){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=y.j,d=e.a(A.V.aP(0,a1,null)),a0=C.a([],y.h)
for(x=J.aT(d),w=y.n,v=y.b,u=y.d,t=y.f;x.C();){s=u.a(x.gP(x))
r=C.a([],t)
for(q=J.a2(s),p=J.aT(e.a(q.h(s,"r")));p.C();){o=p.gP(p)
n=C.a([],v)
for(m=J.aT(e.a(o));m.C();){l=m.gP(m)
k=J.a2(l)
n.push(C.a([C.dI(k.h(l,0)),C.dI(k.h(l,1))],w))}r.push(n)}p=C.cR(q.h(s,"n"))
n=C.cR(q.h(s,"a"))
m=C.cR(q.h(s,"ct"))
k=C.cR(q.h(s,"sr"))
j=C.dI(q.h(s,"pop"))
i=C.dI(q.h(s,"gdp"))
h=C.cR(q.h(s,"inc"))
g=C.ag("^\\d\\.\\s*",!0,!1,!1,!1)
h=C.aTT(h,g,"",0)
g=C.dI(J.t(q.h(s,"c"),0))
q=C.dI(J.t(q.h(s,"c"),1))
f=new B.acW(p,n,m,k,j,i,h,g,q,r)
f.bE_(q,g,n,m,i,h,p,j,r,k)
a0.push(f)}return new B.acX(a0)},
fOF(d){if(d>=1e12)return A.i.aa(d/1e12,1)+" trillion"
if(d>=1e9)return A.i.aa(d/1e9,2)+" billion"
if(d>=1e6)return A.i.aa(d/1e6,1)+" million"
if(d>=1000)return A.i.aa(d/1000,1)+" thousand"
return A.i.aa(d,0)},
HS(d){var x,w,v,u=A.o.v(A.i.R(d))
for(x=u.length,w=0,v="";w<x;++w){if(w>0&&A.o.F(x-w,3)===0)v+=","
v+=u[w]}return v.charCodeAt(0)==0?v:v},
acW:function acW(d,e,f,g,h,i,j,k,l,m){var _=this
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
acX:function acX(d){this.a=d},
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
Qs:function Qs(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
yU:function yU(d,e,f){this.a=d
this.b=e
this.c=f},
Qr:function Qr(d){this.a=0
this.b=d
this.c=0},
icO(d,e,f){return $.icP.c_(0,d+"|"+C.v(e)+"|"+f.m(),new B.dqa(d,e,f))},
X_:function X_(d){this.a=d},
aGm:function aGm(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
_.fd$=l
_.hf$=m
_.bv$=n
_.a9$=o
_.c=_.a=null},
e9H:function e9H(d){this.a=d},
e9I:function e9I(d){this.a=d},
e9G:function e9G(d,e){this.a=d
this.b=e},
e9J:function e9J(d){this.a=d},
e9F:function e9F(d){this.a=d},
e9K:function e9K(d){this.a=d},
e9D:function e9D(d){this.a=d},
e9E:function e9E(d,e,f){this.a=d
this.b=e
this.c=f},
e9C:function e9C(d){this.a=d},
e9B:function e9B(){},
e9A:function e9A(d){this.a=d},
ea2:function ea2(d,e){this.a=d
this.b=e},
ea3:function ea3(d,e){this.a=d
this.b=e},
e9S:function e9S(d){this.a=d},
e9T:function e9T(d){this.a=d},
e9R:function e9R(d){this.a=d},
e9U:function e9U(d){this.a=d},
e9L:function e9L(d,e){this.a=d
this.b=e},
e9M:function e9M(d){this.a=d},
ea4:function ea4(d,e){this.a=d
this.b=e},
e9Q:function e9Q(d,e){this.a=d
this.b=e},
ea8:function ea8(d){this.a=d},
ea1:function ea1(d){this.a=d},
ea9:function ea9(d,e){this.a=d
this.b=e},
ea0:function ea0(d,e){this.a=d
this.b=e},
eaa:function eaa(d){this.a=d},
ea_:function ea_(d,e){this.a=d
this.b=e},
eab:function eab(d){this.a=d},
e9Z:function e9Z(d,e){this.a=d
this.b=e},
eac:function eac(d){this.a=d},
e9Y:function e9Y(d,e){this.a=d
this.b=e},
ead:function ead(d){this.a=d},
e9X:function e9X(d,e){this.a=d
this.b=e},
eae:function eae(d){this.a=d},
e9W:function e9W(d){this.a=d},
eaf:function eaf(d){this.a=d},
e9V:function e9V(d){this.a=d},
ea5:function ea5(d){this.a=d},
e9P:function e9P(d){this.a=d},
ea6:function ea6(d){this.a=d},
e9O:function e9O(d){this.a=d},
ea7:function ea7(d){this.a=d},
e9N:function e9N(d){this.a=d},
e9z:function e9z(){},
e9y:function e9y(d){this.a=d},
e9x:function e9x(d){this.a=d},
bjh:function bjh(d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
dqa:function dqa(d,e,f){this.a=d
this.b=e
this.c=f},
dqb:function dqb(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
aON:function aON(){},
aOO:function aOO(){},
ah6(d,e,f,g,h){return new B.bye(d,e,f,g,h)},
bye:function bye(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fzl:function fzl(){},
fzm:function fzm(){},
fzn:function fzn(){},
fzo:function fzo(){},
fzp:function fzp(){},
fzq:function fzq(){},
fzr:function fzr(){},
Y4:function Y4(d){this.a=d},
boN:function boN(){this.d=$
this.c=this.a=null},
eWS:function eWS(){},
eWT:function eWT(){},
eWP:function eWP(d){this.a=d},
eWQ:function eWQ(d){this.a=d},
eWO:function eWO(d){this.a=d},
eWR:function eWR(){},
eWN:function eWN(d,e){this.a=d
this.b=e},
eWM:function eWM(d){this.a=d},
idf(){var x,w,v=y.n,u=C.a([],v)
for(x=0;x<260;++x){w=new C.e0()
w.cT(x)
u.push(w.ai()*3.141592653589793*2)}v=C.a([],v)
for(x=0;x<260;++x){w=new C.e0()
w.cT(x+900)
v.push(2.2+w.ai())}return new B.boA(new C.cx(null,y.z),new B.Qr(A.cR),A.J,A.az,u,v,$,A.bG,0,C.a([],y.X),null,null)},
idh(d){return d===0?0:30+150*Math.sqrt(d/30.1)},
idg(d){return 1.5+1.6*Math.log(d.d/1000+1)},
hDV(d,e,f){return $.idT.c_(0,d+"|"+C.v(e)+"|"+f.m(),new B.fgS(d,e,f))},
XP:function XP(d){this.a=d},
boA:function boA(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
_.fd$=l
_.hf$=m
_.bv$=n
_.a9$=o
_.c=_.a=null},
ePe:function ePe(d,e){this.a=d
this.b=e},
ePp:function ePp(d,e){this.a=d
this.b=e},
ePq:function ePq(d,e){this.a=d
this.b=e},
ePm:function ePm(d){this.a=d},
ePn:function ePn(d){this.a=d},
ePo:function ePo(d){this.a=d},
ePr:function ePr(d){this.a=d},
ePl:function ePl(d){this.a=d},
ePs:function ePs(d,e){this.a=d
this.b=e},
ePt:function ePt(d){this.a=d},
ePk:function ePk(d,e){this.a=d
this.b=e},
ePu:function ePu(d){this.a=d},
ePj:function ePj(d,e){this.a=d
this.b=e},
ePv:function ePv(d){this.a=d},
ePi:function ePi(d){this.a=d},
ePw:function ePw(d){this.a=d},
ePh:function ePh(d){this.a=d},
ePx:function ePx(d){this.a=d},
ePg:function ePg(d){this.a=d},
ePy:function ePy(d){this.a=d},
ePf:function ePf(d){this.a=d},
ePd:function ePd(){},
ePc:function ePc(){},
ePb:function ePb(d){this.a=d},
ePa:function ePa(d){this.a=d},
bwg:function bwg(d,e){this.b=d
this.a=e},
fgS:function fgS(d,e,f){this.a=d
this.b=e
this.c=f},
fgT:function fgT(){},
fgU:function fgU(){},
X0:function X0(d){this.a=d},
aGn:function aGn(d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
_.fd$=m
_.hf$=n
_.bv$=o
_.a9$=p
_.c=_.a=null},
eaj:function eaj(){},
eaM:function eaM(){},
eay:function eay(d,e){this.a=d
this.b=e},
eap:function eap(d,e){this.a=d
this.b=e},
eaz:function eaz(d){this.a=d},
eao:function eao(d){this.a=d},
eaA:function eaA(d){this.a=d},
eax:function eax(d){this.a=d},
eaE:function eaE(d){this.a=d},
eaw:function eaw(d){this.a=d},
eaF:function eaF(d){this.a=d},
eav:function eav(d,e){this.a=d
this.b=e},
eaG:function eaG(d){this.a=d},
eaH:function eaH(d){this.a=d},
eau:function eau(d,e){this.a=d
this.b=e},
eaI:function eaI(d){this.a=d},
eat:function eat(d,e){this.a=d
this.b=e},
eaJ:function eaJ(d){this.a=d},
eas:function eas(d,e){this.a=d
this.b=e},
eaK:function eaK(d){this.a=d},
ear:function ear(d,e){this.a=d
this.b=e},
eaL:function eaL(d){this.a=d},
eaq:function eaq(d){this.a=d},
eaB:function eaB(d){this.a=d},
ean:function ean(d){this.a=d},
eaC:function eaC(d){this.a=d},
eam:function eam(d){this.a=d},
eaD:function eaD(d){this.a=d},
eal:function eal(d){this.a=d},
eai:function eai(d){this.a=d},
eah:function eah(){},
eak:function eak(d,e){this.a=d
this.b=e},
eag:function eag(d){this.a=d},
bep:function bep(d,e,f,g,h,i){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.a=i},
XI:function XI(d){this.a=d},
box:function box(d,e,f,g,h,i,j){var _=this
_.d=d
_.e=1
_.f=5
_.he$=e
_.mc$=f
_.fd$=g
_.hf$=h
_.bv$=i
_.a9$=j
_.c=_.a=null},
eHX:function eHX(d,e){this.a=d
this.b=e},
eHY:function eHY(d,e){this.a=d
this.b=e},
eHW:function eHW(d,e){this.a=d
this.b=e},
eHZ:function eHZ(d,e){this.a=d
this.b=e},
eHV:function eHV(d,e){this.a=d
this.b=e},
bvO:function bvO(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
ff0:function ff0(d){this.a=d},
aOP:function aOP(){},
bBz:function bBz(){},
aPk:function aPk(){},
bBK:function bBK(){},
aPn:function aPn(){},
bBM:function bBM(){},
idd(){var x,w,v,u=C.a([],y.A),t=C.a([],y.g)
for(x=0;x<150;++x){w=new C.e0()
w.cT(x)
w=w.ai()
v=new C.e0()
v.cT(x+500)
t.push(new C.r(w,v.ai()))}return new B.bn9(new C.cx(null,y.z),new B.Qr(A.cR),u,A.az,t,$,A.bG,0,C.a([],y.X),null,null)},
R0:function R0(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=1},
W2:function W2(d){this.a=d},
bn9:function bn9(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
_.fd$=k
_.hf$=l
_.bv$=m
_.a9$=n
_.c=_.a=null},
dSm:function dSm(){},
dSa:function dSa(){},
dSb:function dSb(d,e){this.a=d
this.b=e},
dSc:function dSc(d,e){this.a=d
this.b=e},
dS9:function dS9(d){this.a=d},
dS8:function dS8(d){this.a=d},
dSe:function dSe(d){this.a=d},
dS7:function dS7(d,e){this.a=d
this.b=e},
dSf:function dSf(d){this.a=d},
dS6:function dS6(d){this.a=d},
dSg:function dSg(d){this.a=d},
dS5:function dS5(d){this.a=d},
dSh:function dSh(d){this.a=d},
dS4:function dS4(d){this.a=d},
dSi:function dSi(d){this.a=d},
dS3:function dS3(d){this.a=d},
dSj:function dSj(d){this.a=d},
dS2:function dS2(d){this.a=d},
dSk:function dSk(d){this.a=d},
dS1:function dS1(d){this.a=d},
dSl:function dSl(d){this.a=d},
dS0:function dS0(d){this.a=d},
dSd:function dSd(d){this.a=d},
dS_:function dS_(d){this.a=d},
bdK:function bdK(d,e){this.b=d
this.a=e},
agL:function agL(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
WY:function WY(d){this.a=d},
bnE:function bnE(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u){var _=this
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
_.fd$=r
_.hf$=s
_.bv$=t
_.a9$=u
_.c=_.a=null},
e9_:function e9_(d){this.a=d},
e8Q:function e8Q(d,e){this.a=d
this.b=e},
e8R:function e8R(d,e){this.a=d
this.b=e},
e8P:function e8P(d,e){this.a=d
this.b=e},
e8S:function e8S(d){this.a=d},
e8O:function e8O(d){this.a=d},
e8T:function e8T(d){this.a=d},
e8N:function e8N(d,e){this.a=d
this.b=e},
e8U:function e8U(d){this.a=d},
e8M:function e8M(d,e){this.a=d
this.b=e},
e8V:function e8V(d){this.a=d},
e8L:function e8L(d,e){this.a=d
this.b=e},
e8W:function e8W(d){this.a=d},
e8K:function e8K(d,e){this.a=d
this.b=e},
e8X:function e8X(d){this.a=d},
e8J:function e8J(d){this.a=d},
e8Y:function e8Y(d){this.a=d},
e8I:function e8I(d){this.a=d},
e8Z:function e8Z(d){this.a=d},
e8H:function e8H(d){this.a=d},
bj8:function bj8(d,e){this.b=d
this.a=e},
dnk:function dnk(d){this.a=d},
XD:function XD(d){this.a=d},
bow:function bow(d,e,f,g,h,i,j,k){var _=this
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
_.fd$=h
_.hf$=i
_.bv$=j
_.a9$=k
_.c=_.a=null},
eFp:function eFp(d,e){this.a=d
this.b=e},
eFq:function eFq(d){this.a=d},
eFo:function eFo(d){this.a=d},
eFr:function eFr(d){this.a=d},
eFn:function eFn(d){this.a=d},
eFs:function eFs(d){this.a=d},
eFm:function eFm(d){this.a=d},
eFt:function eFt(d){this.a=d},
eFl:function eFl(d){this.a=d},
eFu:function eFu(d){this.a=d},
eFk:function eFk(d,e){this.a=d
this.b=e},
eFv:function eFv(d){this.a=d},
eFj:function eFj(d,e){this.a=d
this.b=e},
eFw:function eFw(d){this.a=d},
eFi:function eFi(d,e){this.a=d
this.b=e},
eFx:function eFx(d){this.a=d},
eFh:function eFh(d,e){this.a=d
this.b=e},
bv0:function bv0(d,e){this.b=d
this.a=e},
aOk:function aOk(){},
bBq:function bBq(){},
aOL:function aOL(){},
bBy:function bBy(){},
aPi:function aPi(){},
bBJ:function bBJ(){},
h0u(d,e,f){return B.iyg(d,e,f)},
iyg(d,e,f){var x=0,w=C.j(y.w),v,u=2,t=[],s,r,q,p,o,n,m
var $async$h0u=C.e(function(g,h){if(g===1){t.push(h)
x=u}for(;;)switch(x){case 0:u=4
s=C.i2([d],f)
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
return C.b(C.bL(A.iZ,null,y.H),$async$h0u)
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
return C.i($async$h0u,w)}},D,E,F,A2,G,A3,K,A4,A5,A6,A7,S,A8,T,H,A9
J=c[1]
C=c[0]
A=c[2]
U=c[332]
V=c[150]
M=c[160]
W=c[366]
X=c[107]
Y=c[216]
Z=c[217]
A_=c[67]
N=c[149]
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
G=c[354]
A3=c[361]
K=c[341]
A4=c[198]
A5=c[262]
A6=c[310]
A7=c[184]
S=c[212]
A8=c[187]
T=c[324]
H=c[72]
A9=c[367]
B.bpu.prototype={}
B.Rk.prototype={
ga0(d){return this.d}}
B.XQ.prototype={
S(){var x=C.a([],y.G),w=C.a([],y.Z)
return new B.boB(new C.cx(null,y.z),x,w,A.cR,A.bG,D.H0,null,null)}}
B.boB.prototype={
b3F(d,e){var x,w,v,u=this
if(u.ch)x=!e&&u.y-u.CW<120
else x=!0
if(x)return
u.CW=u.y
x=u.c
x.toString
w=A.o.D(A.i.bc((1-d.b/(C.aF(x,null,y.m).w.a.b*0.7))*10),0,9)
v=D.aD3[A.o.F(w,5)]+12*A.o.ap(w,5)+12
switch(u.z){case"glow":B.mH("synth",v,420,0.3)
break
case"rainbow":B.mH("bell",v,700,0.35)
break
case"stars":B.mH("pluck",v+12,400,0.4)
break
case"sparks":E.dD(2400+u.r.av(2000),"",60,0,0.18,"noise")
break
default:E.dD(110+u.r.av(60),"",140,0,0.22,"noise")}},
ch7(d){return this.b3F(d,!1)},
a_(){var x,w=this
w.a3()
x=w.q8(new B.ePZ(w))
x.fR(0)
w.w!==$&&C.aR()
w.w=x},
t(){var x=this.w
x===$&&C.d()
x.t()
this.bBw()},
gb5r(){var x=this.Q
return x<0?new H.pA(1,A.i.F(this.y*0.18,360),0.85,1).jd():D.Er[x]},
aVI(d){var x,w,v,u,t,s,r,q,p,o,n,m=this,l=m.gb5r(),k=m.z
if(k==="fire")x=5
else x=k==="sparks"?4:1
for(k=m.f,w=m.r,v=d.a,u=d.b+0,t=0;t<x;++t){s=w.ai()*3.141592653589793*2
switch(m.z){case"fire":r=w.ai()
q=m.as
p=w.ai()
o=w.ai()
n=C.ap(A.bt,A.aB,w.ai())
n.toString
k.push(new B.Rk(new C.r(v+(r-0.5)*q,u),new C.r((p-0.5)*40,-60-o*120),n,m.as*(0.3+w.ai()*0.4),m.y,700+w.av(500)))
break
case"sparks":r=Math.cos(s)
q=Math.sin(s)
p=40+w.ai()*200
o=C.ap(l,A.c,w.ai()*0.6)
o.toString
k.push(new B.Rk(d,new C.r(r*p,q*p),o,1.5+w.ai()*3,m.y,600+w.av(600)))
break
default:r=Math.cos(s)
q=Math.sin(s)
p=10+w.ai()*40
k.push(new B.Rk(d,new C.r(r*p,q*p),l,1.2+w.ai()*1.8,m.y,500))}}},
b27(d,e){var x,w,v,u,t,s=this
s.ay=!0
x=s.z
if(x==="glow"||x==="rainbow"||x==="stars"){w=s.gb5r()
v=s.as
u=s.Q<0||s.z==="rainbow"
t=C.a([],y.g)
s.ax=new B.bpu(t,x,w,v,u)
t.push(e)
t=s.ax
t.toString
s.e.push(t)}s.aVI(e)
s.b3F(e,!0)
s.l(new B.ePA())},
b26(){this.ax=null
this.l(new B.ePz())},
B(d){var x,w,v,u,t,s,r,q,p=this,o=null,n=y.p,m=C.a([C.aI(o,o,o,o,D.p1,o,o,o,new B.ePJ(p,d),o,o,o,o,"Share",o)],n),l=p.e,k=C.a([C.b4(o,o,o,new B.bwi(l,p.f,p.y,p.at,o),A.az)],n)
if(!p.ay&&l.length===0)k.push(D.bfN)
l=C.aA(A.c_,new C.an(A.a0,o,A.b4,A.t,k,o),A.y,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,new B.ePK(p),new B.ePL(p),new B.ePP(p),o,o,o,o,o,o,o,o,o,new B.ePQ(p),new B.ePR(p),o,o,o,!1,A.a4)
k=C.a([],n)
for(x=0;x<5;++x){w=D.ddF[x]
k.push(new B.e_(w.b,p.z===w.a,new B.ePS(p,w),w.c,A.c2,o))}v=C.a([new B.Gm(A.c,p.Q<0,new B.ePT(p),!0,o)],n)
for(u=0;u<8;++u)v.push(new B.Gm(D.Er[u],p.Q===u,new B.ePU(p,u),!1,o))
t=p.as
t=B.j6(A.c2,A.o.v(A.i.R(t)),"Size",36,4,new B.ePV(p),t)
s=p.ch
r=s?R.oZ:Q.tI
r=C.a([new B.e_("Sound",s,new B.ePW(p),r,A.c2,o),new B.fG(A.pU,"Undo",new B.ePM(p),A.c,o),new B.fG(D.xc,"Clear",new B.ePN(p),A.bY,o)],n)
for(x=0;x<4;++x){q=D.dwB[x]
r.push(new B.Gm(q,p.at.A(0,q),new B.ePO(p,q),!1,o))}return B.lW(A.c2,m,"Draw with your finger. Pick a brush: Glow leaves a neon line, Rainbow changes colour as you draw, Stars stamps little stars, Sparks and Fire throw live light that fades away.\n\nUndo removes your last line, Clear starts again, and Share saves a picture of your art.",new C.e4(l,p.d),"SPARK PAINTER",C.x(C.a([new B.ff(k,"BRUSH",o),new B.ff(v,"COLOUR",o),t,new B.ff(r,o,o)],n),A.l,o,A.e,A.M,0,A.p))}}
B.bwi.prototype={
a4(a3,a4){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=this,a2=null
$.T()
x=C.L()
w=a1.e
x.r=w.gp(w)
a3.aD(new C.a3(0,0,0+a4.a,0+a4.b),x)
for(x=a1.b,w=x.length,v=y.v,u=0;u<x.length;x.length===w||(0,C.I)(x),++u){t=x[u]
s=t.a
r=s.length
if(r===0)continue
switch(t.b){case"glow":r=$.T()
q=C.a([],v)
p=new C.aH(r.r,A.aj,a2,a2,q)
q.push(new C.aZ(A.d.gH(s).a,A.d.gH(s).b))
p.ac()
for(r=C.U(s),o=r.k("iO<1>"),n=new C.iO(s,1,a2,o),n.na(s,1,a2,r.c),n=new C.bQ(n,n.gJ(0),o.k("bQ<ak.E>")),o=o.k("ak.E");n.C();){r=n.d
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
s.e=A.dN
r=t.d
s.c=r*2.2
q=t.c
s.r=q.j(0.45).gp(0)
s.y=new C.fZ(A.H,r)
a3.af(p,s)
s=new C.as(A.T,A.Q,A.W,A.X,A.U)
s.b=A.ac
s.d=A.bF
s.e=A.dN
s.c=r
s.r=q.gp(0)
a3.af(p,s)
s=new C.as(A.T,A.Q,A.W,A.X,A.U)
s.b=A.ac
s.d=A.bF
s.e=A.dN
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
a1.cds(a3,f,q,h*0.5,e)
h=a0
i=0}}break}}for(x=a1.c,w=x.length,v=a1.d,u=0;u<x.length;x.length===w||(0,C.I)(x),++u){f=x[u]
h=A.i.D((v-f.e)/f.f,0,1)
s=f.a
$.T()
r=new C.as(A.T,A.Q,A.W,A.X,A.U)
r.r=f.c.j((1-h)*0.9).gp(0)
r.y=K.a2m
a3.O(s,f.d*(1-0.6*h)+1,r)}},
cds(d,e,f,g,h){var x,w,v,u,t,s,r,q=$.T(),p=C.a([],y.v),o=new C.aH(q.r,A.aj,null,null,p)
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
B.aPo.prototype={
t(){var x=this,w=x.a9$
if(w!=null)w.a7(0,x.gbB())
x.a9$=null
x.a2()},
aZ(){this.b7()
this.b5()
this.bC()}}
B.ban.prototype={
B(d){var x,w=this,v=null,u=w.c,t=F.aKT.h(0,u)
$.aut=t==null?"music":t
t=w.d
x=y.p
u=C.a([C.aI(v,v,v,v,A2.ng,v,v,v,new B.cDM(d),v,v,v,v,v,v),C.E(C.c(u,v,1,A.a2,v,v,v,C.l(v,v,t,v,v,v,v,v,v,v,v,14.5,v,v,A.u,v,v,!0,v,1.6,v,v,v,v,v,v),v,v,v),1)],x)
A.d.u(u,w.w)
u.push(C.aI(v,v,v,v,C.W(A.DD,t,v,v,v,22),v,v,v,new B.cDN(w,d),v,v,v,v,"How to play",v))
x=C.a([new C.D(D.bKD,C.A(u,A.l,v,A.e,A.h,0,v,v),v),C.E(w.f,1)],x)
x.push(C.p(v,w.r,A.f,v,v,new C.o(F.Cw,v,new C.bE(new C.ax(A.c.j(0.08),1,A.r,-1),A.a1,A.a1,A.a1),v,v,v,A.m),v,v,v,v,A.CZ,v,v,1/0))
return C.c5(v,A.c4,C.bo(!0,C.x(x,A.l,v,A.e,A.h,0,A.p),!0,!1,A.ag,!0,!0),v,!1,!1,v,v)}}
B.e_.prototype={
B(d){var x,w,v,u=this,t=null,s=C.n(999),r=u.d,q=r?u.r.j(0.22):A.c.j(0.06),p=r?u.r:A.c.j(0.12)
p=C.K(p,A.r,r?1.6:1)
x=y.p
w=C.a([],x)
v=u.f
if(v!=null)A.d.u(w,C.a([C.W(v,r?u.r:A.aR,t,t,t,16),A.e5],x))
w.push(C.c(u.c,t,t,t,t,t,t,C.l(t,t,r?A.c:A.ab,t,t,t,t,t,t,t,t,12,t,t,A.F,t,t,!0,t,t,t,t,t,t,t,t),t,t,t))
return new C.D(F.oN,C.aA(t,C.cT(t,C.A(w,A.l,t,A.e,A.M,0,t,t),t,t,A.b_,new C.o(q,t,p,s,t,t,A.m),A.eJ,t,t,t,t,A.hm,t,t,t),A.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new B.cDI(u),t,t,t,t,t,t,!1,A.a4),t)}}
B.ff.prototype={
B(d){var x=null,w=C.a([],y.p),v=this.d
if(v!=null)w.push(new C.a6(54,x,C.c(v,x,x,x,x,x,x,C.l(x,x,A.c.j(0.45),x,x,x,x,x,x,x,x,10.5,x,x,A.u,x,x,!0,x,0.8,x,x,x,x,x,x),x,x,x),x))
w.push(C.E(C.cb(C.A(this.c,A.l,x,A.e,A.h,0,x,x),A.t,x,A.y,x,x,x,x,x,A.aL),1))
return new C.D(A.cx,C.A(w,A.l,x,A.e,A.h,0,x,x),x)}}
B.bao.prototype={
B(d){var x,w,v=this,u=null,t=C.c(v.c,u,u,u,u,u,u,C.l(u,u,A.c.j(0.7),u,u,u,u,u,u,u,u,11.5,u,u,A.F,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),s=v.w
s=C.abX(d).bh4(s,A.bw,s.j(0.2),s,3.5)
x=v.f
w=v.r
s=C.E(C.Zs(C.ld(u,u,u,w,x,v.e,A.i.D(v.d,x,w)),s),1)
return new C.a6(u,34,C.A(C.a([new C.a6(78,u,t,u),s,new C.a6(38,u,C.c(v.x,u,u,u,u,u,u,Y.Lu,A.e6,u,u),u)],y.p),A.l,u,A.e,A.h,0,u,u),u)}}
B.fG.prototype={
B(d){var x=this,w=null,v=x.f,u=v.j(0.12)
return new C.D(F.oN,C.aG(!1,A.a3,!0,C.n(12),C.aM(!1,C.n(12),!0,new C.D(A5.ano,C.A(C.a([C.W(x.c,v,w,w,w,17),A.e5,C.c(x.d,w,w,w,w,w,w,C.l(w,w,v,w,w,w,w,w,w,w,w,12,w,w,A.F,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],y.p),A.l,w,A.e,A.M,0,w,w),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new B.cDH(x),w,w,w,w,w,w,w),A.f,u,0,w,w,w,w,w,A.ai),w)}}
B.Gm.prototype={
B(d){var x,w=this,v=null,u=w.d,t=u?34:28,s=u?34:28,r=w.f,q=r?v:w.c
r=r?D.fAM:v
x=u?A.c:A.aT
x=C.K(x,A.r,u?2.5:1)
return C.aA(v,C.cT(v,v,v,v,A.b_,new C.o(q,v,x,v,u?C.a([new C.aa(0,A.H,w.c.j(0.6),A.J,10)],y.V):v,r,A.a6),A.hk,v,s,v,D.ana,v,v,v,t),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new B.cDO(w),v,v,v,v,v,v,!1,A.a4)}}
B.nW.prototype={
Va(d,e){var x=C.dq()
x.seX(C.cy(C.dv(0,0,0,d,0,0),new B.cDJ(this,x,e)))
this.hf$.push(x.bn())},
mn(){var x=this,w=x.q8(new B.cDL(x))
w.fR(0)
x.he$!==$&&C.aR()
x.he$=w}}
B.chR.prototype={
Lk(d){var x=this.c
x.q1(d&255)
x.q1(A.o.aH(d,8)&255)},
aIo(d,e,f,g,h,i){var x=this,w=x.c
w.I(0,D.cDc)
x.Lk(i)
w.q1(255)
w.q1(0)
w.q1(44)
x.Lk(d)
x.Lk(e)
x.Lk(f)
x.Lk(g)
w.q1(0)
w.q1(8)
x.c7L(h)
w.q1(0)},
cOY(d,e,f){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=k.a,i=k.b
for(x=i,w=j,v=-1,u=-1,t=0;t<i;++t){s=t*j
for(r=0;r<j;++r){q=s+r
if(d[q]!==e[q]){if(r<w)w=r
if(r>v)v=r
if(t<x)x=t
if(t>u)u=t}}}if(v<0){k.aIo(0,0,1,1,new Uint8Array(C.ca(D.cx5)),f)
return}p=v-w+1
o=u-x+1
n=new Uint8Array(p*o)
for(t=0;t<o;++t){s=(x+t)*j+w
for(q=t*p,r=0;r<p;++r){m=s+r
l=e[m]
m=l===d[m]?255:l
n[q+r]=m}}k.aIo(w,x,p,o,n,f)},
c7L(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j={},i=new Int32Array(5003)
A.ig.fX(i,0,5003,-1)
x=new Int32Array(5003)
j.a=9
j.b=j.c=0
w=new Uint8Array(255)
j.d=0
v=new B.chT(j,this,w)
u=new B.chS(j,v)
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
m.q1(s)
m.I(0,C.vW(w,0,j.d))}}}
B.fsJ.prototype={}
B.bbh.prototype={
a4(d,e){var x=this
B.hOu(d,e,x.b,x.f,x.r,x.w,x.d,x.e,x.c)},
aC(d){var x=this
return d.b!==x.b||d.c!==x.c||d.d!==x.d||d.e!==x.e||d.f!==x.f||!d.r.A(0,x.r)||d.w!==x.w}}
B.Y1.prototype={
S(){return new B.aus(new C.au(new C.bd("NGMY",A.b6,A.aP),$.az()),null,null)}}
B.aus.prototype={
gK2(){var x,w=this,v=w.d
if(v===$){x=C.br(null,C.dv(0,0,0,3200,0,0),null,1,null,w)
x.cX(0)
w.d!==$&&C.bF()
w.d=x
v=x}return v},
gtQ(){var x=D.Er[this.w]
return x},
a_(){this.a3()
var x=this.gK2()
x.dq()
x.e_$.I(0,this.gcgt())},
cgu(){var x,w,v,u,t,s,r,q=this,p=q.gK2().x
p===$&&C.d()
x=q.e.a.a
w=Math.max(1,(x.length===0?A.mH:new C.mI(x)).gJ(0))
if(q.Q&&p>=q.as)for(x=w-1,v=w<=1,u=0;u<w;++u){t=q.f
s=t==="type"
if(s)r=u/w/1.8
else r=v?0:u/x*0.45
if(q.as<r&&p>=r)if(s)E.dD(1500,"",35,0,0.18,"square")
else if(t==="glitch")E.dD(400+u*60,"",70,0,0.2,"square")
else{t=t==="neon"?"synth":"pluck"
B.mH(t,D.aBU[A.o.F(u,8)]+12,450,0.35)}}q.as=p},
t(){this.gK2().t()
var x=this.e
x.V$=$.az()
x.W$=0
this.bxX()},
bsI(d){var x
this.l(new B.cp1(this,d))
x=this.gK2()
x.iD(0,0)
x.cX(0)},
a62(){var x=0,w=C.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h
var $async$a62=C.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:if(s.at>=0){x=1
break}s.l(new B.coX(s))
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
return C.b(B.hpx(D.a7E[s.z].b,l,k,j,20,1080,n,new B.coY(s),m,o),$async$a62)
case 7:q=e
if(J.ad(q)===0){o=C.bb("empty")
throw C.Y(o)}x=8
return C.b(B.aTl(q,r),$async$a62)
case 8:p=e
if(s.c!=null)s.l(new B.coZ(s,p))
u=2
x=6
break
case 4:u=3
h=t.pop()
if(s.c!=null)s.l(new B.cp_(s))
x=6
break
case 3:x=2
break
case 6:if(s.c!=null)s.l(new B.cp0(s))
case 1:return C.h(v,w)
case 2:return C.f(t.at(-1),w)}})
return C.i($async$a62,w)},
B(d){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=C.at(new C.fJ(D.a7E[l.z].b,C.bw(C.n(22),new C.e4(C.c9(l.gK2(),new B.coM(l),k),k),A.aq),k),k,k,k),i=A.c.j(0.06)
i=C.aN(k,A.Z,!1,k,!0,A.t,k,C.aO(),l.e,k,k,k,k,k,2,C.bC(k,new C.b6(4,C.n(14),A.a1),k,k,k,k,"",k,!0,k,k,k,k,k,k,i,!0,k,k,k,k,k,k,k,k,k,k,k,k,k,L.FA,"Type your title",k,k,k,k,k,!0,k,k,k,!0,!0,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k),A.y,!0,k,!0,k,!1,k,A.al,k,k,k,k,k,k,k,28,k,1,k,k,!1,"\u2022",k,new B.coN(l),k,k,k,!1,k,k,!1,k,!0,k,A.ae,k,k,k,k,k,k,k,k,k,k,k,A.hg,!0,A.a7,k,A.ao,k,k,k,k)
x=y.p
w=C.a([],x)
for(v=0;v<24;++v){u=D.dCr[v]
w.push(new B.e_(u.b,l.f===u.a,new B.coO(l,u),k,A.bt,k))}t=C.a([],x)
for(v=0;v<8;++v){u=D.ddg[v]
t.push(new B.e_(u.b,l.r===u.a,new B.coP(l,u),k,A.c2,k))}s=C.a([],x)
for(r=0;r<20;++r){q=D.dHi[r]
s.push(new B.e_(q.a+" "+q.b,l.y===r,new B.coQ(l,r),k,A.aH,k))}q=C.a([],x)
for(r=0;r<8;++r)q.push(new B.Gm(D.Er[r],l.w===r,new B.coR(l,r),!1,k))
p=C.a([],x)
for(r=0;r<3;++r)p.push(new B.e_(D.a7E[r].a,l.z===r,new B.coS(l,r),k,A.bt,k))
p.push(A.bf)
o=l.Q
n=o?"Sound on":"Sound off"
m=o?R.oZ:Q.tI
p.push(new B.e_(n,o,new B.coT(l),m,A.bt,k))
p.push(A.bf)
p.push(new B.fG(A.o4,"Replay",new B.coU(l),A.c,k))
m=l.x
m=C.a([i,A.P,new B.ff(w,"MOVE",k),new B.ff(t,"LOOK",k),new B.ff(s,"SCENE",k),new B.ff(q,"COLOUR",k),new B.ff(p,"SHAPE",k),B.j6(A.bt,A.o.v(A.i.R(m)),"Size",96,28,new B.coV(l),m),A.at],x)
i=l.at
if(i>=0)m.push(new C.D(A.kf,C.x(C.a([C.bw(C.n(6),C.jD(A.bw,k,A.bt,8,k,i,k),A.aq),A.at,C.c("Making your animation\u2026 "+A.i.R(i*100)+"%",k,k,k,k,k,k,A.ns,k,k,k)],x),A.l,k,A.e,A.h,0,A.p),k))
else m.push(new C.a6(1/0,k,C.dc(A.o8,k,D.h7K,l.gcU2(),C.bp(A.bt,k,k,k,A.v,k,A.kI,k,k,k,k,k)),k))
i=l.ax
if(i.length!==0)m.push(new C.D(A.hy,C.c(i,k,k,k,k,k,k,D.fD_,A.K,k,k),k))
return B.lW(A.bt,A.fe,"Type a word or a name. Pick how the letters move (24 ways), how they look (8 designs), and a moving background scene (20 designs). The title plays on a loop. Download saves the WHOLE animation as a sharp moving GIF to post or send.",new C.D(A.bH,j,k),"TITLE ANIMATOR",C.x(m,A.l,k,A.e,A.M,0,A.p))},
ga0(d){return this.x}}
B.aHw.prototype={
t(){var x=this,w=x.a9$
if(w!=null)w.a7(0,x.gbB())
x.a9$=null
x.a2()},
aZ(){this.b7()
this.b5()
this.bC()}}
B.acW.prototype={
bE_(d,e,f,a0,a1,a2,a3,a4,a5,a6){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=-999
for(x=h.y,w=x.length,v=g,u=v,t=999,s=999,r=0;q=x.length,r<q;x.length===w||(0,C.I)(x),++r)for(q=A.d.gae(x[r]);q.C();){p=q.gP(0)
o=J.a2(p)
if(o.h(p,0)<t)t=o.h(p,0)
if(o.h(p,0)>u)u=o.h(p,0)
if(o.h(p,1)<s)s=o.h(p,1)
if(o.h(p,1)>v)v=o.h(p,1)}h.z!==$&&C.aR()
h.z=t
h.Q!==$&&C.aR()
h.Q=u
h.as!==$&&C.aR()
h.as=s
h.at!==$&&C.aR()
h.at=v
for(n=0,r=0;r<x.length;x.length===q||(0,C.I)(x),++r){for(w=A.d.gae(x[r]),m=g,l=m,k=999,j=999;w.C();){p=w.gP(0)
o=J.a2(p)
if(o.h(p,0)<k)k=o.h(p,0)
if(o.h(p,0)>l)l=o.h(p,0)
if(o.h(p,1)<j)j=o.h(p,1)
if(o.h(p,1)>m)m=o.h(p,1)}i=Math.max(l-k,m-j)
if(i>n)n=i}h.ax!==$&&C.aR()
h.ax=n
x=h.bHi()
h.ay!==$&&C.aR()
h.ay=x},
bHi(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k
for(x=this.y,w=x.length,v=0,u=0;u<x.length;x.length===w||(0,C.I)(x),++u){t=x[u]
for(s=0,r=0;r<t.length-1;r=q){q=r+1
p=(J.t(t[r],1)+J.t(t[q],1))/2*3.141592653589793/180
o=J.t(t[r],0)
n=Math.cos(p)
m=J.t(t[r],1)
l=J.t(t[q],0)
k=Math.cos(p)
s+=o*n*J.t(t[q],1)-l*k*m}v+=Math.abs(s)/2}return v*111.32*111.32},
Gt(d,e,f){var x,w,v,u,t,s,r,q,p,o,n,m=this,l=m.z
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
B.acX.prototype={
cO7(d,e){var x,w,v,u,t,s,r,q
for(x=d;x>180;)x-=360
while(x<-180)x+=360
for(w=this.a,v=w.length,u=null,t=0;t<w.length;w.length===v||(0,C.I)(w),++t){s=w[t]
if(s.Gt(0,x,e)){if(u!=null){r=s.ax
r===$&&C.d()
q=u.ax
q===$&&C.d()
q=r<q
r=q}else r=!0
if(r)u=s}}return u}}
B.vV.prototype={}
B.Qs.prototype={}
B.yU.prototype={}
B.Qr.prototype={
fD(d,e,f){var x,w,v,u=this
if(!f)return
if((u.a+=e)<2.8)return
u.a=0
x=u.b
w=D.ceX[x.av(7)]
x=x.h9()?0:12
v=A.o.F(u.c++,3)===0?"flute":"bell"
B.mH(v,w+x-12,2200,0.1)}}
B.X_.prototype={
S(){var x=$.az()
return new B.aGm(new C.cx(null,y.z),new C.au(A.ax,x),new B.Qr(A.cR),D.dtD,A.az,D.a7k,$,A.bG,0,C.a([],y.X),null,null)}}
B.aGm.prototype={
a_(){var x=this
x.a3()
x.mn()
x.a.toString
x.b_z()},
b_z(){var x=this
x.l(new B.e9H(x))
B.bbr().bE(new B.e9I(x),y.P).eE(new B.e9J(x))},
t(){var x=this.e
x.V$=$.az()
x.W$=0
this.bAW()},
cBa(d){var x,w,v,u,t,s,r,q,p,o
this.r=d
x=C.a([],y.y)
for(w=d.a,v=w.length,u=y.l,t=0;t<w.length;w.length===v||(0,C.I)(w),++t){s=w[t]
r=C.a([],u)
for(q=s.y,p=q.length,o=0;o<q.length;q.length===p||(0,C.I)(q),++o)r.push(new B.e9K(q[o]).$0())
x.push(r)}this.w=x},
gXu(){var x=this.fy
return x.A(0,A.az)?100:Math.min(x.a,x.b)*0.43},
awo(d,e,f){var x=this
x.at=d
x.ax=e
x.ay=A.i.D(f,1,16)
x.Q=x.as=0},
aD1(d){var x
this.fx=d
x=d.ax
x===$&&C.d()
this.awo(d.x,d.w,105/Math.max(x,3))
C.f_()
B.mH("bell",(A.d.ce(D.a6W,d.c)+1)*3+12,900,0.45)
E.dD(300,"",280,1.4,0.15,"tri")},
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
cgy(d){var x,w,v,u,t,s,r,q,p,o=this,n=o.r
if(n==null||o.fy.A(0,A.az))return null
x=o.fy
w=o.gXu()
v=o.z
u=(d.a-x.a/2)/(w*v)
t=(x.b/2-d.b)/(o.gXu()*v)
s=u*u+t*t
if(s>1)return null
r=Math.sqrt(1-s)
q=o.x*3.141592653589793/180
p=Math.asin(A.i.D(r*Math.sin(q)+t*Math.cos(q),-1,1))
return n.cO7((o.y*3.141592653589793/180+Math.atan2(u,r*Math.cos(q)-t*Math.sin(q)))*180/3.141592653589793,p*180/3.141592653589793)},
cgx(d){var x=this,w=x.r
if(w==null||A.a.i(d).length===0){x.l(new B.e9D(x))
return}x.l(new B.e9E(x,w,A.a.i(d).toLowerCase()))},
bUH(){var x=null,w=this.c
w.toString
C.ce(x,x,!0,x,new B.e9B(),w,x,!0,!0,y.H)},
B(d){var x,w,v,u,t,s,r,q,p=this,o=null,n=p.fx,m=y.p,l=C.a([C.aI(o,o,o,o,D.bYC,o,o,o,p.gbUG(),o,o,o,o,"Earth facts",o),C.aI(o,o,o,o,D.p1,o,o,o,new B.ea2(p,d),o,o,o,o,"Share",o)],m),k=C.cf(new B.ea3(p,n)),j=A.c.j(0.06)
j=C.a([C.aN(o,A.Z,!1,o,!0,A.t,o,C.aO(),p.e,o,o,o,o,o,2,C.bC(o,new C.b6(4,C.n(14),A.a1),o,o,o,o,o,o,!0,o,o,o,o,o,o,j,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,L.FA,"Search a country",o,o,o,o,o,!0,o,o,o,!0,!0,!1,o,D.c6n,o,o,o,o,o,o,o,o,o,o,o,o),A.y,!0,o,!0,o,!1,o,A.al,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,p.gcgw(),o,o,o,!1,o,o,!1,o,!0,o,A.ae,o,o,o,o,o,o,o,o,o,o,o,A.jK,!0,A.a7,o,A.ao,o,o,o,o)],m)
if(p.id.length!==0){x=C.a([],m)
for(w=p.id,v=w.length,u=0;u<w.length;w.length===v||(0,C.I)(w),++u){t=w[u]
x.push(new B.e_(t.a,!1,new B.ea4(p,t),A.mu,A.aH,o))}j.push(new C.D(A.hy,new C.a6(o,38,C.cp(x,o,o,o,o,o,A.aL,!1),o),o))}j.push(A.ak)
x=C.a([new B.e_("Whole Earth",!1,new B.ea8(p),A.i1,A.aH,o)],m)
for(w=D.aKS.gdS(D.aKS),w=w.gae(w);w.C();){v=w.gP(w)
x.push(new B.e_(v.a,!1,new B.ea9(p,v),o,A.aH,o))}x.push(new B.e_("Random",!1,new B.eaa(p),A.o0,A.aH,o))
j.push(new B.ff(x,"GO TO",o))
x=p.z
j.push(B.j6(A.aH,A.i.aa(x,1)+"x","Zoom",16,0.8,new B.eab(p),x))
x=p.dy
j.push(B.j6(A.bt,A.a.b0(A.o.v(A.i.bc(x)),2,"0")+":00","Time",24,0,new B.eac(p),x))
x=p.fr
j.push(B.j6(A.be,p.czU(),"Season",365,0,new B.ead(p),x))
x=p.ch
w=p.CW
v=p.cx
s=p.cy
r=p.db
q=r?A.lA:D.Ix
j.push(new B.ff(C.a([new B.e_("Spin",x,new B.eae(p),A6.a3W,A.aH,o),new B.e_("Night",w,new B.eaf(p),A.vd,A.aH,o),new B.e_("Borders",v,new B.ea5(p),D.bTN,A.aH,o),new B.e_("Names",s,new B.ea6(p),M.DE,A.aH,o),new B.e_("Music",r,new B.ea7(p),q,A.aH,o)],m),o,o))
return B.lW(A.aH,l,"A turning Earth with every country on it.\n\nDrag to spin it. Pinch with two fingers, or use the Zoom slider, to get closer. TAP any country to select it: the globe flies there, zooms in, and shows its capital, people, size and more.\n\nType a name in the search box to fly to any country. The buttons jump to a continent. Night shows which side of Earth is dark right now; move the Time slider to turn the day, and the Season slider to see the Sun move north and south through the year.\n\nTurn Music on for quiet space sounds.",k,"EARTH GLOBE",C.x(j,A.l,o,A.e,A.M,0,A.p))},
czU(){var x,w,v
for(x=this.fr,w=0,v=0;v<12;++v)if(x>=D.aDh[v])w=v
return A.iL[w]+" "+(A.i.bc(x-D.aDh[w])+1)},
cgv(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=d.ay
j===$&&C.d()
x=j>0?d.e/j:0
w=d.e
v=w/79e8*100
u=d.c
t=new H.pA(1,A.o.F((A.d.ce(D.a6W,u)+1)*47,360),0.55,1).jd()
s=new B.e9z()
r=C.n(20)
q=C.K(t.j(0.6),A.r,1)
p=y.p
o=C.A(C.a([C.p(k,k,A.f,k,k,new C.o(t,k,k,k,k,k,A.a6),k,10,k,k,k,k,k,10),A.aa,C.E(C.c(d.a,k,1,A.a2,k,k,k,A.dq,k,k,k),1),C.aI(k,k,k,k,S.QZ,k,k,k,new B.e9y(this),k,k,k,k,k,A.cl)],p),A.l,k,A.e,A.h,0,k,k)
n=d.d
u=C.c(u+(n.length!==0?" \xb7 "+n:""),k,k,k,k,k,k,X.hF,k,k,k)
n=D.dLk.h(0,d.b)
n=s.$2("CAPITAL",n==null?"\u2014":n)
m=w>0
w=C.A(C.a([n,A.aa,s.$2("PEOPLE",m?B.fOF(w):"\u2014")],p),A.l,k,A.e,A.h,0,k,k)
j=s.$2("SIZE",B.HS(j)+" km\xb2")
if(m)n=(x<10?A.i.aa(x,1):B.HS(x))+" per km\xb2"
else n="\u2014"
n=C.A(C.a([j,A.aa,s.$2("CROWDING",n)],p),A.l,k,A.e,A.h,0,k,k)
j=s.$2("WORLD SHARE",(v<0.1?A.i.aa(v,3):A.i.aa(v,1))+"% of people")
m=d.f
l=d.r
return C.p(k,C.x(C.a([o,u,A.P,w,A.P,n,A.P,C.A(C.a([j,A.aa,s.$2("ECONOMY",m>0?"$"+B.fOF(m*1e6)+" \xb7 "+l:l)],p),A.l,k,A.e,A.h,0,k,k)],p),A.B,k,A.e,A.M,0,A.p),A.f,k,k,new C.o(D.ZC,k,q,r,k,k,A.m),k,k,k,k,D.anF,k,k,k)}}
B.bjh.prototype={
a4(d6,d7){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0=this,d1=null,d2=d7.a,d3=d7.b,d4=$.T(),d5=C.L()
d5.r=D.Cr.gp(0)
d6.aD(new C.a3(0,0,0+d2,0+d3),d5)
x=new C.e0()
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
d5.san(new C.bT(A.z,0.5,A.x,d1,0,C.a([A.L,A.aH.j(0.35),A.L],v),D.dbm,d1).az(0,C.bX(s,r*1.1)))
d6.O(s,r*1.05,d5)
q=C.bX(s,r)
d5=C.L()
d5.san(D.eKB.az(0,q))
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
i=new B.dqb(o,n,m,s,r)
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
a7=A.o.F((A.d.ce(D.a6W,a5.c)+1)*47,360)
$.T()
a8=new C.as(A.T,A.Q,A.W,A.X,A.U)
a1=a6?0.35:0.5
a8.r=new H.pA(1,a7,a1,a6?1:0.62).jd().gp(0)
a9=new C.as(A.T,A.Q,A.W,A.X,A.U)
a9.b=A.ac
a9.c=a6?2.2:p
a9.e=A.dN
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
t.y=A.v9
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
c7=B.icO(a5.a,a1,b0)
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
u.san(new C.bT(A.z,0.5,A.x,d1,0,C.a([A.L,A.L,D.biZ.j(0.78)],v),D.du8,d1).az(0,C.bX(new C.r(d2+b9*c9*r,d3-(m*b8-n*b9*c2)*r),r*(1.15+0.5*(1-d4)*0.5))))
d6.O(s,r,u)}$.T()
d2=C.L()
d2.san(new C.bT(A.z,0.5,A.x,d1,0,C.a([A.L,A.v.j(0.4)],v),D.dIQ,d1).az(0,q))
d6.O(s,r,d2)
d5.restore()
d5=C.L()
d5.b=A.ac
d5.c=1.4
d5.r=A.hj.j(0.5).gp(0)
d6.O(s,r,d5)},
aC(d){return!0}}
B.aON.prototype={
t(){var x=this,w=x.a9$
if(w!=null)w.a7(0,x.gbB())
x.a9$=null
x.a2()},
aZ(){this.b7()
this.b5()
this.bC()}}
B.aOO.prototype={
t(){var x,w,v
for(x=this.hf$,w=x.length,v=0;v<x.length;x.length===w||(0,C.I)(x),++v)x[v].a1(0)
x=this.he$
x===$&&C.d()
x.t()
this.bAV()}}
B.bye.prototype={}
B.Y4.prototype={
S(){return new B.boN()}}
B.boN.prototype={
gaWa(){var x=this.d
if(x===$)x=this.d=A.cR.av(16)
return x},
a_(){this.a3()
B.bbr().fi(new B.eWS(),new B.eWT(),y.P)},
B(d){var x=null,w=C.eS(x,x,x,!0,!0,D.Cr,x,1,!0,x,0,!1,x,!1,x,x,C.aI(x,x,x,x,D.atS,x,x,x,new B.eWP(d),x,x,x,x,x,x),x,!0,x,x,x,x,x,D.hb6,x,x,x,1,x,!0),v=C.n(18),u=A.aH.j(0.1),t=C.K(A.aH.j(0.35),A.r,1),s=y.p
return C.c5(w,D.Cr,C.cp(C.a([C.p(x,C.A(C.a([D.bXg,A.ar,C.E(C.c(D.dg2[this.gaWa()],x,x,x,x,x,x,D.fSf,x,x,x),1),C.aI(x,x,x,x,D.c7p,x,x,x,new B.eWQ(this),x,x,x,x,"Another fact",x)],s),A.l,x,A.e,A.h,0,x,x),A.f,x,x,new C.o(u,x,t,v,x,x,A.m),x,x,x,x,A.bH,x,x,x),A.aA,C.cf(new B.eWR())],s),x,x,A.a1Q,x,x,A.ah,!1),x,!1,!1,x,x)}}
B.XP.prototype={
S(){return B.idf()}}
B.boA.prototype={
crr(d){var x=d.c,w=B.idh(x),v=d.e,u=v<=0?0:6.283185307179586*(this.f/v)+x*1.7
return new C.r(Math.cos(u)*w,Math.sin(u)*w)},
a_(){this.a3()
this.mn()},
mE(d){var x,w,v,u=this
u.e.fD(0,d,u.ay)
u.f=u.f+d*u.r
x=u.Q
if(x!=null){w=u.crr(x)
v=new C.r(-w.a,-w.b).aO(0,u.w)
w=C.kY(u.x,v,1-Math.exp(-d*5))
w.toString
u.x=w}},
gcgz(){var x=this.ch
return new C.r(x.a/2,x.b/2).a6(0,this.x)},
cgD(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=this
for(x=d.a,w=d.b,v=null,u=30,t=0;t<10;++t){s=D.En[t]
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
b3n(d){this.l(new B.ePe(this,d))
C.f_()
B.mH("bell",D.dJ0[A.o.F(A.d.ce(D.En,d),10)]+12,1000,0.5)},
B(d){var x,w,v,u,t,s,r,q,p,o=this,n=null,m=o.z,l=y.p,k=C.a([C.aI(n,n,n,n,D.p1,n,n,n,new B.ePp(o,d),n,n,n,n,"Share",n)],l),j=C.cf(new B.ePq(o,m)),i=C.a([new B.e_("All",!1,new B.ePr(o),A.a4U,A.aQ,n)],l)
for(x=0;x<10;++x){w=D.En[x]
i.push(new B.e_(w.a,o.z===w,new B.ePs(o,w),n,C.b0(w.z),n))}v=Math.log(o.r+1)
u=Math.log(3651)
t=o.r
t=t<10?A.i.aa(t,0)+" d/s":""+A.i.R(t)+" d/s"
u=B.j6(A.aQ,t,"Time",1,0,new B.ePt(o),v/u)
v=o.w
v=B.j6(A.aQ,A.i.aa(v,1)+"x","Zoom",9,0.5,new B.ePu(o),v)
t=o.as
s=o.at
r=o.ax
q=o.ay
p=q?A.lA:D.Ix
return B.lW(A.aQ,k,"The Sun and its worlds, each going round at its own real speed. The distances are squeezed so everything fits.\n\nTap a planet, or use the buttons, to fly to it and read about it: how big it is, how long its day and year are, how strong its gravity is, how hot it is, and what you would weigh there.\n\nThe Time slider makes the planets move faster: at high speed you can watch a whole year of Earth go by in seconds, and see how much slower Neptune is. Pinch to zoom and drag to look around.",j,"SOLAR SYSTEM",C.x(C.a([new B.ff(i,"GO TO",n),u,v,new B.ff(C.a([new B.e_("Orbits",t,new B.ePv(o),n,A.aQ,n),new B.e_("Names",s,new B.ePw(o),n,A.aQ,n),new B.e_("Asteroids",r,new B.ePx(o),n,A.aQ,n),new B.e_("Music",q,new B.ePy(o),p,A.aQ,n)],l),n,n)],l),A.l,n,A.e,A.M,0,A.p))},
cgA(d){var x,w,v,u,t,s=null,r=C.b0(d.z),q=d.c,p=q*8.317,o=new B.ePc(),n=C.n(20),m=C.K(r.j(0.6),A.r,1),l=C.p(s,s,A.f,s,s,new C.o(r,s,s,s,s,s,A.a6),s,12,s,s,s,s,s,12),k=d.b,j=k==="star"
if(j)k="Star"
else k=k==="dwarf"?"Dwarf planet":"Planet"
x=y.p
k=C.A(C.a([l,A.aa,C.E(C.c(d.a+"  \xb7  "+k,s,s,s,s,s,s,A.jn,s,s,s),1),C.aI(s,s,s,s,S.QZ,s,s,s,new B.ePb(this),s,s,s,s,s,A.cl)],x),A.l,s,A.e,A.h,0,s,s)
l=C.c(d.y,s,s,s,s,s,s,A8.FB,s,s,s)
w=o.$2("WIDTH",B.HS(d.d*2)+" km")
v=q===0
q=C.A(C.a([w,A.aa,o.$2("FROM THE SUN",v?"\u2014":C.v(q)+" AU ("+B.HS(q*149.6)+" million km)")],x),A.l,s,A.e,A.h,0,s,s)
w=d.e
w=o.$2("ONE YEAR",w===0?"\u2014":new B.ePd().$1(w))
u=d.f
w=C.A(C.a([w,A.aa,o.$2("ONE DAY",u>=48?A.i.aa(u/24,0)+" Earth days":A.i.aa(u,1)+" hours")],x),A.l,s,A.e,A.h,0,s,s)
u=d.r
t=u>50?0:1
t=C.A(C.a([o.$2("GRAVITY",C.v(u)+" m/s\xb2 \xb7 a 50 kg person weighs "+A.i.aa(50*u/9.81,t)+" kg"),A.aa,o.$2("TEMPERATURE",""+A.o.R(d.x)+"\xb0C")],x),A.l,s,A.e,A.h,0,s,s)
u=o.$2("MOONS",j?"\u2014":""+d.w)
if(v)j="\u2014"
else j=p<90?A.i.aa(p,1)+" minutes":A.i.aa(p/60,1)+" hours"
return C.p(s,C.x(C.a([k,A.at,l,A.P,q,A.P,w,A.P,t,A.P,C.A(C.a([u,A.aa,o.$2("SUNLIGHT TAKES",j)],x),A.l,s,A.e,A.h,0,s,s)],x),A.B,s,A.e,A.M,0,A.p),A.f,s,s,new C.o(D.ZC,s,m,n,s,s,A.m),s,s,s,s,D.anF,s,s,s)}}
B.bwg.prototype={
a4(a6,a7){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=null,a4=a7.a,a5=a7.b
$.T()
x=C.L()
x.r=D.Cr.gp(0)
a6.aD(new C.a3(0,0,0+a4,0+a5),x)
w=new C.e0()
w.cT(8)
for(v=0;v<110;++v){x=w.ai()
u=w.ai()
t=w.ai()
s=new C.as(A.T,A.Q,A.W,A.X,A.U)
s.r=A.c.j(0.2+w.ai()*0.5).gp(0)
a6.O(new C.r(x*a4,u*a5),t*1.2+0.3,s)}a4=this.b
r=a4.gcgz()
q=a4.w
if(a4.as)for(a5=A.d.gae(D.En),x=new C.eI(a5,new B.fgT());x.C();){u=a5.gP(0).c
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
a6.O(new C.r(x+s*m,u+p*m),0.9,o)}l=B.idg(A.d.gH(D.En))*Math.sqrt(q)*1.4
a5=l*3.2
x=C.L()
u=y.O
x.san(new C.bT(A.z,0.5,A.x,a3,0,C.a([A.aQ.j(0.5),A.L],u),a3,a3).az(0,C.bX(r,a5)))
a6.O(r,a5,x)
x=C.L()
x.san(D.eKv.az(0,C.bX(r,l)))
a6.O(r,l,x)
if(a4.at){k=B.hDV("Sun",10.5,A.ab)
k.a4(a6,r.a6(0,new C.r(-k.b.c/2,l+4)))}for(a5=A.d.gae(D.En),x=new C.eI(a5,new B.fgU()),t=q>1.6,s=r.a,p=r.b,o=a6.c;x.C();){j=a5.gP(0)
i=j.c
m=i===0?0:30+150*Math.sqrt(i/30.1)
h=j.e
n=h<=0?0:6.283185307179586*(a4.f/h)+i*1.7
i=s+Math.cos(n)*m*q
h=p+Math.sin(n)*m*q
g=new C.r(i,h)
m=(1.5+1.6*Math.log(j.d/1000+1))*Math.sqrt(q)
f=C.b0(j.z)
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
d.y=A.v9
a6.O(g,m+3,d)
d=new C.as(A.T,A.Q,A.W,A.X,A.U)
a0=C.ap(f,A.v,0.55)
a0.toString
d.san(new C.bT(O.BP,0.5,A.x,a3,0,C.a([A.c,f,a0],u),T.SP,a3).az(0,C.bX(g,m)))
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
a6.O(new C.r(i+j*a1,h+d*a1),1.8*a0,a2)}if(t&&e==="Jupiter")for(v=0;v<4;++v){n=a4.f/D.dmd[v]*2*3.141592653589793
a1=m+(6+v*4)*Math.sqrt(q)
j=Math.cos(n)
d=Math.sin(n)
a0=Math.sqrt(q)
a2=new C.as(A.T,A.Q,A.W,A.X,A.U)
a2.r=A.ab.gp(0)
a6.O(new C.r(i+j*a1,h+d*a1),1.4*a0,a2)}if(a4.at){k=B.hDV(e,10.5,A.ab)
k.a4(a6,new C.r(i+-k.b.c/2,h+(m+4)))}}},
aC(d){return!0}}
B.X0.prototype={
S(){var x=y.i
return new B.aGn(new B.Qr(A.cR),C.c1(5,0,!1,x),C.c1(5,0,!1,x),C.c1(5,null,!1,y.B),A.J,A.J,C.a([],y.g),$,A.bG,0,C.a([],y.X),null,null)}}
B.aGn.prototype={
cEv(){var x,w,v,u,t=this
t.x=!0
t.y=0
for(x=t.z,w=t.Q,v=t.as,u=0;u<5;++u){x[u]=0
w[u]=0
v[u]=null}},
cgC(){var x,w,v,u,t=this,s="An oval orbit: it goes round Earth again and again."
t.cx=D.exh
t.cy=new C.r(t.ay,0)
x=t.db
A.d.a5(x)
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
E.dD(150,"",400,0,0.5,"noise")
E.dD(90,"",300,1.5,0.6,"sine")
t.l(new B.eaj())},
a_(){this.a3()
this.mn()},
mE(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=this
j.e.fD(0,d,j.d!=="drop")
if(j.d==="drop"&&j.x){x=d*j.w
j.y+=x
for(w=j.z,v=x/12,u=j.Q,t=j.as,s=0;s<5;++s){if(t[s]!=null)continue
r=D.Ax[s]
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
if(r.a!=="Sun")E.dD(60+q*5,"",220,0.6,0.55,"sine")
break}}}if(A.d.cw(t,new B.eaM()))j.x=!1}if(j.d==="cannon"&&j.CW){x=d*900/30
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
E.dD(70,"",350,0,0.7,"noise")
break}}w=j.db
if(w.length===0||A.d.gal(w).aI(0,j.cx).gcL()>120)w.push(j.cx)
if(w.length>700)A.d.cJ(w,0)
if(j.cx.gcL()>6e5)j.CW=!1}},
B(d){var x,w,v,u,t,s,r,q=this,p=null,o=q.d
if(o==="drop")o=q.bSI()
else o=o==="weight"?q.cMe():q.bKG()
x=y.p
w=C.a([],x)
for(v=0;v<3;++v){u=D.dFB[v]
w.push(new B.e_(u.b,q.d===u.a,new B.eay(q,u),u.c,A.cS,p))}w=C.a([new B.ff(w,p,p)],x)
if(q.d==="drop"){t=q.f
s=q.r
r=s?"Air on":"Air off"
s=C.a([new B.e_("Hammer",!t,new B.eaz(q),A1.DC,A.cS,p),new B.e_("Feather",t,new B.eaA(q),M.Ds,A.cS,p),new B.e_(r,s,new B.eaE(q),A.Ii,A.aH,p)],x)
r=q.w
A.d.u(w,C.a([new B.ff(s,p,p),B.j6(A.cS,""+A.i.R(r*100)+"%","Slow motion",1,0.05,new B.eaF(q),r),new B.ff(C.a([new B.fG(A.pQ,"Drop!",new B.eaG(q),A.be,p)],x),p,p)],x))}if(q.d==="weight"){t=q.at
t=B.j6(A.cS,""+A.i.R(t)+" kg","Your weight",120,20,new B.eaH(q),t)
s=q.ax
A.d.u(w,C.a([t,B.j6(A.cS,""+A.i.R(s*100)+" cm","Your jump",1.2,0.1,new B.eaI(q),s)],x))}if(q.d==="cannon"){t=q.ay
t=B.j6(A.cS,A.i.aa(t,1)+" km/s","Speed",13,0,new B.eaJ(q),t)
s=q.ch
A.d.u(w,C.a([t,B.j6(A.cS,A.i.aa(s,1)+"x out","View",8,0.5,new B.eaK(q),s),new B.ff(C.a([new B.fG(A.p_,"Fire!",q.gcgB(),A.be,p),new B.fG(A.pQ,"Falls",new B.eaL(q),A.c,p),new B.fG(A.pO,"Orbit 7.7",new B.eaB(q),A.c,p),new B.fG(D.bWJ,"Oval 9",new B.eaC(q),A.c,p),new B.fG(A.DH,"Escape",new B.eaD(q),A.c,p)],x),p,p)],x))}return B.lW(A.cS,A.fe,"Gravity is the pull that every thing with mass has on every other thing. The more mass, the stronger the pull.\n\nDROP: let a hammer or a feather fall on the Moon, Mars, Earth, Jupiter and the Sun at the same time. With air switched off they land together on every world (as the Apollo astronauts showed), but a world with stronger gravity makes them land sooner. Switch air on and the feather floats.\n\nWEIGHT: see what you would weigh on each world, and how high you could jump.\n\nNEWTON'S CANNON: fire a ball sideways from a very tall mountain. Too slow and it falls back. At about 7.9 km/s it keeps missing the ground and goes into orbit. At 11.2 km/s it escapes Earth completely. This is how satellites and the Moon stay up.",o,"GRAVITY LAB",C.x(w,A.l,p,A.e,A.M,0,A.p))},
bSI(){return new C.D(D.bFg,C.cf(new B.eai(this)),null)},
cMe(){var x,w,v,u=null,t=[D.fc0,D.fdU,D.fe1,D.fet,D.fe_,D.feC,D.fcN,D.ff0,D.fdx],s=y.p,r=C.a([D.fZm,A.S],s)
for(x=0;x<9;++x){w=t[x]
v=C.b0(w.c)
r.push(new C.D(A.cx,new C.c3(A.aL,A.e,A.h,A.l,u,A.p,u,0,C.a([new C.a6(62,u,C.c(w.a,u,u,u,u,u,u,new C.H(!0,v,u,u,u,u,12.5,A.u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u),u,u,u),u),new C.bz(1,A.ba,new C.Cm(new B.eak(this,w),u),u)],s),u),u))}r.push(A.at)
r.push(D.h0O)
return C.cp(r,u,u,A.hz,u,u,A.ah,!1)},
bKG(){return C.cf(new B.eag(this))}}
B.bep.prototype={
a4(d,e){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=e.a,i=e.b,h=$.T(),g=C.L()
g.r=D.Cr.gp(0)
d.aD(new C.a3(0,0,0+j,0+i),g)
x=new C.e0()
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
g.san(D.eKr.az(0,C.bX(i,s)))
d.O(i,s,g)
r=i.a6(0,new C.r(0,-s))
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
t=r.a6(0,new C.r(0,-400*j-6))
v=C.L()
v.r=A.c.gp(0)
d.O(t,4,v)
v=l.e
if(v.length>1){g=C.a([],g)
p=new C.aH(h,A.aj,k,k,g)
h=i.a
u=i.b
p.E(new C.aZ(h+A.d.gH(v).a*j,u+A.d.gH(v).b*j))
for(v=C.cS(v,1,k,C.U(v).c),t=v.$ti,v=new C.bQ(v,v.gJ(0),t.k("bQ<ak.E>")),t=t.k("ak.E");v.C();){o=v.d
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
h.r=A.cS.j(0.9).gp(0)
d.af(p,h)}if(l.f){h=l.d
m=i.a6(0,new C.r(h.a*j,h.b*j))
j=C.L()
j.r=A.cS.j(0.4).gp(0)
j.y=L.oO
d.O(m,7,j)
j=C.L()
j.r=A.c.gp(0)
d.O(m,4,j)}},
aC(d){return!0}}
B.XI.prototype={
S(){return new B.box(new C.cx(null,y.z),$,A.bG,0,C.a([],y.X),null,null)}}
B.box.prototype={
a_(){this.a3()
this.mn()},
mE(d){},
B(d){var x,w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=D.T3[m.e],j=D.T3[m.f],i=k.b>=j.b,h=i?k:j,g=i?j:k
i=h.b
x=g.b
w=i/x
v=y.p
u=C.a([C.aI(l,l,l,l,D.p1,l,l,l,new B.eHX(m,d),l,l,l,l,"Share",l)],v)
t=C.E(C.b4(l,l,l,new B.bvO(g,h,w,l),A.h2),1)
s=h.a
r=w<10?A.i.aa(w,1):B.HS(w)
q=g.a
r=C.c(s+" is "+r+" times wider than "+q,l,l,l,l,l,l,A.hs,A.K,l,l)
p=B.HS(w*w*w)
o=A.a.c7(q,"s")?"":"s"
i=C.x(C.a([t,C.p(l,C.x(C.a([r,A.at,C.c("About "+p+" "+q+o+" would fit inside "+s+".",l,l,l,l,l,l,P.uh,A.K,l,l),A.bC,C.c(q+": "+B.HS(x*2)+" km wide. "+s+": "+B.HS(i*2)+" km wide.",l,l,l,l,l,l,P.Bs,A.K,l,l)],v),A.l,l,A.e,A.h,0,A.p),A.f,l,l,l,l,l,l,l,D.bHD,l,l,1/0)],v),A.l,l,A.e,A.h,0,A.p)
s=C.a([],v)
for(n=0;n<10;++n){x=D.T3[n]
s.push(new B.e_(x.a,m.e===n,new B.eHY(m,n),l,C.b0(x.c),l))}x=C.a([],v)
for(n=0;n<10;++n){t=D.T3[n]
x.push(new B.e_(t.a,m.f===n,new B.eHZ(m,n),l,C.b0(t.c),l))}return B.lW(A.c2,u,"Pick two things in space and see them side by side at their true relative size. The text tells you how many times wider one is, and how many of the smaller one would fit inside the bigger.\n\nTry Earth and the Sun, then the Sun and Betelgeuse, to feel how big space really is.",new C.e4(i,m.d),"SIZE COMPARE",C.x(C.a([new B.ff(s,"FIRST",l),new B.ff(x,"SECOND",l)],v),A.l,l,A.e,A.M,0,A.p))}}
B.bvO.prototype={
a4(d,e){var x,w,v,u,t,s,r,q,p,o,n,m,l=null,k=e.a,j=e.b
$.T()
x=C.L()
x.r=D.bqg.gp(0)
d.aD(new C.a3(0,0,0+k,0+j),x)
w=new C.e0()
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
x=new B.ff0(d)
u=this.c
x.$3(p,r,C.b0(u.c))
t=r-q
o=new C.r(k-r+q+6+t*0.1,j+r-q-6-t*0.05)
t=this.b
x.$3(o,q,C.b0(t.c))
x=C.L()
x.b=A.ac
x.c=1.4
x.r=A.ab.gp(0)
d.O(o,q+3,x)
n=C.h_(l,A.cH,l,l,l,C.d1(l,l,l,l,l,l,l,l,l,D.fJD,t.a),A.a7,A.cc,l,A.e1,A.cd)
n.eY()
t=n.b
x=t.c
k=-q
t=t.a.c
if(k-t.gb8(t)-6<4)k=q+6
else{j=n.b.a.c
j=k-j.gb8(j)-6
k=j}n.a4(d,o.a6(0,new C.r(-x/2,k)))
m=C.h_(l,A.cH,l,l,l,C.d1(l,l,l,l,l,l,l,l,l,D.fNa,u.a),A.a7,A.cc,l,A.e1,A.cd)
m.eY()
u=m.b
k=u.c
u=u.a.c
m.a4(d,p.a6(0,new C.r(-k/2,-u.gb8(u)/2)))},
aC(d){return!0}}
B.aOP.prototype={
t(){var x=this,w=x.a9$
if(w!=null)w.a7(0,x.gbB())
x.a9$=null
x.a2()},
aZ(){this.b7()
this.b5()
this.bC()}}
B.bBz.prototype={
t(){var x,w,v
for(x=this.hf$,w=x.length,v=0;v<x.length;x.length===w||(0,C.I)(x),++v)x[v].a1(0)
x=this.he$
x===$&&C.d()
x.t()
this.bAX()}}
B.aPk.prototype={
t(){var x=this,w=x.a9$
if(w!=null)w.a7(0,x.gbB())
x.a9$=null
x.a2()},
aZ(){this.b7()
this.b5()
this.bC()}}
B.bBK.prototype={
t(){var x,w,v
for(x=this.hf$,w=x.length,v=0;v<x.length;x.length===w||(0,C.I)(x),++v)x[v].a1(0)
x=this.he$
x===$&&C.d()
x.t()
this.bBs()}}
B.aPn.prototype={
t(){var x=this,w=x.a9$
if(w!=null)w.a7(0,x.gbB())
x.a9$=null
x.a2()},
aZ(){this.b7()
this.b5()
this.bC()}}
B.bBM.prototype={
t(){var x,w,v
for(x=this.hf$,w=x.length,v=0;v<x.length;x.length===w||(0,C.I)(x),++v)x[v].a1(0)
x=this.he$
x===$&&C.d()
x.t()
this.bBv()}}
B.R0.prototype={}
B.W2.prototype={
S(){return B.idd()}}
B.bn9.prototype={
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
E.dD(70,"",500,0.3,0.5,"sine")}}A.d.bq(x,new B.dSm())},
b3o(d){var x,w,v,u=this.Q
if(u.A(0,A.az))return
x=this.gbcD()
w=d.aI(0,new C.r(u.a/2,u.b*0.42))
v=A.i.D(w.gcL()/x,1.5,12)
u=Math.atan2(w.b,w.a)
this.z.push(new B.R0(u,v,1.2,new C.rN(1,30+A.cR.ai()*40,0.9,0.7).jd()))
B.mH("bell",60+A.i.R(12-v)*2,400,0.35)},
gbcD(){var x=this.Q
return Math.min(x.a,x.b)*0.07},
B(d){var x,w,v,u,t,s,r,q,p=this,o=null,n=p.z,m=Math.sqrt(1-1/A.i.D(n.length===0?3:new C.O(n,new B.dSa(),C.U(n).k("O<1,G>")).eH(0,A.pr),1.0001,99))
n=y.p
x=C.a([C.aI(o,o,o,o,D.p1,o,o,o,new B.dSb(p,d),o,o,o,o,"Share",o)],n)
w=C.cf(new B.dSc(p,m))
v=Math.log(p.r)
u=Math.log(1e10)
t=p.r
t=t<1000?A.i.aa(t,0)+" Suns":B.fOF(t)+" Suns"
u=B.j6(A.bk,t,"Mass",1,0,new B.dSe(p),v/u)
v=C.a([new B.e_("Star (10)",!1,new B.dSf(p),o,A.bk,o),new B.e_("Cygnus X-1 (21)",!1,new B.dSg(p),o,A.bk,o),new B.e_("Milky Way core (4 million)",!1,new B.dSh(p),o,A.bk,o),new B.e_("M87 (6.5 billion)",!1,new B.dSi(p),o,A.bk,o)],n)
t=p.w
s=p.x
r=p.y
q=r?A.lA:D.Ix
return B.lW(A.bk,x,'A black hole is so heavy, squeezed into so small a place, that nothing can get out of it once it crosses the edge, called the event horizon. Not even light.\n\nTap anywhere to throw in a star and watch it spiral inwards, faster and faster. The stars behind the hole look bent, because the hole bends light itself (that is called lensing).\n\nChange the mass to see how big its edge is: if the Sun were squeezed into a ball only 3 km wide it would be a black hole. The "Time" number shows how much slower a clock runs for the star that is closest to the edge, as seen by someone far away.',w,"BLACK HOLE",C.x(C.a([u,new B.ff(v,"LIKE",o),new B.ff(C.a([new B.e_("Glowing ring",t,new B.dSj(p),o,A.bk,o),new B.e_("Bent light",s,new B.dSk(p),o,A.bk,o),new B.e_("Music",r,new B.dSl(p),q,A.bk,o),new B.fG(A.o3,"Clear",new B.dSd(p),A.c,o)],n),o,o)],n),A.l,o,A.e,A.M,0,A.p))},
ah0(d,e){var x=null
return C.E(C.x(C.a([C.c(d,x,x,x,x,x,x,D.fF8,x,x,x),A.bC,C.c(e,x,2,x,x,x,x,A7.xZ,A.K,x,x)],y.p),A.l,x,A.e,A.h,0,A.p),1)}}
B.bdK.prototype={
a4(a9,b0){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=b0.a,a8=b0.b
$.T()
x=C.L()
x.r=D.bt1.gp(0)
a9.aD(new C.a3(0,0,0+a7,0+a8),x)
x=a7/2
w=a8*0.42
v=new C.r(x,w)
u=this.b
t=u.gbcD()*(0.9+0.35*Math.log(u.r)/2.302585092994046)
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
a7.y=K.a2m
a9.O(v,t*1.5,a7)}if(u.w)for(a7=t*0.2,h=0;h<90;++h){g=h/90
a8=1.6+g*2.6
f=t*a8
e=1.4/Math.pow(a8,1.5)
d=g*40
for(a8=1-g,s=0.25+0.6*a8,r=-(f*0.55),a8=0.18*a8,a0=0;a0<4;++a0){a1=d+a0*3.141592653589793/2+u.f*e*2.2
a2=Math.sin(a1)>0
a3=Math.cos(a1)*f
q=Math.sin(a1)
p=C.ap(A.uI,A.fK,g)
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
a8.r=A.bk.j(0.55).gp(0)
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
p.y=L.oO
a9.O(new C.r(u,s),6,p)}},
aC(d){return!0}}
B.agL.prototype={}
B.WY.prototype={
S(){var x=y.q,w=y.g
return new B.bnE(new C.cx(null,y.z),new B.Qr(A.cR),C.a([],x),A.J,A.J,C.a([],x),C.a([],w),C.a([],w),C.a([],w),C.a([],w),A.J,A.J,$,A.bG,0,C.a([],y.X),null,null)}}
B.bnE.prototype={
a_(){this.a3()
this.a0R()
this.mn()},
a0R(){var x,w,v,u,t,s,r,q,p=this,o=new C.e0()
o.cT(5)
x=C.a([],y.q)
w=p.Q==="elliptical"?1800:2300
for(v=0;v<w;++v)if(p.Q==="elliptical"){u=Math.pow(o.ai(),1.6)
x.push(new B.agL(u,o.ai()*3.141592653589793*2,(o.ai()-0.5)*0.5*u,25+o.ai()*20))}else{u=Math.pow(o.ai(),0.8)
t=o.av(p.f)
s=o.ai()
r=t*(6.283185307179586/p.f)+u*p.r+(s-0.5)*(0.55-u*0.25)
s=p.w
if(s>0&&u<0.3*s+0.05){s=o.h9()?0:3.141592653589793
r=s+(o.ai()-0.5)*0.25}s=o.ai()
q=u<0.25?35+o.ai()*15:205+o.ai()*50
x.push(new B.agL(u,r,(s-0.5)*0.05*(1-u),q))}p.ay=x},
cEl(){var x,w,v,u,t,s,r,q,p,o,n,m,l=this
l.ch=!0
l.CW=D.ezA
l.cx=D.ezD
x=new C.e0()
x.cT(9)
w=l.cy
A.d.a5(w)
v=C.a([],y.q)
for(u=0;u<900;++u)v.push(new B.agL(Math.pow(x.ai(),0.8)*0.7,x.ai()*3.141592653589793*2,0,320+x.ai()*30))
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
for(t=l.ay,s=y.r,t=C.cS(t,0,C.dA(900,"count",s),C.U(t).c),p=t.$ti,t=new C.bQ(t,t.gJ(0),p.k("bQ<ak.E>")),p=p.k("ak.E");t.C();){o=t.d
if(o==null)o=p.a(o)
n=o.b
m=Math.cos(n)
o=o.a
w.push(new C.r(m*o,Math.sin(n)*o))}l.db=w
w=C.a([],v)
for(v=l.ay,v=C.cS(v,0,C.dA(900,"count",s),C.U(v).c),s=v.$ti,v=new C.bQ(v,v.gJ(0),s.k("bQ<ak.E>")),s=s.k("ak.E");v.C();){t=v.d
if(t==null)t=s.a(t)
p=t.b
o=Math.sin(p)
t=t.a+0.2
w.push(new C.r(-o*0.6/Math.sqrt(t),Math.cos(p)*0.6/Math.sqrt(t)))}l.dy=w
l.fy=l.fx=A.J
E.dD(110,"",900,0.5,0.45,"sine")},
mE(d){var x,w,v,u,t,s,r,q=this
q.e.fD(0,d,q.y)
x=q.at
w=q.ax
q.at=x+d*0.25*w
if(q.ch){v=d*0.9*w
u=q.CW.aI(0,q.fx)
t=Math.max(0.25,u.gcL())
s=u.f_(0,t).aO(0,0.9/(t*t))
x=q.fy.a6(0,s.aO(0,v))
q.fy=x
w=q.cx.aI(0,s.aO(0,v))
q.cx=w
x=q.fx.a6(0,x.aO(0,v))
q.fx=x
w=q.CW.a6(0,w.aO(0,v))
q.CW=w
r=new B.e9_(v)
r.$6(q.db,q.dy,x,w,0.5,0.35)
r.$6(q.dx,q.fr,q.CW,q.fx,0.35,0.5)}},
B(d){var x,w,v,u,t=this,s=null,r=y.p,q=C.a([C.aI(s,s,s,s,D.p1,s,s,s,new B.e8Q(t,d),s,s,s,s,"Share",s)],r),p=C.b4(s,s,s,new B.bj8(t,s),A.az),o=A.v.j(0.5),n=C.n(14),m=C.K(A.bw,A.r,1)
if(t.ch)x="Two galaxies falling together. Gravity pulls long tails of stars out. In a few billion years they settle into one big, round galaxy."
else if(t.x)x="Dark matter (purple haze) is about 5 times more than all the stars and gas together. We cannot see it, but its gravity holds the galaxy together."
else x=t.Q==="elliptical"?"An elliptical galaxy: old red and yellow stars swarming in every direction, with little new star making.":"The bright blue arms are where new stars are born. The yellow middle is older stars."
n=C.a([p,C.ao(8,C.p(s,C.c(x,s,s,s,s,s,s,A.Lr,s,s,s),A.f,s,s,new C.o(o,s,m,n,s,s,A.m),s,s,s,s,A.bT,s,s,s),s,s,10,10,s,s)],r)
m=C.a([],r)
for(w=0;w<3;++w){v=D.dpZ[w]
p=t.Q===v.a&&!t.ch
m.push(new B.e_(v.b,p,new B.e8R(t,v),s,A.hi,s))}m.push(new B.e_("Collide",t.ch,new B.e8S(t),A.xb,A.c2,s))
p=C.a([new B.ff(m,"TYPE",s)],r)
if(t.Q!=="elliptical"&&!t.ch){o=t.f
o=B.j6(A.hi,""+o,"Arms",6,2,new B.e8T(t),o)
m=t.r
A.d.u(p,C.a([o,B.j6(A.hi,A.i.aa(m,1),"Winding",6,0.8,new B.e8U(t),m)],r))}o=t.as
p.push(B.j6(A.hi,""+A.i.R(o*90)+"\xb0","Tilt",1,0.15,new B.e8V(t),o))
o=t.ax
p.push(B.j6(A.hi,A.i.aa(o,1)+"x","Speed",4,0,new B.e8W(t),o))
o=t.x
m=t.z
x=t.y
u=x?A.lA:D.Ix
p.push(new B.ff(C.a([new B.e_("Dark matter",o,new B.e8X(t),s,A.bk,s),new B.e_("You are here",m,new B.e8Y(t),s,A.aQ,s),new B.e_("Music",x,new B.e8Z(t),u,A.hi,s)],r),s,s))
return B.lW(A.hi,q,'A galaxy is a huge family of stars, gas and dust held together by gravity. Our galaxy, the Milky Way, has 100 to 400 billion stars. Our Sun is one of them, about two thirds of the way out, taking about 230 million years to go once round.\n\nBuild your own: change the number of arms, how tightly they wind, and add a bar through the middle. Try Elliptical for a galaxy shaped like a ball. "Dark matter" shows the invisible stuff that makes the outer stars move faster than the visible stars alone could explain.\n\nCollide: the Milky Way will meet the Andromeda galaxy in about 4.5 billion years. Press Collide to see what that might look like. The stars are so far apart that almost none will actually hit each other.',new C.e4(new C.an(A.a0,s,A.b4,A.t,n,s),t.d),"GALAXY",C.x(p,A.l,s,A.e,A.M,0,A.p))}}
B.bj8.prototype={
a4(a0,a1){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a1.a,d=a1.b
$.T()
x=C.L()
x.r=D.bvr.gp(0)
a0.aD(new C.a3(0,0,0+e,0+d),x)
w=new C.e0()
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
x.san(new C.bT(A.z,0.5,A.x,f,0,C.a([A.aD.j(0.32),A.aD.j(0.12),A.L],y.O),G.a5R,f).az(0,C.bX(r,d)))
a0.O(r,d,x)}p=new B.dnk(e.as)
d=q*0.3
x=C.L()
x.san(new C.bT(A.z,0.5,A.x,f,0,C.a([A.h8.j(0.85),A.au.j(0.3),A.L],y.O),f,f).az(0,C.bX(r,d)))
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
i=C.h_(f,A.cH,f,f,f,D.fBW,A.a7,A.cc,f,A.e1,A.cd)
i.eY()
i.a4(a0,j.a6(0,new C.r(-i.b.c/2,12)))}}else{h=q*0.8
o=C.L()
for(d=e.db,x=d.length,n=0;n<d.length;d.length===x||(0,C.I)(d),++n){g=d[n]
o.r=D.bwW.j(0.6).gp(0)
a0.O(p.$6(g.a,g.b,0,r,0,h),1,o)}for(d=e.dx,x=d.length,n=0;n<d.length;d.length===x||(0,C.I)(d),++n){g=d[n]
o.r=D.bqE.j(0.6).gp(0)
a0.O(p.$6(g.a,g.b,0,r,0,h),1,o)}d=e.fx
d=p.$6(d.a,d.b,0,r,0,h)
$.T()
x=C.L()
x.r=A.h8.gp(0)
a0.O(d,5,x)
e=e.CW
e=p.$6(e.a,e.b,0,r,0,h)
x=C.L()
x.r=A.iF.gp(0)
a0.O(e,5,x)}},
aC(d){return!0}}
B.XD.prototype={
S(){return new B.bow(new C.cx(null,y.z),new B.Qr(A.cR),$,A.bG,0,C.a([],y.X),null,null)}}
B.bow.prototype={
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
gczT(){var x=this.r
if(x<0.25)return"Spring in the north, autumn in the south"
if(x<0.5)return"Summer in the north, winter in the south"
if(x<0.75)return"Autumn in the north, spring in the south"
return"Winter in the north, summer in the south"},
gcpX(){var x=this.w
if(x<0.03||x>0.97)return"New Moon"
if(x<0.22)return"Waxing crescent"
if(x<0.28)return"First quarter"
if(x<0.47)return"Waxing gibbous"
if(x<0.53)return"Full Moon"
if(x<0.72)return"Waning gibbous"
if(x<0.78)return"Last quarter"
return"Waning crescent"},
B(d){var x,w,v,u,t,s=this,r=null,q=y.p,p=C.a([C.aI(r,r,r,r,D.p1,r,r,r,new B.eFp(s,d),r,r,r,r,"Share",r)],q),o=C.E(new C.e4(C.b4(r,r,r,new B.bv0(s,r),A.h2),s.d),1)
if(s.f==="seasons")x=s.gczT()
else{x=s.gcpX()
w=A.i.ap(A.i.D(0.5-0.5*Math.cos(s.w*2*3.141592653589793),0,1)*100,1)
v=s.w
if(v>0.45&&v<0.55||v<0.05||v>0.95)v="  \xb7  Spring tides (the biggest)"
else{if(!(v>0.2&&v<0.3))v=v>0.7&&v<0.8
else v=!0
v=v?"  \xb7  Neap tides (the smallest)":""}v=x+"  \xb7  "+w+"% lit"+v
x=v}x=C.x(C.a([o,C.p(r,C.c(x,r,r,r,r,r,r,A0.WJ,A.K,r,r),A.f,r,r,r,r,r,r,r,K.anO,r,r,1/0)],q),A.l,r,A.e,A.h,0,A.p)
o=s.f
w=s.x
v=w?"Pause":"Play"
w=w?Z.vr:A.fZ
u=s.Q
t=u?A.lA:D.Ix
t=C.a([new B.ff(C.a([new B.e_("Seasons",o==="seasons",new B.eFq(s),A.DR,A.bv,r),new B.e_("Moon phases",o==="moon",new B.eFr(s),A.vd,A.bv,r),new B.e_(v,!1,new B.eFs(s),w,A.bv,r),new B.e_("Music",u,new B.eFt(s),t,A.bv,r)],q),r,r)],q)
if(s.f==="seasons"){o=s.r
o=B.j6(A.bv,D.dp9[A.o.F(A.i.bc(o*12),12)],"Month",1,0,new B.eFu(s),o)
w=s.z
A.d.u(t,C.a([o,B.j6(A.bv,A.i.aa(w,1)+"\xb0","Tilt",90,0,new B.eFv(s),w)],q))}else{q=s.w
t.push(B.j6(A.bv,""+(A.i.bc(q*29.5)+1),"Day of month",1,0,new B.eFw(s),q))}q=s.y
t.push(B.j6(A.bv,A.i.aa(q,1)+"x","Speed",4,0.2,new B.eFx(s),q))
return B.lW(A.bv,p,"SEASONS: Earth is tipped over by 23.4\xb0. When the north leans towards the Sun it is summer there (long days, high Sun), and winter in the south. Six months later it is the other way round. It is not because Earth gets closer to the Sun. Try setting the tilt to 0\xb0: the seasons vanish!\n\nMOON: the Moon always has one half lit by the Sun. As it goes round Earth we see more or less of the lit half: that is the phase. The Moon also pulls the sea towards it, which makes the tides.",x,"SEASONS & MOON",C.x(t,A.l,r,A.e,A.M,0,A.p))}}
B.bv0.prototype={
a4(b7,b8){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2=null,b3=b8.a,b4=b8.b,b5=$.T(),b6=C.L()
b6.r=D.Cr.gp(0)
b7.aD(new C.a3(0,0,0+b3,0+b4),b6)
x=new C.e0()
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
v.san(D.eKs.az(0,C.bX(s,34)))
b7.O(s,22,v)
p=u.r*2*3.141592653589793
o=s.a6(0,new C.r(Math.cos(p)*r,Math.sin(p)*q))
n=Math.min(b3,b4)*0.075
m=u.z*3.141592653589793/180
l=s.aI(0,o).f_(0,s.aI(0,o).gcL())
u=b7.c
J.bs(u.save())
u.translate(o.a,o.b)
b4=C.L()
b4.r=D.bsY.gp(0)
b7.O(A.J,n,b4)
J.bs(u.save())
b5=new C.aH(b5.r,A.aj,b2,b2,C.a([],y.v))
b5.E(new C.jK(C.bX(A.J,n)))
b7.mz(0,b5)
b5=l.aO(0,n).aO(0,0.35)
b4=n*1.1
b3=C.L()
b3.san(D.eKA.az(0,C.bX(A.J,b4)))
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
i=C.h_(b2,A.cH,b2,b2,b2,C.d1(b2,b2,b2,b2,b2,b2,b2,b2,b2,F.ada,b3),A.a7,A.cc,b2,A.e1,A.cd)
i.eY()
i.a4(b7,o.a6(0,new C.r(-i.b.c/2,n+12)))}else{h=Math.min(b3*0.34,b4*0.32)
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
t.san(new C.bT(new C.de(-0.5,0),1.1,A.x,b2,0,C.a([D.bns,D.alF],y.O),D.deR,b2).az(0,C.bX(s,n)))
b7.O(s,n,t)
p=3.141592653589793+u.w*2*3.141592653589793
e=s.a6(0,new C.r(Math.cos(p)*h,Math.sin(p)*h))
d=h*0.12
t=C.L()
t.r=D.bk8.gp(0)
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
b7.aD(new C.a3(f,a0,f+d,a0+d*2),a1)
t.restore()
a2=e.aI(0,s).f_(0,e.aI(0,s).gcL())
for(f=a2.a,a0=a2.b,a1=n*0.28,a3=0;a3<2;++a3){a4=F.azf[a3]
a5=new C.as(A.T,A.Q,A.W,A.X,A.U)
a5.r=A.aH.j(0.45).gp(0)
a5.y=A.l6
b7.O(new C.r(b6+f*a4*n*1.05,v+a0*a4*n*1.05),a1,a5)}b6=b3-b3*0.17
v=b4*0.18
a6=new C.r(b6,v)
a7=Math.min(b3,b4)*0.1
b4=C.L()
b4.r=D.bk3.gp(0)
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
a9.aFY(new C.r(b6,v+a7),b4,new C.aP(a7,a7))
if(a8<0.5)b4=b0<0
a9.aFY(new C.r(b6,b3),b4,new C.aP(a7*Math.abs(1-2*a8),a7))
b4=C.L()
b4.r=A.bO.gp(0)
b7.af(a9,b4)
t.restore()
t=C.L()
t.b=A.ac
t.c=1
t.r=A.aT.gp(0)
b7.O(a6,a7,t)
b1=C.h_(b2,A.cH,b2,b2,b2,D.fBX,A.a7,A.cc,b2,A.e1,A.cd)
b1.eY()
b1.a4(b7,a6.a6(0,new C.r(-b1.b.c/2,a7+6)))}},
aC(d){return!0}}
B.aOk.prototype={
t(){var x=this,w=x.a9$
if(w!=null)w.a7(0,x.gbB())
x.a9$=null
x.a2()},
aZ(){this.b7()
this.b5()
this.bC()}}
B.bBq.prototype={
t(){var x,w,v
for(x=this.hf$,w=x.length,v=0;v<x.length;x.length===w||(0,C.I)(x),++v)x[v].a1(0)
x=this.he$
x===$&&C.d()
x.t()
this.bAq()}}
B.aOL.prototype={
t(){var x=this,w=x.a9$
if(w!=null)w.a7(0,x.gbB())
x.a9$=null
x.a2()},
aZ(){this.b7()
this.b5()
this.bC()}}
B.bBy.prototype={
t(){var x,w,v
for(x=this.hf$,w=x.length,v=0;v<x.length;x.length===w||(0,C.I)(x),++v)x[v].a1(0)
x=this.he$
x===$&&C.d()
x.t()
this.bAS()}}
B.aPi.prototype={
t(){var x=this,w=x.a9$
if(w!=null)w.a7(0,x.gbB())
x.a9$=null
x.a2()},
aZ(){this.b7()
this.b5()
this.bC()}}
B.bBJ.prototype={
t(){var x,w,v
for(x=this.hf$,w=x.length,v=0;v<x.length;x.length===w||(0,C.I)(x),++v)x[v].a1(0)
x=this.he$
x===$&&C.d()
x.t()
this.bBq()}}
var z=a.updateTypes(["~()","cm(acX)","P(vV)","P(Rk)","ay<~>()","~(m)","P(acW)","X_()","XP()","X0()","W2()","WY()","XI()","XD()","P(R0)","G(R0)"])
B.ePZ.prototype={
$1(d){var x,w,v,u,t,s,r,q=this.a,p=d.a,o=A.i.D((p-q.x.a)/1e6,0,0.05)
q.x=d
q.y=A.o.ap(p,1000)
for(p=q.f,x=p.length,w=1-1.2*o,v=0;v<x;++v){u=p[v]
t=u.a
s=u.b
r=s.a
s=s.b
u.a=new C.r(t.a+r*o,t.b+s*o)
u.b=new C.r(r*w,s*w)}A.d.bq(p,new B.ePX(q))
if(q.c!=null)p=p.length!==0||q.ax!=null
else p=!1
if(p)q.l(new B.ePY())},
$S:7}
B.ePX.prototype={
$1(d){return this.a.y-d.e>d.f},
$S:z+3}
B.ePY.prototype={
$0(){},
$S:0}
B.ePA.prototype={
$0(){},
$S:0}
B.ePz.prototype={
$0(){},
$S:0}
B.ePJ.prototype={
$0(){return B.uQ(this.b,this.a.d,"spark-painter")},
$S:0}
B.ePL.prototype={
$1(d){return this.a.b27(0,d.b)},
$S:50}
B.ePP.prototype={
$1(d){var x,w=this.a,v=d.b,u=w.ax
if(u!=null){x=u.a
x=x.length===0||A.d.gal(x).aI(0,v).gcL()>2.5}else x=!1
if(x)u.a.push(v)
w.aVI(v)
w.ch7(v)
return null},
$S:19}
B.ePK.prototype={
$1(d){return this.a.b26()},
$S:37}
B.ePQ.prototype={
$1(d){return this.a.b27(0,d.b)},
$S:23}
B.ePR.prototype={
$1(d){return this.a.b26()},
$S:56}
B.ePS.prototype={
$0(){var x=this.a
return x.l(new B.ePI(x,this.b))},
$S:0}
B.ePI.prototype={
$0(){return this.a.z=this.b.a},
$S:0}
B.ePT.prototype={
$0(){var x=this.a
return x.l(new B.ePH(x))},
$S:0}
B.ePH.prototype={
$0(){return this.a.Q=-1},
$S:0}
B.ePU.prototype={
$0(){var x=this.a
return x.l(new B.ePG(x,this.b))},
$S:0}
B.ePG.prototype={
$0(){return this.a.Q=this.b},
$S:0}
B.ePV.prototype={
$1(d){var x=this.a
return x.l(new B.ePF(x,d))},
$S:6}
B.ePF.prototype={
$0(){return this.a.as=this.b},
$S:0}
B.ePW.prototype={
$0(){var x=this.a
return x.l(new B.ePE(x))},
$S:0}
B.ePE.prototype={
$0(){var x=this.a
return x.ch=!x.ch},
$S:0}
B.ePM.prototype={
$0(){var x=this.a
return x.l(new B.ePD(x))},
$S:0}
B.ePD.prototype={
$0(){var x=this.a.e
if(x.length!==0)x.pop()},
$S:0}
B.ePN.prototype={
$0(){var x=this.a
return x.l(new B.ePC(x))},
$S:0}
B.ePC.prototype={
$0(){var x=this.a
A.d.a5(x.e)
A.d.a5(x.f)},
$S:0}
B.ePO.prototype={
$0(){var x=this.a
return x.l(new B.ePB(x,this.b))},
$S:0}
B.ePB.prototype={
$0(){return this.a.at=this.b},
$S:0}
B.cDM.prototype={
$0(){return C.a8(this.a,!1).hY()},
$S:0}
B.cDN.prototype={
$0(){var x=this.a
return B.hPd(this.b,x.c,x.e,x.d)},
$S:0}
B.hcd.prototype={
$1(d){var x,w=null,v=C.n(24),u=this.a,t=u.j(0.4)
u=C.c(this.b,w,w,w,w,w,w,C.l(w,w,u,w,w,w,w,w,w,w,w,16,w,w,A.u,w,w,!0,w,1.2,w,w,w,w,w,w),w,w,w)
x=C.c(this.c,w,w,w,w,w,w,D.fFk,w,w,w)
return C.eh(C.a([C.bO(!1,D.fYt,w,w,!0,w,w,w,new B.hcc(d),w,w)],y.p),w,w,F.mm,x,w,w,w,new C.ba(v,new C.ax(t,1,A.r,-1)),u,w)},
$S:18}
B.hcc.prototype={
$0(){C.a8(this.a,!1).N(null)
return null},
$S:0}
B.cDI.prototype={
$0(){C.f_()
this.a.e.$0()},
$S:0}
B.cDH.prototype={
$0(){C.f_()
this.a.e.$0()},
$S:0}
B.cDO.prototype={
$0(){C.f_()
this.a.e.$0()},
$S:0}
B.cDJ.prototype={
$0(){var x=this.a
A.d.X(x.hf$,this.b.bn())
if(x.c!=null)this.c.$0()},
$S:0}
B.cDL.prototype={
$1(d){var x=this.a,w=d.a,v=A.i.D((w-x.mc$.a)/1e6,0,0.04)
x.mc$=d
x.fd$=A.o.ap(w,1000)
x.mE(v)
if(x.c!=null)x.l(new B.cDK())},
$S:7}
B.cDK.prototype={
$0(){},
$S:0}
B.fYK.prototype={
bq8(d){var x=0,w=C.j(y.D),v,u=this,t,s
var $async$$1=C.e(function(e,f){if(e===1)return C.f(f,w)
for(;;)switch(x){case 0:x=3
return C.b(u.a.$1(d),$async$$1)
case 3:t=f
x=4
return C.b(t.ho(A.a5i),$async$$1)
case 4:s=f
t.t()
if(s==null)throw C.Y(C.bb("no picture"))
v=J.ew(A.dK.gaS(s),s.byteOffset,s.byteLength)
x=1
break
case 1:return C.h(v,w)}})
return C.i($async$$1,w)},
$1(d){return this.bq8(d)},
$S:1987}
B.chT.prototype={
$1(d){var x=this.c,w=this.a,v=w.d,u=v+1
w.d=u
x.$flags&2&&C.aj(x)
x[v]=d
if(u===255){v=this.b.c
v.q1(255)
v.I(0,new Uint8Array(C.ca(x)))
w.d=0}},
$S:31}
B.chS.prototype={
$1(d){var x,w,v=this.a,u=v.c,t=v.b
u=v.c=(u|A.o.e5(d,t))>>>0
t=v.b=t+v.a
for(x=this.b;t>=8;t=u,u=w){x.$1(u&255)
w=v.c>>>8
v.c=w
u=v.b-=8}},
$S:31}
B.fxJ.prototype={
$0(){var x=null,w=C.h_(x,A.cH,x,x,x,C.d1(x,x,x,x,x,x,x,x,x,C.l(x,x,this.b,x,x,x,x,x,"monospace",x,x,this.c,x,x,A.O,x,x,!0,x,x,x,x,x,x,x,x),this.a),A.a7,A.cc,x,A.e1,A.cd)
w.eY()
return w},
$S:273}
B.h3l.prototype={
$0(){return this.a.ai()},
$S:80}
B.fE7.prototype={
$2(d,e){return d.j(A.i.D(d.a*this.a*e,0,1))},
$1(d){return this.$2(d,1)},
$S:1988}
B.fE8.prototype={
$4$blur$shift(d,e,f,g){var x,w=this
$.T()
x=C.L()
x.b=A.ac
x.c=e
x.e=A.dN
x.r=d.gp(0)
if(f!=null)x.y=f
B.DQ(w.a,w.b,null,x).a4(w.c,w.d.a6(0,g))},
$2(d,e){return this.$4$blur$shift(d,e,null,A.J)},
$3$blur(d,e,f){return this.$4$blur$shift(d,e,f,A.J)},
$S:1989}
B.h3m.prototype={
$2(d,e){return d+this.a[e]},
$S:767}
B.h3n.prototype={
$2(d,e){return d+this.a[e]},
$S:767}
B.h22.prototype={
$1(d){return this.bqm(d)},
bqm(d){var x=0,w=C.j(y.I),v,u=this,t,s,r,q,p
var $async$$1=C.e(function(e,f){if(e===1)return C.f(f,w)
for(;;)switch(x){case 0:$.T()
t=new C.oT(new C.oo())
s=u.a
r=u.b
B.hOu(C.v1(t,null),new C.av(s,r),d/u.c,u.r,u.w,u.x,u.e,u.f,u.d)
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
$S:738}
B.cp1.prototype={
$0(){return this.a.f=this.b},
$S:0}
B.coX.prototype={
$0(){var x=this.a
x.at=0
x.ax=""},
$S:0}
B.coY.prototype={
$1(d){var x=this.a
if(x.c!=null)x.l(new B.coW(x,d))},
$S:6}
B.coW.prototype={
$0(){return this.a.at=this.b},
$S:0}
B.coZ.prototype={
$0(){var x=this.b?"Your animated title is saved (a moving GIF).":"Could not save here. Try another browser."
return this.a.ax=x},
$S:0}
B.cp_.prototype={
$0(){return this.a.ax="Could not make the animation. Try a shorter title."},
$S:0}
B.cp0.prototype={
$0(){return this.a.at=-1},
$S:0}
B.coM.prototype={
$2(d,e){var x=null,w=this.a,v=w.gK2().x
v===$&&C.d()
return C.b4(x,x,x,new B.bbh(v,w.e.a.a,w.f,w.r,w.y,w.gtQ(),w.x,x),A.h2)},
$S:59}
B.coN.prototype={
$1(d){return this.a.l(new B.coL())},
$S:2}
B.coL.prototype={
$0(){},
$S:0}
B.coO.prototype={
$0(){return this.a.bsI(this.b.a)},
$S:0}
B.coP.prototype={
$0(){var x=this.a
return x.l(new B.coK(x,this.b))},
$S:0}
B.coK.prototype={
$0(){return this.a.r=this.b.a},
$S:0}
B.coQ.prototype={
$0(){var x=this.a
return x.l(new B.coJ(x,this.b))},
$S:0}
B.coJ.prototype={
$0(){return this.a.y=this.b},
$S:0}
B.coR.prototype={
$0(){var x=this.a
return x.l(new B.coI(x,this.b))},
$S:0}
B.coI.prototype={
$0(){return this.a.w=this.b},
$S:0}
B.coS.prototype={
$0(){var x=this.a
return x.l(new B.coH(x,this.b))},
$S:0}
B.coH.prototype={
$0(){return this.a.z=this.b},
$S:0}
B.coT.prototype={
$0(){var x=this.a
return x.l(new B.coG(x))},
$S:0}
B.coG.prototype={
$0(){var x=this.a
return x.Q=!x.Q},
$S:0}
B.coU.prototype={
$0(){var x=this.a.gK2()
x.iD(0,0)
x.cX(0)},
$S:0}
B.coV.prototype={
$1(d){var x=this.a
return x.l(new B.coF(x,d))},
$S:6}
B.coF.prototype={
$0(){return this.a.x=this.b},
$S:0}
B.e9H.prototype={
$0(){return this.a.k1=!1},
$S:0}
B.e9I.prototype={
$1(d){var x=this.a
if(x.c!=null)x.l(new B.e9G(x,d))},
$S:z+1}
B.e9G.prototype={
$0(){return this.a.cBa(this.b)},
$S:0}
B.e9J.prototype={
$1(d){var x=this.a
if(x.c!=null)x.l(new B.e9F(x))},
$S:74}
B.e9F.prototype={
$0(){return this.a.k1=!0},
$S:0}
B.e9K.prototype={
$0(){var x,w,v,u=this.a,t=J.a2(u),s=t.gJ(u),r=new Float64Array(s*4)
for(x=0;x<t.gJ(u);++x){w=J.t(t.h(u,x),0)*3.141592653589793/180
v=J.t(t.h(u,x),1)*3.141592653589793/180
s=x*4
r[s]=Math.sin(v)
r[s+1]=Math.cos(v)
r[s+2]=Math.sin(w)
r[s+3]=Math.cos(w)}return r},
$S:711}
B.e9D.prototype={
$0(){return this.a.id=D.a7k},
$S:0}
B.e9E.prototype={
$0(){var x=this.b.a,w=C.U(x).k("X<1>")
w=C.pY(new C.X(x,new B.e9C(this.c),w),6,w.k("M.E"))
x=C.B(w,C.a5(w).k("M.E"))
return this.a.id=x},
$S:0}
B.e9C.prototype={
$1(d){return A.a.q(d.a.toLowerCase(),this.a)},
$S:z+6}
B.e9B.prototype={
$1(d){var x=null,w=C.cb(C.c("Age: 4.54 billion years\nWidth: 12,742 km (circumference 40,075 km)\nSpin: once every 24 hours, about 1,670 km/h at the equator\nTilt: 23.4 degrees, which gives us the seasons\nOrbit: around the Sun in 365.25 days at about 107,000 km/h\nGravity: 9.81 m/s\xb2 at the surface\nSurface: about 71% ocean and 29% land\nMoon: 384,400 km away; its pull makes the tides\nAtmosphere: 78% nitrogen, 21% oxygen\nFarthest from the Sun in July, closest in January",x,x,x,x,x,x,C.l(x,x,A.ab,x,x,x,x,x,x,x,x,14,x,x,x,x,1.55,!0,x,x,x,x,x,x,x,x),x,x,x),A.t,x,A.y,x,x,x,x,x,A.ah)
return C.eh(C.a([C.bO(!1,A.ql,x,x,!0,x,x,x,new B.e9A(d),x,x)],y.p),x,x,F.mm,w,x,x,x,x,D.h8R,x)},
$S:18}
B.e9A.prototype={
$0(){C.a8(this.a,!1).N(null)
return null},
$S:0}
B.ea2.prototype={
$0(){return B.uQ(this.b,this.a.d,"earth")},
$S:0}
B.ea3.prototype={
$2(d,e){var x,w,v,u,t,s,r,q=null,p=this.a,o=new C.av(e.b,e.d)
p.fy=o
x=p.r
w=p.w
v=p.x
u=p.y
t=p.gXu()
s=p.z
r=y.p
o=C.a([C.aA(A.c_,C.b4(q,q,q,new B.bjh(x,w,v,u,t*s,s,p.fx,p.CW,p.cx,p.cy,p.dy,p.fr,q),o),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new B.e9R(p),new B.e9S(p),new B.e9T(p),q,q,q,q,q,q,q,new B.e9U(p),q,q,q,!1,A.a4)],r)
if(p.r==null&&!p.k1)o.push(D.bfg)
if(p.r==null&&p.k1)o.push(C.at(new C.D(A.r2,C.x(C.a([D.c64,A.S,D.h7A,A.ak,D.h_g,A.aA,C.dc(A.vx,q,A.FE,p.gc74(),q)],r),A.l,q,A.e,A.M,0,A.p),q),q,q,q))
x=this.b
if(x!=null)o.push(C.ao(8,p.cgv(x),q,q,10,10,q,q))
return new C.e4(new C.an(A.a0,q,A.b4,A.t,o,q),p.d)},
$S:235}
B.e9S.prototype={
$1(d){var x=this.a
x.dx=!0
x.go=x.z
x.at=x.ax=x.ay=null},
$S:281}
B.e9T.prototype={
$1(d){var x,w,v=this.a
if(d.w>=2)v.z=A.i.D(v.go*d.d,0.8,16)
else{x=57.2958/(v.gXu()*v.z)
w=d.a
v.y=v.y-w.a*x
v.x=A.i.D(v.x+w.b*x,-85,85)}},
$S:210}
B.e9R.prototype={
$1(d){var x,w,v=this.a
v.dx=!1
x=57.2958/(v.gXu()*v.z)
w=d.a.a
v.Q=A.i.D(-w.a*x,-160,160)
v.as=A.i.D(w.b*x,-100,100)},
$S:623}
B.e9U.prototype={
$1(d){var x=this.a,w=x.cgy(d.b)
if(w!=null)x.l(new B.e9L(x,w))
else x.l(new B.e9M(x))},
$S:56}
B.e9L.prototype={
$0(){return this.a.aD1(this.b)},
$S:0}
B.e9M.prototype={
$0(){return this.a.fx=null},
$S:0}
B.ea4.prototype={
$0(){var x=this.a
x.e.bN(0,A.ci)
x.l(new B.e9Q(x,this.b))},
$S:0}
B.e9Q.prototype={
$0(){var x=this.a
x.id=D.a7k
x.aD1(this.b)},
$S:0}
B.ea8.prototype={
$0(){var x=this.a
return x.l(new B.ea1(x))},
$S:0}
B.ea1.prototype={
$0(){var x=this.a
x.fx=null
x.awo(15,x.y,1)},
$S:0}
B.ea9.prototype={
$0(){var x=this.a
return x.l(new B.ea0(x,this.b))},
$S:0}
B.ea0.prototype={
$0(){var x=this.b.b
return this.a.awo(x.a,x.b,x.c)},
$S:0}
B.eaa.prototype={
$0(){var x=this.a,w=x.r
if(w!=null)x.l(new B.ea_(x,w))},
$S:0}
B.ea_.prototype={
$0(){var x=this.b.a
return this.a.aD1(x[A.cR.av(x.length)])},
$S:0}
B.eab.prototype={
$1(d){var x=this.a
return x.l(new B.e9Z(x,d))},
$S:6}
B.e9Z.prototype={
$0(){var x=this.a
x.ay=null
x.z=this.b},
$S:0}
B.eac.prototype={
$1(d){var x=this.a
return x.l(new B.e9Y(x,d))},
$S:6}
B.e9Y.prototype={
$0(){return this.a.dy=this.b},
$S:0}
B.ead.prototype={
$1(d){var x=this.a
return x.l(new B.e9X(x,d))},
$S:6}
B.e9X.prototype={
$0(){return this.a.fr=this.b},
$S:0}
B.eae.prototype={
$0(){var x=this.a
return x.l(new B.e9W(x))},
$S:0}
B.e9W.prototype={
$0(){var x=this.a
return x.ch=!x.ch},
$S:0}
B.eaf.prototype={
$0(){var x=this.a
return x.l(new B.e9V(x))},
$S:0}
B.e9V.prototype={
$0(){var x=this.a
return x.CW=!x.CW},
$S:0}
B.ea5.prototype={
$0(){var x=this.a
return x.l(new B.e9P(x))},
$S:0}
B.e9P.prototype={
$0(){var x=this.a
return x.cx=!x.cx},
$S:0}
B.ea6.prototype={
$0(){var x=this.a
return x.l(new B.e9O(x))},
$S:0}
B.e9O.prototype={
$0(){var x=this.a
return x.cy=!x.cy},
$S:0}
B.ea7.prototype={
$0(){var x=this.a
return x.l(new B.e9N(x))},
$S:0}
B.e9N.prototype={
$0(){var x=this.a
return x.db=!x.db},
$S:0}
B.e9z.prototype={
$2(d,e){var x=null
return C.E(C.x(C.a([C.c(d,x,x,x,x,x,x,D.aXb,x,x,x),A.rB,C.c(e,x,2,A.a2,x,x,x,A.X0,x,x,x)],y.p),A.B,x,A.e,A.h,0,A.p),1)},
$S:121}
B.e9y.prototype={
$0(){var x=this.a
return x.l(new B.e9x(x))},
$S:0}
B.e9x.prototype={
$0(){return this.a.fx=null},
$S:0}
B.dqa.prototype={
$0(){var x=null,w=C.h_(x,A.cH,x,x,x,C.d1(x,x,x,x,x,x,x,x,x,C.l(x,x,this.c,x,x,x,x,x,x,x,x,this.b,x,x,A.F,x,x,!0,x,x,x,x,x,D.djO,x,x),this.a),A.a7,A.cc,x,A.e1,A.cd)
w.eY()
return w},
$S:273}
B.dqb.prototype={
$2(d,e){var x,w,v,u=this,t=Math.sin(d),s=Math.cos(d),r=e-u.a,q=Math.sin(r),p=Math.cos(r)
r=u.b
x=u.c
if(r*t+x*s*p<0)return null
w=u.d
v=u.e
return new C.r(w.a+v*s*q,w.b-v*(x*t-r*s*p))},
$S:1992}
B.fzl.prototype={
$0(){return D.e1E},
$S:z+7}
B.fzm.prototype={
$0(){return D.eqz},
$S:z+8}
B.fzn.prototype={
$0(){return D.e1G},
$S:z+9}
B.fzo.prototype={
$0(){return D.dWW},
$S:z+10}
B.fzp.prototype={
$0(){return D.e1D},
$S:z+11}
B.fzq.prototype={
$0(){return D.eoG},
$S:z+12}
B.fzr.prototype={
$0(){return D.eoE},
$S:z+13}
B.eWS.prototype={
$1(d){},
$S:z+1}
B.eWT.prototype={
$1(d){},
$S:74}
B.eWP.prototype={
$0(){return C.a8(this.a,!1).hY()},
$S:0}
B.eWQ.prototype={
$0(){var x=this.a
return x.l(new B.eWO(x))},
$S:0}
B.eWO.prototype={
$0(){var x=this.a
return x.d=A.o.F(x.gaWa()+1,16)},
$S:0}
B.eWR.prototype={
$2(d,e){var x,w,v,u,t,s,r,q,p,o,n=null,m=(e.b-20)/3,l=y.p,k=C.a([],l)
for(x=$.hT5(),w=m*1.15,v=y.O,u=0;u<7;++u){t=x[u]
s=Math.max(w,140)
r=new C.aP(18,18)
q=t.d
p=new C.ax(q.j(0.5),1,A.r,-1)
o=C.a([q.j(0.28),D.bvn],v)
k.push(C.aA(n,C.p(n,C.x(C.a([C.W(t.c,q,n,n,n,30),A.P,C.c(t.a,n,2,n,n,n,n,D.fKd,A.K,n,n),A.cM,C.c(t.b,n,2,n,n,n,n,D.fPS,A.K,n,n)],l),A.l,n,A.b9,A.h,0,A.p),A.f,n,n,new C.o(n,n,new C.bE(p,p,p,p),new C.bc(r,r,r,r),n,new C.a7(A.ay,A.aC,A.x,o,n,n),A.m),n,s,n,n,A.cr,n,n,m),A.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new B.eWN(d,t),n,n,n,n,n,n,!1,A.a4))}return C.bZ(A.fT,k,A.br,n,10,10)},
$S:166}
B.eWN.prototype={
$0(){return C.a8(this.a,!1).cc(C.ec(new B.eWM(this.b),!1,null,y.H))},
$S:0}
B.eWM.prototype={
$1(d){return this.a.e.$0()},
$S:43}
B.ePe.prototype={
$0(){var x=this.a
x.Q=x.z=this.b
if(x.w<2.2)x.w=2.6},
$S:0}
B.ePp.prototype={
$0(){return B.uQ(this.b,this.a.d,"solar-system")},
$S:0}
B.ePq.prototype={
$2(d,e){var x,w=null,v=this.a,u=new C.av(e.b,e.d)
v.ch=u
u=C.a([C.aA(A.c_,C.b4(w,w,w,new B.bwg(v,w),u),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new B.ePm(v),new B.ePn(v),w,w,w,w,w,w,w,new B.ePo(v),w,w,w,!1,A.a4)],y.p)
x=this.b
if(x!=null)u.push(C.ao(8,v.cgA(x),w,w,10,10,w,w))
return new C.e4(new C.an(A.a0,w,A.b4,A.t,u,w),v.d)},
$S:235}
B.ePm.prototype={
$1(d){var x=this.a
x.y=x.w
x.Q=null},
$S:281}
B.ePn.prototype={
$1(d){var x=this.a
if(d.w>=2)x.w=A.i.D(x.y*d.d,0.5,9)
else x.x=x.x.a6(0,d.a)},
$S:210}
B.ePo.prototype={
$1(d){var x=this.a,w=x.cgD(d.b)
if(w!=null)x.b3n(w)},
$S:56}
B.ePr.prototype={
$0(){var x=this.a
return x.l(new B.ePl(x))},
$S:0}
B.ePl.prototype={
$0(){var x=this.a
x.z=x.Q=null
x.x=A.J
x.w=1},
$S:0}
B.ePs.prototype={
$0(){return this.a.b3n(this.b)},
$S:0}
B.ePt.prototype={
$1(d){var x=this.a
return x.l(new B.ePk(x,d))},
$S:6}
B.ePk.prototype={
$0(){return this.a.r=Math.exp(this.b*Math.log(3651))-1},
$S:0}
B.ePu.prototype={
$1(d){var x=this.a
return x.l(new B.ePj(x,d))},
$S:6}
B.ePj.prototype={
$0(){return this.a.w=this.b},
$S:0}
B.ePv.prototype={
$0(){var x=this.a
return x.l(new B.ePi(x))},
$S:0}
B.ePi.prototype={
$0(){var x=this.a
return x.as=!x.as},
$S:0}
B.ePw.prototype={
$0(){var x=this.a
return x.l(new B.ePh(x))},
$S:0}
B.ePh.prototype={
$0(){var x=this.a
return x.at=!x.at},
$S:0}
B.ePx.prototype={
$0(){var x=this.a
return x.l(new B.ePg(x))},
$S:0}
B.ePg.prototype={
$0(){var x=this.a
return x.ax=!x.ax},
$S:0}
B.ePy.prototype={
$0(){var x=this.a
return x.l(new B.ePf(x))},
$S:0}
B.ePf.prototype={
$0(){var x=this.a
return x.ay=!x.ay},
$S:0}
B.ePd.prototype={
$1(d){var x
if(d>=730){x=d>8000?0:1
x=A.i.aa(d/365.25,x)+" Earth years"}else x=A.i.aa(d,0)+" Earth days"
return x},
$S:309}
B.ePc.prototype={
$2(d,e){var x=null
return C.E(C.x(C.a([C.c(d,x,x,x,x,x,x,D.aXb,x,x,x),A.rB,C.c(e,x,2,A.a2,x,x,x,A.X0,x,x,x)],y.p),A.B,x,A.e,A.h,0,A.p),1)},
$S:121}
B.ePb.prototype={
$0(){var x=this.a
return x.l(new B.ePa(x))},
$S:0}
B.ePa.prototype={
$0(){var x=this.a
x.Q=x.z=null},
$S:0}
B.fgS.prototype={
$0(){var x=null,w=C.h_(x,A.cH,x,x,x,C.d1(x,x,x,x,x,x,x,x,x,C.l(x,x,this.c,x,x,x,x,x,x,x,x,this.b,x,x,A.F,x,x,!0,x,x,x,x,x,K.Tf,x,x),this.a),A.a7,A.cc,x,A.e1,A.cd)
w.eY()
return w},
$S:273}
B.fgT.prototype={
$1(d){return d.c>0},
$S:z+2}
B.fgU.prototype={
$1(d){return d.c>0},
$S:z+2}
B.eaj.prototype={
$0(){},
$S:0}
B.eaM.prototype={
$1(d){return d!=null},
$S:375}
B.eay.prototype={
$0(){var x=this.a
return x.l(new B.eap(x,this.b))},
$S:0}
B.eap.prototype={
$0(){return this.a.d=this.b.a},
$S:0}
B.eaz.prototype={
$0(){var x=this.a
return x.l(new B.eao(x))},
$S:0}
B.eao.prototype={
$0(){return this.a.f=!1},
$S:0}
B.eaA.prototype={
$0(){var x=this.a
return x.l(new B.eax(x))},
$S:0}
B.eax.prototype={
$0(){return this.a.f=!0},
$S:0}
B.eaE.prototype={
$0(){var x=this.a
return x.l(new B.eaw(x))},
$S:0}
B.eaw.prototype={
$0(){var x=this.a
return x.r=!x.r},
$S:0}
B.eaF.prototype={
$1(d){var x=this.a
return x.l(new B.eav(x,d))},
$S:6}
B.eav.prototype={
$0(){return this.a.w=this.b},
$S:0}
B.eaG.prototype={
$0(){var x=this.a
return x.l(x.gcEu())},
$S:0}
B.eaH.prototype={
$1(d){var x=this.a
return x.l(new B.eau(x,d))},
$S:6}
B.eau.prototype={
$0(){return this.a.at=this.b},
$S:0}
B.eaI.prototype={
$1(d){var x=this.a
return x.l(new B.eat(x,d))},
$S:6}
B.eat.prototype={
$0(){return this.a.ax=this.b},
$S:0}
B.eaJ.prototype={
$1(d){var x=this.a
return x.l(new B.eas(x,d))},
$S:6}
B.eas.prototype={
$0(){return this.a.ay=this.b},
$S:0}
B.eaK.prototype={
$1(d){var x=this.a
return x.l(new B.ear(x,d))},
$S:6}
B.ear.prototype={
$0(){return this.a.ch=this.b},
$S:0}
B.eaL.prototype={
$0(){var x=this.a
return x.l(new B.eaq(x))},
$S:0}
B.eaq.prototype={
$0(){return this.a.ay=4},
$S:0}
B.eaB.prototype={
$0(){var x=this.a
return x.l(new B.ean(x))},
$S:0}
B.ean.prototype={
$0(){return this.a.ay=7.67},
$S:0}
B.eaC.prototype={
$0(){var x=this.a
return x.l(new B.eam(x))},
$S:0}
B.eam.prototype={
$0(){return this.a.ay=9},
$S:0}
B.eaD.prototype={
$0(){var x=this.a
return x.l(new B.eal(x))},
$S:0}
B.eal.prototype={
$0(){return this.a.ay=11.3},
$S:0}
B.eai.prototype={
$2(a0,a1){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null,h=a1.b/5,g=a1.d,f=g-60,e=y.p,d=C.a([C.bS(0,new C.bP(new C.o(D.btz,i,i,C.n(20),i,i,A.m),A.bm,i,i),0,0,0)],e)
for(x=this.a,w=x.as,v=y.V,u=h/2,g-=f,t=f-54-22,s=x.z,r=0;r<5;++r){q=r*h
p=D.Ax[r]
o=C.b0(p.d)
p=C.x(C.a([C.c(p.a,i,i,i,i,i,i,new C.H(!0,o,i,i,i,i,12.5,A.u,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i),i,i,i),C.c(C.v(D.Ax[r].b)+" m/s\xb2",i,i,i,i,i,i,D.fP9,i,i,i)],e),A.l,i,A.e,A.h,0,A.p)
o=q+u
n=C.p(i,i,A.f,A.ds,i,i,i,i,i,i,i,i,i,1)
m=s[r]
l=x.f?C.W(M.Ds,C.b0(D.Ax[r].d),i,i,i,22):C.p(i,i,A.f,i,i,new C.o(C.b0(D.Ax[r].d),i,i,i,C.a([new C.aa(0,A.H,C.b0(D.Ax[r].d).j(0.6),A.J,10)],v),i,A.a6),i,22,i,i,i,i,i,22)
k=C.p(i,i,A.f,C.b0(D.Ax[r].d).j(0.6),i,i,i,3,i,A.fC,i,i,i,i)
j=w[r]
if(j==null)j=x.x?"\u2026":"\u2014"
else j=A.i.aa(j,2)+" s"
j=C.c(j,i,i,i,i,i,i,A.ul,i,i,i)
A.d.u(d,C.a([new C.cN(q,8,i,i,h,i,p,i),new C.cN(o-0.5,54,i,g,i,i,n,i),new C.cN(o-11,54+t*(m/20),i,i,i,i,l,i),new C.cN(q,i,i,8,h,i,C.x(C.a([k,A.at,j,C.c(w[r]==null?"":"to land",i,i,i,i,i,i,D.fGA,i,i,i)],e),A.l,i,A.e,A.h,0,A.p),i)],e))}if(!x.x&&A.d.cw(w,new B.eah()))d.push(D.bfI)
return new C.an(A.a0,i,A.ad,A.t,d,i)},
$S:63}
B.eah.prototype={
$1(d){return d==null},
$S:375}
B.eak.prototype={
$2(d,e){var x,w=null,v=this.a,u=this.b,t=u.b,s=v.at*t/9.81,r=A.i.D(Math.log(s+1)/Math.log(v.at*274/9.81+1),0.02,1),q=C.n(8)
q=C.p(w,w,A.f,w,w,new C.o(A.c.j(0.05),w,w,q,w,w,A.m),w,26,w,w,w,w,w,w)
u=u.c
u=C.cT(w,w,w,w,A.b_,new C.o(w,w,w,C.n(8),w,new C.a7(A.a5,A.a9,A.x,C.a([C.b0(u).j(0.9),C.b0(u).j(0.4)],y.O),w,w),A.m),A.i9,w,26,w,w,w,w,w,e.b*r)
x=s<100?A.i.aa(s,1):B.HS(s)
v=v.ax*9.81/t
v=v<10?A.i.aa(v,2):A.i.aa(v,0)
return new C.an(A.a0,w,A.ad,A.t,C.a([q,u,C.ao(w,C.c(x+" kg  \xb7  jump "+v+" m",w,w,w,w,w,w,D.fNh,w,w,w),w,w,8,w,4,w)],y.p),w)},
$S:63}
B.eag.prototype={
$2(d,e){var x,w=null,v=e.b,u=e.d,t=Math.min(v,u),s=this.a,r=s.ch,q=s.cx,p=s.db,o=s.CW||p.length!==0
o=C.b4(w,w,w,new B.bep(new C.r(v/2,u/2+u*0.05),t*0.18/6371*(2/r),q,p,o,w),A.az)
p=A.v.j(0.55)
q=C.n(14)
r=C.K(A.bw,A.r,1)
v=s.dx
u=v.length===0?"Set a speed and press Fire!":v
if(A.a.q(v,"forever")||A.a.q(v,"again"))v=A.be
else v=A.a.q(v,"escapes")?A.aH:A.c
v=C.c(u,w,w,w,w,w,w,C.l(w,w,v,w,w,w,w,w,w,w,w,13.5,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)
u=A.i.aa(Math.sqrt(58.86870477034412),1)
t=A.i.aa(Math.sqrt(117.73740954068823),1)
s=s.CW?"  Height now: "+B.HS(A.i.D(s.cx.gcL()-6371,0,9e9))+" km":""
x=y.p
return new C.an(A.a0,w,A.b4,A.t,C.a([o,C.ao(w,C.p(w,C.x(C.a([v,A.bC,C.c("Circular orbit here: "+u+" km/s.  Escape speed: "+t+" km/s."+s,w,w,w,w,w,w,I.aYZ,w,w,w)],x),A.B,w,A.e,A.M,0,A.p),A.f,w,w,new C.o(p,w,r,q,w,w,A.m),w,w,w,w,A.bT,w,w,w),w,w,12,12,8,w)],x),w)},
$S:63}
B.eHX.prototype={
$0(){return B.uQ(this.b,this.a.d,"size-compare")},
$S:0}
B.eHY.prototype={
$0(){var x=this.a
return x.l(new B.eHW(x,this.b))},
$S:0}
B.eHW.prototype={
$0(){return this.a.e=this.b},
$S:0}
B.eHZ.prototype={
$0(){var x=this.a
return x.l(new B.eHV(x,this.b))},
$S:0}
B.eHV.prototype={
$0(){return this.a.f=this.b},
$S:0}
B.ff0.prototype={
$3(d,e,f){var x,w,v=this.a
$.T()
x=C.L()
x.r=f.j(0.2).gp(0)
x.y=new C.fZ(A.H,Math.max(2,e*0.18))
v.O(d,e*1.12,x)
x=C.L()
w=C.ap(f,A.v,0.6)
w.toString
x.san(new C.bT(O.BP,0.5,A.x,null,0,C.a([A.c,f,w],y.O),T.SP,null).az(0,C.bX(d,e)))
v.O(d,e,x)},
$S:1993}
B.dSm.prototype={
$1(d){return d.e<=0},
$S:z+14}
B.dSa.prototype={
$1(d){return d.b},
$S:z+15}
B.dSb.prototype={
$0(){return B.uQ(this.b,this.a.d,"black-hole")},
$S:0}
B.dSc.prototype={
$2(d,e){var x,w,v,u,t,s,r=null,q=this.a,p=new C.av(e.b,e.d)
q.Q=p
p=C.aA(A.c_,C.b4(r,r,r,new B.bdK(q,r),p),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new B.dS8(q),r,r,r,r,r,r,r,r,r,new B.dS9(q),r,r,r,r,!1,A.a4)
x=A.v.j(0.55)
w=C.n(14)
v=C.K(A.bw,A.r,1)
u=q.r
if(u<1000)u=A.i.aa(u,u<10?1:0)+" Suns"
else u=B.fOF(u)+" Suns"
u=q.ah0("MASS",u)
t=2.953*q.r
s=y.p
s=C.a([p,C.ao(r,C.p(r,C.A(C.a([u,q.ah0("EDGE WIDTH",(t<100?A.i.aa(t,1):B.HS(t))+" km"),q.ah0("TIME",A.i.aa(this.b*100,0)+"%"),q.ah0("EATEN",""+q.as)],s),A.l,r,A.e,A.h,0,r,r),A.f,r,r,new C.o(x,r,v,w,r,r,A.m),r,r,r,r,A.bT,r,r,r),r,r,10,10,8,r)],s)
if(q.z.length===0&&q.as===0)s.push(D.eJw)
return new C.e4(new C.an(A.a0,r,A.b4,A.t,s,r),q.d)},
$S:235}
B.dS9.prototype={
$1(d){return this.a.b3o(d.b)},
$S:23}
B.dS8.prototype={
$1(d){if(A.cR.ai()<0.12)this.a.b3o(d.b)},
$S:19}
B.dSe.prototype={
$1(d){var x=this.a
return x.l(new B.dS7(x,d))},
$S:6}
B.dS7.prototype={
$0(){return this.a.r=Math.max(3,Math.exp(this.b*Math.log(1e10)))},
$S:0}
B.dSf.prototype={
$0(){var x=this.a
return x.l(new B.dS6(x))},
$S:0}
B.dS6.prototype={
$0(){return this.a.r=10},
$S:0}
B.dSg.prototype={
$0(){var x=this.a
return x.l(new B.dS5(x))},
$S:0}
B.dS5.prototype={
$0(){return this.a.r=21},
$S:0}
B.dSh.prototype={
$0(){var x=this.a
return x.l(new B.dS4(x))},
$S:0}
B.dS4.prototype={
$0(){return this.a.r=43e5},
$S:0}
B.dSi.prototype={
$0(){var x=this.a
return x.l(new B.dS3(x))},
$S:0}
B.dS3.prototype={
$0(){return this.a.r=65e8},
$S:0}
B.dSj.prototype={
$0(){var x=this.a
return x.l(new B.dS2(x))},
$S:0}
B.dS2.prototype={
$0(){var x=this.a
return x.w=!x.w},
$S:0}
B.dSk.prototype={
$0(){var x=this.a
return x.l(new B.dS1(x))},
$S:0}
B.dS1.prototype={
$0(){var x=this.a
return x.x=!x.x},
$S:0}
B.dSl.prototype={
$0(){var x=this.a
return x.l(new B.dS0(x))},
$S:0}
B.dS0.prototype={
$0(){var x=this.a
return x.y=!x.y},
$S:0}
B.dSd.prototype={
$0(){var x=this.a
return x.l(new B.dS_(x))},
$S:0}
B.dS_.prototype={
$0(){var x=this.a
A.d.a5(x.z)
x.as=0},
$S:0}
B.e9_.prototype={
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
B.e8Q.prototype={
$0(){return B.uQ(this.b,this.a.d,"galaxy")},
$S:0}
B.e8R.prototype={
$0(){var x=this.a
return x.l(new B.e8P(x,this.b))},
$S:0}
B.e8P.prototype={
$0(){var x,w=this.a
w.ch=!1
x=this.b.a
w.Q=x
w.w=x==="barred"?1:0
w.a0R()},
$S:0}
B.e8S.prototype={
$0(){var x=this.a
return x.l(new B.e8O(x))},
$S:0}
B.e8O.prototype={
$0(){var x=this.a
if(x.Q==="elliptical"){x.Q="spiral"
x.a0R()}x.cEl()},
$S:0}
B.e8T.prototype={
$1(d){var x=this.a
return x.l(new B.e8N(x,d))},
$S:6}
B.e8N.prototype={
$0(){var x=this.a
x.f=A.i.R(this.b)
x.a0R()},
$S:0}
B.e8U.prototype={
$1(d){var x=this.a
return x.l(new B.e8M(x,d))},
$S:6}
B.e8M.prototype={
$0(){var x=this.a
x.r=this.b
x.a0R()},
$S:0}
B.e8V.prototype={
$1(d){var x=this.a
return x.l(new B.e8L(x,d))},
$S:6}
B.e8L.prototype={
$0(){return this.a.as=this.b},
$S:0}
B.e8W.prototype={
$1(d){var x=this.a
return x.l(new B.e8K(x,d))},
$S:6}
B.e8K.prototype={
$0(){return this.a.ax=this.b},
$S:0}
B.e8X.prototype={
$0(){var x=this.a
return x.l(new B.e8J(x))},
$S:0}
B.e8J.prototype={
$0(){var x=this.a
return x.x=!x.x},
$S:0}
B.e8Y.prototype={
$0(){var x=this.a
return x.l(new B.e8I(x))},
$S:0}
B.e8I.prototype={
$0(){var x=this.a
return x.z=!x.z},
$S:0}
B.e8Z.prototype={
$0(){var x=this.a
return x.l(new B.e8H(x))},
$S:0}
B.e8H.prototype={
$0(){var x=this.a
return x.y=!x.y},
$S:0}
B.dnk.prototype={
$6(d,e,f,g,h,i){return g.a6(0,new C.r((d*Math.cos(h)-e*Math.sin(h))*i,(d*Math.sin(h)+e*Math.cos(h))*i*this.a-f*i*0.9))},
$S:1995}
B.eFp.prototype={
$0(){return B.uQ(this.b,this.a.d,"seasons-moon")},
$S:0}
B.eFq.prototype={
$0(){var x=this.a
return x.l(new B.eFo(x))},
$S:0}
B.eFo.prototype={
$0(){return this.a.f="seasons"},
$S:0}
B.eFr.prototype={
$0(){var x=this.a
return x.l(new B.eFn(x))},
$S:0}
B.eFn.prototype={
$0(){return this.a.f="moon"},
$S:0}
B.eFs.prototype={
$0(){var x=this.a
return x.l(new B.eFm(x))},
$S:0}
B.eFm.prototype={
$0(){var x=this.a
return x.x=!x.x},
$S:0}
B.eFt.prototype={
$0(){var x=this.a
return x.l(new B.eFl(x))},
$S:0}
B.eFl.prototype={
$0(){var x=this.a
return x.Q=!x.Q},
$S:0}
B.eFu.prototype={
$1(d){var x=this.a
return x.l(new B.eFk(x,d))},
$S:6}
B.eFk.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.eFv.prototype={
$1(d){var x=this.a
return x.l(new B.eFj(x,d))},
$S:6}
B.eFj.prototype={
$0(){return this.a.z=this.b},
$S:0}
B.eFw.prototype={
$1(d){var x=this.a
return x.l(new B.eFi(x,d))},
$S:6}
B.eFi.prototype={
$0(){return this.a.w=this.b},
$S:0}
B.eFx.prototype={
$1(d){var x=this.a
return x.l(new B.eFh(x,d))},
$S:6}
B.eFh.prototype={
$0(){return this.a.y=this.b},
$S:0};(function aliases(){var x=B.aPo.prototype
x.bBw=x.t
x=B.aHw.prototype
x.bxX=x.t
x=B.aON.prototype
x.bAV=x.t
x=B.aOO.prototype
x.bAW=x.t
x=B.aOP.prototype
x.bAX=x.t
x=B.aPk.prototype
x.bBs=x.t
x=B.aPn.prototype
x.bBv=x.t
x=B.aOk.prototype
x.bAq=x.t
x=B.aOL.prototype
x.bAS=x.t
x=B.aPi.prototype
x.bBq=x.t})();(function installTearOffs(){var x=a._instance_0u,w=a._instance_1u
var v
x(v=B.aus.prototype,"gcgt","cgu",0)
x(v,"gcU2","a62",4)
x(v=B.aGm.prototype,"gc74","b_z",0)
w(v,"gcgw","cgx",5)
x(v,"gbUG","bUH",0)
x(v=B.aGn.prototype,"gcEu","cEv",0)
x(v,"gcgB","cgC",0)})();(function inheritance(){var x=a.mixinHard,w=a.inheritMany,v=a.inherit
w(C.aE,[B.bpu,B.Rk,B.nW,B.chR,B.fsJ,B.acW,B.acX,B.vV,B.Qs,B.yU,B.Qr,B.bye,B.R0,B.agL])
w(C.af,[B.XQ,B.Y1,B.X_,B.Y4,B.XP,B.X0,B.XI,B.W2,B.WY,B.XD])
w(C.ah,[B.aPo,B.aHw,B.aON,B.boN,B.aPn,B.aOP,B.aPk,B.aOk,B.aOL,B.aPi])
v(B.boB,B.aPo)
w(C.fN,[B.ePZ,B.ePX,B.ePL,B.ePP,B.ePK,B.ePQ,B.ePR,B.ePV,B.hcd,B.cDL,B.fYK,B.chT,B.chS,B.fE7,B.fE8,B.h22,B.coY,B.coN,B.coV,B.e9I,B.e9J,B.e9C,B.e9B,B.e9S,B.e9T,B.e9R,B.e9U,B.eab,B.eac,B.ead,B.eWS,B.eWT,B.eWM,B.ePm,B.ePn,B.ePo,B.ePt,B.ePu,B.ePd,B.fgT,B.fgU,B.eaM,B.eaF,B.eaH,B.eaI,B.eaJ,B.eaK,B.eah,B.ff0,B.dSm,B.dSa,B.dS9,B.dS8,B.dSe,B.e9_,B.e8T,B.e8U,B.e8V,B.e8W,B.dnk,B.eFu,B.eFv,B.eFw,B.eFx])
w(C.hQ,[B.ePY,B.ePA,B.ePz,B.ePJ,B.ePS,B.ePI,B.ePT,B.ePH,B.ePU,B.ePG,B.ePF,B.ePW,B.ePE,B.ePM,B.ePD,B.ePN,B.ePC,B.ePO,B.ePB,B.cDM,B.cDN,B.hcc,B.cDI,B.cDH,B.cDO,B.cDJ,B.cDK,B.fxJ,B.h3l,B.cp1,B.coX,B.coW,B.coZ,B.cp_,B.cp0,B.coL,B.coO,B.coP,B.coK,B.coQ,B.coJ,B.coR,B.coI,B.coS,B.coH,B.coT,B.coG,B.coU,B.coF,B.e9H,B.e9G,B.e9F,B.e9K,B.e9D,B.e9E,B.e9A,B.ea2,B.e9L,B.e9M,B.ea4,B.e9Q,B.ea8,B.ea1,B.ea9,B.ea0,B.eaa,B.ea_,B.e9Z,B.e9Y,B.e9X,B.eae,B.e9W,B.eaf,B.e9V,B.ea5,B.e9P,B.ea6,B.e9O,B.ea7,B.e9N,B.e9y,B.e9x,B.dqa,B.fzl,B.fzm,B.fzn,B.fzo,B.fzp,B.fzq,B.fzr,B.eWP,B.eWQ,B.eWO,B.eWN,B.ePe,B.ePp,B.ePr,B.ePl,B.ePs,B.ePk,B.ePj,B.ePv,B.ePi,B.ePw,B.ePh,B.ePx,B.ePg,B.ePy,B.ePf,B.ePb,B.ePa,B.fgS,B.eaj,B.eay,B.eap,B.eaz,B.eao,B.eaA,B.eax,B.eaE,B.eaw,B.eav,B.eaG,B.eau,B.eat,B.eas,B.ear,B.eaL,B.eaq,B.eaB,B.ean,B.eaC,B.eam,B.eaD,B.eal,B.eHX,B.eHY,B.eHW,B.eHZ,B.eHV,B.dSb,B.dS7,B.dSf,B.dS6,B.dSg,B.dS5,B.dSh,B.dS4,B.dSi,B.dS3,B.dSj,B.dS2,B.dSk,B.dS1,B.dSl,B.dS0,B.dSd,B.dS_,B.e8Q,B.e8R,B.e8P,B.e8S,B.e8O,B.e8N,B.e8M,B.e8L,B.e8K,B.e8X,B.e8J,B.e8Y,B.e8I,B.e8Z,B.e8H,B.eFp,B.eFq,B.eFo,B.eFr,B.eFn,B.eFs,B.eFm,B.eFt,B.eFl,B.eFk,B.eFj,B.eFi,B.eFh])
w(C.lK,[B.bwi,B.bbh,B.bjh,B.bwg,B.bep,B.bvO,B.bdK,B.bj8,B.bv0])
w(C.aw,[B.ban,B.e_,B.ff,B.bao,B.fG,B.Gm])
w(C.id,[B.h3m,B.h3n,B.coM,B.ea3,B.e9z,B.dqb,B.eWR,B.ePq,B.ePc,B.eai,B.eak,B.eag,B.dSc])
v(B.aus,B.aHw)
v(B.aOO,B.aON)
v(B.aGm,B.aOO)
v(B.bBM,B.aPn)
v(B.boA,B.bBM)
v(B.bBz,B.aOP)
v(B.aGn,B.bBz)
v(B.bBK,B.aPk)
v(B.box,B.bBK)
v(B.bBq,B.aOk)
v(B.bn9,B.bBq)
v(B.bBy,B.aOL)
v(B.bnE,B.bBy)
v(B.bBJ,B.aPi)
v(B.bow,B.bBJ)
x(B.aPo,C.cg)
x(B.aHw,C.cg)
x(B.aON,C.cg)
x(B.aOO,B.nW)
x(B.aOP,C.cg)
x(B.bBz,B.nW)
x(B.aPk,C.cg)
x(B.bBK,B.nW)
x(B.aPn,C.cg)
x(B.bBM,B.nW)
x(B.aOk,C.cg)
x(B.bBq,B.nW)
x(B.aOL,C.cg)
x(B.bBy,B.nW)
x(B.aPi,C.cg)
x(B.bBJ,B.nW)})()
C.i_(b.typeUniverse,JSON.parse('{"XQ":{"af":[],"w":[]},"boB":{"ah":["XQ"]},"bwi":{"aC":[]},"ban":{"aw":[],"w":[]},"e_":{"aw":[],"w":[]},"ff":{"aw":[],"w":[]},"bao":{"aw":[],"w":[]},"fG":{"aw":[],"w":[]},"Gm":{"aw":[],"w":[]},"Y1":{"af":[],"w":[]},"bbh":{"aC":[]},"aus":{"ah":["Y1"]},"X_":{"af":[],"w":[]},"aGm":{"ah":["X_"]},"bjh":{"aC":[]},"Y4":{"af":[],"w":[]},"boN":{"ah":["Y4"]},"XP":{"af":[],"w":[]},"X0":{"af":[],"w":[]},"XI":{"af":[],"w":[]},"boA":{"ah":["XP"]},"bwg":{"aC":[]},"aGn":{"ah":["X0"]},"bep":{"aC":[]},"box":{"ah":["XI"]},"bvO":{"aC":[]},"W2":{"af":[],"w":[]},"WY":{"af":[],"w":[]},"XD":{"af":[],"w":[]},"bn9":{"ah":["W2"]},"bdK":{"aC":[]},"bnE":{"ah":["WY"]},"bj8":{"aC":[]},"bow":{"ah":["XD"]},"bv0":{"aC":[]}}'))
C.DC(b.typeUniverse,JSON.parse('{"nW":1}'))
var y=(function rtii(){var x=C.ar
return{I:x("vf"),V:x("N<aa>"),O:x("N<u>"),l:x("N<C9>"),y:x("N<ai<C9>>"),f:x("N<ai<ai<G>>>"),b:x("N<ai<G>>"),x:x("N<ai<F>>"),g:x("N<r>"),E:x("N<CO>"),v:x("N<fW>"),L:x("N<+(m,m)>"),c:x("N<+(m,m,a_)>"),S:x("N<cX>"),s:x("N<m>"),X:x("N<Gx>"),h:x("N<acW>"),a:x("N<dz>"),p:x("N<w>"),u:x("N<lf>"),A:x("N<R0>"),Z:x("N<Rk>"),G:x("N<bpu>"),q:x("N<agL>"),n:x("N<G>"),t:x("N<F>"),z:x("cx<ah<af>>"),j:x("ai<@>"),d:x("a9<m,@>"),m:x("hV"),P:x("cm"),U:x("acX"),D:x("dz"),J:x("kx"),w:x("P"),i:x("G"),r:x("F"),W:x("oq?"),B:x("G?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.bfg=new C.cl(A.z,null,null,A.ahg,null)
D.haO=new C.C("Press Drop! and watch them fall from 20 metres.",null,A.kx,null,A.K,null,null,null,null,null,null,null)
D.eCD=new C.D(A.nZ,D.haO,null)
D.bfI=new C.cl(A.z,null,null,D.eCD,null)
D.fQg=new C.H(!0,A.jS,null,null,null,null,18,A.F,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.hfN=new C.C("Draw anywhere",null,D.fQg,null,null,null,null,null,null,null,null,null)
D.bfN=new C.cl(A.z,null,null,D.hfN,null)
D.biq=new C.u(1,0.8509803921568627,1,0.8941176470588236,A.q)
D.biZ=new C.u(1,0.00784313725490196,0.0196078431372549,0.06274509803921569,A.q)
D.ZC=new C.u(0.9333333333333333,0.06666666666666667,0.07450980392156863,0.09411764705882353,A.q)
D.bk3=new C.u(1,0.08627450980392157,0.08627450980392157,0.11372549019607843,A.q)
D.bk8=new C.u(1,0.11764705882352941,0.11764705882352941,0.14901960784313725,A.q)
D.bku=new C.u(1,0.24705882352941178,0.11372549019607843,0.2901960784313726,A.q)
D.blo=new C.u(1,0.4196078431372549,0.17647058823529413,0.3607843137254902,A.q)
D.bnb=new C.u(1,0.043137254901960784,0.03137254901960784,0.12549019607843137,A.q)
D.bns=new C.u(1,0.3568627450980392,0.6901960784313725,0.9607843137254902,A.q)
D.Cr=new C.u(1,0.0196078431372549,0.023529411764705882,0.043137254901960784,A.q)
D.bqg=new C.u(1,0.027450980392156862,0.027450980392156862,0.043137254901960784,A.q)
D.bqy=new C.u(1,1,0.8235294117647058,0.47843137254901963,A.q)
D.bqE=new C.u(1,0.984313725490196,0.6509803921568628,0.8509803921568627,A.q)
D.bsY=new C.u(1,0.043137254901960784,0.10588235294117647,0.2,A.q)
D.bt1=new C.u(1,0.00784313725490196,0.00784313725490196,0.01568627450980392,A.q)
D.btz=new C.u(1,0.043137254901960784,0.050980392156862744,0.07058823529411765,A.q)
D.btO=new C.u(0.4,1,0.8901960784313725,0.6392156862745098,A.q)
D.H0=new C.u(1,0.043137254901960784,0.043137254901960784,0.06274509803921569,A.q)
D.alb=new C.u(1,0.0784313725490196,0.0392156862745098,0.13333333333333333,A.q)
D.bvn=new C.u(1,0.043137254901960784,0.050980392156862744,0.0784313725490196,A.q)
D.bvr=new C.u(1,0.01568627450980392,0.01568627450980392,0.0392156862745098,A.q)
D.bvM=new C.u(1,0.00784313725490196,0.043137254901960784,0.0196078431372549,A.q)
D.bvX=new C.u(1,1,0.9686274509803922,0.6980392156862745,A.q)
D.alF=new C.u(1,0.054901960784313725,0.22745098039215686,0.4196078431372549,A.q)
D.bwW=new C.u(1,0.7490196078431373,0.8431372549019608,1,A.q)
D.a0r=new C.u(1,0.043137254901960784,0.06274509803921569,0.18823529411764706,A.q)
D.a0w=new C.u(1,0.0784313725490196,0,0.1803921568627451,A.q)
D.bzK=new C.u(0.2,0.5058823529411764,0.5490196078431373,0.9725490196078431,A.q)
D.ana=new C.R(0,0,9,0)
D.bFg=new C.R(10,10,10,6)
D.anF=new C.R(14,10,8,12)
D.bHD=new C.R(16,8,16,12)
D.bKD=new C.R(4,4,6,2)
D.bTN=new C.a_(62931,"MaterialIcons",!1)
D.ark=new C.a_(62951,"MaterialIcons",!1)
D.bU4=new C.a_(63070,"MaterialIcons",!1)
D.xc=new C.a_(63128,"MaterialIcons",!1)
D.Ix=new C.a_(63726,"MaterialIcons",!1)
D.asi=new C.a_(983415,"MaterialIcons",!1)
D.bWJ=new C.a_(984561,"MaterialIcons",!1)
D.bXg=new C.ae(V.l8,24,A.aQ,null,null,null)
D.bYC=new C.ae(A.nd,21,A.ab,null,null,null)
D.atS=new C.ae(A.eH,19,null,null,null,null)
D.p1=new C.ae(A.tB,21,A.ab,null,null,null)
D.c64=new C.ae(A.a40,46,A.aH,null,null,null)
D.c6n=new C.ae(A.eN,20,A.aF,null,null,null)
D.c7p=new C.ae(A.o3,null,A.aF,null,null,null)
D.ceX=x([0,2,4,6,7,9,11],y.t)
D.cx5=x([255],y.t)
D.cAh=x([A.bM,A.f1],y.O)
D.cDc=x([33,249,4,5],y.t)
D.cDd=x([33,255,11],y.t)
D.bn2=new C.u(1,0.043137254901960784,0.10588235294117647,0.24705882352941178,A.q)
D.cGj=x([D.bn2,A.dg],y.O)
D.cO0=x([A.cW,G.nD,A.ir,G.ahJ,A.cW,A.ir],y.O)
D.d4U=x([3,1,0,0,0],y.t)
D.d5j=x([0.78,1],y.n)
D.aBU=x([0,2,4,7,9,12,14,16],y.t)
D.d5C=x([A.ft,A.oE],y.O)
D.d5V=x([A.a_,A.fw],y.O)
D.aC0=x([A.c2,A.aH,A.bt,A.bk,A.be],y.O)
D.d9Q=x([A.bv,A.bc,A.bk,A.be],y.O)
D.brc=new C.u(1,0.011764705882352941,0.023529411764705882,0.09019607843137255,A.q)
D.d9T=x([D.brc,G.akU],y.O)
D.daV=x([A.bt,A.c2,A.aH],y.O)
D.dbm=x([0.93,0.975,1],y.n)
D.dbQ=x([0,0.55,0.6],y.n)
D.bl6=new C.u(1,0.23137254901960785,0.0392156862745098,0.0392156862745098,A.q)
D.dc_=x([A.uP,D.bl6,A.ex],y.O)
D.bur=new C.u(1,0.01568627450980392,0.06666666666666667,0.16862745098039217,A.q)
D.bo4=new C.u(1,0.043137254901960784,0.16470588235294117,0.24705882352941178,A.q)
D.bsR=new C.u(1,0.0196078431372549,0.06274509803921569,0.11372549019607843,A.q)
D.dc1=x([D.bur,D.bo4,D.bsR],y.O)
D.dcn=x([A.au,A.fK,A.lQ,A.i0,A.dz],y.O)
D.f8y=new C.y("solid","Solid")
D.eYH=new C.y("three","3D block")
D.f_T=new C.y("neon","Neon tube")
D.f34=new C.y("gradient","Gradient")
D.f8G=new C.y("sticker","Sticker")
D.ddg=x([D.f8y,I.aTG,D.eYH,D.f_T,D.f34,D.f8G,I.aTI,U.VI],y.L)
D.ddh=x([A.bt,A.aH,A.be,A.c2,A.c,A.cS],y.O)
D.hkx=new B.yU("Moon",1737,4291941851)
D.hku=new B.yU("Earth",6371,4281908728)
D.hky=new B.yU("Neptune",24622,4284524026)
D.hkz=new B.yU("Saturn",58232,4294829706)
D.hkv=new B.yU("Jupiter",69911,4294677052)
D.hkA=new B.yU("Sun",696340,4294688548)
D.hkB=new B.yU("Sirius A",119e4,4290763774)
D.hks=new B.yU("Arcturus",179e5,4294818420)
D.hkt=new B.yU("Betelgeuse",531e6,4294472049)
D.hkw=new B.yU("UY Scuti",667e6,4293870660)
D.T3=x([D.hkx,D.hku,D.hky,D.hkz,D.hkv,D.hkA,D.hkB,D.hks,D.hkt,D.hkw],C.ar("N<yU>"))
D.ffS=new C.b3("glow","Glow",A.If)
D.fcL=new C.b3("rainbow","Rainbow",A.m3)
D.fdb=new C.b3("stars","Stars",A.ic)
D.fcq=new C.b3("sparks","Sparks",A.ef)
D.feV=new C.b3("fire","Fire",A.vp)
D.ddF=x([D.ffS,D.fcL,D.fdb,D.fcq,D.feV],y.c)
D.ddQ=x([W.alD,A.cS,A.d9],y.O)
D.deR=x([0.2,1],y.n)
D.dg2=x(["Light from the Sun takes about 8 minutes and 20 seconds to reach Earth.","There are more stars in the universe than grains of sand on all of Earth's beaches.","A day on Venus is longer than its year.","The Milky Way is about 100,000 light-years across and has 100 to 400 billion stars.","A neutron star is so dense that a teaspoon of it would weigh about a billion tonnes.","The Moon moves about 3.8 cm farther from Earth every year.","If you could fall into a black hole, tides would stretch you like spaghetti. Scientists call it spaghettification.","Earth spins at about 1,670 km/h at the equator, and orbits the Sun at about 107,000 km/h.","Gravity is the weakest of the four forces, yet it holds galaxies together.","Astronauts on the space station are not weightless because gravity is gone: they are in constant free fall around Earth.","The universe is about 13.8 billion years old and is still expanding.","Saturn is the only planet less dense than water.","On the Moon you could jump about six times higher than on Earth.","Most of the mass of a galaxy is dark matter that nobody has ever seen.","Jupiter's gravity is so strong it pulls comets and asteroids away from Earth.","A year on Neptune lasts 165 Earth years."],y.s)
D.dgJ=x([0,0.42,0.43,1],y.n)
D.aD3=x([0,2,4,7,9],y.t)
D.diM=x([A.cu,A.a_],y.O)
D.a6W=x(["Africa","Asia","Europe","North America","South America","Oceania","Antarctica","Seven seas (open ocean)"],y.s)
D.frl=new C.cX(A.bq,A.J,4)
D.djO=x([D.frl],y.S)
D.aDh=x([0,31,59,90,120,151,181,212,243,273,304,334],y.t)
D.bwP=new C.u(1,0.23137254901960785,0.16470588235294117,0.3686274509803922,A.q)
D.byu=new C.u(1,0.7058823529411765,0.37254901960784315,0.5411764705882353,A.q)
D.dkd=x([D.a0r,D.bwP,D.byu],y.O)
D.bjr=new C.u(1,0.10588235294117647,0.10588235294117647,0.2,A.q)
D.dlX=x([D.H0,D.bjr],y.O)
D.dmd=x([1.77,3.55,7.15,16.7],y.n)
D.dnF=x([N.CI,A.lQ],y.O)
D.bxH=new C.u(1,0.10588235294117647,0.0392156862745098,0.0392156862745098,A.q)
D.brG=new C.u(1,0.16470588235294117,0.058823529411764705,0.058823529411764705,A.q)
D.dop=x([D.bxH,D.brG],y.O)
D.brW=new C.u(1,0.2980392156862745,0.0392156862745098,0.3686274509803922,A.q)
D.bq2=new C.u(1,0.7058823529411765,0.09019607843137255,0.49019607843137253,A.q)
D.dou=x([D.a0w,D.brW,D.bq2],y.O)
D.dp9=x(["March","April","May","June","July","August","September","October","November","December","January","February"],y.s)
D.f8A=new C.y("spiral","Spiral")
D.eQq=new C.y("barred","Barred spiral")
D.f21=new C.y("elliptical","Elliptical")
D.dpZ=x([D.f8A,D.eQq,D.f21],y.L)
D.hkC=new B.Qs("Moon",1.62,0,4291941851)
D.hkD=new B.Qs("Mars",3.71,0.01,4294472049)
D.hkE=new B.Qs("Earth",9.81,1,4281908728)
D.hkG=new B.Qs("Jupiter",24.79,1.4,4294677052)
D.hkF=new B.Qs("Sun",274,2,4294688548)
D.Ax=x([D.hkC,D.hkD,D.hkE,D.hkG,D.hkF],C.ar("N<Qs>"))
D.To=x([0,2,4,5,7,9,11],y.t)
D.aDO=x([0,0.7,1],y.n)
D.dt2=x([0,0.62,1],y.n)
D.dtD=x([],y.y)
D.a7k=x([],y.h)
D.du8=x([0,0.46,0.82],y.n)
D.dv7=x([0.9,0.97,1],y.n)
D.dvo=x([A.c2,A.cS,A.bt,A.bk],y.O)
D.dw9=x([N.CI,A.fV],y.O)
D.hkq=new B.vV("Sun","star",0,696340,0,609.6,274,0,5500,"It holds 99.86% of all the mass in the solar system. A million Earths would fit inside it.",4294688548)
D.hkr=new B.vV("Mercury","planet",0.39,2440,88,1407.6,3.7,0,167,"A year is only 88 days, but one sunrise to the next takes 176 Earth days.",4288455599)
D.hki=new B.vV("Venus","planet",0.72,6052,224.7,5832.5,8.87,0,464,"The hottest planet, hotter than Mercury. It spins backwards, so the Sun rises in the west.",4294759245)
D.hkp=new B.vV("Earth","planet",1,6371,365.25,24,9.81,1,15,"The only world we know with life. About 71% of its surface is ocean.",4281908728)
D.hkn=new B.vV("Mars","planet",1.52,3390,687,24.6,3.71,2,-65,"Home of Olympus Mons, a volcano 22 km high, almost three times Mount Everest.",4294472049)
D.hkj=new B.vV("Jupiter","planet",5.2,69911,4331,9.9,24.79,95,-110,"Its Great Red Spot is a storm bigger than Earth that has raged for hundreds of years.",4294677052)
D.hko=new B.vV("Saturn","planet",9.58,58232,10747,10.7,10.44,146,-140,"Its rings are mostly ice. Saturn is so light for its size that it would float in water.",4294829706)
D.hkk=new B.vV("Uranus","planet",19.2,25362,30589,17.2,8.87,28,-195,"It spins on its side, tipped over about 98 degrees, as if it rolled around its orbit.",4284999929)
D.hkm=new B.vV("Neptune","planet",30.1,24622,59800,16.1,11.15,16,-200,"Winds here reach about 2,000 km/h, the fastest in the solar system.",4284524026)
D.hkl=new B.vV("Pluto","dwarf",39.5,1188,90560,153.3,0.62,5,-230,"A dwarf planet with a heart-shaped glacier. One Pluto year is 248 Earth years.",4292263162)
D.En=x([D.hkq,D.hkr,D.hki,D.hkp,D.hkn,D.hkj,D.hko,D.hkk,D.hkm,D.hkl],C.ar("N<vV>"))
D.bsn=new C.u(1,0.10588235294117647,0.043137254901960784,0.1803921568627451,A.q)
D.bpt=new C.u(1,0.023529411764705882,0.13333333333333333,0.16862745098039217,A.q)
D.dwB=x([D.H0,D.bsn,D.bpt,A.aiY],y.O)
D.dyr=x([A.hj,A.eV,A.aH,A.GJ],y.O)
D.eT0=new C.y("Wide",1.7777777777777777)
D.f9F=new C.y("Tall",0.5625)
D.a7E=x([D.eT0,I.aTu,D.f9F],C.ar("N<+(m,G)>"))
D.f99=new C.y("type","Typewriter")
D.f0P=new C.y("bounce","Bounce")
D.fa5=new C.y("wave","Wave")
D.f7m=new C.y("neon","Neon flicker")
D.fbe=new C.y("zoom","Pop")
D.eRd=new C.y("drop","Drop in")
D.eMJ=new C.y("fly","Fly in")
D.f8D=new C.y("spin","Spin in")
D.f2x=new C.y("flip","Flip")
D.f3R=new C.y("jelly","Jelly")
D.f8r=new C.y("shake","Shake")
D.f2y=new C.y("float","Float")
D.f7k=new C.y("pulse","Heartbeat")
D.f8J=new C.y("swing","Swing")
D.f7Y=new C.y("reveal","Reveal")
D.eT1=new C.y("blur","Zoom out")
D.f1F=new C.y("domino","Domino")
D.eSb=new C.y("spiral","Spiral in")
D.f44=new C.y("cascade","Shine sweep")
D.fab=new C.y("wobble","Wobble")
D.eY3=new C.y("rise","Rise up")
D.eXf=new C.y("scatter","Scatter & gather")
D.dCr=x([D.f99,D.f0P,D.fa5,D.f7m,I.aTA,D.fbe,I.aTH,D.eRd,D.eMJ,D.f8D,D.f2x,D.f3R,D.f8r,D.f2y,D.f7k,D.f8J,D.f7Y,D.eT1,D.f1F,D.eSb,D.f44,D.fab,D.eY3,D.eXf],y.L)
D.dCD=x([F.qQ,A.NL],y.O)
D.Er=x([A.c2,A.bt,A.be,A.aH,A.bk,A.bY,A.c,A.cS],y.O)
D.bil=new C.u(1,0.16862745098039217,0.06274509803921569,0.3333333333333333,A.q)
D.bmK=new C.u(1,0.984313725490196,0.8431372549019608,0.5254901960784314,A.q)
D.dEl=x([D.bil,G.ajs,D.bmK],y.O)
D.fbV=new C.b3("drop","Drop",F.a4K)
D.fbZ=new C.b3("weight","Weight",A9.asP)
D.ffs=new C.b3("cannon","Newton's cannon",A.arM)
D.dFB=x([D.fbV,D.fbZ,D.ffs],y.c)
D.f6v=new C.y("\ud83c\udf19","Midnight")
D.f5U=new C.y("\u2728","Starfield")
D.eNO=new C.y("\ud83c\udf0c","Aurora")
D.eTE=new C.y("\ud83c\udf05","Savanna sunset")
D.f60=new C.y("\ud83c\udf0a","Ocean waves")
D.eUr=new C.y("\ud83d\udd79\ufe0f","Neon grid")
D.f_l=new C.y("\ud83d\udcbb","Code rain")
D.eWu=new C.y("\ud83c\udf89","Confetti")
D.eZ9=new C.y("\ud83c\udf86","Fireworks")
D.ePa=new C.y("\ud83e\udee7","Bubbles")
D.f9D=new C.y("\u2744\ufe0f","Snowfall")
D.eV9=new C.y("\ud83e\uddf6","Kente weave")
D.eQI=new C.y("\ud83d\udd2e","Bokeh lights")
D.f_b=new C.y("\ud83c\udf27\ufe0f","Rain")
D.eRl=new C.y("\ud83d\udd25","Fire")
D.eZx=new C.y("\ud83c\udfd4\ufe0f","Paper hills")
D.eVu=new C.y("\ud83c\udfad","Stage")
D.eXi=new C.y("\u2600\ufe0f","Sunburst")
D.eZZ=new C.y("\ud83e\udee0","Lava lamp")
D.eS_=new C.y("\ud83c\udf03","City night")
D.dHi=x([D.f6v,D.f5U,D.eNO,D.eTE,D.f60,D.eUr,D.f_l,D.eWu,D.eZ9,D.ePa,D.f9D,D.eV9,D.eQI,D.f_b,D.eRl,D.eZx,D.eVu,D.eXi,D.eZZ,D.eS_],y.L)
D.dHA=x([0,0.35,0.55,0.75,1],y.n)
D.dIQ=x([0.72,1],y.n)
D.dJ0=x([0,2,4,7,9,12,14,16,19,21],y.t)
D.ewx={FJI:0,TZA:1,SAH:2,CAN:3,USA:4,KAZ:5,UZB:6,PNG:7,IDN:8,ARG:9,CHL:10,COD:11,SOM:12,KEN:13,SDN:14,TCD:15,HTI:16,DOM:17,RUS:18,BHS:19,FLK:20,NOR:21,GRL:22,ATF:23,TLS:24,ZAF:25,LSO:26,MEX:27,URY:28,BRA:29,BOL:30,PER:31,COL:32,PAN:33,CRI:34,NIC:35,HND:36,SLV:37,GTM:38,BLZ:39,VEN:40,GUY:41,SUR:42,FRA:43,ECU:44,PRI:45,JAM:46,CUB:47,ZWE:48,BWA:49,NAM:50,SEN:51,MLI:52,MRT:53,BEN:54,NER:55,NGA:56,CMR:57,TGO:58,GHA:59,CIV:60,GIN:61,GNB:62,LBR:63,SLE:64,BFA:65,CAF:66,COG:67,GAB:68,GNQ:69,ZMB:70,MWI:71,MOZ:72,SWZ:73,AGO:74,BDI:75,ISR:76,LBN:77,MDG:78,PSX:79,GMB:80,TUN:81,DZA:82,JOR:83,ARE:84,QAT:85,KWT:86,IRQ:87,OMN:88,VUT:89,KHM:90,THA:91,LAO:92,MMR:93,VNM:94,PRK:95,KOR:96,MNG:97,IND:98,BGD:99,BTN:100,NPL:101,PAK:102,AFG:103,TJK:104,KGZ:105,TKM:106,IRN:107,SYR:108,ARM:109,SWE:110,BLR:111,UKR:112,POL:113,AUT:114,HUN:115,MDA:116,ROU:117,LTU:118,LVA:119,EST:120,DEU:121,BGR:122,GRC:123,TUR:124,ALB:125,HRV:126,CHE:127,LUX:128,BEL:129,NLD:130,PRT:131,ESP:132,IRL:133,NCL:134,SLB:135,NZL:136,AUS:137,LKA:138,CHN:139,TWN:140,ITA:141,DNK:142,GBR:143,ISL:144,AZE:145,GEO:146,PHL:147,MYS:148,BRN:149,SVN:150,FIN:151,SVK:152,CZE:153,ERI:154,JPN:155,PRY:156,YEM:157,SAU:158,ATA:159,CYN:160,CYP:161,MAR:162,EGY:163,LBY:164,ETH:165,DJI:166,SOL:167,UGA:168,RWA:169,BIH:170,MKD:171,SRB:172,MNE:173,KOS:174,TTO:175,SDS:176}
D.dLk=new C.bl(D.ewx,["Suva","Dodoma","El Aai\xfan (disputed)","Ottawa","Washington, D.C.","Astana","Tashkent","Port Moresby","Jakarta","Buenos Aires","Santiago","Kinshasa","Mogadishu","Nairobi","Khartoum","N'Djamena","Port-au-Prince","Santo Domingo","Moscow","Nassau","Stanley","Oslo","Nuuk","Port-aux-Fran\xe7ais","Dili","Pretoria, Cape Town, Bloemfontein","Maseru","Mexico City","Montevideo","Bras\xedlia","Sucre and La Paz","Lima","Bogot\xe1","Panama City","San Jos\xe9","Managua","Tegucigalpa","San Salvador","Guatemala City","Belmopan","Caracas","Georgetown","Paramaribo","Paris","Quito","San Juan","Kingston","Havana","Harare","Gaborone","Windhoek","Dakar","Bamako","Nouakchott","Porto-Novo","Niamey","Abuja","Yaound\xe9","Lom\xe9","Accra","Yamoussoukro","Conakry","Bissau","Monrovia","Freetown","Ouagadougou","Bangui","Brazzaville","Libreville","Malabo","Lusaka","Lilongwe","Maputo","Mbabane","Luanda","Gitega","Jerusalem","Beirut","Antananarivo","Ramallah (seat of government)","Banjul","Tunis","Algiers","Amman","Abu Dhabi","Doha","Kuwait City","Baghdad","Muscat","Port Vila","Phnom Penh","Bangkok","Vientiane","Naypyidaw","Hanoi","Pyongyang","Seoul","Ulaanbaatar","New Delhi","Dhaka","Thimphu","Kathmandu","Islamabad","Kabul","Dushanbe","Bishkek","Ashgabat","Tehran","Damascus","Yerevan","Stockholm","Minsk","Kyiv","Warsaw","Vienna","Budapest","Chi\u0219in\u0103u","Bucharest","Vilnius","Riga","Tallinn","Berlin","Sofia","Athens","Ankara","Tirana","Zagreb","Bern","Luxembourg","Brussels","Amsterdam","Lisbon","Madrid","Dublin","Noum\xe9a","Honiara","Wellington","Canberra","Sri Jayawardenepura Kotte","Beijing","Taipei","Rome","Copenhagen","London","Reykjav\xedk","Baku","Tbilisi","Manila","Kuala Lumpur","Bandar Seri Begawan","Ljubljana","Helsinki","Bratislava","Prague","Asmara","Tokyo","Asunci\xf3n","Sana'a","Riyadh","No capital (research stations)","North Nicosia","Nicosia","Rabat","Cairo","Tripoli","Addis Ababa","Djibouti","Hargeisa","Kampala","Kigali","Sarajevo","Skopje","Belgrade","Podgorica","Pristina","Port of Spain","Juba"],C.ar("bl<m,m>"))
D.ewe={Africa:0,Asia:1,Europe:2,"North America":3,"South America":4,Oceania:5,Antarctica:6}
D.fcv=new C.b3(3,20,1.9)
D.fbN=new C.b3(33,90,1.6)
D.ffY=new C.b3(52,15,3.2)
D.ffW=new C.b3(45,-100,1.8)
D.fdX=new C.b3(-15,-60,1.9)
D.fdh=new C.b3(-25,140,2.4)
D.fd5=new C.b3(-82,0,2.2)
D.aKS=new C.bl(D.ewe,[D.fcv,D.fbN,D.ffY,D.ffW,D.fdX,D.fdh,D.fd5],C.ar("bl<m,+(G,G,G)>"))
D.dNX=new C.cV([A.pM,1,A.r3,1,A.r4,1,A.bZ,1,A.kh,2,A.x7,4,A.zH,1,A.zI,2,A.zJ,4,A.vc,2,A.x6,4,A.zG,8],C.ar("cV<tR,F>"))
D.dWW=new B.W2(null)
D.e1D=new B.WY(null)
D.e1E=new B.X_(null)
D.e1G=new B.X0(null)
D.eoE=new B.XD(null)
D.eoG=new B.XI(null)
D.eqz=new B.XP(null)
D.aNf=new B.XQ(null)
D.aNn=new B.Y1(null)
D.aNo=new B.Y4(null)
D.exh=new C.r(0,-6771)
D.ezA=new C.r(1.9,-0.8)
D.ezD=new C.r(-0.22,0.09)
D.h9L=new C.C("Tap to throw in a star",null,A.kx,null,null,null,null,null,null,null,null,null)
D.bfK=new C.cl(A.z,null,null,D.h9L,null)
D.eJw=new C.cN(0,null,0,14,null,null,D.bfK,null)
D.bos=new C.u(1,0.1803921568627451,0.49019607843137253,0.7686274509803922,A.q)
D.bv2=new C.u(1,0.027450980392156862,0.10196078431372549,0.2,A.q)
D.djW=x([D.bos,D.alF,D.bv2],y.O)
D.eKr=new C.bT(A.mP,0.5,A.x,null,0,D.djW,D.aDO,null)
D.cO_=x([A.CG,A.au,A.L],y.O)
D.dAK=x([0.3,0.7,1],y.n)
D.eKs=new C.bT(A.z,0.5,A.x,null,0,D.cO_,D.dAK,null)
D.det=x([A.CG,A.au,A.fK],y.O)
D.eKv=new C.bT(A.z,0.5,A.x,null,0,D.det,null,null)
D.boJ=new C.u(1,0.30980392156862746,0.6392156862745098,0.9411764705882353,A.q)
D.bm5=new C.u(1,0.11372549019607843,0.37254901960784315,0.6588235294117647,A.q)
D.dhf=x([D.boJ,D.bm5],y.O)
D.eKA=new C.bT(A.z,0.5,A.x,null,0,D.dhf,null,null)
D.buk=new C.u(1,0.11372549019607843,0.3607843137254902,0.611764705882353,A.q)
D.brT=new C.u(1,0.043137254901960784,0.16470588235294117,0.3215686274509804,A.q)
D.bs_=new C.u(1,0.023529411764705882,0.0784313725490196,0.1568627450980392,A.q)
D.dHk=x([D.buk,D.brT,D.bs_],y.O)
D.eKB=new C.bT(A.Mu,0.5,A.x,null,0,D.dHk,G.aCz,null)
D.fc0=new C.b3("Moon",1.62,4291941851)
D.fcN=new C.b3("Neptune",11.15,4284524026)
D.fdx=new C.b3("Sun",274,4294688548)
D.fdU=new C.b3("Mercury",3.7,4288455599)
D.fe_=new C.b3("Earth",9.81,4281908728)
D.fe1=new C.b3("Mars",3.71,4294472049)
D.fet=new C.b3("Venus",8.87,4294759245)
D.feC=new C.b3("Saturn",10.44,4294829706)
D.ff0=new C.b3("Jupiter",24.79,4294677052)
D.heT=new C.C("Could not share the picture here. Try a screenshot instead.",null,null,null,null,null,null,null,null,null,null,null)
D.aWm=new C.b1(D.heT,null,null,null,null,null,null,null,null,null,null,null,null,A.Y,!1,null,null,null,A.t,null)
D.dvT=x([A.bY,A.bt,A.be,A.aH,A.pA,A.bY],y.O)
D.fAM=new C.hb(A.z,0,6.283185307179586,A.x,D.dvT,null,null)
D.fKr=new C.H(!0,A.aQ,null,null,null,null,10.5,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,K.Tf,null,null,null)
D.fBW=new C.eC("You are here (Sun)",null,null,A.cV,null,null,null,null,null,null,D.fKr)
D.fBX=new C.eC("What we see",null,null,A.cV,null,null,null,null,null,null,F.ada)
D.aXb=new C.H(!0,A.bV,null,null,null,null,9.5,A.u,null,0.8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fD_=new C.H(!0,A.be,null,null,null,null,12.5,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fF8=new C.H(!0,A.bV,null,null,null,null,9,A.u,null,0.8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fFk=new C.H(!0,A.ab,null,null,null,null,14,null,null,null,null,null,1.5,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fGA=new C.H(!0,A.bV,null,null,null,null,9,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.frD=new C.cX(A.b7,A.J,3)
D.aFu=x([D.frD],y.S)
D.fJD=new C.H(!0,A.c,null,null,null,null,11,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,K.Tf,null,null,null)
D.fKd=new C.H(!0,A.c,null,null,null,null,11.5,A.u,null,0.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.frp=new C.cX(A.v,A.J,5)
D.da5=x([D.frp],y.S)
D.fNa=new C.H(!0,A.c,null,null,null,null,13,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,D.da5,null,null,null)
D.fNh=new C.H(!0,A.c,null,null,null,null,12,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,D.aFu,null,null,null)
D.fP9=new C.H(!0,A.bV,null,null,null,null,9.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fPS=new C.H(!0,A.aF,null,null,null,null,10,null,null,null,null,null,1.25,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fSf=new C.H(!0,A.c,null,null,null,null,13,A.a8,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fYt=new C.C("Got it",null,null,null,null,null,null,null,null,null,null,null)
D.fZm=new C.C("Your mass never changes. What changes is how hard each world pulls on it.",null,A.Ly,null,null,null,null,null,null,null,null,null)
D.h_g=new C.C("Connect to the internet once and open the globe. After that it works with no internet at all.",null,A.WY,null,A.K,null,null,null,null,null,null,null)
D.fLG=new C.H(!0,A.jS,null,null,null,null,11,null,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h0O=new C.C("Bars use a squeezed scale so the Sun fits. The numbers are the true values: what a scale would read, and how high you could jump.",null,D.fLG,null,null,null,null,null,null,null,null,null)
D.h7A=new C.C("The map of the world is not saved on this phone yet",null,A.fP,null,A.K,null,null,null,null,null,null,null)
D.h7K=new C.C("Download the animation (GIF)",null,A.cG,null,null,null,null,null,null,null,null,null)
D.fLB=new C.H(!0,A.aH,null,null,null,null,null,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h8R=new C.C("Planet Earth",null,D.fLB,null,null,null,null,null,null,null,null,null)
D.hb6=new C.C("UNIVERSE EXPLORER",null,I.acy,null,null,null,null,null,null,null,null,null)})();(function staticFields(){$.iip=C.S(C.ar("m"),C.ar("j8"))
$.hjj=null
$.icP=C.S(C.ar("m"),C.ar("j8"))
$.idT=C.S(C.ar("m"),C.ar("j8"))})();(function lazyInitializers(){var x=a.lazyFinal
x($,"iLi","hT5",()=>C.a([B.ah6("EARTH GLOBE","Turn it, tap a country",A.nd,A.aH,new B.fzl()),B.ah6("SOLAR SYSTEM","The Sun and its worlds",D.ark,A.aQ,new B.fzm()),B.ah6("GRAVITY LAB","Drop, weigh, orbit",F.a4K,A.cS,new B.fzn()),B.ah6("BLACK HOLE","Throw in a star",A.r5,A.bk,new B.fzo()),B.ah6("GALAXY","Build, tilt, collide",A.xb,A.hi,new B.fzp()),B.ah6("SIZE COMPARE","Earth next to a star",D.bU4,A.c2,new B.fzq()),B.ah6("SEASONS & MOON","Why it is summer",A.vd,A.bv,new B.fzr())],C.ar("N<bye>")))})()};
(a=>{a["9u9O4R6TPM3tKaoDEqzjOd6mpzU="]=a.current})($__dart_deferred_initializers__);