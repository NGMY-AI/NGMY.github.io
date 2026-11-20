((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,I,K,E,D={
i4v(){return new D.atH(null)},
aH9(d){var x=J.a5(d),w=D.hL(x.h(d,"reading")).h(0,"action"),v=J.k(w==null?"":w)
if(B.a.X(v,"BUY"))return 0
if(B.a.X(v,"SELL"))return 1
if(!J.z(x.h(d,"open"),!0))return 4
return 2+(100-D.fg(D.hL(x.h(d,"reading")).h(0,"score")))/1000},
fzK(d){var x
switch(d){case"SPY":x=C.hO_
break
case"QQQ":x=C.hO4
break
case"AAPL":x=C.hO8
break
case"MSFT":x=C.hO3
break
case"NVDA":x=C.hNV
break
case"TSLA":x=C.hO2
break
case"AMZN":x=C.hOb
break
case"BTC/USD":x=C.hO0
break
case"ETH/USD":x=C.hNX
break
case"SOL/USD":x=C.hO6
break
default:x=new D.yU(d,d.length===0?"?":d[0],B.b2)
break}return x},
hj9(d,e){var x,w,v=null,u=d.split("/")
if(u.length===2&&C.a8u.am(0,u[0])&&C.a8u.am(0,u[1])){u=d.split("/")
x=new D.fuE(e)
return new A.a6(e*1.25,e,new A.an(B.a0,v,B.ad,B.t,A.a([A.ao(v,x.$1(u[0]),v,v,0,v,0,v),A.ao(0,x.$1(u[1]),v,v,v,0,v,v)],y.p),v),v)}w=D.fzK(d)
x=w.b
return A.o(B.z,A.c(x,v,v,v,v,v,v,A.l(v,v,B.c,v,v,v,v,v,v,v,v,x.length>1?e*0.32:e*0.52,v,v,B.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),B.f,v,v,new A.n(w.c,v,v,v,v,v,B.a6),v,e,v,v,v,v,v,e)},
hk_(d){var x,w=y.g.a(d.h(0,"markets"))
if(w==null)w=B.cb
w=J.d1(w,y.f)
w=A.cE(w,new D.fA1(),w.$ti.k("M.E"),y.P)
x=A.B(w,A.a4(w).k("M.E"))
return x},
hL(d){var x=y.N,w=y.z
return y.f.b(d)?A.a1(d,x,w):A.S(x,w)},
fg(d){var x
if(typeof d=="number")x=d
else{x=A.cG(A.v(d==null?"":d))
if(x==null)x=0}return x},
aRl(d){var x=y.g.a(D.hL(J.t(d,"chart")).h(0,"points"))
if(x==null)x=B.cb
x=J.d1(x,y.f)
x=A.cE(x,new D.fEl(),x.$ti.k("M.E"),y.P)
x=A.B(x,A.a4(x).k("M.E"))
return x},
ip(d,e,f){var x,w=A.nT(B.i.aa(Math.abs(d),2),A.af("\\B(?=(\\d{3})+(?!\\d))",!0,!1,!1,!1),new D.fB7(),null)
if(d<0)x="-"
else x=f&&d>0?"+":""
return x+(e?"$":"")+w},
aQA(d){var x=B.o.F(A.d4(d),12)===0?12:B.o.F(A.d4(d),12),w=B.a.b1(B.o.v(A.fF(d)),2,"0"),v=A.d4(d)<12?"AM":"PM"
return""+x+":"+w+" "+v},
bF3(d){var x=d.ab(),w=new D.fIm(),v=w.$3(A.bD(x),3,2).bN(252e8),u=w.$3(A.bD(x),11,1).bN(216e8),t=x.bN(0-A.du(0,!x.cV(v)&&x.cV(u)?4:5,0,0,0,0).a)
return A.c0(A.bD(t),A.bL(t),A.bW(t),A.d4(t),A.fF(t),0,0,0)},
ifv(d){var x,w=A.bh(A.v(d==null?"":d))
if(w==null)return""
x=D.bF3(w)
return B.iK[A.bL(x)-1]+" "+A.bW(x)+" at "+D.aQA(x)+" ET"},
ilY(d){var x,w,v=d.split(", ")
if(v.length>=4){x=v[1]
w=v[3]
return x+", "+A.aL(w," ET","")}return d},
hDz(d){return d.length===0?d:d[0].toUpperCase()+B.a.aY(d,1)},
hG1(){var x=D.bF3(new A.V(Date.now(),0,!1).ab()),w=B.o.F(A.fF(x),15)
return"at "+D.aQA(A.c0(A.bD(x),A.bL(x),A.bW(x),A.d4(x),A.fF(x),0,0,0).bN(A.du(0,0,0,0,15-w,0).a))+" ET"},
icZ(d){if(B.a.X(d,"BUY"))return C.e7
if(B.a.X(d,"SELL"))return C.eI
if(B.a.X(d,"UP"))return B.aU
if(B.a.X(d,"DOWN"))return C.eI
if(B.a.X(d,"MARKET CLOSED"))return B.bP
return B.k7},
hH_(c1,c2,c3,c4,c5){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9=null,b0="entry",b1="up",b2="worked",b3="of",b4="mom1h",b5="typicalMin",b6=J.a5(c2),b7=D.hL(b6.h(c2,"reading")),b8=D.hL(b7.h(0,"timing")),b9=D.aRl(c2),c0=b6.h(c2,"asset")
if(c0==null)c0=b6.h(c2,"symbol")
x=J.k(c0==null?"":c0)
c0=b7.h(0,"action")
w=J.k(c0==null?"WAITING FOR DATA":c0)
v=D.icZ(w)
u=B.i.D(D.fg(b7.h(0,"score")),0,100)
c0=y.g.a(b7.h(0,"notes"))
if(c0==null)c0=B.cb
c0=J.b8(c0,new D.fFc(),y.N)
t=A.B(c0,c0.$ti.k("aj.E"))
s=D.fg(b6.h(c2,"changePct"))
c0=c1.a
r=c0?B.c.j(0.92):C.lR
q=A.m(20)
p=!B.a.X(w,"BUY")
if(!p||B.a.X(w,"SELL"))o=v.j(0.6)
else o=c0?B.c:C.uQ
o=A.K(o,B.r,!p||B.a.X(w,"SELL")?1.6:1)
n=y.V
m=A.a([new A.ab(0,B.H,c1.ga9z(),B.hS,14)],n)
l=D.hj9(x,28)
p=A.c(x,a9,a9,a9,a9,a9,a9,A.l(a9,a9,c0?C.dN:B.c,a9,a9,a9,a9,a9,a9,a9,a9,14,a9,a9,B.F,a9,a9,!0,a9,a9,a9,a9,a9,a9,a9,a9),a9,a9,a9)
k=b6.h(c2,"name")
k=J.k(k==null?"":k)
j=y.p
k=A.a([l,B.ar,A.E(A.x(A.a([p,A.c(k,a9,a9,a9,a9,a9,a9,A.l(a9,a9,c0?C.dp:C.dq,a9,a9,a9,a9,a9,a9,a9,a9,11,a9,a9,a9,a9,a9,!0,a9,a9,a9,a9,a9,a9,a9,a9),a9,a9,a9)],j),B.B,a9,B.e,B.h,0,B.p),1)],j)
if(b9.length>2)B.d.u(k,A.a([new A.a6(58,26,A.b4(a9,a9,a9,new D.aKv(b9,s>=0?C.e7:C.eI,a9),B.az),a9),B.ar],j))
p=D.hGU(c2)
p=A.c(p,a9,a9,a9,a9,a9,a9,A.l(a9,a9,c0?C.dN:B.c,a9,a9,a9,a9,a9,a9,a9,a9,14,a9,a9,B.F,a9,a9,!0,a9,a9,a9,a9,a9,a9,a9,a9),a9,a9,a9)
l=s>=0
i=l?"+":""
h=B.i.aa(s,2)
g=J.z(b6.h(c2,"kind"),"forex")?"30m":"4h"
k.push(A.x(A.a([p,A.c(i+h+"% \xb7 "+g,a9,a9,a9,a9,a9,a9,A.l(a9,a9,l?C.e7:C.eI,a9,a9,a9,a9,a9,a9,a9,a9,11,a9,a9,B.P,a9,a9,!0,a9,a9,a9,a9,a9,a9,a9,a9),a9,a9,a9)],j),B.dI,a9,B.e,B.h,0,B.p))
p=A.a([A.A(k,B.l,a9,B.e,B.h,0,a9,a9)],j)
l=y.f
if(l.b(b7.h(0,b0))){k=D.hL(b7.h(0,b0))
f=J.z(k.h(0,"dir"),b1)
e=f?C.e7:C.eI
i=A.m(18)
h=A.ap(e,B.v,0.25)
h.toString
h=A.a([e,h],y.O)
n=A.a([new A.ab(0,B.H,e.j(0.35),B.cz,16)],n)
g=B.c.j(0.22)
g=A.o(a9,A.W(f?B.pQ:B.pP,B.c,a9,a9,a9,34),B.f,a9,a9,new A.n(g,a9,a9,a9,a9,a9,B.a6),a9,52,a9,a9,a9,a9,a9,52)
d=A.c(f?"ENTER UP NOW":"ENTER DOWN NOW",a9,a9,a9,a9,a9,a9,C.fG7,a9,a9,a9)
B.d.u(p,A.a([B.af,A.as(A.o(a9,A.x(A.a([g,B.ak,d,A.c(f?"BUY / CALL":"SELL / PUT",a9,a9,a9,a9,a9,a9,C.fHz,a9,a9,a9),B.O,A.A(A.a([A.x(A.a([A.c(A.v(k.h(0,"withinMin"))+" min",a9,a9,a9,a9,a9,a9,B.fp,a9,a9,a9),A.c("Enter within",a9,a9,a9,a9,a9,a9,F.WE,a9,a9,a9)],j),B.l,a9,B.e,B.h,0,B.p),A.o(a9,a9,B.f,B.jv,a9,a9,a9,30,a9,B.hL,a9,a9,a9,1),A.x(A.a([A.c("~"+A.v(k.h(0,"durationMin"))+" min",a9,a9,a9,a9,a9,a9,B.fp,a9,a9,a9),A.c("Duration",a9,a9,a9,a9,a9,a9,F.WE,a9,a9,a9)],j),B.l,a9,B.e,B.h,0,B.p),A.o(a9,a9,B.f,B.jv,a9,a9,a9,30,a9,B.hL,a9,a9,a9,1),A.x(A.a([A.c(A.v(k.h(0,b2))+" of "+A.v(k.h(0,b3)),a9,a9,a9,a9,a9,a9,B.fp,a9,a9,a9),A.c("Worked",a9,a9,a9,a9,a9,a9,F.WE,a9,a9,a9)],j),B.l,a9,B.e,B.h,0,B.p)],j),B.l,a9,B.b9,B.h,0,a9,a9)],j),B.l,a9,B.e,B.h,0,B.p),B.f,a9,a9,new A.n(a9,a9,a9,i,n,new A.a7(B.aX,B.b1,B.x,h,a9,a9),B.m),a9,a9,a9,a9,I.a1N,a9,a9,1/0),a9,a9,a9)],j))}if(c3!=null){n=A.m(10)
B.d.u(p,A.a([B.O,A.o(a9,A.A(A.a([C.c1Y,B.d9,A.E(A.c(c3+" \xb7 check before you act",a9,a9,a9,a9,a9,a9,C.fJn,a9,a9,a9),1)],j),B.l,a9,B.e,B.h,0,a9,a9),B.f,a9,a9,new A.n(a9,a9,a9,n,a9,C.ceA,B.m),a9,a9,a9,a9,B.fN,a9,a9,1/0)],j))}p.push(B.S)
n=v.j(0.15)
k=A.m(999)
k=A.a([A.o(a9,A.c(w,a9,a9,a9,a9,a9,a9,A.l(a9,a9,v,a9,a9,a9,a9,a9,a9,a9,a9,10.5,a9,a9,B.u,a9,a9,!0,a9,0.4,a9,a9,a9,a9,a9,a9),a9,a9,a9),B.f,a9,a9,new A.n(n,a9,a9,k,a9,a9,B.m),a9,a9,a9,a9,B.nY,a9,a9,a9),B.aY],j)
if(b7.h(0,"rsi")!=null){n=B.i.aa(D.fg(b7.h(0,"rsi")),0)
k.push(A.c("RSI "+n,a9,a9,a9,a9,a9,a9,A.l(a9,a9,c0?C.dp:C.dq,a9,a9,a9,a9,a9,a9,a9,a9,11,a9,a9,B.P,a9,a9,!0,a9,a9,a9,a9,a9,a9,a9,a9),a9,a9,a9))}if(b7.h(0,b4)!=null){n=D.fg(b7.h(0,b4))>=0?"+":""
i=B.i.aa(D.fg(b7.h(0,b4)),2)
B.d.u(k,A.a([B.ar,A.c("1h "+n+i+"%",a9,a9,a9,a9,a9,a9,A.l(a9,a9,D.fg(b7.h(0,b4))>=0?C.e7:C.eI,a9,a9,a9,a9,a9,a9,a9,a9,11,a9,a9,B.P,a9,a9,!0,a9,a9,a9,a9,a9,a9,a9,a9),a9,a9,a9)],j))}p.push(A.A(k,B.l,a9,B.e,B.h,0,a9,a9))
p.push(B.S)
p.push(A.cf(new D.fFd(u,c1)))
p.push(B.au)
n=A.c("Sellers",a9,a9,a9,a9,a9,a9,A.l(a9,a9,c0?C.dp:C.dq,a9,a9,a9,a9,a9,a9,a9,a9,10,a9,a9,a9,a9,a9,!0,a9,a9,a9,a9,a9,a9,a9,a9),a9,a9,a9)
k=B.i.aa(u,0)
k=A.c("Strength "+k+"/100",a9,a9,a9,a9,a9,a9,A.l(a9,a9,c0?C.dN:B.c,a9,a9,a9,a9,a9,a9,a9,a9,10.5,a9,a9,B.F,a9,a9,!0,a9,a9,a9,a9,a9,a9,a9,a9),a9,a9,a9)
p.push(A.A(A.a([n,B.aY,k,B.aY,A.c("Buyers",a9,a9,a9,a9,a9,a9,A.l(a9,a9,c0?C.dp:C.dq,a9,a9,a9,a9,a9,a9,a9,a9,10,a9,a9,a9,a9,a9,!0,a9,a9,a9,a9,a9,a9,a9,a9),a9,a9,a9)],j),B.l,a9,B.e,B.h,0,a9,a9))
p.push(B.O)
n=J.aS(c4?A.cS(t,0,A.dx(2,"count",y.S),A.T(t).c):t)
while(n.C()){k=n.gP(n)
i=A.W(B.r3,v,a9,a9,a9,4.5)
h=c0?C.dN:B.c
p.push(new A.D(B.na,new A.c3(B.aL,B.e,B.h,B.B,a9,B.p,a9,0,A.a([new A.D(B.hx,i,a9),B.xT,new A.bx(1,B.ba,A.c(k,a9,a9,a9,a9,a9,a9,new A.F(!0,h,a9,a9,a9,a9,12.3,a9,a9,a9,a9,a9,1.35,a9,a9,a9,a9,a9,a9,a9,a9,a9,a9,a9,a9,a9),a9,a9,a9),a9)],j),a9),a9))}if(J.z(b6.h(c2,"open"),!0)){a0=b8.h(0,"dir")
a1=a0!=null&&!J.z(a0,"none")&&b8.h(0,b5)!=null
if(!(J.z(b7.h(0,"bias"),"bullish")&&J.z(a0,b1)))a2=J.z(b7.h(0,"bias"),"bearish")&&J.z(a0,"down")
else a2=!0
b6=D.fg(b8.h(0,"enterWithinMin"))
a3=D.fg(b8.h(0,b3))>0?D.fg(b8.h(0,b2))/D.fg(b8.h(0,b3)):0
if(l.b(b7.h(0,b0))){b6=J.kr(a0)
n=b6.A(a0,b1)?"UP":"DOWN"
b6=b6.A(a0,b1)?C.e7:C.eI
a4=new A.y("Enter "+n+" now, see the sign above",b6)}else if(!a1||!a2)a4=C.eWT
else{if(!(b6>0))b6=C.eTb
else b6=a3<0.5?C.f3z:C.eSl
a4=b6}a5=a4.a
a6=a9
a7=a4.b
a6=a7
a8=a5
b6=c0?C.Hb:C.Hc
n=A.m(16)
l=A.K(c0?C.pB:C.pA,B.r,1.5)
k=A.W(B.o4,c0?C.dN:B.c,a9,a9,a9,16)
k=A.a([k,B.bg,A.c("DURATION",a9,a9,a9,a9,a9,a9,A.l(a9,a9,c0?C.dN:B.c,a9,a9,a9,a9,a9,a9,a9,a9,11.5,a9,a9,B.u,a9,a9,!0,a9,1,a9,a9,a9,a9,a9,a9),a9,a9,a9),B.aY],j)
if(a1){i=B.i.aa(D.fg(b8.h(0,"remainingMin")),0)
k.push(A.c("~"+i+" min left",a9,a9,a9,a9,a9,a9,A.l(a9,a9,c0?C.dN:B.c,a9,a9,a9,a9,a9,a9,a9,a9,15,a9,a9,B.u,a9,a9,!0,a9,a9,a9,a9,a9,a9,a9,a9),a9,a9,a9))}k=A.a([A.A(k,B.l,a9,B.e,B.h,0,a9,a9),B.O],j)
if(a1){i=A.E(D.hjk(c1,"Move started",B.i.aa(D.fg(b8.h(0,"ageMin")),0)+" min ago",a9),1)
h=A.E(D.hjk(c1,"Usually lasts","~"+B.i.aa(D.fg(b8.h(0,b5)),0)+" min",a9),1)
g=D.fg(b8.h(0,b3))>0?A.v(b8.h(0,b2))+" of "+A.v(b8.h(0,b3)):"\u2014"
if(a3>=0.55)d=C.e7
else d=a3<0.45?C.eI:B.k7
B.d.u(k,A.a([A.A(A.a([i,h,A.E(D.hjk(c1,"Worked",g,d),1)],j),B.l,a9,B.e,B.h,0,a9,a9),B.O],j))}i=a6.j(0.13)
h=A.m(10)
k.push(A.o(a9,A.c(a8,a9,a9,a9,a9,a9,a9,A.l(a9,a9,a6,a9,a9,a9,a9,a9,a9,a9,a9,12,a9,a9,B.F,a9,a9,!0,a9,a9,a9,a9,a9,a9,a9,a9),a9,a9,a9),B.f,a9,a9,new A.n(i,a9,a9,h,a9,a9,B.m),a9,a9,a9,a9,B.qZ,a9,a9,1/0))
k.push(B.au)
k.push(A.c("Estimates from this market's recent moves, not promises.",a9,a9,a9,a9,a9,a9,A.l(a9,a9,c0?C.dp:C.dq,a9,a9,a9,a9,a9,a9,a9,a9,10.5,a9,a9,a9,a9,a9,!0,a9,a9,a9,a9,a9,a9,a9,a9),a9,a9,a9))
B.d.u(p,A.a([B.S,A.o(a9,A.x(k,B.B,a9,B.e,B.h,0,B.p),B.f,a9,a9,new A.n(b6,a9,l,n,a9,a9,B.m),a9,a9,a9,a9,B.bl,a9,a9,1/0)],j))}if(c5!=null)p.push(new A.bK(B.a9,a9,a9,A.hr(C.bXO,A.c("Ask the tutor about "+x,a9,a9,a9,a9,a9,a9,a9,a9,a9,a9),c5,a9),a9))
return A.o(a9,A.x(p,B.B,a9,B.e,B.h,0,B.p),B.f,a9,a9,new A.n(r,a9,o,q,m,a9,B.m),a9,a9,a9,B.d4,B.bG,a9,a9,a9)},
hjk(d,e,f,g){var x=null,w=d.a,v=A.c(e,x,x,x,x,x,x,A.l(x,x,w?C.dp:C.dq,x,x,x,x,x,x,x,x,10.5,x,x,x,x,x,!0,x,x,x,x,x,x,x,x),x,x,x)
if(g==null)w=w?C.dN:B.c
else w=g
return A.x(A.a([v,A.c(f,x,x,x,x,x,x,A.l(x,x,w,x,x,x,x,x,x,x,x,13.5,x,x,B.F,x,x,!0,x,x,x,x,x,x,x,x),x,x,x)],y.p),B.B,x,B.e,B.h,0,B.p)},
hGU(d){var x=J.a5(d),w=D.fg(x.h(d,"price"))
if(!J.z(x.h(d,"kind"),"forex"))return D.ip(w,!0,!1)
return B.i.aa(w,w>=100?3:5)},
hy7(d,e){return new D.XB(d,e,null)},
eGK(d){var x
y.g.a(d)
x=d==null?B.cb:d
x=J.d1(x,y.f)
x=A.cE(x,new D.eGL(),x.$ti.k("M.E"),y.P)
x=A.B(x,A.a4(x).k("M.E"))
return x},
hC3(d){var x=J.t(d,"kind")
switch(J.k(x==null?"":x)){case"forex":x="Forex"
break
case"crypto":x="Crypto"
break
default:x="Stocks"
break}return x},
atH:function atH(d){this.a=d},
aH8:function aH8(d,e){var _=this
_.d=null
_.e=d
_.f=!0
_.r=!1
_.w=!0
_.x=!1
_.y=48
_.z=null
_.Q=e
_.as=!1
_.at=!0
_.c=_.a=_.ay=_.ax=null},
eFP:function eFP(d){this.a=d},
eFy:function eFy(d,e){this.a=d
this.b=e},
eFq:function eFq(d,e){this.a=d
this.b=e},
eFx:function eFx(d,e){this.a=d
this.b=e},
eFA:function eFA(d,e){this.a=d
this.b=e},
eFo:function eFo(){},
eFp:function eFp(d,e,f){this.a=d
this.b=e
this.c=f},
eFI:function eFI(){},
eFG:function eFG(d){this.a=d},
eFH:function eFH(d){this.a=d},
eFJ:function eFJ(d){this.a=d},
eFK:function eFK(d){this.a=d},
eFw:function eFw(d){this.a=d},
eFC:function eFC(d){this.a=d},
eFD:function eFD(d,e){this.a=d
this.b=e},
eFE:function eFE(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eFB:function eFB(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eFF:function eFF(){},
eFO:function eFO(d){this.a=d},
eFL:function eFL(d){this.a=d},
eFM:function eFM(d){this.a=d},
eFf:function eFf(d){this.a=d},
eFg:function eFg(d,e){this.a=d
this.b=e},
eFh:function eFh(d){this.a=d},
eFi:function eFi(d){this.a=d},
eFs:function eFs(){},
eFt:function eFt(d){this.a=d},
eFv:function eFv(){},
eFu:function eFu(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
eFr:function eFr(d,e){this.a=d
this.b=e},
eFl:function eFl(d,e){this.a=d
this.b=e},
eFk:function eFk(d,e){this.a=d
this.b=e},
eFm:function eFm(d){this.a=d},
eFj:function eFj(d){this.a=d},
eFz:function eFz(d,e){this.a=d
this.b=e},
eFn:function eFn(d,e){this.a=d
this.b=e},
eFN:function eFN(){},
eFe:function eFe(d){this.a=d},
eFd:function eFd(d){this.a=d},
ady:function ady(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
be3:function be3(){this.c=this.a=this.d=null},
cWt:function cWt(d,e){this.a=d
this.b=e},
cWC:function cWC(d){this.a=d},
cWA:function cWA(d,e){this.a=d
this.b=e},
cWy:function cWy(d,e){this.a=d
this.b=e},
cWz:function cWz(d,e){this.a=d
this.b=e},
cWx:function cWx(d){this.a=d},
cWw:function cWw(d){this.a=d},
cWB:function cWB(d){this.a=d},
cWv:function cWv(d){this.a=d},
cWu:function cWu(d){this.a=d},
be4:function be4(d,e,f,g,h,i,j,k){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.w=j
_.a=k},
cWD:function cWD(d){this.a=d},
cWF:function cWF(d,e){this.a=d
this.b=e},
cWE:function cWE(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
aKv:function aKv(d,e,f){this.b=d
this.c=e
this.a=f},
fg6:function fg6(){},
yU:function yU(d,e,f){this.a=d
this.b=e
this.c=f},
fuE:function fuE(d){this.a=d},
fA1:function fA1(){},
a1t:function a1t(d){this.a=d},
fEl:function fEl(){},
fB7:function fB7(){},
fIm:function fIm(){},
fFc:function fFc(){},
fFd:function fFd(d,e){this.a=d
this.b=e},
cC:function cC(d,e,f,g){var _=this
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
XB:function XB(d,e,f){this.c=d
this.d=e
this.a=f},
a_w:function a_w(d,e){this.a=d
this.b=e},
aHa:function aHa(d,e,f,g,h,i,j,k,l,m,n){var _=this
_.d=$
_.w=_.r=_.f=_.e=null
_.x=d
_.Q=_.z=_.y=!1
_.as=null
_.at=e
_.ax=f
_.ay=g
_.ch=!1
_.CW=h
_.cx=""
_.cy=!1
_.db="All"
_.dx=i
_.dy=j
_.fr=k
_.fx=l
_.fy=""
_.go=!1
_.bu$=m
_.a9$=n
_.c=_.a=null},
eFZ:function eFZ(){},
eGQ:function eGQ(d){this.a=d},
eGP:function eGP(){},
eGR:function eGR(d){this.a=d},
eGO:function eGO(d,e){this.a=d
this.b=e},
eGS:function eGS(d){this.a=d},
eGL:function eGL(){},
eGj:function eGj(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eGu:function eGu(d){this.a=d},
eG1:function eG1(d){this.a=d},
eG2:function eG2(d,e){this.a=d
this.b=e},
eG3:function eG3(d){this.a=d},
eG4:function eG4(d){this.a=d},
eG0:function eG0(d,e){this.a=d
this.b=e},
eG_:function eG_(d,e){this.a=d
this.b=e},
eGt:function eGt(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eGs:function eGs(){},
eGk:function eGk(){},
eGl:function eGl(){},
eGI:function eGI(){},
eGJ:function eGJ(){},
eG7:function eG7(d){this.a=d},
eG8:function eG8(){},
eG9:function eG9(){},
eFV:function eFV(d,e){this.a=d
this.b=e},
eFW:function eFW(){},
eFX:function eFX(){},
eFY:function eFY(d,e){this.a=d
this.b=e},
eGv:function eGv(d){this.a=d},
eGM:function eGM(d){this.a=d},
eGN:function eGN(d,e){this.a=d
this.b=e},
eG6:function eG6(d){this.a=d},
eG5:function eG5(d,e){this.a=d
this.b=e},
eGr:function eGr(d,e){this.a=d
this.b=e},
eGn:function eGn(d,e){this.a=d
this.b=e},
eGo:function eGo(d,e){this.a=d
this.b=e},
eGm:function eGm(d,e,f){this.a=d
this.b=e
this.c=f},
eGp:function eGp(d,e){this.a=d
this.b=e},
eGq:function eGq(d){this.a=d},
eGa:function eGa(d,e,f){this.a=d
this.b=e
this.c=f},
eGi:function eGi(d){this.a=d},
eGb:function eGb(){},
eGc:function eGc(){},
eGd:function eGd(){},
eGe:function eGe(){},
eGf:function eGf(){},
eGg:function eGg(){},
eGh:function eGh(){},
eGz:function eGz(d,e){this.a=d
this.b=e},
eGA:function eGA(d){this.a=d},
eGB:function eGB(){},
eGC:function eGC(){},
eGE:function eGE(d,e){this.a=d
this.b=e},
eGy:function eGy(d,e){this.a=d
this.b=e},
eGD:function eGD(d){this.a=d},
eGF:function eGF(d){this.a=d},
eGx:function eGx(d){this.a=d},
eGG:function eGG(d){this.a=d},
eGw:function eGw(d,e){this.a=d
this.b=e},
eGH:function eGH(d,e){this.a=d
this.b=e},
eFR:function eFR(d){this.a=d},
eFS:function eFS(d,e){this.a=d
this.b=e},
eFQ:function eFQ(d,e){this.a=d
this.b=e},
eFT:function eFT(d,e){this.a=d
this.b=e},
eFU:function eFU(d){this.a=d},
a0x:function a0x(d,e,f,g,h,i,j,k,l,m){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.y=k
_.z=l
_.a=m},
bkK:function bkK(d){var _=this
_.x=_.w=_.r=_.f=_.e=_.d=$
_.y=d
_.c=_.a=_.z=null},
dui:function dui(){},
duj:function duj(){},
dug:function dug(){},
duh:function duh(){},
due:function due(d){this.a=d},
duf:function duf(d){this.a=d},
dud:function dud(d){this.a=d},
du6:function du6(){},
du7:function du7(){},
du8:function du8(d){this.a=d},
du9:function du9(d){this.a=d},
du4:function du4(d,e,f){this.a=d
this.b=e
this.c=f},
dua:function dua(d){this.a=d},
dub:function dub(d,e){this.a=d
this.b=e},
duc:function duc(d,e){this.a=d
this.b=e},
du5:function du5(d,e,f){this.a=d
this.b=e
this.c=f},
aPb:function aPb(){}},C,F,G,L,M,N,O,H
J=c[1]
A=c[0]
B=c[2]
I=c[91]
K=c[99]
E=c[84]
D=a.updateHolder(c[12],D)
C=c[97]
F=c[57]
G=c[100]
L=c[51]
M=c[98]
N=c[44]
O=c[27]
H=c[92]
D.atH.prototype={
S(){return new D.aH8(A.a([],y.t),A.m5(0,null,null))}}
D.aH8.prototype={
Z(){var x=this
x.a4()
x.a.toString
x.aeq()
x.Bk(!0)
x.ay=A.d9(B.nR,new D.eFP(x))},
t(){var x=this.ay
if(x!=null)x.a1(0)
this.Q.t()
this.a3()},
cr0(d){var x=this
if(!x.as&&d>0){x.as=!0
$.aU.x1$.push(new D.eFy(x,d))}return x.Q},
aeq(){var x=0,w=A.j(y.H),v=1,u=[],t=this,s,r,q,p
var $async$aeq=A.e(function(d,e){if(d===1){u.push(e)
x=v}for(;;)switch(x){case 0:v=3
x=6
return A.b(A.az(),$async$aeq)
case 6:s=e
r=A.aW(J.t(s.a,"ngmy_signal_grid_market"))
if(r!=null&&r.length!==0&&t.c!=null&&t.z==null)t.l(new D.eFq(t,r))
v=1
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
return A.i($async$aeq,w)},
a21(d){return this.cqx(d)},
cqx(d){var x=0,w=A.j(y.H),v=1,u=[],t=this,s,r,q
var $async$a21=A.e(function(e,f){if(e===1){u.push(f)
x=v}for(;;)switch(x){case 0:t.l(new D.eFx(t,d))
v=3
x=6
return A.b(A.az(),$async$a21)
case 6:s=f
x=7
return A.b(s.aF("String","ngmy_signal_grid_market",d),$async$a21)
case 7:v=1
x=5
break
case 3:v=2
q=u.pop()
x=5
break
case 2:x=1
break
case 5:return A.h(null,w)
case 1:return A.f(u.at(-1),w)}})
return A.i($async$a21,w)},
Bk(d){return this.cvR(d)},
cg9(){return this.Bk(!1)},
cvR(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$Bk=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(A.fZ(A.J(["action","paStatus","live",d],y.N,y.z),!1,!1,!1,!1,B.CR),$async$Bk)
case 3:t=f
if(u.c==null){x=1
break}u.l(new D.eFA(u,t))
x=u.d!=null?4:5
break
case 4:x=6
return A.b(u.c6X(),$async$Bk)
case 6:case 5:case 1:return A.h(v,w)}})
return A.i($async$Bk,w)},
a_1(d){return this.c6Y(d)},
c6X(){return this.a_1(!1)},
c6Y(d){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$a_1=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(A.fZ(A.J(["action","paLog","limit",100,"beforeId",d&&u.e.length!==0?J.t(B.d.gal(u.e),"id"):0],y.N,y.z),!1,!1,!1,!1,B.ha),$async$a_1)
case 3:r=f
if(u.c==null||r==null||!J.z(J.t(r,"ok"),!0)){x=1
break}t=y.g.a(J.t(r,"rows"))
if(t==null)t=B.cb
t=J.d1(t,y.f)
t=A.cE(t,new D.eFo(),t.$ti.k("M.E"),y.P)
s=A.B(t,A.a4(t).k("M.E"))
u.l(new D.eFp(u,d,s))
case 1:return A.h(v,w)}})
return A.i($async$a_1,w)},
SK(d){return this.cAK(d)},
cAK(d){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$SK=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=u.d
q=D.hL(r==null?null:J.t(r,"state"))
x=d&&J.z(q.h(0,"brakePaused"),!0)?3:4
break
case 3:r=u.c
r.toString
x=5
return A.b(A.ce(null,null,!0,null,new D.eFI(),r,null,!0,!0,y.y),$async$SK)
case 5:if(f!==!0){x=1
break}case 4:u.l(new D.eFJ(u))
x=6
return A.b(A.fZ(A.J(["action","paSet","enabled",d],y.N,y.z),!1,!1,!1,!1,B.ha),$async$SK)
case 6:t=f
if(u.c==null){x=1
break}u.l(new D.eFK(u))
r=t==null
if(J.z(r?null:J.t(t,"ok"),!0))s=d?"Agent started.":"Agent stopped."
else{s=r?null:J.t(t,"error")
s=J.k(s==null?"Could not change it.":s)}u.b36(s,J.z(r?null:J.t(t,"ok"),!0)?C.e7:C.eI)
x=7
return A.b(u.cg9(),$async$SK)
case 7:case 1:return A.h(v,w)}})
return A.i($async$SK,w)},
clt(){var x=this.c
x.toString
A.a8(x,!1).cb(A.ea(new D.eFw(this),!1,null,y.H))},
a3j(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$a3j=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u.l(new D.eFC(u))
x=3
return A.b(A.fZ(A.J(["action","paCheck"],y.N,y.z),!1,!1,!1,!1,B.nR),$async$a3j)
case 3:t=e
if(u.c==null){x=1
break}u.l(new D.eFD(u,t))
s=t==null
if(!J.z(s?null:J.t(t,"ok"),!0)){s=s?null:J.t(t,"error")
u.b36(J.k(s==null?"The check did not finish.":s),C.eI)
x=1
break}s=u.c
s.toString
s=A.O(s).ax.a===B.dd
t.toString
r=D.hL(D.hL(J.t(t,"state")).h(0,"snapshot"))
q=u.c
q.toString
p=s?C.yK:C.yI
x=4
return A.b(A.bU(p,null,new D.eFE(u,new D.a1t(s),r,t),q,!0,!0,!0,B.aU5,!1,!1,y.H),$async$a3j)
case 4:case 1:return A.h(v,w)}})
return A.i($async$a3j,w)},
cyW(d,e,f,g){var x,w,v,u,t,s=null,r=D.hk_(e)
B.d.b_(r,new D.eFF())
x=d.a
w=x?C.pB:C.pA
w=A.as(A.o(s,s,B.f,s,s,new A.n(w,s,s,A.m(9),s,s,B.m),s,4,s,s,s,s,s,40),s,s,s)
v=A.c("What the agent sees right now",s,s,s,s,s,s,A.l(s,s,x?C.dN:B.c,s,s,s,s,s,s,s,s,19,s,s,B.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)
u=J.z(f.h(0,"enabled"),!0)?" (next one "+D.hG1()+")":" (the agent is stopped, so none will be made)"
w=A.a([w,B.aA,v,B.au,A.c("Check now only looks. It never buys or sells. Pretend trades are made only by the automatic check every 15 minutes"+u+".",s,s,s,s,s,s,A.l(s,s,x?C.dp:C.dq,s,s,s,s,s,s,s,s,12.5,s,s,s,s,1.35,!0,s,s,s,s,s,s,s,s),s,s,s),B.af],y.p)
for(x=r.length,t=0;t<r.length;r.length===x||(0,A.I)(r),++t)w.push(D.hH_(d,r[t],s,!0,s))
return A.cn(w,g,s,C.bH4,s,s,B.ah,!1)},
b36(d,e){var x=null
this.c.L(y.q).f.U(A.b2(x,x,x,e,x,B.t,x,A.c(d,x,x,x,x,x,x,x,x,x,x),x,B.Y,x,x,x,x,x,x,x,x,x,x))},
B(d){var x,w=this,v=null,u=A.O(d).ax.a===B.dd,t=new D.a1t(u),s=u?C.yK:C.yI,r=u?C.yK:C.yI
r=A.a([r,u?C.a_B:C.a_r],y.O)
x=w.cga(t)
if(w.f)u=B.lN
else{if(w.d==null){u=w.ax
u=A.a([w.aaC(t,u==null?"Nothing to show yet.":u,B.b2)],y.p)}else u=w.bIb(0,t)
u=A.PJ(A.cn(u,v,v,C.bHq,v,v,B.ah,!1),v,new D.eFO(w))}return A.c5(v,s,A.o(v,A.bm(!0,A.x(A.a([x,A.E(u,1)],y.p),B.l,v,B.e,B.h,0,B.p),!0,!1,B.ag,!0,!0),B.f,v,v,new A.n(v,v,v,v,v,new A.a7(B.aX,B.b1,B.x,r,v,v),B.m),v,v,v,v,v,v,v,v),v,!1,!1,v,v)},
cga(d){var x,w,v,u,t,s,r=this,q=null,p=r.d,o=D.hL(p==null?q:J.t(p,"state")),n=J.z(o.h(0,"brakePaused"),!0),m=J.z(o.h(0,"enabled"),!0)&&!n
p=r.b34(d,B.eG,new D.eFL(r))
x=d.a
w=A.c("Signal Grid",q,q,q,q,q,q,A.l(q,q,x?C.dN:B.c,q,q,q,q,q,q,q,q,17,q,q,B.F,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
v=y.p
w=A.a([p,B.ar,A.E(A.x(A.a([w,A.c("Paper trading agent \xb7 pretend money",q,q,q,q,q,q,A.l(q,q,x?C.dp:C.dq,q,q,q,q,q,q,q,q,11.5,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],v),B.B,q,B.e,B.h,0,B.p),1)],v)
if(r.d!=null){if(n)p=C.eI
else if(m)p=C.e7
else p=x?C.dp:C.dq
p=p.j(0.14)
u=A.m(999)
if(n)t=C.eI
else if(m)t=C.e7
else t=x?C.dp:C.dq
t=A.W(B.r3,t,q,q,q,8)
if(n)s="Paused"
else s=m?"Running":"Stopped"
if(n)x=C.eI
else if(m)x=C.e7
else x=x?C.dp:C.dq
w.push(A.o(q,A.A(A.a([t,B.bg,A.c(s,q,q,q,q,q,q,A.l(q,q,x,q,q,q,q,q,q,q,q,12,q,q,B.F,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],v),B.l,q,B.e,B.M,0,q,q),B.f,q,q,new A.n(p,q,q,u,q,q,B.m),q,q,q,q,B.fN,q,q,q))}w.push(B.aa)
w.push(r.b34(d,B.o1,r.r?q:new D.eFM(r)))
return new A.D(B.hl,A.A(w,B.l,q,B.e,B.h,0,q,q),q)},
bIb(d1,d2){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4=this,c5=null,c6="asset",c7="liveError",c8="brakePaused",c9="amount",d0=c4.d
d0.toString
x=J.a5(d0)
w=D.hL(x.h(d0,"state"))
v=D.hL(x.h(d0,"config"))
u=D.hL(w.h(0,"snapshot"))
t=y.f.b(w.h(0,"shadow"))?D.hL(w.h(0,"shadow")):c5
s=D.hk_(u)
r=c4.z
if(r==null){q=t==null?c5:t.h(0,"symbol")
if(q==null)q=u.h(0,c6)
r=q==null?c5:J.k(q)}p=B.d.dA(s,new D.eFf(r),new D.eFg(s,u))
q=t==null
o=q?c5:B.d.dA(s,new D.eFh(t),new D.eFi(p))
q=!q
n=q&&J.z(t.h(0,"symbol"),J.t(p,c6))?t:c5
m=c4.c8p(d2,d0,s,p,t)
l=D.hL(x.h(d0,"market"))
k=J.a5(p)
j=k.h(p,c6)
i=J.k(j==null?"SPY":j)
h=B.a.q(i,"/")
g=D.aRl(p)
f=D.fg(k.h(p,"price"))
e=g.length!==0?D.fg(J.t(B.d.gH(g),"c")):0
d=e===0?0:(f-e)/e*100
a0=d>=0
if(h)a1=!0
else{j=k.h(p,"open")
if(j==null)j=l.h(0,"stockOpen")
a1=j==null?l.h(0,"open"):j}if(h)a2="Crypto \xb7 trades all day, every day"
else{j=J.kr(a1)
if(j.A(a1,!0))a2="Stock market open \xb7 closes 4:00 PM ET"
else{j=j.A(a1,!1)?"Stock market closed"+c4.cMe(l.h(0,"nextOpen")):""
a2=j}}a3=D.fzK(i)
j=D.hj9(i,30)
a4=h?i:i+"/USD"
a5=d2.a
a4=A.c(a4,c5,c5,c5,c5,c5,c5,A.l(c5,c5,a5?C.dN:B.c,c5,c5,c5,c5,c5,c5,c5,c5,17,c5,c5,B.F,c5,c5,!0,c5,c5,c5,c5,c5,c5,c5,c5),c5,c5,c5)
a6=k.h(p,"name")
a6=J.k(a6==null?a3.a:a6)
a7=y.p
a6=A.A(A.a([j,B.ar,a4,B.bg,new A.d2(1,B.cg,A.c(a6,c5,c5,B.a2,c5,c5,c5,A.l(c5,c5,a5?C.dp:C.dq,c5,c5,c5,c5,c5,c5,c5,c5,13,c5,c5,c5,c5,c5,!0,c5,c5,c5,c5,c5,c5,c5,c5),c5,c5,c5),c5)],a7),B.l,c5,B.e,B.h,0,c5,c5)
j=f===0?"\u2014":D.ip(f,!1,!1)
j=A.a([A.E(new A.dl(B.dx,B.a5,B.f,A.c(j,c5,c5,c5,c5,c5,c5,A.l(c5,c5,a5?C.dN:B.c,c5,c5,c5,c5,c5,c5,c5,M.SV,42,c5,c5,B.a8,c5,c5,!0,c5,-1,c5,c5,c5,c5,c5,c5),c5,c5,c5),c5),1)],a7)
if(g.length>1){a4=(a0?C.e7:C.eI).j(0.14)
a8=A.m(10)
a9=a0?C.bTu:B.a3U
a9=A.W(a9,a0?C.e7:C.eI,c5,c5,c5,20)
b0=B.i.aa(Math.abs(d),2)
j.push(A.o(c5,A.A(A.a([a9,A.c(b0+"%",c5,c5,c5,c5,c5,c5,A.l(c5,c5,a0?C.e7:C.eI,c5,c5,c5,c5,c5,c5,c5,c5,13,c5,c5,B.F,c5,c5,!0,c5,c5,c5,c5,c5,c5,c5,c5),c5,c5,c5)],a7),B.l,c5,B.e,B.M,0,c5,c5),B.f,c5,c5,new A.n(a4,c5,c5,a8,c5,c5,B.m),c5,c5,c5,c5,B.fN,c5,c5,c5))}j=A.a([a6,B.O,A.A(j,B.l,c5,B.e,B.h,0,c5,c5)],a7)
if(a2.length!==0){if(J.z(a1,!0))a4=C.e7
else a4=a5?C.dp:C.dq
a4=A.W(B.r3,a4,c5,c5,c5,7)
a6=g.length>1?"  \xb7  change over 4H":""
B.d.u(j,A.a([B.au,A.A(A.a([a4,B.bg,new A.d2(1,B.cg,A.c(a2+a6,c5,c5,B.a2,c5,c5,c5,A.l(c5,c5,a5?C.dp:C.dq,c5,c5,c5,c5,c5,c5,c5,c5,12,c5,c5,c5,c5,c5,!0,c5,c5,c5,c5,c5,c5,c5,c5),c5,c5,c5),c5)],a7),B.l,c5,B.e,B.h,0,c5,c5)],a7))}m=A.a([m,new A.D(C.bKF,A.x(j,B.B,c5,B.e,B.h,0,B.p),c5)],a7)
j=v.h(0,"problem")
if(J.k(j==null?"":j).length!==0)m.push(c4.aaC(d2,J.k(v.h(0,"problem")),B.k7))
j=x.h(d0,c7)
if(J.k(j==null?"":j).length!==0)m.push(c4.aaC(d2,J.k(x.h(d0,c7)),C.eI))
if(J.z(w.h(0,c8),!0)){j=w.h(0,"brakeReason")
m.push(c4.aaC(d2,"Paused by the $25 brake. "+A.v(j==null?"":j)+". Look over the trades, then press Start to turn it back on.",C.eI))}m.push(c4.bLa(d2,p,n))
m.push(c4.cJz(d2,p,t,d0))
b1=D.hL(x.h(d0,"today"))
b2=D.hL(x.h(d0,"record"))
b3=D.hL(x.h(d0,"ticket"))
b4=D.fg(w.h(0,"totalPnl"))
b5=D.fg(b1.h(0,"day_pnl"))
j=A.m(26)
a4=A.a([new A.ab(0,B.H,B.i1.j(0.3),B.eT,24)],y.V)
a6=A.A(A.a([C.h4l,B.aY,A.o(c5,C.h3D,B.f,c5,c5,new A.n(B.c.j(0.14),c5,c5,A.m(999),c5,c5,B.m),c5,c5,c5,c5,B.fD,c5,c5,c5)],a7),B.l,c5,B.e,B.h,0,c5,c5)
a8=A.c(u.h(0,"equity")==null?"\u2014":D.ip(D.fg(u.h(0,"equity")),!0,!1),c5,c5,c5,c5,c5,c5,C.fF3,c5,c5,c5)
a9=A.c("Buying power "+D.ip(D.fg(u.h(0,"buyingPower")),!0,!1)+" \xb7 the agent uses only $"+B.i.aa(D.fg(b3.h(0,c9)),0)+" a trade",c5,c5,c5,c5,c5,c5,B.WJ,c5,c5,c5)
b0=D.ip(b5,!0,!0)
if(b5>0)b6=C.e7
else b6=b5<0?C.eI:B.c
b6=A.E(c4.P4("Today",b0,b6),1)
b0=D.ip(b4,!0,!0)
if(b4>0)b7=C.e7
else b7=b4<0?C.eI:B.c
b7=A.E(c4.P4("All time",b0,b7),1)
b0=b2.h(0,"wins")
b0=A.v(b0==null?0:b0)
b8=b2.h(0,"losses")
b0=A.A(A.a([b6,B.aa,b7,B.aa,A.E(c4.P4("Wins / losses",b0+" / "+A.v(b8==null?0:b8),B.c),1)],a7),B.l,c5,B.e,B.h,0,c5,c5)
b6=b1.h(0,"trades")
b6=A.v(b6==null?0:b6)
b7=b3.h(0,"maxTradesToday")
m.push(A.o(c5,A.x(A.a([a6,B.au,new A.dl(B.dx,B.a5,B.f,a8,c5),B.bC,a9,B.aA,b0,B.O,A.A(A.a([A.E(c4.P4("Trades today",b6+" of "+A.v(b7==null?4:b7),B.c),1),B.aa,A.E(c4.P4("Daily stop","-$10",B.c),1),B.aa,A.E(c4.P4("Total brake","-$25",B.c),1)],a7),B.l,c5,B.e,B.h,0,c5,c5)],a7),B.B,c5,B.e,B.h,0,B.p),B.f,c5,c5,new A.n(c5,c5,c5,j,a4,C.cay,B.m),c5,c5,c5,B.e9,B.fc,c5,c5,c5))
if(q){o.toString
x=c4.crs(d2,t,o)}else{b9=D.hL(x.h(d0,"ticket"))
f=D.fg(k.h(p,"price"))
c0=D.fg(b9.h(0,c9))===0?50:D.fg(b9.h(0,c9))
x=f===0
c1=x?0:c0/f
q=A.A(A.a([A.c("Next trade",c5,c5,c5,c5,c5,c5,A.l(c5,c5,a5?C.dN:B.c,c5,c5,c5,c5,c5,c5,c5,c5,16,c5,c5,B.F,c5,c5,!0,c5,c5,c5,c5,c5,c5,c5,c5),c5,c5,c5),B.aY,c4.a0N("AUTOMATIC",B.b2)],a7),B.l,c5,B.e,B.h,0,c5,c5)
j=a5?C.H1:C.GR
a4=A.m(999)
a6=a5?C.kY:B.c
a8=A.m(999)
a6=A.E(A.o(B.z,A.c("BUY",c5,c5,c5,c5,c5,c5,A.l(c5,c5,a5?B.c:C.kY,c5,c5,c5,c5,c5,c5,c5,c5,12.5,c5,c5,B.F,c5,c5,!0,c5,c5,c5,c5,c5,c5,c5,c5),c5,c5,c5),B.f,c5,c5,new A.n(a6,c5,c5,a8,c5,c5,B.m),c5,c5,c5,c5,B.wT,c5,c5,c5),1)
j=A.o(c5,A.A(A.a([a6,A.E(A.as(A.c("SELL",c5,c5,c5,c5,c5,c5,A.l(c5,c5,a5?C.dp:C.dq,c5,c5,c5,c5,c5,c5,c5,c5,12.5,c5,c5,B.F,c5,c5,!0,c5,c5,c5,c5,c5,c5,c5,c5),c5,c5,c5),c5,c5,c5),1)],a7),B.l,c5,B.e,B.h,0,c5,c5),B.f,c5,c5,new A.n(j,c5,c5,a4,c5,c5,B.m),c5,c5,c5,c5,B.ez,c5,c5,c5)
a4=D.ip(c0,!0,!1)
if(x)a6=c5
else{a6=B.i.aa(c1,c1<0.01?6:4)
a8=k.h(p,c6)
a6="\u2248 "+a6+" "+A.v(a8==null?"":a8)}a6=c4.cHS(d2,"Amount it puts in",a4,!0,a6)
a4=B.i.aa(D.fg(b9.h(0,"takeProfitPct")),0)
a8=D.ip(D.fg(b9.h(0,"takeProfitUsd")),!0,!1)
a9=x?c5:"sells at "+D.ip(f*1.03,!0,!1)
a9=c4.bc3(d2,"Take profit  +"+a4+"%","+"+a8,C.e7,a9)
a8=B.i.aa(D.fg(b9.h(0,"stopLossPct")),1)
a4=D.ip(D.fg(b9.h(0,"stopLossUsd")),!0,!1)
x=x?c5:"sells at "+D.ip(f*0.985,!0,!1)
x=c4.bc3(d2,"Stop loss  -"+a8+"%","-"+a4,C.eI,x)
a4=c4.cHR(d2,"Leverage","None (1x)","no borrowing, no shorting")
a8=a5?C.kY:B.c
b0=A.m(999)
a8=A.o(B.z,A.c("Buys by itself when the trend turns up",c5,c5,c5,c5,c5,c5,A.l(c5,c5,a5?B.c:C.kY,c5,c5,c5,c5,c5,c5,c5,c5,13.5,c5,c5,B.F,c5,c5,!0,c5,c5,c5,c5,c5,c5,c5,c5),c5,c5,c5),B.f,c5,c5,new A.n(a8,c5,c5,b0,c5,c5,B.m),c5,c5,c5,c5,B.cm,c5,c5,1/0)
k=k.h(p,c6)
k=A.v(k==null?"":k)
x=c4.a0L(d2,A.x(A.a([q,B.af,j,B.S,a6,a9,x,a4,B.S,a8,B.ak,A.as(A.c("Shown for "+k+" at its price right now. The agent buys whichever market signals first.",c5,c5,c5,c5,c5,c5,A.l(c5,c5,a5?C.dp:C.dq,c5,c5,c5,c5,c5,c5,c5,c5,11,c5,c5,c5,c5,c5,!0,c5,c5,c5,c5,c5,c5,c5,c5),B.K,c5,c5),c5,c5,c5)],a7),B.B,c5,B.e,B.h,0,B.p))}m.push(x)
m.push(c4.cg7(d2,w))
c2=J.z(w.h(0,"enabled"),!0)&&!J.z(w.h(0,c8),!0)
x=w.h(0,"lastTickAt")
c3=A.bh(A.v(x==null?"":x))
if(c2)x=C.e7
else x=a5?C.dp:C.dq
x=A.W(B.a3X,x,c5,c5,c5,16)
if(c2){q=c3==null?"not yet":D.aQA(D.bF3(c3))+" ET"
q="Trades are automatic: the agent checks all markets every 15 minutes by itself. Last check "+q+" \xb7 next "+D.hG1()+". Check now only looks, it never trades."}else q="The agent is stopped, so it makes no trades. Press Start and it checks all markets every 15 minutes by itself."
m.push(new A.D(C.bKS,A.A(A.a([x,B.bg,A.E(A.c(q,c5,c5,c5,c5,c5,c5,A.l(c5,c5,a5?C.dp:C.dq,c5,c5,c5,c5,c5,c5,c5,c5,11.5,c5,c5,c5,c5,1.35,!0,c5,c5,c5,c5,c5,c5,c5,c5),c5,c5,c5),1)],a7),B.B,c5,B.e,B.h,0,c5,c5),c5))
m.push(c4.cJf(d2,d0))
m.push(c4.bEN(d2))
m.push(c4.cxR(d2,d0))
d0=J.z(v.h(0,"ordersSwitchOn"),!0)?"on":"off"
m.push(new A.D(B.hx,A.c("Version 1 is read-only: no order is ever sent to Alpaca. Order switch (ALPACA_ORDERS_ENABLED): "+d0+".",c5,c5,c5,c5,c5,c5,A.l(c5,c5,a5?C.dp:C.dq,c5,c5,c5,c5,c5,c5,c5,c5,11,c5,c5,c5,c5,c5,!0,c5,c5,c5,c5,c5,c5,c5,c5),B.K,c5,c5),c5))
return m},
c8p(d,e,f,g,h){var x,w,v,u,t,s=null
if(f.length<2)return B.bL
x=new A.X(f,new D.eFs(),A.T(f).k("X<1>")).gJ(0)
w=f.length
v=d.a
w=A.c("Watching "+w+" markets",s,s,s,s,s,s,A.l(s,s,v?C.dN:B.c,s,s,s,s,s,s,s,s,14,s,s,B.F,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)
u=this.a0N(""+x+" OPEN NOW",C.e7)
t=y.p
return new A.D(B.eK,A.x(A.a([new A.D(C.bKm,A.A(A.a([w,B.aa,u,B.aY,A.c("tap one",s,s,s,s,s,s,A.l(s,s,v?C.dp:C.dq,s,s,s,s,s,s,s,s,11,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],t),B.l,s,B.e,B.h,0,s,s),s),new A.a6(s,128,A.hP(B.f,this.cr0(B.d.bk(f,new D.eFt(g))),new D.eFu(this,f,g,h,d),f.length,s,s,B.aL,new D.eFv(),!1),s),B.au],t),B.B,s,B.e,B.h,0,B.p),s)},
bLa(d,e,f){var x,w,v,u,t,s,r=this,q=null,p=D.aRl(e),o=p.length
if(o<2)return r.a0L(d,new A.a6(q,120,A.as(A.c("The chart appears after the first reading.",q,q,q,q,q,q,A.l(q,q,d.a?C.dp:C.dq,q,q,q,q,q,q,q,q,q,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),q,q,q),q))
x=B.d.fD(p,Math.max(0,o-r.y))
w=f==null?q:D.fg(f.h(0,"entryPrice"))
o=y.p
v=A.a([],o)
for(u=0;u<3;++u){t=C.co5[u]
if(t<=12)s="1H"
else s=t<=24?"2H":"4H"
B.d.u(v,A.a([r.czU(d,s,r.y===t,new D.eFl(r,t)),B.bg],o))}v.push(B.aY)
v.push(r.b8I(d,"Trend lines",r.at,new D.eFm(r),H.xm))
v=A.a([A.A(v,B.l,q,B.e,B.h,0,q,q),B.S,new D.ady(x,d,w,r.at,D.fg(J.t(e,"price")),q)],o)
if(r.at){s=A.a([r.ayl(d,B.bA,"Fast line (45 min)"),r.ayl(d,B.b2,"Slow line (1 h 45 min)")],o)
if(w!=null)s.push(r.ayl(d,E.wA,"Your pretend buy"))
B.d.u(v,A.a([B.O,A.bZ(B.fT,s,B.br,q,4,14)],o))}return r.aAv(d,A.x(v,B.l,q,B.e,B.h,0,B.p),B.wU)},
cJz(d,a0,a1,a2){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i=J.a5(a0),h=D.hL(i.h(a0,"chart")).h(0,"trend"),g=J.k(h==null?"unknown":h),f=D.hL(J.t(a2,"state")),e=J.z(f.h(0,"enabled"),!0)&&!J.z(f.h(0,"brakePaused"),!0)
switch(g){case"up":h=C.few
break
case"down":h=C.ffx
break
case"flat":h=C.fcH
break
default:h=C.fdy
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
l=A.c(v,j,j,j,j,j,j,A.l(j,j,h?C.dN:B.c,j,j,j,j,j,j,j,j,16,j,j,B.u,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)
k=y.p
return A.o(j,A.A(A.a([m,B.bb,A.E(A.x(A.a([l,B.bC,A.c(p,j,j,j,j,j,j,A.l(j,j,h?C.dp:C.dq,j,j,j,j,j,j,j,j,12.5,j,j,j,j,1.3,!0,j,j,j,j,j,j,j,j),j,j,j)],k),B.B,j,B.e,B.h,0,B.p),1)],k),B.l,j,B.e,B.h,0,j,j),B.f,j,j,new A.n(j,j,n,i,j,new A.a7(B.a5,B.a9,B.x,o,j,j),B.m),j,j,j,B.e9,B.bG,j,j,j)},
P4(d,e,f){var x=null,w=B.c.j(0.1),v=A.m(14)
return A.o(x,A.x(A.a([A.c(d,x,1,B.a2,x,x,x,B.X5,x,x,x),B.bC,new A.dl(B.dx,B.a5,B.f,A.c(e,x,x,x,x,x,x,A.l(x,x,f,x,x,x,x,x,x,x,x,15,x,x,B.F,x,x,!0,x,x,x,x,x,x,x,x),x,x,x),x)],y.p),B.B,x,B.e,B.h,0,B.p),B.f,x,x,new A.n(w,x,x,v,x,x,B.m),x,x,x,x,B.ank,x,x,x)},
crs(a1,a2,a3){var x,w,v,u,t,s,r,q,p,o=this,n=null,m=D.fg(a2.h(0,"entryPrice")),l=D.fg(a2.h(0,"qty")),k=J.a5(a3),j=J.z(a2.h(0,"symbol"),k.h(a3,"asset"))?D.fg(k.h(a3,"price")):m,i=l*j,h=i-50,g=m===0?0:(j-m)/m*100,f=h>=0,e=m*0.985,d=m*1.03,a0=B.i.D((j-e)/(d-e),0,1)
k=a1.a
x=y.p
w=A.A(A.a([A.c("Your pretend position",n,n,n,n,n,n,A.l(n,n,k?C.dN:B.c,n,n,n,n,n,n,n,n,16,n,n,B.F,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),B.aY,o.a0N("OPEN",C.e7)],x),B.l,n,B.e,B.h,0,n,n)
v=D.ip(h,!0,!0)
v=A.c(v,n,n,n,n,n,n,A.l(n,n,f?C.e7:C.eI,n,n,n,n,n,n,n,n,34,n,n,B.F,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
u=g>=0?"+":""
t=B.i.aa(g,2)
v=A.A(A.a([v,B.aa,new A.D(B.eK,A.c(u+t+"%",n,n,n,n,n,n,A.l(n,n,f?C.e7:C.eI,n,n,n,n,n,n,n,n,n,n,n,B.F,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),n)],x),B.dI,n,B.e,B.h,0,n,n)
u=f?"You would be winning right now":"You would be losing right now"
u=A.c(u,n,n,n,n,n,n,A.l(n,n,k?C.dp:C.dq,n,n,n,n,n,n,n,n,12.5,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
t=A.E(o.aAx(a1,"You put in",D.ip(50,!0,!1)),1)
s=D.ip(i,!0,!1)
t=A.A(A.a([t,B.aa,A.E(o.b37(a1,"Worth now",s,f?C.e7:C.eI),1)],x),B.l,n,B.e,B.h,0,n,n)
s=A.E(o.aAx(a1,"Bought at",D.ip(m,!0,!1)),1)
s=A.A(A.a([s,B.aa,A.E(o.aAx(a1,"Shares",B.i.aa(l,l<0.01?6:4)+" "+A.v(a2.h(0,"symbol"))),1)],x),B.l,n,B.e,B.h,0,n,n)
r=A.cf(new D.eFz(a1,a0))
q=A.A(A.a([A.E(A.c("Stop loss\n"+D.ip(e,!0,!1)+" \xb7 -$0.75",n,n,n,n,n,n,C.fKZ,n,n,n),1),A.E(A.c("Take profit\n"+D.ip(d,!0,!1)+" \xb7 +$1.50",n,n,n,n,n,n,C.fJz,B.e5,n,n),1)],x),B.l,n,B.e,B.h,0,n,n)
p=D.ifv(a2.h(0,"entryAt"))
return o.a0L(a1,A.x(A.a([w,B.af,v,u,B.aA,t,B.O,s,B.aO,r,B.ak,q,B.ak,A.c("Bought "+p,n,n,n,n,n,n,A.l(n,n,k?C.dp:C.dq,n,n,n,n,n,n,n,n,11.5,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],x),B.B,n,B.e,B.h,0,B.p))},
aEw(d,e,f,g,h,i){var x,w,v=null,u=d.a,t=u?C.Hb:C.Hc,s=A.m(16),r=A.c(e,v,v,v,v,v,v,A.l(v,v,u?C.dp:C.dq,v,v,v,v,v,v,v,v,11.5,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
if(h==null)x=u?C.dN:B.c
else x=h
w=y.p
w=A.a([A.E(A.x(A.a([r,B.bC,A.c(f,v,v,v,v,v,v,A.l(v,v,x,v,v,v,v,v,v,v,v,g?24:17,v,v,B.F,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],w),B.B,v,B.e,B.h,0,B.p),1)],w)
if(i!=null)w.push(A.c(i,v,v,v,v,v,v,A.l(v,v,u?C.dp:C.dq,v,v,v,v,v,v,v,v,11.5,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v))
return A.o(v,A.A(w,B.l,v,B.e,B.h,0,v,v),B.f,v,v,new A.n(t,v,v,s,v,v,B.m),v,v,v,B.jg,B.eX,v,v,v)},
cHS(d,e,f,g,h){return this.aEw(d,e,f,g,null,h)},
bc3(d,e,f,g,h){return this.aEw(d,e,f,!1,g,h)},
cHR(d,e,f,g){return this.aEw(d,e,f,!1,null,g)},
cg7(d,e){var x,w,v,u=this,t=null,s=J.z(e.h(0,"enabled"),!0)&&!J.z(e.h(0,"brakePaused"),!0),r=s?C.eI:C.e7
r=A.bn(r,t,t,t,t,t,t,t,new A.ba(A.m(999),B.a1),t,t,t)
x=u.r?t:new D.eFn(u,s)
w=A.W(s?B.xn:B.hd,t,t,t,t,t)
r=A.E(new A.a6(t,52,A.da(w,t,A.c(s?"Stop agent":"Start agent",t,t,t,t,t,t,B.nq,t,t,t),x,r),t),3)
x=d.a
w=x?C.dN:B.c
v=x?C.pB:C.pA
x=x?B.c.j(0.92):C.lR
v=A.dh(t,t,x,t,t,t,t,t,t,w,t,t,t,t,new A.ba(A.m(999),B.a1),new A.av(v,1.5,B.r,-1),t,t,t,t)
x=u.r
w=x?t:u.gcyU()
return new A.D(B.e9,A.A(A.a([r,B.ar,A.E(new A.a6(t,52,A.en(x?B.Ld:C.c56,t,C.he2,w,v),t),2)],y.p),B.l,t,B.e,B.h,0,t,t),t)},
cJf(a7,a8){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=null,a5="outValue",a6=y.g.a(J.t(a8,"trades"))
if(a6==null)a6=B.cb
x=y.f
a6=J.d1(a6,x)
a6=A.cE(a6,new D.eFN(),a6.$ti.k("M.E"),y.P)
w=A.B(a6,A.a4(a6).k("M.E"))
a6=a7.a
v=y.p
u=A.a([A.c("Pretend trades",a4,a4,a4,a4,a4,a4,A.l(a4,a4,a6?C.dN:B.c,a4,a4,a4,a4,a4,a4,a4,a4,16,a4,a4,B.F,a4,a4,!0,a4,a4,a4,a4,a4,a4,a4,a4),a4,a4,a4),B.O],v)
if(w.length===0){t=A.W(B.fZ,a6?C.dp:C.dq,a4,a4,a4,a4)
u.push(new A.D(B.cm,A.A(A.a([t,B.ar,A.E(A.c("No trades yet. Each buy shows the $50 put in, and each sell shows what came back and the win or loss.",a4,a4,a4,a4,a4,a4,A.l(a4,a4,a6?C.dp:C.dq,a4,a4,a4,a4,a4,a4,a4,a4,12.5,a4,a4,a4,a4,1.3,!0,a4,a4,a4,a4,a4,a4,a4,a4),a4,a4,a4),1)],v),B.l,a4,B.e,B.h,0,a4,a4),a4))}for(t=w.length,s=y.N,r=y.z,q=0;q<w.length;w.length===t||(0,A.I)(w),++q){p=w[q]
o=J.a5(p)
n=J.z(o.h(p,"decision"),"would buy")
m=o.h(p,"details")
l=x.b(m)?A.a1(m,s,r):A.S(s,r)
m=o.h(p,"asset")
k=J.k(m==null?"":m)
if(l.h(0,"amount")==null)j=50
else{m=l.h(0,"amount")
if(typeof m=="number")j=m
else{m=A.cG(A.v(m==null?"":m))
if(m==null)m=0
j=m}}i=l.h(0,"qty")
if(!(typeof i=="number")){m=A.cG(A.v(i==null?"":i))
i=m==null?0:m}h=l.h(0,"pnl")
if(!(typeof h=="number")){m=A.cG(A.v(h==null?"":h))
h=m==null?0:m}g=h>=0
if(n)f=B.ce
else f=g?C.e7:C.eI
m=a6?C.pB:C.pA
e=f.j(0.14)
d=new A.aP(13,13)
e=A.o(a4,A.W(n?B.vs:B.tC,f,a4,a4,a4,20),B.f,a4,a4,new A.n(e,a4,a4,new A.bb(d,d,d,d),a4,a4,B.m),a4,40,a4,a4,a4,a4,a4,40)
d=n?"Bought":"Sold"
a0=a6?C.dN:B.c
d=A.c(d+" "+k,a4,a4,a4,a4,a4,a4,new A.F(!0,a0,a4,a4,a4,a4,14,B.F,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4),a4,a4,a4)
if(n){if(i===0)a0=""
else a0=B.i.aa(i,i<0.01?6:4)+" at "
a1=o.h(p,"price")
if(!(typeof a1=="number")){a1=A.cG(A.v(a1==null?"":a1))
if(a1==null)a1=0}a1=a0+D.ip(a1,!0,!1)
a0=a1}else{a0=o.h(p,"price")
if(!(typeof a0=="number")){a0=A.cG(A.v(a0==null?"":a0))
if(a0==null)a0=0}a0=D.ip(a0,!0,!1)
a1=o.h(p,"reason")
a1=J.k(a1==null?"":a1)
a2=B.a.cd(a1,"(")
a0="at "+a0+" \xb7 "+B.a.i(a2>0?B.a.az(a1,0,a2):a1)}a1=a6?C.dp:C.dq
a0=A.c(a0,a4,1,B.a2,a4,a4,a4,new A.F(!0,a1,a4,a4,a4,a4,11.5,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4),a4,a4,a4)
o=o.h(p,"et_time")
o=J.k(o==null?"":o)
a1=a6?C.dp:C.dq
o=A.x(A.a([d,B.bC,a0,A.c(o,a4,a4,a4,a4,a4,a4,new A.F(!0,a1,a4,a4,a4,a4,10.5,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4),a4,a4,a4)],v),B.B,a4,B.e,B.h,0,B.p)
if(n)d="-"+D.ip(j,!0,!1)
else{if(l.h(0,a5)==null)d=j+h
else{d=l.h(0,a5)
if(!(typeof d=="number")){d=A.cG(A.v(d==null?"":d))
if(d==null)d=0}}d="+"+D.ip(d,!0,!1)}a0=a6?C.dN:B.c
d=A.a([A.c(d,a4,a4,a4,a4,a4,a4,new A.F(!0,a0,a4,a4,a4,a4,14,B.F,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4),a4,a4,a4)],v)
if(!n){a0=D.ip(h,!0,!0)
if(l.h(0,"pct")==null)a1=""
else{a1=l.h(0,"pct")
if(!(typeof a1=="number")){a1=A.cG(A.v(a1==null?"":a1))
if(a1==null)a1=0}a1=a1>=0?"+":""
a3=l.h(0,"pct")
if(!(typeof a3=="number")){a3=A.cG(A.v(a3==null?"":a3))
if(a3==null)a3=0}a3=" ("+a1+B.i.aa(a3,2)+"%)"
a1=a3}a3=g?C.e7:C.eI
d.push(A.c(a0+a1,a4,a4,a4,a4,a4,a4,new A.F(!0,a3,a4,a4,a4,a4,12,B.F,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4),a4,a4,a4))}if(n){a0=a6?C.dp:C.dq
d.push(A.c("put in",a4,a4,a4,a4,a4,a4,new A.F(!0,a0,a4,a4,a4,a4,11,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4),a4,a4,a4))}u.push(A.o(a4,new A.c3(B.aL,B.e,B.h,B.l,a4,B.p,a4,0,A.a([e,B.bb,new A.bx(1,B.ba,o,a4),B.aa,A.x(d,B.dI,a4,B.e,B.h,0,B.p)],v),a4),B.f,a4,a4,new A.n(a4,a4,new A.bE(B.a1,B.a1,new A.av(m,1,B.r,-1),B.a1),a4,a4,a4,B.m),a4,a4,a4,a4,B.jS,a4,a4,a4))}return this.a0L(a7,A.x(u,B.B,a4,B.e,B.h,0,B.p))},
bEN(d){var x,w,v,u=this,t=null,s=u.x,r=u.e
r=s?r:A.cS(r,0,A.dx(8,"count",y.S),A.T(r).c).dm(0)
s=d.a
x=A.c("Agent activity",t,t,t,t,t,t,A.l(t,t,s?C.dN:B.c,t,t,t,t,t,t,t,t,16,t,t,B.F,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)
w=y.p
w=A.a([A.A(A.a([x,B.aY,A.c("newest first",t,t,t,t,t,t,A.l(t,t,s?C.dp:C.dq,t,t,t,t,t,t,t,t,11,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],w),B.l,t,B.e,B.h,0,t,t),B.ak],w)
if(u.e.length===0)w.push(new A.D(B.f8,A.c("Nothing yet. A new line appears with every 15-minute check.",t,t,t,t,t,t,A.l(t,t,s?C.dp:C.dq,t,t,t,t,t,t,t,t,12.5,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),t))
for(s=r.length,v=0;v<r.length;r.length===s||(0,A.I)(r),++v)w.push(u.c7c(d,r[v]))
if(u.e.length>8){if(u.x)s=u.w?"Show older":"That is everything"
else s="Show all"
w.push(A.as(A.bO(!1,A.c(s,t,t,t,t,t,t,t,t,t,t),t,t,!0,t,t,t,new D.eFe(u),t,t),t,t,t))}return u.a0L(d,A.x(w,B.B,t,B.e,B.h,0,B.p))},
c7c(d,e){var x,w,v,u,t,s=null,r="price",q=J.a5(e),p=q.h(e,"decision"),o=J.k(p==null?"":p)
A:{if("would buy"===o){p=C.e7
break A}if("would sell"===o){p=B.bA
break A}if("hold"===o){p=B.b2
break A}if("day start"===o||"day end"===o){p=B.ce
break A}if("start"===o){p=C.e7
break A}if("stop"===o){p=C.eI
break A}if(J.z(q.h(e,"kind"),"error"))p=C.eI
else p=d.a?C.dp:C.dq
break A}x=q.h(e,"fast_ma")!=null&&q.h(e,"slow_ma")!=null
w=A.o(s,s,B.f,s,s,new A.n(p,s,s,s,s,s,B.a6),s,8,s,B.a1x,s,s,s,8)
v=o==="hold"?"Still holding":D.hDz(o)
u=y.p
p=A.a([A.c(v,s,s,s,s,s,s,A.l(s,s,p,s,s,s,s,s,s,s,s,12.5,s,s,B.F,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],u)
if(J.z(D.hL(q.h(e,"details")).h(0,"by"),"cron"))B.d.u(p,A.a([B.bg,A.c("automatic",s,s,s,s,s,s,A.l(s,s,d.a?C.dp:C.dq,s,s,s,s,s,s,s,s,10,s,s,B.P,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],u))
p.push(B.aY)
v=q.h(e,"et_time")
v=D.ilY(J.k(v==null?"":v))
t=d.a
p.push(A.c(v,s,s,s,s,s,s,A.l(s,s,t?C.dp:C.dq,s,s,s,s,s,s,s,s,10.5,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s))
p=A.A(p,B.l,s,B.e,B.h,0,s,s)
v=q.h(e,"reason")
v=D.hDz(J.k(v==null?"":v))
p=A.a([p,A.c(v,s,s,s,s,s,s,A.l(s,s,t?C.dN:B.c,s,s,s,s,s,s,s,s,12.5,s,s,s,s,1.3,!0,s,s,s,s,s,s,s,s),s,s,s)],u)
if(q.h(e,r)!=null||x){v=A.a([],y.s)
if(q.h(e,"asset")!=null&&q.h(e,r)!=null)v.push(A.v(q.h(e,"asset"))+" "+D.ip(D.fg(q.h(e,r)),!0,!1))
if(x)v.push("fast "+B.i.aa(D.fg(q.h(e,"fast_ma")),2)+" \xb7 slow "+B.i.aa(D.fg(q.h(e,"slow_ma")),2))
q=B.d.aM(v,"  \xb7  ")
p.push(A.c(q,s,s,s,s,s,s,A.l(s,s,t?C.dp:C.dq,s,s,s,s,s,s,s,s,10.5,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s))}return new A.D(B.HA,A.A(A.a([w,B.ar,A.E(A.x(p,B.B,s,B.e,B.h,0,B.p),1)],u),B.B,s,B.e,B.h,0,s,s),s)},
cxR(d,e){var x,w,v,u,t,s,r,q,p,o,n,m=null,l=this.c
l.toString
l=A.O(l).bgi(B.L)
x=d.a
w=x?C.dN:B.c
v=x?C.dp:C.dq
u=A.W(C.bVM,B.b2,m,m,m,m)
t=y.p
s=A.A(A.a([new A.d2(1,B.cg,A.c("The rules it follows",m,m,m,m,m,m,A.l(m,m,x?C.dN:B.c,m,m,m,m,m,m,m,m,14.5,m,m,B.F,m,m,!0,m,m,m,m,m,m,m,m),m,m,m),m),B.aa,A.ay(m,A.o(m,C.fog,B.f,m,m,new A.n(m,m,m,A.m(999),m,B.tL,B.m),m,m,m,m,B.hk,m,m,m),B.y,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,this.gcls(),m,m,m,m,m,m,!1,B.a4)],t),B.l,m,B.e,B.h,0,m,m)
r=A.c("Read-only, set in the code",m,m,m,m,m,m,A.l(m,m,x?C.dp:C.dq,m,m,m,m,m,m,m,m,11.5,m,m,m,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)
q=A.a([],t)
p=y.g.a(J.t(e,"rules"))
p=J.aS(p==null?B.cb:p)
while(p.C()){o=J.k(p.gP(p))
n=x?C.dN:B.c
q.push(new A.D(C.bEt,new A.c3(B.aL,B.e,B.h,B.B,m,B.p,m,0,A.a([C.eCU,B.aa,new A.bx(1,B.ba,A.c(o,m,m,m,m,m,m,new A.F(!0,n,m,m,m,m,12.5,m,m,m,m,m,1.35,m,m,m,m,m,m,m,m,m,m,m,m,m),m,m,m),m)],t),m),m))}return this.aAv(d,new A.p0(l,A.aF(!1,B.a3,!0,m,O.hsx(m,q,K.anP,m,v,w,!1,u,m,r,B.hb,s),B.f,m,0,m,m,m,m,m,B.id),m),B.ag)},
aAv(d,e,f){var x=null,w=d.a,v=w?B.c.j(0.92):C.lR,u=A.m(24)
return A.o(x,e,B.f,x,x,new A.n(v,x,A.K(w?B.c:C.uQ,B.r,1),u,A.a([new A.ab(0,B.H,d.ga9z(),B.dm,24)],y.V),x,B.m),x,x,x,B.e9,f,x,x,x)},
a0L(d,e){return this.aAv(d,e,B.bR)},
aaC(d,e,f){var x=null,w=f.j(0.12),v=A.m(16),u=A.K(f.j(0.45),B.r,1),t=A.W(B.a4n,f,x,x,x,20)
return A.o(x,A.A(A.a([t,B.ar,A.E(A.c(e,x,x,x,x,x,x,A.l(x,x,d.a?C.dN:B.c,x,x,x,x,x,x,x,x,12.5,x,x,x,x,1.35,!0,x,x,x,x,x,x,x,x),x,x,x),1)],y.p),B.l,x,B.e,B.h,0,x,x),B.f,x,x,new A.n(w,x,u,v,x,x,B.m),x,x,x,B.e9,B.bl,x,x,x)},
b34(d,e,f){var x=null,w=d.a,v=w?B.c.j(0.92):C.lR,u=A.K(w?B.c:C.uQ,B.r,1)
return A.aF(!1,B.a3,!0,x,A.aM(!1,x,!0,A.o(x,A.W(e,w?C.dN:B.c,x,x,x,18),B.f,x,x,new A.n(x,x,u,x,x,x,B.a6),x,40,x,x,x,x,x,40),B.cK,!0,x,x,x,x,x,x,x,x,x,x,x,f,x,x,x,x,x,x,x),B.f,v,0,x,x,B.cK,x,x,B.ai)},
b8I(d,e,f,g,h){var x,w,v,u,t,s,r,q=null
if(f){x=d.a
w=x?C.kY:B.c
v=w
w=x
x=v}else{x=d.a
w=x?C.H1:C.GR
v=w
w=x
x=v}u=A.m(999)
t=y.p
s=A.a([],t)
if(h!=null){if(f)r=w?B.c:C.kY
else r=w?C.dp:C.dq
B.d.u(s,A.a([A.W(h,r,q,q,q,14),B.d9],t))}if(f)w=w?B.c:C.kY
else w=w?C.dp:C.dq
s.push(A.c(e,q,q,q,q,q,q,A.l(q,q,w,q,q,q,q,q,q,q,q,11.5,q,q,B.P,q,q,!0,q,q,q,q,q,q,q,q),q,q,q))
return A.ay(q,A.cV(q,A.A(s,B.l,q,B.e,B.M,0,q,q),q,q,B.b_,new A.n(x,q,q,u,q,q,B.m),B.eJ,q,q,q,q,L.a1C,q,q,q),B.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,g,q,q,q,q,q,q,!1,B.a4)},
czU(d,e,f,g){return this.b8I(d,e,f,g,null)},
ayl(d,e,f){var x=null,w=A.o(x,x,B.f,x,x,new A.n(e,x,x,A.m(2),x,x,B.m),x,3,x,x,x,x,x,14)
return A.A(A.a([w,B.e4,A.c(f,x,x,x,x,x,x,A.l(x,x,d.a?C.dp:C.dq,x,x,x,x,x,x,x,x,11,x,x,x,x,x,!0,x,x,x,x,x,x,x,x),x,x,x)],y.p),B.l,x,B.e,B.M,0,x,x)},
a0N(d,e){var x=null,w=e.j(0.14),v=A.m(999)
return A.o(x,A.c(d,x,x,x,x,x,x,A.l(x,x,e,x,x,x,x,x,x,x,x,10,x,x,B.u,x,x,!0,x,0.6,x,x,x,x,x,x),x,x,x),B.f,x,x,new A.n(w,x,x,v,x,x,B.m),x,x,x,x,B.fD,x,x,x)},
b37(d,e,f,g){var x=null,w=d.a,v=w?C.Hb:C.Hc,u=A.m(16),t=A.c(e,x,x,x,x,x,x,A.l(x,x,w?C.dp:C.dq,x,x,x,x,x,x,x,x,11.5,x,x,x,x,x,!0,x,x,x,x,x,x,x,x),x,x,x)
if(g==null)w=w?C.dN:B.c
else w=g
return A.o(x,A.x(A.a([t,B.cU,new A.dl(B.dx,B.a5,B.f,A.c(f,x,x,x,x,x,x,A.l(x,x,w,x,x,x,x,x,x,x,x,16,x,x,B.F,x,x,!0,x,x,x,x,x,x,x,x),x,x,x),x)],y.p),B.B,x,B.e,B.h,0,B.p),B.f,x,x,new A.n(v,x,x,u,x,x,B.m),x,x,x,x,B.bl,x,x,x)},
aAx(d,e,f){return this.b37(d,e,f,null)},
cMe(d){var x=A.v(d==null?"":d),w=A.bh(x.length>=19?B.a.az(x,0,19):"")
if(w==null)return""
return" \xb7 opens "+B.Ta[A.lF(w)-1]+" "+D.aQA(w)+" ET"}}
D.ady.prototype={
S(){return new D.be3()}}
D.be3.prototype={
aAw(d,e){var x=this,w=x.a.c.length,v=B.o.D(B.i.be(d.a/e*w),0,w-1)
if(v!==x.d)x.l(new D.cWt(x,v))},
B(d){return A.cf(new D.cWC(this))}}
D.be4.prototype={
a2(c9,d0){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2=this,c3=null,c4={},c5=d0.b,c6=c5-18,c7=y.n,c8=A.a([],c7)
for(x=c2.c,w=x.length,v=0;u=x.length,v<u;x.length===w||(0,A.I)(x),++v){t=x[v]
u=J.a5(t)
s=u.h(t,"h")
if(!(typeof s=="number")){s=A.cG(A.v(s==null?"":s))
if(s==null)s=0}u=u.h(t,"l")
if(!(typeof u=="number")){u=A.cG(A.v(u==null?"":u))
if(u==null)u=0}B.d.u(c8,A.a([s,u],c7))}w=c2.f
if(w)for(v=0;v<x.length;x.length===u||(0,A.I)(x),++v){t=x[v]
s=A.a([],c7)
r=J.a5(t)
if(r.h(t,"f")!=null){q=r.h(t,"f")
if(!(typeof q=="number")){q=A.cG(A.v(q==null?"":q))
if(q==null)q=0}s.push(q)}if(r.h(t,"s")!=null){r=r.h(t,"s")
if(!(typeof r=="number")){r=A.cG(A.v(r==null?"":r))
if(r==null)r=0}s.push(r)}B.d.u(c8,s)}c7=c2.e
u=c7!=null
if(u)c8.push(c7)
s=c2.r
r=s>0
if(r)c8.push(s)
c4.a=B.d.eD(c8,B.pq)
p=c4.b=B.d.eD(c8,B.or)
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
k=new D.cWD(l)
j=new D.cWF(c4,c6)
$.R()
i=A.L()
q=c2.d.a
i.r=(q?C.pB:C.pA).j(0.7).gp(0)
i.c=1
for(h=1;h<=3;++h){g=c6*h/4
for(f=0;f<c8;f+=6)c9.ah(new A.r(f,g),new A.r(f+2,g),i)}if(w){w=new D.cWE(c2,m,k,j,c9)
w.$2("s",B.b2)
w.$2("f",B.bA)}for(w=Math.max(2,l*0.62)/2,e=c2.w,d=e!=null,h=0;h<m;++h){t=x[h]
a0=J.a5(t)
a1=a0.h(t,"o")
if(!(typeof a1=="number")){a2=A.cG(A.v(a1==null?"":a1))
a1=a2==null?0:a2}a3=a0.h(t,"c")
if(!(typeof a3=="number")){a2=A.cG(A.v(a3==null?"":a3))
a3=a2==null?0:a2}a4=a0.h(t,"h")
if(!(typeof a4=="number")){a2=A.cG(A.v(a4==null?"":a4))
a4=a2==null?0:a2}a5=a0.h(t,"l")
if(!(typeof a5=="number")){a0=A.cG(A.v(a5==null?"":a5))
a5=a0==null?0:a0}a6=a3>=a1?C.e7:B.k7
a7=d&&e!==h
$.R()
a8=new A.ar(B.T,B.Q,B.W,B.X,B.U)
a8.r=(a7?a6.j(0.45):a6).gp(0)
a0=k.$1(h)
a2=j.$1(a4)
a9=k.$1(h)
b0=j.$1(a5)
a8.c=1.4
c9.ah(new A.r(a0,a2),new A.r(a9,b0),a8)
b1=j.$1(Math.max(a1,a3))
b2=j.$1(Math.min(a1,a3))
b0=A.bv(new A.a2(k.$1(h)-w,b1,k.$1(h)+w,Math.max(b2,b1+1.5)),B.hC)
a8.b=B.Q
c9.aq(b0,a8)}if(u)c2.aUf(c9,j.$1(c7),c8,E.wA,"Buy "+D.ip(c7,!0,!1),!0)
if(r){c7=j.$1(s)
c2.bOZ(c9,c7,c8,(q?C.dN:B.c).j(0.55),D.ip(s,!0,!1))}b3=A.fu(c3,B.cw,c3,c3,c3,c3,B.a7,B.bW,c3,B.dF,B.bX)
for(c7=[0,m/3|0,B.o.ar(2*m,3),m-1],w=c7.length,c5-=13,u=c2.b,v=0;v<w;++v){h=c7[v]
s=J.t(x[h],"t")
b4=A.bh(A.v(s==null?"":s))
if(b4==null)continue
s=D.aQA(D.bF3(b4))
r=q?C.dp:C.dq
b3.sb2(0,new A.et(s,c3,c3,B.cN,c3,c3,c3,c3,c3,c3,new A.F(!0,r,c3,u,c3,c3,10,c3,c3,c3,c3,c3,c3,c3,c3,c3,c3,c3,c3,c3,c3,c3,c3,c3,c3,c3)))
b3.e5()
s=k.$1(h)
r=b3.b.c
b3.a2(c9,new A.r(B.i.D(s-r/2,0,c8-r),c5))}if(d&&e<m){t=x[e]
f=k.$1(e)
c5=J.a5(t)
b5=j.$1(D.fg(c5.h(t,"c")))
$.R()
b6=A.L()
b6.r=(q?C.dN:B.c).j(0.5).gp(0)
b6.c=1
for(b7=0;b7<c6;b7+=6)c9.ah(new A.r(f,b7),new A.r(f,b7+3),b6)
$.R()
c7=A.L()
c7.r=(q?B.c.j(0.92):C.lR).gp(0)
c9.O(new A.r(f,b5),6,c7)
c7=A.L()
c7.r=(q?C.dN:B.c).gp(0)
c7.b=B.ab
c7.c=2.5
c9.O(new A.r(f,b5),6,c7)
c7=c5.h(t,"t")
b4=A.bh(A.v(c7==null?"":c7))
c7=b4==null?"":D.aQA(D.bF3(b4))+" ET\n"
c5=D.ip(D.fg(c5.h(t,"c")),!0,!1)
b3.sb2(0,A.cT(c3,c3,c3,c3,c3,c3,c3,c3,c3,A.l(c3,c3,q?B.c:C.kY,c3,c3,c3,c3,c3,u,c3,c3,11.5,c3,c3,B.F,c3,1.3,!0,c3,c3,c3,c3,c3,c3,c3,c3),c7+c5))
b3.sD9(0,B.K)
b3.e5()
c5=b3.b
b8=c5.c+18
c5=c5.a.c
b9=c5.gb9(c5)+10
c0=B.i.D(f-b8/2,0,c8-b8)
c1=Math.max(0,b5-b9-14)
c8=A.bv(new A.a2(c0,c1,c0+b8,c1+b9),B.hT)
c5=A.L()
c5.r=(q?C.kY:B.c).gp(0)
c9.aq(c8,c5)
b3.a2(c9,new A.r(c0+9,c1+5))}},
aUf(d,e,f,g,h,i){var x,w,v,u,t,s,r,q,p,o,n=null
$.R()
x=A.L()
x.r=g.gp(0)
x.c=1.2
for(w=0;w<f;w+=7)d.ah(new A.r(w,e),new A.r(w+3.5,e),x)
v=A.fu(n,B.cw,n,n,n,A.cT(n,n,n,n,n,n,n,n,n,A.l(n,n,B.c,n,n,n,n,n,this.b,n,n,10,n,n,B.F,n,n,!0,n,n,n,n,n,n,n,n),h),B.a7,B.bW,n,B.dF,B.bX)
v.e5()
u=v.b
t=u.c+12
u=u.a.c
s=u.gb9(u)+6
r=i?0:f-t
u=e-s/2
q=A.bv(new A.a2(r,u,r+t,u+s),B.q9)
$.R()
p=A.L()
if(i)o=E.wA
else o=this.d.a?C.kY:B.c
p.r=o.gp(0)
d.aq(q,p)
v.a2(d,new A.r(r+6,u+3))},
bOZ(d,e,f,g,h){return this.aUf(d,e,f,g,h,!1)},
aD(d){var x=this
return d.c!==x.c||d.w!=x.w||d.f!==x.f||d.e!=x.e||d.r!==x.r||d.d.a!==x.d.a}}
D.aKv.prototype={
a2(d,e){var x,w,v,u,t,s,r,q,p,o,n=null,m=this.b
if(m.length<2)return
x=A.T(m).k("N<1,H>")
w=A.B(new A.N(m,new D.fg6(),x),x.k("aj.E"))
v=B.d.eD(w,B.pq)
u=B.d.eD(w,B.or)-v
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
x.san(new A.a7(B.aX,B.b1,B.x,A.a([q.j(0.25),q.j(0)],y.O),n,n).aA(0,new A.a2(0,0,0+m,0+s)))
d.af(o,x)
x=A.L()
x.r=q.gp(0)
x.b=B.ab
x.c=1.8
x.e=B.dP
d.af(t,x)
x=B.d.gal(w)
p=A.L()
p.r=q.gp(0)
d.O(new A.r(m,s-(x-v)/u*s),3,p)},
aD(d){return d.b!==this.b||!d.c.A(0,this.c)}}
D.yU.prototype={}
D.a1t.prototype={
ga9z(){return this.a?B.ce.j(0.08):B.v.j(0.35)}}
D.cC.prototype={}
D.uq.prototype={}
D.XB.prototype={
S(){var x,w,v,u,t=null,s=y.N,r=y.z
r=A.J(["done",A.a([],y.s),"lessons",A.S(s,r)],s,r)
x=A.a([],y.h)
w=$.ax()
v=A.m5(0,t,t)
u=A.a([],y.t)
return new D.aHa(r,x,new A.at(B.ax,w),v,u,new A.at(B.ax,w),A.S(s,s),A.S(s,y.R),B.Z,t,t)}}
D.a_w.prototype={}
D.aHa.prototype={
gLc(){var x,w=this,v=w.d
if(v===$){w.a.toString
x=A.acm(null,0,3,w)
w.d!==$&&A.bF()
w.d=x
v=x}return v},
gJW(){var x=y.g.a(this.x.h(0,"done"))
if(x==null)x=B.cb
return J.b8(x,new D.eFZ(),y.N).fB(0)},
Z(){var x,w,v,u=this
u.a4()
x=u.e=u.a.c
w=x==null
u.y=!w
u.CW=D.eGK(w?null:J.t(x,"fx"))
x=u.a.c
v=D.eGK(x==null?null:J.t(x,"markets"))
if(v.length!==0)u.f=v
u.r=new A.V(Date.now(),0,!1)
u.gLc().aV(0,new D.eGQ(u))
if(!u.a.d){u.a0M()
u.Rb()
A.SV().bE(new D.eGR(u),y.H)
u.w=A.d9(B.ha,new D.eGS(u))}},
t(){var x,w=this,v=w.w
if(v!=null)v.a1(0)
v=w.as
if(v!=null)v.a1(0)
w.gLc().t()
v=w.dx
x=$.ax()
v.V$=x
v.R$=0
v=w.ax
v.V$=x
v.R$=0
w.ay.t()
w.bBo()},
a0M(){return this.c7_()},
c7_(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g
var $async$a0M=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:h={}
h.a=null
u=4
x=7
return A.b(A.az(),$async$a0M)
case 7:r=e
q=A.aW(J.t(r.a,"ngmy_signal_grid_academy_v2"))
o=q!=null?h.a=A.a1(y.f.a(B.V.aP(0,q,null)),y.N,y.z):null
p=r.qI("ngmy_signal_grid_lessons_done")
if(o==null&&p!=null){o=y.N
n=y.z
h.a=A.J(["done",p,"lessons",A.S(o,n)],o,n)}u=2
x=6
break
case 4:u=3
g=t.pop()
x=6
break
case 3:x=2
break
case 6:o=y.N
n=y.z
x=8
return A.b(A.fZ(A.J(["action","paLearnGet"],o,n),!1,!1,!1,!1,B.ha),$async$a0M)
case 8:l=e
if(s.c==null){x=1
break}k=l==null?null:J.t(l,"progress")
j=y.f
if(j.b(k)){l.toString
i=A.a1(j.a(J.t(l,"progress")),o,n)}else i=null
s.l(new D.eGj(h,s,l,i))
if(i==null&&h.a!=null)s.aCH()
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a0M,w)},
aCH(){var x=this.as
if(x!=null)x.a1(0)
this.as=A.cx(B.CV,new D.eGu(this))},
ae7(d){return this.c66(d)},
c66(d){var x=0,w=A.j(y.H),v=this,u,t,s
var $async$ae7=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=B.d.cv(C.E7,new D.eG1(v))
v.l(new D.eG2(v,d))
v.aCH()
u=B.d.cv(C.E7,new D.eG3(v))
x=!s&&u&&v.c!=null?2:3
break
case 2:t=v.c
t.toString
x=4
return A.b(A.ce(null,null,!0,null,new D.eG4(v),t,null,!0,!0,y.H),$async$ae7)
case 4:case 3:return A.h(null,w)}})
return A.i($async$ae7,w)},
Rb(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$Rb=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(A.fZ(A.J(["action","paSignals"],y.N,y.z),!1,!1,!1,!1,B.CR),$async$Rb)
case 3:s=e
if(u.c==null||s==null||!J.z(J.t(s,"ok"),!0)){x=1
break}t=J.a5(s)
u.l(new D.eGt(u,D.eGK(t.h(s,"fx")),D.eGK(t.h(s,"markets")),s))
u.ch4()
case 1:return A.h(v,w)}})
return A.i($async$Rb,w)},
ch4(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=A.a([],y.s)
for(x=k.gaaj(),w=x.length,v=k.dy,u=y.N,t=y.z,s=y.f,r=k.fr,q=0;q<x.length;x.length===w||(0,A.I)(x),++q){p=x[q]
o=J.a5(p)
n=J.k(o.h(p,"asset"))
o=o.h(p,"reading")
o=(s.b(o)?A.a1(o,u,t):A.S(u,t)).h(0,"bias")
m=J.k(o==null?"unknown":o)
l=v.h(0,n)
if(l!=null&&l!==m&&m!=="unknown"&&l!=="unknown"){r.n(0,n,new A.bsC(new A.V(Date.now(),0,!1),l,m))
i.push(n+" turned "+m.toUpperCase())}v.n(0,n,m)}r.bq(r,new D.eGk())
if(i.length!==0&&k.c!=null){k.l(new D.eGl())
x=k.c.L(y.q).f
u=A.cS(i,0,A.dx(3,"count",y.S),u).aM(0," \xb7 ")
w=i.length
w=w>3?" and "+(w-3)+" more":""
x.U(A.b2(j,j,j,B.i1,j,B.t,j,A.c("Signal changed: "+u+w,j,j,j,j,j,j,j,j,j,j),j,B.lv,j,j,j,j,j,j,j,j,j,j))}},
gaaj(){var x=A.B(this.gyz(),y.P)
B.d.u(x,this.CW)
return x},
gyz(){var x=this.f
if(x==null){x=this.e
x=D.hk_(D.hL(D.hL(x==null?null:J.t(x,"state")).h(0,"snapshot")))}return x},
gcE9(){var x=this.gyz(),w=A.T(x).k("X<1>"),v=A.B(new A.X(x,new D.eGI(),w),w.k("M.E"))
if(v.length===0)return this.gyz().length===0?null:B.d.gH(this.gyz())
B.d.b_(v,new D.eGJ())
return B.d.gH(v)},
c6D(){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.e,i=D.hL(j==null?k:J.t(j,"state")),h=y.f.b(i.h(0,"shadow"))?D.hL(i.h(0,"shadow")):k
j=l.e
x=D.hL(j==null?k:J.t(j,"today"))
j=l.e
w=D.hL(j==null?k:J.t(j,"record"))
j=l.fy
if(!(j.length!==0)){j=l.e
j=j==null?k:J.t(j,"nowEt")
if(j==null)j="unknown"}j="LIVE DATA from the NGMY paper trading agent (Eastern Time now: "+A.v(j)+"):\n"
if(l.e!=null){v=J.z(i.h(0,"enabled"),!0)?"running":"stopped"
u=J.z(i.h(0,"brakePaused"),!0)?", paused by the 25 dollar brake":""
t=D.ip(D.fg(i.h(0,"totalPnl")),!0,!0)
s=D.ip(D.fg(x.h(0,"day_pnl")),!0,!0)
r=w.h(0,"wins")
r=A.v(r==null?0:r)
q=w.h(0,"losses")
j+="Agent: "+v+u+". Pretend P/L all time "+t+", today "+s+", wins "+r+", losses "+A.v(q==null?0:q)+".\n"}if(!(l.e==null))if(h!=null){p=D.fg(J.t(B.d.dA(l.gyz(),new D.eG7(h),new D.eG8()),"price"))
o=D.fg(h.h(0,"entryPrice"))
v=A.v(h.h(0,"symbol"))
u=B.i.aa(o,2)
t=B.i.aa(p,2)
j+="Open pretend trade: "+v+", $50 bought at "+u+", now "+t+" ("+A.v(o===0?0:B.i.aa((p-o)/o*100,2))+"%). Take profit at "+B.i.aa(o*1.03,2)+", stop loss at "+B.i.aa(o*0.985,2)+".\n"}else j+="No open pretend trade.\n"
n=new D.eG9()
j+="Agent markets (5-minute candles; fast line = 9-candle average, slow = 21-candle average; strength 0 bearish to 100 bullish):\n"
for(v=l.gyz(),u=v.length,m=0;m<v.length;v.length===u||(0,A.I)(v),++m)j+=A.v(n.$1(v[m]))+"\n"
v=l.CW
u=v.length
if(u!==0){j+="Forex pairs (real interbank prices, 1-minute candles, signals only; the agent does not trade them; OTC prices at brokers differ):\n"
for(m=0;m<v.length;v.length===u||(0,A.I)(v),++m)j+=A.v(n.$1(v[m]))+"\n"}return j.charCodeAt(0)==0?j:j},
JV(d){return this.bHj(d)},
bHj(d){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o,n,m,l,k
var $async$JV=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:l={}
k=B.a.i(d)
if(k.length===0||u.ch){x=1
break}u.ax.bO(0,B.ci)
u.l(new D.eFV(u,k))
u.b8r()
t=u.at
s=t.length
if(s>1){t=B.d.ds(t,Math.max(0,s-9),s-1)
r=new A.N(t,new D.eFW(),A.T(t).k("N<1,p>")).aM(0,"\n")}else r=""
t=u.e
t=t==null?null:J.t(t,"rules")
y.g.a(t)
if(t==null)t=u.fx
s=y.N
q=J.b8(t,new D.eFX(),s).aM(0,"\n")
t=u.c6D()
p=r.length===0?"":"\nCONVERSATION SO FAR:\n"+r+"\n"
l.a=null
x=u.a.d?3:5
break
case 3:l.a="Preview mode: the tutor answers here using the live readings."
x=4
break
case 5:x=6
return A.b(A.fZ(A.J(["action","chat","prompt",'You are the NGMY Signal Grid trading tutor. You teach a complete beginner how trading works, using the live market data and the rules of the NGMY paper trading agent below.\nHow to answer:\n- Plain, friendly, simple English. Short sentences. No jargon without explaining it. Usually under 170 words.\n- When the question is about a market or "right now", use the LIVE DATA and quote the real numbers (price, trend, strength, RSI, last hour), then explain what they mean and what the agent\'s rules say.\n- Say clearly whether a market looks bullish, bearish or sideways and why, and what would need to happen for a buy or sell signal under the agent\'s rules.\n- This is practice with pretend (paper) money. You may explain what the rules signal, but never promise profit, never say a price will surely go up or down, and never tell the student to trade real or borrowed money. Remind them briefly when it fits that signals can fail and the stop loss keeps losses small.\n- No markdown headings or tables. You may use short lines starting with "- ".\n\nAGENT RULES:\n'+q+"\n\n"+t+"\n"+p+"\nStudent: "+k+"\nTutor:"],s,y.z),!1,!1,!1,!1,B.nR),$async$JV)
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
break}u.l(new D.eFY(l,u))
u.b8r()
case 1:return A.h(v,w)}})
return A.i($async$JV,w)},
b8r(){$.aU.x1$.push(new D.eGv(this))},
aQT(d){this.gLc().C_(2)
this.JV(d)},
B(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=A.O(d).ax.a===B.dd,g=new D.a1t(h),f=h?C.yK:C.yI,e=h?C.yK:C.yI
e=A.a([e,h?C.a_B:C.a_r],y.O)
x=j.b33(g,B.eG,new D.eGM(d))
w=A.c("Trading Academy",i,i,i,i,i,i,A.l(i,i,h?C.dN:B.c,i,i,i,i,i,i,i,i,17,i,i,B.F,i,i,!0,i,i,i,i,i,i,i,i),i,i,i)
v=y.p
w=A.A(A.a([x,B.ar,A.E(A.x(A.a([w,A.c("Lessons, live signals and a tutor",i,i,i,i,i,i,A.l(i,i,h?C.dp:C.dq,i,i,i,i,i,i,i,i,11.5,i,i,i,i,i,!0,i,i,i,i,i,i,i,i),i,i,i)],v),B.B,i,B.e,B.h,0,B.p),1),A.o(i,C.fod,B.f,i,i,new A.n(C.e7.j(0.14),i,i,A.m(999),i,i,B.m),i,i,i,i,B.fN,i,i,i)],v),B.l,i,B.e,B.h,0,i,i)
x=h?C.H1:C.GR
u=A.m(999)
t=A.a([],v)
for(s=[C.fei,C.fcz,C.fdg],r=s.length,q=0;q<r;++q){p={}
o=s[q]
p.a=null
p.a=o.a
n=j.gLc().d===p.a
if(n)m=h?C.kY:B.c
else m=B.L
l=new A.aP(999,999)
if(n)k=h?B.c:C.kY
else k=h?C.dp:C.dq
k=A.W(o.c,k,i,i,i,15)
if(n)n=h?B.c:C.kY
else n=h?C.dp:C.dq
t.push(new A.bx(1,B.ba,A.ay(i,A.cV(i,new A.c3(B.aL,B.b9,B.h,B.l,i,B.p,i,0,A.a([k,B.e4,new A.d2(1,B.cg,A.c(o.b,i,i,B.a2,i,i,i,new A.F(!0,n,i,i,i,i,12.5,B.F,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i),i,i,i),i)],v),i),i,i,B.b_,new A.n(m,i,i,new A.bb(l,l,l,l),i,i,B.m),B.a3,i,i,i,i,B.wT,i,i,i),B.y,!1,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,new D.eGN(p,j),i,i,i,i,i,i,!1,B.a4),i))}h=A.o(i,A.A(t,B.l,i,B.e,B.h,0,i,i),B.f,i,i,new A.n(x,i,i,u,i,i,B.m),i,i,i,i,B.ez,i,i,i)
x=j.gLc()
return A.c5(i,f,A.o(i,A.bm(!0,A.x(A.a([new A.D(C.bG5,w,i),new A.D(B.ao7,h,i),A.E(A.bak(A.a([j.c6a(g),j.cDe(g),j.bHp(g)],v),x,i),1)],v),B.l,i,B.e,B.h,0,B.p),!0,!1,B.ag,!0,!0),B.f,i,i,new A.n(i,i,i,i,i,new A.a7(B.aX,B.b1,B.x,e,i,i),B.m),i,i,i,i,i,i,i,i),i,!1,!1,i,i)},
b33(d,e,f){var x=null,w=d.a,v=w?B.c.j(0.92):C.lR,u=A.K(w?B.c:C.uQ,B.r,1)
return A.aF(!1,B.a3,!0,x,A.aM(!1,x,!0,A.o(x,A.W(e,w?C.dN:B.c,x,x,x,18),B.f,x,x,new A.n(x,x,u,x,x,x,B.a6),x,40,x,x,x,x,x,40),B.cK,!0,x,x,x,x,x,x,x,x,x,x,x,f,x,x,x,x,x,x,x),B.f,v,0,x,x,B.cK,x,x,B.ai)},
c6a(d){var x,w=null,v=new A.X(C.E7,new D.eG6(this),y.E).gJ(0),u=A.m(24),t=y.p
t=A.a([A.o(w,A.x(A.a([C.heI,B.au,C.fWm,B.aA,A.bu(A.m(9),A.jt(B.c.j(0.18),w,w,8,w,v/10,B.afc),B.aq),B.ak,A.c(""+v+" of 10 lessons done",w,w,w,w,w,w,B.acG,w,w,w)],t),B.B,w,B.e,B.h,0,B.p),B.f,w,w,new A.n(w,w,w,u,w,C.cec,B.m),w,w,w,w,B.fc,w,w,w),B.aA],t)
for(x=0;x<10;++x)t.push(this.c68(d,x))
t.push(B.ak)
t.push(A.c("Practice with pretend money. Signals and lessons are for learning; markets can always surprise.",w,w,w,w,w,w,A.l(w,w,d.a?C.dp:C.dq,w,w,w,w,w,w,w,w,11,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),B.K,w,w))
return A.cn(t,w,w,C.aob,w,w,B.ah,!1)},
c68(d,e){var x,w,v,u=null,t=C.E7[e],s=this.gJW().q(0,t.a),r=d.a,q=r?B.c.j(0.92):C.lR,p=A.m(20),o=A.K(r?B.c:C.uQ,B.r,1),n=A.a([new A.ab(0,B.H,d.ga9z(),B.hS,14)],y.V),m=A.m(15)
m=A.o(u,A.W(t.e,B.c,u,u,u,u),B.f,u,u,new A.n(t.f,u,u,m,u,u,B.m),u,46,u,u,u,u,u,46)
x=A.c("Lesson "+(e+1)+" \xb7 "+t.d+" min",u,u,u,u,u,u,A.l(u,u,r?C.dp:C.dq,u,u,u,u,u,u,u,u,11,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)
w=A.c(t.b,u,u,u,u,u,u,A.l(u,u,r?C.dN:B.c,u,u,u,u,u,u,u,u,15,u,u,B.F,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)
v=y.p
w=A.E(A.x(A.a([x,w,A.c(t.c,u,u,u,u,u,u,A.l(u,u,r?C.dp:C.dq,u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],v),B.B,u,B.e,B.h,0,B.p),1)
x=s?B.ea:B.eM
if(s)r=C.e7
else r=r?C.dp:C.dq
return A.ay(u,A.o(u,A.A(A.a([m,B.bb,w,A.W(x,r,u,u,u,u)],v),B.l,u,B.e,B.h,0,u,u),B.f,u,u,new A.n(q,u,o,p,n,u,B.m),u,u,u,B.d4,B.bG,u,u,u),B.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new D.eG5(this,t),u,u,u,u,u,u,!1,B.a4)},
clu(d){var x=this.c
x.toString
A.a8(x,!1).cb(A.ea(new D.eGr(this,d),!1,null,y.H))},
c6H(c1,c2){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6=this,b7=null,b8="reading",b9="rsi",c0=b6.gcE9()
if(c0==null)return A.c("Live example appears once the markets have loaded.",b7,b7,b7,b7,b7,b7,A.l(b7,b7,c1.a?C.dp:C.dq,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,!0,b7,b7,b7,b7,b7,b7,b7,b7),b7,b7,b7)
x=J.a5(c0)
w=J.k(x.h(c0,"asset"))
v=D.aRl(c0)
u=D.hL(x.h(c0,b8))
t=D.fg(x.h(c0,"price"))
s=new D.eGa(v,c1,t)
r=new D.eGi(c1)
switch(c2){case"basics":q=v.length!==0?D.fg(J.t(B.d.gH(v),"c")):t
p=q===0?50:50*t/q
x=r.$1("Right now "+w+" is "+D.ip(t,!0,!1)+". About 4 hours ago it was "+D.ip(q,!0,!1)+".")
o=D.ip(p,!0,!1)
n=p>=50?"a win of":"a loss of"
return A.x(A.a([x,B.O,r.$1("If you had put $50 into "+w+" then, it would be worth "+o+" now: "+n+" "+D.ip(Math.abs(p-50),!0,!1)+". That difference is your profit or loss.")],y.p),B.B,b7,B.e,B.h,0,B.p)
case"candles":m=v.length!==0?B.d.gal(v):A.S(y.N,y.z)
x=J.a5(m)
o=D.fg(x.h(m,"c"))
n=D.fg(x.h(m,"o"))
l=s.$2$last$lines(24,!1)
k=D.ip(D.fg(x.h(m,"o")),!0,!1)
j=D.ip(D.fg(x.h(m,"c")),!0,!1)
o=o>=n?"GREEN: buyers won those 5 minutes":"YELLOW: sellers won those 5 minutes"
return A.x(A.a([l,B.O,r.$1("The last finished "+w+" candle opened at "+k+" and closed at "+j+", so it is "+o+". Its high was "+D.ip(D.fg(x.h(m,"h")),!0,!1)+" and its low "+D.ip(D.fg(x.h(m,"l")),!0,!1)+".")],y.p),B.B,b7,B.e,B.h,0,B.p)
case"trend":x=y.N
i=A.S(x,y.S)
for(o=b6.gyz(),n=o.length,l=y.z,k=y.f,h=0;h<o.length;o.length===n||(0,A.I)(o),++h){j=J.t(o[h],b8)
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
return A.x(A.a([x,B.O,r.$1(w+" is "+o.toUpperCase()+" right now. Across all 10 markets: "+n+" bullish, "+l+" bearish, "+k+" sideways.")],y.p),B.B,b7,B.e,B.h,0,B.p)
case"ma":f=D.fg(x.h(c0,"fast"))
e=D.fg(x.h(c0,"slow"))
x=s.$0()
o=D.ip(f,!0,!1)
n=D.ip(e,!0,!1)
l=f>=e
k=l?"ABOVE":"BELOW"
l=l?"UP":"DOWN"
return A.x(A.a([x,B.O,r.$1("On "+w+" the pink fast line is at "+o+" and the purple slow line at "+n+". The fast line is "+k+" the slow line, so the short-term trend is "+l+".")],y.p),B.B,b7,B.e,B.h,0,B.p)
case"cross":x=b6.gyz()
o=A.T(x)
n=o.k("cM<1,@>")
d=A.B(new A.cM(new A.X(x,new D.eGb(),o.k("X<1>")),new D.eGc(),n),n.k("M.E"))
x=b6.gyz()
o=A.T(x)
n=o.k("cM<1,@>")
a0=A.B(new A.cM(new A.X(x,new D.eGd(),o.k("X<1>")),new D.eGe(),n),n.k("M.E"))
x=s.$0()
if(d.length!==0)o="Fresh BUY crosses right now: "+B.d.aM(d,", ")+". On its next automatic check the agent would buy the strongest of these if it holds nothing."
else o="No fresh buy cross in any open market right now. "+(a0.length!==0?"Fresh sell crosses: "+B.d.aM(a0,", ")+". ":"")+"The agent simply waits; no signal means no trade."
return A.x(A.a([x,B.O,r.$1(o)],y.p),B.B,b7,B.e,B.h,0,B.p)
case"rsi":x=b6.gyz()
o=A.T(x).k("X<1>")
a1=A.B(new A.X(x,new D.eGf(),o),o.k("M.E"))
x=y.p
o=A.a([],x)
for(n=a1.length,l=c1.a,k=y.N,j=y.z,a2=y.f,a3=y.c,h=0;h<a1.length;a1.length===n||(0,A.I)(a1),++h){a4=a1[h]
a5=J.a5(a4)
a6=J.k(a5.h(a4,"asset"))
a7=l?C.dN:B.c
a6=A.c(a6,b7,b7,b7,b7,b7,b7,new A.F(!0,a7,b7,b7,b7,b7,12,B.F,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7),b7,b7,b7)
a7=new A.aP(9,9)
a8=a5.h(a4,b8)
a8=(a2.b(a8)?A.a1(a8,k,j):A.S(k,j)).h(0,b9)
if(!(typeof a8=="number")){a8=A.cG(A.v(a8==null?"":a8))
if(a8==null)a8=0}a9=l?C.H1:C.GR
b0=a5.h(a4,b8)
b0=(a2.b(b0)?A.a1(b0,k,j):A.S(k,j)).h(0,b9)
if(!(typeof b0=="number")){b0=A.cG(A.v(b0==null?"":b0))
if(b0==null)b0=0}if(b0>=70)b0=C.eI
else{b0=a5.h(a4,b8)
b0=(a2.b(b0)?A.a1(b0,k,j):A.S(k,j)).h(0,b9)
if(!(typeof b0=="number")){b0=A.cG(A.v(b0==null?"":b0))
if(b0==null)b0=0}b0=b0<=30?B.cD:C.e7}b0=A.jt(a9,b7,b7,8,b7,a8/100,new A.lc(b0,a3))
a5=a5.h(a4,b8)
a5=(a2.b(a5)?A.a1(a5,k,j):A.S(k,j)).h(0,b9)
if(!(typeof a5=="number")){a5=A.cG(A.v(a5==null?"":a5))
if(a5==null)a5=0}a5=B.i.aa(a5,0)
a8=l?C.dN:B.c
o.push(new A.D(B.cy,new A.c3(B.aL,B.e,B.h,B.l,b7,B.p,b7,0,A.a([new A.a6(70,b7,a6,b7),new A.bx(1,B.ba,new A.n6(new A.bb(a7,a7,a7,a7),B.aq,b0,b7),b7),B.aa,new A.a6(26,b7,A.c(a5,b7,b7,b7,b7,b7,b7,new A.F(!0,a8,b7,b7,b7,b7,12,B.F,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7),b7,b7,b7),b7)],x),b7),b7))}o.push(r.$1("Red bars are above 70 (stretched), blue below 30 (oversold), green in between (healthy)."))
return A.x(o,B.B,b7,B.e,B.h,0,B.p)
case"risk":b1=t===0?0:50/t
x=r.$1("If the agent bought "+w+" right now at "+D.ip(t,!0,!1)+":")
return A.x(A.a([x,B.ak,r.$1("- $50 buys "+B.i.aa(b1,b1<0.01?6:4)+" "+w),r.$1("- Take profit at "+D.ip(t*1.03,!0,!1)+": you get back about $51.50 (+$1.50)"),r.$1("- Stop loss at "+D.ip(t*0.985,!0,!1)+": you get back about $49.25 (-$0.75)"),B.ak,r.$1("Win 1 and lose 2 of 3 trades: +1.50 - 0.75 - 0.75 = $0.00. That is break even.")],y.p),B.B,b7,B.e,B.h,0,B.p)
case"brakes":x=b6.e
if(x==null)return r.$1('Try it yourself: before your next practice day, write down "I stop after losing $10 today". If three trades in a row lose, close the app and come back tomorrow. That is exactly what the agent does.')
b2=D.hL(J.t(x,"state"))
x=b6.e
x=D.ip(D.fg(D.hL(x==null?b7:J.t(x,"today")).h(0,"day_pnl")),!0,!0)
o=D.ip(D.fg(b2.h(0,"totalPnl")),!0,!0)
n=J.z(b2.h(0,"brakePaused"),!0)?"The brake is ON right now.":"Both brakes are off, it can keep trading."
return r.$1("Today the agent is at "+x+" (the daily stop is -$10) and "+o+" all time (the brake is -$25). "+n)
case"hours":if(b6.f!=null)b3=b6.go
else{x=b6.e
b3=J.z(D.hL(x==null?b7:J.t(x,"market")).h(0,"stockOpen"),!0)}b4=B.d.aS(b6.CW,new D.eGg())
x=b3?"OPEN":"CLOSED"
o=b4?"OPEN":"CLOSED"
return r.$1("Right now the US stock market is "+x+", the forex market is "+o+", and crypto is open, as always.")
case"practice":x=b6.e
if(x==null){x=b6.gaaj()
return r.$1("Right now "+new A.X(x,new D.eGh(),A.T(x).k("X<1>")).gJ(0)+" of "+b6.gaaj().length+" markets have signals that worked at least half the time lately. That is why a journal and many trades matter: some markets suit a method, others do not.")}b5=D.hL(J.t(x,"record"))
x=b5.h(0,"trades")
x=A.v(x==null?0:x)
o=b5.h(0,"wins")
o=A.v(o==null?0:o)
n=b5.h(0,"losses")
return r.$1("The agent journal so far: "+x+" finished pretend trades, "+o+" wins and "+A.v(n==null?0:n)+" losses. Keep watching until there are at least 20 before judging it.")}return B.bL},
cDe(a3){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null,d=B.a.i(f.cx),a0=f.gaaj(),a1=A.T(a0).k("X<1>"),a2=A.B(new A.X(a0,new D.eGz(f,d.toLowerCase()),a1),a1.k("M.E"))
B.d.b_(a2,new D.eGA(f))
d=A.T(a2).k("X<1>")
x=new A.X(a2,new D.eGB(),d).gJ(0)
w=new A.X(a2,new D.eGC(),d).gJ(0)
d=a2.length
if(f.r==null)v=0
else{u=Date.now()
t=f.r
t.toString
v=B.o.ar(new A.V(u,0,!1).bz(t).a,1e6)}if(v<20)s="just now"
else s=v<60?""+v+" s ago":""+B.o.ar(v,60)+" min ago"
u=y.p
t=A.a([],u)
for(r=a3.a,q=0;q<4;++q){p=C.d6h[q]
if(f.db===p)o=r?C.kY:B.c
else o=r?B.c.j(0.92):C.lR
n=new A.aP(999,999)
m=new A.av(r?C.pB:C.pA,1,B.r,-1)
l=p==="All"?"All "+a0.length:p+" "+new A.X(a0,new D.eGD(p),a1).gJ(0)
if(f.db===p)k=r?B.c:C.kY
else k=r?C.dN:B.c
B.d.u(t,A.a([A.ay(e,A.o(e,A.c(l,e,e,e,e,e,e,new A.F(!0,k,e,e,e,e,12,B.F,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e),e,e,e),B.f,e,e,new A.n(o,e,new A.bE(m,m,m,m),new A.bb(n,n,n,n),e,e,B.m),e,e,e,e,C.bGf,e,e,e),B.y,!1,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,new D.eGE(f,p),e,e,e,e,e,e,!1,B.a4),B.bg],u))}a1=A.E(A.ca(A.A(t,B.l,e,B.e,B.h,0,e,e),B.t,e,B.y,e,e,e,e,e,B.aL),1)
t=f.cy?B.cA:B.eN
t=A.a([A.A(A.a([a1,B.bg,f.b33(a3,t,new D.eGF(f))],u),B.l,e,B.e,B.h,0,e,e)],u)
if(f.cy){a1=A.l(e,e,r?C.dN:B.c,e,e,e,e,e,e,e,e,e,e,e,e,e,e,!0,e,e,e,e,e,e,e,e)
o=A.l(e,e,r?C.dp:C.dq,e,e,e,e,e,e,e,e,13,e,e,e,e,e,!0,e,e,e,e,e,e,e,e)
n=A.W(B.eN,r?C.dp:C.dq,e,e,e,e)
l=r?B.c.j(0.92):C.lR
k=A.m(999)
j=r?C.pB:C.pA
i=A.m(999)
h=r?C.pB:C.pA
B.d.u(t,A.a([B.S,A.aN(e,B.Z,!0,e,!0,B.t,e,A.aO(),f.dx,e,e,e,e,e,2,A.bB(e,new A.b6(4,k,new A.av(j,1,B.r,-1)),e,B.f8,e,e,e,e,!0,new A.b6(4,i,new A.av(h,1,B.r,-1)),e,e,e,e,e,l,!0,e,e,e,e,e,e,e,e,e,e,e,e,e,o,"Search a market, for example EUR/USD, GBP or Bitcoin",e,e,e,e,e,e,e,e,e,!0,!0,!1,e,n,e,e,e,e,e,e,e,e,e,e,e,e),B.y,!0,e,!0,e,!1,e,B.al,e,e,e,e,e,e,e,e,e,1,e,e,!1,"\u2022",e,new D.eGG(f),e,e,e,!1,e,e,!1,e,!0,e,B.ae,e,e,e,e,e,e,e,e,e,e,e,a1,!0,B.a7,e,B.ao,e,e,e,e)],u))}t.push(B.af)
t.push(f.bG3(a3))
t.push(A.A(A.a([A.E(f.av0(a3,"Bullish",x,C.e7,B.nf),1),B.aa,A.E(f.av0(a3,"Bearish",w,C.eI,B.a4P),1),B.aa,A.E(f.av0(a3,"Sideways",d-x-w,B.k7,C.ass),1)],u),B.l,e,B.e,B.h,0,e,e))
t.push(B.O)
t.push(A.A(A.a([C.c_S,B.e4,new A.d2(1,B.cg,A.c("Live \xb7 updated "+s+" \xb7 checks every 20 seconds, changes are flagged at once",e,e,e,e,e,e,A.l(e,e,r?C.dp:C.dq,e,e,e,e,e,e,e,e,11,e,e,e,e,e,!0,e,e,e,e,e,e,e,e),B.K,e,e),e)],u),B.l,e,B.b9,B.h,0,e,e))
d=f.db
if(d==="All"||d==="Forex"){d=B.k7.j(0.12)
a1=A.m(16)
o=A.K(B.k7.j(0.45),B.r,1)
B.d.u(t,A.a([B.S,A.o(e,A.c('Forex uses real market prices on 1-minute candles. OTC pairs at a broker are priced by that broker (always on weekends) and can move differently, and the payout % is the broker\'s. "Worked" shows how often past moves on this pair really went that way: under 50% means the signal has been worse than a coin flip, so do not trust it.',e,e,e,e,e,e,A.l(e,e,r?C.dN:B.c,e,e,e,e,e,e,e,e,11.8,e,e,e,e,1.35,!0,e,e,e,e,e,e,e,e),e,e,e),B.f,e,e,new A.n(d,e,o,a1,e,e,B.m),e,e,e,e,B.bl,e,e,e)],u))}t.push(B.af)
if(a0.length===0)t.push(A.c("Loading the markets...",e,e,e,e,e,e,A.l(e,e,r?C.dp:C.dq,e,e,e,e,e,e,e,e,e,e,e,e,e,e,!0,e,e,e,e,e,e,e,e),e,e,e))
if(a0.length!==0&&a2.length===0){d=f.cx
t.push(A.as(A.c('No market matches "'+d+'".',e,e,e,e,e,e,A.l(e,e,r?C.dp:C.dq,e,e,e,e,e,e,e,e,e,e,e,e,e,e,!0,e,e,e,e,e,e,e,e),e,e,e),e,e,e))}for(d=a2.length,a1=f.fr,q=0;q<a2.length;a2.length===d||(0,A.I)(a2),++q){g=a2[q]
u=J.a5(g)
u=a1.h(0,u.h(g,"asset"))==null?e:"JUST TURNED "+a1.h(0,u.h(g,"asset")).c.toUpperCase()
t.push(D.hH_(a3,g,u,!1,new D.eGH(f,g)))}t.push(A.c("Signals are estimates from recent price history. They can fail; never risk money you cannot afford to lose.",e,e,e,e,e,e,A.l(e,e,r?C.dp:C.dq,e,e,e,e,e,e,e,e,11,e,e,e,e,e,!0,e,e,e,e,e,e,e,e),B.K,e,e))
return A.PJ(A.cn(t,e,e,C.aob,e,e,B.ah,!1),e,f.gcg8())},
bG3(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=new A.X(C.E7,new D.eFR(i),y.E).gJ(0),f=i.z||i.y
if(!f)x=new A.b7([B.jC,B.b2,"Signal alerts unlock when you finish all 10 lessons ("+g+" of 10 done). You will be told the market, ENTER UP or DOWN, and the duration.","Go to lessons"])
else x=!i.Q?C.fkc:C.fj0
w=x.a
v=w[0]
u=h
t=h
s=h
r=w[1]
q=w[2]
p=w[3]
s=p
t=q
u=r
o=v
w=u.j(0.12)
n=A.m(16)
m=A.K(u.j(0.45),B.r,1)
l=A.W(o,u,h,h,h,h)
k=y.p
l=A.a([l,B.ar,A.E(A.c(t,h,h,h,h,h,h,A.l(h,h,d.a?C.dN:B.c,h,h,h,h,h,h,h,h,12,h,h,h,h,1.35,!0,h,h,h,h,h,h,h,h),h,h,h),1)],k)
if(s!=null){j=A.bn(u,h,h,h,h,h,B.f2,h,h,h,h,h)
B.d.u(l,A.a([B.aa,A.bI(A.c(s,h,h,h,h,h,h,B.pi,h,h,h),h,new D.eFS(i,f),j)],k))}return A.o(h,A.A(l,B.l,h,B.e,B.h,0,h,h),B.f,h,h,new A.n(w,h,m,n,h,h,B.m),h,h,h,B.e9,B.bl,h,h,h)},
av0(d,e,f,g,h){var x=null,w=A.m(18),v=A.a([g.j(0.2),g.j(0.05)],y.O),u=A.K(g.j(0.35),B.r,1),t=A.W(h,g,x,x,x,20),s=d.a,r=A.c(""+f,x,x,x,x,x,x,A.l(x,x,s?C.dN:B.c,x,x,x,x,x,x,x,x,22,x,x,B.u,x,x,!0,x,x,x,x,x,x,x,x),x,x,x)
return A.o(x,A.x(A.a([t,B.au,r,A.c(e,x,x,x,x,x,x,A.l(x,x,s?C.dp:C.dq,x,x,x,x,x,x,x,x,11.5,x,x,B.P,x,x,!0,x,x,x,x,x,x,x,x),x,x,x)],y.p),B.B,x,B.e,B.h,0,B.p),B.f,x,x,new A.n(x,x,u,w,x,new A.a7(B.a5,B.a9,B.x,v,x,x),B.m),x,x,x,x,B.bl,x,x,x)},
bHp(d){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=y.p,i=A.a([],j),h=l.at
if(h.length===0){x=d.a
w=x?B.c.j(0.92):C.lR
v=A.m(22)
u=A.K(x?B.c:C.uQ,B.r,1)
t=A.o(k,C.c0P,B.f,k,k,B.agq,k,40,k,k,k,k,k,40)
t=A.A(A.a([t,B.ar,A.E(A.c("Your trading tutor",k,k,k,k,k,k,A.l(k,k,x?C.dN:B.c,k,k,k,k,k,k,k,k,16,k,k,B.F,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),1)],j),B.l,k,B.e,B.h,0,k,k)
w=A.o(k,A.x(A.a([t,B.O,A.c("Ask anything about trading. The tutor sees the same live prices and readings as the agent, so it can explain what each market is doing right now.",k,k,k,k,k,k,A.l(k,k,x?C.dp:C.dq,k,k,k,k,k,k,k,k,12.5,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),k,k,k)],j),B.B,k,B.e,B.h,0,B.p),B.f,k,k,new A.n(w,k,u,v,k,k,B.m),k,k,k,k,B.bR,k,k,k)
v=A.a([],j)
for(s=0;s<6;++s){r=C.dcr[s]
u=x?C.dN:B.c
u=A.c(r,k,k,k,k,k,k,new A.F(!0,u,k,k,k,k,12,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k),k,k,k)
t=x?B.c.j(0.92):C.lR
q=x?C.pB:C.pA
p=new A.aP(999,999)
v.push(A.mF(k,t,u,k,new D.eFT(l,r),k,new A.ba(new A.bb(p,p,p,p),B.a1),new A.av(q,1,B.r,-1),k))}B.d.u(i,A.a([w,B.af,A.bZ(B.bI,v,B.br,k,8,8)],j))}for(x=h.length,w=d.a,s=0;s<h.length;h.length===x||(0,A.I)(h),++s){o=h[s]
v=o.a
u=v?B.a9:B.a5
if(v)t=w?C.kY:B.c
else t=w?B.c.j(0.92):C.lR
q=v?18:4
p=v?4:18
if(v)n=k
else{m=new A.av(w?B.c:C.uQ,1,B.r,-1)
n=new A.bE(m,m,m,m)}if(v)v=w?B.c:C.kY
else v=w?C.dN:B.c
i.push(new A.bK(u,k,k,A.o(k,A.AA(o.b,new A.F(!0,v,k,k,k,k,13.5,k,k,k,k,k,1.4,k,k,k,k,k,k,k,k,k,k,k,k,k),k),B.f,k,E.ag1,new A.n(t,k,n,new A.bb(B.i6,B.i6,new A.aP(q,q),new A.aP(p,p)),k,k,B.m),k,k,k,B.jg,B.hy,k,k,k),k))}if(l.ch){h=w?B.c.j(0.92):C.lR
x=A.m(18)
i.push(new A.bK(B.a5,k,k,A.o(k,A.A(A.a([B.ac4,B.aa,A.c("Reading the markets...",k,k,k,k,k,k,A.l(k,k,w?C.dp:C.dq,k,k,k,k,k,k,k,k,12.5,k,k,k,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)],j),B.l,k,B.e,B.M,0,k,k),B.f,k,k,new A.n(h,k,k,x,k,k,B.m),k,k,k,B.hx,B.hy,k,k,k),k))}i=A.E(A.cn(i,l.ay,k,C.bHt,k,k,B.ah,!1),1)
h=A.l(k,k,w?C.dN:B.c,k,k,k,k,k,k,k,k,k,k,k,k,k,k,!0,k,k,k,k,k,k,k,k)
x=A.l(k,k,w?C.dp:C.dq,k,k,k,k,k,k,k,k,k,k,k,k,k,k,!0,k,k,k,k,k,k,k,k)
v=w?B.c.j(0.92):C.lR
u=A.m(999)
t=w?C.pB:C.pA
q=A.m(999)
p=w?C.pB:C.pA
h=A.E(A.aN(k,B.Z,!1,k,!0,B.t,k,A.aO(),l.ax,k,k,k,k,k,2,A.bB(k,new A.b6(4,u,new A.av(t,1,B.r,-1)),k,B.zp,k,k,k,k,!0,new A.b6(4,q,new A.av(p,1,B.r,-1)),k,k,k,k,k,v,!0,k,k,k,k,k,k,k,k,k,k,k,k,k,x,"Ask about trading or a market...",k,k,k,k,k,k,k,k,k,!0,!0,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k),B.y,!0,k,!0,k,!1,k,B.al,k,k,k,k,k,k,k,k,k,4,1,k,!1,"\u2022",k,k,k,l.gcg6(),k,!1,k,k,!1,k,!0,k,B.ae,k,k,k,k,k,k,k,k,k,k,k,h,!0,B.a7,k,B.ao,k,B.acr,k,k),1)
x=w?C.kY:B.c
v=l.ch?k:new D.eFU(l)
return A.x(A.a([i,A.o(k,A.A(A.a([h,B.aa,A.aF(!1,B.a3,!0,k,A.aM(!1,k,!0,new A.a6(48,48,A.W(B.pQ,w?B.c:C.kY,k,k,k,k),k),B.cK,!0,k,k,k,k,k,k,k,k,k,k,k,v,k,k,k,k,k,k,k),B.f,x,0,k,k,B.cK,k,k,B.ai)],j),B.l,k,B.e,B.h,0,k,k),B.f,k,k,k,k,k,k,k,B.HC,k,k,k)],j),B.l,k,B.e,B.h,0,B.p)}}
D.a0x.prototype={
S(){var x=y.S
return new D.bkK(A.S(x,x))},
cYG(d){return this.e.$0()},
d0o(d){return this.x.$1(d)},
rr(){return this.y.$0()},
cZX(d){return this.z.$1(d)},
gd2(d){return this.w}}
D.bkK.prototype={
Z(){var x,w,v,u,t,s,r,q,p,o=this
o.a4()
x=C.dLj.h(0,o.a.c.a)
o.d=x==null?o.a.c.x:x
w=o.a.w
v=new D.dui()
u=new D.dug()
x=v.$1(w.h(0,"slots"))
t=A.T(x).k("X<1>")
x=A.B(new A.X(x,new D.due(o),t),t.k("M.E"))
o.e=x
x=x.length
t=o.d.length
if(x!==Math.min(10,t)){x=y.S
s=J.e0(t,x)
for(r=0;r<t;++r)s[r]=r
B.d.dU(s,B.cR)
o.e=A.cS(s,0,A.dx(Math.min(10,o.d.length),"count",x),A.T(s).c).dm(0)}x=v.$1(w.h(0,"right"))
o.f=A.ju(x,A.T(x).c)
o.r=u.$1(w.h(0,"tries"))
o.w=u.$1(w.h(0,"locks"))
o.x=v.$1(w.h(0,"used"))
for(x=o.e,t=x.length,q=0;q<x.length;x.length===t||(0,A.I)(x),++q){p=x[q]
if(!B.d.q(o.x,p))B.d.I(o.x,p)}o.bbh(!1)
o.z=A.d9(B.fM,new D.duf(o))},
t(){var x=this.z
if(x!=null)x.a1(0)
this.a3()},
b35(){var x,w,v,u,t,s,r=this,q=r.a
q.toString
x=r.e
x===$&&A.d()
w=r.f
w===$&&A.d()
w=A.B(w,A.a4(w).k("ci.E"))
v=r.r
v===$&&A.d()
u=y.N
t=y.S
v=v.iZ(v,new D.du6(),u,t)
s=r.w
s===$&&A.d()
t=s.iZ(s,new D.du7(),u,t)
s=r.x
s===$&&A.d()
return q.d0o(A.J(["slots",x,"right",w,"tries",v,"locks",t,"used",s],u,y.z))},
bbh(d){var x,w,v,u,t,s,r,q,p,o=this,n=Date.now(),m=o.y,l=y.X,k=!1,j=0
for(;;){x=o.e
x===$&&A.d()
if(!(j<x.length))break
A:{w=x[j]
x=o.w
x===$&&A.d()
v=x.h(0,w)
if(v==null||v>n)break A
x=o.d
x===$&&A.d()
u=x.length
t=A.a(new Array(u),l)
for(s=0;s<u;++s)t[s]=s
x=A.T(t).k("X<1>")
r=A.B(new A.X(t,new D.du8(o),x),x.k("M.E"))
if(r.length!==0)q=r
else{u=o.d.length
t=A.a(new Array(u),l)
for(s=0;s<u;++s)t[s]=s
x=A.T(t).k("X<1>")
q=A.B(new A.X(t,new D.du9(o),x),x.k("M.E"))}x=q.length
if(x===0)p=w
else p=q[B.cR.aw(x)]
o.w.W(0,w)
x=o.r
x===$&&A.d()
x.W(0,w)
m.W(0,w)
o.e[j]=p
x=o.x
x===$&&A.d()
if(!B.d.q(x,p))B.d.I(o.x,p)
k=!0}++j}if(k&&d)o.b35()},
cFV(){return this.bbh(!0)},
cmw(d){var x,w,v,u,t=this.d
t===$&&A.d()
x=t[d].b.length
t=J.e0(x,y.S)
for(w=0;w<x;++w)t[w]=w
v=this.x
v===$&&A.d()
u=new A.e_()
u.cS(d*7919+v.length)
B.d.dU(t,u)
return t},
cg5(d,e){var x=this,w=x.f
w===$&&A.d()
if(!w.q(0,d)){w=x.w
w===$&&A.d()
w=w.am(0,d)}else w=!0
if(w)return
x.l(new D.du4(x,e,d))
x.b35()},
B(d){var x,w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=A.O(d).ax.a===B.dd,j=new D.a1t(k),i=m.a.c,h=m.e
h===$&&A.d()
x=m.f
x===$&&A.d()
w=new A.X(h,x.gjB(x),A.T(h).k("X<1>")).gJ(0)
v=w===m.e.length
h=k?C.yK:C.yI
x=k?C.yK:C.yI
u=k?C.a_B:C.a_r
t=y.O
u=A.a([x,u],t)
x=A.aH(l,l,l,l,A.W(B.eG,k?C.dN:B.c,l,l,l,18),l,l,l,new D.dua(d),l,l,l,l,l,l)
s=m.a.d
r=y.p
s=A.A(A.a([x,B.aY,A.c("Lesson "+s+" of 10",l,l,l,l,l,l,A.l(l,l,k?C.dp:C.dq,l,l,l,l,l,l,l,l,12,l,l,B.P,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)],r),B.l,l,B.e,B.h,0,l,l)
x=A.m(24)
q=i.f
p=A.ap(q,B.v,0.35)
p.toString
t=A.a([q,p],t)
p=B.c.j(0.2)
q=A.m(16)
t=A.a([s,A.o(l,A.A(A.a([A.o(l,A.W(i.e,B.c,l,l,l,28),B.f,l,l,new A.n(p,l,l,q,l,l,B.m),l,52,l,l,l,l,l,52),B.eu,A.E(A.x(A.a([A.c(i.b,l,l,l,l,l,l,B.fP,l,l,l),A.c(i.c+" \xb7 "+i.d+" min",l,l,l,l,l,l,B.nr,l,l,l)],r),B.B,l,B.e,B.h,0,B.p),1)],r),B.l,l,B.e,B.h,0,l,l),B.f,l,l,new A.n(l,l,l,x,l,new A.a7(B.a5,B.a9,B.x,t,l,l),B.m),l,l,l,l,B.fc,l,l,l),B.aA],r)
for(x=i.w,o=0;o<4;++o){s=x[o]
q=k?C.dN:B.c
q=A.c(s.a,l,l,l,l,l,l,new A.F(!0,q,l,l,l,l,16,B.F,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l),l,l,l)
p=k?C.dN:B.c
B.d.u(t,A.a([q,B.au,A.c(s.b,l,l,l,l,l,l,new A.F(!0,p,l,l,l,l,14,l,l,l,l,l,1.5,l,l,l,l,l,l,l,l,l,l,l,l,l),l,l,l),B.aA],r))}x=k?B.c.j(0.92):C.lR
s=A.m(22)
q=A.K(C.e7.j(0.45),B.r,1.5)
t.push(A.o(l,A.x(A.a([A.A(A.a([C.bXm,B.bg,A.c("See it live right now",l,l,l,l,l,l,A.l(l,l,k?C.dN:B.c,l,l,l,l,l,l,l,l,14,l,l,B.F,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)],r),B.l,l,B.e,B.h,0,l,l),B.S,m.a.cYG(0)],r),B.B,l,B.e,B.h,0,B.p),B.f,l,l,new A.n(x,l,q,s,l,l,B.m),l,l,l,l,B.bG,l,l,l))
t.push(B.bx)
x=A.c("Quiz",l,l,l,l,l,l,A.l(l,l,k?C.dN:B.c,l,l,l,l,l,l,l,l,16,l,l,B.F,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)
s=""+w+" of "
q=m.e.length
if(v)p=C.e7
else p=k?C.dp:C.dq
t.push(A.A(A.a([x,B.aY,A.c(s+q+" right",l,l,l,l,l,l,A.l(l,l,p,l,l,l,l,l,l,l,l,12.5,l,l,B.F,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)],r),B.l,l,B.e,B.h,0,l,l))
t.push(B.ak)
p=A.m(9)
x=m.e.length
x=x===0?0:w/x
t.push(A.bu(p,A.jt(k?C.H1:C.GR,l,l,7,l,x,C.b5l),B.aq))
t.push(B.O)
x=m.a.f?"Admin: you can retry any question.":"Get all 10 right to finish. A wrong answer gets one more try; wrong twice and that question locks for 5 minutes, then a new question takes its place."
t.push(A.c(x,l,l,l,l,l,l,A.l(l,l,k?C.dp:C.dq,l,l,l,l,l,l,l,l,11.8,l,l,l,l,1.35,!0,l,l,l,l,l,l,l,l),l,l,l))
t.push(B.S)
for(n=0;x=m.e,n<x.length;++n)t.push(m.ctO(j,n,x[n]))
t.push(B.O)
x=k?C.dN:B.c
q=k?C.pB:C.pA
q=A.E(A.en(C.c33,l,C.fV5,new D.dub(m,i),A.dh(l,l,l,l,l,l,l,l,l,x,l,l,B.cm,l,new A.ba(A.m(999),B.a1),new A.av(q,1.5,B.r,-1),l,l,l,l)),1)
x=!v
if(!x||m.a.r)k=C.e7
else k=k?C.dp:C.dq
k=A.bn(k,l,l,l,l,l,B.cm,l,new A.ba(A.m(999),B.a1),l,l,l)
p=!x||m.a.r?new D.duc(m,d):l
t.push(A.A(A.a([q,B.ar,A.E(A.da(N.QX,l,A.c(!x||m.a.r?"Finish lesson":s+m.e.length+" right",l,l,l,l,l,l,B.cc,l,l,l),p,k),1)],r),B.l,l,B.e,B.h,0,l,l))
return A.c5(l,h,A.o(l,A.bm(!0,A.cn(t,l,l,C.bHB,l,l,B.ah,!1),!0,!1,B.ag,!0,!0),B.f,l,l,new A.n(l,l,l,l,l,new A.a7(B.aX,B.b1,B.x,u,l,l),B.m),l,l,l,l,l,l,l,l),l,!1,!1,l,l)},
ctO(a7,a8,a9){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=this,a5=null,a6=a4.d
a6===$&&A.d()
x=a6[a9]
a6=a4.f
a6===$&&A.d()
w=a6.q(0,a9)
a6=a4.w
a6===$&&A.d()
v=a6.h(0,a9)
a6=a4.r
a6===$&&A.d()
u=a6.h(0,a9)
if(u==null)u=0
t=a4.y.h(0,a9)
if(v!=null){a6=A.du(0,0,0,Math.max(0,v-Date.now()),0,0).a
s=B.o.ar(a6,6e7)
r=B.a.b1(B.o.v(B.o.F(B.o.ar(a6,1e6),60)),2,"0")
a6=a7.a
q=a6?C.Hb:C.Hc
p=A.m(20)
o=A.K(C.eI.j(0.4),B.r,1)
n=A.c("Question "+(a8+1)+" is locked",a5,a5,a5,a5,a5,a5,A.l(a5,a5,a6?C.dN:B.c,a5,a5,a5,a5,a5,a5,a5,a5,14,a5,a5,B.F,a5,a5,!0,a5,a5,a5,a5,a5,a5,a5,a5),a5,a5,a5)
m=y.p
return A.o(a5,A.A(A.a([C.c5a,B.ar,A.E(A.x(A.a([n,A.c("Wrong twice. Re-read the lesson; a new question appears in "+s+":"+r+".",a5,a5,a5,a5,a5,a5,A.l(a5,a5,a6?C.dp:C.dq,a5,a5,a5,a5,a5,a5,a5,a5,12.5,a5,a5,a5,a5,1.35,!0,a5,a5,a5,a5,a5,a5,a5,a5),a5,a5,a5)],m),B.B,a5,B.e,B.h,0,B.p),1)],m),B.l,a5,B.e,B.h,0,a5,a5),B.f,a5,a5,new A.n(q,a5,o,p,a5,a5,B.m),a5,a5,a5,B.d4,B.bG,a5,a5,a5)}a6=a7.a
q=a6?B.c.j(0.92):C.lR
p=A.m(20)
if(w)o=C.e7.j(0.6)
else o=a6?B.c:C.uQ
o=A.K(o,B.r,w?1.5:1)
n=y.p
m=A.a([A.c(""+(a8+1)+". "+x.a,a5,a5,a5,a5,a5,a5,A.l(a5,a5,a6?C.dN:B.c,a5,a5,a5,a5,a5,a5,a5,a5,14,a5,a5,B.F,a5,a5,!0,a5,a5,a5,a5,a5,a5,a5,a5),a5,a5,a5),B.O],n)
for(l=a4.cmw(a9),k=l.length,j=!w,i=x.b,h=x.c,g=0;g<l.length;l.length===k||(0,A.I)(l),++g){f=l[g]
e=w?a5:new D.du5(a4,a9,f)
if(w&&f===h)d=C.e7.j(0.14)
else if(t===f)d=C.eI.j(0.12)
else d=a6?C.Hb:C.Hc
a0=new A.aP(14,14)
if(w&&f===h)a1=C.e7
else a1=t===f?C.eI:B.L
a2=new A.av(a1,1,B.r,-1)
a1=i[f]
a3=a6?C.dN:B.c
a1=A.a([new A.bx(1,B.ba,A.c(a1,a5,a5,a5,a5,a5,a5,new A.F(!0,a3,a5,a5,a5,a5,13.5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5),a5,a5,a5),a5)],n)
if(w&&f===h)a1.push(C.c0z)
if(j&&t===f)a1.push(C.c6y)
m.push(A.ay(a5,A.o(a5,new A.c3(B.aL,B.e,B.h,B.l,a5,B.p,a5,0,a1,a5),B.f,a5,a5,new A.n(d,a5,new A.bE(a2,a2,a2,a2),new A.bb(a0,a0,a0,a0),a5,a5,B.m),a5,a5,a5,B.eK,B.ey,a5,a5,a5),B.y,!1,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,e,a5,a5,a5,a5,a5,a5,!1,B.a4))}if(w)m.push(A.c("Right! "+x.d,a5,a5,a5,a5,a5,a5,C.fP0,a5,a5,a5))
else if(u===1&&!a4.a.f)m.push(C.fXR)
else if(u>=1)m.push(C.fVg)
return A.o(a5,A.x(m,B.B,a5,B.e,B.h,0,B.p),B.f,a5,a5,new A.n(q,a5,o,p,a5,a5,B.m),a5,a5,a5,B.d4,B.bG,a5,a5,a5)}}
D.aPb.prototype={
t(){var x=this,w=x.a9$
if(w!=null)w.a6(0,x.gbB())
x.a9$=null
x.a3()},
aX(){this.b7()
this.b5()
this.bC()}}
var z=a.updateTypes(["Q(uq)","aA<~>()","~()","XB(Z)","aA<~>(p)","p(a_w)","a0x(Z)"])
D.eFP.prototype={
$1(d){this.a.Bk(!0)
return null},
$S:11}
D.eFy.prototype={
$1(d){var x=this.a.Q,w=x.f
if(w.length!==0){w=B.d.gd1(w).Q
w.toString
x.i9(B.i.D(Math.min(this.b*160-16,w),0,1/0))}},
$S:7}
D.eFq.prototype={
$0(){return this.a.z=this.b},
$S:0}
D.eFx.prototype={
$0(){return this.a.z=this.b},
$S:0}
D.eFA.prototype={
$0(){var x=this.a,w=x.f=!1,v=this.b,u=v==null
if(!u?J.z(J.t(v,"ok"),!0):w){x.d=v
x.ax=null}else{w=u?null:J.t(v,"error")
x.ax=J.k(w==null?"Could not reach the server. Pull down to try again.":w)
if(!J.z(u?null:J.t(v,"ownerOnly"),!0))w=J.z(u?null:J.t(v,"setupNeeded"),!0)
else w=!0
if(w)x.d=null}},
$S:0}
D.eFo.prototype={
$1(d){return A.a1(d,y.N,y.z)},
$S:25}
D.eFp.prototype={
$0(){var x,w,v=this,u=v.a
if(v.b){x=A.B(u.e,y.P)
w=v.c
B.d.u(x,w)}else{x=v.c
w=x}u.e=x
u.w=w.length>=100},
$S:0}
D.eFI.prototype={
$1(d){var x=null
return A.eh(A.a([A.bO(!1,B.dr,x,x,!0,x,x,x,new D.eFG(d),x,x),A.bI(C.hhb,x,new D.eFH(d),x)],y.p),x,x,x,C.fVd,x,x,x,x,C.fZm,x)},
$S:18}
D.eFG.prototype={
$0(){A.a8(this.a,!1).N(!1)
return null},
$S:0}
D.eFH.prototype={
$0(){A.a8(this.a,!1).N(!0)
return null},
$S:0}
D.eFJ.prototype={
$0(){return this.a.r=!0},
$S:0}
D.eFK.prototype={
$0(){return this.a.r=!1},
$S:0}
D.eFw.prototype={
$1(d){var x=this.a,w=x.d
x.a.toString
return D.hy7(w,!1)},
$S:z+3}
D.eFC.prototype={
$0(){return this.a.r=!0},
$S:0}
D.eFD.prototype={
$0(){var x=this.a,w=x.r=!1,v=this.b
if(v!=null?J.z(J.t(v,"ok"),!0):w)x.d=v},
$S:0}
D.eFE.prototype={
$1(d){var x=this
return A.oI(new D.eFB(x.a,x.b,x.c,x.d),!1,0.8,0.95,0.25,!1,null)},
$S:138}
D.eFB.prototype={
$2(d,e){var x=this
return x.a.cyW(x.b,x.c,D.hL(J.t(x.d,"state")),e)},
$S:2335}
D.eFF.prototype={
$2(d,e){return B.i.aQ(D.aH9(d),D.aH9(e))},
$S:40}
D.eFO.prototype={
$0(){return this.a.Bk(!0)},
$S:1}
D.eFL.prototype={
$0(){var x=this.a.c
x.toString
return A.VG(x)},
$S:0}
D.eFM.prototype={
$0(){return this.a.Bk(!0)},
$S:0}
D.eFf.prototype={
$1(d){return J.z(J.t(d,"asset"),this.a)},
$S:4}
D.eFg.prototype={
$0(){var x=this.a
return x.length===0?this.b:B.d.gH(x)},
$S:245}
D.eFh.prototype={
$1(d){return J.z(J.t(d,"asset"),this.a.h(0,"symbol"))},
$S:4}
D.eFi.prototype={
$0(){return this.a},
$S:245}
D.eFs.prototype={
$1(d){return J.z(J.t(d,"open"),!0)},
$S:4}
D.eFt.prototype={
$1(d){return J.z(J.t(d,"asset"),J.t(this.a,"asset"))},
$S:4}
D.eFv.prototype={
$2(d,e){return B.ar},
$S:38}
D.eFu.prototype={
$2(d,a0){var x,w,v,u,t,s,r,q,p=this,o=null,n=p.b[a0],m=J.a5(n),l=J.k(m.h(n,"asset")),k=l===J.t(p.c,"asset"),j=D.fg(m.h(n,"changePct")),i=j>=0,h=D.aRl(n),g=p.d,f=J.z(g==null?o:g.h(0,"symbol"),l),e=J.z(D.hL(m.h(n,"chart")).h(0,"signal"),"buy")
g=p.a
x=p.e
w=x.a
v=w?B.c.j(0.92):C.lR
u=A.m(20)
if(k)t=D.fzK(l).c
else t=w?B.c:C.uQ
t=A.K(t,B.r,k?2:1)
x=k?D.fzK(l).c.j(0.25):x.ga9z()
x=A.a([new A.ab(0,B.H,x,B.cz,k?18:12)],y.V)
s=D.hj9(l,20)
r=y.p
s=A.a([s,B.bg,A.E(A.c(l,o,1,B.a2,o,o,o,A.l(o,o,w?C.dN:B.c,o,o,o,o,o,o,o,o,12,o,o,B.F,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),1)],r)
if(!J.z(m.h(n,"open"),!0))s.push(A.c("closed",o,o,o,o,o,o,A.l(o,o,w?C.dp:C.dq,o,o,o,o,o,o,o,o,9.5,o,o,B.P,o,o,!0,o,o,o,o,o,o,o,o),o,o,o))
s=A.A(s,B.l,o,B.e,B.h,0,o,o)
m=D.ip(D.fg(m.h(n,"price")),!0,!1)
m=A.c(m,o,o,o,o,o,o,A.l(o,o,w?C.dN:B.c,o,o,o,o,o,o,o,o,17,o,o,B.P,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)
w=i?"+":""
q=B.i.aa(j,2)
w=A.a([A.c(w+q+"%",o,o,o,o,o,o,A.l(o,o,i?C.e7:C.eI,o,o,o,o,o,o,o,o,11,o,o,B.F,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),B.aY],r)
if(f)w.push(g.a0N("HOLDING",E.wA))
else if(e)w.push(g.a0N("BUY SIGNAL",C.e7))
w=A.A(w,B.l,o,B.e,B.h,0,o,o)
return A.ay(o,A.cV(o,A.x(A.a([s,B.ak,new A.dl(B.dx,B.a5,B.f,m,o),w,B.au,A.E(A.b4(o,o,o,new D.aKv(h,i?C.e7:C.eI,o),B.h1),1)],r),B.B,o,B.e,B.h,0,B.p),o,o,B.b_,new A.n(v,o,t,u,x,o,B.m),B.a3,o,o,o,o,B.anp,o,o,150),B.y,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,new D.eFr(g,l),o,o,o,o,o,o,!1,B.a4)},
$S:85}
D.eFr.prototype={
$0(){return this.a.a21(this.b)},
$S:0}
D.eFl.prototype={
$0(){var x=this.a
return x.l(new D.eFk(x,this.b))},
$S:0}
D.eFk.prototype={
$0(){return this.a.y=this.b},
$S:0}
D.eFm.prototype={
$0(){var x=this.a
return x.l(new D.eFj(x))},
$S:0}
D.eFj.prototype={
$0(){var x=this.a
return x.at=!x.at},
$S:0}
D.eFz.prototype={
$2(d,e){var x=null,w=e.b,v=A.ao(x,A.o(x,x,B.f,x,x,new A.n(x,x,x,A.m(99),x,C.cck,B.m),x,8,x,x,x,x,x,x),x,x,0,0,9,x),u=this.a.a,t=A.ao(x,A.o(x,x,B.f,(u?C.dN:B.c).j(0.5),x,x,x,18,x,x,x,x,x,2),x,x,w/3-1,x,4,x),s=B.i.D(this.b*w-9,0,w-18)
return new A.a6(x,26,new A.an(B.a0,x,B.ad,B.f,A.a([v,t,A.ao(x,A.o(x,x,B.f,x,x,new A.n(B.c,x,A.K(u?C.dN:B.c,B.r,3),x,x,x,B.a6),x,18,x,x,x,x,x,18),x,x,s,x,4,x)],y.p),x),x)},
$S:127}
D.eFn.prototype={
$0(){return this.a.SK(!this.b)},
$S:0}
D.eFN.prototype={
$1(d){return A.a1(d,y.N,y.z)},
$S:25}
D.eFe.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
x=u.x&&u.w?2:4
break
case 2:x=5
return A.b(u.a_1(!0),$async$$0)
case 5:x=3
break
case 4:u.l(new D.eFd(u))
case 3:return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
D.eFd.prototype={
$0(){return this.a.x=!0},
$S:0}
D.cWt.prototype={
$0(){return this.a.d=this.b},
$S:0}
D.cWC.prototype={
$2(d,e){var x,w,v=null,u=e.b,t=this.a,s=t.a,r=s.c,q=s.d,p=s.e,o=s.f
s=s.r
x=t.d
w=d.L(y.D)
return A.ay(v,new A.a6(u,250,A.b4(v,v,v,new D.be4((w==null?B.CM:w).w.d,r,q,p,o,s,x,v),B.az),v),B.y,!1,v,v,v,v,v,new D.cWx(t),new D.cWy(t,u),new D.cWz(t,u),v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new D.cWA(t,u),new D.cWB(t),v,v,v,!1,B.a4)},
$S:37}
D.cWA.prototype={
$1(d){return this.a.aAw(d.b,this.b)},
$S:23}
D.cWy.prototype={
$1(d){return this.a.aAw(d.b,this.b)},
$S:46}
D.cWz.prototype={
$1(d){return this.a.aAw(d.b,this.b)},
$S:19}
D.cWx.prototype={
$1(d){var x=this.a
return x.l(new D.cWw(x))},
$S:35}
D.cWw.prototype={
$0(){return this.a.d=null},
$S:0}
D.cWB.prototype={
$1(d){return A.bM(B.fX,new D.cWv(this.a),y.b)},
$S:59}
D.cWv.prototype={
$0(){var x=this.a
if(x.c!=null)x.l(new D.cWu(x))},
$S:12}
D.cWu.prototype={
$0(){return this.a.d=null},
$S:0}
D.cWD.prototype={
$1(d){var x=this.a
return x*d+x/2},
$S:164}
D.cWF.prototype={
$1(d){var x=this.b,w=this.a,v=w.a
return x-(d-v)/(w.b-v)*x},
$S:5}
D.cWE.prototype={
$2(d,e){var x,w,v,u,t,s,r,q,p=this,o=$.R(),n=A.a([],y.v),m=new A.aG(o.r,B.aj,null,null,n)
for(o=p.b,x=p.c,w=p.d,v=p.a.c,u=!1,t=0;t<o;++t){s=J.t(v[t],d)
if(s==null)continue
r=x.$1(t)
if(typeof s=="number")q=s
else{q=A.cG(A.v(s))
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
o.d=B.bH
o.e=B.dP
p.e.af(m,o)},
$S:2336}
D.fg6.prototype={
$1(d){return D.fg(J.t(d,"c"))},
$S:2337}
D.fuE.prototype={
$1(d){var x=null,w=C.a8u.h(0,d),v=w.a,u=w.b,t=this.a,s=t*0.78,r=A.K(B.c,B.r,1.2)
return A.o(B.z,A.c(v,x,x,x,x,x,x,A.l(x,x,B.c,x,x,x,x,x,x,x,x,t*(v.length>1?0.26:0.36),x,x,B.u,x,x,!0,x,x,x,x,x,x,x,x),x,x,x),B.f,x,x,new A.n(u,x,r,x,x,x,B.a6),x,s,x,x,x,x,x,s)},
$S:133}
D.fA1.prototype={
$1(d){var x=y.N,w=y.z,v=A.a1(d,x,w)
w=A.dG(v,x,w)
w.n(0,"asset",v.h(0,"symbol"))
return w},
$S:25}
D.fEl.prototype={
$1(d){return A.a1(d,y.N,y.z)},
$S:25}
D.fB7.prototype={
$1(d){return","},
$S:60}
D.fIm.prototype={
$3(d,e,f){var x=A.bOZ(d,e,1,0,0,0,0,0)
while(A.lF(x)!==7)x=x.bN(864e8)
return x.bN(A.du(7*(f-1),0,0,0,0,0).a)},
$S:2338}
D.fFc.prototype={
$1(d){return J.k(d)},
$S:15}
D.fFd.prototype={
$2(d,e){var x=null,w=e.b,v=A.ao(x,A.o(x,x,B.f,x,x,new A.n(x,x,x,A.m(9),x,C.caz,B.m),x,6,x,x,x,x,x,x),x,x,0,0,4,x),u=B.i.D(this.a/100*w-7,0,w-14)
return new A.a6(x,14,new A.an(B.a0,x,B.ad,B.f,A.a([v,A.ao(x,A.o(x,x,B.f,x,x,new A.n(B.c,x,A.K(this.b.a?C.dN:B.c,B.r,2.5),x,x,x,B.a6),x,14,x,x,x,x,x,14),x,x,u,x,0,x)],y.p),x),x)},
$S:127}
D.eFZ.prototype={
$1(d){return J.k(d)},
$S:15}
D.eGQ.prototype={
$0(){return this.a.l(new D.eGP())},
$S:0}
D.eGP.prototype={
$0(){},
$S:0}
D.eGR.prototype={
$1(d){var x=this.a
if(x.c!=null)x.l(new D.eGO(x,d))},
$S:194}
D.eGO.prototype={
$0(){return this.a.Q=this.b},
$S:0}
D.eGS.prototype={
$1(d){this.a.Rb()
return null},
$S:11}
D.eGL.prototype={
$1(d){var x=y.N,w=y.z
w=A.dG(A.a1(d,x,w),x,w)
w.n(0,"asset",J.t(d,"symbol"))
return w},
$S:25}
D.eGj.prototype={
$0(){var x,w,v=this,u=v.c
if(J.z(u==null?null:J.t(u,"isAdmin"),!0))v.b.y=!0
x=v.d
if(x==null)x=v.a.a
if(x!=null){u=y.g.a(x.h(0,"done"))
if(u==null)u=A.a([],y.s)
w=y.Y.a(x.h(0,"lessons"))
v.b.x=A.J(["done",u,"lessons",w==null?A.S(y.N,y.z):w],y.N,y.z)}},
$S:0}
D.eGu.prototype={
$0(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n
var $async$$0=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.az(),$async$$0)
case 7:r=e
x=8
return A.b(r.aF("String","ngmy_signal_grid_academy_v2",B.V.av(s.a.x,null)),$async$$0)
case 8:u=2
x=6
break
case 4:u=3
n=t.pop()
x=6
break
case 3:x=2
break
case 6:p=s.a
if(p.a.d){x=1
break}x=9
return A.b(A.fZ(A.J(["action","paLearnSave","progress",p.x],y.N,y.z),!1,!1,!1,!1,B.ha),$async$$0)
case 9:o=e
if(J.z(o==null?null:J.t(o,"allDone"),!0)){$.cms=new A.V(A.fX(0,0),0,!1)
A.P7()}case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$$0,w)},
$S:1}
D.eG1.prototype={
$1(d){return this.a.gJW().q(0,d.a)},
$S:z+0}
D.eG2.prototype={
$0(){var x,w=this.a,v=y.N,u=A.cZ(w.gJW(),v)
u.I(0,this.b)
x=A.B(u,A.a4(u).k("ci.E"))
v=A.dG(w.x,v,y.z)
v.n(0,"done",x)
w.x=v},
$S:0}
D.eG3.prototype={
$1(d){return this.a.gJW().q(0,d.a)},
$S:z+0}
D.eG4.prototype={
$1(d){var x=null
return A.eh(A.a([A.bI(C.hb9,x,new D.eG0(this.a,d),x)],y.p),x,x,x,C.h84,x,x,x,x,C.fWf,x)},
$S:18}
D.eG0.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:A.a8(v.b,!1).N(null)
x=2
return A.b(A.Mh(),$async$$0)
case 2:u=e
t=v.a
if(t.c!=null)t.l(new D.eG_(t,u))
return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
D.eG_.prototype={
$0(){return this.a.Q=this.b},
$S:0}
D.eGt.prototype={
$0(){var x,w,v,u=this,t=u.b
if(t.length!==0)u.a.CW=t
t=u.c
if(t.length!==0)u.a.f=t
t=u.a
x=u.d
w=J.a5(x)
t.z=J.z(w.h(x,"alertsAllowed"),!0)
if(J.z(w.h(x,"isAdmin"),!0))t.y=!0
v=y.g.a(w.h(x,"rules"))
if(v==null)v=B.cb
v=J.b8(v,new D.eGs(),y.N)
v=A.B(v,v.$ti.k("aj.E"))
t.fx=v
v=w.h(x,"nowEt")
t.fy=J.k(v==null?"":v)
t.go=J.z(w.h(x,"stockOpen"),!0)
t.r=new A.V(Date.now(),0,!1)},
$S:0}
D.eGs.prototype={
$1(d){return J.k(d)},
$S:15}
D.eGk.prototype={
$2(d,e){return new A.V(Date.now(),0,!1).bz(e.a).a>18e7},
$S:2339}
D.eGl.prototype={
$0(){},
$S:0}
D.eGI.prototype={
$1(d){return J.z(J.t(d,"open"),!0)&&D.aRl(d).length>5},
$S:4}
D.eGJ.prototype={
$2(d,e){return B.i.aQ(D.aH9(d),D.aH9(e))},
$S:40}
D.eG7.prototype={
$1(d){return J.z(J.t(d,"asset"),this.a.h(0,"symbol"))},
$S:4}
D.eG8.prototype={
$0(){return A.S(y.N,y.z)},
$S:245}
D.eG9.prototype={
$1(d){var x,w,v,u,t,s,r,q,p,o,n="typicalMin",m="enterWithinMin",l=J.a5(d),k=D.hL(l.h(d,"reading")),j=D.hL(k.h(0,"timing"))
if(j.h(0,n)==null)x=""
else{w=A.v(j.h(0,"dir"))
v=A.v(j.h(0,"ageMin"))
u=A.v(j.h(0,n))
t=A.v(j.h(0,"remainingMin"))
s=A.v(j.h(0,"dir"))
r=A.v(j.h(0,"worked"))
q=A.v(j.h(0,"of"))
p=D.fg(j.h(0,m))>0?"still early (enter within "+A.v(j.h(0,m))+" min)":"too late to enter"
x=", current "+w+" move "+v+" min old, such moves usually last "+u+" min (about "+t+" min left), past "+s+" moves really went that way "+r+" of "+q+" times, "+p}w=A.v(l.h(d,"asset"))
v=A.v(l.h(d,"name"))
u=D.hGU(d)
t=B.i.aa(D.fg(l.h(d,"changePct")),2)
l=J.z(l.h(d,"open"),!0)?"open":"closed"
s=k.h(0,"bias")
s=A.v(s==null?"unknown":s)
r=B.i.aa(D.fg(k.h(0,"score")),0)
q=k.h(0,"rsi")==null?"n/a":B.i.aa(D.fg(k.h(0,"rsi")),0)
p=k.h(0,"mom1h")==null?"n/a":B.i.aa(D.fg(k.h(0,"mom1h")),2)+"%"
o=k.h(0,"action")
return"- "+w+" ("+v+"): price "+u+", change "+t+"%, "+l+", "+s+", strength "+r+", RSI "+q+", last hour "+p+", reading: "+A.v(o==null?"n/a":o)+x+"."},
$S:54}
D.eFV.prototype={
$0(){var x=this.a
x.at.push(new D.a_w(!0,this.b))
x.ch=!0},
$S:0}
D.eFW.prototype={
$1(d){return(d.a?"Student":"Tutor")+": "+d.b},
$S:z+5}
D.eFX.prototype={
$1(d){return"- "+A.v(d)},
$S:15}
D.eFY.prototype={
$0(){var x=this.b
x.at.push(new D.a_w(!1,this.a.a))
x.ch=!1},
$S:0}
D.eGv.prototype={
$1(d){var x=this.a.ay,w=x.f
if(w.length!==0){w=B.d.gd1(w).Q
w.toString
x.m6(w+200,B.e8,B.eW)}},
$S:7}
D.eGM.prototype={
$0(){return A.VG(this.a)},
$S:0}
D.eGN.prototype={
$0(){return this.b.gLc().C_(this.a.a)},
$S:0}
D.eG6.prototype={
$1(d){return this.a.gJW().q(0,d.a)},
$S:z+0}
D.eG5.prototype={
$0(){return this.a.clu(this.b)},
$S:0}
D.eGr.prototype={
$1(d){var x=this.b,w=B.d.cd(C.E7,x),v=this.a,u=v.y,t=x.a,s=v.gJW().q(0,t)
t=y.Y.a(D.hL(v.x.h(0,"lessons")).h(0,t))
if(t==null)t=B.lD
return new D.a0x(x,w+1,new D.eGn(v,x),u,s,A.a1(t,y.N,y.z),new D.eGo(v,x),new D.eGp(v,x),new D.eGq(v),null)},
$S:z+6}
D.eGn.prototype={
$0(){var x=this.a,w=x.c
w.toString
return x.c6H(new D.a1t(A.O(w).ax.a===B.dd),this.b.r)},
$S:141}
D.eGo.prototype={
$1(d){var x=this.a
x.l(new D.eGm(x,this.b,d))
x.aCH()},
$S:125}
D.eGm.prototype={
$0(){var x=this.a,w=y.N,v=y.z,u=A.a1(D.hL(x.x.h(0,"lessons")),w,v)
u.n(0,this.b.a,this.c)
v=A.dG(x.x,w,v)
v.n(0,"lessons",u)
x.x=v},
$S:0}
D.eGp.prototype={
$0(){return this.a.ae7(this.b.a)},
$S:0}
D.eGq.prototype={
$1(d){var x=this.a,w=x.c
w.toString
A.a8(w,!1).e7()
x.aQT(d)},
$S:2}
D.eGa.prototype={
$2$last$lines(d,e){var x=this.a
return new D.ady(B.d.fD(x,Math.max(0,x.length-d)),this.b,null,e,this.c,null)},
$0(){return this.$2$last$lines(36,!0)},
$1$lines(d){return this.$2$last$lines(36,d)},
$S:2340}
D.eGi.prototype={
$1(d){var x=null
return A.c(d,x,x,x,x,x,x,A.l(x,x,this.a.a?C.dN:B.c,x,x,x,x,x,x,x,x,13,x,x,x,x,1.4,!0,x,x,x,x,x,x,x,x),x,x,x)},
$S:2341}
D.eGb.prototype={
$1(d){return J.z(D.hL(J.t(d,"reading")).h(0,"action"),"BUY SIGNAL")},
$S:4}
D.eGc.prototype={
$1(d){return J.t(d,"asset")},
$S:845}
D.eGd.prototype={
$1(d){return J.z(D.hL(J.t(d,"reading")).h(0,"action"),"SELL SIGNAL")},
$S:4}
D.eGe.prototype={
$1(d){return J.t(d,"asset")},
$S:845}
D.eGf.prototype={
$1(d){var x=J.a5(d)
return J.z(x.h(d,"open"),!0)&&D.hL(x.h(d,"reading")).h(0,"rsi")!=null},
$S:4}
D.eGg.prototype={
$1(d){return J.z(J.t(d,"open"),!0)},
$S:4}
D.eGh.prototype={
$1(d){var x=D.hL(D.hL(J.t(d,"reading")).h(0,"timing"))
return D.fg(x.h(0,"of"))>=3&&D.fg(x.h(0,"worked"))/D.fg(x.h(0,"of"))>=0.5},
$S:4}
D.eGz.prototype={
$1(d){var x,w,v,u=this.a
if(u.db!=="All"&&D.hC3(d)!==u.db)return!1
u=this.b
if(u.length===0)return!0
x=J.a5(d)
w=A.v(x.h(d,"asset"))
v=A.v(x.h(d,"name"))
x=x.h(d,"asset")
x=J.k(x==null?"":x)
return B.a.q((w+" "+v+" "+A.aL(x,"/","")).toLowerCase(),u)},
$S:4}
D.eGA.prototype={
$2(d,e){var x,w,v=J.a5(d),u=y.f,t=u.b(D.hL(v.h(d,"reading")).h(0,"entry"))?0:1,s=J.a5(e),r=u.b(D.hL(s.h(e,"reading")).h(0,"entry"))?0:1
if(t!==r)return t-r
u=this.a.fr
x=u.am(0,v.h(d,"asset"))?0:1
w=u.am(0,s.h(e,"asset"))?0:1
if(x!==w)return x-w
return B.i.aQ(D.aH9(d),D.aH9(e))},
$S:40}
D.eGB.prototype={
$1(d){return J.z(D.hL(J.t(d,"reading")).h(0,"bias"),"bullish")},
$S:4}
D.eGC.prototype={
$1(d){return J.z(D.hL(J.t(d,"reading")).h(0,"bias"),"bearish")},
$S:4}
D.eGE.prototype={
$0(){var x=this.a
return x.l(new D.eGy(x,this.b))},
$S:0}
D.eGy.prototype={
$0(){return this.a.db=this.b},
$S:0}
D.eGD.prototype={
$1(d){return D.hC3(d)===this.a},
$S:4}
D.eGF.prototype={
$0(){var x=this.a
x.l(new D.eGx(x))},
$S:0}
D.eGx.prototype={
$0(){var x=this.a,w=x.cy
x.cy=!w
if(w){x.cx=""
x.dx.bO(0,B.ci)}},
$S:0}
D.eGG.prototype={
$1(d){var x=this.a
return x.l(new D.eGw(x,d))},
$S:2}
D.eGw.prototype={
$0(){return this.a.cx=this.b},
$S:0}
D.eGH.prototype={
$0(){return this.a.aQT("What is happening with "+A.v(J.t(this.b,"asset"))+" right now? Is it bullish or bearish, how long might the move last, and is it too late to enter?")},
$S:0}
D.eFR.prototype={
$1(d){return this.a.gJW().q(0,d.a)},
$S:z+0}
D.eFS.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=!v.b?2:4
break
case 2:v.a.gLc().C_(0)
x=3
break
case 4:x=5
return A.b(A.Mh(),$async$$0)
case 5:u=e
t=v.a
if(t.c!=null)t.l(new D.eFQ(t,u))
$.cms=new A.V(A.fX(0,0),0,!1)
A.P7()
case 3:return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
D.eFQ.prototype={
$0(){return this.a.Q=this.b},
$S:0}
D.eFT.prototype={
$0(){return this.a.JV(this.b)},
$S:0}
D.eFU.prototype={
$0(){var x=this.a
return x.JV(x.ax.a.a)},
$S:0}
D.dui.prototype={
$1(d){var x
y.g.a(d)
x=d==null?B.cb:d
x=J.b8(x,new D.duj(),y.S)
x=A.B(x,x.$ti.k("aj.E"))
return x},
$S:500}
D.duj.prototype={
$1(d){var x=A.c8(A.v(d),null)
return x==null?0:x},
$S:343}
D.dug.prototype={
$1(d){var x,w
y.Y.a(d)
x=d==null?B.lD:d
w=y.S
return J.oE(x,new D.duh(),w,w)},
$S:2343}
D.duh.prototype={
$2(d,e){var x,w=A.c8(A.v(d),null)
if(w==null)w=0
x=A.c8(A.v(e),null)
if(x==null)x=0
return new A.bz(w,x,y.a)},
$S:2344}
D.due.prototype={
$1(d){var x
if(d>=0){x=this.a.d
x===$&&A.d()
x=d<x.length}else x=!1
return x},
$S:29}
D.duf.prototype={
$1(d){var x,w=this.a
if(w.c==null)return
x=w.w
x===$&&A.d()
if(x.a!==0)w.l(new D.dud(w))},
$S:11}
D.dud.prototype={
$0(){return this.a.cFV()},
$S:0}
D.du6.prototype={
$2(d,e){return new A.bz(""+d,e,y.W)},
$S:846}
D.du7.prototype={
$2(d,e){return new A.bz(""+d,e,y.W)},
$S:846}
D.du8.prototype={
$1(d){var x=this.a,w=x.x
w===$&&A.d()
if(!B.d.q(w,d)){x=x.e
x===$&&A.d()
x=!B.d.q(x,d)}else x=!1
return x},
$S:29}
D.du9.prototype={
$1(d){var x=this.a,w=x.e
w===$&&A.d()
if(!B.d.q(w,d)){x=x.f
x===$&&A.d()
x=!x.q(0,d)}else x=!1
return x},
$S:29}
D.du4.prototype={
$0(){var x,w,v,u=this.b,t=this.a,s=t.d
s===$&&A.d()
x=this.c
w=t.y
if(u===s[x].c){u=t.f
u===$&&A.d()
u.I(0,x)
w.W(0,x)}else{w.n(0,x,u)
u=t.r
u===$&&A.d()
u=u.h(0,x)
v=(u==null?0:u)+1
t.r.n(0,x,v)
if(!t.a.f&&v>=2){u=t.w
u===$&&A.d()
u.n(0,x,new A.V(Date.now(),0,!1).bN(3e8).a)}}},
$S:0}
D.dua.prototype={
$0(){return A.VG(this.a)},
$S:0}
D.dub.prototype={
$0(){return this.a.a.cZX('I just read the lesson "'+this.b.b+'". Can you explain it again with a live example from the markets right now?')},
$S:0}
D.duc.prototype={
$0(){this.a.a.rr()
A.VG(this.b)},
$S:0}
D.du5.prototype={
$0(){return this.a.cg5(this.b,this.c)},
$S:0};(function aliases(){var x=D.aPb.prototype
x.bBo=x.t})();(function installTearOffs(){var x=a._instance_0u,w=a._instance_1u
var v
x(v=D.aH8.prototype,"gcls","clt",2)
x(v,"gcyU","a3j",1)
x(v=D.aHa.prototype,"gcg8","Rb",1)
w(v,"gcg6","JV",4)})();(function inheritance(){var x=a.mixinHard,w=a.inheritMany,v=a.inherit
w(A.ag,[D.atH,D.ady,D.XB,D.a0x])
w(A.ah,[D.aH8,D.be3,D.aPb,D.bkK])
w(A.kv,[D.eFP,D.eFy,D.eFo,D.eFI,D.eFw,D.eFE,D.eFf,D.eFh,D.eFs,D.eFt,D.eFN,D.cWA,D.cWy,D.cWz,D.cWx,D.cWB,D.cWD,D.cWF,D.fg6,D.fuE,D.fA1,D.fEl,D.fB7,D.fIm,D.fFc,D.eFZ,D.eGR,D.eGS,D.eGL,D.eG1,D.eG3,D.eG4,D.eGs,D.eGI,D.eG7,D.eG9,D.eFW,D.eFX,D.eGv,D.eG6,D.eGr,D.eGo,D.eGq,D.eGa,D.eGi,D.eGb,D.eGc,D.eGd,D.eGe,D.eGf,D.eGg,D.eGh,D.eGz,D.eGB,D.eGC,D.eGD,D.eGG,D.eFR,D.dui,D.duj,D.dug,D.due,D.duf,D.du8,D.du9])
w(A.mH,[D.eFq,D.eFx,D.eFA,D.eFp,D.eFG,D.eFH,D.eFJ,D.eFK,D.eFC,D.eFD,D.eFO,D.eFL,D.eFM,D.eFg,D.eFi,D.eFr,D.eFl,D.eFk,D.eFm,D.eFj,D.eFn,D.eFe,D.eFd,D.cWt,D.cWw,D.cWv,D.cWu,D.eGQ,D.eGP,D.eGO,D.eGj,D.eGu,D.eG2,D.eG0,D.eG_,D.eGt,D.eGl,D.eG8,D.eFV,D.eFY,D.eGM,D.eGN,D.eG5,D.eGn,D.eGm,D.eGp,D.eGE,D.eGy,D.eGF,D.eGx,D.eGw,D.eGH,D.eFS,D.eFQ,D.eFT,D.eFU,D.dud,D.du4,D.dua,D.dub,D.duc,D.du5])
w(A.mn,[D.eFB,D.eFF,D.eFv,D.eFu,D.eFz,D.cWC,D.cWE,D.fFd,D.eGk,D.eGJ,D.eGA,D.duh,D.du6,D.du7])
w(A.qc,[D.be4,D.aKv])
w(A.aK,[D.yU,D.a1t,D.cC,D.uq,D.a_w])
v(D.aHa,D.aPb)
x(D.aPb,A.cg)})()
A.nN(b.typeUniverse,JSON.parse('{"atH":{"ag":[],"w":[]},"ady":{"ag":[],"w":[]},"XB":{"ag":[],"w":[]},"a0x":{"ag":[],"w":[]},"aH8":{"ah":["atH"]},"be3":{"ah":["ady"]},"be4":{"aB":[]},"aKv":{"aB":[]},"aHa":{"ah":["XB"]},"bkK":{"ah":["a0x"]}}'))
var y=(function rtii(){var x=A.aD
return{c:x("lc<u?>"),D:x("Ew"),V:x("U<ab>"),O:x("U<u>"),t:x("U<aa<p,@>>"),v:x("U<hR>"),L:x("U<+(p,p)>"),s:x("U<p>"),p:x("U<w>"),h:x("U<a_w>"),r:x("U<cC>"),n:x("U<H>"),X:x("U<G>"),W:x("bz<p,G>"),a:x("bz<G,G>"),P:x("aa<p,@>"),f:x("aa<@,@>"),b:x("cw"),R:x("+at,from,to(V,p,p)"),N:x("p"),E:x("X<uq>"),q:x("pa"),y:x("Q"),z:x("@"),S:x("G"),g:x("ai<@>?"),Y:x("aa<@,@>?"),H:x("~")}})();(function constants(){var x=a.makeConstList
C.e7=new A.u(1,0.12156862745098039,0.7490196078431373,0.592156862745098,B.q)
C.b5l=new A.lc(C.e7,y.c)
C.lR=new A.u(1,0.08627450980392157,0.10588235294117647,0.1803921568627451,B.q)
C.dp=new A.u(1,0.5411764705882353,0.5607843137254902,0.6392156862745098,B.q)
C.yI=new A.u(1,0.0392156862745098,0.050980392156862744,0.09411764705882353,B.q)
C.yK=new A.u(1,0.9294117647058824,0.9372549019607843,0.9803921568627451,B.q)
C.dq=new A.u(1,0.5529411764705883,0.5843137254901961,0.6705882352941176,B.q)
C.kY=new A.u(1,0.08627450980392157,0.09019607843137255,0.11372549019607843,B.q)
C.pA=new A.u(1,0.14901960784313725,0.17647058823529413,0.27058823529411763,B.q)
C.pB=new A.u(1,0.9058823529411765,0.9098039215686274,0.9411764705882353,B.q)
C.a_r=new A.u(1,0.06666666666666667,0.08235294117647059,0.1607843137254902,B.q)
C.GR=new A.u(1,0.12549019607843137,0.14901960784313725,0.23137254901960785,B.q)
C.a_B=new A.u(1,0.9725490196078431,0.9450980392156862,0.9490196078431372,B.q)
C.uQ=new A.u(1,0.13725490196078433,0.16470588235294117,0.25882352941176473,B.q)
C.H1=new A.u(1,0.9372549019607843,0.9411764705882353,0.9607843137254902,B.q)
C.dN=new A.u(1,0.07058823529411765,0.0784313725490196,0.10980392156862745,B.q)
C.eI=new A.u(1,0.9411764705882353,0.33725490196078434,0.41568627450980394,B.q)
C.Hb=new A.u(1,0.9568627450980393,0.9607843137254902,0.9803921568627451,B.q)
C.Hc=new A.u(1,0.11372549019607843,0.13725490196078433,0.2196078431372549,B.q)
C.bEt=new A.P(0,0,0,7)
C.bG5=new A.P(12,8,12,6)
C.bGf=new A.P(13,7,13,7)
C.bH4=new A.P(16,10,16,30)
C.bHq=new A.P(16,4,16,40)
C.bHt=new A.P(16,6,16,16)
C.aob=new A.P(16,6,16,40)
C.bHB=new A.P(16,8,16,40)
C.bKm=new A.P(4,0,4,8)
C.bKF=new A.P(4,6,4,14)
C.bKS=new A.P(6,0,6,14)
C.bTu=new A.a_(62840,"MaterialIcons",!1)
C.bVM=new A.a_(983325,"MaterialIcons",!1)
C.ass=new A.a_(983635,"MaterialIcons",!0)
C.ase=new A.a_(983372,"MaterialIcons",!1)
C.bXm=new A.ae(C.ase,18,C.e7,null,null,null)
C.bXO=new A.ae(B.xe,16,null,null,null,null)
C.c_S=new A.ae(B.r3,7,C.e7,null,null,null)
C.c0z=new A.ae(B.ea,18,C.e7,null,null,null)
C.c0P=new A.ae(B.rc,20,B.c,null,null,null)
C.c1Y=new A.ae(B.hm,16,B.c,null,null,null)
C.c33=new A.ae(B.xe,18,null,null,null,null)
C.c56=new A.ae(B.QE,18,null,null,null,null)
C.c5a=new A.ae(B.xh,null,C.eI,null,null,null)
C.c6y=new A.ae(B.Qc,18,C.eI,null,null,null)
C.cNV=x([B.dz,B.fx,B.i1],y.O)
C.cay=new A.a7(B.ay,B.aC,B.x,C.cNV,null,null)
C.aCG=x([C.eI,B.at,C.e7],y.O)
C.caz=new A.a7(B.a5,B.a9,B.x,C.aCG,null,null)
C.dsk=x([0,0.33,1],y.n)
C.cck=new A.a7(B.a5,B.a9,B.x,C.aCG,C.dsk,null)
C.dqE=x([B.dz,B.i1,B.bA],y.O)
C.cec=new A.a7(B.ay,B.aC,B.x,C.dqE,null,null)
C.dt_=x([B.i1,B.bA],y.O)
C.ceA=new A.a7(B.a5,B.a9,B.x,C.dt_,null,null)
C.co5=x([12,24,48],y.X)
C.f82=new A.y("The idea","Trading means buying something and selling it later. You make money when you sell for more than you paid, and you lose money when you sell for less. That is all a trade is.")
C.f_G=new A.y("Why prices move","Every price is set by buyers and sellers. When more people want to buy than sell, the price goes up. When more want to sell, it goes down. A chart is simply a picture of that tug of war over time.")
C.f0C=new A.y("Nobody knows the future","No person, app or AI can know for sure where a price goes next. Good traders do not guess. They follow clear rules, keep losses small, and let the winners pay for the losers.")
C.f7L=new A.y("Why pretend money first","This agent uses Alpaca paper money: real prices, fake dollars. You can learn every step, make mistakes and see real results without risking a cent. Professionals practise this way too.")
C.cZu=x([C.f82,C.f_G,C.f0C,C.f7L],y.L)
C.daG=x(["When you buy","When you sell for more than you paid","When the market opens"],y.s)
C.b3k=new D.cC("When do you make money on a trade?",C.daG,1,"Profit only exists after you sell higher than you bought.")
C.d55=x(["More buyers than sellers","The app","The time of day"],y.s)
C.b3e=new D.cC("What makes a price go up?",C.d55,0,"More people wanting to buy pushes the price up.")
C.dyL=x([C.b3k,C.b3e],y.r)
C.hNL=new D.uq("basics","What trading really is","Buyers, sellers and why prices move",4,B.l7,B.at,"basics",C.cZu,C.dyL)
C.bWp=new A.a_(983780,"MaterialIcons",!1)
C.eRi=new A.y("One candle = one time slice","On this chart every candle is 5 minutes. It shows four prices: where it started (open), where it ended (close), the highest point (high) and the lowest point (low).")
C.eZ0=new A.y("The colours","Green candle: the price closed HIGHER than it opened, buyers won those 5 minutes. Yellow candle: it closed LOWER, sellers won. Many apps use red instead of yellow, it means the same thing.")
C.f9f=new A.y("Body and wicks","The thick part (the body) runs from open to close. The thin lines (the wicks) show how far the price went up or down before coming back. A long wick on top means buyers pushed up but sellers pushed it back down.")
C.f6l=new A.y("Reading a row of candles","Several green candles in a row, each closing higher, show buyers in control. Many yellow ones closing lower show sellers in control. Candles that go up and down with no direction mean the market is undecided.")
C.cfG=x([C.eRi,C.eZ0,C.f9f,C.f6l],y.L)
C.daN=x(["It closed higher than it opened","It is a good time to buy","The market is closed"],y.s)
C.b3i=new D.cC("A green candle means...",C.daN,0,"Colour only tells you if it closed above or below where it opened.")
C.cGA=x(["1 day","5 minutes","1 hour"],y.s)
C.b38=new D.cC("On this chart one candle covers...",C.cGA,1,"The agent works with 5-minute candles.")
C.dh7=x([C.b3i,C.b38],y.r)
C.hNQ=new D.uq("candles","Reading candles","Open, close, high and low in one shape",5,C.bWp,C.e7,"candles",C.cfG,C.dh7)
C.f1J=new A.y("Bullish","An uptrend. The price makes higher highs and higher lows, like climbing stairs. Buyers are in control. Traders call this bullish (a bull attacks upward with its horns).")
C.faa=new A.y("Bearish","A downtrend. Lower highs and lower lows, like walking down stairs. Sellers are in control. This is bearish (a bear swipes downward).")
C.eSB=new A.y("Sideways","The price bounces between a ceiling and a floor with no clear direction. Most trading signals fail here, so the best move is often to wait.")
C.f4v=new A.y("The golden rule","Trade WITH the trend, not against it. Buying in a downtrend because it looks cheap is how most beginners lose. The agent only buys when the trend turns up.")
C.d8S=x([C.f1J,C.faa,C.eSB,C.f4v],y.L)
C.d70=x(["Bearish","Bullish","Sideways"],y.s)
C.b3j=new D.cC("Higher highs and higher lows means...",C.d70,1,"Climbing stairs = uptrend = bullish.")
C.daY=x(["Work best","Often fail","Are always right"],y.s)
C.b3b=new D.cC("In a sideways market, signals...",C.daY,1,"With no direction, signals flip back and forth.")
C.dzh=x([C.b3j,C.b3b],y.r)
C.hNI=new D.uq("trend","Trends: up, down, sideways","Bullish, bearish and how to tell",5,B.nf,B.ce,"trend",C.d8S,C.dzh)
C.fbb=new A.y("What an average line is","A moving average is the average closing price of the last few candles, drawn as a smooth line. It hides the small wiggles so you can see the real direction.")
C.eQs=new A.y("Fast line (pink)","The average of the last 9 candles, about 45 minutes. It reacts quickly to new moves.")
C.eS5=new A.y("Slow line (purple)","The average of the last 21 candles, about 1 hour 45 minutes. It moves slowly and shows the bigger direction.")
C.f2L=new A.y("How to read them","Fast line ABOVE slow line: recent prices are higher than older ones, the trend is up. Fast line BELOW: the trend is down. When the price itself is above both lines, buyers are strong.")
C.dsx=x([C.fbb,C.eQs,C.eS5,C.f2L],y.L)
C.dIb=x(["45 minutes","1 day","1 week"],y.s)
C.b3l=new D.cC("The pink fast line averages about...",C.dIb,0,"9 candles x 5 minutes = 45 minutes.")
C.dDH=x(["Trend is up","Trend is down","Market closed"],y.s)
C.b3d=new D.cC("Fast line above slow line means...",C.dDH,0,"Recent prices are higher than older prices.")
C.doi=x([C.b3l,C.b3d],y.r)
C.hNK=new D.uq("ma","Moving averages","The pink fast line and the purple slow line",6,H.xm,B.bA,"ma",C.dsx,C.doi)
C.eYF=new A.y("Buy signal","When the fast line crosses UP through the slow line, the short-term trend has just turned up. That moment is the buy signal. The agent buys $50 at that point.")
C.f_P=new A.y("Sell signal","When the fast line crosses back DOWN through the slow line, the up move is over. That is the sell signal, and the agent closes the trade.")
C.f4G=new A.y("Why it must be fresh","If the cross happened an hour ago, the easy part of the move may be gone. Buying late means buying high. So the agent only acts on a cross that happened since its last check, never on an old one.")
C.f6E=new A.y("The weakness","In sideways markets the lines cross back and forth and give false signals. That is why every trade also has a stop loss: when a signal is wrong, the loss stays small.")
C.dwC=x([C.eYF,C.f_P,C.f4G,C.f6E],y.L)
C.duL=x(["Crosses above the slow line","Crosses below the slow line","Is flat"],y.s)
C.b3c=new D.cC("The buy signal is when the fast line...",C.duL,0,"Crossing up = trend turning up.")
C.dH5=x(["To avoid buying late","The app is slow","Old crosses are illegal"],y.s)
C.b36=new D.cC("Why does the agent skip old crosses?",C.dH5,0,"A late entry means buying after most of the move.")
C.d5c=x([C.b3c,C.b36],y.r)
C.hNN=new D.uq("cross","The crossover signal","Exactly when the agent buys and sells",6,B.arm,B.b2,"cross",C.dwC,C.d5c)
C.bVV=new A.a_(983477,"MaterialIcons",!1)
C.f4e=new A.y("What RSI measures","RSI (Relative Strength Index) compares the size of recent rises with recent falls and gives a number from 0 to 100. Above 50, rises have been bigger. Below 50, falls have been bigger.")
C.eUj=new A.y("Above 70: stretched","The price rose very fast. It is called overbought. It often pauses or pulls back, so buying right then is risky. It can still keep rising in a strong trend.")
C.f4l=new A.y("Below 30: oversold","The price fell very fast. It often bounces, but in a strong downtrend it can stay low. Oversold is not a reason to buy on its own.")
C.f3t=new A.y("How to use it","Use RSI as a second opinion. A buy signal with RSI between 50 and 70 is healthy. A buy signal with RSI above 75 means the move may already be tired.")
C.d5C=x([C.f4e,C.eUj,C.f4l,C.f3t],y.L)
C.dgZ=x(["Oversold","Overbought","Neutral"],y.s)
C.b35=new D.cC("RSI above 70 is called...",C.dgZ,1,"It rose fast and is stretched.")
C.b3h=new D.cC("RSI below 30 always means buy.",G.T7,1,"Falling markets can stay oversold. It is a hint, not a signal.")
C.dI2=x([C.b35,C.b3h],y.r)
C.hNP=new D.uq("rsi","RSI: momentum","Is the move strong, stretched or tired?",5,C.bVV,B.cD,"rsi",C.d5C,C.dI2)
C.eXv=new A.y("Decide the exit before you enter","Every agent trade has two exits set before it starts. Take profit at +3% (about +$1.50 on $50) and stop loss at -1.5% (about -$0.75).")
C.eLl=new A.y("Win twice what you risk","The win (+$1.50) is twice the loss (-$0.75). Because of that, you only need to be right about 1 trade in 3 to break even. Being right half the time would be clearly profitable.")
C.eRJ=new A.y("Size matters most","The agent uses $50 per trade even though the paper account has $100,000. Small trades mean no single mistake can hurt much. Pros rarely risk more than 1 to 2 percent of their money on one trade.")
C.f14=new A.y("Never move the stop","The biggest beginner mistake is hoping a losing trade comes back and moving the stop lower. Small losses are the cost of doing business. Big losses end accounts.")
C.dtS=x([C.eXv,C.eLl,C.eRJ,C.f14],y.L)
C.doc=x(["1 in 3 trades","9 in 10 trades","Every trade"],y.s)
C.b3m=new D.cC("With +$1.50 wins and -$0.75 losses, to break even you must win about...",C.doc,0,"One win (+1.50) pays for two losses (-1.50).")
C.dfw=x(["Move the stop lower","Let the stop loss work","Buy more"],y.s)
C.b39=new D.cC("A trade is losing. The best move is...",C.dfw,1,"The stop exists to keep losses small.")
C.cYk=x([C.b3m,C.b39],y.r)
C.hNJ=new D.uq("risk","Risk: stop loss and take profit","Why small losses beat big wins",7,B.rd,C.eI,"risk",C.dtS,C.cYk)
C.bWv=new A.a_(983848,"MaterialIcons",!1)
C.eUV=new A.y("Bad days happen","Some days every signal fails. The danger is trying to win it back by trading more and bigger. That is called revenge trading and it is how small losses become big ones.")
C.f_8=new A.y("Daily stop: $10","If the day loses $10, the agent makes no more buys until tomorrow. It walks away and lets the market calm down.")
C.f0Y=new A.y("Total brake: $25","If total losses reach $25, the agent pauses completely until you review what happened and turn it back on. Reviewing is the most important part of learning.")
C.eTj=new A.y("Your own rules","When you trade yourself, set the same kind of limits before the day starts, and keep them even when it hurts.")
C.dzy=x([C.eUV,C.f_8,C.f0Y,C.eTj],y.L)
C.dk8=x(["Doubles the next trade","Stops buying for the day","Sells everything forever"],y.s)
C.b3f=new D.cC("After losing $10 in a day, the agent...",C.dk8,1,"The daily stop prevents revenge trading.")
C.dCk=x([C.b3f],y.r)
C.hNH=new D.uq("brakes","Daily stop and total brake","Protecting your account from bad days",4,C.bWv,B.k7,"brakes",C.dzy,C.dCk)
C.aj4=new A.u(1,0.3843137254901961,0.49411764705882355,0.9176470588235294,B.q)
C.eZT=new A.y("Stocks and funds","SPY, QQQ, Apple, Microsoft, Nvidia, Tesla and Amazon trade on US market days from 9:30 AM to 4:00 PM Eastern Time. Closed at night, on weekends and on holidays.")
C.f_M=new A.y("Overnight gaps","News can come out while the stock market is closed, so the next morning it can open far higher or lower. That is why the agent sells stocks by 3:55 PM and never holds them overnight.")
C.eXQ=new A.y("Crypto","Bitcoin, Ethereum and Solana trade all day, every day, including weekends. More hours means more chances, but crypto also moves faster and harder, so stops get hit more often.")
C.f66=new A.y("Funds vs single companies","SPY holds the 500 biggest US companies and QQQ holds 100 big tech companies, so they move more calmly. One company like Tesla can jump a lot on its own news.")
C.cTl=x([C.eZT,C.f_M,C.eXQ,C.f66],y.L)
C.d8R=x(["Only weekdays","All day, every day","Only at night"],y.s)
C.b3g=new D.cC("When can Bitcoin be traded?",C.d8R,1,"Crypto never closes.")
C.d5R=x(["To avoid overnight gaps","Stocks expire","It is the law"],y.s)
C.b37=new D.cC("Why sell stocks before the close?",C.d5R,0,"Overnight news can make the price jump at the open.")
C.dpk=x([C.b3g,C.b37],y.r)
C.hNO=new D.uq("hours","Stocks vs crypto","Market hours, weekends and jumpiness",5,B.jU,C.aj4,"hours",C.cTl,C.dpk)
C.f4H=new A.y("Judge many trades, not one","One trade tells you nothing. Luck decides single trades. After 20 to 50 trades you start to see if a method really works. That is why the plan is 2 to 4 weeks of paper trading.")
C.ePN=new A.y("Keep a journal","For each trade write: why you bought, where your stop and target were, what happened, and what you learned. The Pretend trades list on the main screen is the agent's journal.")
C.eQl=new A.y("Follow the rules exactly","The point of the agent is to follow rules perfectly, with no fear and no greed. Check that it did. If it ever breaks a rule, that is a bug to fix before real money.")
C.eXR=new A.y("Before real money","Real money comes only after a long paper test with a positive result, a full review, and money you can truly afford to lose. Never borrow to trade.")
C.dxU=x([C.f4H,C.ePN,C.eQl,C.eXR],y.L)
C.dED=x(["1","3","20 or more"],y.s)
C.b34=new D.cC("How many trades before judging a method?",C.dED,2,"Small samples are mostly luck.")
C.dHA=x(["Borrowed","Money you can afford to lose","Rent money"],y.s)
C.b3a=new D.cC("Money for trading should be...",C.dHA,1,"Never trade money you need.")
C.dHY=x([C.b34,C.b3a],y.r)
C.hNM=new D.uq("practice","Practising like a pro","Journals, patience and judging results",5,B.m2,B.bi,"practice",C.dxU,C.dHY)
C.E7=x([C.hNL,C.hNQ,C.hNI,C.hNK,C.hNN,C.hNP,C.hNJ,C.hNH,C.hNO,C.hNM],A.aD("U<uq>"))
C.d6h=x(["All","Forex","Stocks","Crypto"],y.s)
C.dcr=x(["Which market looks strongest right now?","Is Bitcoin going up or down right now?","Why has the agent not bought yet?","Explain RSI like I am new","How do I know when to sell?","What does bullish and bearish mean?"],y.s)
C.euk={basics:0,candles:1,trend:2,ma:3,cross:4,rsi:5,risk:6,brakes:7,hours:8,practice:9}
C.dbA=x(["A $4 profit","A $4 loss","Nothing"],y.s)
C.hRN=new D.cC("You buy at $100 and sell at $96. What happened?",C.dbA,1,"Selling lower than you bought is a loss.")
C.duJ=x(["The future price","How the price moved over time","Who is buying"],y.s)
C.hRL=new D.cC("What does a price chart show?",C.duJ,1,"A chart is a record of past prices.")
C.dGg=x(["Yes, experts can","Yes, an AI can","No, nobody can"],y.s)
C.hRU=new D.cC("Can anyone know for sure where a price goes next?",C.dGg,2,"Markets are uncertain; rules and stops manage that.")
C.ddA=x(["Trading with real prices and pretend money","Trading newspapers","Trading on paper forms"],y.s)
C.hSm=new D.cC("What is paper trading?",C.ddA,0,"Real prices, fake dollars: practice without risk.")
C.dxX=x(["It is faster","To learn without risking real money","Pretend money earns more"],y.s)
C.hRQ=new D.cC("Why practise with pretend money first?",C.dxX,1,"Mistakes cost nothing while you learn.")
C.csz=x(["Rise","Fall","Stay frozen"],y.s)
C.hRV=new D.cC("More people want to sell than buy. The price will most likely...",C.csz,1,"Selling pressure pushes prices down.")
C.dgN=x(["Clear rules and small losses","Lucky guesses","Tips from friends"],y.s)
C.hTs=new D.cC("Good traders mostly rely on...",C.dgN,0,"Rules and risk control beat guessing.")
C.ceJ=x(["$45","$55","$60"],y.s)
C.hSU=new D.cC("You buy $50 of something and it rises 10%. It is now worth...",C.ceJ,1,"10% of $50 is $5, so $55.")
C.cY2=x(["Buy","Sell","Look at the chart"],y.s)
C.hSb=new D.cC("A trade is only finished when you...",C.cY2,1,"Until you sell, a gain or loss is not locked in.")
C.dFv=x(["Good traders never lose","Every trader has losing trades","Losses only happen to beginners"],y.s)
C.hS6=new D.cC("Which is true about losses?",C.dFv,1,"Losing trades are normal; keeping them small is the skill.")
C.cQW=x(["Real dollars are spent","No real money is at risk","It trades in secret"],y.s)
C.hT1=new D.cC("The agent uses Alpaca paper money. That means...",C.cQW,1,"Paper accounts use fake dollars.")
C.dqn=x(["The government","Buyers and sellers agreeing","The app makers"],y.s)
C.hRK=new D.cC("A price is set by...",C.dqn,1,"Each trade is a buyer and seller agreeing on a price.")
C.de9=x([C.b3k,C.b3e,C.hRN,C.hRL,C.hRU,C.hSm,C.hRQ,C.hRV,C.hTs,C.hSU,C.hSb,C.hS6,C.hT1,C.hRK],y.r)
C.dar=x(["It closed lower than it opened","It closed higher","Nothing traded"],y.s)
C.hTd=new D.cC("A yellow (or red) candle means...",C.dar,0,"Sellers won that time slice.")
C.deM=x(["Wick","Body","Tail light"],y.s)
C.hRX=new D.cC("The thick part of a candle is called the...",C.deM,1,"The body runs from open to close.")
C.dnk=x(["Wicks","Bodies","Averages"],y.s)
C.hSH=new D.cC("The thin lines above and below are the...",C.dnk,0,"Wicks show the high and the low.")
C.ded=x(["Open","Close","Highest price"],y.s)
C.hT3=new D.cC("The top of the upper wick shows the...",C.ded,2,"The tip of the upper wick is the high.")
C.dIp=x(["Lowest price","Open","Average"],y.s)
C.hTm=new D.cC("The bottom of the lower wick shows the...",C.dIp,0,"The tip of the lower wick is the low.")
C.dgV=x(["One","Two","Four"],y.s)
C.hSV=new D.cC("How many prices does one candle show?",C.dgV,2,"Open, high, low and close.")
C.dsh=x(["Buyers pushed up but sellers pushed it back down","The price never moved","The market closed early"],y.s)
C.hSX=new D.cC("A long upper wick means...",C.dsh,0,"The price went high, then fell back before the close.")
C.d5l=x(["Sellers in control","Buyers in control","No direction"],y.s)
C.hSE=new D.cC("Many green candles in a row, each closing higher, show...",C.d5l,1,"Rising closes mean buyers are winning.")
C.d51=x(["A strong uptrend","The market is undecided","A crash"],y.s)
C.hTb=new D.cC("Candles going up and down with no direction mean...",C.d51,1,"Mixed candles show indecision.")
C.daP=x(["Green","Yellow","Grey"],y.s)
C.hST=new D.cC("A candle opened at 10 and closed at 12. Its colour here is...",C.daP,0,"It closed above the open.")
C.dJ0=x(["5 candles","12 candles","60 candles"],y.s)
C.hRY=new D.cC("In 1 hour of 5-minute candles there are...",C.dJ0,1,"60 minutes divided by 5 is 12.")
C.dr1=x(["The first price in that time","The last price in that time","The highest price"],y.s)
C.hTu=new D.cC('The "close" of a candle is...',C.dr1,1,"Close is where the price ended.")
C.dy9=x([C.b3i,C.b38,C.hTd,C.hRX,C.hSH,C.hT3,C.hTm,C.hSV,C.hSX,C.hSE,C.hTb,C.hST,C.hRY,C.hTu],y.r)
C.d7e=x(["Bullish","Bearish","Sideways"],y.s)
C.hT7=new D.cC("Lower highs and lower lows means...",C.d7e,1,"Walking down stairs = downtrend = bearish.")
C.dmL=x(["Rise","Fall","Stay the same"],y.s)
C.hTz=new D.cC('"Bullish" means you expect prices to...',C.dmL,0,"A bull attacks upward.")
C.djf=x(["Rise","Fall","Double"],y.s)
C.hTx=new D.cC('"Bearish" means you expect prices to...',C.djf,1,"A bear swipes downward.")
C.dmV=x(["Trade against the trend","Trade with the trend","Ignore the trend"],y.s)
C.hSL=new D.cC("The golden rule of trends is...",C.dmV,1,"Going with the trend wins more often.")
C.d8F=x(["A safe plan","A common beginner mistake","What the agent does"],y.s)
C.hTf=new D.cC("Buying in a downtrend because it looks cheap is...",C.d8F,1,"Cheap can get cheaper.")
C.djJ=x(["Sideways","Bullish","Bearish"],y.s)
C.hSf=new D.cC("A price bouncing between a ceiling and a floor is...",C.djJ,0,"No higher highs or lower lows: sideways.")
C.dBp=x(["Trade a lot","Wait","Borrow money"],y.s)
C.hSu=new D.cC("In a sideways market the best move is often to...",C.dBp,1,"Patience avoids false signals.")
C.dly=x(["Up","Down","Flat"],y.s)
C.hSz=new D.cC("When sellers are in control, the trend is...",C.dly,1,"Sellers push prices down.")
C.dlv=x(["Stairs going up","Stairs going down","A flat road"],y.s)
C.hRM=new D.cC("Which picture fits an uptrend?",C.dlv,0,"Each step a bit higher.")
C.dBb=x(["Turns down","Turns up","Is sideways"],y.s)
C.hSR=new D.cC("The agent only buys when the trend...",C.dBb,1,"It buys the start of up moves.")
C.dzB=x(["Getting lower","Getting higher","Gone"],y.s)
C.hS1=new D.cC("A trend changes from bearish to bullish. Lows are now...",C.dzB,1,"Higher lows are the first sign of an uptrend.")
C.dqL=x(["Strong uptrend","Strong downtrend","Sideways"],y.s)
C.hT_=new D.cC("Most trading signals fail in which market?",C.dqL,2,"Without direction, signals flip constantly.")
C.d8D=x([C.b3j,C.b3b,C.hT7,C.hTz,C.hTx,C.hSL,C.hTf,C.hSf,C.hSu,C.hSz,C.hRM,C.hSR,C.hS1,C.hT_],y.r)
C.dgM=x(["The average closing price of recent candles","The highest price ever","A news feed"],y.s)
C.hTn=new D.cC("A moving average is...",C.dgM,0,"It smooths prices into a line.")
C.dGV=x(["To hide small wiggles and show direction","To predict news","To make charts colourful"],y.s)
C.hTo=new D.cC("Why use a moving average?",C.dGV,0,"It filters noise.")
C.ddg=x(["9","21","100"],y.s)
C.hSI=new D.cC("The purple slow line averages how many candles?",C.ddg,1,"21 candles, about 1 hour 45 minutes.")
C.dr6=x(["The fast (pink) line","The slow (purple) line","Both the same"],y.s)
C.hSK=new D.cC("Which line reacts faster to new moves?",C.dr6,0,"Fewer candles means quicker reaction.")
C.dHa=x(["Trend is up","Trend is down","Buy now"],y.s)
C.hSw=new D.cC("Fast line below slow line means...",C.dHa,1,"Recent prices are lower than older ones.")
C.d9d=x(["Buyers are strong","Sellers are strong","Nothing"],y.s)
C.hRP=new D.cC("The price is above both lines. That shows...",C.d9d,0,"Price above its averages = strength.")
C.d5a=x(["The bigger direction","Only the last candle","Tomorrow price"],y.s)
C.hT4=new D.cC("The slow line shows...",C.d5a,0,"It changes slowly and shows the wider trend.")
C.d1v=x(["15 minutes","1 hour 45 minutes","1 week"],y.s)
C.hS5=new D.cC("The slow line covers about...",C.d1v,1,"21 x 5 minutes = 105 minutes.")
C.cof=x(["Past prices","Future prices","Opinions"],y.s)
C.hTc=new D.cC("Moving averages are based on...",C.cof,0,"They average prices that already happened.")
C.d5A=x(["Lag behind the price","Lead the price","Never move"],y.s)
C.hTp=new D.cC("Because they use past prices, moving averages...",C.d5A,0,"Averages are always a little late.")
C.dq0=x(["A bullish picture","A bearish picture","A closed market"],y.s)
C.hSy=new D.cC("Both lines pointing up and the price above them is...",C.dq0,0,"Everything points up.")
C.dfv=x(["Trending strongly","Sideways","Crashing"],y.s)
C.hTy=new D.cC("When the two lines are tangled together, the market is often...",C.dfv,1,"Tangled lines mean no clear direction.")
C.dAX=x([C.b3l,C.b3d,C.hTn,C.hTo,C.hSI,C.hSK,C.hSw,C.hRP,C.hT4,C.hS5,C.hTc,C.hTp,C.hSy,C.hTy],y.r)
C.dgK=x(["Crosses below the slow line","Crosses above the slow line","Touches the price"],y.s)
C.hRJ=new D.cC("The sell signal is when the fast line...",C.dgK,0,"Crossing down = the up move is over.")
C.cY0=x(["$50","$500","All the money"],y.s)
C.hSO=new D.cC("How much does the agent buy on a signal?",C.cY0,0,"Every pretend trade is $50.")
C.dAQ=x(["A fresh signal","An old signal","Not a signal at all ever"],y.s)
C.hTg=new D.cC("A cross that happened an hour ago is...",C.dAQ,1,"Fresh means since the last check.")
C.csI=x(["Sideways markets","Strong trends","Closed markets"],y.s)
C.hTk=new D.cC("Crossovers give many false signals in...",C.csI,0,"Lines cross back and forth with no direction.")
C.dp9=x(["The stop loss","Buying more","Ignoring it"],y.s)
C.hS4=new D.cC("What protects you when a signal is wrong?",C.dp9,0,"The stop keeps the loss small.")
C.dj0=x(["Just changed direction","Ended forever","Doubled"],y.s)
C.hTv=new D.cC("The crossover tells you the short-term trend has...",C.dj0,0,"A cross marks a turn.")
C.ddl=x(["1 second","15 minutes","1 day"],y.s)
C.hRW=new D.cC("The agent checks for crosses every...",C.ddl,1,"The automatic check runs every 15 minutes.")
C.d6E=x(["Buying higher, with less room to rise","A guaranteed win","A cheaper price"],y.s)
C.hRZ=new D.cC("Buying late in a move usually means...",C.d6E,0,"Most of the move is already gone.")
C.dug=x(["Trust it more","Trust it less","Bet bigger"],y.s)
C.hTe=new D.cC("If a signal fails often on one market, you should...",C.dug,1,"Check how often it worked before trusting it.")
C.d6y=x(["Buys more","Sells","Waits a week"],y.s)
C.hSW=new D.cC("When the agent holds a trade and the fast line crosses down, it...",C.d6y,1,"The sell signal closes the trade.")
C.cNQ=x(["Yes","No","Only on Fridays"],y.s)
C.hSA=new D.cC("Does a buy signal guarantee the price will rise?",C.cNQ,1,"Signals improve the odds; they never guarantee.")
C.dbo=x(["Holds no other position","Already holds three","Has lost $25"],y.s)
C.hT6=new D.cC("The agent buys on a signal only if it...",C.dbo,0,"One position at a time.")
C.deV=x([C.b3c,C.b36,C.hRJ,C.hSO,C.hTg,C.hTk,C.hS4,C.hTv,C.hRW,C.hRZ,C.hTe,C.hSW,C.hSA,C.hT6],y.r)
C.dlk=x(["0 to 100","1 to 10","-50 to 50"],y.s)
C.hTi=new D.cC("RSI is a number from...",C.dlk,0,"It always sits between 0 and 100.")
C.dwk=x(["Rises were bigger than falls","Falls were bigger than rises","Nothing moved"],y.s)
C.hSs=new D.cC("RSI above 50 means recent...",C.dwk,0,"Above 50 = buyers stronger lately.")
C.dgY=x(["Overbought","Oversold","Balanced"],y.s)
C.hSC=new D.cC("RSI below 30 is called...",C.dgY,1,"It fell fast and is stretched downward.")
C.dtW=x(["Momentum: strength of recent moves","The company profit","Trading volume"],y.s)
C.hSN=new D.cC("RSI measures...",C.dtW,0,"It compares gains with losses.")
C.d6l=x(["Healthy","Very stretched","Impossible"],y.s)
C.hSe=new D.cC("A buy signal with RSI 60 is...",C.d6l,0,"Between 50 and 70 is healthy strength.")
C.ddW=x(["Just starting","Tired and stretched","Guaranteed"],y.s)
C.hRR=new D.cC("A buy signal with RSI 80 means the move may be...",C.ddW,1,"Very high RSI often comes before a pause.")
C.dl_=x(["As a second opinion","As the only reason to trade","Never"],y.s)
C.hSl=new D.cC("Best way to use RSI?",C.dl_,0,"Combine it with the trend signal.")
C.dvz=x(["For a while","Never","Only one candle"],y.s)
C.hSM=new D.cC("In a strong uptrend, RSI can stay above 70...",C.dvz,0,"Strong trends can stay overbought.")
C.dqb=x(["Balanced buyers and sellers","Market closed","Crash coming"],y.s)
C.hSP=new D.cC("RSI of 50 means...",C.dqb,0,"50 is the middle.")
C.d9b=x(["Rose very fast","Fell very fast","Did not move"],y.s)
C.hTq=new D.cC("Overbought means prices...",C.d9b,0,"Overbought = rose fast.")
C.cQ0=x(["Stay oversold and keep falling","Only go up","Freeze the market"],y.s)
C.hSn=new D.cC("Oversold in a strong downtrend can...",C.cQ0,0,"Oversold is not a reason to buy on its own.")
C.cM6=x(["Sellers a little stronger","Extreme buying","Extreme selling"],y.s)
C.hSF=new D.cC("RSI 45 suggests...",C.cM6,0,"Just below 50: sellers slightly ahead.")
C.dkY=x([C.b35,C.b3h,C.hTi,C.hSs,C.hSC,C.hSN,C.hSe,C.hRR,C.hSl,C.hSM,C.hSP,C.hTq,C.hSn,C.hSF],y.r)
C.dvw=x(["+3%","+30%","+0.3%"],y.s)
C.hSD=new D.cC("The agent take profit is...",C.dvw,0,"+3% is about +$1.50 on $50.")
C.dha=x(["-1.5%","-15%","-50%"],y.s)
C.hSd=new D.cC("The agent stop loss is...",C.dha,0,"-1.5% is about -$0.75 on $50.")
C.doR=x(["A planned exit that limits a loss","A way to stop the app","A bonus"],y.s)
C.hS3=new D.cC("A stop loss is...",C.doR,0,"It sells automatically when the loss reaches a set size.")
C.des=x(["Before entering the trade","After it goes wrong","Never"],y.s)
C.hSc=new D.cC("When should you decide your exits?",C.des,0,"Plan exits first, while calm.")
C.dkL=x(["So no single mistake hurts much","It is the maximum allowed","To lose faster"],y.s)
C.hTa=new D.cC("Why does the agent use only $50 per trade?",C.dkL,0,"Small size protects the account.")
C.dHU=x(["1 to 2 percent","50 percent","100 percent"],y.s)
C.hT0=new D.cC("Pros rarely risk more than about ... of their money on one trade.",C.dHU,0,"Small risk per trade keeps them in the game.")
C.d5p=x(["$0","+$1.50","-$1.50"],y.s)
C.hT5=new D.cC("Win $1.50 once and lose $0.75 twice. Your total is...",C.d5p,0,"1.50 - 0.75 - 0.75 = 0.")
C.dsR=x(["Profitable","Break even","A loss"],y.s)
C.hT8=new D.cC("Winning half the time with 2 to 1 reward to risk is...",C.dsR,0,"Each win is twice each loss.")
C.deA=x(["Turns small losses into big ones","Guarantees a win","Has no effect"],y.s)
C.hSr=new D.cC('Moving your stop lower to "give it room" usually...',C.deA,0,"Hope is not a plan.")
C.dE0=x(["2 to 1","1 to 2","10 to 1"],y.s)
C.hSx=new D.cC("Reward to risk of the agent is...",C.dE0,0,"$1.50 target vs $0.75 stop.")
C.csb=x(["Can end an account","Are rare","Do not matter"],y.s)
C.hTC=new D.cC("Big losses are dangerous because they...",C.csb,0,"A 50% loss needs a 100% gain to recover.")
C.cVr=x(["Selling when the planned gain is reached","Buying more","Holding forever"],y.s)
C.hSk=new D.cC("Take profit means...",C.cVr,0,"It locks in the win.")
C.csH=x([C.b3m,C.b39,C.hSD,C.hSd,C.hS3,C.hSc,C.hTa,C.hT0,C.hT5,C.hT8,C.hSr,C.hSx,C.hTC,C.hSk],y.r)
C.dwq=x(["Trading more to win losses back","Taking a break","Following rules"],y.s)
C.hSJ=new D.cC("Revenge trading means...",C.dwq,0,"It usually makes losses bigger.")
C.cQq=x(["$25 total losses","$100 total losses","Never"],y.s)
C.hSv=new D.cC("The total brake pauses the agent at...",C.cQq,0,"$25 total demo losses.")
C.d6F=x(["An admin, after a review","It turns itself on","Nobody ever"],y.s)
C.hTl=new D.cC("Who turns the agent back on after the $25 brake?",C.d6F,0,"A human review comes first.")
C.ceI=x(["$10","$1","$100"],y.s)
C.hSj=new D.cC("The daily stop is...",C.ceI,0,"If the day loses $10, no more buys.")
C.d1B=x(["Stop and reset","Trade bigger","Ignore your limits"],y.s)
C.hTj=new D.cC("Bad days happen. The best response is...",C.d1B,0,"Walking away protects your money.")
C.dnx=x(["Before the day starts","After you lose","Only on weekends"],y.s)
C.hRS=new D.cC("Limits should be set...",C.dnx,0,"Decide limits while calm.")
C.dCM=x(["Reviewing what happened","Forgetting it","Blaming the market"],y.s)
C.hSt=new D.cC("The most important part of learning after a bad run is...",C.dCM,0,"Reviews turn losses into lessons.")
C.cQs=x(["Yes, exits still work","No, it freezes","It buys more instead"],y.s)
C.hSY=new D.cC("After the daily stop, can the agent still sell an open trade?",C.cQs,0,"The stop blocks new buys, not exits.")
C.dHq=x(["Protect the account from bad days","Make more trades","Win every day"],y.s)
C.hSS=new D.cC("Brakes are there to...",C.dHq,0,"They cap the damage.")
C.d8G=x(["Stop trading and rethink","Raise the limits","Borrow money"],y.s)
C.hSp=new D.cC("If you keep breaking your own limits, you should...",C.d8G,0,"Rules only work when kept.")
C.dzI=x(["The next day","Never","Every minute"],y.s)
C.hSZ=new D.cC("The daily stop resets...",C.dzI,0,"A new Eastern Time day starts fresh.")
C.dmx=x(["Can lose everything on a bad day","Always wins","Pays no fees"],y.s)
C.hS_=new D.cC("A trader with no loss limits...",C.dmx,0,"Limits are the safety net.")
C.dG5=x(["Pause","Trade faster","Bet bigger"],y.s)
C.hRO=new D.cC("Feeling angry after a loss is a sign to...",C.dG5,0,"Emotions lead to bad trades.")
C.dhN=x([C.b3f,C.hSJ,C.hSv,C.hTl,C.hSj,C.hTj,C.hRS,C.hSt,C.hSY,C.hSS,C.hSp,C.hSZ,C.hS_,C.hRO],y.r)
C.daQ=x(["9:30 AM to 4:00 PM Eastern","24 hours","8 PM to midnight"],y.s)
C.hS7=new D.cC("US stock market hours are...",C.daQ,0,"On market days only.")
C.hS0=new D.cC("Is the US stock market open on Saturday?",B.a78,1,"Weekends are closed.")
C.dFF=x(["A jump between the close and the next open","A break in the chart software","A holiday"],y.s)
C.hSQ=new D.cC("An overnight gap is...",C.dFF,0,"News while closed moves the next open.")
C.d1A=x(["Faster and harder","Slower","Exactly the same"],y.s)
C.hSq=new D.cC("Crypto compared with SPY usually moves...",C.d1A,0,"Crypto is more jumpy.")
C.duG=x(["The 500 biggest US companies","One company","Bitcoin"],y.s)
C.hTA=new D.cC("SPY holds...",C.duG,0,"It is a fund of 500 companies.")
C.dIZ=x(["They spread over many companies","They are closed","They are crypto"],y.s)
C.hRI=new D.cC("Why do funds like SPY move more calmly?",C.dIZ,0,"One bad company matters less.")
C.dAT=x(["3:55 PM Eastern","Midnight","Noon"],y.s)
C.hTt=new D.cC("The agent sells stocks by...",C.dAT,0,"Before the 4:00 PM close.")
C.d8H=x(["Sunday 5 PM to Friday 5 PM Eastern","Only 9:30 to 4","Only weekends"],y.s)
C.hS8=new D.cC("Forex (currency pairs) trades...",C.d8H,0,"Real forex is closed on weekends.")
C.ddX=x(["The broker itself","The real world market","The government"],y.s)
C.hSi=new D.cC("OTC prices at a broker on weekends come from...",C.ddX,0,"They are made by the broker and can differ.")
C.dwH=x(["Do not trade","Trade double","Trade at night"],y.s)
C.hSG=new D.cC("On a US market holiday, stocks...",C.dwH,0,"Holidays are closed days.")
C.cf1=x(["More often","Never","Less often"],y.s)
C.hTw=new D.cC("Because crypto moves fast, stop losses are hit...",C.cf1,0,"Bigger swings reach stops sooner.")
C.dAS=x(["Its own news","Weekend rules","The colour of candles"],y.s)
C.hTh=new D.cC("One company like Tesla can jump a lot because of...",C.dAS,0,"Single stocks react to company news.")
C.dqY=x([C.b3g,C.b37,C.hS7,C.hS0,C.hSQ,C.hSq,C.hTA,C.hRI,C.hTt,C.hS8,C.hSi,C.hSG,C.hTw,C.hTh],y.r)
C.dfE=x(["Why you entered, your exits and what happened","Only wins","Nothing"],y.s)
C.hSa=new D.cC("A trading journal records...",C.dfE,0,"It shows what really works.")
C.hSB=new D.cC("One winning trade proves a method works.",G.T7,1,"One trade can be pure luck.")
C.djV=x(["2 to 4 weeks","1 hour","1 day"],y.s)
C.hRT=new D.cC("The plan is to paper trade for...",C.djV,0,"Enough time for many trades.")
C.dob=x(["A bug to fix before real money","Fine","A bonus"],y.s)
C.hS2=new D.cC("If the agent ever breaks a rule, that is...",C.dob,0,"Rules must be followed exactly.")
C.dt8=x(["A long positive paper test and a full review","One good day","A tip from a friend"],y.s)
C.hTB=new D.cC("Before using real money you need...",C.dt8,0,"Evidence first.")
C.dal=x(["Worse than a coin flip","Excellent","Guaranteed"],y.s)
C.hT9=new D.cC("Signals that worked under 50% of the time are...",C.dal,0,"Do not trust them.")
C.d5L=x(["Never a good idea for beginners","Smart","Required"],y.s)
C.hT2=new D.cC("Borrowing money to trade is...",C.d5L,0,"Borrowed losses still have to be paid.")
C.dci=x(["The agent journal","An advert","A game"],y.s)
C.hSh=new D.cC("The Pretend trades list on the main screen is...",C.dci,0,"Every buy and sell is recorded.")
C.dps=x(["No fear and no greed","Lots of emotion","Random choices"],y.s)
C.hSo=new D.cC("The point of an agent is to follow rules with...",C.dps,0,"Discipline is its strength.")
C.dym=x(["+$3.00","-$3.00","$0"],y.s)
C.hTr=new D.cC("After 20 trades you have 8 wins at +$1.50 and 12 losses at -$0.75. Total?",C.dym,0,"8 x 1.50 = 12; 12 x 0.75 = 9; 12 - 9 = +3.")
C.cYp=x(["Review the trades calmly","Quit forever without looking","Double the size"],y.s)
C.hS9=new D.cC("A losing week means you should...",C.cYp,0,"Reviews find what to fix.")
C.dEm=x(["Patient and disciplined","Lucky","Fast clickers"],y.s)
C.hSg=new D.cC("The best traders are mostly...",C.dEm,0,"Patience and rules win over time.")
C.dm_=x([C.b34,C.b3a,C.hSa,C.hSB,C.hRT,C.hS2,C.hTB,C.hT9,C.hT2,C.hSh,C.hSo,C.hTr,C.hS9,C.hSg],y.r)
C.dLj=new A.bq(C.euk,[C.de9,C.dy9,C.d8D,C.dAX,C.deV,C.dkY,C.csH,C.dhN,C.dqY,C.dm_],A.aD("bq<p,ai<cC>>"))
C.ewl={EUR:0,USD:1,GBP:2,JPY:3,CAD:4,AUD:5,NZD:6,CHF:7,TRY:8,NOK:9,THB:10}
C.f9X=new A.y("\u20ac",B.dU)
C.faP=new A.y("$",B.eq)
C.eQt=new A.y("\xa3",B.dg)
C.eZX=new A.y("\xa5",B.bE)
C.eXS=new A.y("C$",B.hG)
C.f_n=new A.y("A$",B.cV)
C.ePM=new A.y("NZ",B.aw)
C.f39=new A.y("Fr",B.er)
C.f86=new A.y("TL",B.fK)
C.f7c=new A.y("kr",B.fV)
C.eUm=new A.y("TH",B.wD)
C.a8u=new A.bq(C.ewl,[C.f9X,C.faP,C.eQt,C.eZX,C.eXS,C.f_n,C.ePM,C.f39,C.f86,C.f7c,C.eUm],A.aD("bq<p,+(p,u)>"))
C.c0k=new A.ae(B.r3,5,B.b2,null,null,null)
C.eCU=new A.D(B.hx,C.c0k,null)
C.eSl=new A.y("Not enough history yet: wait",B.k7)
C.eTb=new A.y("Too late to enter: wait for the next signal",C.eI)
C.eWT=new A.y("No clear direction: do not enter",B.k7)
C.f3z=new A.y("Early, but this signal failed often here: skip it",C.eI)
C.fcz=new A.b3(1,"Live signals",C.ase)
C.fcH=new A.b3(B.k7,C.ass,"Moving sideways")
C.fdg=new A.b3(2,"Ask tutor",B.xe)
C.fdy=new A.b3(B.b2,B.oT,"Waiting for data")
C.fei=new A.b3(0,"Lessons",B.o_)
C.few=new A.b3(C.e7,B.nf,"Trend is UP")
C.ffx=new A.b3(C.eI,B.a4P,"Trend is DOWN")
C.fj0=new A.b7([B.zY,C.e7,"Signal alerts are ON: the market, ENTER UP or DOWN, and the duration, while NGMY is open or in the background.",null])
C.fkc=new A.b7([B.as1,B.k7,"Signal alerts are unlocked. Allow notifications so the app can tell you when to enter.","Allow"])
C.bZx=new A.ae(B.r3,8,C.e7,null,null,null)
C.fL2=new A.F(!0,C.e7,null,null,null,null,11.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.haE=new A.C("LIVE",null,C.fL2,null,null,null,null,null,null,null,null,null)
C.dvy=x([C.bZx,B.bg,C.haE],y.p)
C.fod=new A.c3(B.aL,B.e,B.M,B.l,null,B.p,null,0,C.dvy,null)
C.bZZ=new A.ae(B.rc,14,B.c,null,null,null)
C.hhx=new A.C("Learn",null,B.np,null,null,null,null,null,null,null,null,null)
C.da6=x([C.bZZ,B.d9,C.hhx],y.p)
C.fog=new A.c3(B.aL,B.e,B.M,B.l,null,B.p,null,0,C.da6,null)
C.fF3=new A.F(!0,B.c,null,null,null,null,36,B.F,null,-0.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.fG7=new A.F(!0,B.c,null,null,null,null,20,B.u,null,0.8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.fHz=new A.F(!0,B.ac,null,null,null,null,11.5,B.F,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.fJn=new A.F(!0,B.c,null,null,null,null,11,B.u,null,0.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.fJz=new A.F(!0,C.e7,null,null,null,null,11.5,B.P,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.fKZ=new A.F(!0,C.eI,null,null,null,null,11.5,B.P,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.fP0=new A.F(!0,C.e7,null,null,null,null,12.5,B.P,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.fV5=new A.C("Ask the tutor",null,B.cc,null,null,null,null,null,null,null,null,null)
C.fVd=new A.C("The $25 brake paused the agent. Turning it back on means you have reviewed it. The running demo profit and loss starts again from $0.",null,null,null,null,null,null,null,null,null,null,null)
C.aXt=new A.F(!0,C.eI,null,null,null,null,12.5,B.P,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.fVg=new A.C("Not quite. Try again.",null,C.aXt,null,null,null,null,null,null,null,null,null)
C.fWf=new A.C("All 10 lessons done!",null,null,null,null,null,null,null,null,null,null,null)
C.fWm=new A.C("10 short lessons. Each one shows you the idea live on the real markets the agent is watching.",null,B.FB,null,null,null,null,null,null,null,null,null)
C.fXR=new A.C("Wrong. You have one more try.",null,C.aXt,null,null,null,null,null,null,null,null,null)
C.fZm=new A.C("Turn the agent back on?",null,null,null,null,null,null,null,null,null,null,null)
C.fSf=new A.F(!0,B.c,null,null,null,null,9.5,B.u,null,0.8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.h3D=new A.C("PRETEND MONEY",null,C.fSf,null,null,null,null,null,null,null,null,null)
C.h4l=new A.C("Paper balance",null,B.WL,null,null,null,null,null,null,null,null,null)
C.h84=new A.C("Signal alerts are now unlocked. When a market says ENTER UP or ENTER DOWN, the app will tell you the market, the direction and the duration. Allow notifications to receive them.",null,null,null,null,null,null,null,null,null,null,null)
C.hb9=new A.C("Allow notifications",null,null,null,null,null,null,null,null,null,null,null)
C.he2=new A.C("Check now",null,B.cc,null,null,null,null,null,null,null,null,null)
C.heI=new A.C("Learn to trade",null,B.m9,null,null,null,null,null,null,null,null,null)
C.hhb=new A.C("Turn back on",null,null,null,null,null,null,null,null,null,null,null)
C.hNV=new D.yU("Nvidia","N",B.Nr)
C.hNX=new D.yU("Ethereum","\u039e",C.aj4)
C.hO_=new D.yU("S&P 500 fund","S&P",B.ce)
C.hO0=new D.yU("Bitcoin","B",E.wA)
C.hO2=new D.yU("Tesla","T",B.bE)
C.hO3=new D.yU("Microsoft","M",B.bp)
C.hO4=new D.yU("Nasdaq 100 fund","Q",B.cD)
C.bnU=new A.u(1,0.6,0.27058823529411763,1,B.q)
C.hO6=new D.yU("Solana","S",C.bnU)
C.hO8=new D.yU("Apple","A",B.cQ)
C.hOb=new D.yU("Amazon","a",B.at)})()};
(a=>{a["2v3S+rWx9pHvpGnBelgdUsIChmA="]=a.current})($__dart_deferred_initializers__);