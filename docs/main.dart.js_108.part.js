((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,G,E,D={
i3x(){return new D.P7(null)},
aH8(d){var x=J.a6(d),w=D.jl(x.h(d,"reading")).h(0,"action"),v=J.k(w==null?"":w)
if(B.a.X(v,"BUY"))return 0
if(B.a.X(v,"SELL"))return 1
if(!J.z(x.h(d,"open"),!0))return 4
return 2+(100-D.hl(D.jl(x.h(d,"reading")).h(0,"score")))/1000},
fyX(d){var x
switch(d){case"SPY":x=C.hL_
break
case"QQQ":x=C.hL4
break
case"AAPL":x=C.hL8
break
case"MSFT":x=C.hL3
break
case"NVDA":x=C.hKV
break
case"TSLA":x=C.hL2
break
case"AMZN":x=C.hLb
break
case"BTC/USD":x=C.hL0
break
case"ETH/USD":x=C.hKX
break
case"SOL/USD":x=C.hL6
break
default:x=new D.yU(d,d.length===0?"?":d[0],B.b2)
break}return x},
hil(d,e){var x=null,w=D.fyX(d),v=w.b
return A.o(B.z,A.c(v,x,x,x,x,x,x,A.l(x,x,B.c,x,x,x,x,x,x,x,x,v.length>1?e*0.32:e*0.52,x,x,B.u,x,x,!0,x,x,x,x,x,x,x,x),x,x,x),B.f,x,x,new A.n(w.c,x,x,x,x,x,B.a6),x,e,x,x,x,x,x,e)},
DE(d){var x,w=y.g.a(d.h(0,"markets"))
if(w==null)w=B.ck
w=J.d4(w,y.f)
w=A.cF(w,new D.fze(),w.$ti.k("M.E"),y.P)
x=A.B(w,A.a4(w).k("M.E"))
return x},
jl(d){var x=y.N,w=y.z
return y.f.b(d)?A.a1(d,x,w):A.S(x,w)},
hl(d){var x
if(typeof d=="number")x=d
else{x=A.cA(A.v(d==null?"":d))
if(x==null)x=0}return x},
bEA(d){var x=y.g.a(D.jl(J.t(d,"chart")).h(0,"points"))
if(x==null)x=B.ck
x=J.d4(x,y.f)
x=A.cF(x,new D.fDy(),x.$ti.k("M.E"),y.P)
x=A.B(x,A.a4(x).k("M.E"))
return x},
il(d,e,f){var x,w=A.nT(B.i.ab(Math.abs(d),2),A.af("\\B(?=(\\d{3})+(?!\\d))",!0,!1,!1,!1),new D.fAk(),null)
if(d<0)x="-"
else x=f&&d>0?"+":""
return x+(e?"$":"")+w},
aQy(d){var x=B.o.F(A.d1(d),12)===0?12:B.o.F(A.d1(d),12),w=B.a.b1(B.o.v(A.fD(d)),2,"0"),v=A.d1(d)<12?"AM":"PM"
return""+x+":"+w+" "+v},
bF2(d){var x=d.aa(),w=new D.fHz(),v=w.$3(A.bD(x),3,2).bQ(252e8),u=w.$3(A.bD(x),11,1).bQ(216e8),t=x.bQ(0-A.du(0,!x.cZ(v)&&x.cZ(u)?4:5,0,0,0,0).a)
return A.c0(A.bD(t),A.bL(t),A.bW(t),A.d1(t),A.fD(t),0,0,0)},
iex(d){var x,w=A.bh(A.v(d==null?"":d))
if(w==null)return""
x=D.bF2(w)
return B.iK[A.bL(x)-1]+" "+A.bW(x)+" at "+D.aQy(x)+" ET"},
il_(d){var x,w,v=d.split(", ")
if(v.length>=4){x=v[1]
w=v[3]
return x+", "+A.aL(w," ET","")}return d},
hCF(d){return d.length===0?d:d[0].toUpperCase()+B.a.aY(d,1)},
hF7(){var x=D.bF2(new A.V(Date.now(),0,!1).aa()),w=B.o.F(A.fD(x),15)
return"at "+D.aQy(A.c0(A.bD(x),A.bL(x),A.bW(x),A.d1(x),A.fD(x),0,0,0).bQ(A.du(0,0,0,0,15-w,0).a))+" ET"},
ic0(d){if(B.a.X(d,"BUY"))return C.eB
if(B.a.X(d,"SELL"))return C.fs
if(B.a.X(d,"UP"))return B.aU
if(B.a.X(d,"DOWN"))return C.fs
if(B.a.X(d,"MARKET CLOSED"))return B.bP
return B.n4},
hG4(a0,a1,a2,a3){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=null,g="mom1h",f=J.a6(a1),e=D.jl(f.h(a1,"reading")),d=f.h(a1,"asset")
if(d==null)d=f.h(a1,"symbol")
x=J.k(d==null?"":d)
d=e.h(0,"action")
w=J.k(d==null?"WAITING FOR DATA":d)
v=D.ic0(w)
u=B.i.D(D.hl(e.h(0,"score")),0,100)
d=y.g.a(e.h(0,"notes"))
if(d==null)d=B.ck
d=J.ba(d,new D.fEp(),y.N)
t=A.B(d,d.$ti.k("ak.E"))
s=D.hl(f.h(a1,"changePct"))
d=a0.a
r=d?B.c.j(0.92):C.mV
q=A.m(20)
p=!B.a.X(w,"BUY")
if(!p||B.a.X(w,"SELL"))o=v.j(0.6)
else o=d?B.c:C.uO
o=A.K(o,B.r,!p||B.a.X(w,"SELL")?1.6:1)
n=A.a([new A.ab(0,B.H,a0.ga9x(),B.hP,14)],y.V)
m=D.hil(x,28)
p=A.c(x,h,h,h,h,h,h,A.l(h,h,d?C.ed:B.c,h,h,h,h,h,h,h,h,14,h,h,B.F,h,h,!0,h,h,h,h,h,h,h,h),h,h,h)
l=f.h(a1,"name")
l=J.k(l==null?"":l)
k=y.p
l=A.E(A.x(A.a([p,A.c(l,h,h,h,h,h,h,A.l(h,h,d?C.dN:C.dO,h,h,h,h,h,h,h,h,11,h,h,h,h,h,!0,h,h,h,h,h,h,h,h),h,h,h)],k),B.B,h,B.e,B.h,0,B.p),1)
f=D.il(D.hl(f.h(a1,"price")),!0,!1)
f=A.c(f,h,h,h,h,h,h,A.l(h,h,d?C.ed:B.c,h,h,h,h,h,h,h,h,14,h,h,B.F,h,h,!0,h,h,h,h,h,h,h,h),h,h,h)
p=s>=0
j=p?"+":""
i=B.i.ab(s,2)
f=A.A(A.a([m,B.ar,l,A.x(A.a([f,A.c(j+i+"% \xb7 4h",h,h,h,h,h,h,A.l(h,h,p?C.eB:C.fs,h,h,h,h,h,h,h,h,11,h,h,B.O,h,h,!0,h,h,h,h,h,h,h,h),h,h,h)],k),B.dG,h,B.e,B.h,0,B.p)],k),B.l,h,B.e,B.h,0,h,h)
m=v.j(0.15)
l=A.m(999)
l=A.a([A.o(h,A.c(w,h,h,h,h,h,h,A.l(h,h,v,h,h,h,h,h,h,h,h,10.5,h,h,B.u,h,h,!0,h,0.4,h,h,h,h,h,h),h,h,h),B.f,h,h,new A.n(m,h,h,l,h,h,B.m),h,h,h,h,B.nY,h,h,h),B.aY],k)
if(e.h(0,"rsi")!=null){p=B.i.ab(D.hl(e.h(0,"rsi")),0)
l.push(A.c("RSI "+p,h,h,h,h,h,h,A.l(h,h,d?C.dN:C.dO,h,h,h,h,h,h,h,h,11,h,h,B.O,h,h,!0,h,h,h,h,h,h,h,h),h,h,h))}if(e.h(0,g)!=null){p=D.hl(e.h(0,g))>=0?"+":""
m=B.i.ab(D.hl(e.h(0,g)),2)
B.d.u(l,A.a([B.ar,A.c("1h "+p+m+"%",h,h,h,h,h,h,A.l(h,h,D.hl(e.h(0,g))>=0?C.eB:C.fs,h,h,h,h,h,h,h,h,11,h,h,B.O,h,h,!0,h,h,h,h,h,h,h,h),h,h,h)],k))}p=A.A(l,B.l,h,B.e,B.h,0,h,h)
m=A.ce(new D.fEq(u,a0))
l=A.c("Sellers",h,h,h,h,h,h,A.l(h,h,d?C.dN:C.dO,h,h,h,h,h,h,h,h,10,h,h,h,h,h,!0,h,h,h,h,h,h,h,h),h,h,h)
j=B.i.ab(u,0)
j=A.c("Strength "+j+"/100",h,h,h,h,h,h,A.l(h,h,d?C.ed:B.c,h,h,h,h,h,h,h,h,10.5,h,h,B.F,h,h,!0,h,h,h,h,h,h,h,h),h,h,h)
f=A.a([f,B.S,p,B.S,m,B.au,A.A(A.a([l,B.aY,j,B.aY,A.c("Buyers",h,h,h,h,h,h,A.l(h,h,d?C.dN:C.dO,h,h,h,h,h,h,h,h,10,h,h,h,h,h,!0,h,h,h,h,h,h,h,h),h,h,h)],k),B.l,h,B.e,B.h,0,h,h),B.P],k)
p=J.aT(a2?A.cU(t,0,A.dy(2,"count",y.S),A.T(t).c):t)
while(p.C()){m=p.gP(p)
l=A.W(B.tr,v,h,h,h,4.5)
j=d?C.ed:B.c
f.push(new A.D(B.na,new A.c3(B.aL,B.e,B.h,B.B,h,B.p,h,0,A.a([new A.D(B.hv,l,h),B.xR,new A.bx(1,B.ba,A.c(m,h,h,h,h,h,h,new A.F(!0,j,h,h,h,h,12.3,h,h,h,h,h,1.35,h,h,h,h,h,h,h,h,h,h,h,h,h),h,h,h),h)],k),h),h))}if(a3!=null)f.push(new A.bK(B.a9,h,h,A.hq(C.bXq,A.c("Ask the tutor about "+x,h,h,h,h,h,h,h,h,h,h),a3,h),h))
return A.o(h,A.x(f,B.B,h,B.e,B.h,0,B.p),B.f,h,h,new A.n(r,h,o,q,n,h,B.m),h,h,h,B.d4,B.bH,h,h,h)},
P7:function P7(d){this.a=d},
aH7:function aH7(d){var _=this
_.d=null
_.e=d
_.f=!0
_.r=!1
_.w=!0
_.x=!1
_.y=48
_.z=null
_.Q=!0
_.c=_.a=_.at=_.as=null},
eFw:function eFw(d){this.a=d},
eFh:function eFh(d,e){this.a=d
this.b=e},
eF8:function eF8(){},
eF9:function eF9(d,e,f){this.a=d
this.b=e
this.c=f},
eFp:function eFp(){},
eFn:function eFn(d){this.a=d},
eFo:function eFo(d){this.a=d},
eFq:function eFq(d){this.a=d},
eFr:function eFr(d){this.a=d},
eFf:function eFf(d){this.a=d},
eFj:function eFj(d){this.a=d},
eFk:function eFk(d,e){this.a=d
this.b=e},
eFl:function eFl(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eFi:function eFi(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eFm:function eFm(){},
eFv:function eFv(d){this.a=d},
eFs:function eFs(d){this.a=d},
eFt:function eFt(d){this.a=d},
eF_:function eF_(d){this.a=d},
eF0:function eF0(d,e){this.a=d
this.b=e},
eF1:function eF1(d){this.a=d},
eF2:function eF2(d){this.a=d},
eFc:function eFc(){},
eFe:function eFe(){},
eFd:function eFd(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
eFb:function eFb(d,e){this.a=d
this.b=e},
eFa:function eFa(d,e){this.a=d
this.b=e},
eF5:function eF5(d,e){this.a=d
this.b=e},
eF4:function eF4(d,e){this.a=d
this.b=e},
eF6:function eF6(d){this.a=d},
eF3:function eF3(d){this.a=d},
eFg:function eFg(d,e){this.a=d
this.b=e},
eF7:function eF7(d,e){this.a=d
this.b=e},
eFu:function eFu(){},
eEZ:function eEZ(d){this.a=d},
eEY:function eEY(d){this.a=d},
ady:function ady(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
be1:function be1(){this.c=this.a=this.d=null},
cWn:function cWn(d,e){this.a=d
this.b=e},
cWw:function cWw(d){this.a=d},
cWu:function cWu(d,e){this.a=d
this.b=e},
cWs:function cWs(d,e){this.a=d
this.b=e},
cWt:function cWt(d,e){this.a=d
this.b=e},
cWr:function cWr(d){this.a=d},
cWq:function cWq(d){this.a=d},
cWv:function cWv(d){this.a=d},
cWp:function cWp(d){this.a=d},
cWo:function cWo(d){this.a=d},
be2:function be2(d,e,f,g,h,i,j,k){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.w=j
_.a=k},
cWx:function cWx(d){this.a=d},
cWz:function cWz(d,e){this.a=d
this.b=e},
cWy:function cWy(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
bvU:function bvU(d,e,f){this.b=d
this.c=e
this.a=f},
ffk:function ffk(){},
yU:function yU(d,e,f){this.a=d
this.b=e
this.c=f},
fze:function fze(){},
a1s:function a1s(d){this.a=d},
fDy:function fDy(){},
fAk:function fAk(){},
fHz:function fHz(){},
fEp:function fEp(){},
fEq:function fEq(d,e){this.a=d
this.b=e},
nk:function nk(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
uq:function uq(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
XA:function XA(d,e,f){this.c=d
this.d=e
this.a=f},
a_v:function a_v(d,e){this.a=d
this.b=e},
aH9:function aH9(d,e,f,g,h,i){var _=this
_.d=$
_.r=_.f=_.e=null
_.w=d
_.x=e
_.y=f
_.z=g
_.Q=!1
_.bu$=h
_.a9$=i
_.c=_.a=null},
eG4:function eG4(d){this.a=d},
eG3:function eG3(){},
eG5:function eG5(d){this.a=d},
eFO:function eFO(d,e){this.a=d
this.b=e},
eFP:function eFP(d,e){this.a=d
this.b=e},
eFU:function eFU(d,e){this.a=d
this.b=e},
eG_:function eG_(){},
eG0:function eG0(){},
eFF:function eFF(d){this.a=d},
eFG:function eFG(){},
eFz:function eFz(d,e){this.a=d
this.b=e},
eFA:function eFA(){},
eFB:function eFB(){},
eFC:function eFC(d,e){this.a=d
this.b=e},
eFV:function eFV(d){this.a=d},
eG1:function eG1(d){this.a=d},
eG2:function eG2(d,e){this.a=d
this.b=e},
eFE:function eFE(d){this.a=d},
eFD:function eFD(d,e){this.a=d
this.b=e},
eFT:function eFT(d,e){this.a=d
this.b=e},
eFQ:function eFQ(d,e){this.a=d
this.b=e},
eFR:function eFR(d,e){this.a=d
this.b=e},
eFS:function eFS(d){this.a=d},
eFH:function eFH(d,e,f){this.a=d
this.b=e
this.c=f},
eFN:function eFN(d){this.a=d},
eFI:function eFI(){},
eFJ:function eFJ(){},
eFK:function eFK(){},
eFL:function eFL(){},
eFM:function eFM(){},
eFW:function eFW(){},
eFX:function eFX(){},
eFY:function eFY(){},
eFZ:function eFZ(d,e){this.a=d
this.b=e},
eFx:function eFx(d,e){this.a=d
this.b=e},
eFy:function eFy(d){this.a=d},
a0w:function a0w(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
bkI:function bkI(d){this.d=d
this.c=this.a=null},
du0:function du0(d){this.a=d},
du1:function du1(d){this.a=d},
du2:function du2(d,e){this.a=d
this.b=e},
du3:function du3(d,e){this.a=d
this.b=e},
du_:function du_(d,e,f){this.a=d
this.b=e
this.c=f},
dtZ:function dtZ(d,e,f){this.a=d
this.b=e
this.c=f},
aP9:function aP9(){}},C,H,I,K,L,M,F
J=c[1]
A=c[0]
B=c[2]
G=c[97]
E=c[83]
D=a.updateHolder(c[12],D)
C=c[95]
H=c[98]
I=c[51]
K=c[96]
L=c[44]
M=c[27]
F=c[90]
D.P7.prototype={
S(){return new D.aH7(A.a([],y.t))}}
D.aH7.prototype={
Z(){var x=this
x.a4()
x.a.toString
x.Bk(!0)
x.at=A.de(B.nR,new D.eFw(x))},
t(){var x=this.at
if(x!=null)x.a1(0)
this.a3()},
Bk(d){return this.cvC(d)},
cfZ(){return this.Bk(!1)},
cvC(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$Bk=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(A.hg(A.J(["action","paStatus","live",d],y.N,y.z),!1,!1,!1,!1,B.Hq),$async$Bk)
case 3:t=f
if(u.c==null){x=1
break}u.l(new D.eFh(u,t))
x=u.d!=null?4:5
break
case 4:x=6
return A.b(u.c6N(),$async$Bk)
case 6:case 5:case 1:return A.h(v,w)}})
return A.i($async$Bk,w)},
a_0(d){return this.c6O(d)},
c6N(){return this.a_0(!1)},
c6O(d){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$a_0=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(A.hg(A.J(["action","paLog","limit",100,"beforeId",d&&u.e.length!==0?J.t(B.d.gal(u.e),"id"):0],y.N,y.z),!1,!1,!1,!1,B.i_),$async$a_0)
case 3:r=f
if(u.c==null||r==null||!J.z(J.t(r,"ok"),!0)){x=1
break}t=y.g.a(J.t(r,"rows"))
if(t==null)t=B.ck
t=J.d4(t,y.f)
t=A.cF(t,new D.eF8(),t.$ti.k("M.E"),y.P)
s=A.B(t,A.a4(t).k("M.E"))
u.l(new D.eF9(u,d,s))
case 1:return A.h(v,w)}})
return A.i($async$a_0,w)},
SI(d){return this.cAv(d)},
cAv(d){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$SI=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=u.d
q=D.jl(r==null?null:J.t(r,"state"))
x=d&&J.z(q.h(0,"brakePaused"),!0)?3:4
break
case 3:r=u.c
r.toString
x=5
return A.b(A.cg(null,null,!0,null,new D.eFp(),r,null,!0,!0,y.y),$async$SI)
case 5:if(f!==!0){x=1
break}case 4:u.l(new D.eFq(u))
x=6
return A.b(A.hg(A.J(["action","paSet","enabled",d],y.N,y.z),!1,!1,!1,!1,B.i_),$async$SI)
case 6:t=f
if(u.c==null){x=1
break}u.l(new D.eFr(u))
r=t==null
if(J.z(r?null:J.t(t,"ok"),!0))s=d?"Agent started.":"Agent stopped."
else{s=r?null:J.t(t,"error")
s=J.k(s==null?"Could not change it.":s)}u.b3_(s,J.z(r?null:J.t(t,"ok"),!0)?C.eB:C.fs)
x=7
return A.b(u.cfZ(),$async$SI)
case 7:case 1:return A.h(v,w)}})
return A.i($async$SI,w)},
clh(){var x=this.c
x.toString
A.a8(x,!1).cb(A.e9(new D.eFf(this),!1,null,y.H))},
a3h(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$a3h=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u.l(new D.eFj(u))
x=3
return A.b(A.hg(A.J(["action","paCheck"],y.N,y.z),!1,!1,!1,!1,B.nR),$async$a3h)
case 3:t=e
if(u.c==null){x=1
break}u.l(new D.eFk(u,t))
s=t==null
if(!J.z(s?null:J.t(t,"ok"),!0)){s=s?null:J.t(t,"error")
u.b3_(J.k(s==null?"The scan did not finish.":s),C.fs)
x=1
break}s=u.c
s.toString
s=A.O(s).ax.a===B.dd
t.toString
r=D.jl(D.jl(J.t(t,"state")).h(0,"snapshot"))
q=u.c
q.toString
p=s?C.yI:C.yG
x=4
return A.b(A.bU(p,null,new D.eFl(u,new D.a1s(s),r,t),q,!0,!0,!0,B.aU2,!1,!1,y.H),$async$a3h)
case 4:case 1:return A.h(v,w)}})
return A.i($async$a3h,w)},
cyH(d,e,f,g){var x,w,v,u,t,s=null,r=D.DE(e)
B.d.b_(r,new D.eFm())
x=d.a
w=x?C.wC:C.wA
w=A.as(A.o(s,s,B.f,s,s,new A.n(w,s,s,A.m(9),s,s,B.m),s,4,s,s,s,s,s,40),s,s,s)
v=A.c("What the agent sees right now",s,s,s,s,s,s,A.l(s,s,x?C.ed:B.c,s,s,s,s,s,s,s,s,19,s,s,B.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)
u=J.z(f.h(0,"enabled"),!0)?" (next one "+D.hF7()+")":" (the agent is stopped, so none will be made)"
w=A.a([w,B.aA,v,B.au,A.c("This scan only looks. It never buys or sells. Pretend trades are made only by the automatic check every 15 minutes"+u+".",s,s,s,s,s,s,A.l(s,s,x?C.dN:C.dO,s,s,s,s,s,s,s,s,12.5,s,s,s,s,1.35,!0,s,s,s,s,s,s,s,s),s,s,s),B.af],y.p)
for(x=r.length,t=0;t<r.length;r.length===x||(0,A.I)(r),++t)w.push(D.hG4(d,r[t],!0,s))
return A.cn(w,g,s,C.bGG,s,s,B.ah,!1)},
b3_(d,e){var x=null
this.c.L(y.q).f.U(A.b3(x,x,x,e,x,B.t,x,A.c(d,x,x,x,x,x,x,x,x,x,x),x,B.Y,x,x,x,x,x,x,x,x,x,x))},
B(d){var x,w=this,v=null,u=A.O(d).ax.a===B.dd,t=new D.a1s(u),s=u?C.yI:C.yG,r=u?C.yI:C.yG
r=A.a([r,u?C.a_w:C.a_m],y.O)
x=w.cg_(t)
if(w.f)u=B.lJ
else{if(w.d==null){u=w.as
u=A.a([w.aaz(t,u==null?"Nothing to show yet.":u,B.b2)],y.p)}else u=w.bI2(0,t)
u=A.PJ(A.cn(u,v,v,C.bH1,v,v,B.ah,!1),v,new D.eFv(w))}return A.c5(v,s,A.o(v,A.bm(!0,A.x(A.a([x,A.E(u,1)],y.p),B.l,v,B.e,B.h,0,B.p),!0,!1,B.ag,!0,!0),B.f,v,v,new A.n(v,v,v,v,v,new A.a7(B.aX,B.b1,B.x,r,v,v),B.m),v,v,v,v,v,v,v,v),v,!1,!1,v,v)},
cg_(d){var x,w,v,u,t,s,r=this,q=null,p=r.d,o=D.jl(p==null?q:J.t(p,"state")),n=J.z(o.h(0,"brakePaused"),!0),m=J.z(o.h(0,"enabled"),!0)&&!n
p=r.b2Z(d,B.eG,new D.eFs(r))
x=d.a
w=A.c("Signal Grid",q,q,q,q,q,q,A.l(q,q,x?C.ed:B.c,q,q,q,q,q,q,q,q,17,q,q,B.F,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
v=y.p
w=A.a([p,B.ar,A.E(A.x(A.a([w,A.c("Paper trading agent \xb7 pretend money",q,q,q,q,q,q,A.l(q,q,x?C.dN:C.dO,q,q,q,q,q,q,q,q,11.5,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],v),B.B,q,B.e,B.h,0,B.p),1)],v)
if(r.d!=null){if(n)p=C.fs
else if(m)p=C.eB
else p=x?C.dN:C.dO
p=p.j(0.14)
u=A.m(999)
if(n)t=C.fs
else if(m)t=C.eB
else t=x?C.dN:C.dO
t=A.W(B.tr,t,q,q,q,8)
if(n)s="Paused"
else s=m?"Running":"Stopped"
if(n)x=C.fs
else if(m)x=C.eB
else x=x?C.dN:C.dO
w.push(A.o(q,A.A(A.a([t,B.bk,A.c(s,q,q,q,q,q,q,A.l(q,q,x,q,q,q,q,q,q,q,q,12,q,q,B.F,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],v),B.l,q,B.e,B.M,0,q,q),B.f,q,q,new A.n(p,q,q,u,q,q,B.m),q,q,q,q,B.fW,q,q,q))}w.push(B.aa)
w.push(r.b2Z(d,B.o1,r.r?q:new D.eFt(r)))
return new A.D(B.hk,A.A(w,B.l,q,B.e,B.h,0,q,q),q)},
bI2(d1,d2){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4=this,c5=null,c6="asset",c7="liveError",c8="brakePaused",c9="amount",d0=c4.d
d0.toString
x=J.a6(d0)
w=D.jl(x.h(d0,"state"))
v=D.jl(x.h(d0,"config"))
u=D.jl(w.h(0,"snapshot"))
t=y.f.b(w.h(0,"shadow"))?D.jl(w.h(0,"shadow")):c5
s=D.DE(u)
r=c4.z
if(r==null){q=t==null?c5:t.h(0,"symbol")
if(q==null)q=u.h(0,c6)
r=q==null?c5:J.k(q)}p=B.d.dA(s,new D.eF_(r),new D.eF0(s,u))
q=t==null
o=q?c5:B.d.dA(s,new D.eF1(t),new D.eF2(p))
q=!q
n=q&&J.z(t.h(0,"symbol"),J.t(p,c6))?t:c5
m=c4.c8f(d2,d0,s,p,t)
l=D.jl(x.h(d0,"market"))
k=J.a6(p)
j=k.h(p,c6)
i=J.k(j==null?"SPY":j)
h=B.a.q(i,"/")
g=D.bEA(p)
f=D.hl(k.h(p,"price"))
e=g.length!==0?D.hl(J.t(B.d.gH(g),"c")):0
d=e===0?0:(f-e)/e*100
a0=d>=0
if(h)a1=!0
else{j=k.h(p,"open")
if(j==null)j=l.h(0,"stockOpen")
a1=j==null?l.h(0,"open"):j}if(h)a2="Crypto \xb7 trades all day, every day"
else{j=J.kF(a1)
if(j.A(a1,!0))a2="Stock market open \xb7 closes 4:00 PM ET"
else{j=j.A(a1,!1)?"Stock market closed"+c4.cLZ(l.h(0,"nextOpen")):""
a2=j}}a3=D.fyX(i)
j=D.hil(i,30)
a4=h?i:i+"/USD"
a5=d2.a
a4=A.c(a4,c5,c5,c5,c5,c5,c5,A.l(c5,c5,a5?C.ed:B.c,c5,c5,c5,c5,c5,c5,c5,c5,17,c5,c5,B.F,c5,c5,!0,c5,c5,c5,c5,c5,c5,c5,c5),c5,c5,c5)
a6=k.h(p,"name")
a6=J.k(a6==null?a3.a:a6)
a7=y.p
a6=A.A(A.a([j,B.ar,a4,B.bk,new A.d6(1,B.cg,A.c(a6,c5,c5,B.a2,c5,c5,c5,A.l(c5,c5,a5?C.dN:C.dO,c5,c5,c5,c5,c5,c5,c5,c5,13,c5,c5,c5,c5,c5,!0,c5,c5,c5,c5,c5,c5,c5,c5),c5,c5,c5),c5)],a7),B.l,c5,B.e,B.h,0,c5,c5)
j=f===0?"\u2014":D.il(f,!1,!1)
j=A.a([A.E(new A.dk(B.dv,B.a5,B.f,A.c(j,c5,c5,c5,c5,c5,c5,A.l(c5,c5,a5?C.ed:B.c,c5,c5,c5,c5,c5,c5,c5,K.SS,42,c5,c5,B.a8,c5,c5,!0,c5,-1,c5,c5,c5,c5,c5,c5),c5,c5,c5),c5),1)],a7)
if(g.length>1){a4=(a0?C.eB:C.fs).j(0.14)
a8=A.m(10)
a9=a0?C.bT5:B.a3Q
a9=A.W(a9,a0?C.eB:C.fs,c5,c5,c5,20)
b0=B.i.ab(Math.abs(d),2)
j.push(A.o(c5,A.A(A.a([a9,A.c(b0+"%",c5,c5,c5,c5,c5,c5,A.l(c5,c5,a0?C.eB:C.fs,c5,c5,c5,c5,c5,c5,c5,c5,13,c5,c5,B.F,c5,c5,!0,c5,c5,c5,c5,c5,c5,c5,c5),c5,c5,c5)],a7),B.l,c5,B.e,B.M,0,c5,c5),B.f,c5,c5,new A.n(a4,c5,c5,a8,c5,c5,B.m),c5,c5,c5,c5,B.fW,c5,c5,c5))}j=A.a([a6,B.P,A.A(j,B.l,c5,B.e,B.h,0,c5,c5)],a7)
if(a2.length!==0){if(J.z(a1,!0))a4=C.eB
else a4=a5?C.dN:C.dO
a4=A.W(B.tr,a4,c5,c5,c5,7)
a6=g.length>1?"  \xb7  change over 4H":""
B.d.u(j,A.a([B.au,A.A(A.a([a4,B.bk,new A.d6(1,B.cg,A.c(a2+a6,c5,c5,B.a2,c5,c5,c5,A.l(c5,c5,a5?C.dN:C.dO,c5,c5,c5,c5,c5,c5,c5,c5,12,c5,c5,c5,c5,c5,!0,c5,c5,c5,c5,c5,c5,c5,c5),c5,c5,c5),c5)],a7),B.l,c5,B.e,B.h,0,c5,c5)],a7))}m=A.a([m,new A.D(C.bKg,A.x(j,B.B,c5,B.e,B.h,0,B.p),c5)],a7)
j=v.h(0,"problem")
if(J.k(j==null?"":j).length!==0)m.push(c4.aaz(d2,J.k(v.h(0,"problem")),B.n4))
j=x.h(d0,c7)
if(J.k(j==null?"":j).length!==0)m.push(c4.aaz(d2,J.k(x.h(d0,c7)),C.fs))
if(J.z(w.h(0,c8),!0)){j=w.h(0,"brakeReason")
m.push(c4.aaz(d2,"Paused by the $25 brake. "+A.v(j==null?"":j)+". Look over the trades, then press Start to turn it back on.",C.fs))}m.push(c4.bL1(d2,p,n))
m.push(c4.cJj(d2,p,t,d0))
b1=D.jl(x.h(d0,"today"))
b2=D.jl(x.h(d0,"record"))
b3=D.jl(x.h(d0,"ticket"))
b4=D.hl(w.h(0,"totalPnl"))
b5=D.hl(b1.h(0,"day_pnl"))
j=A.m(26)
a4=A.a([new A.ab(0,B.H,B.im.j(0.3),B.eS,24)],y.V)
a6=A.A(A.a([C.h1o,B.aY,A.o(c5,C.h0G,B.f,c5,c5,new A.n(B.c.j(0.14),c5,c5,A.m(999),c5,c5,B.m),c5,c5,c5,c5,B.fC,c5,c5,c5)],a7),B.l,c5,B.e,B.h,0,c5,c5)
a8=A.c(u.h(0,"equity")==null?"\u2014":D.il(D.hl(u.h(0,"equity")),!0,!1),c5,c5,c5,c5,c5,c5,C.fCb,c5,c5,c5)
a9=A.c("Buying power "+D.il(D.hl(u.h(0,"buyingPower")),!0,!1)+" \xb7 the agent uses only $"+B.i.ab(D.hl(b3.h(0,c9)),0)+" a trade",c5,c5,c5,c5,c5,c5,B.WE,c5,c5,c5)
b0=D.il(b5,!0,!0)
if(b5>0)b6=C.eB
else b6=b5<0?C.fs:B.c
b6=A.E(c4.P2("Today",b0,b6),1)
b0=D.il(b4,!0,!0)
if(b4>0)b7=C.eB
else b7=b4<0?C.fs:B.c
b7=A.E(c4.P2("All time",b0,b7),1)
b0=b2.h(0,"wins")
b0=A.v(b0==null?0:b0)
b8=b2.h(0,"losses")
b0=A.A(A.a([b6,B.aa,b7,B.aa,A.E(c4.P2("Wins / losses",b0+" / "+A.v(b8==null?0:b8),B.c),1)],a7),B.l,c5,B.e,B.h,0,c5,c5)
b6=b1.h(0,"trades")
b6=A.v(b6==null?0:b6)
b7=b3.h(0,"maxTradesToday")
m.push(A.o(c5,A.x(A.a([a6,B.au,new A.dk(B.dv,B.a5,B.f,a8,c5),B.bC,a9,B.aA,b0,B.P,A.A(A.a([A.E(c4.P2("Trades today",b6+" of "+A.v(b7==null?4:b7),B.c),1),B.aa,A.E(c4.P2("Daily stop","-$10",B.c),1),B.aa,A.E(c4.P2("Total brake","-$25",B.c),1)],a7),B.l,c5,B.e,B.h,0,c5,c5)],a7),B.B,c5,B.e,B.h,0,B.p),B.f,c5,c5,new A.n(c5,c5,c5,j,a4,C.ca5,B.m),c5,c5,c5,B.eb,B.fb,c5,c5,c5))
if(q){o.toString
x=c4.crd(d2,t,o)}else{b9=D.jl(x.h(d0,"ticket"))
f=D.hl(k.h(p,"price"))
c0=D.hl(b9.h(0,c9))===0?50:D.hl(b9.h(0,c9))
x=f===0
c1=x?0:c0/f
q=A.A(A.a([A.c("Next trade",c5,c5,c5,c5,c5,c5,A.l(c5,c5,a5?C.ed:B.c,c5,c5,c5,c5,c5,c5,c5,c5,16,c5,c5,B.F,c5,c5,!0,c5,c5,c5,c5,c5,c5,c5,c5),c5,c5,c5),B.aY,c4.a0M("AUTOMATIC",B.b2)],a7),B.l,c5,B.e,B.h,0,c5,c5)
j=a5?C.NV:C.NM
a4=A.m(999)
a6=a5?C.lO:B.c
a8=A.m(999)
a6=A.E(A.o(B.z,A.c("BUY",c5,c5,c5,c5,c5,c5,A.l(c5,c5,a5?B.c:C.lO,c5,c5,c5,c5,c5,c5,c5,c5,12.5,c5,c5,B.F,c5,c5,!0,c5,c5,c5,c5,c5,c5,c5,c5),c5,c5,c5),B.f,c5,c5,new A.n(a6,c5,c5,a8,c5,c5,B.m),c5,c5,c5,c5,B.wS,c5,c5,c5),1)
j=A.o(c5,A.A(A.a([a6,A.E(A.as(A.c("SELL",c5,c5,c5,c5,c5,c5,A.l(c5,c5,a5?C.dN:C.dO,c5,c5,c5,c5,c5,c5,c5,c5,12.5,c5,c5,B.F,c5,c5,!0,c5,c5,c5,c5,c5,c5,c5,c5),c5,c5,c5),c5,c5,c5),1)],a7),B.l,c5,B.e,B.h,0,c5,c5),B.f,c5,c5,new A.n(j,c5,c5,a4,c5,c5,B.m),c5,c5,c5,c5,B.ey,c5,c5,c5)
a4=D.il(c0,!0,!1)
if(x)a6=c5
else{a6=B.i.ab(c1,c1<0.01?6:4)
a8=k.h(p,c6)
a6="\u2248 "+a6+" "+A.v(a8==null?"":a8)}a6=c4.cHC(d2,"Amount it puts in",a4,!0,a6)
a4=B.i.ab(D.hl(b9.h(0,"takeProfitPct")),0)
a8=D.il(D.hl(b9.h(0,"takeProfitUsd")),!0,!1)
a9=x?c5:"sells at "+D.il(f*1.03,!0,!1)
a9=c4.bbW(d2,"Take profit  +"+a4+"%","+"+a8,C.eB,a9)
a8=B.i.ab(D.hl(b9.h(0,"stopLossPct")),1)
a4=D.il(D.hl(b9.h(0,"stopLossUsd")),!0,!1)
x=x?c5:"sells at "+D.il(f*0.985,!0,!1)
x=c4.bbW(d2,"Stop loss  -"+a8+"%","-"+a4,C.fs,x)
a4=c4.cHB(d2,"Leverage","None (1x)","no borrowing, no shorting")
a8=a5?C.lO:B.c
b0=A.m(999)
a8=A.o(B.z,A.c("Buys by itself when the trend turns up",c5,c5,c5,c5,c5,c5,A.l(c5,c5,a5?B.c:C.lO,c5,c5,c5,c5,c5,c5,c5,c5,13.5,c5,c5,B.F,c5,c5,!0,c5,c5,c5,c5,c5,c5,c5,c5),c5,c5,c5),B.f,c5,c5,new A.n(a8,c5,c5,b0,c5,c5,B.m),c5,c5,c5,c5,B.cm,c5,c5,1/0)
k=k.h(p,c6)
k=A.v(k==null?"":k)
x=c4.a0L(d2,A.x(A.a([q,B.af,j,B.S,a6,a9,x,a4,B.S,a8,B.al,A.as(A.c("Shown for "+k+" at its price right now. The agent buys whichever market signals first.",c5,c5,c5,c5,c5,c5,A.l(c5,c5,a5?C.dN:C.dO,c5,c5,c5,c5,c5,c5,c5,c5,11,c5,c5,c5,c5,c5,!0,c5,c5,c5,c5,c5,c5,c5,c5),B.K,c5,c5),c5,c5,c5)],a7),B.B,c5,B.e,B.h,0,B.p))}m.push(x)
m.push(c4.cfX(d2,w))
c2=J.z(w.h(0,"enabled"),!0)&&!J.z(w.h(0,c8),!0)
x=w.h(0,"lastTickAt")
c3=A.bh(A.v(x==null?"":x))
if(c2)x=C.eB
else x=a5?C.dN:C.dO
x=A.W(B.a3T,x,c5,c5,c5,16)
if(c2){q=c3==null?"not yet":D.aQy(D.bF2(c3))+" ET"
q="Trades are automatic: the agent checks all markets every 15 minutes by itself. Last check "+q+" \xb7 next "+D.hF7()+". Scan now only looks."}else q="The agent is stopped, so it makes no trades. Press Start and it checks all markets every 15 minutes by itself."
m.push(new A.D(C.bKt,A.A(A.a([x,B.bk,A.E(A.c(q,c5,c5,c5,c5,c5,c5,A.l(c5,c5,a5?C.dN:C.dO,c5,c5,c5,c5,c5,c5,c5,c5,11.5,c5,c5,c5,c5,1.35,!0,c5,c5,c5,c5,c5,c5,c5,c5),c5,c5,c5),1)],a7),B.B,c5,B.e,B.h,0,c5,c5),c5))
m.push(c4.cJ_(d2,d0))
m.push(c4.bEF(d2))
m.push(c4.cxC(d2,d0))
d0=J.z(v.h(0,"ordersSwitchOn"),!0)?"on":"off"
m.push(new A.D(B.hv,A.c("Version 1 is read-only: no order is ever sent to Alpaca. Order switch (ALPACA_ORDERS_ENABLED): "+d0+".",c5,c5,c5,c5,c5,c5,A.l(c5,c5,a5?C.dN:C.dO,c5,c5,c5,c5,c5,c5,c5,c5,11,c5,c5,c5,c5,c5,!0,c5,c5,c5,c5,c5,c5,c5,c5),B.K,c5,c5),c5))
return m},
c8f(d,e,f,g,h){var x,w,v,u,t,s=null
if(f.length<2)return B.bL
x=new A.Y(f,new D.eFc(),A.T(f).k("Y<1>")).gJ(0)
w=f.length
v=d.a
w=A.c("Watching "+w+" markets",s,s,s,s,s,s,A.l(s,s,v?C.ed:B.c,s,s,s,s,s,s,s,s,14,s,s,B.F,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)
u=this.a0M(""+x+" OPEN NOW",C.eB)
t=y.p
return new A.D(B.eJ,A.x(A.a([new A.D(C.bJY,A.A(A.a([w,B.aa,u,B.aY,A.c("tap one",s,s,s,s,s,s,A.l(s,s,v?C.dN:C.dO,s,s,s,s,s,s,s,s,11,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],t),B.l,s,B.e,B.h,0,s,s),s),new A.a5(s,128,A.hN(B.f,s,new D.eFd(this,f,g,h,d),f.length,s,s,B.aL,new D.eFe(),!1),s),B.au],t),B.B,s,B.e,B.h,0,B.p),s)},
bL1(d,e,f){var x,w,v,u,t,s,r=this,q=null,p=D.bEA(e),o=p.length
if(o<2)return r.a0L(d,new A.a5(q,120,A.as(A.c("The chart appears after the first reading.",q,q,q,q,q,q,A.l(q,q,d.a?C.dN:C.dO,q,q,q,q,q,q,q,q,q,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),q,q,q),q))
x=B.d.fC(p,Math.max(0,o-r.y))
w=f==null?q:D.hl(f.h(0,"entryPrice"))
o=y.p
v=A.a([],o)
for(u=0;u<3;++u){t=C.cnz[u]
if(t<=12)s="1H"
else s=t<=24?"2H":"4H"
B.d.u(v,A.a([r.czF(d,s,r.y===t,new D.eF5(r,t)),B.bk],o))}v.push(B.aY)
v.push(r.b8B(d,"Trend lines",r.Q,new D.eF6(r),F.xk))
v=A.a([A.A(v,B.l,q,B.e,B.h,0,q,q),B.S,new D.ady(x,d,w,r.Q,D.hl(J.t(e,"price")),q)],o)
if(r.Q){s=A.a([r.ayh(d,B.bA,"Fast line (45 min)"),r.ayh(d,B.b2,"Slow line (1 h 45 min)")],o)
if(w!=null)s.push(r.ayh(d,E.wy,"Your pretend buy"))
B.d.u(v,A.a([B.P,A.bZ(B.fQ,s,B.br,q,4,14)],o))}return r.aAr(d,A.x(v,B.l,q,B.e,B.h,0,B.p),B.wT)},
cJj(d,a0,a1,a2){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i=J.a6(a0),h=D.jl(i.h(a0,"chart")).h(0,"trend"),g=J.k(h==null?"unknown":h),f=D.jl(J.t(a2,"state")),e=J.z(f.h(0,"enabled"),!0)&&!J.z(f.h(0,"brakePaused"),!0)
switch(g){case"up":h=C.fbG
break
case"down":h=C.fcH
break
case"flat":h=C.f9R
break
default:h=C.faI
break}x=h.a
w=j
v=j
u=h.b
t=h.c
v=t
w=u
s=x
h=i.h(a0,"asset")
r=J.k(h==null?"":h)
q=!B.a.q(r,"/")&&J.z(i.h(a0,"open"),!1)
if(!e)p="Agent is stopped. Press Start to let it watch all markets."
else{i=a1!=null
if(i&&J.z(a1.h(0,"symbol"),r))p="Holding a pretend trade here. It sells at the target, the stop, or when the trend turns down."
else{if(i)i="Holding "+A.v(a1.h(0,"symbol"))+" right now. One trade at a time, so no buy here until that one is sold."
else if(q)i="The stock market is closed, so "+r+" waits. The agent keeps watching the crypto markets."
else if(g==="up")i="The turn up already happened. It waits for the next fresh turn up so it never buys late."
else i=g==="down"?"Prices are falling, so it waits. It buys only when the fast line crosses above the slow line.":"It buys only when the fast line crosses above the slow line."
p=i}}i=A.m(22)
h=d.a
o=A.a([s.j(h?0.16:0.22),s.j(0.04)],y.O)
n=A.K(s.j(0.35),B.r,1)
m=A.m(14)
m=A.o(j,A.W(w,B.c,j,j,j,j),B.f,j,j,new A.n(s,j,j,m,j,j,B.m),j,44,j,j,j,j,j,44)
l=A.c(v,j,j,j,j,j,j,A.l(j,j,h?C.ed:B.c,j,j,j,j,j,j,j,j,16,j,j,B.u,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)
k=y.p
return A.o(j,A.A(A.a([m,B.bb,A.E(A.x(A.a([l,B.bC,A.c(p,j,j,j,j,j,j,A.l(j,j,h?C.dN:C.dO,j,j,j,j,j,j,j,j,12.5,j,j,j,j,1.3,!0,j,j,j,j,j,j,j,j),j,j,j)],k),B.B,j,B.e,B.h,0,B.p),1)],k),B.l,j,B.e,B.h,0,j,j),B.f,j,j,new A.n(j,j,n,i,j,new A.a7(B.a5,B.a9,B.x,o,j,j),B.m),j,j,j,B.eb,B.bH,j,j,j)},
P2(d,e,f){var x=null,w=B.c.j(0.1),v=A.m(14)
return A.o(x,A.x(A.a([A.c(d,x,1,B.a2,x,x,x,B.X0,x,x,x),B.bC,new A.dk(B.dv,B.a5,B.f,A.c(e,x,x,x,x,x,x,A.l(x,x,f,x,x,x,x,x,x,x,x,15,x,x,B.F,x,x,!0,x,x,x,x,x,x,x,x),x,x,x),x)],y.p),B.B,x,B.e,B.h,0,B.p),B.f,x,x,new A.n(w,x,x,v,x,x,B.m),x,x,x,x,B.ang,x,x,x)},
crd(a1,a2,a3){var x,w,v,u,t,s,r,q,p,o=this,n=null,m=D.hl(a2.h(0,"entryPrice")),l=D.hl(a2.h(0,"qty")),k=J.a6(a3),j=J.z(a2.h(0,"symbol"),k.h(a3,"asset"))?D.hl(k.h(a3,"price")):m,i=l*j,h=i-50,g=m===0?0:(j-m)/m*100,f=h>=0,e=m*0.985,d=m*1.03,a0=B.i.D((j-e)/(d-e),0,1)
k=a1.a
x=y.p
w=A.A(A.a([A.c("Your pretend position",n,n,n,n,n,n,A.l(n,n,k?C.ed:B.c,n,n,n,n,n,n,n,n,16,n,n,B.F,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),B.aY,o.a0M("OPEN",C.eB)],x),B.l,n,B.e,B.h,0,n,n)
v=D.il(h,!0,!0)
v=A.c(v,n,n,n,n,n,n,A.l(n,n,f?C.eB:C.fs,n,n,n,n,n,n,n,n,34,n,n,B.F,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
u=g>=0?"+":""
t=B.i.ab(g,2)
v=A.A(A.a([v,B.aa,new A.D(B.eJ,A.c(u+t+"%",n,n,n,n,n,n,A.l(n,n,f?C.eB:C.fs,n,n,n,n,n,n,n,n,n,n,n,B.F,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),n)],x),B.dG,n,B.e,B.h,0,n,n)
u=f?"You would be winning right now":"You would be losing right now"
u=A.c(u,n,n,n,n,n,n,A.l(n,n,k?C.dN:C.dO,n,n,n,n,n,n,n,n,12.5,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
t=A.E(o.aAt(a1,"You put in",D.il(50,!0,!1)),1)
s=D.il(i,!0,!1)
t=A.A(A.a([t,B.aa,A.E(o.b30(a1,"Worth now",s,f?C.eB:C.fs),1)],x),B.l,n,B.e,B.h,0,n,n)
s=A.E(o.aAt(a1,"Bought at",D.il(m,!0,!1)),1)
s=A.A(A.a([s,B.aa,A.E(o.aAt(a1,"Shares",B.i.ab(l,l<0.01?6:4)+" "+A.v(a2.h(0,"symbol"))),1)],x),B.l,n,B.e,B.h,0,n,n)
r=A.ce(new D.eFg(a1,a0))
q=A.A(A.a([A.E(A.c("Stop loss\n"+D.il(e,!0,!1)+" \xb7 -$0.75",n,n,n,n,n,n,C.fI4,n,n,n),1),A.E(A.c("Take profit\n"+D.il(d,!0,!1)+" \xb7 +$1.50",n,n,n,n,n,n,C.fGF,B.e3,n,n),1)],x),B.l,n,B.e,B.h,0,n,n)
p=D.iex(a2.h(0,"entryAt"))
return o.a0L(a1,A.x(A.a([w,B.af,v,u,B.aA,t,B.P,s,B.aO,r,B.al,q,B.al,A.c("Bought "+p,n,n,n,n,n,n,A.l(n,n,k?C.dN:C.dO,n,n,n,n,n,n,n,n,11.5,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],x),B.B,n,B.e,B.h,0,B.p))},
aEr(d,e,f,g,h,i){var x,w,v=null,u=d.a,t=u?C.a0a:C.a0c,s=A.m(16),r=A.c(e,v,v,v,v,v,v,A.l(v,v,u?C.dN:C.dO,v,v,v,v,v,v,v,v,11.5,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
if(h==null)x=u?C.ed:B.c
else x=h
w=y.p
w=A.a([A.E(A.x(A.a([r,B.bC,A.c(f,v,v,v,v,v,v,A.l(v,v,x,v,v,v,v,v,v,v,v,g?24:17,v,v,B.F,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],w),B.B,v,B.e,B.h,0,B.p),1)],w)
if(i!=null)w.push(A.c(i,v,v,v,v,v,v,A.l(v,v,u?C.dN:C.dO,v,v,v,v,v,v,v,v,11.5,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v))
return A.o(v,A.A(w,B.l,v,B.e,B.h,0,v,v),B.f,v,v,new A.n(t,v,v,s,v,v,B.m),v,v,v,B.jg,B.eW,v,v,v)},
cHC(d,e,f,g,h){return this.aEr(d,e,f,g,null,h)},
bbW(d,e,f,g,h){return this.aEr(d,e,f,!1,g,h)},
cHB(d,e,f,g){return this.aEr(d,e,f,!1,null,g)},
cfX(d,e){var x,w,v,u=this,t=null,s=J.z(e.h(0,"enabled"),!0)&&!J.z(e.h(0,"brakePaused"),!0),r=s?C.fs:C.eB
r=A.bn(r,t,t,t,t,t,t,t,new A.b9(A.m(999),B.a1),t,t,t)
x=u.r?t:new D.eF7(u,s)
w=A.W(s?B.xl:B.hc,t,t,t,t,t)
r=A.E(new A.a5(t,52,A.d8(w,t,A.c(s?"Stop agent":"Start agent",t,t,t,t,t,t,B.nq,t,t,t),x,r),t),3)
x=d.a
w=x?C.ed:B.c
v=x?C.wC:C.wA
x=x?B.c.j(0.92):C.mV
v=A.dg(t,t,x,t,t,t,t,t,t,w,t,t,t,t,new A.b9(A.m(999),B.a1),new A.av(v,1.5,B.r,-1),t,t,t,t)
x=u.r
w=x?t:u.gcyF()
return new A.D(B.eb,A.A(A.a([r,B.ar,A.E(new A.a5(t,52,A.em(x?B.L8:C.c4G,t,C.h_m,w,v),t),2)],y.p),B.l,t,B.e,B.h,0,t,t),t)},
cJ_(a7,a8){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=null,a5="outValue",a6=y.g.a(J.t(a8,"trades"))
if(a6==null)a6=B.ck
x=y.f
a6=J.d4(a6,x)
a6=A.cF(a6,new D.eFu(),a6.$ti.k("M.E"),y.P)
w=A.B(a6,A.a4(a6).k("M.E"))
a6=a7.a
v=y.p
u=A.a([A.c("Pretend trades",a4,a4,a4,a4,a4,a4,A.l(a4,a4,a6?C.ed:B.c,a4,a4,a4,a4,a4,a4,a4,a4,16,a4,a4,B.F,a4,a4,!0,a4,a4,a4,a4,a4,a4,a4,a4),a4,a4,a4),B.P],v)
if(w.length===0){t=A.W(B.fY,a6?C.dN:C.dO,a4,a4,a4,a4)
u.push(new A.D(B.cm,A.A(A.a([t,B.ar,A.E(A.c("No trades yet. Each buy shows the $50 put in, and each sell shows what came back and the win or loss.",a4,a4,a4,a4,a4,a4,A.l(a4,a4,a6?C.dN:C.dO,a4,a4,a4,a4,a4,a4,a4,a4,12.5,a4,a4,a4,a4,1.3,!0,a4,a4,a4,a4,a4,a4,a4,a4),a4,a4,a4),1)],v),B.l,a4,B.e,B.h,0,a4,a4),a4))}for(t=w.length,s=y.N,r=y.z,q=0;q<w.length;w.length===t||(0,A.I)(w),++q){p=w[q]
o=J.a6(p)
n=J.z(o.h(p,"decision"),"would buy")
m=o.h(p,"details")
l=x.b(m)?A.a1(m,s,r):A.S(s,r)
m=o.h(p,"asset")
k=J.k(m==null?"":m)
if(l.h(0,"amount")==null)j=50
else{m=l.h(0,"amount")
if(typeof m=="number")j=m
else{m=A.cA(A.v(m==null?"":m))
if(m==null)m=0
j=m}}i=l.h(0,"qty")
if(!(typeof i=="number")){m=A.cA(A.v(i==null?"":i))
i=m==null?0:m}h=l.h(0,"pnl")
if(!(typeof h=="number")){m=A.cA(A.v(h==null?"":h))
h=m==null?0:m}g=h>=0
if(n)f=B.cd
else f=g?C.eB:C.fs
m=a6?C.wC:C.wA
e=f.j(0.14)
d=new A.aP(13,13)
e=A.o(a4,A.W(n?B.vq:B.tA,f,a4,a4,a4,20),B.f,a4,a4,new A.n(e,a4,a4,new A.bc(d,d,d,d),a4,a4,B.m),a4,40,a4,a4,a4,a4,a4,40)
d=n?"Bought":"Sold"
a0=a6?C.ed:B.c
d=A.c(d+" "+k,a4,a4,a4,a4,a4,a4,new A.F(!0,a0,a4,a4,a4,a4,14,B.F,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4),a4,a4,a4)
if(n){if(i===0)a0=""
else a0=B.i.ab(i,i<0.01?6:4)+" at "
a1=o.h(p,"price")
if(!(typeof a1=="number")){a1=A.cA(A.v(a1==null?"":a1))
if(a1==null)a1=0}a1=a0+D.il(a1,!0,!1)
a0=a1}else{a0=o.h(p,"price")
if(!(typeof a0=="number")){a0=A.cA(A.v(a0==null?"":a0))
if(a0==null)a0=0}a0=D.il(a0,!0,!1)
a1=o.h(p,"reason")
a1=J.k(a1==null?"":a1)
a2=B.a.cd(a1,"(")
a0="at "+a0+" \xb7 "+B.a.i(a2>0?B.a.az(a1,0,a2):a1)}a1=a6?C.dN:C.dO
a0=A.c(a0,a4,1,B.a2,a4,a4,a4,new A.F(!0,a1,a4,a4,a4,a4,11.5,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4),a4,a4,a4)
o=o.h(p,"et_time")
o=J.k(o==null?"":o)
a1=a6?C.dN:C.dO
o=A.x(A.a([d,B.bC,a0,A.c(o,a4,a4,a4,a4,a4,a4,new A.F(!0,a1,a4,a4,a4,a4,10.5,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4),a4,a4,a4)],v),B.B,a4,B.e,B.h,0,B.p)
if(n)d="-"+D.il(j,!0,!1)
else{if(l.h(0,a5)==null)d=j+h
else{d=l.h(0,a5)
if(!(typeof d=="number")){d=A.cA(A.v(d==null?"":d))
if(d==null)d=0}}d="+"+D.il(d,!0,!1)}a0=a6?C.ed:B.c
d=A.a([A.c(d,a4,a4,a4,a4,a4,a4,new A.F(!0,a0,a4,a4,a4,a4,14,B.F,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4),a4,a4,a4)],v)
if(!n){a0=D.il(h,!0,!0)
if(l.h(0,"pct")==null)a1=""
else{a1=l.h(0,"pct")
if(!(typeof a1=="number")){a1=A.cA(A.v(a1==null?"":a1))
if(a1==null)a1=0}a1=a1>=0?"+":""
a3=l.h(0,"pct")
if(!(typeof a3=="number")){a3=A.cA(A.v(a3==null?"":a3))
if(a3==null)a3=0}a3=" ("+a1+B.i.ab(a3,2)+"%)"
a1=a3}a3=g?C.eB:C.fs
d.push(A.c(a0+a1,a4,a4,a4,a4,a4,a4,new A.F(!0,a3,a4,a4,a4,a4,12,B.F,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4),a4,a4,a4))}if(n){a0=a6?C.dN:C.dO
d.push(A.c("put in",a4,a4,a4,a4,a4,a4,new A.F(!0,a0,a4,a4,a4,a4,11,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4),a4,a4,a4))}u.push(A.o(a4,new A.c3(B.aL,B.e,B.h,B.l,a4,B.p,a4,0,A.a([e,B.bb,new A.bx(1,B.ba,o,a4),B.aa,A.x(d,B.dG,a4,B.e,B.h,0,B.p)],v),a4),B.f,a4,a4,new A.n(a4,a4,new A.bE(B.a1,B.a1,new A.av(m,1,B.r,-1),B.a1),a4,a4,a4,B.m),a4,a4,a4,a4,B.jQ,a4,a4,a4))}return this.a0L(a7,A.x(u,B.B,a4,B.e,B.h,0,B.p))},
bEF(d){var x,w,v,u=this,t=null,s=u.x,r=u.e
r=s?r:A.cU(r,0,A.dy(8,"count",y.S),A.T(r).c).dq(0)
s=d.a
x=A.c("Agent activity",t,t,t,t,t,t,A.l(t,t,s?C.ed:B.c,t,t,t,t,t,t,t,t,16,t,t,B.F,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)
w=y.p
w=A.a([A.A(A.a([x,B.aY,A.c("newest first",t,t,t,t,t,t,A.l(t,t,s?C.dN:C.dO,t,t,t,t,t,t,t,t,11,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],w),B.l,t,B.e,B.h,0,t,t),B.al],w)
if(u.e.length===0)w.push(new A.D(B.fa,A.c("Nothing yet. A new line appears with every 15-minute check.",t,t,t,t,t,t,A.l(t,t,s?C.dN:C.dO,t,t,t,t,t,t,t,t,12.5,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),t))
for(s=r.length,v=0;v<r.length;r.length===s||(0,A.I)(r),++v)w.push(u.c71(d,r[v]))
if(u.e.length>8){if(u.x)s=u.w?"Show older":"That is everything"
else s="Show all"
w.push(A.as(A.bO(!1,A.c(s,t,t,t,t,t,t,t,t,t,t),t,t,!0,t,t,t,new D.eEZ(u),t,t),t,t,t))}return u.a0L(d,A.x(w,B.B,t,B.e,B.h,0,B.p))},
c71(d,e){var x,w,v,u,t,s=null,r="price",q=J.a6(e),p=q.h(e,"decision"),o=J.k(p==null?"":p)
A:{if("would buy"===o){p=C.eB
break A}if("would sell"===o){p=B.bA
break A}if("hold"===o){p=B.b2
break A}if("day start"===o||"day end"===o){p=B.cd
break A}if("start"===o){p=C.eB
break A}if("stop"===o){p=C.fs
break A}if(J.z(q.h(e,"kind"),"error"))p=C.fs
else p=d.a?C.dN:C.dO
break A}x=q.h(e,"fast_ma")!=null&&q.h(e,"slow_ma")!=null
w=A.o(s,s,B.f,s,s,new A.n(p,s,s,s,s,s,B.a6),s,8,s,B.a1u,s,s,s,8)
v=o==="hold"?"Still holding":D.hCF(o)
u=y.p
p=A.a([A.c(v,s,s,s,s,s,s,A.l(s,s,p,s,s,s,s,s,s,s,s,12.5,s,s,B.F,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],u)
if(J.z(D.jl(q.h(e,"details")).h(0,"by"),"cron"))B.d.u(p,A.a([B.bk,A.c("automatic",s,s,s,s,s,s,A.l(s,s,d.a?C.dN:C.dO,s,s,s,s,s,s,s,s,10,s,s,B.O,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],u))
p.push(B.aY)
v=q.h(e,"et_time")
v=D.il_(J.k(v==null?"":v))
t=d.a
p.push(A.c(v,s,s,s,s,s,s,A.l(s,s,t?C.dN:C.dO,s,s,s,s,s,s,s,s,10.5,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s))
p=A.A(p,B.l,s,B.e,B.h,0,s,s)
v=q.h(e,"reason")
v=D.hCF(J.k(v==null?"":v))
p=A.a([p,A.c(v,s,s,s,s,s,s,A.l(s,s,t?C.ed:B.c,s,s,s,s,s,s,s,s,12.5,s,s,s,s,1.3,!0,s,s,s,s,s,s,s,s),s,s,s)],u)
if(q.h(e,r)!=null||x){v=A.a([],y.s)
if(q.h(e,"asset")!=null&&q.h(e,r)!=null)v.push(A.v(q.h(e,"asset"))+" "+D.il(D.hl(q.h(e,r)),!0,!1))
if(x)v.push("fast "+B.i.ab(D.hl(q.h(e,"fast_ma")),2)+" \xb7 slow "+B.i.ab(D.hl(q.h(e,"slow_ma")),2))
q=B.d.aM(v,"  \xb7  ")
p.push(A.c(q,s,s,s,s,s,s,A.l(s,s,t?C.dN:C.dO,s,s,s,s,s,s,s,s,10.5,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s))}return new A.D(B.Hv,A.A(A.a([w,B.ar,A.E(A.x(p,B.B,s,B.e,B.h,0,B.p),1)],u),B.B,s,B.e,B.h,0,s,s),s)},
cxC(d,e){var x,w,v,u,t,s,r,q,p,o,n,m=null,l=this.c
l.toString
l=A.O(l).bga(B.L)
x=d.a
w=x?C.ed:B.c
v=x?C.dN:C.dO
u=A.W(C.bVo,B.b2,m,m,m,m)
t=y.p
s=A.A(A.a([new A.d6(1,B.cg,A.c("The rules it follows",m,m,m,m,m,m,A.l(m,m,x?C.ed:B.c,m,m,m,m,m,m,m,m,14.5,m,m,B.F,m,m,!0,m,m,m,m,m,m,m,m),m,m,m),m),B.aa,A.ay(m,A.o(m,C.flo,B.f,m,m,new A.n(m,m,m,A.m(999),m,B.tJ,B.m),m,m,m,m,B.hj,m,m,m),B.y,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,this.gclg(),m,m,m,m,m,m,!1,B.a4)],t),B.l,m,B.e,B.h,0,m,m)
r=A.c("Read-only, set in the code",m,m,m,m,m,m,A.l(m,m,x?C.dN:C.dO,m,m,m,m,m,m,m,m,11.5,m,m,m,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)
q=A.a([],t)
p=y.g.a(J.t(e,"rules"))
p=J.aT(p==null?B.ck:p)
while(p.C()){o=J.k(p.gP(p))
n=x?C.ed:B.c
q.push(new A.D(C.bE5,new A.c3(B.aL,B.e,B.h,B.B,m,B.p,m,0,A.a([C.eAi,B.aa,new A.bx(1,B.ba,A.c(o,m,m,m,m,m,m,new A.F(!0,n,m,m,m,m,12.5,m,m,m,m,m,1.35,m,m,m,m,m,m,m,m,m,m,m,m,m),m,m,m),m)],t),m),m))}return this.aAr(d,new A.p_(l,A.aF(!1,B.a3,!0,m,M.hrH(m,q,G.anM,m,v,w,!1,u,m,r,B.ha,s),B.f,m,0,m,m,m,m,m,B.ic),m),B.ag)},
aAr(d,e,f){var x=null,w=d.a,v=w?B.c.j(0.92):C.mV,u=A.m(24)
return A.o(x,e,B.f,x,x,new A.n(v,x,A.K(w?B.c:C.uO,B.r,1),u,A.a([new A.ab(0,B.H,d.ga9x(),B.dm,24)],y.V),x,B.m),x,x,x,B.eb,f,x,x,x)},
a0L(d,e){return this.aAr(d,e,B.bR)},
aaz(d,e,f){var x=null,w=f.j(0.12),v=A.m(16),u=A.K(f.j(0.45),B.r,1),t=A.W(B.a4j,f,x,x,x,20)
return A.o(x,A.A(A.a([t,B.ar,A.E(A.c(e,x,x,x,x,x,x,A.l(x,x,d.a?C.ed:B.c,x,x,x,x,x,x,x,x,12.5,x,x,x,x,1.35,!0,x,x,x,x,x,x,x,x),x,x,x),1)],y.p),B.l,x,B.e,B.h,0,x,x),B.f,x,x,new A.n(w,x,u,v,x,x,B.m),x,x,x,B.eb,B.bl,x,x,x)},
b2Z(d,e,f){var x=null,w=d.a,v=w?B.c.j(0.92):C.mV,u=A.K(w?B.c:C.uO,B.r,1)
return A.aF(!1,B.a3,!0,x,A.aM(!1,x,!0,A.o(x,A.W(e,w?C.ed:B.c,x,x,x,18),B.f,x,x,new A.n(x,x,u,x,x,x,B.a6),x,40,x,x,x,x,x,40),B.cK,!0,x,x,x,x,x,x,x,x,x,x,x,f,x,x,x,x,x,x,x),B.f,v,0,x,x,B.cK,x,x,B.ai)},
b8B(d,e,f,g,h){var x,w,v,u,t,s,r,q=null
if(f){x=d.a
w=x?C.lO:B.c
v=w
w=x
x=v}else{x=d.a
w=x?C.NV:C.NM
v=w
w=x
x=v}u=A.m(999)
t=y.p
s=A.a([],t)
if(h!=null){if(f)r=w?B.c:C.lO
else r=w?C.dN:C.dO
B.d.u(s,A.a([A.W(h,r,q,q,q,14),B.db],t))}if(f)w=w?B.c:C.lO
else w=w?C.dN:C.dO
s.push(A.c(e,q,q,q,q,q,q,A.l(q,q,w,q,q,q,q,q,q,q,q,11.5,q,q,B.O,q,q,!0,q,q,q,q,q,q,q,q),q,q,q))
return A.ay(q,A.cT(q,A.A(s,B.l,q,B.e,B.M,0,q,q),q,q,B.b_,new A.n(x,q,q,u,q,q,B.m),B.eI,q,q,q,q,I.a1z,q,q,q),B.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,g,q,q,q,q,q,q,!1,B.a4)},
czF(d,e,f,g){return this.b8B(d,e,f,g,null)},
ayh(d,e,f){var x=null,w=A.o(x,x,B.f,x,x,new A.n(e,x,x,A.m(2),x,x,B.m),x,3,x,x,x,x,x,14)
return A.A(A.a([w,B.e5,A.c(f,x,x,x,x,x,x,A.l(x,x,d.a?C.dN:C.dO,x,x,x,x,x,x,x,x,11,x,x,x,x,x,!0,x,x,x,x,x,x,x,x),x,x,x)],y.p),B.l,x,B.e,B.M,0,x,x)},
a0M(d,e){var x=null,w=e.j(0.14),v=A.m(999)
return A.o(x,A.c(d,x,x,x,x,x,x,A.l(x,x,e,x,x,x,x,x,x,x,x,10,x,x,B.u,x,x,!0,x,0.6,x,x,x,x,x,x),x,x,x),B.f,x,x,new A.n(w,x,x,v,x,x,B.m),x,x,x,x,B.fC,x,x,x)},
b30(d,e,f,g){var x=null,w=d.a,v=w?C.a0a:C.a0c,u=A.m(16),t=A.c(e,x,x,x,x,x,x,A.l(x,x,w?C.dN:C.dO,x,x,x,x,x,x,x,x,11.5,x,x,x,x,x,!0,x,x,x,x,x,x,x,x),x,x,x)
if(g==null)w=w?C.ed:B.c
else w=g
return A.o(x,A.x(A.a([t,B.cT,new A.dk(B.dv,B.a5,B.f,A.c(f,x,x,x,x,x,x,A.l(x,x,w,x,x,x,x,x,x,x,x,16,x,x,B.F,x,x,!0,x,x,x,x,x,x,x,x),x,x,x),x)],y.p),B.B,x,B.e,B.h,0,B.p),B.f,x,x,new A.n(v,x,x,u,x,x,B.m),x,x,x,x,B.bl,x,x,x)},
aAt(d,e,f){return this.b30(d,e,f,null)},
cLZ(d){var x=A.v(d==null?"":d),w=A.bh(x.length>=19?B.a.az(x,0,19):"")
if(w==null)return""
return" \xb7 opens "+B.T6[A.lE(w)-1]+" "+D.aQy(w)+" ET"}}
D.ady.prototype={
S(){return new D.be1()}}
D.be1.prototype={
aAs(d,e){var x=this,w=x.a.c.length,v=B.o.D(B.i.be(d.a/e*w),0,w-1)
if(v!==x.d)x.l(new D.cWn(x,v))},
B(d){return A.ce(new D.cWw(this))}}
D.be2.prototype={
a2(c9,d0){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2=this,c3=null,c4={},c5=d0.b,c6=c5-18,c7=y.n,c8=A.a([],c7)
for(x=c2.c,w=x.length,v=0;u=x.length,v<u;x.length===w||(0,A.I)(x),++v){t=x[v]
u=J.a6(t)
s=u.h(t,"h")
if(!(typeof s=="number")){s=A.cA(A.v(s==null?"":s))
if(s==null)s=0}u=u.h(t,"l")
if(!(typeof u=="number")){u=A.cA(A.v(u==null?"":u))
if(u==null)u=0}B.d.u(c8,A.a([s,u],c7))}w=c2.f
if(w)for(v=0;v<x.length;x.length===u||(0,A.I)(x),++v){t=x[v]
s=A.a([],c7)
r=J.a6(t)
if(r.h(t,"f")!=null){q=r.h(t,"f")
if(!(typeof q=="number")){q=A.cA(A.v(q==null?"":q))
if(q==null)q=0}s.push(q)}if(r.h(t,"s")!=null){r=r.h(t,"s")
if(!(typeof r=="number")){r=A.cA(A.v(r==null?"":r))
if(r==null)r=0}s.push(r)}B.d.u(c8,s)}c7=c2.e
u=c7!=null
if(u)c8.push(c7)
s=c2.r
r=s>0
if(r)c8.push(s)
c4.a=B.d.eD(c8,B.pp)
p=c4.b=B.d.eD(c8,B.oq)
c8=c4.a
if(p-c8<1e-9){q=c4.b=p+1
c8=c4.a=c8-1
o=q
q=c8
c8=o}else{q=c8
c8=p}n=(c8-q)*0.1
c4.a=q-n
c4.b=c8+n
m=x.length
c8=d0.a
l=c8/m
k=new D.cWx(l)
j=new D.cWz(c4,c6)
$.R()
i=A.L()
q=c2.d.a
i.r=(q?C.wC:C.wA).j(0.7).gp(0)
i.c=1
for(h=1;h<=3;++h){g=c6*h/4
for(f=0;f<c8;f+=6)c9.ah(new A.r(f,g),new A.r(f+2,g),i)}if(w){w=new D.cWy(c2,m,k,j,c9)
w.$2("s",B.b2)
w.$2("f",B.bA)}for(w=Math.max(2,l*0.62)/2,e=c2.w,d=e!=null,h=0;h<m;++h){t=x[h]
a0=J.a6(t)
a1=a0.h(t,"o")
if(!(typeof a1=="number")){a2=A.cA(A.v(a1==null?"":a1))
a1=a2==null?0:a2}a3=a0.h(t,"c")
if(!(typeof a3=="number")){a2=A.cA(A.v(a3==null?"":a3))
a3=a2==null?0:a2}a4=a0.h(t,"h")
if(!(typeof a4=="number")){a2=A.cA(A.v(a4==null?"":a4))
a4=a2==null?0:a2}a5=a0.h(t,"l")
if(!(typeof a5=="number")){a0=A.cA(A.v(a5==null?"":a5))
a5=a0==null?0:a0}a6=a3>=a1?C.eB:B.n4
a7=d&&e!==h
$.R()
a8=new A.ar(B.T,B.Q,B.V,B.W,B.U)
a8.r=(a7?a6.j(0.45):a6).gp(0)
a0=k.$1(h)
a2=j.$1(a4)
a9=k.$1(h)
b0=j.$1(a5)
a8.c=1.4
c9.ah(new A.r(a0,a2),new A.r(a9,b0),a8)
b1=j.$1(Math.max(a1,a3))
b2=j.$1(Math.min(a1,a3))
b0=A.bu(new A.a2(k.$1(h)-w,b1,k.$1(h)+w,Math.max(b2,b1+1.5)),B.hB)
a8.b=B.Q
c9.aq(b0,a8)}if(u)c2.aUa(c9,j.$1(c7),c8,E.wy,"Buy "+D.il(c7,!0,!1),!0)
if(r){c7=j.$1(s)
c2.bOQ(c9,c7,c8,(q?C.ed:B.c).j(0.55),D.il(s,!0,!1))}b3=A.fs(c3,B.cw,c3,c3,c3,c3,B.a7,B.bW,c3,B.dD,B.bX)
for(c7=[0,m/3|0,B.o.ar(2*m,3),m-1],w=c7.length,c5-=13,u=c2.b,v=0;v<w;++v){h=c7[v]
s=J.t(x[h],"t")
b4=A.bh(A.v(s==null?"":s))
if(b4==null)continue
s=D.aQy(D.bF2(b4))
r=q?C.dN:C.dO
b3.sb2(0,new A.es(s,c3,c3,B.cN,c3,c3,c3,c3,c3,c3,new A.F(!0,r,c3,u,c3,c3,10,c3,c3,c3,c3,c3,c3,c3,c3,c3,c3,c3,c3,c3,c3,c3,c3,c3,c3,c3)))
b3.e5()
s=k.$1(h)
r=b3.b.c
b3.a2(c9,new A.r(B.i.D(s-r/2,0,c8-r),c5))}if(d&&e<m){t=x[e]
f=k.$1(e)
c5=J.a6(t)
b5=j.$1(D.hl(c5.h(t,"c")))
$.R()
b6=A.L()
b6.r=(q?C.ed:B.c).j(0.5).gp(0)
b6.c=1
for(b7=0;b7<c6;b7+=6)c9.ah(new A.r(f,b7),new A.r(f,b7+3),b6)
$.R()
c7=A.L()
c7.r=(q?B.c.j(0.92):C.mV).gp(0)
c9.O(new A.r(f,b5),6,c7)
c7=A.L()
c7.r=(q?C.ed:B.c).gp(0)
c7.b=B.ab
c7.c=2.5
c9.O(new A.r(f,b5),6,c7)
c7=c5.h(t,"t")
b4=A.bh(A.v(c7==null?"":c7))
c7=b4==null?"":D.aQy(D.bF2(b4))+" ET\n"
c5=D.il(D.hl(c5.h(t,"c")),!0,!1)
b3.sb2(0,A.cR(c3,c3,c3,c3,c3,c3,c3,c3,c3,A.l(c3,c3,q?B.c:C.lO,c3,c3,c3,c3,c3,u,c3,c3,11.5,c3,c3,B.F,c3,1.3,!0,c3,c3,c3,c3,c3,c3,c3,c3),c7+c5))
b3.sD8(0,B.K)
b3.e5()
c5=b3.b
b8=c5.c+18
c5=c5.a.c
b9=c5.gb9(c5)+10
c0=B.i.D(f-b8/2,0,c8-b8)
c1=Math.max(0,b5-b9-14)
c8=A.bu(new A.a2(c0,c1,c0+b8,c1+b9),B.hQ)
c5=A.L()
c5.r=(q?C.lO:B.c).gp(0)
c9.aq(c8,c5)
b3.a2(c9,new A.r(c0+9,c1+5))}},
aUa(d,e,f,g,h,i){var x,w,v,u,t,s,r,q,p,o,n=null
$.R()
x=A.L()
x.r=g.gp(0)
x.c=1.2
for(w=0;w<f;w+=7)d.ah(new A.r(w,e),new A.r(w+3.5,e),x)
v=A.fs(n,B.cw,n,n,n,A.cR(n,n,n,n,n,n,n,n,n,A.l(n,n,B.c,n,n,n,n,n,this.b,n,n,10,n,n,B.F,n,n,!0,n,n,n,n,n,n,n,n),h),B.a7,B.bW,n,B.dD,B.bX)
v.e5()
u=v.b
t=u.c+12
u=u.a.c
s=u.gb9(u)+6
r=i?0:f-t
u=e-s/2
q=A.bu(new A.a2(r,u,r+t,u+s),B.q4)
$.R()
p=A.L()
if(i)o=E.wy
else o=this.d.a?C.lO:B.c
p.r=o.gp(0)
d.aq(q,p)
v.a2(d,new A.r(r+6,u+3))},
bOQ(d,e,f,g,h){return this.aUa(d,e,f,g,h,!1)},
aD(d){var x=this
return d.c!==x.c||d.w!=x.w||d.f!==x.f||d.e!=x.e||d.r!==x.r||d.d.a!==x.d.a}}
D.bvU.prototype={
a2(d,e){var x,w,v,u,t,s,r,q,p,o,n=null,m=this.b
if(m.length<2)return
x=A.T(m).k("N<1,G>")
w=A.B(new A.N(m,new D.ffk(),x),x.k("ak.E"))
v=B.d.eD(w,B.pp)
u=B.d.eD(w,B.oq)-v
if(u<1e-9)u=1
m=$.R()
x=A.a([],y.v)
t=new A.aG(m.r,B.aj,n,n,x)
for(m=e.a,s=e.b,r=0;q=w.length,r<q;++r){q=r/(q-1)*m
p=s-(w[r]-v)/u*s
if(r===0){q=new A.aZ(q,p)
x.push(q)
p=t.f
if(p!=null)q.aj(p)
t.ac()}else{q=new A.aq(q,p)
x.push(q)
p=t.f
if(p!=null)q.aj(p)
t.ac()}}o=A.zI(t)
o.E(new A.aq(m,s))
o.E(new A.aq(0,s))
o.E(new A.by())
$.R()
x=A.L()
q=this.c
x.sam(new A.a7(B.aX,B.b1,B.x,A.a([q.j(0.25),q.j(0)],y.O),n,n).aA(0,new A.a2(0,0,0+m,0+s)))
d.af(o,x)
x=A.L()
x.r=q.gp(0)
x.b=B.ab
x.c=1.8
x.e=B.dM
d.af(t,x)
x=B.d.gal(w)
p=A.L()
p.r=q.gp(0)
d.O(new A.r(m,s-(x-v)/u*s),3,p)},
aD(d){return d.b!==this.b||!d.c.A(0,this.c)}}
D.yU.prototype={}
D.a1s.prototype={
ga9x(){return this.a?B.cd.j(0.08):B.v.j(0.35)}}
D.nk.prototype={}
D.uq.prototype={}
D.XA.prototype={
S(){var x=null,w=A.a([],y.h)
return new D.aH9(A.aQ(y.N),w,new A.at(B.ax,$.ax()),A.mt(0,x,x),x,x)}}
D.a_v.prototype={}
D.aH9.prototype={
gT7(){var x,w=this,v=w.d
if(v===$){w.a.toString
x=A.acm(null,0,3,w)
w.d!==$&&A.bF()
w.d=x
v=x}return v},
Z(){var x=this
x.a4()
x.e=x.a.c
x.f=new A.V(Date.now(),0,!1)
x.gT7().aV(0,new D.eG4(x))
if(!x.a.d){x.aef()
x.R9()
x.r=A.de(B.nR,new D.eG5(x))}},
t(){var x=this,w=x.r
if(w!=null)w.a1(0)
x.gT7().t()
w=x.y
w.V$=$.ax()
w.R$=0
x.z.t()
x.bBg()},
aef(){var x=0,w=A.j(y.H),v=1,u=[],t=this,s,r,q,p,o
var $async$aef=A.e(function(d,e){if(d===1){u.push(e)
x=v}for(;;)switch(x){case 0:v=3
x=6
return A.b(A.az(),$async$aef)
case 6:s=e
q=s.qI("ngmy_signal_grid_lessons_done")
r=q==null?B.Z:q
if(t.c!=null)t.l(new D.eFO(t,r))
v=1
x=5
break
case 3:v=2
o=u.pop()
x=5
break
case 2:x=1
break
case 5:return A.h(null,w)
case 1:return A.f(u.at(-1),w)}})
return A.i($async$aef,w)},
a_d(d){return this.c86(d)},
c86(d){var x=0,w=A.j(y.H),v=1,u=[],t=this,s,r,q,p
var $async$a_d=A.e(function(e,f){if(e===1){u.push(f)
x=v}for(;;)switch(x){case 0:t.l(new D.eFP(t,d))
v=3
x=6
return A.b(A.az(),$async$a_d)
case 6:s=f
r=t.w
r=A.B(r,A.a4(r).k("ci.E"))
x=7
return A.b(s.aF("StringList","ngmy_signal_grid_lessons_done",r),$async$a_d)
case 7:v=1
x=5
break
case 3:v=2
p=u.pop()
x=5
break
case 2:x=1
break
case 5:return A.h(null,w)
case 1:return A.f(u.at(-1),w)}})
return A.i($async$a_d,w)},
R9(){var x=0,w=A.j(y.H),v,u=this,t
var $async$R9=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(A.hg(A.J(["action","paStatus","live",!0],y.N,y.z),!1,!1,!1,!1,B.Hq),$async$R9)
case 3:t=e
if(u.c==null||t==null||!J.z(J.t(t,"ok"),!0)){x=1
break}u.l(new D.eFU(u,t))
case 1:return A.h(v,w)}})
return A.i($async$R9,w)},
gz6(){var x=this.e
return D.jl(D.jl(x==null?null:J.t(x,"state")).h(0,"snapshot"))},
gcDV(){var x=D.DE(this.gz6()),w=A.T(x).k("Y<1>"),v=A.B(new A.Y(x,new D.eG_(),w),w.k("M.E"))
if(v.length===0)return D.DE(this.gz6()).length===0?null:B.d.gH(D.DE(this.gz6()))
B.d.b_(v,new D.eG0())
return B.d.gH(v)},
c6t(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this,a3=null,a4=a2.e,a5=D.jl(a4==null?a3:J.t(a4,"state"))
a4=y.f
x=a4.b(a5.h(0,"shadow"))?D.jl(a5.h(0,"shadow")):a3
w=a2.e
v=D.jl(w==null?a3:J.t(w,"today"))
w=a2.e
u=D.jl(w==null?a3:J.t(w,"record"))
w=a2.e
w=w==null?a3:J.t(w,"nowEt")
w=A.v(w==null?"unknown":w)
t=J.z(a5.h(0,"enabled"),!0)?"running":"stopped"
s=J.z(a5.h(0,"brakePaused"),!0)?", paused by the 25 dollar brake":""
r=D.il(D.hl(a5.h(0,"totalPnl")),!0,!0)
q=D.il(D.hl(v.h(0,"day_pnl")),!0,!0)
p=u.h(0,"wins")
p=A.v(p==null?0:p)
o=u.h(0,"losses")
w="LIVE DATA from the NGMY paper trading agent (Eastern Time now: "+w+"):\n"+("Agent: "+t+s+". Pretend P/L all time "+r+", today "+q+", wins "+p+", losses "+A.v(o==null?0:o)+".\n")
if(x!=null){n=D.hl(J.t(B.d.dA(D.DE(a2.gz6()),new D.eFF(x),new D.eFG()),"price"))
m=D.hl(x.h(0,"entryPrice"))
t=A.v(x.h(0,"symbol"))
s=B.i.ab(m,2)
r=B.i.ab(n,2)
w+="Open pretend trade: "+t+", $50 bought at "+s+", now "+r+" ("+A.v(m===0?0:B.i.ab((n-m)/m*100,2))+"%). Take profit at "+B.i.ab(m*1.03,2)+", stop loss at "+B.i.ab(m*0.985,2)+".\n"}else w+="No open pretend trade.\n"
w+="Markets (5-minute candles; fast line = 9-candle average, slow = 21-candle average; strength 0 bearish to 100 bullish):\n"
for(t=D.DE(a2.gz6()),s=t.length,r=y.N,q=y.z,l=0;l<t.length;t.length===s||(0,A.I)(t),++l){k=t[l]
p=J.a6(k)
o=p.h(k,"reading")
j=a4.b(o)?A.a1(o,r,q):A.S(r,q)
o=A.v(p.h(k,"asset"))
i=A.v(p.h(k,"name"))
h=p.h(k,"price")
if(!(typeof h=="number")){h=A.cA(A.v(h==null?"":h))
if(h==null)h=0}h=B.i.ab(h,2)
g=p.h(k,"changePct")
if(!(typeof g=="number")){g=A.cA(A.v(g==null?"":g))
if(g==null)g=0}g=B.i.ab(g,2)
p=J.z(p.h(k,"open"),!0)?"open":"closed"
f=j.h(0,"bias")
f=A.v(f==null?"unknown":f)
e=j.h(0,"score")
if(!(typeof e=="number")){e=A.cA(A.v(e==null?"":e))
if(e==null)e=0}e=B.i.ab(e,0)
if(j.h(0,"rsi")==null)d="n/a"
else{d=j.h(0,"rsi")
if(!(typeof d=="number")){d=A.cA(A.v(d==null?"":d))
if(d==null)d=0}d=B.i.ab(d,0)}if(j.h(0,"mom1h")==null)a0="n/a"
else{a0=j.h(0,"mom1h")
if(!(typeof a0=="number")){a0=A.cA(A.v(a0==null?"":a0))
if(a0==null)a0=0}a0=B.i.ab(a0,2)+"%"}a1=j.h(0,"action")
w+="- "+o+" ("+i+"): price "+h+", 4h change "+g+"%, "+p+", "+f+", strength "+e+", RSI "+d+", last hour "+a0+", agent reading: "+A.v(a1==null?"n/a":a1)+".\n"}return w.charCodeAt(0)==0?w:w},
JV(d){return this.bHa(d)},
bHa(d){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o,n,m,l,k
var $async$JV=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:l={}
k=B.a.i(d)
if(k.length===0||u.Q){x=1
break}u.y.bN(0,B.ch)
u.l(new D.eFz(u,k))
u.b8k()
t=u.x
s=t.length
if(s>1){t=B.d.ds(t,Math.max(0,s-9),s-1)
r=new A.N(t,new D.eFA(),A.T(t).k("N<1,q>")).aM(0,"\n")}else r=""
t=u.e
t=t==null?null:J.t(t,"rules")
y.g.a(t)
if(t==null)t=B.ck
s=y.N
q=J.ba(t,new D.eFB(),s).aM(0,"\n")
t=u.c6t()
p=r.length===0?"":"\nCONVERSATION SO FAR:\n"+r+"\n"
l.a=null
x=u.a.d?3:5
break
case 3:l.a="Preview mode: the tutor answers here using the live readings."
x=4
break
case 5:x=6
return A.b(A.hg(A.J(["action","chat","prompt",'You are the NGMY Signal Grid trading tutor. You teach a complete beginner how trading works, using the live market data and the rules of the NGMY paper trading agent below.\nHow to answer:\n- Plain, friendly, simple English. Short sentences. No jargon without explaining it. Usually under 170 words.\n- When the question is about a market or "right now", use the LIVE DATA and quote the real numbers (price, trend, strength, RSI, last hour), then explain what they mean and what the agent\'s rules say.\n- Say clearly whether a market looks bullish, bearish or sideways and why, and what would need to happen for a buy or sell signal under the agent\'s rules.\n- This is practice with pretend (paper) money. You may explain what the rules signal, but never promise profit, never say a price will surely go up or down, and never tell the student to trade real or borrowed money. Remind them briefly when it fits that signals can fail and the stop loss keeps losses small.\n- No markdown headings or tables. You may use short lines starting with "- ".\n\nAGENT RULES:\n'+q+"\n\n"+t+"\n"+p+"\nStudent: "+k+"\nTutor:"],s,y.z),!1,!1,!1,!1,B.nR),$async$JV)
case 6:o=f
t=o==null
if(t)n=null
else{s=J.t(o,"text")
s=s==null?null:B.a.i(J.k(s))
n=s}if(n==null)n=""
if(n.length!==0){t=A.aL(n,"**","")
s=A.af("^#+\\s*",!0,!1,!0,!1)
m=A.aL(t,s,"")}else{t=t?null:J.t(o,"error")
m=J.k(t==null?"The tutor could not answer just now. Please try again.":t)}l.a=m
case 4:if(u.c==null){x=1
break}u.l(new D.eFC(l,u))
u.b8k()
case 1:return A.h(v,w)}})
return A.i($async$JV,w)},
b8k(){$.aU.x1$.push(new D.eFV(this))},
aQO(d){this.gT7().Gf(2)
this.JV(d)},
B(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=A.O(d).ax.a===B.dd,g=new D.a1s(h),f=h?C.yI:C.yG,e=h?C.yI:C.yG
e=A.a([e,h?C.a_w:C.a_m],y.O)
x=h?B.c.j(0.92):C.mV
w=A.K(h?B.c:C.uO,B.r,1)
x=A.aF(!1,B.a3,!0,i,A.aM(!1,i,!0,A.o(i,A.W(B.eG,h?C.ed:B.c,i,i,i,18),B.f,i,i,new A.n(i,i,w,i,i,i,B.a6),i,40,i,i,i,i,i,40),B.cK,!0,i,i,i,i,i,i,i,i,i,i,i,new D.eG1(d),i,i,i,i,i,i,i),B.f,x,0,i,i,B.cK,i,i,B.ai)
w=A.c("Trading Academy",i,i,i,i,i,i,A.l(i,i,h?C.ed:B.c,i,i,i,i,i,i,i,i,17,i,i,B.F,i,i,!0,i,i,i,i,i,i,i,i),i,i,i)
v=y.p
w=A.A(A.a([x,B.ar,A.E(A.x(A.a([w,A.c("Lessons, live signals and a tutor",i,i,i,i,i,i,A.l(i,i,h?C.dN:C.dO,i,i,i,i,i,i,i,i,11.5,i,i,i,i,i,!0,i,i,i,i,i,i,i,i),i,i,i)],v),B.B,i,B.e,B.h,0,B.p),1),A.o(i,C.fll,B.f,i,i,new A.n(C.eB.j(0.14),i,i,A.m(999),i,i,B.m),i,i,i,i,B.fW,i,i,i)],v),B.l,i,B.e,B.h,0,i,i)
x=h?C.NV:C.NM
u=A.m(999)
t=A.a([],v)
for(s=[C.fbs,C.f9J,C.faq],r=s.length,q=0;q<r;++q){p={}
o=s[q]
p.a=null
p.a=o.a
n=j.gT7().d===p.a
if(n)m=h?C.lO:B.c
else m=B.L
l=new A.aP(999,999)
if(n)k=h?B.c:C.lO
else k=h?C.dN:C.dO
k=A.W(o.c,k,i,i,i,15)
if(n)n=h?B.c:C.lO
else n=h?C.dN:C.dO
t.push(new A.bx(1,B.ba,A.ay(i,A.cT(i,new A.c3(B.aL,B.b9,B.h,B.l,i,B.p,i,0,A.a([k,B.e5,new A.d6(1,B.cg,A.c(o.b,i,i,B.a2,i,i,i,new A.F(!0,n,i,i,i,i,12.5,B.F,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i),i,i,i),i)],v),i),i,i,B.b_,new A.n(m,i,i,new A.bc(l,l,l,l),i,i,B.m),B.a3,i,i,i,i,B.wS,i,i,i),B.y,!1,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,new D.eG2(p,j),i,i,i,i,i,i,!1,B.a4),i))}h=A.o(i,A.A(t,B.l,i,B.e,B.h,0,i,i),B.f,i,i,new A.n(x,i,i,u,i,i,B.m),i,i,i,i,B.ey,i,i,i)
x=j.gT7()
return A.c5(i,f,A.o(i,A.bm(!0,A.x(A.a([new A.D(C.bFI,w,i),new A.D(B.ao4,h,i),A.E(A.bai(A.a([j.c60(g),j.cD_(g),j.bHg(g)],v),x,i),1)],v),B.l,i,B.e,B.h,0,B.p),!0,!1,B.ag,!0,!0),B.f,i,i,new A.n(i,i,i,i,i,new A.a7(B.aX,B.b1,B.x,e,i,i),B.m),i,i,i,i,i,i,i,i),i,!1,!1,i,i)},
c60(d){var x,w=null,v=new A.Y(C.a6p,new D.eFE(this),y.E).gJ(0),u=A.m(24),t=y.p
t=A.a([A.o(w,A.x(A.a([C.hbI,B.au,C.fTp,B.aA,A.bv(A.m(9),A.jE(B.c.j(0.18),w,w,8,w,v/10,B.af8),B.aq),B.al,A.c(""+v+" of 10 lessons done",w,w,w,w,w,w,B.acC,w,w,w)],t),B.B,w,B.e,B.h,0,B.p),B.f,w,w,new A.n(w,w,w,u,w,C.cdK,B.m),w,w,w,w,B.fb,w,w,w),B.aA],t)
for(x=0;x<10;++x)t.push(this.c5Z(d,x))
t.push(B.al)
t.push(A.c("Practice with pretend money. Signals and lessons are for learning; markets can always surprise.",w,w,w,w,w,w,A.l(w,w,d.a?C.dN:C.dO,w,w,w,w,w,w,w,w,11,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),B.K,w,w))
return A.cn(t,w,w,C.ao8,w,w,B.ah,!1)},
c5Z(d,e){var x,w,v,u=null,t=C.a6p[e],s=this.w.q(0,t.a),r=d.a,q=r?B.c.j(0.92):C.mV,p=A.m(20),o=A.K(r?B.c:C.uO,B.r,1),n=A.a([new A.ab(0,B.H,d.ga9x(),B.hP,14)],y.V),m=A.m(15)
m=A.o(u,A.W(t.e,B.c,u,u,u,u),B.f,u,u,new A.n(t.f,u,u,m,u,u,B.m),u,46,u,u,u,u,u,46)
x=A.c("Lesson "+(e+1)+" \xb7 "+t.d+" min",u,u,u,u,u,u,A.l(u,u,r?C.dN:C.dO,u,u,u,u,u,u,u,u,11,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)
w=A.c(t.b,u,u,u,u,u,u,A.l(u,u,r?C.ed:B.c,u,u,u,u,u,u,u,u,15,u,u,B.F,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)
v=y.p
w=A.E(A.x(A.a([x,w,A.c(t.c,u,u,u,u,u,u,A.l(u,u,r?C.dN:C.dO,u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],v),B.B,u,B.e,B.h,0,B.p),1)
x=s?B.e7:B.eL
if(s)r=C.eB
else r=r?C.dN:C.dO
return A.ay(u,A.o(u,A.A(A.a([m,B.bb,w,A.W(x,r,u,u,u,u)],v),B.l,u,B.e,B.h,0,u,u),B.f,u,u,new A.n(q,u,o,p,n,u,B.m),u,u,u,B.d4,B.bH,u,u,u),B.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new D.eFD(this,t),u,u,u,u,u,u,!1,B.a4)},
cli(d){var x=this.c
x.toString
A.a8(x,!1).cb(A.e9(new D.eFT(this,d),!1,null,y.H))},
c6x(b9,c0){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4=this,b5=null,b6="reading",b7="rsi",b8=b4.gcDV()
if(b8==null)return A.c("Live example appears once the markets have loaded.",b5,b5,b5,b5,b5,b5,A.l(b5,b5,b9.a?C.dN:C.dO,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,!0,b5,b5,b5,b5,b5,b5,b5,b5),b5,b5,b5)
x=J.a6(b8)
w=J.k(x.h(b8,"asset"))
v=D.bEA(b8)
u=D.jl(x.h(b8,b6))
t=D.hl(x.h(b8,"price"))
s=new D.eFH(v,b9,t)
r=new D.eFN(b9)
switch(c0){case"basics":q=v.length!==0?D.hl(J.t(B.d.gH(v),"c")):t
p=q===0?50:50*t/q
x=r.$1("Right now "+w+" is "+D.il(t,!0,!1)+". About 4 hours ago it was "+D.il(q,!0,!1)+".")
o=D.il(p,!0,!1)
n=p>=50?"a win of":"a loss of"
return A.x(A.a([x,B.P,r.$1("If you had put $50 into "+w+" then, it would be worth "+o+" now: "+n+" "+D.il(Math.abs(p-50),!0,!1)+". That difference is your profit or loss.")],y.p),B.B,b5,B.e,B.h,0,B.p)
case"candles":m=v.length!==0?B.d.gal(v):A.S(y.N,y.z)
x=J.a6(m)
o=D.hl(x.h(m,"c"))
n=D.hl(x.h(m,"o"))
l=s.$2$last$lines(24,!1)
k=D.il(D.hl(x.h(m,"o")),!0,!1)
j=D.il(D.hl(x.h(m,"c")),!0,!1)
o=o>=n?"GREEN: buyers won those 5 minutes":"YELLOW: sellers won those 5 minutes"
return A.x(A.a([l,B.P,r.$1("The last finished "+w+" candle opened at "+k+" and closed at "+j+", so it is "+o+". Its high was "+D.il(D.hl(x.h(m,"h")),!0,!1)+" and its low "+D.il(D.hl(x.h(m,"l")),!0,!1)+".")],y.p),B.B,b5,B.e,B.h,0,B.p)
case"trend":x=y.N
i=A.S(x,y.S)
for(o=D.DE(b4.gz6()),n=o.length,l=y.z,k=y.f,h=0;h<o.length;o.length===n||(0,A.I)(o),++h){j=J.t(o[h],b6)
j=(k.b(j)?A.a1(j,x,l):A.S(x,l)).h(0,"bias")
g=J.k(j==null?"unknown":j)
j=i.h(0,g)
i.n(0,g,(j==null?0:j)+1)}x=s.$0()
o=u.h(0,"bias")
o=J.k(o==null?"unknown":o)
n=i.h(0,"bullish")
if(n==null)n=0
l=i.h(0,"bearish")
if(l==null)l=0
k=i.h(0,"sideways")
if(k==null)k=0
return A.x(A.a([x,B.P,r.$1(w+" is "+o.toUpperCase()+" right now. Across all 10 markets: "+n+" bullish, "+l+" bearish, "+k+" sideways.")],y.p),B.B,b5,B.e,B.h,0,B.p)
case"ma":f=D.hl(x.h(b8,"fast"))
e=D.hl(x.h(b8,"slow"))
x=s.$0()
o=D.il(f,!0,!1)
n=D.il(e,!0,!1)
l=f>=e
k=l?"ABOVE":"BELOW"
l=l?"UP":"DOWN"
return A.x(A.a([x,B.P,r.$1("On "+w+" the pink fast line is at "+o+" and the purple slow line at "+n+". The fast line is "+k+" the slow line, so the short-term trend is "+l+".")],y.p),B.B,b5,B.e,B.h,0,B.p)
case"cross":x=D.DE(b4.gz6())
o=A.T(x)
n=o.k("cL<1,@>")
d=A.B(new A.cL(new A.Y(x,new D.eFI(),o.k("Y<1>")),new D.eFJ(),n),n.k("M.E"))
x=D.DE(b4.gz6())
o=A.T(x)
n=o.k("cL<1,@>")
a0=A.B(new A.cL(new A.Y(x,new D.eFK(),o.k("Y<1>")),new D.eFL(),n),n.k("M.E"))
x=s.$0()
if(d.length!==0)o="Fresh BUY crosses right now: "+B.d.aM(d,", ")+". On its next automatic check the agent would buy the strongest of these if it holds nothing."
else o="No fresh buy cross in any open market right now. "+(a0.length!==0?"Fresh sell crosses: "+B.d.aM(a0,", ")+". ":"")+"The agent simply waits; no signal means no trade."
return A.x(A.a([x,B.P,r.$1(o)],y.p),B.B,b5,B.e,B.h,0,B.p)
case"rsi":x=D.DE(b4.gz6())
o=A.T(x).k("Y<1>")
a1=A.B(new A.Y(x,new D.eFM(),o),o.k("M.E"))
x=y.p
o=A.a([],x)
for(n=a1.length,l=b9.a,k=y.N,j=y.z,a2=y.f,a3=y.c,h=0;h<a1.length;a1.length===n||(0,A.I)(a1),++h){a4=a1[h]
a5=J.a6(a4)
a6=J.k(a5.h(a4,"asset"))
a7=l?C.ed:B.c
a6=A.c(a6,b5,b5,b5,b5,b5,b5,new A.F(!0,a7,b5,b5,b5,b5,12,B.F,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5),b5,b5,b5)
a7=new A.aP(9,9)
a8=a5.h(a4,b6)
a8=(a2.b(a8)?A.a1(a8,k,j):A.S(k,j)).h(0,b7)
if(!(typeof a8=="number")){a8=A.cA(A.v(a8==null?"":a8))
if(a8==null)a8=0}a9=l?C.NV:C.NM
b0=a5.h(a4,b6)
b0=(a2.b(b0)?A.a1(b0,k,j):A.S(k,j)).h(0,b7)
if(!(typeof b0=="number")){b0=A.cA(A.v(b0==null?"":b0))
if(b0==null)b0=0}if(b0>=70)b0=C.fs
else{b0=a5.h(a4,b6)
b0=(a2.b(b0)?A.a1(b0,k,j):A.S(k,j)).h(0,b7)
if(!(typeof b0=="number")){b0=A.cA(A.v(b0==null?"":b0))
if(b0==null)b0=0}b0=b0<=30?B.cD:C.eB}b0=A.jE(a9,b5,b5,8,b5,a8/100,new A.ls(b0,a3))
a5=a5.h(a4,b6)
a5=(a2.b(a5)?A.a1(a5,k,j):A.S(k,j)).h(0,b7)
if(!(typeof a5=="number")){a5=A.cA(A.v(a5==null?"":a5))
if(a5==null)a5=0}a5=B.i.ab(a5,0)
a8=l?C.ed:B.c
o.push(new A.D(B.cy,new A.c3(B.aL,B.e,B.h,B.l,b5,B.p,b5,0,A.a([new A.a5(70,b5,a6,b5),new A.bx(1,B.ba,new A.n5(new A.bc(a7,a7,a7,a7),B.aq,b0,b5),b5),B.aa,new A.a5(26,b5,A.c(a5,b5,b5,b5,b5,b5,b5,new A.F(!0,a8,b5,b5,b5,b5,12,B.F,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5),b5,b5,b5),b5)],x),b5),b5))}o.push(r.$1("Red bars are above 70 (stretched), blue below 30 (oversold), green in between (healthy)."))
return A.x(o,B.B,b5,B.e,B.h,0,B.p)
case"risk":b1=t===0?0:50/t
x=r.$1("If the agent bought "+w+" right now at "+D.il(t,!0,!1)+":")
return A.x(A.a([x,B.al,r.$1("- $50 buys "+B.i.ab(b1,b1<0.01?6:4)+" "+w),r.$1("- Take profit at "+D.il(t*1.03,!0,!1)+": you get back about $51.50 (+$1.50)"),r.$1("- Stop loss at "+D.il(t*0.985,!0,!1)+": you get back about $49.25 (-$0.75)"),B.al,r.$1("Win 1 and lose 2 of 3 trades: +1.50 - 0.75 - 0.75 = $0.00. That is break even.")],y.p),B.B,b5,B.e,B.h,0,B.p)
case"brakes":x=b4.e
b2=D.jl(x==null?b5:J.t(x,"state"))
x=b4.e
x=D.il(D.hl(D.jl(x==null?b5:J.t(x,"today")).h(0,"day_pnl")),!0,!0)
o=D.il(D.hl(b2.h(0,"totalPnl")),!0,!0)
n=J.z(b2.h(0,"brakePaused"),!0)?"The brake is ON right now.":"Both brakes are off, it can keep trading."
return r.$1("Today the agent is at "+x+" (the daily stop is -$10) and "+o+" all time (the brake is -$25). "+n)
case"hours":x=b4.e
return r.$1("Right now the US stock market is "+(J.z(D.jl(x==null?b5:J.t(x,"market")).h(0,"stockOpen"),!0)?"OPEN, so all 10 markets can be traded":"CLOSED, so only Bitcoin, Ethereum and Solana can be traded")+". Crypto is open now and always.")
case"practice":x=b4.e
b3=D.jl(x==null?b5:J.t(x,"record"))
x=b3.h(0,"trades")
x=A.v(x==null?0:x)
o=b3.h(0,"wins")
o=A.v(o==null?0:o)
n=b3.h(0,"losses")
return r.$1("The agent journal so far: "+x+" finished pretend trades, "+o+" wins and "+A.v(n==null?0:n)+" losses. Keep watching until there are at least 20 before judging it.")}return B.bL},
cD_(d){var x,w,v,u,t,s,r,q,p=this,o=null,n=A.B(D.DE(p.gz6()),y.P)
B.d.b_(n,new D.eFW())
x=A.T(n).k("Y<1>")
w=new A.Y(n,new D.eFX(),x).gJ(0)
v=new A.Y(n,new D.eFY(),x).gJ(0)
x=n.length
if(p.f==null)u=""
else{t=Date.now()
s=p.f
s.toString
if(B.o.ar(new A.V(t,0,!1).bz(s).a,1e6)<60)u="just now"
else{t=Date.now()
s=p.f
s.toString
s=""+B.o.ar(new A.V(t,0,!1).bz(s).a,6e7)+" min ago"
u=s}}t=y.p
x=A.A(A.a([A.E(p.auX(d,"Bullish",w,C.eB,B.nf),1),B.aa,A.E(p.auX(d,"Bearish",v,C.fs,B.a4L),1),B.aa,A.E(p.auX(d,"Sideways",x-w-v,B.n4,C.aso),1)],t),B.l,o,B.e,B.h,0,o,o)
s=d.a
x=A.a([x,B.P,A.c("Updated "+u+" \xb7 refreshes every minute \xb7 same rules the agent trades by",o,o,o,o,o,o,A.l(o,o,s?C.dN:C.dO,o,o,o,o,o,o,o,o,11,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),B.K,o,o),B.af],t)
if(n.length===0)x.push(A.c("Loading the markets...",o,o,o,o,o,o,A.l(o,o,s?C.dN:C.dO,o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o))
for(t=n.length,r=0;r<n.length;n.length===t||(0,A.I)(n),++r){q=n[r]
x.push(D.hG4(d,q,!1,new D.eFZ(p,q)))}x.push(A.c("Signals show what the agent rules see. They can fail; the stop loss keeps each loss small.",o,o,o,o,o,o,A.l(o,o,s?C.dN:C.dO,o,o,o,o,o,o,o,o,11,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),B.K,o,o))
return A.PJ(A.cn(x,o,o,C.ao8,o,o,B.ah,!1),o,p.gcfY())},
auX(d,e,f,g,h){var x=null,w=A.m(18),v=A.a([g.j(0.2),g.j(0.05)],y.O),u=A.K(g.j(0.35),B.r,1),t=A.W(h,g,x,x,x,20),s=d.a,r=A.c(""+f,x,x,x,x,x,x,A.l(x,x,s?C.ed:B.c,x,x,x,x,x,x,x,x,22,x,x,B.u,x,x,!0,x,x,x,x,x,x,x,x),x,x,x)
return A.o(x,A.x(A.a([t,B.au,r,A.c(e,x,x,x,x,x,x,A.l(x,x,s?C.dN:C.dO,x,x,x,x,x,x,x,x,11.5,x,x,B.O,x,x,!0,x,x,x,x,x,x,x,x),x,x,x)],y.p),B.B,x,B.e,B.h,0,B.p),B.f,x,x,new A.n(x,x,u,w,x,new A.a7(B.a5,B.a9,B.x,v,x,x),B.m),x,x,x,x,B.bl,x,x,x)},
bHg(d){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=y.p,i=A.a([],j),h=l.x
if(h.length===0){x=d.a
w=x?B.c.j(0.92):C.mV
v=A.m(22)
u=A.K(x?B.c:C.uO,B.r,1)
t=A.o(k,C.c0p,B.f,k,k,B.agm,k,40,k,k,k,k,k,40)
t=A.A(A.a([t,B.ar,A.E(A.c("Your trading tutor",k,k,k,k,k,k,A.l(k,k,x?C.ed:B.c,k,k,k,k,k,k,k,k,16,k,k,B.F,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),1)],j),B.l,k,B.e,B.h,0,k,k)
w=A.o(k,A.x(A.a([t,B.P,A.c("Ask anything about trading. The tutor sees the same live prices and readings as the agent, so it can explain what each market is doing right now.",k,k,k,k,k,k,A.l(k,k,x?C.dN:C.dO,k,k,k,k,k,k,k,k,12.5,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),k,k,k)],j),B.B,k,B.e,B.h,0,B.p),B.f,k,k,new A.n(w,k,u,v,k,k,B.m),k,k,k,k,B.bR,k,k,k)
v=A.a([],j)
for(s=0;s<6;++s){r=C.dbe[s]
u=x?C.ed:B.c
u=A.c(r,k,k,k,k,k,k,new A.F(!0,u,k,k,k,k,12,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k),k,k,k)
t=x?B.c.j(0.92):C.mV
q=x?C.wC:C.wA
p=new A.aP(999,999)
v.push(A.mE(k,t,u,k,new D.eFx(l,r),k,new A.b9(new A.bc(p,p,p,p),B.a1),new A.av(q,1,B.r,-1),k))}B.d.u(i,A.a([w,B.af,A.bZ(B.bI,v,B.br,k,8,8)],j))}for(x=h.length,w=d.a,s=0;s<h.length;h.length===x||(0,A.I)(h),++s){o=h[s]
v=o.a
u=v?B.a9:B.a5
if(v)t=w?C.lO:B.c
else t=w?B.c.j(0.92):C.mV
q=v?18:4
p=v?4:18
if(v)n=k
else{m=new A.av(w?B.c:C.uO,1,B.r,-1)
n=new A.bE(m,m,m,m)}if(v)v=w?B.c:C.lO
else v=w?C.ed:B.c
i.push(new A.bK(u,k,k,A.o(k,A.AA(o.b,new A.F(!0,v,k,k,k,k,13.5,k,k,k,k,k,1.4,k,k,k,k,k,k,k,k,k,k,k,k,k),k),B.f,k,E.afY,new A.n(t,k,n,new A.bc(B.i4,B.i4,new A.aP(q,q),new A.aP(p,p)),k,k,B.m),k,k,k,B.jg,B.hw,k,k,k),k))}if(l.Q){h=w?B.c.j(0.92):C.mV
x=A.m(18)
i.push(new A.bK(B.a5,k,k,A.o(k,A.A(A.a([B.ac0,B.aa,A.c("Reading the markets...",k,k,k,k,k,k,A.l(k,k,w?C.dN:C.dO,k,k,k,k,k,k,k,k,12.5,k,k,k,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)],j),B.l,k,B.e,B.M,0,k,k),B.f,k,k,new A.n(h,k,k,x,k,k,B.m),k,k,k,B.hv,B.hw,k,k,k),k))}i=A.E(A.cn(i,l.z,k,C.bH4,k,k,B.ah,!1),1)
h=A.l(k,k,w?C.ed:B.c,k,k,k,k,k,k,k,k,k,k,k,k,k,k,!0,k,k,k,k,k,k,k,k)
x=A.l(k,k,w?C.dN:C.dO,k,k,k,k,k,k,k,k,k,k,k,k,k,k,!0,k,k,k,k,k,k,k,k)
v=w?B.c.j(0.92):C.mV
u=A.m(999)
t=w?C.wC:C.wA
q=A.m(999)
p=w?C.wC:C.wA
h=A.E(A.aN(k,B.Z,!1,k,!0,B.t,k,A.aO(),l.y,k,k,k,k,k,2,A.bA(k,new A.b6(4,u,new A.av(t,1,B.r,-1)),k,B.zo,k,k,k,k,!0,new A.b6(4,q,new A.av(p,1,B.r,-1)),k,k,k,k,k,v,!0,k,k,k,k,k,k,k,k,k,k,k,k,k,x,"Ask about trading or a market...",k,k,k,k,k,k,k,k,k,!0,!0,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k),B.y,!0,k,!0,k,!1,k,B.ak,k,k,k,k,k,k,k,k,k,4,1,k,!1,"\u2022",k,k,k,l.gcfW(),k,!1,k,k,!1,k,!0,k,B.ae,k,k,k,k,k,k,k,k,k,k,k,h,!0,B.a7,k,B.ao,k,B.acn,k,k),1)
x=w?C.lO:B.c
v=l.Q?k:new D.eFy(l)
return A.x(A.a([i,A.o(k,A.A(A.a([h,B.aa,A.aF(!1,B.a3,!0,k,A.aM(!1,k,!0,new A.a5(48,48,A.W(B.r1,w?B.c:C.lO,k,k,k,k),k),B.cK,!0,k,k,k,k,k,k,k,k,k,k,k,v,k,k,k,k,k,k,k),B.f,x,0,k,k,B.cK,k,k,B.ai)],j),B.l,k,B.e,B.h,0,k,k),B.f,k,k,k,k,k,k,k,B.Hx,k,k,k)],j),B.l,k,B.e,B.h,0,B.p)}}
D.a0w.prototype={
S(){var x=y.S
return new D.bkI(A.S(x,x))},
cYq(d){return this.e.$0()},
rr(){return this.f.$0()},
cZH(d){return this.r.$1(d)}}
D.bkI.prototype={
B(d){var x,w,v,u,t,s,r,q,p,o=this,n=null,m=A.O(d).ax.a===B.dd,l=new D.a1s(m),k=o.a.c,j=k.x,i=new A.i_(j,A.T(j).k("i_<1>")),h=i.gdM(i).cw(0,new D.du0(o))
i=m?C.yI:C.yG
x=m?C.yI:C.yG
w=m?C.a_w:C.a_m
v=y.O
w=A.a([x,w],v)
x=A.aH(n,n,n,n,A.W(B.eG,m?C.ed:B.c,n,n,n,18),n,n,n,new D.du1(d),n,n,n,n,n,n)
u=o.a.d
t=y.p
u=A.A(A.a([x,B.aY,A.c("Lesson "+u+" of 10",n,n,n,n,n,n,A.l(n,n,m?C.dN:C.dO,n,n,n,n,n,n,n,n,12,n,n,B.O,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],t),B.l,n,B.e,B.h,0,n,n)
x=A.m(24)
s=k.f
r=A.ap(s,B.v,0.35)
r.toString
v=A.a([s,r],v)
r=B.c.j(0.2)
s=A.m(16)
v=A.a([u,A.o(n,A.A(A.a([A.o(n,A.W(k.e,B.c,n,n,n,28),B.f,n,n,new A.n(r,n,n,s,n,n,B.m),n,52,n,n,n,n,n,52),B.er,A.E(A.x(A.a([A.c(k.b,n,n,n,n,n,n,B.fL,n,n,n),A.c(k.c+" \xb7 "+k.d+" min",n,n,n,n,n,n,B.nr,n,n,n)],t),B.B,n,B.e,B.h,0,B.p),1)],t),B.l,n,B.e,B.h,0,n,n),B.f,n,n,new A.n(n,n,n,x,n,new A.a7(B.a5,B.a9,B.x,v,n,n),B.m),n,n,n,n,B.fb,n,n,n),B.aA],t)
for(x=k.w,q=0;q<4;++q){u=x[q]
s=m?C.ed:B.c
s=A.c(u.a,n,n,n,n,n,n,new A.F(!0,s,n,n,n,n,16,B.F,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n),n,n,n)
r=m?C.ed:B.c
B.d.u(v,A.a([s,B.au,A.c(u.b,n,n,n,n,n,n,new A.F(!0,r,n,n,n,n,14,n,n,n,n,n,1.5,n,n,n,n,n,n,n,n,n,n,n,n,n),n,n,n),B.aA],t))}x=m?B.c.j(0.92):C.mV
u=A.m(22)
s=A.K(C.eB.j(0.45),B.r,1.5)
v.push(A.o(n,A.x(A.a([A.A(A.a([C.bWZ,B.bk,A.c("See it live right now",n,n,n,n,n,n,A.l(n,n,m?C.ed:B.c,n,n,n,n,n,n,n,n,14,n,n,B.F,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],t),B.l,n,B.e,B.h,0,n,n),B.S,o.a.cYq(0)],t),B.B,n,B.e,B.h,0,B.p),B.f,n,n,new A.n(x,n,s,u,n,n,B.m),n,n,n,n,B.bH,n,n,n))
v.push(B.bx)
v.push(A.c("Quick check",n,n,n,n,n,n,A.l(n,n,m?C.ed:B.c,n,n,n,n,n,n,n,n,16,n,n,B.F,n,n,!0,n,n,n,n,n,n,n,n),n,n,n))
v.push(B.P)
for(x=j.length,p=0;p<x;++p)v.push(o.ctz(l,p,j[p]))
v.push(B.P)
j=m?C.ed:B.c
x=m?C.wC:C.wA
x=A.E(A.em(C.c2D,n,C.fSa,new D.du2(o,k),A.dg(n,n,n,n,n,n,n,n,n,j,n,n,B.cm,n,new A.b9(A.m(999),B.a1),new A.av(x,1.5,B.r,-1),n,n,n,n)),1)
if(h)m=C.eB
else m=m?C.dN:C.dO
m=A.bn(m,n,n,n,n,n,B.cm,n,new A.b9(A.m(999),B.a1),n,n,n)
j=h?new D.du3(o,d):n
v.push(A.A(A.a([x,B.ar,A.E(A.d8(L.QU,n,A.c(h?"Finish lesson":"Answer the quiz",n,n,n,n,n,n,B.cb,n,n,n),j,m),1)],t),B.l,n,B.e,B.h,0,n,n))
return A.c5(n,i,A.o(n,A.bm(!0,A.cn(v,n,n,C.bHc,n,n,B.ah,!1),!0,!1,B.ag,!0,!0),B.f,n,n,new A.n(n,n,n,n,n,new A.a7(B.aX,B.b1,B.x,w,n,n),B.m),n,n,n,n,n,n,n,n),n,!1,!1,n,n)},
ctz(d,e,f){var x,w,v,u,t,s,r,q,p,o,n=null,m=this.d.h(0,e),l=d.a,k=l?B.c.j(0.92):C.mV,j=A.m(20),i=A.K(l?B.c:C.uO,B.r,1),h=y.p,g=A.a([A.c(f.a,n,n,n,n,n,n,A.l(n,n,l?C.ed:B.c,n,n,n,n,n,n,n,n,14,n,n,B.F,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),B.P],h)
for(x=f.b,w=x.length,v=f.c,u=0;u<w;++u){t=m===u
if(t)s=(u===v?C.eB:C.fs).j(0.14)
else s=l?C.a0a:C.a0c
r=new A.aP(14,14)
if(t)q=u===v?C.eB:C.fs
else q=B.L
p=new A.av(q,1,B.r,-1)
q=x[u]
o=l?C.ed:B.c
q=A.a([new A.bx(1,B.ba,A.c(q,n,n,n,n,n,n,new A.F(!0,o,n,n,n,n,13.5,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n),n,n,n),n)],h)
if(t){t=u===v
o=t?B.e7:B.Q9
q.push(A.W(o,t?C.eB:C.fs,n,n,n,18))}g.push(A.ay(n,A.o(n,new A.c3(B.aL,B.e,B.h,B.l,n,B.p,n,0,q,n),B.f,n,n,new A.n(s,n,new A.bE(p,p,p,p),new A.bc(r,r,r,r),n,n,B.m),n,n,n,B.eJ,B.ex,n,n,n),B.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new D.du_(this,e,u),n,n,n,n,n,n,!1,B.a4))}if(m!=null){l=m===v
h=l?"Right! "+f.d:"Not quite. Try again."
g.push(A.c(h,n,n,n,n,n,n,A.l(n,n,l?C.eB:C.fs,n,n,n,n,n,n,n,n,12.5,n,n,B.O,n,n,!0,n,n,n,n,n,n,n,n),n,n,n))}return A.o(n,A.x(g,B.B,n,B.e,B.h,0,B.p),B.f,n,n,new A.n(k,n,i,j,n,n,B.m),n,n,n,B.d4,B.bH,n,n,n)}}
D.aP9.prototype={
t(){var x=this,w=x.a9$
if(w!=null)w.a6(0,x.gbB())
x.a9$=null
x.a3()},
aX(){this.b7()
this.b5()
this.bC()}}
var z=a.updateTypes(["aA<~>()","~()","XA(Z)","aA<~>(q)","q(a_v)","Q(uq)","a0w(Z)","Q(bB<H,nk>)"])
D.eFw.prototype={
$1(d){this.a.Bk(!0)
return null},
$S:12}
D.eFh.prototype={
$0(){var x=this.a,w=x.f=!1,v=this.b,u=v==null
if(!u?J.z(J.t(v,"ok"),!0):w){x.d=v
x.as=null}else{w=u?null:J.t(v,"error")
x.as=J.k(w==null?"Could not reach the server. Pull down to try again.":w)
if(!J.z(u?null:J.t(v,"ownerOnly"),!0))w=J.z(u?null:J.t(v,"setupNeeded"),!0)
else w=!0
if(w)x.d=null}},
$S:0}
D.eF8.prototype={
$1(d){return A.a1(d,y.N,y.z)},
$S:26}
D.eF9.prototype={
$0(){var x,w,v=this,u=v.a
if(v.b){x=A.B(u.e,y.P)
w=v.c
B.d.u(x,w)}else{x=v.c
w=x}u.e=x
u.w=w.length>=100},
$S:0}
D.eFp.prototype={
$1(d){var x=null
return A.ek(A.a([A.bO(!1,B.dp,x,x,!0,x,x,x,new D.eFn(d),x,x),A.bJ(C.heb,x,new D.eFo(d),x)],y.p),x,x,x,C.fSi,x,x,x,x,C.fWo,x)},
$S:18}
D.eFn.prototype={
$0(){A.a8(this.a,!1).N(!1)
return null},
$S:0}
D.eFo.prototype={
$0(){A.a8(this.a,!1).N(!0)
return null},
$S:0}
D.eFq.prototype={
$0(){return this.a.r=!0},
$S:0}
D.eFr.prototype={
$0(){return this.a.r=!1},
$S:0}
D.eFf.prototype={
$1(d){var x=this.a,w=x.d
x.a.toString
return new D.XA(w,!1,null)},
$S:z+2}
D.eFj.prototype={
$0(){return this.a.r=!0},
$S:0}
D.eFk.prototype={
$0(){var x=this.a,w=x.r=!1,v=this.b
if(v!=null?J.z(J.t(v,"ok"),!0):w)x.d=v},
$S:0}
D.eFl.prototype={
$1(d){var x=this
return A.oH(new D.eFi(x.a,x.b,x.c,x.d),!1,0.8,0.95,0.25,!1,null)},
$S:130}
D.eFi.prototype={
$2(d,e){var x=this
return x.a.cyH(x.b,x.c,D.jl(J.t(x.d,"state")),e)},
$S:2334}
D.eFm.prototype={
$2(d,e){return B.i.aQ(D.aH8(d),D.aH8(e))},
$S:40}
D.eFv.prototype={
$0(){return this.a.Bk(!0)},
$S:1}
D.eFs.prototype={
$0(){var x=this.a.c
x.toString
return A.VF(x)},
$S:0}
D.eFt.prototype={
$0(){return this.a.Bk(!0)},
$S:0}
D.eF_.prototype={
$1(d){return J.z(J.t(d,"asset"),this.a)},
$S:4}
D.eF0.prototype={
$0(){var x=this.a
return x.length===0?this.b:B.d.gH(x)},
$S:232}
D.eF1.prototype={
$1(d){return J.z(J.t(d,"asset"),this.a.h(0,"symbol"))},
$S:4}
D.eF2.prototype={
$0(){return this.a},
$S:232}
D.eFc.prototype={
$1(d){return J.z(J.t(d,"open"),!0)},
$S:4}
D.eFe.prototype={
$2(d,e){return B.ar},
$S:38}
D.eFd.prototype={
$2(d,a0){var x,w,v,u,t,s,r,q,p=this,o=null,n=p.b[a0],m=J.a6(n),l=J.k(m.h(n,"asset")),k=l===J.t(p.c,"asset"),j=D.hl(m.h(n,"changePct")),i=j>=0,h=D.bEA(n),g=p.d,f=J.z(g==null?o:g.h(0,"symbol"),l),e=J.z(D.jl(m.h(n,"chart")).h(0,"signal"),"buy")
g=p.a
x=p.e
w=x.a
v=w?B.c.j(0.92):C.mV
u=A.m(20)
if(k)t=D.fyX(l).c
else t=w?B.c:C.uO
t=A.K(t,B.r,k?2:1)
x=k?D.fyX(l).c.j(0.25):x.ga9x()
x=A.a([new A.ab(0,B.H,x,B.cz,k?18:12)],y.V)
s=D.hil(l,20)
r=y.p
s=A.a([s,B.bk,A.E(A.c(l,o,1,B.a2,o,o,o,A.l(o,o,w?C.ed:B.c,o,o,o,o,o,o,o,o,12,o,o,B.F,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),1)],r)
if(!J.z(m.h(n,"open"),!0))s.push(A.c("closed",o,o,o,o,o,o,A.l(o,o,w?C.dN:C.dO,o,o,o,o,o,o,o,o,9.5,o,o,B.O,o,o,!0,o,o,o,o,o,o,o,o),o,o,o))
s=A.A(s,B.l,o,B.e,B.h,0,o,o)
m=D.il(D.hl(m.h(n,"price")),!0,!1)
m=A.c(m,o,o,o,o,o,o,A.l(o,o,w?C.ed:B.c,o,o,o,o,o,o,o,o,17,o,o,B.O,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)
w=i?"+":""
q=B.i.ab(j,2)
w=A.a([A.c(w+q+"%",o,o,o,o,o,o,A.l(o,o,i?C.eB:C.fs,o,o,o,o,o,o,o,o,11,o,o,B.F,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),B.aY],r)
if(f)w.push(g.a0M("HOLDING",E.wy))
else if(e)w.push(g.a0M("BUY SIGNAL",C.eB))
w=A.A(w,B.l,o,B.e,B.h,0,o,o)
return A.ay(o,A.cT(o,A.x(A.a([s,B.al,new A.dk(B.dv,B.a5,B.f,m,o),w,B.au,A.E(A.b4(o,o,o,new D.bvU(h,i?C.eB:C.fs,o),B.h0),1)],r),B.B,o,B.e,B.h,0,B.p),o,o,B.b_,new A.n(v,o,t,u,x,o,B.m),B.a3,o,o,o,o,B.anl,o,o,150),B.y,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,new D.eFb(g,l),o,o,o,o,o,o,!1,B.a4)},
$S:83}
D.eFb.prototype={
$0(){var x=this.a
return x.l(new D.eFa(x,this.b))},
$S:0}
D.eFa.prototype={
$0(){return this.a.z=this.b},
$S:0}
D.eF5.prototype={
$0(){var x=this.a
return x.l(new D.eF4(x,this.b))},
$S:0}
D.eF4.prototype={
$0(){return this.a.y=this.b},
$S:0}
D.eF6.prototype={
$0(){var x=this.a
return x.l(new D.eF3(x))},
$S:0}
D.eF3.prototype={
$0(){var x=this.a
return x.Q=!x.Q},
$S:0}
D.eFg.prototype={
$2(d,e){var x=null,w=e.b,v=A.ao(x,A.o(x,x,B.f,x,x,new A.n(x,x,x,A.m(99),x,C.cbS,B.m),x,8,x,x,x,x,x,x),x,x,0,0,9,x),u=this.a.a,t=A.ao(x,A.o(x,x,B.f,(u?C.ed:B.c).j(0.5),x,x,x,18,x,x,x,x,x,2),x,x,w/3-1,x,4,x),s=B.i.D(this.b*w-9,0,w-18)
return new A.a5(x,26,new A.an(B.a0,x,B.ad,B.f,A.a([v,t,A.ao(x,A.o(x,x,B.f,x,x,new A.n(B.c,x,A.K(u?C.ed:B.c,B.r,3),x,x,x,B.a6),x,18,x,x,x,x,x,18),x,x,s,x,4,x)],y.p),x),x)},
$S:127}
D.eF7.prototype={
$0(){return this.a.SI(!this.b)},
$S:0}
D.eFu.prototype={
$1(d){return A.a1(d,y.N,y.z)},
$S:26}
D.eEZ.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
x=u.x&&u.w?2:4
break
case 2:x=5
return A.b(u.a_0(!0),$async$$0)
case 5:x=3
break
case 4:u.l(new D.eEY(u))
case 3:return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
D.eEY.prototype={
$0(){return this.a.x=!0},
$S:0}
D.cWn.prototype={
$0(){return this.a.d=this.b},
$S:0}
D.cWw.prototype={
$2(d,e){var x,w,v=null,u=e.b,t=this.a,s=t.a,r=s.c,q=s.d,p=s.e,o=s.f
s=s.r
x=t.d
w=d.L(y.D)
return A.ay(v,new A.a5(u,250,A.b4(v,v,v,new D.be2((w==null?B.CL:w).w.d,r,q,p,o,s,x,v),B.az),v),B.y,!1,v,v,v,v,v,new D.cWr(t),new D.cWs(t,u),new D.cWt(t,u),v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new D.cWu(t,u),new D.cWv(t),v,v,v,!1,B.a4)},
$S:36}
D.cWu.prototype={
$1(d){return this.a.aAs(d.b,this.b)},
$S:23}
D.cWs.prototype={
$1(d){return this.a.aAs(d.b,this.b)},
$S:47}
D.cWt.prototype={
$1(d){return this.a.aAs(d.b,this.b)},
$S:19}
D.cWr.prototype={
$1(d){var x=this.a
return x.l(new D.cWq(x))},
$S:35}
D.cWq.prototype={
$0(){return this.a.d=null},
$S:0}
D.cWv.prototype={
$1(d){return A.bN(B.fV,new D.cWp(this.a),y.a)},
$S:60}
D.cWp.prototype={
$0(){var x=this.a
if(x.c!=null)x.l(new D.cWo(x))},
$S:11}
D.cWo.prototype={
$0(){return this.a.d=null},
$S:0}
D.cWx.prototype={
$1(d){var x=this.a
return x*d+x/2},
$S:157}
D.cWz.prototype={
$1(d){var x=this.b,w=this.a,v=w.a
return x-(d-v)/(w.b-v)*x},
$S:5}
D.cWy.prototype={
$2(d,e){var x,w,v,u,t,s,r,q,p=this,o=$.R(),n=A.a([],y.v),m=new A.aG(o.r,B.aj,null,null,n)
for(o=p.b,x=p.c,w=p.d,v=p.a.c,u=!1,t=0;t<o;++t){s=J.t(v[t],d)
if(s==null)continue
r=x.$1(t)
if(typeof s=="number")q=s
else{q=A.cA(A.v(s))
if(q==null)q=0}q=w.$1(q)
if(u){r=new A.aq(r,q)
n.push(r)
q=m.f
if(q!=null)r.aj(q)
m.ac()}else{r=new A.aZ(r,q)
n.push(r)
q=m.f
if(q!=null)r.aj(q)
m.ac()}u=!0}$.R()
o=A.L()
o.r=e.j(0.85).gp(0)
o.b=B.ab
o.c=2
o.d=B.bG
o.e=B.dM
p.e.af(m,o)},
$S:2335}
D.ffk.prototype={
$1(d){return D.hl(J.t(d,"c"))},
$S:2336}
D.fze.prototype={
$1(d){var x=y.N,w=y.z,v=A.a1(d,x,w)
w=A.dH(v,x,w)
w.n(0,"asset",v.h(0,"symbol"))
return w},
$S:26}
D.fDy.prototype={
$1(d){return A.a1(d,y.N,y.z)},
$S:26}
D.fAk.prototype={
$1(d){return","},
$S:63}
D.fHz.prototype={
$3(d,e,f){var x=A.bOY(d,e,1,0,0,0,0,0)
while(A.lE(x)!==7)x=x.bQ(864e8)
return x.bQ(A.du(7*(f-1),0,0,0,0,0).a)},
$S:2337}
D.fEp.prototype={
$1(d){return J.k(d)},
$S:16}
D.fEq.prototype={
$2(d,e){var x=null,w=e.b,v=A.ao(x,A.o(x,x,B.f,x,x,new A.n(x,x,x,A.m(9),x,C.ca6,B.m),x,6,x,x,x,x,x,x),x,x,0,0,4,x),u=B.i.D(this.a/100*w-7,0,w-14)
return new A.a5(x,14,new A.an(B.a0,x,B.ad,B.f,A.a([v,A.ao(x,A.o(x,x,B.f,x,x,new A.n(B.c,x,A.K(this.b.a?C.ed:B.c,B.r,2.5),x,x,x,B.a6),x,14,x,x,x,x,x,14),x,x,u,x,0,x)],y.p),x),x)},
$S:127}
D.eG4.prototype={
$0(){return this.a.l(new D.eG3())},
$S:0}
D.eG3.prototype={
$0(){},
$S:0}
D.eG5.prototype={
$1(d){this.a.R9()
return null},
$S:12}
D.eFO.prototype={
$0(){var x=this.b
return this.a.w=A.js(x,A.T(x).c)},
$S:0}
D.eFP.prototype={
$0(){var x=this.a,w=A.cY(x.w,y.N)
w.I(0,this.b)
return x.w=w},
$S:0}
D.eFU.prototype={
$0(){var x=this.a
x.e=this.b
x.f=new A.V(Date.now(),0,!1)},
$S:0}
D.eG_.prototype={
$1(d){return J.z(J.t(d,"open"),!0)&&D.bEA(d).length>5},
$S:4}
D.eG0.prototype={
$2(d,e){return B.i.aQ(D.aH8(d),D.aH8(e))},
$S:40}
D.eFF.prototype={
$1(d){return J.z(J.t(d,"asset"),this.a.h(0,"symbol"))},
$S:4}
D.eFG.prototype={
$0(){return A.S(y.N,y.z)},
$S:232}
D.eFz.prototype={
$0(){var x=this.a
x.x.push(new D.a_v(!0,this.b))
x.Q=!0},
$S:0}
D.eFA.prototype={
$1(d){return(d.a?"Student":"Tutor")+": "+d.b},
$S:z+4}
D.eFB.prototype={
$1(d){return"- "+A.v(d)},
$S:16}
D.eFC.prototype={
$0(){var x=this.b
x.x.push(new D.a_v(!1,this.a.a))
x.Q=!1},
$S:0}
D.eFV.prototype={
$1(d){var x=this.a.z,w=x.f
if(w.length!==0){w=B.d.gd3(w).Q
w.toString
x.m6(w+200,B.e6,B.eV)}},
$S:7}
D.eG1.prototype={
$0(){return A.VF(this.a)},
$S:0}
D.eG2.prototype={
$0(){return this.b.gT7().Gf(this.a.a)},
$S:0}
D.eFE.prototype={
$1(d){return this.a.w.q(0,d.a)},
$S:z+5}
D.eFD.prototype={
$0(){return this.a.cli(this.b)},
$S:0}
D.eFT.prototype={
$1(d){var x=this.b,w=this.a
return new D.a0w(x,B.d.cd(C.a6p,x)+1,new D.eFQ(w,x),new D.eFR(w,x),new D.eFS(w),null)},
$S:z+6}
D.eFQ.prototype={
$0(){var x=this.a,w=x.c
w.toString
return x.c6x(new D.a1s(A.O(w).ax.a===B.dd),this.b.r)},
$S:150}
D.eFR.prototype={
$0(){return this.a.a_d(this.b.a)},
$S:0}
D.eFS.prototype={
$1(d){var x=this.a,w=x.c
w.toString
A.a8(w,!1).e7()
x.aQO(d)},
$S:2}
D.eFH.prototype={
$2$last$lines(d,e){var x=this.a
return new D.ady(B.d.fC(x,Math.max(0,x.length-d)),this.b,null,e,this.c,null)},
$0(){return this.$2$last$lines(36,!0)},
$1$lines(d){return this.$2$last$lines(36,d)},
$S:2338}
D.eFN.prototype={
$1(d){var x=null
return A.c(d,x,x,x,x,x,x,A.l(x,x,this.a.a?C.ed:B.c,x,x,x,x,x,x,x,x,13,x,x,x,x,1.4,!0,x,x,x,x,x,x,x,x),x,x,x)},
$S:2339}
D.eFI.prototype={
$1(d){return J.z(D.jl(J.t(d,"reading")).h(0,"action"),"BUY SIGNAL")},
$S:4}
D.eFJ.prototype={
$1(d){return J.t(d,"asset")},
$S:644}
D.eFK.prototype={
$1(d){return J.z(D.jl(J.t(d,"reading")).h(0,"action"),"SELL SIGNAL")},
$S:4}
D.eFL.prototype={
$1(d){return J.t(d,"asset")},
$S:644}
D.eFM.prototype={
$1(d){var x=J.a6(d)
return J.z(x.h(d,"open"),!0)&&D.jl(x.h(d,"reading")).h(0,"rsi")!=null},
$S:4}
D.eFW.prototype={
$2(d,e){return B.i.aQ(D.aH8(d),D.aH8(e))},
$S:40}
D.eFX.prototype={
$1(d){return J.z(D.jl(J.t(d,"reading")).h(0,"bias"),"bullish")},
$S:4}
D.eFY.prototype={
$1(d){return J.z(D.jl(J.t(d,"reading")).h(0,"bias"),"bearish")},
$S:4}
D.eFZ.prototype={
$0(){return this.a.aQO("What is happening with "+A.v(J.t(this.b,"asset"))+" right now, and what would make the agent buy or sell it?")},
$S:0}
D.eFx.prototype={
$0(){return this.a.JV(this.b)},
$S:0}
D.eFy.prototype={
$0(){var x=this.a
return x.JV(x.y.a.a)},
$S:0}
D.du0.prototype={
$1(d){return this.a.d.h(0,d.a)===d.b.c},
$S:z+7}
D.du1.prototype={
$0(){return A.VF(this.a)},
$S:0}
D.du2.prototype={
$0(){return this.a.a.cZH('I just read the lesson "'+this.b.b+'". Can you explain it again with a live example from the markets right now?')},
$S:0}
D.du3.prototype={
$0(){this.a.a.rr()
A.VF(this.b)},
$S:0}
D.du_.prototype={
$0(){var x=this.a
return x.l(new D.dtZ(x,this.b,this.c))},
$S:0}
D.dtZ.prototype={
$0(){var x=this.c
this.a.d.n(0,this.b,x)
return x},
$S:0};(function aliases(){var x=D.aP9.prototype
x.bBg=x.t})();(function installTearOffs(){var x=a._instance_0u,w=a._instance_1u
var v
x(v=D.aH7.prototype,"gclg","clh",1)
x(v,"gcyF","a3h",0)
x(v=D.aH9.prototype,"gcfY","R9",0)
w(v,"gcfW","JV",3)})();(function inheritance(){var x=a.mixinHard,w=a.inheritMany,v=a.inherit
w(A.ag,[D.P7,D.ady,D.XA,D.a0w])
w(A.ah,[D.aH7,D.be1,D.aP9,D.bkI])
w(A.ks,[D.eFw,D.eF8,D.eFp,D.eFf,D.eFl,D.eF_,D.eF1,D.eFc,D.eFu,D.cWu,D.cWs,D.cWt,D.cWr,D.cWv,D.cWx,D.cWz,D.ffk,D.fze,D.fDy,D.fAk,D.fHz,D.fEp,D.eG5,D.eG_,D.eFF,D.eFA,D.eFB,D.eFV,D.eFE,D.eFT,D.eFS,D.eFH,D.eFN,D.eFI,D.eFJ,D.eFK,D.eFL,D.eFM,D.eFX,D.eFY,D.du0])
w(A.mG,[D.eFh,D.eF9,D.eFn,D.eFo,D.eFq,D.eFr,D.eFj,D.eFk,D.eFv,D.eFs,D.eFt,D.eF0,D.eF2,D.eFb,D.eFa,D.eF5,D.eF4,D.eF6,D.eF3,D.eF7,D.eEZ,D.eEY,D.cWn,D.cWq,D.cWp,D.cWo,D.eG4,D.eG3,D.eFO,D.eFP,D.eFU,D.eFG,D.eFz,D.eFC,D.eG1,D.eG2,D.eFD,D.eFQ,D.eFR,D.eFZ,D.eFx,D.eFy,D.du1,D.du2,D.du3,D.du_,D.dtZ])
w(A.ml,[D.eFi,D.eFm,D.eFe,D.eFd,D.eFg,D.cWw,D.cWy,D.fEq,D.eG0,D.eFW])
w(A.qc,[D.be2,D.bvU])
w(A.aK,[D.yU,D.a1s,D.nk,D.uq,D.a_v])
v(D.aH9,D.aP9)
x(D.aP9,A.cf)})()
A.nN(b.typeUniverse,JSON.parse('{"ady":{"ag":[],"w":[]},"XA":{"ag":[],"w":[]},"a0w":{"ag":[],"w":[]},"P7":{"ag":[],"w":[]},"aH7":{"ah":["P7"]},"be1":{"ah":["ady"]},"be2":{"aB":[]},"bvU":{"aB":[]},"aH9":{"ah":["XA"]},"bkI":{"ah":["a0w"]}}'))
var y=(function rtii(){var x=A.aD
return{c:x("ls<u?>"),D:x("Ex"),V:x("U<ab>"),O:x("U<u>"),t:x("U<aa<q,@>>"),v:x("U<hP>"),L:x("U<+(q,q)>"),s:x("U<q>"),p:x("U<w>"),h:x("U<a_v>"),r:x("U<nk>"),n:x("U<G>"),P:x("aa<q,@>"),f:x("aa<@,@>"),a:x("cw"),N:x("q"),E:x("Y<uq>"),q:x("p9"),y:x("Q"),z:x("@"),S:x("H"),g:x("ai<@>?"),H:x("~")}})();(function constants(){var x=a.makeConstList
C.mV=new A.u(1,0.08627450980392157,0.10588235294117647,0.1803921568627451,B.q)
C.dN=new A.u(1,0.5411764705882353,0.5607843137254902,0.6392156862745098,B.q)
C.yG=new A.u(1,0.0392156862745098,0.050980392156862744,0.09411764705882353,B.q)
C.yI=new A.u(1,0.9294117647058824,0.9372549019607843,0.9803921568627451,B.q)
C.dO=new A.u(1,0.5529411764705883,0.5843137254901961,0.6705882352941176,B.q)
C.lO=new A.u(1,0.08627450980392157,0.09019607843137255,0.11372549019607843,B.q)
C.eB=new A.u(1,0.12156862745098039,0.7490196078431373,0.592156862745098,B.q)
C.wA=new A.u(1,0.14901960784313725,0.17647058823529413,0.27058823529411763,B.q)
C.wC=new A.u(1,0.9058823529411765,0.9098039215686274,0.9411764705882353,B.q)
C.a_m=new A.u(1,0.06666666666666667,0.08235294117647059,0.1607843137254902,B.q)
C.NM=new A.u(1,0.12549019607843137,0.14901960784313725,0.23137254901960785,B.q)
C.a_w=new A.u(1,0.9725490196078431,0.9450980392156862,0.9490196078431372,B.q)
C.uO=new A.u(1,0.13725490196078433,0.16470588235294117,0.25882352941176473,B.q)
C.NV=new A.u(1,0.9372549019607843,0.9411764705882353,0.9607843137254902,B.q)
C.ed=new A.u(1,0.07058823529411765,0.0784313725490196,0.10980392156862745,B.q)
C.fs=new A.u(1,0.9411764705882353,0.33725490196078434,0.41568627450980394,B.q)
C.a0a=new A.u(1,0.9568627450980393,0.9607843137254902,0.9803921568627451,B.q)
C.a0c=new A.u(1,0.11372549019607843,0.13725490196078433,0.2196078431372549,B.q)
C.bE5=new A.P(0,0,0,7)
C.bFI=new A.P(12,8,12,6)
C.bGG=new A.P(16,10,16,30)
C.bH1=new A.P(16,4,16,40)
C.bH4=new A.P(16,6,16,16)
C.ao8=new A.P(16,6,16,40)
C.bHc=new A.P(16,8,16,40)
C.bJY=new A.P(4,0,4,8)
C.bKg=new A.P(4,6,4,14)
C.bKt=new A.P(6,0,6,14)
C.bT5=new A.a_(62840,"MaterialIcons",!1)
C.bVo=new A.a_(983325,"MaterialIcons",!1)
C.aso=new A.a_(983635,"MaterialIcons",!0)
C.asa=new A.a_(983372,"MaterialIcons",!1)
C.bWZ=new A.ae(C.asa,18,C.eB,null,null,null)
C.bXq=new A.ae(B.xd,16,null,null,null,null)
C.c0p=new A.ae(B.r8,20,B.c,null,null,null)
C.c2D=new A.ae(B.xd,18,null,null,null,null)
C.c4G=new A.ae(B.QB,18,null,null,null,null)
C.cNh=x([B.dx,B.fw,B.im],y.O)
C.ca5=new A.a7(B.ay,B.aC,B.x,C.cNh,null,null)
C.aCC=x([C.fs,B.at,C.eB],y.O)
C.ca6=new A.a7(B.a5,B.a9,B.x,C.aCC,null,null)
C.dqm=x([0,0.33,1],y.n)
C.cbS=new A.a7(B.a5,B.a9,B.x,C.aCC,C.dqm,null)
C.doL=x([B.dx,B.im,B.bA],y.O)
C.cdK=new A.a7(B.ay,B.aC,B.x,C.doL,null,null)
C.cnz=x([12,24,48],A.aD("U<H>"))
C.f5f=new A.y("The idea","Trading means buying something and selling it later. You make money when you sell for more than you paid, and you lose money when you sell for less. That is all a trade is.")
C.eXW=new A.y("Why prices move","Every price is set by buyers and sellers. When more people want to buy than sell, the price goes up. When more want to sell, it goes down. A chart is simply a picture of that tug of war over time.")
C.eYS=new A.y("Nobody knows the future","No person, app or AI can know for sure where a price goes next. Good traders do not guess. They follow clear rules, keep losses small, and let the winners pay for the losers.")
C.f4Y=new A.y("Why pretend money first","This agent uses Alpaca paper money: real prices, fake dollars. You can learn every step, make mistakes and see real results without risking a cent. Professionals practise this way too.")
C.cYJ=x([C.f5f,C.eXW,C.eYS,C.f4Y],y.L)
C.d9y=x(["When you buy","When you sell for more than you paid","When the market opens"],y.s)
C.hOY=new D.nk("When do you make money on a trade?",C.d9y,1,"Profit only exists after you sell higher than you bought.")
C.d4g=x(["More buyers than sellers","The app","The time of day"],y.s)
C.hOS=new D.nk("What makes a price go up?",C.d4g,0,"More people wanting to buy pushes the price up.")
C.dwz=x([C.hOY,C.hOS],y.r)
C.hKL=new D.uq("basics","What trading really is","Buyers, sellers and why prices move",4,B.l5,B.at,"basics",C.cYJ,C.dwz)
C.bW1=new A.a_(983780,"MaterialIcons",!1)
C.eOF=new A.y("One candle = one time slice","On this chart every candle is 5 minutes. It shows four prices: where it started (open), where it ended (close), the highest point (high) and the lowest point (low).")
C.eWi=new A.y("The colours","Green candle: the price closed HIGHER than it opened, buyers won those 5 minutes. Yellow candle: it closed LOWER, sellers won. Many apps use red instead of yellow, it means the same thing.")
C.f6r=new A.y("Body and wicks","The thick part (the body) runs from open to close. The thin lines (the wicks) show how far the price went up or down before coming back. A long wick on top means buyers pushed up but sellers pushed it back down.")
C.f3z=new A.y("Reading a row of candles","Several green candles in a row, each closing higher, show buyers in control. Many yellow ones closing lower show sellers in control. Candles that go up and down with no direction mean the market is undecided.")
C.cf9=x([C.eOF,C.eWi,C.f6r,C.f3z],y.L)
C.d9F=x(["It closed higher than it opened","It is a good time to buy","The market is closed"],y.s)
C.hOW=new D.nk("A green candle means...",C.d9F,0,"Colour only tells you if it closed above or below where it opened.")
C.cFZ=x(["1 day","5 minutes","1 hour"],y.s)
C.hOM=new D.nk("On this chart one candle covers...",C.cFZ,1,"The agent works with 5-minute candles.")
C.dfD=x([C.hOW,C.hOM],y.r)
C.hKQ=new D.uq("candles","Reading candles","Open, close, high and low in one shape",5,C.bW1,C.eB,"candles",C.cf9,C.dfD)
C.eZZ=new A.y("Bullish","An uptrend. The price makes higher highs and higher lows, like climbing stairs. Buyers are in control. Traders call this bullish (a bull attacks upward with its horns).")
C.f7l=new A.y("Bearish","A downtrend. Lower highs and lower lows, like walking down stairs. Sellers are in control. This is bearish (a bear swipes downward).")
C.ePX=new A.y("Sideways","The price bounces between a ceiling and a floor with no clear direction. Most trading signals fail here, so the best move is often to wait.")
C.f1J=new A.y("The golden rule","Trade WITH the trend, not against it. Buying in a downtrend because it looks cheap is how most beginners lose. The agent only buys when the trend turns up.")
C.d7O=x([C.eZZ,C.f7l,C.ePX,C.f1J],y.L)
C.d61=x(["Bearish","Bullish","Sideways"],y.s)
C.hOX=new D.nk("Higher highs and higher lows means...",C.d61,1,"Climbing stairs = uptrend = bullish.")
C.d9O=x(["Work best","Often fail","Are always right"],y.s)
C.hOP=new D.nk("In a sideways market, signals...",C.d9O,1,"With no direction, signals flip back and forth.")
C.dx5=x([C.hOX,C.hOP],y.r)
C.hKI=new D.uq("trend","Trends: up, down, sideways","Bullish, bearish and how to tell",5,B.nf,B.cd,"trend",C.d7O,C.dx5)
C.f8l=new A.y("What an average line is","A moving average is the average closing price of the last few candles, drawn as a smooth line. It hides the small wiggles so you can see the real direction.")
C.eNQ=new A.y("Fast line (pink)","The average of the last 9 candles, about 45 minutes. It reacts quickly to new moves.")
C.ePs=new A.y("Slow line (purple)","The average of the last 21 candles, about 1 hour 45 minutes. It moves slowly and shows the bigger direction.")
C.f00=new A.y("How to read them","Fast line ABOVE slow line: recent prices are higher than older ones, the trend is up. Fast line BELOW: the trend is down. When the price itself is above both lines, buyers are strong.")
C.dqz=x([C.f8l,C.eNQ,C.ePs,C.f00],y.L)
C.dFG=x(["45 minutes","1 day","1 week"],y.s)
C.hOZ=new D.nk("The pink fast line averages about...",C.dFG,0,"9 candles x 5 minutes = 45 minutes.")
C.dBm=x(["Trend is up","Trend is down","Market closed"],y.s)
C.hOR=new D.nk("Fast line above slow line means...",C.dBm,0,"Recent prices are higher than older prices.")
C.dmv=x([C.hOZ,C.hOR],y.r)
C.hKK=new D.uq("ma","Moving averages","The pink fast line and the purple slow line",6,F.xk,B.bA,"ma",C.dqz,C.dmv)
C.eVX=new A.y("Buy signal","When the fast line crosses UP through the slow line, the short-term trend has just turned up. That moment is the buy signal. The agent buys $50 at that point.")
C.eY4=new A.y("Sell signal","When the fast line crosses back DOWN through the slow line, the up move is over. That is the sell signal, and the agent closes the trade.")
C.f1U=new A.y("Why it must be fresh","If the cross happened an hour ago, the easy part of the move may be gone. Buying late means buying high. So the agent only acts on a cross that happened since its last check, never on an old one.")
C.f3S=new A.y("The weakness","In sideways markets the lines cross back and forth and give false signals. That is why every trade also has a stop loss: when a signal is wrong, the loss stays small.")
C.dut=x([C.eVX,C.eY4,C.f1U,C.f3S],y.L)
C.dsG=x(["Crosses above the slow line","Crosses below the slow line","Is flat"],y.s)
C.hOQ=new D.nk("The buy signal is when the fast line...",C.dsG,0,"Crossing up = trend turning up.")
C.dEE=x(["To avoid buying late","The app is slow","Old crosses are illegal"],y.s)
C.hOK=new D.nk("Why does the agent skip old crosses?",C.dEE,0,"A late entry means buying after most of the move.")
C.d4m=x([C.hOQ,C.hOK],y.r)
C.hKN=new D.uq("cross","The crossover signal","Exactly when the agent buys and sells",6,B.arj,B.b2,"cross",C.dut,C.d4m)
C.bVx=new A.a_(983477,"MaterialIcons",!1)
C.f1s=new A.y("What RSI measures","RSI (Relative Strength Index) compares the size of recent rises with recent falls and gives a number from 0 to 100. Above 50, rises have been bigger. Below 50, falls have been bigger.")
C.eRE=new A.y("Above 70: stretched","The price rose very fast. It is called overbought. It often pauses or pulls back, so buying right then is risky. It can still keep rising in a strong trend.")
C.f1z=new A.y("Below 30: oversold","The price fell very fast. It often bounces, but in a strong downtrend it can stay low. Oversold is not a reason to buy on its own.")
C.f0I=new A.y("How to use it","Use RSI as a second opinion. A buy signal with RSI between 50 and 70 is healthy. A buy signal with RSI above 75 means the move may already be tired.")
C.d4J=x([C.f1s,C.eRE,C.f1z,C.f0I],y.L)
C.dfu=x(["Oversold","Overbought","Neutral"],y.s)
C.hOJ=new D.nk("RSI above 70 is called...",C.dfu,1,"It rose fast and is stretched.")
C.hOV=new D.nk("RSI below 30 always means buy.",H.a6Z,1,"Falling markets can stay oversold. It is a hint, not a signal.")
C.dFy=x([C.hOJ,C.hOV],y.r)
C.hKP=new D.uq("rsi","RSI: momentum","Is the move strong, stretched or tired?",5,C.bVx,B.cD,"rsi",C.d4J,C.dFy)
C.eUO=new A.y("Decide the exit before you enter","Every agent trade has two exits set before it starts. Take profit at +3% (about +$1.50 on $50) and stop loss at -1.5% (about -$0.75).")
C.eIK=new A.y("Win twice what you risk","The win (+$1.50) is twice the loss (-$0.75). Because of that, you only need to be right about 1 trade in 3 to break even. Being right half the time would be clearly profitable.")
C.eP5=new A.y("Size matters most","The agent uses $50 per trade even though the paper account has $100,000. Small trades mean no single mistake can hurt much. Pros rarely risk more than 1 to 2 percent of their money on one trade.")
C.eZk=new A.y("Never move the stop","The biggest beginner mistake is hoping a losing trade comes back and moving the stop lower. Small losses are the cost of doing business. Big losses end accounts.")
C.drR=x([C.eUO,C.eIK,C.eP5,C.eZk],y.L)
C.dmp=x(["1 in 3 trades","9 in 10 trades","Every trade"],y.s)
C.hP_=new D.nk("With +$1.50 wins and -$0.75 losses, to break even you must win about...",C.dmp,0,"One win (+1.50) pays for two losses (-1.50).")
C.de7=x(["Move the stop lower","Let the stop loss work","Buy more"],y.s)
C.hON=new D.nk("A trade is losing. The best move is...",C.de7,1,"The stop exists to keep losses small.")
C.cXA=x([C.hP_,C.hON],y.r)
C.hKJ=new D.uq("risk","Risk: stop loss and take profit","Why small losses beat big wins",7,B.r9,C.fs,"risk",C.drR,C.cXA)
C.bW7=new A.a_(983848,"MaterialIcons",!1)
C.eSe=new A.y("Bad days happen","Some days every signal fails. The danger is trying to win it back by trading more and bigger. That is called revenge trading and it is how small losses become big ones.")
C.eXp=new A.y("Daily stop: $10","If the day loses $10, the agent makes no more buys until tomorrow. It walks away and lets the market calm down.")
C.eZd=new A.y("Total brake: $25","If total losses reach $25, the agent pauses completely until you review what happened and turn it back on. Reviewing is the most important part of learning.")
C.eQE=new A.y("Your own rules","When you trade yourself, set the same kind of limits before the day starts, and keep them even when it hurts.")
C.dxm=x([C.eSe,C.eXp,C.eZd,C.eQE],y.L)
C.diy=x(["Doubles the next trade","Stops buying for the day","Sells everything forever"],y.s)
C.hOT=new D.nk("After losing $10 in a day, the agent...",C.diy,1,"The daily stop prevents revenge trading.")
C.dA0=x([C.hOT],y.r)
C.hKH=new D.uq("brakes","Daily stop and total brake","Protecting your account from bad days",4,C.bW7,B.n4,"brakes",C.dxm,C.dA0)
C.aj0=new A.u(1,0.3843137254901961,0.49411764705882355,0.9176470588235294,B.q)
C.eXa=new A.y("Stocks and funds","SPY, QQQ, Apple, Microsoft, Nvidia, Tesla and Amazon trade on US market days from 9:30 AM to 4:00 PM Eastern Time. Closed at night, on weekends and on holidays.")
C.eY1=new A.y("Overnight gaps","News can come out while the stock market is closed, so the next morning it can open far higher or lower. That is why the agent sells stocks by 3:55 PM and never holds them overnight.")
C.eV8=new A.y("Crypto","Bitcoin, Ethereum and Solana trade all day, every day, including weekends. More hours means more chances, but crypto also moves faster and harder, so stops get hit more often.")
C.f3k=new A.y("Funds vs single companies","SPY holds the 500 biggest US companies and QQQ holds 100 big tech companies, so they move more calmly. One company like Tesla can jump a lot on its own news.")
C.cSE=x([C.eXa,C.eY1,C.eV8,C.f3k],y.L)
C.d7N=x(["Only weekdays","All day, every day","Only at night"],y.s)
C.hOU=new D.nk("When can Bitcoin be traded?",C.d7N,1,"Crypto never closes.")
C.d4X=x(["To avoid overnight gaps","Stocks expire","It is the law"],y.s)
C.hOL=new D.nk("Why sell stocks before the close?",C.d4X,0,"Overnight news can make the price jump at the open.")
C.dnv=x([C.hOU,C.hOL],y.r)
C.hKO=new D.uq("hours","Stocks vs crypto","Market hours, weekends and jumpiness",5,B.jT,C.aj0,"hours",C.cSE,C.dnv)
C.f1V=new A.y("Judge many trades, not one","One trade tells you nothing. Luck decides single trades. After 20 to 50 trades you start to see if a method really works. That is why the plan is 2 to 4 weeks of paper trading.")
C.eNa=new A.y("Keep a journal","For each trade write: why you bought, where your stop and target were, what happened, and what you learned. The Pretend trades list on the main screen is the agent's journal.")
C.eNJ=new A.y("Follow the rules exactly","The point of the agent is to follow rules perfectly, with no fear and no greed. Check that it did. If it ever breaks a rule, that is a bug to fix before real money.")
C.eV9=new A.y("Before real money","Real money comes only after a long paper test with a positive result, a full review, and money you can truly afford to lose. Never borrow to trade.")
C.dvL=x([C.f1V,C.eNa,C.eNJ,C.eV9],y.L)
C.dCg=x(["1","3","20 or more"],y.s)
C.hOI=new D.nk("How many trades before judging a method?",C.dCg,2,"Small samples are mostly luck.")
C.dF6=x(["Borrowed","Money you can afford to lose","Rent money"],y.s)
C.hOO=new D.nk("Money for trading should be...",C.dF6,1,"Never trade money you need.")
C.dFt=x([C.hOI,C.hOO],y.r)
C.hKM=new D.uq("practice","Practising like a pro","Journals, patience and judging results",5,B.m_,B.bh,"practice",C.dvL,C.dFt)
C.a6p=x([C.hKL,C.hKQ,C.hKI,C.hKK,C.hKN,C.hKP,C.hKJ,C.hKH,C.hKO,C.hKM],A.aD("U<uq>"))
C.dbe=x(["Which market looks strongest right now?","Is Bitcoin going up or down right now?","Why has the agent not bought yet?","Explain RSI like I am new","How do I know when to sell?","What does bullish and bearish mean?"],y.s)
C.c_W=new A.ae(B.tr,5,B.b2,null,null,null)
C.eAi=new A.D(B.hv,C.c_W,null)
C.f9J=new A.b2(1,"Live signals",C.asa)
C.f9R=new A.b2(B.n4,C.aso,"Moving sideways")
C.faq=new A.b2(2,"Ask tutor",B.xd)
C.faI=new A.b2(B.b2,B.oS,"Waiting for data")
C.fbs=new A.b2(0,"Lessons",B.o_)
C.fbG=new A.b2(C.eB,B.nf,"Trend is UP")
C.fcH=new A.b2(C.fs,B.a4L,"Trend is DOWN")
C.bZ9=new A.ae(B.tr,8,C.eB,null,null,null)
C.fI8=new A.F(!0,C.eB,null,null,null,null,11.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.h7G=new A.C("LIVE",null,C.fI8,null,null,null,null,null,null,null,null,null)
C.dts=x([C.bZ9,B.bk,C.h7G],y.p)
C.fll=new A.c3(B.aL,B.e,B.M,B.l,null,B.p,null,0,C.dts,null)
C.bZB=new A.ae(B.r8,14,B.c,null,null,null)
C.hex=new A.C("Learn",null,B.np,null,null,null,null,null,null,null,null,null)
C.d90=x([C.bZB,B.db,C.hex],y.p)
C.flo=new A.c3(B.aL,B.e,B.M,B.l,null,B.p,null,0,C.d90,null)
C.fCb=new A.F(!0,B.c,null,null,null,null,36,B.F,null,-0.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.fGF=new A.F(!0,C.eB,null,null,null,null,11.5,B.O,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.fI4=new A.F(!0,C.fs,null,null,null,null,11.5,B.O,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.fSa=new A.C("Ask the tutor",null,B.cb,null,null,null,null,null,null,null,null,null)
C.fSi=new A.C("The $25 brake paused the agent. Turning it back on means you have reviewed it. The running demo profit and loss starts again from $0.",null,null,null,null,null,null,null,null,null,null,null)
C.fTp=new A.C("10 short lessons. Each one shows you the idea live on the real markets the agent is watching.",null,B.Fy,null,null,null,null,null,null,null,null,null)
C.fWo=new A.C("Turn the agent back on?",null,null,null,null,null,null,null,null,null,null,null)
C.h_m=new A.C("Scan now",null,B.cb,null,null,null,null,null,null,null,null,null)
C.fPk=new A.F(!0,B.c,null,null,null,null,9.5,B.u,null,0.8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.h0G=new A.C("PRETEND MONEY",null,C.fPk,null,null,null,null,null,null,null,null,null)
C.h1o=new A.C("Paper balance",null,B.WG,null,null,null,null,null,null,null,null,null)
C.hbI=new A.C("Learn to trade",null,B.m6,null,null,null,null,null,null,null,null,null)
C.heb=new A.C("Turn back on",null,null,null,null,null,null,null,null,null,null,null)
C.hKV=new D.yU("Nvidia","N",B.Nm)
C.hKX=new D.yU("Ethereum","\u039e",C.aj0)
C.hL_=new D.yU("S&P 500 fund","S&P",B.cd)
C.hL0=new D.yU("Bitcoin","B",E.wy)
C.hL2=new D.yU("Tesla","T",B.bE)
C.hL3=new D.yU("Microsoft","M",B.bp)
C.hL4=new D.yU("Nasdaq 100 fund","Q",B.cD)
C.bnw=new A.u(1,0.6,0.27058823529411763,1,B.q)
C.hL6=new D.yU("Solana","S",C.bnw)
C.hL8=new D.yU("Apple","A",B.cQ)
C.hLb=new D.yU("Amazon","a",B.at)})()};
(a=>{a["Om4McKWOH4GSHD+5h45UBCG5394="]=a.current})($__dart_deferred_initializers__);