((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,C={
i1Z(){return new C.P2(null)},
RO(d){var x=y.N,w=y.z
return y.f.b(d)?A.a1(d,x,w):A.S(x,w)},
H5(d){var x
if(typeof d=="number")x=d
else{x=A.cR(A.w(d==null?"":d))
if(x==null)x=0}return x},
rk(d){var x=C.H5(d),w=A.nO(B.h.ac(Math.abs(x),2),A.af("\\B(?=(\\d{3})+(?!\\d))",!0,!1,!1,!1),new C.fGx(),null)
return(x<0?"-":"")+"$"+w},
iaA(d){var x,w,v=A.bi(A.w(d==null?"":d))
if(v==null)return"not yet"
x=B.o.aq(new A.V(Date.now(),0,!1).bz(v).a,6e7)
if(x<1)return"just now"
if(x<60)return""+x+" min ago"
w=B.o.aq(x,60)
return w<48?""+w+" h ago":""+B.o.aq(w,24)+" days ago"},
P2:function P2(d){this.a=d},
aGY:function aGY(d){var _=this
_.d=null
_.e=d
_.f=!0
_.r=!1
_.w=!0
_.c=_.a=_.y=_.x=null},
eEH:function eEH(d){this.a=d},
eEz:function eEz(d,e){this.a=d
this.b=e},
eEx:function eEx(){},
eEy:function eEy(d,e,f){this.a=d
this.b=e
this.c=f},
eEC:function eEC(){},
eEA:function eEA(d){this.a=d},
eEB:function eEB(d){this.a=d},
eED:function eED(d){this.a=d},
eEE:function eEE(d){this.a=d},
eEv:function eEv(d){this.a=d},
eEw:function eEw(d){this.a=d},
eEF:function eEF(d){this.a=d},
eEG:function eEG(d){this.a=d},
eEr:function eEr(d,e,f){this.a=d
this.b=e
this.c=f},
eEs:function eEs(){},
eEt:function eEt(d){this.a=d},
eEu:function eEu(){},
be4:function be4(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
cXm:function cXm(){},
cXn:function cXn(){},
cXp:function cXp(d,e){this.a=d
this.b=e},
cXq:function cXq(d,e){this.a=d
this.b=e},
cXo:function cXo(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
f0o:function f0o(d){this.a=d},
fGx:function fGx(){}},D
J=c[1]
A=c[0]
B=c[2]
C=a.updateHolder(c[12],C)
D=c[92]
C.P2.prototype={
T(){return new C.aGY(A.a([],y.t))}}
C.aGY.prototype={
Z(){var x=this
x.a4()
x.F5(!0)
x.y=A.dg(B.pv,new C.eEH(x))},
t(){var x=this.y
if(x!=null)x.a1(0)
this.a2()},
F5(d){return this.cv4(d)},
aAj(){return this.F5(!1)},
cv4(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$F5=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(A.hr(A.J(["action","paStatus","live",d],y.N,y.z),!1,!1,!1,!1,B.Oq),$async$F5)
case 3:t=f
if(u.c==null){x=1
break}u.m(new C.eEz(u,t))
x=u.d!=null?4:5
break
case 4:x=6
return A.b(u.c6q(),$async$F5)
case 6:case 5:case 1:return A.h(v,w)}})
return A.i($async$F5,w)},
ZZ(d){return this.c6r(d)},
c6q(){return this.ZZ(!1)},
c6r(d){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$ZZ=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(A.hr(A.J(["action","paLog","limit",100,"beforeId",d&&u.e.length!==0?J.t(B.d.gal(u.e),"id"):0],y.N,y.z),!1,!1,!1,!1,B.hR),$async$ZZ)
case 3:r=f
if(u.c==null||r==null||!J.z(J.t(r,"ok"),!0)){x=1
break}t=y.g.a(J.t(r,"rows"))
if(t==null)t=B.cm
t=J.d5(t,y.f)
t=A.cF(t,new C.eEx(),t.$ti.k("M.E"),y.P)
s=A.B(t,A.a4(t).k("M.E"))
u.m(new C.eEy(u,d,s))
case 1:return A.h(v,w)}})
return A.i($async$ZZ,w)},
SF(d){return this.czU(d)},
czU(d){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$SF=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=u.d
q=C.RO(r==null?null:J.t(r,"state"))
x=d&&J.z(q.h(0,"brakePaused"),!0)?3:4
break
case 3:r=u.c
r.toString
x=5
return A.b(A.ce(null,null,!0,null,new C.eEC(),r,null,!0,!0,y.y),$async$SF)
case 5:if(f!==!0){x=1
break}case 4:u.m(new C.eED(u))
x=6
return A.b(A.hr(A.J(["action","paSet","enabled",d],y.N,y.z),!1,!1,!1,!1,B.hR),$async$SF)
case 6:t=f
if(u.c==null){x=1
break}u.m(new C.eEE(u))
r=t==null
if(J.z(r?null:J.t(t,"ok"),!0))s=d?"Agent started.":"Agent stopped."
else{s=r?null:J.t(t,"error")
s=J.k(s==null?"Could not change it.":s)}u.b2P(s,J.z(r?null:J.t(t,"ok"),!0)?B.bf:B.ay)
x=7
return A.b(u.aAj(),$async$SF)
case 7:case 1:return A.h(v,w)}})
return A.i($async$SF,w)},
XM(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$XM=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u.m(new C.eEv(u))
x=3
return A.b(A.hr(A.J(["action","paCheck"],y.N,y.z),!1,!1,!1,!1,B.pv),$async$XM)
case 3:t=e
if(u.c==null){x=1
break}u.m(new C.eEw(u))
s=t==null
if(!J.z(s?null:J.t(t,"ok"),!0)){s=s?null:J.t(t,"error")
u.b2P(J.k(s==null?"The check did not finish.":s),B.ay)}x=4
return A.b(u.aAj(),$async$XM)
case 4:case 1:return A.h(v,w)}})
return A.i($async$XM,w)},
b2P(d,e){var x=null
this.c.J(y.q).f.U(A.b2(x,x,x,e,x,B.t,x,A.d(d,x,x,x,x,x,x,x,x,x,x),x,B.Y,x,x,x,x,x,x,x,x,x,x))},
B(d){var x=this,w=null,v=A.O(d).ax.a===B.dl,u=new C.f0o(v),t=v?B.c:B.lL,s=v?B.c:B.lL,r=v?B.a_:B.c,q=y.p
r=A.eM(A.a([A.aH(w,w,w,w,B.tw,w,w,w,x.r?w:new C.eEF(x),w,w,w,w,"Refresh from Alpaca",w)],q),w,w,!0,!0,s,w,1,w,w,0,!1,w,!1,r,w,w,w,!0,w,w,w,w,w,D.fRU,w,w,w,1,w,!0)
if(x.f)s=B.lE
else{if(x.d==null){s=x.x
s=A.a([x.cfv(u,s==null?"Nothing to show yet.":s)],q)}else s=x.bHK(0,u)
s=A.YM(A.cu(s,w,w,B.a1s,w,w,B.ah,!1),w,new C.eEG(x))}return A.c5(r,t,s,w,!1,!1,w,w)},
bHK(a7,a8){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=this,a2=null,a3="liveError",a4="totalPnl",a5="start_equity",a6=a1.d
a6.toString
x=J.a8(a6)
w=C.RO(x.h(a6,"state"))
v=C.RO(x.h(a6,"config"))
u=C.RO(w.h(0,"snapshot"))
t=C.RO(x.h(a6,"today"))
s=J.z(w.h(0,"enabled"),!0)
r=J.z(w.h(0,"brakePaused"),!0)
q=y.g
p=q.a(u.h(0,"positions"))
if(p==null)p=B.cm
o=y.f
p=J.d5(p,o)
n=A.B(p,p.$ti.k("M.E"))
m=o.b(w.h(0,"shadow"))?C.RO(w.h(0,"shadow")):a2
p=u.h(0,"asset")
l=J.k(p==null?"":p)
p=y.p
o=A.a([A.bZ(B.bH,A.a([a1.agp("VERSION 1 \xb7 READ-ONLY",B.bd),a1.agp("PAPER ONLY",B.bC),a1.agp("NO ORDERS",B.as)],p),B.br,a2,6,6),B.T],p)
k=v.h(0,"problem")
if(J.k(k==null?"":k).length!==0)o.push(a1.agq(a8,J.k(v.h(0,"problem")),B.as))
k=x.h(a6,a3)
if(J.k(k==null?"":k).length!==0)o.push(a1.agq(a8,J.k(x.h(a6,a3)),B.ay))
if(r){k=w.h(0,"brakeReason")
o.push(a1.agq(a8,"Paused by the $25 brake. "+A.w(k==null?"":k)+". Review the log, then press Start to turn it back on.",B.ay))}o.push(a1.cqh(a8,a6,w,u,t,m))
o.push(a1.bKJ(a8,u,m))
if(r)k=B.ay
else if(s)k=B.bf
else k=a8.a?B.am:D.mQ
k=A.X(B.D4,k,a2,a2,a2,12)
if(r)j="Paused (brake)"
else j=s?"Running":"Stopped"
i=a8.a
j=A.d(j,a2,a2,a2,a2,a2,a2,A.l(a2,a2,i?B.a_:B.c,a2,a2,a2,a2,a2,a2,a2,a2,16,a2,a2,B.H,a2,a2,!0,a2,a2,a2,a2,a2,a2,a2,a2),a2,a2,a2)
h=x.h(a6,"nowEt")
h=A.w(h==null?"":h)
k=A.A(A.a([k,B.ae,j,B.b4,A.d("Now: "+h,a2,a2,a2,a2,a2,a2,A.l(a2,a2,i?B.am:D.mQ,a2,a2,a2,a2,a2,a2,a2,a2,11,a2,a2,a2,a2,a2,!0,a2,a2,a2,a2,a2,a2,a2,a2),a2,a2,a2)],p),B.l,a2,B.e,B.i,0,a2,a2)
j=C.iaA(w.h(0,"lastTickAt"))
j=A.d("Last check: "+j+" \xb7 checks every 15 minutes on the server",a2,a2,a2,a2,a2,a2,A.l(a2,a2,i?B.am:D.mQ,a2,a2,a2,a2,a2,a2,a2,a2,12,a2,a2,a2,a2,a2,!0,a2,a2,a2,a2,a2,a2,a2,a2),a2,a2,a2)
h=A.bn(s&&!r?B.ay:B.bf,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2)
g=a1.r
f=g?a2:new C.eEr(a1,s,r)
e=A.X(s&&!r?B.x6:B.h3,a2,a2,a2,a2,a2)
h=A.E(A.db(e,a2,A.d(s&&!r?"Stop":"Start",a2,a2,a2,a2,a2,a2,a2,a2,a2,a2),f,h),1)
h=A.A(A.a([h,B.at,A.E(A.eo(D.c1a,a2,D.h5V,g?a2:a1.gbKZ(),a2),1)],p),B.l,a2,B.e,B.i,0,a2,a2)
g=J.z(v.h(0,"ordersSwitchOn"),!0)?"on":"off"
o.push(a1.F4(a8,A.a([k,B.an,j,B.af,h,B.P,A.d("Order switch (ALPACA_ORDERS_ENABLED): "+g+". Version 1 has no order code, so no order can be placed either way.",a2,a2,a2,a2,a2,a2,A.l(a2,a2,i?B.am:D.mQ,a2,a2,a2,a2,a2,a2,a2,a2,11.5,a2,a2,a2,a2,a2,!0,a2,a2,a2,a2,a2,a2,a2,a2),a2,a2,a2)],p),"Agent"))
k=A.a([],p)
if(u.a===0)k.push(A.d("No reading yet. Press refresh once the keys are set.",a2,a2,a2,a2,a2,a2,A.l(a2,a2,i?B.am:D.mQ,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,!0,a2,a2,a2,a2,a2,a2,a2,a2),a2,a2,a2))
else{j=a1.b2N(a8,"Paper balance",C.rk(u.h(0,"equity")),!0)
h=a1.JU(a8,"Buying power",C.rk(u.h(0,"buyingPower")))
g=a1.JU(a8,"Cash",C.rk(u.h(0,"cash")))
f=u.h(0,"etTime")
f=a1.JU(a8,"Read at",J.k(f==null?"":f))
B.d.u(k,A.a([j,h,g,f,A.d("This is pretend money from Alpaca. Buying power shows double because Alpaca offers borrowing (margin); the agent never borrows and only uses $50 per trade.",a2,a2,a2,a2,a2,a2,A.l(a2,a2,i?B.am:D.mQ,a2,a2,a2,a2,a2,a2,a2,a2,11.5,a2,a2,a2,a2,1.3,!0,a2,a2,a2,a2,a2,a2,a2,a2),a2,a2,a2)],p))}o.push(a1.F4(a8,k,"Paper account"))
k=l.length===0?"Price":l+" price"
k=a1.b2N(a8,k,u.h(0,"price")==null?"\u2014":C.rk(u.h(0,"price")),!0)
j=a1.JU(a8,"Open position at Alpaca",n.length===0?"None":new A.N(n,new C.eEs(),A.T(n).k("N<1,q>")).aM(0,", "))
o.push(a1.F4(a8,A.a([k,j,a1.JU(a8,"Would-be position (log only)",m==null?"None":A.w(m.h(0,"symbol"))+" $50 bought at "+C.rk(m.h(0,"entryPrice")))],p),"Market and position"))
k=a1.b2O(a8,"Running total (for the $25 brake)",C.rk(w.h(0,a4)),a1.b5w(w.h(0,a4),a8))
j=t.h(0,"day_pnl")
j=a1.b2O(a8,"Today (for the $10 daily stop)",C.rk(j==null?0:j),a1.b5w(t.h(0,"day_pnl"),a8))
h=t.h(0,"trades")
h=a1.JU(a8,"Would-be trades today",A.w(h==null?0:h))
o.push(a1.F4(a8,A.a([k,j,h,a1.JU(a8,"Start-of-day balance",t.h(0,a5)==null?"\u2014":C.rk(t.h(0,a5)))],p),"Demo profit and loss"))
k=A.a([],p)
a6=q.a(x.h(a6,"rules"))
a6=J.aT(a6==null?B.cm:a6)
while(a6.C()){d=a6.gP(a6)
x=A.d("\u2022  ",a2,a2,a2,a2,a2,a2,new A.F(!0,B.bd,a2,a2,a2,a2,a2,B.u,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2),a2,a2,a2)
q=J.k(d)
j=i?B.a_:B.c
k.push(new A.D(B.eI,new A.c7(B.aM,B.e,B.i,B.E,a2,B.p,a2,0,A.a([x,new A.bz(1,B.be,A.d(q,a2,a2,a2,a2,a2,a2,new A.F(!0,j,a2,a2,a2,a2,13,a2,a2,a2,a2,a2,1.3,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2),a2,a2,a2),a2)],p),a2),a2))}o.push(a1.F4(a8,k,"Trading rules (read-only)"))
a6=A.a([],p)
if(a1.e.length===0)a6.push(A.d("No entries yet. The first one comes with the next 15-minute check.",a2,a2,a2,a2,a2,a2,A.l(a2,a2,i?B.am:D.mQ,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,!0,a2,a2,a2,a2,a2,a2,a2,a2),a2,a2,a2))
for(x=a1.e,q=x.length,a0=0;a0<x.length;x.length===q||(0,A.I)(x),++a0)a6.push(a1.c6F(a8,x[a0]))
if(a1.e.length!==0&&a1.w)a6.push(A.as(A.bN(!1,D.h92,a2,a2,!0,a2,a2,a2,new C.eEt(a1),a2,a2),a2,a2,a2))
o.push(a1.F4(a8,a6,"Decision log (newest first)"))
return o},
cqh(a7,a8,a9,b0,b1,b2){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=null,a3="open",a4=C.RO(b0.h(0,"chart")).h(0,"trend"),a5=J.k(a4==null?"unknown":a4),a6=C.RO(J.t(a8,"market"))
a4=a6.h(0,"asset")
if(a4==null)a4=b0.h(0,"asset")
x=J.k(a4==null?"SPY":a4)
a4=x==="SPY"
w=a4?"SPY (a fund that follows the 500 biggest US companies)":"Bitcoin (BTC/USD)"
v=C.H5(b0.h(0,"price"))
u=J.z(a9.h(0,"enabled"),!0)&&!J.z(a9.h(0,"brakePaused"),!0)
switch(a5){case"up":t=new A.b3(B.oO,B.bf,x+" is trending UP")
break
case"down":t=new A.b3(B.arT,B.ay,x+" is trending DOWN")
break
case"flat":t=new A.b3(D.bVj,B.as,x+" is moving sideways")
break
default:t=new A.b3(B.Qc,a7.a?B.am:D.mQ,"Waiting for the first reading")
break}s=t.a
r=a2
q=a2
p=t.b
o=t.c
q=o
r=p
n=s
m=A.a([],y.s)
if(J.z(a6.h(0,a3),!0)&&!a4)m.push("It is the weekend, so the agent watches "+w+", which trades all day.")
else if(J.z(a6.h(0,a3),!0))m.push("The stock market is open now. The agent looks at "+w+" every 15 minutes.")
else if(J.z(a6.h(0,a3),!1))m.push("The stock market is closed now, so nothing happens until it opens again"+this.cLi(a6.h(0,"nextOpen"))+".")
if(!u)m.push("The agent is stopped. Press Start below to let it watch the market.")
if(b2!=null){l=C.H5(b2.h(0,"entryPrice"))
k=C.H5(b2.h(0,"qty"))
a4=(J.z(b2.h(0,"symbol"),x)?v:l)-l
j=k*a4
i=l===0?0:a4/l*100
a4=A.w(b2.h(0,"symbol"))
t=C.rk(l)
h=j>=0?"UP":"DOWN"
g=C.rk(Math.abs(j))
f=i>=0?"+":""
m.push("The agent is holding a pretend $50 of "+a4+", bought at "+t+". Right now that would be "+h+" "+g+" ("+f+B.h.ac(i,2)+"%).")
m.push("It sells to take the win at "+C.rk(l*1.03)+" (about +$1.50), or to stop the loss at "+C.rk(l*0.985)+" (about -$0.75), or when the trend turns down.")}else{m.push("No pretend trade is open. The agent only buys $50 at the moment the trend turns UP (the pink fast line crosses above the purple slow line).")
if(a5==="up")m.push("The trend is already up, but it turned up earlier, so the agent waits for the next fresh turn instead of buying late.")
else if(a5==="down")m.push("The trend is down, so the agent waits. Buying now would likely lose.")}e=C.H5(a9.h(0,"totalPnl"))
d=C.H5(b1.h(0,"day_pnl"))
if(e===0&&d===0)a4="Score so far: no pretend wins or losses yet."
else{a4=e>=0?"won":"lost"
t=C.rk(Math.abs(e))
h=d>=0?"won":"lost"
h="Score so far: "+a4+" "+t+" in total, "+h+" "+C.rk(Math.abs(d))+" today (pretend money)."
a4=h}m.push(a4)
m.push("How you win or lose: after a buy, if the price goes UP you win, if it goes DOWN you lose. Version 1 only pretends, no money moves.")
a4=r.j(0.15)
t=A.m(12)
t=A.o(a2,A.X(n,r,a2,a2,a2,26),B.f,a2,a2,new A.n(a4,a2,a2,t,a2,a2,B.n),a2,a2,a2,a2,B.cq,a2,a2,a2)
a4=a7.a
h=y.p
h=A.a([A.A(A.a([t,B.bb,A.E(A.d(q,a2,a2,a2,a2,a2,a2,A.l(a2,a2,a4?B.a_:B.c,a2,a2,a2,a2,a2,a2,a2,a2,18,a2,a2,B.u,a2,a2,!0,a2,a2,a2,a2,a2,a2,a2,a2),a2,a2,a2),1)],h),B.l,a2,B.e,B.i,0,a2,a2),B.T],h)
for(t=m.length,a0=0;a0<m.length;m.length===t||(0,A.I)(m),++a0){a1=m[a0]
g=a4?B.a_:B.c
h.push(new A.D(D.bDG,A.d(a1,a2,a2,a2,a2,a2,a2,new A.F(!0,g,a2,a2,a2,a2,13.5,a2,a2,a2,a2,a2,1.35,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2),a2,a2,a2),a2))}return this.F4(a7,h,"In plain words")},
bKJ(d,e,f){var x,w,v,u,t,s,r=this,q=null,p=y.g.a(C.RO(e.h(0,"chart")).h(0,"points"))
if(p==null)p=B.cm
p=J.d5(p,y.f)
p=A.cF(p,new C.eEu(),p.$ti.k("M.E"),y.P)
x=A.B(p,A.a4(p).k("M.E"))
if(x.length<2)return B.bM
w=f==null?q:C.H5(f.h(0,"entryPrice"))
p=e.h(0,"asset")
p=A.w(p==null?"":p)
v=A.b4(q,q,q,new C.be4(x,d,w,q),B.aA)
u=d.a
t=y.p
s=A.a([r.adX(d,u?B.a_:B.c,"Price"),r.adX(d,B.bC,"Fast line (last 45 min)"),r.adX(d,B.bd,"Slow line (last 1 h 45 min)")],t)
if(w!=null)s.push(r.adX(d,B.as,"Pretend buy price"))
s=A.bZ(B.bH,s,B.br,q,4,14)
return r.F4(d,A.a([new A.a5(1/0,180,v,q),B.P,s,B.an,A.d("Pink above purple means prices are rising lately. The agent buys when pink crosses up through purple, and sells when it crosses back down.",q,q,q,q,q,q,A.l(q,q,u?B.am:D.mQ,q,q,q,q,q,q,q,q,11.5,q,q,q,q,1.3,!0,q,q,q,q,q,q,q,q),q,q,q)],t),"Last 4 hours of "+p)},
adX(d,e,f){var x=null,w=A.o(x,x,B.f,e,x,x,x,3,x,x,x,x,x,14)
return A.A(A.a([w,B.e3,A.d(f,x,x,x,x,x,x,A.l(x,x,d.a?B.am:D.mQ,x,x,x,x,x,x,x,x,11,x,x,x,x,x,!0,x,x,x,x,x,x,x,x),x,x,x)],y.p),B.l,x,B.e,B.N,0,x,x)},
cLi(d){var x,w,v,u,t=A.w(d==null?"":d),s=A.bi(t.length>=19?B.a.az(t,0,19):"")
if(s==null)return""
x=B.o.F(A.d7(s),12)===0?12:B.o.F(A.d7(s),12)
w=B.A8[A.lX(s)-1]
v=B.a.b1(B.o.v(A.fS(s)),2,"0")
u=A.d7(s)<12?"AM":"PM"
return" on "+w+" at "+x+":"+v+" "+u+" ET"},
c6F(d,e){var x,w,v,u,t,s,r=null,q="asset",p="price",o="balance",n="total_pnl",m=J.a8(e),l=m.h(e,"decision"),k=J.k(l==null?"":l)
A:{if("would buy"===k){l=B.bf
break A}if("would sell"===k){l=B.bC
break A}if("hold"===k){l=B.bd
break A}if("day start"===k||"day end"===k){l=B.cr
break A}if("start"===k){l=B.bf
break A}if("stop"===k){l=B.ay
break A}if(J.z(m.h(e,"kind"),"error"))l=B.ay
else l=d.a?B.am:D.mQ
break A}x=m.h(e,"fast_ma")!=null&&m.h(e,"slow_ma")!=null
w=d.a
v=w?B.aS:D.bqz
u=A.m(12)
t=m.h(e,"et_time")
t=J.k(t==null?"":t)
s=y.p
s=A.a([A.A(A.a([A.E(A.d(t,r,r,r,r,r,r,A.l(r,r,w?B.am:D.mQ,r,r,r,r,r,r,r,r,11,r,r,r,r,r,!0,r,r,r,r,r,r,r,r),r,r,r),1),this.agp(k.toUpperCase(),l)],s),B.l,r,B.e,B.i,0,r,r),B.aw],s)
if(m.h(e,q)!=null||m.h(e,p)!=null){t=A.a([],y.s)
if(m.h(e,q)!=null)t.push(J.k(m.h(e,q)))
if(m.h(e,p)!=null)t.push(C.rk(m.h(e,p)))
if(x)t.push("fast "+B.h.ac(C.H5(m.h(e,"fast_ma")),2)+" / slow "+B.h.ac(C.H5(m.h(e,"slow_ma")),2))
if(m.h(e,"signal")!=null)t.push("signal: "+A.w(m.h(e,"signal")))
t=B.d.aM(t," \xb7 ")
s.push(A.d(t,r,r,r,r,r,r,A.l(r,r,w?B.a_:B.c,r,r,r,r,r,r,r,r,12.5,r,r,B.O,r,r,!0,r,r,r,r,r,r,r,r),r,r,r))}t=m.h(e,"reason")
t=J.k(t==null?"":t)
s.push(A.d(t,r,r,r,r,r,r,A.l(r,r,w?B.a_:B.c,r,r,r,r,r,r,r,r,12.5,r,r,r,r,1.3,!0,r,r,r,r,r,r,r,r),r,r,r))
if(m.h(e,o)!=null||m.h(e,n)!=null){t=A.a([],y.s)
if(m.h(e,o)!=null)t.push("balance "+C.rk(m.h(e,o)))
if(m.h(e,n)!=null)t.push("running P/L "+C.rk(m.h(e,n)))
m=B.d.aM(t," \xb7 ")
s.push(A.d(m,r,r,r,r,r,r,A.l(r,r,w?B.am:D.mQ,r,r,r,r,r,r,r,r,11,r,r,r,r,r,!0,r,r,r,r,r,r,r,r),r,r,r))}return A.o(r,A.x(s,B.E,r,B.e,B.i,0,B.p),B.f,r,r,new A.n(v,r,new A.bF(B.a1,B.a1,B.a1,new A.ax(l,3,B.r,-1)),u,r,r,B.n),r,r,r,B.cy,B.bS,r,r,r)},
F4(d,e,f){var x=null,w=d.a,v=w?B.c:D.bh9,u=A.m(18),t=A.K(w?D.akQ:D.aib,B.r,1),s=w?A.a([new A.ac(0,B.G,B.bd.j(0.12),B.cz,18)],y.V):x,r=A.a([A.d(f.toUpperCase(),x,x,x,x,x,x,A.l(x,x,w?B.aD:B.bd,x,x,x,x,x,x,x,x,11.5,x,x,B.u,x,x,!0,x,1,x,x,x,x,x,x),x,x,x),B.T],y.p)
B.d.u(r,e)
return A.o(x,A.x(r,B.E,x,B.e,B.i,0,B.p),B.f,x,x,new A.n(v,x,t,u,s,x,B.n),x,x,x,B.eg,B.bI,x,x,x)},
aAi(d,e,f,g,h){var x,w=null,v=d.a,u=A.E(A.d(e,w,w,w,w,w,w,A.l(w,w,v?B.am:D.mQ,w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),1)
if(h==null)v=v?B.a_:B.c
else v=h
x=g?20:13.5
return new A.D(B.eI,A.A(A.a([u,B.ae,new A.de(1,B.cl,A.d(f,w,w,w,w,w,w,A.l(w,w,v,w,w,w,w,w,w,w,w,x,w,w,g?B.u:B.O,w,w,!0,w,w,w,w,w,w,w,w),B.e1,w,w),w)],y.p),B.E,w,B.e,B.i,0,w,w),w)},
b2N(d,e,f,g){return this.aAi(d,e,f,g,null)},
JU(d,e,f){return this.aAi(d,e,f,!1,null)},
b2O(d,e,f,g){return this.aAi(d,e,f,!1,g)},
agq(d,e,f){var x=null,w=f.j(0.12),v=A.m(14),u=A.K(f.j(0.5),B.r,1)
return A.o(x,A.d(e,x,x,x,x,x,x,A.l(x,x,d.a?B.a_:B.c,x,x,x,x,x,x,x,x,13,x,x,x,x,1.35,!0,x,x,x,x,x,x,x,x),x,x,x),B.f,x,x,new A.n(w,x,u,v,x,x,B.n),x,x,x,B.eg,B.bl,x,x,x)},
cfv(d,e){return this.agq(d,e,B.bd)},
agp(d,e){var x=null,w=e.j(0.16),v=A.m(999)
return A.o(x,A.d(d,x,x,x,x,x,x,A.l(x,x,e,x,x,x,x,x,x,x,x,10,x,x,B.u,x,x,!0,x,0.6,x,x,x,x,x,x),x,x,x),B.f,x,x,new A.n(w,x,x,v,x,x,B.n),x,x,x,x,B.fE,x,x,x)},
b5w(d,e){var x=C.H5(d)
if(x>0)return B.bf
if(x<0)return B.ay
return e.a?B.a_:B.c}}
C.be4.prototype={
a3(a2,a3){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null,d={},a0=y.n,a1=A.a([],a0)
for(x=f.b,w=x.length,v=0;v<x.length;x.length===w||(0,A.I)(x),++v){u=x[v]
t=J.a8(u)
s=t.h(u,"c")
if(!(typeof s=="number")){s=A.cR(A.w(s==null?"":s))
if(s==null)s=0}s=A.a([s],a0)
if(t.h(u,"f")!=null){r=t.h(u,"f")
if(!(typeof r=="number")){r=A.cR(A.w(r==null?"":r))
if(r==null)r=0}s.push(r)}if(t.h(u,"s")!=null){t=t.h(u,"s")
if(!(typeof t=="number")){t=A.cR(A.w(t==null?"":t))
if(t==null)t=0}s.push(t)}B.d.u(a1,s)}a0=f.d
x=a0!=null
if(x)a1.push(a0)
d.a=B.d.eN(a1,new C.cXm())
q=d.b=B.d.eN(a1,new C.cXn())
a1=d.a
if(q-a1<1e-9){w=d.b=q+1
a1=d.a=a1-1
p=w
w=a1
a1=p}else{w=a1
a1=q}o=(a1-w)*0.08
d.a=w-o
d.b=a1+o
n=new C.cXq(d,a3)
$.R()
m=A.L()
a1=f.c.a
m.r=(a1?D.akQ:D.aib).gp(0)
m.c=1
for(w=a3.b,t=a3.a,l=0;l<=3;++l){k=w*l/3
a2.ah(new A.r(0,k),new A.r(t,k),m)}j=new C.cXo(f,new C.cXp(f,a3),n,a2)
if(x){i=n.$1(a0)
$.R()
u=A.L()
u.r=B.as.gp(0)
u.c=1.5
for(h=0;h<t;h+=8)a2.ah(new A.r(h,i),new A.r(h+4,i),u)}j.$3("s",B.bd,2.2)
j.$3("f",B.bC,2.2)
j.$3("c",(a1?B.a_:B.c).j(0.85),1.4)
g=A.fw(e,B.cw,e,e,e,e,B.a7,B.bX,e,B.dE,B.bY)
for(a0=[new A.y(d.b-o,0),new A.y(d.a+o,w-14)],x=a0.length,v=0;v<x;++v){w=a0[v]
s=C.rk(w.a)
r=a1?B.am:D.mQ
g.sb2(0,new A.es(s,e,e,B.cM,e,e,e,e,e,e,new A.F(!0,r,e,e,e,e,10,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e)))
g.ek()
g.a3(a2,new A.r(t-g.b.c,w.b))}},
aE(d){return d.b!==this.b||d.d!=this.d}}
C.f0o.prototype={}
var z=a.updateTypes(["aA<~>()"])
C.eEH.prototype={
$1(d){this.a.aAj()
return null},
$S:12}
C.eEz.prototype={
$0(){var x=this.a,w=x.f=!1,v=this.b,u=v==null
if(!u?J.z(J.t(v,"ok"),!0):w){x.d=v
x.x=null}else{w=u?null:J.t(v,"error")
x.x=J.k(w==null?"Could not reach the server. Pull down to try again.":w)
if(!J.z(u?null:J.t(v,"ownerOnly"),!0))w=J.z(u?null:J.t(v,"setupNeeded"),!0)
else w=!0
if(w)x.d=null}},
$S:0}
C.eEx.prototype={
$1(d){return A.a1(d,y.N,y.z)},
$S:30}
C.eEy.prototype={
$0(){var x,w,v=this,u=v.a
if(v.b){x=A.B(u.e,y.P)
w=v.c
B.d.u(x,w)}else{x=v.c
w=x}u.e=x
u.w=w.length>=100},
$S:0}
C.eEC.prototype={
$1(d){var x=null
return A.ek(A.a([A.bN(!1,B.dp,x,x,!0,x,x,x,new C.eEA(d),x,x),A.bJ(D.hbR,x,new C.eEB(d),x)],y.p),x,x,x,D.fQ0,x,x,x,x,D.fU6,x)},
$S:18}
C.eEA.prototype={
$0(){A.a6(this.a,!1).N(!1)
return null},
$S:0}
C.eEB.prototype={
$0(){A.a6(this.a,!1).N(!0)
return null},
$S:0}
C.eED.prototype={
$0(){return this.a.r=!0},
$S:0}
C.eEE.prototype={
$0(){return this.a.r=!1},
$S:0}
C.eEv.prototype={
$0(){return this.a.r=!0},
$S:0}
C.eEw.prototype={
$0(){return this.a.r=!1},
$S:0}
C.eEF.prototype={
$0(){return this.a.F5(!0)},
$S:0}
C.eEG.prototype={
$0(){return this.a.F5(!0)},
$S:1}
C.eEr.prototype={
$0(){var x=this.b&&!this.c
return this.a.SF(!x)},
$S:0}
C.eEs.prototype={
$1(d){var x=J.a8(d)
return A.w(x.h(d,"symbol"))+" "+B.h.ac(C.H5(x.h(d,"qty")),6)+" @ "+C.rk(x.h(d,"avgEntry"))},
$S:2334}
C.eEt.prototype={
$0(){return this.a.ZZ(!0)},
$S:0}
C.eEu.prototype={
$1(d){return A.a1(d,y.N,y.z)},
$S:30}
C.cXm.prototype={
$2(d,e){return d<e?d:e},
$S:81}
C.cXn.prototype={
$2(d,e){return d>e?d:e},
$S:81}
C.cXp.prototype={
$1(d){return d/(this.a.b.length-1)*this.b.a},
$S:156}
C.cXq.prototype={
$1(d){var x=this.b.b,w=this.a,v=w.a
return x-(d-v)/(w.b-v)*x},
$S:5}
C.cXo.prototype={
$3(d,e,f){var x,w,v,u,t,s,r,q=this,p=$.R(),o=A.a([],y.v),n=new A.aG(p.r,B.ai,null,null,o)
for(p=q.a.b,x=q.b,w=q.c,v=!1,u=0;u<p.length;++u){t=J.t(p[u],d)
if(t==null)continue
s=x.$1(u)
if(typeof t=="number")r=t
else{r=A.cR(A.w(t))
if(r==null)r=0}r=w.$1(r)
if(v){s=new A.aq(s,r)
o.push(s)
r=n.f
if(r!=null)s.ak(r)
n.ab()}else{s=new A.aZ(s,r)
o.push(s)
r=n.f
if(r!=null)s.ak(r)
n.ab()}v=!0}$.R()
p=A.L()
p.r=e.gp(0)
p.b=B.aa
p.c=f
p.e=B.dN
q.d.af(n,p)},
$S:2335}
C.fGx.prototype={
$1(d){return","},
$S:60};(function installTearOffs(){var x=a._instance_0u
x(C.aGY.prototype,"gbKZ","XM",0)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(C.P2,A.ag)
x(C.aGY,A.ah)
w(A.kB,[C.eEH,C.eEx,C.eEC,C.eEs,C.eEu,C.cXp,C.cXq,C.cXo,C.fGx])
w(A.n1,[C.eEz,C.eEy,C.eEA,C.eEB,C.eED,C.eEE,C.eEv,C.eEw,C.eEF,C.eEG,C.eEr,C.eEt])
x(C.be4,A.q8)
w(A.mA,[C.cXm,C.cXn])
x(C.f0o,A.aK)})()
A.on(b.typeUniverse,JSON.parse('{"P2":{"ag":[],"v":[]},"aGY":{"ah":["P2"]},"be4":{"aB":[]}}'))
var y=(function rtii(){var x=A.aF
return{V:x("U<ac>"),t:x("U<ab<q,@>>"),v:x("U<hN>"),s:x("U<q>"),p:x("U<v>"),n:x("U<G>"),P:x("ab<q,@>"),f:x("ab<@,@>"),N:x("q"),q:x("p3"),y:x("Q"),z:x("@"),g:x("ai<@>?"),H:x("~")}})();(function constants(){D.bh9=new A.u(1,0.07450980392156863,0.10196078431372549,0.14901960784313725,B.q)
D.mQ=new A.u(1,0.5450980392156862,0.596078431372549,0.6784313725490196,B.q)
D.aib=new A.u(1,0.12156862745098039,0.16470588235294117,0.22745098039215686,B.q)
D.bqz=new A.u(1,0.058823529411764705,0.08235294117647059,0.12549019607843137,B.q)
D.akQ=new A.u(1,0.9137254901960784,0.8901960784313725,0.984313725490196,B.q)
D.bDG=new A.P(0,0,0,7)
D.bVj=new A.a_(983635,"MaterialIcons",!0)
D.c1a=new A.ae(B.Ql,null,null,null,null,null)
D.fQ0=new A.C("The $25 brake paused the agent. Turning it back on means you have reviewed it. The running demo profit and loss starts again from $0.",null,null,null,null,null,null,null,null,null,null,null)
D.fRU=new A.C("Signal Grid \xb7 Paper Agent",null,B.cd,null,null,null,null,null,null,null,null,null)
D.fU6=new A.C("Turn the agent back on?",null,null,null,null,null,null,null,null,null,null,null)
D.h5V=new A.C("Check now",null,null,null,null,null,null,null,null,null,null,null)
D.h92=new A.C("Show older",null,null,null,null,null,null,null,null,null,null,null)
D.hbR=new A.C("Turn back on",null,null,null,null,null,null,null,null,null,null,null)})()};
(a=>{a["pt1gqIYNzt2Pk20Jl09njwguIDc="]=a.current})($__dart_deferred_initializers__);