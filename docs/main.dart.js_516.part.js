((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,P,E,Q,G,R,I,S,K,L,M,T,U,F,V,W,X,N,D={
i6U(){return new D.atV(null)},
aHp(d){var w=J.a2(d),v=D.ex(w.h(d,"reading")).h(0,"action"),u=J.k(v==null?"":v)
if(B.a.Y(u,"ENTER UP"))return 0
if(B.a.Y(u,"ENTER DOWN"))return 1
if(!J.z(w.h(d,"open"),!0))return 4
return 2+(100-D.d_(D.ex(w.h(d,"reading")).h(0,"score")))/1000},
fBb(d){var w
switch(d){case"SPY":w=C.hO8
break
case"QQQ":w=C.hOd
break
case"AAPL":w=C.hOh
break
case"MSFT":w=C.hOc
break
case"NVDA":w=C.hO3
break
case"TSLA":w=C.hOb
break
case"AMZN":w=C.hOk
break
case"BTC/USD":w=C.hO9
break
case"ETH/USD":w=C.hO5
break
case"SOL/USD":w=C.hOf
break
default:w=new D.z3(d,d.length===0?"?":d[0],B.b2)
break}return w},
hl9(d,e){var w,v,u=null,t=d.split("/")
if(t.length===2&&C.a8t.am(0,t[0])&&C.a8t.am(0,t[1])){t=d.split("/")
w=new D.fw4(e)
return new A.a6(e*1.25,e,new A.an(B.a0,u,B.ad,B.t,A.a([A.ao(u,w.$1(t[0]),u,u,0,u,0,u),A.ao(0,w.$1(t[1]),u,u,u,0,u,u)],x.p),u),u)}v=D.fBb(d)
w=v.b
return A.p(B.z,A.c(w,u,u,u,u,u,u,A.l(u,u,B.c,u,u,u,u,u,u,u,u,w.length>1?e*0.32:e*0.52,u,u,B.u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),B.f,u,u,new A.o(v.c,u,u,u,u,u,B.a6),u,e,u,u,u,u,u,e)},
fBt(d){var w,v=x.g.a(d.h(0,"markets"))
if(v==null)v=B.c1
v=J.cV(v,x.f)
v=A.cE(v,new D.fBu(),v.$ti.k("M.E"),x.P)
w=A.B(v,A.a3(v).k("M.E"))
return w},
ex(d){var w=x.N,v=x.z
return x.f.b(d)?A.a1(d,w,v):A.S(w,v)},
d_(d){var w
if(typeof d=="number")w=d
else{w=A.cw(A.v(d==null?"":d))
if(w==null)w=0}return w},
bF5(d){var w=x.g.a(D.ex(J.t(d,"chart")).h(0,"points"))
if(w==null)w=B.c1
w=J.cV(w,x.f)
w=A.cE(w,new D.fFP(),w.$ti.k("M.E"),x.P)
w=A.B(w,A.a3(w).k("M.E"))
return w},
eT(d,e,f){var w,v=A.o4(B.i.a5(Math.abs(d),2),A.ag("\\B(?=(\\d{3})+(?!\\d))",!0,!1,!1,!1),new D.fCA(),null)
if(d<0)w="-"
else w=f&&d>0?"+":""
return w+(e?"$":"")+v},
a2Z(d){var w=B.o.F(A.d7(d),12)===0?12:B.o.F(A.d7(d),12),v=B.a.b0(B.o.v(A.fH(d)),2,"0"),u=A.d7(d)<12?"AM":"PM"
return""+w+":"+v+" "+u},
ai7(d){var w=d.ab(),v=new D.fJS(),u=v.$3(A.bD(w),3,2).bL(252e8),t=v.$3(A.bD(w),11,1).bL(216e8),s=w.bL(0-A.dy(0,!w.cW(u)&&w.cW(t)?4:5,0,0,0,0).a)
return A.c0(A.bD(s),A.bN(s),A.bW(s),A.d7(s),A.fH(s),0,0,0)},
bDL(d){var w,v,u,t=d==null,s=A.v(t?"":d).split("-")
if(s.length!==3)return A.v(t?"":d)
w=A.c8(s[1],null)
t=B.iw[B.o.D((w==null?1:w)-1,0,11)]
v=s[2]
u=A.c8(v,null)
return t+" "+A.v(u==null?v:u)+", "+s[0]},
hGl(d){var w,v=A.bh(A.v(d==null?"":d))
if(v==null)return""
w=D.ai7(v)
return B.iw[A.bN(w)-1]+" "+A.bW(w)+" at "+D.a2Z(w)+" ET"},
hJw(d){var w,v,u=d.split(", ")
if(u.length>=4){w=u[1]
v=u[3]
return w+", "+A.aL(v," ET","")}return d},
hFx(d){return d.length===0?d:d[0].toUpperCase()+B.a.aY(d,1)},
hI3(){var w=D.ai7(new A.V(Date.now(),0,!1).ab()),v=B.o.F(A.fH(w),5)
return"at "+D.a2Z(A.c0(A.bD(w),A.bN(w),A.bW(w),A.d7(w),A.fH(w),0,0,0).bL(A.dy(0,0,0,0,5-v,0).a))+" ET"},
ifx(d){if(B.a.Y(d,"ENTER UP"))return C.dc
if(B.a.Y(d,"ENTER DOWN"))return C.dO
if(B.a.q(d,"SKIP")||B.a.q(d,"TOO LATE"))return C.dO
if(B.a.Y(d,"MARKET CLOSED"))return B.bP
return E.jx},
hJ3(a8,a9,b0,b1,b2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=null,a2="mom1h",a3=J.a2(a9),a4=D.ex(a3.h(a9,"reading")),a5=D.ex(a4.h(0,"timing")),a6=D.bF5(a9),a7=a3.h(a9,"asset")
if(a7==null)a7=a3.h(a9,"symbol")
w=J.k(a7==null?"":a7)
a7=a4.h(0,"action")
v=J.k(a7==null?"WAITING FOR DATA":a7)
u=D.ifx(v)
t=B.i.D(D.d_(a4.h(0,"score")),0,100)
a7=x.g.a(a4.h(0,"notes"))
if(a7==null)a7=B.c1
a7=J.b8(a7,new D.fGG(),x.N)
s=A.B(a7,a7.$ti.k("aj.E"))
r=D.d_(a3.h(a9,"changePct"))
a7=a8.a
q=a7?B.c.j(0.92):C.je
p=A.n(20)
o=B.a.Y(v,"ENTER")
if(o)n=u.j(0.6)
else n=a7?B.c:C.oJ
n=A.K(n,B.r,o?1.6:1)
m=x.V
l=A.a([new A.aa(0,B.H,a8.gO8(),B.hR,14)],m)
k=D.hl9(w,28)
o=A.c(w,a1,a1,a1,a1,a1,a1,A.l(a1,a1,a7?C.d_:B.c,a1,a1,a1,a1,a1,a1,a1,a1,14,a1,a1,B.F,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1)
j=a3.h(a9,"name")
j=J.k(j==null?"":j)
i=x.p
j=A.a([k,B.ar,A.E(A.x(A.a([o,A.c(j,a1,a1,a1,a1,a1,a1,A.l(a1,a1,a7?C.cC:C.cD,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1)],i),B.B,a1,B.e,B.h,0,B.p),1)],i)
if(a6.length>2)B.d.u(j,A.a([new A.a6(58,26,A.b4(a1,a1,a1,new D.bwl(a6,r>=0?C.dc:C.dO,a1),B.az),a1),B.ar],i))
o=D.hIY(a9)
o=A.c(o,a1,a1,a1,a1,a1,a1,A.l(a1,a1,a7?C.d_:B.c,a1,a1,a1,a1,a1,a1,a1,a1,14,a1,a1,B.F,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1)
k=r>=0
h=k?"+":""
g=B.i.a5(r,2)
f=J.z(a3.h(a9,"kind"),"forex")?"30m":"4h"
j.push(A.x(A.a([o,A.c(h+g+"% \xb7 "+f,a1,a1,a1,a1,a1,a1,A.l(a1,a1,k?C.dc:C.dO,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,B.P,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1)],i),B.dF,a1,B.e,B.h,0,B.p))
o=A.a([A.A(j,B.l,a1,B.e,B.h,0,a1,a1)],i)
if(x.f.b(a4.h(0,"entry"))){k=D.ex(a4.h(0,"entry"))
e=J.z(k.h(0,"dir"),"up")
d=e?C.dc:C.dO
a0=Math.max(1,B.i.S(D.d_(k.h(0,"candleMin"))))
j=A.n(18)
h=A.ap(d,B.v,0.25)
h.toString
h=A.a([d,h],x.O)
m=A.a([new A.aa(0,B.H,d.j(0.35),B.cw,16)],m)
g=B.c.j(0.22)
g=A.p(a1,A.W(e?B.pW:B.pV,B.c,a1,a1,a1,34),B.f,a1,a1,new A.o(g,a1,a1,a1,a1,a1,B.a6),a1,52,a1,a1,a1,a1,a1,52)
f=A.c(e?"ENTER UP":"ENTER DOWN",a1,a1,a1,a1,a1,a1,C.fQ3,a1,a1,a1)
B.d.u(o,A.a([B.af,A.p(a1,A.x(A.a([g,B.ak,f,A.c(e?"BUY / CALL":"SELL / PUT",a1,a1,a1,a1,a1,a1,C.fHB,a1,a1,a1),B.S,new D.aCz(a0,a1),B.S,A.A(A.a([A.x(A.a([A.c(B.i.a5(D.d_(k.h(0,"durationMin")),0)+" min",a1,a1,a1,a1,a1,a1,B.jo,a1,a1,a1),A.c("Trade for",a1,a1,a1,a1,a1,a1,H.acH,a1,a1,a1)],i),B.l,a1,B.e,B.h,0,B.p),A.p(a1,a1,B.f,B.jU,a1,a1,a1,30,a1,B.r5,a1,a1,a1,1),A.x(A.a([A.c(A.v(k.h(0,"worked"))+" of "+A.v(k.h(0,"of")),a1,a1,a1,a1,a1,a1,B.jo,a1,a1,a1),A.c("Worked lately",a1,a1,a1,a1,a1,a1,H.acH,a1,a1,a1)],i),B.l,a1,B.e,B.h,0,B.p)],i),B.l,a1,B.b9,B.h,0,a1,a1)],i),B.l,a1,B.e,B.h,0,B.p),B.f,a1,a1,new A.o(a1,a1,a1,j,m,new A.a7(B.aW,B.b0,B.x,h,a1,a1),B.m),a1,a1,a1,a1,V.a1Q,a1,a1,1/0)],i))}if(b0!=null){m=A.n(10)
B.d.u(o,A.a([B.O,A.p(a1,A.A(A.a([C.c20,B.d8,A.E(A.c(b0+" \xb7 check before you act",a1,a1,a1,a1,a1,a1,C.fJp,a1,a1,a1),1)],i),B.l,a1,B.e,B.h,0,a1,a1),B.f,a1,a1,new A.o(a1,a1,a1,m,a1,C.ceD,B.m),a1,a1,a1,a1,B.fN,a1,a1,1/0)],i))}o.push(B.S)
m=u.j(0.15)
k=A.n(999)
k=A.a([A.p(a1,A.c(v,a1,a1,a1,a1,a1,a1,A.l(a1,a1,u,a1,a1,a1,a1,a1,a1,a1,a1,10.5,a1,a1,B.u,a1,a1,!0,a1,0.4,a1,a1,a1,a1,a1,a1),a1,a1,a1),B.f,a1,a1,new A.o(m,a1,a1,k,a1,a1,B.m),a1,a1,a1,a1,B.o1,a1,a1,a1),B.aY],i)
if(a4.h(0,"rsi")!=null){m=B.i.a5(D.d_(a4.h(0,"rsi")),0)
k.push(A.c("RSI "+m,a1,a1,a1,a1,a1,a1,A.l(a1,a1,a7?C.cC:C.cD,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,B.P,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1))}if(a4.h(0,a2)!=null){m=D.d_(a4.h(0,a2))>=0?"+":""
j=B.i.a5(D.d_(a4.h(0,a2)),2)
B.d.u(k,A.a([B.ar,A.c("1h "+m+j+"%",a1,a1,a1,a1,a1,a1,A.l(a1,a1,D.d_(a4.h(0,a2))>=0?C.dc:C.dO,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,B.P,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1)],i))}o.push(A.A(k,B.l,a1,B.e,B.h,0,a1,a1))
o.push(B.S)
o.push(A.cf(new D.fGH(t,a8)))
o.push(B.au)
m=A.c("Sellers",a1,a1,a1,a1,a1,a1,A.l(a1,a1,a7?C.cC:C.cD,a1,a1,a1,a1,a1,a1,a1,a1,10,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1)
k=B.i.a5(t,0)
k=A.c("Strength "+k+"/100",a1,a1,a1,a1,a1,a1,A.l(a1,a1,a7?C.d_:B.c,a1,a1,a1,a1,a1,a1,a1,a1,10.5,a1,a1,B.F,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1)
o.push(A.A(A.a([m,B.aY,k,B.aY,A.c("Buyers",a1,a1,a1,a1,a1,a1,A.l(a1,a1,a7?C.cC:C.cD,a1,a1,a1,a1,a1,a1,a1,a1,10,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1)],i),B.l,a1,B.e,B.h,0,a1,a1))
o.push(B.O)
m=J.z(a3.h(a9,"open"),!0)?A.cS(s,1,a1,A.U(s).c):s
m=J.HZ(m,b1?2:99)
k=m.$ti
m=new A.bQ(m,m.gJ(0),k.k("bQ<aj.E>"))
k=k.k("aj.E")
while(m.C()){j=m.d
if(j==null)j=k.a(j)
h=A.W(B.pR,u,a1,a1,a1,4.5)
g=a7?C.d_:B.c
o.push(new A.D(B.nd,new A.c1(B.aK,B.e,B.h,B.B,a1,B.p,a1,0,A.a([new A.D(B.hJ,h,a1),Q.xW,new A.bu(1,B.ba,A.c(j,a1,a1,a1,a1,a1,a1,new A.H(!0,g,a1,a1,a1,a1,12.3,a1,a1,a1,a1,a1,1.35,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1),a1)],i),a1),a1))}if(J.z(a3.h(a9,"open"),!0))B.d.u(o,A.a([B.S,D.ihP(a8,a4,a5)],i))
if(b2!=null)o.push(new A.bK(B.a9,a1,a1,A.hv(C.bXR,A.c("Ask the tutor about "+w,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1),b2,a1),a1))
return A.p(a1,A.x(o,B.B,a1,B.e,B.h,0,B.p),B.f,a1,a1,new A.o(q,a1,n,p,l,a1,B.m),a1,a1,a1,B.d7,B.bH,a1,a1,a1)},
ihP(a4,a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e="dir",d="typicalMin",a0="entry",a1=a5.h(0,"decision"),a2=J.k(a1==null?"NO_DIRECTION":a1),a3=J.z(a5.h(0,e),"up")
a1=x.g.a(a5.h(0,"notes"))
if(a1==null)a1=B.c1
a1=J.b8(a1,new D.fwU(),x.N)
w=A.B(a1,a1.$ti.k("aj.E"))
A:{if("ENTER"===a2){a1=a3?C.dc:C.dO
break A}if("SKIP_WEAK"===a2||"WAIT_LATE"===a2){a1=C.dO
break A}a1=E.jx
break A}v=a6.h(0,d)!=null&&a6.h(0,e)!=null&&!J.z(a6.h(0,e),"none")&&a2!=="NO_DIRECTION"&&a2!=="CLOSED"
u=D.d_(a6.h(0,"of"))
t=D.d_(a6.h(0,"worked"))
s=u>0
r=s?t/u:0
q=J.z(a6.h(0,e),"up")?"up":"down"
p=a4.a
o=p?C.z5:C.z6
n=A.n(16)
m=A.K(a1.j(0.55),B.r,1.5)
l=A.W(B.mv,p?C.d_:B.c,f,f,f,16)
k=x.p
l=A.A(A.a([l,B.bc,A.c("DECISION AND DURATION",f,f,f,f,f,f,A.l(f,f,p?C.d_:B.c,f,f,f,f,f,f,f,f,11.5,f,f,B.u,f,f,!0,f,1,f,f,f,f,f,f),f,f,f)],k),B.l,f,B.e,B.h,0,f,f)
j=a1.j(0.14)
i=A.n(10)
h=a5.h(0,"action")
h=A.a([A.c(J.k(h==null?"":h),f,f,f,f,f,f,A.l(f,f,a1,f,f,f,f,f,f,f,f,13,f,f,B.u,f,f,!0,f,f,f,f,f,f,f,f),f,f,f)],k)
if(w.length!==0){g=B.d.gH(w)
B.d.u(h,A.a([B.cN,A.c(g,f,f,f,f,f,f,A.l(f,f,p?C.d_:B.c,f,f,f,f,f,f,f,f,12.3,f,f,f,f,1.35,!0,f,f,f,f,f,f,f,f),f,f,f)],k))}l=A.a([l,B.O,A.p(f,A.x(h,B.B,f,B.e,B.h,0,B.p),B.f,f,f,new A.o(j,f,f,i,f,f,B.m),f,f,f,f,B.j1,f,f,1/0)],k)
if(a2==="ENTER"&&x.f.b(a5.h(0,a0)))B.d.u(l,A.a([B.O,A.A(A.a([A.E(D.hGe(a4,"Trade for",B.i.a5(D.d_(D.ex(a5.h(0,a0)).h(0,"durationMin")),0)+" min",a1),1),A.E(D.hGe(a4,"Enter at","next "+B.i.a5(D.d_(D.ex(a5.h(0,a0)).h(0,"candleMin")),0)+"-min candle",f),1)],k),B.l,f,B.e,B.h,0,f,f)],k))
if(v){a1=A.c("What this is based on",f,f,f,f,f,f,A.l(f,f,p?C.cC:C.cD,f,f,f,f,f,f,f,f,10.5,f,f,B.F,f,f,!0,f,f,f,f,f,f,f,f),f,f,f)
j=D.hlp(a4,B.fO,"This "+q+" move started "+B.i.a5(D.d_(a6.h(0,"ageMin")),0)+" min ago.",f)
i=q==="up"?"Up":"Down"
k=A.a([B.S,a1,B.au,j,D.hlp(a4,B.asx,i+" moves on this market usually end after about "+B.i.a5(D.d_(a6.h(0,d)),0)+" min.",f)],k)
if(s){a1=B.i.a5(u,0)
s=B.i.a5(t,0)
j=B.i.S(r*100)
i=r>=0.5
h=i?"Reliable enough.":"Under half: unreliable."
i=i?C.dc:C.dO
k.push(D.hlp(a4,B.pX,"Of the last "+a1+" "+q+" moves here, "+s+" really went "+q+" ("+j+"%). "+h,i))}B.d.u(l,k)}l.push(B.au)
l.push(A.c("Estimates from this market's recent moves, not promises.",f,f,f,f,f,f,A.l(f,f,p?C.cC:C.cD,f,f,f,f,f,f,f,f,10.5,f,f,f,f,f,!0,f,f,f,f,f,f,f,f),f,f,f))
return A.p(f,A.x(l,B.B,f,B.e,B.h,0,B.p),B.f,f,f,new A.o(o,f,m,n,f,f,B.m),f,f,f,f,B.bg,f,f,1/0)},
hlp(d,e,f,g){var w,v=null,u=g==null
if(u)w=d.a?C.cC:C.cD
else w=g
w=A.W(e,w,v,v,v,14)
if(u)u=d.a?C.d_:B.c
else u=g
return new A.D(B.Hy,A.A(A.a([w,B.bc,A.E(A.c(f,v,v,v,v,v,v,A.l(v,v,u,v,v,v,v,v,v,v,v,12,v,v,v,v,1.35,!0,v,v,v,v,v,v,v,v),v,v,v),1)],x.p),B.B,v,B.e,B.h,0,v,v),v)},
hGe(d,e,f,g){var w=null,v=d.a,u=A.c(e,w,w,w,w,w,w,A.l(w,w,v?C.cC:C.cD,w,w,w,w,w,w,w,w,10.5,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)
if(g==null)v=v?C.d_:B.c
else v=g
return A.x(A.a([u,A.c(f,w,w,w,w,w,w,A.l(w,w,v,w,w,w,w,w,w,w,w,13.5,w,w,B.F,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),B.B,w,B.e,B.h,0,B.p)},
hIY(d){var w=J.a2(d),v=D.d_(w.h(d,"price"))
if(!J.z(w.h(d,"kind"),"forex"))return D.eT(v,!0,!1)
return B.i.a5(v,v>=100?3:5)},
hA5(d,e){return new D.XH(d,e,null)},
hEw(){var w=Math.max(0,$.aM1-1)
$.aM1=w
if(w===0){B.d.a6($.DB)
$.ahc=!1
$.hkK=""
$.fo1=$.fo1+1}},
eI7(d){var w
x.g.a(d)
w=d==null?B.c1:d
w=J.cV(w,x.f)
w=A.cE(w,new D.eI8(),w.$ti.k("M.E"),x.P)
w=A.B(w,A.a3(w).k("M.E"))
return w},
hE0(d){var w=J.t(d,"kind")
switch(J.k(w==null?"":w)){case"forex":w="Forex"
break
case"crypto":w="Crypto"
break
default:w="Stocks"
break}return w},
atV:function atV(d){this.a=d},
aHo:function aHo(d,e){var _=this
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
eHb:function eHb(d){this.a=d},
eGN:function eGN(d,e){this.a=d
this.b=e},
eGE:function eGE(d,e){this.a=d
this.b=e},
eGM:function eGM(d,e){this.a=d
this.b=e},
eGP:function eGP(d,e){this.a=d
this.b=e},
eGC:function eGC(){},
eGD:function eGD(d,e,f){this.a=d
this.b=e
this.c=f},
eGX:function eGX(){},
eGV:function eGV(d){this.a=d},
eGW:function eGW(d){this.a=d},
eGY:function eGY(d){this.a=d},
eGZ:function eGZ(d){this.a=d},
eGL:function eGL(d){this.a=d},
eGR:function eGR(d){this.a=d},
eGS:function eGS(d,e){this.a=d
this.b=e},
eGT:function eGT(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eGQ:function eGQ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eGU:function eGU(){},
eHa:function eHa(d){this.a=d},
eH5:function eH5(d){this.a=d},
eH6:function eH6(d){this.a=d},
eGr:function eGr(d){this.a=d},
eGs:function eGs(d){this.a=d},
eGt:function eGt(d){this.a=d},
eGu:function eGu(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eGp:function eGp(d){this.a=d},
eGq:function eGq(d,e){this.a=d
this.b=e},
eGv:function eGv(d){this.a=d},
eGw:function eGw(d){this.a=d},
eH3:function eH3(){},
eH4:function eH4(){},
eH0:function eH0(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eH_:function eH_(d){this.a=d},
eH2:function eH2(d,e){this.a=d
this.b=e},
eH1:function eH1(d){this.a=d},
eGG:function eGG(){},
eGH:function eGH(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eGI:function eGI(d){this.a=d},
eGK:function eGK(){},
eGJ:function eGJ(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
eGF:function eGF(d,e){this.a=d
this.b=e},
eGz:function eGz(d,e){this.a=d
this.b=e},
eGy:function eGy(d,e){this.a=d
this.b=e},
eGA:function eGA(d){this.a=d},
eGx:function eGx(d){this.a=d},
eGn:function eGn(d){this.a=d},
eGo:function eGo(){},
eGO:function eGO(d,e){this.a=d
this.b=e},
eGB:function eGB(d,e){this.a=d
this.b=e},
eGm:function eGm(d){this.a=d},
eH8:function eH8(){},
eH9:function eH9(d){this.a=d},
eH7:function eH7(d){this.a=d},
eGl:function eGl(d){this.a=d},
eGk:function eGk(d){this.a=d},
adK:function adK(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
bep:function bep(){this.c=this.a=this.d=null},
cWZ:function cWZ(d,e){this.a=d
this.b=e},
cX7:function cX7(d){this.a=d},
cX5:function cX5(d,e){this.a=d
this.b=e},
cX3:function cX3(d,e){this.a=d
this.b=e},
cX4:function cX4(d,e){this.a=d
this.b=e},
cX2:function cX2(d){this.a=d},
cX1:function cX1(d){this.a=d},
cX6:function cX6(d){this.a=d},
cX0:function cX0(d){this.a=d},
cX_:function cX_(d){this.a=d},
beq:function beq(d,e,f,g,h,i,j,k){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.w=j
_.a=k},
cX8:function cX8(d){this.a=d},
cXa:function cXa(d,e){this.a=d
this.b=e},
cX9:function cX9(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
bwl:function bwl(d,e,f){this.b=d
this.c=e
this.a=f},
fhv:function fhv(){},
z3:function z3(d,e,f){this.a=d
this.b=e
this.c=f},
fw4:function fw4(d){this.a=d},
fBu:function fBu(){},
Rm:function Rm(d){this.a=d},
fFP:function fFP(){},
fCA:function fCA(){},
fJS:function fJS(){},
WU:function WU(d,e){this.c=d
this.a=e},
aGl:function aGl(d){var _=this
_.d=null
_.e=d
_.f=!0
_.r=!1
_.y=_.x=_.w=null
_.Q=_.z=!1
_.c=_.a=null},
e7z:function e7z(d){this.a=d},
e7A:function e7A(d){this.a=d},
e7y:function e7y(){},
e7o:function e7o(d,e,f){this.a=d
this.b=e
this.c=f},
e7n:function e7n(){},
e7q:function e7q(d){this.a=d},
e7r:function e7r(d,e){this.a=d
this.b=e},
e7w:function e7w(d){this.a=d},
e7x:function e7x(d){this.a=d},
e7m:function e7m(d,e){this.a=d
this.b=e},
e7s:function e7s(d){this.a=d},
e7u:function e7u(){},
e7v:function e7v(d){this.a=d},
e7t:function e7t(d){this.a=d},
e7l:function e7l(d){this.a=d},
e7k:function e7k(d){this.a=d},
e7p:function e7p(){},
fGG:function fGG(){},
fGH:function fGH(d,e){this.a=d
this.b=e},
aCz:function aCz(d,e){this.c=d
this.a=e},
bhW:function bhW(){this.c=this.a=this.d=null},
dii:function dii(d){this.a=d},
dih:function dih(){},
fwU:function fwU(){},
cD:function cD(d,e,f,g){var _=this
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
XH:function XH(d,e,f){this.c=d
this.d=e
this.a=f},
a_C:function a_C(d,e){this.a=d
this.b=e},
aHq:function aHq(d,e,f,g,h,i,j,k,l,m){var _=this
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
eHl:function eHl(){},
eId:function eId(d){this.a=d},
eIc:function eIc(){},
eIe:function eIe(d){this.a=d},
eIf:function eIf(d){this.a=d},
eIb:function eIb(d,e){this.a=d
this.b=e},
eIg:function eIg(d){this.a=d},
eI8:function eI8(){},
eHG:function eHG(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eHR:function eHR(d){this.a=d},
eHo:function eHo(d){this.a=d},
eHp:function eHp(d,e){this.a=d
this.b=e},
eHq:function eHq(d){this.a=d},
eHr:function eHr(d){this.a=d},
eHn:function eHn(d,e){this.a=d
this.b=e},
eHm:function eHm(d,e){this.a=d
this.b=e},
eHQ:function eHQ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eHP:function eHP(){},
eHH:function eHH(){},
eHI:function eHI(){},
eI5:function eI5(){},
eI6:function eI6(){},
eHu:function eHu(d){this.a=d},
eHv:function eHv(){},
eHw:function eHw(){},
eHh:function eHh(d,e){this.a=d
this.b=e},
eHi:function eHi(){},
eHj:function eHj(){},
eHk:function eHk(){},
eHS:function eHS(d){this.a=d},
eI9:function eI9(d){this.a=d},
eIa:function eIa(d,e){this.a=d
this.b=e},
eHt:function eHt(d){this.a=d},
eHs:function eHs(d,e){this.a=d
this.b=e},
eHO:function eHO(d,e){this.a=d
this.b=e},
eHK:function eHK(d,e){this.a=d
this.b=e},
eHL:function eHL(d,e){this.a=d
this.b=e},
eHJ:function eHJ(d,e,f){this.a=d
this.b=e
this.c=f},
eHM:function eHM(d,e){this.a=d
this.b=e},
eHN:function eHN(d){this.a=d},
eHx:function eHx(d,e,f){this.a=d
this.b=e
this.c=f},
eHF:function eHF(d){this.a=d},
eHy:function eHy(){},
eHz:function eHz(){},
eHA:function eHA(){},
eHB:function eHB(){},
eHC:function eHC(){},
eHD:function eHD(){},
eHE:function eHE(){},
eHW:function eHW(d,e){this.a=d
this.b=e},
eHX:function eHX(d){this.a=d},
eI4:function eI4(){},
eHY:function eHY(d){this.a=d},
eHZ:function eHZ(d){this.a=d},
eI0:function eI0(d,e){this.a=d
this.b=e},
eHV:function eHV(d,e){this.a=d
this.b=e},
eI_:function eI_(d){this.a=d},
eI1:function eI1(d){this.a=d},
eHU:function eHU(d){this.a=d},
eI2:function eI2(d){this.a=d},
eHT:function eHT(d,e){this.a=d
this.b=e},
eI3:function eI3(d,e){this.a=d
this.b=e},
eHd:function eHd(d){this.a=d},
eHe:function eHe(d,e){this.a=d
this.b=e},
eHc:function eHc(d,e){this.a=d
this.b=e},
eHf:function eHf(d,e){this.a=d
this.b=e},
eHg:function eHg(d){this.a=d},
a0D:function a0D(d,e,f,g,h,i,j,k,l,m){var _=this
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
bl6:function bl6(d){var _=this
_.x=_.w=_.r=_.f=_.e=_.d=$
_.y=d
_.c=_.a=_.z=null},
duS:function duS(){},
duT:function duT(){},
duQ:function duQ(){},
duR:function duR(){},
duO:function duO(d){this.a=d},
duP:function duP(d){this.a=d},
duN:function duN(d){this.a=d},
duG:function duG(){},
duH:function duH(){},
duI:function duI(d){this.a=d},
duJ:function duJ(d){this.a=d},
duE:function duE(d,e,f){this.a=d
this.b=e
this.c=f},
duK:function duK(d){this.a=d},
duL:function duL(d,e){this.a=d
this.b=e},
duM:function duM(d,e){this.a=d
this.b=e},
duF:function duF(d,e,f){this.a=d
this.b=e
this.c=f},
aPn:function aPn(){}},C,H,O,Y,Z,A_
J=c[1]
A=c[0]
B=c[2]
P=c[149]
E=c[310]
Q=c[176]
G=c[288]
R=c[218]
I=c[309]
S=c[110]
K=c[55]
L=c[311]
M=c[292]
T=c[187]
U=c[312]
F=c[280]
V=c[291]
W=c[175]
X=c[270]
N=c[129]
D=a.updateHolder(c[20],D)
C=c[308]
H=c[178]
O=c[313]
Y=c[150]
Z=c[231]
A_=c[157]
D.atV.prototype={
R(){return new D.aHo(A.a([],x.t),A.mj(0,null,null))}}
D.aHo.prototype={
a_(){var w=this
w.a3()
$.aM1=$.aM1+1
w.a.toString
w.aet()
w.yQ(!0)
w.ch=A.cZ(B.nV,new D.eHb(w))},
t(){var w=this.ch
if(w!=null)w.a1(0)
this.as.t()
D.hEw()
this.a2()},
crb(d){var w=this
if(!w.at&&d>0){w.at=!0
$.aU.U$.push(new D.eGN(w,d))}return w.as},
aet(){var w=0,v=A.j(x.H),u=1,t=[],s=this,r,q,p,o
var $async$aet=A.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:u=3
w=6
return A.b(A.aB(),$async$aet)
case 6:r=e
q=A.aW(J.t(r.a,"ngmy_signal_grid_market"))
if(q!=null&&q.length!==0&&s.c!=null&&s.Q==null)s.l(new D.eGE(s,q))
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
return A.i($async$aet,v)},
a22(d){return this.cqI(d)},
cqI(d){var w=0,v=A.j(x.H),u=1,t=[],s=this,r,q,p
var $async$a22=A.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:s.l(new D.eGM(s,d))
u=3
w=6
return A.b(A.aB(),$async$a22)
case 6:r=f
w=7
return A.b(r.aD("String","ngmy_signal_grid_market",d),$async$a22)
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
return A.i($async$a22,v)},
yQ(d){return this.cw1(d)},
wp(){return this.yQ(!1)},
cw1(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$yQ=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(A.fP(A.J(["action","paStatus","live",d],x.N,x.z),!1,!1,!1,!1,B.wV),$async$yQ)
case 3:s=f
if(t.c==null){w=1
break}t.l(new D.eGP(t,s))
w=t.d!=null?4:5
break
case 4:w=6
return A.b(t.c77(),$async$yQ)
case 6:case 5:case 1:return A.h(u,v)}})
return A.i($async$yQ,v)},
a_3(d){return this.c78(d)},
c77(){return this.a_3(!1)},
c78(d){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$a_3=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(A.fP(A.J(["action","paLog","limit",100,"beforeId",d&&t.e.length!==0?J.t(B.d.gal(t.e),"id"):0],x.N,x.z),!1,!1,!1,!1,B.hb),$async$a_3)
case 3:q=f
if(t.c==null||q==null||!J.z(J.t(q,"ok"),!0)){w=1
break}s=x.g.a(J.t(q,"rows"))
if(s==null)s=B.c1
s=J.cV(s,x.f)
s=A.cE(s,new D.eGC(),s.$ti.k("M.E"),x.P)
r=A.B(s,A.a3(s).k("M.E"))
t.l(new D.eGD(t,d,r))
case 1:return A.h(u,v)}})
return A.i($async$a_3,v)},
wL(d){return this.cAY(d)},
cAY(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$wL=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:q=t.d
p=D.ex(q==null?null:J.t(q,"state"))
w=d&&J.z(p.h(0,"brakePaused"),!0)?3:4
break
case 3:q=t.c
q.toString
w=5
return A.b(A.ce(null,null,!0,null,new D.eGX(),q,null,!0,!0,x.y),$async$wL)
case 5:if(f!==!0){w=1
break}case 4:t.l(new D.eGY(t))
w=6
return A.b(A.fP(A.J(["action","paSet","enabled",d],x.N,x.z),!1,!1,!1,!1,B.hb),$async$wL)
case 6:s=f
if(t.c==null){w=1
break}t.l(new D.eGZ(t))
q=s==null
if(J.z(q?null:J.t(s,"ok"),!0))r=d?"Agent started.":"Agent stopped."
else{r=q?null:J.t(s,"error")
r=J.k(r==null?"Could not change it.":r)}t.b3f(r,J.z(q?null:J.t(s,"ok"),!0)?C.dc:C.dO)
w=7
return A.b(t.wp(),$async$wL)
case 7:case 1:return A.h(u,v)}})
return A.i($async$wL,v)},
clD(){var w=this.c
w.toString
A.a8(w,!1).cb(A.ea(new D.eGL(this),!1,null,x.H))},
a3k(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$a3k=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t.l(new D.eGR(t))
w=3
return A.b(A.fP(A.J(["action","paCheck"],x.N,x.z),!1,!1,!1,!1,B.nV),$async$a3k)
case 3:s=e
if(t.c==null){w=1
break}t.l(new D.eGS(t,s))
r=s==null
if(!J.z(r?null:J.t(s,"ok"),!0)){r=r?null:J.t(s,"error")
t.b3f(J.k(r==null?"The check did not finish.":r),C.dO)
w=1
break}r=t.c
r.toString
r=A.Q(r).ax.a===B.dg
s.toString
q=D.ex(D.ex(J.t(s,"state")).h(0,"snapshot"))
p=t.c
p.toString
o=r?C.t2:C.t0
w=4
return A.b(A.bU(o,null,new D.eGT(t,new D.Rm(r),q,s),p,!0,!0,!0,B.aUd,!1,!1,x.H),$async$a3k)
case 4:case 1:return A.h(u,v)}})
return A.i($async$a3k,v)},
cz7(d,e,f,g){var w,v,u,t,s,r=null,q=D.fBt(e)
B.d.b_(q,new D.eGU())
w=d.a
v=w?C.pE:C.pD
v=A.at(A.p(r,r,B.f,r,r,new A.o(v,r,r,A.n(9),r,r,B.m),r,4,r,r,r,r,r,40),r,r,r)
u=A.c("What the agent sees right now",r,r,r,r,r,r,A.l(r,r,w?C.d_:B.c,r,r,r,r,r,r,r,r,19,r,r,B.u,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
t=J.z(f.h(0,"enabled"),!0)?" (next one "+D.hI3()+")":" (the agent is stopped, so none will be made)"
v=A.a([v,B.aA,u,B.au,A.c("Check now only looks. It never buys or sells. Pretend trades are made only by the automatic check every 5 minutes"+t+".",r,r,r,r,r,r,A.l(r,r,w?C.cC:C.cD,r,r,r,r,r,r,r,r,12.5,r,r,r,r,1.35,!0,r,r,r,r,r,r,r,r),r,r,r),B.af],x.p)
for(w=q.length,s=0;s<q.length;q.length===w||(0,A.I)(q),++s)v.push(D.hJ3(d,q[s],r,!0,r))
return A.cn(v,g,r,C.bHe,r,r,B.ah,!1)},
b3f(d,e){var w=null
this.c.K(x.q).f.T(A.b3(w,w,w,e,w,B.t,w,A.c(d,w,w,w,w,w,w,w,w,w,w),w,B.Y,w,w,w,w,w,w,w,w,w,w))},
B(d){var w,v=this,u=null,t=A.Q(d).ax.a===B.dg,s=new D.Rm(t),r=t?C.t2:C.t0,q=t?C.t2:C.t0
q=A.a([q,t?C.O_:C.NT],x.O)
w=v.cgj(s)
if(v.f)t=B.lq
else{if(v.d==null){t=v.ay
t=A.a([v.aaF(s,t==null?"Nothing to show yet.":t,B.b2)],x.p)}else t=v.bIm(0,s)
t=A.Kk(A.cn(t,u,u,C.ao8,u,u,B.ah,!1),u,new D.eHa(v))}return A.c5(u,r,A.p(u,A.bo(!0,A.x(A.a([w,A.E(t,1)],x.p),B.l,u,B.e,B.h,0,B.p),!0,!1,B.ag,!0,!0),B.f,u,u,new A.o(u,u,u,u,u,new A.a7(B.aW,B.b0,B.x,q,u,u),B.m),u,u,u,u,u,u,u,u),u,!1,!1,u,u)},
cgj(d){var w,v,u,t,s,r=this,q=null,p=r.d,o=D.ex(p==null?q:J.t(p,"state")),n=J.z(o.h(0,"brakePaused"),!0),m=J.z(o.h(0,"enabled"),!0)&&!n
p=r.b3d(d,B.eB,new D.eH5(r))
w=d.a
v=x.p
u=A.a([A.c("Signal Grid",q,1,B.a2,q,q,q,A.l(q,q,w?C.d_:B.c,q,q,q,q,q,q,q,q,17,q,q,B.F,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],v)
if(r.d==null)u.push(A.c("Paper trading agent",q,1,B.a2,q,q,q,A.l(q,q,w?C.cC:C.cD,q,q,q,q,q,q,q,q,11.5,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q))
else{if(n)t=C.dO
else if(m)t=C.dc
else t=w?C.cC:C.cD
t=A.W(B.pR,t,q,q,q,7)
if(n)s="Paused"
else s=m?"Running":"Stopped"
if(n)w=C.dO
else if(m)w=C.dc
else w=w?C.cC:C.cD
u.push(A.A(A.a([t,B.d8,new A.d0(1,B.ce,A.c(s,q,1,B.a2,q,q,q,A.l(q,q,w,q,q,q,q,q,q,q,q,11.5,q,q,B.F,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),q)],v),B.l,q,B.e,B.M,0,q,q))}w=A.a([new A.d0(1,B.ce,A.x(u,B.B,q,B.e,B.h,0,B.p),q)],v)
if(r.d!=null)B.d.u(w,A.a([B.ar,r.bbz(d,"options","Options",B.fE,B.aC),B.aa,r.bbz(d,"scalper","Scalper",B.rf,B.at)],v))
w=A.E(A.A(w,B.l,q,B.e,B.h,0,q,q),1)
return new A.D(B.hc,A.A(A.a([p,B.ar,w,B.aa,r.b3d(d,B.ni,r.r?q:new D.eH6(r))],v),B.l,q,B.e,B.h,0,q,q),q)},
bIm(c3,c4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8=this,b9=null,c0="asset",c1="liveError",c2=b8.d
c2.toString
w=J.a2(c2)
v=D.ex(w.h(c2,"state"))
u=D.ex(w.h(c2,"config"))
t=D.ex(v.h(0,"snapshot"))
s=x.f.b(v.h(0,"shadow"))?D.ex(v.h(0,"shadow")):b9
r=D.fBt(t)
q=A.U(r).k("X<1>")
p=A.B(new A.X(r,new D.eGr(s),q),q.k("M.E"))
o=p.length===0?r:p
n=b8.Q!=null&&B.d.aR(o,new D.eGs(b8))?b8.Q:b9
if(n==null){q=s==null?b9:s.h(0,"symbol")
if(q==null)q=t.h(0,c0)
m=q==null?b9:J.k(q)}else m=n
l=B.d.dz(o,new D.eGt(m),new D.eGu(r,m,o,t))
q=s==null
k=q?b9:B.d.dz(r,new D.eGv(s),new D.eGw(l))
q=!q
j=q&&J.z(s.h(0,"symbol"),J.t(l,c0))?s:b9
i=b8.c8A(c4,c2,o,l,s)
h=D.ex(w.h(c2,"market"))
g=J.a2(l)
f=g.h(l,c0)
e=J.k(f==null?"SPY":f)
d=B.a.q(e,"/")
a0=D.bF5(l)
a1=D.d_(g.h(l,"price"))
a2=a0.length!==0?D.d_(J.t(B.d.gH(a0),"c")):0
a3=a2===0?0:(a1-a2)/a2*100
a4=a3>=0
if(d)a5=!0
else{f=g.h(l,"open")
if(f==null)f=h.h(0,"stockOpen")
a5=f==null?h.h(0,"open"):f}if(d)a6="Crypto \xb7 the agent trades it on Saturday and Sunday only"
else{f=J.kS(a5)
if(f.A(a5,!0))a6="Stock market open \xb7 the agent trades it on weekdays \xb7 closes 4:00 PM ET"
else{f=f.A(a5,!1)?"Stock market closed"+b8.cMv(h.h(0,"nextOpen")):""
a6=f}}a7=D.fBb(e)
f=c4.a
a8=f?B.c.j(0.92):C.je
a9=A.n(22)
b0=A.K(f?B.c:C.oJ,B.r,1)
b1=A.a([new A.aa(0,B.H,c4.gO8(),B.cw,12)],x.V)
b2=D.hl9(e,30)
b3=d?e:e+"/USD"
b3=A.c(b3,b9,b9,b9,b9,b9,b9,A.l(b9,b9,f?C.d_:B.c,b9,b9,b9,b9,b9,b9,b9,b9,17,b9,b9,B.F,b9,b9,!0,b9,b9,b9,b9,b9,b9,b9,b9),b9,b9,b9)
g=g.h(l,"name")
g=J.k(g==null?a7.a:g)
b4=x.p
g=A.A(A.a([b2,B.ar,b3,B.bc,new A.d0(1,B.ce,A.c(g,b9,b9,B.a2,b9,b9,b9,A.l(b9,b9,f?C.cC:C.cD,b9,b9,b9,b9,b9,b9,b9,b9,13,b9,b9,b9,b9,b9,!0,b9,b9,b9,b9,b9,b9,b9,b9),b9,b9,b9),b9)],b4),B.l,b9,B.e,B.h,0,b9,b9)
b2=a1===0?"\u2014":D.eT(a1,!1,!1)
b2=A.a([A.E(new A.di(B.dr,B.a5,B.f,A.c(b2,b9,b9,b9,b9,b9,b9,A.l(b9,b9,f?C.d_:B.c,b9,b9,b9,b9,b9,b9,b9,I.Ji,34,b9,b9,B.P,b9,b9,!0,b9,-1,b9,b9,b9,b9,b9,b9),b9,b9,b9),b9),1)],b4)
if(a0.length>1){b3=(a4?C.dc:C.dO).j(0.14)
b5=A.n(10)
b6=a4?C.arl:B.Qh
b6=A.W(b6,a4?C.dc:C.dO,b9,b9,b9,20)
b7=B.i.a5(Math.abs(a3),2)
b2.push(A.p(b9,A.A(A.a([b6,A.c(b7+"%",b9,b9,b9,b9,b9,b9,A.l(b9,b9,a4?C.dc:C.dO,b9,b9,b9,b9,b9,b9,b9,b9,13,b9,b9,B.F,b9,b9,!0,b9,b9,b9,b9,b9,b9,b9,b9),b9,b9,b9)],b4),B.l,b9,B.e,B.M,0,b9,b9),B.f,b9,b9,new A.o(b3,b9,b9,b5,b9,b9,B.m),b9,b9,b9,b9,B.fN,b9,b9,b9))}g=A.a([g,B.O,A.A(b2,B.l,b9,B.e,B.h,0,b9,b9)],b4)
if(a6.length!==0){if(J.z(a5,!0))b2=C.dc
else b2=f?C.cC:C.cD
b2=A.W(B.pR,b2,b9,b9,b9,7)
b3=a0.length>1?"  \xb7  change over 4H":""
B.d.u(g,A.a([B.au,A.A(A.a([b2,B.bc,new A.d0(1,B.ce,A.c(a6+b3,b9,b9,B.a2,b9,b9,b9,A.l(b9,b9,f?C.cC:C.cD,b9,b9,b9,b9,b9,b9,b9,b9,12,b9,b9,b9,b9,b9,!0,b9,b9,b9,b9,b9,b9,b9,b9),b9,b9,b9),b9)],b4),B.l,b9,B.e,B.h,0,b9,b9)],b4))}i=A.a([i,A.p(b9,A.x(g,B.B,b9,B.e,B.h,0,B.p),B.f,b9,b9,new A.o(a8,b9,b0,a9,b1,b9,B.m),b9,b9,b9,B.dU,B.eX,b9,b9,b9)],b4)
g=u.h(0,"problem")
if(J.k(g==null?"":g).length!==0)i.push(b8.aaF(c4,J.k(u.h(0,"problem")),E.jx))
g=w.h(c2,c1)
if(J.k(g==null?"":g).length!==0)i.push(b8.aaF(c4,J.k(w.h(c2,c1)),C.dO))
if(J.z(v.h(0,"brakePaused"),!0)){g=v.h(0,"brakeReason")
i.push(b8.aaF(c4,"Paused by the $100 brake. "+A.v(g==null?"":g)+y.c,C.dO))}i.push(b8.bLl(c4,l,j))
i.push(b8.bI_(c4,c2,v,t))
if(q){k.toString
i.push(b8.crD(c4,s,k,D.ex(w.h(c2,"ticket")),D.ex(t.h(0,"held"))))}i.push(b8.aAB(c4,v))
i.push(b8.bHP(c4,v,c2))
i.push(b8.cJv(c4,c2))
i.push(b8.bEY(c4))
i.push(b8.cy2(c4,c2))
c2=f?B.c.j(0.92):C.je
w=A.n(16)
q=A.K(f?B.c:C.oJ,B.r,1)
g=A.W(B.ko,C.dc,b9,b9,b9,18)
a8=J.z(u.h(0,"ordersSwitchOn"),!0)?"on":"off"
i.push(A.p(b9,A.A(A.a([g,B.aa,A.E(A.c("Paper money only: no order is ever sent to Alpaca. Order switch: "+a8+".",b9,b9,b9,b9,b9,b9,A.l(b9,b9,f?C.cC:C.cD,b9,b9,b9,b9,b9,b9,b9,b9,11.5,b9,b9,b9,b9,1.3,!0,b9,b9,b9,b9,b9,b9,b9,b9),b9,b9,b9),1)],b4),B.l,b9,B.e,B.h,0,b9,b9),B.f,b9,b9,new A.o(c2,b9,q,w,b9,b9,B.m),b9,b9,b9,H.anf,B.ep,b9,b9,b9))
return i},
cIv(d,e,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null,h=D.ex(J.t(e,"market")),g=x.g,f=g.a(h.h(0,"activeMarkets"))
if(f==null)f=B.c1
w=x.N
f=J.b8(f,new D.eH3(),w)
v=A.B(f,f.$ti.k("aj.E"))
g=g.a(h.h(0,"todaysList"))
if(g==null)g=B.c1
w=J.b8(g,new D.eH4(),w)
u=A.B(w,w.$ti.k("aj.E"))
t=J.z(h.h(0,"weekend"),!0)
if(a0==null)s=i
else{g=a0.h(0,"symbol")
s=g==null?i:J.k(g)}r=s!=null&&u.length!==0&&!B.d.q(u,s)
if(v.length!==0){q=t?"TRADING TODAY: 4 COINS":"TRADING TODAY: 10 STOCKS"
g=B.d.aL(v,", ")
f=t?5:4
p=g+". All of them are checked at the same time, every 5 minutes, and the agent buys the first one that gives a valid entry. One trade at a time, up to "+f+" trades today in total."}else{if(t)p="The 4 coins (BTC, ETH, SOL, DOGE) are traded on Saturday and Sunday."
else p="The 10 stocks ("+(u.length===0?"SPY, QQQ, AAPL and more":B.d.aL(u,", "))+") are traded while the stock market is open, 9:30 AM to 4:00 PM ET. Coins on weekends."
q="NO MARKET TRADED RIGHT NOW"}g=(v.length===0?i:B.d.gH(v))==null
o=g?E.jx:C.dc
f=d.a
w=f?B.c.j(0.92):C.je
n=A.n(22)
m=A.K(o.j(0.55),B.r,1)
l=A.W(!g?B.IC:B.vi,o,i,i,i,26)
k=A.c(q,i,i,i,i,i,i,A.l(i,i,o,i,i,i,i,i,i,i,i,13.5,i,i,B.u,i,i,!0,i,0.3,i,i,i,i,i,i),i,i,i)
g=A.c(p,i,i,i,i,i,i,A.l(i,i,f?C.d_:B.c,i,i,i,i,i,i,i,i,12,i,i,i,i,1.3,!0,i,i,i,i,i,i,i,i),i,i,i)
j=x.p
g=A.a([k,B.cN,g,B.cN,A.c("Buys only when the fast line crosses up AND the big trend is rising (slow line higher than 1 hour ago, price above it).",i,i,i,i,i,i,A.l(i,i,f?C.cC:C.cD,i,i,i,i,i,i,i,i,11,i,i,i,i,1.3,!0,i,i,i,i,i,i,i,i),i,i,i)],j)
if(r)B.d.u(g,A.a([B.au,A.c("Still holding the "+s+" pretend trade from before: the agent keeps checking its exits every 5 minutes.",i,i,i,i,i,i,C.fHf,i,i,i)],j))
return A.p(i,A.A(A.a([l,B.ar,A.E(A.x(g,B.B,i,B.e,B.h,0,B.p),1)],j),B.B,i,B.e,B.h,0,i,i),B.f,i,i,new A.o(w,i,m,n,i,i,B.m),i,i,i,i,B.bQ,i,i,i)},
cDn(d,e,f){var w=null,v=this.c
v.toString
A.ce(w,w,!0,w,new D.eH0(this,d,e,f),v,w,!0,!0,x.H)},
bbz(d,e,f,g,h){var w,v,u,t,s,r,q,p,o=null,n=x.N,m=A.S(n,x.P),l=this.d
l=x.g.a(D.ex(l==null?o:J.t(l,"fast")).h(0,"systems"))
if(l==null)l=B.c1
l=J.cV(l,x.f)
w=J.aR(l.a)
l=l.$ti
v=new A.kv(w,l.k("kv<1>"))
u=x.z
l=l.c
while(v.C()){t=l.a(w.gP(w))
s=A.v(J.t(t,"id"))
t=A.a1(t,n,u)
m.n(0,s,t)}r=m.h(0,e)
if(r==null)r=B.cF
q=J.z(r.h(0,"enabled"),!0)
p=r.h(0,"holding")!=null
if(p)n=" \xb7 holding "+A.v(r.h(0,"holding"))
else n=q?" \xb7 running":" \xb7 stopped"
m=A.n(11)
l=A.n(11)
l=A.a([A.p(o,A.W(g,B.c,o,o,o,20),B.f,o,o,new A.o(h,o,o,l,o,o,B.m),o,34,o,o,o,o,o,34)],x.p)
if(q||p){w=p?F.t6:C.dc
l.push(A.ao(o,A.p(o,o,B.f,o,o,new A.o(w,o,A.K(d.a?C.t2:C.t0,B.r,2),o,o,o,B.a6),o,11,o,o,o,o,o,11),o,o,o,-2,-2,o))}return A.h9(A.dA(o,!0,o,A.aM(!1,m,!0,new A.a6(34,34,new A.an(B.a0,o,B.ad,B.f,l,o),o),o,!0,o,o,o,o,o,o,o,o,o,o,o,new D.eH2(this,e),o,o,o,o,o,o,o),!1,o,o,o,o,!1,o,!1,o,o,o,o,o,o,o,o,o,o,f,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,B.c9,o),o,f+n,o,o,o)},
cJP(d){var w,v,u,t,s,r,q,p,o=null,n=J.a2(d)
if(J.z(n.h(d,"open"),!0)){w=D.ex(n.h(d,"chart")).h(0,"trend")
n=w==null?n.h(d,"trend"):w
v=J.k(n==null?"unknown":n)}else v="waiting"
switch(v){case"up":n=C.fcc
break
case"down":n=C.fcN
break
default:n=C.ffm
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
return A.dA(o,o,o,A.p(o,A.A(A.a([A.W(t,p,o,o,o,12),B.uj,A.c(s,o,o,o,o,o,o,A.l(o,o,p,o,o,o,o,o,o,o,o,9,o,o,B.F,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],x.p),B.l,o,B.e,B.M,0,o,o),B.f,o,o,new A.o(n,o,o,w,o,o,B.m),o,o,o,o,Z.aoX,o,o,o),!1,o,o,o,o,!1,o,!1,o,o,o,o,o,o,o,o,o,o,"trend "+A.v(s),o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,B.c9,o)},
c8A(d,e,f,g,h){var w,v,u,t,s,r,q=this,p=null
if(f.length<2)return B.bL
w=new A.X(f,new D.eGG(),A.U(f).k("X<1>")).gJ(0)
v=d.a
u=A.c("Today's watchlist",p,p,p,p,p,p,A.l(p,p,v?C.d_:B.c,p,p,p,p,p,p,p,p,14,p,p,B.F,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)
t=w===0
s=t?"NONE TRADED NOW":""+w+" WATCHED NOW"
s=q.b3c(s,t?E.jx:C.dc)
r=A.hg0(!1,p,!0,new A.D(B.eA,A.W(B.kM,t?E.jx:C.dc,p,p,p,19),p),!1,p,!0,!1,p,p,p,B.a6,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new D.eGH(q,d,e,h),p,p,p,p,20,p,p,p)
t=x.p
return new A.D(B.eH,A.x(A.a([new A.D(C.bKu,A.A(A.a([u,B.aa,s,B.d8,r,B.aY,A.c("tap one",p,p,p,p,p,p,A.l(p,p,v?C.cC:C.cD,p,p,p,p,p,p,p,p,11,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)],t),B.l,p,B.e,B.h,0,p,p),p),new A.a6(p,66,A.hV(B.f,q.crb(B.d.bl(f,new D.eGI(g))),new D.eGJ(q,f,g,h,d),f.length,p,p,B.aK,new D.eGK(),!1),p),B.au],t),B.B,p,B.e,B.h,0,B.p),p)},
bLl(d,e,f){var w,v,u,t,s,r,q=this,p=null,o=D.bF5(e),n=o.length
if(n<2)return q.agE(d,new A.a6(p,120,A.at(A.c("The chart appears after the first reading.",p,p,p,p,p,p,A.l(p,p,d.a?C.cC:C.cD,p,p,p,p,p,p,p,p,p,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p),p))
w=B.d.fE(o,Math.max(0,n-q.z))
v=f==null||x.f.b(f.h(0,"option"))?p:D.d_(f.h(0,"entryPrice"))
n=x.p
u=A.a([],n)
for(t=0;t<3;++t){s=C.co8[t]
if(s<=12)r="1H"
else r=s<=24?"2H":"4H"
B.d.u(u,A.a([q.cA5(d,r,q.z===s,new D.eGz(q,s)),B.bc],n))}u.push(B.aY)
u.push(q.cJQ(e))
u.push(B.bc)
u.push(q.b8P(d,"Trend lines",q.ax,new D.eGA(q),M.xq))
u=A.a([A.A(u,B.l,p,B.e,B.h,0,p,p),B.S,new D.adK(w,d,v,q.ax,D.d_(J.t(e,"price")),p)],n)
if(q.ax){r=A.a([q.ayp(d,B.bB,"Fast line (45 min)"),q.ayp(d,B.b2,"Slow line (1 h 45 min)")],n)
if(v!=null)r.push(q.ayp(d,F.t6,"Your pretend buy"))
B.d.u(u,A.a([B.O,A.bZ(B.fV,r,B.br,p,4,14)],n))}return q.aAA(d,A.x(u,B.l,p,B.e,B.h,0,B.p),B.wZ)},
cJQ(d){var w,v,u,t,s,r,q=null,p=D.ex(J.t(d,"chart")).h(0,"trend")
switch(J.k(p==null?"unknown":p)){case"up":p=C.fe8
break
case"down":p=C.fef
break
case"flat":p=C.fcF
break
default:p=C.fdx
break}w=p.a
v=q
u=q
t=p.b
s=p.c
u=s
v=t
r=w
p=A.n(10)
return A.h9(A.dA(q,q,q,A.p(q,A.W(v,B.c,q,q,q,20),B.f,q,q,new A.o(r,q,q,p,q,q,B.m),q,32,q,q,q,q,q,32),!1,q,q,q,q,!1,q,!1,q,q,q,q,q,q,q,q,q,q,u,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,B.c9,q),q,u,q,B.hjb,q)},
bI_(a9,b0,b1,b2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=null,e="equity",d=J.a2(b0),a0=D.ex(d.h(b0,"today")),a1=D.ex(d.h(b0,"record")),a2=D.ex(d.h(b0,"ticket")),a3=a1.h(0,"pnlSum")!=null?D.d_(a1.h(0,"pnlSum")):D.d_(b1.h(0,"totalPnl")),a4=D.d_(a0.h(0,"day_pnl")),a5=x.f,a6=a5.b(b1.h(0,"shadow"))?D.ex(b1.h(0,"shadow")):f,a7=a6!=null,a8=0
if(a7){w=D.ex(b2.h(0,"held"))
if(w.h(0,"pnl")!=null)a8=D.d_(w.h(0,"pnl"))
else if(!a5.b(a6.h(0,"option"))){v=D.d_(J.t(B.d.dz(D.fBt(b2),new D.eGn(a6),new D.eGo()),"price"))
if(v>0){a5=D.d_(a6.h(0,"qty"))
u=a6.h(0,"mult")==null?1:D.d_(a6.h(0,"mult"))
a8=a5*u*(v-D.d_(a6.h(0,"entryPrice")))}}}t=D.ex(a1.h(0,"newRules"))
s=t.h(0,"winRatePct")
r=D.d_(b2.h(0,e))
q=D.ex(d.h(b0,"fast"))
p=D.d_(q.h(0,"closed"))+D.d_(q.h(0,"open"))
o=a3+a8+p
d=A.n(26)
a5=A.a([new A.aa(0,B.H,B.i0.j(0.3),B.eT,24)],x.V)
u=x.p
n=A.A(A.a([C.h4q,B.aY,A.p(f,C.h3I,B.f,f,f,new A.o(B.c.j(0.14),f,f,A.n(999),f,f,B.m),f,f,f,f,B.fo,f,f,f)],u),B.l,f,B.e,B.h,0,f,f)
n=A.a([n,B.au,new A.di(B.dr,B.a5,B.f,A.c(b2.h(0,e)==null?"\u2014":D.eT(r+a3+a8+p,!0,!1),f,f,f,f,f,f,C.fF4,f,f,f),f)],u)
if(b2.h(0,e)!=null){m=o>=0?C.arl:B.Qh
l=o>0
if(l)k=C.dc
else k=o<0?C.dO:B.ab
k=A.W(m,k,f,f,f,f)
m=D.eT(o,!0,!0)
if(p!==0)a7=" (all systems)"
else a7=a7?" (incl. the open one)":""
if(l)l=C.dc
else l=o<0?C.dO:B.ab
n.push(A.A(A.a([k,A.c(m+" from pretend trades"+a7,f,f,f,f,f,f,A.l(f,f,l,f,f,f,f,f,f,f,f,12.5,f,f,B.F,f,f,!0,f,f,f,f,f,f,f,f),f,f,f)],u),B.l,f,B.e,B.h,0,f,f))}n.push(B.bw)
n.push(A.c("Alpaca paper account "+D.eT(r,!0,!1)+" (unchanged, Version 1 sends no orders) \xb7 $"+B.i.a5(D.d_(a2.h(0,"amount")),0)+" a trade",f,f,f,f,f,f,N.Fy,f,f,f))
n.push(B.aA)
a7=D.eT(a4,!0,!0)
if(a4>0)m=C.dc
else m=a4<0?C.dO:B.c
m=A.E(g.AQ("Today",a7,m),1)
a7=D.eT(a3,!0,!0)
if(a3>0)l=C.dc
else l=a3<0?C.dO:B.c
l=A.E(g.AQ("All time",a7,l),1)
a7=a1.h(0,"wins")
a7=A.v(a7==null?0:a7)
k=a1.h(0,"losses")
a7=A.A(A.a([m,B.aa,l,B.aa,A.E(g.AQ("Wins / losses",a7+" / "+A.v(k==null?0:k),B.c),1)],u),B.l,f,B.e,B.h,0,f,f)
m=a0.h(0,"trades")
m=A.v(m==null?0:m)
l=a2.h(0,"maxTradesToday")
m=A.E(g.AQ("Trades today",m+" of "+A.v(l==null?4:l),B.c),1)
l=a2.h(0,"dailyStopUsd")
l=A.E(g.AQ("Daily stop","-$"+B.i.a5(D.d_(l==null?50:l),0),B.c),1)
k=a2.h(0,"totalBrakeUsd")
n.push(g.aRc("RESULTS AND LIMITS",A.a([a7,B.O,A.A(A.a([m,B.aa,l,B.aa,A.E(g.AQ("Total brake","-$"+B.i.a5(D.d_(k==null?100:k),0),B.c),1)],u),B.l,f,B.e,B.h,0,f,f)],u)))
n.push(B.S)
a7=a2.h(0,"amount")
a7=B.i.a5(D.d_(a7==null?100:a7),0)
m=J.z(a2.h(0,"kind"),"crypto")?"a coin":"a stock"
m=A.E(g.AQ("Buys","$"+a7+" of "+m,B.c),1)
a7=a2.h(0,"takeProfitUsd")
a7=A.E(g.AQ("Take profit","+$"+B.i.a5(D.d_(a7==null?50:a7),0),C.dc),1)
l=a2.h(0,"stopLossUsd")
a7=A.A(A.a([m,B.aa,a7,B.aa,A.E(g.AQ("Stop loss","-$"+B.i.a5(D.d_(l==null?50:l),0),C.dO),1)],u),B.l,f,B.e,B.h,0,f,f)
m=B.c.j(0.1)
l=A.n(14)
k=s==null
if(k)j="No $100 trades yet"
else{j=B.i.a5(D.d_(s),0)
i=t.h(0,"wins")
i=A.v(i==null?0:i)
h=t.h(0,"trades")
j=j+"%  \xb7  "+i+" won of "+A.v(h==null?0:h)}if(k)k=B.c
else k=D.d_(s)>=50?C.dc:C.dO
n.push(g.aRc("EACH TRADE",A.a([a7,B.O,A.p(f,A.A(A.a([A.E(A.x(A.a([C.fWg,B.bw,A.c(j,f,f,f,f,f,f,A.l(f,f,k,f,f,f,f,f,f,f,f,16,f,f,B.F,f,f,!0,f,f,f,f,f,f,f,f),f,f,f)],u),B.B,f,B.e,B.h,0,B.p),1),C.hbW],u),B.l,f,B.e,B.h,0,f,f),B.f,f,f,new A.o(m,f,f,l,f,f,B.m),f,f,f,f,B.ep,f,f,1/0)],u)))
return A.p(f,A.x(n,B.B,f,B.e,B.h,0,B.p),B.f,f,f,new A.o(f,f,f,d,a5,C.auY,B.m),f,f,f,B.dU,B.f9,f,f,f)},
aRc(d,e){var w=null,v=B.v.j(0.14),u=A.n(18),t=A.K(B.c.j(0.16),B.r,1),s=A.a([new A.D(B.aoP,A.c(d,w,w,w,w,w,w,C.fG5,w,w,w),w)],x.p)
B.d.u(s,e)
return A.p(w,A.x(s,B.B,w,B.e,B.h,0,B.p),B.f,w,w,new A.o(v,w,t,u,w,w,B.m),w,w,w,w,B.bT,w,w,1/0)},
AQ(d,e,f){var w=null,v=B.c.j(0.1),u=A.n(14)
return A.p(w,A.x(A.a([A.c(d,w,1,B.a2,w,w,w,B.LP,w,w,w),B.bw,new A.di(B.dr,B.a5,B.f,A.c(e,w,w,w,w,w,w,A.l(w,w,f,w,w,w,w,w,w,w,w,15,w,w,B.F,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w)],x.p),B.B,w,B.e,B.h,0,B.p),B.f,w,w,new A.o(v,w,w,u,w,w,B.m),w,w,w,w,B.anm,w,w,w)},
crD(a9,b0,b1,b2,b3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=this,a1=null,a2="price",a3=D.d_(b0.h(0,"entryPrice")),a4=D.d_(b0.h(0,"qty")),a5=b0.h(0,"mult")==null?1:D.d_(b0.h(0,"mult")),a6=x.f.b(b0.h(0,"option"))?D.ex(b0.h(0,"option")):a1,a7=J.a2(b1),a8=J.z(b0.h(0,"symbol"),a7.h(b1,"asset"))
if(b3.h(0,a2)!=null)w=D.d_(b3.h(0,a2))
else w=a6==null&&a8?D.d_(a7.h(b1,a2)):a3
a7=a4*a5
v=a7*a3
u=a7*w
t=u-v
s=a3===0?0:(w-a3)/a3*100
r=t>=0
q=b2.h(0,"takeProfitUsd")
p=D.d_(q==null?50:q)
q=b2.h(0,"stopLossUsd")
o=D.d_(q==null?50:q)
n=B.i.D((t+o)/(p+o),0,1)
m=a7===0?0:1/a7
l=a3-o*m
a7=a9.a
q=x.p
k=A.A(A.a([A.c("Your pretend position",a1,a1,a1,a1,a1,a1,A.l(a1,a1,a7?C.d_:B.c,a1,a1,a1,a1,a1,a1,a1,a1,16,a1,a1,B.F,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1),B.aY,a0.b3c("OPEN",C.dc)],q),B.l,a1,B.e,B.h,0,a1,a1)
j=D.eT(t,!0,!0)
j=A.c(j,a1,a1,a1,a1,a1,a1,A.l(a1,a1,r?C.dc:C.dO,a1,a1,a1,a1,a1,a1,a1,a1,34,a1,a1,B.F,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1)
i=s>=0?"+":""
h=B.i.a5(s,2)
j=A.A(A.a([j,B.aa,new A.D(B.eH,A.c(i+h+"%",a1,a1,a1,a1,a1,a1,A.l(a1,a1,r?C.dc:C.dO,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,B.F,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1),a1)],q),B.dF,a1,B.e,B.h,0,a1,a1)
i=r?"You would be winning right now":"You would be losing right now"
k=A.a([k,B.af,j,A.c(i,a1,a1,a1,a1,a1,a1,A.l(a1,a1,a7?C.cC:C.cD,a1,a1,a1,a1,a1,a1,a1,a1,12.5,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1),B.aA],q)
j=a6!=null
if(j){i=a7?C.z5:C.z6
h=A.n(16)
g=A.c("1 SPY call option",a1,a1,a1,a1,a1,a1,A.l(a1,a1,a7?C.cC:C.cD,a1,a1,a1,a1,a1,a1,a1,a1,11.5,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1)
f=D.eT(D.d_(a6.h(0,"strike")),!0,!1)
e=D.bDL(a6.h(0,"expiry"))
f=A.c("Strike "+f+" \xb7 expires "+e,a1,a1,a1,a1,a1,a1,A.l(a1,a1,a7?C.d_:B.c,a1,a1,a1,a1,a1,a1,a1,a1,15,a1,a1,B.F,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1)
e=D.eT(a3,!0,!1)
d=D.eT(v,!0,!1)
B.d.u(k,A.a([A.p(a1,A.x(A.a([g,B.bw,f,B.bw,A.c("Premium paid "+e+" a share x 100 = "+d,a1,a1,a1,a1,a1,a1,A.l(a1,a1,a7?C.cC:C.cD,a1,a1,a1,a1,a1,a1,a1,a1,11.5,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1)],q),B.B,a1,B.e,B.h,0,B.p),B.f,a1,a1,new A.o(i,a1,a1,h,a1,a1,B.m),a1,a1,a1,a1,B.bg,a1,a1,1/0),B.O],q))}i=A.E(a0.aAD(a9,"You put in",D.eT(v,!0,!1)),1)
h=D.eT(u,!0,!1)
k.push(A.A(A.a([i,B.aa,A.E(a0.aAE(a9,"Worth now",h,r?C.dc:C.dO),1)],q),B.l,a1,B.e,B.h,0,a1,a1))
k.push(B.O)
i=j?"Premium paid":"Bought at"
i=A.E(a0.aAD(a9,i,D.eT(a3,!0,!1)),1)
if(j){j=J.z(b3.h(0,"priced"),!1)?"no price yet":D.eT(w,!0,!1)
j=a0.aAE(a9,"Premium now",j,r?C.dc:C.dO)}else j=a0.aAD(a9,"Amount",B.i.a5(a4,a4<0.01?6:4)+" "+A.v(b0.h(0,"symbol")))
k.push(A.A(A.a([i,B.aa,A.E(j,1)],q),B.l,a1,B.e,B.h,0,a1,a1))
k.push(B.aO)
k.push(A.cf(new D.eGO(a9,n)))
k.push(B.ak)
j=D.eT(o,!0,!1)
k.push(A.A(A.a([A.E(A.c("Stop loss\n-"+j+" \xb7 at "+D.eT(l<0?0:l,!0,!1),a1,a1,a1,a1,a1,a1,C.fL0,a1,a1,a1),1),A.E(A.c("Take profit\n+"+D.eT(p,!0,!1)+" \xb7 at "+D.eT(a3+p*m,!0,!1),a1,a1,a1,a1,a1,a1,C.fJB,B.e4,a1,a1),1)],q),B.l,a1,B.e,B.h,0,a1,a1))
k.push(B.ak)
q=D.hGl(b0.h(0,"entryAt"))
k.push(A.c("Bought "+q,a1,a1,a1,a1,a1,a1,A.l(a1,a1,a7?C.cC:C.cD,a1,a1,a1,a1,a1,a1,a1,a1,11.5,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1))
return a0.agE(a9,A.x(k,B.B,a1,B.e,B.h,0,B.p))},
aAB(d,e){var w,v,u,t=this,s=null,r=J.z(e.h(0,"enabled"),!0)&&!J.z(e.h(0,"brakePaused"),!0),q=r?C.dO:C.dc
q=A.bp(q,s,s,s,s,s,s,s,new A.b9(A.n(999),B.a1),s,s,s)
w=t.r?s:new D.eGB(t,r)
v=A.W(r?B.vz:B.fO,s,s,s,s,s)
q=A.E(new A.a6(s,52,A.db(v,s,A.c(r?"Stop agent":"Start agent",s,s,s,s,s,s,B.mL,s,s,s),w,q),s),3)
w=d.a
v=w?C.d_:B.c
u=w?C.pE:C.pD
w=w?B.c.j(0.92):C.je
u=A.dk(s,s,w,s,s,s,s,s,s,v,s,s,s,s,new A.b9(A.n(999),B.a1),new A.ax(u,1.5,B.r,-1),s,s,s,s)
w=t.r
v=w?s:t.gcz5()
return new A.D(B.dU,A.A(A.a([q,B.ar,A.E(new A.a6(s,52,A.eo(w?B.Lg:C.c59,s,C.he8,v,u),s),2)],x.p),B.l,s,B.e,B.h,0,s,s),s)},
bHP(d,e,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i="every 5 min",h=J.z(e.h(0,"enabled"),!0)&&!J.z(e.h(0,"brakePaused"),!0),g=e.h(0,"lastTickAt"),f=A.bh(A.v(g==null?"":g))
if(h)w=C.dc
else w=d.a?C.cC:C.cD
g=x.f
v=g.b(e.h(0,"shadow"))?D.ex(e.h(0,"shadow")):j
u=x.g.a(J.t(a0,"trades"))
g=J.cV(u==null?B.c1:u,g)
t=A.B(g,g.$ti.k("M.E"))
s=t.length===0?j:D.ex(B.d.gH(t))
g=v!=null
r=g?"Current trade from":"Last trade from"
if(g)q=A.v(v.h(0,"symbol"))
else if(s==null)q="no trade yet"
else{g=A.v(s.h(0,"asset"))
u=J.z(s.h(0,"decision"),"would buy")?"bought":"sold "+D.eT(D.d_(D.ex(s.h(0,"details")).h(0,"pnl")),!0,!0)
u=g+" ("+u+")"
q=u}g=new D.eGm(d)
u=d.a
p=u?B.c.j(0.92):C.je
o=A.n(20)
n=A.K(w.j(0.35),B.r,1)
m=w.j(0.15)
l=A.n(9)
l=A.p(j,A.W(L.Qi,w,j,j,j,17),B.f,j,j,new A.o(m,j,j,l,j,j,B.m),j,28,j,j,j,j,j,28)
m=h?"Trades are automatic":"Agent is stopped"
m=A.E(A.c(m,j,j,j,j,j,j,A.l(j,j,u?C.d_:B.c,j,j,j,j,j,j,j,j,13.5,j,j,B.F,j,j,!0,j,j,j,j,j,j,j,j),j,j,j),1)
k=x.p
m=A.a([A.A(A.a([l,B.aa,m,A.c("Check now only looks",j,j,j,j,j,j,A.l(j,j,u?C.cC:C.cD,j,j,j,j,j,j,j,j,10.5,j,j,j,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)],k),B.l,j,B.e,B.h,0,j,j),B.S],k)
if(h)B.d.u(m,A.a([A.A(A.a([g.$2("Last check",f==null?"not yet":D.a2Z(D.ai7(f))+" ET"),B.bc,g.$2("Next buy check",D.hI3())],k),B.l,j,B.e,B.h,0,j,j),B.ak,A.A(A.a([g.$2("Checks every market",i),B.bc,g.$2("Open trade exits",i)],k),B.l,j,B.e,B.h,0,j,j),B.ak],k))
else B.d.u(m,A.a([A.c("It makes no trades. Press Start and it checks every market on the day's list every 5 minutes by itself.",j,j,j,j,j,j,A.l(j,j,u?C.cC:C.cD,j,j,j,j,j,j,j,j,12,j,j,j,j,1.35,!0,j,j,j,j,j,j,j,j),j,j,j),B.O],k))
m.push(A.A(A.a([g.$2(r,q)],k),B.l,j,B.e,B.h,0,j,j))
return A.p(j,A.x(m,B.B,j,B.e,B.h,0,B.p),B.f,j,j,new A.o(p,j,n,o,j,j,B.m),j,j,j,B.dU,B.bg,j,j,j)},
cJv(b4,b5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8=this,a9=null,b0="entryPrice",b1="exitPrice",b2="outValue",b3=x.g.a(J.t(b5,"trades"))
if(b3==null)b3=B.c1
w=x.f
b3=J.cV(b3,w)
b3=A.cE(b3,new D.eH8(),b3.$ti.k("M.E"),x.P)
v=A.B(b3,A.a3(b3).k("M.E"))
b3=b4.a
u=x.p
t=A.a([A.c("Pretend trades",a9,a9,a9,a9,a9,a9,A.l(a9,a9,b3?C.d_:B.c,a9,a9,a9,a9,a9,a9,a9,a9,16,a9,a9,B.F,a9,a9,!0,a9,a9,a9,a9,a9,a9,a9,a9),a9,a9,a9),B.O],u)
if(v.length===0){s=A.W(B.h0,b3?C.cC:C.cD,a9,a9,a9,a9)
t.push(new A.D(B.cn,A.A(A.a([s,B.ar,A.E(A.c("No trades yet. Each buy shows what was bought (for a SPY option: strike, expiry and premium) and what was put in; each sell shows the entry and exit price and the win or loss in dollars.",a9,a9,a9,a9,a9,a9,A.l(a9,a9,b3?C.cC:C.cD,a9,a9,a9,a9,a9,a9,a9,a9,12.5,a9,a9,a9,a9,1.3,!0,a9,a9,a9,a9,a9,a9,a9,a9),a9,a9,a9),1)],u),B.l,a9,B.e,B.h,0,a9,a9),a9))}s=J.aR(a8.y?v:A.cS(v,0,A.dw(4,"count",x.S),A.U(v).c))
r=x.N
q=x.z
while(s.C()){p=s.gP(s)
o=J.a2(p)
n=J.z(o.h(p,"decision"),"would buy")
m=o.h(p,"details")
l=w.b(m)?A.a1(m,r,q):A.S(r,q)
if(w.b(l.h(0,"option"))){m=l.h(0,"option")
k=w.b(m)?A.a1(m,r,q):A.S(r,q)}else k=a9
m=k!=null
if(m){j=k.h(0,"strike")
if(!(typeof j=="number")){j=A.cw(A.v(j==null?"":j))
if(j==null)j=0}i="SPY "+D.eT(j,!0,!1)+" call"}else{j=o.h(p,"asset")
i=J.k(j==null?"":j)}if(l.h(0,"amount")==null)h=50
else{j=l.h(0,"amount")
if(typeof j=="number")h=j
else{j=A.cw(A.v(j==null?"":j))
if(j==null)j=0
h=j}}g=l.h(0,"qty")
if(!(typeof g=="number")){j=A.cw(A.v(g==null?"":g))
g=j==null?0:j}f=l.h(0,"pnl")
if(!(typeof f=="number")){j=A.cw(A.v(f==null?"":f))
f=j==null?0:j}e=l.h(0,b0)!=null
d=l.h(0,b0)
if(!(typeof d=="number")){j=A.cw(A.v(d==null?"":d))
d=j==null?0:j}if(l.h(0,b1)==null){j=o.h(p,"price")
if(typeof j=="number")a0=j
else{j=A.cw(A.v(j==null?"":j))
if(j==null)j=0
a0=j}}else{j=l.h(0,b1)
if(typeof j=="number")a0=j
else{j=A.cw(A.v(j==null?"":j))
if(j==null)j=0
a0=j}}if(m)if(n)a1="expires "+D.bDL(k.h(0,"expiry"))+" \xb7 premium "+D.eT(d,!0,!1)+" x 100"
else{m=D.eT(d,!0,!1)
j=D.eT(a0,!0,!1)
a2=o.h(p,"reason")
a2=J.k(a2==null?"":a2)
a3=B.a.cc(a2,"(")
a1="premium "+m+" to "+j+" \xb7 "+B.a.i(a3>0?B.a.aw(a2,0,a3):a2)}else if(n){if(g===0)m=""
else m=B.i.a5(g,g<0.01?6:4)+" at "
if(e)j=d
else{j=o.h(p,"price")
if(!(typeof j=="number")){j=A.cw(A.v(j==null?"":j))
if(j==null)j=0}}a1=m+D.eT(j,!0,!1)}else{m=e?D.eT(d,!0,!1)+" to ":"at "
j=D.eT(a0,!0,!1)
a2=o.h(p,"reason")
a2=J.k(a2==null?"":a2)
a3=B.a.cc(a2,"(")
a1=m+j+" \xb7 "+B.a.i(a3>0?B.a.aw(a2,0,a3):a2)}a4=f>=0
if(n)a5=B.cd
else a5=a4?C.dc:C.dO
m=b3?C.pE:C.pD
j=a5.j(0.14)
a2=new A.aP(13,13)
j=A.p(a9,A.W(n?B.tN:B.rh,a5,a9,a9,a9,20),B.f,a9,a9,new A.o(j,a9,a9,new A.bb(a2,a2,a2,a2),a9,a9,B.m),a9,40,a9,a9,a9,a9,a9,40)
a2=n?"Bought":"Sold"
a6=b3?C.d_:B.c
a2=A.c(a2+" "+i,a9,a9,a9,a9,a9,a9,new A.H(!0,a6,a9,a9,a9,a9,14,B.F,a9,a9,a9,a9,a9,a9,a9,a9,a9,a9,a9,a9,a9,a9,a9,a9,a9,a9),a9,a9,a9)
a6=b3?C.cC:C.cD
a6=A.c(a1,a9,2,B.a2,a9,a9,a9,new A.H(!0,a6,a9,a9,a9,a9,11.5,a9,a9,a9,a9,a9,a9,a9,a9,a9,a9,a9,a9,a9,a9,a9,a9,a9,a9,a9),a9,a9,a9)
p=o.h(p,"et_time")
p=J.k(p==null?"":p)
o=b3?C.cC:C.cD
p=A.x(A.a([a2,B.bw,a6,A.c(p,a9,a9,a9,a9,a9,a9,new A.H(!0,o,a9,a9,a9,a9,10.5,a9,a9,a9,a9,a9,a9,a9,a9,a9,a9,a9,a9,a9,a9,a9,a9,a9,a9,a9),a9,a9,a9)],u),B.B,a9,B.e,B.h,0,B.p)
if(n)o="-"+D.eT(h,!0,!1)
else{if(l.h(0,b2)==null)o=h+f
else{o=l.h(0,b2)
if(!(typeof o=="number")){o=A.cw(A.v(o==null?"":o))
if(o==null)o=0}}o="+"+D.eT(o,!0,!1)}a2=b3?C.d_:B.c
o=A.a([A.c(o,a9,a9,a9,a9,a9,a9,new A.H(!0,a2,a9,a9,a9,a9,14,B.F,a9,a9,a9,a9,a9,a9,a9,a9,a9,a9,a9,a9,a9,a9,a9,a9,a9,a9),a9,a9,a9)],u)
if(!n){a2=D.eT(f,!0,!0)
if(l.h(0,"pct")==null)a6=""
else{a6=l.h(0,"pct")
if(!(typeof a6=="number")){a6=A.cw(A.v(a6==null?"":a6))
if(a6==null)a6=0}a6=a6>=0?"+":""
a7=l.h(0,"pct")
if(!(typeof a7=="number")){a7=A.cw(A.v(a7==null?"":a7))
if(a7==null)a7=0}a7=" ("+a6+B.i.a5(a7,2)+"%)"
a6=a7}a7=a4?C.dc:C.dO
o.push(A.c(a2+a6,a9,a9,a9,a9,a9,a9,new A.H(!0,a7,a9,a9,a9,a9,12,B.F,a9,a9,a9,a9,a9,a9,a9,a9,a9,a9,a9,a9,a9,a9,a9,a9,a9,a9),a9,a9,a9))}if(n){a2=b3?C.cC:C.cD
o.push(A.c("put in",a9,a9,a9,a9,a9,a9,new A.H(!0,a2,a9,a9,a9,a9,11,a9,a9,a9,a9,a9,a9,a9,a9,a9,a9,a9,a9,a9,a9,a9,a9,a9,a9,a9),a9,a9,a9))}t.push(A.p(a9,new A.c1(B.aK,B.e,B.h,B.l,a9,B.p,a9,0,A.a([j,B.bb,new A.bu(1,B.ba,p,a9),B.aa,A.x(o,B.dF,a9,B.e,B.h,0,B.p)],u),a9),B.f,a9,a9,new A.o(a9,a9,new A.bE(B.a1,B.a1,new A.ax(m,1,B.r,-1),B.a1),a9,a9,a9,B.m),a9,a9,a9,a9,B.jW,a9,a9,a9))}b3=v.length
if(b3>4)t.push(A.at(A.bM(!1,A.c(a8.y?"Show less":"Show all ("+b3+")",a9,a9,a9,a9,a9,a9,a9,a9,a9,a9),a9,a9,!0,a9,a9,a9,new D.eH9(a8),a9,a9),a9,a9,a9))
return a8.agE(b4,A.x(t,B.B,a9,B.e,B.h,0,B.p))},
bEY(d){var w,v,u,t=this,s=null,r=t.x,q=t.e
q=r?q:A.cS(q,0,A.dw(4,"count",x.S),A.U(q).c).dk(0)
r=d.a
w=A.c("Agent activity",s,s,s,s,s,s,A.l(s,s,r?C.d_:B.c,s,s,s,s,s,s,s,s,16,s,s,B.F,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)
v=x.p
v=A.a([A.A(A.a([w,B.aY,A.c("newest first",s,s,s,s,s,s,A.l(s,s,r?C.cC:C.cD,s,s,s,s,s,s,s,s,11,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],v),B.l,s,B.e,B.h,0,s,s),B.ak],v)
if(t.e.length===0)v.push(new A.D(B.f8,A.c("Nothing yet. A new line appears with every automatic check (every 5 minutes).",s,s,s,s,s,s,A.l(s,s,r?C.cC:C.cD,s,s,s,s,s,s,s,s,12.5,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),s))
for(r=q.length,u=0;u<q.length;q.length===r||(0,A.I)(q),++u)v.push(t.c7n(d,q[u]))
if(t.e.length>4){if(t.x)r=t.w?"Show older":"Show less"
else r="Show all"
v.push(A.at(A.bM(!1,A.c(r,s,s,s,s,s,s,s,s,s,s),s,s,!0,s,s,s,new D.eGl(t),s,s),s,s,s))}return t.agE(d,A.x(v,B.B,s,B.e,B.h,0,B.p))},
c7n(d,e){var w,v,u,t,s,r=null,q="price",p=J.a2(e),o=p.h(e,"decision"),n=J.k(o==null?"":o)
A:{if("would buy"===n){o=C.dc
break A}if("would sell"===n){o=B.bB
break A}if("hold"===n){o=B.b2
break A}if("day start"===n||"day end"===n){o=B.cd
break A}if("start"===n){o=C.dc
break A}if("stop"===n){o=C.dO
break A}if(J.z(p.h(e,"kind"),"error"))o=C.dO
else o=d.a?C.cC:C.cD
break A}w=p.h(e,"fast_ma")!=null&&p.h(e,"slow_ma")!=null
v=A.p(r,r,B.f,r,r,new A.o(o,r,r,r,r,r,B.a6),r,8,r,G.P2,r,r,r,8)
u=n==="hold"?"Still holding":D.hFx(n)
t=x.p
o=A.a([A.c(u,r,r,r,r,r,r,A.l(r,r,o,r,r,r,r,r,r,r,r,12.5,r,r,B.F,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],t)
if(J.z(D.ex(p.h(e,"details")).h(0,"by"),"cron"))B.d.u(o,A.a([B.bc,A.c("automatic",r,r,r,r,r,r,A.l(r,r,d.a?C.cC:C.cD,r,r,r,r,r,r,r,r,10,r,r,B.P,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],t))
o.push(B.aY)
u=p.h(e,"et_time")
u=D.hJw(J.k(u==null?"":u))
s=d.a
o.push(A.c(u,r,r,r,r,r,r,A.l(r,r,s?C.cC:C.cD,r,r,r,r,r,r,r,r,10.5,r,r,r,r,r,!0,r,r,r,r,r,r,r,r),r,r,r))
o=A.A(o,B.l,r,B.e,B.h,0,r,r)
u=p.h(e,"reason")
u=D.hFx(J.k(u==null?"":u))
o=A.a([o,A.c(u,r,r,r,r,r,r,A.l(r,r,s?C.d_:B.c,r,r,r,r,r,r,r,r,12.5,r,r,r,r,1.3,!0,r,r,r,r,r,r,r,r),r,r,r)],t)
if(p.h(e,q)!=null||w){u=A.a([],x.s)
if(p.h(e,"asset")!=null&&p.h(e,q)!=null)u.push(A.v(p.h(e,"asset"))+" "+D.eT(D.d_(p.h(e,q)),!0,!1))
if(w)u.push("fast "+B.i.a5(D.d_(p.h(e,"fast_ma")),2)+" \xb7 slow "+B.i.a5(D.d_(p.h(e,"slow_ma")),2))
p=B.d.aL(u,"  \xb7  ")
o.push(A.c(p,r,r,r,r,r,r,A.l(r,r,s?C.cC:C.cD,r,r,r,r,r,r,r,r,10.5,r,r,r,r,r,!0,r,r,r,r,r,r,r,r),r,r,r))}return new A.D(W.HA,A.A(A.a([v,B.ar,A.E(A.x(o,B.B,r,B.e,B.h,0,B.p),1)],t),B.B,r,B.e,B.h,0,r,r),r)},
cy2(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=this.c
k.toString
k=A.Q(k).aGX(B.L)
w=d.a
v=w?C.d_:B.c
u=w?C.cC:C.cD
t=A.W(C.bVQ,B.b2,l,l,l,l)
s=x.p
r=A.A(A.a([new A.d0(1,B.ce,A.c("The rules it follows",l,l,l,l,l,l,A.l(l,l,w?C.d_:B.c,l,l,l,l,l,l,l,l,14.5,l,l,B.F,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),l),B.aa,A.aA(l,A.p(l,C.fog,B.f,l,l,new A.o(l,l,l,A.n(999),l,G.tT,B.m),l,l,l,l,B.hm,l,l,l),B.y,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,this.gclC(),l,l,l,l,l,l,!1,B.a4)],s),B.l,l,B.e,B.h,0,l,l)
q=A.c("Read-only, set in the code",l,l,l,l,l,l,A.l(l,l,w?C.cC:C.cD,l,l,l,l,l,l,l,l,11.5,l,l,l,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)
p=A.a([],s)
o=x.g.a(J.t(e,"rules"))
o=J.aR(o==null?B.c1:o)
while(o.C()){n=J.k(o.gP(o))
m=w?C.d_:B.c
p.push(new A.D(C.bED,new A.c1(B.aK,B.e,B.h,B.B,l,B.p,l,0,A.a([C.eCV,B.aa,new A.bu(1,B.ba,A.c(n,l,l,l,l,l,l,new A.H(!0,m,l,l,l,l,12.5,l,l,l,l,l,1.35,l,l,l,l,l,l,l,l,l,l,l,l,l),l,l,l),l)],s),l),l))}return this.aAA(d,new A.ou(k,A.aG(!1,B.a3,!0,l,K.hfB(l,p,U.anQ,l,u,v,!1,t,l,q,B.hd,r),B.f,l,0,l,l,l,l,l,B.i5),l),B.ag)},
aAA(d,e,f){var w=null,v=d.a,u=v?B.c.j(0.92):C.je,t=A.n(24)
return A.p(w,e,B.f,w,w,new A.o(u,w,A.K(v?B.c:C.oJ,B.r,1),t,A.a([new A.aa(0,B.H,d.gO8(),B.ds,24)],x.V),w,B.m),w,w,w,B.dU,f,w,w,w)},
agE(d,e){return this.aAA(d,e,B.bQ)},
aaF(d,e,f){var w=null,v=f.j(0.12),u=A.n(16),t=A.K(f.j(0.45),B.r,1),s=A.W(B.QG,f,w,w,w,20)
return A.p(w,A.A(A.a([s,B.ar,A.E(A.c(e,w,w,w,w,w,w,A.l(w,w,d.a?C.d_:B.c,w,w,w,w,w,w,w,w,12.5,w,w,w,w,1.35,!0,w,w,w,w,w,w,w,w),w,w,w),1)],x.p),B.l,w,B.e,B.h,0,w,w),B.f,w,w,new A.o(v,w,t,u,w,w,B.m),w,w,w,B.dU,B.bg,w,w,w)},
b3d(d,e,f){var w=null,v=d.a,u=v?B.c.j(0.92):C.je,t=A.K(v?B.c:C.oJ,B.r,1)
return A.aG(!1,B.a3,!0,w,A.aM(!1,w,!0,A.p(w,A.W(e,v?C.d_:B.c,w,w,w,18),B.f,w,w,new A.o(w,w,t,w,w,w,B.a6),w,40,w,w,w,w,w,40),B.cJ,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),B.f,u,0,w,w,B.cJ,w,w,B.ai)},
b8P(d,e,f,g,h){var w,v,u,t,s,r,q,p=null
if(f){w=d.a
v=w?C.mY:B.c
u=v
v=w
w=u}else{w=d.a
v=w?C.O6:C.NX
u=v
v=w
w=u}t=A.n(999)
s=x.p
r=A.a([],s)
if(h!=null){if(f)q=v?B.c:C.mY
else q=v?C.cC:C.cD
B.d.u(r,A.a([A.W(h,q,p,p,p,14),B.d8],s))}if(f)v=v?B.c:C.mY
else v=v?C.cC:C.cD
r.push(A.c(e,p,p,p,p,p,p,A.l(p,p,v,p,p,p,p,p,p,p,p,11.5,p,p,B.P,p,p,!0,p,p,p,p,p,p,p,p),p,p,p))
return A.aA(p,A.cT(p,A.A(r,B.l,p,B.e,B.M,0,p,p),p,p,B.b_,new A.o(w,p,p,t,p,p,B.m),B.eK,p,p,p,p,A_.a1F,p,p,p),B.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,g,p,p,p,p,p,p,!1,B.a4)},
cA5(d,e,f,g){return this.b8P(d,e,f,g,null)},
ayp(d,e,f){var w=null,v=A.p(w,w,B.f,w,w,new A.o(e,w,w,A.n(2),w,w,B.m),w,3,w,w,w,w,w,14)
return A.A(A.a([v,B.e3,A.c(f,w,w,w,w,w,w,A.l(w,w,d.a?C.cC:C.cD,w,w,w,w,w,w,w,w,11,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),B.l,w,B.e,B.M,0,w,w)},
b3c(d,e){var w=null,v=e.j(0.14),u=A.n(999)
return A.p(w,A.c(d,w,w,w,w,w,w,A.l(w,w,e,w,w,w,w,w,w,w,w,10,w,w,B.u,w,w,!0,w,0.6,w,w,w,w,w,w),w,w,w),B.f,w,w,new A.o(v,w,w,u,w,w,B.m),w,w,w,w,B.fo,w,w,w)},
aAE(d,e,f,g){var w=null,v=d.a,u=v?C.z5:C.z6,t=A.n(16),s=A.c(e,w,w,w,w,w,w,A.l(w,w,v?C.cC:C.cD,w,w,w,w,w,w,w,w,11.5,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)
if(g==null)v=v?C.d_:B.c
else v=g
return A.p(w,A.x(A.a([s,B.cN,new A.di(B.dr,B.a5,B.f,A.c(f,w,w,w,w,w,w,A.l(w,w,v,w,w,w,w,w,w,w,w,16,w,w,B.F,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w)],x.p),B.B,w,B.e,B.h,0,B.p),B.f,w,w,new A.o(u,w,w,t,w,w,B.m),w,w,w,w,B.bg,w,w,w)},
aAD(d,e,f){return this.aAE(d,e,f,null)},
cMv(d){var w=A.v(d==null?"":d),v=A.bh(w.length>=19?B.a.aw(w,0,19):"")
if(v==null)return""
return" \xb7 opens "+B.Tk[A.lU(v)-1]+" "+D.a2Z(v)+" ET"}}
D.adK.prototype={
R(){return new D.bep()}}
D.bep.prototype={
aAC(d,e){var w=this,v=w.a.c.length,u=B.o.D(B.i.bc(d.a/e*v),0,v-1)
if(u!==w.d)w.l(new D.cWZ(w,u))},
B(d){return A.cf(new D.cX7(this))}}
D.beq.prototype={
a4(d0,d1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3=this,c4=null,c5={},c6=d1.b,c7=c6-18,c8=x.n,c9=A.a([],c8)
for(w=c3.c,v=w.length,u=0;t=w.length,u<t;w.length===v||(0,A.I)(w),++u){s=w[u]
t=J.a2(s)
r=t.h(s,"h")
if(!(typeof r=="number")){r=A.cw(A.v(r==null?"":r))
if(r==null)r=0}t=t.h(s,"l")
if(!(typeof t=="number")){t=A.cw(A.v(t==null?"":t))
if(t==null)t=0}B.d.u(c9,A.a([r,t],c8))}v=c3.f
if(v)for(u=0;u<w.length;w.length===t||(0,A.I)(w),++u){s=w[u]
r=A.a([],c8)
q=J.a2(s)
if(q.h(s,"f")!=null){p=q.h(s,"f")
if(!(typeof p=="number")){p=A.cw(A.v(p==null?"":p))
if(p==null)p=0}r.push(p)}if(q.h(s,"s")!=null){q=q.h(s,"s")
if(!(typeof q=="number")){q=A.cw(A.v(q==null?"":q))
if(q==null)q=0}r.push(q)}B.d.u(c9,r)}c8=c3.e
t=c8!=null
if(t)c9.push(c8)
r=c3.r
q=r>0
if(q)c9.push(r)
c5.a=B.d.eH(c9,B.pt)
o=c5.b=B.d.eH(c9,B.ot)
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
j=new D.cX8(k)
i=new D.cXa(c5,c7)
$.T()
h=A.L()
p=c3.d.a
h.r=(p?C.pE:C.pD).j(0.7).gp(0)
h.c=1
for(g=1;g<=3;++g){f=c7*g/4
for(e=0;e<c9;e+=6)d0.ah(new A.r(e,f),new A.r(e+2,f),h)}if(v){v=new D.cX9(c3,l,j,i,d0)
v.$2("s",B.b2)
v.$2("f",B.bB)}for(v=Math.max(2,k*0.62)/2,d=c3.w,a0=d!=null,g=0;g<l;++g){s=w[g]
a1=J.a2(s)
a2=a1.h(s,"o")
if(!(typeof a2=="number")){a3=A.cw(A.v(a2==null?"":a2))
a2=a3==null?0:a3}a4=a1.h(s,"c")
if(!(typeof a4=="number")){a3=A.cw(A.v(a4==null?"":a4))
a4=a3==null?0:a3}a5=a1.h(s,"h")
if(!(typeof a5=="number")){a3=A.cw(A.v(a5==null?"":a5))
a5=a3==null?0:a3}a6=a1.h(s,"l")
if(!(typeof a6=="number")){a1=A.cw(A.v(a6==null?"":a6))
a6=a1==null?0:a1}a7=a4>=a2?C.dc:E.jx
a8=a0&&d!==g
$.T()
a9=new A.as(B.T,B.Q,B.W,B.X,B.U)
a9.r=(a8?a7.j(0.45):a7).gp(0)
a1=j.$1(g)
a3=i.$1(a5)
b0=j.$1(g)
b1=i.$1(a6)
a9.c=1.4
d0.ah(new A.r(a1,a3),new A.r(b0,b1),a9)
b2=i.$1(Math.max(a2,a4))
b3=i.$1(Math.min(a2,a4))
b1=A.by(new A.a4(j.$1(g)-v,b2,j.$1(g)+v,Math.max(b3,b2+1.5)),B.hC)
a9.b=B.Q
d0.aq(b1,a9)}if(t)c3.aUo(d0,i.$1(c8),c9,F.t6,"Buy "+D.eT(c8,!0,!1),!0)
if(q){c8=i.$1(r)
c3.bP9(d0,c8,c9,(p?C.d_:B.c).j(0.55),D.eT(r,!0,!1))}b4=A.h2(c4,B.cK,c4,c4,c4,c4,B.a7,B.cf,c4,B.e5,B.cg)
for(c8=[0,l/3|0,B.o.ao(2*l,3),l-1],v=c8.length,c6-=13,t=c3.b,u=0;u<v;++u){g=c8[u]
r=J.t(w[g],"t")
b5=A.bh(A.v(r==null?"":r))
if(b5==null)continue
r=D.a2Z(D.ai7(b5))
q=p?C.cC:C.cD
b4.sb1(0,new A.eF(r,c4,c4,B.cX,c4,c4,c4,c4,c4,c4,new A.H(!0,q,c4,t,c4,c4,10,c4,c4,c4,c4,c4,c4,c4,c4,c4,c4,c4,c4,c4,c4,c4,c4,c4,c4,c4)))
b4.eY()
r=j.$1(g)
q=b4.b.c
b4.a4(d0,new A.r(B.i.D(r-q/2,0,c9-q),c6))}if(a0&&d<l){s=w[d]
e=j.$1(d)
c6=J.a2(s)
b6=i.$1(D.d_(c6.h(s,"c")))
$.T()
b7=A.L()
b7.r=(p?C.d_:B.c).j(0.5).gp(0)
b7.c=1
for(b8=0;b8<c7;b8+=6)d0.ah(new A.r(e,b8),new A.r(e,b8+3),b7)
$.T()
c8=A.L()
c8.r=(p?B.c.j(0.92):C.je).gp(0)
d0.O(new A.r(e,b6),6,c8)
c8=A.L()
c8.r=(p?C.d_:B.c).gp(0)
c8.b=B.ac
c8.c=2.5
d0.O(new A.r(e,b6),6,c8)
c8=c6.h(s,"t")
b5=A.bh(A.v(c8==null?"":c8))
c8=b5==null?"":D.a2Z(D.ai7(b5))+" ET\n"
c6=D.eT(D.d_(c6.h(s,"c")),!0,!1)
b4.sb1(0,A.d4(c4,c4,c4,c4,c4,c4,c4,c4,c4,A.l(c4,c4,p?B.c:C.mY,c4,c4,c4,c4,c4,t,c4,c4,11.5,c4,c4,B.F,c4,1.3,!0,c4,c4,c4,c4,c4,c4,c4,c4),c8+c6))
b4.sDe(0,B.K)
b4.eY()
c6=b4.b
b9=c6.c+18
c6=c6.a.c
c0=c6.gb8(c6)+10
c1=B.i.D(e-b9/2,0,c9-b9)
c2=Math.max(0,b6-c0-14)
c9=A.by(new A.a4(c1,c2,c1+b9,c2+c0),B.hS)
c6=A.L()
c6.r=(p?C.mY:B.c).gp(0)
d0.aq(c9,c6)
b4.a4(d0,new A.r(c1+9,c2+5))}},
aUo(d,e,f,g,h,i){var w,v,u,t,s,r,q,p,o,n,m=null
$.T()
w=A.L()
w.r=g.gp(0)
w.c=1.2
for(v=0;v<f;v+=7)d.ah(new A.r(v,e),new A.r(v+3.5,e),w)
u=A.h2(m,B.cK,m,m,m,A.d4(m,m,m,m,m,m,m,m,m,A.l(m,m,B.c,m,m,m,m,m,this.b,m,m,10,m,m,B.F,m,m,!0,m,m,m,m,m,m,m,m),h),B.a7,B.cf,m,B.e5,B.cg)
u.eY()
t=u.b
s=t.c+12
t=t.a.c
r=t.gb8(t)+6
q=i?0:f-s
t=e-r/2
p=A.by(new A.a4(q,t,q+s,t+r),B.qh)
$.T()
o=A.L()
if(i)n=F.t6
else n=this.d.a?C.mY:B.c
o.r=n.gp(0)
d.aq(p,o)
u.a4(d,new A.r(q+6,t+3))},
bP9(d,e,f,g,h){return this.aUo(d,e,f,g,h,!1)},
aC(d){var w=this
return d.c!==w.c||d.w!=w.w||d.f!==w.f||d.e!=w.e||d.r!==w.r||d.d.a!==w.d.a}}
D.bwl.prototype={
a4(d,e){var w,v,u,t,s,r,q,p,o,n,m=null,l=this.b
if(l.length<2)return
w=A.U(l).k("O<1,G>")
v=A.B(new A.O(l,new D.fhv(),w),w.k("aj.E"))
u=B.d.eH(v,B.pt)
t=B.d.eH(v,B.ot)-u
if(t<1e-9)t=1
l=$.T()
w=A.a([],x.v)
s=new A.aH(l.r,B.aj,m,m,w)
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
w.san(new A.a7(B.aW,B.b0,B.x,A.a([p.j(0.25),p.j(0)],x.O),m,m).az(0,new A.a4(0,0,0+l,0+r)))
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
aC(d){return d.b!==this.b||!d.c.A(0,this.c)}}
D.z3.prototype={}
D.Rm.prototype={
gO8(){return this.a?B.cd.j(0.08):B.v.j(0.35)}}
D.WU.prototype={
R(){return new D.aGl(A.a([],x.t))}}
D.aGl.prototype={
a_(){var w=this
w.a3()
w.a.toString
w.wp()
w.x=A.cZ(B.n8,new D.e7z(w))
w.y=A.cZ(B.fv,new D.e7A(w))},
t(){var w=this.x
if(w!=null)w.a1(0)
w=this.y
if(w!=null)w.a1(0)
this.a2()},
wp(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$wp=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=x.N
r=x.z
w=3
return A.b(A.fP(A.J(["action","fsStatus","system",t.a.c],s,r),!1,!1,!1,!1,B.wV),$async$wp)
case 3:q=e
w=4
return A.b(A.fP(A.J(["action","fsLog","system",t.a.c,"limit",60],s,r),!1,!1,!1,!1,B.n8),$async$wp)
case 4:p=e
if(t.c==null){w=1
break}t.l(new D.e7o(t,q,p))
case 1:return A.h(u,v)}})
return A.i($async$wp,v)},
wL(d){return this.cAX(d)},
cAX(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$wL=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t.l(new D.e7q(t))
w=3
return A.b(A.fP(A.J(["action","fsSet","system",t.a.c,"enabled",d],x.N,x.z),!1,!1,!1,!1,B.wV),$async$wL)
case 3:s=f
if(t.c==null){w=1
break}t.l(new D.e7r(t,s))
t.wp()
case 1:return A.h(u,v)}})
return A.i($async$wL,v)},
B(c0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=this,a8=null,a9="brakePaused",b0="enabled",b1="pnlSum",b2="entryPrice",b3=A.Q(c0).ax.a===B.dg,b4=new D.Rm(b3),b5=a7.a.c==="options"?"Options":"Scalper",b6=a7.d,b7=D.ex(b6==null?a8:b6.h(0,"state")),b8=J.z(b7.h(0,a9),!0),b9=J.z(b7.h(0,b0),!0)&&!b8
b6=b3?C.t2:C.t0
w=b3?C.t2:C.t0
w=A.a([w,b3?C.O_:C.NT],x.O)
v=a7.a0O(b4,B.eB,new D.e7w(c0))
u=a7.a.c==="options"
t=u?B.aC:B.at
s=A.n(11)
t=A.p(a8,A.W(u?B.fE:B.rf,B.c,a8,a8,a8,20),B.f,a8,a8,new A.o(t,a8,a8,s,a8,a8,B.m),a8,34,a8,a8,a8,a8,a8,34)
u=A.c(b5,a8,a8,a8,a8,a8,a8,A.l(a8,a8,b3?C.d_:B.c,a8,a8,a8,a8,a8,a8,a8,a8,17,a8,a8,B.F,a8,a8,!0,a8,a8,a8,a8,a8,a8,a8,a8),a8,a8,a8)
s=x.p
u=A.a([v,B.ar,t,B.ar,A.E(A.x(A.a([u,A.c("Fast system \xb7 paper money only",a8,a8,a8,a8,a8,a8,A.l(a8,a8,b3?C.cC:C.cD,a8,a8,a8,a8,a8,a8,a8,a8,11.5,a8,a8,a8,a8,a8,!0,a8,a8,a8,a8,a8,a8,a8,a8),a8,a8,a8)],s),B.B,a8,B.e,B.h,0,B.p),1)],s)
if(a7.d!=null){if(b8)v=C.dO
else if(b9)v=C.dc
else v=b3?C.cC:C.cD
v=v.j(0.14)
t=A.n(999)
if(b8)r="Paused"
else r=b9?"Running":"Stopped"
if(b8)q=C.dO
else if(b9)q=C.dc
else q=b3?C.cC:C.cD
u.push(A.p(a8,A.c(r,a8,a8,a8,a8,a8,a8,A.l(a8,a8,q,a8,a8,a8,a8,a8,a8,a8,a8,12,a8,a8,B.F,a8,a8,!0,a8,a8,a8,a8,a8,a8,a8,a8),a8,a8,a8),B.f,a8,a8,new A.o(v,a8,a8,t,a8,a8,B.m),a8,a8,a8,a8,B.fN,a8,a8,a8))}u.push(B.aa)
u.push(a7.a0O(b4,B.ni,a7.r?a8:new D.e7x(a7)))
v=A.A(u,B.l,a8,B.e,B.h,0,a8,a8)
if(a7.f)b3=B.lq
else{u=a7.d
if(u==null){b3=a7.w
b3=A.a([a7.agF(b4,b3==null?"Nothing to show yet.":b3,B.b2)],s)}else{b7=D.ex(u.h(0,"state"))
t=x.f
p=t.b(b7.h(0,"shadow"))?D.ex(b7.h(0,"shadow")):a8
o=D.ex(u.h(0,"shared"))
n=o.h(0,"balance")
m=D.d_(o.h(0,"closed"))+D.d_(o.h(0,"open"))
r=A.n(26)
q=A.A(A.a([C.fWM,B.aY,A.p(a8,C.h13,B.f,a8,a8,new A.o(B.c.j(0.14),a8,a8,A.n(999),a8,a8,B.m),a8,a8,a8,a8,B.fo,a8,a8,a8)],s),B.l,a8,B.e,B.h,0,a8,a8)
l=A.c(n==null?"\u2014":D.eT(D.d_(n),!0,!1),a8,a8,a8,a8,a8,a8,C.fEw,a8,a8,a8)
k=D.eT(m,!0,!0)
if(m>0)j=C.dc
else j=m<0?C.dO:B.ab
j=A.c(k+" from pretend trades of every system",a8,a8,a8,a8,a8,a8,A.l(a8,a8,j,a8,a8,a8,a8,a8,a8,a8,a8,12.5,a8,a8,B.F,a8,a8,!0,a8,a8,a8,a8,a8,a8,a8,a8),a8,a8,a8)
r=A.a([A.p(a8,A.x(A.a([q,B.au,new A.di(B.dr,B.a5,B.f,l,a8),j,B.bw,A.c("Alpaca paper account "+(o.h(0,"equity")==null?"\u2014":D.eT(D.d_(o.h(0,"equity")),!0,!1))+" (unchanged, no orders are sent)",a8,a8,a8,a8,a8,a8,N.Fy,a8,a8,a8)],s),B.B,a8,B.e,B.h,0,B.p),B.f,a8,a8,new A.o(a8,a8,a8,r,a8,C.auY,B.m),a8,a8,a8,B.dU,B.f9,a8,a8,a8)],s)
q=a7.w
if(q!=null)r.push(a7.agF(b4,q,C.dO))
if(J.z(b7.h(0,a9),!0)){q=b7.h(0,"brakeReason")
r.push(a7.agF(b4,"Paused by this system's brake. "+A.v(q==null?"":q)+y.c,C.dO))}r.push(a7.aAB(b4,b7))
i=D.ex(u.h(0,"record"))
h=i.h(0,"winRatePct")
q=h==null
if(q)g=b3?C.d_:B.c
else g=D.d_(h)>=50?C.dc:C.dO
l=A.c("LIVE WIN RATE",a8,a8,a8,a8,a8,a8,A.l(a8,a8,b3?C.cC:C.cD,a8,a8,a8,a8,a8,a8,a8,a8,10.5,a8,a8,B.u,a8,a8,!0,a8,0.9,a8,a8,a8,a8,a8,a8),a8,a8,a8)
k=q?"No closed trades yet":B.i.a5(D.d_(h),0)+"%"
k=A.c(k,a8,a8,a8,a8,a8,a8,A.l(a8,a8,g,a8,a8,a8,a8,a8,a8,a8,a8,q?16:30,a8,a8,B.u,a8,a8,!0,a8,a8,a8,a8,a8,a8,a8,a8),a8,a8,a8)
j=i.h(0,"wins")
q=A.v(j==null?0:j)
j=i.h(0,"trades")
j=A.v(j==null?0:j)
q=A.E(A.x(A.a([l,B.au,k,A.c(q+" won out of "+j+" closed trades",a8,a8,a8,a8,a8,a8,A.l(a8,a8,b3?C.cC:C.cD,a8,a8,a8,a8,a8,a8,a8,a8,12,a8,a8,a8,a8,a8,!0,a8,a8,a8,a8,a8,a8,a8,a8),a8,a8,a8)],s),B.B,a8,B.e,B.h,0,B.p),1)
l=A.c("All time",a8,a8,a8,a8,a8,a8,A.l(a8,a8,b3?C.cC:C.cD,a8,a8,a8,a8,a8,a8,a8,a8,11,a8,a8,a8,a8,a8,!0,a8,a8,a8,a8,a8,a8,a8,a8),a8,a8,a8)
k=D.eT(D.d_(i.h(0,b1)),!0,!0)
if(D.d_(i.h(0,b1))>0)j=C.dc
else if(D.d_(i.h(0,b1))<0)j=C.dO
else j=b3?C.d_:B.c
j=A.c(k,a8,a8,a8,a8,a8,a8,A.l(a8,a8,j,a8,a8,a8,a8,a8,a8,a8,a8,18,a8,a8,B.F,a8,a8,!0,a8,a8,a8,a8,a8,a8,a8,a8),a8,a8,a8)
k=i.h(0,"wins")
k=A.v(k==null?0:k)
f=i.h(0,"losses")
f=A.v(f==null?0:f)
r.push(a7.Fd(b4,A.A(A.a([q,A.x(A.a([l,j,A.c(k+" W / "+f+" L",a8,a8,a8,a8,a8,a8,A.l(a8,a8,b3?C.cC:C.cD,a8,a8,a8,a8,a8,a8,a8,a8,11,a8,a8,a8,a8,a8,!0,a8,a8,a8,a8,a8,a8,a8,a8),a8,a8,a8)],s),B.dF,a8,B.e,B.h,0,B.p)],s),B.l,a8,B.e,B.h,0,a8,a8)))
r.push(a7.cBl(b4,u))
if(a7.a.c==="options")r.push(a7.cmF(b4,u))
if(p!=null){q=D.ex(b7.h(0,"mark"))
e=t.b(p.h(0,"option"))?D.ex(p.h(0,"option")):a8
t=p.h(0,"entryAt")
d=A.bh(A.v(t==null?"":t))
a0=d==null?a8:d.bL(18e8)
t=a0==null
a1=t?a8:a0.by(new A.V(Date.now(),0,!1))
a2=D.d_(q.h(0,"pnl"))
if(a1==null||a1.a<0)a3="0:00"
else{l=a1.a
a3=""+B.o.ao(l,6e7)+":"+B.a.b0(B.o.v(B.o.F(B.o.ao(l,1e6),60)),2,"0")}l=a7.a.c==="options"?B.aC:B.at
k=A.c("OPEN TRADE",a8,a8,a8,a8,a8,a8,A.l(a8,a8,b3?C.cC:C.cD,a8,a8,a8,a8,a8,a8,a8,a8,10.5,a8,a8,B.u,a8,a8,!0,a8,0.8,a8,a8,a8,a8,a8,a8),a8,a8,a8)
j=a7.a.c==="options"?B.aC:B.at
j=A.A(A.a([k,B.aY,a7.bbF("closes in "+a3+" at most",j)],s),B.l,a8,B.e,B.h,0,a8,a8)
k=e!=null
f=k?"SPY "+D.eT(D.d_(e.h(0,"strike")),!0,!1)+" call \xb7 expires "+D.bDL(e.h(0,"expiry")):A.v(p.h(0,"symbol"))
f=A.c(f,a8,a8,a8,a8,a8,a8,A.l(a8,a8,b3?C.d_:B.c,a8,a8,a8,a8,a8,a8,a8,a8,17,a8,a8,B.F,a8,a8,!0,a8,a8,a8,a8,a8,a8,a8,a8),a8,a8,a8)
if(k){k=D.eT(D.d_(p.h(0,b2)),!0,!1)
a4=D.eT(D.d_(q.h(0,"cost")),!0,!1)
q=J.z(q.h(0,"priced"),!1)?"no price yet":D.eT(D.d_(q.h(0,"price")),!0,!1)
q="Premium paid "+k+" x 100 = "+a4+" \xb7 now "+q}else q="$"+B.i.a5(D.d_(q.h(0,"cost")),0)+" bought at "+D.eT(D.d_(p.h(0,b2)),!0,!1)+" \xb7 now "+D.eT(D.d_(q.h(0,"price")),!0,!1)
q=A.c(q,a8,a8,a8,a8,a8,a8,A.l(a8,a8,b3?C.cC:C.cD,a8,a8,a8,a8,a8,a8,a8,a8,12,a8,a8,a8,a8,a8,!0,a8,a8,a8,a8,a8,a8,a8,a8),a8,a8,a8)
k=D.eT(a2,!0,!0)
a4=a2>=0
k=A.c(k,a8,a8,a8,a8,a8,a8,A.l(a8,a8,a4?C.dc:C.dO,a8,a8,a8,a8,a8,a8,a8,a8,26,a8,a8,B.u,a8,a8,!0,a8,a8,a8,a8,a8,a8,a8,a8),a8,a8,a8)
a4=a4?"winning right now":"losing right now"
k=A.A(A.a([k,B.aa,A.c(a4,a8,a8,a8,a8,a8,a8,A.l(a8,a8,b3?C.cC:C.cD,a8,a8,a8,a8,a8,a8,a8,a8,12,a8,a8,a8,a8,a8,!0,a8,a8,a8,a8,a8,a8,a8,a8),a8,a8,a8)],s),B.l,a8,B.e,B.h,0,a8,a8)
a4=D.hGl(p.h(0,"entryAt"))
t=t?"":" \xb7 hard close by "+D.a2Z(D.ai7(a0.ab()))+" ET"
r.push(a7.b3b(b4,l,A.x(A.a([j,B.O,f,B.bw,q,B.ak,k,A.c("Bought "+a4+t,a8,a8,a8,a8,a8,a8,A.l(a8,a8,b3?C.cC:C.cD,a8,a8,a8,a8,a8,a8,a8,a8,11.5,a8,a8,a8,a8,a8,!0,a8,a8,a8,a8,a8,a8,a8,a8),a8,a8,a8)],s),B.B,a8,B.e,B.h,0,B.p)))}t=b7.h(0,"lastNote")
a5=J.k(t==null?"":t)
t=b7.h(0,"lastNoteAt")
if(t==null)t=b7.h(0,"lastTickAt")
a6=A.bh(A.v(t==null?"":t))
if(J.z(b7.h(0,b0),!0))t=C.dc
else t=b3?C.cC:C.cD
t=A.W(L.Qi,t,a8,a8,a8,18)
q=J.z(b7.h(0,b0),!0)?"Checks every minute by itself":"Stopped: press Start to let it check every minute"
q=A.a([A.c(q,a8,a8,a8,a8,a8,a8,A.l(a8,a8,b3?C.d_:B.c,a8,a8,a8,a8,a8,a8,a8,a8,13,a8,a8,B.F,a8,a8,!0,a8,a8,a8,a8,a8,a8,a8,a8),a8,a8,a8)],s)
if(a5.length!==0){l=a6==null?"":D.a2Z(D.ai7(a6.ab()))+" ET \xb7 "
B.d.u(q,A.a([B.cN,A.c(l+a5,a8,a8,a8,a8,a8,a8,A.l(a8,a8,b3?C.cC:C.cD,a8,a8,a8,a8,a8,a8,a8,a8,12,a8,a8,a8,a8,1.3,!0,a8,a8,a8,a8,a8,a8,a8,a8),a8,a8,a8)],s))}r.push(a7.Fd(b4,A.A(A.a([t,B.aa,A.E(A.x(q,B.B,a8,B.e,B.h,0,B.p),1)],s),B.B,a8,B.e,B.h,0,a8,a8)))
r.push(a7.cJu(b4,u))
r.push(a7.bEX(b4))
r.push(a7.cy1(b4,u))
r.push(a7.Fd(b4,A.A(A.a([C.c5m,B.aa,A.E(A.c("Paper money only: no order is ever sent to Alpaca. Orders are disabled.",a8,a8,a8,a8,a8,a8,A.l(a8,a8,b3?C.cC:C.cD,a8,a8,a8,a8,a8,a8,a8,a8,11.5,a8,a8,a8,a8,1.3,!0,a8,a8,a8,a8,a8,a8,a8,a8),a8,a8,a8),1)],s),B.l,a8,B.e,B.h,0,a8,a8)))
b3=r}b3=A.Kk(A.cn(b3,a8,a8,C.ao8,a8,a8,B.ah,!1),a8,a7.gcgi())}return A.c5(a8,b6,A.p(a8,A.bo(!0,A.x(A.a([new A.D(B.hc,v,a8),A.E(b3,1)],s),B.l,a8,B.e,B.h,0,B.p),!0,!1,B.ag,!0,!0),B.f,a8,a8,new A.o(a8,a8,a8,a8,a8,new A.a7(B.aW,B.b0,B.x,w,a8,a8),B.m),a8,a8,a8,a8,a8,a8,a8,a8),a8,!1,!1,a8,a8)},
aAB(d,e){var w,v,u,t=this,s=null,r=J.z(e.h(0,"enabled"),!0)&&!J.z(e.h(0,"brakePaused"),!0),q=r?C.dO:C.dc
q=A.bp(q,s,s,s,s,s,s,s,new A.b9(A.n(999),B.a1),s,s,s)
w=t.r
if(!w)t.a.toString
v=w?s:new D.e7m(t,r)
if(w)w=B.rD
else w=A.W(r?B.vz:B.fO,s,s,s,s,s)
if(r)u="Stop "+(t.a.c==="options"?"Options":"Scalper")
else u="Start "+(t.a.c==="options"?"Options":"Scalper")
return new A.D(B.dU,new A.a6(1/0,52,A.db(w,s,A.c(u,s,s,s,s,s,s,B.mL,s,s,s),v,q),s),s)},
cBl(d,a0){var w,v,u,t,s,r=this,q=null,p="takeProfitUsd",o="stopLossUsd",n="maxHoldMin",m="exitCheckEveryMin",l=D.ex(a0.h(0,"settings")),k=D.ex(a0.h(0,"today")),j=new D.e7s(d),i=r.a.c==="options"?"+"+D.eT(D.d_(l.h(0,p)),!0,!1):"+"+B.i.a5(D.d_(l.h(0,"takeProfitPct")),0)+"% (+$"+B.i.a5(D.d_(l.h(0,p)),0)+")",h=r.a.c==="options"?"-"+D.eT(D.d_(l.h(0,o)),!0,!1):"-"+B.i.a5(D.d_(l.h(0,"stopLossPct")),0)+"% (-$"+B.i.a5(D.d_(l.h(0,o)),0)+")",g=A.W(B.mv,r.a.c==="options"?B.aC:B.at,q,q,q,18),f=d.a,e=x.p
g=A.A(A.a([g,B.bc,A.c("THE 30-MINUTE LAW",q,q,q,q,q,q,A.l(q,q,f?C.d_:B.c,q,q,q,q,q,q,q,q,12,q,q,B.u,q,q,!0,q,0.8,q,q,q,q,q,q),q,q,q)],e),B.l,q,B.e,B.h,0,q,q)
w=B.i.a5(D.d_(l.h(0,n)),0)
v=B.i.a5(D.d_(l.h(0,m)),0)
u=B.i.a5(D.d_(l.h(0,"hardCloseAtMin")),0)
w=A.c("Every trade closes within "+w+" minutes, win, lose or flat. Exits are checked every "+v+" minute, and the hard close sells at the last check before 30 minutes ("+u+" minutes held).",q,q,q,q,q,q,A.l(q,q,f?C.cC:C.cD,q,q,q,q,q,q,q,q,11.5,q,q,q,q,1.35,!0,q,q,q,q,q,q,q,q),q,q,q)
v=j.$2("Hard close",B.i.a5(D.d_(l.h(0,n)),0)+" min max")
u=j.$2("Exit checks","every "+B.i.a5(D.d_(l.h(0,m)),0)+" min")
f=A.A(A.a([v,B.bc,u,B.bc,j.$2("Each trade",r.a.c==="options"?"1 SPY call \u2264$"+B.i.a5(D.d_(l.h(0,"maxPremiumUsd")),0):"$"+B.i.a5(D.d_(l.h(0,"tradeUsd")),0))],e),B.l,q,B.e,B.h,0,q,q)
v=j.$3$c("Take profit",i,C.dc)
u=j.$3$c("Stop loss",h,C.dO)
t=k.h(0,"trades")
t=A.v(t==null?0:t)
s=l.h(0,"maxTrades")
return r.Fd(d,A.x(A.a([g,B.au,w,B.S,f,B.ak,A.A(A.a([v,B.bc,u,B.bc,j.$2("Trades today",t+" of "+A.v(s==null?"-":s))],e),B.l,q,B.e,B.h,0,q,q),B.ak,A.A(A.a([j.$2("Daily stop","-$"+B.i.a5(D.d_(l.h(0,"dailyStopUsd")),0)),B.bc,j.$2("Total brake","-$"+B.i.a5(D.d_(l.h(0,"totalBrakeUsd")),0)),B.bc,j.$2("Strength","+"+B.i.a5(D.d_(l.h(0,"strengthPct")),1)+"% in 15 min")],e),B.l,q,B.e,B.h,0,q,q)],e),B.B,q,B.e,B.h,0,B.p))},
cmF(d,e){var w,v,u,t,s,r,q,p,o,n=null,m=D.ex(e.h(0,"options"))
if(m.a===0)return B.bL
if(!J.z(m.h(0,"enabled"),!0)){w=m.h(0,"message")
w=J.k(w==null?"Options are not enabled on the paper account yet":w)
return this.agF(d,w,J.z(m.h(0,"enabled"),!1)?E.jx:B.b2)}v=D.ex(m.h(0,"preview"))
u=J.z(m.h(0,"fits"),!0)
w=d.a
t=A.c("SPY CALL IT WOULD CHOOSE NOW",n,n,n,n,n,n,A.l(n,n,w?C.cC:C.cD,n,n,n,n,n,n,n,n,10.5,n,n,B.u,n,n,!0,n,0.8,n,n,n,n,n,n),n,n,n)
s=u?"FITS":"TOO EXPENSIVE"
r=x.p
s=A.a([A.A(A.a([t,B.aY,this.bbF(s,u?C.dc:C.dO)],r),B.l,n,B.e,B.h,0,n,n),B.O],r)
if(v.a===0){t=m.h(0,"why")
t=t==null?n:J.k(t)
if(t==null)t="No contract found yet."
s.push(A.c(t,n,n,n,n,n,n,A.l(n,n,w?C.d_:B.c,n,n,n,n,n,n,n,n,13,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n))}else{t=D.eT(D.d_(v.h(0,"strike")),!0,!1)
q=D.bDL(v.h(0,"expiry"))
t=A.c("SPY "+t+" call \xb7 expires "+q,n,n,n,n,n,n,A.l(n,n,w?C.d_:B.c,n,n,n,n,n,n,n,n,16,n,n,B.F,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
q=D.eT(D.d_(v.h(0,"premium")),!0,!1)
p=D.eT(D.d_(v.h(0,"cost")),!0,!1)
o=D.eT(D.d_(m.h(0,"spot")),!0,!1)
q=A.c("Premium "+q+" a share x 100 = "+p+"  \xb7  SPY "+o,n,n,n,n,n,n,A.l(n,n,w?C.cC:C.cD,n,n,n,n,n,n,n,n,12,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
if(u)w="It fits the limit: on a passing setup it would buy this one."
else{w=m.h(0,"why")
w=J.k(w==null?"":w)}B.d.u(s,A.a([t,B.bw,q,B.au,A.c(w,n,n,n,n,n,n,A.l(n,n,u?C.dc:C.dO,n,n,n,n,n,n,n,n,12,n,n,n,n,1.3,!0,n,n,n,n,n,n,n,n),n,n,n)],r))}return this.Fd(d,A.x(s,B.B,n,B.e,B.h,0,B.p))},
cJu(a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=this,a2=null,a3="entryPrice",a4=x.g.a(a6.h(0,"trades"))
if(a4==null)a4=B.c1
w=x.f
a4=J.cV(a4,w)
a4=A.cE(a4,new D.e7u(),a4.$ti.k("M.E"),x.P)
v=A.B(a4,A.a3(a4).k("M.E"))
a4=a5.a
u=x.p
t=A.a([A.c("Pretend trades",a2,a2,a2,a2,a2,a2,A.l(a2,a2,a4?C.d_:B.c,a2,a2,a2,a2,a2,a2,a2,a2,16,a2,a2,B.F,a2,a2,!0,a2,a2,a2,a2,a2,a2,a2,a2),a2,a2,a2),B.ak],u)
if(v.length===0)t.push(A.c("No trades yet. This system is picky: it only takes strong setups.",a2,a2,a2,a2,a2,a2,A.l(a2,a2,a4?C.cC:C.cD,a2,a2,a2,a2,a2,a2,a2,a2,12.5,a2,a2,a2,a2,a2,!0,a2,a2,a2,a2,a2,a2,a2,a2),a2,a2,a2))
s=J.aR(a1.z?v:A.cS(v,0,A.dw(4,"count",x.S),A.U(v).c))
r=x.N
q=x.z
while(s.C()){p=s.gP(s)
o=J.a2(p)
n=J.z(o.h(p,"decision"),"would buy")
m=o.h(p,"details")
l=w.b(m)?A.a1(m,r,q):A.S(r,q)
if(w.b(l.h(0,"option"))){m=l.h(0,"option")
k=w.b(m)?A.a1(m,r,q):A.S(r,q)}else k=a2
j=l.h(0,"pnl")
if(!(typeof j=="number")){m=A.cw(A.v(j==null?"":j))
j=m==null?0:m}if(n)i=B.cd
else i=j>=0?C.dc:C.dO
m=k!=null
if(m){h=k.h(0,"strike")
if(!(typeof h=="number")){h=A.cw(A.v(h==null?"":h))
if(h==null)h=0}g="SPY "+D.eT(h,!0,!1)+" call"}else g=A.v(o.h(p,"asset"))
if(n)if(m){m=D.bDL(k.h(0,"expiry"))
h=l.h(0,a3)
if(!(typeof h=="number")){h=A.cw(A.v(h==null?"":h))
if(h==null)h=0}h="expires "+m+" \xb7 premium "+D.eT(h,!0,!1)+" x 100"
f=h}else{m=l.h(0,a3)
if(!(typeof m=="number")){m=A.cw(A.v(m==null?"":m))
if(m==null)m=0}m="at "+D.eT(m,!0,!1)
f=m}else{m=l.h(0,a3)
if(!(typeof m=="number")){m=A.cw(A.v(m==null?"":m))
if(m==null)m=0}m=D.eT(m,!0,!1)
h=l.h(0,"exitPrice")
if(!(typeof h=="number")){h=A.cw(A.v(h==null?"":h))
if(h==null)h=0}h=D.eT(h,!0,!1)
if(l.h(0,"heldMin")==null)e=""
else{e=l.h(0,"heldMin")
if(!(typeof e=="number")){e=A.cw(A.v(e==null?"":e))
if(e==null)e=0}e=B.i.a5(e,0)+" min \xb7 "}d=o.h(p,"reason")
d=J.k(d==null?"":d)
a0=B.a.cc(d,"(")
f=m+" to "+h+" \xb7 "+e+B.a.i(a0>0?B.a.aw(d,0,a0):d)}m=a4?C.pE:C.pD
h=i.j(0.14)
e=new A.aP(12,12)
h=A.p(a2,A.W(n?B.tN:B.rh,i,a2,a2,a2,18),B.f,a2,a2,new A.o(h,a2,a2,new A.bb(e,e,e,e),a2,a2,B.m),a2,36,a2,a2,a2,a2,a2,36)
e=n?"Bought":"Sold"
d=a4?C.d_:B.c
e=A.c(e+" "+g,a2,a2,a2,a2,a2,a2,new A.H(!0,d,a2,a2,a2,a2,13.5,B.F,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2),a2,a2,a2)
d=a4?C.cC:C.cD
d=A.c(f,a2,2,B.a2,a2,a2,a2,new A.H(!0,d,a2,a2,a2,a2,11.5,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2),a2,a2,a2)
p=o.h(p,"et_time")
p=J.k(p==null?"":p)
o=a4?C.cC:C.cD
p=A.x(A.a([e,d,A.c(p,a2,a2,a2,a2,a2,a2,new A.H(!0,o,a2,a2,a2,a2,10.5,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2),a2,a2,a2)],u),B.B,a2,B.e,B.h,0,B.p)
if(n){o=l.h(0,"amount")
if(!(typeof o=="number")){o=A.cw(A.v(o==null?"":o))
if(o==null)o=0}o="-"+D.eT(o,!0,!1)}else{o=l.h(0,"outValue")
if(!(typeof o=="number")){o=A.cw(A.v(o==null?"":o))
if(o==null)o=0}o="+"+D.eT(o,!0,!1)}e=a4?C.d_:B.c
o=A.a([A.c(o,a2,a2,a2,a2,a2,a2,new A.H(!0,e,a2,a2,a2,a2,13.5,B.F,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2),a2,a2,a2)],u)
if(!n){e=D.eT(j,!0,!0)
d=j>=0?C.dc:C.dO
o.push(A.c(e,a2,a2,a2,a2,a2,a2,new A.H(!0,d,a2,a2,a2,a2,12,B.F,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2),a2,a2,a2))}if(n){e=a4?C.cC:C.cD
o.push(A.c("put in",a2,a2,a2,a2,a2,a2,new A.H(!0,e,a2,a2,a2,a2,11,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2),a2,a2,a2))}t.push(A.p(a2,new A.c1(B.aK,B.e,B.h,B.l,a2,B.p,a2,0,A.a([h,B.ar,new A.bu(1,B.ba,p,a2),B.aa,A.x(o,B.dF,a2,B.e,B.h,0,B.p)],u),a2),B.f,a2,a2,new A.o(a2,a2,new A.bE(B.a1,B.a1,new A.ax(m,1,B.r,-1),B.a1),a2,a2,a2,B.m),a2,a2,a2,a2,B.wY,a2,a2,a2))}a4=v.length
if(a4>4)t.push(A.at(A.bM(!1,A.c(a1.z?"Show less":"Show all ("+a4+")",a2,a2,a2,a2,a2,a2,a2,a2,a2,a2),a2,a2,!0,a2,a2,a2,new D.e7v(a1),a2,a2),a2,a2,a2))
return a1.Fd(a5,A.x(t,B.B,a2,B.e,B.h,0,B.p))},
bEX(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=m.Q,j=m.e
j=k?j:A.cS(j,0,A.dw(4,"count",x.S),A.U(j).c).dk(0)
k=d.a
w=A.c("Activity",l,l,l,l,l,l,A.l(l,l,k?C.d_:B.c,l,l,l,l,l,l,l,l,16,l,l,B.F,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)
v=x.p
w=A.a([A.A(A.a([w,B.aY,A.c("newest first",l,l,l,l,l,l,A.l(l,l,k?C.cC:C.cD,l,l,l,l,l,l,l,l,11,l,l,l,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)],v),B.l,l,B.e,B.h,0,l,l),B.ak],v)
if(m.e.length===0)w.push(A.c("Nothing yet. Buys, sells and passing setups that were skipped show up here.",l,l,l,l,l,l,A.l(l,l,k?C.cC:C.cD,l,l,l,l,l,l,l,l,12.5,l,l,l,l,l,!0,l,l,l,l,l,l,l,l),l,l,l))
for(u=j.length,t=0;t<j.length;j.length===u||(0,A.I)(j),++t){s=j[t]
r=A.W(B.pR,k?C.cC:C.cD,l,l,l,7)
q=J.a2(s)
p=q.h(s,"decision")
p=A.v(p==null?"":p)
o=q.h(s,"asset")==null?"":" \xb7 "+A.v(q.h(s,"asset"))
n=k?C.d_:B.c
p=A.c(p+o,l,l,l,l,l,l,new A.H(!0,n,l,l,l,l,12.5,B.F,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l),l,l,l)
o=q.h(s,"reason")
o=J.k(o==null?"":o)
n=k?C.cC:C.cD
p=A.x(A.a([p,A.c(o,l,l,l,l,l,l,new A.H(!0,n,l,l,l,l,11.5,l,l,l,l,l,1.3,l,l,l,l,l,l,l,l,l,l,l,l,l),l,l,l)],v),B.B,l,B.e,B.h,0,B.p)
q=q.h(s,"et_time")
q=D.hJw(J.k(q==null?"":q))
o=k?C.cC:C.cD
w.push(new A.D(B.jX,new A.c1(B.aK,B.e,B.h,B.B,l,B.p,l,0,A.a([new A.D(G.P2,r,l),B.aa,new A.bu(1,B.ba,p,l),B.bc,A.c(q,l,l,l,l,l,l,new A.H(!0,o,l,l,l,l,10.5,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l),l,l,l)],v),l),l))}if(m.e.length>4)w.push(A.at(A.bM(!1,A.c(m.Q?"Show less":"Show all",l,l,l,l,l,l,l,l,l,l),l,l,!0,l,l,l,new D.e7l(m),l,l),l,l,l))
return m.Fd(d,A.x(w,B.B,l,B.e,B.h,0,B.p))},
cy1(d,e){var w,v,u,t,s,r,q,p,o,n,m=null,l=x.g.a(e.h(0,"rules"))
if(l==null)l=B.c1
l=J.b8(l,new D.e7p(),x.N)
w=A.B(l,l.$ti.k("aj.E"))
l=this.c
l.toString
l=A.Q(l).aGX(B.L)
v=d.a
u=A.c("The rules it follows",m,m,m,m,m,m,A.l(m,m,v?C.d_:B.c,m,m,m,m,m,m,m,m,15,m,m,B.F,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)
t=x.p
s=A.a([],t)
for(r=w.length,q=0;q<w.length;w.length===r||(0,A.I)(w),++q){p=w[q]
o=this.a.c==="options"?B.aC:B.at
o=A.c("\u2022  ",m,m,m,m,m,m,new A.H(!0,o,m,m,m,m,m,B.u,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m,m,m)
n=v?C.d_:B.c
s.push(new A.D(B.eH,new A.c1(B.aK,B.e,B.h,B.B,m,B.p,m,0,A.a([o,new A.bu(1,B.ba,A.c(p,m,m,m,m,m,m,new A.H(!0,n,m,m,m,m,12.5,m,m,m,m,m,1.35,m,m,m,m,m,m,m,m,m,m,m,m,m),m,m,m),m)],t),m),m))}return this.Fd(d,new A.ou(l,K.hfB(m,s,B.ag,m,m,m,!1,m,m,m,B.ag,u),m))},
b3b(d,e,f){var w=null,v=d.a,u=v?B.c.j(0.92):C.je,t=A.n(20),s=e==null?w:e.j(0.5)
if(s==null)v=v?B.c:C.oJ
else v=s
v=A.K(v,B.r,1)
s=A.a([new A.aa(0,B.H,d.gO8(),B.cw,14)],x.V)
return A.p(w,A.aG(!1,B.a3,!0,w,f,B.f,w,0,w,w,w,w,w,B.i5),B.f,w,w,new A.o(u,w,v,t,s,w,B.m),w,w,w,B.dU,B.bH,w,w,w)},
Fd(d,e){return this.b3b(d,null,e)},
agF(d,e,f){var w=null,v=f.j(0.12),u=A.n(16),t=A.K(f.j(0.45),B.r,1),s=A.W(B.QG,f,w,w,w,20)
return A.p(w,A.A(A.a([s,B.ar,A.E(A.c(e,w,w,w,w,w,w,A.l(w,w,d.a?C.d_:B.c,w,w,w,w,w,w,w,w,12.5,w,w,w,w,1.35,!0,w,w,w,w,w,w,w,w),w,w,w),1)],x.p),B.l,w,B.e,B.h,0,w,w),B.f,w,w,new A.o(v,w,t,u,w,w,B.m),w,w,w,B.dU,B.bg,w,w,w)},
bbF(d,e){var w=null,v=e.j(0.14),u=A.n(999)
return A.p(w,A.c(d,w,w,w,w,w,w,A.l(w,w,e,w,w,w,w,w,w,w,w,10,w,w,B.u,w,w,!0,w,0.5,w,w,w,w,w,w),w,w,w),B.f,w,w,new A.o(v,w,w,u,w,w,B.m),w,w,w,w,B.fo,w,w,w)},
a0O(d,e,f){var w=null,v=d.a,u=v?B.c.j(0.92):C.je,t=A.K(v?B.c:C.oJ,B.r,1)
return A.aG(!1,B.a3,!0,w,A.aM(!1,w,!0,A.p(w,A.W(e,v?C.d_:B.c,w,w,w,18),B.f,w,w,new A.o(w,w,t,w,w,w,B.a6),w,40,w,w,w,w,w,40),B.cJ,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),B.f,u,0,w,w,B.cJ,w,w,B.ai)}}
D.aCz.prototype={
R(){return new D.bhW()}}
D.bhW.prototype={
a_(){this.a3()
this.d=A.cZ(B.fv,new D.dii(this))},
t(){var w=this.d
if(w!=null)w.a1(0)
this.a2()},
B(d){var w=null,v=this.a.c*60,u=B.o.F(B.o.ao(new A.V(Date.now(),0,!1).ab().a,1000),v),t=u<15,s=v-u,r=t?"ENTER NOW":"Enter in "+B.o.ao(s,60)+":"+B.a.b0(B.o.v(B.o.F(s,60)),2,"0"),q=t?B.c:B.c.j(0.18),p=A.n(999),o=t?B.fE:B.mv
o=A.W(o,t?B.v:B.c,w,w,w,20)
return A.cT(w,A.A(A.a([o,B.bc,A.c(r,w,w,w,w,w,w,A.l(w,w,t?B.v:B.c,w,w,w,w,w,w,w,I.Ji,22,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),B.l,w,B.e,B.M,0,w,w),w,w,B.b_,new A.o(q,w,w,p,w,w,B.m),B.ia,w,w,w,w,B.HN,w,w,w)}}
D.cD.prototype={}
D.uv.prototype={}
D.XH.prototype={
R(){var w,v,u,t,s=null,r=x.N,q=x.z
q=A.J(["done",A.a([],x.s),"lessons",A.S(r,q)],r,q)
w=$.hkK
v=$.az()
u=A.mj(0,s,s)
t=A.a([],x.t)
return new D.aHq(q,new A.au(new A.bd(w,B.b6,B.aP),v),u,t,new A.au(B.ax,v),A.S(r,r),A.S(r,x.R),B.Z,s,s)}}
D.a_C.prototype={}
D.aHq.prototype={
gLj(){var w,v=this,u=v.d
if(u===$){v.a.toString
w=A.acy(null,0,3,v)
v.d!==$&&A.bF()
v.d=w
u=w}return u},
gK2(){var w=x.g.a(this.x.h(0,"done"))
if(w==null)w=B.c1
return J.b8(w,new D.eHl(),x.N).fC(0)},
a_(){var w,v,u,t=this
t.a3()
w=t.e=t.a.c
v=w==null
t.y=!v
t.ay=D.eI7(v?null:J.t(w,"fx"))
w=t.a.c
u=D.eI7(w==null?null:J.t(w,"markets"))
if(u.length!==0)t.f=u
t.r=new A.V(Date.now(),0,!1)
t.gLj().aU(0,new D.eId(t))
$.aM1=$.aM1+1
t.at.aU(0,new D.eIe(t))
if($.DB.length!==0||$.ahc)t.aCY()
if(!t.a.d){t.a0N()
t.Rg()
A.T0().bE(new D.eIf(t),x.H)
t.w=A.cZ(B.hb,new D.eIg(t))}},
t(){var w,v=this,u=v.w
if(u!=null)u.a1(0)
u=v.as
if(u!=null)u.a1(0)
v.gLj().t()
u=v.cy
w=$.az()
u.V$=w
u.W$=0
u=v.at
u.V$=w
u.W$=0
v.ax.t()
D.hEw()
v.bBx()},
a0N(){return this.c7a()},
c7a(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f
var $async$a0N=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:g={}
g.a=null
t=4
w=7
return A.b(A.aB(),$async$a0N)
case 7:q=e
p=A.aW(J.t(q.a,"ngmy_signal_grid_academy_v2"))
n=p!=null?g.a=A.a1(x.f.a(B.V.aP(0,p,null)),x.N,x.z):null
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
return A.b(A.fP(A.J(["action","paLearnGet"],n,m),!1,!1,!1,!1,B.hb),$async$a0N)
case 8:k=e
if(r.c==null){w=1
break}j=k==null?null:J.t(k,"progress")
i=x.f
if(i.b(j)){k.toString
h=A.a1(i.a(J.t(k,"progress")),n,m)}else h=null
r.l(new D.eHG(g,r,k,h))
if(h==null&&g.a!=null)r.aCO()
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$a0N,v)},
aCO(){var w=this.as
if(w!=null)w.a1(0)
this.as=A.cz(R.CY,new D.eHR(this))},
aea(d){return this.c6h(d)},
c6h(d){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$aea=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=B.d.cw(C.Ei,new D.eHo(u))
u.l(new D.eHp(u,d))
u.aCO()
t=B.d.cw(C.Ei,new D.eHq(u))
w=!r&&t&&u.c!=null?2:3
break
case 2:s=u.c
s.toString
w=4
return A.b(A.ce(null,null,!0,null,new D.eHr(u),s,null,!0,!0,x.H),$async$aea)
case 4:case 3:return A.h(null,v)}})
return A.i($async$aea,v)},
Rg(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Rg=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(A.fP(A.J(["action","paSignals"],x.N,x.z),!1,!1,!1,!1,B.wV),$async$Rg)
case 3:r=e
if(t.c==null||r==null||!J.z(J.t(r,"ok"),!0)){w=1
break}s=J.a2(r)
t.l(new D.eHQ(t,D.eI7(s.h(r,"fx")),D.eI7(s.h(r,"markets")),r))
t.chd()
case 1:return A.h(u,v)}})
return A.i($async$Rg,v)},
chd(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f="decision",e=A.a([],x.s)
for(w=h.gaam(),v=w.length,u=h.db,t=x.N,s=x.z,r=x.f,q=h.dx,p=0;p<w.length;w.length===v||(0,A.I)(w),++p){o=w[p]
n=J.a2(o)
m=J.k(n.h(o,"asset"))
n=n.h(o,"reading")
l=r.b(n)?A.a1(n,t,s):A.S(t,s)
k=B.d.q(C.aCh,l.h(0,f))
if(l.h(0,f)==null||J.z(l.h(0,f),"NO_DATA")||J.z(l.h(0,f),"CLOSED"))j="unknown"
else if(k){n=J.z(l.h(0,"dir"),"up")?"up":"down"
j=n}else j="no direction"
i=u.h(0,m)
if(i!=null&&i!==j&&j!=="unknown"&&i!=="unknown"){q.n(0,m,new A.bt0(new A.V(Date.now(),0,!1),i,j))
e.push(m+" now "+j.toUpperCase())}u.n(0,m,j)}q.bq(q,new D.eHH())
if(e.length!==0&&h.c!=null){h.l(new D.eHI())
w=h.c.K(x.q).f
t=A.cS(e,0,A.dw(3,"count",x.S),t).aL(0," \xb7 ")
v=e.length
v=v>3?" and "+(v-3)+" more":""
w.T(A.b3(g,g,g,B.i0,g,B.t,g,A.c("Signal changed: "+t+v,g,g,g,g,g,g,g,g,g,g),g,B.lw,g,g,g,g,g,g,g,g,g,g))}},
gaam(){var w=A.B(this.gyD(),x.P)
B.d.u(w,this.ay)
return w},
gyD(){var w=this.f
if(w==null){w=this.e
w=D.fBt(D.ex(D.ex(w==null?null:J.t(w,"state")).h(0,"snapshot")))}return w},
gcEp(){var w=this.gyD(),v=A.U(w).k("X<1>"),u=A.B(new A.X(w,new D.eI5(),v),v.k("M.E"))
if(u.length===0)return this.gyD().length===0?null:B.d.gH(this.gyD())
B.d.b_(u,new D.eI6())
return B.d.gH(u)},
c6O(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,a0=" dollars. It sells at +50 or -50 dollars.",a1=e.e,a2=D.ex(a1==null?d:J.t(a1,"state"))
a1=x.f
w=a1.b(a2.h(0,"shadow"))?D.ex(a2.h(0,"shadow")):d
v=e.e
u=D.ex(v==null?d:J.t(v,"today"))
v=e.e
t=D.ex(v==null?d:J.t(v,"record"))
v=e.fr
if(!(v.length!==0)){v=e.e
v=v==null?d:J.t(v,"nowEt")
if(v==null)v="unknown"}v="LIVE DATA from the NGMY paper trading agent (Eastern Time now: "+A.v(v)+"):\n"
if(e.e!=null){s=J.z(a2.h(0,"enabled"),!0)?"running":"stopped"
r=J.z(a2.h(0,"brakePaused"),!0)?", paused by the 25 dollar brake":""
q=D.eT(D.d_(a2.h(0,"totalPnl")),!0,!0)
p=D.eT(D.d_(u.h(0,"day_pnl")),!0,!0)
o=t.h(0,"wins")
o=A.v(o==null?0:o)
n=t.h(0,"losses")
v+="Agent: "+s+r+". Pretend P/L all time "+q+", today "+p+", wins "+o+", losses "+A.v(n==null?0:n)+".\n"}if(e.e==null)a1=v
else if(w!=null){m=D.d_(J.t(B.d.dz(e.gyD(),new D.eHu(w),new D.eHv()),"price"))
l=D.d_(w.h(0,"entryPrice"))
k=a1.b(w.h(0,"option"))?D.ex(w.h(0,"option")):d
a1=e.e
j=D.ex(D.ex(D.ex(a1==null?d:J.t(a1,"state")).h(0,"snapshot")).h(0,"held"))
i=j.h(0,"pnl")==null?d:D.d_(j.h(0,"pnl"))
h=i==null?"unknown":B.i.a5(i,2)
a1=v+((k!=null?"Open pretend trade: 1 SPY call option, strike "+B.i.a5(D.d_(k.h(0,"strike")),0)+", expires "+A.v(k.h(0,"expiry"))+", premium paid "+B.i.a5(l,2)+" a share ("+B.i.a5(D.d_(k.h(0,"cost")),2)+" dollars). Win or loss now: "+h+a0:"Open pretend trade: "+A.v(w.h(0,"symbol"))+", bought at "+B.i.a5(l,2)+", now "+B.i.a5(m,2)+". Win or loss now: "+h+a0)+"\n")}else a1=v+"No open pretend trade.\n"
g=new D.eHw()
a1+="Agent markets (5-minute candles; fast line = 9-candle average, slow = 21-candle average; strength 0 bearish to 100 bullish):\n"
for(v=e.gyD(),s=v.length,f=0;f<v.length;v.length===s||(0,A.I)(v),++f)a1+=A.v(g.$1(v[f]))+"\n"
v=e.ay
s=v.length
if(s!==0){a1+="Forex pairs (real interbank prices, 1-minute candles, signals only; the agent does not trade them; OTC prices at brokers differ):\n"
for(f=0;f<v.length;v.length===s||(0,A.I)(v),++f)a1+=A.v(g.$1(v[f]))+"\n"}return a1.charCodeAt(0)==0?a1:a1},
K1(d){return this.bHt(d)},
bHt(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j
var $async$K1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:j=B.a.i(d)
if(j.length===0||$.ahc){w=1
break}t.at.bN(0,B.ci)
t.l(new D.eHh(t,j))
t.aCY()
s=$.DB.length
if(s>1){s=B.d.dt($.DB,Math.max(0,s-9),s-1)
r=new A.O(s,new D.eHi(),A.U(s).k("O<1,m>")).aL(0,"\n")}else r=""
s=t.e
s=s==null?null:J.t(s,"rules")
x.g.a(s)
if(s==null)s=t.dy
q=x.N
p=J.b8(s,new D.eHj(),q).aL(0,"\n")
s=t.c6O()
o=r.length===0?"":"\nCONVERSATION SO FAR:\n"+r+"\n"
n=$.fo1
w=t.a.d?3:5
break
case 3:m="Preview mode: the tutor answers here using the live readings."
w=4
break
case 5:w=6
return A.b(A.fP(A.J(["action","chat","prompt",'You are the NGMY Signal Grid trading tutor. You teach a complete beginner how trading works, using the live market data and the rules of the NGMY paper trading agent below.\nHow to answer:\n- Plain, friendly, simple English. Short sentences. No jargon without explaining it. Usually under 170 words.\n- When the question is about a market or "right now", use the LIVE DATA and quote the real numbers (price, trend, strength, RSI, last hour), then explain what they mean and what the agent\'s rules say.\n- Say clearly whether a market looks bullish, bearish or sideways and why, and what would need to happen for a buy or sell signal under the agent\'s rules.\n- This is practice with pretend (paper) money. You may explain what the rules signal, but never promise profit, never say a price will surely go up or down, and never tell the student to trade real or borrowed money. Remind them briefly when it fits that signals can fail and the stop loss keeps losses small.\n- No markdown headings or tables. You may use short lines starting with "- ".\n\nAGENT RULES:\n'+p+"\n\n"+s+"\n"+o+"\nStudent: "+j+"\nTutor:"],q,x.z),!1,!1,!1,!1,B.nV),$async$K1)
case 6:l=f
s=l==null
if(s)k=null
else{q=J.t(l,"text")
q=q==null?null:B.a.i(J.k(q))
k=q}if(k==null)k=""
if(k.length!==0){s=A.aL(k,"**","")
q=A.ag("^#+\\s*",!0,!1,!0,!1)
m=A.aL(s,q,"")}else{s=s?null:J.t(l,"error")
m=J.k(s==null?"The tutor could not answer just now. Please try again.":s)}case 4:if(n!==$.fo1){w=1
break}$.DB.push(new D.a_C(!1,m))
$.ahc=!1
if(t.c==null){w=1
break}t.l(new D.eHk())
t.aCY()
case 1:return A.h(u,v)}})
return A.i($async$K1,v)},
aCY(){$.aU.U$.push(new D.eHS(this))},
aR0(d){this.gLj().C4(2)
this.K1(d)},
B(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=A.Q(a0).ax.a===B.dg,f=new D.Rm(g),e=g?C.t2:C.t0,d=g?C.t2:C.t0
d=A.a([d,g?C.O_:C.NT],x.O)
w=i.a0O(f,B.eB,new D.eI9(a0))
v=A.c("Trading Academy",h,h,h,h,h,h,A.l(h,h,g?C.d_:B.c,h,h,h,h,h,h,h,h,17,h,h,B.F,h,h,!0,h,h,h,h,h,h,h,h),h,h,h)
u=x.p
v=A.A(A.a([w,B.ar,A.E(A.x(A.a([v,A.c("Lessons, live signals and a tutor",h,h,h,h,h,h,A.l(h,h,g?C.cC:C.cD,h,h,h,h,h,h,h,h,11.5,h,h,h,h,h,!0,h,h,h,h,h,h,h,h),h,h,h)],u),B.B,h,B.e,B.h,0,B.p),1),A.p(h,C.fod,B.f,h,h,new A.o(C.dc.j(0.14),h,h,A.n(999),h,h,B.m),h,h,h,h,B.fN,h,h,h)],u),B.l,h,B.e,B.h,0,h,h)
w=g?C.O6:C.NX
t=A.n(999)
s=A.a([],u)
for(r=[C.fej,C.fcx,C.fdf],q=r.length,p=0;p<q;++p){o={}
n=r[p]
o.a=null
o.a=n.a
m=i.gLj().d===o.a
if(m)l=g?C.mY:B.c
else l=B.L
k=new A.aP(999,999)
if(m)j=g?B.c:C.mY
else j=g?C.cC:C.cD
j=A.W(n.c,j,h,h,h,15)
if(m)m=g?B.c:C.mY
else m=g?C.cC:C.cD
s.push(new A.bu(1,B.ba,A.aA(h,A.cT(h,new A.c1(B.aK,B.b9,B.h,B.l,h,B.p,h,0,A.a([j,B.e3,new A.d0(1,B.ce,A.c(n.b,h,h,B.a2,h,h,h,new A.H(!0,m,h,h,h,h,12.5,B.F,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h),h,h,h),h)],u),h),h,h,B.b_,new A.o(l,h,h,new A.bb(k,k,k,k),h,h,B.m),B.a3,h,h,h,h,B.wY,h,h,h),B.y,!1,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,new D.eIa(o,i),h,h,h,h,h,h,!1,B.a4),h))}g=A.p(h,A.A(s,B.l,h,B.e,B.h,0,h,h),B.f,h,h,new A.o(w,h,h,t,h,h,B.m),h,h,h,h,B.eA,h,h,h)
w=i.gLj()
return A.c5(h,e,A.p(h,A.bo(!0,A.x(A.a([new A.D(C.bGf,v,h),new A.D(B.ao9,g,h),A.E(A.baC(A.a([i.c6l(f),i.cDu(f),i.bHz(f)],u),w,h),1)],u),B.l,h,B.e,B.h,0,B.p),!0,!1,B.ag,!0,!0),B.f,h,h,new A.o(h,h,h,h,h,new A.a7(B.aW,B.b0,B.x,d,h,h),B.m),h,h,h,h,h,h,h,h),h,!1,!1,h,h)},
a0O(d,e,f){var w=null,v=d.a,u=v?B.c.j(0.92):C.je,t=A.K(v?B.c:C.oJ,B.r,1)
return A.aG(!1,B.a3,!0,w,A.aM(!1,w,!0,A.p(w,A.W(e,v?C.d_:B.c,w,w,w,18),B.f,w,w,new A.o(w,w,t,w,w,w,B.a6),w,40,w,w,w,w,w,40),B.cJ,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),B.f,u,0,w,w,B.cJ,w,w,B.ai)},
c6l(d){var w,v=null,u=new A.X(C.Ei,new D.eHt(this),x.E).gJ(0),t=A.n(24),s=x.p
s=A.a([A.p(v,A.x(A.a([C.heO,B.au,C.fWp,B.aA,A.bx(A.n(9),A.jE(B.c.j(0.18),v,v,8,v,u/10,B.afe),B.aq),B.ak,A.c(""+u+" of 10 lessons done",v,v,v,v,v,v,B.acF,v,v,v)],s),B.B,v,B.e,B.h,0,B.p),B.f,v,v,new A.o(v,v,v,t,v,C.cef,B.m),v,v,v,v,B.f9,v,v,v),B.aA],s)
for(w=0;w<10;++w)s.push(this.c6j(d,w))
s.push(B.ak)
s.push(A.c("Practice with pretend money. Signals and lessons are for learning; markets can always surprise.",v,v,v,v,v,v,A.l(v,v,d.a?C.cC:C.cD,v,v,v,v,v,v,v,v,11,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),B.K,v,v))
return A.cn(s,v,v,C.aod,v,v,B.ah,!1)},
c6j(d,e){var w,v,u,t=null,s=C.Ei[e],r=this.gK2().q(0,s.a),q=d.a,p=q?B.c.j(0.92):C.je,o=A.n(20),n=A.K(q?B.c:C.oJ,B.r,1),m=A.a([new A.aa(0,B.H,d.gO8(),B.hR,14)],x.V),l=A.n(15)
l=A.p(t,A.W(s.e,B.c,t,t,t,t),B.f,t,t,new A.o(s.f,t,t,l,t,t,B.m),t,46,t,t,t,t,t,46)
w=A.c("Lesson "+(e+1)+" \xb7 "+s.d+" min",t,t,t,t,t,t,A.l(t,t,q?C.cC:C.cD,t,t,t,t,t,t,t,t,11,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)
v=A.c(s.b,t,t,t,t,t,t,A.l(t,t,q?C.d_:B.c,t,t,t,t,t,t,t,t,15,t,t,B.F,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)
u=x.p
v=A.E(A.x(A.a([w,v,A.c(s.c,t,t,t,t,t,t,A.l(t,t,q?C.cC:C.cD,t,t,t,t,t,t,t,t,12,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],u),B.B,t,B.e,B.h,0,B.p),1)
w=r?B.eb:B.eM
if(r)q=C.dc
else q=q?C.cC:C.cD
return A.aA(t,A.p(t,A.A(A.a([l,B.bb,v,A.W(w,q,t,t,t,t)],u),B.l,t,B.e,B.h,0,t,t),B.f,t,t,new A.o(p,t,n,o,m,t,B.m),t,t,t,B.d7,B.bH,t,t,t),B.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new D.eHs(this,s),t,t,t,t,t,t,!1,B.a4)},
clE(d){var w=this.c
w.toString
A.a8(w,!1).cb(A.ea(new D.eHO(this,d),!1,null,x.H))},
c6S(c1,c2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6=this,b7=null,b8="reading",b9="rsi",c0=b6.gcEp()
if(c0==null)return A.c("Live example appears once the markets have loaded.",b7,b7,b7,b7,b7,b7,A.l(b7,b7,c1.a?C.cC:C.cD,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,!0,b7,b7,b7,b7,b7,b7,b7,b7),b7,b7,b7)
w=J.a2(c0)
v=J.k(w.h(c0,"asset"))
u=D.bF5(c0)
t=D.ex(w.h(c0,b8))
s=D.d_(w.h(c0,"price"))
r=new D.eHx(u,c1,s)
q=new D.eHF(c1)
switch(c2){case"basics":p=u.length!==0?D.d_(J.t(B.d.gH(u),"c")):s
o=p===0?100:100*s/p
w=q.$1("Right now "+v+" is "+D.eT(s,!0,!1)+". About 4 hours ago it was "+D.eT(p,!0,!1)+".")
n=D.eT(o,!0,!1)
m=o>=100?"a win of":"a loss of"
return A.x(A.a([w,B.O,q.$1("If you had put $100 into "+v+" then, it would be worth "+n+" now: "+m+" "+D.eT(Math.abs(o-100),!0,!1)+". That difference is your profit or loss.")],x.p),B.B,b7,B.e,B.h,0,B.p)
case"candles":l=u.length!==0?B.d.gal(u):A.S(x.N,x.z)
w=J.a2(l)
n=D.d_(w.h(l,"c"))
m=D.d_(w.h(l,"o"))
k=r.$2$last$lines(24,!1)
j=D.eT(D.d_(w.h(l,"o")),!0,!1)
i=D.eT(D.d_(w.h(l,"c")),!0,!1)
n=n>=m?"GREEN: buyers won those 5 minutes":"YELLOW: sellers won those 5 minutes"
return A.x(A.a([k,B.O,q.$1("The last finished "+v+" candle opened at "+j+" and closed at "+i+", so it is "+n+". Its high was "+D.eT(D.d_(w.h(l,"h")),!0,!1)+" and its low "+D.eT(D.d_(w.h(l,"l")),!0,!1)+".")],x.p),B.B,b7,B.e,B.h,0,B.p)
case"trend":w=x.N
h=A.S(w,x.S)
for(n=b6.gyD(),m=n.length,k=x.z,j=x.f,g=0;g<n.length;n.length===m||(0,A.I)(n),++g){i=J.t(n[g],b8)
i=(j.b(i)?A.a1(i,w,k):A.S(w,k)).h(0,"bias")
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
return A.x(A.a([w,B.O,q.$1(v+" is "+n.toUpperCase()+" right now. Across the markets:"+m+" bullish, "+k+" bearish, "+j+" sideways.")],x.p),B.B,b7,B.e,B.h,0,B.p)
case"ma":e=D.d_(w.h(c0,"fast"))
d=D.d_(w.h(c0,"slow"))
w=r.$0()
n=D.eT(e,!0,!1)
m=D.eT(d,!0,!1)
k=e>=d
j=k?"ABOVE":"BELOW"
k=k?"UP":"DOWN"
return A.x(A.a([w,B.O,q.$1("On "+v+" the pink fast line is at "+n+" and the purple slow line at "+m+". The fast line is "+j+" the slow line, so the short-term trend is "+k+".")],x.p),B.B,b7,B.e,B.h,0,B.p)
case"cross":w=b6.gyD()
n=A.U(w)
m=n.k("cM<1,@>")
a0=A.B(new A.cM(new A.X(w,new D.eHy(),n.k("X<1>")),new D.eHz(),m),m.k("M.E"))
w=b6.gyD()
n=A.U(w)
m=n.k("cM<1,@>")
a1=A.B(new A.cM(new A.X(w,new D.eHA(),n.k("X<1>")),new D.eHB(),m),m.k("M.E"))
w=r.$0()
if(a0.length!==0)n="Fresh BUY crosses right now: "+B.d.aL(a0,", ")+". On its next automatic check the agent would buy if it holds nothing and it is the market traded today."
else n="No fresh buy cross in any open market right now. "+(a1.length!==0?"Fresh sell crosses: "+B.d.aL(a1,", ")+". ":"")+"The agent simply waits; no signal means no trade."
return A.x(A.a([w,B.O,q.$1(n)],x.p),B.B,b7,B.e,B.h,0,B.p)
case"rsi":w=b6.gyD()
n=A.U(w).k("X<1>")
a2=A.B(new A.X(w,new D.eHC(),n),n.k("M.E"))
w=x.p
n=A.a([],w)
for(m=a2.length,k=c1.a,j=x.N,i=x.z,a3=x.f,a4=x.c,g=0;g<a2.length;a2.length===m||(0,A.I)(a2),++g){a5=a2[g]
a6=J.a2(a5)
a7=J.k(a6.h(a5,"asset"))
a8=k?C.d_:B.c
a7=A.c(a7,b7,b7,b7,b7,b7,b7,new A.H(!0,a8,b7,b7,b7,b7,12,B.F,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7),b7,b7,b7)
a8=new A.aP(9,9)
a9=a6.h(a5,b8)
a9=(a3.b(a9)?A.a1(a9,j,i):A.S(j,i)).h(0,b9)
if(!(typeof a9=="number")){a9=A.cw(A.v(a9==null?"":a9))
if(a9==null)a9=0}b0=k?C.O6:C.NX
b1=a6.h(a5,b8)
b1=(a3.b(b1)?A.a1(b1,j,i):A.S(j,i)).h(0,b9)
if(!(typeof b1=="number")){b1=A.cw(A.v(b1==null?"":b1))
if(b1==null)b1=0}if(b1>=70)b1=C.dO
else{b1=a6.h(a5,b8)
b1=(a3.b(b1)?A.a1(b1,j,i):A.S(j,i)).h(0,b9)
if(!(typeof b1=="number")){b1=A.cw(A.v(b1==null?"":b1))
if(b1==null)b1=0}b1=b1<=30?B.cE:C.dc}b1=A.jE(b0,b7,b7,8,b7,a9/100,new A.kT(b1,a4))
a6=a6.h(a5,b8)
a6=(a3.b(a6)?A.a1(a6,j,i):A.S(j,i)).h(0,b9)
if(!(typeof a6=="number")){a6=A.cw(A.v(a6==null?"":a6))
if(a6==null)a6=0}a6=B.i.a5(a6,0)
a9=k?C.d_:B.c
n.push(new A.D(B.cy,new A.c1(B.aK,B.e,B.h,B.l,b7,B.p,b7,0,A.a([new A.a6(70,b7,a7,b7),new A.bu(1,B.ba,new A.nh(new A.bb(a8,a8,a8,a8),B.aq,b1,b7),b7),B.aa,new A.a6(26,b7,A.c(a6,b7,b7,b7,b7,b7,b7,new A.H(!0,a9,b7,b7,b7,b7,12,B.F,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7),b7,b7,b7),b7)],w),b7),b7))}n.push(q.$1("Red bars are above 70 (stretched), blue below 30 (oversold), green in between (healthy)."))
return A.x(n,B.B,b7,B.e,B.h,0,B.p)
case"risk":return A.x(A.a([q.$1("Every agent trade is about $100 (of a stock on weekdays, of a coin on weekends). "+v+" is "+D.eT(s,!0,!1)+" right now."),B.ak,q.$1("- Take profit: it sells when the trade is up $50"),q.$1("- Stop loss: it sells when the trade is down $50"),B.ak,q.$1("Win 5 and lose 5 of 10 trades: 5 x 50 - 5 x 50 = $0.00. That is break even. Win 6 of 10 and you are up $100.")],x.p),B.B,b7,B.e,B.h,0,B.p)
case"brakes":w=b6.e
if(w==null)return q.$1('Try it yourself: before your next practice day, write down "I stop after losing $50 today". If three trades in a row lose, close the app and come back tomorrow. That is exactly what the agent does.')
b2=D.ex(J.t(w,"state"))
w=b6.e
w=D.eT(D.d_(D.ex(w==null?b7:J.t(w,"today")).h(0,"day_pnl")),!0,!0)
n=D.eT(D.d_(b2.h(0,"totalPnl")),!0,!0)
m=J.z(b2.h(0,"brakePaused"),!0)?"The brake is ON right now.":"Both brakes are off, it can keep trading."
return q.$1("Today the agent is at "+w+" (the daily stop is -$50) and "+n+" all time (the brake is -$100)."+m)
case"hours":if(b6.f!=null)b3=b6.fx
else{w=b6.e
b3=J.z(D.ex(w==null?b7:J.t(w,"market")).h(0,"stockOpen"),!0)}b4=B.d.aR(b6.ay,new D.eHD())
w=b3?"OPEN":"CLOSED"
n=b4?"OPEN":"CLOSED"
return q.$1("Right now the US stock market is "+w+", the forex market is "+n+", and crypto is open, as always.")
case"practice":w=b6.e
if(w==null){w=b6.gaam()
return q.$1("Right now "+new A.X(w,new D.eHE(),A.U(w).k("X<1>")).gJ(0)+" of "+b6.gaam().length+" markets have signals that worked at least half the time lately. That is why a journal and many trades matter: some markets suit a method, others do not.")}b5=D.ex(J.t(w,"record"))
w=b5.h(0,"trades")
w=A.v(w==null?0:w)
n=b5.h(0,"wins")
n=A.v(n==null?0:n)
m=b5.h(0,"losses")
return q.$1("The agent journal so far: "+w+" finished pretend trades, "+n+" wins and "+A.v(m==null?0:m)+" losses. Keep watching until there are at least 20 before judging it.")}return B.bL},
cDu(a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0=null,a1="asset",a2=B.a.i(d.ch),a3=d.gaam(),a4=A.U(a3).k("X<1>"),a5=A.B(new A.X(a3,new D.eHW(d,a2.toLowerCase()),a4),a4.k("M.E"))
B.d.b_(a5,new D.eHX(d))
w=new D.eI4()
a2=A.U(a5).k("X<1>")
v=new A.X(a5,new D.eHY(w),a2).gJ(0)
u=new A.X(a5,new D.eHZ(w),a2).gJ(0)
a2=a5.length
if(d.r==null)t=0
else{s=Date.now()
r=d.r
r.toString
t=B.o.ao(new A.V(s,0,!1).by(r).a,1e6)}if(t<20)q="just now"
else q=t<60?""+t+" s ago":""+B.o.ao(t,60)+" min ago"
s=x.p
r=A.a([],s)
for(p=a6.a,o=0;o<4;++o){n=C.d6j[o]
if(d.cx===n)m=p?C.mY:B.c
else m=p?B.c.j(0.92):C.je
l=new A.aP(999,999)
k=new A.ax(p?C.pE:C.pD,1,B.r,-1)
j=n==="All"?"All "+a3.length:n+" "+new A.X(a3,new D.eI_(n),a4).gJ(0)
if(d.cx===n)i=p?B.c:C.mY
else i=p?C.d_:B.c
B.d.u(r,A.a([A.aA(a0,A.p(a0,A.c(j,a0,a0,a0,a0,a0,a0,new A.H(!0,i,a0,a0,a0,a0,12,B.F,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0),a0,a0,a0),B.f,a0,a0,new A.o(m,a0,new A.bE(k,k,k,k),new A.bb(l,l,l,l),a0,a0,B.m),a0,a0,a0,a0,C.bGp,a0,a0,a0),B.y,!1,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,new D.eI0(d,n),a0,a0,a0,a0,a0,a0,!1,B.a4),B.bc],s))}a4=A.E(A.cb(A.A(r,B.l,a0,B.e,B.h,0,a0,a0),B.t,a0,B.y,a0,a0,a0,a0,a0,B.aK),1)
r=d.CW?B.cz:B.eN
r=A.a([A.A(A.a([a4,B.bc,d.a0O(a6,r,new D.eI1(d))],s),B.l,a0,B.e,B.h,0,a0,a0)],s)
if(d.CW){a4=A.l(a0,a0,p?C.d_:B.c,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,!0,a0,a0,a0,a0,a0,a0,a0,a0)
m=A.l(a0,a0,p?C.cC:C.cD,a0,a0,a0,a0,a0,a0,a0,a0,13,a0,a0,a0,a0,a0,!0,a0,a0,a0,a0,a0,a0,a0,a0)
l=A.W(B.eN,p?C.cC:C.cD,a0,a0,a0,a0)
j=p?B.c.j(0.92):C.je
i=A.n(999)
h=p?C.pE:C.pD
g=A.n(999)
f=p?C.pE:C.pD
B.d.u(r,A.a([B.S,A.aN(a0,B.Z,!0,a0,!0,B.t,a0,A.aO(),d.cy,a0,a0,a0,a0,a0,2,A.bC(a0,new A.b6(4,i,new A.ax(h,1,B.r,-1)),a0,B.f8,a0,a0,a0,a0,!0,new A.b6(4,g,new A.ax(f,1,B.r,-1)),a0,a0,a0,a0,a0,j,!0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,m,"Search a market, for example EUR/USD, GBP or Bitcoin",a0,a0,a0,a0,a0,a0,a0,a0,a0,!0,!0,!1,a0,l,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0),B.y,!0,a0,!0,a0,!1,a0,B.al,a0,a0,a0,a0,a0,a0,a0,a0,a0,1,a0,a0,!1,"\u2022",a0,new D.eI2(d),a0,a0,a0,!1,a0,a0,!1,a0,!0,a0,B.ae,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a4,!0,B.a7,a0,B.ao,a0,a0,a0,a0)],s))}r.push(B.af)
r.push(d.bGd(a6))
r.push(A.A(A.a([A.E(d.av4(a6,"Going up",v,C.dc,B.mw),1),B.aa,A.E(d.av4(a6,"Going down",u,C.dO,B.QW),1),B.aa,A.E(d.av4(a6,"No direction",a2-v-u,E.jx,C.asy),1)],s),B.l,a0,B.e,B.h,0,a0,a0))
r.push(B.O)
r.push(A.A(A.a([C.c_V,B.e3,new A.d0(1,B.ce,A.c("Live \xb7 updated "+q+" \xb7 checks every 20 seconds, changes are flagged at once",a0,a0,a0,a0,a0,a0,A.l(a0,a0,p?C.cC:C.cD,a0,a0,a0,a0,a0,a0,a0,a0,11,a0,a0,a0,a0,a0,!0,a0,a0,a0,a0,a0,a0,a0,a0),B.K,a0,a0),a0)],s),B.l,a0,B.b9,B.h,0,a0,a0))
a2=d.cx
if(a2==="All"||a2==="Forex"){a2=E.jx.j(0.12)
a4=A.n(16)
m=A.K(E.jx.j(0.45),B.r,1)
B.d.u(r,A.a([B.S,A.p(a0,A.c('Forex uses real market prices on 1-minute candles. OTC pairs at a broker are priced by that broker (always on weekends) and can move differently, and the payout % is the broker\'s. "Worked" shows how often past moves on this pair really went that way: under 50% means the signal has been worse than a coin flip, so do not trust it.',a0,a0,a0,a0,a0,a0,A.l(a0,a0,p?C.d_:B.c,a0,a0,a0,a0,a0,a0,a0,a0,11.8,a0,a0,a0,a0,1.35,!0,a0,a0,a0,a0,a0,a0,a0,a0),a0,a0,a0),B.f,a0,a0,new A.o(a2,a0,m,a4,a0,a0,B.m),a0,a0,a0,a0,B.bg,a0,a0,a0)],s))}r.push(B.af)
if(a3.length===0)r.push(A.c("Loading the markets...",a0,a0,a0,a0,a0,a0,A.l(a0,a0,p?C.cC:C.cD,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,!0,a0,a0,a0,a0,a0,a0,a0,a0),a0,a0,a0))
if(a3.length!==0&&a5.length===0){a2=d.ch
r.push(A.at(A.c('No market matches "'+a2+'".',a0,a0,a0,a0,a0,a0,A.l(a0,a0,p?C.cC:C.cD,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,!0,a0,a0,a0,a0,a0,a0,a0,a0),a0,a0,a0),a0,a0,a0))}for(a2=a5.length,a4=d.dx,o=0;o<a5.length;a5.length===a2||(0,A.I)(a5),++o){e=a5[o]
s=J.a2(e)
if(a4.h(0,s.h(e,a1))==null)s=a0
else s=a4.h(0,s.h(e,a1)).c==="no direction"?"JUST LOST ITS DIRECTION":"JUST TURNED "+a4.h(0,s.h(e,a1)).c.toUpperCase()
r.push(D.hJ3(a6,e,s,!1,new D.eI3(d,e)))}r.push(A.c("Signals are estimates from recent price history. They can fail; never risk money you cannot afford to lose.",a0,a0,a0,a0,a0,a0,A.l(a0,a0,p?C.cC:C.cD,a0,a0,a0,a0,a0,a0,a0,a0,11,a0,a0,a0,a0,a0,!0,a0,a0,a0,a0,a0,a0,a0,a0),B.K,a0,a0))
return A.Kk(A.cn(r,a0,a0,C.aod,a0,a0,B.ah,!1),a0,d.gcgh())},
bGd(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=new A.X(C.Ei,new D.eHd(h),x.E).gJ(0),e=h.z||h.y
if(!e)w=new A.b7([B.jF,B.b2,"Signal alerts unlock when you finish all 10 lessons ("+f+" of 10 done). You will be told the market, ENTER UP or DOWN, and the duration.","Go to lessons"])
else w=!h.Q?C.fkc:C.fj0
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
k=A.W(n,t,g,g,g,g)
j=x.p
k=A.a([k,B.ar,A.E(A.c(s,g,g,g,g,g,g,A.l(g,g,d.a?C.d_:B.c,g,g,g,g,g,g,g,g,12,g,g,g,g,1.35,!0,g,g,g,g,g,g,g,g),g,g,g),1)],j)
if(r!=null){i=A.bp(t,g,g,g,g,g,B.f2,g,g,g,g,g)
B.d.u(k,A.a([B.aa,A.bI(A.c(r,g,g,g,g,g,g,B.pl,g,g,g),g,new D.eHe(h,e),i)],j))}return A.p(g,A.A(k,B.l,g,B.e,B.h,0,g,g),B.f,g,g,new A.o(v,g,l,m,g,g,B.m),g,g,g,B.dU,B.bg,g,g,g)},
av4(d,e,f,g,h){var w=null,v=A.n(18),u=A.a([g.j(0.2),g.j(0.05)],x.O),t=A.K(g.j(0.35),B.r,1),s=A.W(h,g,w,w,w,20),r=d.a,q=A.c(""+f,w,w,w,w,w,w,A.l(w,w,r?C.d_:B.c,w,w,w,w,w,w,w,w,22,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)
return A.p(w,A.x(A.a([s,B.au,q,A.c(e,w,w,w,w,w,w,A.l(w,w,r?C.cC:C.cD,w,w,w,w,w,w,w,w,11.5,w,w,B.P,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),B.B,w,B.e,B.h,0,B.p),B.f,w,w,new A.o(w,w,t,v,w,new A.a7(B.a5,B.a9,B.x,u,w,w),B.m),w,w,w,w,B.bg,w,w,w)},
bHz(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=x.p,h=A.a([],i)
if($.DB.length===0){w=d.a
v=w?B.c.j(0.92):C.je
u=A.n(22)
t=A.K(w?B.c:C.oJ,B.r,1)
s=A.p(j,C.c0S,B.f,j,j,E.ags,j,40,j,j,j,j,j,40)
s=A.A(A.a([s,B.ar,A.E(A.c("Your trading tutor",j,j,j,j,j,j,A.l(j,j,w?C.d_:B.c,j,j,j,j,j,j,j,j,16,j,j,B.F,j,j,!0,j,j,j,j,j,j,j,j),j,j,j),1)],i),B.l,j,B.e,B.h,0,j,j)
v=A.p(j,A.x(A.a([s,B.O,A.c("Ask anything about trading. The tutor sees the same live prices and readings as the agent, so it can explain what each market is doing right now.",j,j,j,j,j,j,A.l(j,j,w?C.cC:C.cD,j,j,j,j,j,j,j,j,12.5,j,j,j,j,1.35,!0,j,j,j,j,j,j,j,j),j,j,j)],i),B.B,j,B.e,B.h,0,B.p),B.f,j,j,new A.o(v,j,t,u,j,j,B.m),j,j,j,j,B.bQ,j,j,j)
u=A.a([],i)
for(r=0;r<6;++r){q=C.dcx[r]
t=w?C.d_:B.c
t=A.c(q,j,j,j,j,j,j,new A.H(!0,t,j,j,j,j,12,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j),j,j,j)
s=w?B.c.j(0.92):C.je
p=w?C.pE:C.pD
o=new A.aP(999,999)
u.push(A.mR(j,s,t,j,new D.eHf(k,q),j,new A.b9(new A.bb(o,o,o,o),B.a1),new A.ax(p,1,B.r,-1),j))}B.d.u(h,A.a([v,B.af,A.bZ(B.bI,u,B.br,j,8,8)],i))}for(w=$.DB.length,v=d.a,r=0;r<$.DB.length;$.DB.length===w||(0,A.I)($.DB),++r){n=$.DB[r]
u=n.a
t=u?B.a9:B.a5
if(u)s=v?C.mY:B.c
else s=v?B.c.j(0.92):C.je
p=u?18:4
o=u?4:18
if(u)m=j
else{l=new A.ax(v?B.c:C.oJ,1,B.r,-1)
m=new A.bE(l,l,l,l)}if(u)u=v?B.c:C.mY
else u=v?C.d_:B.c
h.push(new A.bK(t,j,j,A.p(j,A.AI(n.b,new A.H(!0,u,j,j,j,j,13.5,j,j,j,j,j,1.4,j,j,j,j,j,j,j,j,j,j,j,j,j),j),B.f,j,F.ag3,new A.o(s,j,m,new A.bb(B.i6,B.i6,new A.aP(p,p),new A.aP(o,o)),j,j,B.m),j,j,j,B.jB,B.hy,j,j,j),j))}if($.ahc){w=v?B.c.j(0.92):C.je
u=A.n(18)
h.push(new A.bK(B.a5,j,j,A.p(j,A.A(A.a([B.ac3,B.aa,A.c("Reading the markets...",j,j,j,j,j,j,A.l(j,j,v?C.cC:C.cD,j,j,j,j,j,j,j,j,12.5,j,j,j,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)],i),B.l,j,B.e,B.M,0,j,j),B.f,j,j,new A.o(w,j,j,u,j,j,B.m),j,j,j,B.hJ,B.hy,j,j,j),j))}h=A.E(A.cn(h,k.ax,j,C.bHC,j,j,B.ah,!1),1)
w=A.l(j,j,v?C.d_:B.c,j,j,j,j,j,j,j,j,j,j,j,j,j,j,!0,j,j,j,j,j,j,j,j)
u=A.l(j,j,v?C.cC:C.cD,j,j,j,j,j,j,j,j,j,j,j,j,j,j,!0,j,j,j,j,j,j,j,j)
t=v?B.c.j(0.92):C.je
s=A.n(999)
p=v?C.pE:C.pD
o=A.n(999)
m=v?C.pE:C.pD
w=A.E(A.aN(j,B.Z,!1,j,!0,B.t,j,A.aO(),k.at,j,j,j,j,j,2,A.bC(j,new A.b6(4,s,new A.ax(p,1,B.r,-1)),j,B.zs,j,j,j,j,!0,new A.b6(4,o,new A.ax(m,1,B.r,-1)),j,j,j,j,j,t,!0,j,j,j,j,j,j,j,j,j,j,j,j,j,u,"Ask about trading or a market...",j,j,j,j,j,j,j,j,j,!0,!0,!1,j,j,j,j,j,j,j,j,j,j,j,j,j,j),B.y,!0,j,!0,j,!1,j,B.al,j,j,j,j,j,j,j,j,j,4,1,j,!1,"\u2022",j,j,j,k.gcgg(),j,!1,j,j,!1,j,!0,j,B.ae,j,j,j,j,j,j,j,j,j,j,j,w,!0,B.a7,j,B.ao,j,B.acq,j,j),1)
u=v?C.mY:B.c
t=$.ahc?j:new D.eHg(k)
return A.x(A.a([h,A.p(j,A.A(A.a([w,B.aa,A.aG(!1,B.a3,!0,j,A.aM(!1,j,!0,new A.a6(48,48,A.W(B.pW,v?B.c:C.mY,j,j,j,j),j),B.cJ,!0,j,j,j,j,j,j,j,j,j,j,j,t,j,j,j,j,j,j,j),B.f,u,0,j,j,B.cJ,j,j,B.ai)],i),B.l,j,B.e,B.h,0,j,j),B.f,j,j,j,j,j,j,j,X.HC,j,j,j)],i),B.l,j,B.e,B.h,0,B.p)}}
D.a0D.prototype={
R(){var w=x.S
return new D.bl6(A.S(w,w))},
cYZ(d){return this.e.$0()},
d0I(d){return this.x.$1(d)},
rn(){return this.y.$0()},
d_g(d){return this.z.$1(d)},
gd4(d){return this.w}}
D.bl6.prototype={
a_(){var w,v,u,t,s,r,q,p,o,n=this
n.a3()
w=C.dLl.h(0,n.a.c.a)
n.d=w==null?n.a.c.x:w
v=n.a.w
u=new D.duS()
t=new D.duQ()
w=u.$1(v.h(0,"slots"))
s=A.U(w).k("X<1>")
w=A.B(new A.X(w,new D.duO(n),s),s.k("M.E"))
n.e=w
w=w.length
s=n.d.length
if(w!==Math.min(10,s)){w=x.S
r=J.e3(s,w)
for(q=0;q<s;++q)r[q]=q
B.d.dX(r,B.cT)
n.e=A.cS(r,0,A.dw(Math.min(10,n.d.length),"count",w),A.U(r).c).dk(0)}w=u.$1(v.h(0,"right"))
n.f=A.js(w,A.U(w).c)
n.r=t.$1(v.h(0,"tries"))
n.w=t.$1(v.h(0,"locks"))
n.x=u.$1(v.h(0,"used"))
for(w=n.e,s=w.length,p=0;p<w.length;w.length===s||(0,A.I)(w),++p){o=w[p]
if(!B.d.q(n.x,o))B.d.I(n.x,o)}n.bbo(!1)
n.z=A.cZ(B.fv,new D.duP(n))},
t(){var w=this.z
if(w!=null)w.a1(0)
this.a2()},
b3e(){var w,v,u,t,s,r,q=this,p=q.a
p.toString
w=q.e
w===$&&A.d()
v=q.f
v===$&&A.d()
v=A.B(v,A.a3(v).k("cg.E"))
u=q.r
u===$&&A.d()
t=x.N
s=x.S
u=u.iW(u,new D.duG(),t,s)
r=q.w
r===$&&A.d()
s=r.iW(r,new D.duH(),t,s)
r=q.x
r===$&&A.d()
return p.d0I(A.J(["slots",w,"right",v,"tries",u,"locks",s,"used",r],t,x.z))},
bbo(d){var w,v,u,t,s,r,q,p,o,n=this,m=Date.now(),l=n.y,k=x.X,j=!1,i=0
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
q=A.B(new A.X(s,new D.duI(n),w),w.k("M.E"))
if(q.length!==0)p=q
else{t=n.d.length
s=A.a(new Array(t),k)
for(r=0;r<t;++r)s[r]=r
w=A.U(s).k("X<1>")
p=A.B(new A.X(s,new D.duJ(n),w),w.k("M.E"))}w=p.length
if(w===0)o=v
else o=p[B.cT.av(w)]
n.w.X(0,v)
w=n.r
w===$&&A.d()
w.X(0,v)
l.X(0,v)
n.e[i]=o
w=n.x
w===$&&A.d()
if(!B.d.q(w,o))B.d.I(n.x,o)
j=!0}++i}if(j&&d)n.b3e()},
cGa(){return this.bbo(!0)},
cmH(d){var w,v,u,t,s=this.d
s===$&&A.d()
w=s[d].b.length
s=J.e3(w,x.S)
for(v=0;v<w;++v)s[v]=v
u=this.x
u===$&&A.d()
t=new A.e1()
t.cT(d*7919+u.length)
B.d.dX(s,t)
return s},
cgf(d,e){var w=this,v=w.f
v===$&&A.d()
if(!v.q(0,d)){v=w.w
v===$&&A.d()
v=v.am(0,d)}else v=!0
if(v)return
w.l(new D.duE(w,e,d))
w.b3e()},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=A.Q(d).ax.a===B.dg,i=new D.Rm(j),h=l.a.c,g=l.e
g===$&&A.d()
w=l.f
w===$&&A.d()
v=new A.X(g,w.gjC(w),A.U(g).k("X<1>")).gJ(0)
u=v===l.e.length
g=j?C.t2:C.t0
w=j?C.t2:C.t0
t=j?C.O_:C.NT
s=x.O
t=A.a([w,t],s)
w=A.aI(k,k,k,k,A.W(B.eB,j?C.d_:B.c,k,k,k,18),k,k,k,new D.duK(d),k,k,k,k,k,k)
r=l.a.d
q=x.p
r=A.A(A.a([w,B.aY,A.c("Lesson "+r+" of 10",k,k,k,k,k,k,A.l(k,k,j?C.cC:C.cD,k,k,k,k,k,k,k,k,12,k,k,B.P,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)],q),B.l,k,B.e,B.h,0,k,k)
w=A.n(24)
p=h.f
o=A.ap(p,B.v,0.35)
o.toString
s=A.a([p,o],s)
o=B.c.j(0.2)
p=A.n(16)
s=A.a([r,A.p(k,A.A(A.a([A.p(k,A.W(h.e,B.c,k,k,k,28),B.f,k,k,new A.o(o,k,k,p,k,k,B.m),k,52,k,k,k,k,k,52),B.ew,A.E(A.x(A.a([A.c(h.b,k,k,k,k,k,k,B.fQ,k,k,k),A.c(h.c+" \xb7 "+h.d+" min",k,k,k,k,k,k,B.nu,k,k,k)],q),B.B,k,B.e,B.h,0,B.p),1)],q),B.l,k,B.e,B.h,0,k,k),B.f,k,k,new A.o(k,k,k,w,k,new A.a7(B.a5,B.a9,B.x,s,k,k),B.m),k,k,k,k,B.f9,k,k,k),B.aA],q)
for(w=h.w,n=0;n<4;++n){r=w[n]
p=j?C.d_:B.c
p=A.c(r.a,k,k,k,k,k,k,new A.H(!0,p,k,k,k,k,16,B.F,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k),k,k,k)
o=j?C.d_:B.c
B.d.u(s,A.a([p,B.au,A.c(r.b,k,k,k,k,k,k,new A.H(!0,o,k,k,k,k,14,k,k,k,k,k,1.5,k,k,k,k,k,k,k,k,k,k,k,k,k),k,k,k),B.aA],q))}w=j?B.c.j(0.92):C.je
r=A.n(22)
p=A.K(C.dc.j(0.45),B.r,1.5)
s.push(A.p(k,A.x(A.a([A.A(A.a([C.bXp,B.bc,A.c("See it live right now",k,k,k,k,k,k,A.l(k,k,j?C.d_:B.c,k,k,k,k,k,k,k,k,14,k,k,B.F,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)],q),B.l,k,B.e,B.h,0,k,k),B.S,l.a.cYZ(0)],q),B.B,k,B.e,B.h,0,B.p),B.f,k,k,new A.o(w,k,p,r,k,k,B.m),k,k,k,k,B.bH,k,k,k))
s.push(B.by)
w=A.c("Quiz",k,k,k,k,k,k,A.l(k,k,j?C.d_:B.c,k,k,k,k,k,k,k,k,16,k,k,B.F,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)
r=""+v+" of "
p=l.e.length
if(u)o=C.dc
else o=j?C.cC:C.cD
s.push(A.A(A.a([w,B.aY,A.c(r+p+" right",k,k,k,k,k,k,A.l(k,k,o,k,k,k,k,k,k,k,k,12.5,k,k,B.F,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)],q),B.l,k,B.e,B.h,0,k,k))
s.push(B.ak)
o=A.n(9)
w=l.e.length
w=w===0?0:v/w
s.push(A.bx(o,A.jE(j?C.O6:C.NX,k,k,7,k,w,C.b5t),B.aq))
s.push(B.O)
w=l.a.f?"Admin: you can retry any question.":"Get all 10 right to finish. A wrong answer gets one more try; wrong twice and that question locks for 5 minutes, then a new question takes its place."
s.push(A.c(w,k,k,k,k,k,k,A.l(k,k,j?C.cC:C.cD,k,k,k,k,k,k,k,k,11.8,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),k,k,k))
s.push(B.S)
for(m=0;w=l.e,m<w.length;++m)s.push(l.ctZ(i,m,w[m]))
s.push(B.O)
w=j?C.d_:B.c
p=j?C.pE:C.pD
p=A.E(A.eo(C.c36,k,C.fV8,new D.duL(l,h),A.dk(k,k,k,k,k,k,k,k,k,w,k,k,B.cn,k,new A.b9(A.n(999),B.a1),new A.ax(p,1.5,B.r,-1),k,k,k,k)),1)
w=!u
if(!w||l.a.r)j=C.dc
else j=j?C.cC:C.cD
j=A.bp(j,k,k,k,k,k,B.cn,k,new A.b9(A.n(999),B.a1),k,k,k)
o=!w||l.a.r?new D.duM(l,d):k
s.push(A.A(A.a([p,B.ar,A.E(A.db(S.R7,k,A.c(!w||l.a.r?"Finish lesson":r+l.e.length+" right",k,k,k,k,k,k,B.cb,k,k,k),o,j),1)],q),B.l,k,B.e,B.h,0,k,k))
return A.c5(k,g,A.p(k,A.bo(!0,A.cn(s,k,k,C.bHK,k,k,B.ah,!1),!0,!1,B.ag,!0,!0),B.f,k,k,new A.o(k,k,k,k,k,new A.a7(B.aW,B.b0,B.x,t,k,k),B.m),k,k,k,k,k,k,k,k),k,!1,!1,k,k)},
ctZ(a8,a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=this,a6=null,a7=a5.d
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
if(u!=null){a7=A.dy(0,0,0,Math.max(0,u-Date.now()),0,0).a
r=B.o.ao(a7,6e7)
q=B.a.b0(B.o.v(B.o.F(B.o.ao(a7,1e6),60)),2,"0")
a7=a8.a
p=a7?C.z5:C.z6
o=A.n(20)
n=A.K(C.dO.j(0.4),B.r,1)
m=A.c("Question "+(a9+1)+" is locked",a6,a6,a6,a6,a6,a6,A.l(a6,a6,a7?C.d_:B.c,a6,a6,a6,a6,a6,a6,a6,a6,14,a6,a6,B.F,a6,a6,!0,a6,a6,a6,a6,a6,a6,a6,a6),a6,a6,a6)
l=x.p
return A.p(a6,A.A(A.a([C.c5d,B.ar,A.E(A.x(A.a([m,A.c("Wrong twice. Re-read the lesson; a new question appears in "+r+":"+q+".",a6,a6,a6,a6,a6,a6,A.l(a6,a6,a7?C.cC:C.cD,a6,a6,a6,a6,a6,a6,a6,a6,12.5,a6,a6,a6,a6,1.35,!0,a6,a6,a6,a6,a6,a6,a6,a6),a6,a6,a6)],l),B.B,a6,B.e,B.h,0,B.p),1)],l),B.l,a6,B.e,B.h,0,a6,a6),B.f,a6,a6,new A.o(p,a6,n,o,a6,a6,B.m),a6,a6,a6,B.d7,B.bH,a6,a6,a6)}a7=a8.a
p=a7?B.c.j(0.92):C.je
o=A.n(20)
if(v)n=C.dc.j(0.6)
else n=a7?B.c:C.oJ
n=A.K(n,B.r,v?1.5:1)
m=x.p
l=A.a([A.c(""+(a9+1)+". "+w.a,a6,a6,a6,a6,a6,a6,A.l(a6,a6,a7?C.d_:B.c,a6,a6,a6,a6,a6,a6,a6,a6,14,a6,a6,B.F,a6,a6,!0,a6,a6,a6,a6,a6,a6,a6,a6),a6,a6,a6),B.O],m)
for(k=a5.cmH(b0),j=k.length,i=!v,h=w.b,g=w.c,f=0;f<k.length;k.length===j||(0,A.I)(k),++f){e=k[f]
d=v?a6:new D.duF(a5,b0,e)
if(v&&e===g)a0=C.dc.j(0.14)
else if(s===e)a0=C.dO.j(0.12)
else a0=a7?C.z5:C.z6
a1=new A.aP(14,14)
if(v&&e===g)a2=C.dc
else a2=s===e?C.dO:B.L
a3=new A.ax(a2,1,B.r,-1)
a2=h[e]
a4=a7?C.d_:B.c
a2=A.a([new A.bu(1,B.ba,A.c(a2,a6,a6,a6,a6,a6,a6,new A.H(!0,a4,a6,a6,a6,a6,13.5,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6),a6,a6,a6),a6)],m)
if(v&&e===g)a2.push(C.c0C)
if(i&&s===e)a2.push(C.c6C)
l.push(A.aA(a6,A.p(a6,new A.c1(B.aK,B.e,B.h,B.l,a6,B.p,a6,0,a2,a6),B.f,a6,a6,new A.o(a0,a6,new A.bE(a3,a3,a3,a3),new A.bb(a1,a1,a1,a1),a6,a6,B.m),a6,a6,a6,B.eH,B.ep,a6,a6,a6),B.y,!1,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,d,a6,a6,a6,a6,a6,a6,!1,B.a4))}if(v)l.push(A.c("Right! "+w.d,a6,a6,a6,a6,a6,a6,C.fP3,a6,a6,a6))
else if(t===1&&!a5.a.f)l.push(C.fXV)
else if(t>=1)l.push(C.fVi)
return A.p(a6,A.x(l,B.B,a6,B.e,B.h,0,B.p),B.f,a6,a6,new A.o(p,a6,n,o,a6,a6,B.m),a6,a6,a6,B.d7,B.bH,a6,a6,a6)}}
D.aPn.prototype={
t(){var w=this,v=w.aa$
if(v!=null)v.a8(0,w.gbB())
w.aa$=null
w.a2()},
aZ(){this.b7()
this.b5()
this.bC()}}
var z=a.updateTypes(["P(uv)","ay<~>()","~()","XH(Z)","WU(Z)","ay<~>(m)","m(a_C)","a0D(Z)"])
D.eHb.prototype={
$1(d){this.a.yQ(!0)
return null},
$S:11}
D.eGN.prototype={
$1(d){var w=this.a.as,v=w.f
if(v.length!==0){v=B.d.gd3(v).Q
v.toString
w.i9(B.i.D(Math.min(this.b*160-16,v),0,1/0))}},
$S:7}
D.eGE.prototype={
$0(){return this.a.Q=this.b},
$S:0}
D.eGM.prototype={
$0(){return this.a.Q=this.b},
$S:0}
D.eGP.prototype={
$0(){var w=this.a,v=w.f=!1,u=this.b,t=u==null
if(!t?J.z(J.t(u,"ok"),!0):v){w.d=u
w.ay=null}else{v=t?null:J.t(u,"error")
w.ay=J.k(v==null?"Could not reach the server. Pull down to try again.":v)
if(!J.z(t?null:J.t(u,"ownerOnly"),!0))v=J.z(t?null:J.t(u,"setupNeeded"),!0)
else v=!0
if(v)w.d=null}},
$S:0}
D.eGC.prototype={
$1(d){return A.a1(d,x.N,x.z)},
$S:25}
D.eGD.prototype={
$0(){var w,v,u=this,t=u.a
if(u.b){w=A.B(t.e,x.P)
v=u.c
B.d.u(w,v)}else{w=u.c
v=w}t.e=w
t.w=v.length>=100},
$S:0}
D.eGX.prototype={
$1(d){var w=null
return A.ei(A.a([A.bM(!1,B.du,w,w,!0,w,w,w,new D.eGV(d),w,w),A.bI(C.hhh,w,new D.eGW(d),w)],x.p),w,w,w,C.hhH,w,w,w,w,C.fZq,w)},
$S:18}
D.eGV.prototype={
$0(){A.a8(this.a,!1).N(!1)
return null},
$S:0}
D.eGW.prototype={
$0(){A.a8(this.a,!1).N(!0)
return null},
$S:0}
D.eGY.prototype={
$0(){return this.a.r=!0},
$S:0}
D.eGZ.prototype={
$0(){return this.a.r=!1},
$S:0}
D.eGL.prototype={
$1(d){var w=this.a,v=w.d
w.a.toString
return D.hA5(v,!1)},
$S:z+3}
D.eGR.prototype={
$0(){return this.a.r=!0},
$S:0}
D.eGS.prototype={
$0(){var w=this.a,v=w.r=!1,u=this.b
if(u!=null?J.z(J.t(u,"ok"),!0):v)w.d=u},
$S:0}
D.eGT.prototype={
$1(d){var w=this
return A.oV(new D.eGQ(w.a,w.b,w.c,w.d),!1,0.8,0.95,0.25,!1,null)},
$S:134}
D.eGQ.prototype={
$2(d,e){var w=this
return w.a.cz7(w.b,w.c,D.ex(J.t(w.d,"state")),e)},
$S:2019}
D.eGU.prototype={
$2(d,e){return B.i.aQ(D.aHp(d),D.aHp(e))},
$S:40}
D.eHa.prototype={
$0(){return this.a.yQ(!0)},
$S:1}
D.eH5.prototype={
$0(){var w=this.a.c
w.toString
return A.O8(w)},
$S:0}
D.eH6.prototype={
$0(){return this.a.yQ(!0)},
$S:0}
D.eGr.prototype={
$1(d){var w,v=J.a2(d)
if(!J.z(v.h(d,"today"),!0)){v=v.h(d,"asset")
w=this.a
v=J.z(v,w==null?null:w.h(0,"symbol"))}else v=!0
return v},
$S:4}
D.eGs.prototype={
$1(d){return J.z(J.t(d,"asset"),this.a.Q)},
$S:4}
D.eGt.prototype={
$1(d){return J.z(J.t(d,"asset"),this.a)},
$S:4}
D.eGu.prototype={
$0(){var w=this
return B.d.dz(w.a,new D.eGp(w.b),new D.eGq(w.c,w.d))},
$S:172}
D.eGp.prototype={
$1(d){return J.z(J.t(d,"asset"),this.a)},
$S:4}
D.eGq.prototype={
$0(){var w=this.a
return w.length===0?this.b:B.d.gH(w)},
$S:172}
D.eGv.prototype={
$1(d){return J.z(J.t(d,"asset"),this.a.h(0,"symbol"))},
$S:4}
D.eGw.prototype={
$0(){return this.a},
$S:172}
D.eH3.prototype={
$1(d){return A.v(d)},
$S:15}
D.eH4.prototype={
$1(d){return A.v(d)},
$S:15}
D.eH0.prototype={
$1(d){var w,v=this,u=null,t=v.b,s=v.a.cIv(t,v.c,v.d)
t=t.a
w=A.fv(u,u,t?B.c.j(0.92):C.je,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,B.nr,u,u,u,u,u,u)
return A.eG(u,B.L,A.aG(!1,B.a3,!0,u,A.x(A.a([s,B.S,A.bM(!1,A.c("Got it",u,u,u,u,u,u,A.l(u,u,t?C.d_:B.c,u,u,u,u,u,u,u,u,u,u,u,B.F,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u,u,!0,u,u,u,new D.eH_(d),u,w)],x.p),B.l,u,B.e,B.M,0,B.p),B.f,B.L,0,u,u,u,u,u,B.ai),u,u,u,B.zw,u,B.db,u,u,u)},
$S:47}
D.eH_.prototype={
$0(){return A.a8(this.a,!1).e7()},
$S:0}
D.eH2.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.c
s.toString
w=2
return A.b(A.a8(s,!1).cb(A.ea(new D.eH1(u.b),!1,null,x.H)),$async$$0)
case 2:if(t.c!=null)t.yQ(!1)
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
D.eH1.prototype={
$1(d){return new D.WU(this.a,null)},
$S:z+4}
D.eGG.prototype={
$1(d){return J.z(J.t(d,"open"),!0)},
$S:4}
D.eGH.prototype={
$0(){var w=this
return w.a.cDn(w.b,w.c,w.d)},
$S:0}
D.eGI.prototype={
$1(d){return J.z(J.t(d,"asset"),J.t(this.a,"asset"))},
$S:4}
D.eGK.prototype={
$2(d,e){return B.ar},
$S:37}
D.eGJ.prototype={
$2(d,a0){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.b[a0],l=J.a2(m),k=J.k(l.h(m,"asset")),j=k===J.t(o.c,"asset"),i=D.d_(l.h(m,"changePct")),h=i>=0,g=o.d,f=J.z(g==null?n:g.h(0,"symbol"),k),e=J.z(D.ex(l.h(m,"reading")).h(0,"decision"),"ENTER")&&J.z(D.ex(l.h(m,"reading")).h(0,"dir"),"up")
g=o.a
w=o.e
v=w.a
u=v?B.c.j(0.92):C.je
t=A.n(16)
if(j)s=D.fBb(k).c
else s=v?B.c:C.oJ
s=A.K(s,B.r,j?2:1)
w=j?D.fBb(k).c.j(0.2):w.gO8()
w=A.a([new A.aa(0,B.H,w,B.cP,j?12:8)],x.V)
r=D.hl9(k,16)
q=x.p
r=A.a([r,B.e3,A.E(A.c(k,n,1,B.a2,n,n,n,A.l(n,n,v?C.d_:B.c,n,n,n,n,n,n,n,n,11.5,n,n,B.F,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),1)],q)
if(f)B.d.u(r,A.a([A.W(B.q0,F.t6,n,n,n,13),B.pj],q))
else if(e)B.d.u(r,A.a([A.W(B.fE,C.dc,n,n,n,14),B.pj],q))
r.push(g.cJP(m))
r=A.A(r,B.l,n,B.e,B.h,0,n,n)
l=D.eT(D.d_(l.h(m,"price")),!0,!1)
l=A.E(new A.di(B.dr,B.a5,B.f,A.c(l,n,n,n,n,n,n,A.l(n,n,v?C.d_:B.c,n,n,n,n,n,n,n,n,14.5,n,n,B.F,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),n),1)
v=h?"+":""
p=B.i.a5(i,2)
return A.aA(n,A.cT(n,A.x(A.a([r,A.A(A.a([l,B.d8,A.c(v+p+"%",n,n,n,n,n,n,A.l(n,n,h?C.dc:C.dO,n,n,n,n,n,n,n,n,10.5,n,n,B.F,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],q),B.dF,n,B.e,B.h,0,n,n)],q),B.B,n,B.iO,B.h,0,B.p),n,n,B.b_,new A.o(u,n,s,t,w,n,B.m),B.a3,n,n,n,n,B.j1,n,n,152),B.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new D.eGF(g,k),n,n,n,n,n,n,!1,B.a4)},
$S:82}
D.eGF.prototype={
$0(){return this.a.a22(this.b)},
$S:0}
D.eGz.prototype={
$0(){var w=this.a
return w.l(new D.eGy(w,this.b))},
$S:0}
D.eGy.prototype={
$0(){return this.a.z=this.b},
$S:0}
D.eGA.prototype={
$0(){var w=this.a
return w.l(new D.eGx(w))},
$S:0}
D.eGx.prototype={
$0(){var w=this.a
return w.ax=!w.ax},
$S:0}
D.eGn.prototype={
$1(d){return J.z(J.t(d,"asset"),this.a.h(0,"symbol"))},
$S:4}
D.eGo.prototype={
$0(){return A.S(x.N,x.z)},
$S:172}
D.eGO.prototype={
$2(d,e){var w=null,v=e.b,u=A.ao(w,A.p(w,w,B.f,w,w,new A.o(w,w,w,A.n(99),w,C.cbb,B.m),w,8,w,w,w,w,w,w),w,w,0,0,9,w),t=this.a.a,s=A.ao(w,A.p(w,w,B.f,(t?C.d_:B.c).j(0.5),w,w,w,18,w,w,w,w,w,2),w,w,v/2-1,w,4,w),r=B.i.D(this.b*v-9,0,v-18)
return new A.a6(w,26,new A.an(B.a0,w,B.ad,B.f,A.a([u,s,A.ao(w,A.p(w,w,B.f,w,w,new A.o(B.c,w,A.K(t?C.d_:B.c,B.r,3),w,w,w,B.a6),w,18,w,w,w,w,w,18),w,w,r,w,4,w)],x.p),w),w)},
$S:116}
D.eGB.prototype={
$0(){return this.a.wL(!this.b)},
$S:0}
D.eGm.prototype={
$2(d,e){var w=null,v=this.a.a,u=v?C.z5:C.z6,t=A.n(12),s=A.c(d,w,1,B.a2,w,w,w,A.l(w,w,v?C.cC:C.cD,w,w,w,w,w,w,w,w,10.5,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)
return A.E(A.p(w,A.x(A.a([s,B.bw,new A.di(B.dr,B.a5,B.f,A.c(e,w,w,w,w,w,w,A.l(w,w,v?C.d_:B.c,w,w,w,w,w,w,w,w,13,w,w,B.F,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w)],x.p),B.B,w,B.e,B.h,0,B.p),B.f,w,w,new A.o(u,w,w,t,w,w,B.m),w,w,w,w,B.j1,w,w,w),1)},
$S:115}
D.eH8.prototype={
$1(d){return A.a1(d,x.N,x.z)},
$S:25}
D.eH9.prototype={
$0(){var w=this.a
return w.l(new D.eH7(w))},
$S:0}
D.eH7.prototype={
$0(){var w=this.a
return w.y=!w.y},
$S:0}
D.eGl.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=t.x&&t.w?2:4
break
case 2:w=5
return A.b(t.a_3(!0),$async$$0)
case 5:w=3
break
case 4:t.l(new D.eGk(t))
case 3:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
D.eGk.prototype={
$0(){var w=this.a
return w.x=!w.x},
$S:0}
D.cWZ.prototype={
$0(){return this.a.d=this.b},
$S:0}
D.cX7.prototype={
$2(d,e){var w,v,u=null,t=e.b,s=this.a,r=s.a,q=r.c,p=r.d,o=r.e,n=r.f
r=r.r
w=s.d
v=d.K(x.D)
return A.aA(u,new A.a6(t,250,A.b4(u,u,u,new D.beq((v==null?B.CQ:v).w.d,q,p,o,n,r,w,u),B.az),u),B.y,!1,u,u,u,u,u,new D.cX2(s),new D.cX3(s,t),new D.cX4(s,t),u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new D.cX5(s,t),new D.cX6(s),u,u,u,!1,B.a4)},
$S:36}
D.cX5.prototype={
$1(d){return this.a.aAC(d.b,this.b)},
$S:23}
D.cX3.prototype={
$1(d){return this.a.aAC(d.b,this.b)},
$S:50}
D.cX4.prototype={
$1(d){return this.a.aAC(d.b,this.b)},
$S:19}
D.cX2.prototype={
$1(d){var w=this.a
return w.l(new D.cX1(w))},
$S:38}
D.cX1.prototype={
$0(){return this.a.d=null},
$S:0}
D.cX6.prototype={
$1(d){return A.bL(B.fZ,new D.cX0(this.a),x.b)},
$S:56}
D.cX0.prototype={
$0(){var w=this.a
if(w.c!=null)w.l(new D.cX_(w))},
$S:12}
D.cX_.prototype={
$0(){return this.a.d=null},
$S:0}
D.cX8.prototype={
$1(d){var w=this.a
return w*d+w/2},
$S:155}
D.cXa.prototype={
$1(d){var w=this.b,v=this.a,u=v.a
return w-(d-u)/(v.b-u)*w},
$S:5}
D.cX9.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o=this,n=$.T(),m=A.a([],x.v),l=new A.aH(n.r,B.aj,null,null,m)
for(n=o.b,w=o.c,v=o.d,u=o.a.c,t=!1,s=0;s<n;++s){r=J.t(u[s],d)
if(r==null)continue
q=w.$1(s)
if(typeof r=="number")p=r
else{p=A.cw(A.v(r))
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
n.d=B.bF
n.e=B.dP
o.e.af(l,n)},
$S:2020}
D.fhv.prototype={
$1(d){return D.d_(J.t(d,"c"))},
$S:2021}
D.fw4.prototype={
$1(d){var w=null,v=C.a8t.h(0,d),u=v.a,t=v.b,s=this.a,r=s*0.78,q=A.K(B.c,B.r,1.2)
return A.p(B.z,A.c(u,w,w,w,w,w,w,A.l(w,w,B.c,w,w,w,w,w,w,w,w,s*(u.length>1?0.26:0.36),w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.f,w,w,new A.o(t,w,q,w,w,w,B.a6),w,r,w,w,w,w,w,r)},
$S:129}
D.fBu.prototype={
$1(d){var w=x.N,v=x.z,u=A.a1(d,w,v)
v=A.dJ(u,w,v)
v.n(0,"asset",u.h(0,"symbol"))
return v},
$S:25}
D.fFP.prototype={
$1(d){return A.a1(d,x.N,x.z)},
$S:25}
D.fCA.prototype={
$1(d){return","},
$S:57}
D.fJS.prototype={
$3(d,e,f){var w=A.bPu(d,e,1,0,0,0,0,0)
while(A.lU(w)!==7)w=w.bL(864e8)
return w.bL(A.dy(7*(f-1),0,0,0,0,0).a)},
$S:2022}
D.e7z.prototype={
$1(d){this.a.wp()
return null},
$S:11}
D.e7A.prototype={
$1(d){var w,v=this.a
if(v.c!=null){w=v.d
w=D.ex(D.ex(w==null?null:w.h(0,"state")).h(0,"shadow")).a!==0}else w=!1
if(w)v.l(new D.e7y())},
$S:11}
D.e7y.prototype={
$0(){},
$S:0}
D.e7o.prototype={
$0(){var w,v,u=this.a
u.f=!1
w=this.b
v=w==null
if(!v&&J.z(J.t(w,"ok"),!0)){u.d=A.a1(w,x.N,x.z)
u.w=null}else{w=v?null:J.t(w,"error")
u.w=J.k(w==null?"Could not load this system right now.":w)}w=this.c
if(w!=null&&J.z(J.t(w,"ok"),!0)){w=x.g.a(J.t(w,"rows"))
if(w==null)w=B.c1
w=J.cV(w,x.f)
w=A.cE(w,new D.e7n(),w.$ti.k("M.E"),x.P)
w=A.B(w,A.a3(w).k("M.E"))
u.e=w}},
$S:0}
D.e7n.prototype={
$1(d){return A.a1(d,x.N,x.z)},
$S:25}
D.e7q.prototype={
$0(){return this.a.r=!0},
$S:0}
D.e7r.prototype={
$0(){var w=this.a,v=w.r=!1,u=this.b
if(u!=null?J.z(J.t(u,"ok"),!0):v)w.d=A.a1(u,x.N,x.z)},
$S:0}
D.e7w.prototype={
$0(){return A.O8(this.a)},
$S:0}
D.e7x.prototype={
$0(){this.a.wp()
return null},
$S:0}
D.e7m.prototype={
$0(){return this.a.wL(!this.b)},
$S:0}
D.e7s.prototype={
$3$c(d,e,f){var w=null,v=this.a.a,u=v?C.z5:C.z6,t=A.n(12),s=A.c(d,w,1,B.a2,w,w,w,A.l(w,w,v?C.cC:C.cD,w,w,w,w,w,w,w,w,10.5,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)
if(f==null)v=v?C.d_:B.c
else v=f
return A.E(A.p(w,A.x(A.a([s,B.bw,new A.di(B.dr,B.a5,B.f,A.c(e,w,w,w,w,w,w,A.l(w,w,v,w,w,w,w,w,w,w,w,13.5,w,w,B.F,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w)],x.p),B.B,w,B.e,B.h,0,B.p),B.f,w,w,new A.o(u,w,w,t,w,w,B.m),w,w,w,w,B.j1,w,w,w),1)},
$2(d,e){return this.$3$c(d,e,null)},
$S:2023}
D.e7u.prototype={
$1(d){return A.a1(d,x.N,x.z)},
$S:25}
D.e7v.prototype={
$0(){var w=this.a
return w.l(new D.e7t(w))},
$S:0}
D.e7t.prototype={
$0(){var w=this.a
return w.z=!w.z},
$S:0}
D.e7l.prototype={
$0(){var w=this.a
return w.l(new D.e7k(w))},
$S:0}
D.e7k.prototype={
$0(){var w=this.a
return w.Q=!w.Q},
$S:0}
D.e7p.prototype={
$1(d){return A.v(d)},
$S:15}
D.fGG.prototype={
$1(d){return J.k(d)},
$S:15}
D.fGH.prototype={
$2(d,e){var w=null,v=e.b,u=A.ao(w,A.p(w,w,B.f,w,w,new A.o(w,w,w,A.n(9),w,C.caC,B.m),w,6,w,w,w,w,w,w),w,w,0,0,4,w),t=B.i.D(this.a/100*v-7,0,v-14)
return new A.a6(w,14,new A.an(B.a0,w,B.ad,B.f,A.a([u,A.ao(w,A.p(w,w,B.f,w,w,new A.o(B.c,w,A.K(this.b.a?C.d_:B.c,B.r,2.5),w,w,w,B.a6),w,14,w,w,w,w,w,14),w,w,t,w,0,w)],x.p),w),w)},
$S:116}
D.dii.prototype={
$1(d){var w=this.a
if(w.c!=null)w.l(new D.dih())},
$S:11}
D.dih.prototype={
$0(){},
$S:0}
D.fwU.prototype={
$1(d){return J.k(d)},
$S:15}
D.eHl.prototype={
$1(d){return J.k(d)},
$S:15}
D.eId.prototype={
$0(){return this.a.l(new D.eIc())},
$S:0}
D.eIc.prototype={
$0(){},
$S:0}
D.eIe.prototype={
$0(){return $.hkK=this.a.at.a.a},
$S:0}
D.eIf.prototype={
$1(d){var w=this.a
if(w.c!=null)w.l(new D.eIb(w,d))},
$S:196}
D.eIb.prototype={
$0(){return this.a.Q=this.b},
$S:0}
D.eIg.prototype={
$1(d){this.a.Rg()
return null},
$S:11}
D.eI8.prototype={
$1(d){var w=x.N,v=x.z
v=A.dJ(A.a1(d,w,v),w,v)
v.n(0,"asset",J.t(d,"symbol"))
return v},
$S:25}
D.eHG.prototype={
$0(){var w,v,u=this,t=u.c
if(J.z(t==null?null:J.t(t,"isAdmin"),!0))u.b.y=!0
w=u.d
if(w==null)w=u.a.a
if(w!=null){t=x.g.a(w.h(0,"done"))
if(t==null)t=A.a([],x.s)
v=x.Y.a(w.h(0,"lessons"))
u.b.x=A.J(["done",t,"lessons",v==null?A.S(x.N,x.z):v],x.N,x.z)}},
$S:0}
D.eHR.prototype={
$0(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m
var $async$$0=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.aB(),$async$$0)
case 7:q=e
w=8
return A.b(q.aD("String","ngmy_signal_grid_academy_v2",B.V.au(r.a.x,null)),$async$$0)
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
if(J.z(n==null?null:J.t(n,"allDone"),!0)){$.cmZ=new A.V(A.h0(0,0),0,!1)
A.JT()}case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$$0,v)},
$S:1}
D.eHo.prototype={
$1(d){return this.a.gK2().q(0,d.a)},
$S:z+0}
D.eHp.prototype={
$0(){var w,v=this.a,u=x.N,t=A.d2(v.gK2(),u)
t.I(0,this.b)
w=A.B(t,A.a3(t).k("cg.E"))
u=A.dJ(v.x,u,x.z)
u.n(0,"done",w)
v.x=u},
$S:0}
D.eHq.prototype={
$1(d){return this.a.gK2().q(0,d.a)},
$S:z+0}
D.eHr.prototype={
$1(d){var w=null
return A.ei(A.a([A.bI(C.hbe,w,new D.eHn(this.a,d),w)],x.p),w,w,w,C.h89,w,w,w,w,C.fWi,w)},
$S:18}
D.eHn.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:A.a8(u.b,!1).N(null)
w=2
return A.b(A.Mk(),$async$$0)
case 2:t=e
s=u.a
if(s.c!=null)s.l(new D.eHm(s,t))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
D.eHm.prototype={
$0(){return this.a.Q=this.b},
$S:0}
D.eHQ.prototype={
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
if(u==null)u=B.c1
u=J.b8(u,new D.eHP(),x.N)
u=A.B(u,u.$ti.k("aj.E"))
s.dy=u
u=v.h(w,"nowEt")
s.fr=J.k(u==null?"":u)
s.fx=J.z(v.h(w,"stockOpen"),!0)
s.r=new A.V(Date.now(),0,!1)},
$S:0}
D.eHP.prototype={
$1(d){return J.k(d)},
$S:15}
D.eHH.prototype={
$2(d,e){return new A.V(Date.now(),0,!1).by(e.a).a>18e7},
$S:2024}
D.eHI.prototype={
$0(){},
$S:0}
D.eI5.prototype={
$1(d){return J.z(J.t(d,"open"),!0)&&D.bF5(d).length>5},
$S:4}
D.eI6.prototype={
$2(d,e){return B.i.aQ(D.aHp(d),D.aHp(e))},
$S:40}
D.eHu.prototype={
$1(d){return J.z(J.t(d,"asset"),this.a.h(0,"symbol"))},
$S:4}
D.eHv.prototype={
$0(){return A.S(x.N,x.z)},
$S:172}
D.eHw.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m="typicalMin",l="enterWithinMin",k=J.a2(d),j=D.ex(k.h(d,"reading")),i=D.ex(j.h(0,"timing"))
if(i.h(0,m)==null)w=""
else{v=A.v(i.h(0,"dir"))
u=A.v(i.h(0,"ageMin"))
t=A.v(i.h(0,m))
s=A.v(i.h(0,"remainingMin"))
r=A.v(i.h(0,"dir"))
q=A.v(i.h(0,"worked"))
p=A.v(i.h(0,"of"))
o=D.d_(i.h(0,l))>0?"still early (enter within "+A.v(i.h(0,l))+" min)":"too late to enter"
w=", current "+v+" move "+u+" min old, such moves usually last "+t+" min (about "+s+" min left), past "+r+" moves really went that way "+q+" of "+p+" times, "+o}v=A.v(k.h(d,"asset"))
u=A.v(k.h(d,"name"))
t=D.hIY(d)
s=B.i.a5(D.d_(k.h(d,"changePct")),2)
k=J.z(k.h(d,"open"),!0)?"open":"closed"
r=j.h(0,"bias")
r=A.v(r==null?"unknown":r)
q=B.i.a5(D.d_(j.h(0,"score")),0)
p=j.h(0,"rsi")==null?"n/a":B.i.a5(D.d_(j.h(0,"rsi")),0)
o=j.h(0,"mom1h")==null?"n/a":B.i.a5(D.d_(j.h(0,"mom1h")),2)+"%"
n=j.h(0,"action")
return"- "+v+" ("+u+"): price "+t+", change "+s+"%, "+k+", "+r+", strength "+q+", RSI "+p+", last hour "+o+", reading: "+A.v(n==null?"n/a":n)+w+"."},
$S:52}
D.eHh.prototype={
$0(){$.DB.push(new D.a_C(!0,this.b))
$.ahc=!0},
$S:0}
D.eHi.prototype={
$1(d){return(d.a?"Student":"Tutor")+": "+d.b},
$S:z+6}
D.eHj.prototype={
$1(d){return"- "+A.v(d)},
$S:15}
D.eHk.prototype={
$0(){},
$S:0}
D.eHS.prototype={
$1(d){var w=this.a.ax,v=w.f
if(v.length!==0){v=B.d.gd3(v).Q
v.toString
w.m7(v+200,B.ea,B.eW)}},
$S:7}
D.eI9.prototype={
$0(){return A.O8(this.a)},
$S:0}
D.eIa.prototype={
$0(){return this.b.gLj().C4(this.a.a)},
$S:0}
D.eHt.prototype={
$1(d){return this.a.gK2().q(0,d.a)},
$S:z+0}
D.eHs.prototype={
$0(){return this.a.clE(this.b)},
$S:0}
D.eHO.prototype={
$1(d){var w=this.b,v=B.d.cc(C.Ei,w),u=this.a,t=u.y,s=w.a,r=u.gK2().q(0,s)
s=x.Y.a(D.ex(u.x.h(0,"lessons")).h(0,s))
if(s==null)s=B.lE
return new D.a0D(w,v+1,new D.eHK(u,w),t,r,A.a1(s,x.N,x.z),new D.eHL(u,w),new D.eHM(u,w),new D.eHN(u),null)},
$S:z+7}
D.eHK.prototype={
$0(){var w=this.a,v=w.c
v.toString
return w.c6S(new D.Rm(A.Q(v).ax.a===B.dg),this.b.r)},
$S:135}
D.eHL.prototype={
$1(d){var w=this.a
w.l(new D.eHJ(w,this.b,d))
w.aCO()},
$S:117}
D.eHJ.prototype={
$0(){var w=this.a,v=x.N,u=x.z,t=A.a1(D.ex(w.x.h(0,"lessons")),v,u)
t.n(0,this.b.a,this.c)
u=A.dJ(w.x,v,u)
u.n(0,"lessons",t)
w.x=u},
$S:0}
D.eHM.prototype={
$0(){return this.a.aea(this.b.a)},
$S:0}
D.eHN.prototype={
$1(d){var w=this.a,v=w.c
v.toString
A.a8(v,!1).e7()
w.aR0(d)},
$S:2}
D.eHx.prototype={
$2$last$lines(d,e){var w=this.a
return new D.adK(B.d.fE(w,Math.max(0,w.length-d)),this.b,null,e,this.c,null)},
$0(){return this.$2$last$lines(36,!0)},
$1$lines(d){return this.$2$last$lines(36,d)},
$S:2025}
D.eHF.prototype={
$1(d){var w=null
return A.c(d,w,w,w,w,w,w,A.l(w,w,this.a.a?C.d_:B.c,w,w,w,w,w,w,w,w,13,w,w,w,w,1.4,!0,w,w,w,w,w,w,w,w),w,w,w)},
$S:2026}
D.eHy.prototype={
$1(d){var w=J.a2(d)
return J.z(D.ex(w.h(d,"reading")).h(0,"decision"),"ENTER")&&J.z(D.ex(w.h(d,"reading")).h(0,"dir"),"up")},
$S:4}
D.eHz.prototype={
$1(d){return J.t(d,"asset")},
$S:775}
D.eHA.prototype={
$1(d){var w=J.a2(d)
return J.z(D.ex(w.h(d,"reading")).h(0,"decision"),"ENTER")&&J.z(D.ex(w.h(d,"reading")).h(0,"dir"),"down")},
$S:4}
D.eHB.prototype={
$1(d){return J.t(d,"asset")},
$S:775}
D.eHC.prototype={
$1(d){var w=J.a2(d)
return J.z(w.h(d,"open"),!0)&&D.ex(w.h(d,"reading")).h(0,"rsi")!=null},
$S:4}
D.eHD.prototype={
$1(d){return J.z(J.t(d,"open"),!0)},
$S:4}
D.eHE.prototype={
$1(d){var w=D.ex(D.ex(J.t(d,"reading")).h(0,"timing"))
return D.d_(w.h(0,"of"))>=3&&D.d_(w.h(0,"worked"))/D.d_(w.h(0,"of"))>=0.5},
$S:4}
D.eHW.prototype={
$1(d){var w,v,u,t=this.a
if(t.cx!=="All"&&D.hE0(d)!==t.cx)return!1
t=this.b
if(t.length===0)return!0
w=J.a2(d)
v=A.v(w.h(d,"asset"))
u=A.v(w.h(d,"name"))
w=w.h(d,"asset")
w=J.k(w==null?"":w)
return B.a.q((v+" "+u+" "+A.aL(w,"/","")).toLowerCase(),t)},
$S:4}
D.eHX.prototype={
$2(d,e){var w,v,u=J.a2(d),t=x.f,s=t.b(D.ex(u.h(d,"reading")).h(0,"entry"))?0:1,r=J.a2(e),q=t.b(D.ex(r.h(e,"reading")).h(0,"entry"))?0:1
if(s!==q)return s-q
t=this.a.dx
w=t.am(0,u.h(d,"asset"))?0:1
v=t.am(0,r.h(e,"asset"))?0:1
if(w!==v)return w-v
return B.i.aQ(D.aHp(d),D.aHp(e))},
$S:40}
D.eI4.prototype={
$2(d,e){var w=D.ex(J.t(d,"reading"))
return J.z(w.h(0,"dir"),e)&&B.d.q(C.aCh,w.h(0,"decision"))},
$S:2028}
D.eHY.prototype={
$1(d){return this.a.$2(d,"up")},
$S:4}
D.eHZ.prototype={
$1(d){return this.a.$2(d,"down")},
$S:4}
D.eI0.prototype={
$0(){var w=this.a
return w.l(new D.eHV(w,this.b))},
$S:0}
D.eHV.prototype={
$0(){return this.a.cx=this.b},
$S:0}
D.eI_.prototype={
$1(d){return D.hE0(d)===this.a},
$S:4}
D.eI1.prototype={
$0(){var w=this.a
w.l(new D.eHU(w))},
$S:0}
D.eHU.prototype={
$0(){var w=this.a,v=w.CW
w.CW=!v
if(v){w.ch=""
w.cy.bN(0,B.ci)}},
$S:0}
D.eI2.prototype={
$1(d){var w=this.a
return w.l(new D.eHT(w,d))},
$S:2}
D.eHT.prototype={
$0(){return this.a.ch=this.b},
$S:0}
D.eI3.prototype={
$0(){return this.a.aR0("What is happening with "+A.v(J.t(this.b,"asset"))+" right now? Is it bullish or bearish, how long might the move last, and is it too late to enter?")},
$S:0}
D.eHd.prototype={
$1(d){return this.a.gK2().q(0,d.a)},
$S:z+0}
D.eHe.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=!u.b?2:4
break
case 2:u.a.gLj().C4(0)
w=3
break
case 4:w=5
return A.b(A.Mk(),$async$$0)
case 5:t=e
s=u.a
if(s.c!=null)s.l(new D.eHc(s,t))
$.cmZ=new A.V(A.h0(0,0),0,!1)
A.JT()
case 3:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
D.eHc.prototype={
$0(){return this.a.Q=this.b},
$S:0}
D.eHf.prototype={
$0(){return this.a.K1(this.b)},
$S:0}
D.eHg.prototype={
$0(){var w=this.a
return w.K1(w.at.a.a)},
$S:0}
D.duS.prototype={
$1(d){var w
x.g.a(d)
w=d==null?B.c1:d
w=J.b8(w,new D.duT(),x.S)
w=A.B(w,w.$ti.k("aj.E"))
return w},
$S:435}
D.duT.prototype={
$1(d){var w=A.c8(A.v(d),null)
return w==null?0:w},
$S:311}
D.duQ.prototype={
$1(d){var w,v
x.Y.a(d)
w=d==null?B.lE:d
v=x.S
return J.oO(w,new D.duR(),v,v)},
$S:2029}
D.duR.prototype={
$2(d,e){var w,v=A.c8(A.v(d),null)
if(v==null)v=0
w=A.c8(A.v(e),null)
if(w==null)w=0
return new A.bv(v,w,x.a)},
$S:2030}
D.duO.prototype={
$1(d){var w
if(d>=0){w=this.a.d
w===$&&A.d()
w=d<w.length}else w=!1
return w},
$S:30}
D.duP.prototype={
$1(d){var w,v=this.a
if(v.c==null)return
w=v.w
w===$&&A.d()
if(w.a!==0)v.l(new D.duN(v))},
$S:11}
D.duN.prototype={
$0(){return this.a.cGa()},
$S:0}
D.duG.prototype={
$2(d,e){return new A.bv(""+d,e,x.W)},
$S:776}
D.duH.prototype={
$2(d,e){return new A.bv(""+d,e,x.W)},
$S:776}
D.duI.prototype={
$1(d){var w=this.a,v=w.x
v===$&&A.d()
if(!B.d.q(v,d)){w=w.e
w===$&&A.d()
w=!B.d.q(w,d)}else w=!1
return w},
$S:30}
D.duJ.prototype={
$1(d){var w=this.a,v=w.e
v===$&&A.d()
if(!B.d.q(v,d)){w=w.f
w===$&&A.d()
w=!w.q(0,d)}else w=!1
return w},
$S:30}
D.duE.prototype={
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
t.n(0,w,new A.V(Date.now(),0,!1).bL(3e8).a)}}},
$S:0}
D.duK.prototype={
$0(){return A.O8(this.a)},
$S:0}
D.duL.prototype={
$0(){return this.a.a.d_g('I just read the lesson "'+this.b.b+'". Can you explain it again with a live example from the markets right now?')},
$S:0}
D.duM.prototype={
$0(){this.a.a.rn()
A.O8(this.b)},
$S:0}
D.duF.prototype={
$0(){return this.a.cgf(this.b,this.c)},
$S:0};(function aliases(){var w=D.aPn.prototype
w.bBx=w.t})();(function installTearOffs(){var w=a._instance_0u,v=a._instance_1u
var u
w(u=D.aHo.prototype,"gclC","clD",2)
w(u,"gcz5","a3k",1)
w(D.aGl.prototype,"gcgi","wp",1)
w(u=D.aHq.prototype,"gcgh","Rg",1)
v(u,"gcgg","K1",5)})();(function inheritance(){var w=a.mixinHard,v=a.inheritMany,u=a.inherit
v(A.af,[D.atV,D.adK,D.WU,D.aCz,D.XH,D.a0D])
v(A.ah,[D.aHo,D.bep,D.aGl,D.bhW,D.aPn,D.bl6])
v(A.fR,[D.eHb,D.eGN,D.eGC,D.eGX,D.eGL,D.eGT,D.eGr,D.eGs,D.eGt,D.eGp,D.eGv,D.eH3,D.eH4,D.eH0,D.eH1,D.eGG,D.eGI,D.eGn,D.eH8,D.cX5,D.cX3,D.cX4,D.cX2,D.cX6,D.cX8,D.cXa,D.fhv,D.fw4,D.fBu,D.fFP,D.fCA,D.fJS,D.e7z,D.e7A,D.e7n,D.e7s,D.e7u,D.e7p,D.fGG,D.dii,D.fwU,D.eHl,D.eIf,D.eIg,D.eI8,D.eHo,D.eHq,D.eHr,D.eHP,D.eI5,D.eHu,D.eHw,D.eHi,D.eHj,D.eHS,D.eHt,D.eHO,D.eHL,D.eHN,D.eHx,D.eHF,D.eHy,D.eHz,D.eHA,D.eHB,D.eHC,D.eHD,D.eHE,D.eHW,D.eHY,D.eHZ,D.eI_,D.eI2,D.eHd,D.duS,D.duT,D.duQ,D.duO,D.duP,D.duI,D.duJ])
v(A.hR,[D.eGE,D.eGM,D.eGP,D.eGD,D.eGV,D.eGW,D.eGY,D.eGZ,D.eGR,D.eGS,D.eHa,D.eH5,D.eH6,D.eGu,D.eGq,D.eGw,D.eH_,D.eH2,D.eGH,D.eGF,D.eGz,D.eGy,D.eGA,D.eGx,D.eGo,D.eGB,D.eH9,D.eH7,D.eGl,D.eGk,D.cWZ,D.cX1,D.cX0,D.cX_,D.e7y,D.e7o,D.e7q,D.e7r,D.e7w,D.e7x,D.e7m,D.e7v,D.e7t,D.e7l,D.e7k,D.dih,D.eId,D.eIc,D.eIe,D.eIb,D.eHG,D.eHR,D.eHp,D.eHn,D.eHm,D.eHQ,D.eHI,D.eHv,D.eHh,D.eHk,D.eI9,D.eIa,D.eHs,D.eHK,D.eHJ,D.eHM,D.eI0,D.eHV,D.eI1,D.eHU,D.eHT,D.eI3,D.eHe,D.eHc,D.eHf,D.eHg,D.duN,D.duE,D.duK,D.duL,D.duM,D.duF])
v(A.ie,[D.eGQ,D.eGU,D.eGK,D.eGJ,D.eGO,D.eGm,D.cX7,D.cX9,D.fGH,D.eHH,D.eI6,D.eHX,D.eI4,D.duR,D.duG,D.duH])
v(A.lK,[D.beq,D.bwl])
v(A.aE,[D.z3,D.Rm,D.cD,D.uv,D.a_C])
u(D.aHq,D.aPn)
w(D.aPn,A.ch)})()
A.i0(b.typeUniverse,JSON.parse('{"atV":{"af":[],"w":[]},"adK":{"af":[],"w":[]},"WU":{"af":[],"w":[]},"aCz":{"af":[],"w":[]},"XH":{"af":[],"w":[]},"a0D":{"af":[],"w":[]},"aHo":{"ah":["atV"]},"bep":{"ah":["adK"]},"beq":{"aC":[]},"bwl":{"aC":[]},"aGl":{"ah":["WU"]},"bhW":{"ah":["aCz"]},"aHq":{"ah":["XH"]},"bl6":{"ah":["a0D"]}}'))
var y={c:". Look over the trades, then press Start to turn it back on."}
var x=(function rtii(){var w=A.ar
return{c:w("kT<u?>"),D:w("EC"),V:w("N<aa>"),O:w("N<u>"),t:w("N<a9<m,@>>"),v:w("N<fZ>"),L:w("N<+(m,m)>"),s:w("N<m>"),p:w("N<w>"),r:w("N<cD>"),n:w("N<G>"),X:w("N<F>"),W:w("bv<m,F>"),a:w("bv<F,F>"),P:w("a9<m,@>"),f:w("a9<@,@>"),b:w("cm"),R:w("+at,from,to(V,m,m)"),N:w("m"),E:w("X<uv>"),q:w("ky"),y:w("P"),z:w("@"),S:w("F"),g:w("ai<@>?"),Y:w("a9<@,@>?"),H:w("~")}})();(function constants(){var w=a.makeConstList
C.dc=new A.u(1,0.12156862745098039,0.7490196078431373,0.592156862745098,B.q)
C.b5t=new A.kT(C.dc,x.c)
C.je=new A.u(1,0.08627450980392157,0.10588235294117647,0.1803921568627451,B.q)
C.cC=new A.u(1,0.5411764705882353,0.5607843137254902,0.6392156862745098,B.q)
C.t0=new A.u(1,0.0392156862745098,0.050980392156862744,0.09411764705882353,B.q)
C.t2=new A.u(1,0.9294117647058824,0.9372549019607843,0.9803921568627451,B.q)
C.cD=new A.u(1,0.5529411764705883,0.5843137254901961,0.6705882352941176,B.q)
C.mY=new A.u(1,0.08627450980392157,0.09019607843137255,0.11372549019607843,B.q)
C.pD=new A.u(1,0.14901960784313725,0.17647058823529413,0.27058823529411763,B.q)
C.pE=new A.u(1,0.9058823529411765,0.9098039215686274,0.9411764705882353,B.q)
C.NT=new A.u(1,0.06666666666666667,0.08235294117647059,0.1607843137254902,B.q)
C.NX=new A.u(1,0.12549019607843137,0.14901960784313725,0.23137254901960785,B.q)
C.O_=new A.u(1,0.9725490196078431,0.9450980392156862,0.9490196078431372,B.q)
C.oJ=new A.u(1,0.13725490196078433,0.16470588235294117,0.25882352941176473,B.q)
C.O6=new A.u(1,0.9372549019607843,0.9411764705882353,0.9607843137254902,B.q)
C.d_=new A.u(1,0.07058823529411765,0.0784313725490196,0.10980392156862745,B.q)
C.dO=new A.u(1,0.9411764705882353,0.33725490196078434,0.41568627450980394,B.q)
C.z5=new A.u(1,0.9568627450980393,0.9607843137254902,0.9803921568627451,B.q)
C.z6=new A.u(1,0.11372549019607843,0.13725490196078433,0.2196078431372549,B.q)
C.bED=new A.R(0,0,0,7)
C.bGf=new A.R(12,8,12,6)
C.bGp=new A.R(13,7,13,7)
C.bHe=new A.R(16,10,16,30)
C.ao8=new A.R(16,4,16,40)
C.bHC=new A.R(16,6,16,16)
C.aod=new A.R(16,6,16,40)
C.bHK=new A.R(16,8,16,40)
C.bKu=new A.R(4,0,4,8)
C.arl=new A.a_(62840,"MaterialIcons",!1)
C.bVQ=new A.a_(983325,"MaterialIcons",!1)
C.asy=new A.a_(983635,"MaterialIcons",!0)
C.asj=new A.a_(983372,"MaterialIcons",!1)
C.bXp=new A.ae(C.asj,18,C.dc,null,null,null)
C.bXR=new A.ae(B.xi,16,null,null,null,null)
C.c_V=new A.ae(B.pR,7,C.dc,null,null,null)
C.c0C=new A.ae(B.eb,18,C.dc,null,null,null)
C.c0S=new A.ae(B.ri,20,B.c,null,null,null)
C.c20=new A.ae(B.fE,16,B.c,null,null,null)
C.c36=new A.ae(B.xi,18,null,null,null,null)
C.c59=new A.ae(B.IC,18,null,null,null,null)
C.c5d=new A.ae(B.xl,null,C.dO,null,null,null)
C.c5m=new A.ae(B.ko,18,C.dc,null,null,null)
C.c6C=new A.ae(B.Qm,18,C.dO,null,null,null)
C.cNZ=w([B.dB,B.fy,B.i0],x.O)
C.auY=new A.a7(B.ay,B.aD,B.x,C.cNZ,null,null)
C.aCO=w([C.dO,B.at,C.dc],x.O)
C.caC=new A.a7(B.a5,B.a9,B.x,C.aCO,null,null)
C.cbb=new A.a7(B.a5,B.a9,B.x,C.aCO,B.m5,null)
C.dqK=w([B.dB,B.i0,B.bB],x.O)
C.cef=new A.a7(B.ay,B.aD,B.x,C.dqK,null,null)
C.dt4=w([B.i0,B.bB],x.O)
C.ceD=new A.a7(B.a5,B.a9,B.x,C.dt4,null,null)
C.co8=w([12,24,48],x.X)
C.d6j=w(["All","Forex","Stocks","Crypto"],x.s)
C.aCh=w(["ENTER","SKIP_WEAK","WAIT_LATE"],x.s)
C.dcx=w(["Which market looks strongest right now?","Is Bitcoin going up or down right now?","Why has the agent not bought yet?","Explain RSI like I am new","How do I know when to sell?","What does bullish and bearish mean?"],x.s)
C.f8_=new A.y("The idea","Trading means buying something and selling it later. You make money when you sell for more than you paid, and you lose money when you sell for less. That is all a trade is.")
C.f_C=new A.y("Why prices move","Every price is set by buyers and sellers. When more people want to buy than sell, the price goes up. When more want to sell, it goes down. A chart is simply a picture of that tug of war over time.")
C.f0z=new A.y("Nobody knows the future","No person, app or AI can know for sure where a price goes next. Good traders do not guess. They follow clear rules, keep losses small, and let the winners pay for the losers.")
C.f7I=new A.y("Why pretend money first","This agent uses Alpaca paper money: real prices, fake dollars. You can learn every step, make mistakes and see real results without risking a cent. Professionals practise this way too.")
C.cZw=w([C.f8_,C.f_C,C.f0z,C.f7I],x.L)
C.daN=w(["When you buy","When you sell for more than you paid","When the market opens"],x.s)
C.b3t=new D.cD("When do you make money on a trade?",C.daN,1,"Profit only exists after you sell higher than you bought.")
C.d58=w(["More buyers than sellers","The app","The time of day"],x.s)
C.b3o=new D.cD("What makes a price go up?",C.d58,0,"More people wanting to buy pushes the price up.")
C.dyM=w([C.b3t,C.b3o],x.r)
C.hNV=new D.uv("basics","What trading really is","Buyers, sellers and why prices move",4,P.l8,B.at,"basics",C.cZw,C.dyM)
C.bWs=new A.a_(983780,"MaterialIcons",!1)
C.eRj=new A.y("One candle = one time slice","On this chart every candle is 5 minutes. It shows four prices: where it started (open), where it ended (close), the highest point (high) and the lowest point (low).")
C.eYY=new A.y("The colours","Green candle: the price closed HIGHER than it opened, buyers won those 5 minutes. Yellow candle: it closed LOWER, sellers won. Many apps use red instead of yellow, it means the same thing.")
C.f9c=new A.y("Body and wicks","The thick part (the body) runs from open to close. The thin lines (the wicks) show how far the price went up or down before coming back. A long wick on top means buyers pushed up but sellers pushed it back down.")
C.f6h=new A.y("Reading a row of candles","Several green candles in a row, each closing higher, show buyers in control. Many yellow ones closing lower show sellers in control. Candles that go up and down with no direction mean the market is undecided.")
C.cfJ=w([C.eRj,C.eYY,C.f9c,C.f6h],x.L)
C.daU=w(["It closed higher than it opened","It is a good time to buy","The market is closed"],x.s)
C.b3r=new D.cD("A green candle means...",C.daU,0,"Colour only tells you if it closed above or below where it opened.")
C.cGE=w(["1 day","5 minutes","1 hour"],x.s)
C.b3g=new D.cD("On this chart one candle covers...",C.cGE,1,"The agent works with 5-minute candles.")
C.dhd=w([C.b3r,C.b3g],x.r)
C.hNZ=new D.uv("candles","Reading candles","Open, close, high and low in one shape",5,C.bWs,C.dc,"candles",C.cfJ,C.dhd)
C.f1F=new A.y("Bullish","An uptrend. The price makes higher highs and higher lows, like climbing stairs. Buyers are in control. Traders call this bullish (a bull attacks upward with its horns).")
C.fa7=new A.y("Bearish","A downtrend. Lower highs and lower lows, like walking down stairs. Sellers are in control. This is bearish (a bear swipes downward).")
C.eSA=new A.y("Sideways","The price bounces between a ceiling and a floor with no clear direction. Most trading signals fail here, so the best move is often to wait.")
C.f4r=new A.y("The golden rule","Trade WITH the trend, not against it. Buying in a downtrend because it looks cheap is how most beginners lose. The agent only buys when the trend turns up.")
C.d8W=w([C.f1F,C.fa7,C.eSA,C.f4r],x.L)
C.d72=w(["Bearish","Bullish","Sideways"],x.s)
C.b3s=new D.cD("Higher highs and higher lows means...",C.d72,1,"Climbing stairs = uptrend = bullish.")
C.db4=w(["Work best","Often fail","Are always right"],x.s)
C.b3l=new D.cD("In a sideways market, signals...",C.db4,1,"With no direction, signals flip back and forth.")
C.dzi=w([C.b3s,C.b3l],x.r)
C.hNR=new D.uv("trend","Trends: up, down, sideways","Bullish, bearish and how to tell",5,B.mw,B.cd,"trend",C.d8W,C.dzi)
C.fb8=new A.y("What an average line is","A moving average is the average closing price of the last few candles, drawn as a smooth line. It hides the small wiggles so you can see the real direction.")
C.eQt=new A.y("Fast line (pink)","The average of the last 9 candles, about 45 minutes. It reacts quickly to new moves.")
C.eS5=new A.y("Slow line (purple)","The average of the last 21 candles, about 1 hour 45 minutes. It moves slowly and shows the bigger direction.")
C.f2H=new A.y("How to read them","Fast line ABOVE slow line: recent prices are higher than older ones, the trend is up. Fast line BELOW: the trend is down. When the price itself is above both lines, buyers are strong.")
C.dsC=w([C.fb8,C.eQt,C.eS5,C.f2H],x.L)
C.dIc=w(["45 minutes","1 day","1 week"],x.s)
C.b3u=new D.cD("The pink fast line averages about...",C.dIc,0,"9 candles x 5 minutes = 45 minutes.")
C.dDJ=w(["Trend is up","Trend is down","Market closed"],x.s)
C.b3n=new D.cD("Fast line above slow line means...",C.dDJ,0,"Recent prices are higher than older prices.")
C.doo=w([C.b3u,C.b3n],x.r)
C.hNT=new D.uv("ma","Moving averages","The pink fast line and the purple slow line",6,M.xq,B.bB,"ma",C.dsC,C.doo)
C.f37=new A.y("Buy signal","When the fast line crosses UP through the slow line, the short-term trend has just turned up. That moment is the buy signal. The agent buys at that point ($100 of the stock or coin), but only if the big trend is rising too. It watches 10 stocks on weekdays and 4 coins on weekends at the same time and buys whichever gives a valid entry first.")
C.f_L=new A.y("Sell signal","When the fast line crosses back DOWN through the slow line, the up move is over. That is the sell signal, and the agent closes the trade.")
C.f4C=new A.y("Why it must be fresh","If the cross happened an hour ago, the easy part of the move may be gone. Buying late means buying high. So the agent only acts on a cross that happened since its last check, never on an old one.")
C.f6A=new A.y("The weakness","In sideways markets the lines cross back and forth and give false signals. That is why every trade also has a stop loss: when a signal is wrong, the loss stays small.")
C.czH=w([C.f37,C.f_L,C.f4C,C.f6A],x.L)
C.duP=w(["Crosses above the slow line","Crosses below the slow line","Is flat"],x.s)
C.b3m=new D.cD("The buy signal is when the fast line...",C.duP,0,"Crossing up = trend turning up.")
C.dH7=w(["To avoid buying late","The app is slow","Old crosses are illegal"],x.s)
C.b3e=new D.cD("Why does the agent skip old crosses?",C.dH7,0,"A late entry means buying after most of the move.")
C.d5f=w([C.b3m,C.b3e],x.r)
C.hNS=new D.uv("cross","The crossover signal","Exactly when the agent buys and sells",6,B.arr,B.b2,"cross",C.czH,C.d5f)
C.bVZ=new A.a_(983477,"MaterialIcons",!1)
C.f4a=new A.y("What RSI measures","RSI (Relative Strength Index) compares the size of recent rises with recent falls and gives a number from 0 to 100. Above 50, rises have been bigger. Below 50, falls have been bigger.")
C.eUh=new A.y("Above 70: stretched","The price rose very fast. It is called overbought. It often pauses or pulls back, so buying right then is risky. It can still keep rising in a strong trend.")
C.f4h=new A.y("Below 30: oversold","The price fell very fast. It often bounces, but in a strong downtrend it can stay low. Oversold is not a reason to buy on its own.")
C.f3q=new A.y("How to use it","Use RSI as a second opinion. A buy signal with RSI between 50 and 70 is healthy. A buy signal with RSI above 75 means the move may already be tired.")
C.d5E=w([C.f4a,C.eUh,C.f4h,C.f3q],x.L)
C.dh4=w(["Oversold","Overbought","Neutral"],x.s)
C.b3d=new D.cD("RSI above 70 is called...",C.dh4,1,"It rose fast and is stretched.")
C.b3q=new D.cD("RSI below 30 always means buy.",O.Th,1,"Falling markets can stay oversold. It is a hint, not a signal.")
C.dI4=w([C.b3d,C.b3q],x.r)
C.hNY=new D.uv("rsi","RSI: momentum","Is the move strong, stretched or tired?",5,C.bVZ,B.cE,"rsi",C.d5E,C.dI4)
C.eVI=new A.y("Decide the exit before you enter","Every agent trade has two exits set before it starts, in dollars: take profit when the trade is up $50, stop loss when it is down $50.")
C.eYS=new A.y("Win the same as you risk","The win (+$50) is the same size as the loss (-$50). So every win cancels one loss: winning 5 out of 10 trades breaks even. More than 5 out of 10 is profit, fewer is a loss. The win rate on the agent screen shows which side it is on.")
C.eLo=new A.y("Size matters most","The agent uses $100 per trade even though the paper account has $100,000. Small trades mean no single mistake can hurt much. Pros rarely risk more than 1 to 2 percent of their money on one trade.")
C.f10=new A.y("Never move the stop","The biggest beginner mistake is hoping a losing trade comes back and moving the stop lower. Small losses are the cost of doing business. Big losses end accounts.")
C.dC8=w([C.eVI,C.eYS,C.eLo,C.f10],x.L)
C.csI=w(["5 in 10 trades","9 in 10 trades","Every trade"],x.s)
C.b3j=new D.cD("With +$50 wins and -$50 losses, to break even you must win about...",C.csI,0,"Each win (+50) cancels one loss (-50).")
C.dfC=w(["Move the stop lower","Let the stop loss work","Buy more"],x.s)
C.b3h=new D.cD("A trade is losing. The best move is...",C.dfC,1,"The stop exists to keep losses small.")
C.dli=w([C.b3j,C.b3h],x.r)
C.hNQ=new D.uv("risk","Risk: stop loss and take profit","Why small losses beat big wins",7,B.rj,C.dO,"risk",C.dC8,C.dli)
C.bWy=new A.a_(983848,"MaterialIcons",!1)
C.eUT=new A.y("Bad days happen","Some days every signal fails. The danger is trying to win it back by trading more and bigger. That is called revenge trading and it is how small losses become big ones.")
C.f05=new A.y("Daily stop: $50","If the day loses $50, the agent makes no more buys until tomorrow. It walks away and lets the market calm down.")
C.f7g=new A.y("Total brake: $100","If total losses reach $100, the agent pauses completely until you review what happened and turn it back on. Reviewing is the most important part of learning.")
C.eTh=new A.y("Your own rules","When you trade yourself, set the same kind of limits before the day starts, and keep them even when it hurts.")
C.dhw=w([C.eUT,C.f05,C.f7g,C.eTh],x.L)
C.dkf=w(["Doubles the next trade","Stops buying for the day","Sells everything forever"],x.s)
C.b3i=new D.cD("After losing $50 in a day, the agent...",C.dkf,1,"The daily stop prevents revenge trading.")
C.dhe=w([C.b3i],x.r)
C.hNU=new D.uv("brakes","Daily stop and total brake","Protecting your account from bad days",4,C.bWy,E.jx,"brakes",C.dhw,C.dhe)
C.aj6=new A.u(1,0.3843137254901961,0.49411764705882355,0.9176470588235294,B.q)
C.eZQ=new A.y("Stocks and funds","SPY, QQQ, Apple, Microsoft, Nvidia, Tesla and Amazon trade on US market days from 9:30 AM to 4:00 PM Eastern Time. Closed at night, on weekends and on holidays.")
C.f_I=new A.y("Overnight gaps","News can come out while the stock market is closed, so the next morning it can open far higher or lower. That is why the agent sells stocks by 3:55 PM and never holds them overnight.")
C.eXN=new A.y("Crypto","Bitcoin, Ethereum and Solana trade all day, every day, including weekends. More hours means more chances, but crypto also moves faster and harder, so stops get hit more often.")
C.f62=new A.y("Funds vs single companies","SPY holds the 500 biggest US companies and QQQ holds 100 big tech companies, so they move more calmly. One company like Tesla can jump a lot on its own news.")
C.cTo=w([C.eZQ,C.f_I,C.eXN,C.f62],x.L)
C.d8V=w(["Only weekdays","All day, every day","Only at night"],x.s)
C.b3p=new D.cD("When can Bitcoin be traded?",C.d8V,1,"Crypto never closes.")
C.d5T=w(["To avoid overnight gaps","Stocks expire","It is the law"],x.s)
C.b3f=new D.cD("Why sell stocks before the close?",C.d5T,0,"Overnight news can make the price jump at the open.")
C.dpq=w([C.b3p,C.b3f],x.r)
C.hNX=new D.uv("hours","Stocks vs crypto","Market hours, weekends and jumpiness",5,B.jZ,C.aj6,"hours",C.cTo,C.dpq)
C.f4D=new A.y("Judge many trades, not one","One trade tells you nothing. Luck decides single trades. After 20 to 50 trades you start to see if a method really works. That is why the plan is 2 to 4 weeks of paper trading.")
C.ePO=new A.y("Keep a journal","For each trade write: why you bought, where your stop and target were, what happened, and what you learned. The Pretend trades list on the main screen is the agent's journal.")
C.eQm=new A.y("Follow the rules exactly","The point of the agent is to follow rules perfectly, with no fear and no greed. Check that it did. If it ever breaks a rule, that is a bug to fix before real money.")
C.eXO=new A.y("Before real money","Real money comes only after a long paper test with a positive result, a full review, and money you can truly afford to lose. Never borrow to trade.")
C.dxW=w([C.f4D,C.ePO,C.eQm,C.eXO],x.L)
C.dEE=w(["1","3","20 or more"],x.s)
C.b3c=new D.cD("How many trades before judging a method?",C.dEE,2,"Small samples are mostly luck.")
C.dHC=w(["Borrowed","Money you can afford to lose","Rent money"],x.s)
C.b3k=new D.cD("Money for trading should be...",C.dHC,1,"Never trade money you need.")
C.dI_=w([C.b3c,C.b3k],x.r)
C.hNW=new D.uv("practice","Practising like a pro","Journals, patience and judging results",5,B.m0,B.bj,"practice",C.dxW,C.dI_)
C.Ei=w([C.hNV,C.hNZ,C.hNR,C.hNT,C.hNS,C.hNY,C.hNQ,C.hNU,C.hNX,C.hNW],A.ar("N<uv>"))
C.eul={basics:0,candles:1,trend:2,ma:3,cross:4,rsi:5,risk:6,brakes:7,hours:8,practice:9}
C.dbG=w(["A $4 profit","A $4 loss","Nothing"],x.s)
C.hRW=new D.cD("You buy at $100 and sell at $96. What happened?",C.dbG,1,"Selling lower than you bought is a loss.")
C.duN=w(["The future price","How the price moved over time","Who is buying"],x.s)
C.hRU=new D.cD("What does a price chart show?",C.duN,1,"A chart is a record of past prices.")
C.dGi=w(["Yes, experts can","Yes, an AI can","No, nobody can"],x.s)
C.hS3=new D.cD("Can anyone know for sure where a price goes next?",C.dGi,2,"Markets are uncertain; rules and stops manage that.")
C.ddG=w(["Trading with real prices and pretend money","Trading newspapers","Trading on paper forms"],x.s)
C.hSw=new D.cD("What is paper trading?",C.ddG,0,"Real prices, fake dollars: practice without risk.")
C.dxZ=w(["It is faster","To learn without risking real money","Pretend money earns more"],x.s)
C.hRZ=new D.cD("Why practise with pretend money first?",C.dxZ,1,"Mistakes cost nothing while you learn.")
C.csC=w(["Rise","Fall","Stay frozen"],x.s)
C.hS4=new D.cD("More people want to sell than buy. The price will most likely...",C.csC,1,"Selling pressure pushes prices down.")
C.dgT=w(["Clear rules and small losses","Lucky guesses","Tips from friends"],x.s)
C.hTz=new D.cD("Good traders mostly rely on...",C.dgT,0,"Rules and risk control beat guessing.")
C.ceL=w(["$45","$55","$60"],x.s)
C.hT1=new D.cD("You buy $50 of something and it rises 10%. It is now worth...",C.ceL,1,"10% of $50 is $5, so $55.")
C.cY5=w(["Buy","Sell","Look at the chart"],x.s)
C.hSl=new D.cD("A trade is only finished when you...",C.cY5,1,"Until you sell, a gain or loss is not locked in.")
C.dFw=w(["Good traders never lose","Every trader has losing trades","Losses only happen to beginners"],x.s)
C.hSg=new D.cD("Which is true about losses?",C.dFw,1,"Losing trades are normal; keeping them small is the skill.")
C.cQZ=w(["Real dollars are spent","No real money is at risk","It trades in secret"],x.s)
C.hT9=new D.cD("The agent uses Alpaca paper money. That means...",C.cQZ,1,"Paper accounts use fake dollars.")
C.dqt=w(["The government","Buyers and sellers agreeing","The app makers"],x.s)
C.hRT=new D.cD("A price is set by...",C.dqt,1,"Each trade is a buyer and seller agreeing on a price.")
C.deg=w([C.b3t,C.b3o,C.hRW,C.hRU,C.hS3,C.hSw,C.hRZ,C.hS4,C.hTz,C.hT1,C.hSl,C.hSg,C.hT9,C.hRT],x.r)
C.day=w(["It closed lower than it opened","It closed higher","Nothing traded"],x.s)
C.hTj=new D.cD("A yellow (or red) candle means...",C.day,0,"Sellers won that time slice.")
C.deT=w(["Wick","Body","Tail light"],x.s)
C.hS5=new D.cD("The thick part of a candle is called the...",C.deT,1,"The body runs from open to close.")
C.dnr=w(["Wicks","Bodies","Averages"],x.s)
C.hSQ=new D.cD("The thin lines above and below are the...",C.dnr,0,"Wicks show the high and the low.")
C.dek=w(["Open","Close","Highest price"],x.s)
C.hTb=new D.cD("The top of the upper wick shows the...",C.dek,2,"The tip of the upper wick is the high.")
C.dIr=w(["Lowest price","Open","Average"],x.s)
C.hTs=new D.cD("The bottom of the lower wick shows the...",C.dIr,0,"The tip of the lower wick is the low.")
C.dh0=w(["One","Two","Four"],x.s)
C.hT2=new D.cD("How many prices does one candle show?",C.dh0,2,"Open, high, low and close.")
C.dsn=w(["Buyers pushed up but sellers pushed it back down","The price never moved","The market closed early"],x.s)
C.hT4=new D.cD("A long upper wick means...",C.dsn,0,"The price went high, then fell back before the close.")
C.d5o=w(["Sellers in control","Buyers in control","No direction"],x.s)
C.hSM=new D.cD("Many green candles in a row, each closing higher, show...",C.d5o,1,"Rising closes mean buyers are winning.")
C.d54=w(["A strong uptrend","The market is undecided","A crash"],x.s)
C.hTh=new D.cD("Candles going up and down with no direction mean...",C.d54,1,"Mixed candles show indecision.")
C.daW=w(["Green","Yellow","Grey"],x.s)
C.hT0=new D.cD("A candle opened at 10 and closed at 12. Its colour here is...",C.daW,0,"It closed above the open.")
C.dJ2=w(["5 candles","12 candles","60 candles"],x.s)
C.hS7=new D.cD("In 1 hour of 5-minute candles there are...",C.dJ2,1,"60 minutes divided by 5 is 12.")
C.dr7=w(["The first price in that time","The last price in that time","The highest price"],x.s)
C.hTB=new D.cD('The "close" of a candle is...',C.dr7,1,"Close is where the price ended.")
C.dyb=w([C.b3r,C.b3g,C.hTj,C.hS5,C.hSQ,C.hTb,C.hTs,C.hT2,C.hT4,C.hSM,C.hTh,C.hT0,C.hS7,C.hTB],x.r)
C.d7h=w(["Bullish","Bearish","Sideways"],x.s)
C.hTd=new D.cD("Lower highs and lower lows means...",C.d7h,1,"Walking down stairs = downtrend = bearish.")
C.dmS=w(["Rise","Fall","Stay the same"],x.s)
C.hTG=new D.cD('"Bullish" means you expect prices to...',C.dmS,0,"A bull attacks upward.")
C.djm=w(["Rise","Fall","Double"],x.s)
C.hTE=new D.cD('"Bearish" means you expect prices to...',C.djm,1,"A bear swipes downward.")
C.dn1=w(["Trade against the trend","Trade with the trend","Ignore the trend"],x.s)
C.hSU=new D.cD("The golden rule of trends is...",C.dn1,1,"Going with the trend wins more often.")
C.d8J=w(["A safe plan","A common beginner mistake","What the agent does"],x.s)
C.hTm=new D.cD("Buying in a downtrend because it looks cheap is...",C.d8J,1,"Cheap can get cheaper.")
C.djQ=w(["Sideways","Bullish","Bearish"],x.s)
C.hSp=new D.cD("A price bouncing between a ceiling and a floor is...",C.djQ,0,"No higher highs or lower lows: sideways.")
C.dBr=w(["Trade a lot","Wait","Borrow money"],x.s)
C.hSE=new D.cD("In a sideways market the best move is often to...",C.dBr,1,"Patience avoids false signals.")
C.dlG=w(["Up","Down","Flat"],x.s)
C.hSH=new D.cD("When sellers are in control, the trend is...",C.dlG,1,"Sellers push prices down.")
C.dlD=w(["Stairs going up","Stairs going down","A flat road"],x.s)
C.hRV=new D.cD("Which picture fits an uptrend?",C.dlD,0,"Each step a bit higher.")
C.dBd=w(["Turns down","Turns up","Is sideways"],x.s)
C.hSZ=new D.cD("The agent only buys when the trend...",C.dBd,1,"It buys the start of up moves.")
C.dzB=w(["Getting lower","Getting higher","Gone"],x.s)
C.hSb=new D.cD("A trend changes from bearish to bullish. Lows are now...",C.dzB,1,"Higher lows are the first sign of an uptrend.")
C.dqR=w(["Strong uptrend","Strong downtrend","Sideways"],x.s)
C.hT7=new D.cD("Most trading signals fail in which market?",C.dqR,2,"Without direction, signals flip constantly.")
C.d8H=w([C.b3s,C.b3l,C.hTd,C.hTG,C.hTE,C.hSU,C.hTm,C.hSp,C.hSE,C.hSH,C.hRV,C.hSZ,C.hSb,C.hT7],x.r)
C.dgS=w(["The average closing price of recent candles","The highest price ever","A news feed"],x.s)
C.hTt=new D.cD("A moving average is...",C.dgS,0,"It smooths prices into a line.")
C.dGX=w(["To hide small wiggles and show direction","To predict news","To make charts colourful"],x.s)
C.hTv=new D.cD("Why use a moving average?",C.dGX,0,"It filters noise.")
C.ddn=w(["9","21","100"],x.s)
C.hSR=new D.cD("The purple slow line averages how many candles?",C.ddn,1,"21 candles, about 1 hour 45 minutes.")
C.drc=w(["The fast (pink) line","The slow (purple) line","Both the same"],x.s)
C.hST=new D.cD("Which line reacts faster to new moves?",C.drc,0,"Fewer candles means quicker reaction.")
C.dHc=w(["Trend is up","Trend is down","Buy now"],x.s)
C.hSF=new D.cD("Fast line below slow line means...",C.dHc,1,"Recent prices are lower than older ones.")
C.d9j=w(["Buyers are strong","Sellers are strong","Nothing"],x.s)
C.hRY=new D.cD("The price is above both lines. That shows...",C.d9j,0,"Price above its averages = strength.")
C.d5d=w(["The bigger direction","Only the last candle","Tomorrow price"],x.s)
C.hTc=new D.cD("The slow line shows...",C.d5d,0,"It changes slowly and shows the wider trend.")
C.d1x=w(["15 minutes","1 hour 45 minutes","1 week"],x.s)
C.hSf=new D.cD("The slow line covers about...",C.d1x,1,"21 x 5 minutes = 105 minutes.")
C.coi=w(["Past prices","Future prices","Opinions"],x.s)
C.hTi=new D.cD("Moving averages are based on...",C.coi,0,"They average prices that already happened.")
C.d5C=w(["Lag behind the price","Lead the price","Never move"],x.s)
C.hTw=new D.cD("Because they use past prices, moving averages...",C.d5C,0,"Averages are always a little late.")
C.dq6=w(["A bullish picture","A bearish picture","A closed market"],x.s)
C.hSG=new D.cD("Both lines pointing up and the price above them is...",C.dq6,0,"Everything points up.")
C.dfB=w(["Trending strongly","Sideways","Crashing"],x.s)
C.hTF=new D.cD("When the two lines are tangled together, the market is often...",C.dfB,1,"Tangled lines mean no clear direction.")
C.dAZ=w([C.b3u,C.b3n,C.hTt,C.hTv,C.hSR,C.hST,C.hSF,C.hRY,C.hTc,C.hSf,C.hTi,C.hTw,C.hSG,C.hTF],x.r)
C.dgQ=w(["Crosses below the slow line","Crosses above the slow line","Touches the price"],x.s)
C.hRS=new D.cD("The sell signal is when the fast line...",C.dgQ,0,"Crossing down = the up move is over.")
C.dGf=w(["About $100","$5,000","All the money"],x.s)
C.hS2=new D.cD("How much does the agent put into one trade?",C.dGf,0,"Every pretend trade is $100 of the stock (weekdays) or coin (weekends) itself.")
C.dAS=w(["A fresh signal","An old signal","Not a signal at all ever"],x.s)
C.hTn=new D.cD("A cross that happened an hour ago is...",C.dAS,1,"Fresh means since the last check.")
C.csL=w(["Sideways markets","Strong trends","Closed markets"],x.s)
C.hTr=new D.cD("Crossovers give many false signals in...",C.csL,0,"Lines cross back and forth with no direction.")
C.dpf=w(["The stop loss","Buying more","Ignoring it"],x.s)
C.hSe=new D.cD("What protects you when a signal is wrong?",C.dpf,0,"The stop keeps the loss small.")
C.dj7=w(["Just changed direction","Ended forever","Doubled"],x.s)
C.hTC=new D.cD("The crossover tells you the short-term trend has...",C.dj7,0,"A cross marks a turn.")
C.d2w=w(["1 second","5 minutes","1 day"],x.s)
C.hTu=new D.cD("The agent checks every market on the list every...",C.d2w,1,"The automatic check runs every 5 minutes and looks at all of the day markets at once.")
C.d6G=w(["Buying higher, with less room to rise","A guaranteed win","A cheaper price"],x.s)
C.hS8=new D.cD("Buying late in a move usually means...",C.d6G,0,"Most of the move is already gone.")
C.duk=w(["Trust it more","Trust it less","Bet bigger"],x.s)
C.hTl=new D.cD("If a signal fails often on one market, you should...",C.duk,1,"Check how often it worked before trusting it.")
C.d6A=w(["Buys more","Sells","Waits a week"],x.s)
C.hT3=new D.cD("When the agent holds a trade and the fast line crosses down, it...",C.d6A,1,"The sell signal closes the trade.")
C.cNU=w(["Yes","No","Only on Fridays"],x.s)
C.hSJ=new D.cD("Does a buy signal guarantee the price will rise?",C.cNU,1,"Signals improve the odds; they never guarantee.")
C.daa=w(["Holds no other position","Already holds three","Has lost $100"],x.s)
C.hTL=new D.cD("The agent buys on a signal only if it...",C.daa,0,"One position at a time.")
C.de6=w([C.b3m,C.b3e,C.hRS,C.hS2,C.hTn,C.hTr,C.hSe,C.hTC,C.hTu,C.hS8,C.hTl,C.hT3,C.hSJ,C.hTL],x.r)
C.dls=w(["0 to 100","1 to 10","-50 to 50"],x.s)
C.hTp=new D.cD("RSI is a number from...",C.dls,0,"It always sits between 0 and 100.")
C.dwn=w(["Rises were bigger than falls","Falls were bigger than rises","Nothing moved"],x.s)
C.hSC=new D.cD("RSI above 50 means recent...",C.dwn,0,"Above 50 = buyers stronger lately.")
C.dh3=w(["Overbought","Oversold","Balanced"],x.s)
C.hSL=new D.cD("RSI below 30 is called...",C.dh3,1,"It fell fast and is stretched downward.")
C.du_=w(["Momentum: strength of recent moves","The company profit","Trading volume"],x.s)
C.hSW=new D.cD("RSI measures...",C.du_,0,"It compares gains with losses.")
C.d6n=w(["Healthy","Very stretched","Impossible"],x.s)
C.hSn=new D.cD("A buy signal with RSI 60 is...",C.d6n,0,"Between 50 and 70 is healthy strength.")
C.de1=w(["Just starting","Tired and stretched","Guaranteed"],x.s)
C.hS_=new D.cD("A buy signal with RSI 80 means the move may be...",C.de1,1,"Very high RSI often comes before a pause.")
C.dl6=w(["As a second opinion","As the only reason to trade","Never"],x.s)
C.hSu=new D.cD("Best way to use RSI?",C.dl6,0,"Combine it with the trend signal.")
C.dvC=w(["For a while","Never","Only one candle"],x.s)
C.hSV=new D.cD("In a strong uptrend, RSI can stay above 70...",C.dvC,0,"Strong trends can stay overbought.")
C.dqh=w(["Balanced buyers and sellers","Market closed","Crash coming"],x.s)
C.hSX=new D.cD("RSI of 50 means...",C.dqh,0,"50 is the middle.")
C.d9h=w(["Rose very fast","Fell very fast","Did not move"],x.s)
C.hTx=new D.cD("Overbought means prices...",C.d9h,0,"Overbought = rose fast.")
C.cQ4=w(["Stay oversold and keep falling","Only go up","Freeze the market"],x.s)
C.hSx=new D.cD("Oversold in a strong downtrend can...",C.cQ4,0,"Oversold is not a reason to buy on its own.")
C.cMa=w(["Sellers a little stronger","Extreme buying","Extreme selling"],x.s)
C.hSN=new D.cD("RSI 45 suggests...",C.cMa,0,"Just below 50: sellers slightly ahead.")
C.dl4=w([C.b3d,C.b3q,C.hTp,C.hSC,C.hSL,C.hSW,C.hSn,C.hS_,C.hSu,C.hSV,C.hSX,C.hTx,C.hSx,C.hSN],x.r)
C.dIh=w(["When the trade is up $50","When the trade is up $5","Never"],x.s)
C.hTy=new D.cD("The agent take profit is...",C.dIh,0,"It sells when the trade is up $50.")
C.dAv=w(["When the trade is down $50","When the trade is down $500","It has none"],x.s)
C.hTe=new D.cD("The agent stop loss is...",C.dAv,0,"It sells when the trade is down $50.")
C.doX=w(["A planned exit that limits a loss","A way to stop the app","A bonus"],x.s)
C.hSd=new D.cD("A stop loss is...",C.doX,0,"It sells automatically when the loss reaches a set size.")
C.dez=w(["Before entering the trade","After it goes wrong","Never"],x.s)
C.hSm=new D.cD("When should you decide your exits?",C.dez,0,"Plan exits first, while calm.")
C.dkS=w(["So no single mistake hurts much","It is the maximum allowed","To lose faster"],x.s)
C.hSv=new D.cD("Why does the agent use only about $100 per trade?",C.dkS,0,"Small size protects the account.")
C.dHW=w(["1 to 2 percent","50 percent","100 percent"],x.s)
C.hT8=new D.cD("Pros rarely risk more than about ... of their money on one trade.",C.dHW,0,"Small risk per trade keeps them in the game.")
C.diI=w(["$0","+$100","-$100"],x.s)
C.hTk=new D.cD("Win $50 twice and lose $50 twice. Your total is...",C.diI,0,"50 + 50 - 50 - 50 = 0.")
C.dsW=w(["Profitable","Break even","A loss"],x.s)
C.hTf=new D.cD("Winning half the time with 2 to 1 reward to risk is...",C.dsW,0,"Each win is twice each loss.")
C.deH=w(["Turns small losses into big ones","Guarantees a win","Has no effect"],x.s)
C.hSB=new D.cD('Moving your stop lower to "give it room" usually...',C.deH,0,"Hope is not a plan.")
C.d7q=w(["1 to 1","1 to 2","10 to 1"],x.s)
C.hSI=new D.cD("Reward to risk of the agent is...",C.d7q,0,"$50 target vs $50 stop: the same size.")
C.cse=w(["Can end an account","Are rare","Do not matter"],x.s)
C.hTJ=new D.cD("Big losses are dangerous because they...",C.cse,0,"A 50% loss needs a 100% gain to recover.")
C.cVv=w(["Selling when the planned gain is reached","Buying more","Holding forever"],x.s)
C.hSt=new D.cD("Take profit means...",C.cVv,0,"It locks in the win.")
C.dcT=w([C.b3j,C.b3h,C.hTy,C.hTe,C.hSd,C.hSm,C.hSv,C.hT8,C.hTk,C.hTf,C.hSB,C.hSI,C.hTJ,C.hSt],x.r)
C.dwt=w(["Trading more to win losses back","Taking a break","Following rules"],x.s)
C.hSS=new D.cD("Revenge trading means...",C.dwt,0,"It usually makes losses bigger.")
C.d77=w(["$100 total losses","$25 total losses","Never"],x.s)
C.hSo=new D.cD("The total brake pauses the agent at...",C.d77,0,"$100 total demo losses.")
C.d6H=w(["An admin, after a review","It turns itself on","Nobody ever"],x.s)
C.hSO=new D.cD("Who turns the agent back on after the $100 brake?",C.d6H,0,"A human review comes first.")
C.ceM=w(["$50","$1","$500"],x.s)
C.hS6=new D.cD("The daily stop is...",C.ceM,0,"If the day loses $50, no more buys.")
C.d1D=w(["Stop and reset","Trade bigger","Ignore your limits"],x.s)
C.hTq=new D.cD("Bad days happen. The best response is...",C.d1D,0,"Walking away protects your money.")
C.dnE=w(["Before the day starts","After you lose","Only on weekends"],x.s)
C.hS0=new D.cD("Limits should be set...",C.dnE,0,"Decide limits while calm.")
C.dCO=w(["Reviewing what happened","Forgetting it","Blaming the market"],x.s)
C.hSD=new D.cD("The most important part of learning after a bad run is...",C.dCO,0,"Reviews turn losses into lessons.")
C.cQv=w(["Yes, exits still work","No, it freezes","It buys more instead"],x.s)
C.hT5=new D.cD("After the daily stop, can the agent still sell an open trade?",C.cQv,0,"The stop blocks new buys, not exits.")
C.dHs=w(["Protect the account from bad days","Make more trades","Win every day"],x.s)
C.hT_=new D.cD("Brakes are there to...",C.dHs,0,"They cap the damage.")
C.d8K=w(["Stop trading and rethink","Raise the limits","Borrow money"],x.s)
C.hSz=new D.cD("If you keep breaking your own limits, you should...",C.d8K,0,"Rules only work when kept.")
C.dzI=w(["The next day","Never","Every minute"],x.s)
C.hT6=new D.cD("The daily stop resets...",C.dzI,0,"A new Eastern Time day starts fresh.")
C.dmE=w(["Can lose everything on a bad day","Always wins","Pays no fees"],x.s)
C.hS9=new D.cD("A trader with no loss limits...",C.dmE,0,"Limits are the safety net.")
C.dG6=w(["Pause","Trade faster","Bet bigger"],x.s)
C.hRX=new D.cD("Feeling angry after a loss is a sign to...",C.dG6,0,"Emotions lead to bad trades.")
C.d93=w([C.b3i,C.hSS,C.hSo,C.hSO,C.hS6,C.hTq,C.hS0,C.hSD,C.hT5,C.hT_,C.hSz,C.hT6,C.hS9,C.hRX],x.r)
C.daX=w(["9:30 AM to 4:00 PM Eastern","24 hours","8 PM to midnight"],x.s)
C.hSh=new D.cD("US stock market hours are...",C.daX,0,"On market days only.")
C.hSa=new D.cD("Is the US stock market open on Saturday?",Y.a77,1,"Weekends are closed.")
C.dFG=w(["A jump between the close and the next open","A break in the chart software","A holiday"],x.s)
C.hSY=new D.cD("An overnight gap is...",C.dFG,0,"News while closed moves the next open.")
C.d1C=w(["Faster and harder","Slower","Exactly the same"],x.s)
C.hSA=new D.cD("Crypto compared with SPY usually moves...",C.d1C,0,"Crypto is more jumpy.")
C.duK=w(["The 500 biggest US companies","One company","Bitcoin"],x.s)
C.hTH=new D.cD("SPY holds...",C.duK,0,"It is a fund of 500 companies.")
C.dJ0=w(["They spread over many companies","They are closed","They are crypto"],x.s)
C.hRR=new D.cD("Why do funds like SPY move more calmly?",C.dJ0,0,"One bad company matters less.")
C.dAV=w(["3:55 PM Eastern","Midnight","Noon"],x.s)
C.hTA=new D.cD("The agent sells stocks by...",C.dAV,0,"Before the 4:00 PM close.")
C.d8L=w(["Sunday 5 PM to Friday 5 PM Eastern","Only 9:30 to 4","Only weekends"],x.s)
C.hSi=new D.cD("Forex (currency pairs) trades...",C.d8L,0,"Real forex is closed on weekends.")
C.de2=w(["The broker itself","The real world market","The government"],x.s)
C.hSs=new D.cD("OTC prices at a broker on weekends come from...",C.de2,0,"They are made by the broker and can differ.")
C.dwJ=w(["Do not trade","Trade double","Trade at night"],x.s)
C.hSP=new D.cD("On a US market holiday, stocks...",C.dwJ,0,"Holidays are closed days.")
C.cf4=w(["More often","Never","Less often"],x.s)
C.hTD=new D.cD("Because crypto moves fast, stop losses are hit...",C.cf4,0,"Bigger swings reach stops sooner.")
C.dAU=w(["Its own news","Weekend rules","The colour of candles"],x.s)
C.hTo=new D.cD("One company like Tesla can jump a lot because of...",C.dAU,0,"Single stocks react to company news.")
C.dr3=w([C.b3p,C.b3f,C.hSh,C.hSa,C.hSY,C.hSA,C.hTH,C.hRR,C.hTA,C.hSi,C.hSs,C.hSP,C.hTD,C.hTo],x.r)
C.dfK=w(["Why you entered, your exits and what happened","Only wins","Nothing"],x.s)
C.hSk=new D.cD("A trading journal records...",C.dfK,0,"It shows what really works.")
C.hSK=new D.cD("One winning trade proves a method works.",O.Th,1,"One trade can be pure luck.")
C.dk1=w(["2 to 4 weeks","1 hour","1 day"],x.s)
C.hS1=new D.cD("The plan is to paper trade for...",C.dk1,0,"Enough time for many trades.")
C.doi=w(["A bug to fix before real money","Fine","A bonus"],x.s)
C.hSc=new D.cD("If the agent ever breaks a rule, that is...",C.doi,0,"Rules must be followed exactly.")
C.dtd=w(["A long positive paper test and a full review","One good day","A tip from a friend"],x.s)
C.hTI=new D.cD("Before using real money you need...",C.dtd,0,"Evidence first.")
C.das=w(["Worse than a coin flip","Excellent","Guaranteed"],x.s)
C.hTg=new D.cD("Signals that worked under 50% of the time are...",C.das,0,"Do not trust them.")
C.d5N=w(["Never a good idea for beginners","Smart","Required"],x.s)
C.hTa=new D.cD("Borrowing money to trade is...",C.d5N,0,"Borrowed losses still have to be paid.")
C.dco=w(["The agent journal","An advert","A game"],x.s)
C.hSr=new D.cD("The Pretend trades list on the main screen is...",C.dco,0,"Every buy and sell is recorded.")
C.dpy=w(["No fear and no greed","Lots of emotion","Random choices"],x.s)
C.hSy=new D.cD("The point of an agent is to follow rules with...",C.dpy,0,"Discipline is its strength.")
C.cU2=w(["+$100","-$100","$0"],x.s)
C.hTK=new D.cD("After 10 trades you have 6 wins at +$50 and 4 losses at -$50. Total?",C.cU2,0,"6 x 50 = 300; 4 x 50 = 200; 300 - 200 = +100.")
C.cYr=w(["Review the trades calmly","Quit forever without looking","Double the size"],x.s)
C.hSj=new D.cD("A losing week means you should...",C.cYr,0,"Reviews find what to fix.")
C.dEn=w(["Patient and disciplined","Lucky","Fast clickers"],x.s)
C.hSq=new D.cD("The best traders are mostly...",C.dEn,0,"Patience and rules win over time.")
C.d9e=w([C.b3c,C.b3k,C.hSk,C.hSK,C.hS1,C.hSc,C.hTI,C.hTg,C.hTa,C.hSr,C.hSy,C.hTK,C.hSj,C.hSq],x.r)
C.dLl=new A.bl(C.eul,[C.deg,C.dyb,C.d8H,C.dAZ,C.de6,C.dl4,C.dcT,C.d93,C.dr3,C.d9e],A.ar("bl<m,ai<cD>>"))
C.ewm={EUR:0,USD:1,GBP:2,JPY:3,CAD:4,AUD:5,NZD:6,CHF:7,TRY:8,NOK:9,THB:10}
C.f9U=new A.y("\u20ac",B.dW)
C.faM=new A.y("$",B.es)
C.eQu=new A.y("\xa3",B.dk)
C.eZU=new A.y("\xa5",B.bE)
C.eXP=new A.y("C$",B.hG)
C.f_j=new A.y("A$",B.cW)
C.ePN=new A.y("NZ",B.aw)
C.f35=new A.y("Fr",B.et)
C.f83=new A.y("TL",B.fL)
C.f78=new A.y("kr",B.fX)
C.eUk=new A.y("TH",B.wH)
C.a8t=new A.bl(C.ewm,[C.f9U,C.faM,C.eQu,C.eZU,C.eXP,C.f_j,C.ePN,C.f35,C.f83,C.f78,C.eUk],A.ar("bl<m,+(m,u)>"))
C.c0n=new A.ae(B.pR,5,B.b2,null,null,null)
C.eCV=new A.D(B.hJ,C.c0n,null)
C.fcc=new A.b0(C.dc,B.mw,"up")
C.fcx=new A.b0(1,"Live signals",C.asj)
C.fcF=new A.b0(E.jx,C.asy,"Moving sideways")
C.fcN=new A.b0(C.dO,B.QW,"down")
C.fdf=new A.b0(2,"Ask tutor",B.xi)
C.fdx=new A.b0(B.b2,B.o3,"Waiting for data")
C.fe8=new A.b0(C.dc,B.mw,"Trending up")
C.fef=new A.b0(C.dO,B.QW,"Trending down")
C.fej=new A.b0(0,"Lessons",B.o4)
C.ffm=new A.b0(B.bP,B.o3,"waiting")
C.fj0=new A.b7([B.A1,C.dc,"Signal alerts are ON: the market, ENTER UP or DOWN, and the duration, while NGMY is open or in the background.",null])
C.fkc=new A.b7([B.as6,E.jx,"Signal alerts are unlocked. Allow notifications so the app can tell you when to enter.","Allow"])
C.bZA=new A.ae(B.pR,8,C.dc,null,null,null)
C.fL4=new A.H(!0,C.dc,null,null,null,null,11.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.haJ=new A.C("LIVE",null,C.fL4,null,null,null,null,null,null,null,null,null)
C.dvB=w([C.bZA,B.bc,C.haJ],x.p)
C.fod=new A.c1(B.aK,B.e,B.M,B.l,null,B.p,null,0,C.dvB,null)
C.c_1=new A.ae(B.ri,14,B.c,null,null,null)
C.hhD=new A.C("Learn",null,B.nt,null,null,null,null,null,null,null,null,null)
C.dad=w([C.c_1,B.d8,C.hhD],x.p)
C.fog=new A.c1(B.aK,B.e,B.M,B.l,null,B.p,null,0,C.dad,null)
C.fEw=new A.H(!0,B.c,null,null,null,null,34,B.F,null,-0.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.fF4=new A.H(!0,B.c,null,null,null,null,36,B.F,null,-0.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.fG5=new A.H(!0,B.ab,null,null,null,null,10.5,B.u,null,0.9,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.fHf=new A.H(!0,F.t6,null,null,null,null,11,B.P,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.fHB=new A.H(!0,B.ab,null,null,null,null,11.5,B.F,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.fJp=new A.H(!0,B.c,null,null,null,null,11,B.u,null,0.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.fJB=new A.H(!0,C.dc,null,null,null,null,11.5,B.P,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.fL0=new A.H(!0,C.dO,null,null,null,null,11.5,B.P,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.fP3=new A.H(!0,C.dc,null,null,null,null,12.5,B.P,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.fQ3=new A.H(!0,B.c,null,null,null,null,22,B.u,null,0.8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.fV8=new A.C("Ask the tutor",null,B.cb,null,null,null,null,null,null,null,null,null)
C.aXB=new A.H(!0,C.dO,null,null,null,null,12.5,B.P,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.fVi=new A.C("Not quite. Try again.",null,C.aXB,null,null,null,null,null,null,null,null,null)
C.fWg=new A.C("Win rate ($100 trades)",null,B.LP,null,null,null,null,null,null,null,null,null)
C.fWi=new A.C("All 10 lessons done!",null,null,null,null,null,null,null,null,null,null,null)
C.fWp=new A.C("10 short lessons. Each one shows you the idea live on the real markets the agent is watching.",null,T.FE,null,null,null,null,null,null,null,null,null)
C.fWM=new A.C("Shared paper balance",null,B.LE,null,null,null,null,null,null,null,null,null)
C.fXV=new A.C("Wrong. You have one more try.",null,C.aXB,null,null,null,null,null,null,null,null,null)
C.fZq=new A.C("Turn the agent back on?",null,null,null,null,null,null,null,null,null,null,null)
C.aZ1=new A.H(!0,B.c,null,null,null,null,9.5,B.u,null,0.8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.h13=new A.C("ALL SYSTEMS",null,C.aZ1,null,null,null,null,null,null,null,null,null)
C.h3I=new A.C("PRETEND MONEY",null,C.aZ1,null,null,null,null,null,null,null,null,null)
C.h4q=new A.C("Paper balance",null,B.LE,null,null,null,null,null,null,null,null,null)
C.h89=new A.C("Signal alerts are now unlocked. When a market says ENTER UP or ENTER DOWN, the app will tell you the market, the direction and the duration. Allow notifications to receive them.",null,null,null,null,null,null,null,null,null,null,null)
C.hbe=new A.C("Allow notifications",null,null,null,null,null,null,null,null,null,null,null)
C.fNs=new A.H(!0,B.aR,null,null,null,null,10.5,null,null,null,null,null,1.25,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.hbW=new A.C("5 of 10\n= break even",null,C.fNs,null,B.e4,null,null,null,null,null,null,null)
C.he8=new A.C("Check now",null,B.cb,null,null,null,null,null,null,null,null,null)
C.heO=new A.C("Learn to trade",null,B.m8,null,null,null,null,null,null,null,null,null)
C.hhh=new A.C("Turn back on",null,null,null,null,null,null,null,null,null,null,null)
C.hhH=new A.C("The $100 brake paused the agent. Turning it back on means you have reviewed it. The running demo profit and loss starts again from $0.",null,null,null,null,null,null,null,null,null,null,null)
C.hO3=new D.z3("Nvidia","N",B.Nw)
C.hO5=new D.z3("Ethereum","\u039e",C.aj6)
C.hO8=new D.z3("S&P 500 fund","S&P",B.cd)
C.hO9=new D.z3("Bitcoin","B",F.t6)
C.hOb=new D.z3("Tesla","T",B.bE)
C.hOc=new D.z3("Microsoft","M",B.bp)
C.hOd=new D.z3("Nasdaq 100 fund","Q",B.cE)
C.bo2=new A.u(1,0.6,0.27058823529411763,1,B.q)
C.hOf=new D.z3("Solana","S",C.bo2)
C.hOh=new D.z3("Apple","A",B.cS)
C.hOk=new D.z3("Amazon","a",B.at)})();(function staticFields(){$.DB=A.a([],A.ar("N<a_C>"))
$.ahc=!1
$.hkK=""
$.aM1=0
$.fo1=0})()};
(a=>{a["3CHDlRTYmWa6VXVkOhz9PcT7waY="]=a.current})($__dart_deferred_initializers__);