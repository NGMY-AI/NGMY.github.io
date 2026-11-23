((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,N,E,O,G,P,H,Q,R,S,I,T,U,V,W,X,Y,F,D={
i6m(){return new D.atR(null)},
aHk(d){var x=J.a2(d),w=D.fu(x.h(d,"reading")).h(0,"action"),v=J.k(w==null?"":w)
if(B.a.Y(v,"ENTER UP"))return 0
if(B.a.Y(v,"ENTER DOWN"))return 1
if(!J.z(x.h(d,"open"),!0))return 4
return 2+(100-D.ek(D.fu(x.h(d,"reading")).h(0,"score")))/1000},
fAH(d){var x
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
fvz(d,e){var x,w,v=null,u=d.split("/")
if(u.length===2&&C.a8t.am(0,u[0])&&C.a8t.am(0,u[1])){u=d.split("/")
x=new D.fvA(e)
return new A.a6(e*1.25,e,new A.an(B.a0,v,B.ad,B.t,A.a([A.ao(v,x.$1(u[0]),v,v,0,v,0,v),A.ao(0,x.$1(u[1]),v,v,v,0,v,v)],y.p),v),v)}w=D.fAH(d)
x=w.b
return A.p(B.z,A.c(x,v,v,v,v,v,v,A.l(v,v,B.c,v,v,v,v,v,v,v,v,x.length>1?e*0.32:e*0.52,v,v,B.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),B.f,v,v,new A.o(w.c,v,v,v,v,v,B.a6),v,e,v,v,v,v,v,e)},
fAZ(d){var x,w=y.g.a(d.h(0,"markets"))
if(w==null)w=B.c9
w=J.cZ(w,y.f)
w=A.cF(w,new D.fB_(),w.$ti.k("M.E"),y.P)
x=A.B(w,A.a5(w).k("M.E"))
return x},
fu(d){var x=y.N,w=y.z
return y.f.b(d)?A.a1(d,x,w):A.S(x,w)},
ek(d){var x
if(typeof d=="number")x=d
else{x=A.cE(A.v(d==null?"":d))
if(x==null)x=0}return x},
aRu(d){var x=y.g.a(D.fu(J.t(d,"chart")).h(0,"points"))
if(x==null)x=B.c9
x=J.cZ(x,y.f)
x=A.cF(x,new D.fFk(),x.$ti.k("M.E"),y.P)
x=A.B(x,A.a5(x).k("M.E"))
return x},
h1(d,e,f){var x,w=A.o4(B.i.a9(Math.abs(d),2),A.ag("\\B(?=(\\d{3})+(?!\\d))",!0,!1,!1,!1),new D.fC5(),null)
if(d<0)x="-"
else x=f&&d>0?"+":""
return x+(e?"$":"")+w},
aQJ(d){var x=B.o.F(A.d6(d),12)===0?12:B.o.F(A.d6(d),12),w=B.a.b0(B.o.v(A.fG(d)),2,"0"),v=A.d6(d)<12?"AM":"PM"
return""+x+":"+w+" "+v},
bFt(d){var x=d.ab(),w=new D.fJn(),v=w.$3(A.bD(x),3,2).bM(252e8),u=w.$3(A.bD(x),11,1).bM(216e8),t=x.bM(0-A.dv(0,!x.cW(v)&&x.cW(u)?4:5,0,0,0,0).a)
return A.c0(A.bD(t),A.bM(t),A.bW(t),A.d6(t),A.fG(t),0,0,0)},
hFo(d){var x,w,v,u=d==null,t=A.v(u?"":d).split("-")
if(t.length!==3)return A.v(u?"":d)
x=A.c8(t[1],null)
u=B.iw[B.o.D((x==null?1:x)-1,0,11)]
w=t[2]
v=A.c8(w,null)
return u+" "+A.v(v==null?w:v)+", "+t[0]},
ihy(d){var x,w=A.bi(A.v(d==null?"":d))
if(w==null)return""
x=D.bFt(w)
return B.iw[A.bM(x)-1]+" "+A.bW(x)+" at "+D.aQJ(x)+" ET"},
io4(d){var x,w,v=d.split(", ")
if(v.length>=4){x=v[1]
w=v[3]
return x+", "+A.aL(w," ET","")}return d},
hF1(d){return d.length===0?d:d[0].toUpperCase()+B.a.aY(d,1)},
hHy(){var x=D.bFt(new A.V(Date.now(),0,!1).ab()),w=B.o.F(A.fG(x),15)
return"at "+D.aQJ(A.c0(A.bD(x),A.bM(x),A.bW(x),A.d6(x),A.fG(x),0,0,0).bM(A.dv(0,0,0,0,15-w,0).a))+" ET"},
if_(d){if(B.a.Y(d,"ENTER UP"))return C.dN
if(B.a.Y(d,"ENTER DOWN"))return C.es
if(B.a.q(d,"SKIP")||B.a.q(d,"TOO LATE"))return C.es
if(B.a.Y(d,"MARKET CLOSED"))return B.bP
return E.jQ},
hIy(a7,a8,a9,b0,b1){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=null,a1="mom1h",a2=J.a2(a8),a3=D.fu(a2.h(a8,"reading")),a4=D.fu(a3.h(0,"timing")),a5=D.aRu(a8),a6=a2.h(a8,"asset")
if(a6==null)a6=a2.h(a8,"symbol")
x=J.k(a6==null?"":a6)
a6=a3.h(0,"action")
w=J.k(a6==null?"WAITING FOR DATA":a6)
v=D.if_(w)
u=B.i.D(D.ek(a3.h(0,"score")),0,100)
a6=y.g.a(a3.h(0,"notes"))
if(a6==null)a6=B.c9
a6=J.b8(a6,new D.fGb(),y.N)
t=A.B(a6,a6.$ti.k("ak.E"))
s=D.ek(a2.h(a8,"changePct"))
a6=a7.a
r=a6?B.c.j(0.92):C.kY
q=A.n(20)
p=B.a.Y(w,"ENTER")
if(p)o=v.j(0.6)
else o=a6?B.c:C.uS
o=A.K(o,B.r,p?1.6:1)
n=y.V
m=A.a([new A.aa(0,B.H,a7.ga9A(),B.hR,14)],n)
l=D.fvz(x,28)
p=A.c(x,a0,a0,a0,a0,a0,a0,A.l(a0,a0,a6?C.dC:B.c,a0,a0,a0,a0,a0,a0,a0,a0,14,a0,a0,B.F,a0,a0,!0,a0,a0,a0,a0,a0,a0,a0,a0),a0,a0,a0)
k=a2.h(a8,"name")
k=J.k(k==null?"":k)
j=y.p
k=A.a([l,B.ar,A.E(A.x(A.a([p,A.c(k,a0,a0,a0,a0,a0,a0,A.l(a0,a0,a6?C.dg:C.dh,a0,a0,a0,a0,a0,a0,a0,a0,11,a0,a0,a0,a0,a0,!0,a0,a0,a0,a0,a0,a0,a0,a0),a0,a0,a0)],j),B.B,a0,B.e,B.h,0,B.p),1)],j)
if(a5.length>2)B.d.u(k,A.a([new A.a6(58,26,A.b4(a0,a0,a0,new D.aKE(a5,s>=0?C.dN:C.es,a0),B.az),a0),B.ar],j))
p=D.hIs(a8)
p=A.c(p,a0,a0,a0,a0,a0,a0,A.l(a0,a0,a6?C.dC:B.c,a0,a0,a0,a0,a0,a0,a0,a0,14,a0,a0,B.F,a0,a0,!0,a0,a0,a0,a0,a0,a0,a0,a0),a0,a0,a0)
l=s>=0
i=l?"+":""
h=B.i.a9(s,2)
g=J.z(a2.h(a8,"kind"),"forex")?"30m":"4h"
k.push(A.x(A.a([p,A.c(i+h+"% \xb7 "+g,a0,a0,a0,a0,a0,a0,A.l(a0,a0,l?C.dN:C.es,a0,a0,a0,a0,a0,a0,a0,a0,11,a0,a0,B.P,a0,a0,!0,a0,a0,a0,a0,a0,a0,a0,a0),a0,a0,a0)],j),B.dI,a0,B.e,B.h,0,B.p))
p=A.a([A.A(k,B.l,a0,B.e,B.h,0,a0,a0)],j)
if(y.f.b(a3.h(0,"entry"))){l=D.fu(a3.h(0,"entry"))
f=J.z(l.h(0,"dir"),"up")
e=f?C.dN:C.es
d=Math.max(1,B.i.R(D.ek(l.h(0,"candleMin"))))
k=A.n(18)
i=A.ap(e,B.v,0.25)
i.toString
i=A.a([e,i],y.O)
n=A.a([new A.aa(0,B.H,e.j(0.35),B.cy,16)],n)
h=B.c.j(0.22)
h=A.p(a0,A.W(f?B.pR:B.pQ,B.c,a0,a0,a0,34),B.f,a0,a0,new A.o(h,a0,a0,a0,a0,a0,B.a6),a0,52,a0,a0,a0,a0,a0,52)
g=A.c(f?"ENTER UP":"ENTER DOWN",a0,a0,a0,a0,a0,a0,C.fPZ,a0,a0,a0)
B.d.u(p,A.a([B.af,A.p(a0,A.x(A.a([h,B.ak,g,A.c(f?"BUY / CALL":"SELL / PUT",a0,a0,a0,a0,a0,a0,C.fHw,a0,a0,a0),B.S,new D.aCv(d,a0),B.S,A.A(A.a([A.x(A.a([A.c(B.i.a9(D.ek(l.h(0,"durationMin")),0)+" min",a0,a0,a0,a0,a0,a0,B.jn,a0,a0,a0),A.c("Trade for",a0,a0,a0,a0,a0,a0,K.acH,a0,a0,a0)],j),B.l,a0,B.e,B.h,0,B.p),A.p(a0,a0,B.f,B.jS,a0,a0,a0,30,a0,B.r1,a0,a0,a0,1),A.x(A.a([A.c(A.v(l.h(0,"worked"))+" of "+A.v(l.h(0,"of")),a0,a0,a0,a0,a0,a0,B.jn,a0,a0,a0),A.c("Worked lately",a0,a0,a0,a0,a0,a0,K.acH,a0,a0,a0)],j),B.l,a0,B.e,B.h,0,B.p)],j),B.l,a0,B.b9,B.h,0,a0,a0)],j),B.l,a0,B.e,B.h,0,B.p),B.f,a0,a0,new A.o(a0,a0,a0,k,n,new A.a7(B.aX,B.b1,B.x,i,a0,a0),B.m),a0,a0,a0,a0,W.a1N,a0,a0,1/0)],j))}if(a9!=null){n=A.n(10)
B.d.u(p,A.a([B.O,A.p(a0,A.A(A.a([C.c20,B.d8,A.E(A.c(a9+" \xb7 check before you act",a0,a0,a0,a0,a0,a0,C.fJk,a0,a0,a0),1)],j),B.l,a0,B.e,B.h,0,a0,a0),B.f,a0,a0,new A.o(a0,a0,a0,n,a0,C.ceD,B.m),a0,a0,a0,a0,B.fM,a0,a0,1/0)],j))}p.push(B.S)
n=v.j(0.15)
l=A.n(999)
l=A.a([A.p(a0,A.c(w,a0,a0,a0,a0,a0,a0,A.l(a0,a0,v,a0,a0,a0,a0,a0,a0,a0,a0,10.5,a0,a0,B.u,a0,a0,!0,a0,0.4,a0,a0,a0,a0,a0,a0),a0,a0,a0),B.f,a0,a0,new A.o(n,a0,a0,l,a0,a0,B.m),a0,a0,a0,a0,B.o_,a0,a0,a0),B.aY],j)
if(a3.h(0,"rsi")!=null){n=B.i.a9(D.ek(a3.h(0,"rsi")),0)
l.push(A.c("RSI "+n,a0,a0,a0,a0,a0,a0,A.l(a0,a0,a6?C.dg:C.dh,a0,a0,a0,a0,a0,a0,a0,a0,11,a0,a0,B.P,a0,a0,!0,a0,a0,a0,a0,a0,a0,a0,a0),a0,a0,a0))}if(a3.h(0,a1)!=null){n=D.ek(a3.h(0,a1))>=0?"+":""
k=B.i.a9(D.ek(a3.h(0,a1)),2)
B.d.u(l,A.a([B.ar,A.c("1h "+n+k+"%",a0,a0,a0,a0,a0,a0,A.l(a0,a0,D.ek(a3.h(0,a1))>=0?C.dN:C.es,a0,a0,a0,a0,a0,a0,a0,a0,11,a0,a0,B.P,a0,a0,!0,a0,a0,a0,a0,a0,a0,a0,a0),a0,a0,a0)],j))}p.push(A.A(l,B.l,a0,B.e,B.h,0,a0,a0))
p.push(B.S)
p.push(A.cf(new D.fGc(u,a7)))
p.push(B.at)
n=A.c("Sellers",a0,a0,a0,a0,a0,a0,A.l(a0,a0,a6?C.dg:C.dh,a0,a0,a0,a0,a0,a0,a0,a0,10,a0,a0,a0,a0,a0,!0,a0,a0,a0,a0,a0,a0,a0,a0),a0,a0,a0)
l=B.i.a9(u,0)
l=A.c("Strength "+l+"/100",a0,a0,a0,a0,a0,a0,A.l(a0,a0,a6?C.dC:B.c,a0,a0,a0,a0,a0,a0,a0,a0,10.5,a0,a0,B.F,a0,a0,!0,a0,a0,a0,a0,a0,a0,a0,a0),a0,a0,a0)
p.push(A.A(A.a([n,B.aY,l,B.aY,A.c("Buyers",a0,a0,a0,a0,a0,a0,A.l(a0,a0,a6?C.dg:C.dh,a0,a0,a0,a0,a0,a0,a0,a0,10,a0,a0,a0,a0,a0,!0,a0,a0,a0,a0,a0,a0,a0,a0),a0,a0,a0)],j),B.l,a0,B.e,B.h,0,a0,a0))
p.push(B.O)
n=J.z(a2.h(a8,"open"),!0)?A.cS(t,1,a0,A.U(t).c):t
n=J.HZ(n,b0?2:99)
l=n.$ti
n=new A.bQ(n,n.gJ(0),l.k("bQ<ak.E>"))
l=l.k("ak.E")
while(n.C()){k=n.d
if(k==null)k=l.a(k)
i=A.W(B.r5,v,a0,a0,a0,4.5)
h=a6?C.dC:B.c
p.push(new A.D(B.n9,new A.c3(B.aL,B.e,B.h,B.B,a0,B.p,a0,0,A.a([new A.D(B.hy,i,a0),O.xT,new A.bz(1,B.ba,A.c(k,a0,a0,a0,a0,a0,a0,new A.H(!0,h,a0,a0,a0,a0,12.3,a0,a0,a0,a0,a0,1.35,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0),a0,a0,a0),a0)],j),a0),a0))}if(J.z(a2.h(a8,"open"),!0))B.d.u(p,A.a([B.S,D.ihh(a7,a3,a4)],j))
if(b1!=null)p.push(new A.bK(B.a9,a0,a0,A.hv(C.bXR,A.c("Ask the tutor about "+x,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0),b1,a0),a0))
return A.p(a0,A.x(p,B.B,a0,B.e,B.h,0,B.p),B.f,a0,a0,new A.o(r,a0,o,q,m,a0,B.m),a0,a0,a0,B.d4,B.bH,a0,a0,a0)},
ihh(a3,a4,a5){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f="dir",e="typicalMin",d="entry",a0=a4.h(0,"decision"),a1=J.k(a0==null?"NO_DIRECTION":a0),a2=J.z(a4.h(0,f),"up")
a0=y.g.a(a4.h(0,"notes"))
if(a0==null)a0=B.c9
a0=J.b8(a0,new D.fwp(),y.N)
x=A.B(a0,a0.$ti.k("ak.E"))
A:{if("ENTER"===a1){a0=a2?C.dN:C.es
break A}if("SKIP_WEAK"===a1||"WAIT_LATE"===a1){a0=C.es
break A}a0=E.jQ
break A}w=a5.h(0,e)!=null&&a5.h(0,f)!=null&&!J.z(a5.h(0,f),"none")&&a1!=="NO_DIRECTION"&&a1!=="CLOSED"
v=D.ek(a5.h(0,"of"))
u=D.ek(a5.h(0,"worked"))
t=v>0
s=t?u/v:0
r=J.z(a5.h(0,f),"up")?"up":"down"
q=a3.a
p=q?C.CF:C.CH
o=A.n(16)
n=A.K(a0.j(0.55),B.r,1.5)
m=A.W(B.ne,q?C.dC:B.c,g,g,g,16)
l=y.p
m=A.A(A.a([m,B.bf,A.c("DECISION AND DURATION",g,g,g,g,g,g,A.l(g,g,q?C.dC:B.c,g,g,g,g,g,g,g,g,11.5,g,g,B.u,g,g,!0,g,1,g,g,g,g,g,g),g,g,g)],l),B.l,g,B.e,B.h,0,g,g)
k=a0.j(0.14)
j=A.n(10)
i=a4.h(0,"action")
i=A.a([A.c(J.k(i==null?"":i),g,g,g,g,g,g,A.l(g,g,a0,g,g,g,g,g,g,g,g,13,g,g,B.u,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)],l)
if(x.length!==0){h=B.d.gH(x)
B.d.u(i,A.a([B.cM,A.c(h,g,g,g,g,g,g,A.l(g,g,q?C.dC:B.c,g,g,g,g,g,g,g,g,12.3,g,g,g,g,1.35,!0,g,g,g,g,g,g,g,g),g,g,g)],l))}m=A.a([m,B.O,A.p(g,A.x(i,B.B,g,B.e,B.h,0,B.p),B.f,g,g,new A.o(k,g,g,j,g,g,B.m),g,g,g,g,B.jV,g,g,1/0)],l)
if(a1==="ENTER"&&y.f.b(a4.h(0,d)))B.d.u(m,A.a([B.O,A.A(A.a([A.E(D.hFK(a3,"Trade for",B.i.a9(D.ek(D.fu(a4.h(0,d)).h(0,"durationMin")),0)+" min",a0),1),A.E(D.hFK(a3,"Enter at","next "+B.i.a9(D.ek(D.fu(a4.h(0,d)).h(0,"candleMin")),0)+"-min candle",g),1)],l),B.l,g,B.e,B.h,0,g,g)],l))
if(w){a0=A.c("What this is based on",g,g,g,g,g,g,A.l(g,g,q?C.dg:C.dh,g,g,g,g,g,g,g,g,10.5,g,g,B.F,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)
k=D.hkT(a3,B.fZ,"This "+r+" move started "+B.i.a9(D.ek(a5.h(0,"ageMin")),0)+" min ago.",g)
j=r==="up"?"Up":"Down"
l=A.a([B.S,a0,B.at,k,D.hkT(a3,B.asu,j+" moves on this market usually end after about "+B.i.a9(D.ek(a5.h(0,e)),0)+" min.",g)],l)
if(t){a0=B.i.a9(v,0)
t=B.i.a9(u,0)
k=B.i.R(s*100)
j=s>=0.5
i=j?"Reliable enough.":"Under half: unreliable."
j=j?C.dN:C.es
l.push(D.hkT(a3,B.pS,"Of the last "+a0+" "+r+" moves here, "+t+" really went "+r+" ("+k+"%). "+i,j))}B.d.u(m,l)}m.push(B.at)
m.push(A.c("Estimates from this market's recent moves, not promises.",g,g,g,g,g,g,A.l(g,g,q?C.dg:C.dh,g,g,g,g,g,g,g,g,10.5,g,g,g,g,g,!0,g,g,g,g,g,g,g,g),g,g,g))
return A.p(g,A.x(m,B.B,g,B.e,B.h,0,B.p),B.f,g,g,new A.o(p,g,n,o,g,g,B.m),g,g,g,g,B.bk,g,g,1/0)},
hkT(d,e,f,g){var x,w=null,v=g==null
if(v)x=d.a?C.dg:C.dh
else x=g
x=A.W(e,x,w,w,w,14)
if(v)v=d.a?C.dC:B.c
else v=g
return new A.D(B.Hz,A.A(A.a([x,B.bf,A.E(A.c(f,w,w,w,w,w,w,A.l(w,w,v,w,w,w,w,w,w,w,w,12,w,w,w,w,1.35,!0,w,w,w,w,w,w,w,w),w,w,w),1)],y.p),B.B,w,B.e,B.h,0,w,w),w)},
hFK(d,e,f,g){var x=null,w=d.a,v=A.c(e,x,x,x,x,x,x,A.l(x,x,w?C.dg:C.dh,x,x,x,x,x,x,x,x,10.5,x,x,x,x,x,!0,x,x,x,x,x,x,x,x),x,x,x)
if(g==null)w=w?C.dC:B.c
else w=g
return A.x(A.a([v,A.c(f,x,x,x,x,x,x,A.l(x,x,w,x,x,x,x,x,x,x,x,13.5,x,x,B.F,x,x,!0,x,x,x,x,x,x,x,x),x,x,x)],y.p),B.B,x,B.e,B.h,0,B.p)},
hIs(d){var x=J.a2(d),w=D.ek(x.h(d,"price"))
if(!J.z(x.h(d,"kind"),"forex"))return D.h1(w,!0,!1)
return B.i.a9(w,w>=100?3:5)},
hzA(d,e){return new D.XF(d,e,null)},
hE0(){var x=Math.max(0,$.aLY-1)
$.aLY=x
if(x===0){B.d.a5($.DB)
$.ah9=!1
$.hke=""
$.fnw=$.fnw+1}},
eHC(d){var x
y.g.a(d)
x=d==null?B.c9:d
x=J.cZ(x,y.f)
x=A.cF(x,new D.eHD(),x.$ti.k("M.E"),y.P)
x=A.B(x,A.a5(x).k("M.E"))
return x},
hDv(d){var x=J.t(d,"kind")
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
_.x=!1
_.y=48
_.z=null
_.Q=e
_.as=!1
_.at=!0
_.c=_.a=_.ay=_.ax=null},
eGG:function eGG(d){this.a=d},
eGn:function eGn(d,e){this.a=d
this.b=e},
eGe:function eGe(d,e){this.a=d
this.b=e},
eGm:function eGm(d,e){this.a=d
this.b=e},
eGp:function eGp(d,e){this.a=d
this.b=e},
eGc:function eGc(){},
eGd:function eGd(d,e,f){this.a=d
this.b=e
this.c=f},
eGx:function eGx(){},
eGv:function eGv(d){this.a=d},
eGw:function eGw(d){this.a=d},
eGy:function eGy(d){this.a=d},
eGz:function eGz(d){this.a=d},
eGl:function eGl(d){this.a=d},
eGr:function eGr(d){this.a=d},
eGs:function eGs(d,e){this.a=d
this.b=e},
eGt:function eGt(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eGq:function eGq(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eGu:function eGu(){},
eGF:function eGF(d){this.a=d},
eGC:function eGC(d){this.a=d},
eGD:function eGD(d){this.a=d},
eG3:function eG3(d){this.a=d},
eG4:function eG4(d,e){this.a=d
this.b=e},
eG5:function eG5(d){this.a=d},
eG6:function eG6(d){this.a=d},
eGB:function eGB(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eGA:function eGA(d){this.a=d},
eGg:function eGg(){},
eGh:function eGh(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eGi:function eGi(d){this.a=d},
eGk:function eGk(){},
eGj:function eGj(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
eGf:function eGf(d,e){this.a=d
this.b=e},
eG9:function eG9(d,e){this.a=d
this.b=e},
eG8:function eG8(d,e){this.a=d
this.b=e},
eGa:function eGa(d){this.a=d},
eG7:function eG7(d){this.a=d},
eG1:function eG1(d){this.a=d},
eG2:function eG2(){},
eGo:function eGo(d,e){this.a=d
this.b=e},
eGb:function eGb(d,e){this.a=d
this.b=e},
eGE:function eGE(){},
eG0:function eG0(d){this.a=d},
eG_:function eG_(d){this.a=d},
adH:function adH(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
bem:function bem(){this.c=this.a=this.d=null},
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
ben:function ben(d,e,f,g,h,i,j,k){var _=this
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
aKE:function aKE(d,e,f){this.b=d
this.c=e
this.a=f},
fh_:function fh_(){},
z3:function z3(d,e,f){this.a=d
this.b=e
this.c=f},
fvA:function fvA(d){this.a=d},
fB_:function fB_(){},
a1x:function a1x(d){this.a=d},
fFk:function fFk(){},
fC5:function fC5(){},
fJn:function fJn(){},
fGb:function fGb(){},
fGc:function fGc(d,e){this.a=d
this.b=e},
aCv:function aCv(d,e){this.c=d
this.a=e},
bhT:function bhT(){this.c=this.a=this.d=null},
die:function die(d){this.a=d},
did:function did(){},
fwp:function fwp(){},
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
eGQ:function eGQ(){},
eHI:function eHI(d){this.a=d},
eHH:function eHH(){},
eHJ:function eHJ(d){this.a=d},
eHK:function eHK(d){this.a=d},
eHG:function eHG(d,e){this.a=d
this.b=e},
eHL:function eHL(d){this.a=d},
eHD:function eHD(){},
eHa:function eHa(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eHl:function eHl(d){this.a=d},
eGT:function eGT(d){this.a=d},
eGU:function eGU(d,e){this.a=d
this.b=e},
eGV:function eGV(d){this.a=d},
eGW:function eGW(d){this.a=d},
eGS:function eGS(d,e){this.a=d
this.b=e},
eGR:function eGR(d,e){this.a=d
this.b=e},
eHk:function eHk(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eHj:function eHj(){},
eHb:function eHb(){},
eHc:function eHc(){},
eHA:function eHA(){},
eHB:function eHB(){},
eGZ:function eGZ(d){this.a=d},
eH_:function eH_(){},
eH0:function eH0(){},
eGM:function eGM(d,e){this.a=d
this.b=e},
eGN:function eGN(){},
eGO:function eGO(){},
eGP:function eGP(){},
eHm:function eHm(d){this.a=d},
eHE:function eHE(d){this.a=d},
eHF:function eHF(d,e){this.a=d
this.b=e},
eGY:function eGY(d){this.a=d},
eGX:function eGX(d,e){this.a=d
this.b=e},
eHi:function eHi(d,e){this.a=d
this.b=e},
eHe:function eHe(d,e){this.a=d
this.b=e},
eHf:function eHf(d,e){this.a=d
this.b=e},
eHd:function eHd(d,e,f){this.a=d
this.b=e
this.c=f},
eHg:function eHg(d,e){this.a=d
this.b=e},
eHh:function eHh(d){this.a=d},
eH1:function eH1(d,e,f){this.a=d
this.b=e
this.c=f},
eH9:function eH9(d){this.a=d},
eH2:function eH2(){},
eH3:function eH3(){},
eH4:function eH4(){},
eH5:function eH5(){},
eH6:function eH6(){},
eH7:function eH7(){},
eH8:function eH8(){},
eHq:function eHq(d,e){this.a=d
this.b=e},
eHr:function eHr(d){this.a=d},
eHz:function eHz(){},
eHs:function eHs(d){this.a=d},
eHt:function eHt(d){this.a=d},
eHv:function eHv(d,e){this.a=d
this.b=e},
eHp:function eHp(d,e){this.a=d
this.b=e},
eHu:function eHu(d){this.a=d},
eHw:function eHw(d){this.a=d},
eHo:function eHo(d){this.a=d},
eHx:function eHx(d){this.a=d},
eHn:function eHn(d,e){this.a=d
this.b=e},
eHy:function eHy(d,e){this.a=d
this.b=e},
eGI:function eGI(d){this.a=d},
eGJ:function eGJ(d,e){this.a=d
this.b=e},
eGH:function eGH(d,e){this.a=d
this.b=e},
eGK:function eGK(d,e){this.a=d
this.b=e},
eGL:function eGL(d){this.a=d},
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
bl3:function bl3(d){var _=this
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
aPj:function aPj(){}},C,K,L,M,Z
J=c[1]
A=c[0]
B=c[2]
N=c[150]
E=c[309]
O=c[176]
G=c[287]
P=c[218]
H=c[308]
Q=c[110]
R=c[55]
S=c[310]
I=c[291]
T=c[187]
U=c[311]
V=c[269]
W=c[290]
X=c[175]
Y=c[130]
F=c[279]
D=a.updateHolder(c[20],D)
C=c[307]
K=c[178]
L=c[312]
M=c[125]
Z=c[157]
D.atR.prototype={
S(){return new D.aHj(A.a([],y.t),A.mj(0,null,null))}}
D.aHj.prototype={
a_(){var x=this
x.a3()
$.aLY=$.aLY+1
x.a.toString
x.aer()
x.Bm(!0)
x.ay=A.d2(B.nT,new D.eGG(x))},
t(){var x=this.ay
if(x!=null)x.a1(0)
this.Q.t()
D.hE0()
this.a2()},
cr5(d){var x=this
if(!x.as&&d>0){x.as=!0
$.aU.U$.push(new D.eGn(x,d))}return x.Q},
aer(){var x=0,w=A.j(y.H),v=1,u=[],t=this,s,r,q,p
var $async$aer=A.e(function(d,e){if(d===1){u.push(e)
x=v}for(;;)switch(x){case 0:v=3
x=6
return A.b(A.aB(),$async$aer)
case 6:s=e
r=A.aW(J.t(s.a,"ngmy_signal_grid_market"))
if(r!=null&&r.length!==0&&t.c!=null&&t.z==null)t.l(new D.eGe(t,r))
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
return A.i($async$aer,w)},
a20(d){return this.cqC(d)},
cqC(d){var x=0,w=A.j(y.H),v=1,u=[],t=this,s,r,q
var $async$a20=A.e(function(e,f){if(e===1){u.push(f)
x=v}for(;;)switch(x){case 0:t.l(new D.eGm(t,d))
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
Bm(d){return this.cvW(d)},
cgd(){return this.Bm(!1)},
cvW(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$Bm=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(A.h2(A.J(["action","paStatus","live",d],y.N,y.z),!1,!1,!1,!1,B.CU),$async$Bm)
case 3:t=f
if(u.c==null){x=1
break}u.l(new D.eGp(u,t))
x=u.d!=null?4:5
break
case 4:x=6
return A.b(u.c71(),$async$Bm)
case 6:case 5:case 1:return A.h(v,w)}})
return A.i($async$Bm,w)},
a_0(d){return this.c72(d)},
c71(){return this.a_0(!1)},
c72(d){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$a_0=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(A.h2(A.J(["action","paLog","limit",100,"beforeId",d&&u.e.length!==0?J.t(B.d.gal(u.e),"id"):0],y.N,y.z),!1,!1,!1,!1,B.hb),$async$a_0)
case 3:r=f
if(u.c==null||r==null||!J.z(J.t(r,"ok"),!0)){x=1
break}t=y.g.a(J.t(r,"rows"))
if(t==null)t=B.c9
t=J.cZ(t,y.f)
t=A.cF(t,new D.eGc(),t.$ti.k("M.E"),y.P)
s=A.B(t,A.a5(t).k("M.E"))
u.l(new D.eGd(u,d,s))
case 1:return A.h(v,w)}})
return A.i($async$a_0,w)},
SL(d){return this.cAQ(d)},
cAQ(d){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$SL=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=u.d
q=D.fu(r==null?null:J.t(r,"state"))
x=d&&J.z(q.h(0,"brakePaused"),!0)?3:4
break
case 3:r=u.c
r.toString
x=5
return A.b(A.ce(null,null,!0,null,new D.eGx(),r,null,!0,!0,y.y),$async$SL)
case 5:if(f!==!0){x=1
break}case 4:u.l(new D.eGy(u))
x=6
return A.b(A.h2(A.J(["action","paSet","enabled",d],y.N,y.z),!1,!1,!1,!1,B.hb),$async$SL)
case 6:t=f
if(u.c==null){x=1
break}u.l(new D.eGz(u))
r=t==null
if(J.z(r?null:J.t(t,"ok"),!0))s=d?"Agent started.":"Agent stopped."
else{s=r?null:J.t(t,"error")
s=J.k(s==null?"Could not change it.":s)}u.b39(s,J.z(r?null:J.t(t,"ok"),!0)?C.dN:C.es)
x=7
return A.b(u.cgd(),$async$SL)
case 7:case 1:return A.h(v,w)}})
return A.i($async$SL,w)},
cly(){var x=this.c
x.toString
A.a8(x,!1).cc(A.ec(new D.eGl(this),!1,null,y.H))},
a3i(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$a3i=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u.l(new D.eGr(u))
x=3
return A.b(A.h2(A.J(["action","paCheck"],y.N,y.z),!1,!1,!1,!1,B.nT),$async$a3i)
case 3:t=e
if(u.c==null){x=1
break}u.l(new D.eGs(u,t))
s=t==null
if(!J.z(s?null:J.t(t,"ok"),!0)){s=s?null:J.t(t,"error")
u.b39(J.k(s==null?"The check did not finish.":s),C.es)
x=1
break}s=u.c
s.toString
s=A.Q(s).ax.a===B.dd
t.toString
r=D.fu(D.fu(J.t(t,"state")).h(0,"snapshot"))
q=u.c
q.toString
p=s?C.yK:C.yI
x=4
return A.b(A.bU(p,null,new D.eGt(u,new D.a1x(s),r,t),q,!0,!0,!0,B.aU9,!1,!1,y.H),$async$a3i)
case 4:case 1:return A.h(v,w)}})
return A.i($async$a3i,w)},
cz0(d,e,f,g){var x,w,v,u,t,s=null,r=D.fAZ(e)
B.d.b_(r,new D.eGu())
x=d.a
w=x?C.qE:C.qB
w=A.at(A.p(s,s,B.f,s,s,new A.o(w,s,s,A.n(9),s,s,B.m),s,4,s,s,s,s,s,40),s,s,s)
v=A.c("What the agent sees right now",s,s,s,s,s,s,A.l(s,s,x?C.dC:B.c,s,s,s,s,s,s,s,s,19,s,s,B.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)
u=J.z(f.h(0,"enabled"),!0)?" (next one "+D.hHy()+")":" (the agent is stopped, so none will be made)"
w=A.a([w,B.aA,v,B.at,A.c("Check now only looks. It never buys or sells. Pretend trades are made only by the automatic check every 15 minutes"+u+".",s,s,s,s,s,s,A.l(s,s,x?C.dg:C.dh,s,s,s,s,s,s,s,s,12.5,s,s,s,s,1.35,!0,s,s,s,s,s,s,s,s),s,s,s),B.af],y.p)
for(x=r.length,t=0;t<r.length;r.length===x||(0,A.I)(r),++t)w.push(D.hIy(d,r[t],s,!0,s))
return A.cp(w,g,s,C.bH9,s,s,B.ah,!1)},
b39(d,e){var x=null
this.c.L(y.q).f.T(A.b2(x,x,x,e,x,B.t,x,A.c(d,x,x,x,x,x,x,x,x,x,x),x,B.Y,x,x,x,x,x,x,x,x,x,x))},
B(d){var x,w=this,v=null,u=A.Q(d).ax.a===B.dd,t=new D.a1x(u),s=u?C.yK:C.yI,r=u?C.yK:C.yI
r=A.a([r,u?C.a_A:C.a_q],y.O)
x=w.cge(t)
if(w.f)u=B.lO
else{if(w.d==null){u=w.ax
u=A.a([w.aaD(t,u==null?"Nothing to show yet.":u,B.b2)],y.p)}else u=w.bIg(0,t)
u=A.PN(A.cp(u,v,v,C.bHv,v,v,B.ah,!1),v,new D.eGF(w))}return A.c5(v,s,A.p(v,A.bo(!0,A.x(A.a([x,A.E(u,1)],y.p),B.l,v,B.e,B.h,0,B.p),!0,!1,B.ag,!0,!0),B.f,v,v,new A.o(v,v,v,v,v,new A.a7(B.aX,B.b1,B.x,r,v,v),B.m),v,v,v,v,v,v,v,v),v,!1,!1,v,v)},
cge(d){var x,w,v,u,t,s,r=this,q=null,p=r.d,o=D.fu(p==null?q:J.t(p,"state")),n=J.z(o.h(0,"brakePaused"),!0),m=J.z(o.h(0,"enabled"),!0)&&!n
p=r.b37(d,B.eH,new D.eGC(r))
x=d.a
w=A.c("Signal Grid",q,q,q,q,q,q,A.l(q,q,x?C.dC:B.c,q,q,q,q,q,q,q,q,17,q,q,B.F,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
v=y.p
w=A.a([p,B.ar,A.E(A.x(A.a([w,A.c("Paper trading agent \xb7 pretend money",q,q,q,q,q,q,A.l(q,q,x?C.dg:C.dh,q,q,q,q,q,q,q,q,11.5,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],v),B.B,q,B.e,B.h,0,B.p),1)],v)
if(r.d!=null){if(n)p=C.es
else if(m)p=C.dN
else p=x?C.dg:C.dh
p=p.j(0.14)
u=A.n(999)
if(n)t=C.es
else if(m)t=C.dN
else t=x?C.dg:C.dh
t=A.W(B.r5,t,q,q,q,8)
if(n)s="Paused"
else s=m?"Running":"Stopped"
if(n)x=C.es
else if(m)x=C.dN
else x=x?C.dg:C.dh
w.push(A.p(q,A.A(A.a([t,B.bf,A.c(s,q,q,q,q,q,q,A.l(q,q,x,q,q,q,q,q,q,q,q,12,q,q,B.F,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],v),B.l,q,B.e,B.M,0,q,q),B.f,q,q,new A.o(p,q,q,u,q,q,B.m),q,q,q,q,B.fM,q,q,q))}w.push(B.aa)
w.push(r.b37(d,B.o3,r.r?q:new D.eGD(r)))
return new A.D(B.hm,A.A(w,B.l,q,B.e,B.h,0,q,q),q)},
bIg(c4,c5){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8=this,b9=null,c0="asset",c1="liveError",c2="brakePaused",c3=b8.d
c3.toString
x=J.a2(c3)
w=D.fu(x.h(c3,"state"))
v=D.fu(x.h(c3,"config"))
u=D.fu(w.h(0,"snapshot"))
t=y.f.b(w.h(0,"shadow"))?D.fu(w.h(0,"shadow")):b9
s=D.fAZ(u)
r=b8.z
if(r==null){q=t==null?b9:t.h(0,"symbol")
if(q==null)q=u.h(0,c0)
r=q==null?b9:J.k(q)}p=B.d.dC(s,new D.eG3(r),new D.eG4(s,u))
q=t==null
o=q?b9:B.d.dC(s,new D.eG5(t),new D.eG6(p))
q=!q
n=q&&J.z(t.h(0,"symbol"),J.t(p,c0))?t:b9
m=b8.c8u(c5,c3,s,p,t)
l=D.fu(x.h(c3,"market"))
k=J.a2(p)
j=k.h(p,c0)
i=J.k(j==null?"SPY":j)
h=B.a.q(i,"/")
g=D.aRu(p)
f=D.ek(k.h(p,"price"))
e=g.length!==0?D.ek(J.t(B.d.gH(g),"c")):0
d=e===0?0:(f-e)/e*100
a0=d>=0
if(h)a1=!0
else{j=k.h(p,"open")
if(j==null)j=l.h(0,"stockOpen")
a1=j==null?l.h(0,"open"):j}if(h)a2="Crypto \xb7 the agent trades it on Saturday and Sunday only"
else{j=J.kR(a1)
if(j.A(a1,!0))a2="Stock market open \xb7 the agent trades it on weekdays \xb7 closes 4:00 PM ET"
else{j=j.A(a1,!1)?"Stock market closed"+b8.cMj(l.h(0,"nextOpen")):""
a2=j}}a3=D.fAH(i)
j=D.fvz(i,30)
a4=h?i:i+"/USD"
a5=c5.a
a4=A.c(a4,b9,b9,b9,b9,b9,b9,A.l(b9,b9,a5?C.dC:B.c,b9,b9,b9,b9,b9,b9,b9,b9,17,b9,b9,B.F,b9,b9,!0,b9,b9,b9,b9,b9,b9,b9,b9),b9,b9,b9)
a6=k.h(p,"name")
a6=J.k(a6==null?a3.a:a6)
a7=y.p
a6=A.A(A.a([j,B.ar,a4,B.bf,new A.d5(1,B.cg,A.c(a6,b9,b9,B.a2,b9,b9,b9,A.l(b9,b9,a5?C.dg:C.dh,b9,b9,b9,b9,b9,b9,b9,b9,13,b9,b9,b9,b9,b9,!0,b9,b9,b9,b9,b9,b9,b9,b9),b9,b9,b9),b9)],a7),B.l,b9,B.e,B.h,0,b9,b9)
j=f===0?"\u2014":D.h1(f,!1,!1)
j=A.a([A.E(new A.dn(B.dx,B.a5,B.f,A.c(j,b9,b9,b9,b9,b9,b9,A.l(b9,b9,a5?C.dC:B.c,b9,b9,b9,b9,b9,b9,b9,H.Ji,42,b9,b9,B.a8,b9,b9,!0,b9,-1,b9,b9,b9,b9,b9,b9),b9,b9,b9),b9),1)],a7)
if(g.length>1){a4=(a0?C.dN:C.es).j(0.14)
a8=A.n(10)
a9=a0?C.ari:B.Qc
a9=A.W(a9,a0?C.dN:C.es,b9,b9,b9,20)
b0=B.i.a9(Math.abs(d),2)
j.push(A.p(b9,A.A(A.a([a9,A.c(b0+"%",b9,b9,b9,b9,b9,b9,A.l(b9,b9,a0?C.dN:C.es,b9,b9,b9,b9,b9,b9,b9,b9,13,b9,b9,B.F,b9,b9,!0,b9,b9,b9,b9,b9,b9,b9,b9),b9,b9,b9)],a7),B.l,b9,B.e,B.M,0,b9,b9),B.f,b9,b9,new A.o(a4,b9,b9,a8,b9,b9,B.m),b9,b9,b9,b9,B.fM,b9,b9,b9))}j=A.a([a6,B.O,A.A(j,B.l,b9,B.e,B.h,0,b9,b9)],a7)
if(a2.length!==0){if(J.z(a1,!0))a4=C.dN
else a4=a5?C.dg:C.dh
a4=A.W(B.r5,a4,b9,b9,b9,7)
a6=g.length>1?"  \xb7  change over 4H":""
B.d.u(j,A.a([B.at,A.A(A.a([a4,B.bf,new A.d5(1,B.cg,A.c(a2+a6,b9,b9,B.a2,b9,b9,b9,A.l(b9,b9,a5?C.dg:C.dh,b9,b9,b9,b9,b9,b9,b9,b9,12,b9,b9,b9,b9,b9,!0,b9,b9,b9,b9,b9,b9,b9,b9),b9,b9,b9),b9)],a7),B.l,b9,B.e,B.h,0,b9,b9)],a7))}m=A.a([m,new A.D(C.bKK,A.x(j,B.B,b9,B.e,B.h,0,B.p),b9)],a7)
j=v.h(0,"problem")
if(J.k(j==null?"":j).length!==0)m.push(b8.aaD(c5,J.k(v.h(0,"problem")),E.jQ))
j=x.h(c3,c1)
if(J.k(j==null?"":j).length!==0)m.push(b8.aaD(c5,J.k(x.h(c3,c1)),C.es))
if(J.z(w.h(0,c2),!0)){j=w.h(0,"brakeReason")
m.push(b8.aaD(c5,"Paused by the $100 brake. "+A.v(j==null?"":j)+". Look over the trades, then press Start to turn it back on.",C.es))}m.push(b8.bLf(c5,p,n))
m.push(b8.cJE(c5,p,t,c3))
m.push(b8.bHU(c5,c3,w,u))
if(q){o.toString
x=b8.crx(c5,t,o,D.fu(x.h(c3,"ticket")),D.fu(u.h(0,"held")))}else{b1=D.fu(x.h(c3,"ticket"))
f=D.ek(k.h(p,"price"))
b2=D.ek(b1.h(0,"amount"))===0?100:D.ek(b1.h(0,"amount"))
x=J.z(b1.h(0,"kind"),"spot")
q=f===0
b3=q?0:b2/f
j=b1.h(0,"takeProfitUsd")
b4=D.ek(j==null?50:j)
j=b1.h(0,"stopLossUsd")
b5=D.ek(j==null?50:j)
j=A.A(A.a([A.c("Next trade",b9,b9,b9,b9,b9,b9,A.l(b9,b9,a5?C.dC:B.c,b9,b9,b9,b9,b9,b9,b9,b9,16,b9,b9,B.F,b9,b9,!0,b9,b9,b9,b9,b9,b9,b9,b9),b9,b9,b9),B.aY,b8.a0M("AUTOMATIC",B.b2)],a7),B.l,b9,B.e,B.h,0,b9,b9)
a4=a5?C.H3:C.GT
a6=A.n(999)
a8=a5?C.l_:B.c
a9=A.n(999)
a8=A.E(A.p(B.z,A.c("BUY",b9,b9,b9,b9,b9,b9,A.l(b9,b9,a5?B.c:C.l_,b9,b9,b9,b9,b9,b9,b9,b9,12.5,b9,b9,B.F,b9,b9,!0,b9,b9,b9,b9,b9,b9,b9,b9),b9,b9,b9),B.f,b9,b9,new A.o(a8,b9,b9,a9,b9,b9,B.m),b9,b9,b9,b9,B.wU,b9,b9,b9),1)
j=A.a([j,B.af,A.p(b9,A.A(A.a([a8,A.E(A.at(A.c("SELL",b9,b9,b9,b9,b9,b9,A.l(b9,b9,a5?C.dg:C.dh,b9,b9,b9,b9,b9,b9,b9,b9,12.5,b9,b9,B.F,b9,b9,!0,b9,b9,b9,b9,b9,b9,b9,b9),b9,b9,b9),b9,b9,b9),1)],a7),B.l,b9,B.e,B.h,0,b9,b9),B.f,b9,b9,new A.o(a4,b9,b9,a6,b9,b9,B.m),b9,b9,b9,b9,B.eu,b9,b9,b9),B.S],a7)
if(!x){k=b8.bc5(c5,"What it buys (weekdays)","1 SPY call option",!0,"at the money, expiry 7+ days")
a4=b1.h(0,"optionMaxUsd")
B.d.u(j,A.a([k,b8.bc4(c5,"Most it pays",D.h1(D.ek(a4==null?120:a4),!0,!1),"costs more: no trade, log says why")],a7))}else{a4=D.h1(b2,!0,!1)
if(q)k=b9
else{a6=B.i.a9(b3,b3<0.01?6:4)
k=k.h(p,c0)
k="\u2248 "+a6+" "+A.v(k==null?"":k)}j.push(b8.bc5(c5,"Amount it puts in (weekends)",a4,!0,k))}k=D.h1(b4,!0,!1)
a4=!x||q?"sells when up $"+B.i.a9(b4,0):"sells at "+D.h1(f*(1+b4/b2),!0,!1)
j.push(b8.bc6(c5,"Take profit","+"+k,C.dN,a4))
a4=D.h1(b5,!0,!1)
x=!x||q?"sells when down $"+B.i.a9(b5,0):"sells at "+D.h1(f*(1-b5/b2),!0,!1)
j.push(b8.bc6(c5,"Stop loss","-"+a4,C.es,x))
x=b1.h(0,"dailyStopUsd")
x=B.i.a9(D.ek(x==null?50:x),0)
q=b1.h(0,"totalBrakeUsd")
j.push(b8.bc4(c5,"Brakes","-$"+x+" a day \xb7 -$"+B.i.a9(D.ek(q==null?100:q),0)+" total","win = loss: 5 of 10 breaks even"))
j.push(B.S)
x=a5?C.l_:B.c
q=A.n(999)
j.push(A.p(B.z,A.c("Buys by itself when the trend turns up",b9,b9,b9,b9,b9,b9,A.l(b9,b9,a5?B.c:C.l_,b9,b9,b9,b9,b9,b9,b9,b9,13.5,b9,b9,B.F,b9,b9,!0,b9,b9,b9,b9,b9,b9,b9,b9),b9,b9,b9),B.f,b9,b9,new A.o(x,b9,b9,q,b9,b9,B.m),b9,b9,b9,b9,B.cm,b9,b9,1/0))
j.push(B.ak)
j.push(A.at(A.c("Pretend money only: Version 1 never sends an order to Alpaca.",b9,b9,b9,b9,b9,b9,A.l(b9,b9,a5?C.dg:C.dh,b9,b9,b9,b9,b9,b9,b9,b9,11,b9,b9,b9,b9,b9,!0,b9,b9,b9,b9,b9,b9,b9,b9),B.K,b9,b9),b9,b9,b9))
x=b8.a0K(c5,A.x(j,B.B,b9,B.e,B.h,0,B.p))}m.push(x)
m.push(b8.cgb(c5,w))
b6=J.z(w.h(0,"enabled"),!0)&&!J.z(w.h(0,c2),!0)
x=w.h(0,"lastTickAt")
b7=A.bi(A.v(x==null?"":x))
if(b6)x=C.dN
else x=a5?C.dg:C.dh
x=A.W(S.a3W,x,b9,b9,b9,16)
if(b6){q=b7==null?"not yet":D.aQJ(D.bFt(b7))+" ET"
q="Trades are automatic: the agent looks for a new buy every 15 minutes and, while it holds a trade, checks the exits every 5 minutes. Last check "+q+" \xb7 next buy check "+D.hHy()+". Check now only looks, it never trades."}else q="The agent is stopped, so it makes no trades. Press Start and it looks for a buy every 15 minutes by itself."
m.push(new A.D(C.bKX,A.A(A.a([x,B.bf,A.E(A.c(q,b9,b9,b9,b9,b9,b9,A.l(b9,b9,a5?C.dg:C.dh,b9,b9,b9,b9,b9,b9,b9,b9,11.5,b9,b9,b9,b9,1.35,!0,b9,b9,b9,b9,b9,b9,b9,b9),b9,b9,b9),1)],a7),B.B,b9,B.e,B.h,0,b9,b9),b9))
m.push(b8.cJk(c5,c3))
m.push(b8.bET(c5))
m.push(b8.cxW(c5,c3))
c3=J.z(v.h(0,"ordersSwitchOn"),!0)?"on":"off"
m.push(new A.D(B.hy,A.c("Version 1 is read-only: no order is ever sent to Alpaca. Order switch (ALPACA_ORDERS_ENABLED): "+c3+".",b9,b9,b9,b9,b9,b9,A.l(b9,b9,a5?C.dg:C.dh,b9,b9,b9,b9,b9,b9,b9,b9,11,b9,b9,b9,b9,b9,!0,b9,b9,b9,b9,b9,b9,b9,b9),B.K,b9,b9),b9))
return m},
cDe(d,e,f){var x=null,w=this.c
w.toString
A.ce(x,x,!0,x,new D.eGB(this,d,e,f),w,x,!0,!0,y.H)},
c8u(d,e,f,g,h){var x,w,v,u,t,s,r=this,q=null
if(f.length<2)return B.bL
x=new A.X(f,new D.eGg(),A.U(f).k("X<1>")).gJ(0)
w=d.a
v=A.c("Agent markets",q,q,q,q,q,q,A.l(q,q,w?C.dC:B.c,q,q,q,q,q,q,q,q,14,q,q,B.F,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
u=x===0
t=u?"NONE TRADED NOW":"TRADED NOW"
t=r.a0M(t,u?E.jQ:C.dN)
s=A.hfv(!1,q,!0,new A.D(B.eu,A.W(B.kK,u?E.jQ:C.dN,q,q,q,19),q),!1,q,!0,!1,q,q,q,B.a6,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new D.eGh(r,d,e,h),q,q,q,q,20,q,q,q)
u=y.p
return new A.D(B.eK,A.x(A.a([new A.D(C.bKr,A.A(A.a([v,B.aa,t,B.d8,s,B.aY,A.c("tap one",q,q,q,q,q,q,A.l(q,q,w?C.dg:C.dh,q,q,q,q,q,q,q,q,11,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],u),B.l,q,B.e,B.h,0,q,q),q),new A.a6(q,128,A.hV(B.f,r.cr5(B.d.bl(f,new D.eGi(g))),new D.eGj(r,f,g,h,d),f.length,q,q,B.aL,new D.eGk(),!1),q),B.at],u),B.B,q,B.e,B.h,0,B.p),q)},
bLf(d,e,f){var x,w,v,u,t,s,r=this,q=null,p=D.aRu(e),o=p.length
if(o<2)return r.a0K(d,new A.a6(q,120,A.at(A.c("The chart appears after the first reading.",q,q,q,q,q,q,A.l(q,q,d.a?C.dg:C.dh,q,q,q,q,q,q,q,q,q,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),q,q,q),q))
x=B.d.fE(p,Math.max(0,o-r.y))
w=f==null||y.f.b(f.h(0,"option"))?q:D.ek(f.h(0,"entryPrice"))
o=y.p
v=A.a([],o)
for(u=0;u<3;++u){t=C.co8[u]
if(t<=12)s="1H"
else s=t<=24?"2H":"4H"
B.d.u(v,A.a([r.czZ(d,s,r.y===t,new D.eG9(r,t)),B.bf],o))}v.push(B.aY)
v.push(r.b8J(d,"Trend lines",r.at,new D.eGa(r),I.xm))
v=A.a([A.A(v,B.l,q,B.e,B.h,0,q,q),B.S,new D.adH(x,d,w,r.at,D.ek(J.t(e,"price")),q)],o)
if(r.at){s=A.a([r.aym(d,B.bB,"Fast line (45 min)"),r.aym(d,B.b2,"Slow line (1 h 45 min)")],o)
if(w!=null)s.push(r.aym(d,F.uG,"Your pretend buy"))
B.d.u(v,A.a([B.O,A.bZ(B.fT,s,B.br,q,4,14)],o))}return r.aAx(d,A.x(v,B.l,q,B.e,B.h,0,B.p),B.wV)},
cJE(d,a0,a1,a2){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i=J.a2(a0),h=D.fu(i.h(a0,"chart")).h(0,"trend"),g=J.k(h==null?"unknown":h),f=D.fu(J.t(a2,"state")),e=J.z(f.h(0,"enabled"),!0)&&!J.z(f.h(0,"brakePaused"),!0)
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
l=A.c(v,j,j,j,j,j,j,A.l(j,j,h?C.dC:B.c,j,j,j,j,j,j,j,j,16,j,j,B.u,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)
k=y.p
return A.p(j,A.A(A.a([m,B.bb,A.E(A.x(A.a([l,B.by,A.c(p,j,j,j,j,j,j,A.l(j,j,h?C.dg:C.dh,j,j,j,j,j,j,j,j,12.5,j,j,j,j,1.3,!0,j,j,j,j,j,j,j,j),j,j,j)],k),B.B,j,B.e,B.h,0,B.p),1)],k),B.l,j,B.e,B.h,0,j,j),B.f,j,j,new A.o(j,j,n,i,j,new A.a7(B.a5,B.a9,B.x,o,j,j),B.m),j,j,j,B.e9,B.bH,j,j,j)},
bHU(a5,a6,a7,a8){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=null,e="equity",d=J.a2(a6),a0=D.fu(d.h(a6,"today")),a1=D.fu(d.h(a6,"record")),a2=D.fu(d.h(a6,"ticket")),a3=a1.h(0,"pnlSum")!=null?D.ek(a1.h(0,"pnlSum")):D.ek(a7.h(0,"totalPnl")),a4=D.ek(a0.h(0,"day_pnl"))
d=y.f
x=d.b(a7.h(0,"shadow"))?D.fu(a7.h(0,"shadow")):f
w=x!=null
v=0
if(w){u=D.fu(a8.h(0,"held"))
if(u.h(0,"pnl")!=null)v=D.ek(u.h(0,"pnl"))
else if(!d.b(x.h(0,"option"))){t=D.ek(J.t(B.d.dC(D.fAZ(a8),new D.eG1(x),new D.eG2()),"price"))
if(t>0){d=D.ek(x.h(0,"qty"))
s=x.h(0,"mult")==null?1:D.ek(x.h(0,"mult"))
v=d*s*(t-D.ek(x.h(0,"entryPrice")))}}}r=D.fu(a1.h(0,"newRules"))
q=r.h(0,"winRatePct")
p=D.ek(a8.h(0,e))
o=a3+v
d=A.n(26)
s=A.a([new A.aa(0,B.H,B.i0.j(0.3),B.eT,24)],y.V)
n=y.p
m=A.A(A.a([C.h4k,B.aY,A.p(f,C.h3C,B.f,f,f,new A.o(B.c.j(0.14),f,f,A.n(999),f,f,B.m),f,f,f,f,B.fD,f,f,f)],n),B.l,f,B.e,B.h,0,f,f)
m=A.a([m,B.at,new A.dn(B.dx,B.a5,B.f,A.c(a8.h(0,e)==null?"\u2014":D.h1(p+a3+v,!0,!1),f,f,f,f,f,f,C.fF0,f,f,f),f)],n)
if(a8.h(0,e)!=null){l=o>=0?C.ari:B.Qc
k=o>0
if(k)j=C.dN
else j=o<0?C.es:B.ab
j=A.W(l,j,f,f,f,f)
l=D.h1(o,!0,!0)
w=w?" (incl. the open one)":""
if(k)k=C.dN
else k=o<0?C.es:B.ab
m.push(A.A(A.a([j,A.c(l+" from pretend trades"+w,f,f,f,f,f,f,A.l(f,f,k,f,f,f,f,f,f,f,f,12.5,f,f,B.F,f,f,!0,f,f,f,f,f,f,f,f),f,f,f)],n),B.l,f,B.e,B.h,0,f,f))}m.push(B.by)
m.push(A.c("Alpaca paper account "+D.h1(p,!0,!1)+" (unchanged, Version 1 sends no orders) \xb7 $"+B.i.a9(D.ek(a2.h(0,"amount")),0)+" a trade",f,f,f,f,f,f,Y.LF,f,f,f))
m.push(B.aA)
w=D.h1(a4,!0,!0)
if(a4>0)l=C.dN
else l=a4<0?C.es:B.c
l=A.E(g.P4("Today",w,l),1)
w=D.h1(a3,!0,!0)
if(a3>0)k=C.dN
else k=a3<0?C.es:B.c
k=A.E(g.P4("All time",w,k),1)
w=a1.h(0,"wins")
w=A.v(w==null?0:w)
j=a1.h(0,"losses")
m.push(A.A(A.a([l,B.aa,k,B.aa,A.E(g.P4("Wins / losses",w+" / "+A.v(j==null?0:j),B.c),1)],n),B.l,f,B.e,B.h,0,f,f))
m.push(B.O)
w=a0.h(0,"trades")
w=A.v(w==null?0:w)
l=a2.h(0,"maxTradesToday")
w=A.E(g.P4("Trades today",w+" of "+A.v(l==null?4:l),B.c),1)
l=a2.h(0,"dailyStopUsd")
l=A.E(g.P4("Daily stop","-$"+B.i.a9(D.ek(l==null?50:l),0),B.c),1)
k=a2.h(0,"totalBrakeUsd")
m.push(A.A(A.a([w,B.aa,l,B.aa,A.E(g.P4("Total brake","-$"+B.i.a9(D.ek(k==null?100:k),0),B.c),1)],n),B.l,f,B.e,B.h,0,f,f))
m.push(B.O)
w=B.c.j(0.1)
l=A.n(14)
k=q==null
if(k)j="No $100 trades yet"
else{j=B.i.a9(D.ek(q),0)
i=r.h(0,"wins")
i=A.v(i==null?0:i)
h=r.h(0,"trades")
j=j+"%  \xb7  "+i+" won of "+A.v(h==null?0:h)}if(k)k=B.c
else k=D.ek(q)>=50?C.dN:C.es
m.push(A.p(f,A.A(A.a([A.E(A.x(A.a([C.fWc,B.by,A.c(j,f,f,f,f,f,f,A.l(f,f,k,f,f,f,f,f,f,f,f,16,f,f,B.F,f,f,!0,f,f,f,f,f,f,f,f),f,f,f)],n),B.B,f,B.e,B.h,0,B.p),1),C.hbQ],n),B.l,f,B.e,B.h,0,f,f),B.f,f,f,new A.o(w,f,f,l,f,f,B.m),f,f,f,f,B.et,f,f,1/0))
return A.p(f,A.x(m,B.B,f,B.e,B.h,0,B.p),B.f,f,f,new A.o(f,f,f,d,s,C.caB,B.m),f,f,f,B.e9,B.fc,f,f,f)},
P4(d,e,f){var x=null,w=B.c.j(0.1),v=A.n(14)
return A.p(x,A.x(A.a([A.c(d,x,1,B.a2,x,x,x,B.LP,x,x,x),B.by,new A.dn(B.dx,B.a5,B.f,A.c(e,x,x,x,x,x,x,A.l(x,x,f,x,x,x,x,x,x,x,x,15,x,x,B.F,x,x,!0,x,x,x,x,x,x,x,x),x,x,x),x)],y.p),B.B,x,B.e,B.h,0,B.p),B.f,x,x,new A.o(w,x,x,v,x,x,B.m),x,x,x,x,B.anl,x,x,x)},
crx(a8,a9,b0,b1,b2){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0=null,a1="price",a2=D.ek(a9.h(0,"entryPrice")),a3=D.ek(a9.h(0,"qty")),a4=a9.h(0,"mult")==null?1:D.ek(a9.h(0,"mult")),a5=y.f.b(a9.h(0,"option"))?D.fu(a9.h(0,"option")):a0,a6=J.a2(b0),a7=J.z(a9.h(0,"symbol"),a6.h(b0,"asset"))
if(b2.h(0,a1)!=null)x=D.ek(b2.h(0,a1))
else x=a5==null&&a7?D.ek(a6.h(b0,a1)):a2
a6=a3*a4
w=a6*a2
v=a6*x
u=v-w
t=a2===0?0:(x-a2)/a2*100
s=u>=0
r=b1.h(0,"takeProfitUsd")
q=D.ek(r==null?50:r)
r=b1.h(0,"stopLossUsd")
p=D.ek(r==null?50:r)
o=B.i.D((u+p)/(q+p),0,1)
n=a6===0?0:1/a6
m=a2-p*n
a6=a8.a
r=y.p
l=A.A(A.a([A.c("Your pretend position",a0,a0,a0,a0,a0,a0,A.l(a0,a0,a6?C.dC:B.c,a0,a0,a0,a0,a0,a0,a0,a0,16,a0,a0,B.F,a0,a0,!0,a0,a0,a0,a0,a0,a0,a0,a0),a0,a0,a0),B.aY,d.a0M("OPEN",C.dN)],r),B.l,a0,B.e,B.h,0,a0,a0)
k=D.h1(u,!0,!0)
k=A.c(k,a0,a0,a0,a0,a0,a0,A.l(a0,a0,s?C.dN:C.es,a0,a0,a0,a0,a0,a0,a0,a0,34,a0,a0,B.F,a0,a0,!0,a0,a0,a0,a0,a0,a0,a0,a0),a0,a0,a0)
j=t>=0?"+":""
i=B.i.a9(t,2)
k=A.A(A.a([k,B.aa,new A.D(B.eK,A.c(j+i+"%",a0,a0,a0,a0,a0,a0,A.l(a0,a0,s?C.dN:C.es,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,B.F,a0,a0,!0,a0,a0,a0,a0,a0,a0,a0,a0),a0,a0,a0),a0)],r),B.dI,a0,B.e,B.h,0,a0,a0)
j=s?"You would be winning right now":"You would be losing right now"
l=A.a([l,B.af,k,A.c(j,a0,a0,a0,a0,a0,a0,A.l(a0,a0,a6?C.dg:C.dh,a0,a0,a0,a0,a0,a0,a0,a0,12.5,a0,a0,a0,a0,a0,!0,a0,a0,a0,a0,a0,a0,a0,a0),a0,a0,a0),B.aA],r)
k=a5!=null
if(k){j=a6?C.CF:C.CH
i=A.n(16)
h=A.c("1 SPY call option",a0,a0,a0,a0,a0,a0,A.l(a0,a0,a6?C.dg:C.dh,a0,a0,a0,a0,a0,a0,a0,a0,11.5,a0,a0,a0,a0,a0,!0,a0,a0,a0,a0,a0,a0,a0,a0),a0,a0,a0)
g=D.h1(D.ek(a5.h(0,"strike")),!0,!1)
f=D.hFo(a5.h(0,"expiry"))
g=A.c("Strike "+g+" \xb7 expires "+f,a0,a0,a0,a0,a0,a0,A.l(a0,a0,a6?C.dC:B.c,a0,a0,a0,a0,a0,a0,a0,a0,15,a0,a0,B.F,a0,a0,!0,a0,a0,a0,a0,a0,a0,a0,a0),a0,a0,a0)
f=D.h1(a2,!0,!1)
e=D.h1(w,!0,!1)
B.d.u(l,A.a([A.p(a0,A.x(A.a([h,B.by,g,B.by,A.c("Premium paid "+f+" a share x 100 = "+e,a0,a0,a0,a0,a0,a0,A.l(a0,a0,a6?C.dg:C.dh,a0,a0,a0,a0,a0,a0,a0,a0,11.5,a0,a0,a0,a0,a0,!0,a0,a0,a0,a0,a0,a0,a0,a0),a0,a0,a0)],r),B.B,a0,B.e,B.h,0,B.p),B.f,a0,a0,new A.o(j,a0,a0,i,a0,a0,B.m),a0,a0,a0,a0,B.bk,a0,a0,1/0),B.O],r))}j=A.E(d.aAz(a8,"You put in",D.h1(w,!0,!1)),1)
i=D.h1(v,!0,!1)
l.push(A.A(A.a([j,B.aa,A.E(d.aAA(a8,"Worth now",i,s?C.dN:C.es),1)],r),B.l,a0,B.e,B.h,0,a0,a0))
l.push(B.O)
j=k?"Premium paid":"Bought at"
j=A.E(d.aAz(a8,j,D.h1(a2,!0,!1)),1)
if(k){k=J.z(b2.h(0,"priced"),!1)?"no price yet":D.h1(x,!0,!1)
k=d.aAA(a8,"Premium now",k,s?C.dN:C.es)}else k=d.aAz(a8,"Amount",B.i.a9(a3,a3<0.01?6:4)+" "+A.v(a9.h(0,"symbol")))
l.push(A.A(A.a([j,B.aa,A.E(k,1)],r),B.l,a0,B.e,B.h,0,a0,a0))
l.push(B.aO)
l.push(A.cf(new D.eGo(a8,o)))
l.push(B.ak)
k=D.h1(p,!0,!1)
l.push(A.A(A.a([A.E(A.c("Stop loss\n-"+k+" \xb7 at "+D.h1(m<0?0:m,!0,!1),a0,a0,a0,a0,a0,a0,C.fKW,a0,a0,a0),1),A.E(A.c("Take profit\n+"+D.h1(q,!0,!1)+" \xb7 at "+D.h1(a2+q*n,!0,!1),a0,a0,a0,a0,a0,a0,C.fJw,B.e1,a0,a0),1)],r),B.l,a0,B.e,B.h,0,a0,a0))
l.push(B.ak)
r=D.ihy(a9.h(0,"entryAt"))
l.push(A.c("Bought "+r,a0,a0,a0,a0,a0,a0,A.l(a0,a0,a6?C.dg:C.dh,a0,a0,a0,a0,a0,a0,a0,a0,11.5,a0,a0,a0,a0,a0,!0,a0,a0,a0,a0,a0,a0,a0,a0),a0,a0,a0))
return d.a0K(a8,A.x(l,B.B,a0,B.e,B.h,0,B.p))},
aEB(d,e,f,g,h,i){var x,w,v=null,u=d.a,t=u?C.CF:C.CH,s=A.n(16),r=A.c(e,v,v,v,v,v,v,A.l(v,v,u?C.dg:C.dh,v,v,v,v,v,v,v,v,11.5,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
if(h==null)x=u?C.dC:B.c
else x=h
w=y.p
w=A.a([A.E(A.x(A.a([r,B.by,A.c(f,v,v,v,v,v,v,A.l(v,v,x,v,v,v,v,v,v,v,v,g?24:17,v,v,B.F,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],w),B.B,v,B.e,B.h,0,B.p),1)],w)
if(i!=null)w.push(A.c(i,v,v,v,v,v,v,A.l(v,v,u?C.dg:C.dh,v,v,v,v,v,v,v,v,11.5,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v))
return A.p(v,A.A(w,B.l,v,B.e,B.h,0,v,v),B.f,v,v,new A.o(t,v,v,s,v,v,B.m),v,v,v,B.jg,B.eX,v,v,v)},
bc5(d,e,f,g,h){return this.aEB(d,e,f,g,null,h)},
bc4(d,e,f,g){return this.aEB(d,e,f,!1,null,g)},
bc6(d,e,f,g,h){return this.aEB(d,e,f,!1,g,h)},
cgb(d,e){var x,w,v,u=this,t=null,s=J.z(e.h(0,"enabled"),!0)&&!J.z(e.h(0,"brakePaused"),!0),r=s?C.es:C.dN
r=A.bp(r,t,t,t,t,t,t,t,new A.ba(A.n(999),B.a1),t,t,t)
x=u.r?t:new D.eGb(u,s)
w=A.W(s?B.xn:B.fZ,t,t,t,t,t)
r=A.E(new A.a6(t,52,A.dc(w,t,A.c(s?"Stop agent":"Start agent",t,t,t,t,t,t,B.nr,t,t,t),x,r),t),3)
x=d.a
w=x?C.dC:B.c
v=x?C.qE:C.qB
x=x?B.c.j(0.92):C.kY
v=A.di(t,t,x,t,t,t,t,t,t,w,t,t,t,t,new A.ba(A.n(999),B.a1),new A.ax(v,1.5,B.r,-1),t,t,t,t)
x=u.r
w=x?t:u.gcyZ()
return new A.D(B.e9,A.A(A.a([r,B.ar,A.E(new A.a6(t,52,A.eo(x?B.Lg:C.c59,t,C.he2,w,v),t),2)],y.p),B.l,t,B.e,B.h,0,t,t),t)},
cJk(b4,b5){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9=null,b0="entryPrice",b1="exitPrice",b2="outValue",b3=y.g.a(J.t(b5,"trades"))
if(b3==null)b3=B.c9
x=y.f
b3=J.cZ(b3,x)
b3=A.cF(b3,new D.eGE(),b3.$ti.k("M.E"),y.P)
w=A.B(b3,A.a5(b3).k("M.E"))
b3=b4.a
v=y.p
u=A.a([A.c("Pretend trades",a9,a9,a9,a9,a9,a9,A.l(a9,a9,b3?C.dC:B.c,a9,a9,a9,a9,a9,a9,a9,a9,16,a9,a9,B.F,a9,a9,!0,a9,a9,a9,a9,a9,a9,a9,a9),a9,a9,a9),B.O],v)
if(w.length===0){t=A.W(B.h_,b3?C.dg:C.dh,a9,a9,a9,a9)
u.push(new A.D(B.cm,A.A(A.a([t,B.ar,A.E(A.c("No trades yet. Each buy shows what was bought (for a SPY option: strike, expiry and premium) and what was put in; each sell shows the entry and exit price and the win or loss in dollars.",a9,a9,a9,a9,a9,a9,A.l(a9,a9,b3?C.dg:C.dh,a9,a9,a9,a9,a9,a9,a9,a9,12.5,a9,a9,a9,a9,1.3,!0,a9,a9,a9,a9,a9,a9,a9,a9),a9,a9,a9),1)],v),B.l,a9,B.e,B.h,0,a9,a9),a9))}for(t=w.length,s=y.N,r=y.z,q=0;q<w.length;w.length===t||(0,A.I)(w),++q){p=w[q]
o=J.a2(p)
n=J.z(o.h(p,"decision"),"would buy")
m=o.h(p,"details")
l=x.b(m)?A.a1(m,s,r):A.S(s,r)
if(x.b(l.h(0,"option"))){m=l.h(0,"option")
k=x.b(m)?A.a1(m,s,r):A.S(s,r)}else k=a9
m=k!=null
if(m){j=k.h(0,"strike")
if(!(typeof j=="number")){j=A.cE(A.v(j==null?"":j))
if(j==null)j=0}i="SPY "+D.h1(j,!0,!1)+" call"}else{j=o.h(p,"asset")
i=J.k(j==null?"":j)}if(l.h(0,"amount")==null)h=50
else{j=l.h(0,"amount")
if(typeof j=="number")h=j
else{j=A.cE(A.v(j==null?"":j))
if(j==null)j=0
h=j}}g=l.h(0,"qty")
if(!(typeof g=="number")){j=A.cE(A.v(g==null?"":g))
g=j==null?0:j}f=l.h(0,"pnl")
if(!(typeof f=="number")){j=A.cE(A.v(f==null?"":f))
f=j==null?0:j}e=l.h(0,b0)!=null
d=l.h(0,b0)
if(!(typeof d=="number")){j=A.cE(A.v(d==null?"":d))
d=j==null?0:j}if(l.h(0,b1)==null){j=o.h(p,"price")
if(typeof j=="number")a0=j
else{j=A.cE(A.v(j==null?"":j))
if(j==null)j=0
a0=j}}else{j=l.h(0,b1)
if(typeof j=="number")a0=j
else{j=A.cE(A.v(j==null?"":j))
if(j==null)j=0
a0=j}}if(m)if(n)a1="expires "+D.hFo(k.h(0,"expiry"))+" \xb7 premium "+D.h1(d,!0,!1)+" x 100"
else{m=D.h1(d,!0,!1)
j=D.h1(a0,!0,!1)
a2=o.h(p,"reason")
a2=J.k(a2==null?"":a2)
a3=B.a.cd(a2,"(")
a1="premium "+m+" \u2192 "+j+" \xb7 "+B.a.i(a3>0?B.a.aw(a2,0,a3):a2)}else if(n){if(g===0)m=""
else m=B.i.a9(g,g<0.01?6:4)+" at "
if(e)j=d
else{j=o.h(p,"price")
if(!(typeof j=="number")){j=A.cE(A.v(j==null?"":j))
if(j==null)j=0}}a1=m+D.h1(j,!0,!1)}else{m=e?D.h1(d,!0,!1)+" \u2192 ":"at "
j=D.h1(a0,!0,!1)
a2=o.h(p,"reason")
a2=J.k(a2==null?"":a2)
a3=B.a.cd(a2,"(")
a1=m+j+" \xb7 "+B.a.i(a3>0?B.a.aw(a2,0,a3):a2)}a4=f>=0
if(n)a5=B.ce
else a5=a4?C.dN:C.es
m=b3?C.qE:C.qB
j=a5.j(0.14)
a2=new A.aP(13,13)
j=A.p(a9,A.W(n?B.vv:B.tD,a5,a9,a9,a9,20),B.f,a9,a9,new A.o(j,a9,a9,new A.bc(a2,a2,a2,a2),a9,a9,B.m),a9,40,a9,a9,a9,a9,a9,40)
a2=n?"Bought":"Sold"
a6=b3?C.dC:B.c
a2=A.c(a2+" "+i,a9,a9,a9,a9,a9,a9,new A.H(!0,a6,a9,a9,a9,a9,14,B.F,a9,a9,a9,a9,a9,a9,a9,a9,a9,a9,a9,a9,a9,a9,a9,a9,a9,a9),a9,a9,a9)
a6=b3?C.dg:C.dh
a6=A.c(a1,a9,2,B.a2,a9,a9,a9,new A.H(!0,a6,a9,a9,a9,a9,11.5,a9,a9,a9,a9,a9,a9,a9,a9,a9,a9,a9,a9,a9,a9,a9,a9,a9,a9,a9),a9,a9,a9)
o=o.h(p,"et_time")
o=J.k(o==null?"":o)
a7=b3?C.dg:C.dh
o=A.x(A.a([a2,B.by,a6,A.c(o,a9,a9,a9,a9,a9,a9,new A.H(!0,a7,a9,a9,a9,a9,10.5,a9,a9,a9,a9,a9,a9,a9,a9,a9,a9,a9,a9,a9,a9,a9,a9,a9,a9,a9),a9,a9,a9)],v),B.B,a9,B.e,B.h,0,B.p)
if(n)a2="-"+D.h1(h,!0,!1)
else{if(l.h(0,b2)==null)a2=h+f
else{a2=l.h(0,b2)
if(!(typeof a2=="number")){a2=A.cE(A.v(a2==null?"":a2))
if(a2==null)a2=0}}a2="+"+D.h1(a2,!0,!1)}a6=b3?C.dC:B.c
a2=A.a([A.c(a2,a9,a9,a9,a9,a9,a9,new A.H(!0,a6,a9,a9,a9,a9,14,B.F,a9,a9,a9,a9,a9,a9,a9,a9,a9,a9,a9,a9,a9,a9,a9,a9,a9,a9),a9,a9,a9)],v)
if(!n){a6=D.h1(f,!0,!0)
if(l.h(0,"pct")==null)a7=""
else{a7=l.h(0,"pct")
if(!(typeof a7=="number")){a7=A.cE(A.v(a7==null?"":a7))
if(a7==null)a7=0}a7=a7>=0?"+":""
a8=l.h(0,"pct")
if(!(typeof a8=="number")){a8=A.cE(A.v(a8==null?"":a8))
if(a8==null)a8=0}a8=" ("+a7+B.i.a9(a8,2)+"%)"
a7=a8}a8=a4?C.dN:C.es
a2.push(A.c(a6+a7,a9,a9,a9,a9,a9,a9,new A.H(!0,a8,a9,a9,a9,a9,12,B.F,a9,a9,a9,a9,a9,a9,a9,a9,a9,a9,a9,a9,a9,a9,a9,a9,a9,a9),a9,a9,a9))}if(n){a6=b3?C.dg:C.dh
a2.push(A.c("put in",a9,a9,a9,a9,a9,a9,new A.H(!0,a6,a9,a9,a9,a9,11,a9,a9,a9,a9,a9,a9,a9,a9,a9,a9,a9,a9,a9,a9,a9,a9,a9,a9,a9),a9,a9,a9))}u.push(A.p(a9,new A.c3(B.aL,B.e,B.h,B.l,a9,B.p,a9,0,A.a([j,B.bb,new A.bz(1,B.ba,o,a9),B.aa,A.x(a2,B.dI,a9,B.e,B.h,0,B.p)],v),a9),B.f,a9,a9,new A.o(a9,a9,new A.bE(B.a1,B.a1,new A.ax(m,1,B.r,-1),B.a1),a9,a9,a9,B.m),a9,a9,a9,a9,B.jU,a9,a9,a9))}return this.a0K(b4,A.x(u,B.B,a9,B.e,B.h,0,B.p))},
bET(d){var x,w,v,u=this,t=null,s=u.x,r=u.e
r=s?r:A.cS(r,0,A.dA(8,"count",y.S),A.U(r).c).dn(0)
s=d.a
x=A.c("Agent activity",t,t,t,t,t,t,A.l(t,t,s?C.dC:B.c,t,t,t,t,t,t,t,t,16,t,t,B.F,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)
w=y.p
w=A.a([A.A(A.a([x,B.aY,A.c("newest first",t,t,t,t,t,t,A.l(t,t,s?C.dg:C.dh,t,t,t,t,t,t,t,t,11,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],w),B.l,t,B.e,B.h,0,t,t),B.ak],w)
if(u.e.length===0)w.push(new A.D(B.f8,A.c("Nothing yet. A new line appears with every 15-minute check.",t,t,t,t,t,t,A.l(t,t,s?C.dg:C.dh,t,t,t,t,t,t,t,t,12.5,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),t))
for(s=r.length,v=0;v<r.length;r.length===s||(0,A.I)(r),++v)w.push(u.c7h(d,r[v]))
if(u.e.length>8){if(u.x)s=u.w?"Show older":"That is everything"
else s="Show all"
w.push(A.at(A.bO(!1,A.c(s,t,t,t,t,t,t,t,t,t,t),t,t,!0,t,t,t,new D.eG0(u),t,t),t,t,t))}return u.a0K(d,A.x(w,B.B,t,B.e,B.h,0,B.p))},
c7h(d,e){var x,w,v,u,t,s=null,r="price",q=J.a2(e),p=q.h(e,"decision"),o=J.k(p==null?"":p)
A:{if("would buy"===o){p=C.dN
break A}if("would sell"===o){p=B.bB
break A}if("hold"===o){p=B.b2
break A}if("day start"===o||"day end"===o){p=B.ce
break A}if("start"===o){p=C.dN
break A}if("stop"===o){p=C.es
break A}if(J.z(q.h(e,"kind"),"error"))p=C.es
else p=d.a?C.dg:C.dh
break A}x=q.h(e,"fast_ma")!=null&&q.h(e,"slow_ma")!=null
w=A.p(s,s,B.f,s,s,new A.o(p,s,s,s,s,s,B.a6),s,8,s,G.a1x,s,s,s,8)
v=o==="hold"?"Still holding":D.hF1(o)
u=y.p
p=A.a([A.c(v,s,s,s,s,s,s,A.l(s,s,p,s,s,s,s,s,s,s,s,12.5,s,s,B.F,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],u)
if(J.z(D.fu(q.h(e,"details")).h(0,"by"),"cron"))B.d.u(p,A.a([B.bf,A.c("automatic",s,s,s,s,s,s,A.l(s,s,d.a?C.dg:C.dh,s,s,s,s,s,s,s,s,10,s,s,B.P,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],u))
p.push(B.aY)
v=q.h(e,"et_time")
v=D.io4(J.k(v==null?"":v))
t=d.a
p.push(A.c(v,s,s,s,s,s,s,A.l(s,s,t?C.dg:C.dh,s,s,s,s,s,s,s,s,10.5,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s))
p=A.A(p,B.l,s,B.e,B.h,0,s,s)
v=q.h(e,"reason")
v=D.hF1(J.k(v==null?"":v))
p=A.a([p,A.c(v,s,s,s,s,s,s,A.l(s,s,t?C.dC:B.c,s,s,s,s,s,s,s,s,12.5,s,s,s,s,1.3,!0,s,s,s,s,s,s,s,s),s,s,s)],u)
if(q.h(e,r)!=null||x){v=A.a([],y.s)
if(q.h(e,"asset")!=null&&q.h(e,r)!=null)v.push(A.v(q.h(e,"asset"))+" "+D.h1(D.ek(q.h(e,r)),!0,!1))
if(x)v.push("fast "+B.i.a9(D.ek(q.h(e,"fast_ma")),2)+" \xb7 slow "+B.i.a9(D.ek(q.h(e,"slow_ma")),2))
q=B.d.aL(v,"  \xb7  ")
p.push(A.c(q,s,s,s,s,s,s,A.l(s,s,t?C.dg:C.dh,s,s,s,s,s,s,s,s,10.5,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s))}return new A.D(X.HB,A.A(A.a([w,B.ar,A.E(A.x(p,B.B,s,B.e,B.h,0,B.p),1)],u),B.B,s,B.e,B.h,0,s,s),s)},
cxW(d,e){var x,w,v,u,t,s,r,q,p,o,n,m=null,l=this.c
l.toString
l=A.Q(l).bgm(B.L)
x=d.a
w=x?C.dC:B.c
v=x?C.dg:C.dh
u=A.W(C.bVQ,B.b2,m,m,m,m)
t=y.p
s=A.A(A.a([new A.d5(1,B.cg,A.c("The rules it follows",m,m,m,m,m,m,A.l(m,m,x?C.dC:B.c,m,m,m,m,m,m,m,m,14.5,m,m,B.F,m,m,!0,m,m,m,m,m,m,m,m),m,m,m),m),B.aa,A.aA(m,A.p(m,C.fod,B.f,m,m,new A.o(m,m,m,A.n(999),m,G.tM,B.m),m,m,m,m,B.hl,m,m,m),B.y,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,this.gclx(),m,m,m,m,m,m,!1,B.a4)],t),B.l,m,B.e,B.h,0,m,m)
r=A.c("Read-only, set in the code",m,m,m,m,m,m,A.l(m,m,x?C.dg:C.dh,m,m,m,m,m,m,m,m,11.5,m,m,m,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)
q=A.a([],t)
p=y.g.a(J.t(e,"rules"))
p=J.aT(p==null?B.c9:p)
while(p.C()){o=J.k(p.gP(p))
n=x?C.dC:B.c
q.push(new A.D(C.bEy,new A.c3(B.aL,B.e,B.h,B.B,m,B.p,m,0,A.a([C.eCV,B.aa,new A.bz(1,B.ba,A.c(o,m,m,m,m,m,m,new A.H(!0,n,m,m,m,m,12.5,m,m,m,m,m,1.35,m,m,m,m,m,m,m,m,m,m,m,m,m),m,m,m),m)],t),m),m))}return this.aAx(d,new A.pd(l,A.aG(!1,B.a3,!0,m,R.hu0(m,q,U.anQ,m,v,w,!1,u,m,r,B.hc,s),B.f,m,0,m,m,m,m,m,B.ie),m),B.ag)},
aAx(d,e,f){var x=null,w=d.a,v=w?B.c.j(0.92):C.kY,u=A.n(24)
return A.p(x,e,B.f,x,x,new A.o(v,x,A.K(w?B.c:C.uS,B.r,1),u,A.a([new A.aa(0,B.H,d.ga9A(),B.dp,24)],y.V),x,B.m),x,x,x,B.e9,f,x,x,x)},
a0K(d,e){return this.aAx(d,e,B.bQ)},
aaD(d,e,f){var x=null,w=f.j(0.12),v=A.n(16),u=A.K(f.j(0.45),B.r,1),t=A.W(B.a4m,f,x,x,x,20)
return A.p(x,A.A(A.a([t,B.ar,A.E(A.c(e,x,x,x,x,x,x,A.l(x,x,d.a?C.dC:B.c,x,x,x,x,x,x,x,x,12.5,x,x,x,x,1.35,!0,x,x,x,x,x,x,x,x),x,x,x),1)],y.p),B.l,x,B.e,B.h,0,x,x),B.f,x,x,new A.o(w,x,u,v,x,x,B.m),x,x,x,B.e9,B.bk,x,x,x)},
b37(d,e,f){var x=null,w=d.a,v=w?B.c.j(0.92):C.kY,u=A.K(w?B.c:C.uS,B.r,1)
return A.aG(!1,B.a3,!0,x,A.aM(!1,x,!0,A.p(x,A.W(e,w?C.dC:B.c,x,x,x,18),B.f,x,x,new A.o(x,x,u,x,x,x,B.a6),x,40,x,x,x,x,x,40),B.cK,!0,x,x,x,x,x,x,x,x,x,x,x,f,x,x,x,x,x,x,x),B.f,v,0,x,x,B.cK,x,x,B.ai)},
b8J(d,e,f,g,h){var x,w,v,u,t,s,r,q=null
if(f){x=d.a
w=x?C.l_:B.c
v=w
w=x
x=v}else{x=d.a
w=x?C.H3:C.GT
v=w
w=x
x=v}u=A.n(999)
t=y.p
s=A.a([],t)
if(h!=null){if(f)r=w?B.c:C.l_
else r=w?C.dg:C.dh
B.d.u(s,A.a([A.W(h,r,q,q,q,14),B.d8],t))}if(f)w=w?B.c:C.l_
else w=w?C.dg:C.dh
s.push(A.c(e,q,q,q,q,q,q,A.l(q,q,w,q,q,q,q,q,q,q,q,11.5,q,q,B.P,q,q,!0,q,q,q,q,q,q,q,q),q,q,q))
return A.aA(q,A.cT(q,A.A(s,B.l,q,B.e,B.M,0,q,q),q,q,B.b_,new A.o(x,q,q,u,q,q,B.m),B.eJ,q,q,q,q,Z.a1C,q,q,q),B.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,g,q,q,q,q,q,q,!1,B.a4)},
czZ(d,e,f,g){return this.b8J(d,e,f,g,null)},
aym(d,e,f){var x=null,w=A.p(x,x,B.f,x,x,new A.o(e,x,x,A.n(2),x,x,B.m),x,3,x,x,x,x,x,14)
return A.A(A.a([w,B.e6,A.c(f,x,x,x,x,x,x,A.l(x,x,d.a?C.dg:C.dh,x,x,x,x,x,x,x,x,11,x,x,x,x,x,!0,x,x,x,x,x,x,x,x),x,x,x)],y.p),B.l,x,B.e,B.M,0,x,x)},
a0M(d,e){var x=null,w=e.j(0.14),v=A.n(999)
return A.p(x,A.c(d,x,x,x,x,x,x,A.l(x,x,e,x,x,x,x,x,x,x,x,10,x,x,B.u,x,x,!0,x,0.6,x,x,x,x,x,x),x,x,x),B.f,x,x,new A.o(w,x,x,v,x,x,B.m),x,x,x,x,B.fD,x,x,x)},
aAA(d,e,f,g){var x=null,w=d.a,v=w?C.CF:C.CH,u=A.n(16),t=A.c(e,x,x,x,x,x,x,A.l(x,x,w?C.dg:C.dh,x,x,x,x,x,x,x,x,11.5,x,x,x,x,x,!0,x,x,x,x,x,x,x,x),x,x,x)
if(g==null)w=w?C.dC:B.c
else w=g
return A.p(x,A.x(A.a([t,B.cM,new A.dn(B.dx,B.a5,B.f,A.c(f,x,x,x,x,x,x,A.l(x,x,w,x,x,x,x,x,x,x,x,16,x,x,B.F,x,x,!0,x,x,x,x,x,x,x,x),x,x,x),x)],y.p),B.B,x,B.e,B.h,0,B.p),B.f,x,x,new A.o(v,x,x,u,x,x,B.m),x,x,x,x,B.bk,x,x,x)},
aAz(d,e,f){return this.aAA(d,e,f,null)},
cMj(d){var x=A.v(d==null?"":d),w=A.bi(x.length>=19?B.a.aw(x,0,19):"")
if(w==null)return""
return" \xb7 opens "+B.Td[A.lU(w)-1]+" "+D.aQJ(w)+" ET"}}
D.adH.prototype={
S(){return new D.bem()}}
D.bem.prototype={
aAy(d,e){var x=this,w=x.a.c.length,v=B.o.D(B.i.bc(d.a/e*w),0,w-1)
if(v!==x.d)x.l(new D.cWV(x,v))},
B(d){return A.cf(new D.cX3(this))}}
D.ben.prototype={
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
i.r=(q?C.qE:C.qB).j(0.7).gp(0)
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
a5=a0==null?0:a0}a6=a3>=a1?C.dN:E.jQ
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
b0=A.bx(new A.a3(k.$1(h)-w,b1,k.$1(h)+w,Math.max(b2,b1+1.5)),B.hD)
a8.b=B.Q
c9.aq(b0,a8)}if(u)c2.aUj(c9,j.$1(c7),c8,F.uG,"Buy "+D.h1(c7,!0,!1),!0)
if(r){c7=j.$1(s)
c2.bP3(c9,c7,c8,(q?C.dC:B.c).j(0.55),D.h1(s,!0,!1))}b3=A.h0(c3,B.cH,c3,c3,c3,c3,B.a7,B.cc,c3,B.e2,B.cd)
for(c7=[0,m/3|0,B.o.ap(2*m,3),m-1],w=c7.length,c5-=13,u=c2.b,v=0;v<w;++v){h=c7[v]
s=J.t(x[h],"t")
b4=A.bi(A.v(s==null?"":s))
if(b4==null)continue
s=D.aQJ(D.bFt(b4))
r=q?C.dg:C.dh
b3.sb1(0,new A.eD(s,c3,c3,B.cV,c3,c3,c3,c3,c3,c3,new A.H(!0,r,c3,u,c3,c3,10,c3,c3,c3,c3,c3,c3,c3,c3,c3,c3,c3,c3,c3,c3,c3,c3,c3,c3,c3)))
b3.eY()
s=k.$1(h)
r=b3.b.c
b3.a4(c9,new A.r(B.i.D(s-r/2,0,c8-r),c5))}if(d&&e<m){t=x[e]
f=k.$1(e)
c5=J.a2(t)
b5=j.$1(D.ek(c5.h(t,"c")))
$.T()
b6=A.L()
b6.r=(q?C.dC:B.c).j(0.5).gp(0)
b6.c=1
for(b7=0;b7<c6;b7+=6)c9.ah(new A.r(f,b7),new A.r(f,b7+3),b6)
$.T()
c7=A.L()
c7.r=(q?B.c.j(0.92):C.kY).gp(0)
c9.O(new A.r(f,b5),6,c7)
c7=A.L()
c7.r=(q?C.dC:B.c).gp(0)
c7.b=B.ac
c7.c=2.5
c9.O(new A.r(f,b5),6,c7)
c7=c5.h(t,"t")
b4=A.bi(A.v(c7==null?"":c7))
c7=b4==null?"":D.aQJ(D.bFt(b4))+" ET\n"
c5=D.h1(D.ek(c5.h(t,"c")),!0,!1)
b3.sb1(0,A.d1(c3,c3,c3,c3,c3,c3,c3,c3,c3,A.l(c3,c3,q?B.c:C.l_,c3,c3,c3,c3,c3,u,c3,c3,11.5,c3,c3,B.F,c3,1.3,!0,c3,c3,c3,c3,c3,c3,c3,c3),c7+c5))
b3.sDb(0,B.K)
b3.eY()
c5=b3.b
b8=c5.c+18
c5=c5.a.c
b9=c5.gb8(c5)+10
c0=B.i.D(f-b8/2,0,c8-b8)
c1=Math.max(0,b5-b9-14)
c8=A.bx(new A.a3(c0,c1,c0+b8,c1+b9),B.hS)
c5=A.L()
c5.r=(q?C.l_:B.c).gp(0)
c9.aq(c8,c5)
b3.a4(c9,new A.r(c0+9,c1+5))}},
aUj(d,e,f,g,h,i){var x,w,v,u,t,s,r,q,p,o,n=null
$.T()
x=A.L()
x.r=g.gp(0)
x.c=1.2
for(w=0;w<f;w+=7)d.ah(new A.r(w,e),new A.r(w+3.5,e),x)
v=A.h0(n,B.cH,n,n,n,A.d1(n,n,n,n,n,n,n,n,n,A.l(n,n,B.c,n,n,n,n,n,this.b,n,n,10,n,n,B.F,n,n,!0,n,n,n,n,n,n,n,n),h),B.a7,B.cc,n,B.e2,B.cd)
v.eY()
u=v.b
t=u.c+12
u=u.a.c
s=u.gb8(u)+6
r=i?0:f-t
u=e-s/2
q=A.bx(new A.a3(r,u,r+t,u+s),B.qb)
$.T()
p=A.L()
if(i)o=F.uG
else o=this.d.a?C.l_:B.c
p.r=o.gp(0)
d.aq(q,p)
v.a4(d,new A.r(r+6,u+3))},
bP3(d,e,f,g,h){return this.aUj(d,e,f,g,h,!1)},
aC(d){var x=this
return d.c!==x.c||d.w!=x.w||d.f!==x.f||d.e!=x.e||d.r!==x.r||d.d.a!==x.d.a}}
D.aKE.prototype={
a4(d,e){var x,w,v,u,t,s,r,q,p,o,n=null,m=this.b
if(m.length<2)return
x=A.U(m).k("O<1,G>")
w=A.B(new A.O(m,new D.fh_(),x),x.k("ak.E"))
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
ga9A(){return this.a?B.ce.j(0.08):B.v.j(0.35)}}
D.aCv.prototype={
S(){return new D.bhT()}}
D.bhT.prototype={
a_(){this.a3()
this.d=A.d2(B.fB,new D.die(this))},
t(){var x=this.d
if(x!=null)x.a1(0)
this.a2()},
B(d){var x=null,w=this.a.c*60,v=B.o.F(B.o.ap(new A.V(Date.now(),0,!1).ab().a,1000),w),u=v<15,t=w-v,s=u?"ENTER NOW":"Enter in "+B.o.ap(t,60)+":"+B.a.b0(B.o.v(B.o.F(t,60)),2,"0"),r=u?B.c:B.c.j(0.18),q=A.n(999),p=u?B.he:B.ne
p=A.W(p,u?B.v:B.c,x,x,x,20)
return A.cT(x,A.A(A.a([p,B.bf,A.c(s,x,x,x,x,x,x,A.l(x,x,u?B.v:B.c,x,x,x,x,x,x,x,H.Ji,22,x,x,B.u,x,x,!0,x,x,x,x,x,x,x,x),x,x,x)],y.p),B.l,x,B.e,B.M,0,x,x),x,x,B.b_,new A.o(r,x,x,q,x,x,B.m),B.i9,x,x,x,x,B.HO,x,x,x)}}
D.cC.prototype={}
D.uv.prototype={}
D.XF.prototype={
S(){var x,w,v,u,t=null,s=y.N,r=y.z
r=A.J(["done",A.a([],y.s),"lessons",A.S(s,r)],s,r)
x=$.hke
w=$.az()
v=A.mj(0,t,t)
u=A.a([],y.t)
return new D.aHl(r,new A.au(new A.bd(x,B.b6,B.aP),w),v,u,new A.au(B.ax,w),A.S(s,s),A.S(s,y.R),B.Z,t,t)}}
D.a_A.prototype={}
D.aHl.prototype={
gLf(){var x,w=this,v=w.d
if(v===$){w.a.toString
x=A.acv(null,0,3,w)
w.d!==$&&A.bF()
w.d=x
v=x}return v},
gJZ(){var x=y.g.a(this.x.h(0,"done"))
if(x==null)x=B.c9
return J.b8(x,new D.eGQ(),y.N).fC(0)},
a_(){var x,w,v,u=this
u.a3()
x=u.e=u.a.c
w=x==null
u.y=!w
u.ay=D.eHC(w?null:J.t(x,"fx"))
x=u.a.c
v=D.eHC(x==null?null:J.t(x,"markets"))
if(v.length!==0)u.f=v
u.r=new A.V(Date.now(),0,!1)
u.gLf().aU(0,new D.eHI(u))
$.aLY=$.aLY+1
u.at.aU(0,new D.eHJ(u))
if($.DB.length!==0||$.ah9)u.aCU()
if(!u.a.d){u.a0L()
u.Rc()
A.SZ().bE(new D.eHK(u),y.H)
u.w=A.d2(B.hb,new D.eHL(u))}},
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
D.hE0()
w.bBt()},
a0L(){return this.c74()},
c74(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g
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
return A.b(A.h2(A.J(["action","paLearnGet"],o,n),!1,!1,!1,!1,B.hb),$async$a0L)
case 8:l=e
if(s.c==null){x=1
break}k=l==null?null:J.t(l,"progress")
j=y.f
if(j.b(k)){l.toString
i=A.a1(j.a(J.t(l,"progress")),o,n)}else i=null
s.l(new D.eHa(h,s,l,i))
if(i==null&&h.a!=null)s.aCK()
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a0L,w)},
aCK(){var x=this.as
if(x!=null)x.a1(0)
this.as=A.cy(P.CY,new D.eHl(this))},
ae8(d){return this.c6b(d)},
c6b(d){var x=0,w=A.j(y.H),v=this,u,t,s
var $async$ae8=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=B.d.cw(C.Eg,new D.eGT(v))
v.l(new D.eGU(v,d))
v.aCK()
u=B.d.cw(C.Eg,new D.eGV(v))
x=!s&&u&&v.c!=null?2:3
break
case 2:t=v.c
t.toString
x=4
return A.b(A.ce(null,null,!0,null,new D.eGW(v),t,null,!0,!0,y.H),$async$ae8)
case 4:case 3:return A.h(null,w)}})
return A.i($async$ae8,w)},
Rc(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$Rc=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(A.h2(A.J(["action","paSignals"],y.N,y.z),!1,!1,!1,!1,B.CU),$async$Rc)
case 3:s=e
if(u.c==null||s==null||!J.z(J.t(s,"ok"),!0)){x=1
break}t=J.a2(s)
u.l(new D.eHk(u,D.eHC(t.h(s,"fx")),D.eHC(t.h(s,"markets")),s))
u.ch8()
case 1:return A.h(v,w)}})
return A.i($async$Rc,w)},
ch8(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g="decision",f=A.a([],y.s)
for(x=i.gaak(),w=x.length,v=i.db,u=y.N,t=y.z,s=y.f,r=i.dx,q=0;q<x.length;x.length===w||(0,A.I)(x),++q){p=x[q]
o=J.a2(p)
n=J.k(o.h(p,"asset"))
o=o.h(p,"reading")
m=s.b(o)?A.a1(o,u,t):A.S(u,t)
l=B.d.q(C.aCd,m.h(0,g))
if(m.h(0,g)==null||J.z(m.h(0,g),"NO_DATA")||J.z(m.h(0,g),"CLOSED"))k="unknown"
else if(l){o=J.z(m.h(0,"dir"),"up")?"up":"down"
k=o}else k="no direction"
j=v.h(0,n)
if(j!=null&&j!==k&&k!=="unknown"&&j!=="unknown"){r.n(0,n,new A.bsY(new A.V(Date.now(),0,!1),j,k))
f.push(n+" now "+k.toUpperCase())}v.n(0,n,k)}r.bq(r,new D.eHb())
if(f.length!==0&&i.c!=null){i.l(new D.eHc())
x=i.c.L(y.q).f
u=A.cS(f,0,A.dA(3,"count",y.S),u).aL(0," \xb7 ")
w=f.length
w=w>3?" and "+(w-3)+" more":""
x.T(A.b2(h,h,h,B.i0,h,B.t,h,A.c("Signal changed: "+u+w,h,h,h,h,h,h,h,h,h,h),h,B.lw,h,h,h,h,h,h,h,h,h,h))}},
gaak(){var x=A.B(this.gyB(),y.P)
B.d.u(x,this.ay)
return x},
gyB(){var x=this.f
if(x==null){x=this.e
x=D.fAZ(D.fu(D.fu(x==null?null:J.t(x,"state")).h(0,"snapshot")))}return x},
gcEg(){var x=this.gyB(),w=A.U(x).k("X<1>"),v=A.B(new A.X(x,new D.eHA(),w),w.k("M.E"))
if(v.length===0)return this.gyB().length===0?null:B.d.gH(this.gyB())
B.d.b_(v,new D.eHB())
return B.d.gH(v)},
c6I(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null,d=" dollars. It sells at +50 or -50 dollars.",a0=f.e,a1=D.fu(a0==null?e:J.t(a0,"state"))
a0=y.f
x=a0.b(a1.h(0,"shadow"))?D.fu(a1.h(0,"shadow")):e
w=f.e
v=D.fu(w==null?e:J.t(w,"today"))
w=f.e
u=D.fu(w==null?e:J.t(w,"record"))
w=f.fr
if(!(w.length!==0)){w=f.e
w=w==null?e:J.t(w,"nowEt")
if(w==null)w="unknown"}w="LIVE DATA from the NGMY paper trading agent (Eastern Time now: "+A.v(w)+"):\n"
if(f.e!=null){t=J.z(a1.h(0,"enabled"),!0)?"running":"stopped"
s=J.z(a1.h(0,"brakePaused"),!0)?", paused by the 25 dollar brake":""
r=D.h1(D.ek(a1.h(0,"totalPnl")),!0,!0)
q=D.h1(D.ek(v.h(0,"day_pnl")),!0,!0)
p=u.h(0,"wins")
p=A.v(p==null?0:p)
o=u.h(0,"losses")
w+="Agent: "+t+s+". Pretend P/L all time "+r+", today "+q+", wins "+p+", losses "+A.v(o==null?0:o)+".\n"}if(f.e==null)a0=w
else if(x!=null){n=D.ek(J.t(B.d.dC(f.gyB(),new D.eGZ(x),new D.eH_()),"price"))
m=D.ek(x.h(0,"entryPrice"))
l=a0.b(x.h(0,"option"))?D.fu(x.h(0,"option")):e
a0=f.e
k=D.fu(D.fu(D.fu(a0==null?e:J.t(a0,"state")).h(0,"snapshot")).h(0,"held"))
j=k.h(0,"pnl")==null?e:D.ek(k.h(0,"pnl"))
i=j==null?"unknown":B.i.a9(j,2)
a0=w+((l!=null?"Open pretend trade: 1 SPY call option, strike "+B.i.a9(D.ek(l.h(0,"strike")),0)+", expires "+A.v(l.h(0,"expiry"))+", premium paid "+B.i.a9(m,2)+" a share ("+B.i.a9(D.ek(l.h(0,"cost")),2)+" dollars). Win or loss now: "+i+d:"Open pretend trade: "+A.v(x.h(0,"symbol"))+", bought at "+B.i.a9(m,2)+", now "+B.i.a9(n,2)+". Win or loss now: "+i+d)+"\n")}else a0=w+"No open pretend trade.\n"
h=new D.eH0()
a0+="Agent markets (5-minute candles; fast line = 9-candle average, slow = 21-candle average; strength 0 bearish to 100 bullish):\n"
for(w=f.gyB(),t=w.length,g=0;g<w.length;w.length===t||(0,A.I)(w),++g)a0+=A.v(h.$1(w[g]))+"\n"
w=f.ay
t=w.length
if(t!==0){a0+="Forex pairs (real interbank prices, 1-minute candles, signals only; the agent does not trade them; OTC prices at brokers differ):\n"
for(g=0;g<w.length;w.length===t||(0,A.I)(w),++g)a0+=A.v(h.$1(w[g]))+"\n"}return a0.charCodeAt(0)==0?a0:a0},
JY(d){return this.bHo(d)},
bHo(d){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o,n,m,l,k
var $async$JY=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:k=B.a.i(d)
if(k.length===0||$.ah9){x=1
break}u.at.bN(0,B.ci)
u.l(new D.eGM(u,k))
u.aCU()
t=$.DB.length
if(t>1){t=B.d.dt($.DB,Math.max(0,t-9),t-1)
s=new A.O(t,new D.eGN(),A.U(t).k("O<1,m>")).aL(0,"\n")}else s=""
t=u.e
t=t==null?null:J.t(t,"rules")
y.g.a(t)
if(t==null)t=u.dy
r=y.N
q=J.b8(t,new D.eGO(),r).aL(0,"\n")
t=u.c6I()
p=s.length===0?"":"\nCONVERSATION SO FAR:\n"+s+"\n"
o=$.fnw
x=u.a.d?3:5
break
case 3:n="Preview mode: the tutor answers here using the live readings."
x=4
break
case 5:x=6
return A.b(A.h2(A.J(["action","chat","prompt",'You are the NGMY Signal Grid trading tutor. You teach a complete beginner how trading works, using the live market data and the rules of the NGMY paper trading agent below.\nHow to answer:\n- Plain, friendly, simple English. Short sentences. No jargon without explaining it. Usually under 170 words.\n- When the question is about a market or "right now", use the LIVE DATA and quote the real numbers (price, trend, strength, RSI, last hour), then explain what they mean and what the agent\'s rules say.\n- Say clearly whether a market looks bullish, bearish or sideways and why, and what would need to happen for a buy or sell signal under the agent\'s rules.\n- This is practice with pretend (paper) money. You may explain what the rules signal, but never promise profit, never say a price will surely go up or down, and never tell the student to trade real or borrowed money. Remind them briefly when it fits that signals can fail and the stop loss keeps losses small.\n- No markdown headings or tables. You may use short lines starting with "- ".\n\nAGENT RULES:\n'+q+"\n\n"+t+"\n"+p+"\nStudent: "+k+"\nTutor:"],r,y.z),!1,!1,!1,!1,B.nT),$async$JY)
case 6:m=f
t=m==null
if(t)l=null
else{r=J.t(m,"text")
r=r==null?null:B.a.i(J.k(r))
l=r}if(l==null)l=""
if(l.length!==0){t=A.aL(l,"**","")
r=A.ag("^#+\\s*",!0,!1,!0,!1)
n=A.aL(t,r,"")}else{t=t?null:J.t(m,"error")
n=J.k(t==null?"The tutor could not answer just now. Please try again.":t)}case 4:if(o!==$.fnw){x=1
break}$.DB.push(new D.a_A(!1,n))
$.ah9=!1
if(u.c==null){x=1
break}u.l(new D.eGP())
u.aCU()
case 1:return A.h(v,w)}})
return A.i($async$JY,w)},
aCU(){$.aU.U$.push(new D.eHm(this))},
aQX(d){this.gLf().C1(2)
this.JY(d)},
B(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=A.Q(d).ax.a===B.dd,g=new D.a1x(h),f=h?C.yK:C.yI,e=h?C.yK:C.yI
e=A.a([e,h?C.a_A:C.a_q],y.O)
x=j.b36(g,B.eH,new D.eHE(d))
w=A.c("Trading Academy",i,i,i,i,i,i,A.l(i,i,h?C.dC:B.c,i,i,i,i,i,i,i,i,17,i,i,B.F,i,i,!0,i,i,i,i,i,i,i,i),i,i,i)
v=y.p
w=A.A(A.a([x,B.ar,A.E(A.x(A.a([w,A.c("Lessons, live signals and a tutor",i,i,i,i,i,i,A.l(i,i,h?C.dg:C.dh,i,i,i,i,i,i,i,i,11.5,i,i,i,i,i,!0,i,i,i,i,i,i,i,i),i,i,i)],v),B.B,i,B.e,B.h,0,B.p),1),A.p(i,C.foa,B.f,i,i,new A.o(C.dN.j(0.14),i,i,A.n(999),i,i,B.m),i,i,i,i,B.fM,i,i,i)],v),B.l,i,B.e,B.h,0,i,i)
x=h?C.H3:C.GT
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
else k=h?C.dg:C.dh
k=A.W(o.c,k,i,i,i,15)
if(n)n=h?B.c:C.l_
else n=h?C.dg:C.dh
t.push(new A.bz(1,B.ba,A.aA(i,A.cT(i,new A.c3(B.aL,B.b9,B.h,B.l,i,B.p,i,0,A.a([k,B.e6,new A.d5(1,B.cg,A.c(o.b,i,i,B.a2,i,i,i,new A.H(!0,n,i,i,i,i,12.5,B.F,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i),i,i,i),i)],v),i),i,i,B.b_,new A.o(m,i,i,new A.bc(l,l,l,l),i,i,B.m),B.a3,i,i,i,i,B.wU,i,i,i),B.y,!1,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,new D.eHF(p,j),i,i,i,i,i,i,!1,B.a4),i))}h=A.p(i,A.A(t,B.l,i,B.e,B.h,0,i,i),B.f,i,i,new A.o(x,i,i,u,i,i,B.m),i,i,i,i,B.eu,i,i,i)
x=j.gLf()
return A.c5(i,f,A.p(i,A.bo(!0,A.x(A.a([new A.D(C.bGa,w,i),new A.D(B.ao8,h,i),A.E(A.baA(A.a([j.c6f(g),j.cDl(g),j.bHu(g)],v),x,i),1)],v),B.l,i,B.e,B.h,0,B.p),!0,!1,B.ag,!0,!0),B.f,i,i,new A.o(i,i,i,i,i,new A.a7(B.aX,B.b1,B.x,e,i,i),B.m),i,i,i,i,i,i,i,i),i,!1,!1,i,i)},
b36(d,e,f){var x=null,w=d.a,v=w?B.c.j(0.92):C.kY,u=A.K(w?B.c:C.uS,B.r,1)
return A.aG(!1,B.a3,!0,x,A.aM(!1,x,!0,A.p(x,A.W(e,w?C.dC:B.c,x,x,x,18),B.f,x,x,new A.o(x,x,u,x,x,x,B.a6),x,40,x,x,x,x,x,40),B.cK,!0,x,x,x,x,x,x,x,x,x,x,x,f,x,x,x,x,x,x,x),B.f,v,0,x,x,B.cK,x,x,B.ai)},
c6f(d){var x,w=null,v=new A.X(C.Eg,new D.eGY(this),y.E).gJ(0),u=A.n(24),t=y.p
t=A.a([A.p(w,A.x(A.a([C.heI,B.at,C.fWl,B.aA,A.bw(A.n(9),A.jD(B.c.j(0.18),w,w,8,w,v/10,B.afe),B.aq),B.ak,A.c(""+v+" of 10 lessons done",w,w,w,w,w,w,B.acF,w,w,w)],t),B.B,w,B.e,B.h,0,B.p),B.f,w,w,new A.o(w,w,w,u,w,C.cef,B.m),w,w,w,w,B.fc,w,w,w),B.aA],t)
for(x=0;x<10;++x)t.push(this.c6d(d,x))
t.push(B.ak)
t.push(A.c("Practice with pretend money. Signals and lessons are for learning; markets can always surprise.",w,w,w,w,w,w,A.l(w,w,d.a?C.dg:C.dh,w,w,w,w,w,w,w,w,11,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),B.K,w,w))
return A.cp(t,w,w,C.aoc,w,w,B.ah,!1)},
c6d(d,e){var x,w,v,u=null,t=C.Eg[e],s=this.gJZ().q(0,t.a),r=d.a,q=r?B.c.j(0.92):C.kY,p=A.n(20),o=A.K(r?B.c:C.uS,B.r,1),n=A.a([new A.aa(0,B.H,d.ga9A(),B.hR,14)],y.V),m=A.n(15)
m=A.p(u,A.W(t.e,B.c,u,u,u,u),B.f,u,u,new A.o(t.f,u,u,m,u,u,B.m),u,46,u,u,u,u,u,46)
x=A.c("Lesson "+(e+1)+" \xb7 "+t.d+" min",u,u,u,u,u,u,A.l(u,u,r?C.dg:C.dh,u,u,u,u,u,u,u,u,11,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)
w=A.c(t.b,u,u,u,u,u,u,A.l(u,u,r?C.dC:B.c,u,u,u,u,u,u,u,u,15,u,u,B.F,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)
v=y.p
w=A.E(A.x(A.a([x,w,A.c(t.c,u,u,u,u,u,u,A.l(u,u,r?C.dg:C.dh,u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],v),B.B,u,B.e,B.h,0,B.p),1)
x=s?B.ea:B.eM
if(s)r=C.dN
else r=r?C.dg:C.dh
return A.aA(u,A.p(u,A.A(A.a([m,B.bb,w,A.W(x,r,u,u,u,u)],v),B.l,u,B.e,B.h,0,u,u),B.f,u,u,new A.o(q,u,o,p,n,u,B.m),u,u,u,B.d4,B.bH,u,u,u),B.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new D.eGX(this,t),u,u,u,u,u,u,!1,B.a4)},
clz(d){var x=this.c
x.toString
A.a8(x,!1).cc(A.ec(new D.eHi(this,d),!1,null,y.H))},
c6M(c0,c1){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5=this,b6=null,b7="reading",b8="rsi",b9=b5.gcEg()
if(b9==null)return A.c("Live example appears once the markets have loaded.",b6,b6,b6,b6,b6,b6,A.l(b6,b6,c0.a?C.dg:C.dh,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,!0,b6,b6,b6,b6,b6,b6,b6,b6),b6,b6,b6)
x=J.a2(b9)
w=J.k(x.h(b9,"asset"))
v=D.aRu(b9)
u=D.fu(x.h(b9,b7))
t=D.ek(x.h(b9,"price"))
s=new D.eH1(v,c0,t)
r=new D.eH9(c0)
switch(c1){case"basics":q=v.length!==0?D.ek(J.t(B.d.gH(v),"c")):t
p=q===0?100:100*t/q
x=r.$1("Right now "+w+" is "+D.h1(t,!0,!1)+". About 4 hours ago it was "+D.h1(q,!0,!1)+".")
o=D.h1(p,!0,!1)
n=p>=100?"a win of":"a loss of"
return A.x(A.a([x,B.O,r.$1("If you had put $100 into "+w+" then, it would be worth "+o+" now: "+n+" "+D.h1(Math.abs(p-100),!0,!1)+". That difference is your profit or loss.")],y.p),B.B,b6,B.e,B.h,0,B.p)
case"candles":m=v.length!==0?B.d.gal(v):A.S(y.N,y.z)
x=J.a2(m)
o=D.ek(x.h(m,"c"))
n=D.ek(x.h(m,"o"))
l=s.$2$last$lines(24,!1)
k=D.h1(D.ek(x.h(m,"o")),!0,!1)
j=D.h1(D.ek(x.h(m,"c")),!0,!1)
o=o>=n?"GREEN: buyers won those 5 minutes":"YELLOW: sellers won those 5 minutes"
return A.x(A.a([l,B.O,r.$1("The last finished "+w+" candle opened at "+k+" and closed at "+j+", so it is "+o+". Its high was "+D.h1(D.ek(x.h(m,"h")),!0,!1)+" and its low "+D.h1(D.ek(x.h(m,"l")),!0,!1)+".")],y.p),B.B,b6,B.e,B.h,0,B.p)
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
case"ma":f=D.ek(x.h(b9,"fast"))
e=D.ek(x.h(b9,"slow"))
x=s.$0()
o=D.h1(f,!0,!1)
n=D.h1(e,!0,!1)
l=f>=e
k=l?"ABOVE":"BELOW"
l=l?"UP":"DOWN"
return A.x(A.a([x,B.O,r.$1("On "+w+" the pink fast line is at "+o+" and the purple slow line at "+n+". The fast line is "+k+" the slow line, so the short-term trend is "+l+".")],y.p),B.B,b6,B.e,B.h,0,B.p)
case"cross":x=b5.gyB()
o=A.U(x)
n=o.k("cM<1,@>")
d=A.B(new A.cM(new A.X(x,new D.eH2(),o.k("X<1>")),new D.eH3(),n),n.k("M.E"))
x=b5.gyB()
o=A.U(x)
n=o.k("cM<1,@>")
a0=A.B(new A.cM(new A.X(x,new D.eH4(),o.k("X<1>")),new D.eH5(),n),n.k("M.E"))
x=s.$0()
if(d.length!==0)o="Fresh BUY crosses right now: "+B.d.aL(d,", ")+". On its next automatic check the agent would buy if it holds nothing and it is the market traded today."
else o="No fresh buy cross in any open market right now. "+(a0.length!==0?"Fresh sell crosses: "+B.d.aL(a0,", ")+". ":"")+"The agent simply waits; no signal means no trade."
return A.x(A.a([x,B.O,r.$1(o)],y.p),B.B,b6,B.e,B.h,0,B.p)
case"rsi":x=b5.gyB()
o=A.U(x).k("X<1>")
a1=A.B(new A.X(x,new D.eH6(),o),o.k("M.E"))
x=y.p
o=A.a([],x)
for(n=a1.length,l=c0.a,k=y.N,j=y.z,a2=y.f,a3=y.c,h=0;h<a1.length;a1.length===n||(0,A.I)(a1),++h){a4=a1[h]
a5=J.a2(a4)
a6=J.k(a5.h(a4,"asset"))
a7=l?C.dC:B.c
a6=A.c(a6,b6,b6,b6,b6,b6,b6,new A.H(!0,a7,b6,b6,b6,b6,12,B.F,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6),b6,b6,b6)
a7=new A.aP(9,9)
a8=a5.h(a4,b7)
a8=(a2.b(a8)?A.a1(a8,k,j):A.S(k,j)).h(0,b8)
if(!(typeof a8=="number")){a8=A.cE(A.v(a8==null?"":a8))
if(a8==null)a8=0}a9=l?C.H3:C.GT
b0=a5.h(a4,b7)
b0=(a2.b(b0)?A.a1(b0,k,j):A.S(k,j)).h(0,b8)
if(!(typeof b0=="number")){b0=A.cE(A.v(b0==null?"":b0))
if(b0==null)b0=0}if(b0>=70)b0=C.es
else{b0=a5.h(a4,b7)
b0=(a2.b(b0)?A.a1(b0,k,j):A.S(k,j)).h(0,b8)
if(!(typeof b0=="number")){b0=A.cE(A.v(b0==null?"":b0))
if(b0==null)b0=0}b0=b0<=30?B.cC:C.dN}b0=A.jD(a9,b6,b6,8,b6,a8/100,new A.kS(b0,a3))
a5=a5.h(a4,b7)
a5=(a2.b(a5)?A.a1(a5,k,j):A.S(k,j)).h(0,b8)
if(!(typeof a5=="number")){a5=A.cE(A.v(a5==null?"":a5))
if(a5==null)a5=0}a5=B.i.a9(a5,0)
a8=l?C.dC:B.c
o.push(new A.D(B.cx,new A.c3(B.aL,B.e,B.h,B.l,b6,B.p,b6,0,A.a([new A.a6(70,b6,a6,b6),new A.bz(1,B.ba,new A.nh(new A.bc(a7,a7,a7,a7),B.aq,b0,b6),b6),B.aa,new A.a6(26,b6,A.c(a5,b6,b6,b6,b6,b6,b6,new A.H(!0,a8,b6,b6,b6,b6,12,B.F,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6),b6,b6,b6),b6)],x),b6),b6))}o.push(r.$1("Red bars are above 70 (stretched), blue below 30 (oversold), green in between (healthy)."))
return A.x(o,B.B,b6,B.e,B.h,0,B.p)
case"risk":return A.x(A.a([r.$1("Every agent trade is about $100 (one SPY call option on weekdays, Bitcoin on weekends). "+w+" is "+D.h1(t,!0,!1)+" right now."),B.ak,r.$1("- Take profit: it sells when the trade is up $50"),r.$1("- Stop loss: it sells when the trade is down $50"),B.ak,r.$1("Win 5 and lose 5 of 10 trades: 5 x 50 - 5 x 50 = $0.00. That is break even. Win 6 of 10 and you are up $100.")],y.p),B.B,b6,B.e,B.h,0,B.p)
case"brakes":x=b5.e
if(x==null)return r.$1('Try it yourself: before your next practice day, write down "I stop after losing $50 today". If three trades in a row lose, close the app and come back tomorrow. That is exactly what the agent does.')
b1=D.fu(J.t(x,"state"))
x=b5.e
x=D.h1(D.ek(D.fu(x==null?b6:J.t(x,"today")).h(0,"day_pnl")),!0,!0)
o=D.h1(D.ek(b1.h(0,"totalPnl")),!0,!0)
n=J.z(b1.h(0,"brakePaused"),!0)?"The brake is ON right now.":"Both brakes are off, it can keep trading."
return r.$1("Today the agent is at "+x+" (the daily stop is -$50) and "+o+" all time (the brake is -$100)."+n)
case"hours":if(b5.f!=null)b2=b5.fx
else{x=b5.e
b2=J.z(D.fu(x==null?b6:J.t(x,"market")).h(0,"stockOpen"),!0)}b3=B.d.aR(b5.ay,new D.eH7())
x=b2?"OPEN":"CLOSED"
o=b3?"OPEN":"CLOSED"
return r.$1("Right now the US stock market is "+x+", the forex market is "+o+", and crypto is open, as always.")
case"practice":x=b5.e
if(x==null){x=b5.gaak()
return r.$1("Right now "+new A.X(x,new D.eH8(),A.U(x).k("X<1>")).gJ(0)+" of "+b5.gaak().length+" markets have signals that worked at least half the time lately. That is why a journal and many trades matter: some markets suit a method, others do not.")}b4=D.fu(J.t(x,"record"))
x=b4.h(0,"trades")
x=A.v(x==null?0:x)
o=b4.h(0,"wins")
o=A.v(o==null?0:o)
n=b4.h(0,"losses")
return r.$1("The agent journal so far: "+x+" finished pretend trades, "+o+" wins and "+A.v(n==null?0:n)+" losses. Keep watching until there are at least 20 before judging it.")}return B.bL},
cDl(a5){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,a0="asset",a1=B.a.i(e.ch),a2=e.gaak(),a3=A.U(a2).k("X<1>"),a4=A.B(new A.X(a2,new D.eHq(e,a1.toLowerCase()),a3),a3.k("M.E"))
B.d.b_(a4,new D.eHr(e))
x=new D.eHz()
a1=A.U(a4).k("X<1>")
w=new A.X(a4,new D.eHs(x),a1).gJ(0)
v=new A.X(a4,new D.eHt(x),a1).gJ(0)
a1=a4.length
if(e.r==null)u=0
else{t=Date.now()
s=e.r
s.toString
u=B.o.ap(new A.V(t,0,!1).by(s).a,1e6)}if(u<20)r="just now"
else r=u<60?""+u+" s ago":""+B.o.ap(u,60)+" min ago"
t=y.p
s=A.a([],t)
for(q=a5.a,p=0;p<4;++p){o=C.d6i[p]
if(e.cx===o)n=q?C.l_:B.c
else n=q?B.c.j(0.92):C.kY
m=new A.aP(999,999)
l=new A.ax(q?C.qE:C.qB,1,B.r,-1)
k=o==="All"?"All "+a2.length:o+" "+new A.X(a2,new D.eHu(o),a3).gJ(0)
if(e.cx===o)j=q?B.c:C.l_
else j=q?C.dC:B.c
B.d.u(s,A.a([A.aA(d,A.p(d,A.c(k,d,d,d,d,d,d,new A.H(!0,j,d,d,d,d,12,B.F,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d),d,d,d),B.f,d,d,new A.o(n,d,new A.bE(l,l,l,l),new A.bc(m,m,m,m),d,d,B.m),d,d,d,d,C.bGk,d,d,d),B.y,!1,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,new D.eHv(e,o),d,d,d,d,d,d,!1,B.a4),B.bf],t))}a3=A.E(A.cb(A.A(s,B.l,d,B.e,B.h,0,d,d),B.t,d,B.y,d,d,d,d,d,B.aL),1)
s=e.CW?B.cz:B.eN
s=A.a([A.A(A.a([a3,B.bf,e.b36(a5,s,new D.eHw(e))],t),B.l,d,B.e,B.h,0,d,d)],t)
if(e.CW){a3=A.l(d,d,q?C.dC:B.c,d,d,d,d,d,d,d,d,d,d,d,d,d,d,!0,d,d,d,d,d,d,d,d)
n=A.l(d,d,q?C.dg:C.dh,d,d,d,d,d,d,d,d,13,d,d,d,d,d,!0,d,d,d,d,d,d,d,d)
m=A.W(B.eN,q?C.dg:C.dh,d,d,d,d)
k=q?B.c.j(0.92):C.kY
j=A.n(999)
i=q?C.qE:C.qB
h=A.n(999)
g=q?C.qE:C.qB
B.d.u(s,A.a([B.S,A.aN(d,B.Z,!0,d,!0,B.t,d,A.aO(),e.cy,d,d,d,d,d,2,A.bC(d,new A.b6(4,j,new A.ax(i,1,B.r,-1)),d,B.f8,d,d,d,d,!0,new A.b6(4,h,new A.ax(g,1,B.r,-1)),d,d,d,d,d,k,!0,d,d,d,d,d,d,d,d,d,d,d,d,d,n,"Search a market, for example EUR/USD, GBP or Bitcoin",d,d,d,d,d,d,d,d,d,!0,!0,!1,d,m,d,d,d,d,d,d,d,d,d,d,d,d),B.y,!0,d,!0,d,!1,d,B.al,d,d,d,d,d,d,d,d,d,1,d,d,!1,"\u2022",d,new D.eHx(e),d,d,d,!1,d,d,!1,d,!0,d,B.ae,d,d,d,d,d,d,d,d,d,d,d,a3,!0,B.a7,d,B.ao,d,d,d,d)],t))}s.push(B.af)
s.push(e.bG8(a5))
s.push(A.A(A.a([A.E(e.av1(a5,"Going up",w,C.dN,B.nf),1),B.aa,A.E(e.av1(a5,"Going down",v,C.es,B.a4O),1),B.aa,A.E(e.av1(a5,"No direction",a1-w-v,E.jQ,C.asv),1)],t),B.l,d,B.e,B.h,0,d,d))
s.push(B.O)
s.push(A.A(A.a([C.c_V,B.e6,new A.d5(1,B.cg,A.c("Live \xb7 updated "+r+" \xb7 checks every 20 seconds, changes are flagged at once",d,d,d,d,d,d,A.l(d,d,q?C.dg:C.dh,d,d,d,d,d,d,d,d,11,d,d,d,d,d,!0,d,d,d,d,d,d,d,d),B.K,d,d),d)],t),B.l,d,B.b9,B.h,0,d,d))
a1=e.cx
if(a1==="All"||a1==="Forex"){a1=E.jQ.j(0.12)
a3=A.n(16)
n=A.K(E.jQ.j(0.45),B.r,1)
B.d.u(s,A.a([B.S,A.p(d,A.c('Forex uses real market prices on 1-minute candles. OTC pairs at a broker are priced by that broker (always on weekends) and can move differently, and the payout % is the broker\'s. "Worked" shows how often past moves on this pair really went that way: under 50% means the signal has been worse than a coin flip, so do not trust it.',d,d,d,d,d,d,A.l(d,d,q?C.dC:B.c,d,d,d,d,d,d,d,d,11.8,d,d,d,d,1.35,!0,d,d,d,d,d,d,d,d),d,d,d),B.f,d,d,new A.o(a1,d,n,a3,d,d,B.m),d,d,d,d,B.bk,d,d,d)],t))}s.push(B.af)
if(a2.length===0)s.push(A.c("Loading the markets...",d,d,d,d,d,d,A.l(d,d,q?C.dg:C.dh,d,d,d,d,d,d,d,d,d,d,d,d,d,d,!0,d,d,d,d,d,d,d,d),d,d,d))
if(a2.length!==0&&a4.length===0){a1=e.ch
s.push(A.at(A.c('No market matches "'+a1+'".',d,d,d,d,d,d,A.l(d,d,q?C.dg:C.dh,d,d,d,d,d,d,d,d,d,d,d,d,d,d,!0,d,d,d,d,d,d,d,d),d,d,d),d,d,d))}for(a1=a4.length,a3=e.dx,p=0;p<a4.length;a4.length===a1||(0,A.I)(a4),++p){f=a4[p]
t=J.a2(f)
if(a3.h(0,t.h(f,a0))==null)t=d
else t=a3.h(0,t.h(f,a0)).c==="no direction"?"JUST LOST ITS DIRECTION":"JUST TURNED "+a3.h(0,t.h(f,a0)).c.toUpperCase()
s.push(D.hIy(a5,f,t,!1,new D.eHy(e,f)))}s.push(A.c("Signals are estimates from recent price history. They can fail; never risk money you cannot afford to lose.",d,d,d,d,d,d,A.l(d,d,q?C.dg:C.dh,d,d,d,d,d,d,d,d,11,d,d,d,d,d,!0,d,d,d,d,d,d,d,d),B.K,d,d))
return A.PN(A.cp(s,d,d,C.aoc,d,d,B.ah,!1),d,e.gcgc())},
bG8(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=new A.X(C.Eg,new D.eGI(i),y.E).gJ(0),f=i.z||i.y
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
l=A.a([l,B.ar,A.E(A.c(t,h,h,h,h,h,h,A.l(h,h,d.a?C.dC:B.c,h,h,h,h,h,h,h,h,12,h,h,h,h,1.35,!0,h,h,h,h,h,h,h,h),h,h,h),1)],k)
if(s!=null){j=A.bp(u,h,h,h,h,h,B.f2,h,h,h,h,h)
B.d.u(l,A.a([B.aa,A.bI(A.c(s,h,h,h,h,h,h,B.pj,h,h,h),h,new D.eGJ(i,f),j)],k))}return A.p(h,A.A(l,B.l,h,B.e,B.h,0,h,h),B.f,h,h,new A.o(w,h,m,n,h,h,B.m),h,h,h,B.e9,B.bk,h,h,h)},
av1(d,e,f,g,h){var x=null,w=A.n(18),v=A.a([g.j(0.2),g.j(0.05)],y.O),u=A.K(g.j(0.35),B.r,1),t=A.W(h,g,x,x,x,20),s=d.a,r=A.c(""+f,x,x,x,x,x,x,A.l(x,x,s?C.dC:B.c,x,x,x,x,x,x,x,x,22,x,x,B.u,x,x,!0,x,x,x,x,x,x,x,x),x,x,x)
return A.p(x,A.x(A.a([t,B.at,r,A.c(e,x,x,x,x,x,x,A.l(x,x,s?C.dg:C.dh,x,x,x,x,x,x,x,x,11.5,x,x,B.P,x,x,!0,x,x,x,x,x,x,x,x),x,x,x)],y.p),B.B,x,B.e,B.h,0,B.p),B.f,x,x,new A.o(x,x,u,w,x,new A.a7(B.a5,B.a9,B.x,v,x,x),B.m),x,x,x,x,B.bk,x,x,x)},
bHu(d){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=y.p,i=A.a([],j)
if($.DB.length===0){x=d.a
w=x?B.c.j(0.92):C.kY
v=A.n(22)
u=A.K(x?B.c:C.uS,B.r,1)
t=A.p(k,C.c0S,B.f,k,k,E.ags,k,40,k,k,k,k,k,40)
t=A.A(A.a([t,B.ar,A.E(A.c("Your trading tutor",k,k,k,k,k,k,A.l(k,k,x?C.dC:B.c,k,k,k,k,k,k,k,k,16,k,k,B.F,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),1)],j),B.l,k,B.e,B.h,0,k,k)
w=A.p(k,A.x(A.a([t,B.O,A.c("Ask anything about trading. The tutor sees the same live prices and readings as the agent, so it can explain what each market is doing right now.",k,k,k,k,k,k,A.l(k,k,x?C.dg:C.dh,k,k,k,k,k,k,k,k,12.5,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),k,k,k)],j),B.B,k,B.e,B.h,0,B.p),B.f,k,k,new A.o(w,k,u,v,k,k,B.m),k,k,k,k,B.bQ,k,k,k)
v=A.a([],j)
for(s=0;s<6;++s){r=C.dcw[s]
u=x?C.dC:B.c
u=A.c(r,k,k,k,k,k,k,new A.H(!0,u,k,k,k,k,12,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k),k,k,k)
t=x?B.c.j(0.92):C.kY
q=x?C.qE:C.qB
p=new A.aP(999,999)
v.push(A.mR(k,t,u,k,new D.eGK(l,r),k,new A.ba(new A.bc(p,p,p,p),B.a1),new A.ax(q,1,B.r,-1),k))}B.d.u(i,A.a([w,B.af,A.bZ(B.bI,v,B.br,k,8,8)],j))}for(x=$.DB.length,w=d.a,s=0;s<$.DB.length;$.DB.length===x||(0,A.I)($.DB),++s){o=$.DB[s]
v=o.a
u=v?B.a9:B.a5
if(v)t=w?C.l_:B.c
else t=w?B.c.j(0.92):C.kY
q=v?18:4
p=v?4:18
if(v)n=k
else{m=new A.ax(w?B.c:C.uS,1,B.r,-1)
n=new A.bE(m,m,m,m)}if(v)v=w?B.c:C.l_
else v=w?C.dC:B.c
i.push(new A.bK(u,k,k,A.p(k,A.AI(o.b,new A.H(!0,v,k,k,k,k,13.5,k,k,k,k,k,1.4,k,k,k,k,k,k,k,k,k,k,k,k,k),k),B.f,k,F.ag3,new A.o(t,k,n,new A.bc(B.i5,B.i5,new A.aP(q,q),new A.aP(p,p)),k,k,B.m),k,k,k,B.jg,B.hz,k,k,k),k))}if($.ah9){x=w?B.c.j(0.92):C.kY
v=A.n(18)
i.push(new A.bK(B.a5,k,k,A.p(k,A.A(A.a([B.ac3,B.aa,A.c("Reading the markets...",k,k,k,k,k,k,A.l(k,k,w?C.dg:C.dh,k,k,k,k,k,k,k,k,12.5,k,k,k,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)],j),B.l,k,B.e,B.M,0,k,k),B.f,k,k,new A.o(x,k,k,v,k,k,B.m),k,k,k,B.hy,B.hz,k,k,k),k))}i=A.E(A.cp(i,l.ax,k,C.bHy,k,k,B.ah,!1),1)
x=A.l(k,k,w?C.dC:B.c,k,k,k,k,k,k,k,k,k,k,k,k,k,k,!0,k,k,k,k,k,k,k,k)
v=A.l(k,k,w?C.dg:C.dh,k,k,k,k,k,k,k,k,k,k,k,k,k,k,!0,k,k,k,k,k,k,k,k)
u=w?B.c.j(0.92):C.kY
t=A.n(999)
q=w?C.qE:C.qB
p=A.n(999)
n=w?C.qE:C.qB
x=A.E(A.aN(k,B.Z,!1,k,!0,B.t,k,A.aO(),l.at,k,k,k,k,k,2,A.bC(k,new A.b6(4,t,new A.ax(q,1,B.r,-1)),k,B.zp,k,k,k,k,!0,new A.b6(4,p,new A.ax(n,1,B.r,-1)),k,k,k,k,k,u,!0,k,k,k,k,k,k,k,k,k,k,k,k,k,v,"Ask about trading or a market...",k,k,k,k,k,k,k,k,k,!0,!0,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k),B.y,!0,k,!0,k,!1,k,B.al,k,k,k,k,k,k,k,k,k,4,1,k,!1,"\u2022",k,k,k,l.gcga(),k,!1,k,k,!1,k,!0,k,B.ae,k,k,k,k,k,k,k,k,k,k,k,x,!0,B.a7,k,B.ao,k,B.acq,k,k),1)
v=w?C.l_:B.c
u=$.ah9?k:new D.eGL(l)
return A.x(A.a([i,A.p(k,A.A(A.a([x,B.aa,A.aG(!1,B.a3,!0,k,A.aM(!1,k,!0,new A.a6(48,48,A.W(B.pR,w?B.c:C.l_,k,k,k,k),k),B.cK,!0,k,k,k,k,k,k,k,k,k,k,k,u,k,k,k,k,k,k,k),B.f,v,0,k,k,B.cK,k,k,B.ai)],j),B.l,k,B.e,B.h,0,k,k),B.f,k,k,k,k,k,k,k,V.HD,k,k,k)],j),B.l,k,B.e,B.h,0,B.p)}}
D.a0B.prototype={
S(){var x=y.S
return new D.bl3(A.S(x,x))},
cYN(d){return this.e.$0()},
d0w(d){return this.x.$1(d)},
rn(){return this.y.$0()},
d_4(d){return this.z.$1(d)},
gd4(d){return this.w}}
D.bl3.prototype={
a_(){var x,w,v,u,t,s,r,q,p,o=this
o.a3()
x=C.dLl.h(0,o.a.c.a)
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
o.e=A.cS(s,0,A.dA(Math.min(10,o.d.length),"count",x),A.U(s).c).dn(0)}x=v.$1(w.h(0,"right"))
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
return q.d0w(A.J(["slots",x,"right",w,"tries",v,"locks",t,"used",s],u,y.z))},
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
cG1(){return this.bbi(!0)},
cmB(d){var x,w,v,u,t=this.d
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
cg9(d,e){var x=this,w=x.f
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
h=k?C.yK:C.yI
x=k?C.yK:C.yI
u=k?C.a_A:C.a_q
t=y.O
u=A.a([x,u],t)
x=A.aI(l,l,l,l,A.W(B.eH,k?C.dC:B.c,l,l,l,18),l,l,l,new D.duG(d),l,l,l,l,l,l)
s=m.a.d
r=y.p
s=A.A(A.a([x,B.aY,A.c("Lesson "+s+" of 10",l,l,l,l,l,l,A.l(l,l,k?C.dg:C.dh,l,l,l,l,l,l,l,l,12,l,l,B.P,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)],r),B.l,l,B.e,B.h,0,l,l)
x=A.n(24)
q=i.f
p=A.ap(q,B.v,0.35)
p.toString
t=A.a([q,p],t)
p=B.c.j(0.2)
q=A.n(16)
t=A.a([s,A.p(l,A.A(A.a([A.p(l,A.W(i.e,B.c,l,l,l,28),B.f,l,l,new A.o(p,l,l,q,l,l,B.m),l,52,l,l,l,l,l,52),B.ex,A.E(A.x(A.a([A.c(i.b,l,l,l,l,l,l,B.fO,l,l,l),A.c(i.c+" \xb7 "+i.d+" min",l,l,l,l,l,l,B.ns,l,l,l)],r),B.B,l,B.e,B.h,0,B.p),1)],r),B.l,l,B.e,B.h,0,l,l),B.f,l,l,new A.o(l,l,l,x,l,new A.a7(B.a5,B.a9,B.x,t,l,l),B.m),l,l,l,l,B.fc,l,l,l),B.aA],r)
for(x=i.w,o=0;o<4;++o){s=x[o]
q=k?C.dC:B.c
q=A.c(s.a,l,l,l,l,l,l,new A.H(!0,q,l,l,l,l,16,B.F,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l),l,l,l)
p=k?C.dC:B.c
B.d.u(t,A.a([q,B.at,A.c(s.b,l,l,l,l,l,l,new A.H(!0,p,l,l,l,l,14,l,l,l,l,l,1.5,l,l,l,l,l,l,l,l,l,l,l,l,l),l,l,l),B.aA],r))}x=k?B.c.j(0.92):C.kY
s=A.n(22)
q=A.K(C.dN.j(0.45),B.r,1.5)
t.push(A.p(l,A.x(A.a([A.A(A.a([C.bXp,B.bf,A.c("See it live right now",l,l,l,l,l,l,A.l(l,l,k?C.dC:B.c,l,l,l,l,l,l,l,l,14,l,l,B.F,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)],r),B.l,l,B.e,B.h,0,l,l),B.S,m.a.cYN(0)],r),B.B,l,B.e,B.h,0,B.p),B.f,l,l,new A.o(x,l,q,s,l,l,B.m),l,l,l,l,B.bH,l,l,l))
t.push(B.bx)
x=A.c("Quiz",l,l,l,l,l,l,A.l(l,l,k?C.dC:B.c,l,l,l,l,l,l,l,l,16,l,l,B.F,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)
s=""+w+" of "
q=m.e.length
if(v)p=C.dN
else p=k?C.dg:C.dh
t.push(A.A(A.a([x,B.aY,A.c(s+q+" right",l,l,l,l,l,l,A.l(l,l,p,l,l,l,l,l,l,l,l,12.5,l,l,B.F,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)],r),B.l,l,B.e,B.h,0,l,l))
t.push(B.ak)
p=A.n(9)
x=m.e.length
x=x===0?0:w/x
t.push(A.bw(p,A.jD(k?C.H3:C.GT,l,l,7,l,x,C.b5o),B.aq))
t.push(B.O)
x=m.a.f?"Admin: you can retry any question.":"Get all 10 right to finish. A wrong answer gets one more try; wrong twice and that question locks for 5 minutes, then a new question takes its place."
t.push(A.c(x,l,l,l,l,l,l,A.l(l,l,k?C.dg:C.dh,l,l,l,l,l,l,l,l,11.8,l,l,l,l,1.35,!0,l,l,l,l,l,l,l,l),l,l,l))
t.push(B.S)
for(n=0;x=m.e,n<x.length;++n)t.push(m.ctT(j,n,x[n]))
t.push(B.O)
x=k?C.dC:B.c
q=k?C.qE:C.qB
q=A.E(A.eo(C.c36,l,C.fV4,new D.duH(m,i),A.di(l,l,l,l,l,l,l,l,l,x,l,l,B.cm,l,new A.ba(A.n(999),B.a1),new A.ax(q,1.5,B.r,-1),l,l,l,l)),1)
x=!v
if(!x||m.a.r)k=C.dN
else k=k?C.dg:C.dh
k=A.bp(k,l,l,l,l,l,B.cm,l,new A.ba(A.n(999),B.a1),l,l,l)
p=!x||m.a.r?new D.duI(m,d):l
t.push(A.A(A.a([q,B.ar,A.E(A.dc(Q.R0,l,A.c(!x||m.a.r?"Finish lesson":s+m.e.length+" right",l,l,l,l,l,l,B.ca,l,l,l),p,k),1)],r),B.l,l,B.e,B.h,0,l,l))
return A.c5(l,h,A.p(l,A.bo(!0,A.cp(t,l,l,C.bHG,l,l,B.ah,!1),!0,!1,B.ag,!0,!0),B.f,l,l,new A.o(l,l,l,l,l,new A.a7(B.aX,B.b1,B.x,u,l,l),B.m),l,l,l,l,l,l,l,l),l,!1,!1,l,l)},
ctT(a7,a8,a9){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=this,a5=null,a6=a4.d
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
o=A.K(C.es.j(0.4),B.r,1)
n=A.c("Question "+(a8+1)+" is locked",a5,a5,a5,a5,a5,a5,A.l(a5,a5,a6?C.dC:B.c,a5,a5,a5,a5,a5,a5,a5,a5,14,a5,a5,B.F,a5,a5,!0,a5,a5,a5,a5,a5,a5,a5,a5),a5,a5,a5)
m=y.p
return A.p(a5,A.A(A.a([C.c5d,B.ar,A.E(A.x(A.a([n,A.c("Wrong twice. Re-read the lesson; a new question appears in "+s+":"+r+".",a5,a5,a5,a5,a5,a5,A.l(a5,a5,a6?C.dg:C.dh,a5,a5,a5,a5,a5,a5,a5,a5,12.5,a5,a5,a5,a5,1.35,!0,a5,a5,a5,a5,a5,a5,a5,a5),a5,a5,a5)],m),B.B,a5,B.e,B.h,0,B.p),1)],m),B.l,a5,B.e,B.h,0,a5,a5),B.f,a5,a5,new A.o(q,a5,o,p,a5,a5,B.m),a5,a5,a5,B.d4,B.bH,a5,a5,a5)}a6=a7.a
q=a6?B.c.j(0.92):C.kY
p=A.n(20)
if(w)o=C.dN.j(0.6)
else o=a6?B.c:C.uS
o=A.K(o,B.r,w?1.5:1)
n=y.p
m=A.a([A.c(""+(a8+1)+". "+x.a,a5,a5,a5,a5,a5,a5,A.l(a5,a5,a6?C.dC:B.c,a5,a5,a5,a5,a5,a5,a5,a5,14,a5,a5,B.F,a5,a5,!0,a5,a5,a5,a5,a5,a5,a5,a5),a5,a5,a5),B.O],n)
for(l=a4.cmB(a9),k=l.length,j=!w,i=x.b,h=x.c,g=0;g<l.length;l.length===k||(0,A.I)(l),++g){f=l[g]
e=w?a5:new D.duB(a4,a9,f)
if(w&&f===h)d=C.dN.j(0.14)
else if(t===f)d=C.es.j(0.12)
else d=a6?C.CF:C.CH
a0=new A.aP(14,14)
if(w&&f===h)a1=C.dN
else a1=t===f?C.es:B.L
a2=new A.ax(a1,1,B.r,-1)
a1=i[f]
a3=a6?C.dC:B.c
a1=A.a([new A.bz(1,B.ba,A.c(a1,a5,a5,a5,a5,a5,a5,new A.H(!0,a3,a5,a5,a5,a5,13.5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5),a5,a5,a5),a5)],n)
if(w&&f===h)a1.push(C.c0C)
if(j&&t===f)a1.push(C.c6B)
m.push(A.aA(a5,A.p(a5,new A.c3(B.aL,B.e,B.h,B.l,a5,B.p,a5,0,a1,a5),B.f,a5,a5,new A.o(d,a5,new A.bE(a2,a2,a2,a2),new A.bc(a0,a0,a0,a0),a5,a5,B.m),a5,a5,a5,B.eK,B.et,a5,a5,a5),B.y,!1,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,e,a5,a5,a5,a5,a5,a5,!1,B.a4))}if(w)m.push(A.c("Right! "+x.d,a5,a5,a5,a5,a5,a5,C.fOZ,a5,a5,a5))
else if(u===1&&!a4.a.f)m.push(C.fXQ)
else if(u>=1)m.push(C.fVe)
return A.p(a5,A.x(m,B.B,a5,B.e,B.h,0,B.p),B.f,a5,a5,new A.o(q,a5,o,p,a5,a5,B.m),a5,a5,a5,B.d4,B.bH,a5,a5,a5)}}
D.aPj.prototype={
t(){var x=this,w=x.aa$
if(w!=null)w.a7(0,x.gbB())
x.aa$=null
x.a2()},
aZ(){this.b7()
this.b5()
this.bC()}}
var z=a.updateTypes(["P(uv)","ay<~>()","~()","XF(Z)","ay<~>(m)","m(a_A)","a0B(Z)"])
D.eGG.prototype={
$1(d){this.a.Bm(!0)
return null},
$S:11}
D.eGn.prototype={
$1(d){var x=this.a.Q,w=x.f
if(w.length!==0){w=B.d.gd3(w).Q
w.toString
x.i9(B.i.D(Math.min(this.b*160-16,w),0,1/0))}},
$S:7}
D.eGe.prototype={
$0(){return this.a.z=this.b},
$S:0}
D.eGm.prototype={
$0(){return this.a.z=this.b},
$S:0}
D.eGp.prototype={
$0(){var x=this.a,w=x.f=!1,v=this.b,u=v==null
if(!u?J.z(J.t(v,"ok"),!0):w){x.d=v
x.ax=null}else{w=u?null:J.t(v,"error")
x.ax=J.k(w==null?"Could not reach the server. Pull down to try again.":w)
if(!J.z(u?null:J.t(v,"ownerOnly"),!0))w=J.z(u?null:J.t(v,"setupNeeded"),!0)
else w=!0
if(w)x.d=null}},
$S:0}
D.eGc.prototype={
$1(d){return A.a1(d,y.N,y.z)},
$S:25}
D.eGd.prototype={
$0(){var x,w,v=this,u=v.a
if(v.b){x=A.B(u.e,y.P)
w=v.c
B.d.u(x,w)}else{x=v.c
w=x}u.e=x
u.w=w.length>=100},
$S:0}
D.eGx.prototype={
$1(d){var x=null
return A.eh(A.a([A.bO(!1,B.dr,x,x,!0,x,x,x,new D.eGv(d),x,x),A.bI(C.hhb,x,new D.eGw(d),x)],y.p),x,x,x,C.hhB,x,x,x,x,C.fZl,x)},
$S:18}
D.eGv.prototype={
$0(){A.a8(this.a,!1).N(!1)
return null},
$S:0}
D.eGw.prototype={
$0(){A.a8(this.a,!1).N(!0)
return null},
$S:0}
D.eGy.prototype={
$0(){return this.a.r=!0},
$S:0}
D.eGz.prototype={
$0(){return this.a.r=!1},
$S:0}
D.eGl.prototype={
$1(d){var x=this.a,w=x.d
x.a.toString
return D.hzA(w,!1)},
$S:z+3}
D.eGr.prototype={
$0(){return this.a.r=!0},
$S:0}
D.eGs.prototype={
$0(){var x=this.a,w=x.r=!1,v=this.b
if(v!=null?J.z(J.t(v,"ok"),!0):w)x.d=v},
$S:0}
D.eGt.prototype={
$1(d){var x=this
return A.oU(new D.eGq(x.a,x.b,x.c,x.d),!1,0.8,0.95,0.25,!1,null)},
$S:135}
D.eGq.prototype={
$2(d,e){var x=this
return x.a.cz0(x.b,x.c,D.fu(J.t(x.d,"state")),e)},
$S:2019}
D.eGu.prototype={
$2(d,e){return B.i.aQ(D.aHk(d),D.aHk(e))},
$S:40}
D.eGF.prototype={
$0(){return this.a.Bm(!0)},
$S:1}
D.eGC.prototype={
$0(){var x=this.a.c
x.toString
return A.VK(x)},
$S:0}
D.eGD.prototype={
$0(){return this.a.Bm(!0)},
$S:0}
D.eG3.prototype={
$1(d){return J.z(J.t(d,"asset"),this.a)},
$S:4}
D.eG4.prototype={
$0(){var x=this.a
return x.length===0?this.b:B.d.gH(x)},
$S:204}
D.eG5.prototype={
$1(d){return J.z(J.t(d,"asset"),this.a.h(0,"symbol"))},
$S:4}
D.eG6.prototype={
$0(){return this.a},
$S:204}
D.eGB.prototype={
$1(d){var x,w,v,u,t,s,r,q,p,o,n,m=null,l=this.d,k=D.fu(J.t(this.c,"market")),j=k.h(0,"activeMarket"),i=j==null?m:J.k(j),h=J.z(k.h(0,"weekend"),!0)
if(l==null)x=m
else{l=l.h(0,"symbol")
x=l==null?m:J.k(l)}w=x!=null&&x!=="SPY"&&x!=="BTC/USD"
if(i==="SPY"){v="TRADING TODAY: SPY"
u="Weekday and the stock market is open. Only SPY can be bought. Bitcoin is traded on weekends only."}else if(i==="BTC/USD"){v="TRADING TODAY: BTC/USD"
u="Weekend. Only Bitcoin can be bought. SPY is traded on weekdays only."}else{u=h?"Bitcoin is traded on Saturday and Sunday.":"SPY is traded on weekdays while the stock market is open (9:30 AM to 4:00 PM ET). Bitcoin on weekends only."
v="NO MARKET TRADED RIGHT NOW"}l=i==null
t=l?E.jQ:C.dN
j=this.b.a
s=j?B.c.j(0.92):C.kY
r=A.n(22)
q=A.K(t.j(0.55),B.r,1)
p=y.p
o=A.a([],p)
if(!l)B.d.u(o,A.a([D.fvz(i,30),B.ar],p))
else B.d.u(o,A.a([A.W(B.vd,t,m,m,m,26),B.ar],p))
l=A.c(v,m,m,m,m,m,m,A.l(m,m,t,m,m,m,m,m,m,m,m,13.5,m,m,B.u,m,m,!0,m,0.3,m,m,m,m,m,m),m,m,m)
n=A.c(u,m,m,m,m,m,m,A.l(m,m,j?C.dC:B.c,m,m,m,m,m,m,m,m,12,m,m,m,m,1.3,!0,m,m,m,m,m,m,m,m),m,m,m)
l=A.a([l,B.cM,n,B.cM,A.c("Buys only when the fast line crosses up AND the big trend is rising (slow line higher than 1 hour ago, price above it).",m,m,m,m,m,m,A.l(m,m,j?C.dg:C.dh,m,m,m,m,m,m,m,m,11,m,m,m,m,1.3,!0,m,m,m,m,m,m,m,m),m,m,m)],p)
if(w)B.d.u(l,A.a([B.at,A.c("Still holding the earlier "+x+" pretend trade: the agent only checks its exits (every 5 minutes) and never buys "+x+" again.",m,m,m,m,m,m,C.fHa,m,m,m)],p))
o.push(A.E(A.x(l,B.B,m,B.e,B.h,0,B.p),1))
l=A.p(m,A.A(o,B.B,m,B.e,B.h,0,m,m),B.f,m,m,new A.o(s,m,q,r,m,m,B.m),m,m,m,m,B.bQ,m,m,m)
s=A.ft(m,m,j?B.c.j(0.92):C.kY,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,B.no,m,m,m,m,m,m)
return A.eF(m,B.L,A.aG(!1,B.a3,!0,m,A.x(A.a([l,B.S,A.bO(!1,A.c("Got it",m,m,m,m,m,m,A.l(m,m,j?C.dC:B.c,m,m,m,m,m,m,m,m,m,m,m,B.F,m,m,!0,m,m,m,m,m,m,m,m),m,m,m),m,m,!0,m,m,m,new D.eGA(d),m,s)],p),B.l,m,B.e,B.M,0,B.p),B.f,B.L,0,m,m,m,m,m,B.ai),m,m,m,B.zt,m,B.d7,m,m,m)},
$S:47}
D.eGA.prototype={
$0(){return A.a8(this.a,!1).e7()},
$S:0}
D.eGg.prototype={
$1(d){return J.z(J.t(d,"open"),!0)},
$S:4}
D.eGh.prototype={
$0(){var x=this
return x.a.cDe(x.b,x.c,x.d)},
$S:0}
D.eGi.prototype={
$1(d){return J.z(J.t(d,"asset"),J.t(this.a,"asset"))},
$S:4}
D.eGk.prototype={
$2(d,e){return B.ar},
$S:38}
D.eGj.prototype={
$2(d,a0){var x,w,v,u,t,s,r,q,p=this,o=null,n=p.b[a0],m=J.a2(n),l=J.k(m.h(n,"asset")),k=l===J.t(p.c,"asset"),j=D.ek(m.h(n,"changePct")),i=j>=0,h=D.aRu(n),g=p.d,f=J.z(g==null?o:g.h(0,"symbol"),l),e=J.z(D.fu(m.h(n,"reading")).h(0,"decision"),"ENTER")&&J.z(D.fu(m.h(n,"reading")).h(0,"dir"),"up")
g=p.a
x=p.e
w=x.a
v=w?B.c.j(0.92):C.kY
u=A.n(20)
if(k)t=D.fAH(l).c
else t=w?B.c:C.uS
t=A.K(t,B.r,k?2:1)
x=k?D.fAH(l).c.j(0.25):x.ga9A()
x=A.a([new A.aa(0,B.H,x,B.cy,k?18:12)],y.V)
s=D.fvz(l,20)
r=y.p
s=A.a([s,B.bf,A.E(A.c(l,o,1,B.a2,o,o,o,A.l(o,o,w?C.dC:B.c,o,o,o,o,o,o,o,o,12,o,o,B.F,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),1)],r)
if(!J.z(m.h(n,"open"),!0)){q=m.h(n,"offLabel")
q=J.k(q==null?"closed":q)
s.push(A.c(q,o,o,o,o,o,o,A.l(o,o,w?C.dg:C.dh,o,o,o,o,o,o,o,o,9.5,o,o,B.P,o,o,!0,o,o,o,o,o,o,o,o),o,o,o))}s=A.A(s,B.l,o,B.e,B.h,0,o,o)
m=D.h1(D.ek(m.h(n,"price")),!0,!1)
m=A.c(m,o,o,o,o,o,o,A.l(o,o,w?C.dC:B.c,o,o,o,o,o,o,o,o,17,o,o,B.P,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)
w=i?"+":""
q=B.i.a9(j,2)
w=A.a([A.c(w+q+"%",o,o,o,o,o,o,A.l(o,o,i?C.dN:C.es,o,o,o,o,o,o,o,o,11,o,o,B.F,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),B.aY],r)
if(f)w.push(g.a0M("HOLDING",F.uG))
else if(e)w.push(g.a0M("BUY SIGNAL",C.dN))
w=A.A(w,B.l,o,B.e,B.h,0,o,o)
return A.aA(o,A.cT(o,A.x(A.a([s,B.ak,new A.dn(B.dx,B.a5,B.f,m,o),w,B.at,A.E(A.b4(o,o,o,new D.aKE(h,i?C.dN:C.es,o),B.h2),1)],r),B.B,o,B.e,B.h,0,B.p),o,o,B.b_,new A.o(v,o,t,u,x,o,B.m),B.a3,o,o,o,o,M.anq,o,o,150),B.y,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,new D.eGf(g,l),o,o,o,o,o,o,!1,B.a4)},
$S:81}
D.eGf.prototype={
$0(){return this.a.a20(this.b)},
$S:0}
D.eG9.prototype={
$0(){var x=this.a
return x.l(new D.eG8(x,this.b))},
$S:0}
D.eG8.prototype={
$0(){return this.a.y=this.b},
$S:0}
D.eGa.prototype={
$0(){var x=this.a
return x.l(new D.eG7(x))},
$S:0}
D.eG7.prototype={
$0(){var x=this.a
return x.at=!x.at},
$S:0}
D.eG1.prototype={
$1(d){return J.z(J.t(d,"asset"),this.a.h(0,"symbol"))},
$S:4}
D.eG2.prototype={
$0(){return A.S(y.N,y.z)},
$S:204}
D.eGo.prototype={
$2(d,e){var x=null,w=e.b,v=A.ao(x,A.p(x,x,B.f,x,x,new A.o(x,x,x,A.n(99),x,C.cbb,B.m),x,8,x,x,x,x,x,x),x,x,0,0,9,x),u=this.a.a,t=A.ao(x,A.p(x,x,B.f,(u?C.dC:B.c).j(0.5),x,x,x,18,x,x,x,x,x,2),x,x,w/2-1,x,4,x),s=B.i.D(this.b*w-9,0,w-18)
return new A.a6(x,26,new A.an(B.a0,x,B.ad,B.f,A.a([v,t,A.ao(x,A.p(x,x,B.f,x,x,new A.o(B.c,x,A.K(u?C.dC:B.c,B.r,3),x,x,x,B.a6),x,18,x,x,x,x,x,18),x,x,s,x,4,x)],y.p),x),x)},
$S:119}
D.eGb.prototype={
$0(){return this.a.SL(!this.b)},
$S:0}
D.eGE.prototype={
$1(d){return A.a1(d,y.N,y.z)},
$S:25}
D.eG0.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
x=u.x&&u.w?2:4
break
case 2:x=5
return A.b(u.a_0(!0),$async$$0)
case 5:x=3
break
case 4:u.l(new D.eG_(u))
case 3:return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
D.eG_.prototype={
$0(){return this.a.x=!0},
$S:0}
D.cWV.prototype={
$0(){return this.a.d=this.b},
$S:0}
D.cX3.prototype={
$2(d,e){var x,w,v=null,u=e.b,t=this.a,s=t.a,r=s.c,q=s.d,p=s.e,o=s.f
s=s.r
x=t.d
w=d.L(y.D)
return A.aA(v,new A.a6(u,250,A.b4(v,v,v,new D.ben((w==null?B.CP:w).w.d,r,q,p,o,s,x,v),B.az),v),B.y,!1,v,v,v,v,v,new D.cWZ(t),new D.cX_(t,u),new D.cX0(t,u),v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new D.cX1(t,u),new D.cX2(t),v,v,v,!1,B.a4)},
$S:36}
D.cX1.prototype={
$1(d){return this.a.aAy(d.b,this.b)},
$S:23}
D.cX_.prototype={
$1(d){return this.a.aAy(d.b,this.b)},
$S:50}
D.cX0.prototype={
$1(d){return this.a.aAy(d.b,this.b)},
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
D.fh_.prototype={
$1(d){return D.ek(J.t(d,"c"))},
$S:2021}
D.fvA.prototype={
$1(d){var x=null,w=C.a8t.h(0,d),v=w.a,u=w.b,t=this.a,s=t*0.78,r=A.K(B.c,B.r,1.2)
return A.p(B.z,A.c(v,x,x,x,x,x,x,A.l(x,x,B.c,x,x,x,x,x,x,x,x,t*(v.length>1?0.26:0.36),x,x,B.u,x,x,!0,x,x,x,x,x,x,x,x),x,x,x),B.f,x,x,new A.o(u,x,r,x,x,x,B.a6),x,s,x,x,x,x,x,s)},
$S:128}
D.fB_.prototype={
$1(d){var x=y.N,w=y.z,v=A.a1(d,x,w)
w=A.dH(v,x,w)
w.n(0,"asset",v.h(0,"symbol"))
return w},
$S:25}
D.fFk.prototype={
$1(d){return A.a1(d,y.N,y.z)},
$S:25}
D.fC5.prototype={
$1(d){return","},
$S:57}
D.fJn.prototype={
$3(d,e,f){var x=A.bPp(d,e,1,0,0,0,0,0)
while(A.lU(x)!==7)x=x.bM(864e8)
return x.bM(A.dv(7*(f-1),0,0,0,0,0).a)},
$S:2022}
D.fGb.prototype={
$1(d){return J.k(d)},
$S:15}
D.fGc.prototype={
$2(d,e){var x=null,w=e.b,v=A.ao(x,A.p(x,x,B.f,x,x,new A.o(x,x,x,A.n(9),x,C.caC,B.m),x,6,x,x,x,x,x,x),x,x,0,0,4,x),u=B.i.D(this.a/100*w-7,0,w-14)
return new A.a6(x,14,new A.an(B.a0,x,B.ad,B.f,A.a([v,A.ao(x,A.p(x,x,B.f,x,x,new A.o(B.c,x,A.K(this.b.a?C.dC:B.c,B.r,2.5),x,x,x,B.a6),x,14,x,x,x,x,x,14),x,x,u,x,0,x)],y.p),x),x)},
$S:119}
D.die.prototype={
$1(d){var x=this.a
if(x.c!=null)x.l(new D.did())},
$S:11}
D.did.prototype={
$0(){},
$S:0}
D.fwp.prototype={
$1(d){return J.k(d)},
$S:15}
D.eGQ.prototype={
$1(d){return J.k(d)},
$S:15}
D.eHI.prototype={
$0(){return this.a.l(new D.eHH())},
$S:0}
D.eHH.prototype={
$0(){},
$S:0}
D.eHJ.prototype={
$0(){return $.hke=this.a.at.a.a},
$S:0}
D.eHK.prototype={
$1(d){var x=this.a
if(x.c!=null)x.l(new D.eHG(x,d))},
$S:191}
D.eHG.prototype={
$0(){return this.a.Q=this.b},
$S:0}
D.eHL.prototype={
$1(d){this.a.Rc()
return null},
$S:11}
D.eHD.prototype={
$1(d){var x=y.N,w=y.z
w=A.dH(A.a1(d,x,w),x,w)
w.n(0,"asset",J.t(d,"symbol"))
return w},
$S:25}
D.eHa.prototype={
$0(){var x,w,v=this,u=v.c
if(J.z(u==null?null:J.t(u,"isAdmin"),!0))v.b.y=!0
x=v.d
if(x==null)x=v.a.a
if(x!=null){u=y.g.a(x.h(0,"done"))
if(u==null)u=A.a([],y.s)
w=y.Y.a(x.h(0,"lessons"))
v.b.x=A.J(["done",u,"lessons",w==null?A.S(y.N,y.z):w],y.N,y.z)}},
$S:0}
D.eHl.prototype={
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
return A.b(A.h2(A.J(["action","paLearnSave","progress",p.x],y.N,y.z),!1,!1,!1,!1,B.hb),$async$$0)
case 9:o=e
if(J.z(o==null?null:J.t(o,"allDone"),!0)){$.cmU=new A.V(A.fZ(0,0),0,!1)
A.Pb()}case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$$0,w)},
$S:1}
D.eGT.prototype={
$1(d){return this.a.gJZ().q(0,d.a)},
$S:z+0}
D.eGU.prototype={
$0(){var x,w=this.a,v=y.N,u=A.d_(w.gJZ(),v)
u.I(0,this.b)
x=A.B(u,A.a5(u).k("ci.E"))
v=A.dH(w.x,v,y.z)
v.n(0,"done",x)
w.x=v},
$S:0}
D.eGV.prototype={
$1(d){return this.a.gJZ().q(0,d.a)},
$S:z+0}
D.eGW.prototype={
$1(d){var x=null
return A.eh(A.a([A.bI(C.hb8,x,new D.eGS(this.a,d),x)],y.p),x,x,x,C.h83,x,x,x,x,C.fWe,x)},
$S:18}
D.eGS.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:A.a8(v.b,!1).N(null)
x=2
return A.b(A.Mi(),$async$$0)
case 2:u=e
t=v.a
if(t.c!=null)t.l(new D.eGR(t,u))
return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
D.eGR.prototype={
$0(){return this.a.Q=this.b},
$S:0}
D.eHk.prototype={
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
v=J.b8(v,new D.eHj(),y.N)
v=A.B(v,v.$ti.k("ak.E"))
t.dy=v
v=w.h(x,"nowEt")
t.fr=J.k(v==null?"":v)
t.fx=J.z(w.h(x,"stockOpen"),!0)
t.r=new A.V(Date.now(),0,!1)},
$S:0}
D.eHj.prototype={
$1(d){return J.k(d)},
$S:15}
D.eHb.prototype={
$2(d,e){return new A.V(Date.now(),0,!1).by(e.a).a>18e7},
$S:2023}
D.eHc.prototype={
$0(){},
$S:0}
D.eHA.prototype={
$1(d){return J.z(J.t(d,"open"),!0)&&D.aRu(d).length>5},
$S:4}
D.eHB.prototype={
$2(d,e){return B.i.aQ(D.aHk(d),D.aHk(e))},
$S:40}
D.eGZ.prototype={
$1(d){return J.z(J.t(d,"asset"),this.a.h(0,"symbol"))},
$S:4}
D.eH_.prototype={
$0(){return A.S(y.N,y.z)},
$S:204}
D.eH0.prototype={
$1(d){var x,w,v,u,t,s,r,q,p,o,n="typicalMin",m="enterWithinMin",l=J.a2(d),k=D.fu(l.h(d,"reading")),j=D.fu(k.h(0,"timing"))
if(j.h(0,n)==null)x=""
else{w=A.v(j.h(0,"dir"))
v=A.v(j.h(0,"ageMin"))
u=A.v(j.h(0,n))
t=A.v(j.h(0,"remainingMin"))
s=A.v(j.h(0,"dir"))
r=A.v(j.h(0,"worked"))
q=A.v(j.h(0,"of"))
p=D.ek(j.h(0,m))>0?"still early (enter within "+A.v(j.h(0,m))+" min)":"too late to enter"
x=", current "+w+" move "+v+" min old, such moves usually last "+u+" min (about "+t+" min left), past "+s+" moves really went that way "+r+" of "+q+" times, "+p}w=A.v(l.h(d,"asset"))
v=A.v(l.h(d,"name"))
u=D.hIs(d)
t=B.i.a9(D.ek(l.h(d,"changePct")),2)
l=J.z(l.h(d,"open"),!0)?"open":"closed"
s=k.h(0,"bias")
s=A.v(s==null?"unknown":s)
r=B.i.a9(D.ek(k.h(0,"score")),0)
q=k.h(0,"rsi")==null?"n/a":B.i.a9(D.ek(k.h(0,"rsi")),0)
p=k.h(0,"mom1h")==null?"n/a":B.i.a9(D.ek(k.h(0,"mom1h")),2)+"%"
o=k.h(0,"action")
return"- "+w+" ("+v+"): price "+u+", change "+t+"%, "+l+", "+s+", strength "+r+", RSI "+q+", last hour "+p+", reading: "+A.v(o==null?"n/a":o)+x+"."},
$S:52}
D.eGM.prototype={
$0(){$.DB.push(new D.a_A(!0,this.b))
$.ah9=!0},
$S:0}
D.eGN.prototype={
$1(d){return(d.a?"Student":"Tutor")+": "+d.b},
$S:z+5}
D.eGO.prototype={
$1(d){return"- "+A.v(d)},
$S:15}
D.eGP.prototype={
$0(){},
$S:0}
D.eHm.prototype={
$1(d){var x=this.a.ax,w=x.f
if(w.length!==0){w=B.d.gd3(w).Q
w.toString
x.m7(w+200,B.e8,B.eW)}},
$S:7}
D.eHE.prototype={
$0(){return A.VK(this.a)},
$S:0}
D.eHF.prototype={
$0(){return this.b.gLf().C1(this.a.a)},
$S:0}
D.eGY.prototype={
$1(d){return this.a.gJZ().q(0,d.a)},
$S:z+0}
D.eGX.prototype={
$0(){return this.a.clz(this.b)},
$S:0}
D.eHi.prototype={
$1(d){var x=this.b,w=B.d.cd(C.Eg,x),v=this.a,u=v.y,t=x.a,s=v.gJZ().q(0,t)
t=y.Y.a(D.fu(v.x.h(0,"lessons")).h(0,t))
if(t==null)t=B.lE
return new D.a0B(x,w+1,new D.eHe(v,x),u,s,A.a1(t,y.N,y.z),new D.eHf(v,x),new D.eHg(v,x),new D.eHh(v),null)},
$S:z+6}
D.eHe.prototype={
$0(){var x=this.a,w=x.c
w.toString
return x.c6M(new D.a1x(A.Q(w).ax.a===B.dd),this.b.r)},
$S:131}
D.eHf.prototype={
$1(d){var x=this.a
x.l(new D.eHd(x,this.b,d))
x.aCK()},
$S:117}
D.eHd.prototype={
$0(){var x=this.a,w=y.N,v=y.z,u=A.a1(D.fu(x.x.h(0,"lessons")),w,v)
u.n(0,this.b.a,this.c)
v=A.dH(x.x,w,v)
v.n(0,"lessons",u)
x.x=v},
$S:0}
D.eHg.prototype={
$0(){return this.a.ae8(this.b.a)},
$S:0}
D.eHh.prototype={
$1(d){var x=this.a,w=x.c
w.toString
A.a8(w,!1).e7()
x.aQX(d)},
$S:2}
D.eH1.prototype={
$2$last$lines(d,e){var x=this.a
return new D.adH(B.d.fE(x,Math.max(0,x.length-d)),this.b,null,e,this.c,null)},
$0(){return this.$2$last$lines(36,!0)},
$1$lines(d){return this.$2$last$lines(36,d)},
$S:2024}
D.eH9.prototype={
$1(d){var x=null
return A.c(d,x,x,x,x,x,x,A.l(x,x,this.a.a?C.dC:B.c,x,x,x,x,x,x,x,x,13,x,x,x,x,1.4,!0,x,x,x,x,x,x,x,x),x,x,x)},
$S:2025}
D.eH2.prototype={
$1(d){var x=J.a2(d)
return J.z(D.fu(x.h(d,"reading")).h(0,"decision"),"ENTER")&&J.z(D.fu(x.h(d,"reading")).h(0,"dir"),"up")},
$S:4}
D.eH3.prototype={
$1(d){return J.t(d,"asset")},
$S:772}
D.eH4.prototype={
$1(d){var x=J.a2(d)
return J.z(D.fu(x.h(d,"reading")).h(0,"decision"),"ENTER")&&J.z(D.fu(x.h(d,"reading")).h(0,"dir"),"down")},
$S:4}
D.eH5.prototype={
$1(d){return J.t(d,"asset")},
$S:772}
D.eH6.prototype={
$1(d){var x=J.a2(d)
return J.z(x.h(d,"open"),!0)&&D.fu(x.h(d,"reading")).h(0,"rsi")!=null},
$S:4}
D.eH7.prototype={
$1(d){return J.z(J.t(d,"open"),!0)},
$S:4}
D.eH8.prototype={
$1(d){var x=D.fu(D.fu(J.t(d,"reading")).h(0,"timing"))
return D.ek(x.h(0,"of"))>=3&&D.ek(x.h(0,"worked"))/D.ek(x.h(0,"of"))>=0.5},
$S:4}
D.eHq.prototype={
$1(d){var x,w,v,u=this.a
if(u.cx!=="All"&&D.hDv(d)!==u.cx)return!1
u=this.b
if(u.length===0)return!0
x=J.a2(d)
w=A.v(x.h(d,"asset"))
v=A.v(x.h(d,"name"))
x=x.h(d,"asset")
x=J.k(x==null?"":x)
return B.a.q((w+" "+v+" "+A.aL(x,"/","")).toLowerCase(),u)},
$S:4}
D.eHr.prototype={
$2(d,e){var x,w,v=J.a2(d),u=y.f,t=u.b(D.fu(v.h(d,"reading")).h(0,"entry"))?0:1,s=J.a2(e),r=u.b(D.fu(s.h(e,"reading")).h(0,"entry"))?0:1
if(t!==r)return t-r
u=this.a.dx
x=u.am(0,v.h(d,"asset"))?0:1
w=u.am(0,s.h(e,"asset"))?0:1
if(x!==w)return x-w
return B.i.aQ(D.aHk(d),D.aHk(e))},
$S:40}
D.eHz.prototype={
$2(d,e){var x=D.fu(J.t(d,"reading"))
return J.z(x.h(0,"dir"),e)&&B.d.q(C.aCd,x.h(0,"decision"))},
$S:2027}
D.eHs.prototype={
$1(d){return this.a.$2(d,"up")},
$S:4}
D.eHt.prototype={
$1(d){return this.a.$2(d,"down")},
$S:4}
D.eHv.prototype={
$0(){var x=this.a
return x.l(new D.eHp(x,this.b))},
$S:0}
D.eHp.prototype={
$0(){return this.a.cx=this.b},
$S:0}
D.eHu.prototype={
$1(d){return D.hDv(d)===this.a},
$S:4}
D.eHw.prototype={
$0(){var x=this.a
x.l(new D.eHo(x))},
$S:0}
D.eHo.prototype={
$0(){var x=this.a,w=x.CW
x.CW=!w
if(w){x.ch=""
x.cy.bN(0,B.ci)}},
$S:0}
D.eHx.prototype={
$1(d){var x=this.a
return x.l(new D.eHn(x,d))},
$S:2}
D.eHn.prototype={
$0(){return this.a.ch=this.b},
$S:0}
D.eHy.prototype={
$0(){return this.a.aQX("What is happening with "+A.v(J.t(this.b,"asset"))+" right now? Is it bullish or bearish, how long might the move last, and is it too late to enter?")},
$S:0}
D.eGI.prototype={
$1(d){return this.a.gJZ().q(0,d.a)},
$S:z+0}
D.eGJ.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=!v.b?2:4
break
case 2:v.a.gLf().C1(0)
x=3
break
case 4:x=5
return A.b(A.Mi(),$async$$0)
case 5:u=e
t=v.a
if(t.c!=null)t.l(new D.eGH(t,u))
$.cmU=new A.V(A.fZ(0,0),0,!1)
A.Pb()
case 3:return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
D.eGH.prototype={
$0(){return this.a.Q=this.b},
$S:0}
D.eGK.prototype={
$0(){return this.a.JY(this.b)},
$S:0}
D.eGL.prototype={
$0(){var x=this.a
return x.JY(x.at.a.a)},
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
x=d==null?B.lE:d
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
$0(){return this.a.cG1()},
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
$0(){return this.a.a.d_4('I just read the lesson "'+this.b.b+'". Can you explain it again with a live example from the markets right now?')},
$S:0}
D.duI.prototype={
$0(){this.a.a.rn()
A.VK(this.b)},
$S:0}
D.duB.prototype={
$0(){return this.a.cg9(this.b,this.c)},
$S:0};(function aliases(){var x=D.aPj.prototype
x.bBt=x.t})();(function installTearOffs(){var x=a._instance_0u,w=a._instance_1u
var v
x(v=D.aHj.prototype,"gclx","cly",2)
x(v,"gcyZ","a3i",1)
x(v=D.aHl.prototype,"gcgc","Rc",1)
w(v,"gcga","JY",4)})();(function inheritance(){var x=a.mixinHard,w=a.inheritMany,v=a.inherit
w(A.af,[D.atR,D.adH,D.aCv,D.XF,D.a0B])
w(A.ah,[D.aHj,D.bem,D.bhT,D.aPj,D.bl3])
w(A.fO,[D.eGG,D.eGn,D.eGc,D.eGx,D.eGl,D.eGt,D.eG3,D.eG5,D.eGB,D.eGg,D.eGi,D.eG1,D.eGE,D.cX1,D.cX_,D.cX0,D.cWZ,D.cX2,D.cX4,D.cX6,D.fh_,D.fvA,D.fB_,D.fFk,D.fC5,D.fJn,D.fGb,D.die,D.fwp,D.eGQ,D.eHK,D.eHL,D.eHD,D.eGT,D.eGV,D.eGW,D.eHj,D.eHA,D.eGZ,D.eH0,D.eGN,D.eGO,D.eHm,D.eGY,D.eHi,D.eHf,D.eHh,D.eH1,D.eH9,D.eH2,D.eH3,D.eH4,D.eH5,D.eH6,D.eH7,D.eH8,D.eHq,D.eHs,D.eHt,D.eHu,D.eHx,D.eGI,D.duO,D.duP,D.duM,D.duK,D.duL,D.duE,D.duF])
w(A.hR,[D.eGe,D.eGm,D.eGp,D.eGd,D.eGv,D.eGw,D.eGy,D.eGz,D.eGr,D.eGs,D.eGF,D.eGC,D.eGD,D.eG4,D.eG6,D.eGA,D.eGh,D.eGf,D.eG9,D.eG8,D.eGa,D.eG7,D.eG2,D.eGb,D.eG0,D.eG_,D.cWV,D.cWY,D.cWX,D.cWW,D.did,D.eHI,D.eHH,D.eHJ,D.eHG,D.eHa,D.eHl,D.eGU,D.eGS,D.eGR,D.eHk,D.eHc,D.eH_,D.eGM,D.eGP,D.eHE,D.eHF,D.eGX,D.eHe,D.eHd,D.eHg,D.eHv,D.eHp,D.eHw,D.eHo,D.eHn,D.eHy,D.eGJ,D.eGH,D.eGK,D.eGL,D.duJ,D.duA,D.duG,D.duH,D.duI,D.duB])
w(A.ie,[D.eGq,D.eGu,D.eGk,D.eGj,D.eGo,D.cX3,D.cX5,D.fGc,D.eHb,D.eHB,D.eHr,D.eHz,D.duN,D.duC,D.duD])
w(A.lK,[D.ben,D.aKE])
w(A.aE,[D.z3,D.a1x,D.cC,D.uv,D.a_A])
v(D.aHl,D.aPj)
x(D.aPj,A.cg)})()
A.i0(b.typeUniverse,JSON.parse('{"atR":{"af":[],"w":[]},"adH":{"af":[],"w":[]},"aCv":{"af":[],"w":[]},"XF":{"af":[],"w":[]},"a0B":{"af":[],"w":[]},"aHj":{"ah":["atR"]},"bem":{"ah":["adH"]},"ben":{"aC":[]},"aKE":{"aC":[]},"bhT":{"ah":["aCv"]},"aHl":{"ah":["XF"]},"bl3":{"ah":["a0B"]}}'))
var y=(function rtii(){var x=A.ar
return{c:x("kS<u?>"),D:x("EC"),V:x("N<aa>"),O:x("N<u>"),t:x("N<a9<m,@>>"),v:x("N<fX>"),L:x("N<+(m,m)>"),s:x("N<m>"),p:x("N<w>"),r:x("N<cC>"),n:x("N<G>"),X:x("N<F>"),W:x("bu<m,F>"),a:x("bu<F,F>"),P:x("a9<m,@>"),f:x("a9<@,@>"),b:x("cm"),R:x("+at,from,to(V,m,m)"),N:x("m"),E:x("X<uv>"),q:x("kx"),y:x("P"),z:x("@"),S:x("F"),g:x("ai<@>?"),Y:x("a9<@,@>?"),H:x("~")}})();(function constants(){var x=a.makeConstList
C.dN=new A.u(1,0.12156862745098039,0.7490196078431373,0.592156862745098,B.q)
C.b5o=new A.kS(C.dN,y.c)
C.kY=new A.u(1,0.08627450980392157,0.10588235294117647,0.1803921568627451,B.q)
C.dg=new A.u(1,0.5411764705882353,0.5607843137254902,0.6392156862745098,B.q)
C.yI=new A.u(1,0.0392156862745098,0.050980392156862744,0.09411764705882353,B.q)
C.yK=new A.u(1,0.9294117647058824,0.9372549019607843,0.9803921568627451,B.q)
C.dh=new A.u(1,0.5529411764705883,0.5843137254901961,0.6705882352941176,B.q)
C.l_=new A.u(1,0.08627450980392157,0.09019607843137255,0.11372549019607843,B.q)
C.qB=new A.u(1,0.14901960784313725,0.17647058823529413,0.27058823529411763,B.q)
C.qE=new A.u(1,0.9058823529411765,0.9098039215686274,0.9411764705882353,B.q)
C.a_q=new A.u(1,0.06666666666666667,0.08235294117647059,0.1607843137254902,B.q)
C.GT=new A.u(1,0.12549019607843137,0.14901960784313725,0.23137254901960785,B.q)
C.a_A=new A.u(1,0.9725490196078431,0.9450980392156862,0.9490196078431372,B.q)
C.uS=new A.u(1,0.13725490196078433,0.16470588235294117,0.25882352941176473,B.q)
C.H3=new A.u(1,0.9372549019607843,0.9411764705882353,0.9607843137254902,B.q)
C.dC=new A.u(1,0.07058823529411765,0.0784313725490196,0.10980392156862745,B.q)
C.es=new A.u(1,0.9411764705882353,0.33725490196078434,0.41568627450980394,B.q)
C.CF=new A.u(1,0.9568627450980393,0.9607843137254902,0.9803921568627451,B.q)
C.CH=new A.u(1,0.11372549019607843,0.13725490196078433,0.2196078431372549,B.q)
C.bEy=new A.R(0,0,0,7)
C.bGa=new A.R(12,8,12,6)
C.bGk=new A.R(13,7,13,7)
C.bH9=new A.R(16,10,16,30)
C.bHv=new A.R(16,4,16,40)
C.bHy=new A.R(16,6,16,16)
C.aoc=new A.R(16,6,16,40)
C.bHG=new A.R(16,8,16,40)
C.bKr=new A.R(4,0,4,8)
C.bKK=new A.R(4,6,4,14)
C.bKX=new A.R(6,0,6,14)
C.ari=new A.a_(62840,"MaterialIcons",!1)
C.bVQ=new A.a_(983325,"MaterialIcons",!1)
C.asv=new A.a_(983635,"MaterialIcons",!0)
C.asg=new A.a_(983372,"MaterialIcons",!1)
C.bXp=new A.ae(C.asg,18,C.dN,null,null,null)
C.bXR=new A.ae(B.xe,16,null,null,null,null)
C.c_V=new A.ae(B.r5,7,C.dN,null,null,null)
C.c0C=new A.ae(B.ea,18,C.dN,null,null,null)
C.c0S=new A.ae(B.rd,20,B.c,null,null,null)
C.c20=new A.ae(B.he,16,B.c,null,null,null)
C.c36=new A.ae(B.xe,18,null,null,null,null)
C.c59=new A.ae(B.QI,18,null,null,null,null)
C.c5d=new A.ae(B.xh,null,C.es,null,null,null)
C.c6B=new A.ae(B.Qg,18,C.es,null,null,null)
C.cNZ=x([B.dz,B.fw,B.i0],y.O)
C.caB=new A.a7(B.ay,B.aC,B.x,C.cNZ,null,null)
C.aCK=x([C.es,B.au,C.dN],y.O)
C.caC=new A.a7(B.a5,B.a9,B.x,C.aCK,null,null)
C.cbb=new A.a7(B.a5,B.a9,B.x,C.aCK,B.m6,null)
C.dqK=x([B.dz,B.i0,B.bB],y.O)
C.cef=new A.a7(B.ay,B.aC,B.x,C.dqK,null,null)
C.dt4=x([B.i0,B.bB],y.O)
C.ceD=new A.a7(B.a5,B.a9,B.x,C.dt4,null,null)
C.co8=x([12,24,48],y.X)
C.d6i=x(["All","Forex","Stocks","Crypto"],y.s)
C.aCd=x(["ENTER","SKIP_WEAK","WAIT_LATE"],y.s)
C.dcw=x(["Which market looks strongest right now?","Is Bitcoin going up or down right now?","Why has the agent not bought yet?","Explain RSI like I am new","How do I know when to sell?","What does bullish and bearish mean?"],y.s)
C.f8_=new A.y("The idea","Trading means buying something and selling it later. You make money when you sell for more than you paid, and you lose money when you sell for less. That is all a trade is.")
C.f_C=new A.y("Why prices move","Every price is set by buyers and sellers. When more people want to buy than sell, the price goes up. When more want to sell, it goes down. A chart is simply a picture of that tug of war over time.")
C.f0z=new A.y("Nobody knows the future","No person, app or AI can know for sure where a price goes next. Good traders do not guess. They follow clear rules, keep losses small, and let the winners pay for the losers.")
C.f7I=new A.y("Why pretend money first","This agent uses Alpaca paper money: real prices, fake dollars. You can learn every step, make mistakes and see real results without risking a cent. Professionals practise this way too.")
C.cZw=x([C.f8_,C.f_C,C.f0z,C.f7I],y.L)
C.daM=x(["When you buy","When you sell for more than you paid","When the market opens"],y.s)
C.b3o=new D.cC("When do you make money on a trade?",C.daM,1,"Profit only exists after you sell higher than you bought.")
C.d57=x(["More buyers than sellers","The app","The time of day"],y.s)
C.b3j=new D.cC("What makes a price go up?",C.d57,0,"More people wanting to buy pushes the price up.")
C.dyM=x([C.b3o,C.b3j],y.r)
C.hNN=new D.uv("basics","What trading really is","Buyers, sellers and why prices move",4,N.l8,B.au,"basics",C.cZw,C.dyM)
C.bWs=new A.a_(983780,"MaterialIcons",!1)
C.eRj=new A.y("One candle = one time slice","On this chart every candle is 5 minutes. It shows four prices: where it started (open), where it ended (close), the highest point (high) and the lowest point (low).")
C.eYY=new A.y("The colours","Green candle: the price closed HIGHER than it opened, buyers won those 5 minutes. Yellow candle: it closed LOWER, sellers won. Many apps use red instead of yellow, it means the same thing.")
C.f9c=new A.y("Body and wicks","The thick part (the body) runs from open to close. The thin lines (the wicks) show how far the price went up or down before coming back. A long wick on top means buyers pushed up but sellers pushed it back down.")
C.f6h=new A.y("Reading a row of candles","Several green candles in a row, each closing higher, show buyers in control. Many yellow ones closing lower show sellers in control. Candles that go up and down with no direction mean the market is undecided.")
C.cfJ=x([C.eRj,C.eYY,C.f9c,C.f6h],y.L)
C.daT=x(["It closed higher than it opened","It is a good time to buy","The market is closed"],y.s)
C.b3m=new D.cC("A green candle means...",C.daT,0,"Colour only tells you if it closed above or below where it opened.")
C.cGE=x(["1 day","5 minutes","1 hour"],y.s)
C.b3b=new D.cC("On this chart one candle covers...",C.cGE,1,"The agent works with 5-minute candles.")
C.dhc=x([C.b3m,C.b3b],y.r)
C.hNR=new D.uv("candles","Reading candles","Open, close, high and low in one shape",5,C.bWs,C.dN,"candles",C.cfJ,C.dhc)
C.f1F=new A.y("Bullish","An uptrend. The price makes higher highs and higher lows, like climbing stairs. Buyers are in control. Traders call this bullish (a bull attacks upward with its horns).")
C.fa7=new A.y("Bearish","A downtrend. Lower highs and lower lows, like walking down stairs. Sellers are in control. This is bearish (a bear swipes downward).")
C.eSA=new A.y("Sideways","The price bounces between a ceiling and a floor with no clear direction. Most trading signals fail here, so the best move is often to wait.")
C.f4r=new A.y("The golden rule","Trade WITH the trend, not against it. Buying in a downtrend because it looks cheap is how most beginners lose. The agent only buys when the trend turns up.")
C.d8V=x([C.f1F,C.fa7,C.eSA,C.f4r],y.L)
C.d71=x(["Bearish","Bullish","Sideways"],y.s)
C.b3n=new D.cC("Higher highs and higher lows means...",C.d71,1,"Climbing stairs = uptrend = bullish.")
C.db3=x(["Work best","Often fail","Are always right"],y.s)
C.b3g=new D.cC("In a sideways market, signals...",C.db3,1,"With no direction, signals flip back and forth.")
C.dzi=x([C.b3n,C.b3g],y.r)
C.hNK=new D.uv("trend","Trends: up, down, sideways","Bullish, bearish and how to tell",5,B.nf,B.ce,"trend",C.d8V,C.dzi)
C.fb8=new A.y("What an average line is","A moving average is the average closing price of the last few candles, drawn as a smooth line. It hides the small wiggles so you can see the real direction.")
C.eQt=new A.y("Fast line (pink)","The average of the last 9 candles, about 45 minutes. It reacts quickly to new moves.")
C.eS5=new A.y("Slow line (purple)","The average of the last 21 candles, about 1 hour 45 minutes. It moves slowly and shows the bigger direction.")
C.f2H=new A.y("How to read them","Fast line ABOVE slow line: recent prices are higher than older ones, the trend is up. Fast line BELOW: the trend is down. When the price itself is above both lines, buyers are strong.")
C.dsC=x([C.fb8,C.eQt,C.eS5,C.f2H],y.L)
C.dIc=x(["45 minutes","1 day","1 week"],y.s)
C.b3p=new D.cC("The pink fast line averages about...",C.dIc,0,"9 candles x 5 minutes = 45 minutes.")
C.dDJ=x(["Trend is up","Trend is down","Market closed"],y.s)
C.b3i=new D.cC("Fast line above slow line means...",C.dDJ,0,"Recent prices are higher than older prices.")
C.doo=x([C.b3p,C.b3i],y.r)
C.hNL=new D.uv("ma","Moving averages","The pink fast line and the purple slow line",6,I.xm,B.bB,"ma",C.dsC,C.doo)
C.f2Q=new A.y("Buy signal","When the fast line crosses UP through the slow line, the short-term trend has just turned up. That moment is the buy signal. The agent buys at that point ($100: one SPY call option on weekdays, Bitcoin on weekends), but only if the big trend is rising too.")
C.f_L=new A.y("Sell signal","When the fast line crosses back DOWN through the slow line, the up move is over. That is the sell signal, and the agent closes the trade.")
C.f4C=new A.y("Why it must be fresh","If the cross happened an hour ago, the easy part of the move may be gone. Buying late means buying high. So the agent only acts on a cross that happened since its last check, never on an old one.")
C.f6A=new A.y("The weakness","In sideways markets the lines cross back and forth and give false signals. That is why every trade also has a stop loss: when a signal is wrong, the loss stays small.")
C.cGo=x([C.f2Q,C.f_L,C.f4C,C.f6A],y.L)
C.duP=x(["Crosses above the slow line","Crosses below the slow line","Is flat"],y.s)
C.b3h=new D.cC("The buy signal is when the fast line...",C.duP,0,"Crossing up = trend turning up.")
C.dH7=x(["To avoid buying late","The app is slow","Old crosses are illegal"],y.s)
C.b39=new D.cC("Why does the agent skip old crosses?",C.dH7,0,"A late entry means buying after most of the move.")
C.d5e=x([C.b3h,C.b39],y.r)
C.hNS=new D.uv("cross","The crossover signal","Exactly when the agent buys and sells",6,B.aro,B.b2,"cross",C.cGo,C.d5e)
C.bVZ=new A.a_(983477,"MaterialIcons",!1)
C.f4a=new A.y("What RSI measures","RSI (Relative Strength Index) compares the size of recent rises with recent falls and gives a number from 0 to 100. Above 50, rises have been bigger. Below 50, falls have been bigger.")
C.eUh=new A.y("Above 70: stretched","The price rose very fast. It is called overbought. It often pauses or pulls back, so buying right then is risky. It can still keep rising in a strong trend.")
C.f4h=new A.y("Below 30: oversold","The price fell very fast. It often bounces, but in a strong downtrend it can stay low. Oversold is not a reason to buy on its own.")
C.f3q=new A.y("How to use it","Use RSI as a second opinion. A buy signal with RSI between 50 and 70 is healthy. A buy signal with RSI above 75 means the move may already be tired.")
C.d5D=x([C.f4a,C.eUh,C.f4h,C.f3q],y.L)
C.dh3=x(["Oversold","Overbought","Neutral"],y.s)
C.b38=new D.cC("RSI above 70 is called...",C.dh3,1,"It rose fast and is stretched.")
C.b3l=new D.cC("RSI below 30 always means buy.",L.Ta,1,"Falling markets can stay oversold. It is a hint, not a signal.")
C.dI4=x([C.b38,C.b3l],y.r)
C.hNQ=new D.uv("rsi","RSI: momentum","Is the move strong, stretched or tired?",5,C.bVZ,B.cC,"rsi",C.d5D,C.dI4)
C.eVI=new A.y("Decide the exit before you enter","Every agent trade has two exits set before it starts, in dollars: take profit when the trade is up $50, stop loss when it is down $50.")
C.eYS=new A.y("Win the same as you risk","The win (+$50) is the same size as the loss (-$50). So every win cancels one loss: winning 5 out of 10 trades breaks even. More than 5 out of 10 is profit, fewer is a loss. The win rate on the agent screen shows which side it is on.")
C.eLo=new A.y("Size matters most","The agent uses $100 per trade even though the paper account has $100,000. Small trades mean no single mistake can hurt much. Pros rarely risk more than 1 to 2 percent of their money on one trade.")
C.f10=new A.y("Never move the stop","The biggest beginner mistake is hoping a losing trade comes back and moving the stop lower. Small losses are the cost of doing business. Big losses end accounts.")
C.dC8=x([C.eVI,C.eYS,C.eLo,C.f10],y.L)
C.csI=x(["5 in 10 trades","9 in 10 trades","Every trade"],y.s)
C.b3e=new D.cC("With +$50 wins and -$50 losses, to break even you must win about...",C.csI,0,"Each win (+50) cancels one loss (-50).")
C.dfB=x(["Move the stop lower","Let the stop loss work","Buy more"],y.s)
C.b3c=new D.cC("A trade is losing. The best move is...",C.dfB,1,"The stop exists to keep losses small.")
C.dlh=x([C.b3e,C.b3c],y.r)
C.hNJ=new D.uv("risk","Risk: stop loss and take profit","Why small losses beat big wins",7,B.re,C.es,"risk",C.dC8,C.dlh)
C.bWy=new A.a_(983848,"MaterialIcons",!1)
C.eUT=new A.y("Bad days happen","Some days every signal fails. The danger is trying to win it back by trading more and bigger. That is called revenge trading and it is how small losses become big ones.")
C.f05=new A.y("Daily stop: $50","If the day loses $50, the agent makes no more buys until tomorrow. It walks away and lets the market calm down.")
C.f7g=new A.y("Total brake: $100","If total losses reach $100, the agent pauses completely until you review what happened and turn it back on. Reviewing is the most important part of learning.")
C.eTh=new A.y("Your own rules","When you trade yourself, set the same kind of limits before the day starts, and keep them even when it hurts.")
C.dhv=x([C.eUT,C.f05,C.f7g,C.eTh],y.L)
C.dke=x(["Doubles the next trade","Stops buying for the day","Sells everything forever"],y.s)
C.b3d=new D.cC("After losing $50 in a day, the agent...",C.dke,1,"The daily stop prevents revenge trading.")
C.dhd=x([C.b3d],y.r)
C.hNM=new D.uv("brakes","Daily stop and total brake","Protecting your account from bad days",4,C.bWy,E.jQ,"brakes",C.dhv,C.dhd)
C.aj6=new A.u(1,0.3843137254901961,0.49411764705882355,0.9176470588235294,B.q)
C.eZQ=new A.y("Stocks and funds","SPY, QQQ, Apple, Microsoft, Nvidia, Tesla and Amazon trade on US market days from 9:30 AM to 4:00 PM Eastern Time. Closed at night, on weekends and on holidays.")
C.f_I=new A.y("Overnight gaps","News can come out while the stock market is closed, so the next morning it can open far higher or lower. That is why the agent sells stocks by 3:55 PM and never holds them overnight.")
C.eXN=new A.y("Crypto","Bitcoin, Ethereum and Solana trade all day, every day, including weekends. More hours means more chances, but crypto also moves faster and harder, so stops get hit more often.")
C.f62=new A.y("Funds vs single companies","SPY holds the 500 biggest US companies and QQQ holds 100 big tech companies, so they move more calmly. One company like Tesla can jump a lot on its own news.")
C.cTo=x([C.eZQ,C.f_I,C.eXN,C.f62],y.L)
C.d8U=x(["Only weekdays","All day, every day","Only at night"],y.s)
C.b3k=new D.cC("When can Bitcoin be traded?",C.d8U,1,"Crypto never closes.")
C.d5S=x(["To avoid overnight gaps","Stocks expire","It is the law"],y.s)
C.b3a=new D.cC("Why sell stocks before the close?",C.d5S,0,"Overnight news can make the price jump at the open.")
C.dpq=x([C.b3k,C.b3a],y.r)
C.hNP=new D.uv("hours","Stocks vs crypto","Market hours, weekends and jumpiness",5,B.jX,C.aj6,"hours",C.cTo,C.dpq)
C.f4D=new A.y("Judge many trades, not one","One trade tells you nothing. Luck decides single trades. After 20 to 50 trades you start to see if a method really works. That is why the plan is 2 to 4 weeks of paper trading.")
C.ePO=new A.y("Keep a journal","For each trade write: why you bought, where your stop and target were, what happened, and what you learned. The Pretend trades list on the main screen is the agent's journal.")
C.eQm=new A.y("Follow the rules exactly","The point of the agent is to follow rules perfectly, with no fear and no greed. Check that it did. If it ever breaks a rule, that is a bug to fix before real money.")
C.eXO=new A.y("Before real money","Real money comes only after a long paper test with a positive result, a full review, and money you can truly afford to lose. Never borrow to trade.")
C.dxW=x([C.f4D,C.ePO,C.eQm,C.eXO],y.L)
C.dEE=x(["1","3","20 or more"],y.s)
C.b37=new D.cC("How many trades before judging a method?",C.dEE,2,"Small samples are mostly luck.")
C.dHC=x(["Borrowed","Money you can afford to lose","Rent money"],y.s)
C.b3f=new D.cC("Money for trading should be...",C.dHC,1,"Never trade money you need.")
C.dI_=x([C.b37,C.b3f],y.r)
C.hNO=new D.uv("practice","Practising like a pro","Journals, patience and judging results",5,B.m1,B.bi,"practice",C.dxW,C.dI_)
C.Eg=x([C.hNN,C.hNR,C.hNK,C.hNL,C.hNS,C.hNQ,C.hNJ,C.hNM,C.hNP,C.hNO],A.ar("N<uv>"))
C.eul={basics:0,candles:1,trend:2,ma:3,cross:4,rsi:5,risk:6,brakes:7,hours:8,practice:9}
C.dbF=x(["A $4 profit","A $4 loss","Nothing"],y.s)
C.hRP=new D.cC("You buy at $100 and sell at $96. What happened?",C.dbF,1,"Selling lower than you bought is a loss.")
C.duN=x(["The future price","How the price moved over time","Who is buying"],y.s)
C.hRN=new D.cC("What does a price chart show?",C.duN,1,"A chart is a record of past prices.")
C.dGi=x(["Yes, experts can","Yes, an AI can","No, nobody can"],y.s)
C.hRW=new D.cC("Can anyone know for sure where a price goes next?",C.dGi,2,"Markets are uncertain; rules and stops manage that.")
C.ddG=x(["Trading with real prices and pretend money","Trading newspapers","Trading on paper forms"],y.s)
C.hSp=new D.cC("What is paper trading?",C.ddG,0,"Real prices, fake dollars: practice without risk.")
C.dxZ=x(["It is faster","To learn without risking real money","Pretend money earns more"],y.s)
C.hRS=new D.cC("Why practise with pretend money first?",C.dxZ,1,"Mistakes cost nothing while you learn.")
C.csC=x(["Rise","Fall","Stay frozen"],y.s)
C.hRX=new D.cC("More people want to sell than buy. The price will most likely...",C.csC,1,"Selling pressure pushes prices down.")
C.dgS=x(["Clear rules and small losses","Lucky guesses","Tips from friends"],y.s)
C.hTs=new D.cC("Good traders mostly rely on...",C.dgS,0,"Rules and risk control beat guessing.")
C.ceL=x(["$45","$55","$60"],y.s)
C.hSW=new D.cC("You buy $50 of something and it rises 10%. It is now worth...",C.ceL,1,"10% of $50 is $5, so $55.")
C.cY5=x(["Buy","Sell","Look at the chart"],y.s)
C.hSe=new D.cC("A trade is only finished when you...",C.cY5,1,"Until you sell, a gain or loss is not locked in.")
C.dFw=x(["Good traders never lose","Every trader has losing trades","Losses only happen to beginners"],y.s)
C.hS9=new D.cC("Which is true about losses?",C.dFw,1,"Losing trades are normal; keeping them small is the skill.")
C.cQZ=x(["Real dollars are spent","No real money is at risk","It trades in secret"],y.s)
C.hT3=new D.cC("The agent uses Alpaca paper money. That means...",C.cQZ,1,"Paper accounts use fake dollars.")
C.dqt=x(["The government","Buyers and sellers agreeing","The app makers"],y.s)
C.hRM=new D.cC("A price is set by...",C.dqt,1,"Each trade is a buyer and seller agreeing on a price.")
C.def=x([C.b3o,C.b3j,C.hRP,C.hRN,C.hRW,C.hSp,C.hRS,C.hRX,C.hTs,C.hSW,C.hSe,C.hS9,C.hT3,C.hRM],y.r)
C.dax=x(["It closed lower than it opened","It closed higher","Nothing traded"],y.s)
C.hTd=new D.cC("A yellow (or red) candle means...",C.dax,0,"Sellers won that time slice.")
C.deS=x(["Wick","Body","Tail light"],y.s)
C.hRZ=new D.cC("The thick part of a candle is called the...",C.deS,1,"The body runs from open to close.")
C.dnq=x(["Wicks","Bodies","Averages"],y.s)
C.hSK=new D.cC("The thin lines above and below are the...",C.dnq,0,"Wicks show the high and the low.")
C.dej=x(["Open","Close","Highest price"],y.s)
C.hT5=new D.cC("The top of the upper wick shows the...",C.dej,2,"The tip of the upper wick is the high.")
C.dIr=x(["Lowest price","Open","Average"],y.s)
C.hTm=new D.cC("The bottom of the lower wick shows the...",C.dIr,0,"The tip of the lower wick is the low.")
C.dh_=x(["One","Two","Four"],y.s)
C.hSX=new D.cC("How many prices does one candle show?",C.dh_,2,"Open, high, low and close.")
C.dsn=x(["Buyers pushed up but sellers pushed it back down","The price never moved","The market closed early"],y.s)
C.hSZ=new D.cC("A long upper wick means...",C.dsn,0,"The price went high, then fell back before the close.")
C.d5n=x(["Sellers in control","Buyers in control","No direction"],y.s)
C.hSG=new D.cC("Many green candles in a row, each closing higher, show...",C.d5n,1,"Rising closes mean buyers are winning.")
C.d53=x(["A strong uptrend","The market is undecided","A crash"],y.s)
C.hTb=new D.cC("Candles going up and down with no direction mean...",C.d53,1,"Mixed candles show indecision.")
C.daV=x(["Green","Yellow","Grey"],y.s)
C.hSV=new D.cC("A candle opened at 10 and closed at 12. Its colour here is...",C.daV,0,"It closed above the open.")
C.dJ2=x(["5 candles","12 candles","60 candles"],y.s)
C.hS0=new D.cC("In 1 hour of 5-minute candles there are...",C.dJ2,1,"60 minutes divided by 5 is 12.")
C.dr7=x(["The first price in that time","The last price in that time","The highest price"],y.s)
C.hTu=new D.cC('The "close" of a candle is...',C.dr7,1,"Close is where the price ended.")
C.dyb=x([C.b3m,C.b3b,C.hTd,C.hRZ,C.hSK,C.hT5,C.hTm,C.hSX,C.hSZ,C.hSG,C.hTb,C.hSV,C.hS0,C.hTu],y.r)
C.d7g=x(["Bullish","Bearish","Sideways"],y.s)
C.hT7=new D.cC("Lower highs and lower lows means...",C.d7g,1,"Walking down stairs = downtrend = bearish.")
C.dmR=x(["Rise","Fall","Stay the same"],y.s)
C.hTz=new D.cC('"Bullish" means you expect prices to...',C.dmR,0,"A bull attacks upward.")
C.djl=x(["Rise","Fall","Double"],y.s)
C.hTx=new D.cC('"Bearish" means you expect prices to...',C.djl,1,"A bear swipes downward.")
C.dn0=x(["Trade against the trend","Trade with the trend","Ignore the trend"],y.s)
C.hSO=new D.cC("The golden rule of trends is...",C.dn0,1,"Going with the trend wins more often.")
C.d8I=x(["A safe plan","A common beginner mistake","What the agent does"],y.s)
C.hTg=new D.cC("Buying in a downtrend because it looks cheap is...",C.d8I,1,"Cheap can get cheaper.")
C.djP=x(["Sideways","Bullish","Bearish"],y.s)
C.hSi=new D.cC("A price bouncing between a ceiling and a floor is...",C.djP,0,"No higher highs or lower lows: sideways.")
C.dBr=x(["Trade a lot","Wait","Borrow money"],y.s)
C.hSx=new D.cC("In a sideways market the best move is often to...",C.dBr,1,"Patience avoids false signals.")
C.dlF=x(["Up","Down","Flat"],y.s)
C.hSA=new D.cC("When sellers are in control, the trend is...",C.dlF,1,"Sellers push prices down.")
C.dlC=x(["Stairs going up","Stairs going down","A flat road"],y.s)
C.hRO=new D.cC("Which picture fits an uptrend?",C.dlC,0,"Each step a bit higher.")
C.dBd=x(["Turns down","Turns up","Is sideways"],y.s)
C.hST=new D.cC("The agent only buys when the trend...",C.dBd,1,"It buys the start of up moves.")
C.dzB=x(["Getting lower","Getting higher","Gone"],y.s)
C.hS4=new D.cC("A trend changes from bearish to bullish. Lows are now...",C.dzB,1,"Higher lows are the first sign of an uptrend.")
C.dqR=x(["Strong uptrend","Strong downtrend","Sideways"],y.s)
C.hT1=new D.cC("Most trading signals fail in which market?",C.dqR,2,"Without direction, signals flip constantly.")
C.d8G=x([C.b3n,C.b3g,C.hT7,C.hTz,C.hTx,C.hSO,C.hTg,C.hSi,C.hSx,C.hSA,C.hRO,C.hST,C.hS4,C.hT1],y.r)
C.dgR=x(["The average closing price of recent candles","The highest price ever","A news feed"],y.s)
C.hTn=new D.cC("A moving average is...",C.dgR,0,"It smooths prices into a line.")
C.dGX=x(["To hide small wiggles and show direction","To predict news","To make charts colourful"],y.s)
C.hTo=new D.cC("Why use a moving average?",C.dGX,0,"It filters noise.")
C.ddm=x(["9","21","100"],y.s)
C.hSL=new D.cC("The purple slow line averages how many candles?",C.ddm,1,"21 candles, about 1 hour 45 minutes.")
C.drc=x(["The fast (pink) line","The slow (purple) line","Both the same"],y.s)
C.hSN=new D.cC("Which line reacts faster to new moves?",C.drc,0,"Fewer candles means quicker reaction.")
C.dHc=x(["Trend is up","Trend is down","Buy now"],y.s)
C.hSy=new D.cC("Fast line below slow line means...",C.dHc,1,"Recent prices are lower than older ones.")
C.d9i=x(["Buyers are strong","Sellers are strong","Nothing"],y.s)
C.hRR=new D.cC("The price is above both lines. That shows...",C.d9i,0,"Price above its averages = strength.")
C.d5c=x(["The bigger direction","Only the last candle","Tomorrow price"],y.s)
C.hT6=new D.cC("The slow line shows...",C.d5c,0,"It changes slowly and shows the wider trend.")
C.d1x=x(["15 minutes","1 hour 45 minutes","1 week"],y.s)
C.hS8=new D.cC("The slow line covers about...",C.d1x,1,"21 x 5 minutes = 105 minutes.")
C.coi=x(["Past prices","Future prices","Opinions"],y.s)
C.hTc=new D.cC("Moving averages are based on...",C.coi,0,"They average prices that already happened.")
C.d5B=x(["Lag behind the price","Lead the price","Never move"],y.s)
C.hTp=new D.cC("Because they use past prices, moving averages...",C.d5B,0,"Averages are always a little late.")
C.dq6=x(["A bullish picture","A bearish picture","A closed market"],y.s)
C.hSz=new D.cC("Both lines pointing up and the price above them is...",C.dq6,0,"Everything points up.")
C.dfA=x(["Trending strongly","Sideways","Crashing"],y.s)
C.hTy=new D.cC("When the two lines are tangled together, the market is often...",C.dfA,1,"Tangled lines mean no clear direction.")
C.dAZ=x([C.b3p,C.b3i,C.hTn,C.hTo,C.hSL,C.hSN,C.hSy,C.hRR,C.hT6,C.hS8,C.hTc,C.hTp,C.hSz,C.hTy],y.r)
C.dgP=x(["Crosses below the slow line","Crosses above the slow line","Touches the price"],y.s)
C.hRL=new D.cC("The sell signal is when the fast line...",C.dgP,0,"Crossing down = the up move is over.")
C.dGf=x(["About $100","$5,000","All the money"],y.s)
C.hSB=new D.cC("How much does the agent put into one trade?",C.dGf,0,"Every pretend trade is about $100: one SPY call option (up to $120) on weekdays, $100 of Bitcoin on weekends.")
C.dAS=x(["A fresh signal","An old signal","Not a signal at all ever"],y.s)
C.hTh=new D.cC("A cross that happened an hour ago is...",C.dAS,1,"Fresh means since the last check.")
C.csL=x(["Sideways markets","Strong trends","Closed markets"],y.s)
C.hTl=new D.cC("Crossovers give many false signals in...",C.csL,0,"Lines cross back and forth with no direction.")
C.dpf=x(["The stop loss","Buying more","Ignoring it"],y.s)
C.hS7=new D.cC("What protects you when a signal is wrong?",C.dpf,0,"The stop keeps the loss small.")
C.dj6=x(["Just changed direction","Ended forever","Doubled"],y.s)
C.hTv=new D.cC("The crossover tells you the short-term trend has...",C.dj6,0,"A cross marks a turn.")
C.ddr=x(["1 second","15 minutes","1 day"],y.s)
C.hRY=new D.cC("The agent checks for crosses every...",C.ddr,1,"The automatic check runs every 15 minutes.")
C.d6F=x(["Buying higher, with less room to rise","A guaranteed win","A cheaper price"],y.s)
C.hS1=new D.cC("Buying late in a move usually means...",C.d6F,0,"Most of the move is already gone.")
C.duk=x(["Trust it more","Trust it less","Bet bigger"],y.s)
C.hTf=new D.cC("If a signal fails often on one market, you should...",C.duk,1,"Check how often it worked before trusting it.")
C.d6z=x(["Buys more","Sells","Waits a week"],y.s)
C.hSY=new D.cC("When the agent holds a trade and the fast line crosses down, it...",C.d6z,1,"The sell signal closes the trade.")
C.cNU=x(["Yes","No","Only on Fridays"],y.s)
C.hSD=new D.cC("Does a buy signal guarantee the price will rise?",C.cNU,1,"Signals improve the odds; they never guarantee.")
C.da9=x(["Holds no other position","Already holds three","Has lost $100"],y.s)
C.hTE=new D.cC("The agent buys on a signal only if it...",C.da9,0,"One position at a time.")
C.dAb=x([C.b3h,C.b39,C.hRL,C.hSB,C.hTh,C.hTl,C.hS7,C.hTv,C.hRY,C.hS1,C.hTf,C.hSY,C.hSD,C.hTE],y.r)
C.dlr=x(["0 to 100","1 to 10","-50 to 50"],y.s)
C.hTj=new D.cC("RSI is a number from...",C.dlr,0,"It always sits between 0 and 100.")
C.dwn=x(["Rises were bigger than falls","Falls were bigger than rises","Nothing moved"],y.s)
C.hSv=new D.cC("RSI above 50 means recent...",C.dwn,0,"Above 50 = buyers stronger lately.")
C.dh2=x(["Overbought","Oversold","Balanced"],y.s)
C.hSF=new D.cC("RSI below 30 is called...",C.dh2,1,"It fell fast and is stretched downward.")
C.du_=x(["Momentum: strength of recent moves","The company profit","Trading volume"],y.s)
C.hSQ=new D.cC("RSI measures...",C.du_,0,"It compares gains with losses.")
C.d6m=x(["Healthy","Very stretched","Impossible"],y.s)
C.hSg=new D.cC("A buy signal with RSI 60 is...",C.d6m,0,"Between 50 and 70 is healthy strength.")
C.de1=x(["Just starting","Tired and stretched","Guaranteed"],y.s)
C.hRT=new D.cC("A buy signal with RSI 80 means the move may be...",C.de1,1,"Very high RSI often comes before a pause.")
C.dl5=x(["As a second opinion","As the only reason to trade","Never"],y.s)
C.hSn=new D.cC("Best way to use RSI?",C.dl5,0,"Combine it with the trend signal.")
C.dvC=x(["For a while","Never","Only one candle"],y.s)
C.hSP=new D.cC("In a strong uptrend, RSI can stay above 70...",C.dvC,0,"Strong trends can stay overbought.")
C.dqh=x(["Balanced buyers and sellers","Market closed","Crash coming"],y.s)
C.hSR=new D.cC("RSI of 50 means...",C.dqh,0,"50 is the middle.")
C.d9g=x(["Rose very fast","Fell very fast","Did not move"],y.s)
C.hTq=new D.cC("Overbought means prices...",C.d9g,0,"Overbought = rose fast.")
C.cQ4=x(["Stay oversold and keep falling","Only go up","Freeze the market"],y.s)
C.hSq=new D.cC("Oversold in a strong downtrend can...",C.cQ4,0,"Oversold is not a reason to buy on its own.")
C.cMa=x(["Sellers a little stronger","Extreme buying","Extreme selling"],y.s)
C.hSH=new D.cC("RSI 45 suggests...",C.cMa,0,"Just below 50: sellers slightly ahead.")
C.dl3=x([C.b38,C.b3l,C.hTj,C.hSv,C.hSF,C.hSQ,C.hSg,C.hRT,C.hSn,C.hSP,C.hSR,C.hTq,C.hSq,C.hSH],y.r)
C.dIh=x(["When the trade is up $50","When the trade is up $5","Never"],y.s)
C.hTr=new D.cC("The agent take profit is...",C.dIh,0,"It sells when the trade is up $50.")
C.dAv=x(["When the trade is down $50","When the trade is down $500","It has none"],y.s)
C.hT8=new D.cC("The agent stop loss is...",C.dAv,0,"It sells when the trade is down $50.")
C.doX=x(["A planned exit that limits a loss","A way to stop the app","A bonus"],y.s)
C.hS6=new D.cC("A stop loss is...",C.doX,0,"It sells automatically when the loss reaches a set size.")
C.dey=x(["Before entering the trade","After it goes wrong","Never"],y.s)
C.hSf=new D.cC("When should you decide your exits?",C.dey,0,"Plan exits first, while calm.")
C.dkR=x(["So no single mistake hurts much","It is the maximum allowed","To lose faster"],y.s)
C.hSo=new D.cC("Why does the agent use only about $100 per trade?",C.dkR,0,"Small size protects the account.")
C.dHW=x(["1 to 2 percent","50 percent","100 percent"],y.s)
C.hT2=new D.cC("Pros rarely risk more than about ... of their money on one trade.",C.dHW,0,"Small risk per trade keeps them in the game.")
C.diH=x(["$0","+$100","-$100"],y.s)
C.hTe=new D.cC("Win $50 twice and lose $50 twice. Your total is...",C.diH,0,"50 + 50 - 50 - 50 = 0.")
C.dsW=x(["Profitable","Break even","A loss"],y.s)
C.hT9=new D.cC("Winning half the time with 2 to 1 reward to risk is...",C.dsW,0,"Each win is twice each loss.")
C.deG=x(["Turns small losses into big ones","Guarantees a win","Has no effect"],y.s)
C.hSu=new D.cC('Moving your stop lower to "give it room" usually...',C.deG,0,"Hope is not a plan.")
C.d7p=x(["1 to 1","1 to 2","10 to 1"],y.s)
C.hSC=new D.cC("Reward to risk of the agent is...",C.d7p,0,"$50 target vs $50 stop: the same size.")
C.cse=x(["Can end an account","Are rare","Do not matter"],y.s)
C.hTC=new D.cC("Big losses are dangerous because they...",C.cse,0,"A 50% loss needs a 100% gain to recover.")
C.cVv=x(["Selling when the planned gain is reached","Buying more","Holding forever"],y.s)
C.hSm=new D.cC("Take profit means...",C.cVv,0,"It locks in the win.")
C.dcS=x([C.b3e,C.b3c,C.hTr,C.hT8,C.hS6,C.hSf,C.hSo,C.hT2,C.hTe,C.hT9,C.hSu,C.hSC,C.hTC,C.hSm],y.r)
C.dwt=x(["Trading more to win losses back","Taking a break","Following rules"],y.s)
C.hSM=new D.cC("Revenge trading means...",C.dwt,0,"It usually makes losses bigger.")
C.d76=x(["$100 total losses","$25 total losses","Never"],y.s)
C.hSh=new D.cC("The total brake pauses the agent at...",C.d76,0,"$100 total demo losses.")
C.d6G=x(["An admin, after a review","It turns itself on","Nobody ever"],y.s)
C.hSI=new D.cC("Who turns the agent back on after the $100 brake?",C.d6G,0,"A human review comes first.")
C.ceM=x(["$50","$1","$500"],y.s)
C.hS_=new D.cC("The daily stop is...",C.ceM,0,"If the day loses $50, no more buys.")
C.d1D=x(["Stop and reset","Trade bigger","Ignore your limits"],y.s)
C.hTk=new D.cC("Bad days happen. The best response is...",C.d1D,0,"Walking away protects your money.")
C.dnE=x(["Before the day starts","After you lose","Only on weekends"],y.s)
C.hRU=new D.cC("Limits should be set...",C.dnE,0,"Decide limits while calm.")
C.dCO=x(["Reviewing what happened","Forgetting it","Blaming the market"],y.s)
C.hSw=new D.cC("The most important part of learning after a bad run is...",C.dCO,0,"Reviews turn losses into lessons.")
C.cQv=x(["Yes, exits still work","No, it freezes","It buys more instead"],y.s)
C.hT_=new D.cC("After the daily stop, can the agent still sell an open trade?",C.cQv,0,"The stop blocks new buys, not exits.")
C.dHs=x(["Protect the account from bad days","Make more trades","Win every day"],y.s)
C.hSU=new D.cC("Brakes are there to...",C.dHs,0,"They cap the damage.")
C.d8J=x(["Stop trading and rethink","Raise the limits","Borrow money"],y.s)
C.hSs=new D.cC("If you keep breaking your own limits, you should...",C.d8J,0,"Rules only work when kept.")
C.dzI=x(["The next day","Never","Every minute"],y.s)
C.hT0=new D.cC("The daily stop resets...",C.dzI,0,"A new Eastern Time day starts fresh.")
C.dmD=x(["Can lose everything on a bad day","Always wins","Pays no fees"],y.s)
C.hS2=new D.cC("A trader with no loss limits...",C.dmD,0,"Limits are the safety net.")
C.dG6=x(["Pause","Trade faster","Bet bigger"],y.s)
C.hRQ=new D.cC("Feeling angry after a loss is a sign to...",C.dG6,0,"Emotions lead to bad trades.")
C.d92=x([C.b3d,C.hSM,C.hSh,C.hSI,C.hS_,C.hTk,C.hRU,C.hSw,C.hT_,C.hSU,C.hSs,C.hT0,C.hS2,C.hRQ],y.r)
C.daW=x(["9:30 AM to 4:00 PM Eastern","24 hours","8 PM to midnight"],y.s)
C.hSa=new D.cC("US stock market hours are...",C.daW,0,"On market days only.")
C.hS3=new D.cC("Is the US stock market open on Saturday?",M.a77,1,"Weekends are closed.")
C.dFG=x(["A jump between the close and the next open","A break in the chart software","A holiday"],y.s)
C.hSS=new D.cC("An overnight gap is...",C.dFG,0,"News while closed moves the next open.")
C.d1C=x(["Faster and harder","Slower","Exactly the same"],y.s)
C.hSt=new D.cC("Crypto compared with SPY usually moves...",C.d1C,0,"Crypto is more jumpy.")
C.duK=x(["The 500 biggest US companies","One company","Bitcoin"],y.s)
C.hTA=new D.cC("SPY holds...",C.duK,0,"It is a fund of 500 companies.")
C.dJ0=x(["They spread over many companies","They are closed","They are crypto"],y.s)
C.hRK=new D.cC("Why do funds like SPY move more calmly?",C.dJ0,0,"One bad company matters less.")
C.dAV=x(["3:55 PM Eastern","Midnight","Noon"],y.s)
C.hTt=new D.cC("The agent sells stocks by...",C.dAV,0,"Before the 4:00 PM close.")
C.d8K=x(["Sunday 5 PM to Friday 5 PM Eastern","Only 9:30 to 4","Only weekends"],y.s)
C.hSb=new D.cC("Forex (currency pairs) trades...",C.d8K,0,"Real forex is closed on weekends.")
C.de2=x(["The broker itself","The real world market","The government"],y.s)
C.hSl=new D.cC("OTC prices at a broker on weekends come from...",C.de2,0,"They are made by the broker and can differ.")
C.dwJ=x(["Do not trade","Trade double","Trade at night"],y.s)
C.hSJ=new D.cC("On a US market holiday, stocks...",C.dwJ,0,"Holidays are closed days.")
C.cf4=x(["More often","Never","Less often"],y.s)
C.hTw=new D.cC("Because crypto moves fast, stop losses are hit...",C.cf4,0,"Bigger swings reach stops sooner.")
C.dAU=x(["Its own news","Weekend rules","The colour of candles"],y.s)
C.hTi=new D.cC("One company like Tesla can jump a lot because of...",C.dAU,0,"Single stocks react to company news.")
C.dr3=x([C.b3k,C.b3a,C.hSa,C.hS3,C.hSS,C.hSt,C.hTA,C.hRK,C.hTt,C.hSb,C.hSl,C.hSJ,C.hTw,C.hTi],y.r)
C.dfJ=x(["Why you entered, your exits and what happened","Only wins","Nothing"],y.s)
C.hSd=new D.cC("A trading journal records...",C.dfJ,0,"It shows what really works.")
C.hSE=new D.cC("One winning trade proves a method works.",L.Ta,1,"One trade can be pure luck.")
C.dk0=x(["2 to 4 weeks","1 hour","1 day"],y.s)
C.hRV=new D.cC("The plan is to paper trade for...",C.dk0,0,"Enough time for many trades.")
C.doi=x(["A bug to fix before real money","Fine","A bonus"],y.s)
C.hS5=new D.cC("If the agent ever breaks a rule, that is...",C.doi,0,"Rules must be followed exactly.")
C.dtd=x(["A long positive paper test and a full review","One good day","A tip from a friend"],y.s)
C.hTB=new D.cC("Before using real money you need...",C.dtd,0,"Evidence first.")
C.dar=x(["Worse than a coin flip","Excellent","Guaranteed"],y.s)
C.hTa=new D.cC("Signals that worked under 50% of the time are...",C.dar,0,"Do not trust them.")
C.d5M=x(["Never a good idea for beginners","Smart","Required"],y.s)
C.hT4=new D.cC("Borrowing money to trade is...",C.d5M,0,"Borrowed losses still have to be paid.")
C.dcn=x(["The agent journal","An advert","A game"],y.s)
C.hSk=new D.cC("The Pretend trades list on the main screen is...",C.dcn,0,"Every buy and sell is recorded.")
C.dpy=x(["No fear and no greed","Lots of emotion","Random choices"],y.s)
C.hSr=new D.cC("The point of an agent is to follow rules with...",C.dpy,0,"Discipline is its strength.")
C.cU2=x(["+$100","-$100","$0"],y.s)
C.hTD=new D.cC("After 10 trades you have 6 wins at +$50 and 4 losses at -$50. Total?",C.cU2,0,"6 x 50 = 300; 4 x 50 = 200; 300 - 200 = +100.")
C.cYr=x(["Review the trades calmly","Quit forever without looking","Double the size"],y.s)
C.hSc=new D.cC("A losing week means you should...",C.cYr,0,"Reviews find what to fix.")
C.dEn=x(["Patient and disciplined","Lucky","Fast clickers"],y.s)
C.hSj=new D.cC("The best traders are mostly...",C.dEn,0,"Patience and rules win over time.")
C.d9d=x([C.b37,C.b3f,C.hSd,C.hSE,C.hRV,C.hS5,C.hTB,C.hTa,C.hT4,C.hSk,C.hSr,C.hTD,C.hSc,C.hSj],y.r)
C.dLl=new A.bl(C.eul,[C.def,C.dyb,C.d8G,C.dAZ,C.dAb,C.dl3,C.dcS,C.d92,C.dr3,C.d9d],A.ar("bl<m,ai<cC>>"))
C.ewm={EUR:0,USD:1,GBP:2,JPY:3,CAD:4,AUD:5,NZD:6,CHF:7,TRY:8,NOK:9,THB:10}
C.f9U=new A.y("\u20ac",B.dU)
C.faM=new A.y("$",B.eq)
C.eQu=new A.y("\xa3",B.di)
C.eZU=new A.y("\xa5",B.bE)
C.eXP=new A.y("C$",B.hH)
C.f_j=new A.y("A$",B.cU)
C.ePN=new A.y("NZ",B.aw)
C.f36=new A.y("Fr",B.er)
C.f83=new A.y("TL",B.fK)
C.f78=new A.y("kr",B.fV)
C.eUk=new A.y("TH",B.wE)
C.a8t=new A.bl(C.ewm,[C.f9U,C.faM,C.eQu,C.eZU,C.eXP,C.f_j,C.ePN,C.f36,C.f83,C.f78,C.eUk],A.ar("bl<m,+(m,u)>"))
C.c0n=new A.ae(B.r5,5,B.b2,null,null,null)
C.eCV=new A.D(B.hy,C.c0n,null)
C.fcw=new A.b3(1,"Live signals",C.asg)
C.fcE=new A.b3(E.jQ,C.asv,"Moving sideways")
C.fdd=new A.b3(2,"Ask tutor",B.xe)
C.fdv=new A.b3(B.b2,B.oT,"Waiting for data")
C.fef=new A.b3(0,"Lessons",B.o1)
C.fet=new A.b3(C.dN,B.nf,"Trend is UP")
C.ffu=new A.b3(C.es,B.a4O,"Trend is DOWN")
C.fiY=new A.b7([B.zZ,C.dN,"Signal alerts are ON: the market, ENTER UP or DOWN, and the duration, while NGMY is open or in the background.",null])
C.fk9=new A.b7([B.as3,E.jQ,"Signal alerts are unlocked. Allow notifications so the app can tell you when to enter.","Allow"])
C.bZA=new A.ae(B.r5,8,C.dN,null,null,null)
C.fL_=new A.H(!0,C.dN,null,null,null,null,11.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.haD=new A.C("LIVE",null,C.fL_,null,null,null,null,null,null,null,null,null)
C.dvB=x([C.bZA,B.bf,C.haD],y.p)
C.foa=new A.c3(B.aL,B.e,B.M,B.l,null,B.p,null,0,C.dvB,null)
C.c_1=new A.ae(B.rd,14,B.c,null,null,null)
C.hhx=new A.C("Learn",null,B.nq,null,null,null,null,null,null,null,null,null)
C.dac=x([C.c_1,B.d8,C.hhx],y.p)
C.fod=new A.c3(B.aL,B.e,B.M,B.l,null,B.p,null,0,C.dac,null)
C.fF0=new A.H(!0,B.c,null,null,null,null,36,B.F,null,-0.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.fHa=new A.H(!0,F.uG,null,null,null,null,11,B.P,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.fHw=new A.H(!0,B.ab,null,null,null,null,11.5,B.F,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.fJk=new A.H(!0,B.c,null,null,null,null,11,B.u,null,0.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.fJw=new A.H(!0,C.dN,null,null,null,null,11.5,B.P,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.fKW=new A.H(!0,C.es,null,null,null,null,11.5,B.P,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.fOZ=new A.H(!0,C.dN,null,null,null,null,12.5,B.P,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.fPZ=new A.H(!0,B.c,null,null,null,null,22,B.u,null,0.8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.fV4=new A.C("Ask the tutor",null,B.ca,null,null,null,null,null,null,null,null,null)
C.aXx=new A.H(!0,C.es,null,null,null,null,12.5,B.P,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.fVe=new A.C("Not quite. Try again.",null,C.aXx,null,null,null,null,null,null,null,null,null)
C.fWc=new A.C("Win rate ($100 trades)",null,B.LP,null,null,null,null,null,null,null,null,null)
C.fWe=new A.C("All 10 lessons done!",null,null,null,null,null,null,null,null,null,null,null)
C.fWl=new A.C("10 short lessons. Each one shows you the idea live on the real markets the agent is watching.",null,T.FD,null,null,null,null,null,null,null,null,null)
C.fXQ=new A.C("Wrong. You have one more try.",null,C.aXx,null,null,null,null,null,null,null,null,null)
C.fZl=new A.C("Turn the agent back on?",null,null,null,null,null,null,null,null,null,null,null)
C.fSe=new A.H(!0,B.c,null,null,null,null,9.5,B.u,null,0.8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.h3C=new A.C("PRETEND MONEY",null,C.fSe,null,null,null,null,null,null,null,null,null)
C.h4k=new A.C("Paper balance",null,B.WM,null,null,null,null,null,null,null,null,null)
C.h83=new A.C("Signal alerts are now unlocked. When a market says ENTER UP or ENTER DOWN, the app will tell you the market, the direction and the duration. Allow notifications to receive them.",null,null,null,null,null,null,null,null,null,null,null)
C.hb8=new A.C("Allow notifications",null,null,null,null,null,null,null,null,null,null,null)
C.fNn=new A.H(!0,B.aR,null,null,null,null,10.5,null,null,null,null,null,1.25,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.hbQ=new A.C("5 of 10\n= break even",null,C.fNn,null,B.e1,null,null,null,null,null,null,null)
C.he2=new A.C("Check now",null,B.ca,null,null,null,null,null,null,null,null,null)
C.heI=new A.C("Learn to trade",null,B.m9,null,null,null,null,null,null,null,null,null)
C.hhb=new A.C("Turn back on",null,null,null,null,null,null,null,null,null,null,null)
C.hhB=new A.C("The $100 brake paused the agent. Turning it back on means you have reviewed it. The running demo profit and loss starts again from $0.",null,null,null,null,null,null,null,null,null,null,null)
C.hNX=new D.z3("Nvidia","N",B.Nw)
C.hNZ=new D.z3("Ethereum","\u039e",C.aj6)
C.hO1=new D.z3("S&P 500 fund","S&P",B.ce)
C.hO2=new D.z3("Bitcoin","B",F.uG)
C.hO4=new D.z3("Tesla","T",B.bE)
C.hO5=new D.z3("Microsoft","M",B.bp)
C.hO6=new D.z3("Nasdaq 100 fund","Q",B.cC)
C.bnY=new A.u(1,0.6,0.27058823529411763,1,B.q)
C.hO8=new D.z3("Solana","S",C.bnY)
C.hOa=new D.z3("Apple","A",B.cQ)
C.hOd=new D.z3("Amazon","a",B.au)})();(function staticFields(){$.DB=A.a([],A.ar("N<a_A>"))
$.ah9=!1
$.hke=""
$.aLY=0
$.fnw=0})()};
(a=>{a["BzcwBj27/kc+ksyj1P6b9ObLQwk="]=a.current})($__dart_deferred_initializers__);