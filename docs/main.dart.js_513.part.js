((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,M,E,N,H,O,I,P,Q,R,K,S,T,U,V,W,X,F,D={
i6p(){return new D.atR(null)},
aHk(d){var x=J.a2(d),w=D.fy(x.h(d,"reading")).h(0,"action"),v=J.k(w==null?"":w)
if(B.a.Y(v,"ENTER UP"))return 0
if(B.a.Y(v,"ENTER DOWN"))return 1
if(!J.z(x.h(d,"open"),!0))return 4
return 2+(100-D.et(D.fy(x.h(d,"reading")).h(0,"score")))/1000},
fAK(d){var x
switch(d){case"SPY":x=C.hO1
break
case"QQQ":x=C.hO6
break
case"AAPL":x=C.hOa
break
case"MSFT":x=C.hO5
break
case"NVDA":x=C.hNX
break
case"TSLA":x=C.hO4
break
case"AMZN":x=C.hOd
break
case"BTC/USD":x=C.hO2
break
case"ETH/USD":x=C.hNZ
break
case"SOL/USD":x=C.hO8
break
default:x=new D.z3(d,d.length===0?"?":d[0],B.b2)
break}return x},
fvC(d,e){var x,w,v=null,u=d.split("/")
if(u.length===2&&C.a8t.am(0,u[0])&&C.a8t.am(0,u[1])){u=d.split("/")
x=new D.fvD(e)
return new A.a6(e*1.25,e,new A.an(B.a0,v,B.ad,B.t,A.a([A.ao(v,x.$1(u[0]),v,v,0,v,0,v),A.ao(0,x.$1(u[1]),v,v,v,0,v,v)],y.p),v),v)}w=D.fAK(d)
x=w.b
return A.p(B.z,A.c(x,v,v,v,v,v,v,A.l(v,v,B.c,v,v,v,v,v,v,v,v,x.length>1?e*0.32:e*0.52,v,v,B.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),B.f,v,v,new A.o(w.c,v,v,v,v,v,B.a6),v,e,v,v,v,v,v,e)},
fB1(d){var x,w=y.g.a(d.h(0,"markets"))
if(w==null)w=B.c9
w=J.cZ(w,y.f)
w=A.cF(w,new D.fB2(),w.$ti.k("M.E"),y.P)
x=A.B(w,A.a5(w).k("M.E"))
return x},
fy(d){var x=y.N,w=y.z
return y.f.b(d)?A.a1(d,x,w):A.S(x,w)},
et(d){var x
if(typeof d=="number")x=d
else{x=A.cE(A.v(d==null?"":d))
if(x==null)x=0}return x},
bF0(d){var x=y.g.a(D.fy(J.t(d,"chart")).h(0,"points"))
if(x==null)x=B.c9
x=J.cZ(x,y.f)
x=A.cF(x,new D.fFn(),x.$ti.k("M.E"),y.P)
x=A.B(x,A.a5(x).k("M.E"))
return x},
hD(d,e,f){var x,w=A.o4(B.i.a9(Math.abs(d),2),A.ag("\\B(?=(\\d{3})+(?!\\d))",!0,!1,!1,!1),new D.fC8(),null)
if(d<0)x="-"
else x=f&&d>0?"+":""
return x+(e?"$":"")+w},
aQI(d){var x=B.o.F(A.d6(d),12)===0?12:B.o.F(A.d6(d),12),w=B.a.b0(B.o.v(A.fG(d)),2,"0"),v=A.d6(d)<12?"AM":"PM"
return""+x+":"+w+" "+v},
bFu(d){var x=d.ab(),w=new D.fJq(),v=w.$3(A.bD(x),3,2).bM(252e8),u=w.$3(A.bD(x),11,1).bM(216e8),t=x.bM(0-A.dv(0,!x.cW(v)&&x.cW(u)?4:5,0,0,0,0).a)
return A.c0(A.bD(t),A.bM(t),A.bW(t),A.d6(t),A.fG(t),0,0,0)},
hFr(d){var x,w,v,u=d==null,t=A.v(u?"":d).split("-")
if(t.length!==3)return A.v(u?"":d)
x=A.c8(t[1],null)
u=B.iw[B.o.D((x==null?1:x)-1,0,11)]
w=t[2]
v=A.c8(w,null)
return u+" "+A.v(v==null?w:v)+", "+t[0]},
ihB(d){var x,w=A.bi(A.v(d==null?"":d))
if(w==null)return""
x=D.bFu(w)
return B.iw[A.bM(x)-1]+" "+A.bW(x)+" at "+D.aQI(x)+" ET"},
io7(d){var x,w,v=d.split(", ")
if(v.length>=4){x=v[1]
w=v[3]
return x+", "+A.aL(w," ET","")}return d},
hF4(d){return d.length===0?d:d[0].toUpperCase()+B.a.aY(d,1)},
hHB(){var x=D.bFu(new A.V(Date.now(),0,!1).ab()),w=B.o.F(A.fG(x),15)
return"at "+D.aQI(A.c0(A.bD(x),A.bM(x),A.bW(x),A.d6(x),A.fG(x),0,0,0).bM(A.dv(0,0,0,0,15-w,0).a))+" ET"},
if2(d){if(B.a.Y(d,"ENTER UP"))return C.dN
if(B.a.Y(d,"ENTER DOWN"))return C.ey
if(B.a.q(d,"SKIP")||B.a.q(d,"TOO LATE"))return C.ey
if(B.a.Y(d,"MARKET CLOSED"))return B.bP
return E.jS},
hIB(a7,a8,a9,b0,b1){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=null,a1="mom1h",a2=J.a2(a8),a3=D.fy(a2.h(a8,"reading")),a4=D.fy(a3.h(0,"timing")),a5=D.bF0(a8),a6=a2.h(a8,"asset")
if(a6==null)a6=a2.h(a8,"symbol")
x=J.k(a6==null?"":a6)
a6=a3.h(0,"action")
w=J.k(a6==null?"WAITING FOR DATA":a6)
v=D.if2(w)
u=B.i.D(D.et(a3.h(0,"score")),0,100)
a6=y.g.a(a3.h(0,"notes"))
if(a6==null)a6=B.c9
a6=J.b8(a6,new D.fGe(),y.N)
t=A.B(a6,a6.$ti.k("ak.E"))
s=D.et(a2.h(a8,"changePct"))
a6=a7.a
r=a6?B.c.j(0.92):C.jN
q=A.n(20)
p=B.a.Y(w,"ENTER")
if(p)o=v.j(0.6)
else o=a6?B.c:C.qM
o=A.K(o,B.r,p?1.6:1)
n=y.V
m=A.a([new A.aa(0,B.H,a7.gWB(),B.hR,14)],n)
l=D.fvC(x,28)
p=A.c(x,a0,a0,a0,a0,a0,a0,A.l(a0,a0,a6?C.dE:B.c,a0,a0,a0,a0,a0,a0,a0,a0,14,a0,a0,B.F,a0,a0,!0,a0,a0,a0,a0,a0,a0,a0,a0),a0,a0,a0)
k=a2.h(a8,"name")
k=J.k(k==null?"":k)
j=y.p
k=A.a([l,B.ar,A.E(A.x(A.a([p,A.c(k,a0,a0,a0,a0,a0,a0,A.l(a0,a0,a6?C.dk:C.dl,a0,a0,a0,a0,a0,a0,a0,a0,11,a0,a0,a0,a0,a0,!0,a0,a0,a0,a0,a0,a0,a0,a0),a0,a0,a0)],j),B.B,a0,B.e,B.h,0,B.p),1)],j)
if(a5.length>2)B.d.u(k,A.a([new A.a6(58,26,A.b4(a0,a0,a0,new D.bwh(a5,s>=0?C.dN:C.ey,a0),B.az),a0),B.ar],j))
p=D.hIv(a8)
p=A.c(p,a0,a0,a0,a0,a0,a0,A.l(a0,a0,a6?C.dE:B.c,a0,a0,a0,a0,a0,a0,a0,a0,14,a0,a0,B.F,a0,a0,!0,a0,a0,a0,a0,a0,a0,a0,a0),a0,a0,a0)
l=s>=0
i=l?"+":""
h=B.i.a9(s,2)
g=J.z(a2.h(a8,"kind"),"forex")?"30m":"4h"
k.push(A.x(A.a([p,A.c(i+h+"% \xb7 "+g,a0,a0,a0,a0,a0,a0,A.l(a0,a0,l?C.dN:C.ey,a0,a0,a0,a0,a0,a0,a0,a0,11,a0,a0,B.P,a0,a0,!0,a0,a0,a0,a0,a0,a0,a0,a0),a0,a0,a0)],j),B.dH,a0,B.e,B.h,0,B.p))
p=A.a([A.A(k,B.l,a0,B.e,B.h,0,a0,a0)],j)
if(y.f.b(a3.h(0,"entry"))){l=D.fy(a3.h(0,"entry"))
f=J.z(l.h(0,"dir"),"up")
e=f?C.dN:C.ey
d=Math.max(1,B.i.R(D.et(l.h(0,"candleMin"))))
k=A.n(18)
i=A.ap(e,B.v,0.25)
i.toString
i=A.a([e,i],y.O)
n=A.a([new A.aa(0,B.H,e.j(0.35),B.cy,16)],n)
h=B.c.j(0.22)
h=A.p(a0,A.W(f?B.pR:B.pQ,B.c,a0,a0,a0,34),B.f,a0,a0,new A.o(h,a0,a0,a0,a0,a0,B.a6),a0,52,a0,a0,a0,a0,a0,52)
g=A.c(f?"ENTER UP":"ENTER DOWN",a0,a0,a0,a0,a0,a0,C.fPY,a0,a0,a0)
B.d.u(p,A.a([B.af,A.p(a0,A.x(A.a([h,B.al,g,A.c(f?"BUY / CALL":"SELL / PUT",a0,a0,a0,a0,a0,a0,C.fHv,a0,a0,a0),B.S,new D.aCv(d,a0),B.S,A.A(A.a([A.x(A.a([A.c(B.i.a9(D.et(l.h(0,"durationMin")),0)+" min",a0,a0,a0,a0,a0,a0,B.jn,a0,a0,a0),A.c("Trade for",a0,a0,a0,a0,a0,a0,G.acH,a0,a0,a0)],j),B.l,a0,B.e,B.h,0,B.p),A.p(a0,a0,B.f,B.jU,a0,a0,a0,30,a0,B.r3,a0,a0,a0,1),A.x(A.a([A.c(A.v(l.h(0,"worked"))+" of "+A.v(l.h(0,"of")),a0,a0,a0,a0,a0,a0,B.jn,a0,a0,a0),A.c("Worked lately",a0,a0,a0,a0,a0,a0,G.acH,a0,a0,a0)],j),B.l,a0,B.e,B.h,0,B.p)],j),B.l,a0,B.b9,B.h,0,a0,a0)],j),B.l,a0,B.e,B.h,0,B.p),B.f,a0,a0,new A.o(a0,a0,a0,k,n,new A.a7(B.aX,B.b1,B.x,i,a0,a0),B.m),a0,a0,a0,a0,V.a1N,a0,a0,1/0)],j))}if(a9!=null){n=A.n(10)
B.d.u(p,A.a([B.O,A.p(a0,A.A(A.a([C.c1Z,B.d6,A.E(A.c(a9+" \xb7 check before you act",a0,a0,a0,a0,a0,a0,C.fJj,a0,a0,a0),1)],j),B.l,a0,B.e,B.h,0,a0,a0),B.f,a0,a0,new A.o(a0,a0,a0,n,a0,C.ceB,B.m),a0,a0,a0,a0,B.fM,a0,a0,1/0)],j))}p.push(B.S)
n=v.j(0.15)
l=A.n(999)
l=A.a([A.p(a0,A.c(w,a0,a0,a0,a0,a0,a0,A.l(a0,a0,v,a0,a0,a0,a0,a0,a0,a0,a0,10.5,a0,a0,B.u,a0,a0,!0,a0,0.4,a0,a0,a0,a0,a0,a0),a0,a0,a0),B.f,a0,a0,new A.o(n,a0,a0,l,a0,a0,B.m),a0,a0,a0,a0,B.o_,a0,a0,a0),B.aZ],j)
if(a3.h(0,"rsi")!=null){n=B.i.a9(D.et(a3.h(0,"rsi")),0)
l.push(A.c("RSI "+n,a0,a0,a0,a0,a0,a0,A.l(a0,a0,a6?C.dk:C.dl,a0,a0,a0,a0,a0,a0,a0,a0,11,a0,a0,B.P,a0,a0,!0,a0,a0,a0,a0,a0,a0,a0,a0),a0,a0,a0))}if(a3.h(0,a1)!=null){n=D.et(a3.h(0,a1))>=0?"+":""
k=B.i.a9(D.et(a3.h(0,a1)),2)
B.d.u(l,A.a([B.ar,A.c("1h "+n+k+"%",a0,a0,a0,a0,a0,a0,A.l(a0,a0,D.et(a3.h(0,a1))>=0?C.dN:C.ey,a0,a0,a0,a0,a0,a0,a0,a0,11,a0,a0,B.P,a0,a0,!0,a0,a0,a0,a0,a0,a0,a0,a0),a0,a0,a0)],j))}p.push(A.A(l,B.l,a0,B.e,B.h,0,a0,a0))
p.push(B.S)
p.push(A.cf(new D.fGf(u,a7)))
p.push(B.at)
n=A.c("Sellers",a0,a0,a0,a0,a0,a0,A.l(a0,a0,a6?C.dk:C.dl,a0,a0,a0,a0,a0,a0,a0,a0,10,a0,a0,a0,a0,a0,!0,a0,a0,a0,a0,a0,a0,a0,a0),a0,a0,a0)
l=B.i.a9(u,0)
l=A.c("Strength "+l+"/100",a0,a0,a0,a0,a0,a0,A.l(a0,a0,a6?C.dE:B.c,a0,a0,a0,a0,a0,a0,a0,a0,10.5,a0,a0,B.F,a0,a0,!0,a0,a0,a0,a0,a0,a0,a0,a0),a0,a0,a0)
p.push(A.A(A.a([n,B.aZ,l,B.aZ,A.c("Buyers",a0,a0,a0,a0,a0,a0,A.l(a0,a0,a6?C.dk:C.dl,a0,a0,a0,a0,a0,a0,a0,a0,10,a0,a0,a0,a0,a0,!0,a0,a0,a0,a0,a0,a0,a0,a0),a0,a0,a0)],j),B.l,a0,B.e,B.h,0,a0,a0))
p.push(B.O)
n=J.z(a2.h(a8,"open"),!0)?A.cS(t,1,a0,A.U(t).c):t
n=J.HZ(n,b0?2:99)
l=n.$ti
n=new A.bQ(n,n.gJ(0),l.k("bQ<ak.E>"))
l=l.k("ak.E")
while(n.C()){k=n.d
if(k==null)k=l.a(k)
i=A.W(B.r7,v,a0,a0,a0,4.5)
h=a6?C.dE:B.c
p.push(new A.D(B.n9,new A.c3(B.aL,B.e,B.h,B.B,a0,B.p,a0,0,A.a([new A.D(B.hJ,i,a0),N.xS,new A.bz(1,B.ba,A.c(k,a0,a0,a0,a0,a0,a0,new A.H(!0,h,a0,a0,a0,a0,12.3,a0,a0,a0,a0,a0,1.35,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0),a0,a0,a0),a0)],j),a0),a0))}if(J.z(a2.h(a8,"open"),!0))B.d.u(p,A.a([B.S,D.ihk(a7,a3,a4)],j))
if(b1!=null)p.push(new A.bK(B.a9,a0,a0,A.hu(C.bXP,A.c("Ask the tutor about "+x,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0),b1,a0),a0))
return A.p(a0,A.x(p,B.B,a0,B.e,B.h,0,B.p),B.f,a0,a0,new A.o(r,a0,o,q,m,a0,B.m),a0,a0,a0,B.d4,B.bH,a0,a0,a0)},
ihk(a3,a4,a5){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f="dir",e="typicalMin",d="entry",a0=a4.h(0,"decision"),a1=J.k(a0==null?"NO_DIRECTION":a0),a2=J.z(a4.h(0,f),"up")
a0=y.g.a(a4.h(0,"notes"))
if(a0==null)a0=B.c9
a0=J.b8(a0,new D.fws(),y.N)
x=A.B(a0,a0.$ti.k("ak.E"))
A:{if("ENTER"===a1){a0=a2?C.dN:C.ey
break A}if("SKIP_WEAK"===a1||"WAIT_LATE"===a1){a0=C.ey
break A}a0=E.jS
break A}w=a5.h(0,e)!=null&&a5.h(0,f)!=null&&!J.z(a5.h(0,f),"none")&&a1!=="NO_DIRECTION"&&a1!=="CLOSED"
v=D.et(a5.h(0,"of"))
u=D.et(a5.h(0,"worked"))
t=v>0
s=t?u/v:0
r=J.z(a5.h(0,f),"up")?"up":"down"
q=a3.a
p=q?C.CF:C.CH
o=A.n(16)
n=A.K(a0.j(0.55),B.r,1.5)
m=A.W(B.ne,q?C.dE:B.c,g,g,g,16)
l=y.p
m=A.A(A.a([m,B.bf,A.c("DECISION AND DURATION",g,g,g,g,g,g,A.l(g,g,q?C.dE:B.c,g,g,g,g,g,g,g,g,11.5,g,g,B.u,g,g,!0,g,1,g,g,g,g,g,g),g,g,g)],l),B.l,g,B.e,B.h,0,g,g)
k=a0.j(0.14)
j=A.n(10)
i=a4.h(0,"action")
i=A.a([A.c(J.k(i==null?"":i),g,g,g,g,g,g,A.l(g,g,a0,g,g,g,g,g,g,g,g,13,g,g,B.u,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)],l)
if(x.length!==0){h=B.d.gH(x)
B.d.u(i,A.a([B.cN,A.c(h,g,g,g,g,g,g,A.l(g,g,q?C.dE:B.c,g,g,g,g,g,g,g,g,12.3,g,g,g,g,1.35,!0,g,g,g,g,g,g,g,g),g,g,g)],l))}m=A.a([m,B.O,A.p(g,A.x(i,B.B,g,B.e,B.h,0,B.p),B.f,g,g,new A.o(k,g,g,j,g,g,B.m),g,g,g,g,B.jg,g,g,1/0)],l)
if(a1==="ENTER"&&y.f.b(a4.h(0,d)))B.d.u(m,A.a([B.O,A.A(A.a([A.E(D.hFN(a3,"Trade for",B.i.a9(D.et(D.fy(a4.h(0,d)).h(0,"durationMin")),0)+" min",a0),1),A.E(D.hFN(a3,"Enter at","next "+B.i.a9(D.et(D.fy(a4.h(0,d)).h(0,"candleMin")),0)+"-min candle",g),1)],l),B.l,g,B.e,B.h,0,g,g)],l))
if(w){a0=A.c("What this is based on",g,g,g,g,g,g,A.l(g,g,q?C.dk:C.dl,g,g,g,g,g,g,g,g,10.5,g,g,B.F,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)
k=D.hkW(a3,B.h_,"This "+r+" move started "+B.i.a9(D.et(a5.h(0,"ageMin")),0)+" min ago.",g)
j=r==="up"?"Up":"Down"
l=A.a([B.S,a0,B.at,k,D.hkW(a3,B.asv,j+" moves on this market usually end after about "+B.i.a9(D.et(a5.h(0,e)),0)+" min.",g)],l)
if(t){a0=B.i.a9(v,0)
t=B.i.a9(u,0)
k=B.i.R(s*100)
j=s>=0.5
i=j?"Reliable enough.":"Under half: unreliable."
j=j?C.dN:C.ey
l.push(D.hkW(a3,B.pS,"Of the last "+a0+" "+r+" moves here, "+t+" really went "+r+" ("+k+"%). "+i,j))}B.d.u(m,l)}m.push(B.at)
m.push(A.c("Estimates from this market's recent moves, not promises.",g,g,g,g,g,g,A.l(g,g,q?C.dk:C.dl,g,g,g,g,g,g,g,g,10.5,g,g,g,g,g,!0,g,g,g,g,g,g,g,g),g,g,g))
return A.p(g,A.x(m,B.B,g,B.e,B.h,0,B.p),B.f,g,g,new A.o(p,g,n,o,g,g,B.m),g,g,g,g,B.bh,g,g,1/0)},
hkW(d,e,f,g){var x,w=null,v=g==null
if(v)x=d.a?C.dk:C.dl
else x=g
x=A.W(e,x,w,w,w,14)
if(v)v=d.a?C.dE:B.c
else v=g
return new A.D(B.Hx,A.A(A.a([x,B.bf,A.E(A.c(f,w,w,w,w,w,w,A.l(w,w,v,w,w,w,w,w,w,w,w,12,w,w,w,w,1.35,!0,w,w,w,w,w,w,w,w),w,w,w),1)],y.p),B.B,w,B.e,B.h,0,w,w),w)},
hFN(d,e,f,g){var x=null,w=d.a,v=A.c(e,x,x,x,x,x,x,A.l(x,x,w?C.dk:C.dl,x,x,x,x,x,x,x,x,10.5,x,x,x,x,x,!0,x,x,x,x,x,x,x,x),x,x,x)
if(g==null)w=w?C.dE:B.c
else w=g
return A.x(A.a([v,A.c(f,x,x,x,x,x,x,A.l(x,x,w,x,x,x,x,x,x,x,x,13.5,x,x,B.F,x,x,!0,x,x,x,x,x,x,x,x),x,x,x)],y.p),B.B,x,B.e,B.h,0,B.p)},
hIv(d){var x=J.a2(d),w=D.et(x.h(d,"price"))
if(!J.z(x.h(d,"kind"),"forex"))return D.hD(w,!0,!1)
return B.i.a9(w,w>=100?3:5)},
hzD(d,e){return new D.XF(d,e,null)},
hE3(){var x=Math.max(0,$.aLX-1)
$.aLX=x
if(x===0){B.d.a5($.DB)
$.ah9=!1
$.hkh=""
$.fnz=$.fnz+1}},
eHF(d){var x
y.g.a(d)
x=d==null?B.c9:d
x=J.cZ(x,y.f)
x=A.cF(x,new D.eHG(),x.$ti.k("M.E"),y.P)
x=A.B(x,A.a5(x).k("M.E"))
return x},
hDy(d){var x=J.t(d,"kind")
switch(J.k(x==null?"":x)){case"forex":x="Forex"
break
case"crypto":x="Crypto"
break
default:x="Stocks"
break}return x},
atR:function atR(d){this.a=d},
aHj:function aHj(d,e){var _=this
_.d=null
_.e=d
_.f=!0
_.r=!1
_.w=!0
_.y=_.x=!1
_.z=48
_.Q=null
_.as=e
_.at=!1
_.ax=!0
_.c=_.a=_.ch=_.ay=null},
eGJ:function eGJ(d){this.a=d},
eGo:function eGo(d,e){this.a=d
this.b=e},
eGf:function eGf(d,e){this.a=d
this.b=e},
eGn:function eGn(d,e){this.a=d
this.b=e},
eGq:function eGq(d,e){this.a=d
this.b=e},
eGd:function eGd(){},
eGe:function eGe(d,e,f){this.a=d
this.b=e
this.c=f},
eGy:function eGy(){},
eGw:function eGw(d){this.a=d},
eGx:function eGx(d){this.a=d},
eGz:function eGz(d){this.a=d},
eGA:function eGA(d){this.a=d},
eGm:function eGm(d){this.a=d},
eGs:function eGs(d){this.a=d},
eGt:function eGt(d,e){this.a=d
this.b=e},
eGu:function eGu(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eGr:function eGr(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eGv:function eGv(){},
eGI:function eGI(d){this.a=d},
eGD:function eGD(d){this.a=d},
eGE:function eGE(d){this.a=d},
eG4:function eG4(d){this.a=d},
eG5:function eG5(d,e){this.a=d
this.b=e},
eG6:function eG6(d){this.a=d},
eG7:function eG7(d){this.a=d},
eGC:function eGC(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eGB:function eGB(d){this.a=d},
eGh:function eGh(){},
eGi:function eGi(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eGj:function eGj(d){this.a=d},
eGl:function eGl(){},
eGk:function eGk(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
eGg:function eGg(d,e){this.a=d
this.b=e},
eGa:function eGa(d,e){this.a=d
this.b=e},
eG9:function eG9(d,e){this.a=d
this.b=e},
eGb:function eGb(d){this.a=d},
eG8:function eG8(d){this.a=d},
eG2:function eG2(d){this.a=d},
eG3:function eG3(){},
eGp:function eGp(d,e){this.a=d
this.b=e},
eGc:function eGc(d,e){this.a=d
this.b=e},
eG1:function eG1(d){this.a=d},
eGG:function eGG(){},
eGH:function eGH(d){this.a=d},
eGF:function eGF(d){this.a=d},
eG0:function eG0(d){this.a=d},
eG_:function eG_(d){this.a=d},
adH:function adH(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
bel:function bel(){this.c=this.a=this.d=null},
cWV:function cWV(d,e){this.a=d
this.b=e},
cX3:function cX3(d){this.a=d},
cX1:function cX1(d,e){this.a=d
this.b=e},
cX_:function cX_(d,e){this.a=d
this.b=e},
cX0:function cX0(d,e){this.a=d
this.b=e},
cWZ:function cWZ(d){this.a=d},
cWY:function cWY(d){this.a=d},
cX2:function cX2(d){this.a=d},
cWX:function cWX(d){this.a=d},
cWW:function cWW(d){this.a=d},
bem:function bem(d,e,f,g,h,i,j,k){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.w=j
_.a=k},
cX4:function cX4(d){this.a=d},
cX6:function cX6(d,e){this.a=d
this.b=e},
cX5:function cX5(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
bwh:function bwh(d,e,f){this.b=d
this.c=e
this.a=f},
fh2:function fh2(){},
z3:function z3(d,e,f){this.a=d
this.b=e
this.c=f},
fvD:function fvD(d){this.a=d},
fB2:function fB2(){},
a1x:function a1x(d){this.a=d},
fFn:function fFn(){},
fC8:function fC8(){},
fJq:function fJq(){},
fGe:function fGe(){},
fGf:function fGf(d,e){this.a=d
this.b=e},
aCv:function aCv(d,e){this.c=d
this.a=e},
bhS:function bhS(){this.c=this.a=this.d=null},
die:function die(d){this.a=d},
did:function did(){},
fws:function fws(){},
cC:function cC(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
uv:function uv(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
XF:function XF(d,e,f){this.c=d
this.d=e
this.a=f},
a_A:function a_A(d,e){this.a=d
this.b=e},
aHl:function aHl(d,e,f,g,h,i,j,k,l,m){var _=this
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
_.bv$=l
_.aa$=m
_.c=_.a=null},
eGT:function eGT(){},
eHL:function eHL(d){this.a=d},
eHK:function eHK(){},
eHM:function eHM(d){this.a=d},
eHN:function eHN(d){this.a=d},
eHJ:function eHJ(d,e){this.a=d
this.b=e},
eHO:function eHO(d){this.a=d},
eHG:function eHG(){},
eHd:function eHd(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eHo:function eHo(d){this.a=d},
eGW:function eGW(d){this.a=d},
eGX:function eGX(d,e){this.a=d
this.b=e},
eGY:function eGY(d){this.a=d},
eGZ:function eGZ(d){this.a=d},
eGV:function eGV(d,e){this.a=d
this.b=e},
eGU:function eGU(d,e){this.a=d
this.b=e},
eHn:function eHn(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eHm:function eHm(){},
eHe:function eHe(){},
eHf:function eHf(){},
eHD:function eHD(){},
eHE:function eHE(){},
eH1:function eH1(d){this.a=d},
eH2:function eH2(){},
eH3:function eH3(){},
eGP:function eGP(d,e){this.a=d
this.b=e},
eGQ:function eGQ(){},
eGR:function eGR(){},
eGS:function eGS(){},
eHp:function eHp(d){this.a=d},
eHH:function eHH(d){this.a=d},
eHI:function eHI(d,e){this.a=d
this.b=e},
eH0:function eH0(d){this.a=d},
eH_:function eH_(d,e){this.a=d
this.b=e},
eHl:function eHl(d,e){this.a=d
this.b=e},
eHh:function eHh(d,e){this.a=d
this.b=e},
eHi:function eHi(d,e){this.a=d
this.b=e},
eHg:function eHg(d,e,f){this.a=d
this.b=e
this.c=f},
eHj:function eHj(d,e){this.a=d
this.b=e},
eHk:function eHk(d){this.a=d},
eH4:function eH4(d,e,f){this.a=d
this.b=e
this.c=f},
eHc:function eHc(d){this.a=d},
eH5:function eH5(){},
eH6:function eH6(){},
eH7:function eH7(){},
eH8:function eH8(){},
eH9:function eH9(){},
eHa:function eHa(){},
eHb:function eHb(){},
eHt:function eHt(d,e){this.a=d
this.b=e},
eHu:function eHu(d){this.a=d},
eHC:function eHC(){},
eHv:function eHv(d){this.a=d},
eHw:function eHw(d){this.a=d},
eHy:function eHy(d,e){this.a=d
this.b=e},
eHs:function eHs(d,e){this.a=d
this.b=e},
eHx:function eHx(d){this.a=d},
eHz:function eHz(d){this.a=d},
eHr:function eHr(d){this.a=d},
eHA:function eHA(d){this.a=d},
eHq:function eHq(d,e){this.a=d
this.b=e},
eHB:function eHB(d,e){this.a=d
this.b=e},
eGL:function eGL(d){this.a=d},
eGM:function eGM(d,e){this.a=d
this.b=e},
eGK:function eGK(d,e){this.a=d
this.b=e},
eGN:function eGN(d,e){this.a=d
this.b=e},
eGO:function eGO(d){this.a=d},
a0B:function a0B(d,e,f,g,h,i,j,k,l,m){var _=this
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
bl2:function bl2(d){var _=this
_.x=_.w=_.r=_.f=_.e=_.d=$
_.y=d
_.c=_.a=_.z=null},
duO:function duO(){},
duP:function duP(){},
duM:function duM(){},
duN:function duN(){},
duK:function duK(d){this.a=d},
duL:function duL(d){this.a=d},
duJ:function duJ(d){this.a=d},
duC:function duC(){},
duD:function duD(){},
duE:function duE(d){this.a=d},
duF:function duF(d){this.a=d},
duA:function duA(d,e,f){this.a=d
this.b=e
this.c=f},
duG:function duG(d){this.a=d},
duH:function duH(d,e){this.a=d
this.b=e},
duI:function duI(d,e){this.a=d
this.b=e},
duB:function duB(d,e,f){this.a=d
this.b=e
this.c=f},
aPi:function aPi(){}},C,G,L,Y,Z
J=c[1]
A=c[0]
B=c[2]
M=c[149]
E=c[309]
N=c[176]
H=c[287]
O=c[218]
I=c[308]
P=c[110]
Q=c[55]
R=c[310]
K=c[291]
S=c[187]
T=c[311]
U=c[269]
V=c[290]
W=c[175]
X=c[129]
F=c[279]
D=a.updateHolder(c[20],D)
C=c[307]
G=c[178]
L=c[312]
Y=c[150]
Z=c[157]
D.atR.prototype={
S(){return new D.aHj(A.a([],y.t),A.mj(0,null,null))}}
D.aHj.prototype={
a_(){var x=this
x.a3()
$.aLX=$.aLX+1
x.a.toString
x.aep()
x.Bn(!0)
x.ch=A.d2(B.nT,new D.eGJ(x))},
t(){var x=this.ch
if(x!=null)x.a1(0)
this.as.t()
D.hE3()
this.a2()},
cr3(d){var x=this
if(!x.at&&d>0){x.at=!0
$.aU.U$.push(new D.eGo(x,d))}return x.as},
aep(){var x=0,w=A.j(y.H),v=1,u=[],t=this,s,r,q,p
var $async$aep=A.e(function(d,e){if(d===1){u.push(e)
x=v}for(;;)switch(x){case 0:v=3
x=6
return A.b(A.aB(),$async$aep)
case 6:s=e
r=A.aW(J.t(s.a,"ngmy_signal_grid_market"))
if(r!=null&&r.length!==0&&t.c!=null&&t.Q==null)t.l(new D.eGf(t,r))
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
return A.i($async$aep,w)},
a2_(d){return this.cqA(d)},
cqA(d){var x=0,w=A.j(y.H),v=1,u=[],t=this,s,r,q
var $async$a2_=A.e(function(e,f){if(e===1){u.push(f)
x=v}for(;;)switch(x){case 0:t.l(new D.eGn(t,d))
v=3
x=6
return A.b(A.aB(),$async$a2_)
case 6:s=f
x=7
return A.b(s.aE("String","ngmy_signal_grid_market",d),$async$a2_)
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
return A.i($async$a2_,w)},
Bn(d){return this.cvU(d)},
cgb(){return this.Bn(!1)},
cvU(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$Bn=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(A.h1(A.J(["action","paStatus","live",d],y.N,y.z),!1,!1,!1,!1,B.CU),$async$Bn)
case 3:t=f
if(u.c==null){x=1
break}u.l(new D.eGq(u,t))
x=u.d!=null?4:5
break
case 4:x=6
return A.b(u.c7_(),$async$Bn)
case 6:case 5:case 1:return A.h(v,w)}})
return A.i($async$Bn,w)},
a_1(d){return this.c70(d)},
c7_(){return this.a_1(!1)},
c70(d){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$a_1=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(A.h1(A.J(["action","paLog","limit",100,"beforeId",d&&u.e.length!==0?J.t(B.d.gal(u.e),"id"):0],y.N,y.z),!1,!1,!1,!1,B.hb),$async$a_1)
case 3:r=f
if(u.c==null||r==null||!J.z(J.t(r,"ok"),!0)){x=1
break}t=y.g.a(J.t(r,"rows"))
if(t==null)t=B.c9
t=J.cZ(t,y.f)
t=A.cF(t,new D.eGd(),t.$ti.k("M.E"),y.P)
s=A.B(t,A.a5(t).k("M.E"))
u.l(new D.eGe(u,d,s))
case 1:return A.h(v,w)}})
return A.i($async$a_1,w)},
SL(d){return this.cAO(d)},
cAO(d){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$SL=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=u.d
q=D.fy(r==null?null:J.t(r,"state"))
x=d&&J.z(q.h(0,"brakePaused"),!0)?3:4
break
case 3:r=u.c
r.toString
x=5
return A.b(A.ce(null,null,!0,null,new D.eGy(),r,null,!0,!0,y.y),$async$SL)
case 5:if(f!==!0){x=1
break}case 4:u.l(new D.eGz(u))
x=6
return A.b(A.h1(A.J(["action","paSet","enabled",d],y.N,y.z),!1,!1,!1,!1,B.hb),$async$SL)
case 6:t=f
if(u.c==null){x=1
break}u.l(new D.eGA(u))
r=t==null
if(J.z(r?null:J.t(t,"ok"),!0))s=d?"Agent started.":"Agent stopped."
else{s=r?null:J.t(t,"error")
s=J.k(s==null?"Could not change it.":s)}u.b39(s,J.z(r?null:J.t(t,"ok"),!0)?C.dN:C.ey)
x=7
return A.b(u.cgb(),$async$SL)
case 7:case 1:return A.h(v,w)}})
return A.i($async$SL,w)},
clw(){var x=this.c
x.toString
A.a8(x,!1).cc(A.ec(new D.eGm(this),!1,null,y.H))},
a3h(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$a3h=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u.l(new D.eGs(u))
x=3
return A.b(A.h1(A.J(["action","paCheck"],y.N,y.z),!1,!1,!1,!1,B.nT),$async$a3h)
case 3:t=e
if(u.c==null){x=1
break}u.l(new D.eGt(u,t))
s=t==null
if(!J.z(s?null:J.t(t,"ok"),!0)){s=s?null:J.t(t,"error")
u.b39(J.k(s==null?"The check did not finish.":s),C.ey)
x=1
break}s=u.c
s.toString
s=A.Q(s).ax.a===B.dd
t.toString
r=D.fy(D.fy(J.t(t,"state")).h(0,"snapshot"))
q=u.c
q.toString
p=s?C.yJ:C.yH
x=4
return A.b(A.bU(p,null,new D.eGu(u,new D.a1x(s),r,t),q,!0,!0,!0,B.aUa,!1,!1,y.H),$async$a3h)
case 4:case 1:return A.h(v,w)}})
return A.i($async$a3h,w)},
cyZ(d,e,f,g){var x,w,v,u,t,s=null,r=D.fB1(e)
B.d.b_(r,new D.eGv())
x=d.a
w=x?C.qF:C.qC
w=A.at(A.p(s,s,B.f,s,s,new A.o(w,s,s,A.n(9),s,s,B.m),s,4,s,s,s,s,s,40),s,s,s)
v=A.c("What the agent sees right now",s,s,s,s,s,s,A.l(s,s,x?C.dE:B.c,s,s,s,s,s,s,s,s,19,s,s,B.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)
u=J.z(f.h(0,"enabled"),!0)?" (next one "+D.hHB()+")":" (the agent is stopped, so none will be made)"
w=A.a([w,B.aA,v,B.at,A.c("Check now only looks. It never buys or sells. Pretend trades are made only by the automatic check every 15 minutes"+u+".",s,s,s,s,s,s,A.l(s,s,x?C.dk:C.dl,s,s,s,s,s,s,s,s,12.5,s,s,s,s,1.35,!0,s,s,s,s,s,s,s,s),s,s,s),B.af],y.p)
for(x=r.length,t=0;t<r.length;r.length===x||(0,A.I)(r),++t)w.push(D.hIB(d,r[t],s,!0,s))
return A.cp(w,g,s,C.bHa,s,s,B.ah,!1)},
b39(d,e){var x=null
this.c.K(y.q).f.T(A.b2(x,x,x,e,x,B.t,x,A.c(d,x,x,x,x,x,x,x,x,x,x),x,B.Y,x,x,x,x,x,x,x,x,x,x))},
B(d){var x,w=this,v=null,u=A.Q(d).ax.a===B.dd,t=new D.a1x(u),s=u?C.yJ:C.yH,r=u?C.yJ:C.yH
r=A.a([r,u?C.a_A:C.a_q],y.O)
x=w.cgc(t)
if(w.f)u=B.lN
else{if(w.d==null){u=w.ay
u=A.a([w.aaB(t,u==null?"Nothing to show yet.":u,B.b2)],y.p)}else u=w.bIe(0,t)
u=A.PN(A.cp(u,v,v,C.bHw,v,v,B.ah,!1),v,new D.eGI(w))}return A.c5(v,s,A.p(v,A.bo(!0,A.x(A.a([x,A.E(u,1)],y.p),B.l,v,B.e,B.h,0,B.p),!0,!1,B.ag,!0,!0),B.f,v,v,new A.o(v,v,v,v,v,new A.a7(B.aX,B.b1,B.x,r,v,v),B.m),v,v,v,v,v,v,v,v),v,!1,!1,v,v)},
cgc(d){var x,w,v,u,t,s,r=this,q=null,p=r.d,o=D.fy(p==null?q:J.t(p,"state")),n=J.z(o.h(0,"brakePaused"),!0),m=J.z(o.h(0,"enabled"),!0)&&!n
p=r.b37(d,B.eH,new D.eGD(r))
x=d.a
w=A.c("Signal Grid",q,q,q,q,q,q,A.l(q,q,x?C.dE:B.c,q,q,q,q,q,q,q,q,17,q,q,B.F,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
v=y.p
w=A.a([p,B.ar,A.E(A.x(A.a([w,A.c("Paper trading agent \xb7 pretend money",q,q,q,q,q,q,A.l(q,q,x?C.dk:C.dl,q,q,q,q,q,q,q,q,11.5,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],v),B.B,q,B.e,B.h,0,B.p),1)],v)
if(r.d!=null){if(n)p=C.ey
else if(m)p=C.dN
else p=x?C.dk:C.dl
p=p.j(0.14)
u=A.n(999)
if(n)t=C.ey
else if(m)t=C.dN
else t=x?C.dk:C.dl
t=A.W(B.r7,t,q,q,q,8)
if(n)s="Paused"
else s=m?"Running":"Stopped"
if(n)x=C.ey
else if(m)x=C.dN
else x=x?C.dk:C.dl
w.push(A.p(q,A.A(A.a([t,B.bf,A.c(s,q,q,q,q,q,q,A.l(q,q,x,q,q,q,q,q,q,q,q,12,q,q,B.F,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],v),B.l,q,B.e,B.M,0,q,q),B.f,q,q,new A.o(p,q,q,u,q,q,B.m),q,q,q,q,B.fM,q,q,q))}w.push(B.aa)
w.push(r.b37(d,B.o3,r.r?q:new D.eGE(r)))
return new A.D(B.hm,A.A(w,B.l,q,B.e,B.h,0,q,q),q)},
bIe(b9,c0){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4=this,b5=null,b6="asset",b7="liveError",b8=b4.d
b8.toString
x=J.a2(b8)
w=D.fy(x.h(b8,"state"))
v=D.fy(x.h(b8,"config"))
u=D.fy(w.h(0,"snapshot"))
t=y.f.b(w.h(0,"shadow"))?D.fy(w.h(0,"shadow")):b5
s=D.fB1(u)
r=b4.Q
if(r==null){q=t==null?b5:t.h(0,"symbol")
if(q==null)q=u.h(0,b6)
r=q==null?b5:J.k(q)}p=B.d.dC(s,new D.eG4(r),new D.eG5(s,u))
q=t==null
o=q?b5:B.d.dC(s,new D.eG6(t),new D.eG7(p))
q=!q
n=q&&J.z(t.h(0,"symbol"),J.t(p,b6))?t:b5
m=b4.c8s(c0,b8,s,p,t)
l=D.fy(x.h(b8,"market"))
k=J.a2(p)
j=k.h(p,b6)
i=J.k(j==null?"SPY":j)
h=B.a.q(i,"/")
g=D.bF0(p)
f=D.et(k.h(p,"price"))
e=g.length!==0?D.et(J.t(B.d.gH(g),"c")):0
d=e===0?0:(f-e)/e*100
a0=d>=0
if(h)a1=!0
else{j=k.h(p,"open")
if(j==null)j=l.h(0,"stockOpen")
a1=j==null?l.h(0,"open"):j}if(h)a2="Crypto \xb7 the agent trades it on Saturday and Sunday only"
else{j=J.kR(a1)
if(j.A(a1,!0))a2="Stock market open \xb7 the agent trades it on weekdays \xb7 closes 4:00 PM ET"
else{j=j.A(a1,!1)?"Stock market closed"+b4.cMh(l.h(0,"nextOpen")):""
a2=j}}a3=D.fAK(i)
j=c0.a
a4=j?B.c.j(0.92):C.jN
a5=A.n(22)
a6=A.K(j?B.c:C.qM,B.r,1)
a7=A.a([new A.aa(0,B.H,c0.gWB(),B.cy,12)],y.V)
a8=D.fvC(i,30)
a9=h?i:i+"/USD"
a9=A.c(a9,b5,b5,b5,b5,b5,b5,A.l(b5,b5,j?C.dE:B.c,b5,b5,b5,b5,b5,b5,b5,b5,17,b5,b5,B.F,b5,b5,!0,b5,b5,b5,b5,b5,b5,b5,b5),b5,b5,b5)
k=k.h(p,"name")
k=J.k(k==null?a3.a:k)
b0=y.p
k=A.A(A.a([a8,B.ar,a9,B.bf,new A.d5(1,B.cg,A.c(k,b5,b5,B.a2,b5,b5,b5,A.l(b5,b5,j?C.dk:C.dl,b5,b5,b5,b5,b5,b5,b5,b5,13,b5,b5,b5,b5,b5,!0,b5,b5,b5,b5,b5,b5,b5,b5),b5,b5,b5),b5)],b0),B.l,b5,B.e,B.h,0,b5,b5)
a8=f===0?"\u2014":D.hD(f,!1,!1)
a8=A.a([A.E(new A.dl(B.ds,B.a5,B.f,A.c(a8,b5,b5,b5,b5,b5,b5,A.l(b5,b5,j?C.dE:B.c,b5,b5,b5,b5,b5,b5,b5,I.Jg,34,b5,b5,B.P,b5,b5,!0,b5,-1,b5,b5,b5,b5,b5,b5),b5,b5,b5),b5),1)],b0)
if(g.length>1){a9=(a0?C.dN:C.ey).j(0.14)
b1=A.n(10)
b2=a0?C.arj:B.Qc
b2=A.W(b2,a0?C.dN:C.ey,b5,b5,b5,20)
b3=B.i.a9(Math.abs(d),2)
a8.push(A.p(b5,A.A(A.a([b2,A.c(b3+"%",b5,b5,b5,b5,b5,b5,A.l(b5,b5,a0?C.dN:C.ey,b5,b5,b5,b5,b5,b5,b5,b5,13,b5,b5,B.F,b5,b5,!0,b5,b5,b5,b5,b5,b5,b5,b5),b5,b5,b5)],b0),B.l,b5,B.e,B.M,0,b5,b5),B.f,b5,b5,new A.o(a9,b5,b5,b1,b5,b5,B.m),b5,b5,b5,b5,B.fM,b5,b5,b5))}k=A.a([k,B.O,A.A(a8,B.l,b5,B.e,B.h,0,b5,b5)],b0)
if(a2.length!==0){if(J.z(a1,!0))a8=C.dN
else a8=j?C.dk:C.dl
a8=A.W(B.r7,a8,b5,b5,b5,7)
a9=g.length>1?"  \xb7  change over 4H":""
B.d.u(k,A.a([B.at,A.A(A.a([a8,B.bf,new A.d5(1,B.cg,A.c(a2+a9,b5,b5,B.a2,b5,b5,b5,A.l(b5,b5,j?C.dk:C.dl,b5,b5,b5,b5,b5,b5,b5,b5,12,b5,b5,b5,b5,b5,!0,b5,b5,b5,b5,b5,b5,b5,b5),b5,b5,b5),b5)],b0),B.l,b5,B.e,B.h,0,b5,b5)],b0))}m=A.a([m,A.p(b5,A.x(k,B.B,b5,B.e,B.h,0,B.p),B.f,b5,b5,new A.o(a4,b5,a6,a5,a7,b5,B.m),b5,b5,b5,B.e8,B.eX,b5,b5,b5)],b0)
k=v.h(0,"problem")
if(J.k(k==null?"":k).length!==0)m.push(b4.aaB(c0,J.k(v.h(0,"problem")),E.jS))
k=x.h(b8,b7)
if(J.k(k==null?"":k).length!==0)m.push(b4.aaB(c0,J.k(x.h(b8,b7)),C.ey))
if(J.z(w.h(0,"brakePaused"),!0)){k=w.h(0,"brakeReason")
m.push(b4.aaB(c0,"Paused by the $100 brake. "+A.v(k==null?"":k)+". Look over the trades, then press Start to turn it back on.",C.ey))}m.push(b4.bLd(c0,p,n))
m.push(b4.bHS(c0,b8,w,u))
if(q){o.toString
m.push(b4.crv(c0,t,o,D.fy(x.h(b8,"ticket")),D.fy(u.h(0,"held"))))}m.push(b4.cg9(c0,w))
m.push(b4.bHH(c0,w))
m.push(b4.cJi(c0,b8))
m.push(b4.bEQ(c0))
m.push(b4.cxU(c0,b8))
b8=j?B.c.j(0.92):C.jN
x=A.n(16)
q=A.K(j?B.c:C.qM,B.r,1)
k=A.W(B.kM,C.dN,b5,b5,b5,18)
a4=J.z(v.h(0,"ordersSwitchOn"),!0)?"on":"off"
m.push(A.p(b5,A.A(A.a([k,B.aa,A.E(A.c("Paper money only: no order is ever sent to Alpaca. Order switch: "+a4+".",b5,b5,b5,b5,b5,b5,A.l(b5,b5,j?C.dk:C.dl,b5,b5,b5,b5,b5,b5,b5,b5,11.5,b5,b5,b5,b5,1.3,!0,b5,b5,b5,b5,b5,b5,b5,b5),b5,b5,b5),1)],b0),B.l,b5,B.e,B.h,0,b5,b5),B.f,b5,b5,new A.o(b8,b5,q,x,b5,b5,B.m),b5,b5,b5,G.anf,B.eo,b5,b5,b5))
return m},
cDc(d,e,f){var x=null,w=this.c
w.toString
A.ce(x,x,!0,x,new D.eGC(this,d,e,f),w,x,!0,!0,y.H)},
c8s(d,e,f,g,h){var x,w,v,u,t,s,r=this,q=null
if(f.length<2)return B.bL
x=new A.X(f,new D.eGh(),A.U(f).k("X<1>")).gJ(0)
w=d.a
v=A.c("Agent markets",q,q,q,q,q,q,A.l(q,q,w?C.dE:B.c,q,q,q,q,q,q,q,q,14,q,q,B.F,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
u=x===0
t=u?"NONE TRADED NOW":"TRADED NOW"
t=r.b35(t,u?E.jS:C.dN)
s=A.hfy(!1,q,!0,new A.D(B.eA,A.W(B.kL,u?E.jS:C.dN,q,q,q,19),q),!1,q,!0,!1,q,q,q,B.a6,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new D.eGi(r,d,e,h),q,q,q,q,20,q,q,q)
u=y.p
return new A.D(B.eK,A.x(A.a([new A.D(C.bKr,A.A(A.a([v,B.aa,t,B.d6,s,B.aZ,A.c("tap one",q,q,q,q,q,q,A.l(q,q,w?C.dk:C.dl,q,q,q,q,q,q,q,q,11,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],u),B.l,q,B.e,B.h,0,q,q),q),new A.a6(q,66,A.hV(B.f,r.cr3(B.d.bl(f,new D.eGj(g))),new D.eGk(r,f,g,h,d),f.length,q,q,B.aL,new D.eGl(),!1),q),B.at],u),B.B,q,B.e,B.h,0,B.p),q)},
bLd(d,e,f){var x,w,v,u,t,s,r=this,q=null,p=D.bF0(e),o=p.length
if(o<2)return r.agA(d,new A.a6(q,120,A.at(A.c("The chart appears after the first reading.",q,q,q,q,q,q,A.l(q,q,d.a?C.dk:C.dl,q,q,q,q,q,q,q,q,q,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),q,q,q),q))
x=B.d.fE(p,Math.max(0,o-r.z))
w=f==null||y.f.b(f.h(0,"option"))?q:D.et(f.h(0,"entryPrice"))
o=y.p
v=A.a([],o)
for(u=0;u<3;++u){t=C.co6[u]
if(t<=12)s="1H"
else s=t<=24?"2H":"4H"
B.d.u(v,A.a([r.czX(d,s,r.z===t,new D.eGa(r,t)),B.bf],o))}v.push(B.aZ)
v.push(r.cJC(e))
v.push(B.bf)
v.push(r.b8J(d,"Trend lines",r.ax,new D.eGb(r),K.xl))
v=A.a([A.A(v,B.l,q,B.e,B.h,0,q,q),B.S,new D.adH(x,d,w,r.ax,D.et(J.t(e,"price")),q)],o)
if(r.ax){s=A.a([r.ayl(d,B.bB,"Fast line (45 min)"),r.ayl(d,B.b2,"Slow line (1 h 45 min)")],o)
if(w!=null)s.push(r.ayl(d,F.uH,"Your pretend buy"))
B.d.u(v,A.a([B.O,A.bZ(B.fT,s,B.br,q,4,14)],o))}return r.aAw(d,A.x(v,B.l,q,B.e,B.h,0,B.p),B.wU)},
cJC(d){var x,w,v,u,t,s,r=null,q=D.fy(J.t(d,"chart")).h(0,"trend")
switch(J.k(q==null?"unknown":q)){case"up":q=C.fe4
break
case"down":q=C.feb
break
case"flat":q=C.fcC
break
default:q=C.fdt
break}x=q.a
w=r
v=r
u=q.b
t=q.c
v=t
w=u
s=x
q=A.n(10)
return A.hc(A.dA(r,r,r,A.p(r,A.W(w,B.c,r,r,r,20),B.f,r,r,new A.o(s,r,r,q,r,r,B.m),r,32,r,r,r,r,r,32),!1,r,r,r,r,!1,r,!1,r,r,r,r,r,r,r,r,r,r,v,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,B.cc,r),r,v,r,B.hj4,r)},
bHS(a6,a7,a8,a9){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null,d="equity",a0=J.a2(a7),a1=D.fy(a0.h(a7,"today")),a2=D.fy(a0.h(a7,"record")),a3=D.fy(a0.h(a7,"ticket")),a4=a2.h(0,"pnlSum")!=null?D.et(a2.h(0,"pnlSum")):D.et(a8.h(0,"totalPnl")),a5=D.et(a1.h(0,"day_pnl"))
a0=y.f
x=a0.b(a8.h(0,"shadow"))?D.fy(a8.h(0,"shadow")):e
w=x!=null
v=0
if(w){u=D.fy(a9.h(0,"held"))
if(u.h(0,"pnl")!=null)v=D.et(u.h(0,"pnl"))
else if(!a0.b(x.h(0,"option"))){t=D.et(J.t(B.d.dC(D.fB1(a9),new D.eG2(x),new D.eG3()),"price"))
if(t>0){a0=D.et(x.h(0,"qty"))
s=x.h(0,"mult")==null?1:D.et(x.h(0,"mult"))
v=a0*s*(t-D.et(x.h(0,"entryPrice")))}}}r=D.fy(a2.h(0,"newRules"))
q=r.h(0,"winRatePct")
p=D.et(a9.h(0,d))
o=a4+v
a0=A.n(26)
s=A.a([new A.aa(0,B.H,B.i0.j(0.3),B.eT,24)],y.V)
n=y.p
m=A.A(A.a([C.h4j,B.aZ,A.p(e,C.h3B,B.f,e,e,new A.o(B.c.j(0.14),e,e,A.n(999),e,e,B.m),e,e,e,e,B.fD,e,e,e)],n),B.l,e,B.e,B.h,0,e,e)
m=A.a([m,B.at,new A.dl(B.ds,B.a5,B.f,A.c(a9.h(0,d)==null?"\u2014":D.hD(p+a4+v,!0,!1),e,e,e,e,e,e,C.fEZ,e,e,e),e)],n)
if(a9.h(0,d)!=null){l=o>=0?C.arj:B.Qc
k=o>0
if(k)j=C.dN
else j=o<0?C.ey:B.ab
j=A.W(l,j,e,e,e,e)
l=D.hD(o,!0,!0)
w=w?" (incl. the open one)":""
if(k)k=C.dN
else k=o<0?C.ey:B.ab
m.push(A.A(A.a([j,A.c(l+" from pretend trades"+w,e,e,e,e,e,e,A.l(e,e,k,e,e,e,e,e,e,e,e,12.5,e,e,B.F,e,e,!0,e,e,e,e,e,e,e,e),e,e,e)],n),B.l,e,B.e,B.h,0,e,e))}m.push(B.bz)
m.push(A.c("Alpaca paper account "+D.hD(p,!0,!1)+" (unchanged, Version 1 sends no orders) \xb7 $"+B.i.a9(D.et(a3.h(0,"amount")),0)+" a trade",e,e,e,e,e,e,X.LD,e,e,e))
m.push(B.aA)
w=D.hD(a5,!0,!0)
if(a5>0)l=C.dN
else l=a5<0?C.ey:B.c
l=A.E(f.AN("Today",w,l),1)
w=D.hD(a4,!0,!0)
if(a4>0)k=C.dN
else k=a4<0?C.ey:B.c
k=A.E(f.AN("All time",w,k),1)
w=a2.h(0,"wins")
w=A.v(w==null?0:w)
j=a2.h(0,"losses")
w=A.A(A.a([l,B.aa,k,B.aa,A.E(f.AN("Wins / losses",w+" / "+A.v(j==null?0:j),B.c),1)],n),B.l,e,B.e,B.h,0,e,e)
l=a1.h(0,"trades")
l=A.v(l==null?0:l)
k=a3.h(0,"maxTradesToday")
l=A.E(f.AN("Trades today",l+" of "+A.v(k==null?4:k),B.c),1)
k=a3.h(0,"dailyStopUsd")
k=A.E(f.AN("Daily stop","-$"+B.i.a9(D.et(k==null?50:k),0),B.c),1)
j=a3.h(0,"totalBrakeUsd")
m.push(f.aR6("RESULTS AND LIMITS",A.a([w,B.O,A.A(A.a([l,B.aa,k,B.aa,A.E(f.AN("Total brake","-$"+B.i.a9(D.et(j==null?100:j),0),B.c),1)],n),B.l,e,B.e,B.h,0,e,e)],n)))
m.push(B.S)
if(J.z(a3.h(0,"kind"),"spot")){w=a3.h(0,"amount")
w="$"+B.i.a9(D.et(w==null?100:w),0)+" BTC"}else{w=a3.h(0,"optionMaxUsd")
w="SPY call \u2264$"+B.i.a9(D.et(w==null?120:w),0)}w=A.E(f.AN("Buys",w,B.c),1)
l=a3.h(0,"takeProfitUsd")
l=A.E(f.AN("Take profit","+$"+B.i.a9(D.et(l==null?50:l),0),C.dN),1)
k=a3.h(0,"stopLossUsd")
w=A.A(A.a([w,B.aa,l,B.aa,A.E(f.AN("Stop loss","-$"+B.i.a9(D.et(k==null?50:k),0),C.ey),1)],n),B.l,e,B.e,B.h,0,e,e)
l=B.c.j(0.1)
k=A.n(14)
j=q==null
if(j)i="No $100 trades yet"
else{i=B.i.a9(D.et(q),0)
h=r.h(0,"wins")
h=A.v(h==null?0:h)
g=r.h(0,"trades")
i=i+"%  \xb7  "+h+" won of "+A.v(g==null?0:g)}if(j)j=B.c
else j=D.et(q)>=50?C.dN:C.ey
m.push(f.aR6("EACH TRADE",A.a([w,B.O,A.p(e,A.A(A.a([A.E(A.x(A.a([C.fWb,B.bz,A.c(i,e,e,e,e,e,e,A.l(e,e,j,e,e,e,e,e,e,e,e,16,e,e,B.F,e,e,!0,e,e,e,e,e,e,e,e),e,e,e)],n),B.B,e,B.e,B.h,0,B.p),1),C.hbP],n),B.l,e,B.e,B.h,0,e,e),B.f,e,e,new A.o(l,e,e,k,e,e,B.m),e,e,e,e,B.eo,e,e,1/0)],n)))
return A.p(e,A.x(m,B.B,e,B.e,B.h,0,B.p),B.f,e,e,new A.o(e,e,e,a0,s,C.caz,B.m),e,e,e,B.e8,B.fc,e,e,e)},
aR6(d,e){var x=null,w=B.v.j(0.14),v=A.n(18),u=A.K(B.c.j(0.16),B.r,1),t=A.a([new A.D(B.aoO,A.c(d,x,x,x,x,x,x,C.fG_,x,x,x),x)],y.p)
B.d.u(t,e)
return A.p(x,A.x(t,B.B,x,B.e,B.h,0,B.p),B.f,x,x,new A.o(w,x,u,v,x,x,B.m),x,x,x,x,B.bT,x,x,1/0)},
AN(d,e,f){var x=null,w=B.c.j(0.1),v=A.n(14)
return A.p(x,A.x(A.a([A.c(d,x,1,B.a2,x,x,x,B.LN,x,x,x),B.bz,new A.dl(B.ds,B.a5,B.f,A.c(e,x,x,x,x,x,x,A.l(x,x,f,x,x,x,x,x,x,x,x,15,x,x,B.F,x,x,!0,x,x,x,x,x,x,x,x),x,x,x),x)],y.p),B.B,x,B.e,B.h,0,B.p),B.f,x,x,new A.o(w,x,x,v,x,x,B.m),x,x,x,x,B.anm,x,x,x)},
crv(a8,a9,b0,b1,b2){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0=null,a1="price",a2=D.et(a9.h(0,"entryPrice")),a3=D.et(a9.h(0,"qty")),a4=a9.h(0,"mult")==null?1:D.et(a9.h(0,"mult")),a5=y.f.b(a9.h(0,"option"))?D.fy(a9.h(0,"option")):a0,a6=J.a2(b0),a7=J.z(a9.h(0,"symbol"),a6.h(b0,"asset"))
if(b2.h(0,a1)!=null)x=D.et(b2.h(0,a1))
else x=a5==null&&a7?D.et(a6.h(b0,a1)):a2
a6=a3*a4
w=a6*a2
v=a6*x
u=v-w
t=a2===0?0:(x-a2)/a2*100
s=u>=0
r=b1.h(0,"takeProfitUsd")
q=D.et(r==null?50:r)
r=b1.h(0,"stopLossUsd")
p=D.et(r==null?50:r)
o=B.i.D((u+p)/(q+p),0,1)
n=a6===0?0:1/a6
m=a2-p*n
a6=a8.a
r=y.p
l=A.A(A.a([A.c("Your pretend position",a0,a0,a0,a0,a0,a0,A.l(a0,a0,a6?C.dE:B.c,a0,a0,a0,a0,a0,a0,a0,a0,16,a0,a0,B.F,a0,a0,!0,a0,a0,a0,a0,a0,a0,a0,a0),a0,a0,a0),B.aZ,d.b35("OPEN",C.dN)],r),B.l,a0,B.e,B.h,0,a0,a0)
k=D.hD(u,!0,!0)
k=A.c(k,a0,a0,a0,a0,a0,a0,A.l(a0,a0,s?C.dN:C.ey,a0,a0,a0,a0,a0,a0,a0,a0,34,a0,a0,B.F,a0,a0,!0,a0,a0,a0,a0,a0,a0,a0,a0),a0,a0,a0)
j=t>=0?"+":""
i=B.i.a9(t,2)
k=A.A(A.a([k,B.aa,new A.D(B.eK,A.c(j+i+"%",a0,a0,a0,a0,a0,a0,A.l(a0,a0,s?C.dN:C.ey,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,B.F,a0,a0,!0,a0,a0,a0,a0,a0,a0,a0,a0),a0,a0,a0),a0)],r),B.dH,a0,B.e,B.h,0,a0,a0)
j=s?"You would be winning right now":"You would be losing right now"
l=A.a([l,B.af,k,A.c(j,a0,a0,a0,a0,a0,a0,A.l(a0,a0,a6?C.dk:C.dl,a0,a0,a0,a0,a0,a0,a0,a0,12.5,a0,a0,a0,a0,a0,!0,a0,a0,a0,a0,a0,a0,a0,a0),a0,a0,a0),B.aA],r)
k=a5!=null
if(k){j=a6?C.CF:C.CH
i=A.n(16)
h=A.c("1 SPY call option",a0,a0,a0,a0,a0,a0,A.l(a0,a0,a6?C.dk:C.dl,a0,a0,a0,a0,a0,a0,a0,a0,11.5,a0,a0,a0,a0,a0,!0,a0,a0,a0,a0,a0,a0,a0,a0),a0,a0,a0)
g=D.hD(D.et(a5.h(0,"strike")),!0,!1)
f=D.hFr(a5.h(0,"expiry"))
g=A.c("Strike "+g+" \xb7 expires "+f,a0,a0,a0,a0,a0,a0,A.l(a0,a0,a6?C.dE:B.c,a0,a0,a0,a0,a0,a0,a0,a0,15,a0,a0,B.F,a0,a0,!0,a0,a0,a0,a0,a0,a0,a0,a0),a0,a0,a0)
f=D.hD(a2,!0,!1)
e=D.hD(w,!0,!1)
B.d.u(l,A.a([A.p(a0,A.x(A.a([h,B.bz,g,B.bz,A.c("Premium paid "+f+" a share x 100 = "+e,a0,a0,a0,a0,a0,a0,A.l(a0,a0,a6?C.dk:C.dl,a0,a0,a0,a0,a0,a0,a0,a0,11.5,a0,a0,a0,a0,a0,!0,a0,a0,a0,a0,a0,a0,a0,a0),a0,a0,a0)],r),B.B,a0,B.e,B.h,0,B.p),B.f,a0,a0,new A.o(j,a0,a0,i,a0,a0,B.m),a0,a0,a0,a0,B.bh,a0,a0,1/0),B.O],r))}j=A.E(d.aAy(a8,"You put in",D.hD(w,!0,!1)),1)
i=D.hD(v,!0,!1)
l.push(A.A(A.a([j,B.aa,A.E(d.aAz(a8,"Worth now",i,s?C.dN:C.ey),1)],r),B.l,a0,B.e,B.h,0,a0,a0))
l.push(B.O)
j=k?"Premium paid":"Bought at"
j=A.E(d.aAy(a8,j,D.hD(a2,!0,!1)),1)
if(k){k=J.z(b2.h(0,"priced"),!1)?"no price yet":D.hD(x,!0,!1)
k=d.aAz(a8,"Premium now",k,s?C.dN:C.ey)}else k=d.aAy(a8,"Amount",B.i.a9(a3,a3<0.01?6:4)+" "+A.v(a9.h(0,"symbol")))
l.push(A.A(A.a([j,B.aa,A.E(k,1)],r),B.l,a0,B.e,B.h,0,a0,a0))
l.push(B.aO)
l.push(A.cf(new D.eGp(a8,o)))
l.push(B.al)
k=D.hD(p,!0,!1)
l.push(A.A(A.a([A.E(A.c("Stop loss\n-"+k+" \xb7 at "+D.hD(m<0?0:m,!0,!1),a0,a0,a0,a0,a0,a0,C.fKV,a0,a0,a0),1),A.E(A.c("Take profit\n+"+D.hD(q,!0,!1)+" \xb7 at "+D.hD(a2+q*n,!0,!1),a0,a0,a0,a0,a0,a0,C.fJv,B.e2,a0,a0),1)],r),B.l,a0,B.e,B.h,0,a0,a0))
l.push(B.al)
r=D.ihB(a9.h(0,"entryAt"))
l.push(A.c("Bought "+r,a0,a0,a0,a0,a0,a0,A.l(a0,a0,a6?C.dk:C.dl,a0,a0,a0,a0,a0,a0,a0,a0,11.5,a0,a0,a0,a0,a0,!0,a0,a0,a0,a0,a0,a0,a0,a0),a0,a0,a0))
return d.agA(a8,A.x(l,B.B,a0,B.e,B.h,0,B.p))},
cg9(d,e){var x,w,v,u=this,t=null,s=J.z(e.h(0,"enabled"),!0)&&!J.z(e.h(0,"brakePaused"),!0),r=s?C.ey:C.dN
r=A.bp(r,t,t,t,t,t,t,t,new A.ba(A.n(999),B.a1),t,t,t)
x=u.r?t:new D.eGc(u,s)
w=A.W(s?B.xm:B.h_,t,t,t,t,t)
r=A.E(new A.a6(t,52,A.dc(w,t,A.c(s?"Stop agent":"Start agent",t,t,t,t,t,t,B.nr,t,t,t),x,r),t),3)
x=d.a
w=x?C.dE:B.c
v=x?C.qF:C.qC
x=x?B.c.j(0.92):C.jN
v=A.di(t,t,x,t,t,t,t,t,t,w,t,t,t,t,new A.ba(A.n(999),B.a1),new A.ax(v,1.5,B.r,-1),t,t,t,t)
x=u.r
w=x?t:u.gcyX()
return new A.D(B.e8,A.A(A.a([r,B.ar,A.E(new A.a6(t,52,A.en(x?B.Le:C.c57,t,C.he1,w,v),t),2)],y.p),B.l,t,B.e,B.h,0,t,t),t)},
bHH(d,e){var x,w,v,u,t,s,r,q,p=null,o=J.z(e.h(0,"enabled"),!0)&&!J.z(e.h(0,"brakePaused"),!0),n=e.h(0,"lastTickAt"),m=A.bi(A.v(n==null?"":n))
if(o)x=C.dN
else x=d.a?C.dk:C.dl
n=new D.eG1(d)
w=d.a
v=w?B.c.j(0.92):C.jN
u=A.n(20)
t=A.K(x.j(0.35),B.r,1)
s=x.j(0.15)
r=A.n(9)
r=A.p(p,A.W(R.a3W,x,p,p,p,17),B.f,p,p,new A.o(s,p,p,r,p,p,B.m),p,28,p,p,p,p,p,28)
s=o?"Trades are automatic":"Agent is stopped"
s=A.E(A.c(s,p,p,p,p,p,p,A.l(p,p,w?C.dE:B.c,p,p,p,p,p,p,p,p,13.5,p,p,B.F,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),1)
q=y.p
s=A.a([A.A(A.a([r,B.aa,s,A.c("Check now only looks",p,p,p,p,p,p,A.l(p,p,w?C.dk:C.dl,p,p,p,p,p,p,p,p,10.5,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)],q),B.l,p,B.e,B.h,0,p,p),B.S],q)
if(o)B.d.u(s,A.a([A.A(A.a([n.$2("Last check",m==null?"not yet":D.aQI(D.bFu(m))+" ET"),B.bf,n.$2("Next buy check",D.hHB())],q),B.l,p,B.e,B.h,0,p,p),B.al,A.A(A.a([n.$2("Looks for a buy","every 15 min"),B.bf,n.$2("Open trade exits","every 5 min")],q),B.l,p,B.e,B.h,0,p,p)],q))
else s.push(A.c("It makes no trades. Press Start and it looks for a buy every 15 minutes by itself.",p,p,p,p,p,p,A.l(p,p,w?C.dk:C.dl,p,p,p,p,p,p,p,p,12,p,p,p,p,1.35,!0,p,p,p,p,p,p,p,p),p,p,p))
return A.p(p,A.x(s,B.B,p,B.e,B.h,0,B.p),B.f,p,p,new A.o(v,p,t,u,p,p,B.m),p,p,p,B.e8,B.bh,p,p,p)},
cJi(b3,b4){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=this,a8=null,a9="entryPrice",b0="exitPrice",b1="outValue",b2=y.g.a(J.t(b4,"trades"))
if(b2==null)b2=B.c9
x=y.f
b2=J.cZ(b2,x)
b2=A.cF(b2,new D.eGG(),b2.$ti.k("M.E"),y.P)
w=A.B(b2,A.a5(b2).k("M.E"))
b2=b3.a
v=y.p
u=A.a([A.c("Pretend trades",a8,a8,a8,a8,a8,a8,A.l(a8,a8,b2?C.dE:B.c,a8,a8,a8,a8,a8,a8,a8,a8,16,a8,a8,B.F,a8,a8,!0,a8,a8,a8,a8,a8,a8,a8,a8),a8,a8,a8),B.O],v)
if(w.length===0){t=A.W(B.h0,b2?C.dk:C.dl,a8,a8,a8,a8)
u.push(new A.D(B.cn,A.A(A.a([t,B.ar,A.E(A.c("No trades yet. Each buy shows what was bought (for a SPY option: strike, expiry and premium) and what was put in; each sell shows the entry and exit price and the win or loss in dollars.",a8,a8,a8,a8,a8,a8,A.l(a8,a8,b2?C.dk:C.dl,a8,a8,a8,a8,a8,a8,a8,a8,12.5,a8,a8,a8,a8,1.3,!0,a8,a8,a8,a8,a8,a8,a8,a8),a8,a8,a8),1)],v),B.l,a8,B.e,B.h,0,a8,a8),a8))}t=J.aS(a7.y?w:A.cS(w,0,A.dy(4,"count",y.S),A.U(w).c))
s=y.N
r=y.z
while(t.C()){q=t.gP(t)
p=J.a2(q)
o=J.z(p.h(q,"decision"),"would buy")
n=p.h(q,"details")
m=x.b(n)?A.a1(n,s,r):A.S(s,r)
if(x.b(m.h(0,"option"))){n=m.h(0,"option")
l=x.b(n)?A.a1(n,s,r):A.S(s,r)}else l=a8
n=l!=null
if(n){k=l.h(0,"strike")
if(!(typeof k=="number")){k=A.cE(A.v(k==null?"":k))
if(k==null)k=0}j="SPY "+D.hD(k,!0,!1)+" call"}else{k=p.h(q,"asset")
j=J.k(k==null?"":k)}if(m.h(0,"amount")==null)i=50
else{k=m.h(0,"amount")
if(typeof k=="number")i=k
else{k=A.cE(A.v(k==null?"":k))
if(k==null)k=0
i=k}}h=m.h(0,"qty")
if(!(typeof h=="number")){k=A.cE(A.v(h==null?"":h))
h=k==null?0:k}g=m.h(0,"pnl")
if(!(typeof g=="number")){k=A.cE(A.v(g==null?"":g))
g=k==null?0:k}f=m.h(0,a9)!=null
e=m.h(0,a9)
if(!(typeof e=="number")){k=A.cE(A.v(e==null?"":e))
e=k==null?0:k}if(m.h(0,b0)==null){k=p.h(q,"price")
if(typeof k=="number")d=k
else{k=A.cE(A.v(k==null?"":k))
if(k==null)k=0
d=k}}else{k=m.h(0,b0)
if(typeof k=="number")d=k
else{k=A.cE(A.v(k==null?"":k))
if(k==null)k=0
d=k}}if(n)if(o)a0="expires "+D.hFr(l.h(0,"expiry"))+" \xb7 premium "+D.hD(e,!0,!1)+" x 100"
else{n=D.hD(e,!0,!1)
k=D.hD(d,!0,!1)
a1=p.h(q,"reason")
a1=J.k(a1==null?"":a1)
a2=B.a.cd(a1,"(")
a0="premium "+n+" to "+k+" \xb7 "+B.a.i(a2>0?B.a.aw(a1,0,a2):a1)}else if(o){if(h===0)n=""
else n=B.i.a9(h,h<0.01?6:4)+" at "
if(f)k=e
else{k=p.h(q,"price")
if(!(typeof k=="number")){k=A.cE(A.v(k==null?"":k))
if(k==null)k=0}}a0=n+D.hD(k,!0,!1)}else{n=f?D.hD(e,!0,!1)+" to ":"at "
k=D.hD(d,!0,!1)
a1=p.h(q,"reason")
a1=J.k(a1==null?"":a1)
a2=B.a.cd(a1,"(")
a0=n+k+" \xb7 "+B.a.i(a2>0?B.a.aw(a1,0,a2):a1)}a3=g>=0
if(o)a4=B.cf
else a4=a3?C.dN:C.ey
n=b2?C.qF:C.qC
k=a4.j(0.14)
a1=new A.aP(13,13)
k=A.p(a8,A.W(o?B.vv:B.tE,a4,a8,a8,a8,20),B.f,a8,a8,new A.o(k,a8,a8,new A.bc(a1,a1,a1,a1),a8,a8,B.m),a8,40,a8,a8,a8,a8,a8,40)
a1=o?"Bought":"Sold"
a5=b2?C.dE:B.c
a1=A.c(a1+" "+j,a8,a8,a8,a8,a8,a8,new A.H(!0,a5,a8,a8,a8,a8,14,B.F,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8),a8,a8,a8)
a5=b2?C.dk:C.dl
a5=A.c(a0,a8,2,B.a2,a8,a8,a8,new A.H(!0,a5,a8,a8,a8,a8,11.5,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8),a8,a8,a8)
q=p.h(q,"et_time")
q=J.k(q==null?"":q)
p=b2?C.dk:C.dl
q=A.x(A.a([a1,B.bz,a5,A.c(q,a8,a8,a8,a8,a8,a8,new A.H(!0,p,a8,a8,a8,a8,10.5,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8),a8,a8,a8)],v),B.B,a8,B.e,B.h,0,B.p)
if(o)p="-"+D.hD(i,!0,!1)
else{if(m.h(0,b1)==null)p=i+g
else{p=m.h(0,b1)
if(!(typeof p=="number")){p=A.cE(A.v(p==null?"":p))
if(p==null)p=0}}p="+"+D.hD(p,!0,!1)}a1=b2?C.dE:B.c
p=A.a([A.c(p,a8,a8,a8,a8,a8,a8,new A.H(!0,a1,a8,a8,a8,a8,14,B.F,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8),a8,a8,a8)],v)
if(!o){a1=D.hD(g,!0,!0)
if(m.h(0,"pct")==null)a5=""
else{a5=m.h(0,"pct")
if(!(typeof a5=="number")){a5=A.cE(A.v(a5==null?"":a5))
if(a5==null)a5=0}a5=a5>=0?"+":""
a6=m.h(0,"pct")
if(!(typeof a6=="number")){a6=A.cE(A.v(a6==null?"":a6))
if(a6==null)a6=0}a6=" ("+a5+B.i.a9(a6,2)+"%)"
a5=a6}a6=a3?C.dN:C.ey
p.push(A.c(a1+a5,a8,a8,a8,a8,a8,a8,new A.H(!0,a6,a8,a8,a8,a8,12,B.F,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8),a8,a8,a8))}if(o){a1=b2?C.dk:C.dl
p.push(A.c("put in",a8,a8,a8,a8,a8,a8,new A.H(!0,a1,a8,a8,a8,a8,11,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8),a8,a8,a8))}u.push(A.p(a8,new A.c3(B.aL,B.e,B.h,B.l,a8,B.p,a8,0,A.a([k,B.bb,new A.bz(1,B.ba,q,a8),B.aa,A.x(p,B.dH,a8,B.e,B.h,0,B.p)],v),a8),B.f,a8,a8,new A.o(a8,a8,new A.bE(B.a1,B.a1,new A.ax(n,1,B.r,-1),B.a1),a8,a8,a8,B.m),a8,a8,a8,a8,B.jW,a8,a8,a8))}b2=w.length
if(b2>4)u.push(A.at(A.bN(!1,A.c(a7.y?"Show less":"Show all ("+b2+")",a8,a8,a8,a8,a8,a8,a8,a8,a8,a8),a8,a8,!0,a8,a8,a8,new D.eGH(a7),a8,a8),a8,a8,a8))
return a7.agA(b3,A.x(u,B.B,a8,B.e,B.h,0,B.p))},
bEQ(d){var x,w,v,u=this,t=null,s=u.x,r=u.e
r=s?r:A.cS(r,0,A.dy(4,"count",y.S),A.U(r).c).dn(0)
s=d.a
x=A.c("Agent activity",t,t,t,t,t,t,A.l(t,t,s?C.dE:B.c,t,t,t,t,t,t,t,t,16,t,t,B.F,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)
w=y.p
w=A.a([A.A(A.a([x,B.aZ,A.c("newest first",t,t,t,t,t,t,A.l(t,t,s?C.dk:C.dl,t,t,t,t,t,t,t,t,11,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],w),B.l,t,B.e,B.h,0,t,t),B.al],w)
if(u.e.length===0)w.push(new A.D(B.f8,A.c("Nothing yet. A new line appears with every 15-minute check.",t,t,t,t,t,t,A.l(t,t,s?C.dk:C.dl,t,t,t,t,t,t,t,t,12.5,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),t))
for(s=r.length,v=0;v<r.length;r.length===s||(0,A.I)(r),++v)w.push(u.c7f(d,r[v]))
if(u.e.length>4){if(u.x)s=u.w?"Show older":"Show less"
else s="Show all"
w.push(A.at(A.bN(!1,A.c(s,t,t,t,t,t,t,t,t,t,t),t,t,!0,t,t,t,new D.eG0(u),t,t),t,t,t))}return u.agA(d,A.x(w,B.B,t,B.e,B.h,0,B.p))},
c7f(d,e){var x,w,v,u,t,s=null,r="price",q=J.a2(e),p=q.h(e,"decision"),o=J.k(p==null?"":p)
A:{if("would buy"===o){p=C.dN
break A}if("would sell"===o){p=B.bB
break A}if("hold"===o){p=B.b2
break A}if("day start"===o||"day end"===o){p=B.cf
break A}if("start"===o){p=C.dN
break A}if("stop"===o){p=C.ey
break A}if(J.z(q.h(e,"kind"),"error"))p=C.ey
else p=d.a?C.dk:C.dl
break A}x=q.h(e,"fast_ma")!=null&&q.h(e,"slow_ma")!=null
w=A.p(s,s,B.f,s,s,new A.o(p,s,s,s,s,s,B.a6),s,8,s,H.a1x,s,s,s,8)
v=o==="hold"?"Still holding":D.hF4(o)
u=y.p
p=A.a([A.c(v,s,s,s,s,s,s,A.l(s,s,p,s,s,s,s,s,s,s,s,12.5,s,s,B.F,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],u)
if(J.z(D.fy(q.h(e,"details")).h(0,"by"),"cron"))B.d.u(p,A.a([B.bf,A.c("automatic",s,s,s,s,s,s,A.l(s,s,d.a?C.dk:C.dl,s,s,s,s,s,s,s,s,10,s,s,B.P,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],u))
p.push(B.aZ)
v=q.h(e,"et_time")
v=D.io7(J.k(v==null?"":v))
t=d.a
p.push(A.c(v,s,s,s,s,s,s,A.l(s,s,t?C.dk:C.dl,s,s,s,s,s,s,s,s,10.5,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s))
p=A.A(p,B.l,s,B.e,B.h,0,s,s)
v=q.h(e,"reason")
v=D.hF4(J.k(v==null?"":v))
p=A.a([p,A.c(v,s,s,s,s,s,s,A.l(s,s,t?C.dE:B.c,s,s,s,s,s,s,s,s,12.5,s,s,s,s,1.3,!0,s,s,s,s,s,s,s,s),s,s,s)],u)
if(q.h(e,r)!=null||x){v=A.a([],y.s)
if(q.h(e,"asset")!=null&&q.h(e,r)!=null)v.push(A.v(q.h(e,"asset"))+" "+D.hD(D.et(q.h(e,r)),!0,!1))
if(x)v.push("fast "+B.i.a9(D.et(q.h(e,"fast_ma")),2)+" \xb7 slow "+B.i.a9(D.et(q.h(e,"slow_ma")),2))
q=B.d.aL(v,"  \xb7  ")
p.push(A.c(q,s,s,s,s,s,s,A.l(s,s,t?C.dk:C.dl,s,s,s,s,s,s,s,s,10.5,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s))}return new A.D(W.Hz,A.A(A.a([w,B.ar,A.E(A.x(p,B.B,s,B.e,B.h,0,B.p),1)],u),B.B,s,B.e,B.h,0,s,s),s)},
cxU(d,e){var x,w,v,u,t,s,r,q,p,o,n,m=null,l=this.c
l.toString
l=A.Q(l).bgj(B.L)
x=d.a
w=x?C.dE:B.c
v=x?C.dk:C.dl
u=A.W(C.bVO,B.b2,m,m,m,m)
t=y.p
s=A.A(A.a([new A.d5(1,B.cg,A.c("The rules it follows",m,m,m,m,m,m,A.l(m,m,x?C.dE:B.c,m,m,m,m,m,m,m,m,14.5,m,m,B.F,m,m,!0,m,m,m,m,m,m,m,m),m,m,m),m),B.aa,A.aA(m,A.p(m,C.fob,B.f,m,m,new A.o(m,m,m,A.n(999),m,H.tN,B.m),m,m,m,m,B.hl,m,m,m),B.y,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,this.gclv(),m,m,m,m,m,m,!1,B.a4)],t),B.l,m,B.e,B.h,0,m,m)
r=A.c("Read-only, set in the code",m,m,m,m,m,m,A.l(m,m,x?C.dk:C.dl,m,m,m,m,m,m,m,m,11.5,m,m,m,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)
q=A.a([],t)
p=y.g.a(J.t(e,"rules"))
p=J.aS(p==null?B.c9:p)
while(p.C()){o=J.k(p.gP(p))
n=x?C.dE:B.c
q.push(new A.D(C.bEz,new A.c3(B.aL,B.e,B.h,B.B,m,B.p,m,0,A.a([C.eCT,B.aa,new A.bz(1,B.ba,A.c(o,m,m,m,m,m,m,new A.H(!0,n,m,m,m,m,12.5,m,m,m,m,m,1.35,m,m,m,m,m,m,m,m,m,m,m,m,m),m,m,m),m)],t),m),m))}return this.aAw(d,new A.pd(l,A.aG(!1,B.a3,!0,m,Q.hu3(m,q,T.anQ,m,v,w,!1,u,m,r,B.hc,s),B.f,m,0,m,m,m,m,m,B.ie),m),B.ag)},
aAw(d,e,f){var x=null,w=d.a,v=w?B.c.j(0.92):C.jN,u=A.n(24)
return A.p(x,e,B.f,x,x,new A.o(v,x,A.K(w?B.c:C.qM,B.r,1),u,A.a([new A.aa(0,B.H,d.gWB(),B.dp,24)],y.V),x,B.m),x,x,x,B.e8,f,x,x,x)},
agA(d,e){return this.aAw(d,e,B.bQ)},
aaB(d,e,f){var x=null,w=f.j(0.12),v=A.n(16),u=A.K(f.j(0.45),B.r,1),t=A.W(B.a4m,f,x,x,x,20)
return A.p(x,A.A(A.a([t,B.ar,A.E(A.c(e,x,x,x,x,x,x,A.l(x,x,d.a?C.dE:B.c,x,x,x,x,x,x,x,x,12.5,x,x,x,x,1.35,!0,x,x,x,x,x,x,x,x),x,x,x),1)],y.p),B.l,x,B.e,B.h,0,x,x),B.f,x,x,new A.o(w,x,u,v,x,x,B.m),x,x,x,B.e8,B.bh,x,x,x)},
b37(d,e,f){var x=null,w=d.a,v=w?B.c.j(0.92):C.jN,u=A.K(w?B.c:C.qM,B.r,1)
return A.aG(!1,B.a3,!0,x,A.aM(!1,x,!0,A.p(x,A.W(e,w?C.dE:B.c,x,x,x,18),B.f,x,x,new A.o(x,x,u,x,x,x,B.a6),x,40,x,x,x,x,x,40),B.cK,!0,x,x,x,x,x,x,x,x,x,x,x,f,x,x,x,x,x,x,x),B.f,v,0,x,x,B.cK,x,x,B.ai)},
b8J(d,e,f,g,h){var x,w,v,u,t,s,r,q=null
if(f){x=d.a
w=x?C.mV:B.c
v=w
w=x
x=v}else{x=d.a
w=x?C.O2:C.NU
v=w
w=x
x=v}u=A.n(999)
t=y.p
s=A.a([],t)
if(h!=null){if(f)r=w?B.c:C.mV
else r=w?C.dk:C.dl
B.d.u(s,A.a([A.W(h,r,q,q,q,14),B.d6],t))}if(f)w=w?B.c:C.mV
else w=w?C.dk:C.dl
s.push(A.c(e,q,q,q,q,q,q,A.l(q,q,w,q,q,q,q,q,q,q,q,11.5,q,q,B.P,q,q,!0,q,q,q,q,q,q,q,q),q,q,q))
return A.aA(q,A.cT(q,A.A(s,B.l,q,B.e,B.M,0,q,q),q,q,B.b_,new A.o(x,q,q,u,q,q,B.m),B.eJ,q,q,q,q,Z.a1C,q,q,q),B.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,g,q,q,q,q,q,q,!1,B.a4)},
czX(d,e,f,g){return this.b8J(d,e,f,g,null)},
ayl(d,e,f){var x=null,w=A.p(x,x,B.f,x,x,new A.o(e,x,x,A.n(2),x,x,B.m),x,3,x,x,x,x,x,14)
return A.A(A.a([w,B.e1,A.c(f,x,x,x,x,x,x,A.l(x,x,d.a?C.dk:C.dl,x,x,x,x,x,x,x,x,11,x,x,x,x,x,!0,x,x,x,x,x,x,x,x),x,x,x)],y.p),B.l,x,B.e,B.M,0,x,x)},
b35(d,e){var x=null,w=e.j(0.14),v=A.n(999)
return A.p(x,A.c(d,x,x,x,x,x,x,A.l(x,x,e,x,x,x,x,x,x,x,x,10,x,x,B.u,x,x,!0,x,0.6,x,x,x,x,x,x),x,x,x),B.f,x,x,new A.o(w,x,x,v,x,x,B.m),x,x,x,x,B.fD,x,x,x)},
aAz(d,e,f,g){var x=null,w=d.a,v=w?C.CF:C.CH,u=A.n(16),t=A.c(e,x,x,x,x,x,x,A.l(x,x,w?C.dk:C.dl,x,x,x,x,x,x,x,x,11.5,x,x,x,x,x,!0,x,x,x,x,x,x,x,x),x,x,x)
if(g==null)w=w?C.dE:B.c
else w=g
return A.p(x,A.x(A.a([t,B.cN,new A.dl(B.ds,B.a5,B.f,A.c(f,x,x,x,x,x,x,A.l(x,x,w,x,x,x,x,x,x,x,x,16,x,x,B.F,x,x,!0,x,x,x,x,x,x,x,x),x,x,x),x)],y.p),B.B,x,B.e,B.h,0,B.p),B.f,x,x,new A.o(v,x,x,u,x,x,B.m),x,x,x,x,B.bh,x,x,x)},
aAy(d,e,f){return this.aAz(d,e,f,null)},
cMh(d){var x=A.v(d==null?"":d),w=A.bi(x.length>=19?B.a.aw(x,0,19):"")
if(w==null)return""
return" \xb7 opens "+B.Td[A.lU(w)-1]+" "+D.aQI(w)+" ET"}}
D.adH.prototype={
S(){return new D.bel()}}
D.bel.prototype={
aAx(d,e){var x=this,w=x.a.c.length,v=B.o.D(B.i.bc(d.a/e*w),0,w-1)
if(v!==x.d)x.l(new D.cWV(x,v))},
B(d){return A.cf(new D.cX3(this))}}
D.bem.prototype={
a4(c9,d0){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2=this,c3=null,c4={},c5=d0.b,c6=c5-18,c7=y.n,c8=A.a([],c7)
for(x=c2.c,w=x.length,v=0;u=x.length,v<u;x.length===w||(0,A.I)(x),++v){t=x[v]
u=J.a2(t)
s=u.h(t,"h")
if(!(typeof s=="number")){s=A.cE(A.v(s==null?"":s))
if(s==null)s=0}u=u.h(t,"l")
if(!(typeof u=="number")){u=A.cE(A.v(u==null?"":u))
if(u==null)u=0}B.d.u(c8,A.a([s,u],c7))}w=c2.f
if(w)for(v=0;v<x.length;x.length===u||(0,A.I)(x),++v){t=x[v]
s=A.a([],c7)
r=J.a2(t)
if(r.h(t,"f")!=null){q=r.h(t,"f")
if(!(typeof q=="number")){q=A.cE(A.v(q==null?"":q))
if(q==null)q=0}s.push(q)}if(r.h(t,"s")!=null){r=r.h(t,"s")
if(!(typeof r=="number")){r=A.cE(A.v(r==null?"":r))
if(r==null)r=0}s.push(r)}B.d.u(c8,s)}c7=c2.e
u=c7!=null
if(u)c8.push(c7)
s=c2.r
r=s>0
if(r)c8.push(s)
c4.a=B.d.eH(c8,B.pr)
p=c4.b=B.d.eH(c8,B.or)
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
k=new D.cX4(l)
j=new D.cX6(c4,c6)
$.T()
i=A.L()
q=c2.d.a
i.r=(q?C.qF:C.qC).j(0.7).gp(0)
i.c=1
for(h=1;h<=3;++h){g=c6*h/4
for(f=0;f<c8;f+=6)c9.ah(new A.r(f,g),new A.r(f+2,g),i)}if(w){w=new D.cX5(c2,m,k,j,c9)
w.$2("s",B.b2)
w.$2("f",B.bB)}for(w=Math.max(2,l*0.62)/2,e=c2.w,d=e!=null,h=0;h<m;++h){t=x[h]
a0=J.a2(t)
a1=a0.h(t,"o")
if(!(typeof a1=="number")){a2=A.cE(A.v(a1==null?"":a1))
a1=a2==null?0:a2}a3=a0.h(t,"c")
if(!(typeof a3=="number")){a2=A.cE(A.v(a3==null?"":a3))
a3=a2==null?0:a2}a4=a0.h(t,"h")
if(!(typeof a4=="number")){a2=A.cE(A.v(a4==null?"":a4))
a4=a2==null?0:a2}a5=a0.h(t,"l")
if(!(typeof a5=="number")){a0=A.cE(A.v(a5==null?"":a5))
a5=a0==null?0:a0}a6=a3>=a1?C.dN:E.jS
a7=d&&e!==h
$.T()
a8=new A.as(B.T,B.Q,B.W,B.X,B.U)
a8.r=(a7?a6.j(0.45):a6).gp(0)
a0=k.$1(h)
a2=j.$1(a4)
a9=k.$1(h)
b0=j.$1(a5)
a8.c=1.4
c9.ah(new A.r(a0,a2),new A.r(a9,b0),a8)
b1=j.$1(Math.max(a1,a3))
b2=j.$1(Math.min(a1,a3))
b0=A.bx(new A.a3(k.$1(h)-w,b1,k.$1(h)+w,Math.max(b2,b1+1.5)),B.hC)
a8.b=B.Q
c9.aq(b0,a8)}if(u)c2.aUi(c9,j.$1(c7),c8,F.uH,"Buy "+D.hD(c7,!0,!1),!0)
if(r){c7=j.$1(s)
c2.bP1(c9,c7,c8,(q?C.dE:B.c).j(0.55),D.hD(s,!0,!1))}b3=A.h0(c3,B.cH,c3,c3,c3,c3,B.a7,B.cd,c3,B.e3,B.ce)
for(c7=[0,m/3|0,B.o.ap(2*m,3),m-1],w=c7.length,c5-=13,u=c2.b,v=0;v<w;++v){h=c7[v]
s=J.t(x[h],"t")
b4=A.bi(A.v(s==null?"":s))
if(b4==null)continue
s=D.aQI(D.bFu(b4))
r=q?C.dk:C.dl
b3.sb1(0,new A.eD(s,c3,c3,B.cV,c3,c3,c3,c3,c3,c3,new A.H(!0,r,c3,u,c3,c3,10,c3,c3,c3,c3,c3,c3,c3,c3,c3,c3,c3,c3,c3,c3,c3,c3,c3,c3,c3)))
b3.eY()
s=k.$1(h)
r=b3.b.c
b3.a4(c9,new A.r(B.i.D(s-r/2,0,c8-r),c5))}if(d&&e<m){t=x[e]
f=k.$1(e)
c5=J.a2(t)
b5=j.$1(D.et(c5.h(t,"c")))
$.T()
b6=A.L()
b6.r=(q?C.dE:B.c).j(0.5).gp(0)
b6.c=1
for(b7=0;b7<c6;b7+=6)c9.ah(new A.r(f,b7),new A.r(f,b7+3),b6)
$.T()
c7=A.L()
c7.r=(q?B.c.j(0.92):C.jN).gp(0)
c9.O(new A.r(f,b5),6,c7)
c7=A.L()
c7.r=(q?C.dE:B.c).gp(0)
c7.b=B.ac
c7.c=2.5
c9.O(new A.r(f,b5),6,c7)
c7=c5.h(t,"t")
b4=A.bi(A.v(c7==null?"":c7))
c7=b4==null?"":D.aQI(D.bFu(b4))+" ET\n"
c5=D.hD(D.et(c5.h(t,"c")),!0,!1)
b3.sb1(0,A.d1(c3,c3,c3,c3,c3,c3,c3,c3,c3,A.l(c3,c3,q?B.c:C.mV,c3,c3,c3,c3,c3,u,c3,c3,11.5,c3,c3,B.F,c3,1.3,!0,c3,c3,c3,c3,c3,c3,c3,c3),c7+c5))
b3.sDc(0,B.K)
b3.eY()
c5=b3.b
b8=c5.c+18
c5=c5.a.c
b9=c5.gb8(c5)+10
c0=B.i.D(f-b8/2,0,c8-b8)
c1=Math.max(0,b5-b9-14)
c8=A.bx(new A.a3(c0,c1,c0+b8,c1+b9),B.hS)
c5=A.L()
c5.r=(q?C.mV:B.c).gp(0)
c9.aq(c8,c5)
b3.a4(c9,new A.r(c0+9,c1+5))}},
aUi(d,e,f,g,h,i){var x,w,v,u,t,s,r,q,p,o,n=null
$.T()
x=A.L()
x.r=g.gp(0)
x.c=1.2
for(w=0;w<f;w+=7)d.ah(new A.r(w,e),new A.r(w+3.5,e),x)
v=A.h0(n,B.cH,n,n,n,A.d1(n,n,n,n,n,n,n,n,n,A.l(n,n,B.c,n,n,n,n,n,this.b,n,n,10,n,n,B.F,n,n,!0,n,n,n,n,n,n,n,n),h),B.a7,B.cd,n,B.e3,B.ce)
v.eY()
u=v.b
t=u.c+12
u=u.a.c
s=u.gb8(u)+6
r=i?0:f-t
u=e-s/2
q=A.bx(new A.a3(r,u,r+t,u+s),B.qc)
$.T()
p=A.L()
if(i)o=F.uH
else o=this.d.a?C.mV:B.c
p.r=o.gp(0)
d.aq(q,p)
v.a4(d,new A.r(r+6,u+3))},
bP1(d,e,f,g,h){return this.aUi(d,e,f,g,h,!1)},
aC(d){var x=this
return d.c!==x.c||d.w!=x.w||d.f!==x.f||d.e!=x.e||d.r!==x.r||d.d.a!==x.d.a}}
D.bwh.prototype={
a4(d,e){var x,w,v,u,t,s,r,q,p,o,n=null,m=this.b
if(m.length<2)return
x=A.U(m).k("O<1,G>")
w=A.B(new A.O(m,new D.fh2(),x),x.k("ak.E"))
v=B.d.eH(w,B.pr)
u=B.d.eH(w,B.or)-v
if(u<1e-9)u=1
m=$.T()
x=A.a([],y.v)
t=new A.aH(m.r,B.aj,n,n,x)
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
t.ac()}}o=A.zQ(t)
o.E(new A.aq(m,s))
o.E(new A.aq(0,s))
o.E(new A.bA())
$.T()
x=A.L()
q=this.c
x.san(new A.a7(B.aX,B.b1,B.x,A.a([q.j(0.25),q.j(0)],y.O),n,n).az(0,new A.a3(0,0,0+m,0+s)))
d.af(o,x)
x=A.L()
x.r=q.gp(0)
x.b=B.ac
x.c=1.8
x.e=B.dO
d.af(t,x)
x=B.d.gal(w)
p=A.L()
p.r=q.gp(0)
d.O(new A.r(m,s-(x-v)/u*s),3,p)},
aC(d){return d.b!==this.b||!d.c.A(0,this.c)}}
D.z3.prototype={}
D.a1x.prototype={
gWB(){return this.a?B.cf.j(0.08):B.v.j(0.35)}}
D.aCv.prototype={
S(){return new D.bhS()}}
D.bhS.prototype={
a_(){this.a3()
this.d=A.d2(B.fB,new D.die(this))},
t(){var x=this.d
if(x!=null)x.a1(0)
this.a2()},
B(d){var x=null,w=this.a.c*60,v=B.o.F(B.o.ap(new A.V(Date.now(),0,!1).ab().a,1000),w),u=v<15,t=w-v,s=u?"ENTER NOW":"Enter in "+B.o.ap(t,60)+":"+B.a.b0(B.o.v(B.o.F(t,60)),2,"0"),r=u?B.c:B.c.j(0.18),q=A.n(999),p=u?B.fY:B.ne
p=A.W(p,u?B.v:B.c,x,x,x,20)
return A.cT(x,A.A(A.a([p,B.bf,A.c(s,x,x,x,x,x,x,A.l(x,x,u?B.v:B.c,x,x,x,x,x,x,x,I.Jg,22,x,x,B.u,x,x,!0,x,x,x,x,x,x,x,x),x,x,x)],y.p),B.l,x,B.e,B.M,0,x,x),x,x,B.b_,new A.o(r,x,x,q,x,x,B.m),B.i9,x,x,x,x,B.HM,x,x,x)}}
D.cC.prototype={}
D.uv.prototype={}
D.XF.prototype={
S(){var x,w,v,u,t=null,s=y.N,r=y.z
r=A.J(["done",A.a([],y.s),"lessons",A.S(s,r)],s,r)
x=$.hkh
w=$.az()
v=A.mj(0,t,t)
u=A.a([],y.t)
return new D.aHl(r,new A.au(new A.bd(x,B.b6,B.aP),w),v,u,new A.au(B.ax,w),A.S(s,s),A.S(s,y.R),B.Z,t,t)}}
D.a_A.prototype={}
D.aHl.prototype={
gLg(){var x,w=this,v=w.d
if(v===$){w.a.toString
x=A.acv(null,0,3,w)
w.d!==$&&A.bF()
w.d=x
v=x}return v},
gK_(){var x=y.g.a(this.x.h(0,"done"))
if(x==null)x=B.c9
return J.b8(x,new D.eGT(),y.N).fC(0)},
a_(){var x,w,v,u=this
u.a3()
x=u.e=u.a.c
w=x==null
u.y=!w
u.ay=D.eHF(w?null:J.t(x,"fx"))
x=u.a.c
v=D.eHF(x==null?null:J.t(x,"markets"))
if(v.length!==0)u.f=v
u.r=new A.V(Date.now(),0,!1)
u.gLg().aU(0,new D.eHL(u))
$.aLX=$.aLX+1
u.at.aU(0,new D.eHM(u))
if($.DB.length!==0||$.ah9)u.aCT()
if(!u.a.d){u.a0L()
u.Rc()
A.SZ().bE(new D.eHN(u),y.H)
u.w=A.d2(B.hb,new D.eHO(u))}},
t(){var x,w=this,v=w.w
if(v!=null)v.a1(0)
v=w.as
if(v!=null)v.a1(0)
w.gLg().t()
v=w.cy
x=$.az()
v.V$=x
v.W$=0
v=w.at
v.V$=x
v.W$=0
w.ax.t()
D.hE3()
w.bBq()},
a0L(){return this.c72()},
c72(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g
var $async$a0L=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:h={}
h.a=null
u=4
x=7
return A.b(A.aB(),$async$a0L)
case 7:r=e
q=A.aW(J.t(r.a,"ngmy_signal_grid_academy_v2"))
o=q!=null?h.a=A.a1(y.f.a(B.V.aP(0,q,null)),y.N,y.z):null
p=r.qF("ngmy_signal_grid_lessons_done")
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
return A.b(A.h1(A.J(["action","paLearnGet"],o,n),!1,!1,!1,!1,B.hb),$async$a0L)
case 8:l=e
if(s.c==null){x=1
break}k=l==null?null:J.t(l,"progress")
j=y.f
if(j.b(k)){l.toString
i=A.a1(j.a(J.t(l,"progress")),o,n)}else i=null
s.l(new D.eHd(h,s,l,i))
if(i==null&&h.a!=null)s.aCJ()
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a0L,w)},
aCJ(){var x=this.as
if(x!=null)x.a1(0)
this.as=A.cy(O.CY,new D.eHo(this))},
ae6(d){return this.c69(d)},
c69(d){var x=0,w=A.j(y.H),v=this,u,t,s
var $async$ae6=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=B.d.cw(C.Eg,new D.eGW(v))
v.l(new D.eGX(v,d))
v.aCJ()
u=B.d.cw(C.Eg,new D.eGY(v))
x=!s&&u&&v.c!=null?2:3
break
case 2:t=v.c
t.toString
x=4
return A.b(A.ce(null,null,!0,null,new D.eGZ(v),t,null,!0,!0,y.H),$async$ae6)
case 4:case 3:return A.h(null,w)}})
return A.i($async$ae6,w)},
Rc(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$Rc=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(A.h1(A.J(["action","paSignals"],y.N,y.z),!1,!1,!1,!1,B.CU),$async$Rc)
case 3:s=e
if(u.c==null||s==null||!J.z(J.t(s,"ok"),!0)){x=1
break}t=J.a2(s)
u.l(new D.eHn(u,D.eHF(t.h(s,"fx")),D.eHF(t.h(s,"markets")),s))
u.ch6()
case 1:return A.h(v,w)}})
return A.i($async$Rc,w)},
ch6(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g="decision",f=A.a([],y.s)
for(x=i.gaai(),w=x.length,v=i.db,u=y.N,t=y.z,s=y.f,r=i.dx,q=0;q<x.length;x.length===w||(0,A.I)(x),++q){p=x[q]
o=J.a2(p)
n=J.k(o.h(p,"asset"))
o=o.h(p,"reading")
m=s.b(o)?A.a1(o,u,t):A.S(u,t)
l=B.d.q(C.aCe,m.h(0,g))
if(m.h(0,g)==null||J.z(m.h(0,g),"NO_DATA")||J.z(m.h(0,g),"CLOSED"))k="unknown"
else if(l){o=J.z(m.h(0,"dir"),"up")?"up":"down"
k=o}else k="no direction"
j=v.h(0,n)
if(j!=null&&j!==k&&k!=="unknown"&&j!=="unknown"){r.n(0,n,new A.bsX(new A.V(Date.now(),0,!1),j,k))
f.push(n+" now "+k.toUpperCase())}v.n(0,n,k)}r.bq(r,new D.eHe())
if(f.length!==0&&i.c!=null){i.l(new D.eHf())
x=i.c.K(y.q).f
u=A.cS(f,0,A.dy(3,"count",y.S),u).aL(0," \xb7 ")
w=f.length
w=w>3?" and "+(w-3)+" more":""
x.T(A.b2(h,h,h,B.i0,h,B.t,h,A.c("Signal changed: "+u+w,h,h,h,h,h,h,h,h,h,h),h,B.lv,h,h,h,h,h,h,h,h,h,h))}},
gaai(){var x=A.B(this.gyB(),y.P)
B.d.u(x,this.ay)
return x},
gyB(){var x=this.f
if(x==null){x=this.e
x=D.fB1(D.fy(D.fy(x==null?null:J.t(x,"state")).h(0,"snapshot")))}return x},
gcEe(){var x=this.gyB(),w=A.U(x).k("X<1>"),v=A.B(new A.X(x,new D.eHD(),w),w.k("M.E"))
if(v.length===0)return this.gyB().length===0?null:B.d.gH(this.gyB())
B.d.b_(v,new D.eHE())
return B.d.gH(v)},
c6G(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null,d=" dollars. It sells at +50 or -50 dollars.",a0=f.e,a1=D.fy(a0==null?e:J.t(a0,"state"))
a0=y.f
x=a0.b(a1.h(0,"shadow"))?D.fy(a1.h(0,"shadow")):e
w=f.e
v=D.fy(w==null?e:J.t(w,"today"))
w=f.e
u=D.fy(w==null?e:J.t(w,"record"))
w=f.fr
if(!(w.length!==0)){w=f.e
w=w==null?e:J.t(w,"nowEt")
if(w==null)w="unknown"}w="LIVE DATA from the NGMY paper trading agent (Eastern Time now: "+A.v(w)+"):\n"
if(f.e!=null){t=J.z(a1.h(0,"enabled"),!0)?"running":"stopped"
s=J.z(a1.h(0,"brakePaused"),!0)?", paused by the 25 dollar brake":""
r=D.hD(D.et(a1.h(0,"totalPnl")),!0,!0)
q=D.hD(D.et(v.h(0,"day_pnl")),!0,!0)
p=u.h(0,"wins")
p=A.v(p==null?0:p)
o=u.h(0,"losses")
w+="Agent: "+t+s+". Pretend P/L all time "+r+", today "+q+", wins "+p+", losses "+A.v(o==null?0:o)+".\n"}if(f.e==null)a0=w
else if(x!=null){n=D.et(J.t(B.d.dC(f.gyB(),new D.eH1(x),new D.eH2()),"price"))
m=D.et(x.h(0,"entryPrice"))
l=a0.b(x.h(0,"option"))?D.fy(x.h(0,"option")):e
a0=f.e
k=D.fy(D.fy(D.fy(a0==null?e:J.t(a0,"state")).h(0,"snapshot")).h(0,"held"))
j=k.h(0,"pnl")==null?e:D.et(k.h(0,"pnl"))
i=j==null?"unknown":B.i.a9(j,2)
a0=w+((l!=null?"Open pretend trade: 1 SPY call option, strike "+B.i.a9(D.et(l.h(0,"strike")),0)+", expires "+A.v(l.h(0,"expiry"))+", premium paid "+B.i.a9(m,2)+" a share ("+B.i.a9(D.et(l.h(0,"cost")),2)+" dollars). Win or loss now: "+i+d:"Open pretend trade: "+A.v(x.h(0,"symbol"))+", bought at "+B.i.a9(m,2)+", now "+B.i.a9(n,2)+". Win or loss now: "+i+d)+"\n")}else a0=w+"No open pretend trade.\n"
h=new D.eH3()
a0+="Agent markets (5-minute candles; fast line = 9-candle average, slow = 21-candle average; strength 0 bearish to 100 bullish):\n"
for(w=f.gyB(),t=w.length,g=0;g<w.length;w.length===t||(0,A.I)(w),++g)a0+=A.v(h.$1(w[g]))+"\n"
w=f.ay
t=w.length
if(t!==0){a0+="Forex pairs (real interbank prices, 1-minute candles, signals only; the agent does not trade them; OTC prices at brokers differ):\n"
for(g=0;g<w.length;w.length===t||(0,A.I)(w),++g)a0+=A.v(h.$1(w[g]))+"\n"}return a0.charCodeAt(0)==0?a0:a0},
JZ(d){return this.bHl(d)},
bHl(d){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o,n,m,l,k
var $async$JZ=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:k=B.a.i(d)
if(k.length===0||$.ah9){x=1
break}u.at.bN(0,B.ci)
u.l(new D.eGP(u,k))
u.aCT()
t=$.DB.length
if(t>1){t=B.d.dt($.DB,Math.max(0,t-9),t-1)
s=new A.O(t,new D.eGQ(),A.U(t).k("O<1,m>")).aL(0,"\n")}else s=""
t=u.e
t=t==null?null:J.t(t,"rules")
y.g.a(t)
if(t==null)t=u.dy
r=y.N
q=J.b8(t,new D.eGR(),r).aL(0,"\n")
t=u.c6G()
p=s.length===0?"":"\nCONVERSATION SO FAR:\n"+s+"\n"
o=$.fnz
x=u.a.d?3:5
break
case 3:n="Preview mode: the tutor answers here using the live readings."
x=4
break
case 5:x=6
return A.b(A.h1(A.J(["action","chat","prompt",'You are the NGMY Signal Grid trading tutor. You teach a complete beginner how trading works, using the live market data and the rules of the NGMY paper trading agent below.\nHow to answer:\n- Plain, friendly, simple English. Short sentences. No jargon without explaining it. Usually under 170 words.\n- When the question is about a market or "right now", use the LIVE DATA and quote the real numbers (price, trend, strength, RSI, last hour), then explain what they mean and what the agent\'s rules say.\n- Say clearly whether a market looks bullish, bearish or sideways and why, and what would need to happen for a buy or sell signal under the agent\'s rules.\n- This is practice with pretend (paper) money. You may explain what the rules signal, but never promise profit, never say a price will surely go up or down, and never tell the student to trade real or borrowed money. Remind them briefly when it fits that signals can fail and the stop loss keeps losses small.\n- No markdown headings or tables. You may use short lines starting with "- ".\n\nAGENT RULES:\n'+q+"\n\n"+t+"\n"+p+"\nStudent: "+k+"\nTutor:"],r,y.z),!1,!1,!1,!1,B.nT),$async$JZ)
case 6:m=f
t=m==null
if(t)l=null
else{r=J.t(m,"text")
r=r==null?null:B.a.i(J.k(r))
l=r}if(l==null)l=""
if(l.length!==0){t=A.aL(l,"**","")
r=A.ag("^#+\\s*",!0,!1,!0,!1)
n=A.aL(t,r,"")}else{t=t?null:J.t(m,"error")
n=J.k(t==null?"The tutor could not answer just now. Please try again.":t)}case 4:if(o!==$.fnz){x=1
break}$.DB.push(new D.a_A(!1,n))
$.ah9=!1
if(u.c==null){x=1
break}u.l(new D.eGS())
u.aCT()
case 1:return A.h(v,w)}})
return A.i($async$JZ,w)},
aCT(){$.aU.U$.push(new D.eHp(this))},
aQV(d){this.gLg().C2(2)
this.JZ(d)},
B(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=A.Q(d).ax.a===B.dd,g=new D.a1x(h),f=h?C.yJ:C.yH,e=h?C.yJ:C.yH
e=A.a([e,h?C.a_A:C.a_q],y.O)
x=j.b36(g,B.eH,new D.eHH(d))
w=A.c("Trading Academy",i,i,i,i,i,i,A.l(i,i,h?C.dE:B.c,i,i,i,i,i,i,i,i,17,i,i,B.F,i,i,!0,i,i,i,i,i,i,i,i),i,i,i)
v=y.p
w=A.A(A.a([x,B.ar,A.E(A.x(A.a([w,A.c("Lessons, live signals and a tutor",i,i,i,i,i,i,A.l(i,i,h?C.dk:C.dl,i,i,i,i,i,i,i,i,11.5,i,i,i,i,i,!0,i,i,i,i,i,i,i,i),i,i,i)],v),B.B,i,B.e,B.h,0,B.p),1),A.p(i,C.fo8,B.f,i,i,new A.o(C.dN.j(0.14),i,i,A.n(999),i,i,B.m),i,i,i,i,B.fM,i,i,i)],v),B.l,i,B.e,B.h,0,i,i)
x=h?C.O2:C.NU
u=A.n(999)
t=A.a([],v)
for(s=[C.fef,C.fcu,C.fdb],r=s.length,q=0;q<r;++q){p={}
o=s[q]
p.a=null
p.a=o.a
n=j.gLg().d===p.a
if(n)m=h?C.mV:B.c
else m=B.L
l=new A.aP(999,999)
if(n)k=h?B.c:C.mV
else k=h?C.dk:C.dl
k=A.W(o.c,k,i,i,i,15)
if(n)n=h?B.c:C.mV
else n=h?C.dk:C.dl
t.push(new A.bz(1,B.ba,A.aA(i,A.cT(i,new A.c3(B.aL,B.b9,B.h,B.l,i,B.p,i,0,A.a([k,B.e1,new A.d5(1,B.cg,A.c(o.b,i,i,B.a2,i,i,i,new A.H(!0,n,i,i,i,i,12.5,B.F,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i),i,i,i),i)],v),i),i,i,B.b_,new A.o(m,i,i,new A.bc(l,l,l,l),i,i,B.m),B.a3,i,i,i,i,B.zg,i,i,i),B.y,!1,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,new D.eHI(p,j),i,i,i,i,i,i,!1,B.a4),i))}h=A.p(i,A.A(t,B.l,i,B.e,B.h,0,i,i),B.f,i,i,new A.o(x,i,i,u,i,i,B.m),i,i,i,i,B.eA,i,i,i)
x=j.gLg()
return A.c5(i,f,A.p(i,A.bo(!0,A.x(A.a([new A.D(C.bGb,w,i),new A.D(B.ao8,h,i),A.E(A.bay(A.a([j.c6d(g),j.cDj(g),j.bHr(g)],v),x,i),1)],v),B.l,i,B.e,B.h,0,B.p),!0,!1,B.ag,!0,!0),B.f,i,i,new A.o(i,i,i,i,i,new A.a7(B.aX,B.b1,B.x,e,i,i),B.m),i,i,i,i,i,i,i,i),i,!1,!1,i,i)},
b36(d,e,f){var x=null,w=d.a,v=w?B.c.j(0.92):C.jN,u=A.K(w?B.c:C.qM,B.r,1)
return A.aG(!1,B.a3,!0,x,A.aM(!1,x,!0,A.p(x,A.W(e,w?C.dE:B.c,x,x,x,18),B.f,x,x,new A.o(x,x,u,x,x,x,B.a6),x,40,x,x,x,x,x,40),B.cK,!0,x,x,x,x,x,x,x,x,x,x,x,f,x,x,x,x,x,x,x),B.f,v,0,x,x,B.cK,x,x,B.ai)},
c6d(d){var x,w=null,v=new A.X(C.Eg,new D.eH0(this),y.E).gJ(0),u=A.n(24),t=y.p
t=A.a([A.p(w,A.x(A.a([C.heH,B.at,C.fWk,B.aA,A.bw(A.n(9),A.jD(B.c.j(0.18),w,w,8,w,v/10,B.afe),B.aq),B.al,A.c(""+v+" of 10 lessons done",w,w,w,w,w,w,B.acF,w,w,w)],t),B.B,w,B.e,B.h,0,B.p),B.f,w,w,new A.o(w,w,w,u,w,C.ced,B.m),w,w,w,w,B.fc,w,w,w),B.aA],t)
for(x=0;x<10;++x)t.push(this.c6b(d,x))
t.push(B.al)
t.push(A.c("Practice with pretend money. Signals and lessons are for learning; markets can always surprise.",w,w,w,w,w,w,A.l(w,w,d.a?C.dk:C.dl,w,w,w,w,w,w,w,w,11,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),B.K,w,w))
return A.cp(t,w,w,C.aoc,w,w,B.ah,!1)},
c6b(d,e){var x,w,v,u=null,t=C.Eg[e],s=this.gK_().q(0,t.a),r=d.a,q=r?B.c.j(0.92):C.jN,p=A.n(20),o=A.K(r?B.c:C.qM,B.r,1),n=A.a([new A.aa(0,B.H,d.gWB(),B.hR,14)],y.V),m=A.n(15)
m=A.p(u,A.W(t.e,B.c,u,u,u,u),B.f,u,u,new A.o(t.f,u,u,m,u,u,B.m),u,46,u,u,u,u,u,46)
x=A.c("Lesson "+(e+1)+" \xb7 "+t.d+" min",u,u,u,u,u,u,A.l(u,u,r?C.dk:C.dl,u,u,u,u,u,u,u,u,11,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)
w=A.c(t.b,u,u,u,u,u,u,A.l(u,u,r?C.dE:B.c,u,u,u,u,u,u,u,u,15,u,u,B.F,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)
v=y.p
w=A.E(A.x(A.a([x,w,A.c(t.c,u,u,u,u,u,u,A.l(u,u,r?C.dk:C.dl,u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],v),B.B,u,B.e,B.h,0,B.p),1)
x=s?B.ea:B.eM
if(s)r=C.dN
else r=r?C.dk:C.dl
return A.aA(u,A.p(u,A.A(A.a([m,B.bb,w,A.W(x,r,u,u,u,u)],v),B.l,u,B.e,B.h,0,u,u),B.f,u,u,new A.o(q,u,o,p,n,u,B.m),u,u,u,B.d4,B.bH,u,u,u),B.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new D.eH_(this,t),u,u,u,u,u,u,!1,B.a4)},
clx(d){var x=this.c
x.toString
A.a8(x,!1).cc(A.ec(new D.eHl(this,d),!1,null,y.H))},
c6K(c0,c1){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5=this,b6=null,b7="reading",b8="rsi",b9=b5.gcEe()
if(b9==null)return A.c("Live example appears once the markets have loaded.",b6,b6,b6,b6,b6,b6,A.l(b6,b6,c0.a?C.dk:C.dl,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,!0,b6,b6,b6,b6,b6,b6,b6,b6),b6,b6,b6)
x=J.a2(b9)
w=J.k(x.h(b9,"asset"))
v=D.bF0(b9)
u=D.fy(x.h(b9,b7))
t=D.et(x.h(b9,"price"))
s=new D.eH4(v,c0,t)
r=new D.eHc(c0)
switch(c1){case"basics":q=v.length!==0?D.et(J.t(B.d.gH(v),"c")):t
p=q===0?100:100*t/q
x=r.$1("Right now "+w+" is "+D.hD(t,!0,!1)+". About 4 hours ago it was "+D.hD(q,!0,!1)+".")
o=D.hD(p,!0,!1)
n=p>=100?"a win of":"a loss of"
return A.x(A.a([x,B.O,r.$1("If you had put $100 into "+w+" then, it would be worth "+o+" now: "+n+" "+D.hD(Math.abs(p-100),!0,!1)+". That difference is your profit or loss.")],y.p),B.B,b6,B.e,B.h,0,B.p)
case"candles":m=v.length!==0?B.d.gal(v):A.S(y.N,y.z)
x=J.a2(m)
o=D.et(x.h(m,"c"))
n=D.et(x.h(m,"o"))
l=s.$2$last$lines(24,!1)
k=D.hD(D.et(x.h(m,"o")),!0,!1)
j=D.hD(D.et(x.h(m,"c")),!0,!1)
o=o>=n?"GREEN: buyers won those 5 minutes":"YELLOW: sellers won those 5 minutes"
return A.x(A.a([l,B.O,r.$1("The last finished "+w+" candle opened at "+k+" and closed at "+j+", so it is "+o+". Its high was "+D.hD(D.et(x.h(m,"h")),!0,!1)+" and its low "+D.hD(D.et(x.h(m,"l")),!0,!1)+".")],y.p),B.B,b6,B.e,B.h,0,B.p)
case"trend":x=y.N
i=A.S(x,y.S)
for(o=b5.gyB(),n=o.length,l=y.z,k=y.f,h=0;h<o.length;o.length===n||(0,A.I)(o),++h){j=J.t(o[h],b7)
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
return A.x(A.a([x,B.O,r.$1(w+" is "+o.toUpperCase()+" right now. Across the markets:"+n+" bullish, "+l+" bearish, "+k+" sideways.")],y.p),B.B,b6,B.e,B.h,0,B.p)
case"ma":f=D.et(x.h(b9,"fast"))
e=D.et(x.h(b9,"slow"))
x=s.$0()
o=D.hD(f,!0,!1)
n=D.hD(e,!0,!1)
l=f>=e
k=l?"ABOVE":"BELOW"
l=l?"UP":"DOWN"
return A.x(A.a([x,B.O,r.$1("On "+w+" the pink fast line is at "+o+" and the purple slow line at "+n+". The fast line is "+k+" the slow line, so the short-term trend is "+l+".")],y.p),B.B,b6,B.e,B.h,0,B.p)
case"cross":x=b5.gyB()
o=A.U(x)
n=o.k("cM<1,@>")
d=A.B(new A.cM(new A.X(x,new D.eH5(),o.k("X<1>")),new D.eH6(),n),n.k("M.E"))
x=b5.gyB()
o=A.U(x)
n=o.k("cM<1,@>")
a0=A.B(new A.cM(new A.X(x,new D.eH7(),o.k("X<1>")),new D.eH8(),n),n.k("M.E"))
x=s.$0()
if(d.length!==0)o="Fresh BUY crosses right now: "+B.d.aL(d,", ")+". On its next automatic check the agent would buy if it holds nothing and it is the market traded today."
else o="No fresh buy cross in any open market right now. "+(a0.length!==0?"Fresh sell crosses: "+B.d.aL(a0,", ")+". ":"")+"The agent simply waits; no signal means no trade."
return A.x(A.a([x,B.O,r.$1(o)],y.p),B.B,b6,B.e,B.h,0,B.p)
case"rsi":x=b5.gyB()
o=A.U(x).k("X<1>")
a1=A.B(new A.X(x,new D.eH9(),o),o.k("M.E"))
x=y.p
o=A.a([],x)
for(n=a1.length,l=c0.a,k=y.N,j=y.z,a2=y.f,a3=y.c,h=0;h<a1.length;a1.length===n||(0,A.I)(a1),++h){a4=a1[h]
a5=J.a2(a4)
a6=J.k(a5.h(a4,"asset"))
a7=l?C.dE:B.c
a6=A.c(a6,b6,b6,b6,b6,b6,b6,new A.H(!0,a7,b6,b6,b6,b6,12,B.F,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6),b6,b6,b6)
a7=new A.aP(9,9)
a8=a5.h(a4,b7)
a8=(a2.b(a8)?A.a1(a8,k,j):A.S(k,j)).h(0,b8)
if(!(typeof a8=="number")){a8=A.cE(A.v(a8==null?"":a8))
if(a8==null)a8=0}a9=l?C.O2:C.NU
b0=a5.h(a4,b7)
b0=(a2.b(b0)?A.a1(b0,k,j):A.S(k,j)).h(0,b8)
if(!(typeof b0=="number")){b0=A.cE(A.v(b0==null?"":b0))
if(b0==null)b0=0}if(b0>=70)b0=C.ey
else{b0=a5.h(a4,b7)
b0=(a2.b(b0)?A.a1(b0,k,j):A.S(k,j)).h(0,b8)
if(!(typeof b0=="number")){b0=A.cE(A.v(b0==null?"":b0))
if(b0==null)b0=0}b0=b0<=30?B.cC:C.dN}b0=A.jD(a9,b6,b6,8,b6,a8/100,new A.kS(b0,a3))
a5=a5.h(a4,b7)
a5=(a2.b(a5)?A.a1(a5,k,j):A.S(k,j)).h(0,b8)
if(!(typeof a5=="number")){a5=A.cE(A.v(a5==null?"":a5))
if(a5==null)a5=0}a5=B.i.a9(a5,0)
a8=l?C.dE:B.c
o.push(new A.D(B.cx,new A.c3(B.aL,B.e,B.h,B.l,b6,B.p,b6,0,A.a([new A.a6(70,b6,a6,b6),new A.bz(1,B.ba,new A.nh(new A.bc(a7,a7,a7,a7),B.aq,b0,b6),b6),B.aa,new A.a6(26,b6,A.c(a5,b6,b6,b6,b6,b6,b6,new A.H(!0,a8,b6,b6,b6,b6,12,B.F,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6),b6,b6,b6),b6)],x),b6),b6))}o.push(r.$1("Red bars are above 70 (stretched), blue below 30 (oversold), green in between (healthy)."))
return A.x(o,B.B,b6,B.e,B.h,0,B.p)
case"risk":return A.x(A.a([r.$1("Every agent trade is about $100 (one SPY call option on weekdays, Bitcoin on weekends). "+w+" is "+D.hD(t,!0,!1)+" right now."),B.al,r.$1("- Take profit: it sells when the trade is up $50"),r.$1("- Stop loss: it sells when the trade is down $50"),B.al,r.$1("Win 5 and lose 5 of 10 trades: 5 x 50 - 5 x 50 = $0.00. That is break even. Win 6 of 10 and you are up $100.")],y.p),B.B,b6,B.e,B.h,0,B.p)
case"brakes":x=b5.e
if(x==null)return r.$1('Try it yourself: before your next practice day, write down "I stop after losing $50 today". If three trades in a row lose, close the app and come back tomorrow. That is exactly what the agent does.')
b1=D.fy(J.t(x,"state"))
x=b5.e
x=D.hD(D.et(D.fy(x==null?b6:J.t(x,"today")).h(0,"day_pnl")),!0,!0)
o=D.hD(D.et(b1.h(0,"totalPnl")),!0,!0)
n=J.z(b1.h(0,"brakePaused"),!0)?"The brake is ON right now.":"Both brakes are off, it can keep trading."
return r.$1("Today the agent is at "+x+" (the daily stop is -$50) and "+o+" all time (the brake is -$100)."+n)
case"hours":if(b5.f!=null)b2=b5.fx
else{x=b5.e
b2=J.z(D.fy(x==null?b6:J.t(x,"market")).h(0,"stockOpen"),!0)}b3=B.d.aR(b5.ay,new D.eHa())
x=b2?"OPEN":"CLOSED"
o=b3?"OPEN":"CLOSED"
return r.$1("Right now the US stock market is "+x+", the forex market is "+o+", and crypto is open, as always.")
case"practice":x=b5.e
if(x==null){x=b5.gaai()
return r.$1("Right now "+new A.X(x,new D.eHb(),A.U(x).k("X<1>")).gJ(0)+" of "+b5.gaai().length+" markets have signals that worked at least half the time lately. That is why a journal and many trades matter: some markets suit a method, others do not.")}b4=D.fy(J.t(x,"record"))
x=b4.h(0,"trades")
x=A.v(x==null?0:x)
o=b4.h(0,"wins")
o=A.v(o==null?0:o)
n=b4.h(0,"losses")
return r.$1("The agent journal so far: "+x+" finished pretend trades, "+o+" wins and "+A.v(n==null?0:n)+" losses. Keep watching until there are at least 20 before judging it.")}return B.bL},
cDj(a5){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,a0="asset",a1=B.a.i(e.ch),a2=e.gaai(),a3=A.U(a2).k("X<1>"),a4=A.B(new A.X(a2,new D.eHt(e,a1.toLowerCase()),a3),a3.k("M.E"))
B.d.b_(a4,new D.eHu(e))
x=new D.eHC()
a1=A.U(a4).k("X<1>")
w=new A.X(a4,new D.eHv(x),a1).gJ(0)
v=new A.X(a4,new D.eHw(x),a1).gJ(0)
a1=a4.length
if(e.r==null)u=0
else{t=Date.now()
s=e.r
s.toString
u=B.o.ap(new A.V(t,0,!1).by(s).a,1e6)}if(u<20)r="just now"
else r=u<60?""+u+" s ago":""+B.o.ap(u,60)+" min ago"
t=y.p
s=A.a([],t)
for(q=a5.a,p=0;p<4;++p){o=C.d6g[p]
if(e.cx===o)n=q?C.mV:B.c
else n=q?B.c.j(0.92):C.jN
m=new A.aP(999,999)
l=new A.ax(q?C.qF:C.qC,1,B.r,-1)
k=o==="All"?"All "+a2.length:o+" "+new A.X(a2,new D.eHx(o),a3).gJ(0)
if(e.cx===o)j=q?B.c:C.mV
else j=q?C.dE:B.c
B.d.u(s,A.a([A.aA(d,A.p(d,A.c(k,d,d,d,d,d,d,new A.H(!0,j,d,d,d,d,12,B.F,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d),d,d,d),B.f,d,d,new A.o(n,d,new A.bE(l,l,l,l),new A.bc(m,m,m,m),d,d,B.m),d,d,d,d,C.bGl,d,d,d),B.y,!1,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,new D.eHy(e,o),d,d,d,d,d,d,!1,B.a4),B.bf],t))}a3=A.E(A.cb(A.A(s,B.l,d,B.e,B.h,0,d,d),B.t,d,B.y,d,d,d,d,d,B.aL),1)
s=e.CW?B.cz:B.eN
s=A.a([A.A(A.a([a3,B.bf,e.b36(a5,s,new D.eHz(e))],t),B.l,d,B.e,B.h,0,d,d)],t)
if(e.CW){a3=A.l(d,d,q?C.dE:B.c,d,d,d,d,d,d,d,d,d,d,d,d,d,d,!0,d,d,d,d,d,d,d,d)
n=A.l(d,d,q?C.dk:C.dl,d,d,d,d,d,d,d,d,13,d,d,d,d,d,!0,d,d,d,d,d,d,d,d)
m=A.W(B.eN,q?C.dk:C.dl,d,d,d,d)
k=q?B.c.j(0.92):C.jN
j=A.n(999)
i=q?C.qF:C.qC
h=A.n(999)
g=q?C.qF:C.qC
B.d.u(s,A.a([B.S,A.aN(d,B.Z,!0,d,!0,B.t,d,A.aO(),e.cy,d,d,d,d,d,2,A.bC(d,new A.b6(4,j,new A.ax(i,1,B.r,-1)),d,B.f8,d,d,d,d,!0,new A.b6(4,h,new A.ax(g,1,B.r,-1)),d,d,d,d,d,k,!0,d,d,d,d,d,d,d,d,d,d,d,d,d,n,"Search a market, for example EUR/USD, GBP or Bitcoin",d,d,d,d,d,d,d,d,d,!0,!0,!1,d,m,d,d,d,d,d,d,d,d,d,d,d,d),B.y,!0,d,!0,d,!1,d,B.ak,d,d,d,d,d,d,d,d,d,1,d,d,!1,"\u2022",d,new D.eHA(e),d,d,d,!1,d,d,!1,d,!0,d,B.ae,d,d,d,d,d,d,d,d,d,d,d,a3,!0,B.a7,d,B.ao,d,d,d,d)],t))}s.push(B.af)
s.push(e.bG5(a5))
s.push(A.A(A.a([A.E(e.av0(a5,"Going up",w,C.dN,B.nf),1),B.aa,A.E(e.av0(a5,"Going down",v,C.ey,B.a4O),1),B.aa,A.E(e.av0(a5,"No direction",a1-w-v,E.jS,C.asw),1)],t),B.l,d,B.e,B.h,0,d,d))
s.push(B.O)
s.push(A.A(A.a([C.c_T,B.e1,new A.d5(1,B.cg,A.c("Live \xb7 updated "+r+" \xb7 checks every 20 seconds, changes are flagged at once",d,d,d,d,d,d,A.l(d,d,q?C.dk:C.dl,d,d,d,d,d,d,d,d,11,d,d,d,d,d,!0,d,d,d,d,d,d,d,d),B.K,d,d),d)],t),B.l,d,B.b9,B.h,0,d,d))
a1=e.cx
if(a1==="All"||a1==="Forex"){a1=E.jS.j(0.12)
a3=A.n(16)
n=A.K(E.jS.j(0.45),B.r,1)
B.d.u(s,A.a([B.S,A.p(d,A.c('Forex uses real market prices on 1-minute candles. OTC pairs at a broker are priced by that broker (always on weekends) and can move differently, and the payout % is the broker\'s. "Worked" shows how often past moves on this pair really went that way: under 50% means the signal has been worse than a coin flip, so do not trust it.',d,d,d,d,d,d,A.l(d,d,q?C.dE:B.c,d,d,d,d,d,d,d,d,11.8,d,d,d,d,1.35,!0,d,d,d,d,d,d,d,d),d,d,d),B.f,d,d,new A.o(a1,d,n,a3,d,d,B.m),d,d,d,d,B.bh,d,d,d)],t))}s.push(B.af)
if(a2.length===0)s.push(A.c("Loading the markets...",d,d,d,d,d,d,A.l(d,d,q?C.dk:C.dl,d,d,d,d,d,d,d,d,d,d,d,d,d,d,!0,d,d,d,d,d,d,d,d),d,d,d))
if(a2.length!==0&&a4.length===0){a1=e.ch
s.push(A.at(A.c('No market matches "'+a1+'".',d,d,d,d,d,d,A.l(d,d,q?C.dk:C.dl,d,d,d,d,d,d,d,d,d,d,d,d,d,d,!0,d,d,d,d,d,d,d,d),d,d,d),d,d,d))}for(a1=a4.length,a3=e.dx,p=0;p<a4.length;a4.length===a1||(0,A.I)(a4),++p){f=a4[p]
t=J.a2(f)
if(a3.h(0,t.h(f,a0))==null)t=d
else t=a3.h(0,t.h(f,a0)).c==="no direction"?"JUST LOST ITS DIRECTION":"JUST TURNED "+a3.h(0,t.h(f,a0)).c.toUpperCase()
s.push(D.hIB(a5,f,t,!1,new D.eHB(e,f)))}s.push(A.c("Signals are estimates from recent price history. They can fail; never risk money you cannot afford to lose.",d,d,d,d,d,d,A.l(d,d,q?C.dk:C.dl,d,d,d,d,d,d,d,d,11,d,d,d,d,d,!0,d,d,d,d,d,d,d,d),B.K,d,d))
return A.PN(A.cp(s,d,d,C.aoc,d,d,B.ah,!1),d,e.gcga())},
bG5(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=new A.X(C.Eg,new D.eGL(i),y.E).gJ(0),f=i.z||i.y
if(!f)x=new A.b7([B.jD,B.b2,"Signal alerts unlock when you finish all 10 lessons ("+g+" of 10 done). You will be told the market, ENTER UP or DOWN, and the duration.","Go to lessons"])
else x=!i.Q?C.fk7:C.fiW
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
n=A.n(16)
m=A.K(u.j(0.45),B.r,1)
l=A.W(o,u,h,h,h,h)
k=y.p
l=A.a([l,B.ar,A.E(A.c(t,h,h,h,h,h,h,A.l(h,h,d.a?C.dE:B.c,h,h,h,h,h,h,h,h,12,h,h,h,h,1.35,!0,h,h,h,h,h,h,h,h),h,h,h),1)],k)
if(s!=null){j=A.bp(u,h,h,h,h,h,B.f2,h,h,h,h,h)
B.d.u(l,A.a([B.aa,A.bI(A.c(s,h,h,h,h,h,h,B.pj,h,h,h),h,new D.eGM(i,f),j)],k))}return A.p(h,A.A(l,B.l,h,B.e,B.h,0,h,h),B.f,h,h,new A.o(w,h,m,n,h,h,B.m),h,h,h,B.e8,B.bh,h,h,h)},
av0(d,e,f,g,h){var x=null,w=A.n(18),v=A.a([g.j(0.2),g.j(0.05)],y.O),u=A.K(g.j(0.35),B.r,1),t=A.W(h,g,x,x,x,20),s=d.a,r=A.c(""+f,x,x,x,x,x,x,A.l(x,x,s?C.dE:B.c,x,x,x,x,x,x,x,x,22,x,x,B.u,x,x,!0,x,x,x,x,x,x,x,x),x,x,x)
return A.p(x,A.x(A.a([t,B.at,r,A.c(e,x,x,x,x,x,x,A.l(x,x,s?C.dk:C.dl,x,x,x,x,x,x,x,x,11.5,x,x,B.P,x,x,!0,x,x,x,x,x,x,x,x),x,x,x)],y.p),B.B,x,B.e,B.h,0,B.p),B.f,x,x,new A.o(x,x,u,w,x,new A.a7(B.a5,B.a9,B.x,v,x,x),B.m),x,x,x,x,B.bh,x,x,x)},
bHr(d){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=y.p,i=A.a([],j)
if($.DB.length===0){x=d.a
w=x?B.c.j(0.92):C.jN
v=A.n(22)
u=A.K(x?B.c:C.qM,B.r,1)
t=A.p(k,C.c0Q,B.f,k,k,E.ags,k,40,k,k,k,k,k,40)
t=A.A(A.a([t,B.ar,A.E(A.c("Your trading tutor",k,k,k,k,k,k,A.l(k,k,x?C.dE:B.c,k,k,k,k,k,k,k,k,16,k,k,B.F,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),1)],j),B.l,k,B.e,B.h,0,k,k)
w=A.p(k,A.x(A.a([t,B.O,A.c("Ask anything about trading. The tutor sees the same live prices and readings as the agent, so it can explain what each market is doing right now.",k,k,k,k,k,k,A.l(k,k,x?C.dk:C.dl,k,k,k,k,k,k,k,k,12.5,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),k,k,k)],j),B.B,k,B.e,B.h,0,B.p),B.f,k,k,new A.o(w,k,u,v,k,k,B.m),k,k,k,k,B.bQ,k,k,k)
v=A.a([],j)
for(s=0;s<6;++s){r=C.dcu[s]
u=x?C.dE:B.c
u=A.c(r,k,k,k,k,k,k,new A.H(!0,u,k,k,k,k,12,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k),k,k,k)
t=x?B.c.j(0.92):C.jN
q=x?C.qF:C.qC
p=new A.aP(999,999)
v.push(A.mR(k,t,u,k,new D.eGN(l,r),k,new A.ba(new A.bc(p,p,p,p),B.a1),new A.ax(q,1,B.r,-1),k))}B.d.u(i,A.a([w,B.af,A.bZ(B.bI,v,B.br,k,8,8)],j))}for(x=$.DB.length,w=d.a,s=0;s<$.DB.length;$.DB.length===x||(0,A.I)($.DB),++s){o=$.DB[s]
v=o.a
u=v?B.a9:B.a5
if(v)t=w?C.mV:B.c
else t=w?B.c.j(0.92):C.jN
q=v?18:4
p=v?4:18
if(v)n=k
else{m=new A.ax(w?B.c:C.qM,1,B.r,-1)
n=new A.bE(m,m,m,m)}if(v)v=w?B.c:C.mV
else v=w?C.dE:B.c
i.push(new A.bK(u,k,k,A.p(k,A.AI(o.b,new A.H(!0,v,k,k,k,k,13.5,k,k,k,k,k,1.4,k,k,k,k,k,k,k,k,k,k,k,k,k),k),B.f,k,F.ag3,new A.o(t,k,n,new A.bc(B.i5,B.i5,new A.aP(q,q),new A.aP(p,p)),k,k,B.m),k,k,k,B.jz,B.hy,k,k,k),k))}if($.ah9){x=w?B.c.j(0.92):C.jN
v=A.n(18)
i.push(new A.bK(B.a5,k,k,A.p(k,A.A(A.a([B.ac3,B.aa,A.c("Reading the markets...",k,k,k,k,k,k,A.l(k,k,w?C.dk:C.dl,k,k,k,k,k,k,k,k,12.5,k,k,k,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)],j),B.l,k,B.e,B.M,0,k,k),B.f,k,k,new A.o(x,k,k,v,k,k,B.m),k,k,k,B.hJ,B.hy,k,k,k),k))}i=A.E(A.cp(i,l.ax,k,C.bHz,k,k,B.ah,!1),1)
x=A.l(k,k,w?C.dE:B.c,k,k,k,k,k,k,k,k,k,k,k,k,k,k,!0,k,k,k,k,k,k,k,k)
v=A.l(k,k,w?C.dk:C.dl,k,k,k,k,k,k,k,k,k,k,k,k,k,k,!0,k,k,k,k,k,k,k,k)
u=w?B.c.j(0.92):C.jN
t=A.n(999)
q=w?C.qF:C.qC
p=A.n(999)
n=w?C.qF:C.qC
x=A.E(A.aN(k,B.Z,!1,k,!0,B.t,k,A.aO(),l.at,k,k,k,k,k,2,A.bC(k,new A.b6(4,t,new A.ax(q,1,B.r,-1)),k,B.zp,k,k,k,k,!0,new A.b6(4,p,new A.ax(n,1,B.r,-1)),k,k,k,k,k,u,!0,k,k,k,k,k,k,k,k,k,k,k,k,k,v,"Ask about trading or a market...",k,k,k,k,k,k,k,k,k,!0,!0,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k),B.y,!0,k,!0,k,!1,k,B.ak,k,k,k,k,k,k,k,k,k,4,1,k,!1,"\u2022",k,k,k,l.gcg8(),k,!1,k,k,!1,k,!0,k,B.ae,k,k,k,k,k,k,k,k,k,k,k,x,!0,B.a7,k,B.ao,k,B.acq,k,k),1)
v=w?C.mV:B.c
u=$.ah9?k:new D.eGO(l)
return A.x(A.a([i,A.p(k,A.A(A.a([x,B.aa,A.aG(!1,B.a3,!0,k,A.aM(!1,k,!0,new A.a6(48,48,A.W(B.pR,w?B.c:C.mV,k,k,k,k),k),B.cK,!0,k,k,k,k,k,k,k,k,k,k,k,u,k,k,k,k,k,k,k),B.f,v,0,k,k,B.cK,k,k,B.ai)],j),B.l,k,B.e,B.h,0,k,k),B.f,k,k,k,k,k,k,k,U.HB,k,k,k)],j),B.l,k,B.e,B.h,0,B.p)}}
D.a0B.prototype={
S(){var x=y.S
return new D.bl2(A.S(x,x))},
cYL(d){return this.e.$0()},
d0u(d){return this.x.$1(d)},
rn(){return this.y.$0()},
d_2(d){return this.z.$1(d)},
gd4(d){return this.w}}
D.bl2.prototype={
a_(){var x,w,v,u,t,s,r,q,p,o=this
o.a3()
x=C.dLj.h(0,o.a.c.a)
o.d=x==null?o.a.c.x:x
w=o.a.w
v=new D.duO()
u=new D.duM()
x=v.$1(w.h(0,"slots"))
t=A.U(x).k("X<1>")
x=A.B(new A.X(x,new D.duK(o),t),t.k("M.E"))
o.e=x
x=x.length
t=o.d.length
if(x!==Math.min(10,t)){x=y.S
s=J.e2(t,x)
for(r=0;r<t;++r)s[r]=r
B.d.dX(s,B.cR)
o.e=A.cS(s,0,A.dy(Math.min(10,o.d.length),"count",x),A.U(s).c).dn(0)}x=v.$1(w.h(0,"right"))
o.f=A.jE(x,A.U(x).c)
o.r=u.$1(w.h(0,"tries"))
o.w=u.$1(w.h(0,"locks"))
o.x=v.$1(w.h(0,"used"))
for(x=o.e,t=x.length,q=0;q<x.length;x.length===t||(0,A.I)(x),++q){p=x[q]
if(!B.d.q(o.x,p))B.d.I(o.x,p)}o.bbi(!1)
o.z=A.d2(B.fB,new D.duL(o))},
t(){var x=this.z
if(x!=null)x.a1(0)
this.a2()},
b38(){var x,w,v,u,t,s,r=this,q=r.a
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
v=v.iW(v,new D.duC(),u,t)
s=r.w
s===$&&A.d()
t=s.iW(s,new D.duD(),u,t)
s=r.x
s===$&&A.d()
return q.d0u(A.J(["slots",x,"right",w,"tries",v,"locks",t,"used",s],u,y.z))},
bbi(d){var x,w,v,u,t,s,r,q,p,o=this,n=Date.now(),m=o.y,l=y.X,k=!1,j=0
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
x=A.U(t).k("X<1>")
r=A.B(new A.X(t,new D.duE(o),x),x.k("M.E"))
if(r.length!==0)q=r
else{u=o.d.length
t=A.a(new Array(u),l)
for(s=0;s<u;++s)t[s]=s
x=A.U(t).k("X<1>")
q=A.B(new A.X(t,new D.duF(o),x),x.k("M.E"))}x=q.length
if(x===0)p=w
else p=q[B.cR.av(x)]
o.w.X(0,w)
x=o.r
x===$&&A.d()
x.X(0,w)
m.X(0,w)
o.e[j]=p
x=o.x
x===$&&A.d()
if(!B.d.q(x,p))B.d.I(o.x,p)
k=!0}++j}if(k&&d)o.b38()},
cG_(){return this.bbi(!0)},
cmz(d){var x,w,v,u,t=this.d
t===$&&A.d()
x=t[d].b.length
t=J.e2(x,y.S)
for(w=0;w<x;++w)t[w]=w
v=this.x
v===$&&A.d()
u=new A.e0()
u.cT(d*7919+v.length)
B.d.dX(t,u)
return t},
cg7(d,e){var x=this,w=x.f
w===$&&A.d()
if(!w.q(0,d)){w=x.w
w===$&&A.d()
w=w.am(0,d)}else w=!0
if(w)return
x.l(new D.duA(x,e,d))
x.b38()},
B(d){var x,w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=A.Q(d).ax.a===B.dd,j=new D.a1x(k),i=m.a.c,h=m.e
h===$&&A.d()
x=m.f
x===$&&A.d()
w=new A.X(h,x.gjC(x),A.U(h).k("X<1>")).gJ(0)
v=w===m.e.length
h=k?C.yJ:C.yH
x=k?C.yJ:C.yH
u=k?C.a_A:C.a_q
t=y.O
u=A.a([x,u],t)
x=A.aI(l,l,l,l,A.W(B.eH,k?C.dE:B.c,l,l,l,18),l,l,l,new D.duG(d),l,l,l,l,l,l)
s=m.a.d
r=y.p
s=A.A(A.a([x,B.aZ,A.c("Lesson "+s+" of 10",l,l,l,l,l,l,A.l(l,l,k?C.dk:C.dl,l,l,l,l,l,l,l,l,12,l,l,B.P,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)],r),B.l,l,B.e,B.h,0,l,l)
x=A.n(24)
q=i.f
p=A.ap(q,B.v,0.35)
p.toString
t=A.a([q,p],t)
p=B.c.j(0.2)
q=A.n(16)
t=A.a([s,A.p(l,A.A(A.a([A.p(l,A.W(i.e,B.c,l,l,l,28),B.f,l,l,new A.o(p,l,l,q,l,l,B.m),l,52,l,l,l,l,l,52),B.ev,A.E(A.x(A.a([A.c(i.b,l,l,l,l,l,l,B.fO,l,l,l),A.c(i.c+" \xb7 "+i.d+" min",l,l,l,l,l,l,B.ns,l,l,l)],r),B.B,l,B.e,B.h,0,B.p),1)],r),B.l,l,B.e,B.h,0,l,l),B.f,l,l,new A.o(l,l,l,x,l,new A.a7(B.a5,B.a9,B.x,t,l,l),B.m),l,l,l,l,B.fc,l,l,l),B.aA],r)
for(x=i.w,o=0;o<4;++o){s=x[o]
q=k?C.dE:B.c
q=A.c(s.a,l,l,l,l,l,l,new A.H(!0,q,l,l,l,l,16,B.F,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l),l,l,l)
p=k?C.dE:B.c
B.d.u(t,A.a([q,B.at,A.c(s.b,l,l,l,l,l,l,new A.H(!0,p,l,l,l,l,14,l,l,l,l,l,1.5,l,l,l,l,l,l,l,l,l,l,l,l,l),l,l,l),B.aA],r))}x=k?B.c.j(0.92):C.jN
s=A.n(22)
q=A.K(C.dN.j(0.45),B.r,1.5)
t.push(A.p(l,A.x(A.a([A.A(A.a([C.bXn,B.bf,A.c("See it live right now",l,l,l,l,l,l,A.l(l,l,k?C.dE:B.c,l,l,l,l,l,l,l,l,14,l,l,B.F,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)],r),B.l,l,B.e,B.h,0,l,l),B.S,m.a.cYL(0)],r),B.B,l,B.e,B.h,0,B.p),B.f,l,l,new A.o(x,l,q,s,l,l,B.m),l,l,l,l,B.bH,l,l,l))
t.push(B.bx)
x=A.c("Quiz",l,l,l,l,l,l,A.l(l,l,k?C.dE:B.c,l,l,l,l,l,l,l,l,16,l,l,B.F,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)
s=""+w+" of "
q=m.e.length
if(v)p=C.dN
else p=k?C.dk:C.dl
t.push(A.A(A.a([x,B.aZ,A.c(s+q+" right",l,l,l,l,l,l,A.l(l,l,p,l,l,l,l,l,l,l,l,12.5,l,l,B.F,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)],r),B.l,l,B.e,B.h,0,l,l))
t.push(B.al)
p=A.n(9)
x=m.e.length
x=x===0?0:w/x
t.push(A.bw(p,A.jD(k?C.O2:C.NU,l,l,7,l,x,C.b5p),B.aq))
t.push(B.O)
x=m.a.f?"Admin: you can retry any question.":"Get all 10 right to finish. A wrong answer gets one more try; wrong twice and that question locks for 5 minutes, then a new question takes its place."
t.push(A.c(x,l,l,l,l,l,l,A.l(l,l,k?C.dk:C.dl,l,l,l,l,l,l,l,l,11.8,l,l,l,l,1.35,!0,l,l,l,l,l,l,l,l),l,l,l))
t.push(B.S)
for(n=0;x=m.e,n<x.length;++n)t.push(m.ctR(j,n,x[n]))
t.push(B.O)
x=k?C.dE:B.c
q=k?C.qF:C.qC
q=A.E(A.en(C.c34,l,C.fV3,new D.duH(m,i),A.di(l,l,l,l,l,l,l,l,l,x,l,l,B.cn,l,new A.ba(A.n(999),B.a1),new A.ax(q,1.5,B.r,-1),l,l,l,l)),1)
x=!v
if(!x||m.a.r)k=C.dN
else k=k?C.dk:C.dl
k=A.bp(k,l,l,l,l,l,B.cn,l,new A.ba(A.n(999),B.a1),l,l,l)
p=!x||m.a.r?new D.duI(m,d):l
t.push(A.A(A.a([q,B.ar,A.E(A.dc(P.R0,l,A.c(!x||m.a.r?"Finish lesson":s+m.e.length+" right",l,l,l,l,l,l,B.ca,l,l,l),p,k),1)],r),B.l,l,B.e,B.h,0,l,l))
return A.c5(l,h,A.p(l,A.bo(!0,A.cp(t,l,l,C.bHH,l,l,B.ah,!1),!0,!1,B.ag,!0,!0),B.f,l,l,new A.o(l,l,l,l,l,new A.a7(B.aX,B.b1,B.x,u,l,l),B.m),l,l,l,l,l,l,l,l),l,!1,!1,l,l)},
ctR(a7,a8,a9){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=this,a5=null,a6=a4.d
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
if(v!=null){a6=A.dv(0,0,0,Math.max(0,v-Date.now()),0,0).a
s=B.o.ap(a6,6e7)
r=B.a.b0(B.o.v(B.o.F(B.o.ap(a6,1e6),60)),2,"0")
a6=a7.a
q=a6?C.CF:C.CH
p=A.n(20)
o=A.K(C.ey.j(0.4),B.r,1)
n=A.c("Question "+(a8+1)+" is locked",a5,a5,a5,a5,a5,a5,A.l(a5,a5,a6?C.dE:B.c,a5,a5,a5,a5,a5,a5,a5,a5,14,a5,a5,B.F,a5,a5,!0,a5,a5,a5,a5,a5,a5,a5,a5),a5,a5,a5)
m=y.p
return A.p(a5,A.A(A.a([C.c5b,B.ar,A.E(A.x(A.a([n,A.c("Wrong twice. Re-read the lesson; a new question appears in "+s+":"+r+".",a5,a5,a5,a5,a5,a5,A.l(a5,a5,a6?C.dk:C.dl,a5,a5,a5,a5,a5,a5,a5,a5,12.5,a5,a5,a5,a5,1.35,!0,a5,a5,a5,a5,a5,a5,a5,a5),a5,a5,a5)],m),B.B,a5,B.e,B.h,0,B.p),1)],m),B.l,a5,B.e,B.h,0,a5,a5),B.f,a5,a5,new A.o(q,a5,o,p,a5,a5,B.m),a5,a5,a5,B.d4,B.bH,a5,a5,a5)}a6=a7.a
q=a6?B.c.j(0.92):C.jN
p=A.n(20)
if(w)o=C.dN.j(0.6)
else o=a6?B.c:C.qM
o=A.K(o,B.r,w?1.5:1)
n=y.p
m=A.a([A.c(""+(a8+1)+". "+x.a,a5,a5,a5,a5,a5,a5,A.l(a5,a5,a6?C.dE:B.c,a5,a5,a5,a5,a5,a5,a5,a5,14,a5,a5,B.F,a5,a5,!0,a5,a5,a5,a5,a5,a5,a5,a5),a5,a5,a5),B.O],n)
for(l=a4.cmz(a9),k=l.length,j=!w,i=x.b,h=x.c,g=0;g<l.length;l.length===k||(0,A.I)(l),++g){f=l[g]
e=w?a5:new D.duB(a4,a9,f)
if(w&&f===h)d=C.dN.j(0.14)
else if(t===f)d=C.ey.j(0.12)
else d=a6?C.CF:C.CH
a0=new A.aP(14,14)
if(w&&f===h)a1=C.dN
else a1=t===f?C.ey:B.L
a2=new A.ax(a1,1,B.r,-1)
a1=i[f]
a3=a6?C.dE:B.c
a1=A.a([new A.bz(1,B.ba,A.c(a1,a5,a5,a5,a5,a5,a5,new A.H(!0,a3,a5,a5,a5,a5,13.5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5),a5,a5,a5),a5)],n)
if(w&&f===h)a1.push(C.c0A)
if(j&&t===f)a1.push(C.c6z)
m.push(A.aA(a5,A.p(a5,new A.c3(B.aL,B.e,B.h,B.l,a5,B.p,a5,0,a1,a5),B.f,a5,a5,new A.o(d,a5,new A.bE(a2,a2,a2,a2),new A.bc(a0,a0,a0,a0),a5,a5,B.m),a5,a5,a5,B.eK,B.eo,a5,a5,a5),B.y,!1,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,e,a5,a5,a5,a5,a5,a5,!1,B.a4))}if(w)m.push(A.c("Right! "+x.d,a5,a5,a5,a5,a5,a5,C.fOY,a5,a5,a5))
else if(u===1&&!a4.a.f)m.push(C.fXP)
else if(u>=1)m.push(C.fVd)
return A.p(a5,A.x(m,B.B,a5,B.e,B.h,0,B.p),B.f,a5,a5,new A.o(q,a5,o,p,a5,a5,B.m),a5,a5,a5,B.d4,B.bH,a5,a5,a5)}}
D.aPi.prototype={
t(){var x=this,w=x.aa$
if(w!=null)w.a7(0,x.gbB())
x.aa$=null
x.a2()},
aZ(){this.b7()
this.b5()
this.bC()}}
var z=a.updateTypes(["P(uv)","ay<~>()","~()","XF(Z)","ay<~>(m)","m(a_A)","a0B(Z)"])
D.eGJ.prototype={
$1(d){this.a.Bn(!0)
return null},
$S:11}
D.eGo.prototype={
$1(d){var x=this.a.as,w=x.f
if(w.length!==0){w=B.d.gd3(w).Q
w.toString
x.i9(B.i.D(Math.min(this.b*160-16,w),0,1/0))}},
$S:7}
D.eGf.prototype={
$0(){return this.a.Q=this.b},
$S:0}
D.eGn.prototype={
$0(){return this.a.Q=this.b},
$S:0}
D.eGq.prototype={
$0(){var x=this.a,w=x.f=!1,v=this.b,u=v==null
if(!u?J.z(J.t(v,"ok"),!0):w){x.d=v
x.ay=null}else{w=u?null:J.t(v,"error")
x.ay=J.k(w==null?"Could not reach the server. Pull down to try again.":w)
if(!J.z(u?null:J.t(v,"ownerOnly"),!0))w=J.z(u?null:J.t(v,"setupNeeded"),!0)
else w=!0
if(w)x.d=null}},
$S:0}
D.eGd.prototype={
$1(d){return A.a1(d,y.N,y.z)},
$S:25}
D.eGe.prototype={
$0(){var x,w,v=this,u=v.a
if(v.b){x=A.B(u.e,y.P)
w=v.c
B.d.u(x,w)}else{x=v.c
w=x}u.e=x
u.w=w.length>=100},
$S:0}
D.eGy.prototype={
$1(d){var x=null
return A.eh(A.a([A.bN(!1,B.dr,x,x,!0,x,x,x,new D.eGw(d),x,x),A.bI(C.hha,x,new D.eGx(d),x)],y.p),x,x,x,C.hhA,x,x,x,x,C.fZk,x)},
$S:18}
D.eGw.prototype={
$0(){A.a8(this.a,!1).N(!1)
return null},
$S:0}
D.eGx.prototype={
$0(){A.a8(this.a,!1).N(!0)
return null},
$S:0}
D.eGz.prototype={
$0(){return this.a.r=!0},
$S:0}
D.eGA.prototype={
$0(){return this.a.r=!1},
$S:0}
D.eGm.prototype={
$1(d){var x=this.a,w=x.d
x.a.toString
return D.hzD(w,!1)},
$S:z+3}
D.eGs.prototype={
$0(){return this.a.r=!0},
$S:0}
D.eGt.prototype={
$0(){var x=this.a,w=x.r=!1,v=this.b
if(v!=null?J.z(J.t(v,"ok"),!0):w)x.d=v},
$S:0}
D.eGu.prototype={
$1(d){var x=this
return A.oU(new D.eGr(x.a,x.b,x.c,x.d),!1,0.8,0.95,0.25,!1,null)},
$S:135}
D.eGr.prototype={
$2(d,e){var x=this
return x.a.cyZ(x.b,x.c,D.fy(J.t(x.d,"state")),e)},
$S:2019}
D.eGv.prototype={
$2(d,e){return B.i.aQ(D.aHk(d),D.aHk(e))},
$S:40}
D.eGI.prototype={
$0(){return this.a.Bn(!0)},
$S:1}
D.eGD.prototype={
$0(){var x=this.a.c
x.toString
return A.VK(x)},
$S:0}
D.eGE.prototype={
$0(){return this.a.Bn(!0)},
$S:0}
D.eG4.prototype={
$1(d){return J.z(J.t(d,"asset"),this.a)},
$S:4}
D.eG5.prototype={
$0(){var x=this.a
return x.length===0?this.b:B.d.gH(x)},
$S:204}
D.eG6.prototype={
$1(d){return J.z(J.t(d,"asset"),this.a.h(0,"symbol"))},
$S:4}
D.eG7.prototype={
$0(){return this.a},
$S:204}
D.eGC.prototype={
$1(d){var x,w,v,u,t,s,r,q,p,o,n,m=null,l=this.d,k=D.fy(J.t(this.c,"market")),j=k.h(0,"activeMarket"),i=j==null?m:J.k(j),h=J.z(k.h(0,"weekend"),!0)
if(l==null)x=m
else{l=l.h(0,"symbol")
x=l==null?m:J.k(l)}w=x!=null&&x!=="SPY"&&x!=="BTC/USD"
if(i==="SPY"){v="TRADING TODAY: SPY"
u="Weekday and the stock market is open. Only SPY can be bought. Bitcoin is traded on weekends only."}else if(i==="BTC/USD"){v="TRADING TODAY: BTC/USD"
u="Weekend. Only Bitcoin can be bought. SPY is traded on weekdays only."}else{u=h?"Bitcoin is traded on Saturday and Sunday.":"SPY is traded on weekdays while the stock market is open (9:30 AM to 4:00 PM ET). Bitcoin on weekends only."
v="NO MARKET TRADED RIGHT NOW"}l=i==null
t=l?E.jS:C.dN
j=this.b.a
s=j?B.c.j(0.92):C.jN
r=A.n(22)
q=A.K(t.j(0.55),B.r,1)
p=y.p
o=A.a([],p)
if(!l)B.d.u(o,A.a([D.fvC(i,30),B.ar],p))
else B.d.u(o,A.a([A.W(B.vd,t,m,m,m,26),B.ar],p))
l=A.c(v,m,m,m,m,m,m,A.l(m,m,t,m,m,m,m,m,m,m,m,13.5,m,m,B.u,m,m,!0,m,0.3,m,m,m,m,m,m),m,m,m)
n=A.c(u,m,m,m,m,m,m,A.l(m,m,j?C.dE:B.c,m,m,m,m,m,m,m,m,12,m,m,m,m,1.3,!0,m,m,m,m,m,m,m,m),m,m,m)
l=A.a([l,B.cN,n,B.cN,A.c("Buys only when the fast line crosses up AND the big trend is rising (slow line higher than 1 hour ago, price above it).",m,m,m,m,m,m,A.l(m,m,j?C.dk:C.dl,m,m,m,m,m,m,m,m,11,m,m,m,m,1.3,!0,m,m,m,m,m,m,m,m),m,m,m)],p)
if(w)B.d.u(l,A.a([B.at,A.c("Still holding the earlier "+x+" pretend trade: the agent only checks its exits (every 5 minutes) and never buys "+x+" again.",m,m,m,m,m,m,C.fH9,m,m,m)],p))
o.push(A.E(A.x(l,B.B,m,B.e,B.h,0,B.p),1))
l=A.p(m,A.A(o,B.B,m,B.e,B.h,0,m,m),B.f,m,m,new A.o(s,m,q,r,m,m,B.m),m,m,m,m,B.bQ,m,m,m)
s=A.ft(m,m,j?B.c.j(0.92):C.jN,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,B.no,m,m,m,m,m,m)
return A.eF(m,B.L,A.aG(!1,B.a3,!0,m,A.x(A.a([l,B.S,A.bN(!1,A.c("Got it",m,m,m,m,m,m,A.l(m,m,j?C.dE:B.c,m,m,m,m,m,m,m,m,m,m,m,B.F,m,m,!0,m,m,m,m,m,m,m,m),m,m,m),m,m,!0,m,m,m,new D.eGB(d),m,s)],p),B.l,m,B.e,B.M,0,B.p),B.f,B.L,0,m,m,m,m,m,B.ai),m,m,m,B.zt,m,B.d8,m,m,m)},
$S:47}
D.eGB.prototype={
$0(){return A.a8(this.a,!1).e7()},
$S:0}
D.eGh.prototype={
$1(d){return J.z(J.t(d,"open"),!0)},
$S:4}
D.eGi.prototype={
$0(){var x=this
return x.a.cDc(x.b,x.c,x.d)},
$S:0}
D.eGj.prototype={
$1(d){return J.z(J.t(d,"asset"),J.t(this.a,"asset"))},
$S:4}
D.eGl.prototype={
$2(d,e){return B.ar},
$S:38}
D.eGk.prototype={
$2(d,e){var x,w,v,u,t,s,r,q=this,p=null,o=q.b[e],n=J.a2(o),m=J.k(n.h(o,"asset")),l=m===J.t(q.c,"asset"),k=D.et(n.h(o,"changePct")),j=k>=0,i=q.d,h=J.z(i==null?p:i.h(0,"symbol"),m),g=J.z(D.fy(n.h(o,"reading")).h(0,"decision"),"ENTER")&&J.z(D.fy(n.h(o,"reading")).h(0,"dir"),"up")
i=q.e
x=i.a
w=x?B.c.j(0.92):C.jN
v=A.n(16)
if(l)u=D.fAK(m).c
else u=x?B.c:C.qM
u=A.K(u,B.r,l?2:1)
i=l?D.fAK(m).c.j(0.2):i.gWB()
i=A.a([new A.aa(0,B.H,i,B.cM,l?12:8)],y.V)
t=D.fvC(m,16)
s=y.p
t=A.a([t,B.e1,A.E(A.c(m,p,1,B.a2,p,p,p,A.l(p,p,x?C.dE:B.c,p,p,p,p,p,p,p,p,11.5,p,p,B.F,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),1)],s)
if(h)t.push(A.W(B.pW,F.uH,p,p,p,13))
else if(g)t.push(A.W(B.fY,C.dN,p,p,p,14))
else if(!J.z(n.h(o,"open"),!0)){r=n.h(o,"offLabel")
r=J.k(r==null?"closed":r)
t.push(A.c(r,p,p,p,p,p,p,A.l(p,p,x?C.dk:C.dl,p,p,p,p,p,p,p,p,9,p,p,B.P,p,p,!0,p,p,p,p,p,p,p,p),p,p,p))}t=A.A(t,B.l,p,B.e,B.h,0,p,p)
n=D.hD(D.et(n.h(o,"price")),!0,!1)
n=A.E(new A.dl(B.ds,B.a5,B.f,A.c(n,p,p,p,p,p,p,A.l(p,p,x?C.dE:B.c,p,p,p,p,p,p,p,p,14.5,p,p,B.F,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p),1)
x=j?"+":""
r=B.i.a9(k,2)
return A.aA(p,A.cT(p,A.x(A.a([t,A.A(A.a([n,B.d6,A.c(x+r+"%",p,p,p,p,p,p,A.l(p,p,j?C.dN:C.ey,p,p,p,p,p,p,p,p,10.5,p,p,B.F,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)],s),B.dH,p,B.e,B.h,0,p,p)],s),B.B,p,B.iO,B.h,0,B.p),p,p,B.b_,new A.o(w,p,u,v,i,p,B.m),B.a3,p,p,p,p,B.jg,p,p,152),B.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new D.eGg(q.a,m),p,p,p,p,p,p,!1,B.a4)},
$S:81}
D.eGg.prototype={
$0(){return this.a.a2_(this.b)},
$S:0}
D.eGa.prototype={
$0(){var x=this.a
return x.l(new D.eG9(x,this.b))},
$S:0}
D.eG9.prototype={
$0(){return this.a.z=this.b},
$S:0}
D.eGb.prototype={
$0(){var x=this.a
return x.l(new D.eG8(x))},
$S:0}
D.eG8.prototype={
$0(){var x=this.a
return x.ax=!x.ax},
$S:0}
D.eG2.prototype={
$1(d){return J.z(J.t(d,"asset"),this.a.h(0,"symbol"))},
$S:4}
D.eG3.prototype={
$0(){return A.S(y.N,y.z)},
$S:204}
D.eGp.prototype={
$2(d,e){var x=null,w=e.b,v=A.ao(x,A.p(x,x,B.f,x,x,new A.o(x,x,x,A.n(99),x,C.cb9,B.m),x,8,x,x,x,x,x,x),x,x,0,0,9,x),u=this.a.a,t=A.ao(x,A.p(x,x,B.f,(u?C.dE:B.c).j(0.5),x,x,x,18,x,x,x,x,x,2),x,x,w/2-1,x,4,x),s=B.i.D(this.b*w-9,0,w-18)
return new A.a6(x,26,new A.an(B.a0,x,B.ad,B.f,A.a([v,t,A.ao(x,A.p(x,x,B.f,x,x,new A.o(B.c,x,A.K(u?C.dE:B.c,B.r,3),x,x,x,B.a6),x,18,x,x,x,x,x,18),x,x,s,x,4,x)],y.p),x),x)},
$S:120}
D.eGc.prototype={
$0(){return this.a.SL(!this.b)},
$S:0}
D.eG1.prototype={
$2(d,e){var x=null,w=this.a.a,v=w?C.CF:C.CH,u=A.n(12),t=A.c(d,x,1,B.a2,x,x,x,A.l(x,x,w?C.dk:C.dl,x,x,x,x,x,x,x,x,10.5,x,x,x,x,x,!0,x,x,x,x,x,x,x,x),x,x,x)
return A.E(A.p(x,A.x(A.a([t,B.bz,new A.dl(B.ds,B.a5,B.f,A.c(e,x,x,x,x,x,x,A.l(x,x,w?C.dE:B.c,x,x,x,x,x,x,x,x,13,x,x,B.F,x,x,!0,x,x,x,x,x,x,x,x),x,x,x),x)],y.p),B.B,x,B.e,B.h,0,B.p),B.f,x,x,new A.o(v,x,x,u,x,x,B.m),x,x,x,x,B.jg,x,x,x),1)},
$S:115}
D.eGG.prototype={
$1(d){return A.a1(d,y.N,y.z)},
$S:25}
D.eGH.prototype={
$0(){var x=this.a
return x.l(new D.eGF(x))},
$S:0}
D.eGF.prototype={
$0(){var x=this.a
return x.y=!x.y},
$S:0}
D.eG0.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
x=u.x&&u.w?2:4
break
case 2:x=5
return A.b(u.a_1(!0),$async$$0)
case 5:x=3
break
case 4:u.l(new D.eG_(u))
case 3:return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
D.eG_.prototype={
$0(){var x=this.a
return x.x=!x.x},
$S:0}
D.cWV.prototype={
$0(){return this.a.d=this.b},
$S:0}
D.cX3.prototype={
$2(d,e){var x,w,v=null,u=e.b,t=this.a,s=t.a,r=s.c,q=s.d,p=s.e,o=s.f
s=s.r
x=t.d
w=d.K(y.D)
return A.aA(v,new A.a6(u,250,A.b4(v,v,v,new D.bem((w==null?B.CP:w).w.d,r,q,p,o,s,x,v),B.az),v),B.y,!1,v,v,v,v,v,new D.cWZ(t),new D.cX_(t,u),new D.cX0(t,u),v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new D.cX1(t,u),new D.cX2(t),v,v,v,!1,B.a4)},
$S:36}
D.cX1.prototype={
$1(d){return this.a.aAx(d.b,this.b)},
$S:23}
D.cX_.prototype={
$1(d){return this.a.aAx(d.b,this.b)},
$S:50}
D.cX0.prototype={
$1(d){return this.a.aAx(d.b,this.b)},
$S:19}
D.cWZ.prototype={
$1(d){var x=this.a
return x.l(new D.cWY(x))},
$S:37}
D.cWY.prototype={
$0(){return this.a.d=null},
$S:0}
D.cX2.prototype={
$1(d){return A.bL(B.fX,new D.cWX(this.a),y.b)},
$S:56}
D.cWX.prototype={
$0(){var x=this.a
if(x.c!=null)x.l(new D.cWW(x))},
$S:12}
D.cWW.prototype={
$0(){return this.a.d=null},
$S:0}
D.cX4.prototype={
$1(d){var x=this.a
return x*d+x/2},
$S:157}
D.cX6.prototype={
$1(d){var x=this.b,w=this.a,v=w.a
return x-(d-v)/(w.b-v)*x},
$S:5}
D.cX5.prototype={
$2(d,e){var x,w,v,u,t,s,r,q,p=this,o=$.T(),n=A.a([],y.v),m=new A.aH(o.r,B.aj,null,null,n)
for(o=p.b,x=p.c,w=p.d,v=p.a.c,u=!1,t=0;t<o;++t){s=J.t(v[t],d)
if(s==null)continue
r=x.$1(t)
if(typeof s=="number")q=s
else{q=A.cE(A.v(s))
if(q==null)q=0}q=w.$1(q)
if(u){r=new A.aq(r,q)
n.push(r)
q=m.f
if(q!=null)r.aj(q)
m.ac()}else{r=new A.aZ(r,q)
n.push(r)
q=m.f
if(q!=null)r.aj(q)
m.ac()}u=!0}$.T()
o=A.L()
o.r=e.j(0.85).gp(0)
o.b=B.ac
o.c=2
o.d=B.bF
o.e=B.dO
p.e.af(m,o)},
$S:2020}
D.fh2.prototype={
$1(d){return D.et(J.t(d,"c"))},
$S:2021}
D.fvD.prototype={
$1(d){var x=null,w=C.a8t.h(0,d),v=w.a,u=w.b,t=this.a,s=t*0.78,r=A.K(B.c,B.r,1.2)
return A.p(B.z,A.c(v,x,x,x,x,x,x,A.l(x,x,B.c,x,x,x,x,x,x,x,x,t*(v.length>1?0.26:0.36),x,x,B.u,x,x,!0,x,x,x,x,x,x,x,x),x,x,x),B.f,x,x,new A.o(u,x,r,x,x,x,B.a6),x,s,x,x,x,x,x,s)},
$S:128}
D.fB2.prototype={
$1(d){var x=y.N,w=y.z,v=A.a1(d,x,w)
w=A.dH(v,x,w)
w.n(0,"asset",v.h(0,"symbol"))
return w},
$S:25}
D.fFn.prototype={
$1(d){return A.a1(d,y.N,y.z)},
$S:25}
D.fC8.prototype={
$1(d){return","},
$S:57}
D.fJq.prototype={
$3(d,e,f){var x=A.bPq(d,e,1,0,0,0,0,0)
while(A.lU(x)!==7)x=x.bM(864e8)
return x.bM(A.dv(7*(f-1),0,0,0,0,0).a)},
$S:2022}
D.fGe.prototype={
$1(d){return J.k(d)},
$S:15}
D.fGf.prototype={
$2(d,e){var x=null,w=e.b,v=A.ao(x,A.p(x,x,B.f,x,x,new A.o(x,x,x,A.n(9),x,C.caA,B.m),x,6,x,x,x,x,x,x),x,x,0,0,4,x),u=B.i.D(this.a/100*w-7,0,w-14)
return new A.a6(x,14,new A.an(B.a0,x,B.ad,B.f,A.a([v,A.ao(x,A.p(x,x,B.f,x,x,new A.o(B.c,x,A.K(this.b.a?C.dE:B.c,B.r,2.5),x,x,x,B.a6),x,14,x,x,x,x,x,14),x,x,u,x,0,x)],y.p),x),x)},
$S:120}
D.die.prototype={
$1(d){var x=this.a
if(x.c!=null)x.l(new D.did())},
$S:11}
D.did.prototype={
$0(){},
$S:0}
D.fws.prototype={
$1(d){return J.k(d)},
$S:15}
D.eGT.prototype={
$1(d){return J.k(d)},
$S:15}
D.eHL.prototype={
$0(){return this.a.l(new D.eHK())},
$S:0}
D.eHK.prototype={
$0(){},
$S:0}
D.eHM.prototype={
$0(){return $.hkh=this.a.at.a.a},
$S:0}
D.eHN.prototype={
$1(d){var x=this.a
if(x.c!=null)x.l(new D.eHJ(x,d))},
$S:191}
D.eHJ.prototype={
$0(){return this.a.Q=this.b},
$S:0}
D.eHO.prototype={
$1(d){this.a.Rc()
return null},
$S:11}
D.eHG.prototype={
$1(d){var x=y.N,w=y.z
w=A.dH(A.a1(d,x,w),x,w)
w.n(0,"asset",J.t(d,"symbol"))
return w},
$S:25}
D.eHd.prototype={
$0(){var x,w,v=this,u=v.c
if(J.z(u==null?null:J.t(u,"isAdmin"),!0))v.b.y=!0
x=v.d
if(x==null)x=v.a.a
if(x!=null){u=y.g.a(x.h(0,"done"))
if(u==null)u=A.a([],y.s)
w=y.Y.a(x.h(0,"lessons"))
v.b.x=A.J(["done",u,"lessons",w==null?A.S(y.N,y.z):w],y.N,y.z)}},
$S:0}
D.eHo.prototype={
$0(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n
var $async$$0=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.aB(),$async$$0)
case 7:r=e
x=8
return A.b(r.aE("String","ngmy_signal_grid_academy_v2",B.V.au(s.a.x,null)),$async$$0)
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
return A.b(A.h1(A.J(["action","paLearnSave","progress",p.x],y.N,y.z),!1,!1,!1,!1,B.hb),$async$$0)
case 9:o=e
if(J.z(o==null?null:J.t(o,"allDone"),!0)){$.cmV=new A.V(A.fZ(0,0),0,!1)
A.Pb()}case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$$0,w)},
$S:1}
D.eGW.prototype={
$1(d){return this.a.gK_().q(0,d.a)},
$S:z+0}
D.eGX.prototype={
$0(){var x,w=this.a,v=y.N,u=A.d_(w.gK_(),v)
u.I(0,this.b)
x=A.B(u,A.a5(u).k("ci.E"))
v=A.dH(w.x,v,y.z)
v.n(0,"done",x)
w.x=v},
$S:0}
D.eGY.prototype={
$1(d){return this.a.gK_().q(0,d.a)},
$S:z+0}
D.eGZ.prototype={
$1(d){var x=null
return A.eh(A.a([A.bI(C.hb7,x,new D.eGV(this.a,d),x)],y.p),x,x,x,C.h82,x,x,x,x,C.fWd,x)},
$S:18}
D.eGV.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:A.a8(v.b,!1).N(null)
x=2
return A.b(A.Mi(),$async$$0)
case 2:u=e
t=v.a
if(t.c!=null)t.l(new D.eGU(t,u))
return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
D.eGU.prototype={
$0(){return this.a.Q=this.b},
$S:0}
D.eHn.prototype={
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
if(v==null)v=B.c9
v=J.b8(v,new D.eHm(),y.N)
v=A.B(v,v.$ti.k("ak.E"))
t.dy=v
v=w.h(x,"nowEt")
t.fr=J.k(v==null?"":v)
t.fx=J.z(w.h(x,"stockOpen"),!0)
t.r=new A.V(Date.now(),0,!1)},
$S:0}
D.eHm.prototype={
$1(d){return J.k(d)},
$S:15}
D.eHe.prototype={
$2(d,e){return new A.V(Date.now(),0,!1).by(e.a).a>18e7},
$S:2023}
D.eHf.prototype={
$0(){},
$S:0}
D.eHD.prototype={
$1(d){return J.z(J.t(d,"open"),!0)&&D.bF0(d).length>5},
$S:4}
D.eHE.prototype={
$2(d,e){return B.i.aQ(D.aHk(d),D.aHk(e))},
$S:40}
D.eH1.prototype={
$1(d){return J.z(J.t(d,"asset"),this.a.h(0,"symbol"))},
$S:4}
D.eH2.prototype={
$0(){return A.S(y.N,y.z)},
$S:204}
D.eH3.prototype={
$1(d){var x,w,v,u,t,s,r,q,p,o,n="typicalMin",m="enterWithinMin",l=J.a2(d),k=D.fy(l.h(d,"reading")),j=D.fy(k.h(0,"timing"))
if(j.h(0,n)==null)x=""
else{w=A.v(j.h(0,"dir"))
v=A.v(j.h(0,"ageMin"))
u=A.v(j.h(0,n))
t=A.v(j.h(0,"remainingMin"))
s=A.v(j.h(0,"dir"))
r=A.v(j.h(0,"worked"))
q=A.v(j.h(0,"of"))
p=D.et(j.h(0,m))>0?"still early (enter within "+A.v(j.h(0,m))+" min)":"too late to enter"
x=", current "+w+" move "+v+" min old, such moves usually last "+u+" min (about "+t+" min left), past "+s+" moves really went that way "+r+" of "+q+" times, "+p}w=A.v(l.h(d,"asset"))
v=A.v(l.h(d,"name"))
u=D.hIv(d)
t=B.i.a9(D.et(l.h(d,"changePct")),2)
l=J.z(l.h(d,"open"),!0)?"open":"closed"
s=k.h(0,"bias")
s=A.v(s==null?"unknown":s)
r=B.i.a9(D.et(k.h(0,"score")),0)
q=k.h(0,"rsi")==null?"n/a":B.i.a9(D.et(k.h(0,"rsi")),0)
p=k.h(0,"mom1h")==null?"n/a":B.i.a9(D.et(k.h(0,"mom1h")),2)+"%"
o=k.h(0,"action")
return"- "+w+" ("+v+"): price "+u+", change "+t+"%, "+l+", "+s+", strength "+r+", RSI "+q+", last hour "+p+", reading: "+A.v(o==null?"n/a":o)+x+"."},
$S:52}
D.eGP.prototype={
$0(){$.DB.push(new D.a_A(!0,this.b))
$.ah9=!0},
$S:0}
D.eGQ.prototype={
$1(d){return(d.a?"Student":"Tutor")+": "+d.b},
$S:z+5}
D.eGR.prototype={
$1(d){return"- "+A.v(d)},
$S:15}
D.eGS.prototype={
$0(){},
$S:0}
D.eHp.prototype={
$1(d){var x=this.a.ax,w=x.f
if(w.length!==0){w=B.d.gd3(w).Q
w.toString
x.m7(w+200,B.e9,B.eW)}},
$S:7}
D.eHH.prototype={
$0(){return A.VK(this.a)},
$S:0}
D.eHI.prototype={
$0(){return this.b.gLg().C2(this.a.a)},
$S:0}
D.eH0.prototype={
$1(d){return this.a.gK_().q(0,d.a)},
$S:z+0}
D.eH_.prototype={
$0(){return this.a.clx(this.b)},
$S:0}
D.eHl.prototype={
$1(d){var x=this.b,w=B.d.cd(C.Eg,x),v=this.a,u=v.y,t=x.a,s=v.gK_().q(0,t)
t=y.Y.a(D.fy(v.x.h(0,"lessons")).h(0,t))
if(t==null)t=B.lD
return new D.a0B(x,w+1,new D.eHh(v,x),u,s,A.a1(t,y.N,y.z),new D.eHi(v,x),new D.eHj(v,x),new D.eHk(v),null)},
$S:z+6}
D.eHh.prototype={
$0(){var x=this.a,w=x.c
w.toString
return x.c6K(new D.a1x(A.Q(w).ax.a===B.dd),this.b.r)},
$S:131}
D.eHi.prototype={
$1(d){var x=this.a
x.l(new D.eHg(x,this.b,d))
x.aCJ()},
$S:118}
D.eHg.prototype={
$0(){var x=this.a,w=y.N,v=y.z,u=A.a1(D.fy(x.x.h(0,"lessons")),w,v)
u.n(0,this.b.a,this.c)
v=A.dH(x.x,w,v)
v.n(0,"lessons",u)
x.x=v},
$S:0}
D.eHj.prototype={
$0(){return this.a.ae6(this.b.a)},
$S:0}
D.eHk.prototype={
$1(d){var x=this.a,w=x.c
w.toString
A.a8(w,!1).e7()
x.aQV(d)},
$S:2}
D.eH4.prototype={
$2$last$lines(d,e){var x=this.a
return new D.adH(B.d.fE(x,Math.max(0,x.length-d)),this.b,null,e,this.c,null)},
$0(){return this.$2$last$lines(36,!0)},
$1$lines(d){return this.$2$last$lines(36,d)},
$S:2024}
D.eHc.prototype={
$1(d){var x=null
return A.c(d,x,x,x,x,x,x,A.l(x,x,this.a.a?C.dE:B.c,x,x,x,x,x,x,x,x,13,x,x,x,x,1.4,!0,x,x,x,x,x,x,x,x),x,x,x)},
$S:2025}
D.eH5.prototype={
$1(d){var x=J.a2(d)
return J.z(D.fy(x.h(d,"reading")).h(0,"decision"),"ENTER")&&J.z(D.fy(x.h(d,"reading")).h(0,"dir"),"up")},
$S:4}
D.eH6.prototype={
$1(d){return J.t(d,"asset")},
$S:772}
D.eH7.prototype={
$1(d){var x=J.a2(d)
return J.z(D.fy(x.h(d,"reading")).h(0,"decision"),"ENTER")&&J.z(D.fy(x.h(d,"reading")).h(0,"dir"),"down")},
$S:4}
D.eH8.prototype={
$1(d){return J.t(d,"asset")},
$S:772}
D.eH9.prototype={
$1(d){var x=J.a2(d)
return J.z(x.h(d,"open"),!0)&&D.fy(x.h(d,"reading")).h(0,"rsi")!=null},
$S:4}
D.eHa.prototype={
$1(d){return J.z(J.t(d,"open"),!0)},
$S:4}
D.eHb.prototype={
$1(d){var x=D.fy(D.fy(J.t(d,"reading")).h(0,"timing"))
return D.et(x.h(0,"of"))>=3&&D.et(x.h(0,"worked"))/D.et(x.h(0,"of"))>=0.5},
$S:4}
D.eHt.prototype={
$1(d){var x,w,v,u=this.a
if(u.cx!=="All"&&D.hDy(d)!==u.cx)return!1
u=this.b
if(u.length===0)return!0
x=J.a2(d)
w=A.v(x.h(d,"asset"))
v=A.v(x.h(d,"name"))
x=x.h(d,"asset")
x=J.k(x==null?"":x)
return B.a.q((w+" "+v+" "+A.aL(x,"/","")).toLowerCase(),u)},
$S:4}
D.eHu.prototype={
$2(d,e){var x,w,v=J.a2(d),u=y.f,t=u.b(D.fy(v.h(d,"reading")).h(0,"entry"))?0:1,s=J.a2(e),r=u.b(D.fy(s.h(e,"reading")).h(0,"entry"))?0:1
if(t!==r)return t-r
u=this.a.dx
x=u.am(0,v.h(d,"asset"))?0:1
w=u.am(0,s.h(e,"asset"))?0:1
if(x!==w)return x-w
return B.i.aQ(D.aHk(d),D.aHk(e))},
$S:40}
D.eHC.prototype={
$2(d,e){var x=D.fy(J.t(d,"reading"))
return J.z(x.h(0,"dir"),e)&&B.d.q(C.aCe,x.h(0,"decision"))},
$S:2027}
D.eHv.prototype={
$1(d){return this.a.$2(d,"up")},
$S:4}
D.eHw.prototype={
$1(d){return this.a.$2(d,"down")},
$S:4}
D.eHy.prototype={
$0(){var x=this.a
return x.l(new D.eHs(x,this.b))},
$S:0}
D.eHs.prototype={
$0(){return this.a.cx=this.b},
$S:0}
D.eHx.prototype={
$1(d){return D.hDy(d)===this.a},
$S:4}
D.eHz.prototype={
$0(){var x=this.a
x.l(new D.eHr(x))},
$S:0}
D.eHr.prototype={
$0(){var x=this.a,w=x.CW
x.CW=!w
if(w){x.ch=""
x.cy.bN(0,B.ci)}},
$S:0}
D.eHA.prototype={
$1(d){var x=this.a
return x.l(new D.eHq(x,d))},
$S:2}
D.eHq.prototype={
$0(){return this.a.ch=this.b},
$S:0}
D.eHB.prototype={
$0(){return this.a.aQV("What is happening with "+A.v(J.t(this.b,"asset"))+" right now? Is it bullish or bearish, how long might the move last, and is it too late to enter?")},
$S:0}
D.eGL.prototype={
$1(d){return this.a.gK_().q(0,d.a)},
$S:z+0}
D.eGM.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=!v.b?2:4
break
case 2:v.a.gLg().C2(0)
x=3
break
case 4:x=5
return A.b(A.Mi(),$async$$0)
case 5:u=e
t=v.a
if(t.c!=null)t.l(new D.eGK(t,u))
$.cmV=new A.V(A.fZ(0,0),0,!1)
A.Pb()
case 3:return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
D.eGK.prototype={
$0(){return this.a.Q=this.b},
$S:0}
D.eGN.prototype={
$0(){return this.a.JZ(this.b)},
$S:0}
D.eGO.prototype={
$0(){var x=this.a
return x.JZ(x.at.a.a)},
$S:0}
D.duO.prototype={
$1(d){var x
y.g.a(d)
x=d==null?B.c9:d
x=J.b8(x,new D.duP(),y.S)
x=A.B(x,x.$ti.k("ak.E"))
return x},
$S:436}
D.duP.prototype={
$1(d){var x=A.c8(A.v(d),null)
return x==null?0:x},
$S:311}
D.duM.prototype={
$1(d){var x,w
y.Y.a(d)
x=d==null?B.lD:d
w=y.S
return J.oN(x,new D.duN(),w,w)},
$S:2028}
D.duN.prototype={
$2(d,e){var x,w=A.c8(A.v(d),null)
if(w==null)w=0
x=A.c8(A.v(e),null)
if(x==null)x=0
return new A.bu(w,x,y.a)},
$S:2029}
D.duK.prototype={
$1(d){var x
if(d>=0){x=this.a.d
x===$&&A.d()
x=d<x.length}else x=!1
return x},
$S:29}
D.duL.prototype={
$1(d){var x,w=this.a
if(w.c==null)return
x=w.w
x===$&&A.d()
if(x.a!==0)w.l(new D.duJ(w))},
$S:11}
D.duJ.prototype={
$0(){return this.a.cG_()},
$S:0}
D.duC.prototype={
$2(d,e){return new A.bu(""+d,e,y.W)},
$S:773}
D.duD.prototype={
$2(d,e){return new A.bu(""+d,e,y.W)},
$S:773}
D.duE.prototype={
$1(d){var x=this.a,w=x.x
w===$&&A.d()
if(!B.d.q(w,d)){x=x.e
x===$&&A.d()
x=!B.d.q(x,d)}else x=!1
return x},
$S:29}
D.duF.prototype={
$1(d){var x=this.a,w=x.e
w===$&&A.d()
if(!B.d.q(w,d)){x=x.f
x===$&&A.d()
x=!x.q(0,d)}else x=!1
return x},
$S:29}
D.duA.prototype={
$0(){var x,w,v,u=this.b,t=this.a,s=t.d
s===$&&A.d()
x=this.c
w=t.y
if(u===s[x].c){u=t.f
u===$&&A.d()
u.I(0,x)
w.X(0,x)}else{w.n(0,x,u)
u=t.r
u===$&&A.d()
u=u.h(0,x)
v=(u==null?0:u)+1
t.r.n(0,x,v)
if(!t.a.f&&v>=2){u=t.w
u===$&&A.d()
u.n(0,x,new A.V(Date.now(),0,!1).bM(3e8).a)}}},
$S:0}
D.duG.prototype={
$0(){return A.VK(this.a)},
$S:0}
D.duH.prototype={
$0(){return this.a.a.d_2('I just read the lesson "'+this.b.b+'". Can you explain it again with a live example from the markets right now?')},
$S:0}
D.duI.prototype={
$0(){this.a.a.rn()
A.VK(this.b)},
$S:0}
D.duB.prototype={
$0(){return this.a.cg7(this.b,this.c)},
$S:0};(function aliases(){var x=D.aPi.prototype
x.bBq=x.t})();(function installTearOffs(){var x=a._instance_0u,w=a._instance_1u
var v
x(v=D.aHj.prototype,"gclv","clw",2)
x(v,"gcyX","a3h",1)
x(v=D.aHl.prototype,"gcga","Rc",1)
w(v,"gcg8","JZ",4)})();(function inheritance(){var x=a.mixinHard,w=a.inheritMany,v=a.inherit
w(A.af,[D.atR,D.adH,D.aCv,D.XF,D.a0B])
w(A.ah,[D.aHj,D.bel,D.bhS,D.aPi,D.bl2])
w(A.fO,[D.eGJ,D.eGo,D.eGd,D.eGy,D.eGm,D.eGu,D.eG4,D.eG6,D.eGC,D.eGh,D.eGj,D.eG2,D.eGG,D.cX1,D.cX_,D.cX0,D.cWZ,D.cX2,D.cX4,D.cX6,D.fh2,D.fvD,D.fB2,D.fFn,D.fC8,D.fJq,D.fGe,D.die,D.fws,D.eGT,D.eHN,D.eHO,D.eHG,D.eGW,D.eGY,D.eGZ,D.eHm,D.eHD,D.eH1,D.eH3,D.eGQ,D.eGR,D.eHp,D.eH0,D.eHl,D.eHi,D.eHk,D.eH4,D.eHc,D.eH5,D.eH6,D.eH7,D.eH8,D.eH9,D.eHa,D.eHb,D.eHt,D.eHv,D.eHw,D.eHx,D.eHA,D.eGL,D.duO,D.duP,D.duM,D.duK,D.duL,D.duE,D.duF])
w(A.hR,[D.eGf,D.eGn,D.eGq,D.eGe,D.eGw,D.eGx,D.eGz,D.eGA,D.eGs,D.eGt,D.eGI,D.eGD,D.eGE,D.eG5,D.eG7,D.eGB,D.eGi,D.eGg,D.eGa,D.eG9,D.eGb,D.eG8,D.eG3,D.eGc,D.eGH,D.eGF,D.eG0,D.eG_,D.cWV,D.cWY,D.cWX,D.cWW,D.did,D.eHL,D.eHK,D.eHM,D.eHJ,D.eHd,D.eHo,D.eGX,D.eGV,D.eGU,D.eHn,D.eHf,D.eH2,D.eGP,D.eGS,D.eHH,D.eHI,D.eH_,D.eHh,D.eHg,D.eHj,D.eHy,D.eHs,D.eHz,D.eHr,D.eHq,D.eHB,D.eGM,D.eGK,D.eGN,D.eGO,D.duJ,D.duA,D.duG,D.duH,D.duI,D.duB])
w(A.ie,[D.eGr,D.eGv,D.eGl,D.eGk,D.eGp,D.eG1,D.cX3,D.cX5,D.fGf,D.eHe,D.eHE,D.eHu,D.eHC,D.duN,D.duC,D.duD])
w(A.lK,[D.bem,D.bwh])
w(A.aE,[D.z3,D.a1x,D.cC,D.uv,D.a_A])
v(D.aHl,D.aPi)
x(D.aPi,A.cg)})()
A.i0(b.typeUniverse,JSON.parse('{"atR":{"af":[],"w":[]},"adH":{"af":[],"w":[]},"aCv":{"af":[],"w":[]},"XF":{"af":[],"w":[]},"a0B":{"af":[],"w":[]},"aHj":{"ah":["atR"]},"bel":{"ah":["adH"]},"bem":{"aC":[]},"bwh":{"aC":[]},"bhS":{"ah":["aCv"]},"aHl":{"ah":["XF"]},"bl2":{"ah":["a0B"]}}'))
var y=(function rtii(){var x=A.ar
return{c:x("kS<u?>"),D:x("EC"),V:x("N<aa>"),O:x("N<u>"),t:x("N<a9<m,@>>"),v:x("N<fX>"),L:x("N<+(m,m)>"),s:x("N<m>"),p:x("N<w>"),r:x("N<cC>"),n:x("N<G>"),X:x("N<F>"),W:x("bu<m,F>"),a:x("bu<F,F>"),P:x("a9<m,@>"),f:x("a9<@,@>"),b:x("cm"),R:x("+at,from,to(V,m,m)"),N:x("m"),E:x("X<uv>"),q:x("kx"),y:x("P"),z:x("@"),S:x("F"),g:x("ai<@>?"),Y:x("a9<@,@>?"),H:x("~")}})();(function constants(){var x=a.makeConstList
C.dN=new A.u(1,0.12156862745098039,0.7490196078431373,0.592156862745098,B.q)
C.b5p=new A.kS(C.dN,y.c)
C.jN=new A.u(1,0.08627450980392157,0.10588235294117647,0.1803921568627451,B.q)
C.dk=new A.u(1,0.5411764705882353,0.5607843137254902,0.6392156862745098,B.q)
C.yH=new A.u(1,0.0392156862745098,0.050980392156862744,0.09411764705882353,B.q)
C.yJ=new A.u(1,0.9294117647058824,0.9372549019607843,0.9803921568627451,B.q)
C.dl=new A.u(1,0.5529411764705883,0.5843137254901961,0.6705882352941176,B.q)
C.mV=new A.u(1,0.08627450980392157,0.09019607843137255,0.11372549019607843,B.q)
C.qC=new A.u(1,0.14901960784313725,0.17647058823529413,0.27058823529411763,B.q)
C.qF=new A.u(1,0.9058823529411765,0.9098039215686274,0.9411764705882353,B.q)
C.a_q=new A.u(1,0.06666666666666667,0.08235294117647059,0.1607843137254902,B.q)
C.NU=new A.u(1,0.12549019607843137,0.14901960784313725,0.23137254901960785,B.q)
C.a_A=new A.u(1,0.9725490196078431,0.9450980392156862,0.9490196078431372,B.q)
C.qM=new A.u(1,0.13725490196078433,0.16470588235294117,0.25882352941176473,B.q)
C.O2=new A.u(1,0.9372549019607843,0.9411764705882353,0.9607843137254902,B.q)
C.dE=new A.u(1,0.07058823529411765,0.0784313725490196,0.10980392156862745,B.q)
C.ey=new A.u(1,0.9411764705882353,0.33725490196078434,0.41568627450980394,B.q)
C.CF=new A.u(1,0.9568627450980393,0.9607843137254902,0.9803921568627451,B.q)
C.CH=new A.u(1,0.11372549019607843,0.13725490196078433,0.2196078431372549,B.q)
C.bEz=new A.R(0,0,0,7)
C.bGb=new A.R(12,8,12,6)
C.bGl=new A.R(13,7,13,7)
C.bHa=new A.R(16,10,16,30)
C.bHw=new A.R(16,4,16,40)
C.bHz=new A.R(16,6,16,16)
C.aoc=new A.R(16,6,16,40)
C.bHH=new A.R(16,8,16,40)
C.bKr=new A.R(4,0,4,8)
C.arj=new A.a_(62840,"MaterialIcons",!1)
C.bVO=new A.a_(983325,"MaterialIcons",!1)
C.asw=new A.a_(983635,"MaterialIcons",!0)
C.ash=new A.a_(983372,"MaterialIcons",!1)
C.bXn=new A.ae(C.ash,18,C.dN,null,null,null)
C.bXP=new A.ae(B.xd,16,null,null,null,null)
C.c_T=new A.ae(B.r7,7,C.dN,null,null,null)
C.c0A=new A.ae(B.ea,18,C.dN,null,null,null)
C.c0Q=new A.ae(B.rf,20,B.c,null,null,null)
C.c1Z=new A.ae(B.fY,16,B.c,null,null,null)
C.c34=new A.ae(B.xd,18,null,null,null,null)
C.c57=new A.ae(B.QI,18,null,null,null,null)
C.c5b=new A.ae(B.xg,null,C.ey,null,null,null)
C.c6z=new A.ae(B.Qg,18,C.ey,null,null,null)
C.cNX=x([B.dz,B.fw,B.i0],y.O)
C.caz=new A.a7(B.ay,B.aC,B.x,C.cNX,null,null)
C.aCL=x([C.ey,B.au,C.dN],y.O)
C.caA=new A.a7(B.a5,B.a9,B.x,C.aCL,null,null)
C.cb9=new A.a7(B.a5,B.a9,B.x,C.aCL,B.m5,null)
C.dqI=x([B.dz,B.i0,B.bB],y.O)
C.ced=new A.a7(B.ay,B.aC,B.x,C.dqI,null,null)
C.dt2=x([B.i0,B.bB],y.O)
C.ceB=new A.a7(B.a5,B.a9,B.x,C.dt2,null,null)
C.co6=x([12,24,48],y.X)
C.d6g=x(["All","Forex","Stocks","Crypto"],y.s)
C.aCe=x(["ENTER","SKIP_WEAK","WAIT_LATE"],y.s)
C.dcu=x(["Which market looks strongest right now?","Is Bitcoin going up or down right now?","Why has the agent not bought yet?","Explain RSI like I am new","How do I know when to sell?","What does bullish and bearish mean?"],y.s)
C.f7Y=new A.y("The idea","Trading means buying something and selling it later. You make money when you sell for more than you paid, and you lose money when you sell for less. That is all a trade is.")
C.f_A=new A.y("Why prices move","Every price is set by buyers and sellers. When more people want to buy than sell, the price goes up. When more want to sell, it goes down. A chart is simply a picture of that tug of war over time.")
C.f0x=new A.y("Nobody knows the future","No person, app or AI can know for sure where a price goes next. Good traders do not guess. They follow clear rules, keep losses small, and let the winners pay for the losers.")
C.f7G=new A.y("Why pretend money first","This agent uses Alpaca paper money: real prices, fake dollars. You can learn every step, make mistakes and see real results without risking a cent. Professionals practise this way too.")
C.cZu=x([C.f7Y,C.f_A,C.f0x,C.f7G],y.L)
C.daK=x(["When you buy","When you sell for more than you paid","When the market opens"],y.s)
C.b3p=new D.cC("When do you make money on a trade?",C.daK,1,"Profit only exists after you sell higher than you bought.")
C.d55=x(["More buyers than sellers","The app","The time of day"],y.s)
C.b3k=new D.cC("What makes a price go up?",C.d55,0,"More people wanting to buy pushes the price up.")
C.dyK=x([C.b3p,C.b3k],y.r)
C.hNN=new D.uv("basics","What trading really is","Buyers, sellers and why prices move",4,M.l8,B.au,"basics",C.cZu,C.dyK)
C.bWq=new A.a_(983780,"MaterialIcons",!1)
C.eRh=new A.y("One candle = one time slice","On this chart every candle is 5 minutes. It shows four prices: where it started (open), where it ended (close), the highest point (high) and the lowest point (low).")
C.eYW=new A.y("The colours","Green candle: the price closed HIGHER than it opened, buyers won those 5 minutes. Yellow candle: it closed LOWER, sellers won. Many apps use red instead of yellow, it means the same thing.")
C.f9a=new A.y("Body and wicks","The thick part (the body) runs from open to close. The thin lines (the wicks) show how far the price went up or down before coming back. A long wick on top means buyers pushed up but sellers pushed it back down.")
C.f6f=new A.y("Reading a row of candles","Several green candles in a row, each closing higher, show buyers in control. Many yellow ones closing lower show sellers in control. Candles that go up and down with no direction mean the market is undecided.")
C.cfH=x([C.eRh,C.eYW,C.f9a,C.f6f],y.L)
C.daR=x(["It closed higher than it opened","It is a good time to buy","The market is closed"],y.s)
C.b3n=new D.cC("A green candle means...",C.daR,0,"Colour only tells you if it closed above or below where it opened.")
C.cGC=x(["1 day","5 minutes","1 hour"],y.s)
C.b3c=new D.cC("On this chart one candle covers...",C.cGC,1,"The agent works with 5-minute candles.")
C.dhb=x([C.b3n,C.b3c],y.r)
C.hNR=new D.uv("candles","Reading candles","Open, close, high and low in one shape",5,C.bWq,C.dN,"candles",C.cfH,C.dhb)
C.f1D=new A.y("Bullish","An uptrend. The price makes higher highs and higher lows, like climbing stairs. Buyers are in control. Traders call this bullish (a bull attacks upward with its horns).")
C.fa5=new A.y("Bearish","A downtrend. Lower highs and lower lows, like walking down stairs. Sellers are in control. This is bearish (a bear swipes downward).")
C.eSy=new A.y("Sideways","The price bounces between a ceiling and a floor with no clear direction. Most trading signals fail here, so the best move is often to wait.")
C.f4p=new A.y("The golden rule","Trade WITH the trend, not against it. Buying in a downtrend because it looks cheap is how most beginners lose. The agent only buys when the trend turns up.")
C.d8T=x([C.f1D,C.fa5,C.eSy,C.f4p],y.L)
C.d7_=x(["Bearish","Bullish","Sideways"],y.s)
C.b3o=new D.cC("Higher highs and higher lows means...",C.d7_,1,"Climbing stairs = uptrend = bullish.")
C.db1=x(["Work best","Often fail","Are always right"],y.s)
C.b3h=new D.cC("In a sideways market, signals...",C.db1,1,"With no direction, signals flip back and forth.")
C.dzg=x([C.b3o,C.b3h],y.r)
C.hNK=new D.uv("trend","Trends: up, down, sideways","Bullish, bearish and how to tell",5,B.nf,B.cf,"trend",C.d8T,C.dzg)
C.fb6=new A.y("What an average line is","A moving average is the average closing price of the last few candles, drawn as a smooth line. It hides the small wiggles so you can see the real direction.")
C.eQr=new A.y("Fast line (pink)","The average of the last 9 candles, about 45 minutes. It reacts quickly to new moves.")
C.eS3=new A.y("Slow line (purple)","The average of the last 21 candles, about 1 hour 45 minutes. It moves slowly and shows the bigger direction.")
C.f2F=new A.y("How to read them","Fast line ABOVE slow line: recent prices are higher than older ones, the trend is up. Fast line BELOW: the trend is down. When the price itself is above both lines, buyers are strong.")
C.dsA=x([C.fb6,C.eQr,C.eS3,C.f2F],y.L)
C.dIa=x(["45 minutes","1 day","1 week"],y.s)
C.b3q=new D.cC("The pink fast line averages about...",C.dIa,0,"9 candles x 5 minutes = 45 minutes.")
C.dDH=x(["Trend is up","Trend is down","Market closed"],y.s)
C.b3j=new D.cC("Fast line above slow line means...",C.dDH,0,"Recent prices are higher than older prices.")
C.dom=x([C.b3q,C.b3j],y.r)
C.hNL=new D.uv("ma","Moving averages","The pink fast line and the purple slow line",6,K.xl,B.bB,"ma",C.dsA,C.dom)
C.f2O=new A.y("Buy signal","When the fast line crosses UP through the slow line, the short-term trend has just turned up. That moment is the buy signal. The agent buys at that point ($100: one SPY call option on weekdays, Bitcoin on weekends), but only if the big trend is rising too.")
C.f_J=new A.y("Sell signal","When the fast line crosses back DOWN through the slow line, the up move is over. That is the sell signal, and the agent closes the trade.")
C.f4A=new A.y("Why it must be fresh","If the cross happened an hour ago, the easy part of the move may be gone. Buying late means buying high. So the agent only acts on a cross that happened since its last check, never on an old one.")
C.f6y=new A.y("The weakness","In sideways markets the lines cross back and forth and give false signals. That is why every trade also has a stop loss: when a signal is wrong, the loss stays small.")
C.cGm=x([C.f2O,C.f_J,C.f4A,C.f6y],y.L)
C.duN=x(["Crosses above the slow line","Crosses below the slow line","Is flat"],y.s)
C.b3i=new D.cC("The buy signal is when the fast line...",C.duN,0,"Crossing up = trend turning up.")
C.dH5=x(["To avoid buying late","The app is slow","Old crosses are illegal"],y.s)
C.b3a=new D.cC("Why does the agent skip old crosses?",C.dH5,0,"A late entry means buying after most of the move.")
C.d5c=x([C.b3i,C.b3a],y.r)
C.hNS=new D.uv("cross","The crossover signal","Exactly when the agent buys and sells",6,B.arp,B.b2,"cross",C.cGm,C.d5c)
C.bVX=new A.a_(983477,"MaterialIcons",!1)
C.f48=new A.y("What RSI measures","RSI (Relative Strength Index) compares the size of recent rises with recent falls and gives a number from 0 to 100. Above 50, rises have been bigger. Below 50, falls have been bigger.")
C.eUf=new A.y("Above 70: stretched","The price rose very fast. It is called overbought. It often pauses or pulls back, so buying right then is risky. It can still keep rising in a strong trend.")
C.f4f=new A.y("Below 30: oversold","The price fell very fast. It often bounces, but in a strong downtrend it can stay low. Oversold is not a reason to buy on its own.")
C.f3o=new A.y("How to use it","Use RSI as a second opinion. A buy signal with RSI between 50 and 70 is healthy. A buy signal with RSI above 75 means the move may already be tired.")
C.d5B=x([C.f48,C.eUf,C.f4f,C.f3o],y.L)
C.dh2=x(["Oversold","Overbought","Neutral"],y.s)
C.b39=new D.cC("RSI above 70 is called...",C.dh2,1,"It rose fast and is stretched.")
C.b3m=new D.cC("RSI below 30 always means buy.",L.Ta,1,"Falling markets can stay oversold. It is a hint, not a signal.")
C.dI2=x([C.b39,C.b3m],y.r)
C.hNQ=new D.uv("rsi","RSI: momentum","Is the move strong, stretched or tired?",5,C.bVX,B.cC,"rsi",C.d5B,C.dI2)
C.eVG=new A.y("Decide the exit before you enter","Every agent trade has two exits set before it starts, in dollars: take profit when the trade is up $50, stop loss when it is down $50.")
C.eYQ=new A.y("Win the same as you risk","The win (+$50) is the same size as the loss (-$50). So every win cancels one loss: winning 5 out of 10 trades breaks even. More than 5 out of 10 is profit, fewer is a loss. The win rate on the agent screen shows which side it is on.")
C.eLm=new A.y("Size matters most","The agent uses $100 per trade even though the paper account has $100,000. Small trades mean no single mistake can hurt much. Pros rarely risk more than 1 to 2 percent of their money on one trade.")
C.f0Z=new A.y("Never move the stop","The biggest beginner mistake is hoping a losing trade comes back and moving the stop lower. Small losses are the cost of doing business. Big losses end accounts.")
C.dC6=x([C.eVG,C.eYQ,C.eLm,C.f0Z],y.L)
C.csG=x(["5 in 10 trades","9 in 10 trades","Every trade"],y.s)
C.b3f=new D.cC("With +$50 wins and -$50 losses, to break even you must win about...",C.csG,0,"Each win (+50) cancels one loss (-50).")
C.dfz=x(["Move the stop lower","Let the stop loss work","Buy more"],y.s)
C.b3d=new D.cC("A trade is losing. The best move is...",C.dfz,1,"The stop exists to keep losses small.")
C.dlg=x([C.b3f,C.b3d],y.r)
C.hNJ=new D.uv("risk","Risk: stop loss and take profit","Why small losses beat big wins",7,B.rg,C.ey,"risk",C.dC6,C.dlg)
C.bWw=new A.a_(983848,"MaterialIcons",!1)
C.eUR=new A.y("Bad days happen","Some days every signal fails. The danger is trying to win it back by trading more and bigger. That is called revenge trading and it is how small losses become big ones.")
C.f03=new A.y("Daily stop: $50","If the day loses $50, the agent makes no more buys until tomorrow. It walks away and lets the market calm down.")
C.f7e=new A.y("Total brake: $100","If total losses reach $100, the agent pauses completely until you review what happened and turn it back on. Reviewing is the most important part of learning.")
C.eTf=new A.y("Your own rules","When you trade yourself, set the same kind of limits before the day starts, and keep them even when it hurts.")
C.dhu=x([C.eUR,C.f03,C.f7e,C.eTf],y.L)
C.dkd=x(["Doubles the next trade","Stops buying for the day","Sells everything forever"],y.s)
C.b3e=new D.cC("After losing $50 in a day, the agent...",C.dkd,1,"The daily stop prevents revenge trading.")
C.dhc=x([C.b3e],y.r)
C.hNM=new D.uv("brakes","Daily stop and total brake","Protecting your account from bad days",4,C.bWw,E.jS,"brakes",C.dhu,C.dhc)
C.aj6=new A.u(1,0.3843137254901961,0.49411764705882355,0.9176470588235294,B.q)
C.eZO=new A.y("Stocks and funds","SPY, QQQ, Apple, Microsoft, Nvidia, Tesla and Amazon trade on US market days from 9:30 AM to 4:00 PM Eastern Time. Closed at night, on weekends and on holidays.")
C.f_G=new A.y("Overnight gaps","News can come out while the stock market is closed, so the next morning it can open far higher or lower. That is why the agent sells stocks by 3:55 PM and never holds them overnight.")
C.eXL=new A.y("Crypto","Bitcoin, Ethereum and Solana trade all day, every day, including weekends. More hours means more chances, but crypto also moves faster and harder, so stops get hit more often.")
C.f60=new A.y("Funds vs single companies","SPY holds the 500 biggest US companies and QQQ holds 100 big tech companies, so they move more calmly. One company like Tesla can jump a lot on its own news.")
C.cTm=x([C.eZO,C.f_G,C.eXL,C.f60],y.L)
C.d8S=x(["Only weekdays","All day, every day","Only at night"],y.s)
C.b3l=new D.cC("When can Bitcoin be traded?",C.d8S,1,"Crypto never closes.")
C.d5Q=x(["To avoid overnight gaps","Stocks expire","It is the law"],y.s)
C.b3b=new D.cC("Why sell stocks before the close?",C.d5Q,0,"Overnight news can make the price jump at the open.")
C.dpo=x([C.b3l,C.b3b],y.r)
C.hNP=new D.uv("hours","Stocks vs crypto","Market hours, weekends and jumpiness",5,B.jY,C.aj6,"hours",C.cTm,C.dpo)
C.f4B=new A.y("Judge many trades, not one","One trade tells you nothing. Luck decides single trades. After 20 to 50 trades you start to see if a method really works. That is why the plan is 2 to 4 weeks of paper trading.")
C.ePM=new A.y("Keep a journal","For each trade write: why you bought, where your stop and target were, what happened, and what you learned. The Pretend trades list on the main screen is the agent's journal.")
C.eQk=new A.y("Follow the rules exactly","The point of the agent is to follow rules perfectly, with no fear and no greed. Check that it did. If it ever breaks a rule, that is a bug to fix before real money.")
C.eXM=new A.y("Before real money","Real money comes only after a long paper test with a positive result, a full review, and money you can truly afford to lose. Never borrow to trade.")
C.dxU=x([C.f4B,C.ePM,C.eQk,C.eXM],y.L)
C.dEC=x(["1","3","20 or more"],y.s)
C.b38=new D.cC("How many trades before judging a method?",C.dEC,2,"Small samples are mostly luck.")
C.dHA=x(["Borrowed","Money you can afford to lose","Rent money"],y.s)
C.b3g=new D.cC("Money for trading should be...",C.dHA,1,"Never trade money you need.")
C.dHY=x([C.b38,C.b3g],y.r)
C.hNO=new D.uv("practice","Practising like a pro","Journals, patience and judging results",5,B.m0,B.bj,"practice",C.dxU,C.dHY)
C.Eg=x([C.hNN,C.hNR,C.hNK,C.hNL,C.hNS,C.hNQ,C.hNJ,C.hNM,C.hNP,C.hNO],A.ar("N<uv>"))
C.euj={basics:0,candles:1,trend:2,ma:3,cross:4,rsi:5,risk:6,brakes:7,hours:8,practice:9}
C.dbD=x(["A $4 profit","A $4 loss","Nothing"],y.s)
C.hRP=new D.cC("You buy at $100 and sell at $96. What happened?",C.dbD,1,"Selling lower than you bought is a loss.")
C.duL=x(["The future price","How the price moved over time","Who is buying"],y.s)
C.hRN=new D.cC("What does a price chart show?",C.duL,1,"A chart is a record of past prices.")
C.dGg=x(["Yes, experts can","Yes, an AI can","No, nobody can"],y.s)
C.hRW=new D.cC("Can anyone know for sure where a price goes next?",C.dGg,2,"Markets are uncertain; rules and stops manage that.")
C.ddE=x(["Trading with real prices and pretend money","Trading newspapers","Trading on paper forms"],y.s)
C.hSp=new D.cC("What is paper trading?",C.ddE,0,"Real prices, fake dollars: practice without risk.")
C.dxX=x(["It is faster","To learn without risking real money","Pretend money earns more"],y.s)
C.hRS=new D.cC("Why practise with pretend money first?",C.dxX,1,"Mistakes cost nothing while you learn.")
C.csA=x(["Rise","Fall","Stay frozen"],y.s)
C.hRX=new D.cC("More people want to sell than buy. The price will most likely...",C.csA,1,"Selling pressure pushes prices down.")
C.dgR=x(["Clear rules and small losses","Lucky guesses","Tips from friends"],y.s)
C.hTs=new D.cC("Good traders mostly rely on...",C.dgR,0,"Rules and risk control beat guessing.")
C.ceJ=x(["$45","$55","$60"],y.s)
C.hSW=new D.cC("You buy $50 of something and it rises 10%. It is now worth...",C.ceJ,1,"10% of $50 is $5, so $55.")
C.cY3=x(["Buy","Sell","Look at the chart"],y.s)
C.hSe=new D.cC("A trade is only finished when you...",C.cY3,1,"Until you sell, a gain or loss is not locked in.")
C.dFu=x(["Good traders never lose","Every trader has losing trades","Losses only happen to beginners"],y.s)
C.hS9=new D.cC("Which is true about losses?",C.dFu,1,"Losing trades are normal; keeping them small is the skill.")
C.cQX=x(["Real dollars are spent","No real money is at risk","It trades in secret"],y.s)
C.hT3=new D.cC("The agent uses Alpaca paper money. That means...",C.cQX,1,"Paper accounts use fake dollars.")
C.dqr=x(["The government","Buyers and sellers agreeing","The app makers"],y.s)
C.hRM=new D.cC("A price is set by...",C.dqr,1,"Each trade is a buyer and seller agreeing on a price.")
C.ded=x([C.b3p,C.b3k,C.hRP,C.hRN,C.hRW,C.hSp,C.hRS,C.hRX,C.hTs,C.hSW,C.hSe,C.hS9,C.hT3,C.hRM],y.r)
C.dav=x(["It closed lower than it opened","It closed higher","Nothing traded"],y.s)
C.hTd=new D.cC("A yellow (or red) candle means...",C.dav,0,"Sellers won that time slice.")
C.deQ=x(["Wick","Body","Tail light"],y.s)
C.hRZ=new D.cC("The thick part of a candle is called the...",C.deQ,1,"The body runs from open to close.")
C.dnp=x(["Wicks","Bodies","Averages"],y.s)
C.hSK=new D.cC("The thin lines above and below are the...",C.dnp,0,"Wicks show the high and the low.")
C.deh=x(["Open","Close","Highest price"],y.s)
C.hT5=new D.cC("The top of the upper wick shows the...",C.deh,2,"The tip of the upper wick is the high.")
C.dIp=x(["Lowest price","Open","Average"],y.s)
C.hTm=new D.cC("The bottom of the lower wick shows the...",C.dIp,0,"The tip of the lower wick is the low.")
C.dgZ=x(["One","Two","Four"],y.s)
C.hSX=new D.cC("How many prices does one candle show?",C.dgZ,2,"Open, high, low and close.")
C.dsl=x(["Buyers pushed up but sellers pushed it back down","The price never moved","The market closed early"],y.s)
C.hSZ=new D.cC("A long upper wick means...",C.dsl,0,"The price went high, then fell back before the close.")
C.d5l=x(["Sellers in control","Buyers in control","No direction"],y.s)
C.hSG=new D.cC("Many green candles in a row, each closing higher, show...",C.d5l,1,"Rising closes mean buyers are winning.")
C.d51=x(["A strong uptrend","The market is undecided","A crash"],y.s)
C.hTb=new D.cC("Candles going up and down with no direction mean...",C.d51,1,"Mixed candles show indecision.")
C.daT=x(["Green","Yellow","Grey"],y.s)
C.hSV=new D.cC("A candle opened at 10 and closed at 12. Its colour here is...",C.daT,0,"It closed above the open.")
C.dJ0=x(["5 candles","12 candles","60 candles"],y.s)
C.hS0=new D.cC("In 1 hour of 5-minute candles there are...",C.dJ0,1,"60 minutes divided by 5 is 12.")
C.dr5=x(["The first price in that time","The last price in that time","The highest price"],y.s)
C.hTu=new D.cC('The "close" of a candle is...',C.dr5,1,"Close is where the price ended.")
C.dy9=x([C.b3n,C.b3c,C.hTd,C.hRZ,C.hSK,C.hT5,C.hTm,C.hSX,C.hSZ,C.hSG,C.hTb,C.hSV,C.hS0,C.hTu],y.r)
C.d7e=x(["Bullish","Bearish","Sideways"],y.s)
C.hT7=new D.cC("Lower highs and lower lows means...",C.d7e,1,"Walking down stairs = downtrend = bearish.")
C.dmQ=x(["Rise","Fall","Stay the same"],y.s)
C.hTz=new D.cC('"Bullish" means you expect prices to...',C.dmQ,0,"A bull attacks upward.")
C.djk=x(["Rise","Fall","Double"],y.s)
C.hTx=new D.cC('"Bearish" means you expect prices to...',C.djk,1,"A bear swipes downward.")
C.dn_=x(["Trade against the trend","Trade with the trend","Ignore the trend"],y.s)
C.hSO=new D.cC("The golden rule of trends is...",C.dn_,1,"Going with the trend wins more often.")
C.d8G=x(["A safe plan","A common beginner mistake","What the agent does"],y.s)
C.hTg=new D.cC("Buying in a downtrend because it looks cheap is...",C.d8G,1,"Cheap can get cheaper.")
C.djO=x(["Sideways","Bullish","Bearish"],y.s)
C.hSi=new D.cC("A price bouncing between a ceiling and a floor is...",C.djO,0,"No higher highs or lower lows: sideways.")
C.dBp=x(["Trade a lot","Wait","Borrow money"],y.s)
C.hSx=new D.cC("In a sideways market the best move is often to...",C.dBp,1,"Patience avoids false signals.")
C.dlE=x(["Up","Down","Flat"],y.s)
C.hSA=new D.cC("When sellers are in control, the trend is...",C.dlE,1,"Sellers push prices down.")
C.dlB=x(["Stairs going up","Stairs going down","A flat road"],y.s)
C.hRO=new D.cC("Which picture fits an uptrend?",C.dlB,0,"Each step a bit higher.")
C.dBb=x(["Turns down","Turns up","Is sideways"],y.s)
C.hST=new D.cC("The agent only buys when the trend...",C.dBb,1,"It buys the start of up moves.")
C.dzz=x(["Getting lower","Getting higher","Gone"],y.s)
C.hS4=new D.cC("A trend changes from bearish to bullish. Lows are now...",C.dzz,1,"Higher lows are the first sign of an uptrend.")
C.dqP=x(["Strong uptrend","Strong downtrend","Sideways"],y.s)
C.hT1=new D.cC("Most trading signals fail in which market?",C.dqP,2,"Without direction, signals flip constantly.")
C.d8E=x([C.b3o,C.b3h,C.hT7,C.hTz,C.hTx,C.hSO,C.hTg,C.hSi,C.hSx,C.hSA,C.hRO,C.hST,C.hS4,C.hT1],y.r)
C.dgQ=x(["The average closing price of recent candles","The highest price ever","A news feed"],y.s)
C.hTn=new D.cC("A moving average is...",C.dgQ,0,"It smooths prices into a line.")
C.dGV=x(["To hide small wiggles and show direction","To predict news","To make charts colourful"],y.s)
C.hTo=new D.cC("Why use a moving average?",C.dGV,0,"It filters noise.")
C.ddk=x(["9","21","100"],y.s)
C.hSL=new D.cC("The purple slow line averages how many candles?",C.ddk,1,"21 candles, about 1 hour 45 minutes.")
C.dra=x(["The fast (pink) line","The slow (purple) line","Both the same"],y.s)
C.hSN=new D.cC("Which line reacts faster to new moves?",C.dra,0,"Fewer candles means quicker reaction.")
C.dHa=x(["Trend is up","Trend is down","Buy now"],y.s)
C.hSy=new D.cC("Fast line below slow line means...",C.dHa,1,"Recent prices are lower than older ones.")
C.d9g=x(["Buyers are strong","Sellers are strong","Nothing"],y.s)
C.hRR=new D.cC("The price is above both lines. That shows...",C.d9g,0,"Price above its averages = strength.")
C.d5a=x(["The bigger direction","Only the last candle","Tomorrow price"],y.s)
C.hT6=new D.cC("The slow line shows...",C.d5a,0,"It changes slowly and shows the wider trend.")
C.d1v=x(["15 minutes","1 hour 45 minutes","1 week"],y.s)
C.hS8=new D.cC("The slow line covers about...",C.d1v,1,"21 x 5 minutes = 105 minutes.")
C.cog=x(["Past prices","Future prices","Opinions"],y.s)
C.hTc=new D.cC("Moving averages are based on...",C.cog,0,"They average prices that already happened.")
C.d5z=x(["Lag behind the price","Lead the price","Never move"],y.s)
C.hTp=new D.cC("Because they use past prices, moving averages...",C.d5z,0,"Averages are always a little late.")
C.dq4=x(["A bullish picture","A bearish picture","A closed market"],y.s)
C.hSz=new D.cC("Both lines pointing up and the price above them is...",C.dq4,0,"Everything points up.")
C.dfy=x(["Trending strongly","Sideways","Crashing"],y.s)
C.hTy=new D.cC("When the two lines are tangled together, the market is often...",C.dfy,1,"Tangled lines mean no clear direction.")
C.dAX=x([C.b3q,C.b3j,C.hTn,C.hTo,C.hSL,C.hSN,C.hSy,C.hRR,C.hT6,C.hS8,C.hTc,C.hTp,C.hSz,C.hTy],y.r)
C.dgO=x(["Crosses below the slow line","Crosses above the slow line","Touches the price"],y.s)
C.hRL=new D.cC("The sell signal is when the fast line...",C.dgO,0,"Crossing down = the up move is over.")
C.dGd=x(["About $100","$5,000","All the money"],y.s)
C.hSB=new D.cC("How much does the agent put into one trade?",C.dGd,0,"Every pretend trade is about $100: one SPY call option (up to $120) on weekdays, $100 of Bitcoin on weekends.")
C.dAQ=x(["A fresh signal","An old signal","Not a signal at all ever"],y.s)
C.hTh=new D.cC("A cross that happened an hour ago is...",C.dAQ,1,"Fresh means since the last check.")
C.csJ=x(["Sideways markets","Strong trends","Closed markets"],y.s)
C.hTl=new D.cC("Crossovers give many false signals in...",C.csJ,0,"Lines cross back and forth with no direction.")
C.dpd=x(["The stop loss","Buying more","Ignoring it"],y.s)
C.hS7=new D.cC("What protects you when a signal is wrong?",C.dpd,0,"The stop keeps the loss small.")
C.dj5=x(["Just changed direction","Ended forever","Doubled"],y.s)
C.hTv=new D.cC("The crossover tells you the short-term trend has...",C.dj5,0,"A cross marks a turn.")
C.ddp=x(["1 second","15 minutes","1 day"],y.s)
C.hRY=new D.cC("The agent checks for crosses every...",C.ddp,1,"The automatic check runs every 15 minutes.")
C.d6D=x(["Buying higher, with less room to rise","A guaranteed win","A cheaper price"],y.s)
C.hS1=new D.cC("Buying late in a move usually means...",C.d6D,0,"Most of the move is already gone.")
C.dui=x(["Trust it more","Trust it less","Bet bigger"],y.s)
C.hTf=new D.cC("If a signal fails often on one market, you should...",C.dui,1,"Check how often it worked before trusting it.")
C.d6x=x(["Buys more","Sells","Waits a week"],y.s)
C.hSY=new D.cC("When the agent holds a trade and the fast line crosses down, it...",C.d6x,1,"The sell signal closes the trade.")
C.cNS=x(["Yes","No","Only on Fridays"],y.s)
C.hSD=new D.cC("Does a buy signal guarantee the price will rise?",C.cNS,1,"Signals improve the odds; they never guarantee.")
C.da7=x(["Holds no other position","Already holds three","Has lost $100"],y.s)
C.hTE=new D.cC("The agent buys on a signal only if it...",C.da7,0,"One position at a time.")
C.dA9=x([C.b3i,C.b3a,C.hRL,C.hSB,C.hTh,C.hTl,C.hS7,C.hTv,C.hRY,C.hS1,C.hTf,C.hSY,C.hSD,C.hTE],y.r)
C.dlq=x(["0 to 100","1 to 10","-50 to 50"],y.s)
C.hTj=new D.cC("RSI is a number from...",C.dlq,0,"It always sits between 0 and 100.")
C.dwl=x(["Rises were bigger than falls","Falls were bigger than rises","Nothing moved"],y.s)
C.hSv=new D.cC("RSI above 50 means recent...",C.dwl,0,"Above 50 = buyers stronger lately.")
C.dh1=x(["Overbought","Oversold","Balanced"],y.s)
C.hSF=new D.cC("RSI below 30 is called...",C.dh1,1,"It fell fast and is stretched downward.")
C.dtY=x(["Momentum: strength of recent moves","The company profit","Trading volume"],y.s)
C.hSQ=new D.cC("RSI measures...",C.dtY,0,"It compares gains with losses.")
C.d6k=x(["Healthy","Very stretched","Impossible"],y.s)
C.hSg=new D.cC("A buy signal with RSI 60 is...",C.d6k,0,"Between 50 and 70 is healthy strength.")
C.de_=x(["Just starting","Tired and stretched","Guaranteed"],y.s)
C.hRT=new D.cC("A buy signal with RSI 80 means the move may be...",C.de_,1,"Very high RSI often comes before a pause.")
C.dl4=x(["As a second opinion","As the only reason to trade","Never"],y.s)
C.hSn=new D.cC("Best way to use RSI?",C.dl4,0,"Combine it with the trend signal.")
C.dvA=x(["For a while","Never","Only one candle"],y.s)
C.hSP=new D.cC("In a strong uptrend, RSI can stay above 70...",C.dvA,0,"Strong trends can stay overbought.")
C.dqf=x(["Balanced buyers and sellers","Market closed","Crash coming"],y.s)
C.hSR=new D.cC("RSI of 50 means...",C.dqf,0,"50 is the middle.")
C.d9e=x(["Rose very fast","Fell very fast","Did not move"],y.s)
C.hTq=new D.cC("Overbought means prices...",C.d9e,0,"Overbought = rose fast.")
C.cQ2=x(["Stay oversold and keep falling","Only go up","Freeze the market"],y.s)
C.hSq=new D.cC("Oversold in a strong downtrend can...",C.cQ2,0,"Oversold is not a reason to buy on its own.")
C.cM8=x(["Sellers a little stronger","Extreme buying","Extreme selling"],y.s)
C.hSH=new D.cC("RSI 45 suggests...",C.cM8,0,"Just below 50: sellers slightly ahead.")
C.dl2=x([C.b39,C.b3m,C.hTj,C.hSv,C.hSF,C.hSQ,C.hSg,C.hRT,C.hSn,C.hSP,C.hSR,C.hTq,C.hSq,C.hSH],y.r)
C.dIf=x(["When the trade is up $50","When the trade is up $5","Never"],y.s)
C.hTr=new D.cC("The agent take profit is...",C.dIf,0,"It sells when the trade is up $50.")
C.dAt=x(["When the trade is down $50","When the trade is down $500","It has none"],y.s)
C.hT8=new D.cC("The agent stop loss is...",C.dAt,0,"It sells when the trade is down $50.")
C.doV=x(["A planned exit that limits a loss","A way to stop the app","A bonus"],y.s)
C.hS6=new D.cC("A stop loss is...",C.doV,0,"It sells automatically when the loss reaches a set size.")
C.dew=x(["Before entering the trade","After it goes wrong","Never"],y.s)
C.hSf=new D.cC("When should you decide your exits?",C.dew,0,"Plan exits first, while calm.")
C.dkQ=x(["So no single mistake hurts much","It is the maximum allowed","To lose faster"],y.s)
C.hSo=new D.cC("Why does the agent use only about $100 per trade?",C.dkQ,0,"Small size protects the account.")
C.dHU=x(["1 to 2 percent","50 percent","100 percent"],y.s)
C.hT2=new D.cC("Pros rarely risk more than about ... of their money on one trade.",C.dHU,0,"Small risk per trade keeps them in the game.")
C.diG=x(["$0","+$100","-$100"],y.s)
C.hTe=new D.cC("Win $50 twice and lose $50 twice. Your total is...",C.diG,0,"50 + 50 - 50 - 50 = 0.")
C.dsU=x(["Profitable","Break even","A loss"],y.s)
C.hT9=new D.cC("Winning half the time with 2 to 1 reward to risk is...",C.dsU,0,"Each win is twice each loss.")
C.deE=x(["Turns small losses into big ones","Guarantees a win","Has no effect"],y.s)
C.hSu=new D.cC('Moving your stop lower to "give it room" usually...',C.deE,0,"Hope is not a plan.")
C.d7n=x(["1 to 1","1 to 2","10 to 1"],y.s)
C.hSC=new D.cC("Reward to risk of the agent is...",C.d7n,0,"$50 target vs $50 stop: the same size.")
C.csc=x(["Can end an account","Are rare","Do not matter"],y.s)
C.hTC=new D.cC("Big losses are dangerous because they...",C.csc,0,"A 50% loss needs a 100% gain to recover.")
C.cVt=x(["Selling when the planned gain is reached","Buying more","Holding forever"],y.s)
C.hSm=new D.cC("Take profit means...",C.cVt,0,"It locks in the win.")
C.dcQ=x([C.b3f,C.b3d,C.hTr,C.hT8,C.hS6,C.hSf,C.hSo,C.hT2,C.hTe,C.hT9,C.hSu,C.hSC,C.hTC,C.hSm],y.r)
C.dwr=x(["Trading more to win losses back","Taking a break","Following rules"],y.s)
C.hSM=new D.cC("Revenge trading means...",C.dwr,0,"It usually makes losses bigger.")
C.d74=x(["$100 total losses","$25 total losses","Never"],y.s)
C.hSh=new D.cC("The total brake pauses the agent at...",C.d74,0,"$100 total demo losses.")
C.d6E=x(["An admin, after a review","It turns itself on","Nobody ever"],y.s)
C.hSI=new D.cC("Who turns the agent back on after the $100 brake?",C.d6E,0,"A human review comes first.")
C.ceK=x(["$50","$1","$500"],y.s)
C.hS_=new D.cC("The daily stop is...",C.ceK,0,"If the day loses $50, no more buys.")
C.d1B=x(["Stop and reset","Trade bigger","Ignore your limits"],y.s)
C.hTk=new D.cC("Bad days happen. The best response is...",C.d1B,0,"Walking away protects your money.")
C.dnC=x(["Before the day starts","After you lose","Only on weekends"],y.s)
C.hRU=new D.cC("Limits should be set...",C.dnC,0,"Decide limits while calm.")
C.dCM=x(["Reviewing what happened","Forgetting it","Blaming the market"],y.s)
C.hSw=new D.cC("The most important part of learning after a bad run is...",C.dCM,0,"Reviews turn losses into lessons.")
C.cQt=x(["Yes, exits still work","No, it freezes","It buys more instead"],y.s)
C.hT_=new D.cC("After the daily stop, can the agent still sell an open trade?",C.cQt,0,"The stop blocks new buys, not exits.")
C.dHq=x(["Protect the account from bad days","Make more trades","Win every day"],y.s)
C.hSU=new D.cC("Brakes are there to...",C.dHq,0,"They cap the damage.")
C.d8H=x(["Stop trading and rethink","Raise the limits","Borrow money"],y.s)
C.hSs=new D.cC("If you keep breaking your own limits, you should...",C.d8H,0,"Rules only work when kept.")
C.dzG=x(["The next day","Never","Every minute"],y.s)
C.hT0=new D.cC("The daily stop resets...",C.dzG,0,"A new Eastern Time day starts fresh.")
C.dmC=x(["Can lose everything on a bad day","Always wins","Pays no fees"],y.s)
C.hS2=new D.cC("A trader with no loss limits...",C.dmC,0,"Limits are the safety net.")
C.dG4=x(["Pause","Trade faster","Bet bigger"],y.s)
C.hRQ=new D.cC("Feeling angry after a loss is a sign to...",C.dG4,0,"Emotions lead to bad trades.")
C.d90=x([C.b3e,C.hSM,C.hSh,C.hSI,C.hS_,C.hTk,C.hRU,C.hSw,C.hT_,C.hSU,C.hSs,C.hT0,C.hS2,C.hRQ],y.r)
C.daU=x(["9:30 AM to 4:00 PM Eastern","24 hours","8 PM to midnight"],y.s)
C.hSa=new D.cC("US stock market hours are...",C.daU,0,"On market days only.")
C.hS3=new D.cC("Is the US stock market open on Saturday?",Y.a77,1,"Weekends are closed.")
C.dFE=x(["A jump between the close and the next open","A break in the chart software","A holiday"],y.s)
C.hSS=new D.cC("An overnight gap is...",C.dFE,0,"News while closed moves the next open.")
C.d1A=x(["Faster and harder","Slower","Exactly the same"],y.s)
C.hSt=new D.cC("Crypto compared with SPY usually moves...",C.d1A,0,"Crypto is more jumpy.")
C.duI=x(["The 500 biggest US companies","One company","Bitcoin"],y.s)
C.hTA=new D.cC("SPY holds...",C.duI,0,"It is a fund of 500 companies.")
C.dIZ=x(["They spread over many companies","They are closed","They are crypto"],y.s)
C.hRK=new D.cC("Why do funds like SPY move more calmly?",C.dIZ,0,"One bad company matters less.")
C.dAT=x(["3:55 PM Eastern","Midnight","Noon"],y.s)
C.hTt=new D.cC("The agent sells stocks by...",C.dAT,0,"Before the 4:00 PM close.")
C.d8I=x(["Sunday 5 PM to Friday 5 PM Eastern","Only 9:30 to 4","Only weekends"],y.s)
C.hSb=new D.cC("Forex (currency pairs) trades...",C.d8I,0,"Real forex is closed on weekends.")
C.de0=x(["The broker itself","The real world market","The government"],y.s)
C.hSl=new D.cC("OTC prices at a broker on weekends come from...",C.de0,0,"They are made by the broker and can differ.")
C.dwH=x(["Do not trade","Trade double","Trade at night"],y.s)
C.hSJ=new D.cC("On a US market holiday, stocks...",C.dwH,0,"Holidays are closed days.")
C.cf2=x(["More often","Never","Less often"],y.s)
C.hTw=new D.cC("Because crypto moves fast, stop losses are hit...",C.cf2,0,"Bigger swings reach stops sooner.")
C.dAS=x(["Its own news","Weekend rules","The colour of candles"],y.s)
C.hTi=new D.cC("One company like Tesla can jump a lot because of...",C.dAS,0,"Single stocks react to company news.")
C.dr1=x([C.b3l,C.b3b,C.hSa,C.hS3,C.hSS,C.hSt,C.hTA,C.hRK,C.hTt,C.hSb,C.hSl,C.hSJ,C.hTw,C.hTi],y.r)
C.dfH=x(["Why you entered, your exits and what happened","Only wins","Nothing"],y.s)
C.hSd=new D.cC("A trading journal records...",C.dfH,0,"It shows what really works.")
C.hSE=new D.cC("One winning trade proves a method works.",L.Ta,1,"One trade can be pure luck.")
C.dk_=x(["2 to 4 weeks","1 hour","1 day"],y.s)
C.hRV=new D.cC("The plan is to paper trade for...",C.dk_,0,"Enough time for many trades.")
C.dog=x(["A bug to fix before real money","Fine","A bonus"],y.s)
C.hS5=new D.cC("If the agent ever breaks a rule, that is...",C.dog,0,"Rules must be followed exactly.")
C.dtb=x(["A long positive paper test and a full review","One good day","A tip from a friend"],y.s)
C.hTB=new D.cC("Before using real money you need...",C.dtb,0,"Evidence first.")
C.dap=x(["Worse than a coin flip","Excellent","Guaranteed"],y.s)
C.hTa=new D.cC("Signals that worked under 50% of the time are...",C.dap,0,"Do not trust them.")
C.d5K=x(["Never a good idea for beginners","Smart","Required"],y.s)
C.hT4=new D.cC("Borrowing money to trade is...",C.d5K,0,"Borrowed losses still have to be paid.")
C.dcl=x(["The agent journal","An advert","A game"],y.s)
C.hSk=new D.cC("The Pretend trades list on the main screen is...",C.dcl,0,"Every buy and sell is recorded.")
C.dpw=x(["No fear and no greed","Lots of emotion","Random choices"],y.s)
C.hSr=new D.cC("The point of an agent is to follow rules with...",C.dpw,0,"Discipline is its strength.")
C.cU0=x(["+$100","-$100","$0"],y.s)
C.hTD=new D.cC("After 10 trades you have 6 wins at +$50 and 4 losses at -$50. Total?",C.cU0,0,"6 x 50 = 300; 4 x 50 = 200; 300 - 200 = +100.")
C.cYp=x(["Review the trades calmly","Quit forever without looking","Double the size"],y.s)
C.hSc=new D.cC("A losing week means you should...",C.cYp,0,"Reviews find what to fix.")
C.dEl=x(["Patient and disciplined","Lucky","Fast clickers"],y.s)
C.hSj=new D.cC("The best traders are mostly...",C.dEl,0,"Patience and rules win over time.")
C.d9b=x([C.b38,C.b3g,C.hSd,C.hSE,C.hRV,C.hS5,C.hTB,C.hTa,C.hT4,C.hSk,C.hSr,C.hTD,C.hSc,C.hSj],y.r)
C.dLj=new A.bl(C.euj,[C.ded,C.dy9,C.d8E,C.dAX,C.dA9,C.dl2,C.dcQ,C.d90,C.dr1,C.d9b],A.ar("bl<m,ai<cC>>"))
C.ewk={EUR:0,USD:1,GBP:2,JPY:3,CAD:4,AUD:5,NZD:6,CHF:7,TRY:8,NOK:9,THB:10}
C.f9S=new A.y("\u20ac",B.dU)
C.faK=new A.y("$",B.er)
C.eQs=new A.y("\xa3",B.dg)
C.eZS=new A.y("\xa5",B.bE)
C.eXN=new A.y("C$",B.hG)
C.f_h=new A.y("A$",B.cU)
C.ePL=new A.y("NZ",B.aw)
C.f34=new A.y("Fr",B.es)
C.f81=new A.y("TL",B.fK)
C.f76=new A.y("kr",B.fV)
C.eUi=new A.y("TH",B.wE)
C.a8t=new A.bl(C.ewk,[C.f9S,C.faK,C.eQs,C.eZS,C.eXN,C.f_h,C.ePL,C.f34,C.f81,C.f76,C.eUi],A.ar("bl<m,+(m,u)>"))
C.c0l=new A.ae(B.r7,5,B.b2,null,null,null)
C.eCT=new A.D(B.hJ,C.c0l,null)
C.fcu=new A.b3(1,"Live signals",C.ash)
C.fcC=new A.b3(E.jS,C.asw,"Moving sideways")
C.fdb=new A.b3(2,"Ask tutor",B.xd)
C.fdt=new A.b3(B.b2,B.oT,"Waiting for data")
C.fe4=new A.b3(C.dN,B.nf,"Trending up")
C.feb=new A.b3(C.ey,B.a4O,"Trending down")
C.fef=new A.b3(0,"Lessons",B.o1)
C.fiW=new A.b7([B.zZ,C.dN,"Signal alerts are ON: the market, ENTER UP or DOWN, and the duration, while NGMY is open or in the background.",null])
C.fk7=new A.b7([B.as4,E.jS,"Signal alerts are unlocked. Allow notifications so the app can tell you when to enter.","Allow"])
C.bZy=new A.ae(B.r7,8,C.dN,null,null,null)
C.fKZ=new A.H(!0,C.dN,null,null,null,null,11.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.haC=new A.C("LIVE",null,C.fKZ,null,null,null,null,null,null,null,null,null)
C.dvz=x([C.bZy,B.bf,C.haC],y.p)
C.fo8=new A.c3(B.aL,B.e,B.M,B.l,null,B.p,null,0,C.dvz,null)
C.c__=new A.ae(B.rf,14,B.c,null,null,null)
C.hhw=new A.C("Learn",null,B.nq,null,null,null,null,null,null,null,null,null)
C.daa=x([C.c__,B.d6,C.hhw],y.p)
C.fob=new A.c3(B.aL,B.e,B.M,B.l,null,B.p,null,0,C.daa,null)
C.fEZ=new A.H(!0,B.c,null,null,null,null,36,B.F,null,-0.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.fG_=new A.H(!0,B.ab,null,null,null,null,10.5,B.u,null,0.9,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.fH9=new A.H(!0,F.uH,null,null,null,null,11,B.P,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.fHv=new A.H(!0,B.ab,null,null,null,null,11.5,B.F,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.fJj=new A.H(!0,B.c,null,null,null,null,11,B.u,null,0.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.fJv=new A.H(!0,C.dN,null,null,null,null,11.5,B.P,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.fKV=new A.H(!0,C.ey,null,null,null,null,11.5,B.P,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.fOY=new A.H(!0,C.dN,null,null,null,null,12.5,B.P,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.fPY=new A.H(!0,B.c,null,null,null,null,22,B.u,null,0.8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.fV3=new A.C("Ask the tutor",null,B.ca,null,null,null,null,null,null,null,null,null)
C.aXy=new A.H(!0,C.ey,null,null,null,null,12.5,B.P,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.fVd=new A.C("Not quite. Try again.",null,C.aXy,null,null,null,null,null,null,null,null,null)
C.fWb=new A.C("Win rate ($100 trades)",null,B.LN,null,null,null,null,null,null,null,null,null)
C.fWd=new A.C("All 10 lessons done!",null,null,null,null,null,null,null,null,null,null,null)
C.fWk=new A.C("10 short lessons. Each one shows you the idea live on the real markets the agent is watching.",null,S.FD,null,null,null,null,null,null,null,null,null)
C.fXP=new A.C("Wrong. You have one more try.",null,C.aXy,null,null,null,null,null,null,null,null,null)
C.fZk=new A.C("Turn the agent back on?",null,null,null,null,null,null,null,null,null,null,null)
C.fSd=new A.H(!0,B.c,null,null,null,null,9.5,B.u,null,0.8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.h3B=new A.C("PRETEND MONEY",null,C.fSd,null,null,null,null,null,null,null,null,null)
C.h4j=new A.C("Paper balance",null,B.WM,null,null,null,null,null,null,null,null,null)
C.h82=new A.C("Signal alerts are now unlocked. When a market says ENTER UP or ENTER DOWN, the app will tell you the market, the direction and the duration. Allow notifications to receive them.",null,null,null,null,null,null,null,null,null,null,null)
C.hb7=new A.C("Allow notifications",null,null,null,null,null,null,null,null,null,null,null)
C.fNm=new A.H(!0,B.aR,null,null,null,null,10.5,null,null,null,null,null,1.25,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.hbP=new A.C("5 of 10\n= break even",null,C.fNm,null,B.e2,null,null,null,null,null,null,null)
C.he1=new A.C("Check now",null,B.ca,null,null,null,null,null,null,null,null,null)
C.heH=new A.C("Learn to trade",null,B.m8,null,null,null,null,null,null,null,null,null)
C.hha=new A.C("Turn back on",null,null,null,null,null,null,null,null,null,null,null)
C.hhA=new A.C("The $100 brake paused the agent. Turning it back on means you have reviewed it. The running demo profit and loss starts again from $0.",null,null,null,null,null,null,null,null,null,null,null)
C.hNX=new D.z3("Nvidia","N",B.Nu)
C.hNZ=new D.z3("Ethereum","\u039e",C.aj6)
C.hO1=new D.z3("S&P 500 fund","S&P",B.cf)
C.hO2=new D.z3("Bitcoin","B",F.uH)
C.hO4=new D.z3("Tesla","T",B.bE)
C.hO5=new D.z3("Microsoft","M",B.bp)
C.hO6=new D.z3("Nasdaq 100 fund","Q",B.cC)
C.bnZ=new A.u(1,0.6,0.27058823529411763,1,B.q)
C.hO8=new D.z3("Solana","S",C.bnZ)
C.hOa=new D.z3("Apple","A",B.cQ)
C.hOd=new D.z3("Amazon","a",B.au)})();(function staticFields(){$.DB=A.a([],A.ar("N<a_A>"))
$.ah9=!1
$.hkh=""
$.aLX=0
$.fnz=0})()};
(a=>{a["H7yGOt1sh7gI1FByz/eNV8RHzos="]=a.current})($__dart_deferred_initializers__);