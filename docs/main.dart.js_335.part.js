((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,P,Q,E,H,R,I,S,G,K,D={
hFG(){return new D.auE(null)},
eL1(d){var w=J.a1(d),v=D.dF(w.h(d,"reading")).h(0,"action"),u=J.k(v==null?"":v)
if(B.a.Y(u,"ENTER UP"))return 0
if(B.a.Y(u,"ENTER DOWN"))return 1
if(!J.z(w.h(d,"open"),!0))return 4
return 2+(100-D.c5(D.dF(w.h(d,"reading")).h(0,"score")))/1000},
hPS(d,e,f,g){var w,v,u,t,s,r,q,p,o,n,m,l,k=A.a([],x.n)
for(w=d.length,v=x.N,u=x.z,t=x.f,s=0;s<d.length;d.length===w||(0,A.I)(d),++s){r=d[s]
q=J.a1(r)
if(A.v(q.h(r,"asset"))!==e)continue
p=q.h(r,"created_at")
o=A.bf(A.v(p==null?"":p))
n=q.h(r,"price")
if(!(typeof n=="number")){p=A.cA(A.v(n==null?"":n))
n=p==null?0:p}if(o==null||n<=0)continue
m=J.z(q.h(r,"decision"),"would buy")
q=q.h(r,"details")
l=(t.b(q)?A.a0(q,v,u):A.S(v,u)).h(0,"pnl")
if(!(typeof l=="number")){q=A.cA(A.v(l==null?"":l))
l=q==null?0:q}q=m?"In "+D.eh(n,!0,!1):"Out "+D.eh(l,!0,!0)
if(m)p=f
else p=l>0?C.cI:C.d6
k.push(new D.Rh(o,q,p))}if(g!=null&&A.v(g.h(0,"symbol"))===e){w=g.h(0,"entryAt")
o=A.bf(A.v(w==null?"":w))
if(g.h(0,"spot")!=null)n=D.c5(g.h(0,"spot"))
else n=t.b(g.h(0,"option"))?0:D.c5(g.h(0,"entryPrice"))
if(o!=null&&n>0&&!B.d.aR(k,new D.fOl(o,f)))k.push(new D.Rh(o,"In "+D.eh(n,!0,!1),f))}return k},
fFs(d){var w
switch(d){case"SPY":w=C.hWa
break
case"QQQ":w=C.hWf
break
case"AAPL":w=C.hWj
break
case"MSFT":w=C.hWe
break
case"NVDA":w=C.hW5
break
case"TSLA":w=C.hWd
break
case"AMZN":w=C.hWm
break
case"BTC/USD":w=C.hWb
break
case"ETH/USD":w=C.hW7
break
case"SOL/USD":w=C.hWh
break
default:w=new D.zc(d,d.length===0?"?":d[0],B.b1)
break}return w},
bF0(d,e){var w,v,u=null,t=d.split("/")
if(t.length===2&&C.a97.am(0,t[0])&&C.a97.am(0,t[1])){t=d.split("/")
w=new D.fAh(e)
return new A.a4(e*1.25,e,new A.am(B.a0,u,B.ab,B.t,A.a([A.ao(u,w.$1(t[0]),u,u,0,u,0,u),A.ao(0,w.$1(t[1]),u,u,u,0,u,u)],x.p),u),u)}v=D.fFs(d)
w=v.b
return A.q(B.z,A.c(w,u,u,u,u,u,u,A.l(u,u,B.c,u,u,u,u,u,u,u,u,w.length>1?e*0.32:e*0.52,u,u,B.u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),B.f,u,u,new A.p(v.c,u,u,u,u,u,B.a6),u,e,u,u,u,u,u,e)},
fFL(d){var w,v=x.g.a(d.h(0,"markets"))
if(v==null)v=B.bM
v=J.cL(v,x.f)
v=A.ct(v,new D.fFM(),v.$ti.k("M.E"),x.P)
w=A.B(v,A.a3(v).k("M.E"))
return w},
dF(d){var w=x.N,v=x.z
return x.f.b(d)?A.a0(d,w,v):A.S(w,v)},
c5(d){var w
if(typeof d=="number")w=d
else{w=A.cA(A.v(d==null?"":d))
if(w==null)w=0}return w},
bGo(d){var w=x.g.a(D.dF(J.t(d,"chart")).h(0,"points"))
if(w==null)w=B.bM
w=J.cL(w,x.f)
w=A.ct(w,new D.fK6(),w.$ti.k("M.E"),x.P)
w=A.B(w,A.a3(w).k("M.E"))
return w},
eh(d,e,f){var w,v=A.of(B.h.a1(Math.abs(d),2),A.ag("\\B(?=(\\d{3})+(?!\\d))",!0,!1,!1,!1),new D.fGS(),null)
if(d<0)w="-"
else w=f&&d>0?"+":""
return w+(e?"$":"")+v},
LV(d){var w=B.n.F(A.cY(d),12)===0?12:B.n.F(A.cY(d),12),v=B.a.aY(B.n.v(A.fx(d)),2,"0"),u=A.cY(d)<12?"AM":"PM"
return""+w+":"+v+" "+u},
SO(d){var w=d.aa(),v=new D.fOf(),u=v.$3(A.bD(w),3,2).bM(252e8),t=v.$3(A.bD(w),11,1).bM(216e8),s=w.bM(0-A.dw(0,!w.cY(u)&&w.cY(t)?4:5,0,0,0,0).a)
return A.c3(A.bD(s),A.bO(s),A.bX(s),A.cY(s),A.fx(s),0,0,0)},
aRM(d){var w,v,u,t=d==null,s=A.v(t?"":d).split("-")
if(s.length!==3)return A.v(t?"":d)
w=A.c9(s[1],null)
t=B.i6[B.n.D((w==null?1:w)-1,0,11)]
v=s[2]
u=A.c9(v,null)
return t+" "+A.v(u==null?v:u)+", "+s[0]},
hqP(d){var w,v=A.bf(A.v(d==null?"":d))
if(v==null)return""
w=D.SO(v)
return B.i6[A.bO(w)-1]+" "+A.bX(w)+" at "+D.LV(w)+" ET"},
hsJ(d){var w,v,u=d.split(", ")
if(u.length>=4){w=u[1]
v=u[3]
return w+", "+A.aD(v," ET","")}return d},
hL7(d){return d.length===0?d:d[0].toUpperCase()+B.a.aV(d,1)},
ivc(d){var w=B.a.c9(d,"(")
return B.a.i(w>0?B.a.av(d,0,w):d)},
hEj(d){return new D.P2(d,null)},
hJA(d){var w
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
hNM(){var w=D.SO(new A.W(Date.now(),0,!1).aa()),v=B.n.F(A.fx(w),5)
return"at "+D.LV(A.c3(A.bD(w),A.bO(w),A.bX(w),A.cY(w),A.fx(w),0,0,0).bM(A.dw(0,0,0,0,5-v,0).a))+" ET"},
ilG(d){if(B.a.Y(d,"ENTER UP"))return C.cI
if(B.a.Y(d,"ENTER DOWN"))return C.d6
if(B.a.q(d,"SKIP")||B.a.q(d,"TOO LATE"))return C.d6
if(B.a.Y(d,"MARKET CLOSED"))return B.bQ
return E.i1},
hOR(a9,b0,b1,b2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=null,a3="mom1h",a4=J.a1(b0),a5=D.dF(a4.h(b0,"reading")),a6=D.dF(a5.h(0,"timing")),a7=D.bGo(b0),a8=a4.h(b0,"asset")
if(a8==null)a8=a4.h(b0,"symbol")
w=J.k(a8==null?"":a8)
a8=a5.h(0,"action")
v=J.k(a8==null?"WAITING FOR DATA":a8)
u=D.ilG(v)
t=B.h.D(D.c5(a5.h(0,"score")),0,100)
a8=x.g.a(a5.h(0,"notes"))
if(a8==null)a8=B.bM
a8=J.b8(a8,new D.fL1(),x.N)
s=A.B(a8,a8.$ti.k("aj.E"))
r=D.c5(a4.h(b0,"changePct"))
a8=a9.a
q=a8?B.c.j(0.92):C.id
p=A.n(20)
o=B.a.Y(v,"ENTER")
if(o)n=u.j(0.6)
else n=a8?B.c:C.nf
n=A.K(n,B.r,o?1.6:1)
m=x.V
l=A.a([new A.ac(0,B.H,a9.gIt(),B.hS,14)],m)
k=D.bF0(w,28)
o=A.c(w,a2,a2,a2,a2,a2,a2,A.l(a2,a2,a8?C.cl:B.c,a2,a2,a2,a2,a2,a2,a2,a2,14,a2,a2,B.C,a2,a2,!0,a2,a2,a2,a2,a2,a2,a2,a2),a2,a2,a2)
j=a4.h(b0,"name")
j=J.k(j==null?"":j)
i=x.p
j=A.a([k,B.ar,A.E(A.w(A.a([o,A.c(j,a2,a2,a2,a2,a2,a2,A.l(a2,a2,a8?C.bT:C.bV,a2,a2,a2,a2,a2,a2,a2,a2,11,a2,a2,a2,a2,a2,!0,a2,a2,a2,a2,a2,a2,a2,a2),a2,a2,a2)],i),B.B,a2,B.e,B.i,0,B.p),1)],i)
if(a7.length>2)B.d.u(j,A.a([new A.a4(58,26,A.b4(a2,a2,a2,new D.bxD(a7,r>=0?C.cI:C.d6,a2),B.aB),a2),B.ar],i))
o=D.hOL(b0)
o=A.c(o,a2,a2,a2,a2,a2,a2,A.l(a2,a2,a8?C.cl:B.c,a2,a2,a2,a2,a2,a2,a2,a2,14,a2,a2,B.C,a2,a2,!0,a2,a2,a2,a2,a2,a2,a2,a2),a2,a2,a2)
k=r>=0
h=k?"+":""
g=B.h.a1(r,2)
f=J.z(a4.h(b0,"kind"),"forex")?"30m":"4h"
j.push(A.w(A.a([o,A.c(h+g+"% \xb7 "+f,a2,a2,a2,a2,a2,a2,A.l(a2,a2,k?C.cI:C.d6,a2,a2,a2,a2,a2,a2,a2,a2,11,a2,a2,B.O,a2,a2,!0,a2,a2,a2,a2,a2,a2,a2,a2),a2,a2,a2)],i),B.dr,a2,B.e,B.i,0,B.p))
o=A.a([A.A(j,B.l,a2,B.e,B.i,0,a2,a2)],i)
k=x.f
if(k.b(a4.h(b0,"v2")))B.d.u(o,A.a([B.af,D.iwO(a9,b0)],i))
else{j=A.a([],i)
if(k.b(a5.h(0,"entry"))){k=D.dF(a5.h(0,"entry"))
e=J.z(k.h(0,"dir"),"up")
d=e?C.cI:C.d6
a0=Math.max(1,B.h.S(D.c5(k.h(0,"candleMin"))))
h=A.n(18)
g=A.ap(d,B.v,0.25)
g.toString
g=A.a([d,g],x.O)
m=A.a([new A.ac(0,B.H,d.j(0.35),B.cy,16)],m)
f=B.c.j(0.22)
f=A.q(a2,A.V(e?B.p4:B.q7,B.c,a2,a2,a2,34),B.f,a2,a2,new A.p(f,a2,a2,a2,a2,a2,B.a6),a2,52,a2,a2,a2,a2,a2,52)
a1=A.c(e?"ENTER UP":"ENTER DOWN",a2,a2,a2,a2,a2,a2,C.fXH,a2,a2,a2)
B.d.u(j,A.a([B.af,A.q(a2,A.w(A.a([f,B.aj,a1,A.c(e?"BUY / CALL":"SELL / PUT",a2,a2,a2,a2,a2,a2,C.fPc,a2,a2,a2),B.S,new D.aDk(a0,a2),B.S,A.A(A.a([A.w(A.a([A.c(B.h.a1(D.c5(k.h(0,"durationMin")),0)+" min",a2,a2,a2,a2,a2,a2,B.jr,a2,a2,a2),A.c("Trade for",a2,a2,a2,a2,a2,a2,L.adm,a2,a2,a2)],i),B.l,a2,B.e,B.i,0,B.p),A.q(a2,a2,B.f,B.jX,a2,a2,a2,30,a2,B.rm,a2,a2,a2,1),A.w(A.a([A.c(A.v(k.h(0,"worked"))+" of "+A.v(k.h(0,"of")),a2,a2,a2,a2,a2,a2,B.jr,a2,a2,a2),A.c("Worked lately",a2,a2,a2,a2,a2,a2,L.adm,a2,a2,a2)],i),B.l,a2,B.e,B.i,0,B.p)],i),B.l,a2,B.bc,B.i,0,a2,a2)],i),B.l,a2,B.e,B.i,0,B.p),B.f,a2,a2,new A.p(a2,a2,a2,h,m,new A.a6(B.aV,B.b_,B.w,g,a2,a2),B.m),a2,a2,a2,a2,B.a2n,a2,a2,1/0)],i))}j.push(B.S)
m=u.j(0.15)
k=A.n(999)
k=A.a([A.q(a2,A.c(v,a2,a2,a2,a2,a2,a2,A.l(a2,a2,u,a2,a2,a2,a2,a2,a2,a2,a2,10.5,a2,a2,B.u,a2,a2,!0,a2,0.4,a2,a2,a2,a2,a2,a2),a2,a2,a2),B.f,a2,a2,new A.p(m,a2,a2,k,a2,a2,B.m),a2,a2,a2,a2,B.oc,a2,a2,a2),B.aY],i)
if(a5.h(0,"rsi")!=null){m=B.h.a1(D.c5(a5.h(0,"rsi")),0)
k.push(A.c("RSI "+m,a2,a2,a2,a2,a2,a2,A.l(a2,a2,a8?C.bT:C.bV,a2,a2,a2,a2,a2,a2,a2,a2,11,a2,a2,B.O,a2,a2,!0,a2,a2,a2,a2,a2,a2,a2,a2),a2,a2,a2))}if(a5.h(0,a3)!=null){m=D.c5(a5.h(0,a3))>=0?"+":""
h=B.h.a1(D.c5(a5.h(0,a3)),2)
B.d.u(k,A.a([B.ar,A.c("1h "+m+h+"%",a2,a2,a2,a2,a2,a2,A.l(a2,a2,D.c5(a5.h(0,a3))>=0?C.cI:C.d6,a2,a2,a2,a2,a2,a2,a2,a2,11,a2,a2,B.O,a2,a2,!0,a2,a2,a2,a2,a2,a2,a2,a2),a2,a2,a2)],i))}j.push(A.A(k,B.l,a2,B.e,B.i,0,a2,a2))
j.push(B.S)
j.push(A.cg(new D.fL2(t,a9)))
j.push(B.at)
m=A.c("Sellers",a2,a2,a2,a2,a2,a2,A.l(a2,a2,a8?C.bT:C.bV,a2,a2,a2,a2,a2,a2,a2,a2,10,a2,a2,a2,a2,a2,!0,a2,a2,a2,a2,a2,a2,a2,a2),a2,a2,a2)
k=B.h.a1(t,0)
k=A.c("Strength "+k+"/100",a2,a2,a2,a2,a2,a2,A.l(a2,a2,a8?C.cl:B.c,a2,a2,a2,a2,a2,a2,a2,a2,10.5,a2,a2,B.C,a2,a2,!0,a2,a2,a2,a2,a2,a2,a2,a2),a2,a2,a2)
j.push(A.A(A.a([m,B.aY,k,B.aY,A.c("Buyers",a2,a2,a2,a2,a2,a2,A.l(a2,a2,a8?C.bT:C.bV,a2,a2,a2,a2,a2,a2,a2,a2,10,a2,a2,a2,a2,a2,!0,a2,a2,a2,a2,a2,a2,a2,a2),a2,a2,a2)],i),B.l,a2,B.e,B.i,0,a2,a2))
j.push(B.N)
m=J.z(a4.h(b0,"open"),!0)?A.cJ(s,1,a2,A.T(s).c):s
m=J.Ei(m,b1?2:99)
k=m.$ti
m=new A.bQ(m,m.gI(0),k.k("bQ<aj.E>"))
k=k.k("aj.E")
while(m.B()){h=m.d
if(h==null)h=k.a(h)
g=A.V(B.np,u,a2,a2,a2,4.5)
f=a8?C.cl:B.c
j.push(new A.C(B.kN,new A.c_(B.aJ,B.e,B.i,B.B,a2,B.p,a2,0,A.a([new A.C(B.hA,g,a2),H.wm,new A.bu(1,B.b9,A.c(h,a2,a2,a2,a2,a2,a2,new A.F(!0,f,a2,a2,a2,a2,12.3,a2,a2,a2,a2,a2,1.35,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2),a2,a2,a2),a2)],i),a2),a2))}if(J.z(a4.h(b0,"open"),!0))B.d.u(j,A.a([B.S,D.io4(a9,a5,a6)],i))
B.d.u(o,j)}if(b2!=null)o.push(new A.bJ(B.a9,a2,a2,A.hy(C.bZx,A.c("Ask the tutor about "+w,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2),b2,a2),a2))
return A.q(a2,A.w(o,B.B,a2,B.e,B.i,0,B.p),B.f,a2,a2,new A.p(q,a2,n,p,l,a2,B.m),a2,a2,a2,B.d3,B.bD,a2,a2,a2)},
iwO(a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1="activeSignal",a2=null,a3="explain",a4=J.a1(b0),a5=D.dF(a4.h(b0,"v2")),a6=x.f,a7=a6.b(a4.h(b0,a1))?D.dF(a4.h(b0,a1)):a2,a8=J.z(a4.h(b0,"open"),!0)
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
if(s)q=C.cI
else q=t==="SELL"?C.d6:B.bQ
p=a4?a2:a7.h(0,"checks")
if(p==null)p=a5.h(0,"checks")
x.g.a(p)
a6=J.cL(p==null?B.bM:p,a6)
a6=A.ct(a6,new D.fOM(),a6.$ti.k("M.E"),x.P)
o=A.B(a6,A.a3(a6).k("M.E"))
n=u?5:B.h.M(D.c5(a5.h(0,"passed")))
a6=a4?a2:a7.h(0,"grade_at")
m=A.bf(A.v(a6==null?"":a6))
a4=a4?a2:a7.h(0,"created_at")
l=A.bf(A.v(a4==null?"":a4))
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
if(u&&l!=null&&m!=null)B.d.u(i,A.a([B.S,new D.aLo(l,m,s,a2)],f))
i.push(B.at)
i.push(C.h9O)
if(u&&m!=null){u=D.LV(D.SO(m.aa()))
s=s?"higher":"lower"
i.push(A.c("Graded at "+u+" ET, 30 minutes after it was given: WIN if the price finished "+s+".",a2,a2,a2,a2,a2,a2,A.l(a2,a2,g?C.bT:C.bV,a2,a2,a2,a2,a2,a2,a2,a2,11,a2,a2,a2,a2,1.3,!0,a2,a2,a2,a2,a2,a2,a2,a2),a2,a2,a2))}i.push(B.N)
i.push(A.c(k,a2,a2,a2,a2,a2,a2,A.l(a2,a2,g?C.cl:B.c,a2,a2,a2,a2,a2,a2,a2,a2,12.3,a2,a2,a2,a2,1.35,!0,a2,a2,a2,a2,a2,a2,a2,a2),a2,a2,a2))
i.push(B.N)
for(u=o.length,e=0;e<o.length;o.length===u||(0,A.I)(o),++e){d=o[e]
s=J.a1(d)
j=J.z(s.h(d,"ok"),!0)?B.e9:B.It
j=A.V(j,J.z(s.h(d,"ok"),!0)?C.cI:C.d6,a2,a2,a2,15)
h=J.z(s.h(d,"ok"),!0)?"Yes":"No"
s=s.h(d,"text")
s=A.v(s==null?"":s)
a0=g?C.cl:B.c
i.push(new A.C(B.kN,new A.c_(B.aJ,B.e,B.i,B.B,a2,B.p,a2,0,A.a([j,B.b6,new A.bu(1,B.b9,A.c(h+" \u2014 "+s,a2,a2,a2,a2,a2,a2,new A.F(!0,a0,a2,a2,a2,a2,11.8,a2,a2,a2,a2,a2,1.3,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2),a2,a2,a2),a2)],f),a2),a2))}return A.q(a2,A.w(i,B.B,a2,B.e,B.i,0,B.p),B.f,a2,a2,new A.p(a4,a2,p,a6,a2,a2,B.m),a2,a2,a2,a2,B.bg,a2,a2,1/0)},
fju(d){var w=d.a,v=w<0?0:B.n.ao(w,1e6)
return""+B.n.ao(v,60)+":"+B.a.aY(B.n.v(B.n.F(v,60)),2,"0")},
io4(a4,a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e="dir",d="typicalMin",a0="entry",a1=a5.h(0,"decision"),a2=J.k(a1==null?"NO_DIRECTION":a1),a3=J.z(a5.h(0,e),"up")
a1=x.g.a(a5.h(0,"notes"))
if(a1==null)a1=B.bM
a1=J.b8(a1,new D.fB7(),x.N)
w=A.B(a1,a1.$ti.k("aj.E"))
A:{if("ENTER"===a2){a1=a3?C.cI:C.d6
break A}if("SKIP_WEAK"===a2||"WAIT_LATE"===a2){a1=C.d6
break A}a1=E.i1
break A}v=a6.h(0,d)!=null&&a6.h(0,e)!=null&&!J.z(a6.h(0,e),"none")&&a2!=="NO_DIRECTION"&&a2!=="CLOSED"
u=D.c5(a6.h(0,"of"))
t=D.c5(a6.h(0,"worked"))
s=u>0
r=s?t/u:0
q=J.z(a6.h(0,e),"up")?"up":"down"
p=a4.a
o=p?C.r6:C.r7
n=A.n(16)
m=A.K(a1.j(0.55),B.r,1.5)
l=A.V(B.mG,p?C.cl:B.c,f,f,f,16)
k=x.p
l=A.A(A.a([l,B.b6,A.c("DECISION AND DURATION",f,f,f,f,f,f,A.l(f,f,p?C.cl:B.c,f,f,f,f,f,f,f,f,11.5,f,f,B.u,f,f,!0,f,1,f,f,f,f,f,f),f,f,f)],k),B.l,f,B.e,B.i,0,f,f)
j=a1.j(0.14)
i=A.n(10)
h=a5.h(0,"action")
h=A.a([A.c(J.k(h==null?"":h),f,f,f,f,f,f,A.l(f,f,a1,f,f,f,f,f,f,f,f,13,f,f,B.u,f,f,!0,f,f,f,f,f,f,f,f),f,f,f)],k)
if(w.length!==0){g=B.d.gH(w)
B.d.u(h,A.a([B.cR,A.c(g,f,f,f,f,f,f,A.l(f,f,p?C.cl:B.c,f,f,f,f,f,f,f,f,12.3,f,f,f,f,1.35,!0,f,f,f,f,f,f,f,f),f,f,f)],k))}l=A.a([l,B.N,A.q(f,A.w(h,B.B,f,B.e,B.i,0,B.p),B.f,f,f,new A.p(j,f,f,i,f,f,B.m),f,f,f,f,B.iR,f,f,1/0)],k)
if(a2==="ENTER"&&x.f.b(a5.h(0,a0)))B.d.u(l,A.a([B.N,A.A(A.a([A.E(D.hLS(a4,"Trade for",B.h.a1(D.c5(D.dF(a5.h(0,a0)).h(0,"durationMin")),0)+" min",a1),1),A.E(D.hLS(a4,"Enter at","next "+B.h.a1(D.c5(D.dF(a5.h(0,a0)).h(0,"candleMin")),0)+"-min candle",f),1)],k),B.l,f,B.e,B.i,0,f,f)],k))
if(v){a1=A.c("What this is based on",f,f,f,f,f,f,A.l(f,f,p?C.bT:C.bV,f,f,f,f,f,f,f,f,10.5,f,f,B.C,f,f,!0,f,f,f,f,f,f,f,f),f,f,f)
j=D.hqT(a4,B.fR,"This "+q+" move started "+B.h.a1(D.c5(a6.h(0,"ageMin")),0)+" min ago.",f)
i=q==="up"?"Up":"Down"
k=A.a([B.S,a1,B.at,j,D.hqT(a4,B.ats,i+" moves on this market usually end after about "+B.h.a1(D.c5(a6.h(0,d)),0)+" min.",f)],k)
if(s){a1=B.h.a1(u,0)
s=B.h.a1(t,0)
j=B.h.S(r*100)
i=r>=0.5
h=i?"Reliable enough.":"Under half: unreliable."
i=i?C.cI:C.d6
k.push(D.hqT(a4,B.q8,"Of the last "+a1+" "+q+" moves here, "+s+" really went "+q+" ("+j+"%). "+h,i))}B.d.u(l,k)}l.push(B.at)
l.push(A.c("Estimates from this market's recent moves, not promises.",f,f,f,f,f,f,A.l(f,f,p?C.bT:C.bV,f,f,f,f,f,f,f,f,10.5,f,f,f,f,f,!0,f,f,f,f,f,f,f,f),f,f,f))
return A.q(f,A.w(l,B.B,f,B.e,B.i,0,B.p),B.f,f,f,new A.p(o,f,m,n,f,f,B.m),f,f,f,f,B.bg,f,f,1/0)},
hqT(d,e,f,g){var w,v=null,u=g==null
if(u)w=d.a?C.bT:C.bV
else w=g
w=A.V(e,w,v,v,v,14)
if(u)u=d.a?C.cl:B.c
else u=g
return new A.C(B.HN,A.A(A.a([w,B.b6,A.E(A.c(f,v,v,v,v,v,v,A.l(v,v,u,v,v,v,v,v,v,v,v,12,v,v,v,v,1.35,!0,v,v,v,v,v,v,v,v),v,v,v),1)],x.p),B.B,v,B.e,B.i,0,v,v),v)},
hLS(d,e,f,g){var w=null,v=d.a,u=A.c(e,w,w,w,w,w,w,A.l(w,w,v?C.bT:C.bV,w,w,w,w,w,w,w,w,10.5,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)
if(g==null)v=v?C.cl:B.c
else v=g
return A.w(A.a([u,A.c(f,w,w,w,w,w,w,A.l(w,w,v,w,w,w,w,w,w,w,w,13.5,w,w,B.C,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),B.B,w,B.e,B.i,0,B.p)},
hOL(d){var w=J.a1(d),v=D.c5(w.h(d,"price"))
if(!J.z(w.h(d,"kind"),"forex"))return D.eh(v,!0,!1)
return B.h.a1(v,v>=100?3:5)},
hnw(d,e){return new D.Y6(d,e,null)},
hK6(){var w=Math.max(0,$.aMX-1)
$.aMX=w
if(w===0){B.d.a7($.DL)
$.ahQ=!1
$.hqc=""
$.fse=$.fse+1}},
eM7(d){var w
x.g.a(d)
w=d==null?B.bM:d
w=J.cL(w,x.f)
w=A.ct(w,new D.eM8(),w.$ti.k("M.E"),x.P)
w=A.B(w,A.a3(w).k("M.E"))
return w},
hJB(d){var w=J.t(d,"kind")
switch(J.k(w==null?"":w)){case"forex":w="Forex"
break
case"crypto":w="Crypto"
break
default:w="Stocks"
break}return w},
auE:function auE(d){this.a=d},
aIe:function aIe(d,e){var _=this
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
eLe:function eLe(d){this.a=d},
eLf:function eLf(d){this.a=d},
eKv:function eKv(d,e){this.a=d
this.b=e},
eKM:function eKM(d,e){this.a=d
this.b=e},
eKx:function eKx(d,e){this.a=d
this.b=e},
eKL:function eKL(d,e){this.a=d
this.b=e},
eKO:function eKO(d,e){this.a=d
this.b=e},
eKP:function eKP(d,e){this.a=d
this.b=e},
eKu:function eKu(){},
eKw:function eKw(d,e,f){this.a=d
this.b=e
this.c=f},
eKX:function eKX(){},
eKV:function eKV(d){this.a=d},
eKW:function eKW(d){this.a=d},
eKY:function eKY(d,e){this.a=d
this.b=e},
eKZ:function eKZ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eKE:function eKE(d){this.a=d},
eKR:function eKR(d){this.a=d},
eKS:function eKS(d,e){this.a=d
this.b=e},
eKT:function eKT(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eKQ:function eKQ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eKU:function eKU(){},
eLd:function eLd(d){this.a=d},
eL8:function eL8(d){this.a=d},
eL9:function eL9(d){this.a=d},
eKi:function eKi(d){this.a=d},
eKj:function eKj(d){this.a=d},
eKk:function eKk(d){this.a=d},
eKl:function eKl(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eKg:function eKg(d){this.a=d},
eKh:function eKh(d,e){this.a=d
this.b=e},
eKm:function eKm(d){this.a=d},
eKn:function eKn(d){this.a=d},
eL4:function eL4(){},
eL5:function eL5(){},
eL6:function eL6(){},
eL7:function eL7(){},
eL0:function eL0(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eL_:function eL_(d){this.a=d},
eL3:function eL3(d,e){this.a=d
this.b=e},
eL2:function eL2(d){this.a=d},
eKz:function eKz(){},
eKA:function eKA(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eKB:function eKB(d){this.a=d},
eKD:function eKD(){},
eKC:function eKC(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
eKy:function eKy(d,e){this.a=d
this.b=e},
eKq:function eKq(d,e){this.a=d
this.b=e},
eKp:function eKp(d,e){this.a=d
this.b=e},
eKr:function eKr(d){this.a=d},
eKo:function eKo(d){this.a=d},
eKs:function eKs(){},
eKe:function eKe(d){this.a=d},
eKf:function eKf(){},
eKG:function eKG(){},
eKH:function eKH(){},
eKI:function eKI(){},
eKF:function eKF(){},
eKJ:function eKJ(d,e,f){this.a=d
this.b=e
this.c=f},
eKK:function eKK(d){this.a=d},
eKN:function eKN(d,e){this.a=d
this.b=e},
eKt:function eKt(d,e){this.a=d
this.b=e},
eKd:function eKd(d){this.a=d},
eLb:function eLb(){},
eLc:function eLc(d){this.a=d},
eLa:function eLa(d){this.a=d},
eKc:function eKc(d){this.a=d},
eKb:function eKb(d){this.a=d},
Rh:function Rh(d,e,f){this.a=d
this.c=e
this.d=f},
fOl:function fOl(d,e){this.a=d
this.b=e},
a_Z:function a_Z(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
bfA:function bfA(){this.c=this.a=this.d=null},
cYF:function cYF(d,e){this.a=d
this.b=e},
cYO:function cYO(d){this.a=d},
cYM:function cYM(d,e){this.a=d
this.b=e},
cYK:function cYK(d,e){this.a=d
this.b=e},
cYL:function cYL(d,e){this.a=d
this.b=e},
cYJ:function cYJ(d){this.a=d},
cYI:function cYI(d){this.a=d},
cYN:function cYN(d){this.a=d},
cYH:function cYH(d){this.a=d},
cYG:function cYG(d){this.a=d},
bfB:function bfB(d,e,f,g,h,i,j,k,l){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.w=j
_.x=k
_.a=l},
cYP:function cYP(d){this.a=d},
cYR:function cYR(d,e){this.a=d
this.b=e},
cYQ:function cYQ(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
bxD:function bxD(d,e,f){this.b=d
this.c=e
this.a=f},
flH:function flH(){},
zc:function zc(d,e,f){this.a=d
this.b=e
this.c=f},
fAh:function fAh(d){this.a=d},
fFM:function fFM(){},
RN:function RN(d){this.a=d},
fK6:function fK6(){},
fGS:function fGS(){},
fOf:function fOf(){},
P2:function P2(d,e){this.c=d
this.a=e},
aH9:function aH9(d){var _=this
_.d=null
_.e=d
_.f=!0
_.r=!1
_.x=_.w=null
_.Q=_.z=_.y=!1
_.c=_.a=_.as=null},
eaQ:function eaQ(d){this.a=d},
eai:function eai(d,e){this.a=d
this.b=e},
eah:function eah(){},
eax:function eax(d,e,f){this.a=d
this.b=e
this.c=f},
eaw:function eaw(){},
eaD:function eaD(d,e){this.a=d
this.b=e},
eaE:function eaE(d,e,f){this.a=d
this.b=e
this.c=f},
eaO:function eaO(d){this.a=d},
eaP:function eaP(d){this.a=d},
eab:function eab(d,e){this.a=d
this.b=e},
eau:function eau(){},
eav:function eav(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eaf:function eaf(d){this.a=d},
eag:function eag(){},
eac:function eac(){},
ead:function ead(d){this.a=d},
eae:function eae(d,e){this.a=d
this.b=e},
eao:function eao(){},
eaB:function eaB(d){this.a=d},
eaC:function eaC(d){this.a=d},
eaz:function eaz(){},
eaA:function eaA(d){this.a=d},
eal:function eal(){},
ean:function ean(){},
eam:function eam(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eak:function eak(d,e){this.a=d
this.b=e},
eaj:function eaj(d,e){this.a=d
this.b=e},
ea9:function ea9(){},
eaa:function eaa(){},
eaF:function eaF(d){this.a=d},
ear:function ear(){},
eas:function eas(d,e,f){this.a=d
this.b=e
this.c=f},
eat:function eat(d){this.a=d},
eaq:function eaq(d){this.a=d},
eap:function eap(d){this.a=d},
eaM:function eaM(){},
eaN:function eaN(d){this.a=d},
eaL:function eaL(d){this.a=d},
eaK:function eaK(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
eaH:function eaH(){},
eaJ:function eaJ(){},
eaI:function eaI(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
eaG:function eaG(d){this.a=d},
ea8:function ea8(d){this.a=d},
ea7:function ea7(d){this.a=d},
eay:function eay(){},
aBZ:function aBZ(d,e,f){this.c=d
this.d=e
this.a=f},
bgh:function bgh(){this.c=this.a=this.d=null},
dbF:function dbF(d){this.a=d},
dbE:function dbE(){},
fL1:function fL1(){},
fL2:function fL2(d,e){this.a=d
this.b=e},
fOM:function fOM(){},
aLo:function aLo(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bwZ:function bwZ(){this.c=this.a=this.d=null},
fjx:function fjx(d){this.a=d},
fjw:function fjw(){},
fjv:function fjv(){},
aDk:function aDk(d,e){this.c=d
this.a=e},
bj9:function bj9(){this.c=this.a=this.d=null},
dkE:function dkE(d){this.a=d},
dkD:function dkD(){},
fB7:function fB7(){},
cI:function cI(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
uF:function uF(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
Y6:function Y6(d,e,f){this.c=d
this.d=e
this.a=f},
a04:function a04(d,e){this.a=d
this.b=e},
aIf:function aIf(d,e,f,g,h,i,j,k,l){var _=this
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
_.bw$=k
_.ab$=l
_.c=_.a=null},
eLp:function eLp(){},
eMd:function eMd(d){this.a=d},
eMc:function eMc(){},
eMe:function eMe(d){this.a=d},
eMf:function eMf(d){this.a=d},
eMb:function eMb(d,e){this.a=d
this.b=e},
eMg:function eMg(d){this.a=d},
eM8:function eM8(){},
eLK:function eLK(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eLT:function eLT(d){this.a=d},
eLs:function eLs(d){this.a=d},
eLt:function eLt(d,e){this.a=d
this.b=e},
eLu:function eLu(d){this.a=d},
eLv:function eLv(d){this.a=d},
eLr:function eLr(d,e){this.a=d
this.b=e},
eLq:function eLq(d,e){this.a=d
this.b=e},
eLS:function eLS(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eLR:function eLR(){},
eM5:function eM5(){},
eM6:function eM6(){},
eLy:function eLy(d){this.a=d},
eLz:function eLz(){},
eLA:function eLA(){},
eLl:function eLl(d,e){this.a=d
this.b=e},
eLm:function eLm(){},
eLn:function eLn(){},
eLo:function eLo(){},
eLU:function eLU(d){this.a=d},
eM9:function eM9(d){this.a=d},
eMa:function eMa(d,e){this.a=d
this.b=e},
eLx:function eLx(d){this.a=d},
eLw:function eLw(d,e){this.a=d
this.b=e},
eLQ:function eLQ(d,e){this.a=d
this.b=e},
eLM:function eLM(d,e){this.a=d
this.b=e},
eLN:function eLN(d,e){this.a=d
this.b=e},
eLL:function eLL(d,e,f){this.a=d
this.b=e
this.c=f},
eLO:function eLO(d,e){this.a=d
this.b=e},
eLP:function eLP(d){this.a=d},
eLB:function eLB(d,e,f){this.a=d
this.b=e
this.c=f},
eLJ:function eLJ(d){this.a=d},
eLC:function eLC(){},
eLD:function eLD(){},
eLE:function eLE(){},
eLF:function eLF(){},
eLG:function eLG(){},
eLH:function eLH(){},
eLI:function eLI(){},
eLZ:function eLZ(d,e){this.a=d
this.b=e},
eM_:function eM_(){},
eM1:function eM1(d,e){this.a=d
this.b=e},
eLY:function eLY(d,e){this.a=d
this.b=e},
eM0:function eM0(d){this.a=d},
eM2:function eM2(d){this.a=d},
eLX:function eLX(d){this.a=d},
eM3:function eM3(d){this.a=d},
eLW:function eLW(d,e){this.a=d
this.b=e},
eM4:function eM4(d,e){this.a=d
this.b=e},
eLV:function eLV(){},
eLh:function eLh(d){this.a=d},
eLi:function eLi(d,e){this.a=d
this.b=e},
eLg:function eLg(d,e){this.a=d
this.b=e},
eLj:function eLj(d,e){this.a=d
this.b=e},
eLk:function eLk(d){this.a=d},
a18:function a18(d,e,f,g,h,i,j,k,l,m){var _=this
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
bmk:function bmk(d){var _=this
_.x=_.w=_.r=_.f=_.e=_.d=$
_.y=d
_.c=_.a=_.z=null},
dxg:function dxg(){},
dxh:function dxh(){},
dxe:function dxe(){},
dxf:function dxf(){},
dxc:function dxc(d){this.a=d},
dxd:function dxd(d){this.a=d},
dxb:function dxb(d){this.a=d},
dx4:function dx4(){},
dx5:function dx5(){},
dx6:function dx6(d){this.a=d},
dx7:function dx7(d){this.a=d},
dx2:function dx2(d,e,f){this.a=d
this.b=e
this.c=f},
dx8:function dx8(d){this.a=d},
dx9:function dx9(d,e){this.a=d
this.b=e},
dxa:function dxa(d,e){this.a=d
this.b=e},
dx3:function dx3(d,e,f){this.a=d
this.b=e
this.c=f},
aQj:function aQj(){}},C,L,M,T,U,V,F,N,O,W,X
J=c[1]
A=c[0]
B=c[2]
P=c[126]
Q=c[213]
E=c[252]
H=c[149]
R=c[186]
I=c[240]
S=c[154]
G=c[251]
K=c[211]
D=a.updateHolder(c[21],D)
C=c[250]
L=c[151]
M=c[255]
T=c[127]
U=c[158]
V=c[254]
F=c[238]
N=c[48]
O=c[253]
W=c[196]
X=c[134]
D.auE.prototype={
R(){return new D.aIe(A.a([],x.t),A.m2(0,null,null))}}
D.aIe.prototype={
Z(){var w=this
w.a4()
$.aMX=$.aMX+1
w.a.toString
w.afs()
w.Bo()
w.z8(!1).bC(new D.eLe(w),x.H)
w.ch=A.d5(B.o6,new D.eLf(w))},
Bo(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m
var $async$Bo=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.aB(),$async$Bo)
case 7:q=e
p=A.aV(J.t(q.a,"ngmy_signal_grid_status_cache"))
if(p==null||r.c==null||r.d!=null){w=1
break}o=A.a0(x.f.a(B.T.aN(0,p,null)),x.N,x.z)
r.l(new D.eKv(r,o))
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
return A.i($async$Bo,v)},
a3Y(d){return this.cAE(d)},
cAE(d){var w=0,v=A.j(x.H),u=1,t=[],s,r,q
var $async$a3Y=A.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:u=3
w=6
return A.b(A.aB(),$async$a3Y)
case 6:s=f
w=7
return A.b(s.aB("String","ngmy_signal_grid_status_cache",B.T.au(d,null)),$async$a3Y)
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
return A.i($async$a3Y,v)},
t(){var w=this.ch
if(w!=null)w.a2(0)
this.as.t()
D.hK6()
this.a3()},
ctl(d){var w=this
if(!w.at&&d>0){w.at=!0
$.aS.U$.push(new D.eKM(w,d))}return w.as},
afs(){var w=0,v=A.j(x.H),u=1,t=[],s=this,r,q,p,o
var $async$afs=A.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:u=3
w=6
return A.b(A.aB(),$async$afs)
case 6:r=e
q=A.aV(J.t(r.a,"ngmy_signal_grid_market"))
if(q!=null&&q.length!==0&&s.c!=null&&s.Q==null)s.l(new D.eKx(s,q))
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
return A.i($async$afs,v)},
a2Q(d){return this.csT(d)},
csT(d){var w=0,v=A.j(x.H),u=1,t=[],s=this,r,q,p
var $async$a2Q=A.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:s.l(new D.eKL(s,d))
u=3
w=6
return A.b(A.aB(),$async$a2Q)
case 6:r=f
w=7
return A.b(r.aB("String","ngmy_signal_grid_market",d),$async$a2Q)
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
return A.i($async$a2Q,v)},
z8(d){return this.cyd(d)},
cyd(d){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$z8=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.x?null:t.bWD()
w=3
return A.b(A.fJ(A.J(["action","paStatus","live",d],x.N,x.z),!1,!1,!1,!1,B.x8),$async$z8)
case 3:q=f
if(t.c==null){w=1
break}t.l(new D.eKO(t,q))
if(q!=null&&J.z(J.t(q,"ok"),!0))t.a3Y(q)
w=r!=null?4:5
break
case 4:w=6
return A.b(r,$async$z8)
case 6:s=f
if(t.c!=null&&s!=null&&t.d!=null)t.l(new D.eKP(t,s))
case 5:case 1:return A.h(u,v)}})
return A.i($async$z8,v)},
ZJ(d){return this.bWE(d)},
bWD(){return this.ZJ(0)},
bWE(d){var w=0,v=A.j(x.i),u,t,s
var $async$ZJ=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(A.fJ(A.J(["action","paLog","limit",30,"beforeId",d],x.N,x.z),!1,!1,!1,!1,B.he),$async$ZJ)
case 3:s=f
if(s==null||!J.z(J.t(s,"ok"),!0)){u=null
w=1
break}t=x.g.a(J.t(s,"rows"))
if(t==null)t=B.bM
t=J.cL(t,x.f)
t=A.ct(t,new D.eKu(),t.$ti.k("M.E"),x.P)
t=A.B(t,A.a3(t).k("M.E"))
u=t
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$ZJ,v)},
a_H(d){return this.c8X(d)},
c8W(){return this.a_H(!1)},
c8X(d){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a_H=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=d&&J.cM(t.e)?J.t(J.TC(t.e),"id"):0
w=3
return A.b(t.ZJ(s==null?0:s),$async$a_H)
case 3:r=f
if(t.c==null||r==null){w=1
break}t.l(new D.eKw(t,d,r))
case 1:return A.h(u,v)}})
return A.i($async$a_H,v)},
zu(d){return this.cDc(d)},
cDc(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$zu=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:p=t.d
o=D.dF(p==null?null:J.t(p,"state"))
w=d&&J.z(o.h(0,"brakePaused"),!0)?3:4
break
case 3:p=t.c
p.toString
w=5
return A.b(A.cf(null,null,!0,null,new D.eKX(),p,null,!0,!0,x.y),$async$zu)
case 5:if(f!==!0){w=1
break}case 4:s=t.d
t.l(new D.eKY(t,d))
w=6
return A.b(A.fJ(A.J(["action","paSet","enabled",d],x.N,x.z),!1,!1,!1,!1,B.he),$async$zu)
case 6:r=f
if(t.c==null){w=1
break}p=r==null
q=J.z(p?null:J.t(r,"ok"),!0)
t.l(new D.eKZ(t,q,r,s))
if(q)p=d?"Agent started.":"Agent stopped."
else{p=p?null:J.t(r,"error")
p=J.k(p==null?"Could not change it.":p)}t.b4G(p,q?C.cI:C.d6)
if(q)t.c8W()
case 1:return A.h(u,v)}})
return A.i($async$zu,v)},
cnJ(){var w=this.c
w.toString
A.a7(w,!1).ca(A.e4(new D.eKE(this),!1,null,x.H))},
a49(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$a49=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t.l(new D.eKR(t))
w=3
return A.b(A.fJ(A.J(["action","paCheck"],x.N,x.z),!1,!1,!1,!1,B.o6),$async$a49)
case 3:s=e
if(t.c==null){w=1
break}t.l(new D.eKS(t,s))
r=s==null
if(!J.z(r?null:J.t(s,"ok"),!0)){r=r?null:J.t(s,"error")
t.b4G(J.k(r==null?"The check did not finish.":r),C.d6)
w=1
break}r=t.c
r.toString
r=A.Q(r).ax.a===B.dg
s.toString
q=D.dF(D.dF(J.t(s,"state")).h(0,"snapshot"))
p=t.c
p.toString
o=r?C.te:C.tc
w=4
return A.b(A.bV(o,null,new D.eKT(t,new D.RN(r),q,s),p,!0,!0,!0,B.aVp,!1,!1,x.H),$async$a49)
case 4:case 1:return A.h(u,v)}})
return A.i($async$a49,v)},
cBl(d,e,f,g){var w,v,u,t,s,r=null,q=D.fFL(e)
B.d.b_(q,new D.eKU())
w=d.a
v=w?C.oT:C.oO
v=A.at(A.q(r,r,B.f,r,r,new A.p(v,r,r,A.n(9),r,r,B.m),r,4,r,r,r,r,r,40),r,r,r)
u=A.c("What the agent sees right now",r,r,r,r,r,r,A.l(r,r,w?C.cl:B.c,r,r,r,r,r,r,r,r,19,r,r,B.u,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
t=J.z(f.h(0,"enabled"),!0)?" (next one "+D.hNM()+")":" (the agent is stopped, so none will be made)"
v=A.a([v,B.az,u,B.at,A.c("Check now only looks. It never buys or sells. Trades are made only by the automatic check every 5 minutes"+t+".",r,r,r,r,r,r,A.l(r,r,w?C.bT:C.bV,r,r,r,r,r,r,r,r,12.5,r,r,r,r,1.35,!0,r,r,r,r,r,r,r,r),r,r,r),B.af],x.p)
for(w=q.length,s=0;s<q.length;q.length===w||(0,A.I)(q),++s)v.push(D.hOR(d,q[s],!0,r))
return A.ck(v,g,r,B.aoH,r,r,B.ah,!1)},
b4G(d,e){var w=null
this.c.L(x.q).f.T(A.b2(w,w,w,e,w,B.t,w,A.c(d,w,w,w,w,w,w,w,w,w,w),w,B.Z,w,w,w,w,w,w,w,w,w,w))},
C(d){var w,v=this,u=null,t=A.Q(d).ax.a===B.dg,s=new D.RN(t),r=t?C.te:C.tc,q=t?C.te:C.tc
q=A.a([q,t?C.Om:C.Oe],x.O)
w=v.cii(s)
if(v.f)t=B.l3
else{if(v.d==null){t=v.ay
t=A.a([v.abB(s,t==null?"Nothing to show yet.":t,B.b1)],x.p)}else t=v.bJZ(0,s)
t=A.Gn(A.ck(t,u,u,C.aoX,u,u,B.ah,!1),u,new D.eLd(v))}return A.c6(u,r,A.q(u,A.bn(!0,A.w(A.a([w,A.E(t,1)],x.p),B.l,u,B.e,B.i,0,B.p),!0,!1,B.ag,!0,!0),B.f,u,u,new A.p(u,u,u,u,u,new A.a6(B.aV,B.b_,B.w,q,u,u),B.m),u,u,u,u,u,u,u,u),u,!1,!1,u,u)},
cii(d){var w,v,u,t,s,r=this,q=null,p=r.d,o=D.dF(p==null?q:J.t(p,"state")),n=J.z(o.h(0,"brakePaused"),!0),m=J.z(o.h(0,"enabled"),!0)&&!n
p=r.b4E(d,B.eH,new D.eL8(r))
w=d.a
v=x.p
u=A.a([A.c("Signal Grid",q,1,B.a2,q,q,q,A.l(q,q,w?C.cl:B.c,q,q,q,q,q,q,q,q,17,q,q,B.C,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],v)
if(r.d==null)u.push(A.c("Trading agent",q,1,B.a2,q,q,q,A.l(q,q,w?C.bT:C.bV,q,q,q,q,q,q,q,q,11.5,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q))
else{if(n)t=C.d6
else if(m)t=C.cI
else t=w?C.bT:C.bV
t=A.V(B.np,t,q,q,q,7)
if(n)s="Paused"
else s=m?"Running":"Stopped"
if(n)w=C.d6
else if(m)w=C.cI
else w=w?C.bT:C.bV
u.push(A.A(A.a([t,B.da,new A.d_(1,B.c8,A.c(s,q,1,B.a2,q,q,q,A.l(q,q,w,q,q,q,q,q,q,q,q,11.5,q,q,B.C,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),q)],v),B.l,q,B.e,B.P,0,q,q))}p=A.a([p,B.ar,A.E(A.A(A.a([new A.d_(1,B.c8,A.w(u,B.B,q,B.e,B.i,0,B.p),q)],v),B.l,q,B.e,B.i,0,q,q),1)],v)
if(r.d!=null)B.d.u(p,A.a([B.aa,r.bd3(d,"options","Options",B.fQ,B.aA),B.aa,r.bd3(d,"scalper","Scalper",B.rx,B.as)],v))
p.push(B.aa)
p.push(r.b4E(d,B.mF,r.r?q:new D.eL9(r)))
return new A.C(B.h1,A.A(p,B.l,q,B.e,B.i,0,q,q),q)},
bJZ(c4,c5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9=this,c0=null,c1="asset",c2="liveError",c3=b9.d
c3.toString
w=J.a1(c3)
v=D.dF(w.h(c3,"state"))
u=D.dF(w.h(c3,"config"))
t=D.dF(v.h(0,"snapshot"))
s=x.f
r=s.b(v.h(0,"shadow"))?D.dF(v.h(0,"shadow")):c0
q=D.fFL(t)
p=A.T(q).k("X<1>")
o=A.B(new A.X(q,new D.eKi(r),p),p.k("M.E"))
n=o.length===0?q:o
m=b9.Q!=null&&B.d.aR(n,new D.eKj(b9))?b9.Q:c0
if(m==null){p=r==null?c0:r.h(0,"symbol")
if(p==null)p=t.h(0,c1)
l=p==null?c0:J.k(p)}else l=m
k=B.d.ds(n,new D.eKk(l),new D.eKl(q,l,n,t))
p=r==null
j=p?c0:B.d.ds(q,new D.eKm(r),new D.eKn(k))
p=!p
i=p&&J.z(r.h(0,"symbol"),J.t(k,c1))?r:c0
h=b9.cap(c5,c3,n,k,r)
g=D.dF(w.h(c3,"market"))
f=J.a1(k)
e=f.h(k,c1)
d=J.k(e==null?"SPY":e)
a0=B.a.q(d,"/")
a1=D.bGo(k)
a2=D.c5(f.h(k,"price"))
a3=a1.length!==0?D.c5(J.t(B.d.gH(a1),"c")):0
a4=a3===0?0:(a2-a3)/a3*100
a5=a4>=0
if(a0)a6=!0
else{e=f.h(k,"open")
if(e==null)e=g.h(0,"stockOpen")
a6=e==null?g.h(0,"open"):e}if(a0)a7="Crypto \xb7 the agent trades it on Saturday and Sunday only"
else{e=J.kV(a6)
if(e.A(a6,!0))a7="Stock market open \xb7 the agent trades it on weekdays \xb7 closes 4:00 PM ET"
else{e=e.A(a6,!1)?"Stock market closed"+b9.cOT(g.h(0,"nextOpen")):""
a7=e}}a8=D.fFs(d)
e=c5.a
a9=e?B.c.j(0.92):C.id
b0=A.n(22)
b1=A.K(e?B.c:C.nf,B.r,1)
b2=A.a([new A.ac(0,B.H,c5.gIt(),B.cy,12)],x.V)
b3=D.bF0(d,30)
b4=a0?d:d+"/USD"
b4=A.c(b4,c0,c0,c0,c0,c0,c0,A.l(c0,c0,e?C.cl:B.c,c0,c0,c0,c0,c0,c0,c0,c0,17,c0,c0,B.C,c0,c0,!0,c0,c0,c0,c0,c0,c0,c0,c0),c0,c0,c0)
f=f.h(k,"name")
f=J.k(f==null?a8.a:f)
b5=x.p
f=A.A(A.a([b3,B.ar,b4,B.b6,new A.d_(1,B.c8,A.c(f,c0,c0,B.a2,c0,c0,c0,A.l(c0,c0,e?C.bT:C.bV,c0,c0,c0,c0,c0,c0,c0,c0,13,c0,c0,c0,c0,c0,!0,c0,c0,c0,c0,c0,c0,c0,c0),c0,c0,c0),c0)],b5),B.l,c0,B.e,B.i,0,c0,c0)
b3=a2===0?"\u2014":D.eh(a2,!1,!1)
b3=A.a([A.E(new A.d7(B.dn,B.a5,B.f,A.c(b3,c0,c0,c0,c0,c0,c0,A.l(c0,c0,e?C.cl:B.c,c0,c0,c0,c0,c0,c0,c0,G.AI,34,c0,c0,B.O,c0,c0,!0,c0,-1,c0,c0,c0,c0,c0,c0),c0,c0,c0),c0),1)],b5)
if(a1.length>1){b4=(a5?C.cI:C.d6).j(0.14)
b6=A.n(10)
b7=a5?K.a4x:B.In
b7=A.V(b7,a5?C.cI:C.d6,c0,c0,c0,20)
b8=B.h.a1(Math.abs(a4),2)
b3.push(A.q(c0,A.A(A.a([b7,A.c(b8+"%",c0,c0,c0,c0,c0,c0,A.l(c0,c0,a5?C.cI:C.d6,c0,c0,c0,c0,c0,c0,c0,c0,13,c0,c0,B.C,c0,c0,!0,c0,c0,c0,c0,c0,c0,c0,c0),c0,c0,c0)],b5),B.l,c0,B.e,B.P,0,c0,c0),B.f,c0,c0,new A.p(b4,c0,c0,b6,c0,c0,B.m),c0,c0,c0,c0,B.h0,c0,c0,c0))}f=A.a([f,B.N,A.A(b3,B.l,c0,B.e,B.i,0,c0,c0)],b5)
if(a7.length!==0){if(J.z(a6,!0))b3=C.cI
else b3=e?C.bT:C.bV
b3=A.V(B.np,b3,c0,c0,c0,7)
b4=a1.length>1?"  \xb7  change over 4H":""
B.d.u(f,A.a([B.at,A.A(A.a([b3,B.b6,new A.d_(1,B.c8,A.c(a7+b4,c0,c0,B.a2,c0,c0,c0,A.l(c0,c0,e?C.bT:C.bV,c0,c0,c0,c0,c0,c0,c0,c0,12,c0,c0,c0,c0,c0,!0,c0,c0,c0,c0,c0,c0,c0,c0),c0,c0,c0),c0)],b5),B.l,c0,B.e,B.i,0,c0,c0)],b5))}h=A.a([h,A.q(c0,A.w(f,B.B,c0,B.e,B.i,0,B.p),B.f,c0,c0,new A.p(a9,c0,b1,b0,b2,c0,B.m),c0,c0,c0,B.dX,B.f3,c0,c0,c0)],b5)
f=u.h(0,"problem")
if(J.k(f==null?"":f).length!==0)h.push(b9.abB(c5,J.k(u.h(0,"problem")),E.i1))
f=w.h(c3,c2)
if(J.k(f==null?"":f).length!==0)h.push(b9.abB(c5,J.k(w.h(c3,c2)),C.d6))
if(J.z(v.h(0,"brakePaused"),!0)){f=D.dF(w.h(c3,"ticket")).h(0,"totalBrakeUsd")
f=B.h.a1(D.c5(f==null?200:f),0)
a9=v.h(0,"brakeReason")
h.push(b9.abB(c5,"Paused by the $"+f+" brake. "+A.v(a9==null?"":a9)+y.g,C.d6))}h.push(b9.bMZ(c5,k,i))
h.push(b9.bJC(c5,c3,v,t))
if(s.b(w.h(c3,"pace")))h.push(b9.aCq(c5,c3))
if(p){j.toString
h.push(b9.ctO(c5,r,j,D.dF(w.h(c3,"ticket")),D.dF(t.h(0,"held"))))}h.push(b9.aBK(c5,v))
h.push(b9.bJr(c5,v,c3))
h.push(b9.cLQ(c5,c3))
h.push(b9.bGA(c5))
h.push(b9.cAe(c5,c3))
c3=e?B.c.j(0.92):C.id
w=A.n(16)
s=A.K(e?B.c:C.nf,B.r,1)
p=A.V(B.ks,C.cI,c0,c0,c0,18)
f=J.z(u.h(0,"ordersSwitchOn"),!0)?"on":"off"
h.push(A.q(c0,A.A(A.a([p,B.aa,A.E(A.c("No order is ever sent to Alpaca. Order switch: "+f+".",c0,c0,c0,c0,c0,c0,A.l(c0,c0,e?C.bT:C.bV,c0,c0,c0,c0,c0,c0,c0,c0,11.5,c0,c0,c0,c0,1.3,!0,c0,c0,c0,c0,c0,c0,c0,c0),c0,c0,c0),1)],b5),B.l,c0,B.e,B.i,0,c0,c0),B.f,c0,c0,new A.p(c3,c0,s,w,c0,c0,B.m),c0,c0,c0,S.a24,B.er,c0,c0,c0))
return h},
cKM(d,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=null,g=D.dF(J.t(a0,"market")),f=x.g,e=f.a(g.h(0,"activeMarkets"))
if(e==null)e=B.bM
w=x.N
e=J.b8(e,new D.eL4(),w)
v=A.B(e,e.$ti.k("aj.E"))
f=f.a(g.h(0,"todaysList"))
if(f==null)f=B.bM
w=J.b8(f,new D.eL5(),w)
u=A.B(w,w.$ti.k("aj.E"))
t=J.z(g.h(0,"weekend"),!0)
if(a1==null)s=h
else{f=a1.h(0,"symbol")
s=f==null?h:J.k(f)}r=s!=null&&u.length!==0&&!B.d.q(u,s)
q=new A.X(v,new D.eL6(),A.T(v).k("X<1>")).gI(0)
f=v.length
if(f!==0){f=f-q>0
e=""+q
p=f?"TRADING NOW: 10 STOCKS + "+e+" CRYPTO":"TRADING NOW: ALL "+e+" CRYPTO"
if(f)f=", plus the 10 stocks while the stock market is open"
else f=t?" (stocks trade on weekdays)":" (the stocks trade 9:30 AM to 4:00 PM ET)"
o="The 15 liquid crypto majors, around the clock"+f+". All of them are checked at the same time, every 5 minutes, and the agent buys the valid entry with the strongest 1-hour move. One trade at a time, at most 20 trades today (a maximum, never a target)."}else{f=A.T(u).k("X<1>")
o="Crypto trades around the clock and the 10 stocks ("+A.pk(new A.X(u,new D.eL7(),f),10,f.k("M.E")).aJ(0,", ")+") while the stock market is open. The market list is loading."
p="NO MARKET TRADED RIGHT NOW"}f=(v.length===0?h:B.d.gH(v))==null
n=f?E.i1:C.cI
e=d.a
w=e?B.c.j(0.92):C.id
m=A.n(22)
l=A.K(n.j(0.55),B.r,1)
k=A.V(!f?B.IO:B.vw,n,h,h,h,26)
j=A.c(p,h,h,h,h,h,h,A.l(h,h,n,h,h,h,h,h,h,h,h,13.5,h,h,B.u,h,h,!0,h,0.3,h,h,h,h,h,h),h,h,h)
f=A.c(o,h,h,h,h,h,h,A.l(h,h,e?C.cl:B.c,h,h,h,h,h,h,h,h,12,h,h,h,h,1.3,!0,h,h,h,h,h,h,h,h),h,h,h)
i=x.p
f=A.a([j,B.cR,f,B.cR,A.c("Buys only when the fast line crosses up AND the big trend is rising (slow line higher than 1 hour ago, price above it) AND the market moved +0.4% or more in the last hour.",h,h,h,h,h,h,A.l(h,h,e?C.bT:C.bV,h,h,h,h,h,h,h,h,11,h,h,h,h,1.3,!0,h,h,h,h,h,h,h,h),h,h,h)],i)
if(r)B.d.u(f,A.a([B.at,A.c("Still holding the "+s+" trade from before: the agent keeps checking its exits every 5 minutes.",h,h,h,h,h,h,C.fOQ,h,h,h)],i))
return A.q(h,A.A(A.a([k,B.ar,A.E(A.w(f,B.B,h,B.e,B.i,0,B.p),1)],i),B.B,h,B.e,B.i,0,h,h),B.f,h,h,new A.p(w,h,l,m,h,h,B.m),h,h,h,h,B.bR,h,h,h)},
cFD(d,e,f){var w=null,v=this.c
v.toString
A.cf(w,w,!0,w,new D.eL0(this,d,e,f),v,w,!0,!0,x.H)},
bd3(d,e,f,g,h){var w,v,u,t,s,r,q,p,o=null,n=x.N,m=A.S(n,x.P),l=this.d
l=x.g.a(D.dF(l==null?o:J.t(l,"fast")).h(0,"systems"))
if(l==null)l=B.bM
l=J.cL(l,x.f)
w=J.aN(l.a)
l=l.$ti
v=new A.jB(w,l.k("jB<1>"))
u=x.z
l=l.c
while(v.B()){t=l.a(w.gP(w))
s=A.v(J.t(t,"id"))
t=A.a0(t,n,u)
m.n(0,s,t)}r=m.h(0,e)
if(r==null)r=B.cE
q=J.z(r.h(0,"enabled"),!0)
p=r.h(0,"holding")!=null
if(p)n=" \xb7 holding "+A.v(r.h(0,"holding"))
else n=q?" \xb7 running":" \xb7 stopped"
m=A.n(11)
l=A.n(11)
l=A.a([A.q(o,A.V(g,B.c,o,o,o,20),B.f,o,o,new A.p(h,o,o,l,o,o,B.m),o,34,o,o,o,o,o,34)],x.p)
if(q||p){w=p?F.qW:C.cI
l.push(A.ao(o,A.q(o,o,B.f,o,o,new A.p(w,o,A.K(d.a?C.te:C.tc,B.r,2),o,o,o,B.a6),o,11,o,o,o,o,o,11),o,o,o,-2,-2,o))}return A.h6(A.dC(o,!0,o,A.aM(!1,m,!0,new A.a4(34,34,new A.am(B.a0,o,B.ab,B.f,l,o),o),o,!0,o,o,o,o,o,o,o,o,o,o,o,new D.eL3(this,e),o,o,o,o,o,o,o),!1,o,o,o,o,!1,o,!1,o,o,o,o,o,o,o,o,o,o,f,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,B.cf,o),o,f+n,o,o,o)},
cM9(d){var w,v,u,t,s,r,q,p,o=null,n=J.a1(d)
if(J.z(n.h(d,"open"),!0)){w=D.dF(n.h(d,"chart")).h(0,"trend")
n=w==null?n.h(d,"trend"):w
v=J.k(n==null?"unknown":n)}else v="waiting"
switch(v){case"up":n=C.fjw
break
case"down":n=C.fk6
break
default:n=C.fmG
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
return A.dC(o,o,o,A.q(o,A.A(A.a([A.V(t,p,o,o,o,12),B.uw,A.c(s,o,o,o,o,o,o,A.l(o,o,p,o,o,o,o,o,o,o,o,9,o,o,B.C,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],x.p),B.l,o,B.e,B.P,0,o,o),B.f,o,o,new A.p(n,o,o,w,o,o,B.m),o,o,o,o,W.apO,o,o,o),!1,o,o,o,o,!1,o,!1,o,o,o,o,o,o,o,o,o,o,"trend "+A.v(s),o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,B.cf,o)},
cap(d,e,f,g,h){var w,v,u,t,s,r,q=this,p=null
if(f.length<2)return B.bK
w=new A.X(f,new D.eKz(),A.T(f).k("X<1>")).gI(0)
v=d.a
u=A.c("Today's watchlist",p,p,p,p,p,p,A.l(p,p,v?C.cl:B.c,p,p,p,p,p,p,p,p,14,p,p,B.C,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)
t=w===0
s=t?"NONE TRADED NOW":""+w+" WATCHED NOW"
s=q.aBM(s,t?E.i1:C.cI)
r=A.hlo(!1,p,!0,new A.C(B.eG,A.V(B.kR,t?E.i1:C.cI,p,p,p,19),p),!1,p,!0,!1,p,p,p,B.a6,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new D.eKA(q,d,e,h),p,p,p,p,20,p,p,p)
t=x.p
return new A.C(B.ey,A.w(A.a([new A.C(C.apM,A.A(A.a([u,B.aa,s,B.da,r,B.aY,A.c("tap one",p,p,p,p,p,p,A.l(p,p,v?C.bT:C.bV,p,p,p,p,p,p,p,p,11,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)],t),B.l,p,B.e,B.i,0,p,p),p),new A.a4(p,66,A.hN(B.f,q.ctl(B.d.bn(f,new D.eKB(g))),new D.eKC(q,f,g,h,d),f.length,p,p,B.aJ,new D.eKD(),!1),p),B.at],t),B.B,p,B.e,B.i,0,B.p),p)},
bMZ(d,e,f){var w,v,u,t,s,r,q,p,o,n=this,m=null,l=D.bGo(e),k=l.length
if(k<2)return n.a1u(d,new A.a4(m,120,A.at(A.c(y.b,m,m,m,m,m,m,A.l(m,m,d.a?C.bT:C.bV,m,m,m,m,m,m,m,m,m,m,m,m,m,m,!0,m,m,m,m,m,m,m,m),m,m,m),m,m,m),m))
w=B.d.fE(l,Math.max(0,k-n.z))
k=x.p
v=A.a([],k)
for(u=0;u<3;++u){t=C.cpT[u]
if(t<=12)s="1H"
else s=t<=24?"2H":"4H"
B.d.u(v,A.a([n.cCj(d,s,n.z===t,new D.eKq(n,t)),B.b6],k))}v.push(B.aY)
v.push(n.cMa(e))
v.push(B.b6)
v.push(n.bai(d,"Trend lines",n.ax,new D.eKr(n),B.xB))
v=A.A(v,B.l,m,B.e,B.i,0,m,m)
s=n.ax
r=J.a1(e)
q=D.c5(r.h(e,"price"))
p=n.d
p=p==null?m:J.t(p,"trades")
x.g.a(p)
if(p==null)p=B.bM
p=J.cL(p,x.f)
p=A.ct(p,new D.eKs(),p.$ti.k("M.E"),x.P)
p=A.B(p,A.a3(p).k("M.E"))
o=r.h(e,"asset")
v=A.a([v,B.S,new D.a_Z(w,d,m,s,q,D.hPS(p,A.v(o==null?r.h(e,"symbol"):o),F.qW,f),m)],k)
if(n.ax)B.d.u(v,A.a([B.N,A.bY(B.fX,A.a([n.azu(d,B.bE,"Fast line (45 min)"),n.azu(d,B.b1,"Slow line (1 h 45 min)"),n.azu(d,F.qW,"Trade in")],k),B.bq,m,4,14)],k))
return n.aBJ(d,A.w(v,B.l,m,B.e,B.i,0,B.p),B.xb)},
cMa(d){var w,v,u,t,s,r,q=null,p=D.dF(J.t(d,"chart")).h(0,"trend")
switch(J.k(p==null?"unknown":p)){case"up":p=C.fls
break
case"down":p=C.flz
break
case"flat":p=C.fjZ
break
default:p=C.fkR
break}w=p.a
v=q
u=q
t=p.b
s=p.c
u=s
v=t
r=w
p=A.n(10)
return A.h6(A.dC(q,q,q,A.q(q,A.V(v,B.c,q,q,q,20),B.f,q,q,new A.p(r,q,q,p,q,q,B.m),q,32,q,q,q,q,q,32),!1,q,q,q,q,!1,q,!1,q,q,q,q,q,q,q,q,q,q,u,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,B.cf,q),q,u,q,B.hr2,q)},
bJC(a9,b0,b1,b2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=null,e="equity",d=J.a1(b0),a0=D.dF(d.h(b0,"today")),a1=D.dF(d.h(b0,"record")),a2=D.dF(d.h(b0,"ticket")),a3=a1.h(0,"pnlSum")!=null?D.c5(a1.h(0,"pnlSum")):D.c5(b1.h(0,"totalPnl")),a4=D.c5(a0.h(0,"day_pnl")),a5=x.f,a6=a5.b(b1.h(0,"shadow"))?D.dF(b1.h(0,"shadow")):f,a7=a6!=null,a8=0
if(a7){w=D.dF(b2.h(0,"held"))
if(w.h(0,"pnl")!=null)a8=D.c5(w.h(0,"pnl"))
else if(!a5.b(a6.h(0,"option"))){v=D.c5(J.t(B.d.ds(D.fFL(b2),new D.eKe(a6),new D.eKf()),"price"))
if(v>0){a5=D.c5(a6.h(0,"qty"))
u=a6.h(0,"mult")==null?1:D.c5(a6.h(0,"mult"))
a8=a5*u*(v-D.c5(a6.h(0,"entryPrice")))}}}t=D.dF(a1.h(0,"newRules"))
s=t.h(0,"winRatePct")
r=D.c5(b2.h(0,e))
q=D.dF(d.h(b0,"fast"))
p=D.c5(q.h(0,"closed"))+D.c5(q.h(0,"open"))
o=a3+a8+p
d=A.n(26)
a5=A.a([new A.ac(0,B.H,B.i2.j(0.3),B.eR,24)],x.V)
u=x.p
n=A.A(A.a([C.b_S],u),B.l,f,B.e,B.i,0,f,f)
n=A.a([n,B.at,new A.d7(B.dn,B.a5,B.f,A.c(b2.h(0,e)==null?"\u2014":D.eh(r+a3+a8+p,!0,!1),f,f,f,f,f,f,C.fMB,f,f,f),f)],u)
if(b2.h(0,e)!=null){m=o>=0?K.a4x:B.In
l=o>0
if(l)k=C.cI
else k=o<0?C.d6:B.ac
k=A.V(m,k,f,f,f,f)
m=D.eh(o,!0,!0)
if(p!==0)a7=" (all systems)"
else a7=a7?" (incl. the open one)":""
if(l)l=C.cI
else l=o<0?C.d6:B.ac
n.push(A.A(A.a([k,A.c(m+" from trades"+a7,f,f,f,f,f,f,A.l(f,f,l,f,f,f,f,f,f,f,f,12.5,f,f,B.C,f,f,!0,f,f,f,f,f,f,f,f),f,f,f)],u),B.l,f,B.e,B.i,0,f,f))}n.push(B.bs)
n.push(A.c("Alpaca account "+D.eh(r,!0,!1)+" (unchanged, no orders are sent) \xb7 $"+B.h.a1(D.c5(a2.h(0,"amount")),0)+" a trade",f,f,f,f,f,f,B.FP,f,f,f))
n.push(B.az)
a7=D.eh(a4,!0,!0)
if(a4>0)m=C.cI
else m=a4<0?C.d6:B.c
m=A.E(g.B7("Today",a7,m),1)
a7=D.eh(a3,!0,!0)
if(a3>0)l=C.cI
else l=a3<0?C.d6:B.c
l=A.E(g.B7("All time",a7,l),1)
a7=a1.h(0,"wins")
a7=A.v(a7==null?0:a7)
k=a1.h(0,"losses")
a7=A.A(A.a([m,B.aa,l,B.aa,A.E(g.B7("Wins / losses",a7+" / "+A.v(k==null?0:k),B.c),1)],u),B.l,f,B.e,B.i,0,f,f)
m=a0.h(0,"trades")
m=A.v(m==null?0:m)
l=a2.h(0,"maxTradesToday")
m=A.E(g.B7("Trades today",m+" of "+A.v(l==null?20:l),B.c),1)
l=a2.h(0,"dailyStopUsd")
l=A.E(g.B7("Daily stop","-$"+B.h.a1(D.c5(l==null?50:l),0),B.c),1)
k=a2.h(0,"totalBrakeUsd")
n.push(g.aSw("RESULTS AND LIMITS",A.a([a7,B.N,A.A(A.a([m,B.aa,l,B.aa,A.E(g.B7("Total brake","-$"+B.h.a1(D.c5(k==null?100:k),0),B.c),1)],u),B.l,f,B.e,B.i,0,f,f)],u)))
n.push(B.S)
a7=a2.h(0,"amount")
a7=B.h.a1(D.c5(a7==null?100:a7),0)
m=J.z(a2.h(0,"kind"),"crypto")?"a coin":"a stock"
m=A.E(g.B7("Buys","$"+a7+" of "+m,B.c),1)
a7=a2.h(0,"takeProfitUsd")
a7=A.E(g.B7("Take profit","+$"+B.h.a1(D.c5(a7==null?50:a7),0),C.cI),1)
l=a2.h(0,"stopLossUsd")
a7=A.A(A.a([m,B.aa,a7,B.aa,A.E(g.B7("Stop loss","-$"+B.h.a1(D.c5(l==null?50:l),0),C.d6),1)],u),B.l,f,B.e,B.i,0,f,f)
m=B.c.j(0.1)
l=A.n(14)
k=s==null
if(k)j="No $100 trades yet"
else{j=B.h.a1(D.c5(s),0)
i=t.h(0,"wins")
i=A.v(i==null?0:i)
h=t.h(0,"trades")
j=j+"%  \xb7  "+i+" won of "+A.v(h==null?0:h)}if(k)k=B.c
else k=D.c5(s)>=50?C.cI:C.d6
n.push(g.aSw("EACH TRADE",A.a([a7,B.N,A.q(f,A.A(A.a([A.E(A.w(A.a([C.h2Y,B.bs,A.c(j,f,f,f,f,f,f,A.l(f,f,k,f,f,f,f,f,f,f,f,16,f,f,B.C,f,f,!0,f,f,f,f,f,f,f,f),f,f,f)],u),B.B,f,B.e,B.i,0,B.p),1),C.hjH],u),B.l,f,B.e,B.i,0,f,f),B.f,f,f,new A.p(m,f,f,l,f,f,B.m),f,f,f,f,B.er,f,f,1/0)],u)))
return A.q(f,A.w(n,B.B,f,B.e,B.i,0,B.p),B.f,f,f,new A.p(f,f,f,d,a5,C.avV,B.m),f,f,f,B.dX,B.f7,f,f,f)},
aCq(a8,a9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=null,a0="brakeNote",a1=J.a1(a9),a2=D.dF(a1.h(a9,"pace")),a3=D.dF(a1.h(a9,"todayStats")),a4=D.dF(a1.h(a9,"market")),a5=a2.h(0,"target"),a6=B.h.M(D.c5(a5==null?20:a5)),a7=B.h.M(D.c5(a2.h(0,"trades")))
a5=x.g
w=a5.a(a2.h(0,"lines"))
if(w==null)w=B.bM
v=x.N
w=J.b8(w,new D.eKG(),v)
u=A.B(w,w.$ti.k("aj.E"))
w=a5.a(a4.h(0,"cryptoDropped"))
if(w==null)w=B.bM
w=J.b8(w,new D.eKH(),v)
t=A.B(w,w.$ti.k("aj.E"))
s=D.c5(a3.h(0,"pnl"))
w=a2.h(0,"dayNote")
r=J.k(w==null?"":w)
w=a5.a(a1.h(a9,"cooldowns"))
if(w==null)w=B.bM
w=J.cL(w,x.f)
q=A.B(w,w.$ti.k("M.E"))
a5=a5.a(a1.h(a9,"whyFix"))
if(a5==null)a5=B.bM
a5=J.b8(a5,new D.eKI(),v)
p=A.B(a5,a5.$ti.k("aj.E"))
a5=""+a6
w=a8.a
o=A.E(A.c("Trades today: "+a7+" of "+a5,d,d,d,d,d,d,A.l(d,d,w?C.cl:B.c,d,d,d,d,d,d,d,d,20,d,d,B.u,d,d,!0,d,d,d,d,d,d,d,d),d,d,d),1)
n=a7>=a6
a5=n?"MAX REACHED":"MAX "+a5
m=x.p
a5=A.A(A.a([o,this.aBM(a5,n?E.i1:C.cI)],m),B.l,d,B.e,B.i,0,d,d)
o=a2.h(0,"maxHold")
o=B.h.M(D.c5(o==null?120:o))
o=A.c("Max hold "+o+" min \xb7 exits checked every 5 min",d,d,d,d,d,d,A.l(d,d,w?C.bT:C.bV,d,d,d,d,d,d,d,d,12,d,d,B.C,d,1.3,!0,d,d,d,d,d,d,d,d),d,d,d)
n=A.cg(new D.eKJ(a8,a7,a6))
l=a2.h(0,"checkpoints")
l=A.v(l==null?"":l)
a5=A.a([a5,B.bs,o,B.N,n,B.N,A.c(l,d,d,d,d,d,d,A.l(d,d,w?C.cl:B.c,d,d,d,d,d,d,d,d,11,d,d,B.O,d,1.3,!0,d,d,d,d,d,d,d,d),d,d,d)],m)
for(o=u.length,k=0;k<u.length;u.length===o||(0,A.I)(u),++k)a5.push(new A.C(B.rk,A.c(u[k],d,d,d,d,d,d,C.aZz,d,d,d),d))
if(r.length!==0)a5.push(new A.C(B.kP,A.c(r,d,d,d,d,d,d,C.fKA,d,d,d),d))
a5.push(B.N)
if(a3.h(0,"closed")==null||D.c5(a3.h(0,"closed"))===0)o="No closed trades today yet"
else{o=a3.h(0,"wins")
o=A.v(o==null?0:o)
n=a3.h(0,"losses")
o="Today: "+o+" won, "+A.v(n==null?0:n)+" lost ("+B.h.a1(D.c5(a3.h(0,"winRatePct")),0)+"%)"}o=A.E(A.c(o,d,d,d,d,d,d,A.l(d,d,w?C.cl:B.c,d,d,d,d,d,d,d,d,12.5,d,d,B.C,d,d,!0,d,d,d,d,d,d,d,d),d,d,d),1)
n=D.eh(s,!0,!0)
if(s>0)l=C.cI
else if(s<0)l=C.d6
else l=w?C.cl:B.c
a5.push(A.A(A.a([o,A.c(n,d,d,d,d,d,d,A.l(d,d,l,d,d,d,d,d,d,d,d,14,d,d,B.u,d,d,!0,d,d,d,d,d,d,d,d),d,d,d)],m),B.l,d,B.e,B.i,0,d,d))
a5.push(B.aj)
l=a4.h(0,"cryptoCount")
o=A.v(l==null?"?":l)
n=J.z(a4.h(0,"cryptoFromAlpaca"),!1)?" (Alpaca's list could not be read, using the main ones for now)":" (the liquid majors only, thin coins are never traded)"
l=J.z(a4.h(0,"weekend"),!0)?"":" plus the 10 stocks in market hours"
a5.push(A.c("Watching "+o+" crypto pairs around the clock"+n+l+".",d,d,d,d,d,d,A.l(d,d,w?C.bT:C.bV,d,d,d,d,d,d,d,d,11.5,d,d,d,d,1.3,!0,d,d,d,d,d,d,d,d),d,d,d))
if(t.length!==0)a5.push(A.c("Dropped today (no longer tradable on Alpaca): "+B.d.aJ(t,", "),d,d,d,d,d,d,C.fSv,d,d,d))
a5.push(B.aj)
o=q.length===0?"Cooldown: no market is resting right now.":"Cooldown (closed flat, not traded again for 2 hours): "+new A.O(q,new D.eKK(new D.eKF()),A.T(q).k("O<1,o>")).aJ(0,", ")
if(q.length===0)n=w?C.bT:C.bV
else n=E.i1
a5.push(A.c(o,d,d,d,d,d,d,A.l(d,d,n,d,d,d,d,d,d,d,d,11.5,d,d,B.O,d,1.3,!0,d,d,d,d,d,d,d,d),d,d,d))
if(p.length!==0){o=w?C.r6:C.r7
n=A.n(12)
l=A.a([],m)
for(v=A.aoT(p,0,v),j=J.aN(v.a),v=v.b,i=new A.Fh(j,v);i.B();){h=i.c
h=h>=0?new A.y(v+h,j.gP(j)):A.bi(A.fd())
g=h.a===0
f=g?0:3
if(g)e=w?C.cl:B.c
else e=w?C.bT:C.bV
g=g?B.C:B.cD
l.push(new A.C(new A.R(0,f,0,0),A.c(h.b,d,d,d,d,d,d,new A.F(!0,e,d,d,d,d,11.5,g,d,d,d,d,1.3,d,d,d,d,d,d,d,d,d,d,d,d,d),d,d,d),d))}B.d.u(a5,A.a([B.N,A.q(d,A.w(l,B.B,d,B.e,B.i,0,B.p),B.f,d,d,new A.p(o,d,d,n,d,d,B.m),d,d,d,d,B.bS,d,d,1/0)],m))}if(a1.h(a9,a0)!=null){a1=A.v(a1.h(a9,a0))
B.d.u(a5,A.a([B.aj,A.c(a1,d,d,d,d,d,d,A.l(d,d,w?C.bT:C.bV,d,d,d,d,d,d,d,d,11,d,d,d,d,1.3,!0,d,d,d,d,d,d,d,d),d,d,d)],m))}return this.a1u(a8,A.w(a5,B.B,d,B.e,B.i,0,B.p))},
aSw(d,e){var w=null,v=B.v.j(0.14),u=A.n(18),t=A.K(B.c.j(0.16),B.r,1),s=A.a([new A.C(B.apF,A.c(d,w,w,w,w,w,w,C.fND,w,w,w),w)],x.p)
B.d.u(s,e)
return A.q(w,A.w(s,B.B,w,B.e,B.i,0,B.p),B.f,w,w,new A.p(v,w,t,u,w,w,B.m),w,w,w,w,B.bS,w,w,1/0)},
B7(d,e,f){var w=null,v=B.c.j(0.1),u=A.n(14)
return A.q(w,A.w(A.a([A.c(d,w,1,B.a2,w,w,w,B.M8,w,w,w),B.bs,new A.d7(B.dn,B.a5,B.f,A.c(e,w,w,w,w,w,w,A.l(w,w,f,w,w,w,w,w,w,w,w,15,w,w,B.C,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w)],x.p),B.B,w,B.e,B.i,0,B.p),B.f,w,w,new A.p(v,w,w,u,w,w,B.m),w,w,w,w,B.ao9,w,w,w)},
ctO(a9,b0,b1,b2,b3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=this,a1=null,a2="price",a3=D.c5(b0.h(0,"entryPrice")),a4=D.c5(b0.h(0,"qty")),a5=b0.h(0,"mult")==null?1:D.c5(b0.h(0,"mult")),a6=x.f.b(b0.h(0,"option"))?D.dF(b0.h(0,"option")):a1,a7=J.a1(b1),a8=J.z(b0.h(0,"symbol"),a7.h(b1,"asset"))
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
k=A.A(A.a([A.c("Your position",a1,a1,a1,a1,a1,a1,A.l(a1,a1,a7?C.cl:B.c,a1,a1,a1,a1,a1,a1,a1,a1,16,a1,a1,B.C,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1),B.aY,a0.aBM("OPEN",C.cI)],q),B.l,a1,B.e,B.i,0,a1,a1)
j=D.eh(t,!0,!0)
j=A.c(j,a1,a1,a1,a1,a1,a1,A.l(a1,a1,r?C.cI:C.d6,a1,a1,a1,a1,a1,a1,a1,a1,34,a1,a1,B.C,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1)
i=s>=0?"+":""
h=B.h.a1(s,2)
j=A.A(A.a([j,B.aa,new A.C(B.ey,A.c(i+h+"%",a1,a1,a1,a1,a1,a1,A.l(a1,a1,r?C.cI:C.d6,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,B.C,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1),a1)],q),B.dr,a1,B.e,B.i,0,a1,a1)
i=r?"You would be winning right now":"You would be losing right now"
k=A.a([k,B.af,j,A.c(i,a1,a1,a1,a1,a1,a1,A.l(a1,a1,a7?C.bT:C.bV,a1,a1,a1,a1,a1,a1,a1,a1,12.5,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1),B.az],q)
j=a6!=null
if(j){i=a7?C.r6:C.r7
h=A.n(16)
g=A.c("1 SPY call option",a1,a1,a1,a1,a1,a1,A.l(a1,a1,a7?C.bT:C.bV,a1,a1,a1,a1,a1,a1,a1,a1,11.5,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1)
f=D.eh(D.c5(a6.h(0,"strike")),!0,!1)
e=D.aRM(a6.h(0,"expiry"))
f=A.c("Strike "+f+" \xb7 expires "+e,a1,a1,a1,a1,a1,a1,A.l(a1,a1,a7?C.cl:B.c,a1,a1,a1,a1,a1,a1,a1,a1,15,a1,a1,B.C,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1)
e=D.eh(a3,!0,!1)
d=D.eh(v,!0,!1)
B.d.u(k,A.a([A.q(a1,A.w(A.a([g,B.bs,f,B.bs,A.c("Premium paid "+e+" a share x 100 = "+d,a1,a1,a1,a1,a1,a1,A.l(a1,a1,a7?C.bT:C.bV,a1,a1,a1,a1,a1,a1,a1,a1,11.5,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1)],q),B.B,a1,B.e,B.i,0,B.p),B.f,a1,a1,new A.p(i,a1,a1,h,a1,a1,B.m),a1,a1,a1,a1,B.bg,a1,a1,1/0),B.N],q))}i=A.E(a0.aBN(a9,"You put in",D.eh(v,!0,!1)),1)
h=D.eh(u,!0,!1)
k.push(A.A(A.a([i,B.aa,A.E(a0.aBO(a9,"Worth now",h,r?C.cI:C.d6),1)],q),B.l,a1,B.e,B.i,0,a1,a1))
k.push(B.N)
i=j?"Premium paid":"Bought at"
i=A.E(a0.aBN(a9,i,D.eh(a3,!0,!1)),1)
if(j){j=J.z(b3.h(0,"priced"),!1)?"no price yet":D.eh(w,!0,!1)
j=a0.aBO(a9,"Premium now",j,r?C.cI:C.d6)}else j=a0.aBN(a9,"Amount",B.h.a1(a4,a4<0.01?6:4)+" "+A.v(b0.h(0,"symbol")))
k.push(A.A(A.a([i,B.aa,A.E(j,1)],q),B.l,a1,B.e,B.i,0,a1,a1))
k.push(B.aN)
k.push(A.cg(new D.eKN(a9,n)))
k.push(B.aj)
j=D.eh(o,!0,!1)
k.push(A.A(A.a([A.E(A.c("Stop loss\n-"+j+" \xb7 at "+D.eh(l<0?0:l,!0,!1),a1,a1,a1,a1,a1,a1,C.fSE,a1,a1,a1),1),A.E(A.c("Take profit\n+"+D.eh(p,!0,!1)+" \xb7 at "+D.eh(a3+p*m,!0,!1),a1,a1,a1,a1,a1,a1,C.fRb,B.dR,a1,a1),1)],q),B.l,a1,B.e,B.i,0,a1,a1))
k.push(B.aj)
q=D.hqP(b0.h(0,"entryAt"))
k.push(A.c("Bought "+q,a1,a1,a1,a1,a1,a1,A.l(a1,a1,a7?C.bT:C.bV,a1,a1,a1,a1,a1,a1,a1,a1,11.5,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1))
return a0.a1u(a9,A.w(k,B.B,a1,B.e,B.i,0,B.p))},
aBK(d,e){var w,v,u,t=this,s=null,r=J.z(e.h(0,"enabled"),!0)&&!J.z(e.h(0,"brakePaused"),!0),q=r?C.d6:C.cI
q=A.bp(q,s,s,s,s,s,s,s,new A.ba(A.n(999),B.a1),s,s,s)
w=t.r?s:new D.eKt(t,r)
v=A.V(r?B.vL:B.fR,s,s,s,s,s)
q=A.E(new A.a4(s,52,A.df(v,s,A.c(r?"Stop agent":"Start agent",s,s,s,s,s,s,B.mU,s,s,s),w,q),s),3)
w=d.a
v=w?C.cl:B.c
u=w?C.oT:C.oO
w=w?B.c.j(0.92):C.id
u=A.dj(s,s,w,s,s,s,s,s,s,v,s,s,s,s,new A.ba(A.n(999),B.a1),new A.ax(u,1.5,B.r,-1),s,s,s,s)
w=t.r
v=w?s:t.gcBj()
return new A.C(B.dX,A.A(A.a([q,B.ar,A.E(new A.a4(s,52,A.en(w?B.Ly:C.c6W,s,C.hlY,v,u),s),2)],x.p),B.l,s,B.e,B.i,0,s,s),s)},
bJr(d,e,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i="every 5 min",h=J.z(e.h(0,"enabled"),!0)&&!J.z(e.h(0,"brakePaused"),!0),g=e.h(0,"lastTickAt"),f=A.bf(A.v(g==null?"":g))
if(h)w=C.cI
else w=d.a?C.bT:C.bV
g=x.f
v=g.b(e.h(0,"shadow"))?D.dF(e.h(0,"shadow")):j
u=x.g.a(J.t(a0,"trades"))
g=J.cL(u==null?B.bM:u,g)
t=A.B(g,g.$ti.k("M.E"))
s=t.length===0?j:D.dF(B.d.gH(t))
g=v!=null
r=g?"Current trade from":"Last trade from"
if(g)q=A.v(v.h(0,"symbol"))
else if(s==null)q="no trade yet"
else{g=A.v(s.h(0,"asset"))
u=J.z(s.h(0,"decision"),"would buy")?"bought":"sold "+D.eh(D.c5(D.dF(s.h(0,"details")).h(0,"pnl")),!0,!0)
u=g+" ("+u+")"
q=u}g=new D.eKd(d)
u=d.a
p=u?B.c.j(0.92):C.id
o=A.n(20)
n=A.K(w.j(0.35),B.r,1)
m=w.j(0.15)
l=A.n(9)
l=A.q(j,A.V(O.QH,w,j,j,j,17),B.f,j,j,new A.p(m,j,j,l,j,j,B.m),j,28,j,j,j,j,j,28)
m=h?"Trades are automatic":"Agent is stopped"
m=A.E(A.c(m,j,j,j,j,j,j,A.l(j,j,u?C.cl:B.c,j,j,j,j,j,j,j,j,13.5,j,j,B.C,j,j,!0,j,j,j,j,j,j,j,j),j,j,j),1)
k=x.p
m=A.a([A.A(A.a([l,B.aa,m,A.c("Check now only looks",j,j,j,j,j,j,A.l(j,j,u?C.bT:C.bV,j,j,j,j,j,j,j,j,10.5,j,j,j,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)],k),B.l,j,B.e,B.i,0,j,j),B.S],k)
if(h)B.d.u(m,A.a([A.A(A.a([g.$2("Last check",f==null?"not yet":D.LV(D.SO(f))+" ET"),B.b6,g.$2("Next buy check",D.hNM())],k),B.l,j,B.e,B.i,0,j,j),B.aj,A.A(A.a([g.$2("Checks every market",i),B.b6,g.$2("Open trade exits",i)],k),B.l,j,B.e,B.i,0,j,j),B.aj],k))
else B.d.u(m,A.a([A.c("It makes no trades. Press Start and it checks every market on the day's list every 5 minutes by itself.",j,j,j,j,j,j,A.l(j,j,u?C.bT:C.bV,j,j,j,j,j,j,j,j,12,j,j,j,j,1.35,!0,j,j,j,j,j,j,j,j),j,j,j),B.N],k))
m.push(A.A(A.a([g.$2(r,q)],k),B.l,j,B.e,B.i,0,j,j))
return A.q(j,A.w(m,B.B,j,B.e,B.i,0,B.p),B.f,j,j,new A.p(p,j,n,o,j,j,B.m),j,j,j,B.dX,B.bg,j,j,j)},
cLQ(b9,c0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0=this,b1=null,b2="entryPrice",b3="exitPrice",b4="exitKind",b5="outValue",b6="todayStats",b7=J.a1(c0),b8=x.g.a(b7.h(c0,"trades"))
if(b8==null)b8=B.bM
w=x.f
b8=J.cL(b8,w)
b8=A.ct(b8,new D.eLb(),b8.$ti.k("M.E"),x.P)
v=A.B(b8,A.a3(b8).k("M.E"))
b8=b9.a
u=x.p
t=A.a([A.c("Trades",b1,b1,b1,b1,b1,b1,A.l(b1,b1,b8?C.cl:B.c,b1,b1,b1,b1,b1,b1,b1,b1,16,b1,b1,B.C,b1,b1,!0,b1,b1,b1,b1,b1,b1,b1,b1),b1,b1,b1),B.N],u)
if(v.length===0){s=A.V(B.h4,b8?C.bT:C.bV,b1,b1,b1,b1)
t.push(new A.C(B.cq,A.A(A.a([s,B.ar,A.E(A.c("No trades yet. Each buy shows what was bought (for a SPY option: strike, expiry and premium) and what was put in; each sell shows the entry and exit price and the win or loss in dollars.",b1,b1,b1,b1,b1,b1,A.l(b1,b1,b8?C.bT:C.bV,b1,b1,b1,b1,b1,b1,b1,b1,12.5,b1,b1,b1,b1,1.3,!0,b1,b1,b1,b1,b1,b1,b1,b1),b1,b1,b1),1)],u),B.l,b1,B.e,B.i,0,b1,b1),b1))}s=J.aN(b0.y?v:A.cJ(v,0,A.dx(4,"count",x.S),A.T(v).c))
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
if(j==null)j=0}i="SPY "+D.eh(j,!0,!1)+" call"}else{j=o.h(p,"asset")
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
a0=j}}if(m)if(n)a1="expires "+D.aRM(k.h(0,"expiry"))+" \xb7 premium "+D.eh(d,!0,!1)+" x 100"
else{m=D.eh(d,!0,!1)
j=D.eh(a0,!0,!1)
a2=o.h(p,"reason")
a2=J.k(a2==null?"":a2)
a3=B.a.c9(a2,"(")
a1="premium "+m+" to "+j+" \xb7 "+B.a.i(a3>0?B.a.av(a2,0,a3):a2)}else if(n){if(g===0)m=""
else m=B.h.a1(g,g<0.01?6:4)+" at "
if(e)j=d
else{j=o.h(p,"price")
if(!(typeof j=="number")){j=A.cA(A.v(j==null?"":j))
if(j==null)j=0}}a1=m+D.eh(j,!0,!1)}else{m=e?D.eh(d,!0,!1)+" to ":"at "
j=D.eh(a0,!0,!1)
a2=o.h(p,"reason")
a2=J.k(a2==null?"":a2)
a3=B.a.c9(a2,"(")
a1=m+j+" \xb7 "+B.a.i(a3>0?B.a.av(a2,0,a3):a2)}a4=f>=0
if(n)a5=B.cj
else a5=a4?C.cI:C.d6
m=b8?C.oT:C.oO
j=a5.j(0.14)
a2=new A.aQ(13,13)
j=A.q(b1,A.V(n?B.u_:B.qa,a5,b1,b1,b1,20),B.f,b1,b1,new A.p(j,b1,b1,new A.bc(a2,a2,a2,a2),b1,b1,B.m),b1,40,b1,b1,b1,b1,b1,40)
a2=n?"Bought":"Sold"
a6=b8?C.cl:B.c
a2=A.c(a2+" "+i,b1,b1,b1,b1,b1,b1,new A.F(!0,a6,b1,b1,b1,b1,14,B.C,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1),b1,b1,b1)
a6=b8?C.bT:C.bV
a2=A.a([a2,B.bs,A.c(a1,b1,2,B.a2,b1,b1,b1,new A.F(!0,a6,b1,b1,b1,b1,11.5,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1),b1,b1,b1)],u)
a6=!n
if(a6&&l.h(0,b4)!=null){a7=A.v(l.h(0,b4))
a8=J.z(l.h(0,"flat"),!0)?" \xb7 flat":""
a9=a4?C.cI:C.d6
a2.push(A.c("Exit: "+a7+a8,b1,b1,b1,b1,b1,b1,new A.F(!0,a9,b1,b1,b1,b1,11,B.C,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1),b1,b1,b1))}p=o.h(p,"et_time")
p=J.k(p==null?"":p)
o=b8?C.bT:C.bV
a2.push(A.c(p,b1,b1,b1,b1,b1,b1,new A.F(!0,o,b1,b1,b1,b1,10.5,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1),b1,b1,b1))
p=A.w(a2,B.B,b1,B.e,B.i,0,B.p)
if(n)o="-"+D.eh(h,!0,!1)
else{if(l.h(0,b5)==null)o=h+f
else{o=l.h(0,b5)
if(!(typeof o=="number")){o=A.cA(A.v(o==null?"":o))
if(o==null)o=0}}o="+"+D.eh(o,!0,!1)}a2=b8?C.cl:B.c
o=A.a([A.c(o,b1,b1,b1,b1,b1,b1,new A.F(!0,a2,b1,b1,b1,b1,14,B.C,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1),b1,b1,b1)],u)
if(a6){a2=D.eh(f,!0,!0)
if(l.h(0,"pct")==null)a6=""
else{a6=l.h(0,"pct")
if(!(typeof a6=="number")){a6=A.cA(A.v(a6==null?"":a6))
if(a6==null)a6=0}a6=a6>=0?"+":""
a7=l.h(0,"pct")
if(!(typeof a7=="number")){a7=A.cA(A.v(a7==null?"":a7))
if(a7==null)a7=0}a7=" ("+a6+B.h.a1(a7,2)+"%)"
a6=a7}a7=a4?C.cI:C.d6
o.push(A.c(a2+a6,b1,b1,b1,b1,b1,b1,new A.F(!0,a7,b1,b1,b1,b1,12,B.C,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1),b1,b1,b1))}if(n){a2=b8?C.bT:C.bV
o.push(A.c("put in",b1,b1,b1,b1,b1,b1,new A.F(!0,a2,b1,b1,b1,b1,11,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1),b1,b1,b1))}t.push(A.q(b1,new A.c_(B.aJ,B.e,B.i,B.l,b1,B.p,b1,0,A.a([j,B.bd,new A.bu(1,B.b9,p,b1),B.aa,A.w(o,B.dr,b1,B.e,B.i,0,B.p)],u),b1),B.f,b1,b1,new A.p(b1,b1,new A.bE(B.a1,B.a1,new A.ax(m,1,B.r,-1),B.a1),b1,b1,b1,B.m),b1,b1,b1,b1,B.jD,b1,b1,b1))}s=v.length
if(s>4)t.push(A.at(A.bK(!1,A.c(b0.y?"Show less":"Show all ("+s+")",b1,b1,b1,b1,b1,b1,b1,b1,b1,b1),b1,b1,!0,b1,b1,b1,new D.eLc(b0),b1,b1),b1,b1,b1))
if(w.b(b7.h(c0,b6))){w=D.dF(b7.h(c0,b6)).h(0,"flat")
w=A.v(w==null?0:w)
b7=D.dF(b7.h(c0,b6)).h(0,"closed")
b7=A.v(b7==null?0:b7)
b7=A.c("Flat trades today: "+w+" of "+b7+" closed",b1,b1,b1,b1,b1,b1,A.l(b1,b1,b8?C.cl:B.c,b1,b1,b1,b1,b1,b1,b1,b1,12.5,b1,b1,B.C,b1,b1,!0,b1,b1,b1,b1,b1,b1,b1,b1),b1,b1,b1)
B.d.u(t,A.a([B.N,b7,A.c("A flat trade closed between -$1 and +$1.",b1,b1,b1,b1,b1,b1,A.l(b1,b1,b8?C.bT:C.bV,b1,b1,b1,b1,b1,b1,b1,b1,11,b1,b1,b1,b1,b1,!0,b1,b1,b1,b1,b1,b1,b1,b1),b1,b1,b1)],u))}return b0.a1u(b9,A.w(t,B.B,b1,B.e,B.i,0,B.p))},
bGA(d){var w,v,u=this,t=null,s=u.x,r=u.e
r=s?r:J.Ei(r,4).de(0)
s=d.a
w=A.c("Agent activity",t,t,t,t,t,t,A.l(t,t,s?C.cl:B.c,t,t,t,t,t,t,t,t,16,t,t,B.C,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)
v=x.p
v=A.a([A.A(A.a([w,B.aY,A.c("newest first",t,t,t,t,t,t,A.l(t,t,s?C.bT:C.bV,t,t,t,t,t,t,t,t,11,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],v),B.l,t,B.e,B.i,0,t,t),B.aj],v)
if(J.ci(u.e))v.push(new A.C(B.fc,A.c("Nothing yet. A new line appears with every automatic check (every 5 minutes).",t,t,t,t,t,t,A.l(t,t,s?C.bT:C.bV,t,t,t,t,t,t,t,t,12.5,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),t))
for(s=J.aN(r);s.B();)v.push(u.c9b(d,s.gP(s)))
if(J.aa(u.e)>4){if(u.x)s=u.w?"Show older":"Show less"
else s="Show all"
v.push(A.at(A.bK(!1,A.c(s,t,t,t,t,t,t,t,t,t,t),t,t,!0,t,t,t,new D.eKc(u),t,t),t,t,t))}return u.a1u(d,A.w(v,B.B,t,B.e,B.i,0,B.p))},
c9b(d,e){var w,v,u,t,s,r=null,q="price",p=J.a1(e),o=p.h(e,"decision"),n=J.k(o==null?"":o)
A:{if("would buy"===n){o=C.cI
break A}if("would sell"===n){o=B.bE
break A}if("hold"===n){o=B.b1
break A}if("day start"===n||"day end"===n){o=B.cj
break A}if("start"===n){o=C.cI
break A}if("stop"===n){o=C.d6
break A}if(J.z(p.h(e,"kind"),"error"))o=C.d6
else o=d.a?C.bT:C.bV
break A}w=p.h(e,"fast_ma")!=null&&p.h(e,"slow_ma")!=null
v=A.q(r,r,B.f,r,r,new A.p(o,r,r,r,r,r,B.a6),r,8,r,I.Ps,r,r,r,8)
u=n==="hold"?"Still holding":D.hL7(n)
t=x.p
o=A.a([A.c(u,r,r,r,r,r,r,A.l(r,r,o,r,r,r,r,r,r,r,r,12.5,r,r,B.C,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],t)
if(J.z(D.dF(p.h(e,"details")).h(0,"by"),"cron"))B.d.u(o,A.a([B.b6,A.c("automatic",r,r,r,r,r,r,A.l(r,r,d.a?C.bT:C.bV,r,r,r,r,r,r,r,r,10,r,r,B.O,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],t))
o.push(B.aY)
u=p.h(e,"et_time")
u=D.hsJ(J.k(u==null?"":u))
s=d.a
o.push(A.c(u,r,r,r,r,r,r,A.l(r,r,s?C.bT:C.bV,r,r,r,r,r,r,r,r,10.5,r,r,r,r,r,!0,r,r,r,r,r,r,r,r),r,r,r))
o=A.A(o,B.l,r,B.e,B.i,0,r,r)
u=p.h(e,"reason")
u=D.hL7(J.k(u==null?"":u))
o=A.a([o,A.c(u,r,r,r,r,r,r,A.l(r,r,s?C.cl:B.c,r,r,r,r,r,r,r,r,12.5,r,r,r,r,1.3,!0,r,r,r,r,r,r,r,r),r,r,r)],t)
if(p.h(e,q)!=null||w){u=A.a([],x.s)
if(p.h(e,"asset")!=null&&p.h(e,q)!=null)u.push(A.v(p.h(e,"asset"))+" "+D.eh(D.c5(p.h(e,q)),!0,!1))
if(w)u.push("fast "+B.h.a1(D.c5(p.h(e,"fast_ma")),2)+" \xb7 slow "+B.h.a1(D.c5(p.h(e,"slow_ma")),2))
p=B.d.aJ(u,"  \xb7  ")
o.push(A.c(p,r,r,r,r,r,r,A.l(r,r,s?C.bT:C.bV,r,r,r,r,r,r,r,r,10.5,r,r,r,r,r,!0,r,r,r,r,r,r,r,r),r,r,r))}return new A.C(B.Dd,A.A(A.a([v,B.ar,A.E(A.w(o,B.B,r,B.e,B.i,0,B.p),1)],t),B.B,r,B.e,B.i,0,r,r),r)},
cAe(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=this.c
k.toString
k=A.Q(k).aIa(B.L)
w=d.a
v=w?C.cl:B.c
u=w?C.bT:C.bV
t=A.V(C.bXr,B.b1,l,l,l,l)
s=x.p
r=A.A(A.a([new A.d_(1,B.c8,A.c("The rules it follows",l,l,l,l,l,l,A.l(l,l,w?C.cl:B.c,l,l,l,l,l,l,l,l,14.5,l,l,B.C,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),l),B.aa,A.aA(l,A.q(l,C.fvK,B.f,l,l,new A.p(l,l,l,A.n(999),l,B.u5,B.m),l,l,l,l,B.hp,l,l,l),B.y,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,this.gcnI(),l,l,l,l,l,l,!1,B.a4)],s),B.l,l,B.e,B.i,0,l,l)
q=A.c("Read-only, set in the code",l,l,l,l,l,l,A.l(l,l,w?C.bT:C.bV,l,l,l,l,l,l,l,l,11.5,l,l,l,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)
p=A.a([],s)
o=x.g.a(J.t(e,"rules"))
o=J.aN(o==null?B.bM:o)
while(o.B()){n=J.k(o.gP(o))
m=w?C.cl:B.c
p.push(new A.C(C.bG5,new A.c_(B.aJ,B.e,B.i,B.B,l,B.p,l,0,A.a([C.eK2,B.aa,new A.bu(1,B.b9,A.c(n,l,l,l,l,l,l,new A.F(!0,m,l,l,l,l,12.5,l,l,l,l,l,1.35,l,l,l,l,l,l,l,l,l,l,l,l,l),l,l,l),l)],s),l),l))}return this.aBJ(d,new A.oJ(k,A.aG(!1,B.a3,!0,l,N.hl_(l,p,V.aoE,l,u,v,!1,t,l,q,B.hf,r),B.f,l,0,l,l,l,l,l,B.i9),l),B.ag)},
aBJ(d,e,f){var w=null,v=d.a,u=v?B.c.j(0.92):C.id,t=A.n(24)
return A.q(w,e,B.f,w,w,new A.p(u,w,A.K(v?B.c:C.nf,B.r,1),t,A.a([new A.ac(0,B.H,d.gIt(),B.dv,24)],x.V),w,B.m),w,w,w,B.dX,f,w,w,w)},
a1u(d,e){return this.aBJ(d,e,B.bR)},
abB(d,e,f){var w=null,v=f.j(0.12),u=A.n(16),t=A.K(f.j(0.45),B.r,1),s=A.V(B.R6,f,w,w,w,20)
return A.q(w,A.A(A.a([s,B.ar,A.E(A.c(e,w,w,w,w,w,w,A.l(w,w,d.a?C.cl:B.c,w,w,w,w,w,w,w,w,12.5,w,w,w,w,1.35,!0,w,w,w,w,w,w,w,w),w,w,w),1)],x.p),B.l,w,B.e,B.i,0,w,w),B.f,w,w,new A.p(v,w,t,u,w,w,B.m),w,w,w,B.dX,B.bg,w,w,w)},
b4E(d,e,f){var w=null,v=d.a,u=v?B.c.j(0.92):C.id,t=A.K(v?B.c:C.nf,B.r,1)
return A.aG(!1,B.a3,!0,w,A.aM(!1,w,!0,A.q(w,A.V(e,v?C.cl:B.c,w,w,w,18),B.f,w,w,new A.p(w,w,t,w,w,w,B.a6),w,40,w,w,w,w,w,40),B.cH,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),B.f,u,0,w,w,B.cH,w,w,B.ai)},
bai(d,e,f,g,h){var w,v,u,t,s,r,q,p=null
if(f){w=d.a
v=w?C.n7:B.c
u=v
v=w
w=u}else{w=d.a
v=w?C.Ot:C.Oi
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
return A.aA(p,A.cZ(p,A.A(r,B.l,p,B.e,B.P,0,p,p),p,p,B.b0,new A.p(w,p,p,t,p,p,B.m),B.eM,p,p,p,p,X.a2c,p,p,p),B.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,g,p,p,p,p,p,p,!1,B.a4)},
cCj(d,e,f,g){return this.bai(d,e,f,g,null)},
azu(d,e,f){var w=null,v=A.q(w,w,B.f,w,w,new A.p(e,w,w,A.n(2),w,w,B.m),w,3,w,w,w,w,w,14)
return A.A(A.a([v,B.dU,A.c(f,w,w,w,w,w,w,A.l(w,w,d.a?C.bT:C.bV,w,w,w,w,w,w,w,w,11,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),B.l,w,B.e,B.P,0,w,w)},
aBM(d,e){var w=null,v=e.j(0.14),u=A.n(999)
return A.q(w,A.c(d,w,w,w,w,w,w,A.l(w,w,e,w,w,w,w,w,w,w,w,10,w,w,B.u,w,w,!0,w,0.6,w,w,w,w,w,w),w,w,w),B.f,w,w,new A.p(v,w,w,u,w,w,B.m),w,w,w,w,B.f8,w,w,w)},
aBO(d,e,f,g){var w=null,v=d.a,u=v?C.r6:C.r7,t=A.n(16),s=A.c(e,w,w,w,w,w,w,A.l(w,w,v?C.bT:C.bV,w,w,w,w,w,w,w,w,11.5,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)
if(g==null)v=v?C.cl:B.c
else v=g
return A.q(w,A.w(A.a([s,B.cR,new A.d7(B.dn,B.a5,B.f,A.c(f,w,w,w,w,w,w,A.l(w,w,v,w,w,w,w,w,w,w,w,16,w,w,B.C,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w)],x.p),B.B,w,B.e,B.i,0,B.p),B.f,w,w,new A.p(u,w,w,t,w,w,B.m),w,w,w,w,B.bg,w,w,w)},
aBN(d,e,f){return this.aBO(d,e,f,null)},
cOT(d){var w=A.v(d==null?"":d),v=A.bf(w.length>=19?B.a.av(w,0,19):"")
if(v==null)return""
return" \xb7 opens "+B.TO[A.m0(v)-1]+" "+D.LV(v)+" ET"}}
D.Rh.prototype={}
D.a_Z.prototype={
R(){return new D.bfA()}}
D.bfA.prototype={
aBL(d,e){var w=this,v=w.a.c.length,u=B.n.D(B.h.bc(d.a/e*v),0,v-1)
if(u!==w.d)w.l(new D.cYF(w,u))},
C(d){return A.cg(new D.cYO(this))}}
D.bfB.prototype={
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
d7.a=B.d.eL(e1,B.pG)
o=d7.b=B.d.eL(e1,B.oF)
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
e1=t?D.eh(e0,!0,!1):""
r=d5.e.a
q=r?B.c.j(0.92):C.id
p=d5.b
k=A.h0(d6,B.cK,d6,d6,d6,A.cW(d6,d6,d6,d6,d6,d6,d6,d6,d6,A.l(d6,d6,q,d6,d6,d6,d6,d6,p,d6,d6,9.5,d6,d6,B.C,d6,d6,!0,d6,d6,d6,d6,d6,d6,d6,d6),e1),B.a7,B.cb,d6,B.e5,B.cc)
k.eJ()
j=t?k.b.c+12:0
e1=e3.a
i=e1-j
h=i/l
g=new D.cYP(h)
f=new D.cYR(d7,d9)
$.U()
e=A.L()
e.r=(r?C.oT:C.oO).j(0.7).gp(0)
e.c=1
for(d=1;d<=3;++d){a0=d9*d/4
for(a1=0;a1<i;a1+=6)e2.ah(new A.m(a1,a0),new A.m(a1+2,a0),e)}q=A.a([],x.w)
for(a2=w.length,u=0;u<w.length;w.length===a2||(0,A.I)(w),++u){a3=J.t(w[u],"t")
q.push(A.bf(A.v(a3==null?"":a3)))}a4=A.a([],x.T)
for(a2=d5.c,a3=a2.length,a5=l-1,u=0;u<a2.length;a2.length===a3||(0,A.I)(a2),++u){a6=a2[u]
a7=!0
if(q.length!==0)if(B.d.gH(q)!=null){a8=a6.a
a9=B.d.gH(q)
b0=a8.a
if(b0>=a9.gbr())a7=b0===a9.gbr()&&a8.b<a9.gcA()}if(a7)continue
for(a7=a6.a,b1=-1,d=0;d<l;++d){b2=q[d]
if(b2!=null){a8=b2.a
if(a8<=a7.gbr())a8=a8===a7.gbr()&&b2.b>a7.gcA()
else a8=!0
a8=!a8}else a8=!1
if(a8)b1=d}b3=B.d.gal(q)
if(b1>=0){a8=!1
if(b1===a5)if(b3!=null){a8=b3.gbr()
a8=B.n.ao(a7.b-b3.gcA()+1000*(a7.a-a8),6e7)>30
a7=a8}else a7=a8
else a7=a8}else a7=!0
if(a7)continue
a4.push(new A.y(b1,a6))}for(q=a4.length,a2=h*0.3,u=0;u<a4.length;a4.length===q||(0,A.I)(a4),++u){a3=a4[u]
a1=g.$1(a3.a)
$.U()
b4=new A.ar(B.V,B.R,B.X,B.Y,B.W)
b4.r=a3.b.d.j(0.75).gp(0)
b4.c=Math.min(2,Math.max(1,a2))
for(b5=12;b5<d9;b5+=7)e2.ah(new A.m(a1,b5),new A.m(a1,Math.min(d9,b5+3.5)),b4)}if(v){v=new D.cYQ(d5,l,g,f,e2)
v.$2("s",B.b1)
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
b9=a3==null?0:a3}c0=b7>=b6?C.cI:E.i1
c1=a2&&q!==d
$.U()
c2=new A.ar(B.V,B.R,B.X,B.Y,B.W)
c2.r=(c1?c0.j(0.45):c0).gp(0)
a3=g.$1(d)
a7=f.$1(b8)
a8=g.$1(d)
a9=f.$1(b9)
c2.c=1.4
e2.ah(new A.m(a3,a7),new A.m(a8,a9),c2)
c3=f.$1(Math.max(b6,b7))
c4=f.$1(Math.min(b6,b7))
a9=A.bx(new A.a5(g.$1(d)-v,c3,g.$1(d)+v,Math.max(c4,c3+1.5)),B.hG)
c2.b=B.R
e2.aq(a9,c2)}if(t){v=f.$1(e0)
d5.bQO(e2,v,i,(r?C.cl:B.c).j(0.45),"")
e0=f.$1(e0)
v=k.b.a.c
v=v.gb4(v)
t=k.b.a.c
c5=J.a5j(e0,v/2+2,d9-t.gb4(t)/2-2)
t=i+3
v=k.b.a.c
v=c5-v.gb4(v)/2-2
e0=k.b
a3=e0.c
e0=e0.a.c
e0=A.bx(new A.a5(t,v,t+(a3+8),v+(e0.gb4(e0)+4)),B.pp)
$.U()
v=A.L()
v.r=(r?C.cl:B.c).j(0.85).gp(0)
e2.aq(e0,v)
e0=k.b.a.c
k.a5(e2,new A.m(i+7,c5-e0.gb4(e0)/2))}for(e0=a4.length,v=x.v,c6=0,u=0;u<a4.length;a4.length===e0||(0,A.I)(a4),++u){t=a4[u]
a6=t.b
a1=g.$1(t.a)
c3=1+B.n.F(c6,2)*12;++c6
t=$.U()
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
t=new A.ar(B.V,B.R,B.X,B.Y,B.W)
a3=a6.d
t.r=a3.gp(0)
e2.af(c7,t)
c8=new A.iU(new A.eF(a6.c,d6,d6,B.cV,d6,d6,d6,d6,d6,d6,new A.F(!0,a3,d6,p,d6,d6,10,B.C,d6,d6,d6,d6,d6,d6,d6,d6,d6,d6,d6,d6,d6,d6,d6,d6,d6,d6)),B.a7,B.cb,new A.k3(1),d6,d6,d6,d6,B.cc,d6,B.cK)
c8.eJ()
t=a1+7
a3=c8.b.c
t=t+a3<=i?t:a1-7-a3
c8.a5(e2,new A.m(t,c3-1))}c8=A.h0(d6,B.cK,d6,d6,d6,d6,B.a7,B.cb,d6,B.e5,B.cc)
for(e0=[0,l/3|0,B.n.ao(2*l,3),a5],v=e0.length,d8-=13,u=0;u<v;++u){d=e0[u]
t=J.t(w[d],"t")
b2=A.bf(A.v(t==null?"":t))
if(b2==null)continue
t=D.LV(D.SO(b2))
a3=r?C.bT:C.bV
c8.sb1(0,new A.eF(t,d6,d6,B.cV,d6,d6,d6,d6,d6,d6,new A.F(!0,a3,d6,p,d6,d6,10,d6,d6,d6,d6,d6,d6,d6,d6,d6,d6,d6,d6,d6,d6,d6,d6,d6,d6,d6)))
c8.eJ()
t=g.$1(d)
a3=c8.b.c
c8.a5(e2,new A.m(B.h.D(t-a3/2,0,e1-a3),d8))}if(a2&&q<l){s=w[q]
a1=g.$1(q)
d8=J.a1(s)
c9=f.$1(D.c5(d8.h(s,"c")))
$.U()
d0=A.L()
d0.r=(r?C.cl:B.c).j(0.5).gp(0)
d0.c=1
for(b5=0;b5<d9;b5+=6)e2.ah(new A.m(a1,b5),new A.m(a1,b5+3),d0)
$.U()
e0=A.L()
e0.r=(r?B.c.j(0.92):C.id).gp(0)
e2.O(new A.m(a1,c9),6,e0)
e0=A.L()
e0.r=(r?C.cl:B.c).gp(0)
e0.b=B.ae
e0.c=2.5
e2.O(new A.m(a1,c9),6,e0)
e0=d8.h(s,"t")
b2=A.bf(A.v(e0==null?"":e0))
e0=b2==null?"":D.LV(D.SO(b2))+" ET\n"
d8=D.eh(D.c5(d8.h(s,"c")),!0,!1)
c8.sb1(0,A.cW(d6,d6,d6,d6,d6,d6,d6,d6,d6,A.l(d6,d6,r?B.c:C.n7,d6,d6,d6,d6,d6,p,d6,d6,11.5,d6,d6,B.C,d6,1.3,!0,d6,d6,d6,d6,d6,d6,d6,d6),e0+d8))
c8.sDC(0,B.K)
c8.eJ()
d8=c8.b
d1=d8.c+18
d8=d8.a.c
d2=d8.gb4(d8)+10
d3=B.h.D(a1-d1/2,0,e1-d1)
d4=Math.max(0,c9-d2-14)
e1=A.bx(new A.a5(d3,d4,d3+d1,d4+d2),B.hT)
d8=A.L()
d8.r=(r?C.n7:B.c).gp(0)
e2.aq(e1,d8)
c8.a5(e2,new A.m(d3+9,d4+5))}},
bQP(d,e,f,g,h,i){var w,v,u,t,s,r,q,p,o,n,m=null
$.U()
w=A.L()
w.r=g.gp(0)
w.c=1.2
for(v=0;v<f;v+=7)d.ah(new A.m(v,e),new A.m(v+3.5,e),w)
if(h.length===0)return
u=A.h0(m,B.cK,m,m,m,A.cW(m,m,m,m,m,m,m,m,m,A.l(m,m,B.c,m,m,m,m,m,this.b,m,m,10,m,m,B.C,m,m,!0,m,m,m,m,m,m,m,m),h),B.a7,B.cb,m,B.e5,B.cc)
u.eJ()
t=u.b
s=t.c+12
t=t.a.c
r=t.gb4(t)+6
q=i?0:f-s
t=e-r/2
p=A.bx(new A.a5(q,t,q+s,t+r),B.qv)
$.U()
o=A.L()
if(i)n=F.qW
else n=this.e.a?C.n7:B.c
o.r=n.gp(0)
d.aq(p,o)
u.a5(d,new A.m(q+6,t+3))},
bQO(d,e,f,g,h){return this.bQP(d,e,f,g,h,!1)},
aD(d){var w=this
return d.d!==w.d||d.x!=w.x||d.r!==w.r||d.w!==w.w||d.e.a!==w.e.a||d.c!==w.c}}
D.bxD.prototype={
a5(d,e){var w,v,u,t,s,r,q,p,o,n,m=null,l=this.b
if(l.length<2)return
w=A.T(l).k("O<1,H>")
v=A.B(new A.O(l,new D.flH(),w),w.k("aj.E"))
u=B.d.eL(v,B.pG)
t=B.d.eL(v,B.oF)-u
if(t<1e-9)t=1
l=$.U()
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
s.ac()}}n=A.A_(s)
n.E(new A.aq(l,r))
n.E(new A.aq(0,r))
n.E(new A.bz())
$.U()
w=A.L()
p=this.c
w.san(new A.a6(B.aV,B.b_,B.w,A.a([p.j(0.25),p.j(0)],x.O),m,m).az(0,new A.a5(0,0,0+l,0+r)))
d.af(n,w)
w=A.L()
w.r=p.gp(0)
w.b=B.ae
w.c=1.8
w.e=B.dQ
d.af(s,w)
w=B.d.gal(v)
o=A.L()
o.r=p.gp(0)
d.O(new A.m(l,r-(w-u)/t*r),3,o)},
aD(d){return d.b!==this.b||!d.c.A(0,this.c)}}
D.zc.prototype={}
D.RN.prototype={
gIt(){return this.a?B.cj.j(0.08):B.v.j(0.35)}}
D.P2.prototype={
R(){return new D.aH9(A.a([],x.t))}}
D.aH9.prototype={
Z(){var w=this
w.a4()
w.a.toString
w.Bo()
w.BL()
w.x=A.d5(B.m3,new D.eaQ(w))},
t(){var w=this.x
if(w!=null)w.a2(0)
this.a3()},
Bo(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$Bo=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.aB(),$async$Bo)
case 7:q=e
n=r.a.c
p=A.aV(J.t(q.a,"ngmy_signal_grid_fast_"+n))
if(p==null||r.c==null||r.d!=null){w=1
break}o=A.a0(x.f.a(B.T.aN(0,p,null)),x.N,x.z)
r.l(new D.eai(r,o))
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
return A.i($async$Bo,v)},
BL(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j
var $async$BL=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:m=x.N
l=x.z
w=3
return A.b(A.hc(A.a([A.fJ(A.J(["action","fsStatus","system",r.a.c],m,l),!1,!1,!1,!1,B.x8),A.fJ(A.J(["action","fsLog","system",r.a.c,"limit",30],m,l),!1,!1,!1,!1,B.m3)],x.o),x.h),$async$BL)
case 3:k=e
l=J.a1(k)
q=l.h(k,0)
o=l.h(k,1)
if(r.c==null){w=1
break}r.l(new D.eax(r,q,o))
w=q!=null&&J.z(J.t(q,"ok"),!0)?4:5
break
case 4:t=7
w=10
return A.b(A.aB(),$async$BL)
case 10:p=e
w=11
return A.b(p.aB("String","ngmy_signal_grid_fast_"+r.a.c,B.T.au(A.J(["s",q,"log",r.e],m,x.K),null)),$async$BL)
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
return A.i($async$BL,v)},
zu(d){return this.cDb(d)},
cDb(d){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$zu=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.d
t.l(new D.eaD(t,d))
w=3
return A.b(A.fJ(A.J(["action","fsSet","system",t.a.c,"enabled",d],x.N,x.z),!1,!1,!1,!1,B.x8),$async$zu)
case 3:s=f
if(t.c==null){w=1
break}t.l(new D.eaE(t,s,r))
case 1:return A.h(u,v)}})
return A.i($async$zu,v)},
C(c3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8=this,a9=null,b0="brakePaused",b1="enabled",b2="entryPrice",b3="weekendNote",b4="pnlSum",b5="brakeNote",b6=A.Q(c3).ax.a===B.dg,b7=new D.RN(b6),b8=a8.a.c==="options"?"Options":"Scalper",b9=a8.d,c0=D.dF(b9==null?a9:b9.h(0,"state")),c1=J.z(c0.h(0,b0),!0),c2=J.z(c0.h(0,b1),!0)&&!c1
b9=b6?C.te:C.tc
w=b6?C.te:C.tc
w=A.a([w,b6?C.Om:C.Oe],x.O)
v=a8.a1w(b7,B.eH,new D.eaO(c3))
u=a8.a.c==="options"
t=u?B.aA:B.as
s=A.n(11)
t=A.q(a9,A.V(u?B.fQ:B.rx,B.c,a9,a9,a9,20),B.f,a9,a9,new A.p(t,a9,a9,s,a9,a9,B.m),a9,34,a9,a9,a9,a9,a9,34)
u=A.c(b8,a9,a9,a9,a9,a9,a9,A.l(a9,a9,b6?C.cl:B.c,a9,a9,a9,a9,a9,a9,a9,a9,17,a9,a9,B.C,a9,a9,!0,a9,a9,a9,a9,a9,a9,a9,a9),a9,a9,a9)
s=x.p
u=A.a([v,B.ar,t,B.ar,A.E(A.w(A.a([u,A.c("Fast system",a9,a9,a9,a9,a9,a9,A.l(a9,a9,b6?C.bT:C.bV,a9,a9,a9,a9,a9,a9,a9,a9,11.5,a9,a9,a9,a9,a9,!0,a9,a9,a9,a9,a9,a9,a9,a9),a9,a9,a9)],s),B.B,a9,B.e,B.i,0,B.p),1)],s)
if(a8.d!=null){if(c1)v=C.d6
else if(c2)v=C.cI
else v=b6?C.bT:C.bV
v=v.j(0.14)
t=A.n(999)
if(c1)r="Paused"
else r=c2?"Running":"Stopped"
if(c1)q=C.d6
else if(c2)q=C.cI
else q=b6?C.bT:C.bV
u.push(A.q(a9,A.c(r,a9,a9,a9,a9,a9,a9,A.l(a9,a9,q,a9,a9,a9,a9,a9,a9,a9,a9,12,a9,a9,B.C,a9,a9,!0,a9,a9,a9,a9,a9,a9,a9,a9),a9,a9,a9),B.f,a9,a9,new A.p(v,a9,a9,t,a9,a9,B.m),a9,a9,a9,a9,B.h0,a9,a9,a9))}u.push(B.aa)
u.push(a8.a1w(b7,B.mF,a8.r?a9:new D.eaP(a8)))
v=A.A(u,B.l,a9,B.e,B.i,0,a9,a9)
if(a8.f)b6=B.l3
else{u=a8.d
if(u==null){b6=a8.w
b6=A.a([a8.RN(b7,b6==null?"Nothing to show yet.":b6,B.b1)],s)}else{c0=D.dF(u.h(0,"state"))
t=x.f
p=t.b(c0.h(0,"shadow"))?D.dF(c0.h(0,"shadow")):a9
r=A.a([],s)
if(p!=null){q=D.dF(c0.h(0,"mark"))
o=t.b(p.h(0,"option"))?D.dF(p.h(0,"option")):a9
t=p.h(0,"entryAt")
n=A.bf(A.v(t==null?"":t))
t=p.h(0,"maxHold")
m=B.h.M(D.c5(t==null?30:t))
l=n==null?a9:n.bM(A.dw(0,0,0,0,m,0).a)
k=D.c5(q.h(0,"pnl"))
t=a8.a.c==="options"?B.aA:B.as
j=A.c("OPEN TRADE",a9,a9,a9,a9,a9,a9,A.l(a9,a9,b6?C.bT:C.bV,a9,a9,a9,a9,a9,a9,a9,a9,10.5,a9,a9,B.u,a9,a9,!0,a9,0.8,a9,a9,a9,a9,a9,a9),a9,a9,a9)
j=A.A(A.a([j,B.aY,new D.aBZ(l,a8.a.c==="options"?B.aA:B.as,a9)],s),B.l,a9,B.e,B.i,0,a9,a9)
i=o!=null
if(i){h=A.v(p.h(0,"symbol"))
g=D.eh(D.c5(o.h(0,"strike")),!0,!1)
f=o.h(0,"right")
h=h+" "+g+" "+A.v(f==null?"call":f)+" \xb7 expires "+D.aRM(o.h(0,"expiry"))}else h=A.v(p.h(0,"symbol"))
h=A.c(h,a9,a9,a9,a9,a9,a9,A.l(a9,a9,b6?C.cl:B.c,a9,a9,a9,a9,a9,a9,a9,a9,17,a9,a9,B.C,a9,a9,!0,a9,a9,a9,a9,a9,a9,a9,a9),a9,a9,a9)
if(i){i=D.eh(D.c5(p.h(0,b2)),!0,!1)
g=D.eh(D.c5(q.h(0,"cost")),!0,!1)
q=J.z(q.h(0,"priced"),!1)?"no price yet":D.eh(D.c5(q.h(0,"price")),!0,!1)
q="Premium paid "+i+" x 100 = "+g+" \xb7 now "+q}else q="$"+B.h.a1(D.c5(q.h(0,"cost")),0)+" bought at "+D.eh(D.c5(p.h(0,b2)),!0,!1)+" \xb7 now "+D.eh(D.c5(q.h(0,"price")),!0,!1)
q=A.c(q,a9,a9,a9,a9,a9,a9,A.l(a9,a9,b6?C.bT:C.bV,a9,a9,a9,a9,a9,a9,a9,a9,12,a9,a9,a9,a9,a9,!0,a9,a9,a9,a9,a9,a9,a9,a9),a9,a9,a9)
i=D.eh(k,!0,!0)
g=k>=0
i=A.c(i,a9,a9,a9,a9,a9,a9,A.l(a9,a9,g?C.cI:C.d6,a9,a9,a9,a9,a9,a9,a9,a9,26,a9,a9,B.u,a9,a9,!0,a9,a9,a9,a9,a9,a9,a9,a9),a9,a9,a9)
g=g?"winning right now":"losing right now"
i=A.A(A.a([i,B.aa,A.c(g,a9,a9,a9,a9,a9,a9,A.l(a9,a9,b6?C.bT:C.bV,a9,a9,a9,a9,a9,a9,a9,a9,12,a9,a9,a9,a9,a9,!0,a9,a9,a9,a9,a9,a9,a9,a9),a9,a9,a9)],s),B.l,a9,B.e,B.i,0,a9,a9)
g=D.hqP(p.h(0,"entryAt"))
f=l==null?"":" \xb7 max hold "+m+" min, closes by "+D.LV(D.SO(l.aa()))+" ET"
e=p.h(0,"tpUsd")==null?"":" \xb7 take profit +"+D.eh(D.c5(p.h(0,"tpUsd")),!0,!1)+" / stop -"+D.eh(D.c5(p.h(0,"slUsd")),!0,!1)
r.push(a8.b4D(b7,t,A.w(A.a([j,B.N,h,B.bs,q,B.aj,i,A.c("Bought "+g+f+e,a9,a9,a9,a9,a9,a9,A.l(a9,a9,b6?C.bT:C.bV,a9,a9,a9,a9,a9,a9,a9,a9,11.5,a9,a9,a9,a9,a9,!0,a9,a9,a9,a9,a9,a9,a9,a9),a9,a9,a9)],s),B.B,a9,B.e,B.i,0,B.p)))}r.push(a8.cao(b7,u))
r.push(a8.bMY(b7,u))
p=D.dF(u.h(0,"shared"))
d=p.h(0,"balance")
a0=D.c5(p.h(0,"closed"))+D.c5(p.h(0,"open"))
t=A.n(26)
q=A.A(A.a([C.b_S,B.aY,A.q(a9,C.h8N,B.f,a9,a9,new A.p(B.c.j(0.14),a9,a9,A.n(999),a9,a9,B.m),a9,a9,a9,a9,B.f8,a9,a9,a9)],s),B.l,a9,B.e,B.i,0,a9,a9)
j=A.c(d==null?"\u2014":D.eh(D.c5(d),!0,!1),a9,a9,a9,a9,a9,a9,C.fM2,a9,a9,a9)
i=D.eh(a0,!0,!0)
if(a0>0)h=C.cI
else h=a0<0?C.d6:B.ac
h=A.c(i+" from trades of every system",a9,a9,a9,a9,a9,a9,A.l(a9,a9,h,a9,a9,a9,a9,a9,a9,a9,a9,12.5,a9,a9,B.C,a9,a9,!0,a9,a9,a9,a9,a9,a9,a9,a9),a9,a9,a9)
r.push(A.q(a9,A.w(A.a([q,B.at,new A.d7(B.dn,B.a5,B.f,j,a9),h,B.bs,A.c("Alpaca account "+(p.h(0,"equity")==null?"\u2014":D.eh(D.c5(p.h(0,"equity")),!0,!1))+" (unchanged, no orders are sent)",a9,a9,a9,a9,a9,a9,B.FP,a9,a9,a9)],s),B.B,a9,B.e,B.i,0,B.p),B.f,a9,a9,new A.p(a9,a9,a9,t,a9,C.avV,B.m),a9,a9,a9,B.dX,B.f7,a9,a9,a9))
t=a8.w
if(t!=null)r.push(a8.RN(b7,t,C.d6))
if(J.z(c0.h(0,b0),!0)){t=c0.h(0,"brakeReason")
r.push(a8.RN(b7,"Paused by this system's brake. "+A.v(t==null?"":t)+y.g,C.d6))}r.push(a8.aBK(b7,c0))
if(u.h(0,b3)!=null){t=A.V(B.asv,b6?C.bT:C.bV,a9,a9,a9,16)
q=A.v(u.h(0,b3))
r.push(new A.C(C.bLV,A.A(A.a([t,B.b6,A.E(A.c(q,a9,a9,a9,a9,a9,a9,A.l(a9,a9,b6?C.bT:C.bV,a9,a9,a9,a9,a9,a9,a9,a9,11.5,a9,a9,B.O,a9,a9,!0,a9,a9,a9,a9,a9,a9,a9,a9),a9,a9,a9),1)],s),B.l,a9,B.e,B.i,0,a9,a9),a9))}r.push(a8.aCq(b7,u))
r.push(a8.c7U(b7,u))
a1=D.dF(u.h(0,"record"))
a2=D.dF(u.h(0,"todayStats"))
a3=a2.h(0,"winRatePct")
a4=D.c5(a2.h(0,"pnl"))
t=a3==null
if(t)a5=b6?C.cl:B.c
else a5=D.c5(a3)>=50?C.cI:C.d6
q=A.c("TODAY: WIN RATE AND P/L",a9,a9,a9,a9,a9,a9,A.l(a9,a9,b6?C.bT:C.bV,a9,a9,a9,a9,a9,a9,a9,a9,10.5,a9,a9,B.u,a9,a9,!0,a9,0.9,a9,a9,a9,a9,a9,a9),a9,a9,a9)
j=t?"No closed trades today":B.h.a1(D.c5(a3),0)+"%"
j=A.a([A.c(j,a9,a9,a9,a9,a9,a9,A.l(a9,a9,a5,a9,a9,a9,a9,a9,a9,a9,a9,t?16:30,a9,a9,B.u,a9,a9,!0,a9,a9,a9,a9,a9,a9,a9,a9),a9,a9,a9),B.ar],s)
if(!t){t=D.eh(a4,!0,!0)
if(a4>0)i=C.cI
else if(a4<0)i=C.d6
else i=b6?C.cl:B.c
j.push(new A.C(Q.Pm,A.c(t,a9,a9,a9,a9,a9,a9,A.l(a9,a9,i,a9,a9,a9,a9,a9,a9,a9,a9,16,a9,a9,B.C,a9,a9,!0,a9,a9,a9,a9,a9,a9,a9,a9),a9,a9,a9),a9))}t=A.A(j,B.dr,a9,B.e,B.i,0,a9,a9)
j=a2.h(0,"wins")
j=A.v(j==null?0:j)
i=a2.h(0,"closed")
i=A.v(i==null?0:i)
t=A.E(A.w(A.a([q,B.at,t,A.c(j+" won out of "+i+" closed today",a9,a9,a9,a9,a9,a9,A.l(a9,a9,b6?C.bT:C.bV,a9,a9,a9,a9,a9,a9,a9,a9,12,a9,a9,a9,a9,a9,!0,a9,a9,a9,a9,a9,a9,a9,a9),a9,a9,a9)],s),B.B,a9,B.e,B.i,0,B.p),1)
q=A.c("All time",a9,a9,a9,a9,a9,a9,A.l(a9,a9,b6?C.bT:C.bV,a9,a9,a9,a9,a9,a9,a9,a9,11,a9,a9,a9,a9,a9,!0,a9,a9,a9,a9,a9,a9,a9,a9),a9,a9,a9)
j=D.eh(D.c5(a1.h(0,b4)),!0,!0)
if(D.c5(a1.h(0,b4))>0)i=C.cI
else if(D.c5(a1.h(0,b4))<0)i=C.d6
else i=b6?C.cl:B.c
i=A.c(j,a9,a9,a9,a9,a9,a9,A.l(a9,a9,i,a9,a9,a9,a9,a9,a9,a9,a9,18,a9,a9,B.C,a9,a9,!0,a9,a9,a9,a9,a9,a9,a9,a9),a9,a9,a9)
j=a1.h(0,"wins")
j=A.v(j==null?0:j)
h=a1.h(0,"losses")
h=A.v(h==null?0:h)
r.push(a8.wH(b7,A.A(A.a([t,A.w(A.a([q,i,A.c(j+" W / "+h+" L",a9,a9,a9,a9,a9,a9,A.l(a9,a9,b6?C.bT:C.bV,a9,a9,a9,a9,a9,a9,a9,a9,11,a9,a9,a9,a9,a9,!0,a9,a9,a9,a9,a9,a9,a9,a9),a9,a9,a9)],s),B.dr,a9,B.e,B.i,0,B.p)],s),B.l,a9,B.e,B.i,0,a9,a9)))
if(a8.a.c==="options"&&u.h(0,b5)!=null)r.push(a8.RN(b7,A.v(u.h(0,b5)),B.b1))
if(a8.a.c==="options")r.push(a8.coM(b7,u))
r.push(a8.cDB(b7,u))
t=c0.h(0,"lastNote")
a6=J.k(t==null?"":t)
t=c0.h(0,"lastNoteAt")
if(t==null)t=c0.h(0,"lastTickAt")
a7=A.bf(A.v(t==null?"":t))
if(J.z(c0.h(0,b1),!0))t=C.cI
else t=b6?C.bT:C.bV
t=A.V(O.QH,t,a9,a9,a9,18)
q=J.z(c0.h(0,b1),!0)?"Checks every minute by itself":"Stopped: press Start to let it check every minute"
q=A.a([A.c(q,a9,a9,a9,a9,a9,a9,A.l(a9,a9,b6?C.cl:B.c,a9,a9,a9,a9,a9,a9,a9,a9,13,a9,a9,B.C,a9,a9,!0,a9,a9,a9,a9,a9,a9,a9,a9),a9,a9,a9)],s)
if(a6.length!==0){j=a7==null?"":D.LV(D.SO(a7.aa()))+" ET \xb7 "
B.d.u(q,A.a([B.cR,A.c(j+a6,a9,a9,a9,a9,a9,a9,A.l(a9,a9,b6?C.bT:C.bV,a9,a9,a9,a9,a9,a9,a9,a9,12,a9,a9,a9,a9,1.3,!0,a9,a9,a9,a9,a9,a9,a9,a9),a9,a9,a9)],s))}r.push(a8.wH(b7,A.A(A.a([t,B.aa,A.E(A.w(q,B.B,a9,B.e,B.i,0,B.p),1)],s),B.B,a9,B.e,B.i,0,a9,a9)))
r.push(a8.cLP(b7,u))
r.push(a8.bGz(b7))
r.push(a8.cAd(b7,u))
r.push(a8.wH(b7,A.A(A.a([C.c78,B.aa,A.E(A.c("No order is ever sent to Alpaca. Orders are disabled.",a9,a9,a9,a9,a9,a9,A.l(a9,a9,b6?C.bT:C.bV,a9,a9,a9,a9,a9,a9,a9,a9,11.5,a9,a9,a9,a9,1.3,!0,a9,a9,a9,a9,a9,a9,a9,a9),a9,a9,a9),1)],s),B.l,a9,B.e,B.i,0,a9,a9)))
b6=r}b6=A.Gn(A.ck(b6,a9,a9,C.aoX,a9,a9,B.ah,!1),a9,a8.gcih())}return A.c6(a9,b9,A.q(a9,A.bn(!0,A.w(A.a([new A.C(B.h1,v,a9),A.E(b6,1)],s),B.l,a9,B.e,B.i,0,B.p),!0,!1,B.ag,!0,!0),B.f,a9,a9,new A.p(a9,a9,a9,a9,a9,new A.a6(B.aV,B.b_,B.w,w,a9,a9),B.m),a9,a9,a9,a9,a9,a9,a9,a9),a9,!1,!1,a9,a9)},
aBK(d,e){var w,v,u,t=this,s=null,r=J.z(e.h(0,"enabled"),!0)&&!J.z(e.h(0,"brakePaused"),!0),q=r?C.d6:C.cI
q=A.bp(q,s,s,s,s,s,s,s,new A.ba(A.n(999),B.a1),s,s,s)
w=t.r
if(!w)t.a.toString
v=w?s:new D.eab(t,r)
if(w)w=B.rT
else w=A.V(r?B.vL:B.fR,s,s,s,s,s)
if(r)u="Stop "+(t.a.c==="options"?"Options":"Scalper")
else u="Start "+(t.a.c==="options"?"Options":"Scalper")
return new A.C(B.dX,new A.a4(1/0,52,A.df(w,s,A.c(u,s,s,s,s,s,s,B.mU,s,s,s),v,q),s),s)},
aCq(b5,b6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6=this,a7=null,a8="parts",a9="passes",b0=D.dF(b6.h(0,"pace")),b1=b0.h(0,"target"),b2=B.h.M(D.c5(b1==null?40:b1)),b3=B.h.M(D.c5(b0.h(0,"trades"))),b4=D.c5(b0.h(0,"thresholdPct"))
b1=b0.h(0,"entryFloor")
w=D.c5(b1==null?0.5:b1)
v=B.h.M(D.c5(b0.h(0,"minutesLeft")))
b1=x.g.a(b6.h(0,"ranking"))
if(b1==null)b1=B.bM
u=x.f
b1=J.cL(b1,u)
t=x.P
b1=A.ct(b1,new D.eau(),b1.$ti.k("M.E"),t)
s=A.B(b1,A.a3(b1).k("M.E"))
r=b3>=b2?E.i1:C.cI
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
m=A.A(A.a([n,B.aY,a6.Cg(m,b1?C.bT:C.bV)],l),B.l,a7,B.e,B.i,0,a7,a7)
n=""+b3
k=""+b2
j=A.A(A.a([A.E(A.c("Trades today: "+n+" of "+k,a7,a7,a7,a7,a7,a7,A.l(a7,a7,b1?C.cl:B.c,a7,a7,a7,a7,a7,a7,a7,a7,22,a7,a7,B.u,a7,a7,!0,a7,a7,a7,a7,a7,a7,a7,a7),a7,a7,a7),1)],l),B.dr,a7,B.e,B.i,0,a7,a7)
i=b0.h(0,"waiting")
n=A.c(n+" of "+k+" \u2014 "+A.v(i==null?"waiting for a real setup":i)+" ("+k+" is a maximum, never a target)",a7,a7,a7,a7,a7,a7,A.l(a7,a7,r,a7,a7,a7,a7,a7,a7,a7,a7,12.5,a7,a7,B.C,a7,1.3,!0,a7,a7,a7,a7,a7,a7,a7,a7),a7,a7,a7)
k=A.cg(new D.eav(b5,b3,b2,r))
i=b1?C.r6:C.r7
h=A.n(12)
g=B.h.a1(w,2)
g=A.a([A.c("Entry floor today: +"+g+"%",a7,a7,a7,a7,a7,a7,A.l(a7,a7,b1?C.cl:B.c,a7,a7,a7,a7,a7,a7,a7,a7,13,a7,a7,B.C,a7,a7,!0,a7,a7,a7,a7,a7,a7,a7,a7),a7,a7,a7)],l)
if(b4>w+0.001)g.push(A.c("Needed for the next entry: +"+B.h.a1(b4,2)+"% (raised by a loss streak or a lesson)",a7,a7,a7,a7,a7,a7,C.aZz,a7,a7,a7))
g.push(B.bs)
g.push(A.c("An entry needs the 5-minute and 15-minute trends to agree, at least that move in the trade's direction in the last 30 minutes, the price past both averages, and no more than 1.5% in the last hour (no chasing). Falling behind never loosens a rule.",a7,a7,a7,a7,a7,a7,A.l(a7,a7,b1?C.bT:C.bV,a7,a7,a7,a7,a7,a7,a7,a7,11,a7,a7,a7,a7,1.3,!0,a7,a7,a7,a7,a7,a7,a7,a7),a7,a7,a7))
n=A.a([m,B.aj,j,B.bs,n,B.N,k,B.S,A.q(a7,A.w(g,B.B,a7,B.e,B.i,0,B.p),B.f,a7,a7,new A.p(i,a7,a7,h,a7,a7,B.m),a7,a7,a7,a7,B.bS,a7,a7,1/0)],l)
if(s.length!==0){m=A.a([B.N,A.c("Top 3 ranked right now",a7,a7,a7,a7,a7,a7,A.l(a7,a7,b1?C.cl:B.c,a7,a7,a7,a7,a7,a7,a7,a7,12.5,a7,a7,B.C,a7,a7,!0,a7,a7,a7,a7,a7,a7,a7,a7),a7,a7,a7),B.bs],l)
for(t=A.aoT(s,0,t),k=J.aN(t.a),t=t.b,j=new A.Fh(k,t),i=x.N,h=x.z;j.B();){g=j.c
g=g>=0?new A.y(t+g,k.gP(k)):A.bi(A.fd())
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
if(J.z(e.h(f,a9),!0))a5=C.cI
else a5=b1?C.bT:C.bV
e=J.z(e.h(f,a9),!0)?B.C:B.cD
m.push(new A.C(B.rk,A.c(""+(g.a+1)+". "+d+" \xb7 score "+a0+" (strength and trend "+a1+", record "+a2+", setup size "+a3+") \xb7 "+a4,a7,a7,a7,a7,a7,a7,new A.F(!0,a5,a7,a7,a7,a7,11.5,e,a7,a7,a7,a7,1.3,a7,a7,a7,a7,a7,a7,a7,a7,a7,a7,a7,a7,a7),a7,a7,a7),a7))}B.d.u(n,m)}if(p.length!==0){u=A.cW(A.a([A.cW(a7,a7,a7,a7,a7,a7,a7,a7,a7,A.l(a7,a7,a6.a.c==="options"?B.aA:B.as,a7,a7,a7,a7,a7,a7,a7,a7,a7,a7,a7,B.u,a7,a7,!0,a7,a7,a7,a7,a7,a7,a7,a7),"What it learned: "),A.cW(a7,a7,a7,a7,a7,a7,a7,a7,a7,a7,p)],x.R),a7,a7,a7,a7,a7,a7,a7,a7,a7,a7)
B.d.u(n,A.a([B.N,A.GJ(u,a7,a7,A.l(a7,a7,b1?C.cl:B.c,a7,a7,a7,a7,a7,a7,a7,a7,12,a7,a7,a7,a7,1.35,!0,a7,a7,a7,a7,a7,a7,a7,a7),a7)],l))}if(o.length!==0)B.d.u(n,A.a([B.aj,A.c(o,a7,a7,a7,a7,a7,a7,A.l(a7,a7,E.i1,a7,a7,a7,a7,a7,a7,a7,a7,12,a7,a7,B.O,a7,1.3,!0,a7,a7,a7,a7,a7,a7,a7,a7),a7,a7,a7)],l))
if(q.length!==0){u=A.cW(A.a([A.cW(a7,a7,a7,a7,a7,a7,a7,a7,a7,A.l(a7,a7,a6.a.c==="options"?B.aA:B.as,a7,a7,a7,a7,a7,a7,a7,a7,a7,a7,a7,B.u,a7,a7,!0,a7,a7,a7,a7,a7,a7,a7,a7),"Last decision: "),A.cW(a7,a7,a7,a7,a7,a7,a7,a7,a7,a7,q)],x.R),a7,a7,a7,a7,a7,a7,a7,a7,a7,a7)
B.d.u(n,A.a([B.aj,A.GJ(u,a7,a7,A.l(a7,a7,b1?C.cl:B.c,a7,a7,a7,a7,a7,a7,a7,a7,12,a7,a7,a7,a7,1.3,!0,a7,a7,a7,a7,a7,a7,a7,a7),a7)],l))}return a6.wH(b5,A.w(n,B.B,a7,B.e,B.i,0,B.p))},
c7U(a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=this,a2=null,a3="text",a4=D.dF(a6.h(0,"learning"))
if(a4.a===0)return B.bK
w=new D.eaf(a4)
v=w.$1("lessons")
u=w.$1("benched")
t=w.$1("lastLosses")
s=x.g.a(a4.h(0,"review"))
if(s==null)s=B.bM
s=J.b8(s,new D.eac(),x.N)
r=A.B(s,s.$ti.k("aj.E"))
s=a4.h(0,"pauseUntil")
q=A.bf(A.v(s==null?"":s))
p=new D.ead(a5)
o=new D.eae(a1,a5)
s=A.V(B.Rf,a1.a.c==="options"?B.aA:B.as,a2,a2,a2,18)
n=a5.a
m=A.c("LEARNING",a2,a2,a2,a2,a2,a2,A.l(a2,a2,n?C.cl:B.c,a2,a2,a2,a2,a2,a2,a2,a2,12,a2,a2,B.u,a2,a2,!0,a2,0.8,a2,a2,a2,a2,a2,a2),a2,a2,a2)
l=J.a1(v)
k=l.gI(v)===0?"NO LESSONS YET":""+l.gI(v)+" ACTIVE"
if(l.gI(v)===0)j=n?C.bT:C.bV
else j=a1.a.c==="options"?B.aA:B.as
i=x.p
j=A.a([A.A(A.a([s,B.b6,m,B.aY,a1.Cg(k,j)],i),B.l,a2,B.e,B.i,0,a2,a2)],i)
if(J.z(a4.h(0,"setupNeeded"),!0))j.push(new A.C(B.hA,A.c("The learning store is not set up yet: run the learning SQL in Supabase.",a2,a2,a2,a2,a2,a2,A.l(a2,a2,C.d6,a2,a2,a2,a2,a2,a2,a2,a2,12,a2,a2,B.O,a2,a2,!0,a2,a2,a2,a2,a2,a2,a2,a2),a2,a2,a2),a2))
j.push(p.$1("Lessons active today"))
if(l.gI(v)===0){s=a4.h(0,"empty")
s=A.v(s==null?"No lessons yet \u2014 still learning this market.":s)
j.push(A.c(s,a2,a2,a2,a2,a2,a2,A.l(a2,a2,n?C.bT:C.bV,a2,a2,a2,a2,a2,a2,a2,a2,12,a2,a2,a2,a2,a2,!0,a2,a2,a2,a2,a2,a2,a2,a2),a2,a2,a2))}for(s=v.length,h=0;h<v.length;v.length===s||(0,A.I)(v),++h){g=v[h]
m=J.a1(g)
l=m.h(g,a3)
l=A.v(l==null?"":l)
j.push(o.$1(l+(m.h(g,"at")==null?"":" \xb7 "+D.hsJ(D.hqP(m.h(g,"at"))))))}if(q!=null&&q.cb(new A.W(Date.now(),0,!1)))j.push(o.$3$c$icon("Paused after 2 losses in a row until "+D.LV(D.SO(q.aa()))+" ET",E.i1,C.bX2))
if(J.z(a4.h(0,"stepUpNext"),!0))j.push(o.$3$c$icon("The next entry needs +0.8% or more in 30 minutes (after 2 losses in a row)",E.i1,B.mH))
j.push(p.$1("Benched markets"))
if(J.aa(u)===0)j.push(A.c("None benched today.",a2,a2,a2,a2,a2,a2,A.l(a2,a2,n?C.bT:C.bV,a2,a2,a2,a2,a2,a2,a2,a2,12,a2,a2,a2,a2,a2,!0,a2,a2,a2,a2,a2,a2,a2,a2),a2,a2,a2))
for(s=u.length,h=0;h<u.length;u.length===s||(0,A.I)(u),++h){f=u[h]
m=J.a1(f)
l=m.h(f,a3)
j.push(o.$3$c$icon(A.v(l==null?m.h(f,"symbol"):l),C.d6,B.tR))}j.push(p.$1("What the next entry needs"))
s=B.h.a1(D.c5(a4.h(0,"thresholdPct")),2)
m=a1.a.c==="options"?B.aA:B.as
m=a1.Cg("STRENGTH +"+s+"%",m)
s=B.h.M(D.c5(a4.h(0,"maxHold")))
l=a1.a.c==="options"?B.aA:B.as
l=a1.Cg("MAX HOLD "+s+" MIN",l)
s=B.h.a1(D.c5(a4.h(0,"chaseCapPct")),1)
k=a1.a.c==="options"?B.aA:B.as
k=a1.Cg("NO-CHASE "+s+"% IN 1 H",k)
s=B.h.M(D.c5(a4.h(0,"chopSkipAt")))
e=a1.a.c==="options"?B.aA:B.as
e=A.a([m,l,k,a1.Cg("CHOP SKIP "+s+"+",e)],i)
if(J.z(a4.h(0,"need60"),!0))e.push(a1.Cg("1-HOUR TREND MUST AGREE",E.i1))
j.push(A.bY(B.bH,e,B.bq,a2,6,6))
j.push(p.$1("Last 5 loss reasons"))
if(J.aa(t)===0)j.push(A.c("No graded losses yet.",a2,a2,a2,a2,a2,a2,A.l(a2,a2,n?C.bT:C.bV,a2,a2,a2,a2,a2,a2,a2,a2,12,a2,a2,a2,a2,a2,!0,a2,a2,a2,a2,a2,a2,a2,a2),a2,a2,a2))
for(s=t.length,h=0;h<t.length;t.length===s||(0,A.I)(t),++h){g=t[h]
m=J.a1(g)
l=A.v(m.h(g,"market"))
k=m.h(g,"pnl")
if(!(typeof k=="number")){k=A.cA(A.v(k==null?"":k))
if(k==null)k=0}k=D.eh(k,!0,!0)
e=D.hJA(A.v(m.h(g,"reason")))
m=m.h(g,a3)
m=A.v(m==null?"":m)
d=n?C.cl:B.c
j.push(o.$3$c$icon(l+" "+k+" \xb7 "+e+": "+m,d,B.cC))}if(r.length!==0){s=A.a([p.$1("What I learned yesterday")],i)
for(m=r.length,h=0;h<r.length;r.length===m||(0,A.I)(r),++h){a0=r[h]
s.push(o.$2$c(a0,n?C.bT:C.bV))}B.d.u(j,s)}return a1.wH(a5,A.w(j,B.B,a2,B.e,B.i,0,B.p))},
b1m(d){var w=x.g.a(d.h(0,"markets"))
if(w==null)w=B.bM
w=J.cL(w,x.f)
w=A.ct(w,new D.eao(),w.$ti.k("M.E"),x.P)
w=A.B(w,A.a3(w).k("M.E"))
return w},
baq(d){if(d.length===0)return null
return B.d.ds(d,new D.eaB(this),new D.eaC(d))},
cao(d,e){var w,v,u,t,s,r,q=this,p=null,o=q.b1m(e)
if(o.length===0)return B.bK
w=q.baq(o)
w.toString
v=new A.X(o,new D.eal(),A.T(o).k("X<1>")).gI(0)
u=o.length
t=d.a
u=A.c("Its markets ("+u+")",p,p,p,p,p,p,A.l(p,p,t?C.cl:B.c,p,p,p,p,p,p,p,p,14,p,p,B.C,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)
s=v===0
r=s?"NONE PASSING NOW":""+v+" PASSING NOW"
if(s)s=t?C.bT:C.bV
else s=C.cI
s=q.Cg(r,s)
r=x.p
return new A.C(B.d3,A.w(A.a([new A.C(C.apM,A.A(A.a([u,B.aa,s,B.aY,A.c("tap one",p,p,p,p,p,p,A.l(p,p,t?C.bT:C.bV,p,p,p,p,p,p,p,p,11,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)],r),B.l,p,B.e,B.i,0,p,p),p),new A.a4(p,96,A.hN(B.f,p,new D.eam(q,o,w,d),o.length,p,p,B.aJ,new D.ean(),!1),p)],r),B.B,p,B.e,B.i,0,B.p),p)},
bMY(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f="symbol",e=h.baq(h.b1m(a0))
if(e==null)return B.bK
w=J.a1(e)
v=x.g
u=v.a(D.dF(w.h(e,"chart")).h(0,"points"))
if(u==null)u=B.bM
t=x.f
u=J.cL(u,t)
s=x.P
u=A.ct(u,new D.ea9(),u.$ti.k("M.E"),s)
r=A.B(u,A.a3(u).k("M.E"))
q=D.dF(w.h(e,"analysis"))
p=D.c5(w.h(e,"changePct"))
u=D.bF0(A.v(w.h(e,f)),24)
o=A.v(w.h(e,f))
n=d.a
o=A.c(o,g,g,g,g,g,g,A.l(g,g,n?C.cl:B.c,g,g,g,g,g,g,g,g,15,g,g,B.C,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)
m=w.h(e,"name")
m=A.v(m==null?"":m)
l=x.p
m=A.E(A.w(A.a([o,A.c(m,g,1,B.a2,g,g,g,A.l(g,g,n?C.bT:C.bV,g,g,g,g,g,g,g,g,11.5,g,g,g,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)],l),B.B,g,B.e,B.i,0,B.p),1)
o=D.eh(D.c5(w.h(e,"price")),!0,!1)
o=A.c(o,g,g,g,g,g,g,A.l(g,g,n?C.cl:B.c,g,g,g,g,g,g,g,g,17,g,g,B.C,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)
k=p>=0
j=k?"+":""
i=B.h.a1(p,2)
u=A.a([A.A(A.a([u,B.aa,m,A.w(A.a([o,A.c(j+i+"% today",g,g,g,g,g,g,A.l(g,g,k?C.cI:C.d6,g,g,g,g,g,g,g,g,11,g,g,B.C,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)],l),B.dr,g,B.e,B.i,0,B.p)],l),B.l,g,B.e,B.i,0,g,g),B.S],l)
o=r.length
if(o>1){o=B.d.fE(r,Math.max(0,o-36))
m=D.c5(w.h(e,"price"))
v=v.a(a0.h(0,"trades"))
v=J.cL(v==null?B.bM:v,t)
s=A.ct(v,new D.eaa(),v.$ti.k("M.E"),s)
v=A.B(s,A.a3(s).k("M.E"))
w=A.v(w.h(e,f))
s=h.a.c==="options"?B.aA:B.as
u.push(new D.a_Z(o,d,g,!0,m,D.hPS(v,w,s,t.b(D.dF(a0.h(0,"state")).h(0,"shadow"))?D.dF(D.dF(a0.h(0,"state")).h(0,"shadow")):g),g))}else u.push(A.c(y.b,g,g,g,g,g,g,A.l(g,g,n?C.bT:C.bV,g,g,g,g,g,g,g,g,12,g,g,g,g,g,!0,g,g,g,g,g,g,g,g),g,g,g))
if(q.h(0,"why")!=null){w=A.v(q.h(0,"why"))
B.d.u(u,A.a([B.aj,A.c("Analysis: "+w,g,g,g,g,g,g,A.l(g,g,n?C.bT:C.bV,g,g,g,g,g,g,g,g,11.5,g,g,g,g,1.3,!0,g,g,g,g,g,g,g,g),g,g,g)],l))}return h.wH(d,A.w(u,B.B,g,B.e,B.i,0,B.p))},
cDB(d,a0){var w,v,u,t,s,r=this,q=null,p="takeProfitUsd",o="stopLossUsd",n="maxHoldMin",m="exitCheckEveryMin",l=D.dF(a0.h(0,"settings")),k=D.dF(a0.h(0,"today")),j=new D.eaF(d),i=r.a.c==="options"?"+"+D.eh(D.c5(l.h(0,p)),!0,!1):"+"+B.h.a1(D.c5(l.h(0,"takeProfitPct")),0)+"% (+$"+B.h.a1(D.c5(l.h(0,p)),0)+")",h=r.a.c==="options"?"-"+D.eh(D.c5(l.h(0,o)),!0,!1):"-"+B.h.a1(D.c5(l.h(0,"stopLossPct")),0)+"% (-$"+B.h.a1(D.c5(l.h(0,o)),0)+")",g=A.V(B.mG,r.a.c==="options"?B.aA:B.as,q,q,q,18),f=d.a,e=x.p
g=A.A(A.a([g,B.b6,A.c("THE 30-MINUTE LAW",q,q,q,q,q,q,A.l(q,q,f?C.cl:B.c,q,q,q,q,q,q,q,q,12,q,q,B.u,q,q,!0,q,0.8,q,q,q,q,q,q),q,q,q)],e),B.l,q,B.e,B.i,0,q,q)
w=B.h.a1(D.c5(l.h(0,n)),0)
v=B.h.a1(D.c5(l.h(0,m)),0)
w=A.c("Every trade closes within 30 minutes at most, win, lose or flat. After the options no-follow-through lesson new trades get a shorter max hold: now "+w+" minutes. Exits are checked every "+v+" minute, and the hard close sells at the last check before the max hold.",q,q,q,q,q,q,A.l(q,q,f?C.bT:C.bV,q,q,q,q,q,q,q,q,11.5,q,q,q,q,1.35,!0,q,q,q,q,q,q,q,q),q,q,q)
v=j.$2("Max hold now",B.h.a1(D.c5(l.h(0,n)),0)+" min")
u=j.$2("Exit checks","every "+B.h.a1(D.c5(l.h(0,m)),0)+" min")
f=A.A(A.a([v,B.b6,u,B.b6,j.$2("Each trade",r.a.c==="options"?"1 call/put \u2264$"+B.h.a1(D.c5(l.h(0,"maxPremiumUsd")),0):"$"+B.h.a1(D.c5(l.h(0,"tradeUsd")),0))],e),B.l,q,B.e,B.i,0,q,q)
v=j.$3$c("Take profit",i,C.cI)
u=j.$3$c("Stop loss",h,C.d6)
t=k.h(0,"trades")
t=A.v(t==null?0:t)
s=l.h(0,"maxTrades")
return r.wH(d,A.w(A.a([g,B.at,w,B.S,f,B.aj,A.A(A.a([v,B.b6,u,B.b6,j.$2("Trades today",t+" of "+A.v(s==null?"-":s))],e),B.l,q,B.e,B.i,0,q,q),B.aj,A.A(A.a([j.$2("Daily stop","-$"+B.h.a1(D.c5(l.h(0,"dailyStopUsd")),0)),B.b6,j.$2("Total brake","-$"+B.h.a1(D.c5(l.h(0,"totalBrakeUsd")),0)),B.b6,j.$2("Strength","+"+B.h.a1(D.c5(l.h(0,"strengthPct")),2)+"% in 30 min")],e),B.l,q,B.e,B.i,0,q,q)],e),B.B,q,B.e,B.i,0,B.p))},
coM(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=D.dF(e.h(0,"options"))
if(i.a===0)return B.bK
if(J.z(i.h(0,"weekend"),!0)){w=i.h(0,"message")
return k.RN(d,J.k(w==null?"":w),B.b1)}if(!J.z(i.h(0,"enabled"),!0)){w=i.h(0,"message")
w=J.k(w==null?"Options are not enabled on the paper account yet":w)
return k.RN(d,w,J.z(i.h(0,"enabled"),!1)?E.i1:B.b1)}v=D.dF(i.h(0,"preview"))
u=J.z(i.h(0,"fits"),!0)
w=i.h(0,"right")
t=A.v(w==null?"call":w)
w=i.h(0,"underlying")
s=A.v(w==null?"SPY":w)
w=x.g.a(i.h(0,"tried"))
if(w==null)w=B.bM
w=J.cL(w,x.f)
w=A.ct(w,new D.ear(),w.$ti.k("M.E"),x.P)
r=A.B(w,A.a3(w).k("M.E"))
w=s+" "
q=d.a
p=A.E(A.c(w+t.toUpperCase()+" IT WOULD CHOOSE NOW",j,j,B.a2,j,j,j,A.l(j,j,q?C.bT:C.bV,j,j,j,j,j,j,j,j,10.5,j,j,B.u,j,j,!0,j,0.8,j,j,j,j,j,j),j,j,j),1)
o=u?"FITS":"NONE FITS"
n=x.p
o=A.A(A.a([p,k.Cg(o,u?C.cI:C.d6)],n),B.l,j,B.e,B.i,0,j,j)
p=A.a([o,B.at,A.c("For the best-ranked market right now: a call when its trend is up, a put when it is down. Near the money (the strike closest to the price), at least 3 days to expiry, $150 or less, spread at most 10% of the premium.",j,j,j,j,j,j,A.l(j,j,q?C.bT:C.bV,j,j,j,j,j,j,j,j,11.5,j,j,j,j,j,!0,j,j,j,j,j,j,j,j),j,j,j),B.N],n)
if(u&&v.a!==0){o=D.eh(D.c5(v.h(0,"strike")),!0,!1)
m=D.aRM(v.h(0,"expiry"))
w=A.c(w+o+" "+t+" \xb7 expires "+m,j,j,j,j,j,j,A.l(j,j,q?C.cl:B.c,j,j,j,j,j,j,j,j,16,j,j,B.C,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)
o=D.eh(D.c5(v.h(0,"premium")),!0,!1)
m=D.eh(D.c5(v.h(0,"cost")),!0,!1)
l=D.eh(D.c5(i.h(0,"spot")),!0,!1)
o=A.c("Premium "+o+" a share x 100 = "+m+"  \xb7  "+s+" "+l,j,j,j,j,j,j,A.l(j,j,q?C.bT:C.bV,j,j,j,j,j,j,j,j,12,j,j,j,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)
m=i.h(0,"why")
B.d.u(p,A.a([w,B.bs,o,B.at,A.c("It fits: "+A.v(m==null?"":m)+". On a passing setup it would buy this one.",j,j,j,j,j,j,C.fSd,j,j,j)],n))}else{w=i.h(0,"why")
p.push(A.c(A.v(w==null?"":w)+". It keeps checking every minute; the budget is never raised.",j,j,j,j,j,j,C.fYk,j,j,j))}if(r.length!==0)B.d.u(p,A.a([B.N,A.c("The $150 stepping, in order:",j,j,j,j,j,j,A.l(j,j,q?C.cl:B.c,j,j,j,j,j,j,j,j,12,j,j,B.C,j,j,!0,j,j,j,j,j,j,j,j),j,j,j),B.at,new A.fo(new D.eas(k,r,d),j)],n))
return k.wH(d,A.w(p,B.B,j,B.e,B.i,0,B.p))},
cLP(d,e){var w,v,u=this,t=null,s=x.g.a(e.h(0,"trades"))
if(s==null)s=B.bM
s=J.cL(s,x.f)
s=A.ct(s,new D.eaM(),s.$ti.k("M.E"),x.P)
w=A.B(s,A.a3(s).k("M.E"))
s=d.a
v=A.a([A.c("Trades",t,t,t,t,t,t,A.l(t,t,s?C.cl:B.c,t,t,t,t,t,t,t,t,16,t,t,B.C,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),B.aj],x.p)
if(w.length===0)v.push(A.c("No trades yet. This system is picky: it only takes strong setups.",t,t,t,t,t,t,A.l(t,t,s?C.bT:C.bV,t,t,t,t,t,t,t,t,12.5,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),t,t,t))
s=J.aN(u.y?w:A.cJ(w,0,A.dx(4,"count",x.S),A.T(w).c))
while(s.B())v.push(u.cLO(d,s.gP(s)))
s=w.length
if(s>4)v.push(A.at(A.bK(!1,A.c(u.y?"Show less":"Show all ("+s+")",t,t,t,t,t,t,t,t,t,t),t,t,!0,t,t,t,new D.eaN(u),t,t),t,t,t))
return u.wH(d,A.w(v,B.B,t,B.e,B.i,0,B.p))},
cLO(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=null,g="entryPrice",f=J.a1(a3),e=J.z(f.h(a3,"decision"),"would buy"),d=D.dF(f.h(a3,"details")),a0=x.f.b(d.h(0,"option"))?D.dF(d.h(0,"option")):h,a1=D.c5(d.h(0,"pnl"))
if(e)w=B.cj
else w=a1>=0?C.cI:C.d6
v=a0!=null
if(v){u=A.v(f.h(a3,"asset"))
t=D.eh(D.c5(a0.h(0,"strike")),!0,!1)
s=a0.h(0,"right")
r=u+" "+t+" "+A.v(s==null?"call":s)}else r=A.v(f.h(a3,"asset"))
if(e)q=v?"expires "+D.aRM(a0.h(0,"expiry"))+" \xb7 premium "+D.eh(D.c5(d.h(0,g)),!0,!1)+" x 100":"at "+D.eh(D.c5(d.h(0,g)),!0,!1)
else{v=D.eh(D.c5(d.h(0,g)),!0,!1)
u=D.eh(D.c5(d.h(0,"exitPrice")),!0,!1)
t=d.h(0,"heldMin")==null?"":B.h.a1(D.c5(d.h(0,"heldMin")),0)+" min \xb7 "
s=f.h(a3,"reason")
q=v+" to "+u+" \xb7 "+t+D.ivc(J.k(s==null?"":s))}p=D.dF(d.h(0,"analysis"))
if(e){v=p.h(0,"why")
o=J.k(v==null?"":v)}else{v=d.h(0,"entryWhy")
o=J.k(v==null?"":v)}if(e)n=""
else{v=d.h(0,"result")
if(v==null)v=a1>0?"WIN":"LOSS"
n=J.k(v)}if(e)m=""
else{v=d.h(0,"lossText")
m=J.k(v==null?"":v)}v=o.length===0
u=v?h:new D.eaK(this,a2,r,e,p,m,n,o)
t=a2.a
s=t?C.oT:C.oO
l=w.j(0.14)
k=A.n(12)
l=A.q(h,A.V(e?B.u_:B.qa,w,h,h,h,18),B.f,h,h,new A.p(l,h,h,k,h,h,B.m),h,36,h,h,h,h,h,36)
k=e?"Bought":"Sold"
k=A.c(k+" "+r,h,h,h,h,h,h,A.l(h,h,t?C.cl:B.c,h,h,h,h,h,h,h,h,13.5,h,h,B.C,h,h,!0,h,h,h,h,h,h,h,h),h,h,h)
j=x.p
k=A.a([k,A.c(q,h,2,B.a2,h,h,h,A.l(h,h,t?C.bT:C.bV,h,h,h,h,h,h,h,h,11.5,h,h,h,h,h,!0,h,h,h,h,h,h,h,h),h,h,h)],j)
if(m.length!==0)k.push(A.c(m,h,3,B.a2,h,h,h,C.b_l,h,h,h))
if(!v){v=e?"Why this trade: "+o:n+" \xb7 it was bought because: "+o
if(e)i=this.a.c==="options"?B.aA:B.as
else i=n==="WIN"?C.cI:C.d6
k.push(A.c(v,h,2,B.a2,h,h,h,A.l(h,h,i,h,h,h,h,h,h,h,h,11,h,h,B.O,h,1.3,!0,h,h,h,h,h,h,h,h),h,h,h))}f=f.h(a3,"et_time")
f=J.k(f==null?"":f)
k.push(A.c(f,h,h,h,h,h,h,A.l(h,h,t?C.bT:C.bV,h,h,h,h,h,h,h,h,10.5,h,h,h,h,h,!0,h,h,h,h,h,h,h,h),h,h,h))
f=A.E(A.w(k,B.B,h,B.e,B.i,0,B.p),1)
v=e?"-"+D.eh(D.c5(d.h(0,"amount")),!0,!1):"+"+D.eh(D.c5(d.h(0,"outValue")),!0,!1)
v=A.a([A.c(v,h,h,h,h,h,h,A.l(h,h,t?C.cl:B.c,h,h,h,h,h,h,h,h,13.5,h,h,B.C,h,h,!0,h,h,h,h,h,h,h,h),h,h,h)],j)
if(!e){k=D.eh(a1,!0,!0)
v.push(A.c(k,h,h,h,h,h,h,A.l(h,h,a1>=0?C.cI:C.d6,h,h,h,h,h,h,h,h,12,h,h,B.C,h,h,!0,h,h,h,h,h,h,h,h),h,h,h))}if(e)v.push(A.c("put in",h,h,h,h,h,h,A.l(h,h,t?C.bT:C.bV,h,h,h,h,h,h,h,h,11,h,h,h,h,h,!0,h,h,h,h,h,h,h,h),h,h,h))
return A.aM(!1,h,!0,A.q(h,A.A(A.a([l,B.ar,f,B.aa,A.w(v,B.dr,h,B.e,B.i,0,B.p)],j),B.l,h,B.e,B.i,0,h,h),B.f,h,h,new A.p(h,h,new A.bE(B.a1,B.a1,new A.ax(s,1,B.r,-1),B.a1),h,h,h,B.m),h,h,h,h,B.xa,h,h,h),h,!0,h,h,h,h,h,h,h,h,h,h,h,u,h,h,h,h,h,h,h)},
cFG(d,e,f){var w,v,u=null,t=x.g.a(f.h(0,"ranked"))
if(t==null)t=B.bM
t=J.cL(t,x.f)
t=A.ct(t,new D.eaH(),t.$ti.k("M.E"),x.P)
w=A.B(t,A.a3(t).k("M.E"))
v=D.dF(f.h(0,"record"))
t=this.c
t.toString
A.cf(u,u,!0,u,new D.eaI(d,e,f,new D.eaJ(),v,w),t,u,!0,!0,x.H)},
bGz(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k="asset",j=m.z,i=m.e
i=j?i:A.cJ(i,0,A.dx(4,"count",x.S),A.T(i).c).de(0)
j=d.a
w=A.c("Activity",l,l,l,l,l,l,A.l(l,l,j?C.cl:B.c,l,l,l,l,l,l,l,l,16,l,l,B.C,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)
v=x.p
w=A.a([A.A(A.a([w,B.aY,A.c("newest first",l,l,l,l,l,l,A.l(l,l,j?C.bT:C.bV,l,l,l,l,l,l,l,l,11,l,l,l,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)],v),B.l,l,B.e,B.i,0,l,l),B.aj],v)
if(m.e.length===0)w.push(A.c("Nothing yet. Buys, sells and passing setups that were skipped show up here.",l,l,l,l,l,l,A.l(l,l,j?C.bT:C.bV,l,l,l,l,l,l,l,l,12.5,l,l,l,l,l,!0,l,l,l,l,l,l,l,l),l,l,l))
for(u=i.length,t=0;t<i.length;i.length===u||(0,A.I)(i),++t){s=i[t]
r=A.V(B.np,j?C.bT:C.bV,l,l,l,7)
q=J.a1(s)
if(J.z(q.h(s,"kind"),"lesson"))p="Lesson"+(q.h(s,k)==null?"":" \xb7 "+A.v(q.h(s,k)))
else{p=q.h(s,"decision")
p=A.v(p==null?"":p)
p+=q.h(s,k)==null?"":" \xb7 "+A.v(q.h(s,k))}if(J.z(q.h(s,"kind"),"lesson"))o=m.a.c==="options"?B.aA:B.as
else o=j?C.cl:B.c
p=A.c(p,l,l,l,l,l,l,new A.F(!0,o,l,l,l,l,12.5,B.C,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l),l,l,l)
o=q.h(s,"reason")
o=J.k(o==null?"":o)
n=j?C.bT:C.bV
p=A.w(A.a([p,A.c(o,l,l,l,l,l,l,new A.F(!0,n,l,l,l,l,11.5,l,l,l,l,l,1.3,l,l,l,l,l,l,l,l,l,l,l,l,l),l,l,l)],v),B.B,l,B.e,B.i,0,B.p)
q=q.h(s,"et_time")
q=D.hsJ(J.k(q==null?"":q))
o=j?C.bT:C.bV
w.push(new A.C(B.jZ,new A.c_(B.aJ,B.e,B.i,B.B,l,B.p,l,0,A.a([new A.C(I.Ps,r,l),B.aa,new A.bu(1,B.b9,p,l),B.b6,A.c(q,l,l,l,l,l,l,new A.F(!0,o,l,l,l,l,10.5,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l),l,l,l)],v),l),l))}if(m.e.length>4)w.push(A.at(A.bK(!1,A.c(m.z?"Show less":"Show all",l,l,l,l,l,l,l,l,l,l),l,l,!0,l,l,l,new D.ea8(m),l,l),l,l,l))
return m.wH(d,A.w(w,B.B,l,B.e,B.i,0,B.p))},
cAd(d,e){var w,v,u,t,s,r,q,p,o,n,m=null,l=x.g.a(e.h(0,"rules"))
if(l==null)l=B.bM
l=J.b8(l,new D.eay(),x.N)
w=A.B(l,l.$ti.k("aj.E"))
l=this.c
l.toString
l=A.Q(l).aIa(B.L)
v=d.a
u=A.c("The rules it follows",m,m,m,m,m,m,A.l(m,m,v?C.cl:B.c,m,m,m,m,m,m,m,m,15,m,m,B.C,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)
t=x.p
s=A.a([],t)
for(r=w.length,q=0;q<w.length;w.length===r||(0,A.I)(w),++q){p=w[q]
o=this.a.c==="options"?B.aA:B.as
o=A.c("\u2022  ",m,m,m,m,m,m,new A.F(!0,o,m,m,m,m,m,B.u,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m,m,m)
n=v?C.cl:B.c
s.push(new A.C(B.ey,new A.c_(B.aJ,B.e,B.i,B.B,m,B.p,m,0,A.a([o,new A.bu(1,B.b9,A.c(p,m,m,m,m,m,m,new A.F(!0,n,m,m,m,m,12.5,m,m,m,m,m,1.35,m,m,m,m,m,m,m,m,m,m,m,m,m),m,m,m),m)],t),m),m))}return this.wH(d,new A.oJ(l,N.hl_(m,s,B.ag,m,m,m,!1,m,m,m,B.ag,u),m))},
b4D(d,e,f){var w=null,v=d.a,u=v?B.c.j(0.92):C.id,t=A.n(20),s=e==null?w:e.j(0.5)
if(s==null)v=v?B.c:C.nf
else v=s
v=A.K(v,B.r,1)
s=A.a([new A.ac(0,B.H,d.gIt(),B.cy,14)],x.V)
return A.q(w,A.aG(!1,B.a3,!0,w,f,B.f,w,0,w,w,w,w,w,B.i9),B.f,w,w,new A.p(u,w,v,t,s,w,B.m),w,w,w,B.dX,B.bD,w,w,w)},
wH(d,e){return this.b4D(d,null,e)},
RN(d,e,f){var w=null,v=f.j(0.12),u=A.n(16),t=A.K(f.j(0.45),B.r,1),s=A.V(B.R6,f,w,w,w,20)
return A.q(w,A.A(A.a([s,B.ar,A.E(A.c(e,w,w,w,w,w,w,A.l(w,w,d.a?C.cl:B.c,w,w,w,w,w,w,w,w,12.5,w,w,w,w,1.35,!0,w,w,w,w,w,w,w,w),w,w,w),1)],x.p),B.l,w,B.e,B.i,0,w,w),B.f,w,w,new A.p(v,w,t,u,w,w,B.m),w,w,w,B.dX,B.bg,w,w,w)},
Cg(d,e){var w=null,v=e.j(0.14),u=A.n(999)
return A.q(w,A.c(d,w,w,w,w,w,w,A.l(w,w,e,w,w,w,w,w,w,w,w,10,w,w,B.u,w,w,!0,w,0.5,w,w,w,w,w,w),w,w,w),B.f,w,w,new A.p(v,w,w,u,w,w,B.m),w,w,w,w,B.f8,w,w,w)},
a1w(d,e,f){var w=null,v=d.a,u=v?B.c.j(0.92):C.id,t=A.K(v?B.c:C.nf,B.r,1)
return A.aG(!1,B.a3,!0,w,A.aM(!1,w,!0,A.q(w,A.V(e,v?C.cl:B.c,w,w,w,18),B.f,w,w,new A.p(w,w,t,w,w,w,B.a6),w,40,w,w,w,w,w,40),B.cH,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),B.f,u,0,w,w,B.cH,w,w,B.ai)}}
D.aBZ.prototype={
R(){return new D.bgh()}}
D.bgh.prototype={
Z(){this.a4()
this.d=A.d5(B.fr,new D.dbF(this))},
t(){var w=this.d
if(w!=null)w.a2(0)
this.a3()},
C(d){var w,v,u,t=null,s=this.a.c,r=s==null?t:s.by(new A.W(Date.now(),0,!1))
if(r==null||r.a<0)w="0:00"
else{s=r.a
w=""+B.n.ao(s,6e7)+":"+B.a.aY(B.n.v(B.n.F(B.n.ao(s,1e6),60)),2,"0")}v=this.a.d
s=v.j(0.14)
u=A.n(999)
return A.q(t,A.c("closes in "+w+" at most",t,t,t,t,t,t,A.l(t,t,v,t,t,t,t,t,t,t,t,10,t,t,B.u,t,t,!0,t,0.5,t,t,t,t,t,t),t,t,t),B.f,t,t,new A.p(s,t,t,u,t,t,B.m),t,t,t,t,B.f8,t,t,t)}}
D.aLo.prototype={
R(){return new D.bwZ()}}
D.bwZ.prototype={
Z(){this.a4()
this.d=A.d5(B.fr,new D.fjx(this))},
t(){var w=this.d
if(w!=null)w.a2(0)
this.a3()},
C(a1){var w,v,u,t,s,r,q,p,o,n=this,m=null,l=new A.W(Date.now(),0,!1).aa(),k=n.a.c.aa().bM(3e8),j=n.a,i=j.d.aa(),h=B.n.ao(i.by(j.c.aa()).a,6e7),g=j.e?C.cI:C.d6,f=l.cb(k),e=l.cb(i),d=A.aXU(A.bD(l),A.bO(l),A.bX(l),A.cY(l),A.fx(l),0,0,0).bM(6e7).by(l),a0=B.n.ao(d.a,1e6)>=45
if(e){w="Being graded now: WIN if the price finished "+(n.a.e?"higher":"lower")+"."
v="SIGNAL CLOSED"}else if(f){v="TOO LATE TO ENTER"
w="The 5-minute entry window has passed. Wait for the next signal: entering an old signal is how money is lost."}else{if(a0)v=(n.a.e?"BUY":"SELL")+" NOW"
else v="Enter in "+D.fju(d)
w="Entry window closes in "+D.fju(k.by(l))+" \xb7 enter at the start of a minute."}j=new D.fjv()
u=!f
t=!u||e?B.an:g
s=A.n(14)
r=A.a([new A.ac(0,B.H,(!u||e?B.v:g).j(0.25),B.cO,12)],x.V)
q=A.c(v,m,m,m,m,m,m,A.l(m,m,B.c,m,m,m,m,m,m,m,G.AI,a0&&u&&!e?26:22,m,m,B.u,m,m,!0,m,0.6,m,m,m,m,m,m),B.K,m,m)
p=A.c(w,m,m,m,m,m,m,C.fLt,B.K,m,m)
o=j.$2("Trade for",""+h+" min")
u=x.p
return A.q(m,A.w(A.a([q,B.bs,p,B.N,A.A(A.a([o,B.b6,j.$2("Entry window",f?"closed":D.fju(k.by(l))),B.b6,j.$2("Signal closes in",D.fju(i.by(l)))],u),B.l,m,B.e,B.i,0,m,m)],u),B.l,m,B.e,B.i,0,B.p),B.f,m,m,new A.p(t,m,m,s,r,m,B.m),m,m,m,m,B.bg,m,m,1/0)}}
D.aDk.prototype={
R(){return new D.bj9()}}
D.bj9.prototype={
Z(){this.a4()
this.d=A.d5(B.fr,new D.dkE(this))},
t(){var w=this.d
if(w!=null)w.a2(0)
this.a3()},
C(d){var w=null,v=this.a.c*60,u=B.n.F(B.n.ao(new A.W(Date.now(),0,!1).aa().a,1000),v),t=u<15,s=v-u,r=t?"ENTER NOW":"Enter in "+B.n.ao(s,60)+":"+B.a.aY(B.n.v(B.n.F(s,60)),2,"0"),q=t?B.c:B.c.j(0.18),p=A.n(999),o=t?B.fQ:B.mG
o=A.V(o,t?B.v:B.c,w,w,w,20)
return A.cZ(w,A.A(A.a([o,B.b6,A.c(r,w,w,w,w,w,w,A.l(w,w,t?B.v:B.c,w,w,w,w,w,w,w,G.AI,22,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),B.l,w,B.e,B.P,0,w,w),w,w,B.b0,new A.p(q,w,w,p,w,w,B.m),B.ig,w,w,w,w,B.Dp,w,w,w)}}
D.cI.prototype={}
D.uF.prototype={}
D.Y6.prototype={
R(){var w,v,u,t=null,s=x.N,r=x.z
r=A.J(["done",A.a([],x.s),"lessons",A.S(s,r)],s,r)
s=$.hqc
w=$.ay()
v=A.m2(0,t,t)
u=A.a([],x.t)
return new D.aIf(r,new A.au(new A.bd(s,B.ba,B.aP),w),v,u,new A.au(B.ay,w),B.cE,B.M,t,t)}}
D.a04.prototype={}
D.aIf.prototype={
gLO(){var w,v=this,u=v.d
if(u===$){v.a.toString
w=A.ad6(null,0,3,v)
v.d!==$&&A.bF()
v.d=w
u=w}return u},
gKw(){var w=x.g.a(this.x.h(0,"done"))
if(w==null)w=B.bM
return J.b8(w,new D.eLp(),x.N).fG(0)},
Z(){var w,v,u,t=this
t.a4()
w=t.e=t.a.c
v=w==null
t.y=!v
t.ay=D.eM7(v?null:J.t(w,"fx"))
w=t.a.c
u=D.eM7(w==null?null:J.t(w,"markets"))
if(u.length!==0)t.f=u
t.r=new A.W(Date.now(),0,!1)
t.gLO().aU(0,new D.eMd(t))
$.aMX=$.aMX+1
t.at.aU(0,new D.eMe(t))
if($.DL.length!==0||$.ahQ)t.aE9()
if(!t.a.d){t.a1v()
t.RO()
A.Tq().bC(new D.eMf(t),x.H)
t.w=A.d5(B.he,new D.eMg(t))}},
t(){var w,v=this,u=v.w
if(u!=null)u.a2(0)
u=v.as
if(u!=null)u.a2(0)
v.gLO().t()
u=v.cy
w=$.ay()
u.V$=w
u.W$=0
u=v.at
u.V$=w
u.W$=0
v.ax.t()
D.hK6()
v.bD9()},
a1v(){return this.c8Z()},
c8Z(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f
var $async$a1v=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:g={}
g.a=null
t=4
w=7
return A.b(A.aB(),$async$a1v)
case 7:q=e
p=A.aV(J.t(q.a,"ngmy_signal_grid_academy_v2"))
n=p!=null?g.a=A.a0(x.f.a(B.T.aN(0,p,null)),x.N,x.z):null
o=q.nS("ngmy_signal_grid_lessons_done")
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
return A.b(A.fJ(A.J(["action","paLearnGet"],n,m),!1,!1,!1,!1,B.he),$async$a1v)
case 8:k=e
if(r.c==null){w=1
break}j=k==null?null:J.t(k,"progress")
i=x.f
if(i.b(j)){k.toString
h=A.a0(i.a(J.t(k,"progress")),n,m)}else h=null
r.l(new D.eLK(g,r,k,h))
if(h==null&&g.a!=null)r.aE_()
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$a1v,v)},
aE_(){var w=this.as
if(w!=null)w.a2(0)
this.as=A.cD(R.Da,new D.eLT(this))},
af8(d){return this.c83(d)},
c83(d){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$af8=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=B.d.cD(C.Ex,new D.eLs(u))
u.l(new D.eLt(u,d))
u.aE_()
t=B.d.cD(C.Ex,new D.eLu(u))
w=!r&&t&&u.c!=null?2:3
break
case 2:s=u.c
s.toString
w=4
return A.b(A.cf(null,null,!0,null,new D.eLv(u),s,null,!0,!0,x.H),$async$af8)
case 4:case 3:return A.h(null,v)}})
return A.i($async$af8,v)},
RO(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$RO=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(A.fJ(A.J(["action","paSignals"],x.N,x.z),!1,!1,!1,!1,B.x8),$async$RO)
case 3:r=e
if(t.c==null||r==null||!J.z(J.t(r,"ok"),!0)){w=1
break}s=J.a1(r)
t.l(new D.eLS(t,D.eM7(s.h(r,"fx")),D.eM7(s.h(r,"markets")),r))
case 1:return A.h(u,v)}})
return A.i($async$RO,v)},
gauu(){var w=A.B(this.gyW(),x.P)
B.d.u(w,this.ay)
return w},
gyW(){var w=this.f
if(w==null){w=this.e
w=D.fFL(D.dF(D.dF(w==null?null:J.t(w,"state")).h(0,"snapshot")))}return w},
gcGH(){var w=this.gyW(),v=A.T(w).k("X<1>"),u=A.B(new A.X(w,new D.eM5(),v),v.k("M.E"))
if(u.length===0)return this.gyW().length===0?null:B.d.gH(this.gyW())
B.d.b_(u,new D.eM6())
return B.d.gH(u)},
c8B(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,a0=" dollars. It sells at +50 or -50 dollars.",a1=e.e,a2=D.dF(a1==null?d:J.t(a1,"state"))
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
q=D.eh(D.c5(a2.h(0,"totalPnl")),!0,!0)
p=D.eh(D.c5(u.h(0,"day_pnl")),!0,!0)
o=t.h(0,"wins")
o=A.v(o==null?0:o)
n=t.h(0,"losses")
v+="Agent: "+s+r+". P/L all time "+q+", today "+p+", wins "+o+", losses "+A.v(n==null?0:n)+".\n"}if(e.e==null)a1=v
else if(w!=null){m=D.c5(J.t(B.d.ds(e.gyW(),new D.eLy(w),new D.eLz()),"price"))
l=D.c5(w.h(0,"entryPrice"))
k=a1.b(w.h(0,"option"))?D.dF(w.h(0,"option")):d
a1=e.e
j=D.dF(D.dF(D.dF(a1==null?d:J.t(a1,"state")).h(0,"snapshot")).h(0,"held"))
i=j.h(0,"pnl")==null?d:D.c5(j.h(0,"pnl"))
h=i==null?"unknown":B.h.a1(i,2)
a1=v+((k!=null?"Open trade: 1 SPY call option, strike "+B.h.a1(D.c5(k.h(0,"strike")),0)+", expires "+A.v(k.h(0,"expiry"))+", premium paid "+B.h.a1(l,2)+" a share ("+B.h.a1(D.c5(k.h(0,"cost")),2)+" dollars). Win or loss now: "+h+a0:"Open trade: "+A.v(w.h(0,"symbol"))+", bought at "+B.h.a1(l,2)+", now "+B.h.a1(m,2)+". Win or loss now: "+h+a0)+"\n")}else a1=v+"No open trade.\n"
g=new D.eLA()
a1+="Agent markets (5-minute candles; fast line = 9-candle average, slow = 21-candle average; strength 0 bearish to 100 bullish):\n"
for(v=e.gyW(),s=v.length,f=0;f<v.length;v.length===s||(0,A.I)(v),++f)a1+=A.v(g.$1(v[f]))+"\n"
v=e.ay
s=v.length
if(s!==0){a1+="Forex pairs (real interbank prices, 1-minute candles, signals only; the agent does not trade them; OTC prices at brokers differ):\n"
for(f=0;f<v.length;v.length===s||(0,A.I)(v),++f)a1+=A.v(g.$1(v[f]))+"\n"}return a1.charCodeAt(0)==0?a1:a1},
Kv(d){return this.bJ5(d)},
bJ5(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j
var $async$Kv=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:j=B.a.i(d)
if(j.length===0||$.ahQ){w=1
break}t.at.bN(0,B.ck)
t.l(new D.eLl(t,j))
t.aE9()
s=$.DL.length
if(s>1){s=B.d.dw($.DL,Math.max(0,s-9),s-1)
r=new A.O(s,new D.eLm(),A.T(s).k("O<1,o>")).aJ(0,"\n")}else r=""
s=t.e
s=s==null?null:J.t(s,"rules")
x.g.a(s)
if(s==null)s=t.dx
q=x.N
p=J.b8(s,new D.eLn(),q).aJ(0,"\n")
s=t.c8B()
o=r.length===0?"":"\nCONVERSATION SO FAR:\n"+r+"\n"
n=$.fse
w=t.a.d?3:5
break
case 3:m="Preview mode: the tutor answers here using the live readings."
w=4
break
case 5:w=6
return A.b(A.fJ(A.J(["action","chat","prompt",'You are the NGMY Signal Grid trading tutor. You teach a complete beginner how trading works, using the live market data and the rules of the NGMY paper trading agent below.\nHow to answer:\n- Plain, friendly, simple English. Short sentences. No jargon without explaining it. Usually under 170 words.\n- When the question is about a market or "right now", use the LIVE DATA and quote the real numbers (price, trend, strength, RSI, last hour), then explain what they mean and what the agent\'s rules say.\n- Say clearly whether a market looks bullish, bearish or sideways and why, and what would need to happen for a buy or sell signal under the agent\'s rules.\n- This is practice. You may explain what the rules signal, but never promise profit, never say a price will surely go up or down, and never tell the student to trade real or borrowed money. Remind them briefly when it fits that signals can fail and the stop loss keeps losses small.\n- No markdown headings or tables. You may use short lines starting with "- ".\n\nAGENT RULES:\n'+p+"\n\n"+s+"\n"+o+"\nStudent: "+j+"\nTutor:"],q,x.z),!1,!1,!1,!1,B.o6),$async$Kv)
case 6:l=f
s=l==null
if(s)k=null
else{q=J.t(l,"text")
q=q==null?null:B.a.i(J.k(q))
k=q}if(k==null)k=""
if(k.length!==0){s=A.aD(k,"**","")
q=A.ag("^#+\\s*",!0,!1,!0,!1)
m=A.aD(s,q,"")}else{s=s?null:J.t(l,"error")
m=J.k(s==null?"The tutor could not answer just now. Please try again.":s)}case 4:if(n!==$.fse){w=1
break}$.DL.push(new D.a04(!1,m))
$.ahQ=!1
if(t.c==null){w=1
break}t.l(new D.eLo())
t.aE9()
case 1:return A.h(u,v)}})
return A.i($async$Kv,v)},
aE9(){$.aS.U$.push(new D.eLU(this))},
aSk(d){this.gLO().Cr(2)
this.Kv(d)},
C(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=A.Q(a0).ax.a===B.dg,f=new D.RN(g),e=g?C.te:C.tc,d=g?C.te:C.tc
d=A.a([d,g?C.Om:C.Oe],x.O)
w=i.a1w(f,B.eH,new D.eM9(a0))
v=A.c("Trading Academy",h,h,h,h,h,h,A.l(h,h,g?C.cl:B.c,h,h,h,h,h,h,h,h,17,h,h,B.C,h,h,!0,h,h,h,h,h,h,h,h),h,h,h)
u=x.p
v=A.A(A.a([w,B.ar,A.E(A.w(A.a([v,A.c("Lessons, live signals and a tutor",h,h,h,h,h,h,A.l(h,h,g?C.bT:C.bV,h,h,h,h,h,h,h,h,11.5,h,h,h,h,h,!0,h,h,h,h,h,h,h,h),h,h,h)],u),B.B,h,B.e,B.i,0,B.p),1),A.q(h,C.fvH,B.f,h,h,new A.p(C.cI.j(0.14),h,h,A.n(999),h,h,B.m),h,h,h,h,B.h0,h,h,h)],u),B.l,h,B.e,B.i,0,h,h)
w=g?C.Ot:C.Oi
t=A.n(999)
s=A.a([],u)
for(r=[C.flD,C.fjR,C.fkz],q=r.length,p=0;p<q;++p){o={}
n=r[p]
o.a=null
o.a=n.a
m=i.gLO().d===o.a
if(m)l=g?C.n7:B.c
else l=B.L
k=new A.aQ(999,999)
if(m)j=g?B.c:C.n7
else j=g?C.bT:C.bV
j=A.V(n.c,j,h,h,h,15)
if(m)m=g?B.c:C.n7
else m=g?C.bT:C.bV
s.push(new A.bu(1,B.b9,A.aA(h,A.cZ(h,new A.c_(B.aJ,B.bc,B.i,B.l,h,B.p,h,0,A.a([j,B.dU,new A.d_(1,B.c8,A.c(n.b,h,h,B.a2,h,h,h,new A.F(!0,m,h,h,h,h,12.5,B.C,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h),h,h,h),h)],u),h),h,h,B.b0,new A.p(l,h,h,new A.bc(k,k,k,k),h,h,B.m),B.a3,h,h,h,h,B.xa,h,h,h),B.y,!1,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,new D.eMa(o,i),h,h,h,h,h,h,!1,B.a4),h))}g=A.q(h,A.A(s,B.l,h,B.e,B.i,0,h,h),B.f,h,h,new A.p(w,h,h,t,h,h,B.m),h,h,h,h,B.eG,h,h,h)
w=i.gLO()
return A.c6(h,e,A.q(h,A.bn(!0,A.w(A.a([new A.C(C.bHJ,v,h),new A.C(B.aoY,g,h),A.E(A.bbN(A.a([i.c87(f),i.cFM(f),i.bJb(f)],u),w,h),1)],u),B.l,h,B.e,B.i,0,B.p),!0,!1,B.ag,!0,!0),B.f,h,h,new A.p(h,h,h,h,h,new A.a6(B.aV,B.b_,B.w,d,h,h),B.m),h,h,h,h,h,h,h,h),h,!1,!1,h,h)},
a1w(d,e,f){var w=null,v=d.a,u=v?B.c.j(0.92):C.id,t=A.K(v?B.c:C.nf,B.r,1)
return A.aG(!1,B.a3,!0,w,A.aM(!1,w,!0,A.q(w,A.V(e,v?C.cl:B.c,w,w,w,18),B.f,w,w,new A.p(w,w,t,w,w,w,B.a6),w,40,w,w,w,w,w,40),B.cH,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),B.f,u,0,w,w,B.cH,w,w,B.ai)},
c87(d){var w,v=null,u=new A.X(C.Ex,new D.eLx(this),x.E).gI(0),t=A.n(24),s=x.p
s=A.a([A.q(v,A.w(A.a([C.hmD,B.at,C.h37,B.az,A.bv(A.n(9),A.jK(B.c.j(0.18),v,v,8,v,u/10,B.afU),B.ap),B.aj,A.c(""+u+" of 10 lessons done",v,v,v,v,v,v,B.adk,v,v,v)],s),B.B,v,B.e,B.i,0,B.p),B.f,v,v,new A.p(v,v,v,t,v,C.cg0,B.m),v,v,v,v,B.f7,v,v,v),B.az],s)
for(w=0;w<10;++w)s.push(this.c85(d,w))
s.push(B.aj)
s.push(A.c("Practice only, no real money. Signals and lessons are for learning; markets can always surprise.",v,v,v,v,v,v,A.l(v,v,d.a?C.bT:C.bV,v,v,v,v,v,v,v,v,11,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),B.K,v,v))
return A.ck(s,v,v,B.a2y,v,v,B.ah,!1)},
c85(d,e){var w,v,u,t=null,s=C.Ex[e],r=this.gKw().q(0,s.a),q=d.a,p=q?B.c.j(0.92):C.id,o=A.n(20),n=A.K(q?B.c:C.nf,B.r,1),m=A.a([new A.ac(0,B.H,d.gIt(),B.hS,14)],x.V),l=A.n(15)
l=A.q(t,A.V(s.e,B.c,t,t,t,t),B.f,t,t,new A.p(s.f,t,t,l,t,t,B.m),t,46,t,t,t,t,t,46)
w=A.c("Lesson "+(e+1)+" \xb7 "+s.d+" min",t,t,t,t,t,t,A.l(t,t,q?C.bT:C.bV,t,t,t,t,t,t,t,t,11,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)
v=A.c(s.b,t,t,t,t,t,t,A.l(t,t,q?C.cl:B.c,t,t,t,t,t,t,t,t,15,t,t,B.C,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)
u=x.p
v=A.E(A.w(A.a([w,v,A.c(s.c,t,t,t,t,t,t,A.l(t,t,q?C.bT:C.bV,t,t,t,t,t,t,t,t,12,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],u),B.B,t,B.e,B.i,0,B.p),1)
w=r?B.e9:B.eN
if(r)q=C.cI
else q=q?C.bT:C.bV
return A.aA(t,A.q(t,A.A(A.a([l,B.bd,v,A.V(w,q,t,t,t,t)],u),B.l,t,B.e,B.i,0,t,t),B.f,t,t,new A.p(p,t,n,o,m,t,B.m),t,t,t,B.d3,B.bD,t,t,t),B.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new D.eLw(this,s),t,t,t,t,t,t,!1,B.a4)},
cnK(d){var w=this.c
w.toString
A.a7(w,!1).ca(A.e4(new D.eLQ(this,d),!1,null,x.H))},
c8F(c1,c2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6=this,b7=null,b8="reading",b9="rsi",c0=b6.gcGH()
if(c0==null)return A.c("Live example appears once the markets have loaded.",b7,b7,b7,b7,b7,b7,A.l(b7,b7,c1.a?C.bT:C.bV,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,!0,b7,b7,b7,b7,b7,b7,b7,b7),b7,b7,b7)
w=J.a1(c0)
v=J.k(w.h(c0,"asset"))
u=D.bGo(c0)
t=D.dF(w.h(c0,b8))
s=D.c5(w.h(c0,"price"))
r=new D.eLB(u,c1,s)
q=new D.eLJ(c1)
switch(c2){case"basics":p=u.length!==0?D.c5(J.t(B.d.gH(u),"c")):s
o=p===0?100:100*s/p
w=q.$1("Right now "+v+" is "+D.eh(s,!0,!1)+". About 4 hours ago it was "+D.eh(p,!0,!1)+".")
n=D.eh(o,!0,!1)
m=o>=100?"a win of":"a loss of"
return A.w(A.a([w,B.N,q.$1("If you had put $100 into "+v+" then, it would be worth "+n+" now: "+m+" "+D.eh(Math.abs(o-100),!0,!1)+". That difference is your profit or loss.")],x.p),B.B,b7,B.e,B.i,0,B.p)
case"candles":l=u.length!==0?B.d.gal(u):A.S(x.N,x.z)
w=J.a1(l)
n=D.c5(w.h(l,"c"))
m=D.c5(w.h(l,"o"))
k=r.$2$last$lines(24,!1)
j=D.eh(D.c5(w.h(l,"o")),!0,!1)
i=D.eh(D.c5(w.h(l,"c")),!0,!1)
n=n>=m?"GREEN: buyers won those 5 minutes":"YELLOW: sellers won those 5 minutes"
return A.w(A.a([k,B.N,q.$1("The last finished "+v+" candle opened at "+j+" and closed at "+i+", so it is "+n+". Its high was "+D.eh(D.c5(w.h(l,"h")),!0,!1)+" and its low "+D.eh(D.c5(w.h(l,"l")),!0,!1)+".")],x.p),B.B,b7,B.e,B.i,0,B.p)
case"trend":w=x.N
h=A.S(w,x.S)
for(n=b6.gyW(),m=n.length,k=x.z,j=x.f,g=0;g<n.length;n.length===m||(0,A.I)(n),++g){i=J.t(n[g],b8)
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
n=D.eh(e,!0,!1)
m=D.eh(d,!0,!1)
k=e>=d
j=k?"ABOVE":"BELOW"
k=k?"UP":"DOWN"
return A.w(A.a([w,B.N,q.$1("On "+v+" the pink fast line is at "+n+" and the purple slow line at "+m+". The fast line is "+j+" the slow line, so the short-term trend is "+k+".")],x.p),B.B,b7,B.e,B.i,0,B.p)
case"cross":w=b6.gyW()
n=A.T(w)
m=n.k("cP<1,@>")
a0=A.B(new A.cP(new A.X(w,new D.eLC(),n.k("X<1>")),new D.eLD(),m),m.k("M.E"))
w=b6.gyW()
n=A.T(w)
m=n.k("cP<1,@>")
a1=A.B(new A.cP(new A.X(w,new D.eLE(),n.k("X<1>")),new D.eLF(),m),m.k("M.E"))
w=r.$0()
if(a0.length!==0)n="Fresh BUY crosses right now: "+B.d.aJ(a0,", ")+". On its next automatic check the agent would buy if it holds nothing and it is the market traded today."
else n="No fresh buy cross in any open market right now. "+(a1.length!==0?"Fresh sell crosses: "+B.d.aJ(a1,", ")+". ":"")+"The agent simply waits; no signal means no trade."
return A.w(A.a([w,B.N,q.$1(n)],x.p),B.B,b7,B.e,B.i,0,B.p)
case"rsi":w=b6.gyW()
n=A.T(w).k("X<1>")
a2=A.B(new A.X(w,new D.eLG(),n),n.k("M.E"))
w=x.p
n=A.a([],w)
for(m=a2.length,k=c1.a,j=x.N,i=x.z,a3=x.f,a4=x.c,g=0;g<a2.length;a2.length===m||(0,A.I)(a2),++g){a5=a2[g]
a6=J.a1(a5)
a7=J.k(a6.h(a5,"asset"))
a8=k?C.cl:B.c
a7=A.c(a7,b7,b7,b7,b7,b7,b7,new A.F(!0,a8,b7,b7,b7,b7,12,B.C,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7),b7,b7,b7)
a8=new A.aQ(9,9)
a9=a6.h(a5,b8)
a9=(a3.b(a9)?A.a0(a9,j,i):A.S(j,i)).h(0,b9)
if(!(typeof a9=="number")){a9=A.cA(A.v(a9==null?"":a9))
if(a9==null)a9=0}b0=k?C.Ot:C.Oi
b1=a6.h(a5,b8)
b1=(a3.b(b1)?A.a0(b1,j,i):A.S(j,i)).h(0,b9)
if(!(typeof b1=="number")){b1=A.cA(A.v(b1==null?"":b1))
if(b1==null)b1=0}if(b1>=70)b1=C.d6
else{b1=a6.h(a5,b8)
b1=(a3.b(b1)?A.a0(b1,j,i):A.S(j,i)).h(0,b9)
if(!(typeof b1=="number")){b1=A.cA(A.v(b1==null?"":b1))
if(b1==null)b1=0}b1=b1<=30?B.cJ:C.cI}b1=A.jK(b0,b7,b7,8,b7,a9/100,new A.ld(b1,a4))
a6=a6.h(a5,b8)
a6=(a3.b(a6)?A.a0(a6,j,i):A.S(j,i)).h(0,b9)
if(!(typeof a6=="number")){a6=A.cA(A.v(a6==null?"":a6))
if(a6==null)a6=0}a6=B.h.a1(a6,0)
a9=k?C.cl:B.c
n.push(new A.C(B.cA,new A.c_(B.aJ,B.e,B.i,B.l,b7,B.p,b7,0,A.a([new A.a4(70,b7,a7,b7),new A.bu(1,B.b9,new A.n2(new A.bc(a8,a8,a8,a8),B.ap,b1,b7),b7),B.aa,new A.a4(26,b7,A.c(a6,b7,b7,b7,b7,b7,b7,new A.F(!0,a9,b7,b7,b7,b7,12,B.C,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7),b7,b7,b7),b7)],w),b7),b7))}n.push(q.$1("Red bars are above 70 (stretched), blue below 30 (oversold), green in between (healthy)."))
return A.w(n,B.B,b7,B.e,B.i,0,B.p)
case"risk":return A.w(A.a([q.$1("Every agent trade is about $100 (of a stock on weekdays, of a coin on weekends). "+v+" is "+D.eh(s,!0,!1)+" right now."),B.aj,q.$1("- Take profit: it sells when the trade is up $50"),q.$1("- Stop loss: it sells when the trade is down $50"),B.aj,q.$1("Win 5 and lose 5 of 10 trades: 5 x 50 - 5 x 50 = $0.00. That is break even. Win 6 of 10 and you are up $100.")],x.p),B.B,b7,B.e,B.i,0,B.p)
case"brakes":w=b6.e
if(w==null)return q.$1('Try it yourself: before your next practice day, write down "I stop after losing $50 today". If three trades in a row lose, close the app and come back tomorrow. That is exactly what the agent does.')
b2=D.dF(J.t(w,"state"))
w=b6.e
w=D.eh(D.c5(D.dF(w==null?b7:J.t(w,"today")).h(0,"day_pnl")),!0,!0)
n=D.eh(D.c5(b2.h(0,"totalPnl")),!0,!0)
m=J.z(b2.h(0,"brakePaused"),!0)?"The brake is ON right now.":"Both brakes are off, it can keep trading."
return q.$1("Today the agent is at "+w+" (the daily stop is -$50) and "+n+" all time (the brake is -$100)."+m)
case"hours":if(b6.f!=null)b3=b6.fr
else{w=b6.e
b3=J.z(D.dF(w==null?b7:J.t(w,"market")).h(0,"stockOpen"),!0)}b4=B.d.aR(b6.ay,new D.eLH())
w=b3?"OPEN":"CLOSED"
n=b4?"OPEN":"CLOSED"
return q.$1("Right now the US stock market is "+w+", the forex market is "+n+", and crypto is open, as always.")
case"practice":w=b6.e
if(w==null){w=b6.gauu()
return q.$1("Right now "+new A.X(w,new D.eLI(),A.T(w).k("X<1>")).gI(0)+" of "+b6.gauu().length+" markets have signals that worked at least half the time lately. That is why a journal and many trades matter: some markets suit a method, others do not.")}b5=D.dF(J.t(w,"record"))
w=b5.h(0,"trades")
w=A.v(w==null?0:w)
n=b5.h(0,"wins")
n=A.v(n==null?0:n)
m=b5.h(0,"losses")
return q.$1("The agent journal so far: "+w+" finished trades, "+n+" wins and "+A.v(m==null?0:m)+" losses. Keep watching until there are at least 20 before judging it.")}return B.bK},
cFM(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=null,e=B.a.i(g.ch),d=g.gauu(),a0=A.T(d).k("X<1>"),a1=A.B(new A.X(d,new D.eLZ(g,e.toLowerCase()),a0),a0.k("M.E"))
B.d.b_(a1,new D.eM_())
w=g.db
if(g.r==null)v=0
else{e=Date.now()
u=g.r
u.toString
v=B.n.ao(new A.W(e,0,!1).by(u).a,1e6)}if(v<20)t="just now"
else t=v<60?""+v+" s ago":""+B.n.ao(v,60)+" min ago"
e=x.p
u=A.a([],e)
for(s=a2.a,r=0;r<4;++r){q=C.d8d[r]
if(g.cx===q)p=s?C.n7:B.c
else p=s?B.c.j(0.92):C.id
o=new A.aQ(999,999)
n=new A.ax(s?C.oT:C.oO,1,B.r,-1)
m=q==="All"?"All "+d.length:q+" "+new A.X(d,new D.eM0(q),a0).gI(0)
if(g.cx===q)l=s?B.c:C.n7
else l=s?C.cl:B.c
B.d.u(u,A.a([A.aA(f,A.q(f,A.c(m,f,f,f,f,f,f,new A.F(!0,l,f,f,f,f,12,B.C,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f),f,f,f),B.f,f,f,new A.p(p,f,new A.bE(n,n,n,n),new A.bc(o,o,o,o),f,f,B.m),f,f,f,f,C.bHS,f,f,f),B.y,!1,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,new D.eM1(g,q),f,f,f,f,f,f,!1,B.a4),B.b6],e))}a0=A.E(A.cc(A.A(u,B.l,f,B.e,B.i,0,f,f),B.t,f,B.y,f,f,f,f,f,B.aJ),1)
u=g.CW?B.cC:B.eQ
u=A.a([A.A(A.a([a0,B.b6,g.a1w(a2,u,new D.eM2(g))],e),B.l,f,B.e,B.i,0,f,f)],e)
if(g.CW){a0=A.l(f,f,s?C.cl:B.c,f,f,f,f,f,f,f,f,f,f,f,f,f,f,!0,f,f,f,f,f,f,f,f)
p=A.l(f,f,s?C.bT:C.bV,f,f,f,f,f,f,f,f,13,f,f,f,f,f,!0,f,f,f,f,f,f,f,f)
o=A.V(B.eQ,s?C.bT:C.bV,f,f,f,f)
m=s?B.c.j(0.92):C.id
l=A.n(999)
k=s?C.oT:C.oO
j=A.n(999)
i=s?C.oT:C.oO
B.d.u(u,A.a([B.S,A.aO(f,B.M,!0,f,!0,B.t,f,A.aP(),g.cy,f,f,f,f,f,2,A.bB(f,new A.b5(4,l,new A.ax(k,1,B.r,-1)),f,B.fc,f,f,f,f,!0,new A.b5(4,j,new A.ax(i,1,B.r,-1)),f,f,f,f,f,m,!0,f,f,f,f,f,f,f,f,f,f,f,f,f,p,"Search a market, for example EUR/USD, GBP or Bitcoin",f,f,f,f,f,f,f,f,f,!0,!0,!1,f,o,f,f,f,f,f,f,f,f,f,f,f,f),B.y,!0,f,!0,f,!1,f,B.am,f,f,f,f,f,f,f,f,f,1,f,f,!1,"\u2022",f,new D.eM3(g),f,f,f,!1,f,f,!1,f,!0,f,B.ad,f,f,f,f,f,f,f,f,f,f,f,a0,!0,B.a7,f,B.ao,f,f,f,f)],e))}u.push(B.af)
u.push(g.bHQ(a2))
if(J.z(w.h(0,"paused"),!0)){a0=w.h(0,"pauseReason")
a0=A.v(a0==null?"Record too weak \u2014 signals paused until the pattern improves.":a0)
p=B.h.M(D.c5(w.h(0,"paperStreak")))
o=w.h(0,"liftStreak")
u.push(new A.C(B.kN,A.c(a0+" ("+p+" of "+B.h.M(D.c5(o==null?10:o))+" paper wins in a row to lift it)",f,f,f,f,f,f,C.fRj,B.K,f,f),f))}u.push(B.N)
u.push(A.A(A.a([C.c1E,B.dU,new A.d_(1,B.c8,A.c("Live confirmations \xb7 updated "+t+" \xb7 signals are only given at the 30-minute checks",f,f,f,f,f,f,A.l(f,f,s?C.bT:C.bV,f,f,f,f,f,f,f,f,11,f,f,f,f,f,!0,f,f,f,f,f,f,f,f),B.K,f,f),f)],e),B.l,f,B.bc,B.i,0,f,f))
u.push(B.af)
if(d.length===0)u.push(A.c("Loading the markets...",f,f,f,f,f,f,A.l(f,f,s?C.bT:C.bV,f,f,f,f,f,f,f,f,f,f,f,f,f,f,!0,f,f,f,f,f,f,f,f),f,f,f))
if(d.length!==0&&a1.length===0){e=g.ch
u.push(A.at(A.c('No market matches "'+e+'".',f,f,f,f,f,f,A.l(f,f,s?C.bT:C.bV,f,f,f,f,f,f,f,f,f,f,f,f,f,f,!0,f,f,f,f,f,f,f,f),f,f,f),f,f,f))}for(e=a1.length,r=0;r<a1.length;a1.length===e||(0,A.I)(a1),++r){h=a1[r]
u.push(D.hOR(a2,h,!1,new D.eM4(g,h)))}u.push(g.cFL(a2))
u.push(A.c("Signals are opinions from price patterns, not guarantees. Even strong signals lose. Signals only: nothing is ever traded here.",f,f,f,f,f,f,A.l(f,f,s?C.bT:C.bV,f,f,f,f,f,f,f,f,11,f,f,f,f,f,!0,f,f,f,f,f,f,f,f),B.K,f,f))
return A.Gn(A.ck(u,f,f,B.a2y,f,f,B.ah,!1),f,g.gcig())},
cFL(a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e="direction",d="graded",a0="exit_price",a1="move_pct",a2=x.g.a(this.db.h(0,"history"))
if(a2==null)a2=B.bM
a2=J.cL(a2,x.f)
a2=A.ct(a2,new D.eLV(),a2.$ti.k("M.E"),x.P)
w=A.B(a2,A.a3(a2).k("M.E"))
a2=a3.a
v=a2?B.c.j(0.92):C.id
u=A.n(20)
t=A.K(a2?B.c:C.nf,B.r,1)
s=A.c("Signal history",f,f,f,f,f,f,A.l(f,f,a2?C.cl:B.c,f,f,f,f,f,f,f,f,15,f,f,B.C,f,f,!0,f,f,f,f,f,f,f,f),f,f,f)
r=x.p
s=A.a([s,B.at,A.c("Every STRONG signal, graded at its 30-minute expiry: did the price finish its way? The record is the record.",f,f,f,f,f,f,A.l(f,f,a2?C.bT:C.bV,f,f,f,f,f,f,f,f,11.5,f,f,f,f,1.3,!0,f,f,f,f,f,f,f,f),f,f,f),B.N],r)
if(w.length===0)s.push(A.c("No STRONG signals yet. Zero signals is a correct outcome when the confirmations do not all agree.",f,f,f,f,f,f,A.l(f,f,a2?C.bT:C.bV,f,f,f,f,f,f,f,f,12.5,f,f,f,f,f,!0,f,f,f,f,f,f,f,f),f,f,f))
for(q=w.length,p=0;p<w.length;w.length===q||(0,A.I)(w),++p){o=w[p]
n=a2?C.oT:C.oO
m=J.a1(o)
l=(J.z(m.h(o,e),"BUY")?C.cI:C.d6).j(0.14)
k=new A.aQ(8,8)
j=A.v(m.h(o,e))
i=J.z(m.h(o,e),"BUY")?C.cI:C.d6
l=A.q(B.z,A.c(j,f,f,f,f,f,f,new A.F(!0,i,f,f,f,f,11,B.u,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f),f,f,f),B.f,f,f,new A.p(l,f,f,new A.bc(k,k,k,k),f,f,B.m),f,f,f,f,B.tH,f,f,46)
k=A.v(m.h(o,"market"))
j=m.h(o,"price")
if(!(typeof j=="number")){j=A.cA(A.v(j==null?"":j))
if(j==null)j=0}i=m.h(o,"price")
if(!(typeof i=="number")){i=A.cA(A.v(i==null?"":i))
if(i==null)i=0}j=B.h.a1(j,i<10?4:2)
i=a2?C.cl:B.c
k=A.c(k+" at "+j,f,f,f,f,f,f,new A.F(!0,i,f,f,f,f,13,B.C,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f),f,f,f)
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
k=A.w(A.a([k,A.c(j+i,f,f,f,f,f,f,new A.F(!0,h,f,f,f,f,11,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f),f,f,f)],r),B.B,f,B.e,B.i,0,B.p)
j=J.z(m.h(o,d),!0)?A.v(m.h(o,"result")):"PENDING"
if(!J.z(m.h(o,d),!0))m=B.b1
else m=J.z(m.h(o,"result"),"WIN")?C.cI:C.d6
i=m.j(0.14)
h=new A.aQ(999,999)
s.push(A.q(f,new A.c_(B.aJ,B.e,B.i,B.l,f,B.p,f,0,A.a([l,B.ar,new A.bu(1,B.b9,k,f),A.q(f,A.c(j,f,f,f,f,f,f,new A.F(!0,m,f,f,f,f,10.5,B.u,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f),f,f,f),B.f,f,f,new A.p(i,f,f,new A.bc(h,h,h,h),f,f,B.m),f,f,f,f,B.f8,f,f,f)],r),f),B.f,f,f,new A.p(f,f,new A.bE(B.a1,B.a1,new A.ax(n,1,B.r,-1),B.a1),f,f,f,B.m),f,f,f,f,B.hB,f,f,f))}return A.q(f,A.w(s,B.B,f,B.e,B.i,0,B.p),B.f,f,f,new A.p(v,f,t,u,f,f,B.m),f,f,f,C.bGw,B.bD,f,f,f)},
bHQ(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=new A.X(C.Ex,new D.eLh(h),x.E).gI(0),e=h.z||h.y
if(!e)w=new A.b7([B.j8,B.b1,"Signal alerts unlock when you finish all 10 lessons ("+f+" of 10 done). You will be told the market and STRONG BUY or SELL (only when all 5 confirmations agree), built for a 15\u201330 minute expiry.","Go to lessons"])
else w=!h.Q?C.frg:C.fqA
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
if(r!=null){i=A.bp(t,g,g,g,g,g,B.eF,g,g,g,g,g)
B.d.u(k,A.a([B.aa,A.bH(A.c(r,g,g,g,g,g,g,B.px,g,g,g),g,new D.eLi(h,e),i)],j))}return A.q(g,A.A(k,B.l,g,B.e,B.i,0,g,g),B.f,g,g,new A.p(v,g,l,m,g,g,B.m),g,g,g,B.dX,B.bg,g,g,g)},
bJb(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=x.p,h=A.a([],i)
if($.DL.length===0){w=d.a
v=w?B.c.j(0.92):C.id
u=A.n(22)
t=A.K(w?B.c:C.nf,B.r,1)
s=A.q(j,C.c2A,B.f,j,j,E.aha,j,40,j,j,j,j,j,40)
s=A.A(A.a([s,B.ar,A.E(A.c("Your trading tutor",j,j,j,j,j,j,A.l(j,j,w?C.cl:B.c,j,j,j,j,j,j,j,j,16,j,j,B.C,j,j,!0,j,j,j,j,j,j,j,j),j,j,j),1)],i),B.l,j,B.e,B.i,0,j,j)
v=A.q(j,A.w(A.a([s,B.N,A.c("Ask anything about trading. The tutor sees the same live prices and readings as the agent, so it can explain what each market is doing right now.",j,j,j,j,j,j,A.l(j,j,w?C.bT:C.bV,j,j,j,j,j,j,j,j,12.5,j,j,j,j,1.35,!0,j,j,j,j,j,j,j,j),j,j,j)],i),B.B,j,B.e,B.i,0,B.p),B.f,j,j,new A.p(v,j,t,u,j,j,B.m),j,j,j,j,B.bR,j,j,j)
u=A.a([],i)
for(r=0;r<6;++r){q=C.deD[r]
t=w?C.cl:B.c
t=A.c(q,j,j,j,j,j,j,new A.F(!0,t,j,j,j,j,12,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j),j,j,j)
s=w?B.c.j(0.92):C.id
p=w?C.oT:C.oO
o=new A.aQ(999,999)
u.push(A.lL(j,s,j,t,j,new D.eLj(k,q),j,new A.ba(new A.bc(o,o,o,o),B.a1),new A.ax(p,1,B.r,-1),j))}B.d.u(h,A.a([v,B.af,A.bY(B.bH,u,B.bq,j,8,8)],i))}for(w=$.DL.length,v=d.a,r=0;r<$.DL.length;$.DL.length===w||(0,A.I)($.DL),++r){n=$.DL[r]
u=n.a
t=u?B.a9:B.a5
if(u)s=v?C.n7:B.c
else s=v?B.c.j(0.92):C.id
p=u?18:4
o=u?4:18
if(u)m=j
else{l=new A.ax(v?B.c:C.nf,1,B.r,-1)
m=new A.bE(l,l,l,l)}if(u)u=v?B.c:C.n7
else u=v?C.cl:B.c
h.push(new A.bJ(t,j,j,A.q(j,A.yU(n.b,new A.F(!0,u,j,j,j,j,13.5,j,j,j,j,j,1.4,j,j,j,j,j,j,j,j,j,j,j,j,j),j),B.f,j,F.agK,new A.p(s,j,m,new A.bc(B.ia,B.ia,new A.aQ(p,p),new A.aQ(o,o)),j,j,B.m),j,j,j,B.jE,B.hq,j,j,j),j))}if($.ahQ){w=v?B.c.j(0.92):C.id
u=A.n(18)
h.push(new A.bJ(B.a5,j,j,A.q(j,A.A(A.a([B.WQ,B.aa,A.c("Reading the markets...",j,j,j,j,j,j,A.l(j,j,v?C.bT:C.bV,j,j,j,j,j,j,j,j,12.5,j,j,j,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)],i),B.l,j,B.e,B.P,0,j,j),B.f,j,j,new A.p(w,j,j,u,j,j,B.m),j,j,j,B.hA,B.hq,j,j,j),j))}h=A.E(A.ck(h,k.ax,j,C.bJ5,j,j,B.ah,!1),1)
w=A.l(j,j,v?C.cl:B.c,j,j,j,j,j,j,j,j,j,j,j,j,j,j,!0,j,j,j,j,j,j,j,j)
u=A.l(j,j,v?C.bT:C.bV,j,j,j,j,j,j,j,j,j,j,j,j,j,j,!0,j,j,j,j,j,j,j,j)
t=v?B.c.j(0.92):C.id
s=A.n(999)
p=v?C.oT:C.oO
o=A.n(999)
m=v?C.oT:C.oO
w=A.E(A.aO(j,B.M,!1,j,!0,B.t,j,A.aP(),k.at,j,j,j,j,j,2,A.bB(j,new A.b5(4,s,new A.ax(p,1,B.r,-1)),j,B.zE,j,j,j,j,!0,new A.b5(4,o,new A.ax(m,1,B.r,-1)),j,j,j,j,j,t,!0,j,j,j,j,j,j,j,j,j,j,j,j,j,u,"Ask about trading or a market...",j,j,j,j,j,j,j,j,j,!0,!0,!1,j,j,j,j,j,j,j,j,j,j,j,j,j,j),B.y,!0,j,!0,j,!1,j,B.am,j,j,j,j,j,j,j,j,j,4,1,j,!1,"\u2022",j,j,j,k.gcif(),j,!1,j,j,!1,j,!0,j,B.ad,j,j,j,j,j,j,j,j,j,j,j,w,!0,B.a7,j,B.ao,j,B.X4,j,j),1)
u=v?C.n7:B.c
t=$.ahQ?j:new D.eLk(k)
return A.w(A.a([h,A.q(j,A.A(A.a([w,B.aa,A.aG(!1,B.a3,!0,j,A.aM(!1,j,!0,new A.a4(48,48,A.V(B.p4,v?B.c:C.n7,j,j,j,j),j),B.cH,!0,j,j,j,j,j,j,j,j,j,j,j,t,j,j,j,j,j,j,j),B.f,u,0,j,j,B.cH,j,j,B.ai)],i),B.l,j,B.e,B.i,0,j,j),B.f,j,j,j,j,j,j,j,B.Di,j,j,j)],i),B.l,j,B.e,B.i,0,B.p)}}
D.a18.prototype={
R(){var w=x.S
return new D.bmk(A.S(w,w))},
d0o(d){return this.e.$0()},
d37(d){return this.x.$1(d)},
rD(){return this.y.$0()},
d1F(d){return this.z.$1(d)},
gd5(d){return this.w}}
D.bmk.prototype={
Z(){var w,v,u,t,s,r,q,p,o,n=this
n.a4()
w=C.dOs.h(0,n.a.c.a)
n.d=w==null?n.a.c.x:w
v=n.a.w
u=new D.dxg()
t=new D.dxe()
w=u.$1(v.h(0,"slots"))
s=A.T(w).k("X<1>")
w=A.B(new A.X(w,new D.dxc(n),s),s.k("M.E"))
n.e=w
w=w.length
s=n.d.length
if(w!==Math.min(10,s)){w=x.S
r=J.e3(s,w)
for(q=0;q<s;++q)r[q]=q
B.d.e_(r,B.cW)
n.e=A.cJ(r,0,A.dx(Math.min(10,n.d.length),"count",w),A.T(r).c).de(0)}w=u.$1(v.h(0,"right"))
n.f=A.jw(w,A.T(w).c)
n.r=t.$1(v.h(0,"tries"))
n.w=t.$1(v.h(0,"locks"))
n.x=u.$1(v.h(0,"used"))
for(w=n.e,s=w.length,p=0;p<w.length;w.length===s||(0,A.I)(w),++p){o=w[p]
if(!B.d.q(n.x,o))B.d.K(n.x,o)}n.bcT(!1)
n.z=A.d5(B.fr,new D.dxd(n))},
t(){var w=this.z
if(w!=null)w.a2(0)
this.a3()},
b4F(){var w,v,u,t,s,r,q=this,p=q.a
p.toString
w=q.e
w===$&&A.d()
v=q.f
v===$&&A.d()
v=A.B(v,A.a3(v).k("cl.E"))
u=q.r
u===$&&A.d()
t=x.N
s=x.S
u=u.j4(u,new D.dx4(),t,s)
r=q.w
r===$&&A.d()
s=r.j4(r,new D.dx5(),t,s)
r=q.x
r===$&&A.d()
return p.d37(A.J(["slots",w,"right",v,"tries",u,"locks",s,"used",r],t,x.z))},
bcT(d){var w,v,u,t,s,r,q,p,o,n=this,m=Date.now(),l=n.y,k=x.X,j=!1,i=0
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
w=A.T(s).k("X<1>")
q=A.B(new A.X(s,new D.dx6(n),w),w.k("M.E"))
if(q.length!==0)p=q
else{t=n.d.length
s=A.a(new Array(t),k)
for(r=0;r<t;++r)s[r]=r
w=A.T(s).k("X<1>")
p=A.B(new A.X(s,new D.dx7(n),w),w.k("M.E"))}w=p.length
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
j=!0}++i}if(j&&d)n.b4F()},
cIs(){return this.bcT(!0)},
coO(d){var w,v,u,t,s=this.d
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
cie(d,e){var w=this,v=w.f
v===$&&A.d()
if(!v.q(0,d)){v=w.w
v===$&&A.d()
v=v.am(0,d)}else v=!0
if(v)return
w.l(new D.dx2(w,e,d))
w.b4F()},
C(d){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=A.Q(d).ax.a===B.dg,i=new D.RN(j),h=l.a.c,g=l.e
g===$&&A.d()
w=l.f
w===$&&A.d()
v=new A.X(g,w.gjL(w),A.T(g).k("X<1>")).gI(0)
u=v===l.e.length
g=j?C.te:C.tc
w=j?C.te:C.tc
t=j?C.Om:C.Oe
s=x.O
t=A.a([w,t],s)
w=A.aJ(k,k,k,k,A.V(B.eH,j?C.cl:B.c,k,k,k,18),k,k,k,new D.dx8(d),k,k,k,k,k,k)
r=l.a.d
q=x.p
r=A.A(A.a([w,B.aY,A.c("Lesson "+r+" of 10",k,k,k,k,k,k,A.l(k,k,j?C.bT:C.bV,k,k,k,k,k,k,k,k,12,k,k,B.O,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)],q),B.l,k,B.e,B.i,0,k,k)
w=A.n(24)
p=h.f
o=A.ap(p,B.v,0.35)
o.toString
s=A.a([p,o],s)
o=B.c.j(0.2)
p=A.n(16)
s=A.a([r,A.q(k,A.A(A.a([A.q(k,A.V(h.e,B.c,k,k,k,28),B.f,k,k,new A.p(o,k,k,p,k,k,B.m),k,52,k,k,k,k,k,52),B.et,A.E(A.w(A.a([A.c(h.b,k,k,k,k,k,k,B.fT,k,k,k),A.c(h.c+" \xb7 "+h.d+" min",k,k,k,k,k,k,B.nG,k,k,k)],q),B.B,k,B.e,B.i,0,B.p),1)],q),B.l,k,B.e,B.i,0,k,k),B.f,k,k,new A.p(k,k,k,w,k,new A.a6(B.a5,B.a9,B.w,s,k,k),B.m),k,k,k,k,B.f7,k,k,k),B.az],q)
for(w=h.w,n=0;n<4;++n){r=w[n]
p=j?C.cl:B.c
p=A.c(r.a,k,k,k,k,k,k,new A.F(!0,p,k,k,k,k,16,B.C,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k),k,k,k)
o=j?C.cl:B.c
B.d.u(s,A.a([p,B.at,A.c(r.b,k,k,k,k,k,k,new A.F(!0,o,k,k,k,k,14,k,k,k,k,k,1.5,k,k,k,k,k,k,k,k,k,k,k,k,k),k,k,k),B.az],q))}w=j?B.c.j(0.92):C.id
r=A.n(22)
p=A.K(C.cI.j(0.45),B.r,1.5)
s.push(A.q(k,A.w(A.a([A.A(A.a([C.bZ5,B.b6,A.c("See it live right now",k,k,k,k,k,k,A.l(k,k,j?C.cl:B.c,k,k,k,k,k,k,k,k,14,k,k,B.C,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)],q),B.l,k,B.e,B.i,0,k,k),B.S,l.a.d0o(0)],q),B.B,k,B.e,B.i,0,B.p),B.f,k,k,new A.p(w,k,p,r,k,k,B.m),k,k,k,k,B.bD,k,k,k))
s.push(B.bx)
w=A.c("Quiz",k,k,k,k,k,k,A.l(k,k,j?C.cl:B.c,k,k,k,k,k,k,k,k,16,k,k,B.C,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)
r=""+v+" of "
p=l.e.length
if(u)o=C.cI
else o=j?C.bT:C.bV
s.push(A.A(A.a([w,B.aY,A.c(r+p+" right",k,k,k,k,k,k,A.l(k,k,o,k,k,k,k,k,k,k,k,12.5,k,k,B.C,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)],q),B.l,k,B.e,B.i,0,k,k))
s.push(B.aj)
o=A.n(9)
w=l.e.length
w=w===0?0:v/w
s.push(A.bv(o,A.jK(j?C.Ot:C.Oi,k,k,7,k,w,C.b6R),B.ap))
s.push(B.N)
w=l.a.f?"Admin: you can retry any question.":"Get all 10 right to finish. A wrong answer gets one more try; wrong twice and that question locks for 5 minutes, then a new question takes its place."
s.push(A.c(w,k,k,k,k,k,k,A.l(k,k,j?C.bT:C.bV,k,k,k,k,k,k,k,k,11.8,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),k,k,k))
s.push(B.S)
for(m=0;w=l.e,m<w.length;++m)s.push(l.cw9(i,m,w[m]))
s.push(B.N)
w=j?C.cl:B.c
p=j?C.oT:C.oO
p=A.E(A.en(C.c4Q,k,C.h1P,new D.dx9(l,h),A.dj(k,k,k,k,k,k,k,k,k,w,k,k,B.cq,k,new A.ba(A.n(999),B.a1),new A.ax(p,1.5,B.r,-1),k,k,k,k)),1)
w=!u
if(!w||l.a.r)j=C.cI
else j=j?C.bT:C.bV
j=A.bp(j,k,k,k,k,k,B.cq,k,new A.ba(A.n(999),B.a1),k,k,k)
o=!w||l.a.r?new D.dxa(l,d):k
s.push(A.A(A.a([p,B.ar,A.E(A.df(B.RB,k,A.c(!w||l.a.r?"Finish lesson":r+l.e.length+" right",k,k,k,k,k,k,B.cg,k,k,k),o,j),1)],q),B.l,k,B.e,B.i,0,k,k))
return A.c6(k,g,A.q(k,A.bn(!0,A.ck(s,k,k,C.bJc,k,k,B.ah,!1),!0,!1,B.ag,!0,!0),B.f,k,k,new A.p(k,k,k,k,k,new A.a6(B.aV,B.b_,B.w,t,k,k),B.m),k,k,k,k,k,k,k,k),k,!1,!1,k,k)},
cw9(a8,a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=this,a6=null,a7=a5.d
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
p=a7?C.r6:C.r7
o=A.n(20)
n=A.K(C.d6.j(0.4),B.r,1)
m=A.c("Question "+(a9+1)+" is locked",a6,a6,a6,a6,a6,a6,A.l(a6,a6,a7?C.cl:B.c,a6,a6,a6,a6,a6,a6,a6,a6,14,a6,a6,B.C,a6,a6,!0,a6,a6,a6,a6,a6,a6,a6,a6),a6,a6,a6)
l=x.p
return A.q(a6,A.A(A.a([C.c7_,B.ar,A.E(A.w(A.a([m,A.c("Wrong twice. Re-read the lesson; a new question appears in "+r+":"+q+".",a6,a6,a6,a6,a6,a6,A.l(a6,a6,a7?C.bT:C.bV,a6,a6,a6,a6,a6,a6,a6,a6,12.5,a6,a6,a6,a6,1.35,!0,a6,a6,a6,a6,a6,a6,a6,a6),a6,a6,a6)],l),B.B,a6,B.e,B.i,0,B.p),1)],l),B.l,a6,B.e,B.i,0,a6,a6),B.f,a6,a6,new A.p(p,a6,n,o,a6,a6,B.m),a6,a6,a6,B.d3,B.bD,a6,a6,a6)}a7=a8.a
p=a7?B.c.j(0.92):C.id
o=A.n(20)
if(v)n=C.cI.j(0.6)
else n=a7?B.c:C.nf
n=A.K(n,B.r,v?1.5:1)
m=x.p
l=A.a([A.c(""+(a9+1)+". "+w.a,a6,a6,a6,a6,a6,a6,A.l(a6,a6,a7?C.cl:B.c,a6,a6,a6,a6,a6,a6,a6,a6,14,a6,a6,B.C,a6,a6,!0,a6,a6,a6,a6,a6,a6,a6,a6),a6,a6,a6),B.N],m)
for(k=a5.coO(b0),j=k.length,i=!v,h=w.b,g=w.c,f=0;f<k.length;k.length===j||(0,A.I)(k),++f){e=k[f]
d=v?a6:new D.dx3(a5,b0,e)
if(v&&e===g)a0=C.cI.j(0.14)
else if(s===e)a0=C.d6.j(0.12)
else a0=a7?C.r6:C.r7
a1=new A.aQ(14,14)
if(v&&e===g)a2=C.cI
else a2=s===e?C.d6:B.L
a3=new A.ax(a2,1,B.r,-1)
a2=h[e]
a4=a7?C.cl:B.c
a2=A.a([new A.bu(1,B.b9,A.c(a2,a6,a6,a6,a6,a6,a6,new A.F(!0,a4,a6,a6,a6,a6,13.5,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6),a6,a6,a6),a6)],m)
if(v&&e===g)a2.push(C.c2k)
if(i&&s===e)a2.push(C.c8m)
l.push(A.aA(a6,A.q(a6,new A.c_(B.aJ,B.e,B.i,B.l,a6,B.p,a6,0,a2,a6),B.f,a6,a6,new A.p(a0,a6,new A.bE(a3,a3,a3,a3),new A.bc(a1,a1,a1,a1),a6,a6,B.m),a6,a6,a6,B.ey,B.er,a6,a6,a6),B.y,!1,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,d,a6,a6,a6,a6,a6,a6,!1,B.a4))}if(v)l.push(A.c("Right! "+w.d,a6,a6,a6,a6,a6,a6,C.fWF,a6,a6,a6))
else if(t===1&&!a5.a.f)l.push(C.h4C)
else if(t>=1)l.push(C.h2_)
return A.q(a6,A.w(l,B.B,a6,B.e,B.i,0,B.p),B.f,a6,a6,new A.p(p,a6,n,o,a6,a6,B.m),a6,a6,a6,B.d3,B.bD,a6,a6,a6)}}
D.aQj.prototype={
t(){var w=this,v=w.ab$
if(v!=null)v.a8(0,w.gbD())
w.ab$=null
w.a3()},
b0(){this.b8()
this.b6()
this.bE()}}
var z=a.updateTypes(["P(uF)","az<~>()","~()","Y6(Z)","P(Rh)","az<~>(o)","o(a04)","a18(Z)"])
D.eLe.prototype={
$1(d){var w=this.a
if(w.c!=null)w.z8(!0)},
$S:26}
D.eLf.prototype={
$1(d){this.a.z8(!0)
return null},
$S:10}
D.eKv.prototype={
$0(){var w=this.a
w.d=this.b
w.f=!1},
$S:0}
D.eKM.prototype={
$1(d){var w=this.a.as,v=w.f
if(v.length!==0){v=B.d.gd2(v).Q
v.toString
w.ig(B.h.D(Math.min(this.b*160-16,v),0,1/0))}},
$S:7}
D.eKx.prototype={
$0(){return this.a.Q=this.b},
$S:0}
D.eKL.prototype={
$0(){return this.a.Q=this.b},
$S:0}
D.eKO.prototype={
$0(){var w=this.a,v=w.f=!1,u=this.b,t=u==null
if(!t?J.z(J.t(u,"ok"),!0):v){w.d=u
w.ay=null}else{v=t?null:J.t(u,"error")
w.ay=J.k(v==null?"Could not reach the server. Pull down to try again.":v)
if(!J.z(t?null:J.t(u,"ownerOnly"),!0))v=J.z(t?null:J.t(u,"setupNeeded"),!0)
else v=!0
if(v)w.d=null}},
$S:0}
D.eKP.prototype={
$0(){var w=this.a,v=this.b
w.e=v
w.w=J.aa(v)>=30},
$S:0}
D.eKu.prototype={
$1(d){return A.a0(d,x.N,x.z)},
$S:22}
D.eKw.prototype={
$0(){var w,v,u=this,t=u.a
if(u.b){w=A.B(t.e,x.P)
v=u.c
B.d.u(w,v)}else{w=u.c
v=w}t.e=w
t.w=J.aa(v)>=30},
$S:0}
D.eKX.prototype={
$1(d){var w=null
return A.el(A.a([A.bK(!1,B.dy,w,w,!0,w,w,w,new D.eKV(d),w,w),A.bH(C.hp8,w,new D.eKW(d),w)],x.p),w,w,w,C.hpy,w,w,w,w,C.h68,w)},
$S:17}
D.eKV.prototype={
$0(){A.a7(this.a,!1).N(!1)
return null},
$S:0}
D.eKW.prototype={
$0(){A.a7(this.a,!1).N(!0)
return null},
$S:0}
D.eKY.prototype={
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
D.eKZ.prototype={
$0(){var w=this,v=w.a,u=v.r=!1,t=w.b
if(t){u=w.c
u.toString
u=J.t(u,"state")!=null}if(u)v.d=w.c
else if(!t)v.d=w.d},
$S:0}
D.eKE.prototype={
$1(d){var w=this.a,v=w.d
w.a.toString
return D.hnw(v,!1)},
$S:z+3}
D.eKR.prototype={
$0(){return this.a.r=!0},
$S:0}
D.eKS.prototype={
$0(){var w=this.a,v=w.r=!1,u=this.b
if(u!=null?J.z(J.t(u,"ok"),!0):v)w.d=u},
$S:0}
D.eKT.prototype={
$1(d){var w=this
return A.on(new D.eKQ(w.a,w.b,w.c,w.d),!1,0.8,0.95,0.25,!1,null)},
$S:129}
D.eKQ.prototype={
$2(d,e){var w=this
return w.a.cBl(w.b,w.c,D.dF(J.t(w.d,"state")),e)},
$S:2098}
D.eKU.prototype={
$2(d,e){return B.h.aQ(D.eL1(d),D.eL1(e))},
$S:39}
D.eLd.prototype={
$0(){return this.a.z8(!0)},
$S:1}
D.eL8.prototype={
$0(){var w=this.a.c
w.toString
return A.Ot(w)},
$S:0}
D.eL9.prototype={
$0(){return this.a.z8(!0)},
$S:0}
D.eKi.prototype={
$1(d){var w,v=J.a1(d)
if(!J.z(v.h(d,"today"),!0)){v=v.h(d,"asset")
w=this.a
v=J.z(v,w==null?null:w.h(0,"symbol"))}else v=!0
return v},
$S:4}
D.eKj.prototype={
$1(d){return J.z(J.t(d,"asset"),this.a.Q)},
$S:4}
D.eKk.prototype={
$1(d){return J.z(J.t(d,"asset"),this.a)},
$S:4}
D.eKl.prototype={
$0(){var w=this
return B.d.ds(w.a,new D.eKg(w.b),new D.eKh(w.c,w.d))},
$S:150}
D.eKg.prototype={
$1(d){return J.z(J.t(d,"asset"),this.a)},
$S:4}
D.eKh.prototype={
$0(){var w=this.a
return w.length===0?this.b:B.d.gH(w)},
$S:150}
D.eKm.prototype={
$1(d){return J.z(J.t(d,"asset"),this.a.h(0,"symbol"))},
$S:4}
D.eKn.prototype={
$0(){return this.a},
$S:150}
D.eL4.prototype={
$1(d){return A.v(d)},
$S:15}
D.eL5.prototype={
$1(d){return A.v(d)},
$S:15}
D.eL6.prototype={
$1(d){return B.a.q(d,"/")},
$S:3}
D.eL7.prototype={
$1(d){return!B.a.q(d,"/")},
$S:3}
D.eL0.prototype={
$1(d){var w,v=this,u=null,t=v.b,s=v.a.cKM(t,v.c,v.d)
t=t.a
w=A.fu(u,u,t?B.c.j(0.92):C.id,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,B.nB,u,u,u,u,u,u)
return A.eD(u,B.L,A.aG(!1,B.a3,!0,u,A.w(A.a([s,B.S,A.bK(!1,A.c("Got it",u,u,u,u,u,u,A.l(u,u,t?C.cl:B.c,u,u,u,u,u,u,u,u,u,u,u,B.C,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u,u,!0,u,u,u,new D.eL_(d),u,w)],x.p),B.l,u,B.e,B.P,0,B.p),B.f,B.L,0,u,u,u,u,u,B.ai),u,u,u,B.zH,u,B.db,u,u,u)},
$S:46}
D.eL_.prototype={
$0(){return A.a7(this.a,!1).e3()},
$S:0}
D.eL3.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.c
s.toString
w=2
return A.b(A.a7(s,!1).ca(A.e4(new D.eL2(u.b),!1,null,x.H)),$async$$0)
case 2:if(t.c!=null)t.z8(!1)
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
D.eL2.prototype={
$1(d){return D.hEj(this.a)},
$S:679}
D.eKz.prototype={
$1(d){return J.z(J.t(d,"open"),!0)},
$S:4}
D.eKA.prototype={
$0(){var w=this
return w.a.cFD(w.b,w.c,w.d)},
$S:0}
D.eKB.prototype={
$1(d){return J.z(J.t(d,"asset"),J.t(this.a,"asset"))},
$S:4}
D.eKD.prototype={
$2(d,e){return B.ar},
$S:37}
D.eKC.prototype={
$2(d,a0){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.b[a0],l=J.a1(m),k=J.k(l.h(m,"asset")),j=k===J.t(o.c,"asset"),i=D.c5(l.h(m,"changePct")),h=i>=0,g=o.d,f=J.z(g==null?n:g.h(0,"symbol"),k),e=J.z(D.dF(l.h(m,"reading")).h(0,"decision"),"ENTER")&&J.z(D.dF(l.h(m,"reading")).h(0,"dir"),"up")
g=o.a
w=o.e
v=w.a
u=v?B.c.j(0.92):C.id
t=A.n(16)
if(j)s=D.fFs(k).c
else s=v?B.c:C.nf
s=A.K(s,B.r,j?2:1)
w=j?D.fFs(k).c.j(0.2):w.gIt()
w=A.a([new A.ac(0,B.H,w,B.cO,j?12:8)],x.V)
r=D.bF0(k,16)
q=x.p
r=A.a([r,B.dU,A.E(A.c(k,n,1,B.a2,n,n,n,A.l(n,n,v?C.cl:B.c,n,n,n,n,n,n,n,n,11.5,n,n,B.C,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),1)],q)
if(f)B.d.u(r,A.a([A.V(B.qd,F.qW,n,n,n,13),B.pu],q))
else if(e)B.d.u(r,A.a([A.V(B.fQ,C.cI,n,n,n,14),B.pu],q))
r.push(g.cM9(m))
r=A.A(r,B.l,n,B.e,B.i,0,n,n)
l=D.eh(D.c5(l.h(m,"price")),!0,!1)
l=A.E(new A.d7(B.dn,B.a5,B.f,A.c(l,n,n,n,n,n,n,A.l(n,n,v?C.cl:B.c,n,n,n,n,n,n,n,n,14.5,n,n,B.C,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),n),1)
v=h?"+":""
p=B.h.a1(i,2)
return A.aA(n,A.cZ(n,A.w(A.a([r,A.A(A.a([l,B.da,A.c(v+p+"%",n,n,n,n,n,n,A.l(n,n,h?C.cI:C.d6,n,n,n,n,n,n,n,n,10.5,n,n,B.C,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],q),B.dr,n,B.e,B.i,0,n,n)],q),B.B,n,B.iB,B.i,0,B.p),n,n,B.b0,new A.p(u,n,s,t,w,n,B.m),B.a3,n,n,n,n,B.iR,n,n,152),B.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new D.eKy(g,k),n,n,n,n,n,n,!1,B.a4)},
$S:81}
D.eKy.prototype={
$0(){return this.a.a2Q(this.b)},
$S:0}
D.eKq.prototype={
$0(){var w=this.a
return w.l(new D.eKp(w,this.b))},
$S:0}
D.eKp.prototype={
$0(){return this.a.z=this.b},
$S:0}
D.eKr.prototype={
$0(){var w=this.a
return w.l(new D.eKo(w))},
$S:0}
D.eKo.prototype={
$0(){var w=this.a
return w.ax=!w.ax},
$S:0}
D.eKs.prototype={
$1(d){return A.a0(d,x.N,x.z)},
$S:22}
D.eKe.prototype={
$1(d){return J.z(J.t(d,"asset"),this.a.h(0,"symbol"))},
$S:4}
D.eKf.prototype={
$0(){return A.S(x.N,x.z)},
$S:150}
D.eKG.prototype={
$1(d){return A.v(d)},
$S:15}
D.eKH.prototype={
$1(d){return A.v(d)},
$S:15}
D.eKI.prototype={
$1(d){return A.v(d)},
$S:15}
D.eKF.prototype={
$1(d){var w,v,u,t,s=A.bf(A.v(d==null?"":d))
if(s==null)return"?"
w=s.bV()
v=B.n.F(A.cY(w),12)===0?12:B.n.F(A.cY(w),12)
u=B.a.aY(B.n.v(A.fx(w)),2,"0")
t=A.cY(w)<12?"AM":"PM"
return""+v+":"+u+" "+t},
$S:15}
D.eKJ.prototype={
$2(d,e){var w,v=null,u=this.a.a?C.r6:C.r7
u=A.bS(3,A.q(v,v,B.f,v,v,new A.p(u,v,v,A.n(99),v,v,B.m),v,v,v,v,v,v,v,v),0,0,3)
w=B.h.D(this.b/this.c,0,1)
return new A.a4(v,14,new A.am(B.a0,v,B.ab,B.t,A.a([u,A.ao(3,A.q(v,v,B.f,v,v,new A.p(C.cI,v,v,A.n(99),v,v,B.m),v,v,v,v,v,v,v,v),v,v,0,v,3,e.b*w)],x.p),v),v)},
$S:109}
D.eKK.prototype={
$1(d){var w=J.a1(d),v=A.v(w.h(d,"symbol"))
return A.aD(v,"/USD","")+" until "+A.v(this.a.$1(w.h(d,"until")))},
$S:2099}
D.eKN.prototype={
$2(d,e){var w=null,v=e.b,u=A.ao(w,A.q(w,w,B.f,w,w,new A.p(w,w,w,A.n(99),w,C.ccW,B.m),w,8,w,w,w,w,w,w),w,w,0,0,9,w),t=this.a.a,s=A.ao(w,A.q(w,w,B.f,(t?C.cl:B.c).j(0.5),w,w,w,18,w,w,w,w,w,2),w,w,v/2-1,w,4,w),r=B.h.D(this.b*v-9,0,v-18)
return new A.a4(w,26,new A.am(B.a0,w,B.ab,B.f,A.a([u,s,A.ao(w,A.q(w,w,B.f,w,w,new A.p(B.c,w,A.K(t?C.cl:B.c,B.r,3),w,w,w,B.a6),w,18,w,w,w,w,w,18),w,w,r,w,4,w)],x.p),w),w)},
$S:109}
D.eKt.prototype={
$0(){return this.a.zu(!this.b)},
$S:0}
D.eKd.prototype={
$2(d,e){var w=null,v=this.a.a,u=v?C.r6:C.r7,t=A.n(12),s=A.c(d,w,1,B.a2,w,w,w,A.l(w,w,v?C.bT:C.bV,w,w,w,w,w,w,w,w,10.5,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)
return A.E(A.q(w,A.w(A.a([s,B.bs,new A.d7(B.dn,B.a5,B.f,A.c(e,w,w,w,w,w,w,A.l(w,w,v?C.cl:B.c,w,w,w,w,w,w,w,w,13,w,w,B.C,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w)],x.p),B.B,w,B.e,B.i,0,B.p),B.f,w,w,new A.p(u,w,w,t,w,w,B.m),w,w,w,w,B.iR,w,w,w),1)},
$S:107}
D.eLb.prototype={
$1(d){return A.a0(d,x.N,x.z)},
$S:22}
D.eLc.prototype={
$0(){var w=this.a
return w.l(new D.eLa(w))},
$S:0}
D.eLa.prototype={
$0(){var w=this.a
return w.y=!w.y},
$S:0}
D.eKc.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=t.x&&t.w?2:4
break
case 2:w=5
return A.b(t.a_H(!0),$async$$0)
case 5:w=3
break
case 4:t.l(new D.eKb(t))
case 3:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
D.eKb.prototype={
$0(){var w=this.a
return w.x=!w.x},
$S:0}
D.fOl.prototype={
$1(d){return Math.abs(B.n.ao(d.a.by(this.a).a,1e6))<90&&d.d.A(0,this.b)},
$S:z+4}
D.cYF.prototype={
$0(){return this.a.d=this.b},
$S:0}
D.cYO.prototype={
$2(d,e){var w,v,u=null,t=e.b,s=this.a,r=s.a,q=r.c,p=r.d,o=r.e,n=r.f
r=r.r
w=s.d
v=d.L(x.D)
if(v==null)v=B.D2
return A.aA(u,new A.a4(t,250,A.b4(u,u,u,new D.bfB(v.w.d,s.a.w,q,p,o,n,r,w,u),B.aB),u),B.y,!1,u,u,u,u,u,new D.cYJ(s),new D.cYK(s,t),new D.cYL(s,t),u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new D.cYM(s,t),new D.cYN(s),u,u,u,!1,B.a4)},
$S:35}
D.cYM.prototype={
$1(d){return this.a.aBL(d.b,this.b)},
$S:24}
D.cYK.prototype={
$1(d){return this.a.aBL(d.b,this.b)},
$S:50}
D.cYL.prototype={
$1(d){return this.a.aBL(d.b,this.b)},
$S:19}
D.cYJ.prototype={
$1(d){var w=this.a
return w.l(new D.cYI(w))},
$S:38}
D.cYI.prototype={
$0(){return this.a.d=null},
$S:0}
D.cYN.prototype={
$1(d){return A.bM(B.fP,new D.cYH(this.a),x.b)},
$S:55}
D.cYH.prototype={
$0(){var w=this.a
if(w.c!=null)w.l(new D.cYG(w))},
$S:12}
D.cYG.prototype={
$0(){return this.a.d=null},
$S:0}
D.cYP.prototype={
$1(d){var w=this.a
return w*d+w/2},
$S:163}
D.cYR.prototype={
$1(d){var w=this.b,v=this.a,u=v.a
return w-(d-u)/(v.b-u)*w},
$S:5}
D.cYQ.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o=this,n=$.U(),m=A.a([],x.v),l=new A.aI(n.r,B.ak,null,null,m)
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
l.ac()}t=!0}$.U()
n=A.L()
n.r=e.j(0.85).gp(0)
n.b=B.ae
n.c=2
n.d=B.bG
n.e=B.dQ
o.e.af(l,n)},
$S:2100}
D.flH.prototype={
$1(d){return D.c5(J.t(d,"c"))},
$S:2101}
D.fAh.prototype={
$1(d){var w=null,v=C.a97.h(0,d),u=v.a,t=v.b,s=this.a,r=s*0.78,q=A.K(B.c,B.r,1.2)
return A.q(B.z,A.c(u,w,w,w,w,w,w,A.l(w,w,B.c,w,w,w,w,w,w,w,w,s*(u.length>1?0.26:0.36),w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.f,w,w,new A.p(t,w,q,w,w,w,B.a6),w,r,w,w,w,w,w,r)},
$S:122}
D.fFM.prototype={
$1(d){var w=x.N,v=x.z,u=A.a0(d,w,v)
v=A.dE(u,w,v)
v.n(0,"asset",u.h(0,"symbol"))
return v},
$S:22}
D.fK6.prototype={
$1(d){return A.a0(d,x.N,x.z)},
$S:22}
D.fGS.prototype={
$1(d){return","},
$S:58}
D.fOf.prototype={
$3(d,e,f){var w=A.aXU(d,e,1,0,0,0,0,0)
while(A.m0(w)!==7)w=w.bM(864e8)
return w.bM(A.dw(7*(f-1),0,0,0,0,0).a)},
$S:2102}
D.eaQ.prototype={
$1(d){this.a.BL()
return null},
$S:10}
D.eai.prototype={
$0(){var w=this.a,v=this.b
w.d=A.a0(D.dF(v.h(0,"s")),x.N,x.z)
v=x.g.a(v.h(0,"log"))
if(v==null)v=B.bM
v=J.cL(v,x.f)
v=A.ct(v,new D.eah(),v.$ti.k("M.E"),x.P)
v=A.B(v,A.a3(v).k("M.E"))
w.e=v
w.f=!1},
$S:0}
D.eah.prototype={
$1(d){return A.a0(d,x.N,x.z)},
$S:22}
D.eax.prototype={
$0(){var w,v,u=this.a
u.f=!1
w=this.b
v=w==null
if(!v&&J.z(J.t(w,"ok"),!0)){u.d=A.a0(w,x.N,x.z)
u.w=null}else{w=v?null:J.t(w,"error")
u.w=J.k(w==null?"Could not load this system right now.":w)}w=this.c
if(w!=null&&J.z(J.t(w,"ok"),!0)){w=x.g.a(J.t(w,"rows"))
if(w==null)w=B.bM
w=J.cL(w,x.f)
w=A.ct(w,new D.eaw(),w.$ti.k("M.E"),x.P)
w=A.B(w,A.a3(w).k("M.E"))
u.e=w}},
$S:0}
D.eaw.prototype={
$1(d){return A.a0(d,x.N,x.z)},
$S:22}
D.eaD.prototype={
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
D.eaE.prototype={
$0(){var w=this.a,v=w.r=!1,u=this.b,t=u==null
if(!t?J.z(J.t(u,"ok"),!0):v)w.d=A.a0(u,x.N,x.z)
else{w.d=this.c
v=t?null:J.t(u,"error")
w.w=J.k(v==null?"Could not change it right now.":v)}},
$S:0}
D.eaO.prototype={
$0(){return A.Ot(this.a)},
$S:0}
D.eaP.prototype={
$0(){this.a.BL()
return null},
$S:0}
D.eab.prototype={
$0(){return this.a.zu(!this.b)},
$S:0}
D.eau.prototype={
$1(d){return A.a0(d,x.N,x.z)},
$S:22}
D.eav.prototype={
$2(d,e){var w,v=this,u=null,t=v.a.a?C.r6:C.r7
t=A.bS(3,A.q(u,u,B.f,u,u,new A.p(t,u,u,A.n(99),u,u,B.m),u,u,u,u,u,u,u,u),0,0,3)
w=B.h.D(v.b/v.c,0,1)
return new A.a4(u,14,new A.am(B.a0,u,B.ab,B.t,A.a([t,A.ao(3,A.q(u,u,B.f,u,u,new A.p(v.d,u,u,A.n(99),u,u,B.m),u,u,u,u,u,u,u,u),u,u,0,u,3,e.b*w)],x.p),u),u)},
$S:109}
D.eaf.prototype={
$1(d){var w=x.g.a(this.a.h(0,d))
if(w==null)w=B.bM
w=J.cL(w,x.f)
w=A.ct(w,new D.eag(),w.$ti.k("M.E"),x.P)
w=A.B(w,A.a3(w).k("M.E"))
return w},
$S:2103}
D.eag.prototype={
$1(d){return A.a0(d,x.N,x.z)},
$S:22}
D.eac.prototype={
$1(d){return A.v(d)},
$S:15}
D.ead.prototype={
$1(d){var w=null
return new A.C(C.bGe,A.c(d,w,w,w,w,w,w,A.l(w,w,this.a.a?C.cl:B.c,w,w,w,w,w,w,w,w,12.5,w,w,B.C,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w)},
$S:122}
D.eae.prototype={
$3$c$icon(d,e,f){var w,v=null,u=f.A(0,B.np)?6:13,t=e==null
if(t)w=this.a.a.c==="options"?B.aA:B.as
else w=e
u=A.V(f,w,v,v,v,u)
if(t)t=this.b.a?C.cl:B.c
else t=e
return new A.C(B.kN,A.A(A.a([new A.C(B.kP,u,v),H.wm,A.E(A.c(d,v,v,v,v,v,v,A.l(v,v,t,v,v,v,v,v,v,v,v,12,v,v,v,v,1.3,!0,v,v,v,v,v,v,v,v),v,v,v),1)],x.p),B.B,v,B.e,B.i,0,v,v),v)},
$1(d){return this.$3$c$icon(d,null,B.np)},
$2$icon(d,e){return this.$3$c$icon(d,null,e)},
$2$c(d,e){return this.$3$c$icon(d,e,B.np)},
$S:2104}
D.eao.prototype={
$1(d){return A.a0(d,x.N,x.z)},
$S:22}
D.eaB.prototype={
$1(d){return J.z(J.t(d,"symbol"),this.a.as)},
$S:4}
D.eaC.prototype={
$0(){var w=this.a
return B.d.ds(w,new D.eaz(),new D.eaA(w))},
$S:150}
D.eaz.prototype={
$1(d){return J.z(J.t(d,"tag"),"TRADED NOW")},
$S:4}
D.eaA.prototype={
$0(){return B.d.gH(this.a)},
$S:150}
D.eal.prototype={
$1(d){return J.z(D.dF(J.t(d,"analysis")).h(0,"passes"),!0)},
$S:4}
D.ean.prototype={
$2(d,e){return B.ar},
$S:37}
D.eam.prototype={
$2(b1,b2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=null,e="benched",d=g.b[b2],a0=J.a1(d),a1=A.v(a0.h(d,"symbol")),a2=a1===J.t(g.c,"symbol"),a3=D.c5(a0.h(d,"changePct")),a4=D.dF(a0.h(d,"record")),a5=D.dF(a0.h(d,"analysis")),a6=a0.h(d,"tag"),a7=A.v(a6==null?"":a6),a8=D.dF(a0.h(d,"today")),a9=B.h.M(D.c5(a8.h(0,"wins"))),b0=B.h.M(D.c5(a8.h(0,"losses")))
if(a7==="TRADED NOW")w=C.fbZ
else if(a0.h(d,e)!=null)w=C.feO
else{if(J.z(a5.h(0,"passes"),!0))a6=C.fex
else if(J.z(a5.h(0,"falling"),!0))a6=C.feG
else{a6=g.d.a?C.bT:C.bV
a6=new A.y(a6,a7==="closed"?"CLOSED":"WATCHING")}w=a6}v=w.a
u=f
t=w.b
u=t
s=v
a6=g.a
r=g.d
q=r.a
p=q?B.c.j(0.92):C.id
o=A.n(16)
if(a2)n=a6.a.c==="options"?B.aA:B.as
else n=q?B.c:C.nf
n=A.K(n,B.r,a2?2:1)
if(a2)r=(a6.a.c==="options"?B.aA:B.as).j(0.18)
else r=r.gIt()
r=A.a([new A.ac(0,B.H,r,B.cO,a2?12:8)],x.V)
m=D.bF0(a1,16)
l=x.p
m=A.A(A.a([m,B.dU,A.E(A.c(a1,f,1,B.a2,f,f,f,A.l(f,f,q?C.cl:B.c,f,f,f,f,f,f,f,f,11.5,f,f,B.C,f,f,!0,f,f,f,f,f,f,f,f),f,f,f),1),A.c(u,f,f,f,f,f,f,A.l(f,f,s,f,f,f,f,f,f,f,f,8.5,f,f,B.u,f,f,!0,f,f,f,f,f,f,f,f),f,f,f)],l),B.l,f,B.e,B.i,0,f,f)
k=D.eh(D.c5(a0.h(d,"price")),!0,!1)
k=A.E(new A.d7(B.dn,B.a5,B.f,A.c(k,f,f,f,f,f,f,A.l(f,f,q?C.cl:B.c,f,f,f,f,f,f,f,f,14.5,f,f,B.C,f,f,!0,f,f,f,f,f,f,f,f),f,f,f),f),1)
j=a3>=0
i=j?"+":""
h=B.h.a1(a3,2)
k=A.A(A.a([k,B.da,A.c(i+h+"%",f,f,f,f,f,f,A.l(f,f,j?C.cI:C.d6,f,f,f,f,f,f,f,f,10.5,f,f,B.C,f,f,!0,f,f,f,f,f,f,f,f),f,f,f)],l),B.dr,f,B.e,B.i,0,f,f)
j=D.c5(a4.h(0,"n"))===0?"":" \xb7 last "+B.h.M(D.c5(a4.h(0,"n")))+": "+B.h.M(D.c5(a4.h(0,"wins")))+"W/"+B.h.M(D.c5(a4.h(0,"losses")))+"L"
if(a9+b0>0)i=q?C.cl:B.c
else i=q?C.bT:C.bV
i=A.c("today "+a9+"W/"+b0+"L"+j,f,1,B.a2,f,f,f,A.l(f,f,i,f,f,f,f,f,f,f,f,9.5,f,f,B.O,f,f,!0,f,f,f,f,f,f,f,f),f,f,f)
if(a0.h(d,e)!=null)j="benched for today"
else if(D.c5(a4.h(0,"n"))===0)j="no trades here yet"
else{j=D.eh(D.c5(a4.h(0,"pnl")),!0,!0)
j+=a4.h(0,"topLoss")!=null?" \xb7 most losses: "+D.hJA(A.v(a4.h(0,"topLoss"))):""}if(a0.h(d,e)!=null)a0=C.d6
else a0=q?C.bT:C.bV
return A.aA(f,A.cZ(f,A.w(A.a([m,k,i,A.c(j,f,1,B.a2,f,f,f,A.l(f,f,a0,f,f,f,f,f,f,f,f,9.5,f,f,B.O,f,f,!0,f,f,f,f,f,f,f,f),f,f,f)],l),B.B,f,B.iB,B.i,0,B.p),f,f,B.b0,new A.p(p,f,n,o,r,f,B.m),B.eM,f,f,f,f,B.iR,f,f,152),B.y,!1,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,new D.eak(a6,a1),f,f,f,f,f,f,!1,B.a4)},
$S:81}
D.eak.prototype={
$0(){var w=this.a
return w.l(new D.eaj(w,this.b))},
$S:0}
D.eaj.prototype={
$0(){return this.a.as=this.b},
$S:0}
D.ea9.prototype={
$1(d){return A.a0(d,x.N,x.z)},
$S:22}
D.eaa.prototype={
$1(d){return A.a0(d,x.N,x.z)},
$S:22}
D.eaF.prototype={
$3$c(d,e,f){var w=null,v=this.a.a,u=v?C.r6:C.r7,t=A.n(12),s=A.c(d,w,1,B.a2,w,w,w,A.l(w,w,v?C.bT:C.bV,w,w,w,w,w,w,w,w,10.5,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)
if(f==null)v=v?C.cl:B.c
else v=f
return A.E(A.q(w,A.w(A.a([s,B.bs,new A.d7(B.dn,B.a5,B.f,A.c(e,w,w,w,w,w,w,A.l(w,w,v,w,w,w,w,w,w,w,w,13.5,w,w,B.C,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w)],x.p),B.B,w,B.e,B.i,0,B.p),B.f,w,w,new A.p(u,w,w,t,w,w,B.m),w,w,w,w,B.iR,w,w,w),1)},
$2(d,e){return this.$3$c(d,e,null)},
$S:2105}
D.ear.prototype={
$1(d){return A.a0(d,x.N,x.z)},
$S:22}
D.eas.prototype={
$1(d){var w,v,u,t,s,r=null,q=this.a,p=this.b,o=x.S,n=A.T(p),m=q.Q?A.cJ(p,0,A.dx(18,"count",o),n.c).de(0):A.cJ(p,0,A.dx(4,"count",o),n.c).de(0),l=new D.eat(this.c)
o=x.p
n=A.a([],o)
for(w=x.N,v=x.z,u=0;u<m.length;u+=2){t=A.a0(m[u],w,v)
t=l.$1(t)
s=u+1
if(s<m.length){s=A.a0(m[s],w,v)
s=l.$1(s)}else s=B.wn
n.push(new A.C(B.ey,new A.c_(B.aJ,B.e,B.i,B.l,r,B.p,r,0,A.a([new A.bu(1,B.b9,t,r),B.b6,new A.bu(1,B.b9,s,r)],o),r),r))}p=p.length
if(p>4)n.push(new A.bJ(B.a5,r,r,A.bK(!1,A.c(q.Q?"Show less":"See more ("+A.v(Math.min(p,18)-4)+")",r,r,r,r,r,r,r,r,r,r),r,r,!0,r,r,r,new D.eaq(q),r,r),r))
return A.w(n,B.B,r,B.e,B.i,0,B.p)},
$S:270}
D.eat.prototype={
$1(d){var w,v,u,t,s,r,q="cost",p=null,o="strike",n="spreadPct"
if(d.h(0,q)!=null&&D.c5(d.h(0,q))<=150)w=C.cI
else w=this.a.a?C.bT:C.bV
w=w.j(0.12)
v=A.n(8)
u=D.c5(d.h(0,o))
u=B.h.a1(u,typeof d.h(0,o)=="number"&&B.h.F(D.c5(d.h(0,o)),1)!==0?2:0)
t=D.aRM(d.h(0,"expiry"))
s=A.ag(", \\d{4}$",!0,!1,!1,!1)
t=A.aD(t,s,"")
s=this.a.a
u=A.c("$"+u+" \xb7 "+t,p,1,B.a2,p,p,p,A.l(p,p,s?C.cl:B.c,p,p,p,p,p,p,p,p,11,p,p,B.C,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)
t=d.h(0,q)==null?"no price":D.eh(D.c5(d.h(0,q)),!0,!1)
r=d.h(0,n)==null||D.c5(d.h(0,n))>=100?"":" \xb7 spread "+B.h.a1(D.c5(d.h(0,n)),0)+"%"
return A.q(p,A.w(A.a([u,A.c(t+r,p,1,B.a2,p,p,p,A.l(p,p,s?C.bT:C.bV,p,p,p,p,p,p,p,p,10.5,p,p,B.O,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)],x.p),B.B,p,B.e,B.i,0,B.p),B.f,p,p,new A.p(w,p,p,v,p,p,B.m),p,p,p,p,B.lF,p,p,p)},
$S:2106}
D.eaq.prototype={
$0(){var w=this.a
return w.l(new D.eap(w))},
$S:0}
D.eap.prototype={
$0(){var w=this.a
return w.Q=!w.Q},
$S:0}
D.eaM.prototype={
$1(d){return A.a0(d,x.N,x.z)},
$S:22}
D.eaN.prototype={
$0(){var w=this.a
return w.l(new D.eaL(w))},
$S:0}
D.eaL.prototype={
$0(){var w=this.a
return w.y=!w.y},
$S:0}
D.eaK.prototype={
$0(){var w,v=this
if(v.d)w=v.e
else{w=v.f
w=A.J(["why",(w.length!==0?w+".\n\n":v.r+". ")+"Bought because: "+v.w],x.N,x.z)}return v.a.cFG(v.b,v.c,w)},
$S:0}
D.eaH.prototype={
$1(d){return A.a0(d,x.N,x.z)},
$S:22}
D.eaJ.prototype={
$1(d){var w
if(d==null)w="?"
else{w=D.c5(d)>=0?"+":""
w=w+B.h.a1(D.c5(d),2)+"%"}return w},
$S:15}
D.eaI.prototype={
$1(a1){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i="strength",h="thresholdPct",g=k.a.a,f=g?B.c.j(0.92):C.id,e=A.c("Why this trade: "+k.b,j,j,j,j,j,j,A.l(j,j,g?C.cl:B.c,j,j,j,j,j,j,j,j,16,j,j,B.C,j,j,!0,j,j,j,j,j,j,j,j),j,j,j),d=k.c,a0=d.h(0,"why")
a0=A.v(a0==null?"":a0)
a0=A.c(a0,j,j,j,j,j,j,A.l(j,j,g?C.cl:B.c,j,j,j,j,j,j,j,j,13,j,j,j,j,1.35,!0,j,j,j,j,j,j,j,j),j,j,j)
w=d.h(0,"market")
w=A.v(w==null?"?":w)
v=D.eh(D.c5(d.h(0,"price")),!0,!1)
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
a0=D.eh(D.c5(a0.h(0,"pnl")),!0,!0)
d.push(A.c("Its record here before: last "+w+": "+v+"W / "+u+"L \xb7 "+a0,j,j,j,j,j,j,A.l(j,j,g?C.bT:C.bV,j,j,j,j,j,j,j,j,12,j,j,j,j,1.35,!0,j,j,j,j,j,j,j,j),j,j,j))}a0=k.f
if(a0.length!==0){w=A.a([B.S,A.c("How the markets ranked:",j,j,j,j,j,j,A.l(j,j,g?C.cl:B.c,j,j,j,j,j,j,j,j,12.5,j,j,B.C,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)],q)
for(a0=A.aoT(a0,0,x.P),v=J.aN(a0.a),a0=a0.b,u=new A.Fh(v,a0);u.B();){s=u.c
s=s>=0?new A.y(a0+s,v.gP(v)):A.bi(A.fd())
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
w.push(A.c(""+(s.a+1)+". "+o+" \xb7 score "+n+" \xb7 "+m+" \xb7 "+r,j,j,j,j,j,j,new A.F(!0,l,j,j,j,j,12,j,j,j,j,j,1.4,j,j,j,j,j,j,j,j,j,j,j,j,j),j,j,j))}B.d.u(d,w)}g=A.cc(A.w(d,B.B,j,B.e,B.P,0,B.p),B.t,j,B.y,j,j,j,j,j,B.ah)
return A.el(A.a([A.bK(!1,B.pA,j,j,!0,j,j,j,new D.eaG(a1),j,j)],q),j,j,f,g,j,j,j,j,e,j)},
$S:17}
D.eaG.prototype={
$0(){return A.a7(this.a,!1).e3()},
$S:0}
D.ea8.prototype={
$0(){var w=this.a
return w.l(new D.ea7(w))},
$S:0}
D.ea7.prototype={
$0(){var w=this.a
return w.z=!w.z},
$S:0}
D.eay.prototype={
$1(d){return A.v(d)},
$S:15}
D.dbF.prototype={
$1(d){var w=this.a
if(w.c!=null)w.l(new D.dbE())},
$S:10}
D.dbE.prototype={
$0(){},
$S:0}
D.fL1.prototype={
$1(d){return J.k(d)},
$S:15}
D.fL2.prototype={
$2(d,e){var w=null,v=e.b,u=A.ao(w,A.q(w,w,B.f,w,w,new A.p(w,w,w,A.n(9),w,C.ccm,B.m),w,6,w,w,w,w,w,w),w,w,0,0,4,w),t=B.h.D(this.a/100*v-7,0,v-14)
return new A.a4(w,14,new A.am(B.a0,w,B.ab,B.f,A.a([u,A.ao(w,A.q(w,w,B.f,w,w,new A.p(B.c,w,A.K(this.b.a?C.cl:B.c,B.r,2.5),w,w,w,B.a6),w,14,w,w,w,w,w,14),w,w,t,w,0,w)],x.p),w),w)},
$S:109}
D.fOM.prototype={
$1(d){return A.a0(d,x.N,x.z)},
$S:22}
D.fjx.prototype={
$1(d){var w=this.a
if(w.c!=null)w.l(new D.fjw())},
$S:10}
D.fjw.prototype={
$0(){},
$S:0}
D.fjv.prototype={
$2(d,e){var w=null,v=B.c.j(0.16),u=A.n(10)
return A.E(A.q(w,A.w(A.a([A.c(d,w,w,w,w,w,w,C.fZE,w,w,w),new A.d7(B.dn,B.a5,B.f,A.c(e,w,w,w,w,w,w,C.fMP,w,w,w),w)],x.p),B.B,w,B.e,B.i,0,B.p),B.f,w,w,new A.p(v,w,w,u,w,w,B.m),w,w,w,w,B.I4,w,w,w),1)},
$S:107}
D.dkE.prototype={
$1(d){var w=this.a
if(w.c!=null)w.l(new D.dkD())},
$S:10}
D.dkD.prototype={
$0(){},
$S:0}
D.fB7.prototype={
$1(d){return J.k(d)},
$S:15}
D.eLp.prototype={
$1(d){return J.k(d)},
$S:15}
D.eMd.prototype={
$0(){return this.a.l(new D.eMc())},
$S:0}
D.eMc.prototype={
$0(){},
$S:0}
D.eMe.prototype={
$0(){return $.hqc=this.a.at.a.a},
$S:0}
D.eMf.prototype={
$1(d){var w=this.a
if(w.c!=null)w.l(new D.eMb(w,d))},
$S:183}
D.eMb.prototype={
$0(){return this.a.Q=this.b},
$S:0}
D.eMg.prototype={
$1(d){this.a.RO()
return null},
$S:10}
D.eM8.prototype={
$1(d){var w=x.N,v=x.z
v=A.dE(A.a0(d,w,v),w,v)
v.n(0,"asset",J.t(d,"symbol"))
return v},
$S:22}
D.eLK.prototype={
$0(){var w,v,u=this,t=u.c
if(J.z(t==null?null:J.t(t,"isAdmin"),!0))u.b.y=!0
w=u.d
if(w==null)w=u.a.a
if(w!=null){t=x.g.a(w.h(0,"done"))
if(t==null)t=A.a([],x.s)
v=x.Y.a(w.h(0,"lessons"))
u.b.x=A.J(["done",t,"lessons",v==null?A.S(x.N,x.z):v],x.N,x.z)}},
$S:0}
D.eLT.prototype={
$0(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m
var $async$$0=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.aB(),$async$$0)
case 7:q=e
w=8
return A.b(q.aB("String","ngmy_signal_grid_academy_v2",B.T.au(r.a.x,null)),$async$$0)
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
return A.b(A.fJ(A.J(["action","paLearnSave","progress",o.x],x.N,x.z),!1,!1,!1,!1,B.he),$async$$0)
case 9:n=e
if(J.z(n==null?null:J.t(n,"allDone"),!0)){$.cop=new A.W(A.fQ(0,0),0,!1)
A.K9()}case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$$0,v)},
$S:1}
D.eLs.prototype={
$1(d){return this.a.gKw().q(0,d.a)},
$S:z+0}
D.eLt.prototype={
$0(){var w,v=this.a,u=x.N,t=A.d8(v.gKw(),u)
t.K(0,this.b)
w=A.B(t,A.a3(t).k("cl.E"))
u=A.dE(v.x,u,x.z)
u.n(0,"done",w)
v.x=u},
$S:0}
D.eLu.prototype={
$1(d){return this.a.gKw().q(0,d.a)},
$S:z+0}
D.eLv.prototype={
$1(d){var w=null
return A.el(A.a([A.bH(C.hj_,w,new D.eLr(this.a,d),w)],x.p),w,w,w,C.hfU,w,w,w,w,C.h3_,w)},
$S:17}
D.eLr.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:A.a7(u.b,!1).N(null)
w=2
return A.b(A.MD(),$async$$0)
case 2:t=e
s=u.a
if(s.c!=null)s.l(new D.eLq(s,t))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
D.eLq.prototype={
$0(){return this.a.Q=this.b},
$S:0}
D.eLS.prototype={
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
if(u==null)u=B.bM
u=J.b8(u,new D.eLR(),x.N)
u=A.B(u,u.$ti.k("aj.E"))
s.dx=u
u=v.h(w,"nowEt")
s.dy=J.k(u==null?"":u)
s.fr=J.z(v.h(w,"stockOpen"),!0)
s.r=new A.W(Date.now(),0,!1)
if(x.f.b(v.h(w,"signals")))s.db=D.dF(v.h(w,"signals"))},
$S:0}
D.eLR.prototype={
$1(d){return J.k(d)},
$S:15}
D.eM5.prototype={
$1(d){return J.z(J.t(d,"open"),!0)&&D.bGo(d).length>5},
$S:4}
D.eM6.prototype={
$2(d,e){return B.h.aQ(D.eL1(d),D.eL1(e))},
$S:39}
D.eLy.prototype={
$1(d){return J.z(J.t(d,"asset"),this.a.h(0,"symbol"))},
$S:4}
D.eLz.prototype={
$0(){return A.S(x.N,x.z)},
$S:150}
D.eLA.prototype={
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
t=D.hOL(d)
s=B.h.a1(D.c5(k.h(d,"changePct")),2)
k=J.z(k.h(d,"open"),!0)?"open":"closed"
r=j.h(0,"bias")
r=A.v(r==null?"unknown":r)
q=B.h.a1(D.c5(j.h(0,"score")),0)
p=j.h(0,"rsi")==null?"n/a":B.h.a1(D.c5(j.h(0,"rsi")),0)
o=j.h(0,"mom1h")==null?"n/a":B.h.a1(D.c5(j.h(0,"mom1h")),2)+"%"
n=j.h(0,"action")
return"- "+v+" ("+u+"): price "+t+", change "+s+"%, "+k+", "+r+", strength "+q+", RSI "+p+", last hour "+o+", reading: "+A.v(n==null?"n/a":n)+w+"."},
$S:53}
D.eLl.prototype={
$0(){$.DL.push(new D.a04(!0,this.b))
$.ahQ=!0},
$S:0}
D.eLm.prototype={
$1(d){return(d.a?"Student":"Tutor")+": "+d.b},
$S:z+6}
D.eLn.prototype={
$1(d){return"- "+A.v(d)},
$S:15}
D.eLo.prototype={
$0(){},
$S:0}
D.eLU.prototype={
$1(d){var w=this.a.ax,v=w.f
if(v.length!==0){v=B.d.gd2(v).Q
v.toString
w.lO(v+200,B.ec,B.f2)}},
$S:7}
D.eM9.prototype={
$0(){return A.Ot(this.a)},
$S:0}
D.eMa.prototype={
$0(){return this.b.gLO().Cr(this.a.a)},
$S:0}
D.eLx.prototype={
$1(d){return this.a.gKw().q(0,d.a)},
$S:z+0}
D.eLw.prototype={
$0(){return this.a.cnK(this.b)},
$S:0}
D.eLQ.prototype={
$1(d){var w=this.b,v=B.d.c9(C.Ex,w),u=this.a,t=u.y,s=w.a,r=u.gKw().q(0,s)
s=x.Y.a(D.dF(u.x.h(0,"lessons")).h(0,s))
if(s==null)s=B.lM
return new D.a18(w,v+1,new D.eLM(u,w),t,r,A.a0(s,x.N,x.z),new D.eLN(u,w),new D.eLO(u,w),new D.eLP(u),null)},
$S:z+7}
D.eLM.prototype={
$0(){var w=this.a,v=w.c
v.toString
return w.c8F(new D.RN(A.Q(v).ax.a===B.dg),this.b.r)},
$S:134}
D.eLN.prototype={
$1(d){var w=this.a
w.l(new D.eLL(w,this.b,d))
w.aE_()},
$S:114}
D.eLL.prototype={
$0(){var w=this.a,v=x.N,u=x.z,t=A.a0(D.dF(w.x.h(0,"lessons")),v,u)
t.n(0,this.b.a,this.c)
u=A.dE(w.x,v,u)
u.n(0,"lessons",t)
w.x=u},
$S:0}
D.eLO.prototype={
$0(){return this.a.af8(this.b.a)},
$S:0}
D.eLP.prototype={
$1(d){var w=this.a,v=w.c
v.toString
A.a7(v,!1).e3()
w.aSk(d)},
$S:2}
D.eLB.prototype={
$2$last$lines(d,e){var w=this.a
return new D.a_Z(B.d.fE(w,Math.max(0,w.length-d)),this.b,null,e,this.c,C.dwj,null)},
$0(){return this.$2$last$lines(36,!0)},
$1$lines(d){return this.$2$last$lines(36,d)},
$S:2107}
D.eLJ.prototype={
$1(d){var w=null
return A.c(d,w,w,w,w,w,w,A.l(w,w,this.a.a?C.cl:B.c,w,w,w,w,w,w,w,w,13,w,w,w,w,1.4,!0,w,w,w,w,w,w,w,w),w,w,w)},
$S:2108}
D.eLC.prototype={
$1(d){var w=J.a1(d)
return J.z(D.dF(w.h(d,"reading")).h(0,"decision"),"ENTER")&&J.z(D.dF(w.h(d,"reading")).h(0,"dir"),"up")},
$S:4}
D.eLD.prototype={
$1(d){return J.t(d,"asset")},
$S:796}
D.eLE.prototype={
$1(d){var w=J.a1(d)
return J.z(D.dF(w.h(d,"reading")).h(0,"decision"),"ENTER")&&J.z(D.dF(w.h(d,"reading")).h(0,"dir"),"down")},
$S:4}
D.eLF.prototype={
$1(d){return J.t(d,"asset")},
$S:796}
D.eLG.prototype={
$1(d){var w=J.a1(d)
return J.z(w.h(d,"open"),!0)&&D.dF(w.h(d,"reading")).h(0,"rsi")!=null},
$S:4}
D.eLH.prototype={
$1(d){return J.z(J.t(d,"open"),!0)},
$S:4}
D.eLI.prototype={
$1(d){var w=D.dF(D.dF(J.t(d,"reading")).h(0,"timing"))
return D.c5(w.h(0,"of"))>=3&&D.c5(w.h(0,"worked"))/D.c5(w.h(0,"of"))>=0.5},
$S:4}
D.eLZ.prototype={
$1(d){var w,v,u,t=this.a
if(t.cx!=="All"&&D.hJB(d)!==t.cx)return!1
t=this.b
if(t.length===0)return!0
w=J.a1(d)
v=A.v(w.h(d,"asset"))
u=A.v(w.h(d,"name"))
w=w.h(d,"asset")
w=J.k(w==null?"":w)
return B.a.q((v+" "+u+" "+A.aD(w,"/","")).toLowerCase(),t)},
$S:4}
D.eM_.prototype={
$2(d,e){var w="activeSignal",v=J.a1(d),u=x.f,t=u.b(v.h(d,w))?0:1,s=J.a1(e),r=u.b(s.h(e,w))?0:1
if(t!==r)return t-r
return B.h.aQ(D.c5(D.dF(s.h(e,"v2")).h(0,"passed")),D.c5(D.dF(v.h(d,"v2")).h(0,"passed")))},
$S:39}
D.eM1.prototype={
$0(){var w=this.a
return w.l(new D.eLY(w,this.b))},
$S:0}
D.eLY.prototype={
$0(){return this.a.cx=this.b},
$S:0}
D.eM0.prototype={
$1(d){return D.hJB(d)===this.a},
$S:4}
D.eM2.prototype={
$0(){var w=this.a
w.l(new D.eLX(w))},
$S:0}
D.eLX.prototype={
$0(){var w=this.a,v=w.CW
w.CW=!v
if(v){w.ch=""
w.cy.bN(0,B.ck)}},
$S:0}
D.eM3.prototype={
$1(d){var w=this.a
return w.l(new D.eLW(w,d))},
$S:2}
D.eLW.prototype={
$0(){return this.a.ch=this.b},
$S:0}
D.eM4.prototype={
$0(){return this.a.aSk("What is happening with "+A.v(J.t(this.b,"asset"))+" right now? Which of the 5 confirmations are missing, and why is the answer BUY, SELL or WAIT?")},
$S:0}
D.eLV.prototype={
$1(d){return A.a0(d,x.N,x.z)},
$S:22}
D.eLh.prototype={
$1(d){return this.a.gKw().q(0,d.a)},
$S:z+0}
D.eLi.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=!u.b?2:4
break
case 2:u.a.gLO().Cr(0)
w=3
break
case 4:w=5
return A.b(A.MD(),$async$$0)
case 5:t=e
s=u.a
if(s.c!=null)s.l(new D.eLg(s,t))
$.cop=new A.W(A.fQ(0,0),0,!1)
A.K9()
case 3:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
D.eLg.prototype={
$0(){return this.a.Q=this.b},
$S:0}
D.eLj.prototype={
$0(){return this.a.Kv(this.b)},
$S:0}
D.eLk.prototype={
$0(){var w=this.a
return w.Kv(w.at.a.a)},
$S:0}
D.dxg.prototype={
$1(d){var w
x.g.a(d)
w=d==null?B.bM:d
w=J.b8(w,new D.dxh(),x.S)
w=A.B(w,w.$ti.k("aj.E"))
return w},
$S:412}
D.dxh.prototype={
$1(d){var w=A.c9(A.v(d),null)
return w==null?0:w},
$S:305}
D.dxe.prototype={
$1(d){var w,v
x.Y.a(d)
w=d==null?B.lM:d
v=x.S
return J.oZ(w,new D.dxf(),v,v)},
$S:2110}
D.dxf.prototype={
$2(d,e){var w,v=A.c9(A.v(d),null)
if(v==null)v=0
w=A.c9(A.v(e),null)
if(w==null)w=0
return new A.bw(v,w,x.a)},
$S:2111}
D.dxc.prototype={
$1(d){var w
if(d>=0){w=this.a.d
w===$&&A.d()
w=d<w.length}else w=!1
return w},
$S:30}
D.dxd.prototype={
$1(d){var w,v=this.a
if(v.c==null)return
w=v.w
w===$&&A.d()
if(w.a!==0)v.l(new D.dxb(v))},
$S:10}
D.dxb.prototype={
$0(){return this.a.cIs()},
$S:0}
D.dx4.prototype={
$2(d,e){return new A.bw(""+d,e,x.W)},
$S:797}
D.dx5.prototype={
$2(d,e){return new A.bw(""+d,e,x.W)},
$S:797}
D.dx6.prototype={
$1(d){var w=this.a,v=w.x
v===$&&A.d()
if(!B.d.q(v,d)){w=w.e
w===$&&A.d()
w=!B.d.q(w,d)}else w=!1
return w},
$S:30}
D.dx7.prototype={
$1(d){var w=this.a,v=w.e
v===$&&A.d()
if(!B.d.q(v,d)){w=w.f
w===$&&A.d()
w=!w.q(0,d)}else w=!1
return w},
$S:30}
D.dx2.prototype={
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
t.n(0,w,new A.W(Date.now(),0,!1).bM(3e8).a)}}},
$S:0}
D.dx8.prototype={
$0(){return A.Ot(this.a)},
$S:0}
D.dx9.prototype={
$0(){return this.a.a.d1F('I just read the lesson "'+this.b.b+'". Can you explain it again with a live example from the markets right now?')},
$S:0}
D.dxa.prototype={
$0(){this.a.a.rD()
A.Ot(this.b)},
$S:0}
D.dx3.prototype={
$0(){return this.a.cie(this.b,this.c)},
$S:0};(function aliases(){var w=D.aQj.prototype
w.bD9=w.t})();(function installTearOffs(){var w=a._instance_0u,v=a._instance_1u
var u
w(u=D.aIe.prototype,"gcnI","cnJ",2)
w(u,"gcBj","a49",1)
w(D.aH9.prototype,"gcih","BL",1)
w(u=D.aIf.prototype,"gcig","RO",1)
v(u,"gcif","Kv",5)})();(function inheritance(){var w=a.mixinHard,v=a.inheritMany,u=a.inherit
v(A.af,[D.auE,D.a_Z,D.P2,D.aBZ,D.aLo,D.aDk,D.Y6,D.a18])
v(A.ai,[D.aIe,D.bfA,D.aH9,D.bgh,D.bwZ,D.bj9,D.aQj,D.bmk])
v(A.hq,[D.eLe,D.eLf,D.eKM,D.eKu,D.eKX,D.eKE,D.eKT,D.eKi,D.eKj,D.eKk,D.eKg,D.eKm,D.eL4,D.eL5,D.eL6,D.eL7,D.eL0,D.eL2,D.eKz,D.eKB,D.eKs,D.eKe,D.eKG,D.eKH,D.eKI,D.eKF,D.eKK,D.eLb,D.fOl,D.cYM,D.cYK,D.cYL,D.cYJ,D.cYN,D.cYP,D.cYR,D.flH,D.fAh,D.fFM,D.fK6,D.fGS,D.fOf,D.eaQ,D.eah,D.eaw,D.eau,D.eaf,D.eag,D.eac,D.ead,D.eae,D.eao,D.eaB,D.eaz,D.eal,D.ea9,D.eaa,D.eaF,D.ear,D.eas,D.eat,D.eaM,D.eaH,D.eaJ,D.eaI,D.eay,D.dbF,D.fL1,D.fOM,D.fjx,D.dkE,D.fB7,D.eLp,D.eMf,D.eMg,D.eM8,D.eLs,D.eLu,D.eLv,D.eLR,D.eM5,D.eLy,D.eLA,D.eLm,D.eLn,D.eLU,D.eLx,D.eLQ,D.eLN,D.eLP,D.eLB,D.eLJ,D.eLC,D.eLD,D.eLE,D.eLF,D.eLG,D.eLH,D.eLI,D.eLZ,D.eM0,D.eM3,D.eLV,D.eLh,D.dxg,D.dxh,D.dxe,D.dxc,D.dxd,D.dx6,D.dx7])
v(A.j0,[D.eKv,D.eKx,D.eKL,D.eKO,D.eKP,D.eKw,D.eKV,D.eKW,D.eKY,D.eKZ,D.eKR,D.eKS,D.eLd,D.eL8,D.eL9,D.eKl,D.eKh,D.eKn,D.eL_,D.eL3,D.eKA,D.eKy,D.eKq,D.eKp,D.eKr,D.eKo,D.eKf,D.eKt,D.eLc,D.eLa,D.eKc,D.eKb,D.cYF,D.cYI,D.cYH,D.cYG,D.eai,D.eax,D.eaD,D.eaE,D.eaO,D.eaP,D.eab,D.eaC,D.eaA,D.eak,D.eaj,D.eaq,D.eap,D.eaN,D.eaL,D.eaK,D.eaG,D.ea8,D.ea7,D.dbE,D.fjw,D.dkD,D.eMd,D.eMc,D.eMe,D.eMb,D.eLK,D.eLT,D.eLt,D.eLr,D.eLq,D.eLS,D.eLz,D.eLl,D.eLo,D.eM9,D.eMa,D.eLw,D.eLM,D.eLL,D.eLO,D.eM1,D.eLY,D.eM2,D.eLX,D.eLW,D.eM4,D.eLi,D.eLg,D.eLj,D.eLk,D.dxb,D.dx2,D.dx8,D.dx9,D.dxa,D.dx3])
v(A.j1,[D.eKQ,D.eKU,D.eKD,D.eKC,D.eKJ,D.eKN,D.eKd,D.cYO,D.cYQ,D.eav,D.ean,D.eam,D.fL2,D.fjv,D.eM6,D.eM_,D.dxf,D.dx4,D.dx5])
v(A.aH,[D.Rh,D.zc,D.RN,D.cI,D.uF,D.a04])
v(A.lQ,[D.bfB,D.bxD])
u(D.aIf,D.aQj)
w(D.aQj,A.cm)})()
A.jj(b.typeUniverse,JSON.parse('{"auE":{"af":[],"x":[]},"a_Z":{"af":[],"x":[]},"aBZ":{"af":[],"x":[]},"aLo":{"af":[],"x":[]},"aDk":{"af":[],"x":[]},"Y6":{"af":[],"x":[]},"a18":{"af":[],"x":[]},"aIe":{"ai":["auE"]},"bfA":{"ai":["a_Z"]},"bfB":{"aC":[]},"bxD":{"aC":[]},"P2":{"af":[],"x":[]},"aH9":{"ai":["P2"]},"bgh":{"ai":["aBZ"]},"bwZ":{"ai":["aLo"]},"bj9":{"ai":["aDk"]},"aIf":{"ai":["Y6"]},"bmk":{"ai":["a18"]}}'))
var y={g:". Look over the trades, then press Start to turn it back on.",b:"The chart appears after the first reading."}
var x=(function rtii(){var w=A.as
return{c:w("ld<u?>"),D:w("EP"),V:w("N<ac>"),O:w("N<u>"),o:w("N<az<a9<o,@>?>>"),R:w("N<mN>"),t:w("N<a9<o,@>>"),v:w("N<h_>"),L:w("N<+(o,o)>"),T:w("N<+(G,Rh)>"),s:w("N<o>"),p:w("N<x>"),n:w("N<Rh>"),r:w("N<cI>"),u:w("N<H>"),X:w("N<G>"),w:w("N<W?>"),W:w("bw<o,G>"),a:w("bw<G,G>"),P:w("a9<o,@>"),f:w("a9<@,@>"),b:w("cr"),K:w("aH"),N:w("o"),E:w("X<uF>"),q:w("l5"),y:w("P"),z:w("@"),S:w("G"),i:w("ah<a9<o,@>>?"),g:w("ah<@>?"),h:w("a9<o,@>?"),Y:w("a9<@,@>?"),H:w("~")}})();(function constants(){var w=a.makeConstList
C.cI=new A.u(1,0.12156862745098039,0.7490196078431373,0.592156862745098,B.q)
C.b6R=new A.ld(C.cI,x.c)
C.id=new A.u(1,0.08627450980392157,0.10588235294117647,0.1803921568627451,B.q)
C.bT=new A.u(1,0.5411764705882353,0.5607843137254902,0.6392156862745098,B.q)
C.tc=new A.u(1,0.0392156862745098,0.050980392156862744,0.09411764705882353,B.q)
C.te=new A.u(1,0.9294117647058824,0.9372549019607843,0.9803921568627451,B.q)
C.bV=new A.u(1,0.5529411764705883,0.5843137254901961,0.6705882352941176,B.q)
C.n7=new A.u(1,0.08627450980392157,0.09019607843137255,0.11372549019607843,B.q)
C.oO=new A.u(1,0.14901960784313725,0.17647058823529413,0.27058823529411763,B.q)
C.oT=new A.u(1,0.9058823529411765,0.9098039215686274,0.9411764705882353,B.q)
C.Oe=new A.u(1,0.06666666666666667,0.08235294117647059,0.1607843137254902,B.q)
C.Oi=new A.u(1,0.12549019607843137,0.14901960784313725,0.23137254901960785,B.q)
C.Om=new A.u(1,0.9725490196078431,0.9450980392156862,0.9490196078431372,B.q)
C.nf=new A.u(1,0.13725490196078433,0.16470588235294117,0.25882352941176473,B.q)
C.Ot=new A.u(1,0.9372549019607843,0.9411764705882353,0.9607843137254902,B.q)
C.cl=new A.u(1,0.07058823529411765,0.0784313725490196,0.10980392156862745,B.q)
C.d6=new A.u(1,0.9411764705882353,0.33725490196078434,0.41568627450980394,B.q)
C.r6=new A.u(1,0.9568627450980393,0.9607843137254902,0.9803921568627451,B.q)
C.r7=new A.u(1,0.11372549019607843,0.13725490196078433,0.2196078431372549,B.q)
C.bG5=new A.R(0,0,0,7)
C.bGe=new A.R(0,10,0,4)
C.bGw=new A.R(0,4,0,12)
C.bHJ=new A.R(12,8,12,6)
C.bHS=new A.R(13,7,13,7)
C.aoX=new A.R(16,4,16,40)
C.bJ5=new A.R(16,6,16,16)
C.bJc=new A.R(16,8,16,40)
C.bLV=new A.R(4,0,4,10)
C.apM=new A.R(4,0,4,8)
C.bX2=new A.a_(983124,"MaterialIcons",!1)
C.bXr=new A.a_(983325,"MaterialIcons",!1)
C.ate=new A.a_(983372,"MaterialIcons",!1)
C.bZ5=new A.ae(C.ate,18,C.cI,null,null,null)
C.bZx=new A.ae(B.vC,16,null,null,null,null)
C.c1E=new A.ae(B.np,7,C.cI,null,null,null)
C.c2k=new A.ae(B.e9,18,C.cI,null,null,null)
C.c2A=new A.ae(B.rA,20,B.c,null,null,null)
C.c4Q=new A.ae(B.vC,18,null,null,null,null)
C.c6W=new A.ae(B.IO,18,null,null,null,null)
C.c7_=new A.ae(B.xw,null,C.d6,null,null,null)
C.c78=new A.ae(B.ks,18,C.cI,null,null,null)
C.c8m=new A.ae(B.It,18,C.d6,null,null,null)
C.cPM=w([B.dD,B.fy,B.i2],x.O)
C.avV=new A.a6(B.aw,B.aD,B.w,C.cPM,null,null)
C.aDM=w([C.d6,B.as,C.cI],x.O)
C.ccm=new A.a6(B.a5,B.a9,B.w,C.aDM,null,null)
C.ccW=new A.a6(B.a5,B.a9,B.w,C.aDM,B.mc,null)
C.dtj=w([B.dD,B.i2,B.bE],x.O)
C.cg0=new A.a6(B.aw,B.aD,B.w,C.dtj,null,null)
C.cpT=w([12,24,48],x.X)
C.d8d=w(["All","Forex","Stocks","Crypto"],x.s)
C.deD=w(["Which market looks strongest right now?","Is Bitcoin going up or down right now?","Why has the agent not bought yet?","Explain RSI like I am new","How do I know when to sell?","What does bullish and bearish mean?"],x.s)
C.ffh=new A.y("The idea","Trading means buying something and selling it later. You make money when you sell for more than you paid, and you lose money when you sell for less. That is all a trade is.")
C.f6R=new A.y("Why prices move","Every price is set by buyers and sellers. When more people want to buy than sell, the price goes up. When more want to sell, it goes down. A chart is simply a picture of that tug of war over time.")
C.f7O=new A.y("Nobody knows the future","No person, app or AI can know for sure where a price goes next. Good traders do not guess. They follow clear rules, keep losses small, and let the winners pay for the losers.")
C.f6b=new A.y("Why practise first","This agent uses Alpaca paper money: real prices, fake dollars. You can learn every step, make mistakes and see real results without risking a cent. Professionals practise this way too.")
C.daH=w([C.ffh,C.f6R,C.f7O,C.f6b],x.L)
C.dcQ=w(["When you buy","When you sell for more than you paid","When the market opens"],x.s)
C.b4Q=new D.cI("When do you make money on a trade?",C.dcQ,1,"Profit only exists after you sell higher than you bought.")
C.d72=w(["More buyers than sellers","The app","The time of day"],x.s)
C.b4L=new D.cI("What makes a price go up?",C.d72,0,"More people wanting to buy pushes the price up.")
C.dBC=w([C.b4Q,C.b4L],x.r)
C.hVZ=new D.uF("basics","What trading really is","Buyers, sellers and why prices move",4,P.lf,B.as,"basics",C.daH,C.dBC)
C.bY5=new A.a_(983780,"MaterialIcons",!1)
C.eYv=new A.y("One candle = one time slice","On this chart every candle is 5 minutes. It shows four prices: where it started (open), where it ended (close), the highest point (high) and the lowest point (low).")
C.f5b=new A.y("The colours","Green candle: the price closed HIGHER than it opened, buyers won those 5 minutes. Yellow candle: it closed LOWER, sellers won. Many apps use red instead of yellow, it means the same thing.")
C.fgv=new A.y("Body and wicks","The thick part (the body) runs from open to close. The thin lines (the wicks) show how far the price went up or down before coming back. A long wick on top means buyers pushed up but sellers pushed it back down.")
C.fdw=new A.y("Reading a row of candles","Several green candles in a row, each closing higher, show buyers in control. Many yellow ones closing lower show sellers in control. Candles that go up and down with no direction mean the market is undecided.")
C.cht=w([C.eYv,C.f5b,C.fgv,C.fdw],x.L)
C.dcX=w(["It closed higher than it opened","It is a good time to buy","The market is closed"],x.s)
C.b4O=new D.cI("A green candle means...",C.dcX,0,"Colour only tells you if it closed above or below where it opened.")
C.cIr=w(["1 day","5 minutes","1 hour"],x.s)
C.b4D=new D.cI("On this chart one candle covers...",C.cIr,1,"The agent works with 5-minute candles.")
C.djw=w([C.b4O,C.b4D],x.r)
C.hW0=new D.uF("candles","Reading candles","Open, close, high and low in one shape",5,C.bY5,C.cI,"candles",C.cht,C.djw)
C.f8V=new A.y("Bullish","An uptrend. The price makes higher highs and higher lows, like climbing stairs. Buyers are in control. Traders call this bullish (a bull attacks upward with its horns).")
C.fhq=new A.y("Bearish","A downtrend. Lower highs and lower lows, like walking down stairs. Sellers are in control. This is bearish (a bear swipes downward).")
C.eZN=new A.y("Sideways","The price bounces between a ceiling and a floor with no clear direction. Most trading signals fail here, so the best move is often to wait.")
C.fbF=new A.y("The golden rule","Trade WITH the trend, not against it. Buying in a downtrend because it looks cheap is how most beginners lose. The agent only buys when the trend turns up.")
C.daX=w([C.f8V,C.fhq,C.eZN,C.fbF],x.L)
C.d8X=w(["Bearish","Bullish","Sideways"],x.s)
C.b4P=new D.cI("Higher highs and higher lows means...",C.d8X,1,"Climbing stairs = uptrend = bullish.")
C.dd7=w(["Work best","Often fail","Are always right"],x.s)
C.b4I=new D.cI("In a sideways market, signals...",C.dd7,1,"With no direction, signals flip back and forth.")
C.dC8=w([C.b4P,C.b4I],x.r)
C.hVU=new D.uF("trend","Trends: up, down, sideways","Bullish, bearish and how to tell",5,B.mH,B.cj,"trend",C.daX,C.dC8)
C.fis=new A.y("What an average line is","A moving average is the average closing price of the last few candles, drawn as a smooth line. It hides the small wiggles so you can see the real direction.")
C.eXF=new A.y("Fast line (pink)","The average of the last 9 candles, about 45 minutes. It reacts quickly to new moves.")
C.eZh=new A.y("Slow line (purple)","The average of the last 21 candles, about 1 hour 45 minutes. It moves slowly and shows the bigger direction.")
C.f9W=new A.y("How to read them","Fast line ABOVE slow line: recent prices are higher than older ones, the trend is up. Fast line BELOW: the trend is down. When the price itself is above both lines, buyers are strong.")
C.dvg=w([C.fis,C.eXF,C.eZh,C.f9W],x.L)
C.dLg=w(["45 minutes","1 day","1 week"],x.s)
C.b4R=new D.cI("The pink fast line averages about...",C.dLg,0,"9 candles x 5 minutes = 45 minutes.")
C.dGL=w(["Trend is up","Trend is down","Market closed"],x.s)
C.b4K=new D.cI("Fast line above slow line means...",C.dGL,0,"Recent prices are higher than older prices.")
C.dqV=w([C.b4R,C.b4K],x.r)
C.hVV=new D.uF("ma","Moving averages","The pink fast line and the purple slow line",6,B.xB,B.bE,"ma",C.dvg,C.dqV)
C.feE=new A.y("Buy signal","When the fast line crosses UP through the slow line, the short-term trend has just turned up. That moment is the buy signal. The agent buys at that point ($100 of the stock or coin), but only if the big trend is rising too. It watches the 10 stocks on weekdays and the 15 liquid crypto majors around the clock, all at the same time, and buys whichever gives a valid entry first.")
C.f7_=new A.y("Sell signal","When the fast line crosses back DOWN through the slow line, the up move is over. That is the sell signal, and the agent closes the trade.")
C.fbQ=new A.y("Why it must be fresh","If the cross happened an hour ago, the easy part of the move may be gone. Buying late means buying high. So the agent only acts on a cross that happened since its last check, never on an old one.")
C.fdP=new A.y("The weakness","In sideways markets the lines cross back and forth and give false signals. That is why every trade also has a stop loss: when a signal is wrong, the loss stays small.")
C.dmc=w([C.feE,C.f7_,C.fbQ,C.fdP],x.L)
C.dxA=w(["Crosses above the slow line","Crosses below the slow line","Is flat"],x.s)
C.b4J=new D.cI("The buy signal is when the fast line...",C.dxA,0,"Crossing up = trend turning up.")
C.dKa=w(["To avoid buying late","The app is slow","Old crosses are illegal"],x.s)
C.b4B=new D.cI("Why does the agent skip old crosses?",C.dKa,0,"A late entry means buying after most of the move.")
C.d79=w([C.b4J,C.b4B],x.r)
C.hVS=new D.uF("cross","The crossover signal","Exactly when the agent buys and sells",6,B.ask,B.b1,"cross",C.dmc,C.d79)
C.bXB=new A.a_(983477,"MaterialIcons",!1)
C.fbo=new A.y("What RSI measures","RSI (Relative Strength Index) compares the size of recent rises with recent falls and gives a number from 0 to 100. Above 50, rises have been bigger. Below 50, falls have been bigger.")
C.f0v=new A.y("Above 70: stretched","The price rose very fast. It is called overbought. It often pauses or pulls back, so buying right then is risky. It can still keep rising in a strong trend.")
C.fbv=new A.y("Below 30: oversold","The price fell very fast. It often bounces, but in a strong downtrend it can stay low. Oversold is not a reason to buy on its own.")
C.faE=new A.y("How to use it","Use RSI as a second opinion. A buy signal with RSI between 50 and 70 is healthy. A buy signal with RSI above 75 means the move may already be tired.")
C.d7y=w([C.fbo,C.f0v,C.fbv,C.faE],x.L)
C.djn=w(["Oversold","Overbought","Neutral"],x.s)
C.b4A=new D.cI("RSI above 70 is called...",C.djn,1,"It rose fast and is stretched.")
C.b4N=new D.cI("RSI below 30 always means buy.",M.TL,1,"Falling markets can stay oversold. It is a hint, not a signal.")
C.dL8=w([C.b4A,C.b4N],x.r)
C.hW_=new D.uF("rsi","RSI: momentum","Is the move strong, stretched or tired?",5,C.bXB,B.cJ,"rsi",C.d7y,C.dL8)
C.f1W=new A.y("Decide the exit before you enter","Every agent trade has two exits set before it starts, in dollars: take profit when the trade is up $50, stop loss when it is down $50.")
C.f55=new A.y("Win the same as you risk","The win (+$50) is the same size as the loss (-$50). So every win cancels one loss: winning 5 out of 10 trades breaks even. More than 5 out of 10 is profit, fewer is a loss. The win rate on the agent screen shows which side it is on.")
C.eSB=new A.y("Size matters most","The agent uses $100 per trade even though the paper account has $100,000. Small trades mean no single mistake can hurt much. Pros rarely risk more than 1 to 2 percent of their money on one trade.")
C.f8f=new A.y("Never move the stop","The biggest beginner mistake is hoping a losing trade comes back and moving the stop lower. Small losses are the cost of doing business. Big losses end accounts.")
C.dF8=w([C.f1W,C.f55,C.eSB,C.f8f],x.L)
C.cus=w(["5 in 10 trades","9 in 10 trades","Every trade"],x.s)
C.b4G=new D.cI("With +$50 wins and -$50 losses, to break even you must win about...",C.cus,0,"Each win (+50) cancels one loss (-50).")
C.dhP=w(["Move the stop lower","Let the stop loss work","Buy more"],x.s)
C.b4E=new D.cI("A trade is losing. The best move is...",C.dhP,1,"The stop exists to keep losses small.")
C.dnH=w([C.b4G,C.b4E],x.r)
C.hVT=new D.uF("risk","Risk: stop loss and take profit","Why small losses beat big wins",7,B.rB,C.d6,"risk",C.dF8,C.dnH)
C.bYb=new A.a_(983848,"MaterialIcons",!1)
C.f16=new A.y("Bad days happen","Some days every signal fails. The danger is trying to win it back by trading more and bigger. That is called revenge trading and it is how small losses become big ones.")
C.f7k=new A.y("Daily stop: $50","If the day loses $50, the agent makes no more buys until tomorrow. It walks away and lets the market calm down.")
C.fev=new A.y("Total brake: $100","If total losses reach $100, the agent pauses completely until you review what happened and turn it back on. Reviewing is the most important part of learning.")
C.f_u=new A.y("Your own rules","When you trade yourself, set the same kind of limits before the day starts, and keep them even when it hurts.")
C.djP=w([C.f16,C.f7k,C.fev,C.f_u],x.L)
C.dmC=w(["Doubles the next trade","Stops buying for the day","Sells everything forever"],x.s)
C.b4F=new D.cI("After losing $50 in a day, the agent...",C.dmC,1,"The daily stop prevents revenge trading.")
C.djx=w([C.b4F],x.r)
C.hVW=new D.uF("brakes","Daily stop and total brake","Protecting your account from bad days",4,C.bYb,E.i1,"brakes",C.djP,C.djx)
C.ajR=new A.u(1,0.3843137254901961,0.49411764705882355,0.9176470588235294,B.q)
C.f63=new A.y("Stocks and funds","SPY, QQQ, Apple, Microsoft, Nvidia, Tesla and Amazon trade on US market days from 9:30 AM to 4:00 PM Eastern Time. Closed at night, on weekends and on holidays.")
C.f6X=new A.y("Overnight gaps","News can come out while the stock market is closed, so the next morning it can open far higher or lower. That is why the agent sells stocks by 3:55 PM and never holds them overnight.")
C.f40=new A.y("Crypto","Bitcoin, Ethereum and Solana trade all day, every day, including weekends. More hours means more chances, but crypto also moves faster and harder, so stops get hit more often.")
C.fdh=new A.y("Funds vs single companies","SPY holds the 500 biggest US companies and QQQ holds 100 big tech companies, so they move more calmly. One company like Tesla can jump a lot on its own news.")
C.cVd=w([C.f63,C.f6X,C.f40,C.fdh],x.L)
C.daW=w(["Only weekdays","All day, every day","Only at night"],x.s)
C.b4M=new D.cI("When can Bitcoin be traded?",C.daW,1,"Crypto never closes.")
C.d7N=w(["To avoid overnight gaps","Stocks expire","It is the law"],x.s)
C.b4C=new D.cI("Why sell stocks before the close?",C.d7N,0,"Overnight news can make the price jump at the open.")
C.drY=w([C.b4M,C.b4C],x.r)
C.hVY=new D.uF("hours","Stocks vs crypto","Market hours, weekends and jumpiness",5,B.k0,C.ajR,"hours",C.cVd,C.drY)
C.fbR=new A.y("Judge many trades, not one","One trade tells you nothing. Luck decides single trades. After 20 to 50 trades you start to see if a method really works. That is why the plan is 2 to 4 weeks of paper trading.")
C.f0g=new A.y("Keep a journal","For each trade write: why you bought, where your stop and target were, what happened, and what you learned. The Trades list on the main screen is the agent's journal.")
C.eXy=new A.y("Follow the rules exactly","The point of the agent is to follow rules perfectly, with no fear and no greed. Check that it did. If it ever breaks a rule, that is a bug to fix before real money.")
C.f41=new A.y("Before real money","Real money comes only after a long paper test with a positive result, a full review, and money you can truly afford to lose. Never borrow to trade.")
C.dAt=w([C.fbR,C.f0g,C.eXy,C.f41],x.L)
C.dHG=w(["1","3","20 or more"],x.s)
C.b4z=new D.cI("How many trades before judging a method?",C.dHG,2,"Small samples are mostly luck.")
C.dKG=w(["Borrowed","Money you can afford to lose","Rent money"],x.s)
C.b4H=new D.cI("Money for trading should be...",C.dKG,1,"Never trade money you need.")
C.dL3=w([C.b4z,C.b4H],x.r)
C.hVX=new D.uF("practice","Practising like a pro","Journals, patience and judging results",5,B.m7,B.bh,"practice",C.dAt,C.dL3)
C.Ex=w([C.hVZ,C.hW0,C.hVU,C.hVV,C.hVS,C.hW_,C.hVT,C.hVW,C.hVY,C.hVX],A.as("N<uF>"))
C.dwj=w([],x.n)
C.eBk={basics:0,candles:1,trend:2,ma:3,cross:4,rsi:5,risk:6,brakes:7,hours:8,practice:9}
C.ddL=w(["A $4 profit","A $4 loss","Nothing"],x.s)
C.hZY=new D.cI("You buy at $100 and sell at $96. What happened?",C.ddL,1,"Selling lower than you bought is a loss.")
C.dxy=w(["The future price","How the price moved over time","Who is buying"],x.s)
C.hZW=new D.cI("What does a price chart show?",C.dxy,1,"A chart is a record of past prices.")
C.dJm=w(["Yes, experts can","Yes, an AI can","No, nobody can"],x.s)
C.i_3=new D.cI("Can anyone know for sure where a price goes next?",C.dJm,2,"Markets are uncertain; rules and stops manage that.")
C.dI4=w(["Trading with real prices and practice money","Trading newspapers","Trading on paper forms"],x.s)
C.i0L=new D.cI("What is paper trading?",C.dI4,0,"Real prices, fake dollars: practice without risk.")
C.dvO=w(["It is faster","To learn without risking real money","Practice money earns more"],x.s)
C.i0G=new D.cI("Why practise first?",C.dvO,1,"Mistakes cost nothing while you learn.")
C.cum=w(["Rise","Fall","Stay frozen"],x.s)
C.i_4=new D.cI("More people want to sell than buy. The price will most likely...",C.cum,1,"Selling pressure pushes prices down.")
C.dj9=w(["Clear rules and small losses","Lucky guesses","Tips from friends"],x.s)
C.i0y=new D.cI("Good traders mostly rely on...",C.dj9,0,"Rules and risk control beat guessing.")
C.cgv=w(["$45","$55","$60"],x.s)
C.i0_=new D.cI("You buy $50 of something and it rises 10%. It is now worth...",C.cgv,1,"10% of $50 is $5, so $55.")
C.cZZ=w(["Buy","Sell","Look at the chart"],x.s)
C.i_l=new D.cI("A trade is only finished when you...",C.cZZ,1,"Until you sell, a gain or loss is not locked in.")
C.dIz=w(["Good traders never lose","Every trader has losing trades","Losses only happen to beginners"],x.s)
C.i_g=new D.cI("Which is true about losses?",C.dIz,1,"Losing trades are normal; keeping them small is the skill.")
C.cSN=w(["Real dollars are spent","No real money is at risk","It trades in secret"],x.s)
C.i07=new D.cI("The agent uses Alpaca paper money. That means...",C.cSN,1,"Paper accounts use fake dollars.")
C.dt1=w(["The government","Buyers and sellers agreeing","The app makers"],x.s)
C.hZV=new D.cI("A price is set by...",C.dt1,1,"Each trade is a buyer and seller agreeing on a price.")
C.dEa=w([C.b4Q,C.b4L,C.hZY,C.hZW,C.i_3,C.i0L,C.i0G,C.i_4,C.i0y,C.i0_,C.i_l,C.i_g,C.i07,C.hZV],x.r)
C.dcA=w(["It closed lower than it opened","It closed higher","Nothing traded"],x.s)
C.i0i=new D.cI("A yellow (or red) candle means...",C.dcA,0,"Sellers won that time slice.")
C.dh1=w(["Wick","Body","Tail light"],x.s)
C.i_5=new D.cI("The thick part of a candle is called the...",C.dh1,1,"The body runs from open to close.")
C.dpU=w(["Wicks","Bodies","Averages"],x.s)
C.i_O=new D.cI("The thin lines above and below are the...",C.dpU,0,"Wicks show the high and the low.")
C.dgs=w(["Open","Close","Highest price"],x.s)
C.i09=new D.cI("The top of the upper wick shows the...",C.dgs,2,"The tip of the upper wick is the high.")
C.dLv=w(["Lowest price","Open","Average"],x.s)
C.i0r=new D.cI("The bottom of the lower wick shows the...",C.dLv,0,"The tip of the lower wick is the low.")
C.djj=w(["One","Two","Four"],x.s)
C.i00=new D.cI("How many prices does one candle show?",C.djj,2,"Open, high, low and close.")
C.dv0=w(["Buyers pushed up but sellers pushed it back down","The price never moved","The market closed early"],x.s)
C.i02=new D.cI("A long upper wick means...",C.dv0,0,"The price went high, then fell back before the close.")
C.d7i=w(["Sellers in control","Buyers in control","No direction"],x.s)
C.i_K=new D.cI("Many green candles in a row, each closing higher, show...",C.d7i,1,"Rising closes mean buyers are winning.")
C.d6Z=w(["A strong uptrend","The market is undecided","A crash"],x.s)
C.i0g=new D.cI("Candles going up and down with no direction mean...",C.d6Z,1,"Mixed candles show indecision.")
C.dcZ=w(["Green","Yellow","Grey"],x.s)
C.i_Z=new D.cI("A candle opened at 10 and closed at 12. Its colour here is...",C.dcZ,0,"It closed above the open.")
C.dM9=w(["5 candles","12 candles","60 candles"],x.s)
C.i_7=new D.cI("In 1 hour of 5-minute candles there are...",C.dM9,1,"60 minutes divided by 5 is 12.")
C.dtH=w(["The first price in that time","The last price in that time","The highest price"],x.s)
C.i0A=new D.cI('The "close" of a candle is...',C.dtH,1,"Close is where the price ended.")
C.dB1=w([C.b4O,C.b4D,C.i0i,C.i_5,C.i_O,C.i09,C.i0r,C.i00,C.i02,C.i_K,C.i0g,C.i_Z,C.i_7,C.i0A],x.r)
C.d9c=w(["Bullish","Bearish","Sideways"],x.s)
C.i0b=new D.cI("Lower highs and lower lows means...",C.d9c,1,"Walking down stairs = downtrend = bearish.")
C.dpk=w(["Rise","Fall","Stay the same"],x.s)
C.i0F=new D.cI('"Bullish" means you expect prices to...',C.dpk,0,"A bull attacks upward.")
C.dlH=w(["Rise","Fall","Double"],x.s)
C.i0D=new D.cI('"Bearish" means you expect prices to...',C.dlH,1,"A bear swipes downward.")
C.dpu=w(["Trade against the trend","Trade with the trend","Ignore the trend"],x.s)
C.i_S=new D.cI("The golden rule of trends is...",C.dpu,1,"Going with the trend wins more often.")
C.daK=w(["A safe plan","A common beginner mistake","What the agent does"],x.s)
C.i0l=new D.cI("Buying in a downtrend because it looks cheap is...",C.daK,1,"Cheap can get cheaper.")
C.dma=w(["Sideways","Bullish","Bearish"],x.s)
C.i_p=new D.cI("A price bouncing between a ceiling and a floor is...",C.dma,0,"No higher highs or lower lows: sideways.")
C.dEo=w(["Trade a lot","Wait","Borrow money"],x.s)
C.i_C=new D.cI("In a sideways market the best move is often to...",C.dEo,1,"Patience avoids false signals.")
C.do5=w(["Up","Down","Flat"],x.s)
C.i_F=new D.cI("When sellers are in control, the trend is...",C.do5,1,"Sellers push prices down.")
C.do2=w(["Stairs going up","Stairs going down","A flat road"],x.s)
C.hZX=new D.cI("Which picture fits an uptrend?",C.do2,0,"Each step a bit higher.")
C.dE8=w(["Turns down","Turns up","Is sideways"],x.s)
C.i_X=new D.cI("The agent only buys when the trend...",C.dE8,1,"It buys the start of up moves.")
C.dCr=w(["Getting lower","Getting higher","Gone"],x.s)
C.i_b=new D.cI("A trend changes from bearish to bullish. Lows are now...",C.dCr,1,"Higher lows are the first sign of an uptrend.")
C.dtq=w(["Strong uptrend","Strong downtrend","Sideways"],x.s)
C.i05=new D.cI("Most trading signals fail in which market?",C.dtq,2,"Without direction, signals flip constantly.")
C.daI=w([C.b4P,C.b4I,C.i0b,C.i0F,C.i0D,C.i_S,C.i0l,C.i_p,C.i_C,C.i_F,C.hZX,C.i_X,C.i_b,C.i05],x.r)
C.dj8=w(["The average closing price of recent candles","The highest price ever","A news feed"],x.s)
C.i0s=new D.cI("A moving average is...",C.dj8,0,"It smooths prices into a line.")
C.dJZ=w(["To hide small wiggles and show direction","To predict news","To make charts colourful"],x.s)
C.i0u=new D.cI("Why use a moving average?",C.dJZ,0,"It filters noise.")
C.dfu=w(["9","21","100"],x.s)
C.i_P=new D.cI("The purple slow line averages how many candles?",C.dfu,1,"21 candles, about 1 hour 45 minutes.")
C.dtM=w(["The fast (pink) line","The slow (purple) line","Both the same"],x.s)
C.i_R=new D.cI("Which line reacts faster to new moves?",C.dtM,0,"Fewer candles means quicker reaction.")
C.dKf=w(["Trend is up","Trend is down","Buy now"],x.s)
C.i_D=new D.cI("Fast line below slow line means...",C.dKf,1,"Recent prices are lower than older ones.")
C.dbk=w(["Buyers are strong","Sellers are strong","Nothing"],x.s)
C.i__=new D.cI("The price is above both lines. That shows...",C.dbk,0,"Price above its averages = strength.")
C.d77=w(["The bigger direction","Only the last candle","Tomorrow price"],x.s)
C.i0a=new D.cI("The slow line shows...",C.d77,0,"It changes slowly and shows the wider trend.")
C.d3q=w(["15 minutes","1 hour 45 minutes","1 week"],x.s)
C.i_f=new D.cI("The slow line covers about...",C.d3q,1,"21 x 5 minutes = 105 minutes.")
C.cq2=w(["Past prices","Future prices","Opinions"],x.s)
C.i0h=new D.cI("Moving averages are based on...",C.cq2,0,"They average prices that already happened.")
C.d7w=w(["Lag behind the price","Lead the price","Never move"],x.s)
C.i0v=new D.cI("Because they use past prices, moving averages...",C.d7w,0,"Averages are always a little late.")
C.dsF=w(["A bullish picture","A bearish picture","A closed market"],x.s)
C.i_E=new D.cI("Both lines pointing up and the price above them is...",C.dsF,0,"Everything points up.")
C.dhO=w(["Trending strongly","Sideways","Crashing"],x.s)
C.i0E=new D.cI("When the two lines are tangled together, the market is often...",C.dhO,1,"Tangled lines mean no clear direction.")
C.dDT=w([C.b4R,C.b4K,C.i0s,C.i0u,C.i_P,C.i_R,C.i_D,C.i__,C.i0a,C.i_f,C.i0h,C.i0v,C.i_E,C.i0E],x.r)
C.dj6=w(["Crosses below the slow line","Crosses above the slow line","Touches the price"],x.s)
C.hZU=new D.cI("The sell signal is when the fast line...",C.dj6,0,"Crossing down = the up move is over.")
C.dJj=w(["About $100","$5,000","All the money"],x.s)
C.i0M=new D.cI("How much does the agent put into one trade?",C.dJj,0,"Every trade is $100 of the stock (weekdays) or coin (weekends) itself.")
C.dDM=w(["A fresh signal","An old signal","Not a signal at all ever"],x.s)
C.i0m=new D.cI("A cross that happened an hour ago is...",C.dDM,1,"Fresh means since the last check.")
C.cuw=w(["Sideways markets","Strong trends","Closed markets"],x.s)
C.i0q=new D.cI("Crossovers give many false signals in...",C.cuw,0,"Lines cross back and forth with no direction.")
C.drN=w(["The stop loss","Buying more","Ignoring it"],x.s)
C.i_e=new D.cI("What protects you when a signal is wrong?",C.drN,0,"The stop keeps the loss small.")
C.dls=w(["Just changed direction","Ended forever","Doubled"],x.s)
C.i0B=new D.cI("The crossover tells you the short-term trend has...",C.dls,0,"A cross marks a turn.")
C.d4p=w(["1 second","5 minutes","1 day"],x.s)
C.i0t=new D.cI("The agent checks every market on the list every...",C.d4p,1,"The automatic check runs every 5 minutes and looks at all of the day markets at once.")
C.d8A=w(["Buying higher, with less room to rise","A guaranteed win","A cheaper price"],x.s)
C.i_8=new D.cI("Buying late in a move usually means...",C.d8A,0,"Most of the move is already gone.")
C.dx3=w(["Trust it more","Trust it less","Bet bigger"],x.s)
C.i0k=new D.cI("If a signal fails often on one market, you should...",C.dx3,1,"Check how often it worked before trusting it.")
C.d8u=w(["Buys more","Sells","Waits a week"],x.s)
C.i01=new D.cI("When the agent holds a trade and the fast line crosses down, it...",C.d8u,1,"The sell signal closes the trade.")
C.cPH=w(["Yes","No","Only on Fridays"],x.s)
C.i_H=new D.cI("Does a buy signal guarantee the price will rise?",C.cPH,1,"Signals improve the odds; they never guarantee.")
C.dcc=w(["Holds no other position","Already holds three","Has lost $100"],x.s)
C.i0N=new D.cI("The agent buys on a signal only if it...",C.dcc,0,"One position at a time.")
C.dK5=w([C.b4J,C.b4B,C.hZU,C.i0M,C.i0m,C.i0q,C.i_e,C.i0B,C.i0t,C.i_8,C.i0k,C.i01,C.i_H,C.i0N],x.r)
C.dnR=w(["0 to 100","1 to 10","-50 to 50"],x.s)
C.i0o=new D.cI("RSI is a number from...",C.dnR,0,"It always sits between 0 and 100.")
C.dzc=w(["Rises were bigger than falls","Falls were bigger than rises","Nothing moved"],x.s)
C.i_A=new D.cI("RSI above 50 means recent...",C.dzc,0,"Above 50 = buyers stronger lately.")
C.djm=w(["Overbought","Oversold","Balanced"],x.s)
C.i_J=new D.cI("RSI below 30 is called...",C.djm,1,"It fell fast and is stretched downward.")
C.dwI=w(["Momentum: strength of recent moves","The company profit","Trading volume"],x.s)
C.i_U=new D.cI("RSI measures...",C.dwI,0,"It compares gains with losses.")
C.d8h=w(["Healthy","Very stretched","Impossible"],x.s)
C.i_n=new D.cI("A buy signal with RSI 60 is...",C.d8h,0,"Between 50 and 70 is healthy strength.")
C.dg9=w(["Just starting","Tired and stretched","Guaranteed"],x.s)
C.i_0=new D.cI("A buy signal with RSI 80 means the move may be...",C.dg9,1,"Very high RSI often comes before a pause.")
C.dnt=w(["As a second opinion","As the only reason to trade","Never"],x.s)
C.i_t=new D.cI("Best way to use RSI?",C.dnt,0,"Combine it with the trend signal.")
C.dyo=w(["For a while","Never","Only one candle"],x.s)
C.i_T=new D.cI("In a strong uptrend, RSI can stay above 70...",C.dyo,0,"Strong trends can stay overbought.")
C.dsQ=w(["Balanced buyers and sellers","Market closed","Crash coming"],x.s)
C.i_V=new D.cI("RSI of 50 means...",C.dsQ,0,"50 is the middle.")
C.dbi=w(["Rose very fast","Fell very fast","Did not move"],x.s)
C.i0w=new D.cI("Overbought means prices...",C.dbi,0,"Overbought = rose fast.")
C.cRT=w(["Stay oversold and keep falling","Only go up","Freeze the market"],x.s)
C.i_v=new D.cI("Oversold in a strong downtrend can...",C.cRT,0,"Oversold is not a reason to buy on its own.")
C.cNY=w(["Sellers a little stronger","Extreme buying","Extreme selling"],x.s)
C.i_L=new D.cI("RSI 45 suggests...",C.cNY,0,"Just below 50: sellers slightly ahead.")
C.dnr=w([C.b4A,C.b4N,C.i0o,C.i_A,C.i_J,C.i_U,C.i_n,C.i_0,C.i_t,C.i_T,C.i_V,C.i0w,C.i_v,C.i_L],x.r)
C.dLl=w(["When the trade is up $50","When the trade is up $5","Never"],x.s)
C.i0x=new D.cI("The agent take profit is...",C.dLl,0,"It sells when the trade is up $50.")
C.dDo=w(["When the trade is down $50","When the trade is down $500","It has none"],x.s)
C.i0c=new D.cI("The agent stop loss is...",C.dDo,0,"It sells when the trade is down $50.")
C.drt=w(["A planned exit that limits a loss","A way to stop the app","A bonus"],x.s)
C.i_d=new D.cI("A stop loss is...",C.drt,0,"It sells automatically when the loss reaches a set size.")
C.dgH=w(["Before entering the trade","After it goes wrong","Never"],x.s)
C.i_m=new D.cI("When should you decide your exits?",C.dgH,0,"Plan exits first, while calm.")
C.dne=w(["So no single mistake hurts much","It is the maximum allowed","To lose faster"],x.s)
C.i_u=new D.cI("Why does the agent use only about $100 per trade?",C.dne,0,"Small size protects the account.")
C.dL_=w(["1 to 2 percent","50 percent","100 percent"],x.s)
C.i06=new D.cI("Pros rarely risk more than about ... of their money on one trade.",C.dL_,0,"Small risk per trade keeps them in the game.")
C.dl2=w(["$0","+$100","-$100"],x.s)
C.i0j=new D.cI("Win $50 twice and lose $50 twice. Your total is...",C.dl2,0,"50 + 50 - 50 - 50 = 0.")
C.dvB=w(["Profitable","Break even","A loss"],x.s)
C.i0d=new D.cI("Winning half the time with 2 to 1 reward to risk is...",C.dvB,0,"Each win is twice each loss.")
C.dgP=w(["Turns small losses into big ones","Guarantees a win","Has no effect"],x.s)
C.i_z=new D.cI('Moving your stop lower to "give it room" usually...',C.dgP,0,"Hope is not a plan.")
C.d9n=w(["1 to 1","1 to 2","10 to 1"],x.s)
C.i_G=new D.cI("Reward to risk of the agent is...",C.d9n,0,"$50 target vs $50 stop: the same size.")
C.ctZ=w(["Can end an account","Are rare","Do not matter"],x.s)
C.i0J=new D.cI("Big losses are dangerous because they...",C.ctZ,0,"A 50% loss needs a 100% gain to recover.")
C.cXm=w(["Selling when the planned gain is reached","Buying more","Holding forever"],x.s)
C.i_s=new D.cI("Take profit means...",C.cXm,0,"It locks in the win.")
C.df_=w([C.b4G,C.b4E,C.i0x,C.i0c,C.i_d,C.i_m,C.i_u,C.i06,C.i0j,C.i0d,C.i_z,C.i_G,C.i0J,C.i_s],x.r)
C.dzi=w(["Trading more to win losses back","Taking a break","Following rules"],x.s)
C.i_Q=new D.cI("Revenge trading means...",C.dzi,0,"It usually makes losses bigger.")
C.d91=w(["$100 total losses","$25 total losses","Never"],x.s)
C.i_o=new D.cI("The total brake pauses the agent at...",C.d91,0,"$100 total demo losses.")
C.d8B=w(["An admin, after a review","It turns itself on","Nobody ever"],x.s)
C.i_M=new D.cI("Who turns the agent back on after the $100 brake?",C.d8B,0,"A human review comes first.")
C.cgw=w(["$50","$1","$500"],x.s)
C.i_6=new D.cI("The daily stop is...",C.cgw,0,"If the day loses $50, no more buys.")
C.d3w=w(["Stop and reset","Trade bigger","Ignore your limits"],x.s)
C.i0p=new D.cI("Bad days happen. The best response is...",C.d3w,0,"Walking away protects your money.")
C.dq6=w(["Before the day starts","After you lose","Only on weekends"],x.s)
C.i_1=new D.cI("Limits should be set...",C.dq6,0,"Decide limits while calm.")
C.dFQ=w(["Reviewing what happened","Forgetting it","Blaming the market"],x.s)
C.i_B=new D.cI("The most important part of learning after a bad run is...",C.dFQ,0,"Reviews turn losses into lessons.")
C.cSj=w(["Yes, exits still work","No, it freezes","It buys more instead"],x.s)
C.i03=new D.cI("After the daily stop, can the agent still sell an open trade?",C.cSj,0,"The stop blocks new buys, not exits.")
C.dKw=w(["Protect the account from bad days","Make more trades","Win every day"],x.s)
C.i_Y=new D.cI("Brakes are there to...",C.dKw,0,"They cap the damage.")
C.daL=w(["Stop trading and rethink","Raise the limits","Borrow money"],x.s)
C.i_x=new D.cI("If you keep breaking your own limits, you should...",C.daL,0,"Rules only work when kept.")
C.dCy=w(["The next day","Never","Every minute"],x.s)
C.i04=new D.cI("The daily stop resets...",C.dCy,0,"A new Eastern Time day starts fresh.")
C.dp6=w(["Can lose everything on a bad day","Always wins","Pays no fees"],x.s)
C.i_9=new D.cI("A trader with no loss limits...",C.dp6,0,"Limits are the safety net.")
C.dJa=w(["Pause","Trade faster","Bet bigger"],x.s)
C.hZZ=new D.cI("Feeling angry after a loss is a sign to...",C.dJa,0,"Emotions lead to bad trades.")
C.db4=w([C.b4F,C.i_Q,C.i_o,C.i_M,C.i_6,C.i0p,C.i_1,C.i_B,C.i03,C.i_Y,C.i_x,C.i04,C.i_9,C.hZZ],x.r)
C.dd_=w(["9:30 AM to 4:00 PM Eastern","24 hours","8 PM to midnight"],x.s)
C.i_h=new D.cI("US stock market hours are...",C.dd_,0,"On market days only.")
C.i_a=new D.cI("Is the US stock market open on Saturday?",T.a7K,1,"Weekends are closed.")
C.dIJ=w(["A jump between the close and the next open","A break in the chart software","A holiday"],x.s)
C.i_W=new D.cI("An overnight gap is...",C.dIJ,0,"News while closed moves the next open.")
C.d3v=w(["Faster and harder","Slower","Exactly the same"],x.s)
C.i_y=new D.cI("Crypto compared with SPY usually moves...",C.d3v,0,"Crypto is more jumpy.")
C.dxv=w(["The 500 biggest US companies","One company","Bitcoin"],x.s)
C.i0H=new D.cI("SPY holds...",C.dxv,0,"It is a fund of 500 companies.")
C.dM7=w(["They spread over many companies","They are closed","They are crypto"],x.s)
C.hZT=new D.cI("Why do funds like SPY move more calmly?",C.dM7,0,"One bad company matters less.")
C.dDP=w(["3:55 PM Eastern","Midnight","Noon"],x.s)
C.i0z=new D.cI("The agent sells stocks by...",C.dDP,0,"Before the 4:00 PM close.")
C.daM=w(["Sunday 5 PM to Friday 5 PM Eastern","Only 9:30 to 4","Only weekends"],x.s)
C.i_i=new D.cI("Forex (currency pairs) trades...",C.daM,0,"Real forex is closed on weekends.")
C.dga=w(["The broker itself","The real world market","The government"],x.s)
C.i_r=new D.cI("OTC prices at a broker on weekends come from...",C.dga,0,"They are made by the broker and can differ.")
C.dzy=w(["Do not trade","Trade double","Trade at night"],x.s)
C.i_N=new D.cI("On a US market holiday, stocks...",C.dzy,0,"Holidays are closed days.")
C.cgP=w(["More often","Never","Less often"],x.s)
C.i0C=new D.cI("Because crypto moves fast, stop losses are hit...",C.cgP,0,"Bigger swings reach stops sooner.")
C.dDO=w(["Its own news","Weekend rules","The colour of candles"],x.s)
C.i0n=new D.cI("One company like Tesla can jump a lot because of...",C.dDO,0,"Single stocks react to company news.")
C.dtD=w([C.b4M,C.b4C,C.i_h,C.i_a,C.i_W,C.i_y,C.i0H,C.hZT,C.i0z,C.i_i,C.i_r,C.i_N,C.i0C,C.i0n],x.r)
C.dhX=w(["Why you entered, your exits and what happened","Only wins","Nothing"],x.s)
C.i_k=new D.cI("A trading journal records...",C.dhX,0,"It shows what really works.")
C.i_I=new D.cI("One winning trade proves a method works.",M.TL,1,"One trade can be pure luck.")
C.dmn=w(["2 to 4 weeks","1 hour","1 day"],x.s)
C.i_2=new D.cI("The plan is to paper trade for...",C.dmn,0,"Enough time for many trades.")
C.dqM=w(["A bug to fix before real money","Fine","A bonus"],x.s)
C.i_c=new D.cI("If the agent ever breaks a rule, that is...",C.dqM,0,"Rules must be followed exactly.")
C.dvT=w(["A long positive paper test and a full review","One good day","A tip from a friend"],x.s)
C.i0I=new D.cI("Before using real money you need...",C.dvT,0,"Evidence first.")
C.dcu=w(["Worse than a coin flip","Excellent","Guaranteed"],x.s)
C.i0e=new D.cI("Signals that worked under 50% of the time are...",C.dcu,0,"Do not trust them.")
C.d7H=w(["Never a good idea for beginners","Smart","Required"],x.s)
C.i08=new D.cI("Borrowing money to trade is...",C.d7H,0,"Borrowed losses still have to be paid.")
C.deu=w(["The agent journal","An advert","A game"],x.s)
C.i0f=new D.cI("The Trades list on the main screen is...",C.deu,0,"Every buy and sell is recorded.")
C.ds5=w(["No fear and no greed","Lots of emotion","Random choices"],x.s)
C.i_w=new D.cI("The point of an agent is to follow rules with...",C.ds5,0,"Discipline is its strength.")
C.cVT=w(["+$100","-$100","$0"],x.s)
C.i0K=new D.cI("After 10 trades you have 6 wins at +$50 and 4 losses at -$50. Total?",C.cVT,0,"6 x 50 = 300; 4 x 50 = 200; 300 - 200 = +100.")
C.d_k=w(["Review the trades calmly","Quit forever without looking","Double the size"],x.s)
C.i_j=new D.cI("A losing week means you should...",C.d_k,0,"Reviews find what to fix.")
C.dHp=w(["Patient and disciplined","Lucky","Fast clickers"],x.s)
C.i_q=new D.cI("The best traders are mostly...",C.dHp,0,"Patience and rules win over time.")
C.dkP=w([C.b4z,C.b4H,C.i_k,C.i_I,C.i_2,C.i_c,C.i0I,C.i0e,C.i08,C.i0f,C.i_w,C.i0K,C.i_j,C.i_q],x.r)
C.dOs=new A.bl(C.eBk,[C.dEa,C.dB1,C.daI,C.dDT,C.dK5,C.dnr,C.df_,C.db4,C.dtD,C.dkP],A.as("bl<o,ah<cI>>"))
C.eDm={EUR:0,USD:1,GBP:2,JPY:3,CAD:4,AUD:5,NZD:6,CHF:7,TRY:8,NOK:9,THB:10}
C.fhc=new A.y("\u20ac",B.dV)
C.fi4=new A.y("$",B.ev)
C.eXG=new A.y("\xa3",B.dl)
C.f67=new A.y("\xa5",B.bC)
C.f42=new A.y("C$",B.hK)
C.f6y=new A.y("A$",B.cY)
C.eX_=new A.y("NZ",B.ax)
C.fak=new A.y("Fr",B.ew)
C.ffl=new A.y("TL",B.fN)
C.fen=new A.y("kr",B.h_)
C.f0y=new A.y("TH",B.wW)
C.a97=new A.bl(C.eDm,[C.fhc,C.fi4,C.eXG,C.f67,C.f42,C.f6y,C.eX_,C.fak,C.ffl,C.fen,C.f0y],A.as("bl<o,+(o,u)>"))
C.c26=new A.ae(B.np,5,B.b1,null,null,null)
C.eK2=new A.C(B.hA,C.c26,null)
C.fbZ=new A.y(F.qW,"HOLDING")
C.fex=new A.y(C.cI,"PASSES")
C.feG=new A.y(C.d6,"FALLING")
C.feO=new A.y(C.d6,"BENCHED")
C.fjw=new A.b1(C.cI,B.mH,"up")
C.fjR=new A.b1(1,"Live signals",C.ate)
C.bXS=new A.a_(983635,"MaterialIcons",!0)
C.fjZ=new A.b1(E.i1,C.bXS,"Moving sideways")
C.fk6=new A.b1(C.d6,B.a5k,"down")
C.fkz=new A.b1(2,"Ask tutor",B.vC)
C.fkR=new A.b1(B.b1,B.mD,"Waiting for data")
C.fls=new A.b1(C.cI,B.mH,"Trending up")
C.flz=new A.b1(C.d6,B.a5k,"Trending down")
C.flD=new A.b1(0,"Lessons",B.of)
C.fmG=new A.b1(B.bQ,B.mD,"waiting")
C.fqA=new A.b7([B.Ae,C.cI,"Signal alerts are ON: only STRONG BUY or SELL signals (all 5 confirmations), built for a 15\u201330 minute expiry, while NGMY is open or in the background.",null])
C.frg=new A.b7([B.at1,E.i1,"Signal alerts are unlocked. Allow notifications so the app can tell you when a STRONG signal is given.","Allow"])
C.c0h=new A.ae(B.np,8,C.cI,null,null,null)
C.fSI=new A.F(!0,C.cI,null,null,null,null,11.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.hiu=new A.D("LIVE",null,C.fSI,null,null,null,null,null,null,null,null,null)
C.dyn=w([C.c0h,B.b6,C.hiu],x.p)
C.fvH=new A.c_(B.aJ,B.e,B.P,B.l,null,B.p,null,0,C.dyn,null)
C.c0J=new A.ae(B.rA,14,B.c,null,null,null)
C.hpu=new A.D("Learn",null,B.nE,null,null,null,null,null,null,null,null,null)
C.dcf=w([C.c0J,B.da,C.hpu],x.p)
C.fvK=new A.c_(B.aJ,B.e,B.P,B.l,null,B.p,null,0,C.dcf,null)
C.fKA=new A.F(!0,E.i1,null,null,null,null,12,B.O,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.fLt=new A.F(!0,B.c,null,null,null,null,11.5,null,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.fM2=new A.F(!0,B.c,null,null,null,null,34,B.C,null,-0.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.fMB=new A.F(!0,B.c,null,null,null,null,36,B.C,null,-0.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.fMP=new A.F(!0,B.c,null,null,null,null,14,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,G.AI,null,null)
C.fND=new A.F(!0,B.ac,null,null,null,null,10.5,B.u,null,0.9,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.fOQ=new A.F(!0,F.qW,null,null,null,null,11,B.O,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.fPc=new A.F(!0,B.ac,null,null,null,null,11.5,B.C,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.fRb=new A.F(!0,C.cI,null,null,null,null,11.5,B.O,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.fRj=new A.F(!0,C.d6,null,null,null,null,12,B.C,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.fSd=new A.F(!0,C.cI,null,null,null,null,12,null,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.fSv=new A.F(!0,C.d6,null,null,null,null,11.5,null,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.fSE=new A.F(!0,C.d6,null,null,null,null,11.5,B.O,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.aZz=new A.F(!0,E.i1,null,null,null,null,11.5,B.O,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.fWF=new A.F(!0,C.cI,null,null,null,null,12.5,B.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.fXH=new A.F(!0,B.c,null,null,null,null,22,B.u,null,0.8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.fYk=new A.F(!0,C.d6,null,null,null,null,12,null,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.b_l=new A.F(!0,C.d6,null,null,null,null,11.5,B.C,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.fZE=new A.F(!0,B.ac,null,null,null,null,9.5,B.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.h1P=new A.D("Ask the tutor",null,B.cg,null,null,null,null,null,null,null,null,null)
C.aYR=new A.F(!0,C.d6,null,null,null,null,12.5,B.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.h2_=new A.D("Not quite. Try again.",null,C.aYR,null,null,null,null,null,null,null,null,null)
C.h2Y=new A.D("Win rate ($100 trades)",null,B.M8,null,null,null,null,null,null,null,null,null)
C.h3_=new A.D("All 10 lessons done!",null,null,null,null,null,null,null,null,null,null,null)
C.h37=new A.D("10 short lessons. Each one shows you the idea live on the real markets the agent is watching.",null,U.FV,null,null,null,null,null,null,null,null,null)
C.h4C=new A.D("Wrong. You have one more try.",null,C.aYR,null,null,null,null,null,null,null,null,null)
C.h68=new A.D("Turn the agent back on?",null,null,null,null,null,null,null,null,null,null,null)
C.fZZ=new A.F(!0,B.c,null,null,null,null,9.5,B.u,null,0.8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.h8N=new A.D("ALL SYSTEMS",null,C.fZZ,null,null,null,null,null,null,null,null,null)
C.h9O=new A.D("Built for a 15\u201330 minute expiry. Do NOT use this for 1\u20135 minute trades.",null,C.b_l,null,null,null,null,null,null,null,null,null)
C.hfU=new A.D("Signal alerts are now unlocked. When a market says ENTER UP or ENTER DOWN, the app will tell you the market, the direction and the duration. Allow notifications to receive them.",null,null,null,null,null,null,null,null,null,null,null)
C.b_S=new A.D("Balance",null,B.Xo,null,null,null,null,null,null,null,null,null)
C.hj_=new A.D("Allow notifications",null,null,null,null,null,null,null,null,null,null,null)
C.fV5=new A.F(!0,B.aR,null,null,null,null,10.5,null,null,null,null,null,1.25,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.hjH=new A.D("5 of 10\n= break even",null,C.fV5,null,B.dR,null,null,null,null,null,null,null)
C.hlY=new A.D("Check now",null,B.cg,null,null,null,null,null,null,null,null,null)
C.hmD=new A.D("Learn to trade",null,B.mf,null,null,null,null,null,null,null,null,null)
C.hp8=new A.D("Turn back on",null,null,null,null,null,null,null,null,null,null,null)
C.hpy=new A.D("The $100 brake paused the agent. Turning it back on means you have reviewed it. The running demo profit and loss starts again from $0.",null,null,null,null,null,null,null,null,null,null,null)
C.hW5=new D.zc("Nvidia","N",B.NS)
C.hW7=new D.zc("Ethereum","\u039e",C.ajR)
C.hWa=new D.zc("S&P 500 fund","S&P",B.cj)
C.hWb=new D.zc("Bitcoin","B",F.qW)
C.hWd=new D.zc("Tesla","T",B.bC)
C.hWe=new D.zc("Microsoft","M",B.bp)
C.hWf=new D.zc("Nasdaq 100 fund","Q",B.cJ)
C.bpr=new A.u(1,0.6,0.27058823529411763,1,B.q)
C.hWh=new D.zc("Solana","S",C.bpr)
C.hWj=new D.zc("Apple","A",B.cU)
C.hWm=new D.zc("Amazon","a",B.as)})();(function staticFields(){$.DL=A.a([],A.as("N<a04>"))
$.ahQ=!1
$.hqc=""
$.aMX=0
$.fse=0})()};
(a=>{a["i2+NakxRSmCGK7+dqyzUf77jY80="]=a.current})($__dart_deferred_initializers__);