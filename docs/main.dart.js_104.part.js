((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,C={
i1S(){return new C.P1(null)},
aQL(d){var x=y.N,w=y.z
return y.f.b(d)?A.a1(d,x,w):A.S(x,w)},
bD_(d){var x
if(typeof d=="number")x=d
else{x=A.cV(A.w(d==null?"":d))
if(x==null)x=0}return x},
DE(d){var x=C.bD_(d),w=A.nO(B.h.ad(Math.abs(x),2),A.af("\\B(?=(\\d{3})+(?!\\d))",!0,!1,!1,!1),new C.fGq(),null)
return(x<0?"-":"")+"$"+w},
iat(d){var x,w,v=A.bj(A.w(d==null?"":d))
if(v==null)return"not yet"
x=B.o.aq(new A.V(Date.now(),0,!1).bz(v).a,6e7)
if(x<1)return"just now"
if(x<60)return""+x+" min ago"
w=B.o.aq(x,60)
return w<48?""+w+" h ago":""+B.o.aq(w,24)+" days ago"},
P1:function P1(d){this.a=d},
aGW:function aGW(d){var _=this
_.d=null
_.e=d
_.f=!0
_.r=!1
_.w=!0
_.c=_.a=_.y=_.x=null},
eEA:function eEA(d){this.a=d},
eEs:function eEs(d,e){this.a=d
this.b=e},
eEq:function eEq(){},
eEr:function eEr(d,e,f){this.a=d
this.b=e
this.c=f},
eEv:function eEv(){},
eEt:function eEt(d){this.a=d},
eEu:function eEu(d){this.a=d},
eEw:function eEw(d){this.a=d},
eEx:function eEx(d){this.a=d},
eEo:function eEo(d){this.a=d},
eEp:function eEp(d){this.a=d},
eEy:function eEy(d){this.a=d},
eEz:function eEz(d){this.a=d},
eEl:function eEl(d,e,f){this.a=d
this.b=e
this.c=f},
eEm:function eEm(){},
eEn:function eEn(d){this.a=d},
f0h:function f0h(d){this.a=d},
fGq:function fGq(){}},D
J=c[1]
A=c[0]
B=c[2]
C=a.updateHolder(c[12],C)
D=c[92]
C.P1.prototype={
T(){return new C.aGW(A.a([],y.t))}}
C.aGW.prototype={
Z(){var x=this
x.a3()
x.F4(!0)
x.y=A.df(B.pt,new C.eEA(x))},
t(){var x=this.y
if(x!=null)x.a1(0)
this.a2()},
F4(d){return this.cv1(d)},
aAi(){return this.F4(!1)},
cv1(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$F4=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(A.hr(A.J(["action","paStatus","live",d],y.N,y.z),!1,!1,!1,!1,B.Oq),$async$F4)
case 3:t=f
if(u.c==null){x=1
break}u.m(new C.eEs(u,t))
x=u.d!=null?4:5
break
case 4:x=6
return A.b(u.c6o(),$async$F4)
case 6:case 5:case 1:return A.h(v,w)}})
return A.i($async$F4,w)},
ZZ(d){return this.c6p(d)},
c6o(){return this.ZZ(!1)},
c6p(d){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$ZZ=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(A.hr(A.J(["action","paLog","limit",100,"beforeId",d&&u.e.length!==0?J.t(B.d.gal(u.e),"id"):0],y.N,y.z),!1,!1,!1,!1,B.hR),$async$ZZ)
case 3:r=f
if(u.c==null||r==null||!J.z(J.t(r,"ok"),!0)){x=1
break}t=y.g.a(J.t(r,"rows"))
if(t==null)t=B.co
t=J.d7(t,y.f)
t=A.cF(t,new C.eEq(),t.$ti.k("M.E"),y.P)
s=A.B(t,A.a4(t).k("M.E"))
u.m(new C.eEr(u,d,s))
case 1:return A.h(v,w)}})
return A.i($async$ZZ,w)},
SF(d){return this.czR(d)},
czR(d){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$SF=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=u.d
q=C.aQL(r==null?null:J.t(r,"state"))
x=d&&J.z(q.h(0,"brakePaused"),!0)?3:4
break
case 3:r=u.c
r.toString
x=5
return A.b(A.ce(null,null,!0,null,new C.eEv(),r,null,!0,!0,y.y),$async$SF)
case 5:if(f!==!0){x=1
break}case 4:u.m(new C.eEw(u))
x=6
return A.b(A.hr(A.J(["action","paSet","enabled",d],y.N,y.z),!1,!1,!1,!1,B.hR),$async$SF)
case 6:t=f
if(u.c==null){x=1
break}u.m(new C.eEx(u))
r=t==null
if(J.z(r?null:J.t(t,"ok"),!0))s=d?"Agent started.":"Agent stopped."
else{s=r?null:J.t(t,"error")
s=J.k(s==null?"Could not change it.":s)}u.b2O(s,J.z(r?null:J.t(t,"ok"),!0)?B.bf:B.ay)
x=7
return A.b(u.aAi(),$async$SF)
case 7:case 1:return A.h(v,w)}})
return A.i($async$SF,w)},
XM(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$XM=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u.m(new C.eEo(u))
x=3
return A.b(A.hr(A.J(["action","paCheck"],y.N,y.z),!1,!1,!1,!1,B.pt),$async$XM)
case 3:t=e
if(u.c==null){x=1
break}u.m(new C.eEp(u))
s=t==null
if(!J.z(s?null:J.t(t,"ok"),!0)){s=s?null:J.t(t,"error")
u.b2O(J.k(s==null?"The check did not finish.":s),B.ay)}x=4
return A.b(u.aAi(),$async$XM)
case 4:case 1:return A.h(v,w)}})
return A.i($async$XM,w)},
b2O(d,e){var x=null
this.c.J(y.q).f.U(A.b2(x,x,x,e,x,B.t,x,A.d(d,x,x,x,x,x,x,x,x,x,x),x,B.Y,x,x,x,x,x,x,x,x,x,x))},
B(d){var x=this,w=null,v=A.O(d).ax.a===B.dl,u=new C.f0h(v),t=v?B.c:B.lL,s=v?B.c:B.lL,r=v?B.a_:B.c,q=y.p
r=A.eM(A.a([A.aH(w,w,w,w,B.tw,w,w,w,x.r?w:new C.eEy(x),w,w,w,w,"Refresh from Alpaca",w)],q),w,w,!0,!0,s,w,1,w,w,0,!1,w,!1,r,w,w,w,!0,w,w,w,w,w,D.fRS,w,w,w,1,w,!0)
if(x.f)s=B.lE
else{if(x.d==null){s=x.x
s=A.a([x.cft(u,s==null?"Nothing to show yet.":s)],q)}else s=x.bHJ(0,u)
s=A.YK(A.cu(s,w,w,B.a1r,w,w,B.ah,!1),w,new C.eEz(x))}return A.c5(r,t,s,w,!1,!1,w,w)},
bHJ(a7,a8){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=this,a2=null,a3="liveError",a4="totalPnl",a5="start_equity",a6=a1.d
a6.toString
x=J.a8(a6)
w=C.aQL(x.h(a6,"state"))
v=C.aQL(x.h(a6,"config"))
u=C.aQL(w.h(0,"snapshot"))
t=C.aQL(x.h(a6,"today"))
s=J.z(w.h(0,"enabled"),!0)
r=J.z(w.h(0,"brakePaused"),!0)
q=y.g
p=q.a(u.h(0,"positions"))
if(p==null)p=B.co
o=y.f
p=J.d7(p,o)
n=A.B(p,p.$ti.k("M.E"))
m=o.b(w.h(0,"shadow"))?C.aQL(w.h(0,"shadow")):a2
p=u.h(0,"asset")
l=J.k(p==null?"":p)
p=y.p
o=A.a([A.c_(B.bI,A.a([a1.ago("VERSION 1 \xb7 READ-ONLY",B.be),a1.ago("PAPER ONLY",B.bC),a1.ago("NO ORDERS",B.at)],p),B.br,a2,6,6),B.T],p)
k=v.h(0,"problem")
if(J.k(k==null?"":k).length!==0)o.push(a1.agp(a8,J.k(v.h(0,"problem")),B.at))
k=x.h(a6,a3)
if(J.k(k==null?"":k).length!==0)o.push(a1.agp(a8,J.k(x.h(a6,a3)),B.ay))
if(r){k=w.h(0,"brakeReason")
o.push(a1.agp(a8,"Paused by the $25 brake. "+A.w(k==null?"":k)+". Review the log, then press Start to turn it back on.",B.ay))}if(r)k=B.ay
else if(s)k=B.bf
else k=a8.a?B.an:D.rI
k=A.X(B.D3,k,a2,a2,a2,12)
if(r)j="Paused (brake)"
else j=s?"Running":"Stopped"
i=a8.a
j=A.d(j,a2,a2,a2,a2,a2,a2,A.l(a2,a2,i?B.a_:B.c,a2,a2,a2,a2,a2,a2,a2,a2,16,a2,a2,B.H,a2,a2,!0,a2,a2,a2,a2,a2,a2,a2,a2),a2,a2,a2)
h=x.h(a6,"nowEt")
h=A.w(h==null?"":h)
k=A.A(A.a([k,B.ae,j,B.b4,A.d("Now: "+h,a2,a2,a2,a2,a2,a2,A.l(a2,a2,i?B.an:D.rI,a2,a2,a2,a2,a2,a2,a2,a2,11,a2,a2,a2,a2,a2,!0,a2,a2,a2,a2,a2,a2,a2,a2),a2,a2,a2)],p),B.l,a2,B.e,B.i,0,a2,a2)
j=C.iat(w.h(0,"lastTickAt"))
j=A.d("Last check: "+j+" \xb7 checks every 15 minutes on the server",a2,a2,a2,a2,a2,a2,A.l(a2,a2,i?B.an:D.rI,a2,a2,a2,a2,a2,a2,a2,a2,12,a2,a2,a2,a2,a2,!0,a2,a2,a2,a2,a2,a2,a2,a2),a2,a2,a2)
h=A.bn(s&&!r?B.ay:B.bf,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2)
g=a1.r
f=g?a2:new C.eEl(a1,s,r)
e=A.X(s&&!r?B.x6:B.h3,a2,a2,a2,a2,a2)
h=A.E(A.da(e,a2,A.d(s&&!r?"Stop":"Start",a2,a2,a2,a2,a2,a2,a2,a2,a2,a2),f,h),1)
h=A.A(A.a([h,B.as,A.E(A.eo(D.c18,a2,D.h5T,g?a2:a1.gbKX(),a2),1)],p),B.l,a2,B.e,B.i,0,a2,a2)
g=J.z(v.h(0,"ordersSwitchOn"),!0)?"on":"off"
o.push(a1.R5(a8,A.a([k,B.am,j,B.af,h,B.P,A.d("Order switch (ALPACA_ORDERS_ENABLED): "+g+". Version 1 has no order code, so no order can be placed either way.",a2,a2,a2,a2,a2,a2,A.l(a2,a2,i?B.an:D.rI,a2,a2,a2,a2,a2,a2,a2,a2,11.5,a2,a2,a2,a2,a2,!0,a2,a2,a2,a2,a2,a2,a2,a2),a2,a2,a2)],p),"Agent"))
k=A.a([],p)
if(u.a===0)k.push(A.d("No reading yet. Press refresh once the keys are set.",a2,a2,a2,a2,a2,a2,A.l(a2,a2,i?B.an:D.rI,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,!0,a2,a2,a2,a2,a2,a2,a2,a2),a2,a2,a2))
else{j=a1.b2M(a8,"Paper balance",C.DE(u.h(0,"equity")),!0)
h=a1.JT(a8,"Buying power",C.DE(u.h(0,"buyingPower")))
g=a1.JT(a8,"Cash",C.DE(u.h(0,"cash")))
f=u.h(0,"etTime")
B.d.u(k,A.a([j,h,g,a1.JT(a8,"Read at",J.k(f==null?"":f))],p))}o.push(a1.R5(a8,k,"Paper account"))
k=l.length===0?"Price":l+" price"
k=a1.b2M(a8,k,u.h(0,"price")==null?"\u2014":C.DE(u.h(0,"price")),!0)
j=a1.JT(a8,"Open position at Alpaca",n.length===0?"None":new A.N(n,new C.eEm(),A.T(n).k("N<1,q>")).aM(0,", "))
o.push(a1.R5(a8,A.a([k,j,a1.JT(a8,"Would-be position (log only)",m==null?"None":A.w(m.h(0,"symbol"))+" $50 bought at "+C.DE(m.h(0,"entryPrice")))],p),"Market and position"))
k=a1.b2N(a8,"Running total (for the $25 brake)",C.DE(w.h(0,a4)),a1.b5v(w.h(0,a4),a8))
j=t.h(0,"day_pnl")
j=a1.b2N(a8,"Today (for the $10 daily stop)",C.DE(j==null?0:j),a1.b5v(t.h(0,"day_pnl"),a8))
h=t.h(0,"trades")
h=a1.JT(a8,"Would-be trades today",A.w(h==null?0:h))
o.push(a1.R5(a8,A.a([k,j,h,a1.JT(a8,"Start-of-day balance",t.h(0,a5)==null?"\u2014":C.DE(t.h(0,a5)))],p),"Demo profit and loss"))
k=A.a([],p)
a6=q.a(x.h(a6,"rules"))
a6=J.aT(a6==null?B.co:a6)
while(a6.C()){d=a6.gP(a6)
x=A.d("\u2022  ",a2,a2,a2,a2,a2,a2,new A.F(!0,B.be,a2,a2,a2,a2,a2,B.u,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2),a2,a2,a2)
q=J.k(d)
j=i?B.a_:B.c
k.push(new A.D(B.eI,new A.c7(B.aM,B.e,B.i,B.E,a2,B.p,a2,0,A.a([x,new A.bz(1,B.bd,A.d(q,a2,a2,a2,a2,a2,a2,new A.F(!0,j,a2,a2,a2,a2,13,a2,a2,a2,a2,a2,1.3,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2),a2,a2,a2),a2)],p),a2),a2))}o.push(a1.R5(a8,k,"Trading rules (read-only)"))
a6=A.a([],p)
if(a1.e.length===0)a6.push(A.d("No entries yet. The first one comes with the next 15-minute check.",a2,a2,a2,a2,a2,a2,A.l(a2,a2,i?B.an:D.rI,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,!0,a2,a2,a2,a2,a2,a2,a2,a2),a2,a2,a2))
for(x=a1.e,q=x.length,a0=0;a0<x.length;x.length===q||(0,A.I)(x),++a0)a6.push(a1.c6D(a8,x[a0]))
if(a1.e.length!==0&&a1.w)a6.push(A.as(A.bN(!1,D.h90,a2,a2,!0,a2,a2,a2,new C.eEn(a1),a2,a2),a2,a2,a2))
o.push(a1.R5(a8,a6,"Decision log (newest first)"))
return o},
c6D(d,e){var x,w,v,u,t,s,r=null,q="asset",p="price",o="balance",n="total_pnl",m=J.a8(e),l=m.h(e,"decision"),k=J.k(l==null?"":l)
A:{if("would buy"===k){l=B.bf
break A}if("would sell"===k){l=B.bC
break A}if("hold"===k){l=B.be
break A}if("day start"===k||"day end"===k){l=B.cq
break A}if("start"===k){l=B.bf
break A}if("stop"===k){l=B.ay
break A}if(J.z(m.h(e,"kind"),"error"))l=B.ay
else l=d.a?B.an:D.rI
break A}x=m.h(e,"fast_ma")!=null&&m.h(e,"slow_ma")!=null
w=d.a
v=w?B.aS:D.bqx
u=A.m(12)
t=m.h(e,"et_time")
t=J.k(t==null?"":t)
s=y.p
s=A.a([A.A(A.a([A.E(A.d(t,r,r,r,r,r,r,A.l(r,r,w?B.an:D.rI,r,r,r,r,r,r,r,r,11,r,r,r,r,r,!0,r,r,r,r,r,r,r,r),r,r,r),1),this.ago(k.toUpperCase(),l)],s),B.l,r,B.e,B.i,0,r,r),B.aw],s)
if(m.h(e,q)!=null||m.h(e,p)!=null){t=A.a([],y.s)
if(m.h(e,q)!=null)t.push(J.k(m.h(e,q)))
if(m.h(e,p)!=null)t.push(C.DE(m.h(e,p)))
if(x)t.push("fast "+B.h.ad(C.bD_(m.h(e,"fast_ma")),2)+" / slow "+B.h.ad(C.bD_(m.h(e,"slow_ma")),2))
if(m.h(e,"signal")!=null)t.push("signal: "+A.w(m.h(e,"signal")))
t=B.d.aM(t," \xb7 ")
s.push(A.d(t,r,r,r,r,r,r,A.l(r,r,w?B.a_:B.c,r,r,r,r,r,r,r,r,12.5,r,r,B.O,r,r,!0,r,r,r,r,r,r,r,r),r,r,r))}t=m.h(e,"reason")
t=J.k(t==null?"":t)
s.push(A.d(t,r,r,r,r,r,r,A.l(r,r,w?B.a_:B.c,r,r,r,r,r,r,r,r,12.5,r,r,r,r,1.3,!0,r,r,r,r,r,r,r,r),r,r,r))
if(m.h(e,o)!=null||m.h(e,n)!=null){t=A.a([],y.s)
if(m.h(e,o)!=null)t.push("balance "+C.DE(m.h(e,o)))
if(m.h(e,n)!=null)t.push("running P/L "+C.DE(m.h(e,n)))
m=B.d.aM(t," \xb7 ")
s.push(A.d(m,r,r,r,r,r,r,A.l(r,r,w?B.an:D.rI,r,r,r,r,r,r,r,r,11,r,r,r,r,r,!0,r,r,r,r,r,r,r,r),r,r,r))}return A.o(r,A.x(s,B.E,r,B.e,B.i,0,B.p),B.f,r,r,new A.n(v,r,new A.bF(B.a1,B.a1,B.a1,new A.ax(l,3,B.r,-1)),u,r,r,B.n),r,r,r,B.cx,B.bS,r,r,r)},
R5(d,e,f){var x=null,w=d.a,v=w?B.c:D.bh6,u=A.m(18),t=A.K(w?D.bvc:D.bm1,B.r,1),s=w?A.a([new A.ac(0,B.G,B.be.j(0.12),B.cz,18)],y.V):x,r=A.a([A.d(f.toUpperCase(),x,x,x,x,x,x,A.l(x,x,w?B.aD:B.be,x,x,x,x,x,x,x,x,11.5,x,x,B.u,x,x,!0,x,1,x,x,x,x,x,x),x,x,x),B.T],y.p)
B.d.u(r,e)
return A.o(x,A.x(r,B.E,x,B.e,B.i,0,B.p),B.f,x,x,new A.n(v,x,t,u,s,x,B.n),x,x,x,B.eg,B.bH,x,x,x)},
aAh(d,e,f,g,h){var x,w=null,v=d.a,u=A.E(A.d(e,w,w,w,w,w,w,A.l(w,w,v?B.an:D.rI,w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),1)
if(h==null)v=v?B.a_:B.c
else v=h
x=g?20:13.5
return new A.D(B.eI,A.A(A.a([u,B.ae,new A.dd(1,B.cl,A.d(f,w,w,w,w,w,w,A.l(w,w,v,w,w,w,w,w,w,w,w,x,w,w,g?B.u:B.O,w,w,!0,w,w,w,w,w,w,w,w),B.e1,w,w),w)],y.p),B.E,w,B.e,B.i,0,w,w),w)},
b2M(d,e,f,g){return this.aAh(d,e,f,g,null)},
JT(d,e,f){return this.aAh(d,e,f,!1,null)},
b2N(d,e,f,g){return this.aAh(d,e,f,!1,g)},
agp(d,e,f){var x=null,w=f.j(0.12),v=A.m(14),u=A.K(f.j(0.5),B.r,1)
return A.o(x,A.d(e,x,x,x,x,x,x,A.l(x,x,d.a?B.a_:B.c,x,x,x,x,x,x,x,x,13,x,x,x,x,1.35,!0,x,x,x,x,x,x,x,x),x,x,x),B.f,x,x,new A.n(w,x,u,v,x,x,B.n),x,x,x,B.eg,B.bl,x,x,x)},
cft(d,e){return this.agp(d,e,B.be)},
ago(d,e){var x=null,w=e.j(0.16),v=A.m(999)
return A.o(x,A.d(d,x,x,x,x,x,x,A.l(x,x,e,x,x,x,x,x,x,x,x,10,x,x,B.u,x,x,!0,x,0.6,x,x,x,x,x,x),x,x,x),B.f,x,x,new A.n(w,x,x,v,x,x,B.n),x,x,x,x,B.fE,x,x,x)},
b5v(d,e){var x=C.bD_(d)
if(x>0)return B.bf
if(x<0)return B.ay
return e.a?B.a_:B.c}}
C.f0h.prototype={}
var z=a.updateTypes(["aA<~>()"])
C.eEA.prototype={
$1(d){this.a.aAi()
return null},
$S:12}
C.eEs.prototype={
$0(){var x=this.a,w=x.f=!1,v=this.b,u=v==null
if(!u?J.z(J.t(v,"ok"),!0):w){x.d=v
x.x=null}else{w=u?null:J.t(v,"error")
x.x=J.k(w==null?"Could not reach the server. Pull down to try again.":w)
if(!J.z(u?null:J.t(v,"ownerOnly"),!0))w=J.z(u?null:J.t(v,"setupNeeded"),!0)
else w=!0
if(w)x.d=null}},
$S:0}
C.eEq.prototype={
$1(d){return A.a1(d,y.N,y.z)},
$S:30}
C.eEr.prototype={
$0(){var x,w,v=this,u=v.a
if(v.b){x=A.B(u.e,y.P)
w=v.c
B.d.u(x,w)}else{x=v.c
w=x}u.e=x
u.w=w.length>=100},
$S:0}
C.eEv.prototype={
$1(d){var x=null
return A.ek(A.a([A.bN(!1,B.dp,x,x,!0,x,x,x,new C.eEt(d),x,x),A.bJ(D.hbP,x,new C.eEu(d),x)],y.p),x,x,x,D.fPZ,x,x,x,x,D.fU4,x)},
$S:18}
C.eEt.prototype={
$0(){A.a6(this.a,!1).N(!1)
return null},
$S:0}
C.eEu.prototype={
$0(){A.a6(this.a,!1).N(!0)
return null},
$S:0}
C.eEw.prototype={
$0(){return this.a.r=!0},
$S:0}
C.eEx.prototype={
$0(){return this.a.r=!1},
$S:0}
C.eEo.prototype={
$0(){return this.a.r=!0},
$S:0}
C.eEp.prototype={
$0(){return this.a.r=!1},
$S:0}
C.eEy.prototype={
$0(){return this.a.F4(!0)},
$S:0}
C.eEz.prototype={
$0(){return this.a.F4(!0)},
$S:1}
C.eEl.prototype={
$0(){var x=this.b&&!this.c
return this.a.SF(!x)},
$S:0}
C.eEm.prototype={
$1(d){var x=J.a8(d)
return A.w(x.h(d,"symbol"))+" "+B.h.ad(C.bD_(x.h(d,"qty")),6)+" @ "+C.DE(x.h(d,"avgEntry"))},
$S:2334}
C.eEn.prototype={
$0(){return this.a.ZZ(!0)},
$S:0}
C.fGq.prototype={
$1(d){return","},
$S:62};(function installTearOffs(){var x=a._instance_0u
x(C.aGW.prototype,"gbKX","XM",0)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(C.P1,A.ag)
x(C.aGW,A.ah)
w(A.kB,[C.eEA,C.eEq,C.eEv,C.eEm,C.fGq])
w(A.n0,[C.eEs,C.eEr,C.eEt,C.eEu,C.eEw,C.eEx,C.eEo,C.eEp,C.eEy,C.eEz,C.eEl,C.eEn])
x(C.f0h,A.aK)})()
A.on(b.typeUniverse,JSON.parse('{"P1":{"ag":[],"v":[]},"aGW":{"ah":["P1"]}}'))
var y=(function rtii(){var x=A.aF
return{V:x("U<ac>"),t:x("U<ab<q,@>>"),s:x("U<q>"),p:x("U<v>"),P:x("ab<q,@>"),f:x("ab<@,@>"),N:x("q"),q:x("p3"),y:x("Q"),z:x("@"),g:x("ai<@>?"),H:x("~")}})();(function constants(){D.bh6=new A.u(1,0.07450980392156863,0.10196078431372549,0.14901960784313725,B.q)
D.rI=new A.u(1,0.5450980392156862,0.596078431372549,0.6784313725490196,B.q)
D.bm1=new A.u(1,0.12156862745098039,0.16470588235294117,0.22745098039215686,B.q)
D.bqx=new A.u(1,0.058823529411764705,0.08235294117647059,0.12549019607843137,B.q)
D.bvc=new A.u(1,0.9137254901960784,0.8901960784313725,0.984313725490196,B.q)
D.c18=new A.ae(B.Qk,null,null,null,null,null)
D.fPZ=new A.C("The $25 brake paused the agent. Turning it back on means you have reviewed it. The running demo profit and loss starts again from $0.",null,null,null,null,null,null,null,null,null,null,null)
D.fRS=new A.C("Signal Grid \xb7 Paper Agent",null,B.cd,null,null,null,null,null,null,null,null,null)
D.fU4=new A.C("Turn the agent back on?",null,null,null,null,null,null,null,null,null,null,null)
D.h5T=new A.C("Check now",null,null,null,null,null,null,null,null,null,null,null)
D.h90=new A.C("Show older",null,null,null,null,null,null,null,null,null,null,null)
D.hbP=new A.C("Turn back on",null,null,null,null,null,null,null,null,null,null,null)})()};
(a=>{a["XfZiA6j5/kwTr75L/97TNaDdaPg="]=a.current})($__dart_deferred_initializers__);