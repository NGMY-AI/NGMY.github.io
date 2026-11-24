((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,P,E,Q,G,R,I,S,K,L,M,T,U,F,V,W,X,N,D={
i7f(){return new D.atV(null)},
eHq(d){var w=J.a2(d),v=D.dR(w.h(d,"reading")).h(0,"action"),u=J.k(v==null?"":v)
if(B.a.Y(u,"ENTER UP"))return 0
if(B.a.Y(u,"ENTER DOWN"))return 1
if(!J.z(w.h(d,"open"),!0))return 4
return 2+(100-D.cg(D.dR(w.h(d,"reading")).h(0,"score")))/1000},
fBy(d){var w
switch(d){case"SPY":w=C.hOc
break
case"QQQ":w=C.hOh
break
case"AAPL":w=C.hOl
break
case"MSFT":w=C.hOg
break
case"NVDA":w=C.hO7
break
case"TSLA":w=C.hOf
break
case"AMZN":w=C.hOo
break
case"BTC/USD":w=C.hOd
break
case"ETH/USD":w=C.hO9
break
case"SOL/USD":w=C.hOj
break
default:w=new D.z3(d,d.length===0?"?":d[0],B.b_)
break}return w},
bDK(d,e){var w,v,u=null,t=d.split("/")
if(t.length===2&&C.a8t.am(0,t[0])&&C.a8t.am(0,t[1])){t=d.split("/")
w=new D.fwr(e)
return new A.a5(e*1.25,e,new A.an(B.a0,u,B.ad,B.t,A.a([A.ao(u,w.$1(t[0]),u,u,0,u,0,u),A.ao(0,w.$1(t[1]),u,u,u,0,u,u)],x.p),u),u)}v=D.fBy(d)
w=v.b
return A.p(B.z,A.c(w,u,u,u,u,u,u,A.l(u,u,B.c,u,u,u,u,u,u,u,u,w.length>1?e*0.32:e*0.52,u,u,B.u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),B.f,u,u,new A.o(v.c,u,u,u,u,u,B.a6),u,e,u,u,u,u,u,e)},
fBQ(d){var w,v=x.g.a(d.h(0,"markets"))
if(v==null)v=B.bU
v=J.cQ(v,x.f)
v=A.cA(v,new D.fBR(),v.$ti.k("M.E"),x.P)
w=A.B(v,A.a3(v).k("M.E"))
return w},
dR(d){var w=x.N,v=x.z
return x.f.b(d)?A.a0(d,w,v):A.S(w,v)},
cg(d){var w
if(typeof d=="number")w=d
else{w=A.cx(A.v(d==null?"":d))
if(w==null)w=0}return w},
bF6(d){var w=x.g.a(D.dR(J.t(d,"chart")).h(0,"points"))
if(w==null)w=B.bU
w=J.cQ(w,x.f)
w=A.cA(w,new D.fGb(),w.$ti.k("M.E"),x.P)
w=A.B(w,A.a3(w).k("M.E"))
return w},
ev(d,e,f){var w,v=A.o4(B.i.a5(Math.abs(d),2),A.ag("\\B(?=(\\d{3})+(?!\\d))",!0,!1,!1,!1),new D.fCX(),null)
if(d<0)w="-"
else w=f&&d>0?"+":""
return w+(e?"$":"")+v},
RU(d){var w=B.o.F(A.d7(d),12)===0?12:B.o.F(A.d7(d),12),v=B.a.b0(B.o.v(A.fH(d)),2,"0"),u=A.d7(d)<12?"AM":"PM"
return""+w+":"+v+" "+u},
a3A(d){var w=d.ab(),v=new D.fKe(),u=v.$3(A.bD(w),3,2).bL(252e8),t=v.$3(A.bD(w),11,1).bL(216e8),s=w.bL(0-A.dx(0,!w.cW(u)&&w.cW(t)?4:5,0,0,0,0).a)
return A.c0(A.bD(s),A.bN(s),A.bW(s),A.d7(s),A.fH(s),0,0,0)},
aQP(d){var w,v,u,t=d==null,s=A.v(t?"":d).split("-")
if(s.length!==3)return A.v(t?"":d)
w=A.c8(s[1],null)
t=B.ix[B.o.D((w==null?1:w)-1,0,11)]
v=s[2]
u=A.c8(v,null)
return t+" "+A.v(u==null?v:u)+", "+s[0]},
hGH(d){var w,v=A.bh(A.v(d==null?"":d))
if(v==null)return""
w=D.a3A(v)
return B.ix[A.bN(w)-1]+" "+A.bW(w)+" at "+D.RU(w)+" ET"},
hJS(d){var w,v,u=d.split(", ")
if(u.length>=4){w=u[1]
v=u[3]
return w+", "+A.aL(v," ET","")}return d},
hFT(d){return d.length===0?d:d[0].toUpperCase()+B.a.aY(d,1)},
ioX(d){var w=B.a.cc(d,"(")
return B.a.i(w>0?B.a.aw(d,0,w):d)},
hIp(){var w=D.a3A(new A.W(Date.now(),0,!1).ab()),v=B.o.F(A.fH(w),5)
return"at "+D.RU(A.c0(A.bD(w),A.bN(w),A.bW(w),A.d7(w),A.fH(w),0,0,0).bL(A.dx(0,0,0,0,5-v,0).a))+" ET"},
ifT(d){if(B.a.Y(d,"ENTER UP"))return C.cQ
if(B.a.Y(d,"ENTER DOWN"))return C.dn
if(B.a.q(d,"SKIP")||B.a.q(d,"TOO LATE"))return C.dn
if(B.a.Y(d,"MARKET CLOSED"))return B.bP
return E.j_},
hJp(a9,b0,b1,b2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=null,a3="mom1h",a4=J.a2(b0),a5=D.dR(a4.h(b0,"reading")),a6=D.dR(a5.h(0,"timing")),a7=D.bF6(b0),a8=a4.h(b0,"asset")
if(a8==null)a8=a4.h(b0,"symbol")
w=J.k(a8==null?"":a8)
a8=a5.h(0,"action")
v=J.k(a8==null?"WAITING FOR DATA":a8)
u=D.ifT(v)
t=B.i.D(D.cg(a5.h(0,"score")),0,100)
a8=x.g.a(a5.h(0,"notes"))
if(a8==null)a8=B.bU
a8=J.b8(a8,new D.fH2(),x.N)
s=A.B(a8,a8.$ti.k("aj.E"))
r=D.cg(a4.h(b0,"changePct"))
a8=a9.a
q=a8?B.c.j(0.92):C.i8
p=A.m(20)
o=B.a.Y(v,"ENTER")
if(o)n=u.j(0.6)
else n=a8?B.c:C.ml
n=A.K(n,B.r,o?1.6:1)
m=x.V
l=A.a([new A.aa(0,B.H,a9.gI2(),B.hR,14)],m)
k=D.bDK(w,28)
o=A.c(w,a2,a2,a2,a2,a2,a2,A.l(a2,a2,a8?C.cy:B.c,a2,a2,a2,a2,a2,a2,a2,a2,14,a2,a2,B.E,a2,a2,!0,a2,a2,a2,a2,a2,a2,a2,a2),a2,a2,a2)
j=a4.h(b0,"name")
j=J.k(j==null?"":j)
i=x.p
j=A.a([k,B.ar,A.E(A.x(A.a([o,A.c(j,a2,a2,a2,a2,a2,a2,A.l(a2,a2,a8?C.c8:C.c9,a2,a2,a2,a2,a2,a2,a2,a2,11,a2,a2,a2,a2,a2,!0,a2,a2,a2,a2,a2,a2,a2,a2),a2,a2,a2)],i),B.B,a2,B.e,B.h,0,B.p),1)],i)
if(a7.length>2)B.d.u(j,A.a([new A.a5(58,26,A.b4(a2,a2,a2,new D.bwm(a7,r>=0?C.cQ:C.dn,a2),B.az),a2),B.ar],i))
o=D.hJj(b0)
o=A.c(o,a2,a2,a2,a2,a2,a2,A.l(a2,a2,a8?C.cy:B.c,a2,a2,a2,a2,a2,a2,a2,a2,14,a2,a2,B.E,a2,a2,!0,a2,a2,a2,a2,a2,a2,a2,a2),a2,a2,a2)
k=r>=0
h=k?"+":""
g=B.i.a5(r,2)
f=J.z(a4.h(b0,"kind"),"forex")?"30m":"4h"
j.push(A.x(A.a([o,A.c(h+g+"% \xb7 "+f,a2,a2,a2,a2,a2,a2,A.l(a2,a2,k?C.cQ:C.dn,a2,a2,a2,a2,a2,a2,a2,a2,11,a2,a2,B.P,a2,a2,!0,a2,a2,a2,a2,a2,a2,a2,a2),a2,a2,a2)],i),B.dv,a2,B.e,B.h,0,B.p))
o=A.a([A.A(j,B.l,a2,B.e,B.h,0,a2,a2)],i)
k=x.f
if(k.b(a4.h(b0,"v2")))B.d.u(o,A.a([B.af,D.iqv(a9,b0)],i))
else{j=A.a([],i)
if(k.b(a5.h(0,"entry"))){k=D.dR(a5.h(0,"entry"))
e=J.z(k.h(0,"dir"),"up")
d=e?C.cQ:C.dn
a0=Math.max(1,B.i.S(D.cg(k.h(0,"candleMin"))))
h=A.m(18)
g=A.ap(d,B.v,0.25)
g.toString
g=A.a([d,g],x.O)
m=A.a([new A.aa(0,B.H,d.j(0.35),B.cz,16)],m)
f=B.c.j(0.22)
f=A.p(a2,A.V(e?B.pX:B.pW,B.c,a2,a2,a2,34),B.f,a2,a2,new A.o(f,a2,a2,a2,a2,a2,B.a6),a2,52,a2,a2,a2,a2,a2,52)
a1=A.c(e?"ENTER UP":"ENTER DOWN",a2,a2,a2,a2,a2,a2,C.fQ4,a2,a2,a2)
B.d.u(j,A.a([B.af,A.p(a2,A.x(A.a([f,B.ak,a1,A.c(e?"BUY / CALL":"SELL / PUT",a2,a2,a2,a2,a2,a2,C.fHB,a2,a2,a2),B.R,new D.aCA(a0,a2),B.R,A.A(A.a([A.x(A.a([A.c(B.i.a5(D.cg(k.h(0,"durationMin")),0)+" min",a2,a2,a2,a2,a2,a2,B.jp,a2,a2,a2),A.c("Trade for",a2,a2,a2,a2,a2,a2,H.acH,a2,a2,a2)],i),B.l,a2,B.e,B.h,0,B.p),A.p(a2,a2,B.f,B.jU,a2,a2,a2,30,a2,B.r6,a2,a2,a2,1),A.x(A.a([A.c(A.v(k.h(0,"worked"))+" of "+A.v(k.h(0,"of")),a2,a2,a2,a2,a2,a2,B.jp,a2,a2,a2),A.c("Worked lately",a2,a2,a2,a2,a2,a2,H.acH,a2,a2,a2)],i),B.l,a2,B.e,B.h,0,B.p)],i),B.l,a2,B.ba,B.h,0,a2,a2)],i),B.l,a2,B.e,B.h,0,B.p),B.f,a2,a2,new A.o(a2,a2,a2,h,m,new A.a8(B.aX,B.b1,B.x,g,a2,a2),B.m),a2,a2,a2,a2,V.a1P,a2,a2,1/0)],i))}j.push(B.R)
m=u.j(0.15)
k=A.m(999)
k=A.a([A.p(a2,A.c(v,a2,a2,a2,a2,a2,a2,A.l(a2,a2,u,a2,a2,a2,a2,a2,a2,a2,a2,10.5,a2,a2,B.u,a2,a2,!0,a2,0.4,a2,a2,a2,a2,a2,a2),a2,a2,a2),B.f,a2,a2,new A.o(m,a2,a2,k,a2,a2,B.m),a2,a2,a2,a2,B.o2,a2,a2,a2),B.aV],i)
if(a5.h(0,"rsi")!=null){m=B.i.a5(D.cg(a5.h(0,"rsi")),0)
k.push(A.c("RSI "+m,a2,a2,a2,a2,a2,a2,A.l(a2,a2,a8?C.c8:C.c9,a2,a2,a2,a2,a2,a2,a2,a2,11,a2,a2,B.P,a2,a2,!0,a2,a2,a2,a2,a2,a2,a2,a2),a2,a2,a2))}if(a5.h(0,a3)!=null){m=D.cg(a5.h(0,a3))>=0?"+":""
h=B.i.a5(D.cg(a5.h(0,a3)),2)
B.d.u(k,A.a([B.ar,A.c("1h "+m+h+"%",a2,a2,a2,a2,a2,a2,A.l(a2,a2,D.cg(a5.h(0,a3))>=0?C.cQ:C.dn,a2,a2,a2,a2,a2,a2,a2,a2,11,a2,a2,B.P,a2,a2,!0,a2,a2,a2,a2,a2,a2,a2,a2),a2,a2,a2)],i))}j.push(A.A(k,B.l,a2,B.e,B.h,0,a2,a2))
j.push(B.R)
j.push(A.cf(new D.fH3(t,a9)))
j.push(B.at)
m=A.c("Sellers",a2,a2,a2,a2,a2,a2,A.l(a2,a2,a8?C.c8:C.c9,a2,a2,a2,a2,a2,a2,a2,a2,10,a2,a2,a2,a2,a2,!0,a2,a2,a2,a2,a2,a2,a2,a2),a2,a2,a2)
k=B.i.a5(t,0)
k=A.c("Strength "+k+"/100",a2,a2,a2,a2,a2,a2,A.l(a2,a2,a8?C.cy:B.c,a2,a2,a2,a2,a2,a2,a2,a2,10.5,a2,a2,B.E,a2,a2,!0,a2,a2,a2,a2,a2,a2,a2,a2),a2,a2,a2)
j.push(A.A(A.a([m,B.aV,k,B.aV,A.c("Buyers",a2,a2,a2,a2,a2,a2,A.l(a2,a2,a8?C.c8:C.c9,a2,a2,a2,a2,a2,a2,a2,a2,10,a2,a2,a2,a2,a2,!0,a2,a2,a2,a2,a2,a2,a2,a2),a2,a2,a2)],i),B.l,a2,B.e,B.h,0,a2,a2))
j.push(B.M)
m=J.z(a4.h(b0,"open"),!0)?A.cU(s,1,a2,A.U(s).c):s
m=J.E7(m,b1?2:99)
k=m.$ti
m=new A.bP(m,m.gJ(0),k.k("bP<aj.E>"))
k=k.k("aj.E")
while(m.C()){h=m.d
if(h==null)h=k.a(h)
g=A.V(B.pS,u,a2,a2,a2,4.5)
f=a8?C.cy:B.c
j.push(new A.D(B.mr,new A.c1(B.aK,B.e,B.h,B.B,a2,B.p,a2,0,A.a([new A.D(B.hK,g,a2),Q.xY,new A.bu(1,B.b9,A.c(h,a2,a2,a2,a2,a2,a2,new A.H(!0,f,a2,a2,a2,a2,12.3,a2,a2,a2,a2,a2,1.35,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2),a2,a2,a2),a2)],i),a2),a2))}if(J.z(a4.h(b0,"open"),!0))B.d.u(j,A.a([B.R,D.iia(a9,a5,a6)],i))
B.d.u(o,j)}if(b2!=null)o.push(new A.bK(B.a9,a2,a2,A.hv(C.bXR,A.c("Ask the tutor about "+w,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2),b2,a2),a2))
return A.p(a2,A.x(o,B.B,a2,B.e,B.h,0,B.p),B.f,a2,a2,new A.o(q,a2,n,p,l,a2,B.m),a2,a2,a2,B.d6,B.bF,a2,a2,a2)},
iqv(a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f="activeSignal",e=null,d=J.a2(a5),a0=D.dR(d.h(a5,"v2")),a1=x.f,a2=a1.b(d.h(a5,f))?D.dR(d.h(a5,f)):e,a3=J.z(d.h(a5,"open"),!0)
d=a2==null
w=!d
v=w?A.v(a2.h(0,"direction")):"WAIT"
u=v==="BUY"
if(u)t=C.cQ
else t=v==="SELL"?C.dn:B.bP
s=d?e:a2.h(0,"checks")
if(s==null)s=a0.h(0,"checks")
x.g.a(s)
a1=J.cQ(s==null?B.bU:s,a1)
a1=A.cA(a1,new D.fKK(),a1.$ti.k("M.E"),x.P)
r=A.B(a1,A.a3(a1).k("M.E"))
q=w?5:B.i.M(D.cg(a0.h(0,"passed")))
d=d?e:a2.h(0,"grade_at")
p=A.bh(A.v(d==null?"":d))
if(!a3)o="This market is closed right now, so the answer is WAIT. No signals while it is closed."
else if(w){d=a2.h(0,"explain")
d=A.v(d==null?"":d)
o=d}else{if(J.z(a0.h(0,"strong"),!0))d="All 5 confirmations agree right now, but a signal is only given at the 30-minute checks (at most 5 a day). Until then: WAIT."
else{d=a0.h(0,"explain")
d=A.v(d==null?"WAIT.":d)}o=d}d=t.j(0.08)
a1=A.m(16)
s=A.K(t.j(0.45),B.r,1)
n=A.c(v,e,e,e,e,e,e,A.l(e,e,t,e,e,e,e,e,e,e,e,26,e,e,B.u,e,e,!0,e,1,e,e,e,e,e,e),e,e,e)
m=t.j(0.16)
l=A.m(999)
k=w?"STRONG":""+q+" of 5 confirmations"
j=x.p
l=A.a([n,B.ar,A.p(e,A.c(k,e,e,e,e,e,e,A.l(e,e,t,e,e,e,e,e,e,e,e,10.5,e,e,B.u,e,e,!0,e,e,e,e,e,e,e,e),e,e,e),B.f,e,e,new A.o(m,e,e,l,e,e,B.m),e,e,e,e,B.eZ,e,e,e),B.aV],j)
if(w){n=a2.h(0,"et_time")
n=B.d.gal(A.v(n==null?"":n).split(", "))
l.push(A.c(n,e,e,e,e,e,e,A.l(e,e,a4.a?C.c8:C.c9,e,e,e,e,e,e,e,e,10.5,e,e,B.P,e,e,!0,e,e,e,e,e,e,e,e),e,e,e))}n=A.a([A.A(l,B.l,e,B.e,B.h,0,e,e),B.at,C.h27],j)
if(w&&p!=null){w=D.RU(D.a3A(p.ab()))
u=u?"higher":"lower"
n.push(A.c("Graded at "+w+" ET, 30 minutes after it was given: WIN if the price finished "+u+".",e,e,e,e,e,e,A.l(e,e,a4.a?C.c8:C.c9,e,e,e,e,e,e,e,e,11,e,e,e,e,1.3,!0,e,e,e,e,e,e,e,e),e,e,e))}n.push(B.M)
w=a4.a
n.push(A.c(o,e,e,e,e,e,e,A.l(e,e,w?C.cy:B.c,e,e,e,e,e,e,e,e,12.3,e,e,e,e,1.35,!0,e,e,e,e,e,e,e,e),e,e,e))
n.push(B.M)
for(u=r.length,i=0;i<r.length;r.length===u||(0,A.I)(r),++i){h=r[i]
m=J.a2(h)
l=J.z(m.h(h,"ok"),!0)?B.ea:B.Ih
l=A.V(l,J.z(m.h(h,"ok"),!0)?C.cQ:C.dn,e,e,e,15)
k=J.z(m.h(h,"ok"),!0)?"Yes":"No"
m=m.h(h,"text")
m=A.v(m==null?"":m)
g=w?C.cy:B.c
n.push(new A.D(B.mr,new A.c1(B.aK,B.e,B.h,B.B,e,B.p,e,0,A.a([l,B.bb,new A.bu(1,B.b9,A.c(k+" \u2014 "+m,e,e,e,e,e,e,new A.H(!0,g,e,e,e,e,11.8,e,e,e,e,e,1.3,e,e,e,e,e,e,e,e,e,e,e,e,e),e,e,e),e)],j),e),e))}return A.p(e,A.x(n,B.B,e,B.e,B.h,0,B.p),B.f,e,e,new A.o(d,e,s,a1,e,e,B.m),e,e,e,e,B.bg,e,e,1/0)},
iia(a4,a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e="dir",d="typicalMin",a0="entry",a1=a5.h(0,"decision"),a2=J.k(a1==null?"NO_DIRECTION":a1),a3=J.z(a5.h(0,e),"up")
a1=x.g.a(a5.h(0,"notes"))
if(a1==null)a1=B.bU
a1=J.b8(a1,new D.fxg(),x.N)
w=A.B(a1,a1.$ti.k("aj.E"))
A:{if("ENTER"===a2){a1=a3?C.cQ:C.dn
break A}if("SKIP_WEAK"===a2||"WAIT_LATE"===a2){a1=C.dn
break A}a1=E.j_
break A}v=a6.h(0,d)!=null&&a6.h(0,e)!=null&&!J.z(a6.h(0,e),"none")&&a2!=="NO_DIRECTION"&&a2!=="CLOSED"
u=D.cg(a6.h(0,"of"))
t=D.cg(a6.h(0,"worked"))
s=u>0
r=s?t/u:0
q=J.z(a6.h(0,e),"up")?"up":"down"
p=a4.a
o=p?C.v1:C.v2
n=A.m(16)
m=A.K(a1.j(0.55),B.r,1.5)
l=A.V(B.mx,p?C.cy:B.c,f,f,f,16)
k=x.p
l=A.A(A.a([l,B.bb,A.c("DECISION AND DURATION",f,f,f,f,f,f,A.l(f,f,p?C.cy:B.c,f,f,f,f,f,f,f,f,11.5,f,f,B.u,f,f,!0,f,1,f,f,f,f,f,f),f,f,f)],k),B.l,f,B.e,B.h,0,f,f)
j=a1.j(0.14)
i=A.m(10)
h=a5.h(0,"action")
h=A.a([A.c(J.k(h==null?"":h),f,f,f,f,f,f,A.l(f,f,a1,f,f,f,f,f,f,f,f,13,f,f,B.u,f,f,!0,f,f,f,f,f,f,f,f),f,f,f)],k)
if(w.length!==0){g=B.d.gG(w)
B.d.u(h,A.a([B.cP,A.c(g,f,f,f,f,f,f,A.l(f,f,p?C.cy:B.c,f,f,f,f,f,f,f,f,12.3,f,f,f,f,1.35,!0,f,f,f,f,f,f,f,f),f,f,f)],k))}l=A.a([l,B.M,A.p(f,A.x(h,B.B,f,B.e,B.h,0,B.p),B.f,f,f,new A.o(j,f,f,i,f,f,B.m),f,f,f,f,B.iO,f,f,1/0)],k)
if(a2==="ENTER"&&x.f.b(a5.h(0,a0)))B.d.u(l,A.a([B.M,A.A(A.a([A.E(D.hGA(a4,"Trade for",B.i.a5(D.cg(D.dR(a5.h(0,a0)).h(0,"durationMin")),0)+" min",a1),1),A.E(D.hGA(a4,"Enter at","next "+B.i.a5(D.cg(D.dR(a5.h(0,a0)).h(0,"candleMin")),0)+"-min candle",f),1)],k),B.l,f,B.e,B.h,0,f,f)],k))
if(v){a1=A.c("What this is based on",f,f,f,f,f,f,A.l(f,f,p?C.c8:C.c9,f,f,f,f,f,f,f,f,10.5,f,f,B.E,f,f,!0,f,f,f,f,f,f,f,f),f,f,f)
j=D.hlL(a4,B.fN,"This "+q+" move started "+B.i.a5(D.cg(a6.h(0,"ageMin")),0)+" min ago.",f)
i=q==="up"?"Up":"Down"
k=A.a([B.R,a1,B.at,j,D.hlL(a4,B.asy,i+" moves on this market usually end after about "+B.i.a5(D.cg(a6.h(0,d)),0)+" min.",f)],k)
if(s){a1=B.i.a5(u,0)
s=B.i.a5(t,0)
j=B.i.S(r*100)
i=r>=0.5
h=i?"Reliable enough.":"Under half: unreliable."
i=i?C.cQ:C.dn
k.push(D.hlL(a4,B.pY,"Of the last "+a1+" "+q+" moves here, "+s+" really went "+q+" ("+j+"%). "+h,i))}B.d.u(l,k)}l.push(B.at)
l.push(A.c("Estimates from this market's recent moves, not promises.",f,f,f,f,f,f,A.l(f,f,p?C.c8:C.c9,f,f,f,f,f,f,f,f,10.5,f,f,f,f,f,!0,f,f,f,f,f,f,f,f),f,f,f))
return A.p(f,A.x(l,B.B,f,B.e,B.h,0,B.p),B.f,f,f,new A.o(o,f,m,n,f,f,B.m),f,f,f,f,B.bg,f,f,1/0)},
hlL(d,e,f,g){var w,v=null,u=g==null
if(u)w=d.a?C.c8:C.c9
else w=g
w=A.V(e,w,v,v,v,14)
if(u)u=d.a?C.cy:B.c
else u=g
return new A.D(B.Hy,A.A(A.a([w,B.bb,A.E(A.c(f,v,v,v,v,v,v,A.l(v,v,u,v,v,v,v,v,v,v,v,12,v,v,v,v,1.35,!0,v,v,v,v,v,v,v,v),v,v,v),1)],x.p),B.B,v,B.e,B.h,0,v,v),v)},
hGA(d,e,f,g){var w=null,v=d.a,u=A.c(e,w,w,w,w,w,w,A.l(w,w,v?C.c8:C.c9,w,w,w,w,w,w,w,w,10.5,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)
if(g==null)v=v?C.cy:B.c
else v=g
return A.x(A.a([u,A.c(f,w,w,w,w,w,w,A.l(w,w,v,w,w,w,w,w,w,w,w,13.5,w,w,B.E,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),B.B,w,B.e,B.h,0,B.p)},
hJj(d){var w=J.a2(d),v=D.cg(w.h(d,"price"))
if(!J.z(w.h(d,"kind"),"forex"))return D.ev(v,!0,!1)
return B.i.a5(v,v>=100?3:5)},
hAr(d,e){return new D.XK(d,e,null)},
hES(){var w=Math.max(0,$.aM1-1)
$.aM1=w
if(w===0){B.d.a6($.DB)
$.ahd=!1
$.hl6=""
$.foo=$.foo+1}},
eIu(d){var w
x.g.a(d)
w=d==null?B.bU:d
w=J.cQ(w,x.f)
w=A.cA(w,new D.eIv(),w.$ti.k("M.E"),x.P)
w=A.B(w,A.a3(w).k("M.E"))
return w},
hEm(d){var w=J.t(d,"kind")
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
eHB:function eHB(d){this.a=d},
eHC:function eHC(d){this.a=d},
eH_:function eH_(d,e){this.a=d
this.b=e},
eHa:function eHa(d,e){this.a=d
this.b=e},
eH1:function eH1(d,e){this.a=d
this.b=e},
eH9:function eH9(d,e){this.a=d
this.b=e},
eHc:function eHc(d,e){this.a=d
this.b=e},
eHd:function eHd(d,e){this.a=d
this.b=e},
eGZ:function eGZ(){},
eH0:function eH0(d,e,f){this.a=d
this.b=e
this.c=f},
eHl:function eHl(){},
eHj:function eHj(d){this.a=d},
eHk:function eHk(d){this.a=d},
eHm:function eHm(d,e){this.a=d
this.b=e},
eHn:function eHn(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eH8:function eH8(d){this.a=d},
eHf:function eHf(d){this.a=d},
eHg:function eHg(d,e){this.a=d
this.b=e},
eHh:function eHh(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eHe:function eHe(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eHi:function eHi(){},
eHA:function eHA(d){this.a=d},
eHv:function eHv(d){this.a=d},
eHw:function eHw(d){this.a=d},
eGO:function eGO(d){this.a=d},
eGP:function eGP(d){this.a=d},
eGQ:function eGQ(d){this.a=d},
eGR:function eGR(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eGM:function eGM(d){this.a=d},
eGN:function eGN(d,e){this.a=d
this.b=e},
eGS:function eGS(d){this.a=d},
eGT:function eGT(d){this.a=d},
eHt:function eHt(){},
eHu:function eHu(){},
eHp:function eHp(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eHo:function eHo(d){this.a=d},
eHs:function eHs(d,e){this.a=d
this.b=e},
eHr:function eHr(d){this.a=d},
eH3:function eH3(){},
eH4:function eH4(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eH5:function eH5(d){this.a=d},
eH7:function eH7(){},
eH6:function eH6(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
eH2:function eH2(d,e){this.a=d
this.b=e},
eGW:function eGW(d,e){this.a=d
this.b=e},
eGV:function eGV(d,e){this.a=d
this.b=e},
eGX:function eGX(d){this.a=d},
eGU:function eGU(d){this.a=d},
eGK:function eGK(d){this.a=d},
eGL:function eGL(){},
eHb:function eHb(d,e){this.a=d
this.b=e},
eGY:function eGY(d,e){this.a=d
this.b=e},
eGJ:function eGJ(d){this.a=d},
eHy:function eHy(){},
eHz:function eHz(d){this.a=d},
eHx:function eHx(d){this.a=d},
eGI:function eGI(d){this.a=d},
eGH:function eGH(d){this.a=d},
a_z:function a_z(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
beq:function beq(){this.c=this.a=this.d=null},
cX_:function cX_(d,e){this.a=d
this.b=e},
cX8:function cX8(d){this.a=d},
cX6:function cX6(d,e){this.a=d
this.b=e},
cX4:function cX4(d,e){this.a=d
this.b=e},
cX5:function cX5(d,e){this.a=d
this.b=e},
cX3:function cX3(d){this.a=d},
cX2:function cX2(d){this.a=d},
cX7:function cX7(d){this.a=d},
cX1:function cX1(d){this.a=d},
cX0:function cX0(d){this.a=d},
ber:function ber(d,e,f,g,h,i,j,k){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.w=j
_.a=k},
cX9:function cX9(d){this.a=d},
cXb:function cXb(d,e){this.a=d
this.b=e},
cXa:function cXa(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
bwm:function bwm(d,e,f){this.b=d
this.c=e
this.a=f},
fhS:function fhS(){},
z3:function z3(d,e,f){this.a=d
this.b=e
this.c=f},
fwr:function fwr(d){this.a=d},
fBR:function fBR(){},
Ro:function Ro(d){this.a=d},
fGb:function fGb(){},
fCX:function fCX(){},
fKe:function fKe(){},
WX:function WX(d,e){this.c=d
this.a=e},
aGm:function aGm(d){var _=this
_.d=null
_.e=d
_.f=!0
_.r=!1
_.x=_.w=null
_.z=_.y=!1
_.c=_.a=_.Q=null},
e7V:function e7V(d){this.a=d},
e7s:function e7s(d,e){this.a=d
this.b=e},
e7r:function e7r(){},
e7C:function e7C(d,e,f){this.a=d
this.b=e
this.c=f},
e7B:function e7B(){},
e7I:function e7I(d,e){this.a=d
this.b=e},
e7J:function e7J(d,e,f){this.a=d
this.b=e
this.c=f},
e7T:function e7T(d){this.a=d},
e7U:function e7U(d){this.a=d},
e7q:function e7q(d,e){this.a=d
this.b=e},
e7A:function e7A(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
e7y:function e7y(){},
e7G:function e7G(d){this.a=d},
e7H:function e7H(d){this.a=d},
e7E:function e7E(){},
e7F:function e7F(d){this.a=d},
e7v:function e7v(){},
e7x:function e7x(){},
e7w:function e7w(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e7u:function e7u(d,e){this.a=d
this.b=e},
e7t:function e7t(d,e){this.a=d
this.b=e},
e7p:function e7p(){},
e7K:function e7K(d){this.a=d},
e7z:function e7z(){},
e7R:function e7R(){},
e7S:function e7S(d){this.a=d},
e7Q:function e7Q(d){this.a=d},
e7P:function e7P(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
e7M:function e7M(){},
e7O:function e7O(){},
e7N:function e7N(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
e7L:function e7L(d){this.a=d},
e7o:function e7o(d){this.a=d},
e7n:function e7n(d){this.a=d},
e7D:function e7D(){},
aBh:function aBh(d,e,f){this.c=d
this.d=e
this.a=f},
bf6:function bf6(){this.c=this.a=this.d=null},
d9Y:function d9Y(d){this.a=d},
d9X:function d9X(){},
fH2:function fH2(){},
fH3:function fH3(d,e){this.a=d
this.b=e},
fKK:function fKK(){},
aCA:function aCA(d,e){this.c=d
this.a=e},
bhY:function bhY(){this.c=this.a=this.d=null},
dil:function dil(d){this.a=d},
dik:function dik(){},
fxg:function fxg(){},
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
XK:function XK(d,e,f){this.c=d
this.d=e
this.a=f},
a_F:function a_F(d,e){this.a=d
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
_.aa$=l
_.c=_.a=null},
eHM:function eHM(){},
eIA:function eIA(d){this.a=d},
eIz:function eIz(){},
eIB:function eIB(d){this.a=d},
eIC:function eIC(d){this.a=d},
eIy:function eIy(d,e){this.a=d
this.b=e},
eID:function eID(d){this.a=d},
eIv:function eIv(){},
eI6:function eI6(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eIf:function eIf(d){this.a=d},
eHP:function eHP(d){this.a=d},
eHQ:function eHQ(d,e){this.a=d
this.b=e},
eHR:function eHR(d){this.a=d},
eHS:function eHS(d){this.a=d},
eHO:function eHO(d,e){this.a=d
this.b=e},
eHN:function eHN(d,e){this.a=d
this.b=e},
eIe:function eIe(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eId:function eId(){},
eIs:function eIs(){},
eIt:function eIt(){},
eHV:function eHV(d){this.a=d},
eHW:function eHW(){},
eHX:function eHX(){},
eHI:function eHI(d,e){this.a=d
this.b=e},
eHJ:function eHJ(){},
eHK:function eHK(){},
eHL:function eHL(){},
eIg:function eIg(d){this.a=d},
eIw:function eIw(d){this.a=d},
eIx:function eIx(d,e){this.a=d
this.b=e},
eHU:function eHU(d){this.a=d},
eHT:function eHT(d,e){this.a=d
this.b=e},
eIc:function eIc(d,e){this.a=d
this.b=e},
eI8:function eI8(d,e){this.a=d
this.b=e},
eI9:function eI9(d,e){this.a=d
this.b=e},
eI7:function eI7(d,e,f){this.a=d
this.b=e
this.c=f},
eIa:function eIa(d,e){this.a=d
this.b=e},
eIb:function eIb(d){this.a=d},
eHY:function eHY(d,e,f){this.a=d
this.b=e
this.c=f},
eI5:function eI5(d){this.a=d},
eHZ:function eHZ(){},
eI_:function eI_(){},
eI0:function eI0(){},
eI1:function eI1(){},
eI2:function eI2(){},
eI3:function eI3(){},
eI4:function eI4(){},
eIl:function eIl(d,e){this.a=d
this.b=e},
eIm:function eIm(){},
eIo:function eIo(d,e){this.a=d
this.b=e},
eIk:function eIk(d,e){this.a=d
this.b=e},
eIn:function eIn(d){this.a=d},
eIp:function eIp(d){this.a=d},
eIj:function eIj(d){this.a=d},
eIq:function eIq(d){this.a=d},
eIi:function eIi(d,e){this.a=d
this.b=e},
eIr:function eIr(d,e){this.a=d
this.b=e},
eIh:function eIh(){},
eHE:function eHE(d){this.a=d},
eHF:function eHF(d,e){this.a=d
this.b=e},
eHD:function eHD(d,e){this.a=d
this.b=e},
eHG:function eHG(d,e){this.a=d
this.b=e},
eHH:function eHH(d){this.a=d},
a0G:function a0G(d,e,f,g,h,i,j,k,l,m){var _=this
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
bl8:function bl8(d){var _=this
_.x=_.w=_.r=_.f=_.e=_.d=$
_.y=d
_.c=_.a=_.z=null},
duV:function duV(){},
duW:function duW(){},
duT:function duT(){},
duU:function duU(){},
duR:function duR(d){this.a=d},
duS:function duS(d){this.a=d},
duQ:function duQ(d){this.a=d},
duJ:function duJ(){},
duK:function duK(){},
duL:function duL(d){this.a=d},
duM:function duM(d){this.a=d},
duH:function duH(d,e,f){this.a=d
this.b=e
this.c=f},
duN:function duN(d){this.a=d},
duO:function duO(d,e){this.a=d
this.b=e},
duP:function duP(d,e){this.a=d
this.b=e},
duI:function duI(d,e,f){this.a=d
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
R(){return new D.aHp(A.a([],x.t),A.mj(0,null,null))}}
D.aHp.prototype={
a_(){var w=this
w.a3()
$.aM1=$.aM1+1
w.a.toString
w.aew()
w.B6()
w.yP(!1).bE(new D.eHB(w),x.H)
w.ch=A.d0(B.nW,new D.eHC(w))},
B6(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m
var $async$B6=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.aB(),$async$B6)
case 7:q=e
p=A.aV(J.t(q.a,"ngmy_signal_grid_status_cache"))
if(p==null||r.c==null||r.d!=null){w=1
break}o=A.a0(x.f.a(B.U.aP(0,p,null)),x.N,x.z)
r.l(new D.eH_(r,o))
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
a3c(d){return this.cyA(d)},
cyA(d){var w=0,v=A.j(x.H),u=1,t=[],s,r,q
var $async$a3c=A.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:u=3
w=6
return A.b(A.aB(),$async$a3c)
case 6:s=f
w=7
return A.b(s.aB("String","ngmy_signal_grid_status_cache",B.U.au(d,null)),$async$a3c)
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
return A.i($async$a3c,v)},
t(){var w=this.ch
if(w!=null)w.a1(0)
this.as.t()
D.hES()
this.a2()},
crj(d){var w=this
if(!w.at&&d>0){w.at=!0
$.aU.U$.push(new D.eHa(w,d))}return w.as},
aew(){var w=0,v=A.j(x.H),u=1,t=[],s=this,r,q,p,o
var $async$aew=A.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:u=3
w=6
return A.b(A.aB(),$async$aew)
case 6:r=e
q=A.aV(J.t(r.a,"ngmy_signal_grid_market"))
if(q!=null&&q.length!==0&&s.c!=null&&s.Q==null)s.l(new D.eH1(s,q))
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
return A.i($async$aew,v)},
a25(d){return this.cqQ(d)},
cqQ(d){var w=0,v=A.j(x.H),u=1,t=[],s=this,r,q,p
var $async$a25=A.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:s.l(new D.eH9(s,d))
u=3
w=6
return A.b(A.aB(),$async$a25)
case 6:r=f
w=7
return A.b(r.aB("String","ngmy_signal_grid_market",d),$async$a25)
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
return A.i($async$a25,v)},
yP(d){return this.cw9(d)},
cw9(d){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$yP=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.x?null:t.bV0()
w=3
return A.b(A.fP(A.J(["action","paStatus","live",d],x.N,x.z),!1,!1,!1,!1,B.wY),$async$yP)
case 3:q=f
if(t.c==null){w=1
break}t.l(new D.eHc(t,q))
if(q!=null&&J.z(J.t(q,"ok"),!0))t.a3c(q)
w=r!=null?4:5
break
case 4:w=6
return A.b(r,$async$yP)
case 6:s=f
if(t.c!=null&&s!=null&&t.d!=null)t.l(new D.eHd(t,s))
case 5:case 1:return A.h(u,v)}})
return A.i($async$yP,v)},
Z7(d){return this.bV1(d)},
bV0(){return this.Z7(0)},
bV1(d){var w=0,v=A.j(x.i),u,t,s
var $async$Z7=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(A.fP(A.J(["action","paLog","limit",30,"beforeId",d],x.N,x.z),!1,!1,!1,!1,B.hb),$async$Z7)
case 3:s=f
if(s==null||!J.z(J.t(s,"ok"),!0)){u=null
w=1
break}t=x.g.a(J.t(s,"rows"))
if(t==null)t=B.bU
t=J.cQ(t,x.f)
t=A.cA(t,new D.eGZ(),t.$ti.k("M.E"),x.P)
t=A.B(t,A.a3(t).k("M.E"))
u=t
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$Z7,v)},
a_5(d){return this.c7f(d)},
c7e(){return this.a_5(!1)},
c7f(d){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a_5=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=d&&J.cJ(t.e)?J.t(J.Te(t.e),"id"):0
w=3
return A.b(t.Z7(s==null?0:s),$async$a_5)
case 3:r=f
if(t.c==null||r==null){w=1
break}t.l(new D.eH0(t,d,r))
case 1:return A.h(u,v)}})
return A.i($async$a_5,v)},
za(d){return this.cB6(d)},
cB6(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$za=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:p=t.d
o=D.dR(p==null?null:J.t(p,"state"))
w=d&&J.z(o.h(0,"brakePaused"),!0)?3:4
break
case 3:p=t.c
p.toString
w=5
return A.b(A.cd(null,null,!0,null,new D.eHl(),p,null,!0,!0,x.y),$async$za)
case 5:if(f!==!0){w=1
break}case 4:s=t.d
t.l(new D.eHm(t,d))
w=6
return A.b(A.fP(A.J(["action","paSet","enabled",d],x.N,x.z),!1,!1,!1,!1,B.hb),$async$za)
case 6:r=f
if(t.c==null){w=1
break}p=r==null
q=J.z(p?null:J.t(r,"ok"),!0)
t.l(new D.eHn(t,q,r,s))
if(q)p=d?"Agent started.":"Agent stopped."
else{p=p?null:J.t(r,"error")
p=J.k(p==null?"Could not change it.":p)}t.b3j(p,q?C.cQ:C.dn)
if(q)t.c7e()
case 1:return A.h(u,v)}})
return A.i($async$za,v)},
clK(){var w=this.c
w.toString
A.a7(w,!1).cb(A.eb(new D.eH8(this),!1,null,x.H))},
a3o(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$a3o=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t.l(new D.eHf(t))
w=3
return A.b(A.fP(A.J(["action","paCheck"],x.N,x.z),!1,!1,!1,!1,B.nW),$async$a3o)
case 3:s=e
if(t.c==null){w=1
break}t.l(new D.eHg(t,s))
r=s==null
if(!J.z(r?null:J.t(s,"ok"),!0)){r=r?null:J.t(s,"error")
t.b3j(J.k(r==null?"The check did not finish.":r),C.dn)
w=1
break}r=t.c
r.toString
r=A.Q(r).ax.a===B.dg
s.toString
q=D.dR(D.dR(J.t(s,"state")).h(0,"snapshot"))
p=t.c
p.toString
o=r?C.t3:C.t1
w=4
return A.b(A.bU(o,null,new D.eHh(t,new D.Ro(r),q,s),p,!0,!0,!0,B.aUc,!1,!1,x.H),$async$a3o)
case 4:case 1:return A.h(u,v)}})
return A.i($async$a3o,v)},
czg(d,e,f,g){var w,v,u,t,s,r=null,q=D.fBQ(e)
B.d.b_(q,new D.eHi())
w=d.a
v=w?C.oK:C.oF
v=A.at(A.p(r,r,B.f,r,r,new A.o(v,r,r,A.m(9),r,r,B.m),r,4,r,r,r,r,r,40),r,r,r)
u=A.c("What the agent sees right now",r,r,r,r,r,r,A.l(r,r,w?C.cy:B.c,r,r,r,r,r,r,r,r,19,r,r,B.u,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
t=J.z(f.h(0,"enabled"),!0)?" (next one "+D.hIp()+")":" (the agent is stopped, so none will be made)"
v=A.a([v,B.aA,u,B.at,A.c("Check now only looks. It never buys or sells. Pretend trades are made only by the automatic check every 5 minutes"+t+".",r,r,r,r,r,r,A.l(r,r,w?C.c8:C.c9,r,r,r,r,r,r,r,r,12.5,r,r,r,r,1.35,!0,r,r,r,r,r,r,r,r),r,r,r),B.af],x.p)
for(w=q.length,s=0;s<q.length;q.length===w||(0,A.I)(q),++s)v.push(D.hJp(d,q[s],!0,r))
return A.co(v,g,r,C.bHe,r,r,B.ah,!1)},
b3j(d,e){var w=null
this.c.K(x.q).f.T(A.b3(w,w,w,e,w,B.t,w,A.c(d,w,w,w,w,w,w,w,w,w,w),w,B.Y,w,w,w,w,w,w,w,w,w,w))},
B(d){var w,v=this,u=null,t=A.Q(d).ax.a===B.dg,s=new D.Ro(t),r=t?C.t3:C.t1,q=t?C.t3:C.t1
q=A.a([q,t?C.O0:C.NU],x.O)
w=v.cgr(s)
if(v.f)t=B.lq
else{if(v.d==null){t=v.ay
t=A.a([v.aaI(s,t==null?"Nothing to show yet.":t,B.b_)],x.p)}else t=v.bIq(0,s)
t=A.Kk(A.co(t,u,u,C.ao8,u,u,B.ah,!1),u,new D.eHA(v))}return A.c5(u,r,A.p(u,A.bo(!0,A.x(A.a([w,A.E(t,1)],x.p),B.l,u,B.e,B.h,0,B.p),!0,!1,B.ag,!0,!0),B.f,u,u,new A.o(u,u,u,u,u,new A.a8(B.aX,B.b1,B.x,q,u,u),B.m),u,u,u,u,u,u,u,u),u,!1,!1,u,u)},
cgr(d){var w,v,u,t,s,r=this,q=null,p=r.d,o=D.dR(p==null?q:J.t(p,"state")),n=J.z(o.h(0,"brakePaused"),!0),m=J.z(o.h(0,"enabled"),!0)&&!n
p=r.b3h(d,B.eB,new D.eHv(r))
w=d.a
v=x.p
u=A.a([A.c("Signal Grid",q,1,B.a2,q,q,q,A.l(q,q,w?C.cy:B.c,q,q,q,q,q,q,q,q,17,q,q,B.E,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],v)
if(r.d==null)u.push(A.c("Paper trading agent",q,1,B.a2,q,q,q,A.l(q,q,w?C.c8:C.c9,q,q,q,q,q,q,q,q,11.5,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q))
else{if(n)t=C.dn
else if(m)t=C.cQ
else t=w?C.c8:C.c9
t=A.V(B.pS,t,q,q,q,7)
if(n)s="Paused"
else s=m?"Running":"Stopped"
if(n)w=C.dn
else if(m)w=C.cQ
else w=w?C.c8:C.c9
u.push(A.A(A.a([t,B.d9,new A.d1(1,B.cg,A.c(s,q,1,B.a2,q,q,q,A.l(q,q,w,q,q,q,q,q,q,q,q,11.5,q,q,B.E,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),q)],v),B.l,q,B.e,B.N,0,q,q))}p=A.a([p,B.ar,A.E(A.A(A.a([new A.d1(1,B.cg,A.x(u,B.B,q,B.e,B.h,0,B.p),q)],v),B.l,q,B.e,B.h,0,q,q),1)],v)
if(r.d!=null)B.d.u(p,A.a([B.aa,r.bbE(d,"options","Options",B.fM,B.aC),B.aa,r.bbE(d,"scalper","Scalper",B.rg,B.as)],v))
p.push(B.aa)
p.push(r.b3h(d,B.ni,r.r?q:new D.eHw(r)))
return new A.D(B.hc,A.A(p,B.l,q,B.e,B.h,0,q,q),q)},
bIq(c3,c4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8=this,b9=null,c0="asset",c1="liveError",c2=b8.d
c2.toString
w=J.a2(c2)
v=D.dR(w.h(c2,"state"))
u=D.dR(w.h(c2,"config"))
t=D.dR(v.h(0,"snapshot"))
s=x.f.b(v.h(0,"shadow"))?D.dR(v.h(0,"shadow")):b9
r=D.fBQ(t)
q=A.U(r).k("X<1>")
p=A.B(new A.X(r,new D.eGO(s),q),q.k("M.E"))
o=p.length===0?r:p
n=b8.Q!=null&&B.d.aR(o,new D.eGP(b8))?b8.Q:b9
if(n==null){q=s==null?b9:s.h(0,"symbol")
if(q==null)q=t.h(0,c0)
m=q==null?b9:J.k(q)}else m=n
l=B.d.dr(o,new D.eGQ(m),new D.eGR(r,m,o,t))
q=s==null
k=q?b9:B.d.dr(r,new D.eGS(s),new D.eGT(l))
q=!q
j=q&&J.z(s.h(0,"symbol"),J.t(l,c0))?s:b9
i=b8.c8I(c4,c2,o,l,s)
h=D.dR(w.h(c2,"market"))
g=J.a2(l)
f=g.h(l,c0)
e=J.k(f==null?"SPY":f)
d=B.a.q(e,"/")
a0=D.bF6(l)
a1=D.cg(g.h(l,"price"))
a2=a0.length!==0?D.cg(J.t(B.d.gG(a0),"c")):0
a3=a2===0?0:(a1-a2)/a2*100
a4=a3>=0
if(d)a5=!0
else{f=g.h(l,"open")
if(f==null)f=h.h(0,"stockOpen")
a5=f==null?h.h(0,"open"):f}if(d)a6="Crypto \xb7 the agent trades it on Saturday and Sunday only"
else{f=J.kS(a5)
if(f.A(a5,!0))a6="Stock market open \xb7 the agent trades it on weekdays \xb7 closes 4:00 PM ET"
else{f=f.A(a5,!1)?"Stock market closed"+b8.cMH(h.h(0,"nextOpen")):""
a6=f}}a7=D.fBy(e)
f=c4.a
a8=f?B.c.j(0.92):C.i8
a9=A.m(22)
b0=A.K(f?B.c:C.ml,B.r,1)
b1=A.a([new A.aa(0,B.H,c4.gI2(),B.cz,12)],x.V)
b2=D.bDK(e,30)
b3=d?e:e+"/USD"
b3=A.c(b3,b9,b9,b9,b9,b9,b9,A.l(b9,b9,f?C.cy:B.c,b9,b9,b9,b9,b9,b9,b9,b9,17,b9,b9,B.E,b9,b9,!0,b9,b9,b9,b9,b9,b9,b9,b9),b9,b9,b9)
g=g.h(l,"name")
g=J.k(g==null?a7.a:g)
b4=x.p
g=A.A(A.a([b2,B.ar,b3,B.bb,new A.d1(1,B.cg,A.c(g,b9,b9,B.a2,b9,b9,b9,A.l(b9,b9,f?C.c8:C.c9,b9,b9,b9,b9,b9,b9,b9,b9,13,b9,b9,b9,b9,b9,!0,b9,b9,b9,b9,b9,b9,b9,b9),b9,b9,b9),b9)],b4),B.l,b9,B.e,B.h,0,b9,b9)
b2=a1===0?"\u2014":D.ev(a1,!1,!1)
b2=A.a([A.E(new A.de(B.dq,B.a5,B.f,A.c(b2,b9,b9,b9,b9,b9,b9,A.l(b9,b9,f?C.cy:B.c,b9,b9,b9,b9,b9,b9,b9,I.Jj,34,b9,b9,B.P,b9,b9,!0,b9,-1,b9,b9,b9,b9,b9,b9),b9,b9,b9),b9),1)],b4)
if(a0.length>1){b3=(a4?C.cQ:C.dn).j(0.14)
b5=A.m(10)
b6=a4?C.arm:B.Qi
b6=A.V(b6,a4?C.cQ:C.dn,b9,b9,b9,20)
b7=B.i.a5(Math.abs(a3),2)
b2.push(A.p(b9,A.A(A.a([b6,A.c(b7+"%",b9,b9,b9,b9,b9,b9,A.l(b9,b9,a4?C.cQ:C.dn,b9,b9,b9,b9,b9,b9,b9,b9,13,b9,b9,B.E,b9,b9,!0,b9,b9,b9,b9,b9,b9,b9,b9),b9,b9,b9)],b4),B.l,b9,B.e,B.N,0,b9,b9),B.f,b9,b9,new A.o(b3,b9,b9,b5,b9,b9,B.m),b9,b9,b9,b9,B.fZ,b9,b9,b9))}g=A.a([g,B.M,A.A(b2,B.l,b9,B.e,B.h,0,b9,b9)],b4)
if(a6.length!==0){if(J.z(a5,!0))b2=C.cQ
else b2=f?C.c8:C.c9
b2=A.V(B.pS,b2,b9,b9,b9,7)
b3=a0.length>1?"  \xb7  change over 4H":""
B.d.u(g,A.a([B.at,A.A(A.a([b2,B.bb,new A.d1(1,B.cg,A.c(a6+b3,b9,b9,B.a2,b9,b9,b9,A.l(b9,b9,f?C.c8:C.c9,b9,b9,b9,b9,b9,b9,b9,b9,12,b9,b9,b9,b9,b9,!0,b9,b9,b9,b9,b9,b9,b9,b9),b9,b9,b9),b9)],b4),B.l,b9,B.e,B.h,0,b9,b9)],b4))}i=A.a([i,A.p(b9,A.x(g,B.B,b9,B.e,B.h,0,B.p),B.f,b9,b9,new A.o(a8,b9,b0,a9,b1,b9,B.m),b9,b9,b9,B.dU,B.eY,b9,b9,b9)],b4)
g=u.h(0,"problem")
if(J.k(g==null?"":g).length!==0)i.push(b8.aaI(c4,J.k(u.h(0,"problem")),E.j_))
g=w.h(c2,c1)
if(J.k(g==null?"":g).length!==0)i.push(b8.aaI(c4,J.k(w.h(c2,c1)),C.dn))
if(J.z(v.h(0,"brakePaused"),!0)){g=v.h(0,"brakeReason")
i.push(b8.aaI(c4,"Paused by the $100 brake. "+A.v(g==null?"":g)+y.g,C.dn))}i.push(b8.bLq(c4,l,j))
i.push(b8.bI3(c4,c2,v,t))
if(q){k.toString
i.push(b8.crL(c4,s,k,D.dR(w.h(c2,"ticket")),D.dR(t.h(0,"held"))))}i.push(b8.aAE(c4,v))
i.push(b8.bHT(c4,v,c2))
i.push(b8.cJH(c4,c2))
i.push(b8.bF1(c4))
i.push(b8.cya(c4,c2))
c2=f?B.c.j(0.92):C.i8
w=A.m(16)
q=A.K(f?B.c:C.ml,B.r,1)
g=A.V(B.ko,C.cQ,b9,b9,b9,18)
a8=J.z(u.h(0,"ordersSwitchOn"),!0)?"on":"off"
i.push(A.p(b9,A.A(A.a([g,B.aa,A.E(A.c("Paper money only: no order is ever sent to Alpaca. Order switch: "+a8+".",b9,b9,b9,b9,b9,b9,A.l(b9,b9,f?C.c8:C.c9,b9,b9,b9,b9,b9,b9,b9,b9,11.5,b9,b9,b9,b9,1.3,!0,b9,b9,b9,b9,b9,b9,b9,b9),b9,b9,b9),1)],b4),B.l,b9,B.e,B.h,0,b9,b9),B.f,b9,b9,new A.o(c2,b9,q,w,b9,b9,B.m),b9,b9,b9,H.anf,B.ep,b9,b9,b9))
return i},
cIG(d,e,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null,h=D.dR(J.t(e,"market")),g=x.g,f=g.a(h.h(0,"activeMarkets"))
if(f==null)f=B.bU
w=x.N
f=J.b8(f,new D.eHt(),w)
v=A.B(f,f.$ti.k("aj.E"))
g=g.a(h.h(0,"todaysList"))
if(g==null)g=B.bU
w=J.b8(g,new D.eHu(),w)
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
q="NO MARKET TRADED RIGHT NOW"}g=(v.length===0?i:B.d.gG(v))==null
o=g?E.j_:C.cQ
f=d.a
w=f?B.c.j(0.92):C.i8
n=A.m(22)
m=A.K(o.j(0.55),B.r,1)
l=A.V(!g?B.ID:B.vl,o,i,i,i,26)
k=A.c(q,i,i,i,i,i,i,A.l(i,i,o,i,i,i,i,i,i,i,i,13.5,i,i,B.u,i,i,!0,i,0.3,i,i,i,i,i,i),i,i,i)
g=A.c(p,i,i,i,i,i,i,A.l(i,i,f?C.cy:B.c,i,i,i,i,i,i,i,i,12,i,i,i,i,1.3,!0,i,i,i,i,i,i,i,i),i,i,i)
j=x.p
g=A.a([k,B.cP,g,B.cP,A.c("Buys only when the fast line crosses up AND the big trend is rising (slow line higher than 1 hour ago, price above it).",i,i,i,i,i,i,A.l(i,i,f?C.c8:C.c9,i,i,i,i,i,i,i,i,11,i,i,i,i,1.3,!0,i,i,i,i,i,i,i,i),i,i,i)],j)
if(r)B.d.u(g,A.a([B.at,A.c("Still holding the "+s+" pretend trade from before: the agent keeps checking its exits every 5 minutes.",i,i,i,i,i,i,C.fHf,i,i,i)],j))
return A.p(i,A.A(A.a([l,B.ar,A.E(A.x(g,B.B,i,B.e,B.h,0,B.p),1)],j),B.B,i,B.e,B.h,0,i,i),B.f,i,i,new A.o(w,i,m,n,i,i,B.m),i,i,i,i,B.bR,i,i,i)},
cDw(d,e,f){var w=null,v=this.c
v.toString
A.cd(w,w,!0,w,new D.eHp(this,d,e,f),v,w,!0,!0,x.H)},
bbE(d,e,f,g,h){var w,v,u,t,s,r,q,p,o=null,n=x.N,m=A.S(n,x.P),l=this.d
l=x.g.a(D.dR(l==null?o:J.t(l,"fast")).h(0,"systems"))
if(l==null)l=B.bU
l=J.cQ(l,x.f)
w=J.aR(l.a)
l=l.$ti
v=new A.jZ(w,l.k("jZ<1>"))
u=x.z
l=l.c
while(v.C()){t=l.a(w.gP(w))
s=A.v(J.t(t,"id"))
t=A.a0(t,n,u)
m.n(0,s,t)}r=m.h(0,e)
if(r==null)r=B.cG
q=J.z(r.h(0,"enabled"),!0)
p=r.h(0,"holding")!=null
if(p)n=" \xb7 holding "+A.v(r.h(0,"holding"))
else n=q?" \xb7 running":" \xb7 stopped"
m=A.m(11)
l=A.m(11)
l=A.a([A.p(o,A.V(g,B.c,o,o,o,20),B.f,o,o,new A.o(h,o,o,l,o,o,B.m),o,34,o,o,o,o,o,34)],x.p)
if(q||p){w=p?F.qH:C.cQ
l.push(A.ao(o,A.p(o,o,B.f,o,o,new A.o(w,o,A.K(d.a?C.t3:C.t1,B.r,2),o,o,o,B.a6),o,11,o,o,o,o,o,11),o,o,o,-2,-2,o))}return A.h9(A.dz(o,!0,o,A.aM(!1,m,!0,new A.a5(34,34,new A.an(B.a0,o,B.ad,B.f,l,o),o),o,!0,o,o,o,o,o,o,o,o,o,o,o,new D.eHs(this,e),o,o,o,o,o,o,o),!1,o,o,o,o,!1,o,!1,o,o,o,o,o,o,o,o,o,o,f,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,B.cb,o),o,f+n,o,o,o)},
cK0(d){var w,v,u,t,s,r,q,p,o=null,n=J.a2(d)
if(J.z(n.h(d,"open"),!0)){w=D.dR(n.h(d,"chart")).h(0,"trend")
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
w=A.m(6)
return A.dz(o,o,o,A.p(o,A.A(A.a([A.V(t,p,o,o,o,12),B.uj,A.c(s,o,o,o,o,o,o,A.l(o,o,p,o,o,o,o,o,o,o,o,9,o,o,B.E,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],x.p),B.l,o,B.e,B.N,0,o,o),B.f,o,o,new A.o(n,o,o,w,o,o,B.m),o,o,o,o,Z.aoY,o,o,o),!1,o,o,o,o,!1,o,!1,o,o,o,o,o,o,o,o,o,o,"trend "+A.v(s),o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,B.cb,o)},
c8I(d,e,f,g,h){var w,v,u,t,s,r,q=this,p=null
if(f.length<2)return B.bK
w=new A.X(f,new D.eH3(),A.U(f).k("X<1>")).gJ(0)
v=d.a
u=A.c("Today's watchlist",p,p,p,p,p,p,A.l(p,p,v?C.cy:B.c,p,p,p,p,p,p,p,p,14,p,p,B.E,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)
t=w===0
s=t?"NONE TRADED NOW":""+w+" WATCHED NOW"
s=q.agI(s,t?E.j_:C.cQ)
r=A.hgn(!1,p,!0,new A.D(B.eA,A.V(B.kM,t?E.j_:C.cQ,p,p,p,19),p),!1,p,!0,!1,p,p,p,B.a6,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new D.eH4(q,d,e,h),p,p,p,p,20,p,p,p)
t=x.p
return new A.D(B.eI,A.x(A.a([new A.D(C.aoW,A.A(A.a([u,B.aa,s,B.d9,r,B.aV,A.c("tap one",p,p,p,p,p,p,A.l(p,p,v?C.c8:C.c9,p,p,p,p,p,p,p,p,11,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)],t),B.l,p,B.e,B.h,0,p,p),p),new A.a5(p,66,A.hK(B.f,q.crj(B.d.bl(f,new D.eH5(g))),new D.eH6(q,f,g,h,d),f.length,p,p,B.aK,new D.eH7(),!1),p),B.at],t),B.B,p,B.e,B.h,0,B.p),p)},
bLq(d,e,f){var w,v,u,t,s,r,q=this,p=null,o=D.bF6(e),n=o.length
if(n<2)return q.agH(d,new A.a5(p,120,A.at(A.c(y.b,p,p,p,p,p,p,A.l(p,p,d.a?C.c8:C.c9,p,p,p,p,p,p,p,p,p,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p),p))
w=B.d.fB(o,Math.max(0,n-q.z))
v=f==null||x.f.b(f.h(0,"option"))?p:D.cg(f.h(0,"entryPrice"))
n=x.p
u=A.a([],n)
for(t=0;t<3;++t){s=C.co6[t]
if(s<=12)r="1H"
else r=s<=24?"2H":"4H"
B.d.u(u,A.a([q.cAe(d,r,q.z===s,new D.eGW(q,s)),B.bb],n))}u.push(B.aV)
u.push(q.cK1(e))
u.push(B.bb)
u.push(q.b8T(d,"Trend lines",q.ax,new D.eGX(q),M.xs))
u=A.a([A.A(u,B.l,p,B.e,B.h,0,p,p),B.R,new D.a_z(w,d,v,q.ax,D.cg(J.t(e,"price")),p)],n)
if(q.ax){r=A.a([q.ays(d,B.bB,"Fast line (45 min)"),q.ays(d,B.b_,"Slow line (1 h 45 min)")],n)
if(v!=null)r.push(q.ays(d,F.qH,"Your pretend buy"))
B.d.u(u,A.a([B.M,A.bZ(B.fU,r,B.br,p,4,14)],n))}return q.aAD(d,A.x(u,B.l,p,B.e,B.h,0,B.p),B.x0)},
cK1(d){var w,v,u,t,s,r,q=null,p=D.dR(J.t(d,"chart")).h(0,"trend")
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
p=A.m(10)
return A.h9(A.dz(q,q,q,A.p(q,A.V(v,B.c,q,q,q,20),B.f,q,q,new A.o(r,q,q,p,q,q,B.m),q,32,q,q,q,q,q,32),!1,q,q,q,q,!1,q,!1,q,q,q,q,q,q,q,q,q,q,u,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,B.cb,q),q,u,q,B.hjf,q)},
bI3(a9,b0,b1,b2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=null,e="equity",d=J.a2(b0),a0=D.dR(d.h(b0,"today")),a1=D.dR(d.h(b0,"record")),a2=D.dR(d.h(b0,"ticket")),a3=a1.h(0,"pnlSum")!=null?D.cg(a1.h(0,"pnlSum")):D.cg(b1.h(0,"totalPnl")),a4=D.cg(a0.h(0,"day_pnl")),a5=x.f,a6=a5.b(b1.h(0,"shadow"))?D.dR(b1.h(0,"shadow")):f,a7=a6!=null,a8=0
if(a7){w=D.dR(b2.h(0,"held"))
if(w.h(0,"pnl")!=null)a8=D.cg(w.h(0,"pnl"))
else if(!a5.b(a6.h(0,"option"))){v=D.cg(J.t(B.d.dr(D.fBQ(b2),new D.eGK(a6),new D.eGL()),"price"))
if(v>0){a5=D.cg(a6.h(0,"qty"))
u=a6.h(0,"mult")==null?1:D.cg(a6.h(0,"mult"))
a8=a5*u*(v-D.cg(a6.h(0,"entryPrice")))}}}t=D.dR(a1.h(0,"newRules"))
s=t.h(0,"winRatePct")
r=D.cg(b2.h(0,e))
q=D.dR(d.h(b0,"fast"))
p=D.cg(q.h(0,"closed"))+D.cg(q.h(0,"open"))
o=a3+a8+p
d=A.m(26)
a5=A.a([new A.aa(0,B.H,B.iq.j(0.3),B.eU,24)],x.V)
u=x.p
n=A.A(A.a([C.h4u,B.aV,A.p(f,C.h3M,B.f,f,f,new A.o(B.c.j(0.14),f,f,A.m(999),f,f,B.m),f,f,f,f,B.eZ,f,f,f)],u),B.l,f,B.e,B.h,0,f,f)
n=A.a([n,B.at,new A.de(B.dq,B.a5,B.f,A.c(b2.h(0,e)==null?"\u2014":D.ev(r+a3+a8+p,!0,!1),f,f,f,f,f,f,C.fF4,f,f,f),f)],u)
if(b2.h(0,e)!=null){m=o>=0?C.arm:B.Qi
l=o>0
if(l)k=C.cQ
else k=o<0?C.dn:B.ab
k=A.V(m,k,f,f,f,f)
m=D.ev(o,!0,!0)
if(p!==0)a7=" (all systems)"
else a7=a7?" (incl. the open one)":""
if(l)l=C.cQ
else l=o<0?C.dn:B.ab
n.push(A.A(A.a([k,A.c(m+" from pretend trades"+a7,f,f,f,f,f,f,A.l(f,f,l,f,f,f,f,f,f,f,f,12.5,f,f,B.E,f,f,!0,f,f,f,f,f,f,f,f),f,f,f)],u),B.l,f,B.e,B.h,0,f,f))}n.push(B.bw)
n.push(A.c("Alpaca paper account "+D.ev(r,!0,!1)+" (unchanged, Version 1 sends no orders) \xb7 $"+B.i.a5(D.cg(a2.h(0,"amount")),0)+" a trade",f,f,f,f,f,f,N.Fy,f,f,f))
n.push(B.aA)
a7=D.ev(a4,!0,!0)
if(a4>0)m=C.cQ
else m=a4<0?C.dn:B.c
m=A.E(g.AQ("Today",a7,m),1)
a7=D.ev(a3,!0,!0)
if(a3>0)l=C.cQ
else l=a3<0?C.dn:B.c
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
l=A.E(g.AQ("Daily stop","-$"+B.i.a5(D.cg(l==null?50:l),0),B.c),1)
k=a2.h(0,"totalBrakeUsd")
n.push(g.aRg("RESULTS AND LIMITS",A.a([a7,B.M,A.A(A.a([m,B.aa,l,B.aa,A.E(g.AQ("Total brake","-$"+B.i.a5(D.cg(k==null?100:k),0),B.c),1)],u),B.l,f,B.e,B.h,0,f,f)],u)))
n.push(B.R)
a7=a2.h(0,"amount")
a7=B.i.a5(D.cg(a7==null?100:a7),0)
m=J.z(a2.h(0,"kind"),"crypto")?"a coin":"a stock"
m=A.E(g.AQ("Buys","$"+a7+" of "+m,B.c),1)
a7=a2.h(0,"takeProfitUsd")
a7=A.E(g.AQ("Take profit","+$"+B.i.a5(D.cg(a7==null?50:a7),0),C.cQ),1)
l=a2.h(0,"stopLossUsd")
a7=A.A(A.a([m,B.aa,a7,B.aa,A.E(g.AQ("Stop loss","-$"+B.i.a5(D.cg(l==null?50:l),0),C.dn),1)],u),B.l,f,B.e,B.h,0,f,f)
m=B.c.j(0.1)
l=A.m(14)
k=s==null
if(k)j="No $100 trades yet"
else{j=B.i.a5(D.cg(s),0)
i=t.h(0,"wins")
i=A.v(i==null?0:i)
h=t.h(0,"trades")
j=j+"%  \xb7  "+i+" won of "+A.v(h==null?0:h)}if(k)k=B.c
else k=D.cg(s)>=50?C.cQ:C.dn
n.push(g.aRg("EACH TRADE",A.a([a7,B.M,A.p(f,A.A(A.a([A.E(A.x(A.a([C.fWj,B.bw,A.c(j,f,f,f,f,f,f,A.l(f,f,k,f,f,f,f,f,f,f,f,16,f,f,B.E,f,f,!0,f,f,f,f,f,f,f,f),f,f,f)],u),B.B,f,B.e,B.h,0,B.p),1),C.hc_],u),B.l,f,B.e,B.h,0,f,f),B.f,f,f,new A.o(m,f,f,l,f,f,B.m),f,f,f,f,B.ep,f,f,1/0)],u)))
return A.p(f,A.x(n,B.B,f,B.e,B.h,0,B.p),B.f,f,f,new A.o(f,f,f,d,a5,C.auY,B.m),f,f,f,B.dU,B.fa,f,f,f)},
aRg(d,e){var w=null,v=B.v.j(0.14),u=A.m(18),t=A.K(B.c.j(0.16),B.r,1),s=A.a([new A.D(B.aoP,A.c(d,w,w,w,w,w,w,C.fG5,w,w,w),w)],x.p)
B.d.u(s,e)
return A.p(w,A.x(s,B.B,w,B.e,B.h,0,B.p),B.f,w,w,new A.o(v,w,t,u,w,w,B.m),w,w,w,w,B.bQ,w,w,1/0)},
AQ(d,e,f){var w=null,v=B.c.j(0.1),u=A.m(14)
return A.p(w,A.x(A.a([A.c(d,w,1,B.a2,w,w,w,B.LQ,w,w,w),B.bw,new A.de(B.dq,B.a5,B.f,A.c(e,w,w,w,w,w,w,A.l(w,w,f,w,w,w,w,w,w,w,w,15,w,w,B.E,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w)],x.p),B.B,w,B.e,B.h,0,B.p),B.f,w,w,new A.o(v,w,w,u,w,w,B.m),w,w,w,w,B.anm,w,w,w)},
crL(a9,b0,b1,b2,b3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=this,a1=null,a2="price",a3=D.cg(b0.h(0,"entryPrice")),a4=D.cg(b0.h(0,"qty")),a5=b0.h(0,"mult")==null?1:D.cg(b0.h(0,"mult")),a6=x.f.b(b0.h(0,"option"))?D.dR(b0.h(0,"option")):a1,a7=J.a2(b1),a8=J.z(b0.h(0,"symbol"),a7.h(b1,"asset"))
if(b3.h(0,a2)!=null)w=D.cg(b3.h(0,a2))
else w=a6==null&&a8?D.cg(a7.h(b1,a2)):a3
a7=a4*a5
v=a7*a3
u=a7*w
t=u-v
s=a3===0?0:(w-a3)/a3*100
r=t>=0
q=b2.h(0,"takeProfitUsd")
p=D.cg(q==null?50:q)
q=b2.h(0,"stopLossUsd")
o=D.cg(q==null?50:q)
n=B.i.D((t+o)/(p+o),0,1)
m=a7===0?0:1/a7
l=a3-o*m
a7=a9.a
q=x.p
k=A.A(A.a([A.c("Your pretend position",a1,a1,a1,a1,a1,a1,A.l(a1,a1,a7?C.cy:B.c,a1,a1,a1,a1,a1,a1,a1,a1,16,a1,a1,B.E,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1),B.aV,a0.agI("OPEN",C.cQ)],q),B.l,a1,B.e,B.h,0,a1,a1)
j=D.ev(t,!0,!0)
j=A.c(j,a1,a1,a1,a1,a1,a1,A.l(a1,a1,r?C.cQ:C.dn,a1,a1,a1,a1,a1,a1,a1,a1,34,a1,a1,B.E,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1)
i=s>=0?"+":""
h=B.i.a5(s,2)
j=A.A(A.a([j,B.aa,new A.D(B.eI,A.c(i+h+"%",a1,a1,a1,a1,a1,a1,A.l(a1,a1,r?C.cQ:C.dn,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,B.E,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1),a1)],q),B.dv,a1,B.e,B.h,0,a1,a1)
i=r?"You would be winning right now":"You would be losing right now"
k=A.a([k,B.af,j,A.c(i,a1,a1,a1,a1,a1,a1,A.l(a1,a1,a7?C.c8:C.c9,a1,a1,a1,a1,a1,a1,a1,a1,12.5,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1),B.aA],q)
j=a6!=null
if(j){i=a7?C.v1:C.v2
h=A.m(16)
g=A.c("1 SPY call option",a1,a1,a1,a1,a1,a1,A.l(a1,a1,a7?C.c8:C.c9,a1,a1,a1,a1,a1,a1,a1,a1,11.5,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1)
f=D.ev(D.cg(a6.h(0,"strike")),!0,!1)
e=D.aQP(a6.h(0,"expiry"))
f=A.c("Strike "+f+" \xb7 expires "+e,a1,a1,a1,a1,a1,a1,A.l(a1,a1,a7?C.cy:B.c,a1,a1,a1,a1,a1,a1,a1,a1,15,a1,a1,B.E,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1)
e=D.ev(a3,!0,!1)
d=D.ev(v,!0,!1)
B.d.u(k,A.a([A.p(a1,A.x(A.a([g,B.bw,f,B.bw,A.c("Premium paid "+e+" a share x 100 = "+d,a1,a1,a1,a1,a1,a1,A.l(a1,a1,a7?C.c8:C.c9,a1,a1,a1,a1,a1,a1,a1,a1,11.5,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1)],q),B.B,a1,B.e,B.h,0,B.p),B.f,a1,a1,new A.o(i,a1,a1,h,a1,a1,B.m),a1,a1,a1,a1,B.bg,a1,a1,1/0),B.M],q))}i=A.E(a0.aAG(a9,"You put in",D.ev(v,!0,!1)),1)
h=D.ev(u,!0,!1)
k.push(A.A(A.a([i,B.aa,A.E(a0.aAH(a9,"Worth now",h,r?C.cQ:C.dn),1)],q),B.l,a1,B.e,B.h,0,a1,a1))
k.push(B.M)
i=j?"Premium paid":"Bought at"
i=A.E(a0.aAG(a9,i,D.ev(a3,!0,!1)),1)
if(j){j=J.z(b3.h(0,"priced"),!1)?"no price yet":D.ev(w,!0,!1)
j=a0.aAH(a9,"Premium now",j,r?C.cQ:C.dn)}else j=a0.aAG(a9,"Amount",B.i.a5(a4,a4<0.01?6:4)+" "+A.v(b0.h(0,"symbol")))
k.push(A.A(A.a([i,B.aa,A.E(j,1)],q),B.l,a1,B.e,B.h,0,a1,a1))
k.push(B.aO)
k.push(A.cf(new D.eHb(a9,n)))
k.push(B.ak)
j=D.ev(o,!0,!1)
k.push(A.A(A.a([A.E(A.c("Stop loss\n-"+j+" \xb7 at "+D.ev(l<0?0:l,!0,!1),a1,a1,a1,a1,a1,a1,C.fL1,a1,a1,a1),1),A.E(A.c("Take profit\n+"+D.ev(p,!0,!1)+" \xb7 at "+D.ev(a3+p*m,!0,!1),a1,a1,a1,a1,a1,a1,C.fJA,B.e4,a1,a1),1)],q),B.l,a1,B.e,B.h,0,a1,a1))
k.push(B.ak)
q=D.hGH(b0.h(0,"entryAt"))
k.push(A.c("Bought "+q,a1,a1,a1,a1,a1,a1,A.l(a1,a1,a7?C.c8:C.c9,a1,a1,a1,a1,a1,a1,a1,a1,11.5,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1))
return a0.agH(a9,A.x(k,B.B,a1,B.e,B.h,0,B.p))},
aAE(d,e){var w,v,u,t=this,s=null,r=J.z(e.h(0,"enabled"),!0)&&!J.z(e.h(0,"brakePaused"),!0),q=r?C.dn:C.cQ
q=A.bp(q,s,s,s,s,s,s,s,new A.b9(A.m(999),B.a1),s,s,s)
w=t.r?s:new D.eGY(t,r)
v=A.V(r?B.vC:B.fN,s,s,s,s,s)
q=A.E(new A.a5(s,52,A.db(v,s,A.c(r?"Stop agent":"Start agent",s,s,s,s,s,s,B.mM,s,s,s),w,q),s),3)
w=d.a
v=w?C.cy:B.c
u=w?C.oK:C.oF
w=w?B.c.j(0.92):C.i8
u=A.dk(s,s,w,s,s,s,s,s,s,v,s,s,s,s,new A.b9(A.m(999),B.a1),new A.ax(u,1.5,B.r,-1),s,s,s,s)
w=t.r
v=w?s:t.gcze()
return new A.D(B.dU,A.A(A.a([q,B.ar,A.E(new A.a5(s,52,A.ep(w?B.Lh:C.c58,s,C.hec,v,u),s),2)],x.p),B.l,s,B.e,B.h,0,s,s),s)},
bHT(d,e,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i="every 5 min",h=J.z(e.h(0,"enabled"),!0)&&!J.z(e.h(0,"brakePaused"),!0),g=e.h(0,"lastTickAt"),f=A.bh(A.v(g==null?"":g))
if(h)w=C.cQ
else w=d.a?C.c8:C.c9
g=x.f
v=g.b(e.h(0,"shadow"))?D.dR(e.h(0,"shadow")):j
u=x.g.a(J.t(a0,"trades"))
g=J.cQ(u==null?B.bU:u,g)
t=A.B(g,g.$ti.k("M.E"))
s=t.length===0?j:D.dR(B.d.gG(t))
g=v!=null
r=g?"Current trade from":"Last trade from"
if(g)q=A.v(v.h(0,"symbol"))
else if(s==null)q="no trade yet"
else{g=A.v(s.h(0,"asset"))
u=J.z(s.h(0,"decision"),"would buy")?"bought":"sold "+D.ev(D.cg(D.dR(s.h(0,"details")).h(0,"pnl")),!0,!0)
u=g+" ("+u+")"
q=u}g=new D.eGJ(d)
u=d.a
p=u?B.c.j(0.92):C.i8
o=A.m(20)
n=A.K(w.j(0.35),B.r,1)
m=w.j(0.15)
l=A.m(9)
l=A.p(j,A.V(L.Qj,w,j,j,j,17),B.f,j,j,new A.o(m,j,j,l,j,j,B.m),j,28,j,j,j,j,j,28)
m=h?"Trades are automatic":"Agent is stopped"
m=A.E(A.c(m,j,j,j,j,j,j,A.l(j,j,u?C.cy:B.c,j,j,j,j,j,j,j,j,13.5,j,j,B.E,j,j,!0,j,j,j,j,j,j,j,j),j,j,j),1)
k=x.p
m=A.a([A.A(A.a([l,B.aa,m,A.c("Check now only looks",j,j,j,j,j,j,A.l(j,j,u?C.c8:C.c9,j,j,j,j,j,j,j,j,10.5,j,j,j,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)],k),B.l,j,B.e,B.h,0,j,j),B.R],k)
if(h)B.d.u(m,A.a([A.A(A.a([g.$2("Last check",f==null?"not yet":D.RU(D.a3A(f))+" ET"),B.bb,g.$2("Next buy check",D.hIp())],k),B.l,j,B.e,B.h,0,j,j),B.ak,A.A(A.a([g.$2("Checks every market",i),B.bb,g.$2("Open trade exits",i)],k),B.l,j,B.e,B.h,0,j,j),B.ak],k))
else B.d.u(m,A.a([A.c("It makes no trades. Press Start and it checks every market on the day's list every 5 minutes by itself.",j,j,j,j,j,j,A.l(j,j,u?C.c8:C.c9,j,j,j,j,j,j,j,j,12,j,j,j,j,1.35,!0,j,j,j,j,j,j,j,j),j,j,j),B.M],k))
m.push(A.A(A.a([g.$2(r,q)],k),B.l,j,B.e,B.h,0,j,j))
return A.p(j,A.x(m,B.B,j,B.e,B.h,0,B.p),B.f,j,j,new A.o(p,j,n,o,j,j,B.m),j,j,j,B.dU,B.bg,j,j,j)},
cJH(b4,b5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8=this,a9=null,b0="entryPrice",b1="exitPrice",b2="outValue",b3=x.g.a(J.t(b5,"trades"))
if(b3==null)b3=B.bU
w=x.f
b3=J.cQ(b3,w)
b3=A.cA(b3,new D.eHy(),b3.$ti.k("M.E"),x.P)
v=A.B(b3,A.a3(b3).k("M.E"))
b3=b4.a
u=x.p
t=A.a([A.c("Pretend trades",a9,a9,a9,a9,a9,a9,A.l(a9,a9,b3?C.cy:B.c,a9,a9,a9,a9,a9,a9,a9,a9,16,a9,a9,B.E,a9,a9,!0,a9,a9,a9,a9,a9,a9,a9,a9),a9,a9,a9),B.M],u)
if(v.length===0){s=A.V(B.h0,b3?C.c8:C.c9,a9,a9,a9,a9)
t.push(new A.D(B.cp,A.A(A.a([s,B.ar,A.E(A.c("No trades yet. Each buy shows what was bought (for a SPY option: strike, expiry and premium) and what was put in; each sell shows the entry and exit price and the win or loss in dollars.",a9,a9,a9,a9,a9,a9,A.l(a9,a9,b3?C.c8:C.c9,a9,a9,a9,a9,a9,a9,a9,a9,12.5,a9,a9,a9,a9,1.3,!0,a9,a9,a9,a9,a9,a9,a9,a9),a9,a9,a9),1)],u),B.l,a9,B.e,B.h,0,a9,a9),a9))}s=J.aR(a8.y?v:A.cU(v,0,A.dA(4,"count",x.S),A.U(v).c))
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
if(!(typeof j=="number")){j=A.cx(A.v(j==null?"":j))
if(j==null)j=0}i="SPY "+D.ev(j,!0,!1)+" call"}else{j=o.h(p,"asset")
i=J.k(j==null?"":j)}if(l.h(0,"amount")==null)h=50
else{j=l.h(0,"amount")
if(typeof j=="number")h=j
else{j=A.cx(A.v(j==null?"":j))
if(j==null)j=0
h=j}}g=l.h(0,"qty")
if(!(typeof g=="number")){j=A.cx(A.v(g==null?"":g))
g=j==null?0:j}f=l.h(0,"pnl")
if(!(typeof f=="number")){j=A.cx(A.v(f==null?"":f))
f=j==null?0:j}e=l.h(0,b0)!=null
d=l.h(0,b0)
if(!(typeof d=="number")){j=A.cx(A.v(d==null?"":d))
d=j==null?0:j}if(l.h(0,b1)==null){j=o.h(p,"price")
if(typeof j=="number")a0=j
else{j=A.cx(A.v(j==null?"":j))
if(j==null)j=0
a0=j}}else{j=l.h(0,b1)
if(typeof j=="number")a0=j
else{j=A.cx(A.v(j==null?"":j))
if(j==null)j=0
a0=j}}if(m)if(n)a1="expires "+D.aQP(k.h(0,"expiry"))+" \xb7 premium "+D.ev(d,!0,!1)+" x 100"
else{m=D.ev(d,!0,!1)
j=D.ev(a0,!0,!1)
a2=o.h(p,"reason")
a2=J.k(a2==null?"":a2)
a3=B.a.cc(a2,"(")
a1="premium "+m+" to "+j+" \xb7 "+B.a.i(a3>0?B.a.aw(a2,0,a3):a2)}else if(n){if(g===0)m=""
else m=B.i.a5(g,g<0.01?6:4)+" at "
if(e)j=d
else{j=o.h(p,"price")
if(!(typeof j=="number")){j=A.cx(A.v(j==null?"":j))
if(j==null)j=0}}a1=m+D.ev(j,!0,!1)}else{m=e?D.ev(d,!0,!1)+" to ":"at "
j=D.ev(a0,!0,!1)
a2=o.h(p,"reason")
a2=J.k(a2==null?"":a2)
a3=B.a.cc(a2,"(")
a1=m+j+" \xb7 "+B.a.i(a3>0?B.a.aw(a2,0,a3):a2)}a4=f>=0
if(n)a5=B.cf
else a5=a4?C.cQ:C.dn
m=b3?C.oK:C.oF
j=a5.j(0.14)
a2=new A.aP(13,13)
j=A.p(a9,A.V(n?B.tN:B.ri,a5,a9,a9,a9,20),B.f,a9,a9,new A.o(j,a9,a9,new A.bb(a2,a2,a2,a2),a9,a9,B.m),a9,40,a9,a9,a9,a9,a9,40)
a2=n?"Bought":"Sold"
a6=b3?C.cy:B.c
a2=A.c(a2+" "+i,a9,a9,a9,a9,a9,a9,new A.H(!0,a6,a9,a9,a9,a9,14,B.E,a9,a9,a9,a9,a9,a9,a9,a9,a9,a9,a9,a9,a9,a9,a9,a9,a9,a9),a9,a9,a9)
a6=b3?C.c8:C.c9
a6=A.c(a1,a9,2,B.a2,a9,a9,a9,new A.H(!0,a6,a9,a9,a9,a9,11.5,a9,a9,a9,a9,a9,a9,a9,a9,a9,a9,a9,a9,a9,a9,a9,a9,a9,a9,a9),a9,a9,a9)
p=o.h(p,"et_time")
p=J.k(p==null?"":p)
o=b3?C.c8:C.c9
p=A.x(A.a([a2,B.bw,a6,A.c(p,a9,a9,a9,a9,a9,a9,new A.H(!0,o,a9,a9,a9,a9,10.5,a9,a9,a9,a9,a9,a9,a9,a9,a9,a9,a9,a9,a9,a9,a9,a9,a9,a9,a9),a9,a9,a9)],u),B.B,a9,B.e,B.h,0,B.p)
if(n)o="-"+D.ev(h,!0,!1)
else{if(l.h(0,b2)==null)o=h+f
else{o=l.h(0,b2)
if(!(typeof o=="number")){o=A.cx(A.v(o==null?"":o))
if(o==null)o=0}}o="+"+D.ev(o,!0,!1)}a2=b3?C.cy:B.c
o=A.a([A.c(o,a9,a9,a9,a9,a9,a9,new A.H(!0,a2,a9,a9,a9,a9,14,B.E,a9,a9,a9,a9,a9,a9,a9,a9,a9,a9,a9,a9,a9,a9,a9,a9,a9,a9),a9,a9,a9)],u)
if(!n){a2=D.ev(f,!0,!0)
if(l.h(0,"pct")==null)a6=""
else{a6=l.h(0,"pct")
if(!(typeof a6=="number")){a6=A.cx(A.v(a6==null?"":a6))
if(a6==null)a6=0}a6=a6>=0?"+":""
a7=l.h(0,"pct")
if(!(typeof a7=="number")){a7=A.cx(A.v(a7==null?"":a7))
if(a7==null)a7=0}a7=" ("+a6+B.i.a5(a7,2)+"%)"
a6=a7}a7=a4?C.cQ:C.dn
o.push(A.c(a2+a6,a9,a9,a9,a9,a9,a9,new A.H(!0,a7,a9,a9,a9,a9,12,B.E,a9,a9,a9,a9,a9,a9,a9,a9,a9,a9,a9,a9,a9,a9,a9,a9,a9,a9),a9,a9,a9))}if(n){a2=b3?C.c8:C.c9
o.push(A.c("put in",a9,a9,a9,a9,a9,a9,new A.H(!0,a2,a9,a9,a9,a9,11,a9,a9,a9,a9,a9,a9,a9,a9,a9,a9,a9,a9,a9,a9,a9,a9,a9,a9,a9),a9,a9,a9))}t.push(A.p(a9,new A.c1(B.aK,B.e,B.h,B.l,a9,B.p,a9,0,A.a([j,B.bc,new A.bu(1,B.b9,p,a9),B.aa,A.x(o,B.dv,a9,B.e,B.h,0,B.p)],u),a9),B.f,a9,a9,new A.o(a9,a9,new A.bE(B.a1,B.a1,new A.ax(m,1,B.r,-1),B.a1),a9,a9,a9,B.m),a9,a9,a9,a9,B.jW,a9,a9,a9))}b3=v.length
if(b3>4)t.push(A.at(A.bM(!1,A.c(a8.y?"Show less":"Show all ("+b3+")",a9,a9,a9,a9,a9,a9,a9,a9,a9,a9),a9,a9,!0,a9,a9,a9,new D.eHz(a8),a9,a9),a9,a9,a9))
return a8.agH(b4,A.x(t,B.B,a9,B.e,B.h,0,B.p))},
bF1(d){var w,v,u=this,t=null,s=u.x,r=u.e
r=s?r:J.E7(r,4).dk(0)
s=d.a
w=A.c("Agent activity",t,t,t,t,t,t,A.l(t,t,s?C.cy:B.c,t,t,t,t,t,t,t,t,16,t,t,B.E,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)
v=x.p
v=A.a([A.A(A.a([w,B.aV,A.c("newest first",t,t,t,t,t,t,A.l(t,t,s?C.c8:C.c9,t,t,t,t,t,t,t,t,11,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],v),B.l,t,B.e,B.h,0,t,t),B.ak],v)
if(J.cv(u.e))v.push(new A.D(B.f9,A.c("Nothing yet. A new line appears with every automatic check (every 5 minutes).",t,t,t,t,t,t,A.l(t,t,s?C.c8:C.c9,t,t,t,t,t,t,t,t,12.5,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),t))
for(s=J.aR(r);s.C();)v.push(u.c7u(d,s.gP(s)))
if(J.ad(u.e)>4){if(u.x)s=u.w?"Show older":"Show less"
else s="Show all"
v.push(A.at(A.bM(!1,A.c(s,t,t,t,t,t,t,t,t,t,t),t,t,!0,t,t,t,new D.eGI(u),t,t),t,t,t))}return u.agH(d,A.x(v,B.B,t,B.e,B.h,0,B.p))},
c7u(d,e){var w,v,u,t,s,r=null,q="price",p=J.a2(e),o=p.h(e,"decision"),n=J.k(o==null?"":o)
A:{if("would buy"===n){o=C.cQ
break A}if("would sell"===n){o=B.bB
break A}if("hold"===n){o=B.b_
break A}if("day start"===n||"day end"===n){o=B.cf
break A}if("start"===n){o=C.cQ
break A}if("stop"===n){o=C.dn
break A}if(J.z(p.h(e,"kind"),"error"))o=C.dn
else o=d.a?C.c8:C.c9
break A}w=p.h(e,"fast_ma")!=null&&p.h(e,"slow_ma")!=null
v=A.p(r,r,B.f,r,r,new A.o(o,r,r,r,r,r,B.a6),r,8,r,G.P3,r,r,r,8)
u=n==="hold"?"Still holding":D.hFT(n)
t=x.p
o=A.a([A.c(u,r,r,r,r,r,r,A.l(r,r,o,r,r,r,r,r,r,r,r,12.5,r,r,B.E,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],t)
if(J.z(D.dR(p.h(e,"details")).h(0,"by"),"cron"))B.d.u(o,A.a([B.bb,A.c("automatic",r,r,r,r,r,r,A.l(r,r,d.a?C.c8:C.c9,r,r,r,r,r,r,r,r,10,r,r,B.P,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],t))
o.push(B.aV)
u=p.h(e,"et_time")
u=D.hJS(J.k(u==null?"":u))
s=d.a
o.push(A.c(u,r,r,r,r,r,r,A.l(r,r,s?C.c8:C.c9,r,r,r,r,r,r,r,r,10.5,r,r,r,r,r,!0,r,r,r,r,r,r,r,r),r,r,r))
o=A.A(o,B.l,r,B.e,B.h,0,r,r)
u=p.h(e,"reason")
u=D.hFT(J.k(u==null?"":u))
o=A.a([o,A.c(u,r,r,r,r,r,r,A.l(r,r,s?C.cy:B.c,r,r,r,r,r,r,r,r,12.5,r,r,r,r,1.3,!0,r,r,r,r,r,r,r,r),r,r,r)],t)
if(p.h(e,q)!=null||w){u=A.a([],x.s)
if(p.h(e,"asset")!=null&&p.h(e,q)!=null)u.push(A.v(p.h(e,"asset"))+" "+D.ev(D.cg(p.h(e,q)),!0,!1))
if(w)u.push("fast "+B.i.a5(D.cg(p.h(e,"fast_ma")),2)+" \xb7 slow "+B.i.a5(D.cg(p.h(e,"slow_ma")),2))
p=B.d.aL(u,"  \xb7  ")
o.push(A.c(p,r,r,r,r,r,r,A.l(r,r,s?C.c8:C.c9,r,r,r,r,r,r,r,r,10.5,r,r,r,r,r,!0,r,r,r,r,r,r,r,r),r,r,r))}return new A.D(W.HA,A.A(A.a([v,B.ar,A.E(A.x(o,B.B,r,B.e,B.h,0,B.p),1)],t),B.B,r,B.e,B.h,0,r,r),r)},
cya(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=this.c
k.toString
k=A.Q(k).aH0(B.L)
w=d.a
v=w?C.cy:B.c
u=w?C.c8:C.c9
t=A.V(C.bVP,B.b_,l,l,l,l)
s=x.p
r=A.A(A.a([new A.d1(1,B.cg,A.c("The rules it follows",l,l,l,l,l,l,A.l(l,l,w?C.cy:B.c,l,l,l,l,l,l,l,l,14.5,l,l,B.E,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),l),B.aa,A.aA(l,A.p(l,C.fog,B.f,l,l,new A.o(l,l,l,A.m(999),l,G.tT,B.m),l,l,l,l,B.hm,l,l,l),B.y,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,this.gclJ(),l,l,l,l,l,l,!1,B.a4)],s),B.l,l,B.e,B.h,0,l,l)
q=A.c("Read-only, set in the code",l,l,l,l,l,l,A.l(l,l,w?C.c8:C.c9,l,l,l,l,l,l,l,l,11.5,l,l,l,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)
p=A.a([],s)
o=x.g.a(J.t(e,"rules"))
o=J.aR(o==null?B.bU:o)
while(o.C()){n=J.k(o.gP(o))
m=w?C.cy:B.c
p.push(new A.D(C.bEC,new A.c1(B.aK,B.e,B.h,B.B,l,B.p,l,0,A.a([C.eCS,B.aa,new A.bu(1,B.b9,A.c(n,l,l,l,l,l,l,new A.H(!0,m,l,l,l,l,12.5,l,l,l,l,l,1.35,l,l,l,l,l,l,l,l,l,l,l,l,l),l,l,l),l)],s),l),l))}return this.aAD(d,new A.ou(k,A.aG(!1,B.a3,!0,l,K.hfZ(l,p,U.anQ,l,u,v,!1,t,l,q,B.hd,r),B.f,l,0,l,l,l,l,l,B.i4),l),B.ag)},
aAD(d,e,f){var w=null,v=d.a,u=v?B.c.j(0.92):C.i8,t=A.m(24)
return A.p(w,e,B.f,w,w,new A.o(u,w,A.K(v?B.c:C.ml,B.r,1),t,A.a([new A.aa(0,B.H,d.gI2(),B.dt,24)],x.V),w,B.m),w,w,w,B.dU,f,w,w,w)},
agH(d,e){return this.aAD(d,e,B.bR)},
aaI(d,e,f){var w=null,v=f.j(0.12),u=A.m(16),t=A.K(f.j(0.45),B.r,1),s=A.V(B.QG,f,w,w,w,20)
return A.p(w,A.A(A.a([s,B.ar,A.E(A.c(e,w,w,w,w,w,w,A.l(w,w,d.a?C.cy:B.c,w,w,w,w,w,w,w,w,12.5,w,w,w,w,1.35,!0,w,w,w,w,w,w,w,w),w,w,w),1)],x.p),B.l,w,B.e,B.h,0,w,w),B.f,w,w,new A.o(v,w,t,u,w,w,B.m),w,w,w,B.dU,B.bg,w,w,w)},
b3h(d,e,f){var w=null,v=d.a,u=v?B.c.j(0.92):C.i8,t=A.K(v?B.c:C.ml,B.r,1)
return A.aG(!1,B.a3,!0,w,A.aM(!1,w,!0,A.p(w,A.V(e,v?C.cy:B.c,w,w,w,18),B.f,w,w,new A.o(w,w,t,w,w,w,B.a6),w,40,w,w,w,w,w,40),B.cK,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),B.f,u,0,w,w,B.cK,w,w,B.ai)},
b8T(d,e,f,g,h){var w,v,u,t,s,r,q,p=null
if(f){w=d.a
v=w?C.mZ:B.c
u=v
v=w
w=u}else{w=d.a
v=w?C.O7:C.NY
u=v
v=w
w=u}t=A.m(999)
s=x.p
r=A.a([],s)
if(h!=null){if(f)q=v?B.c:C.mZ
else q=v?C.c8:C.c9
B.d.u(r,A.a([A.V(h,q,p,p,p,14),B.d9],s))}if(f)v=v?B.c:C.mZ
else v=v?C.c8:C.c9
r.push(A.c(e,p,p,p,p,p,p,A.l(p,p,v,p,p,p,p,p,p,p,p,11.5,p,p,B.P,p,p,!0,p,p,p,p,p,p,p,p),p,p,p))
return A.aA(p,A.cV(p,A.A(r,B.l,p,B.e,B.N,0,p,p),p,p,B.aZ,new A.o(w,p,p,t,p,p,B.m),B.eH,p,p,p,p,A_.a1E,p,p,p),B.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,g,p,p,p,p,p,p,!1,B.a4)},
cAe(d,e,f,g){return this.b8T(d,e,f,g,null)},
ays(d,e,f){var w=null,v=A.p(w,w,B.f,w,w,new A.o(e,w,w,A.m(2),w,w,B.m),w,3,w,w,w,w,w,14)
return A.A(A.a([v,B.dZ,A.c(f,w,w,w,w,w,w,A.l(w,w,d.a?C.c8:C.c9,w,w,w,w,w,w,w,w,11,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),B.l,w,B.e,B.N,0,w,w)},
agI(d,e){var w=null,v=e.j(0.14),u=A.m(999)
return A.p(w,A.c(d,w,w,w,w,w,w,A.l(w,w,e,w,w,w,w,w,w,w,w,10,w,w,B.u,w,w,!0,w,0.6,w,w,w,w,w,w),w,w,w),B.f,w,w,new A.o(v,w,w,u,w,w,B.m),w,w,w,w,B.eZ,w,w,w)},
aAH(d,e,f,g){var w=null,v=d.a,u=v?C.v1:C.v2,t=A.m(16),s=A.c(e,w,w,w,w,w,w,A.l(w,w,v?C.c8:C.c9,w,w,w,w,w,w,w,w,11.5,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)
if(g==null)v=v?C.cy:B.c
else v=g
return A.p(w,A.x(A.a([s,B.cP,new A.de(B.dq,B.a5,B.f,A.c(f,w,w,w,w,w,w,A.l(w,w,v,w,w,w,w,w,w,w,w,16,w,w,B.E,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w)],x.p),B.B,w,B.e,B.h,0,B.p),B.f,w,w,new A.o(u,w,w,t,w,w,B.m),w,w,w,w,B.bg,w,w,w)},
aAG(d,e,f){return this.aAH(d,e,f,null)},
cMH(d){var w=A.v(d==null?"":d),v=A.bh(w.length>=19?B.a.aw(w,0,19):"")
if(v==null)return""
return" \xb7 opens "+B.Tj[A.lU(v)-1]+" "+D.RU(v)+" ET"}}
D.a_z.prototype={
R(){return new D.beq()}}
D.beq.prototype={
aAF(d,e){var w=this,v=w.a.c.length,u=B.o.D(B.i.bc(d.a/e*v),0,v-1)
if(u!==w.d)w.l(new D.cX_(w,u))},
B(d){return A.cf(new D.cX8(this))}}
D.ber.prototype={
a4(d0,d1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3=this,c4=null,c5={},c6=d1.b,c7=c6-18,c8=x.n,c9=A.a([],c8)
for(w=c3.c,v=w.length,u=0;t=w.length,u<t;w.length===v||(0,A.I)(w),++u){s=w[u]
t=J.a2(s)
r=t.h(s,"h")
if(!(typeof r=="number")){r=A.cx(A.v(r==null?"":r))
if(r==null)r=0}t=t.h(s,"l")
if(!(typeof t=="number")){t=A.cx(A.v(t==null?"":t))
if(t==null)t=0}B.d.u(c9,A.a([r,t],c8))}v=c3.f
if(v)for(u=0;u<w.length;w.length===t||(0,A.I)(w),++u){s=w[u]
r=A.a([],c8)
q=J.a2(s)
if(q.h(s,"f")!=null){p=q.h(s,"f")
if(!(typeof p=="number")){p=A.cx(A.v(p==null?"":p))
if(p==null)p=0}r.push(p)}if(q.h(s,"s")!=null){q=q.h(s,"s")
if(!(typeof q=="number")){q=A.cx(A.v(q==null?"":q))
if(q==null)q=0}r.push(q)}B.d.u(c9,r)}c8=c3.e
t=c8!=null
if(t)c9.push(c8)
r=c3.r
q=r>0
if(q)c9.push(r)
c5.a=B.d.eH(c9,B.pw)
o=c5.b=B.d.eH(c9,B.ou)
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
j=new D.cX9(k)
i=new D.cXb(c5,c7)
$.T()
h=A.L()
p=c3.d.a
h.r=(p?C.oK:C.oF).j(0.7).gp(0)
h.c=1
for(g=1;g<=3;++g){f=c7*g/4
for(e=0;e<c9;e+=6)d0.ah(new A.r(e,f),new A.r(e+2,f),h)}if(v){v=new D.cXa(c3,l,j,i,d0)
v.$2("s",B.b_)
v.$2("f",B.bB)}for(v=Math.max(2,k*0.62)/2,d=c3.w,a0=d!=null,g=0;g<l;++g){s=w[g]
a1=J.a2(s)
a2=a1.h(s,"o")
if(!(typeof a2=="number")){a3=A.cx(A.v(a2==null?"":a2))
a2=a3==null?0:a3}a4=a1.h(s,"c")
if(!(typeof a4=="number")){a3=A.cx(A.v(a4==null?"":a4))
a4=a3==null?0:a3}a5=a1.h(s,"h")
if(!(typeof a5=="number")){a3=A.cx(A.v(a5==null?"":a5))
a5=a3==null?0:a3}a6=a1.h(s,"l")
if(!(typeof a6=="number")){a1=A.cx(A.v(a6==null?"":a6))
a6=a1==null?0:a1}a7=a4>=a2?C.cQ:E.j_
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
b1=A.by(new A.a4(j.$1(g)-v,b2,j.$1(g)+v,Math.max(b3,b2+1.5)),B.hD)
a9.b=B.Q
d0.aq(b1,a9)}if(t)c3.aUs(d0,i.$1(c8),c9,F.qH,"Buy "+D.ev(c8,!0,!1),!0)
if(q){c8=i.$1(r)
c3.bPe(d0,c8,c9,(p?C.cy:B.c).j(0.55),D.ev(r,!0,!1))}b4=A.h2(c4,B.cL,c4,c4,c4,c4,B.a7,B.ch,c4,B.e5,B.ci)
for(c8=[0,l/3|0,B.o.ao(2*l,3),l-1],v=c8.length,c6-=13,t=c3.b,u=0;u<v;++u){g=c8[u]
r=J.t(w[g],"t")
b5=A.bh(A.v(r==null?"":r))
if(b5==null)continue
r=D.RU(D.a3A(b5))
q=p?C.c8:C.c9
b4.sb1(0,new A.eG(r,c4,c4,B.cZ,c4,c4,c4,c4,c4,c4,new A.H(!0,q,c4,t,c4,c4,10,c4,c4,c4,c4,c4,c4,c4,c4,c4,c4,c4,c4,c4,c4,c4,c4,c4,c4,c4)))
b4.eY()
r=j.$1(g)
q=b4.b.c
b4.a4(d0,new A.r(B.i.D(r-q/2,0,c9-q),c6))}if(a0&&d<l){s=w[d]
e=j.$1(d)
c6=J.a2(s)
b6=i.$1(D.cg(c6.h(s,"c")))
$.T()
b7=A.L()
b7.r=(p?C.cy:B.c).j(0.5).gp(0)
b7.c=1
for(b8=0;b8<c7;b8+=6)d0.ah(new A.r(e,b8),new A.r(e,b8+3),b7)
$.T()
c8=A.L()
c8.r=(p?B.c.j(0.92):C.i8).gp(0)
d0.O(new A.r(e,b6),6,c8)
c8=A.L()
c8.r=(p?C.cy:B.c).gp(0)
c8.b=B.ac
c8.c=2.5
d0.O(new A.r(e,b6),6,c8)
c8=c6.h(s,"t")
b5=A.bh(A.v(c8==null?"":c8))
c8=b5==null?"":D.RU(D.a3A(b5))+" ET\n"
c6=D.ev(D.cg(c6.h(s,"c")),!0,!1)
b4.sb1(0,A.d_(c4,c4,c4,c4,c4,c4,c4,c4,c4,A.l(c4,c4,p?B.c:C.mZ,c4,c4,c4,c4,c4,t,c4,c4,11.5,c4,c4,B.E,c4,1.3,!0,c4,c4,c4,c4,c4,c4,c4,c4),c8+c6))
b4.sDg(0,B.K)
b4.eY()
c6=b4.b
b9=c6.c+18
c6=c6.a.c
c0=c6.gb8(c6)+10
c1=B.i.D(e-b9/2,0,c9-b9)
c2=Math.max(0,b6-c0-14)
c9=A.by(new A.a4(c1,c2,c1+b9,c2+c0),B.hS)
c6=A.L()
c6.r=(p?C.mZ:B.c).gp(0)
d0.aq(c9,c6)
b4.a4(d0,new A.r(c1+9,c2+5))}},
aUs(d,e,f,g,h,i){var w,v,u,t,s,r,q,p,o,n,m=null
$.T()
w=A.L()
w.r=g.gp(0)
w.c=1.2
for(v=0;v<f;v+=7)d.ah(new A.r(v,e),new A.r(v+3.5,e),w)
u=A.h2(m,B.cL,m,m,m,A.d_(m,m,m,m,m,m,m,m,m,A.l(m,m,B.c,m,m,m,m,m,this.b,m,m,10,m,m,B.E,m,m,!0,m,m,m,m,m,m,m,m),h),B.a7,B.ch,m,B.e5,B.ci)
u.eY()
t=u.b
s=t.c+12
t=t.a.c
r=t.gb8(t)+6
q=i?0:f-s
t=e-r/2
p=A.by(new A.a4(q,t,q+s,t+r),B.qi)
$.T()
o=A.L()
if(i)n=F.qH
else n=this.d.a?C.mZ:B.c
o.r=n.gp(0)
d.aq(p,o)
u.a4(d,new A.r(q+6,t+3))},
bPe(d,e,f,g,h){return this.aUs(d,e,f,g,h,!1)},
aD(d){var w=this
return d.c!==w.c||d.w!=w.w||d.f!==w.f||d.e!=w.e||d.r!==w.r||d.d.a!==w.d.a}}
D.bwm.prototype={
a4(d,e){var w,v,u,t,s,r,q,p,o,n,m=null,l=this.b
if(l.length<2)return
w=A.U(l).k("O<1,G>")
v=A.B(new A.O(l,new D.fhS(),w),w.k("aj.E"))
u=B.d.eH(v,B.pw)
t=B.d.eH(v,B.ou)-u
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
w.san(new A.a8(B.aX,B.b1,B.x,A.a([p.j(0.25),p.j(0)],x.O),m,m).az(0,new A.a4(0,0,0+l,0+r)))
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
D.Ro.prototype={
gI2(){return this.a?B.cf.j(0.08):B.v.j(0.35)}}
D.WX.prototype={
R(){return new D.aGm(A.a([],x.t))}}
D.aGm.prototype={
a_(){var w=this
w.a3()
w.a.toString
w.B6()
w.Br()
w.x=A.d0(B.n9,new D.e7V(w))},
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
r.l(new D.e7s(r,o))
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
return A.b(A.hc(A.a([A.fP(A.J(["action","fsStatus","system",r.a.c],m,l),!1,!1,!1,!1,B.wY),A.fP(A.J(["action","fsLog","system",r.a.c,"limit",30],m,l),!1,!1,!1,!1,B.n9)],x.o),x.h),$async$Br)
case 3:k=e
l=J.a2(k)
q=l.h(k,0)
o=l.h(k,1)
if(r.c==null){w=1
break}r.l(new D.e7C(r,q,o))
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
za(d){return this.cB5(d)},
cB5(d){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$za=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.d
t.l(new D.e7I(t,d))
w=3
return A.b(A.fP(A.J(["action","fsSet","system",t.a.c,"enabled",d],x.N,x.z),!1,!1,!1,!1,B.wY),$async$za)
case 3:s=f
if(t.c==null){w=1
break}t.l(new D.e7J(t,s,r))
case 1:return A.h(u,v)}})
return A.i($async$za,v)},
B(b7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=this,a5=null,a6="brakePaused",a7="enabled",a8="entryPrice",a9="pnlSum",b0=A.Q(b7).ax.a===B.dg,b1=new D.Ro(b0),b2=a4.a.c==="options"?"Options":"Scalper",b3=a4.d,b4=D.dR(b3==null?a5:b3.h(0,"state")),b5=J.z(b4.h(0,a6),!0),b6=J.z(b4.h(0,a7),!0)&&!b5
b3=b0?C.t3:C.t1
w=b0?C.t3:C.t1
w=A.a([w,b0?C.O0:C.NU],x.O)
v=a4.a0R(b1,B.eB,new D.e7T(b7))
u=a4.a.c==="options"
t=u?B.aC:B.as
s=A.m(11)
t=A.p(a5,A.V(u?B.fM:B.rg,B.c,a5,a5,a5,20),B.f,a5,a5,new A.o(t,a5,a5,s,a5,a5,B.m),a5,34,a5,a5,a5,a5,a5,34)
u=A.c(b2,a5,a5,a5,a5,a5,a5,A.l(a5,a5,b0?C.cy:B.c,a5,a5,a5,a5,a5,a5,a5,a5,17,a5,a5,B.E,a5,a5,!0,a5,a5,a5,a5,a5,a5,a5,a5),a5,a5,a5)
s=x.p
u=A.a([v,B.ar,t,B.ar,A.E(A.x(A.a([u,A.c("Fast system \xb7 paper money only",a5,a5,a5,a5,a5,a5,A.l(a5,a5,b0?C.c8:C.c9,a5,a5,a5,a5,a5,a5,a5,a5,11.5,a5,a5,a5,a5,a5,!0,a5,a5,a5,a5,a5,a5,a5,a5),a5,a5,a5)],s),B.B,a5,B.e,B.h,0,B.p),1)],s)
if(a4.d!=null){if(b5)v=C.dn
else if(b6)v=C.cQ
else v=b0?C.c8:C.c9
v=v.j(0.14)
t=A.m(999)
if(b5)r="Paused"
else r=b6?"Running":"Stopped"
if(b5)q=C.dn
else if(b6)q=C.cQ
else q=b0?C.c8:C.c9
u.push(A.p(a5,A.c(r,a5,a5,a5,a5,a5,a5,A.l(a5,a5,q,a5,a5,a5,a5,a5,a5,a5,a5,12,a5,a5,B.E,a5,a5,!0,a5,a5,a5,a5,a5,a5,a5,a5),a5,a5,a5),B.f,a5,a5,new A.o(v,a5,a5,t,a5,a5,B.m),a5,a5,a5,a5,B.fZ,a5,a5,a5))}u.push(B.aa)
u.push(a4.a0R(b1,B.ni,a4.r?a5:new D.e7U(a4)))
v=A.A(u,B.l,a5,B.e,B.h,0,a5,a5)
if(a4.f)b0=B.lq
else{u=a4.d
if(u==null){b0=a4.w
b0=A.a([a4.a0Q(b1,b0==null?"Nothing to show yet.":b0,B.b_)],s)}else{b4=D.dR(u.h(0,"state"))
t=x.f
p=t.b(b4.h(0,"shadow"))?D.dR(b4.h(0,"shadow")):a5
r=A.a([],s)
if(p!=null){q=D.dR(b4.h(0,"mark"))
o=t.b(p.h(0,"option"))?D.dR(p.h(0,"option")):a5
t=p.h(0,"entryAt")
n=A.bh(A.v(t==null?"":t))
m=n==null?a5:n.bL(18e8)
l=D.cg(q.h(0,"pnl"))
t=a4.a.c==="options"?B.aC:B.as
k=A.c("OPEN TRADE",a5,a5,a5,a5,a5,a5,A.l(a5,a5,b0?C.c8:C.c9,a5,a5,a5,a5,a5,a5,a5,a5,10.5,a5,a5,B.u,a5,a5,!0,a5,0.8,a5,a5,a5,a5,a5,a5),a5,a5,a5)
k=A.A(A.a([k,B.aV,new D.aBh(m,a4.a.c==="options"?B.aC:B.as,a5)],s),B.l,a5,B.e,B.h,0,a5,a5)
j=o!=null
if(j){i=A.v(p.h(0,"symbol"))
h=D.ev(D.cg(o.h(0,"strike")),!0,!1)
g=o.h(0,"right")
i=i+" "+h+" "+A.v(g==null?"call":g)+" \xb7 expires "+D.aQP(o.h(0,"expiry"))}else i=A.v(p.h(0,"symbol"))
i=A.c(i,a5,a5,a5,a5,a5,a5,A.l(a5,a5,b0?C.cy:B.c,a5,a5,a5,a5,a5,a5,a5,a5,17,a5,a5,B.E,a5,a5,!0,a5,a5,a5,a5,a5,a5,a5,a5),a5,a5,a5)
if(j){j=D.ev(D.cg(p.h(0,a8)),!0,!1)
h=D.ev(D.cg(q.h(0,"cost")),!0,!1)
q=J.z(q.h(0,"priced"),!1)?"no price yet":D.ev(D.cg(q.h(0,"price")),!0,!1)
q="Premium paid "+j+" x 100 = "+h+" \xb7 now "+q}else q="$"+B.i.a5(D.cg(q.h(0,"cost")),0)+" bought at "+D.ev(D.cg(p.h(0,a8)),!0,!1)+" \xb7 now "+D.ev(D.cg(q.h(0,"price")),!0,!1)
q=A.c(q,a5,a5,a5,a5,a5,a5,A.l(a5,a5,b0?C.c8:C.c9,a5,a5,a5,a5,a5,a5,a5,a5,12,a5,a5,a5,a5,a5,!0,a5,a5,a5,a5,a5,a5,a5,a5),a5,a5,a5)
j=D.ev(l,!0,!0)
h=l>=0
j=A.c(j,a5,a5,a5,a5,a5,a5,A.l(a5,a5,h?C.cQ:C.dn,a5,a5,a5,a5,a5,a5,a5,a5,26,a5,a5,B.u,a5,a5,!0,a5,a5,a5,a5,a5,a5,a5,a5),a5,a5,a5)
h=h?"winning right now":"losing right now"
j=A.A(A.a([j,B.aa,A.c(h,a5,a5,a5,a5,a5,a5,A.l(a5,a5,b0?C.c8:C.c9,a5,a5,a5,a5,a5,a5,a5,a5,12,a5,a5,a5,a5,a5,!0,a5,a5,a5,a5,a5,a5,a5,a5),a5,a5,a5)],s),B.l,a5,B.e,B.h,0,a5,a5)
h=D.hGH(p.h(0,"entryAt"))
g=m==null?"":" \xb7 hard close by "+D.RU(D.a3A(m.ab()))+" ET"
r.push(a4.b3g(b1,t,A.x(A.a([k,B.M,i,B.bw,q,B.ak,j,A.c("Bought "+h+g,a5,a5,a5,a5,a5,a5,A.l(a5,a5,b0?C.c8:C.c9,a5,a5,a5,a5,a5,a5,a5,a5,11.5,a5,a5,a5,a5,a5,!0,a5,a5,a5,a5,a5,a5,a5,a5),a5,a5,a5)],s),B.B,a5,B.e,B.h,0,B.p)))}r.push(a4.c8H(b1,u))
r.push(a4.bLp(b1,u))
p=D.dR(u.h(0,"shared"))
f=p.h(0,"balance")
e=D.cg(p.h(0,"closed"))+D.cg(p.h(0,"open"))
t=A.m(26)
q=A.A(A.a([C.fWP,B.aV,A.p(a5,C.h16,B.f,a5,a5,new A.o(B.c.j(0.14),a5,a5,A.m(999),a5,a5,B.m),a5,a5,a5,a5,B.eZ,a5,a5,a5)],s),B.l,a5,B.e,B.h,0,a5,a5)
k=A.c(f==null?"\u2014":D.ev(D.cg(f),!0,!1),a5,a5,a5,a5,a5,a5,C.fEw,a5,a5,a5)
j=D.ev(e,!0,!0)
if(e>0)i=C.cQ
else i=e<0?C.dn:B.ab
i=A.c(j+" from pretend trades of every system",a5,a5,a5,a5,a5,a5,A.l(a5,a5,i,a5,a5,a5,a5,a5,a5,a5,a5,12.5,a5,a5,B.E,a5,a5,!0,a5,a5,a5,a5,a5,a5,a5,a5),a5,a5,a5)
r.push(A.p(a5,A.x(A.a([q,B.at,new A.de(B.dq,B.a5,B.f,k,a5),i,B.bw,A.c("Alpaca paper account "+(p.h(0,"equity")==null?"\u2014":D.ev(D.cg(p.h(0,"equity")),!0,!1))+" (unchanged, no orders are sent)",a5,a5,a5,a5,a5,a5,N.Fy,a5,a5,a5)],s),B.B,a5,B.e,B.h,0,B.p),B.f,a5,a5,new A.o(a5,a5,a5,t,a5,C.auY,B.m),a5,a5,a5,B.dU,B.fa,a5,a5,a5))
t=a4.w
if(t!=null)r.push(a4.a0Q(b1,t,C.dn))
if(J.z(b4.h(0,a6),!0)){t=b4.h(0,"brakeReason")
r.push(a4.a0Q(b1,"Paused by this system's brake. "+A.v(t==null?"":t)+y.g,C.dn))}r.push(a4.aAE(b1,b4))
r.push(a4.cn2(b1,u))
d=D.dR(u.h(0,"record"))
a0=d.h(0,"winRatePct")
t=a0==null
if(t)a1=b0?C.cy:B.c
else a1=D.cg(a0)>=50?C.cQ:C.dn
q=A.c("LIVE WIN RATE",a5,a5,a5,a5,a5,a5,A.l(a5,a5,b0?C.c8:C.c9,a5,a5,a5,a5,a5,a5,a5,a5,10.5,a5,a5,B.u,a5,a5,!0,a5,0.9,a5,a5,a5,a5,a5,a5),a5,a5,a5)
k=t?"No closed trades yet":B.i.a5(D.cg(a0),0)+"%"
k=A.c(k,a5,a5,a5,a5,a5,a5,A.l(a5,a5,a1,a5,a5,a5,a5,a5,a5,a5,a5,t?16:30,a5,a5,B.u,a5,a5,!0,a5,a5,a5,a5,a5,a5,a5,a5),a5,a5,a5)
j=d.h(0,"wins")
t=A.v(j==null?0:j)
j=d.h(0,"trades")
j=A.v(j==null?0:j)
t=A.E(A.x(A.a([q,B.at,k,A.c(t+" won out of "+j+" closed trades",a5,a5,a5,a5,a5,a5,A.l(a5,a5,b0?C.c8:C.c9,a5,a5,a5,a5,a5,a5,a5,a5,12,a5,a5,a5,a5,a5,!0,a5,a5,a5,a5,a5,a5,a5,a5),a5,a5,a5)],s),B.B,a5,B.e,B.h,0,B.p),1)
q=A.c("All time",a5,a5,a5,a5,a5,a5,A.l(a5,a5,b0?C.c8:C.c9,a5,a5,a5,a5,a5,a5,a5,a5,11,a5,a5,a5,a5,a5,!0,a5,a5,a5,a5,a5,a5,a5,a5),a5,a5,a5)
k=D.ev(D.cg(d.h(0,a9)),!0,!0)
if(D.cg(d.h(0,a9))>0)j=C.cQ
else if(D.cg(d.h(0,a9))<0)j=C.dn
else j=b0?C.cy:B.c
j=A.c(k,a5,a5,a5,a5,a5,a5,A.l(a5,a5,j,a5,a5,a5,a5,a5,a5,a5,a5,18,a5,a5,B.E,a5,a5,!0,a5,a5,a5,a5,a5,a5,a5,a5),a5,a5,a5)
k=d.h(0,"wins")
k=A.v(k==null?0:k)
i=d.h(0,"losses")
i=A.v(i==null?0:i)
r.push(a4.yO(b1,A.A(A.a([t,A.x(A.a([q,j,A.c(k+" W / "+i+" L",a5,a5,a5,a5,a5,a5,A.l(a5,a5,b0?C.c8:C.c9,a5,a5,a5,a5,a5,a5,a5,a5,11,a5,a5,a5,a5,a5,!0,a5,a5,a5,a5,a5,a5,a5,a5),a5,a5,a5)],s),B.dv,a5,B.e,B.h,0,B.p)],s),B.l,a5,B.e,B.h,0,a5,a5)))
if(a4.a.c==="options")r.push(a4.cmM(b1,u))
r.push(a4.cBu(b1,u))
t=b4.h(0,"lastNote")
a2=J.k(t==null?"":t)
t=b4.h(0,"lastNoteAt")
if(t==null)t=b4.h(0,"lastTickAt")
a3=A.bh(A.v(t==null?"":t))
if(J.z(b4.h(0,a7),!0))t=C.cQ
else t=b0?C.c8:C.c9
t=A.V(L.Qj,t,a5,a5,a5,18)
q=J.z(b4.h(0,a7),!0)?"Checks every minute by itself":"Stopped: press Start to let it check every minute"
q=A.a([A.c(q,a5,a5,a5,a5,a5,a5,A.l(a5,a5,b0?C.cy:B.c,a5,a5,a5,a5,a5,a5,a5,a5,13,a5,a5,B.E,a5,a5,!0,a5,a5,a5,a5,a5,a5,a5,a5),a5,a5,a5)],s)
if(a2.length!==0){k=a3==null?"":D.RU(D.a3A(a3.ab()))+" ET \xb7 "
B.d.u(q,A.a([B.cP,A.c(k+a2,a5,a5,a5,a5,a5,a5,A.l(a5,a5,b0?C.c8:C.c9,a5,a5,a5,a5,a5,a5,a5,a5,12,a5,a5,a5,a5,1.3,!0,a5,a5,a5,a5,a5,a5,a5,a5),a5,a5,a5)],s))}r.push(a4.yO(b1,A.A(A.a([t,B.aa,A.E(A.x(q,B.B,a5,B.e,B.h,0,B.p),1)],s),B.B,a5,B.e,B.h,0,a5,a5)))
r.push(a4.cJG(b1,u))
r.push(a4.bF0(b1))
r.push(a4.cy9(b1,u))
r.push(a4.yO(b1,A.A(A.a([C.c5l,B.aa,A.E(A.c("Paper money only: no order is ever sent to Alpaca. Orders are disabled.",a5,a5,a5,a5,a5,a5,A.l(a5,a5,b0?C.c8:C.c9,a5,a5,a5,a5,a5,a5,a5,a5,11.5,a5,a5,a5,a5,1.3,!0,a5,a5,a5,a5,a5,a5,a5,a5),a5,a5,a5),1)],s),B.l,a5,B.e,B.h,0,a5,a5)))
b0=r}b0=A.Kk(A.co(b0,a5,a5,C.ao8,a5,a5,B.ah,!1),a5,a4.gcgq())}return A.c5(a5,b3,A.p(a5,A.bo(!0,A.x(A.a([new A.D(B.hc,v,a5),A.E(b0,1)],s),B.l,a5,B.e,B.h,0,B.p),!0,!1,B.ag,!0,!0),B.f,a5,a5,new A.o(a5,a5,a5,a5,a5,new A.a8(B.aX,B.b1,B.x,w,a5,a5),B.m),a5,a5,a5,a5,a5,a5,a5,a5),a5,!1,!1,a5,a5)},
aAE(d,e){var w,v,u,t=this,s=null,r=J.z(e.h(0,"enabled"),!0)&&!J.z(e.h(0,"brakePaused"),!0),q=r?C.dn:C.cQ
q=A.bp(q,s,s,s,s,s,s,s,new A.b9(A.m(999),B.a1),s,s,s)
w=t.r
if(!w)t.a.toString
v=w?s:new D.e7q(t,r)
if(w)w=B.rE
else w=A.V(r?B.vC:B.fN,s,s,s,s,s)
if(r)u="Stop "+(t.a.c==="options"?"Options":"Scalper")
else u="Start "+(t.a.c==="options"?"Options":"Scalper")
return new A.D(B.dU,new A.a5(1/0,52,A.db(w,s,A.c(u,s,s,s,s,s,s,B.mM,s,s,s),v,q),s),s)},
cn2(a7,a8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=null,g=D.dR(a8.h(0,"pace")),f=g.h(0,"target"),e=B.i.M(D.cg(f==null?20:f)),d=B.i.M(D.cg(g.h(0,"trades"))),a0=B.i.M(D.cg(g.h(0,"expected"))),a1=D.cg(g.h(0,"deficit"))>0,a2=D.cg(g.h(0,"thresholdPct")),a3=D.cg(g.h(0,"startPct")),a4=B.i.M(D.cg(g.h(0,"steps"))),a5=J.z(g.h(0,"finalHour"),!0),a6=B.i.M(D.cg(g.h(0,"minutesLeft")))
f=d>=e
if(f)w=C.cQ
else w=a1?E.j_:C.cQ
if(f)v="target reached"
else v=a1?"behind pace by "+B.i.M(D.cg(g.h(0,"deficit"))):"on pace"
if(f)u="Target reached: back to the day's start, +"+B.i.a5(a3,2)+"%."
else if(a5){f="Last hour of the window: at the floor, +"+B.i.a5(a2,2)+"% (still never a falling market)."
u=f}else{f=a4>0?"Behind by "+B.i.a5(D.cg(g.h(0,"hoursBehind")),1)+" h, so "+a4+" step(s) down from +"+B.i.a5(a3,2)+"%.":"On pace: the day's start, +"+B.i.a5(a3,2)+"%."
u=f}f=D.dR(a8.h(0,"state")).h(0,"lastNote")
t=J.k(f==null?"":f)
f=g.h(0,"learned")
s=J.k(f==null?"":f)
f=g.h(0,"dayNote")
r=J.k(f==null?"":f)
f=a7.a
q=A.c("TRADES TODAY",h,h,h,h,h,h,A.l(h,h,f?C.c8:C.c9,h,h,h,h,h,h,h,h,10.5,h,h,B.u,h,h,!0,h,0.9,h,h,h,h,h,h),h,h,h)
p=J.z(g.h(0,"inWindow"),!0)?""+B.o.ao(a6,60)+"h "+B.o.F(a6,60)+"m left":"window closed"
o=x.p
p=A.A(A.a([q,B.aV,this.aEx(p,f?C.c8:C.c9)],o),B.l,h,B.e,B.h,0,h,h)
q=A.A(A.a([A.c("Trades today: "+d+" of "+e,h,h,h,h,h,h,A.l(h,h,f?C.cy:B.c,h,h,h,h,h,h,h,h,22,h,h,B.u,h,h,!0,h,h,h,h,h,h,h,h),h,h,h)],o),B.dv,h,B.e,B.h,0,h,h)
n=A.c(v+" \xb7 "+B.i.M(D.cg(g.h(0,"remaining")))+" to go \xb7 expected by now: "+a0,h,h,h,h,h,h,A.l(h,h,w,h,h,h,h,h,h,h,h,12.5,h,h,B.E,h,h,!0,h,h,h,h,h,h,h,h),h,h,h)
m=A.cf(new D.e7A(a7,d,e,w,a0))
l=f?C.v1:C.v2
k=A.m(12)
j=B.i.a5(a2,2)
j=A.c("Entry strength needed now: +"+j+"% in 15 min",h,h,h,h,h,h,A.l(h,h,f?C.cy:B.c,h,h,h,h,h,h,h,h,13,h,h,B.E,h,h,!0,h,h,h,h,h,h,h,h),h,h,h)
i=A.c(u,h,h,h,h,h,h,A.l(h,h,f?C.c8:C.c9,h,h,h,h,h,h,h,h,11.5,h,h,h,h,1.3,!0,h,h,h,h,h,h,h,h),h,h,h)
q=A.a([p,B.ak,q,B.bw,n,B.M,m,B.R,A.p(h,A.x(A.a([j,B.bw,i,A.c("It steps down 0.05% per hour behind the pace to 20, never below +0.05%, and never buys a falling market.",h,h,h,h,h,h,A.l(h,h,f?C.c8:C.c9,h,h,h,h,h,h,h,h,11,h,h,h,h,1.3,!0,h,h,h,h,h,h,h,h),h,h,h)],o),B.B,h,B.e,B.h,0,B.p),B.f,h,h,new A.o(l,h,h,k,h,h,B.m),h,h,h,h,B.bQ,h,h,1/0)],o)
if(s.length!==0){p=A.d_(A.a([A.d_(h,h,h,h,h,h,h,h,h,A.l(h,h,this.a.c==="options"?B.aC:B.as,h,h,h,h,h,h,h,h,h,h,h,B.u,h,h,!0,h,h,h,h,h,h,h,h),"What it learned: "),A.d_(h,h,h,h,h,h,h,h,h,h,s)],x.R),h,h,h,h,h,h,h,h,h,h)
B.d.u(q,A.a([B.M,A.Ql(p,h,h,A.l(h,h,f?C.cy:B.c,h,h,h,h,h,h,h,h,12,h,h,h,h,1.35,!0,h,h,h,h,h,h,h,h),h)],o))}if(r.length!==0)B.d.u(q,A.a([B.ak,A.c(r,h,h,h,h,h,h,A.l(h,h,E.j_,h,h,h,h,h,h,h,h,12,h,h,B.P,h,1.3,!0,h,h,h,h,h,h,h,h),h,h,h)],o))
if(t.length!==0&&D.dR(a8.h(0,"state")).h(0,"shadow")==null)B.d.u(q,A.a([B.ak,A.c("Now: "+t,h,h,h,h,h,h,A.l(h,h,f?C.cy:B.c,h,h,h,h,h,h,h,h,12,h,h,h,h,1.3,!0,h,h,h,h,h,h,h,h),h,h,h)],o))
return this.yO(a7,A.x(q,B.B,h,B.e,B.h,0,B.p))},
b03(d){var w=x.g.a(d.h(0,"markets"))
if(w==null)w=B.bU
w=J.cQ(w,x.f)
w=A.cA(w,new D.e7y(),w.$ti.k("M.E"),x.P)
w=A.B(w,A.a3(w).k("M.E"))
return w},
b90(d){if(d.length===0)return null
return B.d.dr(d,new D.e7G(this),new D.e7H(d))},
c8H(d,e){var w,v,u,t,s,r,q=this,p=null,o=q.b03(e)
if(o.length===0)return B.bK
w=q.b90(o)
w.toString
v=new A.X(o,new D.e7v(),A.U(o).k("X<1>")).gJ(0)
u=o.length
t=d.a
u=A.c("Its markets ("+u+")",p,p,p,p,p,p,A.l(p,p,t?C.cy:B.c,p,p,p,p,p,p,p,p,14,p,p,B.E,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)
s=v===0
r=s?"NONE PASSING NOW":""+v+" PASSING NOW"
if(s)s=t?C.c8:C.c9
else s=C.cQ
s=q.aEx(r,s)
r=x.p
return new A.D(B.d6,A.x(A.a([new A.D(C.aoW,A.A(A.a([u,B.aa,s,B.aV,A.c("tap one",p,p,p,p,p,p,A.l(p,p,t?C.c8:C.c9,p,p,p,p,p,p,p,p,11,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)],r),B.l,p,B.e,B.h,0,p,p),p),new A.a5(p,82,A.hK(B.f,p,new D.e7w(q,o,w,d),o.length,p,p,B.aK,new D.e7x(),!1),p)],r),B.B,p,B.e,B.h,0,B.p),p)},
bLp(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=this.b90(this.b03(e))
if(j==null)return B.bK
w=J.a2(j)
v=x.g.a(D.dR(w.h(j,"chart")).h(0,"points"))
if(v==null)v=B.bU
v=J.cQ(v,x.f)
v=A.cA(v,new D.e7p(),v.$ti.k("M.E"),x.P)
u=A.B(v,A.a3(v).k("M.E"))
t=D.dR(w.h(j,"analysis"))
s=D.cg(w.h(j,"changePct"))
v=D.bDK(A.v(w.h(j,"symbol")),24)
r=A.v(w.h(j,"symbol"))
q=d.a
r=A.c(r,k,k,k,k,k,k,A.l(k,k,q?C.cy:B.c,k,k,k,k,k,k,k,k,15,k,k,B.E,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)
p=w.h(j,"name")
p=A.v(p==null?"":p)
o=x.p
p=A.E(A.x(A.a([r,A.c(p,k,1,B.a2,k,k,k,A.l(k,k,q?C.c8:C.c9,k,k,k,k,k,k,k,k,11.5,k,k,k,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)],o),B.B,k,B.e,B.h,0,B.p),1)
r=D.ev(D.cg(w.h(j,"price")),!0,!1)
r=A.c(r,k,k,k,k,k,k,A.l(k,k,q?C.cy:B.c,k,k,k,k,k,k,k,k,17,k,k,B.E,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)
n=s>=0
m=n?"+":""
l=B.i.a5(s,2)
v=A.a([A.A(A.a([v,B.aa,p,A.x(A.a([r,A.c(m+l+"% today",k,k,k,k,k,k,A.l(k,k,n?C.cQ:C.dn,k,k,k,k,k,k,k,k,11,k,k,B.E,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)],o),B.dv,k,B.e,B.h,0,B.p)],o),B.l,k,B.e,B.h,0,k,k),B.R],o)
r=u.length
if(r>1)v.push(new D.a_z(B.d.fB(u,Math.max(0,r-36)),d,k,!0,D.cg(w.h(j,"price")),k))
else v.push(A.c(y.b,k,k,k,k,k,k,A.l(k,k,q?C.c8:C.c9,k,k,k,k,k,k,k,k,12,k,k,k,k,k,!0,k,k,k,k,k,k,k,k),k,k,k))
if(t.h(0,"why")!=null){w=A.v(t.h(0,"why"))
B.d.u(v,A.a([B.ak,A.c("Analysis: "+w,k,k,k,k,k,k,A.l(k,k,q?C.c8:C.c9,k,k,k,k,k,k,k,k,11.5,k,k,k,k,1.3,!0,k,k,k,k,k,k,k,k),k,k,k)],o))}return this.yO(d,A.x(v,B.B,k,B.e,B.h,0,B.p))},
cBu(d,a0){var w,v,u,t,s,r=this,q=null,p="takeProfitUsd",o="stopLossUsd",n="maxHoldMin",m="exitCheckEveryMin",l=D.dR(a0.h(0,"settings")),k=D.dR(a0.h(0,"today")),j=new D.e7K(d),i=r.a.c==="options"?"+"+D.ev(D.cg(l.h(0,p)),!0,!1):"+"+B.i.a5(D.cg(l.h(0,"takeProfitPct")),0)+"% (+$"+B.i.a5(D.cg(l.h(0,p)),0)+")",h=r.a.c==="options"?"-"+D.ev(D.cg(l.h(0,o)),!0,!1):"-"+B.i.a5(D.cg(l.h(0,"stopLossPct")),0)+"% (-$"+B.i.a5(D.cg(l.h(0,o)),0)+")",g=A.V(B.mx,r.a.c==="options"?B.aC:B.as,q,q,q,18),f=d.a,e=x.p
g=A.A(A.a([g,B.bb,A.c("THE 30-MINUTE LAW",q,q,q,q,q,q,A.l(q,q,f?C.cy:B.c,q,q,q,q,q,q,q,q,12,q,q,B.u,q,q,!0,q,0.8,q,q,q,q,q,q),q,q,q)],e),B.l,q,B.e,B.h,0,q,q)
w=B.i.a5(D.cg(l.h(0,n)),0)
v=B.i.a5(D.cg(l.h(0,m)),0)
u=B.i.a5(D.cg(l.h(0,"hardCloseAtMin")),0)
w=A.c("Every trade closes within "+w+" minutes, win, lose or flat. Exits are checked every "+v+" minute, and the hard close sells at the last check before 30 minutes ("+u+" minutes held).",q,q,q,q,q,q,A.l(q,q,f?C.c8:C.c9,q,q,q,q,q,q,q,q,11.5,q,q,q,q,1.35,!0,q,q,q,q,q,q,q,q),q,q,q)
v=j.$2("Hard close",B.i.a5(D.cg(l.h(0,n)),0)+" min max")
u=j.$2("Exit checks","every "+B.i.a5(D.cg(l.h(0,m)),0)+" min")
f=A.A(A.a([v,B.bb,u,B.bb,j.$2("Each trade",r.a.c==="options"?"1 call \u2264$"+B.i.a5(D.cg(l.h(0,"maxPremiumUsd")),0):"$"+B.i.a5(D.cg(l.h(0,"tradeUsd")),0))],e),B.l,q,B.e,B.h,0,q,q)
v=j.$3$c("Take profit",i,C.cQ)
u=j.$3$c("Stop loss",h,C.dn)
t=k.h(0,"trades")
t=A.v(t==null?0:t)
s=l.h(0,"maxTrades")
return r.yO(d,A.x(A.a([g,B.at,w,B.R,f,B.ak,A.A(A.a([v,B.bb,u,B.bb,j.$2("Trades today",t+" of "+A.v(s==null?"-":s))],e),B.l,q,B.e,B.h,0,q,q),B.ak,A.A(A.a([j.$2("Daily stop","-$"+B.i.a5(D.cg(l.h(0,"dailyStopUsd")),0)),B.bb,j.$2("Total brake","-$"+B.i.a5(D.cg(l.h(0,"totalBrakeUsd")),0)),B.bb,j.$2("Strength","+"+B.i.a5(D.cg(l.h(0,"strengthPct")),1)+"% in 15 min")],e),B.l,q,B.e,B.h,0,q,q)],e),B.B,q,B.e,B.h,0,B.p))},
cmM(a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0=null,a1="cost",a2=D.dR(a4.h(0,"options"))
if(a2.a===0)return B.bK
if(J.z(a2.h(0,"weekend"),!0)){w=a2.h(0,"message")
return d.a0Q(a3,J.k(w==null?"":w),B.b_)}if(!J.z(a2.h(0,"enabled"),!0)){w=a2.h(0,"message")
w=J.k(w==null?"Options are not enabled on the paper account yet":w)
return d.a0Q(a3,w,J.z(a2.h(0,"enabled"),!1)?E.j_:B.b_)}v=D.dR(a2.h(0,"preview"))
u=J.z(a2.h(0,"fits"),!0)
w=a2.h(0,"right")
t=A.v(w==null?"call":w)
w=a2.h(0,"underlying")
s=A.v(w==null?"SPY":w)
w=x.g.a(a2.h(0,"tried"))
if(w==null)w=B.bU
w=J.cQ(w,x.f)
w=A.cA(w,new D.e7z(),w.$ti.k("M.E"),x.P)
r=A.B(w,A.a3(w).k("M.E"))
w=a3.a
q=A.E(A.c(s+" CALL IT WOULD CHOOSE NOW",a0,a0,B.a2,a0,a0,a0,A.l(a0,a0,w?C.c8:C.c9,a0,a0,a0,a0,a0,a0,a0,a0,10.5,a0,a0,B.u,a0,a0,!0,a0,0.8,a0,a0,a0,a0,a0,a0),a0,a0,a0),1)
p=u?"UNDER $150":"NONE UNDER $150"
o=x.p
p=A.A(A.a([q,d.aEx(p,u?C.cQ:C.dn)],o),B.l,a0,B.e,B.h,0,a0,a0)
q=A.a([p,B.at,A.c("For the best-ranked market right now. Calls only (trend up), slightly out of the money, expiring this week.",a0,a0,a0,a0,a0,a0,A.l(a0,a0,w?C.c8:C.c9,a0,a0,a0,a0,a0,a0,a0,a0,11.5,a0,a0,a0,a0,a0,!0,a0,a0,a0,a0,a0,a0,a0,a0),a0,a0,a0),B.M],o)
if(u&&v.a!==0){p=D.ev(D.cg(v.h(0,"strike")),!0,!1)
n=D.aQP(v.h(0,"expiry"))
p=A.c(s+" "+p+" "+t+" \xb7 expires "+n,a0,a0,a0,a0,a0,a0,A.l(a0,a0,w?C.cy:B.c,a0,a0,a0,a0,a0,a0,a0,a0,16,a0,a0,B.E,a0,a0,!0,a0,a0,a0,a0,a0,a0,a0,a0),a0,a0,a0)
n=D.ev(D.cg(v.h(0,"premium")),!0,!1)
m=D.ev(D.cg(v.h(0,a1)),!0,!1)
l=D.ev(D.cg(a2.h(0,"spot")),!0,!1)
n=A.c("Premium "+n+" a share x 100 = "+m+"  \xb7  "+s+" "+l,a0,a0,a0,a0,a0,a0,A.l(a0,a0,w?C.c8:C.c9,a0,a0,a0,a0,a0,a0,a0,a0,12,a0,a0,a0,a0,a0,!0,a0,a0,a0,a0,a0,a0,a0,a0),a0,a0,a0)
m=a2.h(0,"why")
B.d.u(q,A.a([p,B.bw,n,B.at,A.c("It fits: "+A.v(m==null?"":m)+". On a passing setup it would buy this one.",a0,a0,a0,a0,a0,a0,C.fKC,a0,a0,a0)],o))}else{p=a2.h(0,"why")
p=B.a.Y(A.v(p==null?"":p),"no contract")?"":"No contract under $150 right now. "
n=a2.h(0,"why")
q.push(A.c(p+A.v(n==null?"":n)+". It keeps checking every minute; the budget is never raised.",a0,a0,a0,a0,a0,a0,C.fQI,a0,a0,a0))}if(r.length!==0){p=A.c("The $150 stepping, in order:",a0,a0,a0,a0,a0,a0,A.l(a0,a0,w?C.cy:B.c,a0,a0,a0,a0,a0,a0,a0,a0,12,a0,a0,B.E,a0,a0,!0,a0,a0,a0,a0,a0,a0,a0,a0),a0,a0,a0)
n=A.a([],o)
for(m=A.cU(r,0,A.dA(18,"count",x.S),A.U(r).c),l=m.$ti,m=new A.bP(m,m.gJ(0),l.k("bP<aj.E>")),l=l.k("aj.E");m.C();){k=m.d
if(k==null)k=l.a(k)
j=J.a2(k)
if(j.h(k,a1)!=null){i=j.h(k,a1)
if(!(typeof i=="number")){i=A.cx(A.v(i==null?"":i))
if(i==null)i=0}i=i<=150}else i=!1
if(i)i=C.cQ
else i=w?C.c8:C.c9
i=i.j(0.12)
h=new A.aP(8,8)
g=j.h(k,"strike")
if(!(typeof g=="number")){g=A.cx(A.v(g==null?"":g))
if(g==null)g=0}g=B.i.a5(g,0)
f=D.aQP(j.h(k,"expiry"))
e=A.ag(", \\d{4}$",!0,!1,!1,!1)
f=A.aL(f,e,"")
if(j.h(k,a1)==null)k="no price"
else{k=j.h(k,a1)
if(!(typeof k=="number")){k=A.cx(A.v(k==null?"":k))
if(k==null)k=0}k=D.ev(k,!0,!1)}j=w?C.cy:B.c
n.push(A.p(a0,A.c("$"+g+" \xb7 "+f+" \xb7 "+k,a0,a0,a0,a0,a0,a0,new A.H(!0,j,a0,a0,a0,a0,10.5,B.P,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0),a0,a0,a0),B.f,a0,a0,new A.o(i,a0,a0,new A.bb(h,h,h,h),a0,a0,B.m),a0,a0,a0,a0,B.eS,a0,a0,a0))}B.d.u(q,A.a([B.M,p,B.at,A.bZ(B.bI,n,B.br,a0,6,6)],o))}return d.yO(a3,A.x(q,B.B,a0,B.e,B.h,0,B.p))},
cJG(d,e){var w,v,u=this,t=null,s=x.g.a(e.h(0,"trades"))
if(s==null)s=B.bU
s=J.cQ(s,x.f)
s=A.cA(s,new D.e7R(),s.$ti.k("M.E"),x.P)
w=A.B(s,A.a3(s).k("M.E"))
s=d.a
v=A.a([A.c("Pretend trades",t,t,t,t,t,t,A.l(t,t,s?C.cy:B.c,t,t,t,t,t,t,t,t,16,t,t,B.E,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),B.ak],x.p)
if(w.length===0)v.push(A.c("No trades yet. This system is picky: it only takes strong setups.",t,t,t,t,t,t,A.l(t,t,s?C.c8:C.c9,t,t,t,t,t,t,t,t,12.5,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),t,t,t))
s=J.aR(u.y?w:A.cU(w,0,A.dA(4,"count",x.S),A.U(w).c))
while(s.C())v.push(u.cJF(d,s.gP(s)))
s=w.length
if(s>4)v.push(A.at(A.bM(!1,A.c(u.y?"Show less":"Show all ("+s+")",t,t,t,t,t,t,t,t,t,t),t,t,!0,t,t,t,new D.e7S(u),t,t),t,t,t))
return u.yO(d,A.x(v,B.B,t,B.e,B.h,0,B.p))},
cJF(a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null,h="entryPrice",g=J.a2(a2),f=J.z(g.h(a2,"decision"),"would buy"),e=D.dR(g.h(a2,"details")),d=x.f.b(e.h(0,"option"))?D.dR(e.h(0,"option")):i,a0=D.cg(e.h(0,"pnl"))
if(f)w=B.cf
else w=a0>=0?C.cQ:C.dn
v=d!=null
if(v){u=A.v(g.h(a2,"asset"))
t=D.ev(D.cg(d.h(0,"strike")),!0,!1)
s=d.h(0,"right")
r=u+" "+t+" "+A.v(s==null?"call":s)}else r=A.v(g.h(a2,"asset"))
if(f)q=v?"expires "+D.aQP(d.h(0,"expiry"))+" \xb7 premium "+D.ev(D.cg(e.h(0,h)),!0,!1)+" x 100":"at "+D.ev(D.cg(e.h(0,h)),!0,!1)
else{v=D.ev(D.cg(e.h(0,h)),!0,!1)
u=D.ev(D.cg(e.h(0,"exitPrice")),!0,!1)
t=e.h(0,"heldMin")==null?"":B.i.a5(D.cg(e.h(0,"heldMin")),0)+" min \xb7 "
s=g.h(a2,"reason")
q=v+" to "+u+" \xb7 "+t+D.ioX(J.k(s==null?"":s))}p=D.dR(e.h(0,"analysis"))
if(f){v=p.h(0,"why")
o=J.k(v==null?"":v)}else{v=e.h(0,"entryWhy")
o=J.k(v==null?"":v)}if(f)n=""
else{v=e.h(0,"result")
if(v==null)v=a0>0?"WIN":"LOSS"
n=J.k(v)}v=o.length===0
u=v?i:new D.e7P(this,a1,r,f,p,n,o)
t=a1.a
s=t?C.oK:C.oF
m=w.j(0.14)
l=A.m(12)
m=A.p(i,A.V(f?B.tN:B.ri,w,i,i,i,18),B.f,i,i,new A.o(m,i,i,l,i,i,B.m),i,36,i,i,i,i,i,36)
l=f?"Bought":"Sold"
l=A.c(l+" "+r,i,i,i,i,i,i,A.l(i,i,t?C.cy:B.c,i,i,i,i,i,i,i,i,13.5,i,i,B.E,i,i,!0,i,i,i,i,i,i,i,i),i,i,i)
k=x.p
l=A.a([l,A.c(q,i,2,B.a2,i,i,i,A.l(i,i,t?C.c8:C.c9,i,i,i,i,i,i,i,i,11.5,i,i,i,i,i,!0,i,i,i,i,i,i,i,i),i,i,i)],k)
if(!v){v=f?"Why this trade: "+o:n+" \xb7 it was bought because: "+o
if(f)j=this.a.c==="options"?B.aC:B.as
else j=n==="WIN"?C.cQ:C.dn
l.push(A.c(v,i,2,B.a2,i,i,i,A.l(i,i,j,i,i,i,i,i,i,i,i,11,i,i,B.P,i,1.3,!0,i,i,i,i,i,i,i,i),i,i,i))}g=g.h(a2,"et_time")
g=J.k(g==null?"":g)
l.push(A.c(g,i,i,i,i,i,i,A.l(i,i,t?C.c8:C.c9,i,i,i,i,i,i,i,i,10.5,i,i,i,i,i,!0,i,i,i,i,i,i,i,i),i,i,i))
g=A.E(A.x(l,B.B,i,B.e,B.h,0,B.p),1)
v=f?"-"+D.ev(D.cg(e.h(0,"amount")),!0,!1):"+"+D.ev(D.cg(e.h(0,"outValue")),!0,!1)
v=A.a([A.c(v,i,i,i,i,i,i,A.l(i,i,t?C.cy:B.c,i,i,i,i,i,i,i,i,13.5,i,i,B.E,i,i,!0,i,i,i,i,i,i,i,i),i,i,i)],k)
if(!f){l=D.ev(a0,!0,!0)
v.push(A.c(l,i,i,i,i,i,i,A.l(i,i,a0>=0?C.cQ:C.dn,i,i,i,i,i,i,i,i,12,i,i,B.E,i,i,!0,i,i,i,i,i,i,i,i),i,i,i))}if(f)v.push(A.c("put in",i,i,i,i,i,i,A.l(i,i,t?C.c8:C.c9,i,i,i,i,i,i,i,i,11,i,i,i,i,i,!0,i,i,i,i,i,i,i,i),i,i,i))
return A.aM(!1,i,!0,A.p(i,A.A(A.a([m,B.ar,g,B.aa,A.x(v,B.dv,i,B.e,B.h,0,B.p)],k),B.l,i,B.e,B.h,0,i,i),B.f,i,i,new A.o(i,i,new A.bE(B.a1,B.a1,new A.ax(s,1,B.r,-1),B.a1),i,i,i,B.m),i,i,i,i,B.x_,i,i,i),i,!0,i,i,i,i,i,i,i,i,i,i,i,u,i,i,i,i,i,i,i)},
cDz(d,e,f){var w,v,u=null,t=x.g.a(f.h(0,"ranked"))
if(t==null)t=B.bU
t=J.cQ(t,x.f)
t=A.cA(t,new D.e7M(),t.$ti.k("M.E"),x.P)
w=A.B(t,A.a3(t).k("M.E"))
v=D.dR(f.h(0,"record"))
t=this.c
t.toString
A.cd(u,u,!0,u,new D.e7N(d,e,f,new D.e7O(),v,w),t,u,!0,!0,x.H)},
bF0(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=m.z,j=m.e
j=k?j:A.cU(j,0,A.dA(4,"count",x.S),A.U(j).c).dk(0)
k=d.a
w=A.c("Activity",l,l,l,l,l,l,A.l(l,l,k?C.cy:B.c,l,l,l,l,l,l,l,l,16,l,l,B.E,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)
v=x.p
w=A.a([A.A(A.a([w,B.aV,A.c("newest first",l,l,l,l,l,l,A.l(l,l,k?C.c8:C.c9,l,l,l,l,l,l,l,l,11,l,l,l,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)],v),B.l,l,B.e,B.h,0,l,l),B.ak],v)
if(m.e.length===0)w.push(A.c("Nothing yet. Buys, sells and passing setups that were skipped show up here.",l,l,l,l,l,l,A.l(l,l,k?C.c8:C.c9,l,l,l,l,l,l,l,l,12.5,l,l,l,l,l,!0,l,l,l,l,l,l,l,l),l,l,l))
for(u=j.length,t=0;t<j.length;j.length===u||(0,A.I)(j),++t){s=j[t]
r=A.V(B.pS,k?C.c8:C.c9,l,l,l,7)
q=J.a2(s)
p=q.h(s,"decision")
p=A.v(p==null?"":p)
o=q.h(s,"asset")==null?"":" \xb7 "+A.v(q.h(s,"asset"))
n=k?C.cy:B.c
p=A.c(p+o,l,l,l,l,l,l,new A.H(!0,n,l,l,l,l,12.5,B.E,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l),l,l,l)
o=q.h(s,"reason")
o=J.k(o==null?"":o)
n=k?C.c8:C.c9
p=A.x(A.a([p,A.c(o,l,l,l,l,l,l,new A.H(!0,n,l,l,l,l,11.5,l,l,l,l,l,1.3,l,l,l,l,l,l,l,l,l,l,l,l,l),l,l,l)],v),B.B,l,B.e,B.h,0,B.p)
q=q.h(s,"et_time")
q=D.hJS(J.k(q==null?"":q))
o=k?C.c8:C.c9
w.push(new A.D(B.jX,new A.c1(B.aK,B.e,B.h,B.B,l,B.p,l,0,A.a([new A.D(G.P3,r,l),B.aa,new A.bu(1,B.b9,p,l),B.bb,A.c(q,l,l,l,l,l,l,new A.H(!0,o,l,l,l,l,10.5,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l),l,l,l)],v),l),l))}if(m.e.length>4)w.push(A.at(A.bM(!1,A.c(m.z?"Show less":"Show all",l,l,l,l,l,l,l,l,l,l),l,l,!0,l,l,l,new D.e7o(m),l,l),l,l,l))
return m.yO(d,A.x(w,B.B,l,B.e,B.h,0,B.p))},
cy9(d,e){var w,v,u,t,s,r,q,p,o,n,m=null,l=x.g.a(e.h(0,"rules"))
if(l==null)l=B.bU
l=J.b8(l,new D.e7D(),x.N)
w=A.B(l,l.$ti.k("aj.E"))
l=this.c
l.toString
l=A.Q(l).aH0(B.L)
v=d.a
u=A.c("The rules it follows",m,m,m,m,m,m,A.l(m,m,v?C.cy:B.c,m,m,m,m,m,m,m,m,15,m,m,B.E,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)
t=x.p
s=A.a([],t)
for(r=w.length,q=0;q<w.length;w.length===r||(0,A.I)(w),++q){p=w[q]
o=this.a.c==="options"?B.aC:B.as
o=A.c("\u2022  ",m,m,m,m,m,m,new A.H(!0,o,m,m,m,m,m,B.u,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m,m,m)
n=v?C.cy:B.c
s.push(new A.D(B.eI,new A.c1(B.aK,B.e,B.h,B.B,m,B.p,m,0,A.a([o,new A.bu(1,B.b9,A.c(p,m,m,m,m,m,m,new A.H(!0,n,m,m,m,m,12.5,m,m,m,m,m,1.35,m,m,m,m,m,m,m,m,m,m,m,m,m),m,m,m),m)],t),m),m))}return this.yO(d,new A.ou(l,K.hfZ(m,s,B.ag,m,m,m,!1,m,m,m,B.ag,u),m))},
b3g(d,e,f){var w=null,v=d.a,u=v?B.c.j(0.92):C.i8,t=A.m(20),s=e==null?w:e.j(0.5)
if(s==null)v=v?B.c:C.ml
else v=s
v=A.K(v,B.r,1)
s=A.a([new A.aa(0,B.H,d.gI2(),B.cz,14)],x.V)
return A.p(w,A.aG(!1,B.a3,!0,w,f,B.f,w,0,w,w,w,w,w,B.i4),B.f,w,w,new A.o(u,w,v,t,s,w,B.m),w,w,w,B.dU,B.bF,w,w,w)},
yO(d,e){return this.b3g(d,null,e)},
a0Q(d,e,f){var w=null,v=f.j(0.12),u=A.m(16),t=A.K(f.j(0.45),B.r,1),s=A.V(B.QG,f,w,w,w,20)
return A.p(w,A.A(A.a([s,B.ar,A.E(A.c(e,w,w,w,w,w,w,A.l(w,w,d.a?C.cy:B.c,w,w,w,w,w,w,w,w,12.5,w,w,w,w,1.35,!0,w,w,w,w,w,w,w,w),w,w,w),1)],x.p),B.l,w,B.e,B.h,0,w,w),B.f,w,w,new A.o(v,w,t,u,w,w,B.m),w,w,w,B.dU,B.bg,w,w,w)},
aEx(d,e){var w=null,v=e.j(0.14),u=A.m(999)
return A.p(w,A.c(d,w,w,w,w,w,w,A.l(w,w,e,w,w,w,w,w,w,w,w,10,w,w,B.u,w,w,!0,w,0.5,w,w,w,w,w,w),w,w,w),B.f,w,w,new A.o(v,w,w,u,w,w,B.m),w,w,w,w,B.eZ,w,w,w)},
a0R(d,e,f){var w=null,v=d.a,u=v?B.c.j(0.92):C.i8,t=A.K(v?B.c:C.ml,B.r,1)
return A.aG(!1,B.a3,!0,w,A.aM(!1,w,!0,A.p(w,A.V(e,v?C.cy:B.c,w,w,w,18),B.f,w,w,new A.o(w,w,t,w,w,w,B.a6),w,40,w,w,w,w,w,40),B.cK,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),B.f,u,0,w,w,B.cK,w,w,B.ai)}}
D.aBh.prototype={
R(){return new D.bf6()}}
D.bf6.prototype={
a_(){this.a3()
this.d=A.d0(B.fv,new D.d9Y(this))},
t(){var w=this.d
if(w!=null)w.a1(0)
this.a2()},
B(d){var w,v,u,t=null,s=this.a.c,r=s==null?t:s.by(new A.W(Date.now(),0,!1))
if(r==null||r.a<0)w="0:00"
else{s=r.a
w=""+B.o.ao(s,6e7)+":"+B.a.b0(B.o.v(B.o.F(B.o.ao(s,1e6),60)),2,"0")}v=this.a.d
s=v.j(0.14)
u=A.m(999)
return A.p(t,A.c("closes in "+w+" at most",t,t,t,t,t,t,A.l(t,t,v,t,t,t,t,t,t,t,t,10,t,t,B.u,t,t,!0,t,0.5,t,t,t,t,t,t),t,t,t),B.f,t,t,new A.o(s,t,t,u,t,t,B.m),t,t,t,t,B.eZ,t,t,t)}}
D.aCA.prototype={
R(){return new D.bhY()}}
D.bhY.prototype={
a_(){this.a3()
this.d=A.d0(B.fv,new D.dil(this))},
t(){var w=this.d
if(w!=null)w.a1(0)
this.a2()},
B(d){var w=null,v=this.a.c*60,u=B.o.F(B.o.ao(new A.W(Date.now(),0,!1).ab().a,1000),v),t=u<15,s=v-u,r=t?"ENTER NOW":"Enter in "+B.o.ao(s,60)+":"+B.a.b0(B.o.v(B.o.F(s,60)),2,"0"),q=t?B.c:B.c.j(0.18),p=A.m(999),o=t?B.fM:B.mx
o=A.V(o,t?B.v:B.c,w,w,w,20)
return A.cV(w,A.A(A.a([o,B.bb,A.c(r,w,w,w,w,w,w,A.l(w,w,t?B.v:B.c,w,w,w,w,w,w,w,I.Jj,22,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),B.l,w,B.e,B.N,0,w,w),w,w,B.aZ,new A.o(q,w,w,p,w,w,B.m),B.ia,w,w,w,w,B.HN,w,w,w)}}
D.cF.prototype={}
D.uv.prototype={}
D.XK.prototype={
R(){var w,v,u,t=null,s=x.N,r=x.z
r=A.J(["done",A.a([],x.s),"lessons",A.S(s,r)],s,r)
s=$.hl6
w=$.az()
v=A.mj(0,t,t)
u=A.a([],x.t)
return new D.aHq(r,new A.au(new A.bd(s,B.b6,B.aP),w),v,u,new A.au(B.ax,w),B.cG,B.Z,t,t)}}
D.a_F.prototype={}
D.aHq.prototype={
gLl(){var w,v=this,u=v.d
if(u===$){v.a.toString
w=A.acA(null,0,3,v)
v.d!==$&&A.bF()
v.d=w
u=w}return u},
gK4(){var w=x.g.a(this.x.h(0,"done"))
if(w==null)w=B.bU
return J.b8(w,new D.eHM(),x.N).fD(0)},
a_(){var w,v,u,t=this
t.a3()
w=t.e=t.a.c
v=w==null
t.y=!v
t.ay=D.eIu(v?null:J.t(w,"fx"))
w=t.a.c
u=D.eIu(w==null?null:J.t(w,"markets"))
if(u.length!==0)t.f=u
t.r=new A.W(Date.now(),0,!1)
t.gLl().aU(0,new D.eIA(t))
$.aM1=$.aM1+1
t.at.aU(0,new D.eIB(t))
if($.DB.length!==0||$.ahd)t.aD0()
if(!t.a.d){t.a0P()
t.Rh()
A.T3().bE(new D.eIC(t),x.H)
t.w=A.d0(B.hb,new D.eID(t))}},
t(){var w,v=this,u=v.w
if(u!=null)u.a1(0)
u=v.as
if(u!=null)u.a1(0)
v.gLl().t()
u=v.cy
w=$.az()
u.V$=w
u.W$=0
u=v.at
u.V$=w
u.W$=0
v.ax.t()
D.hES()
v.bBB()},
a0P(){return this.c7h()},
c7h(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f
var $async$a0P=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:g={}
g.a=null
t=4
w=7
return A.b(A.aB(),$async$a0P)
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
return A.b(A.fP(A.J(["action","paLearnGet"],n,m),!1,!1,!1,!1,B.hb),$async$a0P)
case 8:k=e
if(r.c==null){w=1
break}j=k==null?null:J.t(k,"progress")
i=x.f
if(i.b(j)){k.toString
h=A.a0(i.a(J.t(k,"progress")),n,m)}else h=null
r.l(new D.eI6(g,r,k,h))
if(h==null&&g.a!=null)r.aCR()
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$a0P,v)},
aCR(){var w=this.as
if(w!=null)w.a1(0)
this.as=A.cB(R.CY,new D.eIf(this))},
aed(d){return this.c6o(d)},
c6o(d){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$aed=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=B.d.cw(C.Ei,new D.eHP(u))
u.l(new D.eHQ(u,d))
u.aCR()
t=B.d.cw(C.Ei,new D.eHR(u))
w=!r&&t&&u.c!=null?2:3
break
case 2:s=u.c
s.toString
w=4
return A.b(A.cd(null,null,!0,null,new D.eHS(u),s,null,!0,!0,x.H),$async$aed)
case 4:case 3:return A.h(null,v)}})
return A.i($async$aed,v)},
Rh(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Rh=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(A.fP(A.J(["action","paSignals"],x.N,x.z),!1,!1,!1,!1,B.wY),$async$Rh)
case 3:r=e
if(t.c==null||r==null||!J.z(J.t(r,"ok"),!0)){w=1
break}s=J.a2(r)
t.l(new D.eIe(t,D.eIu(s.h(r,"fx")),D.eIu(s.h(r,"markets")),r))
case 1:return A.h(u,v)}})
return A.i($async$Rh,v)},
gatt(){var w=A.B(this.gyB(),x.P)
B.d.u(w,this.ay)
return w},
gyB(){var w=this.f
if(w==null){w=this.e
w=D.fBQ(D.dR(D.dR(w==null?null:J.t(w,"state")).h(0,"snapshot")))}return w},
gcEA(){var w=this.gyB(),v=A.U(w).k("X<1>"),u=A.B(new A.X(w,new D.eIs(),v),v.k("M.E"))
if(u.length===0)return this.gyB().length===0?null:B.d.gG(this.gyB())
B.d.b_(u,new D.eIt())
return B.d.gG(u)},
c6V(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,a0=" dollars. It sells at +50 or -50 dollars.",a1=e.e,a2=D.dR(a1==null?d:J.t(a1,"state"))
a1=x.f
w=a1.b(a2.h(0,"shadow"))?D.dR(a2.h(0,"shadow")):d
v=e.e
u=D.dR(v==null?d:J.t(v,"today"))
v=e.e
t=D.dR(v==null?d:J.t(v,"record"))
v=e.dy
if(!(v.length!==0)){v=e.e
v=v==null?d:J.t(v,"nowEt")
if(v==null)v="unknown"}v="LIVE DATA from the NGMY paper trading agent (Eastern Time now: "+A.v(v)+"):\n"
if(e.e!=null){s=J.z(a2.h(0,"enabled"),!0)?"running":"stopped"
r=J.z(a2.h(0,"brakePaused"),!0)?", paused by the 25 dollar brake":""
q=D.ev(D.cg(a2.h(0,"totalPnl")),!0,!0)
p=D.ev(D.cg(u.h(0,"day_pnl")),!0,!0)
o=t.h(0,"wins")
o=A.v(o==null?0:o)
n=t.h(0,"losses")
v+="Agent: "+s+r+". Pretend P/L all time "+q+", today "+p+", wins "+o+", losses "+A.v(n==null?0:n)+".\n"}if(e.e==null)a1=v
else if(w!=null){m=D.cg(J.t(B.d.dr(e.gyB(),new D.eHV(w),new D.eHW()),"price"))
l=D.cg(w.h(0,"entryPrice"))
k=a1.b(w.h(0,"option"))?D.dR(w.h(0,"option")):d
a1=e.e
j=D.dR(D.dR(D.dR(a1==null?d:J.t(a1,"state")).h(0,"snapshot")).h(0,"held"))
i=j.h(0,"pnl")==null?d:D.cg(j.h(0,"pnl"))
h=i==null?"unknown":B.i.a5(i,2)
a1=v+((k!=null?"Open pretend trade: 1 SPY call option, strike "+B.i.a5(D.cg(k.h(0,"strike")),0)+", expires "+A.v(k.h(0,"expiry"))+", premium paid "+B.i.a5(l,2)+" a share ("+B.i.a5(D.cg(k.h(0,"cost")),2)+" dollars). Win or loss now: "+h+a0:"Open pretend trade: "+A.v(w.h(0,"symbol"))+", bought at "+B.i.a5(l,2)+", now "+B.i.a5(m,2)+". Win or loss now: "+h+a0)+"\n")}else a1=v+"No open pretend trade.\n"
g=new D.eHX()
a1+="Agent markets (5-minute candles; fast line = 9-candle average, slow = 21-candle average; strength 0 bearish to 100 bullish):\n"
for(v=e.gyB(),s=v.length,f=0;f<v.length;v.length===s||(0,A.I)(v),++f)a1+=A.v(g.$1(v[f]))+"\n"
v=e.ay
s=v.length
if(s!==0){a1+="Forex pairs (real interbank prices, 1-minute candles, signals only; the agent does not trade them; OTC prices at brokers differ):\n"
for(f=0;f<v.length;v.length===s||(0,A.I)(v),++f)a1+=A.v(g.$1(v[f]))+"\n"}return a1.charCodeAt(0)==0?a1:a1},
K3(d){return this.bHx(d)},
bHx(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j
var $async$K3=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:j=B.a.i(d)
if(j.length===0||$.ahd){w=1
break}t.at.bN(0,B.ck)
t.l(new D.eHI(t,j))
t.aD0()
s=$.DB.length
if(s>1){s=B.d.du($.DB,Math.max(0,s-9),s-1)
r=new A.O(s,new D.eHJ(),A.U(s).k("O<1,n>")).aL(0,"\n")}else r=""
s=t.e
s=s==null?null:J.t(s,"rules")
x.g.a(s)
if(s==null)s=t.dx
q=x.N
p=J.b8(s,new D.eHK(),q).aL(0,"\n")
s=t.c6V()
o=r.length===0?"":"\nCONVERSATION SO FAR:\n"+r+"\n"
n=$.foo
w=t.a.d?3:5
break
case 3:m="Preview mode: the tutor answers here using the live readings."
w=4
break
case 5:w=6
return A.b(A.fP(A.J(["action","chat","prompt",'You are the NGMY Signal Grid trading tutor. You teach a complete beginner how trading works, using the live market data and the rules of the NGMY paper trading agent below.\nHow to answer:\n- Plain, friendly, simple English. Short sentences. No jargon without explaining it. Usually under 170 words.\n- When the question is about a market or "right now", use the LIVE DATA and quote the real numbers (price, trend, strength, RSI, last hour), then explain what they mean and what the agent\'s rules say.\n- Say clearly whether a market looks bullish, bearish or sideways and why, and what would need to happen for a buy or sell signal under the agent\'s rules.\n- This is practice with pretend (paper) money. You may explain what the rules signal, but never promise profit, never say a price will surely go up or down, and never tell the student to trade real or borrowed money. Remind them briefly when it fits that signals can fail and the stop loss keeps losses small.\n- No markdown headings or tables. You may use short lines starting with "- ".\n\nAGENT RULES:\n'+p+"\n\n"+s+"\n"+o+"\nStudent: "+j+"\nTutor:"],q,x.z),!1,!1,!1,!1,B.nW),$async$K3)
case 6:l=f
s=l==null
if(s)k=null
else{q=J.t(l,"text")
q=q==null?null:B.a.i(J.k(q))
k=q}if(k==null)k=""
if(k.length!==0){s=A.aL(k,"**","")
q=A.ag("^#+\\s*",!0,!1,!0,!1)
m=A.aL(s,q,"")}else{s=s?null:J.t(l,"error")
m=J.k(s==null?"The tutor could not answer just now. Please try again.":s)}case 4:if(n!==$.foo){w=1
break}$.DB.push(new D.a_F(!1,m))
$.ahd=!1
if(t.c==null){w=1
break}t.l(new D.eHL())
t.aD0()
case 1:return A.h(u,v)}})
return A.i($async$K3,v)},
aD0(){$.aU.U$.push(new D.eIg(this))},
aR4(d){this.gLl().C6(2)
this.K3(d)},
B(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=A.Q(a0).ax.a===B.dg,f=new D.Ro(g),e=g?C.t3:C.t1,d=g?C.t3:C.t1
d=A.a([d,g?C.O0:C.NU],x.O)
w=i.a0R(f,B.eB,new D.eIw(a0))
v=A.c("Trading Academy",h,h,h,h,h,h,A.l(h,h,g?C.cy:B.c,h,h,h,h,h,h,h,h,17,h,h,B.E,h,h,!0,h,h,h,h,h,h,h,h),h,h,h)
u=x.p
v=A.A(A.a([w,B.ar,A.E(A.x(A.a([v,A.c("Lessons, live signals and a tutor",h,h,h,h,h,h,A.l(h,h,g?C.c8:C.c9,h,h,h,h,h,h,h,h,11.5,h,h,h,h,h,!0,h,h,h,h,h,h,h,h),h,h,h)],u),B.B,h,B.e,B.h,0,B.p),1),A.p(h,C.fod,B.f,h,h,new A.o(C.cQ.j(0.14),h,h,A.m(999),h,h,B.m),h,h,h,h,B.fZ,h,h,h)],u),B.l,h,B.e,B.h,0,h,h)
w=g?C.O7:C.NY
t=A.m(999)
s=A.a([],u)
for(r=[C.fej,C.fcx,C.fdf],q=r.length,p=0;p<q;++p){o={}
n=r[p]
o.a=null
o.a=n.a
m=i.gLl().d===o.a
if(m)l=g?C.mZ:B.c
else l=B.L
k=new A.aP(999,999)
if(m)j=g?B.c:C.mZ
else j=g?C.c8:C.c9
j=A.V(n.c,j,h,h,h,15)
if(m)m=g?B.c:C.mZ
else m=g?C.c8:C.c9
s.push(new A.bu(1,B.b9,A.aA(h,A.cV(h,new A.c1(B.aK,B.ba,B.h,B.l,h,B.p,h,0,A.a([j,B.dZ,new A.d1(1,B.cg,A.c(n.b,h,h,B.a2,h,h,h,new A.H(!0,m,h,h,h,h,12.5,B.E,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h),h,h,h),h)],u),h),h,h,B.aZ,new A.o(l,h,h,new A.bb(k,k,k,k),h,h,B.m),B.a3,h,h,h,h,B.x_,h,h,h),B.y,!1,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,new D.eIx(o,i),h,h,h,h,h,h,!1,B.a4),h))}g=A.p(h,A.A(s,B.l,h,B.e,B.h,0,h,h),B.f,h,h,new A.o(w,h,h,t,h,h,B.m),h,h,h,h,B.eA,h,h,h)
w=i.gLl()
return A.c5(h,e,A.p(h,A.bo(!0,A.x(A.a([new A.D(C.bGf,v,h),new A.D(B.ao9,g,h),A.E(A.baD(A.a([i.c6s(f),i.cDF(f),i.bHD(f)],u),w,h),1)],u),B.l,h,B.e,B.h,0,B.p),!0,!1,B.ag,!0,!0),B.f,h,h,new A.o(h,h,h,h,h,new A.a8(B.aX,B.b1,B.x,d,h,h),B.m),h,h,h,h,h,h,h,h),h,!1,!1,h,h)},
a0R(d,e,f){var w=null,v=d.a,u=v?B.c.j(0.92):C.i8,t=A.K(v?B.c:C.ml,B.r,1)
return A.aG(!1,B.a3,!0,w,A.aM(!1,w,!0,A.p(w,A.V(e,v?C.cy:B.c,w,w,w,18),B.f,w,w,new A.o(w,w,t,w,w,w,B.a6),w,40,w,w,w,w,w,40),B.cK,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),B.f,u,0,w,w,B.cK,w,w,B.ai)},
c6s(d){var w,v=null,u=new A.X(C.Ei,new D.eHU(this),x.E).gJ(0),t=A.m(24),s=x.p
s=A.a([A.p(v,A.x(A.a([C.heS,B.at,C.fWs,B.aA,A.bx(A.m(9),A.jE(B.c.j(0.18),v,v,8,v,u/10,B.afe),B.aq),B.ak,A.c(""+u+" of 10 lessons done",v,v,v,v,v,v,B.acF,v,v,v)],s),B.B,v,B.e,B.h,0,B.p),B.f,v,v,new A.o(v,v,v,t,v,C.cee,B.m),v,v,v,v,B.fa,v,v,v),B.aA],s)
for(w=0;w<10;++w)s.push(this.c6q(d,w))
s.push(B.ak)
s.push(A.c("Practice with pretend money. Signals and lessons are for learning; markets can always surprise.",v,v,v,v,v,v,A.l(v,v,d.a?C.c8:C.c9,v,v,v,v,v,v,v,v,11,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),B.K,v,v))
return A.co(s,v,v,C.aod,v,v,B.ah,!1)},
c6q(d,e){var w,v,u,t=null,s=C.Ei[e],r=this.gK4().q(0,s.a),q=d.a,p=q?B.c.j(0.92):C.i8,o=A.m(20),n=A.K(q?B.c:C.ml,B.r,1),m=A.a([new A.aa(0,B.H,d.gI2(),B.hR,14)],x.V),l=A.m(15)
l=A.p(t,A.V(s.e,B.c,t,t,t,t),B.f,t,t,new A.o(s.f,t,t,l,t,t,B.m),t,46,t,t,t,t,t,46)
w=A.c("Lesson "+(e+1)+" \xb7 "+s.d+" min",t,t,t,t,t,t,A.l(t,t,q?C.c8:C.c9,t,t,t,t,t,t,t,t,11,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)
v=A.c(s.b,t,t,t,t,t,t,A.l(t,t,q?C.cy:B.c,t,t,t,t,t,t,t,t,15,t,t,B.E,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)
u=x.p
v=A.E(A.x(A.a([w,v,A.c(s.c,t,t,t,t,t,t,A.l(t,t,q?C.c8:C.c9,t,t,t,t,t,t,t,t,12,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],u),B.B,t,B.e,B.h,0,B.p),1)
w=r?B.ea:B.eM
if(r)q=C.cQ
else q=q?C.c8:C.c9
return A.aA(t,A.p(t,A.A(A.a([l,B.bc,v,A.V(w,q,t,t,t,t)],u),B.l,t,B.e,B.h,0,t,t),B.f,t,t,new A.o(p,t,n,o,m,t,B.m),t,t,t,B.d6,B.bF,t,t,t),B.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new D.eHT(this,s),t,t,t,t,t,t,!1,B.a4)},
clL(d){var w=this.c
w.toString
A.a7(w,!1).cb(A.eb(new D.eIc(this,d),!1,null,x.H))},
c6Z(c1,c2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6=this,b7=null,b8="reading",b9="rsi",c0=b6.gcEA()
if(c0==null)return A.c("Live example appears once the markets have loaded.",b7,b7,b7,b7,b7,b7,A.l(b7,b7,c1.a?C.c8:C.c9,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,!0,b7,b7,b7,b7,b7,b7,b7,b7),b7,b7,b7)
w=J.a2(c0)
v=J.k(w.h(c0,"asset"))
u=D.bF6(c0)
t=D.dR(w.h(c0,b8))
s=D.cg(w.h(c0,"price"))
r=new D.eHY(u,c1,s)
q=new D.eI5(c1)
switch(c2){case"basics":p=u.length!==0?D.cg(J.t(B.d.gG(u),"c")):s
o=p===0?100:100*s/p
w=q.$1("Right now "+v+" is "+D.ev(s,!0,!1)+". About 4 hours ago it was "+D.ev(p,!0,!1)+".")
n=D.ev(o,!0,!1)
m=o>=100?"a win of":"a loss of"
return A.x(A.a([w,B.M,q.$1("If you had put $100 into "+v+" then, it would be worth "+n+" now: "+m+" "+D.ev(Math.abs(o-100),!0,!1)+". That difference is your profit or loss.")],x.p),B.B,b7,B.e,B.h,0,B.p)
case"candles":l=u.length!==0?B.d.gal(u):A.S(x.N,x.z)
w=J.a2(l)
n=D.cg(w.h(l,"c"))
m=D.cg(w.h(l,"o"))
k=r.$2$last$lines(24,!1)
j=D.ev(D.cg(w.h(l,"o")),!0,!1)
i=D.ev(D.cg(w.h(l,"c")),!0,!1)
n=n>=m?"GREEN: buyers won those 5 minutes":"YELLOW: sellers won those 5 minutes"
return A.x(A.a([k,B.M,q.$1("The last finished "+v+" candle opened at "+j+" and closed at "+i+", so it is "+n+". Its high was "+D.ev(D.cg(w.h(l,"h")),!0,!1)+" and its low "+D.ev(D.cg(w.h(l,"l")),!0,!1)+".")],x.p),B.B,b7,B.e,B.h,0,B.p)
case"trend":w=x.N
h=A.S(w,x.S)
for(n=b6.gyB(),m=n.length,k=x.z,j=x.f,g=0;g<n.length;n.length===m||(0,A.I)(n),++g){i=J.t(n[g],b8)
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
case"ma":e=D.cg(w.h(c0,"fast"))
d=D.cg(w.h(c0,"slow"))
w=r.$0()
n=D.ev(e,!0,!1)
m=D.ev(d,!0,!1)
k=e>=d
j=k?"ABOVE":"BELOW"
k=k?"UP":"DOWN"
return A.x(A.a([w,B.M,q.$1("On "+v+" the pink fast line is at "+n+" and the purple slow line at "+m+". The fast line is "+j+" the slow line, so the short-term trend is "+k+".")],x.p),B.B,b7,B.e,B.h,0,B.p)
case"cross":w=b6.gyB()
n=A.U(w)
m=n.k("cN<1,@>")
a0=A.B(new A.cN(new A.X(w,new D.eHZ(),n.k("X<1>")),new D.eI_(),m),m.k("M.E"))
w=b6.gyB()
n=A.U(w)
m=n.k("cN<1,@>")
a1=A.B(new A.cN(new A.X(w,new D.eI0(),n.k("X<1>")),new D.eI1(),m),m.k("M.E"))
w=r.$0()
if(a0.length!==0)n="Fresh BUY crosses right now: "+B.d.aL(a0,", ")+". On its next automatic check the agent would buy if it holds nothing and it is the market traded today."
else n="No fresh buy cross in any open market right now. "+(a1.length!==0?"Fresh sell crosses: "+B.d.aL(a1,", ")+". ":"")+"The agent simply waits; no signal means no trade."
return A.x(A.a([w,B.M,q.$1(n)],x.p),B.B,b7,B.e,B.h,0,B.p)
case"rsi":w=b6.gyB()
n=A.U(w).k("X<1>")
a2=A.B(new A.X(w,new D.eI2(),n),n.k("M.E"))
w=x.p
n=A.a([],w)
for(m=a2.length,k=c1.a,j=x.N,i=x.z,a3=x.f,a4=x.c,g=0;g<a2.length;a2.length===m||(0,A.I)(a2),++g){a5=a2[g]
a6=J.a2(a5)
a7=J.k(a6.h(a5,"asset"))
a8=k?C.cy:B.c
a7=A.c(a7,b7,b7,b7,b7,b7,b7,new A.H(!0,a8,b7,b7,b7,b7,12,B.E,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7),b7,b7,b7)
a8=new A.aP(9,9)
a9=a6.h(a5,b8)
a9=(a3.b(a9)?A.a0(a9,j,i):A.S(j,i)).h(0,b9)
if(!(typeof a9=="number")){a9=A.cx(A.v(a9==null?"":a9))
if(a9==null)a9=0}b0=k?C.O7:C.NY
b1=a6.h(a5,b8)
b1=(a3.b(b1)?A.a0(b1,j,i):A.S(j,i)).h(0,b9)
if(!(typeof b1=="number")){b1=A.cx(A.v(b1==null?"":b1))
if(b1==null)b1=0}if(b1>=70)b1=C.dn
else{b1=a6.h(a5,b8)
b1=(a3.b(b1)?A.a0(b1,j,i):A.S(j,i)).h(0,b9)
if(!(typeof b1=="number")){b1=A.cx(A.v(b1==null?"":b1))
if(b1==null)b1=0}b1=b1<=30?B.cF:C.cQ}b1=A.jE(b0,b7,b7,8,b7,a9/100,new A.kT(b1,a4))
a6=a6.h(a5,b8)
a6=(a3.b(a6)?A.a0(a6,j,i):A.S(j,i)).h(0,b9)
if(!(typeof a6=="number")){a6=A.cx(A.v(a6==null?"":a6))
if(a6==null)a6=0}a6=B.i.a5(a6,0)
a9=k?C.cy:B.c
n.push(new A.D(B.cB,new A.c1(B.aK,B.e,B.h,B.l,b7,B.p,b7,0,A.a([new A.a5(70,b7,a7,b7),new A.bu(1,B.b9,new A.ni(new A.bb(a8,a8,a8,a8),B.aq,b1,b7),b7),B.aa,new A.a5(26,b7,A.c(a6,b7,b7,b7,b7,b7,b7,new A.H(!0,a9,b7,b7,b7,b7,12,B.E,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7),b7,b7,b7),b7)],w),b7),b7))}n.push(q.$1("Red bars are above 70 (stretched), blue below 30 (oversold), green in between (healthy)."))
return A.x(n,B.B,b7,B.e,B.h,0,B.p)
case"risk":return A.x(A.a([q.$1("Every agent trade is about $100 (of a stock on weekdays, of a coin on weekends). "+v+" is "+D.ev(s,!0,!1)+" right now."),B.ak,q.$1("- Take profit: it sells when the trade is up $50"),q.$1("- Stop loss: it sells when the trade is down $50"),B.ak,q.$1("Win 5 and lose 5 of 10 trades: 5 x 50 - 5 x 50 = $0.00. That is break even. Win 6 of 10 and you are up $100.")],x.p),B.B,b7,B.e,B.h,0,B.p)
case"brakes":w=b6.e
if(w==null)return q.$1('Try it yourself: before your next practice day, write down "I stop after losing $50 today". If three trades in a row lose, close the app and come back tomorrow. That is exactly what the agent does.')
b2=D.dR(J.t(w,"state"))
w=b6.e
w=D.ev(D.cg(D.dR(w==null?b7:J.t(w,"today")).h(0,"day_pnl")),!0,!0)
n=D.ev(D.cg(b2.h(0,"totalPnl")),!0,!0)
m=J.z(b2.h(0,"brakePaused"),!0)?"The brake is ON right now.":"Both brakes are off, it can keep trading."
return q.$1("Today the agent is at "+w+" (the daily stop is -$50) and "+n+" all time (the brake is -$100)."+m)
case"hours":if(b6.f!=null)b3=b6.fr
else{w=b6.e
b3=J.z(D.dR(w==null?b7:J.t(w,"market")).h(0,"stockOpen"),!0)}b4=B.d.aR(b6.ay,new D.eI3())
w=b3?"OPEN":"CLOSED"
n=b4?"OPEN":"CLOSED"
return q.$1("Right now the US stock market is "+w+", the forex market is "+n+", and crypto is open, as always.")
case"practice":w=b6.e
if(w==null){w=b6.gatt()
return q.$1("Right now "+new A.X(w,new D.eI4(),A.U(w).k("X<1>")).gJ(0)+" of "+b6.gatt().length+" markets have signals that worked at least half the time lately. That is why a journal and many trades matter: some markets suit a method, others do not.")}b5=D.dR(J.t(w,"record"))
w=b5.h(0,"trades")
w=A.v(w==null?0:w)
n=b5.h(0,"wins")
n=A.v(n==null?0:n)
m=b5.h(0,"losses")
return q.$1("The agent journal so far: "+w+" finished pretend trades, "+n+" wins and "+A.v(m==null?0:m)+" losses. Keep watching until there are at least 20 before judging it.")}return B.bK},
cDF(a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null,d=B.a.i(f.ch),a0=f.gatt(),a1=A.U(a0).k("X<1>"),a2=A.B(new A.X(a0,new D.eIl(f,d.toLowerCase()),a1),a1.k("M.E"))
B.d.b_(a2,new D.eIm())
w=f.db
v=D.dR(w.h(0,"record"))
if(f.r==null)u=0
else{d=Date.now()
t=f.r
t.toString
u=B.o.ao(new A.W(d,0,!1).by(t).a,1e6)}if(u<20)s="just now"
else s=u<60?""+u+" s ago":""+B.o.ao(u,60)+" min ago"
d=x.p
t=A.a([],d)
for(r=a3.a,q=0;q<4;++q){p=C.d6h[q]
if(f.cx===p)o=r?C.mZ:B.c
else o=r?B.c.j(0.92):C.i8
n=new A.aP(999,999)
m=new A.ax(r?C.oK:C.oF,1,B.r,-1)
l=p==="All"?"All "+a0.length:p+" "+new A.X(a0,new D.eIn(p),a1).gJ(0)
if(f.cx===p)k=r?B.c:C.mZ
else k=r?C.cy:B.c
B.d.u(t,A.a([A.aA(e,A.p(e,A.c(l,e,e,e,e,e,e,new A.H(!0,k,e,e,e,e,12,B.E,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e),e,e,e),B.f,e,e,new A.o(o,e,new A.bE(m,m,m,m),new A.bb(n,n,n,n),e,e,B.m),e,e,e,e,C.bGp,e,e,e),B.y,!1,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,new D.eIo(f,p),e,e,e,e,e,e,!1,B.a4),B.bb],d))}a1=A.E(A.ca(A.A(t,B.l,e,B.e,B.h,0,e,e),B.t,e,B.y,e,e,e,e,e,B.aK),1)
t=f.CW?B.cC:B.eN
t=A.a([A.A(A.a([a1,B.bb,f.a0R(a3,t,new D.eIp(f))],d),B.l,e,B.e,B.h,0,e,e)],d)
if(f.CW){a1=A.l(e,e,r?C.cy:B.c,e,e,e,e,e,e,e,e,e,e,e,e,e,e,!0,e,e,e,e,e,e,e,e)
o=A.l(e,e,r?C.c8:C.c9,e,e,e,e,e,e,e,e,13,e,e,e,e,e,!0,e,e,e,e,e,e,e,e)
n=A.V(B.eN,r?C.c8:C.c9,e,e,e,e)
l=r?B.c.j(0.92):C.i8
k=A.m(999)
j=r?C.oK:C.oF
i=A.m(999)
h=r?C.oK:C.oF
B.d.u(t,A.a([B.R,A.aN(e,B.Z,!0,e,!0,B.t,e,A.aO(),f.cy,e,e,e,e,e,2,A.bC(e,new A.b6(4,k,new A.ax(j,1,B.r,-1)),e,B.f9,e,e,e,e,!0,new A.b6(4,i,new A.ax(h,1,B.r,-1)),e,e,e,e,e,l,!0,e,e,e,e,e,e,e,e,e,e,e,e,e,o,"Search a market, for example EUR/USD, GBP or Bitcoin",e,e,e,e,e,e,e,e,e,!0,!0,!1,e,n,e,e,e,e,e,e,e,e,e,e,e,e),B.y,!0,e,!0,e,!1,e,B.al,e,e,e,e,e,e,e,e,e,1,e,e,!1,"\u2022",e,new D.eIq(f),e,e,e,!1,e,e,!1,e,!0,e,B.ae,e,e,e,e,e,e,e,e,e,e,e,a1,!0,B.a7,e,B.ao,e,e,e,e)],d))}t.push(B.af)
t.push(f.bGh(a3))
a1=r?B.c.j(0.92):C.i8
o=A.m(18)
n=A.K(r?B.c:C.ml,B.r,1)
l=B.i.M(D.cg(v.h(0,"wins")))
k=B.i.M(D.cg(v.h(0,"losses")))
l=A.E(A.c("Last 20 signals: "+l+" wins / "+k+" losses",e,e,e,e,e,e,A.l(e,e,r?C.cy:B.c,e,e,e,e,e,e,e,e,14.5,e,e,B.u,e,e,!0,e,e,e,e,e,e,e,e),e,e,e),1)
k=B.i.M(D.cg(w.h(0,"today")))
j=w.h(0,"maxPerDay")
l=A.A(A.a([l,f.agI(""+k+" of "+B.i.M(D.cg(j==null?5:j))+" today",B.b_)],d),B.l,e,B.e,B.h,0,e,e)
l=A.a([l,B.at,A.c("The default answer is WAIT. A STRONG signal needs all 5 confirmations at once, is checked every 30 minutes, at most 5 a day, and is graded WIN or LOSS 30 minutes later. A day with zero signals is a correct day.",e,e,e,e,e,e,A.l(e,e,r?C.c8:C.c9,e,e,e,e,e,e,e,e,11.5,e,e,e,e,1.35,!0,e,e,e,e,e,e,e,e),e,e,e)],d)
if(J.z(w.h(0,"paused"),!0)){k=C.dn.j(0.12)
j=A.m(12)
i=w.h(0,"pauseReason")
i=A.v(i==null?"Record too weak \u2014 signals paused until the pattern improves.":i)
h=w.h(0,"liftStreak")
B.d.u(l,A.a([B.M,A.p(e,A.c(i+" WAIT-only: it keeps grading would-be signals on paper and lifts after "+B.i.M(D.cg(h==null?10:h))+" straight paper wins (now "+B.i.M(D.cg(w.h(0,"paperStreak")))+").",e,e,e,e,e,e,C.fJI,e,e,e),B.f,e,e,new A.o(k,e,e,j,e,e,B.m),e,e,e,e,B.bQ,e,e,1/0)],d))}if(J.z(w.h(0,"setupNeeded"),!0))B.d.u(l,A.a([B.ak,A.c("The signal history is not set up yet (run the signals SQL in Supabase).",e,e,e,e,e,e,A.l(e,e,E.j_,e,e,e,e,e,e,e,e,11.5,e,e,e,e,e,!0,e,e,e,e,e,e,e,e),e,e,e)],d))
l.push(B.M)
k=w.h(0,"disclaimer")
k=A.v(k==null?"Signals are opinions from price patterns, not guarantees. Even strong signals lose.":k)
l.push(A.c(k,e,e,e,e,e,e,A.l(e,e,r?C.cy:B.c,e,e,e,e,e,e,e,e,12,e,e,B.E,e,1.35,!0,e,e,e,e,e,e,e,e),e,e,e))
t.push(A.p(e,A.x(l,B.B,e,B.e,B.h,0,B.p),B.f,e,e,new A.o(a1,e,n,o,e,e,B.m),e,e,e,e,B.bg,e,e,e))
t.push(B.M)
t.push(A.A(A.a([C.c_V,B.dZ,new A.d1(1,B.cg,A.c("Live confirmations \xb7 updated "+s+" \xb7 signals are only given at the 30-minute checks",e,e,e,e,e,e,A.l(e,e,r?C.c8:C.c9,e,e,e,e,e,e,e,e,11,e,e,e,e,e,!0,e,e,e,e,e,e,e,e),B.K,e,e),e)],d),B.l,e,B.ba,B.h,0,e,e))
a1=f.cx
if(a1==="All"||a1==="Forex"){a1=E.j_.j(0.12)
o=A.m(16)
n=A.K(E.j_.j(0.45),B.r,1)
B.d.u(t,A.a([B.R,A.p(e,A.c("Forex uses real market prices. OTC pairs at a broker are priced by that broker (always on weekends) and can move differently. These signals read 15-minute and 1-hour trends: they are built for a 15\u201330 minute expiry and cannot judge 1-minute noise. Do NOT use them for 1\u20135 minute trades.",e,e,e,e,e,e,A.l(e,e,r?C.cy:B.c,e,e,e,e,e,e,e,e,11.8,e,e,e,e,1.35,!0,e,e,e,e,e,e,e,e),e,e,e),B.f,e,e,new A.o(a1,e,n,o,e,e,B.m),e,e,e,e,B.bg,e,e,e)],d))}t.push(B.af)
if(a0.length===0)t.push(A.c("Loading the markets...",e,e,e,e,e,e,A.l(e,e,r?C.c8:C.c9,e,e,e,e,e,e,e,e,e,e,e,e,e,e,!0,e,e,e,e,e,e,e,e),e,e,e))
if(a0.length!==0&&a2.length===0){d=f.ch
t.push(A.at(A.c('No market matches "'+d+'".',e,e,e,e,e,e,A.l(e,e,r?C.c8:C.c9,e,e,e,e,e,e,e,e,e,e,e,e,e,e,!0,e,e,e,e,e,e,e,e),e,e,e),e,e,e))}for(d=a2.length,q=0;q<a2.length;a2.length===d||(0,A.I)(a2),++q){g=a2[q]
t.push(D.hJp(a3,g,!1,new D.eIr(f,g)))}t.push(f.cDE(a3))
t.push(A.c("Signals are opinions from price patterns, not guarantees. Even strong signals lose. Signals only: nothing is ever traded here.",e,e,e,e,e,e,A.l(e,e,r?C.c8:C.c9,e,e,e,e,e,e,e,e,11,e,e,e,e,e,!0,e,e,e,e,e,e,e,e),B.K,e,e))
return A.Kk(A.co(t,e,e,C.aod,e,e,B.ah,!1),e,f.gcgp())},
agI(d,e){var w=null,v=e.j(0.14),u=A.m(999)
return A.p(w,A.c(d,w,w,w,w,w,w,A.l(w,w,e,w,w,w,w,w,w,w,w,10.5,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.f,w,w,new A.o(v,w,w,u,w,w,B.m),w,w,w,w,B.eZ,w,w,w)},
cDE(a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e="direction",d="graded",a0="exit_price",a1="move_pct",a2=x.g.a(this.db.h(0,"history"))
if(a2==null)a2=B.bU
a2=J.cQ(a2,x.f)
a2=A.cA(a2,new D.eIh(),a2.$ti.k("M.E"),x.P)
w=A.B(a2,A.a3(a2).k("M.E"))
a2=a3.a
v=a2?B.c.j(0.92):C.i8
u=A.m(20)
t=A.K(a2?B.c:C.ml,B.r,1)
s=A.c("Signal history",f,f,f,f,f,f,A.l(f,f,a2?C.cy:B.c,f,f,f,f,f,f,f,f,15,f,f,B.E,f,f,!0,f,f,f,f,f,f,f,f),f,f,f)
r=x.p
s=A.a([s,B.at,A.c("Every STRONG signal, graded at its 30-minute expiry: did the price finish its way? The record is the record.",f,f,f,f,f,f,A.l(f,f,a2?C.c8:C.c9,f,f,f,f,f,f,f,f,11.5,f,f,f,f,1.3,!0,f,f,f,f,f,f,f,f),f,f,f),B.M],r)
if(w.length===0)s.push(A.c("No STRONG signals yet. Zero signals is a correct outcome when the confirmations do not all agree.",f,f,f,f,f,f,A.l(f,f,a2?C.c8:C.c9,f,f,f,f,f,f,f,f,12.5,f,f,f,f,f,!0,f,f,f,f,f,f,f,f),f,f,f))
for(q=w.length,p=0;p<w.length;w.length===q||(0,A.I)(w),++p){o=w[p]
n=a2?C.oK:C.oF
m=J.a2(o)
l=(J.z(m.h(o,e),"BUY")?C.cQ:C.dn).j(0.14)
k=new A.aP(8,8)
j=A.v(m.h(o,e))
i=J.z(m.h(o,e),"BUY")?C.cQ:C.dn
l=A.p(B.z,A.c(j,f,f,f,f,f,f,new A.H(!0,i,f,f,f,f,11,B.u,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f),f,f,f),B.f,f,f,new A.o(l,f,f,new A.bb(k,k,k,k),f,f,B.m),f,f,f,f,B.vb,f,f,46)
k=A.v(m.h(o,"market"))
j=m.h(o,"price")
if(!(typeof j=="number")){j=A.cx(A.v(j==null?"":j))
if(j==null)j=0}i=m.h(o,"price")
if(!(typeof i=="number")){i=A.cx(A.v(i==null?"":i))
if(i==null)i=0}j=B.i.a5(j,i<10?4:2)
i=a2?C.cy:B.c
k=A.c(k+" at "+j,f,f,f,f,f,f,new A.H(!0,i,f,f,f,f,13,B.E,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f),f,f,f)
j=m.h(o,"et_time")
j=A.v(j==null?"":j)
if(J.z(m.h(o,d),!0)){i=m.h(o,a0)
if(!(typeof i=="number")){i=A.cx(A.v(i==null?"":i))
if(i==null)i=0}h=m.h(o,a0)
if(!(typeof h=="number")){h=A.cx(A.v(h==null?"":h))
if(h==null)h=0}i=B.i.a5(i,h<10?4:2)
h=m.h(o,a1)
if(!(typeof h=="number")){h=A.cx(A.v(h==null?"":h))
if(h==null)h=0}h=h>=0?"+":""
g=m.h(o,a1)
if(!(typeof g=="number")){g=A.cx(A.v(g==null?"":g))
if(g==null)g=0}g=" \xb7 then "+i+" ("+h+B.i.a5(g,2)+"%)"
i=g}else i=""
h=a2?C.c8:C.c9
k=A.x(A.a([k,A.c(j+i,f,f,f,f,f,f,new A.H(!0,h,f,f,f,f,11,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f),f,f,f)],r),B.B,f,B.e,B.h,0,B.p)
j=J.z(m.h(o,d),!0)?A.v(m.h(o,"result")):"PENDING"
if(!J.z(m.h(o,d),!0))m=B.b_
else m=J.z(m.h(o,"result"),"WIN")?C.cQ:C.dn
i=m.j(0.14)
h=new A.aP(999,999)
s.push(A.p(f,new A.c1(B.aK,B.e,B.h,B.l,f,B.p,f,0,A.a([l,B.ar,new A.bu(1,B.b9,k,f),A.p(f,A.c(j,f,f,f,f,f,f,new A.H(!0,m,f,f,f,f,10.5,B.u,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f),f,f,f),B.f,f,f,new A.o(i,f,f,new A.bb(h,h,h,h),f,f,B.m),f,f,f,f,B.eZ,f,f,f)],r),f),B.f,f,f,new A.o(f,f,new A.bE(B.a1,B.a1,new A.ax(n,1,B.r,-1),B.a1),f,f,f,B.m),f,f,f,f,B.hy,f,f,f))}return A.p(f,A.x(s,B.B,f,B.e,B.h,0,B.p),B.f,f,f,new A.o(v,f,t,u,f,f,B.m),f,f,f,C.bF2,B.bF,f,f,f)},
bGh(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=new A.X(C.Ei,new D.eHE(h),x.E).gJ(0),e=h.z||h.y
if(!e)w=new A.b7([B.jF,B.b_,"Signal alerts unlock when you finish all 10 lessons ("+f+" of 10 done). You will be told the market and STRONG BUY or SELL (only when all 5 confirmations agree), built for a 15\u201330 minute expiry.","Go to lessons"])
else w=!h.Q?C.fjT:C.fjc
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
k=A.a([k,B.ar,A.E(A.c(s,g,g,g,g,g,g,A.l(g,g,d.a?C.cy:B.c,g,g,g,g,g,g,g,g,12,g,g,g,g,1.35,!0,g,g,g,g,g,g,g,g),g,g,g),1)],j)
if(r!=null){i=A.bp(t,g,g,g,g,g,B.f3,g,g,g,g,g)
B.d.u(k,A.a([B.aa,A.bI(A.c(r,g,g,g,g,g,g,B.pn,g,g,g),g,new D.eHF(h,e),i)],j))}return A.p(g,A.A(k,B.l,g,B.e,B.h,0,g,g),B.f,g,g,new A.o(v,g,l,m,g,g,B.m),g,g,g,B.dU,B.bg,g,g,g)},
bHD(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=x.p,h=A.a([],i)
if($.DB.length===0){w=d.a
v=w?B.c.j(0.92):C.i8
u=A.m(22)
t=A.K(w?B.c:C.ml,B.r,1)
s=A.p(j,C.c0S,B.f,j,j,E.ags,j,40,j,j,j,j,j,40)
s=A.A(A.a([s,B.ar,A.E(A.c("Your trading tutor",j,j,j,j,j,j,A.l(j,j,w?C.cy:B.c,j,j,j,j,j,j,j,j,16,j,j,B.E,j,j,!0,j,j,j,j,j,j,j,j),j,j,j),1)],i),B.l,j,B.e,B.h,0,j,j)
v=A.p(j,A.x(A.a([s,B.M,A.c("Ask anything about trading. The tutor sees the same live prices and readings as the agent, so it can explain what each market is doing right now.",j,j,j,j,j,j,A.l(j,j,w?C.c8:C.c9,j,j,j,j,j,j,j,j,12.5,j,j,j,j,1.35,!0,j,j,j,j,j,j,j,j),j,j,j)],i),B.B,j,B.e,B.h,0,B.p),B.f,j,j,new A.o(v,j,t,u,j,j,B.m),j,j,j,j,B.bR,j,j,j)
u=A.a([],i)
for(r=0;r<6;++r){q=C.dcv[r]
t=w?C.cy:B.c
t=A.c(q,j,j,j,j,j,j,new A.H(!0,t,j,j,j,j,12,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j),j,j,j)
s=w?B.c.j(0.92):C.i8
p=w?C.oK:C.oF
o=new A.aP(999,999)
u.push(A.mR(j,s,t,j,new D.eHG(k,q),j,new A.b9(new A.bb(o,o,o,o),B.a1),new A.ax(p,1,B.r,-1),j))}B.d.u(h,A.a([v,B.af,A.bZ(B.bI,u,B.br,j,8,8)],i))}for(w=$.DB.length,v=d.a,r=0;r<$.DB.length;$.DB.length===w||(0,A.I)($.DB),++r){n=$.DB[r]
u=n.a
t=u?B.a9:B.a5
if(u)s=v?C.mZ:B.c
else s=v?B.c.j(0.92):C.i8
p=u?18:4
o=u?4:18
if(u)m=j
else{l=new A.ax(v?B.c:C.ml,1,B.r,-1)
m=new A.bE(l,l,l,l)}if(u)u=v?B.c:C.mZ
else u=v?C.cy:B.c
h.push(new A.bK(t,j,j,A.p(j,A.AI(n.b,new A.H(!0,u,j,j,j,j,13.5,j,j,j,j,j,1.4,j,j,j,j,j,j,j,j,j,j,j,j,j),j),B.f,j,F.ag3,new A.o(s,j,m,new A.bb(B.i5,B.i5,new A.aP(p,p),new A.aP(o,o)),j,j,B.m),j,j,j,B.jB,B.hz,j,j,j),j))}if($.ahd){w=v?B.c.j(0.92):C.i8
u=A.m(18)
h.push(new A.bK(B.a5,j,j,A.p(j,A.A(A.a([B.ac3,B.aa,A.c("Reading the markets...",j,j,j,j,j,j,A.l(j,j,v?C.c8:C.c9,j,j,j,j,j,j,j,j,12.5,j,j,j,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)],i),B.l,j,B.e,B.N,0,j,j),B.f,j,j,new A.o(w,j,j,u,j,j,B.m),j,j,j,B.hK,B.hz,j,j,j),j))}h=A.E(A.co(h,k.ax,j,C.bHC,j,j,B.ah,!1),1)
w=A.l(j,j,v?C.cy:B.c,j,j,j,j,j,j,j,j,j,j,j,j,j,j,!0,j,j,j,j,j,j,j,j)
u=A.l(j,j,v?C.c8:C.c9,j,j,j,j,j,j,j,j,j,j,j,j,j,j,!0,j,j,j,j,j,j,j,j)
t=v?B.c.j(0.92):C.i8
s=A.m(999)
p=v?C.oK:C.oF
o=A.m(999)
m=v?C.oK:C.oF
w=A.E(A.aN(j,B.Z,!1,j,!0,B.t,j,A.aO(),k.at,j,j,j,j,j,2,A.bC(j,new A.b6(4,s,new A.ax(p,1,B.r,-1)),j,B.zs,j,j,j,j,!0,new A.b6(4,o,new A.ax(m,1,B.r,-1)),j,j,j,j,j,t,!0,j,j,j,j,j,j,j,j,j,j,j,j,j,u,"Ask about trading or a market...",j,j,j,j,j,j,j,j,j,!0,!0,!1,j,j,j,j,j,j,j,j,j,j,j,j,j,j),B.y,!0,j,!0,j,!1,j,B.al,j,j,j,j,j,j,j,j,j,4,1,j,!1,"\u2022",j,j,j,k.gcgo(),j,!1,j,j,!1,j,!0,j,B.ae,j,j,j,j,j,j,j,j,j,j,j,w,!0,B.a7,j,B.ao,j,B.acq,j,j),1)
u=v?C.mZ:B.c
t=$.ahd?j:new D.eHH(k)
return A.x(A.a([h,A.p(j,A.A(A.a([w,B.aa,A.aG(!1,B.a3,!0,j,A.aM(!1,j,!0,new A.a5(48,48,A.V(B.pX,v?B.c:C.mZ,j,j,j,j),j),B.cK,!0,j,j,j,j,j,j,j,j,j,j,j,t,j,j,j,j,j,j,j),B.f,u,0,j,j,B.cK,j,j,B.ai)],i),B.l,j,B.e,B.h,0,j,j),B.f,j,j,j,j,j,j,j,X.HC,j,j,j)],i),B.l,j,B.e,B.h,0,B.p)}}
D.a0G.prototype={
R(){var w=x.S
return new D.bl8(A.S(w,w))},
cZa(d){return this.e.$0()},
d0U(d){return this.x.$1(d)},
rn(){return this.y.$0()},
d_s(d){return this.z.$1(d)},
gd4(d){return this.w}}
D.bl8.prototype={
a_(){var w,v,u,t,s,r,q,p,o,n=this
n.a3()
w=C.dLi.h(0,n.a.c.a)
n.d=w==null?n.a.c.x:w
v=n.a.w
u=new D.duV()
t=new D.duT()
w=u.$1(v.h(0,"slots"))
s=A.U(w).k("X<1>")
w=A.B(new A.X(w,new D.duR(n),s),s.k("M.E"))
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
if(!B.d.q(n.x,o))B.d.I(n.x,o)}n.bbt(!1)
n.z=A.d0(B.fv,new D.duS(n))},
t(){var w=this.z
if(w!=null)w.a1(0)
this.a2()},
b3i(){var w,v,u,t,s,r,q=this,p=q.a
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
u=u.iW(u,new D.duJ(),t,s)
r=q.w
r===$&&A.d()
s=r.iW(r,new D.duK(),t,s)
r=q.x
r===$&&A.d()
return p.d0U(A.J(["slots",w,"right",v,"tries",u,"locks",s,"used",r],t,x.z))},
bbt(d){var w,v,u,t,s,r,q,p,o,n=this,m=Date.now(),l=n.y,k=x.X,j=!1,i=0
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
q=A.B(new A.X(s,new D.duL(n),w),w.k("M.E"))
if(q.length!==0)p=q
else{t=n.d.length
s=A.a(new Array(t),k)
for(r=0;r<t;++r)s[r]=r
w=A.U(s).k("X<1>")
p=A.B(new A.X(s,new D.duM(n),w),w.k("M.E"))}w=p.length
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
j=!0}++i}if(j&&d)n.b3i()},
cGl(){return this.bbt(!0)},
cmO(d){var w,v,u,t,s=this.d
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
cgn(d,e){var w=this,v=w.f
v===$&&A.d()
if(!v.q(0,d)){v=w.w
v===$&&A.d()
v=v.am(0,d)}else v=!0
if(v)return
w.l(new D.duH(w,e,d))
w.b3i()},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=A.Q(d).ax.a===B.dg,i=new D.Ro(j),h=l.a.c,g=l.e
g===$&&A.d()
w=l.f
w===$&&A.d()
v=new A.X(g,w.gjC(w),A.U(g).k("X<1>")).gJ(0)
u=v===l.e.length
g=j?C.t3:C.t1
w=j?C.t3:C.t1
t=j?C.O0:C.NU
s=x.O
t=A.a([w,t],s)
w=A.aI(k,k,k,k,A.V(B.eB,j?C.cy:B.c,k,k,k,18),k,k,k,new D.duN(d),k,k,k,k,k,k)
r=l.a.d
q=x.p
r=A.A(A.a([w,B.aV,A.c("Lesson "+r+" of 10",k,k,k,k,k,k,A.l(k,k,j?C.c8:C.c9,k,k,k,k,k,k,k,k,12,k,k,B.P,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)],q),B.l,k,B.e,B.h,0,k,k)
w=A.m(24)
p=h.f
o=A.ap(p,B.v,0.35)
o.toString
s=A.a([p,o],s)
o=B.c.j(0.2)
p=A.m(16)
s=A.a([r,A.p(k,A.A(A.a([A.p(k,A.V(h.e,B.c,k,k,k,28),B.f,k,k,new A.o(o,k,k,p,k,k,B.m),k,52,k,k,k,k,k,52),B.ew,A.E(A.x(A.a([A.c(h.b,k,k,k,k,k,k,B.fP,k,k,k),A.c(h.c+" \xb7 "+h.d+" min",k,k,k,k,k,k,B.nv,k,k,k)],q),B.B,k,B.e,B.h,0,B.p),1)],q),B.l,k,B.e,B.h,0,k,k),B.f,k,k,new A.o(k,k,k,w,k,new A.a8(B.a5,B.a9,B.x,s,k,k),B.m),k,k,k,k,B.fa,k,k,k),B.aA],q)
for(w=h.w,n=0;n<4;++n){r=w[n]
p=j?C.cy:B.c
p=A.c(r.a,k,k,k,k,k,k,new A.H(!0,p,k,k,k,k,16,B.E,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k),k,k,k)
o=j?C.cy:B.c
B.d.u(s,A.a([p,B.at,A.c(r.b,k,k,k,k,k,k,new A.H(!0,o,k,k,k,k,14,k,k,k,k,k,1.5,k,k,k,k,k,k,k,k,k,k,k,k,k),k,k,k),B.aA],q))}w=j?B.c.j(0.92):C.i8
r=A.m(22)
p=A.K(C.cQ.j(0.45),B.r,1.5)
s.push(A.p(k,A.x(A.a([A.A(A.a([C.bXp,B.bb,A.c("See it live right now",k,k,k,k,k,k,A.l(k,k,j?C.cy:B.c,k,k,k,k,k,k,k,k,14,k,k,B.E,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)],q),B.l,k,B.e,B.h,0,k,k),B.R,l.a.cZa(0)],q),B.B,k,B.e,B.h,0,B.p),B.f,k,k,new A.o(w,k,p,r,k,k,B.m),k,k,k,k,B.bF,k,k,k))
s.push(B.by)
w=A.c("Quiz",k,k,k,k,k,k,A.l(k,k,j?C.cy:B.c,k,k,k,k,k,k,k,k,16,k,k,B.E,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)
r=""+v+" of "
p=l.e.length
if(u)o=C.cQ
else o=j?C.c8:C.c9
s.push(A.A(A.a([w,B.aV,A.c(r+p+" right",k,k,k,k,k,k,A.l(k,k,o,k,k,k,k,k,k,k,k,12.5,k,k,B.E,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)],q),B.l,k,B.e,B.h,0,k,k))
s.push(B.ak)
o=A.m(9)
w=l.e.length
w=w===0?0:v/w
s.push(A.bx(o,A.jE(j?C.O7:C.NY,k,k,7,k,w,C.b5s),B.aq))
s.push(B.M)
w=l.a.f?"Admin: you can retry any question.":"Get all 10 right to finish. A wrong answer gets one more try; wrong twice and that question locks for 5 minutes, then a new question takes its place."
s.push(A.c(w,k,k,k,k,k,k,A.l(k,k,j?C.c8:C.c9,k,k,k,k,k,k,k,k,11.8,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),k,k,k))
s.push(B.R)
for(m=0;w=l.e,m<w.length;++m)s.push(l.cu6(i,m,w[m]))
s.push(B.M)
w=j?C.cy:B.c
p=j?C.oK:C.oF
p=A.E(A.ep(C.c35,k,C.fVb,new D.duO(l,h),A.dk(k,k,k,k,k,k,k,k,k,w,k,k,B.cp,k,new A.b9(A.m(999),B.a1),new A.ax(p,1.5,B.r,-1),k,k,k,k)),1)
w=!u
if(!w||l.a.r)j=C.cQ
else j=j?C.c8:C.c9
j=A.bp(j,k,k,k,k,k,B.cp,k,new A.b9(A.m(999),B.a1),k,k,k)
o=!w||l.a.r?new D.duP(l,d):k
s.push(A.A(A.a([p,B.ar,A.E(A.db(S.R6,k,A.c(!w||l.a.r?"Finish lesson":r+l.e.length+" right",k,k,k,k,k,k,B.cd,k,k,k),o,j),1)],q),B.l,k,B.e,B.h,0,k,k))
return A.c5(k,g,A.p(k,A.bo(!0,A.co(s,k,k,C.bHK,k,k,B.ah,!1),!0,!1,B.ag,!0,!0),B.f,k,k,new A.o(k,k,k,k,k,new A.a8(B.aX,B.b1,B.x,t,k,k),B.m),k,k,k,k,k,k,k,k),k,!1,!1,k,k)},
cu6(a8,a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=this,a6=null,a7=a5.d
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
if(u!=null){a7=A.dx(0,0,0,Math.max(0,u-Date.now()),0,0).a
r=B.o.ao(a7,6e7)
q=B.a.b0(B.o.v(B.o.F(B.o.ao(a7,1e6),60)),2,"0")
a7=a8.a
p=a7?C.v1:C.v2
o=A.m(20)
n=A.K(C.dn.j(0.4),B.r,1)
m=A.c("Question "+(a9+1)+" is locked",a6,a6,a6,a6,a6,a6,A.l(a6,a6,a7?C.cy:B.c,a6,a6,a6,a6,a6,a6,a6,a6,14,a6,a6,B.E,a6,a6,!0,a6,a6,a6,a6,a6,a6,a6,a6),a6,a6,a6)
l=x.p
return A.p(a6,A.A(A.a([C.c5c,B.ar,A.E(A.x(A.a([m,A.c("Wrong twice. Re-read the lesson; a new question appears in "+r+":"+q+".",a6,a6,a6,a6,a6,a6,A.l(a6,a6,a7?C.c8:C.c9,a6,a6,a6,a6,a6,a6,a6,a6,12.5,a6,a6,a6,a6,1.35,!0,a6,a6,a6,a6,a6,a6,a6,a6),a6,a6,a6)],l),B.B,a6,B.e,B.h,0,B.p),1)],l),B.l,a6,B.e,B.h,0,a6,a6),B.f,a6,a6,new A.o(p,a6,n,o,a6,a6,B.m),a6,a6,a6,B.d6,B.bF,a6,a6,a6)}a7=a8.a
p=a7?B.c.j(0.92):C.i8
o=A.m(20)
if(v)n=C.cQ.j(0.6)
else n=a7?B.c:C.ml
n=A.K(n,B.r,v?1.5:1)
m=x.p
l=A.a([A.c(""+(a9+1)+". "+w.a,a6,a6,a6,a6,a6,a6,A.l(a6,a6,a7?C.cy:B.c,a6,a6,a6,a6,a6,a6,a6,a6,14,a6,a6,B.E,a6,a6,!0,a6,a6,a6,a6,a6,a6,a6,a6),a6,a6,a6),B.M],m)
for(k=a5.cmO(b0),j=k.length,i=!v,h=w.b,g=w.c,f=0;f<k.length;k.length===j||(0,A.I)(k),++f){e=k[f]
d=v?a6:new D.duI(a5,b0,e)
if(v&&e===g)a0=C.cQ.j(0.14)
else if(s===e)a0=C.dn.j(0.12)
else a0=a7?C.v1:C.v2
a1=new A.aP(14,14)
if(v&&e===g)a2=C.cQ
else a2=s===e?C.dn:B.L
a3=new A.ax(a2,1,B.r,-1)
a2=h[e]
a4=a7?C.cy:B.c
a2=A.a([new A.bu(1,B.b9,A.c(a2,a6,a6,a6,a6,a6,a6,new A.H(!0,a4,a6,a6,a6,a6,13.5,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6),a6,a6,a6),a6)],m)
if(v&&e===g)a2.push(C.c0C)
if(i&&s===e)a2.push(C.c6B)
l.push(A.aA(a6,A.p(a6,new A.c1(B.aK,B.e,B.h,B.l,a6,B.p,a6,0,a2,a6),B.f,a6,a6,new A.o(a0,a6,new A.bE(a3,a3,a3,a3),new A.bb(a1,a1,a1,a1),a6,a6,B.m),a6,a6,a6,B.eI,B.ep,a6,a6,a6),B.y,!1,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,d,a6,a6,a6,a6,a6,a6,!1,B.a4))}if(v)l.push(A.c("Right! "+w.d,a6,a6,a6,a6,a6,a6,C.fP4,a6,a6,a6))
else if(t===1&&!a5.a.f)l.push(C.fXY)
else if(t>=1)l.push(C.fVl)
return A.p(a6,A.x(l,B.B,a6,B.e,B.h,0,B.p),B.f,a6,a6,new A.o(p,a6,n,o,a6,a6,B.m),a6,a6,a6,B.d6,B.bF,a6,a6,a6)}}
D.aPn.prototype={
t(){var w=this,v=w.aa$
if(v!=null)v.a8(0,w.gbB())
w.aa$=null
w.a2()},
aZ(){this.b7()
this.b5()
this.bC()}}
var z=a.updateTypes(["P(uv)","ay<~>()","~()","XK(Z)","WX(Z)","ay<~>(n)","n(a_F)","a0G(Z)"])
D.eHB.prototype={
$1(d){var w=this.a
if(w.c!=null)w.yP(!0)},
$S:26}
D.eHC.prototype={
$1(d){this.a.yP(!0)
return null},
$S:10}
D.eH_.prototype={
$0(){var w=this.a
w.d=this.b
w.f=!1},
$S:0}
D.eHa.prototype={
$1(d){var w=this.a.as,v=w.f
if(v.length!==0){v=B.d.gd3(v).Q
v.toString
w.i9(B.i.D(Math.min(this.b*160-16,v),0,1/0))}},
$S:7}
D.eH1.prototype={
$0(){return this.a.Q=this.b},
$S:0}
D.eH9.prototype={
$0(){return this.a.Q=this.b},
$S:0}
D.eHc.prototype={
$0(){var w=this.a,v=w.f=!1,u=this.b,t=u==null
if(!t?J.z(J.t(u,"ok"),!0):v){w.d=u
w.ay=null}else{v=t?null:J.t(u,"error")
w.ay=J.k(v==null?"Could not reach the server. Pull down to try again.":v)
if(!J.z(t?null:J.t(u,"ownerOnly"),!0))v=J.z(t?null:J.t(u,"setupNeeded"),!0)
else v=!0
if(v)w.d=null}},
$S:0}
D.eHd.prototype={
$0(){var w=this.a,v=this.b
w.e=v
w.w=J.ad(v)>=30},
$S:0}
D.eGZ.prototype={
$1(d){return A.a0(d,x.N,x.z)},
$S:24}
D.eH0.prototype={
$0(){var w,v,u=this,t=u.a
if(u.b){w=A.B(t.e,x.P)
v=u.c
B.d.u(w,v)}else{w=u.c
v=w}t.e=w
t.w=J.ad(v)>=30},
$S:0}
D.eHl.prototype={
$1(d){var w=null
return A.eh(A.a([A.bM(!1,B.dw,w,w,!0,w,w,w,new D.eHj(d),w,w),A.bI(C.hhl,w,new D.eHk(d),w)],x.p),w,w,w,C.hhL,w,w,w,w,C.fZt,w)},
$S:17}
D.eHj.prototype={
$0(){A.a7(this.a,!1).N(!1)
return null},
$S:0}
D.eHk.prototype={
$0(){A.a7(this.a,!1).N(!0)
return null},
$S:0}
D.eHm.prototype={
$0(){var w,v,u,t,s=this.a
s.r=!0
w=s.d
if(w!=null){v=x.N
u=x.z
w=A.dD(w,v,u)
t=s.d
t.toString
u=A.dD(D.dR(J.t(t,"state")),v,u)
v=this.b
u.n(0,"enabled",v)
if(v)u.n(0,"brakePaused",!1)
w.n(0,"state",u)
s.d=w}},
$S:0}
D.eHn.prototype={
$0(){var w=this,v=w.a,u=v.r=!1,t=w.b
if(t){u=w.c
u.toString
u=J.t(u,"state")!=null}if(u)v.d=w.c
else if(!t)v.d=w.d},
$S:0}
D.eH8.prototype={
$1(d){var w=this.a,v=w.d
w.a.toString
return D.hAr(v,!1)},
$S:z+3}
D.eHf.prototype={
$0(){return this.a.r=!0},
$S:0}
D.eHg.prototype={
$0(){var w=this.a,v=w.r=!1,u=this.b
if(u!=null?J.z(J.t(u,"ok"),!0):v)w.d=u},
$S:0}
D.eHh.prototype={
$1(d){var w=this
return A.oV(new D.eHe(w.a,w.b,w.c,w.d),!1,0.8,0.95,0.25,!1,null)},
$S:132}
D.eHe.prototype={
$2(d,e){var w=this
return w.a.czg(w.b,w.c,D.dR(J.t(w.d,"state")),e)},
$S:2019}
D.eHi.prototype={
$2(d,e){return B.i.aQ(D.eHq(d),D.eHq(e))},
$S:39}
D.eHA.prototype={
$0(){return this.a.yP(!0)},
$S:1}
D.eHv.prototype={
$0(){var w=this.a.c
w.toString
return A.O9(w)},
$S:0}
D.eHw.prototype={
$0(){return this.a.yP(!0)},
$S:0}
D.eGO.prototype={
$1(d){var w,v=J.a2(d)
if(!J.z(v.h(d,"today"),!0)){v=v.h(d,"asset")
w=this.a
v=J.z(v,w==null?null:w.h(0,"symbol"))}else v=!0
return v},
$S:4}
D.eGP.prototype={
$1(d){return J.z(J.t(d,"asset"),this.a.Q)},
$S:4}
D.eGQ.prototype={
$1(d){return J.z(J.t(d,"asset"),this.a)},
$S:4}
D.eGR.prototype={
$0(){var w=this
return B.d.dr(w.a,new D.eGM(w.b),new D.eGN(w.c,w.d))},
$S:147}
D.eGM.prototype={
$1(d){return J.z(J.t(d,"asset"),this.a)},
$S:4}
D.eGN.prototype={
$0(){var w=this.a
return w.length===0?this.b:B.d.gG(w)},
$S:147}
D.eGS.prototype={
$1(d){return J.z(J.t(d,"asset"),this.a.h(0,"symbol"))},
$S:4}
D.eGT.prototype={
$0(){return this.a},
$S:147}
D.eHt.prototype={
$1(d){return A.v(d)},
$S:15}
D.eHu.prototype={
$1(d){return A.v(d)},
$S:15}
D.eHp.prototype={
$1(d){var w,v=this,u=null,t=v.b,s=v.a.cIG(t,v.c,v.d)
t=t.a
w=A.fv(u,u,t?B.c.j(0.92):C.i8,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,B.ns,u,u,u,u,u,u)
return A.eH(u,B.L,A.aG(!1,B.a3,!0,u,A.x(A.a([s,B.R,A.bM(!1,A.c("Got it",u,u,u,u,u,u,A.l(u,u,t?C.cy:B.c,u,u,u,u,u,u,u,u,u,u,u,B.E,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u,u,!0,u,u,u,new D.eHo(d),u,w)],x.p),B.l,u,B.e,B.N,0,B.p),B.f,B.L,0,u,u,u,u,u,B.ai),u,u,u,B.zw,u,B.dc,u,u,u)},
$S:48}
D.eHo.prototype={
$0(){return A.a7(this.a,!1).e3()},
$S:0}
D.eHs.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.c
s.toString
w=2
return A.b(A.a7(s,!1).cb(A.eb(new D.eHr(u.b),!1,null,x.H)),$async$$0)
case 2:if(t.c!=null)t.yP(!1)
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
D.eHr.prototype={
$1(d){return new D.WX(this.a,null)},
$S:z+4}
D.eH3.prototype={
$1(d){return J.z(J.t(d,"open"),!0)},
$S:4}
D.eH4.prototype={
$0(){var w=this
return w.a.cDw(w.b,w.c,w.d)},
$S:0}
D.eH5.prototype={
$1(d){return J.z(J.t(d,"asset"),J.t(this.a,"asset"))},
$S:4}
D.eH7.prototype={
$2(d,e){return B.ar},
$S:37}
D.eH6.prototype={
$2(d,a0){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.b[a0],l=J.a2(m),k=J.k(l.h(m,"asset")),j=k===J.t(o.c,"asset"),i=D.cg(l.h(m,"changePct")),h=i>=0,g=o.d,f=J.z(g==null?n:g.h(0,"symbol"),k),e=J.z(D.dR(l.h(m,"reading")).h(0,"decision"),"ENTER")&&J.z(D.dR(l.h(m,"reading")).h(0,"dir"),"up")
g=o.a
w=o.e
v=w.a
u=v?B.c.j(0.92):C.i8
t=A.m(16)
if(j)s=D.fBy(k).c
else s=v?B.c:C.ml
s=A.K(s,B.r,j?2:1)
w=j?D.fBy(k).c.j(0.2):w.gI2()
w=A.a([new A.aa(0,B.H,w,B.cO,j?12:8)],x.V)
r=D.bDK(k,16)
q=x.p
r=A.a([r,B.dZ,A.E(A.c(k,n,1,B.a2,n,n,n,A.l(n,n,v?C.cy:B.c,n,n,n,n,n,n,n,n,11.5,n,n,B.E,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),1)],q)
if(f)B.d.u(r,A.a([A.V(B.q1,F.qH,n,n,n,13),B.pl],q))
else if(e)B.d.u(r,A.a([A.V(B.fM,C.cQ,n,n,n,14),B.pl],q))
r.push(g.cK0(m))
r=A.A(r,B.l,n,B.e,B.h,0,n,n)
l=D.ev(D.cg(l.h(m,"price")),!0,!1)
l=A.E(new A.de(B.dq,B.a5,B.f,A.c(l,n,n,n,n,n,n,A.l(n,n,v?C.cy:B.c,n,n,n,n,n,n,n,n,14.5,n,n,B.E,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),n),1)
v=h?"+":""
p=B.i.a5(i,2)
return A.aA(n,A.cV(n,A.x(A.a([r,A.A(A.a([l,B.d9,A.c(v+p+"%",n,n,n,n,n,n,A.l(n,n,h?C.cQ:C.dn,n,n,n,n,n,n,n,n,10.5,n,n,B.E,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],q),B.dv,n,B.e,B.h,0,n,n)],q),B.B,n,B.iz,B.h,0,B.p),n,n,B.aZ,new A.o(u,n,s,t,w,n,B.m),B.a3,n,n,n,n,B.iO,n,n,152),B.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new D.eH2(g,k),n,n,n,n,n,n,!1,B.a4)},
$S:79}
D.eH2.prototype={
$0(){return this.a.a25(this.b)},
$S:0}
D.eGW.prototype={
$0(){var w=this.a
return w.l(new D.eGV(w,this.b))},
$S:0}
D.eGV.prototype={
$0(){return this.a.z=this.b},
$S:0}
D.eGX.prototype={
$0(){var w=this.a
return w.l(new D.eGU(w))},
$S:0}
D.eGU.prototype={
$0(){var w=this.a
return w.ax=!w.ax},
$S:0}
D.eGK.prototype={
$1(d){return J.z(J.t(d,"asset"),this.a.h(0,"symbol"))},
$S:4}
D.eGL.prototype={
$0(){return A.S(x.N,x.z)},
$S:147}
D.eHb.prototype={
$2(d,e){var w=null,v=e.b,u=A.ao(w,A.p(w,w,B.f,w,w,new A.o(w,w,w,A.m(99),w,C.cba,B.m),w,8,w,w,w,w,w,w),w,w,0,0,9,w),t=this.a.a,s=A.ao(w,A.p(w,w,B.f,(t?C.cy:B.c).j(0.5),w,w,w,18,w,w,w,w,w,2),w,w,v/2-1,w,4,w),r=B.i.D(this.b*v-9,0,v-18)
return new A.a5(w,26,new A.an(B.a0,w,B.ad,B.f,A.a([u,s,A.ao(w,A.p(w,w,B.f,w,w,new A.o(B.c,w,A.K(t?C.cy:B.c,B.r,3),w,w,w,B.a6),w,18,w,w,w,w,w,18),w,w,r,w,4,w)],x.p),w),w)},
$S:115}
D.eGY.prototype={
$0(){return this.a.za(!this.b)},
$S:0}
D.eGJ.prototype={
$2(d,e){var w=null,v=this.a.a,u=v?C.v1:C.v2,t=A.m(12),s=A.c(d,w,1,B.a2,w,w,w,A.l(w,w,v?C.c8:C.c9,w,w,w,w,w,w,w,w,10.5,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)
return A.E(A.p(w,A.x(A.a([s,B.bw,new A.de(B.dq,B.a5,B.f,A.c(e,w,w,w,w,w,w,A.l(w,w,v?C.cy:B.c,w,w,w,w,w,w,w,w,13,w,w,B.E,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w)],x.p),B.B,w,B.e,B.h,0,B.p),B.f,w,w,new A.o(u,w,w,t,w,w,B.m),w,w,w,w,B.iO,w,w,w),1)},
$S:110}
D.eHy.prototype={
$1(d){return A.a0(d,x.N,x.z)},
$S:24}
D.eHz.prototype={
$0(){var w=this.a
return w.l(new D.eHx(w))},
$S:0}
D.eHx.prototype={
$0(){var w=this.a
return w.y=!w.y},
$S:0}
D.eGI.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=t.x&&t.w?2:4
break
case 2:w=5
return A.b(t.a_5(!0),$async$$0)
case 5:w=3
break
case 4:t.l(new D.eGH(t))
case 3:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
D.eGH.prototype={
$0(){var w=this.a
return w.x=!w.x},
$S:0}
D.cX_.prototype={
$0(){return this.a.d=this.b},
$S:0}
D.cX8.prototype={
$2(d,e){var w,v,u=null,t=e.b,s=this.a,r=s.a,q=r.c,p=r.d,o=r.e,n=r.f
r=r.r
w=s.d
v=d.K(x.D)
return A.aA(u,new A.a5(t,250,A.b4(u,u,u,new D.ber((v==null?B.CQ:v).w.d,q,p,o,n,r,w,u),B.az),u),B.y,!1,u,u,u,u,u,new D.cX3(s),new D.cX4(s,t),new D.cX5(s,t),u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new D.cX6(s,t),new D.cX7(s),u,u,u,!1,B.a4)},
$S:36}
D.cX6.prototype={
$1(d){return this.a.aAF(d.b,this.b)},
$S:23}
D.cX4.prototype={
$1(d){return this.a.aAF(d.b,this.b)},
$S:51}
D.cX5.prototype={
$1(d){return this.a.aAF(d.b,this.b)},
$S:19}
D.cX3.prototype={
$1(d){var w=this.a
return w.l(new D.cX2(w))},
$S:38}
D.cX2.prototype={
$0(){return this.a.d=null},
$S:0}
D.cX7.prototype={
$1(d){return A.bL(B.fY,new D.cX1(this.a),x.b)},
$S:57}
D.cX1.prototype={
$0(){var w=this.a
if(w.c!=null)w.l(new D.cX0(w))},
$S:12}
D.cX0.prototype={
$0(){return this.a.d=null},
$S:0}
D.cX9.prototype={
$1(d){var w=this.a
return w*d+w/2},
$S:152}
D.cXb.prototype={
$1(d){var w=this.b,v=this.a,u=v.a
return w-(d-u)/(v.b-u)*w},
$S:5}
D.cXa.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o=this,n=$.T(),m=A.a([],x.v),l=new A.aH(n.r,B.aj,null,null,m)
for(n=o.b,w=o.c,v=o.d,u=o.a.c,t=!1,s=0;s<n;++s){r=J.t(u[s],d)
if(r==null)continue
q=w.$1(s)
if(typeof r=="number")p=r
else{p=A.cx(A.v(r))
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
D.fhS.prototype={
$1(d){return D.cg(J.t(d,"c"))},
$S:2021}
D.fwr.prototype={
$1(d){var w=null,v=C.a8t.h(0,d),u=v.a,t=v.b,s=this.a,r=s*0.78,q=A.K(B.c,B.r,1.2)
return A.p(B.z,A.c(u,w,w,w,w,w,w,A.l(w,w,B.c,w,w,w,w,w,w,w,w,s*(u.length>1?0.26:0.36),w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.f,w,w,new A.o(t,w,q,w,w,w,B.a6),w,r,w,w,w,w,w,r)},
$S:128}
D.fBR.prototype={
$1(d){var w=x.N,v=x.z,u=A.a0(d,w,v)
v=A.dD(u,w,v)
v.n(0,"asset",u.h(0,"symbol"))
return v},
$S:24}
D.fGb.prototype={
$1(d){return A.a0(d,x.N,x.z)},
$S:24}
D.fCX.prototype={
$1(d){return","},
$S:59}
D.fKe.prototype={
$3(d,e,f){var w=A.bPv(d,e,1,0,0,0,0,0)
while(A.lU(w)!==7)w=w.bL(864e8)
return w.bL(A.dx(7*(f-1),0,0,0,0,0).a)},
$S:2022}
D.e7V.prototype={
$1(d){this.a.Br()
return null},
$S:10}
D.e7s.prototype={
$0(){var w=this.a,v=this.b
w.d=A.a0(D.dR(v.h(0,"s")),x.N,x.z)
v=x.g.a(v.h(0,"log"))
if(v==null)v=B.bU
v=J.cQ(v,x.f)
v=A.cA(v,new D.e7r(),v.$ti.k("M.E"),x.P)
v=A.B(v,A.a3(v).k("M.E"))
w.e=v
w.f=!1},
$S:0}
D.e7r.prototype={
$1(d){return A.a0(d,x.N,x.z)},
$S:24}
D.e7C.prototype={
$0(){var w,v,u=this.a
u.f=!1
w=this.b
v=w==null
if(!v&&J.z(J.t(w,"ok"),!0)){u.d=A.a0(w,x.N,x.z)
u.w=null}else{w=v?null:J.t(w,"error")
u.w=J.k(w==null?"Could not load this system right now.":w)}w=this.c
if(w!=null&&J.z(J.t(w,"ok"),!0)){w=x.g.a(J.t(w,"rows"))
if(w==null)w=B.bU
w=J.cQ(w,x.f)
w=A.cA(w,new D.e7B(),w.$ti.k("M.E"),x.P)
w=A.B(w,A.a3(w).k("M.E"))
u.e=w}},
$S:0}
D.e7B.prototype={
$1(d){return A.a0(d,x.N,x.z)},
$S:24}
D.e7I.prototype={
$0(){var w,v,u,t=this.a
t.r=!0
w=t.d
if(w!=null){v=x.N
u=x.z
w=A.dD(w,v,u)
u=A.dD(D.dR(t.d.h(0,"state")),v,u)
v=this.b
u.n(0,"enabled",v)
if(v)u.n(0,"brakePaused",!1)
w.n(0,"state",u)
t.d=w}},
$S:0}
D.e7J.prototype={
$0(){var w=this.a,v=w.r=!1,u=this.b,t=u==null
if(!t?J.z(J.t(u,"ok"),!0):v)w.d=A.a0(u,x.N,x.z)
else{w.d=this.c
v=t?null:J.t(u,"error")
w.w=J.k(v==null?"Could not change it right now.":v)}},
$S:0}
D.e7T.prototype={
$0(){return A.O9(this.a)},
$S:0}
D.e7U.prototype={
$0(){this.a.Br()
return null},
$S:0}
D.e7q.prototype={
$0(){return this.a.za(!this.b)},
$S:0}
D.e7A.prototype={
$2(d,e){var w,v,u=this,t=null,s=e.b,r=u.a.a,q=r?C.v1:C.v2
q=A.bS(3,A.p(t,t,B.f,t,t,new A.o(q,t,t,A.m(99),t,t,B.m),t,t,t,t,t,t,t,t),0,0,3)
w=u.c
v=B.i.D(u.b/w,0,1)
v=A.ao(3,A.p(t,t,B.f,t,t,new A.o(u.d,t,t,A.m(99),t,t,B.m),t,t,t,t,t,t,t,t),t,t,0,t,3,s*v)
w=B.i.D(s*B.i.D(u.e/w,0,1)-1,0,s-2)
return new A.a5(t,14,new A.an(B.a0,t,B.ad,B.t,A.a([q,v,A.ao(0,A.p(t,t,B.f,r?C.cy:B.c,t,t,t,t,t,t,t,t,t,2),t,t,w,t,0,t)],x.p),t),t)},
$S:115}
D.e7y.prototype={
$1(d){return A.a0(d,x.N,x.z)},
$S:24}
D.e7G.prototype={
$1(d){return J.z(J.t(d,"symbol"),this.a.Q)},
$S:4}
D.e7H.prototype={
$0(){var w=this.a
return B.d.dr(w,new D.e7E(),new D.e7F(w))},
$S:147}
D.e7E.prototype={
$1(d){return J.z(J.t(d,"tag"),"TRADED NOW")},
$S:4}
D.e7F.prototype={
$0(){return B.d.gG(this.a)},
$S:147}
D.e7v.prototype={
$1(d){return J.z(D.dR(J.t(d,"analysis")).h(0,"passes"),!0)},
$S:4}
D.e7x.prototype={
$2(d,e){return B.ar},
$S:37}
D.e7w.prototype={
$2(a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=h.b[a7],e=J.a2(f),d=A.v(e.h(f,"symbol")),a0=d===J.t(h.c,"symbol"),a1=D.cg(e.h(f,"changePct")),a2=D.dR(e.h(f,"record")),a3=D.dR(e.h(f,"analysis")),a4=e.h(f,"tag"),a5=A.v(a4==null?"":a4)
if(a5==="TRADED NOW")w=C.f4I
else if(J.z(a3.h(0,"passes"),!0))w=C.f7g
else{if(J.z(a3.h(0,"falling"),!0))a4=C.f7o
else{a4=h.d.a?C.c8:C.c9
a4=new A.y(a4,a5==="closed"?"CLOSED":"WATCHING")}w=a4}v=w.a
u=g
t=w.b
u=t
s=v
a4=h.a
r=h.d
q=r.a
p=q?B.c.j(0.92):C.i8
o=A.m(16)
if(a0)n=a4.a.c==="options"?B.aC:B.as
else n=q?B.c:C.ml
n=A.K(n,B.r,a0?2:1)
if(a0)r=(a4.a.c==="options"?B.aC:B.as).j(0.18)
else r=r.gI2()
r=A.a([new A.aa(0,B.H,r,B.cO,a0?12:8)],x.V)
m=D.bDK(d,16)
l=x.p
m=A.A(A.a([m,B.dZ,A.E(A.c(d,g,1,B.a2,g,g,g,A.l(g,g,q?C.cy:B.c,g,g,g,g,g,g,g,g,11.5,g,g,B.E,g,g,!0,g,g,g,g,g,g,g,g),g,g,g),1),A.c(u,g,g,g,g,g,g,A.l(g,g,s,g,g,g,g,g,g,g,g,8.5,g,g,B.u,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)],l),B.l,g,B.e,B.h,0,g,g)
e=D.ev(D.cg(e.h(f,"price")),!0,!1)
e=A.E(new A.de(B.dq,B.a5,B.f,A.c(e,g,g,g,g,g,g,A.l(g,g,q?C.cy:B.c,g,g,g,g,g,g,g,g,14.5,g,g,B.E,g,g,!0,g,g,g,g,g,g,g,g),g,g,g),g),1)
k=a1>=0
j=k?"+":""
i=B.i.a5(a1,2)
e=A.A(A.a([e,B.d9,A.c(j+i+"%",g,g,g,g,g,g,A.l(g,g,k?C.cQ:C.dn,g,g,g,g,g,g,g,g,10.5,g,g,B.E,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)],l),B.dv,g,B.e,B.h,0,g,g)
k=D.cg(a2.h(0,"n"))===0?"no trades here yet":"last "+B.i.M(D.cg(a2.h(0,"n")))+": "+B.i.M(D.cg(a2.h(0,"wins")))+"W/"+B.i.M(D.cg(a2.h(0,"losses")))+"L "+D.ev(D.cg(a2.h(0,"pnl")),!0,!0)
return A.aA(g,A.cV(g,A.x(A.a([m,e,A.c(k,g,1,B.a2,g,g,g,A.l(g,g,q?C.c8:C.c9,g,g,g,g,g,g,g,g,9.5,g,g,B.P,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)],l),B.B,g,B.iz,B.h,0,B.p),g,g,B.aZ,new A.o(p,g,n,o,r,g,B.m),B.eH,g,g,g,g,B.iO,g,g,152),B.y,!1,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,new D.e7u(a4,d),g,g,g,g,g,g,!1,B.a4)},
$S:79}
D.e7u.prototype={
$0(){var w=this.a
return w.l(new D.e7t(w,this.b))},
$S:0}
D.e7t.prototype={
$0(){return this.a.Q=this.b},
$S:0}
D.e7p.prototype={
$1(d){return A.a0(d,x.N,x.z)},
$S:24}
D.e7K.prototype={
$3$c(d,e,f){var w=null,v=this.a.a,u=v?C.v1:C.v2,t=A.m(12),s=A.c(d,w,1,B.a2,w,w,w,A.l(w,w,v?C.c8:C.c9,w,w,w,w,w,w,w,w,10.5,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)
if(f==null)v=v?C.cy:B.c
else v=f
return A.E(A.p(w,A.x(A.a([s,B.bw,new A.de(B.dq,B.a5,B.f,A.c(e,w,w,w,w,w,w,A.l(w,w,v,w,w,w,w,w,w,w,w,13.5,w,w,B.E,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w)],x.p),B.B,w,B.e,B.h,0,B.p),B.f,w,w,new A.o(u,w,w,t,w,w,B.m),w,w,w,w,B.iO,w,w,w),1)},
$2(d,e){return this.$3$c(d,e,null)},
$S:2023}
D.e7z.prototype={
$1(d){return A.a0(d,x.N,x.z)},
$S:24}
D.e7R.prototype={
$1(d){return A.a0(d,x.N,x.z)},
$S:24}
D.e7S.prototype={
$0(){var w=this.a
return w.l(new D.e7Q(w))},
$S:0}
D.e7Q.prototype={
$0(){var w=this.a
return w.y=!w.y},
$S:0}
D.e7P.prototype={
$0(){var w=this,v=w.d?w.e:A.J(["why",w.f+". Bought because: "+w.r],x.N,x.z)
return w.a.cDz(w.b,w.c,v)},
$S:0}
D.e7M.prototype={
$1(d){return A.a0(d,x.N,x.z)},
$S:24}
D.e7O.prototype={
$1(d){var w
if(d==null)w="?"
else{w=D.cg(d)>=0?"+":""
w=w+B.i.a5(D.cg(d),2)+"%"}return w},
$S:15}
D.e7N.prototype={
$1(a1){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i="strength",h="direction",g=k.a.a,f=g?B.c.j(0.92):C.i8,e=A.c("Why this trade: "+k.b,j,j,j,j,j,j,A.l(j,j,g?C.cy:B.c,j,j,j,j,j,j,j,j,16,j,j,B.E,j,j,!0,j,j,j,j,j,j,j,j),j,j,j),d=k.c,a0=d.h(0,"why")
a0=A.v(a0==null?"":a0)
a0=A.c(a0,j,j,j,j,j,j,A.l(j,j,g?C.cy:B.c,j,j,j,j,j,j,j,j,13,j,j,j,j,1.35,!0,j,j,j,j,j,j,j,j),j,j,j)
w=d.h(0,"market")
w=A.v(w==null?"?":w)
v=D.ev(D.cg(d.h(0,"price")),!0,!1)
u=d.h(0,"trend")
u=A.v(u==null?"?":u)
t=k.d
s=A.v(t.$1(d.h(0,i)))
r=d.h(0,"score")
r=A.v(r==null?"?":r)
q=d.h(0,h)!=null?" \xb7 "+A.v(d.h(0,h)):""
p=d.h(0,"phase")
p=A.v(p==null?"?":p)
d=J.z(d.h(0,"mode"),"pace")?" (behind pace)":""
o=x.p
d=A.a([a0,B.R,A.c("Market "+w+" at "+v+" \xb7 trend "+u+" \xb7 15 min "+s+" \xb7 score "+r+q+" \xb7 Phase "+p+d,j,j,j,j,j,j,A.l(j,j,g?C.c8:C.c9,j,j,j,j,j,j,j,j,12,j,j,j,j,1.35,!0,j,j,j,j,j,j,j,j),j,j,j)],o)
a0=k.e
if(a0.a!==0&&D.cg(a0.h(0,"n"))>0){w=B.i.M(D.cg(a0.h(0,"n")))
v=B.i.M(D.cg(a0.h(0,"wins")))
u=B.i.M(D.cg(a0.h(0,"losses")))
a0=D.ev(D.cg(a0.h(0,"pnl")),!0,!0)
d.push(A.c("Its record here before: last "+w+": "+v+"W / "+u+"L \xb7 "+a0,j,j,j,j,j,j,A.l(j,j,g?C.c8:C.c9,j,j,j,j,j,j,j,j,12,j,j,j,j,1.35,!0,j,j,j,j,j,j,j,j),j,j,j))}a0=k.f
if(a0.length!==0){w=A.a([B.R,A.c("How the markets ranked:",j,j,j,j,j,j,A.l(j,j,g?C.cy:B.c,j,j,j,j,j,j,j,j,12.5,j,j,B.E,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)],o)
for(a0=A.c_3(a0,0,x.P),v=J.aR(a0.a),a0=a0.b,u=new A.NG(v,a0);u.C();){s=u.c
s=s>=0?new A.y(a0+s,v.gP(v)):A.bi(A.ff())
n=s.b
r=J.a2(n)
q=A.v(r.h(n,"s"))
p=A.v(r.h(n,"score"))
m=A.v(t.$1(r.h(n,i)))
r=A.v(r.h(n,"trend"))
l=g?C.c8:C.c9
w.push(A.c(""+(s.a+1)+". "+q+" \xb7 score "+p+" \xb7 "+m+" \xb7 trend "+r,j,j,j,j,j,j,new A.H(!0,l,j,j,j,j,12,j,j,j,j,j,1.4,j,j,j,j,j,j,j,j,j,j,j,j,j),j,j,j))}B.d.u(d,w)}g=A.ca(A.x(d,B.B,j,B.e,B.N,0,B.p),B.t,j,B.y,j,j,j,j,j,B.ah)
return A.eh(A.a([A.bM(!1,B.pq,j,j,!0,j,j,j,new D.e7L(a1),j,j)],o),j,j,f,g,j,j,j,j,e,j)},
$S:17}
D.e7L.prototype={
$0(){return A.a7(this.a,!1).e3()},
$S:0}
D.e7o.prototype={
$0(){var w=this.a
return w.l(new D.e7n(w))},
$S:0}
D.e7n.prototype={
$0(){var w=this.a
return w.z=!w.z},
$S:0}
D.e7D.prototype={
$1(d){return A.v(d)},
$S:15}
D.d9Y.prototype={
$1(d){var w=this.a
if(w.c!=null)w.l(new D.d9X())},
$S:10}
D.d9X.prototype={
$0(){},
$S:0}
D.fH2.prototype={
$1(d){return J.k(d)},
$S:15}
D.fH3.prototype={
$2(d,e){var w=null,v=e.b,u=A.ao(w,A.p(w,w,B.f,w,w,new A.o(w,w,w,A.m(9),w,C.caB,B.m),w,6,w,w,w,w,w,w),w,w,0,0,4,w),t=B.i.D(this.a/100*v-7,0,v-14)
return new A.a5(w,14,new A.an(B.a0,w,B.ad,B.f,A.a([u,A.ao(w,A.p(w,w,B.f,w,w,new A.o(B.c,w,A.K(this.b.a?C.cy:B.c,B.r,2.5),w,w,w,B.a6),w,14,w,w,w,w,w,14),w,w,t,w,0,w)],x.p),w),w)},
$S:115}
D.fKK.prototype={
$1(d){return A.a0(d,x.N,x.z)},
$S:24}
D.dil.prototype={
$1(d){var w=this.a
if(w.c!=null)w.l(new D.dik())},
$S:10}
D.dik.prototype={
$0(){},
$S:0}
D.fxg.prototype={
$1(d){return J.k(d)},
$S:15}
D.eHM.prototype={
$1(d){return J.k(d)},
$S:15}
D.eIA.prototype={
$0(){return this.a.l(new D.eIz())},
$S:0}
D.eIz.prototype={
$0(){},
$S:0}
D.eIB.prototype={
$0(){return $.hl6=this.a.at.a.a},
$S:0}
D.eIC.prototype={
$1(d){var w=this.a
if(w.c!=null)w.l(new D.eIy(w,d))},
$S:200}
D.eIy.prototype={
$0(){return this.a.Q=this.b},
$S:0}
D.eID.prototype={
$1(d){this.a.Rh()
return null},
$S:10}
D.eIv.prototype={
$1(d){var w=x.N,v=x.z
v=A.dD(A.a0(d,w,v),w,v)
v.n(0,"asset",J.t(d,"symbol"))
return v},
$S:24}
D.eI6.prototype={
$0(){var w,v,u=this,t=u.c
if(J.z(t==null?null:J.t(t,"isAdmin"),!0))u.b.y=!0
w=u.d
if(w==null)w=u.a.a
if(w!=null){t=x.g.a(w.h(0,"done"))
if(t==null)t=A.a([],x.s)
v=x.Y.a(w.h(0,"lessons"))
u.b.x=A.J(["done",t,"lessons",v==null?A.S(x.N,x.z):v],x.N,x.z)}},
$S:0}
D.eIf.prototype={
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
if(J.z(n==null?null:J.t(n,"allDone"),!0)){$.cn0=new A.W(A.h0(0,0),0,!1)
A.JT()}case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$$0,v)},
$S:1}
D.eHP.prototype={
$1(d){return this.a.gK4().q(0,d.a)},
$S:z+0}
D.eHQ.prototype={
$0(){var w,v=this.a,u=x.N,t=A.d3(v.gK4(),u)
t.I(0,this.b)
w=A.B(t,A.a3(t).k("ch.E"))
u=A.dD(v.x,u,x.z)
u.n(0,"done",w)
v.x=u},
$S:0}
D.eHR.prototype={
$1(d){return this.a.gK4().q(0,d.a)},
$S:z+0}
D.eHS.prototype={
$1(d){var w=null
return A.eh(A.a([A.bI(C.hbi,w,new D.eHO(this.a,d),w)],x.p),w,w,w,C.h8d,w,w,w,w,C.fWl,w)},
$S:17}
D.eHO.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:A.a7(u.b,!1).N(null)
w=2
return A.b(A.Mk(),$async$$0)
case 2:t=e
s=u.a
if(s.c!=null)s.l(new D.eHN(s,t))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
D.eHN.prototype={
$0(){return this.a.Q=this.b},
$S:0}
D.eIe.prototype={
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
if(u==null)u=B.bU
u=J.b8(u,new D.eId(),x.N)
u=A.B(u,u.$ti.k("aj.E"))
s.dx=u
u=v.h(w,"nowEt")
s.dy=J.k(u==null?"":u)
s.fr=J.z(v.h(w,"stockOpen"),!0)
s.r=new A.W(Date.now(),0,!1)
if(x.f.b(v.h(w,"signals")))s.db=D.dR(v.h(w,"signals"))},
$S:0}
D.eId.prototype={
$1(d){return J.k(d)},
$S:15}
D.eIs.prototype={
$1(d){return J.z(J.t(d,"open"),!0)&&D.bF6(d).length>5},
$S:4}
D.eIt.prototype={
$2(d,e){return B.i.aQ(D.eHq(d),D.eHq(e))},
$S:39}
D.eHV.prototype={
$1(d){return J.z(J.t(d,"asset"),this.a.h(0,"symbol"))},
$S:4}
D.eHW.prototype={
$0(){return A.S(x.N,x.z)},
$S:147}
D.eHX.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m="typicalMin",l="enterWithinMin",k=J.a2(d),j=D.dR(k.h(d,"reading")),i=D.dR(j.h(0,"timing"))
if(i.h(0,m)==null)w=""
else{v=A.v(i.h(0,"dir"))
u=A.v(i.h(0,"ageMin"))
t=A.v(i.h(0,m))
s=A.v(i.h(0,"remainingMin"))
r=A.v(i.h(0,"dir"))
q=A.v(i.h(0,"worked"))
p=A.v(i.h(0,"of"))
o=D.cg(i.h(0,l))>0?"still early (enter within "+A.v(i.h(0,l))+" min)":"too late to enter"
w=", current "+v+" move "+u+" min old, such moves usually last "+t+" min (about "+s+" min left), past "+r+" moves really went that way "+q+" of "+p+" times, "+o}v=A.v(k.h(d,"asset"))
u=A.v(k.h(d,"name"))
t=D.hJj(d)
s=B.i.a5(D.cg(k.h(d,"changePct")),2)
k=J.z(k.h(d,"open"),!0)?"open":"closed"
r=j.h(0,"bias")
r=A.v(r==null?"unknown":r)
q=B.i.a5(D.cg(j.h(0,"score")),0)
p=j.h(0,"rsi")==null?"n/a":B.i.a5(D.cg(j.h(0,"rsi")),0)
o=j.h(0,"mom1h")==null?"n/a":B.i.a5(D.cg(j.h(0,"mom1h")),2)+"%"
n=j.h(0,"action")
return"- "+v+" ("+u+"): price "+t+", change "+s+"%, "+k+", "+r+", strength "+q+", RSI "+p+", last hour "+o+", reading: "+A.v(n==null?"n/a":n)+w+"."},
$S:53}
D.eHI.prototype={
$0(){$.DB.push(new D.a_F(!0,this.b))
$.ahd=!0},
$S:0}
D.eHJ.prototype={
$1(d){return(d.a?"Student":"Tutor")+": "+d.b},
$S:z+6}
D.eHK.prototype={
$1(d){return"- "+A.v(d)},
$S:15}
D.eHL.prototype={
$0(){},
$S:0}
D.eIg.prototype={
$1(d){var w=this.a.ax,v=w.f
if(v.length!==0){v=B.d.gd3(v).Q
v.toString
w.m7(v+200,B.eb,B.eX)}},
$S:7}
D.eIw.prototype={
$0(){return A.O9(this.a)},
$S:0}
D.eIx.prototype={
$0(){return this.b.gLl().C6(this.a.a)},
$S:0}
D.eHU.prototype={
$1(d){return this.a.gK4().q(0,d.a)},
$S:z+0}
D.eHT.prototype={
$0(){return this.a.clL(this.b)},
$S:0}
D.eIc.prototype={
$1(d){var w=this.b,v=B.d.cc(C.Ei,w),u=this.a,t=u.y,s=w.a,r=u.gK4().q(0,s)
s=x.Y.a(D.dR(u.x.h(0,"lessons")).h(0,s))
if(s==null)s=B.lD
return new D.a0G(w,v+1,new D.eI8(u,w),t,r,A.a0(s,x.N,x.z),new D.eI9(u,w),new D.eIa(u,w),new D.eIb(u),null)},
$S:z+7}
D.eI8.prototype={
$0(){var w=this.a,v=w.c
v.toString
return w.c6Z(new D.Ro(A.Q(v).ax.a===B.dg),this.b.r)},
$S:126}
D.eI9.prototype={
$1(d){var w=this.a
w.l(new D.eI7(w,this.b,d))
w.aCR()},
$S:119}
D.eI7.prototype={
$0(){var w=this.a,v=x.N,u=x.z,t=A.a0(D.dR(w.x.h(0,"lessons")),v,u)
t.n(0,this.b.a,this.c)
u=A.dD(w.x,v,u)
u.n(0,"lessons",t)
w.x=u},
$S:0}
D.eIa.prototype={
$0(){return this.a.aed(this.b.a)},
$S:0}
D.eIb.prototype={
$1(d){var w=this.a,v=w.c
v.toString
A.a7(v,!1).e3()
w.aR4(d)},
$S:2}
D.eHY.prototype={
$2$last$lines(d,e){var w=this.a
return new D.a_z(B.d.fB(w,Math.max(0,w.length-d)),this.b,null,e,this.c,null)},
$0(){return this.$2$last$lines(36,!0)},
$1$lines(d){return this.$2$last$lines(36,d)},
$S:2024}
D.eI5.prototype={
$1(d){var w=null
return A.c(d,w,w,w,w,w,w,A.l(w,w,this.a.a?C.cy:B.c,w,w,w,w,w,w,w,w,13,w,w,w,w,1.4,!0,w,w,w,w,w,w,w,w),w,w,w)},
$S:2025}
D.eHZ.prototype={
$1(d){var w=J.a2(d)
return J.z(D.dR(w.h(d,"reading")).h(0,"decision"),"ENTER")&&J.z(D.dR(w.h(d,"reading")).h(0,"dir"),"up")},
$S:4}
D.eI_.prototype={
$1(d){return J.t(d,"asset")},
$S:772}
D.eI0.prototype={
$1(d){var w=J.a2(d)
return J.z(D.dR(w.h(d,"reading")).h(0,"decision"),"ENTER")&&J.z(D.dR(w.h(d,"reading")).h(0,"dir"),"down")},
$S:4}
D.eI1.prototype={
$1(d){return J.t(d,"asset")},
$S:772}
D.eI2.prototype={
$1(d){var w=J.a2(d)
return J.z(w.h(d,"open"),!0)&&D.dR(w.h(d,"reading")).h(0,"rsi")!=null},
$S:4}
D.eI3.prototype={
$1(d){return J.z(J.t(d,"open"),!0)},
$S:4}
D.eI4.prototype={
$1(d){var w=D.dR(D.dR(J.t(d,"reading")).h(0,"timing"))
return D.cg(w.h(0,"of"))>=3&&D.cg(w.h(0,"worked"))/D.cg(w.h(0,"of"))>=0.5},
$S:4}
D.eIl.prototype={
$1(d){var w,v,u,t=this.a
if(t.cx!=="All"&&D.hEm(d)!==t.cx)return!1
t=this.b
if(t.length===0)return!0
w=J.a2(d)
v=A.v(w.h(d,"asset"))
u=A.v(w.h(d,"name"))
w=w.h(d,"asset")
w=J.k(w==null?"":w)
return B.a.q((v+" "+u+" "+A.aL(w,"/","")).toLowerCase(),t)},
$S:4}
D.eIm.prototype={
$2(d,e){var w="activeSignal",v=J.a2(d),u=x.f,t=u.b(v.h(d,w))?0:1,s=J.a2(e),r=u.b(s.h(e,w))?0:1
if(t!==r)return t-r
return B.i.aQ(D.cg(D.dR(s.h(e,"v2")).h(0,"passed")),D.cg(D.dR(v.h(d,"v2")).h(0,"passed")))},
$S:39}
D.eIo.prototype={
$0(){var w=this.a
return w.l(new D.eIk(w,this.b))},
$S:0}
D.eIk.prototype={
$0(){return this.a.cx=this.b},
$S:0}
D.eIn.prototype={
$1(d){return D.hEm(d)===this.a},
$S:4}
D.eIp.prototype={
$0(){var w=this.a
w.l(new D.eIj(w))},
$S:0}
D.eIj.prototype={
$0(){var w=this.a,v=w.CW
w.CW=!v
if(v){w.ch=""
w.cy.bN(0,B.ck)}},
$S:0}
D.eIq.prototype={
$1(d){var w=this.a
return w.l(new D.eIi(w,d))},
$S:2}
D.eIi.prototype={
$0(){return this.a.ch=this.b},
$S:0}
D.eIr.prototype={
$0(){return this.a.aR4("What is happening with "+A.v(J.t(this.b,"asset"))+" right now? Which of the 5 confirmations are missing, and why is the answer BUY, SELL or WAIT?")},
$S:0}
D.eIh.prototype={
$1(d){return A.a0(d,x.N,x.z)},
$S:24}
D.eHE.prototype={
$1(d){return this.a.gK4().q(0,d.a)},
$S:z+0}
D.eHF.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=!u.b?2:4
break
case 2:u.a.gLl().C6(0)
w=3
break
case 4:w=5
return A.b(A.Mk(),$async$$0)
case 5:t=e
s=u.a
if(s.c!=null)s.l(new D.eHD(s,t))
$.cn0=new A.W(A.h0(0,0),0,!1)
A.JT()
case 3:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
D.eHD.prototype={
$0(){return this.a.Q=this.b},
$S:0}
D.eHG.prototype={
$0(){return this.a.K3(this.b)},
$S:0}
D.eHH.prototype={
$0(){var w=this.a
return w.K3(w.at.a.a)},
$S:0}
D.duV.prototype={
$1(d){var w
x.g.a(d)
w=d==null?B.bU:d
w=J.b8(w,new D.duW(),x.S)
w=A.B(w,w.$ti.k("aj.E"))
return w},
$S:437}
D.duW.prototype={
$1(d){var w=A.c8(A.v(d),null)
return w==null?0:w},
$S:315}
D.duT.prototype={
$1(d){var w,v
x.Y.a(d)
w=d==null?B.lD:d
v=x.S
return J.oO(w,new D.duU(),v,v)},
$S:2027}
D.duU.prototype={
$2(d,e){var w,v=A.c8(A.v(d),null)
if(v==null)v=0
w=A.c8(A.v(e),null)
if(w==null)w=0
return new A.bv(v,w,x.a)},
$S:2028}
D.duR.prototype={
$1(d){var w
if(d>=0){w=this.a.d
w===$&&A.d()
w=d<w.length}else w=!1
return w},
$S:30}
D.duS.prototype={
$1(d){var w,v=this.a
if(v.c==null)return
w=v.w
w===$&&A.d()
if(w.a!==0)v.l(new D.duQ(v))},
$S:10}
D.duQ.prototype={
$0(){return this.a.cGl()},
$S:0}
D.duJ.prototype={
$2(d,e){return new A.bv(""+d,e,x.W)},
$S:773}
D.duK.prototype={
$2(d,e){return new A.bv(""+d,e,x.W)},
$S:773}
D.duL.prototype={
$1(d){var w=this.a,v=w.x
v===$&&A.d()
if(!B.d.q(v,d)){w=w.e
w===$&&A.d()
w=!B.d.q(w,d)}else w=!1
return w},
$S:30}
D.duM.prototype={
$1(d){var w=this.a,v=w.e
v===$&&A.d()
if(!B.d.q(v,d)){w=w.f
w===$&&A.d()
w=!w.q(0,d)}else w=!1
return w},
$S:30}
D.duH.prototype={
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
D.duN.prototype={
$0(){return A.O9(this.a)},
$S:0}
D.duO.prototype={
$0(){return this.a.a.d_s('I just read the lesson "'+this.b.b+'". Can you explain it again with a live example from the markets right now?')},
$S:0}
D.duP.prototype={
$0(){this.a.a.rn()
A.O9(this.b)},
$S:0}
D.duI.prototype={
$0(){return this.a.cgn(this.b,this.c)},
$S:0};(function aliases(){var w=D.aPn.prototype
w.bBB=w.t})();(function installTearOffs(){var w=a._instance_0u,v=a._instance_1u
var u
w(u=D.aHp.prototype,"gclJ","clK",2)
w(u,"gcze","a3o",1)
w(D.aGm.prototype,"gcgq","Br",1)
w(u=D.aHq.prototype,"gcgp","Rh",1)
v(u,"gcgo","K3",5)})();(function inheritance(){var w=a.mixinHard,v=a.inheritMany,u=a.inherit
v(A.af,[D.atV,D.a_z,D.WX,D.aBh,D.aCA,D.XK,D.a0G])
v(A.ah,[D.aHp,D.beq,D.aGm,D.bf6,D.bhY,D.aPn,D.bl8])
v(A.fR,[D.eHB,D.eHC,D.eHa,D.eGZ,D.eHl,D.eH8,D.eHh,D.eGO,D.eGP,D.eGQ,D.eGM,D.eGS,D.eHt,D.eHu,D.eHp,D.eHr,D.eH3,D.eH5,D.eGK,D.eHy,D.cX6,D.cX4,D.cX5,D.cX3,D.cX7,D.cX9,D.cXb,D.fhS,D.fwr,D.fBR,D.fGb,D.fCX,D.fKe,D.e7V,D.e7r,D.e7B,D.e7y,D.e7G,D.e7E,D.e7v,D.e7p,D.e7K,D.e7z,D.e7R,D.e7M,D.e7O,D.e7N,D.e7D,D.d9Y,D.fH2,D.fKK,D.dil,D.fxg,D.eHM,D.eIC,D.eID,D.eIv,D.eHP,D.eHR,D.eHS,D.eId,D.eIs,D.eHV,D.eHX,D.eHJ,D.eHK,D.eIg,D.eHU,D.eIc,D.eI9,D.eIb,D.eHY,D.eI5,D.eHZ,D.eI_,D.eI0,D.eI1,D.eI2,D.eI3,D.eI4,D.eIl,D.eIn,D.eIq,D.eIh,D.eHE,D.duV,D.duW,D.duT,D.duR,D.duS,D.duL,D.duM])
v(A.hS,[D.eH_,D.eH1,D.eH9,D.eHc,D.eHd,D.eH0,D.eHj,D.eHk,D.eHm,D.eHn,D.eHf,D.eHg,D.eHA,D.eHv,D.eHw,D.eGR,D.eGN,D.eGT,D.eHo,D.eHs,D.eH4,D.eH2,D.eGW,D.eGV,D.eGX,D.eGU,D.eGL,D.eGY,D.eHz,D.eHx,D.eGI,D.eGH,D.cX_,D.cX2,D.cX1,D.cX0,D.e7s,D.e7C,D.e7I,D.e7J,D.e7T,D.e7U,D.e7q,D.e7H,D.e7F,D.e7u,D.e7t,D.e7S,D.e7Q,D.e7P,D.e7L,D.e7o,D.e7n,D.d9X,D.dik,D.eIA,D.eIz,D.eIB,D.eIy,D.eI6,D.eIf,D.eHQ,D.eHO,D.eHN,D.eIe,D.eHW,D.eHI,D.eHL,D.eIw,D.eIx,D.eHT,D.eI8,D.eI7,D.eIa,D.eIo,D.eIk,D.eIp,D.eIj,D.eIi,D.eIr,D.eHF,D.eHD,D.eHG,D.eHH,D.duQ,D.duH,D.duN,D.duO,D.duP,D.duI])
v(A.ie,[D.eHe,D.eHi,D.eH7,D.eH6,D.eHb,D.eGJ,D.cX8,D.cXa,D.e7A,D.e7x,D.e7w,D.fH3,D.eIt,D.eIm,D.duU,D.duJ,D.duK])
v(A.lK,[D.ber,D.bwm])
v(A.aE,[D.z3,D.Ro,D.cF,D.uv,D.a_F])
u(D.aHq,D.aPn)
w(D.aPn,A.ci)})()
A.i0(b.typeUniverse,JSON.parse('{"atV":{"af":[],"w":[]},"a_z":{"af":[],"w":[]},"WX":{"af":[],"w":[]},"aBh":{"af":[],"w":[]},"aCA":{"af":[],"w":[]},"XK":{"af":[],"w":[]},"a0G":{"af":[],"w":[]},"aHp":{"ah":["atV"]},"beq":{"ah":["a_z"]},"ber":{"aC":[]},"bwm":{"aC":[]},"aGm":{"ah":["WX"]},"bf6":{"ah":["aBh"]},"bhY":{"ah":["aCA"]},"aHq":{"ah":["XK"]},"bl8":{"ah":["a0G"]}}'))
var y={g:". Look over the trades, then press Start to turn it back on.",b:"The chart appears after the first reading."}
var x=(function rtii(){var w=A.ar
return{c:w("kT<u?>"),D:w("ED"),V:w("N<aa>"),O:w("N<u>"),o:w("N<ay<a9<n,@>?>>"),R:w("N<mZ>"),t:w("N<a9<n,@>>"),v:w("N<fZ>"),L:w("N<+(n,n)>"),s:w("N<n>"),p:w("N<w>"),r:w("N<cF>"),n:w("N<G>"),X:w("N<F>"),W:w("bv<n,F>"),a:w("bv<F,F>"),P:w("a9<n,@>"),f:w("a9<@,@>"),b:w("cn"),K:w("aE"),N:w("n"),E:w("X<uv>"),q:w("ky"),y:w("P"),z:w("@"),S:w("F"),i:w("ai<a9<n,@>>?"),g:w("ai<@>?"),h:w("a9<n,@>?"),Y:w("a9<@,@>?"),H:w("~")}})();(function constants(){var w=a.makeConstList
C.cQ=new A.u(1,0.12156862745098039,0.7490196078431373,0.592156862745098,B.q)
C.b5s=new A.kT(C.cQ,x.c)
C.i8=new A.u(1,0.08627450980392157,0.10588235294117647,0.1803921568627451,B.q)
C.c8=new A.u(1,0.5411764705882353,0.5607843137254902,0.6392156862745098,B.q)
C.t1=new A.u(1,0.0392156862745098,0.050980392156862744,0.09411764705882353,B.q)
C.t3=new A.u(1,0.9294117647058824,0.9372549019607843,0.9803921568627451,B.q)
C.c9=new A.u(1,0.5529411764705883,0.5843137254901961,0.6705882352941176,B.q)
C.mZ=new A.u(1,0.08627450980392157,0.09019607843137255,0.11372549019607843,B.q)
C.oF=new A.u(1,0.14901960784313725,0.17647058823529413,0.27058823529411763,B.q)
C.oK=new A.u(1,0.9058823529411765,0.9098039215686274,0.9411764705882353,B.q)
C.NU=new A.u(1,0.06666666666666667,0.08235294117647059,0.1607843137254902,B.q)
C.NY=new A.u(1,0.12549019607843137,0.14901960784313725,0.23137254901960785,B.q)
C.O0=new A.u(1,0.9725490196078431,0.9450980392156862,0.9490196078431372,B.q)
C.ml=new A.u(1,0.13725490196078433,0.16470588235294117,0.25882352941176473,B.q)
C.O7=new A.u(1,0.9372549019607843,0.9411764705882353,0.9607843137254902,B.q)
C.cy=new A.u(1,0.07058823529411765,0.0784313725490196,0.10980392156862745,B.q)
C.dn=new A.u(1,0.9411764705882353,0.33725490196078434,0.41568627450980394,B.q)
C.v1=new A.u(1,0.9568627450980393,0.9607843137254902,0.9803921568627451,B.q)
C.v2=new A.u(1,0.11372549019607843,0.13725490196078433,0.2196078431372549,B.q)
C.bEC=new A.R(0,0,0,7)
C.bF2=new A.R(0,4,0,12)
C.bGf=new A.R(12,8,12,6)
C.bGp=new A.R(13,7,13,7)
C.bHe=new A.R(16,10,16,30)
C.ao8=new A.R(16,4,16,40)
C.bHC=new A.R(16,6,16,16)
C.aod=new A.R(16,6,16,40)
C.bHK=new A.R(16,8,16,40)
C.aoW=new A.R(4,0,4,8)
C.arm=new A.a_(62840,"MaterialIcons",!1)
C.bVP=new A.a_(983325,"MaterialIcons",!1)
C.ask=new A.a_(983372,"MaterialIcons",!1)
C.bXp=new A.ae(C.ask,18,C.cQ,null,null,null)
C.bXR=new A.ae(B.xk,16,null,null,null,null)
C.c_V=new A.ae(B.pS,7,C.cQ,null,null,null)
C.c0C=new A.ae(B.ea,18,C.cQ,null,null,null)
C.c0S=new A.ae(B.rj,20,B.c,null,null,null)
C.c35=new A.ae(B.xk,18,null,null,null,null)
C.c58=new A.ae(B.ID,18,null,null,null,null)
C.c5c=new A.ae(B.xn,null,C.dn,null,null,null)
C.c5l=new A.ae(B.ko,18,C.cQ,null,null,null)
C.c6B=new A.ae(B.Ih,18,C.dn,null,null,null)
C.cNX=w([B.dD,B.fy,B.iq],x.O)
C.auY=new A.a8(B.ay,B.aD,B.x,C.cNX,null,null)
C.aCN=w([C.dn,B.as,C.cQ],x.O)
C.caB=new A.a8(B.a5,B.a9,B.x,C.aCN,null,null)
C.cba=new A.a8(B.a5,B.a9,B.x,C.aCN,B.m5,null)
C.dqI=w([B.dD,B.iq,B.bB],x.O)
C.cee=new A.a8(B.ay,B.aD,B.x,C.dqI,null,null)
C.co6=w([12,24,48],x.X)
C.d6h=w(["All","Forex","Stocks","Crypto"],x.s)
C.dcv=w(["Which market looks strongest right now?","Is Bitcoin going up or down right now?","Why has the agent not bought yet?","Explain RSI like I am new","How do I know when to sell?","What does bullish and bearish mean?"],x.s)
C.f8_=new A.y("The idea","Trading means buying something and selling it later. You make money when you sell for more than you paid, and you lose money when you sell for less. That is all a trade is.")
C.f_z=new A.y("Why prices move","Every price is set by buyers and sellers. When more people want to buy than sell, the price goes up. When more want to sell, it goes down. A chart is simply a picture of that tug of war over time.")
C.f0w=new A.y("Nobody knows the future","No person, app or AI can know for sure where a price goes next. Good traders do not guess. They follow clear rules, keep losses small, and let the winners pay for the losers.")
C.f7I=new A.y("Why pretend money first","This agent uses Alpaca paper money: real prices, fake dollars. You can learn every step, make mistakes and see real results without risking a cent. Professionals practise this way too.")
C.cZu=w([C.f8_,C.f_z,C.f0w,C.f7I],x.L)
C.daL=w(["When you buy","When you sell for more than you paid","When the market opens"],x.s)
C.b3s=new D.cF("When do you make money on a trade?",C.daL,1,"Profit only exists after you sell higher than you bought.")
C.d56=w(["More buyers than sellers","The app","The time of day"],x.s)
C.b3n=new D.cF("What makes a price go up?",C.d56,0,"More people wanting to buy pushes the price up.")
C.dyK=w([C.b3s,C.b3n],x.r)
C.hNZ=new D.uv("basics","What trading really is","Buyers, sellers and why prices move",4,P.l8,B.as,"basics",C.cZu,C.dyK)
C.bWs=new A.a_(983780,"MaterialIcons",!1)
C.eRg=new A.y("One candle = one time slice","On this chart every candle is 5 minutes. It shows four prices: where it started (open), where it ended (close), the highest point (high) and the lowest point (low).")
C.eYV=new A.y("The colours","Green candle: the price closed HIGHER than it opened, buyers won those 5 minutes. Yellow candle: it closed LOWER, sellers won. Many apps use red instead of yellow, it means the same thing.")
C.f9c=new A.y("Body and wicks","The thick part (the body) runs from open to close. The thin lines (the wicks) show how far the price went up or down before coming back. A long wick on top means buyers pushed up but sellers pushed it back down.")
C.f6f=new A.y("Reading a row of candles","Several green candles in a row, each closing higher, show buyers in control. Many yellow ones closing lower show sellers in control. Candles that go up and down with no direction mean the market is undecided.")
C.cfH=w([C.eRg,C.eYV,C.f9c,C.f6f],x.L)
C.daS=w(["It closed higher than it opened","It is a good time to buy","The market is closed"],x.s)
C.b3q=new D.cF("A green candle means...",C.daS,0,"Colour only tells you if it closed above or below where it opened.")
C.cGC=w(["1 day","5 minutes","1 hour"],x.s)
C.b3f=new D.cF("On this chart one candle covers...",C.cGC,1,"The agent works with 5-minute candles.")
C.dhb=w([C.b3q,C.b3f],x.r)
C.hO2=new D.uv("candles","Reading candles","Open, close, high and low in one shape",5,C.bWs,C.cQ,"candles",C.cfH,C.dhb)
C.f1C=new A.y("Bullish","An uptrend. The price makes higher highs and higher lows, like climbing stairs. Buyers are in control. Traders call this bullish (a bull attacks upward with its horns).")
C.fa7=new A.y("Bearish","A downtrend. Lower highs and lower lows, like walking down stairs. Sellers are in control. This is bearish (a bear swipes downward).")
C.eSx=new A.y("Sideways","The price bounces between a ceiling and a floor with no clear direction. Most trading signals fail here, so the best move is often to wait.")
C.f4o=new A.y("The golden rule","Trade WITH the trend, not against it. Buying in a downtrend because it looks cheap is how most beginners lose. The agent only buys when the trend turns up.")
C.d8U=w([C.f1C,C.fa7,C.eSx,C.f4o],x.L)
C.d70=w(["Bearish","Bullish","Sideways"],x.s)
C.b3r=new D.cF("Higher highs and higher lows means...",C.d70,1,"Climbing stairs = uptrend = bullish.")
C.db2=w(["Work best","Often fail","Are always right"],x.s)
C.b3k=new D.cF("In a sideways market, signals...",C.db2,1,"With no direction, signals flip back and forth.")
C.dzg=w([C.b3r,C.b3k],x.r)
C.hNV=new D.uv("trend","Trends: up, down, sideways","Bullish, bearish and how to tell",5,B.nj,B.cf,"trend",C.d8U,C.dzg)
C.fb8=new A.y("What an average line is","A moving average is the average closing price of the last few candles, drawn as a smooth line. It hides the small wiggles so you can see the real direction.")
C.eQq=new A.y("Fast line (pink)","The average of the last 9 candles, about 45 minutes. It reacts quickly to new moves.")
C.eS2=new A.y("Slow line (purple)","The average of the last 21 candles, about 1 hour 45 minutes. It moves slowly and shows the bigger direction.")
C.f2E=new A.y("How to read them","Fast line ABOVE slow line: recent prices are higher than older ones, the trend is up. Fast line BELOW: the trend is down. When the price itself is above both lines, buyers are strong.")
C.dsA=w([C.fb8,C.eQq,C.eS2,C.f2E],x.L)
C.dI9=w(["45 minutes","1 day","1 week"],x.s)
C.b3t=new D.cF("The pink fast line averages about...",C.dI9,0,"9 candles x 5 minutes = 45 minutes.")
C.dDG=w(["Trend is up","Trend is down","Market closed"],x.s)
C.b3m=new D.cF("Fast line above slow line means...",C.dDG,0,"Recent prices are higher than older prices.")
C.dom=w([C.b3t,C.b3m],x.r)
C.hNX=new D.uv("ma","Moving averages","The pink fast line and the purple slow line",6,M.xs,B.bB,"ma",C.dsA,C.dom)
C.f34=new A.y("Buy signal","When the fast line crosses UP through the slow line, the short-term trend has just turned up. That moment is the buy signal. The agent buys at that point ($100 of the stock or coin), but only if the big trend is rising too. It watches 10 stocks on weekdays and 4 coins on weekends at the same time and buys whichever gives a valid entry first.")
C.f_I=new A.y("Sell signal","When the fast line crosses back DOWN through the slow line, the up move is over. That is the sell signal, and the agent closes the trade.")
C.f4z=new A.y("Why it must be fresh","If the cross happened an hour ago, the easy part of the move may be gone. Buying late means buying high. So the agent only acts on a cross that happened since its last check, never on an old one.")
C.f6y=new A.y("The weakness","In sideways markets the lines cross back and forth and give false signals. That is why every trade also has a stop loss: when a signal is wrong, the loss stays small.")
C.czF=w([C.f34,C.f_I,C.f4z,C.f6y],x.L)
C.duM=w(["Crosses above the slow line","Crosses below the slow line","Is flat"],x.s)
C.b3l=new D.cF("The buy signal is when the fast line...",C.duM,0,"Crossing up = trend turning up.")
C.dH4=w(["To avoid buying late","The app is slow","Old crosses are illegal"],x.s)
C.b3d=new D.cF("Why does the agent skip old crosses?",C.dH4,0,"A late entry means buying after most of the move.")
C.d5d=w([C.b3l,C.b3d],x.r)
C.hNW=new D.uv("cross","The crossover signal","Exactly when the agent buys and sells",6,B.ars,B.b_,"cross",C.czF,C.d5d)
C.bVY=new A.a_(983477,"MaterialIcons",!1)
C.f47=new A.y("What RSI measures","RSI (Relative Strength Index) compares the size of recent rises with recent falls and gives a number from 0 to 100. Above 50, rises have been bigger. Below 50, falls have been bigger.")
C.eUe=new A.y("Above 70: stretched","The price rose very fast. It is called overbought. It often pauses or pulls back, so buying right then is risky. It can still keep rising in a strong trend.")
C.f4e=new A.y("Below 30: oversold","The price fell very fast. It often bounces, but in a strong downtrend it can stay low. Oversold is not a reason to buy on its own.")
C.f3n=new A.y("How to use it","Use RSI as a second opinion. A buy signal with RSI between 50 and 70 is healthy. A buy signal with RSI above 75 means the move may already be tired.")
C.d5C=w([C.f47,C.eUe,C.f4e,C.f3n],x.L)
C.dh2=w(["Oversold","Overbought","Neutral"],x.s)
C.b3c=new D.cF("RSI above 70 is called...",C.dh2,1,"It rose fast and is stretched.")
C.b3p=new D.cF("RSI below 30 always means buy.",O.Tg,1,"Falling markets can stay oversold. It is a hint, not a signal.")
C.dI1=w([C.b3c,C.b3p],x.r)
C.hO1=new D.uv("rsi","RSI: momentum","Is the move strong, stretched or tired?",5,C.bVY,B.cF,"rsi",C.d5C,C.dI1)
C.eVF=new A.y("Decide the exit before you enter","Every agent trade has two exits set before it starts, in dollars: take profit when the trade is up $50, stop loss when it is down $50.")
C.eYP=new A.y("Win the same as you risk","The win (+$50) is the same size as the loss (-$50). So every win cancels one loss: winning 5 out of 10 trades breaks even. More than 5 out of 10 is profit, fewer is a loss. The win rate on the agent screen shows which side it is on.")
C.eLl=new A.y("Size matters most","The agent uses $100 per trade even though the paper account has $100,000. Small trades mean no single mistake can hurt much. Pros rarely risk more than 1 to 2 percent of their money on one trade.")
C.f0Y=new A.y("Never move the stop","The biggest beginner mistake is hoping a losing trade comes back and moving the stop lower. Small losses are the cost of doing business. Big losses end accounts.")
C.dC5=w([C.eVF,C.eYP,C.eLl,C.f0Y],x.L)
C.csG=w(["5 in 10 trades","9 in 10 trades","Every trade"],x.s)
C.b3i=new D.cF("With +$50 wins and -$50 losses, to break even you must win about...",C.csG,0,"Each win (+50) cancels one loss (-50).")
C.dfA=w(["Move the stop lower","Let the stop loss work","Buy more"],x.s)
C.b3g=new D.cF("A trade is losing. The best move is...",C.dfA,1,"The stop exists to keep losses small.")
C.dlg=w([C.b3i,C.b3g],x.r)
C.hNU=new D.uv("risk","Risk: stop loss and take profit","Why small losses beat big wins",7,B.rk,C.dn,"risk",C.dC5,C.dlg)
C.bWy=new A.a_(983848,"MaterialIcons",!1)
C.eUQ=new A.y("Bad days happen","Some days every signal fails. The danger is trying to win it back by trading more and bigger. That is called revenge trading and it is how small losses become big ones.")
C.f02=new A.y("Daily stop: $50","If the day loses $50, the agent makes no more buys until tomorrow. It walks away and lets the market calm down.")
C.f7e=new A.y("Total brake: $100","If total losses reach $100, the agent pauses completely until you review what happened and turn it back on. Reviewing is the most important part of learning.")
C.eTe=new A.y("Your own rules","When you trade yourself, set the same kind of limits before the day starts, and keep them even when it hurts.")
C.dhu=w([C.eUQ,C.f02,C.f7e,C.eTe],x.L)
C.dkd=w(["Doubles the next trade","Stops buying for the day","Sells everything forever"],x.s)
C.b3h=new D.cF("After losing $50 in a day, the agent...",C.dkd,1,"The daily stop prevents revenge trading.")
C.dhc=w([C.b3h],x.r)
C.hNY=new D.uv("brakes","Daily stop and total brake","Protecting your account from bad days",4,C.bWy,E.j_,"brakes",C.dhu,C.dhc)
C.aj6=new A.u(1,0.3843137254901961,0.49411764705882355,0.9176470588235294,B.q)
C.eZN=new A.y("Stocks and funds","SPY, QQQ, Apple, Microsoft, Nvidia, Tesla and Amazon trade on US market days from 9:30 AM to 4:00 PM Eastern Time. Closed at night, on weekends and on holidays.")
C.f_F=new A.y("Overnight gaps","News can come out while the stock market is closed, so the next morning it can open far higher or lower. That is why the agent sells stocks by 3:55 PM and never holds them overnight.")
C.eXK=new A.y("Crypto","Bitcoin, Ethereum and Solana trade all day, every day, including weekends. More hours means more chances, but crypto also moves faster and harder, so stops get hit more often.")
C.f60=new A.y("Funds vs single companies","SPY holds the 500 biggest US companies and QQQ holds 100 big tech companies, so they move more calmly. One company like Tesla can jump a lot on its own news.")
C.cTm=w([C.eZN,C.f_F,C.eXK,C.f60],x.L)
C.d8T=w(["Only weekdays","All day, every day","Only at night"],x.s)
C.b3o=new D.cF("When can Bitcoin be traded?",C.d8T,1,"Crypto never closes.")
C.d5R=w(["To avoid overnight gaps","Stocks expire","It is the law"],x.s)
C.b3e=new D.cF("Why sell stocks before the close?",C.d5R,0,"Overnight news can make the price jump at the open.")
C.dpo=w([C.b3o,C.b3e],x.r)
C.hO0=new D.uv("hours","Stocks vs crypto","Market hours, weekends and jumpiness",5,B.jZ,C.aj6,"hours",C.cTm,C.dpo)
C.f4A=new A.y("Judge many trades, not one","One trade tells you nothing. Luck decides single trades. After 20 to 50 trades you start to see if a method really works. That is why the plan is 2 to 4 weeks of paper trading.")
C.ePL=new A.y("Keep a journal","For each trade write: why you bought, where your stop and target were, what happened, and what you learned. The Pretend trades list on the main screen is the agent's journal.")
C.eQj=new A.y("Follow the rules exactly","The point of the agent is to follow rules perfectly, with no fear and no greed. Check that it did. If it ever breaks a rule, that is a bug to fix before real money.")
C.eXL=new A.y("Before real money","Real money comes only after a long paper test with a positive result, a full review, and money you can truly afford to lose. Never borrow to trade.")
C.dxT=w([C.f4A,C.ePL,C.eQj,C.eXL],x.L)
C.dEB=w(["1","3","20 or more"],x.s)
C.b3b=new D.cF("How many trades before judging a method?",C.dEB,2,"Small samples are mostly luck.")
C.dHz=w(["Borrowed","Money you can afford to lose","Rent money"],x.s)
C.b3j=new D.cF("Money for trading should be...",C.dHz,1,"Never trade money you need.")
C.dHX=w([C.b3b,C.b3j],x.r)
C.hO_=new D.uv("practice","Practising like a pro","Journals, patience and judging results",5,B.m0,B.bj,"practice",C.dxT,C.dHX)
C.Ei=w([C.hNZ,C.hO2,C.hNV,C.hNX,C.hNW,C.hO1,C.hNU,C.hNY,C.hO0,C.hO_],A.ar("N<uv>"))
C.eui={basics:0,candles:1,trend:2,ma:3,cross:4,rsi:5,risk:6,brakes:7,hours:8,practice:9}
C.dbE=w(["A $4 profit","A $4 loss","Nothing"],x.s)
C.hS_=new D.cF("You buy at $100 and sell at $96. What happened?",C.dbE,1,"Selling lower than you bought is a loss.")
C.duK=w(["The future price","How the price moved over time","Who is buying"],x.s)
C.hRY=new D.cF("What does a price chart show?",C.duK,1,"A chart is a record of past prices.")
C.dGf=w(["Yes, experts can","Yes, an AI can","No, nobody can"],x.s)
C.hS7=new D.cF("Can anyone know for sure where a price goes next?",C.dGf,2,"Markets are uncertain; rules and stops manage that.")
C.ddE=w(["Trading with real prices and pretend money","Trading newspapers","Trading on paper forms"],x.s)
C.hSA=new D.cF("What is paper trading?",C.ddE,0,"Real prices, fake dollars: practice without risk.")
C.dxW=w(["It is faster","To learn without risking real money","Pretend money earns more"],x.s)
C.hS2=new D.cF("Why practise with pretend money first?",C.dxW,1,"Mistakes cost nothing while you learn.")
C.csA=w(["Rise","Fall","Stay frozen"],x.s)
C.hS8=new D.cF("More people want to sell than buy. The price will most likely...",C.csA,1,"Selling pressure pushes prices down.")
C.dgR=w(["Clear rules and small losses","Lucky guesses","Tips from friends"],x.s)
C.hTD=new D.cF("Good traders mostly rely on...",C.dgR,0,"Rules and risk control beat guessing.")
C.ceJ=w(["$45","$55","$60"],x.s)
C.hT5=new D.cF("You buy $50 of something and it rises 10%. It is now worth...",C.ceJ,1,"10% of $50 is $5, so $55.")
C.cY3=w(["Buy","Sell","Look at the chart"],x.s)
C.hSp=new D.cF("A trade is only finished when you...",C.cY3,1,"Until you sell, a gain or loss is not locked in.")
C.dFt=w(["Good traders never lose","Every trader has losing trades","Losses only happen to beginners"],x.s)
C.hSk=new D.cF("Which is true about losses?",C.dFt,1,"Losing trades are normal; keeping them small is the skill.")
C.cQX=w(["Real dollars are spent","No real money is at risk","It trades in secret"],x.s)
C.hTd=new D.cF("The agent uses Alpaca paper money. That means...",C.cQX,1,"Paper accounts use fake dollars.")
C.dqr=w(["The government","Buyers and sellers agreeing","The app makers"],x.s)
C.hRX=new D.cF("A price is set by...",C.dqr,1,"Each trade is a buyer and seller agreeing on a price.")
C.dee=w([C.b3s,C.b3n,C.hS_,C.hRY,C.hS7,C.hSA,C.hS2,C.hS8,C.hTD,C.hT5,C.hSp,C.hSk,C.hTd,C.hRX],x.r)
C.daw=w(["It closed lower than it opened","It closed higher","Nothing traded"],x.s)
C.hTn=new D.cF("A yellow (or red) candle means...",C.daw,0,"Sellers won that time slice.")
C.deR=w(["Wick","Body","Tail light"],x.s)
C.hS9=new D.cF("The thick part of a candle is called the...",C.deR,1,"The body runs from open to close.")
C.dnp=w(["Wicks","Bodies","Averages"],x.s)
C.hSU=new D.cF("The thin lines above and below are the...",C.dnp,0,"Wicks show the high and the low.")
C.dei=w(["Open","Close","Highest price"],x.s)
C.hTf=new D.cF("The top of the upper wick shows the...",C.dei,2,"The tip of the upper wick is the high.")
C.dIo=w(["Lowest price","Open","Average"],x.s)
C.hTw=new D.cF("The bottom of the lower wick shows the...",C.dIo,0,"The tip of the lower wick is the low.")
C.dgZ=w(["One","Two","Four"],x.s)
C.hT6=new D.cF("How many prices does one candle show?",C.dgZ,2,"Open, high, low and close.")
C.dsl=w(["Buyers pushed up but sellers pushed it back down","The price never moved","The market closed early"],x.s)
C.hT8=new D.cF("A long upper wick means...",C.dsl,0,"The price went high, then fell back before the close.")
C.d5m=w(["Sellers in control","Buyers in control","No direction"],x.s)
C.hSQ=new D.cF("Many green candles in a row, each closing higher, show...",C.d5m,1,"Rising closes mean buyers are winning.")
C.d52=w(["A strong uptrend","The market is undecided","A crash"],x.s)
C.hTl=new D.cF("Candles going up and down with no direction mean...",C.d52,1,"Mixed candles show indecision.")
C.daU=w(["Green","Yellow","Grey"],x.s)
C.hT4=new D.cF("A candle opened at 10 and closed at 12. Its colour here is...",C.daU,0,"It closed above the open.")
C.dJ_=w(["5 candles","12 candles","60 candles"],x.s)
C.hSb=new D.cF("In 1 hour of 5-minute candles there are...",C.dJ_,1,"60 minutes divided by 5 is 12.")
C.dr5=w(["The first price in that time","The last price in that time","The highest price"],x.s)
C.hTF=new D.cF('The "close" of a candle is...',C.dr5,1,"Close is where the price ended.")
C.dy8=w([C.b3q,C.b3f,C.hTn,C.hS9,C.hSU,C.hTf,C.hTw,C.hT6,C.hT8,C.hSQ,C.hTl,C.hT4,C.hSb,C.hTF],x.r)
C.d7f=w(["Bullish","Bearish","Sideways"],x.s)
C.hTh=new D.cF("Lower highs and lower lows means...",C.d7f,1,"Walking down stairs = downtrend = bearish.")
C.dmQ=w(["Rise","Fall","Stay the same"],x.s)
C.hTK=new D.cF('"Bullish" means you expect prices to...',C.dmQ,0,"A bull attacks upward.")
C.djk=w(["Rise","Fall","Double"],x.s)
C.hTI=new D.cF('"Bearish" means you expect prices to...',C.djk,1,"A bear swipes downward.")
C.dn_=w(["Trade against the trend","Trade with the trend","Ignore the trend"],x.s)
C.hSY=new D.cF("The golden rule of trends is...",C.dn_,1,"Going with the trend wins more often.")
C.d8H=w(["A safe plan","A common beginner mistake","What the agent does"],x.s)
C.hTq=new D.cF("Buying in a downtrend because it looks cheap is...",C.d8H,1,"Cheap can get cheaper.")
C.djO=w(["Sideways","Bullish","Bearish"],x.s)
C.hSt=new D.cF("A price bouncing between a ceiling and a floor is...",C.djO,0,"No higher highs or lower lows: sideways.")
C.dBo=w(["Trade a lot","Wait","Borrow money"],x.s)
C.hSI=new D.cF("In a sideways market the best move is often to...",C.dBo,1,"Patience avoids false signals.")
C.dlE=w(["Up","Down","Flat"],x.s)
C.hSL=new D.cF("When sellers are in control, the trend is...",C.dlE,1,"Sellers push prices down.")
C.dlB=w(["Stairs going up","Stairs going down","A flat road"],x.s)
C.hRZ=new D.cF("Which picture fits an uptrend?",C.dlB,0,"Each step a bit higher.")
C.dBa=w(["Turns down","Turns up","Is sideways"],x.s)
C.hT2=new D.cF("The agent only buys when the trend...",C.dBa,1,"It buys the start of up moves.")
C.dzz=w(["Getting lower","Getting higher","Gone"],x.s)
C.hSf=new D.cF("A trend changes from bearish to bullish. Lows are now...",C.dzz,1,"Higher lows are the first sign of an uptrend.")
C.dqP=w(["Strong uptrend","Strong downtrend","Sideways"],x.s)
C.hTb=new D.cF("Most trading signals fail in which market?",C.dqP,2,"Without direction, signals flip constantly.")
C.d8F=w([C.b3r,C.b3k,C.hTh,C.hTK,C.hTI,C.hSY,C.hTq,C.hSt,C.hSI,C.hSL,C.hRZ,C.hT2,C.hSf,C.hTb],x.r)
C.dgQ=w(["The average closing price of recent candles","The highest price ever","A news feed"],x.s)
C.hTx=new D.cF("A moving average is...",C.dgQ,0,"It smooths prices into a line.")
C.dGU=w(["To hide small wiggles and show direction","To predict news","To make charts colourful"],x.s)
C.hTz=new D.cF("Why use a moving average?",C.dGU,0,"It filters noise.")
C.ddl=w(["9","21","100"],x.s)
C.hSV=new D.cF("The purple slow line averages how many candles?",C.ddl,1,"21 candles, about 1 hour 45 minutes.")
C.dra=w(["The fast (pink) line","The slow (purple) line","Both the same"],x.s)
C.hSX=new D.cF("Which line reacts faster to new moves?",C.dra,0,"Fewer candles means quicker reaction.")
C.dH9=w(["Trend is up","Trend is down","Buy now"],x.s)
C.hSJ=new D.cF("Fast line below slow line means...",C.dH9,1,"Recent prices are lower than older ones.")
C.d9h=w(["Buyers are strong","Sellers are strong","Nothing"],x.s)
C.hS1=new D.cF("The price is above both lines. That shows...",C.d9h,0,"Price above its averages = strength.")
C.d5b=w(["The bigger direction","Only the last candle","Tomorrow price"],x.s)
C.hTg=new D.cF("The slow line shows...",C.d5b,0,"It changes slowly and shows the wider trend.")
C.d1v=w(["15 minutes","1 hour 45 minutes","1 week"],x.s)
C.hSj=new D.cF("The slow line covers about...",C.d1v,1,"21 x 5 minutes = 105 minutes.")
C.cog=w(["Past prices","Future prices","Opinions"],x.s)
C.hTm=new D.cF("Moving averages are based on...",C.cog,0,"They average prices that already happened.")
C.d5A=w(["Lag behind the price","Lead the price","Never move"],x.s)
C.hTA=new D.cF("Because they use past prices, moving averages...",C.d5A,0,"Averages are always a little late.")
C.dq4=w(["A bullish picture","A bearish picture","A closed market"],x.s)
C.hSK=new D.cF("Both lines pointing up and the price above them is...",C.dq4,0,"Everything points up.")
C.dfz=w(["Trending strongly","Sideways","Crashing"],x.s)
C.hTJ=new D.cF("When the two lines are tangled together, the market is often...",C.dfz,1,"Tangled lines mean no clear direction.")
C.dAW=w([C.b3t,C.b3m,C.hTx,C.hTz,C.hSV,C.hSX,C.hSJ,C.hS1,C.hTg,C.hSj,C.hTm,C.hTA,C.hSK,C.hTJ],x.r)
C.dgO=w(["Crosses below the slow line","Crosses above the slow line","Touches the price"],x.s)
C.hRW=new D.cF("The sell signal is when the fast line...",C.dgO,0,"Crossing down = the up move is over.")
C.dGc=w(["About $100","$5,000","All the money"],x.s)
C.hS6=new D.cF("How much does the agent put into one trade?",C.dGc,0,"Every pretend trade is $100 of the stock (weekdays) or coin (weekends) itself.")
C.dAP=w(["A fresh signal","An old signal","Not a signal at all ever"],x.s)
C.hTr=new D.cF("A cross that happened an hour ago is...",C.dAP,1,"Fresh means since the last check.")
C.csJ=w(["Sideways markets","Strong trends","Closed markets"],x.s)
C.hTv=new D.cF("Crossovers give many false signals in...",C.csJ,0,"Lines cross back and forth with no direction.")
C.dpd=w(["The stop loss","Buying more","Ignoring it"],x.s)
C.hSi=new D.cF("What protects you when a signal is wrong?",C.dpd,0,"The stop keeps the loss small.")
C.dj5=w(["Just changed direction","Ended forever","Doubled"],x.s)
C.hTG=new D.cF("The crossover tells you the short-term trend has...",C.dj5,0,"A cross marks a turn.")
C.d2u=w(["1 second","5 minutes","1 day"],x.s)
C.hTy=new D.cF("The agent checks every market on the list every...",C.d2u,1,"The automatic check runs every 5 minutes and looks at all of the day markets at once.")
C.d6E=w(["Buying higher, with less room to rise","A guaranteed win","A cheaper price"],x.s)
C.hSc=new D.cF("Buying late in a move usually means...",C.d6E,0,"Most of the move is already gone.")
C.duh=w(["Trust it more","Trust it less","Bet bigger"],x.s)
C.hTp=new D.cF("If a signal fails often on one market, you should...",C.duh,1,"Check how often it worked before trusting it.")
C.d6y=w(["Buys more","Sells","Waits a week"],x.s)
C.hT7=new D.cF("When the agent holds a trade and the fast line crosses down, it...",C.d6y,1,"The sell signal closes the trade.")
C.cNS=w(["Yes","No","Only on Fridays"],x.s)
C.hSN=new D.cF("Does a buy signal guarantee the price will rise?",C.cNS,1,"Signals improve the odds; they never guarantee.")
C.da8=w(["Holds no other position","Already holds three","Has lost $100"],x.s)
C.hTP=new D.cF("The agent buys on a signal only if it...",C.da8,0,"One position at a time.")
C.de4=w([C.b3l,C.b3d,C.hRW,C.hS6,C.hTr,C.hTv,C.hSi,C.hTG,C.hTy,C.hSc,C.hTp,C.hT7,C.hSN,C.hTP],x.r)
C.dlq=w(["0 to 100","1 to 10","-50 to 50"],x.s)
C.hTt=new D.cF("RSI is a number from...",C.dlq,0,"It always sits between 0 and 100.")
C.dwk=w(["Rises were bigger than falls","Falls were bigger than rises","Nothing moved"],x.s)
C.hSG=new D.cF("RSI above 50 means recent...",C.dwk,0,"Above 50 = buyers stronger lately.")
C.dh1=w(["Overbought","Oversold","Balanced"],x.s)
C.hSP=new D.cF("RSI below 30 is called...",C.dh1,1,"It fell fast and is stretched downward.")
C.dtX=w(["Momentum: strength of recent moves","The company profit","Trading volume"],x.s)
C.hT_=new D.cF("RSI measures...",C.dtX,0,"It compares gains with losses.")
C.d6l=w(["Healthy","Very stretched","Impossible"],x.s)
C.hSr=new D.cF("A buy signal with RSI 60 is...",C.d6l,0,"Between 50 and 70 is healthy strength.")
C.de_=w(["Just starting","Tired and stretched","Guaranteed"],x.s)
C.hS3=new D.cF("A buy signal with RSI 80 means the move may be...",C.de_,1,"Very high RSI often comes before a pause.")
C.dl4=w(["As a second opinion","As the only reason to trade","Never"],x.s)
C.hSy=new D.cF("Best way to use RSI?",C.dl4,0,"Combine it with the trend signal.")
C.dvz=w(["For a while","Never","Only one candle"],x.s)
C.hSZ=new D.cF("In a strong uptrend, RSI can stay above 70...",C.dvz,0,"Strong trends can stay overbought.")
C.dqf=w(["Balanced buyers and sellers","Market closed","Crash coming"],x.s)
C.hT0=new D.cF("RSI of 50 means...",C.dqf,0,"50 is the middle.")
C.d9f=w(["Rose very fast","Fell very fast","Did not move"],x.s)
C.hTB=new D.cF("Overbought means prices...",C.d9f,0,"Overbought = rose fast.")
C.cQ2=w(["Stay oversold and keep falling","Only go up","Freeze the market"],x.s)
C.hSB=new D.cF("Oversold in a strong downtrend can...",C.cQ2,0,"Oversold is not a reason to buy on its own.")
C.cM8=w(["Sellers a little stronger","Extreme buying","Extreme selling"],x.s)
C.hSR=new D.cF("RSI 45 suggests...",C.cM8,0,"Just below 50: sellers slightly ahead.")
C.dl2=w([C.b3c,C.b3p,C.hTt,C.hSG,C.hSP,C.hT_,C.hSr,C.hS3,C.hSy,C.hSZ,C.hT0,C.hTB,C.hSB,C.hSR],x.r)
C.dIe=w(["When the trade is up $50","When the trade is up $5","Never"],x.s)
C.hTC=new D.cF("The agent take profit is...",C.dIe,0,"It sells when the trade is up $50.")
C.dAs=w(["When the trade is down $50","When the trade is down $500","It has none"],x.s)
C.hTi=new D.cF("The agent stop loss is...",C.dAs,0,"It sells when the trade is down $50.")
C.doV=w(["A planned exit that limits a loss","A way to stop the app","A bonus"],x.s)
C.hSh=new D.cF("A stop loss is...",C.doV,0,"It sells automatically when the loss reaches a set size.")
C.dex=w(["Before entering the trade","After it goes wrong","Never"],x.s)
C.hSq=new D.cF("When should you decide your exits?",C.dex,0,"Plan exits first, while calm.")
C.dkQ=w(["So no single mistake hurts much","It is the maximum allowed","To lose faster"],x.s)
C.hSz=new D.cF("Why does the agent use only about $100 per trade?",C.dkQ,0,"Small size protects the account.")
C.dHT=w(["1 to 2 percent","50 percent","100 percent"],x.s)
C.hTc=new D.cF("Pros rarely risk more than about ... of their money on one trade.",C.dHT,0,"Small risk per trade keeps them in the game.")
C.diG=w(["$0","+$100","-$100"],x.s)
C.hTo=new D.cF("Win $50 twice and lose $50 twice. Your total is...",C.diG,0,"50 + 50 - 50 - 50 = 0.")
C.dsU=w(["Profitable","Break even","A loss"],x.s)
C.hTj=new D.cF("Winning half the time with 2 to 1 reward to risk is...",C.dsU,0,"Each win is twice each loss.")
C.deF=w(["Turns small losses into big ones","Guarantees a win","Has no effect"],x.s)
C.hSF=new D.cF('Moving your stop lower to "give it room" usually...',C.deF,0,"Hope is not a plan.")
C.d7o=w(["1 to 1","1 to 2","10 to 1"],x.s)
C.hSM=new D.cF("Reward to risk of the agent is...",C.d7o,0,"$50 target vs $50 stop: the same size.")
C.csc=w(["Can end an account","Are rare","Do not matter"],x.s)
C.hTN=new D.cF("Big losses are dangerous because they...",C.csc,0,"A 50% loss needs a 100% gain to recover.")
C.cVt=w(["Selling when the planned gain is reached","Buying more","Holding forever"],x.s)
C.hSx=new D.cF("Take profit means...",C.cVt,0,"It locks in the win.")
C.dcR=w([C.b3i,C.b3g,C.hTC,C.hTi,C.hSh,C.hSq,C.hSz,C.hTc,C.hTo,C.hTj,C.hSF,C.hSM,C.hTN,C.hSx],x.r)
C.dwq=w(["Trading more to win losses back","Taking a break","Following rules"],x.s)
C.hSW=new D.cF("Revenge trading means...",C.dwq,0,"It usually makes losses bigger.")
C.d75=w(["$100 total losses","$25 total losses","Never"],x.s)
C.hSs=new D.cF("The total brake pauses the agent at...",C.d75,0,"$100 total demo losses.")
C.d6F=w(["An admin, after a review","It turns itself on","Nobody ever"],x.s)
C.hSS=new D.cF("Who turns the agent back on after the $100 brake?",C.d6F,0,"A human review comes first.")
C.ceK=w(["$50","$1","$500"],x.s)
C.hSa=new D.cF("The daily stop is...",C.ceK,0,"If the day loses $50, no more buys.")
C.d1B=w(["Stop and reset","Trade bigger","Ignore your limits"],x.s)
C.hTu=new D.cF("Bad days happen. The best response is...",C.d1B,0,"Walking away protects your money.")
C.dnC=w(["Before the day starts","After you lose","Only on weekends"],x.s)
C.hS4=new D.cF("Limits should be set...",C.dnC,0,"Decide limits while calm.")
C.dCL=w(["Reviewing what happened","Forgetting it","Blaming the market"],x.s)
C.hSH=new D.cF("The most important part of learning after a bad run is...",C.dCL,0,"Reviews turn losses into lessons.")
C.cQt=w(["Yes, exits still work","No, it freezes","It buys more instead"],x.s)
C.hT9=new D.cF("After the daily stop, can the agent still sell an open trade?",C.cQt,0,"The stop blocks new buys, not exits.")
C.dHp=w(["Protect the account from bad days","Make more trades","Win every day"],x.s)
C.hT3=new D.cF("Brakes are there to...",C.dHp,0,"They cap the damage.")
C.d8I=w(["Stop trading and rethink","Raise the limits","Borrow money"],x.s)
C.hSD=new D.cF("If you keep breaking your own limits, you should...",C.d8I,0,"Rules only work when kept.")
C.dzG=w(["The next day","Never","Every minute"],x.s)
C.hTa=new D.cF("The daily stop resets...",C.dzG,0,"A new Eastern Time day starts fresh.")
C.dmC=w(["Can lose everything on a bad day","Always wins","Pays no fees"],x.s)
C.hSd=new D.cF("A trader with no loss limits...",C.dmC,0,"Limits are the safety net.")
C.dG3=w(["Pause","Trade faster","Bet bigger"],x.s)
C.hS0=new D.cF("Feeling angry after a loss is a sign to...",C.dG3,0,"Emotions lead to bad trades.")
C.d91=w([C.b3h,C.hSW,C.hSs,C.hSS,C.hSa,C.hTu,C.hS4,C.hSH,C.hT9,C.hT3,C.hSD,C.hTa,C.hSd,C.hS0],x.r)
C.daV=w(["9:30 AM to 4:00 PM Eastern","24 hours","8 PM to midnight"],x.s)
C.hSl=new D.cF("US stock market hours are...",C.daV,0,"On market days only.")
C.hSe=new D.cF("Is the US stock market open on Saturday?",Y.a77,1,"Weekends are closed.")
C.dFD=w(["A jump between the close and the next open","A break in the chart software","A holiday"],x.s)
C.hT1=new D.cF("An overnight gap is...",C.dFD,0,"News while closed moves the next open.")
C.d1A=w(["Faster and harder","Slower","Exactly the same"],x.s)
C.hSE=new D.cF("Crypto compared with SPY usually moves...",C.d1A,0,"Crypto is more jumpy.")
C.duH=w(["The 500 biggest US companies","One company","Bitcoin"],x.s)
C.hTL=new D.cF("SPY holds...",C.duH,0,"It is a fund of 500 companies.")
C.dIY=w(["They spread over many companies","They are closed","They are crypto"],x.s)
C.hRV=new D.cF("Why do funds like SPY move more calmly?",C.dIY,0,"One bad company matters less.")
C.dAS=w(["3:55 PM Eastern","Midnight","Noon"],x.s)
C.hTE=new D.cF("The agent sells stocks by...",C.dAS,0,"Before the 4:00 PM close.")
C.d8J=w(["Sunday 5 PM to Friday 5 PM Eastern","Only 9:30 to 4","Only weekends"],x.s)
C.hSm=new D.cF("Forex (currency pairs) trades...",C.d8J,0,"Real forex is closed on weekends.")
C.de0=w(["The broker itself","The real world market","The government"],x.s)
C.hSw=new D.cF("OTC prices at a broker on weekends come from...",C.de0,0,"They are made by the broker and can differ.")
C.dwG=w(["Do not trade","Trade double","Trade at night"],x.s)
C.hST=new D.cF("On a US market holiday, stocks...",C.dwG,0,"Holidays are closed days.")
C.cf2=w(["More often","Never","Less often"],x.s)
C.hTH=new D.cF("Because crypto moves fast, stop losses are hit...",C.cf2,0,"Bigger swings reach stops sooner.")
C.dAR=w(["Its own news","Weekend rules","The colour of candles"],x.s)
C.hTs=new D.cF("One company like Tesla can jump a lot because of...",C.dAR,0,"Single stocks react to company news.")
C.dr1=w([C.b3o,C.b3e,C.hSl,C.hSe,C.hT1,C.hSE,C.hTL,C.hRV,C.hTE,C.hSm,C.hSw,C.hST,C.hTH,C.hTs],x.r)
C.dfI=w(["Why you entered, your exits and what happened","Only wins","Nothing"],x.s)
C.hSo=new D.cF("A trading journal records...",C.dfI,0,"It shows what really works.")
C.hSO=new D.cF("One winning trade proves a method works.",O.Tg,1,"One trade can be pure luck.")
C.dk_=w(["2 to 4 weeks","1 hour","1 day"],x.s)
C.hS5=new D.cF("The plan is to paper trade for...",C.dk_,0,"Enough time for many trades.")
C.dog=w(["A bug to fix before real money","Fine","A bonus"],x.s)
C.hSg=new D.cF("If the agent ever breaks a rule, that is...",C.dog,0,"Rules must be followed exactly.")
C.dta=w(["A long positive paper test and a full review","One good day","A tip from a friend"],x.s)
C.hTM=new D.cF("Before using real money you need...",C.dta,0,"Evidence first.")
C.daq=w(["Worse than a coin flip","Excellent","Guaranteed"],x.s)
C.hTk=new D.cF("Signals that worked under 50% of the time are...",C.daq,0,"Do not trust them.")
C.d5L=w(["Never a good idea for beginners","Smart","Required"],x.s)
C.hTe=new D.cF("Borrowing money to trade is...",C.d5L,0,"Borrowed losses still have to be paid.")
C.dcm=w(["The agent journal","An advert","A game"],x.s)
C.hSv=new D.cF("The Pretend trades list on the main screen is...",C.dcm,0,"Every buy and sell is recorded.")
C.dpw=w(["No fear and no greed","Lots of emotion","Random choices"],x.s)
C.hSC=new D.cF("The point of an agent is to follow rules with...",C.dpw,0,"Discipline is its strength.")
C.cU0=w(["+$100","-$100","$0"],x.s)
C.hTO=new D.cF("After 10 trades you have 6 wins at +$50 and 4 losses at -$50. Total?",C.cU0,0,"6 x 50 = 300; 4 x 50 = 200; 300 - 200 = +100.")
C.cYp=w(["Review the trades calmly","Quit forever without looking","Double the size"],x.s)
C.hSn=new D.cF("A losing week means you should...",C.cYp,0,"Reviews find what to fix.")
C.dEk=w(["Patient and disciplined","Lucky","Fast clickers"],x.s)
C.hSu=new D.cF("The best traders are mostly...",C.dEk,0,"Patience and rules win over time.")
C.d9c=w([C.b3b,C.b3j,C.hSo,C.hSO,C.hS5,C.hSg,C.hTM,C.hTk,C.hTe,C.hSv,C.hSC,C.hTO,C.hSn,C.hSu],x.r)
C.dLi=new A.bl(C.eui,[C.dee,C.dy8,C.d8F,C.dAW,C.de4,C.dl2,C.dcR,C.d91,C.dr1,C.d9c],A.ar("bl<n,ai<cF>>"))
C.ewj={EUR:0,USD:1,GBP:2,JPY:3,CAD:4,AUD:5,NZD:6,CHF:7,TRY:8,NOK:9,THB:10}
C.f9U=new A.y("\u20ac",B.dW)
C.faM=new A.y("$",B.es)
C.eQr=new A.y("\xa3",B.dk)
C.eZR=new A.y("\xa5",B.bE)
C.eXM=new A.y("C$",B.hH)
C.f_g=new A.y("A$",B.cY)
C.ePK=new A.y("NZ",B.aw)
C.f32=new A.y("Fr",B.et)
C.f83=new A.y("TL",B.fK)
C.f76=new A.y("kr",B.fW)
C.eUh=new A.y("TH",B.wK)
C.a8t=new A.bl(C.ewj,[C.f9U,C.faM,C.eQr,C.eZR,C.eXM,C.f_g,C.ePK,C.f32,C.f83,C.f76,C.eUh],A.ar("bl<n,+(n,u)>"))
C.c0n=new A.ae(B.pS,5,B.b_,null,null,null)
C.eCS=new A.D(B.hK,C.c0n,null)
C.f4I=new A.y(F.qH,"HOLDING")
C.f7g=new A.y(C.cQ,"PASSES")
C.f7o=new A.y(C.dn,"FALLING")
C.fcc=new A.b0(C.cQ,B.nj,"up")
C.fcx=new A.b0(1,"Live signals",C.ask)
C.bWe=new A.a_(983635,"MaterialIcons",!0)
C.fcF=new A.b0(E.j_,C.bWe,"Moving sideways")
C.fcN=new A.b0(C.dn,B.a4O,"down")
C.fdf=new A.b0(2,"Ask tutor",B.xk)
C.fdx=new A.b0(B.b_,B.o4,"Waiting for data")
C.fe8=new A.b0(C.cQ,B.nj,"Trending up")
C.fef=new A.b0(C.dn,B.a4O,"Trending down")
C.fej=new A.b0(0,"Lessons",B.o5)
C.ffm=new A.b0(B.bP,B.o4,"waiting")
C.fjc=new A.b7([B.A1,C.cQ,"Signal alerts are ON: only STRONG BUY or SELL signals (all 5 confirmations), built for a 15\u201330 minute expiry, while NGMY is open or in the background.",null])
C.fjT=new A.b7([B.as7,E.j_,"Signal alerts are unlocked. Allow notifications so the app can tell you when a STRONG signal is given.","Allow"])
C.bZA=new A.ae(B.pS,8,C.cQ,null,null,null)
C.fL5=new A.H(!0,C.cQ,null,null,null,null,11.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.haN=new A.C("LIVE",null,C.fL5,null,null,null,null,null,null,null,null,null)
C.dvy=w([C.bZA,B.bb,C.haN],x.p)
C.fod=new A.c1(B.aK,B.e,B.N,B.l,null,B.p,null,0,C.dvy,null)
C.c_1=new A.ae(B.rj,14,B.c,null,null,null)
C.hhH=new A.C("Learn",null,B.nu,null,null,null,null,null,null,null,null,null)
C.dab=w([C.c_1,B.d9,C.hhH],x.p)
C.fog=new A.c1(B.aK,B.e,B.N,B.l,null,B.p,null,0,C.dab,null)
C.fEw=new A.H(!0,B.c,null,null,null,null,34,B.E,null,-0.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.fF4=new A.H(!0,B.c,null,null,null,null,36,B.E,null,-0.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.fG5=new A.H(!0,B.ab,null,null,null,null,10.5,B.u,null,0.9,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.fHf=new A.H(!0,F.qH,null,null,null,null,11,B.P,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.fHB=new A.H(!0,B.ab,null,null,null,null,11.5,B.E,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.fJA=new A.H(!0,C.cQ,null,null,null,null,11.5,B.P,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.fJI=new A.H(!0,C.dn,null,null,null,null,12,B.E,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.fKC=new A.H(!0,C.cQ,null,null,null,null,12,null,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.fL1=new A.H(!0,C.dn,null,null,null,null,11.5,B.P,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.fP4=new A.H(!0,C.cQ,null,null,null,null,12.5,B.P,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.fQ4=new A.H(!0,B.c,null,null,null,null,22,B.u,null,0.8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.fQI=new A.H(!0,C.dn,null,null,null,null,12,null,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.fVb=new A.C("Ask the tutor",null,B.cd,null,null,null,null,null,null,null,null,null)
C.aXA=new A.H(!0,C.dn,null,null,null,null,12.5,B.P,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.fVl=new A.C("Not quite. Try again.",null,C.aXA,null,null,null,null,null,null,null,null,null)
C.fWj=new A.C("Win rate ($100 trades)",null,B.LQ,null,null,null,null,null,null,null,null,null)
C.fWl=new A.C("All 10 lessons done!",null,null,null,null,null,null,null,null,null,null,null)
C.fWs=new A.C("10 short lessons. Each one shows you the idea live on the real markets the agent is watching.",null,T.FE,null,null,null,null,null,null,null,null,null)
C.fWP=new A.C("Shared paper balance",null,B.LF,null,null,null,null,null,null,null,null,null)
C.fXY=new A.C("Wrong. You have one more try.",null,C.aXA,null,null,null,null,null,null,null,null,null)
C.fZt=new A.C("Turn the agent back on?",null,null,null,null,null,null,null,null,null,null,null)
C.aZ0=new A.H(!0,B.c,null,null,null,null,9.5,B.u,null,0.8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.h16=new A.C("ALL SYSTEMS",null,C.aZ0,null,null,null,null,null,null,null,null,null)
C.fS_=new A.H(!0,C.dn,null,null,null,null,11.5,B.E,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.h27=new A.C("Built for a 15\u201330 minute expiry. Do NOT use this for 1\u20135 minute trades.",null,C.fS_,null,null,null,null,null,null,null,null,null)
C.h3M=new A.C("PRETEND MONEY",null,C.aZ0,null,null,null,null,null,null,null,null,null)
C.h4u=new A.C("Paper balance",null,B.LF,null,null,null,null,null,null,null,null,null)
C.h8d=new A.C("Signal alerts are now unlocked. When a market says ENTER UP or ENTER DOWN, the app will tell you the market, the direction and the duration. Allow notifications to receive them.",null,null,null,null,null,null,null,null,null,null,null)
C.hbi=new A.C("Allow notifications",null,null,null,null,null,null,null,null,null,null,null)
C.fNt=new A.H(!0,B.aR,null,null,null,null,10.5,null,null,null,null,null,1.25,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.hc_=new A.C("5 of 10\n= break even",null,C.fNt,null,B.e4,null,null,null,null,null,null,null)
C.hec=new A.C("Check now",null,B.cd,null,null,null,null,null,null,null,null,null)
C.heS=new A.C("Learn to trade",null,B.m8,null,null,null,null,null,null,null,null,null)
C.hhl=new A.C("Turn back on",null,null,null,null,null,null,null,null,null,null,null)
C.hhL=new A.C("The $100 brake paused the agent. Turning it back on means you have reviewed it. The running demo profit and loss starts again from $0.",null,null,null,null,null,null,null,null,null,null,null)
C.hO7=new D.z3("Nvidia","N",B.Nx)
C.hO9=new D.z3("Ethereum","\u039e",C.aj6)
C.hOc=new D.z3("S&P 500 fund","S&P",B.cf)
C.hOd=new D.z3("Bitcoin","B",F.qH)
C.hOf=new D.z3("Tesla","T",B.bE)
C.hOg=new D.z3("Microsoft","M",B.bp)
C.hOh=new D.z3("Nasdaq 100 fund","Q",B.cF)
C.bo1=new A.u(1,0.6,0.27058823529411763,1,B.q)
C.hOj=new D.z3("Solana","S",C.bo1)
C.hOl=new D.z3("Apple","A",B.cU)
C.hOo=new D.z3("Amazon","a",B.as)})();(function staticFields(){$.DB=A.a([],A.ar("N<a_F>"))
$.ahd=!1
$.hl6=""
$.aM1=0
$.foo=0})()};
(a=>{a["TpojVzaVvSciD/pSNliLQLLv1wo="]=a.current})($__dart_deferred_initializers__);