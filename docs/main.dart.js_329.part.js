((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,P,Q,E,I,R,K,G,L,D={
hDh(){return new D.auj(null)},
eJM(d){var w=J.a1(d),v=D.dE(w.h(d,"reading")).h(0,"action"),u=J.k(v==null?"":v)
if(B.a.Y(u,"ENTER UP"))return 0
if(B.a.Y(u,"ENTER DOWN"))return 1
if(!J.z(w.h(d,"open"),!0))return 4
return 2+(100-D.c4(D.dE(w.h(d,"reading")).h(0,"score")))/1000},
hNk(d,e,f,g){var w,v,u,t,s,r,q,p,o,n,m,l,k=A.a([],x.n)
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
l=(t.b(q)?A.a_(q,v,u):A.S(v,u)).h(0,"pnl")
if(!(typeof l=="number")){q=A.cA(A.v(l==null?"":l))
l=q==null?0:q}q=m?"In "+D.eg(n,!0,!1):"Out "+D.eg(l,!0,!0)
if(m)p=f
else p=l>0?C.cH:C.d5
k.push(new D.R6(o,q,p))}if(g!=null&&A.v(g.h(0,"symbol"))===e){w=g.h(0,"entryAt")
o=A.be(A.v(w==null?"":w))
if(g.h(0,"spot")!=null)n=D.c4(g.h(0,"spot"))
else n=t.b(g.h(0,"option"))?0:D.c4(g.h(0,"entryPrice"))
if(o!=null&&n>0&&!B.d.aR(k,new D.fMO(o,f)))k.push(new D.R6(o,"In "+D.eg(n,!0,!1),f))}return k},
fE0(d){var w
switch(d){case"SPY":w=C.hSC
break
case"QQQ":w=C.hSH
break
case"AAPL":w=C.hSL
break
case"MSFT":w=C.hSG
break
case"NVDA":w=C.hSx
break
case"TSLA":w=C.hSF
break
case"AMZN":w=C.hSO
break
case"BTC/USD":w=C.hSD
break
case"ETH/USD":w=C.hSz
break
case"SOL/USD":w=C.hSJ
break
default:w=new D.z4(d,d.length===0?"?":d[0],B.b_)
break}return w},
bEp(d,e){var w,v,u=null,t=d.split("/")
if(t.length===2&&C.a8O.am(0,t[0])&&C.a8O.am(0,t[1])){t=d.split("/")
w=new D.fyU(e)
return new A.a4(e*1.25,e,new A.am(B.a0,u,B.ac,B.t,A.a([A.ao(u,w.$1(t[0]),u,u,0,u,0,u),A.ao(0,w.$1(t[1]),u,u,u,0,u,u)],x.p),u),u)}v=D.fE0(d)
w=v.b
return A.p(B.z,A.c(w,u,u,u,u,u,u,A.l(u,u,B.c,u,u,u,u,u,u,u,u,w.length>1?e*0.32:e*0.52,u,u,B.u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),B.f,u,u,new A.o(v.c,u,u,u,u,u,B.a6),u,e,u,u,u,u,u,e)},
fEj(d){var w,v=x.g.a(d.h(0,"markets"))
if(v==null)v=B.bO
v=J.cK(v,x.f)
v=A.cs(v,new D.fEk(),v.$ti.k("M.E"),x.P)
w=A.B(v,A.a3(v).k("M.E"))
return w},
dE(d){var w=x.N,v=x.z
return x.f.b(d)?A.a_(d,w,v):A.S(w,v)},
c4(d){var w
if(typeof d=="number")w=d
else{w=A.cA(A.v(d==null?"":d))
if(w==null)w=0}return w},
bFM(d){var w=x.g.a(D.dE(J.t(d,"chart")).h(0,"points"))
if(w==null)w=B.bO
w=J.cK(w,x.f)
w=A.cs(w,new D.fIF(),w.$ti.k("M.E"),x.P)
w=A.B(w,A.a3(w).k("M.E"))
return w},
eg(d,e,f){var w,v=A.oa(B.i.a5(Math.abs(d),2),A.ag("\\B(?=(\\d{3})+(?!\\d))",!0,!1,!1,!1),new D.fFq(),null)
if(d<0)w="-"
else w=f&&d>0?"+":""
return w+(e?"$":"")+v},
LL(d){var w=B.o.F(A.cX(d),12)===0?12:B.o.F(A.cX(d),12),v=B.a.aZ(B.o.v(A.fx(d)),2,"0"),u=A.cX(d)<12?"AM":"PM"
return""+w+":"+v+" "+u},
SD(d){var w=d.aa(),v=new D.fMI(),u=v.$3(A.bD(w),3,2).bL(252e8),t=v.$3(A.bD(w),11,1).bL(216e8),s=w.bL(0-A.du(0,!w.cX(u)&&w.cX(t)?4:5,0,0,0,0).a)
return A.c2(A.bD(s),A.bO(s),A.bW(s),A.cX(s),A.fx(s),0,0,0)},
aRj(d){var w,v,u,t=d==null,s=A.v(t?"":d).split("-")
if(s.length!==3)return A.v(t?"":d)
w=A.ca(s[1],null)
t=B.i5[B.o.D((w==null?1:w)-1,0,11)]
v=s[2]
u=A.ca(v,null)
return t+" "+A.v(u==null?v:u)+", "+s[0]},
hov(d){var w,v=A.be(A.v(d==null?"":d))
if(v==null)return""
w=D.SD(v)
return B.i5[A.bO(w)-1]+" "+A.bW(w)+" at "+D.LL(w)+" ET"},
hqn(d){var w,v,u=d.split(", ")
if(u.length>=4){w=u[1]
v=u[3]
return w+", "+A.aK(v," ET","")}return d},
hIK(d){return d.length===0?d:d[0].toUpperCase()+B.a.aV(d,1)},
is6(d){var w=B.a.c8(d,"(")
return B.a.i(w>0?B.a.av(d,0,w):d)},
hBW(d){return new D.OU(d,null)},
hHc(d){var w
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
hLj(){var w=D.SD(new A.W(Date.now(),0,!1).aa()),v=B.o.F(A.fx(w),5)
return"at "+D.LL(A.c2(A.bD(w),A.bO(w),A.bW(w),A.cX(w),A.fx(w),0,0,0).bL(A.du(0,0,0,0,5-v,0).a))+" ET"},
ij1(d){if(B.a.Y(d,"ENTER UP"))return C.cH
if(B.a.Y(d,"ENTER DOWN"))return C.d5
if(B.a.q(d,"SKIP")||B.a.q(d,"TOO LATE"))return C.d5
if(B.a.Y(d,"MARKET CLOSED"))return B.bQ
return E.i1},
hMl(a9,b0,b1,b2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=null,a3="mom1h",a4=J.a1(b0),a5=D.dE(a4.h(b0,"reading")),a6=D.dE(a5.h(0,"timing")),a7=D.bFM(b0),a8=a4.h(b0,"asset")
if(a8==null)a8=a4.h(b0,"symbol")
w=J.k(a8==null?"":a8)
a8=a5.h(0,"action")
v=J.k(a8==null?"WAITING FOR DATA":a8)
u=D.ij1(v)
t=B.i.D(D.c4(a5.h(0,"score")),0,100)
a8=x.g.a(a5.h(0,"notes"))
if(a8==null)a8=B.bO
a8=J.b8(a8,new D.fJw(),x.N)
s=A.B(a8,a8.$ti.k("aj.E"))
r=D.c4(a4.h(b0,"changePct"))
a8=a9.a
q=a8?B.c.j(0.92):C.ib
p=A.m(20)
o=B.a.Y(v,"ENTER")
if(o)n=u.j(0.6)
else n=a8?B.c:C.nf
n=A.K(n,B.r,o?1.6:1)
m=x.V
l=A.a([new A.aa(0,B.H,a9.gIc(),B.hS,14)],m)
k=D.bEp(w,28)
o=A.c(w,a2,a2,a2,a2,a2,a2,A.l(a2,a2,a8?C.cl:B.c,a2,a2,a2,a2,a2,a2,a2,a2,14,a2,a2,B.C,a2,a2,!0,a2,a2,a2,a2,a2,a2,a2,a2),a2,a2,a2)
j=a4.h(b0,"name")
j=J.k(j==null?"":j)
i=x.p
j=A.a([k,B.ar,A.E(A.w(A.a([o,A.c(j,a2,a2,a2,a2,a2,a2,A.l(a2,a2,a8?C.bT:C.bV,a2,a2,a2,a2,a2,a2,a2,a2,11,a2,a2,a2,a2,a2,!0,a2,a2,a2,a2,a2,a2,a2,a2),a2,a2,a2)],i),B.B,a2,B.e,B.h,0,B.p),1)],i)
if(a7.length>2)B.d.u(j,A.a([new A.a4(58,26,A.b4(a2,a2,a2,new D.bx1(a7,r>=0?C.cH:C.d5,a2),B.aA),a2),B.ar],i))
o=D.hMf(b0)
o=A.c(o,a2,a2,a2,a2,a2,a2,A.l(a2,a2,a8?C.cl:B.c,a2,a2,a2,a2,a2,a2,a2,a2,14,a2,a2,B.C,a2,a2,!0,a2,a2,a2,a2,a2,a2,a2,a2),a2,a2,a2)
k=r>=0
h=k?"+":""
g=B.i.a5(r,2)
f=J.z(a4.h(b0,"kind"),"forex")?"30m":"4h"
j.push(A.w(A.a([o,A.c(h+g+"% \xb7 "+f,a2,a2,a2,a2,a2,a2,A.l(a2,a2,k?C.cH:C.d5,a2,a2,a2,a2,a2,a2,a2,a2,11,a2,a2,B.O,a2,a2,!0,a2,a2,a2,a2,a2,a2,a2,a2),a2,a2,a2)],i),B.dr,a2,B.e,B.h,0,B.p))
o=A.a([A.A(j,B.l,a2,B.e,B.h,0,a2,a2)],i)
k=x.f
if(k.b(a4.h(b0,"v2")))B.d.u(o,A.a([B.af,D.itG(a9,b0)],i))
else{j=A.a([],i)
if(k.b(a5.h(0,"entry"))){k=D.dE(a5.h(0,"entry"))
e=J.z(k.h(0,"dir"),"up")
d=e?C.cH:C.d5
a0=Math.max(1,B.i.S(D.c4(k.h(0,"candleMin"))))
h=A.m(18)
g=A.ap(d,B.v,0.25)
g.toString
g=A.a([d,g],x.O)
m=A.a([new A.aa(0,B.H,d.j(0.35),B.cy,16)],m)
f=B.c.j(0.22)
f=A.p(a2,A.V(e?B.q3:B.q2,B.c,a2,a2,a2,34),B.f,a2,a2,new A.o(f,a2,a2,a2,a2,a2,B.a6),a2,52,a2,a2,a2,a2,a2,52)
a1=A.c(e?"ENTER UP":"ENTER DOWN",a2,a2,a2,a2,a2,a2,C.fUw,a2,a2,a2)
B.d.u(j,A.a([B.af,A.p(a2,A.w(A.a([f,B.aj,a1,A.c(e?"BUY / CALL":"SELL / PUT",a2,a2,a2,a2,a2,a2,C.fM1,a2,a2,a2),B.R,new D.aCW(a0,a2),B.R,A.A(A.a([A.w(A.a([A.c(B.i.a5(D.c4(k.h(0,"durationMin")),0)+" min",a2,a2,a2,a2,a2,a2,B.js,a2,a2,a2),A.c("Trade for",a2,a2,a2,a2,a2,a2,H.ad_,a2,a2,a2)],i),B.l,a2,B.e,B.h,0,B.p),A.p(a2,a2,B.f,B.jW,a2,a2,a2,30,a2,B.rh,a2,a2,a2,1),A.w(A.a([A.c(A.v(k.h(0,"worked"))+" of "+A.v(k.h(0,"of")),a2,a2,a2,a2,a2,a2,B.js,a2,a2,a2),A.c("Worked lately",a2,a2,a2,a2,a2,a2,H.ad_,a2,a2,a2)],i),B.l,a2,B.e,B.h,0,B.p)],i),B.l,a2,B.bb,B.h,0,a2,a2)],i),B.l,a2,B.e,B.h,0,B.p),B.f,a2,a2,new A.o(a2,a2,a2,h,m,new A.a6(B.aU,B.b1,B.w,g,a2,a2),B.m),a2,a2,a2,a2,B.a29,a2,a2,1/0)],i))}j.push(B.R)
m=u.j(0.15)
k=A.m(999)
k=A.a([A.p(a2,A.c(v,a2,a2,a2,a2,a2,a2,A.l(a2,a2,u,a2,a2,a2,a2,a2,a2,a2,a2,10.5,a2,a2,B.u,a2,a2,!0,a2,0.4,a2,a2,a2,a2,a2,a2),a2,a2,a2),B.f,a2,a2,new A.o(m,a2,a2,k,a2,a2,B.m),a2,a2,a2,a2,B.o9,a2,a2,a2),B.aX],i)
if(a5.h(0,"rsi")!=null){m=B.i.a5(D.c4(a5.h(0,"rsi")),0)
k.push(A.c("RSI "+m,a2,a2,a2,a2,a2,a2,A.l(a2,a2,a8?C.bT:C.bV,a2,a2,a2,a2,a2,a2,a2,a2,11,a2,a2,B.O,a2,a2,!0,a2,a2,a2,a2,a2,a2,a2,a2),a2,a2,a2))}if(a5.h(0,a3)!=null){m=D.c4(a5.h(0,a3))>=0?"+":""
h=B.i.a5(D.c4(a5.h(0,a3)),2)
B.d.u(k,A.a([B.ar,A.c("1h "+m+h+"%",a2,a2,a2,a2,a2,a2,A.l(a2,a2,D.c4(a5.h(0,a3))>=0?C.cH:C.d5,a2,a2,a2,a2,a2,a2,a2,a2,11,a2,a2,B.O,a2,a2,!0,a2,a2,a2,a2,a2,a2,a2,a2),a2,a2,a2)],i))}j.push(A.A(k,B.l,a2,B.e,B.h,0,a2,a2))
j.push(B.R)
j.push(A.cg(new D.fJx(t,a9)))
j.push(B.at)
m=A.c("Sellers",a2,a2,a2,a2,a2,a2,A.l(a2,a2,a8?C.bT:C.bV,a2,a2,a2,a2,a2,a2,a2,a2,10,a2,a2,a2,a2,a2,!0,a2,a2,a2,a2,a2,a2,a2,a2),a2,a2,a2)
k=B.i.a5(t,0)
k=A.c("Strength "+k+"/100",a2,a2,a2,a2,a2,a2,A.l(a2,a2,a8?C.cl:B.c,a2,a2,a2,a2,a2,a2,a2,a2,10.5,a2,a2,B.C,a2,a2,!0,a2,a2,a2,a2,a2,a2,a2,a2),a2,a2,a2)
j.push(A.A(A.a([m,B.aX,k,B.aX,A.c("Buyers",a2,a2,a2,a2,a2,a2,A.l(a2,a2,a8?C.bT:C.bV,a2,a2,a2,a2,a2,a2,a2,a2,10,a2,a2,a2,a2,a2,!0,a2,a2,a2,a2,a2,a2,a2,a2),a2,a2,a2)],i),B.l,a2,B.e,B.h,0,a2,a2))
j.push(B.N)
m=J.z(a4.h(b0,"open"),!0)?A.cU(s,1,a2,A.U(s).c):s
m=J.E9(m,b1?2:99)
k=m.$ti
m=new A.bR(m,m.gJ(0),k.k("bR<aj.E>"))
k=k.k("aj.E")
while(m.C()){h=m.d
if(h==null)h=k.a(h)
g=A.V(B.no,u,a2,a2,a2,4.5)
f=a8?C.cl:B.c
j.push(new A.C(B.lb,new A.c0(B.aK,B.e,B.h,B.B,a2,B.p,a2,0,A.a([new A.C(B.hz,g,a2),I.wi,new A.bu(1,B.b7,A.c(h,a2,a2,a2,a2,a2,a2,new A.F(!0,f,a2,a2,a2,a2,12.3,a2,a2,a2,a2,a2,1.35,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2),a2,a2,a2),a2)],i),a2),a2))}if(J.z(a4.h(b0,"open"),!0))B.d.u(j,A.a([B.R,D.ilk(a9,a5,a6)],i))
B.d.u(o,j)}if(b2!=null)o.push(new A.bK(B.a9,a2,a2,A.hy(C.bYv,A.c("Ask the tutor about "+w,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2),b2,a2),a2))
return A.p(a2,A.w(o,B.B,a2,B.e,B.h,0,B.p),B.f,a2,a2,new A.o(q,a2,n,p,l,a2,B.m),a2,a2,a2,B.d2,B.bD,a2,a2,a2)},
itG(a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1="activeSignal",a2=null,a3="explain",a4=J.a1(b0),a5=D.dE(a4.h(b0,"v2")),a6=x.f,a7=a6.b(a4.h(b0,a1))?D.dE(a4.h(b0,a1)):a2,a8=J.z(a4.h(b0,"open"),!0)
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
else q=t==="SELL"?C.d5:B.bQ
p=a4?a2:a7.h(0,"checks")
if(p==null)p=a5.h(0,"checks")
x.g.a(p)
a6=J.cK(p==null?B.bO:p,a6)
a6=A.cs(a6,new D.fNe(),a6.$ti.k("M.E"),x.P)
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
h=A.p(a2,A.c(g,a2,a2,a2,a2,a2,a2,A.l(a2,a2,q,a2,a2,a2,a2,a2,a2,a2,a2,10.5,a2,a2,B.u,a2,a2,!0,a2,a2,a2,a2,a2,a2,a2,a2),a2,a2,a2),B.f,a2,a2,new A.o(i,a2,a2,h,a2,a2,B.m),a2,a2,a2,a2,B.f6,a2,a2,a2)
if(u){i=a7.h(0,"et_time")
i=B.d.gal(A.v(i==null?"":i).split(", "))}else i=""
g=a9.a
f=x.p
i=A.a([A.A(A.a([j,B.aa,h,A.E(A.c(i,a2,1,B.a2,a2,a2,a2,A.l(a2,a2,g?C.bT:C.bV,a2,a2,a2,a2,a2,a2,a2,a2,10.5,a2,a2,B.O,a2,a2,!0,a2,a2,a2,a2,a2,a2,a2,a2),B.dX,a2,a2),1)],f),B.l,a2,B.e,B.h,0,a2,a2)],f)
if(v)B.d.u(i,A.a([B.at,A.c("WEAK SIGNAL \xb7 DO NOT ENTER",a2,a2,a2,a2,a2,a2,A.l(a2,a2,q,a2,a2,a2,a2,a2,a2,a2,a2,11.5,a2,a2,B.u,a2,a2,!0,a2,0.4,a2,a2,a2,a2,a2,a2),a2,a2,a2)],f))
if(u&&l!=null&&m!=null)B.d.u(i,A.a([B.R,new D.aKX(l,m,s,a2)],f))
i.push(B.at)
i.push(C.h6z)
if(u&&m!=null){u=D.LL(D.SD(m.aa()))
s=s?"higher":"lower"
i.push(A.c("Graded at "+u+" ET, 30 minutes after it was given: WIN if the price finished "+s+".",a2,a2,a2,a2,a2,a2,A.l(a2,a2,g?C.bT:C.bV,a2,a2,a2,a2,a2,a2,a2,a2,11,a2,a2,a2,a2,1.3,!0,a2,a2,a2,a2,a2,a2,a2,a2),a2,a2,a2))}i.push(B.N)
i.push(A.c(k,a2,a2,a2,a2,a2,a2,A.l(a2,a2,g?C.cl:B.c,a2,a2,a2,a2,a2,a2,a2,a2,12.3,a2,a2,a2,a2,1.35,!0,a2,a2,a2,a2,a2,a2,a2,a2),a2,a2,a2))
i.push(B.N)
for(u=o.length,e=0;e<o.length;o.length===u||(0,A.I)(o),++e){d=o[e]
s=J.a1(d)
j=J.z(s.h(d,"ok"),!0)?B.ea:B.Ip
j=A.V(j,J.z(s.h(d,"ok"),!0)?C.cH:C.d5,a2,a2,a2,15)
h=J.z(s.h(d,"ok"),!0)?"Yes":"No"
s=s.h(d,"text")
s=A.v(s==null?"":s)
a0=g?C.cl:B.c
i.push(new A.C(B.lb,new A.c0(B.aK,B.e,B.h,B.B,a2,B.p,a2,0,A.a([j,B.b6,new A.bu(1,B.b7,A.c(h+" \u2014 "+s,a2,a2,a2,a2,a2,a2,new A.F(!0,a0,a2,a2,a2,a2,11.8,a2,a2,a2,a2,a2,1.3,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2),a2,a2,a2),a2)],f),a2),a2))}return A.p(a2,A.w(i,B.B,a2,B.e,B.h,0,B.p),B.f,a2,a2,new A.o(a4,a2,p,a6,a2,a2,B.m),a2,a2,a2,a2,B.bg,a2,a2,1/0)},
fi7(d){var w=d.a,v=w<0?0:B.o.ao(w,1e6)
return""+B.o.ao(v,60)+":"+B.a.aZ(B.o.v(B.o.F(v,60)),2,"0")},
ilk(a4,a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e="dir",d="typicalMin",a0="entry",a1=a5.h(0,"decision"),a2=J.k(a1==null?"NO_DIRECTION":a1),a3=J.z(a5.h(0,e),"up")
a1=x.g.a(a5.h(0,"notes"))
if(a1==null)a1=B.bO
a1=J.b8(a1,new D.fzJ(),x.N)
w=A.B(a1,a1.$ti.k("aj.E"))
A:{if("ENTER"===a2){a1=a3?C.cH:C.d5
break A}if("SKIP_WEAK"===a2||"WAIT_LATE"===a2){a1=C.d5
break A}a1=E.i1
break A}v=a6.h(0,d)!=null&&a6.h(0,e)!=null&&!J.z(a6.h(0,e),"none")&&a2!=="NO_DIRECTION"&&a2!=="CLOSED"
u=D.c4(a6.h(0,"of"))
t=D.c4(a6.h(0,"worked"))
s=u>0
r=s?t/u:0
q=J.z(a6.h(0,e),"up")?"up":"down"
p=a4.a
o=p?C.r1:C.r2
n=A.m(16)
m=A.K(a1.j(0.55),B.r,1.5)
l=A.V(B.mF,p?C.cl:B.c,f,f,f,16)
k=x.p
l=A.A(A.a([l,B.b6,A.c("DECISION AND DURATION",f,f,f,f,f,f,A.l(f,f,p?C.cl:B.c,f,f,f,f,f,f,f,f,11.5,f,f,B.u,f,f,!0,f,1,f,f,f,f,f,f),f,f,f)],k),B.l,f,B.e,B.h,0,f,f)
j=a1.j(0.14)
i=A.m(10)
h=a5.h(0,"action")
h=A.a([A.c(J.k(h==null?"":h),f,f,f,f,f,f,A.l(f,f,a1,f,f,f,f,f,f,f,f,13,f,f,B.u,f,f,!0,f,f,f,f,f,f,f,f),f,f,f)],k)
if(w.length!==0){g=B.d.gG(w)
B.d.u(h,A.a([B.cQ,A.c(g,f,f,f,f,f,f,A.l(f,f,p?C.cl:B.c,f,f,f,f,f,f,f,f,12.3,f,f,f,f,1.35,!0,f,f,f,f,f,f,f,f),f,f,f)],k))}l=A.a([l,B.N,A.p(f,A.w(h,B.B,f,B.e,B.h,0,B.p),B.f,f,f,new A.o(j,f,f,i,f,f,B.m),f,f,f,f,B.iP,f,f,1/0)],k)
if(a2==="ENTER"&&x.f.b(a5.h(0,a0)))B.d.u(l,A.a([B.N,A.A(A.a([A.E(D.hJr(a4,"Trade for",B.i.a5(D.c4(D.dE(a5.h(0,a0)).h(0,"durationMin")),0)+" min",a1),1),A.E(D.hJr(a4,"Enter at","next "+B.i.a5(D.c4(D.dE(a5.h(0,a0)).h(0,"candleMin")),0)+"-min candle",f),1)],k),B.l,f,B.e,B.h,0,f,f)],k))
if(v){a1=A.c("What this is based on",f,f,f,f,f,f,A.l(f,f,p?C.bT:C.bV,f,f,f,f,f,f,f,f,10.5,f,f,B.C,f,f,!0,f,f,f,f,f,f,f,f),f,f,f)
j=D.hoz(a4,B.fQ,"This "+q+" move started "+B.i.a5(D.c4(a6.h(0,"ageMin")),0)+" min ago.",f)
i=q==="up"?"Up":"Down"
k=A.a([B.R,a1,B.at,j,D.hoz(a4,B.asX,i+" moves on this market usually end after about "+B.i.a5(D.c4(a6.h(0,d)),0)+" min.",f)],k)
if(s){a1=B.i.a5(u,0)
s=B.i.a5(t,0)
j=B.i.S(r*100)
i=r>=0.5
h=i?"Reliable enough.":"Under half: unreliable."
i=i?C.cH:C.d5
k.push(D.hoz(a4,B.q4,"Of the last "+a1+" "+q+" moves here, "+s+" really went "+q+" ("+j+"%). "+h,i))}B.d.u(l,k)}l.push(B.at)
l.push(A.c("Estimates from this market's recent moves, not promises.",f,f,f,f,f,f,A.l(f,f,p?C.bT:C.bV,f,f,f,f,f,f,f,f,10.5,f,f,f,f,f,!0,f,f,f,f,f,f,f,f),f,f,f))
return A.p(f,A.w(l,B.B,f,B.e,B.h,0,B.p),B.f,f,f,new A.o(o,f,m,n,f,f,B.m),f,f,f,f,B.bg,f,f,1/0)},
hoz(d,e,f,g){var w,v=null,u=g==null
if(u)w=d.a?C.bT:C.bV
else w=g
w=A.V(e,w,v,v,v,14)
if(u)u=d.a?C.cl:B.c
else u=g
return new A.C(B.HG,A.A(A.a([w,B.b6,A.E(A.c(f,v,v,v,v,v,v,A.l(v,v,u,v,v,v,v,v,v,v,v,12,v,v,v,v,1.35,!0,v,v,v,v,v,v,v,v),v,v,v),1)],x.p),B.B,v,B.e,B.h,0,v,v),v)},
hJr(d,e,f,g){var w=null,v=d.a,u=A.c(e,w,w,w,w,w,w,A.l(w,w,v?C.bT:C.bV,w,w,w,w,w,w,w,w,10.5,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)
if(g==null)v=v?C.cl:B.c
else v=g
return A.w(A.a([u,A.c(f,w,w,w,w,w,w,A.l(w,w,v,w,w,w,w,w,w,w,w,13.5,w,w,B.C,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),B.B,w,B.e,B.h,0,B.p)},
hMf(d){var w=J.a1(d),v=D.c4(w.h(d,"price"))
if(!J.z(w.h(d,"kind"),"forex"))return D.eg(v,!0,!1)
return B.i.a5(v,v>=100?3:5)},
hld(d,e){return new D.XY(d,e,null)},
hHJ(){var w=Math.max(0,$.aMv-1)
$.aMv=w
if(w===0){B.d.a6($.DD)
$.ahB=!1
$.hnT=""
$.fqS=$.fqS+1}},
eKS(d){var w
x.g.a(d)
w=d==null?B.bO:d
w=J.cK(w,x.f)
w=A.cs(w,new D.eKT(),w.$ti.k("M.E"),x.P)
w=A.B(w,A.a3(w).k("M.E"))
return w},
hHd(d){var w=J.t(d,"kind")
switch(J.k(w==null?"":w)){case"forex":w="Forex"
break
case"crypto":w="Crypto"
break
default:w="Stocks"
break}return w},
auj:function auj(d){this.a=d},
aHP:function aHP(d,e){var _=this
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
eJZ:function eJZ(d){this.a=d},
eK_:function eK_(d){this.a=d},
eJf:function eJf(d,e){this.a=d
this.b=e},
eJw:function eJw(d,e){this.a=d
this.b=e},
eJh:function eJh(d,e){this.a=d
this.b=e},
eJv:function eJv(d,e){this.a=d
this.b=e},
eJy:function eJy(d,e){this.a=d
this.b=e},
eJz:function eJz(d,e){this.a=d
this.b=e},
eJe:function eJe(){},
eJg:function eJg(d,e,f){this.a=d
this.b=e
this.c=f},
eJH:function eJH(){},
eJF:function eJF(d){this.a=d},
eJG:function eJG(d){this.a=d},
eJI:function eJI(d,e){this.a=d
this.b=e},
eJJ:function eJJ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eJo:function eJo(d){this.a=d},
eJB:function eJB(d){this.a=d},
eJC:function eJC(d,e){this.a=d
this.b=e},
eJD:function eJD(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eJA:function eJA(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eJE:function eJE(){},
eJY:function eJY(d){this.a=d},
eJT:function eJT(d){this.a=d},
eJU:function eJU(d){this.a=d},
eJ2:function eJ2(d){this.a=d},
eJ3:function eJ3(d){this.a=d},
eJ4:function eJ4(d){this.a=d},
eJ5:function eJ5(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eJ0:function eJ0(d){this.a=d},
eJ1:function eJ1(d,e){this.a=d
this.b=e},
eJ6:function eJ6(d){this.a=d},
eJ7:function eJ7(d){this.a=d},
eJP:function eJP(){},
eJQ:function eJQ(){},
eJR:function eJR(){},
eJS:function eJS(){},
eJL:function eJL(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eJK:function eJK(d){this.a=d},
eJO:function eJO(d,e){this.a=d
this.b=e},
eJN:function eJN(d){this.a=d},
eJj:function eJj(){},
eJk:function eJk(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eJl:function eJl(d){this.a=d},
eJn:function eJn(){},
eJm:function eJm(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
eJi:function eJi(d,e){this.a=d
this.b=e},
eJa:function eJa(d,e){this.a=d
this.b=e},
eJ9:function eJ9(d,e){this.a=d
this.b=e},
eJb:function eJb(d){this.a=d},
eJ8:function eJ8(d){this.a=d},
eJc:function eJc(){},
eIZ:function eIZ(d){this.a=d},
eJ_:function eJ_(){},
eJq:function eJq(){},
eJr:function eJr(){},
eJs:function eJs(){},
eJp:function eJp(){},
eJt:function eJt(d,e,f){this.a=d
this.b=e
this.c=f},
eJu:function eJu(d){this.a=d},
eJx:function eJx(d,e){this.a=d
this.b=e},
eJd:function eJd(d,e){this.a=d
this.b=e},
eIY:function eIY(d){this.a=d},
eJW:function eJW(){},
eJX:function eJX(d){this.a=d},
eJV:function eJV(d){this.a=d},
eIX:function eIX(d){this.a=d},
eIW:function eIW(d){this.a=d},
R6:function R6(d,e,f){this.a=d
this.c=e
this.d=f},
fMO:function fMO(d,e){this.a=d
this.b=e},
a_R:function a_R(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
bf0:function bf0(){this.c=this.a=this.d=null},
cY4:function cY4(d,e){this.a=d
this.b=e},
cYd:function cYd(d){this.a=d},
cYb:function cYb(d,e){this.a=d
this.b=e},
cY9:function cY9(d,e){this.a=d
this.b=e},
cYa:function cYa(d,e){this.a=d
this.b=e},
cY8:function cY8(d){this.a=d},
cY7:function cY7(d){this.a=d},
cYc:function cYc(d){this.a=d},
cY6:function cY6(d){this.a=d},
cY5:function cY5(d){this.a=d},
bf1:function bf1(d,e,f,g,h,i,j,k,l){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.w=j
_.x=k
_.a=l},
cYe:function cYe(d){this.a=d},
cYg:function cYg(d,e){this.a=d
this.b=e},
cYf:function cYf(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
bx1:function bx1(d,e,f){this.b=d
this.c=e
this.a=f},
fkk:function fkk(){},
z4:function z4(d,e,f){this.a=d
this.b=e
this.c=f},
fyU:function fyU(d){this.a=d},
fEk:function fEk(){},
RC:function RC(d){this.a=d},
fIF:function fIF(){},
fFq:function fFq(){},
fMI:function fMI(){},
OU:function OU(d,e){this.c=d
this.a=e},
aGK:function aGK(d){var _=this
_.d=null
_.e=d
_.f=!0
_.r=!1
_.x=_.w=null
_.Q=_.z=_.y=!1
_.c=_.a=_.as=null},
e9z:function e9z(d){this.a=d},
e91:function e91(d,e){this.a=d
this.b=e},
e90:function e90(){},
e9g:function e9g(d,e,f){this.a=d
this.b=e
this.c=f},
e9f:function e9f(){},
e9m:function e9m(d,e){this.a=d
this.b=e},
e9n:function e9n(d,e,f){this.a=d
this.b=e
this.c=f},
e9x:function e9x(d){this.a=d},
e9y:function e9y(d){this.a=d},
e8V:function e8V(d,e){this.a=d
this.b=e},
e9d:function e9d(){},
e9e:function e9e(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e8Z:function e8Z(d){this.a=d},
e9_:function e9_(){},
e8W:function e8W(){},
e8X:function e8X(d){this.a=d},
e8Y:function e8Y(d,e){this.a=d
this.b=e},
e97:function e97(){},
e9k:function e9k(d){this.a=d},
e9l:function e9l(d){this.a=d},
e9i:function e9i(){},
e9j:function e9j(d){this.a=d},
e94:function e94(){},
e96:function e96(){},
e95:function e95(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e93:function e93(d,e){this.a=d
this.b=e},
e92:function e92(d,e){this.a=d
this.b=e},
e8T:function e8T(){},
e8U:function e8U(){},
e9o:function e9o(d){this.a=d},
e9a:function e9a(){},
e9b:function e9b(d,e,f){this.a=d
this.b=e
this.c=f},
e9c:function e9c(d){this.a=d},
e99:function e99(d){this.a=d},
e98:function e98(d){this.a=d},
e9v:function e9v(){},
e9w:function e9w(d){this.a=d},
e9u:function e9u(d){this.a=d},
e9t:function e9t(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
e9q:function e9q(){},
e9s:function e9s(){},
e9r:function e9r(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
e9p:function e9p(d){this.a=d},
e8S:function e8S(d){this.a=d},
e8R:function e8R(d){this.a=d},
e9h:function e9h(){},
aBD:function aBD(d,e,f){this.c=d
this.d=e
this.a=f},
bfI:function bfI(){this.c=this.a=this.d=null},
db4:function db4(d){this.a=d},
db3:function db3(){},
fJw:function fJw(){},
fJx:function fJx(d,e){this.a=d
this.b=e},
fNe:function fNe(){},
aKX:function aKX(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bwn:function bwn(){this.c=this.a=this.d=null},
fia:function fia(d){this.a=d},
fi9:function fi9(){},
fi8:function fi8(){},
aCW:function aCW(d,e){this.c=d
this.a=e},
biz:function biz(){this.c=this.a=this.d=null},
djs:function djs(d){this.a=d},
djr:function djr(){},
fzJ:function fzJ(){},
cH:function cH(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
uz:function uz(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
XY:function XY(d,e,f){this.c=d
this.d=e
this.a=f},
a_X:function a_X(d,e){this.a=d
this.b=e},
aHQ:function aHQ(d,e,f,g,h,i,j,k,l){var _=this
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
eK9:function eK9(){},
eKY:function eKY(d){this.a=d},
eKX:function eKX(){},
eKZ:function eKZ(d){this.a=d},
eL_:function eL_(d){this.a=d},
eKW:function eKW(d,e){this.a=d
this.b=e},
eL0:function eL0(d){this.a=d},
eKT:function eKT(){},
eKu:function eKu(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eKD:function eKD(d){this.a=d},
eKc:function eKc(d){this.a=d},
eKd:function eKd(d,e){this.a=d
this.b=e},
eKe:function eKe(d){this.a=d},
eKf:function eKf(d){this.a=d},
eKb:function eKb(d,e){this.a=d
this.b=e},
eKa:function eKa(d,e){this.a=d
this.b=e},
eKC:function eKC(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eKB:function eKB(){},
eKQ:function eKQ(){},
eKR:function eKR(){},
eKi:function eKi(d){this.a=d},
eKj:function eKj(){},
eKk:function eKk(){},
eK5:function eK5(d,e){this.a=d
this.b=e},
eK6:function eK6(){},
eK7:function eK7(){},
eK8:function eK8(){},
eKE:function eKE(d){this.a=d},
eKU:function eKU(d){this.a=d},
eKV:function eKV(d,e){this.a=d
this.b=e},
eKh:function eKh(d){this.a=d},
eKg:function eKg(d,e){this.a=d
this.b=e},
eKA:function eKA(d,e){this.a=d
this.b=e},
eKw:function eKw(d,e){this.a=d
this.b=e},
eKx:function eKx(d,e){this.a=d
this.b=e},
eKv:function eKv(d,e,f){this.a=d
this.b=e
this.c=f},
eKy:function eKy(d,e){this.a=d
this.b=e},
eKz:function eKz(d){this.a=d},
eKl:function eKl(d,e,f){this.a=d
this.b=e
this.c=f},
eKt:function eKt(d){this.a=d},
eKm:function eKm(){},
eKn:function eKn(){},
eKo:function eKo(){},
eKp:function eKp(){},
eKq:function eKq(){},
eKr:function eKr(){},
eKs:function eKs(){},
eKJ:function eKJ(d,e){this.a=d
this.b=e},
eKK:function eKK(){},
eKM:function eKM(d,e){this.a=d
this.b=e},
eKI:function eKI(d,e){this.a=d
this.b=e},
eKL:function eKL(d){this.a=d},
eKN:function eKN(d){this.a=d},
eKH:function eKH(d){this.a=d},
eKO:function eKO(d){this.a=d},
eKG:function eKG(d,e){this.a=d
this.b=e},
eKP:function eKP(d,e){this.a=d
this.b=e},
eKF:function eKF(){},
eK1:function eK1(d){this.a=d},
eK2:function eK2(d,e){this.a=d
this.b=e},
eK0:function eK0(d,e){this.a=d
this.b=e},
eK3:function eK3(d,e){this.a=d
this.b=e},
eK4:function eK4(d){this.a=d},
a0Y:function a0Y(d,e,f,g,h,i,j,k,l,m){var _=this
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
blK:function blK(d){var _=this
_.x=_.w=_.r=_.f=_.e=_.d=$
_.y=d
_.c=_.a=_.z=null},
dw3:function dw3(){},
dw4:function dw4(){},
dw1:function dw1(){},
dw2:function dw2(){},
dw_:function dw_(d){this.a=d},
dw0:function dw0(d){this.a=d},
dvZ:function dvZ(d){this.a=d},
dvS:function dvS(){},
dvT:function dvT(){},
dvU:function dvU(d){this.a=d},
dvV:function dvV(d){this.a=d},
dvQ:function dvQ(d,e,f){this.a=d
this.b=e
this.c=f},
dvW:function dvW(d){this.a=d},
dvX:function dvX(d,e){this.a=d
this.b=e},
dvY:function dvY(d,e){this.a=d
this.b=e},
dvR:function dvR(d,e,f){this.a=d
this.b=e
this.c=f},
aPS:function aPS(){}},C,H,M,S,T,U,F,N,O,V,W
J=c[1]
A=c[0]
B=c[2]
P=c[124]
Q=c[210]
E=c[249]
I=c[147]
R=c[183]
K=c[237]
G=c[248]
L=c[208]
D=a.updateHolder(c[21],D)
C=c[247]
H=c[149]
M=c[252]
S=c[125]
T=c[155]
U=c[251]
F=c[235]
N=c[48]
O=c[250]
V=c[193]
W=c[132]
D.auj.prototype={
R(){return new D.aHP(A.a([],x.t),A.mo(0,null,null))}}
D.aHP.prototype={
Z(){var w=this
w.a3()
$.aMv=$.aMv+1
w.a.toString
w.aeZ()
w.Bb()
w.yW(!1).bD(new D.eJZ(w),x.H)
w.ch=A.d4(B.o2,new D.eK_(w))},
Bb(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m
var $async$Bb=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.aB(),$async$Bb)
case 7:q=e
p=A.aV(J.t(q.a,"ngmy_signal_grid_status_cache"))
if(p==null||r.c==null||r.d!=null){w=1
break}o=A.a_(x.f.a(B.V.aP(0,p,null)),x.N,x.z)
r.l(new D.eJf(r,o))
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
return A.i($async$Bb,v)},
a3B(d){return this.czQ(d)},
czQ(d){var w=0,v=A.j(x.H),u=1,t=[],s,r,q
var $async$a3B=A.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:u=3
w=6
return A.b(A.aB(),$async$a3B)
case 6:s=f
w=7
return A.b(s.aB("String","ngmy_signal_grid_status_cache",B.V.au(d,null)),$async$a3B)
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
return A.i($async$a3B,v)},
t(){var w=this.ch
if(w!=null)w.a1(0)
this.as.t()
D.hHJ()
this.a2()},
csx(d){var w=this
if(!w.at&&d>0){w.at=!0
$.aS.U$.push(new D.eJw(w,d))}return w.as},
aeZ(){var w=0,v=A.j(x.H),u=1,t=[],s=this,r,q,p,o
var $async$aeZ=A.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:u=3
w=6
return A.b(A.aB(),$async$aeZ)
case 6:r=e
q=A.aV(J.t(r.a,"ngmy_signal_grid_market"))
if(q!=null&&q.length!==0&&s.c!=null&&s.Q==null)s.l(new D.eJh(s,q))
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
return A.i($async$aeZ,v)},
a2t(d){return this.cs2(d)},
cs2(d){var w=0,v=A.j(x.H),u=1,t=[],s=this,r,q,p
var $async$a2t=A.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:s.l(new D.eJv(s,d))
u=3
w=6
return A.b(A.aB(),$async$a2t)
case 6:r=f
w=7
return A.b(r.aB("String","ngmy_signal_grid_market",d),$async$a2t)
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
return A.i($async$a2t,v)},
yW(d){return this.cxp(d)},
cxp(d){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$yW=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.x?null:t.bVR()
w=3
return A.b(A.fJ(A.J(["action","paStatus","live",d],x.N,x.z),!1,!1,!1,!1,B.x4),$async$yW)
case 3:q=f
if(t.c==null){w=1
break}t.l(new D.eJy(t,q))
if(q!=null&&J.z(J.t(q,"ok"),!0))t.a3B(q)
w=r!=null?4:5
break
case 4:w=6
return A.b(r,$async$yW)
case 6:s=f
if(t.c!=null&&s!=null&&t.d!=null)t.l(new D.eJz(t,s))
case 5:case 1:return A.h(u,v)}})
return A.i($async$yW,v)},
Zp(d){return this.bVS(d)},
bVR(){return this.Zp(0)},
bVS(d){var w=0,v=A.j(x.i),u,t,s
var $async$Zp=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(A.fJ(A.J(["action","paLog","limit",30,"beforeId",d],x.N,x.z),!1,!1,!1,!1,B.hc),$async$Zp)
case 3:s=f
if(s==null||!J.z(J.t(s,"ok"),!0)){u=null
w=1
break}t=x.g.a(J.t(s,"rows"))
if(t==null)t=B.bO
t=J.cK(t,x.f)
t=A.cs(t,new D.eJe(),t.$ti.k("M.E"),x.P)
t=A.B(t,A.a3(t).k("M.E"))
u=t
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$Zp,v)},
a_n(d){return this.c8b(d)},
c8a(){return this.a_n(!1)},
c8b(d){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a_n=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=d&&J.cL(t.e)?J.t(J.Ts(t.e),"id"):0
w=3
return A.b(t.Zp(s==null?0:s),$async$a_n)
case 3:r=f
if(t.c==null||r==null){w=1
break}t.l(new D.eJg(t,d,r))
case 1:return A.h(u,v)}})
return A.i($async$a_n,v)},
zh(d){return this.cCn(d)},
cCn(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$zh=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:p=t.d
o=D.dE(p==null?null:J.t(p,"state"))
w=d&&J.z(o.h(0,"brakePaused"),!0)?3:4
break
case 3:p=t.c
p.toString
w=5
return A.b(A.cf(null,null,!0,null,new D.eJH(),p,null,!0,!0,x.y),$async$zh)
case 5:if(f!==!0){w=1
break}case 4:s=t.d
t.l(new D.eJI(t,d))
w=6
return A.b(A.fJ(A.J(["action","paSet","enabled",d],x.N,x.z),!1,!1,!1,!1,B.hc),$async$zh)
case 6:r=f
if(t.c==null){w=1
break}p=r==null
q=J.z(p?null:J.t(r,"ok"),!0)
t.l(new D.eJJ(t,q,r,s))
if(q)p=d?"Agent started.":"Agent stopped."
else{p=p?null:J.t(r,"error")
p=J.k(p==null?"Could not change it.":p)}t.b3X(p,q?C.cH:C.d5)
if(q)t.c8a()
case 1:return A.h(u,v)}})
return A.i($async$zh,v)},
cmV(){var w=this.c
w.toString
A.a8(w,!1).ca(A.e7(new D.eJo(this),!1,null,x.H))},
a3N(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$a3N=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t.l(new D.eJB(t))
w=3
return A.b(A.fJ(A.J(["action","paCheck"],x.N,x.z),!1,!1,!1,!1,B.o2),$async$a3N)
case 3:s=e
if(t.c==null){w=1
break}t.l(new D.eJC(t,s))
r=s==null
if(!J.z(r?null:J.t(s,"ok"),!0)){r=r?null:J.t(s,"error")
t.b3X(J.k(r==null?"The check did not finish.":r),C.d5)
w=1
break}r=t.c
r.toString
r=A.Q(r).ax.a===B.dg
s.toString
q=D.dE(D.dE(J.t(s,"state")).h(0,"snapshot"))
p=t.c
p.toString
o=r?C.tb:C.t9
w=4
return A.b(A.bV(o,null,new D.eJD(t,new D.RC(r),q,s),p,!0,!0,!0,B.aUD,!1,!1,x.H),$async$a3N)
case 4:case 1:return A.h(u,v)}})
return A.i($async$a3N,v)},
cAx(d,e,f,g){var w,v,u,t,s,r=null,q=D.fEj(e)
B.d.b_(q,new D.eJE())
w=d.a
v=w?C.oO:C.oJ
v=A.at(A.p(r,r,B.f,r,r,new A.o(v,r,r,A.m(9),r,r,B.m),r,4,r,r,r,r,r,40),r,r,r)
u=A.c("What the agent sees right now",r,r,r,r,r,r,A.l(r,r,w?C.cl:B.c,r,r,r,r,r,r,r,r,19,r,r,B.u,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
t=J.z(f.h(0,"enabled"),!0)?" (next one "+D.hLj()+")":" (the agent is stopped, so none will be made)"
v=A.a([v,B.aB,u,B.at,A.c("Check now only looks. It never buys or sells. Trades are made only by the automatic check every 5 minutes"+t+".",r,r,r,r,r,r,A.l(r,r,w?C.bT:C.bV,r,r,r,r,r,r,r,r,12.5,r,r,r,r,1.35,!0,r,r,r,r,r,r,r,r),r,r,r),B.af],x.p)
for(w=q.length,s=0;s<q.length;q.length===w||(0,A.I)(q),++s)v.push(D.hMl(d,q[s],!0,r))
return A.co(v,g,r,B.aoe,r,r,B.ah,!1)},
b3X(d,e){var w=null
this.c.K(x.q).f.T(A.b0(w,w,w,e,w,B.t,w,A.c(d,w,w,w,w,w,w,w,w,w,w),w,B.Z,w,w,w,w,w,w,w,w,w,w))},
B(d){var w,v=this,u=null,t=A.Q(d).ax.a===B.dg,s=new D.RC(t),r=t?C.tb:C.t9,q=t?C.tb:C.t9
q=A.a([q,t?C.Oc:C.O5],x.O)
w=v.chu(s)
if(v.f)t=B.l2
else{if(v.d==null){t=v.ay
t=A.a([v.ab7(s,t==null?"Nothing to show yet.":t,B.b_)],x.p)}else t=v.bJd(0,s)
t=A.Gf(A.co(t,u,u,C.aov,u,u,B.ah,!1),u,new D.eJY(v))}return A.c6(u,r,A.p(u,A.bo(!0,A.w(A.a([w,A.E(t,1)],x.p),B.l,u,B.e,B.h,0,B.p),!0,!1,B.ag,!0,!0),B.f,u,u,new A.o(u,u,u,u,u,new A.a6(B.aU,B.b1,B.w,q,u,u),B.m),u,u,u,u,u,u,u,u),u,!1,!1,u,u)},
chu(d){var w,v,u,t,s,r=this,q=null,p=r.d,o=D.dE(p==null?q:J.t(p,"state")),n=J.z(o.h(0,"brakePaused"),!0),m=J.z(o.h(0,"enabled"),!0)&&!n
p=r.b3V(d,B.eE,new D.eJT(r))
w=d.a
v=x.p
u=A.a([A.c("Signal Grid",q,1,B.a2,q,q,q,A.l(q,q,w?C.cl:B.c,q,q,q,q,q,q,q,q,17,q,q,B.C,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],v)
if(r.d==null)u.push(A.c("Trading agent",q,1,B.a2,q,q,q,A.l(q,q,w?C.bT:C.bV,q,q,q,q,q,q,q,q,11.5,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q))
else{if(n)t=C.d5
else if(m)t=C.cH
else t=w?C.bT:C.bV
t=A.V(B.no,t,q,q,q,7)
if(n)s="Paused"
else s=m?"Running":"Stopped"
if(n)w=C.d5
else if(m)w=C.cH
else w=w?C.bT:C.bV
u.push(A.A(A.a([t,B.da,new A.d0(1,B.c9,A.c(s,q,1,B.a2,q,q,q,A.l(q,q,w,q,q,q,q,q,q,q,q,11.5,q,q,B.C,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),q)],v),B.l,q,B.e,B.P,0,q,q))}p=A.a([p,B.ar,A.E(A.A(A.a([new A.d0(1,B.c9,A.w(u,B.B,q,B.e,B.h,0,B.p),q)],v),B.l,q,B.e,B.h,0,q,q),1)],v)
if(r.d!=null)B.d.u(p,A.a([B.aa,r.bcl(d,"options","Options",B.fP,B.az),B.aa,r.bcl(d,"scalper","Scalper",B.rr,B.as)],v))
p.push(B.aa)
p.push(r.b3V(d,B.mE,r.r?q:new D.eJU(r)))
return new A.C(B.hd,A.A(p,B.l,q,B.e,B.h,0,q,q),q)},
bJd(c4,c5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9=this,c0=null,c1="asset",c2="liveError",c3=b9.d
c3.toString
w=J.a1(c3)
v=D.dE(w.h(c3,"state"))
u=D.dE(w.h(c3,"config"))
t=D.dE(v.h(0,"snapshot"))
s=x.f
r=s.b(v.h(0,"shadow"))?D.dE(v.h(0,"shadow")):c0
q=D.fEj(t)
p=A.U(q).k("X<1>")
o=A.B(new A.X(q,new D.eJ2(r),p),p.k("M.E"))
n=o.length===0?q:o
m=b9.Q!=null&&B.d.aR(n,new D.eJ3(b9))?b9.Q:c0
if(m==null){p=r==null?c0:r.h(0,"symbol")
if(p==null)p=t.h(0,c1)
l=p==null?c0:J.k(p)}else l=m
k=B.d.dr(n,new D.eJ4(l),new D.eJ5(q,l,n,t))
p=r==null
j=p?c0:B.d.dr(q,new D.eJ6(r),new D.eJ7(k))
p=!p
i=p&&J.z(r.h(0,"symbol"),J.t(k,c1))?r:c0
h=b9.c9E(c5,c3,n,k,r)
g=D.dE(w.h(c3,"market"))
f=J.a1(k)
e=f.h(k,c1)
d=J.k(e==null?"SPY":e)
a0=B.a.q(d,"/")
a1=D.bFM(k)
a2=D.c4(f.h(k,"price"))
a3=a1.length!==0?D.c4(J.t(B.d.gG(a1),"c")):0
a4=a3===0?0:(a2-a3)/a3*100
a5=a4>=0
if(a0)a6=!0
else{e=f.h(k,"open")
if(e==null)e=g.h(0,"stockOpen")
a6=e==null?g.h(0,"open"):e}if(a0)a7="Crypto \xb7 the agent trades it on Saturday and Sunday only"
else{e=J.kT(a6)
if(e.A(a6,!0))a7="Stock market open \xb7 the agent trades it on weekdays \xb7 closes 4:00 PM ET"
else{e=e.A(a6,!1)?"Stock market closed"+b9.cO0(g.h(0,"nextOpen")):""
a7=e}}a8=D.fE0(d)
e=c5.a
a9=e?B.c.j(0.92):C.ib
b0=A.m(22)
b1=A.K(e?B.c:C.nf,B.r,1)
b2=A.a([new A.aa(0,B.H,c5.gIc(),B.cy,12)],x.V)
b3=D.bEp(d,30)
b4=a0?d:d+"/USD"
b4=A.c(b4,c0,c0,c0,c0,c0,c0,A.l(c0,c0,e?C.cl:B.c,c0,c0,c0,c0,c0,c0,c0,c0,17,c0,c0,B.C,c0,c0,!0,c0,c0,c0,c0,c0,c0,c0,c0),c0,c0,c0)
f=f.h(k,"name")
f=J.k(f==null?a8.a:f)
b5=x.p
f=A.A(A.a([b3,B.ar,b4,B.b6,new A.d0(1,B.c9,A.c(f,c0,c0,B.a2,c0,c0,c0,A.l(c0,c0,e?C.bT:C.bV,c0,c0,c0,c0,c0,c0,c0,c0,13,c0,c0,c0,c0,c0,!0,c0,c0,c0,c0,c0,c0,c0,c0),c0,c0,c0),c0)],b5),B.l,c0,B.e,B.h,0,c0,c0)
b3=a2===0?"\u2014":D.eg(a2,!1,!1)
b3=A.a([A.E(new A.d6(B.dn,B.a5,B.f,A.c(b3,c0,c0,c0,c0,c0,c0,A.l(c0,c0,e?C.cl:B.c,c0,c0,c0,c0,c0,c0,c0,G.AE,34,c0,c0,B.O,c0,c0,!0,c0,-1,c0,c0,c0,c0,c0,c0),c0,c0,c0),c0),1)],b5)
if(a1.length>1){b4=(a5?C.cH:C.d5).j(0.14)
b6=A.m(10)
b7=a5?L.a4i:B.Ii
b7=A.V(b7,a5?C.cH:C.d5,c0,c0,c0,20)
b8=B.i.a5(Math.abs(a4),2)
b3.push(A.p(c0,A.A(A.a([b7,A.c(b8+"%",c0,c0,c0,c0,c0,c0,A.l(c0,c0,a5?C.cH:C.d5,c0,c0,c0,c0,c0,c0,c0,c0,13,c0,c0,B.C,c0,c0,!0,c0,c0,c0,c0,c0,c0,c0,c0),c0,c0,c0)],b5),B.l,c0,B.e,B.P,0,c0,c0),B.f,c0,c0,new A.o(b4,c0,c0,b6,c0,c0,B.m),c0,c0,c0,c0,B.h0,c0,c0,c0))}f=A.a([f,B.N,A.A(b3,B.l,c0,B.e,B.h,0,c0,c0)],b5)
if(a7.length!==0){if(J.z(a6,!0))b3=C.cH
else b3=e?C.bT:C.bV
b3=A.V(B.no,b3,c0,c0,c0,7)
b4=a1.length>1?"  \xb7  change over 4H":""
B.d.u(f,A.a([B.at,A.A(A.a([b3,B.b6,new A.d0(1,B.c9,A.c(a7+b4,c0,c0,B.a2,c0,c0,c0,A.l(c0,c0,e?C.bT:C.bV,c0,c0,c0,c0,c0,c0,c0,c0,12,c0,c0,c0,c0,c0,!0,c0,c0,c0,c0,c0,c0,c0,c0),c0,c0,c0),c0)],b5),B.l,c0,B.e,B.h,0,c0,c0)],b5))}h=A.a([h,A.p(c0,A.w(f,B.B,c0,B.e,B.h,0,B.p),B.f,c0,c0,new A.o(a9,c0,b1,b0,b2,c0,B.m),c0,c0,c0,B.dV,B.f_,c0,c0,c0)],b5)
f=u.h(0,"problem")
if(J.k(f==null?"":f).length!==0)h.push(b9.ab7(c5,J.k(u.h(0,"problem")),E.i1))
f=w.h(c3,c2)
if(J.k(f==null?"":f).length!==0)h.push(b9.ab7(c5,J.k(w.h(c3,c2)),C.d5))
if(J.z(v.h(0,"brakePaused"),!0)){f=D.dE(w.h(c3,"ticket")).h(0,"totalBrakeUsd")
f=B.i.a5(D.c4(f==null?200:f),0)
a9=v.h(0,"brakeReason")
h.push(b9.ab7(c5,"Paused by the $"+f+" brake. "+A.v(a9==null?"":a9)+y.g,C.d5))}h.push(b9.bMd(c5,k,i))
h.push(b9.bIR(c5,c3,v,t))
if(s.b(w.h(c3,"pace")))h.push(b9.aBS(c5,c3))
if(p){j.toString
h.push(b9.csZ(c5,r,j,D.dE(w.h(c3,"ticket")),D.dE(t.h(0,"held"))))}h.push(b9.aBb(c5,v))
h.push(b9.bIG(c5,v,c3))
h.push(b9.cL_(c5,c3))
h.push(b9.bFP(c5))
h.push(b9.czq(c5,c3))
c3=e?B.c.j(0.92):C.ib
w=A.m(16)
s=A.K(e?B.c:C.nf,B.r,1)
p=A.V(B.kq,C.cH,c0,c0,c0,18)
f=J.z(u.h(0,"ordersSwitchOn"),!0)?"on":"off"
h.push(A.p(c0,A.A(A.a([p,B.aa,A.E(A.c("No order is ever sent to Alpaca. Order switch: "+f+".",c0,c0,c0,c0,c0,c0,A.l(c0,c0,e?C.bT:C.bV,c0,c0,c0,c0,c0,c0,c0,c0,11.5,c0,c0,c0,c0,1.3,!0,c0,c0,c0,c0,c0,c0,c0,c0),c0,c0,c0),1)],b5),B.l,c0,B.e,B.h,0,c0,c0),B.f,c0,c0,new A.o(c3,c0,s,w,c0,c0,B.m),c0,c0,c0,H.anB,B.ep,c0,c0,c0))
return h},
cJW(d,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=null,g=D.dE(J.t(a0,"market")),f=x.g,e=f.a(g.h(0,"activeMarkets"))
if(e==null)e=B.bO
w=x.N
e=J.b8(e,new D.eJP(),w)
v=A.B(e,e.$ti.k("aj.E"))
f=f.a(g.h(0,"todaysList"))
if(f==null)f=B.bO
w=J.b8(f,new D.eJQ(),w)
u=A.B(w,w.$ti.k("aj.E"))
t=J.z(g.h(0,"weekend"),!0)
if(a1==null)s=h
else{f=a1.h(0,"symbol")
s=f==null?h:J.k(f)}r=s!=null&&u.length!==0&&!B.d.q(u,s)
q=new A.X(v,new D.eJR(),A.U(v).k("X<1>")).gJ(0)
f=v.length
if(f!==0){f=f-q>0
e=""+q
p=f?"TRADING NOW: 10 STOCKS + "+e+" CRYPTO":"TRADING NOW: ALL "+e+" CRYPTO"
if(f)f=", plus the 10 stocks while the stock market is open"
else f=t?" (stocks trade on weekdays)":" (the stocks trade 9:30 AM to 4:00 PM ET)"
o="The 15 liquid crypto majors, around the clock"+f+". All of them are checked at the same time, every 5 minutes, and the agent buys the valid entry with the strongest 1-hour move. One trade at a time, at most 20 trades today (a maximum, never a target)."}else{f=A.U(u).k("X<1>")
o="Crypto trades around the clock and the 10 stocks ("+A.pg(new A.X(u,new D.eJS(),f),10,f.k("M.E")).aL(0,", ")+") while the stock market is open. The market list is loading."
p="NO MARKET TRADED RIGHT NOW"}f=(v.length===0?h:B.d.gG(v))==null
n=f?E.i1:C.cH
e=d.a
w=e?B.c.j(0.92):C.ib
m=A.m(22)
l=A.K(n.j(0.55),B.r,1)
k=A.V(!f?B.IL:B.vs,n,h,h,h,26)
j=A.c(p,h,h,h,h,h,h,A.l(h,h,n,h,h,h,h,h,h,h,h,13.5,h,h,B.u,h,h,!0,h,0.3,h,h,h,h,h,h),h,h,h)
f=A.c(o,h,h,h,h,h,h,A.l(h,h,e?C.cl:B.c,h,h,h,h,h,h,h,h,12,h,h,h,h,1.3,!0,h,h,h,h,h,h,h,h),h,h,h)
i=x.p
f=A.a([j,B.cQ,f,B.cQ,A.c("Buys only when the fast line crosses up AND the big trend is rising (slow line higher than 1 hour ago, price above it) AND the market moved +0.4% or more in the last hour.",h,h,h,h,h,h,A.l(h,h,e?C.bT:C.bV,h,h,h,h,h,h,h,h,11,h,h,h,h,1.3,!0,h,h,h,h,h,h,h,h),h,h,h)],i)
if(r)B.d.u(f,A.a([B.at,A.c("Still holding the "+s+" trade from before: the agent keeps checking its exits every 5 minutes.",h,h,h,h,h,h,C.fLF,h,h,h)],i))
return A.p(h,A.A(A.a([k,B.ar,A.E(A.w(f,B.B,h,B.e,B.h,0,B.p),1)],i),B.B,h,B.e,B.h,0,h,h),B.f,h,h,new A.o(w,h,l,m,h,h,B.m),h,h,h,h,B.bR,h,h,h)},
cEN(d,e,f){var w=null,v=this.c
v.toString
A.cf(w,w,!0,w,new D.eJL(this,d,e,f),v,w,!0,!0,x.H)},
bcl(d,e,f,g,h){var w,v,u,t,s,r,q,p,o=null,n=x.N,m=A.S(n,x.P),l=this.d
l=x.g.a(D.dE(l==null?o:J.t(l,"fast")).h(0,"systems"))
if(l==null)l=B.bO
l=J.cK(l,x.f)
w=J.aQ(l.a)
l=l.$ti
v=new A.jz(w,l.k("jz<1>"))
u=x.z
l=l.c
while(v.C()){t=l.a(w.gP(w))
s=A.v(J.t(t,"id"))
t=A.a_(t,n,u)
m.n(0,s,t)}r=m.h(0,e)
if(r==null)r=B.cD
q=J.z(r.h(0,"enabled"),!0)
p=r.h(0,"holding")!=null
if(p)n=" \xb7 holding "+A.v(r.h(0,"holding"))
else n=q?" \xb7 running":" \xb7 stopped"
m=A.m(11)
l=A.m(11)
l=A.a([A.p(o,A.V(g,B.c,o,o,o,20),B.f,o,o,new A.o(h,o,o,l,o,o,B.m),o,34,o,o,o,o,o,34)],x.p)
if(q||p){w=p?F.qQ:C.cH
l.push(A.ao(o,A.p(o,o,B.f,o,o,new A.o(w,o,A.K(d.a?C.tb:C.t9,B.r,2),o,o,o,B.a6),o,11,o,o,o,o,o,11),o,o,o,-2,-2,o))}return A.hb(A.dB(o,!0,o,A.aM(!1,m,!0,new A.a4(34,34,new A.am(B.a0,o,B.ac,B.f,l,o),o),o,!0,o,o,o,o,o,o,o,o,o,o,o,new D.eJO(this,e),o,o,o,o,o,o,o),!1,o,o,o,o,!1,o,!1,o,o,o,o,o,o,o,o,o,o,f,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,B.cc,o),o,f+n,o,o,o)},
cLj(d){var w,v,u,t,s,r,q,p,o=null,n=J.a1(d)
if(J.z(n.h(d,"open"),!0)){w=D.dE(n.h(d,"chart")).h(0,"trend")
n=w==null?n.h(d,"trend"):w
v=J.k(n==null?"unknown":n)}else v="waiting"
switch(v){case"up":n=C.fgA
break
case"down":n=C.fha
break
default:n=C.fjK
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
return A.dB(o,o,o,A.p(o,A.A(A.a([A.V(t,p,o,o,o,12),B.uu,A.c(s,o,o,o,o,o,o,A.l(o,o,p,o,o,o,o,o,o,o,o,9,o,o,B.C,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],x.p),B.l,o,B.e,B.P,0,o,o),B.f,o,o,new A.o(n,o,o,w,o,o,B.m),o,o,o,o,V.apm,o,o,o),!1,o,o,o,o,!1,o,!1,o,o,o,o,o,o,o,o,o,o,"trend "+A.v(s),o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,B.cc,o)},
c9E(d,e,f,g,h){var w,v,u,t,s,r,q=this,p=null
if(f.length<2)return B.bK
w=new A.X(f,new D.eJj(),A.U(f).k("X<1>")).gJ(0)
v=d.a
u=A.c("Today's watchlist",p,p,p,p,p,p,A.l(p,p,v?C.cl:B.c,p,p,p,p,p,p,p,p,14,p,p,B.C,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)
t=w===0
s=t?"NONE TRADED NOW":""+w+" WATCHED NOW"
s=q.aBd(s,t?E.i1:C.cH)
r=A.hj5(!1,p,!0,new A.C(B.eD,A.V(B.kQ,t?E.i1:C.cH,p,p,p,19),p),!1,p,!0,!1,p,p,p,B.a6,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new D.eJk(q,d,e,h),p,p,p,p,20,p,p,p)
t=x.p
return new A.C(B.eC,A.w(A.a([new A.C(C.apk,A.A(A.a([u,B.aa,s,B.da,r,B.aX,A.c("tap one",p,p,p,p,p,p,A.l(p,p,v?C.bT:C.bV,p,p,p,p,p,p,p,p,11,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)],t),B.l,p,B.e,B.h,0,p,p),p),new A.a4(p,66,A.hN(B.f,q.csx(B.d.bl(f,new D.eJl(g))),new D.eJm(q,f,g,h,d),f.length,p,p,B.aK,new D.eJn(),!1),p),B.at],t),B.B,p,B.e,B.h,0,B.p),p)},
bMd(d,e,f){var w,v,u,t,s,r,q,p,o,n=this,m=null,l=D.bFM(e),k=l.length
if(k<2)return n.a19(d,new A.a4(m,120,A.at(A.c(y.b,m,m,m,m,m,m,A.l(m,m,d.a?C.bT:C.bV,m,m,m,m,m,m,m,m,m,m,m,m,m,m,!0,m,m,m,m,m,m,m,m),m,m,m),m,m,m),m))
w=B.d.fB(l,Math.max(0,k-n.z))
k=x.p
v=A.a([],k)
for(u=0;u<3;++u){t=C.coJ[u]
if(t<=12)s="1H"
else s=t<=24?"2H":"4H"
B.d.u(v,A.a([n.cBv(d,s,n.z===t,new D.eJa(n,t)),B.b6],k))}v.push(B.aX)
v.push(n.cLk(e))
v.push(B.b6)
v.push(n.b9A(d,"Trend lines",n.ax,new D.eJb(n),B.xz))
v=A.A(v,B.l,m,B.e,B.h,0,m,m)
s=n.ax
r=J.a1(e)
q=D.c4(r.h(e,"price"))
p=n.d
p=p==null?m:J.t(p,"trades")
x.g.a(p)
if(p==null)p=B.bO
p=J.cK(p,x.f)
p=A.cs(p,new D.eJc(),p.$ti.k("M.E"),x.P)
p=A.B(p,A.a3(p).k("M.E"))
o=r.h(e,"asset")
v=A.a([v,B.R,new D.a_R(w,d,m,s,q,D.hNk(p,A.v(o==null?r.h(e,"symbol"):o),F.qQ,f),m)],k)
if(n.ax)B.d.u(v,A.a([B.N,A.c_(B.fX,A.a([n.ayW(d,B.bE,"Fast line (45 min)"),n.ayW(d,B.b_,"Slow line (1 h 45 min)"),n.ayW(d,F.qQ,"Trade in")],k),B.br,m,4,14)],k))
return n.aBa(d,A.w(v,B.l,m,B.e,B.h,0,B.p),B.x7)},
cLk(d){var w,v,u,t,s,r,q=null,p=D.dE(J.t(d,"chart")).h(0,"trend")
switch(J.k(p==null?"unknown":p)){case"up":p=C.fiw
break
case"down":p=C.fiD
break
case"flat":p=C.fh2
break
default:p=C.fhV
break}w=p.a
v=q
u=q
t=p.b
s=p.c
u=s
v=t
r=w
p=A.m(10)
return A.hb(A.dB(q,q,q,A.p(q,A.V(v,B.c,q,q,q,20),B.f,q,q,new A.o(r,q,q,p,q,q,B.m),q,32,q,q,q,q,q,32),!1,q,q,q,q,!1,q,!1,q,q,q,q,q,q,q,q,q,q,u,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,B.cc,q),q,u,q,B.hnF,q)},
bIR(a9,b0,b1,b2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=null,e="equity",d=J.a1(b0),a0=D.dE(d.h(b0,"today")),a1=D.dE(d.h(b0,"record")),a2=D.dE(d.h(b0,"ticket")),a3=a1.h(0,"pnlSum")!=null?D.c4(a1.h(0,"pnlSum")):D.c4(b1.h(0,"totalPnl")),a4=D.c4(a0.h(0,"day_pnl")),a5=x.f,a6=a5.b(b1.h(0,"shadow"))?D.dE(b1.h(0,"shadow")):f,a7=a6!=null,a8=0
if(a7){w=D.dE(b2.h(0,"held"))
if(w.h(0,"pnl")!=null)a8=D.c4(w.h(0,"pnl"))
else if(!a5.b(a6.h(0,"option"))){v=D.c4(J.t(B.d.dr(D.fEj(b2),new D.eIZ(a6),new D.eJ_()),"price"))
if(v>0){a5=D.c4(a6.h(0,"qty"))
u=a6.h(0,"mult")==null?1:D.c4(a6.h(0,"mult"))
a8=a5*u*(v-D.c4(a6.h(0,"entryPrice")))}}}t=D.dE(a1.h(0,"newRules"))
s=t.h(0,"winRatePct")
r=D.c4(b2.h(0,e))
q=D.dE(d.h(b0,"fast"))
p=D.c4(q.h(0,"closed"))+D.c4(q.h(0,"open"))
o=a3+a8+p
d=A.m(26)
a5=A.a([new A.aa(0,B.H,B.i2.j(0.3),B.eP,24)],x.V)
u=x.p
n=A.A(A.a([C.b_3],u),B.l,f,B.e,B.h,0,f,f)
n=A.a([n,B.at,new A.d6(B.dn,B.a5,B.f,A.c(b2.h(0,e)==null?"\u2014":D.eg(r+a3+a8+p,!0,!1),f,f,f,f,f,f,C.fJt,f,f,f),f)],u)
if(b2.h(0,e)!=null){m=o>=0?L.a4i:B.Ii
l=o>0
if(l)k=C.cH
else k=o<0?C.d5:B.ab
k=A.V(m,k,f,f,f,f)
m=D.eg(o,!0,!0)
if(p!==0)a7=" (all systems)"
else a7=a7?" (incl. the open one)":""
if(l)l=C.cH
else l=o<0?C.d5:B.ab
n.push(A.A(A.a([k,A.c(m+" from trades"+a7,f,f,f,f,f,f,A.l(f,f,l,f,f,f,f,f,f,f,f,12.5,f,f,B.C,f,f,!0,f,f,f,f,f,f,f,f),f,f,f)],u),B.l,f,B.e,B.h,0,f,f))}n.push(B.bs)
n.push(A.c("Alpaca account "+D.eg(r,!0,!1)+" (unchanged, no orders are sent) \xb7 $"+B.i.a5(D.c4(a2.h(0,"amount")),0)+" a trade",f,f,f,f,f,f,B.FH,f,f,f))
n.push(B.aB)
a7=D.eg(a4,!0,!0)
if(a4>0)m=C.cH
else m=a4<0?C.d5:B.c
m=A.E(g.AV("Today",a7,m),1)
a7=D.eg(a3,!0,!0)
if(a3>0)l=C.cH
else l=a3<0?C.d5:B.c
l=A.E(g.AV("All time",a7,l),1)
a7=a1.h(0,"wins")
a7=A.v(a7==null?0:a7)
k=a1.h(0,"losses")
a7=A.A(A.a([m,B.aa,l,B.aa,A.E(g.AV("Wins / losses",a7+" / "+A.v(k==null?0:k),B.c),1)],u),B.l,f,B.e,B.h,0,f,f)
m=a0.h(0,"trades")
m=A.v(m==null?0:m)
l=a2.h(0,"maxTradesToday")
m=A.E(g.AV("Trades today",m+" of "+A.v(l==null?20:l),B.c),1)
l=a2.h(0,"dailyStopUsd")
l=A.E(g.AV("Daily stop","-$"+B.i.a5(D.c4(l==null?50:l),0),B.c),1)
k=a2.h(0,"totalBrakeUsd")
n.push(g.aRS("RESULTS AND LIMITS",A.a([a7,B.N,A.A(A.a([m,B.aa,l,B.aa,A.E(g.AV("Total brake","-$"+B.i.a5(D.c4(k==null?100:k),0),B.c),1)],u),B.l,f,B.e,B.h,0,f,f)],u)))
n.push(B.R)
a7=a2.h(0,"amount")
a7=B.i.a5(D.c4(a7==null?100:a7),0)
m=J.z(a2.h(0,"kind"),"crypto")?"a coin":"a stock"
m=A.E(g.AV("Buys","$"+a7+" of "+m,B.c),1)
a7=a2.h(0,"takeProfitUsd")
a7=A.E(g.AV("Take profit","+$"+B.i.a5(D.c4(a7==null?50:a7),0),C.cH),1)
l=a2.h(0,"stopLossUsd")
a7=A.A(A.a([m,B.aa,a7,B.aa,A.E(g.AV("Stop loss","-$"+B.i.a5(D.c4(l==null?50:l),0),C.d5),1)],u),B.l,f,B.e,B.h,0,f,f)
m=B.c.j(0.1)
l=A.m(14)
k=s==null
if(k)j="No $100 trades yet"
else{j=B.i.a5(D.c4(s),0)
i=t.h(0,"wins")
i=A.v(i==null?0:i)
h=t.h(0,"trades")
j=j+"%  \xb7  "+i+" won of "+A.v(h==null?0:h)}if(k)k=B.c
else k=D.c4(s)>=50?C.cH:C.d5
n.push(g.aRS("EACH TRADE",A.a([a7,B.N,A.p(f,A.A(A.a([A.E(A.w(A.a([C.h_M,B.bs,A.c(j,f,f,f,f,f,f,A.l(f,f,k,f,f,f,f,f,f,f,f,16,f,f,B.C,f,f,!0,f,f,f,f,f,f,f,f),f,f,f)],u),B.B,f,B.e,B.h,0,B.p),1),C.hgp],u),B.l,f,B.e,B.h,0,f,f),B.f,f,f,new A.o(m,f,f,l,f,f,B.m),f,f,f,f,B.ep,f,f,1/0)],u)))
return A.p(f,A.w(n,B.B,f,B.e,B.h,0,B.p),B.f,f,f,new A.o(f,f,f,d,a5,C.avp,B.m),f,f,f,B.dV,B.f5,f,f,f)},
aBS(a8,a9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=null,a0="brakeNote",a1=J.a1(a9),a2=D.dE(a1.h(a9,"pace")),a3=D.dE(a1.h(a9,"todayStats")),a4=D.dE(a1.h(a9,"market")),a5=a2.h(0,"target"),a6=B.i.M(D.c4(a5==null?20:a5)),a7=B.i.M(D.c4(a2.h(0,"trades")))
a5=x.g
w=a5.a(a2.h(0,"lines"))
if(w==null)w=B.bO
v=x.N
w=J.b8(w,new D.eJq(),v)
u=A.B(w,w.$ti.k("aj.E"))
w=a5.a(a4.h(0,"cryptoDropped"))
if(w==null)w=B.bO
w=J.b8(w,new D.eJr(),v)
t=A.B(w,w.$ti.k("aj.E"))
s=D.c4(a3.h(0,"pnl"))
w=a2.h(0,"dayNote")
r=J.k(w==null?"":w)
w=a5.a(a1.h(a9,"cooldowns"))
if(w==null)w=B.bO
w=J.cK(w,x.f)
q=A.B(w,w.$ti.k("M.E"))
a5=a5.a(a1.h(a9,"whyFix"))
if(a5==null)a5=B.bO
a5=J.b8(a5,new D.eJs(),v)
p=A.B(a5,a5.$ti.k("aj.E"))
a5=""+a6
w=a8.a
o=A.E(A.c("Trades today: "+a7+" of "+a5,d,d,d,d,d,d,A.l(d,d,w?C.cl:B.c,d,d,d,d,d,d,d,d,20,d,d,B.u,d,d,!0,d,d,d,d,d,d,d,d),d,d,d),1)
n=a7>=a6
a5=n?"MAX REACHED":"MAX "+a5
m=x.p
a5=A.A(A.a([o,this.aBd(a5,n?E.i1:C.cH)],m),B.l,d,B.e,B.h,0,d,d)
o=a2.h(0,"maxHold")
o=B.i.M(D.c4(o==null?120:o))
o=A.c("Max hold "+o+" min \xb7 exits checked every 5 min",d,d,d,d,d,d,A.l(d,d,w?C.bT:C.bV,d,d,d,d,d,d,d,d,12,d,d,B.C,d,1.3,!0,d,d,d,d,d,d,d,d),d,d,d)
n=A.cg(new D.eJt(a8,a7,a6))
l=a2.h(0,"checkpoints")
l=A.v(l==null?"":l)
a5=A.a([a5,B.bs,o,B.N,n,B.N,A.c(l,d,d,d,d,d,d,A.l(d,d,w?C.cl:B.c,d,d,d,d,d,d,d,d,11,d,d,B.O,d,1.3,!0,d,d,d,d,d,d,d,d),d,d,d)],m)
for(o=u.length,k=0;k<u.length;u.length===o||(0,A.I)(u),++k)a5.push(new A.C(B.rf,A.c(u[k],d,d,d,d,d,d,C.aYL,d,d,d),d))
if(r.length!==0)a5.push(new A.C(B.kO,A.c(r,d,d,d,d,d,d,C.fHr,d,d,d),d))
a5.push(B.N)
if(a3.h(0,"closed")==null||D.c4(a3.h(0,"closed"))===0)o="No closed trades today yet"
else{o=a3.h(0,"wins")
o=A.v(o==null?0:o)
n=a3.h(0,"losses")
o="Today: "+o+" won, "+A.v(n==null?0:n)+" lost ("+B.i.a5(D.c4(a3.h(0,"winRatePct")),0)+"%)"}o=A.E(A.c(o,d,d,d,d,d,d,A.l(d,d,w?C.cl:B.c,d,d,d,d,d,d,d,d,12.5,d,d,B.C,d,d,!0,d,d,d,d,d,d,d,d),d,d,d),1)
n=D.eg(s,!0,!0)
if(s>0)l=C.cH
else if(s<0)l=C.d5
else l=w?C.cl:B.c
a5.push(A.A(A.a([o,A.c(n,d,d,d,d,d,d,A.l(d,d,l,d,d,d,d,d,d,d,d,14,d,d,B.u,d,d,!0,d,d,d,d,d,d,d,d),d,d,d)],m),B.l,d,B.e,B.h,0,d,d))
a5.push(B.aj)
l=a4.h(0,"cryptoCount")
o=A.v(l==null?"?":l)
n=J.z(a4.h(0,"cryptoFromAlpaca"),!1)?" (Alpaca's list could not be read, using the main ones for now)":" (the liquid majors only, thin coins are never traded)"
l=J.z(a4.h(0,"weekend"),!0)?"":" plus the 10 stocks in market hours"
a5.push(A.c("Watching "+o+" crypto pairs around the clock"+n+l+".",d,d,d,d,d,d,A.l(d,d,w?C.bT:C.bV,d,d,d,d,d,d,d,d,11.5,d,d,d,d,1.3,!0,d,d,d,d,d,d,d,d),d,d,d))
if(t.length!==0)a5.push(A.c("Dropped today (no longer tradable on Alpaca): "+B.d.aL(t,", "),d,d,d,d,d,d,C.fPl,d,d,d))
a5.push(B.aj)
o=q.length===0?"Cooldown: no market is resting right now.":"Cooldown (closed flat, not traded again for 2 hours): "+new A.O(q,new D.eJu(new D.eJp()),A.U(q).k("O<1,n>")).aL(0,", ")
if(q.length===0)n=w?C.bT:C.bV
else n=E.i1
a5.push(A.c(o,d,d,d,d,d,d,A.l(d,d,n,d,d,d,d,d,d,d,d,11.5,d,d,B.O,d,1.3,!0,d,d,d,d,d,d,d,d),d,d,d))
if(p.length!==0){o=w?C.r1:C.r2
n=A.m(12)
l=A.a([],m)
for(v=A.aoB(p,0,v),j=J.aQ(v.a),v=v.b,i=new A.F8(j,v);i.C();){h=i.c
h=h>=0?new A.y(v+h,j.gP(j)):A.bi(A.fb())
g=h.a===0
f=g?0:3
if(g)e=w?C.cl:B.c
else e=w?C.bT:C.bV
g=g?B.C:B.cF
l.push(new A.C(new A.R(0,f,0,0),A.c(h.b,d,d,d,d,d,d,new A.F(!0,e,d,d,d,d,11.5,g,d,d,d,d,1.3,d,d,d,d,d,d,d,d,d,d,d,d,d),d,d,d),d))}B.d.u(a5,A.a([B.N,A.p(d,A.w(l,B.B,d,B.e,B.h,0,B.p),B.f,d,d,new A.o(o,d,d,n,d,d,B.m),d,d,d,d,B.bS,d,d,1/0)],m))}if(a1.h(a9,a0)!=null){a1=A.v(a1.h(a9,a0))
B.d.u(a5,A.a([B.aj,A.c(a1,d,d,d,d,d,d,A.l(d,d,w?C.bT:C.bV,d,d,d,d,d,d,d,d,11,d,d,d,d,1.3,!0,d,d,d,d,d,d,d,d),d,d,d)],m))}return this.a19(a8,A.w(a5,B.B,d,B.e,B.h,0,B.p))},
aRS(d,e){var w=null,v=B.v.j(0.14),u=A.m(18),t=A.K(B.c.j(0.16),B.r,1),s=A.a([new A.C(B.apd,A.c(d,w,w,w,w,w,w,C.fKv,w,w,w),w)],x.p)
B.d.u(s,e)
return A.p(w,A.w(s,B.B,w,B.e,B.h,0,B.p),B.f,w,w,new A.o(v,w,t,u,w,w,B.m),w,w,w,w,B.bS,w,w,1/0)},
AV(d,e,f){var w=null,v=B.c.j(0.1),u=A.m(14)
return A.p(w,A.w(A.a([A.c(d,w,1,B.a2,w,w,w,B.M_,w,w,w),B.bs,new A.d6(B.dn,B.a5,B.f,A.c(e,w,w,w,w,w,w,A.l(w,w,f,w,w,w,w,w,w,w,w,15,w,w,B.C,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w)],x.p),B.B,w,B.e,B.h,0,B.p),B.f,w,w,new A.o(v,w,w,u,w,w,B.m),w,w,w,w,B.anI,w,w,w)},
csZ(a9,b0,b1,b2,b3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=this,a1=null,a2="price",a3=D.c4(b0.h(0,"entryPrice")),a4=D.c4(b0.h(0,"qty")),a5=b0.h(0,"mult")==null?1:D.c4(b0.h(0,"mult")),a6=x.f.b(b0.h(0,"option"))?D.dE(b0.h(0,"option")):a1,a7=J.a1(b1),a8=J.z(b0.h(0,"symbol"),a7.h(b1,"asset"))
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
k=A.A(A.a([A.c("Your position",a1,a1,a1,a1,a1,a1,A.l(a1,a1,a7?C.cl:B.c,a1,a1,a1,a1,a1,a1,a1,a1,16,a1,a1,B.C,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1),B.aX,a0.aBd("OPEN",C.cH)],q),B.l,a1,B.e,B.h,0,a1,a1)
j=D.eg(t,!0,!0)
j=A.c(j,a1,a1,a1,a1,a1,a1,A.l(a1,a1,r?C.cH:C.d5,a1,a1,a1,a1,a1,a1,a1,a1,34,a1,a1,B.C,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1)
i=s>=0?"+":""
h=B.i.a5(s,2)
j=A.A(A.a([j,B.aa,new A.C(B.eC,A.c(i+h+"%",a1,a1,a1,a1,a1,a1,A.l(a1,a1,r?C.cH:C.d5,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,B.C,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1),a1)],q),B.dr,a1,B.e,B.h,0,a1,a1)
i=r?"You would be winning right now":"You would be losing right now"
k=A.a([k,B.af,j,A.c(i,a1,a1,a1,a1,a1,a1,A.l(a1,a1,a7?C.bT:C.bV,a1,a1,a1,a1,a1,a1,a1,a1,12.5,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1),B.aB],q)
j=a6!=null
if(j){i=a7?C.r1:C.r2
h=A.m(16)
g=A.c("1 SPY call option",a1,a1,a1,a1,a1,a1,A.l(a1,a1,a7?C.bT:C.bV,a1,a1,a1,a1,a1,a1,a1,a1,11.5,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1)
f=D.eg(D.c4(a6.h(0,"strike")),!0,!1)
e=D.aRj(a6.h(0,"expiry"))
f=A.c("Strike "+f+" \xb7 expires "+e,a1,a1,a1,a1,a1,a1,A.l(a1,a1,a7?C.cl:B.c,a1,a1,a1,a1,a1,a1,a1,a1,15,a1,a1,B.C,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1)
e=D.eg(a3,!0,!1)
d=D.eg(v,!0,!1)
B.d.u(k,A.a([A.p(a1,A.w(A.a([g,B.bs,f,B.bs,A.c("Premium paid "+e+" a share x 100 = "+d,a1,a1,a1,a1,a1,a1,A.l(a1,a1,a7?C.bT:C.bV,a1,a1,a1,a1,a1,a1,a1,a1,11.5,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1)],q),B.B,a1,B.e,B.h,0,B.p),B.f,a1,a1,new A.o(i,a1,a1,h,a1,a1,B.m),a1,a1,a1,a1,B.bg,a1,a1,1/0),B.N],q))}i=A.E(a0.aBe(a9,"You put in",D.eg(v,!0,!1)),1)
h=D.eg(u,!0,!1)
k.push(A.A(A.a([i,B.aa,A.E(a0.aBf(a9,"Worth now",h,r?C.cH:C.d5),1)],q),B.l,a1,B.e,B.h,0,a1,a1))
k.push(B.N)
i=j?"Premium paid":"Bought at"
i=A.E(a0.aBe(a9,i,D.eg(a3,!0,!1)),1)
if(j){j=J.z(b3.h(0,"priced"),!1)?"no price yet":D.eg(w,!0,!1)
j=a0.aBf(a9,"Premium now",j,r?C.cH:C.d5)}else j=a0.aBe(a9,"Amount",B.i.a5(a4,a4<0.01?6:4)+" "+A.v(b0.h(0,"symbol")))
k.push(A.A(A.a([i,B.aa,A.E(j,1)],q),B.l,a1,B.e,B.h,0,a1,a1))
k.push(B.aN)
k.push(A.cg(new D.eJx(a9,n)))
k.push(B.aj)
j=D.eg(o,!0,!1)
k.push(A.A(A.a([A.E(A.c("Stop loss\n-"+j+" \xb7 at "+D.eg(l<0?0:l,!0,!1),a1,a1,a1,a1,a1,a1,C.fPu,a1,a1,a1),1),A.E(A.c("Take profit\n+"+D.eg(p,!0,!1)+" \xb7 at "+D.eg(a3+p*m,!0,!1),a1,a1,a1,a1,a1,a1,C.fO1,B.dX,a1,a1),1)],q),B.l,a1,B.e,B.h,0,a1,a1))
k.push(B.aj)
q=D.hov(b0.h(0,"entryAt"))
k.push(A.c("Bought "+q,a1,a1,a1,a1,a1,a1,A.l(a1,a1,a7?C.bT:C.bV,a1,a1,a1,a1,a1,a1,a1,a1,11.5,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1))
return a0.a19(a9,A.w(k,B.B,a1,B.e,B.h,0,B.p))},
aBb(d,e){var w,v,u,t=this,s=null,r=J.z(e.h(0,"enabled"),!0)&&!J.z(e.h(0,"brakePaused"),!0),q=r?C.d5:C.cH
q=A.bp(q,s,s,s,s,s,s,s,new A.b9(A.m(999),B.a1),s,s,s)
w=t.r?s:new D.eJd(t,r)
v=A.V(r?B.vI:B.fQ,s,s,s,s,s)
q=A.E(new A.a4(s,52,A.de(v,s,A.c(r?"Stop agent":"Start agent",s,s,s,s,s,s,B.mU,s,s,s),w,q),s),3)
w=d.a
v=w?C.cl:B.c
u=w?C.oO:C.oJ
w=w?B.c.j(0.92):C.ib
u=A.dh(s,s,w,s,s,s,s,s,s,v,s,s,s,s,new A.b9(A.m(999),B.a1),new A.ax(u,1.5,B.r,-1),s,s,s,s)
w=t.r
v=w?s:t.gcAv()
return new A.C(B.dV,A.A(A.a([q,B.ar,A.E(new A.a4(s,52,A.ei(w?B.Lt:C.c5M,s,C.hiC,v,u),s),2)],x.p),B.l,s,B.e,B.h,0,s,s),s)},
bIG(d,e,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i="every 5 min",h=J.z(e.h(0,"enabled"),!0)&&!J.z(e.h(0,"brakePaused"),!0),g=e.h(0,"lastTickAt"),f=A.be(A.v(g==null?"":g))
if(h)w=C.cH
else w=d.a?C.bT:C.bV
g=x.f
v=g.b(e.h(0,"shadow"))?D.dE(e.h(0,"shadow")):j
u=x.g.a(J.t(a0,"trades"))
g=J.cK(u==null?B.bO:u,g)
t=A.B(g,g.$ti.k("M.E"))
s=t.length===0?j:D.dE(B.d.gG(t))
g=v!=null
r=g?"Current trade from":"Last trade from"
if(g)q=A.v(v.h(0,"symbol"))
else if(s==null)q="no trade yet"
else{g=A.v(s.h(0,"asset"))
u=J.z(s.h(0,"decision"),"would buy")?"bought":"sold "+D.eg(D.c4(D.dE(s.h(0,"details")).h(0,"pnl")),!0,!0)
u=g+" ("+u+")"
q=u}g=new D.eIY(d)
u=d.a
p=u?B.c.j(0.92):C.ib
o=A.m(20)
n=A.K(w.j(0.35),B.r,1)
m=w.j(0.15)
l=A.m(9)
l=A.p(j,A.V(O.Qv,w,j,j,j,17),B.f,j,j,new A.o(m,j,j,l,j,j,B.m),j,28,j,j,j,j,j,28)
m=h?"Trades are automatic":"Agent is stopped"
m=A.E(A.c(m,j,j,j,j,j,j,A.l(j,j,u?C.cl:B.c,j,j,j,j,j,j,j,j,13.5,j,j,B.C,j,j,!0,j,j,j,j,j,j,j,j),j,j,j),1)
k=x.p
m=A.a([A.A(A.a([l,B.aa,m,A.c("Check now only looks",j,j,j,j,j,j,A.l(j,j,u?C.bT:C.bV,j,j,j,j,j,j,j,j,10.5,j,j,j,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)],k),B.l,j,B.e,B.h,0,j,j),B.R],k)
if(h)B.d.u(m,A.a([A.A(A.a([g.$2("Last check",f==null?"not yet":D.LL(D.SD(f))+" ET"),B.b6,g.$2("Next buy check",D.hLj())],k),B.l,j,B.e,B.h,0,j,j),B.aj,A.A(A.a([g.$2("Checks every market",i),B.b6,g.$2("Open trade exits",i)],k),B.l,j,B.e,B.h,0,j,j),B.aj],k))
else B.d.u(m,A.a([A.c("It makes no trades. Press Start and it checks every market on the day's list every 5 minutes by itself.",j,j,j,j,j,j,A.l(j,j,u?C.bT:C.bV,j,j,j,j,j,j,j,j,12,j,j,j,j,1.35,!0,j,j,j,j,j,j,j,j),j,j,j),B.N],k))
m.push(A.A(A.a([g.$2(r,q)],k),B.l,j,B.e,B.h,0,j,j))
return A.p(j,A.w(m,B.B,j,B.e,B.h,0,B.p),B.f,j,j,new A.o(p,j,n,o,j,j,B.m),j,j,j,B.dV,B.bg,j,j,j)},
cL_(b9,c0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0=this,b1=null,b2="entryPrice",b3="exitPrice",b4="exitKind",b5="outValue",b6="todayStats",b7=J.a1(c0),b8=x.g.a(b7.h(c0,"trades"))
if(b8==null)b8=B.bO
w=x.f
b8=J.cK(b8,w)
b8=A.cs(b8,new D.eJW(),b8.$ti.k("M.E"),x.P)
v=A.B(b8,A.a3(b8).k("M.E"))
b8=b9.a
u=x.p
t=A.a([A.c("Trades",b1,b1,b1,b1,b1,b1,A.l(b1,b1,b8?C.cl:B.c,b1,b1,b1,b1,b1,b1,b1,b1,16,b1,b1,B.C,b1,b1,!0,b1,b1,b1,b1,b1,b1,b1,b1),b1,b1,b1),B.N],u)
if(v.length===0){s=A.V(B.h3,b8?C.bT:C.bV,b1,b1,b1,b1)
t.push(new A.C(B.cq,A.A(A.a([s,B.ar,A.E(A.c("No trades yet. Each buy shows what was bought (for a SPY option: strike, expiry and premium) and what was put in; each sell shows the entry and exit price and the win or loss in dollars.",b1,b1,b1,b1,b1,b1,A.l(b1,b1,b8?C.bT:C.bV,b1,b1,b1,b1,b1,b1,b1,b1,12.5,b1,b1,b1,b1,1.3,!0,b1,b1,b1,b1,b1,b1,b1,b1),b1,b1,b1),1)],u),B.l,b1,B.e,B.h,0,b1,b1),b1))}s=J.aQ(b0.y?v:A.cU(v,0,A.dw(4,"count",x.S),A.U(v).c))
r=x.N
q=x.z
while(s.C()){p=s.gP(s)
o=J.a1(p)
n=J.z(o.h(p,"decision"),"would buy")
m=o.h(p,"details")
l=w.b(m)?A.a_(m,r,q):A.S(r,q)
if(w.b(l.h(0,"option"))){m=l.h(0,"option")
k=w.b(m)?A.a_(m,r,q):A.S(r,q)}else k=b1
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
a0=j}}if(m)if(n)a1="expires "+D.aRj(k.h(0,"expiry"))+" \xb7 premium "+D.eg(d,!0,!1)+" x 100"
else{m=D.eg(d,!0,!1)
j=D.eg(a0,!0,!1)
a2=o.h(p,"reason")
a2=J.k(a2==null?"":a2)
a3=B.a.c8(a2,"(")
a1="premium "+m+" to "+j+" \xb7 "+B.a.i(a3>0?B.a.av(a2,0,a3):a2)}else if(n){if(g===0)m=""
else m=B.i.a5(g,g<0.01?6:4)+" at "
if(e)j=d
else{j=o.h(p,"price")
if(!(typeof j=="number")){j=A.cA(A.v(j==null?"":j))
if(j==null)j=0}}a1=m+D.eg(j,!0,!1)}else{m=e?D.eg(d,!0,!1)+" to ":"at "
j=D.eg(a0,!0,!1)
a2=o.h(p,"reason")
a2=J.k(a2==null?"":a2)
a3=B.a.c8(a2,"(")
a1=m+j+" \xb7 "+B.a.i(a3>0?B.a.av(a2,0,a3):a2)}a4=f>=0
if(n)a5=B.ci
else a5=a4?C.cH:C.d5
m=b8?C.oO:C.oJ
j=a5.j(0.14)
a2=new A.aP(13,13)
j=A.p(b1,A.V(n?B.tY:B.rt,a5,b1,b1,b1,20),B.f,b1,b1,new A.o(j,b1,b1,new A.bc(a2,a2,a2,a2),b1,b1,B.m),b1,40,b1,b1,b1,b1,b1,40)
a2=n?"Bought":"Sold"
a6=b8?C.cl:B.c
a2=A.c(a2+" "+i,b1,b1,b1,b1,b1,b1,new A.F(!0,a6,b1,b1,b1,b1,14,B.C,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1),b1,b1,b1)
a6=b8?C.bT:C.bV
a2=A.a([a2,B.bs,A.c(a1,b1,2,B.a2,b1,b1,b1,new A.F(!0,a6,b1,b1,b1,b1,11.5,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1),b1,b1,b1)],u)
a6=!n
if(a6&&l.h(0,b4)!=null){a7=A.v(l.h(0,b4))
a8=J.z(l.h(0,"flat"),!0)?" \xb7 flat":""
a9=a4?C.cH:C.d5
a2.push(A.c("Exit: "+a7+a8,b1,b1,b1,b1,b1,b1,new A.F(!0,a9,b1,b1,b1,b1,11,B.C,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1),b1,b1,b1))}p=o.h(p,"et_time")
p=J.k(p==null?"":p)
o=b8?C.bT:C.bV
a2.push(A.c(p,b1,b1,b1,b1,b1,b1,new A.F(!0,o,b1,b1,b1,b1,10.5,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1),b1,b1,b1))
p=A.w(a2,B.B,b1,B.e,B.h,0,B.p)
if(n)o="-"+D.eg(h,!0,!1)
else{if(l.h(0,b5)==null)o=h+f
else{o=l.h(0,b5)
if(!(typeof o=="number")){o=A.cA(A.v(o==null?"":o))
if(o==null)o=0}}o="+"+D.eg(o,!0,!1)}a2=b8?C.cl:B.c
o=A.a([A.c(o,b1,b1,b1,b1,b1,b1,new A.F(!0,a2,b1,b1,b1,b1,14,B.C,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1),b1,b1,b1)],u)
if(a6){a2=D.eg(f,!0,!0)
if(l.h(0,"pct")==null)a6=""
else{a6=l.h(0,"pct")
if(!(typeof a6=="number")){a6=A.cA(A.v(a6==null?"":a6))
if(a6==null)a6=0}a6=a6>=0?"+":""
a7=l.h(0,"pct")
if(!(typeof a7=="number")){a7=A.cA(A.v(a7==null?"":a7))
if(a7==null)a7=0}a7=" ("+a6+B.i.a5(a7,2)+"%)"
a6=a7}a7=a4?C.cH:C.d5
o.push(A.c(a2+a6,b1,b1,b1,b1,b1,b1,new A.F(!0,a7,b1,b1,b1,b1,12,B.C,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1),b1,b1,b1))}if(n){a2=b8?C.bT:C.bV
o.push(A.c("put in",b1,b1,b1,b1,b1,b1,new A.F(!0,a2,b1,b1,b1,b1,11,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1),b1,b1,b1))}t.push(A.p(b1,new A.c0(B.aK,B.e,B.h,B.l,b1,B.p,b1,0,A.a([j,B.bc,new A.bu(1,B.b7,p,b1),B.aa,A.w(o,B.dr,b1,B.e,B.h,0,B.p)],u),b1),B.f,b1,b1,new A.o(b1,b1,new A.bE(B.a1,B.a1,new A.ax(m,1,B.r,-1),B.a1),b1,b1,b1,B.m),b1,b1,b1,b1,B.jE,b1,b1,b1))}s=v.length
if(s>4)t.push(A.at(A.bL(!1,A.c(b0.y?"Show less":"Show all ("+s+")",b1,b1,b1,b1,b1,b1,b1,b1,b1,b1),b1,b1,!0,b1,b1,b1,new D.eJX(b0),b1,b1),b1,b1,b1))
if(w.b(b7.h(c0,b6))){w=D.dE(b7.h(c0,b6)).h(0,"flat")
w=A.v(w==null?0:w)
b7=D.dE(b7.h(c0,b6)).h(0,"closed")
b7=A.v(b7==null?0:b7)
b7=A.c("Flat trades today: "+w+" of "+b7+" closed",b1,b1,b1,b1,b1,b1,A.l(b1,b1,b8?C.cl:B.c,b1,b1,b1,b1,b1,b1,b1,b1,12.5,b1,b1,B.C,b1,b1,!0,b1,b1,b1,b1,b1,b1,b1,b1),b1,b1,b1)
B.d.u(t,A.a([B.N,b7,A.c("A flat trade closed between -$1 and +$1.",b1,b1,b1,b1,b1,b1,A.l(b1,b1,b8?C.bT:C.bV,b1,b1,b1,b1,b1,b1,b1,b1,11,b1,b1,b1,b1,b1,!0,b1,b1,b1,b1,b1,b1,b1,b1),b1,b1,b1)],u))}return b0.a19(b9,A.w(t,B.B,b1,B.e,B.h,0,B.p))},
bFP(d){var w,v,u=this,t=null,s=u.x,r=u.e
r=s?r:J.E9(r,4).dd(0)
s=d.a
w=A.c("Agent activity",t,t,t,t,t,t,A.l(t,t,s?C.cl:B.c,t,t,t,t,t,t,t,t,16,t,t,B.C,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)
v=x.p
v=A.a([A.A(A.a([w,B.aX,A.c("newest first",t,t,t,t,t,t,A.l(t,t,s?C.bT:C.bV,t,t,t,t,t,t,t,t,11,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],v),B.l,t,B.e,B.h,0,t,t),B.aj],v)
if(J.cx(u.e))v.push(new A.C(B.fc,A.c("Nothing yet. A new line appears with every automatic check (every 5 minutes).",t,t,t,t,t,t,A.l(t,t,s?C.bT:C.bV,t,t,t,t,t,t,t,t,12.5,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),t))
for(s=J.aQ(r);s.C();)v.push(u.c8q(d,s.gP(s)))
if(J.ad(u.e)>4){if(u.x)s=u.w?"Show older":"Show less"
else s="Show all"
v.push(A.at(A.bL(!1,A.c(s,t,t,t,t,t,t,t,t,t,t),t,t,!0,t,t,t,new D.eIX(u),t,t),t,t,t))}return u.a19(d,A.w(v,B.B,t,B.e,B.h,0,B.p))},
c8q(d,e){var w,v,u,t,s,r=null,q="price",p=J.a1(e),o=p.h(e,"decision"),n=J.k(o==null?"":o)
A:{if("would buy"===n){o=C.cH
break A}if("would sell"===n){o=B.bE
break A}if("hold"===n){o=B.b_
break A}if("day start"===n||"day end"===n){o=B.ci
break A}if("start"===n){o=C.cH
break A}if("stop"===n){o=C.d5
break A}if(J.z(p.h(e,"kind"),"error"))o=C.d5
else o=d.a?C.bT:C.bV
break A}w=p.h(e,"fast_ma")!=null&&p.h(e,"slow_ma")!=null
v=A.p(r,r,B.f,r,r,new A.o(o,r,r,r,r,r,B.a6),r,8,r,K.Ph,r,r,r,8)
u=n==="hold"?"Still holding":D.hIK(n)
t=x.p
o=A.a([A.c(u,r,r,r,r,r,r,A.l(r,r,o,r,r,r,r,r,r,r,r,12.5,r,r,B.C,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],t)
if(J.z(D.dE(p.h(e,"details")).h(0,"by"),"cron"))B.d.u(o,A.a([B.b6,A.c("automatic",r,r,r,r,r,r,A.l(r,r,d.a?C.bT:C.bV,r,r,r,r,r,r,r,r,10,r,r,B.O,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],t))
o.push(B.aX)
u=p.h(e,"et_time")
u=D.hqn(J.k(u==null?"":u))
s=d.a
o.push(A.c(u,r,r,r,r,r,r,A.l(r,r,s?C.bT:C.bV,r,r,r,r,r,r,r,r,10.5,r,r,r,r,r,!0,r,r,r,r,r,r,r,r),r,r,r))
o=A.A(o,B.l,r,B.e,B.h,0,r,r)
u=p.h(e,"reason")
u=D.hIK(J.k(u==null?"":u))
o=A.a([o,A.c(u,r,r,r,r,r,r,A.l(r,r,s?C.cl:B.c,r,r,r,r,r,r,r,r,12.5,r,r,r,r,1.3,!0,r,r,r,r,r,r,r,r),r,r,r)],t)
if(p.h(e,q)!=null||w){u=A.a([],x.s)
if(p.h(e,"asset")!=null&&p.h(e,q)!=null)u.push(A.v(p.h(e,"asset"))+" "+D.eg(D.c4(p.h(e,q)),!0,!1))
if(w)u.push("fast "+B.i.a5(D.c4(p.h(e,"fast_ma")),2)+" \xb7 slow "+B.i.a5(D.c4(p.h(e,"slow_ma")),2))
p=B.d.aL(u,"  \xb7  ")
o.push(A.c(p,r,r,r,r,r,r,A.l(r,r,s?C.bT:C.bV,r,r,r,r,r,r,r,r,10.5,r,r,r,r,r,!0,r,r,r,r,r,r,r,r),r,r,r))}return new A.C(B.D8,A.A(A.a([v,B.ar,A.E(A.w(o,B.B,r,B.e,B.h,0,B.p),1)],t),B.B,r,B.e,B.h,0,r,r),r)},
czq(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=this.c
k.toString
k=A.Q(k).aHA(B.L)
w=d.a
v=w?C.cl:B.c
u=w?C.bT:C.bV
t=A.V(C.bWr,B.b_,l,l,l,l)
s=x.p
r=A.A(A.a([new A.d0(1,B.c9,A.c("The rules it follows",l,l,l,l,l,l,A.l(l,l,w?C.cl:B.c,l,l,l,l,l,l,l,l,14.5,l,l,B.C,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),l),B.aa,A.aA(l,A.p(l,C.fsF,B.f,l,l,new A.o(l,l,l,A.m(999),l,B.u3,B.m),l,l,l,l,B.ho,l,l,l),B.y,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,this.gcmU(),l,l,l,l,l,l,!1,B.a4)],s),B.l,l,B.e,B.h,0,l,l)
q=A.c("Read-only, set in the code",l,l,l,l,l,l,A.l(l,l,w?C.bT:C.bV,l,l,l,l,l,l,l,l,11.5,l,l,l,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)
p=A.a([],s)
o=x.g.a(J.t(e,"rules"))
o=J.aQ(o==null?B.bO:o)
while(o.C()){n=J.k(o.gP(o))
m=w?C.cl:B.c
p.push(new A.C(C.bFd,new A.c0(B.aK,B.e,B.h,B.B,l,B.p,l,0,A.a([C.eHd,B.aa,new A.bu(1,B.b7,A.c(n,l,l,l,l,l,l,new A.F(!0,m,l,l,l,l,12.5,l,l,l,l,l,1.35,l,l,l,l,l,l,l,l,l,l,l,l,l),l,l,l),l)],s),l),l))}return this.aBa(d,new A.oC(k,A.aE(!1,B.a3,!0,l,N.hiH(l,p,U.aob,l,u,v,!1,t,l,q,B.he,r),B.f,l,0,l,l,l,l,l,B.i7),l),B.ag)},
aBa(d,e,f){var w=null,v=d.a,u=v?B.c.j(0.92):C.ib,t=A.m(24)
return A.p(w,e,B.f,w,w,new A.o(u,w,A.K(v?B.c:C.nf,B.r,1),t,A.a([new A.aa(0,B.H,d.gIc(),B.dv,24)],x.V),w,B.m),w,w,w,B.dV,f,w,w,w)},
a19(d,e){return this.aBa(d,e,B.bR)},
ab7(d,e,f){var w=null,v=f.j(0.12),u=A.m(16),t=A.K(f.j(0.45),B.r,1),s=A.V(B.QU,f,w,w,w,20)
return A.p(w,A.A(A.a([s,B.ar,A.E(A.c(e,w,w,w,w,w,w,A.l(w,w,d.a?C.cl:B.c,w,w,w,w,w,w,w,w,12.5,w,w,w,w,1.35,!0,w,w,w,w,w,w,w,w),w,w,w),1)],x.p),B.l,w,B.e,B.h,0,w,w),B.f,w,w,new A.o(v,w,t,u,w,w,B.m),w,w,w,B.dV,B.bg,w,w,w)},
b3V(d,e,f){var w=null,v=d.a,u=v?B.c.j(0.92):C.ib,t=A.K(v?B.c:C.nf,B.r,1)
return A.aE(!1,B.a3,!0,w,A.aM(!1,w,!0,A.p(w,A.V(e,v?C.cl:B.c,w,w,w,18),B.f,w,w,new A.o(w,w,t,w,w,w,B.a6),w,40,w,w,w,w,w,40),B.cM,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),B.f,u,0,w,w,B.cM,w,w,B.ai)},
b9A(d,e,f,g,h){var w,v,u,t,s,r,q,p=null
if(f){w=d.a
v=w?C.n7:B.c
u=v
v=w
w=u}else{w=d.a
v=w?C.Oj:C.O9
u=v
v=w
w=u}t=A.m(999)
s=x.p
r=A.a([],s)
if(h!=null){if(f)q=v?B.c:C.n7
else q=v?C.bT:C.bV
B.d.u(r,A.a([A.V(h,q,p,p,p,14),B.da],s))}if(f)v=v?B.c:C.n7
else v=v?C.bT:C.bV
r.push(A.c(e,p,p,p,p,p,p,A.l(p,p,v,p,p,p,p,p,p,p,p,11.5,p,p,B.O,p,p,!0,p,p,p,p,p,p,p,p),p,p,p))
return A.aA(p,A.cY(p,A.A(r,B.l,p,B.e,B.P,0,p,p),p,p,B.aZ,new A.o(w,p,p,t,p,p,B.m),B.eK,p,p,p,p,W.a1Z,p,p,p),B.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,g,p,p,p,p,p,p,!1,B.a4)},
cBv(d,e,f,g){return this.b9A(d,e,f,g,null)},
ayW(d,e,f){var w=null,v=A.p(w,w,B.f,w,w,new A.o(e,w,w,A.m(2),w,w,B.m),w,3,w,w,w,w,w,14)
return A.A(A.a([v,B.e0,A.c(f,w,w,w,w,w,w,A.l(w,w,d.a?C.bT:C.bV,w,w,w,w,w,w,w,w,11,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),B.l,w,B.e,B.P,0,w,w)},
aBd(d,e){var w=null,v=e.j(0.14),u=A.m(999)
return A.p(w,A.c(d,w,w,w,w,w,w,A.l(w,w,e,w,w,w,w,w,w,w,w,10,w,w,B.u,w,w,!0,w,0.6,w,w,w,w,w,w),w,w,w),B.f,w,w,new A.o(v,w,w,u,w,w,B.m),w,w,w,w,B.f6,w,w,w)},
aBf(d,e,f,g){var w=null,v=d.a,u=v?C.r1:C.r2,t=A.m(16),s=A.c(e,w,w,w,w,w,w,A.l(w,w,v?C.bT:C.bV,w,w,w,w,w,w,w,w,11.5,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)
if(g==null)v=v?C.cl:B.c
else v=g
return A.p(w,A.w(A.a([s,B.cQ,new A.d6(B.dn,B.a5,B.f,A.c(f,w,w,w,w,w,w,A.l(w,w,v,w,w,w,w,w,w,w,w,16,w,w,B.C,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w)],x.p),B.B,w,B.e,B.h,0,B.p),B.f,w,w,new A.o(u,w,w,t,w,w,B.m),w,w,w,w,B.bg,w,w,w)},
aBe(d,e,f){return this.aBf(d,e,f,null)},
cO0(d){var w=A.v(d==null?"":d),v=A.be(w.length>=19?B.a.av(w,0,19):"")
if(v==null)return""
return" \xb7 opens "+B.TA[A.lX(v)-1]+" "+D.LL(v)+" ET"}}
D.R6.prototype={}
D.a_R.prototype={
R(){return new D.bf0()}}
D.bf0.prototype={
aBc(d,e){var w=this,v=w.a.c.length,u=B.o.D(B.i.bd(d.a/e*v),0,v-1)
if(u!==w.d)w.l(new D.cY4(w,u))},
B(d){return A.cg(new D.cYd(this))}}
D.bf1.prototype={
a4(e2,e3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5=this,d6=null,d7={},d8=e3.b,d9=d8-18,e0=x.u,e1=A.a([],e0)
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
d7.a=B.d.eH(e1,B.pC)
o=d7.b=B.d.eH(e1,B.oA)
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
k=A.h0(d6,B.cL,d6,d6,d6,A.cW(d6,d6,d6,d6,d6,d6,d6,d6,d6,A.l(d6,d6,q,d6,d6,d6,d6,d6,p,d6,d6,9.5,d6,d6,B.C,d6,d6,!0,d6,d6,d6,d6,d6,d6,d6,d6),e1),B.a8,B.cd,d6,B.e4,B.ce)
k.eL()
j=t?k.b.c+12:0
e1=e3.a
i=e1-j
h=i/l
g=new D.cYe(h)
f=new D.cYg(d7,d9)
$.T()
e=A.L()
e.r=(r?C.oO:C.oJ).j(0.7).gp(0)
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
b4=new A.ar(B.U,B.S,B.X,B.Y,B.W)
b4.r=a3.b.d.j(0.75).gp(0)
b4.c=Math.min(2,Math.max(1,a2))
for(b5=12;b5<d9;b5+=7)e2.ah(new A.r(a1,b5),new A.r(a1,Math.min(d9,b5+3.5)),b4)}if(v){v=new D.cYf(d5,l,g,f,e2)
v.$2("s",B.b_)
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
c2=new A.ar(B.U,B.S,B.X,B.Y,B.W)
c2.r=(c1?c0.j(0.45):c0).gp(0)
a3=g.$1(d)
a7=f.$1(b8)
a8=g.$1(d)
a9=f.$1(b9)
c2.c=1.4
e2.ah(new A.r(a3,a7),new A.r(a8,a9),c2)
c3=f.$1(Math.max(b6,b7))
c4=f.$1(Math.min(b6,b7))
a9=A.bx(new A.a5(g.$1(d)-v,c3,g.$1(d)+v,Math.max(c4,c3+1.5)),B.hG)
c2.b=B.S
e2.aq(a9,c2)}if(t){v=f.$1(e0)
d5.bQ2(e2,v,i,(r?C.cl:B.c).j(0.45),"")
e0=f.$1(e0)
v=k.b.a.c
v=v.gb4(v)
t=k.b.a.c
c5=J.a56(e0,v/2+2,d9-t.gb4(t)/2-2)
t=i+3
v=k.b.a.c
v=c5-v.gb4(v)/2-2
e0=k.b
a3=e0.c
e0=e0.a.c
e0=A.bx(new A.a5(t,v,t+(a3+8),v+(e0.gb4(e0)+4)),B.pl)
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
t=new A.bA()
a3.push(t)
a3=c7.f
if(a3!=null)t.aj(a3)
c7.ac()
t=new A.ar(B.U,B.S,B.X,B.Y,B.W)
a3=a6.d
t.r=a3.gp(0)
e2.af(c7,t)
c8=new A.j5(new A.eJ(a6.c,d6,d6,B.cZ,d6,d6,d6,d6,d6,d6,new A.F(!0,a3,d6,p,d6,d6,10,B.C,d6,d6,d6,d6,d6,d6,d6,d6,d6,d6,d6,d6,d6,d6,d6,d6,d6,d6)),B.a8,B.cd,new A.kj(1),d6,d6,d6,d6,B.ce,d6,B.cL)
c8.eL()
t=a1+7
a3=c8.b.c
t=t+a3<=i?t:a1-7-a3
c8.a4(e2,new A.r(t,c3-1))}c8=A.h0(d6,B.cL,d6,d6,d6,d6,B.a8,B.cd,d6,B.e4,B.ce)
for(e0=[0,l/3|0,B.o.ao(2*l,3),a5],v=e0.length,d8-=13,u=0;u<v;++u){d=e0[u]
t=J.t(w[d],"t")
b2=A.be(A.v(t==null?"":t))
if(b2==null)continue
t=D.LL(D.SD(b2))
a3=r?C.bT:C.bV
c8.sb1(0,new A.eJ(t,d6,d6,B.cZ,d6,d6,d6,d6,d6,d6,new A.F(!0,a3,d6,p,d6,d6,10,d6,d6,d6,d6,d6,d6,d6,d6,d6,d6,d6,d6,d6,d6,d6,d6,d6,d6,d6)))
c8.eL()
t=g.$1(d)
a3=c8.b.c
c8.a4(e2,new A.r(B.i.D(t-a3/2,0,e1-a3),d8))}if(a2&&q<l){s=w[q]
a1=g.$1(q)
d8=J.a1(s)
c9=f.$1(D.c4(d8.h(s,"c")))
$.T()
d0=A.L()
d0.r=(r?C.cl:B.c).j(0.5).gp(0)
d0.c=1
for(b5=0;b5<d9;b5+=6)e2.ah(new A.r(a1,b5),new A.r(a1,b5+3),d0)
$.T()
e0=A.L()
e0.r=(r?B.c.j(0.92):C.ib).gp(0)
e2.O(new A.r(a1,c9),6,e0)
e0=A.L()
e0.r=(r?C.cl:B.c).gp(0)
e0.b=B.ad
e0.c=2.5
e2.O(new A.r(a1,c9),6,e0)
e0=d8.h(s,"t")
b2=A.be(A.v(e0==null?"":e0))
e0=b2==null?"":D.LL(D.SD(b2))+" ET\n"
d8=D.eg(D.c4(d8.h(s,"c")),!0,!1)
c8.sb1(0,A.cW(d6,d6,d6,d6,d6,d6,d6,d6,d6,A.l(d6,d6,r?B.c:C.n7,d6,d6,d6,d6,d6,p,d6,d6,11.5,d6,d6,B.C,d6,1.3,!0,d6,d6,d6,d6,d6,d6,d6,d6),e0+d8))
c8.sDo(0,B.K)
c8.eL()
d8=c8.b
d1=d8.c+18
d8=d8.a.c
d2=d8.gb4(d8)+10
d3=B.i.D(a1-d1/2,0,e1-d1)
d4=Math.max(0,c9-d2-14)
e1=A.bx(new A.a5(d3,d4,d3+d1,d4+d2),B.hT)
d8=A.L()
d8.r=(r?C.n7:B.c).gp(0)
e2.aq(e1,d8)
c8.a4(e2,new A.r(d3+9,d4+5))}},
bQ3(d,e,f,g,h,i){var w,v,u,t,s,r,q,p,o,n,m=null
$.T()
w=A.L()
w.r=g.gp(0)
w.c=1.2
for(v=0;v<f;v+=7)d.ah(new A.r(v,e),new A.r(v+3.5,e),w)
if(h.length===0)return
u=A.h0(m,B.cL,m,m,m,A.cW(m,m,m,m,m,m,m,m,m,A.l(m,m,B.c,m,m,m,m,m,this.b,m,m,10,m,m,B.C,m,m,!0,m,m,m,m,m,m,m,m),h),B.a8,B.cd,m,B.e4,B.ce)
u.eL()
t=u.b
s=t.c+12
t=t.a.c
r=t.gb4(t)+6
q=i?0:f-s
t=e-r/2
p=A.bx(new A.a5(q,t,q+s,t+r),B.qo)
$.T()
o=A.L()
if(i)n=F.qQ
else n=this.e.a?C.n7:B.c
o.r=n.gp(0)
d.aq(p,o)
u.a4(d,new A.r(q+6,t+3))},
bQ2(d,e,f,g,h){return this.bQ3(d,e,f,g,h,!1)},
aD(d){var w=this
return d.d!==w.d||d.x!=w.x||d.r!==w.r||d.w!==w.w||d.e.a!==w.e.a||d.c!==w.c}}
D.bx1.prototype={
a4(d,e){var w,v,u,t,s,r,q,p,o,n,m=null,l=this.b
if(l.length<2)return
w=A.U(l).k("O<1,H>")
v=A.B(new A.O(l,new D.fkk(),w),w.k("aj.E"))
u=B.d.eH(v,B.pC)
t=B.d.eH(v,B.oA)-u
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
s.ac()}}n=A.zR(s)
n.E(new A.aq(l,r))
n.E(new A.aq(0,r))
n.E(new A.bA())
$.T()
w=A.L()
p=this.c
w.san(new A.a6(B.aU,B.b1,B.w,A.a([p.j(0.25),p.j(0)],x.O),m,m).az(0,new A.a5(0,0,0+l,0+r)))
d.af(n,w)
w=A.L()
w.r=p.gp(0)
w.b=B.ad
w.c=1.8
w.e=B.dP
d.af(s,w)
w=B.d.gal(v)
o=A.L()
o.r=p.gp(0)
d.O(new A.r(l,r-(w-u)/t*r),3,o)},
aD(d){return d.b!==this.b||!d.c.A(0,this.c)}}
D.z4.prototype={}
D.RC.prototype={
gIc(){return this.a?B.ci.j(0.08):B.v.j(0.35)}}
D.OU.prototype={
R(){return new D.aGK(A.a([],x.t))}}
D.aGK.prototype={
Z(){var w=this
w.a3()
w.a.toString
w.Bb()
w.By()
w.x=A.d4(B.m2,new D.e9z(w))},
t(){var w=this.x
if(w!=null)w.a1(0)
this.a2()},
Bb(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$Bb=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.aB(),$async$Bb)
case 7:q=e
n=r.a.c
p=A.aV(J.t(q.a,"ngmy_signal_grid_fast_"+n))
if(p==null||r.c==null||r.d!=null){w=1
break}o=A.a_(x.f.a(B.V.aP(0,p,null)),x.N,x.z)
r.l(new D.e91(r,o))
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
return A.i($async$Bb,v)},
By(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j
var $async$By=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:m=x.N
l=x.z
w=3
return A.b(A.hc(A.a([A.fJ(A.J(["action","fsStatus","system",r.a.c],m,l),!1,!1,!1,!1,B.x4),A.fJ(A.J(["action","fsLog","system",r.a.c,"limit",30],m,l),!1,!1,!1,!1,B.m2)],x.o),x.h),$async$By)
case 3:k=e
l=J.a1(k)
q=l.h(k,0)
o=l.h(k,1)
if(r.c==null){w=1
break}r.l(new D.e9g(r,q,o))
w=q!=null&&J.z(J.t(q,"ok"),!0)?4:5
break
case 4:t=7
w=10
return A.b(A.aB(),$async$By)
case 10:p=e
w=11
return A.b(p.aB("String","ngmy_signal_grid_fast_"+r.a.c,B.V.au(A.J(["s",q,"log",r.e],m,x.K),null)),$async$By)
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
return A.i($async$By,v)},
zh(d){return this.cCm(d)},
cCm(d){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$zh=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.d
t.l(new D.e9m(t,d))
w=3
return A.b(A.fJ(A.J(["action","fsSet","system",t.a.c,"enabled",d],x.N,x.z),!1,!1,!1,!1,B.x4),$async$zh)
case 3:s=f
if(t.c==null){w=1
break}t.l(new D.e9n(t,s,r))
case 1:return A.h(u,v)}})
return A.i($async$zh,v)},
B(c3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8=this,a9=null,b0="brakePaused",b1="enabled",b2="entryPrice",b3="weekendNote",b4="pnlSum",b5="brakeNote",b6=A.Q(c3).ax.a===B.dg,b7=new D.RC(b6),b8=a8.a.c==="options"?"Options":"Scalper",b9=a8.d,c0=D.dE(b9==null?a9:b9.h(0,"state")),c1=J.z(c0.h(0,b0),!0),c2=J.z(c0.h(0,b1),!0)&&!c1
b9=b6?C.tb:C.t9
w=b6?C.tb:C.t9
w=A.a([w,b6?C.Oc:C.O5],x.O)
v=a8.a1b(b7,B.eE,new D.e9x(c3))
u=a8.a.c==="options"
t=u?B.az:B.as
s=A.m(11)
t=A.p(a9,A.V(u?B.fP:B.rr,B.c,a9,a9,a9,20),B.f,a9,a9,new A.o(t,a9,a9,s,a9,a9,B.m),a9,34,a9,a9,a9,a9,a9,34)
u=A.c(b8,a9,a9,a9,a9,a9,a9,A.l(a9,a9,b6?C.cl:B.c,a9,a9,a9,a9,a9,a9,a9,a9,17,a9,a9,B.C,a9,a9,!0,a9,a9,a9,a9,a9,a9,a9,a9),a9,a9,a9)
s=x.p
u=A.a([v,B.ar,t,B.ar,A.E(A.w(A.a([u,A.c("Fast system",a9,a9,a9,a9,a9,a9,A.l(a9,a9,b6?C.bT:C.bV,a9,a9,a9,a9,a9,a9,a9,a9,11.5,a9,a9,a9,a9,a9,!0,a9,a9,a9,a9,a9,a9,a9,a9),a9,a9,a9)],s),B.B,a9,B.e,B.h,0,B.p),1)],s)
if(a8.d!=null){if(c1)v=C.d5
else if(c2)v=C.cH
else v=b6?C.bT:C.bV
v=v.j(0.14)
t=A.m(999)
if(c1)r="Paused"
else r=c2?"Running":"Stopped"
if(c1)q=C.d5
else if(c2)q=C.cH
else q=b6?C.bT:C.bV
u.push(A.p(a9,A.c(r,a9,a9,a9,a9,a9,a9,A.l(a9,a9,q,a9,a9,a9,a9,a9,a9,a9,a9,12,a9,a9,B.C,a9,a9,!0,a9,a9,a9,a9,a9,a9,a9,a9),a9,a9,a9),B.f,a9,a9,new A.o(v,a9,a9,t,a9,a9,B.m),a9,a9,a9,a9,B.h0,a9,a9,a9))}u.push(B.aa)
u.push(a8.a1b(b7,B.mE,a8.r?a9:new D.e9y(a8)))
v=A.A(u,B.l,a9,B.e,B.h,0,a9,a9)
if(a8.f)b6=B.l2
else{u=a8.d
if(u==null){b6=a8.w
b6=A.a([a8.Rw(b7,b6==null?"Nothing to show yet.":b6,B.b_)],s)}else{c0=D.dE(u.h(0,"state"))
t=x.f
p=t.b(c0.h(0,"shadow"))?D.dE(c0.h(0,"shadow")):a9
r=A.a([],s)
if(p!=null){q=D.dE(c0.h(0,"mark"))
o=t.b(p.h(0,"option"))?D.dE(p.h(0,"option")):a9
t=p.h(0,"entryAt")
n=A.be(A.v(t==null?"":t))
t=p.h(0,"maxHold")
m=B.i.M(D.c4(t==null?30:t))
l=n==null?a9:n.bL(A.du(0,0,0,0,m,0).a)
k=D.c4(q.h(0,"pnl"))
t=a8.a.c==="options"?B.az:B.as
j=A.c("OPEN TRADE",a9,a9,a9,a9,a9,a9,A.l(a9,a9,b6?C.bT:C.bV,a9,a9,a9,a9,a9,a9,a9,a9,10.5,a9,a9,B.u,a9,a9,!0,a9,0.8,a9,a9,a9,a9,a9,a9),a9,a9,a9)
j=A.A(A.a([j,B.aX,new D.aBD(l,a8.a.c==="options"?B.az:B.as,a9)],s),B.l,a9,B.e,B.h,0,a9,a9)
i=o!=null
if(i){h=A.v(p.h(0,"symbol"))
g=D.eg(D.c4(o.h(0,"strike")),!0,!1)
f=o.h(0,"right")
h=h+" "+g+" "+A.v(f==null?"call":f)+" \xb7 expires "+D.aRj(o.h(0,"expiry"))}else h=A.v(p.h(0,"symbol"))
h=A.c(h,a9,a9,a9,a9,a9,a9,A.l(a9,a9,b6?C.cl:B.c,a9,a9,a9,a9,a9,a9,a9,a9,17,a9,a9,B.C,a9,a9,!0,a9,a9,a9,a9,a9,a9,a9,a9),a9,a9,a9)
if(i){i=D.eg(D.c4(p.h(0,b2)),!0,!1)
g=D.eg(D.c4(q.h(0,"cost")),!0,!1)
q=J.z(q.h(0,"priced"),!1)?"no price yet":D.eg(D.c4(q.h(0,"price")),!0,!1)
q="Premium paid "+i+" x 100 = "+g+" \xb7 now "+q}else q="$"+B.i.a5(D.c4(q.h(0,"cost")),0)+" bought at "+D.eg(D.c4(p.h(0,b2)),!0,!1)+" \xb7 now "+D.eg(D.c4(q.h(0,"price")),!0,!1)
q=A.c(q,a9,a9,a9,a9,a9,a9,A.l(a9,a9,b6?C.bT:C.bV,a9,a9,a9,a9,a9,a9,a9,a9,12,a9,a9,a9,a9,a9,!0,a9,a9,a9,a9,a9,a9,a9,a9),a9,a9,a9)
i=D.eg(k,!0,!0)
g=k>=0
i=A.c(i,a9,a9,a9,a9,a9,a9,A.l(a9,a9,g?C.cH:C.d5,a9,a9,a9,a9,a9,a9,a9,a9,26,a9,a9,B.u,a9,a9,!0,a9,a9,a9,a9,a9,a9,a9,a9),a9,a9,a9)
g=g?"winning right now":"losing right now"
i=A.A(A.a([i,B.aa,A.c(g,a9,a9,a9,a9,a9,a9,A.l(a9,a9,b6?C.bT:C.bV,a9,a9,a9,a9,a9,a9,a9,a9,12,a9,a9,a9,a9,a9,!0,a9,a9,a9,a9,a9,a9,a9,a9),a9,a9,a9)],s),B.l,a9,B.e,B.h,0,a9,a9)
g=D.hov(p.h(0,"entryAt"))
f=l==null?"":" \xb7 max hold "+m+" min, closes by "+D.LL(D.SD(l.aa()))+" ET"
e=p.h(0,"tpUsd")==null?"":" \xb7 take profit +"+D.eg(D.c4(p.h(0,"tpUsd")),!0,!1)+" / stop -"+D.eg(D.c4(p.h(0,"slUsd")),!0,!1)
r.push(a8.b3U(b7,t,A.w(A.a([j,B.N,h,B.bs,q,B.aj,i,A.c("Bought "+g+f+e,a9,a9,a9,a9,a9,a9,A.l(a9,a9,b6?C.bT:C.bV,a9,a9,a9,a9,a9,a9,a9,a9,11.5,a9,a9,a9,a9,a9,!0,a9,a9,a9,a9,a9,a9,a9,a9),a9,a9,a9)],s),B.B,a9,B.e,B.h,0,B.p)))}r.push(a8.c9D(b7,u))
r.push(a8.bMc(b7,u))
p=D.dE(u.h(0,"shared"))
d=p.h(0,"balance")
a0=D.c4(p.h(0,"closed"))+D.c4(p.h(0,"open"))
t=A.m(26)
q=A.A(A.a([C.b_3,B.aX,A.p(a9,C.h5y,B.f,a9,a9,new A.o(B.c.j(0.14),a9,a9,A.m(999),a9,a9,B.m),a9,a9,a9,a9,B.f6,a9,a9,a9)],s),B.l,a9,B.e,B.h,0,a9,a9)
j=A.c(d==null?"\u2014":D.eg(D.c4(d),!0,!1),a9,a9,a9,a9,a9,a9,C.fIV,a9,a9,a9)
i=D.eg(a0,!0,!0)
if(a0>0)h=C.cH
else h=a0<0?C.d5:B.ab
h=A.c(i+" from trades of every system",a9,a9,a9,a9,a9,a9,A.l(a9,a9,h,a9,a9,a9,a9,a9,a9,a9,a9,12.5,a9,a9,B.C,a9,a9,!0,a9,a9,a9,a9,a9,a9,a9,a9),a9,a9,a9)
r.push(A.p(a9,A.w(A.a([q,B.at,new A.d6(B.dn,B.a5,B.f,j,a9),h,B.bs,A.c("Alpaca account "+(p.h(0,"equity")==null?"\u2014":D.eg(D.c4(p.h(0,"equity")),!0,!1))+" (unchanged, no orders are sent)",a9,a9,a9,a9,a9,a9,B.FH,a9,a9,a9)],s),B.B,a9,B.e,B.h,0,B.p),B.f,a9,a9,new A.o(a9,a9,a9,t,a9,C.avp,B.m),a9,a9,a9,B.dV,B.f5,a9,a9,a9))
t=a8.w
if(t!=null)r.push(a8.Rw(b7,t,C.d5))
if(J.z(c0.h(0,b0),!0)){t=c0.h(0,"brakeReason")
r.push(a8.Rw(b7,"Paused by this system's brake. "+A.v(t==null?"":t)+y.g,C.d5))}r.push(a8.aBb(b7,c0))
if(u.h(0,b3)!=null){t=A.V(B.as0,b6?C.bT:C.bV,a9,a9,a9,16)
q=A.v(u.h(0,b3))
r.push(new A.C(C.bL2,A.A(A.a([t,B.b6,A.E(A.c(q,a9,a9,a9,a9,a9,a9,A.l(a9,a9,b6?C.bT:C.bV,a9,a9,a9,a9,a9,a9,a9,a9,11.5,a9,a9,B.O,a9,a9,!0,a9,a9,a9,a9,a9,a9,a9,a9),a9,a9,a9),1)],s),B.l,a9,B.e,B.h,0,a9,a9),a9))}r.push(a8.aBS(b7,u))
r.push(a8.c78(b7,u))
a1=D.dE(u.h(0,"record"))
a2=D.dE(u.h(0,"todayStats"))
a3=a2.h(0,"winRatePct")
a4=D.c4(a2.h(0,"pnl"))
t=a3==null
if(t)a5=b6?C.cl:B.c
else a5=D.c4(a3)>=50?C.cH:C.d5
q=A.c("TODAY: WIN RATE AND P/L",a9,a9,a9,a9,a9,a9,A.l(a9,a9,b6?C.bT:C.bV,a9,a9,a9,a9,a9,a9,a9,a9,10.5,a9,a9,B.u,a9,a9,!0,a9,0.9,a9,a9,a9,a9,a9,a9),a9,a9,a9)
j=t?"No closed trades today":B.i.a5(D.c4(a3),0)+"%"
j=A.a([A.c(j,a9,a9,a9,a9,a9,a9,A.l(a9,a9,a5,a9,a9,a9,a9,a9,a9,a9,a9,t?16:30,a9,a9,B.u,a9,a9,!0,a9,a9,a9,a9,a9,a9,a9,a9),a9,a9,a9),B.ar],s)
if(!t){t=D.eg(a4,!0,!0)
if(a4>0)i=C.cH
else if(a4<0)i=C.d5
else i=b6?C.cl:B.c
j.push(new A.C(Q.Pc,A.c(t,a9,a9,a9,a9,a9,a9,A.l(a9,a9,i,a9,a9,a9,a9,a9,a9,a9,a9,16,a9,a9,B.C,a9,a9,!0,a9,a9,a9,a9,a9,a9,a9,a9),a9,a9,a9),a9))}t=A.A(j,B.dr,a9,B.e,B.h,0,a9,a9)
j=a2.h(0,"wins")
j=A.v(j==null?0:j)
i=a2.h(0,"closed")
i=A.v(i==null?0:i)
t=A.E(A.w(A.a([q,B.at,t,A.c(j+" won out of "+i+" closed today",a9,a9,a9,a9,a9,a9,A.l(a9,a9,b6?C.bT:C.bV,a9,a9,a9,a9,a9,a9,a9,a9,12,a9,a9,a9,a9,a9,!0,a9,a9,a9,a9,a9,a9,a9,a9),a9,a9,a9)],s),B.B,a9,B.e,B.h,0,B.p),1)
q=A.c("All time",a9,a9,a9,a9,a9,a9,A.l(a9,a9,b6?C.bT:C.bV,a9,a9,a9,a9,a9,a9,a9,a9,11,a9,a9,a9,a9,a9,!0,a9,a9,a9,a9,a9,a9,a9,a9),a9,a9,a9)
j=D.eg(D.c4(a1.h(0,b4)),!0,!0)
if(D.c4(a1.h(0,b4))>0)i=C.cH
else if(D.c4(a1.h(0,b4))<0)i=C.d5
else i=b6?C.cl:B.c
i=A.c(j,a9,a9,a9,a9,a9,a9,A.l(a9,a9,i,a9,a9,a9,a9,a9,a9,a9,a9,18,a9,a9,B.C,a9,a9,!0,a9,a9,a9,a9,a9,a9,a9,a9),a9,a9,a9)
j=a1.h(0,"wins")
j=A.v(j==null?0:j)
h=a1.h(0,"losses")
h=A.v(h==null?0:h)
r.push(a8.wu(b7,A.A(A.a([t,A.w(A.a([q,i,A.c(j+" W / "+h+" L",a9,a9,a9,a9,a9,a9,A.l(a9,a9,b6?C.bT:C.bV,a9,a9,a9,a9,a9,a9,a9,a9,11,a9,a9,a9,a9,a9,!0,a9,a9,a9,a9,a9,a9,a9,a9),a9,a9,a9)],s),B.dr,a9,B.e,B.h,0,B.p)],s),B.l,a9,B.e,B.h,0,a9,a9)))
if(a8.a.c==="options"&&u.h(0,b5)!=null)r.push(a8.Rw(b7,A.v(u.h(0,b5)),B.b_))
if(a8.a.c==="options")r.push(a8.cnY(b7,u))
r.push(a8.cCL(b7,u))
t=c0.h(0,"lastNote")
a6=J.k(t==null?"":t)
t=c0.h(0,"lastNoteAt")
if(t==null)t=c0.h(0,"lastTickAt")
a7=A.be(A.v(t==null?"":t))
if(J.z(c0.h(0,b1),!0))t=C.cH
else t=b6?C.bT:C.bV
t=A.V(O.Qv,t,a9,a9,a9,18)
q=J.z(c0.h(0,b1),!0)?"Checks every minute by itself":"Stopped: press Start to let it check every minute"
q=A.a([A.c(q,a9,a9,a9,a9,a9,a9,A.l(a9,a9,b6?C.cl:B.c,a9,a9,a9,a9,a9,a9,a9,a9,13,a9,a9,B.C,a9,a9,!0,a9,a9,a9,a9,a9,a9,a9,a9),a9,a9,a9)],s)
if(a6.length!==0){j=a7==null?"":D.LL(D.SD(a7.aa()))+" ET \xb7 "
B.d.u(q,A.a([B.cQ,A.c(j+a6,a9,a9,a9,a9,a9,a9,A.l(a9,a9,b6?C.bT:C.bV,a9,a9,a9,a9,a9,a9,a9,a9,12,a9,a9,a9,a9,1.3,!0,a9,a9,a9,a9,a9,a9,a9,a9),a9,a9,a9)],s))}r.push(a8.wu(b7,A.A(A.a([t,B.aa,A.E(A.w(q,B.B,a9,B.e,B.h,0,B.p),1)],s),B.B,a9,B.e,B.h,0,a9,a9)))
r.push(a8.cKZ(b7,u))
r.push(a8.bFO(b7))
r.push(a8.czp(b7,u))
r.push(a8.wu(b7,A.A(A.a([C.c5Z,B.aa,A.E(A.c("No order is ever sent to Alpaca. Orders are disabled.",a9,a9,a9,a9,a9,a9,A.l(a9,a9,b6?C.bT:C.bV,a9,a9,a9,a9,a9,a9,a9,a9,11.5,a9,a9,a9,a9,1.3,!0,a9,a9,a9,a9,a9,a9,a9,a9),a9,a9,a9),1)],s),B.l,a9,B.e,B.h,0,a9,a9)))
b6=r}b6=A.Gf(A.co(b6,a9,a9,C.aov,a9,a9,B.ah,!1),a9,a8.gcht())}return A.c6(a9,b9,A.p(a9,A.bo(!0,A.w(A.a([new A.C(B.hd,v,a9),A.E(b6,1)],s),B.l,a9,B.e,B.h,0,B.p),!0,!1,B.ag,!0,!0),B.f,a9,a9,new A.o(a9,a9,a9,a9,a9,new A.a6(B.aU,B.b1,B.w,w,a9,a9),B.m),a9,a9,a9,a9,a9,a9,a9,a9),a9,!1,!1,a9,a9)},
aBb(d,e){var w,v,u,t=this,s=null,r=J.z(e.h(0,"enabled"),!0)&&!J.z(e.h(0,"brakePaused"),!0),q=r?C.d5:C.cH
q=A.bp(q,s,s,s,s,s,s,s,new A.b9(A.m(999),B.a1),s,s,s)
w=t.r
if(!w)t.a.toString
v=w?s:new D.e8V(t,r)
if(w)w=B.rP
else w=A.V(r?B.vI:B.fQ,s,s,s,s,s)
if(r)u="Stop "+(t.a.c==="options"?"Options":"Scalper")
else u="Start "+(t.a.c==="options"?"Options":"Scalper")
return new A.C(B.dV,new A.a4(1/0,52,A.de(w,s,A.c(u,s,s,s,s,s,s,B.mU,s,s,s),v,q),s),s)},
aBS(b5,b6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6=this,a7=null,a8="parts",a9="passes",b0=D.dE(b6.h(0,"pace")),b1=b0.h(0,"target"),b2=B.i.M(D.c4(b1==null?40:b1)),b3=B.i.M(D.c4(b0.h(0,"trades"))),b4=D.c4(b0.h(0,"thresholdPct"))
b1=b0.h(0,"entryFloor")
w=D.c4(b1==null?0.5:b1)
v=B.i.M(D.c4(b0.h(0,"minutesLeft")))
b1=x.g.a(b6.h(0,"ranking"))
if(b1==null)b1=B.bO
u=x.f
b1=J.cK(b1,u)
t=x.P
b1=A.cs(b1,new D.e9d(),b1.$ti.k("M.E"),t)
s=A.B(b1,A.a3(b1).k("M.E"))
r=b3>=b2?E.i1:C.cH
b1=D.dE(b6.h(0,"state")).h(0,"lastNote")
q=J.k(b1==null?"":b1)
b1=b0.h(0,"learned")
p=J.k(b1==null?"":b1)
b1=b0.h(0,"dayNote")
o=J.k(b1==null?"":b1)
b1=b5.a
n=A.c("TRADES TODAY",a7,a7,a7,a7,a7,a7,A.l(a7,a7,b1?C.bT:C.bV,a7,a7,a7,a7,a7,a7,a7,a7,10.5,a7,a7,B.u,a7,a7,!0,a7,0.9,a7,a7,a7,a7,a7,a7),a7,a7,a7)
m=J.z(b0.h(0,"inWindow"),!0)?""+B.o.ao(v,60)+"h "+B.o.F(v,60)+"m left":"window closed"
l=x.p
m=A.A(A.a([n,B.aX,a6.C3(m,b1?C.bT:C.bV)],l),B.l,a7,B.e,B.h,0,a7,a7)
n=""+b3
k=""+b2
j=A.A(A.a([A.E(A.c("Trades today: "+n+" of "+k,a7,a7,a7,a7,a7,a7,A.l(a7,a7,b1?C.cl:B.c,a7,a7,a7,a7,a7,a7,a7,a7,22,a7,a7,B.u,a7,a7,!0,a7,a7,a7,a7,a7,a7,a7,a7),a7,a7,a7),1)],l),B.dr,a7,B.e,B.h,0,a7,a7)
i=b0.h(0,"waiting")
n=A.c(n+" of "+k+" \u2014 "+A.v(i==null?"waiting for a real setup":i)+" ("+k+" is a maximum, never a target)",a7,a7,a7,a7,a7,a7,A.l(a7,a7,r,a7,a7,a7,a7,a7,a7,a7,a7,12.5,a7,a7,B.C,a7,1.3,!0,a7,a7,a7,a7,a7,a7,a7,a7),a7,a7,a7)
k=A.cg(new D.e9e(b5,b3,b2,r))
i=b1?C.r1:C.r2
h=A.m(12)
g=B.i.a5(w,2)
g=A.a([A.c("Entry floor today: +"+g+"%",a7,a7,a7,a7,a7,a7,A.l(a7,a7,b1?C.cl:B.c,a7,a7,a7,a7,a7,a7,a7,a7,13,a7,a7,B.C,a7,a7,!0,a7,a7,a7,a7,a7,a7,a7,a7),a7,a7,a7)],l)
if(b4>w+0.001)g.push(A.c("Needed for the next entry: +"+B.i.a5(b4,2)+"% (raised by a loss streak or a lesson)",a7,a7,a7,a7,a7,a7,C.aYL,a7,a7,a7))
g.push(B.bs)
g.push(A.c("An entry needs the 5-minute and 15-minute trends to agree, at least that move in the trade's direction in the last 30 minutes, the price past both averages, and no more than 1.5% in the last hour (no chasing). Falling behind never loosens a rule.",a7,a7,a7,a7,a7,a7,A.l(a7,a7,b1?C.bT:C.bV,a7,a7,a7,a7,a7,a7,a7,a7,11,a7,a7,a7,a7,1.3,!0,a7,a7,a7,a7,a7,a7,a7,a7),a7,a7,a7))
n=A.a([m,B.aj,j,B.bs,n,B.N,k,B.R,A.p(a7,A.w(g,B.B,a7,B.e,B.h,0,B.p),B.f,a7,a7,new A.o(i,a7,a7,h,a7,a7,B.m),a7,a7,a7,a7,B.bS,a7,a7,1/0)],l)
if(s.length!==0){m=A.a([B.N,A.c("Top 3 ranked right now",a7,a7,a7,a7,a7,a7,A.l(a7,a7,b1?C.cl:B.c,a7,a7,a7,a7,a7,a7,a7,a7,12.5,a7,a7,B.C,a7,a7,!0,a7,a7,a7,a7,a7,a7,a7,a7),a7,a7,a7),B.bs],l)
for(t=A.aoB(s,0,t),k=J.aQ(t.a),t=t.b,j=new A.F8(k,t),i=x.N,h=x.z;j.C();){g=j.c
g=g>=0?new A.y(t+g,k.gP(k)):A.bi(A.fb())
f=g.b
e=J.a1(f)
d=A.v(e.h(f,"symbol"))
a0=A.v(e.h(f,"score"))
a1=e.h(f,a8)
a1=(u.b(a1)?A.a_(a1,i,h):A.S(i,h)).h(0,"base")
a1=A.v(a1==null?"?":a1)
a2=e.h(f,a8)
a2=(u.b(a2)?A.a_(a2,i,h):A.S(i,h)).h(0,"record")
a2=A.v(a2==null?0:a2)
a3=e.h(f,a8)
a3=(u.b(a3)?A.a_(a3,i,h):A.S(i,h)).h(0,"bucket")
a3=A.v(a3==null?0:a3)
if(J.z(e.h(f,a9),!0))a4="PASSES"
else{a4=e.h(f,"why")
if(a4==null)a4=""}a4=A.v(a4)
if(J.z(e.h(f,a9),!0))a5=C.cH
else a5=b1?C.bT:C.bV
e=J.z(e.h(f,a9),!0)?B.C:B.cF
m.push(new A.C(B.rf,A.c(""+(g.a+1)+". "+d+" \xb7 score "+a0+" (strength and trend "+a1+", record "+a2+", setup size "+a3+") \xb7 "+a4,a7,a7,a7,a7,a7,a7,new A.F(!0,a5,a7,a7,a7,a7,11.5,e,a7,a7,a7,a7,1.3,a7,a7,a7,a7,a7,a7,a7,a7,a7,a7,a7,a7,a7),a7,a7,a7),a7))}B.d.u(n,m)}if(p.length!==0){u=A.cW(A.a([A.cW(a7,a7,a7,a7,a7,a7,a7,a7,a7,A.l(a7,a7,a6.a.c==="options"?B.az:B.as,a7,a7,a7,a7,a7,a7,a7,a7,a7,a7,a7,B.u,a7,a7,!0,a7,a7,a7,a7,a7,a7,a7,a7),"What it learned: "),A.cW(a7,a7,a7,a7,a7,a7,a7,a7,a7,a7,p)],x.R),a7,a7,a7,a7,a7,a7,a7,a7,a7,a7)
B.d.u(n,A.a([B.N,A.GB(u,a7,a7,A.l(a7,a7,b1?C.cl:B.c,a7,a7,a7,a7,a7,a7,a7,a7,12,a7,a7,a7,a7,1.35,!0,a7,a7,a7,a7,a7,a7,a7,a7),a7)],l))}if(o.length!==0)B.d.u(n,A.a([B.aj,A.c(o,a7,a7,a7,a7,a7,a7,A.l(a7,a7,E.i1,a7,a7,a7,a7,a7,a7,a7,a7,12,a7,a7,B.O,a7,1.3,!0,a7,a7,a7,a7,a7,a7,a7,a7),a7,a7,a7)],l))
if(q.length!==0){u=A.cW(A.a([A.cW(a7,a7,a7,a7,a7,a7,a7,a7,a7,A.l(a7,a7,a6.a.c==="options"?B.az:B.as,a7,a7,a7,a7,a7,a7,a7,a7,a7,a7,a7,B.u,a7,a7,!0,a7,a7,a7,a7,a7,a7,a7,a7),"Last decision: "),A.cW(a7,a7,a7,a7,a7,a7,a7,a7,a7,a7,q)],x.R),a7,a7,a7,a7,a7,a7,a7,a7,a7,a7)
B.d.u(n,A.a([B.aj,A.GB(u,a7,a7,A.l(a7,a7,b1?C.cl:B.c,a7,a7,a7,a7,a7,a7,a7,a7,12,a7,a7,a7,a7,1.3,!0,a7,a7,a7,a7,a7,a7,a7,a7),a7)],l))}return a6.wu(b5,A.w(n,B.B,a7,B.e,B.h,0,B.p))},
c78(a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=this,a2=null,a3="text",a4=D.dE(a6.h(0,"learning"))
if(a4.a===0)return B.bK
w=new D.e8Z(a4)
v=w.$1("lessons")
u=w.$1("benched")
t=w.$1("lastLosses")
s=x.g.a(a4.h(0,"review"))
if(s==null)s=B.bO
s=J.b8(s,new D.e8W(),x.N)
r=A.B(s,s.$ti.k("aj.E"))
s=a4.h(0,"pauseUntil")
q=A.be(A.v(s==null?"":s))
p=new D.e8X(a5)
o=new D.e8Y(a1,a5)
s=A.V(B.R2,a1.a.c==="options"?B.az:B.as,a2,a2,a2,18)
n=a5.a
m=A.c("LEARNING",a2,a2,a2,a2,a2,a2,A.l(a2,a2,n?C.cl:B.c,a2,a2,a2,a2,a2,a2,a2,a2,12,a2,a2,B.u,a2,a2,!0,a2,0.8,a2,a2,a2,a2,a2,a2),a2,a2,a2)
l=J.a1(v)
k=l.gJ(v)===0?"NO LESSONS YET":""+l.gJ(v)+" ACTIVE"
if(l.gJ(v)===0)j=n?C.bT:C.bV
else j=a1.a.c==="options"?B.az:B.as
i=x.p
j=A.a([A.A(A.a([s,B.b6,m,B.aX,a1.C3(k,j)],i),B.l,a2,B.e,B.h,0,a2,a2)],i)
if(J.z(a4.h(0,"setupNeeded"),!0))j.push(new A.C(B.hz,A.c("The learning store is not set up yet: run the learning SQL in Supabase.",a2,a2,a2,a2,a2,a2,A.l(a2,a2,C.d5,a2,a2,a2,a2,a2,a2,a2,a2,12,a2,a2,B.O,a2,a2,!0,a2,a2,a2,a2,a2,a2,a2,a2),a2,a2,a2),a2))
j.push(p.$1("Lessons active today"))
if(l.gJ(v)===0){s=a4.h(0,"empty")
s=A.v(s==null?"No lessons yet \u2014 still learning this market.":s)
j.push(A.c(s,a2,a2,a2,a2,a2,a2,A.l(a2,a2,n?C.bT:C.bV,a2,a2,a2,a2,a2,a2,a2,a2,12,a2,a2,a2,a2,a2,!0,a2,a2,a2,a2,a2,a2,a2,a2),a2,a2,a2))}for(s=v.length,h=0;h<v.length;v.length===s||(0,A.I)(v),++h){g=v[h]
m=J.a1(g)
l=m.h(g,a3)
l=A.v(l==null?"":l)
j.push(o.$1(l+(m.h(g,"at")==null?"":" \xb7 "+D.hqn(D.hov(m.h(g,"at"))))))}if(q!=null&&q.c9(new A.W(Date.now(),0,!1)))j.push(o.$3$c$icon("Paused after 2 losses in a row until "+D.LL(D.SD(q.aa()))+" ET",E.i1,C.bW2))
if(J.z(a4.h(0,"stepUpNext"),!0))j.push(o.$3$c$icon("The next entry needs +0.8% or more in 30 minutes (after 2 losses in a row)",E.i1,B.mG))
j.push(p.$1("Benched markets"))
if(J.ad(u)===0)j.push(A.c("None benched today.",a2,a2,a2,a2,a2,a2,A.l(a2,a2,n?C.bT:C.bV,a2,a2,a2,a2,a2,a2,a2,a2,12,a2,a2,a2,a2,a2,!0,a2,a2,a2,a2,a2,a2,a2,a2),a2,a2,a2))
for(s=u.length,h=0;h<u.length;u.length===s||(0,A.I)(u),++h){f=u[h]
m=J.a1(f)
l=m.h(f,a3)
j.push(o.$3$c$icon(A.v(l==null?m.h(f,"symbol"):l),C.d5,B.tN))}j.push(p.$1("What the next entry needs"))
s=B.i.a5(D.c4(a4.h(0,"thresholdPct")),2)
m=a1.a.c==="options"?B.az:B.as
m=a1.C3("STRENGTH +"+s+"%",m)
s=B.i.M(D.c4(a4.h(0,"maxHold")))
l=a1.a.c==="options"?B.az:B.as
l=a1.C3("MAX HOLD "+s+" MIN",l)
s=B.i.a5(D.c4(a4.h(0,"chaseCapPct")),1)
k=a1.a.c==="options"?B.az:B.as
k=a1.C3("NO-CHASE "+s+"% IN 1 H",k)
s=B.i.M(D.c4(a4.h(0,"chopSkipAt")))
e=a1.a.c==="options"?B.az:B.as
e=A.a([m,l,k,a1.C3("CHOP SKIP "+s+"+",e)],i)
if(J.z(a4.h(0,"need60"),!0))e.push(a1.C3("1-HOUR TREND MUST AGREE",E.i1))
j.push(A.c_(B.bI,e,B.br,a2,6,6))
j.push(p.$1("Last 5 loss reasons"))
if(J.ad(t)===0)j.push(A.c("No graded losses yet.",a2,a2,a2,a2,a2,a2,A.l(a2,a2,n?C.bT:C.bV,a2,a2,a2,a2,a2,a2,a2,a2,12,a2,a2,a2,a2,a2,!0,a2,a2,a2,a2,a2,a2,a2,a2),a2,a2,a2))
for(s=t.length,h=0;h<t.length;t.length===s||(0,A.I)(t),++h){g=t[h]
m=J.a1(g)
l=A.v(m.h(g,"market"))
k=m.h(g,"pnl")
if(!(typeof k=="number")){k=A.cA(A.v(k==null?"":k))
if(k==null)k=0}k=D.eg(k,!0,!0)
e=D.hHc(A.v(m.h(g,"reason")))
m=m.h(g,a3)
m=A.v(m==null?"":m)
d=n?C.cl:B.c
j.push(o.$3$c$icon(l+" "+k+" \xb7 "+e+": "+m,d,B.cC))}if(r.length!==0){s=A.a([p.$1("What I learned yesterday")],i)
for(m=r.length,h=0;h<r.length;r.length===m||(0,A.I)(r),++h){a0=r[h]
s.push(o.$2$c(a0,n?C.bT:C.bV))}B.d.u(j,s)}return a1.wu(a5,A.w(j,B.B,a2,B.e,B.h,0,B.p))},
b0F(d){var w=x.g.a(d.h(0,"markets"))
if(w==null)w=B.bO
w=J.cK(w,x.f)
w=A.cs(w,new D.e97(),w.$ti.k("M.E"),x.P)
w=A.B(w,A.a3(w).k("M.E"))
return w},
b9I(d){if(d.length===0)return null
return B.d.dr(d,new D.e9k(this),new D.e9l(d))},
c9D(d,e){var w,v,u,t,s,r,q=this,p=null,o=q.b0F(e)
if(o.length===0)return B.bK
w=q.b9I(o)
w.toString
v=new A.X(o,new D.e94(),A.U(o).k("X<1>")).gJ(0)
u=o.length
t=d.a
u=A.c("Its markets ("+u+")",p,p,p,p,p,p,A.l(p,p,t?C.cl:B.c,p,p,p,p,p,p,p,p,14,p,p,B.C,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)
s=v===0
r=s?"NONE PASSING NOW":""+v+" PASSING NOW"
if(s)s=t?C.bT:C.bV
else s=C.cH
s=q.C3(r,s)
r=x.p
return new A.C(B.d2,A.w(A.a([new A.C(C.apk,A.A(A.a([u,B.aa,s,B.aX,A.c("tap one",p,p,p,p,p,p,A.l(p,p,t?C.bT:C.bV,p,p,p,p,p,p,p,p,11,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)],r),B.l,p,B.e,B.h,0,p,p),p),new A.a4(p,96,A.hN(B.f,p,new D.e95(q,o,w,d),o.length,p,p,B.aK,new D.e96(),!1),p)],r),B.B,p,B.e,B.h,0,B.p),p)},
bMc(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f="symbol",e=h.b9I(h.b0F(a0))
if(e==null)return B.bK
w=J.a1(e)
v=x.g
u=v.a(D.dE(w.h(e,"chart")).h(0,"points"))
if(u==null)u=B.bO
t=x.f
u=J.cK(u,t)
s=x.P
u=A.cs(u,new D.e8T(),u.$ti.k("M.E"),s)
r=A.B(u,A.a3(u).k("M.E"))
q=D.dE(w.h(e,"analysis"))
p=D.c4(w.h(e,"changePct"))
u=D.bEp(A.v(w.h(e,f)),24)
o=A.v(w.h(e,f))
n=d.a
o=A.c(o,g,g,g,g,g,g,A.l(g,g,n?C.cl:B.c,g,g,g,g,g,g,g,g,15,g,g,B.C,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)
m=w.h(e,"name")
m=A.v(m==null?"":m)
l=x.p
m=A.E(A.w(A.a([o,A.c(m,g,1,B.a2,g,g,g,A.l(g,g,n?C.bT:C.bV,g,g,g,g,g,g,g,g,11.5,g,g,g,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)],l),B.B,g,B.e,B.h,0,B.p),1)
o=D.eg(D.c4(w.h(e,"price")),!0,!1)
o=A.c(o,g,g,g,g,g,g,A.l(g,g,n?C.cl:B.c,g,g,g,g,g,g,g,g,17,g,g,B.C,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)
k=p>=0
j=k?"+":""
i=B.i.a5(p,2)
u=A.a([A.A(A.a([u,B.aa,m,A.w(A.a([o,A.c(j+i+"% today",g,g,g,g,g,g,A.l(g,g,k?C.cH:C.d5,g,g,g,g,g,g,g,g,11,g,g,B.C,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)],l),B.dr,g,B.e,B.h,0,B.p)],l),B.l,g,B.e,B.h,0,g,g),B.R],l)
o=r.length
if(o>1){o=B.d.fB(r,Math.max(0,o-36))
m=D.c4(w.h(e,"price"))
v=v.a(a0.h(0,"trades"))
v=J.cK(v==null?B.bO:v,t)
s=A.cs(v,new D.e8U(),v.$ti.k("M.E"),s)
v=A.B(s,A.a3(s).k("M.E"))
w=A.v(w.h(e,f))
s=h.a.c==="options"?B.az:B.as
u.push(new D.a_R(o,d,g,!0,m,D.hNk(v,w,s,t.b(D.dE(a0.h(0,"state")).h(0,"shadow"))?D.dE(D.dE(a0.h(0,"state")).h(0,"shadow")):g),g))}else u.push(A.c(y.b,g,g,g,g,g,g,A.l(g,g,n?C.bT:C.bV,g,g,g,g,g,g,g,g,12,g,g,g,g,g,!0,g,g,g,g,g,g,g,g),g,g,g))
if(q.h(0,"why")!=null){w=A.v(q.h(0,"why"))
B.d.u(u,A.a([B.aj,A.c("Analysis: "+w,g,g,g,g,g,g,A.l(g,g,n?C.bT:C.bV,g,g,g,g,g,g,g,g,11.5,g,g,g,g,1.3,!0,g,g,g,g,g,g,g,g),g,g,g)],l))}return h.wu(d,A.w(u,B.B,g,B.e,B.h,0,B.p))},
cCL(d,a0){var w,v,u,t,s,r=this,q=null,p="takeProfitUsd",o="stopLossUsd",n="maxHoldMin",m="exitCheckEveryMin",l=D.dE(a0.h(0,"settings")),k=D.dE(a0.h(0,"today")),j=new D.e9o(d),i=r.a.c==="options"?"+"+D.eg(D.c4(l.h(0,p)),!0,!1):"+"+B.i.a5(D.c4(l.h(0,"takeProfitPct")),0)+"% (+$"+B.i.a5(D.c4(l.h(0,p)),0)+")",h=r.a.c==="options"?"-"+D.eg(D.c4(l.h(0,o)),!0,!1):"-"+B.i.a5(D.c4(l.h(0,"stopLossPct")),0)+"% (-$"+B.i.a5(D.c4(l.h(0,o)),0)+")",g=A.V(B.mF,r.a.c==="options"?B.az:B.as,q,q,q,18),f=d.a,e=x.p
g=A.A(A.a([g,B.b6,A.c("THE 30-MINUTE LAW",q,q,q,q,q,q,A.l(q,q,f?C.cl:B.c,q,q,q,q,q,q,q,q,12,q,q,B.u,q,q,!0,q,0.8,q,q,q,q,q,q),q,q,q)],e),B.l,q,B.e,B.h,0,q,q)
w=B.i.a5(D.c4(l.h(0,n)),0)
v=B.i.a5(D.c4(l.h(0,m)),0)
w=A.c("Every trade closes within 30 minutes at most, win, lose or flat. After the options no-follow-through lesson new trades get a shorter max hold: now "+w+" minutes. Exits are checked every "+v+" minute, and the hard close sells at the last check before the max hold.",q,q,q,q,q,q,A.l(q,q,f?C.bT:C.bV,q,q,q,q,q,q,q,q,11.5,q,q,q,q,1.35,!0,q,q,q,q,q,q,q,q),q,q,q)
v=j.$2("Max hold now",B.i.a5(D.c4(l.h(0,n)),0)+" min")
u=j.$2("Exit checks","every "+B.i.a5(D.c4(l.h(0,m)),0)+" min")
f=A.A(A.a([v,B.b6,u,B.b6,j.$2("Each trade",r.a.c==="options"?"1 call/put \u2264$"+B.i.a5(D.c4(l.h(0,"maxPremiumUsd")),0):"$"+B.i.a5(D.c4(l.h(0,"tradeUsd")),0))],e),B.l,q,B.e,B.h,0,q,q)
v=j.$3$c("Take profit",i,C.cH)
u=j.$3$c("Stop loss",h,C.d5)
t=k.h(0,"trades")
t=A.v(t==null?0:t)
s=l.h(0,"maxTrades")
return r.wu(d,A.w(A.a([g,B.at,w,B.R,f,B.aj,A.A(A.a([v,B.b6,u,B.b6,j.$2("Trades today",t+" of "+A.v(s==null?"-":s))],e),B.l,q,B.e,B.h,0,q,q),B.aj,A.A(A.a([j.$2("Daily stop","-$"+B.i.a5(D.c4(l.h(0,"dailyStopUsd")),0)),B.b6,j.$2("Total brake","-$"+B.i.a5(D.c4(l.h(0,"totalBrakeUsd")),0)),B.b6,j.$2("Strength","+"+B.i.a5(D.c4(l.h(0,"strengthPct")),2)+"% in 30 min")],e),B.l,q,B.e,B.h,0,q,q)],e),B.B,q,B.e,B.h,0,B.p))},
cnY(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=D.dE(e.h(0,"options"))
if(i.a===0)return B.bK
if(J.z(i.h(0,"weekend"),!0)){w=i.h(0,"message")
return k.Rw(d,J.k(w==null?"":w),B.b_)}if(!J.z(i.h(0,"enabled"),!0)){w=i.h(0,"message")
w=J.k(w==null?"Options are not enabled on the paper account yet":w)
return k.Rw(d,w,J.z(i.h(0,"enabled"),!1)?E.i1:B.b_)}v=D.dE(i.h(0,"preview"))
u=J.z(i.h(0,"fits"),!0)
w=i.h(0,"right")
t=A.v(w==null?"call":w)
w=i.h(0,"underlying")
s=A.v(w==null?"SPY":w)
w=x.g.a(i.h(0,"tried"))
if(w==null)w=B.bO
w=J.cK(w,x.f)
w=A.cs(w,new D.e9a(),w.$ti.k("M.E"),x.P)
r=A.B(w,A.a3(w).k("M.E"))
w=s+" "
q=d.a
p=A.E(A.c(w+t.toUpperCase()+" IT WOULD CHOOSE NOW",j,j,B.a2,j,j,j,A.l(j,j,q?C.bT:C.bV,j,j,j,j,j,j,j,j,10.5,j,j,B.u,j,j,!0,j,0.8,j,j,j,j,j,j),j,j,j),1)
o=u?"FITS":"NONE FITS"
n=x.p
o=A.A(A.a([p,k.C3(o,u?C.cH:C.d5)],n),B.l,j,B.e,B.h,0,j,j)
p=A.a([o,B.at,A.c("For the best-ranked market right now: a call when its trend is up, a put when it is down. Near the money (the strike closest to the price), at least 3 days to expiry, $150 or less, spread at most 10% of the premium.",j,j,j,j,j,j,A.l(j,j,q?C.bT:C.bV,j,j,j,j,j,j,j,j,11.5,j,j,j,j,j,!0,j,j,j,j,j,j,j,j),j,j,j),B.N],n)
if(u&&v.a!==0){o=D.eg(D.c4(v.h(0,"strike")),!0,!1)
m=D.aRj(v.h(0,"expiry"))
w=A.c(w+o+" "+t+" \xb7 expires "+m,j,j,j,j,j,j,A.l(j,j,q?C.cl:B.c,j,j,j,j,j,j,j,j,16,j,j,B.C,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)
o=D.eg(D.c4(v.h(0,"premium")),!0,!1)
m=D.eg(D.c4(v.h(0,"cost")),!0,!1)
l=D.eg(D.c4(i.h(0,"spot")),!0,!1)
o=A.c("Premium "+o+" a share x 100 = "+m+"  \xb7  "+s+" "+l,j,j,j,j,j,j,A.l(j,j,q?C.bT:C.bV,j,j,j,j,j,j,j,j,12,j,j,j,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)
m=i.h(0,"why")
B.d.u(p,A.a([w,B.bs,o,B.at,A.c("It fits: "+A.v(m==null?"":m)+". On a passing setup it would buy this one.",j,j,j,j,j,j,C.fP3,j,j,j)],n))}else{w=i.h(0,"why")
p.push(A.c(A.v(w==null?"":w)+". It keeps checking every minute; the budget is never raised.",j,j,j,j,j,j,C.fV9,j,j,j))}if(r.length!==0)B.d.u(p,A.a([B.N,A.c("The $150 stepping, in order:",j,j,j,j,j,j,A.l(j,j,q?C.cl:B.c,j,j,j,j,j,j,j,j,12,j,j,B.C,j,j,!0,j,j,j,j,j,j,j,j),j,j,j),B.at,new A.fm(new D.e9b(k,r,d),j)],n))
return k.wu(d,A.w(p,B.B,j,B.e,B.h,0,B.p))},
cKZ(d,e){var w,v,u=this,t=null,s=x.g.a(e.h(0,"trades"))
if(s==null)s=B.bO
s=J.cK(s,x.f)
s=A.cs(s,new D.e9v(),s.$ti.k("M.E"),x.P)
w=A.B(s,A.a3(s).k("M.E"))
s=d.a
v=A.a([A.c("Trades",t,t,t,t,t,t,A.l(t,t,s?C.cl:B.c,t,t,t,t,t,t,t,t,16,t,t,B.C,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),B.aj],x.p)
if(w.length===0)v.push(A.c("No trades yet. This system is picky: it only takes strong setups.",t,t,t,t,t,t,A.l(t,t,s?C.bT:C.bV,t,t,t,t,t,t,t,t,12.5,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),t,t,t))
s=J.aQ(u.y?w:A.cU(w,0,A.dw(4,"count",x.S),A.U(w).c))
while(s.C())v.push(u.cKY(d,s.gP(s)))
s=w.length
if(s>4)v.push(A.at(A.bL(!1,A.c(u.y?"Show less":"Show all ("+s+")",t,t,t,t,t,t,t,t,t,t),t,t,!0,t,t,t,new D.e9w(u),t,t),t,t,t))
return u.wu(d,A.w(v,B.B,t,B.e,B.h,0,B.p))},
cKY(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=null,g="entryPrice",f=J.a1(a3),e=J.z(f.h(a3,"decision"),"would buy"),d=D.dE(f.h(a3,"details")),a0=x.f.b(d.h(0,"option"))?D.dE(d.h(0,"option")):h,a1=D.c4(d.h(0,"pnl"))
if(e)w=B.ci
else w=a1>=0?C.cH:C.d5
v=a0!=null
if(v){u=A.v(f.h(a3,"asset"))
t=D.eg(D.c4(a0.h(0,"strike")),!0,!1)
s=a0.h(0,"right")
r=u+" "+t+" "+A.v(s==null?"call":s)}else r=A.v(f.h(a3,"asset"))
if(e)q=v?"expires "+D.aRj(a0.h(0,"expiry"))+" \xb7 premium "+D.eg(D.c4(d.h(0,g)),!0,!1)+" x 100":"at "+D.eg(D.c4(d.h(0,g)),!0,!1)
else{v=D.eg(D.c4(d.h(0,g)),!0,!1)
u=D.eg(D.c4(d.h(0,"exitPrice")),!0,!1)
t=d.h(0,"heldMin")==null?"":B.i.a5(D.c4(d.h(0,"heldMin")),0)+" min \xb7 "
s=f.h(a3,"reason")
q=v+" to "+u+" \xb7 "+t+D.is6(J.k(s==null?"":s))}p=D.dE(d.h(0,"analysis"))
if(e){v=p.h(0,"why")
o=J.k(v==null?"":v)}else{v=d.h(0,"entryWhy")
o=J.k(v==null?"":v)}if(e)n=""
else{v=d.h(0,"result")
if(v==null)v=a1>0?"WIN":"LOSS"
n=J.k(v)}if(e)m=""
else{v=d.h(0,"lossText")
m=J.k(v==null?"":v)}v=o.length===0
u=v?h:new D.e9t(this,a2,r,e,p,m,n,o)
t=a2.a
s=t?C.oO:C.oJ
l=w.j(0.14)
k=A.m(12)
l=A.p(h,A.V(e?B.tY:B.rt,w,h,h,h,18),B.f,h,h,new A.o(l,h,h,k,h,h,B.m),h,36,h,h,h,h,h,36)
k=e?"Bought":"Sold"
k=A.c(k+" "+r,h,h,h,h,h,h,A.l(h,h,t?C.cl:B.c,h,h,h,h,h,h,h,h,13.5,h,h,B.C,h,h,!0,h,h,h,h,h,h,h,h),h,h,h)
j=x.p
k=A.a([k,A.c(q,h,2,B.a2,h,h,h,A.l(h,h,t?C.bT:C.bV,h,h,h,h,h,h,h,h,11.5,h,h,h,h,h,!0,h,h,h,h,h,h,h,h),h,h,h)],j)
if(m.length!==0)k.push(A.c(m,h,3,B.a2,h,h,h,C.aZx,h,h,h))
if(!v){v=e?"Why this trade: "+o:n+" \xb7 it was bought because: "+o
if(e)i=this.a.c==="options"?B.az:B.as
else i=n==="WIN"?C.cH:C.d5
k.push(A.c(v,h,2,B.a2,h,h,h,A.l(h,h,i,h,h,h,h,h,h,h,h,11,h,h,B.O,h,1.3,!0,h,h,h,h,h,h,h,h),h,h,h))}f=f.h(a3,"et_time")
f=J.k(f==null?"":f)
k.push(A.c(f,h,h,h,h,h,h,A.l(h,h,t?C.bT:C.bV,h,h,h,h,h,h,h,h,10.5,h,h,h,h,h,!0,h,h,h,h,h,h,h,h),h,h,h))
f=A.E(A.w(k,B.B,h,B.e,B.h,0,B.p),1)
v=e?"-"+D.eg(D.c4(d.h(0,"amount")),!0,!1):"+"+D.eg(D.c4(d.h(0,"outValue")),!0,!1)
v=A.a([A.c(v,h,h,h,h,h,h,A.l(h,h,t?C.cl:B.c,h,h,h,h,h,h,h,h,13.5,h,h,B.C,h,h,!0,h,h,h,h,h,h,h,h),h,h,h)],j)
if(!e){k=D.eg(a1,!0,!0)
v.push(A.c(k,h,h,h,h,h,h,A.l(h,h,a1>=0?C.cH:C.d5,h,h,h,h,h,h,h,h,12,h,h,B.C,h,h,!0,h,h,h,h,h,h,h,h),h,h,h))}if(e)v.push(A.c("put in",h,h,h,h,h,h,A.l(h,h,t?C.bT:C.bV,h,h,h,h,h,h,h,h,11,h,h,h,h,h,!0,h,h,h,h,h,h,h,h),h,h,h))
return A.aM(!1,h,!0,A.p(h,A.A(A.a([l,B.ar,f,B.aa,A.w(v,B.dr,h,B.e,B.h,0,B.p)],j),B.l,h,B.e,B.h,0,h,h),B.f,h,h,new A.o(h,h,new A.bE(B.a1,B.a1,new A.ax(s,1,B.r,-1),B.a1),h,h,h,B.m),h,h,h,h,B.x6,h,h,h),h,!0,h,h,h,h,h,h,h,h,h,h,h,u,h,h,h,h,h,h,h)},
cEQ(d,e,f){var w,v,u=null,t=x.g.a(f.h(0,"ranked"))
if(t==null)t=B.bO
t=J.cK(t,x.f)
t=A.cs(t,new D.e9q(),t.$ti.k("M.E"),x.P)
w=A.B(t,A.a3(t).k("M.E"))
v=D.dE(f.h(0,"record"))
t=this.c
t.toString
A.cf(u,u,!0,u,new D.e9r(d,e,f,new D.e9s(),v,w),t,u,!0,!0,x.H)},
bFO(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k="asset",j=m.z,i=m.e
i=j?i:A.cU(i,0,A.dw(4,"count",x.S),A.U(i).c).dd(0)
j=d.a
w=A.c("Activity",l,l,l,l,l,l,A.l(l,l,j?C.cl:B.c,l,l,l,l,l,l,l,l,16,l,l,B.C,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)
v=x.p
w=A.a([A.A(A.a([w,B.aX,A.c("newest first",l,l,l,l,l,l,A.l(l,l,j?C.bT:C.bV,l,l,l,l,l,l,l,l,11,l,l,l,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)],v),B.l,l,B.e,B.h,0,l,l),B.aj],v)
if(m.e.length===0)w.push(A.c("Nothing yet. Buys, sells and passing setups that were skipped show up here.",l,l,l,l,l,l,A.l(l,l,j?C.bT:C.bV,l,l,l,l,l,l,l,l,12.5,l,l,l,l,l,!0,l,l,l,l,l,l,l,l),l,l,l))
for(u=i.length,t=0;t<i.length;i.length===u||(0,A.I)(i),++t){s=i[t]
r=A.V(B.no,j?C.bT:C.bV,l,l,l,7)
q=J.a1(s)
if(J.z(q.h(s,"kind"),"lesson"))p="Lesson"+(q.h(s,k)==null?"":" \xb7 "+A.v(q.h(s,k)))
else{p=q.h(s,"decision")
p=A.v(p==null?"":p)
p+=q.h(s,k)==null?"":" \xb7 "+A.v(q.h(s,k))}if(J.z(q.h(s,"kind"),"lesson"))o=m.a.c==="options"?B.az:B.as
else o=j?C.cl:B.c
p=A.c(p,l,l,l,l,l,l,new A.F(!0,o,l,l,l,l,12.5,B.C,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l),l,l,l)
o=q.h(s,"reason")
o=J.k(o==null?"":o)
n=j?C.bT:C.bV
p=A.w(A.a([p,A.c(o,l,l,l,l,l,l,new A.F(!0,n,l,l,l,l,11.5,l,l,l,l,l,1.3,l,l,l,l,l,l,l,l,l,l,l,l,l),l,l,l)],v),B.B,l,B.e,B.h,0,B.p)
q=q.h(s,"et_time")
q=D.hqn(J.k(q==null?"":q))
o=j?C.bT:C.bV
w.push(new A.C(B.jZ,new A.c0(B.aK,B.e,B.h,B.B,l,B.p,l,0,A.a([new A.C(K.Ph,r,l),B.aa,new A.bu(1,B.b7,p,l),B.b6,A.c(q,l,l,l,l,l,l,new A.F(!0,o,l,l,l,l,10.5,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l),l,l,l)],v),l),l))}if(m.e.length>4)w.push(A.at(A.bL(!1,A.c(m.z?"Show less":"Show all",l,l,l,l,l,l,l,l,l,l),l,l,!0,l,l,l,new D.e8S(m),l,l),l,l,l))
return m.wu(d,A.w(w,B.B,l,B.e,B.h,0,B.p))},
czp(d,e){var w,v,u,t,s,r,q,p,o,n,m=null,l=x.g.a(e.h(0,"rules"))
if(l==null)l=B.bO
l=J.b8(l,new D.e9h(),x.N)
w=A.B(l,l.$ti.k("aj.E"))
l=this.c
l.toString
l=A.Q(l).aHA(B.L)
v=d.a
u=A.c("The rules it follows",m,m,m,m,m,m,A.l(m,m,v?C.cl:B.c,m,m,m,m,m,m,m,m,15,m,m,B.C,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)
t=x.p
s=A.a([],t)
for(r=w.length,q=0;q<w.length;w.length===r||(0,A.I)(w),++q){p=w[q]
o=this.a.c==="options"?B.az:B.as
o=A.c("\u2022  ",m,m,m,m,m,m,new A.F(!0,o,m,m,m,m,m,B.u,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m,m,m)
n=v?C.cl:B.c
s.push(new A.C(B.eC,new A.c0(B.aK,B.e,B.h,B.B,m,B.p,m,0,A.a([o,new A.bu(1,B.b7,A.c(p,m,m,m,m,m,m,new A.F(!0,n,m,m,m,m,12.5,m,m,m,m,m,1.35,m,m,m,m,m,m,m,m,m,m,m,m,m),m,m,m),m)],t),m),m))}return this.wu(d,new A.oC(l,N.hiH(m,s,B.ag,m,m,m,!1,m,m,m,B.ag,u),m))},
b3U(d,e,f){var w=null,v=d.a,u=v?B.c.j(0.92):C.ib,t=A.m(20),s=e==null?w:e.j(0.5)
if(s==null)v=v?B.c:C.nf
else v=s
v=A.K(v,B.r,1)
s=A.a([new A.aa(0,B.H,d.gIc(),B.cy,14)],x.V)
return A.p(w,A.aE(!1,B.a3,!0,w,f,B.f,w,0,w,w,w,w,w,B.i7),B.f,w,w,new A.o(u,w,v,t,s,w,B.m),w,w,w,B.dV,B.bD,w,w,w)},
wu(d,e){return this.b3U(d,null,e)},
Rw(d,e,f){var w=null,v=f.j(0.12),u=A.m(16),t=A.K(f.j(0.45),B.r,1),s=A.V(B.QU,f,w,w,w,20)
return A.p(w,A.A(A.a([s,B.ar,A.E(A.c(e,w,w,w,w,w,w,A.l(w,w,d.a?C.cl:B.c,w,w,w,w,w,w,w,w,12.5,w,w,w,w,1.35,!0,w,w,w,w,w,w,w,w),w,w,w),1)],x.p),B.l,w,B.e,B.h,0,w,w),B.f,w,w,new A.o(v,w,t,u,w,w,B.m),w,w,w,B.dV,B.bg,w,w,w)},
C3(d,e){var w=null,v=e.j(0.14),u=A.m(999)
return A.p(w,A.c(d,w,w,w,w,w,w,A.l(w,w,e,w,w,w,w,w,w,w,w,10,w,w,B.u,w,w,!0,w,0.5,w,w,w,w,w,w),w,w,w),B.f,w,w,new A.o(v,w,w,u,w,w,B.m),w,w,w,w,B.f6,w,w,w)},
a1b(d,e,f){var w=null,v=d.a,u=v?B.c.j(0.92):C.ib,t=A.K(v?B.c:C.nf,B.r,1)
return A.aE(!1,B.a3,!0,w,A.aM(!1,w,!0,A.p(w,A.V(e,v?C.cl:B.c,w,w,w,18),B.f,w,w,new A.o(w,w,t,w,w,w,B.a6),w,40,w,w,w,w,w,40),B.cM,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),B.f,u,0,w,w,B.cM,w,w,B.ai)}}
D.aBD.prototype={
R(){return new D.bfI()}}
D.bfI.prototype={
Z(){this.a3()
this.d=A.d4(B.fr,new D.db4(this))},
t(){var w=this.d
if(w!=null)w.a1(0)
this.a2()},
B(d){var w,v,u,t=null,s=this.a.c,r=s==null?t:s.bx(new A.W(Date.now(),0,!1))
if(r==null||r.a<0)w="0:00"
else{s=r.a
w=""+B.o.ao(s,6e7)+":"+B.a.aZ(B.o.v(B.o.F(B.o.ao(s,1e6),60)),2,"0")}v=this.a.d
s=v.j(0.14)
u=A.m(999)
return A.p(t,A.c("closes in "+w+" at most",t,t,t,t,t,t,A.l(t,t,v,t,t,t,t,t,t,t,t,10,t,t,B.u,t,t,!0,t,0.5,t,t,t,t,t,t),t,t,t),B.f,t,t,new A.o(s,t,t,u,t,t,B.m),t,t,t,t,B.f6,t,t,t)}}
D.aKX.prototype={
R(){return new D.bwn()}}
D.bwn.prototype={
Z(){this.a3()
this.d=A.d4(B.fr,new D.fia(this))},
t(){var w=this.d
if(w!=null)w.a1(0)
this.a2()},
B(a1){var w,v,u,t,s,r,q,p,o,n=this,m=null,l=new A.W(Date.now(),0,!1).aa(),k=n.a.c.aa().bL(3e8),j=n.a,i=j.d.aa(),h=B.o.ao(i.bx(j.c.aa()).a,6e7),g=j.e?C.cH:C.d5,f=l.c9(k),e=l.c9(i),d=A.aXm(A.bD(l),A.bO(l),A.bW(l),A.cX(l),A.fx(l),0,0,0).bL(6e7).bx(l),a0=B.o.ao(d.a,1e6)>=45
if(e){w="Being graded now: WIN if the price finished "+(n.a.e?"higher":"lower")+"."
v="SIGNAL CLOSED"}else if(f){v="TOO LATE TO ENTER"
w="The 5-minute entry window has passed. Wait for the next signal: entering an old signal is how money is lost."}else{if(a0)v=(n.a.e?"BUY":"SELL")+" NOW"
else v="Enter in "+D.fi7(d)
w="Entry window closes in "+D.fi7(k.bx(l))+" \xb7 enter at the start of a minute."}j=new D.fi8()
u=!f
t=!u||e?B.an:g
s=A.m(14)
r=A.a([new A.aa(0,B.H,(!u||e?B.v:g).j(0.25),B.cN,12)],x.V)
q=A.c(v,m,m,m,m,m,m,A.l(m,m,B.c,m,m,m,m,m,m,m,G.AE,a0&&u&&!e?26:22,m,m,B.u,m,m,!0,m,0.6,m,m,m,m,m,m),B.K,m,m)
p=A.c(w,m,m,m,m,m,m,C.fIl,B.K,m,m)
o=j.$2("Trade for",""+h+" min")
u=x.p
return A.p(m,A.w(A.a([q,B.bs,p,B.N,A.A(A.a([o,B.b6,j.$2("Entry window",f?"closed":D.fi7(k.bx(l))),B.b6,j.$2("Signal closes in",D.fi7(i.bx(l)))],u),B.l,m,B.e,B.h,0,m,m)],u),B.l,m,B.e,B.h,0,B.p),B.f,m,m,new A.o(t,m,m,s,r,m,B.m),m,m,m,m,B.bg,m,m,1/0)}}
D.aCW.prototype={
R(){return new D.biz()}}
D.biz.prototype={
Z(){this.a3()
this.d=A.d4(B.fr,new D.djs(this))},
t(){var w=this.d
if(w!=null)w.a1(0)
this.a2()},
B(d){var w=null,v=this.a.c*60,u=B.o.F(B.o.ao(new A.W(Date.now(),0,!1).aa().a,1000),v),t=u<15,s=v-u,r=t?"ENTER NOW":"Enter in "+B.o.ao(s,60)+":"+B.a.aZ(B.o.v(B.o.F(s,60)),2,"0"),q=t?B.c:B.c.j(0.18),p=A.m(999),o=t?B.fP:B.mF
o=A.V(o,t?B.v:B.c,w,w,w,20)
return A.cY(w,A.A(A.a([o,B.b6,A.c(r,w,w,w,w,w,w,A.l(w,w,t?B.v:B.c,w,w,w,w,w,w,w,G.AE,22,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),B.l,w,B.e,B.P,0,w,w),w,w,B.aZ,new A.o(q,w,w,p,w,w,B.m),B.id,w,w,w,w,B.Dj,w,w,w)}}
D.cH.prototype={}
D.uz.prototype={}
D.XY.prototype={
R(){var w,v,u,t=null,s=x.N,r=x.z
r=A.J(["done",A.a([],x.s),"lessons",A.S(s,r)],s,r)
s=$.hnT
w=$.ay()
v=A.mo(0,t,t)
u=A.a([],x.t)
return new D.aHQ(r,new A.au(new A.bb(s,B.b8,B.aP),w),v,u,new A.au(B.ay,w),B.cD,B.M,t,t)}}
D.a_X.prototype={}
D.aHQ.prototype={
gLw(){var w,v=this,u=v.d
if(u===$){v.a.toString
w=A.acT(null,0,3,v)
v.d!==$&&A.bF()
v.d=w
u=w}return u},
gKf(){var w=x.g.a(this.x.h(0,"done"))
if(w==null)w=B.bO
return J.b8(w,new D.eK9(),x.N).fD(0)},
Z(){var w,v,u,t=this
t.a3()
w=t.e=t.a.c
v=w==null
t.y=!v
t.ay=D.eKS(v?null:J.t(w,"fx"))
w=t.a.c
u=D.eKS(w==null?null:J.t(w,"markets"))
if(u.length!==0)t.f=u
t.r=new A.W(Date.now(),0,!1)
t.gLw().aU(0,new D.eKY(t))
$.aMv=$.aMv+1
t.at.aU(0,new D.eKZ(t))
if($.DD.length!==0||$.ahB)t.aDA()
if(!t.a.d){t.a1a()
t.Rx()
A.Tg().bD(new D.eL_(t),x.H)
t.w=A.d4(B.hc,new D.eL0(t))}},
t(){var w,v=this,u=v.w
if(u!=null)u.a1(0)
u=v.as
if(u!=null)u.a1(0)
v.gLw().t()
u=v.cy
w=$.ay()
u.V$=w
u.W$=0
u=v.at
u.V$=w
u.W$=0
v.ax.t()
D.hHJ()
v.bCo()},
a1a(){return this.c8d()},
c8d(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f
var $async$a1a=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:g={}
g.a=null
t=4
w=7
return A.b(A.aB(),$async$a1a)
case 7:q=e
p=A.aV(J.t(q.a,"ngmy_signal_grid_academy_v2"))
n=p!=null?g.a=A.a_(x.f.a(B.V.aP(0,p,null)),x.N,x.z):null
o=q.nL("ngmy_signal_grid_lessons_done")
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
return A.b(A.fJ(A.J(["action","paLearnGet"],n,m),!1,!1,!1,!1,B.hc),$async$a1a)
case 8:k=e
if(r.c==null){w=1
break}j=k==null?null:J.t(k,"progress")
i=x.f
if(i.b(j)){k.toString
h=A.a_(i.a(J.t(k,"progress")),n,m)}else h=null
r.l(new D.eKu(g,r,k,h))
if(h==null&&g.a!=null)r.aDq()
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$a1a,v)},
aDq(){var w=this.as
if(w!=null)w.a1(0)
this.as=A.cC(R.D5,new D.eKD(this))},
aeF(d){return this.c7i(d)},
c7i(d){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$aeF=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=B.d.cw(C.Ep,new D.eKc(u))
u.l(new D.eKd(u,d))
u.aDq()
t=B.d.cw(C.Ep,new D.eKe(u))
w=!r&&t&&u.c!=null?2:3
break
case 2:s=u.c
s.toString
w=4
return A.b(A.cf(null,null,!0,null,new D.eKf(u),s,null,!0,!0,x.H),$async$aeF)
case 4:case 3:return A.h(null,v)}})
return A.i($async$aeF,v)},
Rx(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Rx=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(A.fJ(A.J(["action","paSignals"],x.N,x.z),!1,!1,!1,!1,B.x4),$async$Rx)
case 3:r=e
if(t.c==null||r==null||!J.z(J.t(r,"ok"),!0)){w=1
break}s=J.a1(r)
t.l(new D.eKC(t,D.eKS(s.h(r,"fx")),D.eKS(s.h(r,"markets")),r))
case 1:return A.h(u,v)}})
return A.i($async$Rx,v)},
gatW(){var w=A.B(this.gyJ(),x.P)
B.d.u(w,this.ay)
return w},
gyJ(){var w=this.f
if(w==null){w=this.e
w=D.fEj(D.dE(D.dE(w==null?null:J.t(w,"state")).h(0,"snapshot")))}return w},
gcFR(){var w=this.gyJ(),v=A.U(w).k("X<1>"),u=A.B(new A.X(w,new D.eKQ(),v),v.k("M.E"))
if(u.length===0)return this.gyJ().length===0?null:B.d.gG(this.gyJ())
B.d.b_(u,new D.eKR())
return B.d.gG(u)},
c7Q(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,a0=" dollars. It sells at +50 or -50 dollars.",a1=e.e,a2=D.dE(a1==null?d:J.t(a1,"state"))
a1=x.f
w=a1.b(a2.h(0,"shadow"))?D.dE(a2.h(0,"shadow")):d
v=e.e
u=D.dE(v==null?d:J.t(v,"today"))
v=e.e
t=D.dE(v==null?d:J.t(v,"record"))
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
else if(w!=null){m=D.c4(J.t(B.d.dr(e.gyJ(),new D.eKi(w),new D.eKj()),"price"))
l=D.c4(w.h(0,"entryPrice"))
k=a1.b(w.h(0,"option"))?D.dE(w.h(0,"option")):d
a1=e.e
j=D.dE(D.dE(D.dE(a1==null?d:J.t(a1,"state")).h(0,"snapshot")).h(0,"held"))
i=j.h(0,"pnl")==null?d:D.c4(j.h(0,"pnl"))
h=i==null?"unknown":B.i.a5(i,2)
a1=v+((k!=null?"Open trade: 1 SPY call option, strike "+B.i.a5(D.c4(k.h(0,"strike")),0)+", expires "+A.v(k.h(0,"expiry"))+", premium paid "+B.i.a5(l,2)+" a share ("+B.i.a5(D.c4(k.h(0,"cost")),2)+" dollars). Win or loss now: "+h+a0:"Open trade: "+A.v(w.h(0,"symbol"))+", bought at "+B.i.a5(l,2)+", now "+B.i.a5(m,2)+". Win or loss now: "+h+a0)+"\n")}else a1=v+"No open trade.\n"
g=new D.eKk()
a1+="Agent markets (5-minute candles; fast line = 9-candle average, slow = 21-candle average; strength 0 bearish to 100 bullish):\n"
for(v=e.gyJ(),s=v.length,f=0;f<v.length;v.length===s||(0,A.I)(v),++f)a1+=A.v(g.$1(v[f]))+"\n"
v=e.ay
s=v.length
if(s!==0){a1+="Forex pairs (real interbank prices, 1-minute candles, signals only; the agent does not trade them; OTC prices at brokers differ):\n"
for(f=0;f<v.length;v.length===s||(0,A.I)(v),++f)a1+=A.v(g.$1(v[f]))+"\n"}return a1.charCodeAt(0)==0?a1:a1},
Ke(d){return this.bIk(d)},
bIk(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j
var $async$Ke=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:j=B.a.i(d)
if(j.length===0||$.ahB){w=1
break}t.at.bM(0,B.ck)
t.l(new D.eK5(t,j))
t.aDA()
s=$.DD.length
if(s>1){s=B.d.dv($.DD,Math.max(0,s-9),s-1)
r=new A.O(s,new D.eK6(),A.U(s).k("O<1,n>")).aL(0,"\n")}else r=""
s=t.e
s=s==null?null:J.t(s,"rules")
x.g.a(s)
if(s==null)s=t.dx
q=x.N
p=J.b8(s,new D.eK7(),q).aL(0,"\n")
s=t.c7Q()
o=r.length===0?"":"\nCONVERSATION SO FAR:\n"+r+"\n"
n=$.fqS
w=t.a.d?3:5
break
case 3:m="Preview mode: the tutor answers here using the live readings."
w=4
break
case 5:w=6
return A.b(A.fJ(A.J(["action","chat","prompt",'You are the NGMY Signal Grid trading tutor. You teach a complete beginner how trading works, using the live market data and the rules of the NGMY paper trading agent below.\nHow to answer:\n- Plain, friendly, simple English. Short sentences. No jargon without explaining it. Usually under 170 words.\n- When the question is about a market or "right now", use the LIVE DATA and quote the real numbers (price, trend, strength, RSI, last hour), then explain what they mean and what the agent\'s rules say.\n- Say clearly whether a market looks bullish, bearish or sideways and why, and what would need to happen for a buy or sell signal under the agent\'s rules.\n- This is practice. You may explain what the rules signal, but never promise profit, never say a price will surely go up or down, and never tell the student to trade real or borrowed money. Remind them briefly when it fits that signals can fail and the stop loss keeps losses small.\n- No markdown headings or tables. You may use short lines starting with "- ".\n\nAGENT RULES:\n'+p+"\n\n"+s+"\n"+o+"\nStudent: "+j+"\nTutor:"],q,x.z),!1,!1,!1,!1,B.o2),$async$Ke)
case 6:l=f
s=l==null
if(s)k=null
else{q=J.t(l,"text")
q=q==null?null:B.a.i(J.k(q))
k=q}if(k==null)k=""
if(k.length!==0){s=A.aK(k,"**","")
q=A.ag("^#+\\s*",!0,!1,!0,!1)
m=A.aK(s,q,"")}else{s=s?null:J.t(l,"error")
m=J.k(s==null?"The tutor could not answer just now. Please try again.":s)}case 4:if(n!==$.fqS){w=1
break}$.DD.push(new D.a_X(!1,m))
$.ahB=!1
if(t.c==null){w=1
break}t.l(new D.eK8())
t.aDA()
case 1:return A.h(u,v)}})
return A.i($async$Ke,v)},
aDA(){$.aS.U$.push(new D.eKE(this))},
aRG(d){this.gLw().Ce(2)
this.Ke(d)},
B(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=A.Q(a0).ax.a===B.dg,f=new D.RC(g),e=g?C.tb:C.t9,d=g?C.tb:C.t9
d=A.a([d,g?C.Oc:C.O5],x.O)
w=i.a1b(f,B.eE,new D.eKU(a0))
v=A.c("Trading Academy",h,h,h,h,h,h,A.l(h,h,g?C.cl:B.c,h,h,h,h,h,h,h,h,17,h,h,B.C,h,h,!0,h,h,h,h,h,h,h,h),h,h,h)
u=x.p
v=A.A(A.a([w,B.ar,A.E(A.w(A.a([v,A.c("Lessons, live signals and a tutor",h,h,h,h,h,h,A.l(h,h,g?C.bT:C.bV,h,h,h,h,h,h,h,h,11.5,h,h,h,h,h,!0,h,h,h,h,h,h,h,h),h,h,h)],u),B.B,h,B.e,B.h,0,B.p),1),A.p(h,C.fsC,B.f,h,h,new A.o(C.cH.j(0.14),h,h,A.m(999),h,h,B.m),h,h,h,h,B.h0,h,h,h)],u),B.l,h,B.e,B.h,0,h,h)
w=g?C.Oj:C.O9
t=A.m(999)
s=A.a([],u)
for(r=[C.fiH,C.fgV,C.fhD],q=r.length,p=0;p<q;++p){o={}
n=r[p]
o.a=null
o.a=n.a
m=i.gLw().d===o.a
if(m)l=g?C.n7:B.c
else l=B.L
k=new A.aP(999,999)
if(m)j=g?B.c:C.n7
else j=g?C.bT:C.bV
j=A.V(n.c,j,h,h,h,15)
if(m)m=g?B.c:C.n7
else m=g?C.bT:C.bV
s.push(new A.bu(1,B.b7,A.aA(h,A.cY(h,new A.c0(B.aK,B.bb,B.h,B.l,h,B.p,h,0,A.a([j,B.e0,new A.d0(1,B.c9,A.c(n.b,h,h,B.a2,h,h,h,new A.F(!0,m,h,h,h,h,12.5,B.C,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h),h,h,h),h)],u),h),h,h,B.aZ,new A.o(l,h,h,new A.bc(k,k,k,k),h,h,B.m),B.a3,h,h,h,h,B.x6,h,h,h),B.y,!1,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,new D.eKV(o,i),h,h,h,h,h,h,!1,B.a4),h))}g=A.p(h,A.A(s,B.l,h,B.e,B.h,0,h,h),B.f,h,h,new A.o(w,h,h,t,h,h,B.m),h,h,h,h,B.eD,h,h,h)
w=i.gLw()
return A.c6(h,e,A.p(h,A.bo(!0,A.w(A.a([new A.C(C.bGS,v,h),new A.C(B.aow,g,h),A.E(A.bbd(A.a([i.c7m(f),i.cEW(f),i.bIq(f)],u),w,h),1)],u),B.l,h,B.e,B.h,0,B.p),!0,!1,B.ag,!0,!0),B.f,h,h,new A.o(h,h,h,h,h,new A.a6(B.aU,B.b1,B.w,d,h,h),B.m),h,h,h,h,h,h,h,h),h,!1,!1,h,h)},
a1b(d,e,f){var w=null,v=d.a,u=v?B.c.j(0.92):C.ib,t=A.K(v?B.c:C.nf,B.r,1)
return A.aE(!1,B.a3,!0,w,A.aM(!1,w,!0,A.p(w,A.V(e,v?C.cl:B.c,w,w,w,18),B.f,w,w,new A.o(w,w,t,w,w,w,B.a6),w,40,w,w,w,w,w,40),B.cM,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),B.f,u,0,w,w,B.cM,w,w,B.ai)},
c7m(d){var w,v=null,u=new A.X(C.Ep,new D.eKh(this),x.E).gJ(0),t=A.m(24),s=x.p
s=A.a([A.p(v,A.w(A.a([C.hjh,B.at,C.h_V,B.aB,A.bv(A.m(9),A.jH(B.c.j(0.18),v,v,8,v,u/10,B.afx),B.ap),B.aj,A.c(""+u+" of 10 lessons done",v,v,v,v,v,v,B.acY,v,v,v)],s),B.B,v,B.e,B.h,0,B.p),B.f,v,v,new A.o(v,v,v,t,v,C.ceR,B.m),v,v,v,v,B.f5,v,v,v),B.aB],s)
for(w=0;w<10;++w)s.push(this.c7k(d,w))
s.push(B.aj)
s.push(A.c("Practice only, no real money. Signals and lessons are for learning; markets can always surprise.",v,v,v,v,v,v,A.l(v,v,d.a?C.bT:C.bV,v,v,v,v,v,v,v,v,11,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),B.K,v,v))
return A.co(s,v,v,B.a2j,v,v,B.ah,!1)},
c7k(d,e){var w,v,u,t=null,s=C.Ep[e],r=this.gKf().q(0,s.a),q=d.a,p=q?B.c.j(0.92):C.ib,o=A.m(20),n=A.K(q?B.c:C.nf,B.r,1),m=A.a([new A.aa(0,B.H,d.gIc(),B.hS,14)],x.V),l=A.m(15)
l=A.p(t,A.V(s.e,B.c,t,t,t,t),B.f,t,t,new A.o(s.f,t,t,l,t,t,B.m),t,46,t,t,t,t,t,46)
w=A.c("Lesson "+(e+1)+" \xb7 "+s.d+" min",t,t,t,t,t,t,A.l(t,t,q?C.bT:C.bV,t,t,t,t,t,t,t,t,11,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)
v=A.c(s.b,t,t,t,t,t,t,A.l(t,t,q?C.cl:B.c,t,t,t,t,t,t,t,t,15,t,t,B.C,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)
u=x.p
v=A.E(A.w(A.a([w,v,A.c(s.c,t,t,t,t,t,t,A.l(t,t,q?C.bT:C.bV,t,t,t,t,t,t,t,t,12,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],u),B.B,t,B.e,B.h,0,B.p),1)
w=r?B.ea:B.eL
if(r)q=C.cH
else q=q?C.bT:C.bV
return A.aA(t,A.p(t,A.A(A.a([l,B.bc,v,A.V(w,q,t,t,t,t)],u),B.l,t,B.e,B.h,0,t,t),B.f,t,t,new A.o(p,t,n,o,m,t,B.m),t,t,t,B.d2,B.bD,t,t,t),B.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new D.eKg(this,s),t,t,t,t,t,t,!1,B.a4)},
cmW(d){var w=this.c
w.toString
A.a8(w,!1).ca(A.e7(new D.eKA(this,d),!1,null,x.H))},
c7U(c1,c2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6=this,b7=null,b8="reading",b9="rsi",c0=b6.gcFR()
if(c0==null)return A.c("Live example appears once the markets have loaded.",b7,b7,b7,b7,b7,b7,A.l(b7,b7,c1.a?C.bT:C.bV,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,!0,b7,b7,b7,b7,b7,b7,b7,b7),b7,b7,b7)
w=J.a1(c0)
v=J.k(w.h(c0,"asset"))
u=D.bFM(c0)
t=D.dE(w.h(c0,b8))
s=D.c4(w.h(c0,"price"))
r=new D.eKl(u,c1,s)
q=new D.eKt(c1)
switch(c2){case"basics":p=u.length!==0?D.c4(J.t(B.d.gG(u),"c")):s
o=p===0?100:100*s/p
w=q.$1("Right now "+v+" is "+D.eg(s,!0,!1)+". About 4 hours ago it was "+D.eg(p,!0,!1)+".")
n=D.eg(o,!0,!1)
m=o>=100?"a win of":"a loss of"
return A.w(A.a([w,B.N,q.$1("If you had put $100 into "+v+" then, it would be worth "+n+" now: "+m+" "+D.eg(Math.abs(o-100),!0,!1)+". That difference is your profit or loss.")],x.p),B.B,b7,B.e,B.h,0,B.p)
case"candles":l=u.length!==0?B.d.gal(u):A.S(x.N,x.z)
w=J.a1(l)
n=D.c4(w.h(l,"c"))
m=D.c4(w.h(l,"o"))
k=r.$2$last$lines(24,!1)
j=D.eg(D.c4(w.h(l,"o")),!0,!1)
i=D.eg(D.c4(w.h(l,"c")),!0,!1)
n=n>=m?"GREEN: buyers won those 5 minutes":"YELLOW: sellers won those 5 minutes"
return A.w(A.a([k,B.N,q.$1("The last finished "+v+" candle opened at "+j+" and closed at "+i+", so it is "+n+". Its high was "+D.eg(D.c4(w.h(l,"h")),!0,!1)+" and its low "+D.eg(D.c4(w.h(l,"l")),!0,!1)+".")],x.p),B.B,b7,B.e,B.h,0,B.p)
case"trend":w=x.N
h=A.S(w,x.S)
for(n=b6.gyJ(),m=n.length,k=x.z,j=x.f,g=0;g<n.length;n.length===m||(0,A.I)(n),++g){i=J.t(n[g],b8)
i=(j.b(i)?A.a_(i,w,k):A.S(w,k)).h(0,"bias")
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
return A.w(A.a([w,B.N,q.$1(v+" is "+n.toUpperCase()+" right now. Across the markets:"+m+" bullish, "+k+" bearish, "+j+" sideways.")],x.p),B.B,b7,B.e,B.h,0,B.p)
case"ma":e=D.c4(w.h(c0,"fast"))
d=D.c4(w.h(c0,"slow"))
w=r.$0()
n=D.eg(e,!0,!1)
m=D.eg(d,!0,!1)
k=e>=d
j=k?"ABOVE":"BELOW"
k=k?"UP":"DOWN"
return A.w(A.a([w,B.N,q.$1("On "+v+" the pink fast line is at "+n+" and the purple slow line at "+m+". The fast line is "+j+" the slow line, so the short-term trend is "+k+".")],x.p),B.B,b7,B.e,B.h,0,B.p)
case"cross":w=b6.gyJ()
n=A.U(w)
m=n.k("cQ<1,@>")
a0=A.B(new A.cQ(new A.X(w,new D.eKm(),n.k("X<1>")),new D.eKn(),m),m.k("M.E"))
w=b6.gyJ()
n=A.U(w)
m=n.k("cQ<1,@>")
a1=A.B(new A.cQ(new A.X(w,new D.eKo(),n.k("X<1>")),new D.eKp(),m),m.k("M.E"))
w=r.$0()
if(a0.length!==0)n="Fresh BUY crosses right now: "+B.d.aL(a0,", ")+". On its next automatic check the agent would buy if it holds nothing and it is the market traded today."
else n="No fresh buy cross in any open market right now. "+(a1.length!==0?"Fresh sell crosses: "+B.d.aL(a1,", ")+". ":"")+"The agent simply waits; no signal means no trade."
return A.w(A.a([w,B.N,q.$1(n)],x.p),B.B,b7,B.e,B.h,0,B.p)
case"rsi":w=b6.gyJ()
n=A.U(w).k("X<1>")
a2=A.B(new A.X(w,new D.eKq(),n),n.k("M.E"))
w=x.p
n=A.a([],w)
for(m=a2.length,k=c1.a,j=x.N,i=x.z,a3=x.f,a4=x.c,g=0;g<a2.length;a2.length===m||(0,A.I)(a2),++g){a5=a2[g]
a6=J.a1(a5)
a7=J.k(a6.h(a5,"asset"))
a8=k?C.cl:B.c
a7=A.c(a7,b7,b7,b7,b7,b7,b7,new A.F(!0,a8,b7,b7,b7,b7,12,B.C,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7),b7,b7,b7)
a8=new A.aP(9,9)
a9=a6.h(a5,b8)
a9=(a3.b(a9)?A.a_(a9,j,i):A.S(j,i)).h(0,b9)
if(!(typeof a9=="number")){a9=A.cA(A.v(a9==null?"":a9))
if(a9==null)a9=0}b0=k?C.Oj:C.O9
b1=a6.h(a5,b8)
b1=(a3.b(b1)?A.a_(b1,j,i):A.S(j,i)).h(0,b9)
if(!(typeof b1=="number")){b1=A.cA(A.v(b1==null?"":b1))
if(b1==null)b1=0}if(b1>=70)b1=C.d5
else{b1=a6.h(a5,b8)
b1=(a3.b(b1)?A.a_(b1,j,i):A.S(j,i)).h(0,b9)
if(!(typeof b1=="number")){b1=A.cA(A.v(b1==null?"":b1))
if(b1==null)b1=0}b1=b1<=30?B.cI:C.cH}b1=A.jH(b0,b7,b7,8,b7,a9/100,new A.la(b1,a4))
a6=a6.h(a5,b8)
a6=(a3.b(a6)?A.a_(a6,j,i):A.S(j,i)).h(0,b9)
if(!(typeof a6=="number")){a6=A.cA(A.v(a6==null?"":a6))
if(a6==null)a6=0}a6=B.i.a5(a6,0)
a9=k?C.cl:B.c
n.push(new A.C(B.cB,new A.c0(B.aK,B.e,B.h,B.l,b7,B.p,b7,0,A.a([new A.a4(70,b7,a7,b7),new A.bu(1,B.b7,new A.nl(new A.bc(a8,a8,a8,a8),B.ap,b1,b7),b7),B.aa,new A.a4(26,b7,A.c(a6,b7,b7,b7,b7,b7,b7,new A.F(!0,a9,b7,b7,b7,b7,12,B.C,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7),b7,b7,b7),b7)],w),b7),b7))}n.push(q.$1("Red bars are above 70 (stretched), blue below 30 (oversold), green in between (healthy)."))
return A.w(n,B.B,b7,B.e,B.h,0,B.p)
case"risk":return A.w(A.a([q.$1("Every agent trade is about $100 (of a stock on weekdays, of a coin on weekends). "+v+" is "+D.eg(s,!0,!1)+" right now."),B.aj,q.$1("- Take profit: it sells when the trade is up $50"),q.$1("- Stop loss: it sells when the trade is down $50"),B.aj,q.$1("Win 5 and lose 5 of 10 trades: 5 x 50 - 5 x 50 = $0.00. That is break even. Win 6 of 10 and you are up $100.")],x.p),B.B,b7,B.e,B.h,0,B.p)
case"brakes":w=b6.e
if(w==null)return q.$1('Try it yourself: before your next practice day, write down "I stop after losing $50 today". If three trades in a row lose, close the app and come back tomorrow. That is exactly what the agent does.')
b2=D.dE(J.t(w,"state"))
w=b6.e
w=D.eg(D.c4(D.dE(w==null?b7:J.t(w,"today")).h(0,"day_pnl")),!0,!0)
n=D.eg(D.c4(b2.h(0,"totalPnl")),!0,!0)
m=J.z(b2.h(0,"brakePaused"),!0)?"The brake is ON right now.":"Both brakes are off, it can keep trading."
return q.$1("Today the agent is at "+w+" (the daily stop is -$50) and "+n+" all time (the brake is -$100)."+m)
case"hours":if(b6.f!=null)b3=b6.fr
else{w=b6.e
b3=J.z(D.dE(w==null?b7:J.t(w,"market")).h(0,"stockOpen"),!0)}b4=B.d.aR(b6.ay,new D.eKr())
w=b3?"OPEN":"CLOSED"
n=b4?"OPEN":"CLOSED"
return q.$1("Right now the US stock market is "+w+", the forex market is "+n+", and crypto is open, as always.")
case"practice":w=b6.e
if(w==null){w=b6.gatW()
return q.$1("Right now "+new A.X(w,new D.eKs(),A.U(w).k("X<1>")).gJ(0)+" of "+b6.gatW().length+" markets have signals that worked at least half the time lately. That is why a journal and many trades matter: some markets suit a method, others do not.")}b5=D.dE(J.t(w,"record"))
w=b5.h(0,"trades")
w=A.v(w==null?0:w)
n=b5.h(0,"wins")
n=A.v(n==null?0:n)
m=b5.h(0,"losses")
return q.$1("The agent journal so far: "+w+" finished trades, "+n+" wins and "+A.v(m==null?0:m)+" losses. Keep watching until there are at least 20 before judging it.")}return B.bK},
cEW(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=null,e=B.a.i(g.ch),d=g.gatW(),a0=A.U(d).k("X<1>"),a1=A.B(new A.X(d,new D.eKJ(g,e.toLowerCase()),a0),a0.k("M.E"))
B.d.b_(a1,new D.eKK())
w=g.db
if(g.r==null)v=0
else{e=Date.now()
u=g.r
u.toString
v=B.o.ao(new A.W(e,0,!1).bx(u).a,1e6)}if(v<20)t="just now"
else t=v<60?""+v+" s ago":""+B.o.ao(v,60)+" min ago"
e=x.p
u=A.a([],e)
for(s=a2.a,r=0;r<4;++r){q=C.d6X[r]
if(g.cx===q)p=s?C.n7:B.c
else p=s?B.c.j(0.92):C.ib
o=new A.aP(999,999)
n=new A.ax(s?C.oO:C.oJ,1,B.r,-1)
m=q==="All"?"All "+d.length:q+" "+new A.X(d,new D.eKL(q),a0).gJ(0)
if(g.cx===q)l=s?B.c:C.n7
else l=s?C.cl:B.c
B.d.u(u,A.a([A.aA(f,A.p(f,A.c(m,f,f,f,f,f,f,new A.F(!0,l,f,f,f,f,12,B.C,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f),f,f,f),B.f,f,f,new A.o(p,f,new A.bE(n,n,n,n),new A.bc(o,o,o,o),f,f,B.m),f,f,f,f,C.bH0,f,f,f),B.y,!1,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,new D.eKM(g,q),f,f,f,f,f,f,!1,B.a4),B.b6],e))}a0=A.E(A.cc(A.A(u,B.l,f,B.e,B.h,0,f,f),B.t,f,B.y,f,f,f,f,f,B.aK),1)
u=g.CW?B.cC:B.eO
u=A.a([A.A(A.a([a0,B.b6,g.a1b(a2,u,new D.eKN(g))],e),B.l,f,B.e,B.h,0,f,f)],e)
if(g.CW){a0=A.l(f,f,s?C.cl:B.c,f,f,f,f,f,f,f,f,f,f,f,f,f,f,!0,f,f,f,f,f,f,f,f)
p=A.l(f,f,s?C.bT:C.bV,f,f,f,f,f,f,f,f,13,f,f,f,f,f,!0,f,f,f,f,f,f,f,f)
o=A.V(B.eO,s?C.bT:C.bV,f,f,f,f)
m=s?B.c.j(0.92):C.ib
l=A.m(999)
k=s?C.oO:C.oJ
j=A.m(999)
i=s?C.oO:C.oJ
B.d.u(u,A.a([B.R,A.aN(f,B.M,!0,f,!0,B.t,f,A.aO(),g.cy,f,f,f,f,f,2,A.bC(f,new A.b6(4,l,new A.ax(k,1,B.r,-1)),f,B.fc,f,f,f,f,!0,new A.b6(4,j,new A.ax(i,1,B.r,-1)),f,f,f,f,f,m,!0,f,f,f,f,f,f,f,f,f,f,f,f,f,p,"Search a market, for example EUR/USD, GBP or Bitcoin",f,f,f,f,f,f,f,f,f,!0,!0,!1,f,o,f,f,f,f,f,f,f,f,f,f,f,f),B.y,!0,f,!0,f,!1,f,B.am,f,f,f,f,f,f,f,f,f,1,f,f,!1,"\u2022",f,new D.eKO(g),f,f,f,!1,f,f,!1,f,!0,f,B.ae,f,f,f,f,f,f,f,f,f,f,f,a0,!0,B.a8,f,B.ao,f,f,f,f)],e))}u.push(B.af)
u.push(g.bH4(a2))
if(J.z(w.h(0,"paused"),!0)){a0=w.h(0,"pauseReason")
a0=A.v(a0==null?"Record too weak \u2014 signals paused until the pattern improves.":a0)
p=B.i.M(D.c4(w.h(0,"paperStreak")))
o=w.h(0,"liftStreak")
u.push(new A.C(B.lb,A.c(a0+" ("+p+" of "+B.i.M(D.c4(o==null?10:o))+" paper wins in a row to lift it)",f,f,f,f,f,f,C.fO9,B.K,f,f),f))}u.push(B.N)
u.push(A.A(A.a([C.c0z,B.e0,new A.d0(1,B.c9,A.c("Live confirmations \xb7 updated "+t+" \xb7 signals are only given at the 30-minute checks",f,f,f,f,f,f,A.l(f,f,s?C.bT:C.bV,f,f,f,f,f,f,f,f,11,f,f,f,f,f,!0,f,f,f,f,f,f,f,f),B.K,f,f),f)],e),B.l,f,B.bb,B.h,0,f,f))
u.push(B.af)
if(d.length===0)u.push(A.c("Loading the markets...",f,f,f,f,f,f,A.l(f,f,s?C.bT:C.bV,f,f,f,f,f,f,f,f,f,f,f,f,f,f,!0,f,f,f,f,f,f,f,f),f,f,f))
if(d.length!==0&&a1.length===0){e=g.ch
u.push(A.at(A.c('No market matches "'+e+'".',f,f,f,f,f,f,A.l(f,f,s?C.bT:C.bV,f,f,f,f,f,f,f,f,f,f,f,f,f,f,!0,f,f,f,f,f,f,f,f),f,f,f),f,f,f))}for(e=a1.length,r=0;r<a1.length;a1.length===e||(0,A.I)(a1),++r){h=a1[r]
u.push(D.hMl(a2,h,!1,new D.eKP(g,h)))}u.push(g.cEV(a2))
u.push(A.c("Signals are opinions from price patterns, not guarantees. Even strong signals lose. Signals only: nothing is ever traded here.",f,f,f,f,f,f,A.l(f,f,s?C.bT:C.bV,f,f,f,f,f,f,f,f,11,f,f,f,f,f,!0,f,f,f,f,f,f,f,f),B.K,f,f))
return A.Gf(A.co(u,f,f,B.a2j,f,f,B.ah,!1),f,g.gchs())},
cEV(a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e="direction",d="graded",a0="exit_price",a1="move_pct",a2=x.g.a(this.db.h(0,"history"))
if(a2==null)a2=B.bO
a2=J.cK(a2,x.f)
a2=A.cs(a2,new D.eKF(),a2.$ti.k("M.E"),x.P)
w=A.B(a2,A.a3(a2).k("M.E"))
a2=a3.a
v=a2?B.c.j(0.92):C.ib
u=A.m(20)
t=A.K(a2?B.c:C.nf,B.r,1)
s=A.c("Signal history",f,f,f,f,f,f,A.l(f,f,a2?C.cl:B.c,f,f,f,f,f,f,f,f,15,f,f,B.C,f,f,!0,f,f,f,f,f,f,f,f),f,f,f)
r=x.p
s=A.a([s,B.at,A.c("Every STRONG signal, graded at its 30-minute expiry: did the price finish its way? The record is the record.",f,f,f,f,f,f,A.l(f,f,a2?C.bT:C.bV,f,f,f,f,f,f,f,f,11.5,f,f,f,f,1.3,!0,f,f,f,f,f,f,f,f),f,f,f),B.N],r)
if(w.length===0)s.push(A.c("No STRONG signals yet. Zero signals is a correct outcome when the confirmations do not all agree.",f,f,f,f,f,f,A.l(f,f,a2?C.bT:C.bV,f,f,f,f,f,f,f,f,12.5,f,f,f,f,f,!0,f,f,f,f,f,f,f,f),f,f,f))
for(q=w.length,p=0;p<w.length;w.length===q||(0,A.I)(w),++p){o=w[p]
n=a2?C.oO:C.oJ
m=J.a1(o)
l=(J.z(m.h(o,e),"BUY")?C.cH:C.d5).j(0.14)
k=new A.aP(8,8)
j=A.v(m.h(o,e))
i=J.z(m.h(o,e),"BUY")?C.cH:C.d5
l=A.p(B.z,A.c(j,f,f,f,f,f,f,new A.F(!0,i,f,f,f,f,11,B.u,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f),f,f,f),B.f,f,f,new A.o(l,f,f,new A.bc(k,k,k,k),f,f,B.m),f,f,f,f,B.tD,f,f,46)
k=A.v(m.h(o,"market"))
j=m.h(o,"price")
if(!(typeof j=="number")){j=A.cA(A.v(j==null?"":j))
if(j==null)j=0}i=m.h(o,"price")
if(!(typeof i=="number")){i=A.cA(A.v(i==null?"":i))
if(i==null)i=0}j=B.i.a5(j,i<10?4:2)
i=a2?C.cl:B.c
k=A.c(k+" at "+j,f,f,f,f,f,f,new A.F(!0,i,f,f,f,f,13,B.C,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f),f,f,f)
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
k=A.w(A.a([k,A.c(j+i,f,f,f,f,f,f,new A.F(!0,h,f,f,f,f,11,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f),f,f,f)],r),B.B,f,B.e,B.h,0,B.p)
j=J.z(m.h(o,d),!0)?A.v(m.h(o,"result")):"PENDING"
if(!J.z(m.h(o,d),!0))m=B.b_
else m=J.z(m.h(o,"result"),"WIN")?C.cH:C.d5
i=m.j(0.14)
h=new A.aP(999,999)
s.push(A.p(f,new A.c0(B.aK,B.e,B.h,B.l,f,B.p,f,0,A.a([l,B.ar,new A.bu(1,B.b7,k,f),A.p(f,A.c(j,f,f,f,f,f,f,new A.F(!0,m,f,f,f,f,10.5,B.u,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f),f,f,f),B.f,f,f,new A.o(i,f,f,new A.bc(h,h,h,h),f,f,B.m),f,f,f,f,B.f6,f,f,f)],r),f),B.f,f,f,new A.o(f,f,new A.bE(B.a1,B.a1,new A.ax(n,1,B.r,-1),B.a1),f,f,f,B.m),f,f,f,f,B.hA,f,f,f))}return A.p(f,A.w(s,B.B,f,B.e,B.h,0,B.p),B.f,f,f,new A.o(v,f,t,u,f,f,B.m),f,f,f,C.bFE,B.bD,f,f,f)},
bH4(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=new A.X(C.Ep,new D.eK1(h),x.E).gJ(0),e=h.z||h.y
if(!e)w=new A.b7([B.j8,B.b_,"Signal alerts unlock when you finish all 10 lessons ("+f+" of 10 done). You will be told the market and STRONG BUY or SELL (only when all 5 confirmations agree), built for a 15\u201330 minute expiry.","Go to lessons"])
else w=!h.Q?C.fog:C.fnA
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
if(r!=null){i=A.bp(t,g,g,g,g,g,B.eZ,g,g,g,g,g)
B.d.u(k,A.a([B.aa,A.bH(A.c(r,g,g,g,g,g,g,B.pt,g,g,g),g,new D.eK2(h,e),i)],j))}return A.p(g,A.A(k,B.l,g,B.e,B.h,0,g,g),B.f,g,g,new A.o(v,g,l,m,g,g,B.m),g,g,g,B.dV,B.bg,g,g,g)},
bIq(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=x.p,h=A.a([],i)
if($.DD.length===0){w=d.a
v=w?B.c.j(0.92):C.ib
u=A.m(22)
t=A.K(w?B.c:C.nf,B.r,1)
s=A.p(j,C.c1v,B.f,j,j,E.agN,j,40,j,j,j,j,j,40)
s=A.A(A.a([s,B.ar,A.E(A.c("Your trading tutor",j,j,j,j,j,j,A.l(j,j,w?C.cl:B.c,j,j,j,j,j,j,j,j,16,j,j,B.C,j,j,!0,j,j,j,j,j,j,j,j),j,j,j),1)],i),B.l,j,B.e,B.h,0,j,j)
v=A.p(j,A.w(A.a([s,B.N,A.c("Ask anything about trading. The tutor sees the same live prices and readings as the agent, so it can explain what each market is doing right now.",j,j,j,j,j,j,A.l(j,j,w?C.bT:C.bV,j,j,j,j,j,j,j,j,12.5,j,j,j,j,1.35,!0,j,j,j,j,j,j,j,j),j,j,j)],i),B.B,j,B.e,B.h,0,B.p),B.f,j,j,new A.o(v,j,t,u,j,j,B.m),j,j,j,j,B.bR,j,j,j)
u=A.a([],i)
for(r=0;r<6;++r){q=C.ddh[r]
t=w?C.cl:B.c
t=A.c(q,j,j,j,j,j,j,new A.F(!0,t,j,j,j,j,12,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j),j,j,j)
s=w?B.c.j(0.92):C.ib
p=w?C.oO:C.oJ
o=new A.aP(999,999)
u.push(A.mU(j,s,t,j,new D.eK3(k,q),j,new A.b9(new A.bc(o,o,o,o),B.a1),new A.ax(p,1,B.r,-1),j))}B.d.u(h,A.a([v,B.af,A.c_(B.bI,u,B.br,j,8,8)],i))}for(w=$.DD.length,v=d.a,r=0;r<$.DD.length;$.DD.length===w||(0,A.I)($.DD),++r){n=$.DD[r]
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
h.push(new A.bK(t,j,j,A.p(j,A.x1(n.b,new A.F(!0,u,j,j,j,j,13.5,j,j,j,j,j,1.4,j,j,j,j,j,j,j,j,j,j,j,j,j),j),B.f,j,F.agn,new A.o(s,j,m,new A.bc(B.i8,B.i8,new A.aP(p,p),new A.aP(o,o)),j,j,B.m),j,j,j,B.jF,B.hp,j,j,j),j))}if($.ahB){w=v?B.c.j(0.92):C.ib
u=A.m(18)
h.push(new A.bK(B.a5,j,j,A.p(j,A.A(A.a([B.WA,B.aa,A.c("Reading the markets...",j,j,j,j,j,j,A.l(j,j,v?C.bT:C.bV,j,j,j,j,j,j,j,j,12.5,j,j,j,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)],i),B.l,j,B.e,B.P,0,j,j),B.f,j,j,new A.o(w,j,j,u,j,j,B.m),j,j,j,B.hz,B.hp,j,j,j),j))}h=A.E(A.co(h,k.ax,j,C.bId,j,j,B.ah,!1),1)
w=A.l(j,j,v?C.cl:B.c,j,j,j,j,j,j,j,j,j,j,j,j,j,j,!0,j,j,j,j,j,j,j,j)
u=A.l(j,j,v?C.bT:C.bV,j,j,j,j,j,j,j,j,j,j,j,j,j,j,!0,j,j,j,j,j,j,j,j)
t=v?B.c.j(0.92):C.ib
s=A.m(999)
p=v?C.oO:C.oJ
o=A.m(999)
m=v?C.oO:C.oJ
w=A.E(A.aN(j,B.M,!1,j,!0,B.t,j,A.aO(),k.at,j,j,j,j,j,2,A.bC(j,new A.b6(4,s,new A.ax(p,1,B.r,-1)),j,B.zA,j,j,j,j,!0,new A.b6(4,o,new A.ax(m,1,B.r,-1)),j,j,j,j,j,t,!0,j,j,j,j,j,j,j,j,j,j,j,j,j,u,"Ask about trading or a market...",j,j,j,j,j,j,j,j,j,!0,!0,!1,j,j,j,j,j,j,j,j,j,j,j,j,j,j),B.y,!0,j,!0,j,!1,j,B.am,j,j,j,j,j,j,j,j,j,4,1,j,!1,"\u2022",j,j,j,k.gchr(),j,!1,j,j,!1,j,!0,j,B.ae,j,j,j,j,j,j,j,j,j,j,j,w,!0,B.a8,j,B.ao,j,B.acJ,j,j),1)
u=v?C.n7:B.c
t=$.ahB?j:new D.eK4(k)
return A.w(A.a([h,A.p(j,A.A(A.a([w,B.aa,A.aE(!1,B.a3,!0,j,A.aM(!1,j,!0,new A.a4(48,48,A.V(B.q3,v?B.c:C.n7,j,j,j,j),j),B.cM,!0,j,j,j,j,j,j,j,j,j,j,j,t,j,j,j,j,j,j,j),B.f,u,0,j,j,B.cM,j,j,B.ai)],i),B.l,j,B.e,B.h,0,j,j),B.f,j,j,j,j,j,j,j,B.HJ,j,j,j)],i),B.l,j,B.e,B.h,0,B.p)}}
D.a0Y.prototype={
R(){var w=x.S
return new D.blK(A.S(w,w))},
d_u(d){return this.e.$0()},
d2e(d){return this.x.$1(d)},
rs(){return this.y.$0()},
d0M(d){return this.z.$1(d)},
gd4(d){return this.w}}
D.blK.prototype={
Z(){var w,v,u,t,s,r,q,p,o,n=this
n.a3()
w=C.dMp.h(0,n.a.c.a)
n.d=w==null?n.a.c.x:w
v=n.a.w
u=new D.dw3()
t=new D.dw1()
w=u.$1(v.h(0,"slots"))
s=A.U(w).k("X<1>")
w=A.B(new A.X(w,new D.dw_(n),s),s.k("M.E"))
n.e=w
w=w.length
s=n.d.length
if(w!==Math.min(10,s)){w=x.S
r=J.e6(s,w)
for(q=0;q<s;++q)r[q]=q
B.d.dY(r,B.cV)
n.e=A.cU(r,0,A.dw(Math.min(10,n.d.length),"count",w),A.U(r).c).dd(0)}w=u.$1(v.h(0,"right"))
n.f=A.ju(w,A.U(w).c)
n.r=t.$1(v.h(0,"tries"))
n.w=t.$1(v.h(0,"locks"))
n.x=u.$1(v.h(0,"used"))
for(w=n.e,s=w.length,p=0;p<w.length;w.length===s||(0,A.I)(w),++p){o=w[p]
if(!B.d.q(n.x,o))B.d.I(n.x,o)}n.bca(!1)
n.z=A.d4(B.fr,new D.dw0(n))},
t(){var w=this.z
if(w!=null)w.a1(0)
this.a2()},
b3W(){var w,v,u,t,s,r,q=this,p=q.a
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
u=u.iZ(u,new D.dvS(),t,s)
r=q.w
r===$&&A.d()
s=r.iZ(r,new D.dvT(),t,s)
r=q.x
r===$&&A.d()
return p.d2e(A.J(["slots",w,"right",v,"tries",u,"locks",s,"used",r],t,x.z))},
bca(d){var w,v,u,t,s,r,q,p,o,n=this,m=Date.now(),l=n.y,k=x.X,j=!1,i=0
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
q=A.B(new A.X(s,new D.dvU(n),w),w.k("M.E"))
if(q.length!==0)p=q
else{t=n.d.length
s=A.a(new Array(t),k)
for(r=0;r<t;++r)s[r]=r
w=A.U(s).k("X<1>")
p=A.B(new A.X(s,new D.dvV(n),w),w.k("M.E"))}w=p.length
if(w===0)o=v
else o=p[B.cV.aw(w)]
n.w.X(0,v)
w=n.r
w===$&&A.d()
w.X(0,v)
l.X(0,v)
n.e[i]=o
w=n.x
w===$&&A.d()
if(!B.d.q(w,o))B.d.I(n.x,o)
j=!0}++i}if(j&&d)n.b3W()},
cHC(){return this.bca(!0)},
co_(d){var w,v,u,t,s=this.d
s===$&&A.d()
w=s[d].b.length
s=J.e6(w,x.S)
for(v=0;v<w;++v)s[v]=v
u=this.x
u===$&&A.d()
t=new A.e4()
t.cV(d*7919+u.length)
B.d.dY(s,t)
return s},
chq(d,e){var w=this,v=w.f
v===$&&A.d()
if(!v.q(0,d)){v=w.w
v===$&&A.d()
v=v.am(0,d)}else v=!0
if(v)return
w.l(new D.dvQ(w,e,d))
w.b3W()},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=A.Q(d).ax.a===B.dg,i=new D.RC(j),h=l.a.c,g=l.e
g===$&&A.d()
w=l.f
w===$&&A.d()
v=new A.X(g,w.gjF(w),A.U(g).k("X<1>")).gJ(0)
u=v===l.e.length
g=j?C.tb:C.t9
w=j?C.tb:C.t9
t=j?C.Oc:C.O5
s=x.O
t=A.a([w,t],s)
w=A.aH(k,k,k,k,A.V(B.eE,j?C.cl:B.c,k,k,k,18),k,k,k,new D.dvW(d),k,k,k,k,k,k)
r=l.a.d
q=x.p
r=A.A(A.a([w,B.aX,A.c("Lesson "+r+" of 10",k,k,k,k,k,k,A.l(k,k,j?C.bT:C.bV,k,k,k,k,k,k,k,k,12,k,k,B.O,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)],q),B.l,k,B.e,B.h,0,k,k)
w=A.m(24)
p=h.f
o=A.ap(p,B.v,0.35)
o.toString
s=A.a([p,o],s)
o=B.c.j(0.2)
p=A.m(16)
s=A.a([r,A.p(k,A.A(A.a([A.p(k,A.V(h.e,B.c,k,k,k,28),B.f,k,k,new A.o(o,k,k,p,k,k,B.m),k,52,k,k,k,k,k,52),B.er,A.E(A.w(A.a([A.c(h.b,k,k,k,k,k,k,B.fS,k,k,k),A.c(h.c+" \xb7 "+h.d+" min",k,k,k,k,k,k,B.nC,k,k,k)],q),B.B,k,B.e,B.h,0,B.p),1)],q),B.l,k,B.e,B.h,0,k,k),B.f,k,k,new A.o(k,k,k,w,k,new A.a6(B.a5,B.a9,B.w,s,k,k),B.m),k,k,k,k,B.f5,k,k,k),B.aB],q)
for(w=h.w,n=0;n<4;++n){r=w[n]
p=j?C.cl:B.c
p=A.c(r.a,k,k,k,k,k,k,new A.F(!0,p,k,k,k,k,16,B.C,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k),k,k,k)
o=j?C.cl:B.c
B.d.u(s,A.a([p,B.at,A.c(r.b,k,k,k,k,k,k,new A.F(!0,o,k,k,k,k,14,k,k,k,k,k,1.5,k,k,k,k,k,k,k,k,k,k,k,k,k),k,k,k),B.aB],q))}w=j?B.c.j(0.92):C.ib
r=A.m(22)
p=A.K(C.cH.j(0.45),B.r,1.5)
s.push(A.p(k,A.w(A.a([A.A(A.a([C.bY3,B.b6,A.c("See it live right now",k,k,k,k,k,k,A.l(k,k,j?C.cl:B.c,k,k,k,k,k,k,k,k,14,k,k,B.C,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)],q),B.l,k,B.e,B.h,0,k,k),B.R,l.a.d_u(0)],q),B.B,k,B.e,B.h,0,B.p),B.f,k,k,new A.o(w,k,p,r,k,k,B.m),k,k,k,k,B.bD,k,k,k))
s.push(B.bx)
w=A.c("Quiz",k,k,k,k,k,k,A.l(k,k,j?C.cl:B.c,k,k,k,k,k,k,k,k,16,k,k,B.C,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)
r=""+v+" of "
p=l.e.length
if(u)o=C.cH
else o=j?C.bT:C.bV
s.push(A.A(A.a([w,B.aX,A.c(r+p+" right",k,k,k,k,k,k,A.l(k,k,o,k,k,k,k,k,k,k,k,12.5,k,k,B.C,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)],q),B.l,k,B.e,B.h,0,k,k))
s.push(B.aj)
o=A.m(9)
w=l.e.length
w=w===0?0:v/w
s.push(A.bv(o,A.jH(j?C.Oj:C.O9,k,k,7,k,w,C.b60),B.ap))
s.push(B.N)
w=l.a.f?"Admin: you can retry any question.":"Get all 10 right to finish. A wrong answer gets one more try; wrong twice and that question locks for 5 minutes, then a new question takes its place."
s.push(A.c(w,k,k,k,k,k,k,A.l(k,k,j?C.bT:C.bV,k,k,k,k,k,k,k,k,11.8,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),k,k,k))
s.push(B.R)
for(m=0;w=l.e,m<w.length;++m)s.push(l.cvl(i,m,w[m]))
s.push(B.N)
w=j?C.cl:B.c
p=j?C.oO:C.oJ
p=A.E(A.ei(C.c3J,k,C.fZE,new D.dvX(l,h),A.dh(k,k,k,k,k,k,k,k,k,w,k,k,B.cq,k,new A.b9(A.m(999),B.a1),new A.ax(p,1.5,B.r,-1),k,k,k,k)),1)
w=!u
if(!w||l.a.r)j=C.cH
else j=j?C.bT:C.bV
j=A.bp(j,k,k,k,k,k,B.cq,k,new A.b9(A.m(999),B.a1),k,k,k)
o=!w||l.a.r?new D.dvY(l,d):k
s.push(A.A(A.a([p,B.ar,A.E(A.de(B.Rn,k,A.c(!w||l.a.r?"Finish lesson":r+l.e.length+" right",k,k,k,k,k,k,B.ch,k,k,k),o,j),1)],q),B.l,k,B.e,B.h,0,k,k))
return A.c6(k,g,A.p(k,A.bo(!0,A.co(s,k,k,C.bIk,k,k,B.ah,!1),!0,!1,B.ag,!0,!0),B.f,k,k,new A.o(k,k,k,k,k,new A.a6(B.aU,B.b1,B.w,t,k,k),B.m),k,k,k,k,k,k,k,k),k,!1,!1,k,k)},
cvl(a8,a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=this,a6=null,a7=a5.d
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
if(u!=null){a7=A.du(0,0,0,Math.max(0,u-Date.now()),0,0).a
r=B.o.ao(a7,6e7)
q=B.a.aZ(B.o.v(B.o.F(B.o.ao(a7,1e6),60)),2,"0")
a7=a8.a
p=a7?C.r1:C.r2
o=A.m(20)
n=A.K(C.d5.j(0.4),B.r,1)
m=A.c("Question "+(a9+1)+" is locked",a6,a6,a6,a6,a6,a6,A.l(a6,a6,a7?C.cl:B.c,a6,a6,a6,a6,a6,a6,a6,a6,14,a6,a6,B.C,a6,a6,!0,a6,a6,a6,a6,a6,a6,a6,a6),a6,a6,a6)
l=x.p
return A.p(a6,A.A(A.a([C.c5Q,B.ar,A.E(A.w(A.a([m,A.c("Wrong twice. Re-read the lesson; a new question appears in "+r+":"+q+".",a6,a6,a6,a6,a6,a6,A.l(a6,a6,a7?C.bT:C.bV,a6,a6,a6,a6,a6,a6,a6,a6,12.5,a6,a6,a6,a6,1.35,!0,a6,a6,a6,a6,a6,a6,a6,a6),a6,a6,a6)],l),B.B,a6,B.e,B.h,0,B.p),1)],l),B.l,a6,B.e,B.h,0,a6,a6),B.f,a6,a6,new A.o(p,a6,n,o,a6,a6,B.m),a6,a6,a6,B.d2,B.bD,a6,a6,a6)}a7=a8.a
p=a7?B.c.j(0.92):C.ib
o=A.m(20)
if(v)n=C.cH.j(0.6)
else n=a7?B.c:C.nf
n=A.K(n,B.r,v?1.5:1)
m=x.p
l=A.a([A.c(""+(a9+1)+". "+w.a,a6,a6,a6,a6,a6,a6,A.l(a6,a6,a7?C.cl:B.c,a6,a6,a6,a6,a6,a6,a6,a6,14,a6,a6,B.C,a6,a6,!0,a6,a6,a6,a6,a6,a6,a6,a6),a6,a6,a6),B.N],m)
for(k=a5.co_(b0),j=k.length,i=!v,h=w.b,g=w.c,f=0;f<k.length;k.length===j||(0,A.I)(k),++f){e=k[f]
d=v?a6:new D.dvR(a5,b0,e)
if(v&&e===g)a0=C.cH.j(0.14)
else if(s===e)a0=C.d5.j(0.12)
else a0=a7?C.r1:C.r2
a1=new A.aP(14,14)
if(v&&e===g)a2=C.cH
else a2=s===e?C.d5:B.L
a3=new A.ax(a2,1,B.r,-1)
a2=h[e]
a4=a7?C.cl:B.c
a2=A.a([new A.bu(1,B.b7,A.c(a2,a6,a6,a6,a6,a6,a6,new A.F(!0,a4,a6,a6,a6,a6,13.5,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6),a6,a6,a6),a6)],m)
if(v&&e===g)a2.push(C.c1f)
if(i&&s===e)a2.push(C.c7c)
l.push(A.aA(a6,A.p(a6,new A.c0(B.aK,B.e,B.h,B.l,a6,B.p,a6,0,a2,a6),B.f,a6,a6,new A.o(a0,a6,new A.bE(a3,a3,a3,a3),new A.bc(a1,a1,a1,a1),a6,a6,B.m),a6,a6,a6,B.eC,B.ep,a6,a6,a6),B.y,!1,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,d,a6,a6,a6,a6,a6,a6,!1,B.a4))}if(v)l.push(A.c("Right! "+w.d,a6,a6,a6,a6,a6,a6,C.fTv,a6,a6,a6))
else if(t===1&&!a5.a.f)l.push(C.h1p)
else if(t>=1)l.push(C.fZO)
return A.p(a6,A.w(l,B.B,a6,B.e,B.h,0,B.p),B.f,a6,a6,new A.o(p,a6,n,o,a6,a6,B.m),a6,a6,a6,B.d2,B.bD,a6,a6,a6)}}
D.aPS.prototype={
t(){var w=this,v=w.ab$
if(v!=null)v.a8(0,w.gbB())
w.ab$=null
w.a2()},
b0(){this.b8()
this.b5()
this.bC()}}
var z=a.updateTypes(["P(uz)","az<~>()","~()","XY(Z)","P(R6)","az<~>(n)","n(a_X)","a0Y(Z)"])
D.eJZ.prototype={
$1(d){var w=this.a
if(w.c!=null)w.yW(!0)},
$S:31}
D.eK_.prototype={
$1(d){this.a.yW(!0)
return null},
$S:10}
D.eJf.prototype={
$0(){var w=this.a
w.d=this.b
w.f=!1},
$S:0}
D.eJw.prototype={
$1(d){var w=this.a.as,v=w.f
if(v.length!==0){v=B.d.gd3(v).Q
v.toString
w.ia(B.i.D(Math.min(this.b*160-16,v),0,1/0))}},
$S:7}
D.eJh.prototype={
$0(){return this.a.Q=this.b},
$S:0}
D.eJv.prototype={
$0(){return this.a.Q=this.b},
$S:0}
D.eJy.prototype={
$0(){var w=this.a,v=w.f=!1,u=this.b,t=u==null
if(!t?J.z(J.t(u,"ok"),!0):v){w.d=u
w.ay=null}else{v=t?null:J.t(u,"error")
w.ay=J.k(v==null?"Could not reach the server. Pull down to try again.":v)
if(!J.z(t?null:J.t(u,"ownerOnly"),!0))v=J.z(t?null:J.t(u,"setupNeeded"),!0)
else v=!0
if(v)w.d=null}},
$S:0}
D.eJz.prototype={
$0(){var w=this.a,v=this.b
w.e=v
w.w=J.ad(v)>=30},
$S:0}
D.eJe.prototype={
$1(d){return A.a_(d,x.N,x.z)},
$S:22}
D.eJg.prototype={
$0(){var w,v,u=this,t=u.a
if(u.b){w=A.B(t.e,x.P)
v=u.c
B.d.u(w,v)}else{w=u.c
v=w}t.e=w
t.w=J.ad(v)>=30},
$S:0}
D.eJH.prototype={
$1(d){var w=null
return A.el(A.a([A.bL(!1,B.dx,w,w,!0,w,w,w,new D.eJF(d),w,w),A.bH(C.hlL,w,new D.eJG(d),w)],x.p),w,w,w,C.hma,w,w,w,w,C.h2V,w)},
$S:17}
D.eJF.prototype={
$0(){A.a8(this.a,!1).N(!1)
return null},
$S:0}
D.eJG.prototype={
$0(){A.a8(this.a,!1).N(!0)
return null},
$S:0}
D.eJI.prototype={
$0(){var w,v,u,t,s=this.a
s.r=!0
w=s.d
if(w!=null){v=x.N
u=x.z
w=A.dD(w,v,u)
t=s.d
t.toString
u=A.dD(D.dE(J.t(t,"state")),v,u)
v=this.b
u.n(0,"enabled",v)
if(v)u.n(0,"brakePaused",!1)
w.n(0,"state",u)
s.d=w}},
$S:0}
D.eJJ.prototype={
$0(){var w=this,v=w.a,u=v.r=!1,t=w.b
if(t){u=w.c
u.toString
u=J.t(u,"state")!=null}if(u)v.d=w.c
else if(!t)v.d=w.d},
$S:0}
D.eJo.prototype={
$1(d){var w=this.a,v=w.d
w.a.toString
return D.hld(v,!1)},
$S:z+3}
D.eJB.prototype={
$0(){return this.a.r=!0},
$S:0}
D.eJC.prototype={
$0(){var w=this.a,v=w.r=!1,u=this.b
if(u!=null?J.z(J.t(u,"ok"),!0):v)w.d=u},
$S:0}
D.eJD.prototype={
$1(d){var w=this
return A.og(new D.eJA(w.a,w.b,w.c,w.d),!1,0.8,0.95,0.25,!1,null)},
$S:134}
D.eJA.prototype={
$2(d,e){var w=this
return w.a.cAx(w.b,w.c,D.dE(J.t(w.d,"state")),e)},
$S:2088}
D.eJE.prototype={
$2(d,e){return B.i.aQ(D.eJM(d),D.eJM(e))},
$S:40}
D.eJY.prototype={
$0(){return this.a.yW(!0)},
$S:1}
D.eJT.prototype={
$0(){var w=this.a.c
w.toString
return A.Ok(w)},
$S:0}
D.eJU.prototype={
$0(){return this.a.yW(!0)},
$S:0}
D.eJ2.prototype={
$1(d){var w,v=J.a1(d)
if(!J.z(v.h(d,"today"),!0)){v=v.h(d,"asset")
w=this.a
v=J.z(v,w==null?null:w.h(0,"symbol"))}else v=!0
return v},
$S:4}
D.eJ3.prototype={
$1(d){return J.z(J.t(d,"asset"),this.a.Q)},
$S:4}
D.eJ4.prototype={
$1(d){return J.z(J.t(d,"asset"),this.a)},
$S:4}
D.eJ5.prototype={
$0(){var w=this
return B.d.dr(w.a,new D.eJ0(w.b),new D.eJ1(w.c,w.d))},
$S:143}
D.eJ0.prototype={
$1(d){return J.z(J.t(d,"asset"),this.a)},
$S:4}
D.eJ1.prototype={
$0(){var w=this.a
return w.length===0?this.b:B.d.gG(w)},
$S:143}
D.eJ6.prototype={
$1(d){return J.z(J.t(d,"asset"),this.a.h(0,"symbol"))},
$S:4}
D.eJ7.prototype={
$0(){return this.a},
$S:143}
D.eJP.prototype={
$1(d){return A.v(d)},
$S:15}
D.eJQ.prototype={
$1(d){return A.v(d)},
$S:15}
D.eJR.prototype={
$1(d){return B.a.q(d,"/")},
$S:3}
D.eJS.prototype={
$1(d){return!B.a.q(d,"/")},
$S:3}
D.eJL.prototype={
$1(d){var w,v=this,u=null,t=v.b,s=v.a.cJW(t,v.c,v.d)
t=t.a
w=A.fu(u,u,t?B.c.j(0.92):C.ib,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,B.nz,u,u,u,u,u,u)
return A.eB(u,B.L,A.aE(!1,B.a3,!0,u,A.w(A.a([s,B.R,A.bL(!1,A.c("Got it",u,u,u,u,u,u,A.l(u,u,t?C.cl:B.c,u,u,u,u,u,u,u,u,u,u,u,B.C,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u,u,!0,u,u,u,new D.eJK(d),u,w)],x.p),B.l,u,B.e,B.P,0,B.p),B.f,B.L,0,u,u,u,u,u,B.ai),u,u,u,B.zD,u,B.db,u,u,u)},
$S:46}
D.eJK.prototype={
$0(){return A.a8(this.a,!1).e4()},
$S:0}
D.eJO.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.c
s.toString
w=2
return A.b(A.a8(s,!1).ca(A.e7(new D.eJN(u.b),!1,null,x.H)),$async$$0)
case 2:if(t.c!=null)t.yW(!1)
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
D.eJN.prototype={
$1(d){return D.hBW(this.a)},
$S:675}
D.eJj.prototype={
$1(d){return J.z(J.t(d,"open"),!0)},
$S:4}
D.eJk.prototype={
$0(){var w=this
return w.a.cEN(w.b,w.c,w.d)},
$S:0}
D.eJl.prototype={
$1(d){return J.z(J.t(d,"asset"),J.t(this.a,"asset"))},
$S:4}
D.eJn.prototype={
$2(d,e){return B.ar},
$S:35}
D.eJm.prototype={
$2(d,a0){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.b[a0],l=J.a1(m),k=J.k(l.h(m,"asset")),j=k===J.t(o.c,"asset"),i=D.c4(l.h(m,"changePct")),h=i>=0,g=o.d,f=J.z(g==null?n:g.h(0,"symbol"),k),e=J.z(D.dE(l.h(m,"reading")).h(0,"decision"),"ENTER")&&J.z(D.dE(l.h(m,"reading")).h(0,"dir"),"up")
g=o.a
w=o.e
v=w.a
u=v?B.c.j(0.92):C.ib
t=A.m(16)
if(j)s=D.fE0(k).c
else s=v?B.c:C.nf
s=A.K(s,B.r,j?2:1)
w=j?D.fE0(k).c.j(0.2):w.gIc()
w=A.a([new A.aa(0,B.H,w,B.cN,j?12:8)],x.V)
r=D.bEp(k,16)
q=x.p
r=A.a([r,B.e0,A.E(A.c(k,n,1,B.a2,n,n,n,A.l(n,n,v?C.cl:B.c,n,n,n,n,n,n,n,n,11.5,n,n,B.C,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),1)],q)
if(f)B.d.u(r,A.a([A.V(B.q8,F.qQ,n,n,n,13),B.pq],q))
else if(e)B.d.u(r,A.a([A.V(B.fP,C.cH,n,n,n,14),B.pq],q))
r.push(g.cLj(m))
r=A.A(r,B.l,n,B.e,B.h,0,n,n)
l=D.eg(D.c4(l.h(m,"price")),!0,!1)
l=A.E(new A.d6(B.dn,B.a5,B.f,A.c(l,n,n,n,n,n,n,A.l(n,n,v?C.cl:B.c,n,n,n,n,n,n,n,n,14.5,n,n,B.C,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),n),1)
v=h?"+":""
p=B.i.a5(i,2)
return A.aA(n,A.cY(n,A.w(A.a([r,A.A(A.a([l,B.da,A.c(v+p+"%",n,n,n,n,n,n,A.l(n,n,h?C.cH:C.d5,n,n,n,n,n,n,n,n,10.5,n,n,B.C,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],q),B.dr,n,B.e,B.h,0,n,n)],q),B.B,n,B.iA,B.h,0,B.p),n,n,B.aZ,new A.o(u,n,s,t,w,n,B.m),B.a3,n,n,n,n,B.iP,n,n,152),B.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new D.eJi(g,k),n,n,n,n,n,n,!1,B.a4)},
$S:78}
D.eJi.prototype={
$0(){return this.a.a2t(this.b)},
$S:0}
D.eJa.prototype={
$0(){var w=this.a
return w.l(new D.eJ9(w,this.b))},
$S:0}
D.eJ9.prototype={
$0(){return this.a.z=this.b},
$S:0}
D.eJb.prototype={
$0(){var w=this.a
return w.l(new D.eJ8(w))},
$S:0}
D.eJ8.prototype={
$0(){var w=this.a
return w.ax=!w.ax},
$S:0}
D.eJc.prototype={
$1(d){return A.a_(d,x.N,x.z)},
$S:22}
D.eIZ.prototype={
$1(d){return J.z(J.t(d,"asset"),this.a.h(0,"symbol"))},
$S:4}
D.eJ_.prototype={
$0(){return A.S(x.N,x.z)},
$S:143}
D.eJq.prototype={
$1(d){return A.v(d)},
$S:15}
D.eJr.prototype={
$1(d){return A.v(d)},
$S:15}
D.eJs.prototype={
$1(d){return A.v(d)},
$S:15}
D.eJp.prototype={
$1(d){var w,v,u,t,s=A.be(A.v(d==null?"":d))
if(s==null)return"?"
w=s.bU()
v=B.o.F(A.cX(w),12)===0?12:B.o.F(A.cX(w),12)
u=B.a.aZ(B.o.v(A.fx(w)),2,"0")
t=A.cX(w)<12?"AM":"PM"
return""+v+":"+u+" "+t},
$S:15}
D.eJt.prototype={
$2(d,e){var w,v=null,u=this.a.a?C.r1:C.r2
u=A.bT(3,A.p(v,v,B.f,v,v,new A.o(u,v,v,A.m(99),v,v,B.m),v,v,v,v,v,v,v,v),0,0,3)
w=B.i.D(this.b/this.c,0,1)
return new A.a4(v,14,new A.am(B.a0,v,B.ac,B.t,A.a([u,A.ao(3,A.p(v,v,B.f,v,v,new A.o(C.cH,v,v,A.m(99),v,v,B.m),v,v,v,v,v,v,v,v),v,v,0,v,3,e.b*w)],x.p),v),v)},
$S:109}
D.eJu.prototype={
$1(d){var w=J.a1(d),v=A.v(w.h(d,"symbol"))
return A.aK(v,"/USD","")+" until "+A.v(this.a.$1(w.h(d,"until")))},
$S:2089}
D.eJx.prototype={
$2(d,e){var w=null,v=e.b,u=A.ao(w,A.p(w,w,B.f,w,w,new A.o(w,w,w,A.m(99),w,C.cbM,B.m),w,8,w,w,w,w,w,w),w,w,0,0,9,w),t=this.a.a,s=A.ao(w,A.p(w,w,B.f,(t?C.cl:B.c).j(0.5),w,w,w,18,w,w,w,w,w,2),w,w,v/2-1,w,4,w),r=B.i.D(this.b*v-9,0,v-18)
return new A.a4(w,26,new A.am(B.a0,w,B.ac,B.f,A.a([u,s,A.ao(w,A.p(w,w,B.f,w,w,new A.o(B.c,w,A.K(t?C.cl:B.c,B.r,3),w,w,w,B.a6),w,18,w,w,w,w,w,18),w,w,r,w,4,w)],x.p),w),w)},
$S:109}
D.eJd.prototype={
$0(){return this.a.zh(!this.b)},
$S:0}
D.eIY.prototype={
$2(d,e){var w=null,v=this.a.a,u=v?C.r1:C.r2,t=A.m(12),s=A.c(d,w,1,B.a2,w,w,w,A.l(w,w,v?C.bT:C.bV,w,w,w,w,w,w,w,w,10.5,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)
return A.E(A.p(w,A.w(A.a([s,B.bs,new A.d6(B.dn,B.a5,B.f,A.c(e,w,w,w,w,w,w,A.l(w,w,v?C.cl:B.c,w,w,w,w,w,w,w,w,13,w,w,B.C,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w)],x.p),B.B,w,B.e,B.h,0,B.p),B.f,w,w,new A.o(u,w,w,t,w,w,B.m),w,w,w,w,B.iP,w,w,w),1)},
$S:110}
D.eJW.prototype={
$1(d){return A.a_(d,x.N,x.z)},
$S:22}
D.eJX.prototype={
$0(){var w=this.a
return w.l(new D.eJV(w))},
$S:0}
D.eJV.prototype={
$0(){var w=this.a
return w.y=!w.y},
$S:0}
D.eIX.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=t.x&&t.w?2:4
break
case 2:w=5
return A.b(t.a_n(!0),$async$$0)
case 5:w=3
break
case 4:t.l(new D.eIW(t))
case 3:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
D.eIW.prototype={
$0(){var w=this.a
return w.x=!w.x},
$S:0}
D.fMO.prototype={
$1(d){return Math.abs(B.o.ao(d.a.bx(this.a).a,1e6))<90&&d.d.A(0,this.b)},
$S:z+4}
D.cY4.prototype={
$0(){return this.a.d=this.b},
$S:0}
D.cYd.prototype={
$2(d,e){var w,v,u=null,t=e.b,s=this.a,r=s.a,q=r.c,p=r.d,o=r.e,n=r.f
r=r.r
w=s.d
v=d.K(x.D)
if(v==null)v=B.CY
return A.aA(u,new A.a4(t,250,A.b4(u,u,u,new D.bf1(v.w.d,s.a.w,q,p,o,n,r,w,u),B.aA),u),B.y,!1,u,u,u,u,u,new D.cY8(s),new D.cY9(s,t),new D.cYa(s,t),u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new D.cYb(s,t),new D.cYc(s),u,u,u,!1,B.a4)},
$S:37}
D.cYb.prototype={
$1(d){return this.a.aBc(d.b,this.b)},
$S:24}
D.cY9.prototype={
$1(d){return this.a.aBc(d.b,this.b)},
$S:51}
D.cYa.prototype={
$1(d){return this.a.aBc(d.b,this.b)},
$S:19}
D.cY8.prototype={
$1(d){var w=this.a
return w.l(new D.cY7(w))},
$S:38}
D.cY7.prototype={
$0(){return this.a.d=null},
$S:0}
D.cYc.prototype={
$1(d){return A.bM(B.fO,new D.cY6(this.a),x.b)},
$S:55}
D.cY6.prototype={
$0(){var w=this.a
if(w.c!=null)w.l(new D.cY5(w))},
$S:12}
D.cY5.prototype={
$0(){return this.a.d=null},
$S:0}
D.cYe.prototype={
$1(d){var w=this.a
return w*d+w/2},
$S:155}
D.cYg.prototype={
$1(d){var w=this.b,v=this.a,u=v.a
return w-(d-u)/(v.b-u)*w},
$S:5}
D.cYf.prototype={
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
n.e=B.dP
o.e.af(l,n)},
$S:2090}
D.fkk.prototype={
$1(d){return D.c4(J.t(d,"c"))},
$S:2091}
D.fyU.prototype={
$1(d){var w=null,v=C.a8O.h(0,d),u=v.a,t=v.b,s=this.a,r=s*0.78,q=A.K(B.c,B.r,1.2)
return A.p(B.z,A.c(u,w,w,w,w,w,w,A.l(w,w,B.c,w,w,w,w,w,w,w,w,s*(u.length>1?0.26:0.36),w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.f,w,w,new A.o(t,w,q,w,w,w,B.a6),w,r,w,w,w,w,w,r)},
$S:123}
D.fEk.prototype={
$1(d){var w=x.N,v=x.z,u=A.a_(d,w,v)
v=A.dD(u,w,v)
v.n(0,"asset",u.h(0,"symbol"))
return v},
$S:22}
D.fIF.prototype={
$1(d){return A.a_(d,x.N,x.z)},
$S:22}
D.fFq.prototype={
$1(d){return","},
$S:58}
D.fMI.prototype={
$3(d,e,f){var w=A.aXm(d,e,1,0,0,0,0,0)
while(A.lX(w)!==7)w=w.bL(864e8)
return w.bL(A.du(7*(f-1),0,0,0,0,0).a)},
$S:2092}
D.e9z.prototype={
$1(d){this.a.By()
return null},
$S:10}
D.e91.prototype={
$0(){var w=this.a,v=this.b
w.d=A.a_(D.dE(v.h(0,"s")),x.N,x.z)
v=x.g.a(v.h(0,"log"))
if(v==null)v=B.bO
v=J.cK(v,x.f)
v=A.cs(v,new D.e90(),v.$ti.k("M.E"),x.P)
v=A.B(v,A.a3(v).k("M.E"))
w.e=v
w.f=!1},
$S:0}
D.e90.prototype={
$1(d){return A.a_(d,x.N,x.z)},
$S:22}
D.e9g.prototype={
$0(){var w,v,u=this.a
u.f=!1
w=this.b
v=w==null
if(!v&&J.z(J.t(w,"ok"),!0)){u.d=A.a_(w,x.N,x.z)
u.w=null}else{w=v?null:J.t(w,"error")
u.w=J.k(w==null?"Could not load this system right now.":w)}w=this.c
if(w!=null&&J.z(J.t(w,"ok"),!0)){w=x.g.a(J.t(w,"rows"))
if(w==null)w=B.bO
w=J.cK(w,x.f)
w=A.cs(w,new D.e9f(),w.$ti.k("M.E"),x.P)
w=A.B(w,A.a3(w).k("M.E"))
u.e=w}},
$S:0}
D.e9f.prototype={
$1(d){return A.a_(d,x.N,x.z)},
$S:22}
D.e9m.prototype={
$0(){var w,v,u,t=this.a
t.r=!0
w=t.d
if(w!=null){v=x.N
u=x.z
w=A.dD(w,v,u)
u=A.dD(D.dE(t.d.h(0,"state")),v,u)
v=this.b
u.n(0,"enabled",v)
if(v)u.n(0,"brakePaused",!1)
w.n(0,"state",u)
t.d=w}},
$S:0}
D.e9n.prototype={
$0(){var w=this.a,v=w.r=!1,u=this.b,t=u==null
if(!t?J.z(J.t(u,"ok"),!0):v)w.d=A.a_(u,x.N,x.z)
else{w.d=this.c
v=t?null:J.t(u,"error")
w.w=J.k(v==null?"Could not change it right now.":v)}},
$S:0}
D.e9x.prototype={
$0(){return A.Ok(this.a)},
$S:0}
D.e9y.prototype={
$0(){this.a.By()
return null},
$S:0}
D.e8V.prototype={
$0(){return this.a.zh(!this.b)},
$S:0}
D.e9d.prototype={
$1(d){return A.a_(d,x.N,x.z)},
$S:22}
D.e9e.prototype={
$2(d,e){var w,v=this,u=null,t=v.a.a?C.r1:C.r2
t=A.bT(3,A.p(u,u,B.f,u,u,new A.o(t,u,u,A.m(99),u,u,B.m),u,u,u,u,u,u,u,u),0,0,3)
w=B.i.D(v.b/v.c,0,1)
return new A.a4(u,14,new A.am(B.a0,u,B.ac,B.t,A.a([t,A.ao(3,A.p(u,u,B.f,u,u,new A.o(v.d,u,u,A.m(99),u,u,B.m),u,u,u,u,u,u,u,u),u,u,0,u,3,e.b*w)],x.p),u),u)},
$S:109}
D.e8Z.prototype={
$1(d){var w=x.g.a(this.a.h(0,d))
if(w==null)w=B.bO
w=J.cK(w,x.f)
w=A.cs(w,new D.e9_(),w.$ti.k("M.E"),x.P)
w=A.B(w,A.a3(w).k("M.E"))
return w},
$S:2093}
D.e9_.prototype={
$1(d){return A.a_(d,x.N,x.z)},
$S:22}
D.e8W.prototype={
$1(d){return A.v(d)},
$S:15}
D.e8X.prototype={
$1(d){var w=null
return new A.C(C.bFm,A.c(d,w,w,w,w,w,w,A.l(w,w,this.a.a?C.cl:B.c,w,w,w,w,w,w,w,w,12.5,w,w,B.C,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w)},
$S:123}
D.e8Y.prototype={
$3$c$icon(d,e,f){var w,v=null,u=f.A(0,B.no)?6:13,t=e==null
if(t)w=this.a.a.c==="options"?B.az:B.as
else w=e
u=A.V(f,w,v,v,v,u)
if(t)t=this.b.a?C.cl:B.c
else t=e
return new A.C(B.lb,A.A(A.a([new A.C(B.kO,u,v),I.wi,A.E(A.c(d,v,v,v,v,v,v,A.l(v,v,t,v,v,v,v,v,v,v,v,12,v,v,v,v,1.3,!0,v,v,v,v,v,v,v,v),v,v,v),1)],x.p),B.B,v,B.e,B.h,0,v,v),v)},
$1(d){return this.$3$c$icon(d,null,B.no)},
$2$icon(d,e){return this.$3$c$icon(d,null,e)},
$2$c(d,e){return this.$3$c$icon(d,e,B.no)},
$S:2094}
D.e97.prototype={
$1(d){return A.a_(d,x.N,x.z)},
$S:22}
D.e9k.prototype={
$1(d){return J.z(J.t(d,"symbol"),this.a.as)},
$S:4}
D.e9l.prototype={
$0(){var w=this.a
return B.d.dr(w,new D.e9i(),new D.e9j(w))},
$S:143}
D.e9i.prototype={
$1(d){return J.z(J.t(d,"tag"),"TRADED NOW")},
$S:4}
D.e9j.prototype={
$0(){return B.d.gG(this.a)},
$S:143}
D.e94.prototype={
$1(d){return J.z(D.dE(J.t(d,"analysis")).h(0,"passes"),!0)},
$S:4}
D.e96.prototype={
$2(d,e){return B.ar},
$S:35}
D.e95.prototype={
$2(b1,b2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=null,e="benched",d=g.b[b2],a0=J.a1(d),a1=A.v(a0.h(d,"symbol")),a2=a1===J.t(g.c,"symbol"),a3=D.c4(a0.h(d,"changePct")),a4=D.dE(a0.h(d,"record")),a5=D.dE(a0.h(d,"analysis")),a6=a0.h(d,"tag"),a7=A.v(a6==null?"":a6),a8=D.dE(a0.h(d,"today")),a9=B.i.M(D.c4(a8.h(0,"wins"))),b0=B.i.M(D.c4(a8.h(0,"losses")))
if(a7==="TRADED NOW")w=C.f94
else if(a0.h(d,e)!=null)w=C.fbU
else{if(J.z(a5.h(0,"passes"),!0))a6=C.fbD
else if(J.z(a5.h(0,"falling"),!0))a6=C.fbM
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
o=A.m(16)
if(a2)n=a6.a.c==="options"?B.az:B.as
else n=q?B.c:C.nf
n=A.K(n,B.r,a2?2:1)
if(a2)r=(a6.a.c==="options"?B.az:B.as).j(0.18)
else r=r.gIc()
r=A.a([new A.aa(0,B.H,r,B.cN,a2?12:8)],x.V)
m=D.bEp(a1,16)
l=x.p
m=A.A(A.a([m,B.e0,A.E(A.c(a1,f,1,B.a2,f,f,f,A.l(f,f,q?C.cl:B.c,f,f,f,f,f,f,f,f,11.5,f,f,B.C,f,f,!0,f,f,f,f,f,f,f,f),f,f,f),1),A.c(u,f,f,f,f,f,f,A.l(f,f,s,f,f,f,f,f,f,f,f,8.5,f,f,B.u,f,f,!0,f,f,f,f,f,f,f,f),f,f,f)],l),B.l,f,B.e,B.h,0,f,f)
k=D.eg(D.c4(a0.h(d,"price")),!0,!1)
k=A.E(new A.d6(B.dn,B.a5,B.f,A.c(k,f,f,f,f,f,f,A.l(f,f,q?C.cl:B.c,f,f,f,f,f,f,f,f,14.5,f,f,B.C,f,f,!0,f,f,f,f,f,f,f,f),f,f,f),f),1)
j=a3>=0
i=j?"+":""
h=B.i.a5(a3,2)
k=A.A(A.a([k,B.da,A.c(i+h+"%",f,f,f,f,f,f,A.l(f,f,j?C.cH:C.d5,f,f,f,f,f,f,f,f,10.5,f,f,B.C,f,f,!0,f,f,f,f,f,f,f,f),f,f,f)],l),B.dr,f,B.e,B.h,0,f,f)
j=D.c4(a4.h(0,"n"))===0?"":" \xb7 last "+B.i.M(D.c4(a4.h(0,"n")))+": "+B.i.M(D.c4(a4.h(0,"wins")))+"W/"+B.i.M(D.c4(a4.h(0,"losses")))+"L"
if(a9+b0>0)i=q?C.cl:B.c
else i=q?C.bT:C.bV
i=A.c("today "+a9+"W/"+b0+"L"+j,f,1,B.a2,f,f,f,A.l(f,f,i,f,f,f,f,f,f,f,f,9.5,f,f,B.O,f,f,!0,f,f,f,f,f,f,f,f),f,f,f)
if(a0.h(d,e)!=null)j="benched for today"
else if(D.c4(a4.h(0,"n"))===0)j="no trades here yet"
else{j=D.eg(D.c4(a4.h(0,"pnl")),!0,!0)
j+=a4.h(0,"topLoss")!=null?" \xb7 most losses: "+D.hHc(A.v(a4.h(0,"topLoss"))):""}if(a0.h(d,e)!=null)a0=C.d5
else a0=q?C.bT:C.bV
return A.aA(f,A.cY(f,A.w(A.a([m,k,i,A.c(j,f,1,B.a2,f,f,f,A.l(f,f,a0,f,f,f,f,f,f,f,f,9.5,f,f,B.O,f,f,!0,f,f,f,f,f,f,f,f),f,f,f)],l),B.B,f,B.iA,B.h,0,B.p),f,f,B.aZ,new A.o(p,f,n,o,r,f,B.m),B.eK,f,f,f,f,B.iP,f,f,152),B.y,!1,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,new D.e93(a6,a1),f,f,f,f,f,f,!1,B.a4)},
$S:78}
D.e93.prototype={
$0(){var w=this.a
return w.l(new D.e92(w,this.b))},
$S:0}
D.e92.prototype={
$0(){return this.a.as=this.b},
$S:0}
D.e8T.prototype={
$1(d){return A.a_(d,x.N,x.z)},
$S:22}
D.e8U.prototype={
$1(d){return A.a_(d,x.N,x.z)},
$S:22}
D.e9o.prototype={
$3$c(d,e,f){var w=null,v=this.a.a,u=v?C.r1:C.r2,t=A.m(12),s=A.c(d,w,1,B.a2,w,w,w,A.l(w,w,v?C.bT:C.bV,w,w,w,w,w,w,w,w,10.5,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)
if(f==null)v=v?C.cl:B.c
else v=f
return A.E(A.p(w,A.w(A.a([s,B.bs,new A.d6(B.dn,B.a5,B.f,A.c(e,w,w,w,w,w,w,A.l(w,w,v,w,w,w,w,w,w,w,w,13.5,w,w,B.C,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w)],x.p),B.B,w,B.e,B.h,0,B.p),B.f,w,w,new A.o(u,w,w,t,w,w,B.m),w,w,w,w,B.iP,w,w,w),1)},
$2(d,e){return this.$3$c(d,e,null)},
$S:2095}
D.e9a.prototype={
$1(d){return A.a_(d,x.N,x.z)},
$S:22}
D.e9b.prototype={
$1(d){var w,v,u,t,s,r=null,q=this.a,p=this.b,o=x.S,n=A.U(p),m=q.Q?A.cU(p,0,A.dw(18,"count",o),n.c).dd(0):A.cU(p,0,A.dw(4,"count",o),n.c).dd(0),l=new D.e9c(this.c)
o=x.p
n=A.a([],o)
for(w=x.N,v=x.z,u=0;u<m.length;u+=2){t=A.a_(m[u],w,v)
t=l.$1(t)
s=u+1
if(s<m.length){s=A.a_(m[s],w,v)
s=l.$1(s)}else s=B.wj
n.push(new A.C(B.eC,new A.c0(B.aK,B.e,B.h,B.l,r,B.p,r,0,A.a([new A.bu(1,B.b7,t,r),B.b6,new A.bu(1,B.b7,s,r)],o),r),r))}p=p.length
if(p>4)n.push(new A.bK(B.a5,r,r,A.bL(!1,A.c(q.Q?"Show less":"See more ("+A.v(Math.min(p,18)-4)+")",r,r,r,r,r,r,r,r,r,r),r,r,!0,r,r,r,new D.e99(q),r,r),r))
return A.w(n,B.B,r,B.e,B.h,0,B.p)},
$S:250}
D.e9c.prototype={
$1(d){var w,v,u,t,s,r,q="cost",p=null,o="strike",n="spreadPct"
if(d.h(0,q)!=null&&D.c4(d.h(0,q))<=150)w=C.cH
else w=this.a.a?C.bT:C.bV
w=w.j(0.12)
v=A.m(8)
u=D.c4(d.h(0,o))
u=B.i.a5(u,typeof d.h(0,o)=="number"&&B.i.F(D.c4(d.h(0,o)),1)!==0?2:0)
t=D.aRj(d.h(0,"expiry"))
s=A.ag(", \\d{4}$",!0,!1,!1,!1)
t=A.aK(t,s,"")
s=this.a.a
u=A.c("$"+u+" \xb7 "+t,p,1,B.a2,p,p,p,A.l(p,p,s?C.cl:B.c,p,p,p,p,p,p,p,p,11,p,p,B.C,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)
t=d.h(0,q)==null?"no price":D.eg(D.c4(d.h(0,q)),!0,!1)
r=d.h(0,n)==null||D.c4(d.h(0,n))>=100?"":" \xb7 spread "+B.i.a5(D.c4(d.h(0,n)),0)+"%"
return A.p(p,A.w(A.a([u,A.c(t+r,p,1,B.a2,p,p,p,A.l(p,p,s?C.bT:C.bV,p,p,p,p,p,p,p,p,10.5,p,p,B.O,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)],x.p),B.B,p,B.e,B.h,0,B.p),B.f,p,p,new A.o(w,p,p,v,p,p,B.m),p,p,p,p,B.lF,p,p,p)},
$S:2096}
D.e99.prototype={
$0(){var w=this.a
return w.l(new D.e98(w))},
$S:0}
D.e98.prototype={
$0(){var w=this.a
return w.Q=!w.Q},
$S:0}
D.e9v.prototype={
$1(d){return A.a_(d,x.N,x.z)},
$S:22}
D.e9w.prototype={
$0(){var w=this.a
return w.l(new D.e9u(w))},
$S:0}
D.e9u.prototype={
$0(){var w=this.a
return w.y=!w.y},
$S:0}
D.e9t.prototype={
$0(){var w,v=this
if(v.d)w=v.e
else{w=v.f
w=A.J(["why",(w.length!==0?w+".\n\n":v.r+". ")+"Bought because: "+v.w],x.N,x.z)}return v.a.cEQ(v.b,v.c,w)},
$S:0}
D.e9q.prototype={
$1(d){return A.a_(d,x.N,x.z)},
$S:22}
D.e9s.prototype={
$1(d){var w
if(d==null)w="?"
else{w=D.c4(d)>=0?"+":""
w=w+B.i.a5(D.c4(d),2)+"%"}return w},
$S:15}
D.e9r.prototype={
$1(a1){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i="strength",h="thresholdPct",g=k.a.a,f=g?B.c.j(0.92):C.ib,e=A.c("Why this trade: "+k.b,j,j,j,j,j,j,A.l(j,j,g?C.cl:B.c,j,j,j,j,j,j,j,j,16,j,j,B.C,j,j,!0,j,j,j,j,j,j,j,j),j,j,j),d=k.c,a0=d.h(0,"why")
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
d=A.a([a0,B.R,A.c("Market "+w+" at "+v+" \xb7 trend "+u+" \xb7 15 min "+s+" \xb7 score "+r+d,j,j,j,j,j,j,A.l(j,j,g?C.bT:C.bV,j,j,j,j,j,j,j,j,12,j,j,j,j,1.35,!0,j,j,j,j,j,j,j,j),j,j,j)],q)
a0=k.e
if(a0.a!==0&&D.c4(a0.h(0,"n"))>0){w=B.i.M(D.c4(a0.h(0,"n")))
v=B.i.M(D.c4(a0.h(0,"wins")))
u=B.i.M(D.c4(a0.h(0,"losses")))
a0=D.eg(D.c4(a0.h(0,"pnl")),!0,!0)
d.push(A.c("Its record here before: last "+w+": "+v+"W / "+u+"L \xb7 "+a0,j,j,j,j,j,j,A.l(j,j,g?C.bT:C.bV,j,j,j,j,j,j,j,j,12,j,j,j,j,1.35,!0,j,j,j,j,j,j,j,j),j,j,j))}a0=k.f
if(a0.length!==0){w=A.a([B.R,A.c("How the markets ranked:",j,j,j,j,j,j,A.l(j,j,g?C.cl:B.c,j,j,j,j,j,j,j,j,12.5,j,j,B.C,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)],q)
for(a0=A.aoB(a0,0,x.P),v=J.aQ(a0.a),a0=a0.b,u=new A.F8(v,a0);u.C();){s=u.c
s=s>=0?new A.y(a0+s,v.gP(v)):A.bi(A.fb())
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
return A.el(A.a([A.bL(!1,B.pw,j,j,!0,j,j,j,new D.e9p(a1),j,j)],q),j,j,f,g,j,j,j,j,e,j)},
$S:17}
D.e9p.prototype={
$0(){return A.a8(this.a,!1).e4()},
$S:0}
D.e8S.prototype={
$0(){var w=this.a
return w.l(new D.e8R(w))},
$S:0}
D.e8R.prototype={
$0(){var w=this.a
return w.z=!w.z},
$S:0}
D.e9h.prototype={
$1(d){return A.v(d)},
$S:15}
D.db4.prototype={
$1(d){var w=this.a
if(w.c!=null)w.l(new D.db3())},
$S:10}
D.db3.prototype={
$0(){},
$S:0}
D.fJw.prototype={
$1(d){return J.k(d)},
$S:15}
D.fJx.prototype={
$2(d,e){var w=null,v=e.b,u=A.ao(w,A.p(w,w,B.f,w,w,new A.o(w,w,w,A.m(9),w,C.cbc,B.m),w,6,w,w,w,w,w,w),w,w,0,0,4,w),t=B.i.D(this.a/100*v-7,0,v-14)
return new A.a4(w,14,new A.am(B.a0,w,B.ac,B.f,A.a([u,A.ao(w,A.p(w,w,B.f,w,w,new A.o(B.c,w,A.K(this.b.a?C.cl:B.c,B.r,2.5),w,w,w,B.a6),w,14,w,w,w,w,w,14),w,w,t,w,0,w)],x.p),w),w)},
$S:109}
D.fNe.prototype={
$1(d){return A.a_(d,x.N,x.z)},
$S:22}
D.fia.prototype={
$1(d){var w=this.a
if(w.c!=null)w.l(new D.fi9())},
$S:10}
D.fi9.prototype={
$0(){},
$S:0}
D.fi8.prototype={
$2(d,e){var w=null,v=B.c.j(0.16),u=A.m(10)
return A.E(A.p(w,A.w(A.a([A.c(d,w,w,w,w,w,w,C.fWt,w,w,w),new A.d6(B.dn,B.a5,B.f,A.c(e,w,w,w,w,w,w,C.fJH,w,w,w),w)],x.p),B.B,w,B.e,B.h,0,B.p),B.f,w,w,new A.o(v,w,w,u,w,w,B.m),w,w,w,w,B.I_,w,w,w),1)},
$S:110}
D.djs.prototype={
$1(d){var w=this.a
if(w.c!=null)w.l(new D.djr())},
$S:10}
D.djr.prototype={
$0(){},
$S:0}
D.fzJ.prototype={
$1(d){return J.k(d)},
$S:15}
D.eK9.prototype={
$1(d){return J.k(d)},
$S:15}
D.eKY.prototype={
$0(){return this.a.l(new D.eKX())},
$S:0}
D.eKX.prototype={
$0(){},
$S:0}
D.eKZ.prototype={
$0(){return $.hnT=this.a.at.a.a},
$S:0}
D.eL_.prototype={
$1(d){var w=this.a
if(w.c!=null)w.l(new D.eKW(w,d))},
$S:187}
D.eKW.prototype={
$0(){return this.a.Q=this.b},
$S:0}
D.eL0.prototype={
$1(d){this.a.Rx()
return null},
$S:10}
D.eKT.prototype={
$1(d){var w=x.N,v=x.z
v=A.dD(A.a_(d,w,v),w,v)
v.n(0,"asset",J.t(d,"symbol"))
return v},
$S:22}
D.eKu.prototype={
$0(){var w,v,u=this,t=u.c
if(J.z(t==null?null:J.t(t,"isAdmin"),!0))u.b.y=!0
w=u.d
if(w==null)w=u.a.a
if(w!=null){t=x.g.a(w.h(0,"done"))
if(t==null)t=A.a([],x.s)
v=x.Y.a(w.h(0,"lessons"))
u.b.x=A.J(["done",t,"lessons",v==null?A.S(x.N,x.z):v],x.N,x.z)}},
$S:0}
D.eKD.prototype={
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
if(J.z(n==null?null:J.t(n,"allDone"),!0)){$.cnN=new A.W(A.fQ(0,0),0,!1)
A.K_()}case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$$0,v)},
$S:1}
D.eKc.prototype={
$1(d){return this.a.gKf().q(0,d.a)},
$S:z+0}
D.eKd.prototype={
$0(){var w,v=this.a,u=x.N,t=A.d7(v.gKf(),u)
t.I(0,this.b)
w=A.B(t,A.a3(t).k("ci.E"))
u=A.dD(v.x,u,x.z)
u.n(0,"done",w)
v.x=u},
$S:0}
D.eKe.prototype={
$1(d){return this.a.gKf().q(0,d.a)},
$S:z+0}
D.eKf.prototype={
$1(d){var w=null
return A.el(A.a([A.bH(C.hfI,w,new D.eKb(this.a,d),w)],x.p),w,w,w,C.hcD,w,w,w,w,C.h_O,w)},
$S:17}
D.eKb.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:A.a8(u.b,!1).N(null)
w=2
return A.b(A.Mt(),$async$$0)
case 2:t=e
s=u.a
if(s.c!=null)s.l(new D.eKa(s,t))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
D.eKa.prototype={
$0(){return this.a.Q=this.b},
$S:0}
D.eKC.prototype={
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
if(u==null)u=B.bO
u=J.b8(u,new D.eKB(),x.N)
u=A.B(u,u.$ti.k("aj.E"))
s.dx=u
u=v.h(w,"nowEt")
s.dy=J.k(u==null?"":u)
s.fr=J.z(v.h(w,"stockOpen"),!0)
s.r=new A.W(Date.now(),0,!1)
if(x.f.b(v.h(w,"signals")))s.db=D.dE(v.h(w,"signals"))},
$S:0}
D.eKB.prototype={
$1(d){return J.k(d)},
$S:15}
D.eKQ.prototype={
$1(d){return J.z(J.t(d,"open"),!0)&&D.bFM(d).length>5},
$S:4}
D.eKR.prototype={
$2(d,e){return B.i.aQ(D.eJM(d),D.eJM(e))},
$S:40}
D.eKi.prototype={
$1(d){return J.z(J.t(d,"asset"),this.a.h(0,"symbol"))},
$S:4}
D.eKj.prototype={
$0(){return A.S(x.N,x.z)},
$S:143}
D.eKk.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m="typicalMin",l="enterWithinMin",k=J.a1(d),j=D.dE(k.h(d,"reading")),i=D.dE(j.h(0,"timing"))
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
t=D.hMf(d)
s=B.i.a5(D.c4(k.h(d,"changePct")),2)
k=J.z(k.h(d,"open"),!0)?"open":"closed"
r=j.h(0,"bias")
r=A.v(r==null?"unknown":r)
q=B.i.a5(D.c4(j.h(0,"score")),0)
p=j.h(0,"rsi")==null?"n/a":B.i.a5(D.c4(j.h(0,"rsi")),0)
o=j.h(0,"mom1h")==null?"n/a":B.i.a5(D.c4(j.h(0,"mom1h")),2)+"%"
n=j.h(0,"action")
return"- "+v+" ("+u+"): price "+t+", change "+s+"%, "+k+", "+r+", strength "+q+", RSI "+p+", last hour "+o+", reading: "+A.v(n==null?"n/a":n)+w+"."},
$S:53}
D.eK5.prototype={
$0(){$.DD.push(new D.a_X(!0,this.b))
$.ahB=!0},
$S:0}
D.eK6.prototype={
$1(d){return(d.a?"Student":"Tutor")+": "+d.b},
$S:z+6}
D.eK7.prototype={
$1(d){return"- "+A.v(d)},
$S:15}
D.eK8.prototype={
$0(){},
$S:0}
D.eKE.prototype={
$1(d){var w=this.a.ax,v=w.f
if(v.length!==0){v=B.d.gd3(v).Q
v.toString
w.m9(v+200,B.ed,B.eY)}},
$S:7}
D.eKU.prototype={
$0(){return A.Ok(this.a)},
$S:0}
D.eKV.prototype={
$0(){return this.b.gLw().Ce(this.a.a)},
$S:0}
D.eKh.prototype={
$1(d){return this.a.gKf().q(0,d.a)},
$S:z+0}
D.eKg.prototype={
$0(){return this.a.cmW(this.b)},
$S:0}
D.eKA.prototype={
$1(d){var w=this.b,v=B.d.c8(C.Ep,w),u=this.a,t=u.y,s=w.a,r=u.gKf().q(0,s)
s=x.Y.a(D.dE(u.x.h(0,"lessons")).h(0,s))
if(s==null)s=B.lL
return new D.a0Y(w,v+1,new D.eKw(u,w),t,r,A.a_(s,x.N,x.z),new D.eKx(u,w),new D.eKy(u,w),new D.eKz(u),null)},
$S:z+7}
D.eKw.prototype={
$0(){var w=this.a,v=w.c
v.toString
return w.c7U(new D.RC(A.Q(v).ax.a===B.dg),this.b.r)},
$S:127}
D.eKx.prototype={
$1(d){var w=this.a
w.l(new D.eKv(w,this.b,d))
w.aDq()},
$S:117}
D.eKv.prototype={
$0(){var w=this.a,v=x.N,u=x.z,t=A.a_(D.dE(w.x.h(0,"lessons")),v,u)
t.n(0,this.b.a,this.c)
u=A.dD(w.x,v,u)
u.n(0,"lessons",t)
w.x=u},
$S:0}
D.eKy.prototype={
$0(){return this.a.aeF(this.b.a)},
$S:0}
D.eKz.prototype={
$1(d){var w=this.a,v=w.c
v.toString
A.a8(v,!1).e4()
w.aRG(d)},
$S:2}
D.eKl.prototype={
$2$last$lines(d,e){var w=this.a
return new D.a_R(B.d.fB(w,Math.max(0,w.length-d)),this.b,null,e,this.c,C.duy,null)},
$0(){return this.$2$last$lines(36,!0)},
$1$lines(d){return this.$2$last$lines(36,d)},
$S:2097}
D.eKt.prototype={
$1(d){var w=null
return A.c(d,w,w,w,w,w,w,A.l(w,w,this.a.a?C.cl:B.c,w,w,w,w,w,w,w,w,13,w,w,w,w,1.4,!0,w,w,w,w,w,w,w,w),w,w,w)},
$S:2098}
D.eKm.prototype={
$1(d){var w=J.a1(d)
return J.z(D.dE(w.h(d,"reading")).h(0,"decision"),"ENTER")&&J.z(D.dE(w.h(d,"reading")).h(0,"dir"),"up")},
$S:4}
D.eKn.prototype={
$1(d){return J.t(d,"asset")},
$S:793}
D.eKo.prototype={
$1(d){var w=J.a1(d)
return J.z(D.dE(w.h(d,"reading")).h(0,"decision"),"ENTER")&&J.z(D.dE(w.h(d,"reading")).h(0,"dir"),"down")},
$S:4}
D.eKp.prototype={
$1(d){return J.t(d,"asset")},
$S:793}
D.eKq.prototype={
$1(d){var w=J.a1(d)
return J.z(w.h(d,"open"),!0)&&D.dE(w.h(d,"reading")).h(0,"rsi")!=null},
$S:4}
D.eKr.prototype={
$1(d){return J.z(J.t(d,"open"),!0)},
$S:4}
D.eKs.prototype={
$1(d){var w=D.dE(D.dE(J.t(d,"reading")).h(0,"timing"))
return D.c4(w.h(0,"of"))>=3&&D.c4(w.h(0,"worked"))/D.c4(w.h(0,"of"))>=0.5},
$S:4}
D.eKJ.prototype={
$1(d){var w,v,u,t=this.a
if(t.cx!=="All"&&D.hHd(d)!==t.cx)return!1
t=this.b
if(t.length===0)return!0
w=J.a1(d)
v=A.v(w.h(d,"asset"))
u=A.v(w.h(d,"name"))
w=w.h(d,"asset")
w=J.k(w==null?"":w)
return B.a.q((v+" "+u+" "+A.aK(w,"/","")).toLowerCase(),t)},
$S:4}
D.eKK.prototype={
$2(d,e){var w="activeSignal",v=J.a1(d),u=x.f,t=u.b(v.h(d,w))?0:1,s=J.a1(e),r=u.b(s.h(e,w))?0:1
if(t!==r)return t-r
return B.i.aQ(D.c4(D.dE(s.h(e,"v2")).h(0,"passed")),D.c4(D.dE(v.h(d,"v2")).h(0,"passed")))},
$S:40}
D.eKM.prototype={
$0(){var w=this.a
return w.l(new D.eKI(w,this.b))},
$S:0}
D.eKI.prototype={
$0(){return this.a.cx=this.b},
$S:0}
D.eKL.prototype={
$1(d){return D.hHd(d)===this.a},
$S:4}
D.eKN.prototype={
$0(){var w=this.a
w.l(new D.eKH(w))},
$S:0}
D.eKH.prototype={
$0(){var w=this.a,v=w.CW
w.CW=!v
if(v){w.ch=""
w.cy.bM(0,B.ck)}},
$S:0}
D.eKO.prototype={
$1(d){var w=this.a
return w.l(new D.eKG(w,d))},
$S:2}
D.eKG.prototype={
$0(){return this.a.ch=this.b},
$S:0}
D.eKP.prototype={
$0(){return this.a.aRG("What is happening with "+A.v(J.t(this.b,"asset"))+" right now? Which of the 5 confirmations are missing, and why is the answer BUY, SELL or WAIT?")},
$S:0}
D.eKF.prototype={
$1(d){return A.a_(d,x.N,x.z)},
$S:22}
D.eK1.prototype={
$1(d){return this.a.gKf().q(0,d.a)},
$S:z+0}
D.eK2.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=!u.b?2:4
break
case 2:u.a.gLw().Ce(0)
w=3
break
case 4:w=5
return A.b(A.Mt(),$async$$0)
case 5:t=e
s=u.a
if(s.c!=null)s.l(new D.eK0(s,t))
$.cnN=new A.W(A.fQ(0,0),0,!1)
A.K_()
case 3:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
D.eK0.prototype={
$0(){return this.a.Q=this.b},
$S:0}
D.eK3.prototype={
$0(){return this.a.Ke(this.b)},
$S:0}
D.eK4.prototype={
$0(){var w=this.a
return w.Ke(w.at.a.a)},
$S:0}
D.dw3.prototype={
$1(d){var w
x.g.a(d)
w=d==null?B.bO:d
w=J.b8(w,new D.dw4(),x.S)
w=A.B(w,w.$ti.k("aj.E"))
return w},
$S:411}
D.dw4.prototype={
$1(d){var w=A.ca(A.v(d),null)
return w==null?0:w},
$S:289}
D.dw1.prototype={
$1(d){var w,v
x.Y.a(d)
w=d==null?B.lL:d
v=x.S
return J.oV(w,new D.dw2(),v,v)},
$S:2100}
D.dw2.prototype={
$2(d,e){var w,v=A.ca(A.v(d),null)
if(v==null)v=0
w=A.ca(A.v(e),null)
if(w==null)w=0
return new A.bw(v,w,x.a)},
$S:2101}
D.dw_.prototype={
$1(d){var w
if(d>=0){w=this.a.d
w===$&&A.d()
w=d<w.length}else w=!1
return w},
$S:27}
D.dw0.prototype={
$1(d){var w,v=this.a
if(v.c==null)return
w=v.w
w===$&&A.d()
if(w.a!==0)v.l(new D.dvZ(v))},
$S:10}
D.dvZ.prototype={
$0(){return this.a.cHC()},
$S:0}
D.dvS.prototype={
$2(d,e){return new A.bw(""+d,e,x.W)},
$S:794}
D.dvT.prototype={
$2(d,e){return new A.bw(""+d,e,x.W)},
$S:794}
D.dvU.prototype={
$1(d){var w=this.a,v=w.x
v===$&&A.d()
if(!B.d.q(v,d)){w=w.e
w===$&&A.d()
w=!B.d.q(w,d)}else w=!1
return w},
$S:27}
D.dvV.prototype={
$1(d){var w=this.a,v=w.e
v===$&&A.d()
if(!B.d.q(v,d)){w=w.f
w===$&&A.d()
w=!w.q(0,d)}else w=!1
return w},
$S:27}
D.dvQ.prototype={
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
D.dvW.prototype={
$0(){return A.Ok(this.a)},
$S:0}
D.dvX.prototype={
$0(){return this.a.a.d0M('I just read the lesson "'+this.b.b+'". Can you explain it again with a live example from the markets right now?')},
$S:0}
D.dvY.prototype={
$0(){this.a.a.rs()
A.Ok(this.b)},
$S:0}
D.dvR.prototype={
$0(){return this.a.chq(this.b,this.c)},
$S:0};(function aliases(){var w=D.aPS.prototype
w.bCo=w.t})();(function installTearOffs(){var w=a._instance_0u,v=a._instance_1u
var u
w(u=D.aHP.prototype,"gcmU","cmV",2)
w(u,"gcAv","a3N",1)
w(D.aGK.prototype,"gcht","By",1)
w(u=D.aHQ.prototype,"gchs","Rx",1)
v(u,"gchr","Ke",5)})();(function inheritance(){var w=a.mixinHard,v=a.inheritMany,u=a.inherit
v(A.af,[D.auj,D.a_R,D.OU,D.aBD,D.aKX,D.aCW,D.XY,D.a0Y])
v(A.ah,[D.aHP,D.bf0,D.aGK,D.bfI,D.bwn,D.biz,D.aPS,D.blK])
v(A.hp,[D.eJZ,D.eK_,D.eJw,D.eJe,D.eJH,D.eJo,D.eJD,D.eJ2,D.eJ3,D.eJ4,D.eJ0,D.eJ6,D.eJP,D.eJQ,D.eJR,D.eJS,D.eJL,D.eJN,D.eJj,D.eJl,D.eJc,D.eIZ,D.eJq,D.eJr,D.eJs,D.eJp,D.eJu,D.eJW,D.fMO,D.cYb,D.cY9,D.cYa,D.cY8,D.cYc,D.cYe,D.cYg,D.fkk,D.fyU,D.fEk,D.fIF,D.fFq,D.fMI,D.e9z,D.e90,D.e9f,D.e9d,D.e8Z,D.e9_,D.e8W,D.e8X,D.e8Y,D.e97,D.e9k,D.e9i,D.e94,D.e8T,D.e8U,D.e9o,D.e9a,D.e9b,D.e9c,D.e9v,D.e9q,D.e9s,D.e9r,D.e9h,D.db4,D.fJw,D.fNe,D.fia,D.djs,D.fzJ,D.eK9,D.eL_,D.eL0,D.eKT,D.eKc,D.eKe,D.eKf,D.eKB,D.eKQ,D.eKi,D.eKk,D.eK6,D.eK7,D.eKE,D.eKh,D.eKA,D.eKx,D.eKz,D.eKl,D.eKt,D.eKm,D.eKn,D.eKo,D.eKp,D.eKq,D.eKr,D.eKs,D.eKJ,D.eKL,D.eKO,D.eKF,D.eK1,D.dw3,D.dw4,D.dw1,D.dw_,D.dw0,D.dvU,D.dvV])
v(A.iW,[D.eJf,D.eJh,D.eJv,D.eJy,D.eJz,D.eJg,D.eJF,D.eJG,D.eJI,D.eJJ,D.eJB,D.eJC,D.eJY,D.eJT,D.eJU,D.eJ5,D.eJ1,D.eJ7,D.eJK,D.eJO,D.eJk,D.eJi,D.eJa,D.eJ9,D.eJb,D.eJ8,D.eJ_,D.eJd,D.eJX,D.eJV,D.eIX,D.eIW,D.cY4,D.cY7,D.cY6,D.cY5,D.e91,D.e9g,D.e9m,D.e9n,D.e9x,D.e9y,D.e8V,D.e9l,D.e9j,D.e93,D.e92,D.e99,D.e98,D.e9w,D.e9u,D.e9t,D.e9p,D.e8S,D.e8R,D.db3,D.fi9,D.djr,D.eKY,D.eKX,D.eKZ,D.eKW,D.eKu,D.eKD,D.eKd,D.eKb,D.eKa,D.eKC,D.eKj,D.eK5,D.eK8,D.eKU,D.eKV,D.eKg,D.eKw,D.eKv,D.eKy,D.eKM,D.eKI,D.eKN,D.eKH,D.eKG,D.eKP,D.eK2,D.eK0,D.eK3,D.eK4,D.dvZ,D.dvQ,D.dvW,D.dvX,D.dvY,D.dvR])
v(A.iX,[D.eJA,D.eJE,D.eJn,D.eJm,D.eJt,D.eJx,D.eIY,D.cYd,D.cYf,D.e9e,D.e96,D.e95,D.fJx,D.fi8,D.eKR,D.eKK,D.dw2,D.dvS,D.dvT])
v(A.aG,[D.R6,D.z4,D.RC,D.cH,D.uz,D.a_X])
v(A.lM,[D.bf1,D.bx1])
u(D.aHQ,D.aPS)
w(D.aPS,A.cj)})()
A.je(b.typeUniverse,JSON.parse('{"auj":{"af":[],"x":[]},"a_R":{"af":[],"x":[]},"aBD":{"af":[],"x":[]},"aKX":{"af":[],"x":[]},"aCW":{"af":[],"x":[]},"XY":{"af":[],"x":[]},"a0Y":{"af":[],"x":[]},"aHP":{"ah":["auj"]},"bf0":{"ah":["a_R"]},"bf1":{"aC":[]},"bx1":{"aC":[]},"OU":{"af":[],"x":[]},"aGK":{"ah":["OU"]},"bfI":{"ah":["aBD"]},"bwn":{"ah":["aKX"]},"biz":{"ah":["aCW"]},"aHQ":{"ah":["XY"]},"blK":{"ah":["a0Y"]}}'))
var y={g:". Look over the trades, then press Start to turn it back on.",b:"The chart appears after the first reading."}
var x=(function rtii(){var w=A.as
return{c:w("la<u?>"),D:w("EG"),V:w("N<aa>"),O:w("N<u>"),o:w("N<az<a9<n,@>?>>"),R:w("N<mF>"),t:w("N<a9<n,@>>"),v:w("N<h_>"),L:w("N<+(n,n)>"),T:w("N<+(G,R6)>"),s:w("N<n>"),p:w("N<x>"),n:w("N<R6>"),r:w("N<cH>"),u:w("N<H>"),X:w("N<G>"),w:w("N<W?>"),W:w("bw<n,G>"),a:w("bw<G,G>"),P:w("a9<n,@>"),f:w("a9<@,@>"),b:w("cp"),K:w("aG"),N:w("n"),E:w("X<uz>"),q:w("l2"),y:w("P"),z:w("@"),S:w("G"),i:w("ai<a9<n,@>>?"),g:w("ai<@>?"),h:w("a9<n,@>?"),Y:w("a9<@,@>?"),H:w("~")}})();(function constants(){var w=a.makeConstList
C.cH=new A.u(1,0.12156862745098039,0.7490196078431373,0.592156862745098,B.q)
C.b60=new A.la(C.cH,x.c)
C.ib=new A.u(1,0.08627450980392157,0.10588235294117647,0.1803921568627451,B.q)
C.bT=new A.u(1,0.5411764705882353,0.5607843137254902,0.6392156862745098,B.q)
C.t9=new A.u(1,0.0392156862745098,0.050980392156862744,0.09411764705882353,B.q)
C.tb=new A.u(1,0.9294117647058824,0.9372549019607843,0.9803921568627451,B.q)
C.bV=new A.u(1,0.5529411764705883,0.5843137254901961,0.6705882352941176,B.q)
C.n7=new A.u(1,0.08627450980392157,0.09019607843137255,0.11372549019607843,B.q)
C.oJ=new A.u(1,0.14901960784313725,0.17647058823529413,0.27058823529411763,B.q)
C.oO=new A.u(1,0.9058823529411765,0.9098039215686274,0.9411764705882353,B.q)
C.O5=new A.u(1,0.06666666666666667,0.08235294117647059,0.1607843137254902,B.q)
C.O9=new A.u(1,0.12549019607843137,0.14901960784313725,0.23137254901960785,B.q)
C.Oc=new A.u(1,0.9725490196078431,0.9450980392156862,0.9490196078431372,B.q)
C.nf=new A.u(1,0.13725490196078433,0.16470588235294117,0.25882352941176473,B.q)
C.Oj=new A.u(1,0.9372549019607843,0.9411764705882353,0.9607843137254902,B.q)
C.cl=new A.u(1,0.07058823529411765,0.0784313725490196,0.10980392156862745,B.q)
C.d5=new A.u(1,0.9411764705882353,0.33725490196078434,0.41568627450980394,B.q)
C.r1=new A.u(1,0.9568627450980393,0.9607843137254902,0.9803921568627451,B.q)
C.r2=new A.u(1,0.11372549019607843,0.13725490196078433,0.2196078431372549,B.q)
C.bFd=new A.R(0,0,0,7)
C.bFm=new A.R(0,10,0,4)
C.bFE=new A.R(0,4,0,12)
C.bGS=new A.R(12,8,12,6)
C.bH0=new A.R(13,7,13,7)
C.aov=new A.R(16,4,16,40)
C.bId=new A.R(16,6,16,16)
C.bIk=new A.R(16,8,16,40)
C.bL2=new A.R(4,0,4,10)
C.apk=new A.R(4,0,4,8)
C.bW2=new A.a0(983124,"MaterialIcons",!1)
C.bWr=new A.a0(983325,"MaterialIcons",!1)
C.asJ=new A.a0(983372,"MaterialIcons",!1)
C.bY3=new A.ae(C.asJ,18,C.cH,null,null,null)
C.bYv=new A.ae(B.vy,16,null,null,null,null)
C.c0z=new A.ae(B.no,7,C.cH,null,null,null)
C.c1f=new A.ae(B.ea,18,C.cH,null,null,null)
C.c1v=new A.ae(B.ru,20,B.c,null,null,null)
C.c3J=new A.ae(B.vy,18,null,null,null,null)
C.c5M=new A.ae(B.IL,18,null,null,null,null)
C.c5Q=new A.ae(B.xu,null,C.d5,null,null,null)
C.c5Z=new A.ae(B.kq,18,C.cH,null,null,null)
C.c7c=new A.ae(B.Ip,18,C.d5,null,null,null)
C.cOA=w([B.dD,B.fy,B.i2],x.O)
C.avp=new A.a6(B.aw,B.aD,B.w,C.cOA,null,null)
C.aDd=w([C.d5,B.as,C.cH],x.O)
C.cbc=new A.a6(B.a5,B.a9,B.w,C.aDd,null,null)
C.cbM=new A.a6(B.a5,B.a9,B.w,C.aDd,B.mb,null)
C.drF=w([B.dD,B.i2,B.bE],x.O)
C.ceR=new A.a6(B.aw,B.aD,B.w,C.drF,null,null)
C.coJ=w([12,24,48],x.X)
C.d6X=w(["All","Forex","Stocks","Crypto"],x.s)
C.ddh=w(["Which market looks strongest right now?","Is Bitcoin going up or down right now?","Why has the agent not bought yet?","Explain RSI like I am new","How do I know when to sell?","What does bullish and bearish mean?"],x.s)
C.fcn=new A.y("The idea","Trading means buying something and selling it later. You make money when you sell for more than you paid, and you lose money when you sell for less. That is all a trade is.")
C.f3X=new A.y("Why prices move","Every price is set by buyers and sellers. When more people want to buy than sell, the price goes up. When more want to sell, it goes down. A chart is simply a picture of that tug of war over time.")
C.f4U=new A.y("Nobody knows the future","No person, app or AI can know for sure where a price goes next. Good traders do not guess. They follow clear rules, keep losses small, and let the winners pay for the losers.")
C.f3h=new A.y("Why practise first","This agent uses Alpaca paper money: real prices, fake dollars. You can learn every step, make mistakes and see real results without risking a cent. Professionals practise this way too.")
C.d9o=w([C.fcn,C.f3X,C.f4U,C.f3h],x.L)
C.dbv=w(["When you buy","When you sell for more than you paid","When the market opens"],x.s)
C.b4_=new D.cH("When do you make money on a trade?",C.dbv,1,"Profit only exists after you sell higher than you bought.")
C.d5M=w(["More buyers than sellers","The app","The time of day"],x.s)
C.b3V=new D.cH("What makes a price go up?",C.d5M,0,"More people wanting to buy pushes the price up.")
C.dzO=w([C.b4_,C.b3V],x.r)
C.hSq=new D.uz("basics","What trading really is","Buyers, sellers and why prices move",4,P.lf,B.as,"basics",C.d9o,C.dzO)
C.bX4=new A.a0(983780,"MaterialIcons",!1)
C.eVC=new A.y("One candle = one time slice","On this chart every candle is 5 minutes. It shows four prices: where it started (open), where it ended (close), the highest point (high) and the lowest point (low).")
C.f2h=new A.y("The colours","Green candle: the price closed HIGHER than it opened, buyers won those 5 minutes. Yellow candle: it closed LOWER, sellers won. Many apps use red instead of yellow, it means the same thing.")
C.fdA=new A.y("Body and wicks","The thick part (the body) runs from open to close. The thin lines (the wicks) show how far the price went up or down before coming back. A long wick on top means buyers pushed up but sellers pushed it back down.")
C.faC=new A.y("Reading a row of candles","Several green candles in a row, each closing higher, show buyers in control. Many yellow ones closing lower show sellers in control. Candles that go up and down with no direction mean the market is undecided.")
C.cgj=w([C.eVC,C.f2h,C.fdA,C.faC],x.L)
C.dbC=w(["It closed higher than it opened","It is a good time to buy","The market is closed"],x.s)
C.b3Y=new D.cH("A green candle means...",C.dbC,0,"Colour only tells you if it closed above or below where it opened.")
C.cHf=w(["1 day","5 minutes","1 hour"],x.s)
C.b3N=new D.cH("On this chart one candle covers...",C.cHf,1,"The agent works with 5-minute candles.")
C.di0=w([C.b3Y,C.b3N],x.r)
C.hSs=new D.uz("candles","Reading candles","Open, close, high and low in one shape",5,C.bX4,C.cH,"candles",C.cgj,C.di0)
C.f6_=new A.y("Bullish","An uptrend. The price makes higher highs and higher lows, like climbing stairs. Buyers are in control. Traders call this bullish (a bull attacks upward with its horns).")
C.fev=new A.y("Bearish","A downtrend. Lower highs and lower lows, like walking down stairs. Sellers are in control. This is bearish (a bear swipes downward).")
C.eWT=new A.y("Sideways","The price bounces between a ceiling and a floor with no clear direction. Most trading signals fail here, so the best move is often to wait.")
C.f8L=new A.y("The golden rule","Trade WITH the trend, not against it. Buying in a downtrend because it looks cheap is how most beginners lose. The agent only buys when the trend turns up.")
C.d9E=w([C.f6_,C.fev,C.eWT,C.f8L],x.L)
C.d7H=w(["Bearish","Bullish","Sideways"],x.s)
C.b3Z=new D.cH("Higher highs and higher lows means...",C.d7H,1,"Climbing stairs = uptrend = bullish.")
C.dbN=w(["Work best","Often fail","Are always right"],x.s)
C.b3S=new D.cH("In a sideways market, signals...",C.dbN,1,"With no direction, signals flip back and forth.")
C.dAk=w([C.b3Z,C.b3S],x.r)
C.hSl=new D.uz("trend","Trends: up, down, sideways","Bullish, bearish and how to tell",5,B.mG,B.ci,"trend",C.d9E,C.dAk)
C.ffw=new A.y("What an average line is","A moving average is the average closing price of the last few candles, drawn as a smooth line. It hides the small wiggles so you can see the real direction.")
C.eUM=new A.y("Fast line (pink)","The average of the last 9 candles, about 45 minutes. It reacts quickly to new moves.")
C.eWo=new A.y("Slow line (purple)","The average of the last 21 candles, about 1 hour 45 minutes. It moves slowly and shows the bigger direction.")
C.f71=new A.y("How to read them","Fast line ABOVE slow line: recent prices are higher than older ones, the trend is up. Fast line BELOW: the trend is down. When the price itself is above both lines, buyers are strong.")
C.dtA=w([C.ffw,C.eUM,C.eWo,C.f71],x.L)
C.dJf=w(["45 minutes","1 day","1 week"],x.s)
C.b40=new D.cH("The pink fast line averages about...",C.dJf,0,"9 candles x 5 minutes = 45 minutes.")
C.dEM=w(["Trend is up","Trend is down","Market closed"],x.s)
C.b3U=new D.cH("Fast line above slow line means...",C.dEM,0,"Recent prices are higher than older prices.")
C.dpi=w([C.b40,C.b3U],x.r)
C.hSm=new D.uz("ma","Moving averages","The pink fast line and the purple slow line",6,B.xz,B.bE,"ma",C.dtA,C.dpi)
C.fbK=new A.y("Buy signal","When the fast line crosses UP through the slow line, the short-term trend has just turned up. That moment is the buy signal. The agent buys at that point ($100 of the stock or coin), but only if the big trend is rising too. It watches the 10 stocks on weekdays and the 15 liquid crypto majors around the clock, all at the same time, and buys whichever gives a valid entry first.")
C.f45=new A.y("Sell signal","When the fast line crosses back DOWN through the slow line, the up move is over. That is the sell signal, and the agent closes the trade.")
C.f8W=new A.y("Why it must be fresh","If the cross happened an hour ago, the easy part of the move may be gone. Buying late means buying high. So the agent only acts on a cross that happened since its last check, never on an old one.")
C.faV=new A.y("The weakness","In sideways markets the lines cross back and forth and give false signals. That is why every trade also has a stop loss: when a signal is wrong, the loss stays small.")
C.dkG=w([C.fbK,C.f45,C.f8W,C.faV],x.L)
C.dvP=w(["Crosses above the slow line","Crosses below the slow line","Is flat"],x.s)
C.b3T=new D.cH("The buy signal is when the fast line...",C.dvP,0,"Crossing up = trend turning up.")
C.dIa=w(["To avoid buying late","The app is slow","Old crosses are illegal"],x.s)
C.b3L=new D.cH("Why does the agent skip old crosses?",C.dIa,0,"A late entry means buying after most of the move.")
C.d5T=w([C.b3T,C.b3L],x.r)
C.hSj=new D.uz("cross","The crossover signal","Exactly when the agent buys and sells",6,B.arQ,B.b_,"cross",C.dkG,C.d5T)
C.bWA=new A.a0(983477,"MaterialIcons",!1)
C.f8u=new A.y("What RSI measures","RSI (Relative Strength Index) compares the size of recent rises with recent falls and gives a number from 0 to 100. Above 50, rises have been bigger. Below 50, falls have been bigger.")
C.eYB=new A.y("Above 70: stretched","The price rose very fast. It is called overbought. It often pauses or pulls back, so buying right then is risky. It can still keep rising in a strong trend.")
C.f8B=new A.y("Below 30: oversold","The price fell very fast. It often bounces, but in a strong downtrend it can stay low. Oversold is not a reason to buy on its own.")
C.f7K=new A.y("How to use it","Use RSI as a second opinion. A buy signal with RSI between 50 and 70 is healthy. A buy signal with RSI above 75 means the move may already be tired.")
C.d6h=w([C.f8u,C.eYB,C.f8B,C.f7K],x.L)
C.dhS=w(["Oversold","Overbought","Neutral"],x.s)
C.b3K=new D.cH("RSI above 70 is called...",C.dhS,1,"It rose fast and is stretched.")
C.b3X=new D.cH("RSI below 30 always means buy.",M.Tx,1,"Falling markets can stay oversold. It is a hint, not a signal.")
C.dJ7=w([C.b3K,C.b3X],x.r)
C.hSr=new D.uz("rsi","RSI: momentum","Is the move strong, stretched or tired?",5,C.bWA,B.cI,"rsi",C.d6h,C.dJ7)
C.f_1=new A.y("Decide the exit before you enter","Every agent trade has two exits set before it starts, in dollars: take profit when the trade is up $50, stop loss when it is down $50.")
C.f2b=new A.y("Win the same as you risk","The win (+$50) is the same size as the loss (-$50). So every win cancels one loss: winning 5 out of 10 trades breaks even. More than 5 out of 10 is profit, fewer is a loss. The win rate on the agent screen shows which side it is on.")
C.ePI=new A.y("Size matters most","The agent uses $100 per trade even though the paper account has $100,000. Small trades mean no single mistake can hurt much. Pros rarely risk more than 1 to 2 percent of their money on one trade.")
C.f5l=new A.y("Never move the stop","The biggest beginner mistake is hoping a losing trade comes back and moving the stop lower. Small losses are the cost of doing business. Big losses end accounts.")
C.dDb=w([C.f_1,C.f2b,C.ePI,C.f5l],x.L)
C.cti=w(["5 in 10 trades","9 in 10 trades","Every trade"],x.s)
C.b3Q=new D.cH("With +$50 wins and -$50 losses, to break even you must win about...",C.cti,0,"Each win (+50) cancels one loss (-50).")
C.dgn=w(["Move the stop lower","Let the stop loss work","Buy more"],x.s)
C.b3O=new D.cH("A trade is losing. The best move is...",C.dgn,1,"The stop exists to keep losses small.")
C.dm9=w([C.b3Q,C.b3O],x.r)
C.hSk=new D.uz("risk","Risk: stop loss and take profit","Why small losses beat big wins",7,B.rv,C.d5,"risk",C.dDb,C.dm9)
C.bXa=new A.a0(983848,"MaterialIcons",!1)
C.eZc=new A.y("Bad days happen","Some days every signal fails. The danger is trying to win it back by trading more and bigger. That is called revenge trading and it is how small losses become big ones.")
C.f4q=new A.y("Daily stop: $50","If the day loses $50, the agent makes no more buys until tomorrow. It walks away and lets the market calm down.")
C.fbB=new A.y("Total brake: $100","If total losses reach $100, the agent pauses completely until you review what happened and turn it back on. Reviewing is the most important part of learning.")
C.eXA=new A.y("Your own rules","When you trade yourself, set the same kind of limits before the day starts, and keep them even when it hurts.")
C.dij=w([C.eZc,C.f4q,C.fbB,C.eXA],x.L)
C.dl5=w(["Doubles the next trade","Stops buying for the day","Sells everything forever"],x.s)
C.b3P=new D.cH("After losing $50 in a day, the agent...",C.dl5,1,"The daily stop prevents revenge trading.")
C.di1=w([C.b3P],x.r)
C.hSn=new D.uz("brakes","Daily stop and total brake","Protecting your account from bad days",4,C.bXa,E.i1,"brakes",C.dij,C.di1)
C.ajs=new A.u(1,0.3843137254901961,0.49411764705882355,0.9176470588235294,B.q)
C.f39=new A.y("Stocks and funds","SPY, QQQ, Apple, Microsoft, Nvidia, Tesla and Amazon trade on US market days from 9:30 AM to 4:00 PM Eastern Time. Closed at night, on weekends and on holidays.")
C.f42=new A.y("Overnight gaps","News can come out while the stock market is closed, so the next morning it can open far higher or lower. That is why the agent sells stocks by 3:55 PM and never holds them overnight.")
C.f16=new A.y("Crypto","Bitcoin, Ethereum and Solana trade all day, every day, including weekends. More hours means more chances, but crypto also moves faster and harder, so stops get hit more often.")
C.fan=new A.y("Funds vs single companies","SPY holds the 500 biggest US companies and QQQ holds 100 big tech companies, so they move more calmly. One company like Tesla can jump a lot on its own news.")
C.cU0=w([C.f39,C.f42,C.f16,C.fan],x.L)
C.d9D=w(["Only weekdays","All day, every day","Only at night"],x.s)
C.b3W=new D.cH("When can Bitcoin be traded?",C.d9D,1,"Crypto never closes.")
C.d6w=w(["To avoid overnight gaps","Stocks expire","It is the law"],x.s)
C.b3M=new D.cH("Why sell stocks before the close?",C.d6w,0,"Overnight news can make the price jump at the open.")
C.dqk=w([C.b3W,C.b3M],x.r)
C.hSp=new D.uz("hours","Stocks vs crypto","Market hours, weekends and jumpiness",5,B.k0,C.ajs,"hours",C.cU0,C.dqk)
C.f8X=new A.y("Judge many trades, not one","One trade tells you nothing. Luck decides single trades. After 20 to 50 trades you start to see if a method really works. That is why the plan is 2 to 4 weeks of paper trading.")
C.eYm=new A.y("Keep a journal","For each trade write: why you bought, where your stop and target were, what happened, and what you learned. The Trades list on the main screen is the agent's journal.")
C.eUF=new A.y("Follow the rules exactly","The point of the agent is to follow rules perfectly, with no fear and no greed. Check that it did. If it ever breaks a rule, that is a bug to fix before real money.")
C.f17=new A.y("Before real money","Real money comes only after a long paper test with a positive result, a full review, and money you can truly afford to lose. Never borrow to trade.")
C.dyF=w([C.f8X,C.eYm,C.eUF,C.f17],x.L)
C.dFH=w(["1","3","20 or more"],x.s)
C.b3J=new D.cH("How many trades before judging a method?",C.dFH,2,"Small samples are mostly luck.")
C.dIF=w(["Borrowed","Money you can afford to lose","Rent money"],x.s)
C.b3R=new D.cH("Money for trading should be...",C.dIF,1,"Never trade money you need.")
C.dJ2=w([C.b3J,C.b3R],x.r)
C.hSo=new D.uz("practice","Practising like a pro","Journals, patience and judging results",5,B.m6,B.bk,"practice",C.dyF,C.dJ2)
C.Ep=w([C.hSq,C.hSs,C.hSl,C.hSm,C.hSj,C.hSr,C.hSk,C.hSn,C.hSp,C.hSo],A.as("N<uz>"))
C.duy=w([],x.n)
C.eyC={basics:0,candles:1,trend:2,ma:3,cross:4,rsi:5,risk:6,brakes:7,hours:8,practice:9}
C.dcp=w(["A $4 profit","A $4 loss","Nothing"],x.s)
C.hWp=new D.cH("You buy at $100 and sell at $96. What happened?",C.dcp,1,"Selling lower than you bought is a loss.")
C.dvN=w(["The future price","How the price moved over time","Who is buying"],x.s)
C.hWn=new D.cH("What does a price chart show?",C.dvN,1,"A chart is a record of past prices.")
C.dHm=w(["Yes, experts can","Yes, an AI can","No, nobody can"],x.s)
C.hWv=new D.cH("Can anyone know for sure where a price goes next?",C.dHm,2,"Markets are uncertain; rules and stops manage that.")
C.dG5=w(["Trading with real prices and practice money","Trading newspapers","Trading on paper forms"],x.s)
C.hYc=new D.cH("What is paper trading?",C.dG5,0,"Real prices, fake dollars: practice without risk.")
C.du6=w(["It is faster","To learn without risking real money","Practice money earns more"],x.s)
C.hY7=new D.cH("Why practise first?",C.du6,1,"Mistakes cost nothing while you learn.")
C.ctc=w(["Rise","Fall","Stay frozen"],x.s)
C.hWw=new D.cH("More people want to sell than buy. The price will most likely...",C.ctc,1,"Selling pressure pushes prices down.")
C.dhF=w(["Clear rules and small losses","Lucky guesses","Tips from friends"],x.s)
C.hY_=new D.cH("Good traders mostly rely on...",C.dhF,0,"Rules and risk control beat guessing.")
C.cfl=w(["$45","$55","$60"],x.s)
C.hXr=new D.cH("You buy $50 of something and it rises 10%. It is now worth...",C.cfl,1,"10% of $50 is $5, so $55.")
C.cYJ=w(["Buy","Sell","Look at the chart"],x.s)
C.hWN=new D.cH("A trade is only finished when you...",C.cYJ,1,"Until you sell, a gain or loss is not locked in.")
C.dGA=w(["Good traders never lose","Every trader has losing trades","Losses only happen to beginners"],x.s)
C.hWI=new D.cH("Which is true about losses?",C.dGA,1,"Losing trades are normal; keeping them small is the skill.")
C.cRB=w(["Real dollars are spent","No real money is at risk","It trades in secret"],x.s)
C.hXz=new D.cH("The agent uses Alpaca paper money. That means...",C.cRB,1,"Paper accounts use fake dollars.")
C.drn=w(["The government","Buyers and sellers agreeing","The app makers"],x.s)
C.hWm=new D.cH("A price is set by...",C.drn,1,"Each trade is a buyer and seller agreeing on a price.")
C.dCg=w([C.b4_,C.b3V,C.hWp,C.hWn,C.hWv,C.hYc,C.hY7,C.hWw,C.hY_,C.hXr,C.hWN,C.hWI,C.hXz,C.hWm],x.r)
C.dbg=w(["It closed lower than it opened","It closed higher","Nothing traded"],x.s)
C.hXK=new D.cH("A yellow (or red) candle means...",C.dbg,0,"Sellers won that time slice.")
C.dfC=w(["Wick","Body","Tail light"],x.s)
C.hWx=new D.cH("The thick part of a candle is called the...",C.dfC,1,"The body runs from open to close.")
C.dol=w(["Wicks","Bodies","Averages"],x.s)
C.hXf=new D.cH("The thin lines above and below are the...",C.dol,0,"Wicks show the high and the low.")
C.df2=w(["Open","Close","Highest price"],x.s)
C.hXB=new D.cH("The top of the upper wick shows the...",C.df2,2,"The tip of the upper wick is the high.")
C.dJu=w(["Lowest price","Open","Average"],x.s)
C.hXT=new D.cH("The bottom of the lower wick shows the...",C.dJu,0,"The tip of the lower wick is the low.")
C.dhO=w(["One","Two","Four"],x.s)
C.hXs=new D.cH("How many prices does one candle show?",C.dhO,2,"Open, high, low and close.")
C.dtk=w(["Buyers pushed up but sellers pushed it back down","The price never moved","The market closed early"],x.s)
C.hXu=new D.cH("A long upper wick means...",C.dtk,0,"The price went high, then fell back before the close.")
C.d61=w(["Sellers in control","Buyers in control","No direction"],x.s)
C.hXb=new D.cH("Many green candles in a row, each closing higher, show...",C.d61,1,"Rising closes mean buyers are winning.")
C.d5I=w(["A strong uptrend","The market is undecided","A crash"],x.s)
C.hXI=new D.cH("Candles going up and down with no direction mean...",C.d5I,1,"Mixed candles show indecision.")
C.dbE=w(["Green","Yellow","Grey"],x.s)
C.hXq=new D.cH("A candle opened at 10 and closed at 12. Its colour here is...",C.dbE,0,"It closed above the open.")
C.dK6=w(["5 candles","12 candles","60 candles"],x.s)
C.hWz=new D.cH("In 1 hour of 5-minute candles there are...",C.dK6,1,"60 minutes divided by 5 is 12.")
C.ds2=w(["The first price in that time","The last price in that time","The highest price"],x.s)
C.hY1=new D.cH('The "close" of a candle is...',C.ds2,1,"Close is where the price ended.")
C.dzd=w([C.b3Y,C.b3N,C.hXK,C.hWx,C.hXf,C.hXB,C.hXT,C.hXs,C.hXu,C.hXb,C.hXI,C.hXq,C.hWz,C.hY1],x.r)
C.d7X=w(["Bullish","Bearish","Sideways"],x.s)
C.hXD=new D.cH("Lower highs and lower lows means...",C.d7X,1,"Walking down stairs = downtrend = bearish.")
C.dnM=w(["Rise","Fall","Stay the same"],x.s)
C.hY6=new D.cH('"Bullish" means you expect prices to...',C.dnM,0,"A bull attacks upward.")
C.dka=w(["Rise","Fall","Double"],x.s)
C.hY4=new D.cH('"Bearish" means you expect prices to...',C.dka,1,"A bear swipes downward.")
C.dnW=w(["Trade against the trend","Trade with the trend","Ignore the trend"],x.s)
C.hXj=new D.cH("The golden rule of trends is...",C.dnW,1,"Going with the trend wins more often.")
C.d9r=w(["A safe plan","A common beginner mistake","What the agent does"],x.s)
C.hXN=new D.cH("Buying in a downtrend because it looks cheap is...",C.d9r,1,"Cheap can get cheaper.")
C.dkE=w(["Sideways","Bullish","Bearish"],x.s)
C.hWR=new D.cH("A price bouncing between a ceiling and a floor is...",C.dkE,0,"No higher highs or lower lows: sideways.")
C.dCt=w(["Trade a lot","Wait","Borrow money"],x.s)
C.hX3=new D.cH("In a sideways market the best move is often to...",C.dCt,1,"Patience avoids false signals.")
C.dmy=w(["Up","Down","Flat"],x.s)
C.hX6=new D.cH("When sellers are in control, the trend is...",C.dmy,1,"Sellers push prices down.")
C.dmv=w(["Stairs going up","Stairs going down","A flat road"],x.s)
C.hWo=new D.cH("Which picture fits an uptrend?",C.dmv,0,"Each step a bit higher.")
C.dCe=w(["Turns down","Turns up","Is sideways"],x.s)
C.hXo=new D.cH("The agent only buys when the trend...",C.dCe,1,"It buys the start of up moves.")
C.dAD=w(["Getting lower","Getting higher","Gone"],x.s)
C.hWD=new D.cH("A trend changes from bearish to bullish. Lows are now...",C.dAD,1,"Higher lows are the first sign of an uptrend.")
C.drM=w(["Strong uptrend","Strong downtrend","Sideways"],x.s)
C.hXx=new D.cH("Most trading signals fail in which market?",C.drM,2,"Without direction, signals flip constantly.")
C.d9p=w([C.b3Z,C.b3S,C.hXD,C.hY6,C.hY4,C.hXj,C.hXN,C.hWR,C.hX3,C.hX6,C.hWo,C.hXo,C.hWD,C.hXx],x.r)
C.dhE=w(["The average closing price of recent candles","The highest price ever","A news feed"],x.s)
C.hXU=new D.cH("A moving average is...",C.dhE,0,"It smooths prices into a line.")
C.dHZ=w(["To hide small wiggles and show direction","To predict news","To make charts colourful"],x.s)
C.hXW=new D.cH("Why use a moving average?",C.dHZ,0,"It filters noise.")
C.de7=w(["9","21","100"],x.s)
C.hXg=new D.cH("The purple slow line averages how many candles?",C.de7,1,"21 candles, about 1 hour 45 minutes.")
C.ds7=w(["The fast (pink) line","The slow (purple) line","Both the same"],x.s)
C.hXi=new D.cH("Which line reacts faster to new moves?",C.ds7,0,"Fewer candles means quicker reaction.")
C.dIf=w(["Trend is up","Trend is down","Buy now"],x.s)
C.hX4=new D.cH("Fast line below slow line means...",C.dIf,1,"Recent prices are lower than older ones.")
C.da0=w(["Buyers are strong","Sellers are strong","Nothing"],x.s)
C.hWr=new D.cH("The price is above both lines. That shows...",C.da0,0,"Price above its averages = strength.")
C.d5R=w(["The bigger direction","Only the last candle","Tomorrow price"],x.s)
C.hXC=new D.cH("The slow line shows...",C.d5R,0,"It changes slowly and shows the wider trend.")
C.d2a=w(["15 minutes","1 hour 45 minutes","1 week"],x.s)
C.hWH=new D.cH("The slow line covers about...",C.d2a,1,"21 x 5 minutes = 105 minutes.")
C.coT=w(["Past prices","Future prices","Opinions"],x.s)
C.hXJ=new D.cH("Moving averages are based on...",C.coT,0,"They average prices that already happened.")
C.d6f=w(["Lag behind the price","Lead the price","Never move"],x.s)
C.hXX=new D.cH("Because they use past prices, moving averages...",C.d6f,0,"Averages are always a little late.")
C.dr0=w(["A bullish picture","A bearish picture","A closed market"],x.s)
C.hX5=new D.cH("Both lines pointing up and the price above them is...",C.dr0,0,"Everything points up.")
C.dgm=w(["Trending strongly","Sideways","Crashing"],x.s)
C.hY5=new D.cH("When the two lines are tangled together, the market is often...",C.dgm,1,"Tangled lines mean no clear direction.")
C.dC_=w([C.b40,C.b3U,C.hXU,C.hXW,C.hXg,C.hXi,C.hX4,C.hWr,C.hXC,C.hWH,C.hXJ,C.hXX,C.hX5,C.hY5],x.r)
C.dhC=w(["Crosses below the slow line","Crosses above the slow line","Touches the price"],x.s)
C.hWl=new D.cH("The sell signal is when the fast line...",C.dhC,0,"Crossing down = the up move is over.")
C.dHj=w(["About $100","$5,000","All the money"],x.s)
C.hYd=new D.cH("How much does the agent put into one trade?",C.dHj,0,"Every trade is $100 of the stock (weekdays) or coin (weekends) itself.")
C.dBT=w(["A fresh signal","An old signal","Not a signal at all ever"],x.s)
C.hXO=new D.cH("A cross that happened an hour ago is...",C.dBT,1,"Fresh means since the last check.")
C.ctm=w(["Sideways markets","Strong trends","Closed markets"],x.s)
C.hXS=new D.cH("Crossovers give many false signals in...",C.ctm,0,"Lines cross back and forth with no direction.")
C.dq9=w(["The stop loss","Buying more","Ignoring it"],x.s)
C.hWG=new D.cH("What protects you when a signal is wrong?",C.dq9,0,"The stop keeps the loss small.")
C.djW=w(["Just changed direction","Ended forever","Doubled"],x.s)
C.hY2=new D.cH("The crossover tells you the short-term trend has...",C.djW,0,"A cross marks a turn.")
C.d39=w(["1 second","5 minutes","1 day"],x.s)
C.hXV=new D.cH("The agent checks every market on the list every...",C.d39,1,"The automatic check runs every 5 minutes and looks at all of the day markets at once.")
C.d7k=w(["Buying higher, with less room to rise","A guaranteed win","A cheaper price"],x.s)
C.hWA=new D.cH("Buying late in a move usually means...",C.d7k,0,"Most of the move is already gone.")
C.dvk=w(["Trust it more","Trust it less","Bet bigger"],x.s)
C.hXM=new D.cH("If a signal fails often on one market, you should...",C.dvk,1,"Check how often it worked before trusting it.")
C.d7d=w(["Buys more","Sells","Waits a week"],x.s)
C.hXt=new D.cH("When the agent holds a trade and the fast line crosses down, it...",C.d7d,1,"The sell signal closes the trade.")
C.cOv=w(["Yes","No","Only on Fridays"],x.s)
C.hX8=new D.cH("Does a buy signal guarantee the price will rise?",C.cOv,1,"Signals improve the odds; they never guarantee.")
C.daT=w(["Holds no other position","Already holds three","Has lost $100"],x.s)
C.hYe=new D.cH("The agent buys on a signal only if it...",C.daT,0,"One position at a time.")
C.dI5=w([C.b3T,C.b3L,C.hWl,C.hYd,C.hXO,C.hXS,C.hWG,C.hY2,C.hXV,C.hWA,C.hXM,C.hXt,C.hX8,C.hYe],x.r)
C.dmj=w(["0 to 100","1 to 10","-50 to 50"],x.s)
C.hXQ=new D.cH("RSI is a number from...",C.dmj,0,"It always sits between 0 and 100.")
C.dxq=w(["Rises were bigger than falls","Falls were bigger than rises","Nothing moved"],x.s)
C.hX1=new D.cH("RSI above 50 means recent...",C.dxq,0,"Above 50 = buyers stronger lately.")
C.dhR=w(["Overbought","Oversold","Balanced"],x.s)
C.hXa=new D.cH("RSI below 30 is called...",C.dhR,1,"It fell fast and is stretched downward.")
C.duZ=w(["Momentum: strength of recent moves","The company profit","Trading volume"],x.s)
C.hXl=new D.cH("RSI measures...",C.duZ,0,"It compares gains with losses.")
C.d70=w(["Healthy","Very stretched","Impossible"],x.s)
C.hWP=new D.cH("A buy signal with RSI 60 is...",C.d70,0,"Between 50 and 70 is healthy strength.")
C.deL=w(["Just starting","Tired and stretched","Guaranteed"],x.s)
C.hWs=new D.cH("A buy signal with RSI 80 means the move may be...",C.deL,1,"Very high RSI often comes before a pause.")
C.dlX=w(["As a second opinion","As the only reason to trade","Never"],x.s)
C.hWV=new D.cH("Best way to use RSI?",C.dlX,0,"Combine it with the trend signal.")
C.dwD=w(["For a while","Never","Only one candle"],x.s)
C.hXk=new D.cH("In a strong uptrend, RSI can stay above 70...",C.dwD,0,"Strong trends can stay overbought.")
C.drb=w(["Balanced buyers and sellers","Market closed","Crash coming"],x.s)
C.hXm=new D.cH("RSI of 50 means...",C.drb,0,"50 is the middle.")
C.d9Z=w(["Rose very fast","Fell very fast","Did not move"],x.s)
C.hXY=new D.cH("Overbought means prices...",C.d9Z,0,"Overbought = rose fast.")
C.cQH=w(["Stay oversold and keep falling","Only go up","Freeze the market"],x.s)
C.hWX=new D.cH("Oversold in a strong downtrend can...",C.cQH,0,"Oversold is not a reason to buy on its own.")
C.cMM=w(["Sellers a little stronger","Extreme buying","Extreme selling"],x.s)
C.hXc=new D.cH("RSI 45 suggests...",C.cMM,0,"Just below 50: sellers slightly ahead.")
C.dlV=w([C.b3K,C.b3X,C.hXQ,C.hX1,C.hXa,C.hXl,C.hWP,C.hWs,C.hWV,C.hXk,C.hXm,C.hXY,C.hWX,C.hXc],x.r)
C.dJk=w(["When the trade is up $50","When the trade is up $5","Never"],x.s)
C.hXZ=new D.cH("The agent take profit is...",C.dJk,0,"It sells when the trade is up $50.")
C.dBw=w(["When the trade is down $50","When the trade is down $500","It has none"],x.s)
C.hXE=new D.cH("The agent stop loss is...",C.dBw,0,"It sells when the trade is down $50.")
C.dpR=w(["A planned exit that limits a loss","A way to stop the app","A bonus"],x.s)
C.hWF=new D.cH("A stop loss is...",C.dpR,0,"It sells automatically when the loss reaches a set size.")
C.dfh=w(["Before entering the trade","After it goes wrong","Never"],x.s)
C.hWO=new D.cH("When should you decide your exits?",C.dfh,0,"Plan exits first, while calm.")
C.dlI=w(["So no single mistake hurts much","It is the maximum allowed","To lose faster"],x.s)
C.hWW=new D.cH("Why does the agent use only about $100 per trade?",C.dlI,0,"Small size protects the account.")
C.dIZ=w(["1 to 2 percent","50 percent","100 percent"],x.s)
C.hXy=new D.cH("Pros rarely risk more than about ... of their money on one trade.",C.dIZ,0,"Small risk per trade keeps them in the game.")
C.djw=w(["$0","+$100","-$100"],x.s)
C.hXL=new D.cH("Win $50 twice and lose $50 twice. Your total is...",C.djw,0,"50 + 50 - 50 - 50 = 0.")
C.dtU=w(["Profitable","Break even","A loss"],x.s)
C.hXF=new D.cH("Winning half the time with 2 to 1 reward to risk is...",C.dtU,0,"Each win is twice each loss.")
C.dfp=w(["Turns small losses into big ones","Guarantees a win","Has no effect"],x.s)
C.hX0=new D.cH('Moving your stop lower to "give it room" usually...',C.dfp,0,"Hope is not a plan.")
C.d86=w(["1 to 1","1 to 2","10 to 1"],x.s)
C.hX7=new D.cH("Reward to risk of the agent is...",C.d86,0,"$50 target vs $50 stop: the same size.")
C.csP=w(["Can end an account","Are rare","Do not matter"],x.s)
C.hYa=new D.cH("Big losses are dangerous because they...",C.csP,0,"A 50% loss needs a 100% gain to recover.")
C.cW7=w(["Selling when the planned gain is reached","Buying more","Holding forever"],x.s)
C.hWU=new D.cH("Take profit means...",C.cW7,0,"It locks in the win.")
C.ddD=w([C.b3Q,C.b3O,C.hXZ,C.hXE,C.hWF,C.hWO,C.hWW,C.hXy,C.hXL,C.hXF,C.hX0,C.hX7,C.hYa,C.hWU],x.r)
C.dxw=w(["Trading more to win losses back","Taking a break","Following rules"],x.s)
C.hXh=new D.cH("Revenge trading means...",C.dxw,0,"It usually makes losses bigger.")
C.d7M=w(["$100 total losses","$25 total losses","Never"],x.s)
C.hWQ=new D.cH("The total brake pauses the agent at...",C.d7M,0,"$100 total demo losses.")
C.d7l=w(["An admin, after a review","It turns itself on","Nobody ever"],x.s)
C.hXd=new D.cH("Who turns the agent back on after the $100 brake?",C.d7l,0,"A human review comes first.")
C.cfm=w(["$50","$1","$500"],x.s)
C.hWy=new D.cH("The daily stop is...",C.cfm,0,"If the day loses $50, no more buys.")
C.d2g=w(["Stop and reset","Trade bigger","Ignore your limits"],x.s)
C.hXR=new D.cH("Bad days happen. The best response is...",C.d2g,0,"Walking away protects your money.")
C.doy=w(["Before the day starts","After you lose","Only on weekends"],x.s)
C.hWt=new D.cH("Limits should be set...",C.doy,0,"Decide limits while calm.")
C.dDR=w(["Reviewing what happened","Forgetting it","Blaming the market"],x.s)
C.hX2=new D.cH("The most important part of learning after a bad run is...",C.dDR,0,"Reviews turn losses into lessons.")
C.cR7=w(["Yes, exits still work","No, it freezes","It buys more instead"],x.s)
C.hXv=new D.cH("After the daily stop, can the agent still sell an open trade?",C.cR7,0,"The stop blocks new buys, not exits.")
C.dIv=w(["Protect the account from bad days","Make more trades","Win every day"],x.s)
C.hXp=new D.cH("Brakes are there to...",C.dIv,0,"They cap the damage.")
C.d9s=w(["Stop trading and rethink","Raise the limits","Borrow money"],x.s)
C.hWZ=new D.cH("If you keep breaking your own limits, you should...",C.d9s,0,"Rules only work when kept.")
C.dAK=w(["The next day","Never","Every minute"],x.s)
C.hXw=new D.cH("The daily stop resets...",C.dAK,0,"A new Eastern Time day starts fresh.")
C.dny=w(["Can lose everything on a bad day","Always wins","Pays no fees"],x.s)
C.hWB=new D.cH("A trader with no loss limits...",C.dny,0,"Limits are the safety net.")
C.dHa=w(["Pause","Trade faster","Bet bigger"],x.s)
C.hWq=new D.cH("Feeling angry after a loss is a sign to...",C.dHa,0,"Emotions lead to bad trades.")
C.d9M=w([C.b3P,C.hXh,C.hWQ,C.hXd,C.hWy,C.hXR,C.hWt,C.hX2,C.hXv,C.hXp,C.hWZ,C.hXw,C.hWB,C.hWq],x.r)
C.dbF=w(["9:30 AM to 4:00 PM Eastern","24 hours","8 PM to midnight"],x.s)
C.hWJ=new D.cH("US stock market hours are...",C.dbF,0,"On market days only.")
C.hWC=new D.cH("Is the US stock market open on Saturday?",S.a7t,1,"Weekends are closed.")
C.dGK=w(["A jump between the close and the next open","A break in the chart software","A holiday"],x.s)
C.hXn=new D.cH("An overnight gap is...",C.dGK,0,"News while closed moves the next open.")
C.d2f=w(["Faster and harder","Slower","Exactly the same"],x.s)
C.hX_=new D.cH("Crypto compared with SPY usually moves...",C.d2f,0,"Crypto is more jumpy.")
C.dvK=w(["The 500 biggest US companies","One company","Bitcoin"],x.s)
C.hY8=new D.cH("SPY holds...",C.dvK,0,"It is a fund of 500 companies.")
C.dK4=w(["They spread over many companies","They are closed","They are crypto"],x.s)
C.hWk=new D.cH("Why do funds like SPY move more calmly?",C.dK4,0,"One bad company matters less.")
C.dBW=w(["3:55 PM Eastern","Midnight","Noon"],x.s)
C.hY0=new D.cH("The agent sells stocks by...",C.dBW,0,"Before the 4:00 PM close.")
C.d9t=w(["Sunday 5 PM to Friday 5 PM Eastern","Only 9:30 to 4","Only weekends"],x.s)
C.hWK=new D.cH("Forex (currency pairs) trades...",C.d9t,0,"Real forex is closed on weekends.")
C.deM=w(["The broker itself","The real world market","The government"],x.s)
C.hWT=new D.cH("OTC prices at a broker on weekends come from...",C.deM,0,"They are made by the broker and can differ.")
C.dxM=w(["Do not trade","Trade double","Trade at night"],x.s)
C.hXe=new D.cH("On a US market holiday, stocks...",C.dxM,0,"Holidays are closed days.")
C.cfF=w(["More often","Never","Less often"],x.s)
C.hY3=new D.cH("Because crypto moves fast, stop losses are hit...",C.cfF,0,"Bigger swings reach stops sooner.")
C.dBV=w(["Its own news","Weekend rules","The colour of candles"],x.s)
C.hXP=new D.cH("One company like Tesla can jump a lot because of...",C.dBV,0,"Single stocks react to company news.")
C.drZ=w([C.b3W,C.b3M,C.hWJ,C.hWC,C.hXn,C.hX_,C.hY8,C.hWk,C.hY0,C.hWK,C.hWT,C.hXe,C.hY3,C.hXP],x.r)
C.dgv=w(["Why you entered, your exits and what happened","Only wins","Nothing"],x.s)
C.hWM=new D.cH("A trading journal records...",C.dgv,0,"It shows what really works.")
C.hX9=new D.cH("One winning trade proves a method works.",M.Tx,1,"One trade can be pure luck.")
C.dkR=w(["2 to 4 weeks","1 hour","1 day"],x.s)
C.hWu=new D.cH("The plan is to paper trade for...",C.dkR,0,"Enough time for many trades.")
C.dpc=w(["A bug to fix before real money","Fine","A bonus"],x.s)
C.hWE=new D.cH("If the agent ever breaks a rule, that is...",C.dpc,0,"Rules must be followed exactly.")
C.dub=w(["A long positive paper test and a full review","One good day","A tip from a friend"],x.s)
C.hY9=new D.cH("Before using real money you need...",C.dub,0,"Evidence first.")
C.dba=w(["Worse than a coin flip","Excellent","Guaranteed"],x.s)
C.hXG=new D.cH("Signals that worked under 50% of the time are...",C.dba,0,"Do not trust them.")
C.d6q=w(["Never a good idea for beginners","Smart","Required"],x.s)
C.hXA=new D.cH("Borrowing money to trade is...",C.d6q,0,"Borrowed losses still have to be paid.")
C.dd8=w(["The agent journal","An advert","A game"],x.s)
C.hXH=new D.cH("The Trades list on the main screen is...",C.dd8,0,"Every buy and sell is recorded.")
C.dqs=w(["No fear and no greed","Lots of emotion","Random choices"],x.s)
C.hWY=new D.cH("The point of an agent is to follow rules with...",C.dqs,0,"Discipline is its strength.")
C.cUF=w(["+$100","-$100","$0"],x.s)
C.hYb=new D.cH("After 10 trades you have 6 wins at +$50 and 4 losses at -$50. Total?",C.cUF,0,"6 x 50 = 300; 4 x 50 = 200; 300 - 200 = +100.")
C.cZ4=w(["Review the trades calmly","Quit forever without looking","Double the size"],x.s)
C.hWL=new D.cH("A losing week means you should...",C.cZ4,0,"Reviews find what to fix.")
C.dFq=w(["Patient and disciplined","Lucky","Fast clickers"],x.s)
C.hWS=new D.cH("The best traders are mostly...",C.dFq,0,"Patience and rules win over time.")
C.dji=w([C.b3J,C.b3R,C.hWM,C.hX9,C.hWu,C.hWE,C.hY9,C.hXG,C.hXA,C.hXH,C.hWY,C.hYb,C.hWL,C.hWS],x.r)
C.dMp=new A.bm(C.eyC,[C.dCg,C.dzd,C.d9p,C.dC_,C.dI5,C.dlV,C.ddD,C.d9M,C.drZ,C.dji],A.as("bm<n,ai<cH>>"))
C.eAE={EUR:0,USD:1,GBP:2,JPY:3,CAD:4,AUD:5,NZD:6,CHF:7,TRY:8,NOK:9,THB:10}
C.feh=new A.y("\u20ac",B.dT)
C.ff9=new A.y("$",B.et)
C.eUN=new A.y("\xa3",B.dl)
C.f3d=new A.y("\xa5",B.bC)
C.f18=new A.y("C$",B.hK)
C.f3E=new A.y("A$",B.cX)
C.eU6=new A.y("NZ",B.ax)
C.f7q=new A.y("Fr",B.eu)
C.fcr=new A.y("TL",B.fM)
C.fbt=new A.y("kr",B.h_)
C.eYE=new A.y("TH",B.wS)
C.a8O=new A.bm(C.eAE,[C.feh,C.ff9,C.eUN,C.f3d,C.f18,C.f3E,C.eU6,C.f7q,C.fcr,C.fbt,C.eYE],A.as("bm<n,+(n,u)>"))
C.c11=new A.ae(B.no,5,B.b_,null,null,null)
C.eHd=new A.C(B.hz,C.c11,null)
C.f94=new A.y(F.qQ,"HOLDING")
C.fbD=new A.y(C.cH,"PASSES")
C.fbM=new A.y(C.d5,"FALLING")
C.fbU=new A.y(C.d5,"BENCHED")
C.fgA=new A.b1(C.cH,B.mG,"up")
C.fgV=new A.b1(1,"Live signals",C.asJ)
C.bWR=new A.a0(983635,"MaterialIcons",!0)
C.fh2=new A.b1(E.i1,C.bWR,"Moving sideways")
C.fha=new A.b1(C.d5,B.a57,"down")
C.fhD=new A.b1(2,"Ask tutor",B.vy)
C.fhV=new A.b1(B.b_,B.mC,"Waiting for data")
C.fiw=new A.b1(C.cH,B.mG,"Trending up")
C.fiD=new A.b1(C.d5,B.a57,"Trending down")
C.fiH=new A.b1(0,"Lessons",B.ob)
C.fjK=new A.b1(B.bQ,B.mC,"waiting")
C.fnA=new A.b7([B.A8,C.cH,"Signal alerts are ON: only STRONG BUY or SELL signals (all 5 confirmations), built for a 15\u201330 minute expiry, while NGMY is open or in the background.",null])
C.fog=new A.b7([B.asw,E.i1,"Signal alerts are unlocked. Allow notifications so the app can tell you when a STRONG signal is given.","Allow"])
C.c_e=new A.ae(B.no,8,C.cH,null,null,null)
C.fPy=new A.F(!0,C.cH,null,null,null,null,11.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.hfc=new A.D("LIVE",null,C.fPy,null,null,null,null,null,null,null,null,null)
C.dwC=w([C.c_e,B.b6,C.hfc],x.p)
C.fsC=new A.c0(B.aK,B.e,B.P,B.l,null,B.p,null,0,C.dwC,null)
C.c_G=new A.ae(B.ru,14,B.c,null,null,null)
C.hm6=new A.D("Learn",null,B.nB,null,null,null,null,null,null,null,null,null)
C.daW=w([C.c_G,B.da,C.hm6],x.p)
C.fsF=new A.c0(B.aK,B.e,B.P,B.l,null,B.p,null,0,C.daW,null)
C.fHr=new A.F(!0,E.i1,null,null,null,null,12,B.O,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.fIl=new A.F(!0,B.c,null,null,null,null,11.5,null,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.fIV=new A.F(!0,B.c,null,null,null,null,34,B.C,null,-0.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.fJt=new A.F(!0,B.c,null,null,null,null,36,B.C,null,-0.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.fJH=new A.F(!0,B.c,null,null,null,null,14,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,G.AE,null,null)
C.fKv=new A.F(!0,B.ab,null,null,null,null,10.5,B.u,null,0.9,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.fLF=new A.F(!0,F.qQ,null,null,null,null,11,B.O,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.fM1=new A.F(!0,B.ab,null,null,null,null,11.5,B.C,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.fO1=new A.F(!0,C.cH,null,null,null,null,11.5,B.O,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.fO9=new A.F(!0,C.d5,null,null,null,null,12,B.C,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.fP3=new A.F(!0,C.cH,null,null,null,null,12,null,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.fPl=new A.F(!0,C.d5,null,null,null,null,11.5,null,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.fPu=new A.F(!0,C.d5,null,null,null,null,11.5,B.O,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.aYL=new A.F(!0,E.i1,null,null,null,null,11.5,B.O,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.fTv=new A.F(!0,C.cH,null,null,null,null,12.5,B.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.fUw=new A.F(!0,B.c,null,null,null,null,22,B.u,null,0.8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.fV9=new A.F(!0,C.d5,null,null,null,null,12,null,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.aZx=new A.F(!0,C.d5,null,null,null,null,11.5,B.C,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.fWt=new A.F(!0,B.ab,null,null,null,null,9.5,B.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.fZE=new A.D("Ask the tutor",null,B.ch,null,null,null,null,null,null,null,null,null)
C.aY3=new A.F(!0,C.d5,null,null,null,null,12.5,B.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.fZO=new A.D("Not quite. Try again.",null,C.aY3,null,null,null,null,null,null,null,null,null)
C.h_M=new A.D("Win rate ($100 trades)",null,B.M_,null,null,null,null,null,null,null,null,null)
C.h_O=new A.D("All 10 lessons done!",null,null,null,null,null,null,null,null,null,null,null)
C.h_V=new A.D("10 short lessons. Each one shows you the idea live on the real markets the agent is watching.",null,T.FN,null,null,null,null,null,null,null,null,null)
C.h1p=new A.D("Wrong. You have one more try.",null,C.aY3,null,null,null,null,null,null,null,null,null)
C.h2V=new A.D("Turn the agent back on?",null,null,null,null,null,null,null,null,null,null,null)
C.fWO=new A.F(!0,B.c,null,null,null,null,9.5,B.u,null,0.8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.h5y=new A.D("ALL SYSTEMS",null,C.fWO,null,null,null,null,null,null,null,null,null)
C.h6z=new A.D("Built for a 15\u201330 minute expiry. Do NOT use this for 1\u20135 minute trades.",null,C.aZx,null,null,null,null,null,null,null,null,null)
C.hcD=new A.D("Signal alerts are now unlocked. When a market says ENTER UP or ENTER DOWN, the app will tell you the market, the direction and the duration. Allow notifications to receive them.",null,null,null,null,null,null,null,null,null,null,null)
C.b_3=new A.D("Balance",null,B.X8,null,null,null,null,null,null,null,null,null)
C.hfI=new A.D("Allow notifications",null,null,null,null,null,null,null,null,null,null,null)
C.fRW=new A.F(!0,B.aR,null,null,null,null,10.5,null,null,null,null,null,1.25,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.hgp=new A.D("5 of 10\n= break even",null,C.fRW,null,B.dX,null,null,null,null,null,null,null)
C.hiC=new A.D("Check now",null,B.ch,null,null,null,null,null,null,null,null,null)
C.hjh=new A.D("Learn to trade",null,B.me,null,null,null,null,null,null,null,null,null)
C.hlL=new A.D("Turn back on",null,null,null,null,null,null,null,null,null,null,null)
C.hma=new A.D("The $100 brake paused the agent. Turning it back on means you have reviewed it. The running demo profit and loss starts again from $0.",null,null,null,null,null,null,null,null,null,null,null)
C.hSx=new D.z4("Nvidia","N",B.NJ)
C.hSz=new D.z4("Ethereum","\u039e",C.ajs)
C.hSC=new D.z4("S&P 500 fund","S&P",B.ci)
C.hSD=new D.z4("Bitcoin","B",F.qQ)
C.hSF=new D.z4("Tesla","T",B.bC)
C.hSG=new D.z4("Microsoft","M",B.bp)
C.hSH=new D.z4("Nasdaq 100 fund","Q",B.cI)
C.boz=new A.u(1,0.6,0.27058823529411763,1,B.q)
C.hSJ=new D.z4("Solana","S",C.boz)
C.hSL=new D.z4("Apple","A",B.cU)
C.hSO=new D.z4("Amazon","a",B.as)})();(function staticFields(){$.DD=A.a([],A.as("N<a_X>"))
$.ahB=!1
$.hnT=""
$.aMv=0
$.fqS=0})()};
(a=>{a["agEWoE7vYZrh/LDNhkTB/gVrA8Q="]=a.current})($__dart_deferred_initializers__);