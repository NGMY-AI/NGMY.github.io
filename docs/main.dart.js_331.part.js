((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,P,Q,E,I,R,K,G,L,D={
hEm(){return new D.auv(null)},
eK5(d){var w=J.a1(d),v=D.dF(w.h(d,"reading")).h(0,"action"),u=J.k(v==null?"":v)
if(B.a.Y(u,"ENTER UP"))return 0
if(B.a.Y(u,"ENTER DOWN"))return 1
if(!J.z(w.h(d,"open"),!0))return 4
return 2+(100-D.c5(D.dF(w.h(d,"reading")).h(0,"score")))/1000},
hOs(d,e,f,g){var w,v,u,t,s,r,q,p,o,n,m,l,k=A.a([],x.n)
for(w=d.length,v=x.N,u=x.z,t=x.f,s=0;s<d.length;d.length===w||(0,A.I)(d),++s){r=d[s]
q=J.a1(r)
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
else p=l>0?C.cH:C.d6
k.push(new D.Re(o,q,p))}if(g!=null&&A.v(g.h(0,"symbol"))===e){w=g.h(0,"entryAt")
o=A.be(A.v(w==null?"":w))
if(g.h(0,"spot")!=null)n=D.c5(g.h(0,"spot"))
else n=t.b(g.h(0,"option"))?0:D.c5(g.h(0,"entryPrice"))
if(o!=null&&n>0&&!B.d.aR(k,new D.fNh(o,f)))k.push(new D.Re(o,"In "+D.eg(n,!0,!1),f))}return k},
fEp(d){var w
switch(d){case"SPY":w=C.hTI
break
case"QQQ":w=C.hTN
break
case"AAPL":w=C.hTR
break
case"MSFT":w=C.hTM
break
case"NVDA":w=C.hTD
break
case"TSLA":w=C.hTL
break
case"AMZN":w=C.hTU
break
case"BTC/USD":w=C.hTJ
break
case"ETH/USD":w=C.hTF
break
case"SOL/USD":w=C.hTP
break
default:w=new D.z9(d,d.length===0?"?":d[0],B.b0)
break}return w},
bEF(d,e){var w,v,u=null,t=d.split("/")
if(t.length===2&&C.a8T.am(0,t[0])&&C.a8T.am(0,t[1])){t=d.split("/")
w=new D.fzg(e)
return new A.a5(e*1.25,e,new A.am(B.a0,u,B.ac,B.t,A.a([A.ao(u,w.$1(t[0]),u,u,0,u,0,u),A.ao(0,w.$1(t[1]),u,u,u,0,u,u)],x.p),u),u)}v=D.fEp(d)
w=v.b
return A.q(B.z,A.c(w,u,u,u,u,u,u,A.l(u,u,B.c,u,u,u,u,u,u,u,u,w.length>1?e*0.32:e*0.52,u,u,B.u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),B.f,u,u,new A.p(v.c,u,u,u,u,u,B.a6),u,e,u,u,u,u,u,e)},
fEI(d){var w,v=x.g.a(d.h(0,"markets"))
if(v==null)v=B.bN
v=J.cL(v,x.f)
v=A.ct(v,new D.fEJ(),v.$ti.k("M.E"),x.P)
w=A.B(v,A.a3(v).k("M.E"))
return w},
dF(d){var w=x.N,v=x.z
return x.f.b(d)?A.a0(d,w,v):A.S(w,v)},
c5(d){var w
if(typeof d=="number")w=d
else{w=A.cA(A.v(d==null?"":d))
if(w==null)w=0}return w},
bG2(d){var w=x.g.a(D.dF(J.t(d,"chart")).h(0,"points"))
if(w==null)w=B.bN
w=J.cL(w,x.f)
w=A.ct(w,new D.fJ3(),w.$ti.k("M.E"),x.P)
w=A.B(w,A.a3(w).k("M.E"))
return w},
eg(d,e,f){var w,v=A.oe(B.h.a1(Math.abs(d),2),A.ag("\\B(?=(\\d{3})+(?!\\d))",!0,!1,!1,!1),new D.fFP(),null)
if(d<0)w="-"
else w=f&&d>0?"+":""
return w+(e?"$":"")+v},
LR(d){var w=B.n.F(A.cX(d),12)===0?12:B.n.F(A.cX(d),12),v=B.a.aY(B.n.v(A.fx(d)),2,"0"),u=A.cX(d)<12?"AM":"PM"
return""+w+":"+v+" "+u},
SL(d){var w=d.aa(),v=new D.fNb(),u=v.$3(A.bD(w),3,2).bL(252e8),t=v.$3(A.bD(w),11,1).bL(216e8),s=w.bL(0-A.dw(0,!w.cY(u)&&w.cY(t)?4:5,0,0,0,0).a)
return A.c3(A.bD(s),A.bO(s),A.bW(s),A.cX(s),A.fx(s),0,0,0)},
aRy(d){var w,v,u,t=d==null,s=A.v(t?"":d).split("-")
if(s.length!==3)return A.v(t?"":d)
w=A.ca(s[1],null)
t=B.i5[B.n.D((w==null?1:w)-1,0,11)]
v=s[2]
u=A.ca(v,null)
return t+" "+A.v(u==null?v:u)+", "+s[0]},
hpz(d){var w,v=A.be(A.v(d==null?"":d))
if(v==null)return""
w=D.SL(v)
return B.i5[A.bO(w)-1]+" "+A.bW(w)+" at "+D.LR(w)+" ET"},
hrs(d){var w,v,u=d.split(", ")
if(u.length>=4){w=u[1]
v=u[3]
return w+", "+A.aH(v," ET","")}return d},
hJO(d){return d.length===0?d:d[0].toUpperCase()+B.a.aV(d,1)},
itA(d){var w=B.a.ca(d,"(")
return B.a.i(w>0?B.a.av(d,0,w):d)},
hD_(d){return new D.P_(d,null)},
hIg(d){var w
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
hMo(){var w=D.SL(new A.W(Date.now(),0,!1).aa()),v=B.n.F(A.fx(w),5)
return"at "+D.LR(A.c3(A.bD(w),A.bO(w),A.bW(w),A.cX(w),A.fx(w),0,0,0).bL(A.dw(0,0,0,0,5-v,0).a))+" ET"},
ikb(d){if(B.a.Y(d,"ENTER UP"))return C.cH
if(B.a.Y(d,"ENTER DOWN"))return C.d6
if(B.a.q(d,"SKIP")||B.a.q(d,"TOO LATE"))return C.d6
if(B.a.Y(d,"MARKET CLOSED"))return B.bQ
return E.i1},
hNr(a9,b0,b1,b2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=null,a3="mom1h",a4=J.a1(b0),a5=D.dF(a4.h(b0,"reading")),a6=D.dF(a5.h(0,"timing")),a7=D.bG2(b0),a8=a4.h(b0,"asset")
if(a8==null)a8=a4.h(b0,"symbol")
w=J.k(a8==null?"":a8)
a8=a5.h(0,"action")
v=J.k(a8==null?"WAITING FOR DATA":a8)
u=D.ikb(v)
t=B.h.D(D.c5(a5.h(0,"score")),0,100)
a8=x.g.a(a5.h(0,"notes"))
if(a8==null)a8=B.bN
a8=J.b8(a8,new D.fJZ(),x.N)
s=A.B(a8,a8.$ti.k("aj.E"))
r=D.c5(a4.h(b0,"changePct"))
a8=a9.a
q=a8?B.c.j(0.92):C.ib
p=A.n(20)
o=B.a.Y(v,"ENTER")
if(o)n=u.j(0.6)
else n=a8?B.c:C.nf
n=A.K(n,B.r,o?1.6:1)
m=x.V
l=A.a([new A.ac(0,B.H,a9.gIq(),B.hS,14)],m)
k=D.bEF(w,28)
o=A.c(w,a2,a2,a2,a2,a2,a2,A.l(a2,a2,a8?C.cl:B.c,a2,a2,a2,a2,a2,a2,a2,a2,14,a2,a2,B.C,a2,a2,!0,a2,a2,a2,a2,a2,a2,a2,a2),a2,a2,a2)
j=a4.h(b0,"name")
j=J.k(j==null?"":j)
i=x.p
j=A.a([k,B.ar,A.E(A.w(A.a([o,A.c(j,a2,a2,a2,a2,a2,a2,A.l(a2,a2,a8?C.bT:C.bV,a2,a2,a2,a2,a2,a2,a2,a2,11,a2,a2,a2,a2,a2,!0,a2,a2,a2,a2,a2,a2,a2,a2),a2,a2,a2)],i),B.B,a2,B.e,B.i,0,B.p),1)],i)
if(a7.length>2)B.d.u(j,A.a([new A.a5(58,26,A.b4(a2,a2,a2,new D.bxh(a7,r>=0?C.cH:C.d6,a2),B.aA),a2),B.ar],i))
o=D.hNl(b0)
o=A.c(o,a2,a2,a2,a2,a2,a2,A.l(a2,a2,a8?C.cl:B.c,a2,a2,a2,a2,a2,a2,a2,a2,14,a2,a2,B.C,a2,a2,!0,a2,a2,a2,a2,a2,a2,a2,a2),a2,a2,a2)
k=r>=0
h=k?"+":""
g=B.h.a1(r,2)
f=J.z(a4.h(b0,"kind"),"forex")?"30m":"4h"
j.push(A.w(A.a([o,A.c(h+g+"% \xb7 "+f,a2,a2,a2,a2,a2,a2,A.l(a2,a2,k?C.cH:C.d6,a2,a2,a2,a2,a2,a2,a2,a2,11,a2,a2,B.O,a2,a2,!0,a2,a2,a2,a2,a2,a2,a2,a2),a2,a2,a2)],i),B.dr,a2,B.e,B.i,0,B.p))
o=A.a([A.A(j,B.l,a2,B.e,B.i,0,a2,a2)],i)
k=x.f
if(k.b(a4.h(b0,"v2")))B.d.u(o,A.a([B.af,D.iva(a9,b0)],i))
else{j=A.a([],i)
if(k.b(a5.h(0,"entry"))){k=D.dF(a5.h(0,"entry"))
e=J.z(k.h(0,"dir"),"up")
d=e?C.cH:C.d6
a0=Math.max(1,B.h.S(D.c5(k.h(0,"candleMin"))))
h=A.n(18)
g=A.ap(d,B.v,0.25)
g.toString
g=A.a([d,g],x.O)
m=A.a([new A.ac(0,B.H,d.j(0.35),B.cy,16)],m)
f=B.c.j(0.22)
f=A.q(a2,A.V(e?B.q4:B.q3,B.c,a2,a2,a2,34),B.f,a2,a2,new A.p(f,a2,a2,a2,a2,a2,B.a6),a2,52,a2,a2,a2,a2,a2,52)
a1=A.c(e?"ENTER UP":"ENTER DOWN",a2,a2,a2,a2,a2,a2,C.fVx,a2,a2,a2)
B.d.u(j,A.a([B.af,A.q(a2,A.w(A.a([f,B.aj,a1,A.c(e?"BUY / CALL":"SELL / PUT",a2,a2,a2,a2,a2,a2,C.fN2,a2,a2,a2),B.S,new D.aD9(a0,a2),B.S,A.A(A.a([A.w(A.a([A.c(B.h.a1(D.c5(k.h(0,"durationMin")),0)+" min",a2,a2,a2,a2,a2,a2,B.jr,a2,a2,a2),A.c("Trade for",a2,a2,a2,a2,a2,a2,H.ad5,a2,a2,a2)],i),B.l,a2,B.e,B.i,0,B.p),A.q(a2,a2,B.f,B.jW,a2,a2,a2,30,a2,B.ri,a2,a2,a2,1),A.w(A.a([A.c(A.v(k.h(0,"worked"))+" of "+A.v(k.h(0,"of")),a2,a2,a2,a2,a2,a2,B.jr,a2,a2,a2),A.c("Worked lately",a2,a2,a2,a2,a2,a2,H.ad5,a2,a2,a2)],i),B.l,a2,B.e,B.i,0,B.p)],i),B.l,a2,B.bb,B.i,0,a2,a2)],i),B.l,a2,B.e,B.i,0,B.p),B.f,a2,a2,new A.p(a2,a2,a2,h,m,new A.a6(B.aU,B.b2,B.w,g,a2,a2),B.m),a2,a2,a2,a2,B.a2e,a2,a2,1/0)],i))}j.push(B.S)
m=u.j(0.15)
k=A.n(999)
k=A.a([A.q(a2,A.c(v,a2,a2,a2,a2,a2,a2,A.l(a2,a2,u,a2,a2,a2,a2,a2,a2,a2,a2,10.5,a2,a2,B.u,a2,a2,!0,a2,0.4,a2,a2,a2,a2,a2,a2),a2,a2,a2),B.f,a2,a2,new A.p(m,a2,a2,k,a2,a2,B.m),a2,a2,a2,a2,B.o9,a2,a2,a2),B.aX],i)
if(a5.h(0,"rsi")!=null){m=B.h.a1(D.c5(a5.h(0,"rsi")),0)
k.push(A.c("RSI "+m,a2,a2,a2,a2,a2,a2,A.l(a2,a2,a8?C.bT:C.bV,a2,a2,a2,a2,a2,a2,a2,a2,11,a2,a2,B.O,a2,a2,!0,a2,a2,a2,a2,a2,a2,a2,a2),a2,a2,a2))}if(a5.h(0,a3)!=null){m=D.c5(a5.h(0,a3))>=0?"+":""
h=B.h.a1(D.c5(a5.h(0,a3)),2)
B.d.u(k,A.a([B.ar,A.c("1h "+m+h+"%",a2,a2,a2,a2,a2,a2,A.l(a2,a2,D.c5(a5.h(0,a3))>=0?C.cH:C.d6,a2,a2,a2,a2,a2,a2,a2,a2,11,a2,a2,B.O,a2,a2,!0,a2,a2,a2,a2,a2,a2,a2,a2),a2,a2,a2)],i))}j.push(A.A(k,B.l,a2,B.e,B.i,0,a2,a2))
j.push(B.S)
j.push(A.cg(new D.fK_(t,a9)))
j.push(B.at)
m=A.c("Sellers",a2,a2,a2,a2,a2,a2,A.l(a2,a2,a8?C.bT:C.bV,a2,a2,a2,a2,a2,a2,a2,a2,10,a2,a2,a2,a2,a2,!0,a2,a2,a2,a2,a2,a2,a2,a2),a2,a2,a2)
k=B.h.a1(t,0)
k=A.c("Strength "+k+"/100",a2,a2,a2,a2,a2,a2,A.l(a2,a2,a8?C.cl:B.c,a2,a2,a2,a2,a2,a2,a2,a2,10.5,a2,a2,B.C,a2,a2,!0,a2,a2,a2,a2,a2,a2,a2,a2),a2,a2,a2)
j.push(A.A(A.a([m,B.aX,k,B.aX,A.c("Buyers",a2,a2,a2,a2,a2,a2,A.l(a2,a2,a8?C.bT:C.bV,a2,a2,a2,a2,a2,a2,a2,a2,10,a2,a2,a2,a2,a2,!0,a2,a2,a2,a2,a2,a2,a2,a2),a2,a2,a2)],i),B.l,a2,B.e,B.i,0,a2,a2))
j.push(B.N)
m=J.z(a4.h(b0,"open"),!0)?A.cJ(s,1,a2,A.U(s).c):s
m=J.Eg(m,b1?2:99)
k=m.$ti
m=new A.bQ(m,m.gI(0),k.k("bQ<aj.E>"))
k=k.k("aj.E")
while(m.B()){h=m.d
if(h==null)h=k.a(h)
g=A.V(B.no,u,a2,a2,a2,4.5)
f=a8?C.cl:B.c
j.push(new A.C(B.lb,new A.c1(B.aK,B.e,B.i,B.B,a2,B.p,a2,0,A.a([new A.C(B.hz,g,a2),I.wk,new A.bu(1,B.b8,A.c(h,a2,a2,a2,a2,a2,a2,new A.G(!0,f,a2,a2,a2,a2,12.3,a2,a2,a2,a2,a2,1.35,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2),a2,a2,a2),a2)],i),a2),a2))}if(J.z(a4.h(b0,"open"),!0))B.d.u(j,A.a([B.S,D.imx(a9,a5,a6)],i))
B.d.u(o,j)}if(b2!=null)o.push(new A.bK(B.a9,a2,a2,A.hy(C.bYX,A.c("Ask the tutor about "+w,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2),b2,a2),a2))
return A.q(a2,A.w(o,B.B,a2,B.e,B.i,0,B.p),B.f,a2,a2,new A.p(q,a2,n,p,l,a2,B.m),a2,a2,a2,B.d2,B.bD,a2,a2,a2)},
iva(a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1="activeSignal",a2=null,a3="explain",a4=J.a1(b0),a5=D.dF(a4.h(b0,"v2")),a6=x.f,a7=a6.b(a4.h(b0,a1))?D.dF(a4.h(b0,a1)):a2,a8=J.z(a4.h(b0,"open"),!0)
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
if(s)q=C.cH
else q=t==="SELL"?C.d6:B.bQ
p=a4?a2:a7.h(0,"checks")
if(p==null)p=a5.h(0,"checks")
x.g.a(p)
a6=J.cL(p==null?B.bN:p,a6)
a6=A.ct(a6,new D.fNI(),a6.$ti.k("M.E"),x.P)
o=A.B(a6,A.a3(a6).k("M.E"))
n=u?5:B.h.M(D.c5(a5.h(0,"passed")))
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
a6=A.n(16)
p=A.K(q.j(0.45),B.r,1)
j=A.c(r,a2,a2,a2,a2,a2,a2,A.l(a2,a2,q,a2,a2,a2,a2,a2,a2,a2,a2,22,a2,a2,B.u,a2,a2,!0,a2,0.4,a2,a2,a2,a2,a2,a2),a2,a2,a2)
i=q.j(0.16)
h=A.n(999)
g=u?"5 of 5":""+n+" of 5"
h=A.q(a2,A.c(g,a2,a2,a2,a2,a2,a2,A.l(a2,a2,q,a2,a2,a2,a2,a2,a2,a2,a2,10.5,a2,a2,B.u,a2,a2,!0,a2,a2,a2,a2,a2,a2,a2,a2),a2,a2,a2),B.f,a2,a2,new A.p(i,a2,a2,h,a2,a2,B.m),a2,a2,a2,a2,B.f8,a2,a2,a2)
if(u){i=a7.h(0,"et_time")
i=B.d.gal(A.v(i==null?"":i).split(", "))}else i=""
g=a9.a
f=x.p
i=A.a([A.A(A.a([j,B.aa,h,A.E(A.c(i,a2,1,B.a2,a2,a2,a2,A.l(a2,a2,g?C.bT:C.bV,a2,a2,a2,a2,a2,a2,a2,a2,10.5,a2,a2,B.O,a2,a2,!0,a2,a2,a2,a2,a2,a2,a2,a2),B.dR,a2,a2),1)],f),B.l,a2,B.e,B.i,0,a2,a2)],f)
if(v)B.d.u(i,A.a([B.at,A.c("WEAK SIGNAL \xb7 DO NOT ENTER",a2,a2,a2,a2,a2,a2,A.l(a2,a2,q,a2,a2,a2,a2,a2,a2,a2,a2,11.5,a2,a2,B.u,a2,a2,!0,a2,0.4,a2,a2,a2,a2,a2,a2),a2,a2,a2)],f))
if(u&&l!=null&&m!=null)B.d.u(i,A.a([B.S,new D.aLb(l,m,s,a2)],f))
i.push(B.at)
i.push(C.h7A)
if(u&&m!=null){u=D.LR(D.SL(m.aa()))
s=s?"higher":"lower"
i.push(A.c("Graded at "+u+" ET, 30 minutes after it was given: WIN if the price finished "+s+".",a2,a2,a2,a2,a2,a2,A.l(a2,a2,g?C.bT:C.bV,a2,a2,a2,a2,a2,a2,a2,a2,11,a2,a2,a2,a2,1.3,!0,a2,a2,a2,a2,a2,a2,a2,a2),a2,a2,a2))}i.push(B.N)
i.push(A.c(k,a2,a2,a2,a2,a2,a2,A.l(a2,a2,g?C.cl:B.c,a2,a2,a2,a2,a2,a2,a2,a2,12.3,a2,a2,a2,a2,1.35,!0,a2,a2,a2,a2,a2,a2,a2,a2),a2,a2,a2))
i.push(B.N)
for(u=o.length,e=0;e<o.length;o.length===u||(0,A.I)(o),++e){d=o[e]
s=J.a1(d)
j=J.z(s.h(d,"ok"),!0)?B.ea:B.Ir
j=A.V(j,J.z(s.h(d,"ok"),!0)?C.cH:C.d6,a2,a2,a2,15)
h=J.z(s.h(d,"ok"),!0)?"Yes":"No"
s=s.h(d,"text")
s=A.v(s==null?"":s)
a0=g?C.cl:B.c
i.push(new A.C(B.lb,new A.c1(B.aK,B.e,B.i,B.B,a2,B.p,a2,0,A.a([j,B.b7,new A.bu(1,B.b8,A.c(h+" \u2014 "+s,a2,a2,a2,a2,a2,a2,new A.G(!0,a0,a2,a2,a2,a2,11.8,a2,a2,a2,a2,a2,1.3,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2),a2,a2,a2),a2)],f),a2),a2))}return A.q(a2,A.w(i,B.B,a2,B.e,B.i,0,B.p),B.f,a2,a2,new A.p(a4,a2,p,a6,a2,a2,B.m),a2,a2,a2,a2,B.bg,a2,a2,1/0)},
fiu(d){var w=d.a,v=w<0?0:B.n.ao(w,1e6)
return""+B.n.ao(v,60)+":"+B.a.aY(B.n.v(B.n.F(v,60)),2,"0")},
imx(a4,a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e="dir",d="typicalMin",a0="entry",a1=a5.h(0,"decision"),a2=J.k(a1==null?"NO_DIRECTION":a1),a3=J.z(a5.h(0,e),"up")
a1=x.g.a(a5.h(0,"notes"))
if(a1==null)a1=B.bN
a1=J.b8(a1,new D.fA5(),x.N)
w=A.B(a1,a1.$ti.k("aj.E"))
A:{if("ENTER"===a2){a1=a3?C.cH:C.d6
break A}if("SKIP_WEAK"===a2||"WAIT_LATE"===a2){a1=C.d6
break A}a1=E.i1
break A}v=a6.h(0,d)!=null&&a6.h(0,e)!=null&&!J.z(a6.h(0,e),"none")&&a2!=="NO_DIRECTION"&&a2!=="CLOSED"
u=D.c5(a6.h(0,"of"))
t=D.c5(a6.h(0,"worked"))
s=u>0
r=s?t/u:0
q=J.z(a6.h(0,e),"up")?"up":"down"
p=a4.a
o=p?C.r2:C.r3
n=A.n(16)
m=A.K(a1.j(0.55),B.r,1.5)
l=A.V(B.mG,p?C.cl:B.c,f,f,f,16)
k=x.p
l=A.A(A.a([l,B.b7,A.c("DECISION AND DURATION",f,f,f,f,f,f,A.l(f,f,p?C.cl:B.c,f,f,f,f,f,f,f,f,11.5,f,f,B.u,f,f,!0,f,1,f,f,f,f,f,f),f,f,f)],k),B.l,f,B.e,B.i,0,f,f)
j=a1.j(0.14)
i=A.n(10)
h=a5.h(0,"action")
h=A.a([A.c(J.k(h==null?"":h),f,f,f,f,f,f,A.l(f,f,a1,f,f,f,f,f,f,f,f,13,f,f,B.u,f,f,!0,f,f,f,f,f,f,f,f),f,f,f)],k)
if(w.length!==0){g=B.d.gH(w)
B.d.u(h,A.a([B.cR,A.c(g,f,f,f,f,f,f,A.l(f,f,p?C.cl:B.c,f,f,f,f,f,f,f,f,12.3,f,f,f,f,1.35,!0,f,f,f,f,f,f,f,f),f,f,f)],k))}l=A.a([l,B.N,A.q(f,A.w(h,B.B,f,B.e,B.i,0,B.p),B.f,f,f,new A.p(j,f,f,i,f,f,B.m),f,f,f,f,B.iQ,f,f,1/0)],k)
if(a2==="ENTER"&&x.f.b(a5.h(0,a0)))B.d.u(l,A.a([B.N,A.A(A.a([A.E(D.hKw(a4,"Trade for",B.h.a1(D.c5(D.dF(a5.h(0,a0)).h(0,"durationMin")),0)+" min",a1),1),A.E(D.hKw(a4,"Enter at","next "+B.h.a1(D.c5(D.dF(a5.h(0,a0)).h(0,"candleMin")),0)+"-min candle",f),1)],k),B.l,f,B.e,B.i,0,f,f)],k))
if(v){a1=A.c("What this is based on",f,f,f,f,f,f,A.l(f,f,p?C.bT:C.bV,f,f,f,f,f,f,f,f,10.5,f,f,B.C,f,f,!0,f,f,f,f,f,f,f,f),f,f,f)
j=D.hpD(a4,B.fQ,"This "+q+" move started "+B.h.a1(D.c5(a6.h(0,"ageMin")),0)+" min ago.",f)
i=q==="up"?"Up":"Down"
k=A.a([B.S,a1,B.at,j,D.hpD(a4,B.at7,i+" moves on this market usually end after about "+B.h.a1(D.c5(a6.h(0,d)),0)+" min.",f)],k)
if(s){a1=B.h.a1(u,0)
s=B.h.a1(t,0)
j=B.h.S(r*100)
i=r>=0.5
h=i?"Reliable enough.":"Under half: unreliable."
i=i?C.cH:C.d6
k.push(D.hpD(a4,B.q5,"Of the last "+a1+" "+q+" moves here, "+s+" really went "+q+" ("+j+"%). "+h,i))}B.d.u(l,k)}l.push(B.at)
l.push(A.c("Estimates from this market's recent moves, not promises.",f,f,f,f,f,f,A.l(f,f,p?C.bT:C.bV,f,f,f,f,f,f,f,f,10.5,f,f,f,f,f,!0,f,f,f,f,f,f,f,f),f,f,f))
return A.q(f,A.w(l,B.B,f,B.e,B.i,0,B.p),B.f,f,f,new A.p(o,f,m,n,f,f,B.m),f,f,f,f,B.bg,f,f,1/0)},
hpD(d,e,f,g){var w,v=null,u=g==null
if(u)w=d.a?C.bT:C.bV
else w=g
w=A.V(e,w,v,v,v,14)
if(u)u=d.a?C.cl:B.c
else u=g
return new A.C(B.HJ,A.A(A.a([w,B.b7,A.E(A.c(f,v,v,v,v,v,v,A.l(v,v,u,v,v,v,v,v,v,v,v,12,v,v,v,v,1.35,!0,v,v,v,v,v,v,v,v),v,v,v),1)],x.p),B.B,v,B.e,B.i,0,v,v),v)},
hKw(d,e,f,g){var w=null,v=d.a,u=A.c(e,w,w,w,w,w,w,A.l(w,w,v?C.bT:C.bV,w,w,w,w,w,w,w,w,10.5,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)
if(g==null)v=v?C.cl:B.c
else v=g
return A.w(A.a([u,A.c(f,w,w,w,w,w,w,A.l(w,w,v,w,w,w,w,w,w,w,w,13.5,w,w,B.C,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),B.B,w,B.e,B.i,0,B.p)},
hNl(d){var w=J.a1(d),v=D.c5(w.h(d,"price"))
if(!J.z(w.h(d,"kind"),"forex"))return D.eg(v,!0,!1)
return B.h.a1(v,v>=100?3:5)},
hmg(d,e){return new D.Y3(d,e,null)},
hIN(){var w=Math.max(0,$.aMK-1)
$.aMK=w
if(w===0){B.d.a7($.DJ)
$.ahJ=!1
$.hoX=""
$.fre=$.fre+1}},
eLb(d){var w
x.g.a(d)
w=d==null?B.bN:d
w=J.cL(w,x.f)
w=A.ct(w,new D.eLc(),w.$ti.k("M.E"),x.P)
w=A.B(w,A.a3(w).k("M.E"))
return w},
hIh(d){var w=J.t(d,"kind")
switch(J.k(w==null?"":w)){case"forex":w="Forex"
break
case"crypto":w="Crypto"
break
default:w="Stocks"
break}return w},
auv:function auv(d){this.a=d},
aI3:function aI3(d,e){var _=this
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
eKi:function eKi(d){this.a=d},
eKj:function eKj(d){this.a=d},
eJz:function eJz(d,e){this.a=d
this.b=e},
eJQ:function eJQ(d,e){this.a=d
this.b=e},
eJB:function eJB(d,e){this.a=d
this.b=e},
eJP:function eJP(d,e){this.a=d
this.b=e},
eJS:function eJS(d,e){this.a=d
this.b=e},
eJT:function eJT(d,e){this.a=d
this.b=e},
eJy:function eJy(){},
eJA:function eJA(d,e,f){this.a=d
this.b=e
this.c=f},
eK0:function eK0(){},
eJZ:function eJZ(d){this.a=d},
eK_:function eK_(d){this.a=d},
eK1:function eK1(d,e){this.a=d
this.b=e},
eK2:function eK2(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eJI:function eJI(d){this.a=d},
eJV:function eJV(d){this.a=d},
eJW:function eJW(d,e){this.a=d
this.b=e},
eJX:function eJX(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eJU:function eJU(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eJY:function eJY(){},
eKh:function eKh(d){this.a=d},
eKc:function eKc(d){this.a=d},
eKd:function eKd(d){this.a=d},
eJm:function eJm(d){this.a=d},
eJn:function eJn(d){this.a=d},
eJo:function eJo(d){this.a=d},
eJp:function eJp(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eJk:function eJk(d){this.a=d},
eJl:function eJl(d,e){this.a=d
this.b=e},
eJq:function eJq(d){this.a=d},
eJr:function eJr(d){this.a=d},
eK8:function eK8(){},
eK9:function eK9(){},
eKa:function eKa(){},
eKb:function eKb(){},
eK4:function eK4(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eK3:function eK3(d){this.a=d},
eK7:function eK7(d,e){this.a=d
this.b=e},
eK6:function eK6(d){this.a=d},
eJD:function eJD(){},
eJE:function eJE(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eJF:function eJF(d){this.a=d},
eJH:function eJH(){},
eJG:function eJG(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
eJC:function eJC(d,e){this.a=d
this.b=e},
eJu:function eJu(d,e){this.a=d
this.b=e},
eJt:function eJt(d,e){this.a=d
this.b=e},
eJv:function eJv(d){this.a=d},
eJs:function eJs(d){this.a=d},
eJw:function eJw(){},
eJi:function eJi(d){this.a=d},
eJj:function eJj(){},
eJK:function eJK(){},
eJL:function eJL(){},
eJM:function eJM(){},
eJJ:function eJJ(){},
eJN:function eJN(d,e,f){this.a=d
this.b=e
this.c=f},
eJO:function eJO(d){this.a=d},
eJR:function eJR(d,e){this.a=d
this.b=e},
eJx:function eJx(d,e){this.a=d
this.b=e},
eJh:function eJh(d){this.a=d},
eKf:function eKf(){},
eKg:function eKg(d){this.a=d},
eKe:function eKe(d){this.a=d},
eJg:function eJg(d){this.a=d},
eJf:function eJf(d){this.a=d},
Re:function Re(d,e,f){this.a=d
this.c=e
this.d=f},
fNh:function fNh(d,e){this.a=d
this.b=e},
a_W:function a_W(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
bff:function bff(){this.c=this.a=this.d=null},
cYi:function cYi(d,e){this.a=d
this.b=e},
cYr:function cYr(d){this.a=d},
cYp:function cYp(d,e){this.a=d
this.b=e},
cYn:function cYn(d,e){this.a=d
this.b=e},
cYo:function cYo(d,e){this.a=d
this.b=e},
cYm:function cYm(d){this.a=d},
cYl:function cYl(d){this.a=d},
cYq:function cYq(d){this.a=d},
cYk:function cYk(d){this.a=d},
cYj:function cYj(d){this.a=d},
bfg:function bfg(d,e,f,g,h,i,j,k,l){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.w=j
_.x=k
_.a=l},
cYs:function cYs(d){this.a=d},
cYu:function cYu(d,e){this.a=d
this.b=e},
cYt:function cYt(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
bxh:function bxh(d,e,f){this.b=d
this.c=e
this.a=f},
fkH:function fkH(){},
z9:function z9(d,e,f){this.a=d
this.b=e
this.c=f},
fzg:function fzg(d){this.a=d},
fEJ:function fEJ(){},
RK:function RK(d){this.a=d},
fJ3:function fJ3(){},
fFP:function fFP(){},
fNb:function fNb(){},
P_:function P_(d,e){this.c=d
this.a=e},
aGZ:function aGZ(d){var _=this
_.d=null
_.e=d
_.f=!0
_.r=!1
_.x=_.w=null
_.Q=_.z=_.y=!1
_.c=_.a=_.as=null},
e9U:function e9U(d){this.a=d},
e9m:function e9m(d,e){this.a=d
this.b=e},
e9l:function e9l(){},
e9B:function e9B(d,e,f){this.a=d
this.b=e
this.c=f},
e9A:function e9A(){},
e9H:function e9H(d,e){this.a=d
this.b=e},
e9I:function e9I(d,e,f){this.a=d
this.b=e
this.c=f},
e9S:function e9S(d){this.a=d},
e9T:function e9T(d){this.a=d},
e9f:function e9f(d,e){this.a=d
this.b=e},
e9y:function e9y(){},
e9z:function e9z(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e9j:function e9j(d){this.a=d},
e9k:function e9k(){},
e9g:function e9g(){},
e9h:function e9h(d){this.a=d},
e9i:function e9i(d,e){this.a=d
this.b=e},
e9s:function e9s(){},
e9F:function e9F(d){this.a=d},
e9G:function e9G(d){this.a=d},
e9D:function e9D(){},
e9E:function e9E(d){this.a=d},
e9p:function e9p(){},
e9r:function e9r(){},
e9q:function e9q(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e9o:function e9o(d,e){this.a=d
this.b=e},
e9n:function e9n(d,e){this.a=d
this.b=e},
e9d:function e9d(){},
e9e:function e9e(){},
e9J:function e9J(d){this.a=d},
e9v:function e9v(){},
e9w:function e9w(d,e,f){this.a=d
this.b=e
this.c=f},
e9x:function e9x(d){this.a=d},
e9u:function e9u(d){this.a=d},
e9t:function e9t(d){this.a=d},
e9Q:function e9Q(){},
e9R:function e9R(d){this.a=d},
e9P:function e9P(d){this.a=d},
e9O:function e9O(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
e9L:function e9L(){},
e9N:function e9N(){},
e9M:function e9M(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
e9K:function e9K(d){this.a=d},
e9c:function e9c(d){this.a=d},
e9b:function e9b(d){this.a=d},
e9C:function e9C(){},
aBQ:function aBQ(d,e,f){this.c=d
this.d=e
this.a=f},
bfX:function bfX(){this.c=this.a=this.d=null},
dbi:function dbi(d){this.a=d},
dbh:function dbh(){},
fJZ:function fJZ(){},
fK_:function fK_(d,e){this.a=d
this.b=e},
fNI:function fNI(){},
aLb:function aLb(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bwD:function bwD(){this.c=this.a=this.d=null},
fix:function fix(d){this.a=d},
fiw:function fiw(){},
fiv:function fiv(){},
aD9:function aD9(d,e){this.c=d
this.a=e},
biP:function biP(){this.c=this.a=this.d=null},
djN:function djN(d){this.a=d},
djM:function djM(){},
fA5:function fA5(){},
cI:function cI(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
uD:function uD(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
Y3:function Y3(d,e,f){this.c=d
this.d=e
this.a=f},
a01:function a01(d,e){this.a=d
this.b=e},
aI4:function aI4(d,e,f,g,h,i,j,k,l){var _=this
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
eKt:function eKt(){},
eLh:function eLh(d){this.a=d},
eLg:function eLg(){},
eLi:function eLi(d){this.a=d},
eLj:function eLj(d){this.a=d},
eLf:function eLf(d,e){this.a=d
this.b=e},
eLk:function eLk(d){this.a=d},
eLc:function eLc(){},
eKO:function eKO(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eKX:function eKX(d){this.a=d},
eKw:function eKw(d){this.a=d},
eKx:function eKx(d,e){this.a=d
this.b=e},
eKy:function eKy(d){this.a=d},
eKz:function eKz(d){this.a=d},
eKv:function eKv(d,e){this.a=d
this.b=e},
eKu:function eKu(d,e){this.a=d
this.b=e},
eKW:function eKW(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eKV:function eKV(){},
eL9:function eL9(){},
eLa:function eLa(){},
eKC:function eKC(d){this.a=d},
eKD:function eKD(){},
eKE:function eKE(){},
eKp:function eKp(d,e){this.a=d
this.b=e},
eKq:function eKq(){},
eKr:function eKr(){},
eKs:function eKs(){},
eKY:function eKY(d){this.a=d},
eLd:function eLd(d){this.a=d},
eLe:function eLe(d,e){this.a=d
this.b=e},
eKB:function eKB(d){this.a=d},
eKA:function eKA(d,e){this.a=d
this.b=e},
eKU:function eKU(d,e){this.a=d
this.b=e},
eKQ:function eKQ(d,e){this.a=d
this.b=e},
eKR:function eKR(d,e){this.a=d
this.b=e},
eKP:function eKP(d,e,f){this.a=d
this.b=e
this.c=f},
eKS:function eKS(d,e){this.a=d
this.b=e},
eKT:function eKT(d){this.a=d},
eKF:function eKF(d,e,f){this.a=d
this.b=e
this.c=f},
eKN:function eKN(d){this.a=d},
eKG:function eKG(){},
eKH:function eKH(){},
eKI:function eKI(){},
eKJ:function eKJ(){},
eKK:function eKK(){},
eKL:function eKL(){},
eKM:function eKM(){},
eL2:function eL2(d,e){this.a=d
this.b=e},
eL3:function eL3(){},
eL5:function eL5(d,e){this.a=d
this.b=e},
eL1:function eL1(d,e){this.a=d
this.b=e},
eL4:function eL4(d){this.a=d},
eL6:function eL6(d){this.a=d},
eL0:function eL0(d){this.a=d},
eL7:function eL7(d){this.a=d},
eL_:function eL_(d,e){this.a=d
this.b=e},
eL8:function eL8(d,e){this.a=d
this.b=e},
eKZ:function eKZ(){},
eKl:function eKl(d){this.a=d},
eKm:function eKm(d,e){this.a=d
this.b=e},
eKk:function eKk(d,e){this.a=d
this.b=e},
eKn:function eKn(d,e){this.a=d
this.b=e},
eKo:function eKo(d){this.a=d},
a13:function a13(d,e,f,g,h,i,j,k,l,m){var _=this
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
bm_:function bm_(d){var _=this
_.x=_.w=_.r=_.f=_.e=_.d=$
_.y=d
_.c=_.a=_.z=null},
dwo:function dwo(){},
dwp:function dwp(){},
dwm:function dwm(){},
dwn:function dwn(){},
dwk:function dwk(d){this.a=d},
dwl:function dwl(d){this.a=d},
dwj:function dwj(d){this.a=d},
dwc:function dwc(){},
dwd:function dwd(){},
dwe:function dwe(d){this.a=d},
dwf:function dwf(d){this.a=d},
dwa:function dwa(d,e,f){this.a=d
this.b=e
this.c=f},
dwg:function dwg(d){this.a=d},
dwh:function dwh(d,e){this.a=d
this.b=e},
dwi:function dwi(d,e){this.a=d
this.b=e},
dwb:function dwb(d,e,f){this.a=d
this.b=e
this.c=f},
aQ6:function aQ6(){}},C,H,M,S,T,U,F,N,O,V,W
J=c[1]
A=c[0]
B=c[2]
P=c[125]
Q=c[211]
E=c[250]
I=c[148]
R=c[184]
K=c[238]
G=c[249]
L=c[209]
D=a.updateHolder(c[21],D)
C=c[248]
H=c[150]
M=c[253]
S=c[126]
T=c[156]
U=c[252]
F=c[236]
N=c[48]
O=c[251]
V=c[194]
W=c[133]
D.auv.prototype={
R(){return new D.aI3(A.a([],x.t),A.ms(0,null,null))}}
D.aI3.prototype={
Z(){var w=this
w.a4()
$.aMK=$.aMK+1
w.a.toString
w.afi()
w.Bm()
w.z6(!1).bD(new D.eKi(w),x.H)
w.ch=A.d5(B.o2,new D.eKj(w))},
Bm(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m
var $async$Bm=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.aB(),$async$Bm)
case 7:q=e
p=A.aV(J.t(q.a,"ngmy_signal_grid_status_cache"))
if(p==null||r.c==null||r.d!=null){w=1
break}o=A.a0(x.f.a(B.V.aP(0,p,null)),x.N,x.z)
r.l(new D.eJz(r,o))
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
return A.i($async$Bm,v)},
a3R(d){return this.cAc(d)},
cAc(d){var w=0,v=A.j(x.H),u=1,t=[],s,r,q
var $async$a3R=A.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:u=3
w=6
return A.b(A.aB(),$async$a3R)
case 6:s=f
w=7
return A.b(s.aB("String","ngmy_signal_grid_status_cache",B.V.au(d,null)),$async$a3R)
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
return A.i($async$a3R,v)},
t(){var w=this.ch
if(w!=null)w.a2(0)
this.as.t()
D.hIN()
this.a3()},
csU(d){var w=this
if(!w.at&&d>0){w.at=!0
$.aS.U$.push(new D.eJQ(w,d))}return w.as},
afi(){var w=0,v=A.j(x.H),u=1,t=[],s=this,r,q,p,o
var $async$afi=A.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:u=3
w=6
return A.b(A.aB(),$async$afi)
case 6:r=e
q=A.aV(J.t(r.a,"ngmy_signal_grid_market"))
if(q!=null&&q.length!==0&&s.c!=null&&s.Q==null)s.l(new D.eJB(s,q))
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
return A.i($async$afi,v)},
a2J(d){return this.csq(d)},
csq(d){var w=0,v=A.j(x.H),u=1,t=[],s=this,r,q,p
var $async$a2J=A.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:s.l(new D.eJP(s,d))
u=3
w=6
return A.b(A.aB(),$async$a2J)
case 6:r=f
w=7
return A.b(r.aB("String","ngmy_signal_grid_market",d),$async$a2J)
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
return A.i($async$a2J,v)},
z6(d){return this.cxM(d)},
cxM(d){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$z6=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.x?null:t.bWe()
w=3
return A.b(A.fJ(A.J(["action","paStatus","live",d],x.N,x.z),!1,!1,!1,!1,B.x6),$async$z6)
case 3:q=f
if(t.c==null){w=1
break}t.l(new D.eJS(t,q))
if(q!=null&&J.z(J.t(q,"ok"),!0))t.a3R(q)
w=r!=null?4:5
break
case 4:w=6
return A.b(r,$async$z6)
case 6:s=f
if(t.c!=null&&s!=null&&t.d!=null)t.l(new D.eJT(t,s))
case 5:case 1:return A.h(u,v)}})
return A.i($async$z6,v)},
ZD(d){return this.bWf(d)},
bWe(){return this.ZD(0)},
bWf(d){var w=0,v=A.j(x.i),u,t,s
var $async$ZD=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(A.fJ(A.J(["action","paLog","limit",30,"beforeId",d],x.N,x.z),!1,!1,!1,!1,B.hc),$async$ZD)
case 3:s=f
if(s==null||!J.z(J.t(s,"ok"),!0)){u=null
w=1
break}t=x.g.a(J.t(s,"rows"))
if(t==null)t=B.bN
t=J.cL(t,x.f)
t=A.ct(t,new D.eJy(),t.$ti.k("M.E"),x.P)
t=A.B(t,A.a3(t).k("M.E"))
u=t
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$ZD,v)},
a_B(d){return this.c8y(d)},
c8x(){return this.a_B(!1)},
c8y(d){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a_B=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=d&&J.cM(t.e)?J.t(J.TA(t.e),"id"):0
w=3
return A.b(t.ZD(s==null?0:s),$async$a_B)
case 3:r=f
if(t.c==null||r==null){w=1
break}t.l(new D.eJA(t,d,r))
case 1:return A.h(u,v)}})
return A.i($async$a_B,v)},
zs(d){return this.cCK(d)},
cCK(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$zs=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:p=t.d
o=D.dF(p==null?null:J.t(p,"state"))
w=d&&J.z(o.h(0,"brakePaused"),!0)?3:4
break
case 3:p=t.c
p.toString
w=5
return A.b(A.cf(null,null,!0,null,new D.eK0(),p,null,!0,!0,x.y),$async$zs)
case 5:if(f!==!0){w=1
break}case 4:s=t.d
t.l(new D.eK1(t,d))
w=6
return A.b(A.fJ(A.J(["action","paSet","enabled",d],x.N,x.z),!1,!1,!1,!1,B.hc),$async$zs)
case 6:r=f
if(t.c==null){w=1
break}p=r==null
q=J.z(p?null:J.t(r,"ok"),!0)
t.l(new D.eK2(t,q,r,s))
if(q)p=d?"Agent started.":"Agent stopped."
else{p=p?null:J.t(r,"error")
p=J.k(p==null?"Could not change it.":p)}t.b4h(p,q?C.cH:C.d6)
if(q)t.c8x()
case 1:return A.h(u,v)}})
return A.i($async$zs,v)},
cnh(){var w=this.c
w.toString
A.a8(w,!1).c9(A.e4(new D.eJI(this),!1,null,x.H))},
a42(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$a42=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t.l(new D.eJV(t))
w=3
return A.b(A.fJ(A.J(["action","paCheck"],x.N,x.z),!1,!1,!1,!1,B.o2),$async$a42)
case 3:s=e
if(t.c==null){w=1
break}t.l(new D.eJW(t,s))
r=s==null
if(!J.z(r?null:J.t(s,"ok"),!0)){r=r?null:J.t(s,"error")
t.b4h(J.k(r==null?"The check did not finish.":r),C.d6)
w=1
break}r=t.c
r.toString
r=A.Q(r).ax.a===B.dg
s.toString
q=D.dF(D.dF(J.t(s,"state")).h(0,"snapshot"))
p=t.c
p.toString
o=r?C.tc:C.ta
w=4
return A.b(A.bV(o,null,new D.eJX(t,new D.RK(r),q,s),p,!0,!0,!0,B.aUT,!1,!1,x.H),$async$a42)
case 4:case 1:return A.h(u,v)}})
return A.i($async$a42,v)},
cAU(d,e,f,g){var w,v,u,t,s,r=null,q=D.fEI(e)
B.d.b_(q,new D.eJY())
w=d.a
v=w?C.oQ:C.oL
v=A.at(A.q(r,r,B.f,r,r,new A.p(v,r,r,A.n(9),r,r,B.m),r,4,r,r,r,r,r,40),r,r,r)
u=A.c("What the agent sees right now",r,r,r,r,r,r,A.l(r,r,w?C.cl:B.c,r,r,r,r,r,r,r,r,19,r,r,B.u,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
t=J.z(f.h(0,"enabled"),!0)?" (next one "+D.hMo()+")":" (the agent is stopped, so none will be made)"
v=A.a([v,B.aB,u,B.at,A.c("Check now only looks. It never buys or sells. Trades are made only by the automatic check every 5 minutes"+t+".",r,r,r,r,r,r,A.l(r,r,w?C.bT:C.bV,r,r,r,r,r,r,r,r,12.5,r,r,r,r,1.35,!0,r,r,r,r,r,r,r,r),r,r,r),B.af],x.p)
for(w=q.length,s=0;s<q.length;q.length===w||(0,A.I)(q),++s)v.push(D.hNr(d,q[s],!0,r))
return A.co(v,g,r,B.aoo,r,r,B.ah,!1)},
b4h(d,e){var w=null
this.c.L(x.q).f.T(A.b2(w,w,w,e,w,B.t,w,A.c(d,w,w,w,w,w,w,w,w,w,w),w,B.Z,w,w,w,w,w,w,w,w,w,w))},
C(d){var w,v=this,u=null,t=A.Q(d).ax.a===B.dg,s=new D.RK(t),r=t?C.tc:C.ta,q=t?C.tc:C.ta
q=A.a([q,t?C.Oe:C.O6],x.O)
w=v.chR(s)
if(v.f)t=B.l2
else{if(v.d==null){t=v.ay
t=A.a([v.abr(s,t==null?"Nothing to show yet.":t,B.b0)],x.p)}else t=v.bJB(0,s)
t=A.Gl(A.co(t,u,u,C.aoF,u,u,B.ah,!1),u,new D.eKh(v))}return A.c6(u,r,A.q(u,A.bn(!0,A.w(A.a([w,A.E(t,1)],x.p),B.l,u,B.e,B.i,0,B.p),!0,!1,B.ag,!0,!0),B.f,u,u,new A.p(u,u,u,u,u,new A.a6(B.aU,B.b2,B.w,q,u,u),B.m),u,u,u,u,u,u,u,u),u,!1,!1,u,u)},
chR(d){var w,v,u,t,s,r=this,q=null,p=r.d,o=D.dF(p==null?q:J.t(p,"state")),n=J.z(o.h(0,"brakePaused"),!0),m=J.z(o.h(0,"enabled"),!0)&&!n
p=r.b4f(d,B.eE,new D.eKc(r))
w=d.a
v=x.p
u=A.a([A.c("Signal Grid",q,1,B.a2,q,q,q,A.l(q,q,w?C.cl:B.c,q,q,q,q,q,q,q,q,17,q,q,B.C,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],v)
if(r.d==null)u.push(A.c("Trading agent",q,1,B.a2,q,q,q,A.l(q,q,w?C.bT:C.bV,q,q,q,q,q,q,q,q,11.5,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q))
else{if(n)t=C.d6
else if(m)t=C.cH
else t=w?C.bT:C.bV
t=A.V(B.no,t,q,q,q,7)
if(n)s="Paused"
else s=m?"Running":"Stopped"
if(n)w=C.d6
else if(m)w=C.cH
else w=w?C.bT:C.bV
u.push(A.A(A.a([t,B.da,new A.d1(1,B.c9,A.c(s,q,1,B.a2,q,q,q,A.l(q,q,w,q,q,q,q,q,q,q,q,11.5,q,q,B.C,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),q)],v),B.l,q,B.e,B.P,0,q,q))}p=A.a([p,B.ar,A.E(A.A(A.a([new A.d1(1,B.c9,A.w(u,B.B,q,B.e,B.i,0,B.p),q)],v),B.l,q,B.e,B.i,0,q,q),1)],v)
if(r.d!=null)B.d.u(p,A.a([B.aa,r.bcG(d,"options","Options",B.fP,B.az),B.aa,r.bcG(d,"scalper","Scalper",B.ru,B.as)],v))
p.push(B.aa)
p.push(r.b4f(d,B.mF,r.r?q:new D.eKd(r)))
return new A.C(B.hd,A.A(p,B.l,q,B.e,B.i,0,q,q),q)},
bJB(c4,c5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9=this,c0=null,c1="asset",c2="liveError",c3=b9.d
c3.toString
w=J.a1(c3)
v=D.dF(w.h(c3,"state"))
u=D.dF(w.h(c3,"config"))
t=D.dF(v.h(0,"snapshot"))
s=x.f
r=s.b(v.h(0,"shadow"))?D.dF(v.h(0,"shadow")):c0
q=D.fEI(t)
p=A.U(q).k("X<1>")
o=A.B(new A.X(q,new D.eJm(r),p),p.k("M.E"))
n=o.length===0?q:o
m=b9.Q!=null&&B.d.aR(n,new D.eJn(b9))?b9.Q:c0
if(m==null){p=r==null?c0:r.h(0,"symbol")
if(p==null)p=t.h(0,c1)
l=p==null?c0:J.k(p)}else l=m
k=B.d.ds(n,new D.eJo(l),new D.eJp(q,l,n,t))
p=r==null
j=p?c0:B.d.ds(q,new D.eJq(r),new D.eJr(k))
p=!p
i=p&&J.z(r.h(0,"symbol"),J.t(k,c1))?r:c0
h=b9.ca0(c5,c3,n,k,r)
g=D.dF(w.h(c3,"market"))
f=J.a1(k)
e=f.h(k,c1)
d=J.k(e==null?"SPY":e)
a0=B.a.q(d,"/")
a1=D.bG2(k)
a2=D.c5(f.h(k,"price"))
a3=a1.length!==0?D.c5(J.t(B.d.gH(a1),"c")):0
a4=a3===0?0:(a2-a3)/a3*100
a5=a4>=0
if(a0)a6=!0
else{e=f.h(k,"open")
if(e==null)e=g.h(0,"stockOpen")
a6=e==null?g.h(0,"open"):e}if(a0)a7="Crypto \xb7 the agent trades it on Saturday and Sunday only"
else{e=J.kU(a6)
if(e.A(a6,!0))a7="Stock market open \xb7 the agent trades it on weekdays \xb7 closes 4:00 PM ET"
else{e=e.A(a6,!1)?"Stock market closed"+b9.cOn(g.h(0,"nextOpen")):""
a7=e}}a8=D.fEp(d)
e=c5.a
a9=e?B.c.j(0.92):C.ib
b0=A.n(22)
b1=A.K(e?B.c:C.nf,B.r,1)
b2=A.a([new A.ac(0,B.H,c5.gIq(),B.cy,12)],x.V)
b3=D.bEF(d,30)
b4=a0?d:d+"/USD"
b4=A.c(b4,c0,c0,c0,c0,c0,c0,A.l(c0,c0,e?C.cl:B.c,c0,c0,c0,c0,c0,c0,c0,c0,17,c0,c0,B.C,c0,c0,!0,c0,c0,c0,c0,c0,c0,c0,c0),c0,c0,c0)
f=f.h(k,"name")
f=J.k(f==null?a8.a:f)
b5=x.p
f=A.A(A.a([b3,B.ar,b4,B.b7,new A.d1(1,B.c9,A.c(f,c0,c0,B.a2,c0,c0,c0,A.l(c0,c0,e?C.bT:C.bV,c0,c0,c0,c0,c0,c0,c0,c0,13,c0,c0,c0,c0,c0,!0,c0,c0,c0,c0,c0,c0,c0,c0),c0,c0,c0),c0)],b5),B.l,c0,B.e,B.i,0,c0,c0)
b3=a2===0?"\u2014":D.eg(a2,!1,!1)
b3=A.a([A.E(new A.d7(B.dn,B.a5,B.f,A.c(b3,c0,c0,c0,c0,c0,c0,A.l(c0,c0,e?C.cl:B.c,c0,c0,c0,c0,c0,c0,c0,G.AD,34,c0,c0,B.O,c0,c0,!0,c0,-1,c0,c0,c0,c0,c0,c0),c0,c0,c0),c0),1)],b5)
if(a1.length>1){b4=(a5?C.cH:C.d6).j(0.14)
b6=A.n(10)
b7=a5?L.a4n:B.Il
b7=A.V(b7,a5?C.cH:C.d6,c0,c0,c0,20)
b8=B.h.a1(Math.abs(a4),2)
b3.push(A.q(c0,A.A(A.a([b7,A.c(b8+"%",c0,c0,c0,c0,c0,c0,A.l(c0,c0,a5?C.cH:C.d6,c0,c0,c0,c0,c0,c0,c0,c0,13,c0,c0,B.C,c0,c0,!0,c0,c0,c0,c0,c0,c0,c0,c0),c0,c0,c0)],b5),B.l,c0,B.e,B.P,0,c0,c0),B.f,c0,c0,new A.p(b4,c0,c0,b6,c0,c0,B.m),c0,c0,c0,c0,B.h0,c0,c0,c0))}f=A.a([f,B.N,A.A(b3,B.l,c0,B.e,B.i,0,c0,c0)],b5)
if(a7.length!==0){if(J.z(a6,!0))b3=C.cH
else b3=e?C.bT:C.bV
b3=A.V(B.no,b3,c0,c0,c0,7)
b4=a1.length>1?"  \xb7  change over 4H":""
B.d.u(f,A.a([B.at,A.A(A.a([b3,B.b7,new A.d1(1,B.c9,A.c(a7+b4,c0,c0,B.a2,c0,c0,c0,A.l(c0,c0,e?C.bT:C.bV,c0,c0,c0,c0,c0,c0,c0,c0,12,c0,c0,c0,c0,c0,!0,c0,c0,c0,c0,c0,c0,c0,c0),c0,c0,c0),c0)],b5),B.l,c0,B.e,B.i,0,c0,c0)],b5))}h=A.a([h,A.q(c0,A.w(f,B.B,c0,B.e,B.i,0,B.p),B.f,c0,c0,new A.p(a9,c0,b1,b0,b2,c0,B.m),c0,c0,c0,B.dW,B.f_,c0,c0,c0)],b5)
f=u.h(0,"problem")
if(J.k(f==null?"":f).length!==0)h.push(b9.abr(c5,J.k(u.h(0,"problem")),E.i1))
f=w.h(c3,c2)
if(J.k(f==null?"":f).length!==0)h.push(b9.abr(c5,J.k(w.h(c3,c2)),C.d6))
if(J.z(v.h(0,"brakePaused"),!0)){f=D.dF(w.h(c3,"ticket")).h(0,"totalBrakeUsd")
f=B.h.a1(D.c5(f==null?200:f),0)
a9=v.h(0,"brakeReason")
h.push(b9.abr(c5,"Paused by the $"+f+" brake. "+A.v(a9==null?"":a9)+y.g,C.d6))}h.push(b9.bMB(c5,k,i))
h.push(b9.bJe(c5,c3,v,t))
if(s.b(w.h(c3,"pace")))h.push(b9.aCb(c5,c3))
if(p){j.toString
h.push(b9.ctl(c5,r,j,D.dF(w.h(c3,"ticket")),D.dF(t.h(0,"held"))))}h.push(b9.aBv(c5,v))
h.push(b9.bJ3(c5,v,c3))
h.push(b9.cLm(c5,c3))
h.push(b9.bGc(c5))
h.push(b9.czN(c5,c3))
c3=e?B.c.j(0.92):C.ib
w=A.n(16)
s=A.K(e?B.c:C.nf,B.r,1)
p=A.V(B.kq,C.cH,c0,c0,c0,18)
f=J.z(u.h(0,"ordersSwitchOn"),!0)?"on":"off"
h.push(A.q(c0,A.A(A.a([p,B.aa,A.E(A.c("No order is ever sent to Alpaca. Order switch: "+f+".",c0,c0,c0,c0,c0,c0,A.l(c0,c0,e?C.bT:C.bV,c0,c0,c0,c0,c0,c0,c0,c0,11.5,c0,c0,c0,c0,1.3,!0,c0,c0,c0,c0,c0,c0,c0,c0),c0,c0,c0),1)],b5),B.l,c0,B.e,B.i,0,c0,c0),B.f,c0,c0,new A.p(c3,c0,s,w,c0,c0,B.m),c0,c0,c0,H.anK,B.ep,c0,c0,c0))
return h},
cKi(d,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=null,g=D.dF(J.t(a0,"market")),f=x.g,e=f.a(g.h(0,"activeMarkets"))
if(e==null)e=B.bN
w=x.N
e=J.b8(e,new D.eK8(),w)
v=A.B(e,e.$ti.k("aj.E"))
f=f.a(g.h(0,"todaysList"))
if(f==null)f=B.bN
w=J.b8(f,new D.eK9(),w)
u=A.B(w,w.$ti.k("aj.E"))
t=J.z(g.h(0,"weekend"),!0)
if(a1==null)s=h
else{f=a1.h(0,"symbol")
s=f==null?h:J.k(f)}r=s!=null&&u.length!==0&&!B.d.q(u,s)
q=new A.X(v,new D.eKa(),A.U(v).k("X<1>")).gI(0)
f=v.length
if(f!==0){f=f-q>0
e=""+q
p=f?"TRADING NOW: 10 STOCKS + "+e+" CRYPTO":"TRADING NOW: ALL "+e+" CRYPTO"
if(f)f=", plus the 10 stocks while the stock market is open"
else f=t?" (stocks trade on weekdays)":" (the stocks trade 9:30 AM to 4:00 PM ET)"
o="The 15 liquid crypto majors, around the clock"+f+". All of them are checked at the same time, every 5 minutes, and the agent buys the valid entry with the strongest 1-hour move. One trade at a time, at most 20 trades today (a maximum, never a target)."}else{f=A.U(u).k("X<1>")
o="Crypto trades around the clock and the 10 stocks ("+A.pj(new A.X(u,new D.eKb(),f),10,f.k("M.E")).aL(0,", ")+") while the stock market is open. The market list is loading."
p="NO MARKET TRADED RIGHT NOW"}f=(v.length===0?h:B.d.gH(v))==null
n=f?E.i1:C.cH
e=d.a
w=e?B.c.j(0.92):C.ib
m=A.n(22)
l=A.K(n.j(0.55),B.r,1)
k=A.V(!f?B.IM:B.vt,n,h,h,h,26)
j=A.c(p,h,h,h,h,h,h,A.l(h,h,n,h,h,h,h,h,h,h,h,13.5,h,h,B.u,h,h,!0,h,0.3,h,h,h,h,h,h),h,h,h)
f=A.c(o,h,h,h,h,h,h,A.l(h,h,e?C.cl:B.c,h,h,h,h,h,h,h,h,12,h,h,h,h,1.3,!0,h,h,h,h,h,h,h,h),h,h,h)
i=x.p
f=A.a([j,B.cR,f,B.cR,A.c("Buys only when the fast line crosses up AND the big trend is rising (slow line higher than 1 hour ago, price above it) AND the market moved +0.4% or more in the last hour.",h,h,h,h,h,h,A.l(h,h,e?C.bT:C.bV,h,h,h,h,h,h,h,h,11,h,h,h,h,1.3,!0,h,h,h,h,h,h,h,h),h,h,h)],i)
if(r)B.d.u(f,A.a([B.at,A.c("Still holding the "+s+" trade from before: the agent keeps checking its exits every 5 minutes.",h,h,h,h,h,h,C.fMG,h,h,h)],i))
return A.q(h,A.A(A.a([k,B.ar,A.E(A.w(f,B.B,h,B.e,B.i,0,B.p),1)],i),B.B,h,B.e,B.i,0,h,h),B.f,h,h,new A.p(w,h,l,m,h,h,B.m),h,h,h,h,B.bR,h,h,h)},
cF9(d,e,f){var w=null,v=this.c
v.toString
A.cf(w,w,!0,w,new D.eK4(this,d,e,f),v,w,!0,!0,x.H)},
bcG(d,e,f,g,h){var w,v,u,t,s,r,q,p,o=null,n=x.N,m=A.S(n,x.P),l=this.d
l=x.g.a(D.dF(l==null?o:J.t(l,"fast")).h(0,"systems"))
if(l==null)l=B.bN
l=J.cL(l,x.f)
w=J.aO(l.a)
l=l.$ti
v=new A.jA(w,l.k("jA<1>"))
u=x.z
l=l.c
while(v.B()){t=l.a(w.gP(w))
s=A.v(J.t(t,"id"))
t=A.a0(t,n,u)
m.n(0,s,t)}r=m.h(0,e)
if(r==null)r=B.cD
q=J.z(r.h(0,"enabled"),!0)
p=r.h(0,"holding")!=null
if(p)n=" \xb7 holding "+A.v(r.h(0,"holding"))
else n=q?" \xb7 running":" \xb7 stopped"
m=A.n(11)
l=A.n(11)
l=A.a([A.q(o,A.V(g,B.c,o,o,o,20),B.f,o,o,new A.p(h,o,o,l,o,o,B.m),o,34,o,o,o,o,o,34)],x.p)
if(q||p){w=p?F.qS:C.cH
l.push(A.ao(o,A.q(o,o,B.f,o,o,new A.p(w,o,A.K(d.a?C.tc:C.ta,B.r,2),o,o,o,B.a6),o,11,o,o,o,o,o,11),o,o,o,-2,-2,o))}return A.hb(A.dB(o,!0,o,A.aM(!1,m,!0,new A.a5(34,34,new A.am(B.a0,o,B.ac,B.f,l,o),o),o,!0,o,o,o,o,o,o,o,o,o,o,o,new D.eK7(this,e),o,o,o,o,o,o,o),!1,o,o,o,o,!1,o,!1,o,o,o,o,o,o,o,o,o,o,f,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,B.ce,o),o,f+n,o,o,o)},
cLG(d){var w,v,u,t,s,r,q,p,o=null,n=J.a1(d)
if(J.z(n.h(d,"open"),!0)){w=D.dF(n.h(d,"chart")).h(0,"trend")
n=w==null?n.h(d,"trend"):w
v=J.k(n==null?"unknown":n)}else v="waiting"
switch(v){case"up":n=C.fht
break
case"down":n=C.fi3
break
default:n=C.fkD
break}u=n.a
t=o
s=o
r=n.b
q=n.c
s=q
t=r
p=u
n=p.j(0.15)
w=A.n(6)
return A.dB(o,o,o,A.q(o,A.A(A.a([A.V(t,p,o,o,o,12),B.uu,A.c(s,o,o,o,o,o,o,A.l(o,o,p,o,o,o,o,o,o,o,o,9,o,o,B.C,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],x.p),B.l,o,B.e,B.P,0,o,o),B.f,o,o,new A.p(n,o,o,w,o,o,B.m),o,o,o,o,V.apw,o,o,o),!1,o,o,o,o,!1,o,!1,o,o,o,o,o,o,o,o,o,o,"trend "+A.v(s),o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,B.ce,o)},
ca0(d,e,f,g,h){var w,v,u,t,s,r,q=this,p=null
if(f.length<2)return B.bK
w=new A.X(f,new D.eJD(),A.U(f).k("X<1>")).gI(0)
v=d.a
u=A.c("Today's watchlist",p,p,p,p,p,p,A.l(p,p,v?C.cl:B.c,p,p,p,p,p,p,p,p,14,p,p,B.C,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)
t=w===0
s=t?"NONE TRADED NOW":""+w+" WATCHED NOW"
s=q.aBx(s,t?E.i1:C.cH)
r=A.hk8(!1,p,!0,new A.C(B.eD,A.V(B.kQ,t?E.i1:C.cH,p,p,p,19),p),!1,p,!0,!1,p,p,p,B.a6,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new D.eJE(q,d,e,h),p,p,p,p,20,p,p,p)
t=x.p
return new A.C(B.eC,A.w(A.a([new A.C(C.apu,A.A(A.a([u,B.aa,s,B.da,r,B.aX,A.c("tap one",p,p,p,p,p,p,A.l(p,p,v?C.bT:C.bV,p,p,p,p,p,p,p,p,11,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)],t),B.l,p,B.e,B.i,0,p,p),p),new A.a5(p,66,A.hN(B.f,q.csU(B.d.bn(f,new D.eJF(g))),new D.eJG(q,f,g,h,d),f.length,p,p,B.aK,new D.eJH(),!1),p),B.at],t),B.B,p,B.e,B.i,0,B.p),p)},
bMB(d,e,f){var w,v,u,t,s,r,q,p,o,n=this,m=null,l=D.bG2(e),k=l.length
if(k<2)return n.a1n(d,new A.a5(m,120,A.at(A.c(y.b,m,m,m,m,m,m,A.l(m,m,d.a?C.bT:C.bV,m,m,m,m,m,m,m,m,m,m,m,m,m,m,!0,m,m,m,m,m,m,m,m),m,m,m),m,m,m),m))
w=B.d.fE(l,Math.max(0,k-n.z))
k=x.p
v=A.a([],k)
for(u=0;u<3;++u){t=C.cpb[u]
if(t<=12)s="1H"
else s=t<=24?"2H":"4H"
B.d.u(v,A.a([n.cBS(d,s,n.z===t,new D.eJu(n,t)),B.b7],k))}v.push(B.aX)
v.push(n.cLH(e))
v.push(B.b7)
v.push(n.b9V(d,"Trend lines",n.ax,new D.eJv(n),B.xA))
v=A.A(v,B.l,m,B.e,B.i,0,m,m)
s=n.ax
r=J.a1(e)
q=D.c5(r.h(e,"price"))
p=n.d
p=p==null?m:J.t(p,"trades")
x.g.a(p)
if(p==null)p=B.bN
p=J.cL(p,x.f)
p=A.ct(p,new D.eJw(),p.$ti.k("M.E"),x.P)
p=A.B(p,A.a3(p).k("M.E"))
o=r.h(e,"asset")
v=A.a([v,B.S,new D.a_W(w,d,m,s,q,D.hOs(p,A.v(o==null?r.h(e,"symbol"):o),F.qS,f),m)],k)
if(n.ax)B.d.u(v,A.a([B.N,A.c0(B.fX,A.a([n.azf(d,B.bE,"Fast line (45 min)"),n.azf(d,B.b0,"Slow line (1 h 45 min)"),n.azf(d,F.qS,"Trade in")],k),B.br,m,4,14)],k))
return n.aBu(d,A.w(v,B.l,m,B.e,B.i,0,B.p),B.x9)},
cLH(d){var w,v,u,t,s,r,q=null,p=D.dF(J.t(d,"chart")).h(0,"trend")
switch(J.k(p==null?"unknown":p)){case"up":p=C.fjp
break
case"down":p=C.fjw
break
case"flat":p=C.fhW
break
default:p=C.fiO
break}w=p.a
v=q
u=q
t=p.b
s=p.c
u=s
v=t
r=w
p=A.n(10)
return A.hb(A.dB(q,q,q,A.q(q,A.V(v,B.c,q,q,q,20),B.f,q,q,new A.p(r,q,q,p,q,q,B.m),q,32,q,q,q,q,q,32),!1,q,q,q,q,!1,q,!1,q,q,q,q,q,q,q,q,q,q,u,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,B.ce,q),q,u,q,B.hoI,q)},
bJe(a9,b0,b1,b2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=null,e="equity",d=J.a1(b0),a0=D.dF(d.h(b0,"today")),a1=D.dF(d.h(b0,"record")),a2=D.dF(d.h(b0,"ticket")),a3=a1.h(0,"pnlSum")!=null?D.c5(a1.h(0,"pnlSum")):D.c5(b1.h(0,"totalPnl")),a4=D.c5(a0.h(0,"day_pnl")),a5=x.f,a6=a5.b(b1.h(0,"shadow"))?D.dF(b1.h(0,"shadow")):f,a7=a6!=null,a8=0
if(a7){w=D.dF(b2.h(0,"held"))
if(w.h(0,"pnl")!=null)a8=D.c5(w.h(0,"pnl"))
else if(!a5.b(a6.h(0,"option"))){v=D.c5(J.t(B.d.ds(D.fEI(b2),new D.eJi(a6),new D.eJj()),"price"))
if(v>0){a5=D.c5(a6.h(0,"qty"))
u=a6.h(0,"mult")==null?1:D.c5(a6.h(0,"mult"))
a8=a5*u*(v-D.c5(a6.h(0,"entryPrice")))}}}t=D.dF(a1.h(0,"newRules"))
s=t.h(0,"winRatePct")
r=D.c5(b2.h(0,e))
q=D.dF(d.h(b0,"fast"))
p=D.c5(q.h(0,"closed"))+D.c5(q.h(0,"open"))
o=a3+a8+p
d=A.n(26)
a5=A.a([new A.ac(0,B.H,B.i2.j(0.3),B.eQ,24)],x.V)
u=x.p
n=A.A(A.a([C.b_j],u),B.l,f,B.e,B.i,0,f,f)
n=A.a([n,B.at,new A.d7(B.dn,B.a5,B.f,A.c(b2.h(0,e)==null?"\u2014":D.eg(r+a3+a8+p,!0,!1),f,f,f,f,f,f,C.fKu,f,f,f),f)],u)
if(b2.h(0,e)!=null){m=o>=0?L.a4n:B.Il
l=o>0
if(l)k=C.cH
else k=o<0?C.d6:B.ab
k=A.V(m,k,f,f,f,f)
m=D.eg(o,!0,!0)
if(p!==0)a7=" (all systems)"
else a7=a7?" (incl. the open one)":""
if(l)l=C.cH
else l=o<0?C.d6:B.ab
n.push(A.A(A.a([k,A.c(m+" from trades"+a7,f,f,f,f,f,f,A.l(f,f,l,f,f,f,f,f,f,f,f,12.5,f,f,B.C,f,f,!0,f,f,f,f,f,f,f,f),f,f,f)],u),B.l,f,B.e,B.i,0,f,f))}n.push(B.bs)
n.push(A.c("Alpaca account "+D.eg(r,!0,!1)+" (unchanged, no orders are sent) \xb7 $"+B.h.a1(D.c5(a2.h(0,"amount")),0)+" a trade",f,f,f,f,f,f,B.FK,f,f,f))
n.push(B.aB)
a7=D.eg(a4,!0,!0)
if(a4>0)m=C.cH
else m=a4<0?C.d6:B.c
m=A.E(g.B5("Today",a7,m),1)
a7=D.eg(a3,!0,!0)
if(a3>0)l=C.cH
else l=a3<0?C.d6:B.c
l=A.E(g.B5("All time",a7,l),1)
a7=a1.h(0,"wins")
a7=A.v(a7==null?0:a7)
k=a1.h(0,"losses")
a7=A.A(A.a([m,B.aa,l,B.aa,A.E(g.B5("Wins / losses",a7+" / "+A.v(k==null?0:k),B.c),1)],u),B.l,f,B.e,B.i,0,f,f)
m=a0.h(0,"trades")
m=A.v(m==null?0:m)
l=a2.h(0,"maxTradesToday")
m=A.E(g.B5("Trades today",m+" of "+A.v(l==null?20:l),B.c),1)
l=a2.h(0,"dailyStopUsd")
l=A.E(g.B5("Daily stop","-$"+B.h.a1(D.c5(l==null?50:l),0),B.c),1)
k=a2.h(0,"totalBrakeUsd")
n.push(g.aSc("RESULTS AND LIMITS",A.a([a7,B.N,A.A(A.a([m,B.aa,l,B.aa,A.E(g.B5("Total brake","-$"+B.h.a1(D.c5(k==null?100:k),0),B.c),1)],u),B.l,f,B.e,B.i,0,f,f)],u)))
n.push(B.S)
a7=a2.h(0,"amount")
a7=B.h.a1(D.c5(a7==null?100:a7),0)
m=J.z(a2.h(0,"kind"),"crypto")?"a coin":"a stock"
m=A.E(g.B5("Buys","$"+a7+" of "+m,B.c),1)
a7=a2.h(0,"takeProfitUsd")
a7=A.E(g.B5("Take profit","+$"+B.h.a1(D.c5(a7==null?50:a7),0),C.cH),1)
l=a2.h(0,"stopLossUsd")
a7=A.A(A.a([m,B.aa,a7,B.aa,A.E(g.B5("Stop loss","-$"+B.h.a1(D.c5(l==null?50:l),0),C.d6),1)],u),B.l,f,B.e,B.i,0,f,f)
m=B.c.j(0.1)
l=A.n(14)
k=s==null
if(k)j="No $100 trades yet"
else{j=B.h.a1(D.c5(s),0)
i=t.h(0,"wins")
i=A.v(i==null?0:i)
h=t.h(0,"trades")
j=j+"%  \xb7  "+i+" won of "+A.v(h==null?0:h)}if(k)k=B.c
else k=D.c5(s)>=50?C.cH:C.d6
n.push(g.aSc("EACH TRADE",A.a([a7,B.N,A.q(f,A.A(A.a([A.E(A.w(A.a([C.h0N,B.bs,A.c(j,f,f,f,f,f,f,A.l(f,f,k,f,f,f,f,f,f,f,f,16,f,f,B.C,f,f,!0,f,f,f,f,f,f,f,f),f,f,f)],u),B.B,f,B.e,B.i,0,B.p),1),C.hhr],u),B.l,f,B.e,B.i,0,f,f),B.f,f,f,new A.p(m,f,f,l,f,f,B.m),f,f,f,f,B.ep,f,f,1/0)],u)))
return A.q(f,A.w(n,B.B,f,B.e,B.i,0,B.p),B.f,f,f,new A.p(f,f,f,d,a5,C.avA,B.m),f,f,f,B.dW,B.f7,f,f,f)},
aCb(a8,a9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=null,a0="brakeNote",a1=J.a1(a9),a2=D.dF(a1.h(a9,"pace")),a3=D.dF(a1.h(a9,"todayStats")),a4=D.dF(a1.h(a9,"market")),a5=a2.h(0,"target"),a6=B.h.M(D.c5(a5==null?20:a5)),a7=B.h.M(D.c5(a2.h(0,"trades")))
a5=x.g
w=a5.a(a2.h(0,"lines"))
if(w==null)w=B.bN
v=x.N
w=J.b8(w,new D.eJK(),v)
u=A.B(w,w.$ti.k("aj.E"))
w=a5.a(a4.h(0,"cryptoDropped"))
if(w==null)w=B.bN
w=J.b8(w,new D.eJL(),v)
t=A.B(w,w.$ti.k("aj.E"))
s=D.c5(a3.h(0,"pnl"))
w=a2.h(0,"dayNote")
r=J.k(w==null?"":w)
w=a5.a(a1.h(a9,"cooldowns"))
if(w==null)w=B.bN
w=J.cL(w,x.f)
q=A.B(w,w.$ti.k("M.E"))
a5=a5.a(a1.h(a9,"whyFix"))
if(a5==null)a5=B.bN
a5=J.b8(a5,new D.eJM(),v)
p=A.B(a5,a5.$ti.k("aj.E"))
a5=""+a6
w=a8.a
o=A.E(A.c("Trades today: "+a7+" of "+a5,d,d,d,d,d,d,A.l(d,d,w?C.cl:B.c,d,d,d,d,d,d,d,d,20,d,d,B.u,d,d,!0,d,d,d,d,d,d,d,d),d,d,d),1)
n=a7>=a6
a5=n?"MAX REACHED":"MAX "+a5
m=x.p
a5=A.A(A.a([o,this.aBx(a5,n?E.i1:C.cH)],m),B.l,d,B.e,B.i,0,d,d)
o=a2.h(0,"maxHold")
o=B.h.M(D.c5(o==null?120:o))
o=A.c("Max hold "+o+" min \xb7 exits checked every 5 min",d,d,d,d,d,d,A.l(d,d,w?C.bT:C.bV,d,d,d,d,d,d,d,d,12,d,d,B.C,d,1.3,!0,d,d,d,d,d,d,d,d),d,d,d)
n=A.cg(new D.eJN(a8,a7,a6))
l=a2.h(0,"checkpoints")
l=A.v(l==null?"":l)
a5=A.a([a5,B.bs,o,B.N,n,B.N,A.c(l,d,d,d,d,d,d,A.l(d,d,w?C.cl:B.c,d,d,d,d,d,d,d,d,11,d,d,B.O,d,1.3,!0,d,d,d,d,d,d,d,d),d,d,d)],m)
for(o=u.length,k=0;k<u.length;u.length===o||(0,A.I)(u),++k)a5.push(new A.C(B.rg,A.c(u[k],d,d,d,d,d,d,C.aZ0,d,d,d),d))
if(r.length!==0)a5.push(new A.C(B.kO,A.c(r,d,d,d,d,d,d,C.fIs,d,d,d),d))
a5.push(B.N)
if(a3.h(0,"closed")==null||D.c5(a3.h(0,"closed"))===0)o="No closed trades today yet"
else{o=a3.h(0,"wins")
o=A.v(o==null?0:o)
n=a3.h(0,"losses")
o="Today: "+o+" won, "+A.v(n==null?0:n)+" lost ("+B.h.a1(D.c5(a3.h(0,"winRatePct")),0)+"%)"}o=A.E(A.c(o,d,d,d,d,d,d,A.l(d,d,w?C.cl:B.c,d,d,d,d,d,d,d,d,12.5,d,d,B.C,d,d,!0,d,d,d,d,d,d,d,d),d,d,d),1)
n=D.eg(s,!0,!0)
if(s>0)l=C.cH
else if(s<0)l=C.d6
else l=w?C.cl:B.c
a5.push(A.A(A.a([o,A.c(n,d,d,d,d,d,d,A.l(d,d,l,d,d,d,d,d,d,d,d,14,d,d,B.u,d,d,!0,d,d,d,d,d,d,d,d),d,d,d)],m),B.l,d,B.e,B.i,0,d,d))
a5.push(B.aj)
l=a4.h(0,"cryptoCount")
o=A.v(l==null?"?":l)
n=J.z(a4.h(0,"cryptoFromAlpaca"),!1)?" (Alpaca's list could not be read, using the main ones for now)":" (the liquid majors only, thin coins are never traded)"
l=J.z(a4.h(0,"weekend"),!0)?"":" plus the 10 stocks in market hours"
a5.push(A.c("Watching "+o+" crypto pairs around the clock"+n+l+".",d,d,d,d,d,d,A.l(d,d,w?C.bT:C.bV,d,d,d,d,d,d,d,d,11.5,d,d,d,d,1.3,!0,d,d,d,d,d,d,d,d),d,d,d))
if(t.length!==0)a5.push(A.c("Dropped today (no longer tradable on Alpaca): "+B.d.aL(t,", "),d,d,d,d,d,d,C.fQm,d,d,d))
a5.push(B.aj)
o=q.length===0?"Cooldown: no market is resting right now.":"Cooldown (closed flat, not traded again for 2 hours): "+new A.O(q,new D.eJO(new D.eJJ()),A.U(q).k("O<1,o>")).aL(0,", ")
if(q.length===0)n=w?C.bT:C.bV
else n=E.i1
a5.push(A.c(o,d,d,d,d,d,d,A.l(d,d,n,d,d,d,d,d,d,d,d,11.5,d,d,B.O,d,1.3,!0,d,d,d,d,d,d,d,d),d,d,d))
if(p.length!==0){o=w?C.r2:C.r3
n=A.n(12)
l=A.a([],m)
for(v=A.aoM(p,0,v),j=J.aO(v.a),v=v.b,i=new A.Ff(j,v);i.B();){h=i.c
h=h>=0?new A.y(v+h,j.gP(j)):A.bi(A.fc())
g=h.a===0
f=g?0:3
if(g)e=w?C.cl:B.c
else e=w?C.bT:C.bV
g=g?B.C:B.cE
l.push(new A.C(new A.R(0,f,0,0),A.c(h.b,d,d,d,d,d,d,new A.G(!0,e,d,d,d,d,11.5,g,d,d,d,d,1.3,d,d,d,d,d,d,d,d,d,d,d,d,d),d,d,d),d))}B.d.u(a5,A.a([B.N,A.q(d,A.w(l,B.B,d,B.e,B.i,0,B.p),B.f,d,d,new A.p(o,d,d,n,d,d,B.m),d,d,d,d,B.bS,d,d,1/0)],m))}if(a1.h(a9,a0)!=null){a1=A.v(a1.h(a9,a0))
B.d.u(a5,A.a([B.aj,A.c(a1,d,d,d,d,d,d,A.l(d,d,w?C.bT:C.bV,d,d,d,d,d,d,d,d,11,d,d,d,d,1.3,!0,d,d,d,d,d,d,d,d),d,d,d)],m))}return this.a1n(a8,A.w(a5,B.B,d,B.e,B.i,0,B.p))},
aSc(d,e){var w=null,v=B.v.j(0.14),u=A.n(18),t=A.K(B.c.j(0.16),B.r,1),s=A.a([new A.C(B.apn,A.c(d,w,w,w,w,w,w,C.fLw,w,w,w),w)],x.p)
B.d.u(s,e)
return A.q(w,A.w(s,B.B,w,B.e,B.i,0,B.p),B.f,w,w,new A.p(v,w,t,u,w,w,B.m),w,w,w,w,B.bS,w,w,1/0)},
B5(d,e,f){var w=null,v=B.c.j(0.1),u=A.n(14)
return A.q(w,A.w(A.a([A.c(d,w,1,B.a2,w,w,w,B.M1,w,w,w),B.bs,new A.d7(B.dn,B.a5,B.f,A.c(e,w,w,w,w,w,w,A.l(w,w,f,w,w,w,w,w,w,w,w,15,w,w,B.C,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w)],x.p),B.B,w,B.e,B.i,0,B.p),B.f,w,w,new A.p(v,w,w,u,w,w,B.m),w,w,w,w,B.anR,w,w,w)},
ctl(a9,b0,b1,b2,b3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=this,a1=null,a2="price",a3=D.c5(b0.h(0,"entryPrice")),a4=D.c5(b0.h(0,"qty")),a5=b0.h(0,"mult")==null?1:D.c5(b0.h(0,"mult")),a6=x.f.b(b0.h(0,"option"))?D.dF(b0.h(0,"option")):a1,a7=J.a1(b1),a8=J.z(b0.h(0,"symbol"),a7.h(b1,"asset"))
if(b3.h(0,a2)!=null)w=D.c5(b3.h(0,a2))
else w=a6==null&&a8?D.c5(a7.h(b1,a2)):a3
a7=a4*a5
v=a7*a3
u=a7*w
t=u-v
s=a3===0?0:(w-a3)/a3*100
r=t>=0
q=b2.h(0,"takeProfitUsd")
p=D.c5(q==null?50:q)
q=b2.h(0,"stopLossUsd")
o=D.c5(q==null?50:q)
n=B.h.D((t+o)/(p+o),0,1)
m=a7===0?0:1/a7
l=a3-o*m
a7=a9.a
q=x.p
k=A.A(A.a([A.c("Your position",a1,a1,a1,a1,a1,a1,A.l(a1,a1,a7?C.cl:B.c,a1,a1,a1,a1,a1,a1,a1,a1,16,a1,a1,B.C,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1),B.aX,a0.aBx("OPEN",C.cH)],q),B.l,a1,B.e,B.i,0,a1,a1)
j=D.eg(t,!0,!0)
j=A.c(j,a1,a1,a1,a1,a1,a1,A.l(a1,a1,r?C.cH:C.d6,a1,a1,a1,a1,a1,a1,a1,a1,34,a1,a1,B.C,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1)
i=s>=0?"+":""
h=B.h.a1(s,2)
j=A.A(A.a([j,B.aa,new A.C(B.eC,A.c(i+h+"%",a1,a1,a1,a1,a1,a1,A.l(a1,a1,r?C.cH:C.d6,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,B.C,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1),a1)],q),B.dr,a1,B.e,B.i,0,a1,a1)
i=r?"You would be winning right now":"You would be losing right now"
k=A.a([k,B.af,j,A.c(i,a1,a1,a1,a1,a1,a1,A.l(a1,a1,a7?C.bT:C.bV,a1,a1,a1,a1,a1,a1,a1,a1,12.5,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1),B.aB],q)
j=a6!=null
if(j){i=a7?C.r2:C.r3
h=A.n(16)
g=A.c("1 SPY call option",a1,a1,a1,a1,a1,a1,A.l(a1,a1,a7?C.bT:C.bV,a1,a1,a1,a1,a1,a1,a1,a1,11.5,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1)
f=D.eg(D.c5(a6.h(0,"strike")),!0,!1)
e=D.aRy(a6.h(0,"expiry"))
f=A.c("Strike "+f+" \xb7 expires "+e,a1,a1,a1,a1,a1,a1,A.l(a1,a1,a7?C.cl:B.c,a1,a1,a1,a1,a1,a1,a1,a1,15,a1,a1,B.C,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1)
e=D.eg(a3,!0,!1)
d=D.eg(v,!0,!1)
B.d.u(k,A.a([A.q(a1,A.w(A.a([g,B.bs,f,B.bs,A.c("Premium paid "+e+" a share x 100 = "+d,a1,a1,a1,a1,a1,a1,A.l(a1,a1,a7?C.bT:C.bV,a1,a1,a1,a1,a1,a1,a1,a1,11.5,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1)],q),B.B,a1,B.e,B.i,0,B.p),B.f,a1,a1,new A.p(i,a1,a1,h,a1,a1,B.m),a1,a1,a1,a1,B.bg,a1,a1,1/0),B.N],q))}i=A.E(a0.aBy(a9,"You put in",D.eg(v,!0,!1)),1)
h=D.eg(u,!0,!1)
k.push(A.A(A.a([i,B.aa,A.E(a0.aBz(a9,"Worth now",h,r?C.cH:C.d6),1)],q),B.l,a1,B.e,B.i,0,a1,a1))
k.push(B.N)
i=j?"Premium paid":"Bought at"
i=A.E(a0.aBy(a9,i,D.eg(a3,!0,!1)),1)
if(j){j=J.z(b3.h(0,"priced"),!1)?"no price yet":D.eg(w,!0,!1)
j=a0.aBz(a9,"Premium now",j,r?C.cH:C.d6)}else j=a0.aBy(a9,"Amount",B.h.a1(a4,a4<0.01?6:4)+" "+A.v(b0.h(0,"symbol")))
k.push(A.A(A.a([i,B.aa,A.E(j,1)],q),B.l,a1,B.e,B.i,0,a1,a1))
k.push(B.aN)
k.push(A.cg(new D.eJR(a9,n)))
k.push(B.aj)
j=D.eg(o,!0,!1)
k.push(A.A(A.a([A.E(A.c("Stop loss\n-"+j+" \xb7 at "+D.eg(l<0?0:l,!0,!1),a1,a1,a1,a1,a1,a1,C.fQv,a1,a1,a1),1),A.E(A.c("Take profit\n+"+D.eg(p,!0,!1)+" \xb7 at "+D.eg(a3+p*m,!0,!1),a1,a1,a1,a1,a1,a1,C.fP2,B.dR,a1,a1),1)],q),B.l,a1,B.e,B.i,0,a1,a1))
k.push(B.aj)
q=D.hpz(b0.h(0,"entryAt"))
k.push(A.c("Bought "+q,a1,a1,a1,a1,a1,a1,A.l(a1,a1,a7?C.bT:C.bV,a1,a1,a1,a1,a1,a1,a1,a1,11.5,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1))
return a0.a1n(a9,A.w(k,B.B,a1,B.e,B.i,0,B.p))},
aBv(d,e){var w,v,u,t=this,s=null,r=J.z(e.h(0,"enabled"),!0)&&!J.z(e.h(0,"brakePaused"),!0),q=r?C.d6:C.cH
q=A.bp(q,s,s,s,s,s,s,s,new A.ba(A.n(999),B.a1),s,s,s)
w=t.r?s:new D.eJx(t,r)
v=A.V(r?B.vJ:B.fQ,s,s,s,s,s)
q=A.E(new A.a5(s,52,A.df(v,s,A.c(r?"Stop agent":"Start agent",s,s,s,s,s,s,B.mU,s,s,s),w,q),s),3)
w=d.a
v=w?C.cl:B.c
u=w?C.oQ:C.oL
w=w?B.c.j(0.92):C.ib
u=A.dj(s,s,w,s,s,s,s,s,s,v,s,s,s,s,new A.ba(A.n(999),B.a1),new A.ax(u,1.5,B.r,-1),s,s,s,s)
w=t.r
v=w?s:t.gcAS()
return new A.C(B.dW,A.A(A.a([q,B.ar,A.E(new A.a5(s,52,A.en(w?B.Lu:C.c6e,s,C.hjF,v,u),s),2)],x.p),B.l,s,B.e,B.i,0,s,s),s)},
bJ3(d,e,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i="every 5 min",h=J.z(e.h(0,"enabled"),!0)&&!J.z(e.h(0,"brakePaused"),!0),g=e.h(0,"lastTickAt"),f=A.be(A.v(g==null?"":g))
if(h)w=C.cH
else w=d.a?C.bT:C.bV
g=x.f
v=g.b(e.h(0,"shadow"))?D.dF(e.h(0,"shadow")):j
u=x.g.a(J.t(a0,"trades"))
g=J.cL(u==null?B.bN:u,g)
t=A.B(g,g.$ti.k("M.E"))
s=t.length===0?j:D.dF(B.d.gH(t))
g=v!=null
r=g?"Current trade from":"Last trade from"
if(g)q=A.v(v.h(0,"symbol"))
else if(s==null)q="no trade yet"
else{g=A.v(s.h(0,"asset"))
u=J.z(s.h(0,"decision"),"would buy")?"bought":"sold "+D.eg(D.c5(D.dF(s.h(0,"details")).h(0,"pnl")),!0,!0)
u=g+" ("+u+")"
q=u}g=new D.eJh(d)
u=d.a
p=u?B.c.j(0.92):C.ib
o=A.n(20)
n=A.K(w.j(0.35),B.r,1)
m=w.j(0.15)
l=A.n(9)
l=A.q(j,A.V(O.Qy,w,j,j,j,17),B.f,j,j,new A.p(m,j,j,l,j,j,B.m),j,28,j,j,j,j,j,28)
m=h?"Trades are automatic":"Agent is stopped"
m=A.E(A.c(m,j,j,j,j,j,j,A.l(j,j,u?C.cl:B.c,j,j,j,j,j,j,j,j,13.5,j,j,B.C,j,j,!0,j,j,j,j,j,j,j,j),j,j,j),1)
k=x.p
m=A.a([A.A(A.a([l,B.aa,m,A.c("Check now only looks",j,j,j,j,j,j,A.l(j,j,u?C.bT:C.bV,j,j,j,j,j,j,j,j,10.5,j,j,j,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)],k),B.l,j,B.e,B.i,0,j,j),B.S],k)
if(h)B.d.u(m,A.a([A.A(A.a([g.$2("Last check",f==null?"not yet":D.LR(D.SL(f))+" ET"),B.b7,g.$2("Next buy check",D.hMo())],k),B.l,j,B.e,B.i,0,j,j),B.aj,A.A(A.a([g.$2("Checks every market",i),B.b7,g.$2("Open trade exits",i)],k),B.l,j,B.e,B.i,0,j,j),B.aj],k))
else B.d.u(m,A.a([A.c("It makes no trades. Press Start and it checks every market on the day's list every 5 minutes by itself.",j,j,j,j,j,j,A.l(j,j,u?C.bT:C.bV,j,j,j,j,j,j,j,j,12,j,j,j,j,1.35,!0,j,j,j,j,j,j,j,j),j,j,j),B.N],k))
m.push(A.A(A.a([g.$2(r,q)],k),B.l,j,B.e,B.i,0,j,j))
return A.q(j,A.w(m,B.B,j,B.e,B.i,0,B.p),B.f,j,j,new A.p(p,j,n,o,j,j,B.m),j,j,j,B.dW,B.bg,j,j,j)},
cLm(b9,c0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0=this,b1=null,b2="entryPrice",b3="exitPrice",b4="exitKind",b5="outValue",b6="todayStats",b7=J.a1(c0),b8=x.g.a(b7.h(c0,"trades"))
if(b8==null)b8=B.bN
w=x.f
b8=J.cL(b8,w)
b8=A.ct(b8,new D.eKf(),b8.$ti.k("M.E"),x.P)
v=A.B(b8,A.a3(b8).k("M.E"))
b8=b9.a
u=x.p
t=A.a([A.c("Trades",b1,b1,b1,b1,b1,b1,A.l(b1,b1,b8?C.cl:B.c,b1,b1,b1,b1,b1,b1,b1,b1,16,b1,b1,B.C,b1,b1,!0,b1,b1,b1,b1,b1,b1,b1,b1),b1,b1,b1),B.N],u)
if(v.length===0){s=A.V(B.h3,b8?C.bT:C.bV,b1,b1,b1,b1)
t.push(new A.C(B.cq,A.A(A.a([s,B.ar,A.E(A.c("No trades yet. Each buy shows what was bought (for a SPY option: strike, expiry and premium) and what was put in; each sell shows the entry and exit price and the win or loss in dollars.",b1,b1,b1,b1,b1,b1,A.l(b1,b1,b8?C.bT:C.bV,b1,b1,b1,b1,b1,b1,b1,b1,12.5,b1,b1,b1,b1,1.3,!0,b1,b1,b1,b1,b1,b1,b1,b1),b1,b1,b1),1)],u),B.l,b1,B.e,B.i,0,b1,b1),b1))}s=J.aO(b0.y?v:A.cJ(v,0,A.dx(4,"count",x.S),A.U(v).c))
r=x.N
q=x.z
while(s.B()){p=s.gP(s)
o=J.a1(p)
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
a0=j}}if(m)if(n)a1="expires "+D.aRy(k.h(0,"expiry"))+" \xb7 premium "+D.eg(d,!0,!1)+" x 100"
else{m=D.eg(d,!0,!1)
j=D.eg(a0,!0,!1)
a2=o.h(p,"reason")
a2=J.k(a2==null?"":a2)
a3=B.a.ca(a2,"(")
a1="premium "+m+" to "+j+" \xb7 "+B.a.i(a3>0?B.a.av(a2,0,a3):a2)}else if(n){if(g===0)m=""
else m=B.h.a1(g,g<0.01?6:4)+" at "
if(e)j=d
else{j=o.h(p,"price")
if(!(typeof j=="number")){j=A.cA(A.v(j==null?"":j))
if(j==null)j=0}}a1=m+D.eg(j,!0,!1)}else{m=e?D.eg(d,!0,!1)+" to ":"at "
j=D.eg(a0,!0,!1)
a2=o.h(p,"reason")
a2=J.k(a2==null?"":a2)
a3=B.a.ca(a2,"(")
a1=m+j+" \xb7 "+B.a.i(a3>0?B.a.av(a2,0,a3):a2)}a4=f>=0
if(n)a5=B.ci
else a5=a4?C.cH:C.d6
m=b8?C.oQ:C.oL
j=a5.j(0.14)
a2=new A.aQ(13,13)
j=A.q(b1,A.V(n?B.tY:B.rw,a5,b1,b1,b1,20),B.f,b1,b1,new A.p(j,b1,b1,new A.bc(a2,a2,a2,a2),b1,b1,B.m),b1,40,b1,b1,b1,b1,b1,40)
a2=n?"Bought":"Sold"
a6=b8?C.cl:B.c
a2=A.c(a2+" "+i,b1,b1,b1,b1,b1,b1,new A.G(!0,a6,b1,b1,b1,b1,14,B.C,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1),b1,b1,b1)
a6=b8?C.bT:C.bV
a2=A.a([a2,B.bs,A.c(a1,b1,2,B.a2,b1,b1,b1,new A.G(!0,a6,b1,b1,b1,b1,11.5,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1),b1,b1,b1)],u)
a6=!n
if(a6&&l.h(0,b4)!=null){a7=A.v(l.h(0,b4))
a8=J.z(l.h(0,"flat"),!0)?" \xb7 flat":""
a9=a4?C.cH:C.d6
a2.push(A.c("Exit: "+a7+a8,b1,b1,b1,b1,b1,b1,new A.G(!0,a9,b1,b1,b1,b1,11,B.C,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1),b1,b1,b1))}p=o.h(p,"et_time")
p=J.k(p==null?"":p)
o=b8?C.bT:C.bV
a2.push(A.c(p,b1,b1,b1,b1,b1,b1,new A.G(!0,o,b1,b1,b1,b1,10.5,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1),b1,b1,b1))
p=A.w(a2,B.B,b1,B.e,B.i,0,B.p)
if(n)o="-"+D.eg(h,!0,!1)
else{if(l.h(0,b5)==null)o=h+f
else{o=l.h(0,b5)
if(!(typeof o=="number")){o=A.cA(A.v(o==null?"":o))
if(o==null)o=0}}o="+"+D.eg(o,!0,!1)}a2=b8?C.cl:B.c
o=A.a([A.c(o,b1,b1,b1,b1,b1,b1,new A.G(!0,a2,b1,b1,b1,b1,14,B.C,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1),b1,b1,b1)],u)
if(a6){a2=D.eg(f,!0,!0)
if(l.h(0,"pct")==null)a6=""
else{a6=l.h(0,"pct")
if(!(typeof a6=="number")){a6=A.cA(A.v(a6==null?"":a6))
if(a6==null)a6=0}a6=a6>=0?"+":""
a7=l.h(0,"pct")
if(!(typeof a7=="number")){a7=A.cA(A.v(a7==null?"":a7))
if(a7==null)a7=0}a7=" ("+a6+B.h.a1(a7,2)+"%)"
a6=a7}a7=a4?C.cH:C.d6
o.push(A.c(a2+a6,b1,b1,b1,b1,b1,b1,new A.G(!0,a7,b1,b1,b1,b1,12,B.C,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1),b1,b1,b1))}if(n){a2=b8?C.bT:C.bV
o.push(A.c("put in",b1,b1,b1,b1,b1,b1,new A.G(!0,a2,b1,b1,b1,b1,11,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1),b1,b1,b1))}t.push(A.q(b1,new A.c1(B.aK,B.e,B.i,B.l,b1,B.p,b1,0,A.a([j,B.bc,new A.bu(1,B.b8,p,b1),B.aa,A.w(o,B.dr,b1,B.e,B.i,0,B.p)],u),b1),B.f,b1,b1,new A.p(b1,b1,new A.bE(B.a1,B.a1,new A.ax(m,1,B.r,-1),B.a1),b1,b1,b1,B.m),b1,b1,b1,b1,B.jD,b1,b1,b1))}s=v.length
if(s>4)t.push(A.at(A.bL(!1,A.c(b0.y?"Show less":"Show all ("+s+")",b1,b1,b1,b1,b1,b1,b1,b1,b1,b1),b1,b1,!0,b1,b1,b1,new D.eKg(b0),b1,b1),b1,b1,b1))
if(w.b(b7.h(c0,b6))){w=D.dF(b7.h(c0,b6)).h(0,"flat")
w=A.v(w==null?0:w)
b7=D.dF(b7.h(c0,b6)).h(0,"closed")
b7=A.v(b7==null?0:b7)
b7=A.c("Flat trades today: "+w+" of "+b7+" closed",b1,b1,b1,b1,b1,b1,A.l(b1,b1,b8?C.cl:B.c,b1,b1,b1,b1,b1,b1,b1,b1,12.5,b1,b1,B.C,b1,b1,!0,b1,b1,b1,b1,b1,b1,b1,b1),b1,b1,b1)
B.d.u(t,A.a([B.N,b7,A.c("A flat trade closed between -$1 and +$1.",b1,b1,b1,b1,b1,b1,A.l(b1,b1,b8?C.bT:C.bV,b1,b1,b1,b1,b1,b1,b1,b1,11,b1,b1,b1,b1,b1,!0,b1,b1,b1,b1,b1,b1,b1,b1),b1,b1,b1)],u))}return b0.a1n(b9,A.w(t,B.B,b1,B.e,B.i,0,B.p))},
bGc(d){var w,v,u=this,t=null,s=u.x,r=u.e
r=s?r:J.Eg(r,4).de(0)
s=d.a
w=A.c("Agent activity",t,t,t,t,t,t,A.l(t,t,s?C.cl:B.c,t,t,t,t,t,t,t,t,16,t,t,B.C,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)
v=x.p
v=A.a([A.A(A.a([w,B.aX,A.c("newest first",t,t,t,t,t,t,A.l(t,t,s?C.bT:C.bV,t,t,t,t,t,t,t,t,11,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],v),B.l,t,B.e,B.i,0,t,t),B.aj],v)
if(J.cj(u.e))v.push(new A.C(B.fc,A.c("Nothing yet. A new line appears with every automatic check (every 5 minutes).",t,t,t,t,t,t,A.l(t,t,s?C.bT:C.bV,t,t,t,t,t,t,t,t,12.5,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),t))
for(s=J.aO(r);s.B();)v.push(u.c8N(d,s.gP(s)))
if(J.aa(u.e)>4){if(u.x)s=u.w?"Show older":"Show less"
else s="Show all"
v.push(A.at(A.bL(!1,A.c(s,t,t,t,t,t,t,t,t,t,t),t,t,!0,t,t,t,new D.eJg(u),t,t),t,t,t))}return u.a1n(d,A.w(v,B.B,t,B.e,B.i,0,B.p))},
c8N(d,e){var w,v,u,t,s,r=null,q="price",p=J.a1(e),o=p.h(e,"decision"),n=J.k(o==null?"":o)
A:{if("would buy"===n){o=C.cH
break A}if("would sell"===n){o=B.bE
break A}if("hold"===n){o=B.b0
break A}if("day start"===n||"day end"===n){o=B.ci
break A}if("start"===n){o=C.cH
break A}if("stop"===n){o=C.d6
break A}if(J.z(p.h(e,"kind"),"error"))o=C.d6
else o=d.a?C.bT:C.bV
break A}w=p.h(e,"fast_ma")!=null&&p.h(e,"slow_ma")!=null
v=A.q(r,r,B.f,r,r,new A.p(o,r,r,r,r,r,B.a6),r,8,r,K.Pj,r,r,r,8)
u=n==="hold"?"Still holding":D.hJO(n)
t=x.p
o=A.a([A.c(u,r,r,r,r,r,r,A.l(r,r,o,r,r,r,r,r,r,r,r,12.5,r,r,B.C,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],t)
if(J.z(D.dF(p.h(e,"details")).h(0,"by"),"cron"))B.d.u(o,A.a([B.b7,A.c("automatic",r,r,r,r,r,r,A.l(r,r,d.a?C.bT:C.bV,r,r,r,r,r,r,r,r,10,r,r,B.O,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],t))
o.push(B.aX)
u=p.h(e,"et_time")
u=D.hrs(J.k(u==null?"":u))
s=d.a
o.push(A.c(u,r,r,r,r,r,r,A.l(r,r,s?C.bT:C.bV,r,r,r,r,r,r,r,r,10.5,r,r,r,r,r,!0,r,r,r,r,r,r,r,r),r,r,r))
o=A.A(o,B.l,r,B.e,B.i,0,r,r)
u=p.h(e,"reason")
u=D.hJO(J.k(u==null?"":u))
o=A.a([o,A.c(u,r,r,r,r,r,r,A.l(r,r,s?C.cl:B.c,r,r,r,r,r,r,r,r,12.5,r,r,r,r,1.3,!0,r,r,r,r,r,r,r,r),r,r,r)],t)
if(p.h(e,q)!=null||w){u=A.a([],x.s)
if(p.h(e,"asset")!=null&&p.h(e,q)!=null)u.push(A.v(p.h(e,"asset"))+" "+D.eg(D.c5(p.h(e,q)),!0,!1))
if(w)u.push("fast "+B.h.a1(D.c5(p.h(e,"fast_ma")),2)+" \xb7 slow "+B.h.a1(D.c5(p.h(e,"slow_ma")),2))
p=B.d.aL(u,"  \xb7  ")
o.push(A.c(p,r,r,r,r,r,r,A.l(r,r,s?C.bT:C.bV,r,r,r,r,r,r,r,r,10.5,r,r,r,r,r,!0,r,r,r,r,r,r,r,r),r,r,r))}return new A.C(B.D8,A.A(A.a([v,B.ar,A.E(A.w(o,B.B,r,B.e,B.i,0,B.p),1)],t),B.B,r,B.e,B.i,0,r,r),r)},
czN(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=this.c
k.toString
k=A.Q(k).aHU(B.L)
w=d.a
v=w?C.cl:B.c
u=w?C.bT:C.bV
t=A.V(C.bWR,B.b0,l,l,l,l)
s=x.p
r=A.A(A.a([new A.d1(1,B.c9,A.c("The rules it follows",l,l,l,l,l,l,A.l(l,l,w?C.cl:B.c,l,l,l,l,l,l,l,l,14.5,l,l,B.C,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),l),B.aa,A.aA(l,A.q(l,C.ftE,B.f,l,l,new A.p(l,l,l,A.n(999),l,B.u3,B.m),l,l,l,l,B.ho,l,l,l),B.y,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,this.gcng(),l,l,l,l,l,l,!1,B.a4)],s),B.l,l,B.e,B.i,0,l,l)
q=A.c("Read-only, set in the code",l,l,l,l,l,l,A.l(l,l,w?C.bT:C.bV,l,l,l,l,l,l,l,l,11.5,l,l,l,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)
p=A.a([],s)
o=x.g.a(J.t(e,"rules"))
o=J.aO(o==null?B.bN:o)
while(o.B()){n=J.k(o.gP(o))
m=w?C.cl:B.c
p.push(new A.C(C.bFu,new A.c1(B.aK,B.e,B.i,B.B,l,B.p,l,0,A.a([C.eI2,B.aa,new A.bu(1,B.b8,A.c(n,l,l,l,l,l,l,new A.G(!0,m,l,l,l,l,12.5,l,l,l,l,l,1.35,l,l,l,l,l,l,l,l,l,l,l,l,l),l,l,l),l)],s),l),l))}return this.aBu(d,new A.oH(k,A.aE(!1,B.a3,!0,l,N.hjK(l,p,U.aol,l,u,v,!1,t,l,q,B.he,r),B.f,l,0,l,l,l,l,l,B.i7),l),B.ag)},
aBu(d,e,f){var w=null,v=d.a,u=v?B.c.j(0.92):C.ib,t=A.n(24)
return A.q(w,e,B.f,w,w,new A.p(u,w,A.K(v?B.c:C.nf,B.r,1),t,A.a([new A.ac(0,B.H,d.gIq(),B.dv,24)],x.V),w,B.m),w,w,w,B.dW,f,w,w,w)},
a1n(d,e){return this.aBu(d,e,B.bR)},
abr(d,e,f){var w=null,v=f.j(0.12),u=A.n(16),t=A.K(f.j(0.45),B.r,1),s=A.V(B.QY,f,w,w,w,20)
return A.q(w,A.A(A.a([s,B.ar,A.E(A.c(e,w,w,w,w,w,w,A.l(w,w,d.a?C.cl:B.c,w,w,w,w,w,w,w,w,12.5,w,w,w,w,1.35,!0,w,w,w,w,w,w,w,w),w,w,w),1)],x.p),B.l,w,B.e,B.i,0,w,w),B.f,w,w,new A.p(v,w,t,u,w,w,B.m),w,w,w,B.dW,B.bg,w,w,w)},
b4f(d,e,f){var w=null,v=d.a,u=v?B.c.j(0.92):C.ib,t=A.K(v?B.c:C.nf,B.r,1)
return A.aE(!1,B.a3,!0,w,A.aM(!1,w,!0,A.q(w,A.V(e,v?C.cl:B.c,w,w,w,18),B.f,w,w,new A.p(w,w,t,w,w,w,B.a6),w,40,w,w,w,w,w,40),B.cM,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),B.f,u,0,w,w,B.cM,w,w,B.ai)},
b9V(d,e,f,g,h){var w,v,u,t,s,r,q,p=null
if(f){w=d.a
v=w?C.n7:B.c
u=v
v=w
w=u}else{w=d.a
v=w?C.Ol:C.Oa
u=v
v=w
w=u}t=A.n(999)
s=x.p
r=A.a([],s)
if(h!=null){if(f)q=v?B.c:C.n7
else q=v?C.bT:C.bV
B.d.u(r,A.a([A.V(h,q,p,p,p,14),B.da],s))}if(f)v=v?B.c:C.n7
else v=v?C.bT:C.bV
r.push(A.c(e,p,p,p,p,p,p,A.l(p,p,v,p,p,p,p,p,p,p,p,11.5,p,p,B.O,p,p,!0,p,p,p,p,p,p,p,p),p,p,p))
return A.aA(p,A.cY(p,A.A(r,B.l,p,B.e,B.P,0,p,p),p,p,B.b_,new A.p(w,p,p,t,p,p,B.m),B.eK,p,p,p,p,W.a23,p,p,p),B.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,g,p,p,p,p,p,p,!1,B.a4)},
cBS(d,e,f,g){return this.b9V(d,e,f,g,null)},
azf(d,e,f){var w=null,v=A.q(w,w,B.f,w,w,new A.p(e,w,w,A.n(2),w,w,B.m),w,3,w,w,w,w,w,14)
return A.A(A.a([v,B.dY,A.c(f,w,w,w,w,w,w,A.l(w,w,d.a?C.bT:C.bV,w,w,w,w,w,w,w,w,11,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),B.l,w,B.e,B.P,0,w,w)},
aBx(d,e){var w=null,v=e.j(0.14),u=A.n(999)
return A.q(w,A.c(d,w,w,w,w,w,w,A.l(w,w,e,w,w,w,w,w,w,w,w,10,w,w,B.u,w,w,!0,w,0.6,w,w,w,w,w,w),w,w,w),B.f,w,w,new A.p(v,w,w,u,w,w,B.m),w,w,w,w,B.f8,w,w,w)},
aBz(d,e,f,g){var w=null,v=d.a,u=v?C.r2:C.r3,t=A.n(16),s=A.c(e,w,w,w,w,w,w,A.l(w,w,v?C.bT:C.bV,w,w,w,w,w,w,w,w,11.5,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)
if(g==null)v=v?C.cl:B.c
else v=g
return A.q(w,A.w(A.a([s,B.cR,new A.d7(B.dn,B.a5,B.f,A.c(f,w,w,w,w,w,w,A.l(w,w,v,w,w,w,w,w,w,w,w,16,w,w,B.C,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w)],x.p),B.B,w,B.e,B.i,0,B.p),B.f,w,w,new A.p(u,w,w,t,w,w,B.m),w,w,w,w,B.bg,w,w,w)},
aBy(d,e,f){return this.aBz(d,e,f,null)},
cOn(d){var w=A.v(d==null?"":d),v=A.be(w.length>=19?B.a.av(w,0,19):"")
if(v==null)return""
return" \xb7 opens "+B.TF[A.lZ(v)-1]+" "+D.LR(v)+" ET"}}
D.Re.prototype={}
D.a_W.prototype={
R(){return new D.bff()}}
D.bff.prototype={
aBw(d,e){var w=this,v=w.a.c.length,u=B.n.D(B.h.bd(d.a/e*v),0,v-1)
if(u!==w.d)w.l(new D.cYi(w,u))},
C(d){return A.cg(new D.cYr(this))}}
D.bfg.prototype={
a5(e2,e3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5=this,d6=null,d7={},d8=e3.b,d9=d8-18,e0=x.u,e1=A.a([],e0)
for(w=d5.d,v=w.length,u=0;t=w.length,u<t;w.length===v||(0,A.I)(w),++u){s=w[u]
t=J.a1(s)
r=t.h(s,"h")
if(!(typeof r=="number")){r=A.cA(A.v(r==null?"":r))
if(r==null)r=0}t=t.h(s,"l")
if(!(typeof t=="number")){t=A.cA(A.v(t==null?"":t))
if(t==null)t=0}B.d.u(e1,A.a([r,t],e0))}v=d5.r
if(v)for(u=0;u<w.length;w.length===t||(0,A.I)(w),++u){s=w[u]
r=A.a([],e0)
q=J.a1(s)
if(q.h(s,"f")!=null){p=q.h(s,"f")
if(!(typeof p=="number")){p=A.cA(A.v(p==null?"":p))
if(p==null)p=0}r.push(p)}if(q.h(s,"s")!=null){q=q.h(s,"s")
if(!(typeof q=="number")){q=A.cA(A.v(q==null?"":q))
if(q==null)q=0}r.push(q)}B.d.u(e1,r)}e0=d5.w
t=e0>0
if(t)e1.push(e0)
d7.a=B.d.eL(e1,B.pD)
o=d7.b=B.d.eL(e1,B.oC)
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
q=r?B.c.j(0.92):C.ib
p=d5.b
k=A.h0(d6,B.cJ,d6,d6,d6,A.cW(d6,d6,d6,d6,d6,d6,d6,d6,d6,A.l(d6,d6,q,d6,d6,d6,d6,d6,p,d6,d6,9.5,d6,d6,B.C,d6,d6,!0,d6,d6,d6,d6,d6,d6,d6,d6),e1),B.a7,B.ca,d6,B.e4,B.cb)
k.eJ()
j=t?k.b.c+12:0
e1=e3.a
i=e1-j
h=i/l
g=new D.cYs(h)
f=new D.cYu(d7,d9)
$.T()
e=A.L()
e.r=(r?C.oQ:C.oL).j(0.7).gp(0)
e.c=1
for(d=1;d<=3;++d){a0=d9*d/4
for(a1=0;a1<i;a1+=6)e2.ah(new A.m(a1,a0),new A.m(a1+2,a0),e)}q=A.a([],x.w)
for(a2=w.length,u=0;u<w.length;w.length===a2||(0,A.I)(w),++u){a3=J.t(w[u],"t")
q.push(A.be(A.v(a3==null?"":a3)))}a4=A.a([],x.T)
for(a2=d5.c,a3=a2.length,a5=l-1,u=0;u<a2.length;a2.length===a3||(0,A.I)(a2),++u){a6=a2[u]
a7=!0
if(q.length!==0)if(B.d.gH(q)!=null){a8=a6.a
a9=B.d.gH(q)
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
a8=B.n.ao(a7.b-b3.gcA()+1000*(a7.a-a8),6e7)>30
a7=a8}else a7=a8
else a7=a8}else a7=!0
if(a7)continue
a4.push(new A.y(b1,a6))}for(q=a4.length,a2=h*0.3,u=0;u<a4.length;a4.length===q||(0,A.I)(a4),++u){a3=a4[u]
a1=g.$1(a3.a)
$.T()
b4=new A.ar(B.U,B.R,B.X,B.Y,B.W)
b4.r=a3.b.d.j(0.75).gp(0)
b4.c=Math.min(2,Math.max(1,a2))
for(b5=12;b5<d9;b5+=7)e2.ah(new A.m(a1,b5),new A.m(a1,Math.min(d9,b5+3.5)),b4)}if(v){v=new D.cYt(d5,l,g,f,e2)
v.$2("s",B.b0)
v.$2("f",B.bE)}for(v=Math.max(2,h*0.62)/2,q=d5.x,a2=q!=null,d=0;d<l;++d){s=w[d]
a3=J.a1(s)
b6=a3.h(s,"o")
if(!(typeof b6=="number")){a7=A.cA(A.v(b6==null?"":b6))
b6=a7==null?0:a7}b7=a3.h(s,"c")
if(!(typeof b7=="number")){a7=A.cA(A.v(b7==null?"":b7))
b7=a7==null?0:a7}b8=a3.h(s,"h")
if(!(typeof b8=="number")){a7=A.cA(A.v(b8==null?"":b8))
b8=a7==null?0:a7}b9=a3.h(s,"l")
if(!(typeof b9=="number")){a3=A.cA(A.v(b9==null?"":b9))
b9=a3==null?0:a3}c0=b7>=b6?C.cH:E.i1
c1=a2&&q!==d
$.T()
c2=new A.ar(B.U,B.R,B.X,B.Y,B.W)
c2.r=(c1?c0.j(0.45):c0).gp(0)
a3=g.$1(d)
a7=f.$1(b8)
a8=g.$1(d)
a9=f.$1(b9)
c2.c=1.4
e2.ah(new A.m(a3,a7),new A.m(a8,a9),c2)
c3=f.$1(Math.max(b6,b7))
c4=f.$1(Math.min(b6,b7))
a9=A.bx(new A.a4(g.$1(d)-v,c3,g.$1(d)+v,Math.max(c4,c3+1.5)),B.hG)
c2.b=B.R
e2.aq(a9,c2)}if(t){v=f.$1(e0)
d5.bQq(e2,v,i,(r?C.cl:B.c).j(0.45),"")
e0=f.$1(e0)
v=k.b.a.c
v=v.gb4(v)
t=k.b.a.c
c5=J.a5d(e0,v/2+2,d9-t.gb4(t)/2-2)
t=i+3
v=k.b.a.c
v=c5-v.gb4(v)/2-2
e0=k.b
a3=e0.c
e0=e0.a.c
e0=A.bx(new A.a4(t,v,t+(a3+8),v+(e0.gb4(e0)+4)),B.pm)
$.T()
v=A.L()
v.r=(r?C.cl:B.c).j(0.85).gp(0)
e2.aq(e0,v)
e0=k.b.a.c
k.a5(e2,new A.m(i+7,c5-e0.gb4(e0)/2))}for(e0=a4.length,v=x.v,c6=0,u=0;u<a4.length;a4.length===e0||(0,A.I)(a4),++u){t=a4[u]
a6=t.b
a1=g.$1(t.a)
c3=1+B.n.F(c6,2)*12;++c6
t=$.T()
a3=A.a([],v)
c7=new A.aI(t.r,B.ak,d6,d6,a3)
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
t=new A.bz()
a3.push(t)
a3=c7.f
if(a3!=null)t.aj(a3)
c7.ac()
t=new A.ar(B.U,B.R,B.X,B.Y,B.W)
a3=a6.d
t.r=a3.gp(0)
e2.af(c7,t)
c8=new A.iS(new A.eE(a6.c,d6,d6,B.cV,d6,d6,d6,d6,d6,d6,new A.G(!0,a3,d6,p,d6,d6,10,B.C,d6,d6,d6,d6,d6,d6,d6,d6,d6,d6,d6,d6,d6,d6,d6,d6,d6,d6)),B.a7,B.ca,new A.k2(1),d6,d6,d6,d6,B.cb,d6,B.cJ)
c8.eJ()
t=a1+7
a3=c8.b.c
t=t+a3<=i?t:a1-7-a3
c8.a5(e2,new A.m(t,c3-1))}c8=A.h0(d6,B.cJ,d6,d6,d6,d6,B.a7,B.ca,d6,B.e4,B.cb)
for(e0=[0,l/3|0,B.n.ao(2*l,3),a5],v=e0.length,d8-=13,u=0;u<v;++u){d=e0[u]
t=J.t(w[d],"t")
b2=A.be(A.v(t==null?"":t))
if(b2==null)continue
t=D.LR(D.SL(b2))
a3=r?C.bT:C.bV
c8.sb1(0,new A.eE(t,d6,d6,B.cV,d6,d6,d6,d6,d6,d6,new A.G(!0,a3,d6,p,d6,d6,10,d6,d6,d6,d6,d6,d6,d6,d6,d6,d6,d6,d6,d6,d6,d6,d6,d6,d6,d6)))
c8.eJ()
t=g.$1(d)
a3=c8.b.c
c8.a5(e2,new A.m(B.h.D(t-a3/2,0,e1-a3),d8))}if(a2&&q<l){s=w[q]
a1=g.$1(q)
d8=J.a1(s)
c9=f.$1(D.c5(d8.h(s,"c")))
$.T()
d0=A.L()
d0.r=(r?C.cl:B.c).j(0.5).gp(0)
d0.c=1
for(b5=0;b5<d9;b5+=6)e2.ah(new A.m(a1,b5),new A.m(a1,b5+3),d0)
$.T()
e0=A.L()
e0.r=(r?B.c.j(0.92):C.ib).gp(0)
e2.O(new A.m(a1,c9),6,e0)
e0=A.L()
e0.r=(r?C.cl:B.c).gp(0)
e0.b=B.ad
e0.c=2.5
e2.O(new A.m(a1,c9),6,e0)
e0=d8.h(s,"t")
b2=A.be(A.v(e0==null?"":e0))
e0=b2==null?"":D.LR(D.SL(b2))+" ET\n"
d8=D.eg(D.c5(d8.h(s,"c")),!0,!1)
c8.sb1(0,A.cW(d6,d6,d6,d6,d6,d6,d6,d6,d6,A.l(d6,d6,r?B.c:C.n7,d6,d6,d6,d6,d6,p,d6,d6,11.5,d6,d6,B.C,d6,1.3,!0,d6,d6,d6,d6,d6,d6,d6,d6),e0+d8))
c8.sDB(0,B.K)
c8.eJ()
d8=c8.b
d1=d8.c+18
d8=d8.a.c
d2=d8.gb4(d8)+10
d3=B.h.D(a1-d1/2,0,e1-d1)
d4=Math.max(0,c9-d2-14)
e1=A.bx(new A.a4(d3,d4,d3+d1,d4+d2),B.hT)
d8=A.L()
d8.r=(r?C.n7:B.c).gp(0)
e2.aq(e1,d8)
c8.a5(e2,new A.m(d3+9,d4+5))}},
bQr(d,e,f,g,h,i){var w,v,u,t,s,r,q,p,o,n,m=null
$.T()
w=A.L()
w.r=g.gp(0)
w.c=1.2
for(v=0;v<f;v+=7)d.ah(new A.m(v,e),new A.m(v+3.5,e),w)
if(h.length===0)return
u=A.h0(m,B.cJ,m,m,m,A.cW(m,m,m,m,m,m,m,m,m,A.l(m,m,B.c,m,m,m,m,m,this.b,m,m,10,m,m,B.C,m,m,!0,m,m,m,m,m,m,m,m),h),B.a7,B.ca,m,B.e4,B.cb)
u.eJ()
t=u.b
s=t.c+12
t=t.a.c
r=t.gb4(t)+6
q=i?0:f-s
t=e-r/2
p=A.bx(new A.a4(q,t,q+s,t+r),B.qr)
$.T()
o=A.L()
if(i)n=F.qS
else n=this.e.a?C.n7:B.c
o.r=n.gp(0)
d.aq(p,o)
u.a5(d,new A.m(q+6,t+3))},
bQq(d,e,f,g,h){return this.bQr(d,e,f,g,h,!1)},
aD(d){var w=this
return d.d!==w.d||d.x!=w.x||d.r!==w.r||d.w!==w.w||d.e.a!==w.e.a||d.c!==w.c}}
D.bxh.prototype={
a5(d,e){var w,v,u,t,s,r,q,p,o,n,m=null,l=this.b
if(l.length<2)return
w=A.U(l).k("O<1,H>")
v=A.B(new A.O(l,new D.fkH(),w),w.k("aj.E"))
u=B.d.eL(v,B.pD)
t=B.d.eL(v,B.oC)-u
if(t<1e-9)t=1
l=$.T()
w=A.a([],x.v)
s=new A.aI(l.r,B.ak,m,m,w)
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
s.ac()}}n=A.zW(s)
n.E(new A.aq(l,r))
n.E(new A.aq(0,r))
n.E(new A.bz())
$.T()
w=A.L()
p=this.c
w.san(new A.a6(B.aU,B.b2,B.w,A.a([p.j(0.25),p.j(0)],x.O),m,m).az(0,new A.a4(0,0,0+l,0+r)))
d.af(n,w)
w=A.L()
w.r=p.gp(0)
w.b=B.ad
w.c=1.8
w.e=B.dQ
d.af(s,w)
w=B.d.gal(v)
o=A.L()
o.r=p.gp(0)
d.O(new A.m(l,r-(w-u)/t*r),3,o)},
aD(d){return d.b!==this.b||!d.c.A(0,this.c)}}
D.z9.prototype={}
D.RK.prototype={
gIq(){return this.a?B.ci.j(0.08):B.v.j(0.35)}}
D.P_.prototype={
R(){return new D.aGZ(A.a([],x.t))}}
D.aGZ.prototype={
Z(){var w=this
w.a4()
w.a.toString
w.Bm()
w.BJ()
w.x=A.d5(B.m2,new D.e9U(w))},
t(){var w=this.x
if(w!=null)w.a2(0)
this.a3()},
Bm(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$Bm=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.aB(),$async$Bm)
case 7:q=e
n=r.a.c
p=A.aV(J.t(q.a,"ngmy_signal_grid_fast_"+n))
if(p==null||r.c==null||r.d!=null){w=1
break}o=A.a0(x.f.a(B.V.aP(0,p,null)),x.N,x.z)
r.l(new D.e9m(r,o))
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
return A.i($async$Bm,v)},
BJ(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j
var $async$BJ=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:m=x.N
l=x.z
w=3
return A.b(A.hc(A.a([A.fJ(A.J(["action","fsStatus","system",r.a.c],m,l),!1,!1,!1,!1,B.x6),A.fJ(A.J(["action","fsLog","system",r.a.c,"limit",30],m,l),!1,!1,!1,!1,B.m2)],x.o),x.h),$async$BJ)
case 3:k=e
l=J.a1(k)
q=l.h(k,0)
o=l.h(k,1)
if(r.c==null){w=1
break}r.l(new D.e9B(r,q,o))
w=q!=null&&J.z(J.t(q,"ok"),!0)?4:5
break
case 4:t=7
w=10
return A.b(A.aB(),$async$BJ)
case 10:p=e
w=11
return A.b(p.aB("String","ngmy_signal_grid_fast_"+r.a.c,B.V.au(A.J(["s",q,"log",r.e],m,x.K),null)),$async$BJ)
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
return A.i($async$BJ,v)},
zs(d){return this.cCJ(d)},
cCJ(d){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$zs=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.d
t.l(new D.e9H(t,d))
w=3
return A.b(A.fJ(A.J(["action","fsSet","system",t.a.c,"enabled",d],x.N,x.z),!1,!1,!1,!1,B.x6),$async$zs)
case 3:s=f
if(t.c==null){w=1
break}t.l(new D.e9I(t,s,r))
case 1:return A.h(u,v)}})
return A.i($async$zs,v)},
C(c3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8=this,a9=null,b0="brakePaused",b1="enabled",b2="entryPrice",b3="weekendNote",b4="pnlSum",b5="brakeNote",b6=A.Q(c3).ax.a===B.dg,b7=new D.RK(b6),b8=a8.a.c==="options"?"Options":"Scalper",b9=a8.d,c0=D.dF(b9==null?a9:b9.h(0,"state")),c1=J.z(c0.h(0,b0),!0),c2=J.z(c0.h(0,b1),!0)&&!c1
b9=b6?C.tc:C.ta
w=b6?C.tc:C.ta
w=A.a([w,b6?C.Oe:C.O6],x.O)
v=a8.a1p(b7,B.eE,new D.e9S(c3))
u=a8.a.c==="options"
t=u?B.az:B.as
s=A.n(11)
t=A.q(a9,A.V(u?B.fP:B.ru,B.c,a9,a9,a9,20),B.f,a9,a9,new A.p(t,a9,a9,s,a9,a9,B.m),a9,34,a9,a9,a9,a9,a9,34)
u=A.c(b8,a9,a9,a9,a9,a9,a9,A.l(a9,a9,b6?C.cl:B.c,a9,a9,a9,a9,a9,a9,a9,a9,17,a9,a9,B.C,a9,a9,!0,a9,a9,a9,a9,a9,a9,a9,a9),a9,a9,a9)
s=x.p
u=A.a([v,B.ar,t,B.ar,A.E(A.w(A.a([u,A.c("Fast system",a9,a9,a9,a9,a9,a9,A.l(a9,a9,b6?C.bT:C.bV,a9,a9,a9,a9,a9,a9,a9,a9,11.5,a9,a9,a9,a9,a9,!0,a9,a9,a9,a9,a9,a9,a9,a9),a9,a9,a9)],s),B.B,a9,B.e,B.i,0,B.p),1)],s)
if(a8.d!=null){if(c1)v=C.d6
else if(c2)v=C.cH
else v=b6?C.bT:C.bV
v=v.j(0.14)
t=A.n(999)
if(c1)r="Paused"
else r=c2?"Running":"Stopped"
if(c1)q=C.d6
else if(c2)q=C.cH
else q=b6?C.bT:C.bV
u.push(A.q(a9,A.c(r,a9,a9,a9,a9,a9,a9,A.l(a9,a9,q,a9,a9,a9,a9,a9,a9,a9,a9,12,a9,a9,B.C,a9,a9,!0,a9,a9,a9,a9,a9,a9,a9,a9),a9,a9,a9),B.f,a9,a9,new A.p(v,a9,a9,t,a9,a9,B.m),a9,a9,a9,a9,B.h0,a9,a9,a9))}u.push(B.aa)
u.push(a8.a1p(b7,B.mF,a8.r?a9:new D.e9T(a8)))
v=A.A(u,B.l,a9,B.e,B.i,0,a9,a9)
if(a8.f)b6=B.l2
else{u=a8.d
if(u==null){b6=a8.w
b6=A.a([a8.RJ(b7,b6==null?"Nothing to show yet.":b6,B.b0)],s)}else{c0=D.dF(u.h(0,"state"))
t=x.f
p=t.b(c0.h(0,"shadow"))?D.dF(c0.h(0,"shadow")):a9
r=A.a([],s)
if(p!=null){q=D.dF(c0.h(0,"mark"))
o=t.b(p.h(0,"option"))?D.dF(p.h(0,"option")):a9
t=p.h(0,"entryAt")
n=A.be(A.v(t==null?"":t))
t=p.h(0,"maxHold")
m=B.h.M(D.c5(t==null?30:t))
l=n==null?a9:n.bL(A.dw(0,0,0,0,m,0).a)
k=D.c5(q.h(0,"pnl"))
t=a8.a.c==="options"?B.az:B.as
j=A.c("OPEN TRADE",a9,a9,a9,a9,a9,a9,A.l(a9,a9,b6?C.bT:C.bV,a9,a9,a9,a9,a9,a9,a9,a9,10.5,a9,a9,B.u,a9,a9,!0,a9,0.8,a9,a9,a9,a9,a9,a9),a9,a9,a9)
j=A.A(A.a([j,B.aX,new D.aBQ(l,a8.a.c==="options"?B.az:B.as,a9)],s),B.l,a9,B.e,B.i,0,a9,a9)
i=o!=null
if(i){h=A.v(p.h(0,"symbol"))
g=D.eg(D.c5(o.h(0,"strike")),!0,!1)
f=o.h(0,"right")
h=h+" "+g+" "+A.v(f==null?"call":f)+" \xb7 expires "+D.aRy(o.h(0,"expiry"))}else h=A.v(p.h(0,"symbol"))
h=A.c(h,a9,a9,a9,a9,a9,a9,A.l(a9,a9,b6?C.cl:B.c,a9,a9,a9,a9,a9,a9,a9,a9,17,a9,a9,B.C,a9,a9,!0,a9,a9,a9,a9,a9,a9,a9,a9),a9,a9,a9)
if(i){i=D.eg(D.c5(p.h(0,b2)),!0,!1)
g=D.eg(D.c5(q.h(0,"cost")),!0,!1)
q=J.z(q.h(0,"priced"),!1)?"no price yet":D.eg(D.c5(q.h(0,"price")),!0,!1)
q="Premium paid "+i+" x 100 = "+g+" \xb7 now "+q}else q="$"+B.h.a1(D.c5(q.h(0,"cost")),0)+" bought at "+D.eg(D.c5(p.h(0,b2)),!0,!1)+" \xb7 now "+D.eg(D.c5(q.h(0,"price")),!0,!1)
q=A.c(q,a9,a9,a9,a9,a9,a9,A.l(a9,a9,b6?C.bT:C.bV,a9,a9,a9,a9,a9,a9,a9,a9,12,a9,a9,a9,a9,a9,!0,a9,a9,a9,a9,a9,a9,a9,a9),a9,a9,a9)
i=D.eg(k,!0,!0)
g=k>=0
i=A.c(i,a9,a9,a9,a9,a9,a9,A.l(a9,a9,g?C.cH:C.d6,a9,a9,a9,a9,a9,a9,a9,a9,26,a9,a9,B.u,a9,a9,!0,a9,a9,a9,a9,a9,a9,a9,a9),a9,a9,a9)
g=g?"winning right now":"losing right now"
i=A.A(A.a([i,B.aa,A.c(g,a9,a9,a9,a9,a9,a9,A.l(a9,a9,b6?C.bT:C.bV,a9,a9,a9,a9,a9,a9,a9,a9,12,a9,a9,a9,a9,a9,!0,a9,a9,a9,a9,a9,a9,a9,a9),a9,a9,a9)],s),B.l,a9,B.e,B.i,0,a9,a9)
g=D.hpz(p.h(0,"entryAt"))
f=l==null?"":" \xb7 max hold "+m+" min, closes by "+D.LR(D.SL(l.aa()))+" ET"
e=p.h(0,"tpUsd")==null?"":" \xb7 take profit +"+D.eg(D.c5(p.h(0,"tpUsd")),!0,!1)+" / stop -"+D.eg(D.c5(p.h(0,"slUsd")),!0,!1)
r.push(a8.b4e(b7,t,A.w(A.a([j,B.N,h,B.bs,q,B.aj,i,A.c("Bought "+g+f+e,a9,a9,a9,a9,a9,a9,A.l(a9,a9,b6?C.bT:C.bV,a9,a9,a9,a9,a9,a9,a9,a9,11.5,a9,a9,a9,a9,a9,!0,a9,a9,a9,a9,a9,a9,a9,a9),a9,a9,a9)],s),B.B,a9,B.e,B.i,0,B.p)))}r.push(a8.ca_(b7,u))
r.push(a8.bMA(b7,u))
p=D.dF(u.h(0,"shared"))
d=p.h(0,"balance")
a0=D.c5(p.h(0,"closed"))+D.c5(p.h(0,"open"))
t=A.n(26)
q=A.A(A.a([C.b_j,B.aX,A.q(a9,C.h6z,B.f,a9,a9,new A.p(B.c.j(0.14),a9,a9,A.n(999),a9,a9,B.m),a9,a9,a9,a9,B.f8,a9,a9,a9)],s),B.l,a9,B.e,B.i,0,a9,a9)
j=A.c(d==null?"\u2014":D.eg(D.c5(d),!0,!1),a9,a9,a9,a9,a9,a9,C.fJW,a9,a9,a9)
i=D.eg(a0,!0,!0)
if(a0>0)h=C.cH
else h=a0<0?C.d6:B.ab
h=A.c(i+" from trades of every system",a9,a9,a9,a9,a9,a9,A.l(a9,a9,h,a9,a9,a9,a9,a9,a9,a9,a9,12.5,a9,a9,B.C,a9,a9,!0,a9,a9,a9,a9,a9,a9,a9,a9),a9,a9,a9)
r.push(A.q(a9,A.w(A.a([q,B.at,new A.d7(B.dn,B.a5,B.f,j,a9),h,B.bs,A.c("Alpaca account "+(p.h(0,"equity")==null?"\u2014":D.eg(D.c5(p.h(0,"equity")),!0,!1))+" (unchanged, no orders are sent)",a9,a9,a9,a9,a9,a9,B.FK,a9,a9,a9)],s),B.B,a9,B.e,B.i,0,B.p),B.f,a9,a9,new A.p(a9,a9,a9,t,a9,C.avA,B.m),a9,a9,a9,B.dW,B.f7,a9,a9,a9))
t=a8.w
if(t!=null)r.push(a8.RJ(b7,t,C.d6))
if(J.z(c0.h(0,b0),!0)){t=c0.h(0,"brakeReason")
r.push(a8.RJ(b7,"Paused by this system's brake. "+A.v(t==null?"":t)+y.g,C.d6))}r.push(a8.aBv(b7,c0))
if(u.h(0,b3)!=null){t=A.V(B.asb,b6?C.bT:C.bV,a9,a9,a9,16)
q=A.v(u.h(0,b3))
r.push(new A.C(C.bLi,A.A(A.a([t,B.b7,A.E(A.c(q,a9,a9,a9,a9,a9,a9,A.l(a9,a9,b6?C.bT:C.bV,a9,a9,a9,a9,a9,a9,a9,a9,11.5,a9,a9,B.O,a9,a9,!0,a9,a9,a9,a9,a9,a9,a9,a9),a9,a9,a9),1)],s),B.l,a9,B.e,B.i,0,a9,a9),a9))}r.push(a8.aCb(b7,u))
r.push(a8.c7v(b7,u))
a1=D.dF(u.h(0,"record"))
a2=D.dF(u.h(0,"todayStats"))
a3=a2.h(0,"winRatePct")
a4=D.c5(a2.h(0,"pnl"))
t=a3==null
if(t)a5=b6?C.cl:B.c
else a5=D.c5(a3)>=50?C.cH:C.d6
q=A.c("TODAY: WIN RATE AND P/L",a9,a9,a9,a9,a9,a9,A.l(a9,a9,b6?C.bT:C.bV,a9,a9,a9,a9,a9,a9,a9,a9,10.5,a9,a9,B.u,a9,a9,!0,a9,0.9,a9,a9,a9,a9,a9,a9),a9,a9,a9)
j=t?"No closed trades today":B.h.a1(D.c5(a3),0)+"%"
j=A.a([A.c(j,a9,a9,a9,a9,a9,a9,A.l(a9,a9,a5,a9,a9,a9,a9,a9,a9,a9,a9,t?16:30,a9,a9,B.u,a9,a9,!0,a9,a9,a9,a9,a9,a9,a9,a9),a9,a9,a9),B.ar],s)
if(!t){t=D.eg(a4,!0,!0)
if(a4>0)i=C.cH
else if(a4<0)i=C.d6
else i=b6?C.cl:B.c
j.push(new A.C(Q.Pe,A.c(t,a9,a9,a9,a9,a9,a9,A.l(a9,a9,i,a9,a9,a9,a9,a9,a9,a9,a9,16,a9,a9,B.C,a9,a9,!0,a9,a9,a9,a9,a9,a9,a9,a9),a9,a9,a9),a9))}t=A.A(j,B.dr,a9,B.e,B.i,0,a9,a9)
j=a2.h(0,"wins")
j=A.v(j==null?0:j)
i=a2.h(0,"closed")
i=A.v(i==null?0:i)
t=A.E(A.w(A.a([q,B.at,t,A.c(j+" won out of "+i+" closed today",a9,a9,a9,a9,a9,a9,A.l(a9,a9,b6?C.bT:C.bV,a9,a9,a9,a9,a9,a9,a9,a9,12,a9,a9,a9,a9,a9,!0,a9,a9,a9,a9,a9,a9,a9,a9),a9,a9,a9)],s),B.B,a9,B.e,B.i,0,B.p),1)
q=A.c("All time",a9,a9,a9,a9,a9,a9,A.l(a9,a9,b6?C.bT:C.bV,a9,a9,a9,a9,a9,a9,a9,a9,11,a9,a9,a9,a9,a9,!0,a9,a9,a9,a9,a9,a9,a9,a9),a9,a9,a9)
j=D.eg(D.c5(a1.h(0,b4)),!0,!0)
if(D.c5(a1.h(0,b4))>0)i=C.cH
else if(D.c5(a1.h(0,b4))<0)i=C.d6
else i=b6?C.cl:B.c
i=A.c(j,a9,a9,a9,a9,a9,a9,A.l(a9,a9,i,a9,a9,a9,a9,a9,a9,a9,a9,18,a9,a9,B.C,a9,a9,!0,a9,a9,a9,a9,a9,a9,a9,a9),a9,a9,a9)
j=a1.h(0,"wins")
j=A.v(j==null?0:j)
h=a1.h(0,"losses")
h=A.v(h==null?0:h)
r.push(a8.wD(b7,A.A(A.a([t,A.w(A.a([q,i,A.c(j+" W / "+h+" L",a9,a9,a9,a9,a9,a9,A.l(a9,a9,b6?C.bT:C.bV,a9,a9,a9,a9,a9,a9,a9,a9,11,a9,a9,a9,a9,a9,!0,a9,a9,a9,a9,a9,a9,a9,a9),a9,a9,a9)],s),B.dr,a9,B.e,B.i,0,B.p)],s),B.l,a9,B.e,B.i,0,a9,a9)))
if(a8.a.c==="options"&&u.h(0,b5)!=null)r.push(a8.RJ(b7,A.v(u.h(0,b5)),B.b0))
if(a8.a.c==="options")r.push(a8.cok(b7,u))
r.push(a8.cD7(b7,u))
t=c0.h(0,"lastNote")
a6=J.k(t==null?"":t)
t=c0.h(0,"lastNoteAt")
if(t==null)t=c0.h(0,"lastTickAt")
a7=A.be(A.v(t==null?"":t))
if(J.z(c0.h(0,b1),!0))t=C.cH
else t=b6?C.bT:C.bV
t=A.V(O.Qy,t,a9,a9,a9,18)
q=J.z(c0.h(0,b1),!0)?"Checks every minute by itself":"Stopped: press Start to let it check every minute"
q=A.a([A.c(q,a9,a9,a9,a9,a9,a9,A.l(a9,a9,b6?C.cl:B.c,a9,a9,a9,a9,a9,a9,a9,a9,13,a9,a9,B.C,a9,a9,!0,a9,a9,a9,a9,a9,a9,a9,a9),a9,a9,a9)],s)
if(a6.length!==0){j=a7==null?"":D.LR(D.SL(a7.aa()))+" ET \xb7 "
B.d.u(q,A.a([B.cR,A.c(j+a6,a9,a9,a9,a9,a9,a9,A.l(a9,a9,b6?C.bT:C.bV,a9,a9,a9,a9,a9,a9,a9,a9,12,a9,a9,a9,a9,1.3,!0,a9,a9,a9,a9,a9,a9,a9,a9),a9,a9,a9)],s))}r.push(a8.wD(b7,A.A(A.a([t,B.aa,A.E(A.w(q,B.B,a9,B.e,B.i,0,B.p),1)],s),B.B,a9,B.e,B.i,0,a9,a9)))
r.push(a8.cLl(b7,u))
r.push(a8.bGb(b7))
r.push(a8.czM(b7,u))
r.push(a8.wD(b7,A.A(A.a([C.c6r,B.aa,A.E(A.c("No order is ever sent to Alpaca. Orders are disabled.",a9,a9,a9,a9,a9,a9,A.l(a9,a9,b6?C.bT:C.bV,a9,a9,a9,a9,a9,a9,a9,a9,11.5,a9,a9,a9,a9,1.3,!0,a9,a9,a9,a9,a9,a9,a9,a9),a9,a9,a9),1)],s),B.l,a9,B.e,B.i,0,a9,a9)))
b6=r}b6=A.Gl(A.co(b6,a9,a9,C.aoF,a9,a9,B.ah,!1),a9,a8.gchQ())}return A.c6(a9,b9,A.q(a9,A.bn(!0,A.w(A.a([new A.C(B.hd,v,a9),A.E(b6,1)],s),B.l,a9,B.e,B.i,0,B.p),!0,!1,B.ag,!0,!0),B.f,a9,a9,new A.p(a9,a9,a9,a9,a9,new A.a6(B.aU,B.b2,B.w,w,a9,a9),B.m),a9,a9,a9,a9,a9,a9,a9,a9),a9,!1,!1,a9,a9)},
aBv(d,e){var w,v,u,t=this,s=null,r=J.z(e.h(0,"enabled"),!0)&&!J.z(e.h(0,"brakePaused"),!0),q=r?C.d6:C.cH
q=A.bp(q,s,s,s,s,s,s,s,new A.ba(A.n(999),B.a1),s,s,s)
w=t.r
if(!w)t.a.toString
v=w?s:new D.e9f(t,r)
if(w)w=B.rQ
else w=A.V(r?B.vJ:B.fQ,s,s,s,s,s)
if(r)u="Stop "+(t.a.c==="options"?"Options":"Scalper")
else u="Start "+(t.a.c==="options"?"Options":"Scalper")
return new A.C(B.dW,new A.a5(1/0,52,A.df(w,s,A.c(u,s,s,s,s,s,s,B.mU,s,s,s),v,q),s),s)},
aCb(b5,b6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6=this,a7=null,a8="parts",a9="passes",b0=D.dF(b6.h(0,"pace")),b1=b0.h(0,"target"),b2=B.h.M(D.c5(b1==null?40:b1)),b3=B.h.M(D.c5(b0.h(0,"trades"))),b4=D.c5(b0.h(0,"thresholdPct"))
b1=b0.h(0,"entryFloor")
w=D.c5(b1==null?0.5:b1)
v=B.h.M(D.c5(b0.h(0,"minutesLeft")))
b1=x.g.a(b6.h(0,"ranking"))
if(b1==null)b1=B.bN
u=x.f
b1=J.cL(b1,u)
t=x.P
b1=A.ct(b1,new D.e9y(),b1.$ti.k("M.E"),t)
s=A.B(b1,A.a3(b1).k("M.E"))
r=b3>=b2?E.i1:C.cH
b1=D.dF(b6.h(0,"state")).h(0,"lastNote")
q=J.k(b1==null?"":b1)
b1=b0.h(0,"learned")
p=J.k(b1==null?"":b1)
b1=b0.h(0,"dayNote")
o=J.k(b1==null?"":b1)
b1=b5.a
n=A.c("TRADES TODAY",a7,a7,a7,a7,a7,a7,A.l(a7,a7,b1?C.bT:C.bV,a7,a7,a7,a7,a7,a7,a7,a7,10.5,a7,a7,B.u,a7,a7,!0,a7,0.9,a7,a7,a7,a7,a7,a7),a7,a7,a7)
m=J.z(b0.h(0,"inWindow"),!0)?""+B.n.ao(v,60)+"h "+B.n.F(v,60)+"m left":"window closed"
l=x.p
m=A.A(A.a([n,B.aX,a6.Ce(m,b1?C.bT:C.bV)],l),B.l,a7,B.e,B.i,0,a7,a7)
n=""+b3
k=""+b2
j=A.A(A.a([A.E(A.c("Trades today: "+n+" of "+k,a7,a7,a7,a7,a7,a7,A.l(a7,a7,b1?C.cl:B.c,a7,a7,a7,a7,a7,a7,a7,a7,22,a7,a7,B.u,a7,a7,!0,a7,a7,a7,a7,a7,a7,a7,a7),a7,a7,a7),1)],l),B.dr,a7,B.e,B.i,0,a7,a7)
i=b0.h(0,"waiting")
n=A.c(n+" of "+k+" \u2014 "+A.v(i==null?"waiting for a real setup":i)+" ("+k+" is a maximum, never a target)",a7,a7,a7,a7,a7,a7,A.l(a7,a7,r,a7,a7,a7,a7,a7,a7,a7,a7,12.5,a7,a7,B.C,a7,1.3,!0,a7,a7,a7,a7,a7,a7,a7,a7),a7,a7,a7)
k=A.cg(new D.e9z(b5,b3,b2,r))
i=b1?C.r2:C.r3
h=A.n(12)
g=B.h.a1(w,2)
g=A.a([A.c("Entry floor today: +"+g+"%",a7,a7,a7,a7,a7,a7,A.l(a7,a7,b1?C.cl:B.c,a7,a7,a7,a7,a7,a7,a7,a7,13,a7,a7,B.C,a7,a7,!0,a7,a7,a7,a7,a7,a7,a7,a7),a7,a7,a7)],l)
if(b4>w+0.001)g.push(A.c("Needed for the next entry: +"+B.h.a1(b4,2)+"% (raised by a loss streak or a lesson)",a7,a7,a7,a7,a7,a7,C.aZ0,a7,a7,a7))
g.push(B.bs)
g.push(A.c("An entry needs the 5-minute and 15-minute trends to agree, at least that move in the trade's direction in the last 30 minutes, the price past both averages, and no more than 1.5% in the last hour (no chasing). Falling behind never loosens a rule.",a7,a7,a7,a7,a7,a7,A.l(a7,a7,b1?C.bT:C.bV,a7,a7,a7,a7,a7,a7,a7,a7,11,a7,a7,a7,a7,1.3,!0,a7,a7,a7,a7,a7,a7,a7,a7),a7,a7,a7))
n=A.a([m,B.aj,j,B.bs,n,B.N,k,B.S,A.q(a7,A.w(g,B.B,a7,B.e,B.i,0,B.p),B.f,a7,a7,new A.p(i,a7,a7,h,a7,a7,B.m),a7,a7,a7,a7,B.bS,a7,a7,1/0)],l)
if(s.length!==0){m=A.a([B.N,A.c("Top 3 ranked right now",a7,a7,a7,a7,a7,a7,A.l(a7,a7,b1?C.cl:B.c,a7,a7,a7,a7,a7,a7,a7,a7,12.5,a7,a7,B.C,a7,a7,!0,a7,a7,a7,a7,a7,a7,a7,a7),a7,a7,a7),B.bs],l)
for(t=A.aoM(s,0,t),k=J.aO(t.a),t=t.b,j=new A.Ff(k,t),i=x.N,h=x.z;j.B();){g=j.c
g=g>=0?new A.y(t+g,k.gP(k)):A.bi(A.fc())
f=g.b
e=J.a1(f)
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
if(J.z(e.h(f,a9),!0))a5=C.cH
else a5=b1?C.bT:C.bV
e=J.z(e.h(f,a9),!0)?B.C:B.cE
m.push(new A.C(B.rg,A.c(""+(g.a+1)+". "+d+" \xb7 score "+a0+" (strength and trend "+a1+", record "+a2+", setup size "+a3+") \xb7 "+a4,a7,a7,a7,a7,a7,a7,new A.G(!0,a5,a7,a7,a7,a7,11.5,e,a7,a7,a7,a7,1.3,a7,a7,a7,a7,a7,a7,a7,a7,a7,a7,a7,a7,a7),a7,a7,a7),a7))}B.d.u(n,m)}if(p.length!==0){u=A.cW(A.a([A.cW(a7,a7,a7,a7,a7,a7,a7,a7,a7,A.l(a7,a7,a6.a.c==="options"?B.az:B.as,a7,a7,a7,a7,a7,a7,a7,a7,a7,a7,a7,B.u,a7,a7,!0,a7,a7,a7,a7,a7,a7,a7,a7),"What it learned: "),A.cW(a7,a7,a7,a7,a7,a7,a7,a7,a7,a7,p)],x.R),a7,a7,a7,a7,a7,a7,a7,a7,a7,a7)
B.d.u(n,A.a([B.N,A.GH(u,a7,a7,A.l(a7,a7,b1?C.cl:B.c,a7,a7,a7,a7,a7,a7,a7,a7,12,a7,a7,a7,a7,1.35,!0,a7,a7,a7,a7,a7,a7,a7,a7),a7)],l))}if(o.length!==0)B.d.u(n,A.a([B.aj,A.c(o,a7,a7,a7,a7,a7,a7,A.l(a7,a7,E.i1,a7,a7,a7,a7,a7,a7,a7,a7,12,a7,a7,B.O,a7,1.3,!0,a7,a7,a7,a7,a7,a7,a7,a7),a7,a7,a7)],l))
if(q.length!==0){u=A.cW(A.a([A.cW(a7,a7,a7,a7,a7,a7,a7,a7,a7,A.l(a7,a7,a6.a.c==="options"?B.az:B.as,a7,a7,a7,a7,a7,a7,a7,a7,a7,a7,a7,B.u,a7,a7,!0,a7,a7,a7,a7,a7,a7,a7,a7),"Last decision: "),A.cW(a7,a7,a7,a7,a7,a7,a7,a7,a7,a7,q)],x.R),a7,a7,a7,a7,a7,a7,a7,a7,a7,a7)
B.d.u(n,A.a([B.aj,A.GH(u,a7,a7,A.l(a7,a7,b1?C.cl:B.c,a7,a7,a7,a7,a7,a7,a7,a7,12,a7,a7,a7,a7,1.3,!0,a7,a7,a7,a7,a7,a7,a7,a7),a7)],l))}return a6.wD(b5,A.w(n,B.B,a7,B.e,B.i,0,B.p))},
c7v(a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=this,a2=null,a3="text",a4=D.dF(a6.h(0,"learning"))
if(a4.a===0)return B.bK
w=new D.e9j(a4)
v=w.$1("lessons")
u=w.$1("benched")
t=w.$1("lastLosses")
s=x.g.a(a4.h(0,"review"))
if(s==null)s=B.bN
s=J.b8(s,new D.e9g(),x.N)
r=A.B(s,s.$ti.k("aj.E"))
s=a4.h(0,"pauseUntil")
q=A.be(A.v(s==null?"":s))
p=new D.e9h(a5)
o=new D.e9i(a1,a5)
s=A.V(B.R6,a1.a.c==="options"?B.az:B.as,a2,a2,a2,18)
n=a5.a
m=A.c("LEARNING",a2,a2,a2,a2,a2,a2,A.l(a2,a2,n?C.cl:B.c,a2,a2,a2,a2,a2,a2,a2,a2,12,a2,a2,B.u,a2,a2,!0,a2,0.8,a2,a2,a2,a2,a2,a2),a2,a2,a2)
l=J.a1(v)
k=l.gI(v)===0?"NO LESSONS YET":""+l.gI(v)+" ACTIVE"
if(l.gI(v)===0)j=n?C.bT:C.bV
else j=a1.a.c==="options"?B.az:B.as
i=x.p
j=A.a([A.A(A.a([s,B.b7,m,B.aX,a1.Ce(k,j)],i),B.l,a2,B.e,B.i,0,a2,a2)],i)
if(J.z(a4.h(0,"setupNeeded"),!0))j.push(new A.C(B.hz,A.c("The learning store is not set up yet: run the learning SQL in Supabase.",a2,a2,a2,a2,a2,a2,A.l(a2,a2,C.d6,a2,a2,a2,a2,a2,a2,a2,a2,12,a2,a2,B.O,a2,a2,!0,a2,a2,a2,a2,a2,a2,a2,a2),a2,a2,a2),a2))
j.push(p.$1("Lessons active today"))
if(l.gI(v)===0){s=a4.h(0,"empty")
s=A.v(s==null?"No lessons yet \u2014 still learning this market.":s)
j.push(A.c(s,a2,a2,a2,a2,a2,a2,A.l(a2,a2,n?C.bT:C.bV,a2,a2,a2,a2,a2,a2,a2,a2,12,a2,a2,a2,a2,a2,!0,a2,a2,a2,a2,a2,a2,a2,a2),a2,a2,a2))}for(s=v.length,h=0;h<v.length;v.length===s||(0,A.I)(v),++h){g=v[h]
m=J.a1(g)
l=m.h(g,a3)
l=A.v(l==null?"":l)
j.push(o.$1(l+(m.h(g,"at")==null?"":" \xb7 "+D.hrs(D.hpz(m.h(g,"at"))))))}if(q!=null&&q.cb(new A.W(Date.now(),0,!1)))j.push(o.$3$c$icon("Paused after 2 losses in a row until "+D.LR(D.SL(q.aa()))+" ET",E.i1,C.bWs))
if(J.z(a4.h(0,"stepUpNext"),!0))j.push(o.$3$c$icon("The next entry needs +0.8% or more in 30 minutes (after 2 losses in a row)",E.i1,B.mH))
j.push(p.$1("Benched markets"))
if(J.aa(u)===0)j.push(A.c("None benched today.",a2,a2,a2,a2,a2,a2,A.l(a2,a2,n?C.bT:C.bV,a2,a2,a2,a2,a2,a2,a2,a2,12,a2,a2,a2,a2,a2,!0,a2,a2,a2,a2,a2,a2,a2,a2),a2,a2,a2))
for(s=u.length,h=0;h<u.length;u.length===s||(0,A.I)(u),++h){f=u[h]
m=J.a1(f)
l=m.h(f,a3)
j.push(o.$3$c$icon(A.v(l==null?m.h(f,"symbol"):l),C.d6,B.tP))}j.push(p.$1("What the next entry needs"))
s=B.h.a1(D.c5(a4.h(0,"thresholdPct")),2)
m=a1.a.c==="options"?B.az:B.as
m=a1.Ce("STRENGTH +"+s+"%",m)
s=B.h.M(D.c5(a4.h(0,"maxHold")))
l=a1.a.c==="options"?B.az:B.as
l=a1.Ce("MAX HOLD "+s+" MIN",l)
s=B.h.a1(D.c5(a4.h(0,"chaseCapPct")),1)
k=a1.a.c==="options"?B.az:B.as
k=a1.Ce("NO-CHASE "+s+"% IN 1 H",k)
s=B.h.M(D.c5(a4.h(0,"chopSkipAt")))
e=a1.a.c==="options"?B.az:B.as
e=A.a([m,l,k,a1.Ce("CHOP SKIP "+s+"+",e)],i)
if(J.z(a4.h(0,"need60"),!0))e.push(a1.Ce("1-HOUR TREND MUST AGREE",E.i1))
j.push(A.c0(B.bI,e,B.br,a2,6,6))
j.push(p.$1("Last 5 loss reasons"))
if(J.aa(t)===0)j.push(A.c("No graded losses yet.",a2,a2,a2,a2,a2,a2,A.l(a2,a2,n?C.bT:C.bV,a2,a2,a2,a2,a2,a2,a2,a2,12,a2,a2,a2,a2,a2,!0,a2,a2,a2,a2,a2,a2,a2,a2),a2,a2,a2))
for(s=t.length,h=0;h<t.length;t.length===s||(0,A.I)(t),++h){g=t[h]
m=J.a1(g)
l=A.v(m.h(g,"market"))
k=m.h(g,"pnl")
if(!(typeof k=="number")){k=A.cA(A.v(k==null?"":k))
if(k==null)k=0}k=D.eg(k,!0,!0)
e=D.hIg(A.v(m.h(g,"reason")))
m=m.h(g,a3)
m=A.v(m==null?"":m)
d=n?C.cl:B.c
j.push(o.$3$c$icon(l+" "+k+" \xb7 "+e+": "+m,d,B.cC))}if(r.length!==0){s=A.a([p.$1("What I learned yesterday")],i)
for(m=r.length,h=0;h<r.length;r.length===m||(0,A.I)(r),++h){a0=r[h]
s.push(o.$2$c(a0,n?C.bT:C.bV))}B.d.u(j,s)}return a1.wD(a5,A.w(j,B.B,a2,B.e,B.i,0,B.p))},
b1_(d){var w=x.g.a(d.h(0,"markets"))
if(w==null)w=B.bN
w=J.cL(w,x.f)
w=A.ct(w,new D.e9s(),w.$ti.k("M.E"),x.P)
w=A.B(w,A.a3(w).k("M.E"))
return w},
ba2(d){if(d.length===0)return null
return B.d.ds(d,new D.e9F(this),new D.e9G(d))},
ca_(d,e){var w,v,u,t,s,r,q=this,p=null,o=q.b1_(e)
if(o.length===0)return B.bK
w=q.ba2(o)
w.toString
v=new A.X(o,new D.e9p(),A.U(o).k("X<1>")).gI(0)
u=o.length
t=d.a
u=A.c("Its markets ("+u+")",p,p,p,p,p,p,A.l(p,p,t?C.cl:B.c,p,p,p,p,p,p,p,p,14,p,p,B.C,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)
s=v===0
r=s?"NONE PASSING NOW":""+v+" PASSING NOW"
if(s)s=t?C.bT:C.bV
else s=C.cH
s=q.Ce(r,s)
r=x.p
return new A.C(B.d2,A.w(A.a([new A.C(C.apu,A.A(A.a([u,B.aa,s,B.aX,A.c("tap one",p,p,p,p,p,p,A.l(p,p,t?C.bT:C.bV,p,p,p,p,p,p,p,p,11,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)],r),B.l,p,B.e,B.i,0,p,p),p),new A.a5(p,96,A.hN(B.f,p,new D.e9q(q,o,w,d),o.length,p,p,B.aK,new D.e9r(),!1),p)],r),B.B,p,B.e,B.i,0,B.p),p)},
bMA(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f="symbol",e=h.ba2(h.b1_(a0))
if(e==null)return B.bK
w=J.a1(e)
v=x.g
u=v.a(D.dF(w.h(e,"chart")).h(0,"points"))
if(u==null)u=B.bN
t=x.f
u=J.cL(u,t)
s=x.P
u=A.ct(u,new D.e9d(),u.$ti.k("M.E"),s)
r=A.B(u,A.a3(u).k("M.E"))
q=D.dF(w.h(e,"analysis"))
p=D.c5(w.h(e,"changePct"))
u=D.bEF(A.v(w.h(e,f)),24)
o=A.v(w.h(e,f))
n=d.a
o=A.c(o,g,g,g,g,g,g,A.l(g,g,n?C.cl:B.c,g,g,g,g,g,g,g,g,15,g,g,B.C,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)
m=w.h(e,"name")
m=A.v(m==null?"":m)
l=x.p
m=A.E(A.w(A.a([o,A.c(m,g,1,B.a2,g,g,g,A.l(g,g,n?C.bT:C.bV,g,g,g,g,g,g,g,g,11.5,g,g,g,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)],l),B.B,g,B.e,B.i,0,B.p),1)
o=D.eg(D.c5(w.h(e,"price")),!0,!1)
o=A.c(o,g,g,g,g,g,g,A.l(g,g,n?C.cl:B.c,g,g,g,g,g,g,g,g,17,g,g,B.C,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)
k=p>=0
j=k?"+":""
i=B.h.a1(p,2)
u=A.a([A.A(A.a([u,B.aa,m,A.w(A.a([o,A.c(j+i+"% today",g,g,g,g,g,g,A.l(g,g,k?C.cH:C.d6,g,g,g,g,g,g,g,g,11,g,g,B.C,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)],l),B.dr,g,B.e,B.i,0,B.p)],l),B.l,g,B.e,B.i,0,g,g),B.S],l)
o=r.length
if(o>1){o=B.d.fE(r,Math.max(0,o-36))
m=D.c5(w.h(e,"price"))
v=v.a(a0.h(0,"trades"))
v=J.cL(v==null?B.bN:v,t)
s=A.ct(v,new D.e9e(),v.$ti.k("M.E"),s)
v=A.B(s,A.a3(s).k("M.E"))
w=A.v(w.h(e,f))
s=h.a.c==="options"?B.az:B.as
u.push(new D.a_W(o,d,g,!0,m,D.hOs(v,w,s,t.b(D.dF(a0.h(0,"state")).h(0,"shadow"))?D.dF(D.dF(a0.h(0,"state")).h(0,"shadow")):g),g))}else u.push(A.c(y.b,g,g,g,g,g,g,A.l(g,g,n?C.bT:C.bV,g,g,g,g,g,g,g,g,12,g,g,g,g,g,!0,g,g,g,g,g,g,g,g),g,g,g))
if(q.h(0,"why")!=null){w=A.v(q.h(0,"why"))
B.d.u(u,A.a([B.aj,A.c("Analysis: "+w,g,g,g,g,g,g,A.l(g,g,n?C.bT:C.bV,g,g,g,g,g,g,g,g,11.5,g,g,g,g,1.3,!0,g,g,g,g,g,g,g,g),g,g,g)],l))}return h.wD(d,A.w(u,B.B,g,B.e,B.i,0,B.p))},
cD7(d,a0){var w,v,u,t,s,r=this,q=null,p="takeProfitUsd",o="stopLossUsd",n="maxHoldMin",m="exitCheckEveryMin",l=D.dF(a0.h(0,"settings")),k=D.dF(a0.h(0,"today")),j=new D.e9J(d),i=r.a.c==="options"?"+"+D.eg(D.c5(l.h(0,p)),!0,!1):"+"+B.h.a1(D.c5(l.h(0,"takeProfitPct")),0)+"% (+$"+B.h.a1(D.c5(l.h(0,p)),0)+")",h=r.a.c==="options"?"-"+D.eg(D.c5(l.h(0,o)),!0,!1):"-"+B.h.a1(D.c5(l.h(0,"stopLossPct")),0)+"% (-$"+B.h.a1(D.c5(l.h(0,o)),0)+")",g=A.V(B.mG,r.a.c==="options"?B.az:B.as,q,q,q,18),f=d.a,e=x.p
g=A.A(A.a([g,B.b7,A.c("THE 30-MINUTE LAW",q,q,q,q,q,q,A.l(q,q,f?C.cl:B.c,q,q,q,q,q,q,q,q,12,q,q,B.u,q,q,!0,q,0.8,q,q,q,q,q,q),q,q,q)],e),B.l,q,B.e,B.i,0,q,q)
w=B.h.a1(D.c5(l.h(0,n)),0)
v=B.h.a1(D.c5(l.h(0,m)),0)
w=A.c("Every trade closes within 30 minutes at most, win, lose or flat. After the options no-follow-through lesson new trades get a shorter max hold: now "+w+" minutes. Exits are checked every "+v+" minute, and the hard close sells at the last check before the max hold.",q,q,q,q,q,q,A.l(q,q,f?C.bT:C.bV,q,q,q,q,q,q,q,q,11.5,q,q,q,q,1.35,!0,q,q,q,q,q,q,q,q),q,q,q)
v=j.$2("Max hold now",B.h.a1(D.c5(l.h(0,n)),0)+" min")
u=j.$2("Exit checks","every "+B.h.a1(D.c5(l.h(0,m)),0)+" min")
f=A.A(A.a([v,B.b7,u,B.b7,j.$2("Each trade",r.a.c==="options"?"1 call/put \u2264$"+B.h.a1(D.c5(l.h(0,"maxPremiumUsd")),0):"$"+B.h.a1(D.c5(l.h(0,"tradeUsd")),0))],e),B.l,q,B.e,B.i,0,q,q)
v=j.$3$c("Take profit",i,C.cH)
u=j.$3$c("Stop loss",h,C.d6)
t=k.h(0,"trades")
t=A.v(t==null?0:t)
s=l.h(0,"maxTrades")
return r.wD(d,A.w(A.a([g,B.at,w,B.S,f,B.aj,A.A(A.a([v,B.b7,u,B.b7,j.$2("Trades today",t+" of "+A.v(s==null?"-":s))],e),B.l,q,B.e,B.i,0,q,q),B.aj,A.A(A.a([j.$2("Daily stop","-$"+B.h.a1(D.c5(l.h(0,"dailyStopUsd")),0)),B.b7,j.$2("Total brake","-$"+B.h.a1(D.c5(l.h(0,"totalBrakeUsd")),0)),B.b7,j.$2("Strength","+"+B.h.a1(D.c5(l.h(0,"strengthPct")),2)+"% in 30 min")],e),B.l,q,B.e,B.i,0,q,q)],e),B.B,q,B.e,B.i,0,B.p))},
cok(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=D.dF(e.h(0,"options"))
if(i.a===0)return B.bK
if(J.z(i.h(0,"weekend"),!0)){w=i.h(0,"message")
return k.RJ(d,J.k(w==null?"":w),B.b0)}if(!J.z(i.h(0,"enabled"),!0)){w=i.h(0,"message")
w=J.k(w==null?"Options are not enabled on the paper account yet":w)
return k.RJ(d,w,J.z(i.h(0,"enabled"),!1)?E.i1:B.b0)}v=D.dF(i.h(0,"preview"))
u=J.z(i.h(0,"fits"),!0)
w=i.h(0,"right")
t=A.v(w==null?"call":w)
w=i.h(0,"underlying")
s=A.v(w==null?"SPY":w)
w=x.g.a(i.h(0,"tried"))
if(w==null)w=B.bN
w=J.cL(w,x.f)
w=A.ct(w,new D.e9v(),w.$ti.k("M.E"),x.P)
r=A.B(w,A.a3(w).k("M.E"))
w=s+" "
q=d.a
p=A.E(A.c(w+t.toUpperCase()+" IT WOULD CHOOSE NOW",j,j,B.a2,j,j,j,A.l(j,j,q?C.bT:C.bV,j,j,j,j,j,j,j,j,10.5,j,j,B.u,j,j,!0,j,0.8,j,j,j,j,j,j),j,j,j),1)
o=u?"FITS":"NONE FITS"
n=x.p
o=A.A(A.a([p,k.Ce(o,u?C.cH:C.d6)],n),B.l,j,B.e,B.i,0,j,j)
p=A.a([o,B.at,A.c("For the best-ranked market right now: a call when its trend is up, a put when it is down. Near the money (the strike closest to the price), at least 3 days to expiry, $150 or less, spread at most 10% of the premium.",j,j,j,j,j,j,A.l(j,j,q?C.bT:C.bV,j,j,j,j,j,j,j,j,11.5,j,j,j,j,j,!0,j,j,j,j,j,j,j,j),j,j,j),B.N],n)
if(u&&v.a!==0){o=D.eg(D.c5(v.h(0,"strike")),!0,!1)
m=D.aRy(v.h(0,"expiry"))
w=A.c(w+o+" "+t+" \xb7 expires "+m,j,j,j,j,j,j,A.l(j,j,q?C.cl:B.c,j,j,j,j,j,j,j,j,16,j,j,B.C,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)
o=D.eg(D.c5(v.h(0,"premium")),!0,!1)
m=D.eg(D.c5(v.h(0,"cost")),!0,!1)
l=D.eg(D.c5(i.h(0,"spot")),!0,!1)
o=A.c("Premium "+o+" a share x 100 = "+m+"  \xb7  "+s+" "+l,j,j,j,j,j,j,A.l(j,j,q?C.bT:C.bV,j,j,j,j,j,j,j,j,12,j,j,j,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)
m=i.h(0,"why")
B.d.u(p,A.a([w,B.bs,o,B.at,A.c("It fits: "+A.v(m==null?"":m)+". On a passing setup it would buy this one.",j,j,j,j,j,j,C.fQ4,j,j,j)],n))}else{w=i.h(0,"why")
p.push(A.c(A.v(w==null?"":w)+". It keeps checking every minute; the budget is never raised.",j,j,j,j,j,j,C.fWa,j,j,j))}if(r.length!==0)B.d.u(p,A.a([B.N,A.c("The $150 stepping, in order:",j,j,j,j,j,j,A.l(j,j,q?C.cl:B.c,j,j,j,j,j,j,j,j,12,j,j,B.C,j,j,!0,j,j,j,j,j,j,j,j),j,j,j),B.at,new A.fo(new D.e9w(k,r,d),j)],n))
return k.wD(d,A.w(p,B.B,j,B.e,B.i,0,B.p))},
cLl(d,e){var w,v,u=this,t=null,s=x.g.a(e.h(0,"trades"))
if(s==null)s=B.bN
s=J.cL(s,x.f)
s=A.ct(s,new D.e9Q(),s.$ti.k("M.E"),x.P)
w=A.B(s,A.a3(s).k("M.E"))
s=d.a
v=A.a([A.c("Trades",t,t,t,t,t,t,A.l(t,t,s?C.cl:B.c,t,t,t,t,t,t,t,t,16,t,t,B.C,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),B.aj],x.p)
if(w.length===0)v.push(A.c("No trades yet. This system is picky: it only takes strong setups.",t,t,t,t,t,t,A.l(t,t,s?C.bT:C.bV,t,t,t,t,t,t,t,t,12.5,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),t,t,t))
s=J.aO(u.y?w:A.cJ(w,0,A.dx(4,"count",x.S),A.U(w).c))
while(s.B())v.push(u.cLk(d,s.gP(s)))
s=w.length
if(s>4)v.push(A.at(A.bL(!1,A.c(u.y?"Show less":"Show all ("+s+")",t,t,t,t,t,t,t,t,t,t),t,t,!0,t,t,t,new D.e9R(u),t,t),t,t,t))
return u.wD(d,A.w(v,B.B,t,B.e,B.i,0,B.p))},
cLk(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=null,g="entryPrice",f=J.a1(a3),e=J.z(f.h(a3,"decision"),"would buy"),d=D.dF(f.h(a3,"details")),a0=x.f.b(d.h(0,"option"))?D.dF(d.h(0,"option")):h,a1=D.c5(d.h(0,"pnl"))
if(e)w=B.ci
else w=a1>=0?C.cH:C.d6
v=a0!=null
if(v){u=A.v(f.h(a3,"asset"))
t=D.eg(D.c5(a0.h(0,"strike")),!0,!1)
s=a0.h(0,"right")
r=u+" "+t+" "+A.v(s==null?"call":s)}else r=A.v(f.h(a3,"asset"))
if(e)q=v?"expires "+D.aRy(a0.h(0,"expiry"))+" \xb7 premium "+D.eg(D.c5(d.h(0,g)),!0,!1)+" x 100":"at "+D.eg(D.c5(d.h(0,g)),!0,!1)
else{v=D.eg(D.c5(d.h(0,g)),!0,!1)
u=D.eg(D.c5(d.h(0,"exitPrice")),!0,!1)
t=d.h(0,"heldMin")==null?"":B.h.a1(D.c5(d.h(0,"heldMin")),0)+" min \xb7 "
s=f.h(a3,"reason")
q=v+" to "+u+" \xb7 "+t+D.itA(J.k(s==null?"":s))}p=D.dF(d.h(0,"analysis"))
if(e){v=p.h(0,"why")
o=J.k(v==null?"":v)}else{v=d.h(0,"entryWhy")
o=J.k(v==null?"":v)}if(e)n=""
else{v=d.h(0,"result")
if(v==null)v=a1>0?"WIN":"LOSS"
n=J.k(v)}if(e)m=""
else{v=d.h(0,"lossText")
m=J.k(v==null?"":v)}v=o.length===0
u=v?h:new D.e9O(this,a2,r,e,p,m,n,o)
t=a2.a
s=t?C.oQ:C.oL
l=w.j(0.14)
k=A.n(12)
l=A.q(h,A.V(e?B.tY:B.rw,w,h,h,h,18),B.f,h,h,new A.p(l,h,h,k,h,h,B.m),h,36,h,h,h,h,h,36)
k=e?"Bought":"Sold"
k=A.c(k+" "+r,h,h,h,h,h,h,A.l(h,h,t?C.cl:B.c,h,h,h,h,h,h,h,h,13.5,h,h,B.C,h,h,!0,h,h,h,h,h,h,h,h),h,h,h)
j=x.p
k=A.a([k,A.c(q,h,2,B.a2,h,h,h,A.l(h,h,t?C.bT:C.bV,h,h,h,h,h,h,h,h,11.5,h,h,h,h,h,!0,h,h,h,h,h,h,h,h),h,h,h)],j)
if(m.length!==0)k.push(A.c(m,h,3,B.a2,h,h,h,C.aZN,h,h,h))
if(!v){v=e?"Why this trade: "+o:n+" \xb7 it was bought because: "+o
if(e)i=this.a.c==="options"?B.az:B.as
else i=n==="WIN"?C.cH:C.d6
k.push(A.c(v,h,2,B.a2,h,h,h,A.l(h,h,i,h,h,h,h,h,h,h,h,11,h,h,B.O,h,1.3,!0,h,h,h,h,h,h,h,h),h,h,h))}f=f.h(a3,"et_time")
f=J.k(f==null?"":f)
k.push(A.c(f,h,h,h,h,h,h,A.l(h,h,t?C.bT:C.bV,h,h,h,h,h,h,h,h,10.5,h,h,h,h,h,!0,h,h,h,h,h,h,h,h),h,h,h))
f=A.E(A.w(k,B.B,h,B.e,B.i,0,B.p),1)
v=e?"-"+D.eg(D.c5(d.h(0,"amount")),!0,!1):"+"+D.eg(D.c5(d.h(0,"outValue")),!0,!1)
v=A.a([A.c(v,h,h,h,h,h,h,A.l(h,h,t?C.cl:B.c,h,h,h,h,h,h,h,h,13.5,h,h,B.C,h,h,!0,h,h,h,h,h,h,h,h),h,h,h)],j)
if(!e){k=D.eg(a1,!0,!0)
v.push(A.c(k,h,h,h,h,h,h,A.l(h,h,a1>=0?C.cH:C.d6,h,h,h,h,h,h,h,h,12,h,h,B.C,h,h,!0,h,h,h,h,h,h,h,h),h,h,h))}if(e)v.push(A.c("put in",h,h,h,h,h,h,A.l(h,h,t?C.bT:C.bV,h,h,h,h,h,h,h,h,11,h,h,h,h,h,!0,h,h,h,h,h,h,h,h),h,h,h))
return A.aM(!1,h,!0,A.q(h,A.A(A.a([l,B.ar,f,B.aa,A.w(v,B.dr,h,B.e,B.i,0,B.p)],j),B.l,h,B.e,B.i,0,h,h),B.f,h,h,new A.p(h,h,new A.bE(B.a1,B.a1,new A.ax(s,1,B.r,-1),B.a1),h,h,h,B.m),h,h,h,h,B.x8,h,h,h),h,!0,h,h,h,h,h,h,h,h,h,h,h,u,h,h,h,h,h,h,h)},
cFc(d,e,f){var w,v,u=null,t=x.g.a(f.h(0,"ranked"))
if(t==null)t=B.bN
t=J.cL(t,x.f)
t=A.ct(t,new D.e9L(),t.$ti.k("M.E"),x.P)
w=A.B(t,A.a3(t).k("M.E"))
v=D.dF(f.h(0,"record"))
t=this.c
t.toString
A.cf(u,u,!0,u,new D.e9M(d,e,f,new D.e9N(),v,w),t,u,!0,!0,x.H)},
bGb(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k="asset",j=m.z,i=m.e
i=j?i:A.cJ(i,0,A.dx(4,"count",x.S),A.U(i).c).de(0)
j=d.a
w=A.c("Activity",l,l,l,l,l,l,A.l(l,l,j?C.cl:B.c,l,l,l,l,l,l,l,l,16,l,l,B.C,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)
v=x.p
w=A.a([A.A(A.a([w,B.aX,A.c("newest first",l,l,l,l,l,l,A.l(l,l,j?C.bT:C.bV,l,l,l,l,l,l,l,l,11,l,l,l,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)],v),B.l,l,B.e,B.i,0,l,l),B.aj],v)
if(m.e.length===0)w.push(A.c("Nothing yet. Buys, sells and passing setups that were skipped show up here.",l,l,l,l,l,l,A.l(l,l,j?C.bT:C.bV,l,l,l,l,l,l,l,l,12.5,l,l,l,l,l,!0,l,l,l,l,l,l,l,l),l,l,l))
for(u=i.length,t=0;t<i.length;i.length===u||(0,A.I)(i),++t){s=i[t]
r=A.V(B.no,j?C.bT:C.bV,l,l,l,7)
q=J.a1(s)
if(J.z(q.h(s,"kind"),"lesson"))p="Lesson"+(q.h(s,k)==null?"":" \xb7 "+A.v(q.h(s,k)))
else{p=q.h(s,"decision")
p=A.v(p==null?"":p)
p+=q.h(s,k)==null?"":" \xb7 "+A.v(q.h(s,k))}if(J.z(q.h(s,"kind"),"lesson"))o=m.a.c==="options"?B.az:B.as
else o=j?C.cl:B.c
p=A.c(p,l,l,l,l,l,l,new A.G(!0,o,l,l,l,l,12.5,B.C,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l),l,l,l)
o=q.h(s,"reason")
o=J.k(o==null?"":o)
n=j?C.bT:C.bV
p=A.w(A.a([p,A.c(o,l,l,l,l,l,l,new A.G(!0,n,l,l,l,l,11.5,l,l,l,l,l,1.3,l,l,l,l,l,l,l,l,l,l,l,l,l),l,l,l)],v),B.B,l,B.e,B.i,0,B.p)
q=q.h(s,"et_time")
q=D.hrs(J.k(q==null?"":q))
o=j?C.bT:C.bV
w.push(new A.C(B.jY,new A.c1(B.aK,B.e,B.i,B.B,l,B.p,l,0,A.a([new A.C(K.Pj,r,l),B.aa,new A.bu(1,B.b8,p,l),B.b7,A.c(q,l,l,l,l,l,l,new A.G(!0,o,l,l,l,l,10.5,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l),l,l,l)],v),l),l))}if(m.e.length>4)w.push(A.at(A.bL(!1,A.c(m.z?"Show less":"Show all",l,l,l,l,l,l,l,l,l,l),l,l,!0,l,l,l,new D.e9c(m),l,l),l,l,l))
return m.wD(d,A.w(w,B.B,l,B.e,B.i,0,B.p))},
czM(d,e){var w,v,u,t,s,r,q,p,o,n,m=null,l=x.g.a(e.h(0,"rules"))
if(l==null)l=B.bN
l=J.b8(l,new D.e9C(),x.N)
w=A.B(l,l.$ti.k("aj.E"))
l=this.c
l.toString
l=A.Q(l).aHU(B.L)
v=d.a
u=A.c("The rules it follows",m,m,m,m,m,m,A.l(m,m,v?C.cl:B.c,m,m,m,m,m,m,m,m,15,m,m,B.C,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)
t=x.p
s=A.a([],t)
for(r=w.length,q=0;q<w.length;w.length===r||(0,A.I)(w),++q){p=w[q]
o=this.a.c==="options"?B.az:B.as
o=A.c("\u2022  ",m,m,m,m,m,m,new A.G(!0,o,m,m,m,m,m,B.u,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m,m,m)
n=v?C.cl:B.c
s.push(new A.C(B.eC,new A.c1(B.aK,B.e,B.i,B.B,m,B.p,m,0,A.a([o,new A.bu(1,B.b8,A.c(p,m,m,m,m,m,m,new A.G(!0,n,m,m,m,m,12.5,m,m,m,m,m,1.35,m,m,m,m,m,m,m,m,m,m,m,m,m),m,m,m),m)],t),m),m))}return this.wD(d,new A.oH(l,N.hjK(m,s,B.ag,m,m,m,!1,m,m,m,B.ag,u),m))},
b4e(d,e,f){var w=null,v=d.a,u=v?B.c.j(0.92):C.ib,t=A.n(20),s=e==null?w:e.j(0.5)
if(s==null)v=v?B.c:C.nf
else v=s
v=A.K(v,B.r,1)
s=A.a([new A.ac(0,B.H,d.gIq(),B.cy,14)],x.V)
return A.q(w,A.aE(!1,B.a3,!0,w,f,B.f,w,0,w,w,w,w,w,B.i7),B.f,w,w,new A.p(u,w,v,t,s,w,B.m),w,w,w,B.dW,B.bD,w,w,w)},
wD(d,e){return this.b4e(d,null,e)},
RJ(d,e,f){var w=null,v=f.j(0.12),u=A.n(16),t=A.K(f.j(0.45),B.r,1),s=A.V(B.QY,f,w,w,w,20)
return A.q(w,A.A(A.a([s,B.ar,A.E(A.c(e,w,w,w,w,w,w,A.l(w,w,d.a?C.cl:B.c,w,w,w,w,w,w,w,w,12.5,w,w,w,w,1.35,!0,w,w,w,w,w,w,w,w),w,w,w),1)],x.p),B.l,w,B.e,B.i,0,w,w),B.f,w,w,new A.p(v,w,t,u,w,w,B.m),w,w,w,B.dW,B.bg,w,w,w)},
Ce(d,e){var w=null,v=e.j(0.14),u=A.n(999)
return A.q(w,A.c(d,w,w,w,w,w,w,A.l(w,w,e,w,w,w,w,w,w,w,w,10,w,w,B.u,w,w,!0,w,0.5,w,w,w,w,w,w),w,w,w),B.f,w,w,new A.p(v,w,w,u,w,w,B.m),w,w,w,w,B.f8,w,w,w)},
a1p(d,e,f){var w=null,v=d.a,u=v?B.c.j(0.92):C.ib,t=A.K(v?B.c:C.nf,B.r,1)
return A.aE(!1,B.a3,!0,w,A.aM(!1,w,!0,A.q(w,A.V(e,v?C.cl:B.c,w,w,w,18),B.f,w,w,new A.p(w,w,t,w,w,w,B.a6),w,40,w,w,w,w,w,40),B.cM,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),B.f,u,0,w,w,B.cM,w,w,B.ai)}}
D.aBQ.prototype={
R(){return new D.bfX()}}
D.bfX.prototype={
Z(){this.a4()
this.d=A.d5(B.fr,new D.dbi(this))},
t(){var w=this.d
if(w!=null)w.a2(0)
this.a3()},
C(d){var w,v,u,t=null,s=this.a.c,r=s==null?t:s.bx(new A.W(Date.now(),0,!1))
if(r==null||r.a<0)w="0:00"
else{s=r.a
w=""+B.n.ao(s,6e7)+":"+B.a.aY(B.n.v(B.n.F(B.n.ao(s,1e6),60)),2,"0")}v=this.a.d
s=v.j(0.14)
u=A.n(999)
return A.q(t,A.c("closes in "+w+" at most",t,t,t,t,t,t,A.l(t,t,v,t,t,t,t,t,t,t,t,10,t,t,B.u,t,t,!0,t,0.5,t,t,t,t,t,t),t,t,t),B.f,t,t,new A.p(s,t,t,u,t,t,B.m),t,t,t,t,B.f8,t,t,t)}}
D.aLb.prototype={
R(){return new D.bwD()}}
D.bwD.prototype={
Z(){this.a4()
this.d=A.d5(B.fr,new D.fix(this))},
t(){var w=this.d
if(w!=null)w.a2(0)
this.a3()},
C(a1){var w,v,u,t,s,r,q,p,o,n=this,m=null,l=new A.W(Date.now(),0,!1).aa(),k=n.a.c.aa().bL(3e8),j=n.a,i=j.d.aa(),h=B.n.ao(i.bx(j.c.aa()).a,6e7),g=j.e?C.cH:C.d6,f=l.cb(k),e=l.cb(i),d=A.aXA(A.bD(l),A.bO(l),A.bW(l),A.cX(l),A.fx(l),0,0,0).bL(6e7).bx(l),a0=B.n.ao(d.a,1e6)>=45
if(e){w="Being graded now: WIN if the price finished "+(n.a.e?"higher":"lower")+"."
v="SIGNAL CLOSED"}else if(f){v="TOO LATE TO ENTER"
w="The 5-minute entry window has passed. Wait for the next signal: entering an old signal is how money is lost."}else{if(a0)v=(n.a.e?"BUY":"SELL")+" NOW"
else v="Enter in "+D.fiu(d)
w="Entry window closes in "+D.fiu(k.bx(l))+" \xb7 enter at the start of a minute."}j=new D.fiv()
u=!f
t=!u||e?B.an:g
s=A.n(14)
r=A.a([new A.ac(0,B.H,(!u||e?B.v:g).j(0.25),B.cN,12)],x.V)
q=A.c(v,m,m,m,m,m,m,A.l(m,m,B.c,m,m,m,m,m,m,m,G.AD,a0&&u&&!e?26:22,m,m,B.u,m,m,!0,m,0.6,m,m,m,m,m,m),B.K,m,m)
p=A.c(w,m,m,m,m,m,m,C.fJm,B.K,m,m)
o=j.$2("Trade for",""+h+" min")
u=x.p
return A.q(m,A.w(A.a([q,B.bs,p,B.N,A.A(A.a([o,B.b7,j.$2("Entry window",f?"closed":D.fiu(k.bx(l))),B.b7,j.$2("Signal closes in",D.fiu(i.bx(l)))],u),B.l,m,B.e,B.i,0,m,m)],u),B.l,m,B.e,B.i,0,B.p),B.f,m,m,new A.p(t,m,m,s,r,m,B.m),m,m,m,m,B.bg,m,m,1/0)}}
D.aD9.prototype={
R(){return new D.biP()}}
D.biP.prototype={
Z(){this.a4()
this.d=A.d5(B.fr,new D.djN(this))},
t(){var w=this.d
if(w!=null)w.a2(0)
this.a3()},
C(d){var w=null,v=this.a.c*60,u=B.n.F(B.n.ao(new A.W(Date.now(),0,!1).aa().a,1000),v),t=u<15,s=v-u,r=t?"ENTER NOW":"Enter in "+B.n.ao(s,60)+":"+B.a.aY(B.n.v(B.n.F(s,60)),2,"0"),q=t?B.c:B.c.j(0.18),p=A.n(999),o=t?B.fP:B.mG
o=A.V(o,t?B.v:B.c,w,w,w,20)
return A.cY(w,A.A(A.a([o,B.b7,A.c(r,w,w,w,w,w,w,A.l(w,w,t?B.v:B.c,w,w,w,w,w,w,w,G.AD,22,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),B.l,w,B.e,B.P,0,w,w),w,w,B.b_,new A.p(q,w,w,p,w,w,B.m),B.id,w,w,w,w,B.Dj,w,w,w)}}
D.cI.prototype={}
D.uD.prototype={}
D.Y3.prototype={
R(){var w,v,u,t=null,s=x.N,r=x.z
r=A.J(["done",A.a([],x.s),"lessons",A.S(s,r)],s,r)
s=$.hoX
w=$.ay()
v=A.ms(0,t,t)
u=A.a([],x.t)
return new D.aI4(r,new A.au(new A.bb(s,B.b9,B.aP),w),v,u,new A.au(B.ay,w),B.cD,B.M,t,t)}}
D.a01.prototype={}
D.aI4.prototype={
gLK(){var w,v=this,u=v.d
if(u===$){v.a.toString
w=A.ad0(null,0,3,v)
v.d!==$&&A.bF()
v.d=w
u=w}return u},
gKt(){var w=x.g.a(this.x.h(0,"done"))
if(w==null)w=B.bN
return J.b8(w,new D.eKt(),x.N).fG(0)},
Z(){var w,v,u,t=this
t.a4()
w=t.e=t.a.c
v=w==null
t.y=!v
t.ay=D.eLb(v?null:J.t(w,"fx"))
w=t.a.c
u=D.eLb(w==null?null:J.t(w,"markets"))
if(u.length!==0)t.f=u
t.r=new A.W(Date.now(),0,!1)
t.gLK().aU(0,new D.eLh(t))
$.aMK=$.aMK+1
t.at.aU(0,new D.eLi(t))
if($.DJ.length!==0||$.ahJ)t.aDU()
if(!t.a.d){t.a1o()
t.RK()
A.To().bD(new D.eLj(t),x.H)
t.w=A.d5(B.hc,new D.eLk(t))}},
t(){var w,v=this,u=v.w
if(u!=null)u.a2(0)
u=v.as
if(u!=null)u.a2(0)
v.gLK().t()
u=v.cy
w=$.ay()
u.V$=w
u.W$=0
u=v.at
u.V$=w
u.W$=0
v.ax.t()
D.hIN()
v.bCM()},
a1o(){return this.c8A()},
c8A(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f
var $async$a1o=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:g={}
g.a=null
t=4
w=7
return A.b(A.aB(),$async$a1o)
case 7:q=e
p=A.aV(J.t(q.a,"ngmy_signal_grid_academy_v2"))
n=p!=null?g.a=A.a0(x.f.a(B.V.aP(0,p,null)),x.N,x.z):null
o=q.nQ("ngmy_signal_grid_lessons_done")
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
return A.b(A.fJ(A.J(["action","paLearnGet"],n,m),!1,!1,!1,!1,B.hc),$async$a1o)
case 8:k=e
if(r.c==null){w=1
break}j=k==null?null:J.t(k,"progress")
i=x.f
if(i.b(j)){k.toString
h=A.a0(i.a(J.t(k,"progress")),n,m)}else h=null
r.l(new D.eKO(g,r,k,h))
if(h==null&&g.a!=null)r.aDK()
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$a1o,v)},
aDK(){var w=this.as
if(w!=null)w.a2(0)
this.as=A.cC(R.D5,new D.eKX(this))},
aeZ(d){return this.c7F(d)},
c7F(d){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$aeZ=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=B.d.cC(C.Er,new D.eKw(u))
u.l(new D.eKx(u,d))
u.aDK()
t=B.d.cC(C.Er,new D.eKy(u))
w=!r&&t&&u.c!=null?2:3
break
case 2:s=u.c
s.toString
w=4
return A.b(A.cf(null,null,!0,null,new D.eKz(u),s,null,!0,!0,x.H),$async$aeZ)
case 4:case 3:return A.h(null,v)}})
return A.i($async$aeZ,v)},
RK(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$RK=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(A.fJ(A.J(["action","paSignals"],x.N,x.z),!1,!1,!1,!1,B.x6),$async$RK)
case 3:r=e
if(t.c==null||r==null||!J.z(J.t(r,"ok"),!0)){w=1
break}s=J.a1(r)
t.l(new D.eKW(t,D.eLb(s.h(r,"fx")),D.eLb(s.h(r,"markets")),r))
case 1:return A.h(u,v)}})
return A.i($async$RK,v)},
gauf(){var w=A.B(this.gyU(),x.P)
B.d.u(w,this.ay)
return w},
gyU(){var w=this.f
if(w==null){w=this.e
w=D.fEI(D.dF(D.dF(w==null?null:J.t(w,"state")).h(0,"snapshot")))}return w},
gcGd(){var w=this.gyU(),v=A.U(w).k("X<1>"),u=A.B(new A.X(w,new D.eL9(),v),v.k("M.E"))
if(u.length===0)return this.gyU().length===0?null:B.d.gH(this.gyU())
B.d.b_(u,new D.eLa())
return B.d.gH(u)},
c8c(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,a0=" dollars. It sells at +50 or -50 dollars.",a1=e.e,a2=D.dF(a1==null?d:J.t(a1,"state"))
a1=x.f
w=a1.b(a2.h(0,"shadow"))?D.dF(a2.h(0,"shadow")):d
v=e.e
u=D.dF(v==null?d:J.t(v,"today"))
v=e.e
t=D.dF(v==null?d:J.t(v,"record"))
v=e.dy
if(!(v.length!==0)){v=e.e
v=v==null?d:J.t(v,"nowEt")
if(v==null)v="unknown"}v="LIVE DATA from the NGMY paper trading agent (Eastern Time now: "+A.v(v)+"):\n"
if(e.e!=null){s=J.z(a2.h(0,"enabled"),!0)?"running":"stopped"
r=J.z(a2.h(0,"brakePaused"),!0)?", paused by the 25 dollar brake":""
q=D.eg(D.c5(a2.h(0,"totalPnl")),!0,!0)
p=D.eg(D.c5(u.h(0,"day_pnl")),!0,!0)
o=t.h(0,"wins")
o=A.v(o==null?0:o)
n=t.h(0,"losses")
v+="Agent: "+s+r+". P/L all time "+q+", today "+p+", wins "+o+", losses "+A.v(n==null?0:n)+".\n"}if(e.e==null)a1=v
else if(w!=null){m=D.c5(J.t(B.d.ds(e.gyU(),new D.eKC(w),new D.eKD()),"price"))
l=D.c5(w.h(0,"entryPrice"))
k=a1.b(w.h(0,"option"))?D.dF(w.h(0,"option")):d
a1=e.e
j=D.dF(D.dF(D.dF(a1==null?d:J.t(a1,"state")).h(0,"snapshot")).h(0,"held"))
i=j.h(0,"pnl")==null?d:D.c5(j.h(0,"pnl"))
h=i==null?"unknown":B.h.a1(i,2)
a1=v+((k!=null?"Open trade: 1 SPY call option, strike "+B.h.a1(D.c5(k.h(0,"strike")),0)+", expires "+A.v(k.h(0,"expiry"))+", premium paid "+B.h.a1(l,2)+" a share ("+B.h.a1(D.c5(k.h(0,"cost")),2)+" dollars). Win or loss now: "+h+a0:"Open trade: "+A.v(w.h(0,"symbol"))+", bought at "+B.h.a1(l,2)+", now "+B.h.a1(m,2)+". Win or loss now: "+h+a0)+"\n")}else a1=v+"No open trade.\n"
g=new D.eKE()
a1+="Agent markets (5-minute candles; fast line = 9-candle average, slow = 21-candle average; strength 0 bearish to 100 bullish):\n"
for(v=e.gyU(),s=v.length,f=0;f<v.length;v.length===s||(0,A.I)(v),++f)a1+=A.v(g.$1(v[f]))+"\n"
v=e.ay
s=v.length
if(s!==0){a1+="Forex pairs (real interbank prices, 1-minute candles, signals only; the agent does not trade them; OTC prices at brokers differ):\n"
for(f=0;f<v.length;v.length===s||(0,A.I)(v),++f)a1+=A.v(g.$1(v[f]))+"\n"}return a1.charCodeAt(0)==0?a1:a1},
Ks(d){return this.bII(d)},
bII(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j
var $async$Ks=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:j=B.a.i(d)
if(j.length===0||$.ahJ){w=1
break}t.at.bM(0,B.ck)
t.l(new D.eKp(t,j))
t.aDU()
s=$.DJ.length
if(s>1){s=B.d.dw($.DJ,Math.max(0,s-9),s-1)
r=new A.O(s,new D.eKq(),A.U(s).k("O<1,o>")).aL(0,"\n")}else r=""
s=t.e
s=s==null?null:J.t(s,"rules")
x.g.a(s)
if(s==null)s=t.dx
q=x.N
p=J.b8(s,new D.eKr(),q).aL(0,"\n")
s=t.c8c()
o=r.length===0?"":"\nCONVERSATION SO FAR:\n"+r+"\n"
n=$.fre
w=t.a.d?3:5
break
case 3:m="Preview mode: the tutor answers here using the live readings."
w=4
break
case 5:w=6
return A.b(A.fJ(A.J(["action","chat","prompt",'You are the NGMY Signal Grid trading tutor. You teach a complete beginner how trading works, using the live market data and the rules of the NGMY paper trading agent below.\nHow to answer:\n- Plain, friendly, simple English. Short sentences. No jargon without explaining it. Usually under 170 words.\n- When the question is about a market or "right now", use the LIVE DATA and quote the real numbers (price, trend, strength, RSI, last hour), then explain what they mean and what the agent\'s rules say.\n- Say clearly whether a market looks bullish, bearish or sideways and why, and what would need to happen for a buy or sell signal under the agent\'s rules.\n- This is practice. You may explain what the rules signal, but never promise profit, never say a price will surely go up or down, and never tell the student to trade real or borrowed money. Remind them briefly when it fits that signals can fail and the stop loss keeps losses small.\n- No markdown headings or tables. You may use short lines starting with "- ".\n\nAGENT RULES:\n'+p+"\n\n"+s+"\n"+o+"\nStudent: "+j+"\nTutor:"],q,x.z),!1,!1,!1,!1,B.o2),$async$Ks)
case 6:l=f
s=l==null
if(s)k=null
else{q=J.t(l,"text")
q=q==null?null:B.a.i(J.k(q))
k=q}if(k==null)k=""
if(k.length!==0){s=A.aH(k,"**","")
q=A.ag("^#+\\s*",!0,!1,!0,!1)
m=A.aH(s,q,"")}else{s=s?null:J.t(l,"error")
m=J.k(s==null?"The tutor could not answer just now. Please try again.":s)}case 4:if(n!==$.fre){w=1
break}$.DJ.push(new D.a01(!1,m))
$.ahJ=!1
if(t.c==null){w=1
break}t.l(new D.eKs())
t.aDU()
case 1:return A.h(u,v)}})
return A.i($async$Ks,v)},
aDU(){$.aS.U$.push(new D.eKY(this))},
aS0(d){this.gLK().Cp(2)
this.Ks(d)},
C(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=A.Q(a0).ax.a===B.dg,f=new D.RK(g),e=g?C.tc:C.ta,d=g?C.tc:C.ta
d=A.a([d,g?C.Oe:C.O6],x.O)
w=i.a1p(f,B.eE,new D.eLd(a0))
v=A.c("Trading Academy",h,h,h,h,h,h,A.l(h,h,g?C.cl:B.c,h,h,h,h,h,h,h,h,17,h,h,B.C,h,h,!0,h,h,h,h,h,h,h,h),h,h,h)
u=x.p
v=A.A(A.a([w,B.ar,A.E(A.w(A.a([v,A.c("Lessons, live signals and a tutor",h,h,h,h,h,h,A.l(h,h,g?C.bT:C.bV,h,h,h,h,h,h,h,h,11.5,h,h,h,h,h,!0,h,h,h,h,h,h,h,h),h,h,h)],u),B.B,h,B.e,B.i,0,B.p),1),A.q(h,C.ftB,B.f,h,h,new A.p(C.cH.j(0.14),h,h,A.n(999),h,h,B.m),h,h,h,h,B.h0,h,h,h)],u),B.l,h,B.e,B.i,0,h,h)
w=g?C.Ol:C.Oa
t=A.n(999)
s=A.a([],u)
for(r=[C.fjA,C.fhO,C.fiw],q=r.length,p=0;p<q;++p){o={}
n=r[p]
o.a=null
o.a=n.a
m=i.gLK().d===o.a
if(m)l=g?C.n7:B.c
else l=B.L
k=new A.aQ(999,999)
if(m)j=g?B.c:C.n7
else j=g?C.bT:C.bV
j=A.V(n.c,j,h,h,h,15)
if(m)m=g?B.c:C.n7
else m=g?C.bT:C.bV
s.push(new A.bu(1,B.b8,A.aA(h,A.cY(h,new A.c1(B.aK,B.bb,B.i,B.l,h,B.p,h,0,A.a([j,B.dY,new A.d1(1,B.c9,A.c(n.b,h,h,B.a2,h,h,h,new A.G(!0,m,h,h,h,h,12.5,B.C,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h),h,h,h),h)],u),h),h,h,B.b_,new A.p(l,h,h,new A.bc(k,k,k,k),h,h,B.m),B.a3,h,h,h,h,B.x8,h,h,h),B.y,!1,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,new D.eLe(o,i),h,h,h,h,h,h,!1,B.a4),h))}g=A.q(h,A.A(s,B.l,h,B.e,B.i,0,h,h),B.f,h,h,new A.p(w,h,h,t,h,h,B.m),h,h,h,h,B.eD,h,h,h)
w=i.gLK()
return A.c6(h,e,A.q(h,A.bn(!0,A.w(A.a([new A.C(C.bH7,v,h),new A.C(B.aoG,g,h),A.E(A.bbs(A.a([i.c7J(f),i.cFi(f),i.bIO(f)],u),w,h),1)],u),B.l,h,B.e,B.i,0,B.p),!0,!1,B.ag,!0,!0),B.f,h,h,new A.p(h,h,h,h,h,new A.a6(B.aU,B.b2,B.w,d,h,h),B.m),h,h,h,h,h,h,h,h),h,!1,!1,h,h)},
a1p(d,e,f){var w=null,v=d.a,u=v?B.c.j(0.92):C.ib,t=A.K(v?B.c:C.nf,B.r,1)
return A.aE(!1,B.a3,!0,w,A.aM(!1,w,!0,A.q(w,A.V(e,v?C.cl:B.c,w,w,w,18),B.f,w,w,new A.p(w,w,t,w,w,w,B.a6),w,40,w,w,w,w,w,40),B.cM,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),B.f,u,0,w,w,B.cM,w,w,B.ai)},
c7J(d){var w,v=null,u=new A.X(C.Er,new D.eKB(this),x.E).gI(0),t=A.n(24),s=x.p
s=A.a([A.q(v,A.w(A.a([C.hkk,B.at,C.h0W,B.aB,A.bv(A.n(9),A.jI(B.c.j(0.18),v,v,8,v,u/10,B.afC),B.ap),B.aj,A.c(""+u+" of 10 lessons done",v,v,v,v,v,v,B.ad3,v,v,v)],s),B.B,v,B.e,B.i,0,B.p),B.f,v,v,new A.p(v,v,v,t,v,C.cfj,B.m),v,v,v,v,B.f7,v,v,v),B.aB],s)
for(w=0;w<10;++w)s.push(this.c7H(d,w))
s.push(B.aj)
s.push(A.c("Practice only, no real money. Signals and lessons are for learning; markets can always surprise.",v,v,v,v,v,v,A.l(v,v,d.a?C.bT:C.bV,v,v,v,v,v,v,v,v,11,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),B.K,v,v))
return A.co(s,v,v,B.a2o,v,v,B.ah,!1)},
c7H(d,e){var w,v,u,t=null,s=C.Er[e],r=this.gKt().q(0,s.a),q=d.a,p=q?B.c.j(0.92):C.ib,o=A.n(20),n=A.K(q?B.c:C.nf,B.r,1),m=A.a([new A.ac(0,B.H,d.gIq(),B.hS,14)],x.V),l=A.n(15)
l=A.q(t,A.V(s.e,B.c,t,t,t,t),B.f,t,t,new A.p(s.f,t,t,l,t,t,B.m),t,46,t,t,t,t,t,46)
w=A.c("Lesson "+(e+1)+" \xb7 "+s.d+" min",t,t,t,t,t,t,A.l(t,t,q?C.bT:C.bV,t,t,t,t,t,t,t,t,11,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)
v=A.c(s.b,t,t,t,t,t,t,A.l(t,t,q?C.cl:B.c,t,t,t,t,t,t,t,t,15,t,t,B.C,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)
u=x.p
v=A.E(A.w(A.a([w,v,A.c(s.c,t,t,t,t,t,t,A.l(t,t,q?C.bT:C.bV,t,t,t,t,t,t,t,t,12,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],u),B.B,t,B.e,B.i,0,B.p),1)
w=r?B.ea:B.eL
if(r)q=C.cH
else q=q?C.bT:C.bV
return A.aA(t,A.q(t,A.A(A.a([l,B.bc,v,A.V(w,q,t,t,t,t)],u),B.l,t,B.e,B.i,0,t,t),B.f,t,t,new A.p(p,t,n,o,m,t,B.m),t,t,t,B.d2,B.bD,t,t,t),B.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new D.eKA(this,s),t,t,t,t,t,t,!1,B.a4)},
cni(d){var w=this.c
w.toString
A.a8(w,!1).c9(A.e4(new D.eKU(this,d),!1,null,x.H))},
c8g(c1,c2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6=this,b7=null,b8="reading",b9="rsi",c0=b6.gcGd()
if(c0==null)return A.c("Live example appears once the markets have loaded.",b7,b7,b7,b7,b7,b7,A.l(b7,b7,c1.a?C.bT:C.bV,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,!0,b7,b7,b7,b7,b7,b7,b7,b7),b7,b7,b7)
w=J.a1(c0)
v=J.k(w.h(c0,"asset"))
u=D.bG2(c0)
t=D.dF(w.h(c0,b8))
s=D.c5(w.h(c0,"price"))
r=new D.eKF(u,c1,s)
q=new D.eKN(c1)
switch(c2){case"basics":p=u.length!==0?D.c5(J.t(B.d.gH(u),"c")):s
o=p===0?100:100*s/p
w=q.$1("Right now "+v+" is "+D.eg(s,!0,!1)+". About 4 hours ago it was "+D.eg(p,!0,!1)+".")
n=D.eg(o,!0,!1)
m=o>=100?"a win of":"a loss of"
return A.w(A.a([w,B.N,q.$1("If you had put $100 into "+v+" then, it would be worth "+n+" now: "+m+" "+D.eg(Math.abs(o-100),!0,!1)+". That difference is your profit or loss.")],x.p),B.B,b7,B.e,B.i,0,B.p)
case"candles":l=u.length!==0?B.d.gal(u):A.S(x.N,x.z)
w=J.a1(l)
n=D.c5(w.h(l,"c"))
m=D.c5(w.h(l,"o"))
k=r.$2$last$lines(24,!1)
j=D.eg(D.c5(w.h(l,"o")),!0,!1)
i=D.eg(D.c5(w.h(l,"c")),!0,!1)
n=n>=m?"GREEN: buyers won those 5 minutes":"YELLOW: sellers won those 5 minutes"
return A.w(A.a([k,B.N,q.$1("The last finished "+v+" candle opened at "+j+" and closed at "+i+", so it is "+n+". Its high was "+D.eg(D.c5(w.h(l,"h")),!0,!1)+" and its low "+D.eg(D.c5(w.h(l,"l")),!0,!1)+".")],x.p),B.B,b7,B.e,B.i,0,B.p)
case"trend":w=x.N
h=A.S(w,x.S)
for(n=b6.gyU(),m=n.length,k=x.z,j=x.f,g=0;g<n.length;n.length===m||(0,A.I)(n),++g){i=J.t(n[g],b8)
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
return A.w(A.a([w,B.N,q.$1(v+" is "+n.toUpperCase()+" right now. Across the markets:"+m+" bullish, "+k+" bearish, "+j+" sideways.")],x.p),B.B,b7,B.e,B.i,0,B.p)
case"ma":e=D.c5(w.h(c0,"fast"))
d=D.c5(w.h(c0,"slow"))
w=r.$0()
n=D.eg(e,!0,!1)
m=D.eg(d,!0,!1)
k=e>=d
j=k?"ABOVE":"BELOW"
k=k?"UP":"DOWN"
return A.w(A.a([w,B.N,q.$1("On "+v+" the pink fast line is at "+n+" and the purple slow line at "+m+". The fast line is "+j+" the slow line, so the short-term trend is "+k+".")],x.p),B.B,b7,B.e,B.i,0,B.p)
case"cross":w=b6.gyU()
n=A.U(w)
m=n.k("cR<1,@>")
a0=A.B(new A.cR(new A.X(w,new D.eKG(),n.k("X<1>")),new D.eKH(),m),m.k("M.E"))
w=b6.gyU()
n=A.U(w)
m=n.k("cR<1,@>")
a1=A.B(new A.cR(new A.X(w,new D.eKI(),n.k("X<1>")),new D.eKJ(),m),m.k("M.E"))
w=r.$0()
if(a0.length!==0)n="Fresh BUY crosses right now: "+B.d.aL(a0,", ")+". On its next automatic check the agent would buy if it holds nothing and it is the market traded today."
else n="No fresh buy cross in any open market right now. "+(a1.length!==0?"Fresh sell crosses: "+B.d.aL(a1,", ")+". ":"")+"The agent simply waits; no signal means no trade."
return A.w(A.a([w,B.N,q.$1(n)],x.p),B.B,b7,B.e,B.i,0,B.p)
case"rsi":w=b6.gyU()
n=A.U(w).k("X<1>")
a2=A.B(new A.X(w,new D.eKK(),n),n.k("M.E"))
w=x.p
n=A.a([],w)
for(m=a2.length,k=c1.a,j=x.N,i=x.z,a3=x.f,a4=x.c,g=0;g<a2.length;a2.length===m||(0,A.I)(a2),++g){a5=a2[g]
a6=J.a1(a5)
a7=J.k(a6.h(a5,"asset"))
a8=k?C.cl:B.c
a7=A.c(a7,b7,b7,b7,b7,b7,b7,new A.G(!0,a8,b7,b7,b7,b7,12,B.C,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7),b7,b7,b7)
a8=new A.aQ(9,9)
a9=a6.h(a5,b8)
a9=(a3.b(a9)?A.a0(a9,j,i):A.S(j,i)).h(0,b9)
if(!(typeof a9=="number")){a9=A.cA(A.v(a9==null?"":a9))
if(a9==null)a9=0}b0=k?C.Ol:C.Oa
b1=a6.h(a5,b8)
b1=(a3.b(b1)?A.a0(b1,j,i):A.S(j,i)).h(0,b9)
if(!(typeof b1=="number")){b1=A.cA(A.v(b1==null?"":b1))
if(b1==null)b1=0}if(b1>=70)b1=C.d6
else{b1=a6.h(a5,b8)
b1=(a3.b(b1)?A.a0(b1,j,i):A.S(j,i)).h(0,b9)
if(!(typeof b1=="number")){b1=A.cA(A.v(b1==null?"":b1))
if(b1==null)b1=0}b1=b1<=30?B.cI:C.cH}b1=A.jI(b0,b7,b7,8,b7,a9/100,new A.lc(b1,a4))
a6=a6.h(a5,b8)
a6=(a3.b(a6)?A.a0(a6,j,i):A.S(j,i)).h(0,b9)
if(!(typeof a6=="number")){a6=A.cA(A.v(a6==null?"":a6))
if(a6==null)a6=0}a6=B.h.a1(a6,0)
a9=k?C.cl:B.c
n.push(new A.C(B.cB,new A.c1(B.aK,B.e,B.i,B.l,b7,B.p,b7,0,A.a([new A.a5(70,b7,a7,b7),new A.bu(1,B.b8,new A.no(new A.bc(a8,a8,a8,a8),B.ap,b1,b7),b7),B.aa,new A.a5(26,b7,A.c(a6,b7,b7,b7,b7,b7,b7,new A.G(!0,a9,b7,b7,b7,b7,12,B.C,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7),b7,b7,b7),b7)],w),b7),b7))}n.push(q.$1("Red bars are above 70 (stretched), blue below 30 (oversold), green in between (healthy)."))
return A.w(n,B.B,b7,B.e,B.i,0,B.p)
case"risk":return A.w(A.a([q.$1("Every agent trade is about $100 (of a stock on weekdays, of a coin on weekends). "+v+" is "+D.eg(s,!0,!1)+" right now."),B.aj,q.$1("- Take profit: it sells when the trade is up $50"),q.$1("- Stop loss: it sells when the trade is down $50"),B.aj,q.$1("Win 5 and lose 5 of 10 trades: 5 x 50 - 5 x 50 = $0.00. That is break even. Win 6 of 10 and you are up $100.")],x.p),B.B,b7,B.e,B.i,0,B.p)
case"brakes":w=b6.e
if(w==null)return q.$1('Try it yourself: before your next practice day, write down "I stop after losing $50 today". If three trades in a row lose, close the app and come back tomorrow. That is exactly what the agent does.')
b2=D.dF(J.t(w,"state"))
w=b6.e
w=D.eg(D.c5(D.dF(w==null?b7:J.t(w,"today")).h(0,"day_pnl")),!0,!0)
n=D.eg(D.c5(b2.h(0,"totalPnl")),!0,!0)
m=J.z(b2.h(0,"brakePaused"),!0)?"The brake is ON right now.":"Both brakes are off, it can keep trading."
return q.$1("Today the agent is at "+w+" (the daily stop is -$50) and "+n+" all time (the brake is -$100)."+m)
case"hours":if(b6.f!=null)b3=b6.fr
else{w=b6.e
b3=J.z(D.dF(w==null?b7:J.t(w,"market")).h(0,"stockOpen"),!0)}b4=B.d.aR(b6.ay,new D.eKL())
w=b3?"OPEN":"CLOSED"
n=b4?"OPEN":"CLOSED"
return q.$1("Right now the US stock market is "+w+", the forex market is "+n+", and crypto is open, as always.")
case"practice":w=b6.e
if(w==null){w=b6.gauf()
return q.$1("Right now "+new A.X(w,new D.eKM(),A.U(w).k("X<1>")).gI(0)+" of "+b6.gauf().length+" markets have signals that worked at least half the time lately. That is why a journal and many trades matter: some markets suit a method, others do not.")}b5=D.dF(J.t(w,"record"))
w=b5.h(0,"trades")
w=A.v(w==null?0:w)
n=b5.h(0,"wins")
n=A.v(n==null?0:n)
m=b5.h(0,"losses")
return q.$1("The agent journal so far: "+w+" finished trades, "+n+" wins and "+A.v(m==null?0:m)+" losses. Keep watching until there are at least 20 before judging it.")}return B.bK},
cFi(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=null,e=B.a.i(g.ch),d=g.gauf(),a0=A.U(d).k("X<1>"),a1=A.B(new A.X(d,new D.eL2(g,e.toLowerCase()),a0),a0.k("M.E"))
B.d.b_(a1,new D.eL3())
w=g.db
if(g.r==null)v=0
else{e=Date.now()
u=g.r
u.toString
v=B.n.ao(new A.W(e,0,!1).bx(u).a,1e6)}if(v<20)t="just now"
else t=v<60?""+v+" s ago":""+B.n.ao(v,60)+" min ago"
e=x.p
u=A.a([],e)
for(s=a2.a,r=0;r<4;++r){q=C.d7q[r]
if(g.cx===q)p=s?C.n7:B.c
else p=s?B.c.j(0.92):C.ib
o=new A.aQ(999,999)
n=new A.ax(s?C.oQ:C.oL,1,B.r,-1)
m=q==="All"?"All "+d.length:q+" "+new A.X(d,new D.eL4(q),a0).gI(0)
if(g.cx===q)l=s?B.c:C.n7
else l=s?C.cl:B.c
B.d.u(u,A.a([A.aA(f,A.q(f,A.c(m,f,f,f,f,f,f,new A.G(!0,l,f,f,f,f,12,B.C,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f),f,f,f),B.f,f,f,new A.p(p,f,new A.bE(n,n,n,n),new A.bc(o,o,o,o),f,f,B.m),f,f,f,f,C.bHg,f,f,f),B.y,!1,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,new D.eL5(g,q),f,f,f,f,f,f,!1,B.a4),B.b7],e))}a0=A.E(A.cc(A.A(u,B.l,f,B.e,B.i,0,f,f),B.t,f,B.y,f,f,f,f,f,B.aK),1)
u=g.CW?B.cC:B.eP
u=A.a([A.A(A.a([a0,B.b7,g.a1p(a2,u,new D.eL6(g))],e),B.l,f,B.e,B.i,0,f,f)],e)
if(g.CW){a0=A.l(f,f,s?C.cl:B.c,f,f,f,f,f,f,f,f,f,f,f,f,f,f,!0,f,f,f,f,f,f,f,f)
p=A.l(f,f,s?C.bT:C.bV,f,f,f,f,f,f,f,f,13,f,f,f,f,f,!0,f,f,f,f,f,f,f,f)
o=A.V(B.eP,s?C.bT:C.bV,f,f,f,f)
m=s?B.c.j(0.92):C.ib
l=A.n(999)
k=s?C.oQ:C.oL
j=A.n(999)
i=s?C.oQ:C.oL
B.d.u(u,A.a([B.S,A.aN(f,B.M,!0,f,!0,B.t,f,A.aP(),g.cy,f,f,f,f,f,2,A.bC(f,new A.b6(4,l,new A.ax(k,1,B.r,-1)),f,B.fc,f,f,f,f,!0,new A.b6(4,j,new A.ax(i,1,B.r,-1)),f,f,f,f,f,m,!0,f,f,f,f,f,f,f,f,f,f,f,f,f,p,"Search a market, for example EUR/USD, GBP or Bitcoin",f,f,f,f,f,f,f,f,f,!0,!0,!1,f,o,f,f,f,f,f,f,f,f,f,f,f,f),B.y,!0,f,!0,f,!1,f,B.am,f,f,f,f,f,f,f,f,f,1,f,f,!1,"\u2022",f,new D.eL7(g),f,f,f,!1,f,f,!1,f,!0,f,B.ae,f,f,f,f,f,f,f,f,f,f,f,a0,!0,B.a7,f,B.ao,f,f,f,f)],e))}u.push(B.af)
u.push(g.bHs(a2))
if(J.z(w.h(0,"paused"),!0)){a0=w.h(0,"pauseReason")
a0=A.v(a0==null?"Record too weak \u2014 signals paused until the pattern improves.":a0)
p=B.h.M(D.c5(w.h(0,"paperStreak")))
o=w.h(0,"liftStreak")
u.push(new A.C(B.lb,A.c(a0+" ("+p+" of "+B.h.M(D.c5(o==null?10:o))+" paper wins in a row to lift it)",f,f,f,f,f,f,C.fPa,B.K,f,f),f))}u.push(B.N)
u.push(A.A(A.a([C.c11,B.dY,new A.d1(1,B.c9,A.c("Live confirmations \xb7 updated "+t+" \xb7 signals are only given at the 30-minute checks",f,f,f,f,f,f,A.l(f,f,s?C.bT:C.bV,f,f,f,f,f,f,f,f,11,f,f,f,f,f,!0,f,f,f,f,f,f,f,f),B.K,f,f),f)],e),B.l,f,B.bb,B.i,0,f,f))
u.push(B.af)
if(d.length===0)u.push(A.c("Loading the markets...",f,f,f,f,f,f,A.l(f,f,s?C.bT:C.bV,f,f,f,f,f,f,f,f,f,f,f,f,f,f,!0,f,f,f,f,f,f,f,f),f,f,f))
if(d.length!==0&&a1.length===0){e=g.ch
u.push(A.at(A.c('No market matches "'+e+'".',f,f,f,f,f,f,A.l(f,f,s?C.bT:C.bV,f,f,f,f,f,f,f,f,f,f,f,f,f,f,!0,f,f,f,f,f,f,f,f),f,f,f),f,f,f))}for(e=a1.length,r=0;r<a1.length;a1.length===e||(0,A.I)(a1),++r){h=a1[r]
u.push(D.hNr(a2,h,!1,new D.eL8(g,h)))}u.push(g.cFh(a2))
u.push(A.c("Signals are opinions from price patterns, not guarantees. Even strong signals lose. Signals only: nothing is ever traded here.",f,f,f,f,f,f,A.l(f,f,s?C.bT:C.bV,f,f,f,f,f,f,f,f,11,f,f,f,f,f,!0,f,f,f,f,f,f,f,f),B.K,f,f))
return A.Gl(A.co(u,f,f,B.a2o,f,f,B.ah,!1),f,g.gchP())},
cFh(a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e="direction",d="graded",a0="exit_price",a1="move_pct",a2=x.g.a(this.db.h(0,"history"))
if(a2==null)a2=B.bN
a2=J.cL(a2,x.f)
a2=A.ct(a2,new D.eKZ(),a2.$ti.k("M.E"),x.P)
w=A.B(a2,A.a3(a2).k("M.E"))
a2=a3.a
v=a2?B.c.j(0.92):C.ib
u=A.n(20)
t=A.K(a2?B.c:C.nf,B.r,1)
s=A.c("Signal history",f,f,f,f,f,f,A.l(f,f,a2?C.cl:B.c,f,f,f,f,f,f,f,f,15,f,f,B.C,f,f,!0,f,f,f,f,f,f,f,f),f,f,f)
r=x.p
s=A.a([s,B.at,A.c("Every STRONG signal, graded at its 30-minute expiry: did the price finish its way? The record is the record.",f,f,f,f,f,f,A.l(f,f,a2?C.bT:C.bV,f,f,f,f,f,f,f,f,11.5,f,f,f,f,1.3,!0,f,f,f,f,f,f,f,f),f,f,f),B.N],r)
if(w.length===0)s.push(A.c("No STRONG signals yet. Zero signals is a correct outcome when the confirmations do not all agree.",f,f,f,f,f,f,A.l(f,f,a2?C.bT:C.bV,f,f,f,f,f,f,f,f,12.5,f,f,f,f,f,!0,f,f,f,f,f,f,f,f),f,f,f))
for(q=w.length,p=0;p<w.length;w.length===q||(0,A.I)(w),++p){o=w[p]
n=a2?C.oQ:C.oL
m=J.a1(o)
l=(J.z(m.h(o,e),"BUY")?C.cH:C.d6).j(0.14)
k=new A.aQ(8,8)
j=A.v(m.h(o,e))
i=J.z(m.h(o,e),"BUY")?C.cH:C.d6
l=A.q(B.z,A.c(j,f,f,f,f,f,f,new A.G(!0,i,f,f,f,f,11,B.u,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f),f,f,f),B.f,f,f,new A.p(l,f,f,new A.bc(k,k,k,k),f,f,B.m),f,f,f,f,B.tF,f,f,46)
k=A.v(m.h(o,"market"))
j=m.h(o,"price")
if(!(typeof j=="number")){j=A.cA(A.v(j==null?"":j))
if(j==null)j=0}i=m.h(o,"price")
if(!(typeof i=="number")){i=A.cA(A.v(i==null?"":i))
if(i==null)i=0}j=B.h.a1(j,i<10?4:2)
i=a2?C.cl:B.c
k=A.c(k+" at "+j,f,f,f,f,f,f,new A.G(!0,i,f,f,f,f,13,B.C,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f),f,f,f)
j=m.h(o,"et_time")
j=A.v(j==null?"":j)
if(J.z(m.h(o,d),!0)){i=m.h(o,a0)
if(!(typeof i=="number")){i=A.cA(A.v(i==null?"":i))
if(i==null)i=0}h=m.h(o,a0)
if(!(typeof h=="number")){h=A.cA(A.v(h==null?"":h))
if(h==null)h=0}i=B.h.a1(i,h<10?4:2)
h=m.h(o,a1)
if(!(typeof h=="number")){h=A.cA(A.v(h==null?"":h))
if(h==null)h=0}h=h>=0?"+":""
g=m.h(o,a1)
if(!(typeof g=="number")){g=A.cA(A.v(g==null?"":g))
if(g==null)g=0}g=" \xb7 then "+i+" ("+h+B.h.a1(g,2)+"%)"
i=g}else i=""
h=a2?C.bT:C.bV
k=A.w(A.a([k,A.c(j+i,f,f,f,f,f,f,new A.G(!0,h,f,f,f,f,11,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f),f,f,f)],r),B.B,f,B.e,B.i,0,B.p)
j=J.z(m.h(o,d),!0)?A.v(m.h(o,"result")):"PENDING"
if(!J.z(m.h(o,d),!0))m=B.b0
else m=J.z(m.h(o,"result"),"WIN")?C.cH:C.d6
i=m.j(0.14)
h=new A.aQ(999,999)
s.push(A.q(f,new A.c1(B.aK,B.e,B.i,B.l,f,B.p,f,0,A.a([l,B.ar,new A.bu(1,B.b8,k,f),A.q(f,A.c(j,f,f,f,f,f,f,new A.G(!0,m,f,f,f,f,10.5,B.u,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f),f,f,f),B.f,f,f,new A.p(i,f,f,new A.bc(h,h,h,h),f,f,B.m),f,f,f,f,B.f8,f,f,f)],r),f),B.f,f,f,new A.p(f,f,new A.bE(B.a1,B.a1,new A.ax(n,1,B.r,-1),B.a1),f,f,f,B.m),f,f,f,f,B.hA,f,f,f))}return A.q(f,A.w(s,B.B,f,B.e,B.i,0,B.p),B.f,f,f,new A.p(v,f,t,u,f,f,B.m),f,f,f,C.bFV,B.bD,f,f,f)},
bHs(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=new A.X(C.Er,new D.eKl(h),x.E).gI(0),e=h.z||h.y
if(!e)w=new A.b7([B.j8,B.b0,"Signal alerts unlock when you finish all 10 lessons ("+f+" of 10 done). You will be told the market and STRONG BUY or SELL (only when all 5 confirmations agree), built for a 15\u201330 minute expiry.","Go to lessons"])
else w=!h.Q?C.fpd:C.fox
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
m=A.n(16)
l=A.K(t.j(0.45),B.r,1)
k=A.V(n,t,g,g,g,g)
j=x.p
k=A.a([k,B.ar,A.E(A.c(s,g,g,g,g,g,g,A.l(g,g,d.a?C.cl:B.c,g,g,g,g,g,g,g,g,12,g,g,g,g,1.35,!0,g,g,g,g,g,g,g,g),g,g,g),1)],j)
if(r!=null){i=A.bp(t,g,g,g,g,g,B.eU,g,g,g,g,g)
B.d.u(k,A.a([B.aa,A.bH(A.c(r,g,g,g,g,g,g,B.pu,g,g,g),g,new D.eKm(h,e),i)],j))}return A.q(g,A.A(k,B.l,g,B.e,B.i,0,g,g),B.f,g,g,new A.p(v,g,l,m,g,g,B.m),g,g,g,B.dW,B.bg,g,g,g)},
bIO(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=x.p,h=A.a([],i)
if($.DJ.length===0){w=d.a
v=w?B.c.j(0.92):C.ib
u=A.n(22)
t=A.K(w?B.c:C.nf,B.r,1)
s=A.q(j,C.c1Y,B.f,j,j,E.agS,j,40,j,j,j,j,j,40)
s=A.A(A.a([s,B.ar,A.E(A.c("Your trading tutor",j,j,j,j,j,j,A.l(j,j,w?C.cl:B.c,j,j,j,j,j,j,j,j,16,j,j,B.C,j,j,!0,j,j,j,j,j,j,j,j),j,j,j),1)],i),B.l,j,B.e,B.i,0,j,j)
v=A.q(j,A.w(A.a([s,B.N,A.c("Ask anything about trading. The tutor sees the same live prices and readings as the agent, so it can explain what each market is doing right now.",j,j,j,j,j,j,A.l(j,j,w?C.bT:C.bV,j,j,j,j,j,j,j,j,12.5,j,j,j,j,1.35,!0,j,j,j,j,j,j,j,j),j,j,j)],i),B.B,j,B.e,B.i,0,B.p),B.f,j,j,new A.p(v,j,t,u,j,j,B.m),j,j,j,j,B.bR,j,j,j)
u=A.a([],i)
for(r=0;r<6;++r){q=C.ddL[r]
t=w?C.cl:B.c
t=A.c(q,j,j,j,j,j,j,new A.G(!0,t,j,j,j,j,12,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j),j,j,j)
s=w?B.c.j(0.92):C.ib
p=w?C.oQ:C.oL
o=new A.aQ(999,999)
u.push(A.mG(j,s,j,t,j,new D.eKn(k,q),j,new A.ba(new A.bc(o,o,o,o),B.a1),new A.ax(p,1,B.r,-1),j))}B.d.u(h,A.a([v,B.af,A.c0(B.bI,u,B.br,j,8,8)],i))}for(w=$.DJ.length,v=d.a,r=0;r<$.DJ.length;$.DJ.length===w||(0,A.I)($.DJ),++r){n=$.DJ[r]
u=n.a
t=u?B.a9:B.a5
if(u)s=v?C.n7:B.c
else s=v?B.c.j(0.92):C.ib
p=u?18:4
o=u?4:18
if(u)m=j
else{l=new A.ax(v?B.c:C.nf,1,B.r,-1)
m=new A.bE(l,l,l,l)}if(u)u=v?B.c:C.n7
else u=v?C.cl:B.c
h.push(new A.bK(t,j,j,A.q(j,A.yR(n.b,new A.G(!0,u,j,j,j,j,13.5,j,j,j,j,j,1.4,j,j,j,j,j,j,j,j,j,j,j,j,j),j),B.f,j,F.ags,new A.p(s,j,m,new A.bc(B.i8,B.i8,new A.aQ(p,p),new A.aQ(o,o)),j,j,B.m),j,j,j,B.jE,B.hp,j,j,j),j))}if($.ahJ){w=v?B.c.j(0.92):C.ib
u=A.n(18)
h.push(new A.bK(B.a5,j,j,A.q(j,A.A(A.a([B.WG,B.aa,A.c("Reading the markets...",j,j,j,j,j,j,A.l(j,j,v?C.bT:C.bV,j,j,j,j,j,j,j,j,12.5,j,j,j,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)],i),B.l,j,B.e,B.P,0,j,j),B.f,j,j,new A.p(w,j,j,u,j,j,B.m),j,j,j,B.hz,B.hp,j,j,j),j))}h=A.E(A.co(h,k.ax,j,C.bIt,j,j,B.ah,!1),1)
w=A.l(j,j,v?C.cl:B.c,j,j,j,j,j,j,j,j,j,j,j,j,j,j,!0,j,j,j,j,j,j,j,j)
u=A.l(j,j,v?C.bT:C.bV,j,j,j,j,j,j,j,j,j,j,j,j,j,j,!0,j,j,j,j,j,j,j,j)
t=v?B.c.j(0.92):C.ib
s=A.n(999)
p=v?C.oQ:C.oL
o=A.n(999)
m=v?C.oQ:C.oL
w=A.E(A.aN(j,B.M,!1,j,!0,B.t,j,A.aP(),k.at,j,j,j,j,j,2,A.bC(j,new A.b6(4,s,new A.ax(p,1,B.r,-1)),j,B.zz,j,j,j,j,!0,new A.b6(4,o,new A.ax(m,1,B.r,-1)),j,j,j,j,j,t,!0,j,j,j,j,j,j,j,j,j,j,j,j,j,u,"Ask about trading or a market...",j,j,j,j,j,j,j,j,j,!0,!0,!1,j,j,j,j,j,j,j,j,j,j,j,j,j,j),B.y,!0,j,!0,j,!1,j,B.am,j,j,j,j,j,j,j,j,j,4,1,j,!1,"\u2022",j,j,j,k.gchO(),j,!1,j,j,!1,j,!0,j,B.ae,j,j,j,j,j,j,j,j,j,j,j,w,!0,B.a7,j,B.ao,j,B.acP,j,j),1)
u=v?C.n7:B.c
t=$.ahJ?j:new D.eKo(k)
return A.w(A.a([h,A.q(j,A.A(A.a([w,B.aa,A.aE(!1,B.a3,!0,j,A.aM(!1,j,!0,new A.a5(48,48,A.V(B.q4,v?B.c:C.n7,j,j,j,j),j),B.cM,!0,j,j,j,j,j,j,j,j,j,j,j,t,j,j,j,j,j,j,j),B.f,u,0,j,j,B.cM,j,j,B.ai)],i),B.l,j,B.e,B.i,0,j,j),B.f,j,j,j,j,j,j,j,B.HM,j,j,j)],i),B.l,j,B.e,B.i,0,B.p)}}
D.a13.prototype={
R(){var w=x.S
return new D.bm_(A.S(w,w))},
d_S(d){return this.e.$0()},
d2C(d){return this.x.$1(d)},
rB(){return this.y.$0()},
d19(d){return this.z.$1(d)},
gd5(d){return this.w}}
D.bm_.prototype={
Z(){var w,v,u,t,s,r,q,p,o,n=this
n.a4()
w=C.dN2.h(0,n.a.c.a)
n.d=w==null?n.a.c.x:w
v=n.a.w
u=new D.dwo()
t=new D.dwm()
w=u.$1(v.h(0,"slots"))
s=A.U(w).k("X<1>")
w=A.B(new A.X(w,new D.dwk(n),s),s.k("M.E"))
n.e=w
w=w.length
s=n.d.length
if(w!==Math.min(10,s)){w=x.S
r=J.e3(s,w)
for(q=0;q<s;++q)r[q]=q
B.d.e_(r,B.cW)
n.e=A.cJ(r,0,A.dx(Math.min(10,n.d.length),"count",w),A.U(r).c).de(0)}w=u.$1(v.h(0,"right"))
n.f=A.jv(w,A.U(w).c)
n.r=t.$1(v.h(0,"tries"))
n.w=t.$1(v.h(0,"locks"))
n.x=u.$1(v.h(0,"used"))
for(w=n.e,s=w.length,p=0;p<w.length;w.length===s||(0,A.I)(w),++p){o=w[p]
if(!B.d.q(n.x,o))B.d.K(n.x,o)}n.bcv(!1)
n.z=A.d5(B.fr,new D.dwl(n))},
t(){var w=this.z
if(w!=null)w.a2(0)
this.a3()},
b4g(){var w,v,u,t,s,r,q=this,p=q.a
p.toString
w=q.e
w===$&&A.d()
v=q.f
v===$&&A.d()
v=A.B(v,A.a3(v).k("ck.E"))
u=q.r
u===$&&A.d()
t=x.N
s=x.S
u=u.j2(u,new D.dwc(),t,s)
r=q.w
r===$&&A.d()
s=r.j2(r,new D.dwd(),t,s)
r=q.x
r===$&&A.d()
return p.d2C(A.J(["slots",w,"right",v,"tries",u,"locks",s,"used",r],t,x.z))},
bcv(d){var w,v,u,t,s,r,q,p,o,n=this,m=Date.now(),l=n.y,k=x.X,j=!1,i=0
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
q=A.B(new A.X(s,new D.dwe(n),w),w.k("M.E"))
if(q.length!==0)p=q
else{t=n.d.length
s=A.a(new Array(t),k)
for(r=0;r<t;++r)s[r]=r
w=A.U(s).k("X<1>")
p=A.B(new A.X(s,new D.dwf(n),w),w.k("M.E"))}w=p.length
if(w===0)o=v
else o=p[B.cW.aw(w)]
n.w.X(0,v)
w=n.r
w===$&&A.d()
w.X(0,v)
l.X(0,v)
n.e[i]=o
w=n.x
w===$&&A.d()
if(!B.d.q(w,o))B.d.K(n.x,o)
j=!0}++i}if(j&&d)n.b4g()},
cHZ(){return this.bcv(!0)},
com(d){var w,v,u,t,s=this.d
s===$&&A.d()
w=s[d].b.length
s=J.e3(w,x.S)
for(v=0;v<w;++v)s[v]=v
u=this.x
u===$&&A.d()
t=new A.e6()
t.cW(d*7919+u.length)
B.d.e_(s,t)
return s},
chN(d,e){var w=this,v=w.f
v===$&&A.d()
if(!v.q(0,d)){v=w.w
v===$&&A.d()
v=v.am(0,d)}else v=!0
if(v)return
w.l(new D.dwa(w,e,d))
w.b4g()},
C(d){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=A.Q(d).ax.a===B.dg,i=new D.RK(j),h=l.a.c,g=l.e
g===$&&A.d()
w=l.f
w===$&&A.d()
v=new A.X(g,w.gjL(w),A.U(g).k("X<1>")).gI(0)
u=v===l.e.length
g=j?C.tc:C.ta
w=j?C.tc:C.ta
t=j?C.Oe:C.O6
s=x.O
t=A.a([w,t],s)
w=A.aJ(k,k,k,k,A.V(B.eE,j?C.cl:B.c,k,k,k,18),k,k,k,new D.dwg(d),k,k,k,k,k,k)
r=l.a.d
q=x.p
r=A.A(A.a([w,B.aX,A.c("Lesson "+r+" of 10",k,k,k,k,k,k,A.l(k,k,j?C.bT:C.bV,k,k,k,k,k,k,k,k,12,k,k,B.O,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)],q),B.l,k,B.e,B.i,0,k,k)
w=A.n(24)
p=h.f
o=A.ap(p,B.v,0.35)
o.toString
s=A.a([p,o],s)
o=B.c.j(0.2)
p=A.n(16)
s=A.a([r,A.q(k,A.A(A.a([A.q(k,A.V(h.e,B.c,k,k,k,28),B.f,k,k,new A.p(o,k,k,p,k,k,B.m),k,52,k,k,k,k,k,52),B.er,A.E(A.w(A.a([A.c(h.b,k,k,k,k,k,k,B.fS,k,k,k),A.c(h.c+" \xb7 "+h.d+" min",k,k,k,k,k,k,B.nC,k,k,k)],q),B.B,k,B.e,B.i,0,B.p),1)],q),B.l,k,B.e,B.i,0,k,k),B.f,k,k,new A.p(k,k,k,w,k,new A.a6(B.a5,B.a9,B.w,s,k,k),B.m),k,k,k,k,B.f7,k,k,k),B.aB],q)
for(w=h.w,n=0;n<4;++n){r=w[n]
p=j?C.cl:B.c
p=A.c(r.a,k,k,k,k,k,k,new A.G(!0,p,k,k,k,k,16,B.C,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k),k,k,k)
o=j?C.cl:B.c
B.d.u(s,A.a([p,B.at,A.c(r.b,k,k,k,k,k,k,new A.G(!0,o,k,k,k,k,14,k,k,k,k,k,1.5,k,k,k,k,k,k,k,k,k,k,k,k,k),k,k,k),B.aB],q))}w=j?B.c.j(0.92):C.ib
r=A.n(22)
p=A.K(C.cH.j(0.45),B.r,1.5)
s.push(A.q(k,A.w(A.a([A.A(A.a([C.bYv,B.b7,A.c("See it live right now",k,k,k,k,k,k,A.l(k,k,j?C.cl:B.c,k,k,k,k,k,k,k,k,14,k,k,B.C,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)],q),B.l,k,B.e,B.i,0,k,k),B.S,l.a.d_S(0)],q),B.B,k,B.e,B.i,0,B.p),B.f,k,k,new A.p(w,k,p,r,k,k,B.m),k,k,k,k,B.bD,k,k,k))
s.push(B.bx)
w=A.c("Quiz",k,k,k,k,k,k,A.l(k,k,j?C.cl:B.c,k,k,k,k,k,k,k,k,16,k,k,B.C,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)
r=""+v+" of "
p=l.e.length
if(u)o=C.cH
else o=j?C.bT:C.bV
s.push(A.A(A.a([w,B.aX,A.c(r+p+" right",k,k,k,k,k,k,A.l(k,k,o,k,k,k,k,k,k,k,k,12.5,k,k,B.C,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)],q),B.l,k,B.e,B.i,0,k,k))
s.push(B.aj)
o=A.n(9)
w=l.e.length
w=w===0?0:v/w
s.push(A.bv(o,A.jI(j?C.Ol:C.Oa,k,k,7,k,w,C.b6i),B.ap))
s.push(B.N)
w=l.a.f?"Admin: you can retry any question.":"Get all 10 right to finish. A wrong answer gets one more try; wrong twice and that question locks for 5 minutes, then a new question takes its place."
s.push(A.c(w,k,k,k,k,k,k,A.l(k,k,j?C.bT:C.bV,k,k,k,k,k,k,k,k,11.8,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),k,k,k))
s.push(B.S)
for(m=0;w=l.e,m<w.length;++m)s.push(l.cvI(i,m,w[m]))
s.push(B.N)
w=j?C.cl:B.c
p=j?C.oQ:C.oL
p=A.E(A.en(C.c4b,k,C.h_F,new D.dwh(l,h),A.dj(k,k,k,k,k,k,k,k,k,w,k,k,B.cq,k,new A.ba(A.n(999),B.a1),new A.ax(p,1.5,B.r,-1),k,k,k,k)),1)
w=!u
if(!w||l.a.r)j=C.cH
else j=j?C.bT:C.bV
j=A.bp(j,k,k,k,k,k,B.cq,k,new A.ba(A.n(999),B.a1),k,k,k)
o=!w||l.a.r?new D.dwi(l,d):k
s.push(A.A(A.a([p,B.ar,A.E(A.df(B.Rs,k,A.c(!w||l.a.r?"Finish lesson":r+l.e.length+" right",k,k,k,k,k,k,B.cf,k,k,k),o,j),1)],q),B.l,k,B.e,B.i,0,k,k))
return A.c6(k,g,A.q(k,A.bn(!0,A.co(s,k,k,C.bIA,k,k,B.ah,!1),!0,!1,B.ag,!0,!0),B.f,k,k,new A.p(k,k,k,k,k,new A.a6(B.aU,B.b2,B.w,t,k,k),B.m),k,k,k,k,k,k,k,k),k,!1,!1,k,k)},
cvI(a8,a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=this,a6=null,a7=a5.d
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
if(u!=null){a7=A.dw(0,0,0,Math.max(0,u-Date.now()),0,0).a
r=B.n.ao(a7,6e7)
q=B.a.aY(B.n.v(B.n.F(B.n.ao(a7,1e6),60)),2,"0")
a7=a8.a
p=a7?C.r2:C.r3
o=A.n(20)
n=A.K(C.d6.j(0.4),B.r,1)
m=A.c("Question "+(a9+1)+" is locked",a6,a6,a6,a6,a6,a6,A.l(a6,a6,a7?C.cl:B.c,a6,a6,a6,a6,a6,a6,a6,a6,14,a6,a6,B.C,a6,a6,!0,a6,a6,a6,a6,a6,a6,a6,a6),a6,a6,a6)
l=x.p
return A.q(a6,A.A(A.a([C.c6i,B.ar,A.E(A.w(A.a([m,A.c("Wrong twice. Re-read the lesson; a new question appears in "+r+":"+q+".",a6,a6,a6,a6,a6,a6,A.l(a6,a6,a7?C.bT:C.bV,a6,a6,a6,a6,a6,a6,a6,a6,12.5,a6,a6,a6,a6,1.35,!0,a6,a6,a6,a6,a6,a6,a6,a6),a6,a6,a6)],l),B.B,a6,B.e,B.i,0,B.p),1)],l),B.l,a6,B.e,B.i,0,a6,a6),B.f,a6,a6,new A.p(p,a6,n,o,a6,a6,B.m),a6,a6,a6,B.d2,B.bD,a6,a6,a6)}a7=a8.a
p=a7?B.c.j(0.92):C.ib
o=A.n(20)
if(v)n=C.cH.j(0.6)
else n=a7?B.c:C.nf
n=A.K(n,B.r,v?1.5:1)
m=x.p
l=A.a([A.c(""+(a9+1)+". "+w.a,a6,a6,a6,a6,a6,a6,A.l(a6,a6,a7?C.cl:B.c,a6,a6,a6,a6,a6,a6,a6,a6,14,a6,a6,B.C,a6,a6,!0,a6,a6,a6,a6,a6,a6,a6,a6),a6,a6,a6),B.N],m)
for(k=a5.com(b0),j=k.length,i=!v,h=w.b,g=w.c,f=0;f<k.length;k.length===j||(0,A.I)(k),++f){e=k[f]
d=v?a6:new D.dwb(a5,b0,e)
if(v&&e===g)a0=C.cH.j(0.14)
else if(s===e)a0=C.d6.j(0.12)
else a0=a7?C.r2:C.r3
a1=new A.aQ(14,14)
if(v&&e===g)a2=C.cH
else a2=s===e?C.d6:B.L
a3=new A.ax(a2,1,B.r,-1)
a2=h[e]
a4=a7?C.cl:B.c
a2=A.a([new A.bu(1,B.b8,A.c(a2,a6,a6,a6,a6,a6,a6,new A.G(!0,a4,a6,a6,a6,a6,13.5,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6),a6,a6,a6),a6)],m)
if(v&&e===g)a2.push(C.c1I)
if(i&&s===e)a2.push(C.c7F)
l.push(A.aA(a6,A.q(a6,new A.c1(B.aK,B.e,B.i,B.l,a6,B.p,a6,0,a2,a6),B.f,a6,a6,new A.p(a0,a6,new A.bE(a3,a3,a3,a3),new A.bc(a1,a1,a1,a1),a6,a6,B.m),a6,a6,a6,B.eC,B.ep,a6,a6,a6),B.y,!1,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,d,a6,a6,a6,a6,a6,a6,!1,B.a4))}if(v)l.push(A.c("Right! "+w.d,a6,a6,a6,a6,a6,a6,C.fUw,a6,a6,a6))
else if(t===1&&!a5.a.f)l.push(C.h2q)
else if(t>=1)l.push(C.h_P)
return A.q(a6,A.w(l,B.B,a6,B.e,B.i,0,B.p),B.f,a6,a6,new A.p(p,a6,n,o,a6,a6,B.m),a6,a6,a6,B.d2,B.bD,a6,a6,a6)}}
D.aQ6.prototype={
t(){var w=this,v=w.ab$
if(v!=null)v.a8(0,w.gbB())
w.ab$=null
w.a3()},
b0(){this.b8()
this.b5()
this.bC()}}
var z=a.updateTypes(["P(uD)","az<~>()","~()","Y3(Z)","P(Re)","az<~>(o)","o(a01)","a13(Z)"])
D.eKi.prototype={
$1(d){var w=this.a
if(w.c!=null)w.z6(!0)},
$S:31}
D.eKj.prototype={
$1(d){this.a.z6(!0)
return null},
$S:10}
D.eJz.prototype={
$0(){var w=this.a
w.d=this.b
w.f=!1},
$S:0}
D.eJQ.prototype={
$1(d){var w=this.a.as,v=w.f
if(v.length!==0){v=B.d.gd4(v).Q
v.toString
w.ie(B.h.D(Math.min(this.b*160-16,v),0,1/0))}},
$S:7}
D.eJB.prototype={
$0(){return this.a.Q=this.b},
$S:0}
D.eJP.prototype={
$0(){return this.a.Q=this.b},
$S:0}
D.eJS.prototype={
$0(){var w=this.a,v=w.f=!1,u=this.b,t=u==null
if(!t?J.z(J.t(u,"ok"),!0):v){w.d=u
w.ay=null}else{v=t?null:J.t(u,"error")
w.ay=J.k(v==null?"Could not reach the server. Pull down to try again.":v)
if(!J.z(t?null:J.t(u,"ownerOnly"),!0))v=J.z(t?null:J.t(u,"setupNeeded"),!0)
else v=!0
if(v)w.d=null}},
$S:0}
D.eJT.prototype={
$0(){var w=this.a,v=this.b
w.e=v
w.w=J.aa(v)>=30},
$S:0}
D.eJy.prototype={
$1(d){return A.a0(d,x.N,x.z)},
$S:22}
D.eJA.prototype={
$0(){var w,v,u=this,t=u.a
if(u.b){w=A.B(t.e,x.P)
v=u.c
B.d.u(w,v)}else{w=u.c
v=w}t.e=w
t.w=J.aa(v)>=30},
$S:0}
D.eK0.prototype={
$1(d){var w=null
return A.ek(A.a([A.bL(!1,B.dy,w,w,!0,w,w,w,new D.eJZ(d),w,w),A.bH(C.hmO,w,new D.eK_(d),w)],x.p),w,w,w,C.hnd,w,w,w,w,C.h3W,w)},
$S:17}
D.eJZ.prototype={
$0(){A.a8(this.a,!1).N(!1)
return null},
$S:0}
D.eK_.prototype={
$0(){A.a8(this.a,!1).N(!0)
return null},
$S:0}
D.eK1.prototype={
$0(){var w,v,u,t,s=this.a
s.r=!0
w=s.d
if(w!=null){v=x.N
u=x.z
w=A.dE(w,v,u)
t=s.d
t.toString
u=A.dE(D.dF(J.t(t,"state")),v,u)
v=this.b
u.n(0,"enabled",v)
if(v)u.n(0,"brakePaused",!1)
w.n(0,"state",u)
s.d=w}},
$S:0}
D.eK2.prototype={
$0(){var w=this,v=w.a,u=v.r=!1,t=w.b
if(t){u=w.c
u.toString
u=J.t(u,"state")!=null}if(u)v.d=w.c
else if(!t)v.d=w.d},
$S:0}
D.eJI.prototype={
$1(d){var w=this.a,v=w.d
w.a.toString
return D.hmg(v,!1)},
$S:z+3}
D.eJV.prototype={
$0(){return this.a.r=!0},
$S:0}
D.eJW.prototype={
$0(){var w=this.a,v=w.r=!1,u=this.b
if(u!=null?J.z(J.t(u,"ok"),!0):v)w.d=u},
$S:0}
D.eJX.prototype={
$1(d){var w=this
return A.ol(new D.eJU(w.a,w.b,w.c,w.d),!1,0.8,0.95,0.25,!1,null)},
$S:129}
D.eJU.prototype={
$2(d,e){var w=this
return w.a.cAU(w.b,w.c,D.dF(J.t(w.d,"state")),e)},
$S:2095}
D.eJY.prototype={
$2(d,e){return B.h.aQ(D.eK5(d),D.eK5(e))},
$S:39}
D.eKh.prototype={
$0(){return this.a.z6(!0)},
$S:1}
D.eKc.prototype={
$0(){var w=this.a.c
w.toString
return A.Oq(w)},
$S:0}
D.eKd.prototype={
$0(){return this.a.z6(!0)},
$S:0}
D.eJm.prototype={
$1(d){var w,v=J.a1(d)
if(!J.z(v.h(d,"today"),!0)){v=v.h(d,"asset")
w=this.a
v=J.z(v,w==null?null:w.h(0,"symbol"))}else v=!0
return v},
$S:4}
D.eJn.prototype={
$1(d){return J.z(J.t(d,"asset"),this.a.Q)},
$S:4}
D.eJo.prototype={
$1(d){return J.z(J.t(d,"asset"),this.a)},
$S:4}
D.eJp.prototype={
$0(){var w=this
return B.d.ds(w.a,new D.eJk(w.b),new D.eJl(w.c,w.d))},
$S:147}
D.eJk.prototype={
$1(d){return J.z(J.t(d,"asset"),this.a)},
$S:4}
D.eJl.prototype={
$0(){var w=this.a
return w.length===0?this.b:B.d.gH(w)},
$S:147}
D.eJq.prototype={
$1(d){return J.z(J.t(d,"asset"),this.a.h(0,"symbol"))},
$S:4}
D.eJr.prototype={
$0(){return this.a},
$S:147}
D.eK8.prototype={
$1(d){return A.v(d)},
$S:15}
D.eK9.prototype={
$1(d){return A.v(d)},
$S:15}
D.eKa.prototype={
$1(d){return B.a.q(d,"/")},
$S:3}
D.eKb.prototype={
$1(d){return!B.a.q(d,"/")},
$S:3}
D.eK4.prototype={
$1(d){var w,v=this,u=null,t=v.b,s=v.a.cKi(t,v.c,v.d)
t=t.a
w=A.fu(u,u,t?B.c.j(0.92):C.ib,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,B.nz,u,u,u,u,u,u)
return A.eB(u,B.L,A.aE(!1,B.a3,!0,u,A.w(A.a([s,B.S,A.bL(!1,A.c("Got it",u,u,u,u,u,u,A.l(u,u,t?C.cl:B.c,u,u,u,u,u,u,u,u,u,u,u,B.C,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u,u,!0,u,u,u,new D.eK3(d),u,w)],x.p),B.l,u,B.e,B.P,0,B.p),B.f,B.L,0,u,u,u,u,u,B.ai),u,u,u,B.zC,u,B.db,u,u,u)},
$S:46}
D.eK3.prototype={
$0(){return A.a8(this.a,!1).e6()},
$S:0}
D.eK7.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.c
s.toString
w=2
return A.b(A.a8(s,!1).c9(A.e4(new D.eK6(u.b),!1,null,x.H)),$async$$0)
case 2:if(t.c!=null)t.z6(!1)
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
D.eK6.prototype={
$1(d){return D.hD_(this.a)},
$S:599}
D.eJD.prototype={
$1(d){return J.z(J.t(d,"open"),!0)},
$S:4}
D.eJE.prototype={
$0(){var w=this
return w.a.cF9(w.b,w.c,w.d)},
$S:0}
D.eJF.prototype={
$1(d){return J.z(J.t(d,"asset"),J.t(this.a,"asset"))},
$S:4}
D.eJH.prototype={
$2(d,e){return B.ar},
$S:37}
D.eJG.prototype={
$2(d,a0){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.b[a0],l=J.a1(m),k=J.k(l.h(m,"asset")),j=k===J.t(o.c,"asset"),i=D.c5(l.h(m,"changePct")),h=i>=0,g=o.d,f=J.z(g==null?n:g.h(0,"symbol"),k),e=J.z(D.dF(l.h(m,"reading")).h(0,"decision"),"ENTER")&&J.z(D.dF(l.h(m,"reading")).h(0,"dir"),"up")
g=o.a
w=o.e
v=w.a
u=v?B.c.j(0.92):C.ib
t=A.n(16)
if(j)s=D.fEp(k).c
else s=v?B.c:C.nf
s=A.K(s,B.r,j?2:1)
w=j?D.fEp(k).c.j(0.2):w.gIq()
w=A.a([new A.ac(0,B.H,w,B.cN,j?12:8)],x.V)
r=D.bEF(k,16)
q=x.p
r=A.a([r,B.dY,A.E(A.c(k,n,1,B.a2,n,n,n,A.l(n,n,v?C.cl:B.c,n,n,n,n,n,n,n,n,11.5,n,n,B.C,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),1)],q)
if(f)B.d.u(r,A.a([A.V(B.q9,F.qS,n,n,n,13),B.pr],q))
else if(e)B.d.u(r,A.a([A.V(B.fP,C.cH,n,n,n,14),B.pr],q))
r.push(g.cLG(m))
r=A.A(r,B.l,n,B.e,B.i,0,n,n)
l=D.eg(D.c5(l.h(m,"price")),!0,!1)
l=A.E(new A.d7(B.dn,B.a5,B.f,A.c(l,n,n,n,n,n,n,A.l(n,n,v?C.cl:B.c,n,n,n,n,n,n,n,n,14.5,n,n,B.C,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),n),1)
v=h?"+":""
p=B.h.a1(i,2)
return A.aA(n,A.cY(n,A.w(A.a([r,A.A(A.a([l,B.da,A.c(v+p+"%",n,n,n,n,n,n,A.l(n,n,h?C.cH:C.d6,n,n,n,n,n,n,n,n,10.5,n,n,B.C,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],q),B.dr,n,B.e,B.i,0,n,n)],q),B.B,n,B.iB,B.i,0,B.p),n,n,B.b_,new A.p(u,n,s,t,w,n,B.m),B.a3,n,n,n,n,B.iQ,n,n,152),B.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new D.eJC(g,k),n,n,n,n,n,n,!1,B.a4)},
$S:79}
D.eJC.prototype={
$0(){return this.a.a2J(this.b)},
$S:0}
D.eJu.prototype={
$0(){var w=this.a
return w.l(new D.eJt(w,this.b))},
$S:0}
D.eJt.prototype={
$0(){return this.a.z=this.b},
$S:0}
D.eJv.prototype={
$0(){var w=this.a
return w.l(new D.eJs(w))},
$S:0}
D.eJs.prototype={
$0(){var w=this.a
return w.ax=!w.ax},
$S:0}
D.eJw.prototype={
$1(d){return A.a0(d,x.N,x.z)},
$S:22}
D.eJi.prototype={
$1(d){return J.z(J.t(d,"asset"),this.a.h(0,"symbol"))},
$S:4}
D.eJj.prototype={
$0(){return A.S(x.N,x.z)},
$S:147}
D.eJK.prototype={
$1(d){return A.v(d)},
$S:15}
D.eJL.prototype={
$1(d){return A.v(d)},
$S:15}
D.eJM.prototype={
$1(d){return A.v(d)},
$S:15}
D.eJJ.prototype={
$1(d){var w,v,u,t,s=A.be(A.v(d==null?"":d))
if(s==null)return"?"
w=s.bV()
v=B.n.F(A.cX(w),12)===0?12:B.n.F(A.cX(w),12)
u=B.a.aY(B.n.v(A.fx(w)),2,"0")
t=A.cX(w)<12?"AM":"PM"
return""+v+":"+u+" "+t},
$S:15}
D.eJN.prototype={
$2(d,e){var w,v=null,u=this.a.a?C.r2:C.r3
u=A.bT(3,A.q(v,v,B.f,v,v,new A.p(u,v,v,A.n(99),v,v,B.m),v,v,v,v,v,v,v,v),0,0,3)
w=B.h.D(this.b/this.c,0,1)
return new A.a5(v,14,new A.am(B.a0,v,B.ac,B.t,A.a([u,A.ao(3,A.q(v,v,B.f,v,v,new A.p(C.cH,v,v,A.n(99),v,v,B.m),v,v,v,v,v,v,v,v),v,v,0,v,3,e.b*w)],x.p),v),v)},
$S:110}
D.eJO.prototype={
$1(d){var w=J.a1(d),v=A.v(w.h(d,"symbol"))
return A.aH(v,"/USD","")+" until "+A.v(this.a.$1(w.h(d,"until")))},
$S:2096}
D.eJR.prototype={
$2(d,e){var w=null,v=e.b,u=A.ao(w,A.q(w,w,B.f,w,w,new A.p(w,w,w,A.n(99),w,C.cce,B.m),w,8,w,w,w,w,w,w),w,w,0,0,9,w),t=this.a.a,s=A.ao(w,A.q(w,w,B.f,(t?C.cl:B.c).j(0.5),w,w,w,18,w,w,w,w,w,2),w,w,v/2-1,w,4,w),r=B.h.D(this.b*v-9,0,v-18)
return new A.a5(w,26,new A.am(B.a0,w,B.ac,B.f,A.a([u,s,A.ao(w,A.q(w,w,B.f,w,w,new A.p(B.c,w,A.K(t?C.cl:B.c,B.r,3),w,w,w,B.a6),w,18,w,w,w,w,w,18),w,w,r,w,4,w)],x.p),w),w)},
$S:110}
D.eJx.prototype={
$0(){return this.a.zs(!this.b)},
$S:0}
D.eJh.prototype={
$2(d,e){var w=null,v=this.a.a,u=v?C.r2:C.r3,t=A.n(12),s=A.c(d,w,1,B.a2,w,w,w,A.l(w,w,v?C.bT:C.bV,w,w,w,w,w,w,w,w,10.5,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)
return A.E(A.q(w,A.w(A.a([s,B.bs,new A.d7(B.dn,B.a5,B.f,A.c(e,w,w,w,w,w,w,A.l(w,w,v?C.cl:B.c,w,w,w,w,w,w,w,w,13,w,w,B.C,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w)],x.p),B.B,w,B.e,B.i,0,B.p),B.f,w,w,new A.p(u,w,w,t,w,w,B.m),w,w,w,w,B.iQ,w,w,w),1)},
$S:113}
D.eKf.prototype={
$1(d){return A.a0(d,x.N,x.z)},
$S:22}
D.eKg.prototype={
$0(){var w=this.a
return w.l(new D.eKe(w))},
$S:0}
D.eKe.prototype={
$0(){var w=this.a
return w.y=!w.y},
$S:0}
D.eJg.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=t.x&&t.w?2:4
break
case 2:w=5
return A.b(t.a_B(!0),$async$$0)
case 5:w=3
break
case 4:t.l(new D.eJf(t))
case 3:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
D.eJf.prototype={
$0(){var w=this.a
return w.x=!w.x},
$S:0}
D.fNh.prototype={
$1(d){return Math.abs(B.n.ao(d.a.bx(this.a).a,1e6))<90&&d.d.A(0,this.b)},
$S:z+4}
D.cYi.prototype={
$0(){return this.a.d=this.b},
$S:0}
D.cYr.prototype={
$2(d,e){var w,v,u=null,t=e.b,s=this.a,r=s.a,q=r.c,p=r.d,o=r.e,n=r.f
r=r.r
w=s.d
v=d.L(x.D)
if(v==null)v=B.CY
return A.aA(u,new A.a5(t,250,A.b4(u,u,u,new D.bfg(v.w.d,s.a.w,q,p,o,n,r,w,u),B.aA),u),B.y,!1,u,u,u,u,u,new D.cYm(s),new D.cYn(s,t),new D.cYo(s,t),u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new D.cYp(s,t),new D.cYq(s),u,u,u,!1,B.a4)},
$S:36}
D.cYp.prototype={
$1(d){return this.a.aBw(d.b,this.b)},
$S:24}
D.cYn.prototype={
$1(d){return this.a.aBw(d.b,this.b)},
$S:50}
D.cYo.prototype={
$1(d){return this.a.aBw(d.b,this.b)},
$S:19}
D.cYm.prototype={
$1(d){var w=this.a
return w.l(new D.cYl(w))},
$S:38}
D.cYl.prototype={
$0(){return this.a.d=null},
$S:0}
D.cYq.prototype={
$1(d){return A.bM(B.fO,new D.cYk(this.a),x.b)},
$S:56}
D.cYk.prototype={
$0(){var w=this.a
if(w.c!=null)w.l(new D.cYj(w))},
$S:12}
D.cYj.prototype={
$0(){return this.a.d=null},
$S:0}
D.cYs.prototype={
$1(d){var w=this.a
return w*d+w/2},
$S:153}
D.cYu.prototype={
$1(d){var w=this.b,v=this.a,u=v.a
return w-(d-u)/(v.b-u)*w},
$S:5}
D.cYt.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o=this,n=$.T(),m=A.a([],x.v),l=new A.aI(n.r,B.ak,null,null,m)
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
n.b=B.ad
n.c=2
n.d=B.bG
n.e=B.dQ
o.e.af(l,n)},
$S:2097}
D.fkH.prototype={
$1(d){return D.c5(J.t(d,"c"))},
$S:2098}
D.fzg.prototype={
$1(d){var w=null,v=C.a8T.h(0,d),u=v.a,t=v.b,s=this.a,r=s*0.78,q=A.K(B.c,B.r,1.2)
return A.q(B.z,A.c(u,w,w,w,w,w,w,A.l(w,w,B.c,w,w,w,w,w,w,w,w,s*(u.length>1?0.26:0.36),w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.f,w,w,new A.p(t,w,q,w,w,w,B.a6),w,r,w,w,w,w,w,r)},
$S:126}
D.fEJ.prototype={
$1(d){var w=x.N,v=x.z,u=A.a0(d,w,v)
v=A.dE(u,w,v)
v.n(0,"asset",u.h(0,"symbol"))
return v},
$S:22}
D.fJ3.prototype={
$1(d){return A.a0(d,x.N,x.z)},
$S:22}
D.fFP.prototype={
$1(d){return","},
$S:58}
D.fNb.prototype={
$3(d,e,f){var w=A.aXA(d,e,1,0,0,0,0,0)
while(A.lZ(w)!==7)w=w.bL(864e8)
return w.bL(A.dw(7*(f-1),0,0,0,0,0).a)},
$S:2099}
D.e9U.prototype={
$1(d){this.a.BJ()
return null},
$S:10}
D.e9m.prototype={
$0(){var w=this.a,v=this.b
w.d=A.a0(D.dF(v.h(0,"s")),x.N,x.z)
v=x.g.a(v.h(0,"log"))
if(v==null)v=B.bN
v=J.cL(v,x.f)
v=A.ct(v,new D.e9l(),v.$ti.k("M.E"),x.P)
v=A.B(v,A.a3(v).k("M.E"))
w.e=v
w.f=!1},
$S:0}
D.e9l.prototype={
$1(d){return A.a0(d,x.N,x.z)},
$S:22}
D.e9B.prototype={
$0(){var w,v,u=this.a
u.f=!1
w=this.b
v=w==null
if(!v&&J.z(J.t(w,"ok"),!0)){u.d=A.a0(w,x.N,x.z)
u.w=null}else{w=v?null:J.t(w,"error")
u.w=J.k(w==null?"Could not load this system right now.":w)}w=this.c
if(w!=null&&J.z(J.t(w,"ok"),!0)){w=x.g.a(J.t(w,"rows"))
if(w==null)w=B.bN
w=J.cL(w,x.f)
w=A.ct(w,new D.e9A(),w.$ti.k("M.E"),x.P)
w=A.B(w,A.a3(w).k("M.E"))
u.e=w}},
$S:0}
D.e9A.prototype={
$1(d){return A.a0(d,x.N,x.z)},
$S:22}
D.e9H.prototype={
$0(){var w,v,u,t=this.a
t.r=!0
w=t.d
if(w!=null){v=x.N
u=x.z
w=A.dE(w,v,u)
u=A.dE(D.dF(t.d.h(0,"state")),v,u)
v=this.b
u.n(0,"enabled",v)
if(v)u.n(0,"brakePaused",!1)
w.n(0,"state",u)
t.d=w}},
$S:0}
D.e9I.prototype={
$0(){var w=this.a,v=w.r=!1,u=this.b,t=u==null
if(!t?J.z(J.t(u,"ok"),!0):v)w.d=A.a0(u,x.N,x.z)
else{w.d=this.c
v=t?null:J.t(u,"error")
w.w=J.k(v==null?"Could not change it right now.":v)}},
$S:0}
D.e9S.prototype={
$0(){return A.Oq(this.a)},
$S:0}
D.e9T.prototype={
$0(){this.a.BJ()
return null},
$S:0}
D.e9f.prototype={
$0(){return this.a.zs(!this.b)},
$S:0}
D.e9y.prototype={
$1(d){return A.a0(d,x.N,x.z)},
$S:22}
D.e9z.prototype={
$2(d,e){var w,v=this,u=null,t=v.a.a?C.r2:C.r3
t=A.bT(3,A.q(u,u,B.f,u,u,new A.p(t,u,u,A.n(99),u,u,B.m),u,u,u,u,u,u,u,u),0,0,3)
w=B.h.D(v.b/v.c,0,1)
return new A.a5(u,14,new A.am(B.a0,u,B.ac,B.t,A.a([t,A.ao(3,A.q(u,u,B.f,u,u,new A.p(v.d,u,u,A.n(99),u,u,B.m),u,u,u,u,u,u,u,u),u,u,0,u,3,e.b*w)],x.p),u),u)},
$S:110}
D.e9j.prototype={
$1(d){var w=x.g.a(this.a.h(0,d))
if(w==null)w=B.bN
w=J.cL(w,x.f)
w=A.ct(w,new D.e9k(),w.$ti.k("M.E"),x.P)
w=A.B(w,A.a3(w).k("M.E"))
return w},
$S:2100}
D.e9k.prototype={
$1(d){return A.a0(d,x.N,x.z)},
$S:22}
D.e9g.prototype={
$1(d){return A.v(d)},
$S:15}
D.e9h.prototype={
$1(d){var w=null
return new A.C(C.bFD,A.c(d,w,w,w,w,w,w,A.l(w,w,this.a.a?C.cl:B.c,w,w,w,w,w,w,w,w,12.5,w,w,B.C,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w)},
$S:126}
D.e9i.prototype={
$3$c$icon(d,e,f){var w,v=null,u=f.A(0,B.no)?6:13,t=e==null
if(t)w=this.a.a.c==="options"?B.az:B.as
else w=e
u=A.V(f,w,v,v,v,u)
if(t)t=this.b.a?C.cl:B.c
else t=e
return new A.C(B.lb,A.A(A.a([new A.C(B.kO,u,v),I.wk,A.E(A.c(d,v,v,v,v,v,v,A.l(v,v,t,v,v,v,v,v,v,v,v,12,v,v,v,v,1.3,!0,v,v,v,v,v,v,v,v),v,v,v),1)],x.p),B.B,v,B.e,B.i,0,v,v),v)},
$1(d){return this.$3$c$icon(d,null,B.no)},
$2$icon(d,e){return this.$3$c$icon(d,null,e)},
$2$c(d,e){return this.$3$c$icon(d,e,B.no)},
$S:2101}
D.e9s.prototype={
$1(d){return A.a0(d,x.N,x.z)},
$S:22}
D.e9F.prototype={
$1(d){return J.z(J.t(d,"symbol"),this.a.as)},
$S:4}
D.e9G.prototype={
$0(){var w=this.a
return B.d.ds(w,new D.e9D(),new D.e9E(w))},
$S:147}
D.e9D.prototype={
$1(d){return J.z(J.t(d,"tag"),"TRADED NOW")},
$S:4}
D.e9E.prototype={
$0(){return B.d.gH(this.a)},
$S:147}
D.e9p.prototype={
$1(d){return J.z(D.dF(J.t(d,"analysis")).h(0,"passes"),!0)},
$S:4}
D.e9r.prototype={
$2(d,e){return B.ar},
$S:37}
D.e9q.prototype={
$2(b1,b2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=null,e="benched",d=g.b[b2],a0=J.a1(d),a1=A.v(a0.h(d,"symbol")),a2=a1===J.t(g.c,"symbol"),a3=D.c5(a0.h(d,"changePct")),a4=D.dF(a0.h(d,"record")),a5=D.dF(a0.h(d,"analysis")),a6=a0.h(d,"tag"),a7=A.v(a6==null?"":a6),a8=D.dF(a0.h(d,"today")),a9=B.h.M(D.c5(a8.h(0,"wins"))),b0=B.h.M(D.c5(a8.h(0,"losses")))
if(a7==="TRADED NOW")w=C.f9X
else if(a0.h(d,e)!=null)w=C.fcM
else{if(J.z(a5.h(0,"passes"),!0))a6=C.fcv
else if(J.z(a5.h(0,"falling"),!0))a6=C.fcE
else{a6=g.d.a?C.bT:C.bV
a6=new A.y(a6,a7==="closed"?"CLOSED":"WATCHING")}w=a6}v=w.a
u=f
t=w.b
u=t
s=v
a6=g.a
r=g.d
q=r.a
p=q?B.c.j(0.92):C.ib
o=A.n(16)
if(a2)n=a6.a.c==="options"?B.az:B.as
else n=q?B.c:C.nf
n=A.K(n,B.r,a2?2:1)
if(a2)r=(a6.a.c==="options"?B.az:B.as).j(0.18)
else r=r.gIq()
r=A.a([new A.ac(0,B.H,r,B.cN,a2?12:8)],x.V)
m=D.bEF(a1,16)
l=x.p
m=A.A(A.a([m,B.dY,A.E(A.c(a1,f,1,B.a2,f,f,f,A.l(f,f,q?C.cl:B.c,f,f,f,f,f,f,f,f,11.5,f,f,B.C,f,f,!0,f,f,f,f,f,f,f,f),f,f,f),1),A.c(u,f,f,f,f,f,f,A.l(f,f,s,f,f,f,f,f,f,f,f,8.5,f,f,B.u,f,f,!0,f,f,f,f,f,f,f,f),f,f,f)],l),B.l,f,B.e,B.i,0,f,f)
k=D.eg(D.c5(a0.h(d,"price")),!0,!1)
k=A.E(new A.d7(B.dn,B.a5,B.f,A.c(k,f,f,f,f,f,f,A.l(f,f,q?C.cl:B.c,f,f,f,f,f,f,f,f,14.5,f,f,B.C,f,f,!0,f,f,f,f,f,f,f,f),f,f,f),f),1)
j=a3>=0
i=j?"+":""
h=B.h.a1(a3,2)
k=A.A(A.a([k,B.da,A.c(i+h+"%",f,f,f,f,f,f,A.l(f,f,j?C.cH:C.d6,f,f,f,f,f,f,f,f,10.5,f,f,B.C,f,f,!0,f,f,f,f,f,f,f,f),f,f,f)],l),B.dr,f,B.e,B.i,0,f,f)
j=D.c5(a4.h(0,"n"))===0?"":" \xb7 last "+B.h.M(D.c5(a4.h(0,"n")))+": "+B.h.M(D.c5(a4.h(0,"wins")))+"W/"+B.h.M(D.c5(a4.h(0,"losses")))+"L"
if(a9+b0>0)i=q?C.cl:B.c
else i=q?C.bT:C.bV
i=A.c("today "+a9+"W/"+b0+"L"+j,f,1,B.a2,f,f,f,A.l(f,f,i,f,f,f,f,f,f,f,f,9.5,f,f,B.O,f,f,!0,f,f,f,f,f,f,f,f),f,f,f)
if(a0.h(d,e)!=null)j="benched for today"
else if(D.c5(a4.h(0,"n"))===0)j="no trades here yet"
else{j=D.eg(D.c5(a4.h(0,"pnl")),!0,!0)
j+=a4.h(0,"topLoss")!=null?" \xb7 most losses: "+D.hIg(A.v(a4.h(0,"topLoss"))):""}if(a0.h(d,e)!=null)a0=C.d6
else a0=q?C.bT:C.bV
return A.aA(f,A.cY(f,A.w(A.a([m,k,i,A.c(j,f,1,B.a2,f,f,f,A.l(f,f,a0,f,f,f,f,f,f,f,f,9.5,f,f,B.O,f,f,!0,f,f,f,f,f,f,f,f),f,f,f)],l),B.B,f,B.iB,B.i,0,B.p),f,f,B.b_,new A.p(p,f,n,o,r,f,B.m),B.eK,f,f,f,f,B.iQ,f,f,152),B.y,!1,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,new D.e9o(a6,a1),f,f,f,f,f,f,!1,B.a4)},
$S:79}
D.e9o.prototype={
$0(){var w=this.a
return w.l(new D.e9n(w,this.b))},
$S:0}
D.e9n.prototype={
$0(){return this.a.as=this.b},
$S:0}
D.e9d.prototype={
$1(d){return A.a0(d,x.N,x.z)},
$S:22}
D.e9e.prototype={
$1(d){return A.a0(d,x.N,x.z)},
$S:22}
D.e9J.prototype={
$3$c(d,e,f){var w=null,v=this.a.a,u=v?C.r2:C.r3,t=A.n(12),s=A.c(d,w,1,B.a2,w,w,w,A.l(w,w,v?C.bT:C.bV,w,w,w,w,w,w,w,w,10.5,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)
if(f==null)v=v?C.cl:B.c
else v=f
return A.E(A.q(w,A.w(A.a([s,B.bs,new A.d7(B.dn,B.a5,B.f,A.c(e,w,w,w,w,w,w,A.l(w,w,v,w,w,w,w,w,w,w,w,13.5,w,w,B.C,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w)],x.p),B.B,w,B.e,B.i,0,B.p),B.f,w,w,new A.p(u,w,w,t,w,w,B.m),w,w,w,w,B.iQ,w,w,w),1)},
$2(d,e){return this.$3$c(d,e,null)},
$S:2102}
D.e9v.prototype={
$1(d){return A.a0(d,x.N,x.z)},
$S:22}
D.e9w.prototype={
$1(d){var w,v,u,t,s,r=null,q=this.a,p=this.b,o=x.S,n=A.U(p),m=q.Q?A.cJ(p,0,A.dx(18,"count",o),n.c).de(0):A.cJ(p,0,A.dx(4,"count",o),n.c).de(0),l=new D.e9x(this.c)
o=x.p
n=A.a([],o)
for(w=x.N,v=x.z,u=0;u<m.length;u+=2){t=A.a0(m[u],w,v)
t=l.$1(t)
s=u+1
if(s<m.length){s=A.a0(m[s],w,v)
s=l.$1(s)}else s=B.wl
n.push(new A.C(B.eC,new A.c1(B.aK,B.e,B.i,B.l,r,B.p,r,0,A.a([new A.bu(1,B.b8,t,r),B.b7,new A.bu(1,B.b8,s,r)],o),r),r))}p=p.length
if(p>4)n.push(new A.bK(B.a5,r,r,A.bL(!1,A.c(q.Q?"Show less":"See more ("+A.v(Math.min(p,18)-4)+")",r,r,r,r,r,r,r,r,r,r),r,r,!0,r,r,r,new D.e9u(q),r,r),r))
return A.w(n,B.B,r,B.e,B.i,0,B.p)},
$S:261}
D.e9x.prototype={
$1(d){var w,v,u,t,s,r,q="cost",p=null,o="strike",n="spreadPct"
if(d.h(0,q)!=null&&D.c5(d.h(0,q))<=150)w=C.cH
else w=this.a.a?C.bT:C.bV
w=w.j(0.12)
v=A.n(8)
u=D.c5(d.h(0,o))
u=B.h.a1(u,typeof d.h(0,o)=="number"&&B.h.F(D.c5(d.h(0,o)),1)!==0?2:0)
t=D.aRy(d.h(0,"expiry"))
s=A.ag(", \\d{4}$",!0,!1,!1,!1)
t=A.aH(t,s,"")
s=this.a.a
u=A.c("$"+u+" \xb7 "+t,p,1,B.a2,p,p,p,A.l(p,p,s?C.cl:B.c,p,p,p,p,p,p,p,p,11,p,p,B.C,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)
t=d.h(0,q)==null?"no price":D.eg(D.c5(d.h(0,q)),!0,!1)
r=d.h(0,n)==null||D.c5(d.h(0,n))>=100?"":" \xb7 spread "+B.h.a1(D.c5(d.h(0,n)),0)+"%"
return A.q(p,A.w(A.a([u,A.c(t+r,p,1,B.a2,p,p,p,A.l(p,p,s?C.bT:C.bV,p,p,p,p,p,p,p,p,10.5,p,p,B.O,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)],x.p),B.B,p,B.e,B.i,0,B.p),B.f,p,p,new A.p(w,p,p,v,p,p,B.m),p,p,p,p,B.lF,p,p,p)},
$S:2103}
D.e9u.prototype={
$0(){var w=this.a
return w.l(new D.e9t(w))},
$S:0}
D.e9t.prototype={
$0(){var w=this.a
return w.Q=!w.Q},
$S:0}
D.e9Q.prototype={
$1(d){return A.a0(d,x.N,x.z)},
$S:22}
D.e9R.prototype={
$0(){var w=this.a
return w.l(new D.e9P(w))},
$S:0}
D.e9P.prototype={
$0(){var w=this.a
return w.y=!w.y},
$S:0}
D.e9O.prototype={
$0(){var w,v=this
if(v.d)w=v.e
else{w=v.f
w=A.J(["why",(w.length!==0?w+".\n\n":v.r+". ")+"Bought because: "+v.w],x.N,x.z)}return v.a.cFc(v.b,v.c,w)},
$S:0}
D.e9L.prototype={
$1(d){return A.a0(d,x.N,x.z)},
$S:22}
D.e9N.prototype={
$1(d){var w
if(d==null)w="?"
else{w=D.c5(d)>=0?"+":""
w=w+B.h.a1(D.c5(d),2)+"%"}return w},
$S:15}
D.e9M.prototype={
$1(a1){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i="strength",h="thresholdPct",g=k.a.a,f=g?B.c.j(0.92):C.ib,e=A.c("Why this trade: "+k.b,j,j,j,j,j,j,A.l(j,j,g?C.cl:B.c,j,j,j,j,j,j,j,j,16,j,j,B.C,j,j,!0,j,j,j,j,j,j,j,j),j,j,j),d=k.c,a0=d.h(0,"why")
a0=A.v(a0==null?"":a0)
a0=A.c(a0,j,j,j,j,j,j,A.l(j,j,g?C.cl:B.c,j,j,j,j,j,j,j,j,13,j,j,j,j,1.35,!0,j,j,j,j,j,j,j,j),j,j,j)
w=d.h(0,"market")
w=A.v(w==null?"?":w)
v=D.eg(D.c5(d.h(0,"price")),!0,!1)
u=d.h(0,"trend")
u=A.v(u==null?"?":u)
t=k.d
s=A.v(t.$1(d.h(0,i)))
r=d.h(0,"score")
r=A.v(r==null?"?":r)
d=d.h(0,h)!=null?" \xb7 needed +"+B.h.a1(D.c5(d.h(0,h)),2)+"%":""
q=x.p
d=A.a([a0,B.S,A.c("Market "+w+" at "+v+" \xb7 trend "+u+" \xb7 15 min "+s+" \xb7 score "+r+d,j,j,j,j,j,j,A.l(j,j,g?C.bT:C.bV,j,j,j,j,j,j,j,j,12,j,j,j,j,1.35,!0,j,j,j,j,j,j,j,j),j,j,j)],q)
a0=k.e
if(a0.a!==0&&D.c5(a0.h(0,"n"))>0){w=B.h.M(D.c5(a0.h(0,"n")))
v=B.h.M(D.c5(a0.h(0,"wins")))
u=B.h.M(D.c5(a0.h(0,"losses")))
a0=D.eg(D.c5(a0.h(0,"pnl")),!0,!0)
d.push(A.c("Its record here before: last "+w+": "+v+"W / "+u+"L \xb7 "+a0,j,j,j,j,j,j,A.l(j,j,g?C.bT:C.bV,j,j,j,j,j,j,j,j,12,j,j,j,j,1.35,!0,j,j,j,j,j,j,j,j),j,j,j))}a0=k.f
if(a0.length!==0){w=A.a([B.S,A.c("How the markets ranked:",j,j,j,j,j,j,A.l(j,j,g?C.cl:B.c,j,j,j,j,j,j,j,j,12.5,j,j,B.C,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)],q)
for(a0=A.aoM(a0,0,x.P),v=J.aO(a0.a),a0=a0.b,u=new A.Ff(v,a0);u.B();){s=u.c
s=s>=0?new A.y(a0+s,v.gP(v)):A.bi(A.fc())
p=s.b
r=J.a1(p)
o=A.v(r.h(p,"s"))
n=A.v(r.h(p,"score"))
m=A.v(t.$1(r.h(p,i)))
if(J.z(r.h(p,"passes"),!0))r="passes"
else{l=r.h(p,"why")
if(l==null){l=r.h(p,"trend")
r=l==null?r.h(p,"dir"):l
r="trend "+A.v(r==null?"?":r)}else r=l}r=A.v(r)
l=g?C.bT:C.bV
w.push(A.c(""+(s.a+1)+". "+o+" \xb7 score "+n+" \xb7 "+m+" \xb7 "+r,j,j,j,j,j,j,new A.G(!0,l,j,j,j,j,12,j,j,j,j,j,1.4,j,j,j,j,j,j,j,j,j,j,j,j,j),j,j,j))}B.d.u(d,w)}g=A.cc(A.w(d,B.B,j,B.e,B.P,0,B.p),B.t,j,B.y,j,j,j,j,j,B.ah)
return A.ek(A.a([A.bL(!1,B.px,j,j,!0,j,j,j,new D.e9K(a1),j,j)],q),j,j,f,g,j,j,j,j,e,j)},
$S:17}
D.e9K.prototype={
$0(){return A.a8(this.a,!1).e6()},
$S:0}
D.e9c.prototype={
$0(){var w=this.a
return w.l(new D.e9b(w))},
$S:0}
D.e9b.prototype={
$0(){var w=this.a
return w.z=!w.z},
$S:0}
D.e9C.prototype={
$1(d){return A.v(d)},
$S:15}
D.dbi.prototype={
$1(d){var w=this.a
if(w.c!=null)w.l(new D.dbh())},
$S:10}
D.dbh.prototype={
$0(){},
$S:0}
D.fJZ.prototype={
$1(d){return J.k(d)},
$S:15}
D.fK_.prototype={
$2(d,e){var w=null,v=e.b,u=A.ao(w,A.q(w,w,B.f,w,w,new A.p(w,w,w,A.n(9),w,C.cbF,B.m),w,6,w,w,w,w,w,w),w,w,0,0,4,w),t=B.h.D(this.a/100*v-7,0,v-14)
return new A.a5(w,14,new A.am(B.a0,w,B.ac,B.f,A.a([u,A.ao(w,A.q(w,w,B.f,w,w,new A.p(B.c,w,A.K(this.b.a?C.cl:B.c,B.r,2.5),w,w,w,B.a6),w,14,w,w,w,w,w,14),w,w,t,w,0,w)],x.p),w),w)},
$S:110}
D.fNI.prototype={
$1(d){return A.a0(d,x.N,x.z)},
$S:22}
D.fix.prototype={
$1(d){var w=this.a
if(w.c!=null)w.l(new D.fiw())},
$S:10}
D.fiw.prototype={
$0(){},
$S:0}
D.fiv.prototype={
$2(d,e){var w=null,v=B.c.j(0.16),u=A.n(10)
return A.E(A.q(w,A.w(A.a([A.c(d,w,w,w,w,w,w,C.fXu,w,w,w),new A.d7(B.dn,B.a5,B.f,A.c(e,w,w,w,w,w,w,C.fKI,w,w,w),w)],x.p),B.B,w,B.e,B.i,0,B.p),B.f,w,w,new A.p(v,w,w,u,w,w,B.m),w,w,w,w,B.I2,w,w,w),1)},
$S:113}
D.djN.prototype={
$1(d){var w=this.a
if(w.c!=null)w.l(new D.djM())},
$S:10}
D.djM.prototype={
$0(){},
$S:0}
D.fA5.prototype={
$1(d){return J.k(d)},
$S:15}
D.eKt.prototype={
$1(d){return J.k(d)},
$S:15}
D.eLh.prototype={
$0(){return this.a.l(new D.eLg())},
$S:0}
D.eLg.prototype={
$0(){},
$S:0}
D.eLi.prototype={
$0(){return $.hoX=this.a.at.a.a},
$S:0}
D.eLj.prototype={
$1(d){var w=this.a
if(w.c!=null)w.l(new D.eLf(w,d))},
$S:202}
D.eLf.prototype={
$0(){return this.a.Q=this.b},
$S:0}
D.eLk.prototype={
$1(d){this.a.RK()
return null},
$S:10}
D.eLc.prototype={
$1(d){var w=x.N,v=x.z
v=A.dE(A.a0(d,w,v),w,v)
v.n(0,"asset",J.t(d,"symbol"))
return v},
$S:22}
D.eKO.prototype={
$0(){var w,v,u=this,t=u.c
if(J.z(t==null?null:J.t(t,"isAdmin"),!0))u.b.y=!0
w=u.d
if(w==null)w=u.a.a
if(w!=null){t=x.g.a(w.h(0,"done"))
if(t==null)t=A.a([],x.s)
v=x.Y.a(w.h(0,"lessons"))
u.b.x=A.J(["done",t,"lessons",v==null?A.S(x.N,x.z):v],x.N,x.z)}},
$S:0}
D.eKX.prototype={
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
return A.b(A.fJ(A.J(["action","paLearnSave","progress",o.x],x.N,x.z),!1,!1,!1,!1,B.hc),$async$$0)
case 9:n=e
if(J.z(n==null?null:J.t(n,"allDone"),!0)){$.co2=new A.W(A.fQ(0,0),0,!1)
A.K5()}case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$$0,v)},
$S:1}
D.eKw.prototype={
$1(d){return this.a.gKt().q(0,d.a)},
$S:z+0}
D.eKx.prototype={
$0(){var w,v=this.a,u=x.N,t=A.d8(v.gKt(),u)
t.K(0,this.b)
w=A.B(t,A.a3(t).k("ck.E"))
u=A.dE(v.x,u,x.z)
u.n(0,"done",w)
v.x=u},
$S:0}
D.eKy.prototype={
$1(d){return this.a.gKt().q(0,d.a)},
$S:z+0}
D.eKz.prototype={
$1(d){var w=null
return A.ek(A.a([A.bH(C.hgK,w,new D.eKv(this.a,d),w)],x.p),w,w,w,C.hdF,w,w,w,w,C.h0P,w)},
$S:17}
D.eKv.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:A.a8(u.b,!1).N(null)
w=2
return A.b(A.Mz(),$async$$0)
case 2:t=e
s=u.a
if(s.c!=null)s.l(new D.eKu(s,t))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
D.eKu.prototype={
$0(){return this.a.Q=this.b},
$S:0}
D.eKW.prototype={
$0(){var w,v,u,t=this,s=t.b
if(s.length!==0)t.a.ay=s
s=t.c
if(s.length!==0)t.a.f=s
s=t.a
w=t.d
v=J.a1(w)
s.z=J.z(v.h(w,"alertsAllowed"),!0)
if(J.z(v.h(w,"isAdmin"),!0))s.y=!0
u=x.g.a(v.h(w,"rules"))
if(u==null)u=B.bN
u=J.b8(u,new D.eKV(),x.N)
u=A.B(u,u.$ti.k("aj.E"))
s.dx=u
u=v.h(w,"nowEt")
s.dy=J.k(u==null?"":u)
s.fr=J.z(v.h(w,"stockOpen"),!0)
s.r=new A.W(Date.now(),0,!1)
if(x.f.b(v.h(w,"signals")))s.db=D.dF(v.h(w,"signals"))},
$S:0}
D.eKV.prototype={
$1(d){return J.k(d)},
$S:15}
D.eL9.prototype={
$1(d){return J.z(J.t(d,"open"),!0)&&D.bG2(d).length>5},
$S:4}
D.eLa.prototype={
$2(d,e){return B.h.aQ(D.eK5(d),D.eK5(e))},
$S:39}
D.eKC.prototype={
$1(d){return J.z(J.t(d,"asset"),this.a.h(0,"symbol"))},
$S:4}
D.eKD.prototype={
$0(){return A.S(x.N,x.z)},
$S:147}
D.eKE.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m="typicalMin",l="enterWithinMin",k=J.a1(d),j=D.dF(k.h(d,"reading")),i=D.dF(j.h(0,"timing"))
if(i.h(0,m)==null)w=""
else{v=A.v(i.h(0,"dir"))
u=A.v(i.h(0,"ageMin"))
t=A.v(i.h(0,m))
s=A.v(i.h(0,"remainingMin"))
r=A.v(i.h(0,"dir"))
q=A.v(i.h(0,"worked"))
p=A.v(i.h(0,"of"))
o=D.c5(i.h(0,l))>0?"still early (enter within "+A.v(i.h(0,l))+" min)":"too late to enter"
w=", current "+v+" move "+u+" min old, such moves usually last "+t+" min (about "+s+" min left), past "+r+" moves really went that way "+q+" of "+p+" times, "+o}v=A.v(k.h(d,"asset"))
u=A.v(k.h(d,"name"))
t=D.hNl(d)
s=B.h.a1(D.c5(k.h(d,"changePct")),2)
k=J.z(k.h(d,"open"),!0)?"open":"closed"
r=j.h(0,"bias")
r=A.v(r==null?"unknown":r)
q=B.h.a1(D.c5(j.h(0,"score")),0)
p=j.h(0,"rsi")==null?"n/a":B.h.a1(D.c5(j.h(0,"rsi")),0)
o=j.h(0,"mom1h")==null?"n/a":B.h.a1(D.c5(j.h(0,"mom1h")),2)+"%"
n=j.h(0,"action")
return"- "+v+" ("+u+"): price "+t+", change "+s+"%, "+k+", "+r+", strength "+q+", RSI "+p+", last hour "+o+", reading: "+A.v(n==null?"n/a":n)+w+"."},
$S:54}
D.eKp.prototype={
$0(){$.DJ.push(new D.a01(!0,this.b))
$.ahJ=!0},
$S:0}
D.eKq.prototype={
$1(d){return(d.a?"Student":"Tutor")+": "+d.b},
$S:z+6}
D.eKr.prototype={
$1(d){return"- "+A.v(d)},
$S:15}
D.eKs.prototype={
$0(){},
$S:0}
D.eKY.prototype={
$1(d){var w=this.a.ax,v=w.f
if(v.length!==0){v=B.d.gd4(v).Q
v.toString
w.me(v+200,B.ed,B.eZ)}},
$S:7}
D.eLd.prototype={
$0(){return A.Oq(this.a)},
$S:0}
D.eLe.prototype={
$0(){return this.b.gLK().Cp(this.a.a)},
$S:0}
D.eKB.prototype={
$1(d){return this.a.gKt().q(0,d.a)},
$S:z+0}
D.eKA.prototype={
$0(){return this.a.cni(this.b)},
$S:0}
D.eKU.prototype={
$1(d){var w=this.b,v=B.d.ca(C.Er,w),u=this.a,t=u.y,s=w.a,r=u.gKt().q(0,s)
s=x.Y.a(D.dF(u.x.h(0,"lessons")).h(0,s))
if(s==null)s=B.lL
return new D.a13(w,v+1,new D.eKQ(u,w),t,r,A.a0(s,x.N,x.z),new D.eKR(u,w),new D.eKS(u,w),new D.eKT(u),null)},
$S:z+7}
D.eKQ.prototype={
$0(){var w=this.a,v=w.c
v.toString
return w.c8g(new D.RK(A.Q(v).ax.a===B.dg),this.b.r)},
$S:130}
D.eKR.prototype={
$1(d){var w=this.a
w.l(new D.eKP(w,this.b,d))
w.aDK()},
$S:118}
D.eKP.prototype={
$0(){var w=this.a,v=x.N,u=x.z,t=A.a0(D.dF(w.x.h(0,"lessons")),v,u)
t.n(0,this.b.a,this.c)
u=A.dE(w.x,v,u)
u.n(0,"lessons",t)
w.x=u},
$S:0}
D.eKS.prototype={
$0(){return this.a.aeZ(this.b.a)},
$S:0}
D.eKT.prototype={
$1(d){var w=this.a,v=w.c
v.toString
A.a8(v,!1).e6()
w.aS0(d)},
$S:2}
D.eKF.prototype={
$2$last$lines(d,e){var w=this.a
return new D.a_W(B.d.fE(w,Math.max(0,w.length-d)),this.b,null,e,this.c,C.dv8,null)},
$0(){return this.$2$last$lines(36,!0)},
$1$lines(d){return this.$2$last$lines(36,d)},
$S:2104}
D.eKN.prototype={
$1(d){var w=null
return A.c(d,w,w,w,w,w,w,A.l(w,w,this.a.a?C.cl:B.c,w,w,w,w,w,w,w,w,13,w,w,w,w,1.4,!0,w,w,w,w,w,w,w,w),w,w,w)},
$S:2105}
D.eKG.prototype={
$1(d){var w=J.a1(d)
return J.z(D.dF(w.h(d,"reading")).h(0,"decision"),"ENTER")&&J.z(D.dF(w.h(d,"reading")).h(0,"dir"),"up")},
$S:4}
D.eKH.prototype={
$1(d){return J.t(d,"asset")},
$S:791}
D.eKI.prototype={
$1(d){var w=J.a1(d)
return J.z(D.dF(w.h(d,"reading")).h(0,"decision"),"ENTER")&&J.z(D.dF(w.h(d,"reading")).h(0,"dir"),"down")},
$S:4}
D.eKJ.prototype={
$1(d){return J.t(d,"asset")},
$S:791}
D.eKK.prototype={
$1(d){var w=J.a1(d)
return J.z(w.h(d,"open"),!0)&&D.dF(w.h(d,"reading")).h(0,"rsi")!=null},
$S:4}
D.eKL.prototype={
$1(d){return J.z(J.t(d,"open"),!0)},
$S:4}
D.eKM.prototype={
$1(d){var w=D.dF(D.dF(J.t(d,"reading")).h(0,"timing"))
return D.c5(w.h(0,"of"))>=3&&D.c5(w.h(0,"worked"))/D.c5(w.h(0,"of"))>=0.5},
$S:4}
D.eL2.prototype={
$1(d){var w,v,u,t=this.a
if(t.cx!=="All"&&D.hIh(d)!==t.cx)return!1
t=this.b
if(t.length===0)return!0
w=J.a1(d)
v=A.v(w.h(d,"asset"))
u=A.v(w.h(d,"name"))
w=w.h(d,"asset")
w=J.k(w==null?"":w)
return B.a.q((v+" "+u+" "+A.aH(w,"/","")).toLowerCase(),t)},
$S:4}
D.eL3.prototype={
$2(d,e){var w="activeSignal",v=J.a1(d),u=x.f,t=u.b(v.h(d,w))?0:1,s=J.a1(e),r=u.b(s.h(e,w))?0:1
if(t!==r)return t-r
return B.h.aQ(D.c5(D.dF(s.h(e,"v2")).h(0,"passed")),D.c5(D.dF(v.h(d,"v2")).h(0,"passed")))},
$S:39}
D.eL5.prototype={
$0(){var w=this.a
return w.l(new D.eL1(w,this.b))},
$S:0}
D.eL1.prototype={
$0(){return this.a.cx=this.b},
$S:0}
D.eL4.prototype={
$1(d){return D.hIh(d)===this.a},
$S:4}
D.eL6.prototype={
$0(){var w=this.a
w.l(new D.eL0(w))},
$S:0}
D.eL0.prototype={
$0(){var w=this.a,v=w.CW
w.CW=!v
if(v){w.ch=""
w.cy.bM(0,B.ck)}},
$S:0}
D.eL7.prototype={
$1(d){var w=this.a
return w.l(new D.eL_(w,d))},
$S:2}
D.eL_.prototype={
$0(){return this.a.ch=this.b},
$S:0}
D.eL8.prototype={
$0(){return this.a.aS0("What is happening with "+A.v(J.t(this.b,"asset"))+" right now? Which of the 5 confirmations are missing, and why is the answer BUY, SELL or WAIT?")},
$S:0}
D.eKZ.prototype={
$1(d){return A.a0(d,x.N,x.z)},
$S:22}
D.eKl.prototype={
$1(d){return this.a.gKt().q(0,d.a)},
$S:z+0}
D.eKm.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=!u.b?2:4
break
case 2:u.a.gLK().Cp(0)
w=3
break
case 4:w=5
return A.b(A.Mz(),$async$$0)
case 5:t=e
s=u.a
if(s.c!=null)s.l(new D.eKk(s,t))
$.co2=new A.W(A.fQ(0,0),0,!1)
A.K5()
case 3:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
D.eKk.prototype={
$0(){return this.a.Q=this.b},
$S:0}
D.eKn.prototype={
$0(){return this.a.Ks(this.b)},
$S:0}
D.eKo.prototype={
$0(){var w=this.a
return w.Ks(w.at.a.a)},
$S:0}
D.dwo.prototype={
$1(d){var w
x.g.a(d)
w=d==null?B.bN:d
w=J.b8(w,new D.dwp(),x.S)
w=A.B(w,w.$ti.k("aj.E"))
return w},
$S:432}
D.dwp.prototype={
$1(d){var w=A.ca(A.v(d),null)
return w==null?0:w},
$S:330}
D.dwm.prototype={
$1(d){var w,v
x.Y.a(d)
w=d==null?B.lL:d
v=x.S
return J.oY(w,new D.dwn(),v,v)},
$S:2107}
D.dwn.prototype={
$2(d,e){var w,v=A.ca(A.v(d),null)
if(v==null)v=0
w=A.ca(A.v(e),null)
if(w==null)w=0
return new A.bw(v,w,x.a)},
$S:2108}
D.dwk.prototype={
$1(d){var w
if(d>=0){w=this.a.d
w===$&&A.d()
w=d<w.length}else w=!1
return w},
$S:26}
D.dwl.prototype={
$1(d){var w,v=this.a
if(v.c==null)return
w=v.w
w===$&&A.d()
if(w.a!==0)v.l(new D.dwj(v))},
$S:10}
D.dwj.prototype={
$0(){return this.a.cHZ()},
$S:0}
D.dwc.prototype={
$2(d,e){return new A.bw(""+d,e,x.W)},
$S:792}
D.dwd.prototype={
$2(d,e){return new A.bw(""+d,e,x.W)},
$S:792}
D.dwe.prototype={
$1(d){var w=this.a,v=w.x
v===$&&A.d()
if(!B.d.q(v,d)){w=w.e
w===$&&A.d()
w=!B.d.q(w,d)}else w=!1
return w},
$S:26}
D.dwf.prototype={
$1(d){var w=this.a,v=w.e
v===$&&A.d()
if(!B.d.q(v,d)){w=w.f
w===$&&A.d()
w=!w.q(0,d)}else w=!1
return w},
$S:26}
D.dwa.prototype={
$0(){var w,v,u,t=this.b,s=this.a,r=s.d
r===$&&A.d()
w=this.c
v=s.y
if(t===r[w].c){t=s.f
t===$&&A.d()
t.K(0,w)
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
D.dwg.prototype={
$0(){return A.Oq(this.a)},
$S:0}
D.dwh.prototype={
$0(){return this.a.a.d19('I just read the lesson "'+this.b.b+'". Can you explain it again with a live example from the markets right now?')},
$S:0}
D.dwi.prototype={
$0(){this.a.a.rB()
A.Oq(this.b)},
$S:0}
D.dwb.prototype={
$0(){return this.a.chN(this.b,this.c)},
$S:0};(function aliases(){var w=D.aQ6.prototype
w.bCM=w.t})();(function installTearOffs(){var w=a._instance_0u,v=a._instance_1u
var u
w(u=D.aI3.prototype,"gcng","cnh",2)
w(u,"gcAS","a42",1)
w(D.aGZ.prototype,"gchQ","BJ",1)
w(u=D.aI4.prototype,"gchP","RK",1)
v(u,"gchO","Ks",5)})();(function inheritance(){var w=a.mixinHard,v=a.inheritMany,u=a.inherit
v(A.af,[D.auv,D.a_W,D.P_,D.aBQ,D.aLb,D.aD9,D.Y3,D.a13])
v(A.ai,[D.aI3,D.bff,D.aGZ,D.bfX,D.bwD,D.biP,D.aQ6,D.bm_])
v(A.hq,[D.eKi,D.eKj,D.eJQ,D.eJy,D.eK0,D.eJI,D.eJX,D.eJm,D.eJn,D.eJo,D.eJk,D.eJq,D.eK8,D.eK9,D.eKa,D.eKb,D.eK4,D.eK6,D.eJD,D.eJF,D.eJw,D.eJi,D.eJK,D.eJL,D.eJM,D.eJJ,D.eJO,D.eKf,D.fNh,D.cYp,D.cYn,D.cYo,D.cYm,D.cYq,D.cYs,D.cYu,D.fkH,D.fzg,D.fEJ,D.fJ3,D.fFP,D.fNb,D.e9U,D.e9l,D.e9A,D.e9y,D.e9j,D.e9k,D.e9g,D.e9h,D.e9i,D.e9s,D.e9F,D.e9D,D.e9p,D.e9d,D.e9e,D.e9J,D.e9v,D.e9w,D.e9x,D.e9Q,D.e9L,D.e9N,D.e9M,D.e9C,D.dbi,D.fJZ,D.fNI,D.fix,D.djN,D.fA5,D.eKt,D.eLj,D.eLk,D.eLc,D.eKw,D.eKy,D.eKz,D.eKV,D.eL9,D.eKC,D.eKE,D.eKq,D.eKr,D.eKY,D.eKB,D.eKU,D.eKR,D.eKT,D.eKF,D.eKN,D.eKG,D.eKH,D.eKI,D.eKJ,D.eKK,D.eKL,D.eKM,D.eL2,D.eL4,D.eL7,D.eKZ,D.eKl,D.dwo,D.dwp,D.dwm,D.dwk,D.dwl,D.dwe,D.dwf])
v(A.iY,[D.eJz,D.eJB,D.eJP,D.eJS,D.eJT,D.eJA,D.eJZ,D.eK_,D.eK1,D.eK2,D.eJV,D.eJW,D.eKh,D.eKc,D.eKd,D.eJp,D.eJl,D.eJr,D.eK3,D.eK7,D.eJE,D.eJC,D.eJu,D.eJt,D.eJv,D.eJs,D.eJj,D.eJx,D.eKg,D.eKe,D.eJg,D.eJf,D.cYi,D.cYl,D.cYk,D.cYj,D.e9m,D.e9B,D.e9H,D.e9I,D.e9S,D.e9T,D.e9f,D.e9G,D.e9E,D.e9o,D.e9n,D.e9u,D.e9t,D.e9R,D.e9P,D.e9O,D.e9K,D.e9c,D.e9b,D.dbh,D.fiw,D.djM,D.eLh,D.eLg,D.eLi,D.eLf,D.eKO,D.eKX,D.eKx,D.eKv,D.eKu,D.eKW,D.eKD,D.eKp,D.eKs,D.eLd,D.eLe,D.eKA,D.eKQ,D.eKP,D.eKS,D.eL5,D.eL1,D.eL6,D.eL0,D.eL_,D.eL8,D.eKm,D.eKk,D.eKn,D.eKo,D.dwj,D.dwa,D.dwg,D.dwh,D.dwi,D.dwb])
v(A.iZ,[D.eJU,D.eJY,D.eJH,D.eJG,D.eJN,D.eJR,D.eJh,D.cYr,D.cYt,D.e9z,D.e9r,D.e9q,D.fK_,D.fiv,D.eLa,D.eL3,D.dwn,D.dwc,D.dwd])
v(A.aF,[D.Re,D.z9,D.RK,D.cI,D.uD,D.a01])
v(A.lO,[D.bfg,D.bxh])
u(D.aI4,D.aQ6)
w(D.aQ6,A.cl)})()
A.jg(b.typeUniverse,JSON.parse('{"auv":{"af":[],"x":[]},"a_W":{"af":[],"x":[]},"aBQ":{"af":[],"x":[]},"aLb":{"af":[],"x":[]},"aD9":{"af":[],"x":[]},"Y3":{"af":[],"x":[]},"a13":{"af":[],"x":[]},"aI3":{"ai":["auv"]},"bff":{"ai":["a_W"]},"bfg":{"aC":[]},"bxh":{"aC":[]},"P_":{"af":[],"x":[]},"aGZ":{"ai":["P_"]},"bfX":{"ai":["aBQ"]},"bwD":{"ai":["aLb"]},"biP":{"ai":["aD9"]},"aI4":{"ai":["Y3"]},"bm_":{"ai":["a13"]}}'))
var y={g:". Look over the trades, then press Start to turn it back on.",b:"The chart appears after the first reading."}
var x=(function rtii(){var w=A.as
return{c:w("lc<u?>"),D:w("EN"),V:w("N<ac>"),O:w("N<u>"),o:w("N<az<a9<o,@>?>>"),R:w("N<mL>"),t:w("N<a9<o,@>>"),v:w("N<h_>"),L:w("N<+(o,o)>"),T:w("N<+(F,Re)>"),s:w("N<o>"),p:w("N<x>"),n:w("N<Re>"),r:w("N<cI>"),u:w("N<H>"),X:w("N<F>"),w:w("N<W?>"),W:w("bw<o,F>"),a:w("bw<F,F>"),P:w("a9<o,@>"),f:w("a9<@,@>"),b:w("cr"),K:w("aF"),N:w("o"),E:w("X<uD>"),q:w("l4"),y:w("P"),z:w("@"),S:w("F"),i:w("ah<a9<o,@>>?"),g:w("ah<@>?"),h:w("a9<o,@>?"),Y:w("a9<@,@>?"),H:w("~")}})();(function constants(){var w=a.makeConstList
C.cH=new A.u(1,0.12156862745098039,0.7490196078431373,0.592156862745098,B.q)
C.b6i=new A.lc(C.cH,x.c)
C.ib=new A.u(1,0.08627450980392157,0.10588235294117647,0.1803921568627451,B.q)
C.bT=new A.u(1,0.5411764705882353,0.5607843137254902,0.6392156862745098,B.q)
C.ta=new A.u(1,0.0392156862745098,0.050980392156862744,0.09411764705882353,B.q)
C.tc=new A.u(1,0.9294117647058824,0.9372549019607843,0.9803921568627451,B.q)
C.bV=new A.u(1,0.5529411764705883,0.5843137254901961,0.6705882352941176,B.q)
C.n7=new A.u(1,0.08627450980392157,0.09019607843137255,0.11372549019607843,B.q)
C.oL=new A.u(1,0.14901960784313725,0.17647058823529413,0.27058823529411763,B.q)
C.oQ=new A.u(1,0.9058823529411765,0.9098039215686274,0.9411764705882353,B.q)
C.O6=new A.u(1,0.06666666666666667,0.08235294117647059,0.1607843137254902,B.q)
C.Oa=new A.u(1,0.12549019607843137,0.14901960784313725,0.23137254901960785,B.q)
C.Oe=new A.u(1,0.9725490196078431,0.9450980392156862,0.9490196078431372,B.q)
C.nf=new A.u(1,0.13725490196078433,0.16470588235294117,0.25882352941176473,B.q)
C.Ol=new A.u(1,0.9372549019607843,0.9411764705882353,0.9607843137254902,B.q)
C.cl=new A.u(1,0.07058823529411765,0.0784313725490196,0.10980392156862745,B.q)
C.d6=new A.u(1,0.9411764705882353,0.33725490196078434,0.41568627450980394,B.q)
C.r2=new A.u(1,0.9568627450980393,0.9607843137254902,0.9803921568627451,B.q)
C.r3=new A.u(1,0.11372549019607843,0.13725490196078433,0.2196078431372549,B.q)
C.bFu=new A.R(0,0,0,7)
C.bFD=new A.R(0,10,0,4)
C.bFV=new A.R(0,4,0,12)
C.bH7=new A.R(12,8,12,6)
C.bHg=new A.R(13,7,13,7)
C.aoF=new A.R(16,4,16,40)
C.bIt=new A.R(16,6,16,16)
C.bIA=new A.R(16,8,16,40)
C.bLi=new A.R(4,0,4,10)
C.apu=new A.R(4,0,4,8)
C.bWs=new A.a_(983124,"MaterialIcons",!1)
C.bWR=new A.a_(983325,"MaterialIcons",!1)
C.asU=new A.a_(983372,"MaterialIcons",!1)
C.bYv=new A.ae(C.asU,18,C.cH,null,null,null)
C.bYX=new A.ae(B.vz,16,null,null,null,null)
C.c11=new A.ae(B.no,7,C.cH,null,null,null)
C.c1I=new A.ae(B.ea,18,C.cH,null,null,null)
C.c1Y=new A.ae(B.rx,20,B.c,null,null,null)
C.c4b=new A.ae(B.vz,18,null,null,null,null)
C.c6e=new A.ae(B.IM,18,null,null,null,null)
C.c6i=new A.ae(B.xv,null,C.d6,null,null,null)
C.c6r=new A.ae(B.kq,18,C.cH,null,null,null)
C.c7F=new A.ae(B.Ir,18,C.d6,null,null,null)
C.cP2=w([B.dD,B.fy,B.i2],x.O)
C.avA=new A.a6(B.aw,B.aD,B.w,C.cP2,null,null)
C.aDo=w([C.d6,B.as,C.cH],x.O)
C.cbF=new A.a6(B.a5,B.a9,B.w,C.aDo,null,null)
C.cce=new A.a6(B.a5,B.a9,B.w,C.aDo,B.mc,null)
C.dsb=w([B.dD,B.i2,B.bE],x.O)
C.cfj=new A.a6(B.aw,B.aD,B.w,C.dsb,null,null)
C.cpb=w([12,24,48],x.X)
C.d7q=w(["All","Forex","Stocks","Crypto"],x.s)
C.ddL=w(["Which market looks strongest right now?","Is Bitcoin going up or down right now?","Why has the agent not bought yet?","Explain RSI like I am new","How do I know when to sell?","What does bullish and bearish mean?"],x.s)
C.fdf=new A.y("The idea","Trading means buying something and selling it later. You make money when you sell for more than you paid, and you lose money when you sell for less. That is all a trade is.")
C.f4O=new A.y("Why prices move","Every price is set by buyers and sellers. When more people want to buy than sell, the price goes up. When more want to sell, it goes down. A chart is simply a picture of that tug of war over time.")
C.f5L=new A.y("Nobody knows the future","No person, app or AI can know for sure where a price goes next. Good traders do not guess. They follow clear rules, keep losses small, and let the winners pay for the losers.")
C.f48=new A.y("Why practise first","This agent uses Alpaca paper money: real prices, fake dollars. You can learn every step, make mistakes and see real results without risking a cent. Professionals practise this way too.")
C.d9S=w([C.fdf,C.f4O,C.f5L,C.f48],x.L)
C.dbZ=w(["When you buy","When you sell for more than you paid","When the market opens"],x.s)
C.b4h=new D.cI("When do you make money on a trade?",C.dbZ,1,"Profit only exists after you sell higher than you bought.")
C.d6f=w(["More buyers than sellers","The app","The time of day"],x.s)
C.b4c=new D.cI("What makes a price go up?",C.d6f,0,"More people wanting to buy pushes the price up.")
C.dAo=w([C.b4h,C.b4c],x.r)
C.hTw=new D.uD("basics","What trading really is","Buyers, sellers and why prices move",4,P.lf,B.as,"basics",C.d9S,C.dAo)
C.bXv=new A.a_(983780,"MaterialIcons",!1)
C.eWt=new A.y("One candle = one time slice","On this chart every candle is 5 minutes. It shows four prices: where it started (open), where it ended (close), the highest point (high) and the lowest point (low).")
C.f38=new A.y("The colours","Green candle: the price closed HIGHER than it opened, buyers won those 5 minutes. Yellow candle: it closed LOWER, sellers won. Many apps use red instead of yellow, it means the same thing.")
C.fes=new A.y("Body and wicks","The thick part (the body) runs from open to close. The thin lines (the wicks) show how far the price went up or down before coming back. A long wick on top means buyers pushed up but sellers pushed it back down.")
C.fbu=new A.y("Reading a row of candles","Several green candles in a row, each closing higher, show buyers in control. Many yellow ones closing lower show sellers in control. Candles that go up and down with no direction mean the market is undecided.")
C.cgM=w([C.eWt,C.f38,C.fes,C.fbu],x.L)
C.dc5=w(["It closed higher than it opened","It is a good time to buy","The market is closed"],x.s)
C.b4f=new D.cI("A green candle means...",C.dc5,0,"Colour only tells you if it closed above or below where it opened.")
C.cHI=w(["1 day","5 minutes","1 hour"],x.s)
C.b44=new D.cI("On this chart one candle covers...",C.cHI,1,"The agent works with 5-minute candles.")
C.diw=w([C.b4f,C.b44],x.r)
C.hTy=new D.uD("candles","Reading candles","Open, close, high and low in one shape",5,C.bXv,C.cH,"candles",C.cgM,C.diw)
C.f6S=new A.y("Bullish","An uptrend. The price makes higher highs and higher lows, like climbing stairs. Buyers are in control. Traders call this bullish (a bull attacks upward with its horns).")
C.ffn=new A.y("Bearish","A downtrend. Lower highs and lower lows, like walking down stairs. Sellers are in control. This is bearish (a bear swipes downward).")
C.eXK=new A.y("Sideways","The price bounces between a ceiling and a floor with no clear direction. Most trading signals fail here, so the best move is often to wait.")
C.f9D=new A.y("The golden rule","Trade WITH the trend, not against it. Buying in a downtrend because it looks cheap is how most beginners lose. The agent only buys when the trend turns up.")
C.da7=w([C.f6S,C.ffn,C.eXK,C.f9D],x.L)
C.d89=w(["Bearish","Bullish","Sideways"],x.s)
C.b4g=new D.cI("Higher highs and higher lows means...",C.d89,1,"Climbing stairs = uptrend = bullish.")
C.dcg=w(["Work best","Often fail","Are always right"],x.s)
C.b49=new D.cI("In a sideways market, signals...",C.dcg,1,"With no direction, signals flip back and forth.")
C.dAV=w([C.b4g,C.b49],x.r)
C.hTr=new D.uD("trend","Trends: up, down, sideways","Bullish, bearish and how to tell",5,B.mH,B.ci,"trend",C.da7,C.dAV)
C.fgp=new A.y("What an average line is","A moving average is the average closing price of the last few candles, drawn as a smooth line. It hides the small wiggles so you can see the real direction.")
C.eVD=new A.y("Fast line (pink)","The average of the last 9 candles, about 45 minutes. It reacts quickly to new moves.")
C.eXf=new A.y("Slow line (purple)","The average of the last 21 candles, about 1 hour 45 minutes. It moves slowly and shows the bigger direction.")
C.f7U=new A.y("How to read them","Fast line ABOVE slow line: recent prices are higher than older ones, the trend is up. Fast line BELOW: the trend is down. When the price itself is above both lines, buyers are strong.")
C.du7=w([C.fgp,C.eVD,C.eXf,C.f7U],x.L)
C.dJT=w(["45 minutes","1 day","1 week"],x.s)
C.b4i=new D.cI("The pink fast line averages about...",C.dJT,0,"9 candles x 5 minutes = 45 minutes.")
C.dFo=w(["Trend is up","Trend is down","Market closed"],x.s)
C.b4b=new D.cI("Fast line above slow line means...",C.dFo,0,"Recent prices are higher than older prices.")
C.dpO=w([C.b4i,C.b4b],x.r)
C.hTs=new D.uD("ma","Moving averages","The pink fast line and the purple slow line",6,B.xA,B.bE,"ma",C.du7,C.dpO)
C.fcC=new A.y("Buy signal","When the fast line crosses UP through the slow line, the short-term trend has just turned up. That moment is the buy signal. The agent buys at that point ($100 of the stock or coin), but only if the big trend is rising too. It watches the 10 stocks on weekdays and the 15 liquid crypto majors around the clock, all at the same time, and buys whichever gives a valid entry first.")
C.f4X=new A.y("Sell signal","When the fast line crosses back DOWN through the slow line, the up move is over. That is the sell signal, and the agent closes the trade.")
C.f9O=new A.y("Why it must be fresh","If the cross happened an hour ago, the easy part of the move may be gone. Buying late means buying high. So the agent only acts on a cross that happened since its last check, never on an old one.")
C.fbN=new A.y("The weakness","In sideways markets the lines cross back and forth and give false signals. That is why every trade also has a stop loss: when a signal is wrong, the loss stays small.")
C.dlb=w([C.fcC,C.f4X,C.f9O,C.fbN],x.L)
C.dwp=w(["Crosses above the slow line","Crosses below the slow line","Is flat"],x.s)
C.b4a=new D.cI("The buy signal is when the fast line...",C.dwp,0,"Crossing up = trend turning up.")
C.dIN=w(["To avoid buying late","The app is slow","Old crosses are illegal"],x.s)
C.b42=new D.cI("Why does the agent skip old crosses?",C.dIN,0,"A late entry means buying after most of the move.")
C.d6m=w([C.b4a,C.b42],x.r)
C.hTp=new D.uD("cross","The crossover signal","Exactly when the agent buys and sells",6,B.as0,B.b0,"cross",C.dlb,C.d6m)
C.bX0=new A.a_(983477,"MaterialIcons",!1)
C.f9m=new A.y("What RSI measures","RSI (Relative Strength Index) compares the size of recent rises with recent falls and gives a number from 0 to 100. Above 50, rises have been bigger. Below 50, falls have been bigger.")
C.eZs=new A.y("Above 70: stretched","The price rose very fast. It is called overbought. It often pauses or pulls back, so buying right then is risky. It can still keep rising in a strong trend.")
C.f9t=new A.y("Below 30: oversold","The price fell very fast. It often bounces, but in a strong downtrend it can stay low. Oversold is not a reason to buy on its own.")
C.f8C=new A.y("How to use it","Use RSI as a second opinion. A buy signal with RSI between 50 and 70 is healthy. A buy signal with RSI above 75 means the move may already be tired.")
C.d6L=w([C.f9m,C.eZs,C.f9t,C.f8C],x.L)
C.din=w(["Oversold","Overbought","Neutral"],x.s)
C.b41=new D.cI("RSI above 70 is called...",C.din,1,"It rose fast and is stretched.")
C.b4e=new D.cI("RSI below 30 always means buy.",M.TC,1,"Falling markets can stay oversold. It is a hint, not a signal.")
C.dJL=w([C.b41,C.b4e],x.r)
C.hTx=new D.uD("rsi","RSI: momentum","Is the move strong, stretched or tired?",5,C.bX0,B.cI,"rsi",C.d6L,C.dJL)
C.f_T=new A.y("Decide the exit before you enter","Every agent trade has two exits set before it starts, in dollars: take profit when the trade is up $50, stop loss when it is down $50.")
C.f32=new A.y("Win the same as you risk","The win (+$50) is the same size as the loss (-$50). So every win cancels one loss: winning 5 out of 10 trades breaks even. More than 5 out of 10 is profit, fewer is a loss. The win rate on the agent screen shows which side it is on.")
C.eQz=new A.y("Size matters most","The agent uses $100 per trade even though the paper account has $100,000. Small trades mean no single mistake can hurt much. Pros rarely risk more than 1 to 2 percent of their money on one trade.")
C.f6c=new A.y("Never move the stop","The biggest beginner mistake is hoping a losing trade comes back and moving the stop lower. Small losses are the cost of doing business. Big losses end accounts.")
C.dDO=w([C.f_T,C.f32,C.eQz,C.f6c],x.L)
C.ctL=w(["5 in 10 trades","9 in 10 trades","Every trade"],x.s)
C.b47=new D.cI("With +$50 wins and -$50 losses, to break even you must win about...",C.ctL,0,"Each win (+50) cancels one loss (-50).")
C.dgS=w(["Move the stop lower","Let the stop loss work","Buy more"],x.s)
C.b45=new D.cI("A trade is losing. The best move is...",C.dgS,1,"The stop exists to keep losses small.")
C.dmF=w([C.b47,C.b45],x.r)
C.hTq=new D.uD("risk","Risk: stop loss and take profit","Why small losses beat big wins",7,B.ry,C.d6,"risk",C.dDO,C.dmF)
C.bXB=new A.a_(983848,"MaterialIcons",!1)
C.f_3=new A.y("Bad days happen","Some days every signal fails. The danger is trying to win it back by trading more and bigger. That is called revenge trading and it is how small losses become big ones.")
C.f5h=new A.y("Daily stop: $50","If the day loses $50, the agent makes no more buys until tomorrow. It walks away and lets the market calm down.")
C.fct=new A.y("Total brake: $100","If total losses reach $100, the agent pauses completely until you review what happened and turn it back on. Reviewing is the most important part of learning.")
C.eYr=new A.y("Your own rules","When you trade yourself, set the same kind of limits before the day starts, and keep them even when it hurts.")
C.diP=w([C.f_3,C.f5h,C.fct,C.eYr],x.L)
C.dlB=w(["Doubles the next trade","Stops buying for the day","Sells everything forever"],x.s)
C.b46=new D.cI("After losing $50 in a day, the agent...",C.dlB,1,"The daily stop prevents revenge trading.")
C.dix=w([C.b46],x.r)
C.hTt=new D.uD("brakes","Daily stop and total brake","Protecting your account from bad days",4,C.bXB,E.i1,"brakes",C.diP,C.dix)
C.ajx=new A.u(1,0.3843137254901961,0.49411764705882355,0.9176470588235294,B.q)
C.f40=new A.y("Stocks and funds","SPY, QQQ, Apple, Microsoft, Nvidia, Tesla and Amazon trade on US market days from 9:30 AM to 4:00 PM Eastern Time. Closed at night, on weekends and on holidays.")
C.f4U=new A.y("Overnight gaps","News can come out while the stock market is closed, so the next morning it can open far higher or lower. That is why the agent sells stocks by 3:55 PM and never holds them overnight.")
C.f1Y=new A.y("Crypto","Bitcoin, Ethereum and Solana trade all day, every day, including weekends. More hours means more chances, but crypto also moves faster and harder, so stops get hit more often.")
C.fbf=new A.y("Funds vs single companies","SPY holds the 500 biggest US companies and QQQ holds 100 big tech companies, so they move more calmly. One company like Tesla can jump a lot on its own news.")
C.cUu=w([C.f40,C.f4U,C.f1Y,C.fbf],x.L)
C.da6=w(["Only weekdays","All day, every day","Only at night"],x.s)
C.b4d=new D.cI("When can Bitcoin be traded?",C.da6,1,"Crypto never closes.")
C.d7_=w(["To avoid overnight gaps","Stocks expire","It is the law"],x.s)
C.b43=new D.cI("Why sell stocks before the close?",C.d7_,0,"Overnight news can make the price jump at the open.")
C.dqQ=w([C.b4d,C.b43],x.r)
C.hTv=new D.uD("hours","Stocks vs crypto","Market hours, weekends and jumpiness",5,B.k_,C.ajx,"hours",C.cUu,C.dqQ)
C.f9P=new A.y("Judge many trades, not one","One trade tells you nothing. Luck decides single trades. After 20 to 50 trades you start to see if a method really works. That is why the plan is 2 to 4 weeks of paper trading.")
C.eZd=new A.y("Keep a journal","For each trade write: why you bought, where your stop and target were, what happened, and what you learned. The Trades list on the main screen is the agent's journal.")
C.eVw=new A.y("Follow the rules exactly","The point of the agent is to follow rules perfectly, with no fear and no greed. Check that it did. If it ever breaks a rule, that is a bug to fix before real money.")
C.f1Z=new A.y("Before real money","Real money comes only after a long paper test with a positive result, a full review, and money you can truly afford to lose. Never borrow to trade.")
C.dzf=w([C.f9P,C.eZd,C.eVw,C.f1Z],x.L)
C.dGj=w(["1","3","20 or more"],x.s)
C.b40=new D.cI("How many trades before judging a method?",C.dGj,2,"Small samples are mostly luck.")
C.dJi=w(["Borrowed","Money you can afford to lose","Rent money"],x.s)
C.b48=new D.cI("Money for trading should be...",C.dJi,1,"Never trade money you need.")
C.dJG=w([C.b40,C.b48],x.r)
C.hTu=new D.uD("practice","Practising like a pro","Journals, patience and judging results",5,B.m6,B.bk,"practice",C.dzf,C.dJG)
C.Er=w([C.hTw,C.hTy,C.hTr,C.hTs,C.hTp,C.hTx,C.hTq,C.hTt,C.hTv,C.hTu],A.as("N<uD>"))
C.dv8=w([],x.n)
C.ezl={basics:0,candles:1,trend:2,ma:3,cross:4,rsi:5,risk:6,brakes:7,hours:8,practice:9}
C.dcT=w(["A $4 profit","A $4 loss","Nothing"],x.s)
C.hXv=new D.cI("You buy at $100 and sell at $96. What happened?",C.dcT,1,"Selling lower than you bought is a loss.")
C.dwn=w(["The future price","How the price moved over time","Who is buying"],x.s)
C.hXt=new D.cI("What does a price chart show?",C.dwn,1,"A chart is a record of past prices.")
C.dHZ=w(["Yes, experts can","Yes, an AI can","No, nobody can"],x.s)
C.hXB=new D.cI("Can anyone know for sure where a price goes next?",C.dHZ,2,"Markets are uncertain; rules and stops manage that.")
C.dGI=w(["Trading with real prices and practice money","Trading newspapers","Trading on paper forms"],x.s)
C.hZi=new D.cI("What is paper trading?",C.dGI,0,"Real prices, fake dollars: practice without risk.")
C.duE=w(["It is faster","To learn without risking real money","Practice money earns more"],x.s)
C.hZd=new D.cI("Why practise first?",C.duE,1,"Mistakes cost nothing while you learn.")
C.ctF=w(["Rise","Fall","Stay frozen"],x.s)
C.hXC=new D.cI("More people want to sell than buy. The price will most likely...",C.ctF,1,"Selling pressure pushes prices down.")
C.dia=w(["Clear rules and small losses","Lucky guesses","Tips from friends"],x.s)
C.hZ5=new D.cI("Good traders mostly rely on...",C.dia,0,"Rules and risk control beat guessing.")
C.cfO=w(["$45","$55","$60"],x.s)
C.hYx=new D.cI("You buy $50 of something and it rises 10%. It is now worth...",C.cfO,1,"10% of $50 is $5, so $55.")
C.cZc=w(["Buy","Sell","Look at the chart"],x.s)
C.hXT=new D.cI("A trade is only finished when you...",C.cZc,1,"Until you sell, a gain or loss is not locked in.")
C.dHc=w(["Good traders never lose","Every trader has losing trades","Losses only happen to beginners"],x.s)
C.hXO=new D.cI("Which is true about losses?",C.dHc,1,"Losing trades are normal; keeping them small is the skill.")
C.cS3=w(["Real dollars are spent","No real money is at risk","It trades in secret"],x.s)
C.hYF=new D.cI("The agent uses Alpaca paper money. That means...",C.cS3,1,"Paper accounts use fake dollars.")
C.drU=w(["The government","Buyers and sellers agreeing","The app makers"],x.s)
C.hXs=new D.cI("A price is set by...",C.drU,1,"Each trade is a buyer and seller agreeing on a price.")
C.dCS=w([C.b4h,C.b4c,C.hXv,C.hXt,C.hXB,C.hZi,C.hZd,C.hXC,C.hZ5,C.hYx,C.hXT,C.hXO,C.hYF,C.hXs],x.r)
C.dbK=w(["It closed lower than it opened","It closed higher","Nothing traded"],x.s)
C.hYQ=new D.cI("A yellow (or red) candle means...",C.dbK,0,"Sellers won that time slice.")
C.dg6=w(["Wick","Body","Tail light"],x.s)
C.hXD=new D.cI("The thick part of a candle is called the...",C.dg6,1,"The body runs from open to close.")
C.doR=w(["Wicks","Bodies","Averages"],x.s)
C.hYl=new D.cI("The thin lines above and below are the...",C.doR,0,"Wicks show the high and the low.")
C.dfx=w(["Open","Close","Highest price"],x.s)
C.hYH=new D.cI("The top of the upper wick shows the...",C.dfx,2,"The tip of the upper wick is the high.")
C.dK7=w(["Lowest price","Open","Average"],x.s)
C.hYZ=new D.cI("The bottom of the lower wick shows the...",C.dK7,0,"The tip of the lower wick is the low.")
C.dij=w(["One","Two","Four"],x.s)
C.hYy=new D.cI("How many prices does one candle show?",C.dij,2,"Open, high, low and close.")
C.dtS=w(["Buyers pushed up but sellers pushed it back down","The price never moved","The market closed early"],x.s)
C.hYA=new D.cI("A long upper wick means...",C.dtS,0,"The price went high, then fell back before the close.")
C.d6v=w(["Sellers in control","Buyers in control","No direction"],x.s)
C.hYh=new D.cI("Many green candles in a row, each closing higher, show...",C.d6v,1,"Rising closes mean buyers are winning.")
C.d6b=w(["A strong uptrend","The market is undecided","A crash"],x.s)
C.hYO=new D.cI("Candles going up and down with no direction mean...",C.d6b,1,"Mixed candles show indecision.")
C.dc7=w(["Green","Yellow","Grey"],x.s)
C.hYw=new D.cI("A candle opened at 10 and closed at 12. Its colour here is...",C.dc7,0,"It closed above the open.")
C.dKK=w(["5 candles","12 candles","60 candles"],x.s)
C.hXF=new D.cI("In 1 hour of 5-minute candles there are...",C.dKK,1,"60 minutes divided by 5 is 12.")
C.dsz=w(["The first price in that time","The last price in that time","The highest price"],x.s)
C.hZ7=new D.cI('The "close" of a candle is...',C.dsz,1,"Close is where the price ended.")
C.dzO=w([C.b4f,C.b44,C.hYQ,C.hXD,C.hYl,C.hYH,C.hYZ,C.hYy,C.hYA,C.hYh,C.hYO,C.hYw,C.hXF,C.hZ7],x.r)
C.d8p=w(["Bullish","Bearish","Sideways"],x.s)
C.hYJ=new D.cI("Lower highs and lower lows means...",C.d8p,1,"Walking down stairs = downtrend = bearish.")
C.doh=w(["Rise","Fall","Stay the same"],x.s)
C.hZc=new D.cI('"Bullish" means you expect prices to...',C.doh,0,"A bull attacks upward.")
C.dkG=w(["Rise","Fall","Double"],x.s)
C.hZa=new D.cI('"Bearish" means you expect prices to...',C.dkG,1,"A bear swipes downward.")
C.dor=w(["Trade against the trend","Trade with the trend","Ignore the trend"],x.s)
C.hYp=new D.cI("The golden rule of trends is...",C.dor,1,"Going with the trend wins more often.")
C.d9V=w(["A safe plan","A common beginner mistake","What the agent does"],x.s)
C.hYT=new D.cI("Buying in a downtrend because it looks cheap is...",C.d9V,1,"Cheap can get cheaper.")
C.dl9=w(["Sideways","Bullish","Bearish"],x.s)
C.hXX=new D.cI("A price bouncing between a ceiling and a floor is...",C.dl9,0,"No higher highs or lower lows: sideways.")
C.dD5=w(["Trade a lot","Wait","Borrow money"],x.s)
C.hY9=new D.cI("In a sideways market the best move is often to...",C.dD5,1,"Patience avoids false signals.")
C.dn3=w(["Up","Down","Flat"],x.s)
C.hYc=new D.cI("When sellers are in control, the trend is...",C.dn3,1,"Sellers push prices down.")
C.dn0=w(["Stairs going up","Stairs going down","A flat road"],x.s)
C.hXu=new D.cI("Which picture fits an uptrend?",C.dn0,0,"Each step a bit higher.")
C.dCQ=w(["Turns down","Turns up","Is sideways"],x.s)
C.hYu=new D.cI("The agent only buys when the trend...",C.dCQ,1,"It buys the start of up moves.")
C.dBd=w(["Getting lower","Getting higher","Gone"],x.s)
C.hXJ=new D.cI("A trend changes from bearish to bullish. Lows are now...",C.dBd,1,"Higher lows are the first sign of an uptrend.")
C.dsi=w(["Strong uptrend","Strong downtrend","Sideways"],x.s)
C.hYD=new D.cI("Most trading signals fail in which market?",C.dsi,2,"Without direction, signals flip constantly.")
C.d9T=w([C.b4g,C.b49,C.hYJ,C.hZc,C.hZa,C.hYp,C.hYT,C.hXX,C.hY9,C.hYc,C.hXu,C.hYu,C.hXJ,C.hYD],x.r)
C.di9=w(["The average closing price of recent candles","The highest price ever","A news feed"],x.s)
C.hZ_=new D.cI("A moving average is...",C.di9,0,"It smooths prices into a line.")
C.dIB=w(["To hide small wiggles and show direction","To predict news","To make charts colourful"],x.s)
C.hZ1=new D.cI("Why use a moving average?",C.dIB,0,"It filters noise.")
C.deB=w(["9","21","100"],x.s)
C.hYm=new D.cI("The purple slow line averages how many candles?",C.deB,1,"21 candles, about 1 hour 45 minutes.")
C.dsE=w(["The fast (pink) line","The slow (purple) line","Both the same"],x.s)
C.hYo=new D.cI("Which line reacts faster to new moves?",C.dsE,0,"Fewer candles means quicker reaction.")
C.dIS=w(["Trend is up","Trend is down","Buy now"],x.s)
C.hYa=new D.cI("Fast line below slow line means...",C.dIS,1,"Recent prices are lower than older ones.")
C.dau=w(["Buyers are strong","Sellers are strong","Nothing"],x.s)
C.hXx=new D.cI("The price is above both lines. That shows...",C.dau,0,"Price above its averages = strength.")
C.d6k=w(["The bigger direction","Only the last candle","Tomorrow price"],x.s)
C.hYI=new D.cI("The slow line shows...",C.d6k,0,"It changes slowly and shows the wider trend.")
C.d2E=w(["15 minutes","1 hour 45 minutes","1 week"],x.s)
C.hXN=new D.cI("The slow line covers about...",C.d2E,1,"21 x 5 minutes = 105 minutes.")
C.cpl=w(["Past prices","Future prices","Opinions"],x.s)
C.hYP=new D.cI("Moving averages are based on...",C.cpl,0,"They average prices that already happened.")
C.d6J=w(["Lag behind the price","Lead the price","Never move"],x.s)
C.hZ2=new D.cI("Because they use past prices, moving averages...",C.d6J,0,"Averages are always a little late.")
C.drx=w(["A bullish picture","A bearish picture","A closed market"],x.s)
C.hYb=new D.cI("Both lines pointing up and the price above them is...",C.drx,0,"Everything points up.")
C.dgR=w(["Trending strongly","Sideways","Crashing"],x.s)
C.hZb=new D.cI("When the two lines are tangled together, the market is often...",C.dgR,1,"Tangled lines mean no clear direction.")
C.dCB=w([C.b4i,C.b4b,C.hZ_,C.hZ1,C.hYm,C.hYo,C.hYa,C.hXx,C.hYI,C.hXN,C.hYP,C.hZ2,C.hYb,C.hZb],x.r)
C.di7=w(["Crosses below the slow line","Crosses above the slow line","Touches the price"],x.s)
C.hXr=new D.cI("The sell signal is when the fast line...",C.di7,0,"Crossing down = the up move is over.")
C.dHW=w(["About $100","$5,000","All the money"],x.s)
C.hZj=new D.cI("How much does the agent put into one trade?",C.dHW,0,"Every trade is $100 of the stock (weekdays) or coin (weekends) itself.")
C.dCu=w(["A fresh signal","An old signal","Not a signal at all ever"],x.s)
C.hYU=new D.cI("A cross that happened an hour ago is...",C.dCu,1,"Fresh means since the last check.")
C.ctP=w(["Sideways markets","Strong trends","Closed markets"],x.s)
C.hYY=new D.cI("Crossovers give many false signals in...",C.ctP,0,"Lines cross back and forth with no direction.")
C.dqF=w(["The stop loss","Buying more","Ignoring it"],x.s)
C.hXM=new D.cI("What protects you when a signal is wrong?",C.dqF,0,"The stop keeps the loss small.")
C.dkr=w(["Just changed direction","Ended forever","Doubled"],x.s)
C.hZ8=new D.cI("The crossover tells you the short-term trend has...",C.dkr,0,"A cross marks a turn.")
C.d3D=w(["1 second","5 minutes","1 day"],x.s)
C.hZ0=new D.cI("The agent checks every market on the list every...",C.d3D,1,"The automatic check runs every 5 minutes and looks at all of the day markets at once.")
C.d7N=w(["Buying higher, with less room to rise","A guaranteed win","A cheaper price"],x.s)
C.hXG=new D.cI("Buying late in a move usually means...",C.d7N,0,"Most of the move is already gone.")
C.dvU=w(["Trust it more","Trust it less","Bet bigger"],x.s)
C.hYS=new D.cI("If a signal fails often on one market, you should...",C.dvU,1,"Check how often it worked before trusting it.")
C.d7H=w(["Buys more","Sells","Waits a week"],x.s)
C.hYz=new D.cI("When the agent holds a trade and the fast line crosses down, it...",C.d7H,1,"The sell signal closes the trade.")
C.cOY=w(["Yes","No","Only on Fridays"],x.s)
C.hYe=new D.cI("Does a buy signal guarantee the price will rise?",C.cOY,1,"Signals improve the odds; they never guarantee.")
C.dbm=w(["Holds no other position","Already holds three","Has lost $100"],x.s)
C.hZk=new D.cI("The agent buys on a signal only if it...",C.dbm,0,"One position at a time.")
C.dII=w([C.b4a,C.b42,C.hXr,C.hZj,C.hYU,C.hYY,C.hXM,C.hZ8,C.hZ0,C.hXG,C.hYS,C.hYz,C.hYe,C.hZk],x.r)
C.dmP=w(["0 to 100","1 to 10","-50 to 50"],x.s)
C.hYW=new D.cI("RSI is a number from...",C.dmP,0,"It always sits between 0 and 100.")
C.dy0=w(["Rises were bigger than falls","Falls were bigger than rises","Nothing moved"],x.s)
C.hY7=new D.cI("RSI above 50 means recent...",C.dy0,0,"Above 50 = buyers stronger lately.")
C.dim=w(["Overbought","Oversold","Balanced"],x.s)
C.hYg=new D.cI("RSI below 30 is called...",C.dim,1,"It fell fast and is stretched downward.")
C.dvy=w(["Momentum: strength of recent moves","The company profit","Trading volume"],x.s)
C.hYr=new D.cI("RSI measures...",C.dvy,0,"It compares gains with losses.")
C.d7u=w(["Healthy","Very stretched","Impossible"],x.s)
C.hXV=new D.cI("A buy signal with RSI 60 is...",C.d7u,0,"Between 50 and 70 is healthy strength.")
C.dfe=w(["Just starting","Tired and stretched","Guaranteed"],x.s)
C.hXy=new D.cI("A buy signal with RSI 80 means the move may be...",C.dfe,1,"Very high RSI often comes before a pause.")
C.dms=w(["As a second opinion","As the only reason to trade","Never"],x.s)
C.hY0=new D.cI("Best way to use RSI?",C.dms,0,"Combine it with the trend signal.")
C.dxd=w(["For a while","Never","Only one candle"],x.s)
C.hYq=new D.cI("In a strong uptrend, RSI can stay above 70...",C.dxd,0,"Strong trends can stay overbought.")
C.drI=w(["Balanced buyers and sellers","Market closed","Crash coming"],x.s)
C.hYs=new D.cI("RSI of 50 means...",C.drI,0,"50 is the middle.")
C.das=w(["Rose very fast","Fell very fast","Did not move"],x.s)
C.hZ3=new D.cI("Overbought means prices...",C.das,0,"Overbought = rose fast.")
C.cR9=w(["Stay oversold and keep falling","Only go up","Freeze the market"],x.s)
C.hY2=new D.cI("Oversold in a strong downtrend can...",C.cR9,0,"Oversold is not a reason to buy on its own.")
C.cNe=w(["Sellers a little stronger","Extreme buying","Extreme selling"],x.s)
C.hYi=new D.cI("RSI 45 suggests...",C.cNe,0,"Just below 50: sellers slightly ahead.")
C.dmq=w([C.b41,C.b4e,C.hYW,C.hY7,C.hYg,C.hYr,C.hXV,C.hXy,C.hY0,C.hYq,C.hYs,C.hZ3,C.hY2,C.hYi],x.r)
C.dJY=w(["When the trade is up $50","When the trade is up $5","Never"],x.s)
C.hZ4=new D.cI("The agent take profit is...",C.dJY,0,"It sells when the trade is up $50.")
C.dC7=w(["When the trade is down $50","When the trade is down $500","It has none"],x.s)
C.hYK=new D.cI("The agent stop loss is...",C.dC7,0,"It sells when the trade is down $50.")
C.dqm=w(["A planned exit that limits a loss","A way to stop the app","A bonus"],x.s)
C.hXL=new D.cI("A stop loss is...",C.dqm,0,"It sells automatically when the loss reaches a set size.")
C.dfM=w(["Before entering the trade","After it goes wrong","Never"],x.s)
C.hXU=new D.cI("When should you decide your exits?",C.dfM,0,"Plan exits first, while calm.")
C.dmd=w(["So no single mistake hurts much","It is the maximum allowed","To lose faster"],x.s)
C.hY1=new D.cI("Why does the agent use only about $100 per trade?",C.dmd,0,"Small size protects the account.")
C.dJC=w(["1 to 2 percent","50 percent","100 percent"],x.s)
C.hYE=new D.cI("Pros rarely risk more than about ... of their money on one trade.",C.dJC,0,"Small risk per trade keeps them in the game.")
C.dk1=w(["$0","+$100","-$100"],x.s)
C.hYR=new D.cI("Win $50 twice and lose $50 twice. Your total is...",C.dk1,0,"50 + 50 - 50 - 50 = 0.")
C.dur=w(["Profitable","Break even","A loss"],x.s)
C.hYL=new D.cI("Winning half the time with 2 to 1 reward to risk is...",C.dur,0,"Each win is twice each loss.")
C.dfU=w(["Turns small losses into big ones","Guarantees a win","Has no effect"],x.s)
C.hY6=new D.cI('Moving your stop lower to "give it room" usually...',C.dfU,0,"Hope is not a plan.")
C.d8z=w(["1 to 1","1 to 2","10 to 1"],x.s)
C.hYd=new D.cI("Reward to risk of the agent is...",C.d8z,0,"$50 target vs $50 stop: the same size.")
C.cth=w(["Can end an account","Are rare","Do not matter"],x.s)
C.hZg=new D.cI("Big losses are dangerous because they...",C.cth,0,"A 50% loss needs a 100% gain to recover.")
C.cWB=w(["Selling when the planned gain is reached","Buying more","Holding forever"],x.s)
C.hY_=new D.cI("Take profit means...",C.cWB,0,"It locks in the win.")
C.de6=w([C.b47,C.b45,C.hZ4,C.hYK,C.hXL,C.hXU,C.hY1,C.hYE,C.hYR,C.hYL,C.hY6,C.hYd,C.hZg,C.hY_],x.r)
C.dy6=w(["Trading more to win losses back","Taking a break","Following rules"],x.s)
C.hYn=new D.cI("Revenge trading means...",C.dy6,0,"It usually makes losses bigger.")
C.d8e=w(["$100 total losses","$25 total losses","Never"],x.s)
C.hXW=new D.cI("The total brake pauses the agent at...",C.d8e,0,"$100 total demo losses.")
C.d7O=w(["An admin, after a review","It turns itself on","Nobody ever"],x.s)
C.hYj=new D.cI("Who turns the agent back on after the $100 brake?",C.d7O,0,"A human review comes first.")
C.cfP=w(["$50","$1","$500"],x.s)
C.hXE=new D.cI("The daily stop is...",C.cfP,0,"If the day loses $50, no more buys.")
C.d2K=w(["Stop and reset","Trade bigger","Ignore your limits"],x.s)
C.hYX=new D.cI("Bad days happen. The best response is...",C.d2K,0,"Walking away protects your money.")
C.dp3=w(["Before the day starts","After you lose","Only on weekends"],x.s)
C.hXz=new D.cI("Limits should be set...",C.dp3,0,"Decide limits while calm.")
C.dEt=w(["Reviewing what happened","Forgetting it","Blaming the market"],x.s)
C.hY8=new D.cI("The most important part of learning after a bad run is...",C.dEt,0,"Reviews turn losses into lessons.")
C.cRA=w(["Yes, exits still work","No, it freezes","It buys more instead"],x.s)
C.hYB=new D.cI("After the daily stop, can the agent still sell an open trade?",C.cRA,0,"The stop blocks new buys, not exits.")
C.dJ8=w(["Protect the account from bad days","Make more trades","Win every day"],x.s)
C.hYv=new D.cI("Brakes are there to...",C.dJ8,0,"They cap the damage.")
C.d9W=w(["Stop trading and rethink","Raise the limits","Borrow money"],x.s)
C.hY4=new D.cI("If you keep breaking your own limits, you should...",C.d9W,0,"Rules only work when kept.")
C.dBk=w(["The next day","Never","Every minute"],x.s)
C.hYC=new D.cI("The daily stop resets...",C.dBk,0,"A new Eastern Time day starts fresh.")
C.do3=w(["Can lose everything on a bad day","Always wins","Pays no fees"],x.s)
C.hXH=new D.cI("A trader with no loss limits...",C.do3,0,"Limits are the safety net.")
C.dHN=w(["Pause","Trade faster","Bet bigger"],x.s)
C.hXw=new D.cI("Feeling angry after a loss is a sign to...",C.dHN,0,"Emotions lead to bad trades.")
C.daf=w([C.b46,C.hYn,C.hXW,C.hYj,C.hXE,C.hYX,C.hXz,C.hY8,C.hYB,C.hYv,C.hY4,C.hYC,C.hXH,C.hXw],x.r)
C.dc8=w(["9:30 AM to 4:00 PM Eastern","24 hours","8 PM to midnight"],x.s)
C.hXP=new D.cI("US stock market hours are...",C.dc8,0,"On market days only.")
C.hXI=new D.cI("Is the US stock market open on Saturday?",S.a7y,1,"Weekends are closed.")
C.dHm=w(["A jump between the close and the next open","A break in the chart software","A holiday"],x.s)
C.hYt=new D.cI("An overnight gap is...",C.dHm,0,"News while closed moves the next open.")
C.d2J=w(["Faster and harder","Slower","Exactly the same"],x.s)
C.hY5=new D.cI("Crypto compared with SPY usually moves...",C.d2J,0,"Crypto is more jumpy.")
C.dwk=w(["The 500 biggest US companies","One company","Bitcoin"],x.s)
C.hZe=new D.cI("SPY holds...",C.dwk,0,"It is a fund of 500 companies.")
C.dKI=w(["They spread over many companies","They are closed","They are crypto"],x.s)
C.hXq=new D.cI("Why do funds like SPY move more calmly?",C.dKI,0,"One bad company matters less.")
C.dCx=w(["3:55 PM Eastern","Midnight","Noon"],x.s)
C.hZ6=new D.cI("The agent sells stocks by...",C.dCx,0,"Before the 4:00 PM close.")
C.d9X=w(["Sunday 5 PM to Friday 5 PM Eastern","Only 9:30 to 4","Only weekends"],x.s)
C.hXQ=new D.cI("Forex (currency pairs) trades...",C.d9X,0,"Real forex is closed on weekends.")
C.dff=w(["The broker itself","The real world market","The government"],x.s)
C.hXZ=new D.cI("OTC prices at a broker on weekends come from...",C.dff,0,"They are made by the broker and can differ.")
C.dym=w(["Do not trade","Trade double","Trade at night"],x.s)
C.hYk=new D.cI("On a US market holiday, stocks...",C.dym,0,"Holidays are closed days.")
C.cg7=w(["More often","Never","Less often"],x.s)
C.hZ9=new D.cI("Because crypto moves fast, stop losses are hit...",C.cg7,0,"Bigger swings reach stops sooner.")
C.dCw=w(["Its own news","Weekend rules","The colour of candles"],x.s)
C.hYV=new D.cI("One company like Tesla can jump a lot because of...",C.dCw,0,"Single stocks react to company news.")
C.dsv=w([C.b4d,C.b43,C.hXP,C.hXI,C.hYt,C.hY5,C.hZe,C.hXq,C.hZ6,C.hXQ,C.hXZ,C.hYk,C.hZ9,C.hYV],x.r)
C.dh_=w(["Why you entered, your exits and what happened","Only wins","Nothing"],x.s)
C.hXS=new D.cI("A trading journal records...",C.dh_,0,"It shows what really works.")
C.hYf=new D.cI("One winning trade proves a method works.",M.TC,1,"One trade can be pure luck.")
C.dlm=w(["2 to 4 weeks","1 hour","1 day"],x.s)
C.hXA=new D.cI("The plan is to paper trade for...",C.dlm,0,"Enough time for many trades.")
C.dpI=w(["A bug to fix before real money","Fine","A bonus"],x.s)
C.hXK=new D.cI("If the agent ever breaks a rule, that is...",C.dpI,0,"Rules must be followed exactly.")
C.duJ=w(["A long positive paper test and a full review","One good day","A tip from a friend"],x.s)
C.hZf=new D.cI("Before using real money you need...",C.duJ,0,"Evidence first.")
C.dbE=w(["Worse than a coin flip","Excellent","Guaranteed"],x.s)
C.hYM=new D.cI("Signals that worked under 50% of the time are...",C.dbE,0,"Do not trust them.")
C.d6U=w(["Never a good idea for beginners","Smart","Required"],x.s)
C.hYG=new D.cI("Borrowing money to trade is...",C.d6U,0,"Borrowed losses still have to be paid.")
C.ddC=w(["The agent journal","An advert","A game"],x.s)
C.hYN=new D.cI("The Trades list on the main screen is...",C.ddC,0,"Every buy and sell is recorded.")
C.dqY=w(["No fear and no greed","Lots of emotion","Random choices"],x.s)
C.hY3=new D.cI("The point of an agent is to follow rules with...",C.dqY,0,"Discipline is its strength.")
C.cV8=w(["+$100","-$100","$0"],x.s)
C.hZh=new D.cI("After 10 trades you have 6 wins at +$50 and 4 losses at -$50. Total?",C.cV8,0,"6 x 50 = 300; 4 x 50 = 200; 300 - 200 = +100.")
C.cZy=w(["Review the trades calmly","Quit forever without looking","Double the size"],x.s)
C.hXR=new D.cI("A losing week means you should...",C.cZy,0,"Reviews find what to fix.")
C.dG2=w(["Patient and disciplined","Lucky","Fast clickers"],x.s)
C.hXY=new D.cI("The best traders are mostly...",C.dG2,0,"Patience and rules win over time.")
C.djO=w([C.b40,C.b48,C.hXS,C.hYf,C.hXA,C.hXK,C.hZf,C.hYM,C.hYG,C.hYN,C.hY3,C.hZh,C.hXR,C.hXY],x.r)
C.dN2=new A.bm(C.ezl,[C.dCS,C.dzO,C.d9T,C.dCB,C.dII,C.dmq,C.de6,C.daf,C.dsv,C.djO],A.as("bm<o,ah<cI>>"))
C.eBn={EUR:0,USD:1,GBP:2,JPY:3,CAD:4,AUD:5,NZD:6,CHF:7,TRY:8,NOK:9,THB:10}
C.ff9=new A.y("\u20ac",B.dU)
C.fg1=new A.y("$",B.et)
C.eVE=new A.y("\xa3",B.dl)
C.f44=new A.y("\xa5",B.bC)
C.f2_=new A.y("C$",B.hK)
C.f4v=new A.y("A$",B.cY)
C.eUY=new A.y("NZ",B.ax)
C.f8i=new A.y("Fr",B.eu)
C.fdj=new A.y("TL",B.fM)
C.fcl=new A.y("kr",B.h_)
C.eZv=new A.y("TH",B.wU)
C.a8T=new A.bm(C.eBn,[C.ff9,C.fg1,C.eVE,C.f44,C.f2_,C.f4v,C.eUY,C.f8i,C.fdj,C.fcl,C.eZv],A.as("bm<o,+(o,u)>"))
C.c1u=new A.ae(B.no,5,B.b0,null,null,null)
C.eI2=new A.C(B.hz,C.c1u,null)
C.f9X=new A.y(F.qS,"HOLDING")
C.fcv=new A.y(C.cH,"PASSES")
C.fcE=new A.y(C.d6,"FALLING")
C.fcM=new A.y(C.d6,"BENCHED")
C.fht=new A.b1(C.cH,B.mH,"up")
C.fhO=new A.b1(1,"Live signals",C.asU)
C.bXh=new A.a_(983635,"MaterialIcons",!0)
C.fhW=new A.b1(E.i1,C.bXh,"Moving sideways")
C.fi3=new A.b1(C.d6,B.a5a,"down")
C.fiw=new A.b1(2,"Ask tutor",B.vz)
C.fiO=new A.b1(B.b0,B.mD,"Waiting for data")
C.fjp=new A.b1(C.cH,B.mH,"Trending up")
C.fjw=new A.b1(C.d6,B.a5a,"Trending down")
C.fjA=new A.b1(0,"Lessons",B.oc)
C.fkD=new A.b1(B.bQ,B.mD,"waiting")
C.fox=new A.b7([B.A8,C.cH,"Signal alerts are ON: only STRONG BUY or SELL signals (all 5 confirmations), built for a 15\u201330 minute expiry, while NGMY is open or in the background.",null])
C.fpd=new A.b7([B.asH,E.i1,"Signal alerts are unlocked. Allow notifications so the app can tell you when a STRONG signal is given.","Allow"])
C.c_G=new A.ae(B.no,8,C.cH,null,null,null)
C.fQz=new A.G(!0,C.cH,null,null,null,null,11.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.hge=new A.D("LIVE",null,C.fQz,null,null,null,null,null,null,null,null,null)
C.dxc=w([C.c_G,B.b7,C.hge],x.p)
C.ftB=new A.c1(B.aK,B.e,B.P,B.l,null,B.p,null,0,C.dxc,null)
C.c07=new A.ae(B.rx,14,B.c,null,null,null)
C.hn9=new A.D("Learn",null,B.nB,null,null,null,null,null,null,null,null,null)
C.dbp=w([C.c07,B.da,C.hn9],x.p)
C.ftE=new A.c1(B.aK,B.e,B.P,B.l,null,B.p,null,0,C.dbp,null)
C.fIs=new A.G(!0,E.i1,null,null,null,null,12,B.O,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.fJm=new A.G(!0,B.c,null,null,null,null,11.5,null,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.fJW=new A.G(!0,B.c,null,null,null,null,34,B.C,null,-0.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.fKu=new A.G(!0,B.c,null,null,null,null,36,B.C,null,-0.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.fKI=new A.G(!0,B.c,null,null,null,null,14,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,G.AD,null,null)
C.fLw=new A.G(!0,B.ab,null,null,null,null,10.5,B.u,null,0.9,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.fMG=new A.G(!0,F.qS,null,null,null,null,11,B.O,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.fN2=new A.G(!0,B.ab,null,null,null,null,11.5,B.C,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.fP2=new A.G(!0,C.cH,null,null,null,null,11.5,B.O,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.fPa=new A.G(!0,C.d6,null,null,null,null,12,B.C,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.fQ4=new A.G(!0,C.cH,null,null,null,null,12,null,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.fQm=new A.G(!0,C.d6,null,null,null,null,11.5,null,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.fQv=new A.G(!0,C.d6,null,null,null,null,11.5,B.O,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.aZ0=new A.G(!0,E.i1,null,null,null,null,11.5,B.O,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.fUw=new A.G(!0,C.cH,null,null,null,null,12.5,B.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.fVx=new A.G(!0,B.c,null,null,null,null,22,B.u,null,0.8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.fWa=new A.G(!0,C.d6,null,null,null,null,12,null,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.aZN=new A.G(!0,C.d6,null,null,null,null,11.5,B.C,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.fXu=new A.G(!0,B.ab,null,null,null,null,9.5,B.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.h_F=new A.D("Ask the tutor",null,B.cf,null,null,null,null,null,null,null,null,null)
C.aYj=new A.G(!0,C.d6,null,null,null,null,12.5,B.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.h_P=new A.D("Not quite. Try again.",null,C.aYj,null,null,null,null,null,null,null,null,null)
C.h0N=new A.D("Win rate ($100 trades)",null,B.M1,null,null,null,null,null,null,null,null,null)
C.h0P=new A.D("All 10 lessons done!",null,null,null,null,null,null,null,null,null,null,null)
C.h0W=new A.D("10 short lessons. Each one shows you the idea live on the real markets the agent is watching.",null,T.FQ,null,null,null,null,null,null,null,null,null)
C.h2q=new A.D("Wrong. You have one more try.",null,C.aYj,null,null,null,null,null,null,null,null,null)
C.h3W=new A.D("Turn the agent back on?",null,null,null,null,null,null,null,null,null,null,null)
C.fXP=new A.G(!0,B.c,null,null,null,null,9.5,B.u,null,0.8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.h6z=new A.D("ALL SYSTEMS",null,C.fXP,null,null,null,null,null,null,null,null,null)
C.h7A=new A.D("Built for a 15\u201330 minute expiry. Do NOT use this for 1\u20135 minute trades.",null,C.aZN,null,null,null,null,null,null,null,null,null)
C.hdF=new A.D("Signal alerts are now unlocked. When a market says ENTER UP or ENTER DOWN, the app will tell you the market, the direction and the duration. Allow notifications to receive them.",null,null,null,null,null,null,null,null,null,null,null)
C.b_j=new A.D("Balance",null,B.Xd,null,null,null,null,null,null,null,null,null)
C.hgK=new A.D("Allow notifications",null,null,null,null,null,null,null,null,null,null,null)
C.fSX=new A.G(!0,B.aR,null,null,null,null,10.5,null,null,null,null,null,1.25,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.hhr=new A.D("5 of 10\n= break even",null,C.fSX,null,B.dR,null,null,null,null,null,null,null)
C.hjF=new A.D("Check now",null,B.cf,null,null,null,null,null,null,null,null,null)
C.hkk=new A.D("Learn to trade",null,B.mf,null,null,null,null,null,null,null,null,null)
C.hmO=new A.D("Turn back on",null,null,null,null,null,null,null,null,null,null,null)
C.hnd=new A.D("The $100 brake paused the agent. Turning it back on means you have reviewed it. The running demo profit and loss starts again from $0.",null,null,null,null,null,null,null,null,null,null,null)
C.hTD=new D.z9("Nvidia","N",B.NK)
C.hTF=new D.z9("Ethereum","\u039e",C.ajx)
C.hTI=new D.z9("S&P 500 fund","S&P",B.ci)
C.hTJ=new D.z9("Bitcoin","B",F.qS)
C.hTL=new D.z9("Tesla","T",B.bC)
C.hTM=new D.z9("Microsoft","M",B.bp)
C.hTN=new D.z9("Nasdaq 100 fund","Q",B.cI)
C.boR=new A.u(1,0.6,0.27058823529411763,1,B.q)
C.hTP=new D.z9("Solana","S",C.boR)
C.hTR=new D.z9("Apple","A",B.cU)
C.hTU=new D.z9("Amazon","a",B.as)})();(function staticFields(){$.DJ=A.a([],A.as("N<a01>"))
$.ahJ=!1
$.hoX=""
$.aMK=0
$.fre=0})()};
(a=>{a["FPGfJLehlKnDJeIDQ7aYKPsJgsA="]=a.current})($__dart_deferred_initializers__);