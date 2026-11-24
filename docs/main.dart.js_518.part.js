((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,Q,R,E,K,H,S,G,T,L,M,N,U,V,F,W,X,Y,O,D={
i7y(){return new D.atV(null)},
eHC(d){var w=J.a2(d),v=D.dI(w.h(d,"reading")).h(0,"action"),u=J.k(v==null?"":v)
if(B.a.Y(u,"ENTER UP"))return 0
if(B.a.Y(u,"ENTER DOWN"))return 1
if(!J.z(w.h(d,"open"),!0))return 4
return 2+(100-D.c1(D.dI(w.h(d,"reading")).h(0,"score")))/1000},
fBQ(d){var w
switch(d){case"SPY":w=C.hOk
break
case"QQQ":w=C.hOp
break
case"AAPL":w=C.hOt
break
case"MSFT":w=C.hOo
break
case"NVDA":w=C.hOf
break
case"TSLA":w=C.hOn
break
case"AMZN":w=C.hOw
break
case"BTC/USD":w=C.hOl
break
case"ETH/USD":w=C.hOh
break
case"SOL/USD":w=C.hOr
break
default:w=new D.z3(d,d.length===0?"?":d[0],B.b_)
break}return w},
bDO(d,e){var w,v,u=null,t=d.split("/")
if(t.length===2&&C.a8t.am(0,t[0])&&C.a8t.am(0,t[1])){t=d.split("/")
w=new D.fwJ(e)
return new A.a4(e*1.25,e,new A.am(B.a0,u,B.ad,B.t,A.a([A.ao(u,w.$1(t[0]),u,u,0,u,0,u),A.ao(0,w.$1(t[1]),u,u,u,0,u,u)],x.p),u),u)}v=D.fBQ(d)
w=v.b
return A.p(B.z,A.c(w,u,u,u,u,u,u,A.l(u,u,B.c,u,u,u,u,u,u,u,u,w.length>1?e*0.32:e*0.52,u,u,B.u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),B.f,u,u,new A.o(v.c,u,u,u,u,u,B.a6),u,e,u,u,u,u,u,e)},
fC7(d){var w,v=x.g.a(d.h(0,"markets"))
if(v==null)v=B.bQ
v=J.cQ(v,x.f)
v=A.cy(v,new D.fC8(),v.$ti.k("M.E"),x.P)
w=A.B(v,A.a3(v).k("M.E"))
return w},
dI(d){var w=x.N,v=x.z
return x.f.b(d)?A.a0(d,w,v):A.S(w,v)},
c1(d){var w
if(typeof d=="number")w=d
else{w=A.cv(A.v(d==null?"":d))
if(w==null)w=0}return w},
bFa(d){var w=x.g.a(D.dI(J.t(d,"chart")).h(0,"points"))
if(w==null)w=B.bQ
w=J.cQ(w,x.f)
w=A.cy(w,new D.fGt(),w.$ti.k("M.E"),x.P)
w=A.B(w,A.a3(w).k("M.E"))
return w},
ej(d,e,f){var w,v=A.o4(B.i.a5(Math.abs(d),2),A.ag("\\B(?=(\\d{3})+(?!\\d))",!0,!1,!1,!1),new D.fDe(),null)
if(d<0)w="-"
else w=f&&d>0?"+":""
return w+(e?"$":"")+v},
LG(d){var w=B.o.F(A.d5(d),12)===0?12:B.o.F(A.d5(d),12),v=B.a.b_(B.o.v(A.fE(d)),2,"0"),u=A.d5(d)<12?"AM":"PM"
return""+w+":"+v+" "+u},
Sr(d){var w=d.aa(),v=new D.fKw(),u=v.$3(A.bD(w),3,2).bL(252e8),t=v.$3(A.bD(w),11,1).bL(216e8),s=w.bL(0-A.du(0,!w.cW(u)&&w.cW(t)?4:5,0,0,0,0).a)
return A.c0(A.bD(s),A.bN(s),A.bW(s),A.d5(s),A.fE(s),0,0,0)},
aQQ(d){var w,v,u,t=d==null,s=A.v(t?"":d).split("-")
if(s.length!==3)return A.v(t?"":d)
w=A.c9(s[1],null)
t=B.iy[B.o.D((w==null?1:w)-1,0,11)]
v=s[2]
u=A.c9(v,null)
return t+" "+A.v(u==null?v:u)+", "+s[0]},
hm_(d){var w,v=A.bg(A.v(d==null?"":d))
if(v==null)return""
w=D.Sr(v)
return B.iy[A.bN(w)-1]+" "+A.bW(w)+" at "+D.LG(w)+" ET"},
hnS(d){var w,v,u=d.split(", ")
if(u.length>=4){w=u[1]
v=u[3]
return w+", "+A.aL(v," ET","")}return d},
hGd(d){return d.length===0?d:d[0].toUpperCase()+B.a.aY(d,1)},
ipf(d){var w=B.a.cd(d,"(")
return B.a.i(w>0?B.a.aw(d,0,w):d)},
hEG(d){var w
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
hIJ(){var w=D.Sr(new A.W(Date.now(),0,!1).aa()),v=B.o.F(A.fE(w),5)
return"at "+D.LG(A.c0(A.bD(w),A.bN(w),A.bW(w),A.d5(w),A.fE(w),0,0,0).bL(A.du(0,0,0,0,5-v,0).a))+" ET"},
igb(d){if(B.a.Y(d,"ENTER UP"))return C.cJ
if(B.a.Y(d,"ENTER DOWN"))return C.d9
if(B.a.q(d,"SKIP")||B.a.q(d,"TOO LATE"))return C.d9
if(B.a.Y(d,"MARKET CLOSED"))return B.bP
return E.i0},
hJJ(a9,b0,b1,b2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=null,a3="mom1h",a4=J.a2(b0),a5=D.dI(a4.h(b0,"reading")),a6=D.dI(a5.h(0,"timing")),a7=D.bFa(b0),a8=a4.h(b0,"asset")
if(a8==null)a8=a4.h(b0,"symbol")
w=J.k(a8==null?"":a8)
a8=a5.h(0,"action")
v=J.k(a8==null?"WAITING FOR DATA":a8)
u=D.igb(v)
t=B.i.D(D.c1(a5.h(0,"score")),0,100)
a8=x.g.a(a5.h(0,"notes"))
if(a8==null)a8=B.bQ
a8=J.b8(a8,new D.fHk(),x.N)
s=A.B(a8,a8.$ti.k("aj.E"))
r=D.c1(a4.h(b0,"changePct"))
a8=a9.a
q=a8?B.c.j(0.92):C.im
p=A.n(20)
o=B.a.Y(v,"ENTER")
if(o)n=u.j(0.6)
else n=a8?B.c:C.n6
n=A.K(n,B.r,o?1.6:1)
m=x.V
l=A.a([new A.aa(0,B.H,a9.gI3(),B.hR,14)],m)
k=D.bDO(w,28)
o=A.c(w,a2,a2,a2,a2,a2,a2,A.l(a2,a2,a8?C.cl:B.c,a2,a2,a2,a2,a2,a2,a2,a2,14,a2,a2,B.E,a2,a2,!0,a2,a2,a2,a2,a2,a2,a2,a2),a2,a2,a2)
j=a4.h(b0,"name")
j=J.k(j==null?"":j)
i=x.p
j=A.a([k,B.ar,A.E(A.x(A.a([o,A.c(j,a2,a2,a2,a2,a2,a2,A.l(a2,a2,a8?C.bX:C.bY,a2,a2,a2,a2,a2,a2,a2,a2,11,a2,a2,a2,a2,a2,!0,a2,a2,a2,a2,a2,a2,a2,a2),a2,a2,a2)],i),B.B,a2,B.e,B.h,0,B.p),1)],i)
if(a7.length>2)B.d.u(j,A.a([new A.a4(58,26,A.b4(a2,a2,a2,new D.bwq(a7,r>=0?C.cJ:C.d9,a2),B.aA),a2),B.ar],i))
o=D.hJD(b0)
o=A.c(o,a2,a2,a2,a2,a2,a2,A.l(a2,a2,a8?C.cl:B.c,a2,a2,a2,a2,a2,a2,a2,a2,14,a2,a2,B.E,a2,a2,!0,a2,a2,a2,a2,a2,a2,a2,a2),a2,a2,a2)
k=r>=0
h=k?"+":""
g=B.i.a5(r,2)
f=J.z(a4.h(b0,"kind"),"forex")?"30m":"4h"
j.push(A.x(A.a([o,A.c(h+g+"% \xb7 "+f,a2,a2,a2,a2,a2,a2,A.l(a2,a2,k?C.cJ:C.d9,a2,a2,a2,a2,a2,a2,a2,a2,11,a2,a2,B.N,a2,a2,!0,a2,a2,a2,a2,a2,a2,a2,a2),a2,a2,a2)],i),B.dt,a2,B.e,B.h,0,B.p))
o=A.a([A.A(j,B.l,a2,B.e,B.h,0,a2,a2)],i)
k=x.f
if(k.b(a4.h(b0,"v2")))B.d.u(o,A.a([B.af,D.iqO(a9,b0)],i))
else{j=A.a([],i)
if(k.b(a5.h(0,"entry"))){k=D.dI(a5.h(0,"entry"))
e=J.z(k.h(0,"dir"),"up")
d=e?C.cJ:C.d9
a0=Math.max(1,B.i.S(D.c1(k.h(0,"candleMin"))))
h=A.n(18)
g=A.ap(d,B.v,0.25)
g.toString
g=A.a([d,g],x.O)
m=A.a([new A.aa(0,B.H,d.j(0.35),B.cz,16)],m)
f=B.c.j(0.22)
f=A.p(a2,A.V(e?B.pX:B.pW,B.c,a2,a2,a2,34),B.f,a2,a2,new A.o(f,a2,a2,a2,a2,a2,B.a6),a2,52,a2,a2,a2,a2,a2,52)
a1=A.c(e?"ENTER UP":"ENTER DOWN",a2,a2,a2,a2,a2,a2,C.fQe,a2,a2,a2)
B.d.u(j,A.a([B.af,A.p(a2,A.x(A.a([f,B.aj,a1,A.c(e?"BUY / CALL":"SELL / PUT",a2,a2,a2,a2,a2,a2,C.fHJ,a2,a2,a2),B.R,new D.aCA(a0,a2),B.R,A.A(A.a([A.x(A.a([A.c(B.i.a5(D.c1(k.h(0,"durationMin")),0)+" min",a2,a2,a2,a2,a2,a2,B.jp,a2,a2,a2),A.c("Trade for",a2,a2,a2,a2,a2,a2,I.acH,a2,a2,a2)],i),B.l,a2,B.e,B.h,0,B.p),A.p(a2,a2,B.f,B.jU,a2,a2,a2,30,a2,B.r7,a2,a2,a2,1),A.x(A.a([A.c(A.v(k.h(0,"worked"))+" of "+A.v(k.h(0,"of")),a2,a2,a2,a2,a2,a2,B.jp,a2,a2,a2),A.c("Worked lately",a2,a2,a2,a2,a2,a2,I.acH,a2,a2,a2)],i),B.l,a2,B.e,B.h,0,B.p)],i),B.l,a2,B.ba,B.h,0,a2,a2)],i),B.l,a2,B.e,B.h,0,B.p),B.f,a2,a2,new A.o(a2,a2,a2,h,m,new A.a8(B.aX,B.b1,B.x,g,a2,a2),B.m),a2,a2,a2,a2,W.a1Q,a2,a2,1/0)],i))}j.push(B.R)
m=u.j(0.15)
k=A.n(999)
k=A.a([A.p(a2,A.c(v,a2,a2,a2,a2,a2,a2,A.l(a2,a2,u,a2,a2,a2,a2,a2,a2,a2,a2,10.5,a2,a2,B.u,a2,a2,!0,a2,0.4,a2,a2,a2,a2,a2,a2),a2,a2,a2),B.f,a2,a2,new A.o(m,a2,a2,k,a2,a2,B.m),a2,a2,a2,a2,B.o3,a2,a2,a2),B.aW],i)
if(a5.h(0,"rsi")!=null){m=B.i.a5(D.c1(a5.h(0,"rsi")),0)
k.push(A.c("RSI "+m,a2,a2,a2,a2,a2,a2,A.l(a2,a2,a8?C.bX:C.bY,a2,a2,a2,a2,a2,a2,a2,a2,11,a2,a2,B.N,a2,a2,!0,a2,a2,a2,a2,a2,a2,a2,a2),a2,a2,a2))}if(a5.h(0,a3)!=null){m=D.c1(a5.h(0,a3))>=0?"+":""
h=B.i.a5(D.c1(a5.h(0,a3)),2)
B.d.u(k,A.a([B.ar,A.c("1h "+m+h+"%",a2,a2,a2,a2,a2,a2,A.l(a2,a2,D.c1(a5.h(0,a3))>=0?C.cJ:C.d9,a2,a2,a2,a2,a2,a2,a2,a2,11,a2,a2,B.N,a2,a2,!0,a2,a2,a2,a2,a2,a2,a2,a2),a2,a2,a2)],i))}j.push(A.A(k,B.l,a2,B.e,B.h,0,a2,a2))
j.push(B.R)
j.push(A.cf(new D.fHl(t,a9)))
j.push(B.at)
m=A.c("Sellers",a2,a2,a2,a2,a2,a2,A.l(a2,a2,a8?C.bX:C.bY,a2,a2,a2,a2,a2,a2,a2,a2,10,a2,a2,a2,a2,a2,!0,a2,a2,a2,a2,a2,a2,a2,a2),a2,a2,a2)
k=B.i.a5(t,0)
k=A.c("Strength "+k+"/100",a2,a2,a2,a2,a2,a2,A.l(a2,a2,a8?C.cl:B.c,a2,a2,a2,a2,a2,a2,a2,a2,10.5,a2,a2,B.E,a2,a2,!0,a2,a2,a2,a2,a2,a2,a2,a2),a2,a2,a2)
j.push(A.A(A.a([m,B.aW,k,B.aW,A.c("Buyers",a2,a2,a2,a2,a2,a2,A.l(a2,a2,a8?C.bX:C.bY,a2,a2,a2,a2,a2,a2,a2,a2,10,a2,a2,a2,a2,a2,!0,a2,a2,a2,a2,a2,a2,a2,a2),a2,a2,a2)],i),B.l,a2,B.e,B.h,0,a2,a2))
j.push(B.M)
m=J.z(a4.h(b0,"open"),!0)?A.cU(s,1,a2,A.U(s).c):s
m=J.E7(m,b1?2:99)
k=m.$ti
m=new A.bP(m,m.gJ(0),k.k("bP<aj.E>"))
k=k.k("aj.E")
while(m.C()){h=m.d
if(h==null)h=k.a(h)
g=A.V(B.ni,u,a2,a2,a2,4.5)
f=a8?C.cl:B.c
j.push(new A.D(B.lx,new A.c2(B.aK,B.e,B.h,B.B,a2,B.p,a2,0,A.a([new A.D(B.hy,g,a2),K.wb,new A.bu(1,B.b9,A.c(h,a2,a2,a2,a2,a2,a2,new A.G(!0,f,a2,a2,a2,a2,12.3,a2,a2,a2,a2,a2,1.35,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2),a2,a2,a2),a2)],i),a2),a2))}if(J.z(a4.h(b0,"open"),!0))B.d.u(j,A.a([B.R,D.iit(a9,a5,a6)],i))
B.d.u(o,j)}if(b2!=null)o.push(new A.bK(B.a9,a2,a2,A.hv(C.bXV,A.c("Ask the tutor about "+w,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2),b2,a2),a2))
return A.p(a2,A.x(o,B.B,a2,B.e,B.h,0,B.p),B.f,a2,a2,new A.o(q,a2,n,p,l,a2,B.m),a2,a2,a2,B.d6,B.bF,a2,a2,a2)},
iqO(a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1="activeSignal",a2=null,a3="explain",a4=J.a2(b0),a5=D.dI(a4.h(b0,"v2")),a6=x.f,a7=a6.b(a4.h(b0,a1))?D.dI(a4.h(b0,a1)):a2,a8=J.z(a4.h(b0,"open"),!0)
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
if(s)q=C.cJ
else q=t==="SELL"?C.d9:B.bP
p=a4?a2:a7.h(0,"checks")
if(p==null)p=a5.h(0,"checks")
x.g.a(p)
a6=J.cQ(p==null?B.bQ:p,a6)
a6=A.cy(a6,new D.fL1(),a6.$ti.k("M.E"),x.P)
o=A.B(a6,A.a3(a6).k("M.E"))
n=u?5:B.i.K(D.c1(a5.h(0,"passed")))
a6=a4?a2:a7.h(0,"grade_at")
m=A.bg(A.v(a6==null?"":a6))
a4=a4?a2:a7.h(0,"created_at")
l=A.bg(A.v(a4==null?"":a4))
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
h=A.p(a2,A.c(g,a2,a2,a2,a2,a2,a2,A.l(a2,a2,q,a2,a2,a2,a2,a2,a2,a2,a2,10.5,a2,a2,B.u,a2,a2,!0,a2,a2,a2,a2,a2,a2,a2,a2),a2,a2,a2),B.f,a2,a2,new A.o(i,a2,a2,h,a2,a2,B.m),a2,a2,a2,a2,B.fa,a2,a2,a2)
if(u){i=a7.h(0,"et_time")
i=B.d.gal(A.v(i==null?"":i).split(", "))}else i=""
g=a9.a
f=x.p
i=A.a([A.A(A.a([j,B.aa,h,A.E(A.c(i,a2,1,B.a2,a2,a2,a2,A.l(a2,a2,g?C.bX:C.bY,a2,a2,a2,a2,a2,a2,a2,a2,10.5,a2,a2,B.N,a2,a2,!0,a2,a2,a2,a2,a2,a2,a2,a2),B.e0,a2,a2),1)],f),B.l,a2,B.e,B.h,0,a2,a2)],f)
if(v)B.d.u(i,A.a([B.at,A.c("WEAK SIGNAL \xb7 DO NOT ENTER",a2,a2,a2,a2,a2,a2,A.l(a2,a2,q,a2,a2,a2,a2,a2,a2,a2,a2,11.5,a2,a2,B.u,a2,a2,!0,a2,0.4,a2,a2,a2,a2,a2,a2),a2,a2,a2)],f))
if(u&&l!=null&&m!=null)B.d.u(i,A.a([B.R,new D.aKv(l,m,s,a2)],f))
i.push(B.at)
i.push(C.h2h)
if(u&&m!=null){u=D.LG(D.Sr(m.aa()))
s=s?"higher":"lower"
i.push(A.c("Graded at "+u+" ET, 30 minutes after it was given: WIN if the price finished "+s+".",a2,a2,a2,a2,a2,a2,A.l(a2,a2,g?C.bX:C.bY,a2,a2,a2,a2,a2,a2,a2,a2,11,a2,a2,a2,a2,1.3,!0,a2,a2,a2,a2,a2,a2,a2,a2),a2,a2,a2))}i.push(B.M)
i.push(A.c(k,a2,a2,a2,a2,a2,a2,A.l(a2,a2,g?C.cl:B.c,a2,a2,a2,a2,a2,a2,a2,a2,12.3,a2,a2,a2,a2,1.35,!0,a2,a2,a2,a2,a2,a2,a2,a2),a2,a2,a2))
i.push(B.M)
for(u=o.length,e=0;e<o.length;o.length===u||(0,A.I)(o),++e){d=o[e]
s=J.a2(d)
j=J.z(s.h(d,"ok"),!0)?B.ea:B.Ij
j=A.V(j,J.z(s.h(d,"ok"),!0)?C.cJ:C.d9,a2,a2,a2,15)
h=J.z(s.h(d,"ok"),!0)?"Yes":"No"
s=s.h(d,"text")
s=A.v(s==null?"":s)
a0=g?C.cl:B.c
i.push(new A.D(B.lx,new A.c2(B.aK,B.e,B.h,B.B,a2,B.p,a2,0,A.a([j,B.bb,new A.bu(1,B.b9,A.c(h+" \u2014 "+s,a2,a2,a2,a2,a2,a2,new A.G(!0,a0,a2,a2,a2,a2,11.8,a2,a2,a2,a2,a2,1.3,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2),a2,a2,a2),a2)],f),a2),a2))}return A.p(a2,A.x(i,B.B,a2,B.e,B.h,0,B.p),B.f,a2,a2,new A.o(a4,a2,p,a6,a2,a2,B.m),a2,a2,a2,a2,B.bg,a2,a2,1/0)},
ffX(d){var w=d.a,v=w<0?0:B.o.ao(w,1e6)
return""+B.o.ao(v,60)+":"+B.a.b_(B.o.v(B.o.F(v,60)),2,"0")},
iit(a4,a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e="dir",d="typicalMin",a0="entry",a1=a5.h(0,"decision"),a2=J.k(a1==null?"NO_DIRECTION":a1),a3=J.z(a5.h(0,e),"up")
a1=x.g.a(a5.h(0,"notes"))
if(a1==null)a1=B.bQ
a1=J.b8(a1,new D.fxy(),x.N)
w=A.B(a1,a1.$ti.k("aj.E"))
A:{if("ENTER"===a2){a1=a3?C.cJ:C.d9
break A}if("SKIP_WEAK"===a2||"WAIT_LATE"===a2){a1=C.d9
break A}a1=E.i0
break A}v=a6.h(0,d)!=null&&a6.h(0,e)!=null&&!J.z(a6.h(0,e),"none")&&a2!=="NO_DIRECTION"&&a2!=="CLOSED"
u=D.c1(a6.h(0,"of"))
t=D.c1(a6.h(0,"worked"))
s=u>0
r=s?t/u:0
q=J.z(a6.h(0,e),"up")?"up":"down"
p=a4.a
o=p?C.tm:C.tn
n=A.n(16)
m=A.K(a1.j(0.55),B.r,1.5)
l=A.V(B.mw,p?C.cl:B.c,f,f,f,16)
k=x.p
l=A.A(A.a([l,B.bb,A.c("DECISION AND DURATION",f,f,f,f,f,f,A.l(f,f,p?C.cl:B.c,f,f,f,f,f,f,f,f,11.5,f,f,B.u,f,f,!0,f,1,f,f,f,f,f,f),f,f,f)],k),B.l,f,B.e,B.h,0,f,f)
j=a1.j(0.14)
i=A.n(10)
h=a5.h(0,"action")
h=A.a([A.c(J.k(h==null?"":h),f,f,f,f,f,f,A.l(f,f,a1,f,f,f,f,f,f,f,f,13,f,f,B.u,f,f,!0,f,f,f,f,f,f,f,f),f,f,f)],k)
if(w.length!==0){g=B.d.gH(w)
B.d.u(h,A.a([B.cQ,A.c(g,f,f,f,f,f,f,A.l(f,f,p?C.cl:B.c,f,f,f,f,f,f,f,f,12.3,f,f,f,f,1.35,!0,f,f,f,f,f,f,f,f),f,f,f)],k))}l=A.a([l,B.M,A.p(f,A.x(h,B.B,f,B.e,B.h,0,B.p),B.f,f,f,new A.o(j,f,f,i,f,f,B.m),f,f,f,f,B.iP,f,f,1/0)],k)
if(a2==="ENTER"&&x.f.b(a5.h(0,a0)))B.d.u(l,A.a([B.M,A.A(A.a([A.E(D.hGV(a4,"Trade for",B.i.a5(D.c1(D.dI(a5.h(0,a0)).h(0,"durationMin")),0)+" min",a1),1),A.E(D.hGV(a4,"Enter at","next "+B.i.a5(D.c1(D.dI(a5.h(0,a0)).h(0,"candleMin")),0)+"-min candle",f),1)],k),B.l,f,B.e,B.h,0,f,f)],k))
if(v){a1=A.c("What this is based on",f,f,f,f,f,f,A.l(f,f,p?C.bX:C.bY,f,f,f,f,f,f,f,f,10.5,f,f,B.E,f,f,!0,f,f,f,f,f,f,f,f),f,f,f)
j=D.hm3(a4,B.fN,"This "+q+" move started "+B.i.a5(D.c1(a6.h(0,"ageMin")),0)+" min ago.",f)
i=q==="up"?"Up":"Down"
k=A.a([B.R,a1,B.at,j,D.hm3(a4,B.asz,i+" moves on this market usually end after about "+B.i.a5(D.c1(a6.h(0,d)),0)+" min.",f)],k)
if(s){a1=B.i.a5(u,0)
s=B.i.a5(t,0)
j=B.i.S(r*100)
i=r>=0.5
h=i?"Reliable enough.":"Under half: unreliable."
i=i?C.cJ:C.d9
k.push(D.hm3(a4,B.pY,"Of the last "+a1+" "+q+" moves here, "+s+" really went "+q+" ("+j+"%). "+h,i))}B.d.u(l,k)}l.push(B.at)
l.push(A.c("Estimates from this market's recent moves, not promises.",f,f,f,f,f,f,A.l(f,f,p?C.bX:C.bY,f,f,f,f,f,f,f,f,10.5,f,f,f,f,f,!0,f,f,f,f,f,f,f,f),f,f,f))
return A.p(f,A.x(l,B.B,f,B.e,B.h,0,B.p),B.f,f,f,new A.o(o,f,m,n,f,f,B.m),f,f,f,f,B.bg,f,f,1/0)},
hm3(d,e,f,g){var w,v=null,u=g==null
if(u)w=d.a?C.bX:C.bY
else w=g
w=A.V(e,w,v,v,v,14)
if(u)u=d.a?C.cl:B.c
else u=g
return new A.D(B.Hz,A.A(A.a([w,B.bb,A.E(A.c(f,v,v,v,v,v,v,A.l(v,v,u,v,v,v,v,v,v,v,v,12,v,v,v,v,1.35,!0,v,v,v,v,v,v,v,v),v,v,v),1)],x.p),B.B,v,B.e,B.h,0,v,v),v)},
hGV(d,e,f,g){var w=null,v=d.a,u=A.c(e,w,w,w,w,w,w,A.l(w,w,v?C.bX:C.bY,w,w,w,w,w,w,w,w,10.5,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)
if(g==null)v=v?C.cl:B.c
else v=g
return A.x(A.a([u,A.c(f,w,w,w,w,w,w,A.l(w,w,v,w,w,w,w,w,w,w,w,13.5,w,w,B.E,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),B.B,w,B.e,B.h,0,B.p)},
hJD(d){var w=J.a2(d),v=D.c1(w.h(d,"price"))
if(!J.z(w.h(d,"kind"),"forex"))return D.ej(v,!0,!1)
return B.i.a5(v,v>=100?3:5)},
hAL(d,e){return new D.XL(d,e,null)},
hFc(){var w=Math.max(0,$.aM2-1)
$.aM2=w
if(w===0){B.d.a6($.DB)
$.ahd=!1
$.hlo=""
$.foH=$.foH+1}},
eII(d){var w
x.g.a(d)
w=d==null?B.bQ:d
w=J.cQ(w,x.f)
w=A.cy(w,new D.eIJ(),w.$ti.k("M.E"),x.P)
w=A.B(w,A.a3(w).k("M.E"))
return w},
hEH(d){var w=J.t(d,"kind")
switch(J.k(w==null?"":w)){case"forex":w="Forex"
break
case"crypto":w="Crypto"
break
default:w="Stocks"
break}return w},
atV:function atV(d){this.a=d},
aHp:function aHp(d,e){var _=this
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
eHP:function eHP(d){this.a=d},
eHQ:function eHQ(d){this.a=d},
eH8:function eH8(d,e){this.a=d
this.b=e},
eHm:function eHm(d,e){this.a=d
this.b=e},
eHa:function eHa(d,e){this.a=d
this.b=e},
eHl:function eHl(d,e){this.a=d
this.b=e},
eHo:function eHo(d,e){this.a=d
this.b=e},
eHp:function eHp(d,e){this.a=d
this.b=e},
eH7:function eH7(){},
eH9:function eH9(d,e,f){this.a=d
this.b=e
this.c=f},
eHx:function eHx(){},
eHv:function eHv(d){this.a=d},
eHw:function eHw(d){this.a=d},
eHy:function eHy(d,e){this.a=d
this.b=e},
eHz:function eHz(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eHh:function eHh(d){this.a=d},
eHr:function eHr(d){this.a=d},
eHs:function eHs(d,e){this.a=d
this.b=e},
eHt:function eHt(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eHq:function eHq(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eHu:function eHu(){},
eHO:function eHO(d){this.a=d},
eHJ:function eHJ(d){this.a=d},
eHK:function eHK(d){this.a=d},
eGX:function eGX(d){this.a=d},
eGY:function eGY(d){this.a=d},
eGZ:function eGZ(d){this.a=d},
eH_:function eH_(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eGV:function eGV(d){this.a=d},
eGW:function eGW(d,e){this.a=d
this.b=e},
eH0:function eH0(d){this.a=d},
eH1:function eH1(d){this.a=d},
eHF:function eHF(){},
eHG:function eHG(){},
eHH:function eHH(){},
eHI:function eHI(){},
eHB:function eHB(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eHA:function eHA(d){this.a=d},
eHE:function eHE(d,e){this.a=d
this.b=e},
eHD:function eHD(d){this.a=d},
eHc:function eHc(){},
eHd:function eHd(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eHe:function eHe(d){this.a=d},
eHg:function eHg(){},
eHf:function eHf(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
eHb:function eHb(d,e){this.a=d
this.b=e},
eH4:function eH4(d,e){this.a=d
this.b=e},
eH3:function eH3(d,e){this.a=d
this.b=e},
eH5:function eH5(d){this.a=d},
eH2:function eH2(d){this.a=d},
eGT:function eGT(d){this.a=d},
eGU:function eGU(){},
eHi:function eHi(){},
eHj:function eHj(){},
eHk:function eHk(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
eHn:function eHn(d,e){this.a=d
this.b=e},
eH6:function eH6(d,e){this.a=d
this.b=e},
eGS:function eGS(d){this.a=d},
eHM:function eHM(){},
eHN:function eHN(d){this.a=d},
eHL:function eHL(d){this.a=d},
eGR:function eGR(d){this.a=d},
eGQ:function eGQ(d){this.a=d},
a_A:function a_A(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
bet:function bet(){this.c=this.a=this.d=null},
cX1:function cX1(d,e){this.a=d
this.b=e},
cXa:function cXa(d){this.a=d},
cX8:function cX8(d,e){this.a=d
this.b=e},
cX6:function cX6(d,e){this.a=d
this.b=e},
cX7:function cX7(d,e){this.a=d
this.b=e},
cX5:function cX5(d){this.a=d},
cX4:function cX4(d){this.a=d},
cX9:function cX9(d){this.a=d},
cX3:function cX3(d){this.a=d},
cX2:function cX2(d){this.a=d},
beu:function beu(d,e,f,g,h,i,j,k){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.w=j
_.a=k},
cXb:function cXb(d){this.a=d},
cXd:function cXd(d,e){this.a=d
this.b=e},
cXc:function cXc(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
bwq:function bwq(d,e,f){this.b=d
this.c=e
this.a=f},
fi9:function fi9(){},
z3:function z3(d,e,f){this.a=d
this.b=e
this.c=f},
fwJ:function fwJ(d){this.a=d},
fC8:function fC8(){},
Rp:function Rp(d){this.a=d},
fGt:function fGt(){},
fDe:function fDe(){},
fKw:function fKw(){},
WY:function WY(d,e){this.c=d
this.a=e},
aGm:function aGm(d){var _=this
_.d=null
_.e=d
_.f=!0
_.r=!1
_.x=_.w=null
_.z=_.y=!1
_.c=_.a=_.Q=null},
e83:function e83(d){this.a=d},
e7z:function e7z(d,e){this.a=d
this.b=e},
e7y:function e7y(){},
e7L:function e7L(d,e,f){this.a=d
this.b=e
this.c=f},
e7K:function e7K(){},
e7R:function e7R(d,e){this.a=d
this.b=e},
e7S:function e7S(d,e,f){this.a=d
this.b=e
this.c=f},
e81:function e81(d){this.a=d},
e82:function e82(d){this.a=d},
e7s:function e7s(d,e){this.a=d
this.b=e},
e7H:function e7H(){},
e7I:function e7I(){},
e7J:function e7J(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
e7w:function e7w(d){this.a=d},
e7x:function e7x(){},
e7t:function e7t(){},
e7u:function e7u(d){this.a=d},
e7v:function e7v(d,e){this.a=d
this.b=e},
e7F:function e7F(){},
e7P:function e7P(d){this.a=d},
e7Q:function e7Q(d){this.a=d},
e7N:function e7N(){},
e7O:function e7O(d){this.a=d},
e7C:function e7C(){},
e7E:function e7E(){},
e7D:function e7D(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e7B:function e7B(d,e){this.a=d
this.b=e},
e7A:function e7A(d,e){this.a=d
this.b=e},
e7r:function e7r(){},
e7T:function e7T(d){this.a=d},
e7G:function e7G(){},
e8_:function e8_(){},
e80:function e80(d){this.a=d},
e7Z:function e7Z(d){this.a=d},
e7Y:function e7Y(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
e7V:function e7V(){},
e7X:function e7X(){},
e7W:function e7W(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
e7U:function e7U(d){this.a=d},
e7q:function e7q(d){this.a=d},
e7p:function e7p(d){this.a=d},
e7M:function e7M(){},
aBh:function aBh(d,e,f){this.c=d
this.d=e
this.a=f},
bf9:function bf9(){this.c=this.a=this.d=null},
da_:function da_(d){this.a=d},
d9Z:function d9Z(){},
fHk:function fHk(){},
fHl:function fHl(d,e){this.a=d
this.b=e},
fL1:function fL1(){},
aKv:function aKv(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bvM:function bvM(){this.c=this.a=this.d=null},
fg_:function fg_(d){this.a=d},
ffZ:function ffZ(){},
ffY:function ffY(){},
aCA:function aCA(d,e){this.c=d
this.a=e},
bi0:function bi0(){this.c=this.a=this.d=null},
din:function din(d){this.a=d},
dim:function dim(){},
fxy:function fxy(){},
cF:function cF(d,e,f,g){var _=this
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
XL:function XL(d,e,f){this.c=d
this.d=e
this.a=f},
a_G:function a_G(d,e){this.a=d
this.b=e},
aHq:function aHq(d,e,f,g,h,i,j,k,l){var _=this
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
eI_:function eI_(){},
eIO:function eIO(d){this.a=d},
eIN:function eIN(){},
eIP:function eIP(d){this.a=d},
eIQ:function eIQ(d){this.a=d},
eIM:function eIM(d,e){this.a=d
this.b=e},
eIR:function eIR(d){this.a=d},
eIJ:function eIJ(){},
eIk:function eIk(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eIt:function eIt(d){this.a=d},
eI2:function eI2(d){this.a=d},
eI3:function eI3(d,e){this.a=d
this.b=e},
eI4:function eI4(d){this.a=d},
eI5:function eI5(d){this.a=d},
eI1:function eI1(d,e){this.a=d
this.b=e},
eI0:function eI0(d,e){this.a=d
this.b=e},
eIs:function eIs(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eIr:function eIr(){},
eIG:function eIG(){},
eIH:function eIH(){},
eI8:function eI8(d){this.a=d},
eI9:function eI9(){},
eIa:function eIa(){},
eHW:function eHW(d,e){this.a=d
this.b=e},
eHX:function eHX(){},
eHY:function eHY(){},
eHZ:function eHZ(){},
eIu:function eIu(d){this.a=d},
eIK:function eIK(d){this.a=d},
eIL:function eIL(d,e){this.a=d
this.b=e},
eI7:function eI7(d){this.a=d},
eI6:function eI6(d,e){this.a=d
this.b=e},
eIq:function eIq(d,e){this.a=d
this.b=e},
eIm:function eIm(d,e){this.a=d
this.b=e},
eIn:function eIn(d,e){this.a=d
this.b=e},
eIl:function eIl(d,e,f){this.a=d
this.b=e
this.c=f},
eIo:function eIo(d,e){this.a=d
this.b=e},
eIp:function eIp(d){this.a=d},
eIb:function eIb(d,e,f){this.a=d
this.b=e
this.c=f},
eIj:function eIj(d){this.a=d},
eIc:function eIc(){},
eId:function eId(){},
eIe:function eIe(){},
eIf:function eIf(){},
eIg:function eIg(){},
eIh:function eIh(){},
eIi:function eIi(){},
eIz:function eIz(d,e){this.a=d
this.b=e},
eIA:function eIA(){},
eIC:function eIC(d,e){this.a=d
this.b=e},
eIy:function eIy(d,e){this.a=d
this.b=e},
eIB:function eIB(d){this.a=d},
eID:function eID(d){this.a=d},
eIx:function eIx(d){this.a=d},
eIE:function eIE(d){this.a=d},
eIw:function eIw(d,e){this.a=d
this.b=e},
eIF:function eIF(d,e){this.a=d
this.b=e},
eIv:function eIv(){},
eHS:function eHS(d){this.a=d},
eHT:function eHT(d,e){this.a=d
this.b=e},
eHR:function eHR(d,e){this.a=d
this.b=e},
eHU:function eHU(d,e){this.a=d
this.b=e},
eHV:function eHV(d){this.a=d},
a0H:function a0H(d,e,f,g,h,i,j,k,l,m){var _=this
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
blb:function blb(d){var _=this
_.x=_.w=_.r=_.f=_.e=_.d=$
_.y=d
_.c=_.a=_.z=null},
duX:function duX(){},
duY:function duY(){},
duV:function duV(){},
duW:function duW(){},
duT:function duT(d){this.a=d},
duU:function duU(d){this.a=d},
duS:function duS(d){this.a=d},
duL:function duL(){},
duM:function duM(){},
duN:function duN(d){this.a=d},
duO:function duO(d){this.a=d},
duJ:function duJ(d,e,f){this.a=d
this.b=e
this.c=f},
duP:function duP(d){this.a=d},
duQ:function duQ(d,e){this.a=d
this.b=e},
duR:function duR(d,e){this.a=d
this.b=e},
duK:function duK(d,e,f){this.a=d
this.b=e
this.c=f},
aPo:function aPo(){}},C,I,P,Z,A_,A0
J=c[1]
A=c[0]
B=c[2]
Q=c[149]
R=c[248]
E=c[311]
K=c[176]
H=c[289]
S=c[218]
G=c[310]
T=c[110]
L=c[55]
M=c[312]
N=c[293]
U=c[187]
V=c[313]
F=c[281]
W=c[292]
X=c[175]
Y=c[271]
O=c[129]
D=a.updateHolder(c[20],D)
C=c[309]
I=c[178]
P=c[314]
Z=c[150]
A_=c[231]
A0=c[157]
D.atV.prototype={
R(){return new D.aHp(A.a([],x.t),A.mj(0,null,null))}}
D.aHp.prototype={
a_(){var w=this
w.a3()
$.aM2=$.aM2+1
w.a.toString
w.aey()
w.B6()
w.yP(!1).bE(new D.eHP(w),x.H)
w.ch=A.d0(B.nX,new D.eHQ(w))},
B6(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m
var $async$B6=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.aB(),$async$B6)
case 7:q=e
p=A.aV(J.t(q.a,"ngmy_signal_grid_status_cache"))
if(p==null||r.c==null||r.d!=null){w=1
break}o=A.a0(x.f.a(B.U.aP(0,p,null)),x.N,x.z)
r.l(new D.eH8(r,o))
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
a3e(d){return this.cyB(d)},
cyB(d){var w=0,v=A.j(x.H),u=1,t=[],s,r,q
var $async$a3e=A.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:u=3
w=6
return A.b(A.aB(),$async$a3e)
case 6:s=f
w=7
return A.b(s.aB("String","ngmy_signal_grid_status_cache",B.U.au(d,null)),$async$a3e)
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
return A.i($async$a3e,v)},
t(){var w=this.ch
if(w!=null)w.a1(0)
this.as.t()
D.hFc()
this.a2()},
crk(d){var w=this
if(!w.at&&d>0){w.at=!0
$.aU.U$.push(new D.eHm(w,d))}return w.as},
aey(){var w=0,v=A.j(x.H),u=1,t=[],s=this,r,q,p,o
var $async$aey=A.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:u=3
w=6
return A.b(A.aB(),$async$aey)
case 6:r=e
q=A.aV(J.t(r.a,"ngmy_signal_grid_market"))
if(q!=null&&q.length!==0&&s.c!=null&&s.Q==null)s.l(new D.eHa(s,q))
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
return A.i($async$aey,v)},
a27(d){return this.cqR(d)},
cqR(d){var w=0,v=A.j(x.H),u=1,t=[],s=this,r,q,p
var $async$a27=A.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:s.l(new D.eHl(s,d))
u=3
w=6
return A.b(A.aB(),$async$a27)
case 6:r=f
w=7
return A.b(r.aB("String","ngmy_signal_grid_market",d),$async$a27)
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
return A.i($async$a27,v)},
yP(d){return this.cwa(d)},
cwa(d){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$yP=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.x?null:t.bV1()
w=3
return A.b(A.fP(A.J(["action","paStatus","live",d],x.N,x.z),!1,!1,!1,!1,B.wZ),$async$yP)
case 3:q=f
if(t.c==null){w=1
break}t.l(new D.eHo(t,q))
if(q!=null&&J.z(J.t(q,"ok"),!0))t.a3e(q)
w=r!=null?4:5
break
case 4:w=6
return A.b(r,$async$yP)
case 6:s=f
if(t.c!=null&&s!=null&&t.d!=null)t.l(new D.eHp(t,s))
case 5:case 1:return A.h(u,v)}})
return A.i($async$yP,v)},
Z9(d){return this.bV2(d)},
bV1(){return this.Z9(0)},
bV2(d){var w=0,v=A.j(x.i),u,t,s
var $async$Z9=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(A.fP(A.J(["action","paLog","limit",30,"beforeId",d],x.N,x.z),!1,!1,!1,!1,B.hb),$async$Z9)
case 3:s=f
if(s==null||!J.z(J.t(s,"ok"),!0)){u=null
w=1
break}t=x.g.a(J.t(s,"rows"))
if(t==null)t=B.bQ
t=J.cQ(t,x.f)
t=A.cy(t,new D.eH7(),t.$ti.k("M.E"),x.P)
t=A.B(t,A.a3(t).k("M.E"))
u=t
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$Z9,v)},
a_7(d){return this.c7h(d)},
c7g(){return this.a_7(!1)},
c7h(d){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a_7=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=d&&J.cJ(t.e)?J.t(J.Tf(t.e),"id"):0
w=3
return A.b(t.Z9(s==null?0:s),$async$a_7)
case 3:r=f
if(t.c==null||r==null){w=1
break}t.l(new D.eH9(t,d,r))
case 1:return A.h(u,v)}})
return A.i($async$a_7,v)},
za(d){return this.cB7(d)},
cB7(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$za=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:p=t.d
o=D.dI(p==null?null:J.t(p,"state"))
w=d&&J.z(o.h(0,"brakePaused"),!0)?3:4
break
case 3:p=t.c
p.toString
w=5
return A.b(A.ce(null,null,!0,null,new D.eHx(),p,null,!0,!0,x.y),$async$za)
case 5:if(f!==!0){w=1
break}case 4:s=t.d
t.l(new D.eHy(t,d))
w=6
return A.b(A.fP(A.J(["action","paSet","enabled",d],x.N,x.z),!1,!1,!1,!1,B.hb),$async$za)
case 6:r=f
if(t.c==null){w=1
break}p=r==null
q=J.z(p?null:J.t(r,"ok"),!0)
t.l(new D.eHz(t,q,r,s))
if(q)p=d?"Agent started.":"Agent stopped."
else{p=p?null:J.t(r,"error")
p=J.k(p==null?"Could not change it.":p)}t.b3k(p,q?C.cJ:C.d9)
if(q)t.c7g()
case 1:return A.h(u,v)}})
return A.i($async$za,v)},
clM(){var w=this.c
w.toString
A.a7(w,!1).cc(A.eb(new D.eHh(this),!1,null,x.H))},
a3q(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$a3q=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t.l(new D.eHr(t))
w=3
return A.b(A.fP(A.J(["action","paCheck"],x.N,x.z),!1,!1,!1,!1,B.nX),$async$a3q)
case 3:s=e
if(t.c==null){w=1
break}t.l(new D.eHs(t,s))
r=s==null
if(!J.z(r?null:J.t(s,"ok"),!0)){r=r?null:J.t(s,"error")
t.b3k(J.k(r==null?"The check did not finish.":r),C.d9)
w=1
break}r=t.c
r.toString
r=A.Q(r).ax.a===B.dh
s.toString
q=D.dI(D.dI(J.t(s,"state")).h(0,"snapshot"))
p=t.c
p.toString
o=r?C.t4:C.t2
w=4
return A.b(A.bU(o,null,new D.eHt(t,new D.Rp(r),q,s),p,!0,!0,!0,B.aUd,!1,!1,x.H),$async$a3q)
case 4:case 1:return A.h(u,v)}})
return A.i($async$a3q,v)},
czh(d,e,f,g){var w,v,u,t,s,r=null,q=D.fC7(e)
B.d.b0(q,new D.eHu())
w=d.a
v=w?C.oL:C.oG
v=A.at(A.p(r,r,B.f,r,r,new A.o(v,r,r,A.n(9),r,r,B.m),r,4,r,r,r,r,r,40),r,r,r)
u=A.c("What the agent sees right now",r,r,r,r,r,r,A.l(r,r,w?C.cl:B.c,r,r,r,r,r,r,r,r,19,r,r,B.u,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
t=J.z(f.h(0,"enabled"),!0)?" (next one "+D.hIJ()+")":" (the agent is stopped, so none will be made)"
v=A.a([v,B.aB,u,B.at,A.c("Check now only looks. It never buys or sells. Pretend trades are made only by the automatic check every 5 minutes"+t+".",r,r,r,r,r,r,A.l(r,r,w?C.bX:C.bY,r,r,r,r,r,r,r,r,12.5,r,r,r,r,1.35,!0,r,r,r,r,r,r,r,r),r,r,r),B.af],x.p)
for(w=q.length,s=0;s<q.length;q.length===w||(0,A.I)(q),++s)v.push(D.hJJ(d,q[s],!0,r))
return A.co(v,g,r,C.bHh,r,r,B.ah,!1)},
b3k(d,e){var w=null
this.c.M(x.q).f.T(A.b3(w,w,w,e,w,B.t,w,A.c(d,w,w,w,w,w,w,w,w,w,w),w,B.Y,w,w,w,w,w,w,w,w,w,w))},
B(d){var w,v=this,u=null,t=A.Q(d).ax.a===B.dh,s=new D.Rp(t),r=t?C.t4:C.t2,q=t?C.t4:C.t2
q=A.a([q,t?C.O0:C.NU],x.O)
w=v.cgt(s)
if(v.f)t=B.lr
else{if(v.d==null){t=v.ay
t=A.a([v.aaK(s,t==null?"Nothing to show yet.":t,B.b_)],x.p)}else t=v.bIr(0,s)
t=A.Kl(A.co(t,u,u,C.ao8,u,u,B.ah,!1),u,new D.eHO(v))}return A.c6(u,r,A.p(u,A.bo(!0,A.x(A.a([w,A.E(t,1)],x.p),B.l,u,B.e,B.h,0,B.p),!0,!1,B.ag,!0,!0),B.f,u,u,new A.o(u,u,u,u,u,new A.a8(B.aX,B.b1,B.x,q,u,u),B.m),u,u,u,u,u,u,u,u),u,!1,!1,u,u)},
cgt(d){var w,v,u,t,s,r=this,q=null,p=r.d,o=D.dI(p==null?q:J.t(p,"state")),n=J.z(o.h(0,"brakePaused"),!0),m=J.z(o.h(0,"enabled"),!0)&&!n
p=r.b3i(d,B.eB,new D.eHJ(r))
w=d.a
v=x.p
u=A.a([A.c("Signal Grid",q,1,B.a2,q,q,q,A.l(q,q,w?C.cl:B.c,q,q,q,q,q,q,q,q,17,q,q,B.E,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],v)
if(r.d==null)u.push(A.c("Trading agent",q,1,B.a2,q,q,q,A.l(q,q,w?C.bX:C.bY,q,q,q,q,q,q,q,q,11.5,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q))
else{if(n)t=C.d9
else if(m)t=C.cJ
else t=w?C.bX:C.bY
t=A.V(B.ni,t,q,q,q,7)
if(n)s="Paused"
else s=m?"Running":"Stopped"
if(n)w=C.d9
else if(m)w=C.cJ
else w=w?C.bX:C.bY
u.push(A.A(A.a([t,B.da,new A.d1(1,B.cg,A.c(s,q,1,B.a2,q,q,q,A.l(q,q,w,q,q,q,q,q,q,q,q,11.5,q,q,B.E,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),q)],v),B.l,q,B.e,B.O,0,q,q))}p=A.a([p,B.ar,A.E(A.A(A.a([new A.d1(1,B.cg,A.x(u,B.B,q,B.e,B.h,0,B.p),q)],v),B.l,q,B.e,B.h,0,q,q),1)],v)
if(r.d!=null)B.d.u(p,A.a([B.aa,r.bbF(d,"options","Options",B.fM,B.az),B.aa,r.bbF(d,"scalper","Scalper",B.rh,B.as)],v))
p.push(B.aa)
p.push(r.b3i(d,B.nk,r.r?q:new D.eHK(r)))
return new A.D(B.hc,A.A(p,B.l,q,B.e,B.h,0,q,q),q)},
bIr(c4,c5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9=this,c0=null,c1="asset",c2="liveError",c3=b9.d
c3.toString
w=J.a2(c3)
v=D.dI(w.h(c3,"state"))
u=D.dI(w.h(c3,"config"))
t=D.dI(v.h(0,"snapshot"))
s=x.f
r=s.b(v.h(0,"shadow"))?D.dI(v.h(0,"shadow")):c0
q=D.fC7(t)
p=A.U(q).k("X<1>")
o=A.B(new A.X(q,new D.eGX(r),p),p.k("M.E"))
n=o.length===0?q:o
m=b9.Q!=null&&B.d.aR(n,new D.eGY(b9))?b9.Q:c0
if(m==null){p=r==null?c0:r.h(0,"symbol")
if(p==null)p=t.h(0,c1)
l=p==null?c0:J.k(p)}else l=m
k=B.d.dr(n,new D.eGZ(l),new D.eH_(q,l,n,t))
p=r==null
j=p?c0:B.d.dr(q,new D.eH0(r),new D.eH1(k))
p=!p
i=p&&J.z(r.h(0,"symbol"),J.t(k,c1))?r:c0
h=b9.c8K(c5,c3,n,k,r)
g=D.dI(w.h(c3,"market"))
f=J.a2(k)
e=f.h(k,c1)
d=J.k(e==null?"SPY":e)
a0=B.a.q(d,"/")
a1=D.bFa(k)
a2=D.c1(f.h(k,"price"))
a3=a1.length!==0?D.c1(J.t(B.d.gH(a1),"c")):0
a4=a3===0?0:(a2-a3)/a3*100
a5=a4>=0
if(a0)a6=!0
else{e=f.h(k,"open")
if(e==null)e=g.h(0,"stockOpen")
a6=e==null?g.h(0,"open"):e}if(a0)a7="Crypto \xb7 the agent trades it on Saturday and Sunday only"
else{e=J.kS(a6)
if(e.A(a6,!0))a7="Stock market open \xb7 the agent trades it on weekdays \xb7 closes 4:00 PM ET"
else{e=e.A(a6,!1)?"Stock market closed"+b9.cMI(g.h(0,"nextOpen")):""
a7=e}}a8=D.fBQ(d)
e=c5.a
a9=e?B.c.j(0.92):C.im
b0=A.n(22)
b1=A.K(e?B.c:C.n6,B.r,1)
b2=A.a([new A.aa(0,B.H,c5.gI3(),B.cz,12)],x.V)
b3=D.bDO(d,30)
b4=a0?d:d+"/USD"
b4=A.c(b4,c0,c0,c0,c0,c0,c0,A.l(c0,c0,e?C.cl:B.c,c0,c0,c0,c0,c0,c0,c0,c0,17,c0,c0,B.E,c0,c0,!0,c0,c0,c0,c0,c0,c0,c0,c0),c0,c0,c0)
f=f.h(k,"name")
f=J.k(f==null?a8.a:f)
b5=x.p
f=A.A(A.a([b3,B.ar,b4,B.bb,new A.d1(1,B.cg,A.c(f,c0,c0,B.a2,c0,c0,c0,A.l(c0,c0,e?C.bX:C.bY,c0,c0,c0,c0,c0,c0,c0,c0,13,c0,c0,c0,c0,c0,!0,c0,c0,c0,c0,c0,c0,c0,c0),c0,c0,c0),c0)],b5),B.l,c0,B.e,B.h,0,c0,c0)
b3=a2===0?"\u2014":D.ej(a2,!1,!1)
b3=A.a([A.E(new A.dc(B.dp,B.a5,B.f,A.c(b3,c0,c0,c0,c0,c0,c0,A.l(c0,c0,e?C.cl:B.c,c0,c0,c0,c0,c0,c0,c0,G.Av,34,c0,c0,B.N,c0,c0,!0,c0,-1,c0,c0,c0,c0,c0,c0),c0,c0,c0),c0),1)],b5)
if(a1.length>1){b4=(a5?C.cJ:C.d9).j(0.14)
b6=A.n(10)
b7=a5?C.arm:B.Qi
b7=A.V(b7,a5?C.cJ:C.d9,c0,c0,c0,20)
b8=B.i.a5(Math.abs(a4),2)
b3.push(A.p(c0,A.A(A.a([b7,A.c(b8+"%",c0,c0,c0,c0,c0,c0,A.l(c0,c0,a5?C.cJ:C.d9,c0,c0,c0,c0,c0,c0,c0,c0,13,c0,c0,B.E,c0,c0,!0,c0,c0,c0,c0,c0,c0,c0,c0),c0,c0,c0)],b5),B.l,c0,B.e,B.O,0,c0,c0),B.f,c0,c0,new A.o(b4,c0,c0,b6,c0,c0,B.m),c0,c0,c0,c0,B.fZ,c0,c0,c0))}f=A.a([f,B.M,A.A(b3,B.l,c0,B.e,B.h,0,c0,c0)],b5)
if(a7.length!==0){if(J.z(a6,!0))b3=C.cJ
else b3=e?C.bX:C.bY
b3=A.V(B.ni,b3,c0,c0,c0,7)
b4=a1.length>1?"  \xb7  change over 4H":""
B.d.u(f,A.a([B.at,A.A(A.a([b3,B.bb,new A.d1(1,B.cg,A.c(a7+b4,c0,c0,B.a2,c0,c0,c0,A.l(c0,c0,e?C.bX:C.bY,c0,c0,c0,c0,c0,c0,c0,c0,12,c0,c0,c0,c0,c0,!0,c0,c0,c0,c0,c0,c0,c0,c0),c0,c0,c0),c0)],b5),B.l,c0,B.e,B.h,0,c0,c0)],b5))}h=A.a([h,A.p(c0,A.x(f,B.B,c0,B.e,B.h,0,B.p),B.f,c0,c0,new A.o(a9,c0,b1,b0,b2,c0,B.m),c0,c0,c0,B.dU,B.eY,c0,c0,c0)],b5)
f=u.h(0,"problem")
if(J.k(f==null?"":f).length!==0)h.push(b9.aaK(c5,J.k(u.h(0,"problem")),E.i0))
f=w.h(c3,c2)
if(J.k(f==null?"":f).length!==0)h.push(b9.aaK(c5,J.k(w.h(c3,c2)),C.d9))
if(J.z(v.h(0,"brakePaused"),!0)){f=D.dI(w.h(c3,"ticket")).h(0,"totalBrakeUsd")
f=B.i.a5(D.c1(f==null?200:f),0)
a9=v.h(0,"brakeReason")
h.push(b9.aaK(c5,"Paused by the $"+f+" brake. "+A.v(a9==null?"":a9)+y.g,C.d9))}h.push(b9.bLr(c5,k,i))
h.push(b9.bI4(c5,c3,v,t))
if(s.b(w.h(c3,"pace")))h.push(b9.aBk(c5,c3))
if(p){j.toString
h.push(b9.crM(c5,r,j,D.dI(w.h(c3,"ticket")),D.dI(t.h(0,"held"))))}h.push(b9.aAE(c5,v))
h.push(b9.bHU(c5,v,c3))
h.push(b9.cJI(c5,c3))
h.push(b9.bF2(c5))
h.push(b9.cyb(c5,c3))
c3=e?B.c.j(0.92):C.im
w=A.n(16)
s=A.K(e?B.c:C.n6,B.r,1)
p=A.V(B.ko,C.cJ,c0,c0,c0,18)
f=J.z(u.h(0,"ordersSwitchOn"),!0)?"on":"off"
h.push(A.p(c0,A.A(A.a([p,B.aa,A.E(A.c("No order is ever sent to Alpaca. Order switch: "+f+".",c0,c0,c0,c0,c0,c0,A.l(c0,c0,e?C.bX:C.bY,c0,c0,c0,c0,c0,c0,c0,c0,11.5,c0,c0,c0,c0,1.3,!0,c0,c0,c0,c0,c0,c0,c0,c0),c0,c0,c0),1)],b5),B.l,c0,B.e,B.h,0,c0,c0),B.f,c0,c0,new A.o(c3,c0,s,w,c0,c0,B.m),c0,c0,c0,I.anf,B.ep,c0,c0,c0))
return h},
cIH(d,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=null,g=D.dI(J.t(a0,"market")),f=x.g,e=f.a(g.h(0,"activeMarkets"))
if(e==null)e=B.bQ
w=x.N
e=J.b8(e,new D.eHF(),w)
v=A.B(e,e.$ti.k("aj.E"))
f=f.a(g.h(0,"todaysList"))
if(f==null)f=B.bQ
w=J.b8(f,new D.eHG(),w)
u=A.B(w,w.$ti.k("aj.E"))
t=J.z(g.h(0,"weekend"),!0)
if(a1==null)s=h
else{f=a1.h(0,"symbol")
s=f==null?h:J.k(f)}r=s!=null&&u.length!==0&&!B.d.q(u,s)
q=new A.X(v,new D.eHH(),A.U(v).k("X<1>")).gJ(0)
f=v.length
if(f!==0){f=f-q>0
e=""+q
p=f?"TRADING NOW: 10 STOCKS + "+e+" CRYPTO":"TRADING NOW: ALL "+e+" CRYPTO"
if(f)f=", plus the 10 stocks while the stock market is open"
else f=t?" (stocks trade on weekdays)":" (the stocks trade 9:30 AM to 4:00 PM ET)"
o="Every tradable crypto pair on Alpaca, around the clock"+f+". All of them are checked at the same time, every 5 minutes, and the agent buys the strongest valid entry. One trade at a time, up to 20 trades today in total."}else{f=A.U(u).k("X<1>")
o="Crypto trades around the clock and the 10 stocks ("+A.pd(new A.X(u,new D.eHI(),f),10,f.k("M.E")).aL(0,", ")+") while the stock market is open. The market list is loading."
p="NO MARKET TRADED RIGHT NOW"}f=(v.length===0?h:B.d.gH(v))==null
n=f?E.i0:C.cJ
e=d.a
w=e?B.c.j(0.92):C.im
m=A.n(22)
l=A.K(n.j(0.55),B.r,1)
k=A.V(!f?B.IF:B.vm,n,h,h,h,26)
j=A.c(p,h,h,h,h,h,h,A.l(h,h,n,h,h,h,h,h,h,h,h,13.5,h,h,B.u,h,h,!0,h,0.3,h,h,h,h,h,h),h,h,h)
f=A.c(o,h,h,h,h,h,h,A.l(h,h,e?C.cl:B.c,h,h,h,h,h,h,h,h,12,h,h,h,h,1.3,!0,h,h,h,h,h,h,h,h),h,h,h)
i=x.p
f=A.a([j,B.cQ,f,B.cQ,A.c("Buys only when the fast line crosses up AND the big trend is rising (slow line higher than 1 hour ago, price above it).",h,h,h,h,h,h,A.l(h,h,e?C.bX:C.bY,h,h,h,h,h,h,h,h,11,h,h,h,h,1.3,!0,h,h,h,h,h,h,h,h),h,h,h)],i)
if(r)B.d.u(f,A.a([B.at,A.c("Still holding the "+s+" pretend trade from before: the agent keeps checking its exits every 5 minutes.",h,h,h,h,h,h,C.fHn,h,h,h)],i))
return A.p(h,A.A(A.a([k,B.ar,A.E(A.x(f,B.B,h,B.e,B.h,0,B.p),1)],i),B.B,h,B.e,B.h,0,h,h),B.f,h,h,new A.o(w,h,l,m,h,h,B.m),h,h,h,h,B.bR,h,h,h)},
cDx(d,e,f){var w=null,v=this.c
v.toString
A.ce(w,w,!0,w,new D.eHB(this,d,e,f),v,w,!0,!0,x.H)},
bbF(d,e,f,g,h){var w,v,u,t,s,r,q,p,o=null,n=x.N,m=A.S(n,x.P),l=this.d
l=x.g.a(D.dI(l==null?o:J.t(l,"fast")).h(0,"systems"))
if(l==null)l=B.bQ
l=J.cQ(l,x.f)
w=J.aQ(l.a)
l=l.$ti
v=new A.jZ(w,l.k("jZ<1>"))
u=x.z
l=l.c
while(v.C()){t=l.a(w.gP(w))
s=A.v(J.t(t,"id"))
t=A.a0(t,n,u)
m.n(0,s,t)}r=m.h(0,e)
if(r==null)r=B.cH
q=J.z(r.h(0,"enabled"),!0)
p=r.h(0,"holding")!=null
if(p)n=" \xb7 holding "+A.v(r.h(0,"holding"))
else n=q?" \xb7 running":" \xb7 stopped"
m=A.n(11)
l=A.n(11)
l=A.a([A.p(o,A.V(g,B.c,o,o,o,20),B.f,o,o,new A.o(h,o,o,l,o,o,B.m),o,34,o,o,o,o,o,34)],x.p)
if(q||p){w=p?F.qH:C.cJ
l.push(A.ao(o,A.p(o,o,B.f,o,o,new A.o(w,o,A.K(d.a?C.t4:C.t2,B.r,2),o,o,o,B.a6),o,11,o,o,o,o,o,11),o,o,o,-2,-2,o))}return A.h9(A.dz(o,!0,o,A.aM(!1,m,!0,new A.a4(34,34,new A.am(B.a0,o,B.ad,B.f,l,o),o),o,!0,o,o,o,o,o,o,o,o,o,o,o,new D.eHE(this,e),o,o,o,o,o,o,o),!1,o,o,o,o,!1,o,!1,o,o,o,o,o,o,o,o,o,o,f,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,B.cb,o),o,f+n,o,o,o)},
cK1(d){var w,v,u,t,s,r,q,p,o=null,n=J.a2(d)
if(J.z(n.h(d,"open"),!0)){w=D.dI(n.h(d,"chart")).h(0,"trend")
n=w==null?n.h(d,"trend"):w
v=J.k(n==null?"unknown":n)}else v="waiting"
switch(v){case"up":n=C.fch
break
case"down":n=C.fcS
break
default:n=C.ffr
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
return A.dz(o,o,o,A.p(o,A.A(A.a([A.V(t,p,o,o,o,12),B.un,A.c(s,o,o,o,o,o,o,A.l(o,o,p,o,o,o,o,o,o,o,o,9,o,o,B.E,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],x.p),B.l,o,B.e,B.O,0,o,o),B.f,o,o,new A.o(n,o,o,w,o,o,B.m),o,o,o,o,A_.aoY,o,o,o),!1,o,o,o,o,!1,o,!1,o,o,o,o,o,o,o,o,o,o,"trend "+A.v(s),o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,B.cb,o)},
c8K(d,e,f,g,h){var w,v,u,t,s,r,q=this,p=null
if(f.length<2)return B.bK
w=new A.X(f,new D.eHc(),A.U(f).k("X<1>")).gJ(0)
v=d.a
u=A.c("Today's watchlist",p,p,p,p,p,p,A.l(p,p,v?C.cl:B.c,p,p,p,p,p,p,p,p,14,p,p,B.E,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)
t=w===0
s=t?"NONE TRADED NOW":""+w+" WATCHED NOW"
s=q.aAG(s,t?E.i0:C.cJ)
r=A.hgF(!1,p,!0,new A.D(B.eA,A.V(B.kN,t?E.i0:C.cJ,p,p,p,19),p),!1,p,!0,!1,p,p,p,B.a6,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new D.eHd(q,d,e,h),p,p,p,p,20,p,p,p)
t=x.p
return new A.D(B.eI,A.x(A.a([new A.D(C.aoW,A.A(A.a([u,B.aa,s,B.da,r,B.aW,A.c("tap one",p,p,p,p,p,p,A.l(p,p,v?C.bX:C.bY,p,p,p,p,p,p,p,p,11,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)],t),B.l,p,B.e,B.h,0,p,p),p),new A.a4(p,66,A.hK(B.f,q.crk(B.d.bl(f,new D.eHe(g))),new D.eHf(q,f,g,h,d),f.length,p,p,B.aK,new D.eHg(),!1),p),B.at],t),B.B,p,B.e,B.h,0,B.p),p)},
bLr(d,e,f){var w,v,u,t,s,r,q=this,p=null,o=D.bFa(e),n=o.length
if(n<2)return q.a0R(d,new A.a4(p,120,A.at(A.c(y.b,p,p,p,p,p,p,A.l(p,p,d.a?C.bX:C.bY,p,p,p,p,p,p,p,p,p,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p),p))
w=B.d.fB(o,Math.max(0,n-q.z))
v=f==null||x.f.b(f.h(0,"option"))?p:D.c1(f.h(0,"entryPrice"))
n=x.p
u=A.a([],n)
for(t=0;t<3;++t){s=C.coa[t]
if(s<=12)r="1H"
else r=s<=24?"2H":"4H"
B.d.u(u,A.a([q.cAf(d,r,q.z===s,new D.eH4(q,s)),B.bb],n))}u.push(B.aW)
u.push(q.cK2(e))
u.push(B.bb)
u.push(q.b8U(d,"Trend lines",q.ax,new D.eH5(q),N.xt))
u=A.a([A.A(u,B.l,p,B.e,B.h,0,p,p),B.R,new D.a_A(w,d,v,q.ax,D.c1(J.t(e,"price")),p)],n)
if(q.ax){r=A.a([q.ays(d,B.bB,"Fast line (45 min)"),q.ays(d,B.b_,"Slow line (1 h 45 min)")],n)
if(v!=null)r.push(q.ays(d,F.qH,"Your pretend buy"))
B.d.u(u,A.a([B.M,A.bZ(B.fU,r,B.br,p,4,14)],n))}return q.aAD(d,A.x(u,B.l,p,B.e,B.h,0,B.p),B.x1)},
cK2(d){var w,v,u,t,s,r,q=null,p=D.dI(J.t(d,"chart")).h(0,"trend")
switch(J.k(p==null?"unknown":p)){case"up":p=C.fed
break
case"down":p=C.fek
break
case"flat":p=C.fcK
break
default:p=C.fdC
break}w=p.a
v=q
u=q
t=p.b
s=p.c
u=s
v=t
r=w
p=A.n(10)
return A.h9(A.dz(q,q,q,A.p(q,A.V(v,B.c,q,q,q,20),B.f,q,q,new A.o(r,q,q,p,q,q,B.m),q,32,q,q,q,q,q,32),!1,q,q,q,q,!1,q,!1,q,q,q,q,q,q,q,q,q,q,u,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,B.cb,q),q,u,q,B.hjn,q)},
bI4(a9,b0,b1,b2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=null,e="equity",d=J.a2(b0),a0=D.dI(d.h(b0,"today")),a1=D.dI(d.h(b0,"record")),a2=D.dI(d.h(b0,"ticket")),a3=a1.h(0,"pnlSum")!=null?D.c1(a1.h(0,"pnlSum")):D.c1(b1.h(0,"totalPnl")),a4=D.c1(a0.h(0,"day_pnl")),a5=x.f,a6=a5.b(b1.h(0,"shadow"))?D.dI(b1.h(0,"shadow")):f,a7=a6!=null,a8=0
if(a7){w=D.dI(b2.h(0,"held"))
if(w.h(0,"pnl")!=null)a8=D.c1(w.h(0,"pnl"))
else if(!a5.b(a6.h(0,"option"))){v=D.c1(J.t(B.d.dr(D.fC7(b2),new D.eGT(a6),new D.eGU()),"price"))
if(v>0){a5=D.c1(a6.h(0,"qty"))
u=a6.h(0,"mult")==null?1:D.c1(a6.h(0,"mult"))
a8=a5*u*(v-D.c1(a6.h(0,"entryPrice")))}}}t=D.dI(a1.h(0,"newRules"))
s=t.h(0,"winRatePct")
r=D.c1(b2.h(0,e))
q=D.dI(d.h(b0,"fast"))
p=D.c1(q.h(0,"closed"))+D.c1(q.h(0,"open"))
o=a3+a8+p
d=A.n(26)
a5=A.a([new A.aa(0,B.H,B.ir.j(0.3),B.eU,24)],x.V)
u=x.p
n=A.A(A.a([C.aZy],u),B.l,f,B.e,B.h,0,f,f)
n=A.a([n,B.at,new A.dc(B.dp,B.a5,B.f,A.c(b2.h(0,e)==null?"\u2014":D.ej(r+a3+a8+p,!0,!1),f,f,f,f,f,f,C.fFb,f,f,f),f)],u)
if(b2.h(0,e)!=null){m=o>=0?C.arm:B.Qi
l=o>0
if(l)k=C.cJ
else k=o<0?C.d9:B.ab
k=A.V(m,k,f,f,f,f)
m=D.ej(o,!0,!0)
if(p!==0)a7=" (all systems)"
else a7=a7?" (incl. the open one)":""
if(l)l=C.cJ
else l=o<0?C.d9:B.ab
n.push(A.A(A.a([k,A.c(m+" from trades"+a7,f,f,f,f,f,f,A.l(f,f,l,f,f,f,f,f,f,f,f,12.5,f,f,B.E,f,f,!0,f,f,f,f,f,f,f,f),f,f,f)],u),B.l,f,B.e,B.h,0,f,f))}n.push(B.bs)
n.push(A.c("Alpaca account "+D.ej(r,!0,!1)+" (unchanged, no orders are sent) \xb7 $"+B.i.a5(D.c1(a2.h(0,"amount")),0)+" a trade",f,f,f,f,f,f,O.Fz,f,f,f))
n.push(B.aB)
a7=D.ej(a4,!0,!0)
if(a4>0)m=C.cJ
else m=a4<0?C.d9:B.c
m=A.E(g.AQ("Today",a7,m),1)
a7=D.ej(a3,!0,!0)
if(a3>0)l=C.cJ
else l=a3<0?C.d9:B.c
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
l=A.E(g.AQ("Daily stop","-$"+B.i.a5(D.c1(l==null?50:l),0),B.c),1)
k=a2.h(0,"totalBrakeUsd")
n.push(g.aRh("RESULTS AND LIMITS",A.a([a7,B.M,A.A(A.a([m,B.aa,l,B.aa,A.E(g.AQ("Total brake","-$"+B.i.a5(D.c1(k==null?100:k),0),B.c),1)],u),B.l,f,B.e,B.h,0,f,f)],u)))
n.push(B.R)
a7=a2.h(0,"amount")
a7=B.i.a5(D.c1(a7==null?100:a7),0)
m=J.z(a2.h(0,"kind"),"crypto")?"a coin":"a stock"
m=A.E(g.AQ("Buys","$"+a7+" of "+m,B.c),1)
a7=a2.h(0,"takeProfitUsd")
a7=A.E(g.AQ("Take profit","+$"+B.i.a5(D.c1(a7==null?50:a7),0),C.cJ),1)
l=a2.h(0,"stopLossUsd")
a7=A.A(A.a([m,B.aa,a7,B.aa,A.E(g.AQ("Stop loss","-$"+B.i.a5(D.c1(l==null?50:l),0),C.d9),1)],u),B.l,f,B.e,B.h,0,f,f)
m=B.c.j(0.1)
l=A.n(14)
k=s==null
if(k)j="No $100 trades yet"
else{j=B.i.a5(D.c1(s),0)
i=t.h(0,"wins")
i=A.v(i==null?0:i)
h=t.h(0,"trades")
j=j+"%  \xb7  "+i+" won of "+A.v(h==null?0:h)}if(k)k=B.c
else k=D.c1(s)>=50?C.cJ:C.d9
n.push(g.aRh("EACH TRADE",A.a([a7,B.M,A.p(f,A.A(A.a([A.E(A.x(A.a([C.fWu,B.bs,A.c(j,f,f,f,f,f,f,A.l(f,f,k,f,f,f,f,f,f,f,f,16,f,f,B.E,f,f,!0,f,f,f,f,f,f,f,f),f,f,f)],u),B.B,f,B.e,B.h,0,B.p),1),C.hc7],u),B.l,f,B.e,B.h,0,f,f),B.f,f,f,new A.o(m,f,f,l,f,f,B.m),f,f,f,f,B.ep,f,f,1/0)],u)))
return A.p(f,A.x(n,B.B,f,B.e,B.h,0,B.p),B.f,f,f,new A.o(f,f,f,d,a5,C.auZ,B.m),f,f,f,B.dU,B.f9,f,f,f)},
aBk(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l=null,k="brakeNote",j=J.a2(a3),i=D.dI(j.h(a3,"pace")),h=D.dI(j.h(a3,"todayStats")),g=D.dI(j.h(a3,"market")),f=i.h(0,"target"),e=B.i.K(D.c1(f==null?20:f)),d=B.i.K(D.c1(i.h(0,"trades"))),a0=B.i.K(D.c1(i.h(0,"expected"))),a1=D.c1(i.h(0,"deficit"))>0
f=d>=e
w=f||!a1?C.cJ:E.i0
v=x.g
u=v.a(i.h(0,"lines"))
if(u==null)u=B.bQ
t=x.N
u=J.b8(u,new D.eHi(),t)
s=A.B(u,u.$ti.k("aj.E"))
v=v.a(g.h(0,"cryptoDropped"))
if(v==null)v=B.bQ
t=J.b8(v,new D.eHj(),t)
r=A.B(t,t.$ti.k("aj.E"))
q=D.c1(h.h(0,"pnl"))
v=i.h(0,"dayNote")
p=J.k(v==null?"":v)
v=a2.a
u=A.E(A.c("Trades today: "+d+" of "+e,l,l,l,l,l,l,A.l(l,l,v?C.cl:B.c,l,l,l,l,l,l,l,l,20,l,l,B.u,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),1)
if(f)f="TARGET REACHED"
else f=a1?""+B.i.K(D.c1(i.h(0,"deficit")))+" BEHIND":"ON PACE"
t=x.p
f=A.A(A.a([u,this.aAG(f,w)],t),B.l,l,B.e,B.h,0,l,l)
u=i.h(0,"maxHold")
u=B.i.K(D.c1(u==null?120:u))
o=i.h(0,"topN")
u=A.c("Expected by now: "+a0+" \xb7 max hold now "+u+" min \xb7 top "+B.i.K(D.c1(o==null?3:o))+" valid entries considered",l,l,l,l,l,l,A.l(l,l,w,l,l,l,l,l,l,l,l,12,l,l,B.E,l,1.3,!0,l,l,l,l,l,l,l,l),l,l,l)
o=A.cf(new D.eHk(a2,d,e,w,a0))
n=i.h(0,"checkpoints")
n=A.v(n==null?"":n)
f=A.a([f,B.bs,u,B.M,o,B.M,A.c(n,l,l,l,l,l,l,A.l(l,l,v?C.cl:B.c,l,l,l,l,l,l,l,l,11,l,l,B.N,l,1.3,!0,l,l,l,l,l,l,l,l),l,l,l)],t)
for(u=s.length,m=0;m<s.length;s.length===u||(0,A.I)(s),++m)f.push(new A.D(B.r5,A.c(s[m],l,l,l,l,l,l,C.fLT,l,l,l),l))
if(p.length!==0)f.push(new A.D(B.kL,A.c(p,l,l,l,l,l,l,C.fD8,l,l,l),l))
f.push(B.M)
if(h.h(0,"closed")==null||D.c1(h.h(0,"closed"))===0)u="No closed trades today yet"
else{u=h.h(0,"wins")
u=A.v(u==null?0:u)
o=h.h(0,"losses")
u="Today: "+u+" won, "+A.v(o==null?0:o)+" lost ("+B.i.a5(D.c1(h.h(0,"winRatePct")),0)+"%)"}u=A.E(A.c(u,l,l,l,l,l,l,A.l(l,l,v?C.cl:B.c,l,l,l,l,l,l,l,l,12.5,l,l,B.E,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),1)
o=D.ej(q,!0,!0)
if(q>0)n=C.cJ
else if(q<0)n=C.d9
else n=v?C.cl:B.c
f.push(A.A(A.a([u,A.c(o,l,l,l,l,l,l,A.l(l,l,n,l,l,l,l,l,l,l,l,14,l,l,B.u,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)],t),B.l,l,B.e,B.h,0,l,l))
f.push(B.aj)
n=g.h(0,"cryptoCount")
u=A.v(n==null?"?":n)
o=J.z(g.h(0,"cryptoFromAlpaca"),!1)?" (Alpaca's list could not be read, using the main ones for now)":" (every tradable USD pair on Alpaca)"
n=J.z(g.h(0,"weekend"),!0)?"":" plus the 10 stocks in market hours"
f.push(A.c("Watching "+u+" crypto pairs around the clock"+o+n+".",l,l,l,l,l,l,A.l(l,l,v?C.bX:C.bY,l,l,l,l,l,l,l,l,11.5,l,l,l,l,1.3,!0,l,l,l,l,l,l,l,l),l,l,l))
if(r.length!==0)f.push(A.c("Dropped today (no longer tradable on Alpaca): "+B.d.aL(r,", "),l,l,l,l,l,l,C.fL1,l,l,l))
if(j.h(a3,k)!=null){j=A.v(j.h(a3,k))
B.d.u(f,A.a([B.aj,A.c(j,l,l,l,l,l,l,A.l(l,l,v?C.bX:C.bY,l,l,l,l,l,l,l,l,11,l,l,l,l,1.3,!0,l,l,l,l,l,l,l,l),l,l,l)],t))}return this.a0R(a2,A.x(f,B.B,l,B.e,B.h,0,B.p))},
aRh(d,e){var w=null,v=B.v.j(0.14),u=A.n(18),t=A.K(B.c.j(0.16),B.r,1),s=A.a([new A.D(B.aoP,A.c(d,w,w,w,w,w,w,C.fGd,w,w,w),w)],x.p)
B.d.u(s,e)
return A.p(w,A.x(s,B.B,w,B.e,B.h,0,B.p),B.f,w,w,new A.o(v,w,t,u,w,w,B.m),w,w,w,w,B.bT,w,w,1/0)},
AQ(d,e,f){var w=null,v=B.c.j(0.1),u=A.n(14)
return A.p(w,A.x(A.a([A.c(d,w,1,B.a2,w,w,w,B.LQ,w,w,w),B.bs,new A.dc(B.dp,B.a5,B.f,A.c(e,w,w,w,w,w,w,A.l(w,w,f,w,w,w,w,w,w,w,w,15,w,w,B.E,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w)],x.p),B.B,w,B.e,B.h,0,B.p),B.f,w,w,new A.o(v,w,w,u,w,w,B.m),w,w,w,w,B.anm,w,w,w)},
crM(a9,b0,b1,b2,b3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=this,a1=null,a2="price",a3=D.c1(b0.h(0,"entryPrice")),a4=D.c1(b0.h(0,"qty")),a5=b0.h(0,"mult")==null?1:D.c1(b0.h(0,"mult")),a6=x.f.b(b0.h(0,"option"))?D.dI(b0.h(0,"option")):a1,a7=J.a2(b1),a8=J.z(b0.h(0,"symbol"),a7.h(b1,"asset"))
if(b3.h(0,a2)!=null)w=D.c1(b3.h(0,a2))
else w=a6==null&&a8?D.c1(a7.h(b1,a2)):a3
a7=a4*a5
v=a7*a3
u=a7*w
t=u-v
s=a3===0?0:(w-a3)/a3*100
r=t>=0
q=b2.h(0,"takeProfitUsd")
p=D.c1(q==null?50:q)
q=b2.h(0,"stopLossUsd")
o=D.c1(q==null?50:q)
n=B.i.D((t+o)/(p+o),0,1)
m=a7===0?0:1/a7
l=a3-o*m
a7=a9.a
q=x.p
k=A.A(A.a([A.c("Your pretend position",a1,a1,a1,a1,a1,a1,A.l(a1,a1,a7?C.cl:B.c,a1,a1,a1,a1,a1,a1,a1,a1,16,a1,a1,B.E,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1),B.aW,a0.aAG("OPEN",C.cJ)],q),B.l,a1,B.e,B.h,0,a1,a1)
j=D.ej(t,!0,!0)
j=A.c(j,a1,a1,a1,a1,a1,a1,A.l(a1,a1,r?C.cJ:C.d9,a1,a1,a1,a1,a1,a1,a1,a1,34,a1,a1,B.E,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1)
i=s>=0?"+":""
h=B.i.a5(s,2)
j=A.A(A.a([j,B.aa,new A.D(B.eI,A.c(i+h+"%",a1,a1,a1,a1,a1,a1,A.l(a1,a1,r?C.cJ:C.d9,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,B.E,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1),a1)],q),B.dt,a1,B.e,B.h,0,a1,a1)
i=r?"You would be winning right now":"You would be losing right now"
k=A.a([k,B.af,j,A.c(i,a1,a1,a1,a1,a1,a1,A.l(a1,a1,a7?C.bX:C.bY,a1,a1,a1,a1,a1,a1,a1,a1,12.5,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1),B.aB],q)
j=a6!=null
if(j){i=a7?C.tm:C.tn
h=A.n(16)
g=A.c("1 SPY call option",a1,a1,a1,a1,a1,a1,A.l(a1,a1,a7?C.bX:C.bY,a1,a1,a1,a1,a1,a1,a1,a1,11.5,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1)
f=D.ej(D.c1(a6.h(0,"strike")),!0,!1)
e=D.aQQ(a6.h(0,"expiry"))
f=A.c("Strike "+f+" \xb7 expires "+e,a1,a1,a1,a1,a1,a1,A.l(a1,a1,a7?C.cl:B.c,a1,a1,a1,a1,a1,a1,a1,a1,15,a1,a1,B.E,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1)
e=D.ej(a3,!0,!1)
d=D.ej(v,!0,!1)
B.d.u(k,A.a([A.p(a1,A.x(A.a([g,B.bs,f,B.bs,A.c("Premium paid "+e+" a share x 100 = "+d,a1,a1,a1,a1,a1,a1,A.l(a1,a1,a7?C.bX:C.bY,a1,a1,a1,a1,a1,a1,a1,a1,11.5,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1)],q),B.B,a1,B.e,B.h,0,B.p),B.f,a1,a1,new A.o(i,a1,a1,h,a1,a1,B.m),a1,a1,a1,a1,B.bg,a1,a1,1/0),B.M],q))}i=A.E(a0.aAH(a9,"You put in",D.ej(v,!0,!1)),1)
h=D.ej(u,!0,!1)
k.push(A.A(A.a([i,B.aa,A.E(a0.aAI(a9,"Worth now",h,r?C.cJ:C.d9),1)],q),B.l,a1,B.e,B.h,0,a1,a1))
k.push(B.M)
i=j?"Premium paid":"Bought at"
i=A.E(a0.aAH(a9,i,D.ej(a3,!0,!1)),1)
if(j){j=J.z(b3.h(0,"priced"),!1)?"no price yet":D.ej(w,!0,!1)
j=a0.aAI(a9,"Premium now",j,r?C.cJ:C.d9)}else j=a0.aAH(a9,"Amount",B.i.a5(a4,a4<0.01?6:4)+" "+A.v(b0.h(0,"symbol")))
k.push(A.A(A.a([i,B.aa,A.E(j,1)],q),B.l,a1,B.e,B.h,0,a1,a1))
k.push(B.aO)
k.push(A.cf(new D.eHn(a9,n)))
k.push(B.aj)
j=D.ej(o,!0,!1)
k.push(A.A(A.a([A.E(A.c("Stop loss\n-"+j+" \xb7 at "+D.ej(l<0?0:l,!0,!1),a1,a1,a1,a1,a1,a1,C.fLa,a1,a1,a1),1),A.E(A.c("Take profit\n+"+D.ej(p,!0,!1)+" \xb7 at "+D.ej(a3+p*m,!0,!1),a1,a1,a1,a1,a1,a1,C.fJI,B.e0,a1,a1),1)],q),B.l,a1,B.e,B.h,0,a1,a1))
k.push(B.aj)
q=D.hm_(b0.h(0,"entryAt"))
k.push(A.c("Bought "+q,a1,a1,a1,a1,a1,a1,A.l(a1,a1,a7?C.bX:C.bY,a1,a1,a1,a1,a1,a1,a1,a1,11.5,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1))
return a0.a0R(a9,A.x(k,B.B,a1,B.e,B.h,0,B.p))},
aAE(d,e){var w,v,u,t=this,s=null,r=J.z(e.h(0,"enabled"),!0)&&!J.z(e.h(0,"brakePaused"),!0),q=r?C.d9:C.cJ
q=A.bp(q,s,s,s,s,s,s,s,new A.b9(A.n(999),B.a1),s,s,s)
w=t.r?s:new D.eH6(t,r)
v=A.V(r?B.vC:B.fN,s,s,s,s,s)
q=A.E(new A.a4(s,52,A.db(v,s,A.c(r?"Stop agent":"Start agent",s,s,s,s,s,s,B.mM,s,s,s),w,q),s),3)
w=d.a
v=w?C.cl:B.c
u=w?C.oL:C.oG
w=w?B.c.j(0.92):C.im
u=A.dk(s,s,w,s,s,s,s,s,s,v,s,s,s,s,new A.b9(A.n(999),B.a1),new A.ax(u,1.5,B.r,-1),s,s,s,s)
w=t.r
v=w?s:t.gczf()
return new A.D(B.dU,A.A(A.a([q,B.ar,A.E(new A.a4(s,52,A.eq(w?B.Li:C.c5c,s,C.hek,v,u),s),2)],x.p),B.l,s,B.e,B.h,0,s,s),s)},
bHU(d,e,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i="every 5 min",h=J.z(e.h(0,"enabled"),!0)&&!J.z(e.h(0,"brakePaused"),!0),g=e.h(0,"lastTickAt"),f=A.bg(A.v(g==null?"":g))
if(h)w=C.cJ
else w=d.a?C.bX:C.bY
g=x.f
v=g.b(e.h(0,"shadow"))?D.dI(e.h(0,"shadow")):j
u=x.g.a(J.t(a0,"trades"))
g=J.cQ(u==null?B.bQ:u,g)
t=A.B(g,g.$ti.k("M.E"))
s=t.length===0?j:D.dI(B.d.gH(t))
g=v!=null
r=g?"Current trade from":"Last trade from"
if(g)q=A.v(v.h(0,"symbol"))
else if(s==null)q="no trade yet"
else{g=A.v(s.h(0,"asset"))
u=J.z(s.h(0,"decision"),"would buy")?"bought":"sold "+D.ej(D.c1(D.dI(s.h(0,"details")).h(0,"pnl")),!0,!0)
u=g+" ("+u+")"
q=u}g=new D.eGS(d)
u=d.a
p=u?B.c.j(0.92):C.im
o=A.n(20)
n=A.K(w.j(0.35),B.r,1)
m=w.j(0.15)
l=A.n(9)
l=A.p(j,A.V(M.Qj,w,j,j,j,17),B.f,j,j,new A.o(m,j,j,l,j,j,B.m),j,28,j,j,j,j,j,28)
m=h?"Trades are automatic":"Agent is stopped"
m=A.E(A.c(m,j,j,j,j,j,j,A.l(j,j,u?C.cl:B.c,j,j,j,j,j,j,j,j,13.5,j,j,B.E,j,j,!0,j,j,j,j,j,j,j,j),j,j,j),1)
k=x.p
m=A.a([A.A(A.a([l,B.aa,m,A.c("Check now only looks",j,j,j,j,j,j,A.l(j,j,u?C.bX:C.bY,j,j,j,j,j,j,j,j,10.5,j,j,j,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)],k),B.l,j,B.e,B.h,0,j,j),B.R],k)
if(h)B.d.u(m,A.a([A.A(A.a([g.$2("Last check",f==null?"not yet":D.LG(D.Sr(f))+" ET"),B.bb,g.$2("Next buy check",D.hIJ())],k),B.l,j,B.e,B.h,0,j,j),B.aj,A.A(A.a([g.$2("Checks every market",i),B.bb,g.$2("Open trade exits",i)],k),B.l,j,B.e,B.h,0,j,j),B.aj],k))
else B.d.u(m,A.a([A.c("It makes no trades. Press Start and it checks every market on the day's list every 5 minutes by itself.",j,j,j,j,j,j,A.l(j,j,u?C.bX:C.bY,j,j,j,j,j,j,j,j,12,j,j,j,j,1.35,!0,j,j,j,j,j,j,j,j),j,j,j),B.M],k))
m.push(A.A(A.a([g.$2(r,q)],k),B.l,j,B.e,B.h,0,j,j))
return A.p(j,A.x(m,B.B,j,B.e,B.h,0,B.p),B.f,j,j,new A.o(p,j,n,o,j,j,B.m),j,j,j,B.dU,B.bg,j,j,j)},
cJI(b4,b5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8=this,a9=null,b0="entryPrice",b1="exitPrice",b2="outValue",b3=x.g.a(J.t(b5,"trades"))
if(b3==null)b3=B.bQ
w=x.f
b3=J.cQ(b3,w)
b3=A.cy(b3,new D.eHM(),b3.$ti.k("M.E"),x.P)
v=A.B(b3,A.a3(b3).k("M.E"))
b3=b4.a
u=x.p
t=A.a([A.c("Pretend trades",a9,a9,a9,a9,a9,a9,A.l(a9,a9,b3?C.cl:B.c,a9,a9,a9,a9,a9,a9,a9,a9,16,a9,a9,B.E,a9,a9,!0,a9,a9,a9,a9,a9,a9,a9,a9),a9,a9,a9),B.M],u)
if(v.length===0){s=A.V(B.h0,b3?C.bX:C.bY,a9,a9,a9,a9)
t.push(new A.D(B.cq,A.A(A.a([s,B.ar,A.E(A.c("No trades yet. Each buy shows what was bought (for a SPY option: strike, expiry and premium) and what was put in; each sell shows the entry and exit price and the win or loss in dollars.",a9,a9,a9,a9,a9,a9,A.l(a9,a9,b3?C.bX:C.bY,a9,a9,a9,a9,a9,a9,a9,a9,12.5,a9,a9,a9,a9,1.3,!0,a9,a9,a9,a9,a9,a9,a9,a9),a9,a9,a9),1)],u),B.l,a9,B.e,B.h,0,a9,a9),a9))}s=J.aQ(a8.y?v:A.cU(v,0,A.dA(4,"count",x.S),A.U(v).c))
r=x.N
q=x.z
while(s.C()){p=s.gP(s)
o=J.a2(p)
n=J.z(o.h(p,"decision"),"would buy")
m=o.h(p,"details")
l=w.b(m)?A.a0(m,r,q):A.S(r,q)
if(w.b(l.h(0,"option"))){m=l.h(0,"option")
k=w.b(m)?A.a0(m,r,q):A.S(r,q)}else k=a9
m=k!=null
if(m){j=k.h(0,"strike")
if(!(typeof j=="number")){j=A.cv(A.v(j==null?"":j))
if(j==null)j=0}i="SPY "+D.ej(j,!0,!1)+" call"}else{j=o.h(p,"asset")
i=J.k(j==null?"":j)}if(l.h(0,"amount")==null)h=50
else{j=l.h(0,"amount")
if(typeof j=="number")h=j
else{j=A.cv(A.v(j==null?"":j))
if(j==null)j=0
h=j}}g=l.h(0,"qty")
if(!(typeof g=="number")){j=A.cv(A.v(g==null?"":g))
g=j==null?0:j}f=l.h(0,"pnl")
if(!(typeof f=="number")){j=A.cv(A.v(f==null?"":f))
f=j==null?0:j}e=l.h(0,b0)!=null
d=l.h(0,b0)
if(!(typeof d=="number")){j=A.cv(A.v(d==null?"":d))
d=j==null?0:j}if(l.h(0,b1)==null){j=o.h(p,"price")
if(typeof j=="number")a0=j
else{j=A.cv(A.v(j==null?"":j))
if(j==null)j=0
a0=j}}else{j=l.h(0,b1)
if(typeof j=="number")a0=j
else{j=A.cv(A.v(j==null?"":j))
if(j==null)j=0
a0=j}}if(m)if(n)a1="expires "+D.aQQ(k.h(0,"expiry"))+" \xb7 premium "+D.ej(d,!0,!1)+" x 100"
else{m=D.ej(d,!0,!1)
j=D.ej(a0,!0,!1)
a2=o.h(p,"reason")
a2=J.k(a2==null?"":a2)
a3=B.a.cd(a2,"(")
a1="premium "+m+" to "+j+" \xb7 "+B.a.i(a3>0?B.a.aw(a2,0,a3):a2)}else if(n){if(g===0)m=""
else m=B.i.a5(g,g<0.01?6:4)+" at "
if(e)j=d
else{j=o.h(p,"price")
if(!(typeof j=="number")){j=A.cv(A.v(j==null?"":j))
if(j==null)j=0}}a1=m+D.ej(j,!0,!1)}else{m=e?D.ej(d,!0,!1)+" to ":"at "
j=D.ej(a0,!0,!1)
a2=o.h(p,"reason")
a2=J.k(a2==null?"":a2)
a3=B.a.cd(a2,"(")
a1=m+j+" \xb7 "+B.a.i(a3>0?B.a.aw(a2,0,a3):a2)}a4=f>=0
if(n)a5=B.cf
else a5=a4?C.cJ:C.d9
m=b3?C.oL:C.oG
j=a5.j(0.14)
a2=new A.aP(13,13)
j=A.p(a9,A.V(n?B.tR:B.rj,a5,a9,a9,a9,20),B.f,a9,a9,new A.o(j,a9,a9,new A.bb(a2,a2,a2,a2),a9,a9,B.m),a9,40,a9,a9,a9,a9,a9,40)
a2=n?"Bought":"Sold"
a6=b3?C.cl:B.c
a2=A.c(a2+" "+i,a9,a9,a9,a9,a9,a9,new A.G(!0,a6,a9,a9,a9,a9,14,B.E,a9,a9,a9,a9,a9,a9,a9,a9,a9,a9,a9,a9,a9,a9,a9,a9,a9,a9),a9,a9,a9)
a6=b3?C.bX:C.bY
a6=A.c(a1,a9,2,B.a2,a9,a9,a9,new A.G(!0,a6,a9,a9,a9,a9,11.5,a9,a9,a9,a9,a9,a9,a9,a9,a9,a9,a9,a9,a9,a9,a9,a9,a9,a9,a9),a9,a9,a9)
p=o.h(p,"et_time")
p=J.k(p==null?"":p)
o=b3?C.bX:C.bY
p=A.x(A.a([a2,B.bs,a6,A.c(p,a9,a9,a9,a9,a9,a9,new A.G(!0,o,a9,a9,a9,a9,10.5,a9,a9,a9,a9,a9,a9,a9,a9,a9,a9,a9,a9,a9,a9,a9,a9,a9,a9,a9),a9,a9,a9)],u),B.B,a9,B.e,B.h,0,B.p)
if(n)o="-"+D.ej(h,!0,!1)
else{if(l.h(0,b2)==null)o=h+f
else{o=l.h(0,b2)
if(!(typeof o=="number")){o=A.cv(A.v(o==null?"":o))
if(o==null)o=0}}o="+"+D.ej(o,!0,!1)}a2=b3?C.cl:B.c
o=A.a([A.c(o,a9,a9,a9,a9,a9,a9,new A.G(!0,a2,a9,a9,a9,a9,14,B.E,a9,a9,a9,a9,a9,a9,a9,a9,a9,a9,a9,a9,a9,a9,a9,a9,a9,a9),a9,a9,a9)],u)
if(!n){a2=D.ej(f,!0,!0)
if(l.h(0,"pct")==null)a6=""
else{a6=l.h(0,"pct")
if(!(typeof a6=="number")){a6=A.cv(A.v(a6==null?"":a6))
if(a6==null)a6=0}a6=a6>=0?"+":""
a7=l.h(0,"pct")
if(!(typeof a7=="number")){a7=A.cv(A.v(a7==null?"":a7))
if(a7==null)a7=0}a7=" ("+a6+B.i.a5(a7,2)+"%)"
a6=a7}a7=a4?C.cJ:C.d9
o.push(A.c(a2+a6,a9,a9,a9,a9,a9,a9,new A.G(!0,a7,a9,a9,a9,a9,12,B.E,a9,a9,a9,a9,a9,a9,a9,a9,a9,a9,a9,a9,a9,a9,a9,a9,a9,a9),a9,a9,a9))}if(n){a2=b3?C.bX:C.bY
o.push(A.c("put in",a9,a9,a9,a9,a9,a9,new A.G(!0,a2,a9,a9,a9,a9,11,a9,a9,a9,a9,a9,a9,a9,a9,a9,a9,a9,a9,a9,a9,a9,a9,a9,a9,a9),a9,a9,a9))}t.push(A.p(a9,new A.c2(B.aK,B.e,B.h,B.l,a9,B.p,a9,0,A.a([j,B.bc,new A.bu(1,B.b9,p,a9),B.aa,A.x(o,B.dt,a9,B.e,B.h,0,B.p)],u),a9),B.f,a9,a9,new A.o(a9,a9,new A.bE(B.a1,B.a1,new A.ax(m,1,B.r,-1),B.a1),a9,a9,a9,B.m),a9,a9,a9,a9,B.jW,a9,a9,a9))}b3=v.length
if(b3>4)t.push(A.at(A.bM(!1,A.c(a8.y?"Show less":"Show all ("+b3+")",a9,a9,a9,a9,a9,a9,a9,a9,a9,a9),a9,a9,!0,a9,a9,a9,new D.eHN(a8),a9,a9),a9,a9,a9))
return a8.a0R(b4,A.x(t,B.B,a9,B.e,B.h,0,B.p))},
bF2(d){var w,v,u=this,t=null,s=u.x,r=u.e
r=s?r:J.E7(r,4).dk(0)
s=d.a
w=A.c("Agent activity",t,t,t,t,t,t,A.l(t,t,s?C.cl:B.c,t,t,t,t,t,t,t,t,16,t,t,B.E,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)
v=x.p
v=A.a([A.A(A.a([w,B.aW,A.c("newest first",t,t,t,t,t,t,A.l(t,t,s?C.bX:C.bY,t,t,t,t,t,t,t,t,11,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],v),B.l,t,B.e,B.h,0,t,t),B.aj],v)
if(J.cw(u.e))v.push(new A.D(B.f8,A.c("Nothing yet. A new line appears with every automatic check (every 5 minutes).",t,t,t,t,t,t,A.l(t,t,s?C.bX:C.bY,t,t,t,t,t,t,t,t,12.5,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),t))
for(s=J.aQ(r);s.C();)v.push(u.c7w(d,s.gP(s)))
if(J.ad(u.e)>4){if(u.x)s=u.w?"Show older":"Show less"
else s="Show all"
v.push(A.at(A.bM(!1,A.c(s,t,t,t,t,t,t,t,t,t,t),t,t,!0,t,t,t,new D.eGR(u),t,t),t,t,t))}return u.a0R(d,A.x(v,B.B,t,B.e,B.h,0,B.p))},
c7w(d,e){var w,v,u,t,s,r=null,q="price",p=J.a2(e),o=p.h(e,"decision"),n=J.k(o==null?"":o)
A:{if("would buy"===n){o=C.cJ
break A}if("would sell"===n){o=B.bB
break A}if("hold"===n){o=B.b_
break A}if("day start"===n||"day end"===n){o=B.cf
break A}if("start"===n){o=C.cJ
break A}if("stop"===n){o=C.d9
break A}if(J.z(p.h(e,"kind"),"error"))o=C.d9
else o=d.a?C.bX:C.bY
break A}w=p.h(e,"fast_ma")!=null&&p.h(e,"slow_ma")!=null
v=A.p(r,r,B.f,r,r,new A.o(o,r,r,r,r,r,B.a6),r,8,r,H.P4,r,r,r,8)
u=n==="hold"?"Still holding":D.hGd(n)
t=x.p
o=A.a([A.c(u,r,r,r,r,r,r,A.l(r,r,o,r,r,r,r,r,r,r,r,12.5,r,r,B.E,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],t)
if(J.z(D.dI(p.h(e,"details")).h(0,"by"),"cron"))B.d.u(o,A.a([B.bb,A.c("automatic",r,r,r,r,r,r,A.l(r,r,d.a?C.bX:C.bY,r,r,r,r,r,r,r,r,10,r,r,B.N,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],t))
o.push(B.aW)
u=p.h(e,"et_time")
u=D.hnS(J.k(u==null?"":u))
s=d.a
o.push(A.c(u,r,r,r,r,r,r,A.l(r,r,s?C.bX:C.bY,r,r,r,r,r,r,r,r,10.5,r,r,r,r,r,!0,r,r,r,r,r,r,r,r),r,r,r))
o=A.A(o,B.l,r,B.e,B.h,0,r,r)
u=p.h(e,"reason")
u=D.hGd(J.k(u==null?"":u))
o=A.a([o,A.c(u,r,r,r,r,r,r,A.l(r,r,s?C.cl:B.c,r,r,r,r,r,r,r,r,12.5,r,r,r,r,1.3,!0,r,r,r,r,r,r,r,r),r,r,r)],t)
if(p.h(e,q)!=null||w){u=A.a([],x.s)
if(p.h(e,"asset")!=null&&p.h(e,q)!=null)u.push(A.v(p.h(e,"asset"))+" "+D.ej(D.c1(p.h(e,q)),!0,!1))
if(w)u.push("fast "+B.i.a5(D.c1(p.h(e,"fast_ma")),2)+" \xb7 slow "+B.i.a5(D.c1(p.h(e,"slow_ma")),2))
p=B.d.aL(u,"  \xb7  ")
o.push(A.c(p,r,r,r,r,r,r,A.l(r,r,s?C.bX:C.bY,r,r,r,r,r,r,r,r,10.5,r,r,r,r,r,!0,r,r,r,r,r,r,r,r),r,r,r))}return new A.D(X.HB,A.A(A.a([v,B.ar,A.E(A.x(o,B.B,r,B.e,B.h,0,B.p),1)],t),B.B,r,B.e,B.h,0,r,r),r)},
cyb(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=this.c
k.toString
k=A.Q(k).aH1(B.L)
w=d.a
v=w?C.cl:B.c
u=w?C.bX:C.bY
t=A.V(C.bVT,B.b_,l,l,l,l)
s=x.p
r=A.A(A.a([new A.d1(1,B.cg,A.c("The rules it follows",l,l,l,l,l,l,A.l(l,l,w?C.cl:B.c,l,l,l,l,l,l,l,l,14.5,l,l,B.E,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),l),B.aa,A.aA(l,A.p(l,C.fol,B.f,l,l,new A.o(l,l,l,A.n(999),l,H.tX,B.m),l,l,l,l,B.hm,l,l,l),B.y,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,this.gclL(),l,l,l,l,l,l,!1,B.a4)],s),B.l,l,B.e,B.h,0,l,l)
q=A.c("Read-only, set in the code",l,l,l,l,l,l,A.l(l,l,w?C.bX:C.bY,l,l,l,l,l,l,l,l,11.5,l,l,l,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)
p=A.a([],s)
o=x.g.a(J.t(e,"rules"))
o=J.aQ(o==null?B.bQ:o)
while(o.C()){n=J.k(o.gP(o))
m=w?C.cl:B.c
p.push(new A.D(C.bEE,new A.c2(B.aK,B.e,B.h,B.B,l,B.p,l,0,A.a([C.eCW,B.aa,new A.bu(1,B.b9,A.c(n,l,l,l,l,l,l,new A.G(!0,m,l,l,l,l,12.5,l,l,l,l,l,1.35,l,l,l,l,l,l,l,l,l,l,l,l,l),l,l,l),l)],s),l),l))}return this.aAD(d,new A.ou(k,A.aG(!1,B.a3,!0,l,L.hgg(l,p,V.anQ,l,u,v,!1,t,l,q,B.hd,r),B.f,l,0,l,l,l,l,l,B.i5),l),B.ag)},
aAD(d,e,f){var w=null,v=d.a,u=v?B.c.j(0.92):C.im,t=A.n(24)
return A.p(w,e,B.f,w,w,new A.o(u,w,A.K(v?B.c:C.n6,B.r,1),t,A.a([new A.aa(0,B.H,d.gI3(),B.du,24)],x.V),w,B.m),w,w,w,B.dU,f,w,w,w)},
a0R(d,e){return this.aAD(d,e,B.bR)},
aaK(d,e,f){var w=null,v=f.j(0.12),u=A.n(16),t=A.K(f.j(0.45),B.r,1),s=A.V(B.QG,f,w,w,w,20)
return A.p(w,A.A(A.a([s,B.ar,A.E(A.c(e,w,w,w,w,w,w,A.l(w,w,d.a?C.cl:B.c,w,w,w,w,w,w,w,w,12.5,w,w,w,w,1.35,!0,w,w,w,w,w,w,w,w),w,w,w),1)],x.p),B.l,w,B.e,B.h,0,w,w),B.f,w,w,new A.o(v,w,t,u,w,w,B.m),w,w,w,B.dU,B.bg,w,w,w)},
b3i(d,e,f){var w=null,v=d.a,u=v?B.c.j(0.92):C.im,t=A.K(v?B.c:C.n6,B.r,1)
return A.aG(!1,B.a3,!0,w,A.aM(!1,w,!0,A.p(w,A.V(e,v?C.cl:B.c,w,w,w,18),B.f,w,w,new A.o(w,w,t,w,w,w,B.a6),w,40,w,w,w,w,w,40),B.cL,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),B.f,u,0,w,w,B.cL,w,w,B.ai)},
b8U(d,e,f,g,h){var w,v,u,t,s,r,q,p=null
if(f){w=d.a
v=w?C.mZ:B.c
u=v
v=w
w=u}else{w=d.a
v=w?C.O7:C.NY
u=v
v=w
w=u}t=A.n(999)
s=x.p
r=A.a([],s)
if(h!=null){if(f)q=v?B.c:C.mZ
else q=v?C.bX:C.bY
B.d.u(r,A.a([A.V(h,q,p,p,p,14),B.da],s))}if(f)v=v?B.c:C.mZ
else v=v?C.bX:C.bY
r.push(A.c(e,p,p,p,p,p,p,A.l(p,p,v,p,p,p,p,p,p,p,p,11.5,p,p,B.N,p,p,!0,p,p,p,p,p,p,p,p),p,p,p))
return A.aA(p,A.cV(p,A.A(r,B.l,p,B.e,B.O,0,p,p),p,p,B.aZ,new A.o(w,p,p,t,p,p,B.m),B.eH,p,p,p,p,A0.a1F,p,p,p),B.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,g,p,p,p,p,p,p,!1,B.a4)},
cAf(d,e,f,g){return this.b8U(d,e,f,g,null)},
ays(d,e,f){var w=null,v=A.p(w,w,B.f,w,w,new A.o(e,w,w,A.n(2),w,w,B.m),w,3,w,w,w,w,w,14)
return A.A(A.a([v,B.dZ,A.c(f,w,w,w,w,w,w,A.l(w,w,d.a?C.bX:C.bY,w,w,w,w,w,w,w,w,11,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),B.l,w,B.e,B.O,0,w,w)},
aAG(d,e){var w=null,v=e.j(0.14),u=A.n(999)
return A.p(w,A.c(d,w,w,w,w,w,w,A.l(w,w,e,w,w,w,w,w,w,w,w,10,w,w,B.u,w,w,!0,w,0.6,w,w,w,w,w,w),w,w,w),B.f,w,w,new A.o(v,w,w,u,w,w,B.m),w,w,w,w,B.fa,w,w,w)},
aAI(d,e,f,g){var w=null,v=d.a,u=v?C.tm:C.tn,t=A.n(16),s=A.c(e,w,w,w,w,w,w,A.l(w,w,v?C.bX:C.bY,w,w,w,w,w,w,w,w,11.5,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)
if(g==null)v=v?C.cl:B.c
else v=g
return A.p(w,A.x(A.a([s,B.cQ,new A.dc(B.dp,B.a5,B.f,A.c(f,w,w,w,w,w,w,A.l(w,w,v,w,w,w,w,w,w,w,w,16,w,w,B.E,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w)],x.p),B.B,w,B.e,B.h,0,B.p),B.f,w,w,new A.o(u,w,w,t,w,w,B.m),w,w,w,w,B.bg,w,w,w)},
aAH(d,e,f){return this.aAI(d,e,f,null)},
cMI(d){var w=A.v(d==null?"":d),v=A.bg(w.length>=19?B.a.aw(w,0,19):"")
if(v==null)return""
return" \xb7 opens "+B.Tk[A.lU(v)-1]+" "+D.LG(v)+" ET"}}
D.a_A.prototype={
R(){return new D.bet()}}
D.bet.prototype={
aAF(d,e){var w=this,v=w.a.c.length,u=B.o.D(B.i.bc(d.a/e*v),0,v-1)
if(u!==w.d)w.l(new D.cX1(w,u))},
B(d){return A.cf(new D.cXa(this))}}
D.beu.prototype={
a4(d0,d1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3=this,c4=null,c5={},c6=d1.b,c7=c6-18,c8=x.n,c9=A.a([],c8)
for(w=c3.c,v=w.length,u=0;t=w.length,u<t;w.length===v||(0,A.I)(w),++u){s=w[u]
t=J.a2(s)
r=t.h(s,"h")
if(!(typeof r=="number")){r=A.cv(A.v(r==null?"":r))
if(r==null)r=0}t=t.h(s,"l")
if(!(typeof t=="number")){t=A.cv(A.v(t==null?"":t))
if(t==null)t=0}B.d.u(c9,A.a([r,t],c8))}v=c3.f
if(v)for(u=0;u<w.length;w.length===t||(0,A.I)(w),++u){s=w[u]
r=A.a([],c8)
q=J.a2(s)
if(q.h(s,"f")!=null){p=q.h(s,"f")
if(!(typeof p=="number")){p=A.cv(A.v(p==null?"":p))
if(p==null)p=0}r.push(p)}if(q.h(s,"s")!=null){q=q.h(s,"s")
if(!(typeof q=="number")){q=A.cv(A.v(q==null?"":q))
if(q==null)q=0}r.push(q)}B.d.u(c9,r)}c8=c3.e
t=c8!=null
if(t)c9.push(c8)
r=c3.r
q=r>0
if(q)c9.push(r)
c5.a=B.d.eH(c9,B.px)
o=c5.b=B.d.eH(c9,B.ov)
c9=c5.a
if(o-c9<1e-9){p=c5.b=o+1
c9=c5.a=c9-1
n=p
p=c9
c9=n}else{p=c9
c9=o}m=(c9-p)*0.1
c5.a=p-m
c5.b=c9+m
l=w.length
c9=d1.a
k=c9/l
j=new D.cXb(k)
i=new D.cXd(c5,c7)
$.T()
h=A.L()
p=c3.d.a
h.r=(p?C.oL:C.oG).j(0.7).gp(0)
h.c=1
for(g=1;g<=3;++g){f=c7*g/4
for(e=0;e<c9;e+=6)d0.ah(new A.r(e,f),new A.r(e+2,f),h)}if(v){v=new D.cXc(c3,l,j,i,d0)
v.$2("s",B.b_)
v.$2("f",B.bB)}for(v=Math.max(2,k*0.62)/2,d=c3.w,a0=d!=null,g=0;g<l;++g){s=w[g]
a1=J.a2(s)
a2=a1.h(s,"o")
if(!(typeof a2=="number")){a3=A.cv(A.v(a2==null?"":a2))
a2=a3==null?0:a3}a4=a1.h(s,"c")
if(!(typeof a4=="number")){a3=A.cv(A.v(a4==null?"":a4))
a4=a3==null?0:a3}a5=a1.h(s,"h")
if(!(typeof a5=="number")){a3=A.cv(A.v(a5==null?"":a5))
a5=a3==null?0:a3}a6=a1.h(s,"l")
if(!(typeof a6=="number")){a1=A.cv(A.v(a6==null?"":a6))
a6=a1==null?0:a1}a7=a4>=a2?C.cJ:E.i0
a8=a0&&d!==g
$.T()
a9=new A.as(B.T,B.Q,B.W,B.X,B.V)
a9.r=(a8?a7.j(0.45):a7).gp(0)
a1=j.$1(g)
a3=i.$1(a5)
b0=j.$1(g)
b1=i.$1(a6)
a9.c=1.4
d0.ah(new A.r(a1,a3),new A.r(b0,b1),a9)
b2=i.$1(Math.max(a2,a4))
b3=i.$1(Math.min(a2,a4))
b1=A.by(new A.a5(j.$1(g)-v,b2,j.$1(g)+v,Math.max(b3,b2+1.5)),B.hE)
a9.b=B.Q
d0.aq(b1,a9)}if(t)c3.aUt(d0,i.$1(c8),c9,F.qH,"Buy "+D.ej(c8,!0,!1),!0)
if(q){c8=i.$1(r)
c3.bPf(d0,c8,c9,(p?C.cl:B.c).j(0.55),D.ej(r,!0,!1))}b4=A.h2(c4,B.cM,c4,c4,c4,c4,B.a7,B.ch,c4,B.e5,B.ci)
for(c8=[0,l/3|0,B.o.ao(2*l,3),l-1],v=c8.length,c6-=13,t=c3.b,u=0;u<v;++u){g=c8[u]
r=J.t(w[g],"t")
b5=A.bg(A.v(r==null?"":r))
if(b5==null)continue
r=D.LG(D.Sr(b5))
q=p?C.bX:C.bY
b4.sb1(0,new A.eG(r,c4,c4,B.cZ,c4,c4,c4,c4,c4,c4,new A.G(!0,q,c4,t,c4,c4,10,c4,c4,c4,c4,c4,c4,c4,c4,c4,c4,c4,c4,c4,c4,c4,c4,c4,c4,c4)))
b4.eY()
r=j.$1(g)
q=b4.b.c
b4.a4(d0,new A.r(B.i.D(r-q/2,0,c9-q),c6))}if(a0&&d<l){s=w[d]
e=j.$1(d)
c6=J.a2(s)
b6=i.$1(D.c1(c6.h(s,"c")))
$.T()
b7=A.L()
b7.r=(p?C.cl:B.c).j(0.5).gp(0)
b7.c=1
for(b8=0;b8<c7;b8+=6)d0.ah(new A.r(e,b8),new A.r(e,b8+3),b7)
$.T()
c8=A.L()
c8.r=(p?B.c.j(0.92):C.im).gp(0)
d0.O(new A.r(e,b6),6,c8)
c8=A.L()
c8.r=(p?C.cl:B.c).gp(0)
c8.b=B.ac
c8.c=2.5
d0.O(new A.r(e,b6),6,c8)
c8=c6.h(s,"t")
b5=A.bg(A.v(c8==null?"":c8))
c8=b5==null?"":D.LG(D.Sr(b5))+" ET\n"
c6=D.ej(D.c1(c6.h(s,"c")),!0,!1)
b4.sb1(0,A.d_(c4,c4,c4,c4,c4,c4,c4,c4,c4,A.l(c4,c4,p?B.c:C.mZ,c4,c4,c4,c4,c4,t,c4,c4,11.5,c4,c4,B.E,c4,1.3,!0,c4,c4,c4,c4,c4,c4,c4,c4),c8+c6))
b4.sDh(0,B.K)
b4.eY()
c6=b4.b
b9=c6.c+18
c6=c6.a.c
c0=c6.gb8(c6)+10
c1=B.i.D(e-b9/2,0,c9-b9)
c2=Math.max(0,b6-c0-14)
c9=A.by(new A.a5(c1,c2,c1+b9,c2+c0),B.hS)
c6=A.L()
c6.r=(p?C.mZ:B.c).gp(0)
d0.aq(c9,c6)
b4.a4(d0,new A.r(c1+9,c2+5))}},
aUt(d,e,f,g,h,i){var w,v,u,t,s,r,q,p,o,n,m=null
$.T()
w=A.L()
w.r=g.gp(0)
w.c=1.2
for(v=0;v<f;v+=7)d.ah(new A.r(v,e),new A.r(v+3.5,e),w)
u=A.h2(m,B.cM,m,m,m,A.d_(m,m,m,m,m,m,m,m,m,A.l(m,m,B.c,m,m,m,m,m,this.b,m,m,10,m,m,B.E,m,m,!0,m,m,m,m,m,m,m,m),h),B.a7,B.ch,m,B.e5,B.ci)
u.eY()
t=u.b
s=t.c+12
t=t.a.c
r=t.gb8(t)+6
q=i?0:f-s
t=e-r/2
p=A.by(new A.a5(q,t,q+s,t+r),B.qi)
$.T()
o=A.L()
if(i)n=F.qH
else n=this.d.a?C.mZ:B.c
o.r=n.gp(0)
d.aq(p,o)
u.a4(d,new A.r(q+6,t+3))},
bPf(d,e,f,g,h){return this.aUt(d,e,f,g,h,!1)},
aD(d){var w=this
return d.c!==w.c||d.w!=w.w||d.f!==w.f||d.e!=w.e||d.r!==w.r||d.d.a!==w.d.a}}
D.bwq.prototype={
a4(d,e){var w,v,u,t,s,r,q,p,o,n,m=null,l=this.b
if(l.length<2)return
w=A.U(l).k("O<1,H>")
v=A.B(new A.O(l,new D.fi9(),w),w.k("aj.E"))
u=B.d.eH(v,B.px)
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
s.ac()}}n=A.zQ(s)
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
D.z3.prototype={}
D.Rp.prototype={
gI3(){return this.a?B.cf.j(0.08):B.v.j(0.35)}}
D.WY.prototype={
R(){return new D.aGm(A.a([],x.t))}}
D.aGm.prototype={
a_(){var w=this
w.a3()
w.a.toString
w.B6()
w.Br()
w.x=A.d0(B.na,new D.e83(w))},
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
break}o=A.a0(x.f.a(B.U.aP(0,p,null)),x.N,x.z)
r.l(new D.e7z(r,o))
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
return A.b(A.hc(A.a([A.fP(A.J(["action","fsStatus","system",r.a.c],m,l),!1,!1,!1,!1,B.wZ),A.fP(A.J(["action","fsLog","system",r.a.c,"limit",30],m,l),!1,!1,!1,!1,B.na)],x.o),x.h),$async$Br)
case 3:k=e
l=J.a2(k)
q=l.h(k,0)
o=l.h(k,1)
if(r.c==null){w=1
break}r.l(new D.e7L(r,q,o))
w=q!=null&&J.z(J.t(q,"ok"),!0)?4:5
break
case 4:t=7
w=10
return A.b(A.aB(),$async$Br)
case 10:p=e
w=11
return A.b(p.aB("String","ngmy_signal_grid_fast_"+r.a.c,B.U.au(A.J(["s",q,"log",r.e],m,x.K),null)),$async$Br)
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
za(d){return this.cB6(d)},
cB6(d){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$za=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.d
t.l(new D.e7R(t,d))
w=3
return A.b(A.fP(A.J(["action","fsSet","system",t.a.c,"enabled",d],x.N,x.z),!1,!1,!1,!1,B.wZ),$async$za)
case 3:s=f
if(t.c==null){w=1
break}t.l(new D.e7S(t,s,r))
case 1:return A.h(u,v)}})
return A.i($async$za,v)},
B(c3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8=this,a9=null,b0="brakePaused",b1="enabled",b2="entryPrice",b3="weekendNote",b4="pnlSum",b5="brakeNote",b6=A.Q(c3).ax.a===B.dh,b7=new D.Rp(b6),b8=a8.a.c==="options"?"Options":"Scalper",b9=a8.d,c0=D.dI(b9==null?a9:b9.h(0,"state")),c1=J.z(c0.h(0,b0),!0),c2=J.z(c0.h(0,b1),!0)&&!c1
b9=b6?C.t4:C.t2
w=b6?C.t4:C.t2
w=A.a([w,b6?C.O0:C.NU],x.O)
v=a8.a0T(b7,B.eB,new D.e81(c3))
u=a8.a.c==="options"
t=u?B.az:B.as
s=A.n(11)
t=A.p(a9,A.V(u?B.fM:B.rh,B.c,a9,a9,a9,20),B.f,a9,a9,new A.o(t,a9,a9,s,a9,a9,B.m),a9,34,a9,a9,a9,a9,a9,34)
u=A.c(b8,a9,a9,a9,a9,a9,a9,A.l(a9,a9,b6?C.cl:B.c,a9,a9,a9,a9,a9,a9,a9,a9,17,a9,a9,B.E,a9,a9,!0,a9,a9,a9,a9,a9,a9,a9,a9),a9,a9,a9)
s=x.p
u=A.a([v,B.ar,t,B.ar,A.E(A.x(A.a([u,A.c("Fast system",a9,a9,a9,a9,a9,a9,A.l(a9,a9,b6?C.bX:C.bY,a9,a9,a9,a9,a9,a9,a9,a9,11.5,a9,a9,a9,a9,a9,!0,a9,a9,a9,a9,a9,a9,a9,a9),a9,a9,a9)],s),B.B,a9,B.e,B.h,0,B.p),1)],s)
if(a8.d!=null){if(c1)v=C.d9
else if(c2)v=C.cJ
else v=b6?C.bX:C.bY
v=v.j(0.14)
t=A.n(999)
if(c1)r="Paused"
else r=c2?"Running":"Stopped"
if(c1)q=C.d9
else if(c2)q=C.cJ
else q=b6?C.bX:C.bY
u.push(A.p(a9,A.c(r,a9,a9,a9,a9,a9,a9,A.l(a9,a9,q,a9,a9,a9,a9,a9,a9,a9,a9,12,a9,a9,B.E,a9,a9,!0,a9,a9,a9,a9,a9,a9,a9,a9),a9,a9,a9),B.f,a9,a9,new A.o(v,a9,a9,t,a9,a9,B.m),a9,a9,a9,a9,B.fZ,a9,a9,a9))}u.push(B.aa)
u.push(a8.a0T(b7,B.nk,a8.r?a9:new D.e82(a8)))
v=A.A(u,B.l,a9,B.e,B.h,0,a9,a9)
if(a8.f)b6=B.lr
else{u=a8.d
if(u==null){b6=a8.w
b6=A.a([a8.Ri(b7,b6==null?"Nothing to show yet.":b6,B.b_)],s)}else{c0=D.dI(u.h(0,"state"))
t=x.f
p=t.b(c0.h(0,"shadow"))?D.dI(c0.h(0,"shadow")):a9
r=A.a([],s)
if(p!=null){q=D.dI(c0.h(0,"mark"))
o=t.b(p.h(0,"option"))?D.dI(p.h(0,"option")):a9
t=p.h(0,"entryAt")
n=A.bg(A.v(t==null?"":t))
t=p.h(0,"maxHold")
m=B.i.K(D.c1(t==null?30:t))
l=n==null?a9:n.bL(A.du(0,0,0,0,m,0).a)
k=D.c1(q.h(0,"pnl"))
t=a8.a.c==="options"?B.az:B.as
j=A.c("OPEN TRADE",a9,a9,a9,a9,a9,a9,A.l(a9,a9,b6?C.bX:C.bY,a9,a9,a9,a9,a9,a9,a9,a9,10.5,a9,a9,B.u,a9,a9,!0,a9,0.8,a9,a9,a9,a9,a9,a9),a9,a9,a9)
j=A.A(A.a([j,B.aW,new D.aBh(l,a8.a.c==="options"?B.az:B.as,a9)],s),B.l,a9,B.e,B.h,0,a9,a9)
i=o!=null
if(i){h=A.v(p.h(0,"symbol"))
g=D.ej(D.c1(o.h(0,"strike")),!0,!1)
f=o.h(0,"right")
h=h+" "+g+" "+A.v(f==null?"call":f)+" \xb7 expires "+D.aQQ(o.h(0,"expiry"))}else h=A.v(p.h(0,"symbol"))
h=A.c(h,a9,a9,a9,a9,a9,a9,A.l(a9,a9,b6?C.cl:B.c,a9,a9,a9,a9,a9,a9,a9,a9,17,a9,a9,B.E,a9,a9,!0,a9,a9,a9,a9,a9,a9,a9,a9),a9,a9,a9)
if(i){i=D.ej(D.c1(p.h(0,b2)),!0,!1)
g=D.ej(D.c1(q.h(0,"cost")),!0,!1)
q=J.z(q.h(0,"priced"),!1)?"no price yet":D.ej(D.c1(q.h(0,"price")),!0,!1)
q="Premium paid "+i+" x 100 = "+g+" \xb7 now "+q}else q="$"+B.i.a5(D.c1(q.h(0,"cost")),0)+" bought at "+D.ej(D.c1(p.h(0,b2)),!0,!1)+" \xb7 now "+D.ej(D.c1(q.h(0,"price")),!0,!1)
q=A.c(q,a9,a9,a9,a9,a9,a9,A.l(a9,a9,b6?C.bX:C.bY,a9,a9,a9,a9,a9,a9,a9,a9,12,a9,a9,a9,a9,a9,!0,a9,a9,a9,a9,a9,a9,a9,a9),a9,a9,a9)
i=D.ej(k,!0,!0)
g=k>=0
i=A.c(i,a9,a9,a9,a9,a9,a9,A.l(a9,a9,g?C.cJ:C.d9,a9,a9,a9,a9,a9,a9,a9,a9,26,a9,a9,B.u,a9,a9,!0,a9,a9,a9,a9,a9,a9,a9,a9),a9,a9,a9)
g=g?"winning right now":"losing right now"
i=A.A(A.a([i,B.aa,A.c(g,a9,a9,a9,a9,a9,a9,A.l(a9,a9,b6?C.bX:C.bY,a9,a9,a9,a9,a9,a9,a9,a9,12,a9,a9,a9,a9,a9,!0,a9,a9,a9,a9,a9,a9,a9,a9),a9,a9,a9)],s),B.l,a9,B.e,B.h,0,a9,a9)
g=D.hm_(p.h(0,"entryAt"))
f=l==null?"":" \xb7 max hold "+m+" min, closes by "+D.LG(D.Sr(l.aa()))+" ET"
e=p.h(0,"tpUsd")==null?"":" \xb7 take profit +"+D.ej(D.c1(p.h(0,"tpUsd")),!0,!1)+" / stop -"+D.ej(D.c1(p.h(0,"slUsd")),!0,!1)
r.push(a8.b3h(b7,t,A.x(A.a([j,B.M,h,B.bs,q,B.aj,i,A.c("Bought "+g+f+e,a9,a9,a9,a9,a9,a9,A.l(a9,a9,b6?C.bX:C.bY,a9,a9,a9,a9,a9,a9,a9,a9,11.5,a9,a9,a9,a9,a9,!0,a9,a9,a9,a9,a9,a9,a9,a9),a9,a9,a9)],s),B.B,a9,B.e,B.h,0,B.p)))}r.push(a8.c8J(b7,u))
r.push(a8.bLq(b7,u))
p=D.dI(u.h(0,"shared"))
d=p.h(0,"balance")
a0=D.c1(p.h(0,"closed"))+D.c1(p.h(0,"open"))
t=A.n(26)
q=A.A(A.a([C.aZy,B.aW,A.p(a9,C.h1g,B.f,a9,a9,new A.o(B.c.j(0.14),a9,a9,A.n(999),a9,a9,B.m),a9,a9,a9,a9,B.fa,a9,a9,a9)],s),B.l,a9,B.e,B.h,0,a9,a9)
j=A.c(d==null?"\u2014":D.ej(D.c1(d),!0,!1),a9,a9,a9,a9,a9,a9,C.fED,a9,a9,a9)
i=D.ej(a0,!0,!0)
if(a0>0)h=C.cJ
else h=a0<0?C.d9:B.ab
h=A.c(i+" from trades of every system",a9,a9,a9,a9,a9,a9,A.l(a9,a9,h,a9,a9,a9,a9,a9,a9,a9,a9,12.5,a9,a9,B.E,a9,a9,!0,a9,a9,a9,a9,a9,a9,a9,a9),a9,a9,a9)
r.push(A.p(a9,A.x(A.a([q,B.at,new A.dc(B.dp,B.a5,B.f,j,a9),h,B.bs,A.c("Alpaca account "+(p.h(0,"equity")==null?"\u2014":D.ej(D.c1(p.h(0,"equity")),!0,!1))+" (unchanged, no orders are sent)",a9,a9,a9,a9,a9,a9,O.Fz,a9,a9,a9)],s),B.B,a9,B.e,B.h,0,B.p),B.f,a9,a9,new A.o(a9,a9,a9,t,a9,C.auZ,B.m),a9,a9,a9,B.dU,B.f9,a9,a9,a9))
t=a8.w
if(t!=null)r.push(a8.Ri(b7,t,C.d9))
if(J.z(c0.h(0,b0),!0)){t=c0.h(0,"brakeReason")
r.push(a8.Ri(b7,"Paused by this system's brake. "+A.v(t==null?"":t)+y.g,C.d9))}r.push(a8.aAE(b7,c0))
if(u.h(0,b3)!=null){t=A.V(F.arD,b6?C.bX:C.bY,a9,a9,a9,16)
q=A.v(u.h(0,b3))
r.push(new A.D(C.bKw,A.A(A.a([t,B.bb,A.E(A.c(q,a9,a9,a9,a9,a9,a9,A.l(a9,a9,b6?C.bX:C.bY,a9,a9,a9,a9,a9,a9,a9,a9,11.5,a9,a9,B.N,a9,a9,!0,a9,a9,a9,a9,a9,a9,a9,a9),a9,a9,a9),1)],s),B.l,a9,B.e,B.h,0,a9,a9),a9))}r.push(a8.aBk(b7,u))
r.push(a8.c6g(b7,u))
a1=D.dI(u.h(0,"record"))
a2=D.dI(u.h(0,"todayStats"))
a3=a2.h(0,"winRatePct")
a4=D.c1(a2.h(0,"pnl"))
t=a3==null
if(t)a5=b6?C.cl:B.c
else a5=D.c1(a3)>=50?C.cJ:C.d9
q=A.c("TODAY: WIN RATE AND P/L",a9,a9,a9,a9,a9,a9,A.l(a9,a9,b6?C.bX:C.bY,a9,a9,a9,a9,a9,a9,a9,a9,10.5,a9,a9,B.u,a9,a9,!0,a9,0.9,a9,a9,a9,a9,a9,a9),a9,a9,a9)
j=t?"No closed trades today":B.i.a5(D.c1(a3),0)+"%"
j=A.a([A.c(j,a9,a9,a9,a9,a9,a9,A.l(a9,a9,a5,a9,a9,a9,a9,a9,a9,a9,a9,t?16:30,a9,a9,B.u,a9,a9,!0,a9,a9,a9,a9,a9,a9,a9,a9),a9,a9,a9),B.ar],s)
if(!t){t=D.ej(a4,!0,!0)
if(a4>0)i=C.cJ
else if(a4<0)i=C.d9
else i=b6?C.cl:B.c
j.push(new A.D(R.P_,A.c(t,a9,a9,a9,a9,a9,a9,A.l(a9,a9,i,a9,a9,a9,a9,a9,a9,a9,a9,16,a9,a9,B.E,a9,a9,!0,a9,a9,a9,a9,a9,a9,a9,a9),a9,a9,a9),a9))}t=A.A(j,B.dt,a9,B.e,B.h,0,a9,a9)
j=a2.h(0,"wins")
j=A.v(j==null?0:j)
i=a2.h(0,"closed")
i=A.v(i==null?0:i)
t=A.E(A.x(A.a([q,B.at,t,A.c(j+" won out of "+i+" closed today",a9,a9,a9,a9,a9,a9,A.l(a9,a9,b6?C.bX:C.bY,a9,a9,a9,a9,a9,a9,a9,a9,12,a9,a9,a9,a9,a9,!0,a9,a9,a9,a9,a9,a9,a9,a9),a9,a9,a9)],s),B.B,a9,B.e,B.h,0,B.p),1)
q=A.c("All time",a9,a9,a9,a9,a9,a9,A.l(a9,a9,b6?C.bX:C.bY,a9,a9,a9,a9,a9,a9,a9,a9,11,a9,a9,a9,a9,a9,!0,a9,a9,a9,a9,a9,a9,a9,a9),a9,a9,a9)
j=D.ej(D.c1(a1.h(0,b4)),!0,!0)
if(D.c1(a1.h(0,b4))>0)i=C.cJ
else if(D.c1(a1.h(0,b4))<0)i=C.d9
else i=b6?C.cl:B.c
i=A.c(j,a9,a9,a9,a9,a9,a9,A.l(a9,a9,i,a9,a9,a9,a9,a9,a9,a9,a9,18,a9,a9,B.E,a9,a9,!0,a9,a9,a9,a9,a9,a9,a9,a9),a9,a9,a9)
j=a1.h(0,"wins")
j=A.v(j==null?0:j)
h=a1.h(0,"losses")
h=A.v(h==null?0:h)
r.push(a8.wp(b7,A.A(A.a([t,A.x(A.a([q,i,A.c(j+" W / "+h+" L",a9,a9,a9,a9,a9,a9,A.l(a9,a9,b6?C.bX:C.bY,a9,a9,a9,a9,a9,a9,a9,a9,11,a9,a9,a9,a9,a9,!0,a9,a9,a9,a9,a9,a9,a9,a9),a9,a9,a9)],s),B.dt,a9,B.e,B.h,0,B.p)],s),B.l,a9,B.e,B.h,0,a9,a9)))
if(a8.a.c==="options"&&u.h(0,b5)!=null)r.push(a8.Ri(b7,A.v(u.h(0,b5)),B.b_))
if(a8.a.c==="options")r.push(a8.cmO(b7,u))
r.push(a8.cBv(b7,u))
t=c0.h(0,"lastNote")
a6=J.k(t==null?"":t)
t=c0.h(0,"lastNoteAt")
if(t==null)t=c0.h(0,"lastTickAt")
a7=A.bg(A.v(t==null?"":t))
if(J.z(c0.h(0,b1),!0))t=C.cJ
else t=b6?C.bX:C.bY
t=A.V(M.Qj,t,a9,a9,a9,18)
q=J.z(c0.h(0,b1),!0)?"Checks every minute by itself":"Stopped: press Start to let it check every minute"
q=A.a([A.c(q,a9,a9,a9,a9,a9,a9,A.l(a9,a9,b6?C.cl:B.c,a9,a9,a9,a9,a9,a9,a9,a9,13,a9,a9,B.E,a9,a9,!0,a9,a9,a9,a9,a9,a9,a9,a9),a9,a9,a9)],s)
if(a6.length!==0){j=a7==null?"":D.LG(D.Sr(a7.aa()))+" ET \xb7 "
B.d.u(q,A.a([B.cQ,A.c(j+a6,a9,a9,a9,a9,a9,a9,A.l(a9,a9,b6?C.bX:C.bY,a9,a9,a9,a9,a9,a9,a9,a9,12,a9,a9,a9,a9,1.3,!0,a9,a9,a9,a9,a9,a9,a9,a9),a9,a9,a9)],s))}r.push(a8.wp(b7,A.A(A.a([t,B.aa,A.E(A.x(q,B.B,a9,B.e,B.h,0,B.p),1)],s),B.B,a9,B.e,B.h,0,a9,a9)))
r.push(a8.cJH(b7,u))
r.push(a8.bF1(b7))
r.push(a8.cya(b7,u))
r.push(a8.wp(b7,A.A(A.a([C.c5p,B.aa,A.E(A.c("No order is ever sent to Alpaca. Orders are disabled.",a9,a9,a9,a9,a9,a9,A.l(a9,a9,b6?C.bX:C.bY,a9,a9,a9,a9,a9,a9,a9,a9,11.5,a9,a9,a9,a9,1.3,!0,a9,a9,a9,a9,a9,a9,a9,a9),a9,a9,a9),1)],s),B.l,a9,B.e,B.h,0,a9,a9)))
b6=r}b6=A.Kl(A.co(b6,a9,a9,C.ao8,a9,a9,B.ah,!1),a9,a8.gcgs())}return A.c6(a9,b9,A.p(a9,A.bo(!0,A.x(A.a([new A.D(B.hc,v,a9),A.E(b6,1)],s),B.l,a9,B.e,B.h,0,B.p),!0,!1,B.ag,!0,!0),B.f,a9,a9,new A.o(a9,a9,a9,a9,a9,new A.a8(B.aX,B.b1,B.x,w,a9,a9),B.m),a9,a9,a9,a9,a9,a9,a9,a9),a9,!1,!1,a9,a9)},
aAE(d,e){var w,v,u,t=this,s=null,r=J.z(e.h(0,"enabled"),!0)&&!J.z(e.h(0,"brakePaused"),!0),q=r?C.d9:C.cJ
q=A.bp(q,s,s,s,s,s,s,s,new A.b9(A.n(999),B.a1),s,s,s)
w=t.r
if(!w)t.a.toString
v=w?s:new D.e7s(t,r)
if(w)w=B.rF
else w=A.V(r?B.vC:B.fN,s,s,s,s,s)
if(r)u="Stop "+(t.a.c==="options"?"Options":"Scalper")
else u="Start "+(t.a.c==="options"?"Options":"Scalper")
return new A.D(B.dU,new A.a4(1/0,52,A.db(w,s,A.c(u,s,s,s,s,s,s,B.mM,s,s,s),v,q),s),s)},
aBk(b9,c0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=null,a8="parts",a9="passes",b0=D.dI(c0.h(0,"pace")),b1=b0.h(0,"target"),b2=B.i.K(D.c1(b1==null?40:b1)),b3=B.i.K(D.c1(b0.h(0,"trades"))),b4=B.i.K(D.c1(b0.h(0,"expected"))),b5=D.c1(b0.h(0,"deficit"))>0,b6=D.c1(b0.h(0,"thresholdPct")),b7=D.c1(b0.h(0,"startPct")),b8=B.i.K(D.c1(b0.h(0,"minutesLeft")))
b1=x.g
w=b1.a(b0.h(0,"lines"))
if(w==null)w=B.bQ
v=x.N
w=J.b8(w,new D.e7H(),v)
u=A.B(w,w.$ti.k("aj.E"))
b1=b1.a(c0.h(0,"ranking"))
if(b1==null)b1=B.bQ
w=x.f
b1=J.cQ(b1,w)
t=x.P
b1=A.cy(b1,new D.e7I(),b1.$ti.k("M.E"),t)
s=A.B(b1,A.a3(b1).k("M.E"))
b1=b3>=b2
if(b1)r=C.cJ
else r=b5?E.i0:C.cJ
if(b1)q="target reached"
else q=b5?"behind pace by "+B.i.K(D.c1(b0.h(0,"deficit"))):"on pace"
if(b1)p="Target reached: back to the day's start, +"+B.i.a5(b7,2)+"%."
else if(u.length===0){b1=B.i.a5(b7,2)
o=b0.h(0,"maxHold")
o=B.i.K(D.c1(o==null?30:o))
n=b0.h(0,"topN")
b1="On pace: the day's start, +"+b1+"%, held up to "+o+" minutes, top "+B.i.K(D.c1(n==null?3:n))+" setups tried."
p=b1}else{b1=B.d.aL(u,"\n")
p=b1}b1=D.dI(c0.h(0,"state")).h(0,"lastNote")
m=J.k(b1==null?"":b1)
b1=b0.h(0,"learned")
l=J.k(b1==null?"":b1)
b1=b0.h(0,"dayNote")
k=J.k(b1==null?"":b1)
b1=b9.a
o=A.c("TRADES TODAY",a7,a7,a7,a7,a7,a7,A.l(a7,a7,b1?C.bX:C.bY,a7,a7,a7,a7,a7,a7,a7,a7,10.5,a7,a7,B.u,a7,a7,!0,a7,0.9,a7,a7,a7,a7,a7,a7),a7,a7,a7)
n=J.z(b0.h(0,"inWindow"),!0)?""+B.o.ao(b8,60)+"h "+B.o.F(b8,60)+"m left":"window closed"
j=x.p
n=A.A(A.a([o,B.aW,this.BX(n,b1?C.bX:C.bY)],j),B.l,a7,B.e,B.h,0,a7,a7)
o=A.A(A.a([A.c("Trades today: "+b3+" of "+b2,a7,a7,a7,a7,a7,a7,A.l(a7,a7,b1?C.cl:B.c,a7,a7,a7,a7,a7,a7,a7,a7,22,a7,a7,B.u,a7,a7,!0,a7,a7,a7,a7,a7,a7,a7,a7),a7,a7,a7)],j),B.dt,a7,B.e,B.h,0,a7,a7)
i=A.c(q+" \xb7 "+B.i.K(D.c1(b0.h(0,"remaining")))+" to go \xb7 expected by now: "+b4,a7,a7,a7,a7,a7,a7,A.l(a7,a7,r,a7,a7,a7,a7,a7,a7,a7,a7,12.5,a7,a7,B.E,a7,a7,!0,a7,a7,a7,a7,a7,a7,a7,a7),a7,a7,a7)
h=A.cf(new D.e7J(b9,b3,b2,r,b4))
g=b1?C.tm:C.tn
f=A.n(12)
e=B.i.a5(b6,2)
e=A.c("Entry strength needed now: +"+e+"% in 15 min",a7,a7,a7,a7,a7,a7,A.l(a7,a7,b1?C.cl:B.c,a7,a7,a7,a7,a7,a7,a7,a7,13,a7,a7,B.E,a7,a7,!0,a7,a7,a7,a7,a7,a7,a7,a7),a7,a7,a7)
d=u.length===0
if(d)a0=b1?C.bX:C.bY
else a0=E.i0
a0=A.c(p,a7,a7,a7,a7,a7,a7,A.l(a7,a7,a0,a7,a7,a7,a7,a7,a7,a7,a7,11.5,a7,a7,d?B.cG:B.N,a7,1.3,!0,a7,a7,a7,a7,a7,a7,a7,a7),a7,a7,a7)
a1=b0.h(0,"checkpoints")
d=A.v(a1==null?"":a1)
d=A.c(d,a7,a7,a7,a7,a7,a7,A.l(a7,a7,b1?C.cl:B.c,a7,a7,a7,a7,a7,a7,a7,a7,11,a7,a7,B.N,a7,1.3,!0,a7,a7,a7,a7,a7,a7,a7,a7),a7,a7,a7)
o=A.a([n,B.aj,o,B.bs,i,B.M,h,B.R,A.p(a7,A.x(A.a([e,B.bs,a0,B.bs,d,A.c("Behind the pace: first a shorter hold (20, then 12 min), then less strength needed (never below +0.12%), then the top 5 setups. The trend rules are never relaxed.",a7,a7,a7,a7,a7,a7,A.l(a7,a7,b1?C.bX:C.bY,a7,a7,a7,a7,a7,a7,a7,a7,11,a7,a7,a7,a7,1.3,!0,a7,a7,a7,a7,a7,a7,a7,a7),a7,a7,a7)],j),B.B,a7,B.e,B.h,0,B.p),B.f,a7,a7,new A.o(g,a7,a7,f,a7,a7,B.m),a7,a7,a7,a7,B.bT,a7,a7,1/0)],j)
if(s.length!==0){n=A.a([B.M,A.c("Top 3 ranked right now",a7,a7,a7,a7,a7,a7,A.l(a7,a7,b1?C.cl:B.c,a7,a7,a7,a7,a7,a7,a7,a7,12.5,a7,a7,B.E,a7,a7,!0,a7,a7,a7,a7,a7,a7,a7,a7),a7,a7,a7),B.bs],j)
for(t=A.aZB(s,0,t),i=J.aQ(t.a),t=t.b,h=new A.J0(i,t),g=x.z;h.C();){f=h.c
f=f>=0?new A.y(t+f,i.gP(i)):A.bi(A.fb())
a2=f.b
e=J.a2(a2)
d=A.v(e.h(a2,"symbol"))
a0=A.v(e.h(a2,"score"))
a1=e.h(a2,a8)
a1=(w.b(a1)?A.a0(a1,v,g):A.S(v,g)).h(0,"base")
a1=A.v(a1==null?"?":a1)
a3=e.h(a2,a8)
a3=(w.b(a3)?A.a0(a3,v,g):A.S(v,g)).h(0,"record")
a3=A.v(a3==null?0:a3)
a4=e.h(a2,a8)
a4=(w.b(a4)?A.a0(a4,v,g):A.S(v,g)).h(0,"bucket")
a4=A.v(a4==null?0:a4)
if(J.z(e.h(a2,a9),!0))a5="PASSES"
else{a5=e.h(a2,"why")
if(a5==null)a5=""}a5=A.v(a5)
if(J.z(e.h(a2,a9),!0))a6=C.cJ
else a6=b1?C.bX:C.bY
e=J.z(e.h(a2,a9),!0)?B.E:B.cG
n.push(new A.D(B.r5,A.c(""+(f.a+1)+". "+d+" \xb7 score "+a0+" (strength and trend "+a1+", record "+a3+", setup size "+a4+") \xb7 "+a5,a7,a7,a7,a7,a7,a7,new A.G(!0,a6,a7,a7,a7,a7,11.5,e,a7,a7,a7,a7,1.3,a7,a7,a7,a7,a7,a7,a7,a7,a7,a7,a7,a7,a7),a7,a7,a7),a7))}B.d.u(o,n)}if(l.length!==0){w=A.d_(A.a([A.d_(a7,a7,a7,a7,a7,a7,a7,a7,a7,A.l(a7,a7,this.a.c==="options"?B.az:B.as,a7,a7,a7,a7,a7,a7,a7,a7,a7,a7,a7,B.u,a7,a7,!0,a7,a7,a7,a7,a7,a7,a7,a7),"What it learned: "),A.d_(a7,a7,a7,a7,a7,a7,a7,a7,a7,a7,l)],x.R),a7,a7,a7,a7,a7,a7,a7,a7,a7,a7)
B.d.u(o,A.a([B.M,A.Qm(w,a7,a7,A.l(a7,a7,b1?C.cl:B.c,a7,a7,a7,a7,a7,a7,a7,a7,12,a7,a7,a7,a7,1.35,!0,a7,a7,a7,a7,a7,a7,a7,a7),a7)],j))}if(k.length!==0)B.d.u(o,A.a([B.aj,A.c(k,a7,a7,a7,a7,a7,a7,A.l(a7,a7,E.i0,a7,a7,a7,a7,a7,a7,a7,a7,12,a7,a7,B.N,a7,1.3,!0,a7,a7,a7,a7,a7,a7,a7,a7),a7,a7,a7)],j))
if(m.length!==0&&D.dI(c0.h(0,"state")).h(0,"shadow")==null)B.d.u(o,A.a([B.aj,A.c("Now: "+m,a7,a7,a7,a7,a7,a7,A.l(a7,a7,b1?C.cl:B.c,a7,a7,a7,a7,a7,a7,a7,a7,12,a7,a7,a7,a7,1.3,!0,a7,a7,a7,a7,a7,a7,a7,a7),a7,a7,a7)],j))
return this.wp(b9,A.x(o,B.B,a7,B.e,B.h,0,B.p))},
c6g(a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=this,a2=null,a3="text",a4=D.dI(a6.h(0,"learning"))
if(a4.a===0)return B.bK
w=new D.e7w(a4)
v=w.$1("lessons")
u=w.$1("benched")
t=w.$1("lastLosses")
s=x.g.a(a4.h(0,"review"))
if(s==null)s=B.bQ
s=J.b8(s,new D.e7t(),x.N)
r=A.B(s,s.$ti.k("aj.E"))
s=a4.h(0,"pauseUntil")
q=A.bg(A.v(s==null?"":s))
p=new D.e7u(a5)
o=new D.e7v(a1,a5)
s=A.V(B.QP,a1.a.c==="options"?B.az:B.as,a2,a2,a2,18)
n=a5.a
m=A.c("LEARNING",a2,a2,a2,a2,a2,a2,A.l(a2,a2,n?C.cl:B.c,a2,a2,a2,a2,a2,a2,a2,a2,12,a2,a2,B.u,a2,a2,!0,a2,0.8,a2,a2,a2,a2,a2,a2),a2,a2,a2)
l=J.a2(v)
k=l.gJ(v)===0?"NO LESSONS YET":""+l.gJ(v)+" ACTIVE"
if(l.gJ(v)===0)j=n?C.bX:C.bY
else j=a1.a.c==="options"?B.az:B.as
i=x.p
j=A.a([A.A(A.a([s,B.bb,m,B.aW,a1.BX(k,j)],i),B.l,a2,B.e,B.h,0,a2,a2)],i)
if(J.z(a4.h(0,"setupNeeded"),!0))j.push(new A.D(B.hy,A.c("The learning store is not set up yet: run the learning SQL in Supabase.",a2,a2,a2,a2,a2,a2,A.l(a2,a2,C.d9,a2,a2,a2,a2,a2,a2,a2,a2,12,a2,a2,B.N,a2,a2,!0,a2,a2,a2,a2,a2,a2,a2,a2),a2,a2,a2),a2))
j.push(p.$1("Lessons active today"))
if(l.gJ(v)===0){s=a4.h(0,"empty")
s=A.v(s==null?"No lessons yet \u2014 still learning this market.":s)
j.push(A.c(s,a2,a2,a2,a2,a2,a2,A.l(a2,a2,n?C.bX:C.bY,a2,a2,a2,a2,a2,a2,a2,a2,12,a2,a2,a2,a2,a2,!0,a2,a2,a2,a2,a2,a2,a2,a2),a2,a2,a2))}for(s=v.length,h=0;h<v.length;v.length===s||(0,A.I)(v),++h){g=v[h]
m=J.a2(g)
l=m.h(g,a3)
l=A.v(l==null?"":l)
j.push(o.$1(l+(m.h(g,"at")==null?"":" \xb7 "+D.hnS(D.hm_(m.h(g,"at"))))))}if(q!=null&&q.ca(new A.W(Date.now(),0,!1)))j.push(o.$3$c$icon("Paused after 2 losses in a row until "+D.LG(D.Sr(q.aa()))+" ET",E.i0,C.bVu))
if(J.z(a4.h(0,"stepUpNext"),!0))j.push(o.$3$c$icon("The next entry needs +0.05% more strength (after 2 losses in a row)",E.i0,B.mx))
j.push(p.$1("Benched markets"))
if(J.ad(u)===0)j.push(A.c("None benched today.",a2,a2,a2,a2,a2,a2,A.l(a2,a2,n?C.bX:C.bY,a2,a2,a2,a2,a2,a2,a2,a2,12,a2,a2,a2,a2,a2,!0,a2,a2,a2,a2,a2,a2,a2,a2),a2,a2,a2))
for(s=u.length,h=0;h<u.length;u.length===s||(0,A.I)(u),++h){f=u[h]
m=J.a2(f)
l=m.h(f,a3)
j.push(o.$3$c$icon(A.v(l==null?m.h(f,"symbol"):l),C.d9,B.tG))}j.push(p.$1("What the next entry needs"))
s=B.i.a5(D.c1(a4.h(0,"thresholdPct")),2)
m=a1.a.c==="options"?B.az:B.as
m=a1.BX("STRENGTH +"+s+"%",m)
s=B.i.K(D.c1(a4.h(0,"maxHold")))
l=a1.a.c==="options"?B.az:B.as
l=a1.BX("MAX HOLD "+s+" MIN",l)
s=B.i.a5(D.c1(a4.h(0,"chaseCapPct")),1)
k=a1.a.c==="options"?B.az:B.as
k=a1.BX("NO-CHASE "+s+"%",k)
s=B.i.K(D.c1(a4.h(0,"chopSkipAt")))
e=a1.a.c==="options"?B.az:B.as
e=A.a([m,l,k,a1.BX("CHOP SKIP "+s+"+",e)],i)
if(J.z(a4.h(0,"need60"),!0))e.push(a1.BX("1-HOUR TREND MUST AGREE",E.i0))
j.push(A.bZ(B.bI,e,B.br,a2,6,6))
j.push(p.$1("Last 5 loss reasons"))
if(J.ad(t)===0)j.push(A.c("No graded losses yet.",a2,a2,a2,a2,a2,a2,A.l(a2,a2,n?C.bX:C.bY,a2,a2,a2,a2,a2,a2,a2,a2,12,a2,a2,a2,a2,a2,!0,a2,a2,a2,a2,a2,a2,a2,a2),a2,a2,a2))
for(s=t.length,h=0;h<t.length;t.length===s||(0,A.I)(t),++h){g=t[h]
m=J.a2(g)
l=A.v(m.h(g,"market"))
k=m.h(g,"pnl")
if(!(typeof k=="number")){k=A.cv(A.v(k==null?"":k))
if(k==null)k=0}k=D.ej(k,!0,!0)
e=D.hEG(A.v(m.h(g,"reason")))
m=m.h(g,a3)
m=A.v(m==null?"":m)
d=n?C.cl:B.c
j.push(o.$3$c$icon(l+" "+k+" \xb7 "+e+": "+m,d,B.cC))}if(r.length!==0){s=A.a([p.$1("What I learned yesterday")],i)
for(m=r.length,h=0;h<r.length;r.length===m||(0,A.I)(r),++h){a0=r[h]
s.push(o.$2$c(a0,n?C.bX:C.bY))}B.d.u(j,s)}return a1.wp(a5,A.x(j,B.B,a2,B.e,B.h,0,B.p))},
b04(d){var w=x.g.a(d.h(0,"markets"))
if(w==null)w=B.bQ
w=J.cQ(w,x.f)
w=A.cy(w,new D.e7F(),w.$ti.k("M.E"),x.P)
w=A.B(w,A.a3(w).k("M.E"))
return w},
b91(d){if(d.length===0)return null
return B.d.dr(d,new D.e7P(this),new D.e7Q(d))},
c8J(d,e){var w,v,u,t,s,r,q=this,p=null,o=q.b04(e)
if(o.length===0)return B.bK
w=q.b91(o)
w.toString
v=new A.X(o,new D.e7C(),A.U(o).k("X<1>")).gJ(0)
u=o.length
t=d.a
u=A.c("Its markets ("+u+")",p,p,p,p,p,p,A.l(p,p,t?C.cl:B.c,p,p,p,p,p,p,p,p,14,p,p,B.E,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)
s=v===0
r=s?"NONE PASSING NOW":""+v+" PASSING NOW"
if(s)s=t?C.bX:C.bY
else s=C.cJ
s=q.BX(r,s)
r=x.p
return new A.D(B.d6,A.x(A.a([new A.D(C.aoW,A.A(A.a([u,B.aa,s,B.aW,A.c("tap one",p,p,p,p,p,p,A.l(p,p,t?C.bX:C.bY,p,p,p,p,p,p,p,p,11,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)],r),B.l,p,B.e,B.h,0,p,p),p),new A.a4(p,96,A.hK(B.f,p,new D.e7D(q,o,w,d),o.length,p,p,B.aK,new D.e7E(),!1),p)],r),B.B,p,B.e,B.h,0,B.p),p)},
bLq(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=this.b91(this.b04(e))
if(j==null)return B.bK
w=J.a2(j)
v=x.g.a(D.dI(w.h(j,"chart")).h(0,"points"))
if(v==null)v=B.bQ
v=J.cQ(v,x.f)
v=A.cy(v,new D.e7r(),v.$ti.k("M.E"),x.P)
u=A.B(v,A.a3(v).k("M.E"))
t=D.dI(w.h(j,"analysis"))
s=D.c1(w.h(j,"changePct"))
v=D.bDO(A.v(w.h(j,"symbol")),24)
r=A.v(w.h(j,"symbol"))
q=d.a
r=A.c(r,k,k,k,k,k,k,A.l(k,k,q?C.cl:B.c,k,k,k,k,k,k,k,k,15,k,k,B.E,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)
p=w.h(j,"name")
p=A.v(p==null?"":p)
o=x.p
p=A.E(A.x(A.a([r,A.c(p,k,1,B.a2,k,k,k,A.l(k,k,q?C.bX:C.bY,k,k,k,k,k,k,k,k,11.5,k,k,k,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)],o),B.B,k,B.e,B.h,0,B.p),1)
r=D.ej(D.c1(w.h(j,"price")),!0,!1)
r=A.c(r,k,k,k,k,k,k,A.l(k,k,q?C.cl:B.c,k,k,k,k,k,k,k,k,17,k,k,B.E,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)
n=s>=0
m=n?"+":""
l=B.i.a5(s,2)
v=A.a([A.A(A.a([v,B.aa,p,A.x(A.a([r,A.c(m+l+"% today",k,k,k,k,k,k,A.l(k,k,n?C.cJ:C.d9,k,k,k,k,k,k,k,k,11,k,k,B.E,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)],o),B.dt,k,B.e,B.h,0,B.p)],o),B.l,k,B.e,B.h,0,k,k),B.R],o)
r=u.length
if(r>1)v.push(new D.a_A(B.d.fB(u,Math.max(0,r-36)),d,k,!0,D.c1(w.h(j,"price")),k))
else v.push(A.c(y.b,k,k,k,k,k,k,A.l(k,k,q?C.bX:C.bY,k,k,k,k,k,k,k,k,12,k,k,k,k,k,!0,k,k,k,k,k,k,k,k),k,k,k))
if(t.h(0,"why")!=null){w=A.v(t.h(0,"why"))
B.d.u(v,A.a([B.aj,A.c("Analysis: "+w,k,k,k,k,k,k,A.l(k,k,q?C.bX:C.bY,k,k,k,k,k,k,k,k,11.5,k,k,k,k,1.3,!0,k,k,k,k,k,k,k,k),k,k,k)],o))}return this.wp(d,A.x(v,B.B,k,B.e,B.h,0,B.p))},
cBv(d,a0){var w,v,u,t,s,r=this,q=null,p="takeProfitUsd",o="stopLossUsd",n="maxHoldMin",m="exitCheckEveryMin",l=D.dI(a0.h(0,"settings")),k=D.dI(a0.h(0,"today")),j=new D.e7T(d),i=r.a.c==="options"?"+"+D.ej(D.c1(l.h(0,p)),!0,!1):"+"+B.i.a5(D.c1(l.h(0,"takeProfitPct")),0)+"% (+$"+B.i.a5(D.c1(l.h(0,p)),0)+")",h=r.a.c==="options"?"-"+D.ej(D.c1(l.h(0,o)),!0,!1):"-"+B.i.a5(D.c1(l.h(0,"stopLossPct")),0)+"% (-$"+B.i.a5(D.c1(l.h(0,o)),0)+")",g=A.V(B.mw,r.a.c==="options"?B.az:B.as,q,q,q,18),f=d.a,e=x.p
g=A.A(A.a([g,B.bb,A.c("THE 30-MINUTE LAW",q,q,q,q,q,q,A.l(q,q,f?C.cl:B.c,q,q,q,q,q,q,q,q,12,q,q,B.u,q,q,!0,q,0.8,q,q,q,q,q,q),q,q,q)],e),B.l,q,B.e,B.h,0,q,q)
w=B.i.a5(D.c1(l.h(0,n)),0)
v=B.i.a5(D.c1(l.h(0,m)),0)
w=A.c("Every trade closes within 30 minutes at most, win, lose or flat. Behind the pace (or after a lesson) new trades get a shorter max hold: now "+w+" minutes. Exits are checked every "+v+" minute, and the hard close sells at the last check before the max hold.",q,q,q,q,q,q,A.l(q,q,f?C.bX:C.bY,q,q,q,q,q,q,q,q,11.5,q,q,q,q,1.35,!0,q,q,q,q,q,q,q,q),q,q,q)
v=j.$2("Max hold now",B.i.a5(D.c1(l.h(0,n)),0)+" min")
u=j.$2("Exit checks","every "+B.i.a5(D.c1(l.h(0,m)),0)+" min")
f=A.A(A.a([v,B.bb,u,B.bb,j.$2("Each trade",r.a.c==="options"?"1 call/put \u2264$"+B.i.a5(D.c1(l.h(0,"maxPremiumUsd")),0):"$"+B.i.a5(D.c1(l.h(0,"tradeUsd")),0))],e),B.l,q,B.e,B.h,0,q,q)
v=j.$3$c("Take profit",i,C.cJ)
u=j.$3$c("Stop loss",h,C.d9)
t=k.h(0,"trades")
t=A.v(t==null?0:t)
s=l.h(0,"maxTrades")
return r.wp(d,A.x(A.a([g,B.at,w,B.R,f,B.aj,A.A(A.a([v,B.bb,u,B.bb,j.$2("Trades today",t+" of "+A.v(s==null?"-":s))],e),B.l,q,B.e,B.h,0,q,q),B.aj,A.A(A.a([j.$2("Daily stop","-$"+B.i.a5(D.c1(l.h(0,"dailyStopUsd")),0)),B.bb,j.$2("Total brake","-$"+B.i.a5(D.c1(l.h(0,"totalBrakeUsd")),0)),B.bb,j.$2("Strength","+"+B.i.a5(D.c1(l.h(0,"strengthPct")),2)+"% in 15 min")],e),B.l,q,B.e,B.h,0,q,q)],e),B.B,q,B.e,B.h,0,B.p))},
cmO(a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=this,a1=null,a2="cost",a3="spreadPct",a4=D.dI(a6.h(0,"options"))
if(a4.a===0)return B.bK
if(J.z(a4.h(0,"weekend"),!0)){w=a4.h(0,"message")
return a0.Ri(a5,J.k(w==null?"":w),B.b_)}if(!J.z(a4.h(0,"enabled"),!0)){w=a4.h(0,"message")
w=J.k(w==null?"Options are not enabled on the paper account yet":w)
return a0.Ri(a5,w,J.z(a4.h(0,"enabled"),!1)?E.i0:B.b_)}v=D.dI(a4.h(0,"preview"))
u=J.z(a4.h(0,"fits"),!0)
w=a4.h(0,"right")
t=A.v(w==null?"call":w)
w=a4.h(0,"underlying")
s=A.v(w==null?"SPY":w)
w=x.g.a(a4.h(0,"tried"))
if(w==null)w=B.bQ
w=J.cQ(w,x.f)
w=A.cy(w,new D.e7G(),w.$ti.k("M.E"),x.P)
r=A.B(w,A.a3(w).k("M.E"))
w=s+" "
q=a5.a
p=A.E(A.c(w+t.toUpperCase()+" IT WOULD CHOOSE NOW",a1,a1,B.a2,a1,a1,a1,A.l(a1,a1,q?C.bX:C.bY,a1,a1,a1,a1,a1,a1,a1,a1,10.5,a1,a1,B.u,a1,a1,!0,a1,0.8,a1,a1,a1,a1,a1,a1),a1,a1,a1),1)
o=u?"FITS":"NONE FITS"
n=x.p
o=A.A(A.a([p,a0.BX(o,u?C.cJ:C.d9)],n),B.l,a1,B.e,B.h,0,a1,a1)
p=A.a([o,B.at,A.c("For the best-ranked market right now: a call when its trend is up, a put when it is down. Slightly out of the money, at least 3 days to expiry, $150 or less, spread at most 10% of the premium.",a1,a1,a1,a1,a1,a1,A.l(a1,a1,q?C.bX:C.bY,a1,a1,a1,a1,a1,a1,a1,a1,11.5,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1),B.M],n)
if(u&&v.a!==0){o=D.ej(D.c1(v.h(0,"strike")),!0,!1)
m=D.aQQ(v.h(0,"expiry"))
w=A.c(w+o+" "+t+" \xb7 expires "+m,a1,a1,a1,a1,a1,a1,A.l(a1,a1,q?C.cl:B.c,a1,a1,a1,a1,a1,a1,a1,a1,16,a1,a1,B.E,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1)
o=D.ej(D.c1(v.h(0,"premium")),!0,!1)
m=D.ej(D.c1(v.h(0,a2)),!0,!1)
l=D.ej(D.c1(a4.h(0,"spot")),!0,!1)
o=A.c("Premium "+o+" a share x 100 = "+m+"  \xb7  "+s+" "+l,a1,a1,a1,a1,a1,a1,A.l(a1,a1,q?C.bX:C.bY,a1,a1,a1,a1,a1,a1,a1,a1,12,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1)
m=a4.h(0,"why")
B.d.u(p,A.a([w,B.bs,o,B.at,A.c("It fits: "+A.v(m==null?"":m)+". On a passing setup it would buy this one.",a1,a1,a1,a1,a1,a1,C.fKK,a1,a1,a1)],n))}else{w=a4.h(0,"why")
p.push(A.c(A.v(w==null?"":w)+". It keeps checking every minute; the budget is never raised.",a1,a1,a1,a1,a1,a1,C.fQS,a1,a1,a1))}if(r.length!==0){w=A.c("The $150 stepping, in order:",a1,a1,a1,a1,a1,a1,A.l(a1,a1,q?C.cl:B.c,a1,a1,a1,a1,a1,a1,a1,a1,12,a1,a1,B.E,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1)
o=A.a([],n)
for(m=A.cU(r,0,A.dA(18,"count",x.S),A.U(r).c),l=m.$ti,m=new A.bP(m,m.gJ(0),l.k("bP<aj.E>")),l=l.k("aj.E");m.C();){k=m.d
if(k==null)k=l.a(k)
j=J.a2(k)
if(j.h(k,a2)!=null){i=j.h(k,a2)
if(!(typeof i=="number")){i=A.cv(A.v(i==null?"":i))
if(i==null)i=0}i=i<=150}else i=!1
if(i)i=C.cJ
else i=q?C.bX:C.bY
i=i.j(0.12)
h=new A.aP(8,8)
g=j.h(k,"strike")
if(!(typeof g=="number")){g=A.cv(A.v(g==null?"":g))
if(g==null)g=0}g=B.i.a5(g,0)
f=D.aQQ(j.h(k,"expiry"))
e=A.ag(", \\d{4}$",!0,!1,!1,!1)
f=A.aL(f,e,"")
if(j.h(k,a2)==null)e="no price"
else{e=j.h(k,a2)
if(!(typeof e=="number")){e=A.cv(A.v(e==null?"":e))
if(e==null)e=0}e=D.ej(e,!0,!1)}if(j.h(k,a3)!=null){d=j.h(k,a3)
if(!(typeof d=="number")){d=A.cv(A.v(d==null?"":d))
if(d==null)d=0}d=d>=100}else d=!0
if(d)k=""
else{k=j.h(k,a3)
if(!(typeof k=="number")){k=A.cv(A.v(k==null?"":k))
if(k==null)k=0}k=" \xb7 spread "+B.i.a5(k,0)+"%"}j=q?C.cl:B.c
o.push(A.p(a1,A.c("$"+g+" \xb7 "+f+" \xb7 "+e+k,a1,a1,a1,a1,a1,a1,new A.G(!0,j,a1,a1,a1,a1,10.5,B.N,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1),B.f,a1,a1,new A.o(i,a1,a1,new A.bb(h,h,h,h),a1,a1,B.m),a1,a1,a1,a1,B.eS,a1,a1,a1))}B.d.u(p,A.a([B.M,w,B.at,A.bZ(B.bI,o,B.br,a1,6,6)],n))}return a0.wp(a5,A.x(p,B.B,a1,B.e,B.h,0,B.p))},
cJH(d,e){var w,v,u=this,t=null,s=x.g.a(e.h(0,"trades"))
if(s==null)s=B.bQ
s=J.cQ(s,x.f)
s=A.cy(s,new D.e8_(),s.$ti.k("M.E"),x.P)
w=A.B(s,A.a3(s).k("M.E"))
s=d.a
v=A.a([A.c("Pretend trades",t,t,t,t,t,t,A.l(t,t,s?C.cl:B.c,t,t,t,t,t,t,t,t,16,t,t,B.E,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),B.aj],x.p)
if(w.length===0)v.push(A.c("No trades yet. This system is picky: it only takes strong setups.",t,t,t,t,t,t,A.l(t,t,s?C.bX:C.bY,t,t,t,t,t,t,t,t,12.5,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),t,t,t))
s=J.aQ(u.y?w:A.cU(w,0,A.dA(4,"count",x.S),A.U(w).c))
while(s.C())v.push(u.cJG(d,s.gP(s)))
s=w.length
if(s>4)v.push(A.at(A.bM(!1,A.c(u.y?"Show less":"Show all ("+s+")",t,t,t,t,t,t,t,t,t,t),t,t,!0,t,t,t,new D.e80(u),t,t),t,t,t))
return u.wp(d,A.x(v,B.B,t,B.e,B.h,0,B.p))},
cJG(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=null,g="entryPrice",f=J.a2(a3),e=J.z(f.h(a3,"decision"),"would buy"),d=D.dI(f.h(a3,"details")),a0=x.f.b(d.h(0,"option"))?D.dI(d.h(0,"option")):h,a1=D.c1(d.h(0,"pnl"))
if(e)w=B.cf
else w=a1>=0?C.cJ:C.d9
v=a0!=null
if(v){u=A.v(f.h(a3,"asset"))
t=D.ej(D.c1(a0.h(0,"strike")),!0,!1)
s=a0.h(0,"right")
r=u+" "+t+" "+A.v(s==null?"call":s)}else r=A.v(f.h(a3,"asset"))
if(e)q=v?"expires "+D.aQQ(a0.h(0,"expiry"))+" \xb7 premium "+D.ej(D.c1(d.h(0,g)),!0,!1)+" x 100":"at "+D.ej(D.c1(d.h(0,g)),!0,!1)
else{v=D.ej(D.c1(d.h(0,g)),!0,!1)
u=D.ej(D.c1(d.h(0,"exitPrice")),!0,!1)
t=d.h(0,"heldMin")==null?"":B.i.a5(D.c1(d.h(0,"heldMin")),0)+" min \xb7 "
s=f.h(a3,"reason")
q=v+" to "+u+" \xb7 "+t+D.ipf(J.k(s==null?"":s))}p=D.dI(d.h(0,"analysis"))
if(e){v=p.h(0,"why")
o=J.k(v==null?"":v)}else{v=d.h(0,"entryWhy")
o=J.k(v==null?"":v)}if(e)n=""
else{v=d.h(0,"result")
if(v==null)v=a1>0?"WIN":"LOSS"
n=J.k(v)}if(e)m=""
else{v=d.h(0,"lossText")
m=J.k(v==null?"":v)}v=o.length===0
u=v?h:new D.e7Y(this,a2,r,e,p,m,n,o)
t=a2.a
s=t?C.oL:C.oG
l=w.j(0.14)
k=A.n(12)
l=A.p(h,A.V(e?B.tR:B.rj,w,h,h,h,18),B.f,h,h,new A.o(l,h,h,k,h,h,B.m),h,36,h,h,h,h,h,36)
k=e?"Bought":"Sold"
k=A.c(k+" "+r,h,h,h,h,h,h,A.l(h,h,t?C.cl:B.c,h,h,h,h,h,h,h,h,13.5,h,h,B.E,h,h,!0,h,h,h,h,h,h,h,h),h,h,h)
j=x.p
k=A.a([k,A.c(q,h,2,B.a2,h,h,h,A.l(h,h,t?C.bX:C.bY,h,h,h,h,h,h,h,h,11.5,h,h,h,h,h,!0,h,h,h,h,h,h,h,h),h,h,h)],j)
if(m.length!==0)k.push(A.c(m,h,3,B.a2,h,h,h,C.aZ1,h,h,h))
if(!v){v=e?"Why this trade: "+o:n+" \xb7 it was bought because: "+o
if(e)i=this.a.c==="options"?B.az:B.as
else i=n==="WIN"?C.cJ:C.d9
k.push(A.c(v,h,2,B.a2,h,h,h,A.l(h,h,i,h,h,h,h,h,h,h,h,11,h,h,B.N,h,1.3,!0,h,h,h,h,h,h,h,h),h,h,h))}f=f.h(a3,"et_time")
f=J.k(f==null?"":f)
k.push(A.c(f,h,h,h,h,h,h,A.l(h,h,t?C.bX:C.bY,h,h,h,h,h,h,h,h,10.5,h,h,h,h,h,!0,h,h,h,h,h,h,h,h),h,h,h))
f=A.E(A.x(k,B.B,h,B.e,B.h,0,B.p),1)
v=e?"-"+D.ej(D.c1(d.h(0,"amount")),!0,!1):"+"+D.ej(D.c1(d.h(0,"outValue")),!0,!1)
v=A.a([A.c(v,h,h,h,h,h,h,A.l(h,h,t?C.cl:B.c,h,h,h,h,h,h,h,h,13.5,h,h,B.E,h,h,!0,h,h,h,h,h,h,h,h),h,h,h)],j)
if(!e){k=D.ej(a1,!0,!0)
v.push(A.c(k,h,h,h,h,h,h,A.l(h,h,a1>=0?C.cJ:C.d9,h,h,h,h,h,h,h,h,12,h,h,B.E,h,h,!0,h,h,h,h,h,h,h,h),h,h,h))}if(e)v.push(A.c("put in",h,h,h,h,h,h,A.l(h,h,t?C.bX:C.bY,h,h,h,h,h,h,h,h,11,h,h,h,h,h,!0,h,h,h,h,h,h,h,h),h,h,h))
return A.aM(!1,h,!0,A.p(h,A.A(A.a([l,B.ar,f,B.aa,A.x(v,B.dt,h,B.e,B.h,0,B.p)],j),B.l,h,B.e,B.h,0,h,h),B.f,h,h,new A.o(h,h,new A.bE(B.a1,B.a1,new A.ax(s,1,B.r,-1),B.a1),h,h,h,B.m),h,h,h,h,B.x0,h,h,h),h,!0,h,h,h,h,h,h,h,h,h,h,h,u,h,h,h,h,h,h,h)},
cDA(d,e,f){var w,v,u=null,t=x.g.a(f.h(0,"ranked"))
if(t==null)t=B.bQ
t=J.cQ(t,x.f)
t=A.cy(t,new D.e7V(),t.$ti.k("M.E"),x.P)
w=A.B(t,A.a3(t).k("M.E"))
v=D.dI(f.h(0,"record"))
t=this.c
t.toString
A.ce(u,u,!0,u,new D.e7W(d,e,f,new D.e7X(),v,w),t,u,!0,!0,x.H)},
bF1(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k="asset",j=m.z,i=m.e
i=j?i:A.cU(i,0,A.dA(4,"count",x.S),A.U(i).c).dk(0)
j=d.a
w=A.c("Activity",l,l,l,l,l,l,A.l(l,l,j?C.cl:B.c,l,l,l,l,l,l,l,l,16,l,l,B.E,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)
v=x.p
w=A.a([A.A(A.a([w,B.aW,A.c("newest first",l,l,l,l,l,l,A.l(l,l,j?C.bX:C.bY,l,l,l,l,l,l,l,l,11,l,l,l,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)],v),B.l,l,B.e,B.h,0,l,l),B.aj],v)
if(m.e.length===0)w.push(A.c("Nothing yet. Buys, sells and passing setups that were skipped show up here.",l,l,l,l,l,l,A.l(l,l,j?C.bX:C.bY,l,l,l,l,l,l,l,l,12.5,l,l,l,l,l,!0,l,l,l,l,l,l,l,l),l,l,l))
for(u=i.length,t=0;t<i.length;i.length===u||(0,A.I)(i),++t){s=i[t]
r=A.V(B.ni,j?C.bX:C.bY,l,l,l,7)
q=J.a2(s)
if(J.z(q.h(s,"kind"),"lesson"))p="Lesson"+(q.h(s,k)==null?"":" \xb7 "+A.v(q.h(s,k)))
else{p=q.h(s,"decision")
p=A.v(p==null?"":p)
p+=q.h(s,k)==null?"":" \xb7 "+A.v(q.h(s,k))}if(J.z(q.h(s,"kind"),"lesson"))o=m.a.c==="options"?B.az:B.as
else o=j?C.cl:B.c
p=A.c(p,l,l,l,l,l,l,new A.G(!0,o,l,l,l,l,12.5,B.E,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l),l,l,l)
o=q.h(s,"reason")
o=J.k(o==null?"":o)
n=j?C.bX:C.bY
p=A.x(A.a([p,A.c(o,l,l,l,l,l,l,new A.G(!0,n,l,l,l,l,11.5,l,l,l,l,l,1.3,l,l,l,l,l,l,l,l,l,l,l,l,l),l,l,l)],v),B.B,l,B.e,B.h,0,B.p)
q=q.h(s,"et_time")
q=D.hnS(J.k(q==null?"":q))
o=j?C.bX:C.bY
w.push(new A.D(B.jX,new A.c2(B.aK,B.e,B.h,B.B,l,B.p,l,0,A.a([new A.D(H.P4,r,l),B.aa,new A.bu(1,B.b9,p,l),B.bb,A.c(q,l,l,l,l,l,l,new A.G(!0,o,l,l,l,l,10.5,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l),l,l,l)],v),l),l))}if(m.e.length>4)w.push(A.at(A.bM(!1,A.c(m.z?"Show less":"Show all",l,l,l,l,l,l,l,l,l,l),l,l,!0,l,l,l,new D.e7q(m),l,l),l,l,l))
return m.wp(d,A.x(w,B.B,l,B.e,B.h,0,B.p))},
cya(d,e){var w,v,u,t,s,r,q,p,o,n,m=null,l=x.g.a(e.h(0,"rules"))
if(l==null)l=B.bQ
l=J.b8(l,new D.e7M(),x.N)
w=A.B(l,l.$ti.k("aj.E"))
l=this.c
l.toString
l=A.Q(l).aH1(B.L)
v=d.a
u=A.c("The rules it follows",m,m,m,m,m,m,A.l(m,m,v?C.cl:B.c,m,m,m,m,m,m,m,m,15,m,m,B.E,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)
t=x.p
s=A.a([],t)
for(r=w.length,q=0;q<w.length;w.length===r||(0,A.I)(w),++q){p=w[q]
o=this.a.c==="options"?B.az:B.as
o=A.c("\u2022  ",m,m,m,m,m,m,new A.G(!0,o,m,m,m,m,m,B.u,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m,m,m)
n=v?C.cl:B.c
s.push(new A.D(B.eI,new A.c2(B.aK,B.e,B.h,B.B,m,B.p,m,0,A.a([o,new A.bu(1,B.b9,A.c(p,m,m,m,m,m,m,new A.G(!0,n,m,m,m,m,12.5,m,m,m,m,m,1.35,m,m,m,m,m,m,m,m,m,m,m,m,m),m,m,m),m)],t),m),m))}return this.wp(d,new A.ou(l,L.hgg(m,s,B.ag,m,m,m,!1,m,m,m,B.ag,u),m))},
b3h(d,e,f){var w=null,v=d.a,u=v?B.c.j(0.92):C.im,t=A.n(20),s=e==null?w:e.j(0.5)
if(s==null)v=v?B.c:C.n6
else v=s
v=A.K(v,B.r,1)
s=A.a([new A.aa(0,B.H,d.gI3(),B.cz,14)],x.V)
return A.p(w,A.aG(!1,B.a3,!0,w,f,B.f,w,0,w,w,w,w,w,B.i5),B.f,w,w,new A.o(u,w,v,t,s,w,B.m),w,w,w,B.dU,B.bF,w,w,w)},
wp(d,e){return this.b3h(d,null,e)},
Ri(d,e,f){var w=null,v=f.j(0.12),u=A.n(16),t=A.K(f.j(0.45),B.r,1),s=A.V(B.QG,f,w,w,w,20)
return A.p(w,A.A(A.a([s,B.ar,A.E(A.c(e,w,w,w,w,w,w,A.l(w,w,d.a?C.cl:B.c,w,w,w,w,w,w,w,w,12.5,w,w,w,w,1.35,!0,w,w,w,w,w,w,w,w),w,w,w),1)],x.p),B.l,w,B.e,B.h,0,w,w),B.f,w,w,new A.o(v,w,t,u,w,w,B.m),w,w,w,B.dU,B.bg,w,w,w)},
BX(d,e){var w=null,v=e.j(0.14),u=A.n(999)
return A.p(w,A.c(d,w,w,w,w,w,w,A.l(w,w,e,w,w,w,w,w,w,w,w,10,w,w,B.u,w,w,!0,w,0.5,w,w,w,w,w,w),w,w,w),B.f,w,w,new A.o(v,w,w,u,w,w,B.m),w,w,w,w,B.fa,w,w,w)},
a0T(d,e,f){var w=null,v=d.a,u=v?B.c.j(0.92):C.im,t=A.K(v?B.c:C.n6,B.r,1)
return A.aG(!1,B.a3,!0,w,A.aM(!1,w,!0,A.p(w,A.V(e,v?C.cl:B.c,w,w,w,18),B.f,w,w,new A.o(w,w,t,w,w,w,B.a6),w,40,w,w,w,w,w,40),B.cL,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),B.f,u,0,w,w,B.cL,w,w,B.ai)}}
D.aBh.prototype={
R(){return new D.bf9()}}
D.bf9.prototype={
a_(){this.a3()
this.d=A.d0(B.fp,new D.da_(this))},
t(){var w=this.d
if(w!=null)w.a1(0)
this.a2()},
B(d){var w,v,u,t=null,s=this.a.c,r=s==null?t:s.bx(new A.W(Date.now(),0,!1))
if(r==null||r.a<0)w="0:00"
else{s=r.a
w=""+B.o.ao(s,6e7)+":"+B.a.b_(B.o.v(B.o.F(B.o.ao(s,1e6),60)),2,"0")}v=this.a.d
s=v.j(0.14)
u=A.n(999)
return A.p(t,A.c("closes in "+w+" at most",t,t,t,t,t,t,A.l(t,t,v,t,t,t,t,t,t,t,t,10,t,t,B.u,t,t,!0,t,0.5,t,t,t,t,t,t),t,t,t),B.f,t,t,new A.o(s,t,t,u,t,t,B.m),t,t,t,t,B.fa,t,t,t)}}
D.aKv.prototype={
R(){return new D.bvM()}}
D.bvM.prototype={
a_(){this.a3()
this.d=A.d0(B.fp,new D.fg_(this))},
t(){var w=this.d
if(w!=null)w.a1(0)
this.a2()},
B(a1){var w,v,u,t,s,r,q,p,o,n=this,m=null,l=new A.W(Date.now(),0,!1).aa(),k=n.a.c.aa().bL(3e8),j=n.a,i=j.d.aa(),h=B.o.ao(i.bx(j.c.aa()).a,6e7),g=j.e?C.cJ:C.d9,f=l.ca(k),e=l.ca(i),d=A.aWS(A.bD(l),A.bN(l),A.bW(l),A.d5(l),A.fE(l),0,0,0).bL(6e7).bx(l),a0=B.o.ao(d.a,1e6)>=45
if(e){w="Being graded now: WIN if the price finished "+(n.a.e?"higher":"lower")+"."
v="SIGNAL CLOSED"}else if(f){v="TOO LATE TO ENTER"
w="The 5-minute entry window has passed. Wait for the next signal: entering an old signal is how money is lost."}else{if(a0)v=(n.a.e?"BUY":"SELL")+" NOW"
else v="Enter in "+D.ffX(d)
w="Entry window closes in "+D.ffX(k.bx(l))+" \xb7 enter at the start of a minute."}j=new D.ffY()
u=!f
t=!u||e?B.an:g
s=A.n(14)
r=A.a([new A.aa(0,B.H,(!u||e?B.v:g).j(0.25),B.cP,12)],x.V)
q=A.c(v,m,m,m,m,m,m,A.l(m,m,B.c,m,m,m,m,m,m,m,G.Av,a0&&u&&!e?26:22,m,m,B.u,m,m,!0,m,0.6,m,m,m,m,m,m),B.K,m,m)
p=A.c(w,m,m,m,m,m,m,C.fE3,B.K,m,m)
o=j.$2("Trade for",""+h+" min")
u=x.p
return A.p(m,A.x(A.a([q,B.bs,p,B.M,A.A(A.a([o,B.bb,j.$2("Entry window",f?"closed":D.ffX(k.bx(l))),B.bb,j.$2("Signal closes in",D.ffX(i.bx(l)))],u),B.l,m,B.e,B.h,0,m,m)],u),B.l,m,B.e,B.h,0,B.p),B.f,m,m,new A.o(t,m,m,s,r,m,B.m),m,m,m,m,B.bg,m,m,1/0)}}
D.aCA.prototype={
R(){return new D.bi0()}}
D.bi0.prototype={
a_(){this.a3()
this.d=A.d0(B.fp,new D.din(this))},
t(){var w=this.d
if(w!=null)w.a1(0)
this.a2()},
B(d){var w=null,v=this.a.c*60,u=B.o.F(B.o.ao(new A.W(Date.now(),0,!1).aa().a,1000),v),t=u<15,s=v-u,r=t?"ENTER NOW":"Enter in "+B.o.ao(s,60)+":"+B.a.b_(B.o.v(B.o.F(s,60)),2,"0"),q=t?B.c:B.c.j(0.18),p=A.n(999),o=t?B.fM:B.mw
o=A.V(o,t?B.v:B.c,w,w,w,20)
return A.cV(w,A.A(A.a([o,B.bb,A.c(r,w,w,w,w,w,w,A.l(w,w,t?B.v:B.c,w,w,w,w,w,w,w,G.Av,22,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),B.l,w,B.e,B.O,0,w,w),w,w,B.aZ,new A.o(q,w,w,p,w,w,B.m),B.ia,w,w,w,w,B.HO,w,w,w)}}
D.cF.prototype={}
D.uv.prototype={}
D.XL.prototype={
R(){var w,v,u,t=null,s=x.N,r=x.z
r=A.J(["done",A.a([],x.s),"lessons",A.S(s,r)],s,r)
s=$.hlo
w=$.az()
v=A.mj(0,t,t)
u=A.a([],x.t)
return new D.aHq(r,new A.au(new A.bd(s,B.b6,B.aP),w),v,u,new A.au(B.ax,w),B.cH,B.Z,t,t)}}
D.a_G.prototype={}
D.aHq.prototype={
gLm(){var w,v=this,u=v.d
if(u===$){v.a.toString
w=A.acA(null,0,3,v)
v.d!==$&&A.bF()
v.d=w
u=w}return u},
gK5(){var w=x.g.a(this.x.h(0,"done"))
if(w==null)w=B.bQ
return J.b8(w,new D.eI_(),x.N).fD(0)},
a_(){var w,v,u,t=this
t.a3()
w=t.e=t.a.c
v=w==null
t.y=!v
t.ay=D.eII(v?null:J.t(w,"fx"))
w=t.a.c
u=D.eII(w==null?null:J.t(w,"markets"))
if(u.length!==0)t.f=u
t.r=new A.W(Date.now(),0,!1)
t.gLm().aU(0,new D.eIO(t))
$.aM2=$.aM2+1
t.at.aU(0,new D.eIP(t))
if($.DB.length!==0||$.ahd)t.aD2()
if(!t.a.d){t.a0S()
t.Rj()
A.T4().bE(new D.eIQ(t),x.H)
t.w=A.d0(B.hb,new D.eIR(t))}},
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
D.hFc()
v.bBC()},
a0S(){return this.c7j()},
c7j(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f
var $async$a0S=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:g={}
g.a=null
t=4
w=7
return A.b(A.aB(),$async$a0S)
case 7:q=e
p=A.aV(J.t(q.a,"ngmy_signal_grid_academy_v2"))
n=p!=null?g.a=A.a0(x.f.a(B.U.aP(0,p,null)),x.N,x.z):null
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
return A.b(A.fP(A.J(["action","paLearnGet"],n,m),!1,!1,!1,!1,B.hb),$async$a0S)
case 8:k=e
if(r.c==null){w=1
break}j=k==null?null:J.t(k,"progress")
i=x.f
if(i.b(j)){k.toString
h=A.a0(i.a(J.t(k,"progress")),n,m)}else h=null
r.l(new D.eIk(g,r,k,h))
if(h==null&&g.a!=null)r.aCT()
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$a0S,v)},
aCT(){var w=this.as
if(w!=null)w.a1(0)
this.as=A.cB(S.CZ,new D.eIt(this))},
aef(d){return this.c6q(d)},
c6q(d){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$aef=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=B.d.cw(C.Ei,new D.eI2(u))
u.l(new D.eI3(u,d))
u.aCT()
t=B.d.cw(C.Ei,new D.eI4(u))
w=!r&&t&&u.c!=null?2:3
break
case 2:s=u.c
s.toString
w=4
return A.b(A.ce(null,null,!0,null,new D.eI5(u),s,null,!0,!0,x.H),$async$aef)
case 4:case 3:return A.h(null,v)}})
return A.i($async$aef,v)},
Rj(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Rj=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(A.fP(A.J(["action","paSignals"],x.N,x.z),!1,!1,!1,!1,B.wZ),$async$Rj)
case 3:r=e
if(t.c==null||r==null||!J.z(J.t(r,"ok"),!0)){w=1
break}s=J.a2(r)
t.l(new D.eIs(t,D.eII(s.h(r,"fx")),D.eII(s.h(r,"markets")),r))
case 1:return A.h(u,v)}})
return A.i($async$Rj,v)},
gatt(){var w=A.B(this.gyC(),x.P)
B.d.u(w,this.ay)
return w},
gyC(){var w=this.f
if(w==null){w=this.e
w=D.fC7(D.dI(D.dI(w==null?null:J.t(w,"state")).h(0,"snapshot")))}return w},
gcEB(){var w=this.gyC(),v=A.U(w).k("X<1>"),u=A.B(new A.X(w,new D.eIG(),v),v.k("M.E"))
if(u.length===0)return this.gyC().length===0?null:B.d.gH(this.gyC())
B.d.b0(u,new D.eIH())
return B.d.gH(u)},
c6X(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,a0=" dollars. It sells at +50 or -50 dollars.",a1=e.e,a2=D.dI(a1==null?d:J.t(a1,"state"))
a1=x.f
w=a1.b(a2.h(0,"shadow"))?D.dI(a2.h(0,"shadow")):d
v=e.e
u=D.dI(v==null?d:J.t(v,"today"))
v=e.e
t=D.dI(v==null?d:J.t(v,"record"))
v=e.dy
if(!(v.length!==0)){v=e.e
v=v==null?d:J.t(v,"nowEt")
if(v==null)v="unknown"}v="LIVE DATA from the NGMY paper trading agent (Eastern Time now: "+A.v(v)+"):\n"
if(e.e!=null){s=J.z(a2.h(0,"enabled"),!0)?"running":"stopped"
r=J.z(a2.h(0,"brakePaused"),!0)?", paused by the 25 dollar brake":""
q=D.ej(D.c1(a2.h(0,"totalPnl")),!0,!0)
p=D.ej(D.c1(u.h(0,"day_pnl")),!0,!0)
o=t.h(0,"wins")
o=A.v(o==null?0:o)
n=t.h(0,"losses")
v+="Agent: "+s+r+". Pretend P/L all time "+q+", today "+p+", wins "+o+", losses "+A.v(n==null?0:n)+".\n"}if(e.e==null)a1=v
else if(w!=null){m=D.c1(J.t(B.d.dr(e.gyC(),new D.eI8(w),new D.eI9()),"price"))
l=D.c1(w.h(0,"entryPrice"))
k=a1.b(w.h(0,"option"))?D.dI(w.h(0,"option")):d
a1=e.e
j=D.dI(D.dI(D.dI(a1==null?d:J.t(a1,"state")).h(0,"snapshot")).h(0,"held"))
i=j.h(0,"pnl")==null?d:D.c1(j.h(0,"pnl"))
h=i==null?"unknown":B.i.a5(i,2)
a1=v+((k!=null?"Open pretend trade: 1 SPY call option, strike "+B.i.a5(D.c1(k.h(0,"strike")),0)+", expires "+A.v(k.h(0,"expiry"))+", premium paid "+B.i.a5(l,2)+" a share ("+B.i.a5(D.c1(k.h(0,"cost")),2)+" dollars). Win or loss now: "+h+a0:"Open pretend trade: "+A.v(w.h(0,"symbol"))+", bought at "+B.i.a5(l,2)+", now "+B.i.a5(m,2)+". Win or loss now: "+h+a0)+"\n")}else a1=v+"No open pretend trade.\n"
g=new D.eIa()
a1+="Agent markets (5-minute candles; fast line = 9-candle average, slow = 21-candle average; strength 0 bearish to 100 bullish):\n"
for(v=e.gyC(),s=v.length,f=0;f<v.length;v.length===s||(0,A.I)(v),++f)a1+=A.v(g.$1(v[f]))+"\n"
v=e.ay
s=v.length
if(s!==0){a1+="Forex pairs (real interbank prices, 1-minute candles, signals only; the agent does not trade them; OTC prices at brokers differ):\n"
for(f=0;f<v.length;v.length===s||(0,A.I)(v),++f)a1+=A.v(g.$1(v[f]))+"\n"}return a1.charCodeAt(0)==0?a1:a1},
K4(d){return this.bHy(d)},
bHy(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j
var $async$K4=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:j=B.a.i(d)
if(j.length===0||$.ahd){w=1
break}t.at.bN(0,B.ck)
t.l(new D.eHW(t,j))
t.aD2()
s=$.DB.length
if(s>1){s=B.d.du($.DB,Math.max(0,s-9),s-1)
r=new A.O(s,new D.eHX(),A.U(s).k("O<1,m>")).aL(0,"\n")}else r=""
s=t.e
s=s==null?null:J.t(s,"rules")
x.g.a(s)
if(s==null)s=t.dx
q=x.N
p=J.b8(s,new D.eHY(),q).aL(0,"\n")
s=t.c6X()
o=r.length===0?"":"\nCONVERSATION SO FAR:\n"+r+"\n"
n=$.foH
w=t.a.d?3:5
break
case 3:m="Preview mode: the tutor answers here using the live readings."
w=4
break
case 5:w=6
return A.b(A.fP(A.J(["action","chat","prompt",'You are the NGMY Signal Grid trading tutor. You teach a complete beginner how trading works, using the live market data and the rules of the NGMY paper trading agent below.\nHow to answer:\n- Plain, friendly, simple English. Short sentences. No jargon without explaining it. Usually under 170 words.\n- When the question is about a market or "right now", use the LIVE DATA and quote the real numbers (price, trend, strength, RSI, last hour), then explain what they mean and what the agent\'s rules say.\n- Say clearly whether a market looks bullish, bearish or sideways and why, and what would need to happen for a buy or sell signal under the agent\'s rules.\n- This is practice with pretend (paper) money. You may explain what the rules signal, but never promise profit, never say a price will surely go up or down, and never tell the student to trade real or borrowed money. Remind them briefly when it fits that signals can fail and the stop loss keeps losses small.\n- No markdown headings or tables. You may use short lines starting with "- ".\n\nAGENT RULES:\n'+p+"\n\n"+s+"\n"+o+"\nStudent: "+j+"\nTutor:"],q,x.z),!1,!1,!1,!1,B.nX),$async$K4)
case 6:l=f
s=l==null
if(s)k=null
else{q=J.t(l,"text")
q=q==null?null:B.a.i(J.k(q))
k=q}if(k==null)k=""
if(k.length!==0){s=A.aL(k,"**","")
q=A.ag("^#+\\s*",!0,!1,!0,!1)
m=A.aL(s,q,"")}else{s=s?null:J.t(l,"error")
m=J.k(s==null?"The tutor could not answer just now. Please try again.":s)}case 4:if(n!==$.foH){w=1
break}$.DB.push(new D.a_G(!1,m))
$.ahd=!1
if(t.c==null){w=1
break}t.l(new D.eHZ())
t.aD2()
case 1:return A.h(u,v)}})
return A.i($async$K4,v)},
aD2(){$.aU.U$.push(new D.eIu(this))},
aR5(d){this.gLm().C7(2)
this.K4(d)},
B(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=A.Q(a0).ax.a===B.dh,f=new D.Rp(g),e=g?C.t4:C.t2,d=g?C.t4:C.t2
d=A.a([d,g?C.O0:C.NU],x.O)
w=i.a0T(f,B.eB,new D.eIK(a0))
v=A.c("Trading Academy",h,h,h,h,h,h,A.l(h,h,g?C.cl:B.c,h,h,h,h,h,h,h,h,17,h,h,B.E,h,h,!0,h,h,h,h,h,h,h,h),h,h,h)
u=x.p
v=A.A(A.a([w,B.ar,A.E(A.x(A.a([v,A.c("Lessons, live signals and a tutor",h,h,h,h,h,h,A.l(h,h,g?C.bX:C.bY,h,h,h,h,h,h,h,h,11.5,h,h,h,h,h,!0,h,h,h,h,h,h,h,h),h,h,h)],u),B.B,h,B.e,B.h,0,B.p),1),A.p(h,C.foi,B.f,h,h,new A.o(C.cJ.j(0.14),h,h,A.n(999),h,h,B.m),h,h,h,h,B.fZ,h,h,h)],u),B.l,h,B.e,B.h,0,h,h)
w=g?C.O7:C.NY
t=A.n(999)
s=A.a([],u)
for(r=[C.feo,C.fcC,C.fdk],q=r.length,p=0;p<q;++p){o={}
n=r[p]
o.a=null
o.a=n.a
m=i.gLm().d===o.a
if(m)l=g?C.mZ:B.c
else l=B.L
k=new A.aP(999,999)
if(m)j=g?B.c:C.mZ
else j=g?C.bX:C.bY
j=A.V(n.c,j,h,h,h,15)
if(m)m=g?B.c:C.mZ
else m=g?C.bX:C.bY
s.push(new A.bu(1,B.b9,A.aA(h,A.cV(h,new A.c2(B.aK,B.ba,B.h,B.l,h,B.p,h,0,A.a([j,B.dZ,new A.d1(1,B.cg,A.c(n.b,h,h,B.a2,h,h,h,new A.G(!0,m,h,h,h,h,12.5,B.E,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h),h,h,h),h)],u),h),h,h,B.aZ,new A.o(l,h,h,new A.bb(k,k,k,k),h,h,B.m),B.a3,h,h,h,h,B.x0,h,h,h),B.y,!1,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,new D.eIL(o,i),h,h,h,h,h,h,!1,B.a4),h))}g=A.p(h,A.A(s,B.l,h,B.e,B.h,0,h,h),B.f,h,h,new A.o(w,h,h,t,h,h,B.m),h,h,h,h,B.eA,h,h,h)
w=i.gLm()
return A.c6(h,e,A.p(h,A.bo(!0,A.x(A.a([new A.D(C.bGi,v,h),new A.D(B.ao9,g,h),A.E(A.baG(A.a([i.c6u(f),i.cDG(f),i.bHE(f)],u),w,h),1)],u),B.l,h,B.e,B.h,0,B.p),!0,!1,B.ag,!0,!0),B.f,h,h,new A.o(h,h,h,h,h,new A.a8(B.aX,B.b1,B.x,d,h,h),B.m),h,h,h,h,h,h,h,h),h,!1,!1,h,h)},
a0T(d,e,f){var w=null,v=d.a,u=v?B.c.j(0.92):C.im,t=A.K(v?B.c:C.n6,B.r,1)
return A.aG(!1,B.a3,!0,w,A.aM(!1,w,!0,A.p(w,A.V(e,v?C.cl:B.c,w,w,w,18),B.f,w,w,new A.o(w,w,t,w,w,w,B.a6),w,40,w,w,w,w,w,40),B.cL,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),B.f,u,0,w,w,B.cL,w,w,B.ai)},
c6u(d){var w,v=null,u=new A.X(C.Ei,new D.eI7(this),x.E).gJ(0),t=A.n(24),s=x.p
s=A.a([A.p(v,A.x(A.a([C.hf_,B.at,C.fWD,B.aB,A.bx(A.n(9),A.jE(B.c.j(0.18),v,v,8,v,u/10,B.afe),B.aq),B.aj,A.c(""+u+" of 10 lessons done",v,v,v,v,v,v,B.acF,v,v,v)],s),B.B,v,B.e,B.h,0,B.p),B.f,v,v,new A.o(v,v,v,t,v,C.cei,B.m),v,v,v,v,B.f9,v,v,v),B.aB],s)
for(w=0;w<10;++w)s.push(this.c6s(d,w))
s.push(B.aj)
s.push(A.c("Practice with pretend money. Signals and lessons are for learning; markets can always surprise.",v,v,v,v,v,v,A.l(v,v,d.a?C.bX:C.bY,v,v,v,v,v,v,v,v,11,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),B.K,v,v))
return A.co(s,v,v,C.aod,v,v,B.ah,!1)},
c6s(d,e){var w,v,u,t=null,s=C.Ei[e],r=this.gK5().q(0,s.a),q=d.a,p=q?B.c.j(0.92):C.im,o=A.n(20),n=A.K(q?B.c:C.n6,B.r,1),m=A.a([new A.aa(0,B.H,d.gI3(),B.hR,14)],x.V),l=A.n(15)
l=A.p(t,A.V(s.e,B.c,t,t,t,t),B.f,t,t,new A.o(s.f,t,t,l,t,t,B.m),t,46,t,t,t,t,t,46)
w=A.c("Lesson "+(e+1)+" \xb7 "+s.d+" min",t,t,t,t,t,t,A.l(t,t,q?C.bX:C.bY,t,t,t,t,t,t,t,t,11,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)
v=A.c(s.b,t,t,t,t,t,t,A.l(t,t,q?C.cl:B.c,t,t,t,t,t,t,t,t,15,t,t,B.E,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)
u=x.p
v=A.E(A.x(A.a([w,v,A.c(s.c,t,t,t,t,t,t,A.l(t,t,q?C.bX:C.bY,t,t,t,t,t,t,t,t,12,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],u),B.B,t,B.e,B.h,0,B.p),1)
w=r?B.ea:B.eM
if(r)q=C.cJ
else q=q?C.bX:C.bY
return A.aA(t,A.p(t,A.A(A.a([l,B.bc,v,A.V(w,q,t,t,t,t)],u),B.l,t,B.e,B.h,0,t,t),B.f,t,t,new A.o(p,t,n,o,m,t,B.m),t,t,t,B.d6,B.bF,t,t,t),B.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new D.eI6(this,s),t,t,t,t,t,t,!1,B.a4)},
clN(d){var w=this.c
w.toString
A.a7(w,!1).cc(A.eb(new D.eIq(this,d),!1,null,x.H))},
c70(c1,c2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6=this,b7=null,b8="reading",b9="rsi",c0=b6.gcEB()
if(c0==null)return A.c("Live example appears once the markets have loaded.",b7,b7,b7,b7,b7,b7,A.l(b7,b7,c1.a?C.bX:C.bY,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,!0,b7,b7,b7,b7,b7,b7,b7,b7),b7,b7,b7)
w=J.a2(c0)
v=J.k(w.h(c0,"asset"))
u=D.bFa(c0)
t=D.dI(w.h(c0,b8))
s=D.c1(w.h(c0,"price"))
r=new D.eIb(u,c1,s)
q=new D.eIj(c1)
switch(c2){case"basics":p=u.length!==0?D.c1(J.t(B.d.gH(u),"c")):s
o=p===0?100:100*s/p
w=q.$1("Right now "+v+" is "+D.ej(s,!0,!1)+". About 4 hours ago it was "+D.ej(p,!0,!1)+".")
n=D.ej(o,!0,!1)
m=o>=100?"a win of":"a loss of"
return A.x(A.a([w,B.M,q.$1("If you had put $100 into "+v+" then, it would be worth "+n+" now: "+m+" "+D.ej(Math.abs(o-100),!0,!1)+". That difference is your profit or loss.")],x.p),B.B,b7,B.e,B.h,0,B.p)
case"candles":l=u.length!==0?B.d.gal(u):A.S(x.N,x.z)
w=J.a2(l)
n=D.c1(w.h(l,"c"))
m=D.c1(w.h(l,"o"))
k=r.$2$last$lines(24,!1)
j=D.ej(D.c1(w.h(l,"o")),!0,!1)
i=D.ej(D.c1(w.h(l,"c")),!0,!1)
n=n>=m?"GREEN: buyers won those 5 minutes":"YELLOW: sellers won those 5 minutes"
return A.x(A.a([k,B.M,q.$1("The last finished "+v+" candle opened at "+j+" and closed at "+i+", so it is "+n+". Its high was "+D.ej(D.c1(w.h(l,"h")),!0,!1)+" and its low "+D.ej(D.c1(w.h(l,"l")),!0,!1)+".")],x.p),B.B,b7,B.e,B.h,0,B.p)
case"trend":w=x.N
h=A.S(w,x.S)
for(n=b6.gyC(),m=n.length,k=x.z,j=x.f,g=0;g<n.length;n.length===m||(0,A.I)(n),++g){i=J.t(n[g],b8)
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
return A.x(A.a([w,B.M,q.$1(v+" is "+n.toUpperCase()+" right now. Across the markets:"+m+" bullish, "+k+" bearish, "+j+" sideways.")],x.p),B.B,b7,B.e,B.h,0,B.p)
case"ma":e=D.c1(w.h(c0,"fast"))
d=D.c1(w.h(c0,"slow"))
w=r.$0()
n=D.ej(e,!0,!1)
m=D.ej(d,!0,!1)
k=e>=d
j=k?"ABOVE":"BELOW"
k=k?"UP":"DOWN"
return A.x(A.a([w,B.M,q.$1("On "+v+" the pink fast line is at "+n+" and the purple slow line at "+m+". The fast line is "+j+" the slow line, so the short-term trend is "+k+".")],x.p),B.B,b7,B.e,B.h,0,B.p)
case"cross":w=b6.gyC()
n=A.U(w)
m=n.k("cN<1,@>")
a0=A.B(new A.cN(new A.X(w,new D.eIc(),n.k("X<1>")),new D.eId(),m),m.k("M.E"))
w=b6.gyC()
n=A.U(w)
m=n.k("cN<1,@>")
a1=A.B(new A.cN(new A.X(w,new D.eIe(),n.k("X<1>")),new D.eIf(),m),m.k("M.E"))
w=r.$0()
if(a0.length!==0)n="Fresh BUY crosses right now: "+B.d.aL(a0,", ")+". On its next automatic check the agent would buy if it holds nothing and it is the market traded today."
else n="No fresh buy cross in any open market right now. "+(a1.length!==0?"Fresh sell crosses: "+B.d.aL(a1,", ")+". ":"")+"The agent simply waits; no signal means no trade."
return A.x(A.a([w,B.M,q.$1(n)],x.p),B.B,b7,B.e,B.h,0,B.p)
case"rsi":w=b6.gyC()
n=A.U(w).k("X<1>")
a2=A.B(new A.X(w,new D.eIg(),n),n.k("M.E"))
w=x.p
n=A.a([],w)
for(m=a2.length,k=c1.a,j=x.N,i=x.z,a3=x.f,a4=x.c,g=0;g<a2.length;a2.length===m||(0,A.I)(a2),++g){a5=a2[g]
a6=J.a2(a5)
a7=J.k(a6.h(a5,"asset"))
a8=k?C.cl:B.c
a7=A.c(a7,b7,b7,b7,b7,b7,b7,new A.G(!0,a8,b7,b7,b7,b7,12,B.E,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7),b7,b7,b7)
a8=new A.aP(9,9)
a9=a6.h(a5,b8)
a9=(a3.b(a9)?A.a0(a9,j,i):A.S(j,i)).h(0,b9)
if(!(typeof a9=="number")){a9=A.cv(A.v(a9==null?"":a9))
if(a9==null)a9=0}b0=k?C.O7:C.NY
b1=a6.h(a5,b8)
b1=(a3.b(b1)?A.a0(b1,j,i):A.S(j,i)).h(0,b9)
if(!(typeof b1=="number")){b1=A.cv(A.v(b1==null?"":b1))
if(b1==null)b1=0}if(b1>=70)b1=C.d9
else{b1=a6.h(a5,b8)
b1=(a3.b(b1)?A.a0(b1,j,i):A.S(j,i)).h(0,b9)
if(!(typeof b1=="number")){b1=A.cv(A.v(b1==null?"":b1))
if(b1==null)b1=0}b1=b1<=30?B.cF:C.cJ}b1=A.jE(b0,b7,b7,8,b7,a9/100,new A.kT(b1,a4))
a6=a6.h(a5,b8)
a6=(a3.b(a6)?A.a0(a6,j,i):A.S(j,i)).h(0,b9)
if(!(typeof a6=="number")){a6=A.cv(A.v(a6==null?"":a6))
if(a6==null)a6=0}a6=B.i.a5(a6,0)
a9=k?C.cl:B.c
n.push(new A.D(B.cB,new A.c2(B.aK,B.e,B.h,B.l,b7,B.p,b7,0,A.a([new A.a4(70,b7,a7,b7),new A.bu(1,B.b9,new A.ni(new A.bb(a8,a8,a8,a8),B.aq,b1,b7),b7),B.aa,new A.a4(26,b7,A.c(a6,b7,b7,b7,b7,b7,b7,new A.G(!0,a9,b7,b7,b7,b7,12,B.E,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7),b7,b7,b7),b7)],w),b7),b7))}n.push(q.$1("Red bars are above 70 (stretched), blue below 30 (oversold), green in between (healthy)."))
return A.x(n,B.B,b7,B.e,B.h,0,B.p)
case"risk":return A.x(A.a([q.$1("Every agent trade is about $100 (of a stock on weekdays, of a coin on weekends). "+v+" is "+D.ej(s,!0,!1)+" right now."),B.aj,q.$1("- Take profit: it sells when the trade is up $50"),q.$1("- Stop loss: it sells when the trade is down $50"),B.aj,q.$1("Win 5 and lose 5 of 10 trades: 5 x 50 - 5 x 50 = $0.00. That is break even. Win 6 of 10 and you are up $100.")],x.p),B.B,b7,B.e,B.h,0,B.p)
case"brakes":w=b6.e
if(w==null)return q.$1('Try it yourself: before your next practice day, write down "I stop after losing $50 today". If three trades in a row lose, close the app and come back tomorrow. That is exactly what the agent does.')
b2=D.dI(J.t(w,"state"))
w=b6.e
w=D.ej(D.c1(D.dI(w==null?b7:J.t(w,"today")).h(0,"day_pnl")),!0,!0)
n=D.ej(D.c1(b2.h(0,"totalPnl")),!0,!0)
m=J.z(b2.h(0,"brakePaused"),!0)?"The brake is ON right now.":"Both brakes are off, it can keep trading."
return q.$1("Today the agent is at "+w+" (the daily stop is -$50) and "+n+" all time (the brake is -$100)."+m)
case"hours":if(b6.f!=null)b3=b6.fr
else{w=b6.e
b3=J.z(D.dI(w==null?b7:J.t(w,"market")).h(0,"stockOpen"),!0)}b4=B.d.aR(b6.ay,new D.eIh())
w=b3?"OPEN":"CLOSED"
n=b4?"OPEN":"CLOSED"
return q.$1("Right now the US stock market is "+w+", the forex market is "+n+", and crypto is open, as always.")
case"practice":w=b6.e
if(w==null){w=b6.gatt()
return q.$1("Right now "+new A.X(w,new D.eIi(),A.U(w).k("X<1>")).gJ(0)+" of "+b6.gatt().length+" markets have signals that worked at least half the time lately. That is why a journal and many trades matter: some markets suit a method, others do not.")}b5=D.dI(J.t(w,"record"))
w=b5.h(0,"trades")
w=A.v(w==null?0:w)
n=b5.h(0,"wins")
n=A.v(n==null?0:n)
m=b5.h(0,"losses")
return q.$1("The agent journal so far: "+w+" finished pretend trades, "+n+" wins and "+A.v(m==null?0:m)+" losses. Keep watching until there are at least 20 before judging it.")}return B.bK},
cDG(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=null,e=B.a.i(g.ch),d=g.gatt(),a0=A.U(d).k("X<1>"),a1=A.B(new A.X(d,new D.eIz(g,e.toLowerCase()),a0),a0.k("M.E"))
B.d.b0(a1,new D.eIA())
w=g.db
if(g.r==null)v=0
else{e=Date.now()
u=g.r
u.toString
v=B.o.ao(new A.W(e,0,!1).bx(u).a,1e6)}if(v<20)t="just now"
else t=v<60?""+v+" s ago":""+B.o.ao(v,60)+" min ago"
e=x.p
u=A.a([],e)
for(s=a2.a,r=0;r<4;++r){q=C.d6k[r]
if(g.cx===q)p=s?C.mZ:B.c
else p=s?B.c.j(0.92):C.im
o=new A.aP(999,999)
n=new A.ax(s?C.oL:C.oG,1,B.r,-1)
m=q==="All"?"All "+d.length:q+" "+new A.X(d,new D.eIB(q),a0).gJ(0)
if(g.cx===q)l=s?B.c:C.mZ
else l=s?C.cl:B.c
B.d.u(u,A.a([A.aA(f,A.p(f,A.c(m,f,f,f,f,f,f,new A.G(!0,l,f,f,f,f,12,B.E,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f),f,f,f),B.f,f,f,new A.o(p,f,new A.bE(n,n,n,n),new A.bb(o,o,o,o),f,f,B.m),f,f,f,f,C.bGs,f,f,f),B.y,!1,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,new D.eIC(g,q),f,f,f,f,f,f,!1,B.a4),B.bb],e))}a0=A.E(A.cb(A.A(u,B.l,f,B.e,B.h,0,f,f),B.t,f,B.y,f,f,f,f,f,B.aK),1)
u=g.CW?B.cC:B.eN
u=A.a([A.A(A.a([a0,B.bb,g.a0T(a2,u,new D.eID(g))],e),B.l,f,B.e,B.h,0,f,f)],e)
if(g.CW){a0=A.l(f,f,s?C.cl:B.c,f,f,f,f,f,f,f,f,f,f,f,f,f,f,!0,f,f,f,f,f,f,f,f)
p=A.l(f,f,s?C.bX:C.bY,f,f,f,f,f,f,f,f,13,f,f,f,f,f,!0,f,f,f,f,f,f,f,f)
o=A.V(B.eN,s?C.bX:C.bY,f,f,f,f)
m=s?B.c.j(0.92):C.im
l=A.n(999)
k=s?C.oL:C.oG
j=A.n(999)
i=s?C.oL:C.oG
B.d.u(u,A.a([B.R,A.aN(f,B.Z,!0,f,!0,B.t,f,A.aO(),g.cy,f,f,f,f,f,2,A.bC(f,new A.b6(4,l,new A.ax(k,1,B.r,-1)),f,B.f8,f,f,f,f,!0,new A.b6(4,j,new A.ax(i,1,B.r,-1)),f,f,f,f,f,m,!0,f,f,f,f,f,f,f,f,f,f,f,f,f,p,"Search a market, for example EUR/USD, GBP or Bitcoin",f,f,f,f,f,f,f,f,f,!0,!0,!1,f,o,f,f,f,f,f,f,f,f,f,f,f,f),B.y,!0,f,!0,f,!1,f,B.al,f,f,f,f,f,f,f,f,f,1,f,f,!1,"\u2022",f,new D.eIE(g),f,f,f,!1,f,f,!1,f,!0,f,B.ae,f,f,f,f,f,f,f,f,f,f,f,a0,!0,B.a7,f,B.ao,f,f,f,f)],e))}u.push(B.af)
u.push(g.bGi(a2))
if(J.z(w.h(0,"paused"),!0)){a0=w.h(0,"pauseReason")
a0=A.v(a0==null?"Record too weak \u2014 signals paused until the pattern improves.":a0)
p=B.i.K(D.c1(w.h(0,"paperStreak")))
o=w.h(0,"liftStreak")
u.push(new A.D(B.lx,A.c(a0+" ("+p+" of "+B.i.K(D.c1(o==null?10:o))+" paper wins in a row to lift it)",f,f,f,f,f,f,C.fJQ,B.K,f,f),f))}u.push(B.M)
u.push(A.A(A.a([C.c_Z,B.dZ,new A.d1(1,B.cg,A.c("Live confirmations \xb7 updated "+t+" \xb7 signals are only given at the 30-minute checks",f,f,f,f,f,f,A.l(f,f,s?C.bX:C.bY,f,f,f,f,f,f,f,f,11,f,f,f,f,f,!0,f,f,f,f,f,f,f,f),B.K,f,f),f)],e),B.l,f,B.ba,B.h,0,f,f))
u.push(B.af)
if(d.length===0)u.push(A.c("Loading the markets...",f,f,f,f,f,f,A.l(f,f,s?C.bX:C.bY,f,f,f,f,f,f,f,f,f,f,f,f,f,f,!0,f,f,f,f,f,f,f,f),f,f,f))
if(d.length!==0&&a1.length===0){e=g.ch
u.push(A.at(A.c('No market matches "'+e+'".',f,f,f,f,f,f,A.l(f,f,s?C.bX:C.bY,f,f,f,f,f,f,f,f,f,f,f,f,f,f,!0,f,f,f,f,f,f,f,f),f,f,f),f,f,f))}for(e=a1.length,r=0;r<a1.length;a1.length===e||(0,A.I)(a1),++r){h=a1[r]
u.push(D.hJJ(a2,h,!1,new D.eIF(g,h)))}u.push(g.cDF(a2))
u.push(A.c("Signals are opinions from price patterns, not guarantees. Even strong signals lose. Signals only: nothing is ever traded here.",f,f,f,f,f,f,A.l(f,f,s?C.bX:C.bY,f,f,f,f,f,f,f,f,11,f,f,f,f,f,!0,f,f,f,f,f,f,f,f),B.K,f,f))
return A.Kl(A.co(u,f,f,C.aod,f,f,B.ah,!1),f,g.gcgr())},
cDF(a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e="direction",d="graded",a0="exit_price",a1="move_pct",a2=x.g.a(this.db.h(0,"history"))
if(a2==null)a2=B.bQ
a2=J.cQ(a2,x.f)
a2=A.cy(a2,new D.eIv(),a2.$ti.k("M.E"),x.P)
w=A.B(a2,A.a3(a2).k("M.E"))
a2=a3.a
v=a2?B.c.j(0.92):C.im
u=A.n(20)
t=A.K(a2?B.c:C.n6,B.r,1)
s=A.c("Signal history",f,f,f,f,f,f,A.l(f,f,a2?C.cl:B.c,f,f,f,f,f,f,f,f,15,f,f,B.E,f,f,!0,f,f,f,f,f,f,f,f),f,f,f)
r=x.p
s=A.a([s,B.at,A.c("Every STRONG signal, graded at its 30-minute expiry: did the price finish its way? The record is the record.",f,f,f,f,f,f,A.l(f,f,a2?C.bX:C.bY,f,f,f,f,f,f,f,f,11.5,f,f,f,f,1.3,!0,f,f,f,f,f,f,f,f),f,f,f),B.M],r)
if(w.length===0)s.push(A.c("No STRONG signals yet. Zero signals is a correct outcome when the confirmations do not all agree.",f,f,f,f,f,f,A.l(f,f,a2?C.bX:C.bY,f,f,f,f,f,f,f,f,12.5,f,f,f,f,f,!0,f,f,f,f,f,f,f,f),f,f,f))
for(q=w.length,p=0;p<w.length;w.length===q||(0,A.I)(w),++p){o=w[p]
n=a2?C.oL:C.oG
m=J.a2(o)
l=(J.z(m.h(o,e),"BUY")?C.cJ:C.d9).j(0.14)
k=new A.aP(8,8)
j=A.v(m.h(o,e))
i=J.z(m.h(o,e),"BUY")?C.cJ:C.d9
l=A.p(B.z,A.c(j,f,f,f,f,f,f,new A.G(!0,i,f,f,f,f,11,B.u,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f),f,f,f),B.f,f,f,new A.o(l,f,f,new A.bb(k,k,k,k),f,f,B.m),f,f,f,f,B.vc,f,f,46)
k=A.v(m.h(o,"market"))
j=m.h(o,"price")
if(!(typeof j=="number")){j=A.cv(A.v(j==null?"":j))
if(j==null)j=0}i=m.h(o,"price")
if(!(typeof i=="number")){i=A.cv(A.v(i==null?"":i))
if(i==null)i=0}j=B.i.a5(j,i<10?4:2)
i=a2?C.cl:B.c
k=A.c(k+" at "+j,f,f,f,f,f,f,new A.G(!0,i,f,f,f,f,13,B.E,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f),f,f,f)
j=m.h(o,"et_time")
j=A.v(j==null?"":j)
if(J.z(m.h(o,d),!0)){i=m.h(o,a0)
if(!(typeof i=="number")){i=A.cv(A.v(i==null?"":i))
if(i==null)i=0}h=m.h(o,a0)
if(!(typeof h=="number")){h=A.cv(A.v(h==null?"":h))
if(h==null)h=0}i=B.i.a5(i,h<10?4:2)
h=m.h(o,a1)
if(!(typeof h=="number")){h=A.cv(A.v(h==null?"":h))
if(h==null)h=0}h=h>=0?"+":""
g=m.h(o,a1)
if(!(typeof g=="number")){g=A.cv(A.v(g==null?"":g))
if(g==null)g=0}g=" \xb7 then "+i+" ("+h+B.i.a5(g,2)+"%)"
i=g}else i=""
h=a2?C.bX:C.bY
k=A.x(A.a([k,A.c(j+i,f,f,f,f,f,f,new A.G(!0,h,f,f,f,f,11,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f),f,f,f)],r),B.B,f,B.e,B.h,0,B.p)
j=J.z(m.h(o,d),!0)?A.v(m.h(o,"result")):"PENDING"
if(!J.z(m.h(o,d),!0))m=B.b_
else m=J.z(m.h(o,"result"),"WIN")?C.cJ:C.d9
i=m.j(0.14)
h=new A.aP(999,999)
s.push(A.p(f,new A.c2(B.aK,B.e,B.h,B.l,f,B.p,f,0,A.a([l,B.ar,new A.bu(1,B.b9,k,f),A.p(f,A.c(j,f,f,f,f,f,f,new A.G(!0,m,f,f,f,f,10.5,B.u,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f),f,f,f),B.f,f,f,new A.o(i,f,f,new A.bb(h,h,h,h),f,f,B.m),f,f,f,f,B.fa,f,f,f)],r),f),B.f,f,f,new A.o(f,f,new A.bE(B.a1,B.a1,new A.ax(n,1,B.r,-1),B.a1),f,f,f,B.m),f,f,f,f,B.hz,f,f,f))}return A.p(f,A.x(s,B.B,f,B.e,B.h,0,B.p),B.f,f,f,new A.o(v,f,t,u,f,f,B.m),f,f,f,C.bF5,B.bF,f,f,f)},
bGi(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=new A.X(C.Ei,new D.eHS(h),x.E).gJ(0),e=h.z||h.y
if(!e)w=new A.b7([B.jF,B.b_,"Signal alerts unlock when you finish all 10 lessons ("+f+" of 10 done). You will be told the market and STRONG BUY or SELL (only when all 5 confirmations agree), built for a 15\u201330 minute expiry.","Go to lessons"])
else w=!h.Q?C.fjY:C.fjh
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
if(r!=null){i=A.bp(t,g,g,g,g,g,B.f2,g,g,g,g,g)
B.d.u(k,A.a([B.aa,A.bI(A.c(r,g,g,g,g,g,g,B.po,g,g,g),g,new D.eHT(h,e),i)],j))}return A.p(g,A.A(k,B.l,g,B.e,B.h,0,g,g),B.f,g,g,new A.o(v,g,l,m,g,g,B.m),g,g,g,B.dU,B.bg,g,g,g)},
bHE(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=x.p,h=A.a([],i)
if($.DB.length===0){w=d.a
v=w?B.c.j(0.92):C.im
u=A.n(22)
t=A.K(w?B.c:C.n6,B.r,1)
s=A.p(j,C.c0W,B.f,j,j,E.ags,j,40,j,j,j,j,j,40)
s=A.A(A.a([s,B.ar,A.E(A.c("Your trading tutor",j,j,j,j,j,j,A.l(j,j,w?C.cl:B.c,j,j,j,j,j,j,j,j,16,j,j,B.E,j,j,!0,j,j,j,j,j,j,j,j),j,j,j),1)],i),B.l,j,B.e,B.h,0,j,j)
v=A.p(j,A.x(A.a([s,B.M,A.c("Ask anything about trading. The tutor sees the same live prices and readings as the agent, so it can explain what each market is doing right now.",j,j,j,j,j,j,A.l(j,j,w?C.bX:C.bY,j,j,j,j,j,j,j,j,12.5,j,j,j,j,1.35,!0,j,j,j,j,j,j,j,j),j,j,j)],i),B.B,j,B.e,B.h,0,B.p),B.f,j,j,new A.o(v,j,t,u,j,j,B.m),j,j,j,j,B.bR,j,j,j)
u=A.a([],i)
for(r=0;r<6;++r){q=C.dcy[r]
t=w?C.cl:B.c
t=A.c(q,j,j,j,j,j,j,new A.G(!0,t,j,j,j,j,12,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j),j,j,j)
s=w?B.c.j(0.92):C.im
p=w?C.oL:C.oG
o=new A.aP(999,999)
u.push(A.mR(j,s,t,j,new D.eHU(k,q),j,new A.b9(new A.bb(o,o,o,o),B.a1),new A.ax(p,1,B.r,-1),j))}B.d.u(h,A.a([v,B.af,A.bZ(B.bI,u,B.br,j,8,8)],i))}for(w=$.DB.length,v=d.a,r=0;r<$.DB.length;$.DB.length===w||(0,A.I)($.DB),++r){n=$.DB[r]
u=n.a
t=u?B.a9:B.a5
if(u)s=v?C.mZ:B.c
else s=v?B.c.j(0.92):C.im
p=u?18:4
o=u?4:18
if(u)m=j
else{l=new A.ax(v?B.c:C.n6,1,B.r,-1)
m=new A.bE(l,l,l,l)}if(u)u=v?B.c:C.mZ
else u=v?C.cl:B.c
h.push(new A.bK(t,j,j,A.p(j,A.AI(n.b,new A.G(!0,u,j,j,j,j,13.5,j,j,j,j,j,1.4,j,j,j,j,j,j,j,j,j,j,j,j,j),j),B.f,j,F.ag3,new A.o(s,j,m,new A.bb(B.i6,B.i6,new A.aP(p,p),new A.aP(o,o)),j,j,B.m),j,j,j,B.jB,B.hA,j,j,j),j))}if($.ahd){w=v?B.c.j(0.92):C.im
u=A.n(18)
h.push(new A.bK(B.a5,j,j,A.p(j,A.A(A.a([B.ac3,B.aa,A.c("Reading the markets...",j,j,j,j,j,j,A.l(j,j,v?C.bX:C.bY,j,j,j,j,j,j,j,j,12.5,j,j,j,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)],i),B.l,j,B.e,B.O,0,j,j),B.f,j,j,new A.o(w,j,j,u,j,j,B.m),j,j,j,B.hy,B.hA,j,j,j),j))}h=A.E(A.co(h,k.ax,j,C.bHF,j,j,B.ah,!1),1)
w=A.l(j,j,v?C.cl:B.c,j,j,j,j,j,j,j,j,j,j,j,j,j,j,!0,j,j,j,j,j,j,j,j)
u=A.l(j,j,v?C.bX:C.bY,j,j,j,j,j,j,j,j,j,j,j,j,j,j,!0,j,j,j,j,j,j,j,j)
t=v?B.c.j(0.92):C.im
s=A.n(999)
p=v?C.oL:C.oG
o=A.n(999)
m=v?C.oL:C.oG
w=A.E(A.aN(j,B.Z,!1,j,!0,B.t,j,A.aO(),k.at,j,j,j,j,j,2,A.bC(j,new A.b6(4,s,new A.ax(p,1,B.r,-1)),j,B.zs,j,j,j,j,!0,new A.b6(4,o,new A.ax(m,1,B.r,-1)),j,j,j,j,j,t,!0,j,j,j,j,j,j,j,j,j,j,j,j,j,u,"Ask about trading or a market...",j,j,j,j,j,j,j,j,j,!0,!0,!1,j,j,j,j,j,j,j,j,j,j,j,j,j,j),B.y,!0,j,!0,j,!1,j,B.al,j,j,j,j,j,j,j,j,j,4,1,j,!1,"\u2022",j,j,j,k.gcgq(),j,!1,j,j,!1,j,!0,j,B.ae,j,j,j,j,j,j,j,j,j,j,j,w,!0,B.a7,j,B.ao,j,B.acq,j,j),1)
u=v?C.mZ:B.c
t=$.ahd?j:new D.eHV(k)
return A.x(A.a([h,A.p(j,A.A(A.a([w,B.aa,A.aG(!1,B.a3,!0,j,A.aM(!1,j,!0,new A.a4(48,48,A.V(B.pX,v?B.c:C.mZ,j,j,j,j),j),B.cL,!0,j,j,j,j,j,j,j,j,j,j,j,t,j,j,j,j,j,j,j),B.f,u,0,j,j,B.cL,j,j,B.ai)],i),B.l,j,B.e,B.h,0,j,j),B.f,j,j,j,j,j,j,j,Y.HD,j,j,j)],i),B.l,j,B.e,B.h,0,B.p)}}
D.a0H.prototype={
R(){var w=x.S
return new D.blb(A.S(w,w))},
cZb(d){return this.e.$0()},
d0V(d){return this.x.$1(d)},
rn(){return this.y.$0()},
d_t(d){return this.z.$1(d)},
gd4(d){return this.w}}
D.blb.prototype={
a_(){var w,v,u,t,s,r,q,p,o,n=this
n.a3()
w=C.dLm.h(0,n.a.c.a)
n.d=w==null?n.a.c.x:w
v=n.a.w
u=new D.duX()
t=new D.duV()
w=u.$1(v.h(0,"slots"))
s=A.U(w).k("X<1>")
w=A.B(new A.X(w,new D.duT(n),s),s.k("M.E"))
n.e=w
w=w.length
s=n.d.length
if(w!==Math.min(10,s)){w=x.S
r=J.e4(s,w)
for(q=0;q<s;++q)r[q]=q
B.d.dX(r,B.cV)
n.e=A.cU(r,0,A.dA(Math.min(10,n.d.length),"count",w),A.U(r).c).dk(0)}w=u.$1(v.h(0,"right"))
n.f=A.js(w,A.U(w).c)
n.r=t.$1(v.h(0,"tries"))
n.w=t.$1(v.h(0,"locks"))
n.x=u.$1(v.h(0,"used"))
for(w=n.e,s=w.length,p=0;p<w.length;w.length===s||(0,A.I)(w),++p){o=w[p]
if(!B.d.q(n.x,o))B.d.I(n.x,o)}n.bbu(!1)
n.z=A.d0(B.fp,new D.duU(n))},
t(){var w=this.z
if(w!=null)w.a1(0)
this.a2()},
b3j(){var w,v,u,t,s,r,q=this,p=q.a
p.toString
w=q.e
w===$&&A.d()
v=q.f
v===$&&A.d()
v=A.B(v,A.a3(v).k("ch.E"))
u=q.r
u===$&&A.d()
t=x.N
s=x.S
u=u.iW(u,new D.duL(),t,s)
r=q.w
r===$&&A.d()
s=r.iW(r,new D.duM(),t,s)
r=q.x
r===$&&A.d()
return p.d0V(A.J(["slots",w,"right",v,"tries",u,"locks",s,"used",r],t,x.z))},
bbu(d){var w,v,u,t,s,r,q,p,o,n=this,m=Date.now(),l=n.y,k=x.X,j=!1,i=0
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
q=A.B(new A.X(s,new D.duN(n),w),w.k("M.E"))
if(q.length!==0)p=q
else{t=n.d.length
s=A.a(new Array(t),k)
for(r=0;r<t;++r)s[r]=r
w=A.U(s).k("X<1>")
p=A.B(new A.X(s,new D.duO(n),w),w.k("M.E"))}w=p.length
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
j=!0}++i}if(j&&d)n.b3j()},
cGm(){return this.bbu(!0)},
cmQ(d){var w,v,u,t,s=this.d
s===$&&A.d()
w=s[d].b.length
s=J.e4(w,x.S)
for(v=0;v<w;++v)s[v]=v
u=this.x
u===$&&A.d()
t=new A.e2()
t.cT(d*7919+u.length)
B.d.dX(s,t)
return s},
cgp(d,e){var w=this,v=w.f
v===$&&A.d()
if(!v.q(0,d)){v=w.w
v===$&&A.d()
v=v.am(0,d)}else v=!0
if(v)return
w.l(new D.duJ(w,e,d))
w.b3j()},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=A.Q(d).ax.a===B.dh,i=new D.Rp(j),h=l.a.c,g=l.e
g===$&&A.d()
w=l.f
w===$&&A.d()
v=new A.X(g,w.gjC(w),A.U(g).k("X<1>")).gJ(0)
u=v===l.e.length
g=j?C.t4:C.t2
w=j?C.t4:C.t2
t=j?C.O0:C.NU
s=x.O
t=A.a([w,t],s)
w=A.aI(k,k,k,k,A.V(B.eB,j?C.cl:B.c,k,k,k,18),k,k,k,new D.duP(d),k,k,k,k,k,k)
r=l.a.d
q=x.p
r=A.A(A.a([w,B.aW,A.c("Lesson "+r+" of 10",k,k,k,k,k,k,A.l(k,k,j?C.bX:C.bY,k,k,k,k,k,k,k,k,12,k,k,B.N,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)],q),B.l,k,B.e,B.h,0,k,k)
w=A.n(24)
p=h.f
o=A.ap(p,B.v,0.35)
o.toString
s=A.a([p,o],s)
o=B.c.j(0.2)
p=A.n(16)
s=A.a([r,A.p(k,A.A(A.a([A.p(k,A.V(h.e,B.c,k,k,k,28),B.f,k,k,new A.o(o,k,k,p,k,k,B.m),k,52,k,k,k,k,k,52),B.ew,A.E(A.x(A.a([A.c(h.b,k,k,k,k,k,k,B.fP,k,k,k),A.c(h.c+" \xb7 "+h.d+" min",k,k,k,k,k,k,B.nw,k,k,k)],q),B.B,k,B.e,B.h,0,B.p),1)],q),B.l,k,B.e,B.h,0,k,k),B.f,k,k,new A.o(k,k,k,w,k,new A.a8(B.a5,B.a9,B.x,s,k,k),B.m),k,k,k,k,B.f9,k,k,k),B.aB],q)
for(w=h.w,n=0;n<4;++n){r=w[n]
p=j?C.cl:B.c
p=A.c(r.a,k,k,k,k,k,k,new A.G(!0,p,k,k,k,k,16,B.E,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k),k,k,k)
o=j?C.cl:B.c
B.d.u(s,A.a([p,B.at,A.c(r.b,k,k,k,k,k,k,new A.G(!0,o,k,k,k,k,14,k,k,k,k,k,1.5,k,k,k,k,k,k,k,k,k,k,k,k,k),k,k,k),B.aB],q))}w=j?B.c.j(0.92):C.im
r=A.n(22)
p=A.K(C.cJ.j(0.45),B.r,1.5)
s.push(A.p(k,A.x(A.a([A.A(A.a([C.bXt,B.bb,A.c("See it live right now",k,k,k,k,k,k,A.l(k,k,j?C.cl:B.c,k,k,k,k,k,k,k,k,14,k,k,B.E,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)],q),B.l,k,B.e,B.h,0,k,k),B.R,l.a.cZb(0)],q),B.B,k,B.e,B.h,0,B.p),B.f,k,k,new A.o(w,k,p,r,k,k,B.m),k,k,k,k,B.bF,k,k,k))
s.push(B.by)
w=A.c("Quiz",k,k,k,k,k,k,A.l(k,k,j?C.cl:B.c,k,k,k,k,k,k,k,k,16,k,k,B.E,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)
r=""+v+" of "
p=l.e.length
if(u)o=C.cJ
else o=j?C.bX:C.bY
s.push(A.A(A.a([w,B.aW,A.c(r+p+" right",k,k,k,k,k,k,A.l(k,k,o,k,k,k,k,k,k,k,k,12.5,k,k,B.E,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)],q),B.l,k,B.e,B.h,0,k,k))
s.push(B.aj)
o=A.n(9)
w=l.e.length
w=w===0?0:v/w
s.push(A.bx(o,A.jE(j?C.O7:C.NY,k,k,7,k,w,C.b5u),B.aq))
s.push(B.M)
w=l.a.f?"Admin: you can retry any question.":"Get all 10 right to finish. A wrong answer gets one more try; wrong twice and that question locks for 5 minutes, then a new question takes its place."
s.push(A.c(w,k,k,k,k,k,k,A.l(k,k,j?C.bX:C.bY,k,k,k,k,k,k,k,k,11.8,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),k,k,k))
s.push(B.R)
for(m=0;w=l.e,m<w.length;++m)s.push(l.cu7(i,m,w[m]))
s.push(B.M)
w=j?C.cl:B.c
p=j?C.oL:C.oG
p=A.E(A.eq(C.c39,k,C.fVm,new D.duQ(l,h),A.dk(k,k,k,k,k,k,k,k,k,w,k,k,B.cq,k,new A.b9(A.n(999),B.a1),new A.ax(p,1.5,B.r,-1),k,k,k,k)),1)
w=!u
if(!w||l.a.r)j=C.cJ
else j=j?C.bX:C.bY
j=A.bp(j,k,k,k,k,k,B.cq,k,new A.b9(A.n(999),B.a1),k,k,k)
o=!w||l.a.r?new D.duR(l,d):k
s.push(A.A(A.a([p,B.ar,A.E(A.db(T.R7,k,A.c(!w||l.a.r?"Finish lesson":r+l.e.length+" right",k,k,k,k,k,k,B.cd,k,k,k),o,j),1)],q),B.l,k,B.e,B.h,0,k,k))
return A.c6(k,g,A.p(k,A.bo(!0,A.co(s,k,k,C.bHN,k,k,B.ah,!1),!0,!1,B.ag,!0,!0),B.f,k,k,new A.o(k,k,k,k,k,new A.a8(B.aX,B.b1,B.x,t,k,k),B.m),k,k,k,k,k,k,k,k),k,!1,!1,k,k)},
cu7(a8,a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=this,a6=null,a7=a5.d
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
q=B.a.b_(B.o.v(B.o.F(B.o.ao(a7,1e6),60)),2,"0")
a7=a8.a
p=a7?C.tm:C.tn
o=A.n(20)
n=A.K(C.d9.j(0.4),B.r,1)
m=A.c("Question "+(a9+1)+" is locked",a6,a6,a6,a6,a6,a6,A.l(a6,a6,a7?C.cl:B.c,a6,a6,a6,a6,a6,a6,a6,a6,14,a6,a6,B.E,a6,a6,!0,a6,a6,a6,a6,a6,a6,a6,a6),a6,a6,a6)
l=x.p
return A.p(a6,A.A(A.a([C.c5g,B.ar,A.E(A.x(A.a([m,A.c("Wrong twice. Re-read the lesson; a new question appears in "+r+":"+q+".",a6,a6,a6,a6,a6,a6,A.l(a6,a6,a7?C.bX:C.bY,a6,a6,a6,a6,a6,a6,a6,a6,12.5,a6,a6,a6,a6,1.35,!0,a6,a6,a6,a6,a6,a6,a6,a6),a6,a6,a6)],l),B.B,a6,B.e,B.h,0,B.p),1)],l),B.l,a6,B.e,B.h,0,a6,a6),B.f,a6,a6,new A.o(p,a6,n,o,a6,a6,B.m),a6,a6,a6,B.d6,B.bF,a6,a6,a6)}a7=a8.a
p=a7?B.c.j(0.92):C.im
o=A.n(20)
if(v)n=C.cJ.j(0.6)
else n=a7?B.c:C.n6
n=A.K(n,B.r,v?1.5:1)
m=x.p
l=A.a([A.c(""+(a9+1)+". "+w.a,a6,a6,a6,a6,a6,a6,A.l(a6,a6,a7?C.cl:B.c,a6,a6,a6,a6,a6,a6,a6,a6,14,a6,a6,B.E,a6,a6,!0,a6,a6,a6,a6,a6,a6,a6,a6),a6,a6,a6),B.M],m)
for(k=a5.cmQ(b0),j=k.length,i=!v,h=w.b,g=w.c,f=0;f<k.length;k.length===j||(0,A.I)(k),++f){e=k[f]
d=v?a6:new D.duK(a5,b0,e)
if(v&&e===g)a0=C.cJ.j(0.14)
else if(s===e)a0=C.d9.j(0.12)
else a0=a7?C.tm:C.tn
a1=new A.aP(14,14)
if(v&&e===g)a2=C.cJ
else a2=s===e?C.d9:B.L
a3=new A.ax(a2,1,B.r,-1)
a2=h[e]
a4=a7?C.cl:B.c
a2=A.a([new A.bu(1,B.b9,A.c(a2,a6,a6,a6,a6,a6,a6,new A.G(!0,a4,a6,a6,a6,a6,13.5,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6),a6,a6,a6),a6)],m)
if(v&&e===g)a2.push(C.c0G)
if(i&&s===e)a2.push(C.c6F)
l.push(A.aA(a6,A.p(a6,new A.c2(B.aK,B.e,B.h,B.l,a6,B.p,a6,0,a2,a6),B.f,a6,a6,new A.o(a0,a6,new A.bE(a3,a3,a3,a3),new A.bb(a1,a1,a1,a1),a6,a6,B.m),a6,a6,a6,B.eI,B.ep,a6,a6,a6),B.y,!1,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,d,a6,a6,a6,a6,a6,a6,!1,B.a4))}if(v)l.push(A.c("Right! "+w.d,a6,a6,a6,a6,a6,a6,C.fPe,a6,a6,a6))
else if(t===1&&!a5.a.f)l.push(C.fY7)
else if(t>=1)l.push(C.fVw)
return A.p(a6,A.x(l,B.B,a6,B.e,B.h,0,B.p),B.f,a6,a6,new A.o(p,a6,n,o,a6,a6,B.m),a6,a6,a6,B.d6,B.bF,a6,a6,a6)}}
D.aPo.prototype={
t(){var w=this,v=w.ab$
if(v!=null)v.a8(0,w.gbB())
w.ab$=null
w.a2()},
aZ(){this.b7()
this.b5()
this.bC()}}
var z=a.updateTypes(["P(uv)","ay<~>()","~()","XL(Z)","WY(Z)","ay<~>(m)","m(a_G)","a0H(Z)"])
D.eHP.prototype={
$1(d){var w=this.a
if(w.c!=null)w.yP(!0)},
$S:29}
D.eHQ.prototype={
$1(d){this.a.yP(!0)
return null},
$S:10}
D.eH8.prototype={
$0(){var w=this.a
w.d=this.b
w.f=!1},
$S:0}
D.eHm.prototype={
$1(d){var w=this.a.as,v=w.f
if(v.length!==0){v=B.d.gd3(v).Q
v.toString
w.i9(B.i.D(Math.min(this.b*160-16,v),0,1/0))}},
$S:7}
D.eHa.prototype={
$0(){return this.a.Q=this.b},
$S:0}
D.eHl.prototype={
$0(){return this.a.Q=this.b},
$S:0}
D.eHo.prototype={
$0(){var w=this.a,v=w.f=!1,u=this.b,t=u==null
if(!t?J.z(J.t(u,"ok"),!0):v){w.d=u
w.ay=null}else{v=t?null:J.t(u,"error")
w.ay=J.k(v==null?"Could not reach the server. Pull down to try again.":v)
if(!J.z(t?null:J.t(u,"ownerOnly"),!0))v=J.z(t?null:J.t(u,"setupNeeded"),!0)
else v=!0
if(v)w.d=null}},
$S:0}
D.eHp.prototype={
$0(){var w=this.a,v=this.b
w.e=v
w.w=J.ad(v)>=30},
$S:0}
D.eH7.prototype={
$1(d){return A.a0(d,x.N,x.z)},
$S:22}
D.eH9.prototype={
$0(){var w,v,u=this,t=u.a
if(u.b){w=A.B(t.e,x.P)
v=u.c
B.d.u(w,v)}else{w=u.c
v=w}t.e=w
t.w=J.ad(v)>=30},
$S:0}
D.eHx.prototype={
$1(d){var w=null
return A.eh(A.a([A.bM(!1,B.dw,w,w,!0,w,w,w,new D.eHv(d),w,w),A.bI(C.hht,w,new D.eHw(d),w)],x.p),w,w,w,C.hhT,w,w,w,w,C.fZD,w)},
$S:18}
D.eHv.prototype={
$0(){A.a7(this.a,!1).N(!1)
return null},
$S:0}
D.eHw.prototype={
$0(){A.a7(this.a,!1).N(!0)
return null},
$S:0}
D.eHy.prototype={
$0(){var w,v,u,t,s=this.a
s.r=!0
w=s.d
if(w!=null){v=x.N
u=x.z
w=A.dD(w,v,u)
t=s.d
t.toString
u=A.dD(D.dI(J.t(t,"state")),v,u)
v=this.b
u.n(0,"enabled",v)
if(v)u.n(0,"brakePaused",!1)
w.n(0,"state",u)
s.d=w}},
$S:0}
D.eHz.prototype={
$0(){var w=this,v=w.a,u=v.r=!1,t=w.b
if(t){u=w.c
u.toString
u=J.t(u,"state")!=null}if(u)v.d=w.c
else if(!t)v.d=w.d},
$S:0}
D.eHh.prototype={
$1(d){var w=this.a,v=w.d
w.a.toString
return D.hAL(v,!1)},
$S:z+3}
D.eHr.prototype={
$0(){return this.a.r=!0},
$S:0}
D.eHs.prototype={
$0(){var w=this.a,v=w.r=!1,u=this.b
if(u!=null?J.z(J.t(u,"ok"),!0):v)w.d=u},
$S:0}
D.eHt.prototype={
$1(d){var w=this
return A.oV(new D.eHq(w.a,w.b,w.c,w.d),!1,0.8,0.95,0.25,!1,null)},
$S:134}
D.eHq.prototype={
$2(d,e){var w=this
return w.a.czh(w.b,w.c,D.dI(J.t(w.d,"state")),e)},
$S:2019}
D.eHu.prototype={
$2(d,e){return B.i.aQ(D.eHC(d),D.eHC(e))},
$S:40}
D.eHO.prototype={
$0(){return this.a.yP(!0)},
$S:1}
D.eHJ.prototype={
$0(){var w=this.a.c
w.toString
return A.Oa(w)},
$S:0}
D.eHK.prototype={
$0(){return this.a.yP(!0)},
$S:0}
D.eGX.prototype={
$1(d){var w,v=J.a2(d)
if(!J.z(v.h(d,"today"),!0)){v=v.h(d,"asset")
w=this.a
v=J.z(v,w==null?null:w.h(0,"symbol"))}else v=!0
return v},
$S:4}
D.eGY.prototype={
$1(d){return J.z(J.t(d,"asset"),this.a.Q)},
$S:4}
D.eGZ.prototype={
$1(d){return J.z(J.t(d,"asset"),this.a)},
$S:4}
D.eH_.prototype={
$0(){var w=this
return B.d.dr(w.a,new D.eGV(w.b),new D.eGW(w.c,w.d))},
$S:151}
D.eGV.prototype={
$1(d){return J.z(J.t(d,"asset"),this.a)},
$S:4}
D.eGW.prototype={
$0(){var w=this.a
return w.length===0?this.b:B.d.gH(w)},
$S:151}
D.eH0.prototype={
$1(d){return J.z(J.t(d,"asset"),this.a.h(0,"symbol"))},
$S:4}
D.eH1.prototype={
$0(){return this.a},
$S:151}
D.eHF.prototype={
$1(d){return A.v(d)},
$S:15}
D.eHG.prototype={
$1(d){return A.v(d)},
$S:15}
D.eHH.prototype={
$1(d){return B.a.q(d,"/")},
$S:3}
D.eHI.prototype={
$1(d){return!B.a.q(d,"/")},
$S:3}
D.eHB.prototype={
$1(d){var w,v=this,u=null,t=v.b,s=v.a.cIH(t,v.c,v.d)
t=t.a
w=A.fv(u,u,t?B.c.j(0.92):C.im,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,B.nt,u,u,u,u,u,u)
return A.eH(u,B.L,A.aG(!1,B.a3,!0,u,A.x(A.a([s,B.R,A.bM(!1,A.c("Got it",u,u,u,u,u,u,A.l(u,u,t?C.cl:B.c,u,u,u,u,u,u,u,u,u,u,u,B.E,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u,u,!0,u,u,u,new D.eHA(d),u,w)],x.p),B.l,u,B.e,B.O,0,B.p),B.f,B.L,0,u,u,u,u,u,B.ai),u,u,u,B.zw,u,B.dd,u,u,u)},
$S:47}
D.eHA.prototype={
$0(){return A.a7(this.a,!1).e3()},
$S:0}
D.eHE.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.c
s.toString
w=2
return A.b(A.a7(s,!1).cc(A.eb(new D.eHD(u.b),!1,null,x.H)),$async$$0)
case 2:if(t.c!=null)t.yP(!1)
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
D.eHD.prototype={
$1(d){return new D.WY(this.a,null)},
$S:z+4}
D.eHc.prototype={
$1(d){return J.z(J.t(d,"open"),!0)},
$S:4}
D.eHd.prototype={
$0(){var w=this
return w.a.cDx(w.b,w.c,w.d)},
$S:0}
D.eHe.prototype={
$1(d){return J.z(J.t(d,"asset"),J.t(this.a,"asset"))},
$S:4}
D.eHg.prototype={
$2(d,e){return B.ar},
$S:36}
D.eHf.prototype={
$2(d,a0){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.b[a0],l=J.a2(m),k=J.k(l.h(m,"asset")),j=k===J.t(o.c,"asset"),i=D.c1(l.h(m,"changePct")),h=i>=0,g=o.d,f=J.z(g==null?n:g.h(0,"symbol"),k),e=J.z(D.dI(l.h(m,"reading")).h(0,"decision"),"ENTER")&&J.z(D.dI(l.h(m,"reading")).h(0,"dir"),"up")
g=o.a
w=o.e
v=w.a
u=v?B.c.j(0.92):C.im
t=A.n(16)
if(j)s=D.fBQ(k).c
else s=v?B.c:C.n6
s=A.K(s,B.r,j?2:1)
w=j?D.fBQ(k).c.j(0.2):w.gI3()
w=A.a([new A.aa(0,B.H,w,B.cP,j?12:8)],x.V)
r=D.bDO(k,16)
q=x.p
r=A.a([r,B.dZ,A.E(A.c(k,n,1,B.a2,n,n,n,A.l(n,n,v?C.cl:B.c,n,n,n,n,n,n,n,n,11.5,n,n,B.E,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),1)],q)
if(f)B.d.u(r,A.a([A.V(B.q1,F.qH,n,n,n,13),B.pm],q))
else if(e)B.d.u(r,A.a([A.V(B.fM,C.cJ,n,n,n,14),B.pm],q))
r.push(g.cK1(m))
r=A.A(r,B.l,n,B.e,B.h,0,n,n)
l=D.ej(D.c1(l.h(m,"price")),!0,!1)
l=A.E(new A.dc(B.dp,B.a5,B.f,A.c(l,n,n,n,n,n,n,A.l(n,n,v?C.cl:B.c,n,n,n,n,n,n,n,n,14.5,n,n,B.E,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),n),1)
v=h?"+":""
p=B.i.a5(i,2)
return A.aA(n,A.cV(n,A.x(A.a([r,A.A(A.a([l,B.da,A.c(v+p+"%",n,n,n,n,n,n,A.l(n,n,h?C.cJ:C.d9,n,n,n,n,n,n,n,n,10.5,n,n,B.E,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],q),B.dt,n,B.e,B.h,0,n,n)],q),B.B,n,B.iA,B.h,0,B.p),n,n,B.aZ,new A.o(u,n,s,t,w,n,B.m),B.a3,n,n,n,n,B.iP,n,n,152),B.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new D.eHb(g,k),n,n,n,n,n,n,!1,B.a4)},
$S:77}
D.eHb.prototype={
$0(){return this.a.a27(this.b)},
$S:0}
D.eH4.prototype={
$0(){var w=this.a
return w.l(new D.eH3(w,this.b))},
$S:0}
D.eH3.prototype={
$0(){return this.a.z=this.b},
$S:0}
D.eH5.prototype={
$0(){var w=this.a
return w.l(new D.eH2(w))},
$S:0}
D.eH2.prototype={
$0(){var w=this.a
return w.ax=!w.ax},
$S:0}
D.eGT.prototype={
$1(d){return J.z(J.t(d,"asset"),this.a.h(0,"symbol"))},
$S:4}
D.eGU.prototype={
$0(){return A.S(x.N,x.z)},
$S:151}
D.eHi.prototype={
$1(d){return A.v(d)},
$S:15}
D.eHj.prototype={
$1(d){return A.v(d)},
$S:15}
D.eHk.prototype={
$2(d,e){var w,v,u=this,t=null,s=e.b,r=u.a.a,q=r?C.tm:C.tn
q=A.bS(3,A.p(t,t,B.f,t,t,new A.o(q,t,t,A.n(99),t,t,B.m),t,t,t,t,t,t,t,t),0,0,3)
w=u.c
v=B.i.D(u.b/w,0,1)
v=A.ao(3,A.p(t,t,B.f,t,t,new A.o(u.d,t,t,A.n(99),t,t,B.m),t,t,t,t,t,t,t,t),t,t,0,t,3,s*v)
w=B.i.D(s*B.i.D(u.e/w,0,1)-1,0,s-2)
return new A.a4(t,14,new A.am(B.a0,t,B.ad,B.t,A.a([q,v,A.ao(0,A.p(t,t,B.f,r?C.cl:B.c,t,t,t,t,t,t,t,t,t,2),t,t,w,t,0,t)],x.p),t),t)},
$S:105}
D.eHn.prototype={
$2(d,e){var w=null,v=e.b,u=A.ao(w,A.p(w,w,B.f,w,w,new A.o(w,w,w,A.n(99),w,C.cbe,B.m),w,8,w,w,w,w,w,w),w,w,0,0,9,w),t=this.a.a,s=A.ao(w,A.p(w,w,B.f,(t?C.cl:B.c).j(0.5),w,w,w,18,w,w,w,w,w,2),w,w,v/2-1,w,4,w),r=B.i.D(this.b*v-9,0,v-18)
return new A.a4(w,26,new A.am(B.a0,w,B.ad,B.f,A.a([u,s,A.ao(w,A.p(w,w,B.f,w,w,new A.o(B.c,w,A.K(t?C.cl:B.c,B.r,3),w,w,w,B.a6),w,18,w,w,w,w,w,18),w,w,r,w,4,w)],x.p),w),w)},
$S:105}
D.eH6.prototype={
$0(){return this.a.za(!this.b)},
$S:0}
D.eGS.prototype={
$2(d,e){var w=null,v=this.a.a,u=v?C.tm:C.tn,t=A.n(12),s=A.c(d,w,1,B.a2,w,w,w,A.l(w,w,v?C.bX:C.bY,w,w,w,w,w,w,w,w,10.5,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)
return A.E(A.p(w,A.x(A.a([s,B.bs,new A.dc(B.dp,B.a5,B.f,A.c(e,w,w,w,w,w,w,A.l(w,w,v?C.cl:B.c,w,w,w,w,w,w,w,w,13,w,w,B.E,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w)],x.p),B.B,w,B.e,B.h,0,B.p),B.f,w,w,new A.o(u,w,w,t,w,w,B.m),w,w,w,w,B.iP,w,w,w),1)},
$S:111}
D.eHM.prototype={
$1(d){return A.a0(d,x.N,x.z)},
$S:22}
D.eHN.prototype={
$0(){var w=this.a
return w.l(new D.eHL(w))},
$S:0}
D.eHL.prototype={
$0(){var w=this.a
return w.y=!w.y},
$S:0}
D.eGR.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=t.x&&t.w?2:4
break
case 2:w=5
return A.b(t.a_7(!0),$async$$0)
case 5:w=3
break
case 4:t.l(new D.eGQ(t))
case 3:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
D.eGQ.prototype={
$0(){var w=this.a
return w.x=!w.x},
$S:0}
D.cX1.prototype={
$0(){return this.a.d=this.b},
$S:0}
D.cXa.prototype={
$2(d,e){var w,v,u=null,t=e.b,s=this.a,r=s.a,q=r.c,p=r.d,o=r.e,n=r.f
r=r.r
w=s.d
v=d.M(x.D)
return A.aA(u,new A.a4(t,250,A.b4(u,u,u,new D.beu((v==null?B.CR:v).w.d,q,p,o,n,r,w,u),B.aA),u),B.y,!1,u,u,u,u,u,new D.cX5(s),new D.cX6(s,t),new D.cX7(s,t),u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new D.cX8(s,t),new D.cX9(s),u,u,u,!1,B.a4)},
$S:37}
D.cX8.prototype={
$1(d){return this.a.aAF(d.b,this.b)},
$S:24}
D.cX6.prototype={
$1(d){return this.a.aAF(d.b,this.b)},
$S:50}
D.cX7.prototype={
$1(d){return this.a.aAF(d.b,this.b)},
$S:19}
D.cX5.prototype={
$1(d){var w=this.a
return w.l(new D.cX4(w))},
$S:38}
D.cX4.prototype={
$0(){return this.a.d=null},
$S:0}
D.cX9.prototype={
$1(d){return A.bL(B.fY,new D.cX3(this.a),x.b)},
$S:56}
D.cX3.prototype={
$0(){var w=this.a
if(w.c!=null)w.l(new D.cX2(w))},
$S:12}
D.cX2.prototype={
$0(){return this.a.d=null},
$S:0}
D.cXb.prototype={
$1(d){var w=this.a
return w*d+w/2},
$S:156}
D.cXd.prototype={
$1(d){var w=this.b,v=this.a,u=v.a
return w-(d-u)/(v.b-u)*w},
$S:5}
D.cXc.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o=this,n=$.T(),m=A.a([],x.v),l=new A.aH(n.r,B.ak,null,null,m)
for(n=o.b,w=o.c,v=o.d,u=o.a.c,t=!1,s=0;s<n;++s){r=J.t(u[s],d)
if(r==null)continue
q=w.$1(s)
if(typeof r=="number")p=r
else{p=A.cv(A.v(r))
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
$S:2020}
D.fi9.prototype={
$1(d){return D.c1(J.t(d,"c"))},
$S:2021}
D.fwJ.prototype={
$1(d){var w=null,v=C.a8t.h(0,d),u=v.a,t=v.b,s=this.a,r=s*0.78,q=A.K(B.c,B.r,1.2)
return A.p(B.z,A.c(u,w,w,w,w,w,w,A.l(w,w,B.c,w,w,w,w,w,w,w,w,s*(u.length>1?0.26:0.36),w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.f,w,w,new A.o(t,w,q,w,w,w,B.a6),w,r,w,w,w,w,w,r)},
$S:118}
D.fC8.prototype={
$1(d){var w=x.N,v=x.z,u=A.a0(d,w,v)
v=A.dD(u,w,v)
v.n(0,"asset",u.h(0,"symbol"))
return v},
$S:22}
D.fGt.prototype={
$1(d){return A.a0(d,x.N,x.z)},
$S:22}
D.fDe.prototype={
$1(d){return","},
$S:57}
D.fKw.prototype={
$3(d,e,f){var w=A.aWS(d,e,1,0,0,0,0,0)
while(A.lU(w)!==7)w=w.bL(864e8)
return w.bL(A.du(7*(f-1),0,0,0,0,0).a)},
$S:2022}
D.e83.prototype={
$1(d){this.a.Br()
return null},
$S:10}
D.e7z.prototype={
$0(){var w=this.a,v=this.b
w.d=A.a0(D.dI(v.h(0,"s")),x.N,x.z)
v=x.g.a(v.h(0,"log"))
if(v==null)v=B.bQ
v=J.cQ(v,x.f)
v=A.cy(v,new D.e7y(),v.$ti.k("M.E"),x.P)
v=A.B(v,A.a3(v).k("M.E"))
w.e=v
w.f=!1},
$S:0}
D.e7y.prototype={
$1(d){return A.a0(d,x.N,x.z)},
$S:22}
D.e7L.prototype={
$0(){var w,v,u=this.a
u.f=!1
w=this.b
v=w==null
if(!v&&J.z(J.t(w,"ok"),!0)){u.d=A.a0(w,x.N,x.z)
u.w=null}else{w=v?null:J.t(w,"error")
u.w=J.k(w==null?"Could not load this system right now.":w)}w=this.c
if(w!=null&&J.z(J.t(w,"ok"),!0)){w=x.g.a(J.t(w,"rows"))
if(w==null)w=B.bQ
w=J.cQ(w,x.f)
w=A.cy(w,new D.e7K(),w.$ti.k("M.E"),x.P)
w=A.B(w,A.a3(w).k("M.E"))
u.e=w}},
$S:0}
D.e7K.prototype={
$1(d){return A.a0(d,x.N,x.z)},
$S:22}
D.e7R.prototype={
$0(){var w,v,u,t=this.a
t.r=!0
w=t.d
if(w!=null){v=x.N
u=x.z
w=A.dD(w,v,u)
u=A.dD(D.dI(t.d.h(0,"state")),v,u)
v=this.b
u.n(0,"enabled",v)
if(v)u.n(0,"brakePaused",!1)
w.n(0,"state",u)
t.d=w}},
$S:0}
D.e7S.prototype={
$0(){var w=this.a,v=w.r=!1,u=this.b,t=u==null
if(!t?J.z(J.t(u,"ok"),!0):v)w.d=A.a0(u,x.N,x.z)
else{w.d=this.c
v=t?null:J.t(u,"error")
w.w=J.k(v==null?"Could not change it right now.":v)}},
$S:0}
D.e81.prototype={
$0(){return A.Oa(this.a)},
$S:0}
D.e82.prototype={
$0(){this.a.Br()
return null},
$S:0}
D.e7s.prototype={
$0(){return this.a.za(!this.b)},
$S:0}
D.e7H.prototype={
$1(d){return A.v(d)},
$S:15}
D.e7I.prototype={
$1(d){return A.a0(d,x.N,x.z)},
$S:22}
D.e7J.prototype={
$2(d,e){var w,v,u=this,t=null,s=e.b,r=u.a.a,q=r?C.tm:C.tn
q=A.bS(3,A.p(t,t,B.f,t,t,new A.o(q,t,t,A.n(99),t,t,B.m),t,t,t,t,t,t,t,t),0,0,3)
w=u.c
v=B.i.D(u.b/w,0,1)
v=A.ao(3,A.p(t,t,B.f,t,t,new A.o(u.d,t,t,A.n(99),t,t,B.m),t,t,t,t,t,t,t,t),t,t,0,t,3,s*v)
w=B.i.D(s*B.i.D(u.e/w,0,1)-1,0,s-2)
return new A.a4(t,14,new A.am(B.a0,t,B.ad,B.t,A.a([q,v,A.ao(0,A.p(t,t,B.f,r?C.cl:B.c,t,t,t,t,t,t,t,t,t,2),t,t,w,t,0,t)],x.p),t),t)},
$S:105}
D.e7w.prototype={
$1(d){var w=x.g.a(this.a.h(0,d))
if(w==null)w=B.bQ
w=J.cQ(w,x.f)
w=A.cy(w,new D.e7x(),w.$ti.k("M.E"),x.P)
w=A.B(w,A.a3(w).k("M.E"))
return w},
$S:2023}
D.e7x.prototype={
$1(d){return A.a0(d,x.N,x.z)},
$S:22}
D.e7t.prototype={
$1(d){return A.v(d)},
$S:15}
D.e7u.prototype={
$1(d){var w=null
return new A.D(C.bEN,A.c(d,w,w,w,w,w,w,A.l(w,w,this.a.a?C.cl:B.c,w,w,w,w,w,w,w,w,12.5,w,w,B.E,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w)},
$S:118}
D.e7v.prototype={
$3$c$icon(d,e,f){var w,v=null,u=f.A(0,B.ni)?6:13,t=e==null
if(t)w=this.a.a.c==="options"?B.az:B.as
else w=e
u=A.V(f,w,v,v,v,u)
if(t)t=this.b.a?C.cl:B.c
else t=e
return new A.D(B.lx,A.A(A.a([new A.D(B.kL,u,v),K.wb,A.E(A.c(d,v,v,v,v,v,v,A.l(v,v,t,v,v,v,v,v,v,v,v,12,v,v,v,v,1.3,!0,v,v,v,v,v,v,v,v),v,v,v),1)],x.p),B.B,v,B.e,B.h,0,v,v),v)},
$1(d){return this.$3$c$icon(d,null,B.ni)},
$2$icon(d,e){return this.$3$c$icon(d,null,e)},
$2$c(d,e){return this.$3$c$icon(d,e,B.ni)},
$S:2024}
D.e7F.prototype={
$1(d){return A.a0(d,x.N,x.z)},
$S:22}
D.e7P.prototype={
$1(d){return J.z(J.t(d,"symbol"),this.a.Q)},
$S:4}
D.e7Q.prototype={
$0(){var w=this.a
return B.d.dr(w,new D.e7N(),new D.e7O(w))},
$S:151}
D.e7N.prototype={
$1(d){return J.z(J.t(d,"tag"),"TRADED NOW")},
$S:4}
D.e7O.prototype={
$0(){return B.d.gH(this.a)},
$S:151}
D.e7C.prototype={
$1(d){return J.z(D.dI(J.t(d,"analysis")).h(0,"passes"),!0)},
$S:4}
D.e7E.prototype={
$2(d,e){return B.ar},
$S:36}
D.e7D.prototype={
$2(b1,b2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=null,e="benched",d=g.b[b2],a0=J.a2(d),a1=A.v(a0.h(d,"symbol")),a2=a1===J.t(g.c,"symbol"),a3=D.c1(a0.h(d,"changePct")),a4=D.dI(a0.h(d,"record")),a5=D.dI(a0.h(d,"analysis")),a6=a0.h(d,"tag"),a7=A.v(a6==null?"":a6),a8=D.dI(a0.h(d,"today")),a9=B.i.K(D.c1(a8.h(0,"wins"))),b0=B.i.K(D.c1(a8.h(0,"losses")))
if(a7==="TRADED NOW")w=C.f4L
else if(a0.h(d,e)!=null)w=C.f7z
else{if(J.z(a5.h(0,"passes"),!0))a6=C.f7j
else if(J.z(a5.h(0,"falling"),!0))a6=C.f7r
else{a6=g.d.a?C.bX:C.bY
a6=new A.y(a6,a7==="closed"?"CLOSED":"WATCHING")}w=a6}v=w.a
u=f
t=w.b
u=t
s=v
a6=g.a
r=g.d
q=r.a
p=q?B.c.j(0.92):C.im
o=A.n(16)
if(a2)n=a6.a.c==="options"?B.az:B.as
else n=q?B.c:C.n6
n=A.K(n,B.r,a2?2:1)
if(a2)r=(a6.a.c==="options"?B.az:B.as).j(0.18)
else r=r.gI3()
r=A.a([new A.aa(0,B.H,r,B.cP,a2?12:8)],x.V)
m=D.bDO(a1,16)
l=x.p
m=A.A(A.a([m,B.dZ,A.E(A.c(a1,f,1,B.a2,f,f,f,A.l(f,f,q?C.cl:B.c,f,f,f,f,f,f,f,f,11.5,f,f,B.E,f,f,!0,f,f,f,f,f,f,f,f),f,f,f),1),A.c(u,f,f,f,f,f,f,A.l(f,f,s,f,f,f,f,f,f,f,f,8.5,f,f,B.u,f,f,!0,f,f,f,f,f,f,f,f),f,f,f)],l),B.l,f,B.e,B.h,0,f,f)
k=D.ej(D.c1(a0.h(d,"price")),!0,!1)
k=A.E(new A.dc(B.dp,B.a5,B.f,A.c(k,f,f,f,f,f,f,A.l(f,f,q?C.cl:B.c,f,f,f,f,f,f,f,f,14.5,f,f,B.E,f,f,!0,f,f,f,f,f,f,f,f),f,f,f),f),1)
j=a3>=0
i=j?"+":""
h=B.i.a5(a3,2)
k=A.A(A.a([k,B.da,A.c(i+h+"%",f,f,f,f,f,f,A.l(f,f,j?C.cJ:C.d9,f,f,f,f,f,f,f,f,10.5,f,f,B.E,f,f,!0,f,f,f,f,f,f,f,f),f,f,f)],l),B.dt,f,B.e,B.h,0,f,f)
j=D.c1(a4.h(0,"n"))===0?"":" \xb7 last "+B.i.K(D.c1(a4.h(0,"n")))+": "+B.i.K(D.c1(a4.h(0,"wins")))+"W/"+B.i.K(D.c1(a4.h(0,"losses")))+"L"
if(a9+b0>0)i=q?C.cl:B.c
else i=q?C.bX:C.bY
i=A.c("today "+a9+"W/"+b0+"L"+j,f,1,B.a2,f,f,f,A.l(f,f,i,f,f,f,f,f,f,f,f,9.5,f,f,B.N,f,f,!0,f,f,f,f,f,f,f,f),f,f,f)
if(a0.h(d,e)!=null)j="benched for today"
else if(D.c1(a4.h(0,"n"))===0)j="no trades here yet"
else{j=D.ej(D.c1(a4.h(0,"pnl")),!0,!0)
j+=a4.h(0,"topLoss")!=null?" \xb7 most losses: "+D.hEG(A.v(a4.h(0,"topLoss"))):""}if(a0.h(d,e)!=null)a0=C.d9
else a0=q?C.bX:C.bY
return A.aA(f,A.cV(f,A.x(A.a([m,k,i,A.c(j,f,1,B.a2,f,f,f,A.l(f,f,a0,f,f,f,f,f,f,f,f,9.5,f,f,B.N,f,f,!0,f,f,f,f,f,f,f,f),f,f,f)],l),B.B,f,B.iA,B.h,0,B.p),f,f,B.aZ,new A.o(p,f,n,o,r,f,B.m),B.eH,f,f,f,f,B.iP,f,f,152),B.y,!1,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,new D.e7B(a6,a1),f,f,f,f,f,f,!1,B.a4)},
$S:77}
D.e7B.prototype={
$0(){var w=this.a
return w.l(new D.e7A(w,this.b))},
$S:0}
D.e7A.prototype={
$0(){return this.a.Q=this.b},
$S:0}
D.e7r.prototype={
$1(d){return A.a0(d,x.N,x.z)},
$S:22}
D.e7T.prototype={
$3$c(d,e,f){var w=null,v=this.a.a,u=v?C.tm:C.tn,t=A.n(12),s=A.c(d,w,1,B.a2,w,w,w,A.l(w,w,v?C.bX:C.bY,w,w,w,w,w,w,w,w,10.5,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)
if(f==null)v=v?C.cl:B.c
else v=f
return A.E(A.p(w,A.x(A.a([s,B.bs,new A.dc(B.dp,B.a5,B.f,A.c(e,w,w,w,w,w,w,A.l(w,w,v,w,w,w,w,w,w,w,w,13.5,w,w,B.E,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w)],x.p),B.B,w,B.e,B.h,0,B.p),B.f,w,w,new A.o(u,w,w,t,w,w,B.m),w,w,w,w,B.iP,w,w,w),1)},
$2(d,e){return this.$3$c(d,e,null)},
$S:2025}
D.e7G.prototype={
$1(d){return A.a0(d,x.N,x.z)},
$S:22}
D.e8_.prototype={
$1(d){return A.a0(d,x.N,x.z)},
$S:22}
D.e80.prototype={
$0(){var w=this.a
return w.l(new D.e7Z(w))},
$S:0}
D.e7Z.prototype={
$0(){var w=this.a
return w.y=!w.y},
$S:0}
D.e7Y.prototype={
$0(){var w,v=this
if(v.d)w=v.e
else{w=v.f
w=A.J(["why",(w.length!==0?w+".\n\n":v.r+". ")+"Bought because: "+v.w],x.N,x.z)}return v.a.cDA(v.b,v.c,w)},
$S:0}
D.e7V.prototype={
$1(d){return A.a0(d,x.N,x.z)},
$S:22}
D.e7X.prototype={
$1(d){var w
if(d==null)w="?"
else{w=D.c1(d)>=0?"+":""
w=w+B.i.a5(D.c1(d),2)+"%"}return w},
$S:15}
D.e7W.prototype={
$1(a1){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i="strength",h="thresholdPct",g=k.a.a,f=g?B.c.j(0.92):C.im,e=A.c("Why this trade: "+k.b,j,j,j,j,j,j,A.l(j,j,g?C.cl:B.c,j,j,j,j,j,j,j,j,16,j,j,B.E,j,j,!0,j,j,j,j,j,j,j,j),j,j,j),d=k.c,a0=d.h(0,"why")
a0=A.v(a0==null?"":a0)
a0=A.c(a0,j,j,j,j,j,j,A.l(j,j,g?C.cl:B.c,j,j,j,j,j,j,j,j,13,j,j,j,j,1.35,!0,j,j,j,j,j,j,j,j),j,j,j)
w=d.h(0,"market")
w=A.v(w==null?"?":w)
v=D.ej(D.c1(d.h(0,"price")),!0,!1)
u=d.h(0,"trend")
u=A.v(u==null?"?":u)
t=k.d
s=A.v(t.$1(d.h(0,i)))
r=d.h(0,"score")
r=A.v(r==null?"?":r)
d=d.h(0,h)!=null?" \xb7 needed +"+B.i.a5(D.c1(d.h(0,h)),2)+"%":""
q=x.p
d=A.a([a0,B.R,A.c("Market "+w+" at "+v+" \xb7 trend "+u+" \xb7 15 min "+s+" \xb7 score "+r+d,j,j,j,j,j,j,A.l(j,j,g?C.bX:C.bY,j,j,j,j,j,j,j,j,12,j,j,j,j,1.35,!0,j,j,j,j,j,j,j,j),j,j,j)],q)
a0=k.e
if(a0.a!==0&&D.c1(a0.h(0,"n"))>0){w=B.i.K(D.c1(a0.h(0,"n")))
v=B.i.K(D.c1(a0.h(0,"wins")))
u=B.i.K(D.c1(a0.h(0,"losses")))
a0=D.ej(D.c1(a0.h(0,"pnl")),!0,!0)
d.push(A.c("Its record here before: last "+w+": "+v+"W / "+u+"L \xb7 "+a0,j,j,j,j,j,j,A.l(j,j,g?C.bX:C.bY,j,j,j,j,j,j,j,j,12,j,j,j,j,1.35,!0,j,j,j,j,j,j,j,j),j,j,j))}a0=k.f
if(a0.length!==0){w=A.a([B.R,A.c("How the markets ranked:",j,j,j,j,j,j,A.l(j,j,g?C.cl:B.c,j,j,j,j,j,j,j,j,12.5,j,j,B.E,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)],q)
for(a0=A.aZB(a0,0,x.P),v=J.aQ(a0.a),a0=a0.b,u=new A.J0(v,a0);u.C();){s=u.c
s=s>=0?new A.y(a0+s,v.gP(v)):A.bi(A.fb())
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
l=g?C.bX:C.bY
w.push(A.c(""+(s.a+1)+". "+o+" \xb7 score "+n+" \xb7 "+m+" \xb7 "+r,j,j,j,j,j,j,new A.G(!0,l,j,j,j,j,12,j,j,j,j,j,1.4,j,j,j,j,j,j,j,j,j,j,j,j,j),j,j,j))}B.d.u(d,w)}g=A.cb(A.x(d,B.B,j,B.e,B.O,0,B.p),B.t,j,B.y,j,j,j,j,j,B.ah)
return A.eh(A.a([A.bM(!1,B.pr,j,j,!0,j,j,j,new D.e7U(a1),j,j)],q),j,j,f,g,j,j,j,j,e,j)},
$S:18}
D.e7U.prototype={
$0(){return A.a7(this.a,!1).e3()},
$S:0}
D.e7q.prototype={
$0(){var w=this.a
return w.l(new D.e7p(w))},
$S:0}
D.e7p.prototype={
$0(){var w=this.a
return w.z=!w.z},
$S:0}
D.e7M.prototype={
$1(d){return A.v(d)},
$S:15}
D.da_.prototype={
$1(d){var w=this.a
if(w.c!=null)w.l(new D.d9Z())},
$S:10}
D.d9Z.prototype={
$0(){},
$S:0}
D.fHk.prototype={
$1(d){return J.k(d)},
$S:15}
D.fHl.prototype={
$2(d,e){var w=null,v=e.b,u=A.ao(w,A.p(w,w,B.f,w,w,new A.o(w,w,w,A.n(9),w,C.caF,B.m),w,6,w,w,w,w,w,w),w,w,0,0,4,w),t=B.i.D(this.a/100*v-7,0,v-14)
return new A.a4(w,14,new A.am(B.a0,w,B.ad,B.f,A.a([u,A.ao(w,A.p(w,w,B.f,w,w,new A.o(B.c,w,A.K(this.b.a?C.cl:B.c,B.r,2.5),w,w,w,B.a6),w,14,w,w,w,w,w,14),w,w,t,w,0,w)],x.p),w),w)},
$S:105}
D.fL1.prototype={
$1(d){return A.a0(d,x.N,x.z)},
$S:22}
D.fg_.prototype={
$1(d){var w=this.a
if(w.c!=null)w.l(new D.ffZ())},
$S:10}
D.ffZ.prototype={
$0(){},
$S:0}
D.ffY.prototype={
$2(d,e){var w=null,v=B.c.j(0.16),u=A.n(10)
return A.E(A.p(w,A.x(A.a([A.c(d,w,w,w,w,w,w,C.fSb,w,w,w),new A.dc(B.dp,B.a5,B.f,A.c(e,w,w,w,w,w,w,C.fFp,w,w,w),w)],x.p),B.B,w,B.e,B.h,0,B.p),B.f,w,w,new A.o(v,w,w,u,w,w,B.m),w,w,w,w,B.HV,w,w,w),1)},
$S:111}
D.din.prototype={
$1(d){var w=this.a
if(w.c!=null)w.l(new D.dim())},
$S:10}
D.dim.prototype={
$0(){},
$S:0}
D.fxy.prototype={
$1(d){return J.k(d)},
$S:15}
D.eI_.prototype={
$1(d){return J.k(d)},
$S:15}
D.eIO.prototype={
$0(){return this.a.l(new D.eIN())},
$S:0}
D.eIN.prototype={
$0(){},
$S:0}
D.eIP.prototype={
$0(){return $.hlo=this.a.at.a.a},
$S:0}
D.eIQ.prototype={
$1(d){var w=this.a
if(w.c!=null)w.l(new D.eIM(w,d))},
$S:197}
D.eIM.prototype={
$0(){return this.a.Q=this.b},
$S:0}
D.eIR.prototype={
$1(d){this.a.Rj()
return null},
$S:10}
D.eIJ.prototype={
$1(d){var w=x.N,v=x.z
v=A.dD(A.a0(d,w,v),w,v)
v.n(0,"asset",J.t(d,"symbol"))
return v},
$S:22}
D.eIk.prototype={
$0(){var w,v,u=this,t=u.c
if(J.z(t==null?null:J.t(t,"isAdmin"),!0))u.b.y=!0
w=u.d
if(w==null)w=u.a.a
if(w!=null){t=x.g.a(w.h(0,"done"))
if(t==null)t=A.a([],x.s)
v=x.Y.a(w.h(0,"lessons"))
u.b.x=A.J(["done",t,"lessons",v==null?A.S(x.N,x.z):v],x.N,x.z)}},
$S:0}
D.eIt.prototype={
$0(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m
var $async$$0=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.aB(),$async$$0)
case 7:q=e
w=8
return A.b(q.aB("String","ngmy_signal_grid_academy_v2",B.U.au(r.a.x,null)),$async$$0)
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
return A.b(A.fP(A.J(["action","paLearnSave","progress",o.x],x.N,x.z),!1,!1,!1,!1,B.hb),$async$$0)
case 9:n=e
if(J.z(n==null?null:J.t(n,"allDone"),!0)){$.cn2=new A.W(A.h0(0,0),0,!1)
A.JU()}case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$$0,v)},
$S:1}
D.eI2.prototype={
$1(d){return this.a.gK5().q(0,d.a)},
$S:z+0}
D.eI3.prototype={
$0(){var w,v=this.a,u=x.N,t=A.d3(v.gK5(),u)
t.I(0,this.b)
w=A.B(t,A.a3(t).k("ch.E"))
u=A.dD(v.x,u,x.z)
u.n(0,"done",w)
v.x=u},
$S:0}
D.eI4.prototype={
$1(d){return this.a.gK5().q(0,d.a)},
$S:z+0}
D.eI5.prototype={
$1(d){var w=null
return A.eh(A.a([A.bI(C.hbq,w,new D.eI1(this.a,d),w)],x.p),w,w,w,C.h8l,w,w,w,w,C.fWw,w)},
$S:18}
D.eI1.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:A.a7(u.b,!1).N(null)
w=2
return A.b(A.Mm(),$async$$0)
case 2:t=e
s=u.a
if(s.c!=null)s.l(new D.eI0(s,t))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
D.eI0.prototype={
$0(){return this.a.Q=this.b},
$S:0}
D.eIs.prototype={
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
if(u==null)u=B.bQ
u=J.b8(u,new D.eIr(),x.N)
u=A.B(u,u.$ti.k("aj.E"))
s.dx=u
u=v.h(w,"nowEt")
s.dy=J.k(u==null?"":u)
s.fr=J.z(v.h(w,"stockOpen"),!0)
s.r=new A.W(Date.now(),0,!1)
if(x.f.b(v.h(w,"signals")))s.db=D.dI(v.h(w,"signals"))},
$S:0}
D.eIr.prototype={
$1(d){return J.k(d)},
$S:15}
D.eIG.prototype={
$1(d){return J.z(J.t(d,"open"),!0)&&D.bFa(d).length>5},
$S:4}
D.eIH.prototype={
$2(d,e){return B.i.aQ(D.eHC(d),D.eHC(e))},
$S:40}
D.eI8.prototype={
$1(d){return J.z(J.t(d,"asset"),this.a.h(0,"symbol"))},
$S:4}
D.eI9.prototype={
$0(){return A.S(x.N,x.z)},
$S:151}
D.eIa.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m="typicalMin",l="enterWithinMin",k=J.a2(d),j=D.dI(k.h(d,"reading")),i=D.dI(j.h(0,"timing"))
if(i.h(0,m)==null)w=""
else{v=A.v(i.h(0,"dir"))
u=A.v(i.h(0,"ageMin"))
t=A.v(i.h(0,m))
s=A.v(i.h(0,"remainingMin"))
r=A.v(i.h(0,"dir"))
q=A.v(i.h(0,"worked"))
p=A.v(i.h(0,"of"))
o=D.c1(i.h(0,l))>0?"still early (enter within "+A.v(i.h(0,l))+" min)":"too late to enter"
w=", current "+v+" move "+u+" min old, such moves usually last "+t+" min (about "+s+" min left), past "+r+" moves really went that way "+q+" of "+p+" times, "+o}v=A.v(k.h(d,"asset"))
u=A.v(k.h(d,"name"))
t=D.hJD(d)
s=B.i.a5(D.c1(k.h(d,"changePct")),2)
k=J.z(k.h(d,"open"),!0)?"open":"closed"
r=j.h(0,"bias")
r=A.v(r==null?"unknown":r)
q=B.i.a5(D.c1(j.h(0,"score")),0)
p=j.h(0,"rsi")==null?"n/a":B.i.a5(D.c1(j.h(0,"rsi")),0)
o=j.h(0,"mom1h")==null?"n/a":B.i.a5(D.c1(j.h(0,"mom1h")),2)+"%"
n=j.h(0,"action")
return"- "+v+" ("+u+"): price "+t+", change "+s+"%, "+k+", "+r+", strength "+q+", RSI "+p+", last hour "+o+", reading: "+A.v(n==null?"n/a":n)+w+"."},
$S:52}
D.eHW.prototype={
$0(){$.DB.push(new D.a_G(!0,this.b))
$.ahd=!0},
$S:0}
D.eHX.prototype={
$1(d){return(d.a?"Student":"Tutor")+": "+d.b},
$S:z+6}
D.eHY.prototype={
$1(d){return"- "+A.v(d)},
$S:15}
D.eHZ.prototype={
$0(){},
$S:0}
D.eIu.prototype={
$1(d){var w=this.a.ax,v=w.f
if(v.length!==0){v=B.d.gd3(v).Q
v.toString
w.m7(v+200,B.eb,B.eX)}},
$S:7}
D.eIK.prototype={
$0(){return A.Oa(this.a)},
$S:0}
D.eIL.prototype={
$0(){return this.b.gLm().C7(this.a.a)},
$S:0}
D.eI7.prototype={
$1(d){return this.a.gK5().q(0,d.a)},
$S:z+0}
D.eI6.prototype={
$0(){return this.a.clN(this.b)},
$S:0}
D.eIq.prototype={
$1(d){var w=this.b,v=B.d.cd(C.Ei,w),u=this.a,t=u.y,s=w.a,r=u.gK5().q(0,s)
s=x.Y.a(D.dI(u.x.h(0,"lessons")).h(0,s))
if(s==null)s=B.lE
return new D.a0H(w,v+1,new D.eIm(u,w),t,r,A.a0(s,x.N,x.z),new D.eIn(u,w),new D.eIo(u,w),new D.eIp(u),null)},
$S:z+7}
D.eIm.prototype={
$0(){var w=this.a,v=w.c
v.toString
return w.c70(new D.Rp(A.Q(v).ax.a===B.dh),this.b.r)},
$S:127}
D.eIn.prototype={
$1(d){var w=this.a
w.l(new D.eIl(w,this.b,d))
w.aCT()},
$S:117}
D.eIl.prototype={
$0(){var w=this.a,v=x.N,u=x.z,t=A.a0(D.dI(w.x.h(0,"lessons")),v,u)
t.n(0,this.b.a,this.c)
u=A.dD(w.x,v,u)
u.n(0,"lessons",t)
w.x=u},
$S:0}
D.eIo.prototype={
$0(){return this.a.aef(this.b.a)},
$S:0}
D.eIp.prototype={
$1(d){var w=this.a,v=w.c
v.toString
A.a7(v,!1).e3()
w.aR5(d)},
$S:2}
D.eIb.prototype={
$2$last$lines(d,e){var w=this.a
return new D.a_A(B.d.fB(w,Math.max(0,w.length-d)),this.b,null,e,this.c,null)},
$0(){return this.$2$last$lines(36,!0)},
$1$lines(d){return this.$2$last$lines(36,d)},
$S:2026}
D.eIj.prototype={
$1(d){var w=null
return A.c(d,w,w,w,w,w,w,A.l(w,w,this.a.a?C.cl:B.c,w,w,w,w,w,w,w,w,13,w,w,w,w,1.4,!0,w,w,w,w,w,w,w,w),w,w,w)},
$S:2027}
D.eIc.prototype={
$1(d){var w=J.a2(d)
return J.z(D.dI(w.h(d,"reading")).h(0,"decision"),"ENTER")&&J.z(D.dI(w.h(d,"reading")).h(0,"dir"),"up")},
$S:4}
D.eId.prototype={
$1(d){return J.t(d,"asset")},
$S:775}
D.eIe.prototype={
$1(d){var w=J.a2(d)
return J.z(D.dI(w.h(d,"reading")).h(0,"decision"),"ENTER")&&J.z(D.dI(w.h(d,"reading")).h(0,"dir"),"down")},
$S:4}
D.eIf.prototype={
$1(d){return J.t(d,"asset")},
$S:775}
D.eIg.prototype={
$1(d){var w=J.a2(d)
return J.z(w.h(d,"open"),!0)&&D.dI(w.h(d,"reading")).h(0,"rsi")!=null},
$S:4}
D.eIh.prototype={
$1(d){return J.z(J.t(d,"open"),!0)},
$S:4}
D.eIi.prototype={
$1(d){var w=D.dI(D.dI(J.t(d,"reading")).h(0,"timing"))
return D.c1(w.h(0,"of"))>=3&&D.c1(w.h(0,"worked"))/D.c1(w.h(0,"of"))>=0.5},
$S:4}
D.eIz.prototype={
$1(d){var w,v,u,t=this.a
if(t.cx!=="All"&&D.hEH(d)!==t.cx)return!1
t=this.b
if(t.length===0)return!0
w=J.a2(d)
v=A.v(w.h(d,"asset"))
u=A.v(w.h(d,"name"))
w=w.h(d,"asset")
w=J.k(w==null?"":w)
return B.a.q((v+" "+u+" "+A.aL(w,"/","")).toLowerCase(),t)},
$S:4}
D.eIA.prototype={
$2(d,e){var w="activeSignal",v=J.a2(d),u=x.f,t=u.b(v.h(d,w))?0:1,s=J.a2(e),r=u.b(s.h(e,w))?0:1
if(t!==r)return t-r
return B.i.aQ(D.c1(D.dI(s.h(e,"v2")).h(0,"passed")),D.c1(D.dI(v.h(d,"v2")).h(0,"passed")))},
$S:40}
D.eIC.prototype={
$0(){var w=this.a
return w.l(new D.eIy(w,this.b))},
$S:0}
D.eIy.prototype={
$0(){return this.a.cx=this.b},
$S:0}
D.eIB.prototype={
$1(d){return D.hEH(d)===this.a},
$S:4}
D.eID.prototype={
$0(){var w=this.a
w.l(new D.eIx(w))},
$S:0}
D.eIx.prototype={
$0(){var w=this.a,v=w.CW
w.CW=!v
if(v){w.ch=""
w.cy.bN(0,B.ck)}},
$S:0}
D.eIE.prototype={
$1(d){var w=this.a
return w.l(new D.eIw(w,d))},
$S:2}
D.eIw.prototype={
$0(){return this.a.ch=this.b},
$S:0}
D.eIF.prototype={
$0(){return this.a.aR5("What is happening with "+A.v(J.t(this.b,"asset"))+" right now? Which of the 5 confirmations are missing, and why is the answer BUY, SELL or WAIT?")},
$S:0}
D.eIv.prototype={
$1(d){return A.a0(d,x.N,x.z)},
$S:22}
D.eHS.prototype={
$1(d){return this.a.gK5().q(0,d.a)},
$S:z+0}
D.eHT.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=!u.b?2:4
break
case 2:u.a.gLm().C7(0)
w=3
break
case 4:w=5
return A.b(A.Mm(),$async$$0)
case 5:t=e
s=u.a
if(s.c!=null)s.l(new D.eHR(s,t))
$.cn2=new A.W(A.h0(0,0),0,!1)
A.JU()
case 3:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
D.eHR.prototype={
$0(){return this.a.Q=this.b},
$S:0}
D.eHU.prototype={
$0(){return this.a.K4(this.b)},
$S:0}
D.eHV.prototype={
$0(){var w=this.a
return w.K4(w.at.a.a)},
$S:0}
D.duX.prototype={
$1(d){var w
x.g.a(d)
w=d==null?B.bQ:d
w=J.b8(w,new D.duY(),x.S)
w=A.B(w,w.$ti.k("aj.E"))
return w},
$S:435}
D.duY.prototype={
$1(d){var w=A.c9(A.v(d),null)
return w==null?0:w},
$S:311}
D.duV.prototype={
$1(d){var w,v
x.Y.a(d)
w=d==null?B.lE:d
v=x.S
return J.oO(w,new D.duW(),v,v)},
$S:2029}
D.duW.prototype={
$2(d,e){var w,v=A.c9(A.v(d),null)
if(v==null)v=0
w=A.c9(A.v(e),null)
if(w==null)w=0
return new A.bv(v,w,x.a)},
$S:2030}
D.duT.prototype={
$1(d){var w
if(d>=0){w=this.a.d
w===$&&A.d()
w=d<w.length}else w=!1
return w},
$S:31}
D.duU.prototype={
$1(d){var w,v=this.a
if(v.c==null)return
w=v.w
w===$&&A.d()
if(w.a!==0)v.l(new D.duS(v))},
$S:10}
D.duS.prototype={
$0(){return this.a.cGm()},
$S:0}
D.duL.prototype={
$2(d,e){return new A.bv(""+d,e,x.W)},
$S:776}
D.duM.prototype={
$2(d,e){return new A.bv(""+d,e,x.W)},
$S:776}
D.duN.prototype={
$1(d){var w=this.a,v=w.x
v===$&&A.d()
if(!B.d.q(v,d)){w=w.e
w===$&&A.d()
w=!B.d.q(w,d)}else w=!1
return w},
$S:31}
D.duO.prototype={
$1(d){var w=this.a,v=w.e
v===$&&A.d()
if(!B.d.q(v,d)){w=w.f
w===$&&A.d()
w=!w.q(0,d)}else w=!1
return w},
$S:31}
D.duJ.prototype={
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
D.duP.prototype={
$0(){return A.Oa(this.a)},
$S:0}
D.duQ.prototype={
$0(){return this.a.a.d_t('I just read the lesson "'+this.b.b+'". Can you explain it again with a live example from the markets right now?')},
$S:0}
D.duR.prototype={
$0(){this.a.a.rn()
A.Oa(this.b)},
$S:0}
D.duK.prototype={
$0(){return this.a.cgp(this.b,this.c)},
$S:0};(function aliases(){var w=D.aPo.prototype
w.bBC=w.t})();(function installTearOffs(){var w=a._instance_0u,v=a._instance_1u
var u
w(u=D.aHp.prototype,"gclL","clM",2)
w(u,"gczf","a3q",1)
w(D.aGm.prototype,"gcgs","Br",1)
w(u=D.aHq.prototype,"gcgr","Rj",1)
v(u,"gcgq","K4",5)})();(function inheritance(){var w=a.mixinHard,v=a.inheritMany,u=a.inherit
v(A.af,[D.atV,D.a_A,D.WY,D.aBh,D.aKv,D.aCA,D.XL,D.a0H])
v(A.ah,[D.aHp,D.bet,D.aGm,D.bf9,D.bvM,D.bi0,D.aPo,D.blb])
v(A.fR,[D.eHP,D.eHQ,D.eHm,D.eH7,D.eHx,D.eHh,D.eHt,D.eGX,D.eGY,D.eGZ,D.eGV,D.eH0,D.eHF,D.eHG,D.eHH,D.eHI,D.eHB,D.eHD,D.eHc,D.eHe,D.eGT,D.eHi,D.eHj,D.eHM,D.cX8,D.cX6,D.cX7,D.cX5,D.cX9,D.cXb,D.cXd,D.fi9,D.fwJ,D.fC8,D.fGt,D.fDe,D.fKw,D.e83,D.e7y,D.e7K,D.e7H,D.e7I,D.e7w,D.e7x,D.e7t,D.e7u,D.e7v,D.e7F,D.e7P,D.e7N,D.e7C,D.e7r,D.e7T,D.e7G,D.e8_,D.e7V,D.e7X,D.e7W,D.e7M,D.da_,D.fHk,D.fL1,D.fg_,D.din,D.fxy,D.eI_,D.eIQ,D.eIR,D.eIJ,D.eI2,D.eI4,D.eI5,D.eIr,D.eIG,D.eI8,D.eIa,D.eHX,D.eHY,D.eIu,D.eI7,D.eIq,D.eIn,D.eIp,D.eIb,D.eIj,D.eIc,D.eId,D.eIe,D.eIf,D.eIg,D.eIh,D.eIi,D.eIz,D.eIB,D.eIE,D.eIv,D.eHS,D.duX,D.duY,D.duV,D.duT,D.duU,D.duN,D.duO])
v(A.hS,[D.eH8,D.eHa,D.eHl,D.eHo,D.eHp,D.eH9,D.eHv,D.eHw,D.eHy,D.eHz,D.eHr,D.eHs,D.eHO,D.eHJ,D.eHK,D.eH_,D.eGW,D.eH1,D.eHA,D.eHE,D.eHd,D.eHb,D.eH4,D.eH3,D.eH5,D.eH2,D.eGU,D.eH6,D.eHN,D.eHL,D.eGR,D.eGQ,D.cX1,D.cX4,D.cX3,D.cX2,D.e7z,D.e7L,D.e7R,D.e7S,D.e81,D.e82,D.e7s,D.e7Q,D.e7O,D.e7B,D.e7A,D.e80,D.e7Z,D.e7Y,D.e7U,D.e7q,D.e7p,D.d9Z,D.ffZ,D.dim,D.eIO,D.eIN,D.eIP,D.eIM,D.eIk,D.eIt,D.eI3,D.eI1,D.eI0,D.eIs,D.eI9,D.eHW,D.eHZ,D.eIK,D.eIL,D.eI6,D.eIm,D.eIl,D.eIo,D.eIC,D.eIy,D.eID,D.eIx,D.eIw,D.eIF,D.eHT,D.eHR,D.eHU,D.eHV,D.duS,D.duJ,D.duP,D.duQ,D.duR,D.duK])
v(A.ie,[D.eHq,D.eHu,D.eHg,D.eHf,D.eHk,D.eHn,D.eGS,D.cXa,D.cXc,D.e7J,D.e7E,D.e7D,D.fHl,D.ffY,D.eIH,D.eIA,D.duW,D.duL,D.duM])
v(A.lK,[D.beu,D.bwq])
v(A.aE,[D.z3,D.Rp,D.cF,D.uv,D.a_G])
u(D.aHq,D.aPo)
w(D.aPo,A.ci)})()
A.i0(b.typeUniverse,JSON.parse('{"atV":{"af":[],"w":[]},"a_A":{"af":[],"w":[]},"WY":{"af":[],"w":[]},"aBh":{"af":[],"w":[]},"aKv":{"af":[],"w":[]},"aCA":{"af":[],"w":[]},"XL":{"af":[],"w":[]},"a0H":{"af":[],"w":[]},"aHp":{"ah":["atV"]},"bet":{"ah":["a_A"]},"beu":{"aC":[]},"bwq":{"aC":[]},"aGm":{"ah":["WY"]},"bf9":{"ah":["aBh"]},"bvM":{"ah":["aKv"]},"bi0":{"ah":["aCA"]},"aHq":{"ah":["XL"]},"blb":{"ah":["a0H"]}}'))
var y={g:". Look over the trades, then press Start to turn it back on.",b:"The chart appears after the first reading."}
var x=(function rtii(){var w=A.ar
return{c:w("kT<u?>"),D:w("ED"),V:w("N<aa>"),O:w("N<u>"),o:w("N<ay<a9<m,@>?>>"),R:w("N<mZ>"),t:w("N<a9<m,@>>"),v:w("N<fZ>"),L:w("N<+(m,m)>"),s:w("N<m>"),p:w("N<w>"),r:w("N<cF>"),n:w("N<H>"),X:w("N<F>"),W:w("bv<m,F>"),a:w("bv<F,F>"),P:w("a9<m,@>"),f:w("a9<@,@>"),b:w("cn"),K:w("aE"),N:w("m"),E:w("X<uv>"),q:w("ky"),y:w("P"),z:w("@"),S:w("F"),i:w("ai<a9<m,@>>?"),g:w("ai<@>?"),h:w("a9<m,@>?"),Y:w("a9<@,@>?"),H:w("~")}})();(function constants(){var w=a.makeConstList
C.cJ=new A.u(1,0.12156862745098039,0.7490196078431373,0.592156862745098,B.q)
C.b5u=new A.kT(C.cJ,x.c)
C.im=new A.u(1,0.08627450980392157,0.10588235294117647,0.1803921568627451,B.q)
C.bX=new A.u(1,0.5411764705882353,0.5607843137254902,0.6392156862745098,B.q)
C.t2=new A.u(1,0.0392156862745098,0.050980392156862744,0.09411764705882353,B.q)
C.t4=new A.u(1,0.9294117647058824,0.9372549019607843,0.9803921568627451,B.q)
C.bY=new A.u(1,0.5529411764705883,0.5843137254901961,0.6705882352941176,B.q)
C.mZ=new A.u(1,0.08627450980392157,0.09019607843137255,0.11372549019607843,B.q)
C.oG=new A.u(1,0.14901960784313725,0.17647058823529413,0.27058823529411763,B.q)
C.oL=new A.u(1,0.9058823529411765,0.9098039215686274,0.9411764705882353,B.q)
C.NU=new A.u(1,0.06666666666666667,0.08235294117647059,0.1607843137254902,B.q)
C.NY=new A.u(1,0.12549019607843137,0.14901960784313725,0.23137254901960785,B.q)
C.O0=new A.u(1,0.9725490196078431,0.9450980392156862,0.9490196078431372,B.q)
C.n6=new A.u(1,0.13725490196078433,0.16470588235294117,0.25882352941176473,B.q)
C.O7=new A.u(1,0.9372549019607843,0.9411764705882353,0.9607843137254902,B.q)
C.cl=new A.u(1,0.07058823529411765,0.0784313725490196,0.10980392156862745,B.q)
C.d9=new A.u(1,0.9411764705882353,0.33725490196078434,0.41568627450980394,B.q)
C.tm=new A.u(1,0.9568627450980393,0.9607843137254902,0.9803921568627451,B.q)
C.tn=new A.u(1,0.11372549019607843,0.13725490196078433,0.2196078431372549,B.q)
C.bEE=new A.R(0,0,0,7)
C.bEN=new A.R(0,10,0,4)
C.bF5=new A.R(0,4,0,12)
C.bGi=new A.R(12,8,12,6)
C.bGs=new A.R(13,7,13,7)
C.bHh=new A.R(16,10,16,30)
C.ao8=new A.R(16,4,16,40)
C.bHF=new A.R(16,6,16,16)
C.aod=new A.R(16,6,16,40)
C.bHN=new A.R(16,8,16,40)
C.bKw=new A.R(4,0,4,10)
C.aoW=new A.R(4,0,4,8)
C.arm=new A.a_(62840,"MaterialIcons",!1)
C.bVu=new A.a_(983124,"MaterialIcons",!1)
C.bVT=new A.a_(983325,"MaterialIcons",!1)
C.asl=new A.a_(983372,"MaterialIcons",!1)
C.bXt=new A.ae(C.asl,18,C.cJ,null,null,null)
C.bXV=new A.ae(B.xl,16,null,null,null,null)
C.c_Z=new A.ae(B.ni,7,C.cJ,null,null,null)
C.c0G=new A.ae(B.ea,18,C.cJ,null,null,null)
C.c0W=new A.ae(B.rk,20,B.c,null,null,null)
C.c39=new A.ae(B.xl,18,null,null,null,null)
C.c5c=new A.ae(B.IF,18,null,null,null,null)
C.c5g=new A.ae(B.xo,null,C.d9,null,null,null)
C.c5p=new A.ae(B.ko,18,C.cJ,null,null,null)
C.c6F=new A.ae(B.Ij,18,C.d9,null,null,null)
C.cO_=w([B.dD,B.fy,B.ir],x.O)
C.auZ=new A.a8(B.ay,B.aD,B.x,C.cO_,null,null)
C.aCO=w([C.d9,B.as,C.cJ],x.O)
C.caF=new A.a8(B.a5,B.a9,B.x,C.aCO,null,null)
C.cbe=new A.a8(B.a5,B.a9,B.x,C.aCO,B.m6,null)
C.dqM=w([B.dD,B.ir,B.bB],x.O)
C.cei=new A.a8(B.ay,B.aD,B.x,C.dqM,null,null)
C.coa=w([12,24,48],x.X)
C.d6k=w(["All","Forex","Stocks","Crypto"],x.s)
C.dcy=w(["Which market looks strongest right now?","Is Bitcoin going up or down right now?","Why has the agent not bought yet?","Explain RSI like I am new","How do I know when to sell?","What does bullish and bearish mean?"],x.s)
C.f84=new A.y("The idea","Trading means buying something and selling it later. You make money when you sell for more than you paid, and you lose money when you sell for less. That is all a trade is.")
C.f_D=new A.y("Why prices move","Every price is set by buyers and sellers. When more people want to buy than sell, the price goes up. When more want to sell, it goes down. A chart is simply a picture of that tug of war over time.")
C.f0A=new A.y("Nobody knows the future","No person, app or AI can know for sure where a price goes next. Good traders do not guess. They follow clear rules, keep losses small, and let the winners pay for the losers.")
C.f7M=new A.y("Why pretend money first","This agent uses Alpaca paper money: real prices, fake dollars. You can learn every step, make mistakes and see real results without risking a cent. Professionals practise this way too.")
C.cZx=w([C.f84,C.f_D,C.f0A,C.f7M],x.L)
C.daO=w(["When you buy","When you sell for more than you paid","When the market opens"],x.s)
C.b3u=new D.cF("When do you make money on a trade?",C.daO,1,"Profit only exists after you sell higher than you bought.")
C.d59=w(["More buyers than sellers","The app","The time of day"],x.s)
C.b3p=new D.cF("What makes a price go up?",C.d59,0,"More people wanting to buy pushes the price up.")
C.dyN=w([C.b3u,C.b3p],x.r)
C.hO6=new D.uv("basics","What trading really is","Buyers, sellers and why prices move",4,Q.l9,B.as,"basics",C.cZx,C.dyN)
C.bWw=new A.a_(983780,"MaterialIcons",!1)
C.eRk=new A.y("One candle = one time slice","On this chart every candle is 5 minutes. It shows four prices: where it started (open), where it ended (close), the highest point (high) and the lowest point (low).")
C.eYZ=new A.y("The colours","Green candle: the price closed HIGHER than it opened, buyers won those 5 minutes. Yellow candle: it closed LOWER, sellers won. Many apps use red instead of yellow, it means the same thing.")
C.f9h=new A.y("Body and wicks","The thick part (the body) runs from open to close. The thin lines (the wicks) show how far the price went up or down before coming back. A long wick on top means buyers pushed up but sellers pushed it back down.")
C.f6i=new A.y("Reading a row of candles","Several green candles in a row, each closing higher, show buyers in control. Many yellow ones closing lower show sellers in control. Candles that go up and down with no direction mean the market is undecided.")
C.cfL=w([C.eRk,C.eYZ,C.f9h,C.f6i],x.L)
C.daV=w(["It closed higher than it opened","It is a good time to buy","The market is closed"],x.s)
C.b3s=new D.cF("A green candle means...",C.daV,0,"Colour only tells you if it closed above or below where it opened.")
C.cGF=w(["1 day","5 minutes","1 hour"],x.s)
C.b3h=new D.cF("On this chart one candle covers...",C.cGF,1,"The agent works with 5-minute candles.")
C.dhf=w([C.b3s,C.b3h],x.r)
C.hOa=new D.uv("candles","Reading candles","Open, close, high and low in one shape",5,C.bWw,C.cJ,"candles",C.cfL,C.dhf)
C.f1G=new A.y("Bullish","An uptrend. The price makes higher highs and higher lows, like climbing stairs. Buyers are in control. Traders call this bullish (a bull attacks upward with its horns).")
C.fac=new A.y("Bearish","A downtrend. Lower highs and lower lows, like walking down stairs. Sellers are in control. This is bearish (a bear swipes downward).")
C.eSB=new A.y("Sideways","The price bounces between a ceiling and a floor with no clear direction. Most trading signals fail here, so the best move is often to wait.")
C.f4r=new A.y("The golden rule","Trade WITH the trend, not against it. Buying in a downtrend because it looks cheap is how most beginners lose. The agent only buys when the trend turns up.")
C.d8X=w([C.f1G,C.fac,C.eSB,C.f4r],x.L)
C.d73=w(["Bearish","Bullish","Sideways"],x.s)
C.b3t=new D.cF("Higher highs and higher lows means...",C.d73,1,"Climbing stairs = uptrend = bullish.")
C.db5=w(["Work best","Often fail","Are always right"],x.s)
C.b3m=new D.cF("In a sideways market, signals...",C.db5,1,"With no direction, signals flip back and forth.")
C.dzj=w([C.b3t,C.b3m],x.r)
C.hO2=new D.uv("trend","Trends: up, down, sideways","Bullish, bearish and how to tell",5,B.mx,B.cf,"trend",C.d8X,C.dzj)
C.fbd=new A.y("What an average line is","A moving average is the average closing price of the last few candles, drawn as a smooth line. It hides the small wiggles so you can see the real direction.")
C.eQu=new A.y("Fast line (pink)","The average of the last 9 candles, about 45 minutes. It reacts quickly to new moves.")
C.eS6=new A.y("Slow line (purple)","The average of the last 21 candles, about 1 hour 45 minutes. It moves slowly and shows the bigger direction.")
C.f2I=new A.y("How to read them","Fast line ABOVE slow line: recent prices are higher than older ones, the trend is up. Fast line BELOW: the trend is down. When the price itself is above both lines, buyers are strong.")
C.dsE=w([C.fbd,C.eQu,C.eS6,C.f2I],x.L)
C.dId=w(["45 minutes","1 day","1 week"],x.s)
C.b3v=new D.cF("The pink fast line averages about...",C.dId,0,"9 candles x 5 minutes = 45 minutes.")
C.dDK=w(["Trend is up","Trend is down","Market closed"],x.s)
C.b3o=new D.cF("Fast line above slow line means...",C.dDK,0,"Recent prices are higher than older prices.")
C.doq=w([C.b3v,C.b3o],x.r)
C.hO4=new D.uv("ma","Moving averages","The pink fast line and the purple slow line",6,N.xt,B.bB,"ma",C.dsE,C.doq)
C.f7R=new A.y("Buy signal","When the fast line crosses UP through the slow line, the short-term trend has just turned up. That moment is the buy signal. The agent buys at that point ($100 of the stock or coin), but only if the big trend is rising too. It watches the 10 stocks on weekdays and every crypto pair on Alpaca around the clock, all at the same time, and buys whichever gives a valid entry first.")
C.f_M=new A.y("Sell signal","When the fast line crosses back DOWN through the slow line, the up move is over. That is the sell signal, and the agent closes the trade.")
C.f4C=new A.y("Why it must be fresh","If the cross happened an hour ago, the easy part of the move may be gone. Buying late means buying high. So the agent only acts on a cross that happened since its last check, never on an old one.")
C.f6B=new A.y("The weakness","In sideways markets the lines cross back and forth and give false signals. That is why every trade also has a stop loss: when a signal is wrong, the loss stays small.")
C.dfE=w([C.f7R,C.f_M,C.f4C,C.f6B],x.L)
C.duQ=w(["Crosses above the slow line","Crosses below the slow line","Is flat"],x.s)
C.b3n=new D.cF("The buy signal is when the fast line...",C.duQ,0,"Crossing up = trend turning up.")
C.dH8=w(["To avoid buying late","The app is slow","Old crosses are illegal"],x.s)
C.b3f=new D.cF("Why does the agent skip old crosses?",C.dH8,0,"A late entry means buying after most of the move.")
C.d5g=w([C.b3n,C.b3f],x.r)
C.hO3=new D.uv("cross","The crossover signal","Exactly when the agent buys and sells",6,B.ars,B.b_,"cross",C.dfE,C.d5g)
C.bW1=new A.a_(983477,"MaterialIcons",!1)
C.f4a=new A.y("What RSI measures","RSI (Relative Strength Index) compares the size of recent rises with recent falls and gives a number from 0 to 100. Above 50, rises have been bigger. Below 50, falls have been bigger.")
C.eUi=new A.y("Above 70: stretched","The price rose very fast. It is called overbought. It often pauses or pulls back, so buying right then is risky. It can still keep rising in a strong trend.")
C.f4h=new A.y("Below 30: oversold","The price fell very fast. It often bounces, but in a strong downtrend it can stay low. Oversold is not a reason to buy on its own.")
C.f3q=new A.y("How to use it","Use RSI as a second opinion. A buy signal with RSI between 50 and 70 is healthy. A buy signal with RSI above 75 means the move may already be tired.")
C.d5F=w([C.f4a,C.eUi,C.f4h,C.f3q],x.L)
C.dh6=w(["Oversold","Overbought","Neutral"],x.s)
C.b3e=new D.cF("RSI above 70 is called...",C.dh6,1,"It rose fast and is stretched.")
C.b3r=new D.cF("RSI below 30 always means buy.",P.Th,1,"Falling markets can stay oversold. It is a hint, not a signal.")
C.dI5=w([C.b3e,C.b3r],x.r)
C.hO9=new D.uv("rsi","RSI: momentum","Is the move strong, stretched or tired?",5,C.bW1,B.cF,"rsi",C.d5F,C.dI5)
C.eVJ=new A.y("Decide the exit before you enter","Every agent trade has two exits set before it starts, in dollars: take profit when the trade is up $50, stop loss when it is down $50.")
C.eYT=new A.y("Win the same as you risk","The win (+$50) is the same size as the loss (-$50). So every win cancels one loss: winning 5 out of 10 trades breaks even. More than 5 out of 10 is profit, fewer is a loss. The win rate on the agent screen shows which side it is on.")
C.eLp=new A.y("Size matters most","The agent uses $100 per trade even though the paper account has $100,000. Small trades mean no single mistake can hurt much. Pros rarely risk more than 1 to 2 percent of their money on one trade.")
C.f11=new A.y("Never move the stop","The biggest beginner mistake is hoping a losing trade comes back and moving the stop lower. Small losses are the cost of doing business. Big losses end accounts.")
C.dC9=w([C.eVJ,C.eYT,C.eLp,C.f11],x.L)
C.csK=w(["5 in 10 trades","9 in 10 trades","Every trade"],x.s)
C.b3k=new D.cF("With +$50 wins and -$50 losses, to break even you must win about...",C.csK,0,"Each win (+50) cancels one loss (-50).")
C.dfD=w(["Move the stop lower","Let the stop loss work","Buy more"],x.s)
C.b3i=new D.cF("A trade is losing. The best move is...",C.dfD,1,"The stop exists to keep losses small.")
C.dlk=w([C.b3k,C.b3i],x.r)
C.hO1=new D.uv("risk","Risk: stop loss and take profit","Why small losses beat big wins",7,B.rl,C.d9,"risk",C.dC9,C.dlk)
C.bWC=new A.a_(983848,"MaterialIcons",!1)
C.eUU=new A.y("Bad days happen","Some days every signal fails. The danger is trying to win it back by trading more and bigger. That is called revenge trading and it is how small losses become big ones.")
C.f06=new A.y("Daily stop: $50","If the day loses $50, the agent makes no more buys until tomorrow. It walks away and lets the market calm down.")
C.f7h=new A.y("Total brake: $100","If total losses reach $100, the agent pauses completely until you review what happened and turn it back on. Reviewing is the most important part of learning.")
C.eTi=new A.y("Your own rules","When you trade yourself, set the same kind of limits before the day starts, and keep them even when it hurts.")
C.dhy=w([C.eUU,C.f06,C.f7h,C.eTi],x.L)
C.dkh=w(["Doubles the next trade","Stops buying for the day","Sells everything forever"],x.s)
C.b3j=new D.cF("After losing $50 in a day, the agent...",C.dkh,1,"The daily stop prevents revenge trading.")
C.dhg=w([C.b3j],x.r)
C.hO5=new D.uv("brakes","Daily stop and total brake","Protecting your account from bad days",4,C.bWC,E.i0,"brakes",C.dhy,C.dhg)
C.aj6=new A.u(1,0.3843137254901961,0.49411764705882355,0.9176470588235294,B.q)
C.eZR=new A.y("Stocks and funds","SPY, QQQ, Apple, Microsoft, Nvidia, Tesla and Amazon trade on US market days from 9:30 AM to 4:00 PM Eastern Time. Closed at night, on weekends and on holidays.")
C.f_J=new A.y("Overnight gaps","News can come out while the stock market is closed, so the next morning it can open far higher or lower. That is why the agent sells stocks by 3:55 PM and never holds them overnight.")
C.eXO=new A.y("Crypto","Bitcoin, Ethereum and Solana trade all day, every day, including weekends. More hours means more chances, but crypto also moves faster and harder, so stops get hit more often.")
C.f63=new A.y("Funds vs single companies","SPY holds the 500 biggest US companies and QQQ holds 100 big tech companies, so they move more calmly. One company like Tesla can jump a lot on its own news.")
C.cTp=w([C.eZR,C.f_J,C.eXO,C.f63],x.L)
C.d8W=w(["Only weekdays","All day, every day","Only at night"],x.s)
C.b3q=new D.cF("When can Bitcoin be traded?",C.d8W,1,"Crypto never closes.")
C.d5U=w(["To avoid overnight gaps","Stocks expire","It is the law"],x.s)
C.b3g=new D.cF("Why sell stocks before the close?",C.d5U,0,"Overnight news can make the price jump at the open.")
C.dps=w([C.b3q,C.b3g],x.r)
C.hO8=new D.uv("hours","Stocks vs crypto","Market hours, weekends and jumpiness",5,B.jZ,C.aj6,"hours",C.cTp,C.dps)
C.f4D=new A.y("Judge many trades, not one","One trade tells you nothing. Luck decides single trades. After 20 to 50 trades you start to see if a method really works. That is why the plan is 2 to 4 weeks of paper trading.")
C.ePP=new A.y("Keep a journal","For each trade write: why you bought, where your stop and target were, what happened, and what you learned. The Pretend trades list on the main screen is the agent's journal.")
C.eQn=new A.y("Follow the rules exactly","The point of the agent is to follow rules perfectly, with no fear and no greed. Check that it did. If it ever breaks a rule, that is a bug to fix before real money.")
C.eXP=new A.y("Before real money","Real money comes only after a long paper test with a positive result, a full review, and money you can truly afford to lose. Never borrow to trade.")
C.dxX=w([C.f4D,C.ePP,C.eQn,C.eXP],x.L)
C.dEF=w(["1","3","20 or more"],x.s)
C.b3d=new D.cF("How many trades before judging a method?",C.dEF,2,"Small samples are mostly luck.")
C.dHD=w(["Borrowed","Money you can afford to lose","Rent money"],x.s)
C.b3l=new D.cF("Money for trading should be...",C.dHD,1,"Never trade money you need.")
C.dI0=w([C.b3d,C.b3l],x.r)
C.hO7=new D.uv("practice","Practising like a pro","Journals, patience and judging results",5,B.m1,B.bj,"practice",C.dxX,C.dI0)
C.Ei=w([C.hO6,C.hOa,C.hO2,C.hO4,C.hO3,C.hO9,C.hO1,C.hO5,C.hO8,C.hO7],A.ar("N<uv>"))
C.eum={basics:0,candles:1,trend:2,ma:3,cross:4,rsi:5,risk:6,brakes:7,hours:8,practice:9}
C.dbH=w(["A $4 profit","A $4 loss","Nothing"],x.s)
C.hS7=new D.cF("You buy at $100 and sell at $96. What happened?",C.dbH,1,"Selling lower than you bought is a loss.")
C.duO=w(["The future price","How the price moved over time","Who is buying"],x.s)
C.hS5=new D.cF("What does a price chart show?",C.duO,1,"A chart is a record of past prices.")
C.dGj=w(["Yes, experts can","Yes, an AI can","No, nobody can"],x.s)
C.hSf=new D.cF("Can anyone know for sure where a price goes next?",C.dGj,2,"Markets are uncertain; rules and stops manage that.")
C.ddH=w(["Trading with real prices and pretend money","Trading newspapers","Trading on paper forms"],x.s)
C.hSI=new D.cF("What is paper trading?",C.ddH,0,"Real prices, fake dollars: practice without risk.")
C.dy_=w(["It is faster","To learn without risking real money","Pretend money earns more"],x.s)
C.hSa=new D.cF("Why practise with pretend money first?",C.dy_,1,"Mistakes cost nothing while you learn.")
C.csE=w(["Rise","Fall","Stay frozen"],x.s)
C.hSg=new D.cF("More people want to sell than buy. The price will most likely...",C.csE,1,"Selling pressure pushes prices down.")
C.dgV=w(["Clear rules and small losses","Lucky guesses","Tips from friends"],x.s)
C.hTL=new D.cF("Good traders mostly rely on...",C.dgV,0,"Rules and risk control beat guessing.")
C.ceN=w(["$45","$55","$60"],x.s)
C.hTd=new D.cF("You buy $50 of something and it rises 10%. It is now worth...",C.ceN,1,"10% of $50 is $5, so $55.")
C.cY6=w(["Buy","Sell","Look at the chart"],x.s)
C.hSx=new D.cF("A trade is only finished when you...",C.cY6,1,"Until you sell, a gain or loss is not locked in.")
C.dFx=w(["Good traders never lose","Every trader has losing trades","Losses only happen to beginners"],x.s)
C.hSs=new D.cF("Which is true about losses?",C.dFx,1,"Losing trades are normal; keeping them small is the skill.")
C.cR_=w(["Real dollars are spent","No real money is at risk","It trades in secret"],x.s)
C.hTl=new D.cF("The agent uses Alpaca paper money. That means...",C.cR_,1,"Paper accounts use fake dollars.")
C.dqv=w(["The government","Buyers and sellers agreeing","The app makers"],x.s)
C.hS4=new D.cF("A price is set by...",C.dqv,1,"Each trade is a buyer and seller agreeing on a price.")
C.deh=w([C.b3u,C.b3p,C.hS7,C.hS5,C.hSf,C.hSI,C.hSa,C.hSg,C.hTL,C.hTd,C.hSx,C.hSs,C.hTl,C.hS4],x.r)
C.daz=w(["It closed lower than it opened","It closed higher","Nothing traded"],x.s)
C.hTv=new D.cF("A yellow (or red) candle means...",C.daz,0,"Sellers won that time slice.")
C.deU=w(["Wick","Body","Tail light"],x.s)
C.hSh=new D.cF("The thick part of a candle is called the...",C.deU,1,"The body runs from open to close.")
C.dnt=w(["Wicks","Bodies","Averages"],x.s)
C.hT1=new D.cF("The thin lines above and below are the...",C.dnt,0,"Wicks show the high and the low.")
C.del=w(["Open","Close","Highest price"],x.s)
C.hTn=new D.cF("The top of the upper wick shows the...",C.del,2,"The tip of the upper wick is the high.")
C.dIs=w(["Lowest price","Open","Average"],x.s)
C.hTE=new D.cF("The bottom of the lower wick shows the...",C.dIs,0,"The tip of the lower wick is the low.")
C.dh2=w(["One","Two","Four"],x.s)
C.hTe=new D.cF("How many prices does one candle show?",C.dh2,2,"Open, high, low and close.")
C.dsp=w(["Buyers pushed up but sellers pushed it back down","The price never moved","The market closed early"],x.s)
C.hTg=new D.cF("A long upper wick means...",C.dsp,0,"The price went high, then fell back before the close.")
C.d5p=w(["Sellers in control","Buyers in control","No direction"],x.s)
C.hSY=new D.cF("Many green candles in a row, each closing higher, show...",C.d5p,1,"Rising closes mean buyers are winning.")
C.d55=w(["A strong uptrend","The market is undecided","A crash"],x.s)
C.hTt=new D.cF("Candles going up and down with no direction mean...",C.d55,1,"Mixed candles show indecision.")
C.daX=w(["Green","Yellow","Grey"],x.s)
C.hTc=new D.cF("A candle opened at 10 and closed at 12. Its colour here is...",C.daX,0,"It closed above the open.")
C.dJ3=w(["5 candles","12 candles","60 candles"],x.s)
C.hSj=new D.cF("In 1 hour of 5-minute candles there are...",C.dJ3,1,"60 minutes divided by 5 is 12.")
C.dr9=w(["The first price in that time","The last price in that time","The highest price"],x.s)
C.hTN=new D.cF('The "close" of a candle is...',C.dr9,1,"Close is where the price ended.")
C.dyc=w([C.b3s,C.b3h,C.hTv,C.hSh,C.hT1,C.hTn,C.hTE,C.hTe,C.hTg,C.hSY,C.hTt,C.hTc,C.hSj,C.hTN],x.r)
C.d7i=w(["Bullish","Bearish","Sideways"],x.s)
C.hTp=new D.cF("Lower highs and lower lows means...",C.d7i,1,"Walking down stairs = downtrend = bearish.")
C.dmU=w(["Rise","Fall","Stay the same"],x.s)
C.hTS=new D.cF('"Bullish" means you expect prices to...',C.dmU,0,"A bull attacks upward.")
C.djo=w(["Rise","Fall","Double"],x.s)
C.hTQ=new D.cF('"Bearish" means you expect prices to...',C.djo,1,"A bear swipes downward.")
C.dn3=w(["Trade against the trend","Trade with the trend","Ignore the trend"],x.s)
C.hT5=new D.cF("The golden rule of trends is...",C.dn3,1,"Going with the trend wins more often.")
C.d8K=w(["A safe plan","A common beginner mistake","What the agent does"],x.s)
C.hTy=new D.cF("Buying in a downtrend because it looks cheap is...",C.d8K,1,"Cheap can get cheaper.")
C.djS=w(["Sideways","Bullish","Bearish"],x.s)
C.hSB=new D.cF("A price bouncing between a ceiling and a floor is...",C.djS,0,"No higher highs or lower lows: sideways.")
C.dBr=w(["Trade a lot","Wait","Borrow money"],x.s)
C.hSQ=new D.cF("In a sideways market the best move is often to...",C.dBr,1,"Patience avoids false signals.")
C.dlI=w(["Up","Down","Flat"],x.s)
C.hST=new D.cF("When sellers are in control, the trend is...",C.dlI,1,"Sellers push prices down.")
C.dlF=w(["Stairs going up","Stairs going down","A flat road"],x.s)
C.hS6=new D.cF("Which picture fits an uptrend?",C.dlF,0,"Each step a bit higher.")
C.dBd=w(["Turns down","Turns up","Is sideways"],x.s)
C.hTa=new D.cF("The agent only buys when the trend...",C.dBd,1,"It buys the start of up moves.")
C.dzC=w(["Getting lower","Getting higher","Gone"],x.s)
C.hSn=new D.cF("A trend changes from bearish to bullish. Lows are now...",C.dzC,1,"Higher lows are the first sign of an uptrend.")
C.dqT=w(["Strong uptrend","Strong downtrend","Sideways"],x.s)
C.hTj=new D.cF("Most trading signals fail in which market?",C.dqT,2,"Without direction, signals flip constantly.")
C.d8I=w([C.b3t,C.b3m,C.hTp,C.hTS,C.hTQ,C.hT5,C.hTy,C.hSB,C.hSQ,C.hST,C.hS6,C.hTa,C.hSn,C.hTj],x.r)
C.dgU=w(["The average closing price of recent candles","The highest price ever","A news feed"],x.s)
C.hTF=new D.cF("A moving average is...",C.dgU,0,"It smooths prices into a line.")
C.dGY=w(["To hide small wiggles and show direction","To predict news","To make charts colourful"],x.s)
C.hTH=new D.cF("Why use a moving average?",C.dGY,0,"It filters noise.")
C.ddo=w(["9","21","100"],x.s)
C.hT2=new D.cF("The purple slow line averages how many candles?",C.ddo,1,"21 candles, about 1 hour 45 minutes.")
C.dre=w(["The fast (pink) line","The slow (purple) line","Both the same"],x.s)
C.hT4=new D.cF("Which line reacts faster to new moves?",C.dre,0,"Fewer candles means quicker reaction.")
C.dHd=w(["Trend is up","Trend is down","Buy now"],x.s)
C.hSR=new D.cF("Fast line below slow line means...",C.dHd,1,"Recent prices are lower than older ones.")
C.d9k=w(["Buyers are strong","Sellers are strong","Nothing"],x.s)
C.hS9=new D.cF("The price is above both lines. That shows...",C.d9k,0,"Price above its averages = strength.")
C.d5e=w(["The bigger direction","Only the last candle","Tomorrow price"],x.s)
C.hTo=new D.cF("The slow line shows...",C.d5e,0,"It changes slowly and shows the wider trend.")
C.d1y=w(["15 minutes","1 hour 45 minutes","1 week"],x.s)
C.hSr=new D.cF("The slow line covers about...",C.d1y,1,"21 x 5 minutes = 105 minutes.")
C.cok=w(["Past prices","Future prices","Opinions"],x.s)
C.hTu=new D.cF("Moving averages are based on...",C.cok,0,"They average prices that already happened.")
C.d5D=w(["Lag behind the price","Lead the price","Never move"],x.s)
C.hTI=new D.cF("Because they use past prices, moving averages...",C.d5D,0,"Averages are always a little late.")
C.dq8=w(["A bullish picture","A bearish picture","A closed market"],x.s)
C.hSS=new D.cF("Both lines pointing up and the price above them is...",C.dq8,0,"Everything points up.")
C.dfC=w(["Trending strongly","Sideways","Crashing"],x.s)
C.hTR=new D.cF("When the two lines are tangled together, the market is often...",C.dfC,1,"Tangled lines mean no clear direction.")
C.dAZ=w([C.b3v,C.b3o,C.hTF,C.hTH,C.hT2,C.hT4,C.hSR,C.hS9,C.hTo,C.hSr,C.hTu,C.hTI,C.hSS,C.hTR],x.r)
C.dgS=w(["Crosses below the slow line","Crosses above the slow line","Touches the price"],x.s)
C.hS3=new D.cF("The sell signal is when the fast line...",C.dgS,0,"Crossing down = the up move is over.")
C.dGg=w(["About $100","$5,000","All the money"],x.s)
C.hSe=new D.cF("How much does the agent put into one trade?",C.dGg,0,"Every pretend trade is $100 of the stock (weekdays) or coin (weekends) itself.")
C.dAS=w(["A fresh signal","An old signal","Not a signal at all ever"],x.s)
C.hTz=new D.cF("A cross that happened an hour ago is...",C.dAS,1,"Fresh means since the last check.")
C.csN=w(["Sideways markets","Strong trends","Closed markets"],x.s)
C.hTD=new D.cF("Crossovers give many false signals in...",C.csN,0,"Lines cross back and forth with no direction.")
C.dph=w(["The stop loss","Buying more","Ignoring it"],x.s)
C.hSq=new D.cF("What protects you when a signal is wrong?",C.dph,0,"The stop keeps the loss small.")
C.dj9=w(["Just changed direction","Ended forever","Doubled"],x.s)
C.hTO=new D.cF("The crossover tells you the short-term trend has...",C.dj9,0,"A cross marks a turn.")
C.d2x=w(["1 second","5 minutes","1 day"],x.s)
C.hTG=new D.cF("The agent checks every market on the list every...",C.d2x,1,"The automatic check runs every 5 minutes and looks at all of the day markets at once.")
C.d6H=w(["Buying higher, with less room to rise","A guaranteed win","A cheaper price"],x.s)
C.hSk=new D.cF("Buying late in a move usually means...",C.d6H,0,"Most of the move is already gone.")
C.dul=w(["Trust it more","Trust it less","Bet bigger"],x.s)
C.hTx=new D.cF("If a signal fails often on one market, you should...",C.dul,1,"Check how often it worked before trusting it.")
C.d6B=w(["Buys more","Sells","Waits a week"],x.s)
C.hTf=new D.cF("When the agent holds a trade and the fast line crosses down, it...",C.d6B,1,"The sell signal closes the trade.")
C.cNV=w(["Yes","No","Only on Fridays"],x.s)
C.hSV=new D.cF("Does a buy signal guarantee the price will rise?",C.cNV,1,"Signals improve the odds; they never guarantee.")
C.dab=w(["Holds no other position","Already holds three","Has lost $100"],x.s)
C.hTX=new D.cF("The agent buys on a signal only if it...",C.dab,0,"One position at a time.")
C.de7=w([C.b3n,C.b3f,C.hS3,C.hSe,C.hTz,C.hTD,C.hSq,C.hTO,C.hTG,C.hSk,C.hTx,C.hTf,C.hSV,C.hTX],x.r)
C.dlu=w(["0 to 100","1 to 10","-50 to 50"],x.s)
C.hTB=new D.cF("RSI is a number from...",C.dlu,0,"It always sits between 0 and 100.")
C.dwo=w(["Rises were bigger than falls","Falls were bigger than rises","Nothing moved"],x.s)
C.hSO=new D.cF("RSI above 50 means recent...",C.dwo,0,"Above 50 = buyers stronger lately.")
C.dh5=w(["Overbought","Oversold","Balanced"],x.s)
C.hSX=new D.cF("RSI below 30 is called...",C.dh5,1,"It fell fast and is stretched downward.")
C.du0=w(["Momentum: strength of recent moves","The company profit","Trading volume"],x.s)
C.hT7=new D.cF("RSI measures...",C.du0,0,"It compares gains with losses.")
C.d6o=w(["Healthy","Very stretched","Impossible"],x.s)
C.hSz=new D.cF("A buy signal with RSI 60 is...",C.d6o,0,"Between 50 and 70 is healthy strength.")
C.de2=w(["Just starting","Tired and stretched","Guaranteed"],x.s)
C.hSb=new D.cF("A buy signal with RSI 80 means the move may be...",C.de2,1,"Very high RSI often comes before a pause.")
C.dl8=w(["As a second opinion","As the only reason to trade","Never"],x.s)
C.hSG=new D.cF("Best way to use RSI?",C.dl8,0,"Combine it with the trend signal.")
C.dvD=w(["For a while","Never","Only one candle"],x.s)
C.hT6=new D.cF("In a strong uptrend, RSI can stay above 70...",C.dvD,0,"Strong trends can stay overbought.")
C.dqj=w(["Balanced buyers and sellers","Market closed","Crash coming"],x.s)
C.hT8=new D.cF("RSI of 50 means...",C.dqj,0,"50 is the middle.")
C.d9i=w(["Rose very fast","Fell very fast","Did not move"],x.s)
C.hTJ=new D.cF("Overbought means prices...",C.d9i,0,"Overbought = rose fast.")
C.cQ5=w(["Stay oversold and keep falling","Only go up","Freeze the market"],x.s)
C.hSJ=new D.cF("Oversold in a strong downtrend can...",C.cQ5,0,"Oversold is not a reason to buy on its own.")
C.cMb=w(["Sellers a little stronger","Extreme buying","Extreme selling"],x.s)
C.hSZ=new D.cF("RSI 45 suggests...",C.cMb,0,"Just below 50: sellers slightly ahead.")
C.dl6=w([C.b3e,C.b3r,C.hTB,C.hSO,C.hSX,C.hT7,C.hSz,C.hSb,C.hSG,C.hT6,C.hT8,C.hTJ,C.hSJ,C.hSZ],x.r)
C.dIi=w(["When the trade is up $50","When the trade is up $5","Never"],x.s)
C.hTK=new D.cF("The agent take profit is...",C.dIi,0,"It sells when the trade is up $50.")
C.dAv=w(["When the trade is down $50","When the trade is down $500","It has none"],x.s)
C.hTq=new D.cF("The agent stop loss is...",C.dAv,0,"It sells when the trade is down $50.")
C.doZ=w(["A planned exit that limits a loss","A way to stop the app","A bonus"],x.s)
C.hSp=new D.cF("A stop loss is...",C.doZ,0,"It sells automatically when the loss reaches a set size.")
C.deA=w(["Before entering the trade","After it goes wrong","Never"],x.s)
C.hSy=new D.cF("When should you decide your exits?",C.deA,0,"Plan exits first, while calm.")
C.dkU=w(["So no single mistake hurts much","It is the maximum allowed","To lose faster"],x.s)
C.hSH=new D.cF("Why does the agent use only about $100 per trade?",C.dkU,0,"Small size protects the account.")
C.dHX=w(["1 to 2 percent","50 percent","100 percent"],x.s)
C.hTk=new D.cF("Pros rarely risk more than about ... of their money on one trade.",C.dHX,0,"Small risk per trade keeps them in the game.")
C.diK=w(["$0","+$100","-$100"],x.s)
C.hTw=new D.cF("Win $50 twice and lose $50 twice. Your total is...",C.diK,0,"50 + 50 - 50 - 50 = 0.")
C.dsY=w(["Profitable","Break even","A loss"],x.s)
C.hTr=new D.cF("Winning half the time with 2 to 1 reward to risk is...",C.dsY,0,"Each win is twice each loss.")
C.deI=w(["Turns small losses into big ones","Guarantees a win","Has no effect"],x.s)
C.hSN=new D.cF('Moving your stop lower to "give it room" usually...',C.deI,0,"Hope is not a plan.")
C.d7r=w(["1 to 1","1 to 2","10 to 1"],x.s)
C.hSU=new D.cF("Reward to risk of the agent is...",C.d7r,0,"$50 target vs $50 stop: the same size.")
C.csg=w(["Can end an account","Are rare","Do not matter"],x.s)
C.hTV=new D.cF("Big losses are dangerous because they...",C.csg,0,"A 50% loss needs a 100% gain to recover.")
C.cVw=w(["Selling when the planned gain is reached","Buying more","Holding forever"],x.s)
C.hSF=new D.cF("Take profit means...",C.cVw,0,"It locks in the win.")
C.dcU=w([C.b3k,C.b3i,C.hTK,C.hTq,C.hSp,C.hSy,C.hSH,C.hTk,C.hTw,C.hTr,C.hSN,C.hSU,C.hTV,C.hSF],x.r)
C.dwu=w(["Trading more to win losses back","Taking a break","Following rules"],x.s)
C.hT3=new D.cF("Revenge trading means...",C.dwu,0,"It usually makes losses bigger.")
C.d78=w(["$100 total losses","$25 total losses","Never"],x.s)
C.hSA=new D.cF("The total brake pauses the agent at...",C.d78,0,"$100 total demo losses.")
C.d6I=w(["An admin, after a review","It turns itself on","Nobody ever"],x.s)
C.hT_=new D.cF("Who turns the agent back on after the $100 brake?",C.d6I,0,"A human review comes first.")
C.ceO=w(["$50","$1","$500"],x.s)
C.hSi=new D.cF("The daily stop is...",C.ceO,0,"If the day loses $50, no more buys.")
C.d1E=w(["Stop and reset","Trade bigger","Ignore your limits"],x.s)
C.hTC=new D.cF("Bad days happen. The best response is...",C.d1E,0,"Walking away protects your money.")
C.dnG=w(["Before the day starts","After you lose","Only on weekends"],x.s)
C.hSc=new D.cF("Limits should be set...",C.dnG,0,"Decide limits while calm.")
C.dCP=w(["Reviewing what happened","Forgetting it","Blaming the market"],x.s)
C.hSP=new D.cF("The most important part of learning after a bad run is...",C.dCP,0,"Reviews turn losses into lessons.")
C.cQw=w(["Yes, exits still work","No, it freezes","It buys more instead"],x.s)
C.hTh=new D.cF("After the daily stop, can the agent still sell an open trade?",C.cQw,0,"The stop blocks new buys, not exits.")
C.dHt=w(["Protect the account from bad days","Make more trades","Win every day"],x.s)
C.hTb=new D.cF("Brakes are there to...",C.dHt,0,"They cap the damage.")
C.d8L=w(["Stop trading and rethink","Raise the limits","Borrow money"],x.s)
C.hSL=new D.cF("If you keep breaking your own limits, you should...",C.d8L,0,"Rules only work when kept.")
C.dzJ=w(["The next day","Never","Every minute"],x.s)
C.hTi=new D.cF("The daily stop resets...",C.dzJ,0,"A new Eastern Time day starts fresh.")
C.dmG=w(["Can lose everything on a bad day","Always wins","Pays no fees"],x.s)
C.hSl=new D.cF("A trader with no loss limits...",C.dmG,0,"Limits are the safety net.")
C.dG7=w(["Pause","Trade faster","Bet bigger"],x.s)
C.hS8=new D.cF("Feeling angry after a loss is a sign to...",C.dG7,0,"Emotions lead to bad trades.")
C.d94=w([C.b3j,C.hT3,C.hSA,C.hT_,C.hSi,C.hTC,C.hSc,C.hSP,C.hTh,C.hTb,C.hSL,C.hTi,C.hSl,C.hS8],x.r)
C.daY=w(["9:30 AM to 4:00 PM Eastern","24 hours","8 PM to midnight"],x.s)
C.hSt=new D.cF("US stock market hours are...",C.daY,0,"On market days only.")
C.hSm=new D.cF("Is the US stock market open on Saturday?",Z.a77,1,"Weekends are closed.")
C.dFH=w(["A jump between the close and the next open","A break in the chart software","A holiday"],x.s)
C.hT9=new D.cF("An overnight gap is...",C.dFH,0,"News while closed moves the next open.")
C.d1D=w(["Faster and harder","Slower","Exactly the same"],x.s)
C.hSM=new D.cF("Crypto compared with SPY usually moves...",C.d1D,0,"Crypto is more jumpy.")
C.duL=w(["The 500 biggest US companies","One company","Bitcoin"],x.s)
C.hTT=new D.cF("SPY holds...",C.duL,0,"It is a fund of 500 companies.")
C.dJ1=w(["They spread over many companies","They are closed","They are crypto"],x.s)
C.hS2=new D.cF("Why do funds like SPY move more calmly?",C.dJ1,0,"One bad company matters less.")
C.dAV=w(["3:55 PM Eastern","Midnight","Noon"],x.s)
C.hTM=new D.cF("The agent sells stocks by...",C.dAV,0,"Before the 4:00 PM close.")
C.d8M=w(["Sunday 5 PM to Friday 5 PM Eastern","Only 9:30 to 4","Only weekends"],x.s)
C.hSu=new D.cF("Forex (currency pairs) trades...",C.d8M,0,"Real forex is closed on weekends.")
C.de3=w(["The broker itself","The real world market","The government"],x.s)
C.hSE=new D.cF("OTC prices at a broker on weekends come from...",C.de3,0,"They are made by the broker and can differ.")
C.dwK=w(["Do not trade","Trade double","Trade at night"],x.s)
C.hT0=new D.cF("On a US market holiday, stocks...",C.dwK,0,"Holidays are closed days.")
C.cf6=w(["More often","Never","Less often"],x.s)
C.hTP=new D.cF("Because crypto moves fast, stop losses are hit...",C.cf6,0,"Bigger swings reach stops sooner.")
C.dAU=w(["Its own news","Weekend rules","The colour of candles"],x.s)
C.hTA=new D.cF("One company like Tesla can jump a lot because of...",C.dAU,0,"Single stocks react to company news.")
C.dr5=w([C.b3q,C.b3g,C.hSt,C.hSm,C.hT9,C.hSM,C.hTT,C.hS2,C.hTM,C.hSu,C.hSE,C.hT0,C.hTP,C.hTA],x.r)
C.dfM=w(["Why you entered, your exits and what happened","Only wins","Nothing"],x.s)
C.hSw=new D.cF("A trading journal records...",C.dfM,0,"It shows what really works.")
C.hSW=new D.cF("One winning trade proves a method works.",P.Th,1,"One trade can be pure luck.")
C.dk3=w(["2 to 4 weeks","1 hour","1 day"],x.s)
C.hSd=new D.cF("The plan is to paper trade for...",C.dk3,0,"Enough time for many trades.")
C.dok=w(["A bug to fix before real money","Fine","A bonus"],x.s)
C.hSo=new D.cF("If the agent ever breaks a rule, that is...",C.dok,0,"Rules must be followed exactly.")
C.dte=w(["A long positive paper test and a full review","One good day","A tip from a friend"],x.s)
C.hTU=new D.cF("Before using real money you need...",C.dte,0,"Evidence first.")
C.dat=w(["Worse than a coin flip","Excellent","Guaranteed"],x.s)
C.hTs=new D.cF("Signals that worked under 50% of the time are...",C.dat,0,"Do not trust them.")
C.d5O=w(["Never a good idea for beginners","Smart","Required"],x.s)
C.hTm=new D.cF("Borrowing money to trade is...",C.d5O,0,"Borrowed losses still have to be paid.")
C.dcp=w(["The agent journal","An advert","A game"],x.s)
C.hSD=new D.cF("The Pretend trades list on the main screen is...",C.dcp,0,"Every buy and sell is recorded.")
C.dpA=w(["No fear and no greed","Lots of emotion","Random choices"],x.s)
C.hSK=new D.cF("The point of an agent is to follow rules with...",C.dpA,0,"Discipline is its strength.")
C.cU3=w(["+$100","-$100","$0"],x.s)
C.hTW=new D.cF("After 10 trades you have 6 wins at +$50 and 4 losses at -$50. Total?",C.cU3,0,"6 x 50 = 300; 4 x 50 = 200; 300 - 200 = +100.")
C.cYs=w(["Review the trades calmly","Quit forever without looking","Double the size"],x.s)
C.hSv=new D.cF("A losing week means you should...",C.cYs,0,"Reviews find what to fix.")
C.dEo=w(["Patient and disciplined","Lucky","Fast clickers"],x.s)
C.hSC=new D.cF("The best traders are mostly...",C.dEo,0,"Patience and rules win over time.")
C.d9f=w([C.b3d,C.b3l,C.hSw,C.hSW,C.hSd,C.hSo,C.hTU,C.hTs,C.hTm,C.hSD,C.hSK,C.hTW,C.hSv,C.hSC],x.r)
C.dLm=new A.bl(C.eum,[C.deh,C.dyc,C.d8I,C.dAZ,C.de7,C.dl6,C.dcU,C.d94,C.dr5,C.d9f],A.ar("bl<m,ai<cF>>"))
C.ewn={EUR:0,USD:1,GBP:2,JPY:3,CAD:4,AUD:5,NZD:6,CHF:7,TRY:8,NOK:9,THB:10}
C.f9Z=new A.y("\u20ac",B.dW)
C.faR=new A.y("$",B.es)
C.eQv=new A.y("\xa3",B.dl)
C.eZV=new A.y("\xa5",B.bE)
C.eXQ=new A.y("C$",B.hI)
C.f_k=new A.y("A$",B.cY)
C.ePO=new A.y("NZ",B.aw)
C.f36=new A.y("Fr",B.et)
C.f88=new A.y("TL",B.fK)
C.f79=new A.y("kr",B.fW)
C.eUl=new A.y("TH",B.wL)
C.a8t=new A.bl(C.ewn,[C.f9Z,C.faR,C.eQv,C.eZV,C.eXQ,C.f_k,C.ePO,C.f36,C.f88,C.f79,C.eUl],A.ar("bl<m,+(m,u)>"))
C.c0r=new A.ae(B.ni,5,B.b_,null,null,null)
C.eCW=new A.D(B.hy,C.c0r,null)
C.f4L=new A.y(F.qH,"HOLDING")
C.f7j=new A.y(C.cJ,"PASSES")
C.f7r=new A.y(C.d9,"FALLING")
C.f7z=new A.y(C.d9,"BENCHED")
C.fch=new A.b0(C.cJ,B.mx,"up")
C.fcC=new A.b0(1,"Live signals",C.asl)
C.bWi=new A.a_(983635,"MaterialIcons",!0)
C.fcK=new A.b0(E.i0,C.bWi,"Moving sideways")
C.fcS=new A.b0(C.d9,B.a4O,"down")
C.fdk=new A.b0(2,"Ask tutor",B.xl)
C.fdC=new A.b0(B.b_,B.o5,"Waiting for data")
C.fed=new A.b0(C.cJ,B.mx,"Trending up")
C.fek=new A.b0(C.d9,B.a4O,"Trending down")
C.feo=new A.b0(0,"Lessons",B.o6)
C.ffr=new A.b0(B.bP,B.o5,"waiting")
C.fjh=new A.b7([B.A1,C.cJ,"Signal alerts are ON: only STRONG BUY or SELL signals (all 5 confirmations), built for a 15\u201330 minute expiry, while NGMY is open or in the background.",null])
C.fjY=new A.b7([B.as8,E.i0,"Signal alerts are unlocked. Allow notifications so the app can tell you when a STRONG signal is given.","Allow"])
C.bZE=new A.ae(B.ni,8,C.cJ,null,null,null)
C.fLe=new A.G(!0,C.cJ,null,null,null,null,11.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.haV=new A.C("LIVE",null,C.fLe,null,null,null,null,null,null,null,null,null)
C.dvC=w([C.bZE,B.bb,C.haV],x.p)
C.foi=new A.c2(B.aK,B.e,B.O,B.l,null,B.p,null,0,C.dvC,null)
C.c_5=new A.ae(B.rk,14,B.c,null,null,null)
C.hhP=new A.C("Learn",null,B.nv,null,null,null,null,null,null,null,null,null)
C.dae=w([C.c_5,B.da,C.hhP],x.p)
C.fol=new A.c2(B.aK,B.e,B.O,B.l,null,B.p,null,0,C.dae,null)
C.fD8=new A.G(!0,E.i0,null,null,null,null,12,B.N,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.fE3=new A.G(!0,B.c,null,null,null,null,11.5,null,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.fED=new A.G(!0,B.c,null,null,null,null,34,B.E,null,-0.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.fFb=new A.G(!0,B.c,null,null,null,null,36,B.E,null,-0.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.fFp=new A.G(!0,B.c,null,null,null,null,14,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,G.Av,null,null)
C.fGd=new A.G(!0,B.ab,null,null,null,null,10.5,B.u,null,0.9,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.fHn=new A.G(!0,F.qH,null,null,null,null,11,B.N,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.fHJ=new A.G(!0,B.ab,null,null,null,null,11.5,B.E,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.fJI=new A.G(!0,C.cJ,null,null,null,null,11.5,B.N,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.fJQ=new A.G(!0,C.d9,null,null,null,null,12,B.E,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.fKK=new A.G(!0,C.cJ,null,null,null,null,12,null,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.fL1=new A.G(!0,C.d9,null,null,null,null,11.5,null,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.fLa=new A.G(!0,C.d9,null,null,null,null,11.5,B.N,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.fLT=new A.G(!0,E.i0,null,null,null,null,11.5,B.N,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.fPe=new A.G(!0,C.cJ,null,null,null,null,12.5,B.N,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.fQe=new A.G(!0,B.c,null,null,null,null,22,B.u,null,0.8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.fQS=new A.G(!0,C.d9,null,null,null,null,12,null,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.aZ1=new A.G(!0,C.d9,null,null,null,null,11.5,B.E,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.fSb=new A.G(!0,B.ab,null,null,null,null,9.5,B.N,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.fVm=new A.C("Ask the tutor",null,B.cd,null,null,null,null,null,null,null,null,null)
C.aXB=new A.G(!0,C.d9,null,null,null,null,12.5,B.N,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.fVw=new A.C("Not quite. Try again.",null,C.aXB,null,null,null,null,null,null,null,null,null)
C.fWu=new A.C("Win rate ($100 trades)",null,B.LQ,null,null,null,null,null,null,null,null,null)
C.fWw=new A.C("All 10 lessons done!",null,null,null,null,null,null,null,null,null,null,null)
C.fWD=new A.C("10 short lessons. Each one shows you the idea live on the real markets the agent is watching.",null,U.FF,null,null,null,null,null,null,null,null,null)
C.fY7=new A.C("Wrong. You have one more try.",null,C.aXB,null,null,null,null,null,null,null,null,null)
C.fZD=new A.C("Turn the agent back on?",null,null,null,null,null,null,null,null,null,null,null)
C.fSw=new A.G(!0,B.c,null,null,null,null,9.5,B.u,null,0.8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.h1g=new A.C("ALL SYSTEMS",null,C.fSw,null,null,null,null,null,null,null,null,null)
C.h2h=new A.C("Built for a 15\u201330 minute expiry. Do NOT use this for 1\u20135 minute trades.",null,C.aZ1,null,null,null,null,null,null,null,null,null)
C.h8l=new A.C("Signal alerts are now unlocked. When a market says ENTER UP or ENTER DOWN, the app will tell you the market, the direction and the duration. Allow notifications to receive them.",null,null,null,null,null,null,null,null,null,null,null)
C.aZy=new A.C("Balance",null,B.WT,null,null,null,null,null,null,null,null,null)
C.hbq=new A.C("Allow notifications",null,null,null,null,null,null,null,null,null,null,null)
C.fND=new A.G(!0,B.aR,null,null,null,null,10.5,null,null,null,null,null,1.25,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.hc7=new A.C("5 of 10\n= break even",null,C.fND,null,B.e0,null,null,null,null,null,null,null)
C.hek=new A.C("Check now",null,B.cd,null,null,null,null,null,null,null,null,null)
C.hf_=new A.C("Learn to trade",null,B.m9,null,null,null,null,null,null,null,null,null)
C.hht=new A.C("Turn back on",null,null,null,null,null,null,null,null,null,null,null)
C.hhT=new A.C("The $100 brake paused the agent. Turning it back on means you have reviewed it. The running demo profit and loss starts again from $0.",null,null,null,null,null,null,null,null,null,null,null)
C.hOf=new D.z3("Nvidia","N",B.Nx)
C.hOh=new D.z3("Ethereum","\u039e",C.aj6)
C.hOk=new D.z3("S&P 500 fund","S&P",B.cf)
C.hOl=new D.z3("Bitcoin","B",F.qH)
C.hOn=new D.z3("Tesla","T",B.bE)
C.hOo=new D.z3("Microsoft","M",B.bp)
C.hOp=new D.z3("Nasdaq 100 fund","Q",B.cF)
C.bo3=new A.u(1,0.6,0.27058823529411763,1,B.q)
C.hOr=new D.z3("Solana","S",C.bo3)
C.hOt=new D.z3("Apple","A",B.cU)
C.hOw=new D.z3("Amazon","a",B.as)})();(function staticFields(){$.DB=A.a([],A.ar("N<a_G>"))
$.ahd=!1
$.hlo=""
$.aM2=0
$.foH=0})()};
(a=>{a["hC6/8ST2zEopm9DxFyP3AR4NUHQ="]=a.current})($__dart_deferred_initializers__);