((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,G,E,D={
i3S(){return new D.P7(null)},
aH8(d){var x=J.a6(d),w=D.iS(x.h(d,"reading")).h(0,"action"),v=J.k(w==null?"":w)
if(B.a.X(v,"BUY"))return 0
if(B.a.X(v,"SELL"))return 1
if(!J.z(x.h(d,"open"),!0))return 4
return 2+(100-D.f4(D.iS(x.h(d,"reading")).h(0,"score")))/1000},
fzf(d){var x
switch(d){case"SPY":x=C.hLj
break
case"QQQ":x=C.hLo
break
case"AAPL":x=C.hLs
break
case"MSFT":x=C.hLn
break
case"NVDA":x=C.hLe
break
case"TSLA":x=C.hLm
break
case"AMZN":x=C.hLv
break
case"BTC/USD":x=C.hLk
break
case"ETH/USD":x=C.hLg
break
case"SOL/USD":x=C.hLq
break
default:x=new D.yU(d,d.length===0?"?":d[0],B.b2)
break}return x},
hiE(d,e){var x,w,v=null,u=d.split("/")
if(u.length===2&&C.a8r.am(0,u[0])&&C.a8r.am(0,u[1])){u=d.split("/")
x=new D.fu9(e)
return new A.a5(e*1.25,e,new A.an(B.a0,v,B.ad,B.t,A.a([A.ao(v,x.$1(u[0]),v,v,0,v,0,v),A.ao(0,x.$1(u[1]),v,v,v,0,v,v)],y.p),v),v)}w=D.fzf(d)
x=w.b
return A.o(B.z,A.c(x,v,v,v,v,v,v,A.l(v,v,B.c,v,v,v,v,v,v,v,v,x.length>1?e*0.32:e*0.52,v,v,B.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),B.f,v,v,new A.n(w.c,v,v,v,v,v,B.a6),v,e,v,v,v,v,v,e)},
DE(d){var x,w=y.g.a(d.h(0,"markets"))
if(w==null)w=B.cg
w=J.cY(w,y.f)
w=A.cD(w,new D.fzx(),w.$ti.k("M.E"),y.P)
x=A.B(w,A.a4(w).k("M.E"))
return x},
iS(d){var x=y.N,w=y.z
return y.f.b(d)?A.a1(d,x,w):A.S(x,w)},
f4(d){var x
if(typeof d=="number")x=d
else{x=A.cF(A.v(d==null?"":d))
if(x==null)x=0}return x},
aRk(d){var x=y.g.a(D.iS(J.t(d,"chart")).h(0,"points"))
if(x==null)x=B.cg
x=J.cY(x,y.f)
x=A.cD(x,new D.fDR(),x.$ti.k("M.E"),y.P)
x=A.B(x,A.a4(x).k("M.E"))
return x},
il(d,e,f){var x,w=A.nT(B.i.aa(Math.abs(d),2),A.af("\\B(?=(\\d{3})+(?!\\d))",!0,!1,!1,!1),new D.fAD(),null)
if(d<0)x="-"
else x=f&&d>0?"+":""
return x+(e?"$":"")+w},
aQz(d){var x=B.o.F(A.d3(d),12)===0?12:B.o.F(A.d3(d),12),w=B.a.b1(B.o.v(A.fE(d)),2,"0"),v=A.d3(d)<12?"AM":"PM"
return""+x+":"+w+" "+v},
bF4(d){var x=d.ab(),w=new D.fHS(),v=w.$3(A.bD(x),3,2).bQ(252e8),u=w.$3(A.bD(x),11,1).bQ(216e8),t=x.bQ(0-A.du(0,!x.cZ(v)&&x.cZ(u)?4:5,0,0,0,0).a)
return A.c0(A.bD(t),A.bL(t),A.bW(t),A.d3(t),A.fE(t),0,0,0)},
ieS(d){var x,w=A.bh(A.v(d==null?"":d))
if(w==null)return""
x=D.bF4(w)
return B.iK[A.bL(x)-1]+" "+A.bW(x)+" at "+D.aQz(x)+" ET"},
ilk(d){var x,w,v=d.split(", ")
if(v.length>=4){x=v[1]
w=v[3]
return x+", "+A.aL(w," ET","")}return d},
hCZ(d){return d.length===0?d:d[0].toUpperCase()+B.a.aY(d,1)},
hFr(){var x=D.bF4(new A.V(Date.now(),0,!1).ab()),w=B.o.F(A.fE(x),15)
return"at "+D.aQz(A.c0(A.bD(x),A.bL(x),A.bW(x),A.d3(x),A.fE(x),0,0,0).bQ(A.du(0,0,0,0,15-w,0).a))+" ET"},
icl(d){if(B.a.X(d,"BUY"))return C.ej
if(B.a.X(d,"SELL"))return C.f4
if(B.a.X(d,"UP"))return B.aU
if(B.a.X(d,"DOWN"))return C.f4
if(B.a.X(d,"MARKET CLOSED"))return B.bP
return B.l_},
hGp(a8,a9,b0,b1,b2){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f="mom1h",e="dir",d="typicalMin",a0="of",a1="worked",a2="enterWithinMin",a3=J.a6(a9),a4=D.iS(a3.h(a9,"reading")),a5=D.iS(a4.h(0,"timing")),a6=D.aRk(a9),a7=a3.h(a9,"asset")
if(a7==null)a7=a3.h(a9,"symbol")
x=J.k(a7==null?"":a7)
a7=a4.h(0,"action")
w=J.k(a7==null?"WAITING FOR DATA":a7)
v=D.icl(w)
u=B.i.D(D.f4(a4.h(0,"score")),0,100)
a7=y.g.a(a4.h(0,"notes"))
if(a7==null)a7=B.cg
a7=J.ba(a7,new D.fEI(),y.N)
t=A.B(a7,a7.$ti.k("ak.E"))
s=D.f4(a3.h(a9,"changePct"))
a7=a8.a
r=a7?B.c.j(0.92):C.lQ
q=A.m(20)
p=!B.a.X(w,"BUY")
if(!p||B.a.X(w,"SELL"))o=v.j(0.6)
else o=a7?B.c:C.uQ
o=A.K(o,B.r,!p||B.a.X(w,"SELL")?1.6:1)
n=A.a([new A.ab(0,B.H,a8.ga9y(),B.hR,14)],y.V)
m=D.hiE(x,28)
p=A.c(x,g,g,g,g,g,g,A.l(g,g,a7?C.e1:B.c,g,g,g,g,g,g,g,g,14,g,g,B.F,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)
l=a3.h(a9,"name")
l=J.k(l==null?"":l)
k=y.p
l=A.a([m,B.ar,A.E(A.x(A.a([p,A.c(l,g,g,g,g,g,g,A.l(g,g,a7?C.dA:C.dB,g,g,g,g,g,g,g,g,11,g,g,g,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)],k),B.B,g,B.e,B.h,0,B.p),1)],k)
if(a6.length>2)B.d.u(l,A.a([new A.a5(58,26,A.b4(g,g,g,new D.aKu(a6,s>=0?C.ej:C.f4,g),B.az),g),B.ar],k))
p=D.hGj(a9)
p=A.c(p,g,g,g,g,g,g,A.l(g,g,a7?C.e1:B.c,g,g,g,g,g,g,g,g,14,g,g,B.F,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)
m=s>=0
j=m?"+":""
i=B.i.aa(s,2)
h=J.z(a3.h(a9,"kind"),"forex")?"30m":"4h"
l.push(A.x(A.a([p,A.c(j+i+"% \xb7 "+h,g,g,g,g,g,g,A.l(g,g,m?C.ej:C.f4,g,g,g,g,g,g,g,g,11,g,g,B.O,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)],k),B.dI,g,B.e,B.h,0,B.p))
p=A.a([A.A(l,B.l,g,B.e,B.h,0,g,g)],k)
if(b0!=null){m=A.m(10)
B.d.u(p,A.a([B.P,A.o(g,A.A(A.a([C.c1B,B.d7,A.E(A.c(b0+" \xb7 check before you act",g,g,g,g,g,g,C.fGN,g,g,g),1)],k),B.l,g,B.e,B.h,0,g,g),B.f,g,g,new A.n(g,g,g,m,g,C.ceb,B.m),g,g,g,g,B.fL,g,g,1/0)],k))}p.push(B.S)
m=v.j(0.15)
l=A.m(999)
l=A.a([A.o(g,A.c(w,g,g,g,g,g,g,A.l(g,g,v,g,g,g,g,g,g,g,g,10.5,g,g,B.u,g,g,!0,g,0.4,g,g,g,g,g,g),g,g,g),B.f,g,g,new A.n(m,g,g,l,g,g,B.m),g,g,g,g,B.nX,g,g,g),B.aY],k)
if(a4.h(0,"rsi")!=null){m=B.i.aa(D.f4(a4.h(0,"rsi")),0)
l.push(A.c("RSI "+m,g,g,g,g,g,g,A.l(g,g,a7?C.dA:C.dB,g,g,g,g,g,g,g,g,11,g,g,B.O,g,g,!0,g,g,g,g,g,g,g,g),g,g,g))}if(a4.h(0,f)!=null){m=D.f4(a4.h(0,f))>=0?"+":""
j=B.i.aa(D.f4(a4.h(0,f)),2)
B.d.u(l,A.a([B.ar,A.c("1h "+m+j+"%",g,g,g,g,g,g,A.l(g,g,D.f4(a4.h(0,f))>=0?C.ej:C.f4,g,g,g,g,g,g,g,g,11,g,g,B.O,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)],k))}p.push(A.A(l,B.l,g,B.e,B.h,0,g,g))
p.push(B.S)
p.push(A.ce(new D.fEJ(u,a8)))
p.push(B.au)
m=A.c("Sellers",g,g,g,g,g,g,A.l(g,g,a7?C.dA:C.dB,g,g,g,g,g,g,g,g,10,g,g,g,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)
l=B.i.aa(u,0)
l=A.c("Strength "+l+"/100",g,g,g,g,g,g,A.l(g,g,a7?C.e1:B.c,g,g,g,g,g,g,g,g,10.5,g,g,B.F,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)
p.push(A.A(A.a([m,B.aY,l,B.aY,A.c("Buyers",g,g,g,g,g,g,A.l(g,g,a7?C.dA:C.dB,g,g,g,g,g,g,g,g,10,g,g,g,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)],k),B.l,g,B.e,B.h,0,g,g))
if(J.z(a3.h(a9,"open"),!0)&&a5.h(0,e)!=null&&!J.z(a5.h(0,e),"none")&&a5.h(0,d)!=null){a3=J.z(a5.h(0,e),"up")?"Up":"Down"
a3=A.a([D.aRM(a8,B.fZ,a3+" move started "+B.i.aa(D.f4(a5.h(0,"ageMin")),0)+" min ago",g),D.aRM(a8,B.asr,"Usually lasts ~"+B.i.aa(D.f4(a5.h(0,d)),0)+" min",g),D.aRM(a8,B.arO,"~"+B.i.aa(D.f4(a5.h(0,"remainingMin")),0)+" min left (estimate)",g)],k)
if(D.f4(a5.h(0,a0))>0){m=A.v(a5.h(0,a1))
l=A.v(a5.h(0,a0))
j=B.i.T(D.f4(a5.h(0,a1))/D.f4(a5.h(0,a0))*100)
if(D.f4(a5.h(0,a1))/D.f4(a5.h(0,a0))>=0.55)i=C.ej
else i=D.f4(a5.h(0,a1))/D.f4(a5.h(0,a0))<0.45?C.f4:B.l_
a3.push(D.aRM(a8,B.pM,"Worked "+m+" of "+l+" ("+j+"%)",i))}if(!(J.z(a4.h(0,"bias"),"bullish")&&J.z(a5.h(0,e),"up")))m=J.z(a4.h(0,"bias"),"bearish")&&J.z(a5.h(0,e),"down")
else m=!0
if(m){m=D.f4(a5.h(0,a2))>0?"Enter within "+B.i.aa(D.f4(a5.h(0,a2)),0)+" min":"Too late to enter, wait"
a3.push(D.aRM(a8,B.Ip,m,D.f4(a5.h(0,a2))>0?C.ej:C.f4))}else a3.push(D.aRM(a8,B.ars,"No clear direction, do not enter",B.l_))
B.d.u(p,A.a([B.S,A.bZ(B.bI,a3,B.br,g,6,6)],k))}p.push(B.P)
a3=J.aT(b1?A.cT(t,0,A.dx(2,"count",y.S),A.T(t).c):t)
while(a3.C()){m=a3.gP(a3)
l=A.W(B.r1,v,g,g,g,4.5)
j=a7?C.e1:B.c
p.push(new A.D(B.na,new A.c3(B.aL,B.e,B.h,B.B,g,B.p,g,0,A.a([new A.D(B.hw,l,g),B.xS,new A.bx(1,B.ba,A.c(m,g,g,g,g,g,g,new A.F(!0,j,g,g,g,g,12.3,g,g,g,g,g,1.35,g,g,g,g,g,g,g,g,g,g,g,g,g),g,g,g),g)],k),g),g))}if(b2!=null)p.push(new A.bK(B.a9,g,g,A.hq(C.bXs,A.c("Ask the tutor about "+x,g,g,g,g,g,g,g,g,g,g),b2,g),g))
return A.o(g,A.x(p,B.B,g,B.e,B.h,0,B.p),B.f,g,g,new A.n(r,g,o,q,n,g,B.m),g,g,g,B.d4,B.bH,g,g,g)},
aRM(d,e,f,g){var x,w,v,u=null,t=g==null
if(t)x=d.a?C.dA:C.dB
else x=g
x=x.j(0.12)
w=A.m(999)
if(t)v=d.a?C.dA:C.dB
else v=g
v=A.W(e,v,u,u,u,12)
if(t)t=d.a?C.e1:B.c
else t=g
return A.o(u,A.A(A.a([v,B.d7,A.c(f,u,u,u,u,u,u,A.l(u,u,t,u,u,u,u,u,u,u,u,10.8,u,u,B.O,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],y.p),B.l,u,B.e,B.M,0,u,u),B.f,u,u,new A.n(x,u,u,w,u,u,B.m),u,u,u,u,B.eR,u,u,u)},
hGj(d){var x=J.a6(d),w=D.f4(x.h(d,"price"))
if(!J.z(x.h(d,"kind"),"forex"))return D.il(w,!0,!1)
return B.i.aa(w,w>=100?3:5)},
hBt(d){var x=J.t(d,"kind")
switch(J.k(x==null?"":x)){case"forex":x="Forex"
break
case"crypto":x="Crypto"
break
default:x="Stocks"
break}return x},
P7:function P7(d){this.a=d},
aH7:function aH7(d,e){var _=this
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
eFB:function eFB(d){this.a=d},
eFk:function eFk(d,e){this.a=d
this.b=e},
eFc:function eFc(d,e){this.a=d
this.b=e},
eFj:function eFj(d,e){this.a=d
this.b=e},
eFm:function eFm(d,e){this.a=d
this.b=e},
eFa:function eFa(){},
eFb:function eFb(d,e,f){this.a=d
this.b=e
this.c=f},
eFu:function eFu(){},
eFs:function eFs(d){this.a=d},
eFt:function eFt(d){this.a=d},
eFv:function eFv(d){this.a=d},
eFw:function eFw(d){this.a=d},
eFi:function eFi(d){this.a=d},
eFo:function eFo(d){this.a=d},
eFp:function eFp(d,e){this.a=d
this.b=e},
eFq:function eFq(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eFn:function eFn(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eFr:function eFr(){},
eFA:function eFA(d){this.a=d},
eFx:function eFx(d){this.a=d},
eFy:function eFy(d){this.a=d},
eF1:function eF1(d){this.a=d},
eF2:function eF2(d,e){this.a=d
this.b=e},
eF3:function eF3(d){this.a=d},
eF4:function eF4(d){this.a=d},
eFe:function eFe(){},
eFf:function eFf(d){this.a=d},
eFh:function eFh(){},
eFg:function eFg(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
eFd:function eFd(d,e){this.a=d
this.b=e},
eF7:function eF7(d,e){this.a=d
this.b=e},
eF6:function eF6(d,e){this.a=d
this.b=e},
eF8:function eF8(d){this.a=d},
eF5:function eF5(d){this.a=d},
eFl:function eFl(d,e){this.a=d
this.b=e},
eF9:function eF9(d,e){this.a=d
this.b=e},
eFz:function eFz(){},
eF0:function eF0(d){this.a=d},
eF_:function eF_(d){this.a=d},
ady:function ady(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
be4:function be4(){this.c=this.a=this.d=null},
cWp:function cWp(d,e){this.a=d
this.b=e},
cWy:function cWy(d){this.a=d},
cWw:function cWw(d,e){this.a=d
this.b=e},
cWu:function cWu(d,e){this.a=d
this.b=e},
cWv:function cWv(d,e){this.a=d
this.b=e},
cWt:function cWt(d){this.a=d},
cWs:function cWs(d){this.a=d},
cWx:function cWx(d){this.a=d},
cWr:function cWr(d){this.a=d},
cWq:function cWq(d){this.a=d},
be5:function be5(d,e,f,g,h,i,j,k){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.w=j
_.a=k},
cWz:function cWz(d){this.a=d},
cWB:function cWB(d,e){this.a=d
this.b=e},
cWA:function cWA(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
aKu:function aKu(d,e,f){this.b=d
this.c=e
this.a=f},
ffC:function ffC(){},
yU:function yU(d,e,f){this.a=d
this.b=e
this.c=f},
fu9:function fu9(d){this.a=d},
fzx:function fzx(){},
a1s:function a1s(d){this.a=d},
fDR:function fDR(){},
fAD:function fAD(){},
fHS:function fHS(){},
fEI:function fEI(){},
fEJ:function fEJ(d,e){this.a=d
this.b=e},
nk:function nk(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
uq:function uq(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
XA:function XA(d,e,f){this.c=d
this.d=e
this.a=f},
a_v:function a_v(d,e){this.a=d
this.b=e},
aH9:function aH9(d,e,f,g,h,i,j,k,l,m){var _=this
_.d=$
_.r=_.f=_.e=null
_.w=d
_.x=e
_.y=f
_.z=g
_.Q=!1
_.as=h
_.at=""
_.ax=!1
_.ay="All"
_.ch=i
_.CW=j
_.cx=k
_.bu$=l
_.a9$=m
_.c=_.a=null},
eGl:function eGl(){},
eGm:function eGm(d){this.a=d},
eGk:function eGk(){},
eGn:function eGn(d){this.a=d},
eFU:function eFU(d,e){this.a=d
this.b=e},
eFV:function eFV(d,e){this.a=d
this.b=e},
eG1:function eG1(){},
eG2:function eG2(d,e,f){this.a=d
this.b=e
this.c=f},
eFW:function eFW(){},
eFX:function eFX(){},
eGg:function eGg(){},
eGh:function eGh(){},
eFK:function eFK(d){this.a=d},
eFL:function eFL(){},
eFM:function eFM(){},
eFE:function eFE(d,e){this.a=d
this.b=e},
eFF:function eFF(){},
eFG:function eFG(){},
eFH:function eFH(d,e){this.a=d
this.b=e},
eG3:function eG3(d){this.a=d},
eGi:function eGi(d){this.a=d},
eGj:function eGj(d,e){this.a=d
this.b=e},
eFJ:function eFJ(d){this.a=d},
eFI:function eFI(d,e){this.a=d
this.b=e},
eG0:function eG0(d,e){this.a=d
this.b=e},
eFY:function eFY(d,e){this.a=d
this.b=e},
eFZ:function eFZ(d,e){this.a=d
this.b=e},
eG_:function eG_(d){this.a=d},
eFN:function eFN(d,e,f){this.a=d
this.b=e
this.c=f},
eFT:function eFT(d){this.a=d},
eFO:function eFO(){},
eFP:function eFP(){},
eFQ:function eFQ(){},
eFR:function eFR(){},
eFS:function eFS(){},
eG7:function eG7(d,e){this.a=d
this.b=e},
eG8:function eG8(d){this.a=d},
eG9:function eG9(){},
eGa:function eGa(){},
eGc:function eGc(d,e){this.a=d
this.b=e},
eG6:function eG6(d,e){this.a=d
this.b=e},
eGb:function eGb(d){this.a=d},
eGd:function eGd(d){this.a=d},
eG5:function eG5(d){this.a=d},
eGe:function eGe(d){this.a=d},
eG4:function eG4(d,e){this.a=d
this.b=e},
eGf:function eGf(d,e){this.a=d
this.b=e},
eFC:function eFC(d,e){this.a=d
this.b=e},
eFD:function eFD(d){this.a=d},
a0w:function a0w(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
bkL:function bkL(d){this.d=d
this.c=this.a=null},
du2:function du2(d){this.a=d},
du3:function du3(d){this.a=d},
du4:function du4(d,e){this.a=d
this.b=e},
du5:function du5(d,e){this.a=d
this.b=e},
du1:function du1(d,e,f){this.a=d
this.b=e
this.c=f},
du0:function du0(d,e,f){this.a=d
this.b=e
this.c=f},
aPa:function aPa(){}},C,H,I,K,L,M,F
J=c[1]
A=c[0]
B=c[2]
G=c[97]
E=c[83]
D=a.updateHolder(c[12],D)
C=c[95]
H=c[98]
I=c[51]
K=c[96]
L=c[44]
M=c[27]
F=c[90]
D.P7.prototype={
S(){return new D.aH7(A.a([],y.t),A.m3(0,null,null))}}
D.aH7.prototype={
Z(){var x=this
x.a4()
x.a.toString
x.aeo()
x.Bk(!0)
x.ay=A.de(B.oK,new D.eFB(x))},
t(){var x=this.ay
if(x!=null)x.a1(0)
this.Q.t()
this.a3()},
cqT(d){var x=this
if(!x.as&&d>0){x.as=!0
$.aU.x1$.push(new D.eFk(x,d))}return x.Q},
aeo(){var x=0,w=A.j(y.H),v=1,u=[],t=this,s,r,q,p
var $async$aeo=A.e(function(d,e){if(d===1){u.push(e)
x=v}for(;;)switch(x){case 0:v=3
x=6
return A.b(A.az(),$async$aeo)
case 6:s=e
r=A.aW(J.t(s.a,"ngmy_signal_grid_market"))
if(r!=null&&r.length!==0&&t.c!=null&&t.z==null)t.l(new D.eFc(t,r))
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
return A.i($async$aeo,w)},
a20(d){return this.cqp(d)},
cqp(d){var x=0,w=A.j(y.H),v=1,u=[],t=this,s,r,q
var $async$a20=A.e(function(e,f){if(e===1){u.push(f)
x=v}for(;;)switch(x){case 0:t.l(new D.eFj(t,d))
v=3
x=6
return A.b(A.az(),$async$a20)
case 6:s=f
x=7
return A.b(s.aF("String","ngmy_signal_grid_market",d),$async$a20)
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
Bk(d){return this.cvJ(d)},
cg2(){return this.Bk(!1)},
cvJ(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$Bk=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(A.hh(A.J(["action","paStatus","live",d],y.N,y.z),!1,!1,!1,!1,B.Hq),$async$Bk)
case 3:t=f
if(u.c==null){x=1
break}u.l(new D.eFm(u,t))
x=u.d!=null?4:5
break
case 4:x=6
return A.b(u.c6R(),$async$Bk)
case 6:case 5:case 1:return A.h(v,w)}})
return A.i($async$Bk,w)},
a_0(d){return this.c6S(d)},
c6R(){return this.a_0(!1)},
c6S(d){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$a_0=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(A.hh(A.J(["action","paLog","limit",100,"beforeId",d&&u.e.length!==0?J.t(B.d.gal(u.e),"id"):0],y.N,y.z),!1,!1,!1,!1,B.hI),$async$a_0)
case 3:r=f
if(u.c==null||r==null||!J.z(J.t(r,"ok"),!0)){x=1
break}t=y.g.a(J.t(r,"rows"))
if(t==null)t=B.cg
t=J.cY(t,y.f)
t=A.cD(t,new D.eFa(),t.$ti.k("M.E"),y.P)
s=A.B(t,A.a4(t).k("M.E"))
u.l(new D.eFb(u,d,s))
case 1:return A.h(v,w)}})
return A.i($async$a_0,w)},
SI(d){return this.cAC(d)},
cAC(d){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$SI=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=u.d
q=D.iS(r==null?null:J.t(r,"state"))
x=d&&J.z(q.h(0,"brakePaused"),!0)?3:4
break
case 3:r=u.c
r.toString
x=5
return A.b(A.cg(null,null,!0,null,new D.eFu(),r,null,!0,!0,y.y),$async$SI)
case 5:if(f!==!0){x=1
break}case 4:u.l(new D.eFv(u))
x=6
return A.b(A.hh(A.J(["action","paSet","enabled",d],y.N,y.z),!1,!1,!1,!1,B.hI),$async$SI)
case 6:t=f
if(u.c==null){x=1
break}u.l(new D.eFw(u))
r=t==null
if(J.z(r?null:J.t(t,"ok"),!0))s=d?"Agent started.":"Agent stopped."
else{s=r?null:J.t(t,"error")
s=J.k(s==null?"Could not change it.":s)}u.b33(s,J.z(r?null:J.t(t,"ok"),!0)?C.ej:C.f4)
x=7
return A.b(u.cg2(),$async$SI)
case 7:case 1:return A.h(v,w)}})
return A.i($async$SI,w)},
clm(){var x=this.c
x.toString
A.a8(x,!1).cb(A.e9(new D.eFi(this),!1,null,y.H))},
a3i(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$a3i=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u.l(new D.eFo(u))
x=3
return A.b(A.hh(A.J(["action","paCheck"],y.N,y.z),!1,!1,!1,!1,B.oK),$async$a3i)
case 3:t=e
if(u.c==null){x=1
break}u.l(new D.eFp(u,t))
s=t==null
if(!J.z(s?null:J.t(t,"ok"),!0)){s=s?null:J.t(t,"error")
u.b33(J.k(s==null?"The check did not finish.":s),C.f4)
x=1
break}s=u.c
s.toString
s=A.O(s).ax.a===B.dd
t.toString
r=D.iS(D.iS(J.t(t,"state")).h(0,"snapshot"))
q=u.c
q.toString
p=s?C.yJ:C.yH
x=4
return A.b(A.bU(p,null,new D.eFq(u,new D.a1s(s),r,t),q,!0,!0,!0,B.aU6,!1,!1,y.H),$async$a3i)
case 4:case 1:return A.h(v,w)}})
return A.i($async$a3i,w)},
cyO(d,e,f,g){var x,w,v,u,t,s=null,r=D.DE(e)
B.d.b_(r,new D.eFr())
x=d.a
w=x?C.qz:C.qw
w=A.as(A.o(s,s,B.f,s,s,new A.n(w,s,s,A.m(9),s,s,B.m),s,4,s,s,s,s,s,40),s,s,s)
v=A.c("What the agent sees right now",s,s,s,s,s,s,A.l(s,s,x?C.e1:B.c,s,s,s,s,s,s,s,s,19,s,s,B.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)
u=J.z(f.h(0,"enabled"),!0)?" (next one "+D.hFr()+")":" (the agent is stopped, so none will be made)"
w=A.a([w,B.aA,v,B.au,A.c("Check now only looks. It never buys or sells. Pretend trades are made only by the automatic check every 15 minutes"+u+".",s,s,s,s,s,s,A.l(s,s,x?C.dA:C.dB,s,s,s,s,s,s,s,s,12.5,s,s,s,s,1.35,!0,s,s,s,s,s,s,s,s),s,s,s),B.af],y.p)
for(x=r.length,t=0;t<r.length;r.length===x||(0,A.I)(r),++t)w.push(D.hGp(d,r[t],s,!0,s))
return A.cn(w,g,s,C.bGL,s,s,B.ah,!1)},
b33(d,e){var x=null
this.c.L(y.q).f.U(A.b2(x,x,x,e,x,B.t,x,A.c(d,x,x,x,x,x,x,x,x,x,x),x,B.Y,x,x,x,x,x,x,x,x,x,x))},
B(d){var x,w=this,v=null,u=A.O(d).ax.a===B.dd,t=new D.a1s(u),s=u?C.yJ:C.yH,r=u?C.yJ:C.yH
r=A.a([r,u?C.a_w:C.a_m],y.O)
x=w.cg3(t)
if(w.f)u=B.lM
else{if(w.d==null){u=w.ax
u=A.a([w.aaA(t,u==null?"Nothing to show yet.":u,B.b2)],y.p)}else u=w.bI6(0,t)
u=A.PJ(A.cn(u,v,v,C.bH6,v,v,B.ah,!1),v,new D.eFA(w))}return A.c5(v,s,A.o(v,A.bm(!0,A.x(A.a([x,A.E(u,1)],y.p),B.l,v,B.e,B.h,0,B.p),!0,!1,B.ag,!0,!0),B.f,v,v,new A.n(v,v,v,v,v,new A.a7(B.aX,B.b1,B.x,r,v,v),B.m),v,v,v,v,v,v,v,v),v,!1,!1,v,v)},
cg3(d){var x,w,v,u,t,s,r=this,q=null,p=r.d,o=D.iS(p==null?q:J.t(p,"state")),n=J.z(o.h(0,"brakePaused"),!0),m=J.z(o.h(0,"enabled"),!0)&&!n
p=r.b32(d,B.eG,new D.eFx(r))
x=d.a
w=A.c("Signal Grid",q,q,q,q,q,q,A.l(q,q,x?C.e1:B.c,q,q,q,q,q,q,q,q,17,q,q,B.F,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
v=y.p
w=A.a([p,B.ar,A.E(A.x(A.a([w,A.c("Paper trading agent \xb7 pretend money",q,q,q,q,q,q,A.l(q,q,x?C.dA:C.dB,q,q,q,q,q,q,q,q,11.5,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],v),B.B,q,B.e,B.h,0,B.p),1)],v)
if(r.d!=null){if(n)p=C.f4
else if(m)p=C.ej
else p=x?C.dA:C.dB
p=p.j(0.14)
u=A.m(999)
if(n)t=C.f4
else if(m)t=C.ej
else t=x?C.dA:C.dB
t=A.W(B.r1,t,q,q,q,8)
if(n)s="Paused"
else s=m?"Running":"Stopped"
if(n)x=C.f4
else if(m)x=C.ej
else x=x?C.dA:C.dB
w.push(A.o(q,A.A(A.a([t,B.bj,A.c(s,q,q,q,q,q,q,A.l(q,q,x,q,q,q,q,q,q,q,q,12,q,q,B.F,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],v),B.l,q,B.e,B.M,0,q,q),B.f,q,q,new A.n(p,q,q,u,q,q,B.m),q,q,q,q,B.fL,q,q,q))}w.push(B.aa)
w.push(r.b32(d,B.o0,r.r?q:new D.eFy(r)))
return new A.D(B.hk,A.A(w,B.l,q,B.e,B.h,0,q,q),q)},
bI6(d1,d2){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4=this,c5=null,c6="asset",c7="liveError",c8="brakePaused",c9="amount",d0=c4.d
d0.toString
x=J.a6(d0)
w=D.iS(x.h(d0,"state"))
v=D.iS(x.h(d0,"config"))
u=D.iS(w.h(0,"snapshot"))
t=y.f.b(w.h(0,"shadow"))?D.iS(w.h(0,"shadow")):c5
s=D.DE(u)
r=c4.z
if(r==null){q=t==null?c5:t.h(0,"symbol")
if(q==null)q=u.h(0,c6)
r=q==null?c5:J.k(q)}p=B.d.dA(s,new D.eF1(r),new D.eF2(s,u))
q=t==null
o=q?c5:B.d.dA(s,new D.eF3(t),new D.eF4(p))
q=!q
n=q&&J.z(t.h(0,"symbol"),J.t(p,c6))?t:c5
m=c4.c8j(d2,d0,s,p,t)
l=D.iS(x.h(d0,"market"))
k=J.a6(p)
j=k.h(p,c6)
i=J.k(j==null?"SPY":j)
h=B.a.q(i,"/")
g=D.aRk(p)
f=D.f4(k.h(p,"price"))
e=g.length!==0?D.f4(J.t(B.d.gH(g),"c")):0
d=e===0?0:(f-e)/e*100
a0=d>=0
if(h)a1=!0
else{j=k.h(p,"open")
if(j==null)j=l.h(0,"stockOpen")
a1=j==null?l.h(0,"open"):j}if(h)a2="Crypto \xb7 trades all day, every day"
else{j=J.kF(a1)
if(j.A(a1,!0))a2="Stock market open \xb7 closes 4:00 PM ET"
else{j=j.A(a1,!1)?"Stock market closed"+c4.cM5(l.h(0,"nextOpen")):""
a2=j}}a3=D.fzf(i)
j=D.hiE(i,30)
a4=h?i:i+"/USD"
a5=d2.a
a4=A.c(a4,c5,c5,c5,c5,c5,c5,A.l(c5,c5,a5?C.e1:B.c,c5,c5,c5,c5,c5,c5,c5,c5,17,c5,c5,B.F,c5,c5,!0,c5,c5,c5,c5,c5,c5,c5,c5),c5,c5,c5)
a6=k.h(p,"name")
a6=J.k(a6==null?a3.a:a6)
a7=y.p
a6=A.A(A.a([j,B.ar,a4,B.bj,new A.d1(1,B.cf,A.c(a6,c5,c5,B.a2,c5,c5,c5,A.l(c5,c5,a5?C.dA:C.dB,c5,c5,c5,c5,c5,c5,c5,c5,13,c5,c5,c5,c5,c5,!0,c5,c5,c5,c5,c5,c5,c5,c5),c5,c5,c5),c5)],a7),B.l,c5,B.e,B.h,0,c5,c5)
j=f===0?"\u2014":D.il(f,!1,!1)
j=A.a([A.E(new A.dk(B.dv,B.a5,B.f,A.c(j,c5,c5,c5,c5,c5,c5,A.l(c5,c5,a5?C.e1:B.c,c5,c5,c5,c5,c5,c5,c5,K.SS,42,c5,c5,B.a8,c5,c5,!0,c5,-1,c5,c5,c5,c5,c5,c5),c5,c5,c5),c5),1)],a7)
if(g.length>1){a4=(a0?C.ej:C.f4).j(0.14)
a8=A.m(10)
a9=a0?C.bTa:B.a3Q
a9=A.W(a9,a0?C.ej:C.f4,c5,c5,c5,20)
b0=B.i.aa(Math.abs(d),2)
j.push(A.o(c5,A.A(A.a([a9,A.c(b0+"%",c5,c5,c5,c5,c5,c5,A.l(c5,c5,a0?C.ej:C.f4,c5,c5,c5,c5,c5,c5,c5,c5,13,c5,c5,B.F,c5,c5,!0,c5,c5,c5,c5,c5,c5,c5,c5),c5,c5,c5)],a7),B.l,c5,B.e,B.M,0,c5,c5),B.f,c5,c5,new A.n(a4,c5,c5,a8,c5,c5,B.m),c5,c5,c5,c5,B.fL,c5,c5,c5))}j=A.a([a6,B.P,A.A(j,B.l,c5,B.e,B.h,0,c5,c5)],a7)
if(a2.length!==0){if(J.z(a1,!0))a4=C.ej
else a4=a5?C.dA:C.dB
a4=A.W(B.r1,a4,c5,c5,c5,7)
a6=g.length>1?"  \xb7  change over 4H":""
B.d.u(j,A.a([B.au,A.A(A.a([a4,B.bj,new A.d1(1,B.cf,A.c(a2+a6,c5,c5,B.a2,c5,c5,c5,A.l(c5,c5,a5?C.dA:C.dB,c5,c5,c5,c5,c5,c5,c5,c5,12,c5,c5,c5,c5,c5,!0,c5,c5,c5,c5,c5,c5,c5,c5),c5,c5,c5),c5)],a7),B.l,c5,B.e,B.h,0,c5,c5)],a7))}m=A.a([m,new A.D(C.bKl,A.x(j,B.B,c5,B.e,B.h,0,B.p),c5)],a7)
j=v.h(0,"problem")
if(J.k(j==null?"":j).length!==0)m.push(c4.aaA(d2,J.k(v.h(0,"problem")),B.l_))
j=x.h(d0,c7)
if(J.k(j==null?"":j).length!==0)m.push(c4.aaA(d2,J.k(x.h(d0,c7)),C.f4))
if(J.z(w.h(0,c8),!0)){j=w.h(0,"brakeReason")
m.push(c4.aaA(d2,"Paused by the $25 brake. "+A.v(j==null?"":j)+". Look over the trades, then press Start to turn it back on.",C.f4))}m.push(c4.bL5(d2,p,n))
m.push(c4.cJq(d2,p,t,d0))
b1=D.iS(x.h(d0,"today"))
b2=D.iS(x.h(d0,"record"))
b3=D.iS(x.h(d0,"ticket"))
b4=D.f4(w.h(0,"totalPnl"))
b5=D.f4(b1.h(0,"day_pnl"))
j=A.m(26)
a4=A.a([new A.ab(0,B.H,B.i0.j(0.3),B.eT,24)],y.V)
a6=A.A(A.a([C.h1H,B.aY,A.o(c5,C.h0Z,B.f,c5,c5,new A.n(B.c.j(0.14),c5,c5,A.m(999),c5,c5,B.m),c5,c5,c5,c5,B.fC,c5,c5,c5)],a7),B.l,c5,B.e,B.h,0,c5,c5)
a8=A.c(u.h(0,"equity")==null?"\u2014":D.il(D.f4(u.h(0,"equity")),!0,!1),c5,c5,c5,c5,c5,c5,C.fCu,c5,c5,c5)
a9=A.c("Buying power "+D.il(D.f4(u.h(0,"buyingPower")),!0,!1)+" \xb7 the agent uses only $"+B.i.aa(D.f4(b3.h(0,c9)),0)+" a trade",c5,c5,c5,c5,c5,c5,B.WE,c5,c5,c5)
b0=D.il(b5,!0,!0)
if(b5>0)b6=C.ej
else b6=b5<0?C.f4:B.c
b6=A.E(c4.P2("Today",b0,b6),1)
b0=D.il(b4,!0,!0)
if(b4>0)b7=C.ej
else b7=b4<0?C.f4:B.c
b7=A.E(c4.P2("All time",b0,b7),1)
b0=b2.h(0,"wins")
b0=A.v(b0==null?0:b0)
b8=b2.h(0,"losses")
b0=A.A(A.a([b6,B.aa,b7,B.aa,A.E(c4.P2("Wins / losses",b0+" / "+A.v(b8==null?0:b8),B.c),1)],a7),B.l,c5,B.e,B.h,0,c5,c5)
b6=b1.h(0,"trades")
b6=A.v(b6==null?0:b6)
b7=b3.h(0,"maxTradesToday")
m.push(A.o(c5,A.x(A.a([a6,B.au,new A.dk(B.dv,B.a5,B.f,a8,c5),B.bC,a9,B.aA,b0,B.P,A.A(A.a([A.E(c4.P2("Trades today",b6+" of "+A.v(b7==null?4:b7),B.c),1),B.aa,A.E(c4.P2("Daily stop","-$10",B.c),1),B.aa,A.E(c4.P2("Total brake","-$25",B.c),1)],a7),B.l,c5,B.e,B.h,0,c5,c5)],a7),B.B,c5,B.e,B.h,0,B.p),B.f,c5,c5,new A.n(c5,c5,c5,j,a4,C.ca9,B.m),c5,c5,c5,B.ec,B.fc,c5,c5,c5))
if(q){o.toString
x=c4.crk(d2,t,o)}else{b9=D.iS(x.h(d0,"ticket"))
f=D.f4(k.h(p,"price"))
c0=D.f4(b9.h(0,c9))===0?50:D.f4(b9.h(0,c9))
x=f===0
c1=x?0:c0/f
q=A.A(A.a([A.c("Next trade",c5,c5,c5,c5,c5,c5,A.l(c5,c5,a5?C.e1:B.c,c5,c5,c5,c5,c5,c5,c5,c5,16,c5,c5,B.F,c5,c5,!0,c5,c5,c5,c5,c5,c5,c5,c5),c5,c5,c5),B.aY,c4.a0M("AUTOMATIC",B.b2)],a7),B.l,c5,B.e,B.h,0,c5,c5)
j=a5?C.NW:C.NN
a4=A.m(999)
a6=a5?C.kX:B.c
a8=A.m(999)
a6=A.E(A.o(B.z,A.c("BUY",c5,c5,c5,c5,c5,c5,A.l(c5,c5,a5?B.c:C.kX,c5,c5,c5,c5,c5,c5,c5,c5,12.5,c5,c5,B.F,c5,c5,!0,c5,c5,c5,c5,c5,c5,c5,c5),c5,c5,c5),B.f,c5,c5,new A.n(a6,c5,c5,a8,c5,c5,B.m),c5,c5,c5,c5,B.wT,c5,c5,c5),1)
j=A.o(c5,A.A(A.a([a6,A.E(A.as(A.c("SELL",c5,c5,c5,c5,c5,c5,A.l(c5,c5,a5?C.dA:C.dB,c5,c5,c5,c5,c5,c5,c5,c5,12.5,c5,c5,B.F,c5,c5,!0,c5,c5,c5,c5,c5,c5,c5,c5),c5,c5,c5),c5,c5,c5),1)],a7),B.l,c5,B.e,B.h,0,c5,c5),B.f,c5,c5,new A.n(j,c5,c5,a4,c5,c5,B.m),c5,c5,c5,c5,B.ez,c5,c5,c5)
a4=D.il(c0,!0,!1)
if(x)a6=c5
else{a6=B.i.aa(c1,c1<0.01?6:4)
a8=k.h(p,c6)
a6="\u2248 "+a6+" "+A.v(a8==null?"":a8)}a6=c4.cHJ(d2,"Amount it puts in",a4,!0,a6)
a4=B.i.aa(D.f4(b9.h(0,"takeProfitPct")),0)
a8=D.il(D.f4(b9.h(0,"takeProfitUsd")),!0,!1)
a9=x?c5:"sells at "+D.il(f*1.03,!0,!1)
a9=c4.bc_(d2,"Take profit  +"+a4+"%","+"+a8,C.ej,a9)
a8=B.i.aa(D.f4(b9.h(0,"stopLossPct")),1)
a4=D.il(D.f4(b9.h(0,"stopLossUsd")),!0,!1)
x=x?c5:"sells at "+D.il(f*0.985,!0,!1)
x=c4.bc_(d2,"Stop loss  -"+a8+"%","-"+a4,C.f4,x)
a4=c4.cHI(d2,"Leverage","None (1x)","no borrowing, no shorting")
a8=a5?C.kX:B.c
b0=A.m(999)
a8=A.o(B.z,A.c("Buys by itself when the trend turns up",c5,c5,c5,c5,c5,c5,A.l(c5,c5,a5?B.c:C.kX,c5,c5,c5,c5,c5,c5,c5,c5,13.5,c5,c5,B.F,c5,c5,!0,c5,c5,c5,c5,c5,c5,c5,c5),c5,c5,c5),B.f,c5,c5,new A.n(a8,c5,c5,b0,c5,c5,B.m),c5,c5,c5,c5,B.cm,c5,c5,1/0)
k=k.h(p,c6)
k=A.v(k==null?"":k)
x=c4.a0L(d2,A.x(A.a([q,B.af,j,B.S,a6,a9,x,a4,B.S,a8,B.al,A.as(A.c("Shown for "+k+" at its price right now. The agent buys whichever market signals first.",c5,c5,c5,c5,c5,c5,A.l(c5,c5,a5?C.dA:C.dB,c5,c5,c5,c5,c5,c5,c5,c5,11,c5,c5,c5,c5,c5,!0,c5,c5,c5,c5,c5,c5,c5,c5),B.K,c5,c5),c5,c5,c5)],a7),B.B,c5,B.e,B.h,0,B.p))}m.push(x)
m.push(c4.cg0(d2,w))
c2=J.z(w.h(0,"enabled"),!0)&&!J.z(w.h(0,c8),!0)
x=w.h(0,"lastTickAt")
c3=A.bh(A.v(x==null?"":x))
if(c2)x=C.ej
else x=a5?C.dA:C.dB
x=A.W(B.a3T,x,c5,c5,c5,16)
if(c2){q=c3==null?"not yet":D.aQz(D.bF4(c3))+" ET"
q="Trades are automatic: the agent checks all markets every 15 minutes by itself. Last check "+q+" \xb7 next "+D.hFr()+". Check now only looks, it never trades."}else q="The agent is stopped, so it makes no trades. Press Start and it checks all markets every 15 minutes by itself."
m.push(new A.D(C.bKy,A.A(A.a([x,B.bj,A.E(A.c(q,c5,c5,c5,c5,c5,c5,A.l(c5,c5,a5?C.dA:C.dB,c5,c5,c5,c5,c5,c5,c5,c5,11.5,c5,c5,c5,c5,1.35,!0,c5,c5,c5,c5,c5,c5,c5,c5),c5,c5,c5),1)],a7),B.B,c5,B.e,B.h,0,c5,c5),c5))
m.push(c4.cJ6(d2,d0))
m.push(c4.bEJ(d2))
m.push(c4.cxJ(d2,d0))
d0=J.z(v.h(0,"ordersSwitchOn"),!0)?"on":"off"
m.push(new A.D(B.hw,A.c("Version 1 is read-only: no order is ever sent to Alpaca. Order switch (ALPACA_ORDERS_ENABLED): "+d0+".",c5,c5,c5,c5,c5,c5,A.l(c5,c5,a5?C.dA:C.dB,c5,c5,c5,c5,c5,c5,c5,c5,11,c5,c5,c5,c5,c5,!0,c5,c5,c5,c5,c5,c5,c5,c5),B.K,c5,c5),c5))
return m},
c8j(d,e,f,g,h){var x,w,v,u,t,s=null
if(f.length<2)return B.bL
x=new A.Y(f,new D.eFe(),A.T(f).k("Y<1>")).gJ(0)
w=f.length
v=d.a
w=A.c("Watching "+w+" markets",s,s,s,s,s,s,A.l(s,s,v?C.e1:B.c,s,s,s,s,s,s,s,s,14,s,s,B.F,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)
u=this.a0M(""+x+" OPEN NOW",C.ej)
t=y.p
return new A.D(B.eJ,A.x(A.a([new A.D(C.bK2,A.A(A.a([w,B.aa,u,B.aY,A.c("tap one",s,s,s,s,s,s,A.l(s,s,v?C.dA:C.dB,s,s,s,s,s,s,s,s,11,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],t),B.l,s,B.e,B.h,0,s,s),s),new A.a5(s,128,A.hN(B.f,this.cqT(B.d.bk(f,new D.eFf(g))),new D.eFg(this,f,g,h,d),f.length,s,s,B.aL,new D.eFh(),!1),s),B.au],t),B.B,s,B.e,B.h,0,B.p),s)},
bL5(d,e,f){var x,w,v,u,t,s,r=this,q=null,p=D.aRk(e),o=p.length
if(o<2)return r.a0L(d,new A.a5(q,120,A.as(A.c("The chart appears after the first reading.",q,q,q,q,q,q,A.l(q,q,d.a?C.dA:C.dB,q,q,q,q,q,q,q,q,q,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),q,q,q),q))
x=B.d.fC(p,Math.max(0,o-r.y))
w=f==null?q:D.f4(f.h(0,"entryPrice"))
o=y.p
v=A.a([],o)
for(u=0;u<3;++u){t=C.cnE[u]
if(t<=12)s="1H"
else s=t<=24?"2H":"4H"
B.d.u(v,A.a([r.czM(d,s,r.y===t,new D.eF7(r,t)),B.bj],o))}v.push(B.aY)
v.push(r.b8F(d,"Trend lines",r.at,new D.eF8(r),F.xl))
v=A.a([A.A(v,B.l,q,B.e,B.h,0,q,q),B.S,new D.ady(x,d,w,r.at,D.f4(J.t(e,"price")),q)],o)
if(r.at){s=A.a([r.ayj(d,B.bA,"Fast line (45 min)"),r.ayj(d,B.b2,"Slow line (1 h 45 min)")],o)
if(w!=null)s.push(r.ayj(d,E.wA,"Your pretend buy"))
B.d.u(v,A.a([B.P,A.bZ(B.fS,s,B.br,q,4,14)],o))}return r.aAt(d,A.x(v,B.l,q,B.e,B.h,0,B.p),B.wU)},
cJq(d,a0,a1,a2){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i=J.a6(a0),h=D.iS(i.h(a0,"chart")).h(0,"trend"),g=J.k(h==null?"unknown":h),f=D.iS(J.t(a2,"state")),e=J.z(f.h(0,"enabled"),!0)&&!J.z(f.h(0,"brakePaused"),!0)
switch(g){case"up":h=C.fbZ
break
case"down":h=C.fd_
break
case"flat":h=C.fa9
break
default:h=C.fb0
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
l=A.c(v,j,j,j,j,j,j,A.l(j,j,h?C.e1:B.c,j,j,j,j,j,j,j,j,16,j,j,B.u,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)
k=y.p
return A.o(j,A.A(A.a([m,B.bb,A.E(A.x(A.a([l,B.bC,A.c(p,j,j,j,j,j,j,A.l(j,j,h?C.dA:C.dB,j,j,j,j,j,j,j,j,12.5,j,j,j,j,1.3,!0,j,j,j,j,j,j,j,j),j,j,j)],k),B.B,j,B.e,B.h,0,B.p),1)],k),B.l,j,B.e,B.h,0,j,j),B.f,j,j,new A.n(j,j,n,i,j,new A.a7(B.a5,B.a9,B.x,o,j,j),B.m),j,j,j,B.ec,B.bH,j,j,j)},
P2(d,e,f){var x=null,w=B.c.j(0.1),v=A.m(14)
return A.o(x,A.x(A.a([A.c(d,x,1,B.a2,x,x,x,B.X0,x,x,x),B.bC,new A.dk(B.dv,B.a5,B.f,A.c(e,x,x,x,x,x,x,A.l(x,x,f,x,x,x,x,x,x,x,x,15,x,x,B.F,x,x,!0,x,x,x,x,x,x,x,x),x,x,x),x)],y.p),B.B,x,B.e,B.h,0,B.p),B.f,x,x,new A.n(w,x,x,v,x,x,B.m),x,x,x,x,B.anh,x,x,x)},
crk(a1,a2,a3){var x,w,v,u,t,s,r,q,p,o=this,n=null,m=D.f4(a2.h(0,"entryPrice")),l=D.f4(a2.h(0,"qty")),k=J.a6(a3),j=J.z(a2.h(0,"symbol"),k.h(a3,"asset"))?D.f4(k.h(a3,"price")):m,i=l*j,h=i-50,g=m===0?0:(j-m)/m*100,f=h>=0,e=m*0.985,d=m*1.03,a0=B.i.D((j-e)/(d-e),0,1)
k=a1.a
x=y.p
w=A.A(A.a([A.c("Your pretend position",n,n,n,n,n,n,A.l(n,n,k?C.e1:B.c,n,n,n,n,n,n,n,n,16,n,n,B.F,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),B.aY,o.a0M("OPEN",C.ej)],x),B.l,n,B.e,B.h,0,n,n)
v=D.il(h,!0,!0)
v=A.c(v,n,n,n,n,n,n,A.l(n,n,f?C.ej:C.f4,n,n,n,n,n,n,n,n,34,n,n,B.F,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
u=g>=0?"+":""
t=B.i.aa(g,2)
v=A.A(A.a([v,B.aa,new A.D(B.eJ,A.c(u+t+"%",n,n,n,n,n,n,A.l(n,n,f?C.ej:C.f4,n,n,n,n,n,n,n,n,n,n,n,B.F,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),n)],x),B.dI,n,B.e,B.h,0,n,n)
u=f?"You would be winning right now":"You would be losing right now"
u=A.c(u,n,n,n,n,n,n,A.l(n,n,k?C.dA:C.dB,n,n,n,n,n,n,n,n,12.5,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
t=A.E(o.aAv(a1,"You put in",D.il(50,!0,!1)),1)
s=D.il(i,!0,!1)
t=A.A(A.a([t,B.aa,A.E(o.b34(a1,"Worth now",s,f?C.ej:C.f4),1)],x),B.l,n,B.e,B.h,0,n,n)
s=A.E(o.aAv(a1,"Bought at",D.il(m,!0,!1)),1)
s=A.A(A.a([s,B.aa,A.E(o.aAv(a1,"Shares",B.i.aa(l,l<0.01?6:4)+" "+A.v(a2.h(0,"symbol"))),1)],x),B.l,n,B.e,B.h,0,n,n)
r=A.ce(new D.eFl(a1,a0))
q=A.A(A.a([A.E(A.c("Stop loss\n"+D.il(e,!0,!1)+" \xb7 -$0.75",n,n,n,n,n,n,C.fIo,n,n,n),1),A.E(A.c("Take profit\n"+D.il(d,!0,!1)+" \xb7 +$1.50",n,n,n,n,n,n,C.fGZ,B.e5,n,n),1)],x),B.l,n,B.e,B.h,0,n,n)
p=D.ieS(a2.h(0,"entryAt"))
return o.a0L(a1,A.x(A.a([w,B.af,v,u,B.aA,t,B.P,s,B.aO,r,B.al,q,B.al,A.c("Bought "+p,n,n,n,n,n,n,A.l(n,n,k?C.dA:C.dB,n,n,n,n,n,n,n,n,11.5,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],x),B.B,n,B.e,B.h,0,B.p))},
aEt(d,e,f,g,h,i){var x,w,v=null,u=d.a,t=u?C.a0a:C.a0c,s=A.m(16),r=A.c(e,v,v,v,v,v,v,A.l(v,v,u?C.dA:C.dB,v,v,v,v,v,v,v,v,11.5,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
if(h==null)x=u?C.e1:B.c
else x=h
w=y.p
w=A.a([A.E(A.x(A.a([r,B.bC,A.c(f,v,v,v,v,v,v,A.l(v,v,x,v,v,v,v,v,v,v,v,g?24:17,v,v,B.F,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],w),B.B,v,B.e,B.h,0,B.p),1)],w)
if(i!=null)w.push(A.c(i,v,v,v,v,v,v,A.l(v,v,u?C.dA:C.dB,v,v,v,v,v,v,v,v,11.5,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v))
return A.o(v,A.A(w,B.l,v,B.e,B.h,0,v,v),B.f,v,v,new A.n(t,v,v,s,v,v,B.m),v,v,v,B.jg,B.eX,v,v,v)},
cHJ(d,e,f,g,h){return this.aEt(d,e,f,g,null,h)},
bc_(d,e,f,g,h){return this.aEt(d,e,f,!1,g,h)},
cHI(d,e,f,g){return this.aEt(d,e,f,!1,null,g)},
cg0(d,e){var x,w,v,u=this,t=null,s=J.z(e.h(0,"enabled"),!0)&&!J.z(e.h(0,"brakePaused"),!0),r=s?C.f4:C.ej
r=A.bn(r,t,t,t,t,t,t,t,new A.b9(A.m(999),B.a1),t,t,t)
x=u.r?t:new D.eF9(u,s)
w=A.W(s?B.xm:B.fZ,t,t,t,t,t)
r=A.E(new A.a5(t,52,A.d8(w,t,A.c(s?"Stop agent":"Start agent",t,t,t,t,t,t,B.nq,t,t,t),x,r),t),3)
x=d.a
w=x?C.e1:B.c
v=x?C.qz:C.qw
x=x?B.c.j(0.92):C.lQ
v=A.dg(t,t,x,t,t,t,t,t,t,w,t,t,t,t,new A.b9(A.m(999),B.a1),new A.av(v,1.5,B.r,-1),t,t,t,t)
x=u.r
w=x?t:u.gcyM()
return new A.D(B.ec,A.A(A.a([r,B.ar,A.E(new A.a5(t,52,A.em(x?B.L9:C.c4K,t,C.hbm,w,v),t),2)],y.p),B.l,t,B.e,B.h,0,t,t),t)},
cJ6(a7,a8){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=null,a5="outValue",a6=y.g.a(J.t(a8,"trades"))
if(a6==null)a6=B.cg
x=y.f
a6=J.cY(a6,x)
a6=A.cD(a6,new D.eFz(),a6.$ti.k("M.E"),y.P)
w=A.B(a6,A.a4(a6).k("M.E"))
a6=a7.a
v=y.p
u=A.a([A.c("Pretend trades",a4,a4,a4,a4,a4,a4,A.l(a4,a4,a6?C.e1:B.c,a4,a4,a4,a4,a4,a4,a4,a4,16,a4,a4,B.F,a4,a4,!0,a4,a4,a4,a4,a4,a4,a4,a4),a4,a4,a4),B.P],v)
if(w.length===0){t=A.W(B.h_,a6?C.dA:C.dB,a4,a4,a4,a4)
u.push(new A.D(B.cm,A.A(A.a([t,B.ar,A.E(A.c("No trades yet. Each buy shows the $50 put in, and each sell shows what came back and the win or loss.",a4,a4,a4,a4,a4,a4,A.l(a4,a4,a6?C.dA:C.dB,a4,a4,a4,a4,a4,a4,a4,a4,12.5,a4,a4,a4,a4,1.3,!0,a4,a4,a4,a4,a4,a4,a4,a4),a4,a4,a4),1)],v),B.l,a4,B.e,B.h,0,a4,a4),a4))}for(t=w.length,s=y.N,r=y.z,q=0;q<w.length;w.length===t||(0,A.I)(w),++q){p=w[q]
o=J.a6(p)
n=J.z(o.h(p,"decision"),"would buy")
m=o.h(p,"details")
l=x.b(m)?A.a1(m,s,r):A.S(s,r)
m=o.h(p,"asset")
k=J.k(m==null?"":m)
if(l.h(0,"amount")==null)j=50
else{m=l.h(0,"amount")
if(typeof m=="number")j=m
else{m=A.cF(A.v(m==null?"":m))
if(m==null)m=0
j=m}}i=l.h(0,"qty")
if(!(typeof i=="number")){m=A.cF(A.v(i==null?"":i))
i=m==null?0:m}h=l.h(0,"pnl")
if(!(typeof h=="number")){m=A.cF(A.v(h==null?"":h))
h=m==null?0:m}g=h>=0
if(n)f=B.cd
else f=g?C.ej:C.f4
m=a6?C.qz:C.qw
e=f.j(0.14)
d=new A.aP(13,13)
e=A.o(a4,A.W(n?B.vs:B.tC,f,a4,a4,a4,20),B.f,a4,a4,new A.n(e,a4,a4,new A.bb(d,d,d,d),a4,a4,B.m),a4,40,a4,a4,a4,a4,a4,40)
d=n?"Bought":"Sold"
a0=a6?C.e1:B.c
d=A.c(d+" "+k,a4,a4,a4,a4,a4,a4,new A.F(!0,a0,a4,a4,a4,a4,14,B.F,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4),a4,a4,a4)
if(n){if(i===0)a0=""
else a0=B.i.aa(i,i<0.01?6:4)+" at "
a1=o.h(p,"price")
if(!(typeof a1=="number")){a1=A.cF(A.v(a1==null?"":a1))
if(a1==null)a1=0}a1=a0+D.il(a1,!0,!1)
a0=a1}else{a0=o.h(p,"price")
if(!(typeof a0=="number")){a0=A.cF(A.v(a0==null?"":a0))
if(a0==null)a0=0}a0=D.il(a0,!0,!1)
a1=o.h(p,"reason")
a1=J.k(a1==null?"":a1)
a2=B.a.cd(a1,"(")
a0="at "+a0+" \xb7 "+B.a.i(a2>0?B.a.az(a1,0,a2):a1)}a1=a6?C.dA:C.dB
a0=A.c(a0,a4,1,B.a2,a4,a4,a4,new A.F(!0,a1,a4,a4,a4,a4,11.5,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4),a4,a4,a4)
o=o.h(p,"et_time")
o=J.k(o==null?"":o)
a1=a6?C.dA:C.dB
o=A.x(A.a([d,B.bC,a0,A.c(o,a4,a4,a4,a4,a4,a4,new A.F(!0,a1,a4,a4,a4,a4,10.5,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4),a4,a4,a4)],v),B.B,a4,B.e,B.h,0,B.p)
if(n)d="-"+D.il(j,!0,!1)
else{if(l.h(0,a5)==null)d=j+h
else{d=l.h(0,a5)
if(!(typeof d=="number")){d=A.cF(A.v(d==null?"":d))
if(d==null)d=0}}d="+"+D.il(d,!0,!1)}a0=a6?C.e1:B.c
d=A.a([A.c(d,a4,a4,a4,a4,a4,a4,new A.F(!0,a0,a4,a4,a4,a4,14,B.F,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4),a4,a4,a4)],v)
if(!n){a0=D.il(h,!0,!0)
if(l.h(0,"pct")==null)a1=""
else{a1=l.h(0,"pct")
if(!(typeof a1=="number")){a1=A.cF(A.v(a1==null?"":a1))
if(a1==null)a1=0}a1=a1>=0?"+":""
a3=l.h(0,"pct")
if(!(typeof a3=="number")){a3=A.cF(A.v(a3==null?"":a3))
if(a3==null)a3=0}a3=" ("+a1+B.i.aa(a3,2)+"%)"
a1=a3}a3=g?C.ej:C.f4
d.push(A.c(a0+a1,a4,a4,a4,a4,a4,a4,new A.F(!0,a3,a4,a4,a4,a4,12,B.F,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4),a4,a4,a4))}if(n){a0=a6?C.dA:C.dB
d.push(A.c("put in",a4,a4,a4,a4,a4,a4,new A.F(!0,a0,a4,a4,a4,a4,11,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4),a4,a4,a4))}u.push(A.o(a4,new A.c3(B.aL,B.e,B.h,B.l,a4,B.p,a4,0,A.a([e,B.bb,new A.bx(1,B.ba,o,a4),B.aa,A.x(d,B.dI,a4,B.e,B.h,0,B.p)],v),a4),B.f,a4,a4,new A.n(a4,a4,new A.bE(B.a1,B.a1,new A.av(m,1,B.r,-1),B.a1),a4,a4,a4,B.m),a4,a4,a4,a4,B.jQ,a4,a4,a4))}return this.a0L(a7,A.x(u,B.B,a4,B.e,B.h,0,B.p))},
bEJ(d){var x,w,v,u=this,t=null,s=u.x,r=u.e
r=s?r:A.cT(r,0,A.dx(8,"count",y.S),A.T(r).c).dq(0)
s=d.a
x=A.c("Agent activity",t,t,t,t,t,t,A.l(t,t,s?C.e1:B.c,t,t,t,t,t,t,t,t,16,t,t,B.F,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)
w=y.p
w=A.a([A.A(A.a([x,B.aY,A.c("newest first",t,t,t,t,t,t,A.l(t,t,s?C.dA:C.dB,t,t,t,t,t,t,t,t,11,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],w),B.l,t,B.e,B.h,0,t,t),B.al],w)
if(u.e.length===0)w.push(new A.D(B.f7,A.c("Nothing yet. A new line appears with every 15-minute check.",t,t,t,t,t,t,A.l(t,t,s?C.dA:C.dB,t,t,t,t,t,t,t,t,12.5,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),t))
for(s=r.length,v=0;v<r.length;r.length===s||(0,A.I)(r),++v)w.push(u.c75(d,r[v]))
if(u.e.length>8){if(u.x)s=u.w?"Show older":"That is everything"
else s="Show all"
w.push(A.as(A.bO(!1,A.c(s,t,t,t,t,t,t,t,t,t,t),t,t,!0,t,t,t,new D.eF0(u),t,t),t,t,t))}return u.a0L(d,A.x(w,B.B,t,B.e,B.h,0,B.p))},
c75(d,e){var x,w,v,u,t,s=null,r="price",q=J.a6(e),p=q.h(e,"decision"),o=J.k(p==null?"":p)
A:{if("would buy"===o){p=C.ej
break A}if("would sell"===o){p=B.bA
break A}if("hold"===o){p=B.b2
break A}if("day start"===o||"day end"===o){p=B.cd
break A}if("start"===o){p=C.ej
break A}if("stop"===o){p=C.f4
break A}if(J.z(q.h(e,"kind"),"error"))p=C.f4
else p=d.a?C.dA:C.dB
break A}x=q.h(e,"fast_ma")!=null&&q.h(e,"slow_ma")!=null
w=A.o(s,s,B.f,s,s,new A.n(p,s,s,s,s,s,B.a6),s,8,s,B.a1u,s,s,s,8)
v=o==="hold"?"Still holding":D.hCZ(o)
u=y.p
p=A.a([A.c(v,s,s,s,s,s,s,A.l(s,s,p,s,s,s,s,s,s,s,s,12.5,s,s,B.F,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],u)
if(J.z(D.iS(q.h(e,"details")).h(0,"by"),"cron"))B.d.u(p,A.a([B.bj,A.c("automatic",s,s,s,s,s,s,A.l(s,s,d.a?C.dA:C.dB,s,s,s,s,s,s,s,s,10,s,s,B.O,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],u))
p.push(B.aY)
v=q.h(e,"et_time")
v=D.ilk(J.k(v==null?"":v))
t=d.a
p.push(A.c(v,s,s,s,s,s,s,A.l(s,s,t?C.dA:C.dB,s,s,s,s,s,s,s,s,10.5,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s))
p=A.A(p,B.l,s,B.e,B.h,0,s,s)
v=q.h(e,"reason")
v=D.hCZ(J.k(v==null?"":v))
p=A.a([p,A.c(v,s,s,s,s,s,s,A.l(s,s,t?C.e1:B.c,s,s,s,s,s,s,s,s,12.5,s,s,s,s,1.3,!0,s,s,s,s,s,s,s,s),s,s,s)],u)
if(q.h(e,r)!=null||x){v=A.a([],y.s)
if(q.h(e,"asset")!=null&&q.h(e,r)!=null)v.push(A.v(q.h(e,"asset"))+" "+D.il(D.f4(q.h(e,r)),!0,!1))
if(x)v.push("fast "+B.i.aa(D.f4(q.h(e,"fast_ma")),2)+" \xb7 slow "+B.i.aa(D.f4(q.h(e,"slow_ma")),2))
q=B.d.aM(v,"  \xb7  ")
p.push(A.c(q,s,s,s,s,s,s,A.l(s,s,t?C.dA:C.dB,s,s,s,s,s,s,s,s,10.5,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s))}return new A.D(B.Hv,A.A(A.a([w,B.ar,A.E(A.x(p,B.B,s,B.e,B.h,0,B.p),1)],u),B.B,s,B.e,B.h,0,s,s),s)},
cxJ(d,e){var x,w,v,u,t,s,r,q,p,o,n,m=null,l=this.c
l.toString
l=A.O(l).bge(B.L)
x=d.a
w=x?C.e1:B.c
v=x?C.dA:C.dB
u=A.W(C.bVr,B.b2,m,m,m,m)
t=y.p
s=A.A(A.a([new A.d1(1,B.cf,A.c("The rules it follows",m,m,m,m,m,m,A.l(m,m,x?C.e1:B.c,m,m,m,m,m,m,m,m,14.5,m,m,B.F,m,m,!0,m,m,m,m,m,m,m,m),m,m,m),m),B.aa,A.ay(m,A.o(m,C.flH,B.f,m,m,new A.n(m,m,m,A.m(999),m,B.tL,B.m),m,m,m,m,B.hj,m,m,m),B.y,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,this.gcll(),m,m,m,m,m,m,!1,B.a4)],t),B.l,m,B.e,B.h,0,m,m)
r=A.c("Read-only, set in the code",m,m,m,m,m,m,A.l(m,m,x?C.dA:C.dB,m,m,m,m,m,m,m,m,11.5,m,m,m,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)
q=A.a([],t)
p=y.g.a(J.t(e,"rules"))
p=J.aT(p==null?B.cg:p)
while(p.C()){o=J.k(p.gP(p))
n=x?C.e1:B.c
q.push(new A.D(C.bE9,new A.c3(B.aL,B.e,B.h,B.B,m,B.p,m,0,A.a([C.eAq,B.aa,new A.bx(1,B.ba,A.c(o,m,m,m,m,m,m,new A.F(!0,n,m,m,m,m,12.5,m,m,m,m,m,1.35,m,m,m,m,m,m,m,m,m,m,m,m,m),m,m,m),m)],t),m),m))}return this.aAt(d,new A.p_(l,A.aF(!1,B.a3,!0,m,M.hs_(m,q,G.anN,m,v,w,!1,u,m,r,B.hb,s),B.f,m,0,m,m,m,m,m,B.id),m),B.ag)},
aAt(d,e,f){var x=null,w=d.a,v=w?B.c.j(0.92):C.lQ,u=A.m(24)
return A.o(x,e,B.f,x,x,new A.n(v,x,A.K(w?B.c:C.uQ,B.r,1),u,A.a([new A.ab(0,B.H,d.ga9y(),B.dm,24)],y.V),x,B.m),x,x,x,B.ec,f,x,x,x)},
a0L(d,e){return this.aAt(d,e,B.bR)},
aaA(d,e,f){var x=null,w=f.j(0.12),v=A.m(16),u=A.K(f.j(0.45),B.r,1),t=A.W(B.a4j,f,x,x,x,20)
return A.o(x,A.A(A.a([t,B.ar,A.E(A.c(e,x,x,x,x,x,x,A.l(x,x,d.a?C.e1:B.c,x,x,x,x,x,x,x,x,12.5,x,x,x,x,1.35,!0,x,x,x,x,x,x,x,x),x,x,x),1)],y.p),B.l,x,B.e,B.h,0,x,x),B.f,x,x,new A.n(w,x,u,v,x,x,B.m),x,x,x,B.ec,B.bl,x,x,x)},
b32(d,e,f){var x=null,w=d.a,v=w?B.c.j(0.92):C.lQ,u=A.K(w?B.c:C.uQ,B.r,1)
return A.aF(!1,B.a3,!0,x,A.aM(!1,x,!0,A.o(x,A.W(e,w?C.e1:B.c,x,x,x,18),B.f,x,x,new A.n(x,x,u,x,x,x,B.a6),x,40,x,x,x,x,x,40),B.cK,!0,x,x,x,x,x,x,x,x,x,x,x,f,x,x,x,x,x,x,x),B.f,v,0,x,x,B.cK,x,x,B.ai)},
b8F(d,e,f,g,h){var x,w,v,u,t,s,r,q=null
if(f){x=d.a
w=x?C.kX:B.c
v=w
w=x
x=v}else{x=d.a
w=x?C.NW:C.NN
v=w
w=x
x=v}u=A.m(999)
t=y.p
s=A.a([],t)
if(h!=null){if(f)r=w?B.c:C.kX
else r=w?C.dA:C.dB
B.d.u(s,A.a([A.W(h,r,q,q,q,14),B.d7],t))}if(f)w=w?B.c:C.kX
else w=w?C.dA:C.dB
s.push(A.c(e,q,q,q,q,q,q,A.l(q,q,w,q,q,q,q,q,q,q,q,11.5,q,q,B.O,q,q,!0,q,q,q,q,q,q,q,q),q,q,q))
return A.ay(q,A.cU(q,A.A(s,B.l,q,B.e,B.M,0,q,q),q,q,B.b_,new A.n(x,q,q,u,q,q,B.m),B.eI,q,q,q,q,I.a1z,q,q,q),B.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,g,q,q,q,q,q,q,!1,B.a4)},
czM(d,e,f,g){return this.b8F(d,e,f,g,null)},
ayj(d,e,f){var x=null,w=A.o(x,x,B.f,x,x,new A.n(e,x,x,A.m(2),x,x,B.m),x,3,x,x,x,x,x,14)
return A.A(A.a([w,B.e4,A.c(f,x,x,x,x,x,x,A.l(x,x,d.a?C.dA:C.dB,x,x,x,x,x,x,x,x,11,x,x,x,x,x,!0,x,x,x,x,x,x,x,x),x,x,x)],y.p),B.l,x,B.e,B.M,0,x,x)},
a0M(d,e){var x=null,w=e.j(0.14),v=A.m(999)
return A.o(x,A.c(d,x,x,x,x,x,x,A.l(x,x,e,x,x,x,x,x,x,x,x,10,x,x,B.u,x,x,!0,x,0.6,x,x,x,x,x,x),x,x,x),B.f,x,x,new A.n(w,x,x,v,x,x,B.m),x,x,x,x,B.fC,x,x,x)},
b34(d,e,f,g){var x=null,w=d.a,v=w?C.a0a:C.a0c,u=A.m(16),t=A.c(e,x,x,x,x,x,x,A.l(x,x,w?C.dA:C.dB,x,x,x,x,x,x,x,x,11.5,x,x,x,x,x,!0,x,x,x,x,x,x,x,x),x,x,x)
if(g==null)w=w?C.e1:B.c
else w=g
return A.o(x,A.x(A.a([t,B.cT,new A.dk(B.dv,B.a5,B.f,A.c(f,x,x,x,x,x,x,A.l(x,x,w,x,x,x,x,x,x,x,x,16,x,x,B.F,x,x,!0,x,x,x,x,x,x,x,x),x,x,x),x)],y.p),B.B,x,B.e,B.h,0,B.p),B.f,x,x,new A.n(v,x,x,u,x,x,B.m),x,x,x,x,B.bl,x,x,x)},
aAv(d,e,f){return this.b34(d,e,f,null)},
cM5(d){var x=A.v(d==null?"":d),w=A.bh(x.length>=19?B.a.az(x,0,19):"")
if(w==null)return""
return" \xb7 opens "+B.T6[A.lE(w)-1]+" "+D.aQz(w)+" ET"}}
D.ady.prototype={
S(){return new D.be4()}}
D.be4.prototype={
aAu(d,e){var x=this,w=x.a.c.length,v=B.o.D(B.i.be(d.a/e*w),0,w-1)
if(v!==x.d)x.l(new D.cWp(x,v))},
B(d){return A.ce(new D.cWy(this))}}
D.be5.prototype={
a2(c9,d0){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2=this,c3=null,c4={},c5=d0.b,c6=c5-18,c7=y.n,c8=A.a([],c7)
for(x=c2.c,w=x.length,v=0;u=x.length,v<u;x.length===w||(0,A.I)(x),++v){t=x[v]
u=J.a6(t)
s=u.h(t,"h")
if(!(typeof s=="number")){s=A.cF(A.v(s==null?"":s))
if(s==null)s=0}u=u.h(t,"l")
if(!(typeof u=="number")){u=A.cF(A.v(u==null?"":u))
if(u==null)u=0}B.d.u(c8,A.a([s,u],c7))}w=c2.f
if(w)for(v=0;v<x.length;x.length===u||(0,A.I)(x),++v){t=x[v]
s=A.a([],c7)
r=J.a6(t)
if(r.h(t,"f")!=null){q=r.h(t,"f")
if(!(typeof q=="number")){q=A.cF(A.v(q==null?"":q))
if(q==null)q=0}s.push(q)}if(r.h(t,"s")!=null){r=r.h(t,"s")
if(!(typeof r=="number")){r=A.cF(A.v(r==null?"":r))
if(r==null)r=0}s.push(r)}B.d.u(c8,s)}c7=c2.e
u=c7!=null
if(u)c8.push(c7)
s=c2.r
r=s>0
if(r)c8.push(s)
c4.a=B.d.eD(c8,B.pp)
p=c4.b=B.d.eD(c8,B.op)
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
k=new D.cWz(l)
j=new D.cWB(c4,c6)
$.R()
i=A.L()
q=c2.d.a
i.r=(q?C.qz:C.qw).j(0.7).gp(0)
i.c=1
for(h=1;h<=3;++h){g=c6*h/4
for(f=0;f<c8;f+=6)c9.ah(new A.r(f,g),new A.r(f+2,g),i)}if(w){w=new D.cWA(c2,m,k,j,c9)
w.$2("s",B.b2)
w.$2("f",B.bA)}for(w=Math.max(2,l*0.62)/2,e=c2.w,d=e!=null,h=0;h<m;++h){t=x[h]
a0=J.a6(t)
a1=a0.h(t,"o")
if(!(typeof a1=="number")){a2=A.cF(A.v(a1==null?"":a1))
a1=a2==null?0:a2}a3=a0.h(t,"c")
if(!(typeof a3=="number")){a2=A.cF(A.v(a3==null?"":a3))
a3=a2==null?0:a2}a4=a0.h(t,"h")
if(!(typeof a4=="number")){a2=A.cF(A.v(a4==null?"":a4))
a4=a2==null?0:a2}a5=a0.h(t,"l")
if(!(typeof a5=="number")){a0=A.cF(A.v(a5==null?"":a5))
a5=a0==null?0:a0}a6=a3>=a1?C.ej:B.l_
a7=d&&e!==h
$.R()
a8=new A.ar(B.T,B.Q,B.V,B.W,B.U)
a8.r=(a7?a6.j(0.45):a6).gp(0)
a0=k.$1(h)
a2=j.$1(a4)
a9=k.$1(h)
b0=j.$1(a5)
a8.c=1.4
c9.ah(new A.r(a0,a2),new A.r(a9,b0),a8)
b1=j.$1(Math.max(a1,a3))
b2=j.$1(Math.min(a1,a3))
b0=A.bu(new A.a2(k.$1(h)-w,b1,k.$1(h)+w,Math.max(b2,b1+1.5)),B.hB)
a8.b=B.Q
c9.aq(b0,a8)}if(u)c2.aUd(c9,j.$1(c7),c8,E.wA,"Buy "+D.il(c7,!0,!1),!0)
if(r){c7=j.$1(s)
c2.bOU(c9,c7,c8,(q?C.e1:B.c).j(0.55),D.il(s,!0,!1))}b3=A.ft(c3,B.cw,c3,c3,c3,c3,B.a7,B.bW,c3,B.dF,B.bX)
for(c7=[0,m/3|0,B.o.ar(2*m,3),m-1],w=c7.length,c5-=13,u=c2.b,v=0;v<w;++v){h=c7[v]
s=J.t(x[h],"t")
b4=A.bh(A.v(s==null?"":s))
if(b4==null)continue
s=D.aQz(D.bF4(b4))
r=q?C.dA:C.dB
b3.sb2(0,new A.es(s,c3,c3,B.cN,c3,c3,c3,c3,c3,c3,new A.F(!0,r,c3,u,c3,c3,10,c3,c3,c3,c3,c3,c3,c3,c3,c3,c3,c3,c3,c3,c3,c3,c3,c3,c3,c3)))
b3.e5()
s=k.$1(h)
r=b3.b.c
b3.a2(c9,new A.r(B.i.D(s-r/2,0,c8-r),c5))}if(d&&e<m){t=x[e]
f=k.$1(e)
c5=J.a6(t)
b5=j.$1(D.f4(c5.h(t,"c")))
$.R()
b6=A.L()
b6.r=(q?C.e1:B.c).j(0.5).gp(0)
b6.c=1
for(b7=0;b7<c6;b7+=6)c9.ah(new A.r(f,b7),new A.r(f,b7+3),b6)
$.R()
c7=A.L()
c7.r=(q?B.c.j(0.92):C.lQ).gp(0)
c9.O(new A.r(f,b5),6,c7)
c7=A.L()
c7.r=(q?C.e1:B.c).gp(0)
c7.b=B.ab
c7.c=2.5
c9.O(new A.r(f,b5),6,c7)
c7=c5.h(t,"t")
b4=A.bh(A.v(c7==null?"":c7))
c7=b4==null?"":D.aQz(D.bF4(b4))+" ET\n"
c5=D.il(D.f4(c5.h(t,"c")),!0,!1)
b3.sb2(0,A.cR(c3,c3,c3,c3,c3,c3,c3,c3,c3,A.l(c3,c3,q?B.c:C.kX,c3,c3,c3,c3,c3,u,c3,c3,11.5,c3,c3,B.F,c3,1.3,!0,c3,c3,c3,c3,c3,c3,c3,c3),c7+c5))
b3.sD8(0,B.K)
b3.e5()
c5=b3.b
b8=c5.c+18
c5=c5.a.c
b9=c5.gb9(c5)+10
c0=B.i.D(f-b8/2,0,c8-b8)
c1=Math.max(0,b5-b9-14)
c8=A.bu(new A.a2(c0,c1,c0+b8,c1+b9),B.hS)
c5=A.L()
c5.r=(q?C.kX:B.c).gp(0)
c9.aq(c8,c5)
b3.a2(c9,new A.r(c0+9,c1+5))}},
aUd(d,e,f,g,h,i){var x,w,v,u,t,s,r,q,p,o,n=null
$.R()
x=A.L()
x.r=g.gp(0)
x.c=1.2
for(w=0;w<f;w+=7)d.ah(new A.r(w,e),new A.r(w+3.5,e),x)
v=A.ft(n,B.cw,n,n,n,A.cR(n,n,n,n,n,n,n,n,n,A.l(n,n,B.c,n,n,n,n,n,this.b,n,n,10,n,n,B.F,n,n,!0,n,n,n,n,n,n,n,n),h),B.a7,B.bW,n,B.dF,B.bX)
v.e5()
u=v.b
t=u.c+12
u=u.a.c
s=u.gb9(u)+6
r=i?0:f-t
u=e-s/2
q=A.bu(new A.a2(r,u,r+t,u+s),B.q5)
$.R()
p=A.L()
if(i)o=E.wA
else o=this.d.a?C.kX:B.c
p.r=o.gp(0)
d.aq(q,p)
v.a2(d,new A.r(r+6,u+3))},
bOU(d,e,f,g,h){return this.aUd(d,e,f,g,h,!1)},
aD(d){var x=this
return d.c!==x.c||d.w!=x.w||d.f!==x.f||d.e!=x.e||d.r!==x.r||d.d.a!==x.d.a}}
D.aKu.prototype={
a2(d,e){var x,w,v,u,t,s,r,q,p,o,n=null,m=this.b
if(m.length<2)return
x=A.T(m).k("N<1,G>")
w=A.B(new A.N(m,new D.ffC(),x),x.k("ak.E"))
v=B.d.eD(w,B.pp)
u=B.d.eD(w,B.op)-v
if(u<1e-9)u=1
m=$.R()
x=A.a([],y.v)
t=new A.aG(m.r,B.aj,n,n,x)
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
t.ac()}}o=A.zI(t)
o.E(new A.aq(m,s))
o.E(new A.aq(0,s))
o.E(new A.by())
$.R()
x=A.L()
q=this.c
x.san(new A.a7(B.aX,B.b1,B.x,A.a([q.j(0.25),q.j(0)],y.O),n,n).aA(0,new A.a2(0,0,0+m,0+s)))
d.af(o,x)
x=A.L()
x.r=q.gp(0)
x.b=B.ab
x.c=1.8
x.e=B.dO
d.af(t,x)
x=B.d.gal(w)
p=A.L()
p.r=q.gp(0)
d.O(new A.r(m,s-(x-v)/u*s),3,p)},
aD(d){return d.b!==this.b||!d.c.A(0,this.c)}}
D.yU.prototype={}
D.a1s.prototype={
ga9y(){return this.a?B.cd.j(0.08):B.v.j(0.35)}}
D.nk.prototype={}
D.uq.prototype={}
D.XA.prototype={
S(){var x=null,w=y.N,v=A.a([],y.h),u=$.ax(),t=A.m3(0,x,x),s=A.a([],y.t)
return new D.aH9(A.aQ(w),v,new A.at(B.ax,u),t,s,new A.at(B.ax,u),A.S(w,w),A.S(w,y.R),x,x)}}
D.a_v.prototype={}
D.aH9.prototype={
gT7(){var x,w=this,v=w.d
if(v===$){w.a.toString
x=A.acm(null,0,3,w)
w.d!==$&&A.bF()
w.d=x
v=x}return v},
Z(){var x,w=this
w.a4()
x=w.e=w.a.c
x=x==null?null:J.t(x,"fx")
y.g.a(x)
if(x==null)x=B.cg
x=J.cY(x,y.f)
x=A.cD(x,new D.eGl(),x.$ti.k("M.E"),y.P)
x=A.B(x,A.a4(x).k("M.E"))
w.as=x
w.f=new A.V(Date.now(),0,!1)
w.gT7().aV(0,new D.eGm(w))
if(!w.a.d){w.aeg()
w.R9()
w.r=A.de(B.hI,new D.eGn(w))}},
t(){var x,w=this,v=w.r
if(v!=null)v.a1(0)
w.gT7().t()
v=w.ch
x=$.ax()
v.V$=x
v.R$=0
v=w.y
v.V$=x
v.R$=0
w.z.t()
w.bBk()},
aeg(){var x=0,w=A.j(y.H),v=1,u=[],t=this,s,r,q,p,o
var $async$aeg=A.e(function(d,e){if(d===1){u.push(e)
x=v}for(;;)switch(x){case 0:v=3
x=6
return A.b(A.az(),$async$aeg)
case 6:s=e
q=s.qI("ngmy_signal_grid_lessons_done")
r=q==null?B.Z:q
if(t.c!=null)t.l(new D.eFU(t,r))
v=1
x=5
break
case 3:v=2
o=u.pop()
x=5
break
case 2:x=1
break
case 5:return A.h(null,w)
case 1:return A.f(u.at(-1),w)}})
return A.i($async$aeg,w)},
a_d(d){return this.c8a(d)},
c8a(d){var x=0,w=A.j(y.H),v=1,u=[],t=this,s,r,q,p
var $async$a_d=A.e(function(e,f){if(e===1){u.push(f)
x=v}for(;;)switch(x){case 0:t.l(new D.eFV(t,d))
v=3
x=6
return A.b(A.az(),$async$a_d)
case 6:s=f
r=t.w
r=A.B(r,A.a4(r).k("ci.E"))
x=7
return A.b(s.aF("StringList","ngmy_signal_grid_lessons_done",r),$async$a_d)
case 7:v=1
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
return A.i($async$a_d,w)},
R9(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$R9=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(A.hh(A.J(["action","paStatus","live",!0,"fx",!0],y.N,y.z),!1,!1,!1,!1,B.Hq),$async$R9)
case 3:r=e
if(u.c==null||r==null||!J.z(J.t(r,"ok"),!0)){x=1
break}t=y.g.a(J.t(r,"fx"))
if(t==null)t=B.cg
t=J.cY(t,y.f)
t=A.cD(t,new D.eG1(),t.$ti.k("M.E"),y.P)
s=A.B(t,A.a4(t).k("M.E"))
u.l(new D.eG2(u,r,s))
u.cgY()
case 1:return A.h(v,w)}})
return A.i($async$R9,w)},
cgY(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=A.a([],y.s)
for(x=k.gaQk(),w=x.length,v=k.CW,u=y.N,t=y.z,s=y.f,r=k.cx,q=0;q<x.length;x.length===w||(0,A.I)(x),++q){p=x[q]
o=J.a6(p)
n=J.k(o.h(p,"asset"))
o=o.h(p,"reading")
o=(s.b(o)?A.a1(o,u,t):A.S(u,t)).h(0,"bias")
m=J.k(o==null?"unknown":o)
l=v.h(0,n)
if(l!=null&&l!==m&&m!=="unknown"&&l!=="unknown"){r.n(0,n,new A.bsD(new A.V(Date.now(),0,!1),l,m))
i.push(n+" turned "+m.toUpperCase())}v.n(0,n,m)}r.bq(r,new D.eFW())
if(i.length!==0&&k.c!=null){k.l(new D.eFX())
x=k.c.L(y.q).f
u=A.cT(i,0,A.dx(3,"count",y.S),u).aM(0," \xb7 ")
w=i.length
w=w>3?" and "+(w-3)+" more":""
x.U(A.b2(j,j,j,B.i0,j,B.t,j,A.c("Signal changed: "+u+w,j,j,j,j,j,j,j,j,j,j),j,B.lv,j,j,j,j,j,j,j,j,j,j))}},
gaQk(){var x=A.B(D.DE(this.gz6()),y.P)
B.d.u(x,this.as)
return x},
gz6(){var x=this.e
return D.iS(D.iS(x==null?null:J.t(x,"state")).h(0,"snapshot"))},
gcE1(){var x=D.DE(this.gz6()),w=A.T(x).k("Y<1>"),v=A.B(new A.Y(x,new D.eGg(),w),w.k("M.E"))
if(v.length===0)return D.DE(this.gz6()).length===0?null:B.d.gH(D.DE(this.gz6()))
B.d.b_(v,new D.eGh())
return B.d.gH(v)},
c6x(){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.e,i=D.iS(j==null?k:J.t(j,"state")),h=y.f.b(i.h(0,"shadow"))?D.iS(i.h(0,"shadow")):k
j=l.e
x=D.iS(j==null?k:J.t(j,"today"))
j=l.e
w=D.iS(j==null?k:J.t(j,"record"))
j=l.e
j=j==null?k:J.t(j,"nowEt")
j=A.v(j==null?"unknown":j)
v=J.z(i.h(0,"enabled"),!0)?"running":"stopped"
u=J.z(i.h(0,"brakePaused"),!0)?", paused by the 25 dollar brake":""
t=D.il(D.f4(i.h(0,"totalPnl")),!0,!0)
s=D.il(D.f4(x.h(0,"day_pnl")),!0,!0)
r=w.h(0,"wins")
r=A.v(r==null?0:r)
q=w.h(0,"losses")
j="LIVE DATA from the NGMY paper trading agent (Eastern Time now: "+j+"):\n"+("Agent: "+v+u+". Pretend P/L all time "+t+", today "+s+", wins "+r+", losses "+A.v(q==null?0:q)+".\n")
if(h!=null){p=D.f4(J.t(B.d.dA(D.DE(l.gz6()),new D.eFK(h),new D.eFL()),"price"))
o=D.f4(h.h(0,"entryPrice"))
v=A.v(h.h(0,"symbol"))
u=B.i.aa(o,2)
t=B.i.aa(p,2)
j+="Open pretend trade: "+v+", $50 bought at "+u+", now "+t+" ("+A.v(o===0?0:B.i.aa((p-o)/o*100,2))+"%). Take profit at "+B.i.aa(o*1.03,2)+", stop loss at "+B.i.aa(o*0.985,2)+".\n"}else j+="No open pretend trade.\n"
n=new D.eFM()
j+="Agent markets (5-minute candles; fast line = 9-candle average, slow = 21-candle average; strength 0 bearish to 100 bullish):\n"
for(v=D.DE(l.gz6()),u=v.length,m=0;m<v.length;v.length===u||(0,A.I)(v),++m)j+=A.v(n.$1(v[m]))+"\n"
v=l.as
u=v.length
if(u!==0){j+="Forex pairs (real interbank prices, 1-minute candles, signals only; the agent does not trade them; OTC prices at brokers differ):\n"
for(m=0;m<v.length;v.length===u||(0,A.I)(v),++m)j+=A.v(n.$1(v[m]))+"\n"}return j.charCodeAt(0)==0?j:j},
JV(d){return this.bHe(d)},
bHe(d){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o,n,m,l,k
var $async$JV=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:l={}
k=B.a.i(d)
if(k.length===0||u.Q){x=1
break}u.y.bN(0,B.ci)
u.l(new D.eFE(u,k))
u.b8o()
t=u.x
s=t.length
if(s>1){t=B.d.ds(t,Math.max(0,s-9),s-1)
r=new A.N(t,new D.eFF(),A.T(t).k("N<1,p>")).aM(0,"\n")}else r=""
t=u.e
t=t==null?null:J.t(t,"rules")
y.g.a(t)
if(t==null)t=B.cg
s=y.N
q=J.ba(t,new D.eFG(),s).aM(0,"\n")
t=u.c6x()
p=r.length===0?"":"\nCONVERSATION SO FAR:\n"+r+"\n"
l.a=null
x=u.a.d?3:5
break
case 3:l.a="Preview mode: the tutor answers here using the live readings."
x=4
break
case 5:x=6
return A.b(A.hh(A.J(["action","chat","prompt",'You are the NGMY Signal Grid trading tutor. You teach a complete beginner how trading works, using the live market data and the rules of the NGMY paper trading agent below.\nHow to answer:\n- Plain, friendly, simple English. Short sentences. No jargon without explaining it. Usually under 170 words.\n- When the question is about a market or "right now", use the LIVE DATA and quote the real numbers (price, trend, strength, RSI, last hour), then explain what they mean and what the agent\'s rules say.\n- Say clearly whether a market looks bullish, bearish or sideways and why, and what would need to happen for a buy or sell signal under the agent\'s rules.\n- This is practice with pretend (paper) money. You may explain what the rules signal, but never promise profit, never say a price will surely go up or down, and never tell the student to trade real or borrowed money. Remind them briefly when it fits that signals can fail and the stop loss keeps losses small.\n- No markdown headings or tables. You may use short lines starting with "- ".\n\nAGENT RULES:\n'+q+"\n\n"+t+"\n"+p+"\nStudent: "+k+"\nTutor:"],s,y.z),!1,!1,!1,!1,B.oK),$async$JV)
case 6:o=f
t=o==null
if(t)n=null
else{s=J.t(o,"text")
s=s==null?null:B.a.i(J.k(s))
n=s}if(n==null)n=""
if(n.length!==0){t=A.aL(n,"**","")
s=A.af("^#+\\s*",!0,!1,!0,!1)
m=A.aL(t,s,"")}else{t=t?null:J.t(o,"error")
m=J.k(t==null?"The tutor could not answer just now. Please try again.":t)}l.a=m
case 4:if(u.c==null){x=1
break}u.l(new D.eFH(l,u))
u.b8o()
case 1:return A.h(v,w)}})
return A.i($async$JV,w)},
b8o(){$.aU.x1$.push(new D.eG3(this))},
aQR(d){this.gT7().Gf(2)
this.JV(d)},
B(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=A.O(d).ax.a===B.dd,g=new D.a1s(h),f=h?C.yJ:C.yH,e=h?C.yJ:C.yH
e=A.a([e,h?C.a_w:C.a_m],y.O)
x=j.b31(g,B.eG,new D.eGi(d))
w=A.c("Trading Academy",i,i,i,i,i,i,A.l(i,i,h?C.e1:B.c,i,i,i,i,i,i,i,i,17,i,i,B.F,i,i,!0,i,i,i,i,i,i,i,i),i,i,i)
v=y.p
w=A.A(A.a([x,B.ar,A.E(A.x(A.a([w,A.c("Lessons, live signals and a tutor",i,i,i,i,i,i,A.l(i,i,h?C.dA:C.dB,i,i,i,i,i,i,i,i,11.5,i,i,i,i,i,!0,i,i,i,i,i,i,i,i),i,i,i)],v),B.B,i,B.e,B.h,0,B.p),1),A.o(i,C.flE,B.f,i,i,new A.n(C.ej.j(0.14),i,i,A.m(999),i,i,B.m),i,i,i,i,B.fL,i,i,i)],v),B.l,i,B.e,B.h,0,i,i)
x=h?C.NW:C.NN
u=A.m(999)
t=A.a([],v)
for(s=[C.fbL,C.fa1,C.faJ],r=s.length,q=0;q<r;++q){p={}
o=s[q]
p.a=null
p.a=o.a
n=j.gT7().d===p.a
if(n)m=h?C.kX:B.c
else m=B.L
l=new A.aP(999,999)
if(n)k=h?B.c:C.kX
else k=h?C.dA:C.dB
k=A.W(o.c,k,i,i,i,15)
if(n)n=h?B.c:C.kX
else n=h?C.dA:C.dB
t.push(new A.bx(1,B.ba,A.ay(i,A.cU(i,new A.c3(B.aL,B.b9,B.h,B.l,i,B.p,i,0,A.a([k,B.e4,new A.d1(1,B.cf,A.c(o.b,i,i,B.a2,i,i,i,new A.F(!0,n,i,i,i,i,12.5,B.F,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i),i,i,i),i)],v),i),i,i,B.b_,new A.n(m,i,i,new A.bb(l,l,l,l),i,i,B.m),B.a3,i,i,i,i,B.wT,i,i,i),B.y,!1,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,new D.eGj(p,j),i,i,i,i,i,i,!1,B.a4),i))}h=A.o(i,A.A(t,B.l,i,B.e,B.h,0,i,i),B.f,i,i,new A.n(x,i,i,u,i,i,B.m),i,i,i,i,B.ez,i,i,i)
x=j.gT7()
return A.c5(i,f,A.o(i,A.bm(!0,A.x(A.a([new A.D(C.bFM,w,i),new A.D(B.ao5,h,i),A.E(A.bal(A.a([j.c64(g),j.cD6(g),j.bHk(g)],v),x,i),1)],v),B.l,i,B.e,B.h,0,B.p),!0,!1,B.ag,!0,!0),B.f,i,i,new A.n(i,i,i,i,i,new A.a7(B.aX,B.b1,B.x,e,i,i),B.m),i,i,i,i,i,i,i,i),i,!1,!1,i,i)},
b31(d,e,f){var x=null,w=d.a,v=w?B.c.j(0.92):C.lQ,u=A.K(w?B.c:C.uQ,B.r,1)
return A.aF(!1,B.a3,!0,x,A.aM(!1,x,!0,A.o(x,A.W(e,w?C.e1:B.c,x,x,x,18),B.f,x,x,new A.n(x,x,u,x,x,x,B.a6),x,40,x,x,x,x,x,40),B.cK,!0,x,x,x,x,x,x,x,x,x,x,x,f,x,x,x,x,x,x,x),B.f,v,0,x,x,B.cK,x,x,B.ai)},
c64(d){var x,w=null,v=new A.Y(C.a6p,new D.eFJ(this),y.E).gJ(0),u=A.m(24),t=y.p
t=A.a([A.o(w,A.x(A.a([C.hc1,B.au,C.fTJ,B.aA,A.bv(A.m(9),A.jE(B.c.j(0.18),w,w,8,w,v/10,B.af9),B.aq),B.al,A.c(""+v+" of 10 lessons done",w,w,w,w,w,w,B.acD,w,w,w)],t),B.B,w,B.e,B.h,0,B.p),B.f,w,w,new A.n(w,w,w,u,w,C.cdO,B.m),w,w,w,w,B.fc,w,w,w),B.aA],t)
for(x=0;x<10;++x)t.push(this.c62(d,x))
t.push(B.al)
t.push(A.c("Practice with pretend money. Signals and lessons are for learning; markets can always surprise.",w,w,w,w,w,w,A.l(w,w,d.a?C.dA:C.dB,w,w,w,w,w,w,w,w,11,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),B.K,w,w))
return A.cn(t,w,w,C.ao9,w,w,B.ah,!1)},
c62(d,e){var x,w,v,u=null,t=C.a6p[e],s=this.w.q(0,t.a),r=d.a,q=r?B.c.j(0.92):C.lQ,p=A.m(20),o=A.K(r?B.c:C.uQ,B.r,1),n=A.a([new A.ab(0,B.H,d.ga9y(),B.hR,14)],y.V),m=A.m(15)
m=A.o(u,A.W(t.e,B.c,u,u,u,u),B.f,u,u,new A.n(t.f,u,u,m,u,u,B.m),u,46,u,u,u,u,u,46)
x=A.c("Lesson "+(e+1)+" \xb7 "+t.d+" min",u,u,u,u,u,u,A.l(u,u,r?C.dA:C.dB,u,u,u,u,u,u,u,u,11,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)
w=A.c(t.b,u,u,u,u,u,u,A.l(u,u,r?C.e1:B.c,u,u,u,u,u,u,u,u,15,u,u,B.F,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)
v=y.p
w=A.E(A.x(A.a([x,w,A.c(t.c,u,u,u,u,u,u,A.l(u,u,r?C.dA:C.dB,u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],v),B.B,u,B.e,B.h,0,B.p),1)
x=s?B.e8:B.eL
if(s)r=C.ej
else r=r?C.dA:C.dB
return A.ay(u,A.o(u,A.A(A.a([m,B.bb,w,A.W(x,r,u,u,u,u)],v),B.l,u,B.e,B.h,0,u,u),B.f,u,u,new A.n(q,u,o,p,n,u,B.m),u,u,u,B.d4,B.bH,u,u,u),B.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new D.eFI(this,t),u,u,u,u,u,u,!1,B.a4)},
cln(d){var x=this.c
x.toString
A.a8(x,!1).cb(A.e9(new D.eG0(this,d),!1,null,y.H))},
c6B(b9,c0){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4=this,b5=null,b6="reading",b7="rsi",b8=b4.gcE1()
if(b8==null)return A.c("Live example appears once the markets have loaded.",b5,b5,b5,b5,b5,b5,A.l(b5,b5,b9.a?C.dA:C.dB,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,!0,b5,b5,b5,b5,b5,b5,b5,b5),b5,b5,b5)
x=J.a6(b8)
w=J.k(x.h(b8,"asset"))
v=D.aRk(b8)
u=D.iS(x.h(b8,b6))
t=D.f4(x.h(b8,"price"))
s=new D.eFN(v,b9,t)
r=new D.eFT(b9)
switch(c0){case"basics":q=v.length!==0?D.f4(J.t(B.d.gH(v),"c")):t
p=q===0?50:50*t/q
x=r.$1("Right now "+w+" is "+D.il(t,!0,!1)+". About 4 hours ago it was "+D.il(q,!0,!1)+".")
o=D.il(p,!0,!1)
n=p>=50?"a win of":"a loss of"
return A.x(A.a([x,B.P,r.$1("If you had put $50 into "+w+" then, it would be worth "+o+" now: "+n+" "+D.il(Math.abs(p-50),!0,!1)+". That difference is your profit or loss.")],y.p),B.B,b5,B.e,B.h,0,B.p)
case"candles":m=v.length!==0?B.d.gal(v):A.S(y.N,y.z)
x=J.a6(m)
o=D.f4(x.h(m,"c"))
n=D.f4(x.h(m,"o"))
l=s.$2$last$lines(24,!1)
k=D.il(D.f4(x.h(m,"o")),!0,!1)
j=D.il(D.f4(x.h(m,"c")),!0,!1)
o=o>=n?"GREEN: buyers won those 5 minutes":"YELLOW: sellers won those 5 minutes"
return A.x(A.a([l,B.P,r.$1("The last finished "+w+" candle opened at "+k+" and closed at "+j+", so it is "+o+". Its high was "+D.il(D.f4(x.h(m,"h")),!0,!1)+" and its low "+D.il(D.f4(x.h(m,"l")),!0,!1)+".")],y.p),B.B,b5,B.e,B.h,0,B.p)
case"trend":x=y.N
i=A.S(x,y.S)
for(o=D.DE(b4.gz6()),n=o.length,l=y.z,k=y.f,h=0;h<o.length;o.length===n||(0,A.I)(o),++h){j=J.t(o[h],b6)
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
return A.x(A.a([x,B.P,r.$1(w+" is "+o.toUpperCase()+" right now. Across all 10 markets: "+n+" bullish, "+l+" bearish, "+k+" sideways.")],y.p),B.B,b5,B.e,B.h,0,B.p)
case"ma":f=D.f4(x.h(b8,"fast"))
e=D.f4(x.h(b8,"slow"))
x=s.$0()
o=D.il(f,!0,!1)
n=D.il(e,!0,!1)
l=f>=e
k=l?"ABOVE":"BELOW"
l=l?"UP":"DOWN"
return A.x(A.a([x,B.P,r.$1("On "+w+" the pink fast line is at "+o+" and the purple slow line at "+n+". The fast line is "+k+" the slow line, so the short-term trend is "+l+".")],y.p),B.B,b5,B.e,B.h,0,B.p)
case"cross":x=D.DE(b4.gz6())
o=A.T(x)
n=o.k("cL<1,@>")
d=A.B(new A.cL(new A.Y(x,new D.eFO(),o.k("Y<1>")),new D.eFP(),n),n.k("M.E"))
x=D.DE(b4.gz6())
o=A.T(x)
n=o.k("cL<1,@>")
a0=A.B(new A.cL(new A.Y(x,new D.eFQ(),o.k("Y<1>")),new D.eFR(),n),n.k("M.E"))
x=s.$0()
if(d.length!==0)o="Fresh BUY crosses right now: "+B.d.aM(d,", ")+". On its next automatic check the agent would buy the strongest of these if it holds nothing."
else o="No fresh buy cross in any open market right now. "+(a0.length!==0?"Fresh sell crosses: "+B.d.aM(a0,", ")+". ":"")+"The agent simply waits; no signal means no trade."
return A.x(A.a([x,B.P,r.$1(o)],y.p),B.B,b5,B.e,B.h,0,B.p)
case"rsi":x=D.DE(b4.gz6())
o=A.T(x).k("Y<1>")
a1=A.B(new A.Y(x,new D.eFS(),o),o.k("M.E"))
x=y.p
o=A.a([],x)
for(n=a1.length,l=b9.a,k=y.N,j=y.z,a2=y.f,a3=y.c,h=0;h<a1.length;a1.length===n||(0,A.I)(a1),++h){a4=a1[h]
a5=J.a6(a4)
a6=J.k(a5.h(a4,"asset"))
a7=l?C.e1:B.c
a6=A.c(a6,b5,b5,b5,b5,b5,b5,new A.F(!0,a7,b5,b5,b5,b5,12,B.F,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5),b5,b5,b5)
a7=new A.aP(9,9)
a8=a5.h(a4,b6)
a8=(a2.b(a8)?A.a1(a8,k,j):A.S(k,j)).h(0,b7)
if(!(typeof a8=="number")){a8=A.cF(A.v(a8==null?"":a8))
if(a8==null)a8=0}a9=l?C.NW:C.NN
b0=a5.h(a4,b6)
b0=(a2.b(b0)?A.a1(b0,k,j):A.S(k,j)).h(0,b7)
if(!(typeof b0=="number")){b0=A.cF(A.v(b0==null?"":b0))
if(b0==null)b0=0}if(b0>=70)b0=C.f4
else{b0=a5.h(a4,b6)
b0=(a2.b(b0)?A.a1(b0,k,j):A.S(k,j)).h(0,b7)
if(!(typeof b0=="number")){b0=A.cF(A.v(b0==null?"":b0))
if(b0==null)b0=0}b0=b0<=30?B.cD:C.ej}b0=A.jE(a9,b5,b5,8,b5,a8/100,new A.ls(b0,a3))
a5=a5.h(a4,b6)
a5=(a2.b(a5)?A.a1(a5,k,j):A.S(k,j)).h(0,b7)
if(!(typeof a5=="number")){a5=A.cF(A.v(a5==null?"":a5))
if(a5==null)a5=0}a5=B.i.aa(a5,0)
a8=l?C.e1:B.c
o.push(new A.D(B.cy,new A.c3(B.aL,B.e,B.h,B.l,b5,B.p,b5,0,A.a([new A.a5(70,b5,a6,b5),new A.bx(1,B.ba,new A.n5(new A.bb(a7,a7,a7,a7),B.aq,b0,b5),b5),B.aa,new A.a5(26,b5,A.c(a5,b5,b5,b5,b5,b5,b5,new A.F(!0,a8,b5,b5,b5,b5,12,B.F,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5),b5,b5,b5),b5)],x),b5),b5))}o.push(r.$1("Red bars are above 70 (stretched), blue below 30 (oversold), green in between (healthy)."))
return A.x(o,B.B,b5,B.e,B.h,0,B.p)
case"risk":b1=t===0?0:50/t
x=r.$1("If the agent bought "+w+" right now at "+D.il(t,!0,!1)+":")
return A.x(A.a([x,B.al,r.$1("- $50 buys "+B.i.aa(b1,b1<0.01?6:4)+" "+w),r.$1("- Take profit at "+D.il(t*1.03,!0,!1)+": you get back about $51.50 (+$1.50)"),r.$1("- Stop loss at "+D.il(t*0.985,!0,!1)+": you get back about $49.25 (-$0.75)"),B.al,r.$1("Win 1 and lose 2 of 3 trades: +1.50 - 0.75 - 0.75 = $0.00. That is break even.")],y.p),B.B,b5,B.e,B.h,0,B.p)
case"brakes":x=b4.e
b2=D.iS(x==null?b5:J.t(x,"state"))
x=b4.e
x=D.il(D.f4(D.iS(x==null?b5:J.t(x,"today")).h(0,"day_pnl")),!0,!0)
o=D.il(D.f4(b2.h(0,"totalPnl")),!0,!0)
n=J.z(b2.h(0,"brakePaused"),!0)?"The brake is ON right now.":"Both brakes are off, it can keep trading."
return r.$1("Today the agent is at "+x+" (the daily stop is -$10) and "+o+" all time (the brake is -$25). "+n)
case"hours":x=b4.e
return r.$1("Right now the US stock market is "+(J.z(D.iS(x==null?b5:J.t(x,"market")).h(0,"stockOpen"),!0)?"OPEN, so all 10 markets can be traded":"CLOSED, so only Bitcoin, Ethereum and Solana can be traded")+". Crypto is open now and always.")
case"practice":x=b4.e
b3=D.iS(x==null?b5:J.t(x,"record"))
x=b3.h(0,"trades")
x=A.v(x==null?0:x)
o=b3.h(0,"wins")
o=A.v(o==null?0:o)
n=b3.h(0,"losses")
return r.$1("The agent journal so far: "+x+" finished pretend trades, "+o+" wins and "+A.v(n==null?0:n)+" losses. Keep watching until there are at least 20 before judging it.")}return B.bL},
cD6(a3){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null,d=B.a.i(f.at),a0=f.gaQk(),a1=A.T(a0).k("Y<1>"),a2=A.B(new A.Y(a0,new D.eG7(f,d.toLowerCase()),a1),a1.k("M.E"))
B.d.b_(a2,new D.eG8(f))
d=A.T(a2).k("Y<1>")
x=new A.Y(a2,new D.eG9(),d).gJ(0)
w=new A.Y(a2,new D.eGa(),d).gJ(0)
d=a2.length
if(f.f==null)v=0
else{u=Date.now()
t=f.f
t.toString
v=B.o.ar(new A.V(u,0,!1).bz(t).a,1e6)}if(v<20)s="just now"
else s=v<60?""+v+" s ago":""+B.o.ar(v,60)+" min ago"
u=y.p
t=A.a([],u)
for(r=a3.a,q=0;q<4;++q){p=C.d5s[q]
if(f.ay===p)o=r?C.kX:B.c
else o=r?B.c.j(0.92):C.lQ
n=new A.aP(999,999)
m=new A.av(r?C.qz:C.qw,1,B.r,-1)
l=p==="All"?"All "+a0.length:p+" "+new A.Y(a0,new D.eGb(p),a1).gJ(0)
if(f.ay===p)k=r?B.c:C.kX
else k=r?C.e1:B.c
B.d.u(t,A.a([A.ay(e,A.o(e,A.c(l,e,e,e,e,e,e,new A.F(!0,k,e,e,e,e,12,B.F,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e),e,e,e),B.f,e,e,new A.n(o,e,new A.bE(m,m,m,m),new A.bb(n,n,n,n),e,e,B.m),e,e,e,e,C.bFW,e,e,e),B.y,!1,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,new D.eGc(f,p),e,e,e,e,e,e,!1,B.a4),B.bj],u))}a1=A.E(A.c9(A.A(t,B.l,e,B.e,B.h,0,e,e),B.t,e,B.y,e,e,e,e,e,B.aL),1)
t=f.ax?B.cA:B.eM
t=A.a([A.A(A.a([a1,B.bj,f.b31(a3,t,new D.eGd(f))],u),B.l,e,B.e,B.h,0,e,e)],u)
if(f.ax){a1=A.l(e,e,r?C.e1:B.c,e,e,e,e,e,e,e,e,e,e,e,e,e,e,!0,e,e,e,e,e,e,e,e)
o=A.l(e,e,r?C.dA:C.dB,e,e,e,e,e,e,e,e,13,e,e,e,e,e,!0,e,e,e,e,e,e,e,e)
n=A.W(B.eM,r?C.dA:C.dB,e,e,e,e)
l=r?B.c.j(0.92):C.lQ
k=A.m(999)
j=r?C.qz:C.qw
i=A.m(999)
h=r?C.qz:C.qw
B.d.u(t,A.a([B.S,A.aN(e,B.Z,!0,e,!0,B.t,e,A.aO(),f.ch,e,e,e,e,e,2,A.bA(e,new A.b6(4,k,new A.av(j,1,B.r,-1)),e,B.f7,e,e,e,e,!0,new A.b6(4,i,new A.av(h,1,B.r,-1)),e,e,e,e,e,l,!0,e,e,e,e,e,e,e,e,e,e,e,e,e,o,"Search a market, for example EUR/USD, GBP or Bitcoin",e,e,e,e,e,e,e,e,e,!0,!0,!1,e,n,e,e,e,e,e,e,e,e,e,e,e,e),B.y,!0,e,!0,e,!1,e,B.ak,e,e,e,e,e,e,e,e,e,1,e,e,!1,"\u2022",e,new D.eGe(f),e,e,e,!1,e,e,!1,e,!0,e,B.ae,e,e,e,e,e,e,e,e,e,e,e,a1,!0,B.a7,e,B.ao,e,e,e,e)],u))}t.push(B.af)
t.push(A.A(A.a([A.E(f.auZ(a3,"Bullish",x,C.ej,B.nf),1),B.aa,A.E(f.auZ(a3,"Bearish",w,C.f4,B.a4L),1),B.aa,A.E(f.auZ(a3,"Sideways",d-x-w,B.l_,C.ass),1)],u),B.l,e,B.e,B.h,0,e,e))
t.push(B.P)
t.push(A.A(A.a([C.c_w,B.e4,new A.d1(1,B.cf,A.c("Live \xb7 updated "+s+" \xb7 checks every 20 seconds, changes are flagged at once",e,e,e,e,e,e,A.l(e,e,r?C.dA:C.dB,e,e,e,e,e,e,e,e,11,e,e,e,e,e,!0,e,e,e,e,e,e,e,e),B.K,e,e),e)],u),B.l,e,B.b9,B.h,0,e,e))
d=f.ay
if(d==="All"||d==="Forex"){d=B.l_.j(0.12)
a1=A.m(16)
o=A.K(B.l_.j(0.45),B.r,1)
B.d.u(t,A.a([B.S,A.o(e,A.c('Forex uses real market prices on 1-minute candles. OTC pairs at a broker are priced by that broker (always on weekends) and can move differently, and the payout % is the broker\'s. "Worked" shows how often past moves on this pair really went that way: under 50% means the signal has been worse than a coin flip, so do not trust it.',e,e,e,e,e,e,A.l(e,e,r?C.e1:B.c,e,e,e,e,e,e,e,e,11.8,e,e,e,e,1.35,!0,e,e,e,e,e,e,e,e),e,e,e),B.f,e,e,new A.n(d,e,o,a1,e,e,B.m),e,e,e,e,B.bl,e,e,e)],u))}t.push(B.af)
if(a0.length===0)t.push(A.c("Loading the markets...",e,e,e,e,e,e,A.l(e,e,r?C.dA:C.dB,e,e,e,e,e,e,e,e,e,e,e,e,e,e,!0,e,e,e,e,e,e,e,e),e,e,e))
if(a0.length!==0&&a2.length===0){d=f.at
t.push(A.as(A.c('No market matches "'+d+'".',e,e,e,e,e,e,A.l(e,e,r?C.dA:C.dB,e,e,e,e,e,e,e,e,e,e,e,e,e,e,!0,e,e,e,e,e,e,e,e),e,e,e),e,e,e))}for(d=a2.length,a1=f.cx,q=0;q<a2.length;a2.length===d||(0,A.I)(a2),++q){g=a2[q]
u=J.a6(g)
u=a1.h(0,u.h(g,"asset"))==null?e:"JUST TURNED "+a1.h(0,u.h(g,"asset")).c.toUpperCase()
t.push(D.hGp(a3,g,u,!1,new D.eGf(f,g)))}t.push(A.c("Signals are estimates from recent price history. They can fail; never risk money you cannot afford to lose.",e,e,e,e,e,e,A.l(e,e,r?C.dA:C.dB,e,e,e,e,e,e,e,e,11,e,e,e,e,e,!0,e,e,e,e,e,e,e,e),B.K,e,e))
return A.PJ(A.cn(t,e,e,C.ao9,e,e,B.ah,!1),e,f.gcg1())},
auZ(d,e,f,g,h){var x=null,w=A.m(18),v=A.a([g.j(0.2),g.j(0.05)],y.O),u=A.K(g.j(0.35),B.r,1),t=A.W(h,g,x,x,x,20),s=d.a,r=A.c(""+f,x,x,x,x,x,x,A.l(x,x,s?C.e1:B.c,x,x,x,x,x,x,x,x,22,x,x,B.u,x,x,!0,x,x,x,x,x,x,x,x),x,x,x)
return A.o(x,A.x(A.a([t,B.au,r,A.c(e,x,x,x,x,x,x,A.l(x,x,s?C.dA:C.dB,x,x,x,x,x,x,x,x,11.5,x,x,B.O,x,x,!0,x,x,x,x,x,x,x,x),x,x,x)],y.p),B.B,x,B.e,B.h,0,B.p),B.f,x,x,new A.n(x,x,u,w,x,new A.a7(B.a5,B.a9,B.x,v,x,x),B.m),x,x,x,x,B.bl,x,x,x)},
bHk(d){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=y.p,i=A.a([],j),h=l.x
if(h.length===0){x=d.a
w=x?B.c.j(0.92):C.lQ
v=A.m(22)
u=A.K(x?B.c:C.uQ,B.r,1)
t=A.o(k,C.c0s,B.f,k,k,B.agn,k,40,k,k,k,k,k,40)
t=A.A(A.a([t,B.ar,A.E(A.c("Your trading tutor",k,k,k,k,k,k,A.l(k,k,x?C.e1:B.c,k,k,k,k,k,k,k,k,16,k,k,B.F,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),1)],j),B.l,k,B.e,B.h,0,k,k)
w=A.o(k,A.x(A.a([t,B.P,A.c("Ask anything about trading. The tutor sees the same live prices and readings as the agent, so it can explain what each market is doing right now.",k,k,k,k,k,k,A.l(k,k,x?C.dA:C.dB,k,k,k,k,k,k,k,k,12.5,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),k,k,k)],j),B.B,k,B.e,B.h,0,B.p),B.f,k,k,new A.n(w,k,u,v,k,k,B.m),k,k,k,k,B.bR,k,k,k)
v=A.a([],j)
for(s=0;s<6;++s){r=C.dbk[s]
u=x?C.e1:B.c
u=A.c(r,k,k,k,k,k,k,new A.F(!0,u,k,k,k,k,12,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k),k,k,k)
t=x?B.c.j(0.92):C.lQ
q=x?C.qz:C.qw
p=new A.aP(999,999)
v.push(A.mE(k,t,u,k,new D.eFC(l,r),k,new A.b9(new A.bb(p,p,p,p),B.a1),new A.av(q,1,B.r,-1),k))}B.d.u(i,A.a([w,B.af,A.bZ(B.bI,v,B.br,k,8,8)],j))}for(x=h.length,w=d.a,s=0;s<h.length;h.length===x||(0,A.I)(h),++s){o=h[s]
v=o.a
u=v?B.a9:B.a5
if(v)t=w?C.kX:B.c
else t=w?B.c.j(0.92):C.lQ
q=v?18:4
p=v?4:18
if(v)n=k
else{m=new A.av(w?B.c:C.uQ,1,B.r,-1)
n=new A.bE(m,m,m,m)}if(v)v=w?B.c:C.kX
else v=w?C.e1:B.c
i.push(new A.bK(u,k,k,A.o(k,A.AA(o.b,new A.F(!0,v,k,k,k,k,13.5,k,k,k,k,k,1.4,k,k,k,k,k,k,k,k,k,k,k,k,k),k),B.f,k,E.afZ,new A.n(t,k,n,new A.bb(B.i5,B.i5,new A.aP(q,q),new A.aP(p,p)),k,k,B.m),k,k,k,B.jg,B.hx,k,k,k),k))}if(l.Q){h=w?B.c.j(0.92):C.lQ
x=A.m(18)
i.push(new A.bK(B.a5,k,k,A.o(k,A.A(A.a([B.ac1,B.aa,A.c("Reading the markets...",k,k,k,k,k,k,A.l(k,k,w?C.dA:C.dB,k,k,k,k,k,k,k,k,12.5,k,k,k,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)],j),B.l,k,B.e,B.M,0,k,k),B.f,k,k,new A.n(h,k,k,x,k,k,B.m),k,k,k,B.hw,B.hx,k,k,k),k))}i=A.E(A.cn(i,l.z,k,C.bH9,k,k,B.ah,!1),1)
h=A.l(k,k,w?C.e1:B.c,k,k,k,k,k,k,k,k,k,k,k,k,k,k,!0,k,k,k,k,k,k,k,k)
x=A.l(k,k,w?C.dA:C.dB,k,k,k,k,k,k,k,k,k,k,k,k,k,k,!0,k,k,k,k,k,k,k,k)
v=w?B.c.j(0.92):C.lQ
u=A.m(999)
t=w?C.qz:C.qw
q=A.m(999)
p=w?C.qz:C.qw
h=A.E(A.aN(k,B.Z,!1,k,!0,B.t,k,A.aO(),l.y,k,k,k,k,k,2,A.bA(k,new A.b6(4,u,new A.av(t,1,B.r,-1)),k,B.zo,k,k,k,k,!0,new A.b6(4,q,new A.av(p,1,B.r,-1)),k,k,k,k,k,v,!0,k,k,k,k,k,k,k,k,k,k,k,k,k,x,"Ask about trading or a market...",k,k,k,k,k,k,k,k,k,!0,!0,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k),B.y,!0,k,!0,k,!1,k,B.ak,k,k,k,k,k,k,k,k,k,4,1,k,!1,"\u2022",k,k,k,l.gcg_(),k,!1,k,k,!1,k,!0,k,B.ae,k,k,k,k,k,k,k,k,k,k,k,h,!0,B.a7,k,B.ao,k,B.aco,k,k),1)
x=w?C.kX:B.c
v=l.Q?k:new D.eFD(l)
return A.x(A.a([i,A.o(k,A.A(A.a([h,B.aa,A.aF(!1,B.a3,!0,k,A.aM(!1,k,!0,new A.a5(48,48,A.W(B.r5,w?B.c:C.kX,k,k,k,k),k),B.cK,!0,k,k,k,k,k,k,k,k,k,k,k,v,k,k,k,k,k,k,k),B.f,x,0,k,k,B.cK,k,k,B.ai)],j),B.l,k,B.e,B.h,0,k,k),B.f,k,k,k,k,k,k,k,B.Hx,k,k,k)],j),B.l,k,B.e,B.h,0,B.p)}}
D.a0w.prototype={
S(){var x=y.S
return new D.bkL(A.S(x,x))},
cYx(d){return this.e.$0()},
rr(){return this.f.$0()},
cZO(d){return this.r.$1(d)}}
D.bkL.prototype={
B(d){var x,w,v,u,t,s,r,q,p,o=this,n=null,m=A.O(d).ax.a===B.dd,l=new D.a1s(m),k=o.a.c,j=k.x,i=new A.i_(j,A.T(j).k("i_<1>")),h=i.gdM(i).cw(0,new D.du2(o))
i=m?C.yJ:C.yH
x=m?C.yJ:C.yH
w=m?C.a_w:C.a_m
v=y.O
w=A.a([x,w],v)
x=A.aH(n,n,n,n,A.W(B.eG,m?C.e1:B.c,n,n,n,18),n,n,n,new D.du3(d),n,n,n,n,n,n)
u=o.a.d
t=y.p
u=A.A(A.a([x,B.aY,A.c("Lesson "+u+" of 10",n,n,n,n,n,n,A.l(n,n,m?C.dA:C.dB,n,n,n,n,n,n,n,n,12,n,n,B.O,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],t),B.l,n,B.e,B.h,0,n,n)
x=A.m(24)
s=k.f
r=A.ap(s,B.v,0.35)
r.toString
v=A.a([s,r],v)
r=B.c.j(0.2)
s=A.m(16)
v=A.a([u,A.o(n,A.A(A.a([A.o(n,A.W(k.e,B.c,n,n,n,28),B.f,n,n,new A.n(r,n,n,s,n,n,B.m),n,52,n,n,n,n,n,52),B.eu,A.E(A.x(A.a([A.c(k.b,n,n,n,n,n,n,B.fN,n,n,n),A.c(k.c+" \xb7 "+k.d+" min",n,n,n,n,n,n,B.nr,n,n,n)],t),B.B,n,B.e,B.h,0,B.p),1)],t),B.l,n,B.e,B.h,0,n,n),B.f,n,n,new A.n(n,n,n,x,n,new A.a7(B.a5,B.a9,B.x,v,n,n),B.m),n,n,n,n,B.fc,n,n,n),B.aA],t)
for(x=k.w,q=0;q<4;++q){u=x[q]
s=m?C.e1:B.c
s=A.c(u.a,n,n,n,n,n,n,new A.F(!0,s,n,n,n,n,16,B.F,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n),n,n,n)
r=m?C.e1:B.c
B.d.u(v,A.a([s,B.au,A.c(u.b,n,n,n,n,n,n,new A.F(!0,r,n,n,n,n,14,n,n,n,n,n,1.5,n,n,n,n,n,n,n,n,n,n,n,n,n),n,n,n),B.aA],t))}x=m?B.c.j(0.92):C.lQ
u=A.m(22)
s=A.K(C.ej.j(0.45),B.r,1.5)
v.push(A.o(n,A.x(A.a([A.A(A.a([C.bX0,B.bj,A.c("See it live right now",n,n,n,n,n,n,A.l(n,n,m?C.e1:B.c,n,n,n,n,n,n,n,n,14,n,n,B.F,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],t),B.l,n,B.e,B.h,0,n,n),B.S,o.a.cYx(0)],t),B.B,n,B.e,B.h,0,B.p),B.f,n,n,new A.n(x,n,s,u,n,n,B.m),n,n,n,n,B.bH,n,n,n))
v.push(B.bx)
v.push(A.c("Quick check",n,n,n,n,n,n,A.l(n,n,m?C.e1:B.c,n,n,n,n,n,n,n,n,16,n,n,B.F,n,n,!0,n,n,n,n,n,n,n,n),n,n,n))
v.push(B.P)
for(x=j.length,p=0;p<x;++p)v.push(o.ctG(l,p,j[p]))
v.push(B.P)
j=m?C.e1:B.c
x=m?C.qz:C.qw
x=A.E(A.em(C.c2H,n,C.fSu,new D.du4(o,k),A.dg(n,n,n,n,n,n,n,n,n,j,n,n,B.cm,n,new A.b9(A.m(999),B.a1),new A.av(x,1.5,B.r,-1),n,n,n,n)),1)
if(h)m=C.ej
else m=m?C.dA:C.dB
m=A.bn(m,n,n,n,n,n,B.cm,n,new A.b9(A.m(999),B.a1),n,n,n)
j=h?new D.du5(o,d):n
v.push(A.A(A.a([x,B.ar,A.E(A.d8(L.QU,n,A.c(h?"Finish lesson":"Answer the quiz",n,n,n,n,n,n,B.cb,n,n,n),j,m),1)],t),B.l,n,B.e,B.h,0,n,n))
return A.c5(n,i,A.o(n,A.bm(!0,A.cn(v,n,n,C.bHh,n,n,B.ah,!1),!0,!1,B.ag,!0,!0),B.f,n,n,new A.n(n,n,n,n,n,new A.a7(B.aX,B.b1,B.x,w,n,n),B.m),n,n,n,n,n,n,n,n),n,!1,!1,n,n)},
ctG(d,e,f){var x,w,v,u,t,s,r,q,p,o,n=null,m=this.d.h(0,e),l=d.a,k=l?B.c.j(0.92):C.lQ,j=A.m(20),i=A.K(l?B.c:C.uQ,B.r,1),h=y.p,g=A.a([A.c(f.a,n,n,n,n,n,n,A.l(n,n,l?C.e1:B.c,n,n,n,n,n,n,n,n,14,n,n,B.F,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),B.P],h)
for(x=f.b,w=x.length,v=f.c,u=0;u<w;++u){t=m===u
if(t)s=(u===v?C.ej:C.f4).j(0.14)
else s=l?C.a0a:C.a0c
r=new A.aP(14,14)
if(t)q=u===v?C.ej:C.f4
else q=B.L
p=new A.av(q,1,B.r,-1)
q=x[u]
o=l?C.e1:B.c
q=A.a([new A.bx(1,B.ba,A.c(q,n,n,n,n,n,n,new A.F(!0,o,n,n,n,n,13.5,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n),n,n,n),n)],h)
if(t){t=u===v
o=t?B.e8:B.Qa
q.push(A.W(o,t?C.ej:C.f4,n,n,n,18))}g.push(A.ay(n,A.o(n,new A.c3(B.aL,B.e,B.h,B.l,n,B.p,n,0,q,n),B.f,n,n,new A.n(s,n,new A.bE(p,p,p,p),new A.bb(r,r,r,r),n,n,B.m),n,n,n,B.eJ,B.ey,n,n,n),B.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new D.du1(this,e,u),n,n,n,n,n,n,!1,B.a4))}if(m!=null){l=m===v
h=l?"Right! "+f.d:"Not quite. Try again."
g.push(A.c(h,n,n,n,n,n,n,A.l(n,n,l?C.ej:C.f4,n,n,n,n,n,n,n,n,12.5,n,n,B.O,n,n,!0,n,n,n,n,n,n,n,n),n,n,n))}return A.o(n,A.x(g,B.B,n,B.e,B.h,0,B.p),B.f,n,n,new A.n(k,n,i,j,n,n,B.m),n,n,n,B.d4,B.bH,n,n,n)}}
D.aPa.prototype={
t(){var x=this,w=x.a9$
if(w!=null)w.a6(0,x.gbB())
x.a9$=null
x.a3()},
aX(){this.b7()
this.b5()
this.bC()}}
var z=a.updateTypes(["aA<~>()","~()","XA(Z)","aA<~>(p)","p(a_v)","Q(uq)","a0w(Z)","Q(bB<H,nk>)"])
D.eFB.prototype={
$1(d){this.a.Bk(!0)
return null},
$S:12}
D.eFk.prototype={
$1(d){var x=this.a.Q,w=x.f
if(w.length!==0){w=B.d.gd1(w).Q
w.toString
x.i9(B.i.D(Math.min(this.b*160-16,w),0,1/0))}},
$S:7}
D.eFc.prototype={
$0(){return this.a.z=this.b},
$S:0}
D.eFj.prototype={
$0(){return this.a.z=this.b},
$S:0}
D.eFm.prototype={
$0(){var x=this.a,w=x.f=!1,v=this.b,u=v==null
if(!u?J.z(J.t(v,"ok"),!0):w){x.d=v
x.ax=null}else{w=u?null:J.t(v,"error")
x.ax=J.k(w==null?"Could not reach the server. Pull down to try again.":w)
if(!J.z(u?null:J.t(v,"ownerOnly"),!0))w=J.z(u?null:J.t(v,"setupNeeded"),!0)
else w=!0
if(w)x.d=null}},
$S:0}
D.eFa.prototype={
$1(d){return A.a1(d,y.N,y.z)},
$S:25}
D.eFb.prototype={
$0(){var x,w,v=this,u=v.a
if(v.b){x=A.B(u.e,y.P)
w=v.c
B.d.u(x,w)}else{x=v.c
w=x}u.e=x
u.w=w.length>=100},
$S:0}
D.eFu.prototype={
$1(d){var x=null
return A.ek(A.a([A.bO(!1,B.dp,x,x,!0,x,x,x,new D.eFs(d),x,x),A.bJ(C.hev,x,new D.eFt(d),x)],y.p),x,x,x,C.fSC,x,x,x,x,C.fWI,x)},
$S:18}
D.eFs.prototype={
$0(){A.a8(this.a,!1).N(!1)
return null},
$S:0}
D.eFt.prototype={
$0(){A.a8(this.a,!1).N(!0)
return null},
$S:0}
D.eFv.prototype={
$0(){return this.a.r=!0},
$S:0}
D.eFw.prototype={
$0(){return this.a.r=!1},
$S:0}
D.eFi.prototype={
$1(d){var x=this.a,w=x.d
x.a.toString
return new D.XA(w,!1,null)},
$S:z+2}
D.eFo.prototype={
$0(){return this.a.r=!0},
$S:0}
D.eFp.prototype={
$0(){var x=this.a,w=x.r=!1,v=this.b
if(v!=null?J.z(J.t(v,"ok"),!0):w)x.d=v},
$S:0}
D.eFq.prototype={
$1(d){var x=this
return A.oH(new D.eFn(x.a,x.b,x.c,x.d),!1,0.8,0.95,0.25,!1,null)},
$S:130}
D.eFn.prototype={
$2(d,e){var x=this
return x.a.cyO(x.b,x.c,D.iS(J.t(x.d,"state")),e)},
$S:2334}
D.eFr.prototype={
$2(d,e){return B.i.aQ(D.aH8(d),D.aH8(e))},
$S:40}
D.eFA.prototype={
$0(){return this.a.Bk(!0)},
$S:1}
D.eFx.prototype={
$0(){var x=this.a.c
x.toString
return A.VF(x)},
$S:0}
D.eFy.prototype={
$0(){return this.a.Bk(!0)},
$S:0}
D.eF1.prototype={
$1(d){return J.z(J.t(d,"asset"),this.a)},
$S:4}
D.eF2.prototype={
$0(){var x=this.a
return x.length===0?this.b:B.d.gH(x)},
$S:236}
D.eF3.prototype={
$1(d){return J.z(J.t(d,"asset"),this.a.h(0,"symbol"))},
$S:4}
D.eF4.prototype={
$0(){return this.a},
$S:236}
D.eFe.prototype={
$1(d){return J.z(J.t(d,"open"),!0)},
$S:4}
D.eFf.prototype={
$1(d){return J.z(J.t(d,"asset"),J.t(this.a,"asset"))},
$S:4}
D.eFh.prototype={
$2(d,e){return B.ar},
$S:38}
D.eFg.prototype={
$2(d,a0){var x,w,v,u,t,s,r,q,p=this,o=null,n=p.b[a0],m=J.a6(n),l=J.k(m.h(n,"asset")),k=l===J.t(p.c,"asset"),j=D.f4(m.h(n,"changePct")),i=j>=0,h=D.aRk(n),g=p.d,f=J.z(g==null?o:g.h(0,"symbol"),l),e=J.z(D.iS(m.h(n,"chart")).h(0,"signal"),"buy")
g=p.a
x=p.e
w=x.a
v=w?B.c.j(0.92):C.lQ
u=A.m(20)
if(k)t=D.fzf(l).c
else t=w?B.c:C.uQ
t=A.K(t,B.r,k?2:1)
x=k?D.fzf(l).c.j(0.25):x.ga9y()
x=A.a([new A.ab(0,B.H,x,B.cz,k?18:12)],y.V)
s=D.hiE(l,20)
r=y.p
s=A.a([s,B.bj,A.E(A.c(l,o,1,B.a2,o,o,o,A.l(o,o,w?C.e1:B.c,o,o,o,o,o,o,o,o,12,o,o,B.F,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),1)],r)
if(!J.z(m.h(n,"open"),!0))s.push(A.c("closed",o,o,o,o,o,o,A.l(o,o,w?C.dA:C.dB,o,o,o,o,o,o,o,o,9.5,o,o,B.O,o,o,!0,o,o,o,o,o,o,o,o),o,o,o))
s=A.A(s,B.l,o,B.e,B.h,0,o,o)
m=D.il(D.f4(m.h(n,"price")),!0,!1)
m=A.c(m,o,o,o,o,o,o,A.l(o,o,w?C.e1:B.c,o,o,o,o,o,o,o,o,17,o,o,B.O,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)
w=i?"+":""
q=B.i.aa(j,2)
w=A.a([A.c(w+q+"%",o,o,o,o,o,o,A.l(o,o,i?C.ej:C.f4,o,o,o,o,o,o,o,o,11,o,o,B.F,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),B.aY],r)
if(f)w.push(g.a0M("HOLDING",E.wA))
else if(e)w.push(g.a0M("BUY SIGNAL",C.ej))
w=A.A(w,B.l,o,B.e,B.h,0,o,o)
return A.ay(o,A.cU(o,A.x(A.a([s,B.al,new A.dk(B.dv,B.a5,B.f,m,o),w,B.au,A.E(A.b4(o,o,o,new D.aKu(h,i?C.ej:C.f4,o),B.h2),1)],r),B.B,o,B.e,B.h,0,B.p),o,o,B.b_,new A.n(v,o,t,u,x,o,B.m),B.a3,o,o,o,o,B.anm,o,o,150),B.y,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,new D.eFd(g,l),o,o,o,o,o,o,!1,B.a4)},
$S:83}
D.eFd.prototype={
$0(){return this.a.a20(this.b)},
$S:0}
D.eF7.prototype={
$0(){var x=this.a
return x.l(new D.eF6(x,this.b))},
$S:0}
D.eF6.prototype={
$0(){return this.a.y=this.b},
$S:0}
D.eF8.prototype={
$0(){var x=this.a
return x.l(new D.eF5(x))},
$S:0}
D.eF5.prototype={
$0(){var x=this.a
return x.at=!x.at},
$S:0}
D.eFl.prototype={
$2(d,e){var x=null,w=e.b,v=A.ao(x,A.o(x,x,B.f,x,x,new A.n(x,x,x,A.m(99),x,C.cbW,B.m),x,8,x,x,x,x,x,x),x,x,0,0,9,x),u=this.a.a,t=A.ao(x,A.o(x,x,B.f,(u?C.e1:B.c).j(0.5),x,x,x,18,x,x,x,x,x,2),x,x,w/3-1,x,4,x),s=B.i.D(this.b*w-9,0,w-18)
return new A.a5(x,26,new A.an(B.a0,x,B.ad,B.f,A.a([v,t,A.ao(x,A.o(x,x,B.f,x,x,new A.n(B.c,x,A.K(u?C.e1:B.c,B.r,3),x,x,x,B.a6),x,18,x,x,x,x,x,18),x,x,s,x,4,x)],y.p),x),x)},
$S:127}
D.eF9.prototype={
$0(){return this.a.SI(!this.b)},
$S:0}
D.eFz.prototype={
$1(d){return A.a1(d,y.N,y.z)},
$S:25}
D.eF0.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
x=u.x&&u.w?2:4
break
case 2:x=5
return A.b(u.a_0(!0),$async$$0)
case 5:x=3
break
case 4:u.l(new D.eF_(u))
case 3:return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
D.eF_.prototype={
$0(){return this.a.x=!0},
$S:0}
D.cWp.prototype={
$0(){return this.a.d=this.b},
$S:0}
D.cWy.prototype={
$2(d,e){var x,w,v=null,u=e.b,t=this.a,s=t.a,r=s.c,q=s.d,p=s.e,o=s.f
s=s.r
x=t.d
w=d.L(y.D)
return A.ay(v,new A.a5(u,250,A.b4(v,v,v,new D.be5((w==null?B.CL:w).w.d,r,q,p,o,s,x,v),B.az),v),B.y,!1,v,v,v,v,v,new D.cWt(t),new D.cWu(t,u),new D.cWv(t,u),v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new D.cWw(t,u),new D.cWx(t),v,v,v,!1,B.a4)},
$S:36}
D.cWw.prototype={
$1(d){return this.a.aAu(d.b,this.b)},
$S:23}
D.cWu.prototype={
$1(d){return this.a.aAu(d.b,this.b)},
$S:47}
D.cWv.prototype={
$1(d){return this.a.aAu(d.b,this.b)},
$S:19}
D.cWt.prototype={
$1(d){var x=this.a
return x.l(new D.cWs(x))},
$S:35}
D.cWs.prototype={
$0(){return this.a.d=null},
$S:0}
D.cWx.prototype={
$1(d){return A.bN(B.fX,new D.cWr(this.a),y.a)},
$S:60}
D.cWr.prototype={
$0(){var x=this.a
if(x.c!=null)x.l(new D.cWq(x))},
$S:11}
D.cWq.prototype={
$0(){return this.a.d=null},
$S:0}
D.cWz.prototype={
$1(d){var x=this.a
return x*d+x/2},
$S:168}
D.cWB.prototype={
$1(d){var x=this.b,w=this.a,v=w.a
return x-(d-v)/(w.b-v)*x},
$S:5}
D.cWA.prototype={
$2(d,e){var x,w,v,u,t,s,r,q,p=this,o=$.R(),n=A.a([],y.v),m=new A.aG(o.r,B.aj,null,null,n)
for(o=p.b,x=p.c,w=p.d,v=p.a.c,u=!1,t=0;t<o;++t){s=J.t(v[t],d)
if(s==null)continue
r=x.$1(t)
if(typeof s=="number")q=s
else{q=A.cF(A.v(s))
if(q==null)q=0}q=w.$1(q)
if(u){r=new A.aq(r,q)
n.push(r)
q=m.f
if(q!=null)r.aj(q)
m.ac()}else{r=new A.aZ(r,q)
n.push(r)
q=m.f
if(q!=null)r.aj(q)
m.ac()}u=!0}$.R()
o=A.L()
o.r=e.j(0.85).gp(0)
o.b=B.ab
o.c=2
o.d=B.bG
o.e=B.dO
p.e.af(m,o)},
$S:2335}
D.ffC.prototype={
$1(d){return D.f4(J.t(d,"c"))},
$S:2336}
D.fu9.prototype={
$1(d){var x=null,w=C.a8r.h(0,d),v=w.a,u=w.b,t=this.a,s=t*0.78,r=A.K(B.c,B.r,1.2)
return A.o(B.z,A.c(v,x,x,x,x,x,x,A.l(x,x,B.c,x,x,x,x,x,x,x,x,t*(v.length>1?0.26:0.36),x,x,B.u,x,x,!0,x,x,x,x,x,x,x,x),x,x,x),B.f,x,x,new A.n(u,x,r,x,x,x,B.a6),x,s,x,x,x,x,x,s)},
$S:137}
D.fzx.prototype={
$1(d){var x=y.N,w=y.z,v=A.a1(d,x,w)
w=A.dG(v,x,w)
w.n(0,"asset",v.h(0,"symbol"))
return w},
$S:25}
D.fDR.prototype={
$1(d){return A.a1(d,y.N,y.z)},
$S:25}
D.fAD.prototype={
$1(d){return","},
$S:63}
D.fHS.prototype={
$3(d,e,f){var x=A.bP_(d,e,1,0,0,0,0,0)
while(A.lE(x)!==7)x=x.bQ(864e8)
return x.bQ(A.du(7*(f-1),0,0,0,0,0).a)},
$S:2337}
D.fEI.prototype={
$1(d){return J.k(d)},
$S:16}
D.fEJ.prototype={
$2(d,e){var x=null,w=e.b,v=A.ao(x,A.o(x,x,B.f,x,x,new A.n(x,x,x,A.m(9),x,C.caa,B.m),x,6,x,x,x,x,x,x),x,x,0,0,4,x),u=B.i.D(this.a/100*w-7,0,w-14)
return new A.a5(x,14,new A.an(B.a0,x,B.ad,B.f,A.a([v,A.ao(x,A.o(x,x,B.f,x,x,new A.n(B.c,x,A.K(this.b.a?C.e1:B.c,B.r,2.5),x,x,x,B.a6),x,14,x,x,x,x,x,14),x,x,u,x,0,x)],y.p),x),x)},
$S:127}
D.eGl.prototype={
$1(d){var x=y.N,w=y.z
w=A.dG(A.a1(d,x,w),x,w)
w.n(0,"asset",J.t(d,"symbol"))
return w},
$S:25}
D.eGm.prototype={
$0(){return this.a.l(new D.eGk())},
$S:0}
D.eGk.prototype={
$0(){},
$S:0}
D.eGn.prototype={
$1(d){this.a.R9()
return null},
$S:12}
D.eFU.prototype={
$0(){var x=this.b
return this.a.w=A.js(x,A.T(x).c)},
$S:0}
D.eFV.prototype={
$0(){var x=this.a,w=A.cZ(x.w,y.N)
w.I(0,this.b)
return x.w=w},
$S:0}
D.eG1.prototype={
$1(d){var x=y.N,w=y.z
w=A.dG(A.a1(d,x,w),x,w)
w.n(0,"asset",J.t(d,"symbol"))
return w},
$S:25}
D.eG2.prototype={
$0(){var x,w=this.a
w.e=this.b
x=this.c
if(x.length!==0)w.as=x
w.f=new A.V(Date.now(),0,!1)},
$S:0}
D.eFW.prototype={
$2(d,e){return new A.V(Date.now(),0,!1).bz(e.a).a>18e7},
$S:2338}
D.eFX.prototype={
$0(){},
$S:0}
D.eGg.prototype={
$1(d){return J.z(J.t(d,"open"),!0)&&D.aRk(d).length>5},
$S:4}
D.eGh.prototype={
$2(d,e){return B.i.aQ(D.aH8(d),D.aH8(e))},
$S:40}
D.eFK.prototype={
$1(d){return J.z(J.t(d,"asset"),this.a.h(0,"symbol"))},
$S:4}
D.eFL.prototype={
$0(){return A.S(y.N,y.z)},
$S:236}
D.eFM.prototype={
$1(d){var x,w,v,u,t,s,r,q,p,o,n="typicalMin",m="enterWithinMin",l=J.a6(d),k=D.iS(l.h(d,"reading")),j=D.iS(k.h(0,"timing"))
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
u=D.hGj(d)
t=B.i.aa(D.f4(l.h(d,"changePct")),2)
l=J.z(l.h(d,"open"),!0)?"open":"closed"
s=k.h(0,"bias")
s=A.v(s==null?"unknown":s)
r=B.i.aa(D.f4(k.h(0,"score")),0)
q=k.h(0,"rsi")==null?"n/a":B.i.aa(D.f4(k.h(0,"rsi")),0)
p=k.h(0,"mom1h")==null?"n/a":B.i.aa(D.f4(k.h(0,"mom1h")),2)+"%"
o=k.h(0,"action")
return"- "+w+" ("+v+"): price "+u+", change "+t+"%, "+l+", "+s+", strength "+r+", RSI "+q+", last hour "+p+", reading: "+A.v(o==null?"n/a":o)+x+"."},
$S:53}
D.eFE.prototype={
$0(){var x=this.a
x.x.push(new D.a_v(!0,this.b))
x.Q=!0},
$S:0}
D.eFF.prototype={
$1(d){return(d.a?"Student":"Tutor")+": "+d.b},
$S:z+4}
D.eFG.prototype={
$1(d){return"- "+A.v(d)},
$S:16}
D.eFH.prototype={
$0(){var x=this.b
x.x.push(new D.a_v(!1,this.a.a))
x.Q=!1},
$S:0}
D.eG3.prototype={
$1(d){var x=this.a.z,w=x.f
if(w.length!==0){w=B.d.gd1(w).Q
w.toString
x.m6(w+200,B.e7,B.eW)}},
$S:7}
D.eGi.prototype={
$0(){return A.VF(this.a)},
$S:0}
D.eGj.prototype={
$0(){return this.b.gT7().Gf(this.a.a)},
$S:0}
D.eFJ.prototype={
$1(d){return this.a.w.q(0,d.a)},
$S:z+5}
D.eFI.prototype={
$0(){return this.a.cln(this.b)},
$S:0}
D.eG0.prototype={
$1(d){var x=this.b,w=this.a
return new D.a0w(x,B.d.cd(C.a6p,x)+1,new D.eFY(w,x),new D.eFZ(w,x),new D.eG_(w),null)},
$S:z+6}
D.eFY.prototype={
$0(){var x=this.a,w=x.c
w.toString
return x.c6B(new D.a1s(A.O(w).ax.a===B.dd),this.b.r)},
$S:146}
D.eFZ.prototype={
$0(){return this.a.a_d(this.b.a)},
$S:0}
D.eG_.prototype={
$1(d){var x=this.a,w=x.c
w.toString
A.a8(w,!1).e7()
x.aQR(d)},
$S:2}
D.eFN.prototype={
$2$last$lines(d,e){var x=this.a
return new D.ady(B.d.fC(x,Math.max(0,x.length-d)),this.b,null,e,this.c,null)},
$0(){return this.$2$last$lines(36,!0)},
$1$lines(d){return this.$2$last$lines(36,d)},
$S:2339}
D.eFT.prototype={
$1(d){var x=null
return A.c(d,x,x,x,x,x,x,A.l(x,x,this.a.a?C.e1:B.c,x,x,x,x,x,x,x,x,13,x,x,x,x,1.4,!0,x,x,x,x,x,x,x,x),x,x,x)},
$S:2340}
D.eFO.prototype={
$1(d){return J.z(D.iS(J.t(d,"reading")).h(0,"action"),"BUY SIGNAL")},
$S:4}
D.eFP.prototype={
$1(d){return J.t(d,"asset")},
$S:838}
D.eFQ.prototype={
$1(d){return J.z(D.iS(J.t(d,"reading")).h(0,"action"),"SELL SIGNAL")},
$S:4}
D.eFR.prototype={
$1(d){return J.t(d,"asset")},
$S:838}
D.eFS.prototype={
$1(d){var x=J.a6(d)
return J.z(x.h(d,"open"),!0)&&D.iS(x.h(d,"reading")).h(0,"rsi")!=null},
$S:4}
D.eG7.prototype={
$1(d){var x,w,v,u=this.a
if(u.ay!=="All"&&D.hBt(d)!==u.ay)return!1
u=this.b
if(u.length===0)return!0
x=J.a6(d)
w=A.v(x.h(d,"asset"))
v=A.v(x.h(d,"name"))
x=x.h(d,"asset")
x=J.k(x==null?"":x)
return B.a.q((w+" "+v+" "+A.aL(x,"/","")).toLowerCase(),u)},
$S:4}
D.eG8.prototype={
$2(d,e){var x=this.a.cx,w=x.am(0,J.t(d,"asset"))?0:1,v=x.am(0,J.t(e,"asset"))?0:1
if(w!==v)return w-v
return B.i.aQ(D.aH8(d),D.aH8(e))},
$S:40}
D.eG9.prototype={
$1(d){return J.z(D.iS(J.t(d,"reading")).h(0,"bias"),"bullish")},
$S:4}
D.eGa.prototype={
$1(d){return J.z(D.iS(J.t(d,"reading")).h(0,"bias"),"bearish")},
$S:4}
D.eGc.prototype={
$0(){var x=this.a
return x.l(new D.eG6(x,this.b))},
$S:0}
D.eG6.prototype={
$0(){return this.a.ay=this.b},
$S:0}
D.eGb.prototype={
$1(d){return D.hBt(d)===this.a},
$S:4}
D.eGd.prototype={
$0(){var x=this.a
x.l(new D.eG5(x))},
$S:0}
D.eG5.prototype={
$0(){var x=this.a,w=x.ax
x.ax=!w
if(w){x.at=""
x.ch.bN(0,B.ci)}},
$S:0}
D.eGe.prototype={
$1(d){var x=this.a
return x.l(new D.eG4(x,d))},
$S:2}
D.eG4.prototype={
$0(){return this.a.at=this.b},
$S:0}
D.eGf.prototype={
$0(){return this.a.aQR("What is happening with "+A.v(J.t(this.b,"asset"))+" right now? Is it bullish or bearish, how long might the move last, and is it too late to enter?")},
$S:0}
D.eFC.prototype={
$0(){return this.a.JV(this.b)},
$S:0}
D.eFD.prototype={
$0(){var x=this.a
return x.JV(x.y.a.a)},
$S:0}
D.du2.prototype={
$1(d){return this.a.d.h(0,d.a)===d.b.c},
$S:z+7}
D.du3.prototype={
$0(){return A.VF(this.a)},
$S:0}
D.du4.prototype={
$0(){return this.a.a.cZO('I just read the lesson "'+this.b.b+'". Can you explain it again with a live example from the markets right now?')},
$S:0}
D.du5.prototype={
$0(){this.a.a.rr()
A.VF(this.b)},
$S:0}
D.du1.prototype={
$0(){var x=this.a
return x.l(new D.du0(x,this.b,this.c))},
$S:0}
D.du0.prototype={
$0(){var x=this.c
this.a.d.n(0,this.b,x)
return x},
$S:0};(function aliases(){var x=D.aPa.prototype
x.bBk=x.t})();(function installTearOffs(){var x=a._instance_0u,w=a._instance_1u
var v
x(v=D.aH7.prototype,"gcll","clm",1)
x(v,"gcyM","a3i",0)
x(v=D.aH9.prototype,"gcg1","R9",0)
w(v,"gcg_","JV",3)})();(function inheritance(){var x=a.mixinHard,w=a.inheritMany,v=a.inherit
w(A.ag,[D.P7,D.ady,D.XA,D.a0w])
w(A.ah,[D.aH7,D.be4,D.aPa,D.bkL])
w(A.ks,[D.eFB,D.eFk,D.eFa,D.eFu,D.eFi,D.eFq,D.eF1,D.eF3,D.eFe,D.eFf,D.eFz,D.cWw,D.cWu,D.cWv,D.cWt,D.cWx,D.cWz,D.cWB,D.ffC,D.fu9,D.fzx,D.fDR,D.fAD,D.fHS,D.fEI,D.eGl,D.eGn,D.eG1,D.eGg,D.eFK,D.eFM,D.eFF,D.eFG,D.eG3,D.eFJ,D.eG0,D.eG_,D.eFN,D.eFT,D.eFO,D.eFP,D.eFQ,D.eFR,D.eFS,D.eG7,D.eG9,D.eGa,D.eGb,D.eGe,D.du2])
w(A.mG,[D.eFc,D.eFj,D.eFm,D.eFb,D.eFs,D.eFt,D.eFv,D.eFw,D.eFo,D.eFp,D.eFA,D.eFx,D.eFy,D.eF2,D.eF4,D.eFd,D.eF7,D.eF6,D.eF8,D.eF5,D.eF9,D.eF0,D.eF_,D.cWp,D.cWs,D.cWr,D.cWq,D.eGm,D.eGk,D.eFU,D.eFV,D.eG2,D.eFX,D.eFL,D.eFE,D.eFH,D.eGi,D.eGj,D.eFI,D.eFY,D.eFZ,D.eGc,D.eG6,D.eGd,D.eG5,D.eG4,D.eGf,D.eFC,D.eFD,D.du3,D.du4,D.du5,D.du1,D.du0])
w(A.mm,[D.eFn,D.eFr,D.eFh,D.eFg,D.eFl,D.cWy,D.cWA,D.fEJ,D.eFW,D.eGh,D.eG8])
w(A.qc,[D.be5,D.aKu])
w(A.aK,[D.yU,D.a1s,D.nk,D.uq,D.a_v])
v(D.aH9,D.aPa)
x(D.aPa,A.cf)})()
A.nN(b.typeUniverse,JSON.parse('{"ady":{"ag":[],"w":[]},"XA":{"ag":[],"w":[]},"a0w":{"ag":[],"w":[]},"P7":{"ag":[],"w":[]},"aH7":{"ah":["P7"]},"be4":{"ah":["ady"]},"be5":{"aB":[]},"aKu":{"aB":[]},"aH9":{"ah":["XA"]},"bkL":{"ah":["a0w"]}}'))
var y=(function rtii(){var x=A.aD
return{c:x("ls<u?>"),D:x("Ex"),V:x("U<ab>"),O:x("U<u>"),t:x("U<aa<p,@>>"),v:x("U<hP>"),L:x("U<+(p,p)>"),s:x("U<p>"),p:x("U<w>"),h:x("U<a_v>"),r:x("U<nk>"),n:x("U<G>"),P:x("aa<p,@>"),f:x("aa<@,@>"),a:x("cw"),R:x("+at,from,to(V,p,p)"),N:x("p"),E:x("Y<uq>"),q:x("p9"),y:x("Q"),z:x("@"),S:x("H"),g:x("ai<@>?"),H:x("~")}})();(function constants(){var x=a.makeConstList
C.lQ=new A.u(1,0.08627450980392157,0.10588235294117647,0.1803921568627451,B.q)
C.dA=new A.u(1,0.5411764705882353,0.5607843137254902,0.6392156862745098,B.q)
C.yH=new A.u(1,0.0392156862745098,0.050980392156862744,0.09411764705882353,B.q)
C.yJ=new A.u(1,0.9294117647058824,0.9372549019607843,0.9803921568627451,B.q)
C.dB=new A.u(1,0.5529411764705883,0.5843137254901961,0.6705882352941176,B.q)
C.kX=new A.u(1,0.08627450980392157,0.09019607843137255,0.11372549019607843,B.q)
C.ej=new A.u(1,0.12156862745098039,0.7490196078431373,0.592156862745098,B.q)
C.qw=new A.u(1,0.14901960784313725,0.17647058823529413,0.27058823529411763,B.q)
C.qz=new A.u(1,0.9058823529411765,0.9098039215686274,0.9411764705882353,B.q)
C.a_m=new A.u(1,0.06666666666666667,0.08235294117647059,0.1607843137254902,B.q)
C.NN=new A.u(1,0.12549019607843137,0.14901960784313725,0.23137254901960785,B.q)
C.a_w=new A.u(1,0.9725490196078431,0.9450980392156862,0.9490196078431372,B.q)
C.uQ=new A.u(1,0.13725490196078433,0.16470588235294117,0.25882352941176473,B.q)
C.NW=new A.u(1,0.9372549019607843,0.9411764705882353,0.9607843137254902,B.q)
C.e1=new A.u(1,0.07058823529411765,0.0784313725490196,0.10980392156862745,B.q)
C.f4=new A.u(1,0.9411764705882353,0.33725490196078434,0.41568627450980394,B.q)
C.a0a=new A.u(1,0.9568627450980393,0.9607843137254902,0.9803921568627451,B.q)
C.a0c=new A.u(1,0.11372549019607843,0.13725490196078433,0.2196078431372549,B.q)
C.bE9=new A.P(0,0,0,7)
C.bFM=new A.P(12,8,12,6)
C.bFW=new A.P(13,7,13,7)
C.bGL=new A.P(16,10,16,30)
C.bH6=new A.P(16,4,16,40)
C.bH9=new A.P(16,6,16,16)
C.ao9=new A.P(16,6,16,40)
C.bHh=new A.P(16,8,16,40)
C.bK2=new A.P(4,0,4,8)
C.bKl=new A.P(4,6,4,14)
C.bKy=new A.P(6,0,6,14)
C.bTa=new A.a_(62840,"MaterialIcons",!1)
C.bVr=new A.a_(983325,"MaterialIcons",!1)
C.ass=new A.a_(983635,"MaterialIcons",!0)
C.asd=new A.a_(983372,"MaterialIcons",!1)
C.bX0=new A.ae(C.asd,18,C.ej,null,null,null)
C.bXs=new A.ae(B.xe,16,null,null,null,null)
C.c_w=new A.ae(B.r1,7,C.ej,null,null,null)
C.c0s=new A.ae(B.rb,20,B.c,null,null,null)
C.c1B=new A.ae(B.hl,16,B.c,null,null,null)
C.c2H=new A.ae(B.xe,18,null,null,null,null)
C.c4K=new A.ae(B.QB,18,null,null,null,null)
C.cNm=x([B.dx,B.fw,B.i0],y.O)
C.ca9=new A.a7(B.ay,B.aC,B.x,C.cNm,null,null)
C.aCG=x([C.f4,B.at,C.ej],y.O)
C.caa=new A.a7(B.a5,B.a9,B.x,C.aCG,null,null)
C.dqs=x([0,0.33,1],y.n)
C.cbW=new A.a7(B.a5,B.a9,B.x,C.aCG,C.dqs,null)
C.doR=x([B.dx,B.i0,B.bA],y.O)
C.cdO=new A.a7(B.ay,B.aC,B.x,C.doR,null,null)
C.dr6=x([B.i0,B.bA],y.O)
C.ceb=new A.a7(B.a5,B.a9,B.x,C.dr6,null,null)
C.cnE=x([12,24,48],A.aD("U<H>"))
C.f5v=new A.y("The idea","Trading means buying something and selling it later. You make money when you sell for more than you paid, and you lose money when you sell for less. That is all a trade is.")
C.eY9=new A.y("Why prices move","Every price is set by buyers and sellers. When more people want to buy than sell, the price goes up. When more want to sell, it goes down. A chart is simply a picture of that tug of war over time.")
C.eZ5=new A.y("Nobody knows the future","No person, app or AI can know for sure where a price goes next. Good traders do not guess. They follow clear rules, keep losses small, and let the winners pay for the losers.")
C.f5d=new A.y("Why pretend money first","This agent uses Alpaca paper money: real prices, fake dollars. You can learn every step, make mistakes and see real results without risking a cent. Professionals practise this way too.")
C.cYO=x([C.f5v,C.eY9,C.eZ5,C.f5d],y.L)
C.d9E=x(["When you buy","When you sell for more than you paid","When the market opens"],y.s)
C.hPh=new D.nk("When do you make money on a trade?",C.d9E,1,"Profit only exists after you sell higher than you bought.")
C.d4l=x(["More buyers than sellers","The app","The time of day"],y.s)
C.hPb=new D.nk("What makes a price go up?",C.d4l,0,"More people wanting to buy pushes the price up.")
C.dwF=x([C.hPh,C.hPb],y.r)
C.hL4=new D.uq("basics","What trading really is","Buyers, sellers and why prices move",4,B.l7,B.at,"basics",C.cYO,C.dwF)
C.bW3=new A.a_(983780,"MaterialIcons",!1)
C.eOP=new A.y("One candle = one time slice","On this chart every candle is 5 minutes. It shows four prices: where it started (open), where it ended (close), the highest point (high) and the lowest point (low).")
C.eWu=new A.y("The colours","Green candle: the price closed HIGHER than it opened, buyers won those 5 minutes. Yellow candle: it closed LOWER, sellers won. Many apps use red instead of yellow, it means the same thing.")
C.f6I=new A.y("Body and wicks","The thick part (the body) runs from open to close. The thin lines (the wicks) show how far the price went up or down before coming back. A long wick on top means buyers pushed up but sellers pushed it back down.")
C.f3O=new A.y("Reading a row of candles","Several green candles in a row, each closing higher, show buyers in control. Many yellow ones closing lower show sellers in control. Candles that go up and down with no direction mean the market is undecided.")
C.cfe=x([C.eOP,C.eWu,C.f6I,C.f3O],y.L)
C.d9L=x(["It closed higher than it opened","It is a good time to buy","The market is closed"],y.s)
C.hPf=new D.nk("A green candle means...",C.d9L,0,"Colour only tells you if it closed above or below where it opened.")
C.cG3=x(["1 day","5 minutes","1 hour"],y.s)
C.hP5=new D.nk("On this chart one candle covers...",C.cG3,1,"The agent works with 5-minute candles.")
C.dfJ=x([C.hPf,C.hP5],y.r)
C.hL9=new D.uq("candles","Reading candles","Open, close, high and low in one shape",5,C.bW3,C.ej,"candles",C.cfe,C.dfJ)
C.f_c=new A.y("Bullish","An uptrend. The price makes higher highs and higher lows, like climbing stairs. Buyers are in control. Traders call this bullish (a bull attacks upward with its horns).")
C.f7D=new A.y("Bearish","A downtrend. Lower highs and lower lows, like walking down stairs. Sellers are in control. This is bearish (a bear swipes downward).")
C.eQ6=new A.y("Sideways","The price bounces between a ceiling and a floor with no clear direction. Most trading signals fail here, so the best move is often to wait.")
C.f1Y=new A.y("The golden rule","Trade WITH the trend, not against it. Buying in a downtrend because it looks cheap is how most beginners lose. The agent only buys when the trend turns up.")
C.d7U=x([C.f_c,C.f7D,C.eQ6,C.f1Y],y.L)
C.d67=x(["Bearish","Bullish","Sideways"],y.s)
C.hPg=new D.nk("Higher highs and higher lows means...",C.d67,1,"Climbing stairs = uptrend = bullish.")
C.d9U=x(["Work best","Often fail","Are always right"],y.s)
C.hP8=new D.nk("In a sideways market, signals...",C.d9U,1,"With no direction, signals flip back and forth.")
C.dxb=x([C.hPg,C.hP8],y.r)
C.hL1=new D.uq("trend","Trends: up, down, sideways","Bullish, bearish and how to tell",5,B.nf,B.cd,"trend",C.d7U,C.dxb)
C.f8E=new A.y("What an average line is","A moving average is the average closing price of the last few candles, drawn as a smooth line. It hides the small wiggles so you can see the real direction.")
C.eNZ=new A.y("Fast line (pink)","The average of the last 9 candles, about 45 minutes. It reacts quickly to new moves.")
C.ePC=new A.y("Slow line (purple)","The average of the last 21 candles, about 1 hour 45 minutes. It moves slowly and shows the bigger direction.")
C.f0e=new A.y("How to read them","Fast line ABOVE slow line: recent prices are higher than older ones, the trend is up. Fast line BELOW: the trend is down. When the price itself is above both lines, buyers are strong.")
C.dqF=x([C.f8E,C.eNZ,C.ePC,C.f0e],y.L)
C.dFN=x(["45 minutes","1 day","1 week"],y.s)
C.hPi=new D.nk("The pink fast line averages about...",C.dFN,0,"9 candles x 5 minutes = 45 minutes.")
C.dBt=x(["Trend is up","Trend is down","Market closed"],y.s)
C.hPa=new D.nk("Fast line above slow line means...",C.dBt,0,"Recent prices are higher than older prices.")
C.dmB=x([C.hPi,C.hPa],y.r)
C.hL3=new D.uq("ma","Moving averages","The pink fast line and the purple slow line",6,F.xl,B.bA,"ma",C.dqF,C.dmB)
C.eW8=new A.y("Buy signal","When the fast line crosses UP through the slow line, the short-term trend has just turned up. That moment is the buy signal. The agent buys $50 at that point.")
C.eYi=new A.y("Sell signal","When the fast line crosses back DOWN through the slow line, the up move is over. That is the sell signal, and the agent closes the trade.")
C.f28=new A.y("Why it must be fresh","If the cross happened an hour ago, the easy part of the move may be gone. Buying late means buying high. So the agent only acts on a cross that happened since its last check, never on an old one.")
C.f46=new A.y("The weakness","In sideways markets the lines cross back and forth and give false signals. That is why every trade also has a stop loss: when a signal is wrong, the loss stays small.")
C.duA=x([C.eW8,C.eYi,C.f28,C.f46],y.L)
C.dsN=x(["Crosses above the slow line","Crosses below the slow line","Is flat"],y.s)
C.hP9=new D.nk("The buy signal is when the fast line...",C.dsN,0,"Crossing up = trend turning up.")
C.dEL=x(["To avoid buying late","The app is slow","Old crosses are illegal"],y.s)
C.hP3=new D.nk("Why does the agent skip old crosses?",C.dEL,0,"A late entry means buying after most of the move.")
C.d4r=x([C.hP9,C.hP3],y.r)
C.hL6=new D.uq("cross","The crossover signal","Exactly when the agent buys and sells",6,B.ark,B.b2,"cross",C.duA,C.d4r)
C.bVA=new A.a_(983477,"MaterialIcons",!1)
C.f1H=new A.y("What RSI measures","RSI (Relative Strength Index) compares the size of recent rises with recent falls and gives a number from 0 to 100. Above 50, rises have been bigger. Below 50, falls have been bigger.")
C.eRO=new A.y("Above 70: stretched","The price rose very fast. It is called overbought. It often pauses or pulls back, so buying right then is risky. It can still keep rising in a strong trend.")
C.f1O=new A.y("Below 30: oversold","The price fell very fast. It often bounces, but in a strong downtrend it can stay low. Oversold is not a reason to buy on its own.")
C.f0X=new A.y("How to use it","Use RSI as a second opinion. A buy signal with RSI between 50 and 70 is healthy. A buy signal with RSI above 75 means the move may already be tired.")
C.d4O=x([C.f1H,C.eRO,C.f1O,C.f0X],y.L)
C.dfA=x(["Oversold","Overbought","Neutral"],y.s)
C.hP2=new D.nk("RSI above 70 is called...",C.dfA,1,"It rose fast and is stretched.")
C.hPe=new D.nk("RSI below 30 always means buy.",H.a6Z,1,"Falling markets can stay oversold. It is a hint, not a signal.")
C.dFF=x([C.hP2,C.hPe],y.r)
C.hL8=new D.uq("rsi","RSI: momentum","Is the move strong, stretched or tired?",5,C.bVA,B.cD,"rsi",C.d4O,C.dFF)
C.eUZ=new A.y("Decide the exit before you enter","Every agent trade has two exits set before it starts. Take profit at +3% (about +$1.50 on $50) and stop loss at -1.5% (about -$0.75).")
C.eIS=new A.y("Win twice what you risk","The win (+$1.50) is twice the loss (-$0.75). Because of that, you only need to be right about 1 trade in 3 to break even. Being right half the time would be clearly profitable.")
C.ePf=new A.y("Size matters most","The agent uses $50 per trade even though the paper account has $100,000. Small trades mean no single mistake can hurt much. Pros rarely risk more than 1 to 2 percent of their money on one trade.")
C.eZy=new A.y("Never move the stop","The biggest beginner mistake is hoping a losing trade comes back and moving the stop lower. Small losses are the cost of doing business. Big losses end accounts.")
C.drY=x([C.eUZ,C.eIS,C.ePf,C.eZy],y.L)
C.dmv=x(["1 in 3 trades","9 in 10 trades","Every trade"],y.s)
C.hPj=new D.nk("With +$1.50 wins and -$0.75 losses, to break even you must win about...",C.dmv,0,"One win (+1.50) pays for two losses (-1.50).")
C.ded=x(["Move the stop lower","Let the stop loss work","Buy more"],y.s)
C.hP6=new D.nk("A trade is losing. The best move is...",C.ded,1,"The stop exists to keep losses small.")
C.cXF=x([C.hPj,C.hP6],y.r)
C.hL2=new D.uq("risk","Risk: stop loss and take profit","Why small losses beat big wins",7,B.rc,C.f4,"risk",C.drY,C.cXF)
C.bW9=new A.a_(983848,"MaterialIcons",!1)
C.eSp=new A.y("Bad days happen","Some days every signal fails. The danger is trying to win it back by trading more and bigger. That is called revenge trading and it is how small losses become big ones.")
C.eXC=new A.y("Daily stop: $10","If the day loses $10, the agent makes no more buys until tomorrow. It walks away and lets the market calm down.")
C.eZr=new A.y("Total brake: $25","If total losses reach $25, the agent pauses completely until you review what happened and turn it back on. Reviewing is the most important part of learning.")
C.eQO=new A.y("Your own rules","When you trade yourself, set the same kind of limits before the day starts, and keep them even when it hurts.")
C.dxs=x([C.eSp,C.eXC,C.eZr,C.eQO],y.L)
C.diE=x(["Doubles the next trade","Stops buying for the day","Sells everything forever"],y.s)
C.hPc=new D.nk("After losing $10 in a day, the agent...",C.diE,1,"The daily stop prevents revenge trading.")
C.dA7=x([C.hPc],y.r)
C.hL0=new D.uq("brakes","Daily stop and total brake","Protecting your account from bad days",4,C.bW9,B.l_,"brakes",C.dxs,C.dA7)
C.aj1=new A.u(1,0.3843137254901961,0.49411764705882355,0.9176470588235294,B.q)
C.eXm=new A.y("Stocks and funds","SPY, QQQ, Apple, Microsoft, Nvidia, Tesla and Amazon trade on US market days from 9:30 AM to 4:00 PM Eastern Time. Closed at night, on weekends and on holidays.")
C.eYf=new A.y("Overnight gaps","News can come out while the stock market is closed, so the next morning it can open far higher or lower. That is why the agent sells stocks by 3:55 PM and never holds them overnight.")
C.eVj=new A.y("Crypto","Bitcoin, Ethereum and Solana trade all day, every day, including weekends. More hours means more chances, but crypto also moves faster and harder, so stops get hit more often.")
C.f3z=new A.y("Funds vs single companies","SPY holds the 500 biggest US companies and QQQ holds 100 big tech companies, so they move more calmly. One company like Tesla can jump a lot on its own news.")
C.cSJ=x([C.eXm,C.eYf,C.eVj,C.f3z],y.L)
C.d7T=x(["Only weekdays","All day, every day","Only at night"],y.s)
C.hPd=new D.nk("When can Bitcoin be traded?",C.d7T,1,"Crypto never closes.")
C.d51=x(["To avoid overnight gaps","Stocks expire","It is the law"],y.s)
C.hP4=new D.nk("Why sell stocks before the close?",C.d51,0,"Overnight news can make the price jump at the open.")
C.dnB=x([C.hPd,C.hP4],y.r)
C.hL7=new D.uq("hours","Stocks vs crypto","Market hours, weekends and jumpiness",5,B.jT,C.aj1,"hours",C.cSJ,C.dnB)
C.f29=new A.y("Judge many trades, not one","One trade tells you nothing. Luck decides single trades. After 20 to 50 trades you start to see if a method really works. That is why the plan is 2 to 4 weeks of paper trading.")
C.eNj=new A.y("Keep a journal","For each trade write: why you bought, where your stop and target were, what happened, and what you learned. The Pretend trades list on the main screen is the agent's journal.")
C.eNS=new A.y("Follow the rules exactly","The point of the agent is to follow rules perfectly, with no fear and no greed. Check that it did. If it ever breaks a rule, that is a bug to fix before real money.")
C.eVk=new A.y("Before real money","Real money comes only after a long paper test with a positive result, a full review, and money you can truly afford to lose. Never borrow to trade.")
C.dvR=x([C.f29,C.eNj,C.eNS,C.eVk],y.L)
C.dCn=x(["1","3","20 or more"],y.s)
C.hP1=new D.nk("How many trades before judging a method?",C.dCn,2,"Small samples are mostly luck.")
C.dFd=x(["Borrowed","Money you can afford to lose","Rent money"],y.s)
C.hP7=new D.nk("Money for trading should be...",C.dFd,1,"Never trade money you need.")
C.dFA=x([C.hP1,C.hP7],y.r)
C.hL5=new D.uq("practice","Practising like a pro","Journals, patience and judging results",5,B.m1,B.bh,"practice",C.dvR,C.dFA)
C.a6p=x([C.hL4,C.hL9,C.hL1,C.hL3,C.hL6,C.hL8,C.hL2,C.hL0,C.hL7,C.hL5],A.aD("U<uq>"))
C.d5s=x(["All","Forex","Stocks","Crypto"],y.s)
C.dbk=x(["Which market looks strongest right now?","Is Bitcoin going up or down right now?","Why has the agent not bought yet?","Explain RSI like I am new","How do I know when to sell?","What does bullish and bearish mean?"],y.s)
C.etR={EUR:0,USD:1,GBP:2,JPY:3,CAD:4,AUD:5,NZD:6,CHF:7,TRY:8,NOK:9,THB:10}
C.f7p=new A.y("\u20ac",B.dT)
C.f8h=new A.y("$",B.eq)
C.eO_=new A.y("\xa3",B.dg)
C.eXq=new A.y("\xa5",B.bE)
C.eVl=new A.y("C$",B.hF)
C.eXR=new A.y("A$",B.cU)
C.eNi=new A.y("NZ",B.aw)
C.f0D=new A.y("Fr",B.er)
C.f5z=new A.y("TL",B.fJ)
C.f4F=new A.y("kr",B.fU)
C.eRR=new A.y("TH",B.wD)
C.a8r=new A.bq(C.etR,[C.f7p,C.f8h,C.eO_,C.eXq,C.eVl,C.eXR,C.eNi,C.f0D,C.f5z,C.f4F,C.eRR],A.aD("bq<p,+(p,u)>"))
C.c_Z=new A.ae(B.r1,5,B.b2,null,null,null)
C.eAq=new A.D(B.hw,C.c_Z,null)
C.fa1=new A.b3(1,"Live signals",C.asd)
C.fa9=new A.b3(B.l_,C.ass,"Moving sideways")
C.faJ=new A.b3(2,"Ask tutor",B.xe)
C.fb0=new A.b3(B.b2,B.oS,"Waiting for data")
C.fbL=new A.b3(0,"Lessons",B.nZ)
C.fbZ=new A.b3(C.ej,B.nf,"Trend is UP")
C.fd_=new A.b3(C.f4,B.a4L,"Trend is DOWN")
C.bZb=new A.ae(B.r1,8,C.ej,null,null,null)
C.fIs=new A.F(!0,C.ej,null,null,null,null,11.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.h7Z=new A.C("LIVE",null,C.fIs,null,null,null,null,null,null,null,null,null)
C.dtz=x([C.bZb,B.bj,C.h7Z],y.p)
C.flE=new A.c3(B.aL,B.e,B.M,B.l,null,B.p,null,0,C.dtz,null)
C.bZD=new A.ae(B.rb,14,B.c,null,null,null)
C.heR=new A.C("Learn",null,B.np,null,null,null,null,null,null,null,null,null)
C.d96=x([C.bZD,B.d7,C.heR],y.p)
C.flH=new A.c3(B.aL,B.e,B.M,B.l,null,B.p,null,0,C.d96,null)
C.fCu=new A.F(!0,B.c,null,null,null,null,36,B.F,null,-0.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.fGN=new A.F(!0,B.c,null,null,null,null,11,B.u,null,0.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.fGZ=new A.F(!0,C.ej,null,null,null,null,11.5,B.O,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.fIo=new A.F(!0,C.f4,null,null,null,null,11.5,B.O,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.fSu=new A.C("Ask the tutor",null,B.cb,null,null,null,null,null,null,null,null,null)
C.fSC=new A.C("The $25 brake paused the agent. Turning it back on means you have reviewed it. The running demo profit and loss starts again from $0.",null,null,null,null,null,null,null,null,null,null,null)
C.fTJ=new A.C("10 short lessons. Each one shows you the idea live on the real markets the agent is watching.",null,B.Fy,null,null,null,null,null,null,null,null,null)
C.fWI=new A.C("Turn the agent back on?",null,null,null,null,null,null,null,null,null,null,null)
C.fPE=new A.F(!0,B.c,null,null,null,null,9.5,B.u,null,0.8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.h0Z=new A.C("PRETEND MONEY",null,C.fPE,null,null,null,null,null,null,null,null,null)
C.h1H=new A.C("Paper balance",null,B.WG,null,null,null,null,null,null,null,null,null)
C.hbm=new A.C("Check now",null,B.cb,null,null,null,null,null,null,null,null,null)
C.hc1=new A.C("Learn to trade",null,B.m8,null,null,null,null,null,null,null,null,null)
C.hev=new A.C("Turn back on",null,null,null,null,null,null,null,null,null,null,null)
C.hLe=new D.yU("Nvidia","N",B.Nn)
C.hLg=new D.yU("Ethereum","\u039e",C.aj1)
C.hLj=new D.yU("S&P 500 fund","S&P",B.cd)
C.hLk=new D.yU("Bitcoin","B",E.wA)
C.hLm=new D.yU("Tesla","T",B.bE)
C.hLn=new D.yU("Microsoft","M",B.bp)
C.hLo=new D.yU("Nasdaq 100 fund","Q",B.cD)
C.bnA=new A.u(1,0.6,0.27058823529411763,1,B.q)
C.hLq=new D.yU("Solana","S",C.bnA)
C.hLs=new D.yU("Apple","A",B.cQ)
C.hLv=new D.yU("Amazon","a",B.at)})()};
(a=>{a["KVrek9zZ4K5lSdczSTKp0Xdmg+4="]=a.current})($__dart_deferred_initializers__);