((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,F,E,C={
i2A(){return new C.P4(null)},
fy1(d){var x
switch(d){case"SPY":x=D.hJ4
break
case"QQQ":x=D.hJ8
break
case"AAPL":x=D.hJc
break
case"MSFT":x=D.hJ7
break
case"NVDA":x=D.hIZ
break
case"TSLA":x=D.hJ6
break
case"AMZN":x=D.hJf
break
case"BTC/USD":x=D.hJ_
break
case"ETH/USD":x=D.hJ1
break
case"SOL/USD":x=D.hJa
break
default:x=new C.yS(d,d.length===0?"?":d[0],B.b2)
break}return x},
hBV(d,e){var x=null,w=C.fy1(d),v=w.b
return A.o(B.z,A.c(v,x,x,x,x,x,x,A.l(x,x,B.c,x,x,x,x,x,x,x,x,v.length>1?e*0.32:e*0.52,x,x,B.u,x,x,!0,x,x,x,x,x,x,x,x),x,x,x),B.f,x,x,new A.n(w.c,x,x,x,x,x,B.a6),x,e,x,x,x,x,x,e)},
ig_(d){var x,w=y.g.a(d.h(0,"markets"))
if(w==null)w=B.cm
w=J.d3(w,y.f)
w=A.cE(w,new C.fyj(),w.$ti.k("M.E"),y.P)
x=A.B(w,A.a4(w).k("M.E"))
return x},
xf(d){var x=y.N,w=y.z
return y.f.b(d)?A.a1(d,x,w):A.S(x,w)},
mu(d){var x
if(typeof d=="number")x=d
else{x=A.cG(A.v(d==null?"":d))
if(x==null)x=0}return x},
hiS(d){var x=y.g.a(C.xf(J.t(d,"chart")).h(0,"points"))
if(x==null)x=B.cm
x=J.d3(x,y.f)
x=A.cE(x,new C.fCD(),x.$ti.k("M.E"),y.P)
x=A.B(x,A.a4(x).k("M.E"))
return x},
mV(d,e,f){var x,w=A.nR(B.i.ac(Math.abs(d),2),A.af("\\B(?=(\\d{3})+(?!\\d))",!0,!1,!1,!1),new C.fzp(),null)
if(d<0)x="-"
else x=f&&d>0?"+":""
return x+(e?"$":"")+w},
fsW(d){var x=B.o.F(A.d5(d),12)===0?12:B.o.F(A.d5(d),12),w=B.a.b1(B.o.v(A.fM(d)),2,"0"),v=A.d5(d)<12?"AM":"PM"
return""+x+":"+w+" "+v},
hjA(d){var x=d.aa(),w=new C.fGC(),v=w.$3(A.bD(x),3,2).bQ(252e8),u=w.$3(A.bD(x),11,1).bQ(216e8),t=x.bQ(0-A.dv(0,!x.cZ(v)&&x.cZ(u)?4:5,0,0,0,0).a)
return A.c0(A.bD(t),A.bL(t),A.bX(t),A.d5(t),A.fM(t),0,0,0)},
idz(d){var x,w=A.bi(A.v(d==null?"":d))
if(w==null)return""
x=C.hjA(w)
return B.iK[A.bL(x)-1]+" "+A.bX(x)+" at "+C.fsW(x)+" ET"},
ik2(d){var x,w,v=d.split(", ")
if(v.length>=4){x=v[1]
w=v[3]
return x+", "+A.aL(w," ET","")}return d},
hBJ(d){return d.length===0?d:d[0].toUpperCase()+B.a.aX(d,1)},
P4:function P4(d){this.a=d},
aH_:function aH_(d){var _=this
_.d=null
_.e=d
_.f=!0
_.r=!1
_.w=!0
_.x=!1
_.y=48
_.z=null
_.Q=!0
_.c=_.a=_.at=_.as=null},
eF8:function eF8(d){this.a=d},
eEZ:function eEZ(d,e){this.a=d
this.b=e},
eER:function eER(){},
eES:function eES(d,e,f){this.a=d
this.b=e
this.c=f},
eF1:function eF1(){},
eF_:function eF_(d){this.a=d},
eF0:function eF0(d){this.a=d},
eF2:function eF2(d){this.a=d},
eF3:function eF3(d){this.a=d},
eEO:function eEO(d){this.a=d},
eEP:function eEP(d){this.a=d},
eF7:function eF7(d){this.a=d},
eF4:function eF4(d){this.a=d},
eF5:function eF5(d){this.a=d},
eEG:function eEG(d){this.a=d},
eEH:function eEH(d,e){this.a=d
this.b=e},
eEI:function eEI(d){this.a=d},
eEJ:function eEJ(d){this.a=d},
eEV:function eEV(){},
eEX:function eEX(){},
eEW:function eEW(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
eEU:function eEU(d,e){this.a=d
this.b=e},
eET:function eET(d,e){this.a=d
this.b=e},
eEM:function eEM(d,e){this.a=d
this.b=e},
eEL:function eEL(d,e){this.a=d
this.b=e},
eEN:function eEN(d){this.a=d},
eEK:function eEK(d){this.a=d},
eEY:function eEY(d,e){this.a=d
this.b=e},
eEQ:function eEQ(d,e){this.a=d
this.b=e},
eF6:function eF6(){},
eEF:function eEF(d){this.a=d},
eEE:function eEE(d){this.a=d},
aAB:function aAB(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
bdQ:function bdQ(){this.c=this.a=this.d=null},
cW9:function cW9(d,e){this.a=d
this.b=e},
cWi:function cWi(d){this.a=d},
cWg:function cWg(d,e){this.a=d
this.b=e},
cWe:function cWe(d,e){this.a=d
this.b=e},
cWf:function cWf(d,e){this.a=d
this.b=e},
cWd:function cWd(d){this.a=d},
cWc:function cWc(d){this.a=d},
cWh:function cWh(d){this.a=d},
cWb:function cWb(d){this.a=d},
cWa:function cWa(d){this.a=d},
bdR:function bdR(d,e,f,g,h,i,j,k){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.w=j
_.a=k},
cWj:function cWj(d){this.a=d},
cWl:function cWl(d,e){this.a=d
this.b=e},
cWk:function cWk(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
bvH:function bvH(d,e,f){this.b=d
this.c=e
this.a=f},
feo:function feo(){},
yS:function yS(d,e,f){this.a=d
this.b=e
this.c=f},
fyj:function fyj(){},
f0Q:function f0Q(d){this.a=d},
fCD:function fCD(){},
fzp:function fzp(){},
fGC:function fGC(){}},D,G,H,I,K
J=c[1]
A=c[0]
B=c[2]
F=c[97]
E=c[83]
C=a.updateHolder(c[12],C)
D=c[95]
G=c[51]
H=c[96]
I=c[27]
K=c[90]
C.P4.prototype={
T(){return new C.aH_(A.a([],y.t))}}
C.aH_.prototype={
Z(){var x=this
x.a4()
x.a.toString
x.Bj(!0)
x.at=A.dg(B.pD,new C.eF8(x))},
t(){var x=this.at
if(x!=null)x.a1(0)
this.a3()},
Bj(d){return this.cvf(d)},
b2R(){return this.Bj(!1)},
cvf(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$Bj=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(A.hr(A.J(["action","paStatus","live",d],y.N,y.z),!1,!1,!1,!1,B.OA),$async$Bj)
case 3:t=f
if(u.c==null){x=1
break}u.l(new C.eEZ(u,t))
x=u.d!=null?4:5
break
case 4:x=6
return A.b(u.c6z(),$async$Bj)
case 6:case 5:case 1:return A.h(v,w)}})
return A.i($async$Bj,w)},
ZY(d){return this.c6A(d)},
c6z(){return this.ZY(!1)},
c6A(d){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$ZY=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(A.hr(A.J(["action","paLog","limit",100,"beforeId",d&&u.e.length!==0?J.t(B.d.gal(u.e),"id"):0],y.N,y.z),!1,!1,!1,!1,B.hU),$async$ZY)
case 3:r=f
if(u.c==null||r==null||!J.z(J.t(r,"ok"),!0)){x=1
break}t=y.g.a(J.t(r,"rows"))
if(t==null)t=B.cm
t=J.d3(t,y.f)
t=A.cE(t,new C.eER(),t.$ti.k("M.E"),y.P)
s=A.B(t,A.a4(t).k("M.E"))
u.l(new C.eES(u,d,s))
case 1:return A.h(v,w)}})
return A.i($async$ZY,w)},
SE(d){return this.cA6(d)},
cA6(d){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$SE=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=u.d
q=C.xf(r==null?null:J.t(r,"state"))
x=d&&J.z(q.h(0,"brakePaused"),!0)?3:4
break
case 3:r=u.c
r.toString
x=5
return A.b(A.ce(null,null,!0,null,new C.eF1(),r,null,!0,!0,y.y),$async$SE)
case 5:if(f!==!0){x=1
break}case 4:u.l(new C.eF2(u))
x=6
return A.b(A.hr(A.J(["action","paSet","enabled",d],y.N,y.z),!1,!1,!1,!1,B.hU),$async$SE)
case 6:t=f
if(u.c==null){x=1
break}u.l(new C.eF3(u))
r=t==null
if(J.z(r?null:J.t(t,"ok"),!0))s=d?"Agent started.":"Agent stopped."
else{s=r?null:J.t(t,"error")
s=J.k(s==null?"Could not change it.":s)}u.b2T(s,J.z(r?null:J.t(t,"ok"),!0)?D.i2:D.iF)
x=7
return A.b(u.b2R(),$async$SE)
case 7:case 1:return A.h(v,w)}})
return A.i($async$SE,w)},
XL(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$XL=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u.l(new C.eEO(u))
x=3
return A.b(A.hr(A.J(["action","paCheck"],y.N,y.z),!1,!1,!1,!1,B.pD),$async$XL)
case 3:t=e
if(u.c==null){x=1
break}u.l(new C.eEP(u))
s=t==null
if(!J.z(s?null:J.t(t,"ok"),!0)){s=s?null:J.t(t,"error")
u.b2T(J.k(s==null?"The check did not finish.":s),D.iF)}x=4
return A.b(u.b2R(),$async$XL)
case 4:case 1:return A.h(v,w)}})
return A.i($async$XL,w)},
b2T(d,e){var x=null
this.c.K(y.q).f.U(A.b2(x,x,x,e,x,B.t,x,A.c(d,x,x,x,x,x,x,x,x,x,x),x,B.Y,x,x,x,x,x,x,x,x,x,x))},
B(d){var x,w=this,v=null,u=A.O(d).ax.a===B.dl,t=new C.f0Q(u),s=u?D.ahN:D.ahG,r=u?D.ahN:D.ahG
r=A.a([r,u?D.brn:D.bpV],y.O)
x=w.cfG(t)
if(w.f)u=B.lJ
else{if(w.d==null){u=w.as
u=A.a([w.aat(t,u==null?"Nothing to show yet.":u,B.b2)],y.p)}else u=w.bHS(0,t)
u=A.YN(A.cu(u,v,v,D.bGS,v,v,B.ah,!1),v,new C.eF7(w))}return A.c5(v,s,A.o(v,A.bm(!0,A.x(A.a([x,A.E(u,1)],y.p),B.l,v,B.e,B.h,0,B.p),!0,!1,B.ag,!0,!0),B.f,v,v,new A.n(v,v,v,v,v,new A.a8(B.aX,B.b4,B.x,r,v,v),B.m),v,v,v,v,v,v,v,v),v,!1,!1,v,v)},
cfG(d){var x,w,v,u,t,s,r=this,q=null,p=r.d,o=C.xf(p==null?q:J.t(p,"state")),n=J.z(o.h(0,"brakePaused"),!0),m=J.z(o.h(0,"enabled"),!0)&&!n
p=r.b2S(d,B.eJ,new C.eF4(r))
x=d.a
w=A.c("Signal Grid",q,q,q,q,q,q,A.l(q,q,x?D.ij:B.c,q,q,q,q,q,q,q,q,17,q,q,B.G,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
v=y.p
w=A.a([p,B.as,A.E(A.x(A.a([w,A.c("Paper trading agent \xb7 pretend money",q,q,q,q,q,q,A.l(q,q,x?D.fD:D.fE,q,q,q,q,q,q,q,q,11.5,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],v),B.D,q,B.e,B.h,0,B.p),1)],v)
if(r.d!=null){if(n)p=D.iF
else if(m)p=D.i2
else p=x?D.fD:D.fE
p=p.j(0.14)
u=A.m(999)
if(n)t=D.iF
else if(m)t=D.i2
else t=x?D.fD:D.fE
t=A.W(B.x1,t,q,q,q,8)
if(n)s="Paused"
else s=m?"Running":"Stopped"
if(n)x=D.iF
else if(m)x=D.i2
else x=x?D.fD:D.fE
w.push(A.o(q,A.A(A.a([t,B.bm,A.c(s,q,q,q,q,q,q,A.l(q,q,x,q,q,q,q,q,q,q,q,12,q,q,B.G,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],v),B.l,q,B.e,B.N,0,q,q),B.f,q,q,new A.n(p,q,q,u,q,q,B.m),q,q,q,q,B.h6,q,q,q))}w.push(B.ab)
w.push(r.b2S(d,B.nT,r.r?q:new C.eF5(r)))
return new A.D(B.hg,A.A(w,B.l,q,B.e,B.h,0,q,q),q)},
bHS(c8,c9){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2=this,c3=null,c4="asset",c5="liveError",c6="amount",c7=c2.d
c7.toString
x=J.a7(c7)
w=C.xf(x.h(c7,"state"))
v=C.xf(x.h(c7,"config"))
u=C.xf(w.h(0,"snapshot"))
t=y.f.b(w.h(0,"shadow"))?C.xf(w.h(0,"shadow")):c3
s=C.ig_(u)
r=c2.z
if(r==null){q=t==null?c3:t.h(0,"symbol")
if(q==null)q=u.h(0,c4)
r=q==null?c3:J.k(q)}p=B.d.dB(s,new C.eEG(r),new C.eEH(s,u))
q=t==null
o=q?c3:B.d.dB(s,new C.eEI(t),new C.eEJ(p))
q=!q
n=q&&J.z(t.h(0,"symbol"),J.t(p,c4))?t:c3
m=c2.c80(c9,c7,s,p,t)
l=C.xf(x.h(c7,"market"))
k=J.a7(p)
j=k.h(p,c4)
i=J.k(j==null?"SPY":j)
h=B.a.q(i,"/")
g=C.hiS(p)
f=C.mu(k.h(p,"price"))
e=g.length!==0?C.mu(J.t(B.d.gH(g),"c")):0
d=e===0?0:(f-e)/e*100
a0=d>=0
if(h)a1=!0
else{j=k.h(p,"open")
if(j==null)j=l.h(0,"stockOpen")
a1=j==null?l.h(0,"open"):j}if(h)a2="Crypto \xb7 trades all day, every day"
else{j=J.kC(a1)
if(j.A(a1,!0))a2="Stock market open \xb7 closes 4:00 PM ET"
else{j=j.A(a1,!1)?"Stock market closed"+c2.cLz(l.h(0,"nextOpen")):""
a2=j}}a3=C.fy1(i)
j=C.hBV(i,30)
a4=h?i:i+"/USD"
a5=c9.a
a4=A.c(a4,c3,c3,c3,c3,c3,c3,A.l(c3,c3,a5?D.ij:B.c,c3,c3,c3,c3,c3,c3,c3,c3,17,c3,c3,B.G,c3,c3,!0,c3,c3,c3,c3,c3,c3,c3,c3),c3,c3,c3)
a6=k.h(p,"name")
a6=J.k(a6==null?a3.a:a6)
a7=y.p
a6=A.A(A.a([j,B.as,a4,B.bm,new A.dc(1,B.ck,A.c(a6,c3,c3,B.a2,c3,c3,c3,A.l(c3,c3,a5?D.fD:D.fE,c3,c3,c3,c3,c3,c3,c3,c3,13,c3,c3,c3,c3,c3,!0,c3,c3,c3,c3,c3,c3,c3,c3),c3,c3,c3),c3)],a7),B.l,c3,B.e,B.h,0,c3,c3)
j=f===0?"\u2014":C.mV(f,!1,!1)
j=A.a([A.E(new A.dk(B.dv,B.a5,B.f,A.c(j,c3,c3,c3,c3,c3,c3,A.l(c3,c3,a5?D.ij:B.c,c3,c3,c3,c3,c3,c3,c3,H.SJ,42,c3,c3,B.a8,c3,c3,!0,c3,-1,c3,c3,c3,c3,c3,c3),c3,c3,c3),c3),1)],a7)
if(g.length>1){a4=(a0?D.i2:D.iF).j(0.14)
a8=A.m(10)
a9=a0?D.bSU:B.a3G
a9=A.W(a9,a0?D.i2:D.iF,c3,c3,c3,20)
b0=B.i.ac(Math.abs(d),2)
j.push(A.o(c3,A.A(A.a([a9,A.c(b0+"%",c3,c3,c3,c3,c3,c3,A.l(c3,c3,a0?D.i2:D.iF,c3,c3,c3,c3,c3,c3,c3,c3,13,c3,c3,B.G,c3,c3,!0,c3,c3,c3,c3,c3,c3,c3,c3),c3,c3,c3)],a7),B.l,c3,B.e,B.N,0,c3,c3),B.f,c3,c3,new A.n(a4,c3,c3,a8,c3,c3,B.m),c3,c3,c3,c3,B.h6,c3,c3,c3))}j=A.a([a6,B.P,A.A(j,B.l,c3,B.e,B.h,0,c3,c3)],a7)
if(a2.length!==0){if(J.z(a1,!0))a4=D.i2
else a4=a5?D.fD:D.fE
a4=A.W(B.x1,a4,c3,c3,c3,7)
a6=g.length>1?"  \xb7  change over 4H":""
B.d.u(j,A.a([B.av,A.A(A.a([a4,B.bm,new A.dc(1,B.ck,A.c(a2+a6,c3,c3,B.a2,c3,c3,c3,A.l(c3,c3,a5?D.fD:D.fE,c3,c3,c3,c3,c3,c3,c3,c3,12,c3,c3,c3,c3,c3,!0,c3,c3,c3,c3,c3,c3,c3,c3),c3,c3,c3),c3)],a7),B.l,c3,B.e,B.h,0,c3,c3)],a7))}m=A.a([m,new A.D(D.bK5,A.x(j,B.D,c3,B.e,B.h,0,B.p),c3)],a7)
j=v.h(0,"problem")
if(J.k(j==null?"":j).length!==0)m.push(c2.aat(c9,J.k(v.h(0,"problem")),B.px))
j=x.h(c7,c5)
if(J.k(j==null?"":j).length!==0)m.push(c2.aat(c9,J.k(x.h(c7,c5)),D.iF))
if(J.z(w.h(0,"brakePaused"),!0)){j=w.h(0,"brakeReason")
m.push(c2.aat(c9,"Paused by the $25 brake. "+A.v(j==null?"":j)+". Look over the trades, then press Start to turn it back on.",D.iF))}m.push(c2.bKR(c9,p,n))
m.push(c2.cIU(c9,p,t,c7))
b1=C.xf(x.h(c7,"today"))
b2=C.xf(x.h(c7,"record"))
b3=C.xf(x.h(c7,"ticket"))
b4=C.mu(w.h(0,"totalPnl"))
b5=C.mu(b1.h(0,"day_pnl"))
j=A.m(26)
a4=A.a([new A.ac(0,B.H,B.iG.j(0.3),B.eO,24)],y.V)
a6=A.A(A.a([D.h_E,B.b_,A.o(c3,D.fZW,B.f,c3,c3,new A.n(B.c.j(0.14),c3,c3,A.m(999),c3,c3,B.m),c3,c3,c3,c3,B.fx,c3,c3,c3)],a7),B.l,c3,B.e,B.h,0,c3,c3)
a8=A.c(u.h(0,"equity")==null?"\u2014":C.mV(C.mu(u.h(0,"equity")),!0,!1),c3,c3,c3,c3,c3,c3,D.fAv,c3,c3,c3)
a9=A.c("Buying power "+C.mV(C.mu(u.h(0,"buyingPower")),!0,!1)+" \xb7 the agent uses only $"+B.i.ac(C.mu(b3.h(0,c6)),0)+" a trade",c3,c3,c3,c3,c3,c3,B.Wv,c3,c3,c3)
b0=C.mV(b5,!0,!0)
if(b5>0)b6=D.i2
else b6=b5<0?D.iF:B.c
b6=A.E(c2.P_("Today",b0,b6),1)
b0=C.mV(b4,!0,!0)
if(b4>0)b7=D.i2
else b7=b4<0?D.iF:B.c
b7=A.E(c2.P_("All time",b0,b7),1)
b0=b2.h(0,"wins")
b0=A.v(b0==null?0:b0)
b8=b2.h(0,"losses")
b0=A.A(A.a([b6,B.ab,b7,B.ab,A.E(c2.P_("Wins / losses",b0+" / "+A.v(b8==null?0:b8),B.c),1)],a7),B.l,c3,B.e,B.h,0,c3,c3)
b6=b1.h(0,"trades")
b6=A.v(b6==null?0:b6)
b7=b3.h(0,"maxTradesToday")
m.push(A.o(c3,A.x(A.a([a6,B.av,new A.dk(B.dv,B.a5,B.f,a8,c3),B.bB,a9,B.aB,b0,B.P,A.A(A.a([A.E(c2.P_("Trades today",b6+" of "+A.v(b7==null?4:b7),B.c),1),B.ab,A.E(c2.P_("Daily stop","-$10",B.c),1),B.ab,A.E(c2.P_("Total brake","-$25",B.c),1)],a7),B.l,c3,B.e,B.h,0,c3,c3)],a7),B.D,c3,B.e,B.h,0,B.p),B.f,c3,c3,new A.n(c3,c3,c3,j,a4,D.c9N,B.m),c3,c3,c3,B.e8,B.fo,c3,c3,c3))
if(q){o.toString
x=c2.cqS(c9,t,o)}else{b9=C.xf(x.h(c7,"ticket"))
f=C.mu(k.h(p,"price"))
c0=C.mu(b9.h(0,c6))===0?50:C.mu(b9.h(0,c6))
x=f===0
c1=x?0:c0/f
q=A.A(A.a([A.c("Next trade",c3,c3,c3,c3,c3,c3,A.l(c3,c3,a5?D.ij:B.c,c3,c3,c3,c3,c3,c3,c3,c3,16,c3,c3,B.G,c3,c3,!0,c3,c3,c3,c3,c3,c3,c3,c3),c3,c3,c3),B.b_,c2.a0I("AUTOMATIC",B.b2)],a7),B.l,c3,B.e,B.h,0,c3,c3)
j=a5?D.akB:D.ajy
a4=A.m(999)
a6=a5?D.rR:B.c
a8=A.m(999)
a6=A.E(A.o(B.z,A.c("BUY",c3,c3,c3,c3,c3,c3,A.l(c3,c3,a5?B.c:D.rR,c3,c3,c3,c3,c3,c3,c3,c3,12.5,c3,c3,B.G,c3,c3,!0,c3,c3,c3,c3,c3,c3,c3,c3),c3,c3,c3),B.f,c3,c3,new A.n(a6,c3,c3,a8,c3,c3,B.m),c3,c3,c3,c3,B.z6,c3,c3,c3),1)
j=A.o(c3,A.A(A.a([a6,A.E(A.as(A.c("SELL",c3,c3,c3,c3,c3,c3,A.l(c3,c3,a5?D.fD:D.fE,c3,c3,c3,c3,c3,c3,c3,c3,12.5,c3,c3,B.G,c3,c3,!0,c3,c3,c3,c3,c3,c3,c3,c3),c3,c3,c3),c3,c3,c3),1)],a7),B.l,c3,B.e,B.h,0,c3,c3),B.f,c3,c3,new A.n(j,c3,c3,a4,c3,c3,B.m),c3,c3,c3,c3,B.eB,c3,c3,c3)
a4=C.mV(c0,!0,!1)
if(x)a6=c3
else{a6=B.i.ac(c1,c1<0.01?6:4)
a8=k.h(p,c4)
a6="\u2248 "+a6+" "+A.v(a8==null?"":a8)}a6=c2.cHc(c9,"Amount it puts in",a4,!0,a6)
a4=B.i.ac(C.mu(b9.h(0,"takeProfitPct")),0)
a8=C.mV(C.mu(b9.h(0,"takeProfitUsd")),!0,!1)
a9=x?c3:"sells at "+C.mV(f*1.03,!0,!1)
a9=c2.bbO(c9,"Take profit  +"+a4+"%","+"+a8,D.i2,a9)
a8=B.i.ac(C.mu(b9.h(0,"stopLossPct")),1)
a4=C.mV(C.mu(b9.h(0,"stopLossUsd")),!0,!1)
x=x?c3:"sells at "+C.mV(f*0.985,!0,!1)
x=c2.bbO(c9,"Stop loss  -"+a8+"%","-"+a4,D.iF,x)
a4=c2.cHb(c9,"Leverage","None (1x)","no borrowing, no shorting")
a8=a5?D.rR:B.c
b0=A.m(999)
a8=A.o(B.z,A.c("Buys by itself when the trend turns up",c3,c3,c3,c3,c3,c3,A.l(c3,c3,a5?B.c:D.rR,c3,c3,c3,c3,c3,c3,c3,c3,13.5,c3,c3,B.G,c3,c3,!0,c3,c3,c3,c3,c3,c3,c3,c3),c3,c3,c3),B.f,c3,c3,new A.n(a8,c3,c3,b0,c3,c3,B.m),c3,c3,c3,c3,B.cn,c3,c3,1/0)
k=k.h(p,c4)
k=A.v(k==null?"":k)
x=c2.a0H(c9,A.x(A.a([q,B.af,j,B.T,a6,a9,x,a4,B.T,a8,B.am,A.as(A.c("Shown for "+k+" at its price right now. The agent buys whichever market signals first.",c3,c3,c3,c3,c3,c3,A.l(c3,c3,a5?D.fD:D.fE,c3,c3,c3,c3,c3,c3,c3,c3,11,c3,c3,c3,c3,c3,!0,c3,c3,c3,c3,c3,c3,c3,c3),B.K,c3,c3),c3,c3,c3)],a7),B.D,c3,B.e,B.h,0,B.p))}m.push(x)
m.push(c2.cfF(c9,w))
m.push(c2.cIA(c9,c7))
m.push(c2.bEw(c9))
m.push(c2.cxf(c9,c7))
c7=J.z(v.h(0,"ordersSwitchOn"),!0)?"on":"off"
m.push(new A.D(B.hV,A.c("Version 1 is read-only: no order is ever sent to Alpaca. Order switch (ALPACA_ORDERS_ENABLED): "+c7+".",c3,c3,c3,c3,c3,c3,A.l(c3,c3,a5?D.fD:D.fE,c3,c3,c3,c3,c3,c3,c3,c3,11,c3,c3,c3,c3,c3,!0,c3,c3,c3,c3,c3,c3,c3,c3),B.K,c3,c3),c3))
return m},
c80(d,e,f,g,h){var x,w,v,u,t,s=null
if(f.length<2)return B.bM
x=new A.Y(f,new C.eEV(),A.T(f).k("Y<1>")).gL(0)
w=f.length
v=d.a
w=A.c("Watching "+w+" markets",s,s,s,s,s,s,A.l(s,s,v?D.ij:B.c,s,s,s,s,s,s,s,s,14,s,s,B.G,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)
u=this.a0I(""+x+" OPEN NOW",D.i2)
t=y.p
return new A.D(B.eI,A.x(A.a([new A.D(D.bJN,A.A(A.a([w,B.ab,u,B.b_,A.c("tap one",s,s,s,s,s,s,A.l(s,s,v?D.fD:D.fE,s,s,s,s,s,s,s,s,11,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],t),B.l,s,B.e,B.h,0,s,s),s),new A.a5(s,128,A.hM(B.f,s,new C.eEW(this,f,g,h,d),f.length,s,s,B.aM,new C.eEX(),!1),s),B.av],t),B.D,s,B.e,B.h,0,B.p),s)},
bKR(d,e,f){var x,w,v,u,t,s,r=this,q=null,p=C.hiS(e),o=p.length
if(o<2)return r.a0H(d,new A.a5(q,120,A.as(A.c("The chart appears after the first reading.",q,q,q,q,q,q,A.l(q,q,d.a?D.fD:D.fE,q,q,q,q,q,q,q,q,q,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),q,q,q),q))
x=B.d.fK(p,Math.max(0,o-r.y))
w=f==null?q:C.mu(f.h(0,"entryPrice"))
o=y.p
v=A.a([],o)
for(u=0;u<3;++u){t=D.cnd[u]
if(t<=12)s="1H"
else s=t<=24?"2H":"4H"
B.d.u(v,A.a([r.czg(d,s,r.y===t,new C.eEM(r,t)),B.bm],o))}v.push(B.b_)
v.push(r.b8t(d,"Trend lines",r.Q,new C.eEN(r),K.zU))
v=A.a([A.A(v,B.l,q,B.e,B.h,0,q,q),B.T,new C.aAB(x,d,w,r.Q,C.mu(J.t(e,"price")),q)],o)
if(r.Q){s=A.a([r.ay9(d,B.bD,"Fast line (45 min)"),r.ay9(d,B.b2,"Slow line (1 h 45 min)")],o)
if(w!=null)s.push(r.ay9(d,E.wv,"Your pretend buy"))
B.d.u(v,A.a([B.P,A.c_(B.fM,s,B.br,q,4,14)],o))}return r.aAi(d,A.x(v,B.l,q,B.e,B.h,0,B.p),B.wN)},
cIU(d,a0,a1,a2){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i=J.a7(a0),h=C.xf(i.h(a0,"chart")).h(0,"trend"),g=J.k(h==null?"unknown":h),f=C.xf(J.t(a2,"state")),e=J.z(f.h(0,"enabled"),!0)&&!J.z(f.h(0,"brakePaused"),!0)
switch(g){case"up":h=D.fa0
break
case"down":h=D.fb1
break
case"flat":h=D.f8d
break
default:h=D.f93
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
p=i}}i=A.m(22)
h=d.a
o=A.a([s.j(h?0.16:0.22),s.j(0.04)],y.O)
n=A.K(s.j(0.35),B.r,1)
m=A.m(14)
m=A.o(j,A.W(w,B.c,j,j,j,j),B.f,j,j,new A.n(s,j,j,m,j,j,B.m),j,44,j,j,j,j,j,44)
l=A.c(v,j,j,j,j,j,j,A.l(j,j,h?D.ij:B.c,j,j,j,j,j,j,j,j,16,j,j,B.u,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)
k=y.p
return A.o(j,A.A(A.a([m,B.ba,A.E(A.x(A.a([l,B.bB,A.c(p,j,j,j,j,j,j,A.l(j,j,h?D.fD:D.fE,j,j,j,j,j,j,j,j,12.5,j,j,j,j,1.3,!0,j,j,j,j,j,j,j,j),j,j,j)],k),B.D,j,B.e,B.h,0,B.p),1)],k),B.l,j,B.e,B.h,0,j,j),B.f,j,j,new A.n(j,j,n,i,j,new A.a8(B.a5,B.a9,B.x,o,j,j),B.m),j,j,j,B.e8,B.bH,j,j,j)},
P_(d,e,f){var x=null,w=B.c.j(0.1),v=A.m(14)
return A.o(x,A.x(A.a([A.c(d,x,1,B.a2,x,x,x,B.WS,x,x,x),B.bB,new A.dk(B.dv,B.a5,B.f,A.c(e,x,x,x,x,x,x,A.l(x,x,f,x,x,x,x,x,x,x,x,15,x,x,B.G,x,x,!0,x,x,x,x,x,x,x,x),x,x,x),x)],y.p),B.D,x,B.e,B.h,0,B.p),B.f,x,x,new A.n(w,x,x,v,x,x,B.m),x,x,x,x,B.an3,x,x,x)},
cqS(a1,a2,a3){var x,w,v,u,t,s,r,q,p,o=this,n=null,m=C.mu(a2.h(0,"entryPrice")),l=C.mu(a2.h(0,"qty")),k=J.a7(a3),j=J.z(a2.h(0,"symbol"),k.h(a3,"asset"))?C.mu(k.h(a3,"price")):m,i=l*j,h=i-50,g=m===0?0:(j-m)/m*100,f=h>=0,e=m*0.985,d=m*1.03,a0=B.i.D((j-e)/(d-e),0,1)
k=a1.a
x=y.p
w=A.A(A.a([A.c("Your pretend position",n,n,n,n,n,n,A.l(n,n,k?D.ij:B.c,n,n,n,n,n,n,n,n,16,n,n,B.G,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),B.b_,o.a0I("OPEN",D.i2)],x),B.l,n,B.e,B.h,0,n,n)
v=C.mV(h,!0,!0)
v=A.c(v,n,n,n,n,n,n,A.l(n,n,f?D.i2:D.iF,n,n,n,n,n,n,n,n,34,n,n,B.G,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
u=g>=0?"+":""
t=B.i.ac(g,2)
v=A.A(A.a([v,B.ab,new A.D(B.eI,A.c(u+t+"%",n,n,n,n,n,n,A.l(n,n,f?D.i2:D.iF,n,n,n,n,n,n,n,n,n,n,n,B.G,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),n)],x),B.dK,n,B.e,B.h,0,n,n)
u=f?"You would be winning right now":"You would be losing right now"
u=A.c(u,n,n,n,n,n,n,A.l(n,n,k?D.fD:D.fE,n,n,n,n,n,n,n,n,12.5,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
t=A.E(o.aAk(a1,"You put in",C.mV(50,!0,!1)),1)
s=C.mV(i,!0,!1)
t=A.A(A.a([t,B.ab,A.E(o.b2U(a1,"Worth now",s,f?D.i2:D.iF),1)],x),B.l,n,B.e,B.h,0,n,n)
s=A.E(o.aAk(a1,"Bought at",C.mV(m,!0,!1)),1)
s=A.A(A.a([s,B.ab,A.E(o.aAk(a1,"Shares",B.i.ac(l,l<0.01?6:4)+" "+A.v(a2.h(0,"symbol"))),1)],x),B.l,n,B.e,B.h,0,n,n)
r=A.cf(new C.eEY(a1,a0))
q=A.A(A.a([A.E(A.c("Stop loss\n"+C.mV(e,!0,!1)+" \xb7 -$0.75",n,n,n,n,n,n,D.fGo,n,n,n),1),A.E(A.c("Take profit\n"+C.mV(d,!0,!1)+" \xb7 +$1.50",n,n,n,n,n,n,D.fEZ,B.e1,n,n),1)],x),B.l,n,B.e,B.h,0,n,n)
p=C.idz(a2.h(0,"entryAt"))
return o.a0H(a1,A.x(A.a([w,B.af,v,u,B.aB,t,B.P,s,B.aO,r,B.am,q,B.am,A.c("Bought "+p,n,n,n,n,n,n,A.l(n,n,k?D.fD:D.fE,n,n,n,n,n,n,n,n,11.5,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],x),B.D,n,B.e,B.h,0,B.p))},
aEj(d,e,f,g,h,i){var x,w,v=null,u=d.a,t=u?D.all:D.alo,s=A.m(16),r=A.c(e,v,v,v,v,v,v,A.l(v,v,u?D.fD:D.fE,v,v,v,v,v,v,v,v,11.5,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
if(h==null)x=u?D.ij:B.c
else x=h
w=y.p
w=A.a([A.E(A.x(A.a([r,B.bB,A.c(f,v,v,v,v,v,v,A.l(v,v,x,v,v,v,v,v,v,v,v,g?24:17,v,v,B.G,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],w),B.D,v,B.e,B.h,0,B.p),1)],w)
if(i!=null)w.push(A.c(i,v,v,v,v,v,v,A.l(v,v,u?D.fD:D.fE,v,v,v,v,v,v,v,v,11.5,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v))
return A.o(v,A.A(w,B.l,v,B.e,B.h,0,v,v),B.f,v,v,new A.n(t,v,v,s,v,v,B.m),v,v,v,B.jx,B.eR,v,v,v)},
cHc(d,e,f,g,h){return this.aEj(d,e,f,g,null,h)},
bbO(d,e,f,g,h){return this.aEj(d,e,f,!1,g,h)},
cHb(d,e,f,g){return this.aEj(d,e,f,!1,null,g)},
cfF(d,e){var x,w,v,u=this,t=null,s=J.z(e.h(0,"enabled"),!0)&&!J.z(e.h(0,"brakePaused"),!0),r=s?D.iF:D.i2
r=A.bn(r,t,t,t,t,t,t,t,new A.ba(A.m(999),B.a1),t,t,t)
x=u.r?t:new C.eEQ(u,s)
w=A.W(s?B.xe:B.h9,t,t,t,t,t)
r=A.E(new A.a5(t,52,A.db(w,t,A.c(s?"Stop agent":"Start agent",t,t,t,t,t,t,B.nk,t,t,t),x,r),t),3)
x=d.a
w=x?D.ij:B.c
v=x?D.a_d:D.ZX
x=x?B.c.j(0.92):D.Gf
v=A.di(t,t,x,t,t,t,t,t,t,w,t,t,t,t,new A.ba(A.m(999),B.a1),new A.aw(v,1.5,B.r,-1),t,t,t,t)
x=u.r
w=x?t:u.gbL6()
return new A.D(B.e8,A.A(A.a([r,B.as,A.E(new A.a5(t,52,A.eo(x?B.L0:D.c4n,t,D.h9i,w,v),t),2)],y.p),B.l,t,B.e,B.h,0,t,t),t)},
cIA(a7,a8){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=null,a5="outValue",a6=y.g.a(J.t(a8,"trades"))
if(a6==null)a6=B.cm
x=y.f
a6=J.d3(a6,x)
a6=A.cE(a6,new C.eF6(),a6.$ti.k("M.E"),y.P)
w=A.B(a6,A.a4(a6).k("M.E"))
a6=a7.a
v=y.p
u=A.a([A.c("Pretend trades",a4,a4,a4,a4,a4,a4,A.l(a4,a4,a6?D.ij:B.c,a4,a4,a4,a4,a4,a4,a4,a4,16,a4,a4,B.G,a4,a4,!0,a4,a4,a4,a4,a4,a4,a4,a4),a4,a4,a4),B.P],v)
if(w.length===0){t=A.W(B.fT,a6?D.fD:D.fE,a4,a4,a4,a4)
u.push(new A.D(B.cn,A.A(A.a([t,B.as,A.E(A.c("No trades yet. Each buy shows the $50 put in, and each sell shows what came back and the win or loss.",a4,a4,a4,a4,a4,a4,A.l(a4,a4,a6?D.fD:D.fE,a4,a4,a4,a4,a4,a4,a4,a4,12.5,a4,a4,a4,a4,1.3,!0,a4,a4,a4,a4,a4,a4,a4,a4),a4,a4,a4),1)],v),B.l,a4,B.e,B.h,0,a4,a4),a4))}for(t=w.length,s=y.N,r=y.z,q=0;q<w.length;w.length===t||(0,A.I)(w),++q){p=w[q]
o=J.a7(p)
n=J.z(o.h(p,"decision"),"would buy")
m=o.h(p,"details")
l=x.b(m)?A.a1(m,s,r):A.S(s,r)
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
else f=g?D.i2:D.iF
m=a6?D.a_d:D.ZX
e=f.j(0.14)
d=new A.aP(13,13)
e=A.o(a4,A.W(n?B.vm:B.tw,f,a4,a4,a4,20),B.f,a4,a4,new A.n(e,a4,a4,new A.be(d,d,d,d),a4,a4,B.m),a4,40,a4,a4,a4,a4,a4,40)
d=n?"Bought":"Sold"
a0=a6?D.ij:B.c
d=A.c(d+" "+k,a4,a4,a4,a4,a4,a4,new A.F(!0,a0,a4,a4,a4,a4,14,B.G,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4),a4,a4,a4)
if(n){if(i===0)a0=""
else a0=B.i.ac(i,i<0.01?6:4)+" at "
a1=o.h(p,"price")
if(!(typeof a1=="number")){a1=A.cG(A.v(a1==null?"":a1))
if(a1==null)a1=0}a1=a0+C.mV(a1,!0,!1)
a0=a1}else{a0=o.h(p,"price")
if(!(typeof a0=="number")){a0=A.cG(A.v(a0==null?"":a0))
if(a0==null)a0=0}a0=C.mV(a0,!0,!1)
a1=o.h(p,"reason")
a1=J.k(a1==null?"":a1)
a2=B.a.ce(a1,"(")
a0="at "+a0+" \xb7 "+B.a.i(a2>0?B.a.az(a1,0,a2):a1)}a1=a6?D.fD:D.fE
a0=A.c(a0,a4,1,B.a2,a4,a4,a4,new A.F(!0,a1,a4,a4,a4,a4,11.5,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4),a4,a4,a4)
o=o.h(p,"et_time")
o=J.k(o==null?"":o)
a1=a6?D.fD:D.fE
o=A.x(A.a([d,B.bB,a0,A.c(o,a4,a4,a4,a4,a4,a4,new A.F(!0,a1,a4,a4,a4,a4,10.5,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4),a4,a4,a4)],v),B.D,a4,B.e,B.h,0,B.p)
if(n)d="-"+C.mV(j,!0,!1)
else{if(l.h(0,a5)==null)d=j+h
else{d=l.h(0,a5)
if(!(typeof d=="number")){d=A.cG(A.v(d==null?"":d))
if(d==null)d=0}}d="+"+C.mV(d,!0,!1)}a0=a6?D.ij:B.c
d=A.a([A.c(d,a4,a4,a4,a4,a4,a4,new A.F(!0,a0,a4,a4,a4,a4,14,B.G,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4),a4,a4,a4)],v)
if(!n){a0=C.mV(h,!0,!0)
if(l.h(0,"pct")==null)a1=""
else{a1=l.h(0,"pct")
if(!(typeof a1=="number")){a1=A.cG(A.v(a1==null?"":a1))
if(a1==null)a1=0}a1=a1>=0?"+":""
a3=l.h(0,"pct")
if(!(typeof a3=="number")){a3=A.cG(A.v(a3==null?"":a3))
if(a3==null)a3=0}a3=" ("+a1+B.i.ac(a3,2)+"%)"
a1=a3}a3=g?D.i2:D.iF
d.push(A.c(a0+a1,a4,a4,a4,a4,a4,a4,new A.F(!0,a3,a4,a4,a4,a4,12,B.G,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4),a4,a4,a4))}if(n){a0=a6?D.fD:D.fE
d.push(A.c("put in",a4,a4,a4,a4,a4,a4,new A.F(!0,a0,a4,a4,a4,a4,11,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4),a4,a4,a4))}u.push(A.o(a4,new A.c6(B.aM,B.e,B.h,B.l,a4,B.p,a4,0,A.a([e,B.ba,new A.bz(1,B.bd,o,a4),B.ab,A.x(d,B.dK,a4,B.e,B.h,0,B.p)],v),a4),B.f,a4,a4,new A.n(a4,a4,new A.bF(B.a1,B.a1,new A.aw(m,1,B.r,-1),B.a1),a4,a4,a4,B.m),a4,a4,a4,a4,B.jQ,a4,a4,a4))}return this.a0H(a7,A.x(u,B.D,a4,B.e,B.h,0,B.p))},
bEw(d){var x,w,v,u=this,t=null,s=u.x,r=u.e
r=s?r:A.cV(r,0,A.dy(8,"count",y.S),A.T(r).c).dq(0)
s=d.a
x=A.c("Agent activity",t,t,t,t,t,t,A.l(t,t,s?D.ij:B.c,t,t,t,t,t,t,t,t,16,t,t,B.G,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)
w=y.p
w=A.a([A.A(A.a([x,B.b_,A.c("newest first",t,t,t,t,t,t,A.l(t,t,s?D.fD:D.fE,t,t,t,t,t,t,t,t,11,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],w),B.l,t,B.e,B.h,0,t,t),B.am],w)
if(u.e.length===0)w.push(new A.D(B.f6,A.c("Nothing yet. A new line appears with every 15-minute check.",t,t,t,t,t,t,A.l(t,t,s?D.fD:D.fE,t,t,t,t,t,t,t,t,12.5,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),t))
for(s=r.length,v=0;v<r.length;r.length===s||(0,A.I)(r),++v)w.push(u.c6O(d,r[v]))
if(u.e.length>8){if(u.x)s=u.w?"Show older":"That is everything"
else s="Show all"
w.push(A.as(A.bO(!1,A.c(s,t,t,t,t,t,t,t,t,t,t),t,t,!0,t,t,t,new C.eEF(u),t,t),t,t,t))}return u.a0H(d,A.x(w,B.D,t,B.e,B.h,0,B.p))},
c6O(d,e){var x,w,v,u,t,s=null,r="price",q=J.a7(e),p=q.h(e,"decision"),o=J.k(p==null?"":p)
A:{if("would buy"===o){p=D.i2
break A}if("would sell"===o){p=B.bD
break A}if("hold"===o){p=B.b2
break A}if("day start"===o||"day end"===o){p=B.ce
break A}if("start"===o){p=D.i2
break A}if("stop"===o){p=D.iF
break A}if(J.z(q.h(e,"kind"),"error"))p=D.iF
else p=d.a?D.fD:D.fE
break A}x=q.h(e,"fast_ma")!=null&&q.h(e,"slow_ma")!=null
w=A.o(s,s,B.f,s,s,new A.n(p,s,s,s,s,s,B.a6),s,8,s,B.a1k,s,s,s,8)
p=A.c(C.hBJ(o),s,s,s,s,s,s,A.l(s,s,p,s,s,s,s,s,s,s,s,12.5,s,s,B.G,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)
v=q.h(e,"et_time")
v=C.ik2(J.k(v==null?"":v))
u=d.a
t=y.p
v=A.A(A.a([p,B.b_,A.c(v,s,s,s,s,s,s,A.l(s,s,u?D.fD:D.fE,s,s,s,s,s,s,s,s,10.5,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],t),B.l,s,B.e,B.h,0,s,s)
p=q.h(e,"reason")
p=C.hBJ(J.k(p==null?"":p))
p=A.a([v,A.c(p,s,s,s,s,s,s,A.l(s,s,u?D.ij:B.c,s,s,s,s,s,s,s,s,12.5,s,s,s,s,1.3,!0,s,s,s,s,s,s,s,s),s,s,s)],t)
if(q.h(e,r)!=null||x){v=A.a([],y.s)
if(q.h(e,"asset")!=null&&q.h(e,r)!=null)v.push(A.v(q.h(e,"asset"))+" "+C.mV(C.mu(q.h(e,r)),!0,!1))
if(x)v.push("fast "+B.i.ac(C.mu(q.h(e,"fast_ma")),2)+" \xb7 slow "+B.i.ac(C.mu(q.h(e,"slow_ma")),2))
q=B.d.aN(v,"  \xb7  ")
p.push(A.c(q,s,s,s,s,s,s,A.l(s,s,u?D.fD:D.fE,s,s,s,s,s,s,s,s,10.5,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s))}return new A.D(B.Hn,A.A(A.a([w,B.as,A.E(A.x(p,B.D,s,B.e,B.h,0,B.p),1)],t),B.D,s,B.e,B.h,0,s,s),s)},
cxf(d,e){var x,w,v,u,t,s,r,q,p,o,n,m=null,l=this.c
l.toString
l=A.O(l).bg2(B.L)
x=d.a
w=x?D.ij:B.c
v=x?D.fD:D.fE
u=A.W(D.bVd,B.b2,m,m,m,m)
t=A.c("The rules it follows",m,m,m,m,m,m,A.l(m,m,x?D.ij:B.c,m,m,m,m,m,m,m,m,14.5,m,m,B.G,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)
s=A.c("Read-only, set in the code",m,m,m,m,m,m,A.l(m,m,x?D.fD:D.fE,m,m,m,m,m,m,m,m,11.5,m,m,m,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)
r=y.p
q=A.a([],r)
p=y.g.a(J.t(e,"rules"))
p=J.aT(p==null?B.cm:p)
while(p.C()){o=J.k(p.gP(p))
n=x?D.ij:B.c
q.push(new A.D(D.bDY,new A.c6(B.aM,B.e,B.h,B.D,m,B.p,m,0,A.a([D.ezj,B.ab,new A.bz(1,B.bd,A.c(o,m,m,m,m,m,m,new A.F(!0,n,m,m,m,m,12.5,m,m,m,m,m,1.35,m,m,m,m,m,m,m,m,m,m,m,m,m),m,m,m),m)],r),m),m))}return this.aAi(d,new A.oX(l,A.aF(!1,B.a3,!0,m,I.hqL(m,q,F.anz,m,v,w,!1,u,m,s,B.h7,t),B.f,m,0,m,m,m,m,m,B.i8),m),B.ag)},
aAi(d,e,f){var x=null,w=d.a,v=w?B.c.j(0.92):D.Gf,u=A.m(24)
return A.o(x,e,B.f,x,x,new A.n(v,x,A.K(w?B.c:D.a_F,B.r,1),u,A.a([new A.ac(0,B.H,d.gaNK(),B.dm,24)],y.V),x,B.m),x,x,x,B.e8,f,x,x,x)},
a0H(d,e){return this.aAi(d,e,B.bS)},
aat(d,e,f){var x=null,w=f.j(0.12),v=A.m(16),u=A.K(f.j(0.45),B.r,1),t=A.W(B.a49,f,x,x,x,20)
return A.o(x,A.A(A.a([t,B.as,A.E(A.c(e,x,x,x,x,x,x,A.l(x,x,d.a?D.ij:B.c,x,x,x,x,x,x,x,x,12.5,x,x,x,x,1.35,!0,x,x,x,x,x,x,x,x),x,x,x),1)],y.p),B.l,x,B.e,B.h,0,x,x),B.f,x,x,new A.n(w,x,u,v,x,x,B.m),x,x,x,B.e8,B.bk,x,x,x)},
b2S(d,e,f){var x=null,w=d.a,v=w?B.c.j(0.92):D.Gf,u=A.K(w?B.c:D.a_F,B.r,1)
return A.aF(!1,B.a3,!0,x,A.aM(!1,x,!0,A.o(x,A.W(e,w?D.ij:B.c,x,x,x,18),B.f,x,x,new A.n(x,x,u,x,x,x,B.a6),x,40,x,x,x,x,x,40),B.cQ,!0,x,x,x,x,x,x,x,x,x,x,x,f,x,x,x,x,x,x,x),B.f,v,0,x,x,B.cQ,x,x,B.aj)},
b8t(d,e,f,g,h){var x,w,v,u,t,s,r,q=null
if(f){x=d.a
w=x?D.rR:B.c
v=w
w=x
x=v}else{x=d.a
w=x?D.akB:D.ajy
v=w
w=x
x=v}u=A.m(999)
t=y.p
s=A.a([],t)
if(h!=null){if(f)r=w?B.c:D.rR
else r=w?D.fD:D.fE
B.d.u(s,A.a([A.W(h,r,q,q,q,14),B.db],t))}if(f)w=w?B.c:D.rR
else w=w?D.fD:D.fE
s.push(A.c(e,q,q,q,q,q,q,A.l(q,q,w,q,q,q,q,q,q,q,q,11.5,q,q,B.O,q,q,!0,q,q,q,q,q,q,q,q),q,q,q))
return A.ay(q,A.cU(q,A.A(s,B.l,q,B.e,B.N,0,q,q),q,q,B.b0,new A.n(x,q,q,u,q,q,B.m),B.eD,q,q,q,q,G.a1p,q,q,q),B.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,g,q,q,q,q,q,q,!1,B.a4)},
czg(d,e,f,g){return this.b8t(d,e,f,g,null)},
ay9(d,e,f){var x=null,w=A.o(x,x,B.f,x,x,new A.n(e,x,x,A.m(2),x,x,B.m),x,3,x,x,x,x,x,14)
return A.A(A.a([w,B.e3,A.c(f,x,x,x,x,x,x,A.l(x,x,d.a?D.fD:D.fE,x,x,x,x,x,x,x,x,11,x,x,x,x,x,!0,x,x,x,x,x,x,x,x),x,x,x)],y.p),B.l,x,B.e,B.N,0,x,x)},
a0I(d,e){var x=null,w=e.j(0.14),v=A.m(999)
return A.o(x,A.c(d,x,x,x,x,x,x,A.l(x,x,e,x,x,x,x,x,x,x,x,10,x,x,B.u,x,x,!0,x,0.6,x,x,x,x,x,x),x,x,x),B.f,x,x,new A.n(w,x,x,v,x,x,B.m),x,x,x,x,B.fx,x,x,x)},
b2U(d,e,f,g){var x=null,w=d.a,v=w?D.all:D.alo,u=A.m(16),t=A.c(e,x,x,x,x,x,x,A.l(x,x,w?D.fD:D.fE,x,x,x,x,x,x,x,x,11.5,x,x,x,x,x,!0,x,x,x,x,x,x,x,x),x,x,x)
if(g==null)w=w?D.ij:B.c
else w=g
return A.o(x,A.x(A.a([t,B.cT,new A.dk(B.dv,B.a5,B.f,A.c(f,x,x,x,x,x,x,A.l(x,x,w,x,x,x,x,x,x,x,x,16,x,x,B.G,x,x,!0,x,x,x,x,x,x,x,x),x,x,x),x)],y.p),B.D,x,B.e,B.h,0,B.p),B.f,x,x,new A.n(v,x,x,u,x,x,B.m),x,x,x,x,B.bk,x,x,x)},
aAk(d,e,f){return this.b2U(d,e,f,null)},
cLz(d){var x=A.v(d==null?"":d),w=A.bi(x.length>=19?B.a.az(x,0,19):"")
if(w==null)return""
return" \xb7 opens "+B.SY[A.lA(w)-1]+" "+C.fsW(w)+" ET"}}
C.aAB.prototype={
T(){return new C.bdQ()}}
C.bdQ.prototype={
aAj(d,e){var x=this,w=x.a.c.length,v=B.o.D(B.i.be(d.a/e*w),0,w-1)
if(v!==x.d)x.l(new C.cW9(x,v))},
B(d){return A.cf(new C.cWi(this))}}
C.bdR.prototype={
a2(c9,d0){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2=this,c3=null,c4={},c5=d0.b,c6=c5-18,c7=y.n,c8=A.a([],c7)
for(x=c2.c,w=x.length,v=0;u=x.length,v<u;x.length===w||(0,A.I)(x),++v){t=x[v]
u=J.a7(t)
s=u.h(t,"h")
if(!(typeof s=="number")){s=A.cG(A.v(s==null?"":s))
if(s==null)s=0}u=u.h(t,"l")
if(!(typeof u=="number")){u=A.cG(A.v(u==null?"":u))
if(u==null)u=0}B.d.u(c8,A.a([s,u],c7))}w=c2.f
if(w)for(v=0;v<x.length;x.length===u||(0,A.I)(x),++v){t=x[v]
s=A.a([],c7)
r=J.a7(t)
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
c4.a=B.d.eD(c8,B.pl)
p=c4.b=B.d.eD(c8,B.oj)
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
k=new C.cWj(l)
j=new C.cWl(c4,c6)
$.R()
i=A.L()
q=c2.d.a
i.r=(q?D.a_d:D.ZX).j(0.7).gp(0)
i.c=1
for(h=1;h<=3;++h){g=c6*h/4
for(f=0;f<c8;f+=6)c9.ah(new A.r(f,g),new A.r(f+2,g),i)}if(w){w=new C.cWk(c2,m,k,j,c9)
w.$2("s",B.b2)
w.$2("f",B.bD)}for(w=Math.max(2,l*0.62)/2,e=c2.w,d=e!=null,h=0;h<m;++h){t=x[h]
a0=J.a7(t)
a1=a0.h(t,"o")
if(!(typeof a1=="number")){a2=A.cG(A.v(a1==null?"":a1))
a1=a2==null?0:a2}a3=a0.h(t,"c")
if(!(typeof a3=="number")){a2=A.cG(A.v(a3==null?"":a3))
a3=a2==null?0:a2}a4=a0.h(t,"h")
if(!(typeof a4=="number")){a2=A.cG(A.v(a4==null?"":a4))
a4=a2==null?0:a2}a5=a0.h(t,"l")
if(!(typeof a5=="number")){a0=A.cG(A.v(a5==null?"":a5))
a5=a0==null?0:a0}a6=a3>=a1?D.i2:B.px
a7=d&&e!==h
$.R()
a8=new A.ar(B.S,B.Q,B.V,B.W,B.U)
a8.r=(a7?a6.j(0.45):a6).gp(0)
a0=k.$1(h)
a2=j.$1(a4)
a9=k.$1(h)
b0=j.$1(a5)
a8.c=1.4
c9.ah(new A.r(a0,a2),new A.r(a9,b0),a8)
b1=j.$1(Math.max(a1,a3))
b2=j.$1(Math.min(a1,a3))
b0=A.bu(new A.a2(k.$1(h)-w,b1,k.$1(h)+w,Math.max(b2,b1+1.5)),B.hw)
a8.b=B.Q
c9.aq(b0,a8)}if(u)c2.aU2(c9,j.$1(c7),c8,E.wv,"Buy "+C.mV(c7,!0,!1),!0)
if(r){c7=j.$1(s)
c2.bOG(c9,c7,c8,(q?D.ij:B.c).j(0.55),C.mV(s,!0,!1))}b3=A.fs(c3,B.cw,c3,c3,c3,c3,B.a7,B.bW,c3,B.dD,B.bX)
for(c7=[0,m/3|0,B.o.ar(2*m,3),m-1],w=c7.length,c5-=13,u=c2.b,v=0;v<w;++v){h=c7[v]
s=J.t(x[h],"t")
b4=A.bi(A.v(s==null?"":s))
if(b4==null)continue
s=C.fsW(C.hjA(b4))
r=q?D.fD:D.fE
b3.sb2(0,new A.es(s,c3,c3,B.cM,c3,c3,c3,c3,c3,c3,new A.F(!0,r,c3,u,c3,c3,10,c3,c3,c3,c3,c3,c3,c3,c3,c3,c3,c3,c3,c3,c3,c3,c3,c3,c3,c3)))
b3.e5()
s=k.$1(h)
r=b3.b.c
b3.a2(c9,new A.r(B.i.D(s-r/2,0,c8-r),c5))}if(d&&e<m){t=x[e]
f=k.$1(e)
c5=J.a7(t)
b5=j.$1(C.mu(c5.h(t,"c")))
$.R()
b6=A.L()
b6.r=(q?D.ij:B.c).j(0.5).gp(0)
b6.c=1
for(b7=0;b7<c6;b7+=6)c9.ah(new A.r(f,b7),new A.r(f,b7+3),b6)
$.R()
c7=A.L()
c7.r=(q?B.c.j(0.92):D.Gf).gp(0)
c9.O(new A.r(f,b5),6,c7)
c7=A.L()
c7.r=(q?D.ij:B.c).gp(0)
c7.b=B.aa
c7.c=2.5
c9.O(new A.r(f,b5),6,c7)
c7=c5.h(t,"t")
b4=A.bi(A.v(c7==null?"":c7))
c7=b4==null?"":C.fsW(C.hjA(b4))+" ET\n"
c5=C.mV(C.mu(c5.h(t,"c")),!0,!1)
b3.sb2(0,A.cR(c3,c3,c3,c3,c3,c3,c3,c3,c3,A.l(c3,c3,q?B.c:D.rR,c3,c3,c3,c3,c3,u,c3,c3,11.5,c3,c3,B.G,c3,1.3,!0,c3,c3,c3,c3,c3,c3,c3,c3),c7+c5))
b3.sD7(0,B.K)
b3.e5()
c5=b3.b
b8=c5.c+18
c5=c5.a.c
b9=c5.gb9(c5)+10
c0=B.i.D(f-b8/2,0,c8-b8)
c1=Math.max(0,b5-b9-14)
c8=A.bu(new A.a2(c0,c1,c0+b8,c1+b9),B.hK)
c5=A.L()
c5.r=(q?D.rR:B.c).gp(0)
c9.aq(c8,c5)
b3.a2(c9,new A.r(c0+9,c1+5))}},
aU2(d,e,f,g,h,i){var x,w,v,u,t,s,r,q,p,o,n=null
$.R()
x=A.L()
x.r=g.gp(0)
x.c=1.2
for(w=0;w<f;w+=7)d.ah(new A.r(w,e),new A.r(w+3.5,e),x)
v=A.fs(n,B.cw,n,n,n,A.cR(n,n,n,n,n,n,n,n,n,A.l(n,n,B.c,n,n,n,n,n,this.b,n,n,10,n,n,B.G,n,n,!0,n,n,n,n,n,n,n,n),h),B.a7,B.bW,n,B.dD,B.bX)
v.e5()
u=v.b
t=u.c+12
u=u.a.c
s=u.gb9(u)+6
r=i?0:f-t
u=e-s/2
q=A.bu(new A.a2(r,u,r+t,u+s),B.q2)
$.R()
p=A.L()
if(i)o=E.wv
else o=this.d.a?D.rR:B.c
p.r=o.gp(0)
d.aq(q,p)
v.a2(d,new A.r(r+6,u+3))},
bOG(d,e,f,g,h){return this.aU2(d,e,f,g,h,!1)},
aD(d){var x=this
return d.c!==x.c||d.w!=x.w||d.f!==x.f||d.e!=x.e||d.r!==x.r||d.d.a!==x.d.a}}
C.bvH.prototype={
a2(d,e){var x,w,v,u,t,s,r,q,p,o,n=null,m=this.b
if(m.length<2)return
x=A.T(m).k("N<1,G>")
w=A.B(new A.N(m,new C.feo(),x),x.k("ak.E"))
v=B.d.eD(w,B.pl)
u=B.d.eD(w,B.oj)-v
if(u<1e-9)u=1
m=$.R()
x=A.a([],y.v)
t=new A.aG(m.r,B.ai,n,n,x)
for(m=e.a,s=e.b,r=0;q=w.length,r<q;++r){q=r/(q-1)*m
p=s-(w[r]-v)/u*s
if(r===0){q=new A.aZ(q,p)
x.push(q)
p=t.f
if(p!=null)q.aj(p)
t.ab()}else{q=new A.aq(q,p)
x.push(q)
p=t.f
if(p!=null)q.aj(p)
t.ab()}}o=A.zG(t)
o.E(new A.aq(m,s))
o.E(new A.aq(0,s))
o.E(new A.bx())
$.R()
x=A.L()
q=this.c
x.sam(new A.a8(B.aX,B.b4,B.x,A.a([q.j(0.25),q.j(0)],y.O),n,n).aA(0,new A.a2(0,0,0+m,0+s)))
d.af(o,x)
x=A.L()
x.r=q.gp(0)
x.b=B.aa
x.c=1.8
x.e=B.dM
d.af(t,x)
x=B.d.gal(w)
p=A.L()
p.r=q.gp(0)
d.O(new A.r(m,s-(x-v)/u*s),3,p)},
aD(d){return d.b!==this.b||!d.c.A(0,this.c)}}
C.yS.prototype={}
C.f0Q.prototype={
gaNK(){return this.a?B.ce.j(0.08):B.w.j(0.35)}}
var z=a.updateTypes(["aA<~>()"])
C.eF8.prototype={
$1(d){this.a.Bj(!0)
return null},
$S:12}
C.eEZ.prototype={
$0(){var x=this.a,w=x.f=!1,v=this.b,u=v==null
if(!u?J.z(J.t(v,"ok"),!0):w){x.d=v
x.as=null}else{w=u?null:J.t(v,"error")
x.as=J.k(w==null?"Could not reach the server. Pull down to try again.":w)
if(!J.z(u?null:J.t(v,"ownerOnly"),!0))w=J.z(u?null:J.t(v,"setupNeeded"),!0)
else w=!0
if(w)x.d=null}},
$S:0}
C.eER.prototype={
$1(d){return A.a1(d,y.N,y.z)},
$S:25}
C.eES.prototype={
$0(){var x,w,v=this,u=v.a
if(v.b){x=A.B(u.e,y.P)
w=v.c
B.d.u(x,w)}else{x=v.c
w=x}u.e=x
u.w=w.length>=100},
$S:0}
C.eF1.prototype={
$1(d){var x=null
return A.ek(A.a([A.bO(!1,B.dp,x,x,!0,x,x,x,new C.eF_(d),x,x),A.bJ(D.hcq,x,new C.eF0(d),x)],y.p),x,x,x,D.fQA,x,x,x,x,D.fUF,x)},
$S:18}
C.eF_.prototype={
$0(){A.a6(this.a,!1).N(!1)
return null},
$S:0}
C.eF0.prototype={
$0(){A.a6(this.a,!1).N(!0)
return null},
$S:0}
C.eF2.prototype={
$0(){return this.a.r=!0},
$S:0}
C.eF3.prototype={
$0(){return this.a.r=!1},
$S:0}
C.eEO.prototype={
$0(){return this.a.r=!0},
$S:0}
C.eEP.prototype={
$0(){return this.a.r=!1},
$S:0}
C.eF7.prototype={
$0(){return this.a.Bj(!0)},
$S:1}
C.eF4.prototype={
$0(){var x=this.a.c
x.toString
return A.b_K(x)},
$S:0}
C.eF5.prototype={
$0(){return this.a.Bj(!0)},
$S:0}
C.eEG.prototype={
$1(d){return J.z(J.t(d,"asset"),this.a)},
$S:4}
C.eEH.prototype={
$0(){var x=this.a
return x.length===0?this.b:B.d.gH(x)},
$S:267}
C.eEI.prototype={
$1(d){return J.z(J.t(d,"asset"),this.a.h(0,"symbol"))},
$S:4}
C.eEJ.prototype={
$0(){return this.a},
$S:267}
C.eEV.prototype={
$1(d){return J.z(J.t(d,"open"),!0)},
$S:4}
C.eEX.prototype={
$2(d,e){return B.as},
$S:38}
C.eEW.prototype={
$2(d,a0){var x,w,v,u,t,s,r,q,p=this,o=null,n=p.b[a0],m=J.a7(n),l=J.k(m.h(n,"asset")),k=l===J.t(p.c,"asset"),j=C.mu(m.h(n,"changePct")),i=j>=0,h=C.hiS(n),g=p.d,f=J.z(g==null?o:g.h(0,"symbol"),l),e=J.z(C.xf(m.h(n,"chart")).h(0,"signal"),"buy")
g=p.a
x=p.e
w=x.a
v=w?B.c.j(0.92):D.Gf
u=A.m(20)
if(k)t=C.fy1(l).c
else t=w?B.c:D.a_F
t=A.K(t,B.r,k?2:1)
x=k?C.fy1(l).c.j(0.25):x.gaNK()
x=A.a([new A.ac(0,B.H,x,B.cz,k?18:12)],y.V)
s=C.hBV(l,20)
r=y.p
s=A.a([s,B.bm,A.E(A.c(l,o,1,B.a2,o,o,o,A.l(o,o,w?D.ij:B.c,o,o,o,o,o,o,o,o,12,o,o,B.G,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),1)],r)
if(!J.z(m.h(n,"open"),!0))s.push(A.c("closed",o,o,o,o,o,o,A.l(o,o,w?D.fD:D.fE,o,o,o,o,o,o,o,o,9.5,o,o,B.O,o,o,!0,o,o,o,o,o,o,o,o),o,o,o))
s=A.A(s,B.l,o,B.e,B.h,0,o,o)
m=C.mV(C.mu(m.h(n,"price")),!0,!1)
m=A.c(m,o,o,o,o,o,o,A.l(o,o,w?D.ij:B.c,o,o,o,o,o,o,o,o,17,o,o,B.O,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)
w=i?"+":""
q=B.i.ac(j,2)
w=A.a([A.c(w+q+"%",o,o,o,o,o,o,A.l(o,o,i?D.i2:D.iF,o,o,o,o,o,o,o,o,11,o,o,B.G,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),B.b_],r)
if(f)w.push(g.a0I("HOLDING",E.wv))
else if(e)w.push(g.a0I("BUY SIGNAL",D.i2))
w=A.A(w,B.l,o,B.e,B.h,0,o,o)
return A.ay(o,A.cU(o,A.x(A.a([s,B.am,new A.dk(B.dv,B.a5,B.f,m,o),w,B.av,A.E(A.b4(o,o,o,new C.bvH(h,i?D.i2:D.iF,o),B.fW),1)],r),B.D,o,B.e,B.h,0,B.p),o,o,B.b0,new A.n(v,o,t,u,x,o,B.m),B.a3,o,o,o,o,B.an8,o,o,150),B.y,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,new C.eEU(g,l),o,o,o,o,o,o,!1,B.a4)},
$S:85}
C.eEU.prototype={
$0(){var x=this.a
return x.l(new C.eET(x,this.b))},
$S:0}
C.eET.prototype={
$0(){return this.a.z=this.b},
$S:0}
C.eEM.prototype={
$0(){var x=this.a
return x.l(new C.eEL(x,this.b))},
$S:0}
C.eEL.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.eEN.prototype={
$0(){var x=this.a
return x.l(new C.eEK(x))},
$S:0}
C.eEK.prototype={
$0(){var x=this.a
return x.Q=!x.Q},
$S:0}
C.eEY.prototype={
$2(d,e){var x=null,w=e.b,v=A.ao(x,A.o(x,x,B.f,x,x,new A.n(x,x,x,A.m(99),x,D.cby,B.m),x,8,x,x,x,x,x,x),x,x,0,0,9,x),u=this.a.a,t=A.ao(x,A.o(x,x,B.f,(u?D.ij:B.c).j(0.5),x,x,x,18,x,x,x,x,x,2),x,x,w/3-1,x,4,x),s=B.i.D(this.b*w-9,0,w-18)
return new A.a5(x,26,new A.an(B.a0,x,B.ad,B.f,A.a([v,t,A.ao(x,A.o(x,x,B.f,x,x,new A.n(B.c,x,A.K(u?D.ij:B.c,B.r,3),x,x,x,B.a6),x,18,x,x,x,x,x,18),x,x,s,x,4,x)],y.p),x),x)},
$S:130}
C.eEQ.prototype={
$0(){return this.a.SE(!this.b)},
$S:0}
C.eF6.prototype={
$1(d){return A.a1(d,y.N,y.z)},
$S:25}
C.eEF.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
x=u.x&&u.w?2:4
break
case 2:x=5
return A.b(u.ZY(!0),$async$$0)
case 5:x=3
break
case 4:u.l(new C.eEE(u))
case 3:return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
C.eEE.prototype={
$0(){return this.a.x=!0},
$S:0}
C.cW9.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.cWi.prototype={
$2(d,e){var x,w,v=null,u=e.b,t=this.a,s=t.a,r=s.c,q=s.d,p=s.e,o=s.f
s=s.r
x=t.d
w=d.K(y.D)
return A.ay(v,new A.a5(u,250,A.b4(v,v,v,new C.bdR((w==null?B.CD:w).w.d,r,q,p,o,s,x,v),B.az),v),B.y,!1,v,v,v,v,v,new C.cWd(t),new C.cWe(t,u),new C.cWf(t,u),v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.cWg(t,u),new C.cWh(t),v,v,v,!1,B.a4)},
$S:36}
C.cWg.prototype={
$1(d){return this.a.aAj(d.b,this.b)},
$S:22}
C.cWe.prototype={
$1(d){return this.a.aAj(d.b,this.b)},
$S:46}
C.cWf.prototype={
$1(d){return this.a.aAj(d.b,this.b)},
$S:19}
C.cWd.prototype={
$1(d){var x=this.a
return x.l(new C.cWc(x))},
$S:37}
C.cWc.prototype={
$0(){return this.a.d=null},
$S:0}
C.cWh.prototype={
$1(d){return A.bN(B.fR,new C.cWb(this.a),y.a)},
$S:61}
C.cWb.prototype={
$0(){var x=this.a
if(x.c!=null)x.l(new C.cWa(x))},
$S:11}
C.cWa.prototype={
$0(){return this.a.d=null},
$S:0}
C.cWj.prototype={
$1(d){var x=this.a
return x*d+x/2},
$S:161}
C.cWl.prototype={
$1(d){var x=this.b,w=this.a,v=w.a
return x-(d-v)/(w.b-v)*x},
$S:5}
C.cWk.prototype={
$2(d,e){var x,w,v,u,t,s,r,q,p=this,o=$.R(),n=A.a([],y.v),m=new A.aG(o.r,B.ai,null,null,n)
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
m.ab()}else{r=new A.aZ(r,q)
n.push(r)
q=m.f
if(q!=null)r.aj(q)
m.ab()}u=!0}$.R()
o=A.L()
o.r=e.j(0.85).gp(0)
o.b=B.aa
o.c=2
o.d=B.bG
o.e=B.dM
p.e.af(m,o)},
$S:2334}
C.feo.prototype={
$1(d){return C.mu(J.t(d,"c"))},
$S:2335}
C.fyj.prototype={
$1(d){var x=y.N,w=y.z,v=A.a1(d,x,w)
w=A.dH(v,x,w)
w.n(0,"asset",v.h(0,"symbol"))
return w},
$S:25}
C.fCD.prototype={
$1(d){return A.a1(d,y.N,y.z)},
$S:25}
C.fzp.prototype={
$1(d){return","},
$S:63}
C.fGC.prototype={
$3(d,e,f){var x=A.bOJ(d,e,1,0,0,0,0,0)
while(A.lA(x)!==7)x=x.bQ(864e8)
return x.bQ(A.dv(7*(f-1),0,0,0,0,0).a)},
$S:2336};(function installTearOffs(){var x=a._instance_0u
x(C.aH_.prototype,"gbL6","XL",0)})();(function inheritance(){var x=a.inheritMany
x(A.ag,[C.P4,C.aAB])
x(A.ah,[C.aH_,C.bdQ])
x(A.kp,[C.eF8,C.eER,C.eF1,C.eEG,C.eEI,C.eEV,C.eF6,C.cWg,C.cWe,C.cWf,C.cWd,C.cWh,C.cWj,C.cWl,C.feo,C.fyj,C.fCD,C.fzp,C.fGC])
x(A.mC,[C.eEZ,C.eES,C.eF_,C.eF0,C.eF2,C.eF3,C.eEO,C.eEP,C.eF7,C.eF4,C.eF5,C.eEH,C.eEJ,C.eEU,C.eET,C.eEM,C.eEL,C.eEN,C.eEK,C.eEQ,C.eEF,C.eEE,C.cW9,C.cWc,C.cWb,C.cWa])
x(A.mh,[C.eEX,C.eEW,C.eEY,C.cWi,C.cWk])
x(A.qa,[C.bdR,C.bvH])
x(A.aK,[C.yS,C.f0Q])})()
A.nL(b.typeUniverse,JSON.parse('{"aAB":{"ag":[],"w":[]},"P4":{"ag":[],"w":[]},"aH_":{"ah":["P4"]},"bdQ":{"ah":["aAB"]},"bdR":{"aB":[]},"bvH":{"aB":[]}}'))
var y=(function rtii(){var x=A.aE
return{D:x("Eu"),V:x("U<ac>"),O:x("U<u>"),t:x("U<ab<q,@>>"),v:x("U<hO>"),s:x("U<q>"),p:x("U<w>"),n:x("U<G>"),P:x("ab<q,@>"),f:x("ab<@,@>"),a:x("cw"),N:x("q"),q:x("p6"),y:x("Q"),z:x("@"),S:x("H"),g:x("ai<@>?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.Gf=new A.u(1,0.08627450980392157,0.10588235294117647,0.1803921568627451,B.q)
D.fD=new A.u(1,0.5411764705882353,0.5607843137254902,0.6392156862745098,B.q)
D.ahG=new A.u(1,0.0392156862745098,0.050980392156862744,0.09411764705882353,B.q)
D.ahN=new A.u(1,0.9294117647058824,0.9372549019607843,0.9803921568627451,B.q)
D.fE=new A.u(1,0.5529411764705883,0.5843137254901961,0.6705882352941176,B.q)
D.rR=new A.u(1,0.08627450980392157,0.09019607843137255,0.11372549019607843,B.q)
D.i2=new A.u(1,0.12156862745098039,0.7490196078431373,0.592156862745098,B.q)
D.ZX=new A.u(1,0.14901960784313725,0.17647058823529413,0.27058823529411763,B.q)
D.a_d=new A.u(1,0.9058823529411765,0.9098039215686274,0.9411764705882353,B.q)
D.bpV=new A.u(1,0.06666666666666667,0.08235294117647059,0.1607843137254902,B.q)
D.ajy=new A.u(1,0.12549019607843137,0.14901960784313725,0.23137254901960785,B.q)
D.brn=new A.u(1,0.9725490196078431,0.9450980392156862,0.9490196078431372,B.q)
D.a_F=new A.u(1,0.13725490196078433,0.16470588235294117,0.25882352941176473,B.q)
D.akB=new A.u(1,0.9372549019607843,0.9411764705882353,0.9607843137254902,B.q)
D.ij=new A.u(1,0.07058823529411765,0.0784313725490196,0.10980392156862745,B.q)
D.iF=new A.u(1,0.9411764705882353,0.33725490196078434,0.41568627450980394,B.q)
D.all=new A.u(1,0.9568627450980393,0.9607843137254902,0.9803921568627451,B.q)
D.alo=new A.u(1,0.11372549019607843,0.13725490196078433,0.2196078431372549,B.q)
D.bDY=new A.P(0,0,0,7)
D.bGS=new A.P(16,4,16,40)
D.bJN=new A.P(4,0,4,8)
D.bK5=new A.P(4,6,4,14)
D.bSU=new A.a_(62840,"MaterialIcons",!1)
D.bVd=new A.a_(983325,"MaterialIcons",!1)
D.c4n=new A.ae(B.Qt,18,null,null,null,null)
D.cMV=x([B.dz,B.fr,B.iG],y.O)
D.c9N=new A.a8(B.ay,B.aC,B.x,D.cMV,null,null)
D.dcT=x([D.iF,B.at,D.i2],y.O)
D.dpF=x([0,0.33,1],y.n)
D.cby=new A.a8(B.a5,B.a9,B.x,D.dcT,D.dpF,null)
D.cnd=x([12,24,48],A.aE("U<H>"))
D.c_F=new A.ae(B.x1,5,B.b2,null,null,null)
D.ezj=new A.D(B.hV,D.c_F,null)
D.bVD=new A.a_(983635,"MaterialIcons",!0)
D.f8d=new A.b3(B.px,D.bVD,"Moving sideways")
D.f93=new A.b3(B.b2,B.oM,"Waiting for data")
D.fa0=new A.b3(D.i2,B.oU,"Trend is UP")
D.fb1=new A.b3(D.iF,B.as8,"Trend is DOWN")
D.fAv=new A.F(!0,B.c,null,null,null,null,36,B.G,null,-0.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fEZ=new A.F(!0,D.i2,null,null,null,null,11.5,B.O,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fGo=new A.F(!0,D.iF,null,null,null,null,11.5,B.O,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fQA=new A.C("The $25 brake paused the agent. Turning it back on means you have reviewed it. The running demo profit and loss starts again from $0.",null,null,null,null,null,null,null,null,null,null,null)
D.fUF=new A.C("Turn the agent back on?",null,null,null,null,null,null,null,null,null,null,null)
D.fND=new A.F(!0,B.c,null,null,null,null,9.5,B.u,null,0.8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fZW=new A.C("PRETEND MONEY",null,D.fND,null,null,null,null,null,null,null,null,null)
D.h_E=new A.C("Paper balance",null,B.Wx,null,null,null,null,null,null,null,null,null)
D.h9i=new A.C("Check now",null,B.cd,null,null,null,null,null,null,null,null,null)
D.hcq=new A.C("Turn back on",null,null,null,null,null,null,null,null,null,null,null)
D.hIZ=new C.yS("Nvidia","N",B.Nf)
D.hJ_=new C.yS("Bitcoin","\u20bf",E.wv)
D.bnz=new A.u(1,0.3843137254901961,0.49411764705882355,0.9176470588235294,B.q)
D.hJ1=new C.yS("Ethereum","\u039e",D.bnz)
D.hJ4=new C.yS("S&P 500 fund","S&P",B.ce)
D.hJ6=new C.yS("Tesla","T",B.bE)
D.hJ7=new C.yS("Microsoft","M",B.bp)
D.hJ8=new C.yS("Nasdaq 100 fund","Q",B.cE)
D.bnl=new A.u(1,0.6,0.27058823529411763,1,B.q)
D.hJa=new C.yS("Solana","S",D.bnl)
D.hJc=new C.yS("Apple","A",B.cP)
D.hJf=new C.yS("Amazon","a",B.at)})()};
(a=>{a["4C6y4NhVSVqqEJQKNuQNJFQZY4k="]=a.current})($__dart_deferred_initializers__);