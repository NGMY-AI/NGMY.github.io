((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,K,L,E,D={
i4P(){return new D.atJ(null)},
aHc(d){var x=J.a2(d),w=D.h5(x.h(d,"reading")).h(0,"action"),v=J.k(w==null?"":w)
if(B.a.X(v,"ENTER UP"))return 0
if(B.a.X(v,"ENTER DOWN"))return 1
if(!J.z(x.h(d,"open"),!0))return 4
return 2+(100-D.f3(D.h5(x.h(d,"reading")).h(0,"score")))/1000},
fA1(d){var x
switch(d){case"SPY":x=C.hNY
break
case"QQQ":x=C.hO2
break
case"AAPL":x=C.hO6
break
case"MSFT":x=C.hO1
break
case"NVDA":x=C.hNT
break
case"TSLA":x=C.hO0
break
case"AMZN":x=C.hO9
break
case"BTC/USD":x=C.hNZ
break
case"ETH/USD":x=C.hNV
break
case"SOL/USD":x=C.hO4
break
default:x=new D.yU(d,d.length===0?"?":d[0],B.b2)
break}return x},
fuU(d,e){var x,w,v=null,u=d.split("/")
if(u.length===2&&C.a8s.am(0,u[0])&&C.a8s.am(0,u[1])){u=d.split("/")
x=new D.fuV(e)
return new A.a6(e*1.25,e,new A.an(B.a0,v,B.ad,B.t,A.a([A.ao(v,x.$1(u[0]),v,v,0,v,0,v),A.ao(0,x.$1(u[1]),v,v,v,0,v,v)],y.p),v),v)}w=D.fA1(d)
x=w.b
return A.o(B.z,A.c(x,v,v,v,v,v,v,A.l(v,v,B.c,v,v,v,v,v,v,v,v,x.length>1?e*0.32:e*0.52,v,v,B.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),B.f,v,v,new A.n(w.c,v,v,v,v,v,B.a6),v,e,v,v,v,v,v,e)},
fAj(d){var x,w=y.g.a(d.h(0,"markets"))
if(w==null)w=B.cb
w=J.cZ(w,y.f)
w=A.cE(w,new D.fAk(),w.$ti.k("M.E"),y.P)
x=A.B(w,A.a5(w).k("M.E"))
return x},
h5(d){var x=y.N,w=y.z
return y.f.b(d)?A.a1(d,x,w):A.S(x,w)},
f3(d){var x
if(typeof d=="number")x=d
else{x=A.cG(A.v(d==null?"":d))
if(x==null)x=0}return x},
aRp(d){var x=y.g.a(D.h5(J.t(d,"chart")).h(0,"points"))
if(x==null)x=B.cb
x=J.cZ(x,y.f)
x=A.cE(x,new D.fEE(),x.$ti.k("M.E"),y.P)
x=A.B(x,A.a5(x).k("M.E"))
return x},
ic(d,e,f){var x,w=A.nT(B.i.aa(Math.abs(d),2),A.af("\\B(?=(\\d{3})+(?!\\d))",!0,!1,!1,!1),new D.fBq(),null)
if(d<0)x="-"
else x=f&&d>0?"+":""
return x+(e?"$":"")+w},
aQE(d){var x=B.o.F(A.d4(d),12)===0?12:B.o.F(A.d4(d),12),w=B.a.b1(B.o.v(A.fF(d)),2,"0"),v=A.d4(d)<12?"AM":"PM"
return""+x+":"+w+" "+v},
bF8(d){var x=d.ab(),w=new D.fIF(),v=w.$3(A.bD(x),3,2).bN(252e8),u=w.$3(A.bD(x),11,1).bN(216e8),t=x.bN(0-A.du(0,!x.cV(v)&&x.cV(u)?4:5,0,0,0,0).a)
return A.c0(A.bD(t),A.bL(t),A.bW(t),A.d4(t),A.fF(t),0,0,0)},
ifQ(d){var x,w=A.bh(A.v(d==null?"":d))
if(w==null)return""
x=D.bF8(w)
return B.iK[A.bL(x)-1]+" "+A.bW(x)+" at "+D.aQE(x)+" ET"},
imi(d){var x,w,v=d.split(", ")
if(v.length>=4){x=v[1]
w=v[3]
return x+", "+A.aL(w," ET","")}return d},
hDS(d){return d.length===0?d:d[0].toUpperCase()+B.a.aY(d,1)},
hGl(){var x=D.bF8(new A.V(Date.now(),0,!1).ab()),w=B.o.F(A.fF(x),15)
return"at "+D.aQE(A.c0(A.bD(x),A.bL(x),A.bW(x),A.d4(x),A.fF(x),0,0,0).bN(A.du(0,0,0,0,15-w,0).a))+" ET"},
idi(d){if(B.a.X(d,"ENTER UP"))return C.dS
if(B.a.X(d,"ENTER DOWN"))return C.eF
if(B.a.q(d,"SKIP")||B.a.q(d,"TOO LATE"))return C.eF
if(B.a.X(d,"MARKET CLOSED"))return B.bP
return B.jQ},
hHj(a7,a8,a9,b0,b1){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=null,a1="mom1h",a2=J.a2(a8),a3=D.h5(a2.h(a8,"reading")),a4=D.h5(a3.h(0,"timing")),a5=D.aRp(a8),a6=a2.h(a8,"asset")
if(a6==null)a6=a2.h(a8,"symbol")
x=J.k(a6==null?"":a6)
a6=a3.h(0,"action")
w=J.k(a6==null?"WAITING FOR DATA":a6)
v=D.idi(w)
u=B.i.D(D.f3(a3.h(0,"score")),0,100)
a6=y.g.a(a3.h(0,"notes"))
if(a6==null)a6=B.cb
a6=J.b8(a6,new D.fFv(),y.N)
t=A.B(a6,a6.$ti.k("aj.E"))
s=D.f3(a2.h(a8,"changePct"))
a6=a7.a
r=a6?B.c.j(0.92):C.kY
q=A.m(20)
p=B.a.X(w,"ENTER")
if(p)o=v.j(0.6)
else o=a6?B.c:C.uR
o=A.K(o,B.r,p?1.6:1)
n=y.V
m=A.a([new A.ab(0,B.H,a7.ga9z(),B.hR,14)],n)
l=D.fuU(x,28)
p=A.c(x,a0,a0,a0,a0,a0,a0,A.l(a0,a0,a6?C.dE:B.c,a0,a0,a0,a0,a0,a0,a0,a0,14,a0,a0,B.F,a0,a0,!0,a0,a0,a0,a0,a0,a0,a0,a0),a0,a0,a0)
k=a2.h(a8,"name")
k=J.k(k==null?"":k)
j=y.p
k=A.a([l,B.ar,A.E(A.x(A.a([p,A.c(k,a0,a0,a0,a0,a0,a0,A.l(a0,a0,a6?C.dj:C.dk,a0,a0,a0,a0,a0,a0,a0,a0,11,a0,a0,a0,a0,a0,!0,a0,a0,a0,a0,a0,a0,a0,a0),a0,a0,a0)],j),B.B,a0,B.e,B.h,0,B.p),1)],j)
if(a5.length>2)B.d.u(k,A.a([new A.a6(58,26,A.b4(a0,a0,a0,new D.aKy(a5,s>=0?C.dS:C.eF,a0),B.az),a0),B.ar],j))
p=D.hHd(a8)
p=A.c(p,a0,a0,a0,a0,a0,a0,A.l(a0,a0,a6?C.dE:B.c,a0,a0,a0,a0,a0,a0,a0,a0,14,a0,a0,B.F,a0,a0,!0,a0,a0,a0,a0,a0,a0,a0,a0),a0,a0,a0)
l=s>=0
i=l?"+":""
h=B.i.aa(s,2)
g=J.z(a2.h(a8,"kind"),"forex")?"30m":"4h"
k.push(A.x(A.a([p,A.c(i+h+"% \xb7 "+g,a0,a0,a0,a0,a0,a0,A.l(a0,a0,l?C.dS:C.eF,a0,a0,a0,a0,a0,a0,a0,a0,11,a0,a0,B.O,a0,a0,!0,a0,a0,a0,a0,a0,a0,a0,a0),a0,a0,a0)],j),B.dJ,a0,B.e,B.h,0,B.p))
p=A.a([A.A(k,B.l,a0,B.e,B.h,0,a0,a0)],j)
if(y.f.b(a3.h(0,"entry"))){l=D.h5(a3.h(0,"entry"))
f=J.z(l.h(0,"dir"),"up")
e=f?C.dS:C.eF
d=Math.max(1,B.i.T(D.f3(l.h(0,"candleMin"))))
k=A.m(18)
i=A.ap(e,B.v,0.25)
i.toString
i=A.a([e,i],y.O)
n=A.a([new A.ab(0,B.H,e.j(0.35),B.cz,16)],n)
h=B.c.j(0.22)
h=A.o(a0,A.W(f?B.pO:B.pN,B.c,a0,a0,a0,34),B.f,a0,a0,new A.n(h,a0,a0,a0,a0,a0,B.a6),a0,52,a0,a0,a0,a0,a0,52)
g=A.c(f?"ENTER UP":"ENTER DOWN",a0,a0,a0,a0,a0,a0,C.fPY,a0,a0,a0)
B.d.u(p,A.a([B.af,A.o(a0,A.x(A.a([h,B.ak,g,A.c(f?"BUY / CALL":"SELL / PUT",a0,a0,a0,a0,a0,a0,C.fHw,a0,a0,a0),B.S,new D.aCm(d,a0),B.S,A.A(A.a([A.x(A.a([A.c(B.i.aa(D.f3(l.h(0,"durationMin")),0)+" min",a0,a0,a0,a0,a0,a0,B.jn,a0,a0,a0),A.c("Trade for",a0,a0,a0,a0,a0,a0,F.acG,a0,a0,a0)],j),B.l,a0,B.e,B.h,0,B.p),A.o(a0,a0,B.f,B.jS,a0,a0,a0,30,a0,B.r0,a0,a0,a0,1),A.x(A.a([A.c(A.v(l.h(0,"worked"))+" of "+A.v(l.h(0,"of")),a0,a0,a0,a0,a0,a0,B.jn,a0,a0,a0),A.c("Worked lately",a0,a0,a0,a0,a0,a0,F.acG,a0,a0,a0)],j),B.l,a0,B.e,B.h,0,B.p)],j),B.l,a0,B.b9,B.h,0,a0,a0)],j),B.l,a0,B.e,B.h,0,B.p),B.f,a0,a0,new A.n(a0,a0,a0,k,n,new A.a7(B.aX,B.b1,B.x,i,a0,a0),B.m),a0,a0,a0,a0,K.a1M,a0,a0,1/0)],j))}if(a9!=null){n=A.m(10)
B.d.u(p,A.a([B.P,A.o(a0,A.A(A.a([C.c1Z,B.d8,A.E(A.c(a9+" \xb7 check before you act",a0,a0,a0,a0,a0,a0,C.fJk,a0,a0,a0),1)],j),B.l,a0,B.e,B.h,0,a0,a0),B.f,a0,a0,new A.n(a0,a0,a0,n,a0,C.ceB,B.m),a0,a0,a0,a0,B.fM,a0,a0,1/0)],j))}p.push(B.S)
n=v.j(0.15)
l=A.m(999)
l=A.a([A.o(a0,A.c(w,a0,a0,a0,a0,a0,a0,A.l(a0,a0,v,a0,a0,a0,a0,a0,a0,a0,a0,10.5,a0,a0,B.u,a0,a0,!0,a0,0.4,a0,a0,a0,a0,a0,a0),a0,a0,a0),B.f,a0,a0,new A.n(n,a0,a0,l,a0,a0,B.m),a0,a0,a0,a0,B.o_,a0,a0,a0),B.aY],j)
if(a3.h(0,"rsi")!=null){n=B.i.aa(D.f3(a3.h(0,"rsi")),0)
l.push(A.c("RSI "+n,a0,a0,a0,a0,a0,a0,A.l(a0,a0,a6?C.dj:C.dk,a0,a0,a0,a0,a0,a0,a0,a0,11,a0,a0,B.O,a0,a0,!0,a0,a0,a0,a0,a0,a0,a0,a0),a0,a0,a0))}if(a3.h(0,a1)!=null){n=D.f3(a3.h(0,a1))>=0?"+":""
k=B.i.aa(D.f3(a3.h(0,a1)),2)
B.d.u(l,A.a([B.ar,A.c("1h "+n+k+"%",a0,a0,a0,a0,a0,a0,A.l(a0,a0,D.f3(a3.h(0,a1))>=0?C.dS:C.eF,a0,a0,a0,a0,a0,a0,a0,a0,11,a0,a0,B.O,a0,a0,!0,a0,a0,a0,a0,a0,a0,a0,a0),a0,a0,a0)],j))}p.push(A.A(l,B.l,a0,B.e,B.h,0,a0,a0))
p.push(B.S)
p.push(A.cf(new D.fFw(u,a7)))
p.push(B.at)
n=A.c("Sellers",a0,a0,a0,a0,a0,a0,A.l(a0,a0,a6?C.dj:C.dk,a0,a0,a0,a0,a0,a0,a0,a0,10,a0,a0,a0,a0,a0,!0,a0,a0,a0,a0,a0,a0,a0,a0),a0,a0,a0)
l=B.i.aa(u,0)
l=A.c("Strength "+l+"/100",a0,a0,a0,a0,a0,a0,A.l(a0,a0,a6?C.dE:B.c,a0,a0,a0,a0,a0,a0,a0,a0,10.5,a0,a0,B.F,a0,a0,!0,a0,a0,a0,a0,a0,a0,a0,a0),a0,a0,a0)
p.push(A.A(A.a([n,B.aY,l,B.aY,A.c("Buyers",a0,a0,a0,a0,a0,a0,A.l(a0,a0,a6?C.dj:C.dk,a0,a0,a0,a0,a0,a0,a0,a0,10,a0,a0,a0,a0,a0,!0,a0,a0,a0,a0,a0,a0,a0,a0),a0,a0,a0)],j),B.l,a0,B.e,B.h,0,a0,a0))
p.push(B.P)
n=J.z(a2.h(a8,"open"),!0)?A.cS(t,1,a0,A.T(t).c):t
n=J.HY(n,b0?2:99)
l=n.$ti
n=new A.bQ(n,n.gJ(0),l.k("bQ<aj.E>"))
l=l.k("aj.E")
while(n.C()){k=n.d
if(k==null)k=l.a(k)
i=A.W(B.r4,v,a0,a0,a0,4.5)
h=a6?C.dE:B.c
p.push(new A.D(B.na,new A.c3(B.aL,B.e,B.h,B.B,a0,B.p,a0,0,A.a([new A.D(B.hx,i,a0),B.xT,new A.bx(1,B.ba,A.c(k,a0,a0,a0,a0,a0,a0,new A.F(!0,h,a0,a0,a0,a0,12.3,a0,a0,a0,a0,a0,1.35,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0),a0,a0,a0),a0)],j),a0),a0))}if(J.z(a2.h(a8,"open"),!0))B.d.u(p,A.a([B.S,D.ifz(a7,a3,a4)],j))
if(b1!=null)p.push(new A.bK(B.a9,a0,a0,A.hs(C.bXP,A.c("Ask the tutor about "+x,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0),b1,a0),a0))
return A.o(a0,A.x(p,B.B,a0,B.e,B.h,0,B.p),B.f,a0,a0,new A.n(r,a0,o,q,m,a0,B.m),a0,a0,a0,B.d4,B.bG,a0,a0,a0)},
ifz(a3,a4,a5){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f="dir",e="typicalMin",d="entry",a0=a4.h(0,"decision"),a1=J.k(a0==null?"NO_DIRECTION":a0),a2=J.z(a4.h(0,f),"up")
a0=y.g.a(a4.h(0,"notes"))
if(a0==null)a0=B.cb
a0=J.b8(a0,new D.fvK(),y.N)
x=A.B(a0,a0.$ti.k("aj.E"))
A:{if("ENTER"===a1){a0=a2?C.dS:C.eF
break A}if("SKIP_WEAK"===a1||"WAIT_LATE"===a1){a0=C.eF
break A}a0=B.jQ
break A}w=a5.h(0,e)!=null&&a5.h(0,f)!=null&&!J.z(a5.h(0,f),"none")&&a1!=="NO_DIRECTION"&&a1!=="CLOSED"
v=D.f3(a5.h(0,"of"))
u=D.f3(a5.h(0,"worked"))
t=v>0
s=t?u/v:0
r=J.z(a5.h(0,f),"up")?"up":"down"
q=a3.a
p=q?C.Hb:C.Hc
o=A.m(16)
n=A.K(a0.j(0.55),B.r,1.5)
m=A.W(B.nf,q?C.dE:B.c,g,g,g,16)
l=y.p
m=A.A(A.a([m,B.bf,A.c("DECISION AND DURATION",g,g,g,g,g,g,A.l(g,g,q?C.dE:B.c,g,g,g,g,g,g,g,g,11.5,g,g,B.u,g,g,!0,g,1,g,g,g,g,g,g),g,g,g)],l),B.l,g,B.e,B.h,0,g,g)
k=a0.j(0.14)
j=A.m(10)
i=a4.h(0,"action")
i=A.a([A.c(J.k(i==null?"":i),g,g,g,g,g,g,A.l(g,g,a0,g,g,g,g,g,g,g,g,13,g,g,B.u,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)],l)
if(x.length!==0){h=B.d.gH(x)
B.d.u(i,A.a([B.cM,A.c(h,g,g,g,g,g,g,A.l(g,g,q?C.dE:B.c,g,g,g,g,g,g,g,g,12.3,g,g,g,g,1.35,!0,g,g,g,g,g,g,g,g),g,g,g)],l))}m=A.a([m,B.P,A.o(g,A.x(i,B.B,g,B.e,B.h,0,B.p),B.f,g,g,new A.n(k,g,g,j,g,g,B.m),g,g,g,g,B.jV,g,g,1/0)],l)
if(a1==="ENTER"&&y.f.b(a4.h(0,d)))B.d.u(m,A.a([B.P,A.A(A.a([A.E(D.hEx(a3,"Trade for",B.i.aa(D.f3(D.h5(a4.h(0,d)).h(0,"durationMin")),0)+" min",a0),1),A.E(D.hEx(a3,"Enter at","next "+B.i.aa(D.f3(D.h5(a4.h(0,d)).h(0,"candleMin")),0)+"-min candle",g),1)],l),B.l,g,B.e,B.h,0,g,g)],l))
if(w){a0=A.c("What this is based on",g,g,g,g,g,g,A.l(g,g,q?C.dj:C.dk,g,g,g,g,g,g,g,g,10.5,g,g,B.F,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)
k=D.hjI(a3,B.fZ,"This "+r+" move started "+B.i.aa(D.f3(a5.h(0,"ageMin")),0)+" min ago.",g)
j=r==="up"?"Up":"Down"
l=A.a([B.S,a0,B.at,k,D.hjI(a3,B.ast,j+" moves on this market usually end after about "+B.i.aa(D.f3(a5.h(0,e)),0)+" min.",g)],l)
if(t){a0=B.i.aa(v,0)
t=B.i.aa(u,0)
k=B.i.T(s*100)
j=s>=0.5
i=j?"Reliable enough.":"Under half: unreliable."
j=j?C.dS:C.eF
l.push(D.hjI(a3,B.pP,"Of the last "+a0+" "+r+" moves here, "+t+" really went "+r+" ("+k+"%). "+i,j))}B.d.u(m,l)}m.push(B.at)
m.push(A.c("Estimates from this market's recent moves, not promises.",g,g,g,g,g,g,A.l(g,g,q?C.dj:C.dk,g,g,g,g,g,g,g,g,10.5,g,g,g,g,g,!0,g,g,g,g,g,g,g,g),g,g,g))
return A.o(g,A.x(m,B.B,g,B.e,B.h,0,B.p),B.f,g,g,new A.n(p,g,n,o,g,g,B.m),g,g,g,g,B.bl,g,g,1/0)},
hjI(d,e,f,g){var x,w=null,v=g==null
if(v)x=d.a?C.dj:C.dk
else x=g
x=A.W(e,x,w,w,w,14)
if(v)v=d.a?C.dE:B.c
else v=g
return new A.D(B.Hz,A.A(A.a([x,B.bf,A.E(A.c(f,w,w,w,w,w,w,A.l(w,w,v,w,w,w,w,w,w,w,w,12,w,w,w,w,1.35,!0,w,w,w,w,w,w,w,w),w,w,w),1)],y.p),B.B,w,B.e,B.h,0,w,w),w)},
hEx(d,e,f,g){var x=null,w=d.a,v=A.c(e,x,x,x,x,x,x,A.l(x,x,w?C.dj:C.dk,x,x,x,x,x,x,x,x,10.5,x,x,x,x,x,!0,x,x,x,x,x,x,x,x),x,x,x)
if(g==null)w=w?C.dE:B.c
else w=g
return A.x(A.a([v,A.c(f,x,x,x,x,x,x,A.l(x,x,w,x,x,x,x,x,x,x,x,13.5,x,x,B.F,x,x,!0,x,x,x,x,x,x,x,x),x,x,x)],y.p),B.B,x,B.e,B.h,0,B.p)},
hHd(d){var x=J.a2(d),w=D.f3(x.h(d,"price"))
if(!J.z(x.h(d,"kind"),"forex"))return D.ic(w,!0,!1)
return B.i.aa(w,w>=100?3:5)},
hyp(d,e){return new D.XC(d,e,null)},
hCR(){var x=Math.max(0,$.aLS-1)
$.aLS=x
if(x===0){B.d.a8($.Dw)
$.ah1=!1
$.hj4=""
$.fmR=$.fmR+1}},
eGY(d){var x
y.g.a(d)
x=d==null?B.cb:d
x=J.cZ(x,y.f)
x=A.cE(x,new D.eGZ(),x.$ti.k("M.E"),y.P)
x=A.B(x,A.a5(x).k("M.E"))
return x},
hCl(d){var x=J.t(d,"kind")
switch(J.k(x==null?"":x)){case"forex":x="Forex"
break
case"crypto":x="Crypto"
break
default:x="Stocks"
break}return x},
atJ:function atJ(d){this.a=d},
aHb:function aHb(d,e){var _=this
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
eG1:function eG1(d){this.a=d},
eFJ:function eFJ(d,e){this.a=d
this.b=e},
eFA:function eFA(d,e){this.a=d
this.b=e},
eFI:function eFI(d,e){this.a=d
this.b=e},
eFL:function eFL(d,e){this.a=d
this.b=e},
eFy:function eFy(){},
eFz:function eFz(d,e,f){this.a=d
this.b=e
this.c=f},
eFT:function eFT(){},
eFR:function eFR(d){this.a=d},
eFS:function eFS(d){this.a=d},
eFU:function eFU(d){this.a=d},
eFV:function eFV(d){this.a=d},
eFH:function eFH(d){this.a=d},
eFN:function eFN(d){this.a=d},
eFO:function eFO(d,e){this.a=d
this.b=e},
eFP:function eFP(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eFM:function eFM(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eFQ:function eFQ(){},
eG0:function eG0(d){this.a=d},
eFY:function eFY(d){this.a=d},
eFZ:function eFZ(d){this.a=d},
eFp:function eFp(d){this.a=d},
eFq:function eFq(d,e){this.a=d
this.b=e},
eFr:function eFr(d){this.a=d},
eFs:function eFs(d){this.a=d},
eFX:function eFX(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eFW:function eFW(d){this.a=d},
eFC:function eFC(){},
eFD:function eFD(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eFE:function eFE(d){this.a=d},
eFG:function eFG(){},
eFF:function eFF(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
eFB:function eFB(d,e){this.a=d
this.b=e},
eFv:function eFv(d,e){this.a=d
this.b=e},
eFu:function eFu(d,e){this.a=d
this.b=e},
eFw:function eFw(d){this.a=d},
eFt:function eFt(d){this.a=d},
eFn:function eFn(d){this.a=d},
eFo:function eFo(){},
eFK:function eFK(d,e){this.a=d
this.b=e},
eFx:function eFx(d,e){this.a=d
this.b=e},
eG_:function eG_(){},
eFm:function eFm(d){this.a=d},
eFl:function eFl(d){this.a=d},
adz:function adz(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
be7:function be7(){this.c=this.a=this.d=null},
cWz:function cWz(d,e){this.a=d
this.b=e},
cWI:function cWI(d){this.a=d},
cWG:function cWG(d,e){this.a=d
this.b=e},
cWE:function cWE(d,e){this.a=d
this.b=e},
cWF:function cWF(d,e){this.a=d
this.b=e},
cWD:function cWD(d){this.a=d},
cWC:function cWC(d){this.a=d},
cWH:function cWH(d){this.a=d},
cWB:function cWB(d){this.a=d},
cWA:function cWA(d){this.a=d},
be8:function be8(d,e,f,g,h,i,j,k){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.w=j
_.a=k},
cWJ:function cWJ(d){this.a=d},
cWL:function cWL(d,e){this.a=d
this.b=e},
cWK:function cWK(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
aKy:function aKy(d,e,f){this.b=d
this.c=e
this.a=f},
fgl:function fgl(){},
yU:function yU(d,e,f){this.a=d
this.b=e
this.c=f},
fuV:function fuV(d){this.a=d},
fAk:function fAk(){},
a1u:function a1u(d){this.a=d},
fEE:function fEE(){},
fBq:function fBq(){},
fIF:function fIF(){},
fFv:function fFv(){},
fFw:function fFw(d,e){this.a=d
this.b=e},
aCm:function aCm(d,e){this.c=d
this.a=e},
bhE:function bhE(){this.c=this.a=this.d=null},
dhT:function dhT(d){this.a=d},
dhS:function dhS(){},
fvK:function fvK(){},
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
XC:function XC(d,e,f){this.c=d
this.d=e
this.a=f},
a_x:function a_x(d,e){this.a=d
this.b=e},
aHd:function aHd(d,e,f,g,h,i,j,k,l,m){var _=this
_.d=$
_.w=_.r=_.f=_.e=null
_.x=d
_.Q=_.z=_.y=!1
_.as=null
_.at=e
_.ax=f
_.ay=g
_.ch=""
_.CW=!1
_.cx="All"
_.cy=h
_.db=i
_.dx=j
_.dy=k
_.fr=""
_.fx=!1
_.bu$=l
_.a9$=m
_.c=_.a=null},
eGb:function eGb(){},
eH3:function eH3(d){this.a=d},
eH2:function eH2(){},
eH4:function eH4(d){this.a=d},
eH5:function eH5(d){this.a=d},
eH1:function eH1(d,e){this.a=d
this.b=e},
eH6:function eH6(d){this.a=d},
eGZ:function eGZ(){},
eGw:function eGw(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eGH:function eGH(d){this.a=d},
eGe:function eGe(d){this.a=d},
eGf:function eGf(d,e){this.a=d
this.b=e},
eGg:function eGg(d){this.a=d},
eGh:function eGh(d){this.a=d},
eGd:function eGd(d,e){this.a=d
this.b=e},
eGc:function eGc(d,e){this.a=d
this.b=e},
eGG:function eGG(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eGF:function eGF(){},
eGx:function eGx(){},
eGy:function eGy(){},
eGW:function eGW(){},
eGX:function eGX(){},
eGk:function eGk(d){this.a=d},
eGl:function eGl(){},
eGm:function eGm(){},
eG7:function eG7(d,e){this.a=d
this.b=e},
eG8:function eG8(){},
eG9:function eG9(){},
eGa:function eGa(){},
eGI:function eGI(d){this.a=d},
eH_:function eH_(d){this.a=d},
eH0:function eH0(d,e){this.a=d
this.b=e},
eGj:function eGj(d){this.a=d},
eGi:function eGi(d,e){this.a=d
this.b=e},
eGE:function eGE(d,e){this.a=d
this.b=e},
eGA:function eGA(d,e){this.a=d
this.b=e},
eGB:function eGB(d,e){this.a=d
this.b=e},
eGz:function eGz(d,e,f){this.a=d
this.b=e
this.c=f},
eGC:function eGC(d,e){this.a=d
this.b=e},
eGD:function eGD(d){this.a=d},
eGn:function eGn(d,e,f){this.a=d
this.b=e
this.c=f},
eGv:function eGv(d){this.a=d},
eGo:function eGo(){},
eGp:function eGp(){},
eGq:function eGq(){},
eGr:function eGr(){},
eGs:function eGs(){},
eGt:function eGt(){},
eGu:function eGu(){},
eGM:function eGM(d,e){this.a=d
this.b=e},
eGN:function eGN(d){this.a=d},
eGV:function eGV(){},
eGO:function eGO(d){this.a=d},
eGP:function eGP(d){this.a=d},
eGR:function eGR(d,e){this.a=d
this.b=e},
eGL:function eGL(d,e){this.a=d
this.b=e},
eGQ:function eGQ(d){this.a=d},
eGS:function eGS(d){this.a=d},
eGK:function eGK(d){this.a=d},
eGT:function eGT(d){this.a=d},
eGJ:function eGJ(d,e){this.a=d
this.b=e},
eGU:function eGU(d,e){this.a=d
this.b=e},
eG3:function eG3(d){this.a=d},
eG4:function eG4(d,e){this.a=d
this.b=e},
eG2:function eG2(d,e){this.a=d
this.b=e},
eG5:function eG5(d,e){this.a=d
this.b=e},
eG6:function eG6(d){this.a=d},
a0y:function a0y(d,e,f,g,h,i,j,k,l,m){var _=this
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
bkP:function bkP(d){var _=this
_.x=_.w=_.r=_.f=_.e=_.d=$
_.y=d
_.c=_.a=_.z=null},
duq:function duq(){},
dur:function dur(){},
duo:function duo(){},
dup:function dup(){},
dum:function dum(d){this.a=d},
dun:function dun(d){this.a=d},
dul:function dul(d){this.a=d},
due:function due(){},
duf:function duf(){},
dug:function dug(d){this.a=d},
duh:function duh(d){this.a=d},
duc:function duc(d,e,f){this.a=d
this.b=e
this.c=f},
dui:function dui(d){this.a=d},
duj:function duj(d,e){this.a=d
this.b=e},
duk:function duk(d,e){this.a=d
this.b=e},
dud:function dud(d,e,f){this.a=d
this.b=e
this.c=f},
aPf:function aPf(){}},C,F,G,M,H,N,O,I
J=c[1]
A=c[0]
B=c[2]
K=c[91]
L=c[99]
E=c[84]
D=a.updateHolder(c[12],D)
C=c[97]
F=c[57]
G=c[100]
M=c[51]
H=c[98]
N=c[44]
O=c[27]
I=c[92]
D.atJ.prototype={
S(){return new D.aHb(A.a([],y.t),A.m5(0,null,null))}}
D.aHb.prototype={
Z(){var x=this
x.a4()
$.aLS=$.aLS+1
x.a.toString
x.aeq()
x.Bk(!0)
x.ay=A.d5(B.nT,new D.eG1(x))},
t(){var x=this.ay
if(x!=null)x.a1(0)
this.Q.t()
D.hCR()
this.a2()},
cr1(d){var x=this
if(!x.as&&d>0){x.as=!0
$.aU.x1$.push(new D.eFJ(x,d))}return x.Q},
aeq(){var x=0,w=A.j(y.H),v=1,u=[],t=this,s,r,q,p
var $async$aeq=A.e(function(d,e){if(d===1){u.push(e)
x=v}for(;;)switch(x){case 0:v=3
x=6
return A.b(A.az(),$async$aeq)
case 6:s=e
r=A.aW(J.t(s.a,"ngmy_signal_grid_market"))
if(r!=null&&r.length!==0&&t.c!=null&&t.z==null)t.l(new D.eFA(t,r))
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
a21(d){return this.cqy(d)},
cqy(d){var x=0,w=A.j(y.H),v=1,u=[],t=this,s,r,q
var $async$a21=A.e(function(e,f){if(e===1){u.push(f)
x=v}for(;;)switch(x){case 0:t.l(new D.eFI(t,d))
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
Bk(d){return this.cvS(d)},
cga(){return this.Bk(!1)},
cvS(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$Bk=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(A.fZ(A.J(["action","paStatus","live",d],y.N,y.z),!1,!1,!1,!1,B.CS),$async$Bk)
case 3:t=f
if(u.c==null){x=1
break}u.l(new D.eFL(u,t))
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
return A.b(A.fZ(A.J(["action","paLog","limit",100,"beforeId",d&&u.e.length!==0?J.t(B.d.gal(u.e),"id"):0],y.N,y.z),!1,!1,!1,!1,B.hb),$async$a_1)
case 3:r=f
if(u.c==null||r==null||!J.z(J.t(r,"ok"),!0)){x=1
break}t=y.g.a(J.t(r,"rows"))
if(t==null)t=B.cb
t=J.cZ(t,y.f)
t=A.cE(t,new D.eFy(),t.$ti.k("M.E"),y.P)
s=A.B(t,A.a5(t).k("M.E"))
u.l(new D.eFz(u,d,s))
case 1:return A.h(v,w)}})
return A.i($async$a_1,w)},
SK(d){return this.cAL(d)},
cAL(d){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$SK=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=u.d
q=D.h5(r==null?null:J.t(r,"state"))
x=d&&J.z(q.h(0,"brakePaused"),!0)?3:4
break
case 3:r=u.c
r.toString
x=5
return A.b(A.ce(null,null,!0,null,new D.eFT(),r,null,!0,!0,y.y),$async$SK)
case 5:if(f!==!0){x=1
break}case 4:u.l(new D.eFU(u))
x=6
return A.b(A.fZ(A.J(["action","paSet","enabled",d],y.N,y.z),!1,!1,!1,!1,B.hb),$async$SK)
case 6:t=f
if(u.c==null){x=1
break}u.l(new D.eFV(u))
r=t==null
if(J.z(r?null:J.t(t,"ok"),!0))s=d?"Agent started.":"Agent stopped."
else{s=r?null:J.t(t,"error")
s=J.k(s==null?"Could not change it.":s)}u.b37(s,J.z(r?null:J.t(t,"ok"),!0)?C.dS:C.eF)
x=7
return A.b(u.cga(),$async$SK)
case 7:case 1:return A.h(v,w)}})
return A.i($async$SK,w)},
clu(){var x=this.c
x.toString
A.a8(x,!1).cb(A.ea(new D.eFH(this),!1,null,y.H))},
a3j(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$a3j=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u.l(new D.eFN(u))
x=3
return A.b(A.fZ(A.J(["action","paCheck"],y.N,y.z),!1,!1,!1,!1,B.nT),$async$a3j)
case 3:t=e
if(u.c==null){x=1
break}u.l(new D.eFO(u,t))
s=t==null
if(!J.z(s?null:J.t(t,"ok"),!0)){s=s?null:J.t(t,"error")
u.b37(J.k(s==null?"The check did not finish.":s),C.eF)
x=1
break}s=u.c
s.toString
s=A.O(s).ax.a===B.dd
t.toString
r=D.h5(D.h5(J.t(t,"state")).h(0,"snapshot"))
q=u.c
q.toString
p=s?C.yK:C.yI
x=4
return A.b(A.bU(p,null,new D.eFP(u,new D.a1u(s),r,t),q,!0,!0,!0,B.aU8,!1,!1,y.H),$async$a3j)
case 4:case 1:return A.h(v,w)}})
return A.i($async$a3j,w)},
cyX(d,e,f,g){var x,w,v,u,t,s=null,r=D.fAj(e)
B.d.b_(r,new D.eFQ())
x=d.a
w=x?C.qB:C.qy
w=A.as(A.o(s,s,B.f,s,s,new A.n(w,s,s,A.m(9),s,s,B.m),s,4,s,s,s,s,s,40),s,s,s)
v=A.c("What the agent sees right now",s,s,s,s,s,s,A.l(s,s,x?C.dE:B.c,s,s,s,s,s,s,s,s,19,s,s,B.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)
u=J.z(f.h(0,"enabled"),!0)?" (next one "+D.hGl()+")":" (the agent is stopped, so none will be made)"
w=A.a([w,B.aA,v,B.at,A.c("Check now only looks. It never buys or sells. Pretend trades are made only by the automatic check every 15 minutes"+u+".",s,s,s,s,s,s,A.l(s,s,x?C.dj:C.dk,s,s,s,s,s,s,s,s,12.5,s,s,s,s,1.35,!0,s,s,s,s,s,s,s,s),s,s,s),B.af],y.p)
for(x=r.length,t=0;t<r.length;r.length===x||(0,A.I)(r),++t)w.push(D.hHj(d,r[t],s,!0,s))
return A.cn(w,g,s,C.bH7,s,s,B.ah,!1)},
b37(d,e){var x=null
this.c.L(y.q).f.U(A.b2(x,x,x,e,x,B.t,x,A.c(d,x,x,x,x,x,x,x,x,x,x),x,B.Y,x,x,x,x,x,x,x,x,x,x))},
B(d){var x,w=this,v=null,u=A.O(d).ax.a===B.dd,t=new D.a1u(u),s=u?C.yK:C.yI,r=u?C.yK:C.yI
r=A.a([r,u?C.a_A:C.a_q],y.O)
x=w.cgb(t)
if(w.f)u=B.lO
else{if(w.d==null){u=w.ax
u=A.a([w.aaC(t,u==null?"Nothing to show yet.":u,B.b2)],y.p)}else u=w.bIb(0,t)
u=A.PK(A.cn(u,v,v,C.bHt,v,v,B.ah,!1),v,new D.eG0(w))}return A.c5(v,s,A.o(v,A.bm(!0,A.x(A.a([x,A.E(u,1)],y.p),B.l,v,B.e,B.h,0,B.p),!0,!1,B.ag,!0,!0),B.f,v,v,new A.n(v,v,v,v,v,new A.a7(B.aX,B.b1,B.x,r,v,v),B.m),v,v,v,v,v,v,v,v),v,!1,!1,v,v)},
cgb(d){var x,w,v,u,t,s,r=this,q=null,p=r.d,o=D.h5(p==null?q:J.t(p,"state")),n=J.z(o.h(0,"brakePaused"),!0),m=J.z(o.h(0,"enabled"),!0)&&!n
p=r.b35(d,B.eH,new D.eFY(r))
x=d.a
w=A.c("Signal Grid",q,q,q,q,q,q,A.l(q,q,x?C.dE:B.c,q,q,q,q,q,q,q,q,17,q,q,B.F,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
v=y.p
w=A.a([p,B.ar,A.E(A.x(A.a([w,A.c("Paper trading agent \xb7 pretend money",q,q,q,q,q,q,A.l(q,q,x?C.dj:C.dk,q,q,q,q,q,q,q,q,11.5,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],v),B.B,q,B.e,B.h,0,B.p),1)],v)
if(r.d!=null){if(n)p=C.eF
else if(m)p=C.dS
else p=x?C.dj:C.dk
p=p.j(0.14)
u=A.m(999)
if(n)t=C.eF
else if(m)t=C.dS
else t=x?C.dj:C.dk
t=A.W(B.r4,t,q,q,q,8)
if(n)s="Paused"
else s=m?"Running":"Stopped"
if(n)x=C.eF
else if(m)x=C.dS
else x=x?C.dj:C.dk
w.push(A.o(q,A.A(A.a([t,B.bf,A.c(s,q,q,q,q,q,q,A.l(q,q,x,q,q,q,q,q,q,q,q,12,q,q,B.F,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],v),B.l,q,B.e,B.M,0,q,q),B.f,q,q,new A.n(p,q,q,u,q,q,B.m),q,q,q,q,B.fM,q,q,q))}w.push(B.aa)
w.push(r.b35(d,B.o3,r.r?q:new D.eFZ(r)))
return new A.D(B.hm,A.A(w,B.l,q,B.e,B.h,0,q,q),q)},
bIb(c2,c3){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6=this,b7=null,b8="asset",b9="liveError",c0="brakePaused",c1=b6.d
c1.toString
x=J.a2(c1)
w=D.h5(x.h(c1,"state"))
v=D.h5(x.h(c1,"config"))
u=D.h5(w.h(0,"snapshot"))
t=y.f.b(w.h(0,"shadow"))?D.h5(w.h(0,"shadow")):b7
s=D.fAj(u)
r=b6.z
if(r==null){q=t==null?b7:t.h(0,"symbol")
if(q==null)q=u.h(0,b8)
r=q==null?b7:J.k(q)}p=B.d.dz(s,new D.eFp(r),new D.eFq(s,u))
q=t==null
o=q?b7:B.d.dz(s,new D.eFr(t),new D.eFs(p))
q=!q
n=q&&J.z(t.h(0,"symbol"),J.t(p,b8))?t:b7
m=b6.c8p(c3,c1,s,p,t)
l=D.h5(x.h(c1,"market"))
k=J.a2(p)
j=k.h(p,b8)
i=J.k(j==null?"SPY":j)
h=B.a.q(i,"/")
g=D.aRp(p)
f=D.f3(k.h(p,"price"))
e=g.length!==0?D.f3(J.t(B.d.gH(g),"c")):0
d=e===0?0:(f-e)/e*100
a0=d>=0
if(h)a1=!0
else{j=k.h(p,"open")
if(j==null)j=l.h(0,"stockOpen")
a1=j==null?l.h(0,"open"):j}if(h)a2="Crypto \xb7 the agent trades it on Saturday and Sunday only"
else{j=J.kG(a1)
if(j.A(a1,!0))a2="Stock market open \xb7 the agent trades it on weekdays \xb7 closes 4:00 PM ET"
else{j=j.A(a1,!1)?"Stock market closed"+b6.cMg(l.h(0,"nextOpen")):""
a2=j}}a3=D.fA1(i)
j=D.fuU(i,30)
a4=h?i:i+"/USD"
a5=c3.a
a4=A.c(a4,b7,b7,b7,b7,b7,b7,A.l(b7,b7,a5?C.dE:B.c,b7,b7,b7,b7,b7,b7,b7,b7,17,b7,b7,B.F,b7,b7,!0,b7,b7,b7,b7,b7,b7,b7,b7),b7,b7,b7)
a6=k.h(p,"name")
a6=J.k(a6==null?a3.a:a6)
a7=y.p
a6=A.A(A.a([j,B.ar,a4,B.bf,new A.d2(1,B.cg,A.c(a6,b7,b7,B.a2,b7,b7,b7,A.l(b7,b7,a5?C.dj:C.dk,b7,b7,b7,b7,b7,b7,b7,b7,13,b7,b7,b7,b7,b7,!0,b7,b7,b7,b7,b7,b7,b7,b7),b7,b7,b7),b7)],a7),B.l,b7,B.e,B.h,0,b7,b7)
j=f===0?"\u2014":D.ic(f,!1,!1)
j=A.a([A.E(new A.dl(B.dx,B.a5,B.f,A.c(j,b7,b7,b7,b7,b7,b7,A.l(b7,b7,a5?C.dE:B.c,b7,b7,b7,b7,b7,b7,b7,H.Ji,42,b7,b7,B.a8,b7,b7,!0,b7,-1,b7,b7,b7,b7,b7,b7),b7,b7,b7),b7),1)],a7)
if(g.length>1){a4=(a0?C.dS:C.eF).j(0.14)
a8=A.m(10)
a9=a0?C.arh:B.Qb
a9=A.W(a9,a0?C.dS:C.eF,b7,b7,b7,20)
b0=B.i.aa(Math.abs(d),2)
j.push(A.o(b7,A.A(A.a([a9,A.c(b0+"%",b7,b7,b7,b7,b7,b7,A.l(b7,b7,a0?C.dS:C.eF,b7,b7,b7,b7,b7,b7,b7,b7,13,b7,b7,B.F,b7,b7,!0,b7,b7,b7,b7,b7,b7,b7,b7),b7,b7,b7)],a7),B.l,b7,B.e,B.M,0,b7,b7),B.f,b7,b7,new A.n(a4,b7,b7,a8,b7,b7,B.m),b7,b7,b7,b7,B.fM,b7,b7,b7))}j=A.a([a6,B.P,A.A(j,B.l,b7,B.e,B.h,0,b7,b7)],a7)
if(a2.length!==0){if(J.z(a1,!0))a4=C.dS
else a4=a5?C.dj:C.dk
a4=A.W(B.r4,a4,b7,b7,b7,7)
a6=g.length>1?"  \xb7  change over 4H":""
B.d.u(j,A.a([B.at,A.A(A.a([a4,B.bf,new A.d2(1,B.cg,A.c(a2+a6,b7,b7,B.a2,b7,b7,b7,A.l(b7,b7,a5?C.dj:C.dk,b7,b7,b7,b7,b7,b7,b7,b7,12,b7,b7,b7,b7,b7,!0,b7,b7,b7,b7,b7,b7,b7,b7),b7,b7,b7),b7)],a7),B.l,b7,B.e,B.h,0,b7,b7)],a7))}m=A.a([m,new A.D(C.bKI,A.x(j,B.B,b7,B.e,B.h,0,B.p),b7)],a7)
j=v.h(0,"problem")
if(J.k(j==null?"":j).length!==0)m.push(b6.aaC(c3,J.k(v.h(0,"problem")),B.jQ))
j=x.h(c1,b9)
if(J.k(j==null?"":j).length!==0)m.push(b6.aaC(c3,J.k(x.h(c1,b9)),C.eF))
if(J.z(w.h(0,c0),!0)){j=w.h(0,"brakeReason")
m.push(b6.aaC(c3,"Paused by the $25 brake. "+A.v(j==null?"":j)+". Look over the trades, then press Start to turn it back on.",C.eF))}m.push(b6.bLa(c3,p,n))
m.push(b6.cJB(c3,p,t,c1))
m.push(b6.bHP(c3,c1,w,u))
if(q){o.toString
x=b6.crt(c3,t,o)}else{b1=D.h5(x.h(c1,"ticket"))
f=D.f3(k.h(p,"price"))
b2=D.f3(b1.h(0,"amount"))===0?50:D.f3(b1.h(0,"amount"))
x=f===0
b3=x?0:b2/f
q=A.A(A.a([A.c("Next trade",b7,b7,b7,b7,b7,b7,A.l(b7,b7,a5?C.dE:B.c,b7,b7,b7,b7,b7,b7,b7,b7,16,b7,b7,B.F,b7,b7,!0,b7,b7,b7,b7,b7,b7,b7,b7),b7,b7,b7),B.aY,b6.a0N("AUTOMATIC",B.b2)],a7),B.l,b7,B.e,B.h,0,b7,b7)
j=a5?C.H1:C.GR
a4=A.m(999)
a6=a5?C.l_:B.c
a8=A.m(999)
a6=A.E(A.o(B.z,A.c("BUY",b7,b7,b7,b7,b7,b7,A.l(b7,b7,a5?B.c:C.l_,b7,b7,b7,b7,b7,b7,b7,b7,12.5,b7,b7,B.F,b7,b7,!0,b7,b7,b7,b7,b7,b7,b7,b7),b7,b7,b7),B.f,b7,b7,new A.n(a6,b7,b7,a8,b7,b7,B.m),b7,b7,b7,b7,B.wU,b7,b7,b7),1)
j=A.o(b7,A.A(A.a([a6,A.E(A.as(A.c("SELL",b7,b7,b7,b7,b7,b7,A.l(b7,b7,a5?C.dj:C.dk,b7,b7,b7,b7,b7,b7,b7,b7,12.5,b7,b7,B.F,b7,b7,!0,b7,b7,b7,b7,b7,b7,b7,b7),b7,b7,b7),b7,b7,b7),1)],a7),B.l,b7,B.e,B.h,0,b7,b7),B.f,b7,b7,new A.n(j,b7,b7,a4,b7,b7,B.m),b7,b7,b7,b7,B.es,b7,b7,b7)
a4=D.ic(b2,!0,!1)
if(x)a6=b7
else{a6=B.i.aa(b3,b3<0.01?6:4)
a8=k.h(p,b8)
a6="\u2248 "+a6+" "+A.v(a8==null?"":a8)}a6=b6.cHU(c3,"Amount it puts in",a4,!0,a6)
a4=B.i.aa(D.f3(b1.h(0,"takeProfitPct")),0)
a8=D.ic(D.f3(b1.h(0,"takeProfitUsd")),!0,!1)
a9=x?b7:"sells at "+D.ic(f*1.03,!0,!1)
a9=b6.bc3(c3,"Take profit  +"+a4+"%","+"+a8,C.dS,a9)
a8=B.i.aa(D.f3(b1.h(0,"stopLossPct")),1)
a4=D.ic(D.f3(b1.h(0,"stopLossUsd")),!0,!1)
x=x?b7:"sells at "+D.ic(f*0.985,!0,!1)
x=b6.bc3(c3,"Stop loss  -"+a8+"%","-"+a4,C.eF,x)
a4=b6.cHT(c3,"Leverage","None (1x)","no borrowing, no shorting")
a8=a5?C.l_:B.c
b0=A.m(999)
a8=A.o(B.z,A.c("Buys by itself when the trend turns up",b7,b7,b7,b7,b7,b7,A.l(b7,b7,a5?B.c:C.l_,b7,b7,b7,b7,b7,b7,b7,b7,13.5,b7,b7,B.F,b7,b7,!0,b7,b7,b7,b7,b7,b7,b7,b7),b7,b7,b7),B.f,b7,b7,new A.n(a8,b7,b7,b0,b7,b7,B.m),b7,b7,b7,b7,B.cm,b7,b7,1/0)
k=k.h(p,b8)
k=A.v(k==null?"":k)
x=b6.a0L(c3,A.x(A.a([q,B.af,j,B.S,a6,a9,x,a4,B.S,a8,B.ak,A.as(A.c("Shown for "+k+" at its price right now. The agent buys whichever market signals first.",b7,b7,b7,b7,b7,b7,A.l(b7,b7,a5?C.dj:C.dk,b7,b7,b7,b7,b7,b7,b7,b7,11,b7,b7,b7,b7,b7,!0,b7,b7,b7,b7,b7,b7,b7,b7),B.K,b7,b7),b7,b7,b7)],a7),B.B,b7,B.e,B.h,0,B.p))}m.push(x)
m.push(b6.cg8(c3,w))
b4=J.z(w.h(0,"enabled"),!0)&&!J.z(w.h(0,c0),!0)
x=w.h(0,"lastTickAt")
b5=A.bh(A.v(x==null?"":x))
if(b4)x=C.dS
else x=a5?C.dj:C.dk
x=A.W(B.a3V,x,b7,b7,b7,16)
if(b4){q=b5==null?"not yet":D.aQE(D.bF8(b5))+" ET"
q="Trades are automatic: the agent looks for a new buy every 15 minutes and, while it holds a trade, checks the exits every 5 minutes. Last check "+q+" \xb7 next buy check "+D.hGl()+". Check now only looks, it never trades."}else q="The agent is stopped, so it makes no trades. Press Start and it looks for a buy every 15 minutes by itself."
m.push(new A.D(C.bKV,A.A(A.a([x,B.bf,A.E(A.c(q,b7,b7,b7,b7,b7,b7,A.l(b7,b7,a5?C.dj:C.dk,b7,b7,b7,b7,b7,b7,b7,b7,11.5,b7,b7,b7,b7,1.35,!0,b7,b7,b7,b7,b7,b7,b7,b7),b7,b7,b7),1)],a7),B.B,b7,B.e,B.h,0,b7,b7),b7))
m.push(b6.cJh(c3,c1))
m.push(b6.bEN(c3))
m.push(b6.cxS(c3,c1))
c1=J.z(v.h(0,"ordersSwitchOn"),!0)?"on":"off"
m.push(new A.D(B.hx,A.c("Version 1 is read-only: no order is ever sent to Alpaca. Order switch (ALPACA_ORDERS_ENABLED): "+c1+".",b7,b7,b7,b7,b7,b7,A.l(b7,b7,a5?C.dj:C.dk,b7,b7,b7,b7,b7,b7,b7,b7,11,b7,b7,b7,b7,b7,!0,b7,b7,b7,b7,b7,b7,b7,b7),B.K,b7,b7),b7))
return m},
cD9(d,e,f){var x=null,w=this.c
w.toString
A.ce(x,x,!0,x,new D.eFX(this,d,e,f),w,x,!0,!0,y.H)},
c8p(d,e,f,g,h){var x,w,v,u,t,s,r=this,q=null
if(f.length<2)return B.bL
x=new A.X(f,new D.eFC(),A.T(f).k("X<1>")).gJ(0)
w=d.a
v=A.c("Agent markets",q,q,q,q,q,q,A.l(q,q,w?C.dE:B.c,q,q,q,q,q,q,q,q,14,q,q,B.F,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
u=x===0
t=u?"NONE TRADED NOW":"TRADED NOW"
t=r.a0N(t,u?B.jQ:C.dS)
s=A.hel(!1,q,!0,new A.D(B.es,A.W(B.kK,u?B.jQ:C.dS,q,q,q,19),q),!1,q,!0,!1,q,q,q,B.a6,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new D.eFD(r,d,e,h),q,q,q,q,20,q,q,q)
u=y.p
return new A.D(B.eK,A.x(A.a([new A.D(C.bKp,A.A(A.a([v,B.aa,t,B.d8,s,B.aY,A.c("tap one",q,q,q,q,q,q,A.l(q,q,w?C.dj:C.dk,q,q,q,q,q,q,q,q,11,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],u),B.l,q,B.e,B.h,0,q,q),q),new A.a6(q,128,A.hP(B.f,r.cr1(B.d.bk(f,new D.eFE(g))),new D.eFF(r,f,g,h,d),f.length,q,q,B.aL,new D.eFG(),!1),q),B.at],u),B.B,q,B.e,B.h,0,B.p),q)},
bLa(d,e,f){var x,w,v,u,t,s,r=this,q=null,p=D.aRp(e),o=p.length
if(o<2)return r.a0L(d,new A.a6(q,120,A.as(A.c("The chart appears after the first reading.",q,q,q,q,q,q,A.l(q,q,d.a?C.dj:C.dk,q,q,q,q,q,q,q,q,q,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),q,q,q),q))
x=B.d.fD(p,Math.max(0,o-r.y))
w=f==null?q:D.f3(f.h(0,"entryPrice"))
o=y.p
v=A.a([],o)
for(u=0;u<3;++u){t=C.co6[u]
if(t<=12)s="1H"
else s=t<=24?"2H":"4H"
B.d.u(v,A.a([r.czV(d,s,r.y===t,new D.eFv(r,t)),B.bf],o))}v.push(B.aY)
v.push(r.b8I(d,"Trend lines",r.at,new D.eFw(r),I.xm))
v=A.a([A.A(v,B.l,q,B.e,B.h,0,q,q),B.S,new D.adz(x,d,w,r.at,D.f3(J.t(e,"price")),q)],o)
if(r.at){s=A.a([r.ayl(d,B.bA,"Fast line (45 min)"),r.ayl(d,B.b2,"Slow line (1 h 45 min)")],o)
if(w!=null)s.push(r.ayl(d,E.uF,"Your pretend buy"))
B.d.u(v,A.a([B.P,A.bZ(B.fT,s,B.br,q,4,14)],o))}return r.aAv(d,A.x(v,B.l,q,B.e,B.h,0,B.p),B.wV)},
cJB(d,a0,a1,a2){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i=J.a2(a0),h=D.h5(i.h(a0,"chart")).h(0,"trend"),g=J.k(h==null?"unknown":h),f=D.h5(J.t(a2,"state")),e=J.z(f.h(0,"enabled"),!0)&&!J.z(f.h(0,"brakePaused"),!0)
switch(g){case"up":h=C.fet
break
case"down":h=C.ffu
break
case"flat":h=C.fcE
break
default:h=C.fdv
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
l=A.c(v,j,j,j,j,j,j,A.l(j,j,h?C.dE:B.c,j,j,j,j,j,j,j,j,16,j,j,B.u,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)
k=y.p
return A.o(j,A.A(A.a([m,B.bb,A.E(A.x(A.a([l,B.bC,A.c(p,j,j,j,j,j,j,A.l(j,j,h?C.dj:C.dk,j,j,j,j,j,j,j,j,12.5,j,j,j,j,1.3,!0,j,j,j,j,j,j,j,j),j,j,j)],k),B.B,j,B.e,B.h,0,B.p),1)],k),B.l,j,B.e,B.h,0,j,j),B.f,j,j,new A.n(j,j,n,i,j,new A.a7(B.a5,B.a9,B.x,o,j,j),B.m),j,j,j,B.e9,B.bG,j,j,j)},
bHP(a0,a1,a2,a3){var x,w,v,u,t,s,r,q,p,o,n,m=this,l=null,k="equity",j=J.a2(a1),i=D.h5(j.h(a1,"today")),h=D.h5(j.h(a1,"record")),g=D.h5(j.h(a1,"ticket")),f=h.h(0,"pnlSum")!=null?D.f3(h.h(0,"pnlSum")):D.f3(a2.h(0,"totalPnl")),e=D.f3(i.h(0,"day_pnl")),d=y.f.b(a2.h(0,"shadow"))?D.h5(a2.h(0,"shadow")):l
j=d!=null
if(j){x=D.f3(J.t(B.d.dz(D.fAj(a3),new D.eFn(d),new D.eFo()),"price"))
w=x>0?D.f3(d.h(0,"qty"))*(x-D.f3(d.h(0,"entryPrice"))):0}else w=0
v=D.f3(a3.h(0,k))
u=f+w
t=A.m(26)
s=A.a([new A.ab(0,B.H,B.i0.j(0.3),B.eT,24)],y.V)
r=y.p
q=A.A(A.a([C.h4j,B.aY,A.o(l,C.h3B,B.f,l,l,new A.n(B.c.j(0.14),l,l,A.m(999),l,l,B.m),l,l,l,l,B.fD,l,l,l)],r),B.l,l,B.e,B.h,0,l,l)
q=A.a([q,B.at,new A.dl(B.dx,B.a5,B.f,A.c(a3.h(0,k)==null?"\u2014":D.ic(v+f+w,!0,!1),l,l,l,l,l,l,C.fF0,l,l,l),l)],r)
if(a3.h(0,k)!=null){p=u>=0?C.arh:B.Qb
o=u>0
if(o)n=C.dS
else n=u<0?C.eF:B.ab
n=A.W(p,n,l,l,l,l)
p=D.ic(u,!0,!0)
j=j?" (incl. the open one)":""
if(o)o=C.dS
else o=u<0?C.eF:B.ab
q.push(A.A(A.a([n,A.c(p+" from pretend trades"+j,l,l,l,l,l,l,A.l(l,l,o,l,l,l,l,l,l,l,l,12.5,l,l,B.F,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)],r),B.l,l,B.e,B.h,0,l,l))}q.push(B.bC)
q.push(A.c("Alpaca paper account "+D.ic(v,!0,!1)+" (unchanged, Version 1 sends no orders) \xb7 $"+B.i.aa(D.f3(g.h(0,"amount")),0)+" a trade",l,l,l,l,l,l,B.LF,l,l,l))
q.push(B.aA)
j=D.ic(e,!0,!0)
if(e>0)p=C.dS
else p=e<0?C.eF:B.c
p=A.E(m.P4("Today",j,p),1)
j=D.ic(f,!0,!0)
if(f>0)o=C.dS
else o=f<0?C.eF:B.c
o=A.E(m.P4("All time",j,o),1)
j=h.h(0,"wins")
j=A.v(j==null?0:j)
n=h.h(0,"losses")
q.push(A.A(A.a([p,B.aa,o,B.aa,A.E(m.P4("Wins / losses",j+" / "+A.v(n==null?0:n),B.c),1)],r),B.l,l,B.e,B.h,0,l,l))
q.push(B.P)
j=i.h(0,"trades")
j=A.v(j==null?0:j)
p=g.h(0,"maxTradesToday")
q.push(A.A(A.a([A.E(m.P4("Trades today",j+" of "+A.v(p==null?4:p),B.c),1),B.aa,A.E(m.P4("Daily stop","-$10",B.c),1),B.aa,A.E(m.P4("Total brake","-$25",B.c),1)],r),B.l,l,B.e,B.h,0,l,l))
return A.o(l,A.x(q,B.B,l,B.e,B.h,0,B.p),B.f,l,l,new A.n(l,l,l,t,s,C.caz,B.m),l,l,l,B.e9,B.fc,l,l,l)},
P4(d,e,f){var x=null,w=B.c.j(0.1),v=A.m(14)
return A.o(x,A.x(A.a([A.c(d,x,1,B.a2,x,x,x,B.X4,x,x,x),B.bC,new A.dl(B.dx,B.a5,B.f,A.c(e,x,x,x,x,x,x,A.l(x,x,f,x,x,x,x,x,x,x,x,15,x,x,B.F,x,x,!0,x,x,x,x,x,x,x,x),x,x,x),x)],y.p),B.B,x,B.e,B.h,0,B.p),B.f,x,x,new A.n(w,x,x,v,x,x,B.m),x,x,x,x,B.ank,x,x,x)},
crt(a1,a2,a3){var x,w,v,u,t,s,r,q,p,o=this,n=null,m=D.f3(a2.h(0,"entryPrice")),l=D.f3(a2.h(0,"qty")),k=J.a2(a3),j=J.z(a2.h(0,"symbol"),k.h(a3,"asset"))?D.f3(k.h(a3,"price")):m,i=l*j,h=i-50,g=m===0?0:(j-m)/m*100,f=h>=0,e=m*0.985,d=m*1.03,a0=B.i.D((j-e)/(d-e),0,1)
k=a1.a
x=y.p
w=A.A(A.a([A.c("Your pretend position",n,n,n,n,n,n,A.l(n,n,k?C.dE:B.c,n,n,n,n,n,n,n,n,16,n,n,B.F,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),B.aY,o.a0N("OPEN",C.dS)],x),B.l,n,B.e,B.h,0,n,n)
v=D.ic(h,!0,!0)
v=A.c(v,n,n,n,n,n,n,A.l(n,n,f?C.dS:C.eF,n,n,n,n,n,n,n,n,34,n,n,B.F,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
u=g>=0?"+":""
t=B.i.aa(g,2)
v=A.A(A.a([v,B.aa,new A.D(B.eK,A.c(u+t+"%",n,n,n,n,n,n,A.l(n,n,f?C.dS:C.eF,n,n,n,n,n,n,n,n,n,n,n,B.F,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),n)],x),B.dJ,n,B.e,B.h,0,n,n)
u=f?"You would be winning right now":"You would be losing right now"
u=A.c(u,n,n,n,n,n,n,A.l(n,n,k?C.dj:C.dk,n,n,n,n,n,n,n,n,12.5,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
t=A.E(o.aAx(a1,"You put in",D.ic(50,!0,!1)),1)
s=D.ic(i,!0,!1)
t=A.A(A.a([t,B.aa,A.E(o.b38(a1,"Worth now",s,f?C.dS:C.eF),1)],x),B.l,n,B.e,B.h,0,n,n)
s=A.E(o.aAx(a1,"Bought at",D.ic(m,!0,!1)),1)
s=A.A(A.a([s,B.aa,A.E(o.aAx(a1,"Shares",B.i.aa(l,l<0.01?6:4)+" "+A.v(a2.h(0,"symbol"))),1)],x),B.l,n,B.e,B.h,0,n,n)
r=A.cf(new D.eFK(a1,a0))
q=A.A(A.a([A.E(A.c("Stop loss\n"+D.ic(e,!0,!1)+" \xb7 -$0.75",n,n,n,n,n,n,C.fKW,n,n,n),1),A.E(A.c("Take profit\n"+D.ic(d,!0,!1)+" \xb7 +$1.50",n,n,n,n,n,n,C.fJw,B.e6,n,n),1)],x),B.l,n,B.e,B.h,0,n,n)
p=D.ifQ(a2.h(0,"entryAt"))
return o.a0L(a1,A.x(A.a([w,B.af,v,u,B.aA,t,B.P,s,B.aO,r,B.ak,q,B.ak,A.c("Bought "+p,n,n,n,n,n,n,A.l(n,n,k?C.dj:C.dk,n,n,n,n,n,n,n,n,11.5,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],x),B.B,n,B.e,B.h,0,B.p))},
aEx(d,e,f,g,h,i){var x,w,v=null,u=d.a,t=u?C.Hb:C.Hc,s=A.m(16),r=A.c(e,v,v,v,v,v,v,A.l(v,v,u?C.dj:C.dk,v,v,v,v,v,v,v,v,11.5,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
if(h==null)x=u?C.dE:B.c
else x=h
w=y.p
w=A.a([A.E(A.x(A.a([r,B.bC,A.c(f,v,v,v,v,v,v,A.l(v,v,x,v,v,v,v,v,v,v,v,g?24:17,v,v,B.F,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],w),B.B,v,B.e,B.h,0,B.p),1)],w)
if(i!=null)w.push(A.c(i,v,v,v,v,v,v,A.l(v,v,u?C.dj:C.dk,v,v,v,v,v,v,v,v,11.5,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v))
return A.o(v,A.A(w,B.l,v,B.e,B.h,0,v,v),B.f,v,v,new A.n(t,v,v,s,v,v,B.m),v,v,v,B.jg,B.eX,v,v,v)},
cHU(d,e,f,g,h){return this.aEx(d,e,f,g,null,h)},
bc3(d,e,f,g,h){return this.aEx(d,e,f,!1,g,h)},
cHT(d,e,f,g){return this.aEx(d,e,f,!1,null,g)},
cg8(d,e){var x,w,v,u=this,t=null,s=J.z(e.h(0,"enabled"),!0)&&!J.z(e.h(0,"brakePaused"),!0),r=s?C.eF:C.dS
r=A.bn(r,t,t,t,t,t,t,t,new A.ba(A.m(999),B.a1),t,t,t)
x=u.r?t:new D.eFx(u,s)
w=A.W(s?B.xn:B.fZ,t,t,t,t,t)
r=A.E(new A.a6(t,52,A.da(w,t,A.c(s?"Stop agent":"Start agent",t,t,t,t,t,t,B.ns,t,t,t),x,r),t),3)
x=d.a
w=x?C.dE:B.c
v=x?C.qB:C.qy
x=x?B.c.j(0.92):C.kY
v=A.dh(t,t,x,t,t,t,t,t,t,w,t,t,t,t,new A.ba(A.m(999),B.a1),new A.av(v,1.5,B.r,-1),t,t,t,t)
x=u.r
w=x?t:u.gcyV()
return new A.D(B.e9,A.A(A.a([r,B.ar,A.E(new A.a6(t,52,A.en(x?B.Lg:C.c57,t,C.he0,w,v),t),2)],y.p),B.l,t,B.e,B.h,0,t,t),t)},
cJh(a7,a8){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=null,a5="outValue",a6=y.g.a(J.t(a8,"trades"))
if(a6==null)a6=B.cb
x=y.f
a6=J.cZ(a6,x)
a6=A.cE(a6,new D.eG_(),a6.$ti.k("M.E"),y.P)
w=A.B(a6,A.a5(a6).k("M.E"))
a6=a7.a
v=y.p
u=A.a([A.c("Pretend trades",a4,a4,a4,a4,a4,a4,A.l(a4,a4,a6?C.dE:B.c,a4,a4,a4,a4,a4,a4,a4,a4,16,a4,a4,B.F,a4,a4,!0,a4,a4,a4,a4,a4,a4,a4,a4),a4,a4,a4),B.P],v)
if(w.length===0){t=A.W(B.h_,a6?C.dj:C.dk,a4,a4,a4,a4)
u.push(new A.D(B.cm,A.A(A.a([t,B.ar,A.E(A.c("No trades yet. Each buy shows the $50 put in, and each sell shows what came back and the win or loss.",a4,a4,a4,a4,a4,a4,A.l(a4,a4,a6?C.dj:C.dk,a4,a4,a4,a4,a4,a4,a4,a4,12.5,a4,a4,a4,a4,1.3,!0,a4,a4,a4,a4,a4,a4,a4,a4),a4,a4,a4),1)],v),B.l,a4,B.e,B.h,0,a4,a4),a4))}for(t=w.length,s=y.N,r=y.z,q=0;q<w.length;w.length===t||(0,A.I)(w),++q){p=w[q]
o=J.a2(p)
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
else f=g?C.dS:C.eF
m=a6?C.qB:C.qy
e=f.j(0.14)
d=new A.aP(13,13)
e=A.o(a4,A.W(n?B.vu:B.tC,f,a4,a4,a4,20),B.f,a4,a4,new A.n(e,a4,a4,new A.bb(d,d,d,d),a4,a4,B.m),a4,40,a4,a4,a4,a4,a4,40)
d=n?"Bought":"Sold"
a0=a6?C.dE:B.c
d=A.c(d+" "+k,a4,a4,a4,a4,a4,a4,new A.F(!0,a0,a4,a4,a4,a4,14,B.F,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4),a4,a4,a4)
if(n){if(i===0)a0=""
else a0=B.i.aa(i,i<0.01?6:4)+" at "
a1=o.h(p,"price")
if(!(typeof a1=="number")){a1=A.cG(A.v(a1==null?"":a1))
if(a1==null)a1=0}a1=a0+D.ic(a1,!0,!1)
a0=a1}else{a0=o.h(p,"price")
if(!(typeof a0=="number")){a0=A.cG(A.v(a0==null?"":a0))
if(a0==null)a0=0}a0=D.ic(a0,!0,!1)
a1=o.h(p,"reason")
a1=J.k(a1==null?"":a1)
a2=B.a.cd(a1,"(")
a0="at "+a0+" \xb7 "+B.a.i(a2>0?B.a.az(a1,0,a2):a1)}a1=a6?C.dj:C.dk
a0=A.c(a0,a4,1,B.a2,a4,a4,a4,new A.F(!0,a1,a4,a4,a4,a4,11.5,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4),a4,a4,a4)
o=o.h(p,"et_time")
o=J.k(o==null?"":o)
a1=a6?C.dj:C.dk
o=A.x(A.a([d,B.bC,a0,A.c(o,a4,a4,a4,a4,a4,a4,new A.F(!0,a1,a4,a4,a4,a4,10.5,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4),a4,a4,a4)],v),B.B,a4,B.e,B.h,0,B.p)
if(n)d="-"+D.ic(j,!0,!1)
else{if(l.h(0,a5)==null)d=j+h
else{d=l.h(0,a5)
if(!(typeof d=="number")){d=A.cG(A.v(d==null?"":d))
if(d==null)d=0}}d="+"+D.ic(d,!0,!1)}a0=a6?C.dE:B.c
d=A.a([A.c(d,a4,a4,a4,a4,a4,a4,new A.F(!0,a0,a4,a4,a4,a4,14,B.F,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4),a4,a4,a4)],v)
if(!n){a0=D.ic(h,!0,!0)
if(l.h(0,"pct")==null)a1=""
else{a1=l.h(0,"pct")
if(!(typeof a1=="number")){a1=A.cG(A.v(a1==null?"":a1))
if(a1==null)a1=0}a1=a1>=0?"+":""
a3=l.h(0,"pct")
if(!(typeof a3=="number")){a3=A.cG(A.v(a3==null?"":a3))
if(a3==null)a3=0}a3=" ("+a1+B.i.aa(a3,2)+"%)"
a1=a3}a3=g?C.dS:C.eF
d.push(A.c(a0+a1,a4,a4,a4,a4,a4,a4,new A.F(!0,a3,a4,a4,a4,a4,12,B.F,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4),a4,a4,a4))}if(n){a0=a6?C.dj:C.dk
d.push(A.c("put in",a4,a4,a4,a4,a4,a4,new A.F(!0,a0,a4,a4,a4,a4,11,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4),a4,a4,a4))}u.push(A.o(a4,new A.c3(B.aL,B.e,B.h,B.l,a4,B.p,a4,0,A.a([e,B.bb,new A.bx(1,B.ba,o,a4),B.aa,A.x(d,B.dJ,a4,B.e,B.h,0,B.p)],v),a4),B.f,a4,a4,new A.n(a4,a4,new A.bE(B.a1,B.a1,new A.av(m,1,B.r,-1),B.a1),a4,a4,a4,B.m),a4,a4,a4,a4,B.jU,a4,a4,a4))}return this.a0L(a7,A.x(u,B.B,a4,B.e,B.h,0,B.p))},
bEN(d){var x,w,v,u=this,t=null,s=u.x,r=u.e
r=s?r:A.cS(r,0,A.dy(8,"count",y.S),A.T(r).c).dm(0)
s=d.a
x=A.c("Agent activity",t,t,t,t,t,t,A.l(t,t,s?C.dE:B.c,t,t,t,t,t,t,t,t,16,t,t,B.F,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)
w=y.p
w=A.a([A.A(A.a([x,B.aY,A.c("newest first",t,t,t,t,t,t,A.l(t,t,s?C.dj:C.dk,t,t,t,t,t,t,t,t,11,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],w),B.l,t,B.e,B.h,0,t,t),B.ak],w)
if(u.e.length===0)w.push(new A.D(B.f8,A.c("Nothing yet. A new line appears with every 15-minute check.",t,t,t,t,t,t,A.l(t,t,s?C.dj:C.dk,t,t,t,t,t,t,t,t,12.5,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),t))
for(s=r.length,v=0;v<r.length;r.length===s||(0,A.I)(r),++v)w.push(u.c7c(d,r[v]))
if(u.e.length>8){if(u.x)s=u.w?"Show older":"That is everything"
else s="Show all"
w.push(A.as(A.bO(!1,A.c(s,t,t,t,t,t,t,t,t,t,t),t,t,!0,t,t,t,new D.eFm(u),t,t),t,t,t))}return u.a0L(d,A.x(w,B.B,t,B.e,B.h,0,B.p))},
c7c(d,e){var x,w,v,u,t,s=null,r="price",q=J.a2(e),p=q.h(e,"decision"),o=J.k(p==null?"":p)
A:{if("would buy"===o){p=C.dS
break A}if("would sell"===o){p=B.bA
break A}if("hold"===o){p=B.b2
break A}if("day start"===o||"day end"===o){p=B.ce
break A}if("start"===o){p=C.dS
break A}if("stop"===o){p=C.eF
break A}if(J.z(q.h(e,"kind"),"error"))p=C.eF
else p=d.a?C.dj:C.dk
break A}x=q.h(e,"fast_ma")!=null&&q.h(e,"slow_ma")!=null
w=A.o(s,s,B.f,s,s,new A.n(p,s,s,s,s,s,B.a6),s,8,s,B.a1w,s,s,s,8)
v=o==="hold"?"Still holding":D.hDS(o)
u=y.p
p=A.a([A.c(v,s,s,s,s,s,s,A.l(s,s,p,s,s,s,s,s,s,s,s,12.5,s,s,B.F,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],u)
if(J.z(D.h5(q.h(e,"details")).h(0,"by"),"cron"))B.d.u(p,A.a([B.bf,A.c("automatic",s,s,s,s,s,s,A.l(s,s,d.a?C.dj:C.dk,s,s,s,s,s,s,s,s,10,s,s,B.O,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],u))
p.push(B.aY)
v=q.h(e,"et_time")
v=D.imi(J.k(v==null?"":v))
t=d.a
p.push(A.c(v,s,s,s,s,s,s,A.l(s,s,t?C.dj:C.dk,s,s,s,s,s,s,s,s,10.5,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s))
p=A.A(p,B.l,s,B.e,B.h,0,s,s)
v=q.h(e,"reason")
v=D.hDS(J.k(v==null?"":v))
p=A.a([p,A.c(v,s,s,s,s,s,s,A.l(s,s,t?C.dE:B.c,s,s,s,s,s,s,s,s,12.5,s,s,s,s,1.3,!0,s,s,s,s,s,s,s,s),s,s,s)],u)
if(q.h(e,r)!=null||x){v=A.a([],y.s)
if(q.h(e,"asset")!=null&&q.h(e,r)!=null)v.push(A.v(q.h(e,"asset"))+" "+D.ic(D.f3(q.h(e,r)),!0,!1))
if(x)v.push("fast "+B.i.aa(D.f3(q.h(e,"fast_ma")),2)+" \xb7 slow "+B.i.aa(D.f3(q.h(e,"slow_ma")),2))
q=B.d.aM(v,"  \xb7  ")
p.push(A.c(q,s,s,s,s,s,s,A.l(s,s,t?C.dj:C.dk,s,s,s,s,s,s,s,s,10.5,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s))}return new A.D(B.HB,A.A(A.a([w,B.ar,A.E(A.x(p,B.B,s,B.e,B.h,0,B.p),1)],u),B.B,s,B.e,B.h,0,s,s),s)},
cxS(d,e){var x,w,v,u,t,s,r,q,p,o,n,m=null,l=this.c
l.toString
l=A.O(l).bgi(B.L)
x=d.a
w=x?C.dE:B.c
v=x?C.dj:C.dk
u=A.W(C.bVO,B.b2,m,m,m,m)
t=y.p
s=A.A(A.a([new A.d2(1,B.cg,A.c("The rules it follows",m,m,m,m,m,m,A.l(m,m,x?C.dE:B.c,m,m,m,m,m,m,m,m,14.5,m,m,B.F,m,m,!0,m,m,m,m,m,m,m,m),m,m,m),m),B.aa,A.ay(m,A.o(m,C.fod,B.f,m,m,new A.n(m,m,m,A.m(999),m,B.tL,B.m),m,m,m,m,B.hl,m,m,m),B.y,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,this.gclt(),m,m,m,m,m,m,!1,B.a4)],t),B.l,m,B.e,B.h,0,m,m)
r=A.c("Read-only, set in the code",m,m,m,m,m,m,A.l(m,m,x?C.dj:C.dk,m,m,m,m,m,m,m,m,11.5,m,m,m,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)
q=A.a([],t)
p=y.g.a(J.t(e,"rules"))
p=J.aT(p==null?B.cb:p)
while(p.C()){o=J.k(p.gP(p))
n=x?C.dE:B.c
q.push(new A.D(C.bEw,new A.c3(B.aL,B.e,B.h,B.B,m,B.p,m,0,A.a([C.eCV,B.aa,new A.bx(1,B.ba,A.c(o,m,m,m,m,m,m,new A.F(!0,n,m,m,m,m,12.5,m,m,m,m,m,1.35,m,m,m,m,m,m,m,m,m,m,m,m,m),m,m,m),m)],t),m),m))}return this.aAv(d,new A.p0(l,A.aF(!1,B.a3,!0,m,O.hsQ(m,q,L.anP,m,v,w,!1,u,m,r,B.hc,s),B.f,m,0,m,m,m,m,m,B.ie),m),B.ag)},
aAv(d,e,f){var x=null,w=d.a,v=w?B.c.j(0.92):C.kY,u=A.m(24)
return A.o(x,e,B.f,x,x,new A.n(v,x,A.K(w?B.c:C.uR,B.r,1),u,A.a([new A.ab(0,B.H,d.ga9z(),B.dp,24)],y.V),x,B.m),x,x,x,B.e9,f,x,x,x)},
a0L(d,e){return this.aAv(d,e,B.bQ)},
aaC(d,e,f){var x=null,w=f.j(0.12),v=A.m(16),u=A.K(f.j(0.45),B.r,1),t=A.W(B.a4l,f,x,x,x,20)
return A.o(x,A.A(A.a([t,B.ar,A.E(A.c(e,x,x,x,x,x,x,A.l(x,x,d.a?C.dE:B.c,x,x,x,x,x,x,x,x,12.5,x,x,x,x,1.35,!0,x,x,x,x,x,x,x,x),x,x,x),1)],y.p),B.l,x,B.e,B.h,0,x,x),B.f,x,x,new A.n(w,x,u,v,x,x,B.m),x,x,x,B.e9,B.bl,x,x,x)},
b35(d,e,f){var x=null,w=d.a,v=w?B.c.j(0.92):C.kY,u=A.K(w?B.c:C.uR,B.r,1)
return A.aF(!1,B.a3,!0,x,A.aM(!1,x,!0,A.o(x,A.W(e,w?C.dE:B.c,x,x,x,18),B.f,x,x,new A.n(x,x,u,x,x,x,B.a6),x,40,x,x,x,x,x,40),B.cK,!0,x,x,x,x,x,x,x,x,x,x,x,f,x,x,x,x,x,x,x),B.f,v,0,x,x,B.cK,x,x,B.ai)},
b8I(d,e,f,g,h){var x,w,v,u,t,s,r,q=null
if(f){x=d.a
w=x?C.l_:B.c
v=w
w=x
x=v}else{x=d.a
w=x?C.H1:C.GR
v=w
w=x
x=v}u=A.m(999)
t=y.p
s=A.a([],t)
if(h!=null){if(f)r=w?B.c:C.l_
else r=w?C.dj:C.dk
B.d.u(s,A.a([A.W(h,r,q,q,q,14),B.d8],t))}if(f)w=w?B.c:C.l_
else w=w?C.dj:C.dk
s.push(A.c(e,q,q,q,q,q,q,A.l(q,q,w,q,q,q,q,q,q,q,q,11.5,q,q,B.O,q,q,!0,q,q,q,q,q,q,q,q),q,q,q))
return A.ay(q,A.cU(q,A.A(s,B.l,q,B.e,B.M,0,q,q),q,q,B.b_,new A.n(x,q,q,u,q,q,B.m),B.eJ,q,q,q,q,M.a1B,q,q,q),B.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,g,q,q,q,q,q,q,!1,B.a4)},
czV(d,e,f,g){return this.b8I(d,e,f,g,null)},
ayl(d,e,f){var x=null,w=A.o(x,x,B.f,x,x,new A.n(e,x,x,A.m(2),x,x,B.m),x,3,x,x,x,x,x,14)
return A.A(A.a([w,B.e5,A.c(f,x,x,x,x,x,x,A.l(x,x,d.a?C.dj:C.dk,x,x,x,x,x,x,x,x,11,x,x,x,x,x,!0,x,x,x,x,x,x,x,x),x,x,x)],y.p),B.l,x,B.e,B.M,0,x,x)},
a0N(d,e){var x=null,w=e.j(0.14),v=A.m(999)
return A.o(x,A.c(d,x,x,x,x,x,x,A.l(x,x,e,x,x,x,x,x,x,x,x,10,x,x,B.u,x,x,!0,x,0.6,x,x,x,x,x,x),x,x,x),B.f,x,x,new A.n(w,x,x,v,x,x,B.m),x,x,x,x,B.fD,x,x,x)},
b38(d,e,f,g){var x=null,w=d.a,v=w?C.Hb:C.Hc,u=A.m(16),t=A.c(e,x,x,x,x,x,x,A.l(x,x,w?C.dj:C.dk,x,x,x,x,x,x,x,x,11.5,x,x,x,x,x,!0,x,x,x,x,x,x,x,x),x,x,x)
if(g==null)w=w?C.dE:B.c
else w=g
return A.o(x,A.x(A.a([t,B.cM,new A.dl(B.dx,B.a5,B.f,A.c(f,x,x,x,x,x,x,A.l(x,x,w,x,x,x,x,x,x,x,x,16,x,x,B.F,x,x,!0,x,x,x,x,x,x,x,x),x,x,x),x)],y.p),B.B,x,B.e,B.h,0,B.p),B.f,x,x,new A.n(v,x,x,u,x,x,B.m),x,x,x,x,B.bl,x,x,x)},
aAx(d,e,f){return this.b38(d,e,f,null)},
cMg(d){var x=A.v(d==null?"":d),w=A.bh(x.length>=19?B.a.az(x,0,19):"")
if(w==null)return""
return" \xb7 opens "+B.Tc[A.lF(w)-1]+" "+D.aQE(w)+" ET"}}
D.adz.prototype={
S(){return new D.be7()}}
D.be7.prototype={
aAw(d,e){var x=this,w=x.a.c.length,v=B.o.D(B.i.be(d.a/e*w),0,w-1)
if(v!==x.d)x.l(new D.cWz(x,v))},
B(d){return A.cf(new D.cWI(this))}}
D.be8.prototype={
a3(c9,d0){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2=this,c3=null,c4={},c5=d0.b,c6=c5-18,c7=y.n,c8=A.a([],c7)
for(x=c2.c,w=x.length,v=0;u=x.length,v<u;x.length===w||(0,A.I)(x),++v){t=x[v]
u=J.a2(t)
s=u.h(t,"h")
if(!(typeof s=="number")){s=A.cG(A.v(s==null?"":s))
if(s==null)s=0}u=u.h(t,"l")
if(!(typeof u=="number")){u=A.cG(A.v(u==null?"":u))
if(u==null)u=0}B.d.u(c8,A.a([s,u],c7))}w=c2.f
if(w)for(v=0;v<x.length;x.length===u||(0,A.I)(x),++v){t=x[v]
s=A.a([],c7)
r=J.a2(t)
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
k=new D.cWJ(l)
j=new D.cWL(c4,c6)
$.R()
i=A.L()
q=c2.d.a
i.r=(q?C.qB:C.qy).j(0.7).gp(0)
i.c=1
for(h=1;h<=3;++h){g=c6*h/4
for(f=0;f<c8;f+=6)c9.ah(new A.r(f,g),new A.r(f+2,g),i)}if(w){w=new D.cWK(c2,m,k,j,c9)
w.$2("s",B.b2)
w.$2("f",B.bA)}for(w=Math.max(2,l*0.62)/2,e=c2.w,d=e!=null,h=0;h<m;++h){t=x[h]
a0=J.a2(t)
a1=a0.h(t,"o")
if(!(typeof a1=="number")){a2=A.cG(A.v(a1==null?"":a1))
a1=a2==null?0:a2}a3=a0.h(t,"c")
if(!(typeof a3=="number")){a2=A.cG(A.v(a3==null?"":a3))
a3=a2==null?0:a2}a4=a0.h(t,"h")
if(!(typeof a4=="number")){a2=A.cG(A.v(a4==null?"":a4))
a4=a2==null?0:a2}a5=a0.h(t,"l")
if(!(typeof a5=="number")){a0=A.cG(A.v(a5==null?"":a5))
a5=a0==null?0:a0}a6=a3>=a1?C.dS:B.jQ
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
b0=A.bv(new A.a3(k.$1(h)-w,b1,k.$1(h)+w,Math.max(b2,b1+1.5)),B.hC)
a8.b=B.Q
c9.ar(b0,a8)}if(u)c2.aUg(c9,j.$1(c7),c8,E.uF,"Buy "+D.ic(c7,!0,!1),!0)
if(r){c7=j.$1(s)
c2.bOZ(c9,c7,c8,(q?C.dE:B.c).j(0.55),D.ic(s,!0,!1))}b3=A.fu(c3,B.cw,c3,c3,c3,c3,B.a7,B.bW,c3,B.dG,B.bX)
for(c7=[0,m/3|0,B.o.ap(2*m,3),m-1],w=c7.length,c5-=13,u=c2.b,v=0;v<w;++v){h=c7[v]
s=J.t(x[h],"t")
b4=A.bh(A.v(s==null?"":s))
if(b4==null)continue
s=D.aQE(D.bF8(b4))
r=q?C.dj:C.dk
b3.sb2(0,new A.et(s,c3,c3,B.cO,c3,c3,c3,c3,c3,c3,new A.F(!0,r,c3,u,c3,c3,10,c3,c3,c3,c3,c3,c3,c3,c3,c3,c3,c3,c3,c3,c3,c3,c3,c3,c3,c3)))
b3.e6()
s=k.$1(h)
r=b3.b.c
b3.a3(c9,new A.r(B.i.D(s-r/2,0,c8-r),c5))}if(d&&e<m){t=x[e]
f=k.$1(e)
c5=J.a2(t)
b5=j.$1(D.f3(c5.h(t,"c")))
$.R()
b6=A.L()
b6.r=(q?C.dE:B.c).j(0.5).gp(0)
b6.c=1
for(b7=0;b7<c6;b7+=6)c9.ah(new A.r(f,b7),new A.r(f,b7+3),b6)
$.R()
c7=A.L()
c7.r=(q?B.c.j(0.92):C.kY).gp(0)
c9.O(new A.r(f,b5),6,c7)
c7=A.L()
c7.r=(q?C.dE:B.c).gp(0)
c7.b=B.ac
c7.c=2.5
c9.O(new A.r(f,b5),6,c7)
c7=c5.h(t,"t")
b4=A.bh(A.v(c7==null?"":c7))
c7=b4==null?"":D.aQE(D.bF8(b4))+" ET\n"
c5=D.ic(D.f3(c5.h(t,"c")),!0,!1)
b3.sb2(0,A.cT(c3,c3,c3,c3,c3,c3,c3,c3,c3,A.l(c3,c3,q?B.c:C.l_,c3,c3,c3,c3,c3,u,c3,c3,11.5,c3,c3,B.F,c3,1.3,!0,c3,c3,c3,c3,c3,c3,c3,c3),c7+c5))
b3.sD9(0,B.K)
b3.e6()
c5=b3.b
b8=c5.c+18
c5=c5.a.c
b9=c5.gb9(c5)+10
c0=B.i.D(f-b8/2,0,c8-b8)
c1=Math.max(0,b5-b9-14)
c8=A.bv(new A.a3(c0,c1,c0+b8,c1+b9),B.hS)
c5=A.L()
c5.r=(q?C.l_:B.c).gp(0)
c9.ar(c8,c5)
b3.a3(c9,new A.r(c0+9,c1+5))}},
aUg(d,e,f,g,h,i){var x,w,v,u,t,s,r,q,p,o,n=null
$.R()
x=A.L()
x.r=g.gp(0)
x.c=1.2
for(w=0;w<f;w+=7)d.ah(new A.r(w,e),new A.r(w+3.5,e),x)
v=A.fu(n,B.cw,n,n,n,A.cT(n,n,n,n,n,n,n,n,n,A.l(n,n,B.c,n,n,n,n,n,this.b,n,n,10,n,n,B.F,n,n,!0,n,n,n,n,n,n,n,n),h),B.a7,B.bW,n,B.dG,B.bX)
v.e6()
u=v.b
t=u.c+12
u=u.a.c
s=u.gb9(u)+6
r=i?0:f-t
u=e-s/2
q=A.bv(new A.a3(r,u,r+t,u+s),B.q8)
$.R()
p=A.L()
if(i)o=E.uF
else o=this.d.a?C.l_:B.c
p.r=o.gp(0)
d.ar(q,p)
v.a3(d,new A.r(r+6,u+3))},
bOZ(d,e,f,g,h){return this.aUg(d,e,f,g,h,!1)},
aD(d){var x=this
return d.c!==x.c||d.w!=x.w||d.f!==x.f||d.e!=x.e||d.r!==x.r||d.d.a!==x.d.a}}
D.aKy.prototype={
a3(d,e){var x,w,v,u,t,s,r,q,p,o,n=null,m=this.b
if(m.length<2)return
x=A.T(m).k("N<1,H>")
w=A.B(new A.N(m,new D.fgl(),x),x.k("aj.E"))
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
x.san(new A.a7(B.aX,B.b1,B.x,A.a([q.j(0.25),q.j(0)],y.O),n,n).aA(0,new A.a3(0,0,0+m,0+s)))
d.af(o,x)
x=A.L()
x.r=q.gp(0)
x.b=B.ac
x.c=1.8
x.e=B.dP
d.af(t,x)
x=B.d.gal(w)
p=A.L()
p.r=q.gp(0)
d.O(new A.r(m,s-(x-v)/u*s),3,p)},
aD(d){return d.b!==this.b||!d.c.A(0,this.c)}}
D.yU.prototype={}
D.a1u.prototype={
ga9z(){return this.a?B.ce.j(0.08):B.v.j(0.35)}}
D.aCm.prototype={
S(){return new D.bhE()}}
D.bhE.prototype={
Z(){this.a4()
this.d=A.d5(B.fB,new D.dhT(this))},
t(){var x=this.d
if(x!=null)x.a1(0)
this.a2()},
B(d){var x=null,w=this.a.c*60,v=B.o.F(B.o.ap(new A.V(Date.now(),0,!1).ab().a,1000),w),u=v<15,t=w-v,s=u?"ENTER NOW":"Enter in "+B.o.ap(t,60)+":"+B.a.b1(B.o.v(B.o.F(t,60)),2,"0"),r=u?B.c:B.c.j(0.18),q=A.m(999),p=u?B.he:B.nf
p=A.W(p,u?B.v:B.c,x,x,x,20)
return A.cU(x,A.A(A.a([p,B.bf,A.c(s,x,x,x,x,x,x,A.l(x,x,u?B.v:B.c,x,x,x,x,x,x,x,H.Ji,22,x,x,B.u,x,x,!0,x,x,x,x,x,x,x,x),x,x,x)],y.p),B.l,x,B.e,B.M,0,x,x),x,x,B.b_,new A.n(r,x,x,q,x,x,B.m),B.i9,x,x,x,x,B.HO,x,x,x)}}
D.cC.prototype={}
D.uq.prototype={}
D.XC.prototype={
S(){var x,w,v,u,t=null,s=y.N,r=y.z
r=A.J(["done",A.a([],y.s),"lessons",A.S(s,r)],s,r)
x=$.hj4
w=$.ax()
v=A.m5(0,t,t)
u=A.a([],y.t)
return new D.aHd(r,new A.at(new A.bd(x,B.b6,B.aP),w),v,u,new A.at(B.ax,w),A.S(s,s),A.S(s,y.R),B.Z,t,t)}}
D.a_x.prototype={}
D.aHd.prototype={
gLc(){var x,w=this,v=w.d
if(v===$){w.a.toString
x=A.acn(null,0,3,w)
w.d!==$&&A.bF()
w.d=x
v=x}return v},
gJW(){var x=y.g.a(this.x.h(0,"done"))
if(x==null)x=B.cb
return J.b8(x,new D.eGb(),y.N).fB(0)},
Z(){var x,w,v,u=this
u.a4()
x=u.e=u.a.c
w=x==null
u.y=!w
u.ay=D.eGY(w?null:J.t(x,"fx"))
x=u.a.c
v=D.eGY(x==null?null:J.t(x,"markets"))
if(v.length!==0)u.f=v
u.r=new A.V(Date.now(),0,!1)
u.gLc().aV(0,new D.eH3(u))
$.aLS=$.aLS+1
u.at.aV(0,new D.eH4(u))
if($.Dw.length!==0||$.ah1)u.aCR()
if(!u.a.d){u.a0M()
u.Rb()
A.SW().bE(new D.eH5(u),y.H)
u.w=A.d5(B.hb,new D.eH6(u))}},
t(){var x,w=this,v=w.w
if(v!=null)v.a1(0)
v=w.as
if(v!=null)v.a1(0)
w.gLc().t()
v=w.cy
x=$.ax()
v.V$=x
v.R$=0
v=w.at
v.V$=x
v.R$=0
w.ax.t()
D.hCR()
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
return A.b(A.fZ(A.J(["action","paLearnGet"],o,n),!1,!1,!1,!1,B.hb),$async$a0M)
case 8:l=e
if(s.c==null){x=1
break}k=l==null?null:J.t(l,"progress")
j=y.f
if(j.b(k)){l.toString
i=A.a1(j.a(J.t(l,"progress")),o,n)}else i=null
s.l(new D.eGw(h,s,l,i))
if(i==null&&h.a!=null)s.aCH()
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a0M,w)},
aCH(){var x=this.as
if(x!=null)x.a1(0)
this.as=A.cx(B.CW,new D.eGH(this))},
ae7(d){return this.c66(d)},
c66(d){var x=0,w=A.j(y.H),v=this,u,t,s
var $async$ae7=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=B.d.cv(C.E7,new D.eGe(v))
v.l(new D.eGf(v,d))
v.aCH()
u=B.d.cv(C.E7,new D.eGg(v))
x=!s&&u&&v.c!=null?2:3
break
case 2:t=v.c
t.toString
x=4
return A.b(A.ce(null,null,!0,null,new D.eGh(v),t,null,!0,!0,y.H),$async$ae7)
case 4:case 3:return A.h(null,w)}})
return A.i($async$ae7,w)},
Rb(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$Rb=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(A.fZ(A.J(["action","paSignals"],y.N,y.z),!1,!1,!1,!1,B.CS),$async$Rb)
case 3:s=e
if(u.c==null||s==null||!J.z(J.t(s,"ok"),!0)){x=1
break}t=J.a2(s)
u.l(new D.eGG(u,D.eGY(t.h(s,"fx")),D.eGY(t.h(s,"markets")),s))
u.ch5()
case 1:return A.h(v,w)}})
return A.i($async$Rb,w)},
ch5(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g="decision",f=A.a([],y.s)
for(x=i.gaaj(),w=x.length,v=i.db,u=y.N,t=y.z,s=y.f,r=i.dx,q=0;q<x.length;x.length===w||(0,A.I)(x),++q){p=x[q]
o=J.a2(p)
n=J.k(o.h(p,"asset"))
o=o.h(p,"reading")
m=s.b(o)?A.a1(o,u,t):A.S(u,t)
l=B.d.q(C.aCc,m.h(0,g))
if(m.h(0,g)==null||J.z(m.h(0,g),"NO_DATA")||J.z(m.h(0,g),"CLOSED"))k="unknown"
else if(l){o=J.z(m.h(0,"dir"),"up")?"up":"down"
k=o}else k="no direction"
j=v.h(0,n)
if(j!=null&&j!==k&&k!=="unknown"&&j!=="unknown"){r.n(0,n,new A.bsH(new A.V(Date.now(),0,!1),j,k))
f.push(n+" now "+k.toUpperCase())}v.n(0,n,k)}r.bq(r,new D.eGx())
if(f.length!==0&&i.c!=null){i.l(new D.eGy())
x=i.c.L(y.q).f
u=A.cS(f,0,A.dy(3,"count",y.S),u).aM(0," \xb7 ")
w=f.length
w=w>3?" and "+(w-3)+" more":""
x.U(A.b2(h,h,h,B.i0,h,B.t,h,A.c("Signal changed: "+u+w,h,h,h,h,h,h,h,h,h,h),h,B.lw,h,h,h,h,h,h,h,h,h,h))}},
gaaj(){var x=A.B(this.gyz(),y.P)
B.d.u(x,this.ay)
return x},
gyz(){var x=this.f
if(x==null){x=this.e
x=D.fAj(D.h5(D.h5(x==null?null:J.t(x,"state")).h(0,"snapshot")))}return x},
gcEb(){var x=this.gyz(),w=A.T(x).k("X<1>"),v=A.B(new A.X(x,new D.eGW(),w),w.k("M.E"))
if(v.length===0)return this.gyz().length===0?null:B.d.gH(this.gyz())
B.d.b_(v,new D.eGX())
return B.d.gH(v)},
c6D(){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.e,i=D.h5(j==null?k:J.t(j,"state")),h=y.f.b(i.h(0,"shadow"))?D.h5(i.h(0,"shadow")):k
j=l.e
x=D.h5(j==null?k:J.t(j,"today"))
j=l.e
w=D.h5(j==null?k:J.t(j,"record"))
j=l.fr
if(!(j.length!==0)){j=l.e
j=j==null?k:J.t(j,"nowEt")
if(j==null)j="unknown"}j="LIVE DATA from the NGMY paper trading agent (Eastern Time now: "+A.v(j)+"):\n"
if(l.e!=null){v=J.z(i.h(0,"enabled"),!0)?"running":"stopped"
u=J.z(i.h(0,"brakePaused"),!0)?", paused by the 25 dollar brake":""
t=D.ic(D.f3(i.h(0,"totalPnl")),!0,!0)
s=D.ic(D.f3(x.h(0,"day_pnl")),!0,!0)
r=w.h(0,"wins")
r=A.v(r==null?0:r)
q=w.h(0,"losses")
j+="Agent: "+v+u+". Pretend P/L all time "+t+", today "+s+", wins "+r+", losses "+A.v(q==null?0:q)+".\n"}if(!(l.e==null))if(h!=null){p=D.f3(J.t(B.d.dz(l.gyz(),new D.eGk(h),new D.eGl()),"price"))
o=D.f3(h.h(0,"entryPrice"))
v=A.v(h.h(0,"symbol"))
u=B.i.aa(o,2)
t=B.i.aa(p,2)
j+="Open pretend trade: "+v+", $50 bought at "+u+", now "+t+" ("+A.v(o===0?0:B.i.aa((p-o)/o*100,2))+"%). Take profit at "+B.i.aa(o*1.03,2)+", stop loss at "+B.i.aa(o*0.985,2)+".\n"}else j+="No open pretend trade.\n"
n=new D.eGm()
j+="Agent markets (5-minute candles; fast line = 9-candle average, slow = 21-candle average; strength 0 bearish to 100 bullish):\n"
for(v=l.gyz(),u=v.length,m=0;m<v.length;v.length===u||(0,A.I)(v),++m)j+=A.v(n.$1(v[m]))+"\n"
v=l.ay
u=v.length
if(u!==0){j+="Forex pairs (real interbank prices, 1-minute candles, signals only; the agent does not trade them; OTC prices at brokers differ):\n"
for(m=0;m<v.length;v.length===u||(0,A.I)(v),++m)j+=A.v(n.$1(v[m]))+"\n"}return j.charCodeAt(0)==0?j:j},
JV(d){return this.bHj(d)},
bHj(d){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o,n,m,l,k
var $async$JV=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:k=B.a.i(d)
if(k.length===0||$.ah1){x=1
break}u.at.bO(0,B.ci)
u.l(new D.eG7(u,k))
u.aCR()
t=$.Dw.length
if(t>1){t=B.d.ds($.Dw,Math.max(0,t-9),t-1)
s=new A.N(t,new D.eG8(),A.T(t).k("N<1,p>")).aM(0,"\n")}else s=""
t=u.e
t=t==null?null:J.t(t,"rules")
y.g.a(t)
if(t==null)t=u.dy
r=y.N
q=J.b8(t,new D.eG9(),r).aM(0,"\n")
t=u.c6D()
p=s.length===0?"":"\nCONVERSATION SO FAR:\n"+s+"\n"
o=$.fmR
x=u.a.d?3:5
break
case 3:n="Preview mode: the tutor answers here using the live readings."
x=4
break
case 5:x=6
return A.b(A.fZ(A.J(["action","chat","prompt",'You are the NGMY Signal Grid trading tutor. You teach a complete beginner how trading works, using the live market data and the rules of the NGMY paper trading agent below.\nHow to answer:\n- Plain, friendly, simple English. Short sentences. No jargon without explaining it. Usually under 170 words.\n- When the question is about a market or "right now", use the LIVE DATA and quote the real numbers (price, trend, strength, RSI, last hour), then explain what they mean and what the agent\'s rules say.\n- Say clearly whether a market looks bullish, bearish or sideways and why, and what would need to happen for a buy or sell signal under the agent\'s rules.\n- This is practice with pretend (paper) money. You may explain what the rules signal, but never promise profit, never say a price will surely go up or down, and never tell the student to trade real or borrowed money. Remind them briefly when it fits that signals can fail and the stop loss keeps losses small.\n- No markdown headings or tables. You may use short lines starting with "- ".\n\nAGENT RULES:\n'+q+"\n\n"+t+"\n"+p+"\nStudent: "+k+"\nTutor:"],r,y.z),!1,!1,!1,!1,B.nT),$async$JV)
case 6:m=f
t=m==null
if(t)l=null
else{r=J.t(m,"text")
r=r==null?null:B.a.i(J.k(r))
l=r}if(l==null)l=""
if(l.length!==0){t=A.aL(l,"**","")
r=A.af("^#+\\s*",!0,!1,!0,!1)
n=A.aL(t,r,"")}else{t=t?null:J.t(m,"error")
n=J.k(t==null?"The tutor could not answer just now. Please try again.":t)}case 4:if(o!==$.fmR){x=1
break}$.Dw.push(new D.a_x(!1,n))
$.ah1=!1
if(u.c==null){x=1
break}u.l(new D.eGa())
u.aCR()
case 1:return A.h(v,w)}})
return A.i($async$JV,w)},
aCR(){$.aU.x1$.push(new D.eGI(this))},
aQU(d){this.gLc().C_(2)
this.JV(d)},
B(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=A.O(d).ax.a===B.dd,g=new D.a1u(h),f=h?C.yK:C.yI,e=h?C.yK:C.yI
e=A.a([e,h?C.a_A:C.a_q],y.O)
x=j.b34(g,B.eH,new D.eH_(d))
w=A.c("Trading Academy",i,i,i,i,i,i,A.l(i,i,h?C.dE:B.c,i,i,i,i,i,i,i,i,17,i,i,B.F,i,i,!0,i,i,i,i,i,i,i,i),i,i,i)
v=y.p
w=A.A(A.a([x,B.ar,A.E(A.x(A.a([w,A.c("Lessons, live signals and a tutor",i,i,i,i,i,i,A.l(i,i,h?C.dj:C.dk,i,i,i,i,i,i,i,i,11.5,i,i,i,i,i,!0,i,i,i,i,i,i,i,i),i,i,i)],v),B.B,i,B.e,B.h,0,B.p),1),A.o(i,C.foa,B.f,i,i,new A.n(C.dS.j(0.14),i,i,A.m(999),i,i,B.m),i,i,i,i,B.fM,i,i,i)],v),B.l,i,B.e,B.h,0,i,i)
x=h?C.H1:C.GR
u=A.m(999)
t=A.a([],v)
for(s=[C.fef,C.fcw,C.fdd],r=s.length,q=0;q<r;++q){p={}
o=s[q]
p.a=null
p.a=o.a
n=j.gLc().d===p.a
if(n)m=h?C.l_:B.c
else m=B.L
l=new A.aP(999,999)
if(n)k=h?B.c:C.l_
else k=h?C.dj:C.dk
k=A.W(o.c,k,i,i,i,15)
if(n)n=h?B.c:C.l_
else n=h?C.dj:C.dk
t.push(new A.bx(1,B.ba,A.ay(i,A.cU(i,new A.c3(B.aL,B.b9,B.h,B.l,i,B.p,i,0,A.a([k,B.e5,new A.d2(1,B.cg,A.c(o.b,i,i,B.a2,i,i,i,new A.F(!0,n,i,i,i,i,12.5,B.F,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i),i,i,i),i)],v),i),i,i,B.b_,new A.n(m,i,i,new A.bb(l,l,l,l),i,i,B.m),B.a3,i,i,i,i,B.wU,i,i,i),B.y,!1,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,new D.eH0(p,j),i,i,i,i,i,i,!1,B.a4),i))}h=A.o(i,A.A(t,B.l,i,B.e,B.h,0,i,i),B.f,i,i,new A.n(x,i,i,u,i,i,B.m),i,i,i,i,B.es,i,i,i)
x=j.gLc()
return A.c5(i,f,A.o(i,A.bm(!0,A.x(A.a([new A.D(C.bG8,w,i),new A.D(B.ao7,h,i),A.E(A.bao(A.a([j.c6a(g),j.cDg(g),j.bHp(g)],v),x,i),1)],v),B.l,i,B.e,B.h,0,B.p),!0,!1,B.ag,!0,!0),B.f,i,i,new A.n(i,i,i,i,i,new A.a7(B.aX,B.b1,B.x,e,i,i),B.m),i,i,i,i,i,i,i,i),i,!1,!1,i,i)},
b34(d,e,f){var x=null,w=d.a,v=w?B.c.j(0.92):C.kY,u=A.K(w?B.c:C.uR,B.r,1)
return A.aF(!1,B.a3,!0,x,A.aM(!1,x,!0,A.o(x,A.W(e,w?C.dE:B.c,x,x,x,18),B.f,x,x,new A.n(x,x,u,x,x,x,B.a6),x,40,x,x,x,x,x,40),B.cK,!0,x,x,x,x,x,x,x,x,x,x,x,f,x,x,x,x,x,x,x),B.f,v,0,x,x,B.cK,x,x,B.ai)},
c6a(d){var x,w=null,v=new A.X(C.E7,new D.eGj(this),y.E).gJ(0),u=A.m(24),t=y.p
t=A.a([A.o(w,A.x(A.a([C.heG,B.at,C.fWk,B.aA,A.bu(A.m(9),A.jt(B.c.j(0.18),w,w,8,w,v/10,B.afc),B.aq),B.ak,A.c(""+v+" of 10 lessons done",w,w,w,w,w,w,B.acE,w,w,w)],t),B.B,w,B.e,B.h,0,B.p),B.f,w,w,new A.n(w,w,w,u,w,C.ced,B.m),w,w,w,w,B.fc,w,w,w),B.aA],t)
for(x=0;x<10;++x)t.push(this.c68(d,x))
t.push(B.ak)
t.push(A.c("Practice with pretend money. Signals and lessons are for learning; markets can always surprise.",w,w,w,w,w,w,A.l(w,w,d.a?C.dj:C.dk,w,w,w,w,w,w,w,w,11,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),B.K,w,w))
return A.cn(t,w,w,C.aob,w,w,B.ah,!1)},
c68(d,e){var x,w,v,u=null,t=C.E7[e],s=this.gJW().q(0,t.a),r=d.a,q=r?B.c.j(0.92):C.kY,p=A.m(20),o=A.K(r?B.c:C.uR,B.r,1),n=A.a([new A.ab(0,B.H,d.ga9z(),B.hR,14)],y.V),m=A.m(15)
m=A.o(u,A.W(t.e,B.c,u,u,u,u),B.f,u,u,new A.n(t.f,u,u,m,u,u,B.m),u,46,u,u,u,u,u,46)
x=A.c("Lesson "+(e+1)+" \xb7 "+t.d+" min",u,u,u,u,u,u,A.l(u,u,r?C.dj:C.dk,u,u,u,u,u,u,u,u,11,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)
w=A.c(t.b,u,u,u,u,u,u,A.l(u,u,r?C.dE:B.c,u,u,u,u,u,u,u,u,15,u,u,B.F,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)
v=y.p
w=A.E(A.x(A.a([x,w,A.c(t.c,u,u,u,u,u,u,A.l(u,u,r?C.dj:C.dk,u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],v),B.B,u,B.e,B.h,0,B.p),1)
x=s?B.ea:B.eM
if(s)r=C.dS
else r=r?C.dj:C.dk
return A.ay(u,A.o(u,A.A(A.a([m,B.bb,w,A.W(x,r,u,u,u,u)],v),B.l,u,B.e,B.h,0,u,u),B.f,u,u,new A.n(q,u,o,p,n,u,B.m),u,u,u,B.d4,B.bG,u,u,u),B.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new D.eGi(this,t),u,u,u,u,u,u,!1,B.a4)},
clv(d){var x=this.c
x.toString
A.a8(x,!1).cb(A.ea(new D.eGE(this,d),!1,null,y.H))},
c6H(c1,c2){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6=this,b7=null,b8="reading",b9="rsi",c0=b6.gcEb()
if(c0==null)return A.c("Live example appears once the markets have loaded.",b7,b7,b7,b7,b7,b7,A.l(b7,b7,c1.a?C.dj:C.dk,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,!0,b7,b7,b7,b7,b7,b7,b7,b7),b7,b7,b7)
x=J.a2(c0)
w=J.k(x.h(c0,"asset"))
v=D.aRp(c0)
u=D.h5(x.h(c0,b8))
t=D.f3(x.h(c0,"price"))
s=new D.eGn(v,c1,t)
r=new D.eGv(c1)
switch(c2){case"basics":q=v.length!==0?D.f3(J.t(B.d.gH(v),"c")):t
p=q===0?50:50*t/q
x=r.$1("Right now "+w+" is "+D.ic(t,!0,!1)+". About 4 hours ago it was "+D.ic(q,!0,!1)+".")
o=D.ic(p,!0,!1)
n=p>=50?"a win of":"a loss of"
return A.x(A.a([x,B.P,r.$1("If you had put $50 into "+w+" then, it would be worth "+o+" now: "+n+" "+D.ic(Math.abs(p-50),!0,!1)+". That difference is your profit or loss.")],y.p),B.B,b7,B.e,B.h,0,B.p)
case"candles":m=v.length!==0?B.d.gal(v):A.S(y.N,y.z)
x=J.a2(m)
o=D.f3(x.h(m,"c"))
n=D.f3(x.h(m,"o"))
l=s.$2$last$lines(24,!1)
k=D.ic(D.f3(x.h(m,"o")),!0,!1)
j=D.ic(D.f3(x.h(m,"c")),!0,!1)
o=o>=n?"GREEN: buyers won those 5 minutes":"YELLOW: sellers won those 5 minutes"
return A.x(A.a([l,B.P,r.$1("The last finished "+w+" candle opened at "+k+" and closed at "+j+", so it is "+o+". Its high was "+D.ic(D.f3(x.h(m,"h")),!0,!1)+" and its low "+D.ic(D.f3(x.h(m,"l")),!0,!1)+".")],y.p),B.B,b7,B.e,B.h,0,B.p)
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
return A.x(A.a([x,B.P,r.$1(w+" is "+o.toUpperCase()+" right now. Across the markets:"+n+" bullish, "+l+" bearish, "+k+" sideways.")],y.p),B.B,b7,B.e,B.h,0,B.p)
case"ma":f=D.f3(x.h(c0,"fast"))
e=D.f3(x.h(c0,"slow"))
x=s.$0()
o=D.ic(f,!0,!1)
n=D.ic(e,!0,!1)
l=f>=e
k=l?"ABOVE":"BELOW"
l=l?"UP":"DOWN"
return A.x(A.a([x,B.P,r.$1("On "+w+" the pink fast line is at "+o+" and the purple slow line at "+n+". The fast line is "+k+" the slow line, so the short-term trend is "+l+".")],y.p),B.B,b7,B.e,B.h,0,B.p)
case"cross":x=b6.gyz()
o=A.T(x)
n=o.k("cM<1,@>")
d=A.B(new A.cM(new A.X(x,new D.eGo(),o.k("X<1>")),new D.eGp(),n),n.k("M.E"))
x=b6.gyz()
o=A.T(x)
n=o.k("cM<1,@>")
a0=A.B(new A.cM(new A.X(x,new D.eGq(),o.k("X<1>")),new D.eGr(),n),n.k("M.E"))
x=s.$0()
if(d.length!==0)o="Fresh BUY crosses right now: "+B.d.aM(d,", ")+". On its next automatic check the agent would buy the strongest of these if it holds nothing."
else o="No fresh buy cross in any open market right now. "+(a0.length!==0?"Fresh sell crosses: "+B.d.aM(a0,", ")+". ":"")+"The agent simply waits; no signal means no trade."
return A.x(A.a([x,B.P,r.$1(o)],y.p),B.B,b7,B.e,B.h,0,B.p)
case"rsi":x=b6.gyz()
o=A.T(x).k("X<1>")
a1=A.B(new A.X(x,new D.eGs(),o),o.k("M.E"))
x=y.p
o=A.a([],x)
for(n=a1.length,l=c1.a,k=y.N,j=y.z,a2=y.f,a3=y.c,h=0;h<a1.length;a1.length===n||(0,A.I)(a1),++h){a4=a1[h]
a5=J.a2(a4)
a6=J.k(a5.h(a4,"asset"))
a7=l?C.dE:B.c
a6=A.c(a6,b7,b7,b7,b7,b7,b7,new A.F(!0,a7,b7,b7,b7,b7,12,B.F,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7),b7,b7,b7)
a7=new A.aP(9,9)
a8=a5.h(a4,b8)
a8=(a2.b(a8)?A.a1(a8,k,j):A.S(k,j)).h(0,b9)
if(!(typeof a8=="number")){a8=A.cG(A.v(a8==null?"":a8))
if(a8==null)a8=0}a9=l?C.H1:C.GR
b0=a5.h(a4,b8)
b0=(a2.b(b0)?A.a1(b0,k,j):A.S(k,j)).h(0,b9)
if(!(typeof b0=="number")){b0=A.cG(A.v(b0==null?"":b0))
if(b0==null)b0=0}if(b0>=70)b0=C.eF
else{b0=a5.h(a4,b8)
b0=(a2.b(b0)?A.a1(b0,k,j):A.S(k,j)).h(0,b9)
if(!(typeof b0=="number")){b0=A.cG(A.v(b0==null?"":b0))
if(b0==null)b0=0}b0=b0<=30?B.cD:C.dS}b0=A.jt(a9,b7,b7,8,b7,a8/100,new A.lc(b0,a3))
a5=a5.h(a4,b8)
a5=(a2.b(a5)?A.a1(a5,k,j):A.S(k,j)).h(0,b9)
if(!(typeof a5=="number")){a5=A.cG(A.v(a5==null?"":a5))
if(a5==null)a5=0}a5=B.i.aa(a5,0)
a8=l?C.dE:B.c
o.push(new A.D(B.cy,new A.c3(B.aL,B.e,B.h,B.l,b7,B.p,b7,0,A.a([new A.a6(70,b7,a6,b7),new A.bx(1,B.ba,new A.n6(new A.bb(a7,a7,a7,a7),B.aq,b0,b7),b7),B.aa,new A.a6(26,b7,A.c(a5,b7,b7,b7,b7,b7,b7,new A.F(!0,a8,b7,b7,b7,b7,12,B.F,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7),b7,b7,b7),b7)],x),b7),b7))}o.push(r.$1("Red bars are above 70 (stretched), blue below 30 (oversold), green in between (healthy)."))
return A.x(o,B.B,b7,B.e,B.h,0,B.p)
case"risk":b1=t===0?0:50/t
x=r.$1("If the agent bought "+w+" right now at "+D.ic(t,!0,!1)+":")
return A.x(A.a([x,B.ak,r.$1("- $50 buys "+B.i.aa(b1,b1<0.01?6:4)+" "+w),r.$1("- Take profit at "+D.ic(t*1.03,!0,!1)+": you get back about $51.50 (+$1.50)"),r.$1("- Stop loss at "+D.ic(t*0.985,!0,!1)+": you get back about $49.25 (-$0.75)"),B.ak,r.$1("Win 1 and lose 2 of 3 trades: +1.50 - 0.75 - 0.75 = $0.00. That is break even.")],y.p),B.B,b7,B.e,B.h,0,B.p)
case"brakes":x=b6.e
if(x==null)return r.$1('Try it yourself: before your next practice day, write down "I stop after losing $10 today". If three trades in a row lose, close the app and come back tomorrow. That is exactly what the agent does.')
b2=D.h5(J.t(x,"state"))
x=b6.e
x=D.ic(D.f3(D.h5(x==null?b7:J.t(x,"today")).h(0,"day_pnl")),!0,!0)
o=D.ic(D.f3(b2.h(0,"totalPnl")),!0,!0)
n=J.z(b2.h(0,"brakePaused"),!0)?"The brake is ON right now.":"Both brakes are off, it can keep trading."
return r.$1("Today the agent is at "+x+" (the daily stop is -$10) and "+o+" all time (the brake is -$25). "+n)
case"hours":if(b6.f!=null)b3=b6.fx
else{x=b6.e
b3=J.z(D.h5(x==null?b7:J.t(x,"market")).h(0,"stockOpen"),!0)}b4=B.d.aS(b6.ay,new D.eGt())
x=b3?"OPEN":"CLOSED"
o=b4?"OPEN":"CLOSED"
return r.$1("Right now the US stock market is "+x+", the forex market is "+o+", and crypto is open, as always.")
case"practice":x=b6.e
if(x==null){x=b6.gaaj()
return r.$1("Right now "+new A.X(x,new D.eGu(),A.T(x).k("X<1>")).gJ(0)+" of "+b6.gaaj().length+" markets have signals that worked at least half the time lately. That is why a journal and many trades matter: some markets suit a method, others do not.")}b5=D.h5(J.t(x,"record"))
x=b5.h(0,"trades")
x=A.v(x==null?0:x)
o=b5.h(0,"wins")
o=A.v(o==null?0:o)
n=b5.h(0,"losses")
return r.$1("The agent journal so far: "+x+" finished pretend trades, "+o+" wins and "+A.v(n==null?0:n)+" losses. Keep watching until there are at least 20 before judging it.")}return B.bL},
cDg(a5){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,a0="asset",a1=B.a.i(e.ch),a2=e.gaaj(),a3=A.T(a2).k("X<1>"),a4=A.B(new A.X(a2,new D.eGM(e,a1.toLowerCase()),a3),a3.k("M.E"))
B.d.b_(a4,new D.eGN(e))
x=new D.eGV()
a1=A.T(a4).k("X<1>")
w=new A.X(a4,new D.eGO(x),a1).gJ(0)
v=new A.X(a4,new D.eGP(x),a1).gJ(0)
a1=a4.length
if(e.r==null)u=0
else{t=Date.now()
s=e.r
s.toString
u=B.o.ap(new A.V(t,0,!1).bz(s).a,1e6)}if(u<20)r="just now"
else r=u<60?""+u+" s ago":""+B.o.ap(u,60)+" min ago"
t=y.p
s=A.a([],t)
for(q=a5.a,p=0;p<4;++p){o=C.d6i[p]
if(e.cx===o)n=q?C.l_:B.c
else n=q?B.c.j(0.92):C.kY
m=new A.aP(999,999)
l=new A.av(q?C.qB:C.qy,1,B.r,-1)
k=o==="All"?"All "+a2.length:o+" "+new A.X(a2,new D.eGQ(o),a3).gJ(0)
if(e.cx===o)j=q?B.c:C.l_
else j=q?C.dE:B.c
B.d.u(s,A.a([A.ay(d,A.o(d,A.c(k,d,d,d,d,d,d,new A.F(!0,j,d,d,d,d,12,B.F,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d),d,d,d),B.f,d,d,new A.n(n,d,new A.bE(l,l,l,l),new A.bb(m,m,m,m),d,d,B.m),d,d,d,d,C.bGi,d,d,d),B.y,!1,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,new D.eGR(e,o),d,d,d,d,d,d,!1,B.a4),B.bf],t))}a3=A.E(A.ca(A.A(s,B.l,d,B.e,B.h,0,d,d),B.t,d,B.y,d,d,d,d,d,B.aL),1)
s=e.CW?B.cA:B.eN
s=A.a([A.A(A.a([a3,B.bf,e.b34(a5,s,new D.eGS(e))],t),B.l,d,B.e,B.h,0,d,d)],t)
if(e.CW){a3=A.l(d,d,q?C.dE:B.c,d,d,d,d,d,d,d,d,d,d,d,d,d,d,!0,d,d,d,d,d,d,d,d)
n=A.l(d,d,q?C.dj:C.dk,d,d,d,d,d,d,d,d,13,d,d,d,d,d,!0,d,d,d,d,d,d,d,d)
m=A.W(B.eN,q?C.dj:C.dk,d,d,d,d)
k=q?B.c.j(0.92):C.kY
j=A.m(999)
i=q?C.qB:C.qy
h=A.m(999)
g=q?C.qB:C.qy
B.d.u(s,A.a([B.S,A.aN(d,B.Z,!0,d,!0,B.t,d,A.aO(),e.cy,d,d,d,d,d,2,A.bB(d,new A.b6(4,j,new A.av(i,1,B.r,-1)),d,B.f8,d,d,d,d,!0,new A.b6(4,h,new A.av(g,1,B.r,-1)),d,d,d,d,d,k,!0,d,d,d,d,d,d,d,d,d,d,d,d,d,n,"Search a market, for example EUR/USD, GBP or Bitcoin",d,d,d,d,d,d,d,d,d,!0,!0,!1,d,m,d,d,d,d,d,d,d,d,d,d,d,d),B.y,!0,d,!0,d,!1,d,B.al,d,d,d,d,d,d,d,d,d,1,d,d,!1,"\u2022",d,new D.eGT(e),d,d,d,!1,d,d,!1,d,!0,d,B.ae,d,d,d,d,d,d,d,d,d,d,d,a3,!0,B.a7,d,B.ao,d,d,d,d)],t))}s.push(B.af)
s.push(e.bG3(a5))
s.push(A.A(A.a([A.E(e.av0(a5,"Going up",w,C.dS,B.ng),1),B.aa,A.E(e.av0(a5,"Going down",v,C.eF,B.a4N),1),B.aa,A.E(e.av0(a5,"No direction",a1-w-v,B.jQ,C.asu),1)],t),B.l,d,B.e,B.h,0,d,d))
s.push(B.P)
s.push(A.A(A.a([C.c_T,B.e5,new A.d2(1,B.cg,A.c("Live \xb7 updated "+r+" \xb7 checks every 20 seconds, changes are flagged at once",d,d,d,d,d,d,A.l(d,d,q?C.dj:C.dk,d,d,d,d,d,d,d,d,11,d,d,d,d,d,!0,d,d,d,d,d,d,d,d),B.K,d,d),d)],t),B.l,d,B.b9,B.h,0,d,d))
a1=e.cx
if(a1==="All"||a1==="Forex"){a1=B.jQ.j(0.12)
a3=A.m(16)
n=A.K(B.jQ.j(0.45),B.r,1)
B.d.u(s,A.a([B.S,A.o(d,A.c('Forex uses real market prices on 1-minute candles. OTC pairs at a broker are priced by that broker (always on weekends) and can move differently, and the payout % is the broker\'s. "Worked" shows how often past moves on this pair really went that way: under 50% means the signal has been worse than a coin flip, so do not trust it.',d,d,d,d,d,d,A.l(d,d,q?C.dE:B.c,d,d,d,d,d,d,d,d,11.8,d,d,d,d,1.35,!0,d,d,d,d,d,d,d,d),d,d,d),B.f,d,d,new A.n(a1,d,n,a3,d,d,B.m),d,d,d,d,B.bl,d,d,d)],t))}s.push(B.af)
if(a2.length===0)s.push(A.c("Loading the markets...",d,d,d,d,d,d,A.l(d,d,q?C.dj:C.dk,d,d,d,d,d,d,d,d,d,d,d,d,d,d,!0,d,d,d,d,d,d,d,d),d,d,d))
if(a2.length!==0&&a4.length===0){a1=e.ch
s.push(A.as(A.c('No market matches "'+a1+'".',d,d,d,d,d,d,A.l(d,d,q?C.dj:C.dk,d,d,d,d,d,d,d,d,d,d,d,d,d,d,!0,d,d,d,d,d,d,d,d),d,d,d),d,d,d))}for(a1=a4.length,a3=e.dx,p=0;p<a4.length;a4.length===a1||(0,A.I)(a4),++p){f=a4[p]
t=J.a2(f)
if(a3.h(0,t.h(f,a0))==null)t=d
else t=a3.h(0,t.h(f,a0)).c==="no direction"?"JUST LOST ITS DIRECTION":"JUST TURNED "+a3.h(0,t.h(f,a0)).c.toUpperCase()
s.push(D.hHj(a5,f,t,!1,new D.eGU(e,f)))}s.push(A.c("Signals are estimates from recent price history. They can fail; never risk money you cannot afford to lose.",d,d,d,d,d,d,A.l(d,d,q?C.dj:C.dk,d,d,d,d,d,d,d,d,11,d,d,d,d,d,!0,d,d,d,d,d,d,d,d),B.K,d,d))
return A.PK(A.cn(s,d,d,C.aob,d,d,B.ah,!1),d,e.gcg9())},
bG3(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=new A.X(C.E7,new D.eG3(i),y.E).gJ(0),f=i.z||i.y
if(!f)x=new A.b7([B.jC,B.b2,"Signal alerts unlock when you finish all 10 lessons ("+g+" of 10 done). You will be told the market, ENTER UP or DOWN, and the duration.","Go to lessons"])
else x=!i.Q?C.fk9:C.fiY
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
l=A.a([l,B.ar,A.E(A.c(t,h,h,h,h,h,h,A.l(h,h,d.a?C.dE:B.c,h,h,h,h,h,h,h,h,12,h,h,h,h,1.35,!0,h,h,h,h,h,h,h,h),h,h,h),1)],k)
if(s!=null){j=A.bn(u,h,h,h,h,h,B.f2,h,h,h,h,h)
B.d.u(l,A.a([B.aa,A.bI(A.c(s,h,h,h,h,h,h,B.pi,h,h,h),h,new D.eG4(i,f),j)],k))}return A.o(h,A.A(l,B.l,h,B.e,B.h,0,h,h),B.f,h,h,new A.n(w,h,m,n,h,h,B.m),h,h,h,B.e9,B.bl,h,h,h)},
av0(d,e,f,g,h){var x=null,w=A.m(18),v=A.a([g.j(0.2),g.j(0.05)],y.O),u=A.K(g.j(0.35),B.r,1),t=A.W(h,g,x,x,x,20),s=d.a,r=A.c(""+f,x,x,x,x,x,x,A.l(x,x,s?C.dE:B.c,x,x,x,x,x,x,x,x,22,x,x,B.u,x,x,!0,x,x,x,x,x,x,x,x),x,x,x)
return A.o(x,A.x(A.a([t,B.at,r,A.c(e,x,x,x,x,x,x,A.l(x,x,s?C.dj:C.dk,x,x,x,x,x,x,x,x,11.5,x,x,B.O,x,x,!0,x,x,x,x,x,x,x,x),x,x,x)],y.p),B.B,x,B.e,B.h,0,B.p),B.f,x,x,new A.n(x,x,u,w,x,new A.a7(B.a5,B.a9,B.x,v,x,x),B.m),x,x,x,x,B.bl,x,x,x)},
bHp(d){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=y.p,i=A.a([],j)
if($.Dw.length===0){x=d.a
w=x?B.c.j(0.92):C.kY
v=A.m(22)
u=A.K(x?B.c:C.uR,B.r,1)
t=A.o(k,C.c0Q,B.f,k,k,B.agq,k,40,k,k,k,k,k,40)
t=A.A(A.a([t,B.ar,A.E(A.c("Your trading tutor",k,k,k,k,k,k,A.l(k,k,x?C.dE:B.c,k,k,k,k,k,k,k,k,16,k,k,B.F,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),1)],j),B.l,k,B.e,B.h,0,k,k)
w=A.o(k,A.x(A.a([t,B.P,A.c("Ask anything about trading. The tutor sees the same live prices and readings as the agent, so it can explain what each market is doing right now.",k,k,k,k,k,k,A.l(k,k,x?C.dj:C.dk,k,k,k,k,k,k,k,k,12.5,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),k,k,k)],j),B.B,k,B.e,B.h,0,B.p),B.f,k,k,new A.n(w,k,u,v,k,k,B.m),k,k,k,k,B.bQ,k,k,k)
v=A.a([],j)
for(s=0;s<6;++s){r=C.dcs[s]
u=x?C.dE:B.c
u=A.c(r,k,k,k,k,k,k,new A.F(!0,u,k,k,k,k,12,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k),k,k,k)
t=x?B.c.j(0.92):C.kY
q=x?C.qB:C.qy
p=new A.aP(999,999)
v.push(A.mF(k,t,u,k,new D.eG5(l,r),k,new A.ba(new A.bb(p,p,p,p),B.a1),new A.av(q,1,B.r,-1),k))}B.d.u(i,A.a([w,B.af,A.bZ(B.bI,v,B.br,k,8,8)],j))}for(x=$.Dw.length,w=d.a,s=0;s<$.Dw.length;$.Dw.length===x||(0,A.I)($.Dw),++s){o=$.Dw[s]
v=o.a
u=v?B.a9:B.a5
if(v)t=w?C.l_:B.c
else t=w?B.c.j(0.92):C.kY
q=v?18:4
p=v?4:18
if(v)n=k
else{m=new A.av(w?B.c:C.uR,1,B.r,-1)
n=new A.bE(m,m,m,m)}if(v)v=w?B.c:C.l_
else v=w?C.dE:B.c
i.push(new A.bK(u,k,k,A.o(k,A.AA(o.b,new A.F(!0,v,k,k,k,k,13.5,k,k,k,k,k,1.4,k,k,k,k,k,k,k,k,k,k,k,k,k),k),B.f,k,E.ag1,new A.n(t,k,n,new A.bb(B.i5,B.i5,new A.aP(q,q),new A.aP(p,p)),k,k,B.m),k,k,k,B.jg,B.hy,k,k,k),k))}if($.ah1){x=w?B.c.j(0.92):C.kY
v=A.m(18)
i.push(new A.bK(B.a5,k,k,A.o(k,A.A(A.a([B.ac2,B.aa,A.c("Reading the markets...",k,k,k,k,k,k,A.l(k,k,w?C.dj:C.dk,k,k,k,k,k,k,k,k,12.5,k,k,k,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)],j),B.l,k,B.e,B.M,0,k,k),B.f,k,k,new A.n(x,k,k,v,k,k,B.m),k,k,k,B.hx,B.hy,k,k,k),k))}i=A.E(A.cn(i,l.ax,k,C.bHw,k,k,B.ah,!1),1)
x=A.l(k,k,w?C.dE:B.c,k,k,k,k,k,k,k,k,k,k,k,k,k,k,!0,k,k,k,k,k,k,k,k)
v=A.l(k,k,w?C.dj:C.dk,k,k,k,k,k,k,k,k,k,k,k,k,k,k,!0,k,k,k,k,k,k,k,k)
u=w?B.c.j(0.92):C.kY
t=A.m(999)
q=w?C.qB:C.qy
p=A.m(999)
n=w?C.qB:C.qy
x=A.E(A.aN(k,B.Z,!1,k,!0,B.t,k,A.aO(),l.at,k,k,k,k,k,2,A.bB(k,new A.b6(4,t,new A.av(q,1,B.r,-1)),k,B.zp,k,k,k,k,!0,new A.b6(4,p,new A.av(n,1,B.r,-1)),k,k,k,k,k,u,!0,k,k,k,k,k,k,k,k,k,k,k,k,k,v,"Ask about trading or a market...",k,k,k,k,k,k,k,k,k,!0,!0,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k),B.y,!0,k,!0,k,!1,k,B.al,k,k,k,k,k,k,k,k,k,4,1,k,!1,"\u2022",k,k,k,l.gcg7(),k,!1,k,k,!1,k,!0,k,B.ae,k,k,k,k,k,k,k,k,k,k,k,x,!0,B.a7,k,B.ao,k,B.acp,k,k),1)
v=w?C.l_:B.c
u=$.ah1?k:new D.eG6(l)
return A.x(A.a([i,A.o(k,A.A(A.a([x,B.aa,A.aF(!1,B.a3,!0,k,A.aM(!1,k,!0,new A.a6(48,48,A.W(B.pO,w?B.c:C.l_,k,k,k,k),k),B.cK,!0,k,k,k,k,k,k,k,k,k,k,k,u,k,k,k,k,k,k,k),B.f,v,0,k,k,B.cK,k,k,B.ai)],j),B.l,k,B.e,B.h,0,k,k),B.f,k,k,k,k,k,k,k,B.HD,k,k,k)],j),B.l,k,B.e,B.h,0,B.p)}}
D.a0y.prototype={
S(){var x=y.S
return new D.bkP(A.S(x,x))},
cYI(d){return this.e.$0()},
d0q(d){return this.x.$1(d)},
rr(){return this.y.$0()},
cZZ(d){return this.z.$1(d)},
gd2(d){return this.w}}
D.bkP.prototype={
Z(){var x,w,v,u,t,s,r,q,p,o=this
o.a4()
x=C.dLk.h(0,o.a.c.a)
o.d=x==null?o.a.c.x:x
w=o.a.w
v=new D.duq()
u=new D.duo()
x=v.$1(w.h(0,"slots"))
t=A.T(x).k("X<1>")
x=A.B(new A.X(x,new D.dum(o),t),t.k("M.E"))
o.e=x
x=x.length
t=o.d.length
if(x!==Math.min(10,t)){x=y.S
s=J.e0(t,x)
for(r=0;r<t;++r)s[r]=r
B.d.dU(s,B.cS)
o.e=A.cS(s,0,A.dy(Math.min(10,o.d.length),"count",x),A.T(s).c).dm(0)}x=v.$1(w.h(0,"right"))
o.f=A.ju(x,A.T(x).c)
o.r=u.$1(w.h(0,"tries"))
o.w=u.$1(w.h(0,"locks"))
o.x=v.$1(w.h(0,"used"))
for(x=o.e,t=x.length,q=0;q<x.length;x.length===t||(0,A.I)(x),++q){p=x[q]
if(!B.d.q(o.x,p))B.d.I(o.x,p)}o.bbh(!1)
o.z=A.d5(B.fB,new D.dun(o))},
t(){var x=this.z
if(x!=null)x.a1(0)
this.a2()},
b36(){var x,w,v,u,t,s,r=this,q=r.a
q.toString
x=r.e
x===$&&A.d()
w=r.f
w===$&&A.d()
w=A.B(w,A.a5(w).k("ci.E"))
v=r.r
v===$&&A.d()
u=y.N
t=y.S
v=v.iZ(v,new D.due(),u,t)
s=r.w
s===$&&A.d()
t=s.iZ(s,new D.duf(),u,t)
s=r.x
s===$&&A.d()
return q.d0q(A.J(["slots",x,"right",w,"tries",v,"locks",t,"used",s],u,y.z))},
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
r=A.B(new A.X(t,new D.dug(o),x),x.k("M.E"))
if(r.length!==0)q=r
else{u=o.d.length
t=A.a(new Array(u),l)
for(s=0;s<u;++s)t[s]=s
x=A.T(t).k("X<1>")
q=A.B(new A.X(t,new D.duh(o),x),x.k("M.E"))}x=q.length
if(x===0)p=w
else p=q[B.cS.aw(x)]
o.w.W(0,w)
x=o.r
x===$&&A.d()
x.W(0,w)
m.W(0,w)
o.e[j]=p
x=o.x
x===$&&A.d()
if(!B.d.q(x,p))B.d.I(o.x,p)
k=!0}++j}if(k&&d)o.b36()},
cFX(){return this.bbh(!0)},
cmx(d){var x,w,v,u,t=this.d
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
cg6(d,e){var x=this,w=x.f
w===$&&A.d()
if(!w.q(0,d)){w=x.w
w===$&&A.d()
w=w.am(0,d)}else w=!0
if(w)return
x.l(new D.duc(x,e,d))
x.b36()},
B(d){var x,w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=A.O(d).ax.a===B.dd,j=new D.a1u(k),i=m.a.c,h=m.e
h===$&&A.d()
x=m.f
x===$&&A.d()
w=new A.X(h,x.gjB(x),A.T(h).k("X<1>")).gJ(0)
v=w===m.e.length
h=k?C.yK:C.yI
x=k?C.yK:C.yI
u=k?C.a_A:C.a_q
t=y.O
u=A.a([x,u],t)
x=A.aH(l,l,l,l,A.W(B.eH,k?C.dE:B.c,l,l,l,18),l,l,l,new D.dui(d),l,l,l,l,l,l)
s=m.a.d
r=y.p
s=A.A(A.a([x,B.aY,A.c("Lesson "+s+" of 10",l,l,l,l,l,l,A.l(l,l,k?C.dj:C.dk,l,l,l,l,l,l,l,l,12,l,l,B.O,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)],r),B.l,l,B.e,B.h,0,l,l)
x=A.m(24)
q=i.f
p=A.ap(q,B.v,0.35)
p.toString
t=A.a([q,p],t)
p=B.c.j(0.2)
q=A.m(16)
t=A.a([s,A.o(l,A.A(A.a([A.o(l,A.W(i.e,B.c,l,l,l,28),B.f,l,l,new A.n(p,l,l,q,l,l,B.m),l,52,l,l,l,l,l,52),B.ev,A.E(A.x(A.a([A.c(i.b,l,l,l,l,l,l,B.fO,l,l,l),A.c(i.c+" \xb7 "+i.d+" min",l,l,l,l,l,l,B.nt,l,l,l)],r),B.B,l,B.e,B.h,0,B.p),1)],r),B.l,l,B.e,B.h,0,l,l),B.f,l,l,new A.n(l,l,l,x,l,new A.a7(B.a5,B.a9,B.x,t,l,l),B.m),l,l,l,l,B.fc,l,l,l),B.aA],r)
for(x=i.w,o=0;o<4;++o){s=x[o]
q=k?C.dE:B.c
q=A.c(s.a,l,l,l,l,l,l,new A.F(!0,q,l,l,l,l,16,B.F,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l),l,l,l)
p=k?C.dE:B.c
B.d.u(t,A.a([q,B.at,A.c(s.b,l,l,l,l,l,l,new A.F(!0,p,l,l,l,l,14,l,l,l,l,l,1.5,l,l,l,l,l,l,l,l,l,l,l,l,l),l,l,l),B.aA],r))}x=k?B.c.j(0.92):C.kY
s=A.m(22)
q=A.K(C.dS.j(0.45),B.r,1.5)
t.push(A.o(l,A.x(A.a([A.A(A.a([C.bXn,B.bf,A.c("See it live right now",l,l,l,l,l,l,A.l(l,l,k?C.dE:B.c,l,l,l,l,l,l,l,l,14,l,l,B.F,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)],r),B.l,l,B.e,B.h,0,l,l),B.S,m.a.cYI(0)],r),B.B,l,B.e,B.h,0,B.p),B.f,l,l,new A.n(x,l,q,s,l,l,B.m),l,l,l,l,B.bG,l,l,l))
t.push(B.bx)
x=A.c("Quiz",l,l,l,l,l,l,A.l(l,l,k?C.dE:B.c,l,l,l,l,l,l,l,l,16,l,l,B.F,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)
s=""+w+" of "
q=m.e.length
if(v)p=C.dS
else p=k?C.dj:C.dk
t.push(A.A(A.a([x,B.aY,A.c(s+q+" right",l,l,l,l,l,l,A.l(l,l,p,l,l,l,l,l,l,l,l,12.5,l,l,B.F,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)],r),B.l,l,B.e,B.h,0,l,l))
t.push(B.ak)
p=A.m(9)
x=m.e.length
x=x===0?0:w/x
t.push(A.bu(p,A.jt(k?C.H1:C.GR,l,l,7,l,x,C.b5o),B.aq))
t.push(B.P)
x=m.a.f?"Admin: you can retry any question.":"Get all 10 right to finish. A wrong answer gets one more try; wrong twice and that question locks for 5 minutes, then a new question takes its place."
t.push(A.c(x,l,l,l,l,l,l,A.l(l,l,k?C.dj:C.dk,l,l,l,l,l,l,l,l,11.8,l,l,l,l,1.35,!0,l,l,l,l,l,l,l,l),l,l,l))
t.push(B.S)
for(n=0;x=m.e,n<x.length;++n)t.push(m.ctP(j,n,x[n]))
t.push(B.P)
x=k?C.dE:B.c
q=k?C.qB:C.qy
q=A.E(A.en(C.c34,l,C.fV3,new D.duj(m,i),A.dh(l,l,l,l,l,l,l,l,l,x,l,l,B.cm,l,new A.ba(A.m(999),B.a1),new A.av(q,1.5,B.r,-1),l,l,l,l)),1)
x=!v
if(!x||m.a.r)k=C.dS
else k=k?C.dj:C.dk
k=A.bn(k,l,l,l,l,l,B.cm,l,new A.ba(A.m(999),B.a1),l,l,l)
p=!x||m.a.r?new D.duk(m,d):l
t.push(A.A(A.a([q,B.ar,A.E(A.da(N.R_,l,A.c(!x||m.a.r?"Finish lesson":s+m.e.length+" right",l,l,l,l,l,l,B.cc,l,l,l),p,k),1)],r),B.l,l,B.e,B.h,0,l,l))
return A.c5(l,h,A.o(l,A.bm(!0,A.cn(t,l,l,C.bHE,l,l,B.ah,!1),!0,!1,B.ag,!0,!0),B.f,l,l,new A.n(l,l,l,l,l,new A.a7(B.aX,B.b1,B.x,u,l,l),B.m),l,l,l,l,l,l,l,l),l,!1,!1,l,l)},
ctP(a7,a8,a9){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=this,a5=null,a6=a4.d
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
s=B.o.ap(a6,6e7)
r=B.a.b1(B.o.v(B.o.F(B.o.ap(a6,1e6),60)),2,"0")
a6=a7.a
q=a6?C.Hb:C.Hc
p=A.m(20)
o=A.K(C.eF.j(0.4),B.r,1)
n=A.c("Question "+(a8+1)+" is locked",a5,a5,a5,a5,a5,a5,A.l(a5,a5,a6?C.dE:B.c,a5,a5,a5,a5,a5,a5,a5,a5,14,a5,a5,B.F,a5,a5,!0,a5,a5,a5,a5,a5,a5,a5,a5),a5,a5,a5)
m=y.p
return A.o(a5,A.A(A.a([C.c5b,B.ar,A.E(A.x(A.a([n,A.c("Wrong twice. Re-read the lesson; a new question appears in "+s+":"+r+".",a5,a5,a5,a5,a5,a5,A.l(a5,a5,a6?C.dj:C.dk,a5,a5,a5,a5,a5,a5,a5,a5,12.5,a5,a5,a5,a5,1.35,!0,a5,a5,a5,a5,a5,a5,a5,a5),a5,a5,a5)],m),B.B,a5,B.e,B.h,0,B.p),1)],m),B.l,a5,B.e,B.h,0,a5,a5),B.f,a5,a5,new A.n(q,a5,o,p,a5,a5,B.m),a5,a5,a5,B.d4,B.bG,a5,a5,a5)}a6=a7.a
q=a6?B.c.j(0.92):C.kY
p=A.m(20)
if(w)o=C.dS.j(0.6)
else o=a6?B.c:C.uR
o=A.K(o,B.r,w?1.5:1)
n=y.p
m=A.a([A.c(""+(a8+1)+". "+x.a,a5,a5,a5,a5,a5,a5,A.l(a5,a5,a6?C.dE:B.c,a5,a5,a5,a5,a5,a5,a5,a5,14,a5,a5,B.F,a5,a5,!0,a5,a5,a5,a5,a5,a5,a5,a5),a5,a5,a5),B.P],n)
for(l=a4.cmx(a9),k=l.length,j=!w,i=x.b,h=x.c,g=0;g<l.length;l.length===k||(0,A.I)(l),++g){f=l[g]
e=w?a5:new D.dud(a4,a9,f)
if(w&&f===h)d=C.dS.j(0.14)
else if(t===f)d=C.eF.j(0.12)
else d=a6?C.Hb:C.Hc
a0=new A.aP(14,14)
if(w&&f===h)a1=C.dS
else a1=t===f?C.eF:B.L
a2=new A.av(a1,1,B.r,-1)
a1=i[f]
a3=a6?C.dE:B.c
a1=A.a([new A.bx(1,B.ba,A.c(a1,a5,a5,a5,a5,a5,a5,new A.F(!0,a3,a5,a5,a5,a5,13.5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5),a5,a5,a5),a5)],n)
if(w&&f===h)a1.push(C.c0A)
if(j&&t===f)a1.push(C.c6z)
m.push(A.ay(a5,A.o(a5,new A.c3(B.aL,B.e,B.h,B.l,a5,B.p,a5,0,a1,a5),B.f,a5,a5,new A.n(d,a5,new A.bE(a2,a2,a2,a2),new A.bb(a0,a0,a0,a0),a5,a5,B.m),a5,a5,a5,B.eK,B.ez,a5,a5,a5),B.y,!1,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,e,a5,a5,a5,a5,a5,a5,!1,B.a4))}if(w)m.push(A.c("Right! "+x.d,a5,a5,a5,a5,a5,a5,C.fOY,a5,a5,a5))
else if(u===1&&!a4.a.f)m.push(C.fXP)
else if(u>=1)m.push(C.fVe)
return A.o(a5,A.x(m,B.B,a5,B.e,B.h,0,B.p),B.f,a5,a5,new A.n(q,a5,o,p,a5,a5,B.m),a5,a5,a5,B.d4,B.bG,a5,a5,a5)}}
D.aPf.prototype={
t(){var x=this,w=x.a9$
if(w!=null)w.a6(0,x.gbB())
x.a9$=null
x.a2()},
aX(){this.b7()
this.b5()
this.bC()}}
var z=a.updateTypes(["Q(uq)","aA<~>()","~()","XC(Z)","aA<~>(p)","p(a_x)","a0y(Z)"])
D.eG1.prototype={
$1(d){this.a.Bk(!0)
return null},
$S:11}
D.eFJ.prototype={
$1(d){var x=this.a.Q,w=x.f
if(w.length!==0){w=B.d.gd1(w).Q
w.toString
x.i9(B.i.D(Math.min(this.b*160-16,w),0,1/0))}},
$S:7}
D.eFA.prototype={
$0(){return this.a.z=this.b},
$S:0}
D.eFI.prototype={
$0(){return this.a.z=this.b},
$S:0}
D.eFL.prototype={
$0(){var x=this.a,w=x.f=!1,v=this.b,u=v==null
if(!u?J.z(J.t(v,"ok"),!0):w){x.d=v
x.ax=null}else{w=u?null:J.t(v,"error")
x.ax=J.k(w==null?"Could not reach the server. Pull down to try again.":w)
if(!J.z(u?null:J.t(v,"ownerOnly"),!0))w=J.z(u?null:J.t(v,"setupNeeded"),!0)
else w=!0
if(w)x.d=null}},
$S:0}
D.eFy.prototype={
$1(d){return A.a1(d,y.N,y.z)},
$S:25}
D.eFz.prototype={
$0(){var x,w,v=this,u=v.a
if(v.b){x=A.B(u.e,y.P)
w=v.c
B.d.u(x,w)}else{x=v.c
w=x}u.e=x
u.w=w.length>=100},
$S:0}
D.eFT.prototype={
$1(d){var x=null
return A.eh(A.a([A.bO(!1,B.dr,x,x,!0,x,x,x,new D.eFR(d),x,x),A.bI(C.hh9,x,new D.eFS(d),x)],y.p),x,x,x,C.fVb,x,x,x,x,C.fZk,x)},
$S:18}
D.eFR.prototype={
$0(){A.a8(this.a,!1).N(!1)
return null},
$S:0}
D.eFS.prototype={
$0(){A.a8(this.a,!1).N(!0)
return null},
$S:0}
D.eFU.prototype={
$0(){return this.a.r=!0},
$S:0}
D.eFV.prototype={
$0(){return this.a.r=!1},
$S:0}
D.eFH.prototype={
$1(d){var x=this.a,w=x.d
x.a.toString
return D.hyp(w,!1)},
$S:z+3}
D.eFN.prototype={
$0(){return this.a.r=!0},
$S:0}
D.eFO.prototype={
$0(){var x=this.a,w=x.r=!1,v=this.b
if(v!=null?J.z(J.t(v,"ok"),!0):w)x.d=v},
$S:0}
D.eFP.prototype={
$1(d){var x=this
return A.oI(new D.eFM(x.a,x.b,x.c,x.d),!1,0.8,0.95,0.25,!1,null)},
$S:139}
D.eFM.prototype={
$2(d,e){var x=this
return x.a.cyX(x.b,x.c,D.h5(J.t(x.d,"state")),e)},
$S:2335}
D.eFQ.prototype={
$2(d,e){return B.i.aQ(D.aHc(d),D.aHc(e))},
$S:40}
D.eG0.prototype={
$0(){return this.a.Bk(!0)},
$S:1}
D.eFY.prototype={
$0(){var x=this.a.c
x.toString
return A.VH(x)},
$S:0}
D.eFZ.prototype={
$0(){return this.a.Bk(!0)},
$S:0}
D.eFp.prototype={
$1(d){return J.z(J.t(d,"asset"),this.a)},
$S:4}
D.eFq.prototype={
$0(){var x=this.a
return x.length===0?this.b:B.d.gH(x)},
$S:206}
D.eFr.prototype={
$1(d){return J.z(J.t(d,"asset"),this.a.h(0,"symbol"))},
$S:4}
D.eFs.prototype={
$0(){return this.a},
$S:206}
D.eFX.prototype={
$1(d){var x,w,v,u,t,s,r,q,p,o,n,m=null,l=this.d,k=D.h5(J.t(this.c,"market")),j=k.h(0,"activeMarket"),i=j==null?m:J.k(j),h=J.z(k.h(0,"weekend"),!0)
if(l==null)x=m
else{l=l.h(0,"symbol")
x=l==null?m:J.k(l)}w=x!=null&&x!=="SPY"&&x!=="BTC/USD"
if(i==="SPY"){v="TRADING TODAY: SPY"
u="Weekday and the stock market is open. Only SPY can be bought. Bitcoin is traded on weekends only."}else if(i==="BTC/USD"){v="TRADING TODAY: BTC/USD"
u="Weekend. Only Bitcoin can be bought. SPY is traded on weekdays only."}else{u=h?"Bitcoin is traded on Saturday and Sunday.":"SPY is traded on weekdays while the stock market is open (9:30 AM to 4:00 PM ET). Bitcoin on weekends only."
v="NO MARKET TRADED RIGHT NOW"}l=i==null
t=l?B.jQ:C.dS
j=this.b.a
s=j?B.c.j(0.92):C.kY
r=A.m(22)
q=A.K(t.j(0.55),B.r,1)
p=y.p
o=A.a([],p)
if(!l)B.d.u(o,A.a([D.fuU(i,30),B.ar],p))
else B.d.u(o,A.a([A.W(B.vc,t,m,m,m,26),B.ar],p))
l=A.c(v,m,m,m,m,m,m,A.l(m,m,t,m,m,m,m,m,m,m,m,13.5,m,m,B.u,m,m,!0,m,0.3,m,m,m,m,m,m),m,m,m)
n=A.c(u,m,m,m,m,m,m,A.l(m,m,j?C.dE:B.c,m,m,m,m,m,m,m,m,12,m,m,m,m,1.3,!0,m,m,m,m,m,m,m,m),m,m,m)
l=A.a([l,B.cM,n,B.cM,A.c("Buys only when the fast line crosses up AND the big trend is rising (slow line higher than 1 hour ago, price above it).",m,m,m,m,m,m,A.l(m,m,j?C.dj:C.dk,m,m,m,m,m,m,m,m,11,m,m,m,m,1.3,!0,m,m,m,m,m,m,m,m),m,m,m)],p)
if(w)B.d.u(l,A.a([B.at,A.c("Still holding the earlier "+x+" pretend trade: the agent only checks its exits (every 5 minutes) and never buys "+x+" again.",m,m,m,m,m,m,C.fHa,m,m,m)],p))
o.push(A.E(A.x(l,B.B,m,B.e,B.h,0,B.p),1))
l=A.o(m,A.A(o,B.B,m,B.e,B.h,0,m,m),B.f,m,m,new A.n(s,m,q,r,m,m,B.m),m,m,m,m,B.bQ,m,m,m)
s=A.fr(m,m,j?B.c.j(0.92):C.kY,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,B.np,m,m,m,m,m,m)
return A.eE(m,B.L,A.aF(!1,B.a3,!0,m,A.x(A.a([l,B.S,A.bO(!1,A.c("Got it",m,m,m,m,m,m,A.l(m,m,j?C.dE:B.c,m,m,m,m,m,m,m,m,m,m,m,B.F,m,m,!0,m,m,m,m,m,m,m,m),m,m,m),m,m,!0,m,m,m,new D.eFW(d),m,s)],p),B.l,m,B.e,B.M,0,B.p),B.f,B.L,0,m,m,m,m,m,B.ai),m,m,m,B.zt,m,B.d7,m,m,m)},
$S:44}
D.eFW.prototype={
$0(){return A.a8(this.a,!1).e2()},
$S:0}
D.eFC.prototype={
$1(d){return J.z(J.t(d,"open"),!0)},
$S:4}
D.eFD.prototype={
$0(){var x=this
return x.a.cD9(x.b,x.c,x.d)},
$S:0}
D.eFE.prototype={
$1(d){return J.z(J.t(d,"asset"),J.t(this.a,"asset"))},
$S:4}
D.eFG.prototype={
$2(d,e){return B.ar},
$S:38}
D.eFF.prototype={
$2(d,a0){var x,w,v,u,t,s,r,q,p=this,o=null,n=p.b[a0],m=J.a2(n),l=J.k(m.h(n,"asset")),k=l===J.t(p.c,"asset"),j=D.f3(m.h(n,"changePct")),i=j>=0,h=D.aRp(n),g=p.d,f=J.z(g==null?o:g.h(0,"symbol"),l),e=J.z(D.h5(m.h(n,"reading")).h(0,"decision"),"ENTER")&&J.z(D.h5(m.h(n,"reading")).h(0,"dir"),"up")
g=p.a
x=p.e
w=x.a
v=w?B.c.j(0.92):C.kY
u=A.m(20)
if(k)t=D.fA1(l).c
else t=w?B.c:C.uR
t=A.K(t,B.r,k?2:1)
x=k?D.fA1(l).c.j(0.25):x.ga9z()
x=A.a([new A.ab(0,B.H,x,B.cz,k?18:12)],y.V)
s=D.fuU(l,20)
r=y.p
s=A.a([s,B.bf,A.E(A.c(l,o,1,B.a2,o,o,o,A.l(o,o,w?C.dE:B.c,o,o,o,o,o,o,o,o,12,o,o,B.F,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),1)],r)
if(!J.z(m.h(n,"open"),!0)){q=m.h(n,"offLabel")
q=J.k(q==null?"closed":q)
s.push(A.c(q,o,o,o,o,o,o,A.l(o,o,w?C.dj:C.dk,o,o,o,o,o,o,o,o,9.5,o,o,B.O,o,o,!0,o,o,o,o,o,o,o,o),o,o,o))}s=A.A(s,B.l,o,B.e,B.h,0,o,o)
m=D.ic(D.f3(m.h(n,"price")),!0,!1)
m=A.c(m,o,o,o,o,o,o,A.l(o,o,w?C.dE:B.c,o,o,o,o,o,o,o,o,17,o,o,B.O,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)
w=i?"+":""
q=B.i.aa(j,2)
w=A.a([A.c(w+q+"%",o,o,o,o,o,o,A.l(o,o,i?C.dS:C.eF,o,o,o,o,o,o,o,o,11,o,o,B.F,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),B.aY],r)
if(f)w.push(g.a0N("HOLDING",E.uF))
else if(e)w.push(g.a0N("BUY SIGNAL",C.dS))
w=A.A(w,B.l,o,B.e,B.h,0,o,o)
return A.ay(o,A.cU(o,A.x(A.a([s,B.ak,new A.dl(B.dx,B.a5,B.f,m,o),w,B.at,A.E(A.b4(o,o,o,new D.aKy(h,i?C.dS:C.eF,o),B.h2),1)],r),B.B,o,B.e,B.h,0,B.p),o,o,B.b_,new A.n(v,o,t,u,x,o,B.m),B.a3,o,o,o,o,B.anp,o,o,150),B.y,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,new D.eFB(g,l),o,o,o,o,o,o,!1,B.a4)},
$S:85}
D.eFB.prototype={
$0(){return this.a.a21(this.b)},
$S:0}
D.eFv.prototype={
$0(){var x=this.a
return x.l(new D.eFu(x,this.b))},
$S:0}
D.eFu.prototype={
$0(){return this.a.y=this.b},
$S:0}
D.eFw.prototype={
$0(){var x=this.a
return x.l(new D.eFt(x))},
$S:0}
D.eFt.prototype={
$0(){var x=this.a
return x.at=!x.at},
$S:0}
D.eFn.prototype={
$1(d){return J.z(J.t(d,"asset"),this.a.h(0,"symbol"))},
$S:4}
D.eFo.prototype={
$0(){return A.S(y.N,y.z)},
$S:206}
D.eFK.prototype={
$2(d,e){var x=null,w=e.b,v=A.ao(x,A.o(x,x,B.f,x,x,new A.n(x,x,x,A.m(99),x,C.ccl,B.m),x,8,x,x,x,x,x,x),x,x,0,0,9,x),u=this.a.a,t=A.ao(x,A.o(x,x,B.f,(u?C.dE:B.c).j(0.5),x,x,x,18,x,x,x,x,x,2),x,x,w/3-1,x,4,x),s=B.i.D(this.b*w-9,0,w-18)
return new A.a6(x,26,new A.an(B.a0,x,B.ad,B.f,A.a([v,t,A.ao(x,A.o(x,x,B.f,x,x,new A.n(B.c,x,A.K(u?C.dE:B.c,B.r,3),x,x,x,B.a6),x,18,x,x,x,x,x,18),x,x,s,x,4,x)],y.p),x),x)},
$S:128}
D.eFx.prototype={
$0(){return this.a.SK(!this.b)},
$S:0}
D.eG_.prototype={
$1(d){return A.a1(d,y.N,y.z)},
$S:25}
D.eFm.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
x=u.x&&u.w?2:4
break
case 2:x=5
return A.b(u.a_1(!0),$async$$0)
case 5:x=3
break
case 4:u.l(new D.eFl(u))
case 3:return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
D.eFl.prototype={
$0(){return this.a.x=!0},
$S:0}
D.cWz.prototype={
$0(){return this.a.d=this.b},
$S:0}
D.cWI.prototype={
$2(d,e){var x,w,v=null,u=e.b,t=this.a,s=t.a,r=s.c,q=s.d,p=s.e,o=s.f
s=s.r
x=t.d
w=d.L(y.D)
return A.ay(v,new A.a6(u,250,A.b4(v,v,v,new D.be8((w==null?B.CN:w).w.d,r,q,p,o,s,x,v),B.az),v),B.y,!1,v,v,v,v,v,new D.cWD(t),new D.cWE(t,u),new D.cWF(t,u),v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new D.cWG(t,u),new D.cWH(t),v,v,v,!1,B.a4)},
$S:37}
D.cWG.prototype={
$1(d){return this.a.aAw(d.b,this.b)},
$S:23}
D.cWE.prototype={
$1(d){return this.a.aAw(d.b,this.b)},
$S:47}
D.cWF.prototype={
$1(d){return this.a.aAw(d.b,this.b)},
$S:19}
D.cWD.prototype={
$1(d){var x=this.a
return x.l(new D.cWC(x))},
$S:36}
D.cWC.prototype={
$0(){return this.a.d=null},
$S:0}
D.cWH.prototype={
$1(d){return A.bM(B.fX,new D.cWB(this.a),y.b)},
$S:62}
D.cWB.prototype={
$0(){var x=this.a
if(x.c!=null)x.l(new D.cWA(x))},
$S:12}
D.cWA.prototype={
$0(){return this.a.d=null},
$S:0}
D.cWJ.prototype={
$1(d){var x=this.a
return x*d+x/2},
$S:159}
D.cWL.prototype={
$1(d){var x=this.b,w=this.a,v=w.a
return x-(d-v)/(w.b-v)*x},
$S:5}
D.cWK.prototype={
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
o.b=B.ac
o.c=2
o.d=B.bH
o.e=B.dP
p.e.af(m,o)},
$S:2336}
D.fgl.prototype={
$1(d){return D.f3(J.t(d,"c"))},
$S:2337}
D.fuV.prototype={
$1(d){var x=null,w=C.a8s.h(0,d),v=w.a,u=w.b,t=this.a,s=t*0.78,r=A.K(B.c,B.r,1.2)
return A.o(B.z,A.c(v,x,x,x,x,x,x,A.l(x,x,B.c,x,x,x,x,x,x,x,x,t*(v.length>1?0.26:0.36),x,x,B.u,x,x,!0,x,x,x,x,x,x,x,x),x,x,x),B.f,x,x,new A.n(u,x,r,x,x,x,B.a6),x,s,x,x,x,x,x,s)},
$S:138}
D.fAk.prototype={
$1(d){var x=y.N,w=y.z,v=A.a1(d,x,w)
w=A.dG(v,x,w)
w.n(0,"asset",v.h(0,"symbol"))
return w},
$S:25}
D.fEE.prototype={
$1(d){return A.a1(d,y.N,y.z)},
$S:25}
D.fBq.prototype={
$1(d){return","},
$S:60}
D.fIF.prototype={
$3(d,e,f){var x=A.bP3(d,e,1,0,0,0,0,0)
while(A.lF(x)!==7)x=x.bN(864e8)
return x.bN(A.du(7*(f-1),0,0,0,0,0).a)},
$S:2338}
D.fFv.prototype={
$1(d){return J.k(d)},
$S:15}
D.fFw.prototype={
$2(d,e){var x=null,w=e.b,v=A.ao(x,A.o(x,x,B.f,x,x,new A.n(x,x,x,A.m(9),x,C.caA,B.m),x,6,x,x,x,x,x,x),x,x,0,0,4,x),u=B.i.D(this.a/100*w-7,0,w-14)
return new A.a6(x,14,new A.an(B.a0,x,B.ad,B.f,A.a([v,A.ao(x,A.o(x,x,B.f,x,x,new A.n(B.c,x,A.K(this.b.a?C.dE:B.c,B.r,2.5),x,x,x,B.a6),x,14,x,x,x,x,x,14),x,x,u,x,0,x)],y.p),x),x)},
$S:128}
D.dhT.prototype={
$1(d){var x=this.a
if(x.c!=null)x.l(new D.dhS())},
$S:11}
D.dhS.prototype={
$0(){},
$S:0}
D.fvK.prototype={
$1(d){return J.k(d)},
$S:15}
D.eGb.prototype={
$1(d){return J.k(d)},
$S:15}
D.eH3.prototype={
$0(){return this.a.l(new D.eH2())},
$S:0}
D.eH2.prototype={
$0(){},
$S:0}
D.eH4.prototype={
$0(){return $.hj4=this.a.at.a.a},
$S:0}
D.eH5.prototype={
$1(d){var x=this.a
if(x.c!=null)x.l(new D.eH1(x,d))},
$S:207}
D.eH1.prototype={
$0(){return this.a.Q=this.b},
$S:0}
D.eH6.prototype={
$1(d){this.a.Rb()
return null},
$S:11}
D.eGZ.prototype={
$1(d){var x=y.N,w=y.z
w=A.dG(A.a1(d,x,w),x,w)
w.n(0,"asset",J.t(d,"symbol"))
return w},
$S:25}
D.eGw.prototype={
$0(){var x,w,v=this,u=v.c
if(J.z(u==null?null:J.t(u,"isAdmin"),!0))v.b.y=!0
x=v.d
if(x==null)x=v.a.a
if(x!=null){u=y.g.a(x.h(0,"done"))
if(u==null)u=A.a([],y.s)
w=y.Y.a(x.h(0,"lessons"))
v.b.x=A.J(["done",u,"lessons",w==null?A.S(y.N,y.z):w],y.N,y.z)}},
$S:0}
D.eGH.prototype={
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
return A.b(A.fZ(A.J(["action","paLearnSave","progress",p.x],y.N,y.z),!1,!1,!1,!1,B.hb),$async$$0)
case 9:o=e
if(J.z(o==null?null:J.t(o,"allDone"),!0)){$.cmx=new A.V(A.fX(0,0),0,!1)
A.P8()}case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$$0,w)},
$S:1}
D.eGe.prototype={
$1(d){return this.a.gJW().q(0,d.a)},
$S:z+0}
D.eGf.prototype={
$0(){var x,w=this.a,v=y.N,u=A.d_(w.gJW(),v)
u.I(0,this.b)
x=A.B(u,A.a5(u).k("ci.E"))
v=A.dG(w.x,v,y.z)
v.n(0,"done",x)
w.x=v},
$S:0}
D.eGg.prototype={
$1(d){return this.a.gJW().q(0,d.a)},
$S:z+0}
D.eGh.prototype={
$1(d){var x=null
return A.eh(A.a([A.bI(C.hb7,x,new D.eGd(this.a,d),x)],y.p),x,x,x,C.h82,x,x,x,x,C.fWd,x)},
$S:18}
D.eGd.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:A.a8(v.b,!1).N(null)
x=2
return A.b(A.Mj(),$async$$0)
case 2:u=e
t=v.a
if(t.c!=null)t.l(new D.eGc(t,u))
return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
D.eGc.prototype={
$0(){return this.a.Q=this.b},
$S:0}
D.eGG.prototype={
$0(){var x,w,v,u=this,t=u.b
if(t.length!==0)u.a.ay=t
t=u.c
if(t.length!==0)u.a.f=t
t=u.a
x=u.d
w=J.a2(x)
t.z=J.z(w.h(x,"alertsAllowed"),!0)
if(J.z(w.h(x,"isAdmin"),!0))t.y=!0
v=y.g.a(w.h(x,"rules"))
if(v==null)v=B.cb
v=J.b8(v,new D.eGF(),y.N)
v=A.B(v,v.$ti.k("aj.E"))
t.dy=v
v=w.h(x,"nowEt")
t.fr=J.k(v==null?"":v)
t.fx=J.z(w.h(x,"stockOpen"),!0)
t.r=new A.V(Date.now(),0,!1)},
$S:0}
D.eGF.prototype={
$1(d){return J.k(d)},
$S:15}
D.eGx.prototype={
$2(d,e){return new A.V(Date.now(),0,!1).bz(e.a).a>18e7},
$S:2339}
D.eGy.prototype={
$0(){},
$S:0}
D.eGW.prototype={
$1(d){return J.z(J.t(d,"open"),!0)&&D.aRp(d).length>5},
$S:4}
D.eGX.prototype={
$2(d,e){return B.i.aQ(D.aHc(d),D.aHc(e))},
$S:40}
D.eGk.prototype={
$1(d){return J.z(J.t(d,"asset"),this.a.h(0,"symbol"))},
$S:4}
D.eGl.prototype={
$0(){return A.S(y.N,y.z)},
$S:206}
D.eGm.prototype={
$1(d){var x,w,v,u,t,s,r,q,p,o,n="typicalMin",m="enterWithinMin",l=J.a2(d),k=D.h5(l.h(d,"reading")),j=D.h5(k.h(0,"timing"))
if(j.h(0,n)==null)x=""
else{w=A.v(j.h(0,"dir"))
v=A.v(j.h(0,"ageMin"))
u=A.v(j.h(0,n))
t=A.v(j.h(0,"remainingMin"))
s=A.v(j.h(0,"dir"))
r=A.v(j.h(0,"worked"))
q=A.v(j.h(0,"of"))
p=D.f3(j.h(0,m))>0?"still early (enter within "+A.v(j.h(0,m))+" min)":"too late to enter"
x=", current "+w+" move "+v+" min old, such moves usually last "+u+" min (about "+t+" min left), past "+s+" moves really went that way "+r+" of "+q+" times, "+p}w=A.v(l.h(d,"asset"))
v=A.v(l.h(d,"name"))
u=D.hHd(d)
t=B.i.aa(D.f3(l.h(d,"changePct")),2)
l=J.z(l.h(d,"open"),!0)?"open":"closed"
s=k.h(0,"bias")
s=A.v(s==null?"unknown":s)
r=B.i.aa(D.f3(k.h(0,"score")),0)
q=k.h(0,"rsi")==null?"n/a":B.i.aa(D.f3(k.h(0,"rsi")),0)
p=k.h(0,"mom1h")==null?"n/a":B.i.aa(D.f3(k.h(0,"mom1h")),2)+"%"
o=k.h(0,"action")
return"- "+w+" ("+v+"): price "+u+", change "+t+"%, "+l+", "+s+", strength "+r+", RSI "+q+", last hour "+p+", reading: "+A.v(o==null?"n/a":o)+x+"."},
$S:52}
D.eG7.prototype={
$0(){$.Dw.push(new D.a_x(!0,this.b))
$.ah1=!0},
$S:0}
D.eG8.prototype={
$1(d){return(d.a?"Student":"Tutor")+": "+d.b},
$S:z+5}
D.eG9.prototype={
$1(d){return"- "+A.v(d)},
$S:15}
D.eGa.prototype={
$0(){},
$S:0}
D.eGI.prototype={
$1(d){var x=this.a.ax,w=x.f
if(w.length!==0){w=B.d.gd1(w).Q
w.toString
x.m6(w+200,B.e8,B.eW)}},
$S:7}
D.eH_.prototype={
$0(){return A.VH(this.a)},
$S:0}
D.eH0.prototype={
$0(){return this.b.gLc().C_(this.a.a)},
$S:0}
D.eGj.prototype={
$1(d){return this.a.gJW().q(0,d.a)},
$S:z+0}
D.eGi.prototype={
$0(){return this.a.clv(this.b)},
$S:0}
D.eGE.prototype={
$1(d){var x=this.b,w=B.d.cd(C.E7,x),v=this.a,u=v.y,t=x.a,s=v.gJW().q(0,t)
t=y.Y.a(D.h5(v.x.h(0,"lessons")).h(0,t))
if(t==null)t=B.lE
return new D.a0y(x,w+1,new D.eGA(v,x),u,s,A.a1(t,y.N,y.z),new D.eGB(v,x),new D.eGC(v,x),new D.eGD(v),null)},
$S:z+6}
D.eGA.prototype={
$0(){var x=this.a,w=x.c
w.toString
return x.c6H(new D.a1u(A.O(w).ax.a===B.dd),this.b.r)},
$S:150}
D.eGB.prototype={
$1(d){var x=this.a
x.l(new D.eGz(x,this.b,d))
x.aCH()},
$S:124}
D.eGz.prototype={
$0(){var x=this.a,w=y.N,v=y.z,u=A.a1(D.h5(x.x.h(0,"lessons")),w,v)
u.n(0,this.b.a,this.c)
v=A.dG(x.x,w,v)
v.n(0,"lessons",u)
x.x=v},
$S:0}
D.eGC.prototype={
$0(){return this.a.ae7(this.b.a)},
$S:0}
D.eGD.prototype={
$1(d){var x=this.a,w=x.c
w.toString
A.a8(w,!1).e2()
x.aQU(d)},
$S:2}
D.eGn.prototype={
$2$last$lines(d,e){var x=this.a
return new D.adz(B.d.fD(x,Math.max(0,x.length-d)),this.b,null,e,this.c,null)},
$0(){return this.$2$last$lines(36,!0)},
$1$lines(d){return this.$2$last$lines(36,d)},
$S:2340}
D.eGv.prototype={
$1(d){var x=null
return A.c(d,x,x,x,x,x,x,A.l(x,x,this.a.a?C.dE:B.c,x,x,x,x,x,x,x,x,13,x,x,x,x,1.4,!0,x,x,x,x,x,x,x,x),x,x,x)},
$S:2341}
D.eGo.prototype={
$1(d){var x=J.a2(d)
return J.z(D.h5(x.h(d,"reading")).h(0,"decision"),"ENTER")&&J.z(D.h5(x.h(d,"reading")).h(0,"dir"),"up")},
$S:4}
D.eGp.prototype={
$1(d){return J.t(d,"asset")},
$S:604}
D.eGq.prototype={
$1(d){var x=J.a2(d)
return J.z(D.h5(x.h(d,"reading")).h(0,"decision"),"ENTER")&&J.z(D.h5(x.h(d,"reading")).h(0,"dir"),"down")},
$S:4}
D.eGr.prototype={
$1(d){return J.t(d,"asset")},
$S:604}
D.eGs.prototype={
$1(d){var x=J.a2(d)
return J.z(x.h(d,"open"),!0)&&D.h5(x.h(d,"reading")).h(0,"rsi")!=null},
$S:4}
D.eGt.prototype={
$1(d){return J.z(J.t(d,"open"),!0)},
$S:4}
D.eGu.prototype={
$1(d){var x=D.h5(D.h5(J.t(d,"reading")).h(0,"timing"))
return D.f3(x.h(0,"of"))>=3&&D.f3(x.h(0,"worked"))/D.f3(x.h(0,"of"))>=0.5},
$S:4}
D.eGM.prototype={
$1(d){var x,w,v,u=this.a
if(u.cx!=="All"&&D.hCl(d)!==u.cx)return!1
u=this.b
if(u.length===0)return!0
x=J.a2(d)
w=A.v(x.h(d,"asset"))
v=A.v(x.h(d,"name"))
x=x.h(d,"asset")
x=J.k(x==null?"":x)
return B.a.q((w+" "+v+" "+A.aL(x,"/","")).toLowerCase(),u)},
$S:4}
D.eGN.prototype={
$2(d,e){var x,w,v=J.a2(d),u=y.f,t=u.b(D.h5(v.h(d,"reading")).h(0,"entry"))?0:1,s=J.a2(e),r=u.b(D.h5(s.h(e,"reading")).h(0,"entry"))?0:1
if(t!==r)return t-r
u=this.a.dx
x=u.am(0,v.h(d,"asset"))?0:1
w=u.am(0,s.h(e,"asset"))?0:1
if(x!==w)return x-w
return B.i.aQ(D.aHc(d),D.aHc(e))},
$S:40}
D.eGV.prototype={
$2(d,e){var x=D.h5(J.t(d,"reading"))
return J.z(x.h(0,"dir"),e)&&B.d.q(C.aCc,x.h(0,"decision"))},
$S:2343}
D.eGO.prototype={
$1(d){return this.a.$2(d,"up")},
$S:4}
D.eGP.prototype={
$1(d){return this.a.$2(d,"down")},
$S:4}
D.eGR.prototype={
$0(){var x=this.a
return x.l(new D.eGL(x,this.b))},
$S:0}
D.eGL.prototype={
$0(){return this.a.cx=this.b},
$S:0}
D.eGQ.prototype={
$1(d){return D.hCl(d)===this.a},
$S:4}
D.eGS.prototype={
$0(){var x=this.a
x.l(new D.eGK(x))},
$S:0}
D.eGK.prototype={
$0(){var x=this.a,w=x.CW
x.CW=!w
if(w){x.ch=""
x.cy.bO(0,B.ci)}},
$S:0}
D.eGT.prototype={
$1(d){var x=this.a
return x.l(new D.eGJ(x,d))},
$S:2}
D.eGJ.prototype={
$0(){return this.a.ch=this.b},
$S:0}
D.eGU.prototype={
$0(){return this.a.aQU("What is happening with "+A.v(J.t(this.b,"asset"))+" right now? Is it bullish or bearish, how long might the move last, and is it too late to enter?")},
$S:0}
D.eG3.prototype={
$1(d){return this.a.gJW().q(0,d.a)},
$S:z+0}
D.eG4.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=!v.b?2:4
break
case 2:v.a.gLc().C_(0)
x=3
break
case 4:x=5
return A.b(A.Mj(),$async$$0)
case 5:u=e
t=v.a
if(t.c!=null)t.l(new D.eG2(t,u))
$.cmx=new A.V(A.fX(0,0),0,!1)
A.P8()
case 3:return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
D.eG2.prototype={
$0(){return this.a.Q=this.b},
$S:0}
D.eG5.prototype={
$0(){return this.a.JV(this.b)},
$S:0}
D.eG6.prototype={
$0(){var x=this.a
return x.JV(x.at.a.a)},
$S:0}
D.duq.prototype={
$1(d){var x
y.g.a(d)
x=d==null?B.cb:d
x=J.b8(x,new D.dur(),y.S)
x=A.B(x,x.$ti.k("aj.E"))
return x},
$S:422}
D.dur.prototype={
$1(d){var x=A.c8(A.v(d),null)
return x==null?0:x},
$S:300}
D.duo.prototype={
$1(d){var x,w
y.Y.a(d)
x=d==null?B.lE:d
w=y.S
return J.oE(x,new D.dup(),w,w)},
$S:2344}
D.dup.prototype={
$2(d,e){var x,w=A.c8(A.v(d),null)
if(w==null)w=0
x=A.c8(A.v(e),null)
if(x==null)x=0
return new A.bz(w,x,y.a)},
$S:2345}
D.dum.prototype={
$1(d){var x
if(d>=0){x=this.a.d
x===$&&A.d()
x=d<x.length}else x=!1
return x},
$S:29}
D.dun.prototype={
$1(d){var x,w=this.a
if(w.c==null)return
x=w.w
x===$&&A.d()
if(x.a!==0)w.l(new D.dul(w))},
$S:11}
D.dul.prototype={
$0(){return this.a.cFX()},
$S:0}
D.due.prototype={
$2(d,e){return new A.bz(""+d,e,y.W)},
$S:603}
D.duf.prototype={
$2(d,e){return new A.bz(""+d,e,y.W)},
$S:603}
D.dug.prototype={
$1(d){var x=this.a,w=x.x
w===$&&A.d()
if(!B.d.q(w,d)){x=x.e
x===$&&A.d()
x=!B.d.q(x,d)}else x=!1
return x},
$S:29}
D.duh.prototype={
$1(d){var x=this.a,w=x.e
w===$&&A.d()
if(!B.d.q(w,d)){x=x.f
x===$&&A.d()
x=!x.q(0,d)}else x=!1
return x},
$S:29}
D.duc.prototype={
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
D.dui.prototype={
$0(){return A.VH(this.a)},
$S:0}
D.duj.prototype={
$0(){return this.a.a.cZZ('I just read the lesson "'+this.b.b+'". Can you explain it again with a live example from the markets right now?')},
$S:0}
D.duk.prototype={
$0(){this.a.a.rr()
A.VH(this.b)},
$S:0}
D.dud.prototype={
$0(){return this.a.cg6(this.b,this.c)},
$S:0};(function aliases(){var x=D.aPf.prototype
x.bBo=x.t})();(function installTearOffs(){var x=a._instance_0u,w=a._instance_1u
var v
x(v=D.aHb.prototype,"gclt","clu",2)
x(v,"gcyV","a3j",1)
x(v=D.aHd.prototype,"gcg9","Rb",1)
w(v,"gcg7","JV",4)})();(function inheritance(){var x=a.mixinHard,w=a.inheritMany,v=a.inherit
w(A.ag,[D.atJ,D.adz,D.aCm,D.XC,D.a0y])
w(A.ah,[D.aHb,D.be7,D.bhE,D.aPf,D.bkP])
w(A.kt,[D.eG1,D.eFJ,D.eFy,D.eFT,D.eFH,D.eFP,D.eFp,D.eFr,D.eFX,D.eFC,D.eFE,D.eFn,D.eG_,D.cWG,D.cWE,D.cWF,D.cWD,D.cWH,D.cWJ,D.cWL,D.fgl,D.fuV,D.fAk,D.fEE,D.fBq,D.fIF,D.fFv,D.dhT,D.fvK,D.eGb,D.eH5,D.eH6,D.eGZ,D.eGe,D.eGg,D.eGh,D.eGF,D.eGW,D.eGk,D.eGm,D.eG8,D.eG9,D.eGI,D.eGj,D.eGE,D.eGB,D.eGD,D.eGn,D.eGv,D.eGo,D.eGp,D.eGq,D.eGr,D.eGs,D.eGt,D.eGu,D.eGM,D.eGO,D.eGP,D.eGQ,D.eGT,D.eG3,D.duq,D.dur,D.duo,D.dum,D.dun,D.dug,D.duh])
w(A.mH,[D.eFA,D.eFI,D.eFL,D.eFz,D.eFR,D.eFS,D.eFU,D.eFV,D.eFN,D.eFO,D.eG0,D.eFY,D.eFZ,D.eFq,D.eFs,D.eFW,D.eFD,D.eFB,D.eFv,D.eFu,D.eFw,D.eFt,D.eFo,D.eFx,D.eFm,D.eFl,D.cWz,D.cWC,D.cWB,D.cWA,D.dhS,D.eH3,D.eH2,D.eH4,D.eH1,D.eGw,D.eGH,D.eGf,D.eGd,D.eGc,D.eGG,D.eGy,D.eGl,D.eG7,D.eGa,D.eH_,D.eH0,D.eGi,D.eGA,D.eGz,D.eGC,D.eGR,D.eGL,D.eGS,D.eGK,D.eGJ,D.eGU,D.eG4,D.eG2,D.eG5,D.eG6,D.dul,D.duc,D.dui,D.duj,D.duk,D.dud])
w(A.mn,[D.eFM,D.eFQ,D.eFG,D.eFF,D.eFK,D.cWI,D.cWK,D.fFw,D.eGx,D.eGX,D.eGN,D.eGV,D.dup,D.due,D.duf])
w(A.qc,[D.be8,D.aKy])
w(A.aK,[D.yU,D.a1u,D.cC,D.uq,D.a_x])
v(D.aHd,D.aPf)
x(D.aPf,A.cg)})()
A.nN(b.typeUniverse,JSON.parse('{"atJ":{"ag":[],"w":[]},"adz":{"ag":[],"w":[]},"aCm":{"ag":[],"w":[]},"XC":{"ag":[],"w":[]},"a0y":{"ag":[],"w":[]},"aHb":{"ah":["atJ"]},"be7":{"ah":["adz"]},"be8":{"aB":[]},"aKy":{"aB":[]},"bhE":{"ah":["aCm"]},"aHd":{"ah":["XC"]},"bkP":{"ah":["a0y"]}}'))
var y=(function rtii(){var x=A.aD
return{c:x("lc<u?>"),D:x("Ex"),V:x("U<ab>"),O:x("U<u>"),t:x("U<aa<p,@>>"),v:x("U<hR>"),L:x("U<+(p,p)>"),s:x("U<p>"),p:x("U<w>"),r:x("U<cC>"),n:x("U<H>"),X:x("U<G>"),W:x("bz<p,G>"),a:x("bz<G,G>"),P:x("aa<p,@>"),f:x("aa<@,@>"),b:x("cw"),R:x("+at,from,to(V,p,p)"),N:x("p"),E:x("X<uq>"),q:x("pa"),y:x("Q"),z:x("@"),S:x("G"),g:x("ai<@>?"),Y:x("aa<@,@>?"),H:x("~")}})();(function constants(){var x=a.makeConstList
C.dS=new A.u(1,0.12156862745098039,0.7490196078431373,0.592156862745098,B.q)
C.b5o=new A.lc(C.dS,y.c)
C.kY=new A.u(1,0.08627450980392157,0.10588235294117647,0.1803921568627451,B.q)
C.dj=new A.u(1,0.5411764705882353,0.5607843137254902,0.6392156862745098,B.q)
C.yI=new A.u(1,0.0392156862745098,0.050980392156862744,0.09411764705882353,B.q)
C.yK=new A.u(1,0.9294117647058824,0.9372549019607843,0.9803921568627451,B.q)
C.dk=new A.u(1,0.5529411764705883,0.5843137254901961,0.6705882352941176,B.q)
C.l_=new A.u(1,0.08627450980392157,0.09019607843137255,0.11372549019607843,B.q)
C.qy=new A.u(1,0.14901960784313725,0.17647058823529413,0.27058823529411763,B.q)
C.qB=new A.u(1,0.9058823529411765,0.9098039215686274,0.9411764705882353,B.q)
C.a_q=new A.u(1,0.06666666666666667,0.08235294117647059,0.1607843137254902,B.q)
C.GR=new A.u(1,0.12549019607843137,0.14901960784313725,0.23137254901960785,B.q)
C.a_A=new A.u(1,0.9725490196078431,0.9450980392156862,0.9490196078431372,B.q)
C.uR=new A.u(1,0.13725490196078433,0.16470588235294117,0.25882352941176473,B.q)
C.H1=new A.u(1,0.9372549019607843,0.9411764705882353,0.9607843137254902,B.q)
C.dE=new A.u(1,0.07058823529411765,0.0784313725490196,0.10980392156862745,B.q)
C.eF=new A.u(1,0.9411764705882353,0.33725490196078434,0.41568627450980394,B.q)
C.Hb=new A.u(1,0.9568627450980393,0.9607843137254902,0.9803921568627451,B.q)
C.Hc=new A.u(1,0.11372549019607843,0.13725490196078433,0.2196078431372549,B.q)
C.bEw=new A.P(0,0,0,7)
C.bG8=new A.P(12,8,12,6)
C.bGi=new A.P(13,7,13,7)
C.bH7=new A.P(16,10,16,30)
C.bHt=new A.P(16,4,16,40)
C.bHw=new A.P(16,6,16,16)
C.aob=new A.P(16,6,16,40)
C.bHE=new A.P(16,8,16,40)
C.bKp=new A.P(4,0,4,8)
C.bKI=new A.P(4,6,4,14)
C.bKV=new A.P(6,0,6,14)
C.arh=new A.a_(62840,"MaterialIcons",!1)
C.bVO=new A.a_(983325,"MaterialIcons",!1)
C.asu=new A.a_(983635,"MaterialIcons",!0)
C.asf=new A.a_(983372,"MaterialIcons",!1)
C.bXn=new A.ae(C.asf,18,C.dS,null,null,null)
C.bXP=new A.ae(B.xe,16,null,null,null,null)
C.c_T=new A.ae(B.r4,7,C.dS,null,null,null)
C.c0A=new A.ae(B.ea,18,C.dS,null,null,null)
C.c0Q=new A.ae(B.rc,20,B.c,null,null,null)
C.c1Z=new A.ae(B.he,16,B.c,null,null,null)
C.c34=new A.ae(B.xe,18,null,null,null,null)
C.c57=new A.ae(B.QH,18,null,null,null,null)
C.c5b=new A.ae(B.xh,null,C.eF,null,null,null)
C.c6z=new A.ae(B.Qf,18,C.eF,null,null,null)
C.cNW=x([B.dz,B.fw,B.i0],y.O)
C.caz=new A.a7(B.ay,B.aC,B.x,C.cNW,null,null)
C.aCJ=x([C.eF,B.au,C.dS],y.O)
C.caA=new A.a7(B.a5,B.a9,B.x,C.aCJ,null,null)
C.dsm=x([0,0.33,1],y.n)
C.ccl=new A.a7(B.a5,B.a9,B.x,C.aCJ,C.dsm,null)
C.dqG=x([B.dz,B.i0,B.bA],y.O)
C.ced=new A.a7(B.ay,B.aC,B.x,C.dqG,null,null)
C.dt1=x([B.i0,B.bA],y.O)
C.ceB=new A.a7(B.a5,B.a9,B.x,C.dt1,null,null)
C.co6=x([12,24,48],y.X)
C.f8_=new A.y("The idea","Trading means buying something and selling it later. You make money when you sell for more than you paid, and you lose money when you sell for less. That is all a trade is.")
C.f_E=new A.y("Why prices move","Every price is set by buyers and sellers. When more people want to buy than sell, the price goes up. When more want to sell, it goes down. A chart is simply a picture of that tug of war over time.")
C.f0A=new A.y("Nobody knows the future","No person, app or AI can know for sure where a price goes next. Good traders do not guess. They follow clear rules, keep losses small, and let the winners pay for the losers.")
C.f7I=new A.y("Why pretend money first","This agent uses Alpaca paper money: real prices, fake dollars. You can learn every step, make mistakes and see real results without risking a cent. Professionals practise this way too.")
C.cZv=x([C.f8_,C.f_E,C.f0A,C.f7I],y.L)
C.daH=x(["When you buy","When you sell for more than you paid","When the market opens"],y.s)
C.b3n=new D.cC("When do you make money on a trade?",C.daH,1,"Profit only exists after you sell higher than you bought.")
C.d56=x(["More buyers than sellers","The app","The time of day"],y.s)
C.b3h=new D.cC("What makes a price go up?",C.d56,0,"More people wanting to buy pushes the price up.")
C.dyN=x([C.b3n,C.b3h],y.r)
C.hNJ=new D.uq("basics","What trading really is","Buyers, sellers and why prices move",4,B.l8,B.au,"basics",C.cZv,C.dyN)
C.bWq=new A.a_(983780,"MaterialIcons",!1)
C.eRj=new A.y("One candle = one time slice","On this chart every candle is 5 minutes. It shows four prices: where it started (open), where it ended (close), the highest point (high) and the lowest point (low).")
C.eYZ=new A.y("The colours","Green candle: the price closed HIGHER than it opened, buyers won those 5 minutes. Yellow candle: it closed LOWER, sellers won. Many apps use red instead of yellow, it means the same thing.")
C.f9c=new A.y("Body and wicks","The thick part (the body) runs from open to close. The thin lines (the wicks) show how far the price went up or down before coming back. A long wick on top means buyers pushed up but sellers pushed it back down.")
C.f6i=new A.y("Reading a row of candles","Several green candles in a row, each closing higher, show buyers in control. Many yellow ones closing lower show sellers in control. Candles that go up and down with no direction mean the market is undecided.")
C.cfH=x([C.eRj,C.eYZ,C.f9c,C.f6i],y.L)
C.daO=x(["It closed higher than it opened","It is a good time to buy","The market is closed"],y.s)
C.b3l=new D.cC("A green candle means...",C.daO,0,"Colour only tells you if it closed above or below where it opened.")
C.cGB=x(["1 day","5 minutes","1 hour"],y.s)
C.b3b=new D.cC("On this chart one candle covers...",C.cGB,1,"The agent works with 5-minute candles.")
C.dh8=x([C.b3l,C.b3b],y.r)
C.hNO=new D.uq("candles","Reading candles","Open, close, high and low in one shape",5,C.bWq,C.dS,"candles",C.cfH,C.dh8)
C.f1H=new A.y("Bullish","An uptrend. The price makes higher highs and higher lows, like climbing stairs. Buyers are in control. Traders call this bullish (a bull attacks upward with its horns).")
C.fa7=new A.y("Bearish","A downtrend. Lower highs and lower lows, like walking down stairs. Sellers are in control. This is bearish (a bear swipes downward).")
C.eSB=new A.y("Sideways","The price bounces between a ceiling and a floor with no clear direction. Most trading signals fail here, so the best move is often to wait.")
C.f4s=new A.y("The golden rule","Trade WITH the trend, not against it. Buying in a downtrend because it looks cheap is how most beginners lose. The agent only buys when the trend turns up.")
C.d8T=x([C.f1H,C.fa7,C.eSB,C.f4s],y.L)
C.d71=x(["Bearish","Bullish","Sideways"],y.s)
C.b3m=new D.cC("Higher highs and higher lows means...",C.d71,1,"Climbing stairs = uptrend = bullish.")
C.daZ=x(["Work best","Often fail","Are always right"],y.s)
C.b3e=new D.cC("In a sideways market, signals...",C.daZ,1,"With no direction, signals flip back and forth.")
C.dzj=x([C.b3m,C.b3e],y.r)
C.hNG=new D.uq("trend","Trends: up, down, sideways","Bullish, bearish and how to tell",5,B.ng,B.ce,"trend",C.d8T,C.dzj)
C.fb8=new A.y("What an average line is","A moving average is the average closing price of the last few candles, drawn as a smooth line. It hides the small wiggles so you can see the real direction.")
C.eQt=new A.y("Fast line (pink)","The average of the last 9 candles, about 45 minutes. It reacts quickly to new moves.")
C.eS6=new A.y("Slow line (purple)","The average of the last 21 candles, about 1 hour 45 minutes. It moves slowly and shows the bigger direction.")
C.f2J=new A.y("How to read them","Fast line ABOVE slow line: recent prices are higher than older ones, the trend is up. Fast line BELOW: the trend is down. When the price itself is above both lines, buyers are strong.")
C.dsz=x([C.fb8,C.eQt,C.eS6,C.f2J],y.L)
C.dIc=x(["45 minutes","1 day","1 week"],y.s)
C.b3o=new D.cC("The pink fast line averages about...",C.dIc,0,"9 candles x 5 minutes = 45 minutes.")
C.dDJ=x(["Trend is up","Trend is down","Market closed"],y.s)
C.b3g=new D.cC("Fast line above slow line means...",C.dDJ,0,"Recent prices are higher than older prices.")
C.dok=x([C.b3o,C.b3g],y.r)
C.hNI=new D.uq("ma","Moving averages","The pink fast line and the purple slow line",6,I.xm,B.bA,"ma",C.dsz,C.dok)
C.eYD=new A.y("Buy signal","When the fast line crosses UP through the slow line, the short-term trend has just turned up. That moment is the buy signal. The agent buys $50 at that point.")
C.f_N=new A.y("Sell signal","When the fast line crosses back DOWN through the slow line, the up move is over. That is the sell signal, and the agent closes the trade.")
C.f4D=new A.y("Why it must be fresh","If the cross happened an hour ago, the easy part of the move may be gone. Buying late means buying high. So the agent only acts on a cross that happened since its last check, never on an old one.")
C.f6B=new A.y("The weakness","In sideways markets the lines cross back and forth and give false signals. That is why every trade also has a stop loss: when a signal is wrong, the loss stays small.")
C.dwE=x([C.eYD,C.f_N,C.f4D,C.f6B],y.L)
C.duN=x(["Crosses above the slow line","Crosses below the slow line","Is flat"],y.s)
C.b3f=new D.cC("The buy signal is when the fast line...",C.duN,0,"Crossing up = trend turning up.")
C.dH7=x(["To avoid buying late","The app is slow","Old crosses are illegal"],y.s)
C.b39=new D.cC("Why does the agent skip old crosses?",C.dH7,0,"A late entry means buying after most of the move.")
C.d5d=x([C.b3f,C.b39],y.r)
C.hNL=new D.uq("cross","The crossover signal","Exactly when the agent buys and sells",6,B.arn,B.b2,"cross",C.dwE,C.d5d)
C.bVX=new A.a_(983477,"MaterialIcons",!1)
C.f4b=new A.y("What RSI measures","RSI (Relative Strength Index) compares the size of recent rises with recent falls and gives a number from 0 to 100. Above 50, rises have been bigger. Below 50, falls have been bigger.")
C.eUi=new A.y("Above 70: stretched","The price rose very fast. It is called overbought. It often pauses or pulls back, so buying right then is risky. It can still keep rising in a strong trend.")
C.f4i=new A.y("Below 30: oversold","The price fell very fast. It often bounces, but in a strong downtrend it can stay low. Oversold is not a reason to buy on its own.")
C.f3r=new A.y("How to use it","Use RSI as a second opinion. A buy signal with RSI between 50 and 70 is healthy. A buy signal with RSI above 75 means the move may already be tired.")
C.d5D=x([C.f4b,C.eUi,C.f4i,C.f3r],y.L)
C.dh_=x(["Oversold","Overbought","Neutral"],y.s)
C.b38=new D.cC("RSI above 70 is called...",C.dh_,1,"It rose fast and is stretched.")
C.b3k=new D.cC("RSI below 30 always means buy.",G.T9,1,"Falling markets can stay oversold. It is a hint, not a signal.")
C.dI4=x([C.b38,C.b3k],y.r)
C.hNN=new D.uq("rsi","RSI: momentum","Is the move strong, stretched or tired?",5,C.bVX,B.cD,"rsi",C.d5D,C.dI4)
C.eXt=new A.y("Decide the exit before you enter","Every agent trade has two exits set before it starts. Take profit at +3% (about +$1.50 on $50) and stop loss at -1.5% (about -$0.75).")
C.eLm=new A.y("Win twice what you risk","The win (+$1.50) is twice the loss (-$0.75). Because of that, you only need to be right about 1 trade in 3 to break even. Being right half the time would be clearly profitable.")
C.eRK=new A.y("Size matters most","The agent uses $50 per trade even though the paper account has $100,000. Small trades mean no single mistake can hurt much. Pros rarely risk more than 1 to 2 percent of their money on one trade.")
C.f12=new A.y("Never move the stop","The biggest beginner mistake is hoping a losing trade comes back and moving the stop lower. Small losses are the cost of doing business. Big losses end accounts.")
C.dtU=x([C.eXt,C.eLm,C.eRK,C.f12],y.L)
C.doe=x(["1 in 3 trades","9 in 10 trades","Every trade"],y.s)
C.b3p=new D.cC("With +$1.50 wins and -$0.75 losses, to break even you must win about...",C.doe,0,"One win (+1.50) pays for two losses (-1.50).")
C.dfx=x(["Move the stop lower","Let the stop loss work","Buy more"],y.s)
C.b3c=new D.cC("A trade is losing. The best move is...",C.dfx,1,"The stop exists to keep losses small.")
C.cYl=x([C.b3p,C.b3c],y.r)
C.hNH=new D.uq("risk","Risk: stop loss and take profit","Why small losses beat big wins",7,B.rd,C.eF,"risk",C.dtU,C.cYl)
C.bWw=new A.a_(983848,"MaterialIcons",!1)
C.eUU=new A.y("Bad days happen","Some days every signal fails. The danger is trying to win it back by trading more and bigger. That is called revenge trading and it is how small losses become big ones.")
C.f_6=new A.y("Daily stop: $10","If the day loses $10, the agent makes no more buys until tomorrow. It walks away and lets the market calm down.")
C.f0W=new A.y("Total brake: $25","If total losses reach $25, the agent pauses completely until you review what happened and turn it back on. Reviewing is the most important part of learning.")
C.eTi=new A.y("Your own rules","When you trade yourself, set the same kind of limits before the day starts, and keep them even when it hurts.")
C.dzA=x([C.eUU,C.f_6,C.f0W,C.eTi],y.L)
C.dk9=x(["Doubles the next trade","Stops buying for the day","Sells everything forever"],y.s)
C.b3i=new D.cC("After losing $10 in a day, the agent...",C.dk9,1,"The daily stop prevents revenge trading.")
C.dCm=x([C.b3i],y.r)
C.hNF=new D.uq("brakes","Daily stop and total brake","Protecting your account from bad days",4,C.bWw,B.jQ,"brakes",C.dzA,C.dCm)
C.aj4=new A.u(1,0.3843137254901961,0.49411764705882355,0.9176470588235294,B.q)
C.eZR=new A.y("Stocks and funds","SPY, QQQ, Apple, Microsoft, Nvidia, Tesla and Amazon trade on US market days from 9:30 AM to 4:00 PM Eastern Time. Closed at night, on weekends and on holidays.")
C.f_K=new A.y("Overnight gaps","News can come out while the stock market is closed, so the next morning it can open far higher or lower. That is why the agent sells stocks by 3:55 PM and never holds them overnight.")
C.eXO=new A.y("Crypto","Bitcoin, Ethereum and Solana trade all day, every day, including weekends. More hours means more chances, but crypto also moves faster and harder, so stops get hit more often.")
C.f63=new A.y("Funds vs single companies","SPY holds the 500 biggest US companies and QQQ holds 100 big tech companies, so they move more calmly. One company like Tesla can jump a lot on its own news.")
C.cTm=x([C.eZR,C.f_K,C.eXO,C.f63],y.L)
C.d8S=x(["Only weekdays","All day, every day","Only at night"],y.s)
C.b3j=new D.cC("When can Bitcoin be traded?",C.d8S,1,"Crypto never closes.")
C.d5S=x(["To avoid overnight gaps","Stocks expire","It is the law"],y.s)
C.b3a=new D.cC("Why sell stocks before the close?",C.d5S,0,"Overnight news can make the price jump at the open.")
C.dpm=x([C.b3j,C.b3a],y.r)
C.hNM=new D.uq("hours","Stocks vs crypto","Market hours, weekends and jumpiness",5,B.jX,C.aj4,"hours",C.cTm,C.dpm)
C.f4E=new A.y("Judge many trades, not one","One trade tells you nothing. Luck decides single trades. After 20 to 50 trades you start to see if a method really works. That is why the plan is 2 to 4 weeks of paper trading.")
C.ePO=new A.y("Keep a journal","For each trade write: why you bought, where your stop and target were, what happened, and what you learned. The Pretend trades list on the main screen is the agent's journal.")
C.eQm=new A.y("Follow the rules exactly","The point of the agent is to follow rules perfectly, with no fear and no greed. Check that it did. If it ever breaks a rule, that is a bug to fix before real money.")
C.eXP=new A.y("Before real money","Real money comes only after a long paper test with a positive result, a full review, and money you can truly afford to lose. Never borrow to trade.")
C.dxW=x([C.f4E,C.ePO,C.eQm,C.eXP],y.L)
C.dEF=x(["1","3","20 or more"],y.s)
C.b37=new D.cC("How many trades before judging a method?",C.dEF,2,"Small samples are mostly luck.")
C.dHC=x(["Borrowed","Money you can afford to lose","Rent money"],y.s)
C.b3d=new D.cC("Money for trading should be...",C.dHC,1,"Never trade money you need.")
C.dI_=x([C.b37,C.b3d],y.r)
C.hNK=new D.uq("practice","Practising like a pro","Journals, patience and judging results",5,B.m2,B.bi,"practice",C.dxW,C.dI_)
C.E7=x([C.hNJ,C.hNO,C.hNG,C.hNI,C.hNL,C.hNN,C.hNH,C.hNF,C.hNM,C.hNK],A.aD("U<uq>"))
C.d6i=x(["All","Forex","Stocks","Crypto"],y.s)
C.aCc=x(["ENTER","SKIP_WEAK","WAIT_LATE"],y.s)
C.dcs=x(["Which market looks strongest right now?","Is Bitcoin going up or down right now?","Why has the agent not bought yet?","Explain RSI like I am new","How do I know when to sell?","What does bullish and bearish mean?"],y.s)
C.eul={basics:0,candles:1,trend:2,ma:3,cross:4,rsi:5,risk:6,brakes:7,hours:8,practice:9}
C.dbB=x(["A $4 profit","A $4 loss","Nothing"],y.s)
C.hRL=new D.cC("You buy at $100 and sell at $96. What happened?",C.dbB,1,"Selling lower than you bought is a loss.")
C.duL=x(["The future price","How the price moved over time","Who is buying"],y.s)
C.hRJ=new D.cC("What does a price chart show?",C.duL,1,"A chart is a record of past prices.")
C.dGi=x(["Yes, experts can","Yes, an AI can","No, nobody can"],y.s)
C.hRS=new D.cC("Can anyone know for sure where a price goes next?",C.dGi,2,"Markets are uncertain; rules and stops manage that.")
C.ddB=x(["Trading with real prices and pretend money","Trading newspapers","Trading on paper forms"],y.s)
C.hSk=new D.cC("What is paper trading?",C.ddB,0,"Real prices, fake dollars: practice without risk.")
C.dxZ=x(["It is faster","To learn without risking real money","Pretend money earns more"],y.s)
C.hRO=new D.cC("Why practise with pretend money first?",C.dxZ,1,"Mistakes cost nothing while you learn.")
C.csA=x(["Rise","Fall","Stay frozen"],y.s)
C.hRT=new D.cC("More people want to sell than buy. The price will most likely...",C.csA,1,"Selling pressure pushes prices down.")
C.dgO=x(["Clear rules and small losses","Lucky guesses","Tips from friends"],y.s)
C.hTq=new D.cC("Good traders mostly rely on...",C.dgO,0,"Rules and risk control beat guessing.")
C.ceK=x(["$45","$55","$60"],y.s)
C.hSS=new D.cC("You buy $50 of something and it rises 10%. It is now worth...",C.ceK,1,"10% of $50 is $5, so $55.")
C.cY3=x(["Buy","Sell","Look at the chart"],y.s)
C.hS9=new D.cC("A trade is only finished when you...",C.cY3,1,"Until you sell, a gain or loss is not locked in.")
C.dFx=x(["Good traders never lose","Every trader has losing trades","Losses only happen to beginners"],y.s)
C.hS4=new D.cC("Which is true about losses?",C.dFx,1,"Losing trades are normal; keeping them small is the skill.")
C.cQX=x(["Real dollars are spent","No real money is at risk","It trades in secret"],y.s)
C.hT_=new D.cC("The agent uses Alpaca paper money. That means...",C.cQX,1,"Paper accounts use fake dollars.")
C.dqp=x(["The government","Buyers and sellers agreeing","The app makers"],y.s)
C.hRI=new D.cC("A price is set by...",C.dqp,1,"Each trade is a buyer and seller agreeing on a price.")
C.dea=x([C.b3n,C.b3h,C.hRL,C.hRJ,C.hRS,C.hSk,C.hRO,C.hRT,C.hTq,C.hSS,C.hS9,C.hS4,C.hT_,C.hRI],y.r)
C.das=x(["It closed lower than it opened","It closed higher","Nothing traded"],y.s)
C.hTb=new D.cC("A yellow (or red) candle means...",C.das,0,"Sellers won that time slice.")
C.deN=x(["Wick","Body","Tail light"],y.s)
C.hRV=new D.cC("The thick part of a candle is called the...",C.deN,1,"The body runs from open to close.")
C.dnm=x(["Wicks","Bodies","Averages"],y.s)
C.hSF=new D.cC("The thin lines above and below are the...",C.dnm,0,"Wicks show the high and the low.")
C.dee=x(["Open","Close","Highest price"],y.s)
C.hT1=new D.cC("The top of the upper wick shows the...",C.dee,2,"The tip of the upper wick is the high.")
C.dIq=x(["Lowest price","Open","Average"],y.s)
C.hTk=new D.cC("The bottom of the lower wick shows the...",C.dIq,0,"The tip of the lower wick is the low.")
C.dgW=x(["One","Two","Four"],y.s)
C.hST=new D.cC("How many prices does one candle show?",C.dgW,2,"Open, high, low and close.")
C.dsj=x(["Buyers pushed up but sellers pushed it back down","The price never moved","The market closed early"],y.s)
C.hSV=new D.cC("A long upper wick means...",C.dsj,0,"The price went high, then fell back before the close.")
C.d5m=x(["Sellers in control","Buyers in control","No direction"],y.s)
C.hSC=new D.cC("Many green candles in a row, each closing higher, show...",C.d5m,1,"Rising closes mean buyers are winning.")
C.d52=x(["A strong uptrend","The market is undecided","A crash"],y.s)
C.hT9=new D.cC("Candles going up and down with no direction mean...",C.d52,1,"Mixed candles show indecision.")
C.daQ=x(["Green","Yellow","Grey"],y.s)
C.hSR=new D.cC("A candle opened at 10 and closed at 12. Its colour here is...",C.daQ,0,"It closed above the open.")
C.dJ1=x(["5 candles","12 candles","60 candles"],y.s)
C.hRW=new D.cC("In 1 hour of 5-minute candles there are...",C.dJ1,1,"60 minutes divided by 5 is 12.")
C.dr3=x(["The first price in that time","The last price in that time","The highest price"],y.s)
C.hTs=new D.cC('The "close" of a candle is...',C.dr3,1,"Close is where the price ended.")
C.dyb=x([C.b3l,C.b3b,C.hTb,C.hRV,C.hSF,C.hT1,C.hTk,C.hST,C.hSV,C.hSC,C.hT9,C.hSR,C.hRW,C.hTs],y.r)
C.d7f=x(["Bullish","Bearish","Sideways"],y.s)
C.hT5=new D.cC("Lower highs and lower lows means...",C.d7f,1,"Walking down stairs = downtrend = bearish.")
C.dmN=x(["Rise","Fall","Stay the same"],y.s)
C.hTx=new D.cC('"Bullish" means you expect prices to...',C.dmN,0,"A bull attacks upward.")
C.djg=x(["Rise","Fall","Double"],y.s)
C.hTv=new D.cC('"Bearish" means you expect prices to...',C.djg,1,"A bear swipes downward.")
C.dmX=x(["Trade against the trend","Trade with the trend","Ignore the trend"],y.s)
C.hSJ=new D.cC("The golden rule of trends is...",C.dmX,1,"Going with the trend wins more often.")
C.d8G=x(["A safe plan","A common beginner mistake","What the agent does"],y.s)
C.hTd=new D.cC("Buying in a downtrend because it looks cheap is...",C.d8G,1,"Cheap can get cheaper.")
C.djK=x(["Sideways","Bullish","Bearish"],y.s)
C.hSd=new D.cC("A price bouncing between a ceiling and a floor is...",C.djK,0,"No higher highs or lower lows: sideways.")
C.dBr=x(["Trade a lot","Wait","Borrow money"],y.s)
C.hSs=new D.cC("In a sideways market the best move is often to...",C.dBr,1,"Patience avoids false signals.")
C.dlA=x(["Up","Down","Flat"],y.s)
C.hSx=new D.cC("When sellers are in control, the trend is...",C.dlA,1,"Sellers push prices down.")
C.dlx=x(["Stairs going up","Stairs going down","A flat road"],y.s)
C.hRK=new D.cC("Which picture fits an uptrend?",C.dlx,0,"Each step a bit higher.")
C.dBd=x(["Turns down","Turns up","Is sideways"],y.s)
C.hSP=new D.cC("The agent only buys when the trend...",C.dBd,1,"It buys the start of up moves.")
C.dzD=x(["Getting lower","Getting higher","Gone"],y.s)
C.hS_=new D.cC("A trend changes from bearish to bullish. Lows are now...",C.dzD,1,"Higher lows are the first sign of an uptrend.")
C.dqN=x(["Strong uptrend","Strong downtrend","Sideways"],y.s)
C.hSY=new D.cC("Most trading signals fail in which market?",C.dqN,2,"Without direction, signals flip constantly.")
C.d8E=x([C.b3m,C.b3e,C.hT5,C.hTx,C.hTv,C.hSJ,C.hTd,C.hSd,C.hSs,C.hSx,C.hRK,C.hSP,C.hS_,C.hSY],y.r)
C.dgN=x(["The average closing price of recent candles","The highest price ever","A news feed"],y.s)
C.hTl=new D.cC("A moving average is...",C.dgN,0,"It smooths prices into a line.")
C.dGX=x(["To hide small wiggles and show direction","To predict news","To make charts colourful"],y.s)
C.hTm=new D.cC("Why use a moving average?",C.dGX,0,"It filters noise.")
C.ddh=x(["9","21","100"],y.s)
C.hSG=new D.cC("The purple slow line averages how many candles?",C.ddh,1,"21 candles, about 1 hour 45 minutes.")
C.dr8=x(["The fast (pink) line","The slow (purple) line","Both the same"],y.s)
C.hSI=new D.cC("Which line reacts faster to new moves?",C.dr8,0,"Fewer candles means quicker reaction.")
C.dHc=x(["Trend is up","Trend is down","Buy now"],y.s)
C.hSu=new D.cC("Fast line below slow line means...",C.dHc,1,"Recent prices are lower than older ones.")
C.d9e=x(["Buyers are strong","Sellers are strong","Nothing"],y.s)
C.hRN=new D.cC("The price is above both lines. That shows...",C.d9e,0,"Price above its averages = strength.")
C.d5b=x(["The bigger direction","Only the last candle","Tomorrow price"],y.s)
C.hT2=new D.cC("The slow line shows...",C.d5b,0,"It changes slowly and shows the wider trend.")
C.d1w=x(["15 minutes","1 hour 45 minutes","1 week"],y.s)
C.hS3=new D.cC("The slow line covers about...",C.d1w,1,"21 x 5 minutes = 105 minutes.")
C.cog=x(["Past prices","Future prices","Opinions"],y.s)
C.hTa=new D.cC("Moving averages are based on...",C.cog,0,"They average prices that already happened.")
C.d5B=x(["Lag behind the price","Lead the price","Never move"],y.s)
C.hTn=new D.cC("Because they use past prices, moving averages...",C.d5B,0,"Averages are always a little late.")
C.dq2=x(["A bullish picture","A bearish picture","A closed market"],y.s)
C.hSw=new D.cC("Both lines pointing up and the price above them is...",C.dq2,0,"Everything points up.")
C.dfw=x(["Trending strongly","Sideways","Crashing"],y.s)
C.hTw=new D.cC("When the two lines are tangled together, the market is often...",C.dfw,1,"Tangled lines mean no clear direction.")
C.dAZ=x([C.b3o,C.b3g,C.hTl,C.hTm,C.hSG,C.hSI,C.hSu,C.hRN,C.hT2,C.hS3,C.hTa,C.hTn,C.hSw,C.hTw],y.r)
C.dgL=x(["Crosses below the slow line","Crosses above the slow line","Touches the price"],y.s)
C.hRH=new D.cC("The sell signal is when the fast line...",C.dgL,0,"Crossing down = the up move is over.")
C.cY1=x(["$50","$500","All the money"],y.s)
C.hSM=new D.cC("How much does the agent buy on a signal?",C.cY1,0,"Every pretend trade is $50.")
C.dAS=x(["A fresh signal","An old signal","Not a signal at all ever"],y.s)
C.hTe=new D.cC("A cross that happened an hour ago is...",C.dAS,1,"Fresh means since the last check.")
C.csJ=x(["Sideways markets","Strong trends","Closed markets"],y.s)
C.hTi=new D.cC("Crossovers give many false signals in...",C.csJ,0,"Lines cross back and forth with no direction.")
C.dpb=x(["The stop loss","Buying more","Ignoring it"],y.s)
C.hS2=new D.cC("What protects you when a signal is wrong?",C.dpb,0,"The stop keeps the loss small.")
C.dj1=x(["Just changed direction","Ended forever","Doubled"],y.s)
C.hTt=new D.cC("The crossover tells you the short-term trend has...",C.dj1,0,"A cross marks a turn.")
C.ddm=x(["1 second","15 minutes","1 day"],y.s)
C.hRU=new D.cC("The agent checks for crosses every...",C.ddm,1,"The automatic check runs every 15 minutes.")
C.d6F=x(["Buying higher, with less room to rise","A guaranteed win","A cheaper price"],y.s)
C.hRX=new D.cC("Buying late in a move usually means...",C.d6F,0,"Most of the move is already gone.")
C.dui=x(["Trust it more","Trust it less","Bet bigger"],y.s)
C.hTc=new D.cC("If a signal fails often on one market, you should...",C.dui,1,"Check how often it worked before trusting it.")
C.d6z=x(["Buys more","Sells","Waits a week"],y.s)
C.hSU=new D.cC("When the agent holds a trade and the fast line crosses down, it...",C.d6z,1,"The sell signal closes the trade.")
C.cNR=x(["Yes","No","Only on Fridays"],y.s)
C.hSy=new D.cC("Does a buy signal guarantee the price will rise?",C.cNR,1,"Signals improve the odds; they never guarantee.")
C.dbp=x(["Holds no other position","Already holds three","Has lost $25"],y.s)
C.hT4=new D.cC("The agent buys on a signal only if it...",C.dbp,0,"One position at a time.")
C.deW=x([C.b3f,C.b39,C.hRH,C.hSM,C.hTe,C.hTi,C.hS2,C.hTt,C.hRU,C.hRX,C.hTc,C.hSU,C.hSy,C.hT4],y.r)
C.dlm=x(["0 to 100","1 to 10","-50 to 50"],y.s)
C.hTg=new D.cC("RSI is a number from...",C.dlm,0,"It always sits between 0 and 100.")
C.dwm=x(["Rises were bigger than falls","Falls were bigger than rises","Nothing moved"],y.s)
C.hSq=new D.cC("RSI above 50 means recent...",C.dwm,0,"Above 50 = buyers stronger lately.")
C.dgZ=x(["Overbought","Oversold","Balanced"],y.s)
C.hSA=new D.cC("RSI below 30 is called...",C.dgZ,1,"It fell fast and is stretched downward.")
C.dtY=x(["Momentum: strength of recent moves","The company profit","Trading volume"],y.s)
C.hSL=new D.cC("RSI measures...",C.dtY,0,"It compares gains with losses.")
C.d6m=x(["Healthy","Very stretched","Impossible"],y.s)
C.hSc=new D.cC("A buy signal with RSI 60 is...",C.d6m,0,"Between 50 and 70 is healthy strength.")
C.ddX=x(["Just starting","Tired and stretched","Guaranteed"],y.s)
C.hRP=new D.cC("A buy signal with RSI 80 means the move may be...",C.ddX,1,"Very high RSI often comes before a pause.")
C.dl1=x(["As a second opinion","As the only reason to trade","Never"],y.s)
C.hSj=new D.cC("Best way to use RSI?",C.dl1,0,"Combine it with the trend signal.")
C.dvB=x(["For a while","Never","Only one candle"],y.s)
C.hSK=new D.cC("In a strong uptrend, RSI can stay above 70...",C.dvB,0,"Strong trends can stay overbought.")
C.dqd=x(["Balanced buyers and sellers","Market closed","Crash coming"],y.s)
C.hSN=new D.cC("RSI of 50 means...",C.dqd,0,"50 is the middle.")
C.d9c=x(["Rose very fast","Fell very fast","Did not move"],y.s)
C.hTo=new D.cC("Overbought means prices...",C.d9c,0,"Overbought = rose fast.")
C.cQ1=x(["Stay oversold and keep falling","Only go up","Freeze the market"],y.s)
C.hSl=new D.cC("Oversold in a strong downtrend can...",C.cQ1,0,"Oversold is not a reason to buy on its own.")
C.cM7=x(["Sellers a little stronger","Extreme buying","Extreme selling"],y.s)
C.hSD=new D.cC("RSI 45 suggests...",C.cM7,0,"Just below 50: sellers slightly ahead.")
C.dl_=x([C.b38,C.b3k,C.hTg,C.hSq,C.hSA,C.hSL,C.hSc,C.hRP,C.hSj,C.hSK,C.hSN,C.hTo,C.hSl,C.hSD],y.r)
C.dvy=x(["+3%","+30%","+0.3%"],y.s)
C.hSB=new D.cC("The agent take profit is...",C.dvy,0,"+3% is about +$1.50 on $50.")
C.dhb=x(["-1.5%","-15%","-50%"],y.s)
C.hSb=new D.cC("The agent stop loss is...",C.dhb,0,"-1.5% is about -$0.75 on $50.")
C.doT=x(["A planned exit that limits a loss","A way to stop the app","A bonus"],y.s)
C.hS1=new D.cC("A stop loss is...",C.doT,0,"It sells automatically when the loss reaches a set size.")
C.det=x(["Before entering the trade","After it goes wrong","Never"],y.s)
C.hSa=new D.cC("When should you decide your exits?",C.det,0,"Plan exits first, while calm.")
C.dkN=x(["So no single mistake hurts much","It is the maximum allowed","To lose faster"],y.s)
C.hT8=new D.cC("Why does the agent use only $50 per trade?",C.dkN,0,"Small size protects the account.")
C.dHW=x(["1 to 2 percent","50 percent","100 percent"],y.s)
C.hSZ=new D.cC("Pros rarely risk more than about ... of their money on one trade.",C.dHW,0,"Small risk per trade keeps them in the game.")
C.d5q=x(["$0","+$1.50","-$1.50"],y.s)
C.hT3=new D.cC("Win $1.50 once and lose $0.75 twice. Your total is...",C.d5q,0,"1.50 - 0.75 - 0.75 = 0.")
C.dsT=x(["Profitable","Break even","A loss"],y.s)
C.hT6=new D.cC("Winning half the time with 2 to 1 reward to risk is...",C.dsT,0,"Each win is twice each loss.")
C.deB=x(["Turns small losses into big ones","Guarantees a win","Has no effect"],y.s)
C.hSp=new D.cC('Moving your stop lower to "give it room" usually...',C.deB,0,"Hope is not a plan.")
C.dE2=x(["2 to 1","1 to 2","10 to 1"],y.s)
C.hSv=new D.cC("Reward to risk of the agent is...",C.dE2,0,"$1.50 target vs $0.75 stop.")
C.csc=x(["Can end an account","Are rare","Do not matter"],y.s)
C.hTA=new D.cC("Big losses are dangerous because they...",C.csc,0,"A 50% loss needs a 100% gain to recover.")
C.cVs=x(["Selling when the planned gain is reached","Buying more","Holding forever"],y.s)
C.hSi=new D.cC("Take profit means...",C.cVs,0,"It locks in the win.")
C.csI=x([C.b3p,C.b3c,C.hSB,C.hSb,C.hS1,C.hSa,C.hT8,C.hSZ,C.hT3,C.hT6,C.hSp,C.hSv,C.hTA,C.hSi],y.r)
C.dws=x(["Trading more to win losses back","Taking a break","Following rules"],y.s)
C.hSH=new D.cC("Revenge trading means...",C.dws,0,"It usually makes losses bigger.")
C.cQr=x(["$25 total losses","$100 total losses","Never"],y.s)
C.hSt=new D.cC("The total brake pauses the agent at...",C.cQr,0,"$25 total demo losses.")
C.d6G=x(["An admin, after a review","It turns itself on","Nobody ever"],y.s)
C.hTj=new D.cC("Who turns the agent back on after the $25 brake?",C.d6G,0,"A human review comes first.")
C.ceJ=x(["$10","$1","$100"],y.s)
C.hSh=new D.cC("The daily stop is...",C.ceJ,0,"If the day loses $10, no more buys.")
C.d1C=x(["Stop and reset","Trade bigger","Ignore your limits"],y.s)
C.hTh=new D.cC("Bad days happen. The best response is...",C.d1C,0,"Walking away protects your money.")
C.dnz=x(["Before the day starts","After you lose","Only on weekends"],y.s)
C.hRQ=new D.cC("Limits should be set...",C.dnz,0,"Decide limits while calm.")
C.dCO=x(["Reviewing what happened","Forgetting it","Blaming the market"],y.s)
C.hSr=new D.cC("The most important part of learning after a bad run is...",C.dCO,0,"Reviews turn losses into lessons.")
C.cQt=x(["Yes, exits still work","No, it freezes","It buys more instead"],y.s)
C.hSW=new D.cC("After the daily stop, can the agent still sell an open trade?",C.cQt,0,"The stop blocks new buys, not exits.")
C.dHs=x(["Protect the account from bad days","Make more trades","Win every day"],y.s)
C.hSQ=new D.cC("Brakes are there to...",C.dHs,0,"They cap the damage.")
C.d8H=x(["Stop trading and rethink","Raise the limits","Borrow money"],y.s)
C.hSn=new D.cC("If you keep breaking your own limits, you should...",C.d8H,0,"Rules only work when kept.")
C.dzK=x(["The next day","Never","Every minute"],y.s)
C.hSX=new D.cC("The daily stop resets...",C.dzK,0,"A new Eastern Time day starts fresh.")
C.dmz=x(["Can lose everything on a bad day","Always wins","Pays no fees"],y.s)
C.hRY=new D.cC("A trader with no loss limits...",C.dmz,0,"Limits are the safety net.")
C.dG7=x(["Pause","Trade faster","Bet bigger"],y.s)
C.hRM=new D.cC("Feeling angry after a loss is a sign to...",C.dG7,0,"Emotions lead to bad trades.")
C.dhO=x([C.b3i,C.hSH,C.hSt,C.hTj,C.hSh,C.hTh,C.hRQ,C.hSr,C.hSW,C.hSQ,C.hSn,C.hSX,C.hRY,C.hRM],y.r)
C.daR=x(["9:30 AM to 4:00 PM Eastern","24 hours","8 PM to midnight"],y.s)
C.hS5=new D.cC("US stock market hours are...",C.daR,0,"On market days only.")
C.hRZ=new D.cC("Is the US stock market open on Saturday?",B.a76,1,"Weekends are closed.")
C.dFH=x(["A jump between the close and the next open","A break in the chart software","A holiday"],y.s)
C.hSO=new D.cC("An overnight gap is...",C.dFH,0,"News while closed moves the next open.")
C.d1B=x(["Faster and harder","Slower","Exactly the same"],y.s)
C.hSo=new D.cC("Crypto compared with SPY usually moves...",C.d1B,0,"Crypto is more jumpy.")
C.duI=x(["The 500 biggest US companies","One company","Bitcoin"],y.s)
C.hTy=new D.cC("SPY holds...",C.duI,0,"It is a fund of 500 companies.")
C.dJ_=x(["They spread over many companies","They are closed","They are crypto"],y.s)
C.hRG=new D.cC("Why do funds like SPY move more calmly?",C.dJ_,0,"One bad company matters less.")
C.dAV=x(["3:55 PM Eastern","Midnight","Noon"],y.s)
C.hTr=new D.cC("The agent sells stocks by...",C.dAV,0,"Before the 4:00 PM close.")
C.d8I=x(["Sunday 5 PM to Friday 5 PM Eastern","Only 9:30 to 4","Only weekends"],y.s)
C.hS6=new D.cC("Forex (currency pairs) trades...",C.d8I,0,"Real forex is closed on weekends.")
C.ddY=x(["The broker itself","The real world market","The government"],y.s)
C.hSg=new D.cC("OTC prices at a broker on weekends come from...",C.ddY,0,"They are made by the broker and can differ.")
C.dwJ=x(["Do not trade","Trade double","Trade at night"],y.s)
C.hSE=new D.cC("On a US market holiday, stocks...",C.dwJ,0,"Holidays are closed days.")
C.cf2=x(["More often","Never","Less often"],y.s)
C.hTu=new D.cC("Because crypto moves fast, stop losses are hit...",C.cf2,0,"Bigger swings reach stops sooner.")
C.dAU=x(["Its own news","Weekend rules","The colour of candles"],y.s)
C.hTf=new D.cC("One company like Tesla can jump a lot because of...",C.dAU,0,"Single stocks react to company news.")
C.dr_=x([C.b3j,C.b3a,C.hS5,C.hRZ,C.hSO,C.hSo,C.hTy,C.hRG,C.hTr,C.hS6,C.hSg,C.hSE,C.hTu,C.hTf],y.r)
C.dfF=x(["Why you entered, your exits and what happened","Only wins","Nothing"],y.s)
C.hS8=new D.cC("A trading journal records...",C.dfF,0,"It shows what really works.")
C.hSz=new D.cC("One winning trade proves a method works.",G.T9,1,"One trade can be pure luck.")
C.djW=x(["2 to 4 weeks","1 hour","1 day"],y.s)
C.hRR=new D.cC("The plan is to paper trade for...",C.djW,0,"Enough time for many trades.")
C.dod=x(["A bug to fix before real money","Fine","A bonus"],y.s)
C.hS0=new D.cC("If the agent ever breaks a rule, that is...",C.dod,0,"Rules must be followed exactly.")
C.dta=x(["A long positive paper test and a full review","One good day","A tip from a friend"],y.s)
C.hTz=new D.cC("Before using real money you need...",C.dta,0,"Evidence first.")
C.dam=x(["Worse than a coin flip","Excellent","Guaranteed"],y.s)
C.hT7=new D.cC("Signals that worked under 50% of the time are...",C.dam,0,"Do not trust them.")
C.d5M=x(["Never a good idea for beginners","Smart","Required"],y.s)
C.hT0=new D.cC("Borrowing money to trade is...",C.d5M,0,"Borrowed losses still have to be paid.")
C.dcj=x(["The agent journal","An advert","A game"],y.s)
C.hSf=new D.cC("The Pretend trades list on the main screen is...",C.dcj,0,"Every buy and sell is recorded.")
C.dpu=x(["No fear and no greed","Lots of emotion","Random choices"],y.s)
C.hSm=new D.cC("The point of an agent is to follow rules with...",C.dpu,0,"Discipline is its strength.")
C.dyo=x(["+$3.00","-$3.00","$0"],y.s)
C.hTp=new D.cC("After 20 trades you have 8 wins at +$1.50 and 12 losses at -$0.75. Total?",C.dyo,0,"8 x 1.50 = 12; 12 x 0.75 = 9; 12 - 9 = +3.")
C.cYq=x(["Review the trades calmly","Quit forever without looking","Double the size"],y.s)
C.hS7=new D.cC("A losing week means you should...",C.cYq,0,"Reviews find what to fix.")
C.dEo=x(["Patient and disciplined","Lucky","Fast clickers"],y.s)
C.hSe=new D.cC("The best traders are mostly...",C.dEo,0,"Patience and rules win over time.")
C.dm1=x([C.b37,C.b3d,C.hS8,C.hSz,C.hRR,C.hS0,C.hTz,C.hT7,C.hT0,C.hSf,C.hSm,C.hTp,C.hS7,C.hSe],y.r)
C.dLk=new A.bq(C.eul,[C.dea,C.dyb,C.d8E,C.dAZ,C.deW,C.dl_,C.csI,C.dhO,C.dr_,C.dm1],A.aD("bq<p,ai<cC>>"))
C.ewm={EUR:0,USD:1,GBP:2,JPY:3,CAD:4,AUD:5,NZD:6,CHF:7,TRY:8,NOK:9,THB:10}
C.f9U=new A.y("\u20ac",B.dV)
C.faM=new A.y("$",B.eq)
C.eQu=new A.y("\xa3",B.dg)
C.eZV=new A.y("\xa5",B.bE)
C.eXQ=new A.y("C$",B.hG)
C.f_l=new A.y("A$",B.cV)
C.ePN=new A.y("NZ",B.aw)
C.f37=new A.y("Fr",B.er)
C.f83=new A.y("TL",B.fK)
C.f79=new A.y("kr",B.fV)
C.eUl=new A.y("TH",B.wE)
C.a8s=new A.bq(C.ewm,[C.f9U,C.faM,C.eQu,C.eZV,C.eXQ,C.f_l,C.ePN,C.f37,C.f83,C.f79,C.eUl],A.aD("bq<p,+(p,u)>"))
C.c0l=new A.ae(B.r4,5,B.b2,null,null,null)
C.eCV=new A.D(B.hx,C.c0l,null)
C.fcw=new A.b3(1,"Live signals",C.asf)
C.fcE=new A.b3(B.jQ,C.asu,"Moving sideways")
C.fdd=new A.b3(2,"Ask tutor",B.xe)
C.fdv=new A.b3(B.b2,B.oT,"Waiting for data")
C.fef=new A.b3(0,"Lessons",B.o1)
C.fet=new A.b3(C.dS,B.ng,"Trend is UP")
C.ffu=new A.b3(C.eF,B.a4N,"Trend is DOWN")
C.fiY=new A.b7([B.zZ,C.dS,"Signal alerts are ON: the market, ENTER UP or DOWN, and the duration, while NGMY is open or in the background.",null])
C.fk9=new A.b7([B.as2,B.jQ,"Signal alerts are unlocked. Allow notifications so the app can tell you when to enter.","Allow"])
C.bZy=new A.ae(B.r4,8,C.dS,null,null,null)
C.fL_=new A.F(!0,C.dS,null,null,null,null,11.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.haC=new A.C("LIVE",null,C.fL_,null,null,null,null,null,null,null,null,null)
C.dvA=x([C.bZy,B.bf,C.haC],y.p)
C.foa=new A.c3(B.aL,B.e,B.M,B.l,null,B.p,null,0,C.dvA,null)
C.c__=new A.ae(B.rc,14,B.c,null,null,null)
C.hhv=new A.C("Learn",null,B.nr,null,null,null,null,null,null,null,null,null)
C.da7=x([C.c__,B.d8,C.hhv],y.p)
C.fod=new A.c3(B.aL,B.e,B.M,B.l,null,B.p,null,0,C.da7,null)
C.fF0=new A.F(!0,B.c,null,null,null,null,36,B.F,null,-0.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.fHa=new A.F(!0,E.uF,null,null,null,null,11,B.O,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.fHw=new A.F(!0,B.ab,null,null,null,null,11.5,B.F,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.fJk=new A.F(!0,B.c,null,null,null,null,11,B.u,null,0.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.fJw=new A.F(!0,C.dS,null,null,null,null,11.5,B.O,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.fKW=new A.F(!0,C.eF,null,null,null,null,11.5,B.O,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.fOY=new A.F(!0,C.dS,null,null,null,null,12.5,B.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.fPY=new A.F(!0,B.c,null,null,null,null,22,B.u,null,0.8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.fV3=new A.C("Ask the tutor",null,B.cc,null,null,null,null,null,null,null,null,null)
C.fVb=new A.C("The $25 brake paused the agent. Turning it back on means you have reviewed it. The running demo profit and loss starts again from $0.",null,null,null,null,null,null,null,null,null,null,null)
C.aXw=new A.F(!0,C.eF,null,null,null,null,12.5,B.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.fVe=new A.C("Not quite. Try again.",null,C.aXw,null,null,null,null,null,null,null,null,null)
C.fWd=new A.C("All 10 lessons done!",null,null,null,null,null,null,null,null,null,null,null)
C.fWk=new A.C("10 short lessons. Each one shows you the idea live on the real markets the agent is watching.",null,B.FB,null,null,null,null,null,null,null,null,null)
C.fXP=new A.C("Wrong. You have one more try.",null,C.aXw,null,null,null,null,null,null,null,null,null)
C.fZk=new A.C("Turn the agent back on?",null,null,null,null,null,null,null,null,null,null,null)
C.fSd=new A.F(!0,B.c,null,null,null,null,9.5,B.u,null,0.8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.h3B=new A.C("PRETEND MONEY",null,C.fSd,null,null,null,null,null,null,null,null,null)
C.h4j=new A.C("Paper balance",null,B.WL,null,null,null,null,null,null,null,null,null)
C.h82=new A.C("Signal alerts are now unlocked. When a market says ENTER UP or ENTER DOWN, the app will tell you the market, the direction and the duration. Allow notifications to receive them.",null,null,null,null,null,null,null,null,null,null,null)
C.hb7=new A.C("Allow notifications",null,null,null,null,null,null,null,null,null,null,null)
C.he0=new A.C("Check now",null,B.cc,null,null,null,null,null,null,null,null,null)
C.heG=new A.C("Learn to trade",null,B.m9,null,null,null,null,null,null,null,null,null)
C.hh9=new A.C("Turn back on",null,null,null,null,null,null,null,null,null,null,null)
C.hNT=new D.yU("Nvidia","N",B.Nv)
C.hNV=new D.yU("Ethereum","\u039e",C.aj4)
C.hNY=new D.yU("S&P 500 fund","S&P",B.ce)
C.hNZ=new D.yU("Bitcoin","B",E.uF)
C.hO0=new D.yU("Tesla","T",B.bE)
C.hO1=new D.yU("Microsoft","M",B.bp)
C.hO2=new D.yU("Nasdaq 100 fund","Q",B.cD)
C.bnX=new A.u(1,0.6,0.27058823529411763,1,B.q)
C.hO4=new D.yU("Solana","S",C.bnX)
C.hO6=new D.yU("Apple","A",B.cR)
C.hO9=new D.yU("Amazon","a",B.au)})();(function staticFields(){$.Dw=A.a([],A.aD("U<a_x>"))
$.ah1=!1
$.hj4=""
$.aLS=0
$.fmR=0})()};
(a=>{a["GT1tdGsdxBu3S4by2u6WKgj8m0E="]=a.current})($__dart_deferred_initializers__);