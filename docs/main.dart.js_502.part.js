((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,N,E,O,G,P,H,Q,R,S,I,T,U,V,W,X,F,Y,D={
i5A(){return new D.atM(null)},
aHf(d){var x=J.a2(d),w=D.h7(x.h(d,"reading")).h(0,"action"),v=J.k(w==null?"":w)
if(B.a.Y(v,"ENTER UP"))return 0
if(B.a.Y(v,"ENTER DOWN"))return 1
if(!J.z(x.h(d,"open"),!0))return 4
return 2+(100-D.f4(D.h7(x.h(d,"reading")).h(0,"score")))/1000},
fAg(d){var x
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
default:x=new D.z1(d,d.length===0?"?":d[0],B.b2)
break}return x},
fv8(d,e){var x,w,v=null,u=d.split("/")
if(u.length===2&&C.a8t.am(0,u[0])&&C.a8t.am(0,u[1])){u=d.split("/")
x=new D.fv9(e)
return new A.a6(e*1.25,e,new A.an(B.a0,v,B.ad,B.t,A.a([A.ao(v,x.$1(u[0]),v,v,0,v,0,v),A.ao(0,x.$1(u[1]),v,v,v,0,v,v)],y.p),v),v)}w=D.fAg(d)
x=w.b
return A.p(B.z,A.c(x,v,v,v,v,v,v,A.l(v,v,B.c,v,v,v,v,v,v,v,v,x.length>1?e*0.32:e*0.52,v,v,B.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),B.f,v,v,new A.o(w.c,v,v,v,v,v,B.a6),v,e,v,v,v,v,v,e)},
fAy(d){var x,w=y.g.a(d.h(0,"markets"))
if(w==null)w=B.cb
w=J.d_(w,y.f)
w=A.cE(w,new D.fAz(),w.$ti.k("M.E"),y.P)
x=A.B(w,A.a5(w).k("M.E"))
return x},
h7(d){var x=y.N,w=y.z
return y.f.b(d)?A.a1(d,x,w):A.T(x,w)},
f4(d){var x
if(typeof d=="number")x=d
else{x=A.cG(A.v(d==null?"":d))
if(x==null)x=0}return x},
aRo(d){var x=y.g.a(D.h7(J.t(d,"chart")).h(0,"points"))
if(x==null)x=B.cb
x=J.d_(x,y.f)
x=A.cE(x,new D.fET(),x.$ti.k("M.E"),y.P)
x=A.B(x,A.a5(x).k("M.E"))
return x},
ij(d,e,f){var x,w=A.o4(B.i.aa(Math.abs(d),2),A.ag("\\B(?=(\\d{3})+(?!\\d))",!0,!1,!1,!1),new D.fBF(),null)
if(d<0)x="-"
else x=f&&d>0?"+":""
return x+(e?"$":"")+w},
aQD(d){var x=B.o.F(A.d6(d),12)===0?12:B.o.F(A.d6(d),12),w=B.a.b0(B.o.v(A.fG(d)),2,"0"),v=A.d6(d)<12?"AM":"PM"
return""+x+":"+w+" "+v},
bFd(d){var x=d.ab(),w=new D.fIU(),v=w.$3(A.bD(x),3,2).bM(252e8),u=w.$3(A.bD(x),11,1).bM(216e8),t=x.bM(0-A.du(0,!x.cW(v)&&x.cW(u)?4:5,0,0,0,0).a)
return A.c0(A.bD(t),A.bM(t),A.bW(t),A.d6(t),A.fG(t),0,0,0)},
igJ(d){var x,w=A.bi(A.v(d==null?"":d))
if(w==null)return""
x=D.bFd(w)
return B.iK[A.bM(x)-1]+" "+A.bW(x)+" at "+D.aQD(x)+" ET"},
inb(d){var x,w,v=d.split(", ")
if(v.length>=4){x=v[1]
w=v[3]
return x+", "+A.aL(w," ET","")}return d},
hEv(d){return d.length===0?d:d[0].toUpperCase()+B.a.aY(d,1)},
hGZ(){var x=D.bFd(new A.V(Date.now(),0,!1).ab()),w=B.o.F(A.fG(x),15)
return"at "+D.aQD(A.c0(A.bD(x),A.bM(x),A.bW(x),A.d6(x),A.fG(x),0,0,0).bM(A.du(0,0,0,0,15-w,0).a))+" ET"},
ieb(d){if(B.a.Y(d,"ENTER UP"))return C.dS
if(B.a.Y(d,"ENTER DOWN"))return C.eF
if(B.a.q(d,"SKIP")||B.a.q(d,"TOO LATE"))return C.eF
if(B.a.Y(d,"MARKET CLOSED"))return B.bP
return E.jQ},
hHY(a7,a8,a9,b0,b1){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=null,a1="mom1h",a2=J.a2(a8),a3=D.h7(a2.h(a8,"reading")),a4=D.h7(a3.h(0,"timing")),a5=D.aRo(a8),a6=a2.h(a8,"asset")
if(a6==null)a6=a2.h(a8,"symbol")
x=J.k(a6==null?"":a6)
a6=a3.h(0,"action")
w=J.k(a6==null?"WAITING FOR DATA":a6)
v=D.ieb(w)
u=B.i.D(D.f4(a3.h(0,"score")),0,100)
a6=y.g.a(a3.h(0,"notes"))
if(a6==null)a6=B.cb
a6=J.b8(a6,new D.fFK(),y.N)
t=A.B(a6,a6.$ti.k("aj.E"))
s=D.f4(a2.h(a8,"changePct"))
a6=a7.a
r=a6?B.c.j(0.92):C.kY
q=A.n(20)
p=B.a.Y(w,"ENTER")
if(p)o=v.j(0.6)
else o=a6?B.c:C.uR
o=A.K(o,B.r,p?1.6:1)
n=y.V
m=A.a([new A.aa(0,B.H,a7.ga9z(),B.hR,14)],n)
l=D.fv8(x,28)
p=A.c(x,a0,a0,a0,a0,a0,a0,A.l(a0,a0,a6?C.dE:B.c,a0,a0,a0,a0,a0,a0,a0,a0,14,a0,a0,B.F,a0,a0,!0,a0,a0,a0,a0,a0,a0,a0,a0),a0,a0,a0)
k=a2.h(a8,"name")
k=J.k(k==null?"":k)
j=y.p
k=A.a([l,B.ar,A.E(A.x(A.a([p,A.c(k,a0,a0,a0,a0,a0,a0,A.l(a0,a0,a6?C.dj:C.dk,a0,a0,a0,a0,a0,a0,a0,a0,11,a0,a0,a0,a0,a0,!0,a0,a0,a0,a0,a0,a0,a0,a0),a0,a0,a0)],j),B.B,a0,B.e,B.h,0,B.p),1)],j)
if(a5.length>2)B.d.u(k,A.a([new A.a6(58,26,A.b4(a0,a0,a0,new D.aKz(a5,s>=0?C.dS:C.eF,a0),B.az),a0),B.ar],j))
p=D.hHS(a8)
p=A.c(p,a0,a0,a0,a0,a0,a0,A.l(a0,a0,a6?C.dE:B.c,a0,a0,a0,a0,a0,a0,a0,a0,14,a0,a0,B.F,a0,a0,!0,a0,a0,a0,a0,a0,a0,a0,a0),a0,a0,a0)
l=s>=0
i=l?"+":""
h=B.i.aa(s,2)
g=J.z(a2.h(a8,"kind"),"forex")?"30m":"4h"
k.push(A.x(A.a([p,A.c(i+h+"% \xb7 "+g,a0,a0,a0,a0,a0,a0,A.l(a0,a0,l?C.dS:C.eF,a0,a0,a0,a0,a0,a0,a0,a0,11,a0,a0,B.O,a0,a0,!0,a0,a0,a0,a0,a0,a0,a0,a0),a0,a0,a0)],j),B.dJ,a0,B.e,B.h,0,B.p))
p=A.a([A.A(k,B.l,a0,B.e,B.h,0,a0,a0)],j)
if(y.f.b(a3.h(0,"entry"))){l=D.h7(a3.h(0,"entry"))
f=J.z(l.h(0,"dir"),"up")
e=f?C.dS:C.eF
d=Math.max(1,B.i.S(D.f4(l.h(0,"candleMin"))))
k=A.n(18)
i=A.ap(e,B.v,0.25)
i.toString
i=A.a([e,i],y.O)
n=A.a([new A.aa(0,B.H,e.j(0.35),B.cz,16)],n)
h=B.c.j(0.22)
h=A.p(a0,A.W(f?B.pP:B.pO,B.c,a0,a0,a0,34),B.f,a0,a0,new A.o(h,a0,a0,a0,a0,a0,B.a6),a0,52,a0,a0,a0,a0,a0,52)
g=A.c(f?"ENTER UP":"ENTER DOWN",a0,a0,a0,a0,a0,a0,C.fPY,a0,a0,a0)
B.d.u(p,A.a([B.af,A.p(a0,A.x(A.a([h,B.ak,g,A.c(f?"BUY / CALL":"SELL / PUT",a0,a0,a0,a0,a0,a0,C.fHw,a0,a0,a0),B.S,new D.aCq(d,a0),B.S,A.A(A.a([A.x(A.a([A.c(B.i.aa(D.f4(l.h(0,"durationMin")),0)+" min",a0,a0,a0,a0,a0,a0,B.jn,a0,a0,a0),A.c("Trade for",a0,a0,a0,a0,a0,a0,K.acH,a0,a0,a0)],j),B.l,a0,B.e,B.h,0,B.p),A.p(a0,a0,B.f,B.jS,a0,a0,a0,30,a0,B.r0,a0,a0,a0,1),A.x(A.a([A.c(A.v(l.h(0,"worked"))+" of "+A.v(l.h(0,"of")),a0,a0,a0,a0,a0,a0,B.jn,a0,a0,a0),A.c("Worked lately",a0,a0,a0,a0,a0,a0,K.acH,a0,a0,a0)],j),B.l,a0,B.e,B.h,0,B.p)],j),B.l,a0,B.b9,B.h,0,a0,a0)],j),B.l,a0,B.e,B.h,0,B.p),B.f,a0,a0,new A.o(a0,a0,a0,k,n,new A.a7(B.aX,B.b1,B.x,i,a0,a0),B.m),a0,a0,a0,a0,U.a1N,a0,a0,1/0)],j))}if(a9!=null){n=A.n(10)
B.d.u(p,A.a([B.P,A.p(a0,A.A(A.a([C.c2_,B.d8,A.E(A.c(a9+" \xb7 check before you act",a0,a0,a0,a0,a0,a0,C.fJk,a0,a0,a0),1)],j),B.l,a0,B.e,B.h,0,a0,a0),B.f,a0,a0,new A.o(a0,a0,a0,n,a0,C.ceC,B.m),a0,a0,a0,a0,B.fM,a0,a0,1/0)],j))}p.push(B.S)
n=v.j(0.15)
l=A.n(999)
l=A.a([A.p(a0,A.c(w,a0,a0,a0,a0,a0,a0,A.l(a0,a0,v,a0,a0,a0,a0,a0,a0,a0,a0,10.5,a0,a0,B.u,a0,a0,!0,a0,0.4,a0,a0,a0,a0,a0,a0),a0,a0,a0),B.f,a0,a0,new A.o(n,a0,a0,l,a0,a0,B.m),a0,a0,a0,a0,B.o_,a0,a0,a0),B.aY],j)
if(a3.h(0,"rsi")!=null){n=B.i.aa(D.f4(a3.h(0,"rsi")),0)
l.push(A.c("RSI "+n,a0,a0,a0,a0,a0,a0,A.l(a0,a0,a6?C.dj:C.dk,a0,a0,a0,a0,a0,a0,a0,a0,11,a0,a0,B.O,a0,a0,!0,a0,a0,a0,a0,a0,a0,a0,a0),a0,a0,a0))}if(a3.h(0,a1)!=null){n=D.f4(a3.h(0,a1))>=0?"+":""
k=B.i.aa(D.f4(a3.h(0,a1)),2)
B.d.u(l,A.a([B.ar,A.c("1h "+n+k+"%",a0,a0,a0,a0,a0,a0,A.l(a0,a0,D.f4(a3.h(0,a1))>=0?C.dS:C.eF,a0,a0,a0,a0,a0,a0,a0,a0,11,a0,a0,B.O,a0,a0,!0,a0,a0,a0,a0,a0,a0,a0,a0),a0,a0,a0)],j))}p.push(A.A(l,B.l,a0,B.e,B.h,0,a0,a0))
p.push(B.S)
p.push(A.cf(new D.fFL(u,a7)))
p.push(B.at)
n=A.c("Sellers",a0,a0,a0,a0,a0,a0,A.l(a0,a0,a6?C.dj:C.dk,a0,a0,a0,a0,a0,a0,a0,a0,10,a0,a0,a0,a0,a0,!0,a0,a0,a0,a0,a0,a0,a0,a0),a0,a0,a0)
l=B.i.aa(u,0)
l=A.c("Strength "+l+"/100",a0,a0,a0,a0,a0,a0,A.l(a0,a0,a6?C.dE:B.c,a0,a0,a0,a0,a0,a0,a0,a0,10.5,a0,a0,B.F,a0,a0,!0,a0,a0,a0,a0,a0,a0,a0,a0),a0,a0,a0)
p.push(A.A(A.a([n,B.aY,l,B.aY,A.c("Buyers",a0,a0,a0,a0,a0,a0,A.l(a0,a0,a6?C.dj:C.dk,a0,a0,a0,a0,a0,a0,a0,a0,10,a0,a0,a0,a0,a0,!0,a0,a0,a0,a0,a0,a0,a0,a0),a0,a0,a0)],j),B.l,a0,B.e,B.h,0,a0,a0))
p.push(B.P)
n=J.z(a2.h(a8,"open"),!0)?A.cS(t,1,a0,A.U(t).c):t
n=J.HW(n,b0?2:99)
l=n.$ti
n=new A.bQ(n,n.gJ(0),l.k("bQ<aj.E>"))
l=l.k("aj.E")
while(n.C()){k=n.d
if(k==null)k=l.a(k)
i=A.W(B.r4,v,a0,a0,a0,4.5)
h=a6?C.dE:B.c
p.push(new A.D(B.n9,new A.c3(B.aL,B.e,B.h,B.B,a0,B.p,a0,0,A.a([new A.D(B.hx,i,a0),O.xT,new A.by(1,B.ba,A.c(k,a0,a0,a0,a0,a0,a0,new A.H(!0,h,a0,a0,a0,a0,12.3,a0,a0,a0,a0,a0,1.35,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0),a0,a0,a0),a0)],j),a0),a0))}if(J.z(a2.h(a8,"open"),!0))B.d.u(p,A.a([B.S,D.igs(a7,a3,a4)],j))
if(b1!=null)p.push(new A.bK(B.a9,a0,a0,A.hu(C.bXQ,A.c("Ask the tutor about "+x,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0),b1,a0),a0))
return A.p(a0,A.x(p,B.B,a0,B.e,B.h,0,B.p),B.f,a0,a0,new A.o(r,a0,o,q,m,a0,B.m),a0,a0,a0,B.d4,B.bG,a0,a0,a0)},
igs(a3,a4,a5){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f="dir",e="typicalMin",d="entry",a0=a4.h(0,"decision"),a1=J.k(a0==null?"NO_DIRECTION":a0),a2=J.z(a4.h(0,f),"up")
a0=y.g.a(a4.h(0,"notes"))
if(a0==null)a0=B.cb
a0=J.b8(a0,new D.fvZ(),y.N)
x=A.B(a0,a0.$ti.k("aj.E"))
A:{if("ENTER"===a1){a0=a2?C.dS:C.eF
break A}if("SKIP_WEAK"===a1||"WAIT_LATE"===a1){a0=C.eF
break A}a0=E.jQ
break A}w=a5.h(0,e)!=null&&a5.h(0,f)!=null&&!J.z(a5.h(0,f),"none")&&a1!=="NO_DIRECTION"&&a1!=="CLOSED"
v=D.f4(a5.h(0,"of"))
u=D.f4(a5.h(0,"worked"))
t=v>0
s=t?u/v:0
r=J.z(a5.h(0,f),"up")?"up":"down"
q=a3.a
p=q?C.Hb:C.Hc
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
B.d.u(i,A.a([B.cM,A.c(h,g,g,g,g,g,g,A.l(g,g,q?C.dE:B.c,g,g,g,g,g,g,g,g,12.3,g,g,g,g,1.35,!0,g,g,g,g,g,g,g,g),g,g,g)],l))}m=A.a([m,B.P,A.p(g,A.x(i,B.B,g,B.e,B.h,0,B.p),B.f,g,g,new A.o(k,g,g,j,g,g,B.m),g,g,g,g,B.jV,g,g,1/0)],l)
if(a1==="ENTER"&&y.f.b(a4.h(0,d)))B.d.u(m,A.a([B.P,A.A(A.a([A.E(D.hFa(a3,"Trade for",B.i.aa(D.f4(D.h7(a4.h(0,d)).h(0,"durationMin")),0)+" min",a0),1),A.E(D.hFa(a3,"Enter at","next "+B.i.aa(D.f4(D.h7(a4.h(0,d)).h(0,"candleMin")),0)+"-min candle",g),1)],l),B.l,g,B.e,B.h,0,g,g)],l))
if(w){a0=A.c("What this is based on",g,g,g,g,g,g,A.l(g,g,q?C.dj:C.dk,g,g,g,g,g,g,g,g,10.5,g,g,B.F,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)
k=D.hkm(a3,B.fZ,"This "+r+" move started "+B.i.aa(D.f4(a5.h(0,"ageMin")),0)+" min ago.",g)
j=r==="up"?"Up":"Down"
l=A.a([B.S,a0,B.at,k,D.hkm(a3,B.ast,j+" moves on this market usually end after about "+B.i.aa(D.f4(a5.h(0,e)),0)+" min.",g)],l)
if(t){a0=B.i.aa(v,0)
t=B.i.aa(u,0)
k=B.i.S(s*100)
j=s>=0.5
i=j?"Reliable enough.":"Under half: unreliable."
j=j?C.dS:C.eF
l.push(D.hkm(a3,B.pQ,"Of the last "+a0+" "+r+" moves here, "+t+" really went "+r+" ("+k+"%). "+i,j))}B.d.u(m,l)}m.push(B.at)
m.push(A.c("Estimates from this market's recent moves, not promises.",g,g,g,g,g,g,A.l(g,g,q?C.dj:C.dk,g,g,g,g,g,g,g,g,10.5,g,g,g,g,g,!0,g,g,g,g,g,g,g,g),g,g,g))
return A.p(g,A.x(m,B.B,g,B.e,B.h,0,B.p),B.f,g,g,new A.o(p,g,n,o,g,g,B.m),g,g,g,g,B.bl,g,g,1/0)},
hkm(d,e,f,g){var x,w=null,v=g==null
if(v)x=d.a?C.dj:C.dk
else x=g
x=A.W(e,x,w,w,w,14)
if(v)v=d.a?C.dE:B.c
else v=g
return new A.D(B.Hz,A.A(A.a([x,B.bf,A.E(A.c(f,w,w,w,w,w,w,A.l(w,w,v,w,w,w,w,w,w,w,w,12,w,w,w,w,1.35,!0,w,w,w,w,w,w,w,w),w,w,w),1)],y.p),B.B,w,B.e,B.h,0,w,w),w)},
hFa(d,e,f,g){var x=null,w=d.a,v=A.c(e,x,x,x,x,x,x,A.l(x,x,w?C.dj:C.dk,x,x,x,x,x,x,x,x,10.5,x,x,x,x,x,!0,x,x,x,x,x,x,x,x),x,x,x)
if(g==null)w=w?C.dE:B.c
else w=g
return A.x(A.a([v,A.c(f,x,x,x,x,x,x,A.l(x,x,w,x,x,x,x,x,x,x,x,13.5,x,x,B.F,x,x,!0,x,x,x,x,x,x,x,x),x,x,x)],y.p),B.B,x,B.e,B.h,0,B.p)},
hHS(d){var x=J.a2(d),w=D.f4(x.h(d,"price"))
if(!J.z(x.h(d,"kind"),"forex"))return D.ij(w,!0,!1)
return B.i.aa(w,w>=100?3:5)},
hz2(d,e){return new D.XD(d,e,null)},
hDu(){var x=Math.max(0,$.aLT-1)
$.aLT=x
if(x===0){B.d.a8($.Dy)
$.ah5=!1
$.hjJ=""
$.fn5=$.fn5+1}},
eHc(d){var x
y.g.a(d)
x=d==null?B.cb:d
x=J.d_(x,y.f)
x=A.cE(x,new D.eHd(),x.$ti.k("M.E"),y.P)
x=A.B(x,A.a5(x).k("M.E"))
return x},
hCZ(d){var x=J.t(d,"kind")
switch(J.k(x==null?"":x)){case"forex":x="Forex"
break
case"crypto":x="Crypto"
break
default:x="Stocks"
break}return x},
atM:function atM(d){this.a=d},
aHe:function aHe(d,e){var _=this
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
eGg:function eGg(d){this.a=d},
eFY:function eFY(d,e){this.a=d
this.b=e},
eFP:function eFP(d,e){this.a=d
this.b=e},
eFX:function eFX(d,e){this.a=d
this.b=e},
eG_:function eG_(d,e){this.a=d
this.b=e},
eFN:function eFN(){},
eFO:function eFO(d,e,f){this.a=d
this.b=e
this.c=f},
eG7:function eG7(){},
eG5:function eG5(d){this.a=d},
eG6:function eG6(d){this.a=d},
eG8:function eG8(d){this.a=d},
eG9:function eG9(d){this.a=d},
eFW:function eFW(d){this.a=d},
eG1:function eG1(d){this.a=d},
eG2:function eG2(d,e){this.a=d
this.b=e},
eG3:function eG3(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eG0:function eG0(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eG4:function eG4(){},
eGf:function eGf(d){this.a=d},
eGc:function eGc(d){this.a=d},
eGd:function eGd(d){this.a=d},
eFE:function eFE(d){this.a=d},
eFF:function eFF(d,e){this.a=d
this.b=e},
eFG:function eFG(d){this.a=d},
eFH:function eFH(d){this.a=d},
eGb:function eGb(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eGa:function eGa(d){this.a=d},
eFR:function eFR(){},
eFS:function eFS(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eFT:function eFT(d){this.a=d},
eFV:function eFV(){},
eFU:function eFU(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
eFQ:function eFQ(d,e){this.a=d
this.b=e},
eFK:function eFK(d,e){this.a=d
this.b=e},
eFJ:function eFJ(d,e){this.a=d
this.b=e},
eFL:function eFL(d){this.a=d},
eFI:function eFI(d){this.a=d},
eFC:function eFC(d){this.a=d},
eFD:function eFD(){},
eFZ:function eFZ(d,e){this.a=d
this.b=e},
eFM:function eFM(d,e){this.a=d
this.b=e},
eGe:function eGe(){},
eFB:function eFB(d){this.a=d},
eFA:function eFA(d){this.a=d},
adD:function adD(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
bea:function bea(){this.c=this.a=this.d=null},
cWA:function cWA(d,e){this.a=d
this.b=e},
cWJ:function cWJ(d){this.a=d},
cWH:function cWH(d,e){this.a=d
this.b=e},
cWF:function cWF(d,e){this.a=d
this.b=e},
cWG:function cWG(d,e){this.a=d
this.b=e},
cWE:function cWE(d){this.a=d},
cWD:function cWD(d){this.a=d},
cWI:function cWI(d){this.a=d},
cWC:function cWC(d){this.a=d},
cWB:function cWB(d){this.a=d},
beb:function beb(d,e,f,g,h,i,j,k){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.w=j
_.a=k},
cWK:function cWK(d){this.a=d},
cWM:function cWM(d,e){this.a=d
this.b=e},
cWL:function cWL(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
aKz:function aKz(d,e,f){this.b=d
this.c=e
this.a=f},
fgA:function fgA(){},
z1:function z1(d,e,f){this.a=d
this.b=e
this.c=f},
fv9:function fv9(d){this.a=d},
fAz:function fAz(){},
a1v:function a1v(d){this.a=d},
fET:function fET(){},
fBF:function fBF(){},
fIU:function fIU(){},
fFK:function fFK(){},
fFL:function fFL(d,e){this.a=d
this.b=e},
aCq:function aCq(d,e){this.c=d
this.a=e},
bhH:function bhH(){this.c=this.a=this.d=null},
dhU:function dhU(d){this.a=d},
dhT:function dhT(){},
fvZ:function fvZ(){},
cC:function cC(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
uu:function uu(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
XD:function XD(d,e,f){this.c=d
this.d=e
this.a=f},
a_y:function a_y(d,e){this.a=d
this.b=e},
aHg:function aHg(d,e,f,g,h,i,j,k,l,m){var _=this
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
_.a9$=m
_.c=_.a=null},
eGq:function eGq(){},
eHi:function eHi(d){this.a=d},
eHh:function eHh(){},
eHj:function eHj(d){this.a=d},
eHk:function eHk(d){this.a=d},
eHg:function eHg(d,e){this.a=d
this.b=e},
eHl:function eHl(d){this.a=d},
eHd:function eHd(){},
eGL:function eGL(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eGW:function eGW(d){this.a=d},
eGt:function eGt(d){this.a=d},
eGu:function eGu(d,e){this.a=d
this.b=e},
eGv:function eGv(d){this.a=d},
eGw:function eGw(d){this.a=d},
eGs:function eGs(d,e){this.a=d
this.b=e},
eGr:function eGr(d,e){this.a=d
this.b=e},
eGV:function eGV(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eGU:function eGU(){},
eGM:function eGM(){},
eGN:function eGN(){},
eHa:function eHa(){},
eHb:function eHb(){},
eGz:function eGz(d){this.a=d},
eGA:function eGA(){},
eGB:function eGB(){},
eGm:function eGm(d,e){this.a=d
this.b=e},
eGn:function eGn(){},
eGo:function eGo(){},
eGp:function eGp(){},
eGX:function eGX(d){this.a=d},
eHe:function eHe(d){this.a=d},
eHf:function eHf(d,e){this.a=d
this.b=e},
eGy:function eGy(d){this.a=d},
eGx:function eGx(d,e){this.a=d
this.b=e},
eGT:function eGT(d,e){this.a=d
this.b=e},
eGP:function eGP(d,e){this.a=d
this.b=e},
eGQ:function eGQ(d,e){this.a=d
this.b=e},
eGO:function eGO(d,e,f){this.a=d
this.b=e
this.c=f},
eGR:function eGR(d,e){this.a=d
this.b=e},
eGS:function eGS(d){this.a=d},
eGC:function eGC(d,e,f){this.a=d
this.b=e
this.c=f},
eGK:function eGK(d){this.a=d},
eGD:function eGD(){},
eGE:function eGE(){},
eGF:function eGF(){},
eGG:function eGG(){},
eGH:function eGH(){},
eGI:function eGI(){},
eGJ:function eGJ(){},
eH0:function eH0(d,e){this.a=d
this.b=e},
eH1:function eH1(d){this.a=d},
eH9:function eH9(){},
eH2:function eH2(d){this.a=d},
eH3:function eH3(d){this.a=d},
eH5:function eH5(d,e){this.a=d
this.b=e},
eH_:function eH_(d,e){this.a=d
this.b=e},
eH4:function eH4(d){this.a=d},
eH6:function eH6(d){this.a=d},
eGZ:function eGZ(d){this.a=d},
eH7:function eH7(d){this.a=d},
eGY:function eGY(d,e){this.a=d
this.b=e},
eH8:function eH8(d,e){this.a=d
this.b=e},
eGi:function eGi(d){this.a=d},
eGj:function eGj(d,e){this.a=d
this.b=e},
eGh:function eGh(d,e){this.a=d
this.b=e},
eGk:function eGk(d,e){this.a=d
this.b=e},
eGl:function eGl(d){this.a=d},
a0z:function a0z(d,e,f,g,h,i,j,k,l,m){var _=this
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
bkS:function bkS(d){var _=this
_.x=_.w=_.r=_.f=_.e=_.d=$
_.y=d
_.c=_.a=_.z=null},
dur:function dur(){},
dus:function dus(){},
dup:function dup(){},
duq:function duq(){},
dun:function dun(d){this.a=d},
duo:function duo(d){this.a=d},
dum:function dum(d){this.a=d},
duf:function duf(){},
dug:function dug(){},
duh:function duh(d){this.a=d},
dui:function dui(d){this.a=d},
dud:function dud(d,e,f){this.a=d
this.b=e
this.c=f},
duj:function duj(d){this.a=d},
duk:function duk(d,e){this.a=d
this.b=e},
dul:function dul(d,e){this.a=d
this.b=e},
due:function due(d,e,f){this.a=d
this.b=e
this.c=f},
aPe:function aPe(){}},C,K,L,M,Z
J=c[1]
A=c[0]
B=c[2]
N=c[149]
E=c[306]
O=c[175]
G=c[285]
P=c[217]
H=c[305]
Q=c[109]
R=c[54]
S=c[307]
I=c[289]
T=c[186]
U=c[288]
V=c[174]
W=c[308]
X=c[129]
F=c[277]
Y=c[268]
D=a.updateHolder(c[20],D)
C=c[304]
K=c[177]
L=c[309]
M=c[124]
Z=c[156]
D.atM.prototype={
R(){return new D.aHe(A.a([],y.t),A.mi(0,null,null))}}
D.aHe.prototype={
a_(){var x=this
x.a4()
$.aLT=$.aLT+1
x.a.toString
x.aeq()
x.Bm(!0)
x.ay=A.d1(B.nT,new D.eGg(x))},
t(){var x=this.ay
if(x!=null)x.a1(0)
this.Q.t()
D.hDu()
this.a3()},
cr0(d){var x=this
if(!x.as&&d>0){x.as=!0
$.aU.U$.push(new D.eFY(x,d))}return x.Q},
aeq(){var x=0,w=A.j(y.H),v=1,u=[],t=this,s,r,q,p
var $async$aeq=A.e(function(d,e){if(d===1){u.push(e)
x=v}for(;;)switch(x){case 0:v=3
x=6
return A.b(A.aB(),$async$aeq)
case 6:s=e
r=A.aW(J.t(s.a,"ngmy_signal_grid_market"))
if(r!=null&&r.length!==0&&t.c!=null&&t.z==null)t.l(new D.eFP(t,r))
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
a20(d){return this.cqx(d)},
cqx(d){var x=0,w=A.j(y.H),v=1,u=[],t=this,s,r,q
var $async$a20=A.e(function(e,f){if(e===1){u.push(f)
x=v}for(;;)switch(x){case 0:t.l(new D.eFX(t,d))
v=3
x=6
return A.b(A.aB(),$async$a20)
case 6:s=f
x=7
return A.b(s.aE("String","ngmy_signal_grid_market",d),$async$a20)
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
return A.i($async$a20,w)},
Bm(d){return this.cvR(d)},
cg8(){return this.Bm(!1)},
cvR(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$Bm=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(A.h0(A.J(["action","paStatus","live",d],y.N,y.z),!1,!1,!1,!1,B.CS),$async$Bm)
case 3:t=f
if(u.c==null){x=1
break}u.l(new D.eG_(u,t))
x=u.d!=null?4:5
break
case 4:x=6
return A.b(u.c6X(),$async$Bm)
case 6:case 5:case 1:return A.h(v,w)}})
return A.i($async$Bm,w)},
a_0(d){return this.c6Y(d)},
c6X(){return this.a_0(!1)},
c6Y(d){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$a_0=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(A.h0(A.J(["action","paLog","limit",100,"beforeId",d&&u.e.length!==0?J.t(B.d.gal(u.e),"id"):0],y.N,y.z),!1,!1,!1,!1,B.hb),$async$a_0)
case 3:r=f
if(u.c==null||r==null||!J.z(J.t(r,"ok"),!0)){x=1
break}t=y.g.a(J.t(r,"rows"))
if(t==null)t=B.cb
t=J.d_(t,y.f)
t=A.cE(t,new D.eFN(),t.$ti.k("M.E"),y.P)
s=A.B(t,A.a5(t).k("M.E"))
u.l(new D.eFO(u,d,s))
case 1:return A.h(v,w)}})
return A.i($async$a_0,w)},
SL(d){return this.cAL(d)},
cAL(d){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$SL=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=u.d
q=D.h7(r==null?null:J.t(r,"state"))
x=d&&J.z(q.h(0,"brakePaused"),!0)?3:4
break
case 3:r=u.c
r.toString
x=5
return A.b(A.ce(null,null,!0,null,new D.eG7(),r,null,!0,!0,y.y),$async$SL)
case 5:if(f!==!0){x=1
break}case 4:u.l(new D.eG8(u))
x=6
return A.b(A.h0(A.J(["action","paSet","enabled",d],y.N,y.z),!1,!1,!1,!1,B.hb),$async$SL)
case 6:t=f
if(u.c==null){x=1
break}u.l(new D.eG9(u))
r=t==null
if(J.z(r?null:J.t(t,"ok"),!0))s=d?"Agent started.":"Agent stopped."
else{s=r?null:J.t(t,"error")
s=J.k(s==null?"Could not change it.":s)}u.b37(s,J.z(r?null:J.t(t,"ok"),!0)?C.dS:C.eF)
x=7
return A.b(u.cg8(),$async$SL)
case 7:case 1:return A.h(v,w)}})
return A.i($async$SL,w)},
clt(){var x=this.c
x.toString
A.a8(x,!1).cc(A.ec(new D.eFW(this),!1,null,y.H))},
a3i(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$a3i=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u.l(new D.eG1(u))
x=3
return A.b(A.h0(A.J(["action","paCheck"],y.N,y.z),!1,!1,!1,!1,B.nT),$async$a3i)
case 3:t=e
if(u.c==null){x=1
break}u.l(new D.eG2(u,t))
s=t==null
if(!J.z(s?null:J.t(t,"ok"),!0)){s=s?null:J.t(t,"error")
u.b37(J.k(s==null?"The check did not finish.":s),C.eF)
x=1
break}s=u.c
s.toString
s=A.Q(s).ax.a===B.dd
t.toString
r=D.h7(D.h7(J.t(t,"state")).h(0,"snapshot"))
q=u.c
q.toString
p=s?C.yK:C.yI
x=4
return A.b(A.bU(p,null,new D.eG3(u,new D.a1v(s),r,t),q,!0,!0,!0,B.aU8,!1,!1,y.H),$async$a3i)
case 4:case 1:return A.h(v,w)}})
return A.i($async$a3i,w)},
cyW(d,e,f,g){var x,w,v,u,t,s=null,r=D.fAy(e)
B.d.b_(r,new D.eG4())
x=d.a
w=x?C.qC:C.qz
w=A.at(A.p(s,s,B.f,s,s,new A.o(w,s,s,A.n(9),s,s,B.m),s,4,s,s,s,s,s,40),s,s,s)
v=A.c("What the agent sees right now",s,s,s,s,s,s,A.l(s,s,x?C.dE:B.c,s,s,s,s,s,s,s,s,19,s,s,B.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)
u=J.z(f.h(0,"enabled"),!0)?" (next one "+D.hGZ()+")":" (the agent is stopped, so none will be made)"
w=A.a([w,B.aA,v,B.at,A.c("Check now only looks. It never buys or sells. Pretend trades are made only by the automatic check every 15 minutes"+u+".",s,s,s,s,s,s,A.l(s,s,x?C.dj:C.dk,s,s,s,s,s,s,s,s,12.5,s,s,s,s,1.35,!0,s,s,s,s,s,s,s,s),s,s,s),B.af],y.p)
for(x=r.length,t=0;t<r.length;r.length===x||(0,A.I)(r),++t)w.push(D.hHY(d,r[t],s,!0,s))
return A.cp(w,g,s,C.bH8,s,s,B.ah,!1)},
b37(d,e){var x=null
this.c.L(y.q).f.T(A.b2(x,x,x,e,x,B.t,x,A.c(d,x,x,x,x,x,x,x,x,x,x),x,B.Y,x,x,x,x,x,x,x,x,x,x))},
B(d){var x,w=this,v=null,u=A.Q(d).ax.a===B.dd,t=new D.a1v(u),s=u?C.yK:C.yI,r=u?C.yK:C.yI
r=A.a([r,u?C.a_A:C.a_q],y.O)
x=w.cg9(t)
if(w.f)u=B.lO
else{if(w.d==null){u=w.ax
u=A.a([w.aaC(t,u==null?"Nothing to show yet.":u,B.b2)],y.p)}else u=w.bIb(0,t)
u=A.PL(A.cp(u,v,v,C.bHu,v,v,B.ah,!1),v,new D.eGf(w))}return A.c5(v,s,A.p(v,A.bo(!0,A.x(A.a([x,A.E(u,1)],y.p),B.l,v,B.e,B.h,0,B.p),!0,!1,B.ag,!0,!0),B.f,v,v,new A.o(v,v,v,v,v,new A.a7(B.aX,B.b1,B.x,r,v,v),B.m),v,v,v,v,v,v,v,v),v,!1,!1,v,v)},
cg9(d){var x,w,v,u,t,s,r=this,q=null,p=r.d,o=D.h7(p==null?q:J.t(p,"state")),n=J.z(o.h(0,"brakePaused"),!0),m=J.z(o.h(0,"enabled"),!0)&&!n
p=r.b35(d,B.eH,new D.eGc(r))
x=d.a
w=A.c("Signal Grid",q,q,q,q,q,q,A.l(q,q,x?C.dE:B.c,q,q,q,q,q,q,q,q,17,q,q,B.F,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
v=y.p
w=A.a([p,B.ar,A.E(A.x(A.a([w,A.c("Paper trading agent \xb7 pretend money",q,q,q,q,q,q,A.l(q,q,x?C.dj:C.dk,q,q,q,q,q,q,q,q,11.5,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],v),B.B,q,B.e,B.h,0,B.p),1)],v)
if(r.d!=null){if(n)p=C.eF
else if(m)p=C.dS
else p=x?C.dj:C.dk
p=p.j(0.14)
u=A.n(999)
if(n)t=C.eF
else if(m)t=C.dS
else t=x?C.dj:C.dk
t=A.W(B.r4,t,q,q,q,8)
if(n)s="Paused"
else s=m?"Running":"Stopped"
if(n)x=C.eF
else if(m)x=C.dS
else x=x?C.dj:C.dk
w.push(A.p(q,A.A(A.a([t,B.bf,A.c(s,q,q,q,q,q,q,A.l(q,q,x,q,q,q,q,q,q,q,q,12,q,q,B.F,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],v),B.l,q,B.e,B.M,0,q,q),B.f,q,q,new A.o(p,q,q,u,q,q,B.m),q,q,q,q,B.fM,q,q,q))}w.push(B.aa)
w.push(r.b35(d,B.o3,r.r?q:new D.eGd(r)))
return new A.D(B.hm,A.A(w,B.l,q,B.e,B.h,0,q,q),q)},
bIb(c2,c3){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6=this,b7=null,b8="asset",b9="liveError",c0="brakePaused",c1=b6.d
c1.toString
x=J.a2(c1)
w=D.h7(x.h(c1,"state"))
v=D.h7(x.h(c1,"config"))
u=D.h7(w.h(0,"snapshot"))
t=y.f.b(w.h(0,"shadow"))?D.h7(w.h(0,"shadow")):b7
s=D.fAy(u)
r=b6.z
if(r==null){q=t==null?b7:t.h(0,"symbol")
if(q==null)q=u.h(0,b8)
r=q==null?b7:J.k(q)}p=B.d.dC(s,new D.eFE(r),new D.eFF(s,u))
q=t==null
o=q?b7:B.d.dC(s,new D.eFG(t),new D.eFH(p))
q=!q
n=q&&J.z(t.h(0,"symbol"),J.t(p,b8))?t:b7
m=b6.c8p(c3,c1,s,p,t)
l=D.h7(x.h(c1,"market"))
k=J.a2(p)
j=k.h(p,b8)
i=J.k(j==null?"SPY":j)
h=B.a.q(i,"/")
g=D.aRo(p)
f=D.f4(k.h(p,"price"))
e=g.length!==0?D.f4(J.t(B.d.gH(g),"c")):0
d=e===0?0:(f-e)/e*100
a0=d>=0
if(h)a1=!0
else{j=k.h(p,"open")
if(j==null)j=l.h(0,"stockOpen")
a1=j==null?l.h(0,"open"):j}if(h)a2="Crypto \xb7 the agent trades it on Saturday and Sunday only"
else{j=J.kQ(a1)
if(j.A(a1,!0))a2="Stock market open \xb7 the agent trades it on weekdays \xb7 closes 4:00 PM ET"
else{j=j.A(a1,!1)?"Stock market closed"+b6.cMg(l.h(0,"nextOpen")):""
a2=j}}a3=D.fAg(i)
j=D.fv8(i,30)
a4=h?i:i+"/USD"
a5=c3.a
a4=A.c(a4,b7,b7,b7,b7,b7,b7,A.l(b7,b7,a5?C.dE:B.c,b7,b7,b7,b7,b7,b7,b7,b7,17,b7,b7,B.F,b7,b7,!0,b7,b7,b7,b7,b7,b7,b7,b7),b7,b7,b7)
a6=k.h(p,"name")
a6=J.k(a6==null?a3.a:a6)
a7=y.p
a6=A.A(A.a([j,B.ar,a4,B.bf,new A.d4(1,B.cg,A.c(a6,b7,b7,B.a2,b7,b7,b7,A.l(b7,b7,a5?C.dj:C.dk,b7,b7,b7,b7,b7,b7,b7,b7,13,b7,b7,b7,b7,b7,!0,b7,b7,b7,b7,b7,b7,b7,b7),b7,b7,b7),b7)],a7),B.l,b7,B.e,B.h,0,b7,b7)
j=f===0?"\u2014":D.ij(f,!1,!1)
j=A.a([A.E(new A.dm(B.dx,B.a5,B.f,A.c(j,b7,b7,b7,b7,b7,b7,A.l(b7,b7,a5?C.dE:B.c,b7,b7,b7,b7,b7,b7,b7,H.Ji,42,b7,b7,B.a8,b7,b7,!0,b7,-1,b7,b7,b7,b7,b7,b7),b7,b7,b7),b7),1)],a7)
if(g.length>1){a4=(a0?C.dS:C.eF).j(0.14)
a8=A.n(10)
a9=a0?C.arh:B.Qb
a9=A.W(a9,a0?C.dS:C.eF,b7,b7,b7,20)
b0=B.i.aa(Math.abs(d),2)
j.push(A.p(b7,A.A(A.a([a9,A.c(b0+"%",b7,b7,b7,b7,b7,b7,A.l(b7,b7,a0?C.dS:C.eF,b7,b7,b7,b7,b7,b7,b7,b7,13,b7,b7,B.F,b7,b7,!0,b7,b7,b7,b7,b7,b7,b7,b7),b7,b7,b7)],a7),B.l,b7,B.e,B.M,0,b7,b7),B.f,b7,b7,new A.o(a4,b7,b7,a8,b7,b7,B.m),b7,b7,b7,b7,B.fM,b7,b7,b7))}j=A.a([a6,B.P,A.A(j,B.l,b7,B.e,B.h,0,b7,b7)],a7)
if(a2.length!==0){if(J.z(a1,!0))a4=C.dS
else a4=a5?C.dj:C.dk
a4=A.W(B.r4,a4,b7,b7,b7,7)
a6=g.length>1?"  \xb7  change over 4H":""
B.d.u(j,A.a([B.at,A.A(A.a([a4,B.bf,new A.d4(1,B.cg,A.c(a2+a6,b7,b7,B.a2,b7,b7,b7,A.l(b7,b7,a5?C.dj:C.dk,b7,b7,b7,b7,b7,b7,b7,b7,12,b7,b7,b7,b7,b7,!0,b7,b7,b7,b7,b7,b7,b7,b7),b7,b7,b7),b7)],a7),B.l,b7,B.e,B.h,0,b7,b7)],a7))}m=A.a([m,new A.D(C.bKJ,A.x(j,B.B,b7,B.e,B.h,0,B.p),b7)],a7)
j=v.h(0,"problem")
if(J.k(j==null?"":j).length!==0)m.push(b6.aaC(c3,J.k(v.h(0,"problem")),E.jQ))
j=x.h(c1,b9)
if(J.k(j==null?"":j).length!==0)m.push(b6.aaC(c3,J.k(x.h(c1,b9)),C.eF))
if(J.z(w.h(0,c0),!0)){j=w.h(0,"brakeReason")
m.push(b6.aaC(c3,"Paused by the $25 brake. "+A.v(j==null?"":j)+". Look over the trades, then press Start to turn it back on.",C.eF))}m.push(b6.bLa(c3,p,n))
m.push(b6.cJB(c3,p,t,c1))
m.push(b6.bHP(c3,c1,w,u))
if(q){o.toString
x=b6.crs(c3,t,o)}else{b1=D.h7(x.h(c1,"ticket"))
f=D.f4(k.h(p,"price"))
b2=D.f4(b1.h(0,"amount"))===0?50:D.f4(b1.h(0,"amount"))
x=f===0
b3=x?0:b2/f
q=A.A(A.a([A.c("Next trade",b7,b7,b7,b7,b7,b7,A.l(b7,b7,a5?C.dE:B.c,b7,b7,b7,b7,b7,b7,b7,b7,16,b7,b7,B.F,b7,b7,!0,b7,b7,b7,b7,b7,b7,b7,b7),b7,b7,b7),B.aY,b6.a0M("AUTOMATIC",B.b2)],a7),B.l,b7,B.e,B.h,0,b7,b7)
j=a5?C.H1:C.GR
a4=A.n(999)
a6=a5?C.l_:B.c
a8=A.n(999)
a6=A.E(A.p(B.z,A.c("BUY",b7,b7,b7,b7,b7,b7,A.l(b7,b7,a5?B.c:C.l_,b7,b7,b7,b7,b7,b7,b7,b7,12.5,b7,b7,B.F,b7,b7,!0,b7,b7,b7,b7,b7,b7,b7,b7),b7,b7,b7),B.f,b7,b7,new A.o(a6,b7,b7,a8,b7,b7,B.m),b7,b7,b7,b7,B.wU,b7,b7,b7),1)
j=A.p(b7,A.A(A.a([a6,A.E(A.at(A.c("SELL",b7,b7,b7,b7,b7,b7,A.l(b7,b7,a5?C.dj:C.dk,b7,b7,b7,b7,b7,b7,b7,b7,12.5,b7,b7,B.F,b7,b7,!0,b7,b7,b7,b7,b7,b7,b7,b7),b7,b7,b7),b7,b7,b7),1)],a7),B.l,b7,B.e,B.h,0,b7,b7),B.f,b7,b7,new A.o(j,b7,b7,a4,b7,b7,B.m),b7,b7,b7,b7,B.es,b7,b7,b7)
a4=D.ij(b2,!0,!1)
if(x)a6=b7
else{a6=B.i.aa(b3,b3<0.01?6:4)
a8=k.h(p,b8)
a6="\u2248 "+a6+" "+A.v(a8==null?"":a8)}a6=b6.cHU(c3,"Amount it puts in",a4,!0,a6)
a4=B.i.aa(D.f4(b1.h(0,"takeProfitPct")),0)
a8=D.ij(D.f4(b1.h(0,"takeProfitUsd")),!0,!1)
a9=x?b7:"sells at "+D.ij(f*1.03,!0,!1)
a9=b6.bc2(c3,"Take profit  +"+a4+"%","+"+a8,C.dS,a9)
a8=B.i.aa(D.f4(b1.h(0,"stopLossPct")),1)
a4=D.ij(D.f4(b1.h(0,"stopLossUsd")),!0,!1)
x=x?b7:"sells at "+D.ij(f*0.985,!0,!1)
x=b6.bc2(c3,"Stop loss  -"+a8+"%","-"+a4,C.eF,x)
a4=b6.cHT(c3,"Leverage","None (1x)","no borrowing, no shorting")
a8=a5?C.l_:B.c
b0=A.n(999)
a8=A.p(B.z,A.c("Buys by itself when the trend turns up",b7,b7,b7,b7,b7,b7,A.l(b7,b7,a5?B.c:C.l_,b7,b7,b7,b7,b7,b7,b7,b7,13.5,b7,b7,B.F,b7,b7,!0,b7,b7,b7,b7,b7,b7,b7,b7),b7,b7,b7),B.f,b7,b7,new A.o(a8,b7,b7,b0,b7,b7,B.m),b7,b7,b7,b7,B.cm,b7,b7,1/0)
k=k.h(p,b8)
k=A.v(k==null?"":k)
x=b6.a0K(c3,A.x(A.a([q,B.af,j,B.S,a6,a9,x,a4,B.S,a8,B.ak,A.at(A.c("Shown for "+k+" at its price right now. The agent buys whichever market signals first.",b7,b7,b7,b7,b7,b7,A.l(b7,b7,a5?C.dj:C.dk,b7,b7,b7,b7,b7,b7,b7,b7,11,b7,b7,b7,b7,b7,!0,b7,b7,b7,b7,b7,b7,b7,b7),B.K,b7,b7),b7,b7,b7)],a7),B.B,b7,B.e,B.h,0,B.p))}m.push(x)
m.push(b6.cg6(c3,w))
b4=J.z(w.h(0,"enabled"),!0)&&!J.z(w.h(0,c0),!0)
x=w.h(0,"lastTickAt")
b5=A.bi(A.v(x==null?"":x))
if(b4)x=C.dS
else x=a5?C.dj:C.dk
x=A.W(S.a3W,x,b7,b7,b7,16)
if(b4){q=b5==null?"not yet":D.aQD(D.bFd(b5))+" ET"
q="Trades are automatic: the agent looks for a new buy every 15 minutes and, while it holds a trade, checks the exits every 5 minutes. Last check "+q+" \xb7 next buy check "+D.hGZ()+". Check now only looks, it never trades."}else q="The agent is stopped, so it makes no trades. Press Start and it looks for a buy every 15 minutes by itself."
m.push(new A.D(C.bKW,A.A(A.a([x,B.bf,A.E(A.c(q,b7,b7,b7,b7,b7,b7,A.l(b7,b7,a5?C.dj:C.dk,b7,b7,b7,b7,b7,b7,b7,b7,11.5,b7,b7,b7,b7,1.35,!0,b7,b7,b7,b7,b7,b7,b7,b7),b7,b7,b7),1)],a7),B.B,b7,B.e,B.h,0,b7,b7),b7))
m.push(b6.cJh(c3,c1))
m.push(b6.bEO(c3))
m.push(b6.cxR(c3,c1))
c1=J.z(v.h(0,"ordersSwitchOn"),!0)?"on":"off"
m.push(new A.D(B.hx,A.c("Version 1 is read-only: no order is ever sent to Alpaca. Order switch (ALPACA_ORDERS_ENABLED): "+c1+".",b7,b7,b7,b7,b7,b7,A.l(b7,b7,a5?C.dj:C.dk,b7,b7,b7,b7,b7,b7,b7,b7,11,b7,b7,b7,b7,b7,!0,b7,b7,b7,b7,b7,b7,b7,b7),B.K,b7,b7),b7))
return m},
cD9(d,e,f){var x=null,w=this.c
w.toString
A.ce(x,x,!0,x,new D.eGb(this,d,e,f),w,x,!0,!0,y.H)},
c8p(d,e,f,g,h){var x,w,v,u,t,s,r=this,q=null
if(f.length<2)return B.bL
x=new A.X(f,new D.eFR(),A.U(f).k("X<1>")).gJ(0)
w=d.a
v=A.c("Agent markets",q,q,q,q,q,q,A.l(q,q,w?C.dE:B.c,q,q,q,q,q,q,q,q,14,q,q,B.F,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
u=x===0
t=u?"NONE TRADED NOW":"TRADED NOW"
t=r.a0M(t,u?E.jQ:C.dS)
s=A.hf_(!1,q,!0,new A.D(B.es,A.W(B.kK,u?E.jQ:C.dS,q,q,q,19),q),!1,q,!0,!1,q,q,q,B.a6,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new D.eFS(r,d,e,h),q,q,q,q,20,q,q,q)
u=y.p
return new A.D(B.eK,A.x(A.a([new A.D(C.bKq,A.A(A.a([v,B.aa,t,B.d8,s,B.aY,A.c("tap one",q,q,q,q,q,q,A.l(q,q,w?C.dj:C.dk,q,q,q,q,q,q,q,q,11,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],u),B.l,q,B.e,B.h,0,q,q),q),new A.a6(q,128,A.hT(B.f,r.cr0(B.d.bl(f,new D.eFT(g))),new D.eFU(r,f,g,h,d),f.length,q,q,B.aL,new D.eFV(),!1),q),B.at],u),B.B,q,B.e,B.h,0,B.p),q)},
bLa(d,e,f){var x,w,v,u,t,s,r=this,q=null,p=D.aRo(e),o=p.length
if(o<2)return r.a0K(d,new A.a6(q,120,A.at(A.c("The chart appears after the first reading.",q,q,q,q,q,q,A.l(q,q,d.a?C.dj:C.dk,q,q,q,q,q,q,q,q,q,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),q,q,q),q))
x=B.d.fE(p,Math.max(0,o-r.y))
w=f==null?q:D.f4(f.h(0,"entryPrice"))
o=y.p
v=A.a([],o)
for(u=0;u<3;++u){t=C.co7[u]
if(t<=12)s="1H"
else s=t<=24?"2H":"4H"
B.d.u(v,A.a([r.czU(d,s,r.y===t,new D.eFK(r,t)),B.bf],o))}v.push(B.aY)
v.push(r.b8H(d,"Trend lines",r.at,new D.eFL(r),I.xm))
v=A.a([A.A(v,B.l,q,B.e,B.h,0,q,q),B.S,new D.adD(x,d,w,r.at,D.f4(J.t(e,"price")),q)],o)
if(r.at){s=A.a([r.ayl(d,B.bA,"Fast line (45 min)"),r.ayl(d,B.b2,"Slow line (1 h 45 min)")],o)
if(w!=null)s.push(r.ayl(d,F.uF,"Your pretend buy"))
B.d.u(v,A.a([B.P,A.bZ(B.fT,s,B.br,q,4,14)],o))}return r.aAv(d,A.x(v,B.l,q,B.e,B.h,0,B.p),B.wV)},
cJB(d,a0,a1,a2){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i=J.a2(a0),h=D.h7(i.h(a0,"chart")).h(0,"trend"),g=J.k(h==null?"unknown":h),f=D.h7(J.t(a2,"state")),e=J.z(f.h(0,"enabled"),!0)&&!J.z(f.h(0,"brakePaused"),!0)
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
p=i}}i=A.n(22)
h=d.a
o=A.a([s.j(h?0.16:0.22),s.j(0.04)],y.O)
n=A.K(s.j(0.35),B.r,1)
m=A.n(14)
m=A.p(j,A.W(w,B.c,j,j,j,j),B.f,j,j,new A.o(s,j,j,m,j,j,B.m),j,44,j,j,j,j,j,44)
l=A.c(v,j,j,j,j,j,j,A.l(j,j,h?C.dE:B.c,j,j,j,j,j,j,j,j,16,j,j,B.u,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)
k=y.p
return A.p(j,A.A(A.a([m,B.bb,A.E(A.x(A.a([l,B.bC,A.c(p,j,j,j,j,j,j,A.l(j,j,h?C.dj:C.dk,j,j,j,j,j,j,j,j,12.5,j,j,j,j,1.3,!0,j,j,j,j,j,j,j,j),j,j,j)],k),B.B,j,B.e,B.h,0,B.p),1)],k),B.l,j,B.e,B.h,0,j,j),B.f,j,j,new A.o(j,j,n,i,j,new A.a7(B.a5,B.a9,B.x,o,j,j),B.m),j,j,j,B.e9,B.bG,j,j,j)},
bHP(a0,a1,a2,a3){var x,w,v,u,t,s,r,q,p,o,n,m=this,l=null,k="equity",j=J.a2(a1),i=D.h7(j.h(a1,"today")),h=D.h7(j.h(a1,"record")),g=D.h7(j.h(a1,"ticket")),f=h.h(0,"pnlSum")!=null?D.f4(h.h(0,"pnlSum")):D.f4(a2.h(0,"totalPnl")),e=D.f4(i.h(0,"day_pnl")),d=y.f.b(a2.h(0,"shadow"))?D.h7(a2.h(0,"shadow")):l
j=d!=null
if(j){x=D.f4(J.t(B.d.dC(D.fAy(a3),new D.eFC(d),new D.eFD()),"price"))
w=x>0?D.f4(d.h(0,"qty"))*(x-D.f4(d.h(0,"entryPrice"))):0}else w=0
v=D.f4(a3.h(0,k))
u=f+w
t=A.n(26)
s=A.a([new A.aa(0,B.H,B.i0.j(0.3),B.eT,24)],y.V)
r=y.p
q=A.A(A.a([C.h4j,B.aY,A.p(l,C.h3B,B.f,l,l,new A.o(B.c.j(0.14),l,l,A.n(999),l,l,B.m),l,l,l,l,B.fD,l,l,l)],r),B.l,l,B.e,B.h,0,l,l)
q=A.a([q,B.at,new A.dm(B.dx,B.a5,B.f,A.c(a3.h(0,k)==null?"\u2014":D.ij(v+f+w,!0,!1),l,l,l,l,l,l,C.fF0,l,l,l),l)],r)
if(a3.h(0,k)!=null){p=u>=0?C.arh:B.Qb
o=u>0
if(o)n=C.dS
else n=u<0?C.eF:B.ab
n=A.W(p,n,l,l,l,l)
p=D.ij(u,!0,!0)
j=j?" (incl. the open one)":""
if(o)o=C.dS
else o=u<0?C.eF:B.ab
q.push(A.A(A.a([n,A.c(p+" from pretend trades"+j,l,l,l,l,l,l,A.l(l,l,o,l,l,l,l,l,l,l,l,12.5,l,l,B.F,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)],r),B.l,l,B.e,B.h,0,l,l))}q.push(B.bC)
q.push(A.c("Alpaca paper account "+D.ij(v,!0,!1)+" (unchanged, Version 1 sends no orders) \xb7 $"+B.i.aa(D.f4(g.h(0,"amount")),0)+" a trade",l,l,l,l,l,l,X.LF,l,l,l))
q.push(B.aA)
j=D.ij(e,!0,!0)
if(e>0)p=C.dS
else p=e<0?C.eF:B.c
p=A.E(m.P4("Today",j,p),1)
j=D.ij(f,!0,!0)
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
return A.p(l,A.x(q,B.B,l,B.e,B.h,0,B.p),B.f,l,l,new A.o(l,l,l,t,s,C.caA,B.m),l,l,l,B.e9,B.fc,l,l,l)},
P4(d,e,f){var x=null,w=B.c.j(0.1),v=A.n(14)
return A.p(x,A.x(A.a([A.c(d,x,1,B.a2,x,x,x,B.X4,x,x,x),B.bC,new A.dm(B.dx,B.a5,B.f,A.c(e,x,x,x,x,x,x,A.l(x,x,f,x,x,x,x,x,x,x,x,15,x,x,B.F,x,x,!0,x,x,x,x,x,x,x,x),x,x,x),x)],y.p),B.B,x,B.e,B.h,0,B.p),B.f,x,x,new A.o(w,x,x,v,x,x,B.m),x,x,x,x,B.ank,x,x,x)},
crs(a1,a2,a3){var x,w,v,u,t,s,r,q,p,o=this,n=null,m=D.f4(a2.h(0,"entryPrice")),l=D.f4(a2.h(0,"qty")),k=J.a2(a3),j=J.z(a2.h(0,"symbol"),k.h(a3,"asset"))?D.f4(k.h(a3,"price")):m,i=l*j,h=i-50,g=m===0?0:(j-m)/m*100,f=h>=0,e=m*0.985,d=m*1.03,a0=B.i.D((j-e)/(d-e),0,1)
k=a1.a
x=y.p
w=A.A(A.a([A.c("Your pretend position",n,n,n,n,n,n,A.l(n,n,k?C.dE:B.c,n,n,n,n,n,n,n,n,16,n,n,B.F,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),B.aY,o.a0M("OPEN",C.dS)],x),B.l,n,B.e,B.h,0,n,n)
v=D.ij(h,!0,!0)
v=A.c(v,n,n,n,n,n,n,A.l(n,n,f?C.dS:C.eF,n,n,n,n,n,n,n,n,34,n,n,B.F,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
u=g>=0?"+":""
t=B.i.aa(g,2)
v=A.A(A.a([v,B.aa,new A.D(B.eK,A.c(u+t+"%",n,n,n,n,n,n,A.l(n,n,f?C.dS:C.eF,n,n,n,n,n,n,n,n,n,n,n,B.F,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),n)],x),B.dJ,n,B.e,B.h,0,n,n)
u=f?"You would be winning right now":"You would be losing right now"
u=A.c(u,n,n,n,n,n,n,A.l(n,n,k?C.dj:C.dk,n,n,n,n,n,n,n,n,12.5,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
t=A.E(o.aAx(a1,"You put in",D.ij(50,!0,!1)),1)
s=D.ij(i,!0,!1)
t=A.A(A.a([t,B.aa,A.E(o.b38(a1,"Worth now",s,f?C.dS:C.eF),1)],x),B.l,n,B.e,B.h,0,n,n)
s=A.E(o.aAx(a1,"Bought at",D.ij(m,!0,!1)),1)
s=A.A(A.a([s,B.aa,A.E(o.aAx(a1,"Shares",B.i.aa(l,l<0.01?6:4)+" "+A.v(a2.h(0,"symbol"))),1)],x),B.l,n,B.e,B.h,0,n,n)
r=A.cf(new D.eFZ(a1,a0))
q=A.A(A.a([A.E(A.c("Stop loss\n"+D.ij(e,!0,!1)+" \xb7 -$0.75",n,n,n,n,n,n,C.fKW,n,n,n),1),A.E(A.c("Take profit\n"+D.ij(d,!0,!1)+" \xb7 +$1.50",n,n,n,n,n,n,C.fJw,B.e6,n,n),1)],x),B.l,n,B.e,B.h,0,n,n)
p=D.igJ(a2.h(0,"entryAt"))
return o.a0K(a1,A.x(A.a([w,B.af,v,u,B.aA,t,B.P,s,B.aO,r,B.ak,q,B.ak,A.c("Bought "+p,n,n,n,n,n,n,A.l(n,n,k?C.dj:C.dk,n,n,n,n,n,n,n,n,11.5,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],x),B.B,n,B.e,B.h,0,B.p))},
aEy(d,e,f,g,h,i){var x,w,v=null,u=d.a,t=u?C.Hb:C.Hc,s=A.n(16),r=A.c(e,v,v,v,v,v,v,A.l(v,v,u?C.dj:C.dk,v,v,v,v,v,v,v,v,11.5,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
if(h==null)x=u?C.dE:B.c
else x=h
w=y.p
w=A.a([A.E(A.x(A.a([r,B.bC,A.c(f,v,v,v,v,v,v,A.l(v,v,x,v,v,v,v,v,v,v,v,g?24:17,v,v,B.F,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],w),B.B,v,B.e,B.h,0,B.p),1)],w)
if(i!=null)w.push(A.c(i,v,v,v,v,v,v,A.l(v,v,u?C.dj:C.dk,v,v,v,v,v,v,v,v,11.5,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v))
return A.p(v,A.A(w,B.l,v,B.e,B.h,0,v,v),B.f,v,v,new A.o(t,v,v,s,v,v,B.m),v,v,v,B.jg,B.eX,v,v,v)},
cHU(d,e,f,g,h){return this.aEy(d,e,f,g,null,h)},
bc2(d,e,f,g,h){return this.aEy(d,e,f,!1,g,h)},
cHT(d,e,f,g){return this.aEy(d,e,f,!1,null,g)},
cg6(d,e){var x,w,v,u=this,t=null,s=J.z(e.h(0,"enabled"),!0)&&!J.z(e.h(0,"brakePaused"),!0),r=s?C.eF:C.dS
r=A.bp(r,t,t,t,t,t,t,t,new A.ba(A.n(999),B.a1),t,t,t)
x=u.r?t:new D.eFM(u,s)
w=A.W(s?B.xn:B.fZ,t,t,t,t,t)
r=A.E(new A.a6(t,52,A.dc(w,t,A.c(s?"Stop agent":"Start agent",t,t,t,t,t,t,B.nr,t,t,t),x,r),t),3)
x=d.a
w=x?C.dE:B.c
v=x?C.qC:C.qz
x=x?B.c.j(0.92):C.kY
v=A.di(t,t,x,t,t,t,t,t,t,w,t,t,t,t,new A.ba(A.n(999),B.a1),new A.ax(v,1.5,B.r,-1),t,t,t,t)
x=u.r
w=x?t:u.gcyU()
return new A.D(B.e9,A.A(A.a([r,B.ar,A.E(new A.a6(t,52,A.en(x?B.Lg:C.c58,t,C.he0,w,v),t),2)],y.p),B.l,t,B.e,B.h,0,t,t),t)},
cJh(a7,a8){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=null,a5="outValue",a6=y.g.a(J.t(a8,"trades"))
if(a6==null)a6=B.cb
x=y.f
a6=J.d_(a6,x)
a6=A.cE(a6,new D.eGe(),a6.$ti.k("M.E"),y.P)
w=A.B(a6,A.a5(a6).k("M.E"))
a6=a7.a
v=y.p
u=A.a([A.c("Pretend trades",a4,a4,a4,a4,a4,a4,A.l(a4,a4,a6?C.dE:B.c,a4,a4,a4,a4,a4,a4,a4,a4,16,a4,a4,B.F,a4,a4,!0,a4,a4,a4,a4,a4,a4,a4,a4),a4,a4,a4),B.P],v)
if(w.length===0){t=A.W(B.h_,a6?C.dj:C.dk,a4,a4,a4,a4)
u.push(new A.D(B.cm,A.A(A.a([t,B.ar,A.E(A.c("No trades yet. Each buy shows the $50 put in, and each sell shows what came back and the win or loss.",a4,a4,a4,a4,a4,a4,A.l(a4,a4,a6?C.dj:C.dk,a4,a4,a4,a4,a4,a4,a4,a4,12.5,a4,a4,a4,a4,1.3,!0,a4,a4,a4,a4,a4,a4,a4,a4),a4,a4,a4),1)],v),B.l,a4,B.e,B.h,0,a4,a4),a4))}for(t=w.length,s=y.N,r=y.z,q=0;q<w.length;w.length===t||(0,A.I)(w),++q){p=w[q]
o=J.a2(p)
n=J.z(o.h(p,"decision"),"would buy")
m=o.h(p,"details")
l=x.b(m)?A.a1(m,s,r):A.T(s,r)
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
m=a6?C.qC:C.qz
e=f.j(0.14)
d=new A.aP(13,13)
e=A.p(a4,A.W(n?B.vu:B.tC,f,a4,a4,a4,20),B.f,a4,a4,new A.o(e,a4,a4,new A.bb(d,d,d,d),a4,a4,B.m),a4,40,a4,a4,a4,a4,a4,40)
d=n?"Bought":"Sold"
a0=a6?C.dE:B.c
d=A.c(d+" "+k,a4,a4,a4,a4,a4,a4,new A.H(!0,a0,a4,a4,a4,a4,14,B.F,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4),a4,a4,a4)
if(n){if(i===0)a0=""
else a0=B.i.aa(i,i<0.01?6:4)+" at "
a1=o.h(p,"price")
if(!(typeof a1=="number")){a1=A.cG(A.v(a1==null?"":a1))
if(a1==null)a1=0}a1=a0+D.ij(a1,!0,!1)
a0=a1}else{a0=o.h(p,"price")
if(!(typeof a0=="number")){a0=A.cG(A.v(a0==null?"":a0))
if(a0==null)a0=0}a0=D.ij(a0,!0,!1)
a1=o.h(p,"reason")
a1=J.k(a1==null?"":a1)
a2=B.a.ce(a1,"(")
a0="at "+a0+" \xb7 "+B.a.i(a2>0?B.a.aw(a1,0,a2):a1)}a1=a6?C.dj:C.dk
a0=A.c(a0,a4,1,B.a2,a4,a4,a4,new A.H(!0,a1,a4,a4,a4,a4,11.5,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4),a4,a4,a4)
o=o.h(p,"et_time")
o=J.k(o==null?"":o)
a1=a6?C.dj:C.dk
o=A.x(A.a([d,B.bC,a0,A.c(o,a4,a4,a4,a4,a4,a4,new A.H(!0,a1,a4,a4,a4,a4,10.5,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4),a4,a4,a4)],v),B.B,a4,B.e,B.h,0,B.p)
if(n)d="-"+D.ij(j,!0,!1)
else{if(l.h(0,a5)==null)d=j+h
else{d=l.h(0,a5)
if(!(typeof d=="number")){d=A.cG(A.v(d==null?"":d))
if(d==null)d=0}}d="+"+D.ij(d,!0,!1)}a0=a6?C.dE:B.c
d=A.a([A.c(d,a4,a4,a4,a4,a4,a4,new A.H(!0,a0,a4,a4,a4,a4,14,B.F,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4),a4,a4,a4)],v)
if(!n){a0=D.ij(h,!0,!0)
if(l.h(0,"pct")==null)a1=""
else{a1=l.h(0,"pct")
if(!(typeof a1=="number")){a1=A.cG(A.v(a1==null?"":a1))
if(a1==null)a1=0}a1=a1>=0?"+":""
a3=l.h(0,"pct")
if(!(typeof a3=="number")){a3=A.cG(A.v(a3==null?"":a3))
if(a3==null)a3=0}a3=" ("+a1+B.i.aa(a3,2)+"%)"
a1=a3}a3=g?C.dS:C.eF
d.push(A.c(a0+a1,a4,a4,a4,a4,a4,a4,new A.H(!0,a3,a4,a4,a4,a4,12,B.F,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4),a4,a4,a4))}if(n){a0=a6?C.dj:C.dk
d.push(A.c("put in",a4,a4,a4,a4,a4,a4,new A.H(!0,a0,a4,a4,a4,a4,11,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4),a4,a4,a4))}u.push(A.p(a4,new A.c3(B.aL,B.e,B.h,B.l,a4,B.p,a4,0,A.a([e,B.bb,new A.by(1,B.ba,o,a4),B.aa,A.x(d,B.dJ,a4,B.e,B.h,0,B.p)],v),a4),B.f,a4,a4,new A.o(a4,a4,new A.bE(B.a1,B.a1,new A.ax(m,1,B.r,-1),B.a1),a4,a4,a4,B.m),a4,a4,a4,a4,B.jU,a4,a4,a4))}return this.a0K(a7,A.x(u,B.B,a4,B.e,B.h,0,B.p))},
bEO(d){var x,w,v,u=this,t=null,s=u.x,r=u.e
r=s?r:A.cS(r,0,A.dA(8,"count",y.S),A.U(r).c).dn(0)
s=d.a
x=A.c("Agent activity",t,t,t,t,t,t,A.l(t,t,s?C.dE:B.c,t,t,t,t,t,t,t,t,16,t,t,B.F,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)
w=y.p
w=A.a([A.A(A.a([x,B.aY,A.c("newest first",t,t,t,t,t,t,A.l(t,t,s?C.dj:C.dk,t,t,t,t,t,t,t,t,11,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],w),B.l,t,B.e,B.h,0,t,t),B.ak],w)
if(u.e.length===0)w.push(new A.D(B.f8,A.c("Nothing yet. A new line appears with every 15-minute check.",t,t,t,t,t,t,A.l(t,t,s?C.dj:C.dk,t,t,t,t,t,t,t,t,12.5,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),t))
for(s=r.length,v=0;v<r.length;r.length===s||(0,A.I)(r),++v)w.push(u.c7c(d,r[v]))
if(u.e.length>8){if(u.x)s=u.w?"Show older":"That is everything"
else s="Show all"
w.push(A.at(A.bO(!1,A.c(s,t,t,t,t,t,t,t,t,t,t),t,t,!0,t,t,t,new D.eFB(u),t,t),t,t,t))}return u.a0K(d,A.x(w,B.B,t,B.e,B.h,0,B.p))},
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
w=A.p(s,s,B.f,s,s,new A.o(p,s,s,s,s,s,B.a6),s,8,s,G.a1x,s,s,s,8)
v=o==="hold"?"Still holding":D.hEv(o)
u=y.p
p=A.a([A.c(v,s,s,s,s,s,s,A.l(s,s,p,s,s,s,s,s,s,s,s,12.5,s,s,B.F,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],u)
if(J.z(D.h7(q.h(e,"details")).h(0,"by"),"cron"))B.d.u(p,A.a([B.bf,A.c("automatic",s,s,s,s,s,s,A.l(s,s,d.a?C.dj:C.dk,s,s,s,s,s,s,s,s,10,s,s,B.O,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],u))
p.push(B.aY)
v=q.h(e,"et_time")
v=D.inb(J.k(v==null?"":v))
t=d.a
p.push(A.c(v,s,s,s,s,s,s,A.l(s,s,t?C.dj:C.dk,s,s,s,s,s,s,s,s,10.5,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s))
p=A.A(p,B.l,s,B.e,B.h,0,s,s)
v=q.h(e,"reason")
v=D.hEv(J.k(v==null?"":v))
p=A.a([p,A.c(v,s,s,s,s,s,s,A.l(s,s,t?C.dE:B.c,s,s,s,s,s,s,s,s,12.5,s,s,s,s,1.3,!0,s,s,s,s,s,s,s,s),s,s,s)],u)
if(q.h(e,r)!=null||x){v=A.a([],y.s)
if(q.h(e,"asset")!=null&&q.h(e,r)!=null)v.push(A.v(q.h(e,"asset"))+" "+D.ij(D.f4(q.h(e,r)),!0,!1))
if(x)v.push("fast "+B.i.aa(D.f4(q.h(e,"fast_ma")),2)+" \xb7 slow "+B.i.aa(D.f4(q.h(e,"slow_ma")),2))
q=B.d.aL(v,"  \xb7  ")
p.push(A.c(q,s,s,s,s,s,s,A.l(s,s,t?C.dj:C.dk,s,s,s,s,s,s,s,s,10.5,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s))}return new A.D(V.HB,A.A(A.a([w,B.ar,A.E(A.x(p,B.B,s,B.e,B.h,0,B.p),1)],u),B.B,s,B.e,B.h,0,s,s),s)},
cxR(d,e){var x,w,v,u,t,s,r,q,p,o,n,m=null,l=this.c
l.toString
l=A.Q(l).bgi(B.L)
x=d.a
w=x?C.dE:B.c
v=x?C.dj:C.dk
u=A.W(C.bVP,B.b2,m,m,m,m)
t=y.p
s=A.A(A.a([new A.d4(1,B.cg,A.c("The rules it follows",m,m,m,m,m,m,A.l(m,m,x?C.dE:B.c,m,m,m,m,m,m,m,m,14.5,m,m,B.F,m,m,!0,m,m,m,m,m,m,m,m),m,m,m),m),B.aa,A.aA(m,A.p(m,C.fod,B.f,m,m,new A.o(m,m,m,A.n(999),m,G.tL,B.m),m,m,m,m,B.hl,m,m,m),B.y,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,this.gcls(),m,m,m,m,m,m,!1,B.a4)],t),B.l,m,B.e,B.h,0,m,m)
r=A.c("Read-only, set in the code",m,m,m,m,m,m,A.l(m,m,x?C.dj:C.dk,m,m,m,m,m,m,m,m,11.5,m,m,m,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)
q=A.a([],t)
p=y.g.a(J.t(e,"rules"))
p=J.aS(p==null?B.cb:p)
while(p.C()){o=J.k(p.gP(p))
n=x?C.dE:B.c
q.push(new A.D(C.bEx,new A.c3(B.aL,B.e,B.h,B.B,m,B.p,m,0,A.a([C.eCV,B.aa,new A.by(1,B.ba,A.c(o,m,m,m,m,m,m,new A.H(!0,n,m,m,m,m,12.5,m,m,m,m,m,1.35,m,m,m,m,m,m,m,m,m,m,m,m,m),m,m,m),m)],t),m),m))}return this.aAv(d,new A.pa(l,A.aG(!1,B.a3,!0,m,R.htt(m,q,W.anP,m,v,w,!1,u,m,r,B.hc,s),B.f,m,0,m,m,m,m,m,B.ie),m),B.ag)},
aAv(d,e,f){var x=null,w=d.a,v=w?B.c.j(0.92):C.kY,u=A.n(24)
return A.p(x,e,B.f,x,x,new A.o(v,x,A.K(w?B.c:C.uR,B.r,1),u,A.a([new A.aa(0,B.H,d.ga9z(),B.dp,24)],y.V),x,B.m),x,x,x,B.e9,f,x,x,x)},
a0K(d,e){return this.aAv(d,e,B.bQ)},
aaC(d,e,f){var x=null,w=f.j(0.12),v=A.n(16),u=A.K(f.j(0.45),B.r,1),t=A.W(B.a4m,f,x,x,x,20)
return A.p(x,A.A(A.a([t,B.ar,A.E(A.c(e,x,x,x,x,x,x,A.l(x,x,d.a?C.dE:B.c,x,x,x,x,x,x,x,x,12.5,x,x,x,x,1.35,!0,x,x,x,x,x,x,x,x),x,x,x),1)],y.p),B.l,x,B.e,B.h,0,x,x),B.f,x,x,new A.o(w,x,u,v,x,x,B.m),x,x,x,B.e9,B.bl,x,x,x)},
b35(d,e,f){var x=null,w=d.a,v=w?B.c.j(0.92):C.kY,u=A.K(w?B.c:C.uR,B.r,1)
return A.aG(!1,B.a3,!0,x,A.aM(!1,x,!0,A.p(x,A.W(e,w?C.dE:B.c,x,x,x,18),B.f,x,x,new A.o(x,x,u,x,x,x,B.a6),x,40,x,x,x,x,x,40),B.cK,!0,x,x,x,x,x,x,x,x,x,x,x,f,x,x,x,x,x,x,x),B.f,v,0,x,x,B.cK,x,x,B.ai)},
b8H(d,e,f,g,h){var x,w,v,u,t,s,r,q=null
if(f){x=d.a
w=x?C.l_:B.c
v=w
w=x
x=v}else{x=d.a
w=x?C.H1:C.GR
v=w
w=x
x=v}u=A.n(999)
t=y.p
s=A.a([],t)
if(h!=null){if(f)r=w?B.c:C.l_
else r=w?C.dj:C.dk
B.d.u(s,A.a([A.W(h,r,q,q,q,14),B.d8],t))}if(f)w=w?B.c:C.l_
else w=w?C.dj:C.dk
s.push(A.c(e,q,q,q,q,q,q,A.l(q,q,w,q,q,q,q,q,q,q,q,11.5,q,q,B.O,q,q,!0,q,q,q,q,q,q,q,q),q,q,q))
return A.aA(q,A.cU(q,A.A(s,B.l,q,B.e,B.M,0,q,q),q,q,B.b_,new A.o(x,q,q,u,q,q,B.m),B.eJ,q,q,q,q,Z.a1C,q,q,q),B.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,g,q,q,q,q,q,q,!1,B.a4)},
czU(d,e,f,g){return this.b8H(d,e,f,g,null)},
ayl(d,e,f){var x=null,w=A.p(x,x,B.f,x,x,new A.o(e,x,x,A.n(2),x,x,B.m),x,3,x,x,x,x,x,14)
return A.A(A.a([w,B.e5,A.c(f,x,x,x,x,x,x,A.l(x,x,d.a?C.dj:C.dk,x,x,x,x,x,x,x,x,11,x,x,x,x,x,!0,x,x,x,x,x,x,x,x),x,x,x)],y.p),B.l,x,B.e,B.M,0,x,x)},
a0M(d,e){var x=null,w=e.j(0.14),v=A.n(999)
return A.p(x,A.c(d,x,x,x,x,x,x,A.l(x,x,e,x,x,x,x,x,x,x,x,10,x,x,B.u,x,x,!0,x,0.6,x,x,x,x,x,x),x,x,x),B.f,x,x,new A.o(w,x,x,v,x,x,B.m),x,x,x,x,B.fD,x,x,x)},
b38(d,e,f,g){var x=null,w=d.a,v=w?C.Hb:C.Hc,u=A.n(16),t=A.c(e,x,x,x,x,x,x,A.l(x,x,w?C.dj:C.dk,x,x,x,x,x,x,x,x,11.5,x,x,x,x,x,!0,x,x,x,x,x,x,x,x),x,x,x)
if(g==null)w=w?C.dE:B.c
else w=g
return A.p(x,A.x(A.a([t,B.cM,new A.dm(B.dx,B.a5,B.f,A.c(f,x,x,x,x,x,x,A.l(x,x,w,x,x,x,x,x,x,x,x,16,x,x,B.F,x,x,!0,x,x,x,x,x,x,x,x),x,x,x),x)],y.p),B.B,x,B.e,B.h,0,B.p),B.f,x,x,new A.o(v,x,x,u,x,x,B.m),x,x,x,x,B.bl,x,x,x)},
aAx(d,e,f){return this.b38(d,e,f,null)},
cMg(d){var x=A.v(d==null?"":d),w=A.bi(x.length>=19?B.a.aw(x,0,19):"")
if(w==null)return""
return" \xb7 opens "+B.Tc[A.lS(w)-1]+" "+D.aQD(w)+" ET"}}
D.adD.prototype={
R(){return new D.bea()}}
D.bea.prototype={
aAw(d,e){var x=this,w=x.a.c.length,v=B.o.D(B.i.be(d.a/e*w),0,w-1)
if(v!==x.d)x.l(new D.cWA(x,v))},
B(d){return A.cf(new D.cWJ(this))}}
D.beb.prototype={
a2(c9,d0){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2=this,c3=null,c4={},c5=d0.b,c6=c5-18,c7=y.n,c8=A.a([],c7)
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
c4.a=B.d.eI(c8,B.pq)
p=c4.b=B.d.eI(c8,B.or)
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
k=new D.cWK(l)
j=new D.cWM(c4,c6)
$.S()
i=A.L()
q=c2.d.a
i.r=(q?C.qC:C.qz).j(0.7).gp(0)
i.c=1
for(h=1;h<=3;++h){g=c6*h/4
for(f=0;f<c8;f+=6)c9.ah(new A.r(f,g),new A.r(f+2,g),i)}if(w){w=new D.cWL(c2,m,k,j,c9)
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
a5=a0==null?0:a0}a6=a3>=a1?C.dS:E.jQ
a7=d&&e!==h
$.S()
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
b0=A.bw(new A.a3(k.$1(h)-w,b1,k.$1(h)+w,Math.max(b2,b1+1.5)),B.hC)
a8.b=B.Q
c9.aq(b0,a8)}if(u)c2.aUh(c9,j.$1(c7),c8,F.uF,"Buy "+D.ij(c7,!0,!1),!0)
if(r){c7=j.$1(s)
c2.bOZ(c9,c7,c8,(q?C.dE:B.c).j(0.55),D.ij(s,!0,!1))}b3=A.fv(c3,B.cw,c3,c3,c3,c3,B.a7,B.bW,c3,B.dG,B.bX)
for(c7=[0,m/3|0,B.o.ap(2*m,3),m-1],w=c7.length,c5-=13,u=c2.b,v=0;v<w;++v){h=c7[v]
s=J.t(x[h],"t")
b4=A.bi(A.v(s==null?"":s))
if(b4==null)continue
s=D.aQD(D.bFd(b4))
r=q?C.dj:C.dk
b3.sb1(0,new A.er(s,c3,c3,B.cO,c3,c3,c3,c3,c3,c3,new A.H(!0,r,c3,u,c3,c3,10,c3,c3,c3,c3,c3,c3,c3,c3,c3,c3,c3,c3,c3,c3,c3,c3,c3,c3,c3)))
b3.eb()
s=k.$1(h)
r=b3.b.c
b3.a2(c9,new A.r(B.i.D(s-r/2,0,c8-r),c5))}if(d&&e<m){t=x[e]
f=k.$1(e)
c5=J.a2(t)
b5=j.$1(D.f4(c5.h(t,"c")))
$.S()
b6=A.L()
b6.r=(q?C.dE:B.c).j(0.5).gp(0)
b6.c=1
for(b7=0;b7<c6;b7+=6)c9.ah(new A.r(f,b7),new A.r(f,b7+3),b6)
$.S()
c7=A.L()
c7.r=(q?B.c.j(0.92):C.kY).gp(0)
c9.O(new A.r(f,b5),6,c7)
c7=A.L()
c7.r=(q?C.dE:B.c).gp(0)
c7.b=B.ac
c7.c=2.5
c9.O(new A.r(f,b5),6,c7)
c7=c5.h(t,"t")
b4=A.bi(A.v(c7==null?"":c7))
c7=b4==null?"":D.aQD(D.bFd(b4))+" ET\n"
c5=D.ij(D.f4(c5.h(t,"c")),!0,!1)
b3.sb1(0,A.cT(c3,c3,c3,c3,c3,c3,c3,c3,c3,A.l(c3,c3,q?B.c:C.l_,c3,c3,c3,c3,c3,u,c3,c3,11.5,c3,c3,B.F,c3,1.3,!0,c3,c3,c3,c3,c3,c3,c3,c3),c7+c5))
b3.sDb(0,B.K)
b3.eb()
c5=b3.b
b8=c5.c+18
c5=c5.a.c
b9=c5.gb8(c5)+10
c0=B.i.D(f-b8/2,0,c8-b8)
c1=Math.max(0,b5-b9-14)
c8=A.bw(new A.a3(c0,c1,c0+b8,c1+b9),B.hS)
c5=A.L()
c5.r=(q?C.l_:B.c).gp(0)
c9.aq(c8,c5)
b3.a2(c9,new A.r(c0+9,c1+5))}},
aUh(d,e,f,g,h,i){var x,w,v,u,t,s,r,q,p,o,n=null
$.S()
x=A.L()
x.r=g.gp(0)
x.c=1.2
for(w=0;w<f;w+=7)d.ah(new A.r(w,e),new A.r(w+3.5,e),x)
v=A.fv(n,B.cw,n,n,n,A.cT(n,n,n,n,n,n,n,n,n,A.l(n,n,B.c,n,n,n,n,n,this.b,n,n,10,n,n,B.F,n,n,!0,n,n,n,n,n,n,n,n),h),B.a7,B.bW,n,B.dG,B.bX)
v.eb()
u=v.b
t=u.c+12
u=u.a.c
s=u.gb8(u)+6
r=i?0:f-t
u=e-s/2
q=A.bw(new A.a3(r,u,r+t,u+s),B.q9)
$.S()
p=A.L()
if(i)o=F.uF
else o=this.d.a?C.l_:B.c
p.r=o.gp(0)
d.aq(q,p)
v.a2(d,new A.r(r+6,u+3))},
bOZ(d,e,f,g,h){return this.aUh(d,e,f,g,h,!1)},
aC(d){var x=this
return d.c!==x.c||d.w!=x.w||d.f!==x.f||d.e!=x.e||d.r!==x.r||d.d.a!==x.d.a}}
D.aKz.prototype={
a2(d,e){var x,w,v,u,t,s,r,q,p,o,n=null,m=this.b
if(m.length<2)return
x=A.U(m).k("O<1,G>")
w=A.B(new A.O(m,new D.fgA(),x),x.k("aj.E"))
v=B.d.eI(w,B.pq)
u=B.d.eI(w,B.or)-v
if(u<1e-9)u=1
m=$.S()
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
t.ac()}}o=A.zO(t)
o.E(new A.aq(m,s))
o.E(new A.aq(0,s))
o.E(new A.bz())
$.S()
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
D.z1.prototype={}
D.a1v.prototype={
ga9z(){return this.a?B.ce.j(0.08):B.v.j(0.35)}}
D.aCq.prototype={
R(){return new D.bhH()}}
D.bhH.prototype={
a_(){this.a4()
this.d=A.d1(B.fB,new D.dhU(this))},
t(){var x=this.d
if(x!=null)x.a1(0)
this.a3()},
B(d){var x=null,w=this.a.c*60,v=B.o.F(B.o.ap(new A.V(Date.now(),0,!1).ab().a,1000),w),u=v<15,t=w-v,s=u?"ENTER NOW":"Enter in "+B.o.ap(t,60)+":"+B.a.b0(B.o.v(B.o.F(t,60)),2,"0"),r=u?B.c:B.c.j(0.18),q=A.n(999),p=u?B.he:B.ne
p=A.W(p,u?B.v:B.c,x,x,x,20)
return A.cU(x,A.A(A.a([p,B.bf,A.c(s,x,x,x,x,x,x,A.l(x,x,u?B.v:B.c,x,x,x,x,x,x,x,H.Ji,22,x,x,B.u,x,x,!0,x,x,x,x,x,x,x,x),x,x,x)],y.p),B.l,x,B.e,B.M,0,x,x),x,x,B.b_,new A.o(r,x,x,q,x,x,B.m),B.i9,x,x,x,x,B.HO,x,x,x)}}
D.cC.prototype={}
D.uu.prototype={}
D.XD.prototype={
R(){var x,w,v,u,t=null,s=y.N,r=y.z
r=A.J(["done",A.a([],y.s),"lessons",A.T(s,r)],s,r)
x=$.hjJ
w=$.az()
v=A.mi(0,t,t)
u=A.a([],y.t)
return new D.aHg(r,new A.au(new A.bd(x,B.b6,B.aP),w),v,u,new A.au(B.ax,w),A.T(s,s),A.T(s,y.R),B.Z,t,t)}}
D.a_y.prototype={}
D.aHg.prototype={
gLf(){var x,w=this,v=w.d
if(v===$){w.a.toString
x=A.acr(null,0,3,w)
w.d!==$&&A.bF()
w.d=x
v=x}return v},
gJZ(){var x=y.g.a(this.x.h(0,"done"))
if(x==null)x=B.cb
return J.b8(x,new D.eGq(),y.N).fC(0)},
a_(){var x,w,v,u=this
u.a4()
x=u.e=u.a.c
w=x==null
u.y=!w
u.ay=D.eHc(w?null:J.t(x,"fx"))
x=u.a.c
v=D.eHc(x==null?null:J.t(x,"markets"))
if(v.length!==0)u.f=v
u.r=new A.V(Date.now(),0,!1)
u.gLf().aU(0,new D.eHi(u))
$.aLT=$.aLT+1
u.at.aU(0,new D.eHj(u))
if($.Dy.length!==0||$.ah5)u.aCR()
if(!u.a.d){u.a0L()
u.Rc()
A.SX().bE(new D.eHk(u),y.H)
u.w=A.d1(B.hb,new D.eHl(u))}},
t(){var x,w=this,v=w.w
if(v!=null)v.a1(0)
v=w.as
if(v!=null)v.a1(0)
w.gLf().t()
v=w.cy
x=$.az()
v.V$=x
v.W$=0
v=w.at
v.V$=x
v.W$=0
w.ax.t()
D.hDu()
w.bBp()},
a0L(){return this.c7_()},
c7_(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g
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
h.a=A.J(["done",p,"lessons",A.T(o,n)],o,n)}u=2
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
return A.b(A.h0(A.J(["action","paLearnGet"],o,n),!1,!1,!1,!1,B.hb),$async$a0L)
case 8:l=e
if(s.c==null){x=1
break}k=l==null?null:J.t(l,"progress")
j=y.f
if(j.b(k)){l.toString
i=A.a1(j.a(J.t(l,"progress")),o,n)}else i=null
s.l(new D.eGL(h,s,l,i))
if(i==null&&h.a!=null)s.aCH()
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a0L,w)},
aCH(){var x=this.as
if(x!=null)x.a1(0)
this.as=A.cy(P.CW,new D.eGW(this))},
ae7(d){return this.c66(d)},
c66(d){var x=0,w=A.j(y.H),v=this,u,t,s
var $async$ae7=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=B.d.cw(C.E7,new D.eGt(v))
v.l(new D.eGu(v,d))
v.aCH()
u=B.d.cw(C.E7,new D.eGv(v))
x=!s&&u&&v.c!=null?2:3
break
case 2:t=v.c
t.toString
x=4
return A.b(A.ce(null,null,!0,null,new D.eGw(v),t,null,!0,!0,y.H),$async$ae7)
case 4:case 3:return A.h(null,w)}})
return A.i($async$ae7,w)},
Rc(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$Rc=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(A.h0(A.J(["action","paSignals"],y.N,y.z),!1,!1,!1,!1,B.CS),$async$Rc)
case 3:s=e
if(u.c==null||s==null||!J.z(J.t(s,"ok"),!0)){x=1
break}t=J.a2(s)
u.l(new D.eGV(u,D.eHc(t.h(s,"fx")),D.eHc(t.h(s,"markets")),s))
u.ch3()
case 1:return A.h(v,w)}})
return A.i($async$Rc,w)},
ch3(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g="decision",f=A.a([],y.s)
for(x=i.gaaj(),w=x.length,v=i.db,u=y.N,t=y.z,s=y.f,r=i.dx,q=0;q<x.length;x.length===w||(0,A.I)(x),++q){p=x[q]
o=J.a2(p)
n=J.k(o.h(p,"asset"))
o=o.h(p,"reading")
m=s.b(o)?A.a1(o,u,t):A.T(u,t)
l=B.d.q(C.aCc,m.h(0,g))
if(m.h(0,g)==null||J.z(m.h(0,g),"NO_DATA")||J.z(m.h(0,g),"CLOSED"))k="unknown"
else if(l){o=J.z(m.h(0,"dir"),"up")?"up":"down"
k=o}else k="no direction"
j=v.h(0,n)
if(j!=null&&j!==k&&k!=="unknown"&&j!=="unknown"){r.n(0,n,new A.bsL(new A.V(Date.now(),0,!1),j,k))
f.push(n+" now "+k.toUpperCase())}v.n(0,n,k)}r.bq(r,new D.eGM())
if(f.length!==0&&i.c!=null){i.l(new D.eGN())
x=i.c.L(y.q).f
u=A.cS(f,0,A.dA(3,"count",y.S),u).aL(0," \xb7 ")
w=f.length
w=w>3?" and "+(w-3)+" more":""
x.T(A.b2(h,h,h,B.i0,h,B.t,h,A.c("Signal changed: "+u+w,h,h,h,h,h,h,h,h,h,h),h,B.lw,h,h,h,h,h,h,h,h,h,h))}},
gaaj(){var x=A.B(this.gyB(),y.P)
B.d.u(x,this.ay)
return x},
gyB(){var x=this.f
if(x==null){x=this.e
x=D.fAy(D.h7(D.h7(x==null?null:J.t(x,"state")).h(0,"snapshot")))}return x},
gcEb(){var x=this.gyB(),w=A.U(x).k("X<1>"),v=A.B(new A.X(x,new D.eHa(),w),w.k("M.E"))
if(v.length===0)return this.gyB().length===0?null:B.d.gH(this.gyB())
B.d.b_(v,new D.eHb())
return B.d.gH(v)},
c6D(){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.e,i=D.h7(j==null?k:J.t(j,"state")),h=y.f.b(i.h(0,"shadow"))?D.h7(i.h(0,"shadow")):k
j=l.e
x=D.h7(j==null?k:J.t(j,"today"))
j=l.e
w=D.h7(j==null?k:J.t(j,"record"))
j=l.fr
if(!(j.length!==0)){j=l.e
j=j==null?k:J.t(j,"nowEt")
if(j==null)j="unknown"}j="LIVE DATA from the NGMY paper trading agent (Eastern Time now: "+A.v(j)+"):\n"
if(l.e!=null){v=J.z(i.h(0,"enabled"),!0)?"running":"stopped"
u=J.z(i.h(0,"brakePaused"),!0)?", paused by the 25 dollar brake":""
t=D.ij(D.f4(i.h(0,"totalPnl")),!0,!0)
s=D.ij(D.f4(x.h(0,"day_pnl")),!0,!0)
r=w.h(0,"wins")
r=A.v(r==null?0:r)
q=w.h(0,"losses")
j+="Agent: "+v+u+". Pretend P/L all time "+t+", today "+s+", wins "+r+", losses "+A.v(q==null?0:q)+".\n"}if(!(l.e==null))if(h!=null){p=D.f4(J.t(B.d.dC(l.gyB(),new D.eGz(h),new D.eGA()),"price"))
o=D.f4(h.h(0,"entryPrice"))
v=A.v(h.h(0,"symbol"))
u=B.i.aa(o,2)
t=B.i.aa(p,2)
j+="Open pretend trade: "+v+", $50 bought at "+u+", now "+t+" ("+A.v(o===0?0:B.i.aa((p-o)/o*100,2))+"%). Take profit at "+B.i.aa(o*1.03,2)+", stop loss at "+B.i.aa(o*0.985,2)+".\n"}else j+="No open pretend trade.\n"
n=new D.eGB()
j+="Agent markets (5-minute candles; fast line = 9-candle average, slow = 21-candle average; strength 0 bearish to 100 bullish):\n"
for(v=l.gyB(),u=v.length,m=0;m<v.length;v.length===u||(0,A.I)(v),++m)j+=A.v(n.$1(v[m]))+"\n"
v=l.ay
u=v.length
if(u!==0){j+="Forex pairs (real interbank prices, 1-minute candles, signals only; the agent does not trade them; OTC prices at brokers differ):\n"
for(m=0;m<v.length;v.length===u||(0,A.I)(v),++m)j+=A.v(n.$1(v[m]))+"\n"}return j.charCodeAt(0)==0?j:j},
JY(d){return this.bHj(d)},
bHj(d){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o,n,m,l,k
var $async$JY=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:k=B.a.i(d)
if(k.length===0||$.ah5){x=1
break}u.at.bN(0,B.ci)
u.l(new D.eGm(u,k))
u.aCR()
t=$.Dy.length
if(t>1){t=B.d.dt($.Dy,Math.max(0,t-9),t-1)
s=new A.O(t,new D.eGn(),A.U(t).k("O<1,m>")).aL(0,"\n")}else s=""
t=u.e
t=t==null?null:J.t(t,"rules")
y.g.a(t)
if(t==null)t=u.dy
r=y.N
q=J.b8(t,new D.eGo(),r).aL(0,"\n")
t=u.c6D()
p=s.length===0?"":"\nCONVERSATION SO FAR:\n"+s+"\n"
o=$.fn5
x=u.a.d?3:5
break
case 3:n="Preview mode: the tutor answers here using the live readings."
x=4
break
case 5:x=6
return A.b(A.h0(A.J(["action","chat","prompt",'You are the NGMY Signal Grid trading tutor. You teach a complete beginner how trading works, using the live market data and the rules of the NGMY paper trading agent below.\nHow to answer:\n- Plain, friendly, simple English. Short sentences. No jargon without explaining it. Usually under 170 words.\n- When the question is about a market or "right now", use the LIVE DATA and quote the real numbers (price, trend, strength, RSI, last hour), then explain what they mean and what the agent\'s rules say.\n- Say clearly whether a market looks bullish, bearish or sideways and why, and what would need to happen for a buy or sell signal under the agent\'s rules.\n- This is practice with pretend (paper) money. You may explain what the rules signal, but never promise profit, never say a price will surely go up or down, and never tell the student to trade real or borrowed money. Remind them briefly when it fits that signals can fail and the stop loss keeps losses small.\n- No markdown headings or tables. You may use short lines starting with "- ".\n\nAGENT RULES:\n'+q+"\n\n"+t+"\n"+p+"\nStudent: "+k+"\nTutor:"],r,y.z),!1,!1,!1,!1,B.nT),$async$JY)
case 6:m=f
t=m==null
if(t)l=null
else{r=J.t(m,"text")
r=r==null?null:B.a.i(J.k(r))
l=r}if(l==null)l=""
if(l.length!==0){t=A.aL(l,"**","")
r=A.ag("^#+\\s*",!0,!1,!0,!1)
n=A.aL(t,r,"")}else{t=t?null:J.t(m,"error")
n=J.k(t==null?"The tutor could not answer just now. Please try again.":t)}case 4:if(o!==$.fn5){x=1
break}$.Dy.push(new D.a_y(!1,n))
$.ah5=!1
if(u.c==null){x=1
break}u.l(new D.eGp())
u.aCR()
case 1:return A.h(v,w)}})
return A.i($async$JY,w)},
aCR(){$.aU.U$.push(new D.eGX(this))},
aQV(d){this.gLf().C1(2)
this.JY(d)},
B(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=A.Q(d).ax.a===B.dd,g=new D.a1v(h),f=h?C.yK:C.yI,e=h?C.yK:C.yI
e=A.a([e,h?C.a_A:C.a_q],y.O)
x=j.b34(g,B.eH,new D.eHe(d))
w=A.c("Trading Academy",i,i,i,i,i,i,A.l(i,i,h?C.dE:B.c,i,i,i,i,i,i,i,i,17,i,i,B.F,i,i,!0,i,i,i,i,i,i,i,i),i,i,i)
v=y.p
w=A.A(A.a([x,B.ar,A.E(A.x(A.a([w,A.c("Lessons, live signals and a tutor",i,i,i,i,i,i,A.l(i,i,h?C.dj:C.dk,i,i,i,i,i,i,i,i,11.5,i,i,i,i,i,!0,i,i,i,i,i,i,i,i),i,i,i)],v),B.B,i,B.e,B.h,0,B.p),1),A.p(i,C.foa,B.f,i,i,new A.o(C.dS.j(0.14),i,i,A.n(999),i,i,B.m),i,i,i,i,B.fM,i,i,i)],v),B.l,i,B.e,B.h,0,i,i)
x=h?C.H1:C.GR
u=A.n(999)
t=A.a([],v)
for(s=[C.fef,C.fcw,C.fdd],r=s.length,q=0;q<r;++q){p={}
o=s[q]
p.a=null
p.a=o.a
n=j.gLf().d===p.a
if(n)m=h?C.l_:B.c
else m=B.L
l=new A.aP(999,999)
if(n)k=h?B.c:C.l_
else k=h?C.dj:C.dk
k=A.W(o.c,k,i,i,i,15)
if(n)n=h?B.c:C.l_
else n=h?C.dj:C.dk
t.push(new A.by(1,B.ba,A.aA(i,A.cU(i,new A.c3(B.aL,B.b9,B.h,B.l,i,B.p,i,0,A.a([k,B.e5,new A.d4(1,B.cg,A.c(o.b,i,i,B.a2,i,i,i,new A.H(!0,n,i,i,i,i,12.5,B.F,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i),i,i,i),i)],v),i),i,i,B.b_,new A.o(m,i,i,new A.bb(l,l,l,l),i,i,B.m),B.a3,i,i,i,i,B.wU,i,i,i),B.y,!1,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,new D.eHf(p,j),i,i,i,i,i,i,!1,B.a4),i))}h=A.p(i,A.A(t,B.l,i,B.e,B.h,0,i,i),B.f,i,i,new A.o(x,i,i,u,i,i,B.m),i,i,i,i,B.es,i,i,i)
x=j.gLf()
return A.c5(i,f,A.p(i,A.bo(!0,A.x(A.a([new A.D(C.bG9,w,i),new A.D(B.ao7,h,i),A.E(A.baq(A.a([j.c6a(g),j.cDg(g),j.bHp(g)],v),x,i),1)],v),B.l,i,B.e,B.h,0,B.p),!0,!1,B.ag,!0,!0),B.f,i,i,new A.o(i,i,i,i,i,new A.a7(B.aX,B.b1,B.x,e,i,i),B.m),i,i,i,i,i,i,i,i),i,!1,!1,i,i)},
b34(d,e,f){var x=null,w=d.a,v=w?B.c.j(0.92):C.kY,u=A.K(w?B.c:C.uR,B.r,1)
return A.aG(!1,B.a3,!0,x,A.aM(!1,x,!0,A.p(x,A.W(e,w?C.dE:B.c,x,x,x,18),B.f,x,x,new A.o(x,x,u,x,x,x,B.a6),x,40,x,x,x,x,x,40),B.cK,!0,x,x,x,x,x,x,x,x,x,x,x,f,x,x,x,x,x,x,x),B.f,v,0,x,x,B.cK,x,x,B.ai)},
c6a(d){var x,w=null,v=new A.X(C.E7,new D.eGy(this),y.E).gJ(0),u=A.n(24),t=y.p
t=A.a([A.p(w,A.x(A.a([C.heG,B.at,C.fWk,B.aA,A.bv(A.n(9),A.jD(B.c.j(0.18),w,w,8,w,v/10,B.afe),B.aq),B.ak,A.c(""+v+" of 10 lessons done",w,w,w,w,w,w,B.acF,w,w,w)],t),B.B,w,B.e,B.h,0,B.p),B.f,w,w,new A.o(w,w,w,u,w,C.cee,B.m),w,w,w,w,B.fc,w,w,w),B.aA],t)
for(x=0;x<10;++x)t.push(this.c68(d,x))
t.push(B.ak)
t.push(A.c("Practice with pretend money. Signals and lessons are for learning; markets can always surprise.",w,w,w,w,w,w,A.l(w,w,d.a?C.dj:C.dk,w,w,w,w,w,w,w,w,11,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),B.K,w,w))
return A.cp(t,w,w,C.aob,w,w,B.ah,!1)},
c68(d,e){var x,w,v,u=null,t=C.E7[e],s=this.gJZ().q(0,t.a),r=d.a,q=r?B.c.j(0.92):C.kY,p=A.n(20),o=A.K(r?B.c:C.uR,B.r,1),n=A.a([new A.aa(0,B.H,d.ga9z(),B.hR,14)],y.V),m=A.n(15)
m=A.p(u,A.W(t.e,B.c,u,u,u,u),B.f,u,u,new A.o(t.f,u,u,m,u,u,B.m),u,46,u,u,u,u,u,46)
x=A.c("Lesson "+(e+1)+" \xb7 "+t.d+" min",u,u,u,u,u,u,A.l(u,u,r?C.dj:C.dk,u,u,u,u,u,u,u,u,11,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)
w=A.c(t.b,u,u,u,u,u,u,A.l(u,u,r?C.dE:B.c,u,u,u,u,u,u,u,u,15,u,u,B.F,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)
v=y.p
w=A.E(A.x(A.a([x,w,A.c(t.c,u,u,u,u,u,u,A.l(u,u,r?C.dj:C.dk,u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],v),B.B,u,B.e,B.h,0,B.p),1)
x=s?B.ea:B.eM
if(s)r=C.dS
else r=r?C.dj:C.dk
return A.aA(u,A.p(u,A.A(A.a([m,B.bb,w,A.W(x,r,u,u,u,u)],v),B.l,u,B.e,B.h,0,u,u),B.f,u,u,new A.o(q,u,o,p,n,u,B.m),u,u,u,B.d4,B.bG,u,u,u),B.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new D.eGx(this,t),u,u,u,u,u,u,!1,B.a4)},
clu(d){var x=this.c
x.toString
A.a8(x,!1).cc(A.ec(new D.eGT(this,d),!1,null,y.H))},
c6H(c1,c2){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6=this,b7=null,b8="reading",b9="rsi",c0=b6.gcEb()
if(c0==null)return A.c("Live example appears once the markets have loaded.",b7,b7,b7,b7,b7,b7,A.l(b7,b7,c1.a?C.dj:C.dk,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,!0,b7,b7,b7,b7,b7,b7,b7,b7),b7,b7,b7)
x=J.a2(c0)
w=J.k(x.h(c0,"asset"))
v=D.aRo(c0)
u=D.h7(x.h(c0,b8))
t=D.f4(x.h(c0,"price"))
s=new D.eGC(v,c1,t)
r=new D.eGK(c1)
switch(c2){case"basics":q=v.length!==0?D.f4(J.t(B.d.gH(v),"c")):t
p=q===0?50:50*t/q
x=r.$1("Right now "+w+" is "+D.ij(t,!0,!1)+". About 4 hours ago it was "+D.ij(q,!0,!1)+".")
o=D.ij(p,!0,!1)
n=p>=50?"a win of":"a loss of"
return A.x(A.a([x,B.P,r.$1("If you had put $50 into "+w+" then, it would be worth "+o+" now: "+n+" "+D.ij(Math.abs(p-50),!0,!1)+". That difference is your profit or loss.")],y.p),B.B,b7,B.e,B.h,0,B.p)
case"candles":m=v.length!==0?B.d.gal(v):A.T(y.N,y.z)
x=J.a2(m)
o=D.f4(x.h(m,"c"))
n=D.f4(x.h(m,"o"))
l=s.$2$last$lines(24,!1)
k=D.ij(D.f4(x.h(m,"o")),!0,!1)
j=D.ij(D.f4(x.h(m,"c")),!0,!1)
o=o>=n?"GREEN: buyers won those 5 minutes":"YELLOW: sellers won those 5 minutes"
return A.x(A.a([l,B.P,r.$1("The last finished "+w+" candle opened at "+k+" and closed at "+j+", so it is "+o+". Its high was "+D.ij(D.f4(x.h(m,"h")),!0,!1)+" and its low "+D.ij(D.f4(x.h(m,"l")),!0,!1)+".")],y.p),B.B,b7,B.e,B.h,0,B.p)
case"trend":x=y.N
i=A.T(x,y.S)
for(o=b6.gyB(),n=o.length,l=y.z,k=y.f,h=0;h<o.length;o.length===n||(0,A.I)(o),++h){j=J.t(o[h],b8)
j=(k.b(j)?A.a1(j,x,l):A.T(x,l)).h(0,"bias")
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
case"ma":f=D.f4(x.h(c0,"fast"))
e=D.f4(x.h(c0,"slow"))
x=s.$0()
o=D.ij(f,!0,!1)
n=D.ij(e,!0,!1)
l=f>=e
k=l?"ABOVE":"BELOW"
l=l?"UP":"DOWN"
return A.x(A.a([x,B.P,r.$1("On "+w+" the pink fast line is at "+o+" and the purple slow line at "+n+". The fast line is "+k+" the slow line, so the short-term trend is "+l+".")],y.p),B.B,b7,B.e,B.h,0,B.p)
case"cross":x=b6.gyB()
o=A.U(x)
n=o.k("cM<1,@>")
d=A.B(new A.cM(new A.X(x,new D.eGD(),o.k("X<1>")),new D.eGE(),n),n.k("M.E"))
x=b6.gyB()
o=A.U(x)
n=o.k("cM<1,@>")
a0=A.B(new A.cM(new A.X(x,new D.eGF(),o.k("X<1>")),new D.eGG(),n),n.k("M.E"))
x=s.$0()
if(d.length!==0)o="Fresh BUY crosses right now: "+B.d.aL(d,", ")+". On its next automatic check the agent would buy the strongest of these if it holds nothing."
else o="No fresh buy cross in any open market right now. "+(a0.length!==0?"Fresh sell crosses: "+B.d.aL(a0,", ")+". ":"")+"The agent simply waits; no signal means no trade."
return A.x(A.a([x,B.P,r.$1(o)],y.p),B.B,b7,B.e,B.h,0,B.p)
case"rsi":x=b6.gyB()
o=A.U(x).k("X<1>")
a1=A.B(new A.X(x,new D.eGH(),o),o.k("M.E"))
x=y.p
o=A.a([],x)
for(n=a1.length,l=c1.a,k=y.N,j=y.z,a2=y.f,a3=y.c,h=0;h<a1.length;a1.length===n||(0,A.I)(a1),++h){a4=a1[h]
a5=J.a2(a4)
a6=J.k(a5.h(a4,"asset"))
a7=l?C.dE:B.c
a6=A.c(a6,b7,b7,b7,b7,b7,b7,new A.H(!0,a7,b7,b7,b7,b7,12,B.F,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7),b7,b7,b7)
a7=new A.aP(9,9)
a8=a5.h(a4,b8)
a8=(a2.b(a8)?A.a1(a8,k,j):A.T(k,j)).h(0,b9)
if(!(typeof a8=="number")){a8=A.cG(A.v(a8==null?"":a8))
if(a8==null)a8=0}a9=l?C.H1:C.GR
b0=a5.h(a4,b8)
b0=(a2.b(b0)?A.a1(b0,k,j):A.T(k,j)).h(0,b9)
if(!(typeof b0=="number")){b0=A.cG(A.v(b0==null?"":b0))
if(b0==null)b0=0}if(b0>=70)b0=C.eF
else{b0=a5.h(a4,b8)
b0=(a2.b(b0)?A.a1(b0,k,j):A.T(k,j)).h(0,b9)
if(!(typeof b0=="number")){b0=A.cG(A.v(b0==null?"":b0))
if(b0==null)b0=0}b0=b0<=30?B.cD:C.dS}b0=A.jD(a9,b7,b7,8,b7,a8/100,new A.kR(b0,a3))
a5=a5.h(a4,b8)
a5=(a2.b(a5)?A.a1(a5,k,j):A.T(k,j)).h(0,b9)
if(!(typeof a5=="number")){a5=A.cG(A.v(a5==null?"":a5))
if(a5==null)a5=0}a5=B.i.aa(a5,0)
a8=l?C.dE:B.c
o.push(new A.D(B.cy,new A.c3(B.aL,B.e,B.h,B.l,b7,B.p,b7,0,A.a([new A.a6(70,b7,a6,b7),new A.by(1,B.ba,new A.nh(new A.bb(a7,a7,a7,a7),B.aq,b0,b7),b7),B.aa,new A.a6(26,b7,A.c(a5,b7,b7,b7,b7,b7,b7,new A.H(!0,a8,b7,b7,b7,b7,12,B.F,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7),b7,b7,b7),b7)],x),b7),b7))}o.push(r.$1("Red bars are above 70 (stretched), blue below 30 (oversold), green in between (healthy)."))
return A.x(o,B.B,b7,B.e,B.h,0,B.p)
case"risk":b1=t===0?0:50/t
x=r.$1("If the agent bought "+w+" right now at "+D.ij(t,!0,!1)+":")
return A.x(A.a([x,B.ak,r.$1("- $50 buys "+B.i.aa(b1,b1<0.01?6:4)+" "+w),r.$1("- Take profit at "+D.ij(t*1.03,!0,!1)+": you get back about $51.50 (+$1.50)"),r.$1("- Stop loss at "+D.ij(t*0.985,!0,!1)+": you get back about $49.25 (-$0.75)"),B.ak,r.$1("Win 1 and lose 2 of 3 trades: +1.50 - 0.75 - 0.75 = $0.00. That is break even.")],y.p),B.B,b7,B.e,B.h,0,B.p)
case"brakes":x=b6.e
if(x==null)return r.$1('Try it yourself: before your next practice day, write down "I stop after losing $10 today". If three trades in a row lose, close the app and come back tomorrow. That is exactly what the agent does.')
b2=D.h7(J.t(x,"state"))
x=b6.e
x=D.ij(D.f4(D.h7(x==null?b7:J.t(x,"today")).h(0,"day_pnl")),!0,!0)
o=D.ij(D.f4(b2.h(0,"totalPnl")),!0,!0)
n=J.z(b2.h(0,"brakePaused"),!0)?"The brake is ON right now.":"Both brakes are off, it can keep trading."
return r.$1("Today the agent is at "+x+" (the daily stop is -$10) and "+o+" all time (the brake is -$25). "+n)
case"hours":if(b6.f!=null)b3=b6.fx
else{x=b6.e
b3=J.z(D.h7(x==null?b7:J.t(x,"market")).h(0,"stockOpen"),!0)}b4=B.d.aR(b6.ay,new D.eGI())
x=b3?"OPEN":"CLOSED"
o=b4?"OPEN":"CLOSED"
return r.$1("Right now the US stock market is "+x+", the forex market is "+o+", and crypto is open, as always.")
case"practice":x=b6.e
if(x==null){x=b6.gaaj()
return r.$1("Right now "+new A.X(x,new D.eGJ(),A.U(x).k("X<1>")).gJ(0)+" of "+b6.gaaj().length+" markets have signals that worked at least half the time lately. That is why a journal and many trades matter: some markets suit a method, others do not.")}b5=D.h7(J.t(x,"record"))
x=b5.h(0,"trades")
x=A.v(x==null?0:x)
o=b5.h(0,"wins")
o=A.v(o==null?0:o)
n=b5.h(0,"losses")
return r.$1("The agent journal so far: "+x+" finished pretend trades, "+o+" wins and "+A.v(n==null?0:n)+" losses. Keep watching until there are at least 20 before judging it.")}return B.bL},
cDg(a5){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,a0="asset",a1=B.a.i(e.ch),a2=e.gaaj(),a3=A.U(a2).k("X<1>"),a4=A.B(new A.X(a2,new D.eH0(e,a1.toLowerCase()),a3),a3.k("M.E"))
B.d.b_(a4,new D.eH1(e))
x=new D.eH9()
a1=A.U(a4).k("X<1>")
w=new A.X(a4,new D.eH2(x),a1).gJ(0)
v=new A.X(a4,new D.eH3(x),a1).gJ(0)
a1=a4.length
if(e.r==null)u=0
else{t=Date.now()
s=e.r
s.toString
u=B.o.ap(new A.V(t,0,!1).by(s).a,1e6)}if(u<20)r="just now"
else r=u<60?""+u+" s ago":""+B.o.ap(u,60)+" min ago"
t=y.p
s=A.a([],t)
for(q=a5.a,p=0;p<4;++p){o=C.d6j[p]
if(e.cx===o)n=q?C.l_:B.c
else n=q?B.c.j(0.92):C.kY
m=new A.aP(999,999)
l=new A.ax(q?C.qC:C.qz,1,B.r,-1)
k=o==="All"?"All "+a2.length:o+" "+new A.X(a2,new D.eH4(o),a3).gJ(0)
if(e.cx===o)j=q?B.c:C.l_
else j=q?C.dE:B.c
B.d.u(s,A.a([A.aA(d,A.p(d,A.c(k,d,d,d,d,d,d,new A.H(!0,j,d,d,d,d,12,B.F,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d),d,d,d),B.f,d,d,new A.o(n,d,new A.bE(l,l,l,l),new A.bb(m,m,m,m),d,d,B.m),d,d,d,d,C.bGj,d,d,d),B.y,!1,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,new D.eH5(e,o),d,d,d,d,d,d,!1,B.a4),B.bf],t))}a3=A.E(A.ca(A.A(s,B.l,d,B.e,B.h,0,d,d),B.t,d,B.y,d,d,d,d,d,B.aL),1)
s=e.CW?B.cA:B.eN
s=A.a([A.A(A.a([a3,B.bf,e.b34(a5,s,new D.eH6(e))],t),B.l,d,B.e,B.h,0,d,d)],t)
if(e.CW){a3=A.l(d,d,q?C.dE:B.c,d,d,d,d,d,d,d,d,d,d,d,d,d,d,!0,d,d,d,d,d,d,d,d)
n=A.l(d,d,q?C.dj:C.dk,d,d,d,d,d,d,d,d,13,d,d,d,d,d,!0,d,d,d,d,d,d,d,d)
m=A.W(B.eN,q?C.dj:C.dk,d,d,d,d)
k=q?B.c.j(0.92):C.kY
j=A.n(999)
i=q?C.qC:C.qz
h=A.n(999)
g=q?C.qC:C.qz
B.d.u(s,A.a([B.S,A.aN(d,B.Z,!0,d,!0,B.t,d,A.aO(),e.cy,d,d,d,d,d,2,A.bB(d,new A.b6(4,j,new A.ax(i,1,B.r,-1)),d,B.f8,d,d,d,d,!0,new A.b6(4,h,new A.ax(g,1,B.r,-1)),d,d,d,d,d,k,!0,d,d,d,d,d,d,d,d,d,d,d,d,d,n,"Search a market, for example EUR/USD, GBP or Bitcoin",d,d,d,d,d,d,d,d,d,!0,!0,!1,d,m,d,d,d,d,d,d,d,d,d,d,d,d),B.y,!0,d,!0,d,!1,d,B.al,d,d,d,d,d,d,d,d,d,1,d,d,!1,"\u2022",d,new D.eH7(e),d,d,d,!1,d,d,!1,d,!0,d,B.ae,d,d,d,d,d,d,d,d,d,d,d,a3,!0,B.a7,d,B.ao,d,d,d,d)],t))}s.push(B.af)
s.push(e.bG3(a5))
s.push(A.A(A.a([A.E(e.av0(a5,"Going up",w,C.dS,B.nf),1),B.aa,A.E(e.av0(a5,"Going down",v,C.eF,B.a4O),1),B.aa,A.E(e.av0(a5,"No direction",a1-w-v,E.jQ,C.asu),1)],t),B.l,d,B.e,B.h,0,d,d))
s.push(B.P)
s.push(A.A(A.a([C.c_U,B.e5,new A.d4(1,B.cg,A.c("Live \xb7 updated "+r+" \xb7 checks every 20 seconds, changes are flagged at once",d,d,d,d,d,d,A.l(d,d,q?C.dj:C.dk,d,d,d,d,d,d,d,d,11,d,d,d,d,d,!0,d,d,d,d,d,d,d,d),B.K,d,d),d)],t),B.l,d,B.b9,B.h,0,d,d))
a1=e.cx
if(a1==="All"||a1==="Forex"){a1=E.jQ.j(0.12)
a3=A.n(16)
n=A.K(E.jQ.j(0.45),B.r,1)
B.d.u(s,A.a([B.S,A.p(d,A.c('Forex uses real market prices on 1-minute candles. OTC pairs at a broker are priced by that broker (always on weekends) and can move differently, and the payout % is the broker\'s. "Worked" shows how often past moves on this pair really went that way: under 50% means the signal has been worse than a coin flip, so do not trust it.',d,d,d,d,d,d,A.l(d,d,q?C.dE:B.c,d,d,d,d,d,d,d,d,11.8,d,d,d,d,1.35,!0,d,d,d,d,d,d,d,d),d,d,d),B.f,d,d,new A.o(a1,d,n,a3,d,d,B.m),d,d,d,d,B.bl,d,d,d)],t))}s.push(B.af)
if(a2.length===0)s.push(A.c("Loading the markets...",d,d,d,d,d,d,A.l(d,d,q?C.dj:C.dk,d,d,d,d,d,d,d,d,d,d,d,d,d,d,!0,d,d,d,d,d,d,d,d),d,d,d))
if(a2.length!==0&&a4.length===0){a1=e.ch
s.push(A.at(A.c('No market matches "'+a1+'".',d,d,d,d,d,d,A.l(d,d,q?C.dj:C.dk,d,d,d,d,d,d,d,d,d,d,d,d,d,d,!0,d,d,d,d,d,d,d,d),d,d,d),d,d,d))}for(a1=a4.length,a3=e.dx,p=0;p<a4.length;a4.length===a1||(0,A.I)(a4),++p){f=a4[p]
t=J.a2(f)
if(a3.h(0,t.h(f,a0))==null)t=d
else t=a3.h(0,t.h(f,a0)).c==="no direction"?"JUST LOST ITS DIRECTION":"JUST TURNED "+a3.h(0,t.h(f,a0)).c.toUpperCase()
s.push(D.hHY(a5,f,t,!1,new D.eH8(e,f)))}s.push(A.c("Signals are estimates from recent price history. They can fail; never risk money you cannot afford to lose.",d,d,d,d,d,d,A.l(d,d,q?C.dj:C.dk,d,d,d,d,d,d,d,d,11,d,d,d,d,d,!0,d,d,d,d,d,d,d,d),B.K,d,d))
return A.PL(A.cp(s,d,d,C.aob,d,d,B.ah,!1),d,e.gcg7())},
bG3(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=new A.X(C.E7,new D.eGi(i),y.E).gJ(0),f=i.z||i.y
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
n=A.n(16)
m=A.K(u.j(0.45),B.r,1)
l=A.W(o,u,h,h,h,h)
k=y.p
l=A.a([l,B.ar,A.E(A.c(t,h,h,h,h,h,h,A.l(h,h,d.a?C.dE:B.c,h,h,h,h,h,h,h,h,12,h,h,h,h,1.35,!0,h,h,h,h,h,h,h,h),h,h,h),1)],k)
if(s!=null){j=A.bp(u,h,h,h,h,h,B.f2,h,h,h,h,h)
B.d.u(l,A.a([B.aa,A.bI(A.c(s,h,h,h,h,h,h,B.pi,h,h,h),h,new D.eGj(i,f),j)],k))}return A.p(h,A.A(l,B.l,h,B.e,B.h,0,h,h),B.f,h,h,new A.o(w,h,m,n,h,h,B.m),h,h,h,B.e9,B.bl,h,h,h)},
av0(d,e,f,g,h){var x=null,w=A.n(18),v=A.a([g.j(0.2),g.j(0.05)],y.O),u=A.K(g.j(0.35),B.r,1),t=A.W(h,g,x,x,x,20),s=d.a,r=A.c(""+f,x,x,x,x,x,x,A.l(x,x,s?C.dE:B.c,x,x,x,x,x,x,x,x,22,x,x,B.u,x,x,!0,x,x,x,x,x,x,x,x),x,x,x)
return A.p(x,A.x(A.a([t,B.at,r,A.c(e,x,x,x,x,x,x,A.l(x,x,s?C.dj:C.dk,x,x,x,x,x,x,x,x,11.5,x,x,B.O,x,x,!0,x,x,x,x,x,x,x,x),x,x,x)],y.p),B.B,x,B.e,B.h,0,B.p),B.f,x,x,new A.o(x,x,u,w,x,new A.a7(B.a5,B.a9,B.x,v,x,x),B.m),x,x,x,x,B.bl,x,x,x)},
bHp(d){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=y.p,i=A.a([],j)
if($.Dy.length===0){x=d.a
w=x?B.c.j(0.92):C.kY
v=A.n(22)
u=A.K(x?B.c:C.uR,B.r,1)
t=A.p(k,C.c0R,B.f,k,k,E.ags,k,40,k,k,k,k,k,40)
t=A.A(A.a([t,B.ar,A.E(A.c("Your trading tutor",k,k,k,k,k,k,A.l(k,k,x?C.dE:B.c,k,k,k,k,k,k,k,k,16,k,k,B.F,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),1)],j),B.l,k,B.e,B.h,0,k,k)
w=A.p(k,A.x(A.a([t,B.P,A.c("Ask anything about trading. The tutor sees the same live prices and readings as the agent, so it can explain what each market is doing right now.",k,k,k,k,k,k,A.l(k,k,x?C.dj:C.dk,k,k,k,k,k,k,k,k,12.5,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),k,k,k)],j),B.B,k,B.e,B.h,0,B.p),B.f,k,k,new A.o(w,k,u,v,k,k,B.m),k,k,k,k,B.bQ,k,k,k)
v=A.a([],j)
for(s=0;s<6;++s){r=C.dct[s]
u=x?C.dE:B.c
u=A.c(r,k,k,k,k,k,k,new A.H(!0,u,k,k,k,k,12,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k),k,k,k)
t=x?B.c.j(0.92):C.kY
q=x?C.qC:C.qz
p=new A.aP(999,999)
v.push(A.mR(k,t,u,k,new D.eGk(l,r),k,new A.ba(new A.bb(p,p,p,p),B.a1),new A.ax(q,1,B.r,-1),k))}B.d.u(i,A.a([w,B.af,A.bZ(B.bI,v,B.br,k,8,8)],j))}for(x=$.Dy.length,w=d.a,s=0;s<$.Dy.length;$.Dy.length===x||(0,A.I)($.Dy),++s){o=$.Dy[s]
v=o.a
u=v?B.a9:B.a5
if(v)t=w?C.l_:B.c
else t=w?B.c.j(0.92):C.kY
q=v?18:4
p=v?4:18
if(v)n=k
else{m=new A.ax(w?B.c:C.uR,1,B.r,-1)
n=new A.bE(m,m,m,m)}if(v)v=w?B.c:C.l_
else v=w?C.dE:B.c
i.push(new A.bK(u,k,k,A.p(k,A.AG(o.b,new A.H(!0,v,k,k,k,k,13.5,k,k,k,k,k,1.4,k,k,k,k,k,k,k,k,k,k,k,k,k),k),B.f,k,F.ag3,new A.o(t,k,n,new A.bb(B.i5,B.i5,new A.aP(q,q),new A.aP(p,p)),k,k,B.m),k,k,k,B.jg,B.hy,k,k,k),k))}if($.ah5){x=w?B.c.j(0.92):C.kY
v=A.n(18)
i.push(new A.bK(B.a5,k,k,A.p(k,A.A(A.a([B.ac3,B.aa,A.c("Reading the markets...",k,k,k,k,k,k,A.l(k,k,w?C.dj:C.dk,k,k,k,k,k,k,k,k,12.5,k,k,k,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)],j),B.l,k,B.e,B.M,0,k,k),B.f,k,k,new A.o(x,k,k,v,k,k,B.m),k,k,k,B.hx,B.hy,k,k,k),k))}i=A.E(A.cp(i,l.ax,k,C.bHx,k,k,B.ah,!1),1)
x=A.l(k,k,w?C.dE:B.c,k,k,k,k,k,k,k,k,k,k,k,k,k,k,!0,k,k,k,k,k,k,k,k)
v=A.l(k,k,w?C.dj:C.dk,k,k,k,k,k,k,k,k,k,k,k,k,k,k,!0,k,k,k,k,k,k,k,k)
u=w?B.c.j(0.92):C.kY
t=A.n(999)
q=w?C.qC:C.qz
p=A.n(999)
n=w?C.qC:C.qz
x=A.E(A.aN(k,B.Z,!1,k,!0,B.t,k,A.aO(),l.at,k,k,k,k,k,2,A.bB(k,new A.b6(4,t,new A.ax(q,1,B.r,-1)),k,B.zp,k,k,k,k,!0,new A.b6(4,p,new A.ax(n,1,B.r,-1)),k,k,k,k,k,u,!0,k,k,k,k,k,k,k,k,k,k,k,k,k,v,"Ask about trading or a market...",k,k,k,k,k,k,k,k,k,!0,!0,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k),B.y,!0,k,!0,k,!1,k,B.al,k,k,k,k,k,k,k,k,k,4,1,k,!1,"\u2022",k,k,k,l.gcg5(),k,!1,k,k,!1,k,!0,k,B.ae,k,k,k,k,k,k,k,k,k,k,k,x,!0,B.a7,k,B.ao,k,B.acq,k,k),1)
v=w?C.l_:B.c
u=$.ah5?k:new D.eGl(l)
return A.x(A.a([i,A.p(k,A.A(A.a([x,B.aa,A.aG(!1,B.a3,!0,k,A.aM(!1,k,!0,new A.a6(48,48,A.W(B.pP,w?B.c:C.l_,k,k,k,k),k),B.cK,!0,k,k,k,k,k,k,k,k,k,k,k,u,k,k,k,k,k,k,k),B.f,v,0,k,k,B.cK,k,k,B.ai)],j),B.l,k,B.e,B.h,0,k,k),B.f,k,k,k,k,k,k,k,Y.HD,k,k,k)],j),B.l,k,B.e,B.h,0,B.p)}}
D.a0z.prototype={
R(){var x=y.S
return new D.bkS(A.T(x,x))},
cYH(d){return this.e.$0()},
d0q(d){return this.x.$1(d)},
rn(){return this.y.$0()},
cZZ(d){return this.z.$1(d)},
gd4(d){return this.w}}
D.bkS.prototype={
a_(){var x,w,v,u,t,s,r,q,p,o=this
o.a4()
x=C.dLl.h(0,o.a.c.a)
o.d=x==null?o.a.c.x:x
w=o.a.w
v=new D.dur()
u=new D.dup()
x=v.$1(w.h(0,"slots"))
t=A.U(x).k("X<1>")
x=A.B(new A.X(x,new D.dun(o),t),t.k("M.E"))
o.e=x
x=x.length
t=o.d.length
if(x!==Math.min(10,t)){x=y.S
s=J.e2(t,x)
for(r=0;r<t;++r)s[r]=r
B.d.dX(s,B.cS)
o.e=A.cS(s,0,A.dA(Math.min(10,o.d.length),"count",x),A.U(s).c).dn(0)}x=v.$1(w.h(0,"right"))
o.f=A.jE(x,A.U(x).c)
o.r=u.$1(w.h(0,"tries"))
o.w=u.$1(w.h(0,"locks"))
o.x=v.$1(w.h(0,"used"))
for(x=o.e,t=x.length,q=0;q<x.length;x.length===t||(0,A.I)(x),++q){p=x[q]
if(!B.d.q(o.x,p))B.d.I(o.x,p)}o.bbg(!1)
o.z=A.d1(B.fB,new D.duo(o))},
t(){var x=this.z
if(x!=null)x.a1(0)
this.a3()},
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
v=v.iW(v,new D.duf(),u,t)
s=r.w
s===$&&A.d()
t=s.iW(s,new D.dug(),u,t)
s=r.x
s===$&&A.d()
return q.d0q(A.J(["slots",x,"right",w,"tries",v,"locks",t,"used",s],u,y.z))},
bbg(d){var x,w,v,u,t,s,r,q,p,o=this,n=Date.now(),m=o.y,l=y.X,k=!1,j=0
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
r=A.B(new A.X(t,new D.duh(o),x),x.k("M.E"))
if(r.length!==0)q=r
else{u=o.d.length
t=A.a(new Array(u),l)
for(s=0;s<u;++s)t[s]=s
x=A.U(t).k("X<1>")
q=A.B(new A.X(t,new D.dui(o),x),x.k("M.E"))}x=q.length
if(x===0)p=w
else p=q[B.cS.av(x)]
o.w.X(0,w)
x=o.r
x===$&&A.d()
x.X(0,w)
m.X(0,w)
o.e[j]=p
x=o.x
x===$&&A.d()
if(!B.d.q(x,p))B.d.I(o.x,p)
k=!0}++j}if(k&&d)o.b36()},
cFX(){return this.bbg(!0)},
cmw(d){var x,w,v,u,t=this.d
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
cg4(d,e){var x=this,w=x.f
w===$&&A.d()
if(!w.q(0,d)){w=x.w
w===$&&A.d()
w=w.am(0,d)}else w=!0
if(w)return
x.l(new D.dud(x,e,d))
x.b36()},
B(d){var x,w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=A.Q(d).ax.a===B.dd,j=new D.a1v(k),i=m.a.c,h=m.e
h===$&&A.d()
x=m.f
x===$&&A.d()
w=new A.X(h,x.gjC(x),A.U(h).k("X<1>")).gJ(0)
v=w===m.e.length
h=k?C.yK:C.yI
x=k?C.yK:C.yI
u=k?C.a_A:C.a_q
t=y.O
u=A.a([x,u],t)
x=A.aI(l,l,l,l,A.W(B.eH,k?C.dE:B.c,l,l,l,18),l,l,l,new D.duj(d),l,l,l,l,l,l)
s=m.a.d
r=y.p
s=A.A(A.a([x,B.aY,A.c("Lesson "+s+" of 10",l,l,l,l,l,l,A.l(l,l,k?C.dj:C.dk,l,l,l,l,l,l,l,l,12,l,l,B.O,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)],r),B.l,l,B.e,B.h,0,l,l)
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
B.d.u(t,A.a([q,B.at,A.c(s.b,l,l,l,l,l,l,new A.H(!0,p,l,l,l,l,14,l,l,l,l,l,1.5,l,l,l,l,l,l,l,l,l,l,l,l,l),l,l,l),B.aA],r))}x=k?B.c.j(0.92):C.kY
s=A.n(22)
q=A.K(C.dS.j(0.45),B.r,1.5)
t.push(A.p(l,A.x(A.a([A.A(A.a([C.bXo,B.bf,A.c("See it live right now",l,l,l,l,l,l,A.l(l,l,k?C.dE:B.c,l,l,l,l,l,l,l,l,14,l,l,B.F,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)],r),B.l,l,B.e,B.h,0,l,l),B.S,m.a.cYH(0)],r),B.B,l,B.e,B.h,0,B.p),B.f,l,l,new A.o(x,l,q,s,l,l,B.m),l,l,l,l,B.bG,l,l,l))
t.push(B.bx)
x=A.c("Quiz",l,l,l,l,l,l,A.l(l,l,k?C.dE:B.c,l,l,l,l,l,l,l,l,16,l,l,B.F,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)
s=""+w+" of "
q=m.e.length
if(v)p=C.dS
else p=k?C.dj:C.dk
t.push(A.A(A.a([x,B.aY,A.c(s+q+" right",l,l,l,l,l,l,A.l(l,l,p,l,l,l,l,l,l,l,l,12.5,l,l,B.F,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)],r),B.l,l,B.e,B.h,0,l,l))
t.push(B.ak)
p=A.n(9)
x=m.e.length
x=x===0?0:w/x
t.push(A.bv(p,A.jD(k?C.H1:C.GR,l,l,7,l,x,C.b5n),B.aq))
t.push(B.P)
x=m.a.f?"Admin: you can retry any question.":"Get all 10 right to finish. A wrong answer gets one more try; wrong twice and that question locks for 5 minutes, then a new question takes its place."
t.push(A.c(x,l,l,l,l,l,l,A.l(l,l,k?C.dj:C.dk,l,l,l,l,l,l,l,l,11.8,l,l,l,l,1.35,!0,l,l,l,l,l,l,l,l),l,l,l))
t.push(B.S)
for(n=0;x=m.e,n<x.length;++n)t.push(m.ctO(j,n,x[n]))
t.push(B.P)
x=k?C.dE:B.c
q=k?C.qC:C.qz
q=A.E(A.en(C.c35,l,C.fV3,new D.duk(m,i),A.di(l,l,l,l,l,l,l,l,l,x,l,l,B.cm,l,new A.ba(A.n(999),B.a1),new A.ax(q,1.5,B.r,-1),l,l,l,l)),1)
x=!v
if(!x||m.a.r)k=C.dS
else k=k?C.dj:C.dk
k=A.bp(k,l,l,l,l,l,B.cm,l,new A.ba(A.n(999),B.a1),l,l,l)
p=!x||m.a.r?new D.dul(m,d):l
t.push(A.A(A.a([q,B.ar,A.E(A.dc(Q.R_,l,A.c(!x||m.a.r?"Finish lesson":s+m.e.length+" right",l,l,l,l,l,l,B.cc,l,l,l),p,k),1)],r),B.l,l,B.e,B.h,0,l,l))
return A.c5(l,h,A.p(l,A.bo(!0,A.cp(t,l,l,C.bHF,l,l,B.ah,!1),!0,!1,B.ag,!0,!0),B.f,l,l,new A.o(l,l,l,l,l,new A.a7(B.aX,B.b1,B.x,u,l,l),B.m),l,l,l,l,l,l,l,l),l,!1,!1,l,l)},
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
s=B.o.ap(a6,6e7)
r=B.a.b0(B.o.v(B.o.F(B.o.ap(a6,1e6),60)),2,"0")
a6=a7.a
q=a6?C.Hb:C.Hc
p=A.n(20)
o=A.K(C.eF.j(0.4),B.r,1)
n=A.c("Question "+(a8+1)+" is locked",a5,a5,a5,a5,a5,a5,A.l(a5,a5,a6?C.dE:B.c,a5,a5,a5,a5,a5,a5,a5,a5,14,a5,a5,B.F,a5,a5,!0,a5,a5,a5,a5,a5,a5,a5,a5),a5,a5,a5)
m=y.p
return A.p(a5,A.A(A.a([C.c5c,B.ar,A.E(A.x(A.a([n,A.c("Wrong twice. Re-read the lesson; a new question appears in "+s+":"+r+".",a5,a5,a5,a5,a5,a5,A.l(a5,a5,a6?C.dj:C.dk,a5,a5,a5,a5,a5,a5,a5,a5,12.5,a5,a5,a5,a5,1.35,!0,a5,a5,a5,a5,a5,a5,a5,a5),a5,a5,a5)],m),B.B,a5,B.e,B.h,0,B.p),1)],m),B.l,a5,B.e,B.h,0,a5,a5),B.f,a5,a5,new A.o(q,a5,o,p,a5,a5,B.m),a5,a5,a5,B.d4,B.bG,a5,a5,a5)}a6=a7.a
q=a6?B.c.j(0.92):C.kY
p=A.n(20)
if(w)o=C.dS.j(0.6)
else o=a6?B.c:C.uR
o=A.K(o,B.r,w?1.5:1)
n=y.p
m=A.a([A.c(""+(a8+1)+". "+x.a,a5,a5,a5,a5,a5,a5,A.l(a5,a5,a6?C.dE:B.c,a5,a5,a5,a5,a5,a5,a5,a5,14,a5,a5,B.F,a5,a5,!0,a5,a5,a5,a5,a5,a5,a5,a5),a5,a5,a5),B.P],n)
for(l=a4.cmw(a9),k=l.length,j=!w,i=x.b,h=x.c,g=0;g<l.length;l.length===k||(0,A.I)(l),++g){f=l[g]
e=w?a5:new D.due(a4,a9,f)
if(w&&f===h)d=C.dS.j(0.14)
else if(t===f)d=C.eF.j(0.12)
else d=a6?C.Hb:C.Hc
a0=new A.aP(14,14)
if(w&&f===h)a1=C.dS
else a1=t===f?C.eF:B.L
a2=new A.ax(a1,1,B.r,-1)
a1=i[f]
a3=a6?C.dE:B.c
a1=A.a([new A.by(1,B.ba,A.c(a1,a5,a5,a5,a5,a5,a5,new A.H(!0,a3,a5,a5,a5,a5,13.5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5),a5,a5,a5),a5)],n)
if(w&&f===h)a1.push(C.c0B)
if(j&&t===f)a1.push(C.c6A)
m.push(A.aA(a5,A.p(a5,new A.c3(B.aL,B.e,B.h,B.l,a5,B.p,a5,0,a1,a5),B.f,a5,a5,new A.o(d,a5,new A.bE(a2,a2,a2,a2),new A.bb(a0,a0,a0,a0),a5,a5,B.m),a5,a5,a5,B.eK,B.ez,a5,a5,a5),B.y,!1,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,e,a5,a5,a5,a5,a5,a5,!1,B.a4))}if(w)m.push(A.c("Right! "+x.d,a5,a5,a5,a5,a5,a5,C.fOY,a5,a5,a5))
else if(u===1&&!a4.a.f)m.push(C.fXP)
else if(u>=1)m.push(C.fVe)
return A.p(a5,A.x(m,B.B,a5,B.e,B.h,0,B.p),B.f,a5,a5,new A.o(q,a5,o,p,a5,a5,B.m),a5,a5,a5,B.d4,B.bG,a5,a5,a5)}}
D.aPe.prototype={
t(){var x=this,w=x.a9$
if(w!=null)w.a6(0,x.gbB())
x.a9$=null
x.a3()},
aZ(){this.b7()
this.b5()
this.bC()}}
var z=a.updateTypes(["P(uu)","ay<~>()","~()","XD(Z)","ay<~>(m)","m(a_y)","a0z(Z)"])
D.eGg.prototype={
$1(d){this.a.Bm(!0)
return null},
$S:11}
D.eFY.prototype={
$1(d){var x=this.a.Q,w=x.f
if(w.length!==0){w=B.d.gd3(w).Q
w.toString
x.i9(B.i.D(Math.min(this.b*160-16,w),0,1/0))}},
$S:7}
D.eFP.prototype={
$0(){return this.a.z=this.b},
$S:0}
D.eFX.prototype={
$0(){return this.a.z=this.b},
$S:0}
D.eG_.prototype={
$0(){var x=this.a,w=x.f=!1,v=this.b,u=v==null
if(!u?J.z(J.t(v,"ok"),!0):w){x.d=v
x.ax=null}else{w=u?null:J.t(v,"error")
x.ax=J.k(w==null?"Could not reach the server. Pull down to try again.":w)
if(!J.z(u?null:J.t(v,"ownerOnly"),!0))w=J.z(u?null:J.t(v,"setupNeeded"),!0)
else w=!0
if(w)x.d=null}},
$S:0}
D.eFN.prototype={
$1(d){return A.a1(d,y.N,y.z)},
$S:25}
D.eFO.prototype={
$0(){var x,w,v=this,u=v.a
if(v.b){x=A.B(u.e,y.P)
w=v.c
B.d.u(x,w)}else{x=v.c
w=x}u.e=x
u.w=w.length>=100},
$S:0}
D.eG7.prototype={
$1(d){var x=null
return A.eh(A.a([A.bO(!1,B.dr,x,x,!0,x,x,x,new D.eG5(d),x,x),A.bI(C.hh9,x,new D.eG6(d),x)],y.p),x,x,x,C.fVb,x,x,x,x,C.fZk,x)},
$S:18}
D.eG5.prototype={
$0(){A.a8(this.a,!1).N(!1)
return null},
$S:0}
D.eG6.prototype={
$0(){A.a8(this.a,!1).N(!0)
return null},
$S:0}
D.eG8.prototype={
$0(){return this.a.r=!0},
$S:0}
D.eG9.prototype={
$0(){return this.a.r=!1},
$S:0}
D.eFW.prototype={
$1(d){var x=this.a,w=x.d
x.a.toString
return D.hz2(w,!1)},
$S:z+3}
D.eG1.prototype={
$0(){return this.a.r=!0},
$S:0}
D.eG2.prototype={
$0(){var x=this.a,w=x.r=!1,v=this.b
if(v!=null?J.z(J.t(v,"ok"),!0):w)x.d=v},
$S:0}
D.eG3.prototype={
$1(d){var x=this
return A.oR(new D.eG0(x.a,x.b,x.c,x.d),!1,0.8,0.95,0.25,!1,null)},
$S:133}
D.eG0.prototype={
$2(d,e){var x=this
return x.a.cyW(x.b,x.c,D.h7(J.t(x.d,"state")),e)},
$S:2016}
D.eG4.prototype={
$2(d,e){return B.i.aQ(D.aHf(d),D.aHf(e))},
$S:40}
D.eGf.prototype={
$0(){return this.a.Bm(!0)},
$S:1}
D.eGc.prototype={
$0(){var x=this.a.c
x.toString
return A.VI(x)},
$S:0}
D.eGd.prototype={
$0(){return this.a.Bm(!0)},
$S:0}
D.eFE.prototype={
$1(d){return J.z(J.t(d,"asset"),this.a)},
$S:4}
D.eFF.prototype={
$0(){var x=this.a
return x.length===0?this.b:B.d.gH(x)},
$S:183}
D.eFG.prototype={
$1(d){return J.z(J.t(d,"asset"),this.a.h(0,"symbol"))},
$S:4}
D.eFH.prototype={
$0(){return this.a},
$S:183}
D.eGb.prototype={
$1(d){var x,w,v,u,t,s,r,q,p,o,n,m=null,l=this.d,k=D.h7(J.t(this.c,"market")),j=k.h(0,"activeMarket"),i=j==null?m:J.k(j),h=J.z(k.h(0,"weekend"),!0)
if(l==null)x=m
else{l=l.h(0,"symbol")
x=l==null?m:J.k(l)}w=x!=null&&x!=="SPY"&&x!=="BTC/USD"
if(i==="SPY"){v="TRADING TODAY: SPY"
u="Weekday and the stock market is open. Only SPY can be bought. Bitcoin is traded on weekends only."}else if(i==="BTC/USD"){v="TRADING TODAY: BTC/USD"
u="Weekend. Only Bitcoin can be bought. SPY is traded on weekdays only."}else{u=h?"Bitcoin is traded on Saturday and Sunday.":"SPY is traded on weekdays while the stock market is open (9:30 AM to 4:00 PM ET). Bitcoin on weekends only."
v="NO MARKET TRADED RIGHT NOW"}l=i==null
t=l?E.jQ:C.dS
j=this.b.a
s=j?B.c.j(0.92):C.kY
r=A.n(22)
q=A.K(t.j(0.55),B.r,1)
p=y.p
o=A.a([],p)
if(!l)B.d.u(o,A.a([D.fv8(i,30),B.ar],p))
else B.d.u(o,A.a([A.W(B.vc,t,m,m,m,26),B.ar],p))
l=A.c(v,m,m,m,m,m,m,A.l(m,m,t,m,m,m,m,m,m,m,m,13.5,m,m,B.u,m,m,!0,m,0.3,m,m,m,m,m,m),m,m,m)
n=A.c(u,m,m,m,m,m,m,A.l(m,m,j?C.dE:B.c,m,m,m,m,m,m,m,m,12,m,m,m,m,1.3,!0,m,m,m,m,m,m,m,m),m,m,m)
l=A.a([l,B.cM,n,B.cM,A.c("Buys only when the fast line crosses up AND the big trend is rising (slow line higher than 1 hour ago, price above it).",m,m,m,m,m,m,A.l(m,m,j?C.dj:C.dk,m,m,m,m,m,m,m,m,11,m,m,m,m,1.3,!0,m,m,m,m,m,m,m,m),m,m,m)],p)
if(w)B.d.u(l,A.a([B.at,A.c("Still holding the earlier "+x+" pretend trade: the agent only checks its exits (every 5 minutes) and never buys "+x+" again.",m,m,m,m,m,m,C.fHa,m,m,m)],p))
o.push(A.E(A.x(l,B.B,m,B.e,B.h,0,B.p),1))
l=A.p(m,A.A(o,B.B,m,B.e,B.h,0,m,m),B.f,m,m,new A.o(s,m,q,r,m,m,B.m),m,m,m,m,B.bQ,m,m,m)
s=A.ft(m,m,j?B.c.j(0.92):C.kY,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,B.no,m,m,m,m,m,m)
return A.eE(m,B.L,A.aG(!1,B.a3,!0,m,A.x(A.a([l,B.S,A.bO(!1,A.c("Got it",m,m,m,m,m,m,A.l(m,m,j?C.dE:B.c,m,m,m,m,m,m,m,m,m,m,m,B.F,m,m,!0,m,m,m,m,m,m,m,m),m,m,m),m,m,!0,m,m,m,new D.eGa(d),m,s)],p),B.l,m,B.e,B.M,0,B.p),B.f,B.L,0,m,m,m,m,m,B.ai),m,m,m,B.zt,m,B.d7,m,m,m)},
$S:46}
D.eGa.prototype={
$0(){return A.a8(this.a,!1).e7()},
$S:0}
D.eFR.prototype={
$1(d){return J.z(J.t(d,"open"),!0)},
$S:4}
D.eFS.prototype={
$0(){var x=this
return x.a.cD9(x.b,x.c,x.d)},
$S:0}
D.eFT.prototype={
$1(d){return J.z(J.t(d,"asset"),J.t(this.a,"asset"))},
$S:4}
D.eFV.prototype={
$2(d,e){return B.ar},
$S:37}
D.eFU.prototype={
$2(d,a0){var x,w,v,u,t,s,r,q,p=this,o=null,n=p.b[a0],m=J.a2(n),l=J.k(m.h(n,"asset")),k=l===J.t(p.c,"asset"),j=D.f4(m.h(n,"changePct")),i=j>=0,h=D.aRo(n),g=p.d,f=J.z(g==null?o:g.h(0,"symbol"),l),e=J.z(D.h7(m.h(n,"reading")).h(0,"decision"),"ENTER")&&J.z(D.h7(m.h(n,"reading")).h(0,"dir"),"up")
g=p.a
x=p.e
w=x.a
v=w?B.c.j(0.92):C.kY
u=A.n(20)
if(k)t=D.fAg(l).c
else t=w?B.c:C.uR
t=A.K(t,B.r,k?2:1)
x=k?D.fAg(l).c.j(0.25):x.ga9z()
x=A.a([new A.aa(0,B.H,x,B.cz,k?18:12)],y.V)
s=D.fv8(l,20)
r=y.p
s=A.a([s,B.bf,A.E(A.c(l,o,1,B.a2,o,o,o,A.l(o,o,w?C.dE:B.c,o,o,o,o,o,o,o,o,12,o,o,B.F,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),1)],r)
if(!J.z(m.h(n,"open"),!0)){q=m.h(n,"offLabel")
q=J.k(q==null?"closed":q)
s.push(A.c(q,o,o,o,o,o,o,A.l(o,o,w?C.dj:C.dk,o,o,o,o,o,o,o,o,9.5,o,o,B.O,o,o,!0,o,o,o,o,o,o,o,o),o,o,o))}s=A.A(s,B.l,o,B.e,B.h,0,o,o)
m=D.ij(D.f4(m.h(n,"price")),!0,!1)
m=A.c(m,o,o,o,o,o,o,A.l(o,o,w?C.dE:B.c,o,o,o,o,o,o,o,o,17,o,o,B.O,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)
w=i?"+":""
q=B.i.aa(j,2)
w=A.a([A.c(w+q+"%",o,o,o,o,o,o,A.l(o,o,i?C.dS:C.eF,o,o,o,o,o,o,o,o,11,o,o,B.F,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),B.aY],r)
if(f)w.push(g.a0M("HOLDING",F.uF))
else if(e)w.push(g.a0M("BUY SIGNAL",C.dS))
w=A.A(w,B.l,o,B.e,B.h,0,o,o)
return A.aA(o,A.cU(o,A.x(A.a([s,B.ak,new A.dm(B.dx,B.a5,B.f,m,o),w,B.at,A.E(A.b4(o,o,o,new D.aKz(h,i?C.dS:C.eF,o),B.h2),1)],r),B.B,o,B.e,B.h,0,B.p),o,o,B.b_,new A.o(v,o,t,u,x,o,B.m),B.a3,o,o,o,o,M.anp,o,o,150),B.y,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,new D.eFQ(g,l),o,o,o,o,o,o,!1,B.a4)},
$S:80}
D.eFQ.prototype={
$0(){return this.a.a20(this.b)},
$S:0}
D.eFK.prototype={
$0(){var x=this.a
return x.l(new D.eFJ(x,this.b))},
$S:0}
D.eFJ.prototype={
$0(){return this.a.y=this.b},
$S:0}
D.eFL.prototype={
$0(){var x=this.a
return x.l(new D.eFI(x))},
$S:0}
D.eFI.prototype={
$0(){var x=this.a
return x.at=!x.at},
$S:0}
D.eFC.prototype={
$1(d){return J.z(J.t(d,"asset"),this.a.h(0,"symbol"))},
$S:4}
D.eFD.prototype={
$0(){return A.T(y.N,y.z)},
$S:183}
D.eFZ.prototype={
$2(d,e){var x=null,w=e.b,v=A.ao(x,A.p(x,x,B.f,x,x,new A.o(x,x,x,A.n(99),x,C.ccm,B.m),x,8,x,x,x,x,x,x),x,x,0,0,9,x),u=this.a.a,t=A.ao(x,A.p(x,x,B.f,(u?C.dE:B.c).j(0.5),x,x,x,18,x,x,x,x,x,2),x,x,w/3-1,x,4,x),s=B.i.D(this.b*w-9,0,w-18)
return new A.a6(x,26,new A.an(B.a0,x,B.ad,B.f,A.a([v,t,A.ao(x,A.p(x,x,B.f,x,x,new A.o(B.c,x,A.K(u?C.dE:B.c,B.r,3),x,x,x,B.a6),x,18,x,x,x,x,x,18),x,x,s,x,4,x)],y.p),x),x)},
$S:117}
D.eFM.prototype={
$0(){return this.a.SL(!this.b)},
$S:0}
D.eGe.prototype={
$1(d){return A.a1(d,y.N,y.z)},
$S:25}
D.eFB.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
x=u.x&&u.w?2:4
break
case 2:x=5
return A.b(u.a_0(!0),$async$$0)
case 5:x=3
break
case 4:u.l(new D.eFA(u))
case 3:return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
D.eFA.prototype={
$0(){return this.a.x=!0},
$S:0}
D.cWA.prototype={
$0(){return this.a.d=this.b},
$S:0}
D.cWJ.prototype={
$2(d,e){var x,w,v=null,u=e.b,t=this.a,s=t.a,r=s.c,q=s.d,p=s.e,o=s.f
s=s.r
x=t.d
w=d.L(y.D)
return A.aA(v,new A.a6(u,250,A.b4(v,v,v,new D.beb((w==null?B.CN:w).w.d,r,q,p,o,s,x,v),B.az),v),B.y,!1,v,v,v,v,v,new D.cWE(t),new D.cWF(t,u),new D.cWG(t,u),v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new D.cWH(t,u),new D.cWI(t),v,v,v,!1,B.a4)},
$S:36}
D.cWH.prototype={
$1(d){return this.a.aAw(d.b,this.b)},
$S:23}
D.cWF.prototype={
$1(d){return this.a.aAw(d.b,this.b)},
$S:50}
D.cWG.prototype={
$1(d){return this.a.aAw(d.b,this.b)},
$S:19}
D.cWE.prototype={
$1(d){var x=this.a
return x.l(new D.cWD(x))},
$S:38}
D.cWD.prototype={
$0(){return this.a.d=null},
$S:0}
D.cWI.prototype={
$1(d){return A.bL(B.fX,new D.cWC(this.a),y.b)},
$S:56}
D.cWC.prototype={
$0(){var x=this.a
if(x.c!=null)x.l(new D.cWB(x))},
$S:12}
D.cWB.prototype={
$0(){return this.a.d=null},
$S:0}
D.cWK.prototype={
$1(d){var x=this.a
return x*d+x/2},
$S:155}
D.cWM.prototype={
$1(d){var x=this.b,w=this.a,v=w.a
return x-(d-v)/(w.b-v)*x},
$S:5}
D.cWL.prototype={
$2(d,e){var x,w,v,u,t,s,r,q,p=this,o=$.S(),n=A.a([],y.v),m=new A.aH(o.r,B.aj,null,null,n)
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
m.ac()}u=!0}$.S()
o=A.L()
o.r=e.j(0.85).gp(0)
o.b=B.ac
o.c=2
o.d=B.bH
o.e=B.dO
p.e.af(m,o)},
$S:2017}
D.fgA.prototype={
$1(d){return D.f4(J.t(d,"c"))},
$S:2018}
D.fv9.prototype={
$1(d){var x=null,w=C.a8t.h(0,d),v=w.a,u=w.b,t=this.a,s=t*0.78,r=A.K(B.c,B.r,1.2)
return A.p(B.z,A.c(v,x,x,x,x,x,x,A.l(x,x,B.c,x,x,x,x,x,x,x,x,t*(v.length>1?0.26:0.36),x,x,B.u,x,x,!0,x,x,x,x,x,x,x,x),x,x,x),B.f,x,x,new A.o(u,x,r,x,x,x,B.a6),x,s,x,x,x,x,x,s)},
$S:131}
D.fAz.prototype={
$1(d){var x=y.N,w=y.z,v=A.a1(d,x,w)
w=A.dH(v,x,w)
w.n(0,"asset",v.h(0,"symbol"))
return w},
$S:25}
D.fET.prototype={
$1(d){return A.a1(d,y.N,y.z)},
$S:25}
D.fBF.prototype={
$1(d){return","},
$S:57}
D.fIU.prototype={
$3(d,e,f){var x=A.bP8(d,e,1,0,0,0,0,0)
while(A.lS(x)!==7)x=x.bM(864e8)
return x.bM(A.du(7*(f-1),0,0,0,0,0).a)},
$S:2019}
D.fFK.prototype={
$1(d){return J.k(d)},
$S:15}
D.fFL.prototype={
$2(d,e){var x=null,w=e.b,v=A.ao(x,A.p(x,x,B.f,x,x,new A.o(x,x,x,A.n(9),x,C.caB,B.m),x,6,x,x,x,x,x,x),x,x,0,0,4,x),u=B.i.D(this.a/100*w-7,0,w-14)
return new A.a6(x,14,new A.an(B.a0,x,B.ad,B.f,A.a([v,A.ao(x,A.p(x,x,B.f,x,x,new A.o(B.c,x,A.K(this.b.a?C.dE:B.c,B.r,2.5),x,x,x,B.a6),x,14,x,x,x,x,x,14),x,x,u,x,0,x)],y.p),x),x)},
$S:117}
D.dhU.prototype={
$1(d){var x=this.a
if(x.c!=null)x.l(new D.dhT())},
$S:11}
D.dhT.prototype={
$0(){},
$S:0}
D.fvZ.prototype={
$1(d){return J.k(d)},
$S:15}
D.eGq.prototype={
$1(d){return J.k(d)},
$S:15}
D.eHi.prototype={
$0(){return this.a.l(new D.eHh())},
$S:0}
D.eHh.prototype={
$0(){},
$S:0}
D.eHj.prototype={
$0(){return $.hjJ=this.a.at.a.a},
$S:0}
D.eHk.prototype={
$1(d){var x=this.a
if(x.c!=null)x.l(new D.eHg(x,d))},
$S:198}
D.eHg.prototype={
$0(){return this.a.Q=this.b},
$S:0}
D.eHl.prototype={
$1(d){this.a.Rc()
return null},
$S:11}
D.eHd.prototype={
$1(d){var x=y.N,w=y.z
w=A.dH(A.a1(d,x,w),x,w)
w.n(0,"asset",J.t(d,"symbol"))
return w},
$S:25}
D.eGL.prototype={
$0(){var x,w,v=this,u=v.c
if(J.z(u==null?null:J.t(u,"isAdmin"),!0))v.b.y=!0
x=v.d
if(x==null)x=v.a.a
if(x!=null){u=y.g.a(x.h(0,"done"))
if(u==null)u=A.a([],y.s)
w=y.Y.a(x.h(0,"lessons"))
v.b.x=A.J(["done",u,"lessons",w==null?A.T(y.N,y.z):w],y.N,y.z)}},
$S:0}
D.eGW.prototype={
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
return A.b(A.h0(A.J(["action","paLearnSave","progress",p.x],y.N,y.z),!1,!1,!1,!1,B.hb),$async$$0)
case 9:o=e
if(J.z(o==null?null:J.t(o,"allDone"),!0)){$.cmB=new A.V(A.fZ(0,0),0,!1)
A.P8()}case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$$0,w)},
$S:1}
D.eGt.prototype={
$1(d){return this.a.gJZ().q(0,d.a)},
$S:z+0}
D.eGu.prototype={
$0(){var x,w=this.a,v=y.N,u=A.d0(w.gJZ(),v)
u.I(0,this.b)
x=A.B(u,A.a5(u).k("ci.E"))
v=A.dH(w.x,v,y.z)
v.n(0,"done",x)
w.x=v},
$S:0}
D.eGv.prototype={
$1(d){return this.a.gJZ().q(0,d.a)},
$S:z+0}
D.eGw.prototype={
$1(d){var x=null
return A.eh(A.a([A.bI(C.hb7,x,new D.eGs(this.a,d),x)],y.p),x,x,x,C.h82,x,x,x,x,C.fWd,x)},
$S:18}
D.eGs.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:A.a8(v.b,!1).N(null)
x=2
return A.b(A.Mf(),$async$$0)
case 2:u=e
t=v.a
if(t.c!=null)t.l(new D.eGr(t,u))
return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
D.eGr.prototype={
$0(){return this.a.Q=this.b},
$S:0}
D.eGV.prototype={
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
v=J.b8(v,new D.eGU(),y.N)
v=A.B(v,v.$ti.k("aj.E"))
t.dy=v
v=w.h(x,"nowEt")
t.fr=J.k(v==null?"":v)
t.fx=J.z(w.h(x,"stockOpen"),!0)
t.r=new A.V(Date.now(),0,!1)},
$S:0}
D.eGU.prototype={
$1(d){return J.k(d)},
$S:15}
D.eGM.prototype={
$2(d,e){return new A.V(Date.now(),0,!1).by(e.a).a>18e7},
$S:2020}
D.eGN.prototype={
$0(){},
$S:0}
D.eHa.prototype={
$1(d){return J.z(J.t(d,"open"),!0)&&D.aRo(d).length>5},
$S:4}
D.eHb.prototype={
$2(d,e){return B.i.aQ(D.aHf(d),D.aHf(e))},
$S:40}
D.eGz.prototype={
$1(d){return J.z(J.t(d,"asset"),this.a.h(0,"symbol"))},
$S:4}
D.eGA.prototype={
$0(){return A.T(y.N,y.z)},
$S:183}
D.eGB.prototype={
$1(d){var x,w,v,u,t,s,r,q,p,o,n="typicalMin",m="enterWithinMin",l=J.a2(d),k=D.h7(l.h(d,"reading")),j=D.h7(k.h(0,"timing"))
if(j.h(0,n)==null)x=""
else{w=A.v(j.h(0,"dir"))
v=A.v(j.h(0,"ageMin"))
u=A.v(j.h(0,n))
t=A.v(j.h(0,"remainingMin"))
s=A.v(j.h(0,"dir"))
r=A.v(j.h(0,"worked"))
q=A.v(j.h(0,"of"))
p=D.f4(j.h(0,m))>0?"still early (enter within "+A.v(j.h(0,m))+" min)":"too late to enter"
x=", current "+w+" move "+v+" min old, such moves usually last "+u+" min (about "+t+" min left), past "+s+" moves really went that way "+r+" of "+q+" times, "+p}w=A.v(l.h(d,"asset"))
v=A.v(l.h(d,"name"))
u=D.hHS(d)
t=B.i.aa(D.f4(l.h(d,"changePct")),2)
l=J.z(l.h(d,"open"),!0)?"open":"closed"
s=k.h(0,"bias")
s=A.v(s==null?"unknown":s)
r=B.i.aa(D.f4(k.h(0,"score")),0)
q=k.h(0,"rsi")==null?"n/a":B.i.aa(D.f4(k.h(0,"rsi")),0)
p=k.h(0,"mom1h")==null?"n/a":B.i.aa(D.f4(k.h(0,"mom1h")),2)+"%"
o=k.h(0,"action")
return"- "+w+" ("+v+"): price "+u+", change "+t+"%, "+l+", "+s+", strength "+r+", RSI "+q+", last hour "+p+", reading: "+A.v(o==null?"n/a":o)+x+"."},
$S:52}
D.eGm.prototype={
$0(){$.Dy.push(new D.a_y(!0,this.b))
$.ah5=!0},
$S:0}
D.eGn.prototype={
$1(d){return(d.a?"Student":"Tutor")+": "+d.b},
$S:z+5}
D.eGo.prototype={
$1(d){return"- "+A.v(d)},
$S:15}
D.eGp.prototype={
$0(){},
$S:0}
D.eGX.prototype={
$1(d){var x=this.a.ax,w=x.f
if(w.length!==0){w=B.d.gd3(w).Q
w.toString
x.m6(w+200,B.e8,B.eW)}},
$S:7}
D.eHe.prototype={
$0(){return A.VI(this.a)},
$S:0}
D.eHf.prototype={
$0(){return this.b.gLf().C1(this.a.a)},
$S:0}
D.eGy.prototype={
$1(d){return this.a.gJZ().q(0,d.a)},
$S:z+0}
D.eGx.prototype={
$0(){return this.a.clu(this.b)},
$S:0}
D.eGT.prototype={
$1(d){var x=this.b,w=B.d.ce(C.E7,x),v=this.a,u=v.y,t=x.a,s=v.gJZ().q(0,t)
t=y.Y.a(D.h7(v.x.h(0,"lessons")).h(0,t))
if(t==null)t=B.lE
return new D.a0z(x,w+1,new D.eGP(v,x),u,s,A.a1(t,y.N,y.z),new D.eGQ(v,x),new D.eGR(v,x),new D.eGS(v),null)},
$S:z+6}
D.eGP.prototype={
$0(){var x=this.a,w=x.c
w.toString
return x.c6H(new D.a1v(A.Q(w).ax.a===B.dd),this.b.r)},
$S:143}
D.eGQ.prototype={
$1(d){var x=this.a
x.l(new D.eGO(x,this.b,d))
x.aCH()},
$S:121}
D.eGO.prototype={
$0(){var x=this.a,w=y.N,v=y.z,u=A.a1(D.h7(x.x.h(0,"lessons")),w,v)
u.n(0,this.b.a,this.c)
v=A.dH(x.x,w,v)
v.n(0,"lessons",u)
x.x=v},
$S:0}
D.eGR.prototype={
$0(){return this.a.ae7(this.b.a)},
$S:0}
D.eGS.prototype={
$1(d){var x=this.a,w=x.c
w.toString
A.a8(w,!1).e7()
x.aQV(d)},
$S:2}
D.eGC.prototype={
$2$last$lines(d,e){var x=this.a
return new D.adD(B.d.fE(x,Math.max(0,x.length-d)),this.b,null,e,this.c,null)},
$0(){return this.$2$last$lines(36,!0)},
$1$lines(d){return this.$2$last$lines(36,d)},
$S:2021}
D.eGK.prototype={
$1(d){var x=null
return A.c(d,x,x,x,x,x,x,A.l(x,x,this.a.a?C.dE:B.c,x,x,x,x,x,x,x,x,13,x,x,x,x,1.4,!0,x,x,x,x,x,x,x,x),x,x,x)},
$S:2022}
D.eGD.prototype={
$1(d){var x=J.a2(d)
return J.z(D.h7(x.h(d,"reading")).h(0,"decision"),"ENTER")&&J.z(D.h7(x.h(d,"reading")).h(0,"dir"),"up")},
$S:4}
D.eGE.prototype={
$1(d){return J.t(d,"asset")},
$S:592}
D.eGF.prototype={
$1(d){var x=J.a2(d)
return J.z(D.h7(x.h(d,"reading")).h(0,"decision"),"ENTER")&&J.z(D.h7(x.h(d,"reading")).h(0,"dir"),"down")},
$S:4}
D.eGG.prototype={
$1(d){return J.t(d,"asset")},
$S:592}
D.eGH.prototype={
$1(d){var x=J.a2(d)
return J.z(x.h(d,"open"),!0)&&D.h7(x.h(d,"reading")).h(0,"rsi")!=null},
$S:4}
D.eGI.prototype={
$1(d){return J.z(J.t(d,"open"),!0)},
$S:4}
D.eGJ.prototype={
$1(d){var x=D.h7(D.h7(J.t(d,"reading")).h(0,"timing"))
return D.f4(x.h(0,"of"))>=3&&D.f4(x.h(0,"worked"))/D.f4(x.h(0,"of"))>=0.5},
$S:4}
D.eH0.prototype={
$1(d){var x,w,v,u=this.a
if(u.cx!=="All"&&D.hCZ(d)!==u.cx)return!1
u=this.b
if(u.length===0)return!0
x=J.a2(d)
w=A.v(x.h(d,"asset"))
v=A.v(x.h(d,"name"))
x=x.h(d,"asset")
x=J.k(x==null?"":x)
return B.a.q((w+" "+v+" "+A.aL(x,"/","")).toLowerCase(),u)},
$S:4}
D.eH1.prototype={
$2(d,e){var x,w,v=J.a2(d),u=y.f,t=u.b(D.h7(v.h(d,"reading")).h(0,"entry"))?0:1,s=J.a2(e),r=u.b(D.h7(s.h(e,"reading")).h(0,"entry"))?0:1
if(t!==r)return t-r
u=this.a.dx
x=u.am(0,v.h(d,"asset"))?0:1
w=u.am(0,s.h(e,"asset"))?0:1
if(x!==w)return x-w
return B.i.aQ(D.aHf(d),D.aHf(e))},
$S:40}
D.eH9.prototype={
$2(d,e){var x=D.h7(J.t(d,"reading"))
return J.z(x.h(0,"dir"),e)&&B.d.q(C.aCc,x.h(0,"decision"))},
$S:2024}
D.eH2.prototype={
$1(d){return this.a.$2(d,"up")},
$S:4}
D.eH3.prototype={
$1(d){return this.a.$2(d,"down")},
$S:4}
D.eH5.prototype={
$0(){var x=this.a
return x.l(new D.eH_(x,this.b))},
$S:0}
D.eH_.prototype={
$0(){return this.a.cx=this.b},
$S:0}
D.eH4.prototype={
$1(d){return D.hCZ(d)===this.a},
$S:4}
D.eH6.prototype={
$0(){var x=this.a
x.l(new D.eGZ(x))},
$S:0}
D.eGZ.prototype={
$0(){var x=this.a,w=x.CW
x.CW=!w
if(w){x.ch=""
x.cy.bN(0,B.ci)}},
$S:0}
D.eH7.prototype={
$1(d){var x=this.a
return x.l(new D.eGY(x,d))},
$S:2}
D.eGY.prototype={
$0(){return this.a.ch=this.b},
$S:0}
D.eH8.prototype={
$0(){return this.a.aQV("What is happening with "+A.v(J.t(this.b,"asset"))+" right now? Is it bullish or bearish, how long might the move last, and is it too late to enter?")},
$S:0}
D.eGi.prototype={
$1(d){return this.a.gJZ().q(0,d.a)},
$S:z+0}
D.eGj.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=!v.b?2:4
break
case 2:v.a.gLf().C1(0)
x=3
break
case 4:x=5
return A.b(A.Mf(),$async$$0)
case 5:u=e
t=v.a
if(t.c!=null)t.l(new D.eGh(t,u))
$.cmB=new A.V(A.fZ(0,0),0,!1)
A.P8()
case 3:return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
D.eGh.prototype={
$0(){return this.a.Q=this.b},
$S:0}
D.eGk.prototype={
$0(){return this.a.JY(this.b)},
$S:0}
D.eGl.prototype={
$0(){var x=this.a
return x.JY(x.at.a.a)},
$S:0}
D.dur.prototype={
$1(d){var x
y.g.a(d)
x=d==null?B.cb:d
x=J.b8(x,new D.dus(),y.S)
x=A.B(x,x.$ti.k("aj.E"))
return x},
$S:432}
D.dus.prototype={
$1(d){var x=A.c8(A.v(d),null)
return x==null?0:x},
$S:311}
D.dup.prototype={
$1(d){var x,w
y.Y.a(d)
x=d==null?B.lE:d
w=y.S
return J.oL(x,new D.duq(),w,w)},
$S:2025}
D.duq.prototype={
$2(d,e){var x,w=A.c8(A.v(d),null)
if(w==null)w=0
x=A.c8(A.v(e),null)
if(x==null)x=0
return new A.bu(w,x,y.a)},
$S:2026}
D.dun.prototype={
$1(d){var x
if(d>=0){x=this.a.d
x===$&&A.d()
x=d<x.length}else x=!1
return x},
$S:30}
D.duo.prototype={
$1(d){var x,w=this.a
if(w.c==null)return
x=w.w
x===$&&A.d()
if(x.a!==0)w.l(new D.dum(w))},
$S:11}
D.dum.prototype={
$0(){return this.a.cFX()},
$S:0}
D.duf.prototype={
$2(d,e){return new A.bu(""+d,e,y.W)},
$S:586}
D.dug.prototype={
$2(d,e){return new A.bu(""+d,e,y.W)},
$S:586}
D.duh.prototype={
$1(d){var x=this.a,w=x.x
w===$&&A.d()
if(!B.d.q(w,d)){x=x.e
x===$&&A.d()
x=!B.d.q(x,d)}else x=!1
return x},
$S:30}
D.dui.prototype={
$1(d){var x=this.a,w=x.e
w===$&&A.d()
if(!B.d.q(w,d)){x=x.f
x===$&&A.d()
x=!x.q(0,d)}else x=!1
return x},
$S:30}
D.dud.prototype={
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
D.duj.prototype={
$0(){return A.VI(this.a)},
$S:0}
D.duk.prototype={
$0(){return this.a.a.cZZ('I just read the lesson "'+this.b.b+'". Can you explain it again with a live example from the markets right now?')},
$S:0}
D.dul.prototype={
$0(){this.a.a.rn()
A.VI(this.b)},
$S:0}
D.due.prototype={
$0(){return this.a.cg4(this.b,this.c)},
$S:0};(function aliases(){var x=D.aPe.prototype
x.bBp=x.t})();(function installTearOffs(){var x=a._instance_0u,w=a._instance_1u
var v
x(v=D.aHe.prototype,"gcls","clt",2)
x(v,"gcyU","a3i",1)
x(v=D.aHg.prototype,"gcg7","Rc",1)
w(v,"gcg5","JY",4)})();(function inheritance(){var x=a.mixinHard,w=a.inheritMany,v=a.inherit
w(A.af,[D.atM,D.adD,D.aCq,D.XD,D.a0z])
w(A.ah,[D.aHe,D.bea,D.bhH,D.aPe,D.bkS])
w(A.fO,[D.eGg,D.eFY,D.eFN,D.eG7,D.eFW,D.eG3,D.eFE,D.eFG,D.eGb,D.eFR,D.eFT,D.eFC,D.eGe,D.cWH,D.cWF,D.cWG,D.cWE,D.cWI,D.cWK,D.cWM,D.fgA,D.fv9,D.fAz,D.fET,D.fBF,D.fIU,D.fFK,D.dhU,D.fvZ,D.eGq,D.eHk,D.eHl,D.eHd,D.eGt,D.eGv,D.eGw,D.eGU,D.eHa,D.eGz,D.eGB,D.eGn,D.eGo,D.eGX,D.eGy,D.eGT,D.eGQ,D.eGS,D.eGC,D.eGK,D.eGD,D.eGE,D.eGF,D.eGG,D.eGH,D.eGI,D.eGJ,D.eH0,D.eH2,D.eH3,D.eH4,D.eH7,D.eGi,D.dur,D.dus,D.dup,D.dun,D.duo,D.duh,D.dui])
w(A.hP,[D.eFP,D.eFX,D.eG_,D.eFO,D.eG5,D.eG6,D.eG8,D.eG9,D.eG1,D.eG2,D.eGf,D.eGc,D.eGd,D.eFF,D.eFH,D.eGa,D.eFS,D.eFQ,D.eFK,D.eFJ,D.eFL,D.eFI,D.eFD,D.eFM,D.eFB,D.eFA,D.cWA,D.cWD,D.cWC,D.cWB,D.dhT,D.eHi,D.eHh,D.eHj,D.eHg,D.eGL,D.eGW,D.eGu,D.eGs,D.eGr,D.eGV,D.eGN,D.eGA,D.eGm,D.eGp,D.eHe,D.eHf,D.eGx,D.eGP,D.eGO,D.eGR,D.eH5,D.eH_,D.eH6,D.eGZ,D.eGY,D.eH8,D.eGj,D.eGh,D.eGk,D.eGl,D.dum,D.dud,D.duj,D.duk,D.dul,D.due])
w(A.id,[D.eG0,D.eG4,D.eFV,D.eFU,D.eFZ,D.cWJ,D.cWL,D.fFL,D.eGM,D.eHb,D.eH1,D.eH9,D.duq,D.duf,D.dug])
w(A.lI,[D.beb,D.aKz])
w(A.aE,[D.z1,D.a1v,D.cC,D.uu,D.a_y])
v(D.aHg,D.aPe)
x(D.aPe,A.cg)})()
A.hZ(b.typeUniverse,JSON.parse('{"atM":{"af":[],"w":[]},"adD":{"af":[],"w":[]},"aCq":{"af":[],"w":[]},"XD":{"af":[],"w":[]},"a0z":{"af":[],"w":[]},"aHe":{"ah":["atM"]},"bea":{"ah":["adD"]},"beb":{"aC":[]},"aKz":{"aC":[]},"bhH":{"ah":["aCq"]},"aHg":{"ah":["XD"]},"bkS":{"ah":["a0z"]}}'))
var y=(function rtii(){var x=A.as
return{c:x("kR<u?>"),D:x("Ez"),V:x("N<aa>"),O:x("N<u>"),t:x("N<a9<m,@>>"),v:x("N<fX>"),L:x("N<+(m,m)>"),s:x("N<m>"),p:x("N<w>"),r:x("N<cC>"),n:x("N<G>"),X:x("N<F>"),W:x("bu<m,F>"),a:x("bu<F,F>"),P:x("a9<m,@>"),f:x("a9<@,@>"),b:x("cm"),R:x("+at,from,to(V,m,m)"),N:x("m"),E:x("X<uu>"),q:x("kw"),y:x("P"),z:x("@"),S:x("F"),g:x("ai<@>?"),Y:x("a9<@,@>?"),H:x("~")}})();(function constants(){var x=a.makeConstList
C.dS=new A.u(1,0.12156862745098039,0.7490196078431373,0.592156862745098,B.q)
C.b5n=new A.kR(C.dS,y.c)
C.kY=new A.u(1,0.08627450980392157,0.10588235294117647,0.1803921568627451,B.q)
C.dj=new A.u(1,0.5411764705882353,0.5607843137254902,0.6392156862745098,B.q)
C.yI=new A.u(1,0.0392156862745098,0.050980392156862744,0.09411764705882353,B.q)
C.yK=new A.u(1,0.9294117647058824,0.9372549019607843,0.9803921568627451,B.q)
C.dk=new A.u(1,0.5529411764705883,0.5843137254901961,0.6705882352941176,B.q)
C.l_=new A.u(1,0.08627450980392157,0.09019607843137255,0.11372549019607843,B.q)
C.qz=new A.u(1,0.14901960784313725,0.17647058823529413,0.27058823529411763,B.q)
C.qC=new A.u(1,0.9058823529411765,0.9098039215686274,0.9411764705882353,B.q)
C.a_q=new A.u(1,0.06666666666666667,0.08235294117647059,0.1607843137254902,B.q)
C.GR=new A.u(1,0.12549019607843137,0.14901960784313725,0.23137254901960785,B.q)
C.a_A=new A.u(1,0.9725490196078431,0.9450980392156862,0.9490196078431372,B.q)
C.uR=new A.u(1,0.13725490196078433,0.16470588235294117,0.25882352941176473,B.q)
C.H1=new A.u(1,0.9372549019607843,0.9411764705882353,0.9607843137254902,B.q)
C.dE=new A.u(1,0.07058823529411765,0.0784313725490196,0.10980392156862745,B.q)
C.eF=new A.u(1,0.9411764705882353,0.33725490196078434,0.41568627450980394,B.q)
C.Hb=new A.u(1,0.9568627450980393,0.9607843137254902,0.9803921568627451,B.q)
C.Hc=new A.u(1,0.11372549019607843,0.13725490196078433,0.2196078431372549,B.q)
C.bEx=new A.R(0,0,0,7)
C.bG9=new A.R(12,8,12,6)
C.bGj=new A.R(13,7,13,7)
C.bH8=new A.R(16,10,16,30)
C.bHu=new A.R(16,4,16,40)
C.bHx=new A.R(16,6,16,16)
C.aob=new A.R(16,6,16,40)
C.bHF=new A.R(16,8,16,40)
C.bKq=new A.R(4,0,4,8)
C.bKJ=new A.R(4,6,4,14)
C.bKW=new A.R(6,0,6,14)
C.arh=new A.a_(62840,"MaterialIcons",!1)
C.bVP=new A.a_(983325,"MaterialIcons",!1)
C.asu=new A.a_(983635,"MaterialIcons",!0)
C.asf=new A.a_(983372,"MaterialIcons",!1)
C.bXo=new A.ae(C.asf,18,C.dS,null,null,null)
C.bXQ=new A.ae(B.xe,16,null,null,null,null)
C.c_U=new A.ae(B.r4,7,C.dS,null,null,null)
C.c0B=new A.ae(B.ea,18,C.dS,null,null,null)
C.c0R=new A.ae(B.rc,20,B.c,null,null,null)
C.c2_=new A.ae(B.he,16,B.c,null,null,null)
C.c35=new A.ae(B.xe,18,null,null,null,null)
C.c58=new A.ae(B.QH,18,null,null,null,null)
C.c5c=new A.ae(B.xh,null,C.eF,null,null,null)
C.c6A=new A.ae(B.Qf,18,C.eF,null,null,null)
C.cNX=x([B.dz,B.fw,B.i0],y.O)
C.caA=new A.a7(B.ay,B.aC,B.x,C.cNX,null,null)
C.aCJ=x([C.eF,B.au,C.dS],y.O)
C.caB=new A.a7(B.a5,B.a9,B.x,C.aCJ,null,null)
C.dsn=x([0,0.33,1],y.n)
C.ccm=new A.a7(B.a5,B.a9,B.x,C.aCJ,C.dsn,null)
C.dqH=x([B.dz,B.i0,B.bA],y.O)
C.cee=new A.a7(B.ay,B.aC,B.x,C.dqH,null,null)
C.dt2=x([B.i0,B.bA],y.O)
C.ceC=new A.a7(B.a5,B.a9,B.x,C.dt2,null,null)
C.co7=x([12,24,48],y.X)
C.f8_=new A.y("The idea","Trading means buying something and selling it later. You make money when you sell for more than you paid, and you lose money when you sell for less. That is all a trade is.")
C.f_E=new A.y("Why prices move","Every price is set by buyers and sellers. When more people want to buy than sell, the price goes up. When more want to sell, it goes down. A chart is simply a picture of that tug of war over time.")
C.f0A=new A.y("Nobody knows the future","No person, app or AI can know for sure where a price goes next. Good traders do not guess. They follow clear rules, keep losses small, and let the winners pay for the losers.")
C.f7I=new A.y("Why pretend money first","This agent uses Alpaca paper money: real prices, fake dollars. You can learn every step, make mistakes and see real results without risking a cent. Professionals practise this way too.")
C.cZw=x([C.f8_,C.f_E,C.f0A,C.f7I],y.L)
C.daI=x(["When you buy","When you sell for more than you paid","When the market opens"],y.s)
C.b3m=new D.cC("When do you make money on a trade?",C.daI,1,"Profit only exists after you sell higher than you bought.")
C.d57=x(["More buyers than sellers","The app","The time of day"],y.s)
C.b3g=new D.cC("What makes a price go up?",C.d57,0,"More people wanting to buy pushes the price up.")
C.dyO=x([C.b3m,C.b3g],y.r)
C.hNJ=new D.uu("basics","What trading really is","Buyers, sellers and why prices move",4,N.l8,B.au,"basics",C.cZw,C.dyO)
C.bWr=new A.a_(983780,"MaterialIcons",!1)
C.eRj=new A.y("One candle = one time slice","On this chart every candle is 5 minutes. It shows four prices: where it started (open), where it ended (close), the highest point (high) and the lowest point (low).")
C.eYZ=new A.y("The colours","Green candle: the price closed HIGHER than it opened, buyers won those 5 minutes. Yellow candle: it closed LOWER, sellers won. Many apps use red instead of yellow, it means the same thing.")
C.f9c=new A.y("Body and wicks","The thick part (the body) runs from open to close. The thin lines (the wicks) show how far the price went up or down before coming back. A long wick on top means buyers pushed up but sellers pushed it back down.")
C.f6i=new A.y("Reading a row of candles","Several green candles in a row, each closing higher, show buyers in control. Many yellow ones closing lower show sellers in control. Candles that go up and down with no direction mean the market is undecided.")
C.cfI=x([C.eRj,C.eYZ,C.f9c,C.f6i],y.L)
C.daP=x(["It closed higher than it opened","It is a good time to buy","The market is closed"],y.s)
C.b3k=new D.cC("A green candle means...",C.daP,0,"Colour only tells you if it closed above or below where it opened.")
C.cGC=x(["1 day","5 minutes","1 hour"],y.s)
C.b3a=new D.cC("On this chart one candle covers...",C.cGC,1,"The agent works with 5-minute candles.")
C.dh9=x([C.b3k,C.b3a],y.r)
C.hNO=new D.uu("candles","Reading candles","Open, close, high and low in one shape",5,C.bWr,C.dS,"candles",C.cfI,C.dh9)
C.f1H=new A.y("Bullish","An uptrend. The price makes higher highs and higher lows, like climbing stairs. Buyers are in control. Traders call this bullish (a bull attacks upward with its horns).")
C.fa7=new A.y("Bearish","A downtrend. Lower highs and lower lows, like walking down stairs. Sellers are in control. This is bearish (a bear swipes downward).")
C.eSB=new A.y("Sideways","The price bounces between a ceiling and a floor with no clear direction. Most trading signals fail here, so the best move is often to wait.")
C.f4s=new A.y("The golden rule","Trade WITH the trend, not against it. Buying in a downtrend because it looks cheap is how most beginners lose. The agent only buys when the trend turns up.")
C.d8U=x([C.f1H,C.fa7,C.eSB,C.f4s],y.L)
C.d72=x(["Bearish","Bullish","Sideways"],y.s)
C.b3l=new D.cC("Higher highs and higher lows means...",C.d72,1,"Climbing stairs = uptrend = bullish.")
C.db_=x(["Work best","Often fail","Are always right"],y.s)
C.b3d=new D.cC("In a sideways market, signals...",C.db_,1,"With no direction, signals flip back and forth.")
C.dzk=x([C.b3l,C.b3d],y.r)
C.hNG=new D.uu("trend","Trends: up, down, sideways","Bullish, bearish and how to tell",5,B.nf,B.ce,"trend",C.d8U,C.dzk)
C.fb8=new A.y("What an average line is","A moving average is the average closing price of the last few candles, drawn as a smooth line. It hides the small wiggles so you can see the real direction.")
C.eQt=new A.y("Fast line (pink)","The average of the last 9 candles, about 45 minutes. It reacts quickly to new moves.")
C.eS6=new A.y("Slow line (purple)","The average of the last 21 candles, about 1 hour 45 minutes. It moves slowly and shows the bigger direction.")
C.f2J=new A.y("How to read them","Fast line ABOVE slow line: recent prices are higher than older ones, the trend is up. Fast line BELOW: the trend is down. When the price itself is above both lines, buyers are strong.")
C.dsA=x([C.fb8,C.eQt,C.eS6,C.f2J],y.L)
C.dId=x(["45 minutes","1 day","1 week"],y.s)
C.b3n=new D.cC("The pink fast line averages about...",C.dId,0,"9 candles x 5 minutes = 45 minutes.")
C.dDK=x(["Trend is up","Trend is down","Market closed"],y.s)
C.b3f=new D.cC("Fast line above slow line means...",C.dDK,0,"Recent prices are higher than older prices.")
C.dol=x([C.b3n,C.b3f],y.r)
C.hNI=new D.uu("ma","Moving averages","The pink fast line and the purple slow line",6,I.xm,B.bA,"ma",C.dsA,C.dol)
C.eYD=new A.y("Buy signal","When the fast line crosses UP through the slow line, the short-term trend has just turned up. That moment is the buy signal. The agent buys $50 at that point.")
C.f_N=new A.y("Sell signal","When the fast line crosses back DOWN through the slow line, the up move is over. That is the sell signal, and the agent closes the trade.")
C.f4D=new A.y("Why it must be fresh","If the cross happened an hour ago, the easy part of the move may be gone. Buying late means buying high. So the agent only acts on a cross that happened since its last check, never on an old one.")
C.f6B=new A.y("The weakness","In sideways markets the lines cross back and forth and give false signals. That is why every trade also has a stop loss: when a signal is wrong, the loss stays small.")
C.dwF=x([C.eYD,C.f_N,C.f4D,C.f6B],y.L)
C.duO=x(["Crosses above the slow line","Crosses below the slow line","Is flat"],y.s)
C.b3e=new D.cC("The buy signal is when the fast line...",C.duO,0,"Crossing up = trend turning up.")
C.dH8=x(["To avoid buying late","The app is slow","Old crosses are illegal"],y.s)
C.b38=new D.cC("Why does the agent skip old crosses?",C.dH8,0,"A late entry means buying after most of the move.")
C.d5e=x([C.b3e,C.b38],y.r)
C.hNL=new D.uu("cross","The crossover signal","Exactly when the agent buys and sells",6,B.arn,B.b2,"cross",C.dwF,C.d5e)
C.bVY=new A.a_(983477,"MaterialIcons",!1)
C.f4b=new A.y("What RSI measures","RSI (Relative Strength Index) compares the size of recent rises with recent falls and gives a number from 0 to 100. Above 50, rises have been bigger. Below 50, falls have been bigger.")
C.eUi=new A.y("Above 70: stretched","The price rose very fast. It is called overbought. It often pauses or pulls back, so buying right then is risky. It can still keep rising in a strong trend.")
C.f4i=new A.y("Below 30: oversold","The price fell very fast. It often bounces, but in a strong downtrend it can stay low. Oversold is not a reason to buy on its own.")
C.f3r=new A.y("How to use it","Use RSI as a second opinion. A buy signal with RSI between 50 and 70 is healthy. A buy signal with RSI above 75 means the move may already be tired.")
C.d5E=x([C.f4b,C.eUi,C.f4i,C.f3r],y.L)
C.dh0=x(["Oversold","Overbought","Neutral"],y.s)
C.b37=new D.cC("RSI above 70 is called...",C.dh0,1,"It rose fast and is stretched.")
C.b3j=new D.cC("RSI below 30 always means buy.",L.T9,1,"Falling markets can stay oversold. It is a hint, not a signal.")
C.dI5=x([C.b37,C.b3j],y.r)
C.hNN=new D.uu("rsi","RSI: momentum","Is the move strong, stretched or tired?",5,C.bVY,B.cD,"rsi",C.d5E,C.dI5)
C.eXt=new A.y("Decide the exit before you enter","Every agent trade has two exits set before it starts. Take profit at +3% (about +$1.50 on $50) and stop loss at -1.5% (about -$0.75).")
C.eLm=new A.y("Win twice what you risk","The win (+$1.50) is twice the loss (-$0.75). Because of that, you only need to be right about 1 trade in 3 to break even. Being right half the time would be clearly profitable.")
C.eRK=new A.y("Size matters most","The agent uses $50 per trade even though the paper account has $100,000. Small trades mean no single mistake can hurt much. Pros rarely risk more than 1 to 2 percent of their money on one trade.")
C.f12=new A.y("Never move the stop","The biggest beginner mistake is hoping a losing trade comes back and moving the stop lower. Small losses are the cost of doing business. Big losses end accounts.")
C.dtV=x([C.eXt,C.eLm,C.eRK,C.f12],y.L)
C.dof=x(["1 in 3 trades","9 in 10 trades","Every trade"],y.s)
C.b3o=new D.cC("With +$1.50 wins and -$0.75 losses, to break even you must win about...",C.dof,0,"One win (+1.50) pays for two losses (-1.50).")
C.dfy=x(["Move the stop lower","Let the stop loss work","Buy more"],y.s)
C.b3b=new D.cC("A trade is losing. The best move is...",C.dfy,1,"The stop exists to keep losses small.")
C.cYm=x([C.b3o,C.b3b],y.r)
C.hNH=new D.uu("risk","Risk: stop loss and take profit","Why small losses beat big wins",7,B.rd,C.eF,"risk",C.dtV,C.cYm)
C.bWx=new A.a_(983848,"MaterialIcons",!1)
C.eUU=new A.y("Bad days happen","Some days every signal fails. The danger is trying to win it back by trading more and bigger. That is called revenge trading and it is how small losses become big ones.")
C.f_6=new A.y("Daily stop: $10","If the day loses $10, the agent makes no more buys until tomorrow. It walks away and lets the market calm down.")
C.f0W=new A.y("Total brake: $25","If total losses reach $25, the agent pauses completely until you review what happened and turn it back on. Reviewing is the most important part of learning.")
C.eTi=new A.y("Your own rules","When you trade yourself, set the same kind of limits before the day starts, and keep them even when it hurts.")
C.dzB=x([C.eUU,C.f_6,C.f0W,C.eTi],y.L)
C.dka=x(["Doubles the next trade","Stops buying for the day","Sells everything forever"],y.s)
C.b3h=new D.cC("After losing $10 in a day, the agent...",C.dka,1,"The daily stop prevents revenge trading.")
C.dCn=x([C.b3h],y.r)
C.hNF=new D.uu("brakes","Daily stop and total brake","Protecting your account from bad days",4,C.bWx,E.jQ,"brakes",C.dzB,C.dCn)
C.aj6=new A.u(1,0.3843137254901961,0.49411764705882355,0.9176470588235294,B.q)
C.eZR=new A.y("Stocks and funds","SPY, QQQ, Apple, Microsoft, Nvidia, Tesla and Amazon trade on US market days from 9:30 AM to 4:00 PM Eastern Time. Closed at night, on weekends and on holidays.")
C.f_K=new A.y("Overnight gaps","News can come out while the stock market is closed, so the next morning it can open far higher or lower. That is why the agent sells stocks by 3:55 PM and never holds them overnight.")
C.eXO=new A.y("Crypto","Bitcoin, Ethereum and Solana trade all day, every day, including weekends. More hours means more chances, but crypto also moves faster and harder, so stops get hit more often.")
C.f63=new A.y("Funds vs single companies","SPY holds the 500 biggest US companies and QQQ holds 100 big tech companies, so they move more calmly. One company like Tesla can jump a lot on its own news.")
C.cTn=x([C.eZR,C.f_K,C.eXO,C.f63],y.L)
C.d8T=x(["Only weekdays","All day, every day","Only at night"],y.s)
C.b3i=new D.cC("When can Bitcoin be traded?",C.d8T,1,"Crypto never closes.")
C.d5T=x(["To avoid overnight gaps","Stocks expire","It is the law"],y.s)
C.b39=new D.cC("Why sell stocks before the close?",C.d5T,0,"Overnight news can make the price jump at the open.")
C.dpn=x([C.b3i,C.b39],y.r)
C.hNM=new D.uu("hours","Stocks vs crypto","Market hours, weekends and jumpiness",5,B.jX,C.aj6,"hours",C.cTn,C.dpn)
C.f4E=new A.y("Judge many trades, not one","One trade tells you nothing. Luck decides single trades. After 20 to 50 trades you start to see if a method really works. That is why the plan is 2 to 4 weeks of paper trading.")
C.ePO=new A.y("Keep a journal","For each trade write: why you bought, where your stop and target were, what happened, and what you learned. The Pretend trades list on the main screen is the agent's journal.")
C.eQm=new A.y("Follow the rules exactly","The point of the agent is to follow rules perfectly, with no fear and no greed. Check that it did. If it ever breaks a rule, that is a bug to fix before real money.")
C.eXP=new A.y("Before real money","Real money comes only after a long paper test with a positive result, a full review, and money you can truly afford to lose. Never borrow to trade.")
C.dxX=x([C.f4E,C.ePO,C.eQm,C.eXP],y.L)
C.dEG=x(["1","3","20 or more"],y.s)
C.b36=new D.cC("How many trades before judging a method?",C.dEG,2,"Small samples are mostly luck.")
C.dHD=x(["Borrowed","Money you can afford to lose","Rent money"],y.s)
C.b3c=new D.cC("Money for trading should be...",C.dHD,1,"Never trade money you need.")
C.dI0=x([C.b36,C.b3c],y.r)
C.hNK=new D.uu("practice","Practising like a pro","Journals, patience and judging results",5,B.m1,B.bi,"practice",C.dxX,C.dI0)
C.E7=x([C.hNJ,C.hNO,C.hNG,C.hNI,C.hNL,C.hNN,C.hNH,C.hNF,C.hNM,C.hNK],A.as("N<uu>"))
C.d6j=x(["All","Forex","Stocks","Crypto"],y.s)
C.aCc=x(["ENTER","SKIP_WEAK","WAIT_LATE"],y.s)
C.dct=x(["Which market looks strongest right now?","Is Bitcoin going up or down right now?","Why has the agent not bought yet?","Explain RSI like I am new","How do I know when to sell?","What does bullish and bearish mean?"],y.s)
C.eul={basics:0,candles:1,trend:2,ma:3,cross:4,rsi:5,risk:6,brakes:7,hours:8,practice:9}
C.dbC=x(["A $4 profit","A $4 loss","Nothing"],y.s)
C.hRL=new D.cC("You buy at $100 and sell at $96. What happened?",C.dbC,1,"Selling lower than you bought is a loss.")
C.duM=x(["The future price","How the price moved over time","Who is buying"],y.s)
C.hRJ=new D.cC("What does a price chart show?",C.duM,1,"A chart is a record of past prices.")
C.dGj=x(["Yes, experts can","Yes, an AI can","No, nobody can"],y.s)
C.hRS=new D.cC("Can anyone know for sure where a price goes next?",C.dGj,2,"Markets are uncertain; rules and stops manage that.")
C.ddC=x(["Trading with real prices and pretend money","Trading newspapers","Trading on paper forms"],y.s)
C.hSk=new D.cC("What is paper trading?",C.ddC,0,"Real prices, fake dollars: practice without risk.")
C.dy_=x(["It is faster","To learn without risking real money","Pretend money earns more"],y.s)
C.hRO=new D.cC("Why practise with pretend money first?",C.dy_,1,"Mistakes cost nothing while you learn.")
C.csB=x(["Rise","Fall","Stay frozen"],y.s)
C.hRT=new D.cC("More people want to sell than buy. The price will most likely...",C.csB,1,"Selling pressure pushes prices down.")
C.dgP=x(["Clear rules and small losses","Lucky guesses","Tips from friends"],y.s)
C.hTq=new D.cC("Good traders mostly rely on...",C.dgP,0,"Rules and risk control beat guessing.")
C.ceL=x(["$45","$55","$60"],y.s)
C.hSS=new D.cC("You buy $50 of something and it rises 10%. It is now worth...",C.ceL,1,"10% of $50 is $5, so $55.")
C.cY4=x(["Buy","Sell","Look at the chart"],y.s)
C.hS9=new D.cC("A trade is only finished when you...",C.cY4,1,"Until you sell, a gain or loss is not locked in.")
C.dFy=x(["Good traders never lose","Every trader has losing trades","Losses only happen to beginners"],y.s)
C.hS4=new D.cC("Which is true about losses?",C.dFy,1,"Losing trades are normal; keeping them small is the skill.")
C.cQY=x(["Real dollars are spent","No real money is at risk","It trades in secret"],y.s)
C.hT_=new D.cC("The agent uses Alpaca paper money. That means...",C.cQY,1,"Paper accounts use fake dollars.")
C.dqq=x(["The government","Buyers and sellers agreeing","The app makers"],y.s)
C.hRI=new D.cC("A price is set by...",C.dqq,1,"Each trade is a buyer and seller agreeing on a price.")
C.deb=x([C.b3m,C.b3g,C.hRL,C.hRJ,C.hRS,C.hSk,C.hRO,C.hRT,C.hTq,C.hSS,C.hS9,C.hS4,C.hT_,C.hRI],y.r)
C.dat=x(["It closed lower than it opened","It closed higher","Nothing traded"],y.s)
C.hTb=new D.cC("A yellow (or red) candle means...",C.dat,0,"Sellers won that time slice.")
C.deO=x(["Wick","Body","Tail light"],y.s)
C.hRV=new D.cC("The thick part of a candle is called the...",C.deO,1,"The body runs from open to close.")
C.dnn=x(["Wicks","Bodies","Averages"],y.s)
C.hSF=new D.cC("The thin lines above and below are the...",C.dnn,0,"Wicks show the high and the low.")
C.def=x(["Open","Close","Highest price"],y.s)
C.hT1=new D.cC("The top of the upper wick shows the...",C.def,2,"The tip of the upper wick is the high.")
C.dIr=x(["Lowest price","Open","Average"],y.s)
C.hTk=new D.cC("The bottom of the lower wick shows the...",C.dIr,0,"The tip of the lower wick is the low.")
C.dgX=x(["One","Two","Four"],y.s)
C.hST=new D.cC("How many prices does one candle show?",C.dgX,2,"Open, high, low and close.")
C.dsk=x(["Buyers pushed up but sellers pushed it back down","The price never moved","The market closed early"],y.s)
C.hSV=new D.cC("A long upper wick means...",C.dsk,0,"The price went high, then fell back before the close.")
C.d5n=x(["Sellers in control","Buyers in control","No direction"],y.s)
C.hSC=new D.cC("Many green candles in a row, each closing higher, show...",C.d5n,1,"Rising closes mean buyers are winning.")
C.d53=x(["A strong uptrend","The market is undecided","A crash"],y.s)
C.hT9=new D.cC("Candles going up and down with no direction mean...",C.d53,1,"Mixed candles show indecision.")
C.daR=x(["Green","Yellow","Grey"],y.s)
C.hSR=new D.cC("A candle opened at 10 and closed at 12. Its colour here is...",C.daR,0,"It closed above the open.")
C.dJ2=x(["5 candles","12 candles","60 candles"],y.s)
C.hRW=new D.cC("In 1 hour of 5-minute candles there are...",C.dJ2,1,"60 minutes divided by 5 is 12.")
C.dr4=x(["The first price in that time","The last price in that time","The highest price"],y.s)
C.hTs=new D.cC('The "close" of a candle is...',C.dr4,1,"Close is where the price ended.")
C.dyc=x([C.b3k,C.b3a,C.hTb,C.hRV,C.hSF,C.hT1,C.hTk,C.hST,C.hSV,C.hSC,C.hT9,C.hSR,C.hRW,C.hTs],y.r)
C.d7g=x(["Bullish","Bearish","Sideways"],y.s)
C.hT5=new D.cC("Lower highs and lower lows means...",C.d7g,1,"Walking down stairs = downtrend = bearish.")
C.dmO=x(["Rise","Fall","Stay the same"],y.s)
C.hTx=new D.cC('"Bullish" means you expect prices to...',C.dmO,0,"A bull attacks upward.")
C.djh=x(["Rise","Fall","Double"],y.s)
C.hTv=new D.cC('"Bearish" means you expect prices to...',C.djh,1,"A bear swipes downward.")
C.dmY=x(["Trade against the trend","Trade with the trend","Ignore the trend"],y.s)
C.hSJ=new D.cC("The golden rule of trends is...",C.dmY,1,"Going with the trend wins more often.")
C.d8H=x(["A safe plan","A common beginner mistake","What the agent does"],y.s)
C.hTd=new D.cC("Buying in a downtrend because it looks cheap is...",C.d8H,1,"Cheap can get cheaper.")
C.djL=x(["Sideways","Bullish","Bearish"],y.s)
C.hSd=new D.cC("A price bouncing between a ceiling and a floor is...",C.djL,0,"No higher highs or lower lows: sideways.")
C.dBs=x(["Trade a lot","Wait","Borrow money"],y.s)
C.hSs=new D.cC("In a sideways market the best move is often to...",C.dBs,1,"Patience avoids false signals.")
C.dlB=x(["Up","Down","Flat"],y.s)
C.hSx=new D.cC("When sellers are in control, the trend is...",C.dlB,1,"Sellers push prices down.")
C.dly=x(["Stairs going up","Stairs going down","A flat road"],y.s)
C.hRK=new D.cC("Which picture fits an uptrend?",C.dly,0,"Each step a bit higher.")
C.dBe=x(["Turns down","Turns up","Is sideways"],y.s)
C.hSP=new D.cC("The agent only buys when the trend...",C.dBe,1,"It buys the start of up moves.")
C.dzE=x(["Getting lower","Getting higher","Gone"],y.s)
C.hS_=new D.cC("A trend changes from bearish to bullish. Lows are now...",C.dzE,1,"Higher lows are the first sign of an uptrend.")
C.dqO=x(["Strong uptrend","Strong downtrend","Sideways"],y.s)
C.hSY=new D.cC("Most trading signals fail in which market?",C.dqO,2,"Without direction, signals flip constantly.")
C.d8F=x([C.b3l,C.b3d,C.hT5,C.hTx,C.hTv,C.hSJ,C.hTd,C.hSd,C.hSs,C.hSx,C.hRK,C.hSP,C.hS_,C.hSY],y.r)
C.dgO=x(["The average closing price of recent candles","The highest price ever","A news feed"],y.s)
C.hTl=new D.cC("A moving average is...",C.dgO,0,"It smooths prices into a line.")
C.dGY=x(["To hide small wiggles and show direction","To predict news","To make charts colourful"],y.s)
C.hTm=new D.cC("Why use a moving average?",C.dGY,0,"It filters noise.")
C.ddi=x(["9","21","100"],y.s)
C.hSG=new D.cC("The purple slow line averages how many candles?",C.ddi,1,"21 candles, about 1 hour 45 minutes.")
C.dr9=x(["The fast (pink) line","The slow (purple) line","Both the same"],y.s)
C.hSI=new D.cC("Which line reacts faster to new moves?",C.dr9,0,"Fewer candles means quicker reaction.")
C.dHd=x(["Trend is up","Trend is down","Buy now"],y.s)
C.hSu=new D.cC("Fast line below slow line means...",C.dHd,1,"Recent prices are lower than older ones.")
C.d9f=x(["Buyers are strong","Sellers are strong","Nothing"],y.s)
C.hRN=new D.cC("The price is above both lines. That shows...",C.d9f,0,"Price above its averages = strength.")
C.d5c=x(["The bigger direction","Only the last candle","Tomorrow price"],y.s)
C.hT2=new D.cC("The slow line shows...",C.d5c,0,"It changes slowly and shows the wider trend.")
C.d1x=x(["15 minutes","1 hour 45 minutes","1 week"],y.s)
C.hS3=new D.cC("The slow line covers about...",C.d1x,1,"21 x 5 minutes = 105 minutes.")
C.coh=x(["Past prices","Future prices","Opinions"],y.s)
C.hTa=new D.cC("Moving averages are based on...",C.coh,0,"They average prices that already happened.")
C.d5C=x(["Lag behind the price","Lead the price","Never move"],y.s)
C.hTn=new D.cC("Because they use past prices, moving averages...",C.d5C,0,"Averages are always a little late.")
C.dq3=x(["A bullish picture","A bearish picture","A closed market"],y.s)
C.hSw=new D.cC("Both lines pointing up and the price above them is...",C.dq3,0,"Everything points up.")
C.dfx=x(["Trending strongly","Sideways","Crashing"],y.s)
C.hTw=new D.cC("When the two lines are tangled together, the market is often...",C.dfx,1,"Tangled lines mean no clear direction.")
C.dB_=x([C.b3n,C.b3f,C.hTl,C.hTm,C.hSG,C.hSI,C.hSu,C.hRN,C.hT2,C.hS3,C.hTa,C.hTn,C.hSw,C.hTw],y.r)
C.dgM=x(["Crosses below the slow line","Crosses above the slow line","Touches the price"],y.s)
C.hRH=new D.cC("The sell signal is when the fast line...",C.dgM,0,"Crossing down = the up move is over.")
C.cY2=x(["$50","$500","All the money"],y.s)
C.hSM=new D.cC("How much does the agent buy on a signal?",C.cY2,0,"Every pretend trade is $50.")
C.dAT=x(["A fresh signal","An old signal","Not a signal at all ever"],y.s)
C.hTe=new D.cC("A cross that happened an hour ago is...",C.dAT,1,"Fresh means since the last check.")
C.csK=x(["Sideways markets","Strong trends","Closed markets"],y.s)
C.hTi=new D.cC("Crossovers give many false signals in...",C.csK,0,"Lines cross back and forth with no direction.")
C.dpc=x(["The stop loss","Buying more","Ignoring it"],y.s)
C.hS2=new D.cC("What protects you when a signal is wrong?",C.dpc,0,"The stop keeps the loss small.")
C.dj2=x(["Just changed direction","Ended forever","Doubled"],y.s)
C.hTt=new D.cC("The crossover tells you the short-term trend has...",C.dj2,0,"A cross marks a turn.")
C.ddn=x(["1 second","15 minutes","1 day"],y.s)
C.hRU=new D.cC("The agent checks for crosses every...",C.ddn,1,"The automatic check runs every 15 minutes.")
C.d6G=x(["Buying higher, with less room to rise","A guaranteed win","A cheaper price"],y.s)
C.hRX=new D.cC("Buying late in a move usually means...",C.d6G,0,"Most of the move is already gone.")
C.duj=x(["Trust it more","Trust it less","Bet bigger"],y.s)
C.hTc=new D.cC("If a signal fails often on one market, you should...",C.duj,1,"Check how often it worked before trusting it.")
C.d6A=x(["Buys more","Sells","Waits a week"],y.s)
C.hSU=new D.cC("When the agent holds a trade and the fast line crosses down, it...",C.d6A,1,"The sell signal closes the trade.")
C.cNS=x(["Yes","No","Only on Fridays"],y.s)
C.hSy=new D.cC("Does a buy signal guarantee the price will rise?",C.cNS,1,"Signals improve the odds; they never guarantee.")
C.dbq=x(["Holds no other position","Already holds three","Has lost $25"],y.s)
C.hT4=new D.cC("The agent buys on a signal only if it...",C.dbq,0,"One position at a time.")
C.deX=x([C.b3e,C.b38,C.hRH,C.hSM,C.hTe,C.hTi,C.hS2,C.hTt,C.hRU,C.hRX,C.hTc,C.hSU,C.hSy,C.hT4],y.r)
C.dln=x(["0 to 100","1 to 10","-50 to 50"],y.s)
C.hTg=new D.cC("RSI is a number from...",C.dln,0,"It always sits between 0 and 100.")
C.dwn=x(["Rises were bigger than falls","Falls were bigger than rises","Nothing moved"],y.s)
C.hSq=new D.cC("RSI above 50 means recent...",C.dwn,0,"Above 50 = buyers stronger lately.")
C.dh_=x(["Overbought","Oversold","Balanced"],y.s)
C.hSA=new D.cC("RSI below 30 is called...",C.dh_,1,"It fell fast and is stretched downward.")
C.dtZ=x(["Momentum: strength of recent moves","The company profit","Trading volume"],y.s)
C.hSL=new D.cC("RSI measures...",C.dtZ,0,"It compares gains with losses.")
C.d6n=x(["Healthy","Very stretched","Impossible"],y.s)
C.hSc=new D.cC("A buy signal with RSI 60 is...",C.d6n,0,"Between 50 and 70 is healthy strength.")
C.ddY=x(["Just starting","Tired and stretched","Guaranteed"],y.s)
C.hRP=new D.cC("A buy signal with RSI 80 means the move may be...",C.ddY,1,"Very high RSI often comes before a pause.")
C.dl2=x(["As a second opinion","As the only reason to trade","Never"],y.s)
C.hSj=new D.cC("Best way to use RSI?",C.dl2,0,"Combine it with the trend signal.")
C.dvC=x(["For a while","Never","Only one candle"],y.s)
C.hSK=new D.cC("In a strong uptrend, RSI can stay above 70...",C.dvC,0,"Strong trends can stay overbought.")
C.dqe=x(["Balanced buyers and sellers","Market closed","Crash coming"],y.s)
C.hSN=new D.cC("RSI of 50 means...",C.dqe,0,"50 is the middle.")
C.d9d=x(["Rose very fast","Fell very fast","Did not move"],y.s)
C.hTo=new D.cC("Overbought means prices...",C.d9d,0,"Overbought = rose fast.")
C.cQ2=x(["Stay oversold and keep falling","Only go up","Freeze the market"],y.s)
C.hSl=new D.cC("Oversold in a strong downtrend can...",C.cQ2,0,"Oversold is not a reason to buy on its own.")
C.cM8=x(["Sellers a little stronger","Extreme buying","Extreme selling"],y.s)
C.hSD=new D.cC("RSI 45 suggests...",C.cM8,0,"Just below 50: sellers slightly ahead.")
C.dl0=x([C.b37,C.b3j,C.hTg,C.hSq,C.hSA,C.hSL,C.hSc,C.hRP,C.hSj,C.hSK,C.hSN,C.hTo,C.hSl,C.hSD],y.r)
C.dvz=x(["+3%","+30%","+0.3%"],y.s)
C.hSB=new D.cC("The agent take profit is...",C.dvz,0,"+3% is about +$1.50 on $50.")
C.dhc=x(["-1.5%","-15%","-50%"],y.s)
C.hSb=new D.cC("The agent stop loss is...",C.dhc,0,"-1.5% is about -$0.75 on $50.")
C.doU=x(["A planned exit that limits a loss","A way to stop the app","A bonus"],y.s)
C.hS1=new D.cC("A stop loss is...",C.doU,0,"It sells automatically when the loss reaches a set size.")
C.deu=x(["Before entering the trade","After it goes wrong","Never"],y.s)
C.hSa=new D.cC("When should you decide your exits?",C.deu,0,"Plan exits first, while calm.")
C.dkO=x(["So no single mistake hurts much","It is the maximum allowed","To lose faster"],y.s)
C.hT8=new D.cC("Why does the agent use only $50 per trade?",C.dkO,0,"Small size protects the account.")
C.dHX=x(["1 to 2 percent","50 percent","100 percent"],y.s)
C.hSZ=new D.cC("Pros rarely risk more than about ... of their money on one trade.",C.dHX,0,"Small risk per trade keeps them in the game.")
C.d5r=x(["$0","+$1.50","-$1.50"],y.s)
C.hT3=new D.cC("Win $1.50 once and lose $0.75 twice. Your total is...",C.d5r,0,"1.50 - 0.75 - 0.75 = 0.")
C.dsU=x(["Profitable","Break even","A loss"],y.s)
C.hT6=new D.cC("Winning half the time with 2 to 1 reward to risk is...",C.dsU,0,"Each win is twice each loss.")
C.deC=x(["Turns small losses into big ones","Guarantees a win","Has no effect"],y.s)
C.hSp=new D.cC('Moving your stop lower to "give it room" usually...',C.deC,0,"Hope is not a plan.")
C.dE3=x(["2 to 1","1 to 2","10 to 1"],y.s)
C.hSv=new D.cC("Reward to risk of the agent is...",C.dE3,0,"$1.50 target vs $0.75 stop.")
C.csd=x(["Can end an account","Are rare","Do not matter"],y.s)
C.hTA=new D.cC("Big losses are dangerous because they...",C.csd,0,"A 50% loss needs a 100% gain to recover.")
C.cVt=x(["Selling when the planned gain is reached","Buying more","Holding forever"],y.s)
C.hSi=new D.cC("Take profit means...",C.cVt,0,"It locks in the win.")
C.csJ=x([C.b3o,C.b3b,C.hSB,C.hSb,C.hS1,C.hSa,C.hT8,C.hSZ,C.hT3,C.hT6,C.hSp,C.hSv,C.hTA,C.hSi],y.r)
C.dwt=x(["Trading more to win losses back","Taking a break","Following rules"],y.s)
C.hSH=new D.cC("Revenge trading means...",C.dwt,0,"It usually makes losses bigger.")
C.cQs=x(["$25 total losses","$100 total losses","Never"],y.s)
C.hSt=new D.cC("The total brake pauses the agent at...",C.cQs,0,"$25 total demo losses.")
C.d6H=x(["An admin, after a review","It turns itself on","Nobody ever"],y.s)
C.hTj=new D.cC("Who turns the agent back on after the $25 brake?",C.d6H,0,"A human review comes first.")
C.ceK=x(["$10","$1","$100"],y.s)
C.hSh=new D.cC("The daily stop is...",C.ceK,0,"If the day loses $10, no more buys.")
C.d1D=x(["Stop and reset","Trade bigger","Ignore your limits"],y.s)
C.hTh=new D.cC("Bad days happen. The best response is...",C.d1D,0,"Walking away protects your money.")
C.dnA=x(["Before the day starts","After you lose","Only on weekends"],y.s)
C.hRQ=new D.cC("Limits should be set...",C.dnA,0,"Decide limits while calm.")
C.dCP=x(["Reviewing what happened","Forgetting it","Blaming the market"],y.s)
C.hSr=new D.cC("The most important part of learning after a bad run is...",C.dCP,0,"Reviews turn losses into lessons.")
C.cQu=x(["Yes, exits still work","No, it freezes","It buys more instead"],y.s)
C.hSW=new D.cC("After the daily stop, can the agent still sell an open trade?",C.cQu,0,"The stop blocks new buys, not exits.")
C.dHt=x(["Protect the account from bad days","Make more trades","Win every day"],y.s)
C.hSQ=new D.cC("Brakes are there to...",C.dHt,0,"They cap the damage.")
C.d8I=x(["Stop trading and rethink","Raise the limits","Borrow money"],y.s)
C.hSn=new D.cC("If you keep breaking your own limits, you should...",C.d8I,0,"Rules only work when kept.")
C.dzL=x(["The next day","Never","Every minute"],y.s)
C.hSX=new D.cC("The daily stop resets...",C.dzL,0,"A new Eastern Time day starts fresh.")
C.dmA=x(["Can lose everything on a bad day","Always wins","Pays no fees"],y.s)
C.hRY=new D.cC("A trader with no loss limits...",C.dmA,0,"Limits are the safety net.")
C.dG8=x(["Pause","Trade faster","Bet bigger"],y.s)
C.hRM=new D.cC("Feeling angry after a loss is a sign to...",C.dG8,0,"Emotions lead to bad trades.")
C.dhP=x([C.b3h,C.hSH,C.hSt,C.hTj,C.hSh,C.hTh,C.hRQ,C.hSr,C.hSW,C.hSQ,C.hSn,C.hSX,C.hRY,C.hRM],y.r)
C.daS=x(["9:30 AM to 4:00 PM Eastern","24 hours","8 PM to midnight"],y.s)
C.hS5=new D.cC("US stock market hours are...",C.daS,0,"On market days only.")
C.hRZ=new D.cC("Is the US stock market open on Saturday?",M.a77,1,"Weekends are closed.")
C.dFI=x(["A jump between the close and the next open","A break in the chart software","A holiday"],y.s)
C.hSO=new D.cC("An overnight gap is...",C.dFI,0,"News while closed moves the next open.")
C.d1C=x(["Faster and harder","Slower","Exactly the same"],y.s)
C.hSo=new D.cC("Crypto compared with SPY usually moves...",C.d1C,0,"Crypto is more jumpy.")
C.duJ=x(["The 500 biggest US companies","One company","Bitcoin"],y.s)
C.hTy=new D.cC("SPY holds...",C.duJ,0,"It is a fund of 500 companies.")
C.dJ0=x(["They spread over many companies","They are closed","They are crypto"],y.s)
C.hRG=new D.cC("Why do funds like SPY move more calmly?",C.dJ0,0,"One bad company matters less.")
C.dAW=x(["3:55 PM Eastern","Midnight","Noon"],y.s)
C.hTr=new D.cC("The agent sells stocks by...",C.dAW,0,"Before the 4:00 PM close.")
C.d8J=x(["Sunday 5 PM to Friday 5 PM Eastern","Only 9:30 to 4","Only weekends"],y.s)
C.hS6=new D.cC("Forex (currency pairs) trades...",C.d8J,0,"Real forex is closed on weekends.")
C.ddZ=x(["The broker itself","The real world market","The government"],y.s)
C.hSg=new D.cC("OTC prices at a broker on weekends come from...",C.ddZ,0,"They are made by the broker and can differ.")
C.dwK=x(["Do not trade","Trade double","Trade at night"],y.s)
C.hSE=new D.cC("On a US market holiday, stocks...",C.dwK,0,"Holidays are closed days.")
C.cf3=x(["More often","Never","Less often"],y.s)
C.hTu=new D.cC("Because crypto moves fast, stop losses are hit...",C.cf3,0,"Bigger swings reach stops sooner.")
C.dAV=x(["Its own news","Weekend rules","The colour of candles"],y.s)
C.hTf=new D.cC("One company like Tesla can jump a lot because of...",C.dAV,0,"Single stocks react to company news.")
C.dr0=x([C.b3i,C.b39,C.hS5,C.hRZ,C.hSO,C.hSo,C.hTy,C.hRG,C.hTr,C.hS6,C.hSg,C.hSE,C.hTu,C.hTf],y.r)
C.dfG=x(["Why you entered, your exits and what happened","Only wins","Nothing"],y.s)
C.hS8=new D.cC("A trading journal records...",C.dfG,0,"It shows what really works.")
C.hSz=new D.cC("One winning trade proves a method works.",L.T9,1,"One trade can be pure luck.")
C.djX=x(["2 to 4 weeks","1 hour","1 day"],y.s)
C.hRR=new D.cC("The plan is to paper trade for...",C.djX,0,"Enough time for many trades.")
C.doe=x(["A bug to fix before real money","Fine","A bonus"],y.s)
C.hS0=new D.cC("If the agent ever breaks a rule, that is...",C.doe,0,"Rules must be followed exactly.")
C.dtb=x(["A long positive paper test and a full review","One good day","A tip from a friend"],y.s)
C.hTz=new D.cC("Before using real money you need...",C.dtb,0,"Evidence first.")
C.dan=x(["Worse than a coin flip","Excellent","Guaranteed"],y.s)
C.hT7=new D.cC("Signals that worked under 50% of the time are...",C.dan,0,"Do not trust them.")
C.d5N=x(["Never a good idea for beginners","Smart","Required"],y.s)
C.hT0=new D.cC("Borrowing money to trade is...",C.d5N,0,"Borrowed losses still have to be paid.")
C.dck=x(["The agent journal","An advert","A game"],y.s)
C.hSf=new D.cC("The Pretend trades list on the main screen is...",C.dck,0,"Every buy and sell is recorded.")
C.dpv=x(["No fear and no greed","Lots of emotion","Random choices"],y.s)
C.hSm=new D.cC("The point of an agent is to follow rules with...",C.dpv,0,"Discipline is its strength.")
C.dyp=x(["+$3.00","-$3.00","$0"],y.s)
C.hTp=new D.cC("After 20 trades you have 8 wins at +$1.50 and 12 losses at -$0.75. Total?",C.dyp,0,"8 x 1.50 = 12; 12 x 0.75 = 9; 12 - 9 = +3.")
C.cYr=x(["Review the trades calmly","Quit forever without looking","Double the size"],y.s)
C.hS7=new D.cC("A losing week means you should...",C.cYr,0,"Reviews find what to fix.")
C.dEp=x(["Patient and disciplined","Lucky","Fast clickers"],y.s)
C.hSe=new D.cC("The best traders are mostly...",C.dEp,0,"Patience and rules win over time.")
C.dm2=x([C.b36,C.b3c,C.hS8,C.hSz,C.hRR,C.hS0,C.hTz,C.hT7,C.hT0,C.hSf,C.hSm,C.hTp,C.hS7,C.hSe],y.r)
C.dLl=new A.bl(C.eul,[C.deb,C.dyc,C.d8F,C.dB_,C.deX,C.dl0,C.csJ,C.dhP,C.dr0,C.dm2],A.as("bl<m,ai<cC>>"))
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
C.a8t=new A.bl(C.ewm,[C.f9U,C.faM,C.eQu,C.eZV,C.eXQ,C.f_l,C.ePN,C.f37,C.f83,C.f79,C.eUl],A.as("bl<m,+(m,u)>"))
C.c0m=new A.ae(B.r4,5,B.b2,null,null,null)
C.eCV=new A.D(B.hx,C.c0m,null)
C.fcw=new A.b3(1,"Live signals",C.asf)
C.fcE=new A.b3(E.jQ,C.asu,"Moving sideways")
C.fdd=new A.b3(2,"Ask tutor",B.xe)
C.fdv=new A.b3(B.b2,B.oT,"Waiting for data")
C.fef=new A.b3(0,"Lessons",B.o1)
C.fet=new A.b3(C.dS,B.nf,"Trend is UP")
C.ffu=new A.b3(C.eF,B.a4O,"Trend is DOWN")
C.fiY=new A.b7([B.zZ,C.dS,"Signal alerts are ON: the market, ENTER UP or DOWN, and the duration, while NGMY is open or in the background.",null])
C.fk9=new A.b7([B.as2,E.jQ,"Signal alerts are unlocked. Allow notifications so the app can tell you when to enter.","Allow"])
C.bZz=new A.ae(B.r4,8,C.dS,null,null,null)
C.fL_=new A.H(!0,C.dS,null,null,null,null,11.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.haC=new A.C("LIVE",null,C.fL_,null,null,null,null,null,null,null,null,null)
C.dvB=x([C.bZz,B.bf,C.haC],y.p)
C.foa=new A.c3(B.aL,B.e,B.M,B.l,null,B.p,null,0,C.dvB,null)
C.c_0=new A.ae(B.rc,14,B.c,null,null,null)
C.hhv=new A.C("Learn",null,B.nq,null,null,null,null,null,null,null,null,null)
C.da8=x([C.c_0,B.d8,C.hhv],y.p)
C.fod=new A.c3(B.aL,B.e,B.M,B.l,null,B.p,null,0,C.da8,null)
C.fF0=new A.H(!0,B.c,null,null,null,null,36,B.F,null,-0.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.fHa=new A.H(!0,F.uF,null,null,null,null,11,B.O,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.fHw=new A.H(!0,B.ab,null,null,null,null,11.5,B.F,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.fJk=new A.H(!0,B.c,null,null,null,null,11,B.u,null,0.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.fJw=new A.H(!0,C.dS,null,null,null,null,11.5,B.O,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.fKW=new A.H(!0,C.eF,null,null,null,null,11.5,B.O,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.fOY=new A.H(!0,C.dS,null,null,null,null,12.5,B.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.fPY=new A.H(!0,B.c,null,null,null,null,22,B.u,null,0.8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.fV3=new A.C("Ask the tutor",null,B.cc,null,null,null,null,null,null,null,null,null)
C.fVb=new A.C("The $25 brake paused the agent. Turning it back on means you have reviewed it. The running demo profit and loss starts again from $0.",null,null,null,null,null,null,null,null,null,null,null)
C.aXw=new A.H(!0,C.eF,null,null,null,null,12.5,B.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.fVe=new A.C("Not quite. Try again.",null,C.aXw,null,null,null,null,null,null,null,null,null)
C.fWd=new A.C("All 10 lessons done!",null,null,null,null,null,null,null,null,null,null,null)
C.fWk=new A.C("10 short lessons. Each one shows you the idea live on the real markets the agent is watching.",null,T.FB,null,null,null,null,null,null,null,null,null)
C.fXP=new A.C("Wrong. You have one more try.",null,C.aXw,null,null,null,null,null,null,null,null,null)
C.fZk=new A.C("Turn the agent back on?",null,null,null,null,null,null,null,null,null,null,null)
C.fSd=new A.H(!0,B.c,null,null,null,null,9.5,B.u,null,0.8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.h3B=new A.C("PRETEND MONEY",null,C.fSd,null,null,null,null,null,null,null,null,null)
C.h4j=new A.C("Paper balance",null,B.WL,null,null,null,null,null,null,null,null,null)
C.h82=new A.C("Signal alerts are now unlocked. When a market says ENTER UP or ENTER DOWN, the app will tell you the market, the direction and the duration. Allow notifications to receive them.",null,null,null,null,null,null,null,null,null,null,null)
C.hb7=new A.C("Allow notifications",null,null,null,null,null,null,null,null,null,null,null)
C.he0=new A.C("Check now",null,B.cc,null,null,null,null,null,null,null,null,null)
C.heG=new A.C("Learn to trade",null,B.m8,null,null,null,null,null,null,null,null,null)
C.hh9=new A.C("Turn back on",null,null,null,null,null,null,null,null,null,null,null)
C.hNT=new D.z1("Nvidia","N",B.Nv)
C.hNV=new D.z1("Ethereum","\u039e",C.aj6)
C.hNY=new D.z1("S&P 500 fund","S&P",B.ce)
C.hNZ=new D.z1("Bitcoin","B",F.uF)
C.hO0=new D.z1("Tesla","T",B.bE)
C.hO1=new D.z1("Microsoft","M",B.bp)
C.hO2=new D.z1("Nasdaq 100 fund","Q",B.cD)
C.bnW=new A.u(1,0.6,0.27058823529411763,1,B.q)
C.hO4=new D.z1("Solana","S",C.bnW)
C.hO6=new D.z1("Apple","A",B.cR)
C.hO9=new D.z1("Amazon","a",B.au)})();(function staticFields(){$.Dy=A.a([],A.as("N<a_y>"))
$.ah5=!1
$.hjJ=""
$.aLT=0
$.fn5=0})()};
(a=>{a["myarOE2AUdH9KTu46Y/KOHKARPg="]=a.current})($__dart_deferred_initializers__);