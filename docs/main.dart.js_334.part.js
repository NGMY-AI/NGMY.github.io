((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,P,Q,E,I,R,K,G,L,D={
hBJ(){return new D.au3(null)},
eIi(d){var w=J.a2(d),v=D.dD(w.h(d,"reading")).h(0,"action"),u=J.k(v==null?"":v)
if(B.a.Y(u,"ENTER UP"))return 0
if(B.a.Y(u,"ENTER DOWN"))return 1
if(!J.z(w.h(d,"open"),!0))return 4
return 2+(100-D.c4(D.dD(w.h(d,"reading")).h(0,"score")))/1000},
hLJ(d,e,f,g){var w,v,u,t,s,r,q,p,o,n,m,l,k=A.a([],x.n)
for(w=d.length,v=x.N,u=x.z,t=x.f,s=0;s<d.length;d.length===w||(0,A.I)(d),++s){r=d[s]
q=J.a2(r)
if(A.v(q.h(r,"asset"))!==e)continue
p=q.h(r,"created_at")
o=A.be(A.v(p==null?"":p))
n=q.h(r,"price")
if(!(typeof n=="number")){p=A.cA(A.v(n==null?"":n))
n=p==null?0:p}if(o==null||n<=0)continue
m=J.z(q.h(r,"decision"),"would buy")
q=q.h(r,"details")
l=(t.b(q)?A.a0(q,v,u):A.S(v,u)).h(0,"pnl")
if(!(typeof l=="number")){q=A.cA(A.v(l==null?"":l))
l=q==null?0:q}q=m?"In "+D.eg(n,!0,!1):"Out "+D.eg(l,!0,!0)
if(m)p=f
else p=l>0?C.cF:C.d4
k.push(new D.QY(o,q,p))}if(g!=null&&A.v(g.h(0,"symbol"))===e){w=g.h(0,"entryAt")
o=A.be(A.v(w==null?"":w))
if(g.h(0,"spot")!=null)n=D.c4(g.h(0,"spot"))
else n=t.b(g.h(0,"option"))?0:D.c4(g.h(0,"entryPrice"))
if(o!=null&&n>0&&!B.d.aR(k,new D.fLi(o,f)))k.push(new D.QY(o,"In "+D.eg(n,!0,!1),f))}return k},
fCw(d){var w
switch(d){case"SPY":w=C.hRW
break
case"QQQ":w=C.hS0
break
case"AAPL":w=C.hS4
break
case"MSFT":w=C.hS_
break
case"NVDA":w=C.hRR
break
case"TSLA":w=C.hRZ
break
case"AMZN":w=C.hS7
break
case"BTC/USD":w=C.hRX
break
case"ETH/USD":w=C.hRT
break
case"SOL/USD":w=C.hS2
break
default:w=new D.z2(d,d.length===0?"?":d[0],B.b_)
break}return w},
bDY(d,e){var w,v,u=null,t=d.split("/")
if(t.length===2&&C.a8w.am(0,t[0])&&C.a8w.am(0,t[1])){t=d.split("/")
w=new D.fxp(e)
return new A.a4(e*1.25,e,new A.an(B.a0,u,B.ad,B.t,A.a([A.ao(u,w.$1(t[0]),u,u,0,u,0,u),A.ao(0,w.$1(t[1]),u,u,u,0,u,u)],x.p),u),u)}v=D.fCw(d)
w=v.b
return A.p(B.z,A.c(w,u,u,u,u,u,u,A.l(u,u,B.c,u,u,u,u,u,u,u,u,w.length>1?e*0.32:e*0.52,u,u,B.u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),B.f,u,u,new A.o(v.c,u,u,u,u,u,B.a6),u,e,u,u,u,u,u,e)},
fCO(d){var w,v=x.g.a(d.h(0,"markets"))
if(v==null)v=B.bP
v=J.cO(v,x.f)
v=A.cw(v,new D.fCP(),v.$ti.k("M.E"),x.P)
w=A.B(v,A.a3(v).k("M.E"))
return w},
dD(d){var w=x.N,v=x.z
return x.f.b(d)?A.a0(d,w,v):A.S(w,v)},
c4(d){var w
if(typeof d=="number")w=d
else{w=A.cA(A.v(d==null?"":d))
if(w==null)w=0}return w},
bFk(d){var w=x.g.a(D.dD(J.t(d,"chart")).h(0,"points"))
if(w==null)w=B.bP
w=J.cO(w,x.f)
w=A.cw(w,new D.fH9(),w.$ti.k("M.E"),x.P)
w=A.B(w,A.a3(w).k("M.E"))
return w},
eg(d,e,f){var w,v=A.o6(B.i.a5(Math.abs(d),2),A.ag("\\B(?=(\\d{3})+(?!\\d))",!0,!1,!1,!1),new D.fDV(),null)
if(d<0)w="-"
else w=f&&d>0?"+":""
return w+(e?"$":"")+v},
LG(d){var w=B.o.F(A.d0(d),12)===0?12:B.o.F(A.d0(d),12),v=B.a.aZ(B.o.v(A.fB(d)),2,"0"),u=A.d0(d)<12?"AM":"PM"
return""+w+":"+v+" "+u},
Su(d){var w=d.aa(),v=new D.fLc(),u=v.$3(A.bD(w),3,2).bL(252e8),t=v.$3(A.bD(w),11,1).bL(216e8),s=w.bL(0-A.dv(0,!w.cW(u)&&w.cW(t)?4:5,0,0,0,0).a)
return A.c1(A.bD(s),A.bO(s),A.bW(s),A.d0(s),A.fB(s),0,0,0)},
aQW(d){var w,v,u,t=d==null,s=A.v(t?"":d).split("-")
if(s.length!==3)return A.v(t?"":d)
w=A.ca(s[1],null)
t=B.ig[B.o.D((w==null?1:w)-1,0,11)]
v=s[2]
u=A.ca(v,null)
return t+" "+A.v(u==null?v:u)+", "+s[0]},
hmT(d){var w,v=A.be(A.v(d==null?"":d))
if(v==null)return""
w=D.Su(v)
return B.ig[A.bO(w)-1]+" "+A.bW(w)+" at "+D.LG(w)+" ET"},
hoL(d){var w,v,u=d.split(", ")
if(u.length>=4){w=u[1]
v=u[3]
return w+", "+A.aK(v," ET","")}return d},
hHb(d){return d.length===0?d:d[0].toUpperCase()+B.a.aV(d,1)},
iqo(d){var w=B.a.cd(d,"(")
return B.a.i(w>0?B.a.aw(d,0,w):d)},
hAl(d){return new D.ON(d,null)},
hFE(d){var w
switch(d){case"AGAINST_TREND":w="against trend"
break
case"CHASED":w="chased"
break
case"CHOP":w="chop"
break
case"NOISE_STOP":w="noise stop"
break
case"NO_FOLLOW_THROUGH":w="no follow-through"
break
case"WIDE_SPREAD":w="wide spread"
break
default:w=d.toLowerCase()
break}return w},
hJJ(){var w=D.Su(new A.W(Date.now(),0,!1).aa()),v=B.o.F(A.fB(w),5)
return"at "+D.LG(A.c1(A.bD(w),A.bO(w),A.bW(w),A.d0(w),A.fB(w),0,0,0).bL(A.dv(0,0,0,0,5-v,0).a))+" ET"},
ihk(d){if(B.a.Y(d,"ENTER UP"))return C.cF
if(B.a.Y(d,"ENTER DOWN"))return C.d4
if(B.a.q(d,"SKIP")||B.a.q(d,"TOO LATE"))return C.d4
if(B.a.Y(d,"MARKET CLOSED"))return B.bQ
return E.i1},
hKK(a9,b0,b1,b2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=null,a3="mom1h",a4=J.a2(b0),a5=D.dD(a4.h(b0,"reading")),a6=D.dD(a5.h(0,"timing")),a7=D.bFk(b0),a8=a4.h(b0,"asset")
if(a8==null)a8=a4.h(b0,"symbol")
w=J.k(a8==null?"":a8)
a8=a5.h(0,"action")
v=J.k(a8==null?"WAITING FOR DATA":a8)
u=D.ihk(v)
t=B.i.D(D.c4(a5.h(0,"score")),0,100)
a8=x.g.a(a5.h(0,"notes"))
if(a8==null)a8=B.bP
a8=J.b8(a8,new D.fI0(),x.N)
s=A.B(a8,a8.$ti.k("aj.E"))
r=D.c4(a4.h(b0,"changePct"))
a8=a9.a
q=a8?B.c.j(0.92):C.i9
p=A.m(20)
o=B.a.Y(v,"ENTER")
if(o)n=u.j(0.6)
else n=a8?B.c:C.n6
n=A.K(n,B.r,o?1.6:1)
m=x.V
l=A.a([new A.aa(0,B.H,a9.gI3(),B.hS,14)],m)
k=D.bDY(w,28)
o=A.c(w,a2,a2,a2,a2,a2,a2,A.l(a2,a2,a8?C.cl:B.c,a2,a2,a2,a2,a2,a2,a2,a2,14,a2,a2,B.D,a2,a2,!0,a2,a2,a2,a2,a2,a2,a2,a2),a2,a2,a2)
j=a4.h(b0,"name")
j=J.k(j==null?"":j)
i=x.p
j=A.a([k,B.ar,A.E(A.x(A.a([o,A.c(j,a2,a2,a2,a2,a2,a2,A.l(a2,a2,a8?C.bT:C.bV,a2,a2,a2,a2,a2,a2,a2,a2,11,a2,a2,a2,a2,a2,!0,a2,a2,a2,a2,a2,a2,a2,a2),a2,a2,a2)],i),B.B,a2,B.e,B.h,0,B.p),1)],i)
if(a7.length>2)B.d.u(j,A.a([new A.a4(58,26,A.b4(a2,a2,a2,new D.bwA(a7,r>=0?C.cF:C.d4,a2),B.aA),a2),B.ar],i))
o=D.hKE(b0)
o=A.c(o,a2,a2,a2,a2,a2,a2,A.l(a2,a2,a8?C.cl:B.c,a2,a2,a2,a2,a2,a2,a2,a2,14,a2,a2,B.D,a2,a2,!0,a2,a2,a2,a2,a2,a2,a2,a2),a2,a2,a2)
k=r>=0
h=k?"+":""
g=B.i.a5(r,2)
f=J.z(a4.h(b0,"kind"),"forex")?"30m":"4h"
j.push(A.x(A.a([o,A.c(h+g+"% \xb7 "+f,a2,a2,a2,a2,a2,a2,A.l(a2,a2,k?C.cF:C.d4,a2,a2,a2,a2,a2,a2,a2,a2,11,a2,a2,B.O,a2,a2,!0,a2,a2,a2,a2,a2,a2,a2,a2),a2,a2,a2)],i),B.dt,a2,B.e,B.h,0,B.p))
o=A.a([A.A(j,B.l,a2,B.e,B.h,0,a2,a2)],i)
k=x.f
if(k.b(a4.h(b0,"v2")))B.d.u(o,A.a([B.af,D.irX(a9,b0)],i))
else{j=A.a([],i)
if(k.b(a5.h(0,"entry"))){k=D.dD(a5.h(0,"entry"))
e=J.z(k.h(0,"dir"),"up")
d=e?C.cF:C.d4
a0=Math.max(1,B.i.S(D.c4(k.h(0,"candleMin"))))
h=A.m(18)
g=A.ap(d,B.v,0.25)
g.toString
g=A.a([d,g],x.O)
m=A.a([new A.aa(0,B.H,d.j(0.35),B.cz,16)],m)
f=B.c.j(0.22)
f=A.p(a2,A.V(e?B.pY:B.pX,B.c,a2,a2,a2,34),B.f,a2,a2,new A.o(f,a2,a2,a2,a2,a2,B.a6),a2,52,a2,a2,a2,a2,a2,52)
a1=A.c(e?"ENTER UP":"ENTER DOWN",a2,a2,a2,a2,a2,a2,C.fTQ,a2,a2,a2)
B.d.u(j,A.a([B.af,A.p(a2,A.x(A.a([f,B.aj,a1,A.c(e?"BUY / CALL":"SELL / PUT",a2,a2,a2,a2,a2,a2,C.fLl,a2,a2,a2),B.S,new D.aCF(a0,a2),B.S,A.A(A.a([A.x(A.a([A.c(B.i.a5(D.c4(k.h(0,"durationMin")),0)+" min",a2,a2,a2,a2,a2,a2,B.jp,a2,a2,a2),A.c("Trade for",a2,a2,a2,a2,a2,a2,H.acJ,a2,a2,a2)],i),B.l,a2,B.e,B.h,0,B.p),A.p(a2,a2,B.f,B.jU,a2,a2,a2,30,a2,B.r9,a2,a2,a2,1),A.x(A.a([A.c(A.v(k.h(0,"worked"))+" of "+A.v(k.h(0,"of")),a2,a2,a2,a2,a2,a2,B.jp,a2,a2,a2),A.c("Worked lately",a2,a2,a2,a2,a2,a2,H.acJ,a2,a2,a2)],i),B.l,a2,B.e,B.h,0,B.p)],i),B.l,a2,B.bb,B.h,0,a2,a2)],i),B.l,a2,B.e,B.h,0,B.p),B.f,a2,a2,new A.o(a2,a2,a2,h,m,new A.a8(B.aX,B.b1,B.x,g,a2,a2),B.m),a2,a2,a2,a2,B.a1S,a2,a2,1/0)],i))}j.push(B.S)
m=u.j(0.15)
k=A.m(999)
k=A.a([A.p(a2,A.c(v,a2,a2,a2,a2,a2,a2,A.l(a2,a2,u,a2,a2,a2,a2,a2,a2,a2,a2,10.5,a2,a2,B.u,a2,a2,!0,a2,0.4,a2,a2,a2,a2,a2,a2),a2,a2,a2),B.f,a2,a2,new A.o(m,a2,a2,k,a2,a2,B.m),a2,a2,a2,a2,B.o3,a2,a2,a2),B.aW],i)
if(a5.h(0,"rsi")!=null){m=B.i.a5(D.c4(a5.h(0,"rsi")),0)
k.push(A.c("RSI "+m,a2,a2,a2,a2,a2,a2,A.l(a2,a2,a8?C.bT:C.bV,a2,a2,a2,a2,a2,a2,a2,a2,11,a2,a2,B.O,a2,a2,!0,a2,a2,a2,a2,a2,a2,a2,a2),a2,a2,a2))}if(a5.h(0,a3)!=null){m=D.c4(a5.h(0,a3))>=0?"+":""
h=B.i.a5(D.c4(a5.h(0,a3)),2)
B.d.u(k,A.a([B.ar,A.c("1h "+m+h+"%",a2,a2,a2,a2,a2,a2,A.l(a2,a2,D.c4(a5.h(0,a3))>=0?C.cF:C.d4,a2,a2,a2,a2,a2,a2,a2,a2,11,a2,a2,B.O,a2,a2,!0,a2,a2,a2,a2,a2,a2,a2,a2),a2,a2,a2)],i))}j.push(A.A(k,B.l,a2,B.e,B.h,0,a2,a2))
j.push(B.S)
j.push(A.cf(new D.fI1(t,a9)))
j.push(B.at)
m=A.c("Sellers",a2,a2,a2,a2,a2,a2,A.l(a2,a2,a8?C.bT:C.bV,a2,a2,a2,a2,a2,a2,a2,a2,10,a2,a2,a2,a2,a2,!0,a2,a2,a2,a2,a2,a2,a2,a2),a2,a2,a2)
k=B.i.a5(t,0)
k=A.c("Strength "+k+"/100",a2,a2,a2,a2,a2,a2,A.l(a2,a2,a8?C.cl:B.c,a2,a2,a2,a2,a2,a2,a2,a2,10.5,a2,a2,B.D,a2,a2,!0,a2,a2,a2,a2,a2,a2,a2,a2),a2,a2,a2)
j.push(A.A(A.a([m,B.aW,k,B.aW,A.c("Buyers",a2,a2,a2,a2,a2,a2,A.l(a2,a2,a8?C.bT:C.bV,a2,a2,a2,a2,a2,a2,a2,a2,10,a2,a2,a2,a2,a2,!0,a2,a2,a2,a2,a2,a2,a2,a2),a2,a2,a2)],i),B.l,a2,B.e,B.h,0,a2,a2))
j.push(B.N)
m=J.z(a4.h(b0,"open"),!0)?A.cV(s,1,a2,A.U(s).c):s
m=J.E7(m,b1?2:99)
k=m.$ti
m=new A.bR(m,m.gJ(0),k.k("bR<aj.E>"))
k=k.k("aj.E")
while(m.C()){h=m.d
if(h==null)h=k.a(h)
g=A.V(B.ni,u,a2,a2,a2,4.5)
f=a8?C.cl:B.c
j.push(new A.D(B.l6,new A.c2(B.aK,B.e,B.h,B.B,a2,B.p,a2,0,A.a([new A.D(B.hz,g,a2),I.wb,new A.bu(1,B.b8,A.c(h,a2,a2,a2,a2,a2,a2,new A.G(!0,f,a2,a2,a2,a2,12.3,a2,a2,a2,a2,a2,1.35,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2),a2,a2,a2),a2)],i),a2),a2))}if(J.z(a4.h(b0,"open"),!0))B.d.u(j,A.a([B.S,D.ijC(a9,a5,a6)],i))
B.d.u(o,j)}if(b2!=null)o.push(new A.bK(B.a9,a2,a2,A.hx(C.bXX,A.c("Ask the tutor about "+w,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2),b2,a2),a2))
return A.p(a2,A.x(o,B.B,a2,B.e,B.h,0,B.p),B.f,a2,a2,new A.o(q,a2,n,p,l,a2,B.m),a2,a2,a2,B.d7,B.bF,a2,a2,a2)},
irX(a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1="activeSignal",a2=null,a3="explain",a4=J.a2(b0),a5=D.dD(a4.h(b0,"v2")),a6=x.f,a7=a6.b(a4.h(b0,a1))?D.dD(a4.h(b0,a1)):a2,a8=J.z(a4.h(b0,"open"),!0)
a4=a5.h(0,"lean")
w=A.v(a4==null?"none":a4)
a4=a7==null
v=!1
if(a4)if(a8){u=w==="up"||w==="down"
v=u}u=!a4
if(u)t=A.v(a7.h(0,"direction"))
else if(v){s=w==="up"?"BUY":"SELL"
t=s}else t="WAIT"
if(u)r="STRONG "+t
else r=v?"WEAK "+t:"WAIT"
s=t==="BUY"
if(s)q=C.cF
else q=t==="SELL"?C.d4:B.bQ
p=a4?a2:a7.h(0,"checks")
if(p==null)p=a5.h(0,"checks")
x.g.a(p)
a6=J.cO(p==null?B.bP:p,a6)
a6=A.cw(a6,new D.fLJ(),a6.$ti.k("M.E"),x.P)
o=A.B(a6,A.a3(a6).k("M.E"))
n=u?5:B.i.M(D.c4(a5.h(0,"passed")))
a6=a4?a2:a7.h(0,"grade_at")
m=A.be(A.v(a6==null?"":a6))
a4=a4?a2:a7.h(0,"created_at")
l=A.be(A.v(a4==null?"":a4))
if(!a8)k="This market is closed right now, so the answer is WAIT. No signals while it is closed."
else if(u){a4=a7.h(0,a3)
a4=A.v(a4==null?"":a4)
k=a4}else{if(J.z(a5.h(0,"strong"),!0))a4="All 5 confirmations agree right now, but a signal is only given at the 30-minute checks (at most 5 a day). Until then it is not a signal: do not enter."
else if(v){a4=s?"BUY: the trends point up":"SELL: the trends point down"
a6=a5.h(0,a3)
a4="WEAK "+a4+", but only "+n+" of the 5 confirmations agree. Do NOT enter a weak signal. "+A.v(a6==null?"":a6)}else{a4=a5.h(0,a3)
a4=A.v(a4==null?"WAIT.":a4)}k=a4}a4=q.j(0.08)
a6=A.m(16)
p=A.K(q.j(0.45),B.r,1)
j=A.c(r,a2,a2,a2,a2,a2,a2,A.l(a2,a2,q,a2,a2,a2,a2,a2,a2,a2,a2,22,a2,a2,B.u,a2,a2,!0,a2,0.4,a2,a2,a2,a2,a2,a2),a2,a2,a2)
i=q.j(0.16)
h=A.m(999)
g=u?"5 of 5":""+n+" of 5"
h=A.p(a2,A.c(g,a2,a2,a2,a2,a2,a2,A.l(a2,a2,q,a2,a2,a2,a2,a2,a2,a2,a2,10.5,a2,a2,B.u,a2,a2,!0,a2,a2,a2,a2,a2,a2,a2,a2),a2,a2,a2),B.f,a2,a2,new A.o(i,a2,a2,h,a2,a2,B.m),a2,a2,a2,a2,B.fa,a2,a2,a2)
if(u){i=a7.h(0,"et_time")
i=B.d.gal(A.v(i==null?"":i).split(", "))}else i=""
g=a9.a
f=x.p
i=A.a([A.A(A.a([j,B.aa,h,A.E(A.c(i,a2,1,B.a2,a2,a2,a2,A.l(a2,a2,g?C.bT:C.bV,a2,a2,a2,a2,a2,a2,a2,a2,10.5,a2,a2,B.O,a2,a2,!0,a2,a2,a2,a2,a2,a2,a2,a2),B.e1,a2,a2),1)],f),B.l,a2,B.e,B.h,0,a2,a2)],f)
if(v)B.d.u(i,A.a([B.at,A.c("WEAK SIGNAL \xb7 DO NOT ENTER",a2,a2,a2,a2,a2,a2,A.l(a2,a2,q,a2,a2,a2,a2,a2,a2,a2,a2,11.5,a2,a2,B.u,a2,a2,!0,a2,0.4,a2,a2,a2,a2,a2,a2),a2,a2,a2)],f))
if(u&&l!=null&&m!=null)B.d.u(i,A.a([B.S,new D.aKB(l,m,s,a2)],f))
i.push(B.at)
i.push(C.h5T)
if(u&&m!=null){u=D.LG(D.Su(m.aa()))
s=s?"higher":"lower"
i.push(A.c("Graded at "+u+" ET, 30 minutes after it was given: WIN if the price finished "+s+".",a2,a2,a2,a2,a2,a2,A.l(a2,a2,g?C.bT:C.bV,a2,a2,a2,a2,a2,a2,a2,a2,11,a2,a2,a2,a2,1.3,!0,a2,a2,a2,a2,a2,a2,a2,a2),a2,a2,a2))}i.push(B.N)
i.push(A.c(k,a2,a2,a2,a2,a2,a2,A.l(a2,a2,g?C.cl:B.c,a2,a2,a2,a2,a2,a2,a2,a2,12.3,a2,a2,a2,a2,1.35,!0,a2,a2,a2,a2,a2,a2,a2,a2),a2,a2,a2))
i.push(B.N)
for(u=o.length,e=0;e<o.length;o.length===u||(0,A.I)(o),++e){d=o[e]
s=J.a2(d)
j=J.z(s.h(d,"ok"),!0)?B.ea:B.Ik
j=A.V(j,J.z(s.h(d,"ok"),!0)?C.cF:C.d4,a2,a2,a2,15)
h=J.z(s.h(d,"ok"),!0)?"Yes":"No"
s=s.h(d,"text")
s=A.v(s==null?"":s)
a0=g?C.cl:B.c
i.push(new A.D(B.l6,new A.c2(B.aK,B.e,B.h,B.B,a2,B.p,a2,0,A.a([j,B.ba,new A.bu(1,B.b8,A.c(h+" \u2014 "+s,a2,a2,a2,a2,a2,a2,new A.G(!0,a0,a2,a2,a2,a2,11.8,a2,a2,a2,a2,a2,1.3,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2),a2,a2,a2),a2)],f),a2),a2))}return A.p(a2,A.x(i,B.B,a2,B.e,B.h,0,B.p),B.f,a2,a2,new A.o(a4,a2,p,a6,a2,a2,B.m),a2,a2,a2,a2,B.bg,a2,a2,1/0)},
fgD(d){var w=d.a,v=w<0?0:B.o.ao(w,1e6)
return""+B.o.ao(v,60)+":"+B.a.aZ(B.o.v(B.o.F(v,60)),2,"0")},
ijC(a4,a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e="dir",d="typicalMin",a0="entry",a1=a5.h(0,"decision"),a2=J.k(a1==null?"NO_DIRECTION":a1),a3=J.z(a5.h(0,e),"up")
a1=x.g.a(a5.h(0,"notes"))
if(a1==null)a1=B.bP
a1=J.b8(a1,new D.fye(),x.N)
w=A.B(a1,a1.$ti.k("aj.E"))
A:{if("ENTER"===a2){a1=a3?C.cF:C.d4
break A}if("SKIP_WEAK"===a2||"WAIT_LATE"===a2){a1=C.d4
break A}a1=E.i1
break A}v=a6.h(0,d)!=null&&a6.h(0,e)!=null&&!J.z(a6.h(0,e),"none")&&a2!=="NO_DIRECTION"&&a2!=="CLOSED"
u=D.c4(a6.h(0,"of"))
t=D.c4(a6.h(0,"worked"))
s=u>0
r=s?t/u:0
q=J.z(a6.h(0,e),"up")?"up":"down"
p=a4.a
o=p?C.qT:C.qU
n=A.m(16)
m=A.K(a1.j(0.55),B.r,1.5)
l=A.V(B.mw,p?C.cl:B.c,f,f,f,16)
k=x.p
l=A.A(A.a([l,B.ba,A.c("DECISION AND DURATION",f,f,f,f,f,f,A.l(f,f,p?C.cl:B.c,f,f,f,f,f,f,f,f,11.5,f,f,B.u,f,f,!0,f,1,f,f,f,f,f,f),f,f,f)],k),B.l,f,B.e,B.h,0,f,f)
j=a1.j(0.14)
i=A.m(10)
h=a5.h(0,"action")
h=A.a([A.c(J.k(h==null?"":h),f,f,f,f,f,f,A.l(f,f,a1,f,f,f,f,f,f,f,f,13,f,f,B.u,f,f,!0,f,f,f,f,f,f,f,f),f,f,f)],k)
if(w.length!==0){g=B.d.gG(w)
B.d.u(h,A.a([B.cQ,A.c(g,f,f,f,f,f,f,A.l(f,f,p?C.cl:B.c,f,f,f,f,f,f,f,f,12.3,f,f,f,f,1.35,!0,f,f,f,f,f,f,f,f),f,f,f)],k))}l=A.a([l,B.N,A.p(f,A.x(h,B.B,f,B.e,B.h,0,B.p),B.f,f,f,new A.o(j,f,f,i,f,f,B.m),f,f,f,f,B.iP,f,f,1/0)],k)
if(a2==="ENTER"&&x.f.b(a5.h(0,a0)))B.d.u(l,A.a([B.N,A.A(A.a([A.E(D.hHT(a4,"Trade for",B.i.a5(D.c4(D.dD(a5.h(0,a0)).h(0,"durationMin")),0)+" min",a1),1),A.E(D.hHT(a4,"Enter at","next "+B.i.a5(D.c4(D.dD(a5.h(0,a0)).h(0,"candleMin")),0)+"-min candle",f),1)],k),B.l,f,B.e,B.h,0,f,f)],k))
if(v){a1=A.c("What this is based on",f,f,f,f,f,f,A.l(f,f,p?C.bT:C.bV,f,f,f,f,f,f,f,f,10.5,f,f,B.D,f,f,!0,f,f,f,f,f,f,f,f),f,f,f)
j=D.hmX(a4,B.fO,"This "+q+" move started "+B.i.a5(D.c4(a6.h(0,"ageMin")),0)+" min ago.",f)
i=q==="up"?"Up":"Down"
k=A.a([B.S,a1,B.at,j,D.hmX(a4,B.asB,i+" moves on this market usually end after about "+B.i.a5(D.c4(a6.h(0,d)),0)+" min.",f)],k)
if(s){a1=B.i.a5(u,0)
s=B.i.a5(t,0)
j=B.i.S(r*100)
i=r>=0.5
h=i?"Reliable enough.":"Under half: unreliable."
i=i?C.cF:C.d4
k.push(D.hmX(a4,B.pZ,"Of the last "+a1+" "+q+" moves here, "+s+" really went "+q+" ("+j+"%). "+h,i))}B.d.u(l,k)}l.push(B.at)
l.push(A.c("Estimates from this market's recent moves, not promises.",f,f,f,f,f,f,A.l(f,f,p?C.bT:C.bV,f,f,f,f,f,f,f,f,10.5,f,f,f,f,f,!0,f,f,f,f,f,f,f,f),f,f,f))
return A.p(f,A.x(l,B.B,f,B.e,B.h,0,B.p),B.f,f,f,new A.o(o,f,m,n,f,f,B.m),f,f,f,f,B.bg,f,f,1/0)},
hmX(d,e,f,g){var w,v=null,u=g==null
if(u)w=d.a?C.bT:C.bV
else w=g
w=A.V(e,w,v,v,v,14)
if(u)u=d.a?C.cl:B.c
else u=g
return new A.D(B.Hz,A.A(A.a([w,B.ba,A.E(A.c(f,v,v,v,v,v,v,A.l(v,v,u,v,v,v,v,v,v,v,v,12,v,v,v,v,1.35,!0,v,v,v,v,v,v,v,v),v,v,v),1)],x.p),B.B,v,B.e,B.h,0,v,v),v)},
hHT(d,e,f,g){var w=null,v=d.a,u=A.c(e,w,w,w,w,w,w,A.l(w,w,v?C.bT:C.bV,w,w,w,w,w,w,w,w,10.5,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)
if(g==null)v=v?C.cl:B.c
else v=g
return A.x(A.a([u,A.c(f,w,w,w,w,w,w,A.l(w,w,v,w,w,w,w,w,w,w,w,13.5,w,w,B.D,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),B.B,w,B.e,B.h,0,B.p)},
hKE(d){var w=J.a2(d),v=D.c4(w.h(d,"price"))
if(!J.z(w.h(d,"kind"),"forex"))return D.eg(v,!0,!1)
return B.i.a5(v,v>=100?3:5)},
hjC(d,e){return new D.XN(d,e,null)},
hGa(){var w=Math.max(0,$.aM8-1)
$.aM8=w
if(w===0){B.d.a6($.DB)
$.ahm=!1
$.hmh=""
$.fpn=$.fpn+1}},
eJo(d){var w
x.g.a(d)
w=d==null?B.bP:d
w=J.cO(w,x.f)
w=A.cw(w,new D.eJp(),w.$ti.k("M.E"),x.P)
w=A.B(w,A.a3(w).k("M.E"))
return w},
hFF(d){var w=J.t(d,"kind")
switch(J.k(w==null?"":w)){case"forex":w="Forex"
break
case"crypto":w="Crypto"
break
default:w="Stocks"
break}return w},
au3:function au3(d){this.a=d},
aHv:function aHv(d,e){var _=this
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
eIv:function eIv(d){this.a=d},
eIw:function eIw(d){this.a=d},
eHM:function eHM(d,e){this.a=d
this.b=e},
eI2:function eI2(d,e){this.a=d
this.b=e},
eHO:function eHO(d,e){this.a=d
this.b=e},
eI1:function eI1(d,e){this.a=d
this.b=e},
eI4:function eI4(d,e){this.a=d
this.b=e},
eI5:function eI5(d,e){this.a=d
this.b=e},
eHL:function eHL(){},
eHN:function eHN(d,e,f){this.a=d
this.b=e
this.c=f},
eId:function eId(){},
eIb:function eIb(d){this.a=d},
eIc:function eIc(d){this.a=d},
eIe:function eIe(d,e){this.a=d
this.b=e},
eIf:function eIf(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eHV:function eHV(d){this.a=d},
eI7:function eI7(d){this.a=d},
eI8:function eI8(d,e){this.a=d
this.b=e},
eI9:function eI9(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eI6:function eI6(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eIa:function eIa(){},
eIu:function eIu(d){this.a=d},
eIp:function eIp(d){this.a=d},
eIq:function eIq(d){this.a=d},
eHz:function eHz(d){this.a=d},
eHA:function eHA(d){this.a=d},
eHB:function eHB(d){this.a=d},
eHC:function eHC(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eHx:function eHx(d){this.a=d},
eHy:function eHy(d,e){this.a=d
this.b=e},
eHD:function eHD(d){this.a=d},
eHE:function eHE(d){this.a=d},
eIl:function eIl(){},
eIm:function eIm(){},
eIn:function eIn(){},
eIo:function eIo(){},
eIh:function eIh(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eIg:function eIg(d){this.a=d},
eIk:function eIk(d,e){this.a=d
this.b=e},
eIj:function eIj(d){this.a=d},
eHQ:function eHQ(){},
eHR:function eHR(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eHS:function eHS(d){this.a=d},
eHU:function eHU(){},
eHT:function eHT(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
eHP:function eHP(d,e){this.a=d
this.b=e},
eHH:function eHH(d,e){this.a=d
this.b=e},
eHG:function eHG(d,e){this.a=d
this.b=e},
eHI:function eHI(d){this.a=d},
eHF:function eHF(d){this.a=d},
eHJ:function eHJ(){},
eHv:function eHv(d){this.a=d},
eHw:function eHw(){},
eHX:function eHX(){},
eHY:function eHY(){},
eHZ:function eHZ(){},
eHW:function eHW(){},
eI_:function eI_(d,e,f){this.a=d
this.b=e
this.c=f},
eI0:function eI0(d){this.a=d},
eI3:function eI3(d,e){this.a=d
this.b=e},
eHK:function eHK(d,e){this.a=d
this.b=e},
eHu:function eHu(d){this.a=d},
eIs:function eIs(){},
eIt:function eIt(d){this.a=d},
eIr:function eIr(d){this.a=d},
eHt:function eHt(d){this.a=d},
eHs:function eHs(d){this.a=d},
QY:function QY(d,e,f){this.a=d
this.c=e
this.d=f},
fLi:function fLi(d,e){this.a=d
this.b=e},
a_F:function a_F(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
beD:function beD(){this.c=this.a=this.d=null},
cXg:function cXg(d,e){this.a=d
this.b=e},
cXp:function cXp(d){this.a=d},
cXn:function cXn(d,e){this.a=d
this.b=e},
cXl:function cXl(d,e){this.a=d
this.b=e},
cXm:function cXm(d,e){this.a=d
this.b=e},
cXk:function cXk(d){this.a=d},
cXj:function cXj(d){this.a=d},
cXo:function cXo(d){this.a=d},
cXi:function cXi(d){this.a=d},
cXh:function cXh(d){this.a=d},
beE:function beE(d,e,f,g,h,i,j,k,l){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.w=j
_.x=k
_.a=l},
cXq:function cXq(d){this.a=d},
cXs:function cXs(d,e){this.a=d
this.b=e},
cXr:function cXr(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
bwA:function bwA(d,e,f){this.b=d
this.c=e
this.a=f},
fiQ:function fiQ(){},
z2:function z2(d,e,f){this.a=d
this.b=e
this.c=f},
fxp:function fxp(d){this.a=d},
fCP:function fCP(){},
Rt:function Rt(d){this.a=d},
fH9:function fH9(){},
fDV:function fDV(){},
fLc:function fLc(){},
ON:function ON(d,e){this.c=d
this.a=e},
aGs:function aGs(d){var _=this
_.d=null
_.e=d
_.f=!0
_.r=!1
_.x=_.w=null
_.Q=_.z=_.y=!1
_.c=_.a=_.as=null},
e8D:function e8D(d){this.a=d},
e85:function e85(d,e){this.a=d
this.b=e},
e84:function e84(){},
e8k:function e8k(d,e,f){this.a=d
this.b=e
this.c=f},
e8j:function e8j(){},
e8q:function e8q(d,e){this.a=d
this.b=e},
e8r:function e8r(d,e,f){this.a=d
this.b=e
this.c=f},
e8B:function e8B(d){this.a=d},
e8C:function e8C(d){this.a=d},
e7Z:function e7Z(d,e){this.a=d
this.b=e},
e8h:function e8h(){},
e8i:function e8i(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e82:function e82(d){this.a=d},
e83:function e83(){},
e8_:function e8_(){},
e80:function e80(d){this.a=d},
e81:function e81(d,e){this.a=d
this.b=e},
e8b:function e8b(){},
e8o:function e8o(d){this.a=d},
e8p:function e8p(d){this.a=d},
e8m:function e8m(){},
e8n:function e8n(d){this.a=d},
e88:function e88(){},
e8a:function e8a(){},
e89:function e89(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e87:function e87(d,e){this.a=d
this.b=e},
e86:function e86(d,e){this.a=d
this.b=e},
e7X:function e7X(){},
e7Y:function e7Y(){},
e8s:function e8s(d){this.a=d},
e8e:function e8e(){},
e8f:function e8f(d,e,f){this.a=d
this.b=e
this.c=f},
e8g:function e8g(d){this.a=d},
e8d:function e8d(d){this.a=d},
e8c:function e8c(d){this.a=d},
e8z:function e8z(){},
e8A:function e8A(d){this.a=d},
e8y:function e8y(d){this.a=d},
e8x:function e8x(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
e8u:function e8u(){},
e8w:function e8w(){},
e8v:function e8v(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
e8t:function e8t(d){this.a=d},
e7W:function e7W(d){this.a=d},
e7V:function e7V(d){this.a=d},
e8l:function e8l(){},
aBm:function aBm(d,e,f){this.c=d
this.d=e
this.a=f},
bfj:function bfj(){this.c=this.a=this.d=null},
dae:function dae(d){this.a=d},
dad:function dad(){},
fI0:function fI0(){},
fI1:function fI1(d,e){this.a=d
this.b=e},
fLJ:function fLJ(){},
aKB:function aKB(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bvW:function bvW(){this.c=this.a=this.d=null},
fgG:function fgG(d){this.a=d},
fgF:function fgF(){},
fgE:function fgE(){},
aCF:function aCF(d,e){this.c=d
this.a=e},
bia:function bia(){this.c=this.a=this.d=null},
diC:function diC(d){this.a=d},
diB:function diB(){},
fye:function fye(){},
cG:function cG(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
uw:function uw(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
XN:function XN(d,e,f){this.c=d
this.d=e
this.a=f},
a_L:function a_L(d,e){this.a=d
this.b=e},
aHw:function aHw(d,e,f,g,h,i,j,k,l){var _=this
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
_.dy=""
_.fr=!1
_.bv$=k
_.ab$=l
_.c=_.a=null},
eIG:function eIG(){},
eJu:function eJu(d){this.a=d},
eJt:function eJt(){},
eJv:function eJv(d){this.a=d},
eJw:function eJw(d){this.a=d},
eJs:function eJs(d,e){this.a=d
this.b=e},
eJx:function eJx(d){this.a=d},
eJp:function eJp(){},
eJ0:function eJ0(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eJ9:function eJ9(d){this.a=d},
eIJ:function eIJ(d){this.a=d},
eIK:function eIK(d,e){this.a=d
this.b=e},
eIL:function eIL(d){this.a=d},
eIM:function eIM(d){this.a=d},
eII:function eII(d,e){this.a=d
this.b=e},
eIH:function eIH(d,e){this.a=d
this.b=e},
eJ8:function eJ8(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eJ7:function eJ7(){},
eJm:function eJm(){},
eJn:function eJn(){},
eIP:function eIP(d){this.a=d},
eIQ:function eIQ(){},
eIR:function eIR(){},
eIC:function eIC(d,e){this.a=d
this.b=e},
eID:function eID(){},
eIE:function eIE(){},
eIF:function eIF(){},
eJa:function eJa(d){this.a=d},
eJq:function eJq(d){this.a=d},
eJr:function eJr(d,e){this.a=d
this.b=e},
eIO:function eIO(d){this.a=d},
eIN:function eIN(d,e){this.a=d
this.b=e},
eJ6:function eJ6(d,e){this.a=d
this.b=e},
eJ2:function eJ2(d,e){this.a=d
this.b=e},
eJ3:function eJ3(d,e){this.a=d
this.b=e},
eJ1:function eJ1(d,e,f){this.a=d
this.b=e
this.c=f},
eJ4:function eJ4(d,e){this.a=d
this.b=e},
eJ5:function eJ5(d){this.a=d},
eIS:function eIS(d,e,f){this.a=d
this.b=e
this.c=f},
eJ_:function eJ_(d){this.a=d},
eIT:function eIT(){},
eIU:function eIU(){},
eIV:function eIV(){},
eIW:function eIW(){},
eIX:function eIX(){},
eIY:function eIY(){},
eIZ:function eIZ(){},
eJf:function eJf(d,e){this.a=d
this.b=e},
eJg:function eJg(){},
eJi:function eJi(d,e){this.a=d
this.b=e},
eJe:function eJe(d,e){this.a=d
this.b=e},
eJh:function eJh(d){this.a=d},
eJj:function eJj(d){this.a=d},
eJd:function eJd(d){this.a=d},
eJk:function eJk(d){this.a=d},
eJc:function eJc(d,e){this.a=d
this.b=e},
eJl:function eJl(d,e){this.a=d
this.b=e},
eJb:function eJb(){},
eIy:function eIy(d){this.a=d},
eIz:function eIz(d,e){this.a=d
this.b=e},
eIx:function eIx(d,e){this.a=d
this.b=e},
eIA:function eIA(d,e){this.a=d
this.b=e},
eIB:function eIB(d){this.a=d},
a0M:function a0M(d,e,f,g,h,i,j,k,l,m){var _=this
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
bll:function bll(d){var _=this
_.x=_.w=_.r=_.f=_.e=_.d=$
_.y=d
_.c=_.a=_.z=null},
dvb:function dvb(){},
dvc:function dvc(){},
dv9:function dv9(){},
dva:function dva(){},
dv7:function dv7(d){this.a=d},
dv8:function dv8(d){this.a=d},
dv6:function dv6(d){this.a=d},
dv_:function dv_(){},
dv0:function dv0(){},
dv1:function dv1(d){this.a=d},
dv2:function dv2(d){this.a=d},
duY:function duY(d,e,f){this.a=d
this.b=e
this.c=f},
dv3:function dv3(d){this.a=d},
dv4:function dv4(d,e){this.a=d
this.b=e},
dv5:function dv5(d,e){this.a=d
this.b=e},
duZ:function duZ(d,e,f){this.a=d
this.b=e
this.c=f},
aPu:function aPu(){}},C,H,M,S,T,U,F,N,O,V,W
J=c[1]
A=c[0]
B=c[2]
P=c[126]
Q=c[214]
E=c[253]
I=c[149]
R=c[187]
K=c[241]
G=c[252]
L=c[212]
D=a.updateHolder(c[21],D)
C=c[251]
H=c[151]
M=c[256]
S=c[127]
T=c[158]
U=c[255]
F=c[239]
N=c[49]
O=c[254]
V=c[197]
W=c[134]
D.au3.prototype={
R(){return new D.aHv(A.a([],x.t),A.ml(0,null,null))}}
D.aHv.prototype={
a_(){var w=this
w.a3()
$.aM8=$.aM8+1
w.a.toString
w.aeE()
w.B6()
w.yR(!1).bE(new D.eIv(w),x.H)
w.ch=A.d1(B.nX,new D.eIw(w))},
B6(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m
var $async$B6=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.aB(),$async$B6)
case 7:q=e
p=A.aV(J.t(q.a,"ngmy_signal_grid_status_cache"))
if(p==null||r.c==null||r.d!=null){w=1
break}o=A.a0(x.f.a(B.V.aP(0,p,null)),x.N,x.z)
r.l(new D.eHM(r,o))
t=2
w=6
break
case 4:t=3
m=s.pop()
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$B6,v)},
a3g(d){return this.cyR(d)},
cyR(d){var w=0,v=A.j(x.H),u=1,t=[],s,r,q
var $async$a3g=A.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:u=3
w=6
return A.b(A.aB(),$async$a3g)
case 6:s=f
w=7
return A.b(s.aB("String","ngmy_signal_grid_status_cache",B.V.au(d,null)),$async$a3g)
case 7:u=1
w=5
break
case 3:u=2
q=t.pop()
w=5
break
case 2:w=1
break
case 5:return A.h(null,v)
case 1:return A.f(t.at(-1),v)}})
return A.i($async$a3g,v)},
t(){var w=this.ch
if(w!=null)w.a1(0)
this.as.t()
D.hGa()
this.a2()},
crB(d){var w=this
if(!w.at&&d>0){w.at=!0
$.aU.U$.push(new D.eI2(w,d))}return w.as},
aeE(){var w=0,v=A.j(x.H),u=1,t=[],s=this,r,q,p,o
var $async$aeE=A.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:u=3
w=6
return A.b(A.aB(),$async$aeE)
case 6:r=e
q=A.aV(J.t(r.a,"ngmy_signal_grid_market"))
if(q!=null&&q.length!==0&&s.c!=null&&s.Q==null)s.l(new D.eHO(s,q))
u=1
w=5
break
case 3:u=2
o=t.pop()
w=5
break
case 2:w=1
break
case 5:return A.h(null,v)
case 1:return A.f(t.at(-1),v)}})
return A.i($async$aeE,v)},
a29(d){return this.cr7(d)},
cr7(d){var w=0,v=A.j(x.H),u=1,t=[],s=this,r,q,p
var $async$a29=A.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:s.l(new D.eI1(s,d))
u=3
w=6
return A.b(A.aB(),$async$a29)
case 6:r=f
w=7
return A.b(r.aB("String","ngmy_signal_grid_market",d),$async$a29)
case 7:u=1
w=5
break
case 3:u=2
p=t.pop()
w=5
break
case 2:w=1
break
case 5:return A.h(null,v)
case 1:return A.f(t.at(-1),v)}})
return A.i($async$a29,v)},
yR(d){return this.cwq(d)},
cwq(d){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$yR=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.x?null:t.bVb()
w=3
return A.b(A.fR(A.J(["action","paStatus","live",d],x.N,x.z),!1,!1,!1,!1,B.x_),$async$yR)
case 3:q=f
if(t.c==null){w=1
break}t.l(new D.eI4(t,q))
if(q!=null&&J.z(J.t(q,"ok"),!0))t.a3g(q)
w=r!=null?4:5
break
case 4:w=6
return A.b(r,$async$yR)
case 6:s=f
if(t.c!=null&&s!=null&&t.d!=null)t.l(new D.eI5(t,s))
case 5:case 1:return A.h(u,v)}})
return A.i($async$yR,v)},
Z9(d){return this.bVc(d)},
bVb(){return this.Z9(0)},
bVc(d){var w=0,v=A.j(x.i),u,t,s
var $async$Z9=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(A.fR(A.J(["action","paLog","limit",30,"beforeId",d],x.N,x.z),!1,!1,!1,!1,B.hb),$async$Z9)
case 3:s=f
if(s==null||!J.z(J.t(s,"ok"),!0)){u=null
w=1
break}t=x.g.a(J.t(s,"rows"))
if(t==null)t=B.bP
t=J.cO(t,x.f)
t=A.cw(t,new D.eHL(),t.$ti.k("M.E"),x.P)
t=A.B(t,A.a3(t).k("M.E"))
u=t
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$Z9,v)},
a_7(d){return this.c7s(d)},
c7r(){return this.a_7(!1)},
c7s(d){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a_7=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=d&&J.cK(t.e)?J.t(J.Ti(t.e),"id"):0
w=3
return A.b(t.Z9(s==null?0:s),$async$a_7)
case 3:r=f
if(t.c==null||r==null){w=1
break}t.l(new D.eHN(t,d,r))
case 1:return A.h(u,v)}})
return A.i($async$a_7,v)},
zc(d){return this.cBn(d)},
cBn(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$zc=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:p=t.d
o=D.dD(p==null?null:J.t(p,"state"))
w=d&&J.z(o.h(0,"brakePaused"),!0)?3:4
break
case 3:p=t.c
p.toString
w=5
return A.b(A.cg(null,null,!0,null,new D.eId(),p,null,!0,!0,x.y),$async$zc)
case 5:if(f!==!0){w=1
break}case 4:s=t.d
t.l(new D.eIe(t,d))
w=6
return A.b(A.fR(A.J(["action","paSet","enabled",d],x.N,x.z),!1,!1,!1,!1,B.hb),$async$zc)
case 6:r=f
if(t.c==null){w=1
break}p=r==null
q=J.z(p?null:J.t(r,"ok"),!0)
t.l(new D.eIf(t,q,r,s))
if(q)p=d?"Agent started.":"Agent stopped."
else{p=p?null:J.t(r,"error")
p=J.k(p==null?"Could not change it.":p)}t.b3o(p,q?C.cF:C.d4)
if(q)t.c7r()
case 1:return A.h(u,v)}})
return A.i($async$zc,v)},
cm1(){var w=this.c
w.toString
A.a7(w,!1).c9(A.e6(new D.eHV(this),!1,null,x.H))},
a3s(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$a3s=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t.l(new D.eI7(t))
w=3
return A.b(A.fR(A.J(["action","paCheck"],x.N,x.z),!1,!1,!1,!1,B.nX),$async$a3s)
case 3:s=e
if(t.c==null){w=1
break}t.l(new D.eI8(t,s))
r=s==null
if(!J.z(r?null:J.t(s,"ok"),!0)){r=r?null:J.t(s,"error")
t.b3o(J.k(r==null?"The check did not finish.":r),C.d4)
w=1
break}r=t.c
r.toString
r=A.Q(r).ax.a===B.dh
s.toString
q=D.dD(D.dD(J.t(s,"state")).h(0,"snapshot"))
p=t.c
p.toString
o=r?C.t6:C.t4
w=4
return A.b(A.bV(o,null,new D.eI9(t,new D.Rt(r),q,s),p,!0,!0,!0,B.aUf,!1,!1,x.H),$async$a3s)
case 4:case 1:return A.h(u,v)}})
return A.i($async$a3s,v)},
czx(d,e,f,g){var w,v,u,t,s,r=null,q=D.fCO(e)
B.d.b_(q,new D.eIa())
w=d.a
v=w?C.oL:C.oG
v=A.at(A.p(r,r,B.f,r,r,new A.o(v,r,r,A.m(9),r,r,B.m),r,4,r,r,r,r,r,40),r,r,r)
u=A.c("What the agent sees right now",r,r,r,r,r,r,A.l(r,r,w?C.cl:B.c,r,r,r,r,r,r,r,r,19,r,r,B.u,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
t=J.z(f.h(0,"enabled"),!0)?" (next one "+D.hJJ()+")":" (the agent is stopped, so none will be made)"
v=A.a([v,B.aB,u,B.at,A.c("Check now only looks. It never buys or sells. Trades are made only by the automatic check every 5 minutes"+t+".",r,r,r,r,r,r,A.l(r,r,w?C.bT:C.bV,r,r,r,r,r,r,r,r,12.5,r,r,r,r,1.35,!0,r,r,r,r,r,r,r,r),r,r,r),B.af],x.p)
for(w=q.length,s=0;s<q.length;q.length===w||(0,A.I)(q),++s)v.push(D.hKK(d,q[s],!0,r))
return A.co(v,g,r,C.bHj,r,r,B.ah,!1)},
b3o(d,e){var w=null
this.c.L(x.q).f.T(A.b3(w,w,w,e,w,B.t,w,A.c(d,w,w,w,w,w,w,w,w,w,w),w,B.Z,w,w,w,w,w,w,w,w,w,w))},
B(d){var w,v=this,u=null,t=A.Q(d).ax.a===B.dh,s=new D.Rt(t),r=t?C.t6:C.t4,q=t?C.t6:C.t4
q=A.a([q,t?C.O3:C.NX],x.O)
w=v.cgF(s)
if(v.f)t=B.lt
else{if(v.d==null){t=v.ay
t=A.a([v.aaO(s,t==null?"Nothing to show yet.":t,B.b_)],x.p)}else t=v.bIA(0,s)
t=A.Kl(A.co(t,u,u,C.aob,u,u,B.ah,!1),u,new D.eIu(v))}return A.c7(u,r,A.p(u,A.bo(!0,A.x(A.a([w,A.E(t,1)],x.p),B.l,u,B.e,B.h,0,B.p),!0,!1,B.ag,!0,!0),B.f,u,u,new A.o(u,u,u,u,u,new A.a8(B.aX,B.b1,B.x,q,u,u),B.m),u,u,u,u,u,u,u,u),u,!1,!1,u,u)},
cgF(d){var w,v,u,t,s,r=this,q=null,p=r.d,o=D.dD(p==null?q:J.t(p,"state")),n=J.z(o.h(0,"brakePaused"),!0),m=J.z(o.h(0,"enabled"),!0)&&!n
p=r.b3m(d,B.eC,new D.eIp(r))
w=d.a
v=x.p
u=A.a([A.c("Signal Grid",q,1,B.a2,q,q,q,A.l(q,q,w?C.cl:B.c,q,q,q,q,q,q,q,q,17,q,q,B.D,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],v)
if(r.d==null)u.push(A.c("Trading agent",q,1,B.a2,q,q,q,A.l(q,q,w?C.bT:C.bV,q,q,q,q,q,q,q,q,11.5,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q))
else{if(n)t=C.d4
else if(m)t=C.cF
else t=w?C.bT:C.bV
t=A.V(B.ni,t,q,q,q,7)
if(n)s="Paused"
else s=m?"Running":"Stopped"
if(n)w=C.d4
else if(m)w=C.cF
else w=w?C.bT:C.bV
u.push(A.A(A.a([t,B.da,new A.d3(1,B.ci,A.c(s,q,1,B.a2,q,q,q,A.l(q,q,w,q,q,q,q,q,q,q,q,11.5,q,q,B.D,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),q)],v),B.l,q,B.e,B.P,0,q,q))}p=A.a([p,B.ar,A.E(A.A(A.a([new A.d3(1,B.ci,A.x(u,B.B,q,B.e,B.h,0,B.p),q)],v),B.l,q,B.e,B.h,0,q,q),1)],v)
if(r.d!=null)B.d.u(p,A.a([B.aa,r.bbL(d,"options","Options",B.fN,B.az),B.aa,r.bbL(d,"scalper","Scalper",B.rj,B.as)],v))
p.push(B.aa)
p.push(r.b3m(d,B.nk,r.r?q:new D.eIq(r)))
return new A.D(B.hc,A.A(p,B.l,q,B.e,B.h,0,q,q),q)},
bIA(c4,c5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9=this,c0=null,c1="asset",c2="liveError",c3=b9.d
c3.toString
w=J.a2(c3)
v=D.dD(w.h(c3,"state"))
u=D.dD(w.h(c3,"config"))
t=D.dD(v.h(0,"snapshot"))
s=x.f
r=s.b(v.h(0,"shadow"))?D.dD(v.h(0,"shadow")):c0
q=D.fCO(t)
p=A.U(q).k("X<1>")
o=A.B(new A.X(q,new D.eHz(r),p),p.k("M.E"))
n=o.length===0?q:o
m=b9.Q!=null&&B.d.aR(n,new D.eHA(b9))?b9.Q:c0
if(m==null){p=r==null?c0:r.h(0,"symbol")
if(p==null)p=t.h(0,c1)
l=p==null?c0:J.k(p)}else l=m
k=B.d.dr(n,new D.eHB(l),new D.eHC(q,l,n,t))
p=r==null
j=p?c0:B.d.dr(q,new D.eHD(r),new D.eHE(k))
p=!p
i=p&&J.z(r.h(0,"symbol"),J.t(k,c1))?r:c0
h=b9.c8V(c5,c3,n,k,r)
g=D.dD(w.h(c3,"market"))
f=J.a2(k)
e=f.h(k,c1)
d=J.k(e==null?"SPY":e)
a0=B.a.q(d,"/")
a1=D.bFk(k)
a2=D.c4(f.h(k,"price"))
a3=a1.length!==0?D.c4(J.t(B.d.gG(a1),"c")):0
a4=a3===0?0:(a2-a3)/a3*100
a5=a4>=0
if(a0)a6=!0
else{e=f.h(k,"open")
if(e==null)e=g.h(0,"stockOpen")
a6=e==null?g.h(0,"open"):e}if(a0)a7="Crypto \xb7 the agent trades it on Saturday and Sunday only"
else{e=J.kR(a6)
if(e.A(a6,!0))a7="Stock market open \xb7 the agent trades it on weekdays \xb7 closes 4:00 PM ET"
else{e=e.A(a6,!1)?"Stock market closed"+b9.cMZ(g.h(0,"nextOpen")):""
a7=e}}a8=D.fCw(d)
e=c5.a
a9=e?B.c.j(0.92):C.i9
b0=A.m(22)
b1=A.K(e?B.c:C.n6,B.r,1)
b2=A.a([new A.aa(0,B.H,c5.gI3(),B.cz,12)],x.V)
b3=D.bDY(d,30)
b4=a0?d:d+"/USD"
b4=A.c(b4,c0,c0,c0,c0,c0,c0,A.l(c0,c0,e?C.cl:B.c,c0,c0,c0,c0,c0,c0,c0,c0,17,c0,c0,B.D,c0,c0,!0,c0,c0,c0,c0,c0,c0,c0,c0),c0,c0,c0)
f=f.h(k,"name")
f=J.k(f==null?a8.a:f)
b5=x.p
f=A.A(A.a([b3,B.ar,b4,B.ba,new A.d3(1,B.ci,A.c(f,c0,c0,B.a2,c0,c0,c0,A.l(c0,c0,e?C.bT:C.bV,c0,c0,c0,c0,c0,c0,c0,c0,13,c0,c0,c0,c0,c0,!0,c0,c0,c0,c0,c0,c0,c0,c0),c0,c0,c0),c0)],b5),B.l,c0,B.e,B.h,0,c0,c0)
b3=a2===0?"\u2014":D.eg(a2,!1,!1)
b3=A.a([A.E(new A.de(B.dp,B.a5,B.f,A.c(b3,c0,c0,c0,c0,c0,c0,A.l(c0,c0,e?C.cl:B.c,c0,c0,c0,c0,c0,c0,c0,G.Av,34,c0,c0,B.O,c0,c0,!0,c0,-1,c0,c0,c0,c0,c0,c0),c0,c0,c0),c0),1)],b5)
if(a1.length>1){b4=(a5?C.cF:C.d4).j(0.14)
b6=A.m(10)
b7=a5?L.a3Z:B.Id
b7=A.V(b7,a5?C.cF:C.d4,c0,c0,c0,20)
b8=B.i.a5(Math.abs(a4),2)
b3.push(A.p(c0,A.A(A.a([b7,A.c(b8+"%",c0,c0,c0,c0,c0,c0,A.l(c0,c0,a5?C.cF:C.d4,c0,c0,c0,c0,c0,c0,c0,c0,13,c0,c0,B.D,c0,c0,!0,c0,c0,c0,c0,c0,c0,c0,c0),c0,c0,c0)],b5),B.l,c0,B.e,B.P,0,c0,c0),B.f,c0,c0,new A.o(b4,c0,c0,b6,c0,c0,B.m),c0,c0,c0,c0,B.fZ,c0,c0,c0))}f=A.a([f,B.N,A.A(b3,B.l,c0,B.e,B.h,0,c0,c0)],b5)
if(a7.length!==0){if(J.z(a6,!0))b3=C.cF
else b3=e?C.bT:C.bV
b3=A.V(B.ni,b3,c0,c0,c0,7)
b4=a1.length>1?"  \xb7  change over 4H":""
B.d.u(f,A.a([B.at,A.A(A.a([b3,B.ba,new A.d3(1,B.ci,A.c(a7+b4,c0,c0,B.a2,c0,c0,c0,A.l(c0,c0,e?C.bT:C.bV,c0,c0,c0,c0,c0,c0,c0,c0,12,c0,c0,c0,c0,c0,!0,c0,c0,c0,c0,c0,c0,c0,c0),c0,c0,c0),c0)],b5),B.l,c0,B.e,B.h,0,c0,c0)],b5))}h=A.a([h,A.p(c0,A.x(f,B.B,c0,B.e,B.h,0,B.p),B.f,c0,c0,new A.o(a9,c0,b1,b0,b2,c0,B.m),c0,c0,c0,B.dU,B.eX,c0,c0,c0)],b5)
f=u.h(0,"problem")
if(J.k(f==null?"":f).length!==0)h.push(b9.aaO(c5,J.k(u.h(0,"problem")),E.i1))
f=w.h(c3,c2)
if(J.k(f==null?"":f).length!==0)h.push(b9.aaO(c5,J.k(w.h(c3,c2)),C.d4))
if(J.z(v.h(0,"brakePaused"),!0)){f=D.dD(w.h(c3,"ticket")).h(0,"totalBrakeUsd")
f=B.i.a5(D.c4(f==null?200:f),0)
a9=v.h(0,"brakeReason")
h.push(b9.aaO(c5,"Paused by the $"+f+" brake. "+A.v(a9==null?"":a9)+y.g,C.d4))}h.push(b9.bLA(c5,k,i))
h.push(b9.bId(c5,c3,v,t))
if(s.b(w.h(c3,"pace")))h.push(b9.aBn(c5,c3))
if(p){j.toString
h.push(b9.cs2(c5,r,j,D.dD(w.h(c3,"ticket")),D.dD(t.h(0,"held"))))}h.push(b9.aAH(c5,v))
h.push(b9.bI2(c5,v,c3))
h.push(b9.cJZ(c5,c3))
h.push(b9.bFb(c5))
h.push(b9.cyr(c5,c3))
c3=e?B.c.j(0.92):C.i9
w=A.m(16)
s=A.K(e?B.c:C.n6,B.r,1)
p=A.V(B.ko,C.cF,c0,c0,c0,18)
f=J.z(u.h(0,"ordersSwitchOn"),!0)?"on":"off"
h.push(A.p(c0,A.A(A.a([p,B.aa,A.E(A.c("No order is ever sent to Alpaca. Order switch: "+f+".",c0,c0,c0,c0,c0,c0,A.l(c0,c0,e?C.bT:C.bV,c0,c0,c0,c0,c0,c0,c0,c0,11.5,c0,c0,c0,c0,1.3,!0,c0,c0,c0,c0,c0,c0,c0,c0),c0,c0,c0),1)],b5),B.l,c0,B.e,B.h,0,c0,c0),B.f,c0,c0,new A.o(c3,c0,s,w,c0,c0,B.m),c0,c0,c0,H.ani,B.ep,c0,c0,c0))
return h},
cIW(d,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=null,g=D.dD(J.t(a0,"market")),f=x.g,e=f.a(g.h(0,"activeMarkets"))
if(e==null)e=B.bP
w=x.N
e=J.b8(e,new D.eIl(),w)
v=A.B(e,e.$ti.k("aj.E"))
f=f.a(g.h(0,"todaysList"))
if(f==null)f=B.bP
w=J.b8(f,new D.eIm(),w)
u=A.B(w,w.$ti.k("aj.E"))
t=J.z(g.h(0,"weekend"),!0)
if(a1==null)s=h
else{f=a1.h(0,"symbol")
s=f==null?h:J.k(f)}r=s!=null&&u.length!==0&&!B.d.q(u,s)
q=new A.X(v,new D.eIn(),A.U(v).k("X<1>")).gJ(0)
f=v.length
if(f!==0){f=f-q>0
e=""+q
p=f?"TRADING NOW: 10 STOCKS + "+e+" CRYPTO":"TRADING NOW: ALL "+e+" CRYPTO"
if(f)f=", plus the 10 stocks while the stock market is open"
else f=t?" (stocks trade on weekdays)":" (the stocks trade 9:30 AM to 4:00 PM ET)"
o="The 15 liquid crypto majors, around the clock"+f+". All of them are checked at the same time, every 5 minutes, and the agent buys the valid entry with the strongest 1-hour move. One trade at a time, at most 20 trades today (a maximum, never a target)."}else{f=A.U(u).k("X<1>")
o="Crypto trades around the clock and the 10 stocks ("+A.pe(new A.X(u,new D.eIo(),f),10,f.k("M.E")).aL(0,", ")+") while the stock market is open. The market list is loading."
p="NO MARKET TRADED RIGHT NOW"}f=(v.length===0?h:B.d.gG(v))==null
n=f?E.i1:C.cF
e=d.a
w=e?B.c.j(0.92):C.i9
m=A.m(22)
l=A.K(n.j(0.55),B.r,1)
k=A.V(!f?B.IG:B.vm,n,h,h,h,26)
j=A.c(p,h,h,h,h,h,h,A.l(h,h,n,h,h,h,h,h,h,h,h,13.5,h,h,B.u,h,h,!0,h,0.3,h,h,h,h,h,h),h,h,h)
f=A.c(o,h,h,h,h,h,h,A.l(h,h,e?C.cl:B.c,h,h,h,h,h,h,h,h,12,h,h,h,h,1.3,!0,h,h,h,h,h,h,h,h),h,h,h)
i=x.p
f=A.a([j,B.cQ,f,B.cQ,A.c("Buys only when the fast line crosses up AND the big trend is rising (slow line higher than 1 hour ago, price above it) AND the market moved +0.4% or more in the last hour.",h,h,h,h,h,h,A.l(h,h,e?C.bT:C.bV,h,h,h,h,h,h,h,h,11,h,h,h,h,1.3,!0,h,h,h,h,h,h,h,h),h,h,h)],i)
if(r)B.d.u(f,A.a([B.at,A.c("Still holding the "+s+" trade from before: the agent keeps checking its exits every 5 minutes.",h,h,h,h,h,h,C.fL_,h,h,h)],i))
return A.p(h,A.A(A.a([k,B.ar,A.E(A.x(f,B.B,h,B.e,B.h,0,B.p),1)],i),B.B,h,B.e,B.h,0,h,h),B.f,h,h,new A.o(w,h,l,m,h,h,B.m),h,h,h,h,B.bS,h,h,h)},
cDN(d,e,f){var w=null,v=this.c
v.toString
A.cg(w,w,!0,w,new D.eIh(this,d,e,f),v,w,!0,!0,x.H)},
bbL(d,e,f,g,h){var w,v,u,t,s,r,q,p,o=null,n=x.N,m=A.S(n,x.P),l=this.d
l=x.g.a(D.dD(l==null?o:J.t(l,"fast")).h(0,"systems"))
if(l==null)l=B.bP
l=J.cO(l,x.f)
w=J.aQ(l.a)
l=l.$ti
v=new A.k_(w,l.k("k_<1>"))
u=x.z
l=l.c
while(v.C()){t=l.a(w.gP(w))
s=A.v(J.t(t,"id"))
t=A.a0(t,n,u)
m.n(0,s,t)}r=m.h(0,e)
if(r==null)r=B.cI
q=J.z(r.h(0,"enabled"),!0)
p=r.h(0,"holding")!=null
if(p)n=" \xb7 holding "+A.v(r.h(0,"holding"))
else n=q?" \xb7 running":" \xb7 stopped"
m=A.m(11)
l=A.m(11)
l=A.a([A.p(o,A.V(g,B.c,o,o,o,20),B.f,o,o,new A.o(h,o,o,l,o,o,B.m),o,34,o,o,o,o,o,34)],x.p)
if(q||p){w=p?F.qH:C.cF
l.push(A.ao(o,A.p(o,o,B.f,o,o,new A.o(w,o,A.K(d.a?C.t6:C.t4,B.r,2),o,o,o,B.a6),o,11,o,o,o,o,o,11),o,o,o,-2,-2,o))}return A.ha(A.dB(o,!0,o,A.aM(!1,m,!0,new A.a4(34,34,new A.an(B.a0,o,B.ad,B.f,l,o),o),o,!0,o,o,o,o,o,o,o,o,o,o,o,new D.eIk(this,e),o,o,o,o,o,o,o),!1,o,o,o,o,!1,o,!1,o,o,o,o,o,o,o,o,o,o,f,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,B.cb,o),o,f+n,o,o,o)},
cKi(d){var w,v,u,t,s,r,q,p,o=null,n=J.a2(d)
if(J.z(n.h(d,"open"),!0)){w=D.dD(n.h(d,"chart")).h(0,"trend")
n=w==null?n.h(d,"trend"):w
v=J.k(n==null?"unknown":n)}else v="waiting"
switch(v){case"up":n=C.ffT
break
case"down":n=C.fgt
break
default:n=C.fj2
break}u=n.a
t=o
s=o
r=n.b
q=n.c
s=q
t=r
p=u
n=p.j(0.15)
w=A.m(6)
return A.dB(o,o,o,A.p(o,A.A(A.a([A.V(t,p,o,o,o,12),B.up,A.c(s,o,o,o,o,o,o,A.l(o,o,p,o,o,o,o,o,o,o,o,9,o,o,B.D,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],x.p),B.l,o,B.e,B.P,0,o,o),B.f,o,o,new A.o(n,o,o,w,o,o,B.m),o,o,o,o,V.ap0,o,o,o),!1,o,o,o,o,!1,o,!1,o,o,o,o,o,o,o,o,o,o,"trend "+A.v(s),o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,B.cb,o)},
c8V(d,e,f,g,h){var w,v,u,t,s,r,q=this,p=null
if(f.length<2)return B.bK
w=new A.X(f,new D.eHQ(),A.U(f).k("X<1>")).gJ(0)
v=d.a
u=A.c("Today's watchlist",p,p,p,p,p,p,A.l(p,p,v?C.cl:B.c,p,p,p,p,p,p,p,p,14,p,p,B.D,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)
t=w===0
s=t?"NONE TRADED NOW":""+w+" WATCHED NOW"
s=q.aAJ(s,t?E.i1:C.cF)
r=A.hhw(!1,p,!0,new A.D(B.eB,A.V(B.kN,t?E.i1:C.cF,p,p,p,19),p),!1,p,!0,!1,p,p,p,B.a6,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new D.eHR(q,d,e,h),p,p,p,p,20,p,p,p)
t=x.p
return new A.D(B.eA,A.x(A.a([new A.D(C.aoZ,A.A(A.a([u,B.aa,s,B.da,r,B.aW,A.c("tap one",p,p,p,p,p,p,A.l(p,p,v?C.bT:C.bV,p,p,p,p,p,p,p,p,11,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)],t),B.l,p,B.e,B.h,0,p,p),p),new A.a4(p,66,A.hM(B.f,q.crB(B.d.bl(f,new D.eHS(g))),new D.eHT(q,f,g,h,d),f.length,p,p,B.aK,new D.eHU(),!1),p),B.at],t),B.B,p,B.e,B.h,0,B.p),p)},
bLA(d,e,f){var w,v,u,t,s,r,q,p,o,n=this,m=null,l=D.bFk(e),k=l.length
if(k<2)return n.a0R(d,new A.a4(m,120,A.at(A.c(y.b,m,m,m,m,m,m,A.l(m,m,d.a?C.bT:C.bV,m,m,m,m,m,m,m,m,m,m,m,m,m,m,!0,m,m,m,m,m,m,m,m),m,m,m),m,m,m),m))
w=B.d.fB(l,Math.max(0,k-n.z))
k=x.p
v=A.a([],k)
for(u=0;u<3;++u){t=C.coc[u]
if(t<=12)s="1H"
else s=t<=24?"2H":"4H"
B.d.u(v,A.a([n.cAv(d,s,n.z===t,new D.eHH(n,t)),B.ba],k))}v.push(B.aW)
v.push(n.cKj(e))
v.push(B.ba)
v.push(n.b9_(d,"Trend lines",n.ax,new D.eHI(n),B.xu))
v=A.A(v,B.l,m,B.e,B.h,0,m,m)
s=n.ax
r=J.a2(e)
q=D.c4(r.h(e,"price"))
p=n.d
p=p==null?m:J.t(p,"trades")
x.g.a(p)
if(p==null)p=B.bP
p=J.cO(p,x.f)
p=A.cw(p,new D.eHJ(),p.$ti.k("M.E"),x.P)
p=A.B(p,A.a3(p).k("M.E"))
o=r.h(e,"asset")
v=A.a([v,B.S,new D.a_F(w,d,m,s,q,D.hLJ(p,A.v(o==null?r.h(e,"symbol"):o),F.qH,f),m)],k)
if(n.ax)B.d.u(v,A.a([B.N,A.c_(B.fV,A.a([n.ayu(d,B.bC,"Fast line (45 min)"),n.ayu(d,B.b_,"Slow line (1 h 45 min)"),n.ayu(d,F.qH,"Trade in")],k),B.br,m,4,14)],k))
return n.aAG(d,A.x(v,B.l,m,B.e,B.h,0,B.p),B.x2)},
cKj(d){var w,v,u,t,s,r,q=null,p=D.dD(J.t(d,"chart")).h(0,"trend")
switch(J.k(p==null?"unknown":p)){case"up":p=C.fhP
break
case"down":p=C.fhW
break
case"flat":p=C.fgl
break
default:p=C.fhd
break}w=p.a
v=q
u=q
t=p.b
s=p.c
u=s
v=t
r=w
p=A.m(10)
return A.ha(A.dB(q,q,q,A.p(q,A.V(v,B.c,q,q,q,20),B.f,q,q,new A.o(r,q,q,p,q,q,B.m),q,32,q,q,q,q,q,32),!1,q,q,q,q,!1,q,!1,q,q,q,q,q,q,q,q,q,q,u,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,B.cb,q),q,u,q,B.hmZ,q)},
bId(a9,b0,b1,b2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=null,e="equity",d=J.a2(b0),a0=D.dD(d.h(b0,"today")),a1=D.dD(d.h(b0,"record")),a2=D.dD(d.h(b0,"ticket")),a3=a1.h(0,"pnlSum")!=null?D.c4(a1.h(0,"pnlSum")):D.c4(b1.h(0,"totalPnl")),a4=D.c4(a0.h(0,"day_pnl")),a5=x.f,a6=a5.b(b1.h(0,"shadow"))?D.dD(b1.h(0,"shadow")):f,a7=a6!=null,a8=0
if(a7){w=D.dD(b2.h(0,"held"))
if(w.h(0,"pnl")!=null)a8=D.c4(w.h(0,"pnl"))
else if(!a5.b(a6.h(0,"option"))){v=D.c4(J.t(B.d.dr(D.fCO(b2),new D.eHv(a6),new D.eHw()),"price"))
if(v>0){a5=D.c4(a6.h(0,"qty"))
u=a6.h(0,"mult")==null?1:D.c4(a6.h(0,"mult"))
a8=a5*u*(v-D.c4(a6.h(0,"entryPrice")))}}}t=D.dD(a1.h(0,"newRules"))
s=t.h(0,"winRatePct")
r=D.c4(b2.h(0,e))
q=D.dD(d.h(b0,"fast"))
p=D.c4(q.h(0,"closed"))+D.c4(q.h(0,"open"))
o=a3+a8+p
d=A.m(26)
a5=A.a([new A.aa(0,B.H,B.is.j(0.3),B.eT,24)],x.V)
u=x.p
n=A.A(A.a([C.aZB],u),B.l,f,B.e,B.h,0,f,f)
n=A.a([n,B.at,new A.de(B.dp,B.a5,B.f,A.c(b2.h(0,e)==null?"\u2014":D.eg(r+a3+a8+p,!0,!1),f,f,f,f,f,f,C.fIO,f,f,f),f)],u)
if(b2.h(0,e)!=null){m=o>=0?L.a3Z:B.Id
l=o>0
if(l)k=C.cF
else k=o<0?C.d4:B.ab
k=A.V(m,k,f,f,f,f)
m=D.eg(o,!0,!0)
if(p!==0)a7=" (all systems)"
else a7=a7?" (incl. the open one)":""
if(l)l=C.cF
else l=o<0?C.d4:B.ab
n.push(A.A(A.a([k,A.c(m+" from trades"+a7,f,f,f,f,f,f,A.l(f,f,l,f,f,f,f,f,f,f,f,12.5,f,f,B.D,f,f,!0,f,f,f,f,f,f,f,f),f,f,f)],u),B.l,f,B.e,B.h,0,f,f))}n.push(B.bt)
n.push(A.c("Alpaca account "+D.eg(r,!0,!1)+" (unchanged, no orders are sent) \xb7 $"+B.i.a5(D.c4(a2.h(0,"amount")),0)+" a trade",f,f,f,f,f,f,B.Fz,f,f,f))
n.push(B.aB)
a7=D.eg(a4,!0,!0)
if(a4>0)m=C.cF
else m=a4<0?C.d4:B.c
m=A.E(g.AQ("Today",a7,m),1)
a7=D.eg(a3,!0,!0)
if(a3>0)l=C.cF
else l=a3<0?C.d4:B.c
l=A.E(g.AQ("All time",a7,l),1)
a7=a1.h(0,"wins")
a7=A.v(a7==null?0:a7)
k=a1.h(0,"losses")
a7=A.A(A.a([m,B.aa,l,B.aa,A.E(g.AQ("Wins / losses",a7+" / "+A.v(k==null?0:k),B.c),1)],u),B.l,f,B.e,B.h,0,f,f)
m=a0.h(0,"trades")
m=A.v(m==null?0:m)
l=a2.h(0,"maxTradesToday")
m=A.E(g.AQ("Trades today",m+" of "+A.v(l==null?20:l),B.c),1)
l=a2.h(0,"dailyStopUsd")
l=A.E(g.AQ("Daily stop","-$"+B.i.a5(D.c4(l==null?50:l),0),B.c),1)
k=a2.h(0,"totalBrakeUsd")
n.push(g.aRl("RESULTS AND LIMITS",A.a([a7,B.N,A.A(A.a([m,B.aa,l,B.aa,A.E(g.AQ("Total brake","-$"+B.i.a5(D.c4(k==null?100:k),0),B.c),1)],u),B.l,f,B.e,B.h,0,f,f)],u)))
n.push(B.S)
a7=a2.h(0,"amount")
a7=B.i.a5(D.c4(a7==null?100:a7),0)
m=J.z(a2.h(0,"kind"),"crypto")?"a coin":"a stock"
m=A.E(g.AQ("Buys","$"+a7+" of "+m,B.c),1)
a7=a2.h(0,"takeProfitUsd")
a7=A.E(g.AQ("Take profit","+$"+B.i.a5(D.c4(a7==null?50:a7),0),C.cF),1)
l=a2.h(0,"stopLossUsd")
a7=A.A(A.a([m,B.aa,a7,B.aa,A.E(g.AQ("Stop loss","-$"+B.i.a5(D.c4(l==null?50:l),0),C.d4),1)],u),B.l,f,B.e,B.h,0,f,f)
m=B.c.j(0.1)
l=A.m(14)
k=s==null
if(k)j="No $100 trades yet"
else{j=B.i.a5(D.c4(s),0)
i=t.h(0,"wins")
i=A.v(i==null?0:i)
h=t.h(0,"trades")
j=j+"%  \xb7  "+i+" won of "+A.v(h==null?0:h)}if(k)k=B.c
else k=D.c4(s)>=50?C.cF:C.d4
n.push(g.aRl("EACH TRADE",A.a([a7,B.N,A.p(f,A.A(A.a([A.E(A.x(A.a([C.h_5,B.bt,A.c(j,f,f,f,f,f,f,A.l(f,f,k,f,f,f,f,f,f,f,f,16,f,f,B.D,f,f,!0,f,f,f,f,f,f,f,f),f,f,f)],u),B.B,f,B.e,B.h,0,B.p),1),C.hfJ],u),B.l,f,B.e,B.h,0,f,f),B.f,f,f,new A.o(m,f,f,l,f,f,B.m),f,f,f,f,B.ep,f,f,1/0)],u)))
return A.p(f,A.x(n,B.B,f,B.e,B.h,0,B.p),B.f,f,f,new A.o(f,f,f,d,a5,C.av0,B.m),f,f,f,B.dU,B.f9,f,f,f)},
aBn(a8,a9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=null,a0="brakeNote",a1=J.a2(a9),a2=D.dD(a1.h(a9,"pace")),a3=D.dD(a1.h(a9,"todayStats")),a4=D.dD(a1.h(a9,"market")),a5=a2.h(0,"target"),a6=B.i.M(D.c4(a5==null?20:a5)),a7=B.i.M(D.c4(a2.h(0,"trades")))
a5=x.g
w=a5.a(a2.h(0,"lines"))
if(w==null)w=B.bP
v=x.N
w=J.b8(w,new D.eHX(),v)
u=A.B(w,w.$ti.k("aj.E"))
w=a5.a(a4.h(0,"cryptoDropped"))
if(w==null)w=B.bP
w=J.b8(w,new D.eHY(),v)
t=A.B(w,w.$ti.k("aj.E"))
s=D.c4(a3.h(0,"pnl"))
w=a2.h(0,"dayNote")
r=J.k(w==null?"":w)
w=a5.a(a1.h(a9,"cooldowns"))
if(w==null)w=B.bP
w=J.cO(w,x.f)
q=A.B(w,w.$ti.k("M.E"))
a5=a5.a(a1.h(a9,"whyFix"))
if(a5==null)a5=B.bP
a5=J.b8(a5,new D.eHZ(),v)
p=A.B(a5,a5.$ti.k("aj.E"))
a5=""+a6
w=a8.a
o=A.E(A.c("Trades today: "+a7+" of "+a5,d,d,d,d,d,d,A.l(d,d,w?C.cl:B.c,d,d,d,d,d,d,d,d,20,d,d,B.u,d,d,!0,d,d,d,d,d,d,d,d),d,d,d),1)
n=a7>=a6
a5=n?"MAX REACHED":"MAX "+a5
m=x.p
a5=A.A(A.a([o,this.aAJ(a5,n?E.i1:C.cF)],m),B.l,d,B.e,B.h,0,d,d)
o=a2.h(0,"maxHold")
o=B.i.M(D.c4(o==null?120:o))
o=A.c("Max hold "+o+" min \xb7 exits checked every 5 min",d,d,d,d,d,d,A.l(d,d,w?C.bT:C.bV,d,d,d,d,d,d,d,d,12,d,d,B.D,d,1.3,!0,d,d,d,d,d,d,d,d),d,d,d)
n=A.cf(new D.eI_(a8,a7,a6))
l=a2.h(0,"checkpoints")
l=A.v(l==null?"":l)
a5=A.a([a5,B.bt,o,B.N,n,B.N,A.c(l,d,d,d,d,d,d,A.l(d,d,w?C.cl:B.c,d,d,d,d,d,d,d,d,11,d,d,B.O,d,1.3,!0,d,d,d,d,d,d,d,d),d,d,d)],m)
for(o=u.length,k=0;k<u.length;u.length===o||(0,A.I)(u),++k)a5.push(new A.D(B.r7,A.c(u[k],d,d,d,d,d,d,C.aYk,d,d,d),d))
if(r.length!==0)a5.push(new A.D(B.kL,A.c(r,d,d,d,d,d,d,C.fGL,d,d,d),d))
a5.push(B.N)
if(a3.h(0,"closed")==null||D.c4(a3.h(0,"closed"))===0)o="No closed trades today yet"
else{o=a3.h(0,"wins")
o=A.v(o==null?0:o)
n=a3.h(0,"losses")
o="Today: "+o+" won, "+A.v(n==null?0:n)+" lost ("+B.i.a5(D.c4(a3.h(0,"winRatePct")),0)+"%)"}o=A.E(A.c(o,d,d,d,d,d,d,A.l(d,d,w?C.cl:B.c,d,d,d,d,d,d,d,d,12.5,d,d,B.D,d,d,!0,d,d,d,d,d,d,d,d),d,d,d),1)
n=D.eg(s,!0,!0)
if(s>0)l=C.cF
else if(s<0)l=C.d4
else l=w?C.cl:B.c
a5.push(A.A(A.a([o,A.c(n,d,d,d,d,d,d,A.l(d,d,l,d,d,d,d,d,d,d,d,14,d,d,B.u,d,d,!0,d,d,d,d,d,d,d,d),d,d,d)],m),B.l,d,B.e,B.h,0,d,d))
a5.push(B.aj)
l=a4.h(0,"cryptoCount")
o=A.v(l==null?"?":l)
n=J.z(a4.h(0,"cryptoFromAlpaca"),!1)?" (Alpaca's list could not be read, using the main ones for now)":" (the liquid majors only, thin coins are never traded)"
l=J.z(a4.h(0,"weekend"),!0)?"":" plus the 10 stocks in market hours"
a5.push(A.c("Watching "+o+" crypto pairs around the clock"+n+l+".",d,d,d,d,d,d,A.l(d,d,w?C.bT:C.bV,d,d,d,d,d,d,d,d,11.5,d,d,d,d,1.3,!0,d,d,d,d,d,d,d,d),d,d,d))
if(t.length!==0)a5.push(A.c("Dropped today (no longer tradable on Alpaca): "+B.d.aL(t,", "),d,d,d,d,d,d,C.fOE,d,d,d))
a5.push(B.aj)
o=q.length===0?"Cooldown: no market is resting right now.":"Cooldown (closed flat, not traded again for 2 hours): "+new A.O(q,new D.eI0(new D.eHW()),A.U(q).k("O<1,n>")).aL(0,", ")
if(q.length===0)n=w?C.bT:C.bV
else n=E.i1
a5.push(A.c(o,d,d,d,d,d,d,A.l(d,d,n,d,d,d,d,d,d,d,d,11.5,d,d,B.O,d,1.3,!0,d,d,d,d,d,d,d,d),d,d,d))
if(p.length!==0){o=w?C.qT:C.qU
n=A.m(12)
l=A.a([],m)
for(v=A.aol(p,0,v),j=J.aQ(v.a),v=v.b,i=new A.F6(j,v);i.C();){h=i.c
h=h>=0?new A.y(v+h,j.gP(j)):A.bi(A.fa())
g=h.a===0
f=g?0:3
if(g)e=w?C.cl:B.c
else e=w?C.bT:C.bV
g=g?B.D:B.cH
l.push(new A.D(new A.R(0,f,0,0),A.c(h.b,d,d,d,d,d,d,new A.G(!0,e,d,d,d,d,11.5,g,d,d,d,d,1.3,d,d,d,d,d,d,d,d,d,d,d,d,d),d,d,d),d))}B.d.u(a5,A.a([B.N,A.p(d,A.x(l,B.B,d,B.e,B.h,0,B.p),B.f,d,d,new A.o(o,d,d,n,d,d,B.m),d,d,d,d,B.bR,d,d,1/0)],m))}if(a1.h(a9,a0)!=null){a1=A.v(a1.h(a9,a0))
B.d.u(a5,A.a([B.aj,A.c(a1,d,d,d,d,d,d,A.l(d,d,w?C.bT:C.bV,d,d,d,d,d,d,d,d,11,d,d,d,d,1.3,!0,d,d,d,d,d,d,d,d),d,d,d)],m))}return this.a0R(a8,A.x(a5,B.B,d,B.e,B.h,0,B.p))},
aRl(d,e){var w=null,v=B.v.j(0.14),u=A.m(18),t=A.K(B.c.j(0.16),B.r,1),s=A.a([new A.D(B.aoS,A.c(d,w,w,w,w,w,w,C.fJQ,w,w,w),w)],x.p)
B.d.u(s,e)
return A.p(w,A.x(s,B.B,w,B.e,B.h,0,B.p),B.f,w,w,new A.o(v,w,t,u,w,w,B.m),w,w,w,w,B.bR,w,w,1/0)},
AQ(d,e,f){var w=null,v=B.c.j(0.1),u=A.m(14)
return A.p(w,A.x(A.a([A.c(d,w,1,B.a2,w,w,w,B.LT,w,w,w),B.bt,new A.de(B.dp,B.a5,B.f,A.c(e,w,w,w,w,w,w,A.l(w,w,f,w,w,w,w,w,w,w,w,15,w,w,B.D,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w)],x.p),B.B,w,B.e,B.h,0,B.p),B.f,w,w,new A.o(v,w,w,u,w,w,B.m),w,w,w,w,B.anp,w,w,w)},
cs2(a9,b0,b1,b2,b3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=this,a1=null,a2="price",a3=D.c4(b0.h(0,"entryPrice")),a4=D.c4(b0.h(0,"qty")),a5=b0.h(0,"mult")==null?1:D.c4(b0.h(0,"mult")),a6=x.f.b(b0.h(0,"option"))?D.dD(b0.h(0,"option")):a1,a7=J.a2(b1),a8=J.z(b0.h(0,"symbol"),a7.h(b1,"asset"))
if(b3.h(0,a2)!=null)w=D.c4(b3.h(0,a2))
else w=a6==null&&a8?D.c4(a7.h(b1,a2)):a3
a7=a4*a5
v=a7*a3
u=a7*w
t=u-v
s=a3===0?0:(w-a3)/a3*100
r=t>=0
q=b2.h(0,"takeProfitUsd")
p=D.c4(q==null?50:q)
q=b2.h(0,"stopLossUsd")
o=D.c4(q==null?50:q)
n=B.i.D((t+o)/(p+o),0,1)
m=a7===0?0:1/a7
l=a3-o*m
a7=a9.a
q=x.p
k=A.A(A.a([A.c("Your position",a1,a1,a1,a1,a1,a1,A.l(a1,a1,a7?C.cl:B.c,a1,a1,a1,a1,a1,a1,a1,a1,16,a1,a1,B.D,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1),B.aW,a0.aAJ("OPEN",C.cF)],q),B.l,a1,B.e,B.h,0,a1,a1)
j=D.eg(t,!0,!0)
j=A.c(j,a1,a1,a1,a1,a1,a1,A.l(a1,a1,r?C.cF:C.d4,a1,a1,a1,a1,a1,a1,a1,a1,34,a1,a1,B.D,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1)
i=s>=0?"+":""
h=B.i.a5(s,2)
j=A.A(A.a([j,B.aa,new A.D(B.eA,A.c(i+h+"%",a1,a1,a1,a1,a1,a1,A.l(a1,a1,r?C.cF:C.d4,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,B.D,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1),a1)],q),B.dt,a1,B.e,B.h,0,a1,a1)
i=r?"You would be winning right now":"You would be losing right now"
k=A.a([k,B.af,j,A.c(i,a1,a1,a1,a1,a1,a1,A.l(a1,a1,a7?C.bT:C.bV,a1,a1,a1,a1,a1,a1,a1,a1,12.5,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1),B.aB],q)
j=a6!=null
if(j){i=a7?C.qT:C.qU
h=A.m(16)
g=A.c("1 SPY call option",a1,a1,a1,a1,a1,a1,A.l(a1,a1,a7?C.bT:C.bV,a1,a1,a1,a1,a1,a1,a1,a1,11.5,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1)
f=D.eg(D.c4(a6.h(0,"strike")),!0,!1)
e=D.aQW(a6.h(0,"expiry"))
f=A.c("Strike "+f+" \xb7 expires "+e,a1,a1,a1,a1,a1,a1,A.l(a1,a1,a7?C.cl:B.c,a1,a1,a1,a1,a1,a1,a1,a1,15,a1,a1,B.D,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1)
e=D.eg(a3,!0,!1)
d=D.eg(v,!0,!1)
B.d.u(k,A.a([A.p(a1,A.x(A.a([g,B.bt,f,B.bt,A.c("Premium paid "+e+" a share x 100 = "+d,a1,a1,a1,a1,a1,a1,A.l(a1,a1,a7?C.bT:C.bV,a1,a1,a1,a1,a1,a1,a1,a1,11.5,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1)],q),B.B,a1,B.e,B.h,0,B.p),B.f,a1,a1,new A.o(i,a1,a1,h,a1,a1,B.m),a1,a1,a1,a1,B.bg,a1,a1,1/0),B.N],q))}i=A.E(a0.aAK(a9,"You put in",D.eg(v,!0,!1)),1)
h=D.eg(u,!0,!1)
k.push(A.A(A.a([i,B.aa,A.E(a0.aAL(a9,"Worth now",h,r?C.cF:C.d4),1)],q),B.l,a1,B.e,B.h,0,a1,a1))
k.push(B.N)
i=j?"Premium paid":"Bought at"
i=A.E(a0.aAK(a9,i,D.eg(a3,!0,!1)),1)
if(j){j=J.z(b3.h(0,"priced"),!1)?"no price yet":D.eg(w,!0,!1)
j=a0.aAL(a9,"Premium now",j,r?C.cF:C.d4)}else j=a0.aAK(a9,"Amount",B.i.a5(a4,a4<0.01?6:4)+" "+A.v(b0.h(0,"symbol")))
k.push(A.A(A.a([i,B.aa,A.E(j,1)],q),B.l,a1,B.e,B.h,0,a1,a1))
k.push(B.aO)
k.push(A.cf(new D.eI3(a9,n)))
k.push(B.aj)
j=D.eg(o,!0,!1)
k.push(A.A(A.a([A.E(A.c("Stop loss\n-"+j+" \xb7 at "+D.eg(l<0?0:l,!0,!1),a1,a1,a1,a1,a1,a1,C.fON,a1,a1,a1),1),A.E(A.c("Take profit\n+"+D.eg(p,!0,!1)+" \xb7 at "+D.eg(a3+p*m,!0,!1),a1,a1,a1,a1,a1,a1,C.fNk,B.e1,a1,a1),1)],q),B.l,a1,B.e,B.h,0,a1,a1))
k.push(B.aj)
q=D.hmT(b0.h(0,"entryAt"))
k.push(A.c("Bought "+q,a1,a1,a1,a1,a1,a1,A.l(a1,a1,a7?C.bT:C.bV,a1,a1,a1,a1,a1,a1,a1,a1,11.5,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1))
return a0.a0R(a9,A.x(k,B.B,a1,B.e,B.h,0,B.p))},
aAH(d,e){var w,v,u,t=this,s=null,r=J.z(e.h(0,"enabled"),!0)&&!J.z(e.h(0,"brakePaused"),!0),q=r?C.d4:C.cF
q=A.bp(q,s,s,s,s,s,s,s,new A.b9(A.m(999),B.a1),s,s,s)
w=t.r?s:new D.eHK(t,r)
v=A.V(r?B.vC:B.fO,s,s,s,s,s)
q=A.E(new A.a4(s,52,A.dd(v,s,A.c(r?"Stop agent":"Start agent",s,s,s,s,s,s,B.mM,s,s,s),w,q),s),3)
w=d.a
v=w?C.cl:B.c
u=w?C.oL:C.oG
w=w?B.c.j(0.92):C.i9
u=A.dl(s,s,w,s,s,s,s,s,s,v,s,s,s,s,new A.b9(A.m(999),B.a1),new A.ax(u,1.5,B.r,-1),s,s,s,s)
w=t.r
v=w?s:t.gczv()
return new A.D(B.dU,A.A(A.a([q,B.ar,A.E(new A.a4(s,52,A.er(w?B.Ll:C.c5e,s,C.hhW,v,u),s),2)],x.p),B.l,s,B.e,B.h,0,s,s),s)},
bI2(d,e,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i="every 5 min",h=J.z(e.h(0,"enabled"),!0)&&!J.z(e.h(0,"brakePaused"),!0),g=e.h(0,"lastTickAt"),f=A.be(A.v(g==null?"":g))
if(h)w=C.cF
else w=d.a?C.bT:C.bV
g=x.f
v=g.b(e.h(0,"shadow"))?D.dD(e.h(0,"shadow")):j
u=x.g.a(J.t(a0,"trades"))
g=J.cO(u==null?B.bP:u,g)
t=A.B(g,g.$ti.k("M.E"))
s=t.length===0?j:D.dD(B.d.gG(t))
g=v!=null
r=g?"Current trade from":"Last trade from"
if(g)q=A.v(v.h(0,"symbol"))
else if(s==null)q="no trade yet"
else{g=A.v(s.h(0,"asset"))
u=J.z(s.h(0,"decision"),"would buy")?"bought":"sold "+D.eg(D.c4(D.dD(s.h(0,"details")).h(0,"pnl")),!0,!0)
u=g+" ("+u+")"
q=u}g=new D.eHu(d)
u=d.a
p=u?B.c.j(0.92):C.i9
o=A.m(20)
n=A.K(w.j(0.35),B.r,1)
m=w.j(0.15)
l=A.m(9)
l=A.p(j,A.V(O.Ql,w,j,j,j,17),B.f,j,j,new A.o(m,j,j,l,j,j,B.m),j,28,j,j,j,j,j,28)
m=h?"Trades are automatic":"Agent is stopped"
m=A.E(A.c(m,j,j,j,j,j,j,A.l(j,j,u?C.cl:B.c,j,j,j,j,j,j,j,j,13.5,j,j,B.D,j,j,!0,j,j,j,j,j,j,j,j),j,j,j),1)
k=x.p
m=A.a([A.A(A.a([l,B.aa,m,A.c("Check now only looks",j,j,j,j,j,j,A.l(j,j,u?C.bT:C.bV,j,j,j,j,j,j,j,j,10.5,j,j,j,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)],k),B.l,j,B.e,B.h,0,j,j),B.S],k)
if(h)B.d.u(m,A.a([A.A(A.a([g.$2("Last check",f==null?"not yet":D.LG(D.Su(f))+" ET"),B.ba,g.$2("Next buy check",D.hJJ())],k),B.l,j,B.e,B.h,0,j,j),B.aj,A.A(A.a([g.$2("Checks every market",i),B.ba,g.$2("Open trade exits",i)],k),B.l,j,B.e,B.h,0,j,j),B.aj],k))
else B.d.u(m,A.a([A.c("It makes no trades. Press Start and it checks every market on the day's list every 5 minutes by itself.",j,j,j,j,j,j,A.l(j,j,u?C.bT:C.bV,j,j,j,j,j,j,j,j,12,j,j,j,j,1.35,!0,j,j,j,j,j,j,j,j),j,j,j),B.N],k))
m.push(A.A(A.a([g.$2(r,q)],k),B.l,j,B.e,B.h,0,j,j))
return A.p(j,A.x(m,B.B,j,B.e,B.h,0,B.p),B.f,j,j,new A.o(p,j,n,o,j,j,B.m),j,j,j,B.dU,B.bg,j,j,j)},
cJZ(b9,c0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0=this,b1=null,b2="entryPrice",b3="exitPrice",b4="exitKind",b5="outValue",b6="todayStats",b7=J.a2(c0),b8=x.g.a(b7.h(c0,"trades"))
if(b8==null)b8=B.bP
w=x.f
b8=J.cO(b8,w)
b8=A.cw(b8,new D.eIs(),b8.$ti.k("M.E"),x.P)
v=A.B(b8,A.a3(b8).k("M.E"))
b8=b9.a
u=x.p
t=A.a([A.c("Trades",b1,b1,b1,b1,b1,b1,A.l(b1,b1,b8?C.cl:B.c,b1,b1,b1,b1,b1,b1,b1,b1,16,b1,b1,B.D,b1,b1,!0,b1,b1,b1,b1,b1,b1,b1,b1),b1,b1,b1),B.N],u)
if(v.length===0){s=A.V(B.h0,b8?C.bT:C.bV,b1,b1,b1,b1)
t.push(new A.D(B.cq,A.A(A.a([s,B.ar,A.E(A.c("No trades yet. Each buy shows what was bought (for a SPY option: strike, expiry and premium) and what was put in; each sell shows the entry and exit price and the win or loss in dollars.",b1,b1,b1,b1,b1,b1,A.l(b1,b1,b8?C.bT:C.bV,b1,b1,b1,b1,b1,b1,b1,b1,12.5,b1,b1,b1,b1,1.3,!0,b1,b1,b1,b1,b1,b1,b1,b1),b1,b1,b1),1)],u),B.l,b1,B.e,B.h,0,b1,b1),b1))}s=J.aQ(b0.y?v:A.cV(v,0,A.dz(4,"count",x.S),A.U(v).c))
r=x.N
q=x.z
while(s.C()){p=s.gP(s)
o=J.a2(p)
n=J.z(o.h(p,"decision"),"would buy")
m=o.h(p,"details")
l=w.b(m)?A.a0(m,r,q):A.S(r,q)
if(w.b(l.h(0,"option"))){m=l.h(0,"option")
k=w.b(m)?A.a0(m,r,q):A.S(r,q)}else k=b1
m=k!=null
if(m){j=k.h(0,"strike")
if(!(typeof j=="number")){j=A.cA(A.v(j==null?"":j))
if(j==null)j=0}i="SPY "+D.eg(j,!0,!1)+" call"}else{j=o.h(p,"asset")
i=J.k(j==null?"":j)}if(l.h(0,"amount")==null)h=50
else{j=l.h(0,"amount")
if(typeof j=="number")h=j
else{j=A.cA(A.v(j==null?"":j))
if(j==null)j=0
h=j}}g=l.h(0,"qty")
if(!(typeof g=="number")){j=A.cA(A.v(g==null?"":g))
g=j==null?0:j}f=l.h(0,"pnl")
if(!(typeof f=="number")){j=A.cA(A.v(f==null?"":f))
f=j==null?0:j}e=l.h(0,b2)!=null
d=l.h(0,b2)
if(!(typeof d=="number")){j=A.cA(A.v(d==null?"":d))
d=j==null?0:j}if(l.h(0,b3)==null){j=o.h(p,"price")
if(typeof j=="number")a0=j
else{j=A.cA(A.v(j==null?"":j))
if(j==null)j=0
a0=j}}else{j=l.h(0,b3)
if(typeof j=="number")a0=j
else{j=A.cA(A.v(j==null?"":j))
if(j==null)j=0
a0=j}}if(m)if(n)a1="expires "+D.aQW(k.h(0,"expiry"))+" \xb7 premium "+D.eg(d,!0,!1)+" x 100"
else{m=D.eg(d,!0,!1)
j=D.eg(a0,!0,!1)
a2=o.h(p,"reason")
a2=J.k(a2==null?"":a2)
a3=B.a.cd(a2,"(")
a1="premium "+m+" to "+j+" \xb7 "+B.a.i(a3>0?B.a.aw(a2,0,a3):a2)}else if(n){if(g===0)m=""
else m=B.i.a5(g,g<0.01?6:4)+" at "
if(e)j=d
else{j=o.h(p,"price")
if(!(typeof j=="number")){j=A.cA(A.v(j==null?"":j))
if(j==null)j=0}}a1=m+D.eg(j,!0,!1)}else{m=e?D.eg(d,!0,!1)+" to ":"at "
j=D.eg(a0,!0,!1)
a2=o.h(p,"reason")
a2=J.k(a2==null?"":a2)
a3=B.a.cd(a2,"(")
a1=m+j+" \xb7 "+B.a.i(a3>0?B.a.aw(a2,0,a3):a2)}a4=f>=0
if(n)a5=B.ch
else a5=a4?C.cF:C.d4
m=b8?C.oL:C.oG
j=a5.j(0.14)
a2=new A.aP(13,13)
j=A.p(b1,A.V(n?B.tT:B.rl,a5,b1,b1,b1,20),B.f,b1,b1,new A.o(j,b1,b1,new A.bb(a2,a2,a2,a2),b1,b1,B.m),b1,40,b1,b1,b1,b1,b1,40)
a2=n?"Bought":"Sold"
a6=b8?C.cl:B.c
a2=A.c(a2+" "+i,b1,b1,b1,b1,b1,b1,new A.G(!0,a6,b1,b1,b1,b1,14,B.D,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1),b1,b1,b1)
a6=b8?C.bT:C.bV
a2=A.a([a2,B.bt,A.c(a1,b1,2,B.a2,b1,b1,b1,new A.G(!0,a6,b1,b1,b1,b1,11.5,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1),b1,b1,b1)],u)
a6=!n
if(a6&&l.h(0,b4)!=null){a7=A.v(l.h(0,b4))
a8=J.z(l.h(0,"flat"),!0)?" \xb7 flat":""
a9=a4?C.cF:C.d4
a2.push(A.c("Exit: "+a7+a8,b1,b1,b1,b1,b1,b1,new A.G(!0,a9,b1,b1,b1,b1,11,B.D,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1),b1,b1,b1))}p=o.h(p,"et_time")
p=J.k(p==null?"":p)
o=b8?C.bT:C.bV
a2.push(A.c(p,b1,b1,b1,b1,b1,b1,new A.G(!0,o,b1,b1,b1,b1,10.5,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1),b1,b1,b1))
p=A.x(a2,B.B,b1,B.e,B.h,0,B.p)
if(n)o="-"+D.eg(h,!0,!1)
else{if(l.h(0,b5)==null)o=h+f
else{o=l.h(0,b5)
if(!(typeof o=="number")){o=A.cA(A.v(o==null?"":o))
if(o==null)o=0}}o="+"+D.eg(o,!0,!1)}a2=b8?C.cl:B.c
o=A.a([A.c(o,b1,b1,b1,b1,b1,b1,new A.G(!0,a2,b1,b1,b1,b1,14,B.D,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1),b1,b1,b1)],u)
if(a6){a2=D.eg(f,!0,!0)
if(l.h(0,"pct")==null)a6=""
else{a6=l.h(0,"pct")
if(!(typeof a6=="number")){a6=A.cA(A.v(a6==null?"":a6))
if(a6==null)a6=0}a6=a6>=0?"+":""
a7=l.h(0,"pct")
if(!(typeof a7=="number")){a7=A.cA(A.v(a7==null?"":a7))
if(a7==null)a7=0}a7=" ("+a6+B.i.a5(a7,2)+"%)"
a6=a7}a7=a4?C.cF:C.d4
o.push(A.c(a2+a6,b1,b1,b1,b1,b1,b1,new A.G(!0,a7,b1,b1,b1,b1,12,B.D,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1),b1,b1,b1))}if(n){a2=b8?C.bT:C.bV
o.push(A.c("put in",b1,b1,b1,b1,b1,b1,new A.G(!0,a2,b1,b1,b1,b1,11,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1),b1,b1,b1))}t.push(A.p(b1,new A.c2(B.aK,B.e,B.h,B.l,b1,B.p,b1,0,A.a([j,B.bc,new A.bu(1,B.b8,p,b1),B.aa,A.x(o,B.dt,b1,B.e,B.h,0,B.p)],u),b1),B.f,b1,b1,new A.o(b1,b1,new A.bE(B.a1,B.a1,new A.ax(m,1,B.r,-1),B.a1),b1,b1,b1,B.m),b1,b1,b1,b1,B.jW,b1,b1,b1))}s=v.length
if(s>4)t.push(A.at(A.bM(!1,A.c(b0.y?"Show less":"Show all ("+s+")",b1,b1,b1,b1,b1,b1,b1,b1,b1,b1),b1,b1,!0,b1,b1,b1,new D.eIt(b0),b1,b1),b1,b1,b1))
if(w.b(b7.h(c0,b6))){w=D.dD(b7.h(c0,b6)).h(0,"flat")
w=A.v(w==null?0:w)
b7=D.dD(b7.h(c0,b6)).h(0,"closed")
b7=A.v(b7==null?0:b7)
b7=A.c("Flat trades today: "+w+" of "+b7+" closed",b1,b1,b1,b1,b1,b1,A.l(b1,b1,b8?C.cl:B.c,b1,b1,b1,b1,b1,b1,b1,b1,12.5,b1,b1,B.D,b1,b1,!0,b1,b1,b1,b1,b1,b1,b1,b1),b1,b1,b1)
B.d.u(t,A.a([B.N,b7,A.c("A flat trade closed between -$1 and +$1.",b1,b1,b1,b1,b1,b1,A.l(b1,b1,b8?C.bT:C.bV,b1,b1,b1,b1,b1,b1,b1,b1,11,b1,b1,b1,b1,b1,!0,b1,b1,b1,b1,b1,b1,b1,b1),b1,b1,b1)],u))}return b0.a0R(b9,A.x(t,B.B,b1,B.e,B.h,0,B.p))},
bFb(d){var w,v,u=this,t=null,s=u.x,r=u.e
r=s?r:J.E7(r,4).df(0)
s=d.a
w=A.c("Agent activity",t,t,t,t,t,t,A.l(t,t,s?C.cl:B.c,t,t,t,t,t,t,t,t,16,t,t,B.D,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)
v=x.p
v=A.a([A.A(A.a([w,B.aW,A.c("newest first",t,t,t,t,t,t,A.l(t,t,s?C.bT:C.bV,t,t,t,t,t,t,t,t,11,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],v),B.l,t,B.e,B.h,0,t,t),B.aj],v)
if(J.cx(u.e))v.push(new A.D(B.f8,A.c("Nothing yet. A new line appears with every automatic check (every 5 minutes).",t,t,t,t,t,t,A.l(t,t,s?C.bT:C.bV,t,t,t,t,t,t,t,t,12.5,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),t))
for(s=J.aQ(r);s.C();)v.push(u.c7H(d,s.gP(s)))
if(J.ad(u.e)>4){if(u.x)s=u.w?"Show older":"Show less"
else s="Show all"
v.push(A.at(A.bM(!1,A.c(s,t,t,t,t,t,t,t,t,t,t),t,t,!0,t,t,t,new D.eHt(u),t,t),t,t,t))}return u.a0R(d,A.x(v,B.B,t,B.e,B.h,0,B.p))},
c7H(d,e){var w,v,u,t,s,r=null,q="price",p=J.a2(e),o=p.h(e,"decision"),n=J.k(o==null?"":o)
A:{if("would buy"===n){o=C.cF
break A}if("would sell"===n){o=B.bC
break A}if("hold"===n){o=B.b_
break A}if("day start"===n||"day end"===n){o=B.ch
break A}if("start"===n){o=C.cF
break A}if("stop"===n){o=C.d4
break A}if(J.z(p.h(e,"kind"),"error"))o=C.d4
else o=d.a?C.bT:C.bV
break A}w=p.h(e,"fast_ma")!=null&&p.h(e,"slow_ma")!=null
v=A.p(r,r,B.f,r,r,new A.o(o,r,r,r,r,r,B.a6),r,8,r,K.P7,r,r,r,8)
u=n==="hold"?"Still holding":D.hHb(n)
t=x.p
o=A.a([A.c(u,r,r,r,r,r,r,A.l(r,r,o,r,r,r,r,r,r,r,r,12.5,r,r,B.D,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],t)
if(J.z(D.dD(p.h(e,"details")).h(0,"by"),"cron"))B.d.u(o,A.a([B.ba,A.c("automatic",r,r,r,r,r,r,A.l(r,r,d.a?C.bT:C.bV,r,r,r,r,r,r,r,r,10,r,r,B.O,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],t))
o.push(B.aW)
u=p.h(e,"et_time")
u=D.hoL(J.k(u==null?"":u))
s=d.a
o.push(A.c(u,r,r,r,r,r,r,A.l(r,r,s?C.bT:C.bV,r,r,r,r,r,r,r,r,10.5,r,r,r,r,r,!0,r,r,r,r,r,r,r,r),r,r,r))
o=A.A(o,B.l,r,B.e,B.h,0,r,r)
u=p.h(e,"reason")
u=D.hHb(J.k(u==null?"":u))
o=A.a([o,A.c(u,r,r,r,r,r,r,A.l(r,r,s?C.cl:B.c,r,r,r,r,r,r,r,r,12.5,r,r,r,r,1.3,!0,r,r,r,r,r,r,r,r),r,r,r)],t)
if(p.h(e,q)!=null||w){u=A.a([],x.s)
if(p.h(e,"asset")!=null&&p.h(e,q)!=null)u.push(A.v(p.h(e,"asset"))+" "+D.eg(D.c4(p.h(e,q)),!0,!1))
if(w)u.push("fast "+B.i.a5(D.c4(p.h(e,"fast_ma")),2)+" \xb7 slow "+B.i.a5(D.c4(p.h(e,"slow_ma")),2))
p=B.d.aL(u,"  \xb7  ")
o.push(A.c(p,r,r,r,r,r,r,A.l(r,r,s?C.bT:C.bV,r,r,r,r,r,r,r,r,10.5,r,r,r,r,r,!0,r,r,r,r,r,r,r,r),r,r,r))}return new A.D(B.HB,A.A(A.a([v,B.ar,A.E(A.x(o,B.B,r,B.e,B.h,0,B.p),1)],t),B.B,r,B.e,B.h,0,r,r),r)},
cyr(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=this.c
k.toString
k=A.Q(k).aH5(B.L)
w=d.a
v=w?C.cl:B.c
u=w?C.bT:C.bV
t=A.V(C.bVV,B.b_,l,l,l,l)
s=x.p
r=A.A(A.a([new A.d3(1,B.ci,A.c("The rules it follows",l,l,l,l,l,l,A.l(l,l,w?C.cl:B.c,l,l,l,l,l,l,l,l,14.5,l,l,B.D,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),l),B.aa,A.aA(l,A.p(l,C.frY,B.f,l,l,new A.o(l,l,l,A.m(999),l,B.tZ,B.m),l,l,l,l,B.hm,l,l,l),B.y,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,this.gcm0(),l,l,l,l,l,l,!1,B.a4)],s),B.l,l,B.e,B.h,0,l,l)
q=A.c("Read-only, set in the code",l,l,l,l,l,l,A.l(l,l,w?C.bT:C.bV,l,l,l,l,l,l,l,l,11.5,l,l,l,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)
p=A.a([],s)
o=x.g.a(J.t(e,"rules"))
o=J.aQ(o==null?B.bP:o)
while(o.C()){n=J.k(o.gP(o))
m=w?C.cl:B.c
p.push(new A.D(C.bEG,new A.c2(B.aK,B.e,B.h,B.B,l,B.p,l,0,A.a([C.eGx,B.aa,new A.bu(1,B.b8,A.c(n,l,l,l,l,l,l,new A.G(!0,m,l,l,l,l,12.5,l,l,l,l,l,1.35,l,l,l,l,l,l,l,l,l,l,l,l,l),l,l,l),l)],s),l),l))}return this.aAG(d,new A.ox(k,A.aG(!1,B.a3,!0,l,N.hh7(l,p,U.anT,l,u,v,!1,t,l,q,B.hd,r),B.f,l,0,l,l,l,l,l,B.i5),l),B.ag)},
aAG(d,e,f){var w=null,v=d.a,u=v?B.c.j(0.92):C.i9,t=A.m(24)
return A.p(w,e,B.f,w,w,new A.o(u,w,A.K(v?B.c:C.n6,B.r,1),t,A.a([new A.aa(0,B.H,d.gI3(),B.du,24)],x.V),w,B.m),w,w,w,B.dU,f,w,w,w)},
a0R(d,e){return this.aAG(d,e,B.bS)},
aaO(d,e,f){var w=null,v=f.j(0.12),u=A.m(16),t=A.K(f.j(0.45),B.r,1),s=A.V(B.QI,f,w,w,w,20)
return A.p(w,A.A(A.a([s,B.ar,A.E(A.c(e,w,w,w,w,w,w,A.l(w,w,d.a?C.cl:B.c,w,w,w,w,w,w,w,w,12.5,w,w,w,w,1.35,!0,w,w,w,w,w,w,w,w),w,w,w),1)],x.p),B.l,w,B.e,B.h,0,w,w),B.f,w,w,new A.o(v,w,t,u,w,w,B.m),w,w,w,B.dU,B.bg,w,w,w)},
b3m(d,e,f){var w=null,v=d.a,u=v?B.c.j(0.92):C.i9,t=A.K(v?B.c:C.n6,B.r,1)
return A.aG(!1,B.a3,!0,w,A.aM(!1,w,!0,A.p(w,A.V(e,v?C.cl:B.c,w,w,w,18),B.f,w,w,new A.o(w,w,t,w,w,w,B.a6),w,40,w,w,w,w,w,40),B.cM,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),B.f,u,0,w,w,B.cM,w,w,B.ai)},
b9_(d,e,f,g,h){var w,v,u,t,s,r,q,p=null
if(f){w=d.a
v=w?C.mZ:B.c
u=v
v=w
w=u}else{w=d.a
v=w?C.Oa:C.O0
u=v
v=w
w=u}t=A.m(999)
s=x.p
r=A.a([],s)
if(h!=null){if(f)q=v?B.c:C.mZ
else q=v?C.bT:C.bV
B.d.u(r,A.a([A.V(h,q,p,p,p,14),B.da],s))}if(f)v=v?B.c:C.mZ
else v=v?C.bT:C.bV
r.push(A.c(e,p,p,p,p,p,p,A.l(p,p,v,p,p,p,p,p,p,p,p,11.5,p,p,B.O,p,p,!0,p,p,p,p,p,p,p,p),p,p,p))
return A.aA(p,A.cX(p,A.A(r,B.l,p,B.e,B.P,0,p,p),p,p,B.aZ,new A.o(w,p,p,t,p,p,B.m),B.eI,p,p,p,p,W.a1H,p,p,p),B.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,g,p,p,p,p,p,p,!1,B.a4)},
cAv(d,e,f,g){return this.b9_(d,e,f,g,null)},
ayu(d,e,f){var w=null,v=A.p(w,w,B.f,w,w,new A.o(e,w,w,A.m(2),w,w,B.m),w,3,w,w,w,w,w,14)
return A.A(A.a([v,B.e_,A.c(f,w,w,w,w,w,w,A.l(w,w,d.a?C.bT:C.bV,w,w,w,w,w,w,w,w,11,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),B.l,w,B.e,B.P,0,w,w)},
aAJ(d,e){var w=null,v=e.j(0.14),u=A.m(999)
return A.p(w,A.c(d,w,w,w,w,w,w,A.l(w,w,e,w,w,w,w,w,w,w,w,10,w,w,B.u,w,w,!0,w,0.6,w,w,w,w,w,w),w,w,w),B.f,w,w,new A.o(v,w,w,u,w,w,B.m),w,w,w,w,B.fa,w,w,w)},
aAL(d,e,f,g){var w=null,v=d.a,u=v?C.qT:C.qU,t=A.m(16),s=A.c(e,w,w,w,w,w,w,A.l(w,w,v?C.bT:C.bV,w,w,w,w,w,w,w,w,11.5,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)
if(g==null)v=v?C.cl:B.c
else v=g
return A.p(w,A.x(A.a([s,B.cQ,new A.de(B.dp,B.a5,B.f,A.c(f,w,w,w,w,w,w,A.l(w,w,v,w,w,w,w,w,w,w,w,16,w,w,B.D,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w)],x.p),B.B,w,B.e,B.h,0,B.p),B.f,w,w,new A.o(u,w,w,t,w,w,B.m),w,w,w,w,B.bg,w,w,w)},
aAK(d,e,f){return this.aAL(d,e,f,null)},
cMZ(d){var w=A.v(d==null?"":d),v=A.be(w.length>=19?B.a.aw(w,0,19):"")
if(v==null)return""
return" \xb7 opens "+B.Tm[A.lV(v)-1]+" "+D.LG(v)+" ET"}}
D.QY.prototype={}
D.a_F.prototype={
R(){return new D.beD()}}
D.beD.prototype={
aAI(d,e){var w=this,v=w.a.c.length,u=B.o.D(B.i.bc(d.a/e*v),0,v-1)
if(u!==w.d)w.l(new D.cXg(w,u))},
B(d){return A.cf(new D.cXp(this))}}
D.beE.prototype={
a4(e2,e3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5=this,d6=null,d7={},d8=e3.b,d9=d8-18,e0=x.u,e1=A.a([],e0)
for(w=d5.d,v=w.length,u=0;t=w.length,u<t;w.length===v||(0,A.I)(w),++u){s=w[u]
t=J.a2(s)
r=t.h(s,"h")
if(!(typeof r=="number")){r=A.cA(A.v(r==null?"":r))
if(r==null)r=0}t=t.h(s,"l")
if(!(typeof t=="number")){t=A.cA(A.v(t==null?"":t))
if(t==null)t=0}B.d.u(e1,A.a([r,t],e0))}v=d5.r
if(v)for(u=0;u<w.length;w.length===t||(0,A.I)(w),++u){s=w[u]
r=A.a([],e0)
q=J.a2(s)
if(q.h(s,"f")!=null){p=q.h(s,"f")
if(!(typeof p=="number")){p=A.cA(A.v(p==null?"":p))
if(p==null)p=0}r.push(p)}if(q.h(s,"s")!=null){q=q.h(s,"s")
if(!(typeof q=="number")){q=A.cA(A.v(q==null?"":q))
if(q==null)q=0}r.push(q)}B.d.u(e1,r)}e0=d5.w
t=e0>0
if(t)e1.push(e0)
d7.a=B.d.eH(e1,B.py)
o=d7.b=B.d.eH(e1,B.ov)
e1=d7.a
if(o-e1<1e-9){r=d7.b=o+1
e1=d7.a=e1-1
n=r
r=e1
e1=n}else{r=e1
e1=o}m=(e1-r)*0.1
d7.a=r-m
d7.b=e1+m
l=w.length
e1=t?D.eg(e0,!0,!1):""
r=d5.e.a
q=r?B.c.j(0.92):C.i9
p=d5.b
k=A.h_(d6,B.cK,d6,d6,d6,A.cW(d6,d6,d6,d6,d6,d6,d6,d6,d6,A.l(d6,d6,q,d6,d6,d6,d6,d6,p,d6,d6,9.5,d6,d6,B.D,d6,d6,!0,d6,d6,d6,d6,d6,d6,d6,d6),e1),B.a7,B.cc,d6,B.e4,B.cd)
k.eL()
j=t?k.b.c+12:0
e1=e3.a
i=e1-j
h=i/l
g=new D.cXq(h)
f=new D.cXs(d7,d9)
$.T()
e=A.L()
e.r=(r?C.oL:C.oG).j(0.7).gp(0)
e.c=1
for(d=1;d<=3;++d){a0=d9*d/4
for(a1=0;a1<i;a1+=6)e2.ah(new A.r(a1,a0),new A.r(a1+2,a0),e)}q=A.a([],x.w)
for(a2=w.length,u=0;u<w.length;w.length===a2||(0,A.I)(w),++u){a3=J.t(w[u],"t")
q.push(A.be(A.v(a3==null?"":a3)))}a4=A.a([],x.T)
for(a2=d5.c,a3=a2.length,a5=l-1,u=0;u<a2.length;a2.length===a3||(0,A.I)(a2),++u){a6=a2[u]
a7=!0
if(q.length!==0)if(B.d.gG(q)!=null){a8=a6.a
a9=B.d.gG(q)
b0=a8.a
if(b0>=a9.gbq())a7=b0===a9.gbq()&&a8.b<a9.gcA()}if(a7)continue
for(a7=a6.a,b1=-1,d=0;d<l;++d){b2=q[d]
if(b2!=null){a8=b2.a
if(a8<=a7.gbq())a8=a8===a7.gbq()&&b2.b>a7.gcA()
else a8=!0
a8=!a8}else a8=!1
if(a8)b1=d}b3=B.d.gal(q)
if(b1>=0){a8=!1
if(b1===a5)if(b3!=null){a8=b3.gbq()
a8=B.o.ao(a7.b-b3.gcA()+1000*(a7.a-a8),6e7)>30
a7=a8}else a7=a8
else a7=a8}else a7=!0
if(a7)continue
a4.push(new A.y(b1,a6))}for(q=a4.length,a2=h*0.3,u=0;u<a4.length;a4.length===q||(0,A.I)(a4),++u){a3=a4[u]
a1=g.$1(a3.a)
$.T()
b4=new A.ar(B.U,B.R,B.X,B.Y,B.W)
b4.r=a3.b.d.j(0.75).gp(0)
b4.c=Math.min(2,Math.max(1,a2))
for(b5=12;b5<d9;b5+=7)e2.ah(new A.r(a1,b5),new A.r(a1,Math.min(d9,b5+3.5)),b4)}if(v){v=new D.cXr(d5,l,g,f,e2)
v.$2("s",B.b_)
v.$2("f",B.bC)}for(v=Math.max(2,h*0.62)/2,q=d5.x,a2=q!=null,d=0;d<l;++d){s=w[d]
a3=J.a2(s)
b6=a3.h(s,"o")
if(!(typeof b6=="number")){a7=A.cA(A.v(b6==null?"":b6))
b6=a7==null?0:a7}b7=a3.h(s,"c")
if(!(typeof b7=="number")){a7=A.cA(A.v(b7==null?"":b7))
b7=a7==null?0:a7}b8=a3.h(s,"h")
if(!(typeof b8=="number")){a7=A.cA(A.v(b8==null?"":b8))
b8=a7==null?0:a7}b9=a3.h(s,"l")
if(!(typeof b9=="number")){a3=A.cA(A.v(b9==null?"":b9))
b9=a3==null?0:a3}c0=b7>=b6?C.cF:E.i1
c1=a2&&q!==d
$.T()
c2=new A.ar(B.U,B.R,B.X,B.Y,B.W)
c2.r=(c1?c0.j(0.45):c0).gp(0)
a3=g.$1(d)
a7=f.$1(b8)
a8=g.$1(d)
a9=f.$1(b9)
c2.c=1.4
e2.ah(new A.r(a3,a7),new A.r(a8,a9),c2)
c3=f.$1(Math.max(b6,b7))
c4=f.$1(Math.min(b6,b7))
a9=A.bw(new A.a5(g.$1(d)-v,c3,g.$1(d)+v,Math.max(c4,c3+1.5)),B.hF)
c2.b=B.R
e2.aq(a9,c2)}if(t){v=f.$1(e0)
d5.bPo(e2,v,i,(r?C.cl:B.c).j(0.45),"")
e0=f.$1(e0)
v=k.b.a.c
v=v.gb4(v)
t=k.b.a.c
c5=J.a4U(e0,v/2+2,d9-t.gb4(t)/2-2)
t=i+3
v=k.b.a.c
v=c5-v.gb4(v)/2-2
e0=k.b
a3=e0.c
e0=e0.a.c
e0=A.bw(new A.a5(t,v,t+(a3+8),v+(e0.gb4(e0)+4)),B.pi)
$.T()
v=A.L()
v.r=(r?C.cl:B.c).j(0.85).gp(0)
e2.aq(e0,v)
e0=k.b.a.c
k.a4(e2,new A.r(i+7,c5-e0.gb4(e0)/2))}for(e0=a4.length,v=x.v,c6=0,u=0;u<a4.length;a4.length===e0||(0,A.I)(a4),++u){t=a4[u]
a6=t.b
a1=g.$1(t.a)
c3=1+B.o.F(c6,2)*12;++c6
t=$.T()
a3=A.a([],v)
c7=new A.aH(t.r,B.ak,d6,d6,a3)
a3.push(new A.aZ(a1-5,c3))
c7.ac()
t=new A.aq(a1+5,c3)
a3.push(t)
a7=c7.f
if(a7!=null)t.aj(a7)
c7.ac()
t=new A.aq(a1,c3+9)
a3.push(t)
a7=c7.f
if(a7!=null)t.aj(a7)
c7.ac()
t=new A.bA()
a3.push(t)
a3=c7.f
if(a3!=null)t.aj(a3)
c7.ac()
t=new A.ar(B.U,B.R,B.X,B.Y,B.W)
a3=a6.d
t.r=a3.gp(0)
e2.af(c7,t)
c8=new A.j2(new A.eH(a6.c,d6,d6,B.cY,d6,d6,d6,d6,d6,d6,new A.G(!0,a3,d6,p,d6,d6,10,B.D,d6,d6,d6,d6,d6,d6,d6,d6,d6,d6,d6,d6,d6,d6,d6,d6,d6,d6)),B.a7,B.cc,new A.ki(1),d6,d6,d6,d6,B.cd,d6,B.cK)
c8.eL()
t=a1+7
a3=c8.b.c
t=t+a3<=i?t:a1-7-a3
c8.a4(e2,new A.r(t,c3-1))}c8=A.h_(d6,B.cK,d6,d6,d6,d6,B.a7,B.cc,d6,B.e4,B.cd)
for(e0=[0,l/3|0,B.o.ao(2*l,3),a5],v=e0.length,d8-=13,u=0;u<v;++u){d=e0[u]
t=J.t(w[d],"t")
b2=A.be(A.v(t==null?"":t))
if(b2==null)continue
t=D.LG(D.Su(b2))
a3=r?C.bT:C.bV
c8.sb1(0,new A.eH(t,d6,d6,B.cY,d6,d6,d6,d6,d6,d6,new A.G(!0,a3,d6,p,d6,d6,10,d6,d6,d6,d6,d6,d6,d6,d6,d6,d6,d6,d6,d6,d6,d6,d6,d6,d6,d6)))
c8.eL()
t=g.$1(d)
a3=c8.b.c
c8.a4(e2,new A.r(B.i.D(t-a3/2,0,e1-a3),d8))}if(a2&&q<l){s=w[q]
a1=g.$1(q)
d8=J.a2(s)
c9=f.$1(D.c4(d8.h(s,"c")))
$.T()
d0=A.L()
d0.r=(r?C.cl:B.c).j(0.5).gp(0)
d0.c=1
for(b5=0;b5<d9;b5+=6)e2.ah(new A.r(a1,b5),new A.r(a1,b5+3),d0)
$.T()
e0=A.L()
e0.r=(r?B.c.j(0.92):C.i9).gp(0)
e2.O(new A.r(a1,c9),6,e0)
e0=A.L()
e0.r=(r?C.cl:B.c).gp(0)
e0.b=B.ac
e0.c=2.5
e2.O(new A.r(a1,c9),6,e0)
e0=d8.h(s,"t")
b2=A.be(A.v(e0==null?"":e0))
e0=b2==null?"":D.LG(D.Su(b2))+" ET\n"
d8=D.eg(D.c4(d8.h(s,"c")),!0,!1)
c8.sb1(0,A.cW(d6,d6,d6,d6,d6,d6,d6,d6,d6,A.l(d6,d6,r?B.c:C.mZ,d6,d6,d6,d6,d6,p,d6,d6,11.5,d6,d6,B.D,d6,1.3,!0,d6,d6,d6,d6,d6,d6,d6,d6),e0+d8))
c8.sDh(0,B.K)
c8.eL()
d8=c8.b
d1=d8.c+18
d8=d8.a.c
d2=d8.gb4(d8)+10
d3=B.i.D(a1-d1/2,0,e1-d1)
d4=Math.max(0,c9-d2-14)
e1=A.bw(new A.a5(d3,d4,d3+d1,d4+d2),B.hT)
d8=A.L()
d8.r=(r?C.mZ:B.c).gp(0)
e2.aq(e1,d8)
c8.a4(e2,new A.r(d3+9,d4+5))}},
bPp(d,e,f,g,h,i){var w,v,u,t,s,r,q,p,o,n,m=null
$.T()
w=A.L()
w.r=g.gp(0)
w.c=1.2
for(v=0;v<f;v+=7)d.ah(new A.r(v,e),new A.r(v+3.5,e),w)
if(h.length===0)return
u=A.h_(m,B.cK,m,m,m,A.cW(m,m,m,m,m,m,m,m,m,A.l(m,m,B.c,m,m,m,m,m,this.b,m,m,10,m,m,B.D,m,m,!0,m,m,m,m,m,m,m,m),h),B.a7,B.cc,m,B.e4,B.cd)
u.eL()
t=u.b
s=t.c+12
t=t.a.c
r=t.gb4(t)+6
q=i?0:f-s
t=e-r/2
p=A.bw(new A.a5(q,t,q+s,t+r),B.qi)
$.T()
o=A.L()
if(i)n=F.qH
else n=this.e.a?C.mZ:B.c
o.r=n.gp(0)
d.aq(p,o)
u.a4(d,new A.r(q+6,t+3))},
bPo(d,e,f,g,h){return this.bPp(d,e,f,g,h,!1)},
aD(d){var w=this
return d.d!==w.d||d.x!=w.x||d.r!==w.r||d.w!==w.w||d.e.a!==w.e.a||d.c!==w.c}}
D.bwA.prototype={
a4(d,e){var w,v,u,t,s,r,q,p,o,n,m=null,l=this.b
if(l.length<2)return
w=A.U(l).k("O<1,H>")
v=A.B(new A.O(l,new D.fiQ(),w),w.k("aj.E"))
u=B.d.eH(v,B.py)
t=B.d.eH(v,B.ov)-u
if(t<1e-9)t=1
l=$.T()
w=A.a([],x.v)
s=new A.aH(l.r,B.ak,m,m,w)
for(l=e.a,r=e.b,q=0;p=v.length,q<p;++q){p=q/(p-1)*l
o=r-(v[q]-u)/t*r
if(q===0){p=new A.aZ(p,o)
w.push(p)
o=s.f
if(o!=null)p.aj(o)
s.ac()}else{p=new A.aq(p,o)
w.push(p)
o=s.f
if(o!=null)p.aj(o)
s.ac()}}n=A.zP(s)
n.E(new A.aq(l,r))
n.E(new A.aq(0,r))
n.E(new A.bA())
$.T()
w=A.L()
p=this.c
w.san(new A.a8(B.aX,B.b1,B.x,A.a([p.j(0.25),p.j(0)],x.O),m,m).az(0,new A.a5(0,0,0+l,0+r)))
d.af(n,w)
w=A.L()
w.r=p.gp(0)
w.b=B.ac
w.c=1.8
w.e=B.dP
d.af(s,w)
w=B.d.gal(v)
o=A.L()
o.r=p.gp(0)
d.O(new A.r(l,r-(w-u)/t*r),3,o)},
aD(d){return d.b!==this.b||!d.c.A(0,this.c)}}
D.z2.prototype={}
D.Rt.prototype={
gI3(){return this.a?B.ch.j(0.08):B.v.j(0.35)}}
D.ON.prototype={
R(){return new D.aGs(A.a([],x.t))}}
D.aGs.prototype={
a_(){var w=this
w.a3()
w.a.toString
w.B6()
w.Br()
w.x=A.d1(B.na,new D.e8D(w))},
t(){var w=this.x
if(w!=null)w.a1(0)
this.a2()},
B6(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$B6=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.aB(),$async$B6)
case 7:q=e
n=r.a.c
p=A.aV(J.t(q.a,"ngmy_signal_grid_fast_"+n))
if(p==null||r.c==null||r.d!=null){w=1
break}o=A.a0(x.f.a(B.V.aP(0,p,null)),x.N,x.z)
r.l(new D.e85(r,o))
t=2
w=6
break
case 4:t=3
l=s.pop()
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$B6,v)},
Br(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j
var $async$Br=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:m=x.N
l=x.z
w=3
return A.b(A.hc(A.a([A.fR(A.J(["action","fsStatus","system",r.a.c],m,l),!1,!1,!1,!1,B.x_),A.fR(A.J(["action","fsLog","system",r.a.c,"limit",30],m,l),!1,!1,!1,!1,B.na)],x.o),x.h),$async$Br)
case 3:k=e
l=J.a2(k)
q=l.h(k,0)
o=l.h(k,1)
if(r.c==null){w=1
break}r.l(new D.e8k(r,q,o))
w=q!=null&&J.z(J.t(q,"ok"),!0)?4:5
break
case 4:t=7
w=10
return A.b(A.aB(),$async$Br)
case 10:p=e
w=11
return A.b(p.aB("String","ngmy_signal_grid_fast_"+r.a.c,B.V.au(A.J(["s",q,"log",r.e],m,x.K),null)),$async$Br)
case 11:t=2
w=9
break
case 7:t=6
j=s.pop()
w=9
break
case 6:w=2
break
case 9:case 5:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$Br,v)},
zc(d){return this.cBm(d)},
cBm(d){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$zc=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.d
t.l(new D.e8q(t,d))
w=3
return A.b(A.fR(A.J(["action","fsSet","system",t.a.c,"enabled",d],x.N,x.z),!1,!1,!1,!1,B.x_),$async$zc)
case 3:s=f
if(t.c==null){w=1
break}t.l(new D.e8r(t,s,r))
case 1:return A.h(u,v)}})
return A.i($async$zc,v)},
B(c3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8=this,a9=null,b0="brakePaused",b1="enabled",b2="entryPrice",b3="weekendNote",b4="pnlSum",b5="brakeNote",b6=A.Q(c3).ax.a===B.dh,b7=new D.Rt(b6),b8=a8.a.c==="options"?"Options":"Scalper",b9=a8.d,c0=D.dD(b9==null?a9:b9.h(0,"state")),c1=J.z(c0.h(0,b0),!0),c2=J.z(c0.h(0,b1),!0)&&!c1
b9=b6?C.t6:C.t4
w=b6?C.t6:C.t4
w=A.a([w,b6?C.O3:C.NX],x.O)
v=a8.a0T(b7,B.eC,new D.e8B(c3))
u=a8.a.c==="options"
t=u?B.az:B.as
s=A.m(11)
t=A.p(a9,A.V(u?B.fN:B.rj,B.c,a9,a9,a9,20),B.f,a9,a9,new A.o(t,a9,a9,s,a9,a9,B.m),a9,34,a9,a9,a9,a9,a9,34)
u=A.c(b8,a9,a9,a9,a9,a9,a9,A.l(a9,a9,b6?C.cl:B.c,a9,a9,a9,a9,a9,a9,a9,a9,17,a9,a9,B.D,a9,a9,!0,a9,a9,a9,a9,a9,a9,a9,a9),a9,a9,a9)
s=x.p
u=A.a([v,B.ar,t,B.ar,A.E(A.x(A.a([u,A.c("Fast system",a9,a9,a9,a9,a9,a9,A.l(a9,a9,b6?C.bT:C.bV,a9,a9,a9,a9,a9,a9,a9,a9,11.5,a9,a9,a9,a9,a9,!0,a9,a9,a9,a9,a9,a9,a9,a9),a9,a9,a9)],s),B.B,a9,B.e,B.h,0,B.p),1)],s)
if(a8.d!=null){if(c1)v=C.d4
else if(c2)v=C.cF
else v=b6?C.bT:C.bV
v=v.j(0.14)
t=A.m(999)
if(c1)r="Paused"
else r=c2?"Running":"Stopped"
if(c1)q=C.d4
else if(c2)q=C.cF
else q=b6?C.bT:C.bV
u.push(A.p(a9,A.c(r,a9,a9,a9,a9,a9,a9,A.l(a9,a9,q,a9,a9,a9,a9,a9,a9,a9,a9,12,a9,a9,B.D,a9,a9,!0,a9,a9,a9,a9,a9,a9,a9,a9),a9,a9,a9),B.f,a9,a9,new A.o(v,a9,a9,t,a9,a9,B.m),a9,a9,a9,a9,B.fZ,a9,a9,a9))}u.push(B.aa)
u.push(a8.a0T(b7,B.nk,a8.r?a9:new D.e8C(a8)))
v=A.A(u,B.l,a9,B.e,B.h,0,a9,a9)
if(a8.f)b6=B.lt
else{u=a8.d
if(u==null){b6=a8.w
b6=A.a([a8.Rj(b7,b6==null?"Nothing to show yet.":b6,B.b_)],s)}else{c0=D.dD(u.h(0,"state"))
t=x.f
p=t.b(c0.h(0,"shadow"))?D.dD(c0.h(0,"shadow")):a9
r=A.a([],s)
if(p!=null){q=D.dD(c0.h(0,"mark"))
o=t.b(p.h(0,"option"))?D.dD(p.h(0,"option")):a9
t=p.h(0,"entryAt")
n=A.be(A.v(t==null?"":t))
t=p.h(0,"maxHold")
m=B.i.M(D.c4(t==null?30:t))
l=n==null?a9:n.bL(A.dv(0,0,0,0,m,0).a)
k=D.c4(q.h(0,"pnl"))
t=a8.a.c==="options"?B.az:B.as
j=A.c("OPEN TRADE",a9,a9,a9,a9,a9,a9,A.l(a9,a9,b6?C.bT:C.bV,a9,a9,a9,a9,a9,a9,a9,a9,10.5,a9,a9,B.u,a9,a9,!0,a9,0.8,a9,a9,a9,a9,a9,a9),a9,a9,a9)
j=A.A(A.a([j,B.aW,new D.aBm(l,a8.a.c==="options"?B.az:B.as,a9)],s),B.l,a9,B.e,B.h,0,a9,a9)
i=o!=null
if(i){h=A.v(p.h(0,"symbol"))
g=D.eg(D.c4(o.h(0,"strike")),!0,!1)
f=o.h(0,"right")
h=h+" "+g+" "+A.v(f==null?"call":f)+" \xb7 expires "+D.aQW(o.h(0,"expiry"))}else h=A.v(p.h(0,"symbol"))
h=A.c(h,a9,a9,a9,a9,a9,a9,A.l(a9,a9,b6?C.cl:B.c,a9,a9,a9,a9,a9,a9,a9,a9,17,a9,a9,B.D,a9,a9,!0,a9,a9,a9,a9,a9,a9,a9,a9),a9,a9,a9)
if(i){i=D.eg(D.c4(p.h(0,b2)),!0,!1)
g=D.eg(D.c4(q.h(0,"cost")),!0,!1)
q=J.z(q.h(0,"priced"),!1)?"no price yet":D.eg(D.c4(q.h(0,"price")),!0,!1)
q="Premium paid "+i+" x 100 = "+g+" \xb7 now "+q}else q="$"+B.i.a5(D.c4(q.h(0,"cost")),0)+" bought at "+D.eg(D.c4(p.h(0,b2)),!0,!1)+" \xb7 now "+D.eg(D.c4(q.h(0,"price")),!0,!1)
q=A.c(q,a9,a9,a9,a9,a9,a9,A.l(a9,a9,b6?C.bT:C.bV,a9,a9,a9,a9,a9,a9,a9,a9,12,a9,a9,a9,a9,a9,!0,a9,a9,a9,a9,a9,a9,a9,a9),a9,a9,a9)
i=D.eg(k,!0,!0)
g=k>=0
i=A.c(i,a9,a9,a9,a9,a9,a9,A.l(a9,a9,g?C.cF:C.d4,a9,a9,a9,a9,a9,a9,a9,a9,26,a9,a9,B.u,a9,a9,!0,a9,a9,a9,a9,a9,a9,a9,a9),a9,a9,a9)
g=g?"winning right now":"losing right now"
i=A.A(A.a([i,B.aa,A.c(g,a9,a9,a9,a9,a9,a9,A.l(a9,a9,b6?C.bT:C.bV,a9,a9,a9,a9,a9,a9,a9,a9,12,a9,a9,a9,a9,a9,!0,a9,a9,a9,a9,a9,a9,a9,a9),a9,a9,a9)],s),B.l,a9,B.e,B.h,0,a9,a9)
g=D.hmT(p.h(0,"entryAt"))
f=l==null?"":" \xb7 max hold "+m+" min, closes by "+D.LG(D.Su(l.aa()))+" ET"
e=p.h(0,"tpUsd")==null?"":" \xb7 take profit +"+D.eg(D.c4(p.h(0,"tpUsd")),!0,!1)+" / stop -"+D.eg(D.c4(p.h(0,"slUsd")),!0,!1)
r.push(a8.b3l(b7,t,A.x(A.a([j,B.N,h,B.bt,q,B.aj,i,A.c("Bought "+g+f+e,a9,a9,a9,a9,a9,a9,A.l(a9,a9,b6?C.bT:C.bV,a9,a9,a9,a9,a9,a9,a9,a9,11.5,a9,a9,a9,a9,a9,!0,a9,a9,a9,a9,a9,a9,a9,a9),a9,a9,a9)],s),B.B,a9,B.e,B.h,0,B.p)))}r.push(a8.c8U(b7,u))
r.push(a8.bLz(b7,u))
p=D.dD(u.h(0,"shared"))
d=p.h(0,"balance")
a0=D.c4(p.h(0,"closed"))+D.c4(p.h(0,"open"))
t=A.m(26)
q=A.A(A.a([C.aZB,B.aW,A.p(a9,C.h4S,B.f,a9,a9,new A.o(B.c.j(0.14),a9,a9,A.m(999),a9,a9,B.m),a9,a9,a9,a9,B.fa,a9,a9,a9)],s),B.l,a9,B.e,B.h,0,a9,a9)
j=A.c(d==null?"\u2014":D.eg(D.c4(d),!0,!1),a9,a9,a9,a9,a9,a9,C.fIf,a9,a9,a9)
i=D.eg(a0,!0,!0)
if(a0>0)h=C.cF
else h=a0<0?C.d4:B.ab
h=A.c(i+" from trades of every system",a9,a9,a9,a9,a9,a9,A.l(a9,a9,h,a9,a9,a9,a9,a9,a9,a9,a9,12.5,a9,a9,B.D,a9,a9,!0,a9,a9,a9,a9,a9,a9,a9,a9),a9,a9,a9)
r.push(A.p(a9,A.x(A.a([q,B.at,new A.de(B.dp,B.a5,B.f,j,a9),h,B.bt,A.c("Alpaca account "+(p.h(0,"equity")==null?"\u2014":D.eg(D.c4(p.h(0,"equity")),!0,!1))+" (unchanged, no orders are sent)",a9,a9,a9,a9,a9,a9,B.Fz,a9,a9,a9)],s),B.B,a9,B.e,B.h,0,B.p),B.f,a9,a9,new A.o(a9,a9,a9,t,a9,C.av0,B.m),a9,a9,a9,B.dU,B.f9,a9,a9,a9))
t=a8.w
if(t!=null)r.push(a8.Rj(b7,t,C.d4))
if(J.z(c0.h(0,b0),!0)){t=c0.h(0,"brakeReason")
r.push(a8.Rj(b7,"Paused by this system's brake. "+A.v(t==null?"":t)+y.g,C.d4))}r.push(a8.aAH(b7,c0))
if(u.h(0,b3)!=null){t=A.V(B.arF,b6?C.bT:C.bV,a9,a9,a9,16)
q=A.v(u.h(0,b3))
r.push(new A.D(C.bKy,A.A(A.a([t,B.ba,A.E(A.c(q,a9,a9,a9,a9,a9,a9,A.l(a9,a9,b6?C.bT:C.bV,a9,a9,a9,a9,a9,a9,a9,a9,11.5,a9,a9,B.O,a9,a9,!0,a9,a9,a9,a9,a9,a9,a9,a9),a9,a9,a9),1)],s),B.l,a9,B.e,B.h,0,a9,a9),a9))}r.push(a8.aBn(b7,u))
r.push(a8.c6q(b7,u))
a1=D.dD(u.h(0,"record"))
a2=D.dD(u.h(0,"todayStats"))
a3=a2.h(0,"winRatePct")
a4=D.c4(a2.h(0,"pnl"))
t=a3==null
if(t)a5=b6?C.cl:B.c
else a5=D.c4(a3)>=50?C.cF:C.d4
q=A.c("TODAY: WIN RATE AND P/L",a9,a9,a9,a9,a9,a9,A.l(a9,a9,b6?C.bT:C.bV,a9,a9,a9,a9,a9,a9,a9,a9,10.5,a9,a9,B.u,a9,a9,!0,a9,0.9,a9,a9,a9,a9,a9,a9),a9,a9,a9)
j=t?"No closed trades today":B.i.a5(D.c4(a3),0)+"%"
j=A.a([A.c(j,a9,a9,a9,a9,a9,a9,A.l(a9,a9,a5,a9,a9,a9,a9,a9,a9,a9,a9,t?16:30,a9,a9,B.u,a9,a9,!0,a9,a9,a9,a9,a9,a9,a9,a9),a9,a9,a9),B.ar],s)
if(!t){t=D.eg(a4,!0,!0)
if(a4>0)i=C.cF
else if(a4<0)i=C.d4
else i=b6?C.cl:B.c
j.push(new A.D(Q.P2,A.c(t,a9,a9,a9,a9,a9,a9,A.l(a9,a9,i,a9,a9,a9,a9,a9,a9,a9,a9,16,a9,a9,B.D,a9,a9,!0,a9,a9,a9,a9,a9,a9,a9,a9),a9,a9,a9),a9))}t=A.A(j,B.dt,a9,B.e,B.h,0,a9,a9)
j=a2.h(0,"wins")
j=A.v(j==null?0:j)
i=a2.h(0,"closed")
i=A.v(i==null?0:i)
t=A.E(A.x(A.a([q,B.at,t,A.c(j+" won out of "+i+" closed today",a9,a9,a9,a9,a9,a9,A.l(a9,a9,b6?C.bT:C.bV,a9,a9,a9,a9,a9,a9,a9,a9,12,a9,a9,a9,a9,a9,!0,a9,a9,a9,a9,a9,a9,a9,a9),a9,a9,a9)],s),B.B,a9,B.e,B.h,0,B.p),1)
q=A.c("All time",a9,a9,a9,a9,a9,a9,A.l(a9,a9,b6?C.bT:C.bV,a9,a9,a9,a9,a9,a9,a9,a9,11,a9,a9,a9,a9,a9,!0,a9,a9,a9,a9,a9,a9,a9,a9),a9,a9,a9)
j=D.eg(D.c4(a1.h(0,b4)),!0,!0)
if(D.c4(a1.h(0,b4))>0)i=C.cF
else if(D.c4(a1.h(0,b4))<0)i=C.d4
else i=b6?C.cl:B.c
i=A.c(j,a9,a9,a9,a9,a9,a9,A.l(a9,a9,i,a9,a9,a9,a9,a9,a9,a9,a9,18,a9,a9,B.D,a9,a9,!0,a9,a9,a9,a9,a9,a9,a9,a9),a9,a9,a9)
j=a1.h(0,"wins")
j=A.v(j==null?0:j)
h=a1.h(0,"losses")
h=A.v(h==null?0:h)
r.push(a8.wq(b7,A.A(A.a([t,A.x(A.a([q,i,A.c(j+" W / "+h+" L",a9,a9,a9,a9,a9,a9,A.l(a9,a9,b6?C.bT:C.bV,a9,a9,a9,a9,a9,a9,a9,a9,11,a9,a9,a9,a9,a9,!0,a9,a9,a9,a9,a9,a9,a9,a9),a9,a9,a9)],s),B.dt,a9,B.e,B.h,0,B.p)],s),B.l,a9,B.e,B.h,0,a9,a9)))
if(a8.a.c==="options"&&u.h(0,b5)!=null)r.push(a8.Rj(b7,A.v(u.h(0,b5)),B.b_))
if(a8.a.c==="options")r.push(a8.cn4(b7,u))
r.push(a8.cBL(b7,u))
t=c0.h(0,"lastNote")
a6=J.k(t==null?"":t)
t=c0.h(0,"lastNoteAt")
if(t==null)t=c0.h(0,"lastTickAt")
a7=A.be(A.v(t==null?"":t))
if(J.z(c0.h(0,b1),!0))t=C.cF
else t=b6?C.bT:C.bV
t=A.V(O.Ql,t,a9,a9,a9,18)
q=J.z(c0.h(0,b1),!0)?"Checks every minute by itself":"Stopped: press Start to let it check every minute"
q=A.a([A.c(q,a9,a9,a9,a9,a9,a9,A.l(a9,a9,b6?C.cl:B.c,a9,a9,a9,a9,a9,a9,a9,a9,13,a9,a9,B.D,a9,a9,!0,a9,a9,a9,a9,a9,a9,a9,a9),a9,a9,a9)],s)
if(a6.length!==0){j=a7==null?"":D.LG(D.Su(a7.aa()))+" ET \xb7 "
B.d.u(q,A.a([B.cQ,A.c(j+a6,a9,a9,a9,a9,a9,a9,A.l(a9,a9,b6?C.bT:C.bV,a9,a9,a9,a9,a9,a9,a9,a9,12,a9,a9,a9,a9,1.3,!0,a9,a9,a9,a9,a9,a9,a9,a9),a9,a9,a9)],s))}r.push(a8.wq(b7,A.A(A.a([t,B.aa,A.E(A.x(q,B.B,a9,B.e,B.h,0,B.p),1)],s),B.B,a9,B.e,B.h,0,a9,a9)))
r.push(a8.cJY(b7,u))
r.push(a8.bFa(b7))
r.push(a8.cyq(b7,u))
r.push(a8.wq(b7,A.A(A.a([C.c5r,B.aa,A.E(A.c("No order is ever sent to Alpaca. Orders are disabled.",a9,a9,a9,a9,a9,a9,A.l(a9,a9,b6?C.bT:C.bV,a9,a9,a9,a9,a9,a9,a9,a9,11.5,a9,a9,a9,a9,1.3,!0,a9,a9,a9,a9,a9,a9,a9,a9),a9,a9,a9),1)],s),B.l,a9,B.e,B.h,0,a9,a9)))
b6=r}b6=A.Kl(A.co(b6,a9,a9,C.aob,a9,a9,B.ah,!1),a9,a8.gcgE())}return A.c7(a9,b9,A.p(a9,A.bo(!0,A.x(A.a([new A.D(B.hc,v,a9),A.E(b6,1)],s),B.l,a9,B.e,B.h,0,B.p),!0,!1,B.ag,!0,!0),B.f,a9,a9,new A.o(a9,a9,a9,a9,a9,new A.a8(B.aX,B.b1,B.x,w,a9,a9),B.m),a9,a9,a9,a9,a9,a9,a9,a9),a9,!1,!1,a9,a9)},
aAH(d,e){var w,v,u,t=this,s=null,r=J.z(e.h(0,"enabled"),!0)&&!J.z(e.h(0,"brakePaused"),!0),q=r?C.d4:C.cF
q=A.bp(q,s,s,s,s,s,s,s,new A.b9(A.m(999),B.a1),s,s,s)
w=t.r
if(!w)t.a.toString
v=w?s:new D.e7Z(t,r)
if(w)w=B.rH
else w=A.V(r?B.vC:B.fO,s,s,s,s,s)
if(r)u="Stop "+(t.a.c==="options"?"Options":"Scalper")
else u="Start "+(t.a.c==="options"?"Options":"Scalper")
return new A.D(B.dU,new A.a4(1/0,52,A.dd(w,s,A.c(u,s,s,s,s,s,s,B.mM,s,s,s),v,q),s),s)},
aBn(b5,b6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6=this,a7=null,a8="parts",a9="passes",b0=D.dD(b6.h(0,"pace")),b1=b0.h(0,"target"),b2=B.i.M(D.c4(b1==null?40:b1)),b3=B.i.M(D.c4(b0.h(0,"trades"))),b4=D.c4(b0.h(0,"thresholdPct"))
b1=b0.h(0,"entryFloor")
w=D.c4(b1==null?0.5:b1)
v=B.i.M(D.c4(b0.h(0,"minutesLeft")))
b1=x.g.a(b6.h(0,"ranking"))
if(b1==null)b1=B.bP
u=x.f
b1=J.cO(b1,u)
t=x.P
b1=A.cw(b1,new D.e8h(),b1.$ti.k("M.E"),t)
s=A.B(b1,A.a3(b1).k("M.E"))
r=b3>=b2?E.i1:C.cF
b1=D.dD(b6.h(0,"state")).h(0,"lastNote")
q=J.k(b1==null?"":b1)
b1=b0.h(0,"learned")
p=J.k(b1==null?"":b1)
b1=b0.h(0,"dayNote")
o=J.k(b1==null?"":b1)
b1=b5.a
n=A.c("TRADES TODAY",a7,a7,a7,a7,a7,a7,A.l(a7,a7,b1?C.bT:C.bV,a7,a7,a7,a7,a7,a7,a7,a7,10.5,a7,a7,B.u,a7,a7,!0,a7,0.9,a7,a7,a7,a7,a7,a7),a7,a7,a7)
m=J.z(b0.h(0,"inWindow"),!0)?""+B.o.ao(v,60)+"h "+B.o.F(v,60)+"m left":"window closed"
l=x.p
m=A.A(A.a([n,B.aW,a6.BX(m,b1?C.bT:C.bV)],l),B.l,a7,B.e,B.h,0,a7,a7)
n=""+b3
k=""+b2
j=A.A(A.a([A.E(A.c("Trades today: "+n+" of "+k,a7,a7,a7,a7,a7,a7,A.l(a7,a7,b1?C.cl:B.c,a7,a7,a7,a7,a7,a7,a7,a7,22,a7,a7,B.u,a7,a7,!0,a7,a7,a7,a7,a7,a7,a7,a7),a7,a7,a7),1)],l),B.dt,a7,B.e,B.h,0,a7,a7)
i=b0.h(0,"waiting")
n=A.c(n+" of "+k+" \u2014 "+A.v(i==null?"waiting for a real setup":i)+" ("+k+" is a maximum, never a target)",a7,a7,a7,a7,a7,a7,A.l(a7,a7,r,a7,a7,a7,a7,a7,a7,a7,a7,12.5,a7,a7,B.D,a7,1.3,!0,a7,a7,a7,a7,a7,a7,a7,a7),a7,a7,a7)
k=A.cf(new D.e8i(b5,b3,b2,r))
i=b1?C.qT:C.qU
h=A.m(12)
g=B.i.a5(w,2)
g=A.a([A.c("Entry floor today: +"+g+"%",a7,a7,a7,a7,a7,a7,A.l(a7,a7,b1?C.cl:B.c,a7,a7,a7,a7,a7,a7,a7,a7,13,a7,a7,B.D,a7,a7,!0,a7,a7,a7,a7,a7,a7,a7,a7),a7,a7,a7)],l)
if(b4>w+0.001)g.push(A.c("Needed for the next entry: +"+B.i.a5(b4,2)+"% (raised by a loss streak or a lesson)",a7,a7,a7,a7,a7,a7,C.aYk,a7,a7,a7))
g.push(B.bt)
g.push(A.c("An entry needs the 5-minute and 15-minute trends to agree, at least that move in the trade's direction in the last 30 minutes, the price past both averages, and no more than 1.5% in the last hour (no chasing). Falling behind never loosens a rule.",a7,a7,a7,a7,a7,a7,A.l(a7,a7,b1?C.bT:C.bV,a7,a7,a7,a7,a7,a7,a7,a7,11,a7,a7,a7,a7,1.3,!0,a7,a7,a7,a7,a7,a7,a7,a7),a7,a7,a7))
n=A.a([m,B.aj,j,B.bt,n,B.N,k,B.S,A.p(a7,A.x(g,B.B,a7,B.e,B.h,0,B.p),B.f,a7,a7,new A.o(i,a7,a7,h,a7,a7,B.m),a7,a7,a7,a7,B.bR,a7,a7,1/0)],l)
if(s.length!==0){m=A.a([B.N,A.c("Top 3 ranked right now",a7,a7,a7,a7,a7,a7,A.l(a7,a7,b1?C.cl:B.c,a7,a7,a7,a7,a7,a7,a7,a7,12.5,a7,a7,B.D,a7,a7,!0,a7,a7,a7,a7,a7,a7,a7,a7),a7,a7,a7),B.bt],l)
for(t=A.aol(s,0,t),k=J.aQ(t.a),t=t.b,j=new A.F6(k,t),i=x.N,h=x.z;j.C();){g=j.c
g=g>=0?new A.y(t+g,k.gP(k)):A.bi(A.fa())
f=g.b
e=J.a2(f)
d=A.v(e.h(f,"symbol"))
a0=A.v(e.h(f,"score"))
a1=e.h(f,a8)
a1=(u.b(a1)?A.a0(a1,i,h):A.S(i,h)).h(0,"base")
a1=A.v(a1==null?"?":a1)
a2=e.h(f,a8)
a2=(u.b(a2)?A.a0(a2,i,h):A.S(i,h)).h(0,"record")
a2=A.v(a2==null?0:a2)
a3=e.h(f,a8)
a3=(u.b(a3)?A.a0(a3,i,h):A.S(i,h)).h(0,"bucket")
a3=A.v(a3==null?0:a3)
if(J.z(e.h(f,a9),!0))a4="PASSES"
else{a4=e.h(f,"why")
if(a4==null)a4=""}a4=A.v(a4)
if(J.z(e.h(f,a9),!0))a5=C.cF
else a5=b1?C.bT:C.bV
e=J.z(e.h(f,a9),!0)?B.D:B.cH
m.push(new A.D(B.r7,A.c(""+(g.a+1)+". "+d+" \xb7 score "+a0+" (strength and trend "+a1+", record "+a2+", setup size "+a3+") \xb7 "+a4,a7,a7,a7,a7,a7,a7,new A.G(!0,a5,a7,a7,a7,a7,11.5,e,a7,a7,a7,a7,1.3,a7,a7,a7,a7,a7,a7,a7,a7,a7,a7,a7,a7,a7),a7,a7,a7),a7))}B.d.u(n,m)}if(p.length!==0){u=A.cW(A.a([A.cW(a7,a7,a7,a7,a7,a7,a7,a7,a7,A.l(a7,a7,a6.a.c==="options"?B.az:B.as,a7,a7,a7,a7,a7,a7,a7,a7,a7,a7,a7,B.u,a7,a7,!0,a7,a7,a7,a7,a7,a7,a7,a7),"What it learned: "),A.cW(a7,a7,a7,a7,a7,a7,a7,a7,a7,a7,p)],x.R),a7,a7,a7,a7,a7,a7,a7,a7,a7,a7)
B.d.u(n,A.a([B.N,A.Gx(u,a7,a7,A.l(a7,a7,b1?C.cl:B.c,a7,a7,a7,a7,a7,a7,a7,a7,12,a7,a7,a7,a7,1.35,!0,a7,a7,a7,a7,a7,a7,a7,a7),a7)],l))}if(o.length!==0)B.d.u(n,A.a([B.aj,A.c(o,a7,a7,a7,a7,a7,a7,A.l(a7,a7,E.i1,a7,a7,a7,a7,a7,a7,a7,a7,12,a7,a7,B.O,a7,1.3,!0,a7,a7,a7,a7,a7,a7,a7,a7),a7,a7,a7)],l))
if(q.length!==0){u=A.cW(A.a([A.cW(a7,a7,a7,a7,a7,a7,a7,a7,a7,A.l(a7,a7,a6.a.c==="options"?B.az:B.as,a7,a7,a7,a7,a7,a7,a7,a7,a7,a7,a7,B.u,a7,a7,!0,a7,a7,a7,a7,a7,a7,a7,a7),"Last decision: "),A.cW(a7,a7,a7,a7,a7,a7,a7,a7,a7,a7,q)],x.R),a7,a7,a7,a7,a7,a7,a7,a7,a7,a7)
B.d.u(n,A.a([B.aj,A.Gx(u,a7,a7,A.l(a7,a7,b1?C.cl:B.c,a7,a7,a7,a7,a7,a7,a7,a7,12,a7,a7,a7,a7,1.3,!0,a7,a7,a7,a7,a7,a7,a7,a7),a7)],l))}return a6.wq(b5,A.x(n,B.B,a7,B.e,B.h,0,B.p))},
c6q(a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=this,a2=null,a3="text",a4=D.dD(a6.h(0,"learning"))
if(a4.a===0)return B.bK
w=new D.e82(a4)
v=w.$1("lessons")
u=w.$1("benched")
t=w.$1("lastLosses")
s=x.g.a(a4.h(0,"review"))
if(s==null)s=B.bP
s=J.b8(s,new D.e8_(),x.N)
r=A.B(s,s.$ti.k("aj.E"))
s=a4.h(0,"pauseUntil")
q=A.be(A.v(s==null?"":s))
p=new D.e80(a5)
o=new D.e81(a1,a5)
s=A.V(B.QR,a1.a.c==="options"?B.az:B.as,a2,a2,a2,18)
n=a5.a
m=A.c("LEARNING",a2,a2,a2,a2,a2,a2,A.l(a2,a2,n?C.cl:B.c,a2,a2,a2,a2,a2,a2,a2,a2,12,a2,a2,B.u,a2,a2,!0,a2,0.8,a2,a2,a2,a2,a2,a2),a2,a2,a2)
l=J.a2(v)
k=l.gJ(v)===0?"NO LESSONS YET":""+l.gJ(v)+" ACTIVE"
if(l.gJ(v)===0)j=n?C.bT:C.bV
else j=a1.a.c==="options"?B.az:B.as
i=x.p
j=A.a([A.A(A.a([s,B.ba,m,B.aW,a1.BX(k,j)],i),B.l,a2,B.e,B.h,0,a2,a2)],i)
if(J.z(a4.h(0,"setupNeeded"),!0))j.push(new A.D(B.hz,A.c("The learning store is not set up yet: run the learning SQL in Supabase.",a2,a2,a2,a2,a2,a2,A.l(a2,a2,C.d4,a2,a2,a2,a2,a2,a2,a2,a2,12,a2,a2,B.O,a2,a2,!0,a2,a2,a2,a2,a2,a2,a2,a2),a2,a2,a2),a2))
j.push(p.$1("Lessons active today"))
if(l.gJ(v)===0){s=a4.h(0,"empty")
s=A.v(s==null?"No lessons yet \u2014 still learning this market.":s)
j.push(A.c(s,a2,a2,a2,a2,a2,a2,A.l(a2,a2,n?C.bT:C.bV,a2,a2,a2,a2,a2,a2,a2,a2,12,a2,a2,a2,a2,a2,!0,a2,a2,a2,a2,a2,a2,a2,a2),a2,a2,a2))}for(s=v.length,h=0;h<v.length;v.length===s||(0,A.I)(v),++h){g=v[h]
m=J.a2(g)
l=m.h(g,a3)
l=A.v(l==null?"":l)
j.push(o.$1(l+(m.h(g,"at")==null?"":" \xb7 "+D.hoL(D.hmT(m.h(g,"at"))))))}if(q!=null&&q.c8(new A.W(Date.now(),0,!1)))j.push(o.$3$c$icon("Paused after 2 losses in a row until "+D.LG(D.Su(q.aa()))+" ET",E.i1,C.bVw))
if(J.z(a4.h(0,"stepUpNext"),!0))j.push(o.$3$c$icon("The next entry needs +0.8% or more in 30 minutes (after 2 losses in a row)",E.i1,B.mx))
j.push(p.$1("Benched markets"))
if(J.ad(u)===0)j.push(A.c("None benched today.",a2,a2,a2,a2,a2,a2,A.l(a2,a2,n?C.bT:C.bV,a2,a2,a2,a2,a2,a2,a2,a2,12,a2,a2,a2,a2,a2,!0,a2,a2,a2,a2,a2,a2,a2,a2),a2,a2,a2))
for(s=u.length,h=0;h<u.length;u.length===s||(0,A.I)(u),++h){f=u[h]
m=J.a2(f)
l=m.h(f,a3)
j.push(o.$3$c$icon(A.v(l==null?m.h(f,"symbol"):l),C.d4,B.tI))}j.push(p.$1("What the next entry needs"))
s=B.i.a5(D.c4(a4.h(0,"thresholdPct")),2)
m=a1.a.c==="options"?B.az:B.as
m=a1.BX("STRENGTH +"+s+"%",m)
s=B.i.M(D.c4(a4.h(0,"maxHold")))
l=a1.a.c==="options"?B.az:B.as
l=a1.BX("MAX HOLD "+s+" MIN",l)
s=B.i.a5(D.c4(a4.h(0,"chaseCapPct")),1)
k=a1.a.c==="options"?B.az:B.as
k=a1.BX("NO-CHASE "+s+"% IN 1 H",k)
s=B.i.M(D.c4(a4.h(0,"chopSkipAt")))
e=a1.a.c==="options"?B.az:B.as
e=A.a([m,l,k,a1.BX("CHOP SKIP "+s+"+",e)],i)
if(J.z(a4.h(0,"need60"),!0))e.push(a1.BX("1-HOUR TREND MUST AGREE",E.i1))
j.push(A.c_(B.bI,e,B.br,a2,6,6))
j.push(p.$1("Last 5 loss reasons"))
if(J.ad(t)===0)j.push(A.c("No graded losses yet.",a2,a2,a2,a2,a2,a2,A.l(a2,a2,n?C.bT:C.bV,a2,a2,a2,a2,a2,a2,a2,a2,12,a2,a2,a2,a2,a2,!0,a2,a2,a2,a2,a2,a2,a2,a2),a2,a2,a2))
for(s=t.length,h=0;h<t.length;t.length===s||(0,A.I)(t),++h){g=t[h]
m=J.a2(g)
l=A.v(m.h(g,"market"))
k=m.h(g,"pnl")
if(!(typeof k=="number")){k=A.cA(A.v(k==null?"":k))
if(k==null)k=0}k=D.eg(k,!0,!0)
e=D.hFE(A.v(m.h(g,"reason")))
m=m.h(g,a3)
m=A.v(m==null?"":m)
d=n?C.cl:B.c
j.push(o.$3$c$icon(l+" "+k+" \xb7 "+e+": "+m,d,B.cC))}if(r.length!==0){s=A.a([p.$1("What I learned yesterday")],i)
for(m=r.length,h=0;h<r.length;r.length===m||(0,A.I)(r),++h){a0=r[h]
s.push(o.$2$c(a0,n?C.bT:C.bV))}B.d.u(j,s)}return a1.wq(a5,A.x(j,B.B,a2,B.e,B.h,0,B.p))},
b07(d){var w=x.g.a(d.h(0,"markets"))
if(w==null)w=B.bP
w=J.cO(w,x.f)
w=A.cw(w,new D.e8b(),w.$ti.k("M.E"),x.P)
w=A.B(w,A.a3(w).k("M.E"))
return w},
b97(d){if(d.length===0)return null
return B.d.dr(d,new D.e8o(this),new D.e8p(d))},
c8U(d,e){var w,v,u,t,s,r,q=this,p=null,o=q.b07(e)
if(o.length===0)return B.bK
w=q.b97(o)
w.toString
v=new A.X(o,new D.e88(),A.U(o).k("X<1>")).gJ(0)
u=o.length
t=d.a
u=A.c("Its markets ("+u+")",p,p,p,p,p,p,A.l(p,p,t?C.cl:B.c,p,p,p,p,p,p,p,p,14,p,p,B.D,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)
s=v===0
r=s?"NONE PASSING NOW":""+v+" PASSING NOW"
if(s)s=t?C.bT:C.bV
else s=C.cF
s=q.BX(r,s)
r=x.p
return new A.D(B.d7,A.x(A.a([new A.D(C.aoZ,A.A(A.a([u,B.aa,s,B.aW,A.c("tap one",p,p,p,p,p,p,A.l(p,p,t?C.bT:C.bV,p,p,p,p,p,p,p,p,11,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)],r),B.l,p,B.e,B.h,0,p,p),p),new A.a4(p,96,A.hM(B.f,p,new D.e89(q,o,w,d),o.length,p,p,B.aK,new D.e8a(),!1),p)],r),B.B,p,B.e,B.h,0,B.p),p)},
bLz(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f="symbol",e=h.b97(h.b07(a0))
if(e==null)return B.bK
w=J.a2(e)
v=x.g
u=v.a(D.dD(w.h(e,"chart")).h(0,"points"))
if(u==null)u=B.bP
t=x.f
u=J.cO(u,t)
s=x.P
u=A.cw(u,new D.e7X(),u.$ti.k("M.E"),s)
r=A.B(u,A.a3(u).k("M.E"))
q=D.dD(w.h(e,"analysis"))
p=D.c4(w.h(e,"changePct"))
u=D.bDY(A.v(w.h(e,f)),24)
o=A.v(w.h(e,f))
n=d.a
o=A.c(o,g,g,g,g,g,g,A.l(g,g,n?C.cl:B.c,g,g,g,g,g,g,g,g,15,g,g,B.D,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)
m=w.h(e,"name")
m=A.v(m==null?"":m)
l=x.p
m=A.E(A.x(A.a([o,A.c(m,g,1,B.a2,g,g,g,A.l(g,g,n?C.bT:C.bV,g,g,g,g,g,g,g,g,11.5,g,g,g,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)],l),B.B,g,B.e,B.h,0,B.p),1)
o=D.eg(D.c4(w.h(e,"price")),!0,!1)
o=A.c(o,g,g,g,g,g,g,A.l(g,g,n?C.cl:B.c,g,g,g,g,g,g,g,g,17,g,g,B.D,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)
k=p>=0
j=k?"+":""
i=B.i.a5(p,2)
u=A.a([A.A(A.a([u,B.aa,m,A.x(A.a([o,A.c(j+i+"% today",g,g,g,g,g,g,A.l(g,g,k?C.cF:C.d4,g,g,g,g,g,g,g,g,11,g,g,B.D,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)],l),B.dt,g,B.e,B.h,0,B.p)],l),B.l,g,B.e,B.h,0,g,g),B.S],l)
o=r.length
if(o>1){o=B.d.fB(r,Math.max(0,o-36))
m=D.c4(w.h(e,"price"))
v=v.a(a0.h(0,"trades"))
v=J.cO(v==null?B.bP:v,t)
s=A.cw(v,new D.e7Y(),v.$ti.k("M.E"),s)
v=A.B(s,A.a3(s).k("M.E"))
w=A.v(w.h(e,f))
s=h.a.c==="options"?B.az:B.as
u.push(new D.a_F(o,d,g,!0,m,D.hLJ(v,w,s,t.b(D.dD(a0.h(0,"state")).h(0,"shadow"))?D.dD(D.dD(a0.h(0,"state")).h(0,"shadow")):g),g))}else u.push(A.c(y.b,g,g,g,g,g,g,A.l(g,g,n?C.bT:C.bV,g,g,g,g,g,g,g,g,12,g,g,g,g,g,!0,g,g,g,g,g,g,g,g),g,g,g))
if(q.h(0,"why")!=null){w=A.v(q.h(0,"why"))
B.d.u(u,A.a([B.aj,A.c("Analysis: "+w,g,g,g,g,g,g,A.l(g,g,n?C.bT:C.bV,g,g,g,g,g,g,g,g,11.5,g,g,g,g,1.3,!0,g,g,g,g,g,g,g,g),g,g,g)],l))}return h.wq(d,A.x(u,B.B,g,B.e,B.h,0,B.p))},
cBL(d,a0){var w,v,u,t,s,r=this,q=null,p="takeProfitUsd",o="stopLossUsd",n="maxHoldMin",m="exitCheckEveryMin",l=D.dD(a0.h(0,"settings")),k=D.dD(a0.h(0,"today")),j=new D.e8s(d),i=r.a.c==="options"?"+"+D.eg(D.c4(l.h(0,p)),!0,!1):"+"+B.i.a5(D.c4(l.h(0,"takeProfitPct")),0)+"% (+$"+B.i.a5(D.c4(l.h(0,p)),0)+")",h=r.a.c==="options"?"-"+D.eg(D.c4(l.h(0,o)),!0,!1):"-"+B.i.a5(D.c4(l.h(0,"stopLossPct")),0)+"% (-$"+B.i.a5(D.c4(l.h(0,o)),0)+")",g=A.V(B.mw,r.a.c==="options"?B.az:B.as,q,q,q,18),f=d.a,e=x.p
g=A.A(A.a([g,B.ba,A.c("THE 30-MINUTE LAW",q,q,q,q,q,q,A.l(q,q,f?C.cl:B.c,q,q,q,q,q,q,q,q,12,q,q,B.u,q,q,!0,q,0.8,q,q,q,q,q,q),q,q,q)],e),B.l,q,B.e,B.h,0,q,q)
w=B.i.a5(D.c4(l.h(0,n)),0)
v=B.i.a5(D.c4(l.h(0,m)),0)
w=A.c("Every trade closes within 30 minutes at most, win, lose or flat. After the options no-follow-through lesson new trades get a shorter max hold: now "+w+" minutes. Exits are checked every "+v+" minute, and the hard close sells at the last check before the max hold.",q,q,q,q,q,q,A.l(q,q,f?C.bT:C.bV,q,q,q,q,q,q,q,q,11.5,q,q,q,q,1.35,!0,q,q,q,q,q,q,q,q),q,q,q)
v=j.$2("Max hold now",B.i.a5(D.c4(l.h(0,n)),0)+" min")
u=j.$2("Exit checks","every "+B.i.a5(D.c4(l.h(0,m)),0)+" min")
f=A.A(A.a([v,B.ba,u,B.ba,j.$2("Each trade",r.a.c==="options"?"1 call/put \u2264$"+B.i.a5(D.c4(l.h(0,"maxPremiumUsd")),0):"$"+B.i.a5(D.c4(l.h(0,"tradeUsd")),0))],e),B.l,q,B.e,B.h,0,q,q)
v=j.$3$c("Take profit",i,C.cF)
u=j.$3$c("Stop loss",h,C.d4)
t=k.h(0,"trades")
t=A.v(t==null?0:t)
s=l.h(0,"maxTrades")
return r.wq(d,A.x(A.a([g,B.at,w,B.S,f,B.aj,A.A(A.a([v,B.ba,u,B.ba,j.$2("Trades today",t+" of "+A.v(s==null?"-":s))],e),B.l,q,B.e,B.h,0,q,q),B.aj,A.A(A.a([j.$2("Daily stop","-$"+B.i.a5(D.c4(l.h(0,"dailyStopUsd")),0)),B.ba,j.$2("Total brake","-$"+B.i.a5(D.c4(l.h(0,"totalBrakeUsd")),0)),B.ba,j.$2("Strength","+"+B.i.a5(D.c4(l.h(0,"strengthPct")),2)+"% in 30 min")],e),B.l,q,B.e,B.h,0,q,q)],e),B.B,q,B.e,B.h,0,B.p))},
cn4(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=D.dD(e.h(0,"options"))
if(i.a===0)return B.bK
if(J.z(i.h(0,"weekend"),!0)){w=i.h(0,"message")
return k.Rj(d,J.k(w==null?"":w),B.b_)}if(!J.z(i.h(0,"enabled"),!0)){w=i.h(0,"message")
w=J.k(w==null?"Options are not enabled on the paper account yet":w)
return k.Rj(d,w,J.z(i.h(0,"enabled"),!1)?E.i1:B.b_)}v=D.dD(i.h(0,"preview"))
u=J.z(i.h(0,"fits"),!0)
w=i.h(0,"right")
t=A.v(w==null?"call":w)
w=i.h(0,"underlying")
s=A.v(w==null?"SPY":w)
w=x.g.a(i.h(0,"tried"))
if(w==null)w=B.bP
w=J.cO(w,x.f)
w=A.cw(w,new D.e8e(),w.$ti.k("M.E"),x.P)
r=A.B(w,A.a3(w).k("M.E"))
w=s+" "
q=d.a
p=A.E(A.c(w+t.toUpperCase()+" IT WOULD CHOOSE NOW",j,j,B.a2,j,j,j,A.l(j,j,q?C.bT:C.bV,j,j,j,j,j,j,j,j,10.5,j,j,B.u,j,j,!0,j,0.8,j,j,j,j,j,j),j,j,j),1)
o=u?"FITS":"NONE FITS"
n=x.p
o=A.A(A.a([p,k.BX(o,u?C.cF:C.d4)],n),B.l,j,B.e,B.h,0,j,j)
p=A.a([o,B.at,A.c("For the best-ranked market right now: a call when its trend is up, a put when it is down. Near the money (the strike closest to the price), at least 3 days to expiry, $150 or less, spread at most 10% of the premium.",j,j,j,j,j,j,A.l(j,j,q?C.bT:C.bV,j,j,j,j,j,j,j,j,11.5,j,j,j,j,j,!0,j,j,j,j,j,j,j,j),j,j,j),B.N],n)
if(u&&v.a!==0){o=D.eg(D.c4(v.h(0,"strike")),!0,!1)
m=D.aQW(v.h(0,"expiry"))
w=A.c(w+o+" "+t+" \xb7 expires "+m,j,j,j,j,j,j,A.l(j,j,q?C.cl:B.c,j,j,j,j,j,j,j,j,16,j,j,B.D,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)
o=D.eg(D.c4(v.h(0,"premium")),!0,!1)
m=D.eg(D.c4(v.h(0,"cost")),!0,!1)
l=D.eg(D.c4(i.h(0,"spot")),!0,!1)
o=A.c("Premium "+o+" a share x 100 = "+m+"  \xb7  "+s+" "+l,j,j,j,j,j,j,A.l(j,j,q?C.bT:C.bV,j,j,j,j,j,j,j,j,12,j,j,j,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)
m=i.h(0,"why")
B.d.u(p,A.a([w,B.bt,o,B.at,A.c("It fits: "+A.v(m==null?"":m)+". On a passing setup it would buy this one.",j,j,j,j,j,j,C.fOm,j,j,j)],n))}else{w=i.h(0,"why")
p.push(A.c(A.v(w==null?"":w)+". It keeps checking every minute; the budget is never raised.",j,j,j,j,j,j,C.fUt,j,j,j))}if(r.length!==0)B.d.u(p,A.a([B.N,A.c("The $150 stepping, in order:",j,j,j,j,j,j,A.l(j,j,q?C.cl:B.c,j,j,j,j,j,j,j,j,12,j,j,B.D,j,j,!0,j,j,j,j,j,j,j,j),j,j,j),B.at,new A.fm(new D.e8f(k,r,d),j)],n))
return k.wq(d,A.x(p,B.B,j,B.e,B.h,0,B.p))},
cJY(d,e){var w,v,u=this,t=null,s=x.g.a(e.h(0,"trades"))
if(s==null)s=B.bP
s=J.cO(s,x.f)
s=A.cw(s,new D.e8z(),s.$ti.k("M.E"),x.P)
w=A.B(s,A.a3(s).k("M.E"))
s=d.a
v=A.a([A.c("Trades",t,t,t,t,t,t,A.l(t,t,s?C.cl:B.c,t,t,t,t,t,t,t,t,16,t,t,B.D,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),B.aj],x.p)
if(w.length===0)v.push(A.c("No trades yet. This system is picky: it only takes strong setups.",t,t,t,t,t,t,A.l(t,t,s?C.bT:C.bV,t,t,t,t,t,t,t,t,12.5,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),t,t,t))
s=J.aQ(u.y?w:A.cV(w,0,A.dz(4,"count",x.S),A.U(w).c))
while(s.C())v.push(u.cJX(d,s.gP(s)))
s=w.length
if(s>4)v.push(A.at(A.bM(!1,A.c(u.y?"Show less":"Show all ("+s+")",t,t,t,t,t,t,t,t,t,t),t,t,!0,t,t,t,new D.e8A(u),t,t),t,t,t))
return u.wq(d,A.x(v,B.B,t,B.e,B.h,0,B.p))},
cJX(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=null,g="entryPrice",f=J.a2(a3),e=J.z(f.h(a3,"decision"),"would buy"),d=D.dD(f.h(a3,"details")),a0=x.f.b(d.h(0,"option"))?D.dD(d.h(0,"option")):h,a1=D.c4(d.h(0,"pnl"))
if(e)w=B.ch
else w=a1>=0?C.cF:C.d4
v=a0!=null
if(v){u=A.v(f.h(a3,"asset"))
t=D.eg(D.c4(a0.h(0,"strike")),!0,!1)
s=a0.h(0,"right")
r=u+" "+t+" "+A.v(s==null?"call":s)}else r=A.v(f.h(a3,"asset"))
if(e)q=v?"expires "+D.aQW(a0.h(0,"expiry"))+" \xb7 premium "+D.eg(D.c4(d.h(0,g)),!0,!1)+" x 100":"at "+D.eg(D.c4(d.h(0,g)),!0,!1)
else{v=D.eg(D.c4(d.h(0,g)),!0,!1)
u=D.eg(D.c4(d.h(0,"exitPrice")),!0,!1)
t=d.h(0,"heldMin")==null?"":B.i.a5(D.c4(d.h(0,"heldMin")),0)+" min \xb7 "
s=f.h(a3,"reason")
q=v+" to "+u+" \xb7 "+t+D.iqo(J.k(s==null?"":s))}p=D.dD(d.h(0,"analysis"))
if(e){v=p.h(0,"why")
o=J.k(v==null?"":v)}else{v=d.h(0,"entryWhy")
o=J.k(v==null?"":v)}if(e)n=""
else{v=d.h(0,"result")
if(v==null)v=a1>0?"WIN":"LOSS"
n=J.k(v)}if(e)m=""
else{v=d.h(0,"lossText")
m=J.k(v==null?"":v)}v=o.length===0
u=v?h:new D.e8x(this,a2,r,e,p,m,n,o)
t=a2.a
s=t?C.oL:C.oG
l=w.j(0.14)
k=A.m(12)
l=A.p(h,A.V(e?B.tT:B.rl,w,h,h,h,18),B.f,h,h,new A.o(l,h,h,k,h,h,B.m),h,36,h,h,h,h,h,36)
k=e?"Bought":"Sold"
k=A.c(k+" "+r,h,h,h,h,h,h,A.l(h,h,t?C.cl:B.c,h,h,h,h,h,h,h,h,13.5,h,h,B.D,h,h,!0,h,h,h,h,h,h,h,h),h,h,h)
j=x.p
k=A.a([k,A.c(q,h,2,B.a2,h,h,h,A.l(h,h,t?C.bT:C.bV,h,h,h,h,h,h,h,h,11.5,h,h,h,h,h,!0,h,h,h,h,h,h,h,h),h,h,h)],j)
if(m.length!==0)k.push(A.c(m,h,3,B.a2,h,h,h,C.aZ4,h,h,h))
if(!v){v=e?"Why this trade: "+o:n+" \xb7 it was bought because: "+o
if(e)i=this.a.c==="options"?B.az:B.as
else i=n==="WIN"?C.cF:C.d4
k.push(A.c(v,h,2,B.a2,h,h,h,A.l(h,h,i,h,h,h,h,h,h,h,h,11,h,h,B.O,h,1.3,!0,h,h,h,h,h,h,h,h),h,h,h))}f=f.h(a3,"et_time")
f=J.k(f==null?"":f)
k.push(A.c(f,h,h,h,h,h,h,A.l(h,h,t?C.bT:C.bV,h,h,h,h,h,h,h,h,10.5,h,h,h,h,h,!0,h,h,h,h,h,h,h,h),h,h,h))
f=A.E(A.x(k,B.B,h,B.e,B.h,0,B.p),1)
v=e?"-"+D.eg(D.c4(d.h(0,"amount")),!0,!1):"+"+D.eg(D.c4(d.h(0,"outValue")),!0,!1)
v=A.a([A.c(v,h,h,h,h,h,h,A.l(h,h,t?C.cl:B.c,h,h,h,h,h,h,h,h,13.5,h,h,B.D,h,h,!0,h,h,h,h,h,h,h,h),h,h,h)],j)
if(!e){k=D.eg(a1,!0,!0)
v.push(A.c(k,h,h,h,h,h,h,A.l(h,h,a1>=0?C.cF:C.d4,h,h,h,h,h,h,h,h,12,h,h,B.D,h,h,!0,h,h,h,h,h,h,h,h),h,h,h))}if(e)v.push(A.c("put in",h,h,h,h,h,h,A.l(h,h,t?C.bT:C.bV,h,h,h,h,h,h,h,h,11,h,h,h,h,h,!0,h,h,h,h,h,h,h,h),h,h,h))
return A.aM(!1,h,!0,A.p(h,A.A(A.a([l,B.ar,f,B.aa,A.x(v,B.dt,h,B.e,B.h,0,B.p)],j),B.l,h,B.e,B.h,0,h,h),B.f,h,h,new A.o(h,h,new A.bE(B.a1,B.a1,new A.ax(s,1,B.r,-1),B.a1),h,h,h,B.m),h,h,h,h,B.x1,h,h,h),h,!0,h,h,h,h,h,h,h,h,h,h,h,u,h,h,h,h,h,h,h)},
cDQ(d,e,f){var w,v,u=null,t=x.g.a(f.h(0,"ranked"))
if(t==null)t=B.bP
t=J.cO(t,x.f)
t=A.cw(t,new D.e8u(),t.$ti.k("M.E"),x.P)
w=A.B(t,A.a3(t).k("M.E"))
v=D.dD(f.h(0,"record"))
t=this.c
t.toString
A.cg(u,u,!0,u,new D.e8v(d,e,f,new D.e8w(),v,w),t,u,!0,!0,x.H)},
bFa(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k="asset",j=m.z,i=m.e
i=j?i:A.cV(i,0,A.dz(4,"count",x.S),A.U(i).c).df(0)
j=d.a
w=A.c("Activity",l,l,l,l,l,l,A.l(l,l,j?C.cl:B.c,l,l,l,l,l,l,l,l,16,l,l,B.D,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)
v=x.p
w=A.a([A.A(A.a([w,B.aW,A.c("newest first",l,l,l,l,l,l,A.l(l,l,j?C.bT:C.bV,l,l,l,l,l,l,l,l,11,l,l,l,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)],v),B.l,l,B.e,B.h,0,l,l),B.aj],v)
if(m.e.length===0)w.push(A.c("Nothing yet. Buys, sells and passing setups that were skipped show up here.",l,l,l,l,l,l,A.l(l,l,j?C.bT:C.bV,l,l,l,l,l,l,l,l,12.5,l,l,l,l,l,!0,l,l,l,l,l,l,l,l),l,l,l))
for(u=i.length,t=0;t<i.length;i.length===u||(0,A.I)(i),++t){s=i[t]
r=A.V(B.ni,j?C.bT:C.bV,l,l,l,7)
q=J.a2(s)
if(J.z(q.h(s,"kind"),"lesson"))p="Lesson"+(q.h(s,k)==null?"":" \xb7 "+A.v(q.h(s,k)))
else{p=q.h(s,"decision")
p=A.v(p==null?"":p)
p+=q.h(s,k)==null?"":" \xb7 "+A.v(q.h(s,k))}if(J.z(q.h(s,"kind"),"lesson"))o=m.a.c==="options"?B.az:B.as
else o=j?C.cl:B.c
p=A.c(p,l,l,l,l,l,l,new A.G(!0,o,l,l,l,l,12.5,B.D,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l),l,l,l)
o=q.h(s,"reason")
o=J.k(o==null?"":o)
n=j?C.bT:C.bV
p=A.x(A.a([p,A.c(o,l,l,l,l,l,l,new A.G(!0,n,l,l,l,l,11.5,l,l,l,l,l,1.3,l,l,l,l,l,l,l,l,l,l,l,l,l),l,l,l)],v),B.B,l,B.e,B.h,0,B.p)
q=q.h(s,"et_time")
q=D.hoL(J.k(q==null?"":q))
o=j?C.bT:C.bV
w.push(new A.D(B.jX,new A.c2(B.aK,B.e,B.h,B.B,l,B.p,l,0,A.a([new A.D(K.P7,r,l),B.aa,new A.bu(1,B.b8,p,l),B.ba,A.c(q,l,l,l,l,l,l,new A.G(!0,o,l,l,l,l,10.5,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l),l,l,l)],v),l),l))}if(m.e.length>4)w.push(A.at(A.bM(!1,A.c(m.z?"Show less":"Show all",l,l,l,l,l,l,l,l,l,l),l,l,!0,l,l,l,new D.e7W(m),l,l),l,l,l))
return m.wq(d,A.x(w,B.B,l,B.e,B.h,0,B.p))},
cyq(d,e){var w,v,u,t,s,r,q,p,o,n,m=null,l=x.g.a(e.h(0,"rules"))
if(l==null)l=B.bP
l=J.b8(l,new D.e8l(),x.N)
w=A.B(l,l.$ti.k("aj.E"))
l=this.c
l.toString
l=A.Q(l).aH5(B.L)
v=d.a
u=A.c("The rules it follows",m,m,m,m,m,m,A.l(m,m,v?C.cl:B.c,m,m,m,m,m,m,m,m,15,m,m,B.D,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)
t=x.p
s=A.a([],t)
for(r=w.length,q=0;q<w.length;w.length===r||(0,A.I)(w),++q){p=w[q]
o=this.a.c==="options"?B.az:B.as
o=A.c("\u2022  ",m,m,m,m,m,m,new A.G(!0,o,m,m,m,m,m,B.u,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m,m,m)
n=v?C.cl:B.c
s.push(new A.D(B.eA,new A.c2(B.aK,B.e,B.h,B.B,m,B.p,m,0,A.a([o,new A.bu(1,B.b8,A.c(p,m,m,m,m,m,m,new A.G(!0,n,m,m,m,m,12.5,m,m,m,m,m,1.35,m,m,m,m,m,m,m,m,m,m,m,m,m),m,m,m),m)],t),m),m))}return this.wq(d,new A.ox(l,N.hh7(m,s,B.ag,m,m,m,!1,m,m,m,B.ag,u),m))},
b3l(d,e,f){var w=null,v=d.a,u=v?B.c.j(0.92):C.i9,t=A.m(20),s=e==null?w:e.j(0.5)
if(s==null)v=v?B.c:C.n6
else v=s
v=A.K(v,B.r,1)
s=A.a([new A.aa(0,B.H,d.gI3(),B.cz,14)],x.V)
return A.p(w,A.aG(!1,B.a3,!0,w,f,B.f,w,0,w,w,w,w,w,B.i5),B.f,w,w,new A.o(u,w,v,t,s,w,B.m),w,w,w,B.dU,B.bF,w,w,w)},
wq(d,e){return this.b3l(d,null,e)},
Rj(d,e,f){var w=null,v=f.j(0.12),u=A.m(16),t=A.K(f.j(0.45),B.r,1),s=A.V(B.QI,f,w,w,w,20)
return A.p(w,A.A(A.a([s,B.ar,A.E(A.c(e,w,w,w,w,w,w,A.l(w,w,d.a?C.cl:B.c,w,w,w,w,w,w,w,w,12.5,w,w,w,w,1.35,!0,w,w,w,w,w,w,w,w),w,w,w),1)],x.p),B.l,w,B.e,B.h,0,w,w),B.f,w,w,new A.o(v,w,t,u,w,w,B.m),w,w,w,B.dU,B.bg,w,w,w)},
BX(d,e){var w=null,v=e.j(0.14),u=A.m(999)
return A.p(w,A.c(d,w,w,w,w,w,w,A.l(w,w,e,w,w,w,w,w,w,w,w,10,w,w,B.u,w,w,!0,w,0.5,w,w,w,w,w,w),w,w,w),B.f,w,w,new A.o(v,w,w,u,w,w,B.m),w,w,w,w,B.fa,w,w,w)},
a0T(d,e,f){var w=null,v=d.a,u=v?B.c.j(0.92):C.i9,t=A.K(v?B.c:C.n6,B.r,1)
return A.aG(!1,B.a3,!0,w,A.aM(!1,w,!0,A.p(w,A.V(e,v?C.cl:B.c,w,w,w,18),B.f,w,w,new A.o(w,w,t,w,w,w,B.a6),w,40,w,w,w,w,w,40),B.cM,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),B.f,u,0,w,w,B.cM,w,w,B.ai)}}
D.aBm.prototype={
R(){return new D.bfj()}}
D.bfj.prototype={
a_(){this.a3()
this.d=A.d1(B.fp,new D.dae(this))},
t(){var w=this.d
if(w!=null)w.a1(0)
this.a2()},
B(d){var w,v,u,t=null,s=this.a.c,r=s==null?t:s.bx(new A.W(Date.now(),0,!1))
if(r==null||r.a<0)w="0:00"
else{s=r.a
w=""+B.o.ao(s,6e7)+":"+B.a.aZ(B.o.v(B.o.F(B.o.ao(s,1e6),60)),2,"0")}v=this.a.d
s=v.j(0.14)
u=A.m(999)
return A.p(t,A.c("closes in "+w+" at most",t,t,t,t,t,t,A.l(t,t,v,t,t,t,t,t,t,t,t,10,t,t,B.u,t,t,!0,t,0.5,t,t,t,t,t,t),t,t,t),B.f,t,t,new A.o(s,t,t,u,t,t,B.m),t,t,t,t,B.fa,t,t,t)}}
D.aKB.prototype={
R(){return new D.bvW()}}
D.bvW.prototype={
a_(){this.a3()
this.d=A.d1(B.fp,new D.fgG(this))},
t(){var w=this.d
if(w!=null)w.a1(0)
this.a2()},
B(a1){var w,v,u,t,s,r,q,p,o,n=this,m=null,l=new A.W(Date.now(),0,!1).aa(),k=n.a.c.aa().bL(3e8),j=n.a,i=j.d.aa(),h=B.o.ao(i.bx(j.c.aa()).a,6e7),g=j.e?C.cF:C.d4,f=l.c8(k),e=l.c8(i),d=A.aX_(A.bD(l),A.bO(l),A.bW(l),A.d0(l),A.fB(l),0,0,0).bL(6e7).bx(l),a0=B.o.ao(d.a,1e6)>=45
if(e){w="Being graded now: WIN if the price finished "+(n.a.e?"higher":"lower")+"."
v="SIGNAL CLOSED"}else if(f){v="TOO LATE TO ENTER"
w="The 5-minute entry window has passed. Wait for the next signal: entering an old signal is how money is lost."}else{if(a0)v=(n.a.e?"BUY":"SELL")+" NOW"
else v="Enter in "+D.fgD(d)
w="Entry window closes in "+D.fgD(k.bx(l))+" \xb7 enter at the start of a minute."}j=new D.fgE()
u=!f
t=!u||e?B.an:g
s=A.m(14)
r=A.a([new A.aa(0,B.H,(!u||e?B.v:g).j(0.25),B.cN,12)],x.V)
q=A.c(v,m,m,m,m,m,m,A.l(m,m,B.c,m,m,m,m,m,m,m,G.Av,a0&&u&&!e?26:22,m,m,B.u,m,m,!0,m,0.6,m,m,m,m,m,m),B.K,m,m)
p=A.c(w,m,m,m,m,m,m,C.fHG,B.K,m,m)
o=j.$2("Trade for",""+h+" min")
u=x.p
return A.p(m,A.x(A.a([q,B.bt,p,B.N,A.A(A.a([o,B.ba,j.$2("Entry window",f?"closed":D.fgD(k.bx(l))),B.ba,j.$2("Signal closes in",D.fgD(i.bx(l)))],u),B.l,m,B.e,B.h,0,m,m)],u),B.l,m,B.e,B.h,0,B.p),B.f,m,m,new A.o(t,m,m,s,r,m,B.m),m,m,m,m,B.bg,m,m,1/0)}}
D.aCF.prototype={
R(){return new D.bia()}}
D.bia.prototype={
a_(){this.a3()
this.d=A.d1(B.fp,new D.diC(this))},
t(){var w=this.d
if(w!=null)w.a1(0)
this.a2()},
B(d){var w=null,v=this.a.c*60,u=B.o.F(B.o.ao(new A.W(Date.now(),0,!1).aa().a,1000),v),t=u<15,s=v-u,r=t?"ENTER NOW":"Enter in "+B.o.ao(s,60)+":"+B.a.aZ(B.o.v(B.o.F(s,60)),2,"0"),q=t?B.c:B.c.j(0.18),p=A.m(999),o=t?B.fN:B.mw
o=A.V(o,t?B.v:B.c,w,w,w,20)
return A.cX(w,A.A(A.a([o,B.ba,A.c(r,w,w,w,w,w,w,A.l(w,w,t?B.v:B.c,w,w,w,w,w,w,w,G.Av,22,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),B.l,w,B.e,B.P,0,w,w),w,w,B.aZ,new A.o(q,w,w,p,w,w,B.m),B.ib,w,w,w,w,B.HO,w,w,w)}}
D.cG.prototype={}
D.uw.prototype={}
D.XN.prototype={
R(){var w,v,u,t=null,s=x.N,r=x.z
r=A.J(["done",A.a([],x.s),"lessons",A.S(s,r)],s,r)
s=$.hmh
w=$.az()
v=A.ml(0,t,t)
u=A.a([],x.t)
return new D.aHw(r,new A.au(new A.bc(s,B.b7,B.aP),w),v,u,new A.au(B.ax,w),B.cI,B.M,t,t)}}
D.a_L.prototype={}
D.aHw.prototype={
gLm(){var w,v=this,u=v.d
if(u===$){v.a.toString
w=A.acG(null,0,3,v)
v.d!==$&&A.bF()
v.d=w
u=w}return u},
gK5(){var w=x.g.a(this.x.h(0,"done"))
if(w==null)w=B.bP
return J.b8(w,new D.eIG(),x.N).fD(0)},
a_(){var w,v,u,t=this
t.a3()
w=t.e=t.a.c
v=w==null
t.y=!v
t.ay=D.eJo(v?null:J.t(w,"fx"))
w=t.a.c
u=D.eJo(w==null?null:J.t(w,"markets"))
if(u.length!==0)t.f=u
t.r=new A.W(Date.now(),0,!1)
t.gLm().aU(0,new D.eJu(t))
$.aM8=$.aM8+1
t.at.aU(0,new D.eJv(t))
if($.DB.length!==0||$.ahm)t.aD5()
if(!t.a.d){t.a0S()
t.Rk()
A.T7().bE(new D.eJw(t),x.H)
t.w=A.d1(B.hb,new D.eJx(t))}},
t(){var w,v=this,u=v.w
if(u!=null)u.a1(0)
u=v.as
if(u!=null)u.a1(0)
v.gLm().t()
u=v.cy
w=$.az()
u.V$=w
u.W$=0
u=v.at
u.V$=w
u.W$=0
v.ax.t()
D.hGa()
v.bBL()},
a0S(){return this.c7u()},
c7u(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f
var $async$a0S=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:g={}
g.a=null
t=4
w=7
return A.b(A.aB(),$async$a0S)
case 7:q=e
p=A.aV(J.t(q.a,"ngmy_signal_grid_academy_v2"))
n=p!=null?g.a=A.a0(x.f.a(B.V.aP(0,p,null)),x.N,x.z):null
o=q.ps("ngmy_signal_grid_lessons_done")
if(n==null&&o!=null){n=x.N
m=x.z
g.a=A.J(["done",o,"lessons",A.S(n,m)],n,m)}t=2
w=6
break
case 4:t=3
f=s.pop()
w=6
break
case 3:w=2
break
case 6:n=x.N
m=x.z
w=8
return A.b(A.fR(A.J(["action","paLearnGet"],n,m),!1,!1,!1,!1,B.hb),$async$a0S)
case 8:k=e
if(r.c==null){w=1
break}j=k==null?null:J.t(k,"progress")
i=x.f
if(i.b(j)){k.toString
h=A.a0(i.a(J.t(k,"progress")),n,m)}else h=null
r.l(new D.eJ0(g,r,k,h))
if(h==null&&g.a!=null)r.aCW()
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$a0S,v)},
aCW(){var w=this.as
if(w!=null)w.a1(0)
this.as=A.cC(R.CZ,new D.eJ9(this))},
aek(d){return this.c6A(d)},
c6A(d){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$aek=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=B.d.cw(C.Eh,new D.eIJ(u))
u.l(new D.eIK(u,d))
u.aCW()
t=B.d.cw(C.Eh,new D.eIL(u))
w=!r&&t&&u.c!=null?2:3
break
case 2:s=u.c
s.toString
w=4
return A.b(A.cg(null,null,!0,null,new D.eIM(u),s,null,!0,!0,x.H),$async$aek)
case 4:case 3:return A.h(null,v)}})
return A.i($async$aek,v)},
Rk(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Rk=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(A.fR(A.J(["action","paSignals"],x.N,x.z),!1,!1,!1,!1,B.x_),$async$Rk)
case 3:r=e
if(t.c==null||r==null||!J.z(J.t(r,"ok"),!0)){w=1
break}s=J.a2(r)
t.l(new D.eJ8(t,D.eJo(s.h(r,"fx")),D.eJo(s.h(r,"markets")),r))
case 1:return A.h(u,v)}})
return A.i($async$Rk,v)},
gatw(){var w=A.B(this.gyE(),x.P)
B.d.u(w,this.ay)
return w},
gyE(){var w=this.f
if(w==null){w=this.e
w=D.fCO(D.dD(D.dD(w==null?null:J.t(w,"state")).h(0,"snapshot")))}return w},
gcER(){var w=this.gyE(),v=A.U(w).k("X<1>"),u=A.B(new A.X(w,new D.eJm(),v),v.k("M.E"))
if(u.length===0)return this.gyE().length===0?null:B.d.gG(this.gyE())
B.d.b_(u,new D.eJn())
return B.d.gG(u)},
c77(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,a0=" dollars. It sells at +50 or -50 dollars.",a1=e.e,a2=D.dD(a1==null?d:J.t(a1,"state"))
a1=x.f
w=a1.b(a2.h(0,"shadow"))?D.dD(a2.h(0,"shadow")):d
v=e.e
u=D.dD(v==null?d:J.t(v,"today"))
v=e.e
t=D.dD(v==null?d:J.t(v,"record"))
v=e.dy
if(!(v.length!==0)){v=e.e
v=v==null?d:J.t(v,"nowEt")
if(v==null)v="unknown"}v="LIVE DATA from the NGMY paper trading agent (Eastern Time now: "+A.v(v)+"):\n"
if(e.e!=null){s=J.z(a2.h(0,"enabled"),!0)?"running":"stopped"
r=J.z(a2.h(0,"brakePaused"),!0)?", paused by the 25 dollar brake":""
q=D.eg(D.c4(a2.h(0,"totalPnl")),!0,!0)
p=D.eg(D.c4(u.h(0,"day_pnl")),!0,!0)
o=t.h(0,"wins")
o=A.v(o==null?0:o)
n=t.h(0,"losses")
v+="Agent: "+s+r+". P/L all time "+q+", today "+p+", wins "+o+", losses "+A.v(n==null?0:n)+".\n"}if(e.e==null)a1=v
else if(w!=null){m=D.c4(J.t(B.d.dr(e.gyE(),new D.eIP(w),new D.eIQ()),"price"))
l=D.c4(w.h(0,"entryPrice"))
k=a1.b(w.h(0,"option"))?D.dD(w.h(0,"option")):d
a1=e.e
j=D.dD(D.dD(D.dD(a1==null?d:J.t(a1,"state")).h(0,"snapshot")).h(0,"held"))
i=j.h(0,"pnl")==null?d:D.c4(j.h(0,"pnl"))
h=i==null?"unknown":B.i.a5(i,2)
a1=v+((k!=null?"Open trade: 1 SPY call option, strike "+B.i.a5(D.c4(k.h(0,"strike")),0)+", expires "+A.v(k.h(0,"expiry"))+", premium paid "+B.i.a5(l,2)+" a share ("+B.i.a5(D.c4(k.h(0,"cost")),2)+" dollars). Win or loss now: "+h+a0:"Open trade: "+A.v(w.h(0,"symbol"))+", bought at "+B.i.a5(l,2)+", now "+B.i.a5(m,2)+". Win or loss now: "+h+a0)+"\n")}else a1=v+"No open trade.\n"
g=new D.eIR()
a1+="Agent markets (5-minute candles; fast line = 9-candle average, slow = 21-candle average; strength 0 bearish to 100 bullish):\n"
for(v=e.gyE(),s=v.length,f=0;f<v.length;v.length===s||(0,A.I)(v),++f)a1+=A.v(g.$1(v[f]))+"\n"
v=e.ay
s=v.length
if(s!==0){a1+="Forex pairs (real interbank prices, 1-minute candles, signals only; the agent does not trade them; OTC prices at brokers differ):\n"
for(f=0;f<v.length;v.length===s||(0,A.I)(v),++f)a1+=A.v(g.$1(v[f]))+"\n"}return a1.charCodeAt(0)==0?a1:a1},
K4(d){return this.bHH(d)},
bHH(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j
var $async$K4=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:j=B.a.i(d)
if(j.length===0||$.ahm){w=1
break}t.at.bM(0,B.ck)
t.l(new D.eIC(t,j))
t.aD5()
s=$.DB.length
if(s>1){s=B.d.du($.DB,Math.max(0,s-9),s-1)
r=new A.O(s,new D.eID(),A.U(s).k("O<1,n>")).aL(0,"\n")}else r=""
s=t.e
s=s==null?null:J.t(s,"rules")
x.g.a(s)
if(s==null)s=t.dx
q=x.N
p=J.b8(s,new D.eIE(),q).aL(0,"\n")
s=t.c77()
o=r.length===0?"":"\nCONVERSATION SO FAR:\n"+r+"\n"
n=$.fpn
w=t.a.d?3:5
break
case 3:m="Preview mode: the tutor answers here using the live readings."
w=4
break
case 5:w=6
return A.b(A.fR(A.J(["action","chat","prompt",'You are the NGMY Signal Grid trading tutor. You teach a complete beginner how trading works, using the live market data and the rules of the NGMY paper trading agent below.\nHow to answer:\n- Plain, friendly, simple English. Short sentences. No jargon without explaining it. Usually under 170 words.\n- When the question is about a market or "right now", use the LIVE DATA and quote the real numbers (price, trend, strength, RSI, last hour), then explain what they mean and what the agent\'s rules say.\n- Say clearly whether a market looks bullish, bearish or sideways and why, and what would need to happen for a buy or sell signal under the agent\'s rules.\n- This is practice. You may explain what the rules signal, but never promise profit, never say a price will surely go up or down, and never tell the student to trade real or borrowed money. Remind them briefly when it fits that signals can fail and the stop loss keeps losses small.\n- No markdown headings or tables. You may use short lines starting with "- ".\n\nAGENT RULES:\n'+p+"\n\n"+s+"\n"+o+"\nStudent: "+j+"\nTutor:"],q,x.z),!1,!1,!1,!1,B.nX),$async$K4)
case 6:l=f
s=l==null
if(s)k=null
else{q=J.t(l,"text")
q=q==null?null:B.a.i(J.k(q))
k=q}if(k==null)k=""
if(k.length!==0){s=A.aK(k,"**","")
q=A.ag("^#+\\s*",!0,!1,!0,!1)
m=A.aK(s,q,"")}else{s=s?null:J.t(l,"error")
m=J.k(s==null?"The tutor could not answer just now. Please try again.":s)}case 4:if(n!==$.fpn){w=1
break}$.DB.push(new D.a_L(!1,m))
$.ahm=!1
if(t.c==null){w=1
break}t.l(new D.eIF())
t.aD5()
case 1:return A.h(u,v)}})
return A.i($async$K4,v)},
aD5(){$.aU.U$.push(new D.eJa(this))},
aR9(d){this.gLm().C7(2)
this.K4(d)},
B(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=A.Q(a0).ax.a===B.dh,f=new D.Rt(g),e=g?C.t6:C.t4,d=g?C.t6:C.t4
d=A.a([d,g?C.O3:C.NX],x.O)
w=i.a0T(f,B.eC,new D.eJq(a0))
v=A.c("Trading Academy",h,h,h,h,h,h,A.l(h,h,g?C.cl:B.c,h,h,h,h,h,h,h,h,17,h,h,B.D,h,h,!0,h,h,h,h,h,h,h,h),h,h,h)
u=x.p
v=A.A(A.a([w,B.ar,A.E(A.x(A.a([v,A.c("Lessons, live signals and a tutor",h,h,h,h,h,h,A.l(h,h,g?C.bT:C.bV,h,h,h,h,h,h,h,h,11.5,h,h,h,h,h,!0,h,h,h,h,h,h,h,h),h,h,h)],u),B.B,h,B.e,B.h,0,B.p),1),A.p(h,C.frV,B.f,h,h,new A.o(C.cF.j(0.14),h,h,A.m(999),h,h,B.m),h,h,h,h,B.fZ,h,h,h)],u),B.l,h,B.e,B.h,0,h,h)
w=g?C.Oa:C.O0
t=A.m(999)
s=A.a([],u)
for(r=[C.fi_,C.fgd,C.fgW],q=r.length,p=0;p<q;++p){o={}
n=r[p]
o.a=null
o.a=n.a
m=i.gLm().d===o.a
if(m)l=g?C.mZ:B.c
else l=B.L
k=new A.aP(999,999)
if(m)j=g?B.c:C.mZ
else j=g?C.bT:C.bV
j=A.V(n.c,j,h,h,h,15)
if(m)m=g?B.c:C.mZ
else m=g?C.bT:C.bV
s.push(new A.bu(1,B.b8,A.aA(h,A.cX(h,new A.c2(B.aK,B.bb,B.h,B.l,h,B.p,h,0,A.a([j,B.e_,new A.d3(1,B.ci,A.c(n.b,h,h,B.a2,h,h,h,new A.G(!0,m,h,h,h,h,12.5,B.D,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h),h,h,h),h)],u),h),h,h,B.aZ,new A.o(l,h,h,new A.bb(k,k,k,k),h,h,B.m),B.a3,h,h,h,h,B.x1,h,h,h),B.y,!1,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,new D.eJr(o,i),h,h,h,h,h,h,!1,B.a4),h))}g=A.p(h,A.A(s,B.l,h,B.e,B.h,0,h,h),B.f,h,h,new A.o(w,h,h,t,h,h,B.m),h,h,h,h,B.eB,h,h,h)
w=i.gLm()
return A.c7(h,e,A.p(h,A.bo(!0,A.x(A.a([new A.D(C.bGk,v,h),new A.D(B.aoc,g,h),A.E(A.baQ(A.a([i.c6E(f),i.cDW(f),i.bHN(f)],u),w,h),1)],u),B.l,h,B.e,B.h,0,B.p),!0,!1,B.ag,!0,!0),B.f,h,h,new A.o(h,h,h,h,h,new A.a8(B.aX,B.b1,B.x,d,h,h),B.m),h,h,h,h,h,h,h,h),h,!1,!1,h,h)},
a0T(d,e,f){var w=null,v=d.a,u=v?B.c.j(0.92):C.i9,t=A.K(v?B.c:C.n6,B.r,1)
return A.aG(!1,B.a3,!0,w,A.aM(!1,w,!0,A.p(w,A.V(e,v?C.cl:B.c,w,w,w,18),B.f,w,w,new A.o(w,w,t,w,w,w,B.a6),w,40,w,w,w,w,w,40),B.cM,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),B.f,u,0,w,w,B.cM,w,w,B.ai)},
c6E(d){var w,v=null,u=new A.X(C.Eh,new D.eIO(this),x.E).gJ(0),t=A.m(24),s=x.p
s=A.a([A.p(v,A.x(A.a([C.hiB,B.at,C.h_e,B.aB,A.by(A.m(9),A.jE(B.c.j(0.18),v,v,8,v,u/10,B.afg),B.aq),B.aj,A.c(""+u+" of 10 lessons done",v,v,v,v,v,v,B.acH,v,v,v)],s),B.B,v,B.e,B.h,0,B.p),B.f,v,v,new A.o(v,v,v,t,v,C.cek,B.m),v,v,v,v,B.f9,v,v,v),B.aB],s)
for(w=0;w<10;++w)s.push(this.c6C(d,w))
s.push(B.aj)
s.push(A.c("Practice only, no real money. Signals and lessons are for learning; markets can always surprise.",v,v,v,v,v,v,A.l(v,v,d.a?C.bT:C.bV,v,v,v,v,v,v,v,v,11,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),B.K,v,v))
return A.co(s,v,v,C.aog,v,v,B.ah,!1)},
c6C(d,e){var w,v,u,t=null,s=C.Eh[e],r=this.gK5().q(0,s.a),q=d.a,p=q?B.c.j(0.92):C.i9,o=A.m(20),n=A.K(q?B.c:C.n6,B.r,1),m=A.a([new A.aa(0,B.H,d.gI3(),B.hS,14)],x.V),l=A.m(15)
l=A.p(t,A.V(s.e,B.c,t,t,t,t),B.f,t,t,new A.o(s.f,t,t,l,t,t,B.m),t,46,t,t,t,t,t,46)
w=A.c("Lesson "+(e+1)+" \xb7 "+s.d+" min",t,t,t,t,t,t,A.l(t,t,q?C.bT:C.bV,t,t,t,t,t,t,t,t,11,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)
v=A.c(s.b,t,t,t,t,t,t,A.l(t,t,q?C.cl:B.c,t,t,t,t,t,t,t,t,15,t,t,B.D,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)
u=x.p
v=A.E(A.x(A.a([w,v,A.c(s.c,t,t,t,t,t,t,A.l(t,t,q?C.bT:C.bV,t,t,t,t,t,t,t,t,12,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],u),B.B,t,B.e,B.h,0,B.p),1)
w=r?B.ea:B.eM
if(r)q=C.cF
else q=q?C.bT:C.bV
return A.aA(t,A.p(t,A.A(A.a([l,B.bc,v,A.V(w,q,t,t,t,t)],u),B.l,t,B.e,B.h,0,t,t),B.f,t,t,new A.o(p,t,n,o,m,t,B.m),t,t,t,B.d7,B.bF,t,t,t),B.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new D.eIN(this,s),t,t,t,t,t,t,!1,B.a4)},
cm2(d){var w=this.c
w.toString
A.a7(w,!1).c9(A.e6(new D.eJ6(this,d),!1,null,x.H))},
c7b(c1,c2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6=this,b7=null,b8="reading",b9="rsi",c0=b6.gcER()
if(c0==null)return A.c("Live example appears once the markets have loaded.",b7,b7,b7,b7,b7,b7,A.l(b7,b7,c1.a?C.bT:C.bV,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,!0,b7,b7,b7,b7,b7,b7,b7,b7),b7,b7,b7)
w=J.a2(c0)
v=J.k(w.h(c0,"asset"))
u=D.bFk(c0)
t=D.dD(w.h(c0,b8))
s=D.c4(w.h(c0,"price"))
r=new D.eIS(u,c1,s)
q=new D.eJ_(c1)
switch(c2){case"basics":p=u.length!==0?D.c4(J.t(B.d.gG(u),"c")):s
o=p===0?100:100*s/p
w=q.$1("Right now "+v+" is "+D.eg(s,!0,!1)+". About 4 hours ago it was "+D.eg(p,!0,!1)+".")
n=D.eg(o,!0,!1)
m=o>=100?"a win of":"a loss of"
return A.x(A.a([w,B.N,q.$1("If you had put $100 into "+v+" then, it would be worth "+n+" now: "+m+" "+D.eg(Math.abs(o-100),!0,!1)+". That difference is your profit or loss.")],x.p),B.B,b7,B.e,B.h,0,B.p)
case"candles":l=u.length!==0?B.d.gal(u):A.S(x.N,x.z)
w=J.a2(l)
n=D.c4(w.h(l,"c"))
m=D.c4(w.h(l,"o"))
k=r.$2$last$lines(24,!1)
j=D.eg(D.c4(w.h(l,"o")),!0,!1)
i=D.eg(D.c4(w.h(l,"c")),!0,!1)
n=n>=m?"GREEN: buyers won those 5 minutes":"YELLOW: sellers won those 5 minutes"
return A.x(A.a([k,B.N,q.$1("The last finished "+v+" candle opened at "+j+" and closed at "+i+", so it is "+n+". Its high was "+D.eg(D.c4(w.h(l,"h")),!0,!1)+" and its low "+D.eg(D.c4(w.h(l,"l")),!0,!1)+".")],x.p),B.B,b7,B.e,B.h,0,B.p)
case"trend":w=x.N
h=A.S(w,x.S)
for(n=b6.gyE(),m=n.length,k=x.z,j=x.f,g=0;g<n.length;n.length===m||(0,A.I)(n),++g){i=J.t(n[g],b8)
i=(j.b(i)?A.a0(i,w,k):A.S(w,k)).h(0,"bias")
f=J.k(i==null?"unknown":i)
i=h.h(0,f)
h.n(0,f,(i==null?0:i)+1)}w=r.$0()
n=t.h(0,"bias")
n=J.k(n==null?"unknown":n)
m=h.h(0,"bullish")
if(m==null)m=0
k=h.h(0,"bearish")
if(k==null)k=0
j=h.h(0,"sideways")
if(j==null)j=0
return A.x(A.a([w,B.N,q.$1(v+" is "+n.toUpperCase()+" right now. Across the markets:"+m+" bullish, "+k+" bearish, "+j+" sideways.")],x.p),B.B,b7,B.e,B.h,0,B.p)
case"ma":e=D.c4(w.h(c0,"fast"))
d=D.c4(w.h(c0,"slow"))
w=r.$0()
n=D.eg(e,!0,!1)
m=D.eg(d,!0,!1)
k=e>=d
j=k?"ABOVE":"BELOW"
k=k?"UP":"DOWN"
return A.x(A.a([w,B.N,q.$1("On "+v+" the pink fast line is at "+n+" and the purple slow line at "+m+". The fast line is "+j+" the slow line, so the short-term trend is "+k+".")],x.p),B.B,b7,B.e,B.h,0,B.p)
case"cross":w=b6.gyE()
n=A.U(w)
m=n.k("cP<1,@>")
a0=A.B(new A.cP(new A.X(w,new D.eIT(),n.k("X<1>")),new D.eIU(),m),m.k("M.E"))
w=b6.gyE()
n=A.U(w)
m=n.k("cP<1,@>")
a1=A.B(new A.cP(new A.X(w,new D.eIV(),n.k("X<1>")),new D.eIW(),m),m.k("M.E"))
w=r.$0()
if(a0.length!==0)n="Fresh BUY crosses right now: "+B.d.aL(a0,", ")+". On its next automatic check the agent would buy if it holds nothing and it is the market traded today."
else n="No fresh buy cross in any open market right now. "+(a1.length!==0?"Fresh sell crosses: "+B.d.aL(a1,", ")+". ":"")+"The agent simply waits; no signal means no trade."
return A.x(A.a([w,B.N,q.$1(n)],x.p),B.B,b7,B.e,B.h,0,B.p)
case"rsi":w=b6.gyE()
n=A.U(w).k("X<1>")
a2=A.B(new A.X(w,new D.eIX(),n),n.k("M.E"))
w=x.p
n=A.a([],w)
for(m=a2.length,k=c1.a,j=x.N,i=x.z,a3=x.f,a4=x.c,g=0;g<a2.length;a2.length===m||(0,A.I)(a2),++g){a5=a2[g]
a6=J.a2(a5)
a7=J.k(a6.h(a5,"asset"))
a8=k?C.cl:B.c
a7=A.c(a7,b7,b7,b7,b7,b7,b7,new A.G(!0,a8,b7,b7,b7,b7,12,B.D,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7),b7,b7,b7)
a8=new A.aP(9,9)
a9=a6.h(a5,b8)
a9=(a3.b(a9)?A.a0(a9,j,i):A.S(j,i)).h(0,b9)
if(!(typeof a9=="number")){a9=A.cA(A.v(a9==null?"":a9))
if(a9==null)a9=0}b0=k?C.Oa:C.O0
b1=a6.h(a5,b8)
b1=(a3.b(b1)?A.a0(b1,j,i):A.S(j,i)).h(0,b9)
if(!(typeof b1=="number")){b1=A.cA(A.v(b1==null?"":b1))
if(b1==null)b1=0}if(b1>=70)b1=C.d4
else{b1=a6.h(a5,b8)
b1=(a3.b(b1)?A.a0(b1,j,i):A.S(j,i)).h(0,b9)
if(!(typeof b1=="number")){b1=A.cA(A.v(b1==null?"":b1))
if(b1==null)b1=0}b1=b1<=30?B.cG:C.cF}b1=A.jE(b0,b7,b7,8,b7,a9/100,new A.l7(b1,a4))
a6=a6.h(a5,b8)
a6=(a3.b(a6)?A.a0(a6,j,i):A.S(j,i)).h(0,b9)
if(!(typeof a6=="number")){a6=A.cA(A.v(a6==null?"":a6))
if(a6==null)a6=0}a6=B.i.a5(a6,0)
a9=k?C.cl:B.c
n.push(new A.D(B.cB,new A.c2(B.aK,B.e,B.h,B.l,b7,B.p,b7,0,A.a([new A.a4(70,b7,a7,b7),new A.bu(1,B.b8,new A.nk(new A.bb(a8,a8,a8,a8),B.aq,b1,b7),b7),B.aa,new A.a4(26,b7,A.c(a6,b7,b7,b7,b7,b7,b7,new A.G(!0,a9,b7,b7,b7,b7,12,B.D,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7),b7,b7,b7),b7)],w),b7),b7))}n.push(q.$1("Red bars are above 70 (stretched), blue below 30 (oversold), green in between (healthy)."))
return A.x(n,B.B,b7,B.e,B.h,0,B.p)
case"risk":return A.x(A.a([q.$1("Every agent trade is about $100 (of a stock on weekdays, of a coin on weekends). "+v+" is "+D.eg(s,!0,!1)+" right now."),B.aj,q.$1("- Take profit: it sells when the trade is up $50"),q.$1("- Stop loss: it sells when the trade is down $50"),B.aj,q.$1("Win 5 and lose 5 of 10 trades: 5 x 50 - 5 x 50 = $0.00. That is break even. Win 6 of 10 and you are up $100.")],x.p),B.B,b7,B.e,B.h,0,B.p)
case"brakes":w=b6.e
if(w==null)return q.$1('Try it yourself: before your next practice day, write down "I stop after losing $50 today". If three trades in a row lose, close the app and come back tomorrow. That is exactly what the agent does.')
b2=D.dD(J.t(w,"state"))
w=b6.e
w=D.eg(D.c4(D.dD(w==null?b7:J.t(w,"today")).h(0,"day_pnl")),!0,!0)
n=D.eg(D.c4(b2.h(0,"totalPnl")),!0,!0)
m=J.z(b2.h(0,"brakePaused"),!0)?"The brake is ON right now.":"Both brakes are off, it can keep trading."
return q.$1("Today the agent is at "+w+" (the daily stop is -$50) and "+n+" all time (the brake is -$100)."+m)
case"hours":if(b6.f!=null)b3=b6.fr
else{w=b6.e
b3=J.z(D.dD(w==null?b7:J.t(w,"market")).h(0,"stockOpen"),!0)}b4=B.d.aR(b6.ay,new D.eIY())
w=b3?"OPEN":"CLOSED"
n=b4?"OPEN":"CLOSED"
return q.$1("Right now the US stock market is "+w+", the forex market is "+n+", and crypto is open, as always.")
case"practice":w=b6.e
if(w==null){w=b6.gatw()
return q.$1("Right now "+new A.X(w,new D.eIZ(),A.U(w).k("X<1>")).gJ(0)+" of "+b6.gatw().length+" markets have signals that worked at least half the time lately. That is why a journal and many trades matter: some markets suit a method, others do not.")}b5=D.dD(J.t(w,"record"))
w=b5.h(0,"trades")
w=A.v(w==null?0:w)
n=b5.h(0,"wins")
n=A.v(n==null?0:n)
m=b5.h(0,"losses")
return q.$1("The agent journal so far: "+w+" finished trades, "+n+" wins and "+A.v(m==null?0:m)+" losses. Keep watching until there are at least 20 before judging it.")}return B.bK},
cDW(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=null,e=B.a.i(g.ch),d=g.gatw(),a0=A.U(d).k("X<1>"),a1=A.B(new A.X(d,new D.eJf(g,e.toLowerCase()),a0),a0.k("M.E"))
B.d.b_(a1,new D.eJg())
w=g.db
if(g.r==null)v=0
else{e=Date.now()
u=g.r
u.toString
v=B.o.ao(new A.W(e,0,!1).bx(u).a,1e6)}if(v<20)t="just now"
else t=v<60?""+v+" s ago":""+B.o.ao(v,60)+" min ago"
e=x.p
u=A.a([],e)
for(s=a2.a,r=0;r<4;++r){q=C.d6p[r]
if(g.cx===q)p=s?C.mZ:B.c
else p=s?B.c.j(0.92):C.i9
o=new A.aP(999,999)
n=new A.ax(s?C.oL:C.oG,1,B.r,-1)
m=q==="All"?"All "+d.length:q+" "+new A.X(d,new D.eJh(q),a0).gJ(0)
if(g.cx===q)l=s?B.c:C.mZ
else l=s?C.cl:B.c
B.d.u(u,A.a([A.aA(f,A.p(f,A.c(m,f,f,f,f,f,f,new A.G(!0,l,f,f,f,f,12,B.D,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f),f,f,f),B.f,f,f,new A.o(p,f,new A.bE(n,n,n,n),new A.bb(o,o,o,o),f,f,B.m),f,f,f,f,C.bGu,f,f,f),B.y,!1,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,new D.eJi(g,q),f,f,f,f,f,f,!1,B.a4),B.ba],e))}a0=A.E(A.cc(A.A(u,B.l,f,B.e,B.h,0,f,f),B.t,f,B.y,f,f,f,f,f,B.aK),1)
u=g.CW?B.cC:B.eN
u=A.a([A.A(A.a([a0,B.ba,g.a0T(a2,u,new D.eJj(g))],e),B.l,f,B.e,B.h,0,f,f)],e)
if(g.CW){a0=A.l(f,f,s?C.cl:B.c,f,f,f,f,f,f,f,f,f,f,f,f,f,f,!0,f,f,f,f,f,f,f,f)
p=A.l(f,f,s?C.bT:C.bV,f,f,f,f,f,f,f,f,13,f,f,f,f,f,!0,f,f,f,f,f,f,f,f)
o=A.V(B.eN,s?C.bT:C.bV,f,f,f,f)
m=s?B.c.j(0.92):C.i9
l=A.m(999)
k=s?C.oL:C.oG
j=A.m(999)
i=s?C.oL:C.oG
B.d.u(u,A.a([B.S,A.aN(f,B.M,!0,f,!0,B.t,f,A.aO(),g.cy,f,f,f,f,f,2,A.bC(f,new A.b6(4,l,new A.ax(k,1,B.r,-1)),f,B.f8,f,f,f,f,!0,new A.b6(4,j,new A.ax(i,1,B.r,-1)),f,f,f,f,f,m,!0,f,f,f,f,f,f,f,f,f,f,f,f,f,p,"Search a market, for example EUR/USD, GBP or Bitcoin",f,f,f,f,f,f,f,f,f,!0,!0,!1,f,o,f,f,f,f,f,f,f,f,f,f,f,f),B.y,!0,f,!0,f,!1,f,B.al,f,f,f,f,f,f,f,f,f,1,f,f,!1,"\u2022",f,new D.eJk(g),f,f,f,!1,f,f,!1,f,!0,f,B.ae,f,f,f,f,f,f,f,f,f,f,f,a0,!0,B.a7,f,B.ao,f,f,f,f)],e))}u.push(B.af)
u.push(g.bGr(a2))
if(J.z(w.h(0,"paused"),!0)){a0=w.h(0,"pauseReason")
a0=A.v(a0==null?"Record too weak \u2014 signals paused until the pattern improves.":a0)
p=B.i.M(D.c4(w.h(0,"paperStreak")))
o=w.h(0,"liftStreak")
u.push(new A.D(B.l6,A.c(a0+" ("+p+" of "+B.i.M(D.c4(o==null?10:o))+" paper wins in a row to lift it)",f,f,f,f,f,f,C.fNs,B.K,f,f),f))}u.push(B.N)
u.push(A.A(A.a([C.c00,B.e_,new A.d3(1,B.ci,A.c("Live confirmations \xb7 updated "+t+" \xb7 signals are only given at the 30-minute checks",f,f,f,f,f,f,A.l(f,f,s?C.bT:C.bV,f,f,f,f,f,f,f,f,11,f,f,f,f,f,!0,f,f,f,f,f,f,f,f),B.K,f,f),f)],e),B.l,f,B.bb,B.h,0,f,f))
u.push(B.af)
if(d.length===0)u.push(A.c("Loading the markets...",f,f,f,f,f,f,A.l(f,f,s?C.bT:C.bV,f,f,f,f,f,f,f,f,f,f,f,f,f,f,!0,f,f,f,f,f,f,f,f),f,f,f))
if(d.length!==0&&a1.length===0){e=g.ch
u.push(A.at(A.c('No market matches "'+e+'".',f,f,f,f,f,f,A.l(f,f,s?C.bT:C.bV,f,f,f,f,f,f,f,f,f,f,f,f,f,f,!0,f,f,f,f,f,f,f,f),f,f,f),f,f,f))}for(e=a1.length,r=0;r<a1.length;a1.length===e||(0,A.I)(a1),++r){h=a1[r]
u.push(D.hKK(a2,h,!1,new D.eJl(g,h)))}u.push(g.cDV(a2))
u.push(A.c("Signals are opinions from price patterns, not guarantees. Even strong signals lose. Signals only: nothing is ever traded here.",f,f,f,f,f,f,A.l(f,f,s?C.bT:C.bV,f,f,f,f,f,f,f,f,11,f,f,f,f,f,!0,f,f,f,f,f,f,f,f),B.K,f,f))
return A.Kl(A.co(u,f,f,C.aog,f,f,B.ah,!1),f,g.gcgD())},
cDV(a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e="direction",d="graded",a0="exit_price",a1="move_pct",a2=x.g.a(this.db.h(0,"history"))
if(a2==null)a2=B.bP
a2=J.cO(a2,x.f)
a2=A.cw(a2,new D.eJb(),a2.$ti.k("M.E"),x.P)
w=A.B(a2,A.a3(a2).k("M.E"))
a2=a3.a
v=a2?B.c.j(0.92):C.i9
u=A.m(20)
t=A.K(a2?B.c:C.n6,B.r,1)
s=A.c("Signal history",f,f,f,f,f,f,A.l(f,f,a2?C.cl:B.c,f,f,f,f,f,f,f,f,15,f,f,B.D,f,f,!0,f,f,f,f,f,f,f,f),f,f,f)
r=x.p
s=A.a([s,B.at,A.c("Every STRONG signal, graded at its 30-minute expiry: did the price finish its way? The record is the record.",f,f,f,f,f,f,A.l(f,f,a2?C.bT:C.bV,f,f,f,f,f,f,f,f,11.5,f,f,f,f,1.3,!0,f,f,f,f,f,f,f,f),f,f,f),B.N],r)
if(w.length===0)s.push(A.c("No STRONG signals yet. Zero signals is a correct outcome when the confirmations do not all agree.",f,f,f,f,f,f,A.l(f,f,a2?C.bT:C.bV,f,f,f,f,f,f,f,f,12.5,f,f,f,f,f,!0,f,f,f,f,f,f,f,f),f,f,f))
for(q=w.length,p=0;p<w.length;w.length===q||(0,A.I)(w),++p){o=w[p]
n=a2?C.oL:C.oG
m=J.a2(o)
l=(J.z(m.h(o,e),"BUY")?C.cF:C.d4).j(0.14)
k=new A.aP(8,8)
j=A.v(m.h(o,e))
i=J.z(m.h(o,e),"BUY")?C.cF:C.d4
l=A.p(B.z,A.c(j,f,f,f,f,f,f,new A.G(!0,i,f,f,f,f,11,B.u,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f),f,f,f),B.f,f,f,new A.o(l,f,f,new A.bb(k,k,k,k),f,f,B.m),f,f,f,f,B.tz,f,f,46)
k=A.v(m.h(o,"market"))
j=m.h(o,"price")
if(!(typeof j=="number")){j=A.cA(A.v(j==null?"":j))
if(j==null)j=0}i=m.h(o,"price")
if(!(typeof i=="number")){i=A.cA(A.v(i==null?"":i))
if(i==null)i=0}j=B.i.a5(j,i<10?4:2)
i=a2?C.cl:B.c
k=A.c(k+" at "+j,f,f,f,f,f,f,new A.G(!0,i,f,f,f,f,13,B.D,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f),f,f,f)
j=m.h(o,"et_time")
j=A.v(j==null?"":j)
if(J.z(m.h(o,d),!0)){i=m.h(o,a0)
if(!(typeof i=="number")){i=A.cA(A.v(i==null?"":i))
if(i==null)i=0}h=m.h(o,a0)
if(!(typeof h=="number")){h=A.cA(A.v(h==null?"":h))
if(h==null)h=0}i=B.i.a5(i,h<10?4:2)
h=m.h(o,a1)
if(!(typeof h=="number")){h=A.cA(A.v(h==null?"":h))
if(h==null)h=0}h=h>=0?"+":""
g=m.h(o,a1)
if(!(typeof g=="number")){g=A.cA(A.v(g==null?"":g))
if(g==null)g=0}g=" \xb7 then "+i+" ("+h+B.i.a5(g,2)+"%)"
i=g}else i=""
h=a2?C.bT:C.bV
k=A.x(A.a([k,A.c(j+i,f,f,f,f,f,f,new A.G(!0,h,f,f,f,f,11,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f),f,f,f)],r),B.B,f,B.e,B.h,0,B.p)
j=J.z(m.h(o,d),!0)?A.v(m.h(o,"result")):"PENDING"
if(!J.z(m.h(o,d),!0))m=B.b_
else m=J.z(m.h(o,"result"),"WIN")?C.cF:C.d4
i=m.j(0.14)
h=new A.aP(999,999)
s.push(A.p(f,new A.c2(B.aK,B.e,B.h,B.l,f,B.p,f,0,A.a([l,B.ar,new A.bu(1,B.b8,k,f),A.p(f,A.c(j,f,f,f,f,f,f,new A.G(!0,m,f,f,f,f,10.5,B.u,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f),f,f,f),B.f,f,f,new A.o(i,f,f,new A.bb(h,h,h,h),f,f,B.m),f,f,f,f,B.fa,f,f,f)],r),f),B.f,f,f,new A.o(f,f,new A.bE(B.a1,B.a1,new A.ax(n,1,B.r,-1),B.a1),f,f,f,B.m),f,f,f,f,B.hA,f,f,f))}return A.p(f,A.x(s,B.B,f,B.e,B.h,0,B.p),B.f,f,f,new A.o(v,f,t,u,f,f,B.m),f,f,f,C.bF7,B.bF,f,f,f)},
bGr(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=new A.X(C.Eh,new D.eIy(h),x.E).gJ(0),e=h.z||h.y
if(!e)w=new A.b7([B.jF,B.b_,"Signal alerts unlock when you finish all 10 lessons ("+f+" of 10 done). You will be told the market and STRONG BUY or SELL (only when all 5 confirmations agree), built for a 15\u201330 minute expiry.","Go to lessons"])
else w=!h.Q?C.fnz:C.fmT
v=w.a
u=v[0]
t=g
s=g
r=g
q=v[1]
p=v[2]
o=v[3]
r=o
s=p
t=q
n=u
v=t.j(0.12)
m=A.m(16)
l=A.K(t.j(0.45),B.r,1)
k=A.V(n,t,g,g,g,g)
j=x.p
k=A.a([k,B.ar,A.E(A.c(s,g,g,g,g,g,g,A.l(g,g,d.a?C.cl:B.c,g,g,g,g,g,g,g,g,12,g,g,g,g,1.35,!0,g,g,g,g,g,g,g,g),g,g,g),1)],j)
if(r!=null){i=A.bp(t,g,g,g,g,g,B.f2,g,g,g,g,g)
B.d.u(k,A.a([B.aa,A.bI(A.c(r,g,g,g,g,g,g,B.pp,g,g,g),g,new D.eIz(h,e),i)],j))}return A.p(g,A.A(k,B.l,g,B.e,B.h,0,g,g),B.f,g,g,new A.o(v,g,l,m,g,g,B.m),g,g,g,B.dU,B.bg,g,g,g)},
bHN(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=x.p,h=A.a([],i)
if($.DB.length===0){w=d.a
v=w?B.c.j(0.92):C.i9
u=A.m(22)
t=A.K(w?B.c:C.n6,B.r,1)
s=A.p(j,C.c0Y,B.f,j,j,E.agv,j,40,j,j,j,j,j,40)
s=A.A(A.a([s,B.ar,A.E(A.c("Your trading tutor",j,j,j,j,j,j,A.l(j,j,w?C.cl:B.c,j,j,j,j,j,j,j,j,16,j,j,B.D,j,j,!0,j,j,j,j,j,j,j,j),j,j,j),1)],i),B.l,j,B.e,B.h,0,j,j)
v=A.p(j,A.x(A.a([s,B.N,A.c("Ask anything about trading. The tutor sees the same live prices and readings as the agent, so it can explain what each market is doing right now.",j,j,j,j,j,j,A.l(j,j,w?C.bT:C.bV,j,j,j,j,j,j,j,j,12.5,j,j,j,j,1.35,!0,j,j,j,j,j,j,j,j),j,j,j)],i),B.B,j,B.e,B.h,0,B.p),B.f,j,j,new A.o(v,j,t,u,j,j,B.m),j,j,j,j,B.bS,j,j,j)
u=A.a([],i)
for(r=0;r<6;++r){q=C.dcH[r]
t=w?C.cl:B.c
t=A.c(q,j,j,j,j,j,j,new A.G(!0,t,j,j,j,j,12,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j),j,j,j)
s=w?B.c.j(0.92):C.i9
p=w?C.oL:C.oG
o=new A.aP(999,999)
u.push(A.mS(j,s,t,j,new D.eIA(k,q),j,new A.b9(new A.bb(o,o,o,o),B.a1),new A.ax(p,1,B.r,-1),j))}B.d.u(h,A.a([v,B.af,A.c_(B.bI,u,B.br,j,8,8)],i))}for(w=$.DB.length,v=d.a,r=0;r<$.DB.length;$.DB.length===w||(0,A.I)($.DB),++r){n=$.DB[r]
u=n.a
t=u?B.a9:B.a5
if(u)s=v?C.mZ:B.c
else s=v?B.c.j(0.92):C.i9
p=u?18:4
o=u?4:18
if(u)m=j
else{l=new A.ax(v?B.c:C.n6,1,B.r,-1)
m=new A.bE(l,l,l,l)}if(u)u=v?B.c:C.mZ
else u=v?C.cl:B.c
h.push(new A.bK(t,j,j,A.p(j,A.AD(n.b,new A.G(!0,u,j,j,j,j,13.5,j,j,j,j,j,1.4,j,j,j,j,j,j,j,j,j,j,j,j,j),j),B.f,j,F.ag5,new A.o(s,j,m,new A.bb(B.i6,B.i6,new A.aP(p,p),new A.aP(o,o)),j,j,B.m),j,j,j,B.jB,B.hn,j,j,j),j))}if($.ahm){w=v?B.c.j(0.92):C.i9
u=A.m(18)
h.push(new A.bK(B.a5,j,j,A.p(j,A.A(A.a([B.ac5,B.aa,A.c("Reading the markets...",j,j,j,j,j,j,A.l(j,j,v?C.bT:C.bV,j,j,j,j,j,j,j,j,12.5,j,j,j,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)],i),B.l,j,B.e,B.P,0,j,j),B.f,j,j,new A.o(w,j,j,u,j,j,B.m),j,j,j,B.hz,B.hn,j,j,j),j))}h=A.E(A.co(h,k.ax,j,C.bHH,j,j,B.ah,!1),1)
w=A.l(j,j,v?C.cl:B.c,j,j,j,j,j,j,j,j,j,j,j,j,j,j,!0,j,j,j,j,j,j,j,j)
u=A.l(j,j,v?C.bT:C.bV,j,j,j,j,j,j,j,j,j,j,j,j,j,j,!0,j,j,j,j,j,j,j,j)
t=v?B.c.j(0.92):C.i9
s=A.m(999)
p=v?C.oL:C.oG
o=A.m(999)
m=v?C.oL:C.oG
w=A.E(A.aN(j,B.M,!1,j,!0,B.t,j,A.aO(),k.at,j,j,j,j,j,2,A.bC(j,new A.b6(4,s,new A.ax(p,1,B.r,-1)),j,B.zs,j,j,j,j,!0,new A.b6(4,o,new A.ax(m,1,B.r,-1)),j,j,j,j,j,t,!0,j,j,j,j,j,j,j,j,j,j,j,j,j,u,"Ask about trading or a market...",j,j,j,j,j,j,j,j,j,!0,!0,!1,j,j,j,j,j,j,j,j,j,j,j,j,j,j),B.y,!0,j,!0,j,!1,j,B.al,j,j,j,j,j,j,j,j,j,4,1,j,!1,"\u2022",j,j,j,k.gcgC(),j,!1,j,j,!1,j,!0,j,B.ae,j,j,j,j,j,j,j,j,j,j,j,w,!0,B.a7,j,B.ao,j,B.acs,j,j),1)
u=v?C.mZ:B.c
t=$.ahm?j:new D.eIB(k)
return A.x(A.a([h,A.p(j,A.A(A.a([w,B.aa,A.aG(!1,B.a3,!0,j,A.aM(!1,j,!0,new A.a4(48,48,A.V(B.pY,v?B.c:C.mZ,j,j,j,j),j),B.cM,!0,j,j,j,j,j,j,j,j,j,j,j,t,j,j,j,j,j,j,j),B.f,u,0,j,j,B.cM,j,j,B.ai)],i),B.l,j,B.e,B.h,0,j,j),B.f,j,j,j,j,j,j,j,B.HD,j,j,j)],i),B.l,j,B.e,B.h,0,B.p)}}
D.a0M.prototype={
R(){var w=x.S
return new D.bll(A.S(w,w))},
cZs(d){return this.e.$0()},
d1c(d){return this.x.$1(d)},
ro(){return this.y.$0()},
d_K(d){return this.z.$1(d)},
gd4(d){return this.w}}
D.bll.prototype={
a_(){var w,v,u,t,s,r,q,p,o,n=this
n.a3()
w=C.dLL.h(0,n.a.c.a)
n.d=w==null?n.a.c.x:w
v=n.a.w
u=new D.dvb()
t=new D.dv9()
w=u.$1(v.h(0,"slots"))
s=A.U(w).k("X<1>")
w=A.B(new A.X(w,new D.dv7(n),s),s.k("M.E"))
n.e=w
w=w.length
s=n.d.length
if(w!==Math.min(10,s)){w=x.S
r=J.e5(s,w)
for(q=0;q<s;++q)r[q]=q
B.d.dY(r,B.cV)
n.e=A.cV(r,0,A.dz(Math.min(10,n.d.length),"count",w),A.U(r).c).df(0)}w=u.$1(v.h(0,"right"))
n.f=A.jt(w,A.U(w).c)
n.r=t.$1(v.h(0,"tries"))
n.w=t.$1(v.h(0,"locks"))
n.x=u.$1(v.h(0,"used"))
for(w=n.e,s=w.length,p=0;p<w.length;w.length===s||(0,A.I)(w),++p){o=w[p]
if(!B.d.q(n.x,o))B.d.I(n.x,o)}n.bbA(!1)
n.z=A.d1(B.fp,new D.dv8(n))},
t(){var w=this.z
if(w!=null)w.a1(0)
this.a2()},
b3n(){var w,v,u,t,s,r,q=this,p=q.a
p.toString
w=q.e
w===$&&A.d()
v=q.f
v===$&&A.d()
v=A.B(v,A.a3(v).k("ci.E"))
u=q.r
u===$&&A.d()
t=x.N
s=x.S
u=u.iX(u,new D.dv_(),t,s)
r=q.w
r===$&&A.d()
s=r.iX(r,new D.dv0(),t,s)
r=q.x
r===$&&A.d()
return p.d1c(A.J(["slots",w,"right",v,"tries",u,"locks",s,"used",r],t,x.z))},
bbA(d){var w,v,u,t,s,r,q,p,o,n=this,m=Date.now(),l=n.y,k=x.X,j=!1,i=0
for(;;){w=n.e
w===$&&A.d()
if(!(i<w.length))break
A:{v=w[i]
w=n.w
w===$&&A.d()
u=w.h(0,v)
if(u==null||u>m)break A
w=n.d
w===$&&A.d()
t=w.length
s=A.a(new Array(t),k)
for(r=0;r<t;++r)s[r]=r
w=A.U(s).k("X<1>")
q=A.B(new A.X(s,new D.dv1(n),w),w.k("M.E"))
if(q.length!==0)p=q
else{t=n.d.length
s=A.a(new Array(t),k)
for(r=0;r<t;++r)s[r]=r
w=A.U(s).k("X<1>")
p=A.B(new A.X(s,new D.dv2(n),w),w.k("M.E"))}w=p.length
if(w===0)o=v
else o=p[B.cV.av(w)]
n.w.X(0,v)
w=n.r
w===$&&A.d()
w.X(0,v)
l.X(0,v)
n.e[i]=o
w=n.x
w===$&&A.d()
if(!B.d.q(w,o))B.d.I(n.x,o)
j=!0}++i}if(j&&d)n.b3n()},
cGC(){return this.bbA(!0)},
cn6(d){var w,v,u,t,s=this.d
s===$&&A.d()
w=s[d].b.length
s=J.e5(w,x.S)
for(v=0;v<w;++v)s[v]=v
u=this.x
u===$&&A.d()
t=new A.e3()
t.cT(d*7919+u.length)
B.d.dY(s,t)
return s},
cgB(d,e){var w=this,v=w.f
v===$&&A.d()
if(!v.q(0,d)){v=w.w
v===$&&A.d()
v=v.am(0,d)}else v=!0
if(v)return
w.l(new D.duY(w,e,d))
w.b3n()},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=A.Q(d).ax.a===B.dh,i=new D.Rt(j),h=l.a.c,g=l.e
g===$&&A.d()
w=l.f
w===$&&A.d()
v=new A.X(g,w.gjD(w),A.U(g).k("X<1>")).gJ(0)
u=v===l.e.length
g=j?C.t6:C.t4
w=j?C.t6:C.t4
t=j?C.O3:C.NX
s=x.O
t=A.a([w,t],s)
w=A.aI(k,k,k,k,A.V(B.eC,j?C.cl:B.c,k,k,k,18),k,k,k,new D.dv3(d),k,k,k,k,k,k)
r=l.a.d
q=x.p
r=A.A(A.a([w,B.aW,A.c("Lesson "+r+" of 10",k,k,k,k,k,k,A.l(k,k,j?C.bT:C.bV,k,k,k,k,k,k,k,k,12,k,k,B.O,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)],q),B.l,k,B.e,B.h,0,k,k)
w=A.m(24)
p=h.f
o=A.ap(p,B.v,0.35)
o.toString
s=A.a([p,o],s)
o=B.c.j(0.2)
p=A.m(16)
s=A.a([r,A.p(k,A.A(A.a([A.p(k,A.V(h.e,B.c,k,k,k,28),B.f,k,k,new A.o(o,k,k,p,k,k,B.m),k,52,k,k,k,k,k,52),B.ew,A.E(A.x(A.a([A.c(h.b,k,k,k,k,k,k,B.fQ,k,k,k),A.c(h.c+" \xb7 "+h.d+" min",k,k,k,k,k,k,B.nw,k,k,k)],q),B.B,k,B.e,B.h,0,B.p),1)],q),B.l,k,B.e,B.h,0,k,k),B.f,k,k,new A.o(k,k,k,w,k,new A.a8(B.a5,B.a9,B.x,s,k,k),B.m),k,k,k,k,B.f9,k,k,k),B.aB],q)
for(w=h.w,n=0;n<4;++n){r=w[n]
p=j?C.cl:B.c
p=A.c(r.a,k,k,k,k,k,k,new A.G(!0,p,k,k,k,k,16,B.D,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k),k,k,k)
o=j?C.cl:B.c
B.d.u(s,A.a([p,B.at,A.c(r.b,k,k,k,k,k,k,new A.G(!0,o,k,k,k,k,14,k,k,k,k,k,1.5,k,k,k,k,k,k,k,k,k,k,k,k,k),k,k,k),B.aB],q))}w=j?B.c.j(0.92):C.i9
r=A.m(22)
p=A.K(C.cF.j(0.45),B.r,1.5)
s.push(A.p(k,A.x(A.a([A.A(A.a([C.bXv,B.ba,A.c("See it live right now",k,k,k,k,k,k,A.l(k,k,j?C.cl:B.c,k,k,k,k,k,k,k,k,14,k,k,B.D,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)],q),B.l,k,B.e,B.h,0,k,k),B.S,l.a.cZs(0)],q),B.B,k,B.e,B.h,0,B.p),B.f,k,k,new A.o(w,k,p,r,k,k,B.m),k,k,k,k,B.bF,k,k,k))
s.push(B.by)
w=A.c("Quiz",k,k,k,k,k,k,A.l(k,k,j?C.cl:B.c,k,k,k,k,k,k,k,k,16,k,k,B.D,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)
r=""+v+" of "
p=l.e.length
if(u)o=C.cF
else o=j?C.bT:C.bV
s.push(A.A(A.a([w,B.aW,A.c(r+p+" right",k,k,k,k,k,k,A.l(k,k,o,k,k,k,k,k,k,k,k,12.5,k,k,B.D,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)],q),B.l,k,B.e,B.h,0,k,k))
s.push(B.aj)
o=A.m(9)
w=l.e.length
w=w===0?0:v/w
s.push(A.by(o,A.jE(j?C.Oa:C.O0,k,k,7,k,w,C.b5x),B.aq))
s.push(B.N)
w=l.a.f?"Admin: you can retry any question.":"Get all 10 right to finish. A wrong answer gets one more try; wrong twice and that question locks for 5 minutes, then a new question takes its place."
s.push(A.c(w,k,k,k,k,k,k,A.l(k,k,j?C.bT:C.bV,k,k,k,k,k,k,k,k,11.8,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),k,k,k))
s.push(B.S)
for(m=0;w=l.e,m<w.length;++m)s.push(l.cuo(i,m,w[m]))
s.push(B.N)
w=j?C.cl:B.c
p=j?C.oL:C.oG
p=A.E(A.er(C.c3b,k,C.fYY,new D.dv4(l,h),A.dl(k,k,k,k,k,k,k,k,k,w,k,k,B.cq,k,new A.b9(A.m(999),B.a1),new A.ax(p,1.5,B.r,-1),k,k,k,k)),1)
w=!u
if(!w||l.a.r)j=C.cF
else j=j?C.bT:C.bV
j=A.bp(j,k,k,k,k,k,B.cq,k,new A.b9(A.m(999),B.a1),k,k,k)
o=!w||l.a.r?new D.dv5(l,d):k
s.push(A.A(A.a([p,B.ar,A.E(A.dd(B.R9,k,A.c(!w||l.a.r?"Finish lesson":r+l.e.length+" right",k,k,k,k,k,k,B.cf,k,k,k),o,j),1)],q),B.l,k,B.e,B.h,0,k,k))
return A.c7(k,g,A.p(k,A.bo(!0,A.co(s,k,k,C.bHP,k,k,B.ah,!1),!0,!1,B.ag,!0,!0),B.f,k,k,new A.o(k,k,k,k,k,new A.a8(B.aX,B.b1,B.x,t,k,k),B.m),k,k,k,k,k,k,k,k),k,!1,!1,k,k)},
cuo(a8,a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=this,a6=null,a7=a5.d
a7===$&&A.d()
w=a7[b0]
a7=a5.f
a7===$&&A.d()
v=a7.q(0,b0)
a7=a5.w
a7===$&&A.d()
u=a7.h(0,b0)
a7=a5.r
a7===$&&A.d()
t=a7.h(0,b0)
if(t==null)t=0
s=a5.y.h(0,b0)
if(u!=null){a7=A.dv(0,0,0,Math.max(0,u-Date.now()),0,0).a
r=B.o.ao(a7,6e7)
q=B.a.aZ(B.o.v(B.o.F(B.o.ao(a7,1e6),60)),2,"0")
a7=a8.a
p=a7?C.qT:C.qU
o=A.m(20)
n=A.K(C.d4.j(0.4),B.r,1)
m=A.c("Question "+(a9+1)+" is locked",a6,a6,a6,a6,a6,a6,A.l(a6,a6,a7?C.cl:B.c,a6,a6,a6,a6,a6,a6,a6,a6,14,a6,a6,B.D,a6,a6,!0,a6,a6,a6,a6,a6,a6,a6,a6),a6,a6,a6)
l=x.p
return A.p(a6,A.A(A.a([C.c5i,B.ar,A.E(A.x(A.a([m,A.c("Wrong twice. Re-read the lesson; a new question appears in "+r+":"+q+".",a6,a6,a6,a6,a6,a6,A.l(a6,a6,a7?C.bT:C.bV,a6,a6,a6,a6,a6,a6,a6,a6,12.5,a6,a6,a6,a6,1.35,!0,a6,a6,a6,a6,a6,a6,a6,a6),a6,a6,a6)],l),B.B,a6,B.e,B.h,0,B.p),1)],l),B.l,a6,B.e,B.h,0,a6,a6),B.f,a6,a6,new A.o(p,a6,n,o,a6,a6,B.m),a6,a6,a6,B.d7,B.bF,a6,a6,a6)}a7=a8.a
p=a7?B.c.j(0.92):C.i9
o=A.m(20)
if(v)n=C.cF.j(0.6)
else n=a7?B.c:C.n6
n=A.K(n,B.r,v?1.5:1)
m=x.p
l=A.a([A.c(""+(a9+1)+". "+w.a,a6,a6,a6,a6,a6,a6,A.l(a6,a6,a7?C.cl:B.c,a6,a6,a6,a6,a6,a6,a6,a6,14,a6,a6,B.D,a6,a6,!0,a6,a6,a6,a6,a6,a6,a6,a6),a6,a6,a6),B.N],m)
for(k=a5.cn6(b0),j=k.length,i=!v,h=w.b,g=w.c,f=0;f<k.length;k.length===j||(0,A.I)(k),++f){e=k[f]
d=v?a6:new D.duZ(a5,b0,e)
if(v&&e===g)a0=C.cF.j(0.14)
else if(s===e)a0=C.d4.j(0.12)
else a0=a7?C.qT:C.qU
a1=new A.aP(14,14)
if(v&&e===g)a2=C.cF
else a2=s===e?C.d4:B.L
a3=new A.ax(a2,1,B.r,-1)
a2=h[e]
a4=a7?C.cl:B.c
a2=A.a([new A.bu(1,B.b8,A.c(a2,a6,a6,a6,a6,a6,a6,new A.G(!0,a4,a6,a6,a6,a6,13.5,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6),a6,a6,a6),a6)],m)
if(v&&e===g)a2.push(C.c0I)
if(i&&s===e)a2.push(C.c6H)
l.push(A.aA(a6,A.p(a6,new A.c2(B.aK,B.e,B.h,B.l,a6,B.p,a6,0,a2,a6),B.f,a6,a6,new A.o(a0,a6,new A.bE(a3,a3,a3,a3),new A.bb(a1,a1,a1,a1),a6,a6,B.m),a6,a6,a6,B.eA,B.ep,a6,a6,a6),B.y,!1,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,d,a6,a6,a6,a6,a6,a6,!1,B.a4))}if(v)l.push(A.c("Right! "+w.d,a6,a6,a6,a6,a6,a6,C.fSQ,a6,a6,a6))
else if(t===1&&!a5.a.f)l.push(C.h0J)
else if(t>=1)l.push(C.fZ7)
return A.p(a6,A.x(l,B.B,a6,B.e,B.h,0,B.p),B.f,a6,a6,new A.o(p,a6,n,o,a6,a6,B.m),a6,a6,a6,B.d7,B.bF,a6,a6,a6)}}
D.aPu.prototype={
t(){var w=this,v=w.ab$
if(v!=null)v.a8(0,w.gbB())
w.ab$=null
w.a2()},
b0(){this.b8()
this.b6()
this.bC()}}
var z=a.updateTypes(["P(uw)","ay<~>()","~()","XN(Z)","P(QY)","ay<~>(n)","n(a_L)","a0M(Z)"])
D.eIv.prototype={
$1(d){var w=this.a
if(w.c!=null)w.yR(!0)},
$S:26}
D.eIw.prototype={
$1(d){this.a.yR(!0)
return null},
$S:10}
D.eHM.prototype={
$0(){var w=this.a
w.d=this.b
w.f=!1},
$S:0}
D.eI2.prototype={
$1(d){var w=this.a.as,v=w.f
if(v.length!==0){v=B.d.gd3(v).Q
v.toString
w.i9(B.i.D(Math.min(this.b*160-16,v),0,1/0))}},
$S:7}
D.eHO.prototype={
$0(){return this.a.Q=this.b},
$S:0}
D.eI1.prototype={
$0(){return this.a.Q=this.b},
$S:0}
D.eI4.prototype={
$0(){var w=this.a,v=w.f=!1,u=this.b,t=u==null
if(!t?J.z(J.t(u,"ok"),!0):v){w.d=u
w.ay=null}else{v=t?null:J.t(u,"error")
w.ay=J.k(v==null?"Could not reach the server. Pull down to try again.":v)
if(!J.z(t?null:J.t(u,"ownerOnly"),!0))v=J.z(t?null:J.t(u,"setupNeeded"),!0)
else v=!0
if(v)w.d=null}},
$S:0}
D.eI5.prototype={
$0(){var w=this.a,v=this.b
w.e=v
w.w=J.ad(v)>=30},
$S:0}
D.eHL.prototype={
$1(d){return A.a0(d,x.N,x.z)},
$S:22}
D.eHN.prototype={
$0(){var w,v,u=this,t=u.a
if(u.b){w=A.B(t.e,x.P)
v=u.c
B.d.u(w,v)}else{w=u.c
v=w}t.e=w
t.w=J.ad(v)>=30},
$S:0}
D.eId.prototype={
$1(d){var w=null
return A.ek(A.a([A.bM(!1,B.dw,w,w,!0,w,w,w,new D.eIb(d),w,w),A.bI(C.hl4,w,new D.eIc(d),w)],x.p),w,w,w,C.hlu,w,w,w,w,C.h2e,w)},
$S:18}
D.eIb.prototype={
$0(){A.a7(this.a,!1).N(!1)
return null},
$S:0}
D.eIc.prototype={
$0(){A.a7(this.a,!1).N(!0)
return null},
$S:0}
D.eIe.prototype={
$0(){var w,v,u,t,s=this.a
s.r=!0
w=s.d
if(w!=null){v=x.N
u=x.z
w=A.dE(w,v,u)
t=s.d
t.toString
u=A.dE(D.dD(J.t(t,"state")),v,u)
v=this.b
u.n(0,"enabled",v)
if(v)u.n(0,"brakePaused",!1)
w.n(0,"state",u)
s.d=w}},
$S:0}
D.eIf.prototype={
$0(){var w=this,v=w.a,u=v.r=!1,t=w.b
if(t){u=w.c
u.toString
u=J.t(u,"state")!=null}if(u)v.d=w.c
else if(!t)v.d=w.d},
$S:0}
D.eHV.prototype={
$1(d){var w=this.a,v=w.d
w.a.toString
return D.hjC(v,!1)},
$S:z+3}
D.eI7.prototype={
$0(){return this.a.r=!0},
$S:0}
D.eI8.prototype={
$0(){var w=this.a,v=w.r=!1,u=this.b
if(u!=null?J.z(J.t(u,"ok"),!0):v)w.d=u},
$S:0}
D.eI9.prototype={
$1(d){var w=this
return A.oX(new D.eI6(w.a,w.b,w.c,w.d),!1,0.8,0.95,0.25,!1,null)},
$S:129}
D.eI6.prototype={
$2(d,e){var w=this
return w.a.czx(w.b,w.c,D.dD(J.t(w.d,"state")),e)},
$S:2081}
D.eIa.prototype={
$2(d,e){return B.i.aQ(D.eIi(d),D.eIi(e))},
$S:40}
D.eIu.prototype={
$0(){return this.a.yR(!0)},
$S:1}
D.eIp.prototype={
$0(){var w=this.a.c
w.toString
return A.Od(w)},
$S:0}
D.eIq.prototype={
$0(){return this.a.yR(!0)},
$S:0}
D.eHz.prototype={
$1(d){var w,v=J.a2(d)
if(!J.z(v.h(d,"today"),!0)){v=v.h(d,"asset")
w=this.a
v=J.z(v,w==null?null:w.h(0,"symbol"))}else v=!0
return v},
$S:4}
D.eHA.prototype={
$1(d){return J.z(J.t(d,"asset"),this.a.Q)},
$S:4}
D.eHB.prototype={
$1(d){return J.z(J.t(d,"asset"),this.a)},
$S:4}
D.eHC.prototype={
$0(){var w=this
return B.d.dr(w.a,new D.eHx(w.b),new D.eHy(w.c,w.d))},
$S:150}
D.eHx.prototype={
$1(d){return J.z(J.t(d,"asset"),this.a)},
$S:4}
D.eHy.prototype={
$0(){var w=this.a
return w.length===0?this.b:B.d.gG(w)},
$S:150}
D.eHD.prototype={
$1(d){return J.z(J.t(d,"asset"),this.a.h(0,"symbol"))},
$S:4}
D.eHE.prototype={
$0(){return this.a},
$S:150}
D.eIl.prototype={
$1(d){return A.v(d)},
$S:15}
D.eIm.prototype={
$1(d){return A.v(d)},
$S:15}
D.eIn.prototype={
$1(d){return B.a.q(d,"/")},
$S:3}
D.eIo.prototype={
$1(d){return!B.a.q(d,"/")},
$S:3}
D.eIh.prototype={
$1(d){var w,v=this,u=null,t=v.b,s=v.a.cIW(t,v.c,v.d)
t=t.a
w=A.fv(u,u,t?B.c.j(0.92):C.i9,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,B.nt,u,u,u,u,u,u)
return A.eI(u,B.L,A.aG(!1,B.a3,!0,u,A.x(A.a([s,B.S,A.bM(!1,A.c("Got it",u,u,u,u,u,u,A.l(u,u,t?C.cl:B.c,u,u,u,u,u,u,u,u,u,u,u,B.D,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u,u,!0,u,u,u,new D.eIg(d),u,w)],x.p),B.l,u,B.e,B.P,0,B.p),B.f,B.L,0,u,u,u,u,u,B.ai),u,u,u,B.zw,u,B.dd,u,u,u)},
$S:47}
D.eIg.prototype={
$0(){return A.a7(this.a,!1).e4()},
$S:0}
D.eIk.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.c
s.toString
w=2
return A.b(A.a7(s,!1).c9(A.e6(new D.eIj(u.b),!1,null,x.H)),$async$$0)
case 2:if(t.c!=null)t.yR(!1)
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
D.eIj.prototype={
$1(d){return D.hAl(this.a)},
$S:586}
D.eHQ.prototype={
$1(d){return J.z(J.t(d,"open"),!0)},
$S:4}
D.eHR.prototype={
$0(){var w=this
return w.a.cDN(w.b,w.c,w.d)},
$S:0}
D.eHS.prototype={
$1(d){return J.z(J.t(d,"asset"),J.t(this.a,"asset"))},
$S:4}
D.eHU.prototype={
$2(d,e){return B.ar},
$S:36}
D.eHT.prototype={
$2(d,a0){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.b[a0],l=J.a2(m),k=J.k(l.h(m,"asset")),j=k===J.t(o.c,"asset"),i=D.c4(l.h(m,"changePct")),h=i>=0,g=o.d,f=J.z(g==null?n:g.h(0,"symbol"),k),e=J.z(D.dD(l.h(m,"reading")).h(0,"decision"),"ENTER")&&J.z(D.dD(l.h(m,"reading")).h(0,"dir"),"up")
g=o.a
w=o.e
v=w.a
u=v?B.c.j(0.92):C.i9
t=A.m(16)
if(j)s=D.fCw(k).c
else s=v?B.c:C.n6
s=A.K(s,B.r,j?2:1)
w=j?D.fCw(k).c.j(0.2):w.gI3()
w=A.a([new A.aa(0,B.H,w,B.cN,j?12:8)],x.V)
r=D.bDY(k,16)
q=x.p
r=A.a([r,B.e_,A.E(A.c(k,n,1,B.a2,n,n,n,A.l(n,n,v?C.cl:B.c,n,n,n,n,n,n,n,n,11.5,n,n,B.D,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),1)],q)
if(f)B.d.u(r,A.a([A.V(B.q2,F.qH,n,n,n,13),B.pn],q))
else if(e)B.d.u(r,A.a([A.V(B.fN,C.cF,n,n,n,14),B.pn],q))
r.push(g.cKi(m))
r=A.A(r,B.l,n,B.e,B.h,0,n,n)
l=D.eg(D.c4(l.h(m,"price")),!0,!1)
l=A.E(new A.de(B.dp,B.a5,B.f,A.c(l,n,n,n,n,n,n,A.l(n,n,v?C.cl:B.c,n,n,n,n,n,n,n,n,14.5,n,n,B.D,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),n),1)
v=h?"+":""
p=B.i.a5(i,2)
return A.aA(n,A.cX(n,A.x(A.a([r,A.A(A.a([l,B.da,A.c(v+p+"%",n,n,n,n,n,n,A.l(n,n,h?C.cF:C.d4,n,n,n,n,n,n,n,n,10.5,n,n,B.D,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],q),B.dt,n,B.e,B.h,0,n,n)],q),B.B,n,B.iA,B.h,0,B.p),n,n,B.aZ,new A.o(u,n,s,t,w,n,B.m),B.a3,n,n,n,n,B.iP,n,n,152),B.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new D.eHP(g,k),n,n,n,n,n,n,!1,B.a4)},
$S:78}
D.eHP.prototype={
$0(){return this.a.a29(this.b)},
$S:0}
D.eHH.prototype={
$0(){var w=this.a
return w.l(new D.eHG(w,this.b))},
$S:0}
D.eHG.prototype={
$0(){return this.a.z=this.b},
$S:0}
D.eHI.prototype={
$0(){var w=this.a
return w.l(new D.eHF(w))},
$S:0}
D.eHF.prototype={
$0(){var w=this.a
return w.ax=!w.ax},
$S:0}
D.eHJ.prototype={
$1(d){return A.a0(d,x.N,x.z)},
$S:22}
D.eHv.prototype={
$1(d){return J.z(J.t(d,"asset"),this.a.h(0,"symbol"))},
$S:4}
D.eHw.prototype={
$0(){return A.S(x.N,x.z)},
$S:150}
D.eHX.prototype={
$1(d){return A.v(d)},
$S:15}
D.eHY.prototype={
$1(d){return A.v(d)},
$S:15}
D.eHZ.prototype={
$1(d){return A.v(d)},
$S:15}
D.eHW.prototype={
$1(d){var w,v,u,t,s=A.be(A.v(d==null?"":d))
if(s==null)return"?"
w=s.bU()
v=B.o.F(A.d0(w),12)===0?12:B.o.F(A.d0(w),12)
u=B.a.aZ(B.o.v(A.fB(w)),2,"0")
t=A.d0(w)<12?"AM":"PM"
return""+v+":"+u+" "+t},
$S:15}
D.eI_.prototype={
$2(d,e){var w,v=null,u=this.a.a?C.qT:C.qU
u=A.bT(3,A.p(v,v,B.f,v,v,new A.o(u,v,v,A.m(99),v,v,B.m),v,v,v,v,v,v,v,v),0,0,3)
w=B.i.D(this.b/this.c,0,1)
return new A.a4(v,14,new A.an(B.a0,v,B.ad,B.t,A.a([u,A.ao(3,A.p(v,v,B.f,v,v,new A.o(C.cF,v,v,A.m(99),v,v,B.m),v,v,v,v,v,v,v,v),v,v,0,v,3,e.b*w)],x.p),v),v)},
$S:107}
D.eI0.prototype={
$1(d){var w=J.a2(d),v=A.v(w.h(d,"symbol"))
return A.aK(v,"/USD","")+" until "+A.v(this.a.$1(w.h(d,"until")))},
$S:2082}
D.eI3.prototype={
$2(d,e){var w=null,v=e.b,u=A.ao(w,A.p(w,w,B.f,w,w,new A.o(w,w,w,A.m(99),w,C.cbg,B.m),w,8,w,w,w,w,w,w),w,w,0,0,9,w),t=this.a.a,s=A.ao(w,A.p(w,w,B.f,(t?C.cl:B.c).j(0.5),w,w,w,18,w,w,w,w,w,2),w,w,v/2-1,w,4,w),r=B.i.D(this.b*v-9,0,v-18)
return new A.a4(w,26,new A.an(B.a0,w,B.ad,B.f,A.a([u,s,A.ao(w,A.p(w,w,B.f,w,w,new A.o(B.c,w,A.K(t?C.cl:B.c,B.r,3),w,w,w,B.a6),w,18,w,w,w,w,w,18),w,w,r,w,4,w)],x.p),w),w)},
$S:107}
D.eHK.prototype={
$0(){return this.a.zc(!this.b)},
$S:0}
D.eHu.prototype={
$2(d,e){var w=null,v=this.a.a,u=v?C.qT:C.qU,t=A.m(12),s=A.c(d,w,1,B.a2,w,w,w,A.l(w,w,v?C.bT:C.bV,w,w,w,w,w,w,w,w,10.5,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)
return A.E(A.p(w,A.x(A.a([s,B.bt,new A.de(B.dp,B.a5,B.f,A.c(e,w,w,w,w,w,w,A.l(w,w,v?C.cl:B.c,w,w,w,w,w,w,w,w,13,w,w,B.D,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w)],x.p),B.B,w,B.e,B.h,0,B.p),B.f,w,w,new A.o(u,w,w,t,w,w,B.m),w,w,w,w,B.iP,w,w,w),1)},
$S:110}
D.eIs.prototype={
$1(d){return A.a0(d,x.N,x.z)},
$S:22}
D.eIt.prototype={
$0(){var w=this.a
return w.l(new D.eIr(w))},
$S:0}
D.eIr.prototype={
$0(){var w=this.a
return w.y=!w.y},
$S:0}
D.eHt.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=t.x&&t.w?2:4
break
case 2:w=5
return A.b(t.a_7(!0),$async$$0)
case 5:w=3
break
case 4:t.l(new D.eHs(t))
case 3:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
D.eHs.prototype={
$0(){var w=this.a
return w.x=!w.x},
$S:0}
D.fLi.prototype={
$1(d){return Math.abs(B.o.ao(d.a.bx(this.a).a,1e6))<90&&d.d.A(0,this.b)},
$S:z+4}
D.cXg.prototype={
$0(){return this.a.d=this.b},
$S:0}
D.cXp.prototype={
$2(d,e){var w,v,u=null,t=e.b,s=this.a,r=s.a,q=r.c,p=r.d,o=r.e,n=r.f
r=r.r
w=s.d
v=d.L(x.D)
if(v==null)v=B.CR
return A.aA(u,new A.a4(t,250,A.b4(u,u,u,new D.beE(v.w.d,s.a.w,q,p,o,n,r,w,u),B.aA),u),B.y,!1,u,u,u,u,u,new D.cXk(s),new D.cXl(s,t),new D.cXm(s,t),u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new D.cXn(s,t),new D.cXo(s),u,u,u,!1,B.a4)},
$S:37}
D.cXn.prototype={
$1(d){return this.a.aAI(d.b,this.b)},
$S:24}
D.cXl.prototype={
$1(d){return this.a.aAI(d.b,this.b)},
$S:50}
D.cXm.prototype={
$1(d){return this.a.aAI(d.b,this.b)},
$S:19}
D.cXk.prototype={
$1(d){var w=this.a
return w.l(new D.cXj(w))},
$S:38}
D.cXj.prototype={
$0(){return this.a.d=null},
$S:0}
D.cXo.prototype={
$1(d){return A.bN(B.fM,new D.cXi(this.a),x.b)},
$S:57}
D.cXi.prototype={
$0(){var w=this.a
if(w.c!=null)w.l(new D.cXh(w))},
$S:12}
D.cXh.prototype={
$0(){return this.a.d=null},
$S:0}
D.cXq.prototype={
$1(d){var w=this.a
return w*d+w/2},
$S:154}
D.cXs.prototype={
$1(d){var w=this.b,v=this.a,u=v.a
return w-(d-u)/(v.b-u)*w},
$S:5}
D.cXr.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o=this,n=$.T(),m=A.a([],x.v),l=new A.aH(n.r,B.ak,null,null,m)
for(n=o.b,w=o.c,v=o.d,u=o.a.d,t=!1,s=0;s<n;++s){r=J.t(u[s],d)
if(r==null)continue
q=w.$1(s)
if(typeof r=="number")p=r
else{p=A.cA(A.v(r))
if(p==null)p=0}p=v.$1(p)
if(t){q=new A.aq(q,p)
m.push(q)
p=l.f
if(p!=null)q.aj(p)
l.ac()}else{q=new A.aZ(q,p)
m.push(q)
p=l.f
if(p!=null)q.aj(p)
l.ac()}t=!0}$.T()
n=A.L()
n.r=e.j(0.85).gp(0)
n.b=B.ac
n.c=2
n.d=B.bG
n.e=B.dP
o.e.af(l,n)},
$S:2083}
D.fiQ.prototype={
$1(d){return D.c4(J.t(d,"c"))},
$S:2084}
D.fxp.prototype={
$1(d){var w=null,v=C.a8w.h(0,d),u=v.a,t=v.b,s=this.a,r=s*0.78,q=A.K(B.c,B.r,1.2)
return A.p(B.z,A.c(u,w,w,w,w,w,w,A.l(w,w,B.c,w,w,w,w,w,w,w,w,s*(u.length>1?0.26:0.36),w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.f,w,w,new A.o(t,w,q,w,w,w,B.a6),w,r,w,w,w,w,w,r)},
$S:126}
D.fCP.prototype={
$1(d){var w=x.N,v=x.z,u=A.a0(d,w,v)
v=A.dE(u,w,v)
v.n(0,"asset",u.h(0,"symbol"))
return v},
$S:22}
D.fH9.prototype={
$1(d){return A.a0(d,x.N,x.z)},
$S:22}
D.fDV.prototype={
$1(d){return","},
$S:58}
D.fLc.prototype={
$3(d,e,f){var w=A.aX_(d,e,1,0,0,0,0,0)
while(A.lV(w)!==7)w=w.bL(864e8)
return w.bL(A.dv(7*(f-1),0,0,0,0,0).a)},
$S:2085}
D.e8D.prototype={
$1(d){this.a.Br()
return null},
$S:10}
D.e85.prototype={
$0(){var w=this.a,v=this.b
w.d=A.a0(D.dD(v.h(0,"s")),x.N,x.z)
v=x.g.a(v.h(0,"log"))
if(v==null)v=B.bP
v=J.cO(v,x.f)
v=A.cw(v,new D.e84(),v.$ti.k("M.E"),x.P)
v=A.B(v,A.a3(v).k("M.E"))
w.e=v
w.f=!1},
$S:0}
D.e84.prototype={
$1(d){return A.a0(d,x.N,x.z)},
$S:22}
D.e8k.prototype={
$0(){var w,v,u=this.a
u.f=!1
w=this.b
v=w==null
if(!v&&J.z(J.t(w,"ok"),!0)){u.d=A.a0(w,x.N,x.z)
u.w=null}else{w=v?null:J.t(w,"error")
u.w=J.k(w==null?"Could not load this system right now.":w)}w=this.c
if(w!=null&&J.z(J.t(w,"ok"),!0)){w=x.g.a(J.t(w,"rows"))
if(w==null)w=B.bP
w=J.cO(w,x.f)
w=A.cw(w,new D.e8j(),w.$ti.k("M.E"),x.P)
w=A.B(w,A.a3(w).k("M.E"))
u.e=w}},
$S:0}
D.e8j.prototype={
$1(d){return A.a0(d,x.N,x.z)},
$S:22}
D.e8q.prototype={
$0(){var w,v,u,t=this.a
t.r=!0
w=t.d
if(w!=null){v=x.N
u=x.z
w=A.dE(w,v,u)
u=A.dE(D.dD(t.d.h(0,"state")),v,u)
v=this.b
u.n(0,"enabled",v)
if(v)u.n(0,"brakePaused",!1)
w.n(0,"state",u)
t.d=w}},
$S:0}
D.e8r.prototype={
$0(){var w=this.a,v=w.r=!1,u=this.b,t=u==null
if(!t?J.z(J.t(u,"ok"),!0):v)w.d=A.a0(u,x.N,x.z)
else{w.d=this.c
v=t?null:J.t(u,"error")
w.w=J.k(v==null?"Could not change it right now.":v)}},
$S:0}
D.e8B.prototype={
$0(){return A.Od(this.a)},
$S:0}
D.e8C.prototype={
$0(){this.a.Br()
return null},
$S:0}
D.e7Z.prototype={
$0(){return this.a.zc(!this.b)},
$S:0}
D.e8h.prototype={
$1(d){return A.a0(d,x.N,x.z)},
$S:22}
D.e8i.prototype={
$2(d,e){var w,v=this,u=null,t=v.a.a?C.qT:C.qU
t=A.bT(3,A.p(u,u,B.f,u,u,new A.o(t,u,u,A.m(99),u,u,B.m),u,u,u,u,u,u,u,u),0,0,3)
w=B.i.D(v.b/v.c,0,1)
return new A.a4(u,14,new A.an(B.a0,u,B.ad,B.t,A.a([t,A.ao(3,A.p(u,u,B.f,u,u,new A.o(v.d,u,u,A.m(99),u,u,B.m),u,u,u,u,u,u,u,u),u,u,0,u,3,e.b*w)],x.p),u),u)},
$S:107}
D.e82.prototype={
$1(d){var w=x.g.a(this.a.h(0,d))
if(w==null)w=B.bP
w=J.cO(w,x.f)
w=A.cw(w,new D.e83(),w.$ti.k("M.E"),x.P)
w=A.B(w,A.a3(w).k("M.E"))
return w},
$S:2086}
D.e83.prototype={
$1(d){return A.a0(d,x.N,x.z)},
$S:22}
D.e8_.prototype={
$1(d){return A.v(d)},
$S:15}
D.e80.prototype={
$1(d){var w=null
return new A.D(C.bEP,A.c(d,w,w,w,w,w,w,A.l(w,w,this.a.a?C.cl:B.c,w,w,w,w,w,w,w,w,12.5,w,w,B.D,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w)},
$S:126}
D.e81.prototype={
$3$c$icon(d,e,f){var w,v=null,u=f.A(0,B.ni)?6:13,t=e==null
if(t)w=this.a.a.c==="options"?B.az:B.as
else w=e
u=A.V(f,w,v,v,v,u)
if(t)t=this.b.a?C.cl:B.c
else t=e
return new A.D(B.l6,A.A(A.a([new A.D(B.kL,u,v),I.wb,A.E(A.c(d,v,v,v,v,v,v,A.l(v,v,t,v,v,v,v,v,v,v,v,12,v,v,v,v,1.3,!0,v,v,v,v,v,v,v,v),v,v,v),1)],x.p),B.B,v,B.e,B.h,0,v,v),v)},
$1(d){return this.$3$c$icon(d,null,B.ni)},
$2$icon(d,e){return this.$3$c$icon(d,null,e)},
$2$c(d,e){return this.$3$c$icon(d,e,B.ni)},
$S:2087}
D.e8b.prototype={
$1(d){return A.a0(d,x.N,x.z)},
$S:22}
D.e8o.prototype={
$1(d){return J.z(J.t(d,"symbol"),this.a.as)},
$S:4}
D.e8p.prototype={
$0(){var w=this.a
return B.d.dr(w,new D.e8m(),new D.e8n(w))},
$S:150}
D.e8m.prototype={
$1(d){return J.z(J.t(d,"tag"),"TRADED NOW")},
$S:4}
D.e8n.prototype={
$0(){return B.d.gG(this.a)},
$S:150}
D.e88.prototype={
$1(d){return J.z(D.dD(J.t(d,"analysis")).h(0,"passes"),!0)},
$S:4}
D.e8a.prototype={
$2(d,e){return B.ar},
$S:36}
D.e89.prototype={
$2(b1,b2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=null,e="benched",d=g.b[b2],a0=J.a2(d),a1=A.v(a0.h(d,"symbol")),a2=a1===J.t(g.c,"symbol"),a3=D.c4(a0.h(d,"changePct")),a4=D.dD(a0.h(d,"record")),a5=D.dD(a0.h(d,"analysis")),a6=a0.h(d,"tag"),a7=A.v(a6==null?"":a6),a8=D.dD(a0.h(d,"today")),a9=B.i.M(D.c4(a8.h(0,"wins"))),b0=B.i.M(D.c4(a8.h(0,"losses")))
if(a7==="TRADED NOW")w=C.f8n
else if(a0.h(d,e)!=null)w=C.fbc
else{if(J.z(a5.h(0,"passes"),!0))a6=C.faW
else if(J.z(a5.h(0,"falling"),!0))a6=C.fb4
else{a6=g.d.a?C.bT:C.bV
a6=new A.y(a6,a7==="closed"?"CLOSED":"WATCHING")}w=a6}v=w.a
u=f
t=w.b
u=t
s=v
a6=g.a
r=g.d
q=r.a
p=q?B.c.j(0.92):C.i9
o=A.m(16)
if(a2)n=a6.a.c==="options"?B.az:B.as
else n=q?B.c:C.n6
n=A.K(n,B.r,a2?2:1)
if(a2)r=(a6.a.c==="options"?B.az:B.as).j(0.18)
else r=r.gI3()
r=A.a([new A.aa(0,B.H,r,B.cN,a2?12:8)],x.V)
m=D.bDY(a1,16)
l=x.p
m=A.A(A.a([m,B.e_,A.E(A.c(a1,f,1,B.a2,f,f,f,A.l(f,f,q?C.cl:B.c,f,f,f,f,f,f,f,f,11.5,f,f,B.D,f,f,!0,f,f,f,f,f,f,f,f),f,f,f),1),A.c(u,f,f,f,f,f,f,A.l(f,f,s,f,f,f,f,f,f,f,f,8.5,f,f,B.u,f,f,!0,f,f,f,f,f,f,f,f),f,f,f)],l),B.l,f,B.e,B.h,0,f,f)
k=D.eg(D.c4(a0.h(d,"price")),!0,!1)
k=A.E(new A.de(B.dp,B.a5,B.f,A.c(k,f,f,f,f,f,f,A.l(f,f,q?C.cl:B.c,f,f,f,f,f,f,f,f,14.5,f,f,B.D,f,f,!0,f,f,f,f,f,f,f,f),f,f,f),f),1)
j=a3>=0
i=j?"+":""
h=B.i.a5(a3,2)
k=A.A(A.a([k,B.da,A.c(i+h+"%",f,f,f,f,f,f,A.l(f,f,j?C.cF:C.d4,f,f,f,f,f,f,f,f,10.5,f,f,B.D,f,f,!0,f,f,f,f,f,f,f,f),f,f,f)],l),B.dt,f,B.e,B.h,0,f,f)
j=D.c4(a4.h(0,"n"))===0?"":" \xb7 last "+B.i.M(D.c4(a4.h(0,"n")))+": "+B.i.M(D.c4(a4.h(0,"wins")))+"W/"+B.i.M(D.c4(a4.h(0,"losses")))+"L"
if(a9+b0>0)i=q?C.cl:B.c
else i=q?C.bT:C.bV
i=A.c("today "+a9+"W/"+b0+"L"+j,f,1,B.a2,f,f,f,A.l(f,f,i,f,f,f,f,f,f,f,f,9.5,f,f,B.O,f,f,!0,f,f,f,f,f,f,f,f),f,f,f)
if(a0.h(d,e)!=null)j="benched for today"
else if(D.c4(a4.h(0,"n"))===0)j="no trades here yet"
else{j=D.eg(D.c4(a4.h(0,"pnl")),!0,!0)
j+=a4.h(0,"topLoss")!=null?" \xb7 most losses: "+D.hFE(A.v(a4.h(0,"topLoss"))):""}if(a0.h(d,e)!=null)a0=C.d4
else a0=q?C.bT:C.bV
return A.aA(f,A.cX(f,A.x(A.a([m,k,i,A.c(j,f,1,B.a2,f,f,f,A.l(f,f,a0,f,f,f,f,f,f,f,f,9.5,f,f,B.O,f,f,!0,f,f,f,f,f,f,f,f),f,f,f)],l),B.B,f,B.iA,B.h,0,B.p),f,f,B.aZ,new A.o(p,f,n,o,r,f,B.m),B.eI,f,f,f,f,B.iP,f,f,152),B.y,!1,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,new D.e87(a6,a1),f,f,f,f,f,f,!1,B.a4)},
$S:78}
D.e87.prototype={
$0(){var w=this.a
return w.l(new D.e86(w,this.b))},
$S:0}
D.e86.prototype={
$0(){return this.a.as=this.b},
$S:0}
D.e7X.prototype={
$1(d){return A.a0(d,x.N,x.z)},
$S:22}
D.e7Y.prototype={
$1(d){return A.a0(d,x.N,x.z)},
$S:22}
D.e8s.prototype={
$3$c(d,e,f){var w=null,v=this.a.a,u=v?C.qT:C.qU,t=A.m(12),s=A.c(d,w,1,B.a2,w,w,w,A.l(w,w,v?C.bT:C.bV,w,w,w,w,w,w,w,w,10.5,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)
if(f==null)v=v?C.cl:B.c
else v=f
return A.E(A.p(w,A.x(A.a([s,B.bt,new A.de(B.dp,B.a5,B.f,A.c(e,w,w,w,w,w,w,A.l(w,w,v,w,w,w,w,w,w,w,w,13.5,w,w,B.D,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w)],x.p),B.B,w,B.e,B.h,0,B.p),B.f,w,w,new A.o(u,w,w,t,w,w,B.m),w,w,w,w,B.iP,w,w,w),1)},
$2(d,e){return this.$3$c(d,e,null)},
$S:2088}
D.e8e.prototype={
$1(d){return A.a0(d,x.N,x.z)},
$S:22}
D.e8f.prototype={
$1(d){var w,v,u,t,s,r=null,q=this.a,p=this.b,o=x.S,n=A.U(p),m=q.Q?A.cV(p,0,A.dz(18,"count",o),n.c).df(0):A.cV(p,0,A.dz(4,"count",o),n.c).df(0),l=new D.e8g(this.c)
o=x.p
n=A.a([],o)
for(w=x.N,v=x.z,u=0;u<m.length;u+=2){t=A.a0(m[u],w,v)
t=l.$1(t)
s=u+1
if(s<m.length){s=A.a0(m[s],w,v)
s=l.$1(s)}else s=B.wc
n.push(new A.D(B.eA,new A.c2(B.aK,B.e,B.h,B.l,r,B.p,r,0,A.a([new A.bu(1,B.b8,t,r),B.ba,new A.bu(1,B.b8,s,r)],o),r),r))}p=p.length
if(p>4)n.push(new A.bK(B.a5,r,r,A.bM(!1,A.c(q.Q?"Show less":"See more ("+A.v(Math.min(p,18)-4)+")",r,r,r,r,r,r,r,r,r,r),r,r,!0,r,r,r,new D.e8d(q),r,r),r))
return A.x(n,B.B,r,B.e,B.h,0,B.p)},
$S:251}
D.e8g.prototype={
$1(d){var w,v,u,t,s,r,q="cost",p=null,o="strike",n="spreadPct"
if(d.h(0,q)!=null&&D.c4(d.h(0,q))<=150)w=C.cF
else w=this.a.a?C.bT:C.bV
w=w.j(0.12)
v=A.m(8)
u=D.c4(d.h(0,o))
u=B.i.a5(u,typeof d.h(0,o)=="number"&&B.i.F(D.c4(d.h(0,o)),1)!==0?2:0)
t=D.aQW(d.h(0,"expiry"))
s=A.ag(", \\d{4}$",!0,!1,!1,!1)
t=A.aK(t,s,"")
s=this.a.a
u=A.c("$"+u+" \xb7 "+t,p,1,B.a2,p,p,p,A.l(p,p,s?C.cl:B.c,p,p,p,p,p,p,p,p,11,p,p,B.D,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)
t=d.h(0,q)==null?"no price":D.eg(D.c4(d.h(0,q)),!0,!1)
r=d.h(0,n)==null||D.c4(d.h(0,n))>=100?"":" \xb7 spread "+B.i.a5(D.c4(d.h(0,n)),0)+"%"
return A.p(p,A.x(A.a([u,A.c(t+r,p,1,B.a2,p,p,p,A.l(p,p,s?C.bT:C.bV,p,p,p,p,p,p,p,p,10.5,p,p,B.O,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)],x.p),B.B,p,B.e,B.h,0,B.p),B.f,p,p,new A.o(w,p,p,v,p,p,B.m),p,p,p,p,B.lA,p,p,p)},
$S:2089}
D.e8d.prototype={
$0(){var w=this.a
return w.l(new D.e8c(w))},
$S:0}
D.e8c.prototype={
$0(){var w=this.a
return w.Q=!w.Q},
$S:0}
D.e8z.prototype={
$1(d){return A.a0(d,x.N,x.z)},
$S:22}
D.e8A.prototype={
$0(){var w=this.a
return w.l(new D.e8y(w))},
$S:0}
D.e8y.prototype={
$0(){var w=this.a
return w.y=!w.y},
$S:0}
D.e8x.prototype={
$0(){var w,v=this
if(v.d)w=v.e
else{w=v.f
w=A.J(["why",(w.length!==0?w+".\n\n":v.r+". ")+"Bought because: "+v.w],x.N,x.z)}return v.a.cDQ(v.b,v.c,w)},
$S:0}
D.e8u.prototype={
$1(d){return A.a0(d,x.N,x.z)},
$S:22}
D.e8w.prototype={
$1(d){var w
if(d==null)w="?"
else{w=D.c4(d)>=0?"+":""
w=w+B.i.a5(D.c4(d),2)+"%"}return w},
$S:15}
D.e8v.prototype={
$1(a1){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i="strength",h="thresholdPct",g=k.a.a,f=g?B.c.j(0.92):C.i9,e=A.c("Why this trade: "+k.b,j,j,j,j,j,j,A.l(j,j,g?C.cl:B.c,j,j,j,j,j,j,j,j,16,j,j,B.D,j,j,!0,j,j,j,j,j,j,j,j),j,j,j),d=k.c,a0=d.h(0,"why")
a0=A.v(a0==null?"":a0)
a0=A.c(a0,j,j,j,j,j,j,A.l(j,j,g?C.cl:B.c,j,j,j,j,j,j,j,j,13,j,j,j,j,1.35,!0,j,j,j,j,j,j,j,j),j,j,j)
w=d.h(0,"market")
w=A.v(w==null?"?":w)
v=D.eg(D.c4(d.h(0,"price")),!0,!1)
u=d.h(0,"trend")
u=A.v(u==null?"?":u)
t=k.d
s=A.v(t.$1(d.h(0,i)))
r=d.h(0,"score")
r=A.v(r==null?"?":r)
d=d.h(0,h)!=null?" \xb7 needed +"+B.i.a5(D.c4(d.h(0,h)),2)+"%":""
q=x.p
d=A.a([a0,B.S,A.c("Market "+w+" at "+v+" \xb7 trend "+u+" \xb7 15 min "+s+" \xb7 score "+r+d,j,j,j,j,j,j,A.l(j,j,g?C.bT:C.bV,j,j,j,j,j,j,j,j,12,j,j,j,j,1.35,!0,j,j,j,j,j,j,j,j),j,j,j)],q)
a0=k.e
if(a0.a!==0&&D.c4(a0.h(0,"n"))>0){w=B.i.M(D.c4(a0.h(0,"n")))
v=B.i.M(D.c4(a0.h(0,"wins")))
u=B.i.M(D.c4(a0.h(0,"losses")))
a0=D.eg(D.c4(a0.h(0,"pnl")),!0,!0)
d.push(A.c("Its record here before: last "+w+": "+v+"W / "+u+"L \xb7 "+a0,j,j,j,j,j,j,A.l(j,j,g?C.bT:C.bV,j,j,j,j,j,j,j,j,12,j,j,j,j,1.35,!0,j,j,j,j,j,j,j,j),j,j,j))}a0=k.f
if(a0.length!==0){w=A.a([B.S,A.c("How the markets ranked:",j,j,j,j,j,j,A.l(j,j,g?C.cl:B.c,j,j,j,j,j,j,j,j,12.5,j,j,B.D,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)],q)
for(a0=A.aol(a0,0,x.P),v=J.aQ(a0.a),a0=a0.b,u=new A.F6(v,a0);u.C();){s=u.c
s=s>=0?new A.y(a0+s,v.gP(v)):A.bi(A.fa())
p=s.b
r=J.a2(p)
o=A.v(r.h(p,"s"))
n=A.v(r.h(p,"score"))
m=A.v(t.$1(r.h(p,i)))
if(J.z(r.h(p,"passes"),!0))r="passes"
else{l=r.h(p,"why")
if(l==null){l=r.h(p,"trend")
r=l==null?r.h(p,"dir"):l
r="trend "+A.v(r==null?"?":r)}else r=l}r=A.v(r)
l=g?C.bT:C.bV
w.push(A.c(""+(s.a+1)+". "+o+" \xb7 score "+n+" \xb7 "+m+" \xb7 "+r,j,j,j,j,j,j,new A.G(!0,l,j,j,j,j,12,j,j,j,j,j,1.4,j,j,j,j,j,j,j,j,j,j,j,j,j),j,j,j))}B.d.u(d,w)}g=A.cc(A.x(d,B.B,j,B.e,B.P,0,B.p),B.t,j,B.y,j,j,j,j,j,B.ah)
return A.ek(A.a([A.bM(!1,B.ps,j,j,!0,j,j,j,new D.e8t(a1),j,j)],q),j,j,f,g,j,j,j,j,e,j)},
$S:18}
D.e8t.prototype={
$0(){return A.a7(this.a,!1).e4()},
$S:0}
D.e7W.prototype={
$0(){var w=this.a
return w.l(new D.e7V(w))},
$S:0}
D.e7V.prototype={
$0(){var w=this.a
return w.z=!w.z},
$S:0}
D.e8l.prototype={
$1(d){return A.v(d)},
$S:15}
D.dae.prototype={
$1(d){var w=this.a
if(w.c!=null)w.l(new D.dad())},
$S:10}
D.dad.prototype={
$0(){},
$S:0}
D.fI0.prototype={
$1(d){return J.k(d)},
$S:15}
D.fI1.prototype={
$2(d,e){var w=null,v=e.b,u=A.ao(w,A.p(w,w,B.f,w,w,new A.o(w,w,w,A.m(9),w,C.caH,B.m),w,6,w,w,w,w,w,w),w,w,0,0,4,w),t=B.i.D(this.a/100*v-7,0,v-14)
return new A.a4(w,14,new A.an(B.a0,w,B.ad,B.f,A.a([u,A.ao(w,A.p(w,w,B.f,w,w,new A.o(B.c,w,A.K(this.b.a?C.cl:B.c,B.r,2.5),w,w,w,B.a6),w,14,w,w,w,w,w,14),w,w,t,w,0,w)],x.p),w),w)},
$S:107}
D.fLJ.prototype={
$1(d){return A.a0(d,x.N,x.z)},
$S:22}
D.fgG.prototype={
$1(d){var w=this.a
if(w.c!=null)w.l(new D.fgF())},
$S:10}
D.fgF.prototype={
$0(){},
$S:0}
D.fgE.prototype={
$2(d,e){var w=null,v=B.c.j(0.16),u=A.m(10)
return A.E(A.p(w,A.x(A.a([A.c(d,w,w,w,w,w,w,C.fVN,w,w,w),new A.de(B.dp,B.a5,B.f,A.c(e,w,w,w,w,w,w,C.fJ1,w,w,w),w)],x.p),B.B,w,B.e,B.h,0,B.p),B.f,w,w,new A.o(v,w,w,u,w,w,B.m),w,w,w,w,B.HV,w,w,w),1)},
$S:110}
D.diC.prototype={
$1(d){var w=this.a
if(w.c!=null)w.l(new D.diB())},
$S:10}
D.diB.prototype={
$0(){},
$S:0}
D.fye.prototype={
$1(d){return J.k(d)},
$S:15}
D.eIG.prototype={
$1(d){return J.k(d)},
$S:15}
D.eJu.prototype={
$0(){return this.a.l(new D.eJt())},
$S:0}
D.eJt.prototype={
$0(){},
$S:0}
D.eJv.prototype={
$0(){return $.hmh=this.a.at.a.a},
$S:0}
D.eJw.prototype={
$1(d){var w=this.a
if(w.c!=null)w.l(new D.eJs(w,d))},
$S:205}
D.eJs.prototype={
$0(){return this.a.Q=this.b},
$S:0}
D.eJx.prototype={
$1(d){this.a.Rk()
return null},
$S:10}
D.eJp.prototype={
$1(d){var w=x.N,v=x.z
v=A.dE(A.a0(d,w,v),w,v)
v.n(0,"asset",J.t(d,"symbol"))
return v},
$S:22}
D.eJ0.prototype={
$0(){var w,v,u=this,t=u.c
if(J.z(t==null?null:J.t(t,"isAdmin"),!0))u.b.y=!0
w=u.d
if(w==null)w=u.a.a
if(w!=null){t=x.g.a(w.h(0,"done"))
if(t==null)t=A.a([],x.s)
v=x.Y.a(w.h(0,"lessons"))
u.b.x=A.J(["done",t,"lessons",v==null?A.S(x.N,x.z):v],x.N,x.z)}},
$S:0}
D.eJ9.prototype={
$0(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m
var $async$$0=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.aB(),$async$$0)
case 7:q=e
w=8
return A.b(q.aB("String","ngmy_signal_grid_academy_v2",B.V.au(r.a.x,null)),$async$$0)
case 8:t=2
w=6
break
case 4:t=3
m=s.pop()
w=6
break
case 3:w=2
break
case 6:o=r.a
if(o.a.d){w=1
break}w=9
return A.b(A.fR(A.J(["action","paLearnSave","progress",o.x],x.N,x.z),!1,!1,!1,!1,B.hb),$async$$0)
case 9:n=e
if(J.z(n==null?null:J.t(n,"allDone"),!0)){$.cnh=new A.W(A.fO(0,0),0,!1)
A.JU()}case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$$0,v)},
$S:1}
D.eIJ.prototype={
$1(d){return this.a.gK5().q(0,d.a)},
$S:z+0}
D.eIK.prototype={
$0(){var w,v=this.a,u=x.N,t=A.d5(v.gK5(),u)
t.I(0,this.b)
w=A.B(t,A.a3(t).k("ci.E"))
u=A.dE(v.x,u,x.z)
u.n(0,"done",w)
v.x=u},
$S:0}
D.eIL.prototype={
$1(d){return this.a.gK5().q(0,d.a)},
$S:z+0}
D.eIM.prototype={
$1(d){var w=null
return A.ek(A.a([A.bI(C.hf1,w,new D.eII(this.a,d),w)],x.p),w,w,w,C.hbX,w,w,w,w,C.h_7,w)},
$S:18}
D.eII.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:A.a7(u.b,!1).N(null)
w=2
return A.b(A.Mn(),$async$$0)
case 2:t=e
s=u.a
if(s.c!=null)s.l(new D.eIH(s,t))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
D.eIH.prototype={
$0(){return this.a.Q=this.b},
$S:0}
D.eJ8.prototype={
$0(){var w,v,u,t=this,s=t.b
if(s.length!==0)t.a.ay=s
s=t.c
if(s.length!==0)t.a.f=s
s=t.a
w=t.d
v=J.a2(w)
s.z=J.z(v.h(w,"alertsAllowed"),!0)
if(J.z(v.h(w,"isAdmin"),!0))s.y=!0
u=x.g.a(v.h(w,"rules"))
if(u==null)u=B.bP
u=J.b8(u,new D.eJ7(),x.N)
u=A.B(u,u.$ti.k("aj.E"))
s.dx=u
u=v.h(w,"nowEt")
s.dy=J.k(u==null?"":u)
s.fr=J.z(v.h(w,"stockOpen"),!0)
s.r=new A.W(Date.now(),0,!1)
if(x.f.b(v.h(w,"signals")))s.db=D.dD(v.h(w,"signals"))},
$S:0}
D.eJ7.prototype={
$1(d){return J.k(d)},
$S:15}
D.eJm.prototype={
$1(d){return J.z(J.t(d,"open"),!0)&&D.bFk(d).length>5},
$S:4}
D.eJn.prototype={
$2(d,e){return B.i.aQ(D.eIi(d),D.eIi(e))},
$S:40}
D.eIP.prototype={
$1(d){return J.z(J.t(d,"asset"),this.a.h(0,"symbol"))},
$S:4}
D.eIQ.prototype={
$0(){return A.S(x.N,x.z)},
$S:150}
D.eIR.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m="typicalMin",l="enterWithinMin",k=J.a2(d),j=D.dD(k.h(d,"reading")),i=D.dD(j.h(0,"timing"))
if(i.h(0,m)==null)w=""
else{v=A.v(i.h(0,"dir"))
u=A.v(i.h(0,"ageMin"))
t=A.v(i.h(0,m))
s=A.v(i.h(0,"remainingMin"))
r=A.v(i.h(0,"dir"))
q=A.v(i.h(0,"worked"))
p=A.v(i.h(0,"of"))
o=D.c4(i.h(0,l))>0?"still early (enter within "+A.v(i.h(0,l))+" min)":"too late to enter"
w=", current "+v+" move "+u+" min old, such moves usually last "+t+" min (about "+s+" min left), past "+r+" moves really went that way "+q+" of "+p+" times, "+o}v=A.v(k.h(d,"asset"))
u=A.v(k.h(d,"name"))
t=D.hKE(d)
s=B.i.a5(D.c4(k.h(d,"changePct")),2)
k=J.z(k.h(d,"open"),!0)?"open":"closed"
r=j.h(0,"bias")
r=A.v(r==null?"unknown":r)
q=B.i.a5(D.c4(j.h(0,"score")),0)
p=j.h(0,"rsi")==null?"n/a":B.i.a5(D.c4(j.h(0,"rsi")),0)
o=j.h(0,"mom1h")==null?"n/a":B.i.a5(D.c4(j.h(0,"mom1h")),2)+"%"
n=j.h(0,"action")
return"- "+v+" ("+u+"): price "+t+", change "+s+"%, "+k+", "+r+", strength "+q+", RSI "+p+", last hour "+o+", reading: "+A.v(n==null?"n/a":n)+w+"."},
$S:52}
D.eIC.prototype={
$0(){$.DB.push(new D.a_L(!0,this.b))
$.ahm=!0},
$S:0}
D.eID.prototype={
$1(d){return(d.a?"Student":"Tutor")+": "+d.b},
$S:z+6}
D.eIE.prototype={
$1(d){return"- "+A.v(d)},
$S:15}
D.eIF.prototype={
$0(){},
$S:0}
D.eJa.prototype={
$1(d){var w=this.a.ax,v=w.f
if(v.length!==0){v=B.d.gd3(v).Q
v.toString
w.m7(v+200,B.eb,B.eW)}},
$S:7}
D.eJq.prototype={
$0(){return A.Od(this.a)},
$S:0}
D.eJr.prototype={
$0(){return this.b.gLm().C7(this.a.a)},
$S:0}
D.eIO.prototype={
$1(d){return this.a.gK5().q(0,d.a)},
$S:z+0}
D.eIN.prototype={
$0(){return this.a.cm2(this.b)},
$S:0}
D.eJ6.prototype={
$1(d){var w=this.b,v=B.d.cd(C.Eh,w),u=this.a,t=u.y,s=w.a,r=u.gK5().q(0,s)
s=x.Y.a(D.dD(u.x.h(0,"lessons")).h(0,s))
if(s==null)s=B.lG
return new D.a0M(w,v+1,new D.eJ2(u,w),t,r,A.a0(s,x.N,x.z),new D.eJ3(u,w),new D.eJ4(u,w),new D.eJ5(u),null)},
$S:z+7}
D.eJ2.prototype={
$0(){var w=this.a,v=w.c
v.toString
return w.c7b(new D.Rt(A.Q(v).ax.a===B.dh),this.b.r)},
$S:130}
D.eJ3.prototype={
$1(d){var w=this.a
w.l(new D.eJ1(w,this.b,d))
w.aCW()},
$S:118}
D.eJ1.prototype={
$0(){var w=this.a,v=x.N,u=x.z,t=A.a0(D.dD(w.x.h(0,"lessons")),v,u)
t.n(0,this.b.a,this.c)
u=A.dE(w.x,v,u)
u.n(0,"lessons",t)
w.x=u},
$S:0}
D.eJ4.prototype={
$0(){return this.a.aek(this.b.a)},
$S:0}
D.eJ5.prototype={
$1(d){var w=this.a,v=w.c
v.toString
A.a7(v,!1).e4()
w.aR9(d)},
$S:2}
D.eIS.prototype={
$2$last$lines(d,e){var w=this.a
return new D.a_F(B.d.fB(w,Math.max(0,w.length-d)),this.b,null,e,this.c,C.dtS,null)},
$0(){return this.$2$last$lines(36,!0)},
$1$lines(d){return this.$2$last$lines(36,d)},
$S:2090}
D.eJ_.prototype={
$1(d){var w=null
return A.c(d,w,w,w,w,w,w,A.l(w,w,this.a.a?C.cl:B.c,w,w,w,w,w,w,w,w,13,w,w,w,w,1.4,!0,w,w,w,w,w,w,w,w),w,w,w)},
$S:2091}
D.eIT.prototype={
$1(d){var w=J.a2(d)
return J.z(D.dD(w.h(d,"reading")).h(0,"decision"),"ENTER")&&J.z(D.dD(w.h(d,"reading")).h(0,"dir"),"up")},
$S:4}
D.eIU.prototype={
$1(d){return J.t(d,"asset")},
$S:604}
D.eIV.prototype={
$1(d){var w=J.a2(d)
return J.z(D.dD(w.h(d,"reading")).h(0,"decision"),"ENTER")&&J.z(D.dD(w.h(d,"reading")).h(0,"dir"),"down")},
$S:4}
D.eIW.prototype={
$1(d){return J.t(d,"asset")},
$S:604}
D.eIX.prototype={
$1(d){var w=J.a2(d)
return J.z(w.h(d,"open"),!0)&&D.dD(w.h(d,"reading")).h(0,"rsi")!=null},
$S:4}
D.eIY.prototype={
$1(d){return J.z(J.t(d,"open"),!0)},
$S:4}
D.eIZ.prototype={
$1(d){var w=D.dD(D.dD(J.t(d,"reading")).h(0,"timing"))
return D.c4(w.h(0,"of"))>=3&&D.c4(w.h(0,"worked"))/D.c4(w.h(0,"of"))>=0.5},
$S:4}
D.eJf.prototype={
$1(d){var w,v,u,t=this.a
if(t.cx!=="All"&&D.hFF(d)!==t.cx)return!1
t=this.b
if(t.length===0)return!0
w=J.a2(d)
v=A.v(w.h(d,"asset"))
u=A.v(w.h(d,"name"))
w=w.h(d,"asset")
w=J.k(w==null?"":w)
return B.a.q((v+" "+u+" "+A.aK(w,"/","")).toLowerCase(),t)},
$S:4}
D.eJg.prototype={
$2(d,e){var w="activeSignal",v=J.a2(d),u=x.f,t=u.b(v.h(d,w))?0:1,s=J.a2(e),r=u.b(s.h(e,w))?0:1
if(t!==r)return t-r
return B.i.aQ(D.c4(D.dD(s.h(e,"v2")).h(0,"passed")),D.c4(D.dD(v.h(d,"v2")).h(0,"passed")))},
$S:40}
D.eJi.prototype={
$0(){var w=this.a
return w.l(new D.eJe(w,this.b))},
$S:0}
D.eJe.prototype={
$0(){return this.a.cx=this.b},
$S:0}
D.eJh.prototype={
$1(d){return D.hFF(d)===this.a},
$S:4}
D.eJj.prototype={
$0(){var w=this.a
w.l(new D.eJd(w))},
$S:0}
D.eJd.prototype={
$0(){var w=this.a,v=w.CW
w.CW=!v
if(v){w.ch=""
w.cy.bM(0,B.ck)}},
$S:0}
D.eJk.prototype={
$1(d){var w=this.a
return w.l(new D.eJc(w,d))},
$S:2}
D.eJc.prototype={
$0(){return this.a.ch=this.b},
$S:0}
D.eJl.prototype={
$0(){return this.a.aR9("What is happening with "+A.v(J.t(this.b,"asset"))+" right now? Which of the 5 confirmations are missing, and why is the answer BUY, SELL or WAIT?")},
$S:0}
D.eJb.prototype={
$1(d){return A.a0(d,x.N,x.z)},
$S:22}
D.eIy.prototype={
$1(d){return this.a.gK5().q(0,d.a)},
$S:z+0}
D.eIz.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=!u.b?2:4
break
case 2:u.a.gLm().C7(0)
w=3
break
case 4:w=5
return A.b(A.Mn(),$async$$0)
case 5:t=e
s=u.a
if(s.c!=null)s.l(new D.eIx(s,t))
$.cnh=new A.W(A.fO(0,0),0,!1)
A.JU()
case 3:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
D.eIx.prototype={
$0(){return this.a.Q=this.b},
$S:0}
D.eIA.prototype={
$0(){return this.a.K4(this.b)},
$S:0}
D.eIB.prototype={
$0(){var w=this.a
return w.K4(w.at.a.a)},
$S:0}
D.dvb.prototype={
$1(d){var w
x.g.a(d)
w=d==null?B.bP:d
w=J.b8(w,new D.dvc(),x.S)
w=A.B(w,w.$ti.k("aj.E"))
return w},
$S:423}
D.dvc.prototype={
$1(d){var w=A.ca(A.v(d),null)
return w==null?0:w},
$S:343}
D.dv9.prototype={
$1(d){var w,v
x.Y.a(d)
w=d==null?B.lG:d
v=x.S
return J.oS(w,new D.dva(),v,v)},
$S:2093}
D.dva.prototype={
$2(d,e){var w,v=A.ca(A.v(d),null)
if(v==null)v=0
w=A.ca(A.v(e),null)
if(w==null)w=0
return new A.bv(v,w,x.a)},
$S:2094}
D.dv7.prototype={
$1(d){var w
if(d>=0){w=this.a.d
w===$&&A.d()
w=d<w.length}else w=!1
return w},
$S:28}
D.dv8.prototype={
$1(d){var w,v=this.a
if(v.c==null)return
w=v.w
w===$&&A.d()
if(w.a!==0)v.l(new D.dv6(v))},
$S:10}
D.dv6.prototype={
$0(){return this.a.cGC()},
$S:0}
D.dv_.prototype={
$2(d,e){return new A.bv(""+d,e,x.W)},
$S:603}
D.dv0.prototype={
$2(d,e){return new A.bv(""+d,e,x.W)},
$S:603}
D.dv1.prototype={
$1(d){var w=this.a,v=w.x
v===$&&A.d()
if(!B.d.q(v,d)){w=w.e
w===$&&A.d()
w=!B.d.q(w,d)}else w=!1
return w},
$S:28}
D.dv2.prototype={
$1(d){var w=this.a,v=w.e
v===$&&A.d()
if(!B.d.q(v,d)){w=w.f
w===$&&A.d()
w=!w.q(0,d)}else w=!1
return w},
$S:28}
D.duY.prototype={
$0(){var w,v,u,t=this.b,s=this.a,r=s.d
r===$&&A.d()
w=this.c
v=s.y
if(t===r[w].c){t=s.f
t===$&&A.d()
t.I(0,w)
v.X(0,w)}else{v.n(0,w,t)
t=s.r
t===$&&A.d()
t=t.h(0,w)
u=(t==null?0:t)+1
s.r.n(0,w,u)
if(!s.a.f&&u>=2){t=s.w
t===$&&A.d()
t.n(0,w,new A.W(Date.now(),0,!1).bL(3e8).a)}}},
$S:0}
D.dv3.prototype={
$0(){return A.Od(this.a)},
$S:0}
D.dv4.prototype={
$0(){return this.a.a.d_K('I just read the lesson "'+this.b.b+'". Can you explain it again with a live example from the markets right now?')},
$S:0}
D.dv5.prototype={
$0(){this.a.a.ro()
A.Od(this.b)},
$S:0}
D.duZ.prototype={
$0(){return this.a.cgB(this.b,this.c)},
$S:0};(function aliases(){var w=D.aPu.prototype
w.bBL=w.t})();(function installTearOffs(){var w=a._instance_0u,v=a._instance_1u
var u
w(u=D.aHv.prototype,"gcm0","cm1",2)
w(u,"gczv","a3s",1)
w(D.aGs.prototype,"gcgE","Br",1)
w(u=D.aHw.prototype,"gcgD","Rk",1)
v(u,"gcgC","K4",5)})();(function inheritance(){var w=a.mixinHard,v=a.inheritMany,u=a.inherit
v(A.af,[D.au3,D.a_F,D.ON,D.aBm,D.aKB,D.aCF,D.XN,D.a0M])
v(A.ah,[D.aHv,D.beD,D.aGs,D.bfj,D.bvW,D.bia,D.aPu,D.bll])
v(A.hg,[D.eIv,D.eIw,D.eI2,D.eHL,D.eId,D.eHV,D.eI9,D.eHz,D.eHA,D.eHB,D.eHx,D.eHD,D.eIl,D.eIm,D.eIn,D.eIo,D.eIh,D.eIj,D.eHQ,D.eHS,D.eHJ,D.eHv,D.eHX,D.eHY,D.eHZ,D.eHW,D.eI0,D.eIs,D.fLi,D.cXn,D.cXl,D.cXm,D.cXk,D.cXo,D.cXq,D.cXs,D.fiQ,D.fxp,D.fCP,D.fH9,D.fDV,D.fLc,D.e8D,D.e84,D.e8j,D.e8h,D.e82,D.e83,D.e8_,D.e80,D.e81,D.e8b,D.e8o,D.e8m,D.e88,D.e7X,D.e7Y,D.e8s,D.e8e,D.e8f,D.e8g,D.e8z,D.e8u,D.e8w,D.e8v,D.e8l,D.dae,D.fI0,D.fLJ,D.fgG,D.diC,D.fye,D.eIG,D.eJw,D.eJx,D.eJp,D.eIJ,D.eIL,D.eIM,D.eJ7,D.eJm,D.eIP,D.eIR,D.eID,D.eIE,D.eJa,D.eIO,D.eJ6,D.eJ3,D.eJ5,D.eIS,D.eJ_,D.eIT,D.eIU,D.eIV,D.eIW,D.eIX,D.eIY,D.eIZ,D.eJf,D.eJh,D.eJk,D.eJb,D.eIy,D.dvb,D.dvc,D.dv9,D.dv7,D.dv8,D.dv1,D.dv2])
v(A.iI,[D.eHM,D.eHO,D.eI1,D.eI4,D.eI5,D.eHN,D.eIb,D.eIc,D.eIe,D.eIf,D.eI7,D.eI8,D.eIu,D.eIp,D.eIq,D.eHC,D.eHy,D.eHE,D.eIg,D.eIk,D.eHR,D.eHP,D.eHH,D.eHG,D.eHI,D.eHF,D.eHw,D.eHK,D.eIt,D.eIr,D.eHt,D.eHs,D.cXg,D.cXj,D.cXi,D.cXh,D.e85,D.e8k,D.e8q,D.e8r,D.e8B,D.e8C,D.e7Z,D.e8p,D.e8n,D.e87,D.e86,D.e8d,D.e8c,D.e8A,D.e8y,D.e8x,D.e8t,D.e7W,D.e7V,D.dad,D.fgF,D.diB,D.eJu,D.eJt,D.eJv,D.eJs,D.eJ0,D.eJ9,D.eIK,D.eII,D.eIH,D.eJ8,D.eIQ,D.eIC,D.eIF,D.eJq,D.eJr,D.eIN,D.eJ2,D.eJ1,D.eJ4,D.eJi,D.eJe,D.eJj,D.eJd,D.eJc,D.eJl,D.eIz,D.eIx,D.eIA,D.eIB,D.dv6,D.duY,D.dv3,D.dv4,D.dv5,D.duZ])
v(A.iJ,[D.eI6,D.eIa,D.eHU,D.eHT,D.eI_,D.eI3,D.eHu,D.cXp,D.cXr,D.e8i,D.e8a,D.e89,D.fI1,D.fgE,D.eJn,D.eJg,D.dva,D.dv_,D.dv0])
v(A.aE,[D.QY,D.z2,D.Rt,D.cG,D.uw,D.a_L])
v(A.lK,[D.beE,D.bwA])
u(D.aHw,D.aPu)
w(D.aPu,A.cj)})()
A.j3(b.typeUniverse,JSON.parse('{"au3":{"af":[],"w":[]},"a_F":{"af":[],"w":[]},"aBm":{"af":[],"w":[]},"aKB":{"af":[],"w":[]},"aCF":{"af":[],"w":[]},"XN":{"af":[],"w":[]},"a0M":{"af":[],"w":[]},"aHv":{"ah":["au3"]},"beD":{"ah":["a_F"]},"beE":{"aC":[]},"bwA":{"aC":[]},"ON":{"af":[],"w":[]},"aGs":{"ah":["ON"]},"bfj":{"ah":["aBm"]},"bvW":{"ah":["aKB"]},"bia":{"ah":["aCF"]},"aHw":{"ah":["XN"]},"bll":{"ah":["a0M"]}}'))
var y={g:". Look over the trades, then press Start to turn it back on.",b:"The chart appears after the first reading."}
var x=(function rtii(){var w=A.as
return{c:w("l7<u?>"),D:w("EE"),V:w("N<aa>"),O:w("N<u>"),o:w("N<ay<a9<n,@>?>>"),R:w("N<mE>"),t:w("N<a9<n,@>>"),v:w("N<fZ>"),L:w("N<+(n,n)>"),T:w("N<+(F,QY)>"),s:w("N<n>"),p:w("N<w>"),n:w("N<QY>"),r:w("N<cG>"),u:w("N<H>"),X:w("N<F>"),w:w("N<W?>"),W:w("bv<n,F>"),a:w("bv<F,F>"),P:w("a9<n,@>"),f:w("a9<@,@>"),b:w("cp"),K:w("aE"),N:w("n"),E:w("X<uw>"),q:w("l_"),y:w("P"),z:w("@"),S:w("F"),i:w("ai<a9<n,@>>?"),g:w("ai<@>?"),h:w("a9<n,@>?"),Y:w("a9<@,@>?"),H:w("~")}})();(function constants(){var w=a.makeConstList
C.cF=new A.u(1,0.12156862745098039,0.7490196078431373,0.592156862745098,B.q)
C.b5x=new A.l7(C.cF,x.c)
C.i9=new A.u(1,0.08627450980392157,0.10588235294117647,0.1803921568627451,B.q)
C.bT=new A.u(1,0.5411764705882353,0.5607843137254902,0.6392156862745098,B.q)
C.t4=new A.u(1,0.0392156862745098,0.050980392156862744,0.09411764705882353,B.q)
C.t6=new A.u(1,0.9294117647058824,0.9372549019607843,0.9803921568627451,B.q)
C.bV=new A.u(1,0.5529411764705883,0.5843137254901961,0.6705882352941176,B.q)
C.mZ=new A.u(1,0.08627450980392157,0.09019607843137255,0.11372549019607843,B.q)
C.oG=new A.u(1,0.14901960784313725,0.17647058823529413,0.27058823529411763,B.q)
C.oL=new A.u(1,0.9058823529411765,0.9098039215686274,0.9411764705882353,B.q)
C.NX=new A.u(1,0.06666666666666667,0.08235294117647059,0.1607843137254902,B.q)
C.O0=new A.u(1,0.12549019607843137,0.14901960784313725,0.23137254901960785,B.q)
C.O3=new A.u(1,0.9725490196078431,0.9450980392156862,0.9490196078431372,B.q)
C.n6=new A.u(1,0.13725490196078433,0.16470588235294117,0.25882352941176473,B.q)
C.Oa=new A.u(1,0.9372549019607843,0.9411764705882353,0.9607843137254902,B.q)
C.cl=new A.u(1,0.07058823529411765,0.0784313725490196,0.10980392156862745,B.q)
C.d4=new A.u(1,0.9411764705882353,0.33725490196078434,0.41568627450980394,B.q)
C.qT=new A.u(1,0.9568627450980393,0.9607843137254902,0.9803921568627451,B.q)
C.qU=new A.u(1,0.11372549019607843,0.13725490196078433,0.2196078431372549,B.q)
C.bEG=new A.R(0,0,0,7)
C.bEP=new A.R(0,10,0,4)
C.bF7=new A.R(0,4,0,12)
C.bGk=new A.R(12,8,12,6)
C.bGu=new A.R(13,7,13,7)
C.bHj=new A.R(16,10,16,30)
C.aob=new A.R(16,4,16,40)
C.bHH=new A.R(16,6,16,16)
C.aog=new A.R(16,6,16,40)
C.bHP=new A.R(16,8,16,40)
C.bKy=new A.R(4,0,4,10)
C.aoZ=new A.R(4,0,4,8)
C.bVw=new A.a_(983124,"MaterialIcons",!1)
C.bVV=new A.a_(983325,"MaterialIcons",!1)
C.asn=new A.a_(983372,"MaterialIcons",!1)
C.bXv=new A.ae(C.asn,18,C.cF,null,null,null)
C.bXX=new A.ae(B.xm,16,null,null,null,null)
C.c00=new A.ae(B.ni,7,C.cF,null,null,null)
C.c0I=new A.ae(B.ea,18,C.cF,null,null,null)
C.c0Y=new A.ae(B.rm,20,B.c,null,null,null)
C.c3b=new A.ae(B.xm,18,null,null,null,null)
C.c5e=new A.ae(B.IG,18,null,null,null,null)
C.c5i=new A.ae(B.xp,null,C.d4,null,null,null)
C.c5r=new A.ae(B.ko,18,C.cF,null,null,null)
C.c6H=new A.ae(B.Ik,18,C.d4,null,null,null)
C.cO2=w([B.dD,B.fy,B.is],x.O)
C.av0=new A.a8(B.ay,B.aD,B.x,C.cO2,null,null)
C.aCQ=w([C.d4,B.as,C.cF],x.O)
C.caH=new A.a8(B.a5,B.a9,B.x,C.aCQ,null,null)
C.cbg=new A.a8(B.a5,B.a9,B.x,C.aCQ,B.m6,null)
C.dr_=w([B.dD,B.is,B.bC],x.O)
C.cek=new A.a8(B.ay,B.aD,B.x,C.dr_,null,null)
C.coc=w([12,24,48],x.X)
C.d6p=w(["All","Forex","Stocks","Crypto"],x.s)
C.dcH=w(["Which market looks strongest right now?","Is Bitcoin going up or down right now?","Why has the agent not bought yet?","Explain RSI like I am new","How do I know when to sell?","What does bullish and bearish mean?"],x.s)
C.fbG=new A.y("The idea","Trading means buying something and selling it later. You make money when you sell for more than you paid, and you lose money when you sell for less. That is all a trade is.")
C.f3f=new A.y("Why prices move","Every price is set by buyers and sellers. When more people want to buy than sell, the price goes up. When more want to sell, it goes down. A chart is simply a picture of that tug of war over time.")
C.f4c=new A.y("Nobody knows the future","No person, app or AI can know for sure where a price goes next. Good traders do not guess. They follow clear rules, keep losses small, and let the winners pay for the losers.")
C.f2A=new A.y("Why practise first","This agent uses Alpaca paper money: real prices, fake dollars. You can learn every step, make mistakes and see real results without risking a cent. Professionals practise this way too.")
C.d8Q=w([C.fbG,C.f3f,C.f4c,C.f2A],x.L)
C.daW=w(["When you buy","When you sell for more than you paid","When the market opens"],x.s)
C.b3x=new D.cG("When do you make money on a trade?",C.daW,1,"Profit only exists after you sell higher than you bought.")
C.d5e=w(["More buyers than sellers","The app","The time of day"],x.s)
C.b3s=new D.cG("What makes a price go up?",C.d5e,0,"More people wanting to buy pushes the price up.")
C.dz7=w([C.b3x,C.b3s],x.r)
C.hRK=new D.uw("basics","What trading really is","Buyers, sellers and why prices move",4,P.la,B.as,"basics",C.d8Q,C.dz7)
C.bWy=new A.a_(983780,"MaterialIcons",!1)
C.eUV=new A.y("One candle = one time slice","On this chart every candle is 5 minutes. It shows four prices: where it started (open), where it ended (close), the highest point (high) and the lowest point (low).")
C.f1A=new A.y("The colours","Green candle: the price closed HIGHER than it opened, buyers won those 5 minutes. Yellow candle: it closed LOWER, sellers won. Many apps use red instead of yellow, it means the same thing.")
C.fcT=new A.y("Body and wicks","The thick part (the body) runs from open to close. The thin lines (the wicks) show how far the price went up or down before coming back. A long wick on top means buyers pushed up but sellers pushed it back down.")
C.f9V=new A.y("Reading a row of candles","Several green candles in a row, each closing higher, show buyers in control. Many yellow ones closing lower show sellers in control. Candles that go up and down with no direction mean the market is undecided.")
C.cfN=w([C.eUV,C.f1A,C.fcT,C.f9V],x.L)
C.db2=w(["It closed higher than it opened","It is a good time to buy","The market is closed"],x.s)
C.b3v=new D.cG("A green candle means...",C.db2,0,"Colour only tells you if it closed above or below where it opened.")
C.cGI=w(["1 day","5 minutes","1 hour"],x.s)
C.b3k=new D.cG("On this chart one candle covers...",C.cGI,1,"The agent works with 5-minute candles.")
C.dhm=w([C.b3v,C.b3k],x.r)
C.hRM=new D.uw("candles","Reading candles","Open, close, high and low in one shape",5,C.bWy,C.cF,"candles",C.cfN,C.dhm)
C.f5i=new A.y("Bullish","An uptrend. The price makes higher highs and higher lows, like climbing stairs. Buyers are in control. Traders call this bullish (a bull attacks upward with its horns).")
C.fdO=new A.y("Bearish","A downtrend. Lower highs and lower lows, like walking down stairs. Sellers are in control. This is bearish (a bear swipes downward).")
C.eWb=new A.y("Sideways","The price bounces between a ceiling and a floor with no clear direction. Most trading signals fail here, so the best move is often to wait.")
C.f83=new A.y("The golden rule","Trade WITH the trend, not against it. Buying in a downtrend because it looks cheap is how most beginners lose. The agent only buys when the trend turns up.")
C.d95=w([C.f5i,C.fdO,C.eWb,C.f83],x.L)
C.d78=w(["Bearish","Bullish","Sideways"],x.s)
C.b3w=new D.cG("Higher highs and higher lows means...",C.d78,1,"Climbing stairs = uptrend = bullish.")
C.dbd=w(["Work best","Often fail","Are always right"],x.s)
C.b3p=new D.cG("In a sideways market, signals...",C.dbd,1,"With no direction, signals flip back and forth.")
C.dzE=w([C.b3w,C.b3p],x.r)
C.hRF=new D.uw("trend","Trends: up, down, sideways","Bullish, bearish and how to tell",5,B.mx,B.ch,"trend",C.d95,C.dzE)
C.feP=new A.y("What an average line is","A moving average is the average closing price of the last few candles, drawn as a smooth line. It hides the small wiggles so you can see the real direction.")
C.eU4=new A.y("Fast line (pink)","The average of the last 9 candles, about 45 minutes. It reacts quickly to new moves.")
C.eVH=new A.y("Slow line (purple)","The average of the last 21 candles, about 1 hour 45 minutes. It moves slowly and shows the bigger direction.")
C.f6k=new A.y("How to read them","Fast line ABOVE slow line: recent prices are higher than older ones, the trend is up. Fast line BELOW: the trend is down. When the price itself is above both lines, buyers are strong.")
C.dsU=w([C.feP,C.eU4,C.eVH,C.f6k],x.L)
C.dIB=w(["45 minutes","1 day","1 week"],x.s)
C.b3y=new D.cG("The pink fast line averages about...",C.dIB,0,"9 candles x 5 minutes = 45 minutes.")
C.dE5=w(["Trend is up","Trend is down","Market closed"],x.s)
C.b3r=new D.cG("Fast line above slow line means...",C.dE5,0,"Recent prices are higher than older prices.")
C.doE=w([C.b3y,C.b3r],x.r)
C.hRG=new D.uw("ma","Moving averages","The pink fast line and the purple slow line",6,B.xu,B.bC,"ma",C.dsU,C.doE)
C.fb2=new A.y("Buy signal","When the fast line crosses UP through the slow line, the short-term trend has just turned up. That moment is the buy signal. The agent buys at that point ($100 of the stock or coin), but only if the big trend is rising too. It watches the 10 stocks on weekdays and the 15 liquid crypto majors around the clock, all at the same time, and buys whichever gives a valid entry first.")
C.f3o=new A.y("Sell signal","When the fast line crosses back DOWN through the slow line, the up move is over. That is the sell signal, and the agent closes the trade.")
C.f8e=new A.y("Why it must be fresh","If the cross happened an hour ago, the easy part of the move may be gone. Buying late means buying high. So the agent only acts on a cross that happened since its last check, never on an old one.")
C.fad=new A.y("The weakness","In sideways markets the lines cross back and forth and give false signals. That is why every trade also has a stop loss: when a signal is wrong, the loss stays small.")
C.dk1=w([C.fb2,C.f3o,C.f8e,C.fad],x.L)
C.dv8=w(["Crosses above the slow line","Crosses below the slow line","Is flat"],x.s)
C.b3q=new D.cG("The buy signal is when the fast line...",C.dv8,0,"Crossing up = trend turning up.")
C.dHw=w(["To avoid buying late","The app is slow","Old crosses are illegal"],x.s)
C.b3i=new D.cG("Why does the agent skip old crosses?",C.dHw,0,"A late entry means buying after most of the move.")
C.d5l=w([C.b3q,C.b3i],x.r)
C.hRD=new D.uw("cross","The crossover signal","Exactly when the agent buys and sells",6,B.aru,B.b_,"cross",C.dk1,C.d5l)
C.bW3=new A.a_(983477,"MaterialIcons",!1)
C.f7N=new A.y("What RSI measures","RSI (Relative Strength Index) compares the size of recent rises with recent falls and gives a number from 0 to 100. Above 50, rises have been bigger. Below 50, falls have been bigger.")
C.eXU=new A.y("Above 70: stretched","The price rose very fast. It is called overbought. It often pauses or pulls back, so buying right then is risky. It can still keep rising in a strong trend.")
C.f7U=new A.y("Below 30: oversold","The price fell very fast. It often bounces, but in a strong downtrend it can stay low. Oversold is not a reason to buy on its own.")
C.f72=new A.y("How to use it","Use RSI as a second opinion. A buy signal with RSI between 50 and 70 is healthy. A buy signal with RSI above 75 means the move may already be tired.")
C.d5K=w([C.f7N,C.eXU,C.f7U,C.f72],x.L)
C.dhd=w(["Oversold","Overbought","Neutral"],x.s)
C.b3h=new D.cG("RSI above 70 is called...",C.dhd,1,"It rose fast and is stretched.")
C.b3u=new D.cG("RSI below 30 always means buy.",M.Tj,1,"Falling markets can stay oversold. It is a hint, not a signal.")
C.dIt=w([C.b3h,C.b3u],x.r)
C.hRL=new D.uw("rsi","RSI: momentum","Is the move strong, stretched or tired?",5,C.bW3,B.cG,"rsi",C.d5K,C.dIt)
C.eZk=new A.y("Decide the exit before you enter","Every agent trade has two exits set before it starts, in dollars: take profit when the trade is up $50, stop loss when it is down $50.")
C.f1u=new A.y("Win the same as you risk","The win (+$50) is the same size as the loss (-$50). So every win cancels one loss: winning 5 out of 10 trades breaks even. More than 5 out of 10 is profit, fewer is a loss. The win rate on the agent screen shows which side it is on.")
C.eP0=new A.y("Size matters most","The agent uses $100 per trade even though the paper account has $100,000. Small trades mean no single mistake can hurt much. Pros rarely risk more than 1 to 2 percent of their money on one trade.")
C.f4E=new A.y("Never move the stop","The biggest beginner mistake is hoping a losing trade comes back and moving the stop lower. Small losses are the cost of doing business. Big losses end accounts.")
C.dCv=w([C.eZk,C.f1u,C.eP0,C.f4E],x.L)
C.csM=w(["5 in 10 trades","9 in 10 trades","Every trade"],x.s)
C.b3n=new D.cG("With +$50 wins and -$50 losses, to break even you must win about...",C.csM,0,"Each win (+50) cancels one loss (-50).")
C.dfL=w(["Move the stop lower","Let the stop loss work","Buy more"],x.s)
C.b3l=new D.cG("A trade is losing. The best move is...",C.dfL,1,"The stop exists to keep losses small.")
C.dlv=w([C.b3n,C.b3l],x.r)
C.hRE=new D.uw("risk","Risk: stop loss and take profit","Why small losses beat big wins",7,B.rn,C.d4,"risk",C.dCv,C.dlv)
C.bWE=new A.a_(983848,"MaterialIcons",!1)
C.eYv=new A.y("Bad days happen","Some days every signal fails. The danger is trying to win it back by trading more and bigger. That is called revenge trading and it is how small losses become big ones.")
C.f3J=new A.y("Daily stop: $50","If the day loses $50, the agent makes no more buys until tomorrow. It walks away and lets the market calm down.")
C.faU=new A.y("Total brake: $100","If total losses reach $100, the agent pauses completely until you review what happened and turn it back on. Reviewing is the most important part of learning.")
C.eWT=new A.y("Your own rules","When you trade yourself, set the same kind of limits before the day starts, and keep them even when it hurts.")
C.dhF=w([C.eYv,C.f3J,C.faU,C.eWT],x.L)
C.dkr=w(["Doubles the next trade","Stops buying for the day","Sells everything forever"],x.s)
C.b3m=new D.cG("After losing $50 in a day, the agent...",C.dkr,1,"The daily stop prevents revenge trading.")
C.dhn=w([C.b3m],x.r)
C.hRH=new D.uw("brakes","Daily stop and total brake","Protecting your account from bad days",4,C.bWE,E.i1,"brakes",C.dhF,C.dhn)
C.aj9=new A.u(1,0.3843137254901961,0.49411764705882355,0.9176470588235294,B.q)
C.f2s=new A.y("Stocks and funds","SPY, QQQ, Apple, Microsoft, Nvidia, Tesla and Amazon trade on US market days from 9:30 AM to 4:00 PM Eastern Time. Closed at night, on weekends and on holidays.")
C.f3l=new A.y("Overnight gaps","News can come out while the stock market is closed, so the next morning it can open far higher or lower. That is why the agent sells stocks by 3:55 PM and never holds them overnight.")
C.f0p=new A.y("Crypto","Bitcoin, Ethereum and Solana trade all day, every day, including weekends. More hours means more chances, but crypto also moves faster and harder, so stops get hit more often.")
C.f9G=new A.y("Funds vs single companies","SPY holds the 500 biggest US companies and QQQ holds 100 big tech companies, so they move more calmly. One company like Tesla can jump a lot on its own news.")
C.cTt=w([C.f2s,C.f3l,C.f0p,C.f9G],x.L)
C.d94=w(["Only weekdays","All day, every day","Only at night"],x.s)
C.b3t=new D.cG("When can Bitcoin be traded?",C.d94,1,"Crypto never closes.")
C.d5Z=w(["To avoid overnight gaps","Stocks expire","It is the law"],x.s)
C.b3j=new D.cG("Why sell stocks before the close?",C.d5Z,0,"Overnight news can make the price jump at the open.")
C.dpG=w([C.b3t,C.b3j],x.r)
C.hRJ=new D.uw("hours","Stocks vs crypto","Market hours, weekends and jumpiness",5,B.jZ,C.aj9,"hours",C.cTt,C.dpG)
C.f8f=new A.y("Judge many trades, not one","One trade tells you nothing. Luck decides single trades. After 20 to 50 trades you start to see if a method really works. That is why the plan is 2 to 4 weeks of paper trading.")
C.eXF=new A.y("Keep a journal","For each trade write: why you bought, where your stop and target were, what happened, and what you learned. The Trades list on the main screen is the agent's journal.")
C.eTY=new A.y("Follow the rules exactly","The point of the agent is to follow rules perfectly, with no fear and no greed. Check that it did. If it ever breaks a rule, that is a bug to fix before real money.")
C.f0q=new A.y("Before real money","Real money comes only after a long paper test with a positive result, a full review, and money you can truly afford to lose. Never borrow to trade.")
C.dxZ=w([C.f8f,C.eXF,C.eTY,C.f0q],x.L)
C.dF0=w(["1","3","20 or more"],x.s)
C.b3g=new D.cG("How many trades before judging a method?",C.dF0,2,"Small samples are mostly luck.")
C.dI0=w(["Borrowed","Money you can afford to lose","Rent money"],x.s)
C.b3o=new D.cG("Money for trading should be...",C.dI0,1,"Never trade money you need.")
C.dIo=w([C.b3g,C.b3o],x.r)
C.hRI=new D.uw("practice","Practising like a pro","Journals, patience and judging results",5,B.m1,B.bj,"practice",C.dxZ,C.dIo)
C.Eh=w([C.hRK,C.hRM,C.hRF,C.hRG,C.hRD,C.hRL,C.hRE,C.hRH,C.hRJ,C.hRI],A.as("N<uw>"))
C.dtS=w([],x.n)
C.exX={basics:0,candles:1,trend:2,ma:3,cross:4,rsi:5,risk:6,brakes:7,hours:8,practice:9}
C.dbQ=w(["A $4 profit","A $4 loss","Nothing"],x.s)
C.hVJ=new D.cG("You buy at $100 and sell at $96. What happened?",C.dbQ,1,"Selling lower than you bought is a loss.")
C.dv6=w(["The future price","How the price moved over time","Who is buying"],x.s)
C.hVH=new D.cG("What does a price chart show?",C.dv6,1,"A chart is a record of past prices.")
C.dGG=w(["Yes, experts can","Yes, an AI can","No, nobody can"],x.s)
C.hVP=new D.cG("Can anyone know for sure where a price goes next?",C.dGG,2,"Markets are uncertain; rules and stops manage that.")
C.dFp=w(["Trading with real prices and practice money","Trading newspapers","Trading on paper forms"],x.s)
C.hXw=new D.cG("What is paper trading?",C.dFp,0,"Real prices, fake dollars: practice without risk.")
C.dtq=w(["It is faster","To learn without risking real money","Practice money earns more"],x.s)
C.hXr=new D.cG("Why practise first?",C.dtq,1,"Mistakes cost nothing while you learn.")
C.csG=w(["Rise","Fall","Stay frozen"],x.s)
C.hVQ=new D.cG("More people want to sell than buy. The price will most likely...",C.csG,1,"Selling pressure pushes prices down.")
C.dh1=w(["Clear rules and small losses","Lucky guesses","Tips from friends"],x.s)
C.hXj=new D.cG("Good traders mostly rely on...",C.dh1,0,"Rules and risk control beat guessing.")
C.ceP=w(["$45","$55","$60"],x.s)
C.hWL=new D.cG("You buy $50 of something and it rises 10%. It is now worth...",C.ceP,1,"10% of $50 is $5, so $55.")
C.cYc=w(["Buy","Sell","Look at the chart"],x.s)
C.hW6=new D.cG("A trade is only finished when you...",C.cYc,1,"Until you sell, a gain or loss is not locked in.")
C.dFU=w(["Good traders never lose","Every trader has losing trades","Losses only happen to beginners"],x.s)
C.hW1=new D.cG("Which is true about losses?",C.dFU,1,"Losing trades are normal; keeping them small is the skill.")
C.cR3=w(["Real dollars are spent","No real money is at risk","It trades in secret"],x.s)
C.hWT=new D.cG("The agent uses Alpaca paper money. That means...",C.cR3,1,"Paper accounts use fake dollars.")
C.dqJ=w(["The government","Buyers and sellers agreeing","The app makers"],x.s)
C.hVG=new D.cG("A price is set by...",C.dqJ,1,"Each trade is a buyer and seller agreeing on a price.")
C.dBA=w([C.b3x,C.b3s,C.hVJ,C.hVH,C.hVP,C.hXw,C.hXr,C.hVQ,C.hXj,C.hWL,C.hW6,C.hW1,C.hWT,C.hVG],x.r)
C.daH=w(["It closed lower than it opened","It closed higher","Nothing traded"],x.s)
C.hX3=new D.cG("A yellow (or red) candle means...",C.daH,0,"Sellers won that time slice.")
C.df0=w(["Wick","Body","Tail light"],x.s)
C.hVR=new D.cG("The thick part of a candle is called the...",C.df0,1,"The body runs from open to close.")
C.dnH=w(["Wicks","Bodies","Averages"],x.s)
C.hWz=new D.cG("The thin lines above and below are the...",C.dnH,0,"Wicks show the high and the low.")
C.des=w(["Open","Close","Highest price"],x.s)
C.hWV=new D.cG("The top of the upper wick shows the...",C.des,2,"The tip of the upper wick is the high.")
C.dIQ=w(["Lowest price","Open","Average"],x.s)
C.hXc=new D.cG("The bottom of the lower wick shows the...",C.dIQ,0,"The tip of the lower wick is the low.")
C.dh9=w(["One","Two","Four"],x.s)
C.hWM=new D.cG("How many prices does one candle show?",C.dh9,2,"Open, high, low and close.")
C.dsF=w(["Buyers pushed up but sellers pushed it back down","The price never moved","The market closed early"],x.s)
C.hWO=new D.cG("A long upper wick means...",C.dsF,0,"The price went high, then fell back before the close.")
C.d5u=w(["Sellers in control","Buyers in control","No direction"],x.s)
C.hWv=new D.cG("Many green candles in a row, each closing higher, show...",C.d5u,1,"Rising closes mean buyers are winning.")
C.d5a=w(["A strong uptrend","The market is undecided","A crash"],x.s)
C.hX1=new D.cG("Candles going up and down with no direction mean...",C.d5a,1,"Mixed candles show indecision.")
C.db4=w(["Green","Yellow","Grey"],x.s)
C.hWK=new D.cG("A candle opened at 10 and closed at 12. Its colour here is...",C.db4,0,"It closed above the open.")
C.dJs=w(["5 candles","12 candles","60 candles"],x.s)
C.hVT=new D.cG("In 1 hour of 5-minute candles there are...",C.dJs,1,"60 minutes divided by 5 is 12.")
C.drn=w(["The first price in that time","The last price in that time","The highest price"],x.s)
C.hXl=new D.cG('The "close" of a candle is...',C.drn,1,"Close is where the price ended.")
C.dyx=w([C.b3v,C.b3k,C.hX3,C.hVR,C.hWz,C.hWV,C.hXc,C.hWM,C.hWO,C.hWv,C.hX1,C.hWK,C.hVT,C.hXl],x.r)
C.d7o=w(["Bullish","Bearish","Sideways"],x.s)
C.hWX=new D.cG("Lower highs and lower lows means...",C.d7o,1,"Walking down stairs = downtrend = bearish.")
C.dn7=w(["Rise","Fall","Stay the same"],x.s)
C.hXq=new D.cG('"Bullish" means you expect prices to...',C.dn7,0,"A bull attacks upward.")
C.djw=w(["Rise","Fall","Double"],x.s)
C.hXo=new D.cG('"Bearish" means you expect prices to...',C.djw,1,"A bear swipes downward.")
C.dnh=w(["Trade against the trend","Trade with the trend","Ignore the trend"],x.s)
C.hWD=new D.cG("The golden rule of trends is...",C.dnh,1,"Going with the trend wins more often.")
C.d8T=w(["A safe plan","A common beginner mistake","What the agent does"],x.s)
C.hX6=new D.cG("Buying in a downtrend because it looks cheap is...",C.d8T,1,"Cheap can get cheaper.")
C.dk_=w(["Sideways","Bullish","Bearish"],x.s)
C.hWa=new D.cG("A price bouncing between a ceiling and a floor is...",C.dk_,0,"No higher highs or lower lows: sideways.")
C.dBN=w(["Trade a lot","Wait","Borrow money"],x.s)
C.hWn=new D.cG("In a sideways market the best move is often to...",C.dBN,1,"Patience avoids false signals.")
C.dlU=w(["Up","Down","Flat"],x.s)
C.hWq=new D.cG("When sellers are in control, the trend is...",C.dlU,1,"Sellers push prices down.")
C.dlR=w(["Stairs going up","Stairs going down","A flat road"],x.s)
C.hVI=new D.cG("Which picture fits an uptrend?",C.dlR,0,"Each step a bit higher.")
C.dBy=w(["Turns down","Turns up","Is sideways"],x.s)
C.hWI=new D.cG("The agent only buys when the trend...",C.dBy,1,"It buys the start of up moves.")
C.dzX=w(["Getting lower","Getting higher","Gone"],x.s)
C.hVX=new D.cG("A trend changes from bearish to bullish. Lows are now...",C.dzX,1,"Higher lows are the first sign of an uptrend.")
C.dr6=w(["Strong uptrend","Strong downtrend","Sideways"],x.s)
C.hWR=new D.cG("Most trading signals fail in which market?",C.dr6,2,"Without direction, signals flip constantly.")
C.d8R=w([C.b3w,C.b3p,C.hWX,C.hXq,C.hXo,C.hWD,C.hX6,C.hWa,C.hWn,C.hWq,C.hVI,C.hWI,C.hVX,C.hWR],x.r)
C.dh0=w(["The average closing price of recent candles","The highest price ever","A news feed"],x.s)
C.hXd=new D.cG("A moving average is...",C.dh0,0,"It smooths prices into a line.")
C.dHk=w(["To hide small wiggles and show direction","To predict news","To make charts colourful"],x.s)
C.hXf=new D.cG("Why use a moving average?",C.dHk,0,"It filters noise.")
C.ddx=w(["9","21","100"],x.s)
C.hWA=new D.cG("The purple slow line averages how many candles?",C.ddx,1,"21 candles, about 1 hour 45 minutes.")
C.drs=w(["The fast (pink) line","The slow (purple) line","Both the same"],x.s)
C.hWC=new D.cG("Which line reacts faster to new moves?",C.drs,0,"Fewer candles means quicker reaction.")
C.dHB=w(["Trend is up","Trend is down","Buy now"],x.s)
C.hWo=new D.cG("Fast line below slow line means...",C.dHB,1,"Recent prices are lower than older ones.")
C.d9s=w(["Buyers are strong","Sellers are strong","Nothing"],x.s)
C.hVL=new D.cG("The price is above both lines. That shows...",C.d9s,0,"Price above its averages = strength.")
C.d5j=w(["The bigger direction","Only the last candle","Tomorrow price"],x.s)
C.hWW=new D.cG("The slow line shows...",C.d5j,0,"It changes slowly and shows the wider trend.")
C.d1D=w(["15 minutes","1 hour 45 minutes","1 week"],x.s)
C.hW0=new D.cG("The slow line covers about...",C.d1D,1,"21 x 5 minutes = 105 minutes.")
C.com=w(["Past prices","Future prices","Opinions"],x.s)
C.hX2=new D.cG("Moving averages are based on...",C.com,0,"They average prices that already happened.")
C.d5I=w(["Lag behind the price","Lead the price","Never move"],x.s)
C.hXg=new D.cG("Because they use past prices, moving averages...",C.d5I,0,"Averages are always a little late.")
C.dqm=w(["A bullish picture","A bearish picture","A closed market"],x.s)
C.hWp=new D.cG("Both lines pointing up and the price above them is...",C.dqm,0,"Everything points up.")
C.dfK=w(["Trending strongly","Sideways","Crashing"],x.s)
C.hXp=new D.cG("When the two lines are tangled together, the market is often...",C.dfK,1,"Tangled lines mean no clear direction.")
C.dBj=w([C.b3y,C.b3r,C.hXd,C.hXf,C.hWA,C.hWC,C.hWo,C.hVL,C.hWW,C.hW0,C.hX2,C.hXg,C.hWp,C.hXp],x.r)
C.dgZ=w(["Crosses below the slow line","Crosses above the slow line","Touches the price"],x.s)
C.hVF=new D.cG("The sell signal is when the fast line...",C.dgZ,0,"Crossing down = the up move is over.")
C.dGD=w(["About $100","$5,000","All the money"],x.s)
C.hXx=new D.cG("How much does the agent put into one trade?",C.dGD,0,"Every trade is $100 of the stock (weekdays) or coin (weekends) itself.")
C.dBc=w(["A fresh signal","An old signal","Not a signal at all ever"],x.s)
C.hX7=new D.cG("A cross that happened an hour ago is...",C.dBc,1,"Fresh means since the last check.")
C.csP=w(["Sideways markets","Strong trends","Closed markets"],x.s)
C.hXb=new D.cG("Crossovers give many false signals in...",C.csP,0,"Lines cross back and forth with no direction.")
C.dpv=w(["The stop loss","Buying more","Ignoring it"],x.s)
C.hW_=new D.cG("What protects you when a signal is wrong?",C.dpv,0,"The stop keeps the loss small.")
C.djh=w(["Just changed direction","Ended forever","Doubled"],x.s)
C.hXm=new D.cG("The crossover tells you the short-term trend has...",C.djh,0,"A cross marks a turn.")
C.d2C=w(["1 second","5 minutes","1 day"],x.s)
C.hXe=new D.cG("The agent checks every market on the list every...",C.d2C,1,"The automatic check runs every 5 minutes and looks at all of the day markets at once.")
C.d6M=w(["Buying higher, with less room to rise","A guaranteed win","A cheaper price"],x.s)
C.hVU=new D.cG("Buying late in a move usually means...",C.d6M,0,"Most of the move is already gone.")
C.duE=w(["Trust it more","Trust it less","Bet bigger"],x.s)
C.hX5=new D.cG("If a signal fails often on one market, you should...",C.duE,1,"Check how often it worked before trusting it.")
C.d6G=w(["Buys more","Sells","Waits a week"],x.s)
C.hWN=new D.cG("When the agent holds a trade and the fast line crosses down, it...",C.d6G,1,"The sell signal closes the trade.")
C.cNY=w(["Yes","No","Only on Fridays"],x.s)
C.hWs=new D.cG("Does a buy signal guarantee the price will rise?",C.cNY,1,"Signals improve the odds; they never guarantee.")
C.daj=w(["Holds no other position","Already holds three","Has lost $100"],x.s)
C.hXy=new D.cG("The agent buys on a signal only if it...",C.daj,0,"One position at a time.")
C.dHr=w([C.b3q,C.b3i,C.hVF,C.hXx,C.hX7,C.hXb,C.hW_,C.hXm,C.hXe,C.hVU,C.hX5,C.hWN,C.hWs,C.hXy],x.r)
C.dlF=w(["0 to 100","1 to 10","-50 to 50"],x.s)
C.hX9=new D.cG("RSI is a number from...",C.dlF,0,"It always sits between 0 and 100.")
C.dwK=w(["Rises were bigger than falls","Falls were bigger than rises","Nothing moved"],x.s)
C.hWl=new D.cG("RSI above 50 means recent...",C.dwK,0,"Above 50 = buyers stronger lately.")
C.dhc=w(["Overbought","Oversold","Balanced"],x.s)
C.hWu=new D.cG("RSI below 30 is called...",C.dhc,1,"It fell fast and is stretched downward.")
C.dui=w(["Momentum: strength of recent moves","The company profit","Trading volume"],x.s)
C.hWF=new D.cG("RSI measures...",C.dui,0,"It compares gains with losses.")
C.d6t=w(["Healthy","Very stretched","Impossible"],x.s)
C.hW8=new D.cG("A buy signal with RSI 60 is...",C.d6t,0,"Between 50 and 70 is healthy strength.")
C.dea=w(["Just starting","Tired and stretched","Guaranteed"],x.s)
C.hVM=new D.cG("A buy signal with RSI 80 means the move may be...",C.dea,1,"Very high RSI often comes before a pause.")
C.dli=w(["As a second opinion","As the only reason to trade","Never"],x.s)
C.hWe=new D.cG("Best way to use RSI?",C.dli,0,"Combine it with the trend signal.")
C.dvX=w(["For a while","Never","Only one candle"],x.s)
C.hWE=new D.cG("In a strong uptrend, RSI can stay above 70...",C.dvX,0,"Strong trends can stay overbought.")
C.dqx=w(["Balanced buyers and sellers","Market closed","Crash coming"],x.s)
C.hWG=new D.cG("RSI of 50 means...",C.dqx,0,"50 is the middle.")
C.d9q=w(["Rose very fast","Fell very fast","Did not move"],x.s)
C.hXh=new D.cG("Overbought means prices...",C.d9q,0,"Overbought = rose fast.")
C.cQ9=w(["Stay oversold and keep falling","Only go up","Freeze the market"],x.s)
C.hWg=new D.cG("Oversold in a strong downtrend can...",C.cQ9,0,"Oversold is not a reason to buy on its own.")
C.cMe=w(["Sellers a little stronger","Extreme buying","Extreme selling"],x.s)
C.hWw=new D.cG("RSI 45 suggests...",C.cMe,0,"Just below 50: sellers slightly ahead.")
C.dlg=w([C.b3h,C.b3u,C.hX9,C.hWl,C.hWu,C.hWF,C.hW8,C.hVM,C.hWe,C.hWE,C.hWG,C.hXh,C.hWg,C.hWw],x.r)
C.dIG=w(["When the trade is up $50","When the trade is up $5","Never"],x.s)
C.hXi=new D.cG("The agent take profit is...",C.dIG,0,"It sells when the trade is up $50.")
C.dAQ=w(["When the trade is down $50","When the trade is down $500","It has none"],x.s)
C.hWY=new D.cG("The agent stop loss is...",C.dAQ,0,"It sells when the trade is down $50.")
C.dpc=w(["A planned exit that limits a loss","A way to stop the app","A bonus"],x.s)
C.hVZ=new D.cG("A stop loss is...",C.dpc,0,"It sells automatically when the loss reaches a set size.")
C.deH=w(["Before entering the trade","After it goes wrong","Never"],x.s)
C.hW7=new D.cG("When should you decide your exits?",C.deH,0,"Plan exits first, while calm.")
C.dl3=w(["So no single mistake hurts much","It is the maximum allowed","To lose faster"],x.s)
C.hWf=new D.cG("Why does the agent use only about $100 per trade?",C.dl3,0,"Small size protects the account.")
C.dIk=w(["1 to 2 percent","50 percent","100 percent"],x.s)
C.hWS=new D.cG("Pros rarely risk more than about ... of their money on one trade.",C.dIk,0,"Small risk per trade keeps them in the game.")
C.diS=w(["$0","+$100","-$100"],x.s)
C.hX4=new D.cG("Win $50 twice and lose $50 twice. Your total is...",C.diS,0,"50 + 50 - 50 - 50 = 0.")
C.dtd=w(["Profitable","Break even","A loss"],x.s)
C.hWZ=new D.cG("Winning half the time with 2 to 1 reward to risk is...",C.dtd,0,"Each win is twice each loss.")
C.deP=w(["Turns small losses into big ones","Guarantees a win","Has no effect"],x.s)
C.hWk=new D.cG('Moving your stop lower to "give it room" usually...',C.deP,0,"Hope is not a plan.")
C.d7y=w(["1 to 1","1 to 2","10 to 1"],x.s)
C.hWr=new D.cG("Reward to risk of the agent is...",C.d7y,0,"$50 target vs $50 stop: the same size.")
C.csi=w(["Can end an account","Are rare","Do not matter"],x.s)
C.hXu=new D.cG("Big losses are dangerous because they...",C.csi,0,"A 50% loss needs a 100% gain to recover.")
C.cVA=w(["Selling when the planned gain is reached","Buying more","Holding forever"],x.s)
C.hWd=new D.cG("Take profit means...",C.cVA,0,"It locks in the win.")
C.dd2=w([C.b3n,C.b3l,C.hXi,C.hWY,C.hVZ,C.hW7,C.hWf,C.hWS,C.hX4,C.hWZ,C.hWk,C.hWr,C.hXu,C.hWd],x.r)
C.dwQ=w(["Trading more to win losses back","Taking a break","Following rules"],x.s)
C.hWB=new D.cG("Revenge trading means...",C.dwQ,0,"It usually makes losses bigger.")
C.d7d=w(["$100 total losses","$25 total losses","Never"],x.s)
C.hW9=new D.cG("The total brake pauses the agent at...",C.d7d,0,"$100 total demo losses.")
C.d6N=w(["An admin, after a review","It turns itself on","Nobody ever"],x.s)
C.hWx=new D.cG("Who turns the agent back on after the $100 brake?",C.d6N,0,"A human review comes first.")
C.ceQ=w(["$50","$1","$500"],x.s)
C.hVS=new D.cG("The daily stop is...",C.ceQ,0,"If the day loses $50, no more buys.")
C.d1J=w(["Stop and reset","Trade bigger","Ignore your limits"],x.s)
C.hXa=new D.cG("Bad days happen. The best response is...",C.d1J,0,"Walking away protects your money.")
C.dnU=w(["Before the day starts","After you lose","Only on weekends"],x.s)
C.hVN=new D.cG("Limits should be set...",C.dnU,0,"Decide limits while calm.")
C.dDa=w(["Reviewing what happened","Forgetting it","Blaming the market"],x.s)
C.hWm=new D.cG("The most important part of learning after a bad run is...",C.dDa,0,"Reviews turn losses into lessons.")
C.cQA=w(["Yes, exits still work","No, it freezes","It buys more instead"],x.s)
C.hWP=new D.cG("After the daily stop, can the agent still sell an open trade?",C.cQA,0,"The stop blocks new buys, not exits.")
C.dHR=w(["Protect the account from bad days","Make more trades","Win every day"],x.s)
C.hWJ=new D.cG("Brakes are there to...",C.dHR,0,"They cap the damage.")
C.d8U=w(["Stop trading and rethink","Raise the limits","Borrow money"],x.s)
C.hWi=new D.cG("If you keep breaking your own limits, you should...",C.d8U,0,"Rules only work when kept.")
C.dA3=w(["The next day","Never","Every minute"],x.s)
C.hWQ=new D.cG("The daily stop resets...",C.dA3,0,"A new Eastern Time day starts fresh.")
C.dmU=w(["Can lose everything on a bad day","Always wins","Pays no fees"],x.s)
C.hVV=new D.cG("A trader with no loss limits...",C.dmU,0,"Limits are the safety net.")
C.dGu=w(["Pause","Trade faster","Bet bigger"],x.s)
C.hVK=new D.cG("Feeling angry after a loss is a sign to...",C.dGu,0,"Emotions lead to bad trades.")
C.d9d=w([C.b3m,C.hWB,C.hW9,C.hWx,C.hVS,C.hXa,C.hVN,C.hWm,C.hWP,C.hWJ,C.hWi,C.hWQ,C.hVV,C.hVK],x.r)
C.db5=w(["9:30 AM to 4:00 PM Eastern","24 hours","8 PM to midnight"],x.s)
C.hW2=new D.cG("US stock market hours are...",C.db5,0,"On market days only.")
C.hVW=new D.cG("Is the US stock market open on Saturday?",S.a7a,1,"Weekends are closed.")
C.dG3=w(["A jump between the close and the next open","A break in the chart software","A holiday"],x.s)
C.hWH=new D.cG("An overnight gap is...",C.dG3,0,"News while closed moves the next open.")
C.d1I=w(["Faster and harder","Slower","Exactly the same"],x.s)
C.hWj=new D.cG("Crypto compared with SPY usually moves...",C.d1I,0,"Crypto is more jumpy.")
C.dv3=w(["The 500 biggest US companies","One company","Bitcoin"],x.s)
C.hXs=new D.cG("SPY holds...",C.dv3,0,"It is a fund of 500 companies.")
C.dJq=w(["They spread over many companies","They are closed","They are crypto"],x.s)
C.hVE=new D.cG("Why do funds like SPY move more calmly?",C.dJq,0,"One bad company matters less.")
C.dBf=w(["3:55 PM Eastern","Midnight","Noon"],x.s)
C.hXk=new D.cG("The agent sells stocks by...",C.dBf,0,"Before the 4:00 PM close.")
C.d8V=w(["Sunday 5 PM to Friday 5 PM Eastern","Only 9:30 to 4","Only weekends"],x.s)
C.hW3=new D.cG("Forex (currency pairs) trades...",C.d8V,0,"Real forex is closed on weekends.")
C.deb=w(["The broker itself","The real world market","The government"],x.s)
C.hWc=new D.cG("OTC prices at a broker on weekends come from...",C.deb,0,"They are made by the broker and can differ.")
C.dx5=w(["Do not trade","Trade double","Trade at night"],x.s)
C.hWy=new D.cG("On a US market holiday, stocks...",C.dx5,0,"Holidays are closed days.")
C.cf8=w(["More often","Never","Less often"],x.s)
C.hXn=new D.cG("Because crypto moves fast, stop losses are hit...",C.cf8,0,"Bigger swings reach stops sooner.")
C.dBe=w(["Its own news","Weekend rules","The colour of candles"],x.s)
C.hX8=new D.cG("One company like Tesla can jump a lot because of...",C.dBe,0,"Single stocks react to company news.")
C.drj=w([C.b3t,C.b3j,C.hW2,C.hVW,C.hWH,C.hWj,C.hXs,C.hVE,C.hXk,C.hW3,C.hWc,C.hWy,C.hXn,C.hX8],x.r)
C.dfT=w(["Why you entered, your exits and what happened","Only wins","Nothing"],x.s)
C.hW5=new D.cG("A trading journal records...",C.dfT,0,"It shows what really works.")
C.hWt=new D.cG("One winning trade proves a method works.",M.Tj,1,"One trade can be pure luck.")
C.dkc=w(["2 to 4 weeks","1 hour","1 day"],x.s)
C.hVO=new D.cG("The plan is to paper trade for...",C.dkc,0,"Enough time for many trades.")
C.doy=w(["A bug to fix before real money","Fine","A bonus"],x.s)
C.hVY=new D.cG("If the agent ever breaks a rule, that is...",C.doy,0,"Rules must be followed exactly.")
C.dtv=w(["A long positive paper test and a full review","One good day","A tip from a friend"],x.s)
C.hXt=new D.cG("Before using real money you need...",C.dtv,0,"Evidence first.")
C.daB=w(["Worse than a coin flip","Excellent","Guaranteed"],x.s)
C.hX_=new D.cG("Signals that worked under 50% of the time are...",C.daB,0,"Do not trust them.")
C.d5T=w(["Never a good idea for beginners","Smart","Required"],x.s)
C.hWU=new D.cG("Borrowing money to trade is...",C.d5T,0,"Borrowed losses still have to be paid.")
C.dcy=w(["The agent journal","An advert","A game"],x.s)
C.hX0=new D.cG("The Trades list on the main screen is...",C.dcy,0,"Every buy and sell is recorded.")
C.dpO=w(["No fear and no greed","Lots of emotion","Random choices"],x.s)
C.hWh=new D.cG("The point of an agent is to follow rules with...",C.dpO,0,"Discipline is its strength.")
C.cU7=w(["+$100","-$100","$0"],x.s)
C.hXv=new D.cG("After 10 trades you have 6 wins at +$50 and 4 losses at -$50. Total?",C.cU7,0,"6 x 50 = 300; 4 x 50 = 200; 300 - 200 = +100.")
C.cYy=w(["Review the trades calmly","Quit forever without looking","Double the size"],x.s)
C.hW4=new D.cG("A losing week means you should...",C.cYy,0,"Reviews find what to fix.")
C.dEK=w(["Patient and disciplined","Lucky","Fast clickers"],x.s)
C.hWb=new D.cG("The best traders are mostly...",C.dEK,0,"Patience and rules win over time.")
C.diE=w([C.b3g,C.b3o,C.hW5,C.hWt,C.hVO,C.hVY,C.hXt,C.hX_,C.hWU,C.hX0,C.hWh,C.hXv,C.hW4,C.hWb],x.r)
C.dLL=new A.bn(C.exX,[C.dBA,C.dyx,C.d8R,C.dBj,C.dHr,C.dlg,C.dd2,C.d9d,C.drj,C.diE],A.as("bn<n,ai<cG>>"))
C.ezZ={EUR:0,USD:1,GBP:2,JPY:3,CAD:4,AUD:5,NZD:6,CHF:7,TRY:8,NOK:9,THB:10}
C.fdA=new A.y("\u20ac",B.dW)
C.fes=new A.y("$",B.es)
C.eU5=new A.y("\xa3",B.dl)
C.f2w=new A.y("\xa5",B.bE)
C.f0r=new A.y("C$",B.hJ)
C.f2X=new A.y("A$",B.cZ)
C.eTp=new A.y("NZ",B.aw)
C.f6J=new A.y("Fr",B.et)
C.fbK=new A.y("TL",B.fK)
C.faM=new A.y("kr",B.fX)
C.eXX=new A.y("TH",B.wM)
C.a8w=new A.bn(C.ezZ,[C.fdA,C.fes,C.eU5,C.f2w,C.f0r,C.f2X,C.eTp,C.f6J,C.fbK,C.faM,C.eXX],A.as("bn<n,+(n,u)>"))
C.c0t=new A.ae(B.ni,5,B.b_,null,null,null)
C.eGx=new A.D(B.hz,C.c0t,null)
C.f8n=new A.y(F.qH,"HOLDING")
C.faW=new A.y(C.cF,"PASSES")
C.fb4=new A.y(C.d4,"FALLING")
C.fbc=new A.y(C.d4,"BENCHED")
C.ffT=new A.b0(C.cF,B.mx,"up")
C.fgd=new A.b0(1,"Live signals",C.asn)
C.bWk=new A.a_(983635,"MaterialIcons",!0)
C.fgl=new A.b0(E.i1,C.bWk,"Moving sideways")
C.fgt=new A.b0(C.d4,B.a4R,"down")
C.fgW=new A.b0(2,"Ask tutor",B.xm)
C.fhd=new A.b0(B.b_,B.o5,"Waiting for data")
C.fhP=new A.b0(C.cF,B.mx,"Trending up")
C.fhW=new A.b0(C.d4,B.a4R,"Trending down")
C.fi_=new A.b0(0,"Lessons",B.o6)
C.fj2=new A.b0(B.bQ,B.o5,"waiting")
C.fmT=new A.b7([B.A1,C.cF,"Signal alerts are ON: only STRONG BUY or SELL signals (all 5 confirmations), built for a 15\u201330 minute expiry, while NGMY is open or in the background.",null])
C.fnz=new A.b7([B.asa,E.i1,"Signal alerts are unlocked. Allow notifications so the app can tell you when a STRONG signal is given.","Allow"])
C.bZG=new A.ae(B.ni,8,C.cF,null,null,null)
C.fOR=new A.G(!0,C.cF,null,null,null,null,11.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.hew=new A.C("LIVE",null,C.fOR,null,null,null,null,null,null,null,null,null)
C.dvW=w([C.bZG,B.ba,C.hew],x.p)
C.frV=new A.c2(B.aK,B.e,B.P,B.l,null,B.p,null,0,C.dvW,null)
C.c_7=new A.ae(B.rm,14,B.c,null,null,null)
C.hlq=new A.C("Learn",null,B.nv,null,null,null,null,null,null,null,null,null)
C.dam=w([C.c_7,B.da,C.hlq],x.p)
C.frY=new A.c2(B.aK,B.e,B.P,B.l,null,B.p,null,0,C.dam,null)
C.fGL=new A.G(!0,E.i1,null,null,null,null,12,B.O,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.fHG=new A.G(!0,B.c,null,null,null,null,11.5,null,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.fIf=new A.G(!0,B.c,null,null,null,null,34,B.D,null,-0.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.fIO=new A.G(!0,B.c,null,null,null,null,36,B.D,null,-0.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.fJ1=new A.G(!0,B.c,null,null,null,null,14,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,G.Av,null,null)
C.fJQ=new A.G(!0,B.ab,null,null,null,null,10.5,B.u,null,0.9,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.fL_=new A.G(!0,F.qH,null,null,null,null,11,B.O,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.fLl=new A.G(!0,B.ab,null,null,null,null,11.5,B.D,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.fNk=new A.G(!0,C.cF,null,null,null,null,11.5,B.O,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.fNs=new A.G(!0,C.d4,null,null,null,null,12,B.D,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.fOm=new A.G(!0,C.cF,null,null,null,null,12,null,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.fOE=new A.G(!0,C.d4,null,null,null,null,11.5,null,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.fON=new A.G(!0,C.d4,null,null,null,null,11.5,B.O,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.aYk=new A.G(!0,E.i1,null,null,null,null,11.5,B.O,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.fSQ=new A.G(!0,C.cF,null,null,null,null,12.5,B.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.fTQ=new A.G(!0,B.c,null,null,null,null,22,B.u,null,0.8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.fUt=new A.G(!0,C.d4,null,null,null,null,12,null,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.aZ4=new A.G(!0,C.d4,null,null,null,null,11.5,B.D,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.fVN=new A.G(!0,B.ab,null,null,null,null,9.5,B.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.fYY=new A.C("Ask the tutor",null,B.cf,null,null,null,null,null,null,null,null,null)
C.aXD=new A.G(!0,C.d4,null,null,null,null,12.5,B.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.fZ7=new A.C("Not quite. Try again.",null,C.aXD,null,null,null,null,null,null,null,null,null)
C.h_5=new A.C("Win rate ($100 trades)",null,B.LT,null,null,null,null,null,null,null,null,null)
C.h_7=new A.C("All 10 lessons done!",null,null,null,null,null,null,null,null,null,null,null)
C.h_e=new A.C("10 short lessons. Each one shows you the idea live on the real markets the agent is watching.",null,T.FF,null,null,null,null,null,null,null,null,null)
C.h0J=new A.C("Wrong. You have one more try.",null,C.aXD,null,null,null,null,null,null,null,null,null)
C.h2e=new A.C("Turn the agent back on?",null,null,null,null,null,null,null,null,null,null,null)
C.fW7=new A.G(!0,B.c,null,null,null,null,9.5,B.u,null,0.8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.h4S=new A.C("ALL SYSTEMS",null,C.fW7,null,null,null,null,null,null,null,null,null)
C.h5T=new A.C("Built for a 15\u201330 minute expiry. Do NOT use this for 1\u20135 minute trades.",null,C.aZ4,null,null,null,null,null,null,null,null,null)
C.hbX=new A.C("Signal alerts are now unlocked. When a market says ENTER UP or ENTER DOWN, the app will tell you the market, the direction and the duration. Allow notifications to receive them.",null,null,null,null,null,null,null,null,null,null,null)
C.aZB=new A.C("Balance",null,B.WV,null,null,null,null,null,null,null,null,null)
C.hf1=new A.C("Allow notifications",null,null,null,null,null,null,null,null,null,null,null)
C.fRe=new A.G(!0,B.aR,null,null,null,null,10.5,null,null,null,null,null,1.25,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.hfJ=new A.C("5 of 10\n= break even",null,C.fRe,null,B.e1,null,null,null,null,null,null,null)
C.hhW=new A.C("Check now",null,B.cf,null,null,null,null,null,null,null,null,null)
C.hiB=new A.C("Learn to trade",null,B.m9,null,null,null,null,null,null,null,null,null)
C.hl4=new A.C("Turn back on",null,null,null,null,null,null,null,null,null,null,null)
C.hlu=new A.C("The $100 brake paused the agent. Turning it back on means you have reviewed it. The running demo profit and loss starts again from $0.",null,null,null,null,null,null,null,null,null,null,null)
C.hRR=new D.z2("Nvidia","N",B.NA)
C.hRT=new D.z2("Ethereum","\u039e",C.aj9)
C.hRW=new D.z2("S&P 500 fund","S&P",B.ch)
C.hRX=new D.z2("Bitcoin","B",F.qH)
C.hRZ=new D.z2("Tesla","T",B.bE)
C.hS_=new D.z2("Microsoft","M",B.bp)
C.hS0=new D.z2("Nasdaq 100 fund","Q",B.cG)
C.bo5=new A.u(1,0.6,0.27058823529411763,1,B.q)
C.hS2=new D.z2("Solana","S",C.bo5)
C.hS4=new D.z2("Apple","A",B.cU)
C.hS7=new D.z2("Amazon","a",B.as)})();(function staticFields(){$.DB=A.a([],A.as("N<a_L>"))
$.ahm=!1
$.hmh=""
$.aM8=0
$.fpn=0})()};
(a=>{a["9KIAcaRrPxoZe1wOjlpji5h50gc="]=a.current})($__dart_deferred_initializers__);