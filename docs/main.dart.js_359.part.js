((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,A8,N,Q,A_,S,A9,L,H,E,T,Aa,U,Ab,Ac,Ad,A0,Ae,Af,R,A1,Ag,Ah,Ai,M,A2,Aj,A3,A4,A5,Ak,A6,Al,G,Am,An,A7,Ao,Ap,V,O,Aq,Ar,W,As,X,P,F,At,I,K,Y,C={
bGE(b2,b3,b4){var w=0,v=A.j(x.cz),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1
var $async$bGE=A.e(function(b5,b6){if(b5===1)return A.f(b6,v)
for(;;)switch(w){case 0:w=3
return A.b(A.vY(null,""),$async$bGE)
case 3:b1=b6
if(B.a.i(b1).length===0)throw A.W(y.z)
t=A.ns(b1)
s=A.c2(b3.length,null,!1,x.h5)
r=x.f,q=x.N,p=x.z,o=x.j,n=x.gE,m="Translate these book pages into "+b4+". Translate the MEANING, not the words: write what a native speaker would naturally say, never a literal copy of the other language (many phrases, like \"family tree\", have no word-for-word twin and would not be understood). Keep the warm tone, every person's name and every place name exactly as written, and keep the paragraph breaks (a blank line between paragraphs). Do not add or remove any fact. If the source is flowery or exaggerated, say it plainly and warmly. Write people's names with normal capitals (Ikungu Ele), not in ALL CAPITALS. Write natural, correct "+b4+".",l=null,k=0
case 4:if(!(j=b3.length,k<j)){w=6
break}i=k+3
h=B.d.du(b3,k,Math.min(i,j))
j=h.length
g=b3.length
b2.$2("Translating pages "+(k+1)+" to "+(k+j)+" of "+g+"\u2026",k/g)
j=A.cR(b4,"Swahili",0)?y.q:""
g=h.length
f=A.a([],n)
for(e=h.length,d=0;d<h.length;h.length===e||(0,A.I)(h),++d){a0=h[d]
f.push(A.J(["title",a0.a,"body",a0.b],q,q))}a1=m+j+"\nReply with JSON only, with exactly "+g+' pages in the same order: {"pages":[{"title":"...","body":"..."}]}\nPages:\n'+B.W.av(f,null)+"\n"
a2=null
a3=0
case 7:if(!(a3<2&&a2==null)){w=8
break}w=10
return A.b(A.rn(t,a1,B.i1,"book",E.Cu),$async$bGE)
case 10:a4=b6
l=a4.a
a5=a4.b
if(a5==null){w=9
break}a6=H.RI(a5)
if(a6!=null&&o.b(a6.h(0,"pages"))&&J.ad(o.a(a6.h(0,"pages")))>=h.length)a2=o.a(a6.h(0,"pages"))
case 9:++a3
w=7
break
case 8:if(a2==null)throw A.W(l!=null&&A.M5(l)?y.k:y.y)
for(j=J.a8(a2),a7=0;a7<h.length;++a7){a8=r.b(j.h(a2,a7))?A.a1(r.a(j.h(a2,a7)),q,p):B.cE
g=a8.h(0,"title")
a9=B.a.i(A.w(g==null?"":g))
g=a8.h(0,"body")
b0=B.a.i(A.w(g==null?"":g))
g=a9.length===0?h[a7].a:a9
f=b0.length===0?h[a7].b:b0
s[k+a7]=new A.y(g,f)}case 5:k=i
w=4
break
case 6:r=A.a([],x.L)
for(a7=0;a7<b3.length;++a7){q=s[a7]
r.push(q==null?b3[a7]:q)}if(B.a.q(b4,"Swahili")){u=H.a3Y(r,b2)
w=1
break}b2.$2("Done",1)
u=r
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bGE,v)},
aiv(b7,b8,b9,c0,c1,c2,c3){var w=0,v=A.j(x.bV),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6
var $async$aiv=A.e(function(c4,c5){if(c4===1)return A.f(c5,v)
for(;;)switch(w){case 0:w=3
return A.b(A.vY(null,""),$async$aiv)
case 3:b6=c5
if(B.a.i(b6).length===0)throw A.W(y.z)
t=A.ns(b6)
s=x.S
r=A.cY(c1,0,A.dD(4,"count",s),A.U(c1).c)
q=H.a3K(new A.N(r,new C.fQH(),r.$ti.k("N<ak.E,n>")).aN(0," "))
r=q==="sw"
if(!r){p=A.ag("swahili|kiswahili",!1,!1,!1,!1)
o=p.b.test(b8)}else o=!0
if(r)r="The book is written in Swahili: keep it in Swahili unless they ask for another language."
else r=q==="en"?"The book is written in English: keep it in English unless they ask for another language.":"Keep the language the book is already written in unless they ask for another."
n=r+(o?y.q:"")
m=new C.fQG(t)
w=c2==="cover"?4:5
break
case 4:b9.$2("Designing the cover\u2026",0.3)
w=6
return A.b(m.$1('You design the cover of a family book. The person asked: """'+b8+'"""\nCurrent cover settings: '+B.W.av(b7,null)+"\nAllowed values: style one of "+B.d.aN(c3,", ")+"; emblem a number 0 to 11 (0 family tree, 1 heart, 2 home, 3 star, 4 people, 5 flower, 6 open book, 7 castle, 8 church, 9 paw, 10 leaf, 11 trophy); titleSize 18 to 36; position top, middle or bottom; frame double, single, corners or none; texture leather, linen, plain, stars or rays; foil gold, silver, rose, white, copper or black; ribbon true or false.\nAlso allowed: title and subtitle (the words on the cover) and author (a name line). Change ONLY what they asked for; leave the other settings out.\n"+n+'\nReply with JSON only: {"message":"one or two friendly sentences saying what you changed","cover":{...only the settings you change...}}\n'),$async$aiv)
case 6:l=c5
k=H.RI(l==null?"":l)
if(k==null)throw A.W("The AI could not design the cover just now. Nothing was changed.")
s=k.h(0,"message")
s=A.w(s==null?"I updated the cover.":s)
r=x.f
u=new C.aqd(s,D.dJ8,r.b(k.h(0,"cover"))?A.a1(r.a(k.h(0,"cover")),x.N,x.z):null)
w=1
break
case 5:r=c2==="page"
p=x.t
if(r){p=A.a([],p)
if(c0>=0&&c0<c1.length)p.push(c0)
j=p}else{p=A.a([],p)
for(i=0;i<c1.length;++i)p.push(i)
j=p}if(j.length===0)throw A.W("There is no page to change.")
h=A.T(s,x.fz)
s=x.j,p=x.N,g=x.K,f='You edit a family book. The person asked: """'+b8+'"""\nRules: change ONLY what they asked for and keep everything else word for word. Keep every person\'s name, date and fact exactly (a name may be written with normal capitals, not ALL CAPITALS). Keep the paragraph breaks (a blank line between paragraphs). If they ask to correct or replace a word, change it everywhere it appears in these pages, including in the titles. If they ask to rewrite, shorten, add to or improve a page, do it properly with good, natural writing.\n'+n+"\nPages: ",e=x.ez,d=x.f,a0="",a1=0
case 7:if(!(a2=j.length,a1<a2)){w=9
break}a3=a1+5
a4=B.d.du(j,a1,Math.min(a3,a2))
a2=r?"Changing the page\u2026":"Checking pages "+(a1+1)+" to "+(a1+a4.length)+" of "+j.length+"\u2026"
b9.$2(a2,a1/j.length)
a2=A.a([],e)
for(a5=a4.length,a6=0;a6<a4.length;a4.length===a5||(0,A.I)(a4),++a6){i=a4[a6]
a7=c1[i]
a2.push(A.J(["index",i,"title",a7.a,"body",a7.b],p,g))}w=10
return A.b(m.$1(f+B.W.av(a2,null)+'\nReply with JSON only: {"message":"one or two friendly sentences saying what you changed","pages":[{"index":0,"title":"...","body":"..."}]}\nInclude ONLY the pages you changed, each with its full new text. If nothing needs changing in these pages, use "pages":[].\n'),$async$aiv)
case 10:l=c5
k=l==null?null:H.RI(l)
if(k==null)throw A.W(y.A)
if(a0.length===0){a2=k.h(0,"message")
a2=B.a.i(A.w(a2==null?"":a2)).length!==0}else a2=!1
if(a2)a0=B.a.i(A.w(k.h(0,"message")))
a8=k.h(0,"pages")
if(s.b(a8))for(a2=J.de(a8,d),a5=J.aT(a2.a),a2=a2.$ti,a7=new A.kR(a5,a2.k("kR<1>")),a2=a2.c;a7.C();){a9=a2.a(a5.gP(a5))
b0=J.a8(a9)
b1=A.aJ(b0.h(a9,"index"))
i=b1==null?null:B.h.M(b1)
if(i==null||!B.d.q(a4,i))continue
b1=b0.h(a9,"title")
b2=B.a.i(A.w(b1==null?"":b1))
a9=b0.h(a9,"body")
b3=B.a.i(A.w(a9==null?"":a9))
a9=b2.length===0
if(a9&&b3.length===0)continue
a9=a9?c1[i].a:b2
h.n(0,i,new A.y(a9,b3.length===0?c1[i].b:b3))}case 8:a1=a3
w=7
break
case 9:if(h.a!==0){s=h.$ti.k("b8<2>")
p=A.cF(new A.b8(h,s),new C.fQI(),s.k("M.E"),p)
p=H.a3K(A.pQ(p,3,A.a3(p).k("M.E")).aN(0," "))==="sw"
s=p}else s=!1
w=s?11:12
break
case 11:s=h.$ti.k("cr<1>")
b4=A.C(new A.cr(h,s),s.k("M.E"))
s=A.a([],x.L)
for(r=b4.length,a6=0;a6<b4.length;b4.length===r||(0,A.I)(b4),++a6){p=h.h(0,b4[a6])
p.toString
s.push(p)}w=13
return A.b(H.a3Y(s,b9),$async$aiv)
case 13:b5=c5
for(s=J.a8(b5),i=0;i<b4.length;++i)h.n(0,b4[i],s.h(b5,i))
case 12:b9.$2("Done",1)
if(a0.length===0){s=h.a
if(s===0)s="I looked, and nothing needed changing."
else{r=s===1?"page":"pages"
r="Done. I updated "+s+" "+r+"."
s=r}}else s=a0
u=new C.aqd(s,h,null)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aiv,v)},
hIX(d,e,f){return A.cg(null,B.w.j(0.65),!1,null,new C.h_E(e,f),d,null,!0,!0,x.g2)},
aqd:function aqd(d,e,f){this.a=d
this.b=e
this.c=f},
fQH:function fQH(){},
fQG:function fQG(d){this.a=d},
fQI:function fQI(){},
h_E:function h_E(d,e){this.a=d
this.b=e},
bEo(b1){var w=0,v=A.j(x.aD),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
var $async$bEo=A.e(function(b2,b3){if(b2===1)return A.f(b3,v)
for(;;)switch(w){case 0:if(!B.d.aU(b1,new C.fDM())){u=null
w=1
break}t=B.d.cE(b1,new C.fDN())
s=$.S()
r=new A.q8(new A.pJ())
q=A.zu(r,D.aTc)
p=A.L()
p.r=B.c.gp(0)
q.aF(D.aTc,p)
o=A.L()
o.r=B.a_.gp(0)
o.c=3.6
o.b=B.aa
o.d=B.bG
o.e=B.dQ
n=new C.fDS(t)
if(!t){for(s=b1.length,m=1/0,l=1/0,k=0,j=0,i=0;i<s;++i){h=b1[i]
if(h==null)continue
g=h.a
if(g<m)m=g
f=h.b
if(f<l)l=f
if(g>k)k=g
if(f>j)j=f}e=B.h.D(k-m,1,1e4)
d=B.h.D(j-l,1,1e4)
a0=B.h.D(478.40000000000003/e,0,147.20000000000002/d)
a1=(520-e*a0)/2
a2=(160-d*a0)/2
s=$.S()
p=A.a([],x.v)
a3=new A.aH(s.r,B.aj,null,null,p)
for(s=b1.length,a4=!1,i=0;i<b1.length;b1.length===s||(0,A.I)(b1),++i){h=b1[i]
if(h==null){a4=!1
continue}a5=a1+(h.a-m)*a0
a6=a2+(h.b-l)*a0
if(!a4){a7=new A.aZ(a5,a6)
p.push(a7)
a8=a3.f
if(a8!=null)a7.ak(a8)
a3.ab()
a4=!0}else{a7=new A.aq(a5,a6)
p.push(a7)
a8=a3.f
if(a8!=null)a7.ak(a8)
a3.ab()}}q.af(a3,o)}else{p=A.a([],x.v)
a3=new A.aH(s.r,B.aj,null,null,p)
for(s=b1.length,a4=!1,i=0;i<b1.length;b1.length===s||(0,A.I)(b1),++i){h=b1[i]
if(h==null){a4=!1
continue}a9=n.$1(h)
a7=a9.a
a8=a9.b
if(!a4){a7=new A.aZ(a7,a8)
p.push(a7)
a8=a3.f
if(a8!=null)a7.ak(a8)
a3.ab()
a4=!0}else{a7=new A.aq(a7,a8)
p.push(a7)
a8=a3.f
if(a8!=null)a7.ak(a8)
a3.ab()}}q.af(a3,o)}w=4
return A.b(r.o8().xI(520,160),$async$bEo)
case 4:w=3
return A.b(b3.hj(B.hf),$async$bEo)
case 3:b0=b3
u=b0==null?null:J.eR(B.dI.gaT(b0))
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bEo,v)},
fOn(d){return C.inB(d)},
inB(d){var w=0,v=A.j(x.bW),u,t,s,r,q,p,o,n
var $async$fOn=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:p={}
o=d.bke()
n=d.x!=null&&d.zO(null).length===0
if(d.x!=null)t=n?D.AH:D.K6
else t=d.gUP()?D.K6:D.aO4
w=3
return A.b(C.bEo(d.ax),$async$fOn)
case 3:s=f
p.a=null
if(s!=null)p.a=A.aoS(s)
r=A.a5J(null,"NGMY Cashier","Payment receipt \u2014 "+d.b)
p.b=p.c=null
q=d.x
if(q==null){p.c="Not paid yet"
p.b=D.aO4}else{p.c=C.xp(q,!0)
p.b=n?D.AH:D.K6}r.a4p(A.hal(new C.fOp(p,d,new C.fOq(),t,n,o),null,D.bJ7,B.xr))
u=r.jH(0)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fOn,v)},
fVe(d){var w=0,v=A.j(x.y),u,t,s,r,q
var $async$fVe=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(C.fOn(d),$async$fVe)
case 3:t=f
s=B.a.i(d.b)
r=A.ag("[^a-zA-Z0-9_-]+",!0,!1,!1,!1)
q=A.aL(s,r,"_")
if(q.length>40)q=B.a.aA(q,0,40)
u=Af.Hy(t,"ngmy_cashier_receipt_"+(q.length===0?d.a:q)+".pdf",!1)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fVe,v)},
fDM:function fDM(){},
fDN:function fDN(){},
fDS:function fDS(d){this.a=d},
fOq:function fOq(){},
fOp:function fOp(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fOo:function fOo(){},
h06(d,e){var w=0,v=A.j(x.H)
var $async$h06=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.cg(null,B.w.j(0.55),!0,null,new C.h0a(new A.cx(null,x.eF),e),d,null,!0,!0,x.H),$async$h06)
case 2:return A.h(null,v)}})
return A.i($async$h06,v)},
bH6(d,e,f,g){return C.ive(d,e,f,g)},
ive(d,e,f,g){var w=0,v=A.j(x.H),u,t,s,r
var $async$bH6=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:r=null
try{t=B.a.q(e,",")?B.d.gal(e.split(",")):e
r=B.cJ.aL(t)}catch(q){r=null}if(r==null||r.length===0){d.K(x.q).f.T(D.fuw)
w=1
break}w=3
return A.b(A.cg(null,null,!0,null,new C.h02(g,r,f),d,null,!0,!0,x.H),$async$bH6)
case 3:case 1:return A.h(u,v)}})
return A.i($async$bH6,v)},
h0b(d,e){var w=0,v=A.j(x.H)
var $async$h0b=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.cg(null,null,!0,null,new C.h0e(new A.cx(null,x.eF),e),d,null,!0,!0,x.H),$async$h0b)
case 2:return A.h(null,v)}})
return A.i($async$h0b,v)},
b0v:function b0v(d,e){this.c=d
this.a=e},
c93:function c93(){},
bdH:function bdH(d,e){this.b=d
this.a=e},
h0a:function h0a(d,e){this.a=d
this.b=e},
h07:function h07(d){this.a=d},
h08:function h08(d,e,f){this.a=d
this.b=e
this.c=f},
h09:function h09(d,e){this.a=d
this.b=e},
h02:function h02(d,e,f){this.a=d
this.b=e
this.c=f},
h00:function h00(d){this.a=d},
h01:function h01(d,e,f){this.a=d
this.b=e
this.c=f},
h0e:function h0e(d,e){this.a=d
this.b=e},
h0c:function h0c(d){this.a=d},
h0d:function h0d(d,e,f){this.a=d
this.b=e
this.c=f},
fIE(d,e){var w=0,v=A.j(x.y),u,t
var $async$fIE=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(A.a3u(d),$async$fIE)
case 3:t=g
J.nY(t,new C.fIF(e))
u=A.aj8(d,t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fIE,v)},
fIF:function fIF(d){this.a=d},
aqq:function aqq(d,e,f){this.c=d
this.d=e
this.a=f},
aFf:function aFf(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
dRD:function dRD(d,e){this.a=d
this.b=e},
dRo:function dRo(d,e){this.a=d
this.b=e},
dRr:function dRr(d,e,f){this.a=d
this.b=e
this.c=f},
dRq:function dRq(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dRp:function dRp(d,e){this.a=d
this.b=e},
dRs:function dRs(d,e){this.a=d
this.b=e},
dRm:function dRm(){},
dRn:function dRn(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
dRl:function dRl(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
dR6:function dR6(d){this.a=d},
dR7:function dR7(d,e,f){this.a=d
this.b=e
this.c=f},
dR8:function dR8(d,e){this.a=d
this.b=e},
dR5:function dR5(d){this.a=d},
dRd:function dRd(d,e){this.a=d
this.b=e},
dR4:function dR4(d){this.a=d},
dRe:function dRe(d,e,f){this.a=d
this.b=e
this.c=f},
dRf:function dRf(d,e,f){this.a=d
this.b=e
this.c=f},
dR3:function dR3(d,e){this.a=d
this.b=e},
dRg:function dRg(d,e,f){this.a=d
this.b=e
this.c=f},
dR2:function dR2(d,e){this.a=d
this.b=e},
dRh:function dRh(d,e){this.a=d
this.b=e},
dR1:function dR1(d){this.a=d},
dRi:function dRi(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dR_:function dR_(){},
dQU:function dQU(d){this.a=d},
dQV:function dQV(d){this.a=d},
dR0:function dR0(d,e){this.a=d
this.b=e},
dRj:function dRj(d,e){this.a=d
this.b=e},
dQZ:function dQZ(d){this.a=d},
dRk:function dRk(d){this.a=d},
dQY:function dQY(){},
dR9:function dR9(d,e){this.a=d
this.b=e},
dQX:function dQX(d){this.a=d},
dRa:function dRa(d,e,f){this.a=d
this.b=e
this.c=f},
dQW:function dQW(d,e){this.a=d
this.b=e},
dQT:function dQT(d,e){this.a=d
this.b=e},
dRb:function dRb(d){this.a=d},
dRc:function dRc(d,e,f){this.a=d
this.b=e
this.c=f},
dRG:function dRG(){},
dRH:function dRH(d,e){this.a=d
this.b=e},
dRE:function dRE(d){this.a=d},
dRF:function dRF(d){this.a=d},
dRA:function dRA(d,e){this.a=d
this.b=e},
dRB:function dRB(d){this.a=d},
dRt:function dRt(d,e,f){this.a=d
this.b=e
this.c=f},
dRu:function dRu(d,e,f){this.a=d
this.b=e
this.c=f},
dRv:function dRv(d,e,f){this.a=d
this.b=e
this.c=f},
dRw:function dRw(d,e,f){this.a=d
this.b=e
this.c=f},
dRx:function dRx(d,e,f){this.a=d
this.b=e
this.c=f},
dRy:function dRy(d,e,f){this.a=d
this.b=e
this.c=f},
dRz:function dRz(d,e,f){this.a=d
this.b=e
this.c=f},
dRI:function dRI(){},
dRJ:function dRJ(){},
dRK:function dRK(){},
dRL:function dRL(d){this.a=d},
dRC:function dRC(d,e){this.a=d
this.b=e},
hEt(d){return B.d.dL(D.a5G,new C.fJq(d),new C.fJr())},
uV:function uV(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l
_.y=m
_.z=n
_.as=o},
fJq:function fJq(d){this.a=d},
fJr:function fJr(){},
ams:function ams(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aXd:function aXd(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
Ue:function Ue(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bhi:function bhi(){this.d=$
this.c=this.a=null},
dhi:function dhi(d,e){this.a=d
this.b=e},
dhg:function dhg(d,e){this.a=d
this.b=e},
dhh:function dhh(){},
dhj:function dhj(d,e){this.a=d
this.b=e},
hoz(d){var w,v,u,t=d.h(0,"id")
t=J.k(t==null?"":t)
w=d.h(0,"title")
w=J.k(w==null?"":w)
v=d.h(0,"body")
v=J.k(v==null?"":v)
u=d.h(0,"updatedAt")
u=A.bk(J.k(u==null?"":u))
return new C.nB(t,w,v,u==null?new A.V(Date.now(),0,!1):u)},
LR(d,e){return C.img(d,e)},
img(d,e){var w=0,v=A.j(x.d),u,t=2,s=[],r,q,p,o,n,m,l
var $async$LR=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){u=A.a([],x.I)
w=1
break}t=4
w=7
return A.b(A.aA(),$async$LR)
case 7:r=g
o=B.a.i(d.toLowerCase())
q=A.aV(J.u(r.a,"ngmy_family_book_v1_"+o+"_"+e))
if(q==null||q.length===0){o=A.a([],x.I)
u=o
w=1
break}p=B.W.aP(0,q,null)
if(!x.j.b(p)){o=A.a([],x.I)
u=o
w=1
break}o=J.de(p,x.f)
o=A.cF(o,new C.fLX(),o.$ti.k("M.E"),x.B)
n=A.a3(o).k("Y<M.E>")
o=A.C(new A.Y(o,new C.fLY(),n),n.k("M.E"))
B.d.b_(o,new C.fLZ())
u=o
w=1
break
t=2
w=6
break
case 4:t=3
l=s.pop()
o=A.a([],x.I)
u=o
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$LR,v)},
Bx(d,e,f){var w=0,v=A.j(x.H),u,t,s,r
var $async$Bx=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){w=1
break}w=3
return A.b(A.aA(),$async$Bx)
case 3:t=h
s=B.a.i(d.toLowerCase())
r=J.b9(f,new C.fZI(),x.a)
r=A.C(r,r.$ti.k("ak.E"))
w=4
return A.b(t.aC("String","ngmy_family_book_v1_"+s+"_"+e,B.W.av(r,null)),$async$Bx)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Bx,v)},
aTk(d,e,f){var w=0,v=A.j(x.H),u,t,s
var $async$aTk=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=2
return A.b(C.LR(d,e),$async$aTk)
case 2:u=h
t=J.cE(u)
s=t.bk(u,new C.h7k(f))
if(s===-1)t.ca(u,0,f)
else t.n(u,s,f)
w=3
return A.b(C.Bx(d,e,u),$async$aTk)
case 3:return A.h(null,v)}})
return A.i($async$aTk,v)},
bET(d,e,f){var w=0,v=A.j(x.H),u
var $async$bET=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=2
return A.b(C.LR(d,e),$async$bET)
case 2:u=h
J.nY(u,new C.fIw(f))
w=3
return A.b(C.Bx(d,e,u),$async$bET)
case 3:return A.h(null,v)}})
return A.i($async$bET,v)},
bF6(d,e){return C.imf(d,e)},
imf(a2,a3){var w=0,v=A.j(x.e),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$bF6=A.e(function(a4,a5){if(a4===1){s.push(a5)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.aA(),$async$bF6)
case 7:r=a5
o=B.a.i(a2.toLowerCase())
q=A.aV(J.u(r.a,"ngmy_family_book_cover_v1_"+o+"_"+a3))
if(q==null||q.length===0){u=D.Pa
w=1
break}p=B.W.aP(0,q,null)
if(x.f.b(p)){o=A.a1(p,x.N,x.z)
n=o.h(0,"style")
n=J.k(n==null?"leather":n)
m=o.h(0,"title")
m=J.k(m==null?"":m)
l=o.h(0,"subtitle")
l=J.k(l==null?"":l)
k=A.aJ(o.h(0,"emblem"))
k=k==null?null:B.h.M(k)
if(k==null)k=0
if(D.Ef.am(0,o.h(0,"foil")))j=A.cP(o.h(0,"foil"))
else j=J.z(o.h(0,"silver"),!0)?"silver":"gold"
i=A.aJ(o.h(0,"titleSize"))
if(i==null)i=null
i=B.h.D(i==null?25:i,18,36)
h=B.d.q(D.a7p,o.h(0,"position"))?A.cP(o.h(0,"position")):"middle"
g=B.d.q(D.a6J,o.h(0,"frame"))?A.cP(o.h(0,"frame")):"double"
f=B.d.q(D.a6F,o.h(0,"texture"))?A.cP(o.h(0,"texture")):"leather"
e=o.h(0,"author")
e=J.k(e==null?"":e)
d=J.z(o.h(0,"ribbon"),!1)
o=B.d.q(D.d9R,o.h(0,"header"))?A.cP(o.h(0,"header")):"classic"
o=new C.Ix(n,m,l,k,j,i,h,g,f,e,!d,o)}else o=D.Pa
u=o
w=1
break
t=2
w=6
break
case 4:t=3
a1=s.pop()
u=D.Pa
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$bF6,v)},
SS(d,e,f){return C.iuK(d,e,f)},
iuK(d,e,f){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$SS=A.e(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){w=1
break}t=4
w=7
return A.b(A.aA(),$async$SS)
case 7:r=h
w=8
return A.b(r.aC("String","ngmy_family_book_cover_v1_"+B.a.i(d.toLowerCase())+"_"+e,B.W.av(f.aj(),null)),$async$SS)
case 8:t=2
w=6
break
case 4:t=3
p=s.pop()
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$SS,v)},
Sk(d,e){return C.imh(d,e)},
imh(d,e){var w=0,v=A.j(x.dy),u,t=2,s=[],r,q,p,o,n,m,l,k,j
var $async$Sk=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){u=A.a([],x.s)
w=1
break}t=4
w=7
return A.b(A.aA(),$async$Sk)
case 7:r=g
q=r.rA("ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e)
if(q!=null){n=A.C(q,x.N)
u=n
w=1
break}j=J
w=8
return A.b(C.LR(d,e),$async$Sk)
case 8:if(!j.cJ(g)){n=B.a.i(d.toLowerCase())
m=J.lO(r.a,"ngmy_family_book_cover_v1_"+n+"_"+e)}else m=!0
p=m
n=x.s
o=p?A.a(["main"],n):A.a([],n)
w=9
return A.b(r.aC("StringList","ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e,o),$async$Sk)
case 9:u=o
w=1
break
t=2
w=6
break
case 4:t=3
k=s.pop()
n=A.a([],x.s)
u=n
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$Sk,v)},
ahP(d,e){var w=0,v=A.j(x.T),u,t,s,r
var $async$ahP=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.Sk(d,e),$async$ahP)
case 3:s=g
r=J.a8(s)
if(r.gJ(s)>=6){u=null
w=1
break}t=r.q(s,"main")?""+1000*Date.now()+"_"+r.gJ(s):"main"
r.I(s,t)
w=5
return A.b(A.aA(),$async$ahP)
case 5:w=4
return A.b(g.aC("StringList","ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e,s),$async$ahP)
case 4:u=t
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$ahP,v)},
a49(d,e,f){var w=0,v=A.j(x.H),u,t,s
var $async$a49=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=2
return A.b(C.Sk(d,e),$async$a49)
case 2:s=h
J.h7(s,f)
w=3
return A.b(A.aA(),$async$a49)
case 3:u=h
w=4
return A.b(u.aC("StringList","ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e,s),$async$a49)
case 4:t=f==="main"?e:e+"~"+f
w=5
return A.b(u.W(0,"ngmy_family_book_v1_"+B.a.i(d.toLowerCase())+"_"+t),$async$a49)
case 5:w=6
return A.b(u.W(0,"ngmy_family_book_cover_v1_"+B.a.i(d.toLowerCase())+"_"+t),$async$a49)
case 6:return A.h(null,v)}})
return A.i($async$a49,v)},
nB:function nB(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fLX:function fLX(){},
fLY:function fLY(){},
fLZ:function fLZ(){},
fZI:function fZI(){},
h7k:function h7k(d){this.a=d},
fIw:function fIw(d){this.a=d},
Ix:function Ix(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l
_.y=m
_.z=n
_.Q=o},
bSo:function bSo(d){this.a=d},
iv3(d,e,f,g,h,i,j){return A.a6(d,!1).ce(A.ef(new C.h_i(j,i,f,e,h,g),!0,null,x.H))},
Se(d,e,f,g,h){var w=0,v=A.j(x.y),u,t,s,r,q,p,o,n,m,l,k
var $async$Se=A.e(function(i,j){if(i===1)return A.f(j,v)
for(;;)switch(w){case 0:w=3
return A.b(C.Sk(h,g),$async$Se)
case 3:k=j
if(d.e==null){u=!1
w=1
break}if(J.ad(k)>=6){d.K(x.q).f.T(D.aVz)
u=!1
w=1
break}w=4
return A.b(C.hIX(d,f,e),$async$Se)
case 4:t=j
if(t==null||d.e==null){u=!1
w=1
break}w=5
return A.b(C.ahP(h,g),$async$Se)
case 5:s=j
if(s==null){u=!1
w=1
break}r=s==="main"?g:g+"~"+s
q=1000*Date.now()
p=A.a([],x.I)
for(o=t.d,n=0;n<o.length;++n){m=o[n]
l=B.a.i(m.a)
if(l.length===0)l="Page "+(n+1)
p.push(new C.nB(""+(q+n),l,B.a.i(m.b),new A.V(Date.now(),0,!1)))}w=6
return A.b(C.Bx(h,r,p),$async$Se)
case 6:p=B.a.i(t.a)
w=p.length!==0?7:8
break
case 7:w=9
return A.b(C.SS(h,r,new C.Ix("leather",p,"",0,"gold",25,"middle","double","leather","",!0,"classic")),$async$Se)
case 9:case 8:u=!0
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$Se,v)},
h_i:function h_i(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
a_Q:function a_Q(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
aCd:function aCd(d,e){var _=this
_.d=d
_.e=!0
_.f=$
_.r=-1
_.x=_.w=!1
_.y=e
_.Q=_.z=$
_.c=_.a=null},
dhY:function dhY(d){this.a=d},
dhX:function dhX(d,e){this.a=d
this.b=e},
dhM:function dhM(d,e){this.a=d
this.b=e},
dhJ:function dhJ(d,e){this.a=d
this.b=e},
dhk:function dhk(d){this.a=d},
dhl:function dhl(d,e){this.a=d
this.b=e},
dhN:function dhN(d){this.a=d},
dht:function dht(d){this.a=d},
dhr:function dhr(d){this.a=d},
dhs:function dhs(d){this.a=d},
dhu:function dhu(d){this.a=d},
dhK:function dhK(d){this.a=d},
dhL:function dhL(){},
dhp:function dhp(d){this.a=d},
dhq:function dhq(d,e){this.a=d
this.b=e},
dhv:function dhv(d){this.a=d},
dhw:function dhw(d,e){this.a=d
this.b=e},
dhW:function dhW(d){this.a=d},
dhV:function dhV(d,e){this.a=d
this.b=e},
dhU:function dhU(d){this.a=d},
dhG:function dhG(d){this.a=d},
dhF:function dhF(d){this.a=d},
dhH:function dhH(d){this.a=d},
dhm:function dhm(d,e){this.a=d
this.b=e},
dhI:function dhI(d,e){this.a=d
this.b=e},
dhz:function dhz(d){this.a=d},
dhA:function dhA(d){this.a=d},
dhy:function dhy(){},
dhB:function dhB(d){this.a=d},
dhC:function dhC(d){this.a=d},
dhD:function dhD(d,e){this.a=d
this.b=e},
dhE:function dhE(d,e,f){this.a=d
this.b=e
this.c=f},
dhx:function dhx(d,e){this.a=d
this.b=e},
dhP:function dhP(d){this.a=d},
dhO:function dhO(){},
dhQ:function dhQ(d){this.a=d},
dhR:function dhR(d){this.a=d},
dhS:function dhS(d){this.a=d},
dhT:function dhT(d,e){this.a=d
this.b=e},
dhn:function dhn(d){this.a=d},
dho:function dho(d){this.a=d},
a_U:function a_U(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bhH:function bhH(d){var _=this
_.d=d
_.e=$
_.c=_.a=null},
djK:function djK(d){this.a=d},
djL:function djL(d){this.a=d},
djJ:function djJ(d){this.a=d},
djM:function djM(d){this.a=d},
djI:function djI(d){this.a=d},
djN:function djN(d){this.a=d},
djH:function djH(d){this.a=d},
djO:function djO(d,e){this.a=d
this.b=e},
djG:function djG(d,e){this.a=d
this.b=e},
djP:function djP(d,e){this.a=d
this.b=e},
a_S:function a_S(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
agf:function agf(d,e,f){this.a=d
this.b=e
this.c=f},
aCg:function aCg(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
dic:function dic(d,e){this.a=d
this.b=e},
dib:function dib(d,e){this.a=d
this.b=e},
dig:function dig(d){this.a=d},
dif:function dif(d,e){this.a=d
this.b=e},
did:function did(d){this.a=d},
die:function die(d){this.a=d},
dih:function dih(d){this.a=d},
dii:function dii(d){this.a=d},
dia:function dia(d,e){this.a=d
this.b=e},
di9:function di9(d,e){this.a=d
this.b=e},
KU:function KU(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a_6:function a_6(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
cQt:function cQt(d){this.a=d},
cQu:function cQu(){},
cQv:function cQv(d){this.a=d},
beU:function beU(d,e,f){this.b=d
this.c=e
this.a=f},
beL:function beL(d,e){this.b=d
this.a=e},
uW:function uW(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a_q:function a_q(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
beS:function beS(){var _=this
_.r=_.f=_.e=_.d=$
_.c=_.a=null},
d99:function d99(d,e,f){this.a=d
this.b=e
this.c=f},
d98:function d98(d,e){this.a=d
this.b=e},
d9y:function d9y(d){this.a=d},
d9l:function d9l(){},
d9z:function d9z(d){this.a=d},
d9k:function d9k(){},
d9A:function d9A(d,e){this.a=d
this.b=e},
d9j:function d9j(d,e){this.a=d
this.b=e},
d9B:function d9B(d,e){this.a=d
this.b=e},
d9i:function d9i(d,e){this.a=d
this.b=e},
d9C:function d9C(d){this.a=d},
d9h:function d9h(){},
d9D:function d9D(d,e){this.a=d
this.b=e},
d9g:function d9g(d,e){this.a=d
this.b=e},
d9E:function d9E(d){this.a=d},
d9t:function d9t(d,e){this.a=d
this.b=e},
d9F:function d9F(d){this.a=d},
d9G:function d9G(d){this.a=d},
d9I:function d9I(d){this.a=d},
d9J:function d9J(d){this.a=d},
d9s:function d9s(d,e){this.a=d
this.b=e},
d9K:function d9K(d,e){this.a=d
this.b=e},
aJj:function aJj(d){this.a=d},
bke:function bke(d){this.a=d},
bd3:function bd3(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.f=f
_.r=g
_.w=h
_.x=i
_.y=j
_.z=k
_.a=l},
amt:function amt(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
a25:function a25(d,e){this.a=d
this.b=e},
amu:function amu(d,e,f,g,h,i){var _=this
_.e=_.d=$
_.f=d
_.r=e
_.w=f
_.x=$
_.z=_.y=null
_.Q=g
_.cx=_.CW=_.ay=_.ax=_.at=_.as=0
_.cy=0.35
_.db=""
_.dx=0
_.fr=_.dy=!1
_.bw$=h
_.a9$=i
_.c=_.a=null},
bSy:function bSy(d){this.a=d},
bSs:function bSs(d){this.a=d},
bSr:function bSr(d,e){this.a=d
this.b=e},
bSB:function bSB(d){this.a=d},
bSt:function bSt(d){this.a=d},
bSu:function bSu(d){this.a=d},
bSx:function bSx(d){this.a=d},
bSw:function bSw(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bSz:function bSz(d,e){this.a=d
this.b=e},
bSA:function bSA(){},
bSv:function bSv(d){this.a=d},
bSp:function bSp(d,e){this.a=d
this.b=e},
bSq:function bSq(d){this.a=d},
bpQ:function bpQ(d,e){this.b=d
this.a=e},
aCe:function aCe(){},
iH(d,e){var w
$.S()
w=A.L()
w.b=B.aa
w.c=e
w.r=d.gp(0)
w.d=B.bG
w.e=B.dQ
return w},
bEq(d,e,f,g,h,i,a0,a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=d.c
J.bt(j.save())
j.translate(e.a,e.b)
d.op(0,a0?-f:f,f)
w=A.bX(B.hr,8,36)
v=B.w.j(0.3)
u=$.S()
t=A.L()
t.r=v.gp(0)
d.c0(w,t)
w=a1===D.XK
s=w?Math.sin(g*5*a2):0
r=w?Math.abs(Math.sin(g*10*a2))*1.6:0
q=h.a
w=h.b
v=A.ap(w,B.w,0.3)
v.toString
if(!a3){v=s*7
d.ah(D.ex0,new A.r(-4+v,-2),C.iH(q,5))
d.ah(D.euA,new A.r(4-v,-2),C.iH(q,5))}else{t=A.bX(B.JY,14,40)
p=A.L()
p.r=v.gp(0)
d.c0(t,p)}v=u.r
u=x.v
o=new A.aH(v,B.aj,k,k,A.a([],u))
t=-64-r
o.E(new A.aZ(-11,t))
o.E(new A.ce(-15,-40,-14,a3?-12:-18))
o.E(new A.aq(14,a3?-12:-18))
o.E(new A.ce(15,-40,11,t))
o.E(new A.bx())
t=A.L()
t.r=w.gp(0)
d.af(o,t)
u=new A.aH(v,B.aj,k,k,A.a([],u))
u.E(new A.aZ(-12,-50-r))
v=-46-r
u.E(new A.aq(12,v))
u.E(new A.aq(12.5,-42-r))
u.E(new A.aq(-12.5,v))
u.E(new A.bx())
v=A.L()
v.r=h.c.gp(0)
d.af(u,v)
switch(a1.a){case 2:w=Math.sin(g*3.4)
break
case 3:w=Math.sin(g*7.5)
break
default:w=s
break}if(a1===D.b2x){n=-52+w*14
d.ah(new A.r(10,n-22),new A.r(10,n+44),C.iH(F.Gf,3.4))
d.ah(D.exi,new A.r(9,n),C.iH(q,4))
d.ah(D.ev_,new A.r(10,n),C.iH(q,4))}else if(a1===D.b2y){d.ah(D.ew5,new A.r(-8,-26-Math.max(0,w)*6),C.iH(q,4))
d.ah(D.et2,new A.r(8,-26-Math.max(0,-w)*6),C.iH(q,4))}else{w=s*3
v=-38-r
d.ah(D.ewa,new A.r(-12-w,v),C.iH(q,4))
d.ah(D.aN6,new A.r(12+w,v),C.iH(q,4))}w=A.L()
w.r=q.gp(0)
d.aF(D.fhk,w)
m=new A.r(0,-77-r)
w=A.bX(m,22,19)
v=A.L()
v.r=q.gp(0)
d.c0(w,v)
w=h.y
if(w!=null){v=A.bX(m.a5(0,K.vG),15,24)
u=A.L()
u.r=w.gp(0)
d.c0(v,u)
u=m.a5(0,D.esX)
v=A.L()
v.r=w.gp(0)
d.O(u,4,v)}else{w=A.bX(m.a5(0,B.tK),23,20)
v=h.d
u=A.L()
u.r=v.gp(0)
d.cQ(w,3.2986722862692828,2.827433388230814,!0,u)
w=h.e
if(w===3){d.ah(m.a5(0,D.exg),m.a5(0,D.ew3),C.iH(v,2.2))
d.ah(m.a5(0,D.euZ),m.a5(0,D.esU),C.iH(v,2.2))}if(w===4){w=m.a5(0,D.exk)
u=A.L()
u.r=v.gp(0)
d.O(w,6,u)
u=m.a5(0,D.ev0)
w=A.L()
w.r=v.gp(0)
d.O(u,6,w)}}w=m.a5(0,D.evS)
v=A.L()
v.r=B.ic.gp(0)
d.O(w,0.9,v)
v=m.a5(0,D.evG)
w=A.L()
w.r=B.ic.gp(0)
d.O(v,0.9,w)
if(i){l=m.a5(0,K.a9A)
w=A.bX(l,21,22)
v=A.L()
v.r=D.lG.gp(0)
d.c0(w,v)
v=A.bX(l.a5(0,K.aN3),5,12)
w=A.L()
w.r=D.bhZ.gp(0)
d.c0(v,w)
d.ah(l.a5(0,D.exc),l.a5(0,K.aNr),C.iH(B.cV,1.4))
d.ah(D.aN6,new A.r(15,-88-r),C.iH(q,3.6))}j.restore()},
hD6(d,e,f,g,h,i,j,k){var w,v,u,t,s,r=d.c
J.bt(r.save())
w=e.a
r.translate(w,e.b-h.x*f)
d.bV(0,f)
v=A.bX(B.dM,18,96)
u=B.w.j(0.28)
$.S()
t=A.L()
t.r=u.gp(0)
d.c0(v,t)
t=A.bX(B.dM,11,70)
v=B.w.j(0.2)
u=A.L()
u.r=v.gp(0)
d.c0(t,u)
d.lB(D.aTg,A.L())
C.iaS(d,g,h,i,j)
s=(k==null?D.a9F:k).a-w>=0?1:-1
w=A.L()
w.a=B.Mk
w.san(A.jG(new A.r(s*70,-60),new A.r(-s*70,-60),A.a([D.ajC.j(0.5),D.ajC.j(0.12),D.bpA.j(0.22)],x.O),A.a([0,0.55,1],x.n),B.x,null))
d.aF(D.aTg,w)
r.restore()
r.restore()},
iaS(a1,a2,a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null,d=a2.a,a0=A.ap(d,B.w,0.28)
a0.toString
w=A.ap(d,B.c,0.16)
w.toString
v=a2.b
u=A.ap(v,B.w,0.32)
u.toString
t=Math.sin(a4*1.9+a5)*0.8
s=a2.w
r=s?1.06:1
q=s?0.86:1
s=A.by(D.fhl,B.tP)
p=$.S()
o=A.L()
o.r=u.gp(0)
a1.aq(s,o)
o=A.by(D.fhg,B.hU)
s=A.ap(v,B.w,0.18)
s.toString
n=A.L()
n.r=s.gp(0)
a1.aq(o,n)
n=A.by(D.fhu,B.hU)
o=A.ap(v,B.w,0.1)
o.toString
s=A.L()
s.r=o.gp(0)
a1.aq(n,s)
s=A.L()
s.r=d.gp(0)
a1.c0(D.fhn,s)
s=A.L()
s.r=d.gp(0)
a1.c0(D.fg6,s)
s=a1.c
J.bt(s.save())
s.translate(a3.w,0)
J.bt(s.save())
a1.op(0,q,q*(1+t*0.012))
o=a2.f
m=o&&!a2.r?25:28
n=x.v
l=new A.aH(p.r,B.aj,e,e,A.a([],n))
p=-m
k=p+2
l.E(new A.aZ(k,-58))
l.E(new A.ce(p-3,-62,p,-52))
l.E(new A.aq(p+4,-14))
l.E(new A.aq(m-4,-14))
l.E(new A.aq(m,-52))
l.E(new A.ce(m+3,-62,m-2,-58))
l.E(new A.ce(0,-70,k,-58))
l.E(new A.bx())
k=A.L()
k.r=v.gp(0)
a1.af(l,k)
J.bt(s.save())
a1.mx(0,l)
switch(a2.x){case 1:for(j=0;j<5;++j){u=j*5
k=D.dgM[j]
i=new A.ar(B.S,B.Q,B.V,B.X,B.U)
i.b=B.aa
i.c=5
i.r=k.gp(0)
i.d=B.bG
i.e=B.dQ
a1.ah(new A.r(-34+u,-64),new A.r(14+u,-14),i)}break
case 2:for(k=a2.c,h=-56;h<-14;h+=11)for(g=-26+B.o.F(B.o.ar(h,11),2)*6;g<28;g+=12){i=k.j(0.85)
$.S()
f=new A.ar(B.S,B.Q,B.V,B.X,B.U)
f.r=i.gp(0)
a1.O(new A.r(g,h),3.6,f)
f=new A.ar(B.S,B.Q,B.V,B.X,B.U)
f.r=u.gp(0)
a1.O(new A.r(g,h),1.6,f)}break
case 3:for(u=a2.c,g=-28;g<30;g+=8){k=u.j(0.7)
i=new A.ar(B.S,B.Q,B.V,B.X,B.U)
i.b=B.aa
i.c=1.6
i.r=k.gp(0)
i.d=B.bG
i.e=B.dQ
a1.ah(new A.r(g,-64),new A.r(g,-14),i)}for(h=-60;h<-14;h+=8){k=u.j(0.7)
i=new A.ar(B.S,B.Q,B.V,B.X,B.U)
i.b=B.aa
i.c=1.6
i.r=k.gp(0)
i.d=B.bG
i.e=B.dQ
a1.ah(new A.r(-30,h),new A.r(30,h),i)}break
default:a1.ah(D.ewG,D.etI,C.iH(a2.c.j(0.9),3))}a1.ah(D.exd,D.ewc,C.iH(B.w.j(0.18),1.6))
a1.ah(D.et1,K.aN8,C.iH(B.w.j(0.18),1.6))
u=B.w.j(0.12)
k=$.S()
i=A.L()
i.r=u.gp(0)
a1.aF(D.fg2,i)
s.restore()
i=A.L()
i.r=a0.gp(0)
a1.aF(D.fgg,i)
n=new A.aH(k.r,B.aj,e,e,A.a([],n))
n.E(new A.aZ(-9,-66))
n.E(new A.ce(0,-57,9,-66))
n.E(new A.ce(0,-60,-9,-66))
k=A.L()
k.r=d.gp(0)
a1.af(n,k)
if(a2.e!==1)u=a2.r&&!o
else u=!0
if(u)a1.cQ(D.fgp,0.1,2.941592653589793,!1,C.iH(a2.c,2.2))
s.restore()
u=-56*q
o=a3.Q
if(o==null)o=D.a9K
n=25*q
k=23*q
i=9*q
C.hz8(a1,new A.r(p*q+2,u),o,n,k,-1,v,d,i)
o=a3.as
p=o==null?D.EH:o
C.hz8(a1,new A.r(m*q-2,u),p,n,k,1,v,d,i)
if(a3.at){a1.ah(D.eus,D.euo,C.iH(D.akA,4))
a1.ah(D.euq,D.eum,C.iH(D.GE.j(0.7),1.4))
u=A.L()
u.r=B.cV.gp(0)
a1.O(D.eup,5,u)}s.restore()
u=a3.w
p=a3.e
o=a3.r
J.bt(s.save())
s.translate(u*1.2+p*4,-88+o-t*0.4)
a1.jq(0,a3.f)
a1.bV(0,r)
C.iaN(a1,a2,a3,a4,a5,d,a0,w)
s.restore()},
hz8(d,e,f,g,h,i,j,k,l){var w,v,u,t,s=f.aJ(0,e),r=s.gcJ(),q=r===0?B.hr:s.eV(0,r),p=B.h.D(r,Math.abs(g-h)+0.5,g+h-0.5),o=g*g,n=(o-h*h+p*p)/(2*p),m=Math.sqrt(Math.max(0,o-n*n))
o=-q.b
w=q.a
v=new A.r(o,w)
if(o*i<0)v=new A.r(-o,-w)
u=e.a5(0,q.aM(0,n)).a5(0,v.aM(0,m))
t=e.a5(0,q.aM(0,p))
d.ah(e,u,C.iH(j,l))
o=A.ap(j,B.w,0.2)
o.toString
d.ah(e,u,C.iH(o,l*0.35))
d.ah(u,t,C.iH(k,l*0.78))
o=A.ap(k,B.w,0.22)
o.toString
d.ah(u,t,C.iH(o,l*0.22))
$.S()
o=A.L()
o.r=j.gp(0)
d.O(u,l*0.55,o)
o=A.bX(t,l*1.15,l)
w=A.L()
w.r=k.gp(0)
d.c0(o,w)
w=-l
w=t.a5(0,new A.r(i*w*0.45,w*0.1))
o=A.L()
o.r=k.gp(0)
d.O(w,l*0.28,o)},
iaN(c2,c3,c4,c5,c6,c7,c8,c9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9=null,c0=c3.d,c1=c3.e
if(c1===3||c1===4){w=A.bX(B.vF,40,38)
$.S()
v=A.L()
v.r=c0.gp(0)
c2.c0(w,v)}if(c1===4){$.S()
w=A.L()
w.r=c0.gp(0)
c2.O(D.ewm,9.5,w)
w=A.L()
w.r=c0.gp(0)
c2.O(D.eti,9.5,w)}w=A.bX(D.exz,10,6)
v=$.S()
u=A.L()
u.r=c8.gp(0)
c2.c0(w,u)
u=A.bX(D.evP,10,6)
w=A.L()
w.r=c8.gp(0)
c2.c0(u,w)
v=v.r
w=x.v
t=new A.aH(v,B.aj,b9,b9,A.a([],w))
t.E(new A.aZ(0,-20))
t.E(new A.ks(13,-20,17,-9,16,2))
t.E(new A.ks(15,13,8,20,0,20))
t.E(new A.ks(-8,20,-15,13,-16,2))
t.E(new A.ks(-17,-9,-13,-20,0,-20))
t.E(new A.bx())
u=A.L()
u.san(A.wg(D.ex2,28,A.a([c9,c7,c8],x.O),A.a([0,0.55,1],x.n),B.x,b9,b9,0))
c2.af(t,u)
u=c3.r
if(u){s=C.iH(c8.j(0.5),0.8)
c2.cQ(D.fhw,3.455751918948773,2.5132741228718345,!1,s)
c2.cQ(D.fg9,3.455751918948773,2.5132741228718345,!1,s)
c2.ah(D.ewj,D.ew7,s)
c2.ah(D.ete,D.et5,s)
c2.cQ(D.fgo,2.2,1.4,!1,s)
c2.cQ(D.fg7,-0.4,1.4,!1,s)}switch(c1){case 0:for(r=0;r<16;++r){q=3.141592653589793*(1.02+0.96*r/15)
p=Math.cos(q)
o=Math.sin(q)
n=new A.ar(B.S,B.Q,B.V,B.X,B.U)
n.r=c0.gp(0)
c2.O(new A.r(p*14.5,-3+o*17.5),4.3,n)}p=A.L()
p.r=c0.gp(0)
c2.cQ(D.fgC,3.141592653589793,3.141592653589793,!0,p)
break
case 1:p=new A.aH(v,B.aj,b9,b9,A.a([],w))
p.E(new A.aZ(-15,-11))
p.E(new A.ce(0,-30,15,-11))
p.E(new A.aq(13,-6))
p.E(new A.ce(0,-12,-13,-6))
p.E(new A.bx())
o=A.L()
o.r=c3.c.gp(0)
c2.af(p,o)
c2.ah(D.ew8,D.et6,C.iH(G.np,1.4))
o=A.L()
o.r=c0.gp(0)
c2.O(D.ewp,3,o)
o=A.L()
o.r=c0.gp(0)
c2.O(D.etj,3,o)
o=new A.aH(v,B.aj,b9,b9,A.a([],w))
o.E(new A.aZ(-13,6))
o.E(new A.ce(-12,22,0,26))
o.E(new A.ce(12,22,13,6))
o.E(new A.ce(8,13,0,12))
o.E(new A.ce(-8,13,-13,6))
o.E(new A.bx())
p=A.L()
p.r=B.hY.gp(0)
c2.af(o,p)
p=new A.aH(v,B.aj,b9,b9,A.a([],w))
p.E(new A.aZ(-7,8))
p.E(new A.ce(0,6,7,8))
p.E(new A.ce(0,10.5,-7,8))
o=A.L()
o.r=B.bO.gp(0)
c2.af(p,o)
break
case 2:m=c3.y
if(m==null)m=c3.b
p=new A.aH(v,B.aj,b9,b9,A.a([],w))
p.E(new A.aZ(-17,-4))
p.E(new A.ce(-20,-27,0,-29))
p.E(new A.ce(20,-27,17,-4))
p.E(new A.ce(0,-14,-17,-4))
p.E(new A.bx())
o=A.L()
o.r=m.gp(0)
c2.af(p,o)
o=A.ap(m,B.w,0.3)
o.toString
c2.cQ(D.fgJ,3.4,2.5,!1,C.iH(o,1.4))
o=A.ap(m,B.c,0.3)
o.toString
c2.cQ(D.fgw,3.6,2.2,!1,C.iH(o,1.2))
o=new A.aH(v,B.aj,b9,b9,A.a([],w))
o.E(new A.aZ(11,-22))
o.E(new A.ce(27,-34,25,-19))
o.E(new A.ce(18,-18,11,-22))
p=A.ap(m,B.c,0.1)
p.toString
n=A.L()
n.r=p.gp(0)
c2.af(o,n)
n=new A.aH(v,B.aj,b9,b9,A.a([],w))
n.E(new A.aZ(11,-22))
n.E(new A.ce(24,-12,27,-26))
n.E(new A.ce(18,-22,11,-22))
o=A.ap(m,B.w,0.2)
o.toString
p=A.L()
p.r=o.gp(0)
c2.af(n,p)
p=A.L()
p.r=c3.c.gp(0)
c2.O(D.et7,3,p)
break
case 3:p=A.L()
p.r=c0.gp(0)
c2.cQ(D.fgG,3.204424506661589,3.015928947446201,!0,p)
for(r=-3;r<=3;++r){p=A.ap(c0,B.c,0.18)
p.toString
o=new A.ar(B.S,B.Q,B.V,B.X,B.U)
o.b=B.aa
o.c=0.9
o.r=p.gp(0)
o.d=B.bG
o.e=B.dQ
c2.ah(new A.r(r*3.6,-19+Math.abs(r)*0.8),new A.r(r*4.6,-4),o)}for(p=c3.c,l=0;l<2;++l){k=I.aDN[l]
o=new A.ar(B.S,B.Q,B.V,B.X,B.U)
o.b=B.aa
o.c=4.5
o.r=c0.gp(0)
o.d=B.bG
o.e=B.dQ
c2.ah(new A.r(k,0),new A.r(k*1.12,22),o)
for(j=0;j<3;++j){o=new A.ar(B.S,B.Q,B.V,B.X,B.U)
o.r=p.gp(0)
c2.O(new A.r(k*(1+j*0.04),7+j*6.5),1.8,o)}}break
case 4:p=A.L()
p.r=c0.gp(0)
c2.cQ(D.fgF,3.204424506661589,3.015928947446201,!0,p)
p=A.ap(c0,B.c,0.25)
p.toString
c2.ah(K.a9A,K.a9z,C.iH(p,1))
break
default:p=A.L()
p.r=c0.gp(0)
c2.cQ(D.fga,3.267256359733385,2.8902652413026098,!0,p)}i=B.h.D(c4.b,0,1)*0.4+0.1
p=A.bX(D.exm,5,8)
o=D.agQ.j(i)
n=A.L()
n.r=o.gp(0)
c2.c0(p,n)
n=A.bX(D.ew_,5,8)
p=D.agQ.j(i)
o=A.L()
o.r=p.gp(0)
c2.c0(n,o)
h=c4.e*2.4
o=new A.aH(v,B.aj,b9,b9,A.a([],w))
o.E(new A.aZ(h-0.6,-2))
o.E(new A.ce(h-3.4,6,h-2.6,7.4))
o.E(new A.ce(h,8.8,h+2.6,7.4))
c2.af(o,C.iH(c8.j(0.75),1.1))
o=A.L()
o.r=c8.gp(0)
c2.O(new A.r(h-1.5,7.2),0.7,o)
o=A.L()
o.r=c8.gp(0)
c2.O(new A.r(h+1.5,7.2),0.7,o)
g=B.h.F(c5*0.33+c6*0.37,1)>0.965?1:0
p=c4.d
o=c4.c>0.8?1.25:1
f=(1-g)*(1-p*0.6)*o
for(p=f<0.15,o=c3.f,n=f>0.12,e=2.5*f,d=c2.c,a0=e*2,a1=e*2.2,l=0;l<2;++l){a2=F.fP[l]
a3=c4.e
a4=a2>0?0.7:1
a5=a2*6.4+a3*2*a4
if(n){a3=Math.max(0.6,a0)
a4=A.bX(new A.r(a5,-3),a3,7)
a6=new A.ar(B.S,B.Q,B.V,B.X,B.U)
a6.r=B.c.j(0.96).gp(0)
c2.c0(a4,a6)
a7=a5+c4.y*1.5
a8=-3+c4.z*0.7
J.bt(d.save())
a6=A.a([],w)
a4=new A.aH(v,B.aj,b9,b9,a6)
a6.push(new A.jA(A.bX(new A.r(a5,-3),a3,7)))
a4.ab()
a3=a4.e
if(a3==null)a3=a4.e=new A.Ee(a4.glg().a.snapshot())
d.clipPath(a3.a,$.mK(),!0)
a3=new A.ar(B.S,B.Q,B.V,B.X,B.U)
a3.r=D.blU.gp(0)
c2.O(new A.r(a7,a8),2.1,a3)
a3=new A.ar(B.S,B.Q,B.V,B.X,B.U)
a3.r=B.w.gp(0)
c2.O(new A.r(a7,a8),1.05,a3)
a3=new A.ar(B.S,B.Q,B.V,B.X,B.U)
a3.r=B.c.gp(0)
c2.O(new A.r(a7-0.7,a8-0.7),0.55,a3)
d.restore()}a3=o?D.a__:c8.j(0.9)
a4=o?1.5:1.1
a9=new A.ar(B.S,B.Q,B.V,B.X,B.U)
a9.b=B.aa
a9.c=a4
a9.r=a3.gp(0)
a9.d=B.bG
a9.e=B.dQ
a3=p?0.8:0
c2.cQ(A.bX(new A.r(a5,-3+a3),Math.max(1.2,a1),7.3500000000000005),3.2986722862692828,2.827433388230814,!1,a9)
a3=c4.c
b0=-9.2-a3*2.2
a4=a2*3.6
a6=a3<0?-a3*1.6:0
a3=a3>0?a3*0.6:0
if(u)b1=B.dY
else{b1=A.ap(c0,B.w,0.2)
b1.toString}b2=new A.ar(B.S,B.Q,B.V,B.X,B.U)
b2.b=B.aa
b2.c=1.7
b2.r=b1.gp(0)
b2.d=B.bG
b2.e=B.dQ
c2.ah(new A.r(a5-a4,b0-a6+0.4),new A.r(a5+a4,b0-0.6-a3),b2)}b3=B.h.D(c4.a,0,1)
if(o)b4=D.bwk
else{u=A.ap(c8,D.bpC,0.6)
u.toString
b4=u}b5=c4.b
if(b3>0.06){b6=5+B.h.D(b5,0,1)*2.2
b7=1.2+b3*6.5
b8=new A.aH(v,B.aj,b9,b9,A.a([],w))
w=-b6
b8.E(new A.aZ(w,11.5))
b8.E(new A.ce(0,11.5+b7*0.2-c4.b*1.5,b6,11.5))
b8.E(new A.ce(0,11.5+b7*1.5+c4.b*1.5,w,11.5))
b8.E(new A.bx())
v=A.L()
v.r=D.boU.gp(0)
c2.af(b8,v)
J.bt(d.save())
c2.mx(0,b8)
v=B.c.j(0.95)
u=A.L()
u.r=v.gp(0)
c2.aF(new A.a4(w,11,w+b6*2,13.2),u)
u=A.bX(new A.r(0,11.5+b7*1.1),b7*0.9,b6*1.4)
w=A.L()
w.r=D.bwp.gp(0)
c2.c0(u,w)
d.restore()
c2.af(b8,C.iH(b4,1.1))}else{u=new A.aH(v,B.aj,b9,b9,A.a([],w))
p=11.5-b5*0.8
u.E(new A.aZ(-5.2,p))
u.E(new A.ce(0,13.1+b5*2.8,5.2,p))
c2.af(u,C.iH(b4,1.5))
if(b5>0.6){w=new A.aH(v,B.aj,b9,b9,A.a([],w))
w.E(new A.aZ(-4.6,11.8))
w.E(new A.ce(0,15.1+b5*1.4,4.6,11.8))
w.E(new A.ce(0,13.5,-4.6,11.8))
v=B.c.j(0.9)
u=A.L()
u.r=v.gp(0)
c2.af(w,u)}}if(c4.b>0.2){c2.cQ(D.fgn,-1.2,2.2,!1,C.iH(c8.j(0.5),0.8))
c2.cQ(D.fgc,2.141592653589793,2.2,!1,C.iH(c8.j(0.5),0.8))}if(o&&c1!==2){c1=c3.c
w=A.L()
w.r=c1.gp(0)
c2.O(D.evI,1.7,w)
w=A.L()
w.r=c1.gp(0)
c2.O(D.evE,1.7,w)}},
igg(a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=null,g=$.S(),f=new A.q8(new A.pJ()),e=A.zu(f,h),d=a3.a,a0=a3.b,a1=Math.min(d/450,a0/900),a2=A.L()
a2.san(A.jG(B.J,new A.r(0,a0*0.46),D.ddv,D.d4L,B.x,h))
e.aF(new A.a4(0,0,0+d,0+a0),a2)
a2=e.c
J.bt(a2.save())
a2.translate((d-450*a1)/2,(a0-900*a1)/2)
e.bV(0,a1)
w=new A.e0()
w.cU(8)
for(v=0;v<120;++v){d=w.ai()
a0=w.ai()
u=w.ai()
t=new A.ar(B.S,B.Q,B.V,B.X,B.U)
t.r=B.c.j(0.2+w.ai()*0.5).gp(0)
e.O(new A.r(d*450*1.4-90,a0*330-40),0.5+u*0.9,t)}J.bt(a2.save())
a2.translate(200,120)
e.jq(0,-0.5)
d=A.L()
a0=x.O
d.san(A.wg(B.J,230,A.a([D.bky,B.L],a0),h,B.x,h,h,0))
e.c0(D.fgT,d)
a2.restore()
d=A.L()
d.san(A.wg(D.a9I,58,A.a([D.bnV,B.L],a0),h,B.x,h,h,0))
e.O(D.a9I,58,d)
d=A.L()
d.r=D.bjg.gp(0)
e.O(D.a9I,24,d)
d=A.L()
d.r=D.a_q.gp(0)
e.O(D.eu1,5,d)
d=A.L()
d.r=D.a_q.gp(0)
e.O(D.eu5,3.4,d)
d=A.L()
d.r=D.a_q.gp(0)
e.O(D.eu4,2.4,d)
for(d=x.v,s=0;s<3;++s,g=u){u=A.a([],d)
r=new A.aH(g.r,B.aj,h,h,u)
u.push(new A.aZ(-60,420))
r.ab()
for(g=372+s*12,t=60+s*20,q=s*2,p=14-s*3,o=-60;o<=510;o+=8){n=new A.aq(o,g+Math.sin(o/t+q)*p+Math.sin(o/23+s)*3)
u.push(n)
m=r.f
if(m!=null)n.ak(m)
r.ab()}g=new A.aq(510,470)
u.push(g)
t=r.f
if(t!=null)g.ak(t)
r.ab()
g=new A.aq(-60,470)
u.push(g)
t=r.f
if(t!=null)g.ak(t)
r.ab()
g=new A.bx()
u.push(g)
u=r.f
if(u!=null)g.ak(u)
r.ab()
g=[D.bhN,D.bjP,D.bpW][s]
u=$.S()
t=new A.ar(B.S,B.Q,B.V,B.X,B.U)
t.r=g.gp(0)
e.af(r,t)}for(l=0;l<4;++l){o=D.czi[l]
k=384+B.o.F(o,11)
g=o-2
d=k-24
u=new A.ar(B.S,B.Q,B.V,B.X,B.U)
u.b=B.aa
u.c=2.4
u.r=D.a_N.gp(0)
u.d=B.bG
u.e=B.dQ
e.ah(new A.r(o,k),new A.r(g,d),u)
g=A.bX(new A.r(g,k-27),11,46)
u=new A.ar(B.S,B.Q,B.V,B.X,B.U)
u.r=D.a_N.gp(0)
e.c0(g,u)
d=A.bX(new A.r(o-12,d),8,24)
u=new A.ar(B.S,B.Q,B.V,B.X,B.U)
u.r=D.a_N.gp(0)
e.c0(d,u)}for(v=0;v<9;++v){g=B.o.F(v,3)
d=B.o.F(v,4)
u=new A.ar(B.S,B.Q,B.V,B.X,B.U)
u.r=D.bjj.j(0.8).gp(0)
e.O(new A.r(20+v*52+g*7,400+d*5),1.2,u)}g=A.L()
g.san(A.jG(D.esA,D.esD,D.d6M,B.xg,B.x,h))
e.aF(new A.a4(-200,412,650,1300),g)
j=new A.e0()
j.cU(21)
for(v=0;v<260;++v){g=j.ai()
k=420+j.ai()*480
d=j.ai()
u=k/900+0.4
u=A.bX(new A.r(g*450,k),1+j.ai()*2*u,1.5+d*4*u)
g=j.h4()?B.c:B.w
d=new A.ar(B.S,B.Q,B.V,B.X,B.U)
d.r=g.j(0.06+j.ai()*0.06).gp(0)
e.c0(u,d)}J.bt(a2.save())
a2.translate(225,590)
e.op(0,1,0.34)
g=A.L()
g.san(A.wg(B.J,250,A.a([D.bqU,D.bk9,D.bsT],a0),A.a([0,0.8,1],x.n),B.x,h,h,0))
e.O(B.J,250,g)
a2.restore()
for(v=0;v<40;++v){o=j.ai()*450
k=640+j.ai()*260
g=j.ai()
d=A.ap(D.ajh,D.biO,j.ai())
d.toString
for(g=k-(6+g*10),i=-1;i<=1;++i){$.S()
a0=new A.ar(B.S,B.Q,B.V,B.X,B.U)
a0.b=B.aa
a0.c=1.3
a0.r=d.gp(0)
a0.d=B.bG
a0.e=B.dQ
e.ah(new A.r(o+i*2,k),new A.r(o+i*5,g+Math.abs(i)*3),a0)}}C.i93(e)
for(l=0;l<3;++l)C.ice(e,D.aBA[l])
C.ic3(e,D.etW)
for(o=118;o<190;o+=11){g=B.o.F(o,3)
d=B.o.F(o,4)
$.S()
a0=new A.ar(B.S,B.Q,B.V,B.X,B.U)
a0.b=B.aa
a0.c=2.4
a0.r=D.a_I.gp(0)
a0.d=B.bG
a0.e=B.dQ
e.ah(new A.r(o,452+g),new A.r(o+1,436+d),a0)}e.ah(D.et3,D.etn,C.iH(D.bjx,1.6))
a2.restore()
return f.o8()},
i93(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null,h=$.S().r,g=x.v,f=new A.aH(h,B.aj,i,i,A.a([],g))
f.E(new A.aZ(358,462))
f.E(new A.ks(354,422,370,382,374,332))
f.E(new A.aq(410,332))
f.E(new A.ks(416,382,432,422,428,462))
f.E(new A.bx())
w=A.L()
w.san(A.jG(new A.r(354,0),new A.r(430,0),D.dBO,B.mq,B.x,i))
d.af(f,w)
v=new A.e0()
v.cU(4)
for(u=0;u<30;++u){t=364+v.ai()*56
s=462-v.ai()*126
w=v.ai()
r=v.ai()
q=B.w.j(0.18)
p=new A.ar(B.S,B.Q,B.V,B.X,B.U)
p.b=B.aa
p.c=1.1
p.r=q.gp(0)
p.d=B.bG
p.e=B.dQ
d.ah(new A.r(t,s),new A.r(t+w*3-1.5,s+8+r*12),p)}for(o=0;o<6;++o){n=D.dib[o]
w=n.a
r=392+w*12
q=-n.b
p=r+w*52
m=336+(q*46-8)
w=p+w*42
q=m+(q*34+4)
l=A.a([],g)
k=new A.aH(h,B.aj,i,i,l)
l.push(new A.aZ(r,336))
k.ab()
r=new A.ce(p,m,w,q)
l.push(r)
p=k.f
if(p!=null)r.ak(p)
k.ab()
r=new A.ar(B.S,B.Q,B.V,B.X,B.U)
r.b=B.aa
r.c=8
r.r=D.ahC.gp(0)
r.d=B.bG
r.e=B.dQ
d.af(k,r)
for(j=0;j<6;++j){r=v.ai()
p=v.ai()
m=v.ai()
l=new A.ar(B.S,B.Q,B.V,B.X,B.U)
l.r=A.ap(D.bjp,D.bpU,v.ai()).j(0.92).gp(0)
d.O(new A.r(w+(r*36-18),q+(p*18-14)),8+m*7,l)}w+=0
r=new A.ar(B.S,B.Q,B.V,B.X,B.U)
r.b=B.aa
r.c=1.2
r.r=D.a_I.gp(0)
r.d=B.bG
r.e=B.dQ
d.ah(new A.r(w,q+8),new A.r(w,q+22),r)
q=A.bX(new A.r(w,q+28),13,7)
w=new A.ar(B.S,B.Q,B.V,B.X,B.U)
w.r=D.brg.gp(0)
d.c0(q,w)}},
ice(b4,b5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=null,a5=b5.a,a6=b5.b,a7=b5.c,a8=b5.d,a9=a7*0.5,b0=A.bX(new A.r(a5,a6+2),a9,a7*2.8),b1=B.w.j(0.3),b2=$.S(),b3=A.L()
b3.r=b1.gp(0)
b4.c0(b0,b3)
b2=b2.r
b3=x.v
w=new A.aH(b2,B.aj,a4,a4,A.a([],b3))
b0=a5-a7
b1=a6-a8
w.E(new A.aZ(b0,b1))
w.E(new A.aq(b0,a6))
v=a5+a7
w.E(new A.ce(a5,a6+a7*0.22,v,a6))
w.E(new A.aq(v,b1))
w.E(new A.bx())
u=A.L()
u.san(A.jG(new A.r(b0,0),new A.r(v,0),D.dih,B.mq,B.x,a4))
b4.af(w,u)
t=new A.e0()
t.cU(B.o.U(a5*7))
v=b4.c
J.bt(v.save())
b4.mx(0,w)
for(s=0;s<40;++s){r=b0+t.ai()*a7*2
q=b1+t.ai()*a8
u=t.ai()
p=t.ai()
o=B.w.j(0.14)
n=new A.ar(B.S,B.Q,B.V,B.X,B.U)
n.b=B.aa
n.c=1
n.r=o.gp(0)
n.d=B.bG
n.e=B.dQ
b4.ah(new A.r(r,q),new A.r(r+4+u*5,q+p*2-1),n)}u=b1+5
p=a7*2
o=D.ajd.j(0.75)
n=A.L()
n.r=o.gp(0)
b4.aF(new A.a4(b0,u,b0+p,u+7),n)
for(u=a7/5,o=b1+12,n=b1+20,m=b0+2,l=0;l<B.h.bh(u);++l){k=m+l*10
j=A.a([],b3)
i=new A.aH(b2,B.aj,a4,a4,j)
j.push(new A.aZ(k,o))
i.ab()
h=new A.aq(k+5,n)
j.push(h)
g=i.f
if(g!=null)h.ak(g)
i.ab()
h=new A.aq(k+10,o)
j.push(h)
g=i.f
if(g!=null)h.ak(g)
i.ab()
h=new A.bx()
j.push(h)
j=i.f
if(j!=null)h.ak(j)
i.ab()
j=new A.ar(B.S,B.Q,B.V,B.X,B.U)
j.r=D.lG.j(0.85).gp(0)
b4.af(i,j)}u=A.a([],b3)
f=new A.aH(b2,B.aj,a4,a4,u)
b2=a6-8
f.E(new A.aZ(b0,b2))
for(p/=6,l=0;l<=B.h.bh(p);++l){o=(l&1)===0?0:-5
o=new A.aq(b0+l*6,b2+o)
u.push(o)
n=f.f
if(n!=null)o.ak(n)
f.ab()}b4.af(f,C.iH(D.ajd.j(0.7),1.6))
v.restore()
b0=$.S().r
b2=new A.aH(b0,B.aj,a4,a4,A.a([],b3))
u=a7*0.1
p=a5+u
o=a7*0.28
n=p-o
m=a6+1
b2.E(new A.aZ(n,m))
j=a6-a8*0.55
b2.E(new A.aq(n,j))
o=p+o
b2.E(new A.ce(p,a6-a8*0.82,o,j))
b2.E(new A.aq(o,m))
b2.E(new A.bx())
m=A.L()
m.r=D.ajp.gp(0)
b4.af(b2,m)
m=A.L()
m.r=D.ajp.gp(0)
b4.O(new A.r(a5-a7*0.62,a6-a8*0.5),u,m)
m=b5.e
u=b1-m
b2=a7*1.38
o=a5-b2
j=b1+4
p=a5+b2
e=new A.aH(b0,B.aj,a4,a4,A.a([],b3))
e.E(new A.aZ(o,j))
n=b1-m*0.55
e.E(new A.ce(a5-a9,n,a5,u))
e.E(new A.ce(a5+a9,n,p,j))
e.E(new A.ce(a5,b1+a7*0.34,o,j))
e.E(new A.bx())
b1=A.L()
n=a7*1.4
b1.san(A.jG(new A.r(a5-n,0),new A.r(a5+n,0),D.dlT,B.mq,B.x,a4))
b4.af(e,b1)
J.bt(v.save())
b4.mx(0,e)
for(a9=p-o,s=0;s<70;++s){d=s/69
b1=Math.sin(d*3.141592653589793)
p=t.ai()
n=(t.h4()?B.w:D.biX).j(0.16)
i=new A.ar(B.S,B.Q,B.V,B.X,B.U)
i.b=B.aa
i.c=0.9
i.r=n.gp(0)
i.d=B.bG
i.e=B.dQ
b4.ah(new A.r(a5+(p-0.5)*3,u),new A.r(o+a9*d,j+b1*a7*0.3),i)}for(l=1;l<5;++l){a0=u+m*l/4.6
a1=b2*l/4.6
b1=A.a([],b3)
p=new A.aH(b0,B.aj,a4,a4,b1)
n=a0+2
b1.push(new A.aZ(a5-a1,n))
p.ab()
n=new A.ce(a5,a0+7+l*1.5,a5+a1,n)
b1.push(n)
b1=p.f
if(b1!=null)n.ak(b1)
p.ab()
b1=B.w.j(0.22)
n=new A.ar(B.S,B.Q,B.V,B.X,B.U)
n.b=B.aa
n.c=1.2
n.r=b1.gp(0)
n.d=B.bG
n.e=B.dQ
b4.af(p,n)}v.restore()
for(s=0;s<46;++s){d=s/45
a2=o+a9*d
a3=j+Math.sin(d*3.141592653589793)*a7*0.3
b1=t.ai()
b2=t.ai()
v=new A.ar(B.S,B.Q,B.V,B.X,B.U)
v.b=B.aa
v.c=1.1
v.r=D.bqm.gp(0)
v.d=B.bG
v.e=B.dQ
b4.ah(new A.r(a2,a3),new A.r(a2+(b1-0.5)*2,a3+3+b2*4),v)}a9=new A.aH(b0,B.aj,a4,a4,A.a([],b3))
b0=u+4
a9.E(new A.aZ(a5-2.5,b0))
a9.E(new A.aq(a5,u-7))
a9.E(new A.aq(a5+2.5,b0))
a9.E(new A.bx())
b0=A.L()
b0.r=D.bmn.gp(0)
b4.af(a9,b0)},
ic3(d,e){var w,v,u,t,s,r,q
for(w=e.a,v=e.b,u=v+0,t=v+-16,s=0;s<2;++s){r=w+I.aDK[s]
$.S()
q=new A.ar(B.S,B.Q,B.V,B.X,B.U)
q.b=B.aa
q.c=3
q.r=D.a_I.gp(0)
q.d=B.bG
q.e=B.dQ
d.ah(new A.r(r,u),new A.r(r,t),q)}u=A.bX(e.a5(0,K.aN2),24,36)
t=$.S()
r=A.L()
r.r=D.bvw.gp(0)
d.c0(u,r)
t=new A.aH(t.r,B.aj,null,null,A.a([],x.v))
r=w-24
u=v-30
t.E(new A.aZ(r,u))
t.E(new A.aq(w,v-54))
t.E(new A.aq(w+24,u))
t.E(new A.ce(w,v-24,r,u))
t.E(new A.bx())
u=A.L()
u.r=D.aij.gp(0)
d.af(t,u)},
ibq(d){switch(B.o.F(d,8)){case 0:return D.b25
case 1:return D.b23
case 2:return D.b22
case 3:return D.b21
case 4:return D.b24
case 5:return D.b26
case 6:return D.hHJ
default:return D.hHI}},
SQ(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){var w=new C.bpR()
w.a=n
w.b=q
w.c=g
w.d=r
w.y=h
w.z=i
w.e=t
w.r=o
w.x=f
w.Q=j==null?D.a9K:j
w.as=k==null?D.EH:k
C.hD6(d,e,p,C.ibq(m),w,s,m,l)},
hEz(d,e){return(0.2+0.8*Math.abs(Math.sin(d*10+e)))*(0.55+0.45*Math.sin(d*3.1+e*2))},
bUc:function bUc(){var _=this
_.a=0
_.d=_.c=_.b=!1
_.e=0
_.r=_.f=-1
_.w=0.35
_.x=null
_.y=-1
_.z=null
_.Q=3
_.as=-1},
tk:function tk(d,e,f,g,h,i,j,k,l,m){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l
_.y=m},
bpR:function bpR(){var _=this
_.a=0
_.b=0.25
_.z=_.y=_.x=_.w=_.r=_.f=_.e=_.d=_.c=0
_.as=_.Q=null
_.at=!1},
amM:function amM(){this.b=this.a=null},
aXi:function aXi(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bU4:function bU4(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bU5:function bU5(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bU6:function bU6(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bU7:function bU7(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bU8:function bU8(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bU9:function bU9(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bUa:function bUa(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bUb:function bUb(){},
bU3:function bU3(d){this.a=d},
ago:function ago(d,e){this.a=d
this.b=e},
ael:function ael(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
Nc(d){var w,v,u,t,s=A.a([],x.u)
for(w=d.f,v=w.length,u=0;u<w.length;w.length===v||(0,A.I)(w),++u){t=w[u]
if(!t.as&&B.a.i(t.b).length!==0)s.push(t)}s=new C.bSO(s)
s.bCi(d)
return s},
H7(d,e,f,g,h,i,j){var w,v=A.U(g).k("Y<1>")
v=A.d0(new A.Y(g,new C.fwx(f),v),v.k("M.E"))
w=A.C(v,A.a3(v).k("ci.E"))
B.d.e0(w,d)
if(w.length===0)return null
v=A.a([f],x.s)
B.d.u(v,A.cY(w,0,A.dD(3,"count",x.S),A.U(w).c))
B.d.e0(v,d)
return new C.lA(e,v,B.d.co(v,f),h,i,"tree",j)},
iwG(c5,c6,c7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3=null,b4="tf",b5="child",b6="children",b7="grandfather",b8="grandmother",b9="grandparent",c0=x.N,c1=A.T(c0,x.cg),c2=new C.h7b(c1),c3=x.s,c4=A.a([],c3)
for(w=c5.b,v=w.length,u=0;u<w.length;w.length===v||(0,A.I)(w),++u)c4.push(B.a.i(w[u].b))
c4=A.jH(c4,c0)
t=A.C(c4,A.a3(c4).k("ci.E"))
c4=A.a([],c3)
for(v=w.length,u=0;u<w.length;w.length===v||(0,A.I)(w),++u){s=B.a.i(w[u].x)
if(s.length!==0)c4.push(s)}c4=A.jH(c4,c0)
r=A.C(c4,A.a3(c4).k("ci.E"))
c4=A.a([],c3)
for(v=w.length,u=0;u<w.length;w.length===v||(0,A.I)(w),++u){s=B.a.i(w[u].z)
if(s.length!==0)c4.push(s)}c4=A.jH(c4,c0)
q=A.C(c4,A.a3(c4).k("ci.E"))
for(c4=w.length,v=A.U(t).k("Y<1>"),s=v.k("M.E"),p=A.U(w).k("Y<1>"),o=p.k("M.E"),n=x.S,u=0;u<w.length;w.length===c4||(0,A.I)(w),++u){m=w[u]
l=B.a.i(m.b)
k=m.d
j=k==null
if(j)i=b3
else{h=c5.c
h===$&&A.c()
i=h.h(0,k)}if(i!=null){h=i.c
if(h===D.wM)g="father"
else g=h===D.oB?"mother":"parent"
h=B.a.i(i.b)
f=A.C(new A.Y(t,new C.h7d(l),v),s)
e=h+" is the "+g+" of "+l
c2.$2("parent",C.H7(c6,"Who is the "+g+" of "+l+"?",h,f,e+".",e+". A family is a chain, and each person is a link.",20))
if(c7){d=A.C(new A.Y(w,new C.h7e(i,m),p),o)
B.d.e0(d,c6)
c2.$2(b4,new C.lA("True or false: "+h+" is the "+g+" of "+l+".",D.aCC,0,"Yes, "+h+" is the "+g+" of "+l+".","",b4,15))
if(d.length!==0)c2.$2(b4,new C.lA("True or false: "+B.a.i(B.d.gH(d).b)+" is the "+g+" of "+l+".",D.aCC,1,"No, the "+g+" of "+l+" is "+h+".","",b4,15))}}a0=c5.Ge(m)
h=a0.length
if(h!==0){a1=a0[c6.aw(h)]
h=B.a.i(a1.b)
f=A.C(new A.Y(t,new C.h7f(l,a0,c5),v),s)
e=a1.c
if(e===D.wM)e="son"
else e=e===D.oB?"daughter":b5
a2=l+" has "
a3=a0.length
a4=a3===1?b5:b6
c2.$2(b5,C.H7(c6,"Which of these people is a child of "+l+"?",h,f,h+" is the "+e+" of "+l+".",a2+a3+" "+a4+", and "+h+" is one of them.",20))
h=a0.length
a5=A.ew([h+1,h+2,Math.max(0,h-1)],n)
a5.W(0,a0.length)
h=a0.length
a4=A.a([],c3)
for(f=a5.$ti,e=new A.mD(a5,a5.r,f.k("mD<1>")),e.c=a5.e,f=f.c;e.C();){a3=e.d
a4.push(A.w(a3==null?f.a(a3):a3))}f=a0.length
e=""+f
f=f===1
a3=f?b5:b6
f=f?b5:b6
c2.$2("count",C.H7(c6,"How many children does "+l+" have?",""+h,a4,a2+e+" "+a3+".","Count them with me: "+l+" has "+e+" "+f+".",15))
if(a0.length>=2&&a0[0].Q!==a0[1].Q){h=B.a.i(B.d.gH(a0).b)
f=A.a([],c3)
for(e=A.U(a0),a2=e.k("iE<1>"),a3=new A.iE(a0,1,b3,a2),a3.nb(a0,1,b3,e.c),a3=new A.bR(a3,a3.gJ(0),a2.k("bR<ak.E>")),a2=a2.k("ak.E");a3.C();){e=a3.d
f.push(B.a.i((e==null?a2.a(e):e).b))}c2.$2("oldest",C.H7(c6,"Who is the oldest child of "+l+"?",h,f,B.a.i(B.d.gH(a0).b)+" was born first.","The first born of "+l+" is "+B.a.i(B.d.gH(a0).b)+". The eldest child often helps to guide the younger ones.",20))}}a6=c5.arP(m)
if(a6!=null){h=B.a.i(a6.b)
f=A.C(new A.Y(t,new C.h7g(l),v),s)
e=l+" is married to "+h
c2.$2("spouse",C.H7(c6,"Who is "+l+" married to?",h,f,e+".",e+". When two people marry, two families become one.",20))}if(j)i=b3
else{j=c5.c
j===$&&A.c()
i=j.h(0,k)}a7=b3
if(!(i==null)){k=i.d
if(!(k==null)){j=c5.c
j===$&&A.c()
k=j.h(0,k)
a7=k}}if(a7!=null){k=B.a.i(a7.b)
j=A.C(new A.Y(t,new C.h7h(l),v),s)
h=k+" is the "
f=a7.c
e=f===D.wM
if(e)a2=b7
else a2=f===D.oB?b8:b9
if(e)f=b7
else f=f===D.oB?b8:b9
c2.$2("grand",C.H7(c6,"Who is the grandparent of "+l+"?",k,j,h+a2+" of "+l+".",h+f+" of "+l+", two steps up the tree.",20))}a8=c5.aNv(m)
k=a8.length
if(k!==0){k=B.a.i(a8[c6.aw(k)].b)
j=A.C(new A.Y(t,new C.h7i(l,a8,c5),v),s)
h=k+" and "+l
c2.$2("sibling",C.H7(c6,"Who is a brother or sister of "+l+"?",k,j,h+" share the same parent.",h+" are brother and sister: the same roots, two branches.",20))}k=B.a.i(m.x)
if(k.length!==0){j=A.C(r,c0)
B.d.u(j,D.cS7)
h=l+" was born in "+k
c2.$2("place",C.H7(c6,"Where was "+l+" born?",k,j,h+".",h+". Every one of us comes from a place.",20))}k=B.a.i(m.z)
if(k.length!==0){j=A.C(q,c0)
B.d.u(j,D.d7R)
h=l+" works as "+k
f=h+"."
c2.$2("job",C.H7(c6,"What work does "+l+" do?",k,j,f,h+". Work is how we serve the family and the village.",20))
h=A.a([],c3)
for(j=w.length,a9=0;a9<w.length;w.length===j||(0,A.I)(w),++a9){b0=w[a9]
if(B.a.i(b0.z).toLowerCase()!==k.toLowerCase())h.push(B.a.i(b0.b))}c2.$2("who",C.H7(c6,"Who works as "+k+"?",l,h,f,"Remember: "+l+" works as "+k+".",20))}k=A.ag("(1[6-9]\\d\\d|20\\d\\d)",!0,!1,!1,!1).cF(m.w)
b1=k==null?b3:k.b[1]
if(b1!=null){b2=A.j5(b1,b3,b3)
c2.$2("year",C.H7(c6,"In which year was "+l+" born?",b1,A.a([""+(b2+2),""+(b2-3),""+(b2+5),""+(b2-1)],c3),l+" was born in "+b1+".",l+" was born in the year "+b1+".",25))}}return c1},
bF2(d,e,f,g){var w,v,u,t,s,r,q,p,o,n={},m=C.Nc(d),l=new A.e0()
l.cU(f)
w=C.iwG(m,l,g)
for(v=new A.dn(w,w.r,w.e);v.C();)J.hmE(v.d,l)
v=A.a3(w).k("cr<1>")
u=A.C(new A.cr(w,v),v.k("M.E"))
B.d.e0(u,l)
t=A.a([],x.J)
s=A.aR(x.N)
n.a=0
for(;;){if(!(t.length<e&&B.d.aU(u,new C.fK2(n,w))))break
for(v=u.length,r=0;r<u.length;u.length===v||(0,A.I)(u),++r){q=u[r]
if(t.length>=e)break
p=w.h(0,q)
p.toString
if(J.ad(p)>n.a){p=w.h(0,q)
p.toString
p=s.I(0,J.u(p,n.a).a)}else p=!1
if(p){p=w.h(0,q)
p.toString
t.push(J.u(p,n.a))}}++n.a}v=t.length
if(v<e){v=A.C(D.aAC,x.df)
B.d.e0(v,l)
for(p=v.length,r=0;r<v.length;v.length===p||(0,A.I)(v),++r){o=v[r]
if(t.length>=e)break
t.push(C.hDd(o,l))}}else if(!g&&v>3){o=C.hDd(D.aAC[l.aw(14)],l)
t[t.length-1-l.aw(3)]=o}return t},
hDd(d,e){var w=d.b,v=w[d.c]
w=A.C(w,x.N)
B.d.e0(w,e)
return new C.lA(d.a,w,B.d.co(w,v),d.d,d.e,d.f,d.r)},
hIw(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=C.Nc(a2),a1=new A.e0()
a1.cU(a3)
w=A.a([],x.ar)
v=x.u
u=A.a([],v)
for(t=a0.b,s=t.length,r=0;r<t.length;t.length===s||(0,A.I)(t),++r){q=t[r]
if(a0.Ge(q).length>=2)u.push(q)}B.d.e0(u,a1)
for(s=u.length,p=x.t,o=x.s,r=0;r<u.length;u.length===s||(0,A.I)(u),++r){n=u[r]
m=a0.Ge(n)
l=A.U(m)
k=new A.iE(m,0,5,l.k("iE<1>"))
k.nb(m,0,5,l.c)
j=k.dq(0)
if(new A.N(j,new C.fYC(),A.U(j).k("N<1,G>")).fL(0).a<j.length)continue
m=B.a.i(n.b)
l=A.a([],o)
for(k=j.length,i=0;i<j.length;j.length===k||(0,A.I)(j),++i)l.push(B.a.i(j[i].b))
k=A.a([],p)
for(h=0;h<j.length;++h)k.push(h)
g=A.a([],p)
for(f=j.length,i=0;i<j.length;j.length===f||(0,A.I)(j),++i)g.push(C.aT5(a0,j[i]))
w.push(new C.auQ("The children of "+m,"Tap two people to swap them. Put them in a line from the oldest to the youngest.",g,l,k))
if(w.length>=4)return w}u=x.S
e=A.T(u,x.do)
for(s=t.length,r=0;r<t.length;t.length===s||(0,A.I)(t),++r){q=t[r]
J.c5(e.c1(0,a0.amX(q),new C.fYD()),q)}if(e.a>=2&&w.length<4){t=e.$ti.k("cr<1>")
d=A.C(new A.cr(e,t),t.k("M.E"))
B.d.ff(d)
v=A.a([],v)
for(u=A.cY(d,0,A.dD(5,"count",u),A.U(d).c),t=u.$ti,u=new A.bR(u,u.gJ(0),t.k("bR<ak.E>")),t=t.k("ak.E");u.C();){s=u.d
s=e.h(0,s==null?t.a(s):s)
s.toString
m=J.cE(s)
m.e0(s,a1)
v.push(m.gH(s))}u=A.a([],o)
for(t=v.length,r=0;r<v.length;v.length===t||(0,A.I)(v),++r)u.push(B.a.i(v[r].b))
t=A.a([],p)
for(h=0;h<v.length;++h)t.push(h)
s=A.a([],p)
for(p=v.length,r=0;r<v.length;v.length===p||(0,A.I)(v),++r)s.push(C.aT5(a0,v[r]))
w.push(new C.auQ("Which generation comes first?","Tap two people to swap them. Put the eldest generation first and the youngest last.",s,u,t))}return w},
aRy(d){return B.d.aoq(D.aD7,new C.fFS(d))},
imJ(d){return A.nF(new A.Y(D.aD7,new C.fMT(d),x.av))},
bTC(d){return C.hSd(d)},
hSd(d){var w=0,v=A.j(x.S),u,t=2,s=[],r,q,p,o
var $async$bTC=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.aA(),$async$bTC)
case 7:r=f
q=B.a.i(d)
q=A.eq(J.u(r.a,"ngmy_family_stars_v1_"+q.toLowerCase()))
if(q==null)q=0
u=q
w=1
break
t=2
w=6
break
case 4:t=3
o=s.pop()
u=0
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$bTC,v)},
BT(d,e){return C.hSa(d,e)},
hSa(d,e){var w=0,v=A.j(x.S),u,t=2,s=[],r,q,p,o,n,m
var $async$BT=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.aA(),$async$BT)
case 7:r=g
p=B.a.i(d)
o=A.eq(J.u(r.a,"ngmy_family_stars_v1_"+p.toLowerCase()))
if(o==null)o=0
q=o+(e<0?0:e)
w=8
return A.b(r.aC("Int","ngmy_family_stars_v1_"+p.toLowerCase(),q),$async$BT)
case 8:u=q
w=1
break
t=2
w=6
break
case 4:t=3
m=s.pop()
u=e
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$BT,v)},
bTB(d,e,f){return C.hSb(d,e,f)},
hSb(d,e,f){var w=0,v=A.j(x.S),u,t=2,s=[],r,q,p,o
var $async$bTB=A.e(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.aA(),$async$bTB)
case 7:r=h
q=B.a.i(d)
q=A.eq(J.u(r.a,"ngmy_family_best_v1_"+q.toLowerCase()+"_"+e+"_"+f))
if(q==null)q=0
u=q
w=1
break
t=2
w=6
break
case 4:t=3
o=s.pop()
u=0
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$bTB,v)},
BU(d,e,f,g){return C.hSc(d,e,f,g)},
hSc(d,e,f,g){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n,m
var $async$BU=A.e(function(h,i){if(h===1){s.push(i)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.aA(),$async$BU)
case 7:r=i
p=B.a.i(d)
o=A.eq(J.u(r.a,"ngmy_family_best_v1_"+p.toLowerCase()+"_"+e+"_"+f))
q=o==null?0:o
w=g>q?8:9
break
case 8:w=10
return A.b(r.aC("Int","ngmy_family_best_v1_"+p.toLowerCase()+"_"+e+"_"+f,g),$async$BU)
case 10:u=q>0
w=1
break
case 9:t=2
w=6
break
case 4:t=3
m=s.pop()
w=6
break
case 3:w=2
break
case 6:u=!1
w=1
break
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$BU,v)},
bHk(d,e,f){var w
if(f<=0)return 0
w=d===f?20:0
return d*5+w+Math.min(e,8)},
h9e(d,e,f,g){return new C.alk(g,d==null?A.a(["","","",""],x.s):d,e,f)},
hQh(d){var w,v,u,t=d.h(0,"q")
t=J.k(t==null?"":t)
w=A.a([],x.s)
v=x.j
u=J.aT(v.b(d.h(0,"a"))?v.a(d.h(0,"a")):B.cu)
while(u.C())w.push(J.k(u.gP(u)))
u=x.N
w=A.cY(w,0,A.dD(4,"count",x.S),u).dq(0)
B.d.u(w,A.c2(Math.max(0,4-(v.b(d.h(0,"a"))?J.ad(v.a(d.h(0,"a"))):0)),"",!1,u))
v=A.aJ(d.h(0,"c"))
v=v==null?null:B.h.M(v)
v=B.o.D(v==null?0:v,0,3)
u=A.aJ(d.h(0,"s"))
u=u==null?null:B.h.M(u)
return C.h9e(w,v,B.o.D(u==null?20:u,5,60),t)},
hnN(d){var w,v,u,t,s,r,q=J.a8(d),p=q.h(d,"id")
p=J.k(p==null?"":p)
w=q.h(d,"title")
w=J.k(w==null?"":w)
v=A.a([],x.b)
u=x.j
q=J.aT(u.b(q.h(d,"qs"))?u.a(q.h(d,"qs")):B.cu)
u=x.f
t=x.N
s=x.z
while(q.C()){r=q.gP(q)
if(u.b(r))v.push(C.hQh(A.a1(r,t,s)))}return new C.MX(p,w,v)},
hhP(d){var w,v=A.a([],x.c)
for(w=J.aT(d.z);w.C();)v.push(C.hnN(w.gP(w)))
return v},
aT5(d,e){var w=e.c===D.oB
if(d.amX(e)===0&&d.Ge(e).length!==0)return w?0:1
if(d.Ge(e).length!==0||d.arP(e)!=null)return w?2:3
return w?4:5},
hJB(a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=C.Nc(a4),a3=new A.e0()
a3.cU(a5)
w=A.a([],x.dT)
v=a2.b
u=A.C(v,x.P)
B.d.e0(u,a3)
t=x.s
s=A.a([],t)
for(r=v.length,q=0;q<v.length;v.length===r||(0,A.I)(v),++q)s.push(B.a.i(v[q].b))
for(v=u.length,r=x.N,p=x.ec,o=x.cc,n=o.k("M.E"),q=0;q<u.length;u.length===v||(0,A.I)(u),++q){m=u[q]
l=A.a([],t)
k=m.d
if(k==null)j=null
else{i=a2.c
i===$&&A.c()
j=i.h(0,k)}h=a2.Ge(m)
g=a2.arP(m)
f=a2.aNv(m)
k=B.a.i(m.x)
if(k.length!==0)l.push("I was born in "+k+".")
k=B.a.i(m.z)
if(k.length!==0)l.push("I work as "+k+".")
k=A.ag("(1[6-9]\\d\\d|20\\d\\d)",!0,!1,!1,!1).cF(m.w)
e=k==null?null:k.b[1]
if(e!=null)l.push("I was born in the year "+e+".")
k=f.length
if(k!==0){i=k===1?"brother or sister":"brothers and sisters"
l.push("I have "+k+" "+i+".")}k=h.length
if(k!==0){i=k===1?"child":"children"
l.push("I have "+k+" "+i+".")}if(g!=null)l.push("I am married to "+B.a.i(g.b)+".")
if(h.length!==0){k=m.c
if(k===D.wM)k="father"
else k=k===D.oB?"mother":"parent"
l.push("I am the "+k+" of "+B.a.i(B.d.gH(h).b)+".")}if(j!=null){k=j.c
if(k===D.wM)k="father"
else k=k===D.oB?"mother":"parent"
l.push("My "+k+" is "+B.a.i(j.b)+".")}if(l.length<3)continue
B.d.e0(l,a3)
B.d.b_(l,new C.h7B())
d=B.a.i(m.b)
a0=A.C(new A.Y(s,new C.h7C(d),o),n)
B.d.e0(a0,a3)
k=A.a([d],t)
i=A.U(a0)
a1=new A.iE(a0,0,3,i.k("iE<1>"))
a1.nb(a0,0,3,i.c)
B.d.u(k,a1)
B.d.e0(k,a3)
a1=C.aT5(a2,m)
i=new A.iE(l,0,4,p)
i.nb(l,0,4,r)
w.push(new C.bbg(d,a1,i.dq(0),k))
if(w.length>=5)break}return w},
hAF(d){return B.a.q(d,"married to")||B.a.q(d," of ")||B.a.Z(d,"My ")?1:0},
hIH(a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=C.Nc(a4),a3=new A.e0()
a3.cU(a5)
w=A.a([],x.gy)
v=x.u
u=A.a([],v)
for(t=a2.b,s=t.length,r=0;r<t.length;t.length===s||(0,A.I)(t),++r){q=t[r]
if(a2.Ge(q).length>=2)u.push(q)}B.d.e0(u,a3)
for(s=u.length,p=x.t,o=x.s,n=x.P,m=x.fT,r=0;r<u.length;u.length===s||(0,A.I)(u),++r){l=u[r]
k=a2.Ge(l)
j=A.U(k)
i=new A.iE(k,0,4,j.k("iE<1>"))
i.nb(k,0,4,j.c)
h=i.dq(0)
i=A.a([],v)
for(k=t.length,j=l.a,g=0;g<t.length;t.length===k||(0,A.I)(t),++g){q=t[g]
if(q.a!==j&&!B.d.aU(h,new C.fZe(q))&&q.d!==j)i.push(q)}B.d.e0(i,a3)
k=i.length
if(k===0)continue
k=Math.min(2,k)
j=new A.iE(i,0,k,m)
j.nb(i,0,k,n)
f=j.dq(0)
j=B.a.i(l.b)
k=C.aT5(a2,l)
i=A.a([],o)
for(e=h.length,g=0;g<h.length;h.length===e||(0,A.I)(h),++g)i.push(B.a.i(h[g].b))
e=A.a([],p)
for(d=h.length,g=0;g<h.length;h.length===d||(0,A.I)(h),++g)e.push(C.aT5(a2,h[g]))
d=A.a([],o)
for(a0=f.length,g=0;g<f.length;f.length===a0||(0,A.I)(f),++g)d.push(B.a.i(f[g].b))
a0=A.a([],p)
for(a1=f.length,g=0;g<f.length;f.length===a1||(0,A.I)(f),++g)a0.push(C.aT5(a2,f[g]))
w.push(new C.aap(j,k,i,e,d,a0))
if(w.length>=3)break}return w},
lA:function lA(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
bSO:function bSO(d){this.b=d
this.c=$},
bSP:function bSP(){},
bSQ:function bSQ(d){this.a=d},
fwx:function fwx(d){this.a=d},
h7b:function h7b(d){this.a=d},
h7c:function h7c(){},
h7d:function h7d(d){this.a=d},
h7e:function h7e(d,e){this.a=d
this.b=e},
h7f:function h7f(d,e,f){this.a=d
this.b=e
this.c=f},
h7a:function h7a(d,e){this.a=d
this.b=e},
h7g:function h7g(d){this.a=d},
h7h:function h7h(d){this.a=d},
h7i:function h7i(d,e,f){this.a=d
this.b=e
this.c=f},
h79:function h79(d,e){this.a=d
this.b=e},
fK2:function fK2(d,e){this.a=d
this.b=e},
auQ:function auQ(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fYC:function fYC(){},
fYD:function fYD(){},
zD:function zD(d,e,f){this.a=d
this.b=e
this.c=f},
fFS:function fFS(d){this.a=d},
fMT:function fMT(d){this.a=d},
alk:function alk(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bNC:function bNC(){},
MX:function MX(d,e,f){this.a=d
this.b=e
this.c=f},
bbg:function bbg(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.e=g},
h7B:function h7B(){},
h7C:function h7C(d){this.a=d},
aap:function aap(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fZe:function fZe(d){this.a=d},
bix:function bix(d,e,f){var _=this
_.a=d
_.b=e
_.c=f
_.d=-0.05
_.f=_.e=!1
_.r=0},
agm:function agm(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=1},
akD:function akD(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
akE:function akE(d,e,f,g,h){var _=this
_.e=_.d=$
_.f=d
_.r=e
_.w=f
_.x=0
_.y=3
_.ay=_.ax=_.at=_.as=_.Q=_.z=0
_.cx=_.CW=_.ch=!1
_.db=_.cy=0.5
_.dx=0
_.dy=""
_.fy=_.fx=_.fr=0
_.go=-9
_.id=0.5
_.bw$=g
_.a9$=h
_.c=_.a=null},
bLL:function bLL(d){this.a=d},
bLG:function bLG(){},
bLM:function bLM(){},
bLE:function bLE(){},
bLF:function bLF(){},
bLK:function bLK(d){this.a=d},
bLH:function bLH(d,e){this.a=d
this.b=e},
bLJ:function bLJ(d,e){this.a=d
this.b=e},
bLI:function bLI(d,e){this.a=d
this.b=e},
bLD:function bLD(d){this.a=d},
bdJ:function bdJ(d,e){this.b=d
this.a=e},
QV:function QV(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aCc:function aCc(d,e,f){this.b=d
this.c=e
this.a=f},
aAF:function aAF(d,e,f){this.a=d
this.b=e
this.c=f},
avr:function avr(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
avs:function avs(d,e,f){var _=this
_.d=$
_.y=_.x=_.w=_.r=_.f=_.e=0
_.Q=_.z=$
_.as=d
_.at=""
_.ax=-1
_.ch=_.ay=!1
_.cO$=e
_.b9$=f
_.c=_.a=null},
crt:function crt(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cru:function cru(d){this.a=d},
crs:function crs(d){this.a=d},
crv:function crv(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
crw:function crw(){},
crx:function crx(d,e){this.a=d
this.b=e},
cry:function cry(){},
crz:function crz(d){this.a=d},
crp:function crp(d){this.a=d},
crq:function crq(d,e){this.a=d
this.b=e},
crr:function crr(d,e,f){this.a=d
this.b=e
this.c=f},
crk:function crk(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
crm:function crm(d,e){this.a=d
this.b=e},
crn:function crn(d,e){this.a=d
this.b=e},
crl:function crl(d,e){this.a=d
this.b=e},
crj:function crj(){},
cro:function cro(){},
bdc:function bdc(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.a=h},
cRx:function cRx(){},
azp:function azp(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
azq:function azq(d){var _=this
_.d=$
_.e=0
_.f=1
_.y=_.x=_.w=_.r=0
_.z=d
_.Q=-1
_.ax=_.at=_.as=!1
_.ay=0
_.c=_.a=_.ch=null},
cGq:function cGq(d){this.a=d},
cGp:function cGp(d){this.a=d},
cGy:function cGy(d,e){this.a=d
this.b=e},
cGz:function cGz(d,e){this.a=d
this.b=e},
cGA:function cGA(d){this.a=d},
cGx:function cGx(d){this.a=d},
cGB:function cGB(d){this.a=d},
cGC:function cGC(d,e){this.a=d
this.b=e},
cGD:function cGD(){},
cGE:function cGE(d){this.a=d},
cGs:function cGs(d){this.a=d},
cGt:function cGt(d,e){this.a=d
this.b=e},
cGr:function cGr(d,e){this.a=d
this.b=e},
cGu:function cGu(){},
cGv:function cGv(){},
cGw:function cGw(d,e){this.a=d
this.b=e},
aAp:function aAp(){},
aHI:function aHI(){},
hfr(d){var w=d.a,v=d.b,u=Math.min(w/450,v/900)
return new A.bsb((w-450*u)/2,(v-900*u)/2,u)},
aga:function aga(){},
f9_:function f9_(d){this.a=d},
aLw:function aLw(d){var _=this
_.a=d
_.b=null
_.c=""
_.d=0},
fj9:function fj9(d){this.a=d},
amC:function amC(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
amD:function amD(d,e,f,g,h,i,j){var _=this
_.e=_.d=$
_.f=d
_.r=$
_.w=e
_.z=_.y=_.x=0
_.at=_.as=_.Q=!1
_.ay=_.ax=-9
_.qe$=f
_.M6$=g
_.ant$=h
_.bw$=i
_.a9$=j
_.c=_.a=null},
bTA:function bTA(d){this.a=d},
bTz:function bTz(){},
bTx:function bTx(d){this.a=d},
bTv:function bTv(){},
bTw:function bTw(d){this.a=d},
bTs:function bTs(d,e){this.a=d
this.b=e},
bTt:function bTt(){},
bTu:function bTu(d){this.a=d},
bTy:function bTy(d,e){this.a=d
this.b=e},
bTr:function bTr(d){this.a=d},
btV:function btV(d,e){this.b=d
this.a=e},
f90:function f90(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
f91:function f91(d,e,f){this.a=d
this.b=e
this.c=f},
f92:function f92(d,e,f){this.a=d
this.b=e
this.c=f},
f93:function f93(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
f94:function f94(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
f95:function f95(){},
amA:function amA(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
amB:function amB(d,e,f,g,h,i,j){var _=this
_.d=$
_.e=d
_.x=_.w=_.r=_.f=0
_.y=-1
_.Q=_.z=$
_.as=e
_.ch=_.ay=_.ax=_.at=!1
_.cx=_.CW=-9
_.qe$=f
_.M6$=g
_.ant$=h
_.bw$=i
_.a9$=j
_.c=_.a=null},
bTd:function bTd(){},
bTo:function bTo(d,e){this.a=d
this.b=e},
bTp:function bTp(d){this.a=d},
bTq:function bTq(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bTk:function bTk(){},
bTj:function bTj(d,e){this.a=d
this.b=e},
bTl:function bTl(d,e){this.a=d
this.b=e},
bTm:function bTm(){},
bTn:function bTn(d){this.a=d},
bTf:function bTf(d){this.a=d},
bTg:function bTg(d){this.a=d},
bTh:function bTh(d){this.a=d},
bTe:function bTe(d,e){this.a=d
this.b=e},
bTi:function bTi(d){this.a=d},
bkm:function bkm(d,e){this.b=d
this.a=e},
dsU:function dsU(){},
a2o:function a2o(d,e){this.a=d
this.b=e},
amw:function amw(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
amx:function amx(d,e,f,g,h,i){var _=this
_.f=_.e=_.d=$
_.r=d
_.w=-1
_.at=_.as=_.z=_.y=_.x=0
_.ch=_.ay=_.ax=!1
_.cy=_.cx=_.CW=0
_.db=2.6
_.qe$=e
_.M6$=f
_.ant$=g
_.bw$=h
_.a9$=i
_.c=_.a=null},
bT_:function bT_(d){this.a=d},
bSZ:function bSZ(){},
bSY:function bSY(){},
bSS:function bSS(){},
bST:function bST(){},
bSX:function bSX(d,e,f){this.a=d
this.b=e
this.c=f},
bSW:function bSW(d){this.a=d},
bSU:function bSU(d,e){this.a=d
this.b=e},
bSV:function bSV(d){this.a=d},
bjN:function bjN(d,e){this.b=d
this.a=e},
aCf:function aCf(){},
bhk:function bhk(){},
aCh:function aCh(){},
bhl:function bhl(){},
aCi:function aCi(){},
bhm:function bhm(){},
uA(d,e,f,g,h){var w,v,u=null,t=A.l(18),s=A.a([],x.V)
s.push(new A.ab(0,B.G,f.j(0.4),B.i3,14))
w=x.p
v=A.a([],w)
if(g!=null)B.d.u(v,A.a([A.X(g,h,u,u,u,20),B.ae],w))
v.push(A.d(d,u,u,u,u,u,u,A.m(u,u,h,u,u,u,u,u,u,u,u,15,u,u,B.u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u))
return A.az(u,A.p(u,A.A(v,B.l,u,B.e,B.N,0,u,u),B.f,u,u,new A.o(f,u,u,t,s,u,B.n),u,u,u,u,B.OO,u,u,u),B.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,e,u,u,u,u,u,u,!1,B.a4)},
hoA(d,e,f,g,h,i,j){return new C.amy(i,h,d,j,e,f,g,null)},
a6S:function a6S(d,e){this.c=d
this.a=e},
bjU:function bjU(d){this.a=d},
tK:function tK(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bSR:function bSR(d){this.a=d},
Iz:function Iz(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
WA:function WA(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bmH:function bmH(d,e){var _=this
_.d=$
_.e=0
_.f=d
_.r=e
_.c=_.a=null},
e3g:function e3g(d,e){this.a=d
this.b=e},
e3h:function e3h(d){this.a=d},
e3i:function e3i(d,e){this.a=d
this.b=e},
e3e:function e3e(d){this.a=d},
e3f:function e3f(d){this.a=d},
e3d:function e3d(d){this.a=d},
e3b:function e3b(d){this.a=d},
e3c:function e3c(d){this.a=d},
e3a:function e3a(d,e){this.a=d
this.b=e},
e3j:function e3j(d){this.a=d},
e3k:function e3k(d,e){this.a=d
this.b=e},
e3l:function e3l(d,e){this.a=d
this.b=e},
e3m:function e3m(d,e){this.a=d
this.b=e},
e3p:function e3p(d,e){this.a=d
this.b=e},
e3q:function e3q(d,e){this.a=d
this.b=e},
e3r:function e3r(d,e){this.a=d
this.b=e},
e3s:function e3s(d,e){this.a=d
this.b=e},
e3t:function e3t(d,e){this.a=d
this.b=e},
e3u:function e3u(d,e,f){this.a=d
this.b=e
this.c=f},
e3v:function e3v(d,e){this.a=d
this.b=e},
e3w:function e3w(d,e){this.a=d
this.b=e},
e3n:function e3n(d){this.a=d},
e3o:function e3o(d){this.a=d},
a0h:function a0h(d,e){this.a=d
this.b=e},
amy:function amy(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
amz:function amz(d){var _=this
_.d=d
_.x=_.w=_.r=_.f=_.e=0
_.y=-1
_.z=3
_.Q=0
_.as=20
_.ax=_.at=null
_.ch=_.ay=0
_.CW=!1
_.c=_.a=null},
bTb:function bTb(d){this.a=d},
bTc:function bTc(d){this.a=d},
bTa:function bTa(d){this.a=d},
bT1:function bT1(d){this.a=d},
bT2:function bT2(d){this.a=d},
bT0:function bT0(d){this.a=d},
bT7:function bT7(d,e,f){this.a=d
this.b=e
this.c=f},
bT8:function bT8(d){this.a=d},
bT4:function bT4(d,e){this.a=d
this.b=e},
bT5:function bT5(d,e,f){this.a=d
this.b=e
this.c=f},
bT9:function bT9(){},
bT6:function bT6(d,e){this.a=d
this.b=e},
bT3:function bT3(d){this.a=d},
Uf:function Uf(d,e){this.c=d
this.a=e},
amv:function amv(d){var _=this
_.e=_.d=$
_.f=d
_.c=_.a=null},
bSC:function bSC(d){this.a=d},
bSD:function bSD(d){this.a=d},
bSN:function bSN(){},
bSM:function bSM(d,e,f){this.a=d
this.b=e
this.c=f},
bSH:function bSH(d,e){this.a=d
this.b=e},
bSG:function bSG(d,e){this.a=d
this.b=e},
bSI:function bSI(d){this.a=d},
bSJ:function bSJ(d,e){this.a=d
this.b=e},
bSK:function bSK(d,e){this.a=d
this.b=e},
bSF:function bSF(d,e){this.a=d
this.b=e},
bSL:function bSL(d,e,f){this.a=d
this.b=e
this.c=f},
bSE:function bSE(d,e){this.a=d
this.b=e},
ile(a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=null,a3="(1[5-9]\\d\\d|20\\d\\d)",a4=C.ajn(a6),a5=a4.length
if(a5===0)return""
w=A.T(x.N,x.P)
for(v=0;v<a4.length;a4.length===a5||(0,A.I)(a4),++v){u=a4[v]
w.n(0,u.a,u)}t=A.bD(new A.V(Date.now(),0,!1))
s=new C.fJu(w,a4)
a5=a4.length
r='Family tree "'+a6.b+'" ('+a5+" people):\n"
for(q=A.U(a4),p=q.k("Y<1>"),q=q.k("cM<1,n>"),o=q.k("M.E"),n=x.s,v=0;v<a4.length;a4.length===a5||(0,A.I)(a4),++v){u=a4[v]
m=A.a([],n)
l=u.c
if(l!==D.zf)m.push(l===D.wM?"male":"female")
l=u.w
k=A.ag(a3,!0,!1,!1,!1).cF(l)
j=k==null?a2:k.b[1]
k=u.y
i=A.ag(a3,!0,!1,!1,!1).cF(k)
h=i==null?a2:i.b[1]
l=B.a.i(l)
i=l.length===0
if(!i){g=B.a.i(u.x)
g=g.length!==0?" in "+g:""
m.push("born "+l+g)}if(i&&B.a.i(u.x).length!==0)m.push("from "+B.a.i(u.x))
l=B.a.i(k)
if(l.length!==0)m.push("died "+l)
l=j!=null
if(l&&h==null)m.push("about "+(t-A.j5(j,a2,a2))+" years old")
if(l&&h!=null)m.push("lived about "+(A.j5(h,a2,a2)-A.j5(j,a2,a2))+" years")
l=B.a.i(u.z)
if(l.length!==0)m.push("work: "+l)
f=s.$1(u)
if(f!=null)m.push("married to "+w.h(0,f).b)
e=u.d
if(e!=null&&w.am(0,e)&&e!==f){l=w.h(0,e)
l.toString
d=s.$1(l)
l=w.h(0,e).b
k=d!=null&&d!==u.a?" and "+w.h(0,d).b:""
m.push("child of "+l+k)}a0=A.C(new A.cM(new A.Y(a4,new C.fJs(u,f),p),new C.fJt(),q),o)
if(a0.length!==0)m.push("children: "+B.d.aN(a0,", "))
l=m.length===0?"":" \u2014 "+B.d.aN(m,"; ")
l=r+("- "+u.b+l)
a1=B.a.i(u.r)
r=a1.length
if(r!==0){l+=". Notes: "+(r>600?B.a.aA(a1,0,600)+"\u2026":a1)
r=l}else r=l
r+="\n"}return B.a.i(r.charCodeAt(0)==0?r:r)},
ilf(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=C.ajn(a0),d=e.length
if(d===0)return""
w=x.N
v=A.T(w,x.P)
for(u=0;t=e.length,u<t;e.length===d||(0,A.I)(e),++u){s=e[u]
v.n(0,s.a,s)}r=new C.fJz(v,e)
q=new C.fJx(v)
p=A.T(w,x.S)
for(u=0;d=e.length,u<d;e.length===t||(0,A.I)(e),++u){s=e[u]
d=q.$1(s)
d.toString
p.n(0,s.a,d)}for(u=0;w=e.length,u<w;e.length===d||(0,A.I)(e),++u){s=e[u]
o=r.$1(s)
if(o!=null&&s.d===o){w=p.h(0,o)
w.toString
p.n(0,s.a,w)}}for(u=0;u<e.length;e.length===w||(0,A.I)(e),++u){s=e[u]
d=s.d
if(d!=null&&v.am(0,d))continue
o=r.$1(s)
if(o==null)continue
d=v.h(0,o).d
if(d!=null&&v.am(0,d)&&d!==s.a){d=p.h(0,o)
d.toString
p.n(0,s.a,d)}}d=p.$ti.k("b8<2>")
d=A.d0(new A.b8(p,d),d.k("M.E"))
n=A.C(d,A.a3(d).k("ci.E"))
B.d.ff(n)
for(d=n.length,w=x.s,u=0,t="";u<n.length;n.length===d||(0,A.I)(n),++u){m=n[u]
t+="Generation "+(m+1)+"\n"
for(l=B.d.gae(e),k=new A.eL(l,new C.fJy(p,m));k.C();t=f){j=l.gP(0)
i=A.a([],w)
h=r.$1(j)
if(h!=null)i.push("married to "+v.h(0,h).b)
g=j.d
if(g!=null&&v.am(0,g)&&h!==g)i.push("child of "+v.h(0,g).b)
j=j.b
f=i.length===0?"":" \u2014 "+B.d.aN(i,", ")
f=t+("\u2022 "+j+f+"\n")}t+="\n"}return B.a.i(t.charCodeAt(0)==0?t:t)},
i6r(d,e,f,g){var w,v,u=C.ilg(d,e)
if(u<=0||f.length<=u)return new A.afP(!1,D.E0,f)
if(g.q(0,e.a))return new A.afP(!1,D.E0,f)
w=A.U(f).c
v=A.cY(f,0,A.dD(u,"count",x.S),w).dq(0)
return new A.afP(!0,A.cY(f,u,null,w).dq(0),v)},
i6s(d3,d4,d5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1=d5?d3.f:C.ajn(d3),d2=d1.length
if(d2===0)return D.hEV
w=x.N
v=A.T(w,x.P)
for(u=0;u<d1.length;d1.length===d2||(0,A.I)(d1),++u){t=d1[u]
v.c1(0,t.a,new C.dip(t))}s=new C.diG(v)
d2=x.dy
r=A.T(w,d2)
q=new C.diy(r)
for(p=new A.dn(v,v.r,v.e);p.C();){o=p.d
n=o.e
if(!s.$1(n)||n===o.a)continue
o=o.a
n.toString
q.$2(o,n)
q.$2(n,o)}m=new C.dix(r)
l=A.T(w,x.do)
for(p=new A.dn(v,v.r,v.e);p.C();){o=p.d
k=o.d
j=!0
if(s.$1(k)){i=o.a
if(k!==i){k.toString
j=m.$2(k,i)}}if(j)continue
J.c5(l.c1(0,k,new C.diq()),o)}h=new C.diw(s)
g=new C.div(l,r)
p=v.$ti.k("b8<2>")
o=p.k("Y<M.E>")
f=A.C(new A.Y(new A.b8(v,p),new C.dir(h),o),o.k("M.E"))
e=f.length===0?new A.b8(v,p).gH(0):B.d.gH(f)
p=f.length
if(p>1)for(d=-1,u=0;u<f.length;f.length===p||(0,A.I)(f),++u){t=f[u]
a0=g.$2(t.a,A.aR(w))
if(a0>d){d=a0
e=t}}a1=A.aR(w)
p=x.S
a2=A.T(w,p)
a3=A.T(w,w)
a4=A.T(w,d2)
d2=x.i
a5=A.T(w,d2)
a6=A.T(w,x.d9)
a7=A.T(w,d2)
a8=A.a([],x.s)
a9=new C.diE(new C.diA(a1,a2,v,r,a3,l,d3,d4,a4,a5,a6),a8,A.T(p,d2),a7)
p=e.a
a9.$2(p,0)
for(o=new A.dn(v,v.r,v.e),j=a2.gams(a2);o.C();){b0=o.d
i=b0.a
if(a1.q(0,i))continue
b1=A.ew([i],w)
for(;h.$1(b0);b0=k){k=v.h(0,b0.d)
i=k.a
if(a1.q(0,i)||!b1.I(0,i))break}if(h.$1(b0)&&a2.am(0,b0.d)){i=a2.h(0,b0.d)
i.toString
b2=i+1}else{i=r.h(0,b0.a)
b3=A.nF(J.dI(i==null?B.Z:i,j))
if(b3!=null){i=a2.h(0,b3)
i.toString
b2=i}else b2=0}a9.$2(b0.a,b2)}b4=A.T(w,x.dO)
b5=A.a([],x.M)
b6=A.T(w,d2)
b7=new C.dio(a2,new C.diF(),b6,a3,b4,v,a4,a5,a6,b5)
for(d2=a8.length,u=0;u<a8.length;a8.length===d2||(0,A.I)(a8),++u){b8=a8[u]
w=a7.h(0,b8)
w.toString
b7.$2(b8,w)}for(d2=new A.dn(b4,b4.r,b4.e),b9=1/0,c0=0,c1=16;d2.C();){w=d2.d.b
o=w.a
b9=Math.min(b9,o-42)
c0=Math.max(c0,o+42)
c1=Math.max(c1,w.b+112+156)}for(d2=b5.length,u=0;u<d2;++u){w=b5[u].b
o=w.a
b9=Math.min(b9,o-42)
c0=Math.max(c0,o+42)
c1=Math.max(c1,w.b+112+40)}c2=24-(b9===1/0?0:b9)
d2=b4.$ti.k("cr<1>")
d2=A.C(new A.cr(b4,d2),d2.k("M.E"))
w=d2.length
u=0
for(;u<d2.length;d2.length===w||(0,A.I)(d2),++u){b8=d2[u]
c3=b4.h(0,b8)
o=c3.a
j=c3.b
b4.n(0,b8,new C.GH(o,new A.r(j.a+c2,j.b)))}for(d2=b5.length,c4=0;c4<d2;++c4){c5=b5[c4]
w=c5.b
b5[c4]=new C.L0(c5.a,new A.r(w.a+c2,w.b),c5.c,c5.d)}d2=b6.$ti.k("cr<1>")
d2=A.C(new A.cr(b6,d2),d2.k("M.E"))
w=d2.length
u=0
for(;u<d2.length;d2.length===w||(0,A.I)(d2),++u){b8=d2[u]
o=b6.h(0,b8)
o.toString
b6.n(0,b8,o+c2)}c6=A.a([],x.dE)
a3.bO(0,new C.dis(c6,b4))
for(d2=new A.cd(a4,a4.$ti.k("cd<1,2>")).gae(0),w=x.g;d2.C();){c7=d2.d
c8=c7.a
c9=b6.h(0,c8)
if(c9==null)continue
o=A.a([],w)
for(j=J.aT(c7.b);j.C();){i=j.gP(j)
if(b6.am(0,i)){d0=b6.h(0,i)
d0.toString
o.push(new A.r(d0,b4.h(0,i).b.b))}}for(j=B.d.gae(b5),i=new A.eL(j,new C.dit(c8));i.C();)o.push(j.gP(0).b)
if(o.length===0)continue
B.d.b_(o,new C.diu())
c6.push(new C.aLr(new A.r(c9,b4.h(0,c8).b.b+112),B.J,!1,o))}return new C.bhq(b4,c6,b5,c0+c2+24,c1+24,p,b6.h(0,p))},
hDV(d){var w=A.ag("(1[5-9]\\d\\d|20\\d\\d)",!0,!1,!1,!1).cF(d)
return w==null?null:w.b[1]},
hxQ(d,e,f,g,h,i,j,k,l,m,n){return new C.a0u(k,f,j,e,l,n,m,d,g,h,i,null)},
aEg(d,e,f,g,h,i,j){return new C.blc(i,d,e,f,j,h,g,null)},
arE:function arE(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aFP:function aFP(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
e4W:function e4W(d){this.a=d},
e4V:function e4V(d){this.a=d},
e4Y:function e4Y(d,e){this.a=d
this.b=e},
e4Z:function e4Z(d,e){this.a=d
this.b=e},
e5_:function e5_(d){this.a=d},
e4U:function e4U(d,e){this.a=d
this.b=e},
e4X:function e4X(d){this.a=d},
e51:function e51(d){this.a=d},
e50:function e50(d,e){this.a=d
this.b=e},
ary:function ary(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aFM:function aFM(d,e,f){var _=this
_.d=$
_.e=d
_.f=!1
_.r=e
_.w=f
_.x=!1
_.c=_.a=_.y=null},
e4m:function e4m(d){this.a=d},
e4k:function e4k(d){this.a=d},
e4l:function e4l(d){this.a=d},
e4n:function e4n(d,e){this.a=d
this.b=e},
e4h:function e4h(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e3J:function e3J(d){this.a=d},
e3K:function e3K(d,e){this.a=d
this.b=e},
e40:function e40(d){this.a=d},
e3Z:function e3Z(d){this.a=d},
e4_:function e4_(d,e){this.a=d
this.b=e},
e41:function e41(d){this.a=d},
e42:function e42(d,e){this.a=d
this.b=e},
e4g:function e4g(d,e){this.a=d
this.b=e},
e3Y:function e3Y(d){this.a=d},
e3X:function e3X(d){this.a=d},
e3W:function e3W(d,e){this.a=d
this.b=e},
e4d:function e4d(){},
e4e:function e4e(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
e4c:function e4c(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
e46:function e46(d){this.a=d},
e47:function e47(d,e,f){this.a=d
this.b=e
this.c=f},
e45:function e45(d,e){this.a=d
this.b=e},
e48:function e48(d,e){this.a=d
this.b=e},
e43:function e43(d,e){this.a=d
this.b=e},
e44:function e44(){},
e49:function e49(d,e){this.a=d
this.b=e},
e4a:function e4a(d){this.a=d},
e4b:function e4b(d,e){this.a=d
this.b=e},
e4f:function e4f(d,e){this.a=d
this.b=e},
e3x:function e3x(d,e){this.a=d
this.b=e},
e3y:function e3y(d,e){this.a=d
this.b=e},
e4p:function e4p(d,e,f){this.a=d
this.b=e
this.c=f},
e4j:function e4j(d,e,f){this.a=d
this.b=e
this.c=f},
e4i:function e4i(d){this.a=d},
e3z:function e3z(d){this.a=d},
e3A:function e3A(d){this.a=d},
e3B:function e3B(){},
e3C:function e3C(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e3G:function e3G(d,e){this.a=d
this.b=e},
e3F:function e3F(d,e){this.a=d
this.b=e},
e3E:function e3E(d){this.a=d},
e3H:function e3H(d,e){this.a=d
this.b=e},
e3D:function e3D(d){this.a=d},
e4o:function e4o(d){this.a=d},
e3T:function e3T(){},
e3U:function e3U(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e3S:function e3S(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e3O:function e3O(d,e,f){this.a=d
this.b=e
this.c=f},
e3N:function e3N(d,e,f){this.a=d
this.b=e
this.c=f},
e3L:function e3L(d,e){this.a=d
this.b=e},
e3P:function e3P(d){this.a=d},
e3Q:function e3Q(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e3M:function e3M(d,e){this.a=d
this.b=e},
e3R:function e3R(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e3V:function e3V(d,e){this.a=d
this.b=e},
e4w:function e4w(){},
e4x:function e4x(d,e){this.a=d
this.b=e},
e4y:function e4y(d){this.a=d},
e4z:function e4z(d,e){this.a=d
this.b=e},
e4s:function e4s(d){this.a=d},
e4q:function e4q(d,e){this.a=d
this.b=e},
e4t:function e4t(d,e){this.a=d
this.b=e},
e4u:function e4u(d,e){this.a=d
this.b=e},
e4v:function e4v(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
e4A:function e4A(d){this.a=d},
e4r:function e4r(d){this.a=d},
e3I:function e3I(d){this.a=d},
bho:function bho(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
dim:function dim(d){this.a=d},
dil:function dil(d,e){this.a=d
this.b=e},
din:function din(d){this.a=d},
dik:function dik(d,e){this.a=d
this.b=e},
fJu:function fJu(d,e){this.a=d
this.b=e},
fJv:function fJv(d){this.a=d},
fJw:function fJw(){},
fJs:function fJs(d,e){this.a=d
this.b=e},
fJt:function fJt(){},
fJz:function fJz(d,e){this.a=d
this.b=e},
fJA:function fJA(d){this.a=d},
fJB:function fJB(){},
fJx:function fJx(d){this.a=d},
fJy:function fJy(d,e){this.a=d
this.b=e},
L0:function L0(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
GH:function GH(d,e){this.a=d
this.b=e},
bhq:function bhq(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
dip:function dip(d){this.a=d},
diG:function diG(d){this.a=d},
diy:function diy(d){this.a=d},
diz:function diz(){},
dix:function dix(d){this.a=d},
diq:function diq(){},
diw:function diw(d){this.a=d},
div:function div(d,e){this.a=d
this.b=e},
dir:function dir(d){this.a=d},
diA:function diA(d,e,f,g,h,i,j,k,l,m,n){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l
_.y=m
_.z=n},
diB:function diB(d){this.a=d},
diC:function diC(d){this.a=d},
diD:function diD(){},
diE:function diE(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
diF:function diF(){},
dio:function dio(d,e,f,g,h,i,j,k,l,m){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l
_.y=m},
dis:function dis(d,e){this.a=d
this.b=e},
dit:function dit(d){this.a=d},
diu:function diu(){},
aLr:function aLr(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bhr:function bhr(d,e){this.b=d
this.a=e},
diH:function diH(){},
diI:function diI(d){this.a=d},
diJ:function diJ(d){this.a=d},
diK:function diK(){},
bld:function bld(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bgt:function bgt(d,e){this.b=d
this.a=e},
bzi:function bzi(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
foL:function foL(d){this.a=d},
boz:function boz(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
eZM:function eZM(d){this.a=d},
eZL:function eZL(d,e){this.a=d
this.b=e},
a0u:function a0u(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.y=k
_.z=l
_.Q=m
_.as=n
_.a=o},
aEe:function aEe(){var _=this
_.y=_.x=_.w=_.r=_.f=_.e=_.d=$
_.as=_.Q=_.z=null
_.at=1
_.ax=0
_.ay=!1
_.c=_.a=null},
dyE:function dyE(d,e){this.a=d
this.b=e},
dyD:function dyD(d){this.a=d},
dyB:function dyB(d){this.a=d},
dyC:function dyC(d){this.a=d},
dyN:function dyN(d){this.a=d},
dyO:function dyO(d){this.a=d},
dyM:function dyM(d,e){this.a=d
this.b=e},
dyP:function dyP(){},
dyS:function dyS(d){this.a=d},
dyL:function dyL(d,e){this.a=d
this.b=e},
dyR:function dyR(){},
dyT:function dyT(d){this.a=d},
dyK:function dyK(d,e){this.a=d
this.b=e},
dyU:function dyU(d){this.a=d},
dyJ:function dyJ(d){this.a=d},
dyV:function dyV(d){this.a=d},
dyI:function dyI(d){this.a=d},
dyW:function dyW(d){this.a=d},
dyH:function dyH(d){this.a=d},
dyX:function dyX(d){this.a=d},
dyG:function dyG(d){this.a=d},
dyY:function dyY(d){this.a=d},
dyF:function dyF(d,e){this.a=d
this.b=e},
dyQ:function dyQ(d){this.a=d},
aeI:function aeI(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
blc:function blc(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
aeH:function aeH(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.f=f
_.r=g
_.w=h
_.a=i
_.$ti=j},
blb:function blb(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
dyZ:function dyZ(d){this.a=d},
dz_:function dz_(d,e){this.a=d
this.b=e},
aEf:function aEf(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aKt:function aKt(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aeJ:function aeJ(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
dz8:function dz8(d){this.a=d},
GD:function GD(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
hsE(d){var w=d.V,v=x.N
return w.jp(w,new C.cg7(),v,v)},
hYQ(d){var w=d.bI
if(w>=0)return w
return 5},
hsG(d,e){var w,v=B.a.i(e.toLowerCase())
if(v.length===0)return null
w=C.hsE(d).h(0,v)
if(w==null||w.length===0)return null
return A.bk(w)},
hsF(d,e){var w=C.hsG(d,e)
if(w!=null&&w.cb(new A.V(Date.now(),0,!1)))return!0
return!1},
hYR(d,e){var w,v,u,t,s=B.a.i(e.toLowerCase())
if(s.length===0)return
w=x.N
v=A.a1(C.hsE(d),w,w)
u=C.hsG(d,e)
t=u!=null&&u.cb(new A.V(Date.now(),0,!1))?u:new A.V(Date.now(),0,!1)
v.n(0,s,t.bS(A.dx(30,0,0,0,0,0).a).aa().ag())
d.V=v},
b1Y(d,e,f,g,h,i,j){var w=0,v=A.j(x.y),u,t
var $async$b1Y=A.e(function(k,l){if(k===1)return A.f(l,v)
for(;;)switch(w){case 0:if(j.w){u=!0
w=1
break}t=j.a
w=3
return A.b(A.lH(t,B.JS),$async$b1Y)
case 3:if(l){u=!0
w=1
break}u=A.lm(!1,f,t,!1,g.length!==0?g:"Subscribe for Family Tree access \u2014 create trees and upload photos (30 days).",B.JS,i)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$b1Y,v)},
cg7:function cg7(){},
hYO(){var w,v=$.oz(),u=J.e6(8,x.N)
for(w=0;w<8;++w)u[w]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[v.aw(32)]
return"FT"+B.d.hg(u)},
Jv(){var w=0,v=A.j(x.a),u,t=2,s=[],r,q,p,o,n,m
var $async$Jv=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.c9(),$async$Jv)
case 3:if(!e){u=A.T(x.N,x.z)
w=1
break}t=5
w=8
return A.b(A.f5("ngmy_family_tree_backup_codes_v1",null,!1,B.bN),$async$Jv)
case 8:r=e
if(r==null){u=A.T(x.N,x.z)
w=1
break}q=J.u(r,"codes")
if(x.f.b(q)){o=A.a1(q,x.N,x.z)
u=o
w=1
break}t=2
w=7
break
case 5:t=4
m=s.pop()
p=A.ac(m)
$.am.$1("[family tree sync codes] load: "+A.w(p))
w=7
break
case 4:w=2
break
case 7:u=A.T(x.N,x.z)
w=1
break
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$Jv,v)},
a8B(d){return C.hYP(d)},
hYP(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$a8B=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.c9(),$async$a8B)
case 3:if(!f){w=1
break}t=5
w=8
return A.b(A.hQ("ngmy_family_tree_backup_codes_v1",A.J(["codes",d,"savedAt",new A.V(Date.now(),0,!1).aa().ag()],x.N,x.z),!1,!1,B.cQ,null),$async$a8B)
case 8:t=2
w=7
break
case 5:t=4
p=s.pop()
r=A.ac(p)
$.am.$1("[family tree sync codes] save: "+A.w(r))
w=7
break
case 4:w=2
break
case 7:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$a8B,v)},
cg6(d){var w=0,v=A.j(x.T),u,t,s,r,q,p,o,n,m
var $async$cg6=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:n=B.a.i(d.toLowerCase())
if(n.length===0){u=null
w=1
break}m=J
w=3
return A.b(C.Jv(),$async$cg6)
case 3:t=m.i9(f),t=t.gae(t),s=x.f
case 4:if(!t.C()){w=5
break}r=t.gP(t)
q=r.b
if(s.b(q)){p=J.a8(q)
o=p.h(q,"email")
p=B.a.i(J.k(o==null?"":o).toLowerCase())===n&&J.z(p.h(q,"active"),!0)}else p=!1
if(p){u=r.a
w=1
break}w=4
break
case 5:u=null
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$cg6,v)},
Ou(d){var w=0,v=A.j(x.T),u,t,s,r,q,p,o,n
var $async$Ou=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:if(B.a.i(d).length===0){u=null
w=1
break}w=3
return A.b(C.cg6(d),$async$Ou)
case 3:t=f
w=t!=null?4:5
break
case 4:w=6
return A.b(C.Jv(),$async$Ou)
case 6:s=f
r=J.a8(s)
q=r.h(s,t)
w=x.f.b(q)?7:8
break
case 7:p=x.N
o=x.z
o=A.dL(A.a1(q,p,o),p,o)
o.n(0,"active",!0)
o.n(0,"updatedAt",new A.V(Date.now(),0,!1).aa().ag())
r.n(s,t,o)
w=9
return A.b(C.a8B(s),$async$Ou)
case 9:case 8:u=t
w=1
break
case 5:n=C.hYO()
w=10
return A.b(C.Jv(),$async$Ou)
case 10:s=f
J.aK(s,n,A.J(["email",B.a.i(d.toLowerCase()),"active",!0,"createdAt",new A.V(Date.now(),0,!1).aa().ag(),"updatedAt",new A.V(Date.now(),0,!1).aa().ag()],x.N,x.K))
w=11
return A.b(C.a8B(s),$async$Ou)
case 11:u=n
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$Ou,v)},
b1X(d){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n,m,l,k,j
var $async$b1X=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:j=B.a.i(d.toLowerCase())
if(j.length===0){w=1
break}w=3
return A.b(C.Jv(),$async$b1X)
case 3:t=f
for(s=J.dq(t),r=s.gdP(t),r=r.dq(r),q=r.length,p=x.f,o=!1,n=0;n<r.length;r.length===q||(0,A.I)(r),++n){m=r[n]
l=m.b
if(p.b(l)){k=J.u(l,"email")
k=B.a.i(J.k(k==null?"":k).toLowerCase())===j}else k=!1
if(k){s.W(t,m.a)
o=!0}}w=o?4:5
break
case 4:w=6
return A.b(C.a8B(t),$async$b1X)
case 6:case 5:case 1:return A.h(u,v)}})
return A.i($async$b1X,v)},
a8C(d,e,f){var w=0,v=A.j(x.H),u
var $async$a8C=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:if(f||B.a.i(d).length===0){w=1
break}w=6
return A.b(C.arD(d,e),$async$a8C)
case 6:w=h?3:5
break
case 3:w=7
return A.b(C.Ou(d),$async$a8C)
case 7:w=4
break
case 5:w=8
return A.b(C.b1X(d),$async$a8C)
case 8:case 4:case 1:return A.h(u,v)}})
return A.i($async$a8C,v)},
arx(d,e,f,g,h,i){var w=0,v=A.j(x.y),u,t,s,r,q,p,o
var $async$arx=A.e(function(j,k){if(j===1)return A.f(k,v)
for(;;)switch(w){case 0:if(g){u=!0
w=1
break}t=B.a.i(d).toUpperCase()
if(t.length===0){u=!1
w=1
break}if(t==="ADMIN-LOCAL"){u=i
w=1
break}s=B.a.i(h.toLowerCase())
r=B.a.i(f.toLowerCase())
o=!(i||s!==r)
if(o){w=3
break}else k=o
w=4
break
case 3:w=5
return A.b(C.arD(f,e),$async$arx)
case 5:k=!k
case 4:if(k){u=!1
w=1
break}w=6
return A.b(A.c9(),$async$arx)
case 6:if(!k){u=!1
w=1
break}o=J
w=7
return A.b(C.Jv(),$async$arx)
case 7:q=o.u(k,t)
if(!x.f.b(q)){u=!1
w=1
break}p=J.a8(q)
if(!J.z(p.h(q,"active"),!0)){u=!1
w=1
break}p=p.h(q,"email")
u=B.a.i(J.k(p==null?"":p).toLowerCase())===s
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$arx,v)},
b1W(d,e){var w=0,v=A.j(x.y),u,t,s,r,q
var $async$b1W=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=B.a.i(d).toUpperCase()
if(r.length===0||r==="ADMIN-LOCAL"){u=!0
w=1
break}w=3
return A.b(A.c9(),$async$b1W)
case 3:if(!g){u=!1
w=1
break}q=J
w=4
return A.b(C.Jv(),$async$b1W)
case 4:t=q.u(g,r)
if(!x.f.b(t)){u=!1
w=1
break}s=J.a8(t)
if(!J.z(s.h(t,"active"),!0)){u=!1
w=1
break}s=s.h(t,"email")
u=B.a.i(J.k(s==null?"":s).toLowerCase())===B.a.i(e.toLowerCase())
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$b1W,v)},
hYS(){var w,v=$.oz(),u=J.e6(10,x.N)
for(w=0;w<10;++w)u[w]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[v.aw(32)]
return"FT"+B.d.hg(u)},
arA(d,e){var w=0,v=A.j(x.he),u,t,s,r,q,p
var $async$arA=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(A.c9(),$async$arA)
case 3:if(!g){u=null
w=1
break}t=C.hYS()
w=4
return A.b(A.WB(),$async$arA)
case 4:s=g
r=B.dV.aL(B.W.av(d.f2(),null))
r=B.cK.gcn().aL(r)
q=e?999:2
J.aK(s,t,A.J(["ownerEmail",d.b,"code",d.a,"payload",r,"usesRemaining",q,"createdAt",new A.V(Date.now(),0,!1).aa().ag()],x.N,x.K))
w=5
return A.b(A.a8D(s),$async$arA)
case 5:p=e?999:2
u=new A.a1E("NGMYFTSYNC2|"+t,t,p)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$arA,v)},
arz(d){var w=0,v=A.j(x.m),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$arz=A.e(function(e,a0){if(e===1)return A.f(a0,v)
for(;;)switch(w){case 0:g=B.a.i(d)
if(g.length===0){u=null
w=1
break}w=3
return A.b(A.WB(),$async$arz)
case 3:p=a0
o=J.a8(p)
n=o.h(p,g)
if(!x.f.b(n)){u=null
w=1
break}m=J.a8(n)
l=A.aJ(m.h(n,"usesRemaining"))
k=l==null?null:B.h.M(l)
if(k==null)k=0
if(k<=0){u=null
w=1
break}l=m.h(n,"ownerEmail")
j=J.k(l==null?"":l)
l=m.h(n,"code")
w=4
return A.b(C.b1W(J.k(l==null?"":l),j),$async$arz)
case 4:if(!a0)$.am.$1("[family tree qr stash] owner code inactive; allowing stash restore")
m=m.h(n,"payload")
t=J.k(m==null?"":m)
if(J.ad(t)===0){u=null
w=1
break}s=null
try{r=B.cb.cD(0,B.cJ.aL(t))
s=C.hsH(r)}catch(f){q=A.ac(f)
$.am.$1("[family tree qr stash] decode: "+A.w(q))
u=null
w=1
break}if(s==null){u=null
w=1
break}h=k-1
if(h<=0)o.W(p,g)
else{m=x.N
l=x.z
l=A.dL(A.a1(n,m,l),m,l)
l.n(0,"usesRemaining",h)
l.n(0,"lastUsedAt",new A.V(Date.now(),0,!1).aa().ag())
o.n(p,g,l)}w=5
return A.b(A.a8D(p),$async$arz)
case 5:u=s
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$arz,v)},
hsH(d){var w,v,u,t,s=null
try{w=B.W.aP(0,d,s)
if(!x.f.b(w))return s
u=J.u(w,"marker")
if(J.k(u==null?"":u)!=="ngmyFamilyTreeSync")return s
u=C.hYU(A.a1(w,x.N,x.z))
return u}catch(t){v=A.ac(t)
$.am.$1("[family tree sync] parse: "+A.w(v))
return s}},
hbo(d){var w=0,v=A.j(x.m),u,t,s
var $async$hbo=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=B.a.i(d)
if(B.a.Z(s,"NGMYFTSYNC2|")){t=s.split("|")
if(t.length>=2){u=C.arz(t[1])
w=1
break}u=null
w=1
break}u=C.hsH(s)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$hbo,v)},
hYU(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=d.h(0,"code"),h=J.k(i==null?"":i)
i=d.h(0,"ownerEmail")
w=J.k(i==null?"":i)
if(h.length===0||w.length===0)return null
v=d.h(0,"trees")
i=x.j
if(i.b(v)){u=J.de(v,x.f)
u=A.cF(u,new C.cg9(),u.$ti.k("M.E"),x.k)
t=A.a3(u).k("Y<M.E>")
s=A.C(new A.Y(u,new C.cga(),t),t.k("M.E"))}else s=A.a([],x._)
u=d.h(0,"exportedAt")
r=A.bk(J.k(u==null?"":u))
if(r==null)r=new A.V(Date.now(),0,!1)
q=A.T(x.N,x.d)
p=d.h(0,"familyBooks")
u=x.f
if(u.b(p))for(t=J.i9(p),t=t.gae(t),o=x.B;t.C();){n=t.gP(t)
m=J.k(n.a)
l=n.b
if(!i.b(l))continue
n=J.de(l,u)
n=A.cF(n,new C.cgb(),n.$ti.k("M.E"),o)
k=A.a3(n).k("Y<M.E>")
j=A.C(new A.Y(n,new C.cgc(),k),k.k("M.E"))
if(j.length!==0)q.n(0,m,j)}return new C.arB(h,w,s,r,q)},
arD(d,e){var w=0,v=A.j(x.y),u,t
var $async$arD=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:if(B.a.i(d).length===0){u=!1
w=1
break}if(A.Ol(e,d)){u=!0
w=1
break}t=J
w=3
return A.b(C.Bm(d),$async$arD)
case 3:u=t.cJ(g)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$arD,v)},
cgi(d){var w=0,v=A.j(x.bC),u,t,s
var $async$cgi=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=J
w=3
return A.b(C.Bm(d),$async$cgi)
case 3:t=s.b9(f,new C.cgj(),x.cs)
t=A.C(t,t.$ti.k("ak.E"))
B.d.b_(t,new C.cgk())
u=t
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$cgi,v)},
WC(d,e,f,g){var w=0,v=A.j(x.m),u,t,s,r,q,p,o,n,m
var $async$WC=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:if(B.a.i(e).length===0){u=null
w=1
break}t=!f
m=t
if(m){w=3
break}else i=m
w=4
break
case 3:w=5
return A.b(C.arD(e,d),$async$WC)
case 5:i=!i
case 4:if(i){u=null
w=1
break}w=t?6:8
break
case 6:w=9
return A.b(C.Ou(e),$async$WC)
case 9:s=i
if(s==null){u=null
w=1
break}w=7
break
case 8:s="ADMIN-LOCAL"
case 7:w=10
return A.b(C.Bm(e),$async$WC)
case 10:r=i
if(g!=null&&B.a.i(g).length!==0){t=J.dI(r,new C.cgg(g))
r=A.C(t,t.$ti.k("M.E"))}t=J.a8(r)
if(t.gau(r)){u=null
w=1
break}t=t.dN(r,new C.cgh(e),x.k)
r=A.C(t,t.$ti.k("ak.E"))
q=A.T(x.N,x.d)
t=r.length,p=0
case 11:if(!(p<r.length)){w=13
break}o=r[p].a
w=14
return A.b(C.LR(e,o),$async$WC)
case 14:n=i
if(J.cJ(n))q.n(0,o,n)
case 12:r.length===t||(0,A.I)(r),++p
w=11
break
case 13:u=new C.arB(s,B.a.i(e.toLowerCase()),r,new A.V(Date.now(),0,!1),q)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$WC,v)},
b20(d,e,f,g){var w=0,v=A.j(x.T),u,t,s,r,q
var $async$b20=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:w=3
return A.b(C.WC(d,e,f,g),$async$b20)
case 3:q=i
if(q==null){u=null
w=1
break}t=g!=null&&q.c.length!==0?B.d.gH(q.c).b:"all-family-trees"
s=A.ag("[^\\w\\-.]+",!0,!1,!1,!1)
s=A.aL(t,s,"_")
r=q.a
u=A.Hm(A.KX(q.f2(),null,"  "),"ngmy-family-trees-"+s.toLowerCase()+"-"+r+".ngmy.json",!1)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$b20,v)},
b2_(d,e,f,g){var w=0,v=A.j(x.eo),u,t,s,r
var $async$b2_=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:w=3
return A.b(C.WC(d,e,f,g),$async$b2_)
case 3:r=i
if(r==null){u=null
w=1
break}w=4
return A.b(C.arA(r,f),$async$b2_)
case 4:t=i
if(t==null){u=null
w=1
break}s=t.a
u=new A.aIt(r.a,s,t.c)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$b2_,v)},
WD(d,e,f,a0){var w=0,v=A.j(x.gG),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$WD=A.e(function(a1,a2){if(a1===1)return A.f(a2,v)
for(;;)switch(w){case 0:w=3
return A.b(C.hbo(a0),$async$WD)
case 3:g=a2
if(g==null){u=null
w=1
break}t=B.a.Z(B.a.i(a0),"NGMYFTSYNC2|")
s=g.b
r=B.a.i(s.toLowerCase())!==B.a.i(e.toLowerCase())
w=!t?4:5
break
case 4:w=6
return A.b(C.arx(g.a,d,e,f,s,r),$async$WD)
case 6:if(!a2){if(r)throw A.W(A.bd("This backup expired or the sender's tree is no longer available."))
throw A.W(A.bd("Backup code is locked. Create a family tree or renew your advisor pass to restore."))}case 5:q=B.a.i(s.toLowerCase())!==B.a.i(e.toLowerCase())
p=g.c,o=p.length,n=g.e,m=0,l=0,k=0
case 7:if(!(k<p.length)){w=9
break}j=p[k]
i=j.a
if(i.length===0){w=8
break}w=q?10:11
break
case 10:w=12
return A.b(C.bEK(e,j),$async$WD)
case 12:case 11:w=13
return A.b(C.aj6(e,j,s),$async$WD)
case 13:h=n.h(0,i)
w=h!=null&&J.cJ(h)?14:15
break
case 14:w=16
return A.b(C.Bx(e,i,h),$async$WD)
case 16:case 15:++m
l+=j.f.length
case 8:p.length===o||(0,A.I)(p),++k
w=7
break
case 9:if(m===0){u=null
w=1
break}u=new A.bsh(l,m,q)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$WD,v)},
arB:function arB(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
cge:function cge(){},
cgf:function cgf(){},
cgd:function cgd(){},
cg9:function cg9(){},
cga:function cga(){},
cgb:function cgb(){},
cgc:function cgc(){},
cgj:function cgj(){},
cgk:function cgk(){},
cgg:function cgg(d){this.a=d},
cgh:function cgh(d){this.a=d},
hkC(d,e,f,g,h,i,j){var w=j.a
if(w.length===0)return A.f4(null,x.H)
return A.hF(d,new C.arC(w,e,g,i,f,h,null),!0,null,x.H)},
dij(d,e,f,g,h,i,j,k){return new C.bhn(i,e,k,j,g,f,h,d,null)},
arC:function arC(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aFO:function aFO(d){var _=this
_.d=d
_.e=!1
_.f=null
_.r=!1
_.c=_.a=null},
e4J:function e4J(d){this.a=d},
e4K:function e4K(d,e,f){this.a=d
this.b=e
this.c=f},
e4O:function e4O(d,e){this.a=d
this.b=e},
e4P:function e4P(d){this.a=d},
e4G:function e4G(d){this.a=d},
e4H:function e4H(d,e){this.a=d
this.b=e},
e4I:function e4I(d,e){this.a=d
this.b=e},
e4N:function e4N(d){this.a=d},
e4M:function e4M(d,e){this.a=d
this.b=e},
e4L:function e4L(){},
e4R:function e4R(d){this.a=d},
e4S:function e4S(d,e){this.a=d
this.b=e},
e4Q:function e4Q(d,e){this.a=d
this.b=e},
diL:function diL(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
bhp:function bhp(d,e,f){this.d=d
this.e=e
this.a=f},
adY:function adY(d,e,f){this.c=d
this.d=e
this.a=f},
bhn:function bhn(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.y=k
_.a=l},
bhs:function bhs(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
a0O:function a0O(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aFN:function aFN(){var _=this
_.d=!1
_.c=_.a=_.e=null},
e4B:function e4B(d,e){this.a=d
this.b=e},
e4C:function e4C(d){this.a=d},
e4D:function e4D(d){this.a=d},
e4E:function e4E(d){this.a=d},
e4F:function e4F(d){this.a=d},
a0P:function a0P(d){this.a=d},
bmI:function bmI(d){var _=this
_.d=d
_.e=!1
_.c=_.a=null},
e4T:function e4T(d,e){this.a=d
this.b=e},
b0u(d,e){return new C.b0t(d,e,null)},
b0t:function b0t(d,e,f){this.c=d
this.d=e
this.a=f},
inG(d){if(!(d!=null&&B.a.Z(d,"ngmy:thumb:")))return null
return B.a.b0(d,11)},
ivd(d){return A.bU(B.L,null,new C.h_L(new C.um(A.P(d).ax.a===B.I)),d,!0,!0,!0,null,!1,!1,x.N)},
huF(d,e){return new C.auE(e,d,null)},
aSZ(d,e,f,g,h,i,j){var w=C.inG(i)
if(w!=null)return A.bv(e,new A.a5(j,f,new C.a7E(w,!0,null),null),B.aq)
return N.aSj(e,B.bX,f,g,h,i,j)},
m1:function m1(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a7E:function a7E(d,e,f){this.c=d
this.d=e
this.a=f},
bmm:function bmm(d,e){var _=this
_.e=_.d=$
_.cO$=d
_.b9$=e
_.c=_.a=null},
dQL:function dQL(d){this.a=d},
dQM:function dQM(){},
dQN:function dQN(d,e){this.a=d
this.b=e},
bml:function bml(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
h_L:function h_L(d){this.a=d},
h_K:function h_K(d,e){this.a=d
this.b=e},
h_J:function h_J(d,e){this.a=d
this.b=e},
h_I:function h_I(d,e){this.a=d
this.b=e},
auE:function auE(d,e,f){this.c=d
this.d=e
this.a=f},
cpL:function cpL(d,e){this.a=d
this.b=e},
aNT:function aNT(){},
iuZ(d){var w=null
return A.cg(w,w,!0,w,new C.h_8(),d,w,!0,!0,x.e2)},
iwc(d,e,f,g,h){var w=null
return A.cg(w,w,!0,w,new C.h6U(h,g,f,e),d,w,!0,!0,x.N)},
iv0(d,e){var w=null
return A.cg(w,w,!0,w,new C.h_c(e),d,w,!0,!0,x.dY)},
iv_(d){var w=null
return A.cg(w,w,!0,w,new C.h_b(),d,w,!0,!0,x.c5)},
aVV:function aVV(d,e){this.a=d
this.b=e},
aVU:function aVU(d){this.a=d},
aTX:function aTX(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
h_8:function h_8(){},
h6U:function h6U(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
h_c:function h_c(d){this.a=d},
h_b:function h_b(){},
a_s:function a_s(d,e){this.c=d
this.a=e},
aAY:function aAY(){var _=this
_.d=$
_.c=_.a=_.e=null},
d9W:function d9W(d){this.a=d},
d9X:function d9X(d){this.a=d},
d9V:function d9V(d,e){this.a=d
this.b=e},
d9Y:function d9Y(d){this.a=d},
d9Z:function d9Z(d){this.a=d},
a_r:function a_r(d){this.a=d},
aAX:function aAX(){this.d=$
this.c=this.a=null},
d9S:function d9S(d){this.a=d},
d9T:function d9T(d){this.a=d},
d9U:function d9U(d){this.a=d},
ZY:function ZY(d){this.a=d},
azD:function azD(){var _=this
_.r=_.f=_.e=_.d=$
_.w="each"
_.c=_.a=null},
cI5:function cI5(){},
cIb:function cIb(d){this.a=d},
cIc:function cIc(d){this.a=d},
cId:function cId(d){this.a=d},
cIa:function cIa(){},
cIe:function cIe(d){this.a=d},
cIf:function cIf(d){this.a=d},
cI9:function cI9(){},
cIg:function cIg(d,e){this.a=d
this.b=e},
cI8:function cI8(d,e){this.a=d
this.b=e},
cI6:function cI6(d,e){this.a=d
this.b=e},
cIh:function cIh(d){this.a=d},
cI7:function cI7(){},
cIi:function cIi(d){this.a=d},
a2A:function a2A(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bza:function bza(){this.d=$
this.c=this.a=null},
fof:function fof(d,e){this.a=d
this.b=e},
fog:function fog(d){this.a=d},
foh:function foh(d,e){this.a=d
this.b=e},
ad_:function ad_(d,e){this.a=d
this.b=e},
Gr:function Gr(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
bz8:function bz8(d,e){var _=this
_.d=$
_.bw$=d
_.a9$=e
_.c=_.a=null},
fod:function fod(d,e){this.a=d
this.b=e},
azw:function azw(d,e){this.c=d
this.a=e},
bz9:function bz9(d,e){var _=this
_.d=$
_.bw$=d
_.a9$=e
_.c=_.a=null},
foe:function foe(d){this.a=d},
bz7:function bz7(d,e,f,g,h,i){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.a=i},
aQ0:function aQ0(){},
aQ1:function aQ1(){},
bGL(d,e,f,g){var w,v=null,u=Math.abs(d),t=B.h.bh(u),s=B.o.D(B.h.U((u-t)*100),0,99),r=d<0?"-":"",q=A.ox(B.o.v(t),A.ag("(\\d{1,3})(?=(\\d{3})+(?!\\d))",!0,!1,!1,!1),new C.fYp(),v),p=f?34:16,o=f?18:12,n=A.a([],x.R)
if(r.length!==0)n.push(A.cS(v,v,v,v,v,v,v,v,v,A.m(v,v,e,v,v,v,v,v,v,v,v,p*0.7,v,v,g,v,v,!0,v,v,v,v,v,v,v,v),r))
n.push(A.cS(v,v,v,v,v,v,v,v,v,A.m(v,v,e.j(0.82),v,v,v,v,v,v,v,v,o,v,v,B.O,v,v,!0,v,v,v,v,v,v,v,v),"$"))
n.push(A.cS(v,v,v,v,v,v,v,v,v,A.m(v,v,e,v,v,v,v,v,v,v,v,p,v,v,g,v,1.05,!0,v,-0.6,v,v,v,v,v,v),q))
w=B.a.b1(B.o.v(s),2,"0")
n.push(A.cS(v,v,v,v,v,v,v,v,v,A.m(v,v,e.j(0.88),v,v,v,v,v,v,v,v,o,v,v,B.H,v,v,!0,v,v,v,v,v,v,v,v),"."+w))
return A.Zl(A.cS(n,v,v,v,v,v,v,v,v,v,v),v,v,v,v)},
aSB(){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l
var $async$aSB=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:w=3
return A.b(new A.i5().la(85,1280,B.eR),$async$aSB)
case 3:m=e
if(m==null){u=null
w=1
break}t=5
w=8
return A.b(m.fq(),$async$aSB)
case 8:r=e
if(J.ad(r)===0){u=null
w=1
break}q=C.huE()
w=9
return A.b(C.cpK(q,r),$async$aSB)
case 9:p=e
if(!p){u=null
w=1
break}u="ngmy:ws-thumb:"+q
w=1
break
t=2
w=7
break
case 5:t=4
l=s.pop()
o=A.ac(l)
$.am.$1("[worksheets] pick photo failed: "+A.w(o))
u=null
w=1
break
w=7
break
case 4:w=2
break
case 7:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$aSB,v)},
aSX(d,e){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$aSX=A.e(function(a0,a1){if(a0===1){s.push(a1)
w=t}for(;;)switch(w){case 0:g=d==null?null:B.a.i(d)
if(g==null||g.length===0){u=null
w=1
break}i=B.a.Z(g,"ngmy:ws-thumb:")
if(i){u=C.cpH(g)
w=1
break}if(!B.a.Z(g,"data:image")){u=g
w=1
break}r=5e5
if(g.length<=r){u=g
w=1
break}t=4
q=B.a.q(g,",")?B.d.gal(g.split(",")):g
p=B.cJ.aL(q)
o=960
case 7:if(!(o>=96)){w=8
break}w=9
return A.b(A.Hn(p,!0,null,o).dg(0,B.hb),$async$aSX)
case 9:n=a1
w=10
return A.b(n.le(),$async$aSX)
case 10:m=a1
w=11
return A.b(m.b.hj(B.hf),$async$aSX)
case 11:l=a1
m.b.t()
if(l==null){w=8
break}i=J.eR(B.dI.gaT(l))
k="data:image/png;base64,"+B.cK.gcn().aL(i)
if(J.ad(k)<=r){u=k
w=1
break}o=B.h.U(o*0.72)
w=7
break
case 8:t=2
w=6
break
case 4:t=3
f=s.pop()
j=A.ac(f)
$.am.$1("[worksheets] thumbnail shrink failed: "+A.w(j))
w=6
break
case 3:w=2
break
case 6:u=g
w=1
break
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$aSX,v)},
fYp:function fYp(){},
um:function um(d){this.a=d},
auD:function auD(d,e,f){this.c=d
this.d=e
this.a=f},
aHj:function aHj(){var _=this
_.d=$
_.e=!1
_.c=_.a=null},
eWW:function eWW(d,e){this.a=d
this.b=e},
eWN:function eWN(d){this.a=d},
eWO:function eWO(d){this.a=d},
eWU:function eWU(d,e){this.a=d
this.b=e},
eWT:function eWT(d,e){this.a=d
this.b=e},
eWQ:function eWQ(d,e){this.a=d
this.b=e},
eWP:function eWP(d,e){this.a=d
this.b=e},
eWR:function eWR(d){this.a=d},
eWS:function eWS(d,e){this.a=d
this.b=e},
eWV:function eWV(d,e){this.a=d
this.b=e},
eWI:function eWI(d,e){this.a=d
this.b=e},
eWM:function eWM(d){this.a=d},
eWL:function eWL(d,e){this.a=d
this.b=e},
eWK:function eWK(d){this.a=d},
eWX:function eWX(d,e){this.a=d
this.b=e},
eWY:function eWY(d,e){this.a=d
this.b=e},
eWJ:function eWJ(d,e){this.a=d
this.b=e},
hI8(d,e,f){var w="thumbnailPath",v=e.aj()
if(f!=null&&f.length!==0)v.n(0,w,f)
else v.W(0,w)
return A.J(["type","ngmy_worksheet_project_v1","ownerEmail",B.a.i(d),"exportedAt",new A.V(Date.now(),0,!1).aa().ag(),"project",v],x.N,x.z)},
fYq(d,e,f){var w=0,v=A.j(x.N),u
var $async$fYq=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:u=B.W.av(C.hI8(e,f,f.c),null)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fYq,v)},
bGN(d,e){var w=0,v=A.j(x.N),u,t,s,r
var $async$bGN=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=C
w=4
return A.b(C.fYq(!0,d,e),$async$bGN)
case 4:w=3
return A.b(r.auB(g,d,e.a),$async$bGN)
case 3:s=g
if(s!=null){u=s.a
w=1
break}t=B.dV.aL(B.W.av(C.hI8(d,e,null),null))
u="NGMY_WS:"+B.kM.gcn().aL(t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bGN,v)},
hze(d){var w,v=d.z,u=v==null?null:B.a.i(v)
if(u!=null&&u.length!==0)return u
v=d.d
w=v==null?null:B.a.i(v)
if(w!=null&&w.length!==0)return w
return null},
hkb(d){var w,v,u,t="ngmy_worksheet_project_v1",s=B.a.i(d)
if(J.ad(s)===0)return!1
if(J.d5(s,"NGMYWSSYNC2|"))return!0
if(J.d5(s,"NGMY_WS:"))return!0
if(J.eC(s,t))return!0
if(J.d5(s,"{"))try{w=B.W.aP(0,s,null)
if(x.f.b(w)){v=J.u(w,"type")
v=J.k(v==null?"":v)===t}else v=!1
if(v)return!0}catch(u){}return!1},
it1(d){var w,v,u,t=C.hze(d)
if(t==null)return null
if(C.hkb(t))return t
w=B.a.co(t,"NGMYWSSYNC2|")
if(w>=0){v=B.a.i(B.a.b0(t,w))
if(C.hkb(v))return v}u=B.a.co(t,"NGMY_WS:")
if(u>=0){v=B.a.i(B.a.b0(t,u))
if(C.hkb(v))return v}return null},
hka(d){var w,v,u,t,s,r=null,q=B.a.i(d)
if(J.ad(q)===0)return r
if(J.d5(q,"NGMYWSSYNC2|"))return r
try{w=null
t=x.a
if(J.d5(q,"NGMY_WS:")){v=B.cb.cD(0,B.cJ.aL(J.nv(q,8)))
w=t.a(B.W.aP(0,v,r))}else w=t.a(B.W.aP(0,q,r))
t=J.u(w,"type")
if(J.k(t==null?"":t)!=="ngmy_worksheet_project_v1")return r
u=J.u(w,"project")
if(!x.f.b(u))return r
t=C.he3(A.a1(u,x.N,x.z))
return t}catch(s){return r}},
bGM(d){var w=0,v=A.j(x.o),u,t,s,r
var $async$bGM=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=B.a.i(d)
w=B.a.Z(r,"NGMYWSSYNC2|")?3:4
break
case 3:t=r.split("|")
w=t.length>=2?5:6
break
case 5:w=7
return A.b(C.auA(t[1]),$async$bGM)
case 7:s=f
if(s!=null&&B.a.i(s).length!==0){u=C.hka(s)
w=1
break}case 6:u=null
w=1
break
case 4:u=C.hka(r)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bGM,v)},
hk9(d){var w=B.o.v(1000*Date.now()),v=d.b
if(B.a.i(v).length===0)v="Shared project"
return new C.lK(w,v,d.c,d.d,new A.V(Date.now(),0,!1))},
bGg(){var w=0,v=A.j(x.o),u,t
var $async$bGg=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(A.Hz(),$async$bGg)
case 3:t=e
if(t==null||B.a.i(t).length===0){u=null
w=1
break}u=C.hka(t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bGg,v)},
hJk(d,e,f,g){return A.bU(B.L,null,new C.h6H(f,g,e),d,!0,!0,!0,null,!1,!1,x.H)},
h6H:function h6H(d,e,f){this.a=d
this.b=e
this.c=f},
af3:function af3(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
eX_:function eX_(d,e){this.a=d
this.b=e},
eX0:function eX0(d,e){this.a=d
this.b=e},
eX1:function eX1(d,e){this.a=d
this.b=e},
eX2:function eX2(d,e){this.a=d
this.b=e},
eWZ:function eWZ(d){this.a=d},
aux:function aux(d,e,f){this.c=d
this.d=e
this.a=f},
bo4:function bo4(){var _=this
_.c=_.a=_.e=_.d=null},
eWD:function eWD(d,e){this.a=d
this.b=e},
eWE:function eWE(d){this.a=d},
eWF:function eWF(d){this.a=d},
auC:function auC(d){this.a=d},
aHi:function aHi(d){var _=this
_.d=d
_.f=_.e=!1
_.c=_.a=null},
eWH:function eWH(d){this.a=d},
eWG:function eWG(d){this.a=d},
i18(d,e,f,g,h){return new C.Pa(h,g,d,e,f,null)},
aMd:function aMd(d,e){this.a=d
this.b=e},
Pa:function Pa(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aHk:function aHk(d,e){var _=this
_.d=d
_.e=e
_.f=!0
_.r=0
_.c=_.a=null},
eXp:function eXp(){},
eXl:function eXl(d,e){this.a=d
this.b=e},
eXm:function eXm(d){this.a=d},
eX6:function eX6(d){this.a=d},
eX4:function eX4(d){this.a=d},
eX5:function eX5(d){this.a=d},
eXf:function eXf(d,e){this.a=d
this.b=e},
eXc:function eXc(d,e){this.a=d
this.b=e},
eXd:function eXd(d,e){this.a=d
this.b=e},
eXe:function eXe(d,e,f){this.a=d
this.b=e
this.c=f},
eXa:function eXa(d,e,f){this.a=d
this.b=e
this.c=f},
eX8:function eX8(d){this.a=d},
eX9:function eX9(d){this.a=d},
eXb:function eXb(d){this.a=d},
eXs:function eXs(d){this.a=d},
eXr:function eXr(d){this.a=d},
eXt:function eXt(d){this.a=d},
eXq:function eXq(d){this.a=d},
eX3:function eX3(d){this.a=d},
eX7:function eX7(d,e){this.a=d
this.b=e},
eXo:function eXo(d,e){this.a=d
this.b=e},
eXn:function eXn(d,e){this.a=d
this.b=e},
eXi:function eXi(d){this.a=d},
eXj:function eXj(d){this.a=d},
eXk:function eXk(d,e){this.a=d
this.b=e},
eXh:function eXh(d,e){this.a=d
this.b=e},
eXg:function eXg(d,e,f){this.a=d
this.b=e
this.c=f},
bAW:function bAW(){},
Ba(d){var w,v=B.a.i(d.toLowerCase())
if(v.length===0)return""
w=A.ag("[^a-z0-9@._+-]",!0,!1,!1,!1)
return A.aL(v,w,"_")},
ahC(d,e,f){return C.ihd(d,e,f)},
ihd(d,e,f){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o
var $async$ahC=A.e(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(d.aC("String",e,f),$async$ahC)
case 7:q=h
u=q
w=1
break
t=2
w=6
break
case 4:t=3
o=s.pop()
r=A.ac(o)
$.am.$1("[worksheets] setString failed for "+e+": "+A.w(r))
u=!1
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$ahC,v)},
ahB(d,e){return C.ihc(d,e)},
ihc(d,e){var w=0,v=A.j(x.H),u=1,t=[],s,r,q
var $async$ahB=A.e(function(f,g){if(f===1){t.push(g)
w=u}for(;;)switch(w){case 0:u=3
w=6
return A.b(d.W(0,e),$async$ahB)
case 6:u=1
w=5
break
case 3:u=2
q=t.pop()
s=A.ac(q)
$.am.$1("[worksheets] remove failed for "+e+": "+A.w(s))
w=5
break
case 2:w=1
break
case 5:return A.h(null,v)
case 1:return A.f(t.at(-1),v)}})
return A.i($async$ahB,v)},
ig1(d,e){var w,v,u=e==null?null:B.a.i(e)
if(u!=null&&u.length!==0)return d.TN(u)
w=d.c
v=w==null?null:B.a.i(w)
if(v!=null&&v.length!==0)return d
return d},
bDG(d){var w=0,v=A.j(x.T),u,t,s,r,q
var $async$bDG=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:q=B.a.i(d)
if(q.length===0){u=null
w=1
break}t=B.a.Z(q,"ngmy:thumb:")
if(!t)t=B.a.Z(q,"ngmy:ws-thumb:")
else t=!0
if(t){u=q
w=1
break}w=B.a.Z(q,"data:image")?3:4
break
case 3:w=5
return A.b(C.b5d(q),$async$bDG)
case 5:s=f
if(s!=null){u=s
w=1
break}w=6
return A.b(C.aSX(q,!1),$async$bDG)
case 6:r=f
if(r!=null&&B.a.Z(r,"data:image")&&r.length<=12e4){u=r
w=1
break}u=null
w=1
break
case 4:u=q
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bDG,v)},
hPx(d){var w,v,u,t,s,r="unitLabel",q="each",p=A.aJ(d.h(0,"price")),o=p==null?null:p
if(o==null)o=0
w=A.aJ(d.h(0,"quantity"))
if(w==null)w=null
v=A.aJ(d.h(0,"unitPrice"))
if(v==null)v=null
if(w!=null&&v!=null){p=d.h(0,"id")
p=J.k(p==null?"":p)
u=d.h(0,"name")
u=J.k(u==null?"":u)
t=w<=0?1:w
s=d.h(0,r)
if(B.a.i(J.k(s==null?q:s)).length===0)s=q
else{s=d.h(0,r)
s=J.k(s==null?q:s)}return new C.rw(p,u,t,v,s)}p=d.h(0,"id")
p=J.k(p==null?"":p)
u=d.h(0,"name")
return new C.rw(p,J.k(u==null?"":u),1,o,q)},
he3(d){var w,v,u,t,s=d.h(0,"items"),r=A.a([],x.C)
if(x.j.b(s)){w=J.de(s,x.f)
w=A.cF(w,new C.cHo(),w.$ti.k("M.E"),x.Q)
v=A.a3(w).k("Y<M.E>")
r=A.C(new A.Y(w,new C.cHp(),v),v.k("M.E"))}w=d.h(0,"id")
w=J.k(w==null?"":w)
v=d.h(0,"name")
v=J.k(v==null?"":v)
u=d.h(0,"thumbnailPath")
u=u==null?null:J.k(u)
t=d.h(0,"createdAt")
t=A.bk(J.k(t==null?"":t))
return new C.lK(w,v,u,r,t==null?new A.V(Date.now(),0,!1):t)},
ila(d){var w=d==null?"":d
switch(w.toLowerCase()){case"male":case"m":return D.wM
case"female":case"f":return D.oB
default:return D.zf}},
hEu(d){switch(d.a){case 0:return"male"
case 1:return"female"
case 2:return"unknown"}},
hoB(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i=d.h(0,"id")
i=J.k(i==null?"":i)
w=d.h(0,"name")
w=J.k(w==null?"":w)
v=d.h(0,"gender")
v=C.ila(v==null?j:J.k(v))
u=d.h(0,"parentId")
u=u==null?j:J.k(u)
t=d.h(0,"spouseId")
t=t==null?j:J.k(t)
s=d.h(0,"photoPath")
s=s==null?j:J.k(s)
r=d.h(0,"notes")
r=J.k(r==null?"":r)
q=d.h(0,"birthDate")
q=J.k(q==null?"":q)
p=d.h(0,"birthPlace")
p=J.k(p==null?"":p)
o=d.h(0,"deathDate")
o=J.k(o==null?"":o)
n=d.h(0,"occupation")
n=J.k(n==null?"":n)
m=A.aJ(d.h(0,"birthOrder"))
m=m==null?j:B.h.M(m)
if(m==null)m=1
l=J.z(d.h(0,"hidden"),!0)
k=A.aJ(d.h(0,"visibleChildrenCap"))
k=k==null?j:B.h.M(k)
return new C.i4(i,w,v,u,t,s,r,q,p,o,n,m,l,k==null?0:k)},
ilc(d){var w=d==null?"":d
switch(w.toLowerCase()){case"editor":return D.Pb
case"viewer":return D.kZ
default:return D.uS}},
ild(d){switch(d.a){case 1:return"editor"
case 2:return"viewer"
case 0:return"owner"}},
Ho(d,e){var w=B.a.i(d.x)
if(w.length!==0)return B.a.i(w.toLowerCase())
return B.a.i(e.toLowerCase())},
aRF(d,e){return B.a.i(e.toLowerCase())===C.Ho(d,e)&&d.y!==D.kZ},
uB(d,e){var w,v=d.y
if(v===D.kZ)return!1
w=B.a.i(e.toLowerCase())
if(w===C.Ho(d,e))return!0
if(v===D.Pb)return!0
v=d.e
return new A.N(v,A.hkh(),A.U(v).k("N<1,n>")).q(0,w)},
ikx(d){return J.dI(d,new C.fIm()).gJ(0)},
h7r(d){var w=0,v=A.j(x.y),u,t
var $async$h7r=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=J
w=3
return A.b(C.Bm(d),$async$h7r)
case 3:u=t.rr(f,new C.h7s(d))
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$h7r,v)},
bEK(d,e){var w=0,v=A.j(x.H),u,t
var $async$bEK=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.Bm(d),$async$bEK)
case 3:t=g
if(J.rr(t,new C.fFR(e))){w=1
break}if(C.ikx(t)>=2)throw A.W(A.bd("You can only keep 2 shared family trees. Remove one before importing another."))
case 1:return A.h(u,v)}})
return A.i($async$bEK,v)},
amF(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=d.h(0,"members"),g=A.a([],x.u),f=x.j
if(f.b(h)){w=J.de(h,x.f)
w=A.cF(w,new C.bTD(),w.$ti.k("M.E"),x.P)
v=A.a3(w).k("Y<M.E>")
g=A.C(new A.Y(w,new C.bTE(),v),v.k("M.E"))}u=d.h(0,"collaboratorEmails")
if(f.b(u)){w=J.b9(u,new C.bTF(),x.N)
t=A.C(w,w.$ti.k("ak.E"))}else t=A.a([],x.s)
w=d.h(0,"id")
w=J.k(w==null?"":w)
v=d.h(0,"name")
v=J.k(v==null?"":v)
s=d.h(0,"code")
s=J.k(s==null?"":s)
r=J.z(d.h(0,"isPrivate"),!1)
q=d.h(0,"createdAt")
q=A.bk(J.k(q==null?"":q))
if(q==null)q=new A.V(Date.now(),0,!1)
p=A.aJ(d.h(0,"visibleChildrenPerParent"))
p=p==null?null:B.h.M(p)
if(p==null)p=0
o=d.h(0,"ownerEmail")
o=J.k(o==null?"":o)
n=d.h(0,"localRole")
n=C.ilc(n==null?null:J.k(n))
m=A.a([],x.Y)
f=J.aT(f.b(d.h(0,"games"))?f.a(d.h(0,"games")):B.cu)
l=x.f
k=x.N
j=x.z
while(f.C()){i=f.gP(f)
if(l.b(i))m.push(A.a1(i,k,j))}return new C.l3(w,v,s,!r,t,g,q,p,o,n,m)},
hEJ(d){var w=A.ag("[^A-Z0-9]",!0,!1,!1,!1),v=A.aL(d.toUpperCase(),w,"")
w=v.length
if(w===0)return"TREE"
return w<=8?v:B.a.aA(v,0,8)},
DF(d){var w=0,v=A.j(x.gk),u,t,s,r,q,p,o,n,m,l
var $async$DF=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(A.SP(d),$async$DF)
case 3:l=f
if(l.length===0){u=A.a([],x.D)
w=1
break}w=4
return A.b(A.aA(),$async$DF)
case 4:t=f
w=5
return A.b(t.a7w(0),$async$DF)
case 5:w=6
return A.b(C.fw7(t,l),$async$DF)
case 6:s=f
if(J.cJ(s)){u=s
w=1
break}r=B.a.gX(B.a.i(l.toLowerCase()))
q=t.a
p=J.a8(q)
o=A.aV(p.h(q,"ngmy_worksheets_projects_v2_"+Math.abs(r)))
w=o!=null&&o.length!==0?7:8
break
case 7:n=C.hzQ(o)
w=n.length!==0?9:10
break
case 9:w=11
return A.b(C.pc(l,n),$async$DF)
case 11:u=n
w=1
break
case 10:case 8:m=A.aV(p.h(q,"ngmy_worksheets_projects_v1_"+Math.abs(B.a.gX(l))))
w=m!=null&&m.length!==0?12:13
break
case 12:n=C.hzQ(m)
w=n.length!==0?14:15
break
case 14:w=16
return A.b(C.pc(l,n),$async$DF)
case 16:u=n
w=1
break
case 15:case 13:u=A.a([],x.D)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$DF,v)},
fw7(d,e){return C.idn(d,e)},
idn(a8,a9){var w=0,v=A.j(x.gk),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7
var $async$fw7=A.e(function(b0,b1){if(b0===1){s.push(b1)
w=t}for(;;)switch(w){case 0:a3=a8.a
a4=J.a8(a3)
a5=A.aV(a4.h(a3,"ngmy_worksheets_index_v3_"+C.Ba(a9)))
if(a5==null||B.a.i(a5).length===0){u=A.a([],x.D)
w=1
break}t=4
r=B.W.aP(0,a5,null)
if(!x.j.b(r)){a3=A.a([],x.D)
u=a3
w=1
break}q=A.a([],x.D)
p=!1
f=J.aT(r),e=x.N,d=x.z,a0=x.f
case 7:if(!f.C()){w=8
break}o=f.gP(f)
n=B.a.i(J.k(o))
if(J.ad(n)===0){w=7
break}m=A.aV(a4.h(a3,"ngmy_worksheet_item_v3_"+C.Ba(a9)+"_"+n))
if(m==null||m.length===0){w=7
break}t=10
l=B.W.aP(0,m,null)
if(!a0.b(l)){w=7
break}k=C.he3(A.a1(l,e,d))
w=k.a.length!==0&&k.b.length!==0?13:14
break
case 13:j=A.aV(a4.h(a3,"ngmy_worksheet_thumb_v3_"+C.Ba(a9)+"_"+n))
i=C.ig1(k,j)
a1=i.c
h=a1==null?null:B.a.i(a1)
w=h!=null&&B.a.Z(h,"data:image")?15:16
break
case 15:w=17
return A.b(C.b5d(h),$async$fw7)
case 17:g=b1
if(g!=null){i=i.TN(g)
p=!0}case 16:J.c5(q,i)
case 14:t=4
w=12
break
case 10:t=9
a6=s.pop()
w=12
break
case 9:w=4
break
case 12:w=7
break
case 8:J.SY(q,new C.fw8())
if(p&&J.ad(q)!==0)C.pc(a9,q)
u=q
w=1
break
t=2
w=6
break
case 4:t=3
a7=s.pop()
a3=A.a([],x.D)
u=a3
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$fw7,v)},
bFa(d,e){var w=0,v=A.j(x.o),u,t,s,r,q,p
var $async$bFa=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(A.SP(d),$async$bFa)
case 3:r=g
q=B.a.i(e)
if(r.length===0||q.length===0){u=null
w=1
break}p=J
w=4
return A.b(C.DF(r),$async$bFa)
case 4:t=p.aT(g)
case 5:if(!t.C()){w=6
break}s=t.gP(t)
if(s.a===q){u=s
w=1
break}w=5
break
case 6:u=null
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bFa,v)},
hzQ(d){var w,v,u,t
try{w=B.W.aP(0,d,null)
if(!x.j.b(w)){v=A.a([],x.D)
return v}v=J.de(w,x.f)
v=A.cF(v,new C.frI(),v.$ti.k("M.E"),x.fA)
u=A.a3(v).k("Y<M.E>")
v=A.C(new A.Y(v,new C.frJ(),u),u.k("M.E"))
B.d.b_(v,new C.frK())
return v}catch(t){v=A.a([],x.D)
return v}},
pc(d,e){return C.iuO(d,e)},
iuO(b2,b3){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1
var $async$pc=A.e(function(b4,b5){if(b4===1){s.push(b5)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.SP(b2),$async$pc)
case 3:a8=b5
if(J.ad(a8)===0){u=!1
w=1
break}w=4
return A.b(A.aA(),$async$pc)
case 4:r=b5
q=A.a([],x.s)
t=6
a2=C.Ba(a8)
p=A.aV(J.u(r.a,"ngmy_worksheets_index_v3_"+a2))
w=p!=null&&p.length!==0?9:10
break
case 9:t=12
a2=x.N
o=J.b9(x.j.a(B.W.aP(0,p,null)),new C.fZX(),a2).fL(0)
a2=J.b9(b3,new C.fZY(),a2).c_(0,new C.fZZ())
n=A.d0(a2,a2.$ti.k("M.E"))
a2=o,a2=A.e_(a2,a2.r,A.a3(a2).c),a3=a2.$ti.c,a4=x.f
case 15:if(!a2.C()){w=16
break}a5=a2.d
m=a5==null?a3.a(a5):a5
w=!J.eC(n,m)?17:18
break
case 17:a5=C.Ba(a8)
l=A.aV(J.u(r.a,"ngmy_worksheet_thumb_v3_"+a5+"_"+m))
w=19
return A.b(C.a9Y(l),$async$pc)
case 19:t=21
a5=C.Ba(a8)
k=A.aV(J.u(r.a,"ngmy_worksheet_item_v3_"+a5+"_"+m))
w=k!=null&&k.length!==0?24:25
break
case 24:j=B.W.aP(0,k,null)
w=a4.b(j)?26:27
break
case 26:a5=J.u(j,"thumbnailPath")
w=28
return A.b(C.a9Y(a5==null?null:J.k(a5)),$async$pc)
case 28:case 27:case 25:t=12
w=23
break
case 21:t=20
a9=s.pop()
w=23
break
case 20:w=12
break
case 23:w=29
return A.b(C.ahB(r,"ngmy_worksheet_item_v3_"+C.Ba(a8)+"_"+m),$async$pc)
case 29:w=30
return A.b(C.ahB(r,"ngmy_worksheet_thumb_v3_"+C.Ba(a8)+"_"+m),$async$pc)
case 30:case 18:w=15
break
case 16:t=6
w=14
break
case 12:t=11
b0=s.pop()
w=14
break
case 11:w=6
break
case 14:case 10:a2=J.cE(b3),a3=a2.gae(b3)
case 31:if(!a3.C()){w=32
break}i=a3.gP(a3)
if(i.a.length===0||B.a.i(i.b).length===0){w=31
break}a4=i.c
h=a4==null?null:B.a.i(a4)
g=i
w=h!=null&&h.length!==0?33:35
break
case 33:w=36
return A.b(C.bDG(h),$async$pc)
case 36:f=b5
w=f!=null&&f.length!==0?37:39
break
case 37:a4=i.a
w=40
return A.b(C.ahC(r,"ngmy_worksheet_thumb_v3_"+C.Ba(a8)+"_"+a4,f),$async$pc)
case 40:g=i.TN(f)
w=38
break
case 39:$.am.$1("[worksheets] photo not saved for "+i.a+" \u2014 saving project without thumbnail")
a4=i.a
w=41
return A.b(C.ahB(r,"ngmy_worksheet_thumb_v3_"+C.Ba(a8)+"_"+a4),$async$pc)
case 41:g=i.TN(null)
case 38:w=34
break
case 35:a4=i.a
w=42
return A.b(C.ahB(r,"ngmy_worksheet_thumb_v3_"+C.Ba(a8)+"_"+a4),$async$pc)
case 42:case 34:a4=i.a
w=43
return A.b(C.ahC(r,"ngmy_worksheet_item_v3_"+C.Ba(a8)+"_"+a4,B.W.av(g.aj(),null)),$async$pc)
case 43:e=b5
if(!e){$.am.$1("[worksheets] failed to save project "+i.a+" for "+A.w(a8))
w=31
break}J.c5(q,i.a)
w=31
break
case 32:w=44
return A.b(C.ahC(r,"ngmy_worksheets_index_v3_"+C.Ba(a8),B.W.av(q,null)),$async$pc)
case 44:d=b5
if(!d){$.am.$1("[worksheets] failed to save project index for "+A.w(a8))
u=!1
w=1
break}a3=a2.eO(b3,new C.h__(q))
a4=a3.$ti.k("cM<1,a9<n,@>>")
a7=A.C(new A.cM(a3,new C.h_0(),a4),a4.k("M.E"))
a0=a7
w=45
return A.b(C.ahC(r,"ngmy_worksheets_projects_v2_"+Math.abs(B.a.gX(B.a.i(a8.toLowerCase()))),B.W.av(a0,null)),$async$pc)
case 45:w=46
return A.b(J.hOC(r),$async$pc)
case 46:if(a2.gcm(b3)&&J.ad(q)===0){u=!1
w=1
break}u=!0
w=1
break
t=2
w=8
break
case 6:t=5
b1=s.pop()
a1=A.ac(b1)
$.am.$1("[worksheets] saveWorksheetProjects error: "+A.w(a1))
u=!1
w=1
break
w=8
break
case 5:w=2
break
case 8:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$pc,v)},
Mj(d,e){var w=0,v=A.j(x.y),u,t,s,r
var $async$Mj=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.DF(d),$async$Mj)
case 3:t=g
s=J.cE(t)
r=s.bk(t,new C.h7q(e))
if(r===-1)s.ca(t,0,e)
else s.n(t,r,e)
u=C.pc(d,t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$Mj,v)},
bEX(d,e){var w=0,v=A.j(x.H),u
var $async$bEX=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(C.DF(d),$async$bEX)
case 2:u=g
J.nY(u,new C.fIQ(e))
w=3
return A.b(C.pc(d,u),$async$bEX)
case 3:return A.h(null,v)}})
return A.i($async$bEX,v)},
Hq(d){var w=0,v=A.j(x.ax),u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$Hq=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(A.aA(),$async$Hq)
case 3:l=f
k=A.a([],x._)
j=B.a.gX(B.a.i(d.toLowerCase()))
i=A.aV(J.u(l.a,"ngmy_worksheets_family_trees_v1_"+Math.abs(j)))
if(i!=null&&i.length!==0)try{t=B.W.aP(0,i,null)
if(x.j.b(t)){j=J.de(t,x.f)
j=A.cF(j,new C.fM2(),j.$ti.k("M.E"),x.k)
s=A.a3(j).k("Y<M.E>")
r=A.C(new A.Y(j,new C.fM3(),s),s.k("M.E"))
B.d.b_(r,new C.fM4())
k=r}}catch(h){}w=4
return A.b(C.fsr(d),$async$Hq)
case 4:p=f
if(p==null){u=k
w=1
break}o=C.idL(k,p,d)
j=A.U(o)
s=j.k("N<1,a9<n,@>>")
s=A.C(new A.N(o,new C.fM5(),s),s.k("ak.E"))
n=B.W.av(s,null)
s=i
w=n!==(s==null?"":s)?5:6
break
case 5:w=7
return A.b(C.RW(d,o),$async$Hq)
case 7:case 6:j=j.k("Y<1>")
m=A.C(new A.Y(o,new C.fM6(d),j),j.k("M.E"))
if(m.length!==0)C.aRp(d,m)
u=o
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$Hq,v)},
fZJ(d,e){var w=0,v=A.j(x.y),u,t,s
var $async$fZJ=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.RW(d,e),$async$fZJ)
case 3:t=J.dI(e,new C.fZK(d))
s=A.C(t,t.$ti.k("M.E"))
if(s.length===0){u=!0
w=1
break}u=C.aRp(d,s)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fZJ,v)},
a4f(d,e){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n,m,l
var $async$a4f=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:o=A.a([],x._)
w=2
return A.b(A.aA(),$async$a4f)
case 2:n=g
m=B.a.gX(B.a.i(d.toLowerCase()))
l=A.aV(J.u(n.a,"ngmy_worksheets_family_trees_v1_"+Math.abs(m)))
if(l!=null&&l.length!==0)try{u=B.W.aP(0,l,null)
if(x.j.b(u)){m=J.de(u,x.f)
m=A.cF(m,new C.h7l(),m.$ti.k("M.E"),x.k)
t=A.a3(m).k("Y<M.E>")
s=A.C(new A.Y(m,new C.h7m(),t),t.k("M.E"))
o=s}}catch(k){}q=J.oD(o,new C.h7n(e))
if(B.a.i(e.x).length===0&&C.uB(e,d)){m=B.a.i(d.toLowerCase())
p=e.aGz(e.y===D.kZ?D.kZ:D.uS,m)}else p=e
if(q===-1)J.n7(o,0,p)
else J.aK(o,q,p)
w=3
return A.b(C.RW(d,o),$async$a4f)
case 3:w=C.uB(p,d)?4:5
break
case 4:w=6
return A.b(C.aRo(C.Ho(p,d),p),$async$a4f)
case 6:if(!g)$.am.$1("[family_trees] cloud save failed for "+p.a+" \u2014 run supabase/family_trees_table.sql if table is missing")
case 5:return A.h(null,v)}})
return A.i($async$a4f,v)},
aRB(d,e){var w=0,v=A.j(x.H),u,t,s
var $async$aRB=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(C.Hq(d),$async$aRB)
case 2:u=g
t=J.cE(u)
s=A.nF(t.eO(u,new C.fIx(e)))
t.bq(u,new C.fIy(e))
w=3
return A.b(C.RW(d,u),$async$aRB)
case 3:w=s!=null&&C.aRF(s,d)?4:5
break
case 4:w=6
return A.b(C.frM(e),$async$aRB)
case 6:case 5:return A.h(null,v)}})
return A.i($async$aRB,v)},
ajn(d){var w=d.f,v=A.U(w).k("Y<1>")
w=A.C(new A.Y(w,new C.h7w(),v),v.k("M.E"))
return w},
hhC(d,e){var w,v=d.f,u=A.nF(new A.Y(v,new C.fI1(e),A.U(v).k("Y<1>")))
v=C.ajn(d)
w=A.U(v).k("Y<1>")
v=A.C(new A.Y(v,new C.fI2(e,u),w),w.k("M.E"))
B.d.b_(v,new C.fI3())
return v},
ilg(d,e){var w=e.at
if(w>0)return w
w=d.w
if(w>0)return w
return 0},
hJo(d,e){var w,v,u=e.d
if(u==null||u.length===0)return 0
w=B.d.bk(C.hhC(d,u),new C.h6V(e))
if(w>=0)return w+1
v=e.Q
return v>0?v:0},
imK(d,e){var w
if(e==null||e.length===0)return 1
w=C.hhC(d,e)
if(w.length===0)return 1
return new A.N(w,new C.fMU(),A.U(w).k("N<1,G>")).f0(0,B.yc)+1},
iuH(d){var w,v=C.ajn(d)
if(v.length===0)return null
w=new A.Y(v,new C.fZD(),A.U(v).k("Y<1>"))
if(!w.gau(0))return w.gH(0)
return B.d.gH(v)},
ilb(d){return A.J(["id",d.a,"name",d.b,"gender",C.hEu(d.c),"birthDate",d.w,"birthPlace",d.x,"deathDate",d.y,"occupation",d.z,"notes",d.r,"parentId",d.d,"spouseId",d.e,"birthOrder",d.Q,"hidden",d.as,"visibleChildrenCap",d.at],x.N,x.z)},
imF(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=x.N,a1=A.T(a0,x.P)
for(w=a3.f,v=w.length,u=0;u<w.length;w.length===v||(0,A.I)(w),++u){t=w[u]
a1.n(0,t.a,t)}s=A.a([],x.u)
r=A.aR(a0)
for(a0=a2.f,v=a0.length,u=0;u<a0.length;a0.length===v||(0,A.I)(a0),++u){q=a0[u]
p=q.a
r.I(0,p)
o=a1.h(0,p)
if(o==null)p=q
else{p=o.b
p=p.length!==0?p:q.b
n=o.c
n=n!==D.zf?n:q.c
m=o.w
m=m.length!==0?m:q.w
l=o.x
l=l.length!==0?l:q.x
k=o.y
k=k.length!==0?k:q.y
j=o.z
j=j.length!==0?j:q.z
i=o.r
i=i.length!==0?i:q.r
h=o.d
if(h==null)h=q.d
g=o.e
if(g==null)g=q.e
f=o.Q
f=f>0?f:q.Q
e=o.as
d=o.at
d=d>0?d:q.at
d=q.aGu(m,f,l,k,n,e,p,i,j,h,q.f,g,d)
p=d}s.push(p)}for(a0=w.length,u=0;u<w.length;w.length===a0||(0,A.I)(w),++u){o=w[u]
if(!r.q(0,o.a))s.push(o)}a0=a3.b
a0=a0.length!==0?a0:a2.b
a1=a3.c
a1=a1.length!==0?a1:a2.c
w=a3.e
w=w.length!==0?w:a2.e
v=a2.x
v=v.length!==0?v:a3.x
return a2.cQQ(a1,w,a3.d,a2.y,s,a0,v)},
Bm(d){var w=0,v=A.j(x.ax),u,t,s,r,q,p,o
var $async$Bm=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(A.aA(),$async$Bm)
case 3:q=f
p=B.a.gX(B.a.i(d.toLowerCase()))
o=A.aV(J.u(q.a,"ngmy_worksheets_family_trees_v1_"+Math.abs(p)))
if(o==null||o.length===0){u=A.a([],x._)
w=1
break}try{t=B.W.aP(0,o,null)
if(!x.j.b(t)){p=A.a([],x._)
u=p
w=1
break}p=J.de(t,x.f)
p=A.cF(p,new C.fM_(),p.$ti.k("M.E"),x.k)
s=A.a3(p).k("Y<M.E>")
p=A.C(new A.Y(p,new C.fM0(),s),s.k("M.E"))
B.d.b_(p,new C.fM1())
u=p
w=1
break}catch(n){p=A.a([],x._)
u=p
w=1
break}case 1:return A.h(u,v)}})
return A.i($async$Bm,v)},
aj6(b1,b2,b3){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
var $async$aj6=A.e(function(b4,b5){if(b4===1)return A.f(b5,v)
for(;;)switch(w){case 0:a5=B.a.i(b3.toLowerCase())===B.a.i(b1.toLowerCase())
a6=a5?D.uS:D.kZ
a7=C.Ho(b2,b3)
w=2
return A.b(C.Bm(b1),$async$aj6)
case 2:a8=b5
a9=J.cE(a8)
b0=a9.bk(a8,new C.fZy(b2))
w=!a5&&b0===-1?3:4
break
case 3:w=5
return A.b(C.bEK(b1,b2),$async$aj6)
case 5:case 4:if(b0===-1){u=b2.aGz(a6,a7)
a9.ca(a8,0,u)}else{t=a9.h(a8,b0)
s=A.T(x.N,x.P)
for(r=t.f,q=r.length,p=0;p<r.length;r.length===q||(0,A.I)(r),++p){o=r[p]
s.n(0,o.a,o)}for(r=b2.f,q=r.length,p=0;p<r.length;r.length===q||(0,A.I)(r),++p){n=r[p]
m=n.a
l=s.h(0,m)
if(l==null)s.n(0,m,n)
else{k=n.f
j=k==null?null:B.a.i(k)
k=n.b
k=k.length!==0?k:l.b
i=n.c
i=i!==D.zf?i:l.c
h=n.d
if(h==null)h=l.d
g=n.e
if(g==null)g=l.e
f=j!=null&&j.length!==0?j:l.f
e=n.r
e=e.length!==0?e:l.r
d=n.w
d=d.length!==0?d:l.w
a0=n.x
a0=a0.length!==0?a0:l.x
a1=n.y
a1=a1.length!==0?a1:l.y
a2=n.z
a2=a2.length!==0?a2:l.z
a3=n.Q
a3=a3>0?a3:l.Q
a4=n.at
a4=a4>0?a4:l.at
s.n(0,m,l.aGu(d,a3,a0,a1,i,n.as,k,e,a2,h,f,g,a4))}}r=b2.b
r=r.length!==0?r:t.b
q=b2.c
q=q.length!==0?q:t.c
m=b2.e
m=m.length!==0?m:t.e
k=s.$ti.k("b8<2>")
s=A.C(new A.b8(s,k),k.k("M.E"))
k=a5?D.uS:D.kZ
u=t.cQS(q,m,b2.d,k,s,r,a7,b2.w)
a9.n(a8,b0,u)}w=6
return A.b(C.RW(b1,a8),$async$aj6)
case 6:w=a5?7:8
break
case 7:w=9
return A.b(C.aRo(B.a.i(b3.toLowerCase()),u),$async$aj6)
case 9:case 8:return A.h(null,v)}})
return A.i($async$aj6,v)},
hAf(d,e){var w,v,u,t,s,r,q="collaboratorEmails",p="visibleChildrenPerParent",o=new A.V(Date.now(),0,!1).aa().ag(),n=B.a.i(e.toLowerCase()),m=d.f,l=A.U(m).k("N<1,a9<n,@>>"),k=A.C(new A.N(m,C.hIt(),l),l.k("ak.E"))
m=d.a
l=d.b
w=d.c
v=d.d
u=d.e
t=d.w
s=d.r
r=x.N
return A.J(["id",m,"userEmail",n,"name",l,"code",w,"isPrivate",v,q,u,"members",k,p,t,"payload",A.J(["id",m,"name",l,"code",w,"isPrivate",v,q,u,"members",k,p,t,"ownerEmail",n,"createdAt",s.aa().ag(),"updatedAt",o],r,x.K),"createdAt",s.aa().ag(),"updatedAt",o],r,x.z)},
hAg(d,e){var w=new A.V(Date.now(),0,!1).aa().ag(),v=B.a.i(e.toLowerCase()),u=d.f,t=A.U(u).k("N<1,a9<n,@>>")
u=A.C(new A.N(u,C.hIt(),t),t.k("ak.E"))
return A.J(["id",d.a,"userEmail",v,"name",d.b,"code",d.c,"isPrivate",d.d,"collaboratorEmails",d.e,"members",u,"createdAt",d.r.aa().ag(),"updatedAt",w],x.N,x.z)},
ibh(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k="userEmail",j=J.a8(d),i=j.h(d,"payload"),h=x.f
if(h.b(i)){w=C.amF(A.a1(i,x.N,x.z))
if(w.a.length!==0&&w.f.length!==0){j=j.h(d,k)
v=B.a.i(J.k(j==null?w.x:j).toLowerCase())
u=B.a.i(e.toLowerCase())
j=w.e
j=new A.N(j,A.hkh(),A.U(j).k("N<1,n>")).c_(0,new C.fse())
t=A.C(j,j.$ti.k("M.E"))
if(u===v)s=D.uS
else s=B.d.q(t,u)?D.Pb:D.kZ
return w.aGz(s,v)}}r=x.j
if(!r.b(j.h(d,"members"))&&h.b(j.h(d,"data")))return C.amF(A.a1(h.a(j.h(d,"data")),x.N,x.z))
q=j.h(d,"members")
if(r.b(q)){h=J.de(q,h)
h=A.cF(h,new C.fsf(),h.$ti.k("M.E"),x.P)
p=A.a3(h).k("Y<M.E>")
o=A.C(new A.Y(h,new C.fsg(),p),p.k("M.E"))}else o=A.a([],x.u)
n=j.h(d,"collaboratorEmails")
if(r.b(n)){h=J.b9(n,new C.fsh(),x.N).c_(0,new C.fsi())
t=A.C(h,h.$ti.k("M.E"))}else t=A.a([],x.s)
h=j.h(d,k)
v=B.a.i(J.k(h==null?"":h).toLowerCase())
u=B.a.i(e.toLowerCase())
if(u===v)s=D.uS
else s=B.d.q(t,u)?D.Pb:D.kZ
h=j.h(d,"id")
h=J.k(h==null?"":h)
r=j.h(d,"name")
r=J.k(r==null?"":r)
p=j.h(d,"code")
p=J.k(p==null?"":p)
m=J.z(j.h(d,"isPrivate"),!1)
l=j.h(d,"createdAt")
l=A.bk(J.k(l==null?"":l))
if(l==null)l=new A.V(Date.now(),0,!1)
j=A.aJ(j.h(d,"visibleChildrenPerParent"))
j=j==null?null:B.h.M(j)
if(j==null)j=0
return new C.l3(h,r,p,!m,t,o,l,j,v,s,B.cf)},
fsr(a2){var w=0,v=A.j(x.eK),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$fsr=A.e(function(a3,a4){if(a3===1){s.push(a4)
w=t}for(;;)switch(w){case 0:a0=B.a.i(a2.toLowerCase())
if(J.ad(a0)===0){u=null
w=1
break}t=4
r=new C.fsv()
h=x.N
g=x.z
w=7
return A.b(A.iz(A.a([A.lN("family_trees","*",null,A.J(["userEmail",a0],h,g),null,null,null,!0,null,null,!1,B.bN),r.$2(A.lN("family_trees","*",A.J(["collaboratorEmails",A.a([a0],x.s)],h,g),null,null,null,null,!0,null,null,!1,B.bN),"collaborator"),r.$2(A.lN("family_trees","*",null,A.J(["isPrivate",!1],h,g),null,null,null,!0,null,null,!1,B.bN),"public")],x.cl),x.fO),$async$fsr)
case 7:q=a4
p=J.u(q,0)
o=J.u(q,1)
n=J.u(q,2)
g=x.a
m=A.T(h,g)
h=A.C(p,g)
l=h
J.h1(l,o)
J.h1(l,n)
l=l
h=l.length
f=0
for(;f<l.length;l.length===h||(0,A.I)(l),++f){k=l[f]
g=J.u(k,"id")
j=J.k(g==null?"":g)
if(J.ad(j)!==0)J.aK(m,j,k)}l=m
h=A.a3(l).k("b8<2>")
h=A.cF(new A.b8(l,h),new C.fss(a0),h.k("M.E"),x.k)
l=A.a3(h).k("Y<M.E>")
l=A.C(new A.Y(h,new C.fst(),l),l.k("M.E"))
B.d.b_(l,new C.fsu())
u=l
w=1
break
t=2
w=6
break
case 4:t=3
a1=s.pop()
i=A.ac(a1)
d=J.k(i)
l=B.a.q(d,"Could not find the table 'public.family_trees'")||B.a.q(d,'relation "public.family_trees" does not exist')
h=$.am
if(l)h.$1("[family_trees] table missing \u2014 run supabase/family_trees_table.sql")
else h.$1("[family_trees] fetch error: "+A.w(i))
u=null
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$fsr,v)},
idL(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=J.a8(e)
if(j.gau(e))return d
w=B.a.i(f.toLowerCase())
v=x.N
u=j.dN(e,new C.fwQ(),v).c_(0,new C.fwR())
t=A.d0(u,u.$ti.k("M.E"))
s=A.T(v,x.k)
for(v=d.length,u=w.length!==0,r=0;r<d.length;d.length===v||(0,A.I)(d),++r){q=d[r]
p=q.a
if(p.length===0)continue
o=C.Ho(q,w)
n=!1
if(u)if(o!==w){if(q.y===D.kZ){m=q.e
m=!new A.N(m,A.hkh(),A.U(m).k("N<1,n>")).q(0,w)}else m=n
n=m}if(n&&!t.q(0,p))continue
s.n(0,p,q)}for(j=j.gae(e);j.C();){v=j.gP(j)
u=v.a
if(u.length===0)continue
l=s.h(0,u)
if(l==null){s.n(0,u,v)
continue}k=C.imF(l,v)
o=C.Ho(k,w)
p=v.d
s.n(0,u,o===w?k.bfV(p,D.uS):k.bfV(p,v.y))}j=s.$ti.k("b8<2>")
j=A.C(new A.b8(s,j),j.k("M.E"))
B.d.b_(j,new C.fwS())
return j},
RW(d,e){var w=0,v=A.j(x.H),u,t,s
var $async$RW=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.aA(),$async$RW)
case 2:u=g
t=B.a.gX(B.a.i(d.toLowerCase()))
s=J.b9(e,new C.fzQ(),x.a)
s=A.C(s,s.$ti.k("ak.E"))
w=3
return A.b(u.aC("String","ngmy_worksheets_family_trees_v1_"+Math.abs(t),B.W.av(s,null)),$async$RW)
case 3:return A.h(null,v)}})
return A.i($async$RW,v)},
aRo(d,e){return C.ij_(d,e)},
ij_(d,e){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n
var $async$aRo=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:t=4
p=x.Y
w=7
return A.b(A.mk("family_trees",A.a([C.hAf(e,d)],p),null,B.cQ),$async$aRo)
case 7:r=g
if(r){u=!0
w=1
break}w=8
return A.b(A.mk("family_trees",A.a([C.hAg(e,d)],p),null,B.cQ),$async$aRo)
case 8:p=g
u=p
w=1
break
t=2
w=6
break
case 4:t=3
n=s.pop()
q=A.ac(n)
$.am.$1("[family_trees] upsert error: "+A.w(q))
u=!1
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$aRo,v)},
aRp(d,e){return C.ij0(d,e)},
ij0(d,e){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i
var $async$aRp=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(e.length===0){u=!1
w=1
break}t=4
n=A.U(e).k("N<1,a9<n,@>>")
m=n.k("ak.E")
l=A.C(new A.N(e,new C.fF5(d),n),m)
r=l
w=7
return A.b(A.mk("family_trees",r,null,B.cQ),$async$aRp)
case 7:q=g
if(q){u=!0
w=1
break}k=A.C(new A.N(e,new C.fF6(d),n),m)
p=k
w=8
return A.b(A.mk("family_trees",p,null,B.cQ),$async$aRp)
case 8:n=g
u=n
w=1
break
t=2
w=6
break
case 4:t=3
i=s.pop()
o=A.ac(i)
$.am.$1("[family_trees] bulk upsert error: "+A.w(o))
u=!1
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$aRp,v)},
frM(d){return C.iax(d)},
iax(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$frM=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:if(d.length===0){w=1
break}t=4
w=7
return A.b(A.So("family_trees",A.J(["id",d],x.N,x.z),null,B.cQ),$async$frM)
case 7:t=2
w=6
break
case 4:t=3
p=s.pop()
r=A.ac(p)
$.am.$1("[family_trees] delete error: "+A.w(r))
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$frM,v)},
rw:function rw(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
lK:function lK(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
cHr:function cHr(){},
cHq:function cHq(){},
cHo:function cHo(){},
cHp:function cHp(){},
Iy:function Iy(d,e){this.a=d
this.b=e},
i4:function i4(d,e,f,g,h,i,j,k,l,m,n,o,p,q){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l
_.y=m
_.z=n
_.Q=o
_.as=p
_.at=q},
amE:function amE(d,e){this.a=d
this.b=e},
fIm:function fIm(){},
h7s:function h7s(d){this.a=d},
fFR:function fFR(d){this.a=d},
l3:function l3(d,e,f,g,h,i,j,k,l,m,n){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l
_.y=m
_.z=n},
bTH:function bTH(){},
bTG:function bTG(){},
bTD:function bTD(){},
bTE:function bTE(){},
bTF:function bTF(){},
fw8:function fw8(){},
frI:function frI(){},
frJ:function frJ(){},
frK:function frK(){},
fZX:function fZX(){},
fZY:function fZY(){},
fZZ:function fZZ(){},
h__:function h__(d){this.a=d},
h_0:function h_0(){},
h7q:function h7q(d){this.a=d},
fIQ:function fIQ(d){this.a=d},
fM2:function fM2(){},
fM3:function fM3(){},
fM4:function fM4(){},
fM5:function fM5(){},
fM6:function fM6(d){this.a=d},
fZK:function fZK(d){this.a=d},
h7l:function h7l(){},
h7m:function h7m(){},
h7n:function h7n(d){this.a=d},
fIx:function fIx(d){this.a=d},
fIy:function fIy(d){this.a=d},
h7w:function h7w(){},
fI1:function fI1(d){this.a=d},
fI2:function fI2(d,e){this.a=d
this.b=e},
fI3:function fI3(){},
h6V:function h6V(d){this.a=d},
fMU:function fMU(){},
fZD:function fZD(){},
fM_:function fM_(){},
fM0:function fM0(){},
fM1:function fM1(){},
fZy:function fZy(d){this.a=d},
fse:function fse(){},
fsf:function fsf(){},
fsg:function fsg(){},
fsh:function fsh(){},
fsi:function fsi(){},
fsv:function fsv(){},
fsw:function fsw(d){this.a=d},
fss:function fss(d){this.a=d},
fst:function fst(){},
fsu:function fsu(){},
fwQ:function fwQ(){},
fwR:function fwR(){},
fwS:function fwS(){},
fzQ:function fzQ(){},
fF5:function fF5(d){this.a=d},
fF6:function fF6(d){this.a=d},
cHs:function cHs(d,e){this.a=d
this.b=e},
cHt:function cHt(d,e){this.a=d
this.b=e},
aJp:function aJp(d,e,f){this.a=d
this.b=e
this.c=f},
bbt:function bbt(){this.b=this.a=0},
bbs:function bbs(d,e,f,g){var _=this
_.f=d
_.w=e
_.z=f
_.b=g
_.a=null},
bzb:function bzb(){},
xp(d,e){var w,v
if(d==null)return""
w=d.bU()
v=""+w.gci()+"/"+w.gcz()+"/"+w.gcl()
if(!e)return v
return v+" "+B.a.b1(B.o.v(w.gnz()),2,"0")+":"+B.a.b1(B.o.v(w.gGS()),2,"0")},
ik3(a5,a6,a7,a8,a9,b0,b1,b2,b3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=a5.c
J.bt(a4.save())
a4.translate(a6.a,a6.b-b0)
w=A.bX(new A.r(0,b0+a7*0.005),a7*0.06,a7*0.45)
v=B.w.j(0.22)
$.S()
u=A.L()
u.r=v.gp(0)
a5.c0(w,u)
for(w=a7*0.05,v=-a7,u=v*0.24,t=a7*0.1,s=u+a7*0.2,r=a7*0.04,q=a7*0.065,p=v*0.05,o=a7*0.14,n=p+w,m=a7*0.025,l=0;l<2;++l){k=F.fP[l]*a7*0.075
j=k-w
j=A.by(new A.a4(j,u,j+t,s),new A.aP(r,r))
i=new A.ar(B.S,B.Q,B.V,B.X,B.U)
i.r=B.dh.gp(0)
a5.aq(j,i)
k-=q
k=A.by(new A.a4(k,p,k+o,n),new A.aP(m,m))
i=new A.ar(B.S,B.Q,B.V,B.X,B.U)
i.r=B.c.gp(0)
a5.aq(k,i)}w=v*0.16
u=v*0.52
t=a7*0.32
s=w+t
q=a7*0.09
h=A.by(new A.a4(w,u,s,u+t),new A.aP(q,q))
q=A.L()
q.r=b2.gp(0)
a5.aq(h,q)
q=v*0.27
t=a7*0.02
t=A.by(new A.a4(w,q,s,q+a7*0.045),new A.aP(t,t))
q=B.c.j(0.35)
s=A.L()
s.r=q.gp(0)
a5.aq(t,s)
s=v*0.47
g=new A.r(v*0.15,s)
f=new A.r(a7*0.15,s)
s=v*0.06
t=a7*0.07
a5.ah(g,g.a5(0,new A.r(s,a7*0.17)),P.ahA(F.rX,t))
s=g.a5(0,new A.r(s,a7*0.18))
q=A.L()
q.r=F.rX.gp(0)
a5.O(s,r,q)
e=-2.5+b3*0.5
d=f.a5(0,new A.r(Math.sin(e)*a7*0.2,Math.cos(e)*a7*0.2))
a5.ah(f,d,P.ahA(F.rX,t))
w=A.L()
w.r=F.rX.gp(0)
a5.O(d,r,w)
v*=0.7
a0=new A.r(0,v)
a1=a7*0.22
if(b1===1){w=a0.a5(0,new A.r(0,-a1*0.12))
u=A.L()
u.r=F.m8.gp(0)
a5.O(w,a1*1.18,u)}w=A.L()
w.r=F.rX.gp(0)
a5.O(a0,a1,w)
if(b1===0){w=A.bW(a0,a1)
u=A.L()
u.r=F.m8.gp(0)
a5.cQ(w,3.141592653589793,3.141592653589793,!0,u)}else if(b1===2){w=A.bW(a0,a1)
u=A.L()
u.r=F.m8.gp(0)
a5.cQ(w,3.141592653589793,3.141592653589793,!0,u)
for(w=v+a1*0.3,u=a1*0.2,l=0;l<2;++l){a2=F.fP[l]
t=new A.ar(B.S,B.Q,B.V,B.X,B.U)
t.r=F.m8.gp(0)
a5.O(new A.r(0+a2*a1*1.05,w),u,t)}}a3=B.h.F(a8*0.8,3)>2.85
for(w=v+a1*0.42,u=a1*0.12,t=a1*0.25,s=a8*0.7,r=a1*0.13,v+=a1*0.05,q=-a1*0.15,p=v+0,o=a1*0.15,l=0;l<2;++l){n=F.fP[l]*a1
m=0+n*0.4
if(a3){k=new A.ar(B.S,B.Q,B.V,B.X,B.U)
k.b=B.aa
k.c=1.6
k.r=B.bq.gp(0)
k.d=B.bG
a5.ah(new A.r(m+q,p),new A.r(m+o,p),k)}else{k=new A.ar(B.S,B.Q,B.V,B.X,B.U)
k.r=B.c.gp(0)
a5.O(new A.r(m,v),t,k)
k=Math.sin(s)
j=new A.ar(B.S,B.Q,B.V,B.X,B.U)
j.r=B.w.gp(0)
a5.O(new A.r(m+k*a1*0.06,p),r,j)}m=new A.ar(B.S,B.Q,B.V,B.X,B.U)
m.r=B.hL.j(0.5).gp(0)
a5.O(new A.r(0+n*0.62,w),u,m)}a5.cQ(A.bX(a0.a5(0,new A.r(0,a1*0.5)).aJ(0,new A.r(0,a1*0.1)),a1*0.4,a1*0.65),0.2,2.741592653589793,!1,P.ahA(B.bq,1.8))
a4.restore()},
i15(){var w,v=$.oz(),u=J.e6(10,x.N)
for(w=0;w<10;++w)u[w]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[v.aw(32)]
return"WS"+B.d.hg(u)},
auy(){var w=0,v=A.j(x.a),u,t=2,s=[],r,q,p,o,n,m
var $async$auy=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.c9(),$async$auy)
case 3:if(!e){u=A.T(x.N,x.z)
w=1
break}t=5
w=8
return A.b(A.f5("ngmy_worksheet_project_qr_stashes_v1",null,!1,B.bN),$async$auy)
case 8:r=e
if(r==null){u=A.T(x.N,x.z)
w=1
break}q=J.u(r,"stashes")
if(x.f.b(q)){o=A.a1(q,x.N,x.z)
u=o
w=1
break}t=2
w=7
break
case 5:t=4
m=s.pop()
p=A.ac(m)
$.am.$1("[worksheet qr stash] load: "+A.w(p))
w=7
break
case 4:w=2
break
case 7:u=A.T(x.N,x.z)
w=1
break
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$auy,v)},
auz(d){return C.i16(d)},
i16(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$auz=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.c9(),$async$auz)
case 3:if(!f){w=1
break}t=5
w=8
return A.b(A.hQ("ngmy_worksheet_project_qr_stashes_v1",A.J(["stashes",d,"savedAt",new A.V(Date.now(),0,!1).aa().ag()],x.N,x.z),!1,!1,B.cQ,null),$async$auz)
case 8:t=2
w=7
break
case 5:t=4
p=s.pop()
r=A.ac(p)
$.am.$1("[worksheet qr stash] save: "+A.w(r))
w=7
break
case 4:w=2
break
case 7:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$auz,v)},
auB(d,e,f){var w=0,v=A.j(x.he),u,t,s,r,q,p
var $async$auB=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=3
return A.b(A.c9(),$async$auB)
case 3:if(!h){u=null
w=1
break}t=B.a.i(d)
if(t.length===0){u=null
w=1
break}s=C.i15()
w=4
return A.b(C.auy(),$async$auB)
case 4:r=h
q=B.a.i(e)
p=B.dV.aL(t)
J.aK(r,s,A.J(["ownerEmail",q,"projectId",f,"payload",B.cK.gcn().aL(p),"usesRemaining",25,"createdAt",new A.V(Date.now(),0,!1).aa().ag()],x.N,x.K))
w=5
return A.b(C.auz(r),$async$auB)
case 5:u=new A.a1E("NGMYWSSYNC2|"+s,s,25)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$auB,v)},
auA(d){var w=0,v=A.j(x.T),u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$auA=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:i=B.a.i(d)
if(i.length===0){u=null
w=1
break}w=3
return A.b(A.c9(),$async$auA)
case 3:if(!f){u=null
w=1
break}w=4
return A.b(C.auy(),$async$auA)
case 4:q=f
p=J.a8(q)
o=p.h(q,i)
if(!x.f.b(o)){u=null
w=1
break}n=J.a8(o)
m=A.aJ(n.h(o,"usesRemaining"))
l=m==null?null:B.h.M(m)
if(l==null)l=0
if(l<=0){u=null
w=1
break}n=n.h(o,"payload")
t=J.k(n==null?"":n)
if(J.ad(t)===0){u=null
w=1
break}s=null
try{s=B.cb.cD(0,B.cJ.aL(t))}catch(h){r=A.ac(h)
$.am.$1("[worksheet qr stash] decode: "+A.w(r))
u=null
w=1
break}if(B.a.i(s).length===0){u=null
w=1
break}j=l-1
if(j<=0)p.W(q,i)
else{n=x.N
m=x.z
m=A.dL(A.a1(o,n,m),n,m)
m.n(0,"usesRemaining",j)
m.n(0,"lastUsedAt",new A.V(Date.now(),0,!1).aa().ag())
p.n(q,i,m)}w=5
return A.b(C.auz(q),$async$auA)
case 5:u=s
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$auA,v)},
huE(){var w=new A.V(Date.now(),0,!1).aa()
return"wst_"+(1000*w.a+w.b)+"_"+B.cT.aw(999999)},
i17(d){var w,v,u,t,s,r,q
try{w=A.Si(d)
if(w==null)return d
v=w
if(J.Mp(v)>960||J.Mo(v)>960){s=v
r=J.Mp(v)>=J.Mo(v)?960:null
v=A.a3l(s,J.Mo(v)>J.Mp(v)?960:null,B.In,r)}s=v
u=A.a6Q(82).LW(s,B.xb)
if(J.ad(u)===0)return d
s=new Uint8Array(A.cc(u))
return s}catch(q){t=A.ac(q)
$.am.$1("[worksheet-thumb] compress failed: "+A.w(t))
return d}},
cpK(d,e){var w=0,v=A.j(x.y),u,t,s
var $async$cpK=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=B.a.i(d)
if(s.length===0||e.length===0){u=!1
w=1
break}t=C.i17(e)
$.cpG.n(0,s,t)
u=C.bGP(s,t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$cpK,v)},
b5d(d){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$b5d=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:l=B.a.i(d)
if(!J.d5(l,"data:image")){u=null
w=1
break}t=4
r=J.eC(l,",")?B.d.gal(J.lR(l,",")):l
q=B.cJ.aL(r)
if(J.ad(q)===0){u=null
w=1
break}p=C.huE()
w=7
return A.b(C.cpK(p,q),$async$b5d)
case 7:o=f
if(!o){u=null
w=1
break}u="ngmy:ws-thumb:"+p
w=1
break
t=2
w=6
break
case 4:t=3
k=s.pop()
n=A.ac(k)
$.am.$1("[worksheet-thumb] persistDataUrl failed: "+A.w(n))
u=null
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$b5d,v)},
cpH(d){var w=0,v=A.j(x.T),u,t,s
var $async$cpH=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=B.a.i(d)
if(s.length===0){u=null
w=1
break}if(B.a.Z(s,"data:image")){u=s
w=1
break}w=3
return A.b(N.cpJ(s),$async$cpH)
case 3:t=f
if(t==null||t.length===0){u=null
w=1
break}u="data:image/jpeg;base64,"+B.cK.gcn().aL(t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$cpH,v)},
a9Y(d){var w=0,v=A.j(x.H),u,t
var $async$a9Y=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=N.hI9(d)
if(t==null){w=1
break}$.cpG.W(0,t)
w=3
return A.b(C.bGO(t),$async$a9Y)
case 3:case 1:return A.h(u,v)}})
return A.i($async$a9Y,v)},
bGP(d,e){return C.it4(d,e)},
it4(d,e){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$bGP=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:l=B.a.i(d)
if(l.length===0||e.length===0){u=!1
w=1
break}t=4
n=$.aQf
w=7
return A.b(n==null?$.aQf=N.hgs():n,$async$bGP)
case 7:r=g
q=new Uint8Array(A.cc(e))
p=J.mp(r,"thumbs","readwrite")
B.iE.mh(J.mo(p,"thumbs"),q,l)
w=8
return A.b(J.oC(p),$async$bGP)
case 8:u=!0
w=1
break
t=2
w=6
break
case 4:t=3
k=s.pop()
o=A.ac(k)
$.am.$1("[worksheet-thumb idb put] "+A.w(o))
u=!1
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$bGP,v)},
bGO(d){return C.it2(d)},
it2(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p,o,n,m,l
var $async$bGO=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:m=B.a.i(d)
if(m.length===0){w=1
break}t=4
o=$.aQf
w=7
return A.b(o==null?$.aQf=N.hgs():o,$async$bGO)
case 7:r=f
q=J.mp(r,"thumbs","readwrite")
B.iE.Gr(J.mo(q,"thumbs"),m)
w=8
return A.b(J.oC(q),$async$bGO)
case 8:t=2
w=6
break
case 4:t=3
l=s.pop()
p=A.ac(l)
$.am.$1("[worksheet-thumb idb delete] "+A.w(p))
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$bGO,v)}},D,Au,Av,Z,Aw
J=c[1]
A=c[0]
B=c[2]
A8=c[65]
N=c[62]
Q=c[266]
A_=c[169]
S=c[61]
A9=c[240]
L=c[219]
H=c[35]
E=c[229]
T=c[125]
Aa=c[243]
U=c[108]
Ab=c[138]
Ac=c[120]
Ad=c[205]
A0=c[122]
Ae=c[239]
Af=c[45]
R=c[238]
A1=c[206]
Ag=c[260]
Ah=c[196]
Ai=c[209]
M=c[93]
A2=c[89]
Aj=c[176]
A3=c[134]
A4=c[179]
A5=c[204]
Ak=c[263]
A6=c[265]
Al=c[81]
G=c[264]
Am=c[137]
An=c[124]
A7=c[223]
Ao=c[34]
Ap=c[268]
V=c[123]
O=c[199]
Aq=c[210]
Ar=c[130]
W=c[267]
As=c[160]
X=c[253]
P=c[44]
F=c[99]
At=c[33]
I=c[107]
K=c[143]
Y=c[79]
C=a.updateHolder(c[7],C)
D=c[259]
Au=c[80]
Av=c[217]
Z=c[262]
Aw=c[261]
C.aqd.prototype={}
C.b0v.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.c,g=h.bke(),f=h.x!=null&&h.zO(i).length===0
if(h.x!=null)w=f?B.b2:B.bD
else w=h.gUP()?B.bD:B.e3
v=B.a.i(h.b)
if(v.length===0)v="\u2014"
u=A.l(22)
t=A.K(D.brh,B.r,1)
s=x.p
r=A.p(i,A.x(A.a([A.p(i,D.fiO,B.f,i,i,new A.o(B.b2.j(0.12),i,i,A.l(999),i,i,B.n),i,i,i,i,B.hl,i,i,i),B.T,D.fOX,B.ax,A.d(C.xp(new A.V(Date.now(),0,!1),!0),i,i,i,i,i,i,D.fKz,i,i,i)],s),B.l,i,B.e,B.i,0,B.p),B.f,i,i,D.b8X,i,i,i,i,B.OK,i,i,i)
q=A.l(16)
p=A.K(B.bm,B.r,1)
o=A.K(B.b2.j(0.28),B.r,1)
n=A.hiL(h.d)
o=A.p(B.z,C.b0u(A.fPe(h.e,n),30),B.f,i,i,new A.o(B.mb,i,o,i,i,i,B.a6),i,56,i,i,i,i,i,56)
n=A.d(v,i,i,i,i,i,i,D.fFv,B.K,i,i)
m=A.l(14)
l=A.K(B.bm,B.r,1)
q=A.p(i,A.x(A.a([o,B.P,n,B.bF,D.fPf,B.af,A.p(i,A.x(A.a([D.h4w,B.bF,A.d(A.Bo(h.c),i,i,i,i,i,i,D.fA6,i,i,i)],s),B.l,i,B.e,B.i,0,B.p),B.f,i,i,new A.o(B.c,i,l,m,i,i,B.n),i,i,i,i,B.fi,i,i,1/0)],s),B.l,i,B.e,B.i,0,B.p),B.f,i,i,new A.o(B.aS,i,p,q,i,i,B.n),i,i,i,i,O.an8,i,i,i)
p=A.l(16)
m=A.K(B.bm,B.r,1)
l=j.aTH("Original due",C.xp(h.r,!1))
n=j.aTH("Current due",C.xp(h.f,!1))
o=w.j(0.1)
k=A.l(12)
p=A.a([q,B.T,A.p(i,A.x(A.a([l,B.P,n,B.T,A.p(i,A.d(h.gaNG(),i,i,i,i,i,i,A.m(i,i,w,i,i,i,i,i,i,i,i,12.5,i,i,B.u,i,i,!0,i,0.4,i,i,i,i,i,i),B.K,i,i),B.f,i,i,new A.o(o,i,i,k,i,i,B.n),i,i,i,i,B.CC,i,i,1/0),B.T,j.clz(),B.P,j.c87(g,f)],s),B.l,i,B.e,B.i,0,B.p),B.f,i,i,new A.o(B.c,i,m,p,i,i,B.n),i,i,i,i,B.bl,i,i,i)],s)
q=B.a.i(h.y)
if(q.length!==0){o=A.l(14)
n=A.K(B.bm,B.r,1)
B.d.u(p,A.a([B.T,A.p(i,A.x(A.a([D.fQe,B.ax,A.d(q,i,i,i,i,i,i,D.fEI,i,i,i)],s),B.E,i,B.e,B.i,0,B.p),B.f,i,i,new A.o(B.aS,i,n,o,i,i,B.n),i,i,i,i,B.bl,i,i,1/0)],s))}if(h.gaIf()){q=A.l(14)
o=A.K(B.cA,B.r,1.6)
B.d.u(p,A.a([B.T,A.p(i,A.x(A.a([D.h5P,B.P,A.bv(A.l(12),A.ec(new A.a5(1/0,88,A.b5(i,i,i,new A.Xo(h.ax,B.a_,D.fnA,!0,3.5,i),B.az),i),B.c,!0),B.aq)],s),B.E,i,B.e,B.i,0,B.p),B.f,i,i,new A.o(B.c,i,o,q,i,i,B.n),i,i,i,i,B.CE,i,i,i)],s))}p.push(B.aB)
p.push(D.fYE)
return A.p(i,A.x(A.a([r,new A.D(B.a1g,A.x(p,B.al,i,B.e,B.i,0,B.p),i)],s),B.al,i,B.e,B.N,0,B.p),B.aq,i,i,new A.o(B.c,i,t,u,i,i,B.n),i,i,i,i,i,i,i,1/0)},
aTH(d,e){var w=null
return A.A(A.a([A.E(A.d(d,w,w,w,w,w,w,D.acA,w,w,w),1),A.d(e,w,w,w,w,w,w,D.fB9,w,w,w)],x.p),B.l,w,B.e,B.i,0,w,w)},
clz(){var w,v,u="Date paid",t=this.c
if(t.x==null)return this.aaM(B.e3,u,"Not paid yet")
w=t.zO(null).length
v=w===0?B.b2:B.bD
return this.aaM(v,u,C.xp(t.x,!0))},
c87(d,e){var w,v,u=null,t="Missed days"
if(this.c.x!=null&&e)return this.aaM(B.b2,t,"None \u2014 paid on time")
w=d.length
if(w===0)return this.aaM(B.b2,t,"None yet")
w=A.d("Missed days ("+w+")",u,u,u,u,u,u,D.acA,u,u,u)
v=A.U(d).k("N<1,h9>")
v=A.C(new A.N(d,new C.c93(),v),v.k("ak.E"))
return A.x(A.a([w,B.am,A.c_(B.bI,v,B.br,u,6,6)],x.p),B.E,u,B.e,B.i,0,B.p)},
aaM(d,e,f){var w=null
return A.A(A.a([A.E(A.d(e,w,w,w,w,w,w,D.acA,w,w,w),1),new A.di(1,B.cn,A.d(f,w,w,w,w,w,w,A.m(w,w,d,w,w,w,w,w,w,w,w,12.5,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),B.e2,w,w),w)],x.p),B.E,w,B.e,B.i,0,w,w)}}
C.bdH.prototype={
a4(d,e){new A.Xo(this.b,B.a_,e,!0,3.5,null).a4(d,e)},
aE(d){return d.b!==this.b}}
C.aqq.prototype={
S(){return new C.aFf(A.a([],x.bp))},
ge3(){return this.c}}
C.aFf.prototype={
Y(){this.a3()
this.Jq()},
Jq(){var w=0,v=A.j(x.H),u,t=this,s
var $async$Jq=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(A.a3u(t.a.c),$async$Jq)
case 3:s=e
if(t.c==null){w=1
break}t.m(new C.dRD(t,s))
case 1:return A.h(u,v)}})
return A.i($async$Jq,v)},
aVF(d,e){var w,v=null,u=this.a.d.a,t=u?B.a_:B.aS,s=A.m(v,v,u?B.bu:B.bj,v,v,v,v,v,v,v,v,13,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),r=A.l(10)
u=(this.a.d.a?B.bu:B.bj).j(0.22)
w=A.l(10)
return A.bA(v,new A.b6(4,r,new A.ay(u,1,B.r,-1)),v,B.bl,v,v,v,v,!0,new A.b6(4,w,new A.ay((this.a.d.a?B.bu:B.bj).j(0.22),1,B.r,-1)),v,v,v,v,v,t,!0,v,v,v,v,new A.b6(4,A.l(10),D.b6A),v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,!0,v,s,d,!0,!0,!1,v,v,v,v,v,e,v,v,v,v,v,v,v,v)},
aVE(d){return this.aVF(d,null)},
Qi(d){return this.cpe(d)},
cpe(d){var w=0,v=A.j(x.T),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$Qi=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
n=d?B.Im:B.eR
w=7
return A.b(new A.i5().CT(72,900,900,n),$async$Qi)
case 7:q=f
if(q==null){u=null
w=1
break}w=8
return A.b(q.fq(),$async$Qi)
case 8:p=f
n=B.cK.gcn().aL(p)
u="data:image/jpeg;base64,"+n
w=1
break
t=2
w=6
break
case 4:t=3
l=s.pop()
o=A.ac(l)
n=r.c
if(n!=null)n.K(x.q).f.T(A.b2(null,null,null,null,null,B.t,null,A.d("Could not pick photo: "+A.w(o),null,null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))
u=null
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$Qi,v)},
b3T(d,e,f,g,h,i){var w,v,u,t,s=this,r=null,q=s.a.d.a,p=q?B.a_:B.aS,o=A.l(10),n=A.K((q?B.bu:B.bj).j(0.18),B.r,1)
if(d)q=B.cW
else q=s.a.d.a?B.bu:B.bj
q=A.X(e,q,r,r,r,18)
w=A.d(i,r,r,r,r,r,r,A.m(r,r,s.a.d.a?B.aS:B.av,r,r,r,r,r,r,r,r,12.5,r,r,B.O,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
v=d?"Added \xb7 optional":h
if(d)u=B.cW
else u=s.a.d.a?B.bu:B.bj
t=x.p
u=A.E(A.x(A.a([w,A.d(v,r,r,r,r,r,r,A.m(r,r,u,r,r,r,r,r,r,r,r,10.5,r,r,B.a8,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],t),B.E,r,B.e,B.i,0,B.p),1)
v=A.fs(r,r,r,r,r,r,r,r,r,r,r,B.cW,r,r,r,r,r,r,r,r,r,r,r,r,r,B.ch)
q=A.a([q,B.ae,u,A.bP(!1,A.d(d?"Change":"Add",r,r,r,r,r,r,r,r,r,r),r,r,!0,r,r,r,f,r,v)],t)
if(d)q.push(A.aI(r,r,r,r,A.X(B.cB,s.a.d.a?B.bu:B.bj,r,r,r,18),r,r,r,g,r,r,r,r,r,B.ch))
return A.p(r,A.A(q,B.l,r,B.e,B.i,0,r,r),B.f,r,r,new A.o(p,r,n,o,r,r,B.n),r,r,r,B.jK,D.bEu,r,r,r)},
DM(d){return this.bEr(d)},
bEq(){return this.DM(null)},
bEr(a5){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$DM=A.e(function(a6,a7){if(a6===1)return A.f(a7,v)
for(;;)switch(w){case 0:a2={}
a3=a5==null
a4=a3?null:a5.b
if(a4==null)a4=""
s=$.ax()
r=new A.au(new A.bb(a4,B.b7,B.aP),s)
if(a3)a4=""
else{a4=a5.c
q=B.h.fK(a4)
p=a5.c
a4=a4===q?B.o.v(B.h.M(p)):B.h.ad(p,2)}o=new A.au(new A.bb(a4,B.b7,B.aP),s)
a4=a3?null:a5.y
if(a4==null)a4=""
n=new A.au(new A.bb(a4,B.b7,B.aP),s)
if(a3){a4=new A.V(Date.now(),0,!1).bS(6048e8)
m=A.c0(a4.gcl(),a4.gci(),a4.gcz(),0,0,0,0,0)}else{a4=a5.f
m=A.c0(a4.gcl(),a4.gci(),a4.gcz(),0,0,0,0,0)}a2.a=m
l=a3?null:a5.as
a2.b=l==null?"":l
k=a3?null:a5.at
a2.c=k==null?"":k
a4=a3?null:a5.ax
if(a4==null)a4=[]
j=A.br(a4,!0,x.cT)
i=a3?null:A.hiL(a5.d)
a2.d=i
h=a3?null:B.a.i(a5.e)
if(h==null)h=""
a2.e=h
if(h.length===0&&i!=null)a2.e=i===B.xm?"\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1":"\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1"
a4=t.c
a4.toString
w=3
return A.b(A.hR(B.w.j(0.55),!0,"Dismiss",a4,new C.dRm(),new C.dRn(a2,t,a5,r,new C.dRo(a2,t),o,n,j),B.eH,!0,x.y),$async$DM)
case 3:g=a7
f=B.a.i(r.a.a)
e=A.cX(B.a.i(o.a.a))
if(e==null)e=0
d=B.a.i(n.a.a)
r.V$=s
r.R$=0
o.V$=s
o.R$=0
n.V$=s
n.R$=0
if(g!==!0||t.c==null){w=1
break}if(f.length===0||e<=0){t.c.K(x.q).f.T(D.fuc)
w=1
break}a0=a2.d
if(a0==null){t.c.K(x.q).f.T(D.fsR)
w=1
break}a1=A.fPe(a2.e,a0)
w=a3?4:6
break
case 4:a3=t.a.c
a4=Date.now()
s=a2.a
q=a2.b
a2=a2.c
p=a0===B.xm?"male":"female"
w=7
return A.b(A.ajm(a3,A.hrh(0,e,a1,null,"",s,p,"iou_"+1000*a4,q,d,null,null,f,a2,j)),$async$DM)
case 7:w=5
break
case 6:a5.b=f
a5.c=e
a5.y=d
a5.as=a2.b
a5.at=a2.c
a5.d=a0===B.xm?"male":"female"
a5.e=a1
a3=a5.ax
B.d.a8(a3)
B.d.u(a3,j)
a3=a2.a
a3=A.c0(a3.gcl(),a3.gci(),a3.gcz(),0,0,0,0,0)
a4=a5.f
if(!a3.A(0,A.c0(a4.gcl(),a4.gci(),a4.gcz(),0,0,0,0,0)))a5.cTc(a2.a)
w=8
return A.b(A.ajm(t.a.c,a5),$async$DM)
case 8:case 5:w=9
return A.b(t.Jq(),$async$DM)
case 9:case 1:return A.h(u,v)}})
return A.i($async$DM,v)},
aWk(d,e,f,g){var w,v,u,t,s,r,q,p=null
if(g)w=B.cW.j(0.14)
else w=this.a.d.a?B.a_:B.aS
v=A.l(12)
u=A.l(12)
t=A.l(12)
if(g)s=B.cW
else s=(this.a.d.a?B.bu:B.bj).j(0.2)
s=A.K(s,B.r,g?1.5:1)
r=C.b0u(d,18)
if(g)q=B.cW
else q=this.a.d.a?B.aS:B.av
return A.aG(!1,B.a3,!0,v,A.aM(!1,u,!0,A.p(p,A.A(A.a([r,B.bn,A.d(e,p,p,p,p,p,p,A.m(p,p,q,p,p,p,p,p,p,p,p,13,p,p,B.H,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)],x.p),B.l,p,B.b9,B.i,0,p,p),B.f,p,p,new A.o(p,p,s,t,p,p,B.n),p,p,p,p,B.bS,p,p,p),p,!0,p,p,p,p,p,p,p,p,p,p,p,f,p,p,p,p,p,p,p),B.f,w,0,p,p,p,p,p,B.ai)},
T5(d){return this.cHb(d)},
cHb(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$T5=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=d.x!=null?3:5
break
case 3:d.x=null
w=4
break
case 5:s=t.c
s.toString
w=6
return A.b(A.hR(B.w.j(0.55),!0,"Dismiss",s,new C.dRG(),new C.dRH(t,d),B.ha,!0,x.y),$async$T5)
case 6:if(f!==!0){w=1
break}s=Date.now()
d.x=new A.V(s,0,!1)
case 4:w=7
return A.b(A.ajm(t.a.c,d),$async$T5)
case 7:w=8
return A.b(t.Jq(),$async$T5)
case 8:case 1:return A.h(u,v)}})
return A.i($async$T5,v)},
Qh(d,e){return this.bPn(0,e)},
bPn(d,e){var w=0,v=A.j(x.H),u,t=this,s
var $async$Qh=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=3
return A.b(A.lv(s,"Cancel","Delete",e.b+" \xb7 "+A.Bo(e.c)+" will be removed from this device.","Delete this debt?"),$async$Qh)
case 3:if(!g){w=1
break}w=4
return A.b(C.fIE(t.a.c,e.a),$async$Qh)
case 4:w=5
return A.b(t.Jq(),$async$Qh)
case 5:case 1:return A.h(u,v)}})
return A.i($async$Qh,v)},
agF(d){return this.cj_(d)},
cj_(d){var w=0,v=A.j(x.H),u=this,t
var $async$agF=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return A.b(A.bU(B.L,null,new C.dRA(u,d),t,!0,!0,!1,null,!1,!1,x.H),$async$agF)
case 2:return A.h(null,v)}})
return A.i($async$agF,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null
if(m.e)return D.ezb
w=J.dI(m.d,new C.dRI())
v=A.C(w,w.$ti.k("M.E"))
w=J.dI(m.d,new C.dRJ())
u=A.C(w,w.$ti.k("M.E"))
t=B.d.cB(v,0,new C.dRK())
w=A.l(18)
s=m.a.d.a
r=s?D.cER:D.aE8
q=A.K(s?B.cW.j(0.35):B.cW.j(0.18),B.r,1)
s=A.p(l,D.c5t,B.f,l,l,new A.o(B.cW.j(m.a.d.a?0.28:0.14),l,l,A.l(12),l,l,B.n),l,38,l,l,l,l,l,38)
p=x.p
s=A.A(A.a([s,B.as,A.E(A.d("Cashier",l,l,l,l,l,l,A.m(l,l,m.a.d.a?B.aS:B.av,l,l,l,l,l,l,l,l,18,l,l,B.u,l,l,!0,l,-0.2,l,l,l,l,l,l),l,l,l),1),A.aG(!1,B.a3,!0,A.l(12),A.aM(!1,A.l(12),!0,D.eyx,l,!0,l,l,l,l,l,l,l,l,l,l,l,new C.dRL(m),l,l,l,l,l,l,l),B.f,B.cW,0,l,l,l,l,l,B.ai)],p),B.l,l,B.e,B.i,0,l,l)
o=A.E(m.cDd("Open",""+v.length),1)
n=v.length===0?"$0.00":A.Bo(t)
r=A.a([A.p(l,A.x(A.a([s,B.af,A.A(A.a([o,B.ae,A.E(m.ba4(v.length!==0,"Owed",n),1)],p),B.l,l,B.e,B.i,0,l,l)],p),B.E,l,B.e,B.i,0,B.p),B.f,l,l,new A.o(l,l,q,w,l,new A.a7(B.ay,B.aC,B.x,r,l,l),B.n),l,l,l,l,B.an5,l,l,l),B.aB],p)
if(J.ct(m.d)){w=m.a.d.a
s=w?B.ef:B.c
q=A.l(18)
o=A.K((w?B.bu:B.bj).j(0.12),B.r,1)
n=A.p(l,D.c03,B.f,l,l,new A.o(B.cW.j(0.12),l,l,A.l(16),l,l,B.n),l,52,l,l,l,l,l,52)
w=A.d("Nobody owes you yet",l,l,l,l,l,l,A.m(l,l,m.a.d.a?B.aS:B.av,l,l,l,l,l,l,l,l,15,l,l,B.H,l,l,!0,l,l,l,l,l,l,l,l),B.K,l,l)
r.push(A.p(l,A.x(A.a([n,B.af,w,B.ax,A.d("Add a name, amount, and pay-by date.",l,l,l,l,l,l,A.m(l,l,m.a.d.a?B.bu:B.bj,l,l,l,l,l,l,l,l,12.5,l,l,l,l,1.35,!0,l,l,l,l,l,l,l,l),B.K,l,l)],p),B.l,l,B.e,B.i,0,B.p),B.f,l,l,new A.o(s,l,o,q,l,l,B.n),l,l,l,l,D.bHa,l,l,1/0))}else{w=m.gcou()
s=A.C(new A.N(v,w,A.U(v).k("N<1,v>")),x.l)
if(u.length!==0){q=A.a([B.am,new A.D(D.bIR,A.d("Paid",l,l,l,l,l,l,A.m(l,l,m.a.d.a?B.bu:B.bj,l,l,l,l,l,l,l,l,12,l,l,B.H,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),l)],p)
B.d.u(q,new A.N(u,w,A.U(u).k("N<1,v>")))
B.d.u(s,q)}B.d.u(r,s)}return A.x(r,B.al,l,B.e,B.i,0,B.p)},
ba4(d,e,f){var w,v=this,u=null,t=v.a.d.a?B.w.j(0.22):B.c.j(0.85),s=A.l(14),r=A.K((v.a.d.a?B.bu:B.bj).j(0.12),B.r,1),q=A.d(e,u,u,u,u,u,u,A.m(u,u,v.a.d.a?B.bu:B.bj,u,u,u,u,u,u,u,u,11,u,u,B.O,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)
if(d)w=B.cW
else w=v.a.d.a?B.aS:B.av
return A.p(u,A.x(A.a([q,B.bF,A.d(f,u,1,B.a2,u,u,u,A.m(u,u,w,u,u,u,u,u,u,u,u,16,u,u,B.u,u,u,!0,u,-0.2,u,u,u,u,u,u),u,u,u)],x.p),B.E,u,B.e,B.i,0,B.p),B.f,u,u,new A.o(t,u,r,s,u,u,B.n),u,u,u,u,B.ez,u,u,u)},
cDd(d,e){return this.ba4(!1,d,e)},
cov(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=d.zO(j).length,h=d.bju()
if(d.x!=null){w=d.zO(j).length
v=w===0?B.cW:B.bD}else if(d.gUP())v=B.bD
else{if(h)w=B.cW
else w=k.a.d.a?B.bu:B.bj
v=w}if(d.x!=null){w=d.zO(j).length
u=d.x
if(w===0){u.toString
t="Paid on time \xb7 "+C.xp(u,!1)}else{u.toString
t="Paid "+C.xp(u,!1)+" \xb7 "+i+" missed"}}else if(h)t="Pays tomorrow"
else{w=d.f
t=i>0?"Due "+C.xp(w,!1)+" \xb7 "+i+" missed":"Due "+C.xp(w,!1)}w=k.a.d.a?B.ef:B.c
u=A.l(18)
if(d.gUP()&&d.x==null)s=B.bD.j(0.35)
else s=(k.a.d.a?B.bu:B.bj).j(0.12)
s=A.K(s,B.r,1)
r=k.a.d.a?j:A.a([new A.ab(0,B.G,B.w.j(0.04),B.cM,12)],x.V)
q=A.l(18)
p=k.a.d.a?B.bs:B.mb
o=A.K(d.gUP()&&d.x==null?B.bD.j(0.45):B.cW.j(0.28),B.r,1.4)
n=d.x!=null?0.55:1
m=A.hiL(d.d)
o=A.p(B.z,A.d3(C.b0u(A.fPe(d.e,m),24),n),B.f,j,j,new A.o(p,j,o,j,j,j,B.a6),j,46,j,j,j,j,j,46)
p=d.b
n=k.a.d.a?B.aS:B.av
m=x.p
n=A.a([new A.di(1,B.cn,A.d(p,j,1,B.a2,j,j,j,A.m(j,j,n.j(d.x!=null?0.6:1),j,j,j,j,j,j,j,j,14.5,j,j,B.H,j,j,!0,j,j,j,j,j,j,j,j),j,j,j),j)],m)
if(B.a.i(d.as).length!==0||B.a.i(d.at).length!==0||d.gaIf())B.d.u(n,A.a([B.e7,A.X(B.PC,B.cW.j(0.8),j,j,j,14)],m))
p=A.E(A.x(A.a([A.A(n,B.l,j,B.e,B.i,0,j,j),B.cS,A.d(t,j,1,B.a2,j,j,j,A.m(j,j,v,j,j,j,j,j,j,j,j,11.5,j,j,B.O,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)],m),B.E,j,B.e,B.i,0,B.p),1)
n=A.Bo(d.c)
l=k.a.d.a?B.aS:B.av
n=A.d(n,j,j,j,j,j,j,A.m(j,j,l.j(d.x!=null?0.55:1),j,j,j,j,j,j,j,j,14,j,j,B.u,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)
return A.p(j,A.aG(!1,B.a3,!0,j,A.aM(!1,q,!0,new A.D(Ag.amU,A.A(A.a([o,B.bc,p,B.ae,A.x(A.a([n,B.bF,A.X(B.eI,(k.a.d.a?B.bu:B.bj).j(0.5),j,j,j,18)],m),B.dO,j,B.e,B.i,0,B.p)],m),B.l,j,B.e,B.i,0,j,j),j),j,!0,j,j,j,j,j,j,j,j,j,j,j,new C.dRC(k,d),j,j,j,j,j,j,j),B.f,B.L,0,j,j,j,j,j,B.ai),B.f,j,j,new A.o(w,j,s,u,r,j,B.n),j,j,j,B.da,j,j,j,j)}}
C.uV.prototype={}
C.ams.prototype={
B(a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0=null,a1=d.c,a2=a1.y,a3=d.d
if(a2)a3=a3.toUpperCase()
w=a1.w
v=w===B.b6
u=v?B.E:B.l
t=a1.as
s=A.l(t?12:22)
r=a1.e
q=r.j(t?0.6:0.85)
q=A.K(q,B.r,t?1.2:1.6)
p=A.a([new A.ab(0,B.G,B.w.j(0.45),B.cz,16)],x.V)
o=x.p
n=A.a([],o)
m=B.w.j(t?0.07:0.3)
l=A.K(r.j(0.6),B.r,1)
n.push(A.az(a0,A.p(a0,A.X(B.cB,t?a1.f:B.c,a0,a0,a0,17),B.f,a0,a0,new A.o(m,a0,l,a0,a0,a0,B.a6),a0,30,a0,a0,a0,a0,a0,30),B.y,!1,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,d.f,a0,a0,a0,a0,a0,a0,!1,B.a4))
m=v?B.a5:B.z
l=A.a([],o)
k=a1.r
j=k.length!==0
if(j&&!v)l.push(new A.D(B.iS,A.d(k,a0,a0,a0,a0,a0,a0,A.m(a0,a0,r,a0,a0,a0,a0,a0,a0,a0,a0,15,a0,a0,a0,a0,a0,!0,a0,a0,a0,a0,a0,a0,a0,a0),a0,a0,a0),a0))
i=a1.f
h=a1.x
g=h?"Georgia":a0
f=a2?16:19
a2=a2?2.2:0.5
l.push(A.d(a3,a0,1,a0,a0,!1,a0,A.m(a0,a0,i,a0,a0,a0,a0,a0,g,a0,a0,f,a0,a0,B.u,a0,a0,!0,a0,a2,a0,a0,a0,t?a0:D.aAh,a0,a0),a0,a0,a0))
if(j&&!v)l.push(new A.D(B.Ho,A.d(k,a0,a0,a0,a0,a0,a0,A.m(a0,a0,r,a0,a0,a0,a0,a0,a0,a0,a0,15,a0,a0,a0,a0,a0,!0,a0,a0,a0,a0,a0,a0,a0,a0),a0,a0,a0),a0))
a2=A.a([new A.dv(B.dJ,m,B.f,A.A(l,B.l,a0,B.e,B.N,0,a0,a0),a0)],o)
v=d.e
m=B.a.i(v)
if(m.length!==0){m=i.j(0.65)
a2.push(new A.D(D.bDG,A.d(v,a0,1,B.a2,a0,a0,a0,A.m(a0,a0,m,a0,a0,a0,a0,a0,a0,a0,a0,10,h?B.cL:B.bo,a0,a0,a0,a0,!0,a0,0.8,a0,a0,a0,a0,a0,a0),w,a0,a0),a0))}n.push(A.E(new A.D(B.fv,A.x(a2,u,a0,B.e,B.N,0,B.p),a0),1))
n.push(D.foo)
a2=A.a([A.A(n,B.l,a0,B.e,B.i,0,a0,a0)],o)
w=d.r
if(w!=null)B.d.u(a2,A.a([new A.D(B.wC,A.p(a0,a0,B.f,a0,a0,new A.o(a0,a0,a0,a0,a0,new A.a7(B.a5,B.a9,B.x,A.a([B.L,r.j(0.75),B.L],x.O),a0,a0),B.n),a0,1,a0,a0,a0,a0,a0,a0),a0),w],o))
e=new A.D(B.lR,A.x(a2,B.l,a0,B.e,B.N,0,B.p),a0)
if(a1.z){a2=A.l(t?9:19)
e=A.p(a0,e,B.f,a0,a0,new A.o(a0,a0,A.K(r.j(0.45),B.r,1),a2,a0,a0,B.n),a0,a0,a0,B.hz,a0,a0,a0,a0)}return A.p(a0,e,B.f,a0,a0,new A.o(a0,a0,q,s,p,new A.a7(B.ay,B.aC,B.x,a1.d,a0,a0),B.n),a0,a0,a0,D.bEZ,a0,a0,a0,a0)}}
C.aXd.prototype={
B(d){var w,v,u,t,s,r,q=null,p=this.c,o=this.e,n=A.p(q,q,B.f,o.j(0.28),q,q,q,1,q,q,q,q,q,q),m=x.p,l=A.a([],m),k=p.r,j=k.length!==0
if(j)l.push(A.d(k,q,q,q,q,q,q,A.m(q,q,o.j(0.55),q,q,q,q,q,q,q,q,11,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q))
w=p.y
v=this.d
if(w)v=v.toUpperCase()
u=p.w===B.b6?B.b6:B.K
t=o.j(0.6)
s=p.x?"Georgia":q
r=w?1.6:0.6
l.push(A.E(A.d(v,q,1,B.a2,q,q,q,A.m(q,q,t,q,q,q,q,q,s,q,q,10.5,w?B.bo:B.cL,q,B.O,q,q,!0,q,r,q,q,q,q,q,q),u,q,q),1))
if(j)l.push(A.d(k,q,q,q,q,q,q,A.m(q,q,o.j(0.55),q,q,q,q,q,q,q,q,11,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q))
o=A.a([A.A(l,B.l,q,B.e,B.i,0,q,q),B.cS,n],m)
if(p.z)o.push(new A.D(B.uJ,n,q))
return new A.D(B.da,A.x(o,B.l,q,B.e,B.N,0,B.p),q)}}
C.Ue.prototype={
S(){return new C.bhi()}}
C.bhi.prototype={
gc2T(){var w=this.d
return w===$?this.d=this.a.c:w},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=A.aE(d,n,x.w).w,l=x.p,k=A.a([D.ez6,D.ezc],l)
for(w=0;w<8;++w){v=D.a5G[w]
u=o.d
if(u===$){u=o.d=o.a.c
t=u}else t=u
s=v.a
r=u===s?B.Ia:B.zG
q=t===s
r=A.X(r,q?B.ey:B.bV,n,n,n,17)
q=q?B.c:B.ab
r=A.a([r,B.bn,A.d(v.b,n,n,n,n,n,n,new A.H(!0,q,n,n,n,n,13.5,B.u,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n),n,n,n),B.ae,new A.bz(1,B.bd,A.d(v.c,n,1,B.a2,n,n,n,B.B4,n,n,n),n)],l)
u=o.d
if((u===$?o.d=o.a.c:u)===s){s=new A.aP(24,24)
p=new A.ay(B.ey,2,B.r,-1)
s=new A.o(n,n,new A.bH(p,p,p,p),new A.bf(s,s,s,s),n,n,B.n)}else s=n
q=o.a
k.push(A.az(n,new A.D(B.eQ,A.x(A.a([new A.D(B.n2,new A.c8(B.aM,B.e,B.i,B.l,n,B.p,n,0,r,n),n),A.p(n,new A.dt(!0,new C.ams(v,q.d,q.e,new C.dhh(),n,n),n),B.f,n,n,s,n,n,n,n,n,n,n,n)],l),B.E,n,B.e,B.i,0,B.p),n),B.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.dhi(o,v),n,n,n,n,n,n,!1,B.a4))}k.push(new A.D(D.bFl,A.bJ(D.hbm,n,new C.dhj(o,d),A.bp(B.b8,n,n,n,n,B.p3,n,n,new A.ba(A.l(16),B.a1),n,n,n)),n))
return A.bn(!0,new A.cN(new A.aY(0,1/0,0,m.a.b*0.9),A.cw(k,n,n,D.bJK,n,n,B.ah,!0),n),!0,!1,B.ag,!0,!0)}}
C.nB.prototype={
aj(){var w=this
return A.J(["id",w.a,"title",w.b,"body",w.c,"updatedAt",w.d.aa().ag()],x.N,x.z)},
bg6(d,e,f){return new C.nB(this.a,e,d,f)}}
C.Ix.prototype={
x3(d,e,f,g,h,i,j,k,a0,a1,a2,a3){var w=this,v=k==null?w.a:k,u=a2==null?w.b:a2,t=a0==null?w.c:a0,s=e==null?w.d:e,r=f==null?w.e:f,q=a3==null?w.f:a3,p=i==null?w.r:i,o=g==null?w.w:g,n=a1==null?w.x:a1,m=d==null?w.y:d,l=j==null?w.z:j
return new C.Ix(v,u,t,s,r,q,p,o,n,m,l,h==null?w.Q:h)},
aGn(d){var w=null
return this.x3(w,w,w,w,w,d,w,w,w,w,w,w)},
cOP(d){var w=null
return this.x3(w,w,w,w,d,w,w,w,w,w,w,w)},
bg4(d,e,f){var w=null
return this.x3(d,w,w,w,w,w,w,w,e,w,f,w)},
cPt(d){var w=null
return this.x3(w,w,w,w,w,w,d,w,w,w,w,w)},
cPC(d){var w=null
return this.x3(w,w,w,w,w,w,w,w,w,d,w,w)},
cON(d){var w=null
return this.x3(w,w,w,d,w,w,w,w,w,w,w,w)},
cPE(d){var w=null
return this.x3(w,w,w,w,w,w,w,w,w,w,w,d)},
cOK(d){var w=null
return this.x3(w,w,d,w,w,w,w,w,w,w,w,w)},
cOF(d){var w=null
return this.x3(w,d,w,w,w,w,w,w,w,w,w,w)},
Gj(d){var w=null
return this.x3(w,w,w,w,w,w,w,d,w,w,w,w)},
cPM(d,e,f,g,h,i,j,k,l,m,n){return this.x3(d,e,f,g,null,h,i,j,k,l,m,n)},
aj(){var w=this
return A.J(["style",w.a,"title",w.b,"subtitle",w.c,"emblem",w.d,"foil",w.e,"titleSize",w.f,"position",w.r,"frame",w.w,"texture",w.x,"author",w.y,"ribbon",w.z,"header",w.Q],x.N,x.z)},
cMj(d,e,f){var w,v,u,t,s,r,q,p,o=null,n="title",m="subtitle",l=new C.bSo(d),k=A.aJ(d.h(0,"emblem")),j=k==null?o:B.h.M(k),i=A.aJ(d.h(0,"titleSize"))
if(i==null)i=o
k=l.$2("style",f)
w=typeof d.h(0,n)=="string"&&B.a.i(A.cP(d.h(0,n))).length!==0?B.a.i(A.cP(d.h(0,n))):o
v=typeof d.h(0,m)=="string"?B.a.i(A.cP(d.h(0,m))):o
u=j!=null&&j>=0&&j<e?j:o
t=l.$2("foil",D.Ef.gew(D.Ef))
s=i==null?o:B.h.D(i,18,36)
r=l.$2("position",D.a7p)
q=l.$2("frame",D.a6J)
l=l.$2("texture",D.a6F)
p=typeof d.h(0,"author")=="string"?B.a.i(A.cP(d.h(0,"author"))):o
return this.cPM(p,u,t,q,r,A.rk(d.h(0,"ribbon"))?A.H0(d.h(0,"ribbon")):o,k,v,l,w,s)}}
C.a_Q.prototype={
S(){return new C.aCd(A.a([],x.I),D.Pa)},
ge3(){return this.c}}
C.aCd.prototype={
Y(){var w,v=this
v.a3()
v.f=A.Ag(0,1)
w=$.ax()
v.z=new A.au(B.aw,w)
v.Q=new A.au(B.aw,w)
v.lj()
w=v.a
C.bF6(w.c,w.d).bG(new C.dhY(v),x.fL)},
t(){var w,v=this,u=v.f
u===$&&A.c()
u.t()
u=v.z
u===$&&A.c()
w=$.ax()
u.V$=w
u.R$=0
u=v.Q
u===$&&A.c()
u.V$=w
u.R$=0
v.a2()},
lj(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$lj=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
w=3
return A.b(C.LR(s.c,s.d),$async$lj)
case 3:r=e
if(t.c==null){w=1
break}t.m(new C.dhM(t,r))
t.ay3()
case 1:return A.h(u,v)}})
return A.i($async$lj,v)},
gauC(){var w,v=this
if(!J.ct(v.d)){w=v.r
w=w<0||w>=J.ad(v.d)}else w=!0
return w?null:J.u(v.d,v.r)},
ay3(){var w,v,u=this.gauC(),t=this.z
t===$&&A.c()
w=u==null
v=w?null:u.b
t.sb4(0,v==null?"":v)
t=this.Q
t===$&&A.c()
w=w?null:u.c
t.sb4(0,w==null?"":w)},
cho(d){this.m(new C.dhJ(this,d))
this.ay3()},
Oa(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$Oa=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!t.a.f){w=1
break}s=new C.nB(B.o.v(1000*Date.now()),"Untitled page","",new A.V(Date.now(),0,!1))
r=t.a
w=3
return A.b(C.aTk(r.c,r.d,s),$async$Oa)
case 3:w=4
return A.b(t.lj(),$async$Oa)
case 4:if(t.c==null||J.ct(t.d)){w=1
break}q=J.oD(t.d,new C.dhk(s))
p=q>=0?q:J.ad(t.d)-1
t.m(new C.dhl(t,p))
t.ay3()
r=t.f
r===$&&A.c()
w=r.f.length!==0?5:6
break
case 5:w=7
return A.b(r.BS(p+1,B.ck,B.kV),$async$Oa)
case 7:case 6:case 1:return A.h(u,v)}})
return A.i($async$Oa,v)},
Bw(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$Bw=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!t.a.f){w=1
break}s=t.z
s===$&&A.c()
r=B.a.i(s.a.a)
s=t.Q
s===$&&A.c()
q=B.a.i(s.a.a)
if(r.length===0){w=1
break}s=t.gauC()
s=s==null?null:s.a
if(s==null)s=B.o.v(1000*Date.now())
p=Date.now()
o=t.a
w=3
return A.b(C.aTk(o.c,o.d,new C.nB(s,r,q,new A.V(p,0,!1))),$async$Bw)
case 3:w=4
return A.b(t.lj(),$async$Bw)
case 4:if(t.c==null){w=1
break}t.m(new C.dhN(t))
case 1:return A.h(u,v)}})
return A.i($async$Bw,v)},
OS(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$OS=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.gauC()
if(!t.a.f||r==null){w=1
break}s=t.c
s.toString
w=3
return A.b(A.cg(null,null,!0,null,new C.dht(r),s,null,!0,!0,x.y),$async$OS)
case 3:if(e!==!0||t.c==null){w=1
break}s=t.a
w=4
return A.b(C.bET(s.c,s.d,r.a),$async$OS)
case 4:t.m(new C.dhu(t))
w=5
return A.b(t.lj(),$async$OS)
case 5:if(t.c!=null){s=t.f
s===$&&A.c()
s=s.f.length!==0}else s=!1
if(s){s=t.f
s===$&&A.c()
s.US(B.o.D(t.r+1,0,J.ad(t.d)))}case 1:return A.h(u,v)}})
return A.i($async$OS,v)},
za(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j
var $async$za=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.Bw(),$async$za)
case 5:case 4:if(t.c==null){w=1
break}w=J.cJ(t.d)?6:7
break
case 6:s=t.c
s.toString
r=t.a
q=r.c
p=r.e
o=r.x
w=8
return A.b(C.Se(s,r.r,o,p,q),$async$za)
case 8:if(e&&t.c!=null){s=t.c
s.toString
A.a6(s,!1).N(!0)}w=1
break
case 7:s=t.c
s.toString
r=t.a
w=9
return A.b(C.hIX(s,r.x,r.r),$async$za)
case 9:n=e
if(n==null||t.c==null){w=1
break}m=1000*Date.now()
s=t.a
w=10
return A.b(C.LR(s.c,s.d),$async$za)
case 10:l=e
for(s=n.d,r=J.cE(l),k=0;k<s.length;++k){j=s[k]
q=B.a.i(j.a)
if(q.length===0)q="Page "+(k+1)
r.I(l,new C.nB(""+(m+k),q,B.a.i(j.b),new A.V(Date.now(),0,!1)))}r=t.a
w=11
return A.b(C.Bx(r.c,r.d,l),$async$za)
case 11:w=12
return A.b(t.lj(),$async$za)
case 12:r=t.c
if(r==null){w=1
break}r.K(x.q).f.T(A.b2(null,null,null,null,null,B.t,null,A.d("The AI wrote your book: "+s.length+" pages.",null,null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$za,v)},
a1Q(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$a1Q=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.Bw(),$async$a1Q)
case 5:case 4:if(t.c==null){w=1
break}s=t.gz8(0)
r=B.a.i(t.y.c)
if(r.length===0)r="Family Book"
q=B.d.dL(D.A5,new C.dhK(t),new C.dhL())
p=A.a([],x.fD)
o=t.a.w
if(B.a.i(o).length!==0)p.push(new H.mW("Our Family",o,"",""))
for(o=J.aT(t.d);o.C();){n=o.gP(o)
p.push(new H.mW(n.b,n.c,"",""))}o=t.c
o.toString
w=6
return A.b(H.hky(o,new H.rU(s,r,"",p,new H.va(q.d,null,null,null,null,"","","")),null),$async$a1Q)
case 6:case 1:return A.h(u,v)}})
return A.i($async$a1Q,v)},
OA(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$OA=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.Bw(),$async$OA)
case 5:case 4:s=t.c
if(s==null){w=1
break}w=6
return A.b(A.bU(D.ahR,null,new C.dhp(t),s,!0,!0,!0,I.aaK,!1,!1,x.N),$async$OA)
case 6:r=e
if(r==null||t.c==null){w=1
break}q=t.y.cOP(r)
t.m(new C.dhq(t,q))
s=t.a
w=7
return A.b(C.SS(s.c,s.d,q),$async$OA)
case 7:case 1:return A.h(u,v)}})
return A.i($async$OA,v)},
Y8(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Y8=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return A.b(A.bU(D.ahR,null,new C.dhv(t),r,!0,!0,!0,I.aaK,!1,!1,x.e),$async$Y8)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.m(new C.dhw(t,s))
r=t.a
w=4
return A.b(C.SS(r.c,r.d,s),$async$Y8)
case 4:r=t.f
r===$&&A.c()
if(r.f.length!==0)r.BS(0,B.e6,B.n0)
case 1:return A.h(u,v)}})
return A.i($async$Y8,v)},
bV3(d){var w=d.bU(),v=B.a.b1(B.o.v(w.gci()),2,"0"),u=B.a.b1(B.o.v(w.gcz()),2,"0")
return""+w.gcl()+"-"+v+"-"+u},
gz8(d){var w=B.a.i(this.y.b)
if(!(w.length!==0)){w=B.a.i(this.a.r)
if(w.length===0)w="Our Family Book"}return w},
B(d){var w,v,u,t,s,r=this,q=null,p=r.c26()
if(r.e)w=D.agv
else if(J.ct(r.d)){w=r.y
v=r.gz8(0)
u=r.a.f
t=A.d(u?"Your book is waiting for its first page":"No pages yet",q,q,q,q,q,q,D.fzs,q,q,q)
u=u?"Add pages and turn them like a real book: stories, memories and notes about your family.":"The tree owner has not written any pages on this device."
s=x.p
u=A.a([new A.a5(q,330,new A.D(X.aoc,new C.a_6(w,v,0,q),q),q),B.bx,t,B.am,A.d(u,q,q,q,q,q,q,A.m(q,q,D.kQ.j(0.8),q,q,q,q,q,q,q,q,q,q,q,q,q,1.4,!0,q,q,q,q,q,q,q,q),B.K,q,q)],s)
if(r.a.f){w=A.a([B.bx],s)
if(B.a.i(r.a.x).length!==0)w.push(A.az(q,A.p(q,D.fiA,B.f,q,q,new A.o(q,q,q,A.l(18),A.a([new A.ab(0,B.G,B.dN.j(0.45),B.J,18)],x.V),E.xd,B.n),q,q,q,q,B.OO,q,q,q),B.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,r.gcLk(),q,q,q,q,q,q,!1,B.a4))
w.push(B.T)
w.push(A.hv(D.bX7,D.haP,r.gaPm(),q))
B.d.u(u,w)}w=A.as(A.ca(A.x(u,B.l,q,B.e,B.N,0,B.p),B.t,q,B.y,q,q,B.eA,q,q,B.ah),q,q,q)}else{w=r.r
w=w<0?"Tap the cover to open the book":"Page "+(w+1)+" of "+J.ad(r.d)
w=A.d(w,q,q,q,q,q,q,A.m(q,q,D.kQ.j(0.8),q,q,q,q,q,q,q,q,12,q,q,B.O,q,q,!0,q,0.4,q,q,q,q,q,q),q,q,q)
v=r.f
v===$&&A.c()
u=r.w?B.e0:B.BG
u=A.x(A.a([new A.D(D.bGq,w,q),A.E(A.JV(v,new C.dhW(r),J.ad(r.d)+1,q,r.gchn(),u,B.aM),1),r.bHl()],x.p),B.l,q,B.e,B.i,0,B.p)
w=u}v=x.p
return A.c6(q,D.a__,new A.an(B.a0,q,B.b1,B.t,A.a([D.aRI,A.bn(!0,A.x(A.a([p,A.E(w,1)],v),B.l,q,B.e,B.i,0,B.p),!0,!1,B.ag,!0,!0)],v),q),q,!1,!1,q,q)},
c26(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=h.a
if(f.f)w=B.a.i(f.x).length!==0||J.cJ(h.d)
else w=!1
f=A.a([],x.fp)
if(w)f.push(new C.KU(B.e9,"AI",h.gbFd(),!0))
if(h.a.f)f.push(new C.KU(B.lT,"Cover",h.gbPX(),!1))
if(h.a.f)f.push(new C.KU(B.x4,"Header",h.gbKU(),!1))
if(J.cJ(h.d)||B.a.i(h.a.w).length!==0)f.push(new C.KU(B.v9,"Print",h.gcqy(),!1))
if(h.a.f&&J.cJ(h.d)&&h.r>=0){v=h.w
u=v?B.hd:B.jb
t=v?"Save":"Edit"
f.push(new C.KU(u,t,v?h.gcwT():new C.dhG(h),!1))}if(h.a.f)f.push(new C.KU(B.i_,"Add page",h.gaPm(),!1))
v=C.hEt(h.y.Q)
u=h.gz8(0)
t=B.a.i(h.y.c)
if(t.length===0)t="Family Book"
s=J.ad(h.d)
r=J.ad(h.d)===1?"page":"pages"
q=x.p
p=A.a([],q)
for(o=f.length,n=x.O,m=0;m<f.length;f.length===o||(0,A.I)(f),++m){l=f[m]
if(l.d)k=D.dNp
else{k=new A.aP(10,10)
j=A.a([B.c.j(0.14),B.c.j(0.05)],n)
i=new A.ay(E.kx.j(0.5),1,B.r,-1)
j=A.p(g,A.X(l.a,D.kQ,g,g,g,17),B.f,g,g,new A.o(g,g,new A.bH(i,i,i,i),new A.bf(k,k,k,k),g,new A.a7(B.a5,B.a9,B.x,j,g,g),B.n),g,32,g,g,g,g,g,32)
k=j}j=D.kQ.j(0.85)
p.push(new A.bz(1,B.bd,A.az(B.bZ,A.x(A.a([k,B.bF,A.d(l.b,g,1,g,g,g,g,new A.H(!0,j,g,g,g,g,9.5,B.H,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g),g,g,g)],q),B.l,g,B.e,B.N,0,B.p),B.y,!1,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,l.c,g,g,g,g,g,g,!1,B.a4),g))}return new C.ams(v,u,t+" \xb7 "+s+" "+r,new C.dhH(h),A.A(p,B.l,g,B.e,B.i,0,g,g),g)},
At(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$At=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.Bw(),$async$At)
case 5:case 4:if(t.c==null){w=1
break}s=A.a([],x.s)
for(r=J.aT(t.d);r.C();){q=r.gP(r)
s.push(q.b+" "+q.c)}p=H.a3K(B.d.aN(s," "))
s=t.c
s.toString
w=6
return A.b(A.cg(null,null,!0,null,new C.dhm(t,p),s,null,!0,!0,x.N),$async$At)
case 6:o=e
if(o==null||t.c==null){w=1
break}w=o==="write"?7:9
break
case 7:w=10
return A.b(t.za(),$async$At)
case 10:w=8
break
case 9:w=o==="fix"?11:13
break
case 11:w=14
return A.b(t.El(),$async$At)
case 14:w=12
break
case 13:w=o==="polish"?15:17
break
case 15:w=18
return A.b(t.FX("Swahili (Kiswahili)",!0),$async$At)
case 18:w=16
break
case 17:w=19
return A.b(t.cHO(o==="sw"?"Swahili (Kiswahili)":"English"),$async$At)
case 19:case 16:case 12:case 8:case 1:return A.h(u,v)}})
return A.i($async$At,v)},
a_7(d,e,f,g,h){var w=null,v=A.l(16),u=B.c.j(0.07),t=A.l(16),s=A.K(E.kx.j(0.3),B.r,1),r=x.p
return new A.D(B.cw,A.aM(!1,v,!0,A.p(w,A.A(A.a([A.p(w,A.X(e,B.c,w,w,w,21),B.f,w,w,new A.o(w,w,w,w,w,E.xd,B.a6),w,42,w,w,w,w,w,42),B.bc,A.E(A.x(A.a([A.d(f,w,w,w,w,w,w,A2.L8,w,w,w),A.d(g,w,w,w,w,w,w,B.Fa,w,w,w)],r),B.E,w,B.e,B.i,0,B.p),1)],r),B.l,w,B.e,B.i,0,w,w),B.f,w,w,new A.o(u,w,s,t,w,w,B.n),w,w,w,w,B.bl,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.dhI(d,h),w,w,w,w,w,w,w),w)},
El(){return this.bUx()},
bUx(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8
var $async$El=A.e(function(a9,b0){if(a9===1){s.push(b0)
w=t}for(;;)switch(w){case 0:a6={}
a7=r.c
a7.toString
w=3
return A.b(A.cg(null,null,!0,null,new C.dhz(r),a7,null,!0,!0,x.ei),$async$El)
case 3:q=b0
if(q==null||r.c==null){w=1
break}g=A.C(r.d,x.B)
p=g
f=r.y
o=new A.eF("Working on it\u2026",$.ax())
a6.a=!0
a7=r.c
a7.toString
A.cg(null,null,!1,null,new C.dhA(o),a7,null,!0,!0,x.H).fv(new C.dhB(a6))
n=null
m=null
t=5
a7=q.b
e=q.a
l=A.a([],x.L)
for(d=p,a0=d.length,a1=0;a1<d.length;d.length===a0||(0,A.I)(d),++a1){k=d[a1]
J.c5(l,new A.y(k.b,k.c))}d=r.r
a0=r.y.aj()
j=A.a([],x.s)
for(a1=0;a1<8;++a1){i=D.A5[a1]
J.c5(j,i.a)}w=8
return A.b(C.aiv(a0,a7,new C.dhC(o),d,l,e,j),$async$El)
case 8:m=b0
t=2
w=7
break
case 5:t=4
a8=s.pop()
h=A.ac(a8)
n=A.w(h)
w=7
break
case 4:w=2
break
case 7:l=r.c
if(l!=null&&a6.a)A.a6(l,!0).ek()
l=o
l.sii($.ax())
J.aTN(l,0)
l=r.c
if(l==null){w=1
break}if(m==null){l=l.K(x.q).f
j=n
l.T(A.b2(null,null,null,null,null,B.t,null,A.d(j==null?y.A:j,null,null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))
w=1
break}l=m.b
a3=l.gcm(l)
w=a3?9:10
break
case 9:l=A.a([],x.I)
for(a4=0;a4<J.ad(p);++a4){if(m.b.am(0,a4)){j=J.u(p,a4)
a7=m.b.h(0,a4).a
a7=j.bg6(m.b.h(0,a4).b,a7,new A.V(Date.now(),0,!1))
j=a7}else j=J.u(p,a4)
l.push(j)}j=r.a
w=11
return A.b(C.Bx(j.c,j.d,l),$async$El)
case 11:w=12
return A.b(r.lj(),$async$El)
case 12:case 10:w=m.c!=null&&m.c.a!==0?13:14
break
case 13:l=r.y
j=m.c
j.toString
a7=A.a([],x.s)
for(a1=0;a1<8;++a1)a7.push(D.A5[a1].a)
a5=l.cMj(j,12,a7)
l=r.a
w=15
return A.b(C.SS(l.c,l.d,a5),$async$El)
case 15:if(r.c!=null)r.m(new C.dhD(r,a5))
l=r.f
l===$&&A.c()
if(l.f.length!==0&&q.a==="cover")l.BS(0,B.e6,B.n0)
a3=!0
case 14:l=r.c
if(l==null){w=1
break}l=l.K(x.q).f
j=A.d(m.a,null,null,null,null,null,null,null,null,null,null)
l.T(A.b2(a3?A.cBe("Undo",new C.dhE(r,p,f),null):null,null,null,null,null,B.t,null,j,null,B.ei,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$El,v)},
FX(d,e){return this.cHP(d,e)},
cHO(d){return this.FX(d,!1)},
cHP(a2,a3){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$FX=A.e(function(a4,a5){if(a4===1){s.push(a5)
w=t}for(;;)switch(w){case 0:f={}
e=A.C(r.d,x.B)
d=e
a0=new A.eF("Starting\u2026",$.ax())
f.a=!0
k=r.c
k.toString
A.cg(null,null,!1,null,new C.dhP(a0),k,null,!0,!0,x.H).fv(new C.dhQ(f))
q=null
p=null
t=4
o=A.a([],x.L)
for(k=d,j=k.length,i=0;i<k.length;k.length===j||(0,A.I)(k),++i){n=k[i]
J.c5(o,new A.y(n.b,n.c))}m=o
w=a3?7:9
break
case 7:w=10
return A.b(H.a3Y(m,new C.dhR(a0)),$async$FX)
case 10:w=8
break
case 9:w=11
return A.b(C.bGE(new C.dhS(a0),m,a2),$async$FX)
case 11:case 8:p=a5
t=2
w=6
break
case 4:t=3
a1=s.pop()
l=A.ac(a1)
q=A.w(l)
w=6
break
case 3:w=2
break
case 6:o=r.c
if(o!=null&&f.a)A.a6(o,!0).ek()
o=a0
o.sii($.ax())
J.aTN(o,0)
o=r.c
if(o==null){w=1
break}if(p==null){o=o.K(x.q).f
k=q
o.T(A.b2(null,null,null,null,null,B.t,null,A.d(k==null?y.y:k,null,null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))
w=1
break}o=A.a([],x.I)
for(g=0;g<J.ad(d);++g){k=J.u(d,g)
j=J.u(p,g)
o.push(k.bg6(J.u(p,g).b,j.a,new A.V(Date.now(),0,!1)))}k=r.a
w=12
return A.b(C.Bx(k.c,k.d,o),$async$FX)
case 12:w=13
return A.b(r.lj(),$async$FX)
case 13:o=r.c
if(o==null){w=1
break}o=o.K(x.q).f
if(a3)k="I rewrote your Swahili so it reads naturally."
else k="Your book is now in "+(B.a.Z(a2,"Swahili")?"Swahili":"English")+"."
k=A.d(k,null,null,null,null,null,null,null,null,null,null)
o.T(A.b2(A.cBe("Undo",new C.dhT(r,d),null),null,null,null,null,B.t,null,k,null,B.Y,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$FX,v)},
bHl(){var w,v=this,u=null,t=v.r+1,s=t>0,r=s?new C.dhn(v):u
r=A.aI(u,u,u,u,A.X(D.bSL,s?D.kQ:B.aT,u,u,u,30),u,u,u,r,u,u,u,u,"Previous page",u)
if(v.a.f&&J.cJ(v.d)&&!v.w&&v.r>=0)s=A.hv(A.X(B.wR,B.GP,u,u,u,16),A.d("Delete page",u,u,u,u,u,u,A.m(u,u,B.GP,u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),v.gbPx(),u)
else{s=v.w?"Writing\u2026 swiping is off while you edit":"Swipe to turn the page"
s=A.d(s,u,u,u,u,u,u,A.m(u,u,D.kQ.j(0.65),u,u,u,u,u,u,u,u,11.5,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)}s=A.E(A.as(s,u,u,u),1)
w=t<J.ad(v.d)?new C.dho(v):u
return A.bn(!0,new A.D(D.bGf,A.A(A.a([r,s,A.aI(u,u,u,u,A.X(B.eI,t<J.ad(v.d)?D.kQ:B.aT,u,u,u,30),u,u,u,w,u,u,u,u,"Next page",u)],x.p),B.l,u,B.e,B.i,0,u,u),u),!0,!1,B.ag,!0,!1)}}
C.a_U.prototype={
S(){return new C.bhH(new A.au(B.aw,$.ax()))}}
C.bhH.prototype={
ga2X(){var w,v=this.e
if(v===$){w=this.a
if(w.c)v="page"
else v=w.d?"book":"cover"
v=this.e=v}return v},
t(){var w=this.d
w.V$=$.ax()
w.R$=0
this.a2()},
gbT8(){switch(this.ga2X()){case"cover":var w=D.dbW
break
case"book":w=D.d76
break
default:w=D.dDX
break}return w},
B(d){var w,v,u,t,s,r,q=this,p=null,o=A.l(26),n=E.kx.j(0.5),m=x.p,l=A.A(A.a([D.dNq,B.as,D.bLZ,A.aI(p,p,p,p,B.lt,p,p,p,new C.djK(d),p,p,p,p,p,p)],m),B.l,p,B.e,B.i,0,p,p),k=A.a([],m),j=q.a
if(j.c)k.push(A.jD(p,p,p,A.d("This page ("+j.e+")",p,p,p,p,p,p,p,p,p,p),p,new C.djL(q),q.ga2X()==="page",p,p,p,p))
if(q.a.d)k.push(A.jD(p,p,p,D.h5m,p,new C.djM(q),q.ga2X()==="book",p,p,p,p))
k.push(A.jD(p,p,p,D.fT0,p,new C.djN(q),q.ga2X()==="cover",p,p,p,p))
k=A.c_(B.bI,k,B.br,p,6,8)
j=B.c.j(0.07)
j=A.aN(p,B.Z,!1,p,!0,B.t,p,A.aO(),q.d,p,p,p,p,p,2,A.bA(p,new A.b6(4,A.l(16),B.a1),p,p,p,p,p,p,!0,p,p,p,p,p,p,j,!0,p,p,p,p,p,p,p,p,p,p,p,p,p,B.kr,"Say it in your own words\u2026",p,p,p,p,p,p,p,p,p,!0,!0,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p),B.y,!0,p,!0,p,!1,p,B.ak,p,p,p,p,p,p,p,p,p,6,3,p,!1,"\u2022",p,p,p,p,p,!1,p,p,!1,p,!0,p,B.ac,p,p,p,p,p,p,p,p,p,p,p,B.dk,!0,B.a7,p,B.ao,p,p,p,p)
w=A.a([],m)
for(v=q.gbT8(),u=v.length,t=0;t<u;++t){s=v[t]
r=A.d(s,p,p,p,p,p,p,B.L5,p,p,p)
w.push(A.n8(p,B.c.j(0.08),r,B.hs,new C.djO(q,s),p,p,p,p))}return A.eI(p,E.Ce,A.ca(A.x(A.a([l,B.T,D.h8G,B.am,k,B.af,j,B.P,A.c_(B.bI,w,B.br,p,6,6),B.aB,A.df(D.bX4,p,D.h9s,new C.djP(q,d),A.bp(B.b8,p,p,p,p,B.p3,p,p,new A.ba(A.l(16),B.a1),p,p,p)),B.ax,D.h3y],m),B.E,p,B.e,B.N,0,B.p),B.t,p,B.y,p,p,B.fu,p,p,B.ah),p,p,p,B.OL,p,B.d7,p,new A.ba(o,new A.ay(n,1.4,B.r,-1)),p)}}
C.a_S.prototype={
S(){return new C.aCg(A.a([],x.gA))},
ge3(){return this.c}}
C.agf.prototype={}
C.aCg.prototype={
Y(){this.a3()
this.lj()},
lj(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i
var $async$lj=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.a
w=3
return A.b(C.Sk(p.c,p.d),$async$lj)
case 3:o=e
n=A.a([],x.gA)
p=J.aT(o)
case 4:if(!p.C()){w=5
break}s=p.gP(p)
r=t.a
q=r.d
q=s==="main"?q:q+"~"+s
m=n
l=C
k=s
w=6
return A.b(C.bF6(r.c,q),$async$lj)
case 6:j=e
i=J
w=7
return A.b(C.LR(t.a.c,q),$async$lj)
case 7:m.push(new l.agf(k,j,i.ad(e)))
w=4
break
case 5:if(t.c==null){w=1
break}t.m(new C.dic(t,n))
case 1:return A.h(u,v)}})
return A.i($async$lj,v)},
bbl(d){var w=B.a.i(d.b.b)
if(!(w.length!==0)){w=B.a.i(this.a.f)
if(w.length===0)w="Our Family Book"}return w},
R4(d,e){return this.ciX(0,e)},
ciX(d,e){var w=0,v=A.j(x.H),u=this,t,s
var $async$R4=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return A.b(A.a6(s,!1).ce(A.ef(new C.dib(u,e),!0,null,x.y)),$async$R4)
case 2:t=g
w=3
return A.b(u.lj(),$async$R4)
case 3:if(t===!0&&u.c!=null)u.c.K(x.q).f.T(D.aVE)
return A.h(null,v)}})
return A.i($async$R4,v)},
FZ(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$FZ=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(t.d.length>=6){t.c.K(x.q).f.T(D.aVz)
w=1
break}s=t.a
r=s.w
w=B.a.i(r).length===0?3:4
break
case 3:w=5
return A.b(C.ahP(s.c,s.d),$async$FZ)
case 5:q=e
w=6
return A.b(t.lj(),$async$FZ)
case 6:w=q!=null&&t.c!=null?7:8
break
case 7:w=9
return A.b(t.R4(0,B.d.fb(t.d,new C.dig(q))),$async$FZ)
case 9:case 8:w=1
break
case 4:p=t.c
p.toString
o=s.c
n=s.d
w=10
return A.b(C.Se(p,s.f,r,n,o),$async$FZ)
case 10:m=e
w=11
return A.b(t.lj(),$async$FZ)
case 11:if(m&&t.c!=null)t.c.K(x.q).f.T(D.aVE)
case 1:return A.h(u,v)}})
return A.i($async$FZ,v)},
Qw(d,e){return this.cuA(0,e)},
cuA(d,e){var w=0,v=A.j(x.H),u,t=this,s
var $async$Qw=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=3
return A.b(A.cg(null,null,!0,null,new C.dif(t,e),s,null,!0,!0,x.y),$async$Qw)
case 3:if(g!==!0){w=1
break}s=t.a
w=4
return A.b(C.a49(s.c,s.d,e.a),$async$Qw)
case 4:w=5
return A.b(t.lj(),$async$Qw)
case 5:case 1:return A.h(u,v)}})
return A.i($async$Qw,v)},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.a.e&&o.d.length<6,l=x.p,k=A.a([],l)
for(w=o.d,v=w.length,u=0;u<w.length;w.length===v||(0,A.I)(w),++u)k.push(o.bHo(w[u]))
if(m){t=6-o.d.length
w=A.l(18)
v=B.c.j(0.05)
s=A.K(E.kx.j(0.6),B.r,1.6)
r=t===1?"space":"spaces"
k.push(A.az(n,new A.fH(0.7142857142857143,A.p(n,A.x(A.a([D.dNr,B.af,D.ey8,B.ax,A.d(""+t+" "+r+" left",n,n,n,n,n,n,A.m(n,n,D.kQ.j(0.65),n,n,n,n,n,n,n,n,11.5,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],l),B.l,n,B.b9,B.i,0,B.p),B.f,n,n,new A.o(v,n,s,w,n,n,B.n),n,n,n,n,n,n,n,n),n),B.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,o.gcLg(),n,n,n,n,n,n,!1,B.a4))}w=A.l(22)
v=A.K(E.kx.j(0.85),B.r,1.6)
s=A.az(n,A.p(n,D.c4c,B.f,n,n,new A.o(B.w.j(0.3),n,A.K(E.kx.j(0.6),B.r,1),n,n,n,B.a6),n,32,n,n,n,n,n,32),B.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.dih(d),n,n,n,n,n,n,!1,B.a4)
r=A.l(14)
q=B.w.j(0.3)
p=A.K(E.kx.j(0.5),B.r,1)
w=A.p(n,A.A(A.a([s,B.bc,D.bMn,A.p(n,A.d(""+o.d.length+" of 6",n,n,n,n,n,n,D.fys,n,n,n),B.f,n,n,new A.o(q,n,p,r,n,n,B.n),n,n,n,n,B.hl,n,n,n)],l),B.l,n,B.e,B.i,0,n,n),B.f,n,n,new A.o(n,n,v,w,n,D.cae,B.n),n,n,n,Aw.Ox,D.bE9,n,n,n)
if(o.e)k=D.agv
else k=k.length===0?D.bej:A.ck(new C.dii(k))
return A.c6(n,D.a__,new A.an(B.a0,n,B.b1,B.t,A.a([D.aRI,A.bn(!0,A.x(A.a([w,A.E(k,1)],l),B.l,n,B.e,B.i,0,B.p),!0,!1,B.ag,!0,!0)],l),n),n,!1,!1,n,n)},
bHo(d){var w,v,u=this,t=null,s=u.bbl(d),r=d.c,q=x.p,p=A.a([A.bS(0,new A.dv(B.dC,B.z,B.f,new A.a5(300,420,new C.a_6(d.b,s,r,t),t),t),0,0,0)],q)
if(u.a.e)p.push(A.ao(t,A.az(t,A.p(t,D.c3u,B.f,t,t,new A.o(B.w.j(0.55),t,A.K(B.aT,B.r,1),t,t,t,B.a6),t,28,t,t,t,t,t,28),B.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new C.di9(u,d),t,t,t,t,t,t,!1,B.a4),t,t,t,6,6,t))
w=A.d(s,t,1,B.a2,t,t,t,D.fy5,t,t,t)
v=r===1?"page":"pages"
return A.az(t,A.x(A.a([new A.fH(0.7142857142857143,new A.an(B.a0,t,B.ad,B.t,p,t),t),B.P,w,A.d(""+r+" "+v,t,t,t,t,t,t,A.m(t,t,D.kQ.j(0.6),t,t,t,t,t,t,t,t,11,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],q),B.l,t,B.e,B.i,0,B.p),B.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new C.dia(u,d),t,t,t,t,t,t,!1,B.a4)}}
C.KU.prototype={}
C.a_6.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=B.d.dL(D.A5,new C.cQt(m),new C.cQu()),j=m.c,i=D.Ef.h(0,j.e),h=A.b1(i==null?4293444714:i)
i=j.r
if(i==="top")w=B.e
else w=i==="bottom"?B.mu:B.b9
v=new C.cQv(h)
i=A.a([new A.ab(0,B.G,B.w.j(0.6),D.euQ,28)],x.V)
u=x.p
t=A.a([A.bS(0,A.b5(l,l,l,new C.beU(j.x,h,l),B.az),0,0,0),A.ao(0,A.p(l,l,B.f,l,l,new A.o(l,l,l,l,l,new A.a7(B.a5,B.a9,B.x,A.a([B.w.j(0.45),B.L],x.O),l,l),B.n),l,l,l,l,l,l,l,l),l,l,0,l,0,26)],u)
for(s=0;s<6;++s){r=new A.aP(3,3)
t.push(new A.cK(8,40+s*46,l,l,l,l,A.p(l,l,B.f,l,l,new A.o(h.j(0.7),l,l,new A.bf(r,r,r,r),l,l,B.n),l,22,l,l,l,l,l,6),l))}r=j.w
if(r==="double")B.d.u(t,A.a([v.$4(D.aod,8,0.85,2.2),v.$4(D.bJ9,5,0.45,1)],u))
else if(r==="single")t.push(v.$4(D.aod,8,0.85,2.4))
else if(r==="corners")t.push(A.bS(0,new A.D(D.bJ5,A.b5(l,l,l,new C.beL(h,l),B.az),l),0,0,0))
r=A.X(D.aD5[B.o.D(j.d,0,11)],h.j(0.95),l,l,l,44)
q=A.d(m.d,l,4,B.a2,l,l,l,A.m(l,l,h,l,l,l,l,l,l,l,l,j.f,l,l,B.u,l,1.2,!0,l,0.5,l,l,l,D.aAh,l,l),B.K,l,l)
p=A.p(l,l,B.f,h.j(0.7),l,l,l,2,l,l,l,l,l,90)
o=B.a.i(j.c)
if(!(o.length!==0)){o=m.e
if(o===0)o="A family story"
else{n=o===1?"page":"pages"
n=""+o+" "+n+" of our story"
o=n}}o=A.a([r,B.aB,q,B.af,p,B.af,A.d(o,l,l,l,l,l,l,A.m(l,l,h.j(0.85),l,l,l,l,l,l,l,l,14,B.cL,l,l,l,l,!0,l,l,l,l,l,l,l,l),B.K,l,l)],u)
r=B.a.i(j.y)
if(r.length!==0)B.d.u(o,A.a([B.aO,A.d(r,l,2,B.a2,l,l,l,A.m(l,l,h.j(0.9),l,l,l,l,l,l,l,l,13,l,l,B.H,l,l,!0,l,1.2,l,l,l,l,l,l),B.K,l,l)],u))
t.push(A.bS(0,new A.D(D.bJB,A.x(o,B.l,l,w,B.i,0,B.p),l),0,0,0))
if(j.z)t.push(A.ao(l,A.b5(l,l,l,new C.aJj(l),D.fnt),l,l,l,46,0,l))
return A.p(l,A.bv(D.af6,new A.an(B.a0,l,B.ad,B.t,t,l),B.aq),B.f,l,l,new A.o(l,l,l,D.af6,i,new A.a7(B.ay,B.aC,B.x,k.c,l,l),B.n),l,l,l,l,l,l,l,l)}}
C.beU.prototype={
a4(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=new A.e0()
g.cU(11)
switch(this.b){case"plain":return
case"linen":$.S()
w=A.L()
w.r=B.w.j(0.07).gp(0)
w.c=1
for(v=e.b,u=e.a,t=0;t<v;t+=4)d.ah(new A.r(0,t),new A.r(u,t),w)
$.S()
s=A.L()
s.r=B.c.j(0.05).gp(0)
s.c=1
for(r=0;r<u;r+=4)d.ah(new A.r(r,0),new A.r(r,v),s)
break
case"stars":for(v=e.a,u=e.b,q=this.c,p=0;p<70;++p){o=g.ai()
n=g.ai()
m=g.ai()
$.S()
l=new A.ar(B.S,B.Q,B.V,B.X,B.U)
l.r=q.j(0.25+g.ai()*0.5).gp(0)
d.O(new A.r(o*v,n*u),0.6+m*1.6,l)}break
case"rays":v=e.a*0.55
u=e.b
q=u*0.1
for(o=this.c,n=x.v,p=0;p<14;++p){k=0.47123889803846897+p*0.1691626813471427
m=$.S()
l=A.a([],n)
j=new A.aH(m.r,B.aj,null,null,l)
l.push(new A.aZ(v,q))
j.ab()
m=k-0.04
m=new A.aq(v+Math.cos(m)*u*1.4,q+Math.sin(m)*u*1.4)
l.push(m)
i=j.f
if(i!=null)m.ak(i)
j.ab()
m=k+0.04
m=new A.aq(v+Math.cos(m)*u*1.4,q+Math.sin(m)*u*1.4)
l.push(m)
i=j.f
if(i!=null)m.ak(i)
j.ab()
m=new A.bx()
l.push(m)
l=j.f
if(l!=null)m.ak(l)
j.ab()
m=new A.ar(B.S,B.Q,B.V,B.X,B.U)
m.r=o.j((p&1)===0?0.09:0.03).gp(0)
d.af(j,m)}break
default:$.S()
w=A.L()
w.r=B.w.j(0.07).gp(0)
for(v=e.a,u=e.b,p=0;p<260;++p)d.O(new A.r(g.ai()*v,g.ai()*u),0.8+g.ai()*1.8,w)
$.S()
h=A.L()
h.r=B.c.j(0.035).gp(0)
for(p=0;p<120;++p)d.O(new A.r(g.ai()*v,g.ai()*u),0.6+g.ai()*1.2,h)}},
aE(d){return d.b!==this.b||!d.c.A(0,this.c)}}
C.beL.prototype={
a4(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k=$.S(),j=A.L(),i=this.b
j.r=i.j(0.9).gp(0)
j.b=B.aa
j.c=2.4
j.d=B.bG
for(w=e.a,v=e.b,v=[D.faD,new A.b7([w,0,-1,1]),new A.b7([0,v,1,-1]),new A.b7([w,v,-1,-1])],w=v.length,u=x.v,k=k.r,t=0;t<w;++t){s=v[t].a
r=s[0]
q=s[1]
p=s[2]
o=s[3]
s=A.a([],u)
n=new A.aH(k,B.aj,null,null,s)
s.push(new A.aZ(r+p*34,q))
n.ab()
m=new A.aq(r,q)
s.push(m)
l=n.f
if(l!=null)m.ak(l)
n.ab()
m=new A.aq(r,q+o*34)
s.push(m)
s=n.f
if(s!=null)m.ak(s)
n.ab()
d.af(n,j)
s=new A.ar(B.S,B.Q,B.V,B.X,B.U)
s.r=i.j(0.9).gp(0)
d.O(new A.r(r+p*9,q+o*9),3,s)}},
aE(d){return!d.b.A(0,this.b)}}
C.uW.prototype={}
C.a_q.prototype={
S(){return new C.beS()}}
C.beS.prototype={
gox(){var w=this.d
return w===$?this.d=this.a.c:w},
gz8(d){var w,v=this.e
if(v===$){w=this.a.c
v=this.e=new A.au(new A.bb(w.b,B.b7,B.aP),$.ax())}return v},
gaDy(){var w,v=this.f
if(v===$){w=this.a.c
v=this.f=new A.au(new A.bb(w.c,B.b7,B.aP),$.ax())}return v},
gat9(){var w,v=this.r
if(v===$){w=this.a.c
v=this.r=new A.au(new A.bb(w.y,B.b7,B.aP),$.ax())}return v},
t(){var w=this,v=w.gz8(0),u=v.V$=$.ax()
v.R$=0
v=w.gaDy()
v.V$=u
v.R$=0
v=w.gat9()
v.V$=u
v.R$=0
w.a2()},
atN(d,e,f,g){var w,v,u,t,s=null,r=A.a([],x.p)
for(w=d.length,v=0;v<w;++v){u=d[v]
t=g.h(0,u)
r.push(A.jD(s,s,s,A.d(t==null?u:t,s,s,s,s,s,s,s,s,s,s),s,new C.d99(this,f,u),e===u,s,s,s,s))}return A.c_(B.bI,r,B.br,s,6,8)},
azy(d){var w=null,v=B.c.j(0.07)
return A.bA(w,new A.b6(4,A.l(14),B.a1),w,w,w,w,w,w,!0,w,w,w,w,w,w,v,!0,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,!0,w,B.lY,d,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w)},
B(a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null,d=f.gox(),a0=f.gz8(0),a1=a0.a.a,a2=f.gaDy(),a3=a2.a.a,a4=f.gat9(),a5=d.bg4(a4.a.a,a3,a1)
a1=x.w
a3=A.aE(a6,e,a1).w
a1=A.aE(a6,e,a1).w
d=B.a.i(a5.b)
if(d.length===0)d=f.a.d
d=A.as(new A.a5(190,260,new A.dv(B.dC,B.z,B.f,new A.a5(270,370,new C.a_6(a5,d,f.a.e,e),e),e),e),e,e,e)
a0=A.aN(e,B.Z,!1,e,!0,B.t,e,A.aO(),a0,e,e,e,e,e,2,f.azy("Title on the cover"),B.y,!0,e,!0,e,!1,e,B.ak,e,e,e,e,e,e,e,e,e,1,e,e,!1,"\u2022",e,new C.d9y(f),e,e,e,!1,e,e,!1,e,!0,e,B.ac,e,e,e,e,e,e,e,e,e,e,e,B.dk,!0,B.a7,e,B.ao,e,e,e,e)
a2=A.aN(e,B.Z,!1,e,!0,B.t,e,A.aO(),a2,e,e,e,e,e,2,f.azy("Small line under it (optional)"),B.y,!0,e,!0,e,!1,e,B.ak,e,e,e,e,e,e,e,e,e,1,e,e,!1,"\u2022",e,new C.d9z(f),e,e,e,!1,e,e,!1,e,!0,e,B.ac,e,e,e,e,e,e,e,e,e,e,e,B.dk,!0,B.a7,e,B.ao,e,e,e,e)
w=x.p
v=A.a([],w)
for(u=0;u<8;++u){t=D.A5[u]
s=f.d
if(s===$){s=f.d=f.a.c
r=s}else r=s
q=t.a
p=s.a===q?B.c:B.aT
q=r.a===q
o=new A.ay(p,q?3:1,B.r,-1)
p=A.p(e,e,B.f,e,e,new A.o(e,e,new A.bH(o,o,o,o),e,e,new A.a7(B.ay,B.aC,B.x,t.c,e,e),B.a6),e,46,e,e,e,e,e,46)
q=q?B.c:B.aE
v.push(A.az(e,A.x(A.a([p,B.cS,A.d(t.b,e,e,e,e,e,e,new A.H(!0,q,e,e,e,e,10.5,B.O,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e),e,e,e)],w),B.l,e,B.e,B.N,0,B.p),B.y,!1,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,new C.d9A(f,t),e,e,e,e,e,e,!1,B.a4))}v=A.c_(B.bI,v,B.br,e,10,10)
q=A.a([],w)
for(n=0;n<12;++n){s=f.d
p=(s===$?f.d=f.a.c:s).d===n?B.b8.j(0.35):B.c.j(0.07)
m=new A.aP(14,14)
s=f.d
o=new A.ay((s===$?f.d=f.a.c:s).d===n?B.ey:B.L,2,B.r,-1)
q.push(A.az(e,A.p(e,A.X(D.aD5[n],B.c,e,e,e,24),B.f,e,e,new A.o(p,e,new A.bH(o,o,o,o),new A.bf(m,m,m,m),e,e,B.n),e,46,e,e,e,e,e,46),B.y,!1,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,new C.d9B(f,n),e,e,e,e,e,e,!1,B.a4))}q=A.c_(B.bI,q,B.br,e,8,8)
a4=A.aN(e,B.Z,!1,e,!0,B.t,e,A.aO(),a4,e,e,e,e,e,2,f.azy("Author or family name line (optional)"),B.y,!0,e,!0,e,!1,e,B.ak,e,e,e,e,e,e,e,e,e,1,e,e,!1,"\u2022",e,new C.d9C(f),e,e,e,!1,e,e,!1,e,!0,e,B.ac,e,e,e,e,e,e,e,e,e,e,e,B.dk,!0,B.a7,e,B.ao,e,e,e,e)
p=A.d("LETTERING COLOUR",e,e,e,e,e,e,M.vS,e,e,e)
m=A.a([],w)
for(l=D.Ef.gdP(D.Ef),l=l.gae(l);l.C();){k=l.gP(l)
j=A.b1(k.b)
s=f.d
if(s===$){s=f.d=f.a.c
r=s}else r=s
i=k.a
h=s.e===i?B.ey:B.aT
g=r.e===i
o=new A.ay(h,g?3:1,B.r,-1)
j=A.p(e,e,B.f,e,e,new A.o(j,e,new A.bH(o,o,o,o),e,e,e,B.a6),e,34,e,e,e,e,e,34)
h=g?B.c:B.aE
m.push(A.az(e,A.x(A.a([j,B.bF,A.d(i,e,e,e,e,e,e,new A.H(!0,h,e,e,e,e,10,B.O,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e),e,e,e)],w),B.l,e,B.e,B.N,0,B.p),B.y,!1,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,new C.d9D(f,k),e,e,e,e,e,e,!1,B.a4))}m=A.c_(B.bI,m,B.br,e,8,10)
l=A.d("TITLE SIZE",e,e,e,e,e,e,M.vS,e,e,e)
k=f.gox()
return new A.D(new A.Q(0,0,0,a3.f.d),A.bn(!0,new A.cN(new A.aY(0,1/0,0,a1.a.b*0.92),A.cw(A.a([D.h2Z,B.af,d,B.aO,a0,B.T,a2,B.aB,D.h9d,B.P,v,B.aB,D.h37,B.P,q,B.aB,a4,B.aB,p,B.P,m,B.aB,l,A.l5(e,9,""+B.h.U(f.gox().f),36,18,new C.d9E(f),k.f),A.d("WHERE THE WORDS SIT",e,e,e,e,e,e,M.vS,e,e,e),B.am,f.atN(D.a7p,f.gox().r,new C.d9F(f),D.dHc),B.af,A.d("BORDER",e,e,e,e,e,e,M.vS,e,e,e),B.am,f.atN(D.a6J,f.gox().w,new C.d9G(f),D.dHi),B.af,A.d("COVER MATERIAL",e,e,e,e,e,e,M.vS,e,e,e),B.am,f.atN(D.a6F,f.gox().x,new C.d9I(f),D.dIX),B.am,A.j_(e,B.b8,e,B.ag,e,new C.d9J(f),e,e,e,D.fY9,f.gox().z),B.bx,A.bJ(D.h1G,e,new C.d9K(f,a6),A.bp(B.b8,e,e,e,e,B.p3,e,e,new A.ba(A.l(16),B.a1),e,e,e))],w),e,e,Z.anI,e,e,B.ah,!0),e),!0,!1,B.ag,!0,!0),e)}}
C.aJj.prototype={
a4(d,e){var w,v,u,t=new A.aH($.S().r,B.aj,null,null,A.a([],x.v))
t.E(new A.aZ(0,0))
w=e.a
t.E(new A.aq(w,0))
v=e.b
t.E(new A.aq(w,v))
t.E(new A.aq(w/2,v-12))
t.E(new A.aq(0,v))
t.E(new A.bx())
u=A.L()
u.san(D.caW.aD(0,new A.a4(0,0,0+w,0+v)))
d.af(t,u)},
aE(d){return!1}}
C.bke.prototype={
a4(a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=null,a0=a5.a,a1=a5.b,a2=0+a0,a3=0+a1
$.S()
w=A.L()
w.san(D.c9W.aD(0,new A.a4(0,0,a2,a3)))
a4.aF(new A.a4(0,0,a2,a3),w)
v=B.h.cC(a1/112)
u=new A.e0()
u.cU(4)
for(w=x.O,t=a4.c,s=0;s<v;){++s
r=s*112
for(q=r-14,p=q+2,o=-r,n=6;n<a0;){m=14+u.ai()*20
l=56+u.ai()*40
k=D.dbV[u.aw(9)]
j=u.aw(14)
J.bt(t.save())
if(j===0){j=n+m
t.translate(j,r)
t.rotate(-10.313240312354818,0,0)
t.translate(-j,o)}j=r-l
i=new A.a4(n,j,n+m,j+l)
h=A.by(i,B.hF)
g=new A.ar(B.S,B.Q,B.V,B.X,B.U)
f=A.ap(k,B.c,0.12)
f.toString
e=A.ap(k,B.w,0.45)
e.toString
g.san(new A.a7(B.a5,B.a9,B.x,A.a([f,k,e],w),d,d).aD(0,i))
a4.aq(h,g)
g=n+2
j+=10
h=g+(m-4)
e=new A.ar(B.S,B.Q,B.V,B.X,B.U)
e.r=E.kx.j(0.55).gp(0)
a4.aF(new A.a4(g,j,h,j+2),e)
e=new A.ar(B.S,B.Q,B.V,B.X,B.U)
e.r=E.kx.j(0.4).gp(0)
a4.aF(new A.a4(g,q,h,p),e)
t.restore()
j=u.aw(9)===0?18:0
n+=m+1+j}q=r+10
p=new A.ar(B.S,B.Q,B.V,B.X,B.U)
p.san(D.c9e.aD(0,new A.a4(0,r,a2,q)))
a4.aF(new A.a4(0,r,a2,q),p)
p=new A.ar(B.S,B.Q,B.V,B.X,B.U)
p.r=B.w.j(0.5).gp(0)
p.y=B.kY
a4.aF(new A.a4(0,q,a2,q+14),p)}t=A.L()
t.r=D.bi9.j(0.72).gp(0)
a4.aF(new A.a4(0,0,a2,a3),t)
t=a0*0.5
a1*=0.36
a0*=0.95
a3=A.L()
a3.san(new A.bT(B.z,0.5,B.x,d,0,A.a([D.bqI.j(0.22),B.L],w),d,d).aD(0,A.bW(new A.r(t,a1),a0)))
a4.O(new A.r(t,a1),a0,a3)},
aE(d){return!1}}
C.bd3.prototype={
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=p.c,m=B.a.i(n.c),l=A.ag("[ \t]{2,}",!0,!1,!1,!1),k=A.aL(m,l," ")
m=x.p
l=A.a([],m)
for(w=3;w>=1;--w){v=-w
l.push(new A.cK(14,w*2,v*2.2,v*2,o,o,new A.bN(new A.o(A.ap(D.kQ,D.bw3,w/4),o,new A.bH(B.a1,new A.ay(B.w.j(0.12),1,B.r,-1),B.a1,B.a1),B.Mm,o,o,B.n),B.bk,o,o),o))}v=x.V
u=A.a([new A.ab(0,B.G,B.w.j(0.35),B.aNj,8)],v)
t=A.a([],m)
for(w=0;w<5;++w){s=new A.aP(2,2)
t.push(A.p(o,o,B.f,o,o,new A.o(E.kx.j(0.6),o,o,new A.bf(s,s,s,s),o,o,B.n),o,14,o,o,o,o,o,3))}u=A.p(o,A.x(t,B.l,o,B.r0,B.i,0,B.p),B.f,o,o,new A.o(o,o,o,D.b6h,u,D.caU,B.n),o,o,o,o,o,o,o,14)
v=A.a([new A.ab(0,B.G,B.w.j(0.4),B.dp,18)],v)
t=A.ao(o,A.b5(o,o,o,new C.aJj(o),D.fno),o,o,o,26,-2,o)
s=A.a([],m)
r=p.z
q=B.a.i(r)
if(q.length!==0)s.push(new C.aXd(p.y,r,L.j6,o))
r=n.d
q=p.x
if(p.f)n=A.x(A.a([A.aN(o,B.Z,!1,o,!0,B.t,o,A.aO(),p.r,o,o,o,o,o,2,A.bA(o,B.eN,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,A.m(o,o,L.j6.j(0.35),o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),"Page title",o,o,o,o,o,o,o,o,o,!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),B.y,!0,o,!0,o,!1,o,B.ak,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.ac,o,o,o,o,o,o,o,o,o,o,o,D.fN0,!0,B.a7,o,B.ao,o,o,o,o),A.d(q.$1(r),o,o,o,o,o,o,A.m(o,o,L.j6.j(0.45),o,o,o,o,o,o,o,o,11,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),B.T,A.E(A.aN(o,B.Z,!1,o,!0,B.t,o,A.aO(),p.w,o,o,o,o,o,2,A.bA(o,B.eN,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,A.m(o,o,L.j6.j(0.35),o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),"Write your family story here\u2026",o,o,o,o,o,o,o,o,o,!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),B.y,!0,o,!0,o,!0,o,B.ak,o,o,o,o,o,o,o,o,o,o,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.ac,o,o,o,o,o,o,o,o,o,o,o,D.fDr,!0,B.a7,B.B_,B.ao,o,o,o,o),1)],m),B.al,o,B.e,B.i,0,B.p)
else{n=A.a([A.d(n.b,o,o,o,o,o,o,D.fMT,o,o,o),B.ax,A.d(q.$1(r),o,o,o,o,o,o,A.m(o,o,L.j6.j(0.5),o,o,o,o,o,o,o,o,11,B.cL,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),B.P,A.A(A.a([A.E(A.p(o,o,B.f,D.Gy.j(0.35),o,o,o,1,o,o,o,o,o,o),1),new A.D(B.fv,A.d("\u2766",o,o,o,o,o,o,A.m(o,o,D.Gy.j(0.7),o,o,o,o,o,o,o,o,16,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),o),A.E(A.p(o,o,B.f,D.Gy.j(0.35),o,o,o,1,o,o,o,o,o,o),1)],m),B.l,o,B.e,B.i,0,o,o),B.aB],m)
if(k.length===0)n.push(A.d("This page is blank. Tap the pencil to write.",o,o,o,o,o,o,A.m(o,o,L.j6.j(0.4),o,o,o,o,o,o,o,o,16,o,o,o,o,1.7,!0,o,o,o,o,o,o,o,o),o,o,o))
else n.push(A.Zl(A.cS(A.a([A.cS(o,o,o,o,o,o,o,o,o,D.fGG,B.a.aA(k,0,1)),A.cS(o,o,o,o,o,o,o,o,o,o,B.a.b0(k,1))],x.R),o,o,o,o,o,o,o,o,o,o),o,o,A.m(o,o,L.j6.j(0.93),o,o,o,o,o,o,o,o,16.5,o,o,o,o,1.72,!0,o,o,o,o,o,o,o,o),o))
n=A.ca(A.x(n,B.E,o,B.e,B.i,0,B.p),B.t,o,B.y,o,o,o,o,o,B.ah)}s.push(A.E(n,1))
s.push(new A.D(B.ig,A.d("\u2014 "+p.d+" \u2014",o,o,o,o,o,o,A.m(o,o,L.j6.j(0.5),o,o,o,o,o,o,o,o,12,o,o,o,o,o,!0,o,1,o,o,o,o,o,o),B.K,o,o),o))
l.push(A.A(A.a([u,A.E(A.p(o,A.bv(B.Mm,new A.an(B.a0,o,B.ad,B.t,A.a([t,new A.D(D.bIC,A.x(s,B.al,o,B.e,B.i,0,B.p),o),A.ao(0,new A.bN(new A.o(o,o,o,o,o,new A.a7(B.a5,B.a9,B.x,A.a([B.w.j(0.16),B.L],x.O),o,o),B.n),B.bk,o,o),o,o,0,o,0,22)],m),o),B.aq),B.f,o,o,new A.o(o,o,o,B.Mm,v,D.cbr,B.n),o,o,o,o,o,o,o,o),1)],m),B.al,o,B.e,B.i,0,o,o))
return new A.an(B.a0,o,B.ad,B.t,l,o)}}
C.amt.prototype={
S(){return new C.amu(new A.eF(0,$.ax()),new C.bUc(),new C.amM(),D.hM6,null,null)},
gd1(){return this.d}}
C.a25.prototype={
a7(){return"_Step."+this.b}}
C.amu.prototype={
gCF(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.bF2(w.c,6,w.e,!1)
u.d!==$&&A.bE()
u.d=v
t=v}return t},
ghd(d){var w,v=this,u=v.e
if(u===$){w=C.Nc(v.a.c)
v.e!==$&&A.bE()
v.e=w
u=w}return u},
gU8(){var w=this.ghd(0)
return w.gzs()==null?"Babu":B.a.i(w.gzs().b)},
Y(){var w,v=this
v.a3()
w=v.ghd(0).gzs()
w=w==null?null:w.c
v.r.b=w===D.oB
w=v.q6(new C.bSy(v))
w.fX(0)
v.x!==$&&A.aQ()
v.x=w
v.a2U("Come closer, my children. I am "+v.gU8()+", elder of the "+v.a.c.b+" family. Tonight, by this fire, we remember who we are.")},
t(){var w=this,v=w.x
v===$&&A.c()
v.t()
v=w.y
if(v!=null)v.a1(0)
v=w.z
if(v!=null)v.a1(0)
w.w.t()
v=w.f
v.V$=$.ax()
v.R$=0
w.bwL()},
a2U(d){var w=this,v=w.y
if(v!=null)v.a1(0)
w.db=d
w.dx=0
w.r.c=!0
w.y=A.dh(E.a0J,new C.bSs(w))},
bt7(){var w,v=this
if(v.dx>=v.db.length)return
w=v.y
if(w!=null)w.a1(0)
v.m(new C.bSB(v))},
aee(d){var w=this.r
w.a=d
w.e=this.f.a
w.w=this.cy},
bt_(){return this.baT()},
baT(){var w=this,v=w.gCF()[w.as],u=v.e
u=u.length!==0?u:v.d
w.m(new C.bSt(w))
w.a2U(u)
v=w.z
if(v!=null)v.a1(0)
w.z=A.cz(B.mf,new C.bSu(w))},
cMq(){var w=this
w.m(new C.bSx(w))
w.a2U(w.gCF()[w.as].a)},
Le(d){var w,v,u,t,s,r,q,p=this
if(p.Q!==D.aec)return
w=p.gCF()
v=p.as
u=d===w[v].c
t=p.r
s=p.f
if(u){++p.at
r=++p.ax
p.ay=Math.max(p.ay,r)
p.cy=Math.min(1,p.cy+0.13)
t.f=s.a+2.6}else{p.ax=0
p.cy=Math.max(0.18,p.cy-0.08)
t.r=s.a+1.5}q=new A.e0()
q.cU(v*7+d)
p.m(new C.bSw(p,d,u,q))
p.a2U(u?D.drZ[q.aw(4)]+" "+w[p.as].d:D.dow[q.aw(3)]+" "+w[p.as].d)},
kO(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$kO=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.as
q=t.gCF()
p=q.length
w=r+1>=p?3:4
break
case 3:s=C.bHk(t.at,t.ay,p)
t.m(new C.bSz(t,s))
t.a2U(t.at>=q.length-1?"You carry the family now. Never let the fire go out.":"You listened well tonight. Come again, and the fire will burn higher.")
w=5
return A.b(C.BT(t.a.d,s),$async$kO)
case 5:t.cx=f
r=t.a
w=6
return A.b(C.BU(r.d,r.c.a,"fire",t.at*10),$async$kO)
case 6:t.dy=f
if(t.c!=null)t.m(new C.bSA())
w=1
break
case 4:++t.as
t.baT()
case 1:return A.h(u,v)}})
return A.i($async$kO,v)},
B(d){var w=this,v=null,u=w.f,t=x.p
return A.c6(v,D.YY,new A.an(B.a0,v,B.ad,B.t,A.a([A.bS(0,new A.e8(A.b5(v,v,v,new C.aXi(u,w.r,w.w,u),B.az),v),0,0,0),A.bn(!0,A.x(A.a([w.ccY(0),B.b4,w.bSi()],t),B.l,v,B.e,B.i,0,B.p),!0,!1,B.ag,!0,!0)],t),v),v,!1,!1,v,v)},
ccY(d){var w,v,u,t=this,s=null,r=A.aI(s,s,s,s,B.Qx,s,s,s,new C.bSv(t),s,s,s,s,s,s),q=x.p,p=A.a([],q)
for(w=0;w<t.gCF().length;++w){v=t.as
if(w<v||t.Q===D.b2A)v=B.cV
else v=w===v?B.c:B.aT
u=new A.aP(4,4)
p.push(A.p(s,s,B.f,s,s,new A.o(v,s,s,new A.bf(u,u,u,u),s,s,B.n),s,7,s,D.bDU,s,s,s,22))}p=A.E(A.x(A.a([D.fUT,A.A(p,B.l,s,B.e,B.i,0,s,s)],q),B.E,s,B.e,B.i,0,B.p),1)
v=A.l(14)
u=A.K(B.fL,B.r,1)
return new A.D(D.bJO,A.A(A.a([r,p,A.p(s,A.d("\ud83d\udd25 "+B.h.U(t.cy*100)+"%",s,s,s,s,s,s,B.iH,s,s,s),B.f,s,s,new A.o(B.b5,s,u,v,s,s,B.n),s,s,s,s,B.hl,s,s,s)],q),B.l,s,B.e,B.i,0,s,s),s)},
bSi(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.ghd(0).gzs()
if(h==null)w=1
else w=h.c===D.oB?0:1
v=j.dx
u=j.db
t=D.qq.j(0.96)
s=A.l(22)
r=A.K(B.cV,B.r,3)
q=A.b5(i,i,i,new C.bpQ(w,i),B.az)
p=A.d(j.Q===D.aec?j.gU8()+" asks":"Elder "+j.gU8(),i,i,i,i,i,i,D.aWT,i,i,i)
o=j.db
o=B.a.aA(o,0,Math.min(j.dx,o.length))
n=x.p
o=A.az(B.bZ,A.A(A.a([new A.a5(62,62,q,i),B.as,A.E(A.x(A.a([p,B.bF,A.d(o+(v<u.length?"\u258d":""),i,i,i,i,i,i,D.aX6,i,i,i)],n),B.E,i,B.e,B.i,0,B.p),1)],n),B.E,i,B.e,B.i,0,i,i),B.y,!1,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,j.gbt6(),i,i,i,i,i,i,!1,B.a4)
switch(j.Q.a){case 0:v=A.as(j.aak("Sit down by the fire",j.gbsZ()),i,i,i)
break
case 1:v=A.as(j.aak("Ask me, Elder",j.gcMp()),i,i,i)
break
case 2:v=A.a([],n)
for(m=0;u=j.gCF()[j.as].b,m<u.length;++m){q=new A.aP(14,14)
l=new A.ay(D.lG,2.5,B.r,-1)
v.push(A.az(i,A.p(i,A.d(u[m],i,i,i,i,i,i,D.aX2,B.K,i,i),B.f,i,D.afJ,new A.o(D.alg,i,new A.bH(l,l,l,l),new A.bf(q,q,q,q),i,i,B.n),i,i,i,i,V.wE,i,i,i),B.y,!1,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,new C.bSp(j,m),i,i,i,i,i,i,!1,B.a4))}v=A.c_(B.bI,v,B.br,i,8,8)
break
case 3:v=j.fr
u=v?B.kc:Ak.arc
u=A.X(u,v?B.ep:D.lG,i,i,i,i)
q=v?"The fire grows!":"Listen and learn."
q=A.E(A.d(q,i,i,i,i,i,i,A.m(i,i,v?B.ep:D.lG,i,i,i,i,i,i,i,i,i,i,i,B.u,i,i,!0,i,i,i,i,i,i,i,i),i,i,i),1)
v=j.as+1>=j.gCF().length?"Finish":"Next story"
v=A.A(A.a([u,B.ae,q,j.aak(v,j.gqs(j))],n),B.l,i,B.e,B.i,0,i,i)
break
case 4:v=A.a([A.d(""+j.at+" of "+j.gCF().length+" right  \xb7  +"+j.CW+" \u2b50",i,i,i,i,i,i,D.aXk,i,i,i)],n)
u=j.cx
if(u>0){u=C.aRy(u)
q=C.aRy(j.cx)
p=j.cx
k=j.dy?" \xb7 \ud83c\udfc6 new record!":""
v.push(A.d(u.b+" "+q.a+" \xb7 "+p+" stars"+k,i,i,i,i,i,i,D.acD,i,i,i))}v.push(B.P)
v.push(j.aak("Back to the games",new C.bSq(j)))
v=A.x(v,B.l,i,B.e,B.i,0,B.p)
break
default:v=i}return A.p(i,A.x(A.a([o,B.T,v],n),B.E,i,B.e,B.N,0,B.p),B.f,i,i,new A.o(t,i,r,s,D.aEE,i,B.n),i,i,i,B.yV,B.bl,i,i,i)},
aak(d,e){var w=null,v=A.l(16),u=A.K(B.cV,B.r,2)
return A.az(w,A.p(w,A.d(d,w,w,w,w,w,w,A2.L8,w,w,w),B.f,w,w,new A.o(D.lG,w,u,v,w,w,B.n),w,w,w,w,D.bHv,w,w,w),B.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,e,w,w,w,w,w,w,!1,B.a4)}}
C.bpQ.prototype={
a4(d,e){P.hki(d,e.ej(B.J),e.gdk()*0.45,this.b,0,0.4)},
aE(d){return d.b!==this.b}}
C.aCe.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbC())
w.a9$=null
w.a2()},
aX(){this.b8()
this.b5()
this.bD()}}
C.bUc.prototype={}
C.tk.prototype={}
C.bpR.prototype={}
C.amM.prototype={
MI(d){var w,v=this
if(v.a==null||!J.z(v.b,d)){w=v.a
if(w!=null)w.t()
v.a=C.igg(d)
v.b=d}w=v.a
w.toString
return w},
t(){var w=this.a
return w==null?null:w.t()}}
C.aXi.prototype={
a4(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.b.a,i=l.c
d.Gy(l.d.MI(e))
w=e.a
v=e.b
u=Math.min(w/450,v/900)
t=d.c
J.bt(t.save())
t.translate((w-450*u)/2,(v-900*u)/2)
d.bV(0,u)
l.cBR(d,j)
l.bQR(d,j)
l.cKb(d,j,i)
s=0.8+0.2*Math.sin(j*8)*Math.sin(j*3.7)+i.w*0.4
J.bt(t.save())
t.translate(225,580)
d.op(0,1,0.42)
r=240*(0.6+0.5*i.w)
$.S()
q=A.L()
p=x.O
o=x.n
q.san(A.wg(B.J,r,A.a([D.buM.j(0.55*s),F.NO.j(0.2*s),B.L],p),A.a([0,0.5,1],o),B.x,k,k,0))
d.O(B.J,r,q)
t.restore()
n=A.a([new A.y(528,new C.bU4(l,d,j,i)),new A.y(540,new C.bU5(l,d,j,i)),new A.y(546,new C.bU6(l,d,j,i)),new A.y(574,new C.bU7(l,d,j,i)),new A.y(612,new C.bU8(l,d,j,i)),new A.y(650,new C.bU9(l,d,j,i)),new A.y(656,new C.bUa(l,d,j,i))],x.E)
B.d.b_(n,new C.bUb())
for(m=0;m<7;++m)n[m].b.$0()
l.bHH(d,j,i)
l.bUv(d,j)
t.restore()
$.S()
t=A.L()
t.san(A.wg(new A.r(w/2,v*0.6),e.gaoz()*0.75,A.a([B.L,D.bi2],p),A.a([0.55,1],o),B.x,k,k,0))
d.aF(new A.a4(0,0,0+w,0+v),t)},
aE(d){return d.c!==this.c||d.d!==this.d},
cBR(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=new A.e0()
h.cU(3)
for(w=0;w<36;++w){v=h.ai()
u=h.ai()
t=Math.sin(e*(1.5+h.ai()*2)+w)
s=h.ai()
t=B.c.j(0.25+0.7*(0.5+0.5*t))
$.S()
r=new A.ar(B.S,B.Q,B.V,B.X,B.U)
r.r=t.gp(0)
d.O(new A.r(v*450,20+u*300),0.8+s*1.1,r)}q=B.h.F(e,17)/1.2
if(q<1){p=new A.r(60+q*220,70+q*90)
d.ah(p,p.aJ(0,D.eun),C.iH(B.c.j((1-q)*0.9),1.6))}for(v=e*0.035,u=e*9,t=x.v,o=0;o<3;++o){n=B.h.F(v+o*0.05,1)
s=-20+n*500
r=120+Math.sin(n*9+o)*14+o*12
m=Math.sin(u+o*2)
l=$.S()
k=A.a([],t)
l=new A.aH(l.r,B.aj,null,null,k)
m=r+m*4
k.push(new A.aZ(s-6,m))
l.ab()
j=r-3
r=new A.ce(s-2,j,s,r)
k.push(r)
i=l.f
if(i!=null)r.ak(i)
l.ab()
s=new A.ce(s+2,j,s+6,m)
k.push(s)
r=l.f
if(r!=null)s.ak(r)
l.ab()
s=new A.ar(B.S,B.Q,B.V,B.X,B.U)
s.b=B.aa
s.c=1.6
s.r=D.bkO.gp(0)
s.d=B.bG
s.e=B.dQ
d.af(l,s)}},
bQR(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=0.75+0.25*Math.sin(e*9)*Math.sin(e*5.3)
for(w=e*0.12,v=0.78*g,u=0.7*g,t=0;t<3;++t){s=D.aBA[t]
r=s.a
q=s.c
p=r+q*0.1
o=s.b
n=s.d
m=o-n*0.38
l=A.bX(new A.r(p,m),n*0.74,q*0.5)
k=Ab.yH.j(v)
$.S()
j=new A.ar(B.S,B.Q,B.V,B.X,B.U)
j.r=k.gp(0)
d.c0(l,j)
q=A.bX(new A.r(p+0,m+n*0.1),n*0.4,q*0.28)
m=new A.ar(B.S,B.Q,B.V,B.X,B.U)
m.r=B.wh.j(u).gp(0)
d.c0(q,m)
for(q=r*0.01,n=o-n-s.e*0.9,i=0;i<5;++i){h=B.h.F(w+i/5+q,1)
p=Math.sin(h*6+i)
o=new A.ar(B.S,B.Q,B.V,B.X,B.U)
o.r=D.aiD.j(0.16*(1-h)).gp(0)
d.O(new A.r(r+p*6+h*18,n-h*70),4+h*12,o)}}},
cKb(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null
C.bEq(d,D.euj,0.9,e,D.hHL,!1,!1,D.b2x,1,!1)
w=$.S().r
v=x.v
u=new A.aH(w,B.aj,g,g,A.a([],v))
u.E(new A.aZ(52,470))
u.E(new A.aq(50,486))
u.E(new A.aq(66,486))
u.E(new A.aq(64,470))
u.E(new A.bx())
t=A.L()
t.r=D.akA.gp(0)
d.af(u,t)
C.bEq(d,D.eul,0.95,e,D.hHG,!1,!1,D.b2y,1,!0)
t=new A.aH(w,B.aj,g,g,A.a([],v))
t.E(new A.aZ(417,510))
t.E(new A.ce(431,532,445,510))
t.E(new A.aq(441,548))
t.E(new A.ce(431,553,421,548))
t.E(new A.bx())
u=A.L()
u.r=F.Gf.gp(0)
d.af(t,u)
u=A.bX(D.euk,8,28)
t=A.L()
t.r=D.bx9.gp(0)
d.c0(u,t)
C.bEq(d,new A.r(-30+B.h.F(e/26,1)*510,492),0.82,e,D.hHM,!0,!1,D.XK,1,!1)
t=B.h.F(e/11,1)*3.141592653589793*2
s=150+Math.sin(t)*110
r=507+Math.cos(t)*7
q=Math.cos(t)>=0?1:-1
d.c0(A.bX(new A.r(s+q*16,r-6),16,11),C.iH(D.akr,1.8))
u=q<0
C.bEq(d,new A.r(s-q*6,r),0.62,e,D.hHO,!1,u,D.XK,2.2,!1)
C.bEq(d,new A.r(s-q*32,r+4),0.58,e+1,D.hHK,!1,u,D.XK,2.2,!1)
this.bXe(d,D.etZ,e)
for(u=e*0.5,t=e*4,p=0;p<3;++p){o=88+p*17+Math.sin(u+p)*6
n=520+B.o.F(p,2)*6
m=Math.max(0,Math.sin(t+p*2))*4
l=A.bX(new A.r(o,n),8,11)
k=p===1
j=k?D.akn:D.akZ
i=new A.ar(B.S,B.Q,B.V,B.X,B.U)
i.r=j.gp(0)
d.c0(l,i)
l=k?D.akn:D.akZ
k=new A.ar(B.S,B.Q,B.V,B.X,B.U)
k.r=l.gp(0)
d.O(new A.r(o+5,n+(-3+m)),2.6,k)
k=new A.ar(B.S,B.Q,B.V,B.X,B.U)
k.b=B.aa
k.c=1
k.r=B.at.gp(0)
k.d=B.bG
k.e=B.dQ
d.ah(new A.r(o+7.5,n+(-2+m)),new A.r(o+10,n+(-1.5+m)),k)
o+=-1
k=new A.ar(B.S,B.Q,B.V,B.X,B.U)
k.b=B.aa
k.c=1
k.r=B.at.gp(0)
k.d=B.bG
k.e=B.dQ
d.ah(new A.r(o,n+4),new A.r(o,n+8),k)}h=e<f.f
u=A.bX(D.a9D,15+Math.sin(e*2)*0.8,40)
t=A.L()
t.r=D.aj1.gp(0)
d.c0(u,t)
u=A.bX(D.a9D.a5(0,new A.r(-14,h?-9:-2)),12,15)
t=A.L()
t.r=D.bn_.gp(0)
d.c0(u,t)
t=new A.aH(w,B.aj,g,g,A.a([],v))
t.E(new A.aZ(130,592-(h?16:6)))
t.E(new A.aq(134,592-(h?22:9)))
t.E(new A.aq(138,592-(h?16:6)))
t.E(new A.bx())
u=A.L()
u.r=D.bnb.gp(0)
d.af(t,u)
u=D.a9D.a5(0,new A.r(-17,h?-9:-2))
t=A.L()
t.r=B.ic.gp(0)
d.O(u,1.1,t)
v=new A.aH(w,B.aj,g,g,A.a([],v))
v.E(new A.aZ(168,590))
w=Math.sin(e*8)
v.E(new A.ce(180,588+w*(h?6:0),178,595))
d.af(v,C.iH(D.aj1,3.5))},
bXe(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=Math.max(0,Math.sin(f*0.6))*9,k=e.a5(0,new A.r(Math.sin(f*0.25)*10,0))
for(w=[-9,-4,6,11],v=w.length,u=k.a,t=k.b,s=t+3,r=f*2,q=t+16,p=0;p<v;++p){o=w[p]
n=Math.sin(r+o)
$.S()
m=new A.ar(B.S,B.Q,B.V,B.X,B.U)
m.b=B.aa
m.c=2
m.r=D.Zb.gp(0)
m.d=B.bG
m.e=B.dQ
d.ah(new A.r(u+o,s),new A.r(u+(o+n*1.5),q),m)}w=A.bX(k,17,32)
v=$.S()
r=A.L()
r.r=D.Gd.gp(0)
d.c0(w,r)
r=A.bX(k.a5(0,D.etq),7,26)
w=A.ap(D.Gd,B.w,0.12)
w.toString
q=A.L()
q.r=w.gp(0)
d.c0(r,q)
v=new A.aH(v.r,B.aj,null,null,A.a([],x.v))
v.E(new A.aZ(u+13,t-3))
v.E(new A.aq(u+22,t-8+l))
v.E(new A.aq(u+20,t+l-0.5))
v.E(new A.aq(u+12,s))
v.E(new A.bx())
s=A.L()
s.r=D.Gd.gp(0)
d.af(v,s)
s=A.bX(k.a5(0,new A.r(24,-7+l)),9,12)
v=A.L()
v.r=D.Gd.gp(0)
d.c0(s,v)
v=-11+l
d.ah(k.a5(0,new A.r(22,v)),k.a5(0,new A.r(21,-17+l)),C.iH(D.Zb,1.6))
d.ah(k.a5(0,new A.r(26,v)),k.a5(0,new A.r(28,-16+l)),C.iH(D.Zb,1.6))
v=k.a5(0,new A.r(26,-8+l))
s=A.L()
s.r=B.w.gp(0)
d.O(v,0.9,s)
d.ah(k.a5(0,new A.r(26,-3+l)),k.a5(0,new A.r(26,1+l)),C.iH(D.bpZ,1.4))
d.ah(k.a5(0,D.ewn),k.a5(0,new A.r(-19,-7+Math.sin(f*7)*2)),C.iH(D.Gd,2.4))},
bUt(a6,a7,a8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5
for(w=0;w<14;++w){v=w*3.141592653589793*2/14
u=Math.cos(v)
t=Math.sin(v)
if(Math.sin(v)<0){u=A.bX(new A.r(225+u*36,574+(t*13+6)),8,11)
$.S()
t=new A.ar(B.S,B.Q,B.V,B.X,B.U)
t.r=D.bvN.gp(0)
a6.c0(u,t)}}u=A.bX(D.a9F.a5(0,B.cz),17,52)
$.S()
t=A.L()
t.r=D.bhB.gp(0)
a6.c0(u,t)
t=A.bX(D.a9F.a5(0,B.cz),12,44)
u=D.bld.j(0.6+0.3*Math.sin(a7*6))
s=A.L()
s.r=u.gp(0)
a6.c0(t,s)
for(r=0;r<3;++r){v=D.dnY[r]
u=225+Math.cos(v)*3
t=Math.cos(v)
s=Math.sin(v)
q=Math.cos(v)
p=Math.sin(v)
o=new A.ar(B.S,B.Q,B.V,B.X,B.U)
o.b=B.aa
o.c=7
o.r=D.Gq.gp(0)
o.d=B.bG
o.e=B.dQ
a6.ah(new A.r(u+t*24,579+s*4),new A.r(u-q*24,579-p*4),o)
o=Math.cos(v)
p=Math.sin(v)
q=Math.cos(v)
s=Math.sin(v)
t=D.BT.j(0.6)
n=new A.ar(B.S,B.Q,B.V,B.X,B.U)
n.b=B.aa
n.c=2
n.r=t.gp(0)
n.d=B.bG
n.e=B.dQ
a6.ah(new A.r(u+o*24,579+(p*4-2)),new A.r(u-q*24,579-(s*4+2)),n)}m=46+80*a8.w
l=[D.f6J,D.f7h,D.f8n,D.f8I,D.f8l]
for(u=a7*8,t=a7*15,s=a7*3.3,q=x.v,k=0;k<3;++k){j=[1,0.72,0.42][k]
i=[D.bt3,D.bpj,D.bvd][k]
for(p=l.length,o=k===0,n=1-k*0.15,r=0;r<p;++r){h=l[r]
g=h.b
f=h.c
e=m*g*j*(0.9+0.12*Math.sin(u+f)+0.06*Math.sin(t+f*2))
d=Math.sin(s+f)*5*(e/m)
a0=225+h.a*n
a1=(12+8*a8.w)*g*j
g=$.S()
f=A.a([],q)
a2=new A.aH(g.r,B.aj,null,null,f)
f.push(new A.aZ(a0-a1,578))
a2.ab()
g=a0+d*0.6
a3=new A.ks(a0-a1*1.1,578-e*0.45,g-a1*0.2,578-e*0.7,a0+d,578-e)
f.push(a3)
a4=a2.f
if(a4!=null)a3.ak(a4)
a2.ab()
g=new A.ks(g+a1*0.3,578-e*0.65,a0+a1*1.15,578-e*0.4,a0+a1,578)
f.push(g)
a3=a2.f
if(a3!=null)g.ak(a3)
a2.ab()
g=new A.bx()
f.push(g)
f=a2.f
if(f!=null)g.ak(f)
a2.ab()
g=new A.ar(B.S,B.Q,B.V,B.X,B.U)
g.r=i.j(o?0.9:0.95).gp(0)
a6.af(a2,g)}}for(u=a7*1.5,w=0;w<22;++w){a5=B.h.F(a7*(0.35+B.o.F(w,5)*0.06)+w/22,1)
t=Math.sin(w*1.9+u)
s=a8.w
q=B.o.F(w,3)
p=G.akX.j((1-a5)*0.9)
$.S()
o=new A.ar(B.S,B.Q,B.V,B.X,B.U)
o.r=p.gp(0)
a6.O(new A.r(225+t*(10+a5*26),564-a5*(110+80*s)),1.2+q*0.6,o)}for(u=a7*0.1,t=574-m,w=0;w<6;++w){a5=B.h.F(u+w/6,1)
s=Math.sin(a5*5+w)
q=D.aiD.j(0.1*(1-a5))
$.S()
p=new A.ar(B.S,B.Q,B.V,B.X,B.U)
p.r=q.gp(0)
a6.O(new A.r(225+s*16+a5*12,t-a5*120),7+a5*20,p)}},
bUv(d,e){var w,v,u,t,s,r,q,p,o,n
for(w=e*0.3,v=e*3,u=e*0.7,t=e*1.4,s=0;s<16;++s){r=B.h.F(s*83+Math.sin(w+s)*40+v,450)
q=420+B.o.F(s*37,300)+Math.sin(u+s*2)*26
p=Math.max(0,Math.sin(t+s*1.7))
o=D.bxk.j(0.18*p)
$.S()
n=new A.ar(B.S,B.Q,B.V,B.X,B.U)
n.r=o.gp(0)
d.O(new A.r(r,q),5,n)
n=new A.ar(B.S,B.Q,B.V,B.X,B.U)
n.r=D.bqN.j(0.9*p).gp(0)
d.O(new A.r(r,q),1.4,n)}},
c6h(d,e){switch(d){case 0:return e.b?D.hHH:D.b25
case 1:return e.b?D.hHN:D.b23
case 2:return D.b22
case 3:return D.b21
case 4:return D.b24
default:return D.b26}},
aDM(d,e){return(0.2+0.8*Math.abs(Math.sin(d*10+e)))*(0.55+0.45*Math.sin(d*3.1+e*2))},
Rp(d,e,f,g){var w,v=this,u=D.a6R[e],t=v.c6h(e,g),s=new C.bpR(),r=f-g.e,q=f<g.f,p=g.r,o=g.c,n=(Math.sin(f*1.3+e*7.1)+Math.sin(f*2.1+e*3.7)*0.6+Math.sin(f*0.7+e*11.3)*0.4)/2,m=D.a6R[e],l=e===0
m=B.h.D(((l?D.aNb:D.aNh).a-m.a.a)/160,-1,1)*0.8+n*0.25
s.y=m
s.z=l?0.35:-0.3+n*0.2
m=s.e=m*0.55
s.Q=D.a9K
s.as=D.EH
if(l){s.a=o?v.aDM(f,0):0
p=g.a
l=p===3&&g.d?0.7:0
w=p===4?0.8:0
s.b=0.3+l+w
s.c=p===2?0.5:0.1
s.f=n*0.05
if(o){s.r=Math.sin(f*4.2)*1.4
p=new A.r(46+Math.sin(f*3.1)*10,-64+Math.sin(f*4.3)*13)
s.as=p
s.Q=new A.r(-40+Math.sin(f*2.2+1)*4,-40+Math.sin(f*3.4)*6)}else p=D.EH
if(g.a===3&&!g.d)s.e=m+Math.sin(r*6)*0.35*Math.max(0,1-r/1.8)
if(q){s.a=0.5
s.b=1
p=f*9
s.Q=new A.r(-4-Math.max(0,Math.sin(p))*7,-58)
p=s.as=new A.r(4+Math.max(0,Math.sin(p))*7,-58)}if(!q)p=!(o&&p.b<-50)
else p=!1
s.at=p}else if(e===1){s.b=0.35
if(o)s.r=Math.sin(f*2.4+1)*1.6
if(q){s.b=1
s.a=0.35+0.35*Math.max(0,Math.sin(f*13))
s.d=0.7
p=f*8
s.Q=new A.r(-4-Math.max(0,Math.sin(p))*7,-56)
s.as=new A.r(4+Math.max(0,Math.sin(p))*7,-56)
s.x=Math.max(0,Math.sin(p))*3}else if(g.a===3&&!g.d){s.as=D.ety
s.e=m+Math.sin(r*5)*0.2*Math.max(0,1-r/2)
s.b=-0.2}}else{s.b=0.3+0.1*Math.sin(f*0.5+e)
s.w=2+(o?Math.sin(f*1.6+e)*1.6:0)
if(o)s.r=Math.max(0,Math.sin(f*1.9+e*2))*2.2
if(g.a===2){s.c=0.6
s.w=4
if(e===2)s.as=D.euU
if(e===4)s.as=new A.r(36,-128+Math.sin(f*5)*4)}if(q){s.b=1
s.a=0.45+0.4*Math.max(0,Math.sin(f*12+e))
s.d=0.5
p=Math.max(0,Math.sin(f*9+e*1.3))*9
s.x=p
m=Math.max(0,Math.sin(f*10+e))*8
p=-56-p*0.3
s.Q=new A.r(-3-m,p)
s.as=new A.r(3+m,p)}else if(f<p){s.a=0.55
s.b=-0.1
s.c=1
s.Q=D.exj
s.as=D.aNu}if(e===2&&g.x!=null&&f<g.y){s.a=v.aDM(f,5)
s.b=0.4
s.as=new A.r(34+Math.sin(f*3)*6,-70+Math.sin(f*4)*8)}if(e===g.Q&&g.z!=null&&f<g.as){s.a=v.aDM(f,e*3)
s.b=0.5
s.c=0.4}}C.hD6(d,u.a,u.b*1.2,t,s,f,e,null)},
bHH(d,e,f){var w=new C.bU3(d),v=f.z
if(v!=null&&e<f.as)w.$2(f.Q,v)
v=f.x
if(v!=null&&e<f.y)w.$2(2,v)},
gd2(d){return this.c}}
C.ago.prototype={
a7(){return"_Stand."+this.b}}
C.ael.prototype={}
C.lA.prototype={}
C.bSO.prototype={
bCi(d){var w,v,u,t,s=A.T(x.N,x.P)
for(w=this.b,v=w.length,u=0;u<w.length;w.length===v||(0,A.I)(w),++u){t=w[u]
s.n(0,t.a,t)}this.c!==$&&A.aQ()
this.c=s},
Ge(d){var w,v,u,t,s,r=A.a([],x.u)
for(w=this.b,v=w.length,u=d.a,t=0;t<w.length;w.length===v||(0,A.I)(w),++t){s=w[t]
if(s.d===u)r.push(s)}B.d.b_(r,new C.bSP())
return r},
arP(d){var w,v,u,t,s,r=d.e
if(r==null)w=null
else{v=this.c
v===$&&A.c()
w=v.h(0,r)}if(w!=null)return w
for(r=this.b,v=r.length,u=d.a,t=0;t<v;++t){s=r[t]
if(s.e===u)return s}return null},
aNv(d){var w,v,u,t,s,r,q,p=A.a([],x.u)
for(w=this.b,v=w.length,u=d.a,t=d.d,s=0;s<w.length;w.length===v||(0,A.I)(w),++s){r=w[s]
if(r.a!==u){q=r.d
q=q!=null&&q===t}else q=!1
if(q)p.push(r)}return p},
amX(d){var w,v,u=A.aR(x.N),t=d,s=0
for(;;){w=t.d
if(w!=null){v=this.c
v===$&&A.c()
v=v.h(0,w)!=null&&u.I(0,t.a)}else v=!1
if(!v)break
v=this.c
v===$&&A.c()
w=v.h(0,w)
w.toString;++s
t=w}return s},
gzs(){var w=this.b
if(w.length===0)return null
w=A.C(w,x.P)
B.d.b_(w,new C.bSQ(this))
return B.d.gH(w)}}
C.auQ.prototype={}
C.zD.prototype={}
C.alk.prototype={
gCb(d){var w
if(B.a.i(this.a).length!==0){w=this.b
w=new A.Y(w,new C.bNC(),A.U(w).k("Y<1>")).gJ(0)>=2&&B.a.i(w[this.c]).length!==0}else w=!1
return w},
aj(){var w=this
return A.J(["q",w.a,"a",w.b,"c",w.c,"s",w.d],x.N,x.z)}}
C.MX.prototype={
gapR(d){var w,v,u,t,s=A.a([],x.b)
for(w=this.c,v=w.length,u=0;u<w.length;w.length===v||(0,A.I)(w),++u){t=w[u]
if(t.gCb(0))s.push(t)}return s},
aj(){var w,v,u,t,s,r,q=this.b,p=A.a([],x.Y)
for(w=this.c,v=w.length,u=x.N,t=x.z,s=0;s<w.length;w.length===v||(0,A.I)(w),++s){r=w[s]
p.push(A.J(["q",r.a,"a",r.b,"c",r.c,"s",r.d],u,t))}return A.J(["id",this.a,"title",q,"qs",p],u,t)},
d2H(){var w,v,u,t,s,r,q,p,o,n,m,l=A.a([],x.J)
for(w=this.gapR(0),v=w.length,u=x.s,t=0;t<w.length;w.length===v||(0,A.I)(w),++t){s=w[t]
r=s.b
q=B.a.i(r[s.c])
p=A.a([],u)
for(o=r.length,n=0;n<r.length;r.length===o||(0,A.I)(r),++n){m=B.a.i(r[n])
if(m.length!==0)p.push(m)}l.push(new C.lA(B.a.i(s.a),p,B.d.co(p,q),"The right answer is "+q+".","","creator",s.d))}return l}}
C.bbg.prototype={}
C.aap.prototype={}
C.bix.prototype={}
C.agm.prototype={}
C.akD.prototype={
S(){return new C.akE(B.bC,A.a([],x.cC),A.a([],x.e4),null,null)},
gd1(){return this.d}}
C.akE.prototype={
gMZ(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.bF2(w.c,8,w.e,!1)
u.d!==$&&A.bE()
u.d=v
t=v}return t},
gbbe(){var w,v=this,u=v.e
if(u===$){w=v.q6(v.gcd_())
v.e!==$&&A.bE()
v.e=w
u=w}return u},
Y(){this.a3()
this.gbbe().fX(0)},
t(){this.gbbe().t()
this.bwG()},
fX(d){this.m(new C.bLL(this))},
cd0(d){var w=this,v=Math.min(0.05,(d.a-w.f.a)/1e6)
w.f=d
w.fG(0,v)
if(w.c!=null)w.m(new C.bLG())},
b9A(){var w,v,u,t=this,s=t.r
B.d.a8(s)
w=t.gMZ()
v=w[t.x].b.length
for(u=0;u<v;++u)s.push(new C.bix(u,(u+0.5)/v,w[t.x].b[u]))},
fG(d,e){var w,v,u,t,s,r,q,p,o,n,m=this
m.dx+=e
if(!m.ch||m.CW)return
w=m.cy
m.cy=w+(m.db-w)*Math.min(1,e*9)
for(w=m.w,v=w.length,u=e*1.4,t=0;t<v;++t){s=w[t]
s.a=s.a+s.c*e
s.b=s.b+s.d*e
s.f-=u}B.d.bq(w,new C.bLM())
w=m.fx
if(w>0){m.fx=w-e
for(w=m.r,v=w.length,t=0;t<v;++t)w[t].r+=e
if(m.fx<=0)m.c97()
return}for(w=m.r,v=w.length,t=0;t<w.length;w.length===v||(0,A.I)(w),++t){r=w[t]
if(r.e||r.f)continue
r.d=r.d+e/(9.5-Math.min(m.x,6)*0.6)
r.r+=e
u=r.a
q=r.b+Math.sin(m.dx*1.7+u)*0.012
p=r.d
if(p>=0.74&&p<=0.86&&Math.abs(q-m.cy)<0.12){r.e=!0
w=m.gMZ()
if(u===w[m.x].c){v=++m.as
m.at=Math.max(m.at,v);++m.Q
o=100+B.h.U((1-r.d)*100)+20*Math.min(v-1,4)
m.z+=o
m.fy=o
m.go=m.dx
v=m.cy
m.id=v
m.atl(v,0.8,B.cV)
m.dy="Yes! "+w[m.x].d
m.fr=m.dx+2
m.fx=1.8}else{m.atl(m.cy,0.8,G.np)
m.b_4("That was not it. "+w[m.x].d)}return}if(p>0.9){r.f=!0
m.atl(q,0.88,D.lG)
p=m.gMZ()[m.x]
n=p.c
if(u===n){m.b_4("The right gourd fell! It was "+p.b[n]+".")
return}}}},
atl(d,e,f){var w,v,u,t=new A.e0()
t.cU(B.h.U(this.dx*1000))
for(w=this.w,v=0;v<14;++v){u=t.ai()*3.141592653589793*2
w.push(new C.agm(d,e,Math.cos(u)*0.25,-0.1-Math.abs(Math.sin(u))*0.35,f))}},
b_4(d){var w,v=this
v.as=0
w=--v.y
v.dy=d
v.fr=v.dx+2.4
v.fx=2.2
if(w<=0){v.fx=0
v.Qx()}},
c97(){var w=this
if(w.x+1>=w.gMZ().length){w.Qx()
return}++w.x
w.b9A()},
Qx(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$Qx=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:u.CW=!0
t=u.Q
s=u.gMZ().length
r=C.bHk(t,u.at,s)
u.ax=r
if(u.c!=null)u.m(new C.bLE())
w=2
return A.b(C.BT(u.a.d,r),$async$Qx)
case 2:u.ay=e
t=u.a
w=3
return A.b(C.BU(t.d,t.c.a,"catch",u.z),$async$Qx)
case 3:u.cx=e
if(u.c!=null)u.m(new C.bLF())
return A.h(null,v)}})
return A.i($async$Qx,v)},
B(d){var w,v=this,u=null
if(v.CW)w=v.ccZ()
else w=v.ch?v.cd1():A.as(new A.D(B.eA,A.x(A.a([D.aYi,B.P,D.fWA,B.T,D.h1L,B.e4,C.uA("Play",v.geX(v),B.cV,B.he,D.fC)],x.p),B.l,u,B.e,B.N,0,B.p),u),u,u,u)
return new C.tK("Calabash Catch",w,B.f7,u)},
cd1(){var w,v,u,t,s=this,r=null,q=x.p,p=A.a([],q)
for(w=0;w<3;++w){v=w<s.y
u=v?B.hD:B.HU
p.push(A.X(u,v?B.aA:B.bV,r,r,r,22))}p.push(B.b4)
v=s.x
u=s.gMZ()
p.push(A.d(""+(v+1)+"/"+u.length,r,r,r,r,r,r,D.aWS,r,r,r))
p.push(B.bc)
v=A.l(14)
p.push(A.p(r,A.d(""+s.z,r,r,r,r,r,r,B.iH,r,r,r),B.f,r,r,new A.o(B.bw,r,r,v,r,r,B.n),r,r,r,r,B.CF,r,r,r))
p=A.A(p,B.l,r,B.e,B.i,0,r,r)
v=A.l(18)
t=A.K(B.cV,B.r,3)
return A.x(A.a([new A.D(D.bFg,p,r),A.p(r,A.d(u[s.x].a,r,r,r,r,r,r,D.fGy,B.K,r,r),B.f,r,r,new A.o(D.qq,r,t,v,r,r,B.n),r,r,r,B.f3,B.bl,r,r,1/0),B.am,A.E(A.ck(new C.bLK(s)),1)],q),B.l,r,B.e,B.i,0,B.p)},
ccZ(){var w=this,v=null,u=A.as(A.d(w.y<=0?"The gourds are all gone":"The basket is full!",v,v,v,v,v,v,B.q2,v,v,v),v,v,v),t=A.as(A.d(""+w.Q+" of "+w.gMZ().length+" caught \xb7 "+w.z+" points",v,v,v,v,v,v,D.W6,v,v,v),v,v,v),s=w.ax,r=w.ay
if(r===0)r=s
return A.cw(A.a([D.bf0,u,t,B.aO,new C.Iz(s,r,w.cx,v),B.aO,A.as(C.uA("Back to the games",new C.bLD(w),B.cV,B.kb,D.fC),v,v,v)],x.p),v,v,B.ac,v,v,B.ah,!1)}}
C.bdJ.prototype={
a4(a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null,d=a5.a,a0=a5.b,a1=0+d,a2=$.S(),a3=A.L()
a3.san(A.jG(B.J,new A.r(0,a0),D.d5F,G.aBR,B.x,e))
a4.aF(new A.a4(0,0,a1,0+a0),a3)
a3=A.L()
a3.r=G.NS.gp(0)
a4.O(new A.r(d*0.82,a0*0.16),22,a3)
a3=x.v
w=A.a([],a3)
v=new A.aH(a2.r,B.aj,e,e,w)
a2=a0*0.7
v.E(new A.aZ(0,a2))
for(u=0;u<=d;u+=6){t=new A.aq(u,a2+Math.sin(u/55)*10)
w.push(t)
s=v.f
if(s!=null)t.ak(s)
v.ab()}v.E(new A.aq(d,a0))
v.E(new A.aq(0,a0))
a2=$.S()
w=A.L()
w.r=D.bma.gp(0)
a4.af(v,w)
r=d*0.12
a2=new A.aH(a2.r,B.aj,e,e,A.a([],a3))
w=a0*0.86
a2.E(new A.aZ(r-26,w))
t=a0*0.5
s=a0*0.34
a2.E(new A.ce(r-14,t,r-10,s))
a2.E(new A.aq(r+10,s))
a2.E(new A.ce(r+14,t,r+26,w))
a2.E(new A.bx())
w=A.L()
w.r=D.ahF.gp(0)
a4.af(a2,w)
for(a2=a0*0.36,w=a0*0.24,t=a0*0.22,q=0;q<4;++q){p=D.cqX[q]
s=new A.ar(B.S,B.Q,B.V,B.X,B.U)
s.r=D.ahF.gp(0)
s.c=7
s.d=B.bG
a4.ah(new A.r(r,a2),new A.r(r+p*46,w),s)
s=new A.ar(B.S,B.Q,B.V,B.X,B.U)
s.r=D.agX.gp(0)
a4.O(new A.r(r+p*50,t),18,s)}a2=a0*0.88
w=A.L()
w.r=D.bn8.gp(0)
a4.aF(new A.a4(0,a2,a1,a2+a0*0.12),w)
for(a1=a0*0.9,a2=a1-8,o=0;o<18;++o){w=d*o/17
t=new A.ar(B.S,B.Q,B.V,B.X,B.U)
t.r=D.ajh.gp(0)
t.c=2
a4.ah(new A.r(w,a1),new A.r(w+3,a2),t)}for(a1=this.b,a2=a1.r,w=a2.length,t=a4.c,s=a0*0.89,q=0;q<a2.length;a2.length===w||(0,A.I)(a2),++q){n=a2[q]
if(n.e)continue
m=n.a
u=(n.b+Math.sin(a1.dx*1.7+m)*0.012)*d
l=n.d
if(n.f){m=A.bX(new A.r(u,s),12,54)
$.S()
l=new A.ar(B.S,B.Q,B.V,B.X,B.U)
l.r=D.lG.j(0.6).gp(0)
a4.c0(m,l)
continue}m=Math.sin(a1.dx*2+m)
J.bt(t.save())
t.translate(u,l*a0)
t.rotate(m*0.1*180/3.141592653589793,0,0)
$.S()
m=new A.ar(B.S,B.Q,B.V,B.X,B.U)
m.r=D.ain.gp(0)
a4.O(D.esN,14,m)
m=new A.ar(B.S,B.Q,B.V,B.X,B.U)
m.r=D.bs5.gp(0)
m.c=4
m.d=B.bG
a4.ah(D.esO,D.etV,m)
m=new A.ar(B.S,B.Q,B.V,B.X,B.U)
m.san(new A.amd(D.ew4,46,D.dep,B.vk,B.x,e,e,0))
a4.O(B.J,34,m)
m=A.bX(D.ewb,8,12)
l=new A.ar(B.S,B.Q,B.V,B.X,B.U)
l.r=B.c.j(0.35).gp(0)
a4.c0(m,l)
k=new A.iF(new A.et(n.c,e,e,B.cN,e,e,e,e,e,e,D.fEn),B.K,B.c1,new A.jo(1),e,e,3,e,B.c2,e,B.cx)
k.nB(62)
m=k.b
l=Math.max(40,m.c+10)
m=m.a.c
j=A.by(A.bX(B.cM,m.gba(m)+8,l),B.fR)
l=new A.ar(B.S,B.Q,B.V,B.X,B.U)
l.r=D.qq.gp(0)
a4.aq(j,l)
l=new A.ar(B.S,B.Q,B.V,B.X,B.U)
l.r=D.lG.gp(0)
l.b=B.aa
l.c=1.5
a4.aq(j,l)
l=k.b
m=l.c
l=l.a.c
k.a4(a4,new A.r(-m/2,4-l.gba(l)/2))
t.restore()}i=a1.cy*d
a2=a1.dx
w=Math.sin(a2*4)
C.ik3(a4,new A.r(i,a0*0.93),a0*0.3,a2,!0,Math.abs(a1.db-a1.cy)*40*Math.abs(Math.sin(a1.dx*18)),2,B.dN,(w+1)/2)
h=A.bX(new A.r(i,a0*0.8),a0*0.07,d*0.24)
a3=new A.aH($.S().r,B.aj,e,e,A.a([],a3))
w=h.a
a2=h.b
a3.E(new A.aZ(w,a2))
t=h.c
a3.E(new A.aq(t,a2))
s=h.d
a3.E(new A.aq(t-8,s))
a3.E(new A.ce(h.gbE().a,s+8,w+8,s))
a3.E(new A.bx())
m=A.L()
m.r=D.a_5.gp(0)
a4.af(a3,m)
for(a3=t-w,o=1;o<6;++o){t=w+a3*o/6
m=new A.ar(B.S,B.Q,B.V,B.X,B.U)
m.r=D.BT.gp(0)
m.c=1.4
a4.ah(new A.r(t,a2),new A.r(t+(o-3)*2,s),m)}t=a2+(s-a2)*0.35
s=A.L()
s.r=G.np.gp(0)
a4.aF(new A.a4(w,t,w+a3,t+5),s)
w-=2
a2-=4
s=A.L()
s.r=D.bmg.gp(0)
a4.c0(new A.a4(w,a2,w+(a3+4),a2+8),s)
for(a2=a1.w,a3=a2.length,q=0;q<a2.length;a2.length===a3||(0,A.I)(a2),++q){g=a2[q]
w=g.a
t=g.b
s=g.f
m=new A.ar(B.S,B.Q,B.V,B.X,B.U)
m.r=g.e.j(B.h.D(s,0,1)).gp(0)
a4.O(new A.r(w*d,t*a0),3*s+1,m)}f=a1.dx-a1.go
if(f>=0&&f<1.2){a2=a1.fy
k=A.fE(e,B.cx,e,e,e,A.cS(e,e,e,e,e,e,e,e,e,A.m(e,e,B.cV.j(1-f/1.2),e,e,e,e,e,e,e,e,26,e,e,B.u,e,e,!0,e,e,e,e,e,I.DT,e,e),"+"+a2),B.a7,B.c1,e,B.dK,B.c2)
k.ep()
k.a4(a4,new A.r(a1.id*d-k.b.c/2,a0*0.72-f*60))}},
aE(d){return!0}}
C.QV.prototype={
B(d){var w=this,v=null,u=w.e,t=A.b5(v,v,v,new C.aCc(w.c,w.f,v),B.az),s=A.l(10),r=A.K(B.bE,B.r,1.4)
return new A.a5(u+22,v,A.x(A.a([new A.a5(u,u,t,v),B.cS,A.p(v,A.d(w.d,v,1,B.a2,v,v,v,D.fwU,v,v,v),B.f,v,v,new A.o(B.c,v,r,s,v,v,B.n),v,v,v,v,B.n3,v,v,v)],x.p),B.l,v,B.e,B.N,0,B.p),v)},
ga_(d){return this.e}}
C.aCc.prototype={
a4(d,e){var w=e.ej(B.J),v=e.gdk(),u=this.c?0.8:0
return P.hki(d,w,v*0.44,this.b,0,u)},
aE(d){return d.b!==this.b||d.c!==this.c}}
C.aAF.prototype={}
C.avr.prototype={
S(){return new C.avs(A.T(x.S,x.cq),null,null)},
gd1(){return this.d}}
C.avs.prototype={
gkT(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.hIH(w.c,w.e)
u.d!==$&&A.bE()
u.d=v
t=v}return t},
gaFQ(){var w=this.z
return w===$?this.z=this.XC(0):w},
gj2(){var w,v=this.Q
if(v===$){w=this.gkT()
w=w.length===0?0:w[0].c.length
v=this.Q=A.c2(w,-1,!1,x.S)}return v},
XC(d){var w,v,u,t,s=this.gkT()
if(d>=s.length)return A.a([],x.h)
w=s[d]
s=A.a([],x.h)
for(v=w.c,u=w.d,t=0;t<v.length;++t)s.push(new C.aAF(v[t],u[t],t))
for(v=w.e,u=w.f,t=0;t<v.length;++t)s.push(new C.aAF(v[t],u[t],-1))
v=new A.e0()
v.cU(this.a.e*31+d)
B.d.e0(s,v)
return s},
t(){var w,v,u
for(w=this.as,w=new A.dn(w,w.r,w.e);w.C();){v=w.d
v.r.t()
v.r=null
u=v.eN$
u.b=!1
B.d.a8(u.a)
u=u.goE()
if(u.a>0){u.b=u.c=u.d=u.e=null
u.a=0}v.dV$.a.a8(0)
v.qJ()}this.bx8()},
cSw(d,e){var w,v,u,t,s,r=this
if(d>=r.gj2().length||r.gj2()[d]!==-1||B.d.q(r.gj2(),e))return
w=r.gaFQ()[e]
v=r.gkT()[r.e].a
if(w.c<0){++r.f;++r.y
r.m(new C.crt(r,e,w,v))
A.cz(B.lM,new C.cru(r))
return}++r.r
u=A.bo(null,B.hO,null,1,null,r)
t=r.as
s=t.h(0,d)
if(s!=null)s.t()
t.n(0,d,u)
r.m(new C.crv(r,d,e,w,v))
u.cs(0)},
kO(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$kO=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:o=t.e
n=t.gkT()
w=o+1>=n.length?3:4
break
case 3:s=B.d.cB(n,0,new C.crw())
o=t.r
n=t.f
o=Math.max(0,o*4-n)
r=o+(n===0?12:0)
t.m(new C.crx(t,r))
w=5
return A.b(C.BT(t.a.d,r),$async$kO)
case 5:t.x=f
o=t.a
w=6
return A.b(C.BU(o.d,o.c.a,"plant",Math.max(1,s*10-t.f*5)),$async$kO)
case 6:t.ch=f
if(t.c!=null)t.m(new C.cry())
w=1
break
case 4:for(o=t.as,n=new A.dn(o,o.r,o.e);n.C();){q=n.d
q.r.t()
q.r=null
p=q.eN$
p.b=!1
B.d.a8(p.a)
p=p.goE()
if(p.a>0){p.b=p.c=p.d=p.e=null
p.a=0}q.dV$.a.a8(0)
q.qJ()}o.a8(0)
t.m(new C.crz(t))
case 1:return A.h(u,v)}})
return A.i($async$kO,v)},
B(d){var w,v,u,t,s,r=this,q="Plant the Tree",p=null
if(r.ay){w=A.as(A.d(""+r.r+" branches grown",p,p,p,p,p,p,B.q2,p,p,p),p,p,p)
v=r.f
v=A.as(A.d(v===0?"Not one mistake!":""+v+" mistakes",p,p,p,p,p,p,D.W6,p,p,p),p,p,p)
u=r.w
t=r.x
if(t===0)t=u
return new C.tK(q,A.cw(A.a([D.agt,w,v,B.aO,new C.Iz(u,t,r.ch,p),B.aO,A.as(C.uA("Back to the games",new C.crp(d),B.cV,B.kb,D.fC),p,p,p)],x.p),p,p,B.ac,p,p,B.ah,!1),B.f7,p)}w=r.gkT()
v=r.e
s=w[v]
return new C.tK(q,new A.D(B.t7,A.x(A.a([A.d("Round "+(v+1)+" of "+w.length+" \xb7 drag the children of "+s.a+" onto the branches",p,p,p,p,p,p,E.aWN,B.K,p,p),A.E(A.ck(new C.crq(r,s)),1)],x.p),B.l,p,B.e,B.i,0,B.p),p),B.f7,p)}}
C.bdc.prototype={
a4(b6,b7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9=this,b0=null,b1=y.B,b2=a9.d,b3=new A.Y(b2,new C.cRx(),A.U(b2).k("Y<1>")).gJ(0),b4=a9.b,b5=b4.a5(0,B.JX)
$.S()
w=A.L()
w.r=D.lH.j(0.18+0.1*b3).gp(0)
b6.O(b5,70+b3*10,w)
w=b7.a
b5=b7.b
v=b4.a5(0,D.esz)
u=A.L()
u.r=B.qs.j(0.5).gp(0)
u.c=10
u.d=B.bG
b6.ah(new A.r(w/2,b5*0.98),v,u)
for(v=a9.c,u=b4.a,b4=b4.b,t=b4+90,s=x.v,b4+=46,r=x.dc,q=x.U,p=0;p<v.length;++p){o=v[p]
n=o.a+0
m=B.e6.az(0,B.h.D(b2[p],0,1))
l=$.S().r
k=A.a([],s)
j=new A.aH(l,B.aj,b0,b0,k)
k.push(new A.aZ(u,b4))
j.ab()
o=new A.ce((u+n)/2,t,n,o.b+-46)
k.push(o)
n=j.f
if(n!=null)o.ak(n)
j.ab()
if(m<1)for(o=new A.aH(l,j.b,j.c,b0,A.br(k,!0,r)),n=A.a([],q),i=new A.uU(o,!1,n);i.C();){h=i.c
if(h===0||i.f)A.bj(A.jN(b1));--h
g=new A.BQ(i,h)
f=0
for(;;){i.jP()
e=n[h].b
e===$&&A.c()
if(!(f<e.a.length()))break
i.jP()
e=n[h].b
e===$&&A.c()
e=Math.min(e.a.length(),f+7)
d=o.b
a0=A.a([],s)
$.S()
a1=new A.ar(B.S,B.Q,B.V,B.X,B.U)
a1.r=B.aT.gp(0)
a1.b=B.aa
a1.c=3
b6.af(new A.aH(l,d,b0,new A.b7([g,f,e,!0]),a0),a1)
f+=14}}if(m>0)for(o=new A.aH(l,j.b,j.c,b0,A.br(k,!0,r)),n=A.a([],q),k=new A.uU(o,!1,n),i=m>0.4,h=9-3*m,e=11*m,d=6*m;k.C();){a0=k.c
if(a0===0||k.f)A.bj(A.jN(b1));--a0
k.jP()
a1=n[a0].b
a1===$&&A.c()
a1=a1.a.length()
a2=o.b
a3=A.a([],s)
$.S()
a4=new A.ar(B.S,B.Q,B.V,B.X,B.U)
a4.r=D.GE.gp(0)
a4.b=B.aa
a4.c=h
a4.d=B.bG
b6.af(new A.aH(l,a2,b0,new A.b7([new A.BQ(k,a0),0,a1*m,!0]),a3),a4)
k.jP()
a4=n[a0].b
a4===$&&A.c()
a4=a4.a.length()
k.jP()
a5=n[a0].W2(a4*m)
if(i)for(a0=a5.a,a1=a0.a,a0=a0.b,a6=0;a6<4;++a6){a7=a6*1.6+p
a2=A.bX(new A.r(a1+Math.cos(a7)*14,a0+Math.sin(a7)*10),d,e)
a3=new A.ar(B.S,B.Q,B.V,B.X,B.U)
a3.r=B.be.gp(0)
b6.c0(a2,a3)}}}if(a9.e)for(b2=b5*0.3,p=0;p<6;++p){a8=new A.iF(D.fwn,B.a7,B.c1,new A.jo(1),b0,b0,b0,b0,B.c2,b0,B.cx)
a8.ep()
a8.a4(b6,new A.r(w*(0.15+p*0.14),b2-B.o.F(p,3)*14))}},
aE(d){return!0}}
C.azp.prototype={
S(){return new C.azq(A.aR(x.S))},
gd1(){return this.d}}
C.azq.prototype={
gkT(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.hJB(w.c,w.e)
u.d!==$&&A.bE()
u.d=v
t=v}return t},
Y(){this.a3()
this.b9J()},
t(){var w=this.ch
if(w!=null)w.a1(0)
this.a2()},
b9J(){var w=this.ch
if(w!=null)w.a1(0)
this.ch=A.dh(B.t2,new C.cGq(this))},
bqI(d){var w,v=this
if(v.as||v.z.q(0,d))return
w=v.gkT()[v.e]
if(w.e[d]===w.b)v.m(new C.cGy(v,Math.max(10,100-25*(v.f-1)-15*v.z.a)))
else{v.m(new C.cGz(v,d))
A.cz(B.iR,new C.cGA(v))}},
cY_(){var w=this
if(!w.as&&w.f<w.gkT()[w.e].d.length)w.m(new C.cGB(w))},
kO(d){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$kO=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.e
q=t.gkT()
w=r+1>=q.length?3:4
break
case 3:r=t.ch
if(r!=null)r.a1(0)
r=t.w
q=r===q.length?15:0
s=r*6+q
t.m(new C.cGC(t,s))
w=5
return A.b(C.BT(t.a.d,s),$async$kO)
case 5:t.y=f
q=t.a
w=6
return A.b(C.BU(q.d,q.c.a,"who",t.r),$async$kO)
case 6:t.ax=f
if(t.c!=null)t.m(new C.cGD())
w=1
break
case 4:t.m(new C.cGE(t))
t.b9J()
case 1:return A.h(u,v)}})
return A.i($async$kO,v)},
B(a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=this,a1="Who Am I?",a2=null
if(a0.at){w=A.as(A.d(""+a0.w+" of "+a0.gkT().length+" guessed",a2,a2,a2,a2,a2,a2,B.q2,a2,a2,a2),a2,a2,a2)
v=A.as(A.d(""+a0.r+" points",a2,a2,a2,a2,a2,a2,D.W6,a2,a2,a2),a2,a2,a2)
u=a0.x
t=a0.y
if(t===0)t=u
return new C.tK(a1,A.cw(A.a([D.bfb,w,v,B.aO,new C.Iz(u,t,a0.ax,a2),B.aO,A.as(C.uA("Back to the games",new C.cGs(a3),B.cV,B.kb,D.fC),a2,a2,a2)],x.p),a2,a2,B.ac,a2,a2,B.ah,!1),B.f7,a2)}w=a0.as
s=w?0:Math.max(1,13-3.5*(a0.f-1))
r=w?0:Math.max(0.1,0.92-0.25*(a0.f-1))
w=a0.e
v=a0.gkT()
u=x.X
t=x.p
w=A.a([A.d("Person "+(w+1)+" of "+v.length,a2,a2,a2,a2,a2,a2,D.Lf,B.K,a2,a2),B.T,A.as(A.lJ(new C.cGt(a0,r),a2,B.b0,B.hO,a2,a2,new A.bs(a2,s,u),x.i),a2,a2,a2),B.aB],t)
for(q=x.W,p=x.gW,o=0;n=a0.f,o<n;o=k){n=a0.e
m=new A.aP(16,16)
l=new A.ay(B.cV,2,B.r,-1)
k=o+1
w.push(new A.rc(new A.bs(0,1,u),new C.cGu(),A.p(a2,new A.c8(B.aM,B.e,B.i,B.l,a2,B.p,a2,0,A.a([new A.qM(A.d(""+k,a2,a2,a2,a2,a2,a2,B.o6,a2,a2,a2),D.lG,a2,12,a2),B.as,new A.bz(1,B.bd,A.d(v[n].d[o],a2,a2,a2,a2,a2,a2,D.fJc,a2,a2,a2),a2)],t),a2),B.f,a2,a2,new A.o(D.qq,a2,new A.bH(l,l,l,l),new A.bf(m,m,m,m),a2,a2,B.n),a2,a2,a2,B.cw,B.bl,a2,a2,a2),B.b0,B.iR,a2,new A.bg("clue-"+n+"-"+o,q),p))}if(!a0.as&&n<v[a0.e].d.length)w.push(A.as(A.bP(!1,D.h9F,a2,a2,!0,a2,a2,a2,a0.gcXZ(),a2,a2),a2,a2,a2))
w.push(B.P)
if(a0.as){u=D.lH.j(0.2)
q=A.l(16)
p=A.K(D.lH,B.r,1)
n=a0.e
m=A.d("It is "+v[n].b+"!  +"+a0.ay,a2,a2,a2,a2,a2,a2,B.fS,a2,a2,a2)
v=n+1>=v.length?"See my result":"Next person"
w.push(A.p(a2,A.x(A.a([m,B.T,C.uA(v,a0.gqs(a0),B.cV,B.jt,D.fC)],t),B.l,a2,B.e,B.i,0,B.p),B.f,a2,a2,new A.o(u,a2,p,q,a2,a2,B.n),a2,a2,a2,a2,B.bH,a2,a2,a2))}else{t=A.a([],t)
for(n=a0.z,o=0;m=a0.e,o<v[m].e.length;++o){j=a0.Q===o
i=j?1:0
h=n.q(0,o)?B.dq:B.cV.j(0.2)
g=new A.aP(16,16)
l=new A.ay(n.q(0,o)?B.fj:B.cV,2,B.r,-1)
f=v[a0.e].e[o]
e=n.q(0,o)?B.bV:B.c
d=n.q(0,o)?B.xC:a2
t.push(new A.rc(new A.bs(0,i,u),new C.cGv(),A.az(a2,A.p(a2,A.d(f,a2,a2,a2,a2,a2,a2,new A.H(!0,e,a2,a2,a2,a2,16,B.u,a2,a2,a2,a2,a2,a2,a2,a2,a2,d,a2,a2,a2,a2,a2,a2,a2,a2),B.K,a2,a2),B.f,a2,D.afC,new A.o(h,a2,new A.bH(l,l,l,l),new A.bf(g,g,g,g),a2,a2,B.n),a2,a2,a2,a2,B.jr,a2,a2,a2),B.y,!1,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,new C.cGw(a0,o),a2,a2,a2,a2,a2,a2,!1,B.a4),B.b0,B.mg,a2,new A.bg("opt-"+m+"-"+o+"-"+j,q),p))}w.push(A.c_(B.fU,t,B.br,a2,10,10))}return new C.tK(a1,A.cw(w,a2,a2,B.anh,a2,a2,B.ah,!1),B.f7,a2)}}
C.aAp.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbC())
w.a9$=null
w.a2()},
aX(){this.b8()
this.b5()
this.bD()}}
C.aHI.prototype={
aX(){this.b8()
this.b5()
this.dI()},
t(){var w=this,v=w.b9$
if(v!=null)v.a6(0,w.gdC())
w.b9$=null
w.a2()}}
C.aga.prototype={
arn(d){},
arT(){var w=this,v=w.q6(new C.f9_(w))
v.fX(0)
w.M6$!==$&&A.aQ()
w.M6$=v}}
C.aLw.prototype={
gbn8(d){var w=this.c
return B.a.aA(w,0,Math.min(this.d,w.length))},
Wa(d){var w=this,v=w.b
if(v!=null)v.a1(0)
w.c=d
w.d=0
w.b=A.dh(E.a0J,new C.fj9(w))},
bt5(d){var w=this,v=w.b
if(v!=null)v.a1(0)
w.d=w.c.length
w.a.$0()},
t(){var w=this.b
return w==null?null:w.a1(0)}}
C.amC.prototype={
S(){return new C.amD(new C.amM(),A.a([],x.t),new A.eF(0,$.ax()),$,0,null,null)},
gd1(){return this.d}}
C.amD.prototype={
gMX(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.bF2(w.c,10,w.e,!0)
u.d!==$&&A.bE()
u.d=v
t=v}return t},
ghd(d){var w,v=this,u=v.e
if(u===$){w=C.Nc(v.a.c)
v.e!==$&&A.bE()
v.e=w
u=w}return u},
gqA(){var w=this.r
return w===$?this.r=new C.aLw(new C.bTA(this)):w},
gaqc(d){var w,v,u=A.a([],x.t)
for(w=this.w,v=0;v<w.length;++v)if(w[v]===this.gMX()[v].c)u.push(1)
return u.length},
gbms(){var w=this.ghd(0)
return w.gzs()==null?"Elder":B.a.i(w.gzs().b)},
Y(){this.a3()
this.arT()},
t(){var w,v=this
v.gqA().t()
v.f.t()
w=v.M6$
w===$&&A.c()
w.t()
w=v.qe$
w.V$=$.ax()
w.R$=0
v.bwO()},
cMC(){var w=this
w.m(new C.bTx(w))
w.gqA().Wa(w.gMX()[w.x].a)},
Le(d){var w,v=this,u=!0
if(v.Q)if(!v.as){u=v.gqA()
w=u.d
u=u.c
u=w<u.length||v.w.length>v.x}if(u)return
v.w.push(d)
u=v.qe$.a
v.ax=u
v.ay=u+1
v.m(new C.bTv())
A.cz(B.hO,new C.bTw(v))},
bqE(){var w=this.gaqc(0)/this.gMX().length*100
if(w>=90)return D.f3A
if(w>=75)return D.f1A
if(w>=60)return D.eTd
if(w>=45)return D.eWD
return D.eND},
B(d){var w,v,u,t,s,r,q,p,o,n=this,m=null
if(n.as)return n.cv3()
w=A.bS(0,new A.e8(A.b5(m,m,m,new C.btV(n,n.qe$),B.az),m),0,0,0)
if(!n.Q){v=D.qq.j(0.96)
u=A.l(20)
t=A.K(B.cV,B.r,3)
u=A.p(m,A.x(A.a([A.d("Elder "+n.gbms()+" is your teacher. Ten questions about the family are written on the board. Answer each one; the marks come at the end.",m,m,m,m,m,m,D.aXH,B.K,m,m),B.T,C.uA("Start the test",n.gC1(),B.cV,B.jb,D.fC)],x.p),B.l,m,B.e,B.N,0,B.p),B.f,m,m,new A.o(v,m,t,u,m,m,B.n),m,m,m,m,B.bH,m,m,m)
v=u}else{v=n.x
u=n.gMX()
v=A.d("Question "+(v+1)+" of "+u.length,m,m,m,m,m,m,D.aXJ,m,m,m)
if(n.Q){t=n.gqA()
t=t.d<t.c.length}else t=!1
if(t)u=D.foP
else{t=n.x
s=A.a([],x.p)
for(r=0;q=u[n.x].b,r<q.length;++r){p=new A.aP(10,10)
o=new A.ay(D.BT,4,B.r,-1)
s.push(A.az(m,A.p(m,A.d(q[r],m,m,m,m,m,m,D.fA9,B.K,m,m),B.f,m,D.afC,new A.o(D.bi7,m,new A.bH(o,o,o,o),new A.bf(p,p,p,p),m,m,B.n),m,m,m,m,B.OE,m,m,m),B.y,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new C.bTy(n,r),m,m,m,m,m,m,!1,B.a4))}u=A.c_(B.fU,s,B.br,new A.bg("o"+t,x.W),8,8)}u=A.x(A.a([v,B.am,A.oF(u,B.n_,A.q0(),B.b0,B.b0,A.LO())],x.p),B.l,m,B.e,B.N,0,B.p)
v=u}return new C.tK("Village School",new A.an(B.a0,m,B.ad,B.t,A.a([w,A.ao(10,v,m,m,10,10,m,m)],x.p),m),B.f7,m)},
cv3(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.bqE(),g=A.a([],x.t)
for(w=j.w,v=0;v<w.length;++v)if(w[v]!==j.gMX()[v].c)g.push(v)
u=A.l(22)
t=A.K(B.cV,B.r,4)
s=A.d(j.a.c.b,i,i,i,i,i,i,D.fEG,B.K,i,i)
r=A.d("Signed by Elder "+j.gbms(),i,i,i,i,i,i,D.fDj,i,i,i)
q=x.p
p=A.a([A.d(h.a,i,i,i,i,i,i,D.fIx,i,i,i),D.eFl],q)
o=A.d(h.b,i,i,i,i,i,i,D.fKu,i,i,i)
n=j.gaqc(0)
m=j.gMX()
u=A.p(i,A.x(A.a([D.fVO,B.ax,s,r,B.T,new A.an(B.z,i,B.ad,B.t,p,i),o,B.am,A.d(""+n+" of "+m.length+" right",i,i,i,i,i,i,D.acD,i,i,i),B.P,D.au8],q),B.l,i,B.e,B.i,0,B.p),B.f,i,i,new A.o(D.qq,i,t,u,i,i,B.n),i,i,i,i,B.fu,i,i,i)
t=j.y
s=j.z
if(s===0)s=t
s=A.a([u,B.aB,new C.Iz(t,s,j.at,i)],q)
if(g.length!==0){u=A.a([B.aO,D.haJ,B.P],q)
for(t=g.length,l=0;l<g.length;g.length===t||(0,A.I)(g),++l){v=g[l]
r=new A.aP(14,14)
k=new A.ay(B.bw,1,B.r,-1)
p=m[v]
u.push(A.p(i,A.x(A.a([A.d(p.a,i,i,i,i,i,i,B.h6,i,i,i),B.ax,A.d("You said: "+p.b[w[v]],i,i,i,i,i,i,D.fFR,i,i,i),A.d(p.d,i,i,i,i,i,i,D.fI8,i,i,i)],q),B.E,i,B.e,B.i,0,B.p),B.f,i,i,new A.o(B.dq,i,new A.bH(k,k,k,k),new A.bf(r,r,r,r),i,i,B.n),i,i,i,B.cw,B.bl,i,i,i))}B.d.u(s,u)}s.push(B.aB)
s.push(A.as(C.uA("Back to the games",new C.bTr(j),B.cV,B.kb,D.fC),i,i,i))
return new C.tK("Village School",A.cw(s,i,i,B.bT,i,i,B.ah,!1),B.f7,i)}}
C.btV.prototype={
a4(a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=this.b,d=e.qe$.a
a0.Gy(e.f.MI(a1))
w=C.hfr(a1)
v=a0.c
J.bt(v.save())
v.translate(w.a,w.b)
a0.bV(0,w.c)
if(e.Q){u=e.gqA()
t=u.d<u.c.length}else t=!1
for(s=0;s<2;++s){u=D.d_O[s]-6
$.S()
r=new A.ar(B.S,B.Q,B.V,B.X,B.U)
r.r=D.Gq.gp(0)
a0.aF(new A.a4(u,340,u+12,450),r)}u=A.by(D.aaD.cr(10),B.i4)
$.S()
r=A.L()
r.r=D.BT.gp(0)
a0.aq(u,r)
r=A.by(D.aaD,B.ir)
u=A.L()
u.san(A.jG(new A.r(30,96),new A.r(420,346),D.djT,f,B.x,f))
a0.aq(r,u)
q=new A.e0()
q.cU(2)
for(p=0;p<18;++p){u=q.ai()
r=q.ai()
o=q.ai()
o=A.bX(new A.r(30+u*390,96+r*250),8+q.ai()*14,30+o*60)
r=new A.ar(B.S,B.Q,B.V,B.X,B.U)
r.r=B.c.j(0.025).gp(0)
a0.c0(o,r)}u=A.L()
u.r=I.ak7.gp(0)
a0.aF(new A.a4(30,354,420,362),u)
u=A.L()
u.r=B.aS.gp(0)
a0.aF(D.fgb,u)
u=A.L()
u.r=B.bL.gp(0)
a0.aF(D.fgf,u)
u=A.by(D.fg5,B.iF)
r=A.L()
r.r=D.a_5.gp(0)
a0.aq(u,r)
n=B.h.D((d-e.ax)/0.7,0,1)
if(e.Q){u=e.gqA().gbn8(0)
m=A.fE(f,B.cx,f,7,f,A.cS(f,f,f,f,f,f,f,f,f,D.fMM,u+(t?"|":"")),B.a7,B.c1,f,B.dK,B.c2)
m.nB(346)
J.bt(v.save())
u=A.i2(D.aaD)
r=$.mn()
v.clipRect(u,r[1],!0)
u=n<1
if(u&&e.w.length>e.x)v.clipRect(A.i2(new A.a4(30+390*n,96,420,346)),r[1],!0)
m.a4(a0,new A.r(52,118))
v.restore()
if(n>0&&u){u=30+390*n-20
r=126+40*Math.sin(n*9)
r=A.by(new A.a4(u,r,u+40,r+90),B.fR)
u=A.L()
u.r=D.byc.gp(0)
a0.aq(r,u)}}else{m=A.fE(f,B.cx,f,f,f,D.fwD,B.K,B.c1,f,B.dK,B.c2)
m.nB(340)
m.a4(a0,new A.r(55,176))}if(t)for(u=d*1.2,r=d*3,p=0;p<8;++p){l=B.h.F(u+p/8,1)
o=B.o.F(e.gqA().d*9,310)
k=Math.sin(p+r)
j=new A.ar(B.S,B.Q,B.V,B.X,B.U)
j.r=B.c.j(0.7*(1-l)).gp(0)
a0.O(new A.r(70+o+k*6,166+l*70),1.6,j)}u=e.ghd(0).gzs()
i=(u==null?f:u.c)===D.oB?1:0
h=d<e.ay
g=A.a([new A.y(470,new C.f90(d,a0,i,t,h,D.etK)),new A.y(520,new C.f91(a0,d,t)),new A.y(575,new C.f92(a0,d,t)),new A.y(585,new C.f93(this,a0,d,t)),new A.y(615,new C.f94(this,t,a0,d,h))],x.E)
B.d.b_(g,new C.f95())
for(s=0;s<5;++s)g[s].b.$0()
v.restore()},
cd2(d,e){var w,v,u,t,s,r,q,p=$.S(),o=A.a([],x.v),n=new A.aH(p.r,B.aj,null,null,o)
for(p=d.a,w=d.b,v=e*0.45,u=0;u<10;++u){t=-1.5707963267948966+u*3.141592653589793/5
s=(u&1)===0?e:v
r=p+Math.cos(t)*s
q=w+Math.sin(t)*s
if(u===0){r=new A.aZ(r,q)
o.push(r)
q=n.f
if(q!=null)r.ak(q)
n.ab()}else{r=new A.aq(r,q)
o.push(r)
q=n.f
if(q!=null)r.ak(q)
n.ab()}}n.E(new A.bx())
return n},
aE(d){return!1}}
C.amA.prototype={
S(){return new C.amB(new C.amM(),A.T(x.S,x.i),new A.eF(0,$.ax()),$,0,null,null)},
gd1(){return this.d}}
C.amB.prototype={
gkT(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.hIw(w.c,w.e)
u.d!==$&&A.bE()
u.d=v
t=v}return t},
gj2(){var w=this.z
return w===$?this.z=this.FN(0):w},
gaM5(){var w,v,u,t,s=this,r=s.Q
if(r===$){w=A.a([],x.n)
v=0
for(;;){r=s.z
if(r===$){r=s.z=s.FN(0)
u=r}else u=r
if(!(v<r.length))break
t=B.d.co(u,v)
r=s.z
w.push(450*(t+0.5)/(r===$?s.z=s.FN(0):r).length);++v}s.Q=w
r=w}return r},
FN(d){var w,v,u,t,s=this.gkT()
if(d>=s.length)return A.a([],x.t)
w=s[d].d.length
s=J.e6(w,x.S)
for(v=0;v<w;++v)s[v]=v
u=new A.e0()
u.cU(this.a.e+d*7)
B.d.e0(s,u)
if(w>1){u=A.a([],x.t)
for(v=0;v<w;++v)u.push(s[v]===v?1:0)
u=B.d.f0(u,new C.bTd())===w}else u=!1
if(u){t=s[0]
s[0]=s[1]
s[1]=t}return s},
Y(){this.a3()
this.arT()},
t(){var w,v=this
v.e.t()
w=v.M6$
w===$&&A.c()
w.t()
w=v.qe$
w.V$=$.ax()
w.R$=0
v.bwN()},
arn(d){var w,v,u,t,s,r=this,q=r.gj2().length
for(w=d*9,v=0;v<q;++v){u=r.z
t=B.d.co(u===$?r.z=r.FN(0):u,v)
s=r.gaM5()
s[v]=s[v]+(450*(t+0.5)/q-r.gaM5()[v])*Math.min(1,w)}},
d2m(d){var w,v=this
if(v.at||v.ay||d<0||d>=v.gj2().length)return
w=v.y
if(w===-1){v.m(new C.bTo(v,d))
return}if(w===d){v.m(new C.bTp(v))
return}v.m(new C.bTq(v,B.d.co(v.gj2(),v.y),d,B.d.co(v.gj2(),d)))},
cNj(d){var w,v,u,t,s=this
if(s.at||s.ay)return
w=A.a([],x.f7)
v=0
for(;;){u=s.z
if(!(v<(u===$?s.z=s.FN(0):u).length))break
t=s.gkT()[s.f]
u=s.z
w.push(t.e[(u===$?s.z=s.FN(0):u)[v]]===v);++v}s.m(new C.bTj(s,B.d.cE(w,new C.bTk())))},
kO(d){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$kO=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.f
q=t.gkT().length
w=r+1>=q?3:4
break
case 3:r=t.r
q=r===q?15:0
s=r*10+q
t.m(new C.bTl(t,s))
w=5
return A.b(C.BT(t.a.d,s),$async$kO)
case 5:t.x=f
q=t.a
w=6
return A.b(C.BU(q.d,q.c.a,"lineup",t.r*10),$async$kO)
case 6:t.ch=f
if(t.c!=null)t.m(new C.bTm())
w=1
break
case 4:t.m(new C.bTn(t))
case 1:return A.h(u,v)}})
return A.i($async$kO,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null
if(l.ay){w=A.as(A.d(""+l.r+" of "+l.gkT().length+" lines right",k,k,k,k,k,k,B.q2,k,k,k),k,k,k)
v=l.w
u=l.x
if(u===0)u=v
return new C.tK("Line Up",A.cw(A.a([D.agt,w,B.aO,new C.Iz(v,u,l.ch,k),B.aO,A.as(C.uA("Back to the games",new C.bTf(d),B.cV,B.kb,D.fC),k,k,k)],x.p),k,k,B.ac,k,k,B.ah,!1),B.f7,k)}w=A.a([],x.t)
for(t=0;v=l.gkT(),t<v[l.f].d.length;++t)w.push(t)
B.d.b_(w,new C.bTg(l))
u=A.bS(0,A.ck(new C.bTh(l)),0,0,0)
s=l.f
r=A.d("Round "+(s+1)+" of "+v.length,k,k,k,k,k,k,D.aXJ,k,k,k)
s=v[s]
q=x.p
s=A.ao(k,A.x(A.a([r,A.d(s.a,k,k,k,k,k,k,D.fF7,B.K,k,k),A.d(s.b,k,k,k,k,k,k,D.fHn,B.K,k,k)],q),B.l,k,B.e,B.i,0,B.p),k,k,12,12,4,k)
r=A.a([],q)
if(l.at){p=B.w.j(0.7)
o=A.l(16)
n=l.ax
m=A.K(n?D.lH:G.np,B.r,2)
r.push(A.p(k,A.d(n?"Yes! That is the right line. The whole village cheers.":"Not quite. The right line is: "+new A.N(w,new C.bTi(l),x.cM).aN(0,", then ")+".",k,k,k,k,k,k,D.fJA,k,k,k),B.f,k,k,new A.o(p,k,m,o,k,k,B.n),k,k,k,B.da,B.bl,k,k,1/0))}if(!l.at)r.push(C.uA("That is my line!",l.gcNi(l),B.cV,B.hd,D.fC))
else{w=l.f+1>=v.length?"See my result":"Next family"
r.push(C.uA(w,l.gqs(l),B.cV,B.jt,D.fC))}return new C.tK("Line Up",new A.an(B.a0,k,B.ad,B.t,A.a([u,s,A.ao(12,A.x(r,B.l,k,B.e,B.N,0,B.p),k,k,12,12,k,k)],q),k),B.f7,k)}}
C.bkm.prototype={
a4(c7,c8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4=null,c5=this.b,c6=c5.qe$.a
c7.Gy(c5.e.MI(c8))
w=C.hfr(c8)
v=c7.c
J.bt(v.save())
v.translate(w.a,w.b)
c7.bV(0,w.c)
u=c5.gj2().length
t=$.S().r
s=x.v
r=new A.aH(t,B.aj,c4,c4,A.a([],s))
r.E(new A.aZ(10,470))
r.E(new A.ce(225,500,440,470))
q=A.L()
q.r=D.a_5.gp(0)
q.b=B.aa
q.c=4
c7.af(r,q)
for(q=c6*3,p=0;p<12;++p){o=30+p*36
n=470+30*Math.sin(3.141592653589793*(o-10)/430)*0.95
m=Math.sin(q+p)
l=A.a([],s)
k=new A.aH(t,B.aj,c4,c4,l)
l.push(new A.aZ(o,n))
k.ab()
m=new A.aq(o+16,n+6+m*3)
l.push(m)
j=k.f
if(j!=null)m.ak(j)
k.ab()
m=new A.aq(o,n+20)
l.push(m)
j=k.f
if(j!=null)m.ak(j)
k.ab()
m=new A.bx()
l.push(m)
l=k.f
if(l!=null)m.ak(l)
k.ab()
m=new A.ar(B.S,B.Q,B.V,B.X,B.U)
m.r=[B.cV,G.np,D.lH,B.aH][B.o.F(p,4)].gp(0)
c7.af(k,m)}this.b1N(c7,"OLDEST",D.euI,B.cV)
this.b1N(c7,"YOUNGEST",D.eua,B.be)
t=A.by(D.fg_,B.fR)
s=A.L()
s.r=D.Gq.gp(0)
c7.aq(t,s)
s=A.by(D.ffZ,B.ir)
t=A.L()
t.r=D.BT.gp(0)
c7.aq(s,t)
i=c6<c5.CW
h=c6<c5.cx
g=u>=5?0.92:1.12
t=A.a([],x.t)
for(f=0;f<u;++f)t.push(f)
B.d.b_(t,new C.dsU())
for(s=t.length,q=440/u-8,m=c6*10,l=!i,k=c5.as,j=c6*9,e=c6*8,d=c6*12,a0=0;a0<t.length;t.length===s||(0,A.I)(t),++a0){f=t[a0]
a1=c5.z
a2=B.d.co(a1===$?c5.z=c5.FN(0):a1,f)
o=c5.gaM5()[f]
a3=c5.y===f
a4=a3?Math.abs(Math.sin(j))*10:0
a5=k.h(0,f)
if(a5!=null&&c6<a5)a4+=Math.sin((1-(a5-c6)/0.5)*3.141592653589793)*14
a6=c5.at&&c5.gkT()[c5.f].e[f]===a2
a7=c5.at&&!c5.ax&&!a6
a8=c5.gkT()
a9=a8[c5.f].c
b0=a9.length>f?a9[f]:f
if(l)b1=c5.at&&a6
else b1=!0
b2=Math.max(0,Math.sin(m+f))
if(a3){$.S()
a9=new A.ar(B.S,B.Q,B.V,B.X,B.U)
a9.r=B.cV.j(0.22+0.1*Math.sin(e)).gp(0)
c7.O(new A.r(o,520),54,a9)}a9=D.dnL[B.o.F(b0,6)]
if(b1)b3=1
else b3=a7?-0.4:0.35
if(b1)b4=0.4+0.4*b2
else b4=h&&a7?0.5:0
if(h&&a7)b5=1
else b5=a3?0.6:0
b6=b1?0.5:0
b7=a7?Math.sin(d)*0.5:0
b8=b1?a4+b2*8:a4
if(b1)b9=new A.r(-3-b2*8,-56)
else b9=a3?D.ewQ:c4
if(b1)c0=new A.r(3+b2*8,-56)
else if(h&&a7)c0=D.aNu
else c0=a3?new A.r(30,-104+Math.sin(e)*5):c4
C.SQ(c7,new A.r(o,612),b8,b5,(225-o)/225*0.5,-0.3,b9,c0,D.JZ,a9,b4,0,g,b3,b6,c6,b7)
a8=a8[c5.f].d[f]
c1=new A.iF(new A.et(a8,c4,c4,B.cN,c4,c4,c4,c4,c4,c4,D.fCO),B.a7,B.c1,new A.jo(1),"\u2026",c4,1,c4,B.c2,c4,B.cx)
c1.nB(q)
c2=A.by(A.bX(new A.r(o,650),24,c1.b.c+16),B.fR)
$.S()
a8=new A.ar(B.S,B.Q,B.V,B.X,B.U)
if(a6)a9=B.iz
else a9=a7?B.rW:D.qq
a8.r=a9.gp(0)
c7.aq(c2,a8)
a8=new A.ar(B.S,B.Q,B.V,B.X,B.U)
if(a6)a9=D.lH
else a9=a7?G.np:D.lG
a8.r=a9.gp(0)
a8.b=B.aa
a8.c=2
c7.aq(c2,a8)
a8=c1.b
a9=a8.c
a8=a8.a.c
c1.a4(c7,new A.r(o-a9/2,650-a8.gba(a8)/2))
c3=new A.iF(new A.et(""+(a2+1),c4,c4,B.cN,c4,c4,c4,c4,c4,c4,D.fD7),B.a7,B.c1,new A.jo(1),c4,c4,c4,c4,B.c2,c4,B.cx)
c3.ep()
c3.a4(c7,new A.r(o-c3.b.c/2,668))}if(i)for(c5=c6*2,t=c6*120,s=c6*4,p=0;p<26;++p){o=B.h.F(p*53+Math.sin(c5+p)*20,450)
q=B.h.F(t+p*37,420)
J.bt(v.save())
v.translate(o,140+q)
v.rotate((s+p)*180/3.141592653589793,0,0)
q=A.bX(B.J,4,8)
$.S()
m=new A.ar(B.S,B.Q,B.V,B.X,B.U)
m.r=[B.cV,G.np,D.lH,B.aH,B.c][B.o.F(p,5)].gp(0)
c7.aF(q,m)
v.restore()}v.restore()},
b1N(d,e,f,g){var w,v,u=null,t=A.fE(u,B.cx,u,u,u,A.cS(u,u,u,u,u,u,u,u,u,A.m(u,u,g,u,u,u,u,u,u,u,u,13,u,u,B.u,u,u,!0,u,2,u,u,u,I.DT,u,u),e),B.a7,B.c1,u,B.dK,B.c2)
t.ep()
w=t.b
v=w.c
w=w.a.c
t.a4(d,f.aJ(0,new A.r(v/2,w.gba(w)/2)))},
aE(d){return!1}}
C.a2o.prototype={
a7(){return"_Trip."+this.b}}
C.amw.prototype={
S(){return new C.amx(D.XQ,new A.eF(0,$.ax()),$,0,null,null)},
gd1(){return this.d}}
C.amx.prototype={
gDz(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.bF2(w.c,8,w.e,!1)
u.d!==$&&A.bE()
u.d=v
t=v}return t},
ghd(d){var w,v=this,u=v.e
if(u===$){w=C.Nc(v.a.c)
v.e!==$&&A.bE()
v.e=w
u=w}return u},
gqA(){var w=this.f
return w===$?this.f=new C.aLw(new C.bT_(this)):w},
gU8(){var w=this.ghd(0)
return w.gzs()==null?"Grandma":B.a.i(w.gzs().b)},
Y(){this.a3()
this.arT()},
t(){var w,v=this
v.gqA().t()
w=v.M6$
w===$&&A.c()
w.t()
w=v.qe$
w.V$=$.ax()
w.R$=0
v.bwM()},
arn(d){var w,v,u,t=this
if(t.r!==D.aeo)return
w=B.dH.az(0,B.h.D((t.cy+=d)/t.db,0,1))
v=t.cx
t.CW=v+520*w
if(t.cy>=t.db){t.CW=v+520
v=t.w
u=t.gDz()
if(v+1>=u.length){t.r=D.aep
t.X7()}else{++t.w
t.ay=!1
t.r=D.XR
t.gqA().Wa(u[t.w].a)}if(t.c!=null)t.m(new C.bSY())}},
X7(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$X7=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:u.gqA().Wa("Karibu! Welcome home, my child. You answered every stop, and the whole family is proud of you. Come, sit, the food is ready.")
t=u.x
s=u.gDz().length
r=C.bHk(t,u.z,s)
u.as=r
w=2
return A.b(C.BT(u.a.d,r),$async$X7)
case 2:u.at=e
s=u.a
w=3
return A.b(C.BU(s.d,s.c.a,"journey",u.x*10),$async$X7)
case 3:u.ch=e
if(u.c!=null)u.m(new C.bSS())
return A.h(null,v)}})
return A.i($async$X7,v)},
brY(){this.aUP()},
aUP(){var w=this
w.cx=w.CW
w.cy=0
w.db=w.ay?3.4:2.6
w.r=D.aeo
if(w.c!=null)w.m(new C.bST())},
Le(d){var w,v,u,t,s=this
if(s.r!==D.XR)return
w=s.gDz()
v=d===w[s.w].c
if(v){++s.x
u=++s.y
s.z=Math.max(s.z,u)}else{s.y=0
s.ay=!0}s.m(new C.bSX(s,d,v))
u=s.gqA()
t=s.w
u.Wa(v?"Hongera! "+w[t].d+" Beep beep, off you go!":"Pole, the tyre is flat! Listen: "+w[t].d+" We will limp on slowly.")},
cSv(){if(this.r!==D.Bq)return
this.aUP()},
B(d){var w,v,u,t=this,s=null,r=A.bS(0,new A.e8(A.b5(s,s,s,new C.bjN(t,t.qe$),B.az),s),0,0,0),q=x.p,p=A.a([],q)
for(w=0;w<=t.gDz().length;++w){v=t.w
if(w<v||t.r===D.aep)v=B.cV
else v=w===v?B.c:B.aT
u=new A.aP(4,4)
p.push(new A.bz(1,B.bd,A.p(s,s,B.f,s,s,new A.o(v,s,s,new A.bf(u,u,u,u),s,s,B.n),s,7,s,B.wK,s,s,s,s),s))}p.push(B.bn)
p.push(D.fXs)
return new C.tK("Safari Journey",new A.an(B.a0,s,B.ad,B.t,A.a([r,A.ao(s,A.A(p,B.l,s,B.e,B.i,0,s,s),s,s,12,12,2,s),A.ao(10,t.cmG(),s,s,10,10,s,s)],q),s),B.f7,s)},
cmG(){var w,v,u,t,s,r,q,p,o=this,n=null,m=new C.bSW(o),l=D.qq.j(0.96),k=A.l(22),j=A.K(B.cV,B.r,3)
switch(o.r.a){case 0:w=A.x(A.a([A.d("A long drive to the village of Elder "+o.gU8()+". At every stop a villager asks you something about the family. Answer well and the bus flies. Get it wrong and a tyre goes flat!",n,n,n,n,n,n,D.aXH,B.K,n,n),B.T,C.uA("Start the journey",o.gbrX(),B.cV,D.bT2,D.fC)],x.p),B.l,n,B.e,B.N,0,B.p)
break
case 3:w=D.beM
break
case 1:w=o.w
v=o.gDz()
w=m.$1("Stop "+(w+1)+" of "+v.length+" \xb7 a villager asks")
u=x.p
t=A.a([],u)
for(s=0;r=v[o.w].b,s<r.length;++s){q=new A.aP(14,14)
p=new A.ay(D.lG,2.5,B.r,-1)
t.push(A.az(n,A.p(n,A.d(r[s],n,n,n,n,n,n,D.aX2,B.K,n,n),B.f,n,D.afJ,new A.o(D.alg,n,new A.bH(p,p,p,p),new A.bf(q,q,q,q),n,n,B.n),n,n,n,n,V.wE,n,n,n),B.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.bSU(o,s),n,n,n,n,n,n,!1,B.a4))}w=A.x(A.a([w,B.P,A.c_(B.bI,t,B.br,n,8,8)],u),B.E,n,B.e,B.N,0,B.p)
break
case 2:w=m.$1(o.ax?"The villager cheers":"A flat tyre!")
v=o.w+1>=o.gDz().length?"Drive home":"Drive on"
v=A.x(A.a([w,B.P,new A.bK(B.a9,n,n,C.uA(v,o.gcSu(),B.cV,B.jt,D.fC),n)],x.p),B.E,n,B.e,B.N,0,B.p)
w=v
break
case 4:w=A.a([m.$1("Elder "+o.gU8()),B.P,A.d(""+o.x+" of "+o.gDz().length+" right  \xb7  +"+o.as+" \u2b50",n,n,n,n,n,n,D.aXk,n,n,n)],x.p)
v=o.at
if(v>0){v=C.aRy(v)
u=C.aRy(o.at)
t=o.at
r=o.ch?" \xb7 \ud83c\udfc6 new record!":""
w.push(A.d(v.b+" "+u.a+" \xb7 "+t+" stars"+r,n,n,n,n,n,n,D.acD,n,n,n))}w.push(B.P)
w.push(A.as(C.uA("Back to the games",new C.bSV(o),B.cV,B.kb,D.fC),n,n,n))
w=A.x(w,B.E,n,B.e,B.N,0,B.p)
break
default:w=n}return A.p(n,w,B.f,n,n,new A.o(l,n,j,k,D.aEE,n,B.n),n,n,n,n,B.bl,n,n,n)}}
C.bjN.prototype={
a4(d3,d4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3=null,c4=this.b,c5=c4.qe$.a,c6=d4.a,c7=d4.b,c8=c4.CW,c9=c4.gDz(),d0=B.h.D(c8/(520*(c9.length+1)),0,1),d1=c4.r===D.aeo,d2=c7*0.5
c8=A.ap(D.bjE,D.but,d0)
c8.toString
w=A.ap(D.Zd,G.aiU,d0)
w.toString
v=A.ap(B.ur,D.bsP,d0)
v.toString
$.S()
u=A.L()
t=x.O
u.san(A.jG(B.J,new A.r(0,d2),A.a([c8,w,v],t),G.a5j,B.x,c3))
d3.aF(new A.a4(0,0,0+c6,0+c7),u)
s=new A.r(c6*(0.15+0.7*d0),d2*(0.28+0.45*d0*d0))
u=A.L()
u.san(A.wg(s,60,A.a([D.btd,B.L],t),c3,B.x,c3,c3,0))
d3.O(s,60,u)
u=A.L()
u.r=B.Zr.gp(0)
d3.O(s,22,u)
for(c8=c5*4,w=c6+240,v=c7*0.06,r=0;r<5;++r){q=B.h.F(r*190-c4.CW*0.06-c8,w)-120
p=v+B.o.F(r,3)*22
for(o=0;o<4;++o){n=D.dDx[o]
$.S()
u=new A.ar(B.S,B.Q,B.V,B.X,B.U)
u.r=B.c.j(0.75).gp(0)
d3.O(new A.r(q+n.a,p+n.b),18,u)}}for(w=d0*0.7,v=d2+4,u=d2-16,m=x.v,l=0;l<2;++l){k=$.S()
j=A.a([],m)
i=new A.aH(k.r,B.aj,c3,c3,j)
j.push(new A.aZ(0,v))
i.ab()
for(k=u-l*12,h=0.12+l*0.1,g=70+l*30,f=14-l*3,q=0;q<=c6;q+=6){e=new A.aq(q,k+Math.sin((q+c4.CW*h)/g)*f)
j.push(e)
d=i.f
if(d!=null)e.ak(d)
i.ab()}k=new A.aq(c6,v)
j.push(k)
j=i.f
if(j!=null)k.ak(j)
i.ab()
$.S()
k=new A.ar(B.S,B.Q,B.V,B.X,B.U)
k.r=A.ap(l===0?D.bia:D.bxC,D.bnh,w).gp(0)
d3.af(i,k)}for(w=d2+2,r=0;r<8;++r)this.cd3(d3,new A.r(B.h.F(B.h.F(r*300-c4.CW*0.5,2400)+2400,2400)-150,w),(r&1)===0,d0)
$.S()
w=A.L()
v=A.ap(D.akr,D.GE,d0)
v.toString
w.san(A.jG(new A.r(0,d2),new A.r(0,c7),A.a([v,D.btf],t),c3,B.x,c3))
d3.aF(new A.a4(0,d2,c6,c7),w)
a0=c7*0.56
a1=c7*0.66
w=A.L()
w.r=D.bmw.gp(0)
d3.aF(new A.a4(0,a0,c6,a1),w)
w=A.L()
w.r=D.bxd.gp(0)
d3.aF(new A.a4(0,a0-3,c6,a0),w)
for(q=-B.h.F(c4.CW,70),w=(a0+a1)/2-2,v=w+4;q<c6;q+=70){u=new A.ar(B.S,B.Q,B.V,B.X,B.U)
u.r=I.Nc.gp(0)
d3.aF(new A.a4(q,w,q+36,v),u)}for(w=a0-6,v=w-36,u=v+36,t=w-34,k=c6*0.62,j=c6+160,h=c5*3,g=c5*6,f=w+40,e=w-20,d=e+20,a2=w-56,a3=a2+56,a4=w-66,a5=a4+20,a6=w-72,r=0;a7=c9.length,r<=a7;r=a8){a8=r+1
q=k+a8*520-c4.CW
if(q<-160||q>j)continue
a7=r===a7
a9=q+40
b0=a9-26
b1=$.S()
b2=new A.ar(B.S,B.Q,B.V,B.X,B.U)
b2.r=D.bhP.gp(0)
d3.aF(new A.a4(b0,v,b0+52,u),b2)
b2=A.a([],m)
b1=new A.aH(b1.r,B.aj,c3,c3,b2)
b2.push(new A.aZ(a9-36,t))
b1.ab()
b0=new A.aq(a9,a6)
b2.push(b0)
b3=b1.f
if(b3!=null)b0.ak(b3)
b1.ab()
b0=new A.aq(a9+36,t)
b2.push(b0)
b3=b1.f
if(b3!=null)b0.ak(b3)
b1.ab()
b0=new A.bx()
b2.push(b0)
b2=b1.f
if(b2!=null)b0.ak(b2)
b1.ab()
b0=new A.ar(B.S,B.Q,B.V,B.X,B.U)
b0.r=D.bvm.gp(0)
d3.af(b1,b0)
b0=a9-6
b1=new A.ar(B.S,B.Q,B.V,B.X,B.U)
b1.r=D.fC.gp(0)
d3.aF(new A.a4(b0,e,b0+12,d),b1)
b4=q-36
b1=b4-2
b0=new A.ar(B.S,B.Q,B.V,B.X,B.U)
b0.r=D.Gq.gp(0)
d3.aF(new A.a4(b1,a2,b1+4,a3),b0)
b0=b4-30
b5=A.by(new A.a4(b0,a4,b0+60,a5),B.jy)
b0=new A.ar(B.S,B.Q,B.V,B.X,B.U)
b0.r=D.byI.gp(0)
d3.aq(b5,b0)
b0=new A.ar(B.S,B.Q,B.V,B.X,B.U)
b0.r=D.BT.gp(0)
b0.b=B.aa
b0.c=2
d3.aq(b5,b0)
b6=a7?"HOME":"STOP "+a8
b7=new A.iF(new A.et(b6,c3,c3,B.cN,c3,c3,c3,c3,c3,c3,D.fBe),B.a7,B.c1,new A.jo(1),c3,c3,c3,c3,B.c2,c3,B.cx)
b7.ep()
b0=b7.b
b1=b0.c
b0=b0.a.c
b7.a4(d3,new A.r(b4-b1/2,a2-b0.gba(b0)/2))
if(a7)b8=c4.r===D.aep
else if(r===c4.w){b0=c4.r
b0=b0===D.XR||b0===D.Bq
b8=b0}else b8=!1
if(a7){b0=c4.ghd(0).gzs()
b9=(b0==null?c3:b0.c)===D.oB?1:0}else b9=[0,3,6,7,2,1,4,5][B.o.F(r,8)]
b0=c4.gqA()
c0=b0.d<b0.c.length&&b8
c1=b8&&c4.r===D.Bq
b0=c0?C.hEz(c5,r):0
if(c1)b1=c4.ax?1:-0.3
else b1=a7&&b8?1:0.4
b2=b8&&c4.r===D.XR?0.4:0
b3=c1&&c4.ax?0.5:0
if(a7&&b8)a7=new A.r(40,-110+Math.sin(g)*10)
else a7=c0?new A.r(44+Math.sin(h)*8,-66+Math.sin(c8)*10):c3
C.SQ(d3,new A.r(q+4,f),0,b2,-0.8,-0.2,c3,a7,new A.r(q-200,w),b9,b0,0,0.85,b1,b3,c5+r,-0.3)}c9=c6*0.28
this.bJ4(d3,new A.r(c9,a1-6),c5,d1,d4)
if(d1)for(w=c5*1.6,v=c9-90,u=a1-10,r=0;r<7;++r){c2=B.h.F(w+r/7,1)
$.S()
t=new A.ar(B.S,B.Q,B.V,B.X,B.U)
t.r=D.bwI.j(0.5*(1-c2)).gp(0)
d3.O(new A.r(v-c2*70,u-c2*18),6+c2*16,t)}if(c4.ay&&c4.r!==D.XQ)for(w=c5*1.2,v=c9+62,u=a1-40,r=0;r<5;++r){c2=B.h.F(w+r/5,1)
t=Math.sin(r+c8)
$.S()
m=new A.ar(B.S,B.Q,B.V,B.X,B.U)
m.r=B.c.j(0.5*(1-c2)).gp(0)
d3.O(new A.r(v+t*5,u-c2*50),4+c2*10,m)}if(c4.r===D.Bq&&c4.ax){b7=A.fE(c3,B.cx,c3,c3,c3,A.cS(c3,c3,c3,c3,c3,c3,c3,c3,c3,A.m(c3,c3,B.cV,c3,c3,c3,c3,c3,c3,c3,c3,24,c3,c3,B.u,c3,c3,!0,c3,c3,c3,c3,c3,A6.IX,c3,c3),"BEEP BEEP!"),B.a7,B.c1,c3,B.dK,B.c2)
b7.ep()
b7.a4(d3,new A.r(c9-b7.b.c/2+40,a0-96-Math.abs(Math.sin(c5*9))*6))}},
cd3(d,e,f,g){var w,v,u,t,s,r,q,p,o=A.ap(D.bsJ,D.blQ,g)
o.toString
if(f){w=new A.aH($.S().r,B.aj,null,null,A.a([],x.v))
v=e.a
u=e.b
w.E(new A.aZ(v-16,u))
t=u-36
s=u-56
w.E(new A.ce(v-9,t,v-7,s))
w.E(new A.aq(v+7,s))
w.E(new A.ce(v+9,t,v+16,u))
w.E(new A.bx())
t=A.L()
t.r=D.a_C.gp(0)
d.af(w,t)
for(w=v+0,t=u+-54,s=u+-72,u+=-76,r=0;r<4;++r){q=D.d3Q[r]
p=new A.ar(B.S,B.Q,B.V,B.X,B.U)
p.r=D.a_C.gp(0)
p.c=4
p.d=B.bG
d.ah(new A.r(w,t),new A.r(v+q*24,s),p)
p=new A.ar(B.S,B.Q,B.V,B.X,B.U)
p.r=o.gp(0)
d.O(new A.r(v+q*26,u),10,p)}}else{w=e.a5(0,D.ewN)
$.S()
v=A.L()
v.r=D.bhR.gp(0)
v.c=4
d.ah(e,w,v)
v=A.bX(e.a5(0,D.ewO),16,60)
w=A.L()
w.r=o.gp(0)
d.c0(v,w)}},
bJ4(a2,a3,a4,a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a5?Math.sin(a4*22)*1.6:Math.sin(a4*2)*0.4,d=this.b,a0=d.ay&&d.r!==D.XQ?0.045:0,a1=a2.c
J.bt(a1.save())
a1.translate(a3.a,a3.b+e)
a2.jq(0,a0)
for(w=0;w<2;++w){v=D.dvC[w]
u=d.ay&&d.r!==D.XQ&&v>0
J.bt(a1.save())
a1.translate(v,-4+(u?4:0))
t=u?15:18
$.S()
s=new A.ar(B.S,B.Q,B.V,B.X,B.U)
s.r=D.bxt.gp(0)
a2.O(B.J,t,s)
a1.rotate(d.CW/18*180/3.141592653589793,0,0)
s=new A.ar(B.S,B.Q,B.V,B.X,B.U)
s.r=D.bpq.gp(0)
a2.O(B.J,9,s)
for(r=0;r<4;++r){t=r*3.141592653589793/2
s=Math.cos(t)
t=Math.sin(t)
q=new A.ar(B.S,B.Q,B.V,B.X,B.U)
q.r=B.bj.gp(0)
q.c=2
a2.ah(B.J,new A.r(s*9,t*9),q)}a1.restore()}p=A.u8(D.fgm,B.fR,B.fR,B.iq,B.hU)
$.S()
t=A.L()
t.san(A.jG(D.esQ,B.a9y,D.dlg,G.a5j,B.x,f))
a2.aq(p,t)
for(o=0;o<20;++o){t=-100+o*10
s=new A.ar(B.S,B.Q,B.V,B.X,B.U)
s.r=D.df8[B.o.F(o,4)].gp(0)
a2.aF(new A.a4(t,-26,t+10,-19),s)}n=d.r===D.Bq&&d.ax
m=[2,3,4,5]
for(t=a4*10,o=0;o<4;++o){s=-88+o*38
q=s+32
l=new A.a4(s,-66,q,-36)
J.bt(a1.save())
a1.clipRRect(A.n6(A.by(l,B.nZ)),$.mK(),!0)
k=new A.ar(B.S,B.Q,B.V,B.X,B.U)
k.r=D.Zd.gp(0)
a2.aF(l,k)
k=m[o]
j=n?1:0.35
i=n?0.5:0
h=d.ay&&d.r===D.Bq?1:0
g=n?Math.max(0,Math.sin(t+o))*6:0
C.SQ(a2,new A.r(s+(q-s)/2,-10),g,h,0.5,-0.2,f,f,D.aNl,k,i,0,0.4,j,0,a4,0)
a1.restore()
j=A.by(l,B.nZ)
i=new A.ar(B.S,B.Q,B.V,B.X,B.U)
i.r=D.ali.gp(0)
i.b=B.aa
i.c=2
a2.aq(j,i)}d=A.by(D.Vc,B.nZ)
t=A.L()
t.r=D.Zd.gp(0)
a2.aq(d,t)
J.bt(a1.save())
a1.clipRRect(A.n6(A.by(D.Vc,B.nZ)),$.mK(),!0)
C.SQ(a2,new A.r(D.Vc.gbE().a,-10),0,0,0.7,-0.1,f,f,D.aNl,6,0,0,0.4,0.5,0,a4,0)
a1.restore()
t=A.by(D.Vc,B.nZ)
d=A.L()
d.r=D.ali.gp(0)
d.b=B.aa
d.c=2
a2.aq(t,d)
d=A.L()
d.r=Am.Ci.gp(0)
a2.O(D.euX,4,d)
d=A.L()
d.r=D.Gq.gp(0)
a2.aF(D.fhv,d)
for(w=0;w<3;++w){v=D.dvE[w]
d=A.by(new A.a4(v,-96,v+28,-79),B.jy)
t=new A.ar(B.S,B.Q,B.V,B.X,B.U)
t.r=D.GE.gp(0)
a2.aq(d,t)}a1.restore()},
aE(d){return!1}}
C.aCf.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbC())
w.a9$=null
w.a2()},
aX(){this.b8()
this.b5()
this.bD()}}
C.bhk.prototype={}
C.aCh.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbC())
w.a9$=null
w.a2()},
aX(){this.b8()
this.b5()
this.bD()}}
C.bhl.prototype={}
C.aCi.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbC())
w.a9$=null
w.a2()},
aX(){this.b8()
this.b5()
this.bD()}}
C.bhm.prototype={}
C.a6S.prototype={
B(d){var w=null
return new A.a5(1/0,this.c,A.b5(w,w,w,new C.bjU(w),B.az),w)}}
C.bjU.prototype={
a4(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=a0.b,e=f*1.1
for(w=a0.a,v=e+0.5,u=0+f,t=e*0.15,s=f/2,r=e/2,q=f*0.8,p=e*0.85,o=x.v,f*=0.2,n=0,m=0;m<w;m+=e){l=D.dtw[B.o.F(n,6)]
k=$.S()
j=new A.ar(B.S,B.Q,B.V,B.X,B.U)
j.r=l.gp(0)
d.aF(new A.a4(m,0,m+v,u),j)
if(B.o.F(n,3)===0){j=A.a([],o)
i=new A.aH(k.r,B.aj,null,null,j)
k=m+r
j.push(new A.aZ(k,f))
i.ab()
h=new A.aq(m+p,s)
j.push(h)
g=i.f
if(g!=null)h.ak(g)
i.ab()
k=new A.aq(k,q)
j.push(k)
h=i.f
if(h!=null)k.ak(h)
i.ab()
k=new A.aq(m+t,s)
j.push(k)
h=i.f
if(h!=null)k.ak(h)
i.ab()
k=new A.bx()
j.push(k)
j=i.f
if(j!=null)k.ak(j)
i.ab()
k=new A.ar(B.S,B.Q,B.V,B.X,B.U)
k.r=B.c.j(0.85).gp(0)
d.af(i,k)}++n}},
aE(d){return!1}}
C.tK.prototype={
B(d){var w=null,v=x.p,u=A.a([A.aI(w,w,w,w,B.Qx,w,w,w,new C.bSR(d),w,w,w,w,w,w),A.E(A.d(this.c,w,1,B.a2,w,w,w,D.fyw,w,w,w),1)],v)
B.d.u(u,this.e)
return A.c6(w,D.YY,A.p(w,A.bn(!0,A.x(A.a([D.c7S,new A.D(D.bJS,A.A(u,B.l,w,B.e,B.i,0,w,w),w),A.E(this.d,1)],v),B.l,w,B.e,B.i,0,B.p),!0,!1,B.ag,!0,!0),B.f,w,w,D.ba2,w,w,w,w,w,w,w,w),w,!1,!1,w,w)}}
C.Iz.prototype={
B(d){var w=null,v=this.d,u=C.aRy(v),t=C.imJ(v),s=B.c.j(0.08),r=A.l(18),q=A.K(B.cV.j(0.6),B.r,1.5),p=A.a([A.d("+"+this.c+" \u2b50 Family Stars",w,w,w,w,w,w,D.fB_,w,w,w)],x.p)
if(this.e)p.push(D.eze)
p.push(B.am)
p.push(A.d(u.b+" "+u.a+"  \xb7  "+v+" stars",w,w,w,w,w,w,B.h6,w,w,w))
if(t!=null)p.push(new A.D(B.uK,A.d(""+(t.c-v)+" more stars for "+t.b+" "+t.a,w,w,w,w,w,w,B.Fa,w,w,w),w))
return A.p(w,A.x(p,B.l,w,B.e,B.i,0,B.p),B.f,w,w,new A.o(s,w,q,r,w,w,B.n),w,w,w,w,B.bH,w,w,w)}}
C.WA.prototype={
S(){return new C.bmH(A.T(x.N,x.S),B.o.F(Date.now(),1e5))},
cZo(d){return this.f.$1(d)},
ge3(){return this.d}}
C.bmH.prototype={
gT7(){var w=this.d
return w===$?this.d=this.a.c:w},
Y(){this.a3()
this.PJ()},
PJ(){var w=0,v=A.j(x.H),u=this,t,s,r,q,p,o,n,m,l
var $async$PJ=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(C.bTC(u.a.d),$async$PJ)
case 2:n=e
t=u.f,s=0
case 3:if(!(s<8)){w=5
break}r=D.djg[s]
q=u.a
p=q.d
o=u.d
m=t
l=r
w=6
return A.b(C.bTB(p,(o===$?u.d=q.c:o).a,r),$async$PJ)
case 6:m.n(0,l,e)
case 4:++s
w=3
break
case 5:if(u.c!=null)u.m(new C.e3g(u,n))
return A.h(null,v)}})
return A.i($async$PJ,v)},
uD(d){return this.cpJ(d)},
cpJ(d){var w=0,v=A.j(x.H),u=this,t
var $async$uD=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return A.b(A.a6(t,!1).ce(A.ef(new C.e3h(d),!1,null,x.H)),$async$uD)
case 2:u.r=B.o.F(Date.now(),1e5)
if(u.c!=null)u.PJ()
return A.h(null,v)}})
return A.i($async$uD,v)},
gb76(){var w,v,u,t=C.Nc(this.gT7()),s=A.a([],x.s)
for(w=t.b,v=w.length,u=0;u<w.length;w.length===v||(0,A.I)(w),++u)s.push(B.a.i(w[u].b))
return s},
a2N(d){return this.cwY(d)},
cwY(d){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$a2N=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=A.a([],x.Y)
for(t=d.length,s=0;s<d.length;d.length===t||(0,A.I)(d),++s)r.push(d[s].aj())
w=2
return A.b(u.a.cZo(r),$async$a2N)
case 2:if(u.c!=null)u.m(new C.e3i(u,r))
return A.h(null,v)}})
return A.i($async$a2N,v)},
P1(d){return this.bRP(d)},
bRP(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j
var $async$P1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:j=C.hhP(t.gT7())
if(d==null){s=Date.now()
r=A.a([],x.b)
q=new C.MX("g"+s,"",r)}else q=d
s=t.c
s.toString
r=x.fH
w=3
return A.b(A.a6(s,!1).ce(A.ef(new C.e3e(q),!1,null,r)),$async$P1)
case 3:p=f
if(p==null){w=1
break}s=A.a([],x.c)
for(o=j.length,n=p.a,m=0;m<j.length;j.length===o||(0,A.I)(j),++m){l=j[m]
if(l.a!==n)s.push(l)}k=B.d.bk(j,new C.e3f(p))
o=s.length
B.d.ca(s,k<0?o:Math.min(k,o),p)
w=4
return A.b(t.a2N(A.cY(s,0,A.dD(2,"count",x.S),r).dq(0)),$async$P1)
case 4:case 1:return A.h(u,v)}})
return A.i($async$P1,v)},
Y3(d,e){return this.bPo(0,e)},
bPo(d,e){var w=0,v=A.j(x.H),u=this,t,s,r,q,p,o
var $async$Y3=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:o=u.c
o.toString
w=4
return A.b(A.cg(null,null,!0,null,new C.e3d(e),o,null,!0,!0,x.y),$async$Y3)
case 4:w=g===!0?2:3
break
case 2:o=A.a([],x.c)
for(t=C.hhP(u.gT7()),s=t.length,r=e.a,q=0;q<t.length;t.length===s||(0,A.I)(t),++q){p=t[q]
if(p.a!==r)o.push(p)}w=5
return A.b(u.a2N(o),$async$Y3)
case 5:case 3:return A.h(null,v)}})
return A.i($async$Y3,v)},
aas(d,e,f,g,h,i,j){var w,v,u,t,s,r,q,p=null,o=h==null,n=o?new C.e3a(this,j):h
o=o?0.55:1
w=A.ap(g,B.w,0.45)
w.toString
w=A.a([g,w],x.O)
v=A.l(20)
u=A.K(B.aT,B.r,1)
t=A.a([new A.ab(0,B.G,g.j(0.35),B.cz,12)],x.V)
s=x.p
r=A.a([A.d(d,p,p,p,p,p,p,B.W1,p,p,p),B.b4],s)
q=A.l(10)
r.push(A.p(p,A.d(i,p,p,p,p,p,p,D.fzp,p,p,p),B.f,p,p,new A.o(B.hN,p,p,q,p,p,B.n),p,p,p,p,B.z8,p,p,p))
return A.az(p,A.d3(A.p(p,A.x(A.a([A.A(r,B.l,p,B.e,B.i,0,p,p),B.b4,A.d(e,p,2,p,p,p,p,D.fHg,p,p,p),B.cS,A.d(f,p,3,B.a2,p,p,p,D.fA7,p,p,p)],s),B.E,p,B.e,B.i,0,B.p),B.f,p,p,new A.o(p,p,u,v,t,new A.a7(B.ay,B.aC,B.x,w,p,p),B.n),p,p,p,p,B.z_,p,p,p),o),B.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,n,p,p,p,p,p,p,!1,B.a4)},
Xx(d,e,f,g,h,i){return this.aas(d,e,f,g,h,i,null)},
B(a2){var w,v,u,t,s=this,r=null,q=C.Nc(s.gT7()),p=s.gT7(),o=C.aRy(s.e),n=C.hhP(p),m=s.a.e&&J.ad(p.z)<2,l=new C.e3j(s),k=C.hIw(p,1).length,j=C.hIH(p,1).length,i=C.hJB(p,1).length,h=B.c.j(0.07),g=A.l(20),f=A.K(B.cV.j(0.5),B.r,1),e=A.d(o.b,r,r,r,r,r,r,K.acr,r,r,r),d=A.d(o.a,r,r,r,r,r,r,D.fEK,r,r,r),a0=q.b.length,a1=x.p
g=A.p(r,A.A(A.a([e,B.bc,A.E(A.x(A.a([d,A.d(a0>=3?"The games are made from the "+a0+" people in this tree.":"Add at least 3 people to the tree for games about your own family. Until then the elders teach culture.",r,r,r,r,r,r,B.Wj,r,r,r)],a1),B.E,r,B.e,B.i,0,B.p),1),A.x(A.a([A.d(""+s.e,r,r,r,r,r,r,B.q2,r,r,r),D.h2L],a1),B.l,r,B.e,B.i,0,B.p)],a1),B.l,r,B.e,B.i,0,r,r),B.f,r,r,new A.o(h,r,f,g,r,r,B.n),r,r,r,r,B.bH,r,r,r)
f=s.Xx("\ud83c\udfaf","Family Kahoot","Race the clock. Answer fast, keep a streak, climb the podium against your family.",B.aD,new C.e3k(s,p),l.$1("kahoot"))
h=s.Xx("\ud83d\udd25","Fireside Stories","Sit by the fire in the village. The elder teaches, the children answer.",D.lG,new C.e3l(s,p),l.$1("fire"))
a0=s.Xx("\ud83e\uddfa","Calabash Catch","Gourds with the answers fall from the baobab. Slide the basket under the right one!",B.ws,new C.e3m(s,p),l.$1("catch"))
j=j!==0?new C.e3p(s,p):r
j=s.aas("\ud83c\udf31","Plant the Tree","Drag the children onto the branches under their parent and watch the tree grow.",B.hK,j,l.$1("plant"),"Add a parent with two children, and one more person.")
i=i!==0?new C.e3q(s,p):r
i=s.aas("\ud83c\udfad","Who Am I?","A shadow turns into a face as the clues come. Who is hiding in it?",B.lF,i,l.$1("who"),"Add at least 3 people with some facts about them (parents, jobs, birthplaces).")
e=s.Xx("\ud83d\ude8c","Safari Journey","Ride a bus across the savanna to the elder village. A villager asks a question at every stop. A wrong answer is a flat tyre!",B.fn,new C.e3r(s,p),l.$1("journey"))
k=k!==0?new C.e3s(s,p):r
k=A.a([g,B.aO,D.h6N,B.P,A.l4(0.98,A.a([f,h,a0,j,i,e,s.aas("\ud83c\udf33","Line Up","The family stands under the baobab. Swap them into a line, oldest to youngest.",B.ep,k,l.$1("lineup"),"Add a parent with two children, or a family with more than one generation."),s.Xx("\ud83c\udfeb","Village School","Sit with the children while the elder writes the questions on the chalkboard. A real test with a report card.",B.d6,new C.e3t(s,p),l.$1("school"))],a1),2,12,12,r,B.e0,!0),B.db,A.A(A.a([D.bLH,A.d(""+n.length+" of 2",r,r,r,r,r,r,D.fzt,r,r,r)],a1),B.l,r,B.e,B.i,0,r,r),B.P],a1)
for(j=n.length,w=0;i=n.length,w<i;n.length===j||(0,A.I)(n),++w){v=n[w]
i=B.c.j(0.07)
h=new A.aP(18,18)
u=new A.ay(B.aT,1,B.r,-1)
g=B.a.i(v.b)
g=A.a([D.fOl,B.bc,new A.bz(1,B.bd,A.x(A.a([A.d(g.length===0?"Untitled game":g,r,1,B.a2,r,r,r,B.hu,r,r,r),A.d(""+v.gapR(0).length+" questions \xb7 Kahoot style",r,r,r,r,r,r,B.Fa,r,r,r)],a1),B.E,r,B.e,B.i,0,B.p),r)],a1)
if(v.gapR(0).length>=2){f=D.lH.j(0.2)
t=new A.ay(D.lH,1,B.r,-1)
g.push(A.az(r,A.p(r,A.X(B.he,D.lH,r,r,r,20),B.f,r,r,new A.o(f,r,new A.bH(t,t,t,t),r,r,r,B.a6),r,38,r,r,r,r,r,38),B.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new C.e3u(s,v,p),r,r,r,r,r,r,!1,B.a4))}if(s.a.e){f=B.cV.j(0.2)
t=new A.ay(B.cV,1,B.r,-1)
f=A.az(r,A.p(r,A.X(B.jb,B.cV,r,r,r,20),B.f,r,r,new A.o(f,r,new A.bH(t,t,t,t),r,r,r,B.a6),r,38,r,r,r,r,r,38),B.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new C.e3v(s,v),r,r,r,r,r,r,!1,B.a4)
e=B.fj.j(0.2)
t=new A.ay(B.fj,1,B.r,-1)
B.d.u(g,A.a([B.bn,f,B.bn,A.az(r,A.p(r,A.X(B.ej,B.fj,r,r,r,20),B.f,r,r,new A.o(e,r,new A.bH(t,t,t,t),r,r,r,B.a6),r,38,r,r,r,r,r,38),B.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new C.e3w(s,v),r,r,r,r,r,r,!1,B.a4)],a1))}k.push(A.p(r,new A.c8(B.aM,B.e,B.i,B.l,r,B.p,r,0,g,r),B.f,r,r,new A.o(i,r,new A.bH(u,u,u,u),new A.bf(h,h,h,h),r,r,B.n),r,r,r,B.da,B.bl,r,r,r))}if(s.a.e){j=m?new C.e3n(s):new C.e3o(a2)
i=A.l(18)
h=A.K(m?B.cV:B.aT,B.r,2)
g=m?B.cV.j(0.12):B.dq
f=m?"\uff0b Make your own game  ("+(2-n.length)+" left)":"Both games are made"
k.push(A.az(r,A.p(r,A.as(A.d(f,r,r,r,r,r,r,A.m(r,r,m?B.cV:B.aE,r,r,r,r,r,r,r,r,15,r,r,B.u,r,r,!0,r,r,r,r,r,r,r,r),r,r,r),r,r,r),B.f,r,r,new A.o(g,r,h,i,r,r,B.n),r,r,r,r,B.Os,r,r,r),B.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,j,r,r,r,r,r,r,!1,B.a4))}else if(i===0)k.push(D.h7J)
k.push(B.aB)
k.push(D.au8)
return new C.tK("Family Games \xb7 "+p.b,A.cw(k,r,r,D.bFS,r,r,B.ah,!1),B.f7,r)}}
C.a0h.prototype={
a7(){return"_KPhase."+this.b}}
C.amy.prototype={
S(){return new C.amz(D.b1X)},
gd1(){return this.e}}
C.amz.prototype={
t(){var w=this.at
if(w!=null)w.a1(0)
w=this.ax
if(w!=null)w.a1(0)
this.a2()},
fX(d){var w,v=this
v.m(new C.bTb(v))
w=v.at
if(w!=null)w.a1(0)
v.at=A.dh(B.fM,new C.bTc(v))},
aQj(){var w=this,v=w.ax
if(v!=null)v.a1(0)
w.m(new C.bT1(w))
v=w.at
if(v!=null)v.a1(0)
w.at=A.dh(B.fh,new C.bT2(w))},
Le(d){var w
if(this.d!==D.adT)return
w=this.at
if(w!=null)w.a1(0)
this.b72(d)},
b72(d){var w,v=this,u={},t=v.a.w[v.e]
u.a=0
if(d===t.c){w=++v.r
v.w=Math.max(v.w,w);++v.x
w=B.h.U(500+500*B.h.D(v.as/t.r,0,1))+100*Math.min(w-1,5)
u.a=w
v.f+=w}else v.r=0
v.m(new C.bT7(u,v,d))
u=v.ax
if(u!=null)u.a1(0)
v.ax=A.cz(B.t2,v.giB(v))},
cLW(d){var w=this
if(w.d!==D.Xn)return
if(w.e+1>=w.a.w.length)w.YQ()
else{w.m(new C.bT8(w))
w.aQj()}},
YQ(){var w=0,v=A.j(x.H),u=this,t,s,r,q,p
var $async$YQ=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=u.ax
if(p!=null)p.a1(0)
p=u.x
t=u.a.w.length
s=C.bHk(p,u.w,t)
u.m(new C.bT4(u,s))
w=2
return A.b(C.BT(u.a.e,s),$async$YQ)
case 2:r=e
t=u.a
w=3
return A.b(C.BU(t.e,t.f,t.r,u.f),$async$YQ)
case 3:q=e
if(u.c!=null)u.m(new C.bT5(u,r,q))
return A.h(null,v)}})
return A.i($async$YQ,v)},
cML(){var w,v,u,t,s=this,r=s.a,q=new A.e0()
q.cU(r.w.length*31+B.a.gX(r.f))
w=s.a.w.length*900
v=A.a([new A.b3("You",s.f,!0)],x.bd)
r=A.C(s.a.x,x.N)
B.d.e0(r,q)
for(r=A.cY(r,0,A.dD(4,"count",x.S),A.U(r).c),u=r.$ti,r=new A.bR(r,r.gJ(0),u.k("bR<ak.E>")),u=u.k("ak.E");r.C();){t=r.d
if(t==null)t=u.a(t)
v.push(new A.b3(t,B.h.U(w*(0.35+q.ai()*0.5)),!1))}B.d.b_(v,new C.bT9())
return v},
B(d){var w,v,u=this,t=null,s=u.a.c,r=u.d
A:{if(D.b1X===r){w=A.a([D.h39,B.T,A.d(s,t,t,t,t,t,t,B.Wt,B.K,t,t)],x.p)
v=u.a.d
if(v.length!==0)w.push(A.d(v,t,t,t,t,t,t,D.fzB,t,t,t))
w.push(B.aB)
w.push(A.d(""+u.a.w.length+" questions. The faster you answer, the more points you win. Keep a streak for a bonus.",t,t,t,t,t,t,B.Ba,B.K,t,t))
w.push(B.e4)
w.push(C.uA("Play",u.geX(u),B.cV,B.he,D.fC))
w=A.as(new A.D(B.eA,A.x(w,B.l,t,B.e,B.N,0,B.p),t),t,t,t)
break A}if(D.b1Y===r){w=A.as(A.d(""+u.z,t,t,t,t,t,t,D.fHO,t,t,t),t,t,t)
break A}if(D.adT===r||D.Xn===r){w=u.csk()
break A}if(D.b1Z===r){w=u.cd4()
break A}w=t}return new C.tK(s,w,B.f7,t)},
csk(){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=k.d===D.Xn,h=k.y,g=k.a.w,f=k.e,e=h===g[f].c
h=x.p
g=A.a([A.d(""+(f+1)+"/"+g.length,j,j,j,j,j,j,D.aWS,j,j,j),B.b4],h)
f=k.r
if(f>=2)g.push(A.d("\ud83d\udd25 "+f+" in a row",j,j,j,j,j,j,D.Lf,j,j,j))
g.push(B.as)
f=A.l(14)
g.push(A.p(j,A.d(""+k.f,j,j,j,j,j,j,B.iH,j,j,j),B.f,j,j,new A.o(B.bw,j,j,f,j,j,B.n),j,j,j,j,B.CF,j,j,j))
g=A.A(g,B.l,j,B.e,B.i,0,j,j)
f=A.l(6)
w=i?0:B.h.D(k.as/k.a.w[k.e].r,0,1)
f=A.bv(f,A.kw(B.bw,j,k.as<5?B.fj:B.cV,9,j,w,j),B.aq)
w=A.l(22)
v=A.K(B.cV,B.r,3)
if(i){if(k.y<0)u="Time's up!"
else u=e?"Correct! +"+k.Q:"Not this time"
u=A.x(A.a([A.d(u,j,j,j,j,j,j,A.m(j,j,e?D.lH:G.np,j,j,j,j,j,j,j,j,24,j,j,B.u,j,j,!0,j,j,j,j,j,j,j,j),j,j,j),B.P,A.d(k.a.w[k.e].d,j,j,j,j,j,j,D.fyF,B.K,j,j)],h),B.l,j,B.e,B.N,0,B.p)}else u=A.d(k.a.w[k.e].a,j,j,j,j,j,j,D.fJZ,B.K,j,j)
w=A.E(A.p(j,A.as(u,j,j,j),B.f,j,j,new A.o(D.qq,j,v,w,j,j,B.n),j,j,j,j,B.fu,j,j,1/0),3)
v=A.a([],h)
for(u=k.giB(k),t=0;s=k.a.w[k.e],r=s.b,t<r.length;++t){q=i?u:new C.bT6(k,t)
p=i&&t!==s.c&&t!==k.y?0.3:1
o=B.o.F(t,4)
n=D.aEg[o]
m=new A.aP(16,16)
l=new A.ay(i&&t===s.c?B.c:B.L,4,B.r,-1)
r=A.a([A.d(D.aEA[o],j,j,j,j,j,j,D.fAA,j,j,j),B.as,new A.bz(1,B.bd,A.d(r[t],j,3,B.a2,j,j,j,D.fzy,j,j,j),j)],h)
if(i&&t===k.a.w[k.e].c)r.push(Q.asC)
if(i&&t===k.y&&t!==k.a.w[k.e].c)r.push(D.c_x)
v.push(A.az(j,new A.T5(A.p(j,new A.c8(B.aM,B.e,B.i,B.l,j,B.p,j,0,r,j),B.f,j,j,new A.o(n,j,new A.bH(l,l,l,l),new A.bf(m,m,m,m),W.aCE,j,B.n),j,j,j,j,B.f3,j,j,j),p,B.b0,B.a3,j,j),B.y,!1,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,q,j,j,j,j,j,j,!1,B.a4))}h=A.a([g,B.am,f,B.af,w,B.af,A.E(A.l4(1.45,v,2,10,10,j,B.e0,!1),4)],h)
if(i)h.push(D.eyu)
return new A.D(B.a1g,A.x(h,B.l,j,B.e,B.i,0,B.p),j)},
cd4(){var w,v,u,t,s,r,q,p=this,o=null,n=p.cML(),m=x.p,l=A.a([D.be3,A.as(A.d(""+p.x+" of "+p.a.w.length+" right",o,o,o,o,o,o,B.q2,o,o,o),o,o,o),A.as(A.d(""+p.f+" points \xb7 best streak "+p.w,o,o,o,o,o,o,D.W6,o,o,o),o,o,o),B.aO],m)
for(w=0;w<n.length;++w){v=n[w].c?B.cV.j(0.25):B.dq
u=new A.aP(14,14)
t=n[w]
s=t.c
r=new A.ay(s?B.cV:B.bw,1,B.r,-1)
q=A.d(w<3?D.dlx[w]:""+(w+1),o,o,o,o,o,o,B.mD,o,o,o)
s=s?B.u:B.O
l.push(A.p(o,new A.c8(B.aM,B.e,B.i,B.l,o,B.p,o,0,A.a([new A.a5(34,o,q,o),new A.bz(1,B.bd,A.d(t.a,o,o,o,o,o,o,new A.H(!0,B.c,o,o,o,o,16,s,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o),o,o,o),o),A.d(""+t.b,o,o,o,o,o,o,B.iH,o,o,o)],m),o),B.f,o,o,new A.o(v,o,new A.bH(r,r,r,r),new A.bf(u,u,u,u),o,o,B.n),o,o,o,B.cw,B.eX,o,o,o))}l.push(B.T)
m=p.ay
v=p.ch
if(v===0)v=m
l.push(new C.Iz(m,v,p.CW,o))
l.push(B.aO)
l.push(A.as(C.uA("Back to the games",new C.bT3(p),B.cV,B.kb,D.fC),o,o,o))
return A.cw(l,o,o,B.fu,o,o,B.ah,!1)}}
C.Uf.prototype={
S(){return new C.amv(A.T(x.de,x.er))}}
C.amv.prototype={
gDe(){var w,v=this,u=v.d
if(u===$){w=C.hnN(v.a.c.aj())
v.d!==$&&A.bE()
v.d=w
u=w}return u},
glW(d){var w,v,u=this,t=u.e
if(t===$){w=u.gDe().b
v=$.ax()
u.e!==$&&A.bE()
t=u.e=new A.au(new A.bb(w,B.b7,B.aP),v)}return t},
cg5(d){return this.f.c1(0,d,new C.bSC(d))},
Y(){this.a3()
var w=this.gDe().c
if(w.length===0)w.push(C.h9e(null,0,20,""))},
t(){var w,v,u=this.glW(0)
u.V$=$.ax()
u.R$=0
for(u=this.f,u=new A.dn(u,u.r,u.e);u.C();)for(w=J.aT(u.d);w.C();){v=w.gP(w)
v.V$=$.ax()
v.R$=0}this.a2()},
cLM(){if(this.gDe().c.length>=12)return
this.m(new C.bSD(this))},
jH(d){var w,v,u=this,t=u.gDe()
t.b=B.a.i(u.glW(0).a.a)
w=t.gapR(0)
if(t.b.length===0||w.length<2){u.c.K(x.q).f.T(D.frA)
return}v=t.c
B.d.a8(v)
B.d.u(v,w)
v=u.c
v.toString
A.a6(v,!1).N(t)},
B(d){var w,v,u=this,t=null,s=new C.bSN(),r=x.p,q=A.a([A.bP(!1,D.fTo,t,t,!0,t,t,t,u.gbqP(u),t,t)],r),p=A.a([D.h7k,B.af,A.aN(t,B.Z,!1,t,!0,B.t,t,A.aO(),u.glW(0),t,t,t,t,t,2,s.$1("Name of the game"),B.y,!0,t,!0,t,!1,t,B.ak,t,t,t,t,t,t,t,t,t,1,t,t,!1,"\u2022",t,t,t,t,t,!1,t,t,!1,t,!0,t,B.ac,t,t,t,t,t,t,t,t,t,t,t,B.h6,!0,B.a7,t,B.ao,t,t,t,t),B.aB],r)
for(w=0;v=u.gDe().c.length,w<v;++w)B.d.u(p,A.a([new A.fh(new C.bSM(u,w,s),t)],r))
if(v<12)p.push(A.as(C.uA("\uff0b Add a question",u.gcLL(),B.aT,t,B.c),t,t,t))
return new C.tK("Make your game",A.cw(p,t,t,D.bFP,t,t,B.ah,!1),q,t)}}
C.arE.prototype={
S(){return new C.aFP(A.a([],x._))},
bv(){return this.r.$0()},
qt(){return this.w.$0()},
ge3(){return this.c}}
C.aFP.prototype={
Y(){var w,v
this.a3()
this.wz()
w=this.a
v=w.c
if(v.length!==0)C.a8C(v,w.e,w.d.w)},
wp(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$wp=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=u.c
r.toString
t=u.a
s=t.d
w=2
return A.b(C.hkC(r,t.e,!1,s.w,new C.e4W(u),null,s),$async$wp)
case 2:w=3
return A.b(u.wz(),$async$wp)
case 3:return A.h(null,v)}})
return A.i($async$wp,v)},
a10(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$a10=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=u.c
r.toString
t=u.a
s=t.d
w=2
return A.b(C.hkC(r,t.e,!0,s.w,new C.e4V(u),null,s),$async$a10)
case 2:w=3
return A.b(u.wz(),$async$a10)
case 3:return A.h(null,v)}})
return A.i($async$a10,v)},
wz(){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k
var $async$wz=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(C.Bm(q.a.c),$async$wz)
case 7:p=e
if(q.c!=null)n=q.e||J.cJ(p)
else n=!1
if(n)q.m(new C.e4Y(q,p))
t=2
w=6
break
case 4:t=3
l=s.pop()
w=6
break
case 3:w=2
break
case 6:t=9
w=12
return A.b(C.Hq(q.a.c).dg(0,B.qC),$async$wz)
case 12:o=e
if(q.c==null){r=[1]
w=10
break}q.m(new C.e4Z(q,o))
r.push(11)
w=10
break
case 9:t=8
k=s.pop()
r.push(11)
w=10
break
case 8:r=[2]
case 10:t=2
if(q.c!=null&&q.e)q.m(new C.e5_(q))
w=r.pop()
break
case 11:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$wz,v)},
Pn(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$Pn=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:o=t.c
if(o==null){w=1
break}s=x.q
o.K(s).f.T(D.fra)
w=3
return A.b(C.Hq(t.a.c),$async$Pn)
case 3:r=e
w=4
return A.b(C.fZJ(t.a.c,r),$async$Pn)
case 4:q=e
w=5
return A.b(C.Hq(t.a.c),$async$Pn)
case 5:p=e
if(t.c==null){w=1
break}t.m(new C.e4U(t,p))
o=t.c.K(s).f
s=A.d(q?"Family trees synced \u2014 "+J.ad(t.d)+" tree(s) on this phone and in the database.":"Could not sync to database. Run supabase/family_trees_table.sql in Supabase, then try again.",null,null,null,null,null,null,null,null,null,null)
o.T(A.b2(null,null,null,q?B.dL:B.d3,null,B.t,null,s,null,B.lL,null,null,null,null,null,null,null,null,null,null))
t.a.qt()
case 1:return A.h(u,v)}})
return A.i($async$Pn,v)},
IA(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$IA=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:l=t.c
l.toString
w=3
return A.b(C.iv_(l),$async$IA)
case 3:s=e
if(s==null||t.c==null){w=1
break}r=B.a.i(s.a)
if(r.length===0){w=1
break}q=C.hYQ(t.a.e)
l=t.c
l.toString
p=t.a
o=p.d
w=4
return A.b(C.b1Y(q,p.e,l,"Each family tree costs $"+B.h.ad(q,2)+" (one-time per tree).",t.a.f,"Create Family Tree",o),$async$IA)
case 4:if(!e||t.c==null){w=1
break}l=B.o.v(1000*Date.now())
p=C.hEJ(r)
o=Date.now()
n=t.a.c
m=new C.l3(l,r.toUpperCase(),p,!0,B.Z,D.E0,new A.V(o,0,!1),0,n,D.uS,B.cf)
w=5
return A.b(C.a4f(n,m),$async$IA)
case 5:w=6
return A.b(t.wz(),$async$IA)
case 6:t.a.bv()
t.a.qt()
if(t.c==null){w=1
break}t.F6(m)
case 1:return A.h(u,v)}})
return A.i($async$IA,v)},
F6(d){return this.cl0(d)},
cl0(d){var w=0,v=A.j(x.H),u=this,t,s,r,q,p,o,n,m,l,k
var $async$F6=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:l=A
k=J
w=2
return A.b(C.Bm(u.a.c),$async$F6)
case 2:n=l.nF(k.dI(f,new C.e4X(d)))
m=u.c
m.toString
t=u.a
s=t.c
r=t.d
q=t.e
p=t.f
t=t.r
w=3
return A.b(A.hF(m,new C.ary(s,r,q,p,t,n==null?d:n,null),!1,"NgmyFamilyTreeDetailScreen",x.k),$async$F6)
case 3:o=f
w=o!=null?4:5
break
case 4:w=6
return A.b(C.a4f(u.a.c,o),$async$F6)
case 6:case 5:w=7
return A.b(u.wz(),$async$F6)
case 7:u.a.qt()
return A.h(null,v)}})
return A.i($async$F6,v)},
B(d){var w,v,u,t,s,r=this,q=null,p=A.P(d).ax.a===B.I,o=new C.um(p)
if(r.e)return A.as(A.na(q,p?B.bu:B.bj,q,q,q,q,q,q,q,q),q,q,q)
if(J.ct(r.d)){w=p?B.ef:B.c
v=A.l(15)
u=A.aG(!1,B.a3,!0,q,A.aM(!1,q,!0,A.p(q,D.bY8,B.f,q,q,new A.o(B.aV.j(0.12),q,A.K(B.aV,B.r,2),q,q,q,B.a6),q,52,q,q,q,q,q,52),B.cU,!0,q,q,q,q,q,q,q,q,q,q,q,r.gck4(),q,q,q,q,q,q,q),B.f,B.L,0,q,q,q,q,q,B.ai)
t=A.d("No Family Trees Yet",q,q,q,q,q,q,A.m(q,q,p?B.aS:B.av,q,q,q,q,q,q,q,q,18,q,q,B.H,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
return new C.Gr(A.p(q,A.x(A.a([u,B.aO,t,B.P,A.d("Create a family tree with names, photos, notes, and generations.",q,q,q,q,q,q,A.m(q,q,p?B.bu:B.bj,q,q,q,q,q,q,q,q,14,q,q,q,q,1.4,!0,q,q,q,q,q,q,q,q),B.K,q,q),B.e4,A.bJ(D.haz,q,r.gaTC(),A.bp(B.bQ,q,q,q,q,q,Av.a1E,q,new A.ba(A.l(12),B.a1),q,q,q))],x.p),B.l,q,B.e,B.i,0,B.p),B.f,q,q,new A.o(w,q,q,v,q,q,B.n),q,q,q,q,D.bIz,q,q,1/0),15,B.ag,1.05,D.adG,q)}w=J.ad(r.d)
v=x.p
w=A.a([A.d("Family Trees ("+w+")",q,q,q,q,q,q,A.m(q,q,p?B.aS:B.av,q,q,q,q,q,q,q,q,16,q,q,B.H,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),B.b4],v)
if(J.cJ(r.d))w.push(A.aI(q,q,q,q,A.X(B.zP,B.aV,q,q,q,q),q,q,q,new C.e51(r),q,q,q,q,"Sync family trees with database",q))
if(J.cJ(r.d))w.push(A.aI(q,q,q,q,A.X(B.zL,B.aV,q,q,q,q),q,q,q,r.gahk(),q,q,q,q,"Transfer / backup file",q))
w.push(A.df(E.atx,q,D.fQF,r.gaTC(),A.bp(B.bQ,q,q,q,q,q,q,q,q,q,q,q)))
p=A.A(w,B.l,q,B.e,B.i,0,q,q)
w=A.a([],v)
for(s=0;s<J.ad(r.d);++s){u=A.a([],v)
if(s>0)u.push(B.af)
u.push(new C.Gr(r.cHV(J.u(r.d,s),o),14,B.ag,1,D.adG,q))
B.d.u(w,u)}return A.x(A.a([p,B.aB,A.x(w,B.l,q,B.e,B.i,0,B.p)],v),B.E,q,B.e,B.i,0,B.p)},
cHV(d,e){var w=null,v=e.a,u=v?B.ef:B.c,t=A.l(14),s=A.K((v?B.eh:B.bO).j(0.55),B.r,1),r=A.a([new A.ab(0,B.G,B.w.j(v?0.35:0.08),B.et,10)],x.V),q=A.l(14),p=A.p(w,D.bXd,B.f,w,w,new A.o(B.aV.j(0.15),w,w,A.l(12),w,w,B.n),w,48,w,w,w,w,w,48),o=A.d(d.b,w,w,w,w,w,w,A.m(w,w,v?B.aS:B.av,w,w,w,w,w,w,w,w,w,w,w,B.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),n=d.gaqR(),m=d.d?"":" \xb7 Public",l=d.y===D.kZ?" \xb7 View only":"",k=x.p
l=A.E(A.x(A.a([o,B.bF,A.d(""+n+" members \xb7 Code: "+d.c+m+l,w,w,w,w,w,w,A.m(w,w,v?B.bu:B.bj,w,w,w,w,w,w,w,w,12,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],k),B.E,w,B.e,B.i,0,B.p),1)
return A.p(w,A.aG(!1,B.a3,!0,w,A.aM(!1,q,!0,new A.D(B.bH,A.A(A.a([p,B.bc,l,A.X(B.Pn,v?B.bu:B.bj,w,w,w,w)],k),B.l,w,B.e,B.i,0,w,w),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.e50(this,d),w,w,w,w,w,w,w),B.f,B.L,0,w,w,w,w,w,B.ai),B.f,w,w,new A.o(u,w,s,t,r,w,B.n),w,w,w,w,w,w,w,1/0)}}
C.ary.prototype={
S(){return new C.aFM(A.a([],x._),A.aR(x.N),A.baF())},
bv(){return this.r.$0()},
ge3(){return this.c}}
C.aFM.prototype={
Y(){var w,v,u=this
u.a3()
u.d=u.a.w
u.adW()
w=u.a
v=w.c
if(v.length!==0)C.a8C(v,w.e,w.d.w)},
t(){var w=this.w
w.V$=$.ax()
w.R$=0
this.a2()},
a3X(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a3X=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!t.a.d.w){t.yB("Only an admin can make a family tree public or private.")
w=1
break}s=t.d
s===$&&A.c()
r=!s.d
s=t.c
s.toString
w=3
return A.b(A.cg(null,null,!0,null,new C.e4m(r),s,null,!0,!0,x.y),$async$a3X)
case 3:if(e!==!0||t.c==null){w=1
break}t.Kb()
t.m(new C.e4n(t,r))
w=4
return A.b(t.uz(),$async$a3X)
case 4:t.a.bv()
t.yB(r?"Family tree is now private.":"Family tree is now public for all users.")
case 1:return A.h(u,v)}})
return A.i($async$a3X,v)},
cxx(d,e,f){var w=this,v=w.y,u=w.d
u===$&&A.c()
u=u.a
if(v===u&&w.x)return
w.x=!0
w.y=u
$.aU.x1$.push(new C.e4h(w,f,d,e))},
aVV(d,e,f){var w,v,u=d.a,t=e.a,s=d.b,r=e.b,q=Math.min(1,Math.max(0.45,Math.min(u/t,s/r)))
t*=q
w=t<=u?(u-t)/2:u/2-f*q
u=r*q
v=u<=s?(s-u)/2:8
u=A.dr()
u.eb(w,v,0,1)
u.k7(q,q,1,1)
this.w.sp(0,u)},
bdI(d,e){var w,v,u,t,s=this.w,r=s.a,q=new A.eN(new Float64Array(16))
q.e6(r)
w=q.Dj()
v=B.h.D(w*d,0.2,3)/w
r=e.a/2
u=e.b/2
t=A.dr()
t.eb(r,u,0,1)
t.k7(v,v,1,1)
t.eb(-r,-u,0,1)
t.iZ(0,q)
s.sp(0,t)},
adW(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$adW=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=A
r=J
w=2
return A.b(C.Bm(u.a.c),$async$adW)
case 2:t=s.nF(r.dI(e,new C.e3J(u)))
if(t!=null&&u.c!=null)u.m(new C.e3K(u,t))
return A.h(null,v)}})
return A.i($async$adW,v)},
yB(d){var w=null,v=this.c
if(v==null)return
v.K(x.q).f.T(A.b2(w,w,w,w,w,B.t,w,A.d(d,w,w,w,w,w,w,w,w,w,w),w,B.Y,w,w,w,w,w,w,w,w,w,w))},
wp(){var w=0,v=A.j(x.H),u=this,t,s,r,q,p,o,n,m
var $async$wp=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:o=u.c
o.toString
t=u.a
s=t.d
t=t.e
r=s.w
q=u.d
q===$&&A.c()
w=2
return A.b(C.hkC(o,t,!1,r,new C.e40(u),q.a,s),$async$wp)
case 2:n=A
m=J
w=3
return A.b(C.Hq(u.a.c),$async$wp)
case 3:p=n.nF(m.dI(e,new C.e41(u)))
if(p!=null&&u.c!=null)u.m(new C.e42(u,p))
return A.h(null,v)}})
return A.i($async$wp,v)},
Kb(){var w=this.e,v=this.d
v===$&&A.c()
w.push(v)
if(w.length>25)B.d.cH(w,0)},
uz(){var w=0,v=A.j(x.H),u=this,t,s
var $async$uz=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a.c
s=u.d
s===$&&A.c()
w=2
return A.b(C.a4f(t,s),$async$uz)
case 2:return A.h(null,v)}})
return A.i($async$uz,v)},
a2u(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$a2u=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:q=t.d
q===$&&A.c()
if(!C.uB(q,t.a.c)){t.yB("View only \u2014 you cannot rename this shared tree.")
w=1
break}q=t.c
q.toString
w=3
return A.b(C.iwc(q,"Save",t.d.b,"Family tree name","Edit family tree name"),$async$a2u)
case 3:s=e
if(s==null||t.c==null){w=1
break}r=B.a.i(s).toUpperCase()
if(r.length===0){w=1
break}t.Kb()
t.m(new C.e4g(t,r))
w=4
return A.b(t.uz(),$async$a2u)
case 4:case 1:return A.h(u,v)}})
return A.i($async$a2u,v)},
b3J(){var w=this.c
w.toString
A.a6(w,!1).ce(A.ef(new C.e3Y(this),!1,null,x.H))},
a1d(){return this.cl2()},
cl2(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$a1d=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:n={}
m=t.d
m===$&&A.c()
if(!C.uB(m,t.a.c)){t.yB("View only \u2014 display settings are locked.")
w=1
break}m=t.c
m.toString
m=A.P(m)
s=t.d
r=s.w
n.a=r
s=s.f
q=new A.Y(s,new C.e4d(),A.U(s).k("Y<1>")).gJ(0)
s=A.ew([0,2,3,4,5,6,8,r],x.S)
p=A.C(s,s.$ti.k("ci.E"))
B.d.ff(p)
s=t.c
s.toString
w=3
return A.b(A.bU(B.L,null,new C.e4e(n,t,new C.um(m.ax.a===B.I),p,q),s,!0,!0,!0,null,!1,!1,x.bn),$async$a1d)
case 3:o=e
if(o==null||t.c==null){w=1
break}w=o.b!==t.d.w?4:5
break
case 4:t.Kb()
t.m(new C.e4f(t,o))
w=6
return A.b(t.uz(),$async$a1d)
case 6:case 5:if(o.a&&t.c!=null)t.b3J()
case 1:return A.h(u,v)}})
return A.i($async$a1d,v)},
WR(d){return this.bEo(d)},
bEo(d){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$WR=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.d
r===$&&A.c()
if(!C.uB(r,t.a.c)){t.yB("View only \u2014 you cannot add members to this shared tree.")
w=1
break}r=t.c
r.toString
w=3
return A.b(A.cg(null,null,!0,null,new C.e3x(t,d),r,null,!0,!0,x.P),$async$WR)
case 3:s=f
if(s==null){w=1
break}t.Kb()
t.m(new C.e3y(t,s))
w=4
return A.b(t.uz(),$async$WR)
case 4:case 1:return A.h(u,v)}})
return A.i($async$WR,v)},
a4h(d){return this.cK9(d)},
cK9(d){var w=0,v=A.j(x.H),u=this,t,s
var $async$a4h=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=u.c
s.toString
s=A.P(s)
t=u.c
t.toString
w=2
return A.b(A.cg(null,null,!0,null,new C.e4p(u,d,new C.um(s.ax.a===B.I)),t,null,!0,!0,x.H),$async$a4h)
case 2:return A.h(null,v)}})
return A.i($async$a4h,v)},
chi(d){var w=this,v=w.d
v===$&&A.c()
if(C.uB(v,w.a.c))w.P2(d)
else w.a4h(d)},
ajQ(d,e){return this.cBv(d,e)},
cBv(d,e){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$ajQ=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=t.c
r.toString
r=A.P(r)
s=t.c
if(s==null){w=1
break}w=3
return A.b(A.cg(null,null,!0,null,new C.e4j(new C.um(r.ax.a===B.I),d,e),s,null,!0,!0,x.H),$async$ajQ)
case 3:case 1:return A.h(u,v)}})
return A.i($async$ajQ,v)},
IF(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$IF=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:o=t.d
o===$&&A.c()
w=o.y===D.kZ?3:5
break
case 3:w=6
return A.b(C.h7r(t.a.c),$async$IF)
case 6:s=e
o=t.a
r=C.hsF(o.e,o.c)
w=!s||!r?7:8
break
case 7:w=9
return A.b(t.ajQ(!s,!r),$async$IF)
case 9:w=1
break
case 8:w=4
break
case 5:if(!C.aRF(o,t.a.c)){t.yB("Only the tree creator can delete this family tree.")
w=1
break}case 4:o=t.c
if(o==null){w=1
break}q=t.d
p=q.b
w=10
return A.b(A.lv(o,"Cancel","Remove",q.y===D.kZ?'This removes "'+p+"\" from this phone only. The creator's copy is not affected.":'Delete "'+p+'" permanently? This cannot be undone.',"Remove family tree?"),$async$IF)
case 10:if(!e||t.c==null){w=1
break}w=11
return A.b(C.aRB(t.a.c,t.d.a),$async$IF)
case 11:t.a.bv()
o=t.c
if(o==null){w=1
break}A.j9(o,null)
case 1:return A.h(u,v)}})
return A.i($async$IF,v)},
abo(d){return this.bPF(d)},
bPF(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$abo=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:p={}
o=t.d
o===$&&A.c()
if(!C.uB(o,t.a.c)){w=1
break}s=t.d.f
r=d.e
p.a=r
if(r==null||!B.d.aU(s,new C.e3z(p))){o=A.U(s)
p.a=A.nF(new A.cM(new A.Y(s,new C.e3A(d),o.k("Y<1>")),new C.e3B(),o.k("cM<1,n>")))}q=p.a
if(q==null)q=d.d
t.Kb()
t.m(new C.e3C(t,s,d,q))
w=3
return A.b(t.uz(),$async$abo)
case 3:t.yB(d.b+" was removed. Tap Undo to bring them back.")
case 1:return A.h(u,v)}})
return A.i($async$abo,v)},
P2(d){return this.bRT(d)},
bRT(d){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$P2=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.d
r===$&&A.c()
w=!C.uB(r,t.a.c)?3:4
break
case 3:w=5
return A.b(t.a4h(d),$async$P2)
case 5:w=1
break
case 4:r=t.c
r.toString
w=6
return A.b(A.cg(null,null,!0,null,new C.e3G(t,d),r,null,!0,!0,x.P),$async$P2)
case 6:s=f
if(s==null){w=1
break}t.Kb()
t.m(new C.e3H(t,s))
w=7
return A.b(t.uz(),$async$P2)
case 7:case 1:return A.h(u,v)}})
return A.i($async$P2,v)},
cIk(){var w=this,v=w.d
v===$&&A.c()
if(!C.uB(v,w.a.c))return
if(w.e.length===0)return
w.m(new C.e4o(w))
w.uz()},
ZU(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$ZU=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:n=t.d
n===$&&A.c()
if(!C.aRF(n,t.a.c)){t.yB("Only the tree creator can invite collaborators.")
w=1
break}n=t.c
n.toString
n=A.P(n)
s=$.ax()
r=new A.au(B.aw,s)
q=t.d.e
p=A.br(new A.N(q,t.gcfM(),A.U(q).k("N<1,n>")).c_(0,new C.e3T()),!0,x.N)
q=t.c
q.toString
w=3
return A.b(A.cg(null,null,!0,null,new C.e3U(t,new C.um(n.ax.a===B.I),p,r),q,null,!0,!0,x.y),$async$ZU)
case 3:o=e
r.V$=s
r.R$=0
if(o!==!0||t.c==null){w=1
break}t.Kb()
t.m(new C.e3V(t,p))
w=4
return A.b(t.uz(),$async$ZU)
case 4:t.yB("Collaborators updated.")
case 1:return A.h(u,v)}})
return A.i($async$ZU,v)},
cfN(d){return B.a.i(d.toLowerCase())},
cjP(){var w,v,u,t,s,r=this,q=r.c
q.toString
w=r.a.c
v=r.d
v===$&&A.c()
u=C.uB(v,w)
t=r.d
s=C.ilf(t)
C.iv3(q,t.b,u,C.ile(r.d),s,v.a,w)},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=A.P(d).ax.a===B.I,m=new C.um(n),l=p.d
l===$&&A.c()
l=l.f
w=new A.Y(l,new C.e4w(),A.U(l).k("Y<1>")).gJ(0)
l=n?B.c6:B.hY
v=A.X(B.a2O,n?B.bu:B.bj,o,o,o,18)
u=x.p
v=A.a([new A.D(B.CG,A.aM(!1,o,!0,new A.D(B.hy,A.A(A.a([v,B.bn,A.d("Back to Family Trees",o,o,o,o,o,o,A.m(o,o,n?B.bu:B.bj,o,o,o,o,o,o,o,o,o,o,o,B.a8,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],u),B.l,o,B.e,B.N,0,o,o),o),o,!0,o,o,o,o,o,o,o,o,o,o,o,new C.e4x(p,d),o,o,o,o,o,o,o),o),new A.D(B.nI,p.c27(m),o)],u)
if(p.d.y===D.kZ){t=B.tB.j(0.15)
s=A.l(12)
r=A.K(B.tB.j(0.45),B.r,1)
q=C.Ho(p.d,p.a.c)
v.push(new A.D(B.z2,A.p(o,A.A(A.a([D.c1H,B.as,A.E(A.d("View only \u2014 shared by "+q+". You can keep up to 2 shared trees. Tap a member to view details.",o,o,o,o,o,o,A.m(o,o,n?B.aS:B.av,o,o,o,o,o,o,o,o,12,o,o,B.a8,o,1.35,!0,o,o,o,o,o,o,o,o),o,o,o),1)],u),B.l,o,B.e,B.i,0,o,o),B.f,o,o,new A.o(t,o,r,s,o,o,B.n),o,o,o,o,B.hP,o,o,1/0),o))}u=A.a([A.d("Family Tree",o,o,o,o,o,o,A.m(o,o,n?B.aS:B.av,o,o,o,o,o,o,o,o,15,o,o,B.H,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),B.b4],u)
if(C.uB(p.d,p.a.c)&&p.e.length!==0)u.push(new C.GD("Undo",B.pD,p.gcIj(),m,o,o))
u.push(new C.GD("Family Book",D.bRS,p.gcjO(),m,B.us,o))
u.push(new C.GD("Family games",B.nO,p.gck_(),m,B.aD,o))
if(C.uB(p.d,p.a.c))u.push(new C.GD("Display settings",B.Dy,p.gcl1(),m,B.b2,o))
u.push(new C.GD("Sync",B.zL,p.gahk(),m,o,o))
t=p.d
if(t.y===D.kZ||C.aRF(t,p.a.c)){t=p.d.y===D.kZ?"Remove shared tree":"Delete tree"
u.push(new C.GD(t,B.ej,p.gbPP(),m,B.fj,o))}if(C.uB(p.d,p.a.c))u.push(new C.GD("Add member",B.wZ,new C.e4y(p),m,B.bQ,o))
v.push(new A.D(Z.ani,A.A(u,B.l,o,B.e,B.i,0,o,o),o))
if(p.d.gaqR()===0){u=A.as(A.d("Add your first member to build the tree.",o,o,o,o,o,o,A.m(o,o,n?B.bu:B.bj,o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),o,o,o)
n=u}else n=A.ck(new C.e4z(p,m))
v.push(A.E(n,1))
if(w>0){n=p.f
u=A.X(n?O.a2S:A5.Po,o,o,o,o,o)
v.push(A.as(A.hv(u,A.d(n?"Hide hidden members":""+w+" hidden",o,o,o,o,o,o,o,o,o,o),new C.e4A(p),o),o,o,o))}return A.c6(o,l,A.bn(!0,A.x(v,B.E,o,B.e,B.i,0,B.p),!0,!1,B.ag,!0,!0),o,!1,!1,o,o)},
c27(d){var w,v,u,t,s,r,q,p,o,n=this,m=null
n.d===$&&A.c()
w=A.l(22)
v=A.a([new A.ab(0,B.G,B.fX.j(0.35),B.dp,18)],x.V)
u=A.l(22)
t=A.ao(-26,A.X(B.zC,B.c.j(0.08),m,m,m,130),m,m,m,-18,m,m)
s=A.aG(!1,B.a3,!0,m,A.aM(!1,m,!0,A.p(m,D.c50,B.f,m,m,new A.o(B.c.j(0.16),m,A.K(B.c.j(0.45),B.r,1.5),m,m,m,B.a6),m,46,m,m,m,m,m,46),B.cU,!0,m,m,m,m,m,m,m,m,m,m,m,n.gahk(),m,m,m,m,m,m,m),B.f,B.L,0,m,m,m,m,m,B.ai)
r=n.d
q=A.d(r.b,m,1,B.a2,m,m,m,D.fBD,m,m,m)
r=r.gaqR()
p=n.d.gaqR()===1?"member":"members"
o=x.p
p=A.a([s,B.bc,A.E(A.x(A.a([q,B.bF,A.d(""+r+" "+p,m,m,m,m,m,m,A.m(m,m,B.c.j(0.8),m,m,m,m,m,m,m,m,12.5,m,m,B.a8,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)],o),B.E,m,B.e,B.i,0,B.p),1)],o)
if(C.uB(n.d,n.a.c))p.push(A.aI(m,m,m,m,D.c1V,m,m,m,n.gcuT(),m,m,m,m,"Rename",m))
s=A.A(p,B.l,m,B.e,B.i,0,m,m)
r=n.d.d
q=r?B.jL:B.n5
r=r?"Private":"Public"
r=A.E(n.axp(q,"Privacy",r,n.a.d.w?n.gcHf():m),1)
q=A.E(n.axp(B.x3,"Tree code",n.d.c,new C.e3I(n)),1)
p=n.d.e.length
p=p===0?"Invite":""+p+" \xb7 Manage"
p=A.a([s,B.af,A.A(A.a([r,B.ae,q,B.ae,A.E(n.axp(D.bTA,"Collaborators",p,n.gc6Y()),1)],o),B.l,m,B.e,B.i,0,m,m)],o)
if(n.d.y===D.kZ){s=B.c.j(0.15)
B.d.u(p,A.a([B.P,A.aG(!1,B.a3,!0,A.l(999),A.aM(!1,A.l(999),!0,new A.D(B.hm,A.A(A.a([A.X(B.nP,B.c,m,m,m,14),B.e7,A.d("View only",m,m,m,m,m,m,B.aWX,m,m,m)],o),B.l,m,B.e,B.N,0,m,m),m),m,!0,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),B.f,s,0,m,m,m,m,m,B.ai)],o))}return A.p(m,A.bv(u,new A.an(B.a0,m,B.ad,B.t,A.a([t,new A.D(B.Hd,A.x(p,B.E,m,B.e,B.i,0,B.p),m)],o),m),B.aq),B.f,m,m,new A.o(m,m,m,w,v,D.c9k,B.n),m,m,m,m,m,m,m,1/0)},
axp(d,e,f,g){var w=null,v=B.c.j(0.14)
return A.aG(!1,B.a3,!0,A.l(14),A.aM(!1,A.l(14),!0,new A.D(K.aox,A.x(A.a([A.X(d,B.c,w,w,w,18),B.ax,A.d(e,w,1,B.a2,w,w,w,A.m(w,w,B.c.j(0.75),w,w,w,w,w,w,w,w,10.5,w,w,B.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.rg,A.d(f,w,1,B.a2,w,w,w,An.xE,w,w,w)],x.p),B.l,w,B.e,B.i,0,B.p),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,g,w,w,w,w,w,w,w),B.f,v,0,w,w,w,w,w,B.ai)}}
C.bho.prototype={
B(d){var w,v,u,t=null,s=this.d,r=s.a
if(r.gau(r)&&s.c.length===0)return B.bM
w=s.d
v=s.e
u=A.a([A.b5(t,t,t,new C.bhr(s,t),new A.av(w,v))],x.p)
r=r.gdP(r)
B.d.u(u,r.dN(r,new C.dim(this),x.l))
r=s.c
B.d.u(u,new A.N(r,new C.din(this),A.U(r).k("N<1,v>")))
return new A.D(B.uO,new A.a5(w,v,new A.an(B.a0,t,B.ad,B.f,u,t),t),t)}}
C.L0.prototype={}
C.GH.prototype={}
C.bhq.prototype={
gbme(){var w,v=this,u=v.r
if(u!=null)return u+16
u=v.f
if(u==null)return v.d/2
w=v.a.h(0,u)
if(w==null)return v.d/2
return w.b.a+16}}
C.aLr.prototype={}
C.bhr.prototype={
bRu(d,e,f,g){var w,v,u,t,s,r,q=f.a<=g.a,p=q?f:g,o=q?g:f,n=p.a+28+3,m=o.a-28-3
if(m<=n+2)return
w=(p.b+o.b)/2
q=$.S()
v=A.L()
v.r=B.bE.j(0.75).gp(0)
v.c=2
v.d=B.bG
d.ah(new A.r(n,w),new A.r(m,w),v)
u=(n+m)/2
t=new A.aH(q.r,B.aj,null,null,A.a([],x.v))
q=w+5.5
t.E(new A.aZ(u,q))
s=w-1.1
r=w-8.8
t.E(new A.ks(u-9.9,s,u-4.95,r,u,w-3.0250000000000004))
t.E(new A.ks(u+4.95,r,u+9.9,s,u,q))
t.E(new A.bx())
q=A.L()
q.r=B.c.gp(0)
d.O(new A.r(u,w),9,q)
q=A.L()
q.r=B.bE.gp(0)
d.af(t,q)},
bRr(d,e,f,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
if(a0.length===0)return
B.d.b_(a0,new C.diH())
w=f.b
v=w+(B.d.gH(a0).b-w)/2
u=B.d.aU(a0,new C.diI(f))
t=new A.N(a0,new C.diJ(f),A.U(a0).k("N<1,F>")).c_(0,new C.diK()).cB(0,1/0,B.rw)
w=f.a
d.ah(f,new A.r(w,u?v:v-Math.min(10,t/2)),e)
for(s=a0.length,r=x.v,q=0;q<a0.length;a0.length===s||(0,A.I)(a0),++q){p=a0[q]
o=p.a
n=o-w
m=Math.abs(n)
if(m<0.5){d.ah(new A.r(o,v),p,e)
continue}l=J.lP(n)
k=Math.min(10,m/2)
m=$.S()
j=A.a([],r)
i=new A.aH(m.r,B.aj,null,null,j)
j.push(new A.aZ(w,v-k))
i.ab()
m=l*k
h=new A.ce(w,v,w+m,v)
j.push(h)
g=i.f
if(g!=null)h.ak(g)
i.ab()
m=new A.aq(o-m,v)
j.push(m)
h=i.f
if(h!=null)m.ak(h)
i.ab()
m=new A.ce(o,v,o,v+k)
j.push(m)
h=i.f
if(h!=null)m.ak(h)
i.ab()
o=new A.aq(o,p.b)
j.push(o)
m=i.f
if(m!=null)o.ak(m)
i.ab()
d.af(i,e)}},
a4(d,e){var w,v,u,t,s,r
$.S()
w=A.L()
w.r=B.bQ.j(0.75).gp(0)
w.c=2.2
w.b=B.aa
w.d=B.bG
w.e=B.dQ
for(v=this.b.b,u=v.length,t=0;s=v.length,t<s;v.length===u||(0,A.I)(v),++t){r=v[t]
s=r.d
if(s!=null&&s.length!==0)this.bRr(d,w,r.a,s)
else{if(!r.c){s=r.b
s=!(0===s.a&&0===s.b)}else s=!1
if(s)d.ah(r.a,r.b,w)}}for(t=0;t<v.length;v.length===s||(0,A.I)(v),++t){r=v[t]
if(r.c)this.bRu(d,w,r.a,r.b)}},
aE(d){return d.b!==this.b}}
C.bld.prototype={
gcd6(){var w=this.c
if(B.a.i(w.y).length!==0)return B.aER
switch(w.c.a){case 0:return D.d2u
case 1:return D.df2
case 2:return D.dxx}},
gcd9(){var w=this.c,v=C.hDV(w.w),u=C.hDV(w.y)
w=v!=null
if(w&&u!=null)return v+" \u2013 "+u
if(w)return"b. "+v
if(u!=null)return"\u2020 "+u
return""},
B(d){var w,v,u,t=this,s=null,r=A.P(d).ax.a===B.I,q=t.gcd6(),p=t.c,o=N.bFW(p.f),n=t.gcd9(),m=x.V,l=A.a([new A.ab(0,B.G,B.d.gal(q).j(0.35),B.cM,10)],m),k=r?B.av:B.c,j=A.K(r?B.av:B.c,B.r,2)
if(o!=null)w=A.tO(B.z,s,B.cm,B.bX,!1,s,o,!1,s,s)
else{w=A.a([B.d.gH(q).j(0.18),B.d.gal(q).j(0.28)],x.O)
v=B.a.i(p.b)
v=v.length===0?"?":v[0].toUpperCase()
w=A.p(B.z,A.d(v,s,s,s,s,s,s,A.m(s,s,B.d.gal(q),s,s,s,s,s,s,s,s,20,s,s,B.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),B.f,s,s,new A.o(s,s,s,s,s,new A.a7(B.a5,B.a9,B.x,w,s,s),B.n),s,s,s,s,s,s,s,s)}v=x.p
l=A.a([A.p(s,A.p(s,A.i3(w,B.aq),B.f,s,s,new A.o(k,s,j,s,s,s,B.a6),s,s,s,s,s,s,s,s),B.f,s,s,new A.o(s,s,s,s,l,new A.a7(B.ay,B.aC,B.x,q,s,s),B.a6),s,56,s,s,B.CV,s,s,56)],v)
k=t.d
if(k>0){j=A.l(10)
w=A.K(r?B.av:B.c,B.r,1.5)
l.push(A.ao(s,A.p(s,A.d(""+k,s,s,s,s,s,s,D.fMs,s,s,s),B.f,s,s,new A.o(B.cj,s,w,j,s,s,B.n),s,s,s,s,D.bKv,s,s,s),s,s,s,-6,-4,s))}k=r?B.ct:B.c
j=A.l(8)
w=A.K(B.d.gH(q).j(0.35),B.r,1)
m=A.a([new A.ab(0,B.G,B.w.j(r?0.3:0.06),B.dM,6)],m)
p=B.a.i(p.b)
u=p.length
if(u<=24)u=9.5
else u=u<=32?8.2:7.2
p=A.a([A.d(p,s,4,s,s,s,s,A.m(s,s,r?B.c:B.ct,s,s,s,s,s,s,s,s,u,s,s,B.H,s,1.15,!0,s,s,s,s,s,s,s,s),B.K,s,s)],v)
if(n.length!==0)p.push(A.d(n,s,1,s,s,s,s,A.m(s,s,r?B.aR:B.bj,s,s,s,s,s,s,s,s,7.5,s,s,B.a8,s,1.1,!0,s,s,s,s,s,s,s,s),s,s,s))
return A.az(s,new A.a5(84,112,A.x(A.a([new A.an(B.a0,s,B.ad,B.f,l,s),B.ax,A.p(s,A.x(p,B.l,s,B.e,B.N,0,B.p),B.f,s,D.b8b,new A.o(k,s,w,j,m,s,B.n),s,s,s,s,D.bKG,s,s,s)],v),B.l,s,B.e,B.i,0,B.p),s),B.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,t.e,s,s,s,s,s,s,!1,B.a4)}}
C.bgt.prototype={
a4(d,e){var w,v,u,t,s
$.S()
w=A.L()
v=this.b
u=v?B.c:D.blo
w.r=u.j(v?0.05:0.09).gp(0)
for(v=e.b,u=e.a,t=10;t<v;t+=20)for(s=10;s<u;s+=20)d.O(new A.r(s,t),1,w)},
aE(d){return d.b!==this.b}}
C.bzi.prototype={
B(d){var w=this,v=null,u=new C.foL(w),t=w.c,s=t?B.ct:B.c,r=A.l(12),q=u.$3(B.i_,"Zoom in",w.d),p=A.p(v,v,B.f,t?B.bw:B.fr,v,v,v,1,v,v,v,v,v,22),o=u.$3(B.x0,"Zoom out",w.e)
return A.aG(!1,B.a3,!0,r,A.x(A.a([q,p,o,A.p(v,v,B.f,t?B.bw:B.fr,v,v,v,1,v,v,v,v,v,22),u.$3(B.ar_,"Fit the whole tree",w.f)],x.p),B.l,v,B.e,B.N,0,B.p),B.f,s,4,v,B.dB,v,v,v,B.ai)}}
C.boz.prototype={
B(d){var w=this,v=null,u=B.bQ.j(0.15),t=A.K(B.bQ,B.r,2),s=w.e,r=x.p
t=A.az(v,A.p(v,A.x(A.a([A.X(s?O.a2S:A5.Po,B.bQ,v,v,v,22),A.d("+"+w.c,v,v,v,v,v,v,D.fIt,v,v,v)],r),B.l,v,B.b9,B.i,0,B.p),B.f,v,v,new A.o(u,v,t,v,v,v,B.a6),v,56,v,v,v,v,v,56),B.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,w.f,v,v,v,v,v,v,!1,B.a4)
u=A.a([t,B.am,A.d(s?"SHOW LESS":"MORE KIDS",v,v,v,v,v,v,D.fGe,B.K,v,v)],r)
if(s){t=A.a([B.am],r)
s=w.d
B.d.u(t,new A.N(s,new C.eZM(w),A.U(s).k("N<1,v>")))
B.d.u(u,t)}return new A.a5(84,v,A.x(u,B.l,v,B.e,B.i,0,B.p),v)}}
C.a0u.prototype={
S(){return new C.aEe()},
bv(){return this.Q.$0()},
ge3(){return this.w}}
C.aEe.prototype={
Y(){var w,v,u,t,s,r=this,q=null
r.a3()
w=r.a
v=w.d
u=v==null
t=u?q:v.b
if(t==null)t=""
s=$.ax()
r.d!==$&&A.aQ()
r.d=new A.au(new A.bb(t,B.b7,B.aP),s)
t=u?q:v.r
if(t==null)t=""
r.e!==$&&A.aQ()
r.e=new A.au(new A.bb(t,B.b7,B.aP),s)
t=u?q:v.w
if(t==null)t=""
r.f!==$&&A.aQ()
r.f=new A.au(new A.bb(t,B.b7,B.aP),s)
t=u?q:v.x
if(t==null)t=""
r.r!==$&&A.aQ()
r.r=new A.au(new A.bb(t,B.b7,B.aP),s)
t=u?q:v.y
if(t==null)t=""
r.w!==$&&A.aQ()
r.w=new A.au(new A.bb(t,B.b7,B.aP),s)
t=u?q:v.z
if(t==null)t=""
r.x!==$&&A.aQ()
r.x=new A.au(new A.bb(t,B.b7,B.aP),s)
t=u?q:v.c
r.y=t==null?D.zf:t
t=u?q:v.d
r.z=t==null?w.f:t
r.Q=u?q:v.e
r.as=u?q:v.f
t=u?q:v.Q
if(t==null)w=C.imK(w.r,w.f)
else w=t
r.at=w
w=u?q:v.at
r.ax=w==null?0:w
w=u?q:v.as
r.ay=w===!0},
t(){var w,v=this,u=v.d
u===$&&A.c()
w=u.V$=$.ax()
u.R$=0
u=v.e
u===$&&A.c()
u.V$=w
u.R$=0
u=v.f
u===$&&A.c()
u.V$=w
u.R$=0
u=v.r
u===$&&A.c()
u.V$=w
u.R$=0
u=v.w
u===$&&A.c()
u.V$=w
u.R$=0
u=v.x
u===$&&A.c()
u.V$=w
u.R$=0
v.a2()},
Qy(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$Qy=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.a
o=C.hsF(p.y,p.w)
w=3
return A.b(A.lH(t.a.w,B.JS),$async$Qy)
case 3:n=e
w=!o&&!n&&!t.a.x.w?4:5
break
case 4:p=t.c
p.toString
s=t.a
r=s.x
w=6
return A.b(C.b1Y(0,s.y,p,"Subscribe to upload family photos (30 days).",s.z,"Family Tree Photos",r),$async$Qy)
case 6:if(!e||t.c==null){w=1
break}p=t.a
C.hYR(p.y,p.w)
t.a.bv()
case 5:w=7
return A.b(A8.DJ(78,800),$async$Qy)
case 7:q=e
if(q!=null&&t.c!=null)t.m(new C.dyE(t,q))
case 1:return A.h(u,v)}})
return A.i($async$Qy,v)},
cd8(){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=l.d
k===$&&A.c()
w=B.a.i(k.a.a).toUpperCase()
if(w.length===0)return
k=l.c
k.toString
v=l.a.d
if(v==null)v=new C.i4(B.o.v(1000*Date.now()),w,D.zf,null,null,null,"","","","","",1,!1,0)
u=l.y
u===$&&A.c()
t=l.z
s=l.Q
r=l.as
q=l.e
q===$&&A.c()
q=B.a.i(q.a.a)
p=l.f
p===$&&A.c()
p=B.a.i(p.a.a)
o=l.r
o===$&&A.c()
o=B.a.i(o.a.a)
n=l.w
n===$&&A.c()
n=B.a.i(n.a.a)
m=l.x
m===$&&A.c()
m=B.a.i(m.a.a)
s=v.aGu(p,l.at,o,n,u,l.ay,w,q,m,t,r,s,l.ax)
A.a6(k,!1).N(s)},
ab_(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$ab_=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a.d
r=s==null?null:B.a.i(s.b)
if(r==null)r=""
s=t.c
s.toString
w=3
return A.b(A.cg(null,null,!0,null,new C.dyD(r),s,null,!0,!0,x.y),$async$ab_)
case 3:if(e!==!0||t.c==null){w=1
break}s=t.c
s.toString
A.a6(s,!1).N(null)
s=t.a.as
if(s!=null)s.$0()
case 1:return A.h(u,v)}})
return A.i($async$ab_,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=A.P(d).ax.a===B.I,i=new C.um(j),h=l.a.e,g=A.U(h).k("Y<1>"),f=A.C(new A.Y(h,new C.dyN(l),g),g.k("M.E"))
h=j?B.ef:B.c
g=A.l(22)
w=l.a.c
v=x.p
w=A.a([new A.D(D.bIV,A.d(w,k,k,k,k,k,k,A.m(k,k,j?B.aS:B.av,k,k,k,k,k,k,k,k,17,k,k,B.u,k,k,!0,k,0.3,k,k,k,k,k,k),B.K,k,k),k)],v)
u=l.a
if(u.as!=null&&u.d!=null)w.push(A.ao(k,A.he(A.aM(!1,k,!0,new A.D(B.lQ,A.X(B.ej,B.pq,k,k,k,17),k),B.cU,!0,k,k,k,k,k,k,k,k,k,k,k,l.gbMo(),k,k,k,k,k,k,k),k,"Delete member",k,k),k,k,k,0,k,k))
u=j?B.jZ:B.iO
t=N.bFW(l.as)
if(l.as==null)s=A.X(B.px,j?B.bu:B.bj,k,k,k,40)
else s=k
s=A.as(A.az(k,new A.an(B.a0,k,B.ad,B.t,A.a([A.hh(u,t,s,k,42),A.ao(0,A.hh(B.bQ,k,D.bWh,k,14),k,k,k,0,k,k)],v),k),B.y,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,l.gcd5(),k,k,k,k,k,k,!1,B.a4),k,k,k)
t=l.d
t===$&&A.c()
t=C.aEg(t,"Full name",B.mj,1,1,i,B.mB)
u=l.y
u===$&&A.c()
u=A.x(A.a([t,B.T,new C.blb(i,u,new C.dyO(l),k)],v),B.l,k,B.e,B.i,0,B.p)
t=A.d("1. Parent",k,k,k,k,k,k,A.m(k,k,j?B.bu:B.bj,k,k,k,k,k,k,k,k,11,k,k,B.H,k,k,!0,k,0.3,k,k,k,k,k,k),k,k,k)
r=l.z
q=x.ac
p=A.a([D.bCe],q)
o=l.a.e
B.d.u(p,new A.N(o,new C.dyP(),A.U(o).k("N<1,eM<n?>>")))
o=x.bw
n=A.d("2. Spouse",k,k,k,k,k,k,A.m(k,k,j?B.bu:B.bj,k,k,k,k,k,k,k,k,11,k,k,B.H,k,k,!0,k,0.3,k,k,k,k,k,k),k,k,k)
m=l.Q
q=A.a([D.bCg],q)
B.d.u(q,new A.N(f,new C.dyR(),A.U(f).k("N<1,eM<n?>>")))
o=A.x(A.a([t,B.am,new C.aeH(i,r,"Who is their parent?",p,new C.dyS(l),k,o),B.aB,n,B.am,new C.aeH(i,m,"Who is their spouse / partner?",q,new C.dyT(l),k,o)],v),B.al,k,B.e,B.i,0,B.p)
q=l.f
q===$&&A.c()
q=C.aEg(q,"Birth date",D.aqa,1,1,i,k)
m=l.r
m===$&&A.c()
m=C.aEg(m,"Birth place",B.a37,1,1,i,k)
n=l.w
n===$&&A.c()
n=C.aEg(n,"Date of death (if deceased)",D.asf,1,1,i,k)
p=l.x
p===$&&A.c()
p=C.aEg(p,"Occupation",B.Qn,1,1,i,k)
r=l.e
r===$&&A.c()
r=A.a([new A.an(B.z,k,B.ad,B.t,w,k),B.aB,s,B.bx,new C.aeI(i,"Identity",u,k),B.af,new C.aeI(i,"Family links",o,k),B.af,new C.aeI(i,"Life details",A.x(A.a([q,B.T,m,B.T,n,B.T,p,B.T,C.aEg(r,"Notes",B.l0,5,3,i,k)],v),B.l,k,B.e,B.i,0,B.p),k),B.af,new C.aEf(i,"Child order",l.clg(l.at),new C.dyU(l),new C.dyV(l),k)],v)
w=l.a
u=w.d
if(u!=null)w=C.hhC(w.r,u.a).length!==0
else w=!1
if(w){w=l.ax
u=w===0?"Uses tree default":"Show "+w+", rest in menu"
w=w>0?new C.dyW(l):k
B.d.u(r,A.a([B.T,new C.aEf(i,"Visible in tree",u,w,new C.dyX(l),k)],v))}r.push(B.T)
w=j?B.jZ:B.iO
u=A.l(14)
t=A.K(j?B.eh:B.bO,B.r,1)
s=A.d("Hidden member",k,k,k,k,k,k,A.m(k,k,j?B.aS:B.av,k,k,k,k,k,k,k,k,14,k,k,B.O,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)
r.push(A.p(k,A.j_(k,B.bQ,k,B.ag,k,new C.dyY(l),k,A.d("Hide from the tree canvas",k,k,k,k,k,k,A.m(k,k,j?B.bu:B.bj,k,k,k,k,k,k,k,k,11,k,k,k,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),k,s,l.ay),B.f,k,k,new A.o(w,k,t,u,k,k,B.n),k,k,k,k,O.amY,k,k,k))
r.push(B.bx)
w=j?B.aS:B.av
j=j?B.eh:B.bO
r.push(A.A(A.a([A.E(A.dW(B.o7,new C.dyQ(d),A.dj(k,k,k,k,k,k,k,k,k,w,k,k,B.co,k,new A.ba(A.l(14),B.a1),new A.ay(j,1,B.r,-1),k,k,k,k)),1),B.bc,A.E(A.bJ(D.fiK,k,l.gcd7(),A.bp(B.aV,k,k,0,B.c,k,B.co,k,new A.ba(A.l(14),B.a1),k,k,k)),2)],v),B.l,k,B.e,B.i,0,k,k))
r.push(B.ax)
return A.em(B.f7,k,B.ag,h,new A.a5(420,k,A.ca(A.x(r,B.al,k,B.e,B.N,0,B.p),B.t,k,B.y,k,k,k,k,k,B.ah),k),D.anQ,k,B.an9,new A.ba(g,B.a1),k,k)},
clg(d){var w=B.o.F(d,100)
if(w>=11&&w<=13)return""+d+"th child"
w=""+d
switch(B.o.F(d,10)){case 1:return w+"st child"
case 2:return w+"nd child"
case 3:return w+"rd child"
default:return w+"th child"}}}
C.aeI.prototype={
B(d){var w=null,v=this.c.a,u=A.d(this.d.toUpperCase(),w,w,w,w,w,w,A.m(w,w,v?B.bu:B.bj,w,w,w,w,w,w,w,w,10,w,w,B.H,w,w,!0,w,1.1,w,w,w,w,w,w),w,w,w),t=v?B.jZ:B.iO,s=A.l(16)
return A.x(A.a([new A.D(B.a1I,u,w),A.p(w,this.e,B.f,w,w,new A.o(t,w,A.K(v?B.eh:B.bO,B.r,1),s,w,w,B.n),w,w,w,w,B.bl,w,w,1/0)],x.p),B.E,w,B.e,B.i,0,B.p)}}
C.blc.prototype={
B(d){var w,v=this,u=null,t=v.c.a,s=t?B.ef:B.c,r=A.l(12),q=A.K((t?B.eh:B.bO).j(0.85),B.r,1),p=v.r
if(p==null)p=B.ao
w=A.m(u,u,t?B.aS:B.av,u,u,u,u,u,u,u,u,14,u,u,B.a8,u,u,!0,u,u,u,u,u,u,u,u)
return A.p(u,A.aN(u,B.Z,!1,u,!0,B.t,u,A.aO(),v.d,u,u,u,u,u,2,A.bA(u,B.eN,u,B.t8,u,u,u,u,!0,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,A.m(u,u,t?B.bu:B.bj,u,u,u,u,u,u,u,u,u,u,u,B.cD,u,u,!0,u,u,u,u,u,u,u,u),v.e,u,u,u,u,u,u,u,u,u,!0,!0,!1,u,A.X(v.f,B.bQ,u,u,u,20),u,u,u,u,u,u,u,u,u,u,u,u),B.y,!0,u,!0,u,!1,u,B.ak,u,u,u,u,u,u,u,u,u,v.x,v.w,u,!1,"\u2022",u,u,u,u,u,!1,u,u,!1,u,!0,u,B.ac,u,u,u,u,u,u,u,u,u,u,u,w,!0,B.a7,u,p,u,u,u,u),B.f,u,u,new A.o(s,u,q,r,u,u,B.n),u,u,u,u,u,u,u,u)}}
C.aeH.prototype={
B(d){var w=this,v=null,u=w.c.a,t=u?B.ef:B.c,s=A.l(12),r=A.K((u?B.eh:B.bO).j(0.85),B.r,1),q=A.X(B.tj,u?B.bu:B.bj,v,v,v,v),p=A.m(v,v,u?B.aS:B.av,v,v,v,v,v,v,v,v,14,v,v,B.a8,v,v,!0,v,v,v,v,v,v,v,v),o=u?B.ef:B.c
return A.p(v,new A.Eu(A.a5M(v,o,A.d(w.f,v,v,v,v,v,v,A.m(v,v,u?B.bu:B.bj,v,v,v,v,v,v,v,v,v,v,v,B.cD,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),q,!1,!0,w.r,w.w,p,v,w.d,w.$ti.c),v),B.f,v,v,new A.o(t,v,r,s,v,v,B.n),v,v,v,v,B.kX,v,v,v)}}
C.blb.prototype={
B(d){var w=new C.dyZ(this)
return A.A(A.a([w.$3(D.wM,"Male",B.Q8),B.ae,w.$3(D.oB,"Female",B.PV),B.ae,w.$3(D.zf,"Other",B.nM)],x.p),B.l,null,B.e,B.i,0,null,null)}}
C.aEf.prototype={
B(d){var w=this,v=null,u=w.c,t=u.a,s=t?B.jZ:B.iO,r=A.l(14),q=A.K(t?B.eh:B.bO,B.r,1),p=A.d(w.d,v,v,v,v,v,v,A.m(v,v,t?B.aS:B.av,v,v,v,v,v,v,v,v,13,v,v,B.H,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),o=x.p
return A.p(v,A.A(A.a([A.E(A.x(A.a([p,A.d(w.e,v,v,v,v,v,v,A.m(v,v,t?B.bu:B.bj,v,v,v,v,v,v,v,v,11,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],o),B.E,v,B.e,B.i,0,B.p),1),new C.aKt(u,B.x0,w.f,v),B.bn,new C.aKt(u,B.i_,w.r,v)],o),B.l,v,B.e,B.i,0,v,v),B.f,v,v,new A.o(s,v,q,r,v,v,B.n),v,v,v,v,B.ez,v,v,v)}}
C.aKt.prototype={
B(d){var w,v,u,t,s=this,r=null,q=s.e,p=q!=null
if(p)w=B.bQ.j(0.12)
else w=s.c.a?B.ef:B.c
v=A.l(10)
u=A.l(10)
if(p)t=B.bQ
else t=(s.c.a?B.bu:B.bj).j(0.4)
return A.aG(!1,B.a3,!0,v,A.aM(!1,u,!0,new A.a5(36,36,A.X(s.d,t,r,r,r,20),r),r,!0,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,r),B.f,w,0,r,r,r,r,r,B.ai)}}
C.aeJ.prototype={
bVG(d){switch(d.a){case 0:return B.bQ
case 1:return B.bE
case 2:return B.cC}},
bVH(d){switch(d.a){case 0:return"Male"
case 1:return"Female"
case 2:return"Not specified"}},
b_s(d){var w,v,u,t
if(d==null||d.length===0)return"\u2014"
for(w=this.d.f,v=w.length,u=0;u<v;++u){t=w[u]
if(t.a===d)return t.b}return"\u2014"},
AQ(d,e,f){var w,v,u,t,s,r,q,p=null,o=B.a.i(e)
if(o.length===0)o="\u2014"
w=this.e.a
v=w?B.ef:B.c
u=A.l(12)
t=A.K((w?B.eh:B.bO).j(0.85),B.r,1)
s=x.p
r=A.a([],s)
B.d.u(r,A.a([A.X(f,B.bQ,p,p,p,18),B.as],s))
q=A.d(d.toUpperCase(),p,p,p,p,p,p,A.m(p,p,w?B.bu:B.bj,p,p,p,p,p,p,p,p,9,p,p,B.H,p,p,!0,p,0.8,p,p,p,p,p,p),p,p,p)
r.push(A.E(A.x(A.a([q,B.ax,A.d(o,p,p,p,p,p,p,A.m(p,p,w?B.aS:B.av,p,p,p,p,p,p,p,p,14,p,p,B.O,p,1.35,!0,p,p,p,p,p,p,p,p),p,p,p)],s),B.E,p,B.e,B.i,0,B.p),1))
return A.p(p,A.A(r,B.E,p,B.e,B.i,0,p,p),B.f,p,p,new A.o(v,p,t,u,p,p,B.n),p,p,p,B.cw,B.yZ,p,p,1/0)},
afG(d,e){var w=null,v=this.e.a,u=A.d(d.toUpperCase(),w,w,w,w,w,w,A.m(w,w,v?B.bu:B.bj,w,w,w,w,w,w,w,w,10,w,w,B.H,w,w,!0,w,1.1,w,w,w,w,w,w),w,w,w),t=v?B.jZ:B.iO,s=A.l(16),r=A.K(v?B.eh:B.bO,B.r,1)
return A.x(A.a([new A.D(B.a1I,u,w),A.p(w,A.x(e,B.l,w,B.e,B.i,0,B.p),B.f,w,w,new A.o(t,w,r,s,w,w,B.n),w,w,w,w,B.bS,w,w,1/0)],x.p),B.E,w,B.e,B.i,0,B.p)},
B(d){var w,v,u,t=this,s=null,r=t.d,q=t.c,p=C.hJo(r,q),o=q.c,n=t.bVG(o),m=N.bFW(q.f),l=t.e.a,k=l?B.ef:B.c,j=A.l(22),i=q.b,h=A.d(i,s,s,s,s,s,s,A.m(s,s,l?B.aS:B.av,s,s,s,s,s,s,s,s,18,s,s,B.u,s,s,!0,s,s,s,s,s,s,s,s),B.K,s,s)
r=r.y===D.kZ?"Shared family tree \xb7 view only":"Member profile"
r=A.d(r,s,s,s,s,s,s,A.m(s,s,l?B.bu:B.bj,s,s,s,s,s,s,s,s,12,s,s,B.a8,s,s,!0,s,s,s,s,s,s,s,s),B.K,s,s)
w=A.K(n,B.r,3)
v=A.a([new A.ab(0,B.G,n.j(0.25),B.J,12)],x.V)
u=n.j(0.12)
l=A.as(A.p(s,A.hh(u,m,m==null?A.X(B.px,n,s,s,s,48):s,s,52),B.f,s,s,new A.o(s,s,w,s,v,s,B.a6),s,s,s,s,B.eC,s,s,s),s,s,s)
w=n.j(0.14)
v=A.l(20)
u=A.K(n.j(0.45),B.r,1)
v=A.as(A.p(s,A.d(t.bVH(o),s,s,s,s,s,s,A.m(s,s,n,s,s,s,s,s,s,s,s,12,s,s,B.H,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),B.f,s,s,new A.o(w,s,u,v,s,s,B.n),s,s,s,s,B.lO,s,s,s),s,s,s)
u=x.p
i=A.a([t.AQ("Full name",i,B.mj)],u)
if(p>0)i.push(t.AQ("Child order","#"+p,B.Q0))
r=A.a([h,B.ax,r,B.aO,l,B.T,v,B.bx,t.afG("Identity",i),B.af,t.afG("Life details",A.a([t.AQ("Birth date",q.w,D.aqa),t.AQ("Birth place",q.x,B.a37),t.AQ("Date of death",q.y,D.asf),t.AQ("Occupation",q.z,B.Qn)],u)),B.af,t.afG("Family links",A.a([t.AQ("1. Parent",t.b_s(q.d),B.HE),t.AQ("2. Spouse",t.b_s(q.e),B.HU)],u))],u)
q=q.r
if(B.a.i(q).length!==0)B.d.u(r,A.a([B.af,t.afG("Notes",A.a([t.AQ("Notes",q,B.l0)],u))],u))
r.push(B.bx)
r.push(A.bJ(B.Lp,s,new C.dz8(d),A.bp(B.aV,s,s,s,s,s,B.co,s,new A.ba(A.l(14),B.a1),s,s,s)))
return A.eI(s,k,new A.cN(B.m4,A.ca(A.x(r,B.al,s,B.e,B.N,0,B.p),B.t,s,B.y,s,s,B.wG,s,s,B.ah),s),s,s,s,B.Hg,s,B.d7,s,new A.ba(j,B.a1),s)}}
C.GD.prototype={
B(d){var w,v=this,u=null,t=v.r
if(t==null)t=v.f.a?B.bu:B.bj
w=t.j(v.f.a?0.14:0.08)
return new A.D(B.uQ,A.he(A.aG(!1,B.a3,!0,A.l(8),A.aM(!1,A.l(8),!0,new A.a5(30,30,A.X(v.d,t,u,u,u,16),u),u,!0,u,u,u,u,u,u,u,u,u,u,u,v.e,u,u,u,u,u,u,u),B.f,w,0,u,u,u,u,u,B.ai),u,v.c,u,u),u)}}
C.arB.prototype={
f2(){var w,v,u=this,t=x.N,s=A.T(t,x.z)
s.n(0,"marker","ngmyFamilyTreeSync")
s.n(0,"version",1)
s.n(0,"code",u.a)
s.n(0,"ownerEmail",u.b)
s.n(0,"exportedAt",u.d.aa().ag())
w=u.c
v=A.U(w).k("N<1,a9<n,@>>")
w=A.C(new A.N(w,new C.cge(),v),v.k("ak.E"))
s.n(0,"trees",w)
w=u.e
if(w.a!==0)s.n(0,"familyBooks",w.jp(w,new C.cgf(),t,x.fO))
return s}}
C.arC.prototype={
S(){return new C.aFO(A.a([],x.bF))},
gd1(){return this.c}}
C.aFO.prototype={
Y(){this.a3()
this.Ki()},
Ki(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$Ki=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.cgi(t.a.c),$async$Ki)
case 3:r=e
w=4
return A.b(C.Bm(t.a.c),$async$Ki)
case 4:q=e
p=t.a
if(!p.r)s=p.e||J.rr(q,new C.e4J(t))
else s=!1
if(t.c==null){w=1
break}t.m(new C.e4K(t,r,s))
case 1:return A.h(u,v)}})
return A.i($async$Ki,v)},
z9(d){var w=null,v=this.c
if(v==null)return
v.K(x.q).f.T(A.b2(w,w,w,w,w,B.t,w,A.d(d,w,w,w,w,w,w,w,w,w,w),w,B.Y,w,w,w,w,w,w,w,w,w,w))},
L6(d,e){return this.cKQ(d,e)},
cKQ(d,e){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this
var $async$L6=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(q.r){w=1
break}q.m(new C.e4O(q,e))
t=3
w=6
return A.b(d.$0(),$async$L6)
case 6:r.push(5)
w=4
break
case 3:r=[2]
case 4:t=2
if(q.c!=null){q.m(new C.e4P(q))
$.eY.mJ()}w=r.pop()
break
case 5:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$L6,v)},
YE(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$YE=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=t.a
w=3
return A.b(A.pF(r,s.c,s.e),$async$YE)
case 3:if(!e||t.c==null){w=1
break}w=4
return A.b(t.L6(new C.e4G(t),"Preparing download\u2026"),$async$YE)
case 4:case 1:return A.h(u,v)}})
return A.i($async$YE,v)},
YI(d){return this.bTy(d)},
bTy(d){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$YI=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=t.a
w=3
return A.b(A.pF(r,s.c,s.e),$async$YI)
case 3:if(!f||t.c==null){w=1
break}w=4
return A.b(t.L6(new C.e4H(t,d),"Preparing file\u2026"),$async$YI)
case 4:case 1:return A.h(u,v)}})
return A.i($async$YI,v)},
ahH(){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m
var $async$ahH=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b($.xS.cq().MS(B.T8,B.uT,!0),$async$ahH)
case 7:r=e
o=r
q=o==null?null:J.fn(o.a)
if(q==null){u=null
w=1
break}if(q.c!=null){o=q.c
o.toString
o=!B.aI.gau(o)}else o=!1
if(o){o=q.c
o.toString
o=A.jP(o,0,null)
u=o
w=1
break}t=2
w=6
break
case 4:t=3
m=s.pop()
p=A.ac(m)
$.am.$1("[family tree sync pick] file_picker: "+A.w(p))
w=6
break
case 3:w=2
break
case 6:u=A.Hz()
w=1
break
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$ahH,v)},
Zm(d){return this.c32(d)},
c32(d){var w=0,v=A.j(x.H),u=this
var $async$Zm=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=2
return A.b(u.L6(new C.e4I(u,d),"Restoring family trees\u2026"),$async$Zm)
case 2:return A.h(null,v)}})
return A.i($async$Zm,v)},
Zl(){var w=0,v=A.j(x.H),u,t=this,s
var $async$Zl=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(t.ahH(),$async$Zl)
case 3:s=e
if(s==null||B.a.i(s).length===0){w=1
break}w=4
return A.b(t.Zm(s),$async$Zl)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Zl,v)},
a3k(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a3k=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=t.a
w=3
return A.b(A.pF(r,s.c,s.e),$async$a3k)
case 3:if(!e||t.c==null){w=1
break}w=4
return A.b(t.L6(new C.e4N(t),"Creating QR code\u2026"),$async$a3k)
case 4:case 1:return A.h(u,v)}})
return A.i($async$a3k,v)},
a2W(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a2W=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!A.DG()){t.z9("Use a phone camera to scan, or upload the backup file on desktop.")
w=1
break}s=t.c
s.toString
w=3
return A.b(A.a6(s,!1).ce(A.ef(new C.e4L(),!0,null,x.N)),$async$a2W)
case 3:r=e
w=r!=null&&B.a.i(r).length!==0?4:5
break
case 4:w=6
return A.b(t.Zm(r),$async$a2W)
case 6:case 5:case 1:return A.h(u,v)}})
return A.i($async$a2W,v)},
B(d){var w,v,u,t,s,r,q=this,p=null,o=A.P(d).ax.a===B.I,n=o?B.C3:B.hY,m=o?D.alo:B.aS,l=o?B.aL:B.bO,k=o?B.aS:B.av,j=new C.diL(n,m,l,k,o?B.bP:B.bj)
l=A.aI(p,p,p,p,A.X(B.eK,k,p,p,p,20),p,p,p,new C.e4R(d),p,p,p,p,p,p)
w=q.a.r?"Restore family tree":"Family tree sync"
w=A.eS(p,p,p,!0,!0,n,p,1,!0,p,0,!1,p,!1,p,p,l,p,!0,0,p,p,p,p,A.d(w,p,p,p,p,p,p,A.m(p,p,k,p,p,p,p,p,p,p,p,17,p,p,B.u,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p,1,p,!0)
l=q.a
v=l.r
l=l.e
u=x.p
t=A.a([],u)
if(q.e){s=q.a.e?"Scannable backup":"2 scans max"
B.d.u(t,A.a([A.E(C.dij(!0,B.ju,B.aH,B.aH,q.r?p:q.gcBj(),j,s,"Show restore QR"),1),B.as],u))}s=q.e
r=q.r?p:q.gcxs()
t.push(A.E(C.dij(!s,B.jv,B.b8,B.bh,r,j,"From another phone","Scan QR to restore"),1))
t=A.A(t,B.l,p,B.e,B.i,0,p,p)
r=A.a([],u)
if(q.e)B.d.u(r,A.a([A.E(C.dij(!1,B.hC,B.aV,B.bQ,q.r?p:q.gbTr(),j,"Photos & books included","Download all trees"),1),B.as],u))
s=q.a.r?"Restore shared file":"From saved file"
r.push(A.E(C.dij(!1,R.zM,B.at,B.aQ,q.r?p:q.gc3_(),j,s,"Upload backup file"),1))
l=A.a([new C.bhp(v,l,p),B.lb,new C.adY(j,"QR restore",p),B.T,t,B.db,new C.adY(j,"Backup files",p),B.T,A.A(r,B.l,p,B.e,B.i,0,p,p)],u)
if(q.e&&J.ad(q.d)>1&&q.a.f==null){v=A.a([B.lb,new C.adY(j,"One tree",p),B.T],u)
B.d.u(v,J.b9(q.d,new C.e4S(q,j),x.l))
B.d.u(l,v)}l=A.a([A.cw(l,p,p,B.a1A,p,p,B.ah,!1)],u)
if(q.r){v=A.l(18)
t=A.K(B.aV.j(0.35),B.r,1)
s=A.a([new A.ab(0,B.G,B.w.j(o?0.3:0.1),B.dp,20)],x.V)
r=q.f
if(r==null)r="Working\u2026"
l.push(A.ao(24,A.bn(!0,A.p(p,A.A(A.a([O.aVi,B.bc,A.E(A.d(r,p,p,p,p,p,p,A.m(p,p,k,p,p,p,p,p,p,p,p,13,p,p,B.O,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),1)],u),B.l,p,B.e,B.i,0,p,p),B.f,p,p,new A.o(m,p,t,v,s,p,B.n),p,p,p,p,B.CN,p,p,p),!0,!1,B.ag,!0,!1),p,p,20,20,p,p))}return A.c6(w,n,new A.an(B.a0,p,B.ad,B.t,l,p),p,!1,!1,p,p)}}
C.diL.prototype={}
C.bhp.prototype={
B(d){var w,v,u,t,s,r,q,p=null
if(this.d)w="Upload a file or scan a QR from someone who shared their tree. View only until you create your own tree."
else w=this.e?"Photos and family books stay on this device. Admin skips cloud codes.":"Full trees stay local. QR works 2 times \u2014 names & dates sync to cloud only."
v=A.l(24)
u=A.a([new A.ab(0,B.G,B.aV.j(0.32),B.kG,28)],x.V)
t=A.ao(p,A.X(B.vd,B.c.j(0.07),p,p,p,110),p,p,p,-20,-10,p)
s=B.c.j(0.16)
r=A.l(18)
q=x.p
return A.p(p,new A.an(B.a0,p,B.ad,B.t,A.a([t,new A.D(B.ac,A.A(A.a([A.p(p,D.c4u,B.f,p,p,new A.o(s,p,A.K(B.c.j(0.35),B.r,1.5),r,p,p,B.n),p,56,p,p,p,p,p,56),B.p4,A.E(A.x(A.a([D.fRI,B.P,A.d(w,p,p,p,p,p,p,A.m(p,p,B.c.j(0.9),p,p,p,p,p,p,p,p,13,p,p,p,p,1.45,!0,p,p,p,p,p,p,p,p),p,p,p)],q),B.E,p,B.e,B.i,0,B.p),1)],q),B.E,p,B.e,B.i,0,p,p),p)],q),p),B.f,p,p,new A.o(p,p,p,v,u,D.ccF,B.n),p,p,p,p,p,p,p,p)}}
C.adY.prototype={
B(d){var w=null
return A.A(A.a([A.p(w,w,B.f,w,w,new A.o(B.aV,w,w,A.l(2),w,w,B.n),w,14,w,w,w,w,w,3),B.ae,A.d(this.d.toUpperCase(),w,w,w,w,w,w,A.m(w,w,this.c.e,w,w,w,w,w,w,w,w,11,w,w,B.H,w,w,!0,w,0.9,w,w,w,w,w,w),w,w,w)],x.p),B.l,w,B.e,B.i,0,w,w)}}
C.bhn.prototype={
B(d){var w,v,u,t,s,r=this,q=null,p=r.x,o=A.l(18),n=A.l(18),m=r.c,l=r.y,k=l?B.aH.j(0.4):m.c
k=A.K(k,B.r,l?1.5:1)
l=l?A.a([new A.ab(0,B.G,B.aH.j(0.1),B.cM,12)],x.V):q
w=p==null?0.45:1
v=r.w.j(0.14)
u=A.l(12)
t=r.r
s=A.K(t.j(0.35),B.r,1)
return A.aG(!1,B.a3,!0,q,A.aM(!1,o,!0,A.eE(A.d3(new A.D(E.a1e,A.x(A.a([A.p(q,A.X(r.d,t,q,q,q,22),B.f,q,q,new A.o(v,q,s,u,q,q,B.n),q,q,q,q,B.tc,q,q,q),B.af,A.d(r.e,q,q,q,q,q,q,A.m(q,q,m.d,q,q,q,q,q,q,q,q,13,q,q,B.u,q,1.2,!0,q,q,q,q,q,q,q,q),q,q,q),B.bF,A.d(r.f,q,q,q,q,q,q,A.m(q,q,m.e,q,q,q,q,q,q,q,q,11,q,q,B.cD,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],x.p),B.E,q,B.e,B.i,0,B.p),q),w),q,new A.o(m.b,q,k,n,l,q,B.n),q,q,q),q,!0,q,q,q,q,q,q,q,q,q,q,q,p,q,q,q,q,q,q,q),B.f,B.L,0,q,q,q,q,q,B.ai)}}
C.bhs.prototype={
B(d){var w=this,v=null,u=A.l(18),t=A.l(18),s=w.c,r=A.K(s.c,B.r,1),q=B.aV.j(0.14),p=A.l(12),o=s.e,n=x.p
return A.aG(!1,B.a3,!0,v,A.aM(!1,u,!0,A.eE(new A.D(B.eX,A.A(A.a([A.p(v,D.c3G,B.f,v,v,new A.o(q,v,A.K(B.aV.j(0.35),B.r,1),p,v,v,B.n),v,v,v,v,B.tc,v,v,v),B.bc,A.E(A.x(A.a([A.d(w.d,v,v,v,v,v,v,A.m(v,v,s.d,v,v,v,v,v,v,v,v,v,v,v,B.H,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.d(""+w.e+" members",v,v,v,v,v,v,A.m(v,v,o,v,v,v,v,v,v,v,v,11,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],n),B.E,v,B.e,B.i,0,B.p),1),A.X(B.hC,o,v,v,v,20)],n),B.l,v,B.e,B.i,0,v,v),v),v,new A.o(s.b,v,r,t,v,v,B.n),v,v,v),v,!0,v,v,v,v,v,v,v,v,v,v,v,w.f,v,v,v,v,v,v,v),B.f,B.L,0,v,v,v,v,v,B.ai)}}
C.a0O.prototype={
S(){return new C.aFN()},
gd1(){return this.c}}
C.aFN.prototype={
Y(){this.a3()
this.aax()},
aax(){var w=0,v=A.j(x.H),u=this,t
var $async$aax=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(A.b4C(u.a.c,B.EE),$async$aax)
case 2:t=e
if(u.c!=null)u.m(new C.e4B(u,t))
return A.h(null,v)}})
return A.i($async$aax,v)},
aj8(){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j
var $async$aj8=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(q.d){w=1
break}q.m(new C.e4C(q))
t=4
p=A.hup(q.a.d,B.EE)
if(p==null){n=A.bd("Could not read this QR code.")
throw A.W(n)}n=q.a
m=n.c
l=n.d
w=7
return A.b(A.atT(n.e,m,l,B.EE,p,n.f),$async$aj8)
case 7:if(q.c==null){r=[1]
w=5
break}q.m(new C.e4D(q))
q.c.K(x.q).f.T(D.fso)
r.push(6)
w=5
break
case 4:t=3
j=s.pop()
o=A.ac(j)
n=q.c
if(n==null){r=[1]
w=5
break}n.K(x.q).f.T(A.b2(null,null,null,null,null,B.t,null,A.d(B.a.el(J.k(o),"StateError: ",""),null,null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.m(new C.e4E(q))
w=r.pop()
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$aj8,v)},
B(d){var w,v,u,t,s,r=this,q=null,p=A.P(d).ax.a===B.I,o=p?B.ny:B.qr,n=p?B.iJ:B.c,m=r.a.f,l=m>=999?"Unlimited (admin)":""+m+" scans left"
m=A.eS(q,q,q,!0,!0,o,q,1,!0,q,0,!1,q,!1,q,q,q,q,!0,q,q,q,q,q,D.h7e,q,q,q,1,q,!0)
w=A.l(24)
v=A.K(B.aV.j(0.35),B.r,1)
u=A.qj(q,q,!1,r.a.d,q,!0,!0,q,!1,B.c)
t=A.d(l,q,q,q,q,q,q,A.m(q,q,B.aV,q,q,q,q,q,q,q,q,q,q,q,B.H,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
s=x.p
w=A.E(A.p(q,A.x(A.a([B.P,u,B.bx,t,B.P,A.d("Scan on another phone to restore photos, family book, and all tree details. Works only 2 times total.",q,q,q,q,q,q,A.m(q,q,p?B.aR:B.an,q,q,q,q,q,q,q,q,13,q,q,q,q,1.4,!0,q,q,q,q,q,q,q,q),B.K,q,q)],s),B.l,q,B.b9,B.i,0,B.p),B.f,q,q,new A.o(n,q,v,w,q,q,B.n),q,q,q,q,B.ac,q,q,1/0),1)
v=r.a.e
v=A.d("Code: "+v,q,q,q,q,q,q,A.m(q,q,p?B.ab:B.by,q,q,q,q,q,q,q,q,q,q,q,B.O,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
u=r.d
t=u||r.e===!0?q:r.gcxb()
if(u)u=B.KO
else u=A.X(r.e===!0?B.hd:B.aq9,q,q,q,q,q)
w=A.a([w,B.af,v,B.af,new A.a5(1/0,q,A.ep(u,q,A.d(r.e===!0?"Saved in QR Generator":"Save to QR Generator",q,q,q,q,q,q,B.ce,q,q,q),t,A.dj(q,q,q,q,q,q,q,q,q,B.aV,q,B.hg,q,q,q,new A.ay(B.aV.j(0.55),1,B.r,-1),q,q,q,q)),q)],s)
if(r.e===!0)w.push(new A.D(B.ig,A.d("Labeled \u201cNGMY Family Tree\u201d in Hub \u2192 QR Code Generator \u2192 Saved. Delete it there to save a new one.",q,q,q,q,q,q,A.m(q,q,p?B.aE:B.an,q,q,q,q,q,q,q,q,11,q,q,q,q,1.35,!0,q,q,q,q,q,q,q,q),B.K,q,q),q))
w.push(B.T)
w.push(new A.a5(1/0,q,A.bJ(B.Bb,q,new C.e4F(d),A.bp(B.aV,q,q,q,q,B.hg,q,q,q,q,q,q)),q))
return A.c6(m,o,new A.D(B.ac,A.x(w,B.l,q,B.e,B.i,0,B.p),q),q,!1,!1,q,q)}}
C.a0P.prototype={
S(){return new C.bmI(A.zV(B.yO,B.oe,B.vl))}}
C.bmI.prototype={
t(){this.d.t()
this.a2()},
B(d){var w=null
return A.c6(A.eS(w,w,w,!0,!0,B.w,w,1,!0,w,w,!1,w,!1,w,w,w,w,!0,w,w,w,w,w,D.fZX,w,w,w,1,w,!0),B.w,A.zU(this.d,B.bX,new C.e4T(this,d)),w,!1,!1,w,w)}}
C.b0t.prototype={
B(d){var w=null
return A.d(this.c,w,w,w,w,w,w,A.m(w,w,w,w,w,w,w,w,"Noto Color Emoji",B.SD,w,this.d,w,w,w,w,1,!0,w,w,w,w,w,w,w,w),w,w,w)}}
C.m1.prototype={}
C.a7E.prototype={
S(){return new C.bmm(null,null)}}
C.bmm.prototype={
Y(){var w=this,v=null
w.a3()
w.d=A.bo(v,B.t2,v,1,v,w)
w.e=A.bo(v,B.nC,v,1,v,w)
w.a.toString
w.d.cK(0)
w.e.cK(0)},
bz(d){var w,v,u=this
u.bK(d)
u.a.toString
w=u.d
w===$&&A.c()
v=w.r
if(!(v!=null&&v.a!=null))w.cK(0)
w=u.e
w===$&&A.c()
v=w.r
if(!(v!=null&&v.a!=null))w.cK(0)},
t(){var w=this.d
w===$&&A.c()
w.t()
w=this.e
w===$&&A.c()
w.t()
this.bzC()},
B(d){var w,v,u=this,t=B.d.dL(D.a7f,new C.dQL(u),new C.dQM())
u.a.toString
w=u.d
w===$&&A.c()
v=u.e
v===$&&A.c()
return A.cE0(A.c7(new A.hf(A.a([w,v],x.dS)),new C.dQN(u,t),null),!0)}}
C.bml.prototype={
a4(d,e){var w,v,u,t,s,r,q,p=this
switch(p.b){case"construction":p.b49(d,e)
break
case"house":p.mm(d,e,D.dkg)
w=p.c
v=0.5+0.5*Math.sin(w*3.141592653589793*2)
u=e.gdk()
$.S()
t=A.L()
t.r=B.c.j(0.18+v*0.12).gp(0)
d.O(new A.r(e.a*0.5,e.b*0.38),u*(0.22+v*0.06),t)
p.ms(d,e,B.c.j(0.4),-w*3.141592653589793*2,20)
p.BD(d,e,12)
p.yL(d,e,B.lk,5,14)
break
case"grocery":p.cm_(d,e)
break
case"calculator":p.clH(d,e)
break
case"lumber":p.cm7(d,e)
break
case"kitchen":p.cm2(d,e)
break
case"landscape":p.mm(d,e,D.dkS)
s=new A.aH($.S().r,B.aj,null,null,A.a([],x.v))
w=e.b
u=w*0.72
s.E(new A.aZ(0,u))
t=e.a
r=p.c*3.141592653589793*2
s.E(new A.ce(t*0.25,w*(0.62+Math.sin(r)*0.04),t*0.5,u))
s.E(new A.ce(t*0.75,w*(0.82+Math.cos(r)*0.04),t,w*0.68))
s.E(new A.aq(t,w))
s.E(new A.aq(0,w))
s.E(new A.bx())
w=A.L()
w.r=B.ep.j(0.85).gp(0)
d.af(s,w)
p.BD(d,e,8)
p.yL(d,e,B.iz,4,18)
break
case"plumbing":p.cmg(d,e)
break
case"electrical":p.mm(d,e,D.dwI)
w=p.c
q=(Math.sin(w*3.141592653589793*4)+1)/2
$.S()
u=A.L()
u.r=B.c.j(q*0.12).gp(0)
d.aF(new A.a4(0,0,0+e.a,0+e.b),u)
p.ms(d,e,B.c.j(0.5+q*0.3),-w*3.141592653589793*3,10)
p.ms(d,e,B.or.j(0.35+q*0.2),p.d*3.141592653589793*4,18)
p.BD(d,e,10)
break
case"store":p.cmr(d,e)
break
case"paint_remodel":p.cmb(d,e)
break
case"roofing":p.cmi(d,e)
break
case"warehouse":p.cmy(d,e)
break
case"vehicles":p.cmw(d,e)
break
case"farm":p.clU(d,e)
break
case"restaurant":p.cmh(d,e)
break
case"tools":p.cmu(d,e)
break
case"wallet":p.cmx(d,e)
break
case"concrete":p.clN(d,e)
break
case"blueprint":p.clF(d,e)
break
default:p.b49(d,e)}},
mm(d,e,f){var w,v=new A.a4(0,0,0+e.a,0+e.b)
$.S()
w=A.L()
w.san(new A.a7(B.ay,B.aC,B.x,f,null,null).aD(0,v))
d.aF(v,w)},
ms(d,e,f,g,h){var w,v,u,t=new A.r(e.a/2,e.b/2),s=e.gdk()/2-h
$.S()
w=A.L()
w.b=B.aa
w.c=2.4
w.r=f.gp(0)
for(v=0;v<24;++v){u=v/24*3.141592653589793*2+g
d.cQ(A.bW(t,s),u,u+0.1439896632895322-u,!1,w)}},
yL(d,e,f,g,h){var w,v,u,t,s,r,q=e.a/2,p=e.b/2,o=e.gdk()/2-h
for(w=this.c*3.141592653589793*2,v=0;v<g;++v){u=w+v/g*3.141592653589793*2
t=Math.cos(u)
s=Math.sin(u)
$.S()
r=new A.ar(B.S,B.Q,B.V,B.X,B.U)
r.r=f.j(0.55+0.35*Math.sin(u*2)).gp(0)
d.O(new A.r(q+t*o,p+s*o),3.5,r)}},
BD(d,e,f){var w,v,u,t,s,r,q,p
for(w=this.c*3.141592653589793*2,v=e.a,u=e.b,t=0;t<f;++t){s=(Math.sin(w+t*0.8)+1)/2
r=B.h.F(t*0.17,0.9)
q=B.h.F(t*0.23,0.85)
$.S()
p=new A.ar(B.S,B.Q,B.V,B.X,B.U)
p.r=B.c.j(0.2+s*0.6).gp(0)
d.O(new A.r(v*(r+0.05),u*(q+0.08)),1.5+s*2.5,p)}},
b49(d,e){var w,v=this
v.mm(d,e,D.duX)
w=v.c
v.ms(d,e,B.c.j(0.55),w*3.141592653589793*2,12)
v.ms(d,e,B.bL.j(0.45),-w*3.141592653589793*1.4,22)
v.bRn(d,e,B.hM,w)
v.yL(d,e,B.c.j(0.7),6,8)},
bRn(d,e,f,g){var w,v,u,t,s,r
$.S()
w=A.L()
w.r=f.j(0.35).gp(0)
for(v=e.b,u=g*3.141592653589793*2,t=16+(e.a-32),s=0;s<3;++s){r=v*(0.25+s*0.22)+Math.sin(u+s)*4
d.aF(new A.a4(16,r,t,r+3),w)}},
cm_(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=this
l.mm(d,e,D.cyq)
for(w=l.c*3.141592653589793*2,v=e.a,u=e.b,t=0;t<6;++t){s=w+t*1.1
r=B.o.F(t,3)
q=Math.sin(s)
p=B.o.ar(t,3)
o=Math.cos(s*0.8)
n=B.o.F(t,2)
$.S()
m=new A.ar(B.S,B.Q,B.V,B.X,B.U)
m.r=D.dim[B.o.F(t,4)].j(0.85).gp(0)
d.O(new A.r(v*(0.15+r*0.28)+q*8,u*(0.18+p*0.55)+o*10),7+n*2,m)}l.ms(d,e,B.c.j(0.35),w,16)
l.yL(d,e,B.iz,5,12)},
clH(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null
i.mm(d,e,D.cyy)
w=i.c*3.141592653589793
v=w*2
u=0.5+0.5*Math.sin(v)
t=e.a
s=e.b
r=e.gdk()
$.S()
q=A.L()
q.r=B.c.j(0.1+u*0.12).gp(0)
d.O(new A.r(t/2,s/2),r*(0.18+u*0.08),q)
p=A.fE(h,B.cx,h,h,h,h,B.a7,B.c1,h,B.dK,B.c2)
for(o=0;o<6;++o){n=v+o*0.9
r=D.dmI[o]
q=B.c.j(0.35+0.25*Math.sin(n))
m=B.o.F(o,2)
p.sb4(0,new A.et(r,h,h,B.cN,h,h,h,h,h,h,new A.H(!0,q,h,h,h,h,14+m*4,B.H,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h)))
p.ep()
p.a4(d,new A.r(t*(0.08+B.o.F(o,3)*0.3)+Math.sin(n)*6,s*(0.12+B.o.ar(o,3)*0.62)+Math.cos(n)*5))}for(v=i.d,r=v*3.141592653589793,q=r*2,o=0;o<6;++o){n=q+o*0.85
m=D.cyA[o]
l=B.kO.j(0.28+0.3*Math.sin(n))
k=B.o.F(o,2)
p.sb4(0,new A.et(m,h,h,B.cN,h,h,h,h,h,h,new A.H(!0,l,h,h,h,h,12+k*3,B.H,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h)))
p.ep()
p.a4(d,new A.r(t*(0.55+B.o.F(o,3)*0.12)+Math.cos(n)*7,s*(0.08+B.o.ar(o,3)*0.38)+Math.sin(n)*6))}i.ms(d,e,B.c.j(0.35),w*1.5,14)
i.ms(d,e,B.ey.j(0.55),-v*3.141592653589793*2,8)
i.ms(d,e,B.on.j(0.4),r*2.8,22)
i.yL(d,e,B.pl,8,10)
i.BD(d,e,14)
for(w=v*0.35,t-=12,o=0;o<4;++o){j=s*B.h.F(w+o*0.22,0.9)
$.S()
v=new A.ar(B.S,B.Q,B.V,B.X,B.U)
v.r=B.c.j(0.08+0.06*Math.sin(q+o)).gp(0)
v.c=1.2
d.ah(new A.r(12,j),new A.r(t,j),v)}},
cm7(d,e){var w,v,u,t,s,r,q,p,o=this
o.mm(d,e,W.aBX)
for(w=o.c*3.141592653589793*2,v=e.b*0.14,u=20+(e.a-40),t=0;t<5;++t){s=Math.sin(w+t*0.7)
r=v+t*v
q=A.by(new A.a4(20,r,u,r+10),B.iF)
$.S()
p=new A.ar(B.S,B.Q,B.V,B.X,B.U)
p.r=A.ap(B.fZ,B.oh,(s+1)/2).gp(0)
d.aq(q,p)}o.ms(d,e,B.fZ.j(0.35),w,15)
o.BD(d,e,8)},
cm2(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=this
l.mm(d,e,D.diS)
for(w=l.c,v=w*3.141592653589793*2,u=e.a,t=e.b,s=0;s<8;++s){r=v+s*0.75
q=(Math.sin(r)+1)/2
p=B.h.F(s*0.11,0.85)
o=Math.sin(r*1.3)
n=B.h.F(s*0.13,0.7)
$.S()
m=new A.ar(B.S,B.Q,B.V,B.X,B.U)
m.r=B.c.j(0.25+q*0.55).gp(0)
d.O(new A.r(u*(0.1+p)+o*12,t*(0.15+n)),2+q*3,m)}l.ms(d,e,B.bL.j(0.4),-w*3.141592653589793*2.2,11)
l.yL(d,e,B.qg,4,14)},
cmg(d,e){var w,v,u,t,s,r,q,p,o,n=this
n.mm(d,e,D.d6H)
for(w=e.a,v=Math.abs(w),u=e.b,t=Math.abs(u),s=n.c*0.08,w/=2,u*=0.55,r=0;r<3;++r){q=Math.min(v,t)
p=B.h.F(s,0.12)
$.S()
o=new A.ar(B.S,B.Q,B.V,B.X,B.U)
o.b=B.aa
o.c=2
o.r=B.c.j(0.45-r*0.12).gp(0)
d.O(new A.r(w,u),q*(0.12+r*0.14+p),o)}n.yL(d,e,B.pp,6,12)
n.ms(d,e,B.c.j(0.3),-n.d*3.141592653589793*2,18)},
cmr(d,e){var w,v,u,t,s,r,q,p=this
p.mm(d,e,D.cMk)
for(w=p.c*3.141592653589793*2,v=e.a-28,u=v/4-4,t=0;t<4;++t){s=Math.sin(w+t*1.5)
r=14+t*v/4
r=A.by(new A.a4(r,14,r+u,22),B.jy)
$.S()
q=new A.ar(B.S,B.Q,B.V,B.X,B.U)
q.r=A.ap(B.fB,B.bL,(s+1)/2).gp(0)
d.aq(r,q)}p.ms(d,e,B.c.j(0.3),w,16)
p.BD(d,e,8)
p.yL(d,e,B.wl,5,13)},
cmb(d,e){var w,v,u,t,s,r,q
this.mm(d,e,D.dde)
for(w=this.c,v=e.a,u=e.b,t=0;t<4;++t){s=B.h.F(w+t*0.2,1)
r=v*(0.18+t*0.18)
q=u*(0.15+s*0.55)
q=A.by(new A.a4(r,q,r+8,q+(18+s*22)),B.ir)
$.S()
r=new A.ar(B.S,B.Q,B.V,B.X,B.U)
r.r=[B.ix,B.dy,B.bL,B.ew][t].j(0.85).gp(0)
d.aq(q,r)}this.ms(d,e,B.c.j(0.45),w*3.141592653589793*2.5,13)},
cmi(d,e){var w,v,u,t,s,r,q
this.mm(d,e,D.dax)
for(w=e.b,v=this.c*0.35,u=e.a,t=0;t<8;++t){s=w*(0.12+B.h.F(v+t*0.12,0.75))
r=B.o.F(t,4)*0.22
$.S()
q=new A.ar(B.S,B.Q,B.V,B.X,B.U)
q.r=B.c.j(0.25).gp(0)
q.c=1.5
d.ah(new A.r(u*(0.1+r),s),new A.r(u*(0.18+r),s+10),q)}this.yL(d,e,B.cA,7,11)},
cmy(d,e){var w,v,u,t,s,r,q,p
this.mm(d,e,D.cP6)
for(w=this.c,v=w*3.141592653589793*2,u=e.b*0.55,t=e.a-44,s=0;s<4;++s){r=v+s
q=22+s*16
p=u-s*14+Math.sin(r)*4
p=A.by(new A.a4(q,p,q+(t-s*8),p+16),B.iF)
$.S()
q=new A.ar(B.S,B.Q,B.V,B.X,B.U)
q.r=A.ap(B.cA,B.aS,(Math.sin(r)+1)/2).gp(0)
d.aq(p,q)}this.ms(d,e,B.c.j(0.35),-w*3.141592653589793*1.8,15)},
cmw(d,e){var w,v,u,t,s,r,q
this.mm(d,e,D.dB4)
for(w=e.a,v=this.c*0.45,u=e.b,t=0;t<5;++t){s=w*(B.h.F(v+t*0.18,1.1)-0.05)
r=u*(0.62+B.o.F(t,2)*0.08)
r=A.by(new A.a4(s,r,s+28,r+8),B.iF)
$.S()
q=new A.ar(B.S,B.Q,B.V,B.X,B.U)
q.r=B.c.j(0.35+t*0.08).gp(0)
d.aq(r,q)}this.BD(d,e,6)},
clU(d,e){var w,v,u,t,s,r,q,p
this.mm(d,e,D.dho)
w=this.c*3.141592653589793*2
v=Math.sin(w)
u=e.a
t=e.b
$.S()
s=A.L()
s.r=B.or.j(0.75).gp(0)
d.O(new A.r(u*0.82,t*0.18),14+(0.5+0.5*v)*4,s)
for(v=t*0.72,t*=0.52,r=0;r<6;++r){s=Math.sin(w+r)
q=u*(0.12+r*0.14)
p=new A.ar(B.S,B.Q,B.V,B.X,B.U)
p.r=B.hK.j(0.85).gp(0)
p.c=3
d.ah(new A.r(q,v),new A.r(q+s*6,t),p)}this.ms(d,e,B.or.j(0.35),w,14)},
cmh(d,e){var w,v,u,t,s,r,q=this
q.mm(d,e,D.dk4)
for(w=q.c*3.141592653589793*2,v=e.a,u=e.b*0.42,t=0;t<4;++t){s=A.bX(new A.r(v*(0.28+t*0.16),u+Math.sin(w+t*0.9)*8),18,10)
$.S()
r=new A.ar(B.S,B.Q,B.V,B.X,B.U)
r.r=B.c.j(0.22).gp(0)
d.c0(s,r)}q.yL(d,e,B.qg,5,16)
q.BD(d,e,7)},
cmu(d,e){var w,v,u,t,s,r,q,p,o=this
o.mm(d,e,D.dym)
w=o.c
v=w*3.141592653589793
o.ms(d,e,B.oh.j(0.55),v*3,10)
o.ms(d,e,B.c.j(0.25),-w*3.141592653589793*2,24)
for(w=v*2,v=e.a/2,u=e.b/2,t=0;t<3;++t){s=w+t*2.1
r=Math.cos(s)
q=Math.sin(s)
$.S()
p=new A.ar(B.S,B.Q,B.V,B.X,B.U)
p.r=B.oh.j(0.8).gp(0)
d.O(new A.r(v+r*34,u+q*22),4,p)}},
cmx(d,e){var w,v,u,t,s,r,q,p,o=this
o.mm(d,e,D.dBP)
for(w=o.c*3.141592653589793,v=w*2,u=e.a,t=e.b,s=0;s<5;++s){r=(Math.sin(v+s*1.2)+1)/2
q=u*(0.2+s*0.03)
p=t*(0.28+r*0.08)
p=A.by(new A.a4(q,p,q+36,p+22),B.jy)
$.S()
q=new A.ar(B.S,B.Q,B.V,B.X,B.U)
q.r=A.ap(B.iz,B.or,r).gp(0)
d.aq(p,q)}o.BD(d,e,9)
o.ms(d,e,B.c.j(0.4),w*2.2,12)},
clN(d,e){var w,v,u,t,s,r,q,p
this.mm(d,e,D.dpH)
w=this.c*3.141592653589793*2
v=e.a/2
u=e.b*0.55
t=A.bW(new A.r(v,u),34)
$.S()
s=A.L()
s.b=B.aa
s.c=5
s.r=B.c.j(0.45).gp(0)
d.cQ(t,w,3.7699111843077517,!1,s)
for(r=0;r<6;++r){q=w+r*1.05
t=Math.cos(q)
s=Math.sin(q)
p=new A.ar(B.S,B.Q,B.V,B.X,B.U)
p.r=B.bO.j(0.85).gp(0)
d.O(new A.r(v+t*34,u+s*34),3,p)}},
clF(d,e){var w,v,u,t,s,r,q
this.mm(d,e,D.dlc)
$.S()
w=A.L()
w.r=B.c.j(0.12).gp(0)
w.c=1
for(v=e.a,u=e.b,t=0;t<v;t+=18)d.ah(new A.r(t,0),new A.r(t,u),w)
for(s=0;s<u;s+=18)d.ah(new A.r(0,s),new A.r(v,s),w)
r=this.c
q=u*B.h.F(r*0.85,1)
$.S()
u=A.L()
u.r=B.dy.j(0.45).gp(0)
d.aF(new A.a4(0,q,0+v,q+6),u)
this.ms(d,e,B.lk.j(0.45),-r*3.141592653589793*2,11)},
aE(d){return d.c!==this.c||d.d!==this.d||d.b!==this.b}}
C.auE.prototype={
a0C(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a0C=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.aSB(),$async$a0C)
case 3:r=e
if(r==null){w=1
break}s=t.c
w=s!=null&&s!==r?4:5
break
case 4:w=6
return A.b(C.a9Y(s),$async$a0C)
case 6:case 5:t.d.$1(r)
case 1:return A.h(u,v)}})
return A.i($async$a0C,v)},
ahI(d){return this.coR(d)},
coR(d){var w=0,v=A.j(x.H),u=this,t
var $async$ahI=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=2
return A.b(C.ivd(d),$async$ahI)
case 2:t=f
if(t!=null)u.d.$1(t)
return A.h(null,v)}})
return A.i($async$ahI,v)},
B(d){var w,v,u=null,t=A.P(d),s=this.c,r=s!=null&&B.a.i(s).length!==0
s=r?s:"ngmy:thumb:construction"
t=t.ax.a===B.I?B.jZ:B.iO
w=x.p
v=A.a([C.aSZ(!0,B.rt,1/0,B.qN,u,s,1/0)],w)
if(!r)v.push(new A.bN(new A.o(u,u,u,u,u,new A.a7(B.aY,B.b3,B.x,A.a([B.L,B.w.j(0.35)],x.O),u,u),B.n),B.bk,new A.bK(B.aY,u,u,new A.D(B.t5,A.d("Pick a theme or your own photo",u,u,u,u,u,u,A.m(u,u,B.c.j(0.92),u,u,u,u,u,u,u,u,11,u,u,B.O,u,u,!0,u,u,u,u,u,B.aCW,u,u),u,u,u),u),u),u))
v.push(A.ao(8,A.A(A.a([A.E(A.df(D.bY1,u,D.fNQ,new C.cpL(this,d),A.bp(B.aV,u,u,u,B.c,u,B.k6,u,u,u,u,B.ch)),1),B.ae,A.E(A.ep(D.c5N,u,D.h28,this.gcfK(),A.dj(u,u,B.w.j(0.35),u,u,u,u,u,u,B.c,u,u,B.k6,u,u,D.b6K,u,u,u,B.ch)),1)],w),B.l,u,B.e,B.i,0,u,u),u,u,8,8,u,u))
return new A.fH(1.7777777777777777,A.aG(!1,B.a3,!0,B.rt,new A.an(B.a0,u,B.b1,B.t,v,u),B.aq,t,0,u,u,u,u,u,B.ai),u)}}
C.aNT.prototype={
aX(){this.b8()
this.b5()
this.dI()},
t(){var w=this,v=w.b9$
if(v!=null)v.a6(0,w.gdC())
w.b9$=null
w.a2()}}
C.aVV.prototype={}
C.aVU.prototype={}
C.aTX.prototype={}
C.a_s.prototype={
S(){return new C.aAY()}}
C.aAY.prototype={
Y(){var w,v,u=this
u.a3()
u.a.toString
w=new A.bb("",B.b7,B.aP)
v=$.ax()
u.d!==$&&A.aQ()
u.d=new A.au(w,v)},
t(){var w=this.d
w===$&&A.c()
w.V$=$.ax()
w.R$=0
this.a2()},
KW(){var w,v,u=this,t=u.d
t===$&&A.c()
w=B.a.i(t.a.a)
if(w.length===0){u.c.K(x.q).f.T(D.fsU)
return}t=u.c
t.toString
v=u.e
A.a6(t,!1).N(new C.aVV(w,v))},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=A.P(d).ax.a===B.I,l=m?B.ef:B.c,k=A.l(20),j=A.p(n,D.c5s,B.f,n,n,new A.o(B.aV.j(0.15),n,n,A.l(12),n,n,B.n),n,44,n,n,n,n,n,44),i=A.d("Create Project",n,n,n,n,n,n,A.m(n,n,m?B.aS:B.av,n,n,n,n,n,n,n,n,18,n,n,B.u,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),h=x.p
i=A.E(A.x(A.a([i,B.bF,A.d("Add a thumbnail and budget items after creating.",n,n,n,n,n,n,A.m(n,n,m?B.bu:B.bj,n,n,n,n,n,n,n,n,12,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],h),B.E,n,B.e,B.i,0,B.p),1)
j=A.A(A.a([j,B.bc,i,A.aI(n,n,n,n,A.X(B.cB,m?B.bu:B.bj,n,n,n,n),n,n,n,new C.d9W(d),n,n,n,n,n,n)],h),B.l,n,B.e,B.i,0,n,n)
i=A.d("Project thumbnail (16:9)",n,n,n,n,n,n,A.m(n,n,m?B.bu:B.bj,n,n,n,n,n,n,n,n,12,n,n,B.O,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
w=A.d("Full animated preview \u2014 use Themes or Your photos below",n,n,n,n,n,n,A.m(n,n,m?B.bu:B.bj,n,n,n,n,n,n,n,n,11,n,n,B.cD,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
v=C.huF(new C.d9X(o),o.e)
u=o.d
u===$&&A.c()
t=A.m(n,n,m?B.aS:B.av,n,n,n,n,n,n,n,n,n,n,n,B.a8,n,n,!0,n,n,n,n,n,n,n,n)
s=m?B.jZ:B.iO
r=A.l(12)
q=A.l(12)
p=m?B.eh:B.bO
t=A.aN(n,B.Z,!0,n,!0,B.t,n,A.aO(),u,n,n,n,n,n,2,A.bA(n,new A.b6(4,r,B.du),n,n,n,n,n,n,!0,new A.b6(4,q,new A.ay(p,1,B.r,-1)),n,n,n,n,n,s,!0,n,n,n,n,n,n,n,n,n,n,n,n,n,n,"Kitchen remodel, Wedding, etc.",n,n,n,n,n,n,n,n,"Project name",!0,!0,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n),B.y,!0,n,!0,n,!1,n,B.ak,n,n,n,n,n,n,n,n,n,1,n,n,!1,"\u2022",n,n,n,new C.d9Y(o),n,!1,n,n,!1,n,!0,n,B.ac,n,n,n,n,n,n,n,n,n,n,n,t,!0,B.a7,n,A_.KX,n,n,n,n)
u=m?B.aS:B.av
m=m?B.eh:B.bO
return A.eI(n,l,new A.cN(B.m4,A.ca(A.x(A.a([j,B.aO,i,B.ax,w,B.P,v,B.aO,t,B.bx,A.A(A.a([A.E(A.dW(B.ds,new C.d9Z(d),A.dj(n,n,n,n,n,n,n,n,n,u,n,n,B.co,n,new A.ba(A.l(12),B.a1),new A.ay(m,1,B.r,-1),n,n,n,n)),1),B.as,A.E(A.bJ(D.h2o,n,o.ga3G(),A.bp(B.aV,n,n,n,B.c,n,B.co,n,new A.ba(A.l(12),B.a1),n,n,n)),1)],h),B.l,n,B.e,B.i,0,n,n)],h),B.E,n,B.e,B.N,0,B.p),B.t,n,B.y,n,n,B.CP,n,n,B.ah),n),n,n,n,A1.CQ,n,B.d7,n,new A.ba(k,B.a1),n)}}
C.a_r.prototype={
S(){return new C.aAX()}}
C.aAX.prototype={
Y(){this.a3()
var w=$.ax()
this.d!==$&&A.aQ()
this.d=new A.au(B.aw,w)},
t(){var w=this.d
w===$&&A.c()
w.V$=$.ax()
w.R$=0
this.a2()},
KW(){var w,v=this.d
v===$&&A.c()
w=B.a.i(v.a.a)
if(w.length===0){this.c.K(x.q).f.T(D.fqv)
return}v=this.c
v.toString
A.a6(v,!1).N(new C.aVU(w))},
B(d){var w,v,u,t,s,r,q=null,p=A.P(d).ax.a===B.I,o=p?B.ef:B.c,n=A.l(20),m=A.p(q,D.c1M,B.f,q,q,new A.o(B.bQ.j(0.15),q,q,A.l(12),q,q,B.n),q,44,q,q,q,q,q,44),l=A.d("Create Family Tree",q,q,q,q,q,q,A.m(q,q,p?B.aS:B.av,q,q,q,q,q,q,q,q,18,q,q,B.u,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),k=x.p
l=A.E(A.x(A.a([l,B.bF,A.d("Build generations with photos, notes, and profiles.",q,q,q,q,q,q,A.m(q,q,p?B.bu:B.bj,q,q,q,q,q,q,q,q,12,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],k),B.E,q,B.e,B.i,0,B.p),1)
m=A.A(A.a([m,B.bc,l,A.aI(q,q,q,q,A.X(B.cB,p?B.bu:B.bj,q,q,q,q),q,q,q,new C.d9S(d),q,q,q,q,q,q)],k),B.l,q,B.e,B.i,0,q,q)
l=B.aV.j(p?0.12:0.08)
w=A.l(12)
v=A.K(B.aV.j(0.25),B.r,1)
u=A.X(B.apW,B.aV.j(0.9),q,q,q,18)
l=A.p(q,A.A(A.a([u,B.as,A.E(A.d("Example: Historia ya M'Bembe",q,q,q,q,q,q,A.m(q,q,p?B.aS:B.av,q,q,q,q,q,q,q,q,12,q,q,B.a8,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),1)],k),B.l,q,B.e,B.i,0,q,q),B.f,q,q,new A.o(l,q,v,w,q,q,B.n),q,q,q,q,B.bH,q,q,1/0)
w=this.d
w===$&&A.c()
v=A.m(q,q,p?B.aS:B.av,q,q,q,q,q,q,q,q,q,q,q,B.a8,q,q,!0,q,q,q,q,q,q,q,q)
u=p?B.jZ:B.iO
t=A.l(12)
s=A.l(12)
r=p?B.eh:B.bO
v=A.aN(q,B.Z,!0,q,!0,B.t,q,A.aO(),w,q,q,q,q,q,2,A.bA(q,new A.b6(4,t,B.du),q,q,q,q,q,q,!0,new A.b6(4,s,new A.ay(r,1,B.r,-1)),q,q,q,q,q,u,!0,q,q,q,q,q,q,q,q,q,q,q,q,q,q,"Enter your family name or title",q,q,q,q,q,q,q,q,"Family tree name",!0,!0,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q),B.y,!0,q,!0,q,!1,q,B.ak,q,q,q,q,q,q,q,q,q,1,q,q,!1,"\u2022",q,q,q,new C.d9T(this),q,!1,q,q,!1,q,!0,q,B.ac,q,q,q,q,q,q,q,q,q,q,q,v,!0,B.a7,q,B.lc,q,q,q,q)
w=p?B.aS:B.av
p=p?B.eh:B.bO
return A.eI(q,o,new A.cN(B.m4,A.ca(A.x(A.a([m,B.aO,l,B.aB,v,B.bx,A.A(A.a([A.E(A.dW(B.ds,new C.d9U(d),A.dj(q,q,q,q,q,q,q,q,q,w,q,q,B.co,q,new A.ba(A.l(12),B.a1),new A.ay(p,1,B.r,-1),q,q,q,q)),1),B.as,A.E(A.bJ(D.h9v,q,this.ga3G(),A.bp(B.bQ,q,q,q,B.c,q,B.co,q,new A.ba(A.l(12),B.a1),q,q,q)),1)],k),B.l,q,B.e,B.i,0,q,q)],k),B.E,q,B.e,B.N,0,B.p),B.t,q,B.y,q,q,B.CP,q,q,B.ah),q),q,q,q,A1.CQ,q,B.d7,q,new A.ba(n,B.a1),q)}}
C.ZY.prototype={
S(){return new C.azD()}}
C.azD.prototype={
Y(){var w,v=this
v.a3()
w=$.ax()
v.d!==$&&A.aQ()
v.d=new A.au(B.aw,w)
v.e!==$&&A.aQ()
v.e=new A.au(new A.bb("1",B.b7,B.aP),w)
v.f!==$&&A.aQ()
v.f=new A.au(B.aw,w)
v.r!==$&&A.aQ()
v.r=new A.au(B.aw,w)},
t(){var w,v=this,u=v.d
u===$&&A.c()
w=u.V$=$.ax()
u.R$=0
u=v.e
u===$&&A.c()
u.V$=w
u.R$=0
u=v.f
u===$&&A.c()
u.V$=w
u.R$=0
u=v.r
u===$&&A.c()
u.V$=w
u.R$=0
v.a2()},
gKd(){var w,v=this.e
v===$&&A.c()
w=A.cX(B.a.i(v.a.a))
if(w==null||w<=0)return 1
return w},
gakS(){var w=this.f
w===$&&A.c()
w=A.cX(B.a.i(w.a.a))
return w==null?0:w},
gb6Y(){var w,v=this.w
if(v==="other"){v=this.r
v===$&&A.c()
w=B.a.i(v.a.a)
return w.length===0?"units":w}return v},
aRb(d){var w,v=B.h.D(this.gKd()+d,0.25,999999),u=B.h.fK(v),t=this.e
t===$&&A.c()
if(v===u)u=B.o.v(B.h.M(v))
else{u=B.h.ad(v,2)
w=A.ag("\\.?0+$",!0,!1,!1,!1)
u=A.aL(u,w,"")}t.sb4(0,u)
this.m(new C.cI5())},
aAa(d,e,f,g){var w=null,v=g!=null?A.X(g,B.aV,w,w,w,20):w,u=d.a,t=u?B.jZ:B.iO,s=A.l(14),r=A.l(14)
u=u?B.eh:B.bO
return A.bA(w,new A.b6(4,s,B.du),w,B.bH,w,w,w,w,!0,new A.b6(4,r,new A.ay(u,1,B.r,-1)),w,w,w,w,w,t,!0,w,w,w,w,new A.b6(4,A.l(14),B.afc),w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w,w,e,!0,!0,!1,w,v,w,w,w,w,w,w,w,w,w,w,w,w)},
cfL(d,e,f){return this.aAa(d,e,f,null)},
KW(){var w,v,u,t,s=this,r=s.d
r===$&&A.c()
w=B.a.i(r.a.a)
if(s.gakS()<=0){s.c.K(x.q).f.T(D.fuP)
return}r=s.c
r.toString
v=s.gKd()
u=s.gakS()
t=s.gb6Y()
A.a6(r,!1).N(new C.aTX(w,v,u,t))},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=A.P(d).ax.a===B.I,m=new C.um(n),l=n?B.ef:B.c,k=A.l(24),j=x.O,i=A.a([B.aV.j(0.22),B.bQ.j(0.14)],j),h=A.l(14)
i=A.p(o,D.bVY,B.f,o,o,new A.o(o,o,A.K(B.aV.j(0.35),B.r,1),h,o,new A.a7(B.a5,B.a9,B.x,i,o,o),B.n),o,48,o,o,o,o,o,48)
h=A.d("Add Budget Item",o,o,o,o,o,o,A.m(o,o,n?B.aS:B.av,o,o,o,o,o,o,o,o,19,o,o,B.u,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)
w=x.p
h=A.E(A.x(A.a([h,B.bF,A.d("Amount required \xb7 name optional",o,o,o,o,o,o,A.m(o,o,n?B.bu:B.bj,o,o,o,o,o,o,o,o,12,o,o,B.cD,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],w),B.E,o,B.e,B.i,0,B.p),1)
i=A.A(A.a([i,B.bc,h,A.aI(o,o,o,o,A.X(B.cB,n?B.bu:B.bj,o,o,o,o),o,o,o,new C.cIb(d),o,o,o,o,o,o)],w),B.l,o,B.e,B.i,0,o,o)
h=p.d
h===$&&A.c()
v=A.m(o,o,n?B.aS:B.av,o,o,o,o,o,o,o,o,o,o,o,B.a8,o,o,!0,o,o,o,o,o,o,o,o)
v=A.aN(o,B.Z,!0,o,!0,B.t,o,A.aO(),h,o,o,o,o,o,2,p.aAa(m,"Item name (optional)","Lumber, paint, labor\u2026",B.Q6),B.y,!0,o,!0,o,!1,o,B.ak,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.ac,o,o,o,o,o,o,o,o,o,o,o,v,!0,B.a7,o,A_.KX,o,o,o,o)
h=A.d("Units",o,o,o,o,o,o,A.m(o,o,n?B.bu:B.bj,o,o,o,o,o,o,o,o,12,o,o,B.H,o,o,!0,o,0.3,o,o,o,o,o,o),o,o,o)
u=n?B.jZ:B.iO
t=A.l(14)
s=A.K(n?B.eh:B.bO,B.r,1)
r=A.aI(o,o,o,o,A.X(B.x0,n?B.aS:B.av,o,o,o,20),o,o,o,new C.cIc(p),o,o,o,o,o,B.ch)
q=p.e
q===$&&A.c()
q=A.aN(o,B.Z,!1,o,!0,B.t,o,A.aO(),q,o,o,o,o,o,2,D.c7l,B.y,!0,o,!0,o,!1,o,B.ak,o,o,o,o,o,B.eb,o,o,o,1,o,o,!1,"\u2022",o,new C.cId(p),o,o,o,!1,o,o,!1,o,!0,o,B.ac,o,o,o,o,o,o,o,o,o,o,o,A.m(o,o,n?B.aS:B.av,o,o,o,o,o,o,o,o,16,o,o,B.u,o,o,!0,o,o,o,o,o,o,o,o),!0,B.K,o,B.ao,o,o,o,o)
u=A.p(o,A.A(A.a([r,new A.a5(52,o,q,o),A.aI(o,o,o,o,A.X(B.i_,n?B.aS:B.av,o,o,o,20),o,o,o,new C.cIe(p),o,o,o,o,o,B.ch)],w),B.l,o,B.e,B.N,0,o,o),B.f,o,o,new A.o(u,o,s,t,o,o,B.n),o,o,o,o,o,o,o,o)
t=p.f
t===$&&A.c()
s=A.m(o,o,n?B.aS:B.av,o,o,o,o,o,o,o,o,16,o,o,B.O,o,o,!0,o,o,o,o,o,o,o,o)
s=A.A(A.a([u,B.as,A.E(A.aN(o,B.Z,!1,o,!0,B.t,o,A.aO(),t,o,o,o,o,o,2,p.aAa(m,"Amount","0.00",B.hB),B.y,!0,o,!0,o,!1,o,B.ak,o,o,o,o,o,B.eb,o,o,o,1,o,o,!1,"\u2022",o,new C.cIf(p),o,o,o,!1,o,o,!1,o,!0,o,B.ac,o,o,o,o,o,o,o,o,o,o,o,s,!0,B.a7,o,B.ao,o,o,o,o),1)],w),B.E,o,B.e,B.i,0,o,o)
t=x.gv
u=A.C(new A.N(D.ddM,new C.cIg(p,m),t),t.k("ak.E"))
i=A.a([i,B.bx,v,B.aB,h,B.P,s,B.af,A.c_(B.bI,u,B.br,o,6,6)],w)
if(p.w==="other"){h=p.r
h===$&&A.c()
v=A.m(o,o,n?B.aS:B.av,o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o)
B.d.u(i,A.a([B.T,A.aN(o,B.Z,!1,o,!0,B.t,o,A.aO(),h,o,o,o,o,o,2,p.cfL(m,"Custom unit","rolls, sheets, trips\u2026"),B.y,!0,o,!0,o,!1,o,B.ak,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,new C.cIh(p),o,o,o,!1,o,o,!1,o,!0,o,B.ac,o,o,o,o,o,o,o,o,o,o,o,v,!0,B.a7,o,B.lc,o,o,o,o)],w))}i.push(B.aO)
h=B.aV.j(n?0.18:0.1)
j=A.a([h,B.bQ.j(n?0.12:0.06)],j)
h=A.l(16)
v=A.K(B.aV.j(0.35),B.r,1)
u=A.d("Line total",o,o,o,o,o,o,A.m(o,o,n?B.bu:B.bj,o,o,o,o,o,o,o,o,11,o,o,B.O,o,o,!0,o,0.4,o,o,o,o,o,o),o,o,o)
t=p.gKd()===B.h.fK(p.gKd())?B.h.M(p.gKd()):p.gKd()
s=p.gb6Y()
r=A.Bo(p.gakS())
i.push(A.p(o,A.A(A.a([A.E(A.x(A.a([u,B.ax,A.d(A.w(t)+" "+s+" \xd7 "+r,o,o,o,o,o,o,A.m(o,o,n?B.bu:B.bj,o,o,o,o,o,o,o,o,12,o,o,B.a8,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],w),B.E,o,B.e,B.i,0,B.p),1),C.bGL(p.gKd()*p.gakS(),B.b2,!1,B.u)],w),B.l,o,B.e,B.i,0,o,o),B.f,o,o,new A.o(o,o,v,h,o,new A.a7(B.a5,B.a9,B.x,j,o,o),B.n),o,o,o,o,B.jr,o,o,o))
i.push(B.bx)
j=A.l(14)
h=n?B.eh:B.bO
h=A.dj(o,o,o,o,o,o,o,o,o,o,o,o,B.co,o,new A.ba(j,B.a1),new A.ay(h,1,B.r,-1),o,o,o,o)
i.push(A.A(A.a([A.E(A.dW(A.d("Cancel",o,o,o,o,o,o,A.m(o,o,n?B.aS:B.av,o,o,o,o,o,o,o,o,o,o,o,B.O,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),new C.cIi(d),h),1),B.as,A.E(A.df(D.atp,o,D.h5p,p.ga3G(),A.bp(B.aV,o,o,0,B.c,o,B.co,o,new A.ba(A.l(14),B.a1),o,o,o)),2)],w),B.l,o,B.e,B.i,0,o,o))
return A.eI(o,l,new A.cN(B.Mp,A.ca(A.x(i,B.al,o,B.e,B.N,0,B.p),B.t,o,B.y,o,o,Ai.ta,o,o,B.ah),o),o,o,o,B.OH,o,B.d7,o,new A.ba(k,B.a1),o)}}
C.a2A.prototype={
S(){return new C.bza()}}
C.bza.prototype={
Y(){var w,v,u=this
u.a3()
w=u.a.e
v=$.ax()
u.d!==$&&A.aQ()
u.d=new A.au(new A.bb(w,B.b7,B.aP),v)},
t(){var w=this.d
w===$&&A.c()
w.V$=$.ax()
w.R$=0
this.a2()},
B(d){var w,v,u,t=this,s=null,r=A.P(d).ax.a===B.I,q=r?B.ef:B.c,p=A.l(20),o=t.a.c
o=A.d(o,s,s,s,s,s,s,A.m(s,s,r?B.aS:B.av,s,s,s,s,s,s,s,s,18,s,s,B.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)
w=t.d
w===$&&A.c()
v=A.m(s,s,r?B.aS:B.av,s,s,s,s,s,s,s,s,s,s,s,s,s,s,!0,s,s,s,s,s,s,s,s)
u=t.a.d
r=r?B.jZ:B.iO
v=A.aN(s,B.Z,!0,s,!0,B.t,s,A.aO(),w,s,s,s,s,s,2,A.bA(s,new A.b6(4,A.l(12),B.du),s,s,s,s,s,s,!0,s,s,s,s,s,s,r,!0,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,u,!0,!0,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s),B.y,!0,s,!0,s,!1,s,B.ak,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,new C.fof(t,d),s,!1,s,s,!1,s,!0,s,B.ac,s,s,s,s,s,s,s,s,s,s,s,v,!0,B.a7,s,B.ao,s,s,s,s)
u=A.E(A.dW(B.ds,new C.fog(d),s),1)
r=A.bp(B.bQ,s,s,s,s,s,s,s,s,s,s,s)
w=x.p
return A.eI(s,q,new A.D(B.CP,A.x(A.a([o,B.aB,v,B.aO,A.A(A.a([u,B.as,A.E(A.bJ(A.d(t.a.f,s,s,s,s,s,s,s,s,s,s),s,new C.foh(t,d),r),1)],w),B.l,s,B.e,B.i,0,s,s)],w),B.l,s,B.e,B.N,0,B.p),s),s,s,s,s,s,B.d7,s,new A.ba(p,B.a1),s)}}
C.ad_.prototype={
a7(){return"WorksheetFrameStyle."+this.b}}
C.Gr.prototype={
S(){return new C.bz8(null,null)}}
C.bz8.prototype={
Y(){var w,v=this
v.a3()
w=A.bo(null,D.bCO,null,1,null,v)
w.cK(0)
v.d!==$&&A.aQ()
v.d=w},
t(){var w=this.d
w===$&&A.c()
w.t()
this.bBX()},
gbDy(){switch(this.a.r.a){case 1:return A.a([B.aV,B.bQ,B.b2],x.O)
case 2:return A.a([B.bv,B.aV,B.b2],x.O)
case 3:return A.a([B.aH,B.cj,B.jG],x.O)
case 4:return A.a([B.fK,B.bQ,B.fq],x.O)
case 0:return A.a([B.aV,B.bQ,B.b2],x.O)}},
B(d){var w=A.P(d),v=this.d
v===$&&A.c()
return new A.e8(A.c7(v,new C.fod(this,new C.um(w.ax.a===B.I)),null),null)}}
C.azw.prototype={
S(){return new C.bz9(null,null)}}
C.bz9.prototype={
Y(){var w,v=this
v.a3()
w=A.bo(null,B.nD,null,1,null,v)
w.cK(0)
v.d!==$&&A.aQ()
v.d=w},
t(){var w=this.d
w===$&&A.c()
w.t()
this.bBY()},
B(d){var w=this.d
w===$&&A.c()
return A.c7(w,new C.foe(this),null)}}
C.bz7.prototype={
a4(d,e){var w,v,u,t,s,r,q,p=this,o=e.a
if(o<8||e.b<8)return
w=p.c
v=A.by(new A.a4(1.5,1.5,1.5+(o-3),1.5+(e.b-3)),new A.aP(w,w))
u=new A.aH($.S().r,B.aj,null,null,A.a([],x.v))
u.E(new A.jg(v))
w=A.L()
w.b=B.aa
w.c=5
o=p.f
t=p.e
w.r=o[1].j(0.14*t).gp(0)
d.aq(v,w)
w=A.L()
w.b=B.aa
w.c=2.8
o=p.d?o[0]:o[2]
w.r=o.j(0.55*t).gp(0)
d.af(u,w)
w=A.BP(u)
t=A.a([],x.U)
w=new A.uU(w,!1,t)
for(o=p.b,s=-o*0.85;w.C();){r=w.c
if(r===0||w.f)A.bj(A.jN(y.B));--r
q=new A.BQ(w,r)
w.jP()
r=t[r].b
r===$&&A.c()
r=r.a.length()
p.aUM(d,q,r,o,0,0.2,4.2,0.92)
p.aUM(d,q,r,s,0.52,0.11,3.2,0.58)}},
aUM(d,e,f,g,h,i,j,k){var w,v,u,t=B.h.F(g+h,1)*f,s=A.hRR(e.a.a,e,t,t+f*i,!0),r=A.ai4(s.glg().a.getBounds())
$.S()
w=A.L()
w.b=B.aa
w.c=j
w.d=B.bG
w.f=!0
v=this.f
u=k*this.e
w.san(new A.a7(B.a5,B.a9,B.x,A.a([v[0].j(0),v[0].j(u),v[1].j(u),v[0].j(0)],x.O),B.IQ,null).aD(0,r))
d.af(s,w)},
aE(d){return d.b!==this.b||d.d!==this.d}}
C.aQ0.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbC())
w.a9$=null
w.a2()},
aX(){this.b8()
this.b5()
this.bD()}}
C.aQ1.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbC())
w.a9$=null
w.a2()},
aX(){this.b8()
this.b5()
this.bD()}}
C.um.prototype={}
C.auD.prototype={
S(){return new C.aHj()},
ge3(){return this.c}}
C.aHj.prototype={
Y(){var w=this
w.a3()
w.d=w.a.d
w.aiz()},
t(){var w=this.a.c,v=this.d
v===$&&A.c()
C.Mj(w,v)
this.a2()},
aiz(){var w=0,v=A.j(x.H),u=this,t,s
var $async$aiz=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return A.b(C.bFa(t.c,t.d.a),$async$aiz)
case 2:s=e
if(s!=null&&u.c!=null)u.m(new C.eWW(u,s))
return A.h(null,v)}})
return A.i($async$aiz,v)},
R_(){var w=0,v=A.j(x.H),u=this,t,s
var $async$R_=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:u.m(new C.eWN(u))
t=u.a.c
s=u.d
s===$&&A.c()
w=2
return A.b(C.Mj(t,s),$async$R_)
case 2:if(u.c!=null)u.m(new C.eWO(u))
return A.h(null,v)}})
return A.i($async$R_,v)},
Ry(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$Ry=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.c
p.toString
p=A.P(p)
s=t.c
s.toString
w=3
return A.b(A.cg(null,null,!0,null,new C.eWU(t,new C.um(p.ax.a===B.I)),s,null,!0,!0,x.T),$async$Ry)
case 3:r=e
if(r==null||t.c==null){w=1
break}p=t.d
p===$&&A.c()
q=p.c
w=q!=null&&q!==r?4:5
break
case 4:w=6
return A.b(C.a9Y(q),$async$Ry)
case 6:case 5:t.m(new C.eWV(t,r))
w=7
return A.b(t.R_(),$async$Ry)
case 7:case 1:return A.h(u,v)}})
return A.i($async$Ry,v)},
WL(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$WL=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return A.b(C.iuZ(r),$async$WL)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.m(new C.eWI(t,new C.rw(B.o.v(1000*Date.now()),s.a,s.b,s.c,s.d)))
w=4
return A.b(t.R_(),$async$WL)
case 4:case 1:return A.h(u,v)}})
return A.i($async$WL,v)},
ckR(){var w,v,u=this,t=u.c
t.toString
w=u.a.c
v=u.d
v===$&&A.c()
C.hJk(t,new C.eWM(u),w,v)},
acl(d){var w=null,v=B.c.j(d?0.85:0.55)
return A.p(w,w,B.f,w,w,new A.o(w,w,new A.bH(new A.ay(v,2.5,B.r,-1),B.a1,B.a1,new A.ay(B.c.j(d?0.85:0.55),2.5,B.r,-1)),D.b6w,w,w,B.n),w,22,w,w,w,w,w,22)},
abn(d){return this.bPC(d)},
bPC(d){var w=0,v=A.j(x.H),u=this
var $async$abn=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:u.m(new C.eWL(u,d))
w=2
return A.b(u.R_(),$async$abn)
case 2:return A.h(null,v)}})
return A.i($async$abn,v)},
B(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=A.P(a2).ax.a===B.I,e=f?B.c6:B.hY,d=A.l(8),a0=A.X(Y.a2P,f?B.bu:B.bj,g,g,g,16),a1=x.p
a0=A.aM(!1,d,!0,new A.D(B.Hm,A.A(A.a([a0,B.bn,A.d("Back to Projects",g,g,g,g,g,g,A.m(g,g,f?B.bu:B.bj,g,g,g,g,g,g,g,g,g,g,g,B.a8,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)],a1),B.l,g,B.e,B.N,0,g,g),g),g,!0,g,g,g,g,g,g,g,g,g,g,g,new C.eWX(h,a2),g,g,g,g,g,g,g)
d=h.d
d===$&&A.c()
d=d.c
if(d!=null&&B.a.Z(d,"ngmy:thumb:"))d=new A.an(B.a0,g,B.b1,B.t,A.a([A.bv(A.l(22),C.aSZ(!0,A.l(22),1/0,B.qN,g,d,1/0),B.aq),A.ao(10,A.df(D.c_G,g,D.h7N,h.gb4U(),A.bp(B.w.j(0.45),g,g,g,B.c,g,B.hn,g,new A.ba(A.l(12),B.a1),g,g,g)),g,g,g,10,g,g)],a1),g)
else{d=A.l(22)
w=x.V
v=A.a([new A.ab(0,B.G,B.aV.j(f?0.5:0.38),B.eS,22),new A.ab(-4,B.G,B.bQ.j(0.2),B.J,32)],w)
u=A.l(17)
t=A.K(B.c.j(0.45),B.r,1.2)
w=A.a([new A.ab(-2,B.G,B.c.j(0.18),B.J,10)],w)
s=A.l(16)
r=h.d
v=A.p(g,A.p(g,A.bv(s,new A.an(B.a0,g,B.b1,B.t,A.a([C.aSZ(!0,A.l(16),1/0,B.Pz,g,r.c,1/0),new A.bN(new A.o(g,g,g,g,g,new A.a7(B.aY,B.b3,B.x,A.a([B.c.j(0.06),B.L,B.w.j(0.22)],x.O),g,g),B.n),B.bk,g,g),A.ao(g,h.acl(!0),g,g,8,g,8,g),A.ao(g,A.cEL(h.acl(!0),!0,!1),g,g,g,8,8,g),A.ao(8,A.cEL(h.acl(!1),!1,!0),g,g,8,g,g,g),A.ao(8,A.cEL(h.acl(!1),!0,!0),g,g,g,8,g,g),A.ao(10,A.df(D.bWz,g,D.h16,h.gb4U(),A.bp(B.w.j(0.45),g,g,g,B.c,g,B.hn,g,new A.ba(A.l(12),B.a1),g,g,g)),g,g,g,10,g,g)],a1),g),B.aq),B.f,g,g,new A.o(g,g,t,u,w,g,B.n),g,g,g,g,g,g,g,g),B.f,g,g,new A.o(g,g,g,d,v,D.c92,B.n),g,g,g,g,B.lQ,g,g,g)
d=v}w=h.d
w=A.d(w.b,g,g,g,g,g,g,A.m(g,g,f?B.aS:B.av,g,g,g,g,g,g,g,g,22,g,g,B.u,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)
q=h.d.d.length
v=A.l(22)
u=x.O
u=f?A.a([D.bhw,B.ol,B.hk],u):A.a([B.b2,B.aV,B.bQ],u)
t=x.V
s=A.a([new A.ab(0,B.G,B.aV.j(f?0.45:0.35),B.eS,24)],t)
r=A.l(22)
p=A.ao(g,A.X(B.js,B.c.j(0.08),g,g,g,120),g,g,g,-24,-24,g)
o=B.c.j(0.16)
n=A.l(20)
m=A.K(B.c.j(0.22),B.r,1)
l=q===1?"item":"items"
n=A.a([A.A(A.a([A.p(g,A.d(""+q+" "+l,g,g,g,g,g,g,A.m(g,g,B.c.j(0.92),g,g,g,g,g,g,g,g,11,g,g,B.H,g,g,!0,g,0.3,g,g,g,g,g,g),g,g,g),B.f,g,g,new A.o(o,g,m,n,g,g,B.n),g,g,g,g,B.hl,g,g,g)],a1),B.l,g,B.e,B.i,0,g,g),B.aB,A.d("PROJECT TOTAL",g,g,g,g,g,g,A.m(g,g,B.c.j(0.75),g,g,g,g,g,g,g,g,11,g,g,B.H,g,g,!0,g,1.4,g,g,g,g,g,g),g,g,g),B.am,C.bGL(h.d.gxK(),B.c,!0,B.u)],a1)
if(q>0)B.d.u(n,A.a([B.P,A.d("Sum of all budget line items",g,g,g,g,g,g,A.m(g,g,B.c.j(0.65),g,g,g,g,g,g,g,g,11,g,g,B.cD,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)],a1))
o=A.E(A.x(n,B.E,g,B.e,B.i,0,B.p),1)
n=A.l(14)
m=A.l(14)
l=B.c.j(0.12)
k=A.K(B.h9.j(0.75),B.r,1.6)
t=A.a([new A.ab(0,B.G,B.aH.j(0.28),B.cM,14)],t)
j=B.aH.j(0.22)
i=A.l(10)
u=A.p(g,A.bv(r,new A.an(B.a0,g,B.ad,B.t,A.a([p,new A.D(D.bHH,A.A(A.a([o,B.as,A.aG(!1,B.a3,!0,g,A.aM(!1,n,!0,A.eE(new A.D(V.wE,A.x(A.a([A.p(g,D.asZ,B.f,g,g,new A.o(j,g,A.K(B.aH.j(0.5),B.r,1),i,g,g,B.n),g,g,g,g,B.cq,g,g,g),B.fE,D.fQH],a1),B.l,g,B.e,B.N,0,B.p),g),g,new A.o(l,g,k,m,t,g,B.n),g,g,g),g,!0,g,g,g,g,g,g,g,g,g,g,g,h.gckQ(),g,g,g,g,g,g,g),B.f,B.L,0,g,g,g,g,g,B.ai)],a1),B.l,g,B.e,B.i,0,g,g),g)],a1),g),B.aq),B.f,g,g,new A.o(g,g,g,v,s,new A.a7(B.ay,B.aC,B.x,u,g,g),B.n),g,g,g,g,g,g,g,g)
s=h.d.d.length
d=A.a([new A.fH(1.7777777777777777,d,g),B.aO,w,B.P,u,B.bx,A.A(A.a([A.d("Budget Items ("+s+")",g,g,g,g,g,g,A.m(g,g,f?B.aS:B.av,g,g,g,g,g,g,g,g,16,g,g,B.H,g,g,!0,g,g,g,g,g,g,g,g),g,g,g),B.b4,A.df(Au.a4G,g,D.fOw,h.gbE1(),A.bp(B.aV,g,g,g,B.c,g,B.hP,g,new A.ba(A.l(12),B.a1),g,g,g))],a1),B.l,g,B.e,B.i,0,g,g),B.af],a1)
w=h.d.d
if(w.length===0){w=f?B.ef:B.c
v=A.l(14)
u=A.K(f?B.eh:B.bO,B.r,1)
t=A.X(B.a3a,f?B.bu:B.bj,g,g,g,48)
s=A.d("No budget items yet",g,g,g,g,g,g,A.m(g,g,f?B.aS:B.av,g,g,g,g,g,g,g,g,g,g,g,B.O,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)
d.push(A.p(g,A.x(A.a([t,B.T,s,B.am,A.d("Add item names, units, and prices to track spending.",g,g,g,g,g,g,A.m(g,g,f?B.bu:B.bj,g,g,g,g,g,g,g,g,g,g,g,g,g,g,!0,g,g,g,g,g,g,g,g),B.K,g,g)],a1),B.l,g,B.e,B.i,0,B.p),B.f,g,g,new A.o(w,g,u,v,g,g,B.n),g,g,g,g,B.qJ,g,g,1/0))}else B.d.u(d,new A.N(w,new C.eWY(h,new C.um(f)),A.U(w).k("N<1,v>")))
if(h.e)d.push(new A.D(B.CB,A.as(A.na(g,f?B.bu:B.bj,g,g,g,g,g,g,g,g),g,g,g),g))
return A.c6(g,e,A.bn(!0,A.x(A.a([new A.D(B.CG,a0,g),A.E(A.ca(A.x(d,B.E,g,B.e,B.i,0,B.p),B.t,g,B.y,g,g,E.z5,g,g,B.ah),1)],a1),B.E,g,B.e,B.i,0,B.p),!0,!1,B.ag,!0,!0),g,!1,!1,g,g)},
bHI(d,e){var w,v,u=null,t=d.b,s=B.a.i(t).length===0,r=e.a,q=r?B.ef:B.c,p=A.l(16),o=A.a([new A.ab(0,B.G,B.w.j(r?0.35:0.08),B.cM,12)],x.V),n=A.l(16),m=A.p(u,u,B.f,u,u,D.b9h,u,u,u,u,u,u,u,5),l=B.aV.j(r?0.22:0.12),k=A.l(12)
l=A.p(u,A.X(s?B.ii:B.h3,B.b2,u,u,u,20),B.f,u,u,new A.o(l,u,u,k,u,u,B.n),u,40,u,u,u,u,u,40)
if(s)t=B.bM
else{k=x.p
t=A.a([A.d(t,u,2,B.a2,u,u,u,A.m(u,u,r?B.aS:B.av,u,u,u,u,u,u,u,u,15,u,u,B.H,u,1.25,!0,u,u,u,u,u,u,u,u),u,u,u)],k)
if(d.c!==1||d.e!=="each"){w=d.gd0v()
v=A.Bo(d.d)
B.d.u(t,A.a([B.ax,A.d(w+" "+v,u,u,u,u,u,u,A.m(u,u,r?B.bu:B.bj,u,u,u,u,u,u,u,u,12,u,u,B.a8,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],k))}t=A.x(t,B.E,u,B.b9,B.N,0,B.p)}t=A.E(t,1)
k=A.a([B.aV.j(0.14),B.bQ.j(0.1)],x.O)
w=A.l(12)
k=A.p(u,C.bGL(d.c*d.d,B.b2,!1,B.u),B.f,u,u,new A.o(u,u,u,w,u,new A.a7(B.a5,B.a9,B.x,k,u,u),B.n),u,u,u,u,B.hn,u,u,u)
w=x.p
return A.p(u,A.bv(n,new A.ER(A.A(A.a([m,A.E(new A.D(B.amR,A.A(A.a([l,B.bc,t,B.ae,k,A.aI(u,u,u,u,A.X(B.cB,(r?B.bu:B.bj).j(0.75),u,u,u,20),u,u,u,new C.eWJ(this,d),u,u,u,u,u,B.ch)],w),B.l,u,B.e,B.i,0,u,u),u),1)],w),B.al,u,B.e,B.i,0,u,u),u),B.aq),B.f,u,D.b87,new A.o(q,u,u,p,o,u,B.n),u,u,u,B.da,u,u,u,u)}}
C.af3.prototype={
F1(d){return this.bR_(d)},
bR_(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$F1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:o=t.c
w=3
return A.b(A.pF(d,o,!1),$async$F1)
case 3:if(!f||d.e==null){w=1
break}A.a6(d,!1).N(null)
w=4
return A.b(A.bO(Ah.Cz,null,x.H),$async$F1)
case 4:s=t.d
w=5
return A.b(C.fYq(!0,o,s),$async$F1)
case 5:r=f
q=A.ag("[^\\w\\-.]+",!0,!1,!1,!1)
w=6
return A.b(A.Hm(r,"ngmy_project_"+A.aL(s.b,q,"_"),!1),$async$F1)
case 6:p=f
w=7
return A.b(A.pE(o,!1),$async$F1)
case 7:if(d.e==null){w=1
break}d.K(x.q).f.T(A.b2(null,null,null,null,null,B.t,null,A.d(p,null,null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$F1,v)},
a0E(d){return this.cBk(d)},
cBk(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$a0E=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.c
w=3
return A.b(A.pF(d,s,!1),$async$a0E)
case 3:if(!f||d.e==null){w=1
break}A.a6(d,!1).N(null)
A.hF(d,new C.aux(s,t.d,null),!1,"NgmyWorksheetProjectQr",x.H)
w=4
return A.b(A.pE(s,!1),$async$a0E)
case 4:case 1:return A.h(u,v)}})
return A.i($async$a0E,v)},
R0(d){return this.cxn(d)},
cxn(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$R0=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:A.a6(d,!1).N(null)
w=3
return A.b(A.hF(d,D.aMJ,!0,"NgmyWorksheetProjectScan",x.N),$async$R0)
case 3:s=f
if(s==null||B.a.i(s).length===0){w=1
break}w=4
return A.b(C.bGM(s),$async$R0)
case 4:r=f
if(r==null){if(d.e==null){w=1
break}d.K(x.q).f.T(D.ftV)
w=1
break}q=C.hk9(r)
p=t.e.$1(q)
w=5
return A.b(x.x.b(p)?p:A.dN(p,x.H),$async$R0)
case 5:if(d.e==null){w=1
break}d.K(x.q).f.T(A.b2(null,null,null,null,null,B.t,null,A.d('Imported "'+q.b+'" from QR',null,null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$R0,v)},
a0F(d){return this.cJG(d)},
cJG(d){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$a0F=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:A.a6(d,!1).N(null)
w=3
return A.b(C.bGg(),$async$a0F)
case 3:s=f
if(s==null){w=1
break}r=C.hk9(s)
q=t.e.$1(r)
w=4
return A.b(x.x.b(q)?q:A.dN(q,x.H),$async$a0F)
case 4:if(d.e==null){w=1
break}d.K(x.q).f.T(A.b2(null,null,null,null,null,B.t,null,A.d('Imported "'+r.b+'" from file',null,null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$a0F,v)},
B(d){var w=this,v=null,u=A.P(d).ax.a===B.I,t=new C.um(u),s=w.d.d.length,r=u?B.ef:B.c,q=A.l(28),p=A.a([new A.ab(0,B.G,B.w.j(u?0.35:0.08),B.kG,36)],x.V),o=x.p
return A.bn(!0,new A.D(B.wD,A.p(v,A.x(A.a([w.czU(d,t,s),new A.D(D.bH4,A.x(A.a([w.b7T(t,"QR restore"),B.T,A.A(A.a([w.b2T(t,!0,B.ju,B.aH,B.aH,new C.eX_(w,d),"Show to scan","QR code"),B.as,w.aAb(t,B.jv,B.b8,B.bh,new C.eX0(w,d),"From camera","Scan QR")],o),B.l,v,B.e,B.i,0,v,v),B.db,w.b7T(t,"Backup files"),B.T,A.A(A.a([w.aAb(t,B.hC,B.aV,B.bQ,new C.eX1(w,d),"Full copy","Backup file"),B.as,w.aAb(t,R.zM,B.at,B.aQ,new C.eX2(w,d),".json backup","Upload file")],o),B.l,v,B.e,B.i,0,v,v)],o),B.E,v,B.e,B.i,0,B.p),v)],o),B.l,v,B.e,B.N,0,B.p),B.aq,v,v,new A.o(r,v,v,q,p,v,B.n),v,v,v,v,v,v,v,v),v),!0,!1,B.ag,!0,!0)},
czU(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=x.O
k=e.a?A.a([B.ff,B.cW,B.fX],k):A.a([B.b2,B.aV,B.bQ],k)
w=A.ao(l,A.X(B.vd,B.c.j(0.07),l,l,l,110),l,l,l,-20,-10,l)
v=A.as(A.p(l,l,B.f,l,l,new A.o(B.c.j(0.35),l,l,A.l(4),l,l,B.n),l,4,l,B.kB,l,l,l,36),l,l,l)
u=A.l(14)
t=A.K(B.c.j(0.45),B.r,1.5)
s=A.a([new A.ab(0,B.G,B.w.j(0.2),B.cM,12)],x.V)
r=this.d
s=A.p(l,C.aSZ(!0,A.l(13),64,D.bRL,l,r.c,64),B.aq,l,l,new A.o(l,l,t,u,s,l,B.n),l,64,l,l,l,l,l,64)
u=A.d("Share project",l,l,l,l,l,l,A.m(l,l,B.c.j(0.78),l,l,l,l,l,l,l,l,11,l,l,B.H,l,l,!0,l,1.1,l,l,l,l,l,l),l,l,l)
t=A.d(r.b,l,2,B.a2,l,l,l,I.acx,l,l,l)
r=C.bGL(r.gxK(),B.c,!1,B.u)
q=B.c.j(0.16)
p=A.l(20)
o=A.K(B.c.j(0.22),B.r,1)
n=f===1?"item":"items"
m=x.p
return A.p(l,new A.an(B.a0,l,B.ad,B.t,A.a([w,new A.D(D.bHs,A.x(A.a([v,A.A(A.a([s,B.eu,A.E(A.x(A.a([u,B.ax,t,B.P,A.A(A.a([r,B.ae,A.p(l,A.d(""+f+" "+n,l,l,l,l,l,l,A.m(l,l,B.c.j(0.9),l,l,l,l,l,l,l,l,10,l,l,B.H,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),B.f,l,l,new A.o(q,l,o,p,l,l,B.n),l,l,l,l,B.fN,l,l,l)],m),B.l,l,B.e,B.i,0,l,l)],m),B.E,l,B.e,B.i,0,B.p),1),A.aI(l,l,l,l,A.X(B.cB,B.c.j(0.85),l,l,l,l),l,l,l,new C.eWZ(d),l,l,l,A.ne(l,B.c.j(0.12),l,l,l,l,l,l,l,l,l,l,E.aV5,l,l,l,l),l,l)],m),B.E,l,B.e,B.i,0,l,l)],m),B.l,l,B.e,B.i,0,B.p),l)],m),l),B.f,l,l,new A.o(l,l,l,l,l,new A.a7(B.ay,B.aC,B.x,k,l,l),B.n),l,l,l,l,l,l,l,1/0)},
b7T(d,e){var w=null,v=A.p(w,w,B.f,w,w,new A.o(B.aV,w,w,A.l(2),w,w,B.n),w,14,w,w,w,w,w,3)
return A.A(A.a([v,B.ae,A.d(e.toUpperCase(),w,w,w,w,w,w,A.m(w,w,d.a?B.bu:B.bj,w,w,w,w,w,w,w,w,11,w,w,B.H,w,w,!0,w,0.9,w,w,w,w,w,w),w,w,w)],x.p),B.l,w,B.e,B.i,0,w,w)},
b2T(d,e,f,g,h,i,j,k){var w,v,u,t,s,r=null,q=A.l(18),p=A.l(18),o=d.a,n=o?D.alo:B.aS
if(e)w=B.aH.j(o?0.45:0.35)
else{w=o?B.eh:B.bO
w=w.j(o?0.8:1)}w=A.K(w,B.r,e?1.5:1)
v=e?A.a([new A.ab(0,B.G,B.aH.j(0.12),B.cM,14)],x.V):r
u=g.j(o?0.22:0.14)
t=A.l(12)
s=A.K(h.j(0.35),B.r,1)
t=A.p(r,A.X(f,h,r,r,r,22),B.f,r,r,new A.o(u,r,s,t,r,r,B.n),r,r,r,r,B.tc,r,r,r)
u=A.d(k,r,r,r,r,r,r,A.m(r,r,o?B.aS:B.av,r,r,r,r,r,r,r,r,14,r,r,B.u,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
return A.E(A.aG(!1,B.a3,!0,r,A.aM(!1,q,!0,A.eE(new A.D(E.a1e,A.x(A.a([t,B.af,u,B.bF,A.d(j,r,r,r,r,r,r,A.m(r,r,o?B.bu:B.bj,r,r,r,r,r,r,r,r,11,r,r,B.cD,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),B.E,r,B.e,B.i,0,B.p),r),r,new A.o(n,r,w,p,v,r,B.n),r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,i,r,r,r,r,r,r,r),B.f,B.L,0,r,r,r,r,r,B.ai),1)},
aAb(d,e,f,g,h,i,j){return this.b2T(d,!1,e,f,g,h,i,j)}}
C.aux.prototype={
S(){return new C.bo4()}}
C.bo4.prototype={
Y(){this.a3()
this.ags()},
ags(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n
var $async$ags=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
p=r.a
w=7
return A.b(C.bGN(p.c,p.d),$async$ags)
case 7:q=e
if(r.c==null){w=1
break}r.m(new C.eWD(r,q))
t=2
w=6
break
case 4:t=3
n=s.pop()
if(r.c==null){w=1
break}r.m(new C.eWE(r))
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$ags,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=A.P(d).ax.a===B.I,f=g?B.C3:B.hY,e=i.d
e=e==null?h:B.a.Z(e,"NGMYWSSYNC2|")
w=e===!0
v=i.a.d.d.length
e=A.aI(h,h,h,h,A.X(B.eK,g?B.ab:B.an,h,h,h,18),h,h,h,new C.eWF(d),h,h,h,h,h,h)
u=x.p
e=A.A(A.a([e,A.E(A.d("Project QR",h,h,h,h,h,h,A.m(h,h,g?B.c:B.a_,h,h,h,h,h,h,h,h,17,h,h,B.u,h,h,!0,h,h,h,h,h,h,h,h),B.K,h,h),1),B.tW],u),B.l,h,B.e,B.i,0,h,h)
t=A.l(24)
s=x.O
s=g?A.a([B.ff,B.cW,B.fX],s):A.a([B.b2,B.aV,B.bQ],s)
r=x.V
q=A.a([new A.ab(0,B.G,B.aV.j(g?0.4:0.3),B.eS,24)],r)
p=i.a.d
o=A.d(p.b,h,h,h,h,h,h,B.dl,B.K,h,h)
p=C.bGL(p.gxK(),B.c,!1,B.u)
n=B.c.j(0.16)
m=A.l(20)
l=v===1?"item":"items"
s=A.p(h,A.x(A.a([o,B.am,A.A(A.a([p,B.ae,A.p(h,A.d(""+v+" "+l,h,h,h,h,h,h,A.m(h,h,B.c.j(0.9),h,h,h,h,h,h,h,h,10,h,h,B.H,h,h,!0,h,h,h,h,h,h,h,h),h,h,h),B.f,h,h,new A.o(n,h,h,m,h,h,B.n),h,h,h,h,B.fN,h,h,h)],u),B.l,h,B.b9,B.i,0,h,h)],u),B.l,h,B.e,B.i,0,B.p),B.f,h,h,new A.o(h,h,h,t,q,new A.a7(B.ay,B.aC,B.x,s,h,h),B.n),h,h,h,h,E.a1z,h,h,1/0)
t=g?D.bt7:B.c
q=A.l(24)
p=A.K(w?B.aH.j(0.4):B.aV.j(0.3),B.r,1)
r=A.a([new A.ab(0,B.G,B.w.j(g?0.25:0.06),B.dp,20)],r)
o=A.a([],u)
n=i.e
if(n!=null)o.push(A.d(n,h,h,h,h,h,h,B.W0,B.K,h,h))
else{n=i.d
if(n==null)o.push(D.eyy)
else{m=A.l(20)
l=A.K(B.bm,B.r,1)
o.push(A.p(h,A.qj(h,h,!1,n,h,!0,!0,h,!1,B.c),B.f,h,h,new A.o(B.c,h,l,m,h,h,B.n),h,h,h,h,B.bT,h,h,h))}}o.push(B.aO)
n=w?B.aH:B.aV
n=n.j(g?0.15:0.1)
m=A.l(12)
l=A.K((w?B.aH:B.aV).j(0.35),B.r,1)
k=w?B.PP:B.Qm
k=A.X(k,w?B.aH:B.aV,h,h,h,18)
j=w?"Cloud QR \u2014 includes thumbnail and all budget items.":"Offline QR \u2014 use backup file for the full project copy."
o.push(A.p(h,A.A(A.a([k,B.as,A.E(A.d(j,h,h,h,h,h,h,A.m(h,h,g?B.ab:B.an,h,h,h,h,h,h,h,h,12,h,h,B.a8,h,1.35,!0,h,h,h,h,h,h,h,h),h,h,h),1)],u),B.l,h,B.e,B.i,0,h,h),B.f,h,h,new A.o(n,h,l,m,h,h,B.n),h,h,h,h,B.hP,h,h,h))
return A.c6(h,f,A.bn(!0,A.x(A.a([new A.D(Ae.OV,e,h),A.E(A.ca(A.x(A.a([s,B.aO,A.p(h,A.x(o,B.l,h,B.e,B.i,0,B.p),B.f,h,h,new A.o(t,h,p,q,r,h,B.n),h,h,h,h,B.uP,h,h,1/0)],u),B.l,h,B.e,B.i,0,B.p),B.t,h,B.y,h,h,E.ao0,h,h,B.ah),1)],u),B.l,h,B.e,B.i,0,B.p),!0,!1,B.ag,!0,!0),h,!1,!1,h,h)}}
C.auC.prototype={
S(){return new C.aHi(A.zV(B.Oa,B.oe,B.vl))}}
C.aHi.prototype={
t(){this.d.t()
this.a2()},
aP8(d){var w,v=this
if(v.e||v.c==null)return
v.e=!0
w=v.c
w.toString
A.j9(w,d)},
cgD(d){var w,v,u,t,s,r,q,p="NGMYWSSYNC2|"
if(this.e)return
for(w=d.a,v=w.length,u=0;u<w.length;w.length===v||(0,A.I)(w),++u){t=w[u]
s=C.it1(t)
if(s!=null){this.aP8(s)
return}r=C.hze(t)
if(r!=null)q=A.cR(r,p,0)
else q=!1
if(q){this.aP8(B.a.i(B.a.b0(r,B.a.co(r,p))))
return}}},
B(d){var w,v,u=this,t=null,s=x.p,r=A.eS(A.a([A.aI(t,t,t,t,A.X(u.f?B.v0:A9.PX,t,t,t,t,t),t,t,t,new C.eWH(u),t,t,t,t,t,t)],s),t,t,!0,!0,B.C3,t,1,t,t,t,!1,t,!1,B.c,t,t,t,!0,t,t,t,t,t,D.h0Z,t,t,t,1,t,!0),q=A.zU(u.d,B.bX,u.gcgC()),p=A.l(28)
p=A.as(A.p(t,t,B.f,t,t,new A.o(t,t,A.K(B.aV,B.r,3),p,A.a([new A.ab(2,B.G,B.aV.j(0.35),B.J,24)],x.V),t,B.n),t,260,t,t,t,t,t,260),t,t,t)
w=B.w.j(0.72)
v=A.l(16)
return A.c6(r,B.w,new A.an(B.a0,t,B.b1,B.t,A.a([q,p,A.ao(32,A.p(t,D.h_K,B.f,t,t,new A.o(w,t,A.K(B.aV.j(0.45),B.r,1),v,t,t,B.n),t,t,t,t,B.jr,t,t,t),t,t,20,20,t,t)],s),t),t,!1,!1,t,t)}}
C.aMd.prototype={
a7(){return"_WorksheetTab."+this.b}}
C.Pa.prototype={
S(){return new C.aHk(D.aex,A.a([],x.D))},
bv(){return this.r.$0()},
ge3(){return this.c}}
C.aHk.prototype={
gcHt(){return J.bHW(this.e,0,new C.eXp())},
Y(){this.a3()
$.aU.bZ$.push(this)
this.wo()},
t(){$.aU.hZ(this)
this.a2()},
jn(d){if(d===B.fW)this.wo()},
wo(){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n
var $async$wo=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(C.DF(q.a.c).dg(0,B.k5),$async$wo)
case 7:p=e
if(q.c==null){r=[1]
w=5
break}q.m(new C.eXl(q,p))
r.push(6)
w=5
break
case 4:t=3
n=s.pop()
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null&&q.f)q.m(new C.eXm(q))
w=r.pop()
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$wo,v)},
Iz(d){return this.bNJ(d)},
bNI(){return this.Iz(null)},
bNJ(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$Iz=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:l=t.c
l.toString
w=3
return A.b(C.iv0(l,d),$async$Iz)
case 3:s=f
if(s==null||t.c==null){w=1
break}l=B.o.v(1000*Date.now())
r=s.a
q=s.b
p=new C.lK(l,r,q,D.dpX,new A.V(Date.now(),0,!1))
w=4
return A.b(C.Mj(t.a.c,p),$async$Iz)
case 4:o=f
w=5
return A.b(t.wo(),$async$Iz)
case 5:n=t.c
if(n==null){w=1
break}if(!o){n.K(x.q).f.T(D.fqZ)
w=1
break}n=J.aT(t.e)
for(;;){if(!n.C()){m=p
break}m=n.gP(n)
if(m.a===l)break}l=!1
if(q!=null)if(B.a.i(q).length!==0){l=m.c
l=l==null||B.a.i(l).length===0}q=x.q
n=t.c
if(l)n.K(q).f.T(D.fsO)
else n.K(q).f.T(A.b2(null,null,null,null,null,B.t,null,A.d('Project "'+r+'" saved on this device.',null,null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))
t.F5(m)
case 1:return A.h(u,v)}})
return A.i($async$Iz,v)},
F5(d){return this.ckC(d)},
ckC(d){var w=0,v=A.j(x.H),u=this,t,s
var $async$F5=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return A.b(A.hF(s,new C.auD(u.a.c,d,null),!1,"NgmyWorksheetProjectScreen",x.fA),$async$F5)
case 2:t=f
w=t!=null?3:4
break
case 3:w=5
return A.b(C.Mj(u.a.c,t),$async$F5)
case 5:case 4:w=6
return A.b(u.wo(),$async$F5)
case 6:return A.h(null,v)}})
return A.i($async$F5,v)},
w9(d){return this.c34(d)},
c34(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$w9=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=d==="file"?3:5
break
case 3:w=6
return A.b(C.bGg(),$async$w9)
case 6:s=f
w=4
break
case 5:w=d==="scan"?7:9
break
case 7:r=t.c
r.toString
w=10
return A.b(A.hF(r,D.aMJ,!0,"NgmyWorksheetProjectScan",x.N),$async$w9)
case 10:q=f
w=q!=null&&B.a.i(q).length!==0?11:13
break
case 11:w=14
return A.b(C.bGM(q),$async$w9)
case 14:w=12
break
case 13:f=null
case 12:s=f
w=8
break
case 9:s=null
case 8:case 4:if(s==null){r=t.c
if(r==null){w=1
break}r=r.K(x.q).f
r.T(A.b2(null,null,null,null,null,B.t,null,A.d(d==="scan"?"Could not read that QR. Stay online for cloud project codes, or try Upload file.":"Could not read that project backup.",null,null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))
w=1
break}p=C.hk9(s)
w=15
return A.b(C.Mj(t.a.c,p),$async$w9)
case 15:o=f
w=16
return A.b(t.wo(),$async$w9)
case 16:r=t.c
if(r==null){w=1
break}if(!o){r.K(x.q).f.T(D.fsT)
w=1
break}r.K(x.q).f.T(A.b2(null,null,null,null,null,B.t,null,A.d('Imported "'+p.b+'"',null,null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))
t.F5(p)
case 1:return A.h(u,v)}})
return A.i($async$w9,v)},
OE(d){return this.bMl(d)},
bMl(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$OE=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=5
return A.b(A.cg(null,null,!0,null,new C.eX6(d),s,null,!0,!0,x.y),$async$OE)
case 5:w=f===!0?3:4
break
case 3:w=6
return A.b(C.pc(t.a.c,A.a([],x.D)),$async$OE)
case 6:w=7
return A.b(t.wo(),$async$OE)
case 7:s=t.c
if(s==null){w=1
break}s.K(x.q).f.T(D.fr3)
case 4:case 1:return A.h(u,v)}})
return A.i($async$OE,v)},
ckP(d){var w=this.c
w.toString
A.bU(B.L,null,new C.eXf(this,d),w,!0,!0,!0,null,!1,!1,x.z)},
b8v(d,e,f,g,h,i){var w,v,u,t,s,r=null,q=A.l(16),p=g.a
if(p)w=B.jZ
else w=B.c
v=A.l(16)
u=A.K(p?B.eh:B.bO,B.r,1)
t=d.j(0.14)
s=A.l(12)
s=A.p(r,A.X(e,d,r,r,r,22),B.f,r,r,new A.o(t,r,r,s,r,r,B.n),r,r,r,r,B.bS,r,r,r)
t=A.d(i,r,r,r,r,r,r,A.m(r,r,p?B.aS:B.av,r,r,r,r,r,r,r,r,14,r,r,B.H,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
return A.aG(!1,B.a3,!0,r,A.aM(!1,q,!0,A.p(r,A.x(A.a([s,B.af,t,B.bF,A.d(h,r,r,r,r,r,r,A.m(r,r,p?B.bu:B.bj,r,r,r,r,r,r,r,r,11,r,r,r,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),B.E,r,B.e,B.i,0,B.p),B.f,r,r,new A.o(w,r,u,v,r,r,B.n),r,r,r,r,B.t8,r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,f,r,r,r,r,r,r,r),B.f,B.L,0,r,r,r,r,r,B.ai)},
a18(d,e){return this.ckD(d,e)},
ckD(d,e){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a18=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return A.b(A.bU(B.L,null,new C.eXa(t,e,d),r,!0,!0,!1,null,!1,!1,x.N),$async$a18)
case 3:s=g
r=t.c
if(r==null||s==null){w=1
break}w=s==="transfer"?4:6
break
case 4:C.hJk(r,new C.eXb(t),t.a.c,d)
w=5
break
case 6:w=s==="delete"?7:8
break
case 7:w=9
return A.b(t.OG(d,e),$async$a18)
case 9:case 8:case 5:case 1:return A.h(u,v)}})
return A.i($async$a18,v)},
b5w(d,e,f,g,h,i,j){var w,v,u=null,t=f.j(0.12),s=A.l(12)
s=A.p(u,A.X(e,f,u,u,u,22),B.f,u,u,new A.o(t,u,u,s,u,u,B.n),u,u,u,u,B.bS,u,u,u)
if(d)t=B.aA
else t=h.a?B.aS:B.av
t=A.d(j,u,u,u,u,u,u,A.m(u,u,t,u,u,u,u,u,u,u,u,u,u,u,B.H,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)
w=h.a
v=x.p
t=A.E(A.x(A.a([t,A.d(i,u,u,u,u,u,u,A.m(u,u,w?B.bu:B.bj,u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],v),B.E,u,B.e,B.i,0,B.p),1)
return A.aG(!1,B.a3,!0,u,A.aM(!1,u,!0,new A.D(B.CN,A.A(A.a([s,B.bc,t,A.X(B.eI,w?B.bu:B.bj,u,u,u,u)],v),B.l,u,B.e,B.i,0,u,u),u),u,!0,u,u,u,u,u,u,u,u,u,u,u,g,u,u,u,u,u,u,u),B.f,B.L,0,u,u,u,u,u,B.ai)},
crA(d,e,f,g,h,i){return this.b5w(!1,d,e,f,g,h,i)},
OG(d,e){return this.bMv(d,e)},
bMv(d,e){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$OG=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=d.b
w=5
return A.b(A.lv(r,"Cancel","Delete","Remove \u201c"+s+"\u201d and all of its budget items from this device?","Delete project?"),$async$OG)
case 5:w=g?3:4
break
case 3:w=6
return A.b(C.bEX(t.a.c,d.a),$async$OG)
case 6:w=7
return A.b(t.wo(),$async$OG)
case 7:r=t.c
if(r==null){w=1
break}r.K(x.q).f.T(A.b2(null,null,null,null,null,B.t,null,A.d("Deleted \u201c"+s+"\u201d",null,null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))
case 4:case 1:return A.h(u,v)}})
return A.i($async$OG,v)},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=A.P(d).ax.a===B.I,m=new C.um(n),l=n?B.c6:B.hY
if(p.f)n=D.bfe
else{w=A.aE(d,B.dD,x.w).w
v=p.bGP(m)
u=p.c28(m)
t=p.gbDV()
if(n)s=B.jZ
else s=B.c
r=A.l(13)
q=x.p
t=A.a([v,B.af,u,B.aO,new C.Gr(A.p(o,A.A(A.a([p.aDK(Q.Py,"Projects",m,D.aex),p.aDK(B.uV,"Cashier",m,D.b3_),p.aDK(B.HE,"Family Tree",m,D.hOc)],q),B.l,o,B.e,B.i,0,o,o),B.f,o,o,new A.o(s,o,o,r,o,o,B.n),o,o,o,o,o,o,o,o),14,B.eC,0.95,t,o),B.bx],q)
v=p.d
if(v===D.aex){v=J.ad(p.e)
B.d.u(t,A.a([A.A(A.a([A.d("Projects ("+v+")",o,o,o,o,o,o,A.m(o,o,n?B.aS:B.av,o,o,o,o,o,o,o,o,16,o,o,B.H,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),B.b4,new C.azw(p.gaTx(),o)],q),B.l,o,B.e,B.i,0,o,o),B.aB,p.crC(m)],q))}else{n=p.a
if(v===D.b3_)t.push(new C.aqq(n.c,m,o))
else{v=p.r
t.push(new C.arE(n.c,n.d,n.e,n.f,new C.eXs(p),new C.eXt(p),new A.bg(v,x.b4)))}}n=A.ca(A.x(t,B.E,o,B.e,B.i,0,B.p),B.t,o,B.y,o,o,new A.Q(20,w.r.b+8,20,32),o,o,B.ah)}return A.c6(o,l,A.bn(!0,n,!0,!1,B.ag,!0,!1),o,!1,!1,o,o)},
bGP(d){var w=null,v=A.l(8),u=d.a,t=A.X(Y.a2P,u?B.bu:B.bj,w,w,w,16)
return A.aM(!1,v,!0,new A.D(B.kC,A.A(A.a([t,B.bn,A.d("Back to Profile",w,w,w,w,w,w,A.m(w,w,u?B.bu:B.bj,w,w,w,w,w,w,w,w,14,w,w,B.a8,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),B.l,w,B.e,B.N,0,w,w),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.eX3(this),w,w,w,w,w,w,w)},
gbDV(){switch(this.d.a){case 0:return D.adF
case 1:return D.hD2
case 2:return D.adG}},
c28(d){var w=null,v=A.l(15),u=A.a([new A.ab(0,B.G,B.aV.j(0.35),B.cz,16)],x.V),t=x.p,s=A.A(A.a([A.p(w,D.c1C,B.f,w,w,new A.o(B.c.j(0.22),w,w,A.l(12),w,w,B.n),w,44,w,w,w,w,w,44),B.bc,D.bM4,A.aG(!1,B.a3,!0,w,A.aM(!1,A.l(12),!0,A.p(w,D.bZX,B.f,w,w,new A.o(B.c.j(0.22),w,w,A.l(12),w,w,B.n),w,40,w,w,w,w,w,40),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.eX7(this,d),w,w,w,w,w,w,w),B.f,B.L,0,w,w,w,w,w,B.ai)],t),B.E,w,B.e,B.i,0,w,w),r=B.b2.j(0.55),q=A.l(12)
return new C.Gr(A.p(w,A.x(A.a([new A.D(B.Hf,s,w),A.p(w,A.x(A.a([A.d("Total All Projects",w,w,w,w,w,w,A.m(w,w,B.c.j(0.85),w,w,w,w,w,w,w,w,12,w,w,B.a8,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.ax,A.d(A.Bo(this.gcHt()),w,w,w,w,w,w,D.fKJ,w,w,w)],t),B.E,w,B.e,B.i,0,B.p),B.f,w,w,new A.o(r,w,w,q,w,w,B.n),w,w,w,B.t7,B.jr,w,w,1/0)],t),B.E,w,B.e,B.i,0,B.p),B.f,w,w,new A.o(B.aV,w,w,v,u,w,B.n),w,w,w,w,w,w,w,1/0),16,B.ag,1,D.hD1,w)},
aDK(d,e,f,g){var w,v,u=null,t=this.d===g,s=A.l(12),r=t?B.aV:B.L,q=A.l(12),p=t?A.K(B.c.j(0.55),B.r,2):A.K(B.L,B.r,2),o=t?A.a([new A.ab(0.5,B.G,B.aV.j(0.42),B.cM,14)],x.V):u
if(t)w=B.c
else w=f.a?B.bu:B.bj
w=A.X(d,w,u,u,u,16)
if(t)v=B.c
else v=f.a?B.bu:B.bj
return A.E(A.aG(!1,B.a3,!0,u,A.aM(!1,s,!0,A.cU(u,A.A(A.a([w,B.e7,new A.di(1,B.cn,A.d(e,u,1,B.a2,u,u,u,A.m(u,u,v,u,u,u,u,u,u,u,u,12,u,u,B.O,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u)],x.p),B.l,u,B.b9,B.i,0,u,u),u,u,B.ck,new A.o(r,u,p,q,o,u,B.n),B.iQ,u,u,u,u,B.Hn,u,u,u),u,!0,u,u,u,u,u,u,u,u,u,u,u,new C.eXo(this,g),u,u,u,u,u,u,u),B.f,B.L,0,u,u,u,u,u,B.ai),1)},
crC(d){var w,v,u,t,s,r,q=this,p=null
if(J.ct(q.e)){w=d.a
v=w?B.ef:B.c
u=A.l(15)
t=A.p(p,D.c_3,B.f,p,p,new A.o(p,p,p,p,A.a([new A.ab(2,B.G,B.aV.j(0.5),B.eS,28)],x.V),D.cbA,B.a6),p,108,p,p,p,p,p,108)
s=A.d("No Projects Yet",p,p,p,p,p,p,A.m(p,p,w?B.aS:B.av,p,p,p,p,p,p,p,p,18,p,p,B.H,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)
r=x.p
return new C.Gr(A.p(p,A.x(A.a([t,B.db,s,B.P,A.d("Create a new project, or import one someone shared with you.",p,p,p,p,p,p,A.m(p,p,w?B.bu:B.bj,p,p,p,p,p,p,p,p,14,p,p,p,p,1.4,!0,p,p,p,p,p,p,p,p),B.K,p,p),B.e4,A.A(A.a([A.E(q.aV7(B.jv,"Scan QR",new C.eXi(q),d),1),B.as,A.E(q.aV7(R.zM,"Upload file",new C.eXj(q),d),1)],r),B.l,p,B.e,B.i,0,p,p),B.aB,A.bJ(D.hbt,p,q.gaTx(),A.bp(B.aV,p,p,p,B.c,B.hg,p,p,new A.ba(A.l(12),B.a1),p,p,p))],r),B.l,p,B.e,B.i,0,B.p),B.f,p,p,new A.o(v,p,p,u,p,p,B.n),p,p,p,p,p,p,p,1/0),16,D.bIy,1.05,D.adF,p)}w=J.b9(q.e,new C.eXk(q,d),x.l)
w=A.C(w,w.$ti.k("ak.E"))
return new C.Gr(A.x(w,B.l,p,B.e,B.i,0,B.p),16,B.bS,1,D.adF,p)},
aV7(d,e,f,g){var w=null,v=B.aV.j(g.a?0.18:0.1),u=A.l(12),t=A.l(12),s=A.l(12),r=A.K(B.aV.j(0.45),B.r,1)
return A.aG(!1,B.a3,!0,u,A.aM(!1,t,!0,A.p(w,A.x(A.a([A.X(d,B.b2,w,w,w,26),B.P,A.d(e,w,w,w,w,w,w,D.fIV,B.K,w,w)],x.p),B.l,w,B.e,B.N,0,B.p),B.f,w,w,new A.o(w,w,r,s,w,w,B.n),w,w,w,w,B.a12,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),B.f,v,0,w,w,w,w,w,B.ai)},
crB(d,e){var w,v,u=null,t=e.a,s=t?B.ef:B.c,r=A.l(14),q=A.K(t?B.eh:B.bO,B.r,1),p=A.a([new A.ab(0,B.G,B.w.j(t?0.35:0.08),B.et,10)],x.V),o=A.l(14),n=t?B.bu:B.bj
n=A.bv(B.Y8,new A.fH(1.7777777777777777,C.aSZ(!0,B.fk,1/0,Q.Py,n,d.c,1/0),u),B.aq)
w=x.p
v=A.E(A.x(A.a([A.d(d.b,u,u,u,u,u,u,A.m(u,u,t?B.aS:B.av,u,u,u,u,u,u,u,u,15,u,u,B.H,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),B.ax,A.d(""+d.d.length+" budget items \xb7 "+A.Bo(d.gxK()),u,u,u,u,u,u,D.fGS,u,u,u)],w),B.E,u,B.e,B.i,0,B.p),1)
return A.p(u,A.aG(!1,B.a3,!0,u,A.aM(!1,o,!0,A.x(A.a([n,new A.D(B.bH,A.A(A.a([v,A.aI(u,u,u,u,A.X(Al.a3U,t?B.bu:B.bj,u,u,u,u),u,u,u,new C.eXg(this,d,e),u,u,u,u,"Project options",u)],w),B.l,u,B.e,B.i,0,u,u),u)],w),B.E,u,B.e,B.i,0,B.p),u,!0,u,u,u,u,u,u,u,u,u,u,u,new C.eXh(this,d),u,u,u,u,u,u,u),B.f,B.L,0,u,u,u,u,u,B.ai),B.f,u,u,new A.o(s,u,q,r,p,u,B.n),u,u,u,B.el,u,u,u,1/0)}}
C.bAW.prototype={}
C.rw.prototype={
aj(){var w=this,v=w.c,u=w.d
return A.J(["id",w.a,"name",w.b,"quantity",v,"unitPrice",u,"unitLabel",w.e,"price",v*u],x.N,x.z)},
gd0v(){var w,v,u,t,s=this.c
if(s===B.h.fK(s))w=B.o.v(B.h.M(s))
else{v=B.h.ad(s,2)
u=A.ag("\\.?0+$",!0,!1,!1,!1)
w=A.aL(v,u,"")}t=B.a.i(this.e)
if(t.length===0)t="each"
if(t==="each"||t==="pcs")return w+" \xd7"
return w+" "+t+" \xd7"}}
C.lK.prototype={
gxK(){return B.d.cB(this.d,0,new C.cHr())},
aj(){var w=this,v=w.d,u=A.U(v).k("N<1,a9<n,@>>")
v=A.C(new A.N(v,new C.cHq(),u),u.k("ak.E"))
return A.J(["id",w.a,"name",w.b,"thumbnailPath",w.c,"items",v,"createdAt",w.e.ag()],x.N,x.z)},
bfW(d,e){var w=this,v=e==null?w.c:e,u=d==null?w.d:d
return new C.lK(w.a,w.b,v,u,w.e)},
bfE(d){return this.bfW(d,null)},
TN(d){return this.bfW(null,d)}}
C.Iy.prototype={
a7(){return"FamilyGender."+this.b}}
C.i4.prototype={
aj(){var w=this
return A.J(["id",w.a,"name",w.b,"gender",C.hEu(w.c),"parentId",w.d,"spouseId",w.e,"photoPath",w.f,"notes",w.r,"birthDate",w.w,"birthPlace",w.x,"deathDate",w.y,"occupation",w.z,"birthOrder",w.Q,"hidden",w.as,"visibleChildrenCap",w.at],x.N,x.z)},
aGu(d,e,f,g,h,i,j,k,l,m,n,o,p){var w=this,v=m==null?w.d:m,u=o==null?w.e:o,t=n==null?w.f:n
return new C.i4(w.a,j,h,v,u,t,k,d,f,g,l,e,i,p)}}
C.amE.prototype={
a7(){return"FamilyTreeAccessRole."+this.b}}
C.l3.prototype={
gaqR(){var w=this.f
return new A.Y(w,new C.bTH(),A.U(w).k("Y<1>")).gJ(0)},
aj(){var w=this,v=w.f,u=A.U(v).k("N<1,a9<n,@>>")
v=A.C(new A.N(v,new C.bTG(),u),u.k("ak.E"))
return A.J(["id",w.a,"name",w.b,"code",w.c,"isPrivate",w.d,"collaboratorEmails",w.e,"members",v,"createdAt",w.r.ag(),"visibleChildrenPerParent",w.w,"ownerEmail",w.x,"localRole",C.ild(w.y),"games",w.z],x.N,x.z)},
x5(d,e,f,g,h,i,j,k,l){var w=this,v=j==null?w.b:j,u=d==null?w.c:d,t=g==null?w.d:g,s=e==null?w.e:e,r=i==null?w.f:i,q=l==null?w.w:l,p=k==null?w.x:k,o=h==null?w.y:h,n=f==null?w.z:f
return new C.l3(w.a,v,u,t,s,r,w.r,q,p,o,n)},
bfV(d,e){var w=null
return this.x5(w,w,w,d,e,w,w,w,w)},
cQQ(d,e,f,g,h,i,j){return this.x5(d,e,null,f,g,h,i,j,null)},
aGz(d,e){var w=null
return this.x5(w,w,w,w,d,w,w,e,w)},
cQS(d,e,f,g,h,i,j,k){return this.x5(d,e,null,f,g,h,i,j,k)},
cPl(d){var w=null
return this.x5(w,w,w,w,w,w,w,d,w)},
cPJ(d){var w=null
return this.x5(w,w,w,w,w,w,w,w,d)},
bfy(d){var w=null
return this.x5(w,w,d,w,w,w,w,w,w)},
aGk(d){var w=null
return this.x5(w,w,w,w,w,d,w,w,w)},
cQn(d,e,f){var w=null
return this.x5(w,d,w,w,e,w,w,f,w)},
cP8(d){var w=null
return this.x5(w,w,w,d,w,w,w,w,w)},
cPV(d,e){var w=null
return this.x5(d,w,w,w,w,w,e,w,w)}}
C.cHs.prototype={
a7(){return"WrapAlignment."+this.b}}
C.cHt.prototype={
a7(){return"WrapCrossAlignment."+this.b}}
C.aJp.prototype={}
C.bbt.prototype={
ak(d){this.a=d.a
this.b=d.b},
cZ(d){var w=new C.bbt()
w.a=this.a
w.b=this.b
return w},
v(d){return A.b4(this).v(0)+" first:"+this.a+" last:"+this.b}}
C.bbs.prototype={
gwW(){return!0},
gGE(){return this.z.b<this.b.length},
aWO(d){switch(0){case 0:return d.a.c}},
aWu(d){switch(0){case 0:return d.a.d}},
bWA(d,e){switch(0){case 0:return new A.hZ(d,e)}},
bVY(d,e,f){var w=e-f
switch(0){case 0:return d?w:0}},
hh(b4,b5,b6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=this,b2=b1.b,b3=b2.length
if(b3===0||b1.z.a>=b3){b1.a=new A.iY(0,0,B.o.D(0,b5.a,b5.b),B.o.D(0,b5.c,b5.d))
return}w=A.Ih(b4)
switch(0){case 0:v=b5.b
u=new A.l0(0,v,0,1/0)
t=w===B.VT
break}s=A.a([],x.gZ)
r=A.T(x.gF,x.S)
for(b3=b1.z,q=B.d.fN(b2,b3.a),p=q.length,o=b1.f,n=b1.w,m=0,l=0,k=0,j=0,i=0,h=0;h<q.length;q.length===p||(0,A.I)(q),++h){g=q[h]
g.hh(b4,u,!0)
f=b1.aWO(g)
f.toString
e=b1.aWu(g)
e.toString
if(i>0&&k+o+f>v){m=Math.max(m,k)
l+=j
if(s.length!==0)l+=n
s.push(new C.aJp(k,j,i))
k=0
j=0
i=0}k+=f
if(i>0)k+=o
j=Math.max(j,e);++i
r.n(0,g,s.length)}if(i>0){m=Math.max(m,k)
l+=j
if(s.length!==0)l+=n
s.push(new C.aJp(k,j,i))}d=s.length
switch(0){case 0:q=b5.cA(new A.hZ(m,l))
a0=q.a
a1=q.b
b1.a=new A.iY(0,0,a0,a1)
break}Math.max(0,a1-l)
switch(0){case 0:break}q=b3.a
b3.b=q
for(p=a1+0.01,a2=q,a3=a1,a4=0;a4<d;++a4){a5=s[a4]
j=a5.b
Math.max(0,a0-a5.a)
switch(0){case 0:break}a6=t?a0:0
a7=a3-j
a3=a7
if(a3<-0.01||a3+j>p)break
for(q=B.d.fN(b2,a2),f=q.length,h=0;h<q.length;q.length===f||(0,A.I)(q),++h){g=q[h]
if(r.h(0,g)!==a4)break;++a2
a8=b1.aWO(g)
e=b1.aWu(g)
e.toString
a9=b1.bVY(!0,j,e)
if(t){a8.toString
a6-=a8}e=b1.bWA(a6,a3+a9)
b0=g.a
g.a=new A.iY(e.a,e.b,b0.c,b0.d)
if(t)a6-=o
else{a8.toString
a6+=a8+o}}a3-=n
a3=a3
b3.b=a2}},
fV(d){var w,v,u,t,s,r=this
r.lE(d)
w=d.b
w.ix()
v=A.dr()
u=r.a
v.eb(u.a,u.b,0,1)
w.pu(0,v)
for(u=r.z,u=B.d.du(r.b,u.a,u.b),t=u.length,s=0;s<u.length;u.length===t||(0,A.I)(u),++s)u[s].fV(d)
w.nF(0)},
Ha(d,e){var w=this.z
w.a=e.a
w.b=e.b
w.a=e.b},
ix(){return this.z}}
C.bzb.prototype={}
var z=a.updateTypes(["aB<~>()","R(i4)","~()","R(l3)","R(nB)","a9<n,@>(l3)","G(l3,l3)","G(i4,i4)","n(i4)","l3(a9<@,@>)","R(lK)","nB(a9<@,@>)","a9<n,@>(nB)","R(uW)","uW()","G(i4)","ai<i4>()","R(zD)","a0u(Z)","n?(i4)","eM<n?>(i4)","aB<~>(lK)","R(rw)","a9<n,@>(i4)","i4(a9<@,@>)","G(lK,lK)","R(agm)","~(be)","v(oP)","G(G,aap)","R(qO<G>)","~(qO<G>)","Uf(Z)","R(MX)","R(uV)","~(i4)","n(n)","WA(Z)","Ue(Z)","aeJ(Z)","a_q(Z)","i4(i4)","cK(bB<n,GH>)","cK(L0)","a_U(Z)","G?(i4)","i4()","R(L0)","D(i4)","~(Iy)","a_Q(Z)","v(Iy,n,a_)","R(agf)","bB<n,ai<a9<n,@>>>(n,ai<nB>)","a_S(Z)","+count,id,name(G,n,n)(l3)","n(l3)","a0O(Z)","a0P(Z)","R(m1)","m1()","ZY(Z)","a2A(Z)","a_s(Z)","a_r(Z)","~(G)","~(n,lA?)","v(rw)","af3(Z)","~(mr)","aB<~>([n?])","F(F,lK)","v(lK)","F(F,rw)","a9<n,@>(rw)","rw(a9<@,@>)","ai<lA>()","uV()","n(V)","lK(a9<@,@>)","cu(Ix)","n(lK)","a9<n,@>(lK)","G(nB,nB)","l3(a9<n,@>)","l3(l3)"])
C.fQH.prototype={
$1(d){return d.a+" "+d.b},
$S:129}
C.fQG.prototype={
bpd(d){var w=0,v=A.j(x.T),u,t=this,s,r,q,p,o
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.a,r=null,q=0
case 3:if(!(q<2)){w=5
break}w=6
return A.b(A.rn(s,d,B.i1,"book",E.Cu),$async$$1)
case 6:p=f
o=p.b
if(o!=null&&B.a.i(o).length!==0){u=o
w=1
break}r=p.a
case 4:++q
w=3
break
case 5:throw A.W(r!=null&&A.M5(r)?y.k:y.A)
case 1:return A.h(u,v)}})
return A.i($async$$1,v)},
$1(d){return this.bpd(d)},
$S:276}
C.fQI.prototype={
$1(d){return d.b},
$S:129}
C.h_E.prototype={
$1(d){var w=null
return A.eI(w,B.L,new H.QC(this.a,this.b,w),w,w,0,B.a1f,w,B.d7,w,w,w)},
$S:46}
C.fDM.prototype={
$1(d){return d!=null},
$S:228}
C.fDN.prototype={
$1(d){var w
if(d!=null)w=Math.abs(d.a)<=1.5&&Math.abs(d.b)<=1.5
else w=!0
return w},
$S:228}
C.fDS.prototype={
$1(d){if(this.a)return new A.r(d.a*520,d.b*160)
return d},
$S:175}
C.fOq.prototype={
$4$bold$valueColor(d,e,f,g){var w=null,v=A.fe(d,w,w,w,A.hj(w,B.tN,w,w,w,w,w,w,w,B.dE,w,w,10.5,w,B.eD,w,!0,w,w,w,w),w),u=f?B.eD:B.wN
return new A.og(D.bDR,A.abf(A.a([new A.h0(130,w,v),new A.zC(1,B.Hx,A.fe(e,w,w,w,A.hj(w,g==null?D.eAW:g,w,w,w,w,w,w,w,B.dE,w,w,11,w,u,w,!0,w,w,w,w),w))],x.Z),B.yL,B.lW))},
$2(d,e){return this.$4$bold$valueColor(d,e,!1,null)},
$3$bold(d,e,f){return this.$4$bold$valueColor(d,e,f,null)},
$S:1982}
C.fOp.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g="Missed days",f=A.w4(999)
f=A.xJ(A.lW(h,A.fe("Cashier",h,h,h,A.hj(h,D.AH,h,h,h,h,h,h,h,B.dE,h,h,10,h,B.eD,h,!0,h,h,h,h),h),h,new A.l1(D.eAN,h,f,B.i6,h),h,h,D.bEk,h))
w=A.xJ(A.fe("Debt receipt",h,h,h,A.hj(h,h,h,h,h,h,h,h,h,B.dE,h,h,22,h,B.eD,h,!0,h,h,h,h),h))
v=A.xJ(A.fe(C.xp(new A.V(Date.now(),0,!1),!0),h,h,h,D.ac5,h))
u=A.w4(12)
t=i.b
s=B.a.i(t.b)
if(s.length===0)s="\u2014"
s=A.fe(s,h,h,h,A.hj(h,h,h,h,h,h,h,h,h,B.dE,h,h,14,h,B.eD,h,!0,h,h,h,h),h)
r=A.fe("Person who owes",h,h,h,D.ac5,h)
q=A.w4(10)
p=x.Z
u=A.lW(h,A.zv(A.a([s,new A.h0(h,2,h),r,new A.h0(h,10,h),A.lW(h,A.zv(A.a([A.fe("Amount owed",h,h,h,D.ac5,h),new A.h0(h,2,h),A.fe(A.Bo(t.c),h,h,h,A.hj(h,D.AH,h,h,h,h,h,h,h,B.dE,h,h,20,h,B.eD,h,!0,h,h,h,h),h)],p),B.rZ,B.lW),h,new A.l1(B.pR,h,q,B.i6,h),h,h,D.bDx,1/0)],p),B.rZ,B.lW),h,new A.l1(E.aO5,h,u,B.i6,h),h,h,D.bFw,1/0)
q=new A.o_(D.eAQ,0.9,B.lg)
r=A.w4(12)
s=i.c
o=s.$2("Original due",C.xp(t.r,!1))
n=s.$2("Current due",C.xp(t.f,!1))
m=i.d
l=new A.o_(m,1.1,B.lg)
k=A.w4(8)
j=i.a
k=A.a([o,n,new A.h0(h,6,h),A.lW(h,A.xJ(A.fe(t.gaNG(),h,h,h,A.hj(h,m,h,h,h,h,h,h,h,B.dE,h,h,11,h,B.eD,h,!0,0.5,h,h,h),h)),h,new A.l1(h,new A.q7(l,l,l,l),k,B.i6,h),h,h,D.bEt,1/0),new A.h0(h,10,h),s.$4$bold$valueColor("Date paid",j.c,!0,j.b)],p)
if(t.x!=null&&i.e)k.push(s.$4$bold$valueColor(g,"None \u2014 paid on time",!0,D.AH))
else{o=i.f
n=o.length
if(n===0)k.push(s.$4$bold$valueColor(g,"None yet",!0,D.AH))
else{n=A.fe("Missed days ("+n+")",h,h,h,A.hj(h,B.tN,h,h,h,h,h,h,h,B.dE,h,h,10.5,h,B.eD,h,!0,h,h,h,h),h)
m=A.U(o).k("N<1,TP>")
o=A.C(new A.N(o,new C.fOo(),m),m.k("ak.E"))
B.d.u(k,A.a([new A.h0(h,4,h),n,new A.h0(h,6,h),new C.bbs(5,5,new C.bbt(),o)],p))}}o=B.a.i(t.y)
if(o.length!==0)B.d.u(k,A.a([new A.h0(h,8,h),s.$2("Notes",o)],p))
f=A.a([f,new A.h0(h,8,h),w,new A.h0(h,3,h),v,new A.h0(h,16,h),u,new A.h0(h,10,h),A.lW(h,A.zv(k,B.yL,B.lW),h,new A.l1(h,new A.q7(q,q,q,q),r,B.i6,h),h,h,B.amV,1/0)],p)
w=j.a
if(w!=null){v=new A.o_(B.K5,1,B.lg)
B.d.u(f,A.a([new A.h0(h,16,h),A.fe("Debtor signature",h,h,h,A.hj(h,B.tN,h,h,h,h,h,h,h,B.dE,h,h,10,h,B.eD,h,!0,h,h,h,h),h),new A.h0(h,6,h),A.lW(h,new A.IR(w,B.Yl,h,h),h,new A.l1(h,new A.q7(v,v,v,v),A.w4(6),B.i6,h),82,h,B.OS,1/0)],p))}f.push(new A.h0(h,18,h))
if(t.x!=null)w=i.e?"Payment was received on time.":"Payment was received after one or more missed days (shown in red)."
else w="This debt is still unpaid. Missed days appear in red when the due date has passed."
f.push(A.fe(w,h,h,h,D.fz9,h))
f.push(new A.h0(h,18,h))
f.push(A.xJ(A.fe("NGMY.ORG",h,h,h,A.hj(h,D.AH,h,h,h,h,h,h,h,B.dE,h,h,14,h,B.eD,h,!0,1.8,h,h,h),h)))
return f},
$S:385}
C.fOo.prototype={
$1(d){var w=null,v=new A.o_(D.K6,0.7,B.lg),u=A.w4(999)
return A.lW(w,A.fe(C.xp(d,!1),w,w,w,A.hj(w,D.K6,w,w,w,w,w,w,w,B.dE,w,w,9.5,w,B.eD,w,!0,w,w,w,w),w),w,new A.l1(w,new A.q7(v,v,v,v),u,B.i6,w),w,w,D.bJZ,w)},
$S:1983}
C.c93.prototype={
$1(d){var w=null,v=B.bD.j(0.08),u=A.l(999),t=A.K(B.bD.j(0.28),B.r,1)
return A.p(w,A.d(C.xp(d,!1),w,w,w,w,w,w,D.fGj,w,w,w),B.f,w,w,new A.o(v,w,t,u,w,w,B.n),w,w,w,w,B.eQ,w,w,w)},
$S:1984}
C.h0a.prototype={
$1(d){var w=null,v=A.aE(d,B.c_,x.w).w,u=A.l(26),t=A.aI(w,w,w,w,D.c2B,w,w,w,new C.h07(d),w,w,w,w,w,B.ch),s=this.a,r=this.b,q=B.c.j(0.28),p=x.p
return A.eI(w,B.L,new A.cN(new A.aY(0,380,0,v.a.b*0.9),A.aG(!1,B.a3,!0,u,new A.D(B.a13,A.x(A.a([new A.bK(B.a9,w,w,t,w),new A.di(1,B.cn,A.ca(A.x(A.a([new A.e8(new C.b0v(r,w),s),B.T,A.A(A.a([A.E(A.ep(B.zU,w,D.h7I,new C.h08(s,r,d),A.dj(w,w,w,w,w,w,w,w,w,B.c,w,w,B.fi,w,new A.ba(A.l(14),B.a1),new A.ay(q,1,B.r,-1),w,w,w,w)),1),B.ae,A.E(A.df(B.a4w,w,D.h45,new C.h09(r,d),A.bp(B.b2,w,w,w,B.c,w,B.fi,w,new A.ba(A.l(14),B.a1),w,w,w)),1)],p),B.l,w,B.e,B.i,0,w,w)],p),B.l,w,B.e,B.N,0,B.p),B.t,w,B.y,w,w,w,w,w,B.ah),w)],p),B.l,w,B.e,B.N,0,B.p),w),B.f,B.av,0,w,w,w,w,w,B.ai),w),w,w,0,Aq.a1r,w,B.d7,w,w,w)},
$S:46}
C.h07.prototype={
$0(){A.a6(this.a,!1).N(null)
return null},
$S:0}
C.h08.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:m=$.aU.ap$.x.h(0,t.a)
m=m==null?null:m.gbf()
x.az.a(m)
if(m==null){w=1
break}w=4
return A.b(m.lX(2.5),$async$$0)
case 4:w=3
return A.b(e.hj(B.hf),$async$$0)
case 3:s=e
if(s==null){w=1
break}r=J.eR(B.dI.gaT(s))
m=t.b
q=B.a.i(m.b)
p=A.ag("[^a-zA-Z0-9_-]+",!0,!1,!1,!1)
o=A.aL(q,p,"_")
if(o.length>32)o=B.a.aA(o,0,32)
w=5
return A.b(A.rq(r,"ngmy_cashier_receipt_"+(o.length===0?m.a:o)+".png"),$async$$0)
case 5:n=e
m=t.c
if(m.e!=null)m.K(x.q).f.T(A.b2(null,null,null,null,null,B.t,null,A.d(n,null,null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.h09.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(C.fVe(u.a),$async$$0)
case 2:t=e
s=u.b
if(s.e!=null){s=s.K(x.q).f
s.T(A.b2(null,null,null,null,null,B.t,null,A.d(t?"Print dialog opened.":"Could not print receipt.",null,null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))}return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.h02.prototype={
$1(d){var w=null,v=A.l(20),u=x.p,t=this.b
return A.eI(w,B.av,A.x(A.a([new A.D(D.bFk,A.A(A.a([A.E(A.d(this.a,w,w,w,w,w,w,B.nf,w,w,w),1),A.aI(w,w,w,w,B.lt,w,w,w,new C.h00(d),w,w,w,w,w,w)],u),B.l,w,B.e,B.i,0,w,w),w),new A.di(1,B.cn,new A.D(B.f3,A.bv(A.l(14),A.fX(t,B.z,w,w,B.cm,B.dC,!1,w,!1,w,w),B.aq),w),w),new A.D(B.Ov,new A.a5(1/0,w,A.df(B.oP,w,D.aYr,new C.h01(t,this.c,d),A.bp(B.b2,w,w,w,B.c,w,w,w,new A.ba(A.l(14),B.a1),w,w,w)),w),w)],u),B.l,w,B.e,B.N,0,B.p),w,w,w,B.OI,w,B.d7,w,new A.ba(v,B.a1),w)},
$S:46}
C.h00.prototype={
$0(){A.a6(this.a,!1).N(null)
return null},
$S:0}
C.h01.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(A.rq(u.a,u.b),$async$$0)
case 2:t=e
s=u.c
if(s.e!=null)s.K(x.q).f.T(A.b2(null,null,null,null,null,B.t,null,A.d(t,null,null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.h0e.prototype={
$1(d){var w=null,v=A.l(20),u=x.p,t=this.a,s=this.b
return A.eI(w,B.av,new A.D(D.bFs,A.x(A.a([A.A(A.a([D.bL9,A.aI(w,w,w,w,B.lt,w,w,w,new C.h0c(d),w,w,w,w,w,w)],u),B.l,w,B.e,B.i,0,w,w),B.P,new A.e8(A.bv(A.l(14),A.p(w,A.b5(w,w,w,new C.bdH(s.ax,w),B.az),B.f,B.c,w,w,w,200,w,w,w,w,w,1/0),B.aq),t),B.af,new A.a5(1/0,w,A.df(B.oP,w,D.aYr,new C.h0d(t,s,d),A.bp(B.b2,w,w,w,B.c,w,w,w,new A.ba(A.l(14),B.a1),w,w,w)),w)],u),B.l,w,B.e,B.N,0,B.p),w),w,w,w,w,w,B.d7,w,new A.ba(v,B.a1),w)},
$S:46}
C.h0c.prototype={
$0(){A.a6(this.a,!1).N(null)
return null},
$S:0}
C.h0d.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:n=$.aU.ap$.x.h(0,t.a)
n=n==null?null:n.gbf()
x.az.a(n)
if(n==null){w=1
break}w=4
return A.b(n.lX(2.5),$async$$0)
case 4:w=3
return A.b(e.hj(B.hf),$async$$0)
case 3:s=e
if(s==null){w=1
break}n=t.b
r=B.a.i(n.b)
q=A.ag("[^a-zA-Z0-9_-]+",!0,!1,!1,!1)
p=A.aL(r,q,"_")
if(p.length>32)p=B.a.aA(p,0,32)
r=J.eR(B.dI.gaT(s))
w=5
return A.b(A.rq(r,"ngmy_cashier_signature_"+(p.length===0?n.a:p)+".png"),$async$$0)
case 5:o=e
n=t.c
if(n.e!=null)n.K(x.q).f.T(A.b2(null,null,null,null,null,B.t,null,A.d(o,null,null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.fIF.prototype={
$1(d){return d.a===this.a},
$S:262}
C.dRD.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.dRo.prototype={
bor(d,e){var w=0,v=A.j(x.H),u=this,t,s,r,q,p
var $async$$2=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:q=u.b
p=q.c
p.toString
t=q.a.d.a?B.ef:B.c
s=u.a
w=2
return A.b(A.bU(t,null,new C.dRr(s,q,e),p,!0,!0,!1,B.Ko,!1,!1,x.N),$async$$2)
case 2:r=g
if(r!=null)d.$1(new C.dRs(s,r))
return A.h(null,v)}})
return A.i($async$$2,v)},
$2(d,e){return this.bor(d,e)},
$S:1985}
C.dRr.prototype={
$1(d){var w,v=null,u=this.c===B.xm,t=u?D.dx_:D.dss
u=u?"Male":"Female"
w=this.b
u=A.d("Choose "+u.toLowerCase()+" icon",v,v,v,v,v,v,A.m(v,v,w.a.d.a?B.aS:B.av,v,v,v,v,v,v,v,v,15,v,v,B.H,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
return A.bn(!0,new A.D(O.anr,A.x(A.a([u,B.ax,A.d("Default is already set \u2014 pick another if you want.",v,v,v,v,v,v,A.m(v,v,w.a.d.a?B.bu:B.bj,v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),B.af,A.iA(!0,v,v,B.y,D.fpD,new C.dRq(this.a,w,t,d),t.length,v,B.e0,B.ah,!0)],x.p),B.al,v,B.e,B.N,0,B.p),v),!0,!1,B.ag,!0,!0)},
$S:27}
C.dRq.prototype={
$2(d,e){var w,v,u,t=this,s=null,r=t.c[e],q=r===t.a.e,p=A.l(14)
if(q)w=B.cW.j(0.14)
else w=t.b.a.d.a?B.a_:B.aS
v=A.l(14)
if(q)u=B.cW
else u=(t.b.a.d.a?B.bu:B.bj).j(0.16)
u=A.K(u,B.r,q?1.6:1)
return A.aM(!1,p,!0,A.p(B.z,C.b0u(r,26),B.f,s,s,new A.o(w,s,u,v,s,s,B.n),s,s,s,s,s,s,s,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,new C.dRp(t.d,r),s,s,s,s,s,s,s)},
$S:202}
C.dRp.prototype={
$0(){A.a6(this.a,!1).N(this.b)
return null},
$S:0}
C.dRs.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.dRm.prototype={
$3(d,e,f){return B.bM},
$C:"$3",
$R:3,
$S:87}
C.dRn.prototype={
$4(d,e,f,g){var w=this,v=null,u=x.X,t=A.cG(B.ck,e,v)
return new A.d2(e,!1,A.ir(B.z,A.as(A.aG(!1,B.a3,!0,v,new A.e3(new C.dRl(w.a,w.b,w.c,w.d,w.e,w.f,w.r,w.w),v),B.f,B.L,0,v,v,v,v,v,B.ai),v,v,v),v,new A.bi(t,new A.bs(0.96,1,u),u.k("bi<bQ.T>"))),v)},
$S:34}
C.dRl.prototype={
$2(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=A.aE(d,B.c_,x.w).w,i=l.b,h=i.a.d.a,g=h?B.ef:B.c,f=A.l(14),e=A.K((h?B.bu:B.bj).j(0.16),B.r,1)
h=l.c==null
w=h?"Add person":"Edit"
w=A.E(A.d(w,k,k,k,k,k,k,A.m(k,k,i.a.d.a?B.aS:B.av,k,k,k,k,k,k,k,k,16,k,k,B.H,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),1)
v=A.l(8)
u=x.p
v=A.A(A.a([w,A.aM(!1,v,!0,new A.D(B.eC,A.X(B.cB,i.a.d.a?B.bu:B.bj,k,k,k,20),k),k,!0,k,k,k,k,k,k,k,k,k,k,k,new C.dR6(d),k,k,k,k,k,k,k)],u),B.l,k,B.e,B.i,0,k,k)
w=l.d
t=A.m(k,k,i.a.d.a?B.aS:B.av,k,k,k,k,k,k,k,k,14,k,k,B.a8,k,k,!0,k,k,k,k,k,k,k,k)
s=i.aVE("Name")
r=l.a
q=r.d==null?k:new C.dR7(r,l.e,a0)
p=A.l(20)
o=i.a.d.a?B.bs:B.mb
n=A.K(B.cW.j(0.35),B.r,1)
m=r.d
t=A.aN(k,B.Z,h,k,!0,B.t,k,A.aO(),w,k,k,k,k,k,2,s.bfO(new A.D(B.f2,A.aM(!1,p,!0,A.p(B.z,C.b0u(m==null?"\ud83d\udc64":A.fPe(r.e,m),18),B.f,k,k,new A.o(o,k,n,k,k,k,B.a6),k,34,k,B.cq,k,k,k,34),k,!0,k,k,k,k,k,k,k,k,k,k,k,q,k,k,k,k,k,k,k),k)),B.y,!0,k,!0,k,!1,k,B.ak,k,k,k,k,k,k,k,k,k,1,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,B.ac,k,k,k,k,k,k,k,k,k,k,k,t,!0,B.a7,k,B.lc,k,B.abV,k,k)
v=A.a([v,B.af,t,B.P,A.d("Gender (required)",k,k,k,k,k,k,A.m(k,k,i.a.d.a?B.bu:B.bj,k,k,k,k,k,k,k,k,11.5,k,k,B.O,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),B.am,A.A(A.a([A.E(i.aWk("\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1","Male",new C.dR8(r,a0),r.d===B.xm),1),B.ae,A.E(i.aWk("\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1","Female",new C.dRd(r,a0),r.d===B.a8q),1)],u),B.l,k,B.e,B.i,0,k,k)],u)
if(r.d!=null)B.d.u(v,A.a([B.P,new A.bK(B.a5,k,k,A.hv(D.c0Q,D.h5Z,new C.dRe(r,l.e,a0),A.fs(k,k,k,k,k,k,k,k,k,k,k,B.cW,k,k,k,k,k,k,k,k,k,k,k,k,k,B.ch)),k)],u))
v.push(B.T)
t=A.m(k,k,i.a.d.a?B.aS:B.av,k,k,k,k,k,k,k,k,14,k,k,B.a8,k,k,!0,k,k,k,k,k,k,k,k)
s=A.a([new A.uZ(A.ag("[0-9.]",!0,!1,!1,!1),!0,"")],x.aS)
v.push(A.aN(k,B.Z,!1,k,!0,B.t,k,A.aO(),l.f,k,k,k,k,k,2,i.aVF("Amount","$ "),B.y,!0,k,!0,k,!1,k,B.ak,k,k,s,k,k,B.eb,k,k,k,1,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,B.ac,k,k,k,k,k,k,k,k,k,k,k,t,!0,B.a7,k,B.ao,k,k,k,k))
v.push(B.T)
t=i.a.d.a
s=t?B.a_:B.aS
q=A.l(10)
p=A.l(10)
o=A.l(10)
n=A.K((t?B.bu:B.bj).j(0.22),B.r,1)
t=A.d("Pay by",k,k,k,k,k,k,A.m(k,k,i.a.d.a?B.bu:B.bj,k,k,k,k,k,k,k,k,11,k,k,B.a8,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)
m=C.xp(r.a,!1)
v.push(A.aG(!1,B.a3,!0,q,A.aM(!1,p,!0,A.p(k,A.A(A.a([A.E(A.x(A.a([t,B.bF,A.d(m,k,k,k,k,k,k,A.m(k,k,i.a.d.a?B.aS:B.av,k,k,k,k,k,k,k,k,14,k,k,B.O,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)],u),B.E,k,B.e,B.i,0,B.p),1),D.bYr],u),B.l,k,B.e,B.i,0,k,k),B.f,k,k,new A.o(k,k,n,o,k,k,B.n),k,k,k,k,B.bl,k,k,k),k,!0,k,k,k,k,k,k,k,k,k,k,k,new C.dRf(r,d,a0),k,k,k,k,k,k,k),B.f,s,0,k,k,k,k,k,B.ai))
if(!h)B.d.u(v,A.a([B.P,A.d("Extending keeps missed days already counted.",k,k,k,k,k,k,A.m(k,k,i.a.d.a?B.bu:B.bj,k,k,k,k,k,k,k,k,11,k,k,k,k,1.3,!0,k,k,k,k,k,k,k,k),k,k,k)],u))
v.push(B.T)
t=A.m(k,k,i.a.d.a?B.aS:B.av,k,k,k,k,k,k,k,k,13,k,k,k,k,k,!0,k,k,k,k,k,k,k,k)
v.push(A.aN(k,B.Z,!1,k,!0,B.t,k,A.aO(),l.r,k,k,k,k,k,2,i.aVE("Note (optional)"),B.y,!0,k,!0,k,!1,k,B.ak,k,k,k,k,k,k,k,k,k,2,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,B.ac,k,k,k,k,k,k,k,k,k,k,k,t,!0,B.a7,k,B.ao,k,k,k,k))
v.push(B.af)
v.push(A.d("Optional verification",k,k,k,k,k,k,A.m(k,k,i.a.d.a?B.aS:B.av,k,k,k,k,k,k,k,k,12.5,k,k,B.H,k,k,!0,k,k,k,k,k,k,k,k),k,k,k))
v.push(A.d("ID photo, selfie, and signature from the person who owes you \u2014 all optional.",k,k,k,k,k,k,A.m(k,k,i.a.d.a?B.bu:B.bj,k,k,k,k,k,k,k,k,11,k,k,k,k,1.3,!0,k,k,k,k,k,k,k,k),k,k,k))
v.push(i.b3T(r.b.length!==0,B.mj,new C.dRg(r,i,a0),new C.dRh(r,a0),"Upload from gallery","ID photo"))
v.push(i.b3T(r.c.length!==0,D.bRJ,new C.dRi(r,i,d,a0),new C.dRj(r,a0),"Camera or gallery","Selfie"))
v.push(B.P)
t=l.w
v.push(new Ao.a93("Signature (optional)",t,new C.dRk(a0),new C.dR9(a0,t),new C.dRa(d,t,a0),k))
v.push(B.aB)
i=i.a.d.a
t=i?B.bu:B.bj
s=(i?B.bu:B.bj).j(0.28)
s=A.E(A.dW(E.aYk,new C.dRb(d),A.dj(k,k,k,k,k,k,k,k,k,t,k,k,B.qH,k,new A.ba(A.l(10),B.a1),new A.ay(s,1,B.r,-1),k,k,k,k)),1)
t=A.bp(B.cW,k,k,k,B.c,k,B.qH,k,new A.ba(A.l(10),B.a1),k,k,k)
v.push(A.A(A.a([s,B.ae,A.E(A.bJ(A.d(h?"Save":"Update",k,k,k,k,k,k,B.vQ,k,k,k),k,new C.dRc(r,w,d),t),1)],u),B.l,k,B.e,B.i,0,k,k))
return A.p(k,A.ca(A.x(v,B.al,k,B.e,B.N,0,B.p),B.t,k,B.y,k,k,k,k,k,B.ah),B.f,k,new A.aY(0,1/0,0,j.a.b*0.88),new A.o(g,k,e,f,k,k,B.n),k,k,k,B.t9,B.jr,k,k,360)},
$S:177}
C.dR6.prototype={
$0(){A.a6(this.a,!1).N(!1)
return null},
$S:0}
C.dR7.prototype={
$0(){var w=this.a.d
w.toString
return this.b.$2(this.c,w)},
$S:0}
C.dR8.prototype={
$0(){return this.b.$1(new C.dR5(this.a))},
$S:0}
C.dR5.prototype={
$0(){var w=this.a
w.d=B.xm
w.e="\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1"},
$S:0}
C.dRd.prototype={
$0(){return this.b.$1(new C.dR4(this.a))},
$S:0}
C.dR4.prototype={
$0(){var w=this.a
w.d=B.a8q
w.e="\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1"},
$S:0}
C.dRe.prototype={
$0(){var w=this.a.d
w.toString
return this.b.$2(this.c,w)},
$S:0}
C.dRf.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.a
w=2
return A.b(A.xu(null,u.b,A.c0(2020,1,1,0,0,0,0,0),null,s,A.c0(2100,1,1,0,0,0,0,0)),$async$$0)
case 2:r=e
if(r!=null)u.c.$1(new C.dR3(t,r))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dR3.prototype={
$0(){var w=this.b
return this.a.a=A.c0(w.gcl(),w.gci(),w.gcz(),0,0,0,0,0)},
$S:0}
C.dRg.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(u.b.Qi(!1),$async$$0)
case 2:t=e
if(t!=null)u.c.$1(new C.dR2(u.a,t))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dR2.prototype={
$0(){return this.a.b=this.b},
$S:0}
C.dRh.prototype={
$0(){return this.b.$1(new C.dR1(this.a))},
$S:0}
C.dR1.prototype={
$0(){return this.a.b=""},
$S:0}
C.dRi.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.b
q=r.a.d.a?B.ef:B.c
w=3
return A.b(A.bU(q,null,new C.dR_(),t.c,!0,!0,!1,null,!1,!1,x.N),$async$$0)
case 3:p=e
if(p==null){w=1
break}w=4
return A.b(r.Qi(p==="camera"),$async$$0)
case 4:s=e
if(s!=null)t.d.$1(new C.dR0(t.a,s))
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.dR_.prototype={
$1(d){var w=null
return A.bn(!0,A.x(A.a([A.dJ(!1,w,w,w,!0,w,w,w,!0,w,w,B.asQ,w,w,w,w,new C.dQU(d),!1,w,w,w,w,w,w,w,D.fX1,w,w,w),A.dJ(!1,w,w,w,!0,w,w,w,!0,w,w,B.asO,w,w,w,w,new C.dQV(d),!1,w,w,w,w,w,w,w,D.h34,w,w,w)],x.p),B.l,w,B.e,B.N,0,B.p),!0,!1,B.ag,!0,!0)},
$S:27}
C.dQU.prototype={
$0(){A.a6(this.a,!1).N("camera")
return null},
$S:0}
C.dQV.prototype={
$0(){A.a6(this.a,!1).N("gallery")
return null},
$S:0}
C.dR0.prototype={
$0(){return this.a.c=this.b},
$S:0}
C.dRj.prototype={
$0(){return this.b.$1(new C.dQZ(this.a))},
$S:0}
C.dQZ.prototype={
$0(){return this.a.c=""},
$S:0}
C.dRk.prototype={
$0(){return this.a.$1(new C.dQY())},
$S:0}
C.dQY.prototype={
$0(){},
$S:0}
C.dR9.prototype={
$0(){return this.a.$1(new C.dQX(this.b))},
$S:0}
C.dQX.prototype={
$0(){return B.d.a8(this.a)},
$S:0}
C.dRa.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.b
w=2
return A.b(A.ajd(u.a,null,null,new C.dQW(u.c,t),t,"Debtor signature"),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dQW.prototype={
$4(d,e,f,g){this.a.$1(new C.dQT(this.b,d))},
$S:443}
C.dQT.prototype={
$0(){var w=this.a
B.d.a8(w)
B.d.u(w,this.b)},
$S:0}
C.dRb.prototype={
$0(){A.a6(this.a,!1).N(!1)
return null},
$S:0}
C.dRc.prototype={
$0(){var w=this
if(B.a.i(w.b.a.a).length===0){w.c.K(x.q).f.T(D.fuN)
return}if(w.a.d==null){w.c.K(x.q).f.T(D.frC)
return}A.a6(w.c,!1).N(!0)},
$S:0}
C.dRG.prototype={
$3(d,e,f){return B.bM},
$C:"$3",
$R:3,
$S:87}
C.dRH.prototype={
$4(d,e,f,g){var w,v,u,t,s,r=null,q=this.a,p=q.a.d.a,o=p?B.ef:B.c,n=A.l(14),m=A.K((p?B.bu:B.bj).j(0.16),B.r,1)
p=A.d("Mark paid?",r,r,r,r,r,r,A.m(r,r,q.a.d.a?B.aS:B.av,r,r,r,r,r,r,r,r,16,r,r,B.H,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
w=this.b
v=w.b
u=A.Bo(w.c)
v=A.d(v+" \xb7 "+u,r,r,r,r,r,r,A.m(r,r,q.a.d.a?B.bu:B.bj,r,r,r,r,r,r,r,r,13,r,r,B.a8,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
u=w.zO(r).length
u=A.d("Missed days: "+u,r,r,r,r,r,r,A.m(r,r,w.zO(r).length>0?B.bD:B.cW,r,r,r,r,r,r,r,r,12,r,r,B.O,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
q=q.a.d.a
w=q?B.bu:B.bj
t=(q?B.bu:B.bj).j(0.28)
s=x.p
return new A.d2(e,!1,A.as(A.aG(!1,B.a3,!0,r,A.p(r,A.x(A.a([p,B.P,v,u,B.aB,A.A(A.a([A.E(A.dW(B.o7,new C.dRE(d),A.dj(r,r,r,r,r,r,r,r,r,w,r,r,B.k6,r,new A.ba(A.l(10),B.a1),new A.ay(t,1,B.r,-1),r,r,r,r)),1),B.ae,A.E(A.bJ(D.h3w,r,new C.dRF(d),A.bp(B.cW,r,r,r,B.c,r,B.k6,r,new A.ba(A.l(10),B.a1),r,r,r)),1)],s),B.l,r,B.e,B.i,0,r,r)],s),B.al,r,B.e,B.N,0,B.p),B.f,r,r,new A.o(o,r,m,n,r,r,B.n),r,r,r,B.CR,B.Hf,r,r,300),B.f,B.L,0,r,r,r,r,r,B.ai),r,r,r),r)},
$S:34}
C.dRE.prototype={
$0(){A.a6(this.a,!1).N(!1)
return null},
$S:0}
C.dRF.prototype={
$0(){A.a6(this.a,!1).N(!0)
return null},
$S:0}
C.dRA.prototype={
$1(d){var w,v,u,t,s=null,r=this.a,q=new C.dRB(r),p=r.a.d.a,o=p?B.ef:B.c,n=A.l(14),m=A.K((p?B.bu:B.bj).j(0.14),B.r,1),l=this.b,k=l.b
p=x.p
k=A.A(A.a([A.E(A.d(k,s,1,B.a2,s,s,s,A.m(s,s,r.a.d.a?B.aS:B.av,s,s,s,s,s,s,s,s,14,s,s,B.H,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),1),A.d(A.Bo(l.c),s,s,s,s,s,s,D.fHW,s,s,s)],p),B.l,s,B.e,B.i,0,s,s)
w=A.iU((r.a.d.a?B.bu:B.bj).j(0.12),s,1,s,s,s)
v=q.$3$icon$label$onTap(B.a3a,"View receipt",new C.dRt(r,d,l))
u=l.x!=null
t=u?B.pD:B.qQ
u=u?"Mark unpaid":"Mark paid"
p=A.a([new A.D(D.bFp,k,s),w,v,q.$3$icon$label$onTap(t,u,new C.dRu(r,d,l)),q.$3$icon$label$onTap(B.D5,"Edit",new C.dRv(r,d,l))],p)
if(B.a.i(l.as).length!==0)p.push(q.$3$icon$label$onTap(B.mj,"View / download ID",new C.dRw(r,d,l)))
if(B.a.i(l.at).length!==0)p.push(q.$3$icon$label$onTap(D.bRI,"View / download selfie",new C.dRx(r,d,l)))
if(l.gaIf())p.push(q.$3$icon$label$onTap(Ad.a4m,"View / download signature",new C.dRy(r,d,l)))
p.push(q.$4$color$icon$label$onTap(B.bD,B.ej,"Delete",new C.dRz(r,d,l)))
p.push(B.ax)
return A.bn(!0,new A.D(B.t7,A.p(s,A.x(p,B.l,s,B.e,B.N,0,B.p),B.f,s,s,new A.o(o,s,m,n,s,s,B.n),s,s,s,s,s,s,s,s),s),!0,!1,B.ag,!0,!0)},
$S:27}
C.dRB.prototype={
$4$color$icon$label$onTap(d,e,f,g){var w,v=null
if(d==null)w=this.a.a.d.a?B.aS:B.av
else w=d
return A.aM(!1,v,!0,new A.D(B.eX,A.A(A.a([A.X(e,w,v,v,v,20),B.bc,A.d(f,v,v,v,v,v,v,A.m(v,v,w,v,v,v,v,v,v,v,v,14,v,v,B.O,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),B.l,v,B.e,B.i,0,v,v),v),v,!0,v,v,v,v,v,v,v,v,v,v,v,g,v,v,v,v,v,v,v)},
$3$icon$label$onTap(d,e,f){return this.$4$color$icon$label$onTap(null,d,e,f)},
$S:1986}
C.dRt.prototype={
$0(){A.a6(this.b,!1).N(null)
var w=this.a.c
w.toString
C.h06(w,this.c)},
$S:0}
C.dRu.prototype={
$0(){A.a6(this.b,!1).N(null)
this.a.T5(this.c)},
$S:0}
C.dRv.prototype={
$0(){A.a6(this.b,!1).N(null)
this.a.DM(this.c)},
$S:0}
C.dRw.prototype={
$0(){var w,v,u
A.a6(this.b,!1).N(null)
w=this.a.c
w.toString
v=this.c
u=v.b
C.bH6(w,v.as,"ngmy_cashier_id_"+v.a+".jpg","ID photo \xb7 "+u)},
$S:0}
C.dRx.prototype={
$0(){var w,v,u
A.a6(this.b,!1).N(null)
w=this.a.c
w.toString
v=this.c
u=v.b
C.bH6(w,v.at,"ngmy_cashier_selfie_"+v.a+".jpg","Selfie \xb7 "+u)},
$S:0}
C.dRy.prototype={
$0(){A.a6(this.b,!1).N(null)
var w=this.a.c
w.toString
C.h0b(w,this.c)},
$S:0}
C.dRz.prototype={
$0(){A.a6(this.b,!1).N(null)
this.a.Qh(0,this.c)},
$S:0}
C.dRI.prototype={
$1(d){return d.x==null},
$S:262}
C.dRJ.prototype={
$1(d){return d.x!=null},
$S:262}
C.dRK.prototype={
$2(d,e){return d+e.c},
$S:1987}
C.dRL.prototype={
$0(){return this.a.bEq()},
$S:0}
C.dRC.prototype={
$0(){return this.a.agF(this.b)},
$S:0}
C.fJq.prototype={
$1(d){return d.a===this.a},
$S:z+34}
C.fJr.prototype={
$0(){return B.d.gH(D.a5G)},
$S:z+77}
C.dhi.prototype={
$0(){var w=this.a
return w.m(new C.dhg(w,this.b))},
$S:0}
C.dhg.prototype={
$0(){return this.a.d=this.b.a},
$S:0}
C.dhh.prototype={
$0(){},
$S:0}
C.dhj.prototype={
$0(){var w=this.a.gc2T()
A.a6(this.b,!1).N(w)
return null},
$S:0}
C.fLX.prototype={
$1(d){return C.hoz(A.a1(d,x.N,x.z))},
$S:z+11}
C.fLY.prototype={
$1(d){return d.a.length!==0},
$S:z+4}
C.fLZ.prototype={
$2(d,e){var w=A.cb(d.a,null),v=A.cb(e.a,null)
if(w!=null&&v!=null)return B.o.aQ(w,v)
return d.d.aQ(0,e.d)},
$S:z+83}
C.fZI.prototype={
$1(d){return d.aj()},
$S:z+12}
C.h7k.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.fIw.prototype={
$1(d){return d.a===this.a},
$S:z+4}
C.bSo.prototype={
$2(d,e){var w=this.a.h(0,d),v=w==null?null:B.a.i(J.k(w)).toLowerCase()
return v!=null&&J.eC(e,v)?v:null},
$S:1988}
C.h_i.prototype={
$1(d){var w=this
return new C.a_S(w.a,w.b,w.c,w.d,w.e,w.f,null)},
$S:z+54}
C.dhY.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.dhX(w,d))},
$S:z+80}
C.dhX.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.dhM.prototype={
$0(){var w,v=this.a,u=this.b
v.d=u
w=v.e=!1
if(J.cJ(u)?v.r>=J.ad(v.d):w)v.r=J.ad(v.d)-1},
$S:0}
C.dhJ.prototype={
$0(){var w=this.a
w.r=this.b-1
w.w=w.x
w.x=!1},
$S:0}
C.dhk.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.dhl.prototype={
$0(){var w=this.a
w.r=this.b
w.x=w.w=!0},
$S:0}
C.dhN.prototype={
$0(){return this.a.w=!1},
$S:0}
C.dht.prototype={
$1(d){var w=null,v=A.P(d).ax.a===B.I,u=v?B.ef:B.c,t=A.d("Remove this page?",w,w,w,w,w,w,A.m(w,w,v?B.aS:B.av,w,w,w,w,w,w,w,w,w,w,w,B.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),s=A.d("\u201c"+this.a.b+"\u201d will be deleted from this device.",w,w,w,w,w,w,A.m(w,w,v?B.bu:B.bj,w,w,w,w,w,w,w,w,w,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)
return A.em(A.a([A.bP(!1,B.ds,w,w,!0,w,w,w,new C.dhr(d),w,w),A.bJ(B.xM,w,new C.dhs(d),A.bp(B.nq,w,w,w,w,w,w,w,w,w,w,w))],x.p),w,w,u,s,w,w,w,w,t,w)},
$S:18}
C.dhr.prototype={
$0(){A.a6(this.a,!1).N(!1)
return null},
$S:0}
C.dhs.prototype={
$0(){A.a6(this.a,!1).N(!0)
return null},
$S:0}
C.dhu.prototype={
$0(){var w=this.a
w.w=!1
w.r=B.o.D(w.r-1,-1,999)},
$S:0}
C.dhK.prototype={
$1(d){return d.a===this.a.y.a},
$S:z+13}
C.dhL.prototype={
$0(){return B.d.gH(D.A5)},
$S:z+14}
C.dhp.prototype={
$1(d){var w=this.a,v=w.y,u=w.gz8(0),t=J.ad(w.d)
w=J.ad(w.d)===1?"page":"pages"
return new C.Ue(v.Q,u,"Family Book \xb7 "+t+" "+w,null)},
$S:z+38}
C.dhq.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.dhv.prototype={
$1(d){var w=this.a,v=w.y,u=B.a.i(w.a.r)
if(u.length===0)u="Our Family Book"
return new C.a_q(v,u,J.ad(w.d),null)},
$S:z+40}
C.dhw.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.dhW.prototype={
$2(d,e){var w,v,u,t,s=null,r=this.a,q=r.f
q===$&&A.c()
if(e===0)w=A.az(s,new C.a_6(r.y,r.gz8(0),J.ad(r.d),s),B.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new C.dhU(r),s,s,s,s,s,s,!1,B.a4)
else{w=e-1
v=J.u(r.d,w)
J.ad(r.d)
w=w===r.r&&r.w&&r.a.f
u=r.z
u===$&&A.c()
t=r.Q
t===$&&A.c()
t=new C.bd3(v,e,w,u,t,r.gbV2(),C.hEt(r.y.Q),r.gz8(0),s)
w=t}return A.c7(q,new C.dhV(r,e),new A.D(B.a1k,w,s))},
$S:1989}
C.dhV.prototype={
$2(d,e){var w,v,u=this.a,t=u.f
t===$&&A.c()
t=t.f
if(t.length!==0&&B.d.gd6(t).ay){t=this.b
u=x.cy.a(B.d.gd6(u.f.f)).gvs(0)
w=t-(u==null?t:u)}else w=0
v=B.h.D(w,-1,0)
u=A.dr()
t=u.a
t.$flags&2&&A.aj(t)
t[11]=0.0013
u.fE(v*3.141592653589793*0.5)
return A.fA(B.a5,A.d3(e,B.h.D(1+v*0.5,0,1)),null,u,!0)},
$S:45}
C.dhU.prototype={
$0(){var w=this.a.f
w===$&&A.c()
return w.aJr(B.qz,B.iB)},
$S:0}
C.dhG.prototype={
$0(){var w=this.a
return w.m(new C.dhF(w))},
$S:0}
C.dhF.prototype={
$0(){return this.a.w=!0},
$S:0}
C.dhH.prototype={
$0(){var w=this.a.c
w.toString
A.a6(w,!1).N(null)
return null},
$S:0}
C.dhm.prototype={
$1(d){var w,v,u=null,t=A.l(26),s=E.kx.j(0.5),r=x.p,q=A.a([D.fVz,B.af],r),p=this.a
if(B.a.i(p.a.x).length!==0){w=J.ct(p.d)?"Write this book":"Write a new book"
q.push(p.a_7(d,B.e9,w,J.ct(p.d)?"Choose English or Swahili, then describe the book":"A brand new book for your shelf. Choose English or Swahili, then describe it","write"))}if(p.a.f)q.push(p.a_7(d,K.aqM,"Fix or change something","Correct a word, rewrite a page, add to it, or redesign the cover","fix"))
if(J.cJ(p.d)){r=A.a([],r)
w=this.b
v=w==="en"
if(v)r.push(new A.D(B.cw,A.d("Your book is in English.",u,u,u,u,u,u,A.m(u,u,D.kQ.j(0.7),u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u))
w=w==="sw"
if(w)r.push(new A.D(B.cw,A.d("Your book is in Swahili.",u,u,u,u,u,u,A.m(u,u,D.kQ.j(0.7),u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u))
if(w)r.push(p.a_7(d,X.arJ,"Make my Swahili sound natural","A native-speaker editor rewrites every page so it reads like real Swahili","polish"))
if(!w)r.push(p.a_7(d,B.oM,"Translate my book to Swahili","Every page, from English into Kiswahili","sw"))
if(!v)r.push(p.a_7(d,B.oM,"Translate my book to English","Every page, from Swahili into English","en"))
B.d.u(q,r)}return A.eI(u,E.Ce,A.bn(!0,new A.D(Ac.z3,A.x(q,B.E,u,B.e,B.N,0,B.p),u),!0,!1,B.ag,!0,!0),u,u,u,B.OL,u,B.d7,u,new A.ba(t,new A.ay(s,1.4,B.r,-1)),u)},
$S:46}
C.dhI.prototype={
$0(){A.a6(this.a,!1).N(this.b)
return null},
$S:0}
C.dhz.prototype={
$1(d){var w=this.a,v=w.r>=0&&J.cJ(w.d)
return new C.a_U(v,J.cJ(w.d),w.r+1,null)},
$S:z+44}
C.dhA.prototype={
$1(d){var w=null
return A.oU(!1,A.em(w,w,w,E.Ce,new A.k8(this.a,new C.dhy(),w,w,x.cI),w,w,w,w,w,w),w,x.z)},
$S:288}
C.dhy.prototype={
$3(d,e,f){var w=null
return A.A(A.a([E.abz,B.p4,A.E(A.d(e,w,w,w,w,w,w,B.jC,w,w,w),1)],x.p),B.l,w,B.e,B.i,0,w,w)},
$S:669}
C.dhB.prototype={
$0(){return this.a.a=!1},
$S:52}
C.dhC.prototype={
$2(d,e){this.a.sp(0,d)
return d},
$S:194}
C.dhD.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.dhE.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=u.a
r=s.a
w=2
return A.b(C.Bx(r.c,r.d,u.b),$async$$0)
case 2:r=s.a
t=u.c
w=3
return A.b(C.SS(r.c,r.d,t),$async$$0)
case 3:if(s.c!=null)s.m(new C.dhx(s,t))
w=4
return A.b(s.lj(),$async$$0)
case 4:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dhx.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.dhP.prototype={
$1(d){var w=null
return A.oU(!1,A.em(w,w,w,E.Ce,new A.k8(this.a,new C.dhO(),w,w,x.cI),w,w,w,w,w,w),w,x.z)},
$S:288}
C.dhO.prototype={
$3(d,e,f){var w=null
return A.A(A.a([E.abz,B.p4,A.E(A.d(e,w,w,w,w,w,w,B.jC,w,w,w),1)],x.p),B.l,w,B.e,B.i,0,w,w)},
$S:669}
C.dhQ.prototype={
$0(){return this.a.a=!1},
$S:52}
C.dhR.prototype={
$2(d,e){this.a.sp(0,d)
return d},
$S:194}
C.dhS.prototype={
$2(d,e){this.a.sp(0,d)
return d},
$S:194}
C.dhT.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.a
w=2
return A.b(C.Bx(s.c,s.d,u.b),$async$$0)
case 2:w=3
return A.b(t.lj(),$async$$0)
case 3:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dhn.prototype={
$0(){var w=this.a.f
w===$&&A.c()
return w.bln(B.qz,A4.Oj)},
$S:0}
C.dho.prototype={
$0(){var w=this.a.f
w===$&&A.c()
return w.aJr(B.qz,A4.Oj)},
$S:0}
C.djK.prototype={
$0(){A.a6(this.a,!1).N(null)
return null},
$S:0}
C.djL.prototype={
$1(d){var w=this.a
return w.m(new C.djJ(w))},
$S:9}
C.djJ.prototype={
$0(){return this.a.e="page"},
$S:0}
C.djM.prototype={
$1(d){var w=this.a
return w.m(new C.djI(w))},
$S:9}
C.djI.prototype={
$0(){return this.a.e="book"},
$S:0}
C.djN.prototype={
$1(d){var w=this.a
return w.m(new C.djH(w))},
$S:9}
C.djH.prototype={
$0(){return this.a.e="cover"},
$S:0}
C.djO.prototype={
$0(){var w=this.a
return w.m(new C.djG(w,this.b))},
$S:0}
C.djG.prototype={
$0(){var w=this.b
this.a.d.sb4(0,w)
return w},
$S:0}
C.djP.prototype={
$0(){var w=this.a,v=B.a.i(w.d.a.a)
if(v.length===0)return
w=w.ga2X()
A.a6(this.b,!1).N(new A.brW(w,v))},
$S:0}
C.dic.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.dib.prototype={
$1(d){var w=this.a.a,v=w.c,u=w.d,t=this.b.a
t=t==="main"?u:u+"~"+t
return new C.a_Q(v,t,u,w.e,w.f,w.r,w.w,null)},
$S:z+50}
C.dig.prototype={
$1(d){return d.a===this.a},
$S:z+52}
C.dif.prototype={
$1(d){var w,v=null,u=this.b,t=this.a.bbl(u)
u=u.c
w=u===1?"page":"pages"
w=A.d("\u201c"+t+"\u201d and its "+u+" "+w+" will be deleted from this device.",v,v,v,v,v,v,B.hs,v,v,v)
return A.em(A.a([A.bP(!1,B.ds,v,v,!0,v,v,v,new C.did(d),v,v),A.bJ(B.xM,v,new C.die(d),A.bp(B.nq,v,v,v,v,v,v,v,v,v,v,v))],x.p),v,v,E.Ce,w,v,v,v,v,D.fUl,v)},
$S:18}
C.did.prototype={
$0(){A.a6(this.a,!1).N(!1)
return null},
$S:0}
C.die.prototype={
$0(){A.a6(this.a,!1).N(!0)
return null},
$S:0}
C.dih.prototype={
$0(){A.a6(this.a,!1).N(null)
return null},
$S:0}
C.dii.prototype={
$2(d,e){var w,v,u,t=null,s=(e.b-32-14)/2,r=A.a([],x.p)
for(w=this.a,v=w.length,u=0;u<w.length;w.length===v||(0,A.I)(w),++u)r.push(new A.a5(s,t,w[u],t))
return A.ca(A.c_(B.bI,r,B.br,t,18,14),B.t,t,B.y,t,t,D.bGo,t,t,B.ah)},
$S:322}
C.dia.prototype={
$0(){return this.a.R4(0,this.b)},
$S:0}
C.di9.prototype={
$0(){return this.a.Qw(0,this.b)},
$S:0}
C.cQt.prototype={
$1(d){return d.a===this.a.c.a},
$S:z+13}
C.cQu.prototype={
$0(){return B.d.gH(D.A5)},
$S:z+14}
C.cQv.prototype={
$4(d,e,f,g){var w=null,v=A.l(e)
return A.bS(0,new A.D(d,new A.bN(new A.o(w,w,A.K(this.a.j(f),B.r,g),v,w,w,B.n),B.bk,w,w),w),0,0,0)},
$S:1991}
C.d99.prototype={
$1(d){return this.a.m(new C.d98(this.b,this.c))},
$S:9}
C.d98.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.d9y.prototype={
$1(d){return this.a.m(new C.d9l())},
$S:2}
C.d9l.prototype={
$0(){},
$S:0}
C.d9z.prototype={
$1(d){return this.a.m(new C.d9k())},
$S:2}
C.d9k.prototype={
$0(){},
$S:0}
C.d9A.prototype={
$0(){var w=this.a
return w.m(new C.d9j(w,this.b))},
$S:0}
C.d9j.prototype={
$0(){var w=this.a
return w.d=w.gox().Gj(this.b.a)},
$S:0}
C.d9B.prototype={
$0(){var w=this.a
return w.m(new C.d9i(w,this.b))},
$S:0}
C.d9i.prototype={
$0(){var w=this.a
return w.d=w.gox().cOF(this.b)},
$S:0}
C.d9C.prototype={
$1(d){return this.a.m(new C.d9h())},
$S:2}
C.d9h.prototype={
$0(){},
$S:0}
C.d9D.prototype={
$0(){var w=this.a
return w.m(new C.d9g(w,this.b))},
$S:0}
C.d9g.prototype={
$0(){var w=this.a
return w.d=w.gox().cOK(this.b.a)},
$S:0}
C.d9E.prototype={
$1(d){var w=this.a
return w.m(new C.d9t(w,d))},
$S:6}
C.d9t.prototype={
$0(){var w=this.a
return w.d=w.gox().cPE(this.b)},
$S:0}
C.d9F.prototype={
$1(d){var w=this.a
return w.d=w.gox().aGn(d)},
$S:2}
C.d9G.prototype={
$1(d){var w=this.a
return w.d=w.gox().cON(d)},
$S:2}
C.d9I.prototype={
$1(d){var w=this.a
return w.d=w.gox().cPC(d)},
$S:2}
C.d9J.prototype={
$1(d){var w=this.a
return w.m(new C.d9s(w,d))},
$S:9}
C.d9s.prototype={
$0(){var w=this.a
return w.d=w.gox().cPt(this.b)},
$S:0}
C.d9K.prototype={
$0(){var w=this.a,v=w.gox(),u=B.a.i(w.gz8(0).a.a),t=B.a.i(w.gaDy().a.a)
u=v.bg4(B.a.i(w.gat9().a.a),t,u)
A.a6(this.b,!1).N(u)
return null},
$S:0}
C.bSy.prototype={
$1(d){this.a.f.sp(0,d.a/1e6)},
$S:8}
C.bSs.prototype={
$1(d){var w=this.a
if(w.c==null)return
w.m(new C.bSr(w,d))},
$S:12}
C.bSr.prototype={
$0(){var w=this.a,v=w.db.length,u=Math.min(v,w.dx+2)
w.dx=u
if(u>=v){w.r.c=!1
this.b.a1(0)}},
$S:0}
C.bSB.prototype={
$0(){var w=this.a
w.dx=w.db.length
w.r.c=!1},
$S:0}
C.bSt.prototype={
$0(){var w=this.a
w.Q=D.b2z
w.aee(1)
w.r.x=null},
$S:0}
C.bSu.prototype={
$0(){var w,v,u=this.a
if(u.c==null||u.Q!==D.b2z)return
w=new A.e0()
w.cU(u.as*13+u.a.e)
v=u.r
v.Q=3+w.aw(3)
v.z=D.d7h[w.aw(6)]
v.as=u.f.a+2.6},
$S:0}
C.bSx.prototype={
$0(){var w=this.a
w.Q=D.aec
w.aee(2)
w.r.z=null},
$S:0}
C.bSw.prototype={
$0(){var w,v,u=this,t=u.a,s=t.fr=u.c
t.Q=D.hM7
t.aee(3)
w=t.r
w.d=s
w.x="I say: "+t.gCF()[t.as].b[u.b]
t=t.f
w.y=t.a+2.2
v=u.d
w.Q=3+v.aw(3)
w.z=s?D.ddX[v.aw(4)]:D.dzz[v.aw(3)]
w.as=t.a+2.8},
$S:0}
C.bSz.prototype={
$0(){var w=this.a
w.Q=D.b2A
w.CW=this.b
w.cy=1
w.aee(4)
w.r.f=w.f.a+5},
$S:0}
C.bSA.prototype={
$0(){},
$S:0}
C.bSv.prototype={
$0(){var w=this.a.c
w.toString
return A.a6(w,!1).hY()},
$S:0}
C.bSp.prototype={
$0(){return this.a.Le(this.b)},
$S:0}
C.bSq.prototype={
$0(){var w=this.a.c
w.toString
return A.a6(w,!1).hY()},
$S:0}
C.bU4.prototype={
$0(){var w=this
return w.a.Rp(w.b,0,w.c,w.d)},
$S:0}
C.bU5.prototype={
$0(){var w=this
return w.a.Rp(w.b,3,w.c,w.d)},
$S:0}
C.bU6.prototype={
$0(){var w=this
return w.a.Rp(w.b,1,w.c,w.d)},
$S:0}
C.bU7.prototype={
$0(){var w=this
return w.a.bUt(w.b,w.c,w.d)},
$S:0}
C.bU8.prototype={
$0(){var w=this
return w.a.Rp(w.b,4,w.c,w.d)},
$S:0}
C.bU9.prototype={
$0(){var w=this
return w.a.Rp(w.b,2,w.c,w.d)},
$S:0}
C.bUa.prototype={
$0(){var w=this
return w.a.Rp(w.b,5,w.c,w.d)},
$S:0}
C.bUb.prototype={
$2(d,e){return B.h.aQ(d.a,e.a)},
$S:661}
C.bU3.prototype={
$2(d,e){var w,v,u,t,s,r=null,q=D.a6R[d],p=q.a.a5(0,new A.r(0,-q.b*1.2*124)),o=A.fE(r,B.cx,r,3,r,A.cS(r,r,r,r,r,r,r,r,r,D.fyQ,e),B.a7,B.c1,r,B.dK,B.c2)
o.nB(130)
w=o.b.a.c
w=p.aJ(0,new A.r(0,w.gba(w)/2+8))
v=o.b
u=v.c
v=v.a.c
t=A.by(A.bX(w,v.gba(v)+12,u+18),B.i4)
u=this.a
v=t.eD(B.dM)
w=$.S()
s=A.L()
s.r=B.dB.gp(0)
u.aq(v,s)
s=A.L()
s.r=D.qq.gp(0)
u.aq(t,s)
w=new A.aH(w.r,B.aj,r,r,A.a([],x.v))
s=p.a
v=t.d-1
w.E(new A.aZ(s-5,v))
w.E(new A.aq(s+1,p.b+1))
w.E(new A.aq(s+6,v))
w.E(new A.bx())
v=A.L()
v.r=D.qq.gp(0)
u.af(w,v)
o.a4(u,new A.r(t.a+9,t.b+6))},
$S:658}
C.bSP.prototype={
$2(d,e){return B.o.aQ(d.Q,e.Q)},
$S:z+7}
C.bSQ.prototype={
$2(d,e){var w=this.a,v=B.o.aQ(w.amX(d),w.amX(e))
if(v!==0)return v
return B.o.aQ(d.Q,e.Q)},
$S:z+7}
C.fwx.prototype={
$1(d){return d!==this.a&&B.a.i(d).length!==0},
$S:3}
C.h7b.prototype={
$2(d,e){if(e!=null)J.c5(this.a.c1(0,d,new C.h7c()),e)},
$S:z+66}
C.h7c.prototype={
$0(){return A.a([],x.J)},
$S:z+76}
C.h7d.prototype={
$1(d){return d!==this.a},
$S:3}
C.h7e.prototype={
$1(d){var w=d.a,v=this.a
return w!==v.a&&w!==this.b.a&&d.c===v.c},
$S:z+1}
C.h7f.prototype={
$1(d){return d!==this.a&&!B.d.aU(this.b,new C.h7a(this.c,d))},
$S:3}
C.h7a.prototype={
$1(d){return B.a.i(d.b)===this.b},
$S:z+1}
C.h7g.prototype={
$1(d){return d!==this.a},
$S:3}
C.h7h.prototype={
$1(d){return d!==this.a},
$S:3}
C.h7i.prototype={
$1(d){return d!==this.a&&!B.d.aU(this.b,new C.h79(this.c,d))},
$S:3}
C.h79.prototype={
$1(d){return B.a.i(d.b)===this.b},
$S:z+1}
C.fK2.prototype={
$1(d){var w=this.b.h(0,d)
w.toString
return J.ad(w)>this.a.a},
$S:3}
C.fYC.prototype={
$1(d){return d.Q},
$S:z+15}
C.fYD.prototype={
$0(){return A.a([],x.u)},
$S:z+16}
C.fFS.prototype={
$1(d){return this.a>=d.c},
$S:z+17}
C.fMT.prototype={
$1(d){return d.c>this.a},
$S:z+17}
C.bNC.prototype={
$1(d){return B.a.i(d).length!==0},
$S:3}
C.h7B.prototype={
$2(d,e){return B.o.aQ(C.hAF(d),C.hAF(e))},
$S:214}
C.h7C.prototype={
$1(d){return d!==this.a},
$S:3}
C.fZe.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
C.bLL.prototype={
$0(){var w=this.a
w.ch=!0
w.b9A()},
$S:0}
C.bLG.prototype={
$0(){},
$S:0}
C.bLM.prototype={
$1(d){return d.f<=0},
$S:z+26}
C.bLE.prototype={
$0(){},
$S:0}
C.bLF.prototype={
$0(){},
$S:0}
C.bLK.prototype={
$2(d,e){var w,v,u=null,t=this.a,s=A.a([A.bS(0,A.b5(u,u,u,new C.bdJ(t,u),B.az),0,0,0)],x.p)
if(t.dy.length!==0&&t.dx<t.fr){w=B.w.j(0.7)
v=A.l(14)
s.push(A.ao(u,A.p(u,A.d(t.dy,u,u,u,u,u,u,D.fGv,B.K,u,u),B.f,u,u,new A.o(w,u,u,v,u,u,B.n),u,u,u,u,B.bS,u,u,u),u,u,14,14,6,u))}return A.az(B.bZ,new A.an(B.a0,u,B.ad,B.t,s,u),B.y,!1,u,u,u,u,u,u,u,new C.bLH(t,e),u,u,u,u,u,u,u,new C.bLI(t,e),u,u,u,u,u,u,u,u,u,new C.bLJ(t,e),u,u,u,u,!1,B.a4)},
$S:37}
C.bLH.prototype={
$1(d){return this.a.db=B.h.D(d.b.a/this.b.b,0.08,0.92)},
$S:19}
C.bLJ.prototype={
$1(d){return this.a.db=B.h.D(d.b.a/this.b.b,0.08,0.92)},
$S:23}
C.bLI.prototype={
$1(d){return this.a.db=B.h.D(d.b.a/this.b.b,0.08,0.92)},
$S:19}
C.bLD.prototype={
$0(){var w=this.a.c
w.toString
return A.a6(w,!1).hY()},
$S:0}
C.crt.prototype={
$0(){var w=this,v=w.a
v.ax=w.b
v.at=w.c.a+" is not a child of "+w.d+". Try someone else."},
$S:0}
C.cru.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new C.crs(w))},
$S:0}
C.crs.prototype={
$0(){return this.a.ax=-1},
$S:0}
C.crv.prototype={
$0(){var w=this,v=w.a
v.gj2()[w.b]=w.c
v.at=w.d.a+" is a child of "+w.e+". The branch grows!"},
$S:0}
C.crw.prototype={
$2(d,e){return d+e.c.length},
$S:z+29}
C.crx.prototype={
$0(){var w=this.a
w.ay=!0
w.w=this.b},
$S:0}
C.cry.prototype={
$0(){},
$S:0}
C.crz.prototype={
$0(){var w=this.a
w.z=w.XC(++w.e)
w.Q=A.c2(w.gkT()[w.e].c.length,-1,!1,x.S)
w.y=0
w.at=""},
$S:0}
C.crp.prototype={
$0(){return A.a6(this.a,!1).hY()},
$S:0}
C.crq.prototype={
$2(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i=a3.b,h=a3.d,g=this.a,f=g.gj2().length,e=i/2,d=new C.crr(i,f,h),a0=g.as,a1=A.a3(a0).k("b8<2>")
a0=A.C(new A.b8(a0,a1),a1.k("M.E"))
a0=A.bS(0,A.c7(new A.hf(a0),new C.crk(g,new A.r(e,56),f,d),j),0,0,0)
a1=this.b
w=g.gj2().length!==0&&!B.d.q(g.gj2(),-1)
v=x.p
e=A.a([a0,A.ao(j,new C.QV(a1.b,a1.a,76,w,j),j,j,e-50,j,4,j)],v)
for(a0=x.W,a1=x.dN,u=0;u<f;++u)e.push(new A.cK(d.$1(u).a-44,d.$1(u).b-48,j,j,j,j,new S.N4(new C.crl(g,u),new C.crm(g,u),new C.crn(g,u),j,j,new A.bg("slot-"+u,a0),a1),j))
a1=g.at
if(a1.length!==0)e.push(A.ao(j,A.d(a1,j,j,j,j,j,j,A.m(j,j,B.a.q(a1,"not a child")?B.fj:B.be,j,j,j,j,j,j,j,j,13,j,j,B.H,j,j,!0,j,j,j,j,j,j,j,j),B.K,j,j),j,j,0,0,h*0.76-6,j))
if(g.gj2().length!==0&&!B.d.q(g.gj2(),-1)){a0=g.e+1>=g.gkT().length?"See my result":"Next family"
g=A.as(C.uA(a0,g.gqs(g),B.cV,B.jt,D.fC),j,j,j)}else{a1=A.a([],v)
w=x.gc
v=x.gW
t=x.X
u=0
for(;;){s=g.z
if(!(u<(s===$?g.z=g.XC(0):s).length))break
if(!B.d.q(g.gj2(),u)){r=""+u
q=g.e
p=g.ax===u?1:0
s=g.z
if(s===$){s=g.z=g.XC(0)
o=s}else o=s
n=s[u]
n=A.e4(B.z,new C.QV(n.b,o[u].a,62,!0,j),1.15,j,j)
s=g.z
if(s===$){s=g.z=g.XC(0)
o=s}else o=s
m=s[u]
l=o[u]
k=l.a
a1.push(new A.rc(new A.bs(0,p,t),new C.cro(),new S.Et(u,j,new C.QV(l.b,k,62,!1,j),new A.kO(0.25,new C.QV(m.b,k,62,!1,j),j),new A.kg(n,B.ai,!1,0,B.L,j,j,j,j,!0,B.f,B.a3,j,j),B.J,S.hEl(),!0,!0,j,j,j,j,j,j,!1,B.iT,j,new A.bg("chip-"+r,a0),w),B.b0,B.iR,j,new A.bg("t"+r+"-"+q,a0),v))}++u}g=A.c_(B.fU,a1,B.br,j,6,8)}e.push(A.ao(0,g,j,j,0,0,j,j))
return new A.an(B.a0,j,B.ad,B.t,e,j)},
$S:65}
C.crr.prototype={
$1(d){return new A.r(this.a*(d+0.5)/this.b,this.c*0.62)},
$S:703}
C.crk.prototype={
$2(d,e){var w,v,u,t,s,r,q=this,p=null,o=A.a([],x.g)
for(w=q.c,v=q.d,u=0;u<w;++u)o.push(v.$1(u))
v=A.a([],x.n)
for(t=q.a,s=t.as,u=0;u<w;++u){r=s.h(0,u)
if(r==null)r=p
else{r=r.x
r===$&&A.c()}v.push(r==null?0:r)}w=t.gj2().length!==0&&!B.d.q(t.gj2(),-1)
return A.b5(p,p,p,new C.bdc(q.b,o,v,w,p),B.az)},
$S:56}
C.crm.prototype={
$1(d){return this.a.gj2()[this.b]===-1},
$S:z+30}
C.crn.prototype={
$1(d){return this.a.cSw(this.b,d.a)},
$S:z+31}
C.crl.prototype={
$3(d,e,f){var w,v=null,u=this.a,t=this.b,s=u.gj2()[t]!==-1,r=A.l(18),q=e.length!==0?B.cV.j(0.3):B.L
if(s)w=v
else w=A.K(e.length!==0?B.cV:B.k0,B.r,2)
u=s?A.lJ(new C.crj(),A.as(new C.QV(u.gaFQ()[u.gj2()[t]].b,u.gaFQ()[u.gj2()[t]].a,62,!1,v),v,v,v),B.nk,B.iR,v,v,new A.bs(0.3,1,x.X),x.i):D.bdT
return A.cU(v,u,v,v,B.b0,new A.o(q,v,w,r,v,v,B.n),B.a3,v,100,v,v,v,v,v,88)},
$S:1994}
C.crj.prototype={
$3(d,e,f){return A.e4(B.z,f,e,null,null)},
$S:110}
C.cro.prototype={
$3(d,e,f){return A.dP(f,new A.r(Math.sin(e*24)*8*(1-e),0))},
$S:110}
C.cRx.prototype={
$1(d){return d>=1},
$S:117}
C.cGq.prototype={
$1(d){var w=this.a
if(w.c==null||w.as)return
if(w.f<w.gkT()[w.e].d.length)w.m(new C.cGp(w))},
$S:12}
C.cGp.prototype={
$0(){return this.a.f++},
$S:0}
C.cGy.prototype={
$0(){var w,v=this.a
v.as=!0
w=this.b
v.ay=w
v.r+=w;++v.w},
$S:0}
C.cGz.prototype={
$0(){var w=this.a,v=this.b
w.z.I(0,v)
w.Q=v},
$S:0}
C.cGA.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new C.cGx(w))},
$S:0}
C.cGx.prototype={
$0(){return this.a.Q=-1},
$S:0}
C.cGB.prototype={
$0(){return this.a.f++},
$S:0}
C.cGC.prototype={
$0(){var w=this.a
w.at=!0
w.x=this.b},
$S:0}
C.cGD.prototype={
$0(){},
$S:0}
C.cGE.prototype={
$0(){var w=this.a;++w.e
w.f=1
w.z.a8(0)
w.as=!1
w.ay=0},
$S:0}
C.cGs.prototype={
$0(){return A.a6(this.a,!1).hY()},
$S:0}
C.cGt.prototype={
$3(d,e,f){var w=null
return A.lJ(new C.cGr(this.a,e),w,B.b0,B.hO,w,w,new A.bs(w,this.b,x.X),x.i)},
$S:1995}
C.cGr.prototype={
$3(d,e,f){var w,v=null,u=this.a,t=B.cV.j(u.as?0.6:0.15)
t=A.a([new A.ab(0,B.G,t,B.J,u.as?40:18)],x.V)
w=this.b
return A.p(v,A.i3(new A.BG(new A.uT(B.w.j(e),B.Mk,v,B.YP),H.bYl(A.b5(v,v,v,new C.aCc(u.gkT()[u.e].c,u.as,v),B.az),new A.Ey(w,w,B.WH)),v),B.aq),B.f,v,v,new A.o(v,v,v,v,t,v,B.a6),v,190,v,v,v,v,v,190)},
$S:1996}
C.cGu.prototype={
$3(d,e,f){return A.d3(A.dP(f,new A.r(0,14*(1-e))),e)},
$S:103}
C.cGv.prototype={
$3(d,e,f){return A.dP(f,new A.r(Math.sin(e*22)*8*(1-e),0))},
$S:110}
C.cGw.prototype={
$0(){return this.a.bqI(this.b)},
$S:0}
C.f9_.prototype={
$1(d){var w=d.a/1e6,v=this.a,u=Math.min(0.05,w-v.ant$)
v.ant$=w
v.qe$.sp(0,w)
v.arn(u)},
$S:8}
C.fj9.prototype={
$1(d){var w=this.a,v=w.c.length,u=Math.min(v,w.d+2)
w.d=u
if(u>=v)d.a1(0)
w.a.$0()},
$S:12}
C.bTA.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new C.bTz())},
$S:0}
C.bTz.prototype={
$0(){},
$S:0}
C.bTx.prototype={
$0(){return this.a.Q=!0},
$S:0}
C.bTv.prototype={
$0(){},
$S:0}
C.bTw.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.a
if(p.c==null){w=1
break}s=p.x
r=p.gMX()
w=s+1>=r.length?3:5
break
case 3:q=C.bHk(p.gaqc(0),0,r.length)
p.m(new C.bTs(p,q))
o=p
w=6
return A.b(C.BT(p.a.d,q),$async$$0)
case 6:o.z=e
s=p.a
o=p
w=7
return A.b(C.BU(s.d,s.c.a,"school",p.gaqc(0)*10),$async$$0)
case 7:o.at=e
if(p.c!=null)p.m(new C.bTt())
w=4
break
case 5:p.m(new C.bTu(p))
p.gqA().Wa(r[p.x].a)
case 4:case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.bTs.prototype={
$0(){var w=this.a
w.as=!0
w.y=this.b},
$S:0}
C.bTt.prototype={
$0(){},
$S:0}
C.bTu.prototype={
$0(){return this.a.x++},
$S:0}
C.bTy.prototype={
$0(){return this.a.Le(this.b)},
$S:0}
C.bTr.prototype={
$0(){var w=this.a.c
w.toString
return A.a6(w,!1).hY()},
$S:0}
C.f90.prototype={
$0(){var w,v=this,u=v.a,t=46+Math.sin(u*3.1)*8,s=-90+Math.sin(u*4.3)*10,r=new A.r(t,s),q=v.b,p=v.d,o=p?C.hEz(u,1):0,n=v.e,m=n?0.9:0.3
if(n)n=Math.sin(u*9)*2
else n=p?Math.sin(u*4):0
w=p?r:D.EH
C.SQ(q,D.eu9,0,0.2,-0.6,-0.2,null,w,D.esT,v.c,o,n,1.2,m,0,u,-0.3)
if(p){u=v.f.a5(0,new A.r(Math.sin(u*3)*14,Math.sin(u*2)*6))
$.S()
p=A.L()
p.r=D.GE.gp(0)
p.c=3
p.d=B.bG
q.ah(new A.r(372+1.2*t,470+1.2*s),u,p)}},
$S:0}
C.f91.prototype={
$0(){var w=this.b,v=this.c,u=v?0.3:0
v=v?Math.max(0,Math.sin(w*1.7))*2:0
return C.SQ(this.a,D.etf,0,u,0.7,-0.5,null,null,D.JZ,5,0,v,1.05,0.3,0,w,0.3)},
$S:0}
C.f92.prototype={
$0(){var w=this.b,v=this.c?Math.max(0,Math.sin(w*1.9+1))*2.4:0
return C.SQ(this.a,D.euW,0,0,0.8,-0.5,null,null,D.JZ,2,0,v,1.2,0.3,0,w,0.35)},
$S:0}
C.f93.prototype={
$0(){var w=this,v=w.a.b.Q&&!w.d?0.5:0.1
return C.SQ(w.b,D.eu3,0,v,-0.8,-0.5,null,null,D.JZ,4,0,0,1.2,0.25,0,w.c,-0.35)},
$S:0}
C.f94.prototype={
$0(){var w,v,u,t,s,r=this,q=r.a,p=q.b,o=p.Q&&!r.b&&p.w.length<=p.x
p=r.c
w=r.d
v=r.e
u=v?0.9:0.3
t=o?0.5:0
s=v?Math.sin(w*9)*2.4:0
if(o)v=new A.r(34,-122+Math.sin(w*5)*5)
else v=v?D.eu7:D.EH
C.SQ(p,D.etz,0,t,0,-0.6,null,v,D.JZ,3,0,s,1.3,u,0,w,0)
q=q.cd2(new A.r(222,455),9)
$.S()
w=A.L()
w.r=B.cV.gp(0)
p.af(q,w)},
$S:0}
C.f95.prototype={
$2(d,e){return B.h.aQ(d.a,e.a)},
$S:661}
C.bTd.prototype={
$2(d,e){return d+e},
$S:66}
C.bTo.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.bTp.prototype={
$0(){return this.a.y=-1},
$S:0}
C.bTq.prototype={
$0(){var w,v,u=this,t=u.a,s=u.c
t.gj2()[u.b]=s
t.gj2()[u.d]=t.y
w=t.as
v=t.qe$
w.n(0,s,v.a+0.5)
w.n(0,t.y,v.a+0.5)
t.y=-1},
$S:0}
C.bTk.prototype={
$1(d){return d},
$S:94}
C.bTj.prototype={
$0(){var w,v,u=this.a
u.at=!0
w=this.b
u.ax=w
u.y=-1
v=u.qe$
if(w){++u.r
u.CW=v.a+3}else u.cx=v.a+1.6},
$S:0}
C.bTl.prototype={
$0(){var w=this.a
w.ay=!0
w.w=this.b},
$S:0}
C.bTm.prototype={
$0(){},
$S:0}
C.bTn.prototype={
$0(){var w,v,u,t,s=this.a
s.z=s.FN(++s.f)
w=A.a([],x.n)
v=0
for(;;){u=s.z
if(!(v<u.length))break
t=B.d.co(u,v)
u=s.z
w.push(450*(t+0.5)/u.length);++v}s.Q=w
s.y=-1
s.at=!1
s.as.a8(0)},
$S:0}
C.bTf.prototype={
$0(){return A.a6(this.a,!1).hY()},
$S:0}
C.bTg.prototype={
$2(d,e){var w=this.a
w=w.gkT()[w.f].e
return B.o.aQ(w[d],w[e])},
$S:66}
C.bTh.prototype={
$2(d,e){var w=null,v=C.hfr(new A.av(A.aS(1/0,e.a,e.b),A.aS(1/0,e.c,e.d))),u=this.a
return A.az(B.bZ,new A.e8(A.b5(w,w,w,new C.bkm(u,u.qe$),B.az),w),B.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.bTe(u,v),w,w,w,w,!1,B.a4)},
$S:37}
C.bTe.prototype={
$1(d){var w,v,u,t=d.b,s=this.b,r=s.c,q=(t.b-s.b)/r
if(q>380&&q<760){w=this.a
v=w.gj2().length
u=B.o.D(B.h.bh((t.a-s.a)/r/450*v),0,v-1)
w.d2m(w.gj2()[u])}},
$S:23}
C.bTi.prototype={
$1(d){var w=this.a
return w.gkT()[w.f].d[d]},
$S:77}
C.dsU.prototype={
$2(d,e){return 0},
$S:66}
C.bT_.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new C.bSZ())},
$S:0}
C.bSZ.prototype={
$0(){},
$S:0}
C.bSY.prototype={
$0(){},
$S:0}
C.bSS.prototype={
$0(){},
$S:0}
C.bST.prototype={
$0(){},
$S:0}
C.bSX.prototype={
$0(){var w=this.a
w.ax=this.c
w.r=D.Bq},
$S:0}
C.bSW.prototype={
$1(d){var w=null,v=this.a.gqA(),u=A.d(d,w,w,w,w,w,w,D.aWT,w,w,w),t=v.gbn8(0)
return A.az(B.bZ,A.x(A.a([u,B.bF,A.d(t+(v.d<v.c.length?"\u258d":""),w,w,w,w,w,w,D.aX6,w,w,w)],x.p),B.E,w,B.e,B.i,0,B.p),B.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,v.gbt4(v),w,w,w,w,w,w,!1,B.a4)},
$S:142}
C.bSU.prototype={
$0(){return this.a.Le(this.b)},
$S:0}
C.bSV.prototype={
$0(){var w=this.a.c
w.toString
return A.a6(w,!1).hY()},
$S:0}
C.bSR.prototype={
$0(){return A.a6(this.a,!1).hY()},
$S:0}
C.e3g.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.e3h.prototype={
$1(d){return this.a},
$S:39}
C.e3i.prototype={
$0(){var w=this.a
return w.d=w.gT7().bfy(this.b)},
$S:0}
C.e3e.prototype={
$1(d){return new C.Uf(this.a,null)},
$S:z+32}
C.e3f.prototype={
$1(d){return d.a===this.a.a},
$S:z+33}
C.e3d.prototype={
$1(d){var w=null,v=this.a.b
v=A.d('"'+(v.length===0?"Untitled":v)+'" will be removed for everyone in the family.',w,w,w,w,w,w,B.hs,w,w,w)
return A.em(A.a([A.bP(!1,E.aYu,w,w,!0,w,w,w,new C.e3b(d),w,w),A.bP(!1,D.h0Y,w,w,!0,w,w,w,new C.e3c(d),w,w)],x.p),w,w,D.fC,v,w,w,w,w,D.fOp,w)},
$S:18}
C.e3b.prototype={
$0(){A.a6(this.a,!1).N(!1)
return null},
$S:0}
C.e3c.prototype={
$0(){A.a6(this.a,!1).N(!0)
return null},
$S:0}
C.e3a.prototype={
$0(){var w=null,v=this.a.c.K(x.q).f,u=this.b
return v.T(A.b2(w,w,w,w,w,B.t,w,A.d(u==null?"Not ready yet.":u,w,w,w,w,w,w,w,w,w,w),w,B.Y,w,w,w,w,w,w,w,w,w,w))},
$S:0}
C.e3j.prototype={
$1(d){var w=this.a.f,v=w.h(0,d)
return(v==null?0:v)>0?"Best "+A.w(w.h(0,d)):"NEW"},
$S:13}
C.e3k.prototype={
$0(){var w=this.a,v=this.b,u=C.bF2(v,10,w.r,!1)
return w.uD(C.hoA(w.a.d,"kahoot",u,w.gb76(),v.b,"Family Kahoot",v.a))},
$S:0}
C.e3l.prototype={
$0(){var w=this.a
return w.uD(new C.amt(this.b,w.a.d,w.r,null))},
$S:0}
C.e3m.prototype={
$0(){var w=this.a
return w.uD(new C.akD(this.b,w.a.d,w.r,null))},
$S:0}
C.e3p.prototype={
$0(){var w=this.a
return w.uD(new C.avr(this.b,w.a.d,w.r,null))},
$S:0}
C.e3q.prototype={
$0(){var w=this.a
return w.uD(new C.azp(this.b,w.a.d,w.r,null))},
$S:0}
C.e3r.prototype={
$0(){var w=this.a
return w.uD(new C.amw(this.b,w.a.d,w.r,null))},
$S:0}
C.e3s.prototype={
$0(){var w=this.a
return w.uD(new C.amA(this.b,w.a.d,w.r,null))},
$S:0}
C.e3t.prototype={
$0(){var w=this.a
return w.uD(new C.amC(this.b,w.a.d,w.r,null))},
$S:0}
C.e3u.prototype={
$0(){var w,v=this.a,u=this.b,t=B.a.i(u.b)
if(t.length===0)t="Family game"
w=u.d2H()
return v.uD(C.hoA(v.a.d,"creator_"+u.a,w,v.gb76(),"A game by the family",t,this.c.a))},
$S:0}
C.e3v.prototype={
$0(){return this.a.P1(this.b)},
$S:0}
C.e3w.prototype={
$0(){return this.a.Y3(0,this.b)},
$S:0}
C.e3n.prototype={
$0(){return this.a.P1(null)},
$S:0}
C.e3o.prototype={
$0(){return this.a.K(x.q).f.T(D.frI)},
$S:0}
C.bTb.prototype={
$0(){var w=this.a
w.d=D.b1Y
w.z=3},
$S:0}
C.bTc.prototype={
$1(d){var w=this.a
if(w.z<=1){d.a1(0)
w.aQj()}else w.m(new C.bTa(w))},
$S:12}
C.bTa.prototype={
$0(){return this.a.z--},
$S:0}
C.bT1.prototype={
$0(){var w=this.a
w.d=D.adT
w.y=-1
w.as=w.a.w[w.e].r},
$S:0}
C.bT2.prototype={
$1(d){var w=this.a
if(w.c==null)return
w.m(new C.bT0(w))
if(w.as<=0){d.a1(0)
w.b72(-1)}},
$S:12}
C.bT0.prototype={
$0(){var w=this.a
return w.as=Math.max(0,w.as-0.1)},
$S:0}
C.bT7.prototype={
$0(){var w=this.b
w.y=this.c
w.Q=this.a.a
w.d=D.Xn},
$S:0}
C.bT8.prototype={
$0(){return this.a.e++},
$S:0}
C.bT4.prototype={
$0(){var w=this.a
w.d=D.b1Z
w.ay=this.b},
$S:0}
C.bT5.prototype={
$0(){var w=this.a
w.ch=this.b
w.CW=this.c},
$S:0}
C.bT9.prototype={
$2(d,e){return B.o.aQ(e.b,d.b)},
$S:1997}
C.bT6.prototype={
$0(){return this.a.Le(this.b)},
$S:0}
C.bT3.prototype={
$0(){var w=this.a.c
w.toString
return A.a6(w,!1).hY()},
$S:0}
C.bSC.prototype={
$0(){var w,v,u,t=this.a,s=t.a,r=$.ax()
s=A.a([new A.au(new A.bb(s,B.b7,B.aP),r)],x.cF)
for(t=t.b,w=t.length,v=0;v<t.length;t.length===w||(0,A.I)(t),++v){u=t[v]
s.push(new A.au(new A.bb(u,B.b7,B.aP),r))}return s},
$S:1998}
C.bSD.prototype={
$0(){return this.a.gDe().c.push(C.h9e(null,0,20,""))},
$S:0}
C.bSN.prototype={
$1(d){var w=null
return A.bA(w,new A.b6(4,A.l(12),B.a1),w,w,w,w,w,w,!0,w,w,w,w,w,w,B.dq,!0,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,!0,w,B.La,d,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w)},
$S:269}
C.bSM.prototype={
$1(d){var w,v,u,t,s,r,q,p=null,o=this.a,n=o.gDe().c,m=this.b,l=n[m],k=o.cg5(l),j=B.c.j(0.06),i=A.l(18),h=A.K(B.aT,B.r,1),g=x.p,f=A.a([A.d("Question "+(m+1),p,p,p,p,p,p,D.Lf,p,p,p),B.b4],g)
if(n.length>1)f.push(A.aI(p,p,p,p,B.asB,p,p,p,new C.bSH(o,m),p,p,p,p,p,p))
n=J.a8(k)
m=this.c
f=A.a([A.A(f,B.l,p,B.e,B.i,0,p,p),A.aN(p,B.Z,!1,p,!0,B.t,p,A.aO(),n.h(k,0),p,p,p,p,p,2,m.$1("The question"),B.y,!0,p,!0,p,!1,p,B.ak,p,p,p,p,p,p,p,p,p,1,p,p,!1,"\u2022",p,new C.bSI(l),p,p,p,!1,p,p,!1,p,!0,p,B.ac,p,p,p,p,p,p,p,p,p,p,p,B.dk,!0,B.a7,p,B.ao,p,p,p,p),B.P],g)
for(w=x.fo,v=0;v<4;v=s){u=D.aEA[v]
t=D.aEg[v]
s=v+1
f.push(new A.D(B.eP,new A.c8(B.aM,B.e,B.i,B.l,p,B.p,p,0,A.a([A.d(u,p,p,p,p,p,p,new A.H(!0,t,p,p,p,p,22,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p),p,p,p),B.ae,new A.bz(1,B.bd,A.aN(p,B.Z,!1,p,!0,B.t,p,A.aO(),n.h(k,s),p,p,p,p,p,2,m.$1("Answer "+s),B.y,!0,p,!0,p,!1,p,B.ak,p,p,p,p,p,p,p,p,p,1,p,p,!1,"\u2022",p,new C.bSJ(l,v),p,p,p,!1,p,p,!1,p,!0,p,B.ac,p,p,p,p,p,p,p,p,p,p,p,B.dk,!0,B.a7,p,B.ao,p,p,p,p),p),new At.Py(v,l.c,new C.bSK(o,l),p,!1,D.lH,p,p,p,p,p,!1,!1,p,I.b2n,p,p,p,p,p,w)],g),p),p))}f.push(D.fU0)
f.push(B.am)
n=A.a([D.fNu,B.ae],g)
for(r=0;r<3;++r){q=D.cgZ[r]
n.push(new A.D(B.f2,A.jD(p,p,p,A.d(""+q+"s",p,p,p,p,p,p,p,p,p,p),p,new C.bSL(o,l,q),l.d===q,p,p,p,p),p))}f.push(A.A(n,B.l,p,B.e,B.i,0,p,p))
return A.p(p,A.x(f,B.E,p,B.e,B.i,0,B.p),B.f,p,p,new A.o(j,p,h,i,p,p,B.n),p,p,p,B.kB,B.bl,p,p,p)},
$S:157}
C.bSH.prototype={
$0(){var w=this.a
return w.m(new C.bSG(w,this.b))},
$S:0}
C.bSG.prototype={
$0(){return B.d.cH(this.a.gDe().c,this.b)},
$S:0}
C.bSI.prototype={
$1(d){return this.a.a=d},
$S:2}
C.bSJ.prototype={
$1(d){this.a.b[this.b]=d
return d},
$S:2}
C.bSK.prototype={
$1(d){return this.a.m(new C.bSF(this.b,d))},
$S:156}
C.bSF.prototype={
$0(){var w=this.b
if(w==null)w=0
return this.a.c=w},
$S:0}
C.bSL.prototype={
$1(d){return this.a.m(new C.bSE(this.b,this.c))},
$S:9}
C.bSE.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.e4W.prototype={
$0(){var w=this.a
w.wz()
w.a.bv()
w.a.qt()},
$S:0}
C.e4V.prototype={
$0(){var w=this.a
w.wz()
w.a.bv()
w.a.qt()},
$S:0}
C.e4Y.prototype={
$0(){var w=this,v=w.b
if(J.cJ(v)||J.ct(w.a.d))w.a.d=v
w.a.e=!1},
$S:0}
C.e4Z.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.e5_.prototype={
$0(){return this.a.e=!1},
$S:0}
C.e4U.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.e4X.prototype={
$1(d){return d.a===this.a.a},
$S:z+3}
C.e51.prototype={
$0(){this.a.Pn()
return null},
$S:0}
C.e50.prototype={
$0(){return this.a.F6(this.b)},
$S:0}
C.e4m.prototype={
$1(d){var w=null,v=this.a,u=A.d(v?"Make private?":"Make public?",w,w,w,w,w,w,w,w,w,w),t=A.d(v?"Private trees are only visible to the owner and invited collaborators.":"Public trees appear in Family Trees for every NGMY user (view only for others).",w,w,w,w,w,w,w,w,w,w),s=A.bP(!1,B.ds,w,w,!0,w,w,w,new C.e4k(d),w,w),r=A.bp(B.bQ,w,w,w,w,w,w,w,w,w,w,w)
return A.em(A.a([s,A.bJ(A.d(v?"Make private":"Make public",w,w,w,w,w,w,w,w,w,w),w,new C.e4l(d),r)],x.p),w,w,w,t,w,w,w,w,u,w)},
$S:18}
C.e4k.prototype={
$0(){A.a6(this.a,!1).N(!1)
return null},
$S:0}
C.e4l.prototype={
$0(){A.a6(this.a,!1).N(!0)
return null},
$S:0}
C.e4n.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
return w.d=v.cP8(this.b)},
$S:0}
C.e4h.prototype={
$1(d){var w=this,v=w.a
if(v.c!=null)v.aVV(w.b,w.c,w.d)},
$S:8}
C.e3J.prototype={
$1(d){return d.a===this.a.a.w.a},
$S:z+3}
C.e3K.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.e40.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
r=A
q=J
w=2
return A.b(C.Hq(t.a.c),$async$$0)
case 2:s=r.nF(q.dI(e,new C.e3Z(t)))
if(s!=null&&t.c!=null)t.m(new C.e4_(t,s))
t.a.bv()
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.e3Z.prototype={
$1(d){var w=this.a.d
w===$&&A.c()
return d.a===w.a},
$S:z+3}
C.e4_.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.e41.prototype={
$1(d){var w=this.a.d
w===$&&A.c()
return d.a===w.a},
$S:z+3}
C.e42.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.e4g.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&A.c()
w=this.b
v.d=u.cPV(C.hEJ(w),w)},
$S:0}
C.e3Y.prototype={
$1(d){var w,v=this.a,u=v.d
u===$&&A.c()
w=v.a.c
return new C.WA(u,w,C.aRF(u,w),new C.e3X(v),null)},
$S:z+37}
C.e3X.prototype={
$1(d){return this.boy(d)},
boy(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.a
if(s.c==null){w=1
break}s.m(new C.e3W(s,d))
w=3
return A.b(s.uz(),$async$$1)
case 3:case 1:return A.h(u,v)}})
return A.i($async$$1,v)},
$S:729}
C.e3W.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
return w.d=v.bfy(this.b)},
$S:0}
C.e4d.prototype={
$1(d){return d.as},
$S:z+1}
C.e4e.prototype={
$1(d){var w=this
return new A.e3(new C.e4c(w.a,w.b,w.c,w.d,w.e),null)},
$S:20}
C.e4c.prototype={
$2(a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.c.a,i=j?B.ef:B.c,h=A.l(26),g=A.K(B.bQ.j(0.5),B.r,1.5),f=A.p(k,D.bWF,B.f,k,k,new A.o(B.bQ.j(0.18),k,k,k,k,k,B.a6),k,42,k,k,k,k,k,42),e=A.d("Tree display settings",k,k,k,k,k,k,A.m(k,k,j?B.aS:B.av,k,k,k,k,k,k,k,k,18,k,k,B.u,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),d=l.b,a0=d.d
a0===$&&A.c()
w=x.p
a0=A.E(A.x(A.a([e,A.d(a0.b,k,1,B.a2,k,k,k,A.m(k,k,j?B.bu:B.bj,k,k,k,k,k,k,k,k,12.5,k,k,B.O,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)],w),B.E,k,B.e,B.i,0,B.p),1)
f=A.A(A.a([f,B.bc,a0,A.aI(k,k,k,k,A.X(B.cB,j?B.bu:B.bj,k,k,k,k),k,k,k,new C.e46(a1),k,k,k,k,k,k)],w),B.l,k,B.e,B.i,0,k,k)
e=A.d("CHILDREN SHOWN UNDER EACH PARENT",k,k,k,k,k,k,A.m(k,k,j?B.bu:B.bj,k,k,k,k,k,k,k,k,11,k,k,B.u,k,k,!0,k,1,k,k,k,k,k,k),k,k,k)
a0=A.a([],w)
for(v=l.d,u=v.length,t=l.a,s=0;s<v.length;v.length===u||(0,A.I)(v),++s){r=v[s]
q=t.a===r?B.bQ:B.bQ.j(0.1)
p=new A.aP(20,20)
o=t.a===r
n=new A.ay(B.bQ,o?2:1,B.r,-1)
m=r===0?"Show all":""+r
o=o?B.c:B.bQ
a0.push(A.az(k,A.cU(k,A.d(m,k,k,k,k,k,k,new A.H(!0,o,k,k,k,k,14,B.u,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k),k,k,k),k,k,B.b0,new A.o(q,k,new A.bH(n,n,n,n),new A.bf(p,p,p,p),k,k,B.n),B.ha,k,k,k,k,B.CI,k,k,k),B.y,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,new C.e47(t,a2,r),k,k,k,k,k,k,!1,B.a4))}a0=A.c_(B.bI,a0,B.br,k,8,8)
v=t.a
v=v===0?"Every child shows in the tree.":"Only "+v+' children show under a parent. The rest wait in a "+ more" dropdown.'
f=A.a([D.c7R,new A.D(D.bGO,f,k),new A.D(D.bGF,e,k),new A.D(B.t9,a0,k),new A.D(X.anU,A.d(v,k,k,k,k,k,k,A.m(k,k,j?B.bu:B.bj,k,k,k,k,k,k,k,k,12.5,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),k,k,k),k)],w)
e=l.e
if(e>0){a0=A.X(Aj.aqw,j?B.bu:B.bj,k,k,k,20)
v=e===1?"person":"people"
f.push(new A.D(D.bGH,A.A(A.a([a0,B.as,A.E(A.d(""+e+" hidden "+v,k,k,k,k,k,k,A.m(k,k,j?B.aS:B.av,k,k,k,k,k,k,k,k,k,k,k,B.H,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),1),A.b9Q(k,B.bQ,k,k,!1,B.y,k,k,k,k,k,k,new C.e48(d,a2),k,k,k,k,k,k,k,k,d.f)],w),B.l,k,B.e,B.i,0,k,k),k))}f.push(B.aB)
j=A.l(20)
e=A.a([new A.ab(0,B.G,B.aD.j(0.35),B.i3,12)],x.V)
f.push(A.az(k,A.p(k,A.A(A.a([D.fNP,B.bc,D.bL6,D.bXk],w),B.l,k,B.e,B.i,0,k,k),B.f,k,k,new A.o(k,k,k,j,e,D.cbD,B.n),k,k,k,B.hZ,B.bH,k,k,k),B.y,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,new C.e49(t,a1),k,k,k,k,k,k,!1,B.a4))
f.push(new A.D(B.wG,A.A(A.a([A.E(A.dW(B.ds,new C.e4a(a1),k),1),B.as,A.E(A.bJ(M.aYV,k,new C.e4b(t,a1),A.bp(B.bQ,k,k,k,k,k,B.co,k,k,k,k,k)),1)],w),B.l,k,B.e,B.i,0,k,k),k))
return A.bn(!0,A.p(k,A.ca(A.x(f,B.E,k,B.e,B.N,0,B.p),B.t,k,B.y,k,k,k,k,k,B.ah),B.aq,k,k,new A.o(i,k,g,h,k,k,B.n),k,k,k,B.yV,k,k,k,k),!0,!1,B.ag,!0,!0)},
$S:86}
C.e46.prototype={
$0(){A.a6(this.a,!1).N(null)
return null},
$S:0}
C.e47.prototype={
$0(){return this.b.$1(new C.e45(this.a,this.c))},
$S:0}
C.e45.prototype={
$0(){return this.a.a=this.b},
$S:0}
C.e48.prototype={
$1(d){var w=this.a
w.m(new C.e43(w,d))
this.b.$1(new C.e44())},
$S:9}
C.e43.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.e44.prototype={
$0(){},
$S:0}
C.e49.prototype={
$0(){var w=this.a.a
A.a6(this.b,!1).N(new A.aIj(!0,w))
return null},
$S:0}
C.e4a.prototype={
$0(){A.a6(this.a,!1).N(null)
return null},
$S:0}
C.e4b.prototype={
$0(){var w=this.a.a
A.a6(this.b,!1).N(new A.aIj(!1,w))
return null},
$S:0}
C.e4f.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
w.d=v.cPJ(this.b.b)
w.r.a8(0)},
$S:0}
C.e3x.prototype={
$1(d){var w,v,u,t=this.a,s=t.d
s===$&&A.c()
s=C.ajn(s)
w=t.d
t=t.a
v=t.c
u=t.d
return C.hxQ(t.e,this.b,null,t.f,t.r,null,s,"Add Member",w,u,v)},
$S:z+18}
C.e3y.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&A.c()
w=A.C(u.f,x.P)
w.push(this.b)
v.d=u.aGk(w)},
$S:0}
C.e4p.prototype={
$1(d){var w=this.a.d
w===$&&A.c()
return new C.aeJ(this.b,w,this.c,null)},
$S:z+39}
C.e4j.prototype={
$1(d){var w=null,v=this.a.a,u=v?B.ef:B.c,t=A.l(20),s=A.X(B.l_,B.aV,w,w,w,36),r=A.d("Almost there",w,w,w,w,w,w,A.m(w,w,v?B.aS:B.av,w,w,w,w,w,w,w,w,w,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),B.K,w,w),q=this.b,p=q?"To remove a shared family tree from this phone, first create your own family tree in NGMY.":"To remove a shared family tree, you also need an active Family Tree photo pass.",o=x.p
p=A.a([A.d(p,w,w,w,w,w,w,A.m(w,w,v?B.bu:B.bj,w,w,w,w,w,w,w,w,14,w,w,w,w,1.45,!0,w,w,w,w,w,w,w,w),B.K,w,w)],o)
if(this.c&&!q)B.d.u(p,A.a([B.af,A.d("Photo access lets you upload member photos on trees you create. You can get it from any member profile when adding a photo.",w,w,w,w,w,w,A.m(w,w,v?B.bu:B.bj,w,w,w,w,w,w,w,w,12,w,w,w,w,1.4,!0,w,w,w,w,w,w,w,w),B.K,w,w)],o))
v=A.x(p,B.l,w,B.e,B.N,0,B.p)
return A.em(A.a([A.bJ(D.h4L,w,new C.e4i(d),A.bp(B.aV,w,w,w,w,w,w,w,w,w,w,w))],o),B.b9,w,u,v,w,s,w,new A.ba(t,B.a1),r,w)},
$S:18}
C.e4i.prototype={
$0(){A.a6(this.a,!1).N(null)
return null},
$S:0}
C.e3z.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
C.e3A.prototype={
$1(d){return d.e===this.a.a},
$S:z+1}
C.e3B.prototype={
$1(d){return d.a},
$S:z+8}
C.e3C.prototype={
$0(){var w,v,u,t,s,r,q,p,o,n,m=this,l=m.a,k=l.d
k===$&&A.c()
w=A.a([],x.u)
for(v=m.b,u=v.length,t=m.c.a,s=m.d,r=0;r<v.length;v.length===u||(0,A.I)(v),++r){q=v[r]
p=q.a
if(p!==t){o=q.d
if(o===t)o=s
n=q.e
if(n===t)n=null
w.push(new C.i4(p,q.b,q.c,o,n,q.f,q.r,q.w,q.x,q.y,q.z,q.Q,q.as,q.at))}}l.d=k.aGk(w)},
$S:0}
C.e3G.prototype={
$1(d){var w,v,u,t,s=this.a,r=this.b,q=s.d
q===$&&A.c()
q=C.ajn(q)
w=A.U(q).k("Y<1>")
q=A.C(new A.Y(q,new C.e3E(r),w),w.k("M.E"))
w=s.d
v=s.a
u=v.c
t=v.d
return C.hxQ(v.e,null,r,v.f,v.r,new C.e3F(s,r),q,"Member Profile",w,t,u)},
$S:z+18}
C.e3F.prototype={
$0(){return this.a.abo(this.b)},
$S:0}
C.e3E.prototype={
$1(d){return d.a!==this.a.a},
$S:z+1}
C.e3H.prototype={
$0(){var w,v,u=this.a,t=u.d
t===$&&A.c()
w=t.f
v=A.U(w).k("N<1,i4>")
w=A.C(new A.N(w,new C.e3D(this.b),v),v.k("ak.E"))
u.d=t.aGk(w)},
$S:0}
C.e3D.prototype={
$1(d){var w=this.a
return d.a===w.a?w:d},
$S:z+41}
C.e4o.prototype={
$0(){var w=this.a
return w.d=w.e.pop()},
$S:0}
C.e3T.prototype={
$1(d){return d.length!==0},
$S:3}
C.e3U.prototype={
$1(d){var w=this
return new A.e3(new C.e3S(w.a,w.b,w.c,w.d),null)},
$S:20}
C.e3S.prototype={
$2(d,e){var w=this,v=null,u=w.b,t=u.a,s=t?B.ef:B.c,r=A.d("Collaborators",v,v,v,v,v,v,A.m(v,v,t?B.aS:B.av,v,v,v,v,v,v,v,v,v,v,v,B.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),q=x.p,p=A.a([A.d("Invited users can edit this tree and add members. QR/file recipients stay view-only.",v,v,v,v,v,v,A.m(v,v,t?B.bu:B.bj,v,v,v,v,v,v,v,v,12,v,v,v,v,1.35,!0,v,v,v,v,v,v,v,v),v,v,v),B.af],q),o=w.c
if(o.length===0)p.push(A.d("No collaborators yet.",v,v,v,v,v,v,A.m(v,v,t?B.bu:B.bj,v,v,v,v,v,v,v,v,13,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v))
else B.d.u(p,new A.N(o,new C.e3O(u,e,o),A.U(o).k("N<1,v>")))
p.push(B.P)
u=w.d
p.push(A.aN(v,B.Z,!1,v,!0,B.t,v,A.aO(),u,v,v,v,v,v,2,A.bA(v,new A.b6(4,A.l(12),B.du),v,v,v,v,v,v,!0,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,"friend@email.com",v,v,v,v,v,v,v,v,"Invite by email",!0,!0,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v),B.y,!0,v,!0,v,!1,v,B.ak,v,v,v,v,v,B.mC,v,v,v,1,v,v,!1,"\u2022",v,v,v,v,v,!1,v,v,!1,v,!0,v,B.ac,v,v,v,v,v,v,v,v,v,v,v,v,!0,B.a7,v,B.ao,v,v,v,v))
p=A.x(p,B.al,v,B.e,B.N,0,B.p)
t=w.a
return A.em(A.a([A.bP(!1,B.ds,v,v,!0,v,v,v,new C.e3P(d),v,v),A.bJ(B.Lr,v,new C.e3Q(t,u,o,e),A.bp(B.bQ,v,v,v,v,v,v,v,v,v,v,v)),A.bJ(D.fSm,v,new C.e3R(t,u,o,d),A.bp(B.aV,v,v,v,v,v,v,v,v,v,v,v))],q),v,v,s,new A.a5(360,v,p,v),v,v,v,v,r,v)},
$S:211}
C.e3O.prototype={
$1(d){var w=null
return A.dJ(!1,B.ag,w,w,!0,w,w,w,!0,w,w,w,w,w,w,w,w,!1,w,w,w,w,w,w,w,A.d(d,w,w,w,w,w,w,A.m(w,w,this.a.a?B.aS:B.av,w,w,w,w,w,w,w,w,w,w,w,B.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w,A.aI(w,w,w,w,D.c4G,w,w,w,new C.e3N(this.b,this.c,d),w,w,w,w,w,w),w)},
$S:1999}
C.e3N.prototype={
$0(){return this.a.$1(new C.e3L(this.b,this.c))},
$S:0}
C.e3L.prototype={
$0(){return B.d.W(this.a,this.b)},
$S:0}
C.e3P.prototype={
$0(){A.a6(this.a,!1).N(!1)
return null},
$S:0}
C.e3Q.prototype={
$0(){var w=this,v=w.b,u=B.a.i(v.a.a.toLowerCase())
if(u.length!==0&&!B.d.q(w.c,u)&&u!==B.a.i(w.a.a.c.toLowerCase())){w.d.$1(new C.e3M(w.c,u))
v.bP(0,B.cg)}},
$S:0}
C.e3M.prototype={
$0(){return this.a.push(this.b)},
$S:0}
C.e3R.prototype={
$0(){var w=this,v=B.a.i(w.b.a.a.toLowerCase())
if(v.length!==0&&!B.d.q(w.c,v)&&v!==B.a.i(w.a.a.c.toLowerCase()))w.c.push(v)
A.a6(w.d,!1).N(!0)},
$S:0}
C.e3V.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
w.d=v.cQn(this.b,D.uS,C.Ho(v,w.a.c))},
$S:0}
C.e4w.prototype={
$1(d){return d.as},
$S:z+1}
C.e4x.prototype={
$0(){var w=this.a.d
w===$&&A.c()
return A.j9(this.b,w)},
$S:0}
C.e4y.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
v=C.iuH(v)
return w.WR(v==null?null:v.a)},
$S:0}
C.e4z.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m=null,l=this.a,k=l.d
k===$&&A.c()
w=l.r
v=C.i6s(k,w,l.f)
u=v.d+32
t=v.e+32
k=v.a
if(k.gcm(k)){k=A.aS(1/0,e.a,e.b)
s=A.aS(1/0,e.c,e.d)
l.cxx(new A.av(u,t),v.gbme(),new A.av(k,s))}k=A.l(22)
s=this.b.a
r=s?D.d53:D.d38
q=A.K(s?B.dq:D.blN,B.r,1)
p=A.l(22)
o=A.bS(0,A.b5(m,m,m,new C.bgt(s,m),B.az),0,0,0)
n=Math.max(e.b,e.d)
return A.p(m,A.bv(p,new A.an(B.a0,m,B.ad,B.t,A.a([o,A.bS(0,A.v4(new A.Q(n,n,n,n),new A.a5(u,t,new C.bho(l.d,v,l.f,w,new C.e4s(l),l.gchh(),m),m),!1,3,0.2,!0,!0,l.w),0,0,0),A.ao(10,new C.bzi(s,new C.e4t(l,e),new C.e4u(l,e),new C.e4v(l,e,u,t,v),m),m,m,m,10,m,m)],x.p),m),B.aq),B.f,m,m,new A.o(m,m,q,k,m,new A.a7(B.aY,B.b3,B.x,r,m,m),B.n),m,m,m,Z.amZ,m,m,m,m)},
$S:168}
C.e4s.prototype={
$1(d){var w=this.a
w.m(new C.e4q(w,d))},
$S:2}
C.e4q.prototype={
$0(){var w=this.a.r,v=this.b
if(w.q(0,v))w.W(0,v)
else w.I(0,v)},
$S:0}
C.e4t.prototype={
$0(){var w=this.b
return this.a.bdI(1.25,new A.av(A.aS(1/0,w.a,w.b),A.aS(1/0,w.c,w.d)))},
$S:0}
C.e4u.prototype={
$0(){var w=this.b
return this.a.bdI(0.8,new A.av(A.aS(1/0,w.a,w.b),A.aS(1/0,w.c,w.d)))},
$S:0}
C.e4v.prototype={
$0(){var w=this,v=w.b
return w.a.aVV(new A.av(A.aS(1/0,v.a,v.b),A.aS(1/0,v.c,v.d)),new A.av(w.c,w.d),w.e.gbme())},
$S:0}
C.e4A.prototype={
$0(){var w=this.a
return w.m(new C.e4r(w))},
$S:0}
C.e4r.prototype={
$0(){var w=this.a
return w.f=!w.f},
$S:0}
C.e3I.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.d
s===$&&A.c()
w=2
return A.b(A.fI(new A.fx(s.c)),$async$$0)
case 2:t.yB("Tree code copied.")
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dim.prototype={
$1(d){var w=null,v=d.b,u=v.a,t=v.b
v=this.a
return A.ao(w,new C.bld(u,C.hJo(v.c,u),new C.dil(v,u),w),w,w,t.a-42,w,t.b,w)},
$S:z+42}
C.dil.prototype={
$0(){return this.a.w.$1(this.b)},
$S:0}
C.din.prototype={
$1(d){var w=null,v=d.b,u=this.a
return A.ao(w,new C.boz(d.d,d.c,u.f.q(0,d.a),new C.dik(u,d),u.w,w),w,w,v.a-42,w,v.b,w)},
$S:z+43}
C.dik.prototype={
$0(){return this.a.r.$1(this.b.a)},
$S:0}
C.fJu.prototype={
$1(d){var w,v=d.e
if(this.a.am(0,v))return v
v=this.b
w=A.U(v)
return A.nF(new A.cM(new A.Y(v,new C.fJv(d),w.k("Y<1>")),new C.fJw(),w.k("cM<1,n>")))},
$S:z+19}
C.fJv.prototype={
$1(d){return d.e===this.a.a},
$S:z+1}
C.fJw.prototype={
$1(d){return d.a},
$S:z+8}
C.fJs.prototype={
$1(d){return d.d===this.a.a&&d.a!==this.b},
$S:z+1}
C.fJt.prototype={
$1(d){return d.b},
$S:z+8}
C.fJz.prototype={
$1(d){var w,v=d.e
if(this.a.am(0,v))return v
v=this.b
w=A.U(v)
return A.nF(new A.cM(new A.Y(v,new C.fJA(d),w.k("Y<1>")),new C.fJB(),w.k("cM<1,n>")))},
$S:z+19}
C.fJA.prototype={
$1(d){return d.e===this.a.a},
$S:z+1}
C.fJB.prototype={
$1(d){return d.a},
$S:z+8}
C.fJx.prototype={
$1(d){var w,v=A.ew([d.a],x.N),u=this.a,t=d,s=0
for(;;){w=t.d
if(!(w!=null&&u.am(0,w)&&v.I(0,w)))break
w=u.h(0,w)
w.toString;++s
t=w}return s},
$S:z+45}
C.fJy.prototype={
$1(d){return this.a.h(0,d.a)===this.b},
$S:z+1}
C.dip.prototype={
$0(){return this.a},
$S:z+46}
C.diG.prototype={
$1(d){return d!=null&&d.length!==0&&this.a.am(0,d)},
$S:268}
C.diy.prototype={
$2(d,e){var w=this.a.c1(0,d,new C.diz()),v=J.a8(w)
if(!v.q(w,e))v.I(w,e)},
$S:123}
C.diz.prototype={
$0(){return A.a([],x.s)},
$S:609}
C.dix.prototype={
$2(d,e){var w=this.a.h(0,d)
w=w==null?null:J.eC(w,e)
return w===!0},
$S:339}
C.diq.prototype={
$0(){return A.a([],x.u)},
$S:z+16}
C.diw.prototype={
$1(d){var w=d.d
return this.a.$1(w)&&w!==d.a},
$S:z+1}
C.div.prototype={
$2(d,e){var w,v,u,t,s=this
if(!e.I(0,d))return 0
w=s.a
v=w.h(0,d)
v=J.aT(v==null?D.E0:v)
u=1
while(v.C())u+=s.$2(v.gP(v).a,e)
v=s.b.h(0,d)
v=J.aT(v==null?B.Z:v)
while(v.C()){t=v.gP(v)
if(e.q(0,t))continue
e.I(0,t)
t=w.h(0,t)
t=J.aT(t==null?D.E0:t)
while(t.C())u+=s.$2(t.gP(t).a,e)}return u},
$S:2001}
C.dir.prototype={
$1(d){return!this.a.$1(d)},
$S:z+1}
C.diA.prototype={
$2(a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=this,a8=a7.a
a8.I(0,a9)
w=a7.b
w.n(0,a9,b0)
v=a7.c.h(0,a9)
v.toString
u=a7.d.h(0,a9)
u=J.aT(u==null?B.Z:u)
t=v.d
for(;;){if(!u.C()){s=null
break}A:{s=u.gP(u)
if(a8.q(0,s)||t===s)break A
break}}u=s!=null
if(u){a8.I(0,s)
w.n(0,s,b0)
a7.e.n(0,a9,s)}w=A.a([],x.u)
t=a7.f
r=t.h(0,a9)
if(r!=null)B.d.u(w,r)
if(u){t=t.h(0,s)
t=J.aT(t==null?D.E0:t)
while(t.C()){r=t.gP(t)
if(r.a!==a9&&!B.d.aU(w,new C.diB(r)))w.push(r)}}B.d.bq(w,new C.diC(a8))
B.d.b_(w,new C.diD())
q=C.i6r(a7.r,v,w,a7.w)
p=u?95:42
o=A.a([],x.d4)
n=A.a([],x.eU)
for(w=q.c,v=w.length,u=b0+1,m=0;m<w.length;w.length===v||(0,A.I)(w),++m){t=w[m].a
if(a8.q(0,t))continue
o.push(t)
n.push(a7.$2(t,u))}if(q.a){o.push(null)
n.push(A.a([D.f0d],x.G))}a8=A.a([],x.s)
for(w=o.length,m=0;m<o.length;o.length===w||(0,A.I)(o),++m){l=o[m]
if(l!=null)a8.push(l)}a7.x.n(0,a9,a8)
if(o.length===0)return A.a([new A.y(-p,p)],x.G)
a8=x.n
k=A.a([],a8)
j=A.a([],a8)
for(a8=n.length,m=0;m<n.length;n.length===a8||(0,A.I)(n),++m){i=n[m]
if(k.length!==0){h=Math.min(j.length,i.length)
for(g=-1/0,f=0;f<h;++f){e=f===0?22:44
g=Math.max(g,j[f]+e-i[f].a)}}else g=0
k.push(g)
for(f=0;f<i.length;++f){d=g+i[f].b
if(f<j.length)j[f]=Math.max(j[f],d)
else j.push(d)}}a0=(B.d.gH(k)+B.d.gal(k))/2
a1=A.a([new A.y(-p,p)],x.G)
for(a8=a7.z,w=q.b,v=a7.y,a2=0;a2<n.length;++a2){a3=k[a2]-a0
a4=o[a2]
if(a4!=null)v.n(0,a4,a3)
else a8.n(0,a9,new A.brG(a3,w))
i=n[a2]
for(f=0;f<i.length;){u=i[f]
a5=a3+u.a
a6=a3+u.b;++f
if(f<a1.length){u=a1[f]
a1[f]=new A.y(Math.min(u.a,a5),Math.max(u.b,a6))}else a1.push(new A.y(a5,a6))}}return a1},
$S:2002}
C.diB.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
C.diC.prototype={
$1(d){return this.a.q(0,d.a)},
$S:z+1}
C.diD.prototype={
$2(d,e){return B.o.aQ(d.Q,e.Q)},
$S:z+7}
C.diE.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o=this,n=o.a.$2(d,e),m=o.b
if(m.length!==0){for(w=J.a8(n),v=o.c,u=-1/0,t=0;t<w.gJ(n);++t){s=v.h(0,e+t)
if(s==null)continue
u=Math.max(u,s+88-w.h(n,t).a)}if(u===-1/0)u=new A.b8(v,A.a3(v).k("b8<2>")).cB(0,0,B.qb)+88-w.gH(n).a}else u=0
for(w=J.a8(n),v=o.c,t=0;t<w.gJ(n);++t){r=w.h(n,t)
q=e+t
p=v.h(0,q)
if(p==null)p=-1/0
v.n(0,q,Math.max(p,u+r.b))}m.push(d)
o.d.n(0,d,u)},
$S:566}
C.diF.prototype={
$1(d){return 16+d*156},
$S:176}
C.dio.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o=this,n=o.a.h(0,d)
if(n==null)n=0
w=o.b
v=w.$1(n)
o.c.n(0,d,e)
u=o.d.h(0,d)
t=o.e
s=o.f
if(u!=null){r=s.h(0,d)
r.toString
t.n(0,d,new C.GH(r,new A.r(e-53,v)))
s=s.h(0,u)
s.toString
t.n(0,u,new C.GH(s,new A.r(e+53,v)))}else{s=s.h(0,d)
s.toString
t.n(0,d,new C.GH(s,new A.r(e,v)))}t=o.r.h(0,d)
t=J.aT(t==null?B.Z:t)
s=o.w
while(t.C()){r=t.gP(t)
q=s.h(0,r)
o.$2(r,e+(q==null?0:q))}p=o.x.h(0,d)
if(p!=null){t=p.a
w=w.$1(n+1)
s=p.b
o.y.push(new C.L0(d,new A.r(e+t,w),s,s.length))}},
$S:194}
C.dis.prototype={
$2(d,e){var w=this.b,v=w.h(0,d).b
w=w.h(0,e).b
this.a.push(new C.aLr(new A.r(v.a,v.b+28),new A.r(w.a,w.b+28),!0,null))},
$S:123}
C.dit.prototype={
$1(d){return d.a===this.a},
$S:z+47}
C.diu.prototype={
$2(d,e){return B.h.aQ(d.a,e.a)},
$S:515}
C.diH.prototype={
$2(d,e){return B.h.aQ(d.a,e.a)},
$S:515}
C.diI.prototype={
$1(d){return Math.abs(d.a-this.a.a)<0.5},
$S:463}
C.diJ.prototype={
$1(d){return Math.abs(d.a-this.a.a)},
$S:203}
C.diK.prototype={
$1(d){return d>=0.5},
$S:117}
C.foL.prototype={
$3(d,e,f){var w=null,v=A.l(10)
return A.he(A.aM(!1,v,!0,new A.a5(38,38,A.X(d,this.a.c?B.c:B.ct,w,w,w,20),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),w,e,w,w)},
$S:2004}
C.eZM.prototype={
$1(d){var w=null,v=A.l(8),u=B.bQ.j(0.12),t=A.l(8)
return new A.D(B.nE,A.aM(!1,v,!0,A.p(w,A.d("#"+d.Q+" "+d.b,w,4,w,w,w,w,D.fDl,B.K,w,w),B.f,w,w,new A.o(u,w,w,t,w,w,B.n),w,w,w,w,B.OR,w,w,1/0),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.eZL(this.a,d),w,w,w,w,w,w,w),w)},
$S:z+48}
C.eZL.prototype={
$0(){return this.a.r.$1(this.b)},
$S:0}
C.dyE.prototype={
$0(){return this.a.as=this.b},
$S:0}
C.dyD.prototype={
$1(d){var w=null,v=A.l(18),u=this.a
u=A.d("Delete "+(u.length===0?"this member":u)+"?",w,w,w,w,w,w,B.o5,B.K,w,w)
return A.em(A.a([A.bP(!1,B.ds,w,w,!0,w,w,w,new C.dyB(d),w,w),A.bP(!1,A.d("Delete",w,w,w,w,w,w,A.m(w,w,B.mU,w,w,w,w,w,w,w,w,w,w,w,B.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w,w,!0,w,w,w,new C.dyC(d),w,w)],x.p),B.b9,B.CD,w,u,D.bHJ,w,D.bJG,new A.ba(v,B.a1),w,w)},
$S:18}
C.dyB.prototype={
$0(){A.a6(this.a,!1).N(!1)
return null},
$S:0}
C.dyC.prototype={
$0(){A.a6(this.a,!1).N(!0)
return null},
$S:0}
C.dyN.prototype={
$1(d){var w=this.a.a.d
w=w==null?null:w.a
return d.a!==w},
$S:z+1}
C.dyO.prototype={
$1(d){var w=this.a
return w.m(new C.dyM(w,d))},
$S:z+49}
C.dyM.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.dyP.prototype={
$1(d){var w=null
return A.qP(A.d(d.b,w,w,w,w,w,w,w,w,w,w),d.a,x.T)},
$S:z+20}
C.dyS.prototype={
$1(d){var w=this.a
return w.m(new C.dyL(w,d))},
$S:35}
C.dyL.prototype={
$0(){return this.a.z=this.b},
$S:0}
C.dyR.prototype={
$1(d){var w=null
return A.qP(A.d(d.b,w,w,w,w,w,w,w,w,w,w),d.a,x.T)},
$S:z+20}
C.dyT.prototype={
$1(d){var w=this.a
return w.m(new C.dyK(w,d))},
$S:35}
C.dyK.prototype={
$0(){return this.a.Q=this.b},
$S:0}
C.dyU.prototype={
$0(){var w=this.a
return w.m(new C.dyJ(w))},
$S:0}
C.dyJ.prototype={
$0(){var w=this.a
return w.at=Math.max(1,w.at-1)},
$S:0}
C.dyV.prototype={
$0(){var w=this.a
return w.m(new C.dyI(w))},
$S:0}
C.dyI.prototype={
$0(){return++this.a.at},
$S:0}
C.dyW.prototype={
$0(){var w=this.a
return w.m(new C.dyH(w))},
$S:0}
C.dyH.prototype={
$0(){return--this.a.ax},
$S:0}
C.dyX.prototype={
$0(){var w=this.a
return w.m(new C.dyG(w))},
$S:0}
C.dyG.prototype={
$0(){return++this.a.ax},
$S:0}
C.dyY.prototype={
$1(d){var w=this.a
return w.m(new C.dyF(w,d))},
$S:9}
C.dyF.prototype={
$0(){return this.a.ay=this.b},
$S:0}
C.dyQ.prototype={
$0(){A.a6(this.a,!1).N(null)
return null},
$S:0}
C.dyZ.prototype={
$3(d,e,f){var w,v,u,t,s,r=null,q=this.a,p=q.d===d,o=A.l(12)
if(p)w=B.bQ.j(0.18)
else w=q.c.a?B.ef:B.c
v=A.l(12)
if(p)u=B.bQ
else u=(q.c.a?B.eh:B.bO).j(0.85)
u=A.K(u,B.r,p?1.5:1)
if(p)t=B.bQ
else t=q.c.a?B.bu:B.bj
t=A.X(f,t,r,r,r,18)
if(p)s=B.bQ
else s=q.c.a?B.bu:B.bj
return A.E(A.aG(!1,B.a3,!0,r,A.aM(!1,o,!0,A.cU(r,A.x(A.a([t,B.ax,A.d(e,r,r,r,r,r,r,A.m(r,r,s,r,r,r,r,r,r,r,r,11,r,r,B.H,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),B.l,r,B.e,B.i,0,B.p),r,r,B.b0,new A.o(w,r,u,v,r,r,B.n),B.eH,r,r,r,r,B.k6,r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,new C.dz_(q,d),r,r,r,r,r,r,r),B.f,B.L,0,r,r,r,r,r,B.ai),1)},
$S:z+51}
C.dz_.prototype={
$0(){return this.a.e.$1(this.b)},
$S:0}
C.dz8.prototype={
$0(){A.a6(this.a,!1).N(null)
return null},
$S:0}
C.cg7.prototype={
$2(d,e){return new A.bB(B.a.i(J.k(d).toLowerCase()),J.k(e),x.fK)},
$S:97}
C.cge.prototype={
$1(d){return d.aj()},
$S:z+5}
C.cgf.prototype={
$2(d,e){var w=J.b9(e,new C.cgd(),x.a)
w=A.C(w,w.$ti.k("ak.E"))
return new A.bB(d,w,x.d2)},
$S:z+53}
C.cgd.prototype={
$1(d){return d.aj()},
$S:z+12}
C.cg9.prototype={
$1(d){return C.amF(A.a1(d,x.N,x.z))},
$S:z+9}
C.cga.prototype={
$1(d){return d.a.length!==0},
$S:z+3}
C.cgb.prototype={
$1(d){return C.hoz(A.a1(d,x.N,x.z))},
$S:z+11}
C.cgc.prototype={
$1(d){return d.a.length!==0},
$S:z+4}
C.cgj.prototype={
$1(d){return new A.aIv(d.f.length,d.a,d.b)},
$S:z+55}
C.cgk.prototype={
$2(d,e){return B.a.aQ(d.c,e.c)},
$S:521}
C.cgg.prototype={
$1(d){return d.a===B.a.i(this.a)},
$S:z+3}
C.cgh.prototype={
$1(d){return d.cPl(C.Ho(d,this.a))},
$S:z+85}
C.e4J.prototype={
$1(d){return C.uB(d,this.a.a.c)},
$S:z+3}
C.e4K.prototype={
$0(){var w=this.a
w.d=this.b
w.e=this.c},
$S:0}
C.e4O.prototype={
$0(){var w=this.a
w.r=!0
w.f=this.b},
$S:0}
C.e4P.prototype={
$0(){var w=this.a
w.r=!1
w.f=null},
$S:0}
C.e4G.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
r=s.a
q=r.c
w=3
return A.b(C.b20(r.d,q,r.e,r.f),$async$$0)
case 3:p=e
if(s.c==null){w=1
break}if(p==null){s.z9("No family trees to export yet.")
w=1
break}r=s.a
w=4
return A.b(A.pE(r.c,r.e),$async$$0)
case 4:s.z9(p)
w=5
return A.b(s.Ki(),$async$$0)
case 5:case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.e4H.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
r=s.a
q=r.c
w=3
return A.b(C.b20(r.d,q,r.e,t.b),$async$$0)
case 3:p=e
if(s.c==null){w=1
break}if(p==null){s.z9("Could not export this tree.")
w=1
break}r=s.a
w=4
return A.b(A.pE(r.c,r.e),$async$$0)
case 4:s.z9(p)
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.e4I.prototype={
$0(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j
var $async$$0=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
o=r.a
n=o.a
m=n.c
w=7
return A.b(C.WD(n.d,m,n.e,r.b),$async$$0)
case 7:q=e
if(o.c==null){w=1
break}if(q==null){o.z9("No family trees found in that backup.")
w=1
break}o.a.w.$0()
if(q.c)o.z9("Restored "+q.a+" members on this phone (view only). Creator cloud data was not duplicated.")
else{n=q.a
m=q.b
l=q.b===1?"":"s"
o.z9("Restored "+n+" members across "+m+" tree"+l+".")}w=8
return A.b(o.Ki(),$async$$0)
case 8:t=2
w=6
break
case 4:t=3
j=s.pop()
p=A.ac(j)
o=r.a
if(o.c==null){w=1
break}o.z9(B.a.el(J.k(p),"StateError: ",""))
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$$0,v)},
$S:1}
C.e4N.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
r=s.a
q=r.c
w=3
return A.b(C.b2_(r.d,q,r.e,r.f),$async$$0)
case 3:p=e
r=s.c
if(r==null){w=1
break}if(p==null){s.z9("No family trees to share yet, or cloud is unavailable.")
w=1
break}w=4
return A.b(A.a6(r,!1).ce(A.ef(new C.e4M(s,p),!0,null,x.H)),$async$$0)
case 4:s=s.a
w=5
return A.b(A.pE(s.c,s.e),$async$$0)
case 5:case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.e4M.prototype={
$1(d){var w=this.b
return new C.a0O(this.a.a.c,w.b,w.a,w.c,null)},
$S:z+57}
C.e4L.prototype={
$1(d){return D.hIr},
$S:z+58}
C.e4R.prototype={
$0(){A.a6(this.a,!1).N(null)
return null},
$S:0}
C.e4S.prototype={
$1(d){var w=this.a
w=w.r?null:new C.e4Q(w,d)
return new A.D(B.da,new C.bhs(this.b,d.c,d.a,w,null),null)},
$S:2005}
C.e4Q.prototype={
$0(){return this.a.YI(this.b.b)},
$S:0}
C.e4B.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.e4C.prototype={
$0(){return this.a.d=!0},
$S:0}
C.e4D.prototype={
$0(){return this.a.e=!0},
$S:0}
C.e4E.prototype={
$0(){return this.a.d=!1},
$S:0}
C.e4F.prototype={
$0(){A.a6(this.a,!1).N(null)
return null},
$S:0}
C.e4T.prototype={
$1(d){var w,v,u,t,s,r=this.a
if(r.e)return
for(w=d.a,v=w.length,u=0;u<w.length;w.length===v||(0,A.I)(w),++u){t=w[u].z
s=t==null?null:B.a.i(t)
if(s==null||s.length===0)continue
if(!B.a.Z(s,"NGMYFTSYNC2"))t=!A.cR(s,"ngmyFamilyTreeSync",0)
else t=!1
if(t)continue
r.e=!0
A.a6(this.b,!1).N(s)
return}},
$S:189}
C.dQL.prototype={
$1(d){return d.a===this.a.a.c},
$S:z+59}
C.dQM.prototype={
$0(){return B.d.gH(D.a7f)},
$S:z+60}
C.dQN.prototype={
$2(d,e){var w=null,v=this.a,u=v.a.c,t=v.d
t===$&&A.c()
t=t.x
t===$&&A.c()
v=v.e
v===$&&A.c()
v=v.x
v===$&&A.c()
return A.b5(A.as(A.X(this.b.d,B.c.j(0.95),w,w,D.dc5,44),w,w,w),w,w,new C.bml(u,t,v,w),B.az)},
$S:56}
C.h_L.prototype={
$1(d){return A.pn(new C.h_K(this.a,d),!1,0.72,0.92,0.45,!1,null)},
$S:139}
C.h_K.prototype={
$2(d,e){var w,v,u,t=null,s=this.a,r=s.a,q=r?B.ef:B.c,p=A.a([new A.ab(0,B.G,B.w.j(r?0.35:0.08),B.tL,24)],x.V),o=r?B.eh:B.bO
o=A.p(t,t,B.f,t,t,new A.o(o,t,t,A.l(99),t,t,B.n),t,4,t,t,t,t,t,40)
w=A.a([B.aV.j(0.25),B.bQ.j(0.18)],x.O)
w=A.p(t,D.bZK,B.f,t,t,new A.o(t,t,t,A.l(12),t,new A.a7(B.a5,B.a9,B.x,w,t,t),B.n),t,40,t,t,t,t,t,40)
v=A.d("Choose a theme",t,t,t,t,t,t,A.m(t,t,r?B.aS:B.av,t,t,t,t,t,t,t,t,17,t,t,B.u,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)
u=x.p
return A.p(t,A.x(A.a([B.T,o,new A.D(E.anY,A.A(A.a([w,B.bc,A.E(A.x(A.a([v,A.d("Animated thumbnails for construction, grocery, and more.",t,t,t,t,t,t,A.m(t,t,r?B.bu:B.bj,t,t,t,t,t,t,t,t,12,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],u),B.E,t,B.e,B.i,0,B.p),1)],u),B.l,t,B.e,B.i,0,t,t),t),A.E(A.iA(!0,t,e,B.y,D.fpL,new C.h_J(this.b,s),20,B.anv,t,B.ah,!1),1)],u),B.l,t,B.e,B.i,0,B.p),B.f,t,t,new A.o(q,t,t,B.lf,p,t,B.n),t,t,t,t,t,t,t,t)},
$S:121}
C.h_J.prototype={
$2(d,e){var w=null,v=D.a7f[e],u=A.l(16),t=A.l(16),s=this.b.a,r=A.K(s?B.eh:B.bO,B.r,1),q=A.a([new A.ab(0,B.G,B.w.j(s?0.35:0.08),B.et,8)],x.V),p=A.l(15),o=A.E(new C.a7E(v.a,!0,w),1),n=s?B.jZ:B.iO,m=A.d(v.b,w,1,B.a2,w,w,w,A.m(w,w,s?B.aS:B.av,w,w,w,w,w,w,w,w,13,w,w,B.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),l=x.p
return A.aG(!1,B.a3,!0,w,A.aM(!1,u,!0,A.eE(A.bv(p,A.x(A.a([o,A.p(w,A.x(A.a([m,A.d(v.c,w,1,B.a2,w,w,w,A.m(w,w,s?B.bu:B.bj,w,w,w,w,w,w,w,w,10,w,w,B.a8,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],l),B.E,w,B.e,B.i,0,B.p),B.f,n,w,w,w,w,w,w,B.k7,w,w,w)],l),B.al,w,B.e,B.i,0,B.p),B.aq),w,new A.o(w,w,r,t,q,w,B.n),w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.h_I(this.a,v),w,w,w,w,w,w,w),B.f,B.L,0,w,w,w,w,w,B.ai)},
$S:79}
C.h_I.prototype={
$0(){A.a6(this.a,!1).N("ngmy:thumb:"+this.b.a)
return null},
$S:0}
C.cpL.prototype={
$0(){return this.a.ahI(this.b)},
$S:0}
C.h_8.prototype={
$1(d){return D.hDf},
$S:z+61}
C.h6U.prototype={
$1(d){var w=this
return new C.a2A(w.a,w.b,w.c,w.d,null)},
$S:z+62}
C.h_c.prototype={
$1(d){return new C.a_s(this.a,null)},
$S:z+63}
C.h_b.prototype={
$1(d){return D.hEg},
$S:z+64}
C.d9W.prototype={
$0(){A.a6(this.a,!1).N(null)
return null},
$S:0}
C.d9X.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.d9V(w,d))},
$S:35}
C.d9V.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.d9Y.prototype={
$1(d){return this.a.KW()},
$S:2}
C.d9Z.prototype={
$0(){A.a6(this.a,!1).N(null)
return null},
$S:0}
C.d9S.prototype={
$0(){A.a6(this.a,!1).N(null)
return null},
$S:0}
C.d9T.prototype={
$1(d){return this.a.KW()},
$S:2}
C.d9U.prototype={
$0(){A.a6(this.a,!1).N(null)
return null},
$S:0}
C.cI5.prototype={
$0(){},
$S:0}
C.cIb.prototype={
$0(){A.a6(this.a,!1).N(null)
return null},
$S:0}
C.cIc.prototype={
$0(){return this.a.aRb(-1)},
$S:0}
C.cId.prototype={
$1(d){return this.a.m(new C.cIa())},
$S:2}
C.cIa.prototype={
$0(){},
$S:0}
C.cIe.prototype={
$0(){return this.a.aRb(1)},
$S:0}
C.cIf.prototype={
$1(d){return this.a.m(new C.cI9())},
$S:2}
C.cI9.prototype={
$0(){},
$S:0}
C.cIg.prototype={
$1(d){var w,v,u=null,t=this.a,s=t.w===d,r=d==="other"?"Other":d
r=A.d(r,u,u,u,u,u,u,A.m(u,u,u,u,u,u,u,u,u,u,u,11,u,u,B.O,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)
w=B.aV.j(0.2)
if(s)v=B.aV
else v=this.b.a?B.eh:B.bO
return A.uY(u,u,B.b2,r,u,new C.cI8(t,d),B.wK,s,w,u,new A.ay(v,1,B.r,-1),B.ch)},
$S:2006}
C.cI8.prototype={
$1(d){var w=this.a
return w.m(new C.cI6(w,this.b))},
$S:9}
C.cI6.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.cIh.prototype={
$1(d){return this.a.m(new C.cI7())},
$S:2}
C.cI7.prototype={
$0(){},
$S:0}
C.cIi.prototype={
$0(){A.a6(this.a,!1).N(null)
return null},
$S:0}
C.fof.prototype={
$1(d){var w,v=this.a.d
v===$&&A.c()
w=B.a.i(v.a.a)
if(w.length!==0)A.a6(this.b,!1).N(w)},
$S:2}
C.fog.prototype={
$0(){A.a6(this.a,!1).N(null)
return null},
$S:0}
C.foh.prototype={
$0(){var w,v=this.a.d
v===$&&A.c()
w=B.a.i(v.a.a)
if(w.length===0)return
A.a6(this.b,!1).N(w)},
$S:0}
C.fod.prototype={
$2(d,e){var w,v,u,t,s,r=null,q=this.a,p=q.d
p===$&&A.c()
p=p.x
p===$&&A.c()
w=q.a
v=w.d
u=w.f
t=q.gbDy()
w=w.e
s=A.l(B.o.D(v-1,0,v))
return A.b5(new A.D(D.bJF,new A.e8(A.p(r,q.a.c,B.f,r,r,new A.o(r,r,r,s,r,r,B.n),r,r,r,r,w,r,r,r),r),r),new C.bz7(p,v,this.b.a,u,t,r),r,r,B.az)},
$S:56}
C.foe.prototype={
$2(d,e){var w,v,u,t,s,r=null,q=this.a,p=q.d
p===$&&A.c()
p=p.x
p===$&&A.c()
w=B.dH.az(0,p)
p=A.l(12)
q=q.a.c
v=A.l(12)
u=A.l(12)
t=w*2.4
s=A.ap(B.aV,B.bQ,w)
s.toString
s=A.a([B.b2,s,B.aV],x.O)
return A.aG(!1,B.a3,!0,p,A.aM(!1,v,!0,A.eE(D.eyM,r,new A.o(r,r,A.K(B.c.j(0.4),B.r,1.5),u,r,new A.a7(new A.d7(-1.2+t,-0.5),new A.d7(1.2-t,0.8),B.x,s,r,r),B.n),r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,r),B.f,B.L,0,r,r,r,r,r,B.ai)},
$S:143}
C.fYp.prototype={
$1(d){return A.w(d.h(0,1))+","},
$S:58}
C.eWW.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.eWN.prototype={
$0(){return this.a.e=!0},
$S:0}
C.eWO.prototype={
$0(){return this.a.e=!1},
$S:0}
C.eWU.prototype={
$1(d){var w={},v=this.a.d
v===$&&A.c()
w.a=v.c
return new A.e3(new C.eWT(w,this.b),null)},
$S:20}
C.eWT.prototype={
$2(d,e){var w=null,v=this.b.a,u=v?B.ef:B.c,t=A.l(20),s=A.d("Project thumbnail",w,w,w,w,w,w,A.m(w,w,v?B.aS:B.av,w,w,w,w,w,w,w,w,17,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),r=this.a,q=x.p
return A.eI(w,u,new A.D(B.anS,A.x(A.a([s,B.am,A.d("Tap circle for themes \xb7 tap frame for gallery",w,w,w,w,w,w,A.m(w,w,v?B.bu:B.bj,w,w,w,w,w,w,w,w,11,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.af,C.huF(new C.eWQ(r,e),r.a),B.aB,A.A(A.a([A.E(A.dW(B.ds,new C.eWR(d),w),1),B.as,A.E(A.bJ(B.WB,w,new C.eWS(r,d),A.bp(B.aV,w,w,w,w,w,w,w,w,w,w,w)),1)],q),B.l,w,B.e,B.i,0,w,w)],q),B.al,w,B.e,B.N,0,B.p),w),w,w,w,w,w,B.d7,w,new A.ba(t,B.a1),w)},
$S:101}
C.eWQ.prototype={
$1(d){return this.b.$1(new C.eWP(this.a,d))},
$S:35}
C.eWP.prototype={
$0(){return this.a.a=this.b},
$S:0}
C.eWR.prototype={
$0(){A.a6(this.a,!1).N(null)
return null},
$S:0}
C.eWS.prototype={
$0(){var w=this.a.a
A.a6(this.b,!1).N(w)
return null},
$S:0}
C.eWV.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
return w.d=v.TN(this.b)},
$S:0}
C.eWI.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&A.c()
w=A.C(u.d,x.Q)
w.push(this.b)
v.d=u.bfE(w)},
$S:0}
C.eWM.prototype={
$1(d){return this.boV(d)},
boV(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.a
w=3
return A.b(C.Mj(s.a.c,d),$async$$1)
case 3:s=s.c
if(s.e==null){w=1
break}A.j9(s,d)
case 1:return A.h(u,v)}})
return A.i($async$$1,v)},
$S:z+21}
C.eWL.prototype={
$0(){var w,v,u=this.a,t=u.d
t===$&&A.c()
w=t.d
v=A.U(w).k("Y<1>")
w=A.C(new A.Y(w,new C.eWK(this.b),v),v.k("M.E"))
u.d=t.bfE(w)},
$S:0}
C.eWK.prototype={
$1(d){return d.a!==this.a.a},
$S:z+22}
C.eWX.prototype={
$0(){var w=this.a.d
w===$&&A.c()
return A.j9(this.b,w)},
$S:0}
C.eWY.prototype={
$1(d){return this.a.bHI(d,this.b)},
$S:z+67}
C.eWJ.prototype={
$0(){return this.a.abn(this.b)},
$S:0}
C.h6H.prototype={
$1(d){return new C.af3(this.a,this.b,this.c,null)},
$S:z+68}
C.eX_.prototype={
$0(){return this.a.a0E(this.b)},
$S:0}
C.eX0.prototype={
$0(){return this.a.R0(this.b)},
$S:0}
C.eX1.prototype={
$0(){return this.a.F1(this.b)},
$S:0}
C.eX2.prototype={
$0(){return this.a.a0F(this.b)},
$S:0}
C.eWZ.prototype={
$0(){A.a6(this.a,!1).N(null)
return null},
$S:0}
C.eWD.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.eWE.prototype={
$0(){return this.a.e="Could not create QR. Check your connection and try again."},
$S:0}
C.eWF.prototype={
$0(){A.a6(this.a,!1).N(null)
return null},
$S:0}
C.eWH.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return A.b(t.d.qz(),$async$$0)
case 2:if(t.c!=null)t.m(new C.eWG(t))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.eWG.prototype={
$0(){var w=this.a
return w.f=!w.f},
$S:0}
C.eXp.prototype={
$2(d,e){return d+e.gxK()},
$S:z+71}
C.eXl.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.eXm.prototype={
$0(){return this.a.f=!1},
$S:0}
C.eX6.prototype={
$1(d){var w,v=null,u=this.a.a,t=u?B.ef:B.c,s=A.l(24),r=A.p(v,D.c_d,B.f,v,v,new A.o(B.aA.j(u?0.18:0.08),v,A.K(B.aA.j(0.28),B.r,1),v,v,v,B.a6),v,64,v,v,v,v,v,64),q=A.d("Clear all projects?",v,v,v,v,v,v,A.m(v,v,u?B.aS:B.av,v,v,v,v,v,v,v,v,18,v,v,B.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),p=A.d("This permanently removes every worksheet project on this device. This cannot be undone.",v,v,v,v,v,v,A.m(v,v,u?B.bu:B.bj,v,v,v,v,v,v,v,v,13,v,v,v,v,1.4,!0,v,v,v,v,v,v,v,v),B.K,v,v),o=u?B.aS:B.av
u=u?B.eh:B.bO
w=x.p
return A.eI(v,t,new A.D(B.wJ,A.x(A.a([r,B.aO,q,B.P,p,B.db,A.A(A.a([A.E(A.dW(B.o7,new C.eX4(d),A.dj(v,v,v,v,v,v,v,v,v,o,v,v,B.fi,v,new A.ba(A.l(14),B.a1),new A.ay(u,1,B.r,-1),v,v,v,v)),1),B.as,A.E(A.bJ(D.h8D,v,new C.eX5(d),A.bp(B.aA,v,v,v,v,v,B.fi,v,new A.ba(A.l(14),B.a1),v,v,v)),1)],w),B.l,v,B.e,B.i,0,v,v)],w),B.l,v,B.e,B.N,0,B.p),v),v,v,v,v,v,B.d7,v,new A.ba(s,B.a1),v)},
$S:46}
C.eX4.prototype={
$0(){A.a6(this.a,!1).N(!1)
return null},
$S:0}
C.eX5.prototype={
$0(){A.a6(this.a,!1).N(!0)
return null},
$S:0}
C.eXf.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m=null,l=this.b,k=l.a,j=k?B.ef:B.c,i=A.l(28),h=A.a([new A.ab(0,B.G,B.w.j(k?0.35:0.08),B.fQ,28)],x.V),g=k?D.djr:B.a6y,f=x.p
g=A.p(m,A.x(A.a([A.p(m,m,B.f,m,m,new A.o(B.c.j(0.45),m,m,A.l(99),m,m,B.n),m,4,m,m,m,m,m,40),B.aB,D.fiP,B.ax,new A.bK(B.a5,m,m,A.d("Move worksheet projects between phones",m,m,m,m,m,m,A.m(m,m,B.c.j(0.82),m,m,m,m,m,m,m,m,12,m,m,B.cD,m,m,!0,m,m,m,m,m,m,m,m),m,m,m),m)],f),B.l,m,B.e,B.i,0,B.p),B.f,m,m,new A.o(m,m,m,m,m,new A.a7(B.ay,B.aC,B.x,g,m,m),B.n),m,m,m,m,E.anW,m,m,1/0)
w=A.d("IMPORT PROJECT",m,m,m,m,m,m,A.m(m,m,k?B.bu:B.bj,m,m,m,m,m,m,m,m,11,m,m,B.H,m,m,!0,m,1.1,m,m,m,m,m,m),m,m,m)
v=this.a
u=A.A(A.a([A.E(v.b8v(B.b8,B.jv,new C.eXc(v,d),l,"Camera import","Scan QR"),1),B.as,A.E(v.b8v(B.cF,R.zM,new C.eXd(v,d),l,".json backup","Upload file"),1)],f),B.l,m,B.e,B.i,0,m,m)
t=A.d("DANGER ZONE",m,m,m,m,m,m,A.m(m,m,k?B.bu:B.bj,m,m,m,m,m,m,m,m,11,m,m,B.H,m,m,!0,m,1.1,m,m,m,m,m,m),m,m,m)
s=A.l(16)
r=B.aA.j(k?0.14:0.06)
q=A.l(16)
p=A.K(B.aA.j(0.28),B.r,1)
o=A.p(m,D.bZx,B.f,m,m,new A.o(B.aA.j(0.12),m,m,A.l(12),m,m,B.n),m,m,m,m,B.bS,m,m,m)
n=A.d("Clear all projects",m,m,m,m,m,m,A.m(m,m,k?B.aS:B.av,m,m,m,m,m,m,m,m,m,m,m,B.H,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)
n=A.E(A.x(A.a([n,A.d("Remove every project on this device",m,m,m,m,m,m,A.m(m,m,k?B.bu:B.bj,m,m,m,m,m,m,m,m,12,m,m,m,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)],f),B.E,m,B.e,B.i,0,B.p),1)
return A.bn(!0,new A.D(B.wD,A.p(m,A.x(A.a([g,new A.D(B.anT,A.x(A.a([w,B.T,u,B.bx,t,B.T,A.aG(!1,B.a3,!0,m,A.aM(!1,s,!0,A.p(m,A.A(A.a([o,B.bc,n,A.X(B.eI,k?B.bu:B.bj,m,m,m,m)],f),B.l,m,B.e,B.i,0,m,m),B.f,m,m,new A.o(r,m,p,q,m,m,B.n),m,m,m,m,B.bH,m,m,1/0),m,!0,m,m,m,m,m,m,m,m,m,m,m,new C.eXe(v,d,l),m,m,m,m,m,m,m),B.f,B.L,0,m,m,m,m,m,B.ai)],f),B.E,m,B.e,B.i,0,B.p),m)],f),B.l,m,B.e,B.N,0,B.p),B.aq,m,m,new A.o(j,m,m,i,h,m,B.n),m,m,m,m,m,m,m,m),m),!0,!1,B.ag,!0,!0)},
$S:27}
C.eXc.prototype={
$0(){var w=0,v=A.j(x.H),u=this
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:A.a6(u.b,!1).N(null)
w=2
return A.b(u.a.w9("scan"),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.eXd.prototype={
$0(){var w=0,v=A.j(x.H),u=this
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:A.a6(u.b,!1).N(null)
w=2
return A.b(u.a.w9("file"),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.eXe.prototype={
$0(){var w=0,v=A.j(x.H),u=this
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:A.a6(u.b,!1).N(null)
w=2
return A.b(u.a.OE(u.c),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.eXa.prototype={
$1(d){var w,v,u,t,s,r,q=null,p=this.b,o=p.a,n=o?B.ef:B.c,m=A.l(24),l=A.a([new A.ab(0,B.G,B.w.j(o?0.35:0.08),B.eS,24)],x.V),k=o?B.eh:B.bO
k=A.p(q,q,B.f,q,q,new A.o(k,q,q,A.l(99),q,q,B.n),q,4,q,q,q,q,q,40)
w=A.l(12)
v=this.c
u=o?B.bu:B.bj
u=A.bv(w,new A.a5(48,48,C.aSZ(!0,A.l(12),48,Q.Py,u,v.c,48),q),B.aq)
w=A.d(v.b,q,1,B.a2,q,q,q,A.m(q,q,o?B.aS:B.av,q,q,q,q,q,q,q,q,16,q,q,B.u,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
t=v.d.length
v=A.Bo(v.gxK())
s=x.p
r=this.a
return A.bn(!0,new A.D(B.wD,A.p(q,A.x(A.a([B.T,k,new A.D(D.anQ,A.A(A.a([u,B.bc,A.E(A.x(A.a([w,A.d(""+t+" items \xb7 "+v,q,q,q,q,q,q,A.m(q,q,o?B.bu:B.bj,q,q,q,q,q,q,q,q,12,q,q,B.a8,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],s),B.E,q,B.e,B.i,0,B.p),1)],s),B.l,q,B.e,B.i,0,q,q),q),B.Ct,r.crA(B.vd,B.aV,new C.eX8(d),p,"QR code or backup file","Transfer project"),r.b5w(!0,B.ej,B.aA,new C.eX9(d),p,"Remove from this device","Delete project"),B.T],s),B.l,q,B.e,B.N,0,B.p),B.f,q,q,new A.o(n,q,q,m,l,q,B.n),q,q,q,q,q,q,q,q),q),!0,!1,B.ag,!0,!0)},
$S:27}
C.eX8.prototype={
$0(){A.a6(this.a,!1).N("transfer")
return null},
$S:0}
C.eX9.prototype={
$0(){A.a6(this.a,!1).N("delete")
return null},
$S:0}
C.eXb.prototype={
$1(d){return this.boW(d)},
boW(d){var w=0,v=A.j(x.H),u=this,t
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=u.a
w=2
return A.b(C.Mj(t.a.c,d),$async$$1)
case 2:w=3
return A.b(t.wo(),$async$$1)
case 3:return A.h(null,v)}})
return A.i($async$$1,v)},
$S:z+21}
C.eXs.prototype={
$0(){var w=this.a
w.a.bv()
w.m(new C.eXr(w))},
$S:0}
C.eXr.prototype={
$0(){return this.a.r++},
$S:0}
C.eXt.prototype={
$0(){var w=this.a
return w.m(new C.eXq(w))},
$S:0}
C.eXq.prototype={
$0(){return this.a.r++},
$S:0}
C.eX3.prototype={
$0(){var w=this.a.c
w.toString
return A.j9(w,null)},
$S:0}
C.eX7.prototype={
$0(){return this.a.ckP(this.b)},
$S:0}
C.eXo.prototype={
$0(){var w=this.a
return w.m(new C.eXn(w,this.b))},
$S:0}
C.eXn.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.eXi.prototype={
$0(){return this.a.w9("scan")},
$S:0}
C.eXj.prototype={
$0(){return this.a.w9("file")},
$S:0}
C.eXk.prototype={
$1(d){return this.a.crB(d,this.b)},
$S:z+72}
C.eXh.prototype={
$0(){return this.a.F5(this.b)},
$S:0}
C.eXg.prototype={
$0(){return this.a.a18(this.b,this.c)},
$S:0}
C.cHr.prototype={
$2(d,e){return d+e.c*e.d},
$S:z+73}
C.cHq.prototype={
$1(d){return d.aj()},
$S:z+74}
C.cHo.prototype={
$1(d){return C.hPx(A.a1(d,x.N,x.z))},
$S:z+75}
C.cHp.prototype={
$1(d){return d.a.length!==0},
$S:z+22}
C.fIm.prototype={
$1(d){return d.y===D.kZ},
$S:z+3}
C.h7s.prototype={
$1(d){return C.aRF(d,this.a)},
$S:z+3}
C.fFR.prototype={
$1(d){return d.a===this.a.a},
$S:z+3}
C.bTH.prototype={
$1(d){return!d.as},
$S:z+1}
C.bTG.prototype={
$1(d){return d.aj()},
$S:z+23}
C.bTD.prototype={
$1(d){return C.hoB(A.a1(d,x.N,x.z))},
$S:z+24}
C.bTE.prototype={
$1(d){return d.a.length!==0},
$S:z+1}
C.bTF.prototype={
$1(d){return J.k(d)},
$S:17}
C.fw8.prototype={
$2(d,e){return e.e.aQ(0,d.e)},
$S:z+25}
C.frI.prototype={
$1(d){return C.he3(A.a1(d,x.N,x.z))},
$S:z+79}
C.frJ.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+10}
C.frK.prototype={
$2(d,e){return e.e.aQ(0,d.e)},
$S:z+25}
C.fZX.prototype={
$1(d){return J.k(d)},
$S:17}
C.fZY.prototype={
$1(d){return d.a},
$S:z+81}
C.fZZ.prototype={
$1(d){return d.length!==0},
$S:3}
C.h__.prototype={
$1(d){return B.d.q(this.a,d.a)},
$S:z+10}
C.h_0.prototype={
$1(d){return d.TN(null).aj()},
$S:z+82}
C.h7q.prototype={
$1(d){return d.a===this.a.a},
$S:z+10}
C.fIQ.prototype={
$1(d){return d.a===this.a},
$S:z+10}
C.fM2.prototype={
$1(d){return C.amF(A.a1(d,x.N,x.z))},
$S:z+9}
C.fM3.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+3}
C.fM4.prototype={
$2(d,e){return e.r.aQ(0,d.r)},
$S:z+6}
C.fM5.prototype={
$1(d){return d.aj()},
$S:z+5}
C.fM6.prototype={
$1(d){return C.uB(d,this.a)},
$S:z+3}
C.fZK.prototype={
$1(d){return C.uB(d,this.a)},
$S:z+3}
C.h7l.prototype={
$1(d){return C.amF(A.a1(d,x.N,x.z))},
$S:z+9}
C.h7m.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+3}
C.h7n.prototype={
$1(d){return d.a===this.a.a},
$S:z+3}
C.fIx.prototype={
$1(d){return d.a===this.a},
$S:z+3}
C.fIy.prototype={
$1(d){return d.a===this.a},
$S:z+3}
C.h7w.prototype={
$1(d){return!d.as},
$S:z+1}
C.fI1.prototype={
$1(d){return d.a===this.a},
$S:z+1}
C.fI2.prototype={
$1(d){var w,v=this.a
if(d.d!==v)return!1
w=this.b
if(w!=null)if(w.e===d.a||d.e===v)return!1
return!0},
$S:z+1}
C.fI3.prototype={
$2(d,e){return B.o.aQ(d.Q,e.Q)},
$S:z+7}
C.h6V.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
C.fMU.prototype={
$1(d){return d.Q},
$S:z+15}
C.fZD.prototype={
$1(d){var w=d.d
return w==null||w.length===0},
$S:z+1}
C.fM_.prototype={
$1(d){return C.amF(A.a1(d,x.N,x.z))},
$S:z+9}
C.fM0.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+3}
C.fM1.prototype={
$2(d,e){return e.r.aQ(0,d.r)},
$S:z+6}
C.fZy.prototype={
$1(d){return d.a===this.a.a},
$S:z+3}
C.fse.prototype={
$1(d){return d.length!==0},
$S:3}
C.fsf.prototype={
$1(d){return C.hoB(A.a1(d,x.N,x.z))},
$S:z+24}
C.fsg.prototype={
$1(d){return d.a.length!==0},
$S:z+1}
C.fsh.prototype={
$1(d){return B.a.i(J.k(d).toLowerCase())},
$S:17}
C.fsi.prototype={
$1(d){return d.length!==0},
$S:3}
C.fsv.prototype={
$2(d,e){return d.eF(new C.fsw(e))},
$S:2007}
C.fsw.prototype={
$1(d){$.am.$1("[family_trees] "+this.a+" fetch: "+A.w(d))
return B.cf},
$S:2008}
C.fss.prototype={
$1(d){return C.ibh(d,this.a)},
$S:z+84}
C.fst.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+3}
C.fsu.prototype={
$2(d,e){return e.r.aQ(0,d.r)},
$S:z+6}
C.fwQ.prototype={
$1(d){return d.a},
$S:z+56}
C.fwR.prototype={
$1(d){return d.length!==0},
$S:3}
C.fwS.prototype={
$2(d,e){return e.r.aQ(0,d.r)},
$S:z+6}
C.fzQ.prototype={
$1(d){return d.aj()},
$S:z+5}
C.fF5.prototype={
$1(d){return C.hAf(d,C.Ho(d,this.a))},
$S:z+5}
C.fF6.prototype={
$1(d){return C.hAg(d,C.Ho(d,this.a))},
$S:z+5};(function aliases(){var w=C.aCe.prototype
w.bwL=w.t
w=C.aAp.prototype
w.bwG=w.t
w=C.aHI.prototype
w.bx8=w.t
w=C.aCf.prototype
w.bwM=w.t
w=C.aCh.prototype
w.bwN=w.t
w=C.aCi.prototype
w.bwO=w.t
w=C.aNT.prototype
w.bzC=w.t
w=C.aQ0.prototype
w.bBX=w.t
w=C.aQ1.prototype
w.bBY=w.t})();(function installTearOffs(){var w=a._instance_1u,v=a._instance_0u,u=a._instance_0i,t=a.installInstanceTearOff,s=a._static_1
w(C.aFf.prototype,"gcou","cov",28)
var r
w(r=C.aCd.prototype,"gchn","cho",65)
v(r,"gaPm","Oa",0)
v(r,"gcwT","Bw",0)
v(r,"gbPx","OS",0)
v(r,"gcLk","za",0)
v(r,"gcqy","a1Q",0)
v(r,"gbKU","OA",0)
v(r,"gbPX","Y8",0)
w(r,"gbV2","bV3",78)
v(r,"gbFd","At",0)
v(C.aCg.prototype,"gcLg","FZ",0)
v(r=C.amu.prototype,"gbt6","bt7",2)
v(r,"gbsZ","bt_",2)
v(r,"gcMp","cMq",2)
u(r,"gqs","kO",0)
u(r=C.akE.prototype,"geX","fX",2)
w(r,"gcd_","cd0",27)
u(C.avs.prototype,"gqs","kO",0)
v(r=C.azq.prototype,"gcXZ","cY_",2)
u(r,"gqs","kO",0)
u(C.aLw.prototype,"gbt4","bt5",2)
v(C.amD.prototype,"gC1","cMC",2)
u(r=C.amB.prototype,"gcNi","cNj",2)
u(r,"gqs","kO",0)
v(r=C.amx.prototype,"gbrX","brY",2)
v(r,"gcSu","cSv",2)
u(r=C.amz.prototype,"geX","fX",2)
u(r,"giB","cLW",2)
v(r=C.amv.prototype,"gcLL","cLM",2)
u(r,"gbqP","jH",2)
v(r=C.aFP.prototype,"gahk","wp",0)
v(r,"gck4","a10",0)
v(r,"gaTC","IA",0)
v(r=C.aFM.prototype,"gcHf","a3X",0)
v(r,"gahk","wp",0)
v(r,"gcuT","a2u",0)
v(r,"gck_","b3J",2)
v(r,"gcl1","a1d",0)
w(r,"gchh","chi",35)
v(r,"gbPP","IF",0)
v(r,"gcIj","cIk",2)
v(r,"gc6Y","ZU",0)
w(r,"gcfM","cfN",36)
v(r,"gcjO","cjP",2)
v(r=C.aEe.prototype,"gcd5","Qy",0)
v(r,"gcd7","cd8",2)
v(r,"gbMo","ab_",0)
v(r=C.aFO.prototype,"gbTr","YE",0)
v(r,"gc3_","Zl",0)
v(r,"gcBj","a3k",0)
v(r,"gcxs","a2W",0)
v(C.aFN.prototype,"gcxb","aj8",0)
v(C.auE.prototype,"gcfK","a0C",0)
v(C.aAY.prototype,"ga3G","KW",2)
v(C.aAX.prototype,"ga3G","KW",2)
v(C.azD.prototype,"ga3G","KW",2)
v(r=C.aHj.prototype,"gb4U","Ry",0)
v(r,"gbE1","WL",0)
v(r,"gckQ","ckR",2)
w(C.aHi.prototype,"gcgC","cgD",69)
t(C.aHk.prototype,"gaTx",0,0,null,["$1","$0"],["Iz","bNI"],70,0,0)
s(C,"hIt","ilb",23)})();(function inheritance(){var w=a.mixinHard,v=a.mixin,u=a.inheritMany,t=a.inherit
u(A.aF,[C.aqd,C.uV,C.nB,C.Ix,C.agf,C.KU,C.uW,C.bUc,C.tk,C.bpR,C.amM,C.ael,C.lA,C.bSO,C.auQ,C.zD,C.alk,C.MX,C.bbg,C.aap,C.bix,C.agm,C.aAF,C.aga,C.aLw,C.L0,C.GH,C.bhq,C.aLr,C.arB,C.diL,C.m1,C.aVV,C.aVU,C.aTX,C.um,C.rw,C.lK,C.i4,C.l3,C.aJp])
u(A.ht,[C.fQH,C.fQG,C.fQI,C.h_E,C.fDM,C.fDN,C.fDS,C.fOq,C.fOp,C.fOo,C.c93,C.h0a,C.h02,C.h0e,C.fIF,C.dRr,C.dRm,C.dRn,C.dR_,C.dQW,C.dRG,C.dRH,C.dRA,C.dRB,C.dRI,C.dRJ,C.fJq,C.fLX,C.fLY,C.fZI,C.h7k,C.fIw,C.h_i,C.dhY,C.dhk,C.dht,C.dhK,C.dhp,C.dhv,C.dhm,C.dhz,C.dhA,C.dhy,C.dhP,C.dhO,C.djL,C.djM,C.djN,C.dib,C.dig,C.dif,C.cQt,C.cQv,C.d99,C.d9y,C.d9z,C.d9C,C.d9E,C.d9F,C.d9G,C.d9I,C.d9J,C.bSy,C.bSs,C.fwx,C.h7d,C.h7e,C.h7f,C.h7a,C.h7g,C.h7h,C.h7i,C.h79,C.fK2,C.fYC,C.fFS,C.fMT,C.bNC,C.h7C,C.fZe,C.bLM,C.bLH,C.bLJ,C.bLI,C.crr,C.crm,C.crn,C.crl,C.crj,C.cro,C.cRx,C.cGq,C.cGt,C.cGr,C.cGu,C.cGv,C.f9_,C.fj9,C.bTk,C.bTe,C.bTi,C.bSW,C.e3h,C.e3e,C.e3f,C.e3d,C.e3j,C.bTc,C.bT2,C.bSN,C.bSM,C.bSI,C.bSJ,C.bSK,C.bSL,C.e4X,C.e4m,C.e4h,C.e3J,C.e3Z,C.e41,C.e3Y,C.e3X,C.e4d,C.e4e,C.e48,C.e3x,C.e4p,C.e4j,C.e3z,C.e3A,C.e3B,C.e3G,C.e3E,C.e3D,C.e3T,C.e3U,C.e3O,C.e4w,C.e4s,C.dim,C.din,C.fJu,C.fJv,C.fJw,C.fJs,C.fJt,C.fJz,C.fJA,C.fJB,C.fJx,C.fJy,C.diG,C.diw,C.dir,C.diB,C.diC,C.diF,C.dit,C.diI,C.diJ,C.diK,C.foL,C.eZM,C.dyD,C.dyN,C.dyO,C.dyP,C.dyS,C.dyR,C.dyT,C.dyY,C.dyZ,C.cge,C.cgd,C.cg9,C.cga,C.cgb,C.cgc,C.cgj,C.cgg,C.cgh,C.e4J,C.e4M,C.e4L,C.e4S,C.e4T,C.dQL,C.h_L,C.h_8,C.h6U,C.h_c,C.h_b,C.d9X,C.d9Y,C.d9T,C.cId,C.cIf,C.cIg,C.cI8,C.cIh,C.fof,C.fYp,C.eWU,C.eWQ,C.eWM,C.eWK,C.eWY,C.h6H,C.eX6,C.eXf,C.eXa,C.eXb,C.eXk,C.cHq,C.cHo,C.cHp,C.fIm,C.h7s,C.fFR,C.bTH,C.bTG,C.bTD,C.bTE,C.bTF,C.frI,C.frJ,C.fZX,C.fZY,C.fZZ,C.h__,C.h_0,C.h7q,C.fIQ,C.fM2,C.fM3,C.fM5,C.fM6,C.fZK,C.h7l,C.h7m,C.h7n,C.fIx,C.fIy,C.h7w,C.fI1,C.fI2,C.h6V,C.fMU,C.fZD,C.fM_,C.fM0,C.fZy,C.fse,C.fsf,C.fsg,C.fsh,C.fsi,C.fsw,C.fss,C.fst,C.fwQ,C.fwR,C.fzQ,C.fF5,C.fF6])
u(A.aw,[C.b0v,C.ams,C.aXd,C.a_6,C.bd3,C.QV,C.a6S,C.tK,C.Iz,C.bho,C.bld,C.bzi,C.boz,C.aeI,C.blc,C.aeH,C.blb,C.aEf,C.aKt,C.aeJ,C.GD,C.bhp,C.adY,C.bhn,C.bhs,C.b0t,C.auE,C.af3])
u(A.mt,[C.bdH,C.beU,C.beL,C.aJj,C.bke,C.bpQ,C.aXi,C.bdJ,C.aCc,C.bdc,C.btV,C.bkm,C.bjN,C.bjU,C.bhr,C.bgt,C.bml,C.bz7])
u(A.iT,[C.h07,C.h08,C.h09,C.h00,C.h01,C.h0c,C.h0d,C.dRD,C.dRp,C.dRs,C.dR6,C.dR7,C.dR8,C.dR5,C.dRd,C.dR4,C.dRe,C.dRf,C.dR3,C.dRg,C.dR2,C.dRh,C.dR1,C.dRi,C.dQU,C.dQV,C.dR0,C.dRj,C.dQZ,C.dRk,C.dQY,C.dR9,C.dQX,C.dRa,C.dQT,C.dRb,C.dRc,C.dRE,C.dRF,C.dRt,C.dRu,C.dRv,C.dRw,C.dRx,C.dRy,C.dRz,C.dRL,C.dRC,C.fJr,C.dhi,C.dhg,C.dhh,C.dhj,C.dhX,C.dhM,C.dhJ,C.dhl,C.dhN,C.dhr,C.dhs,C.dhu,C.dhL,C.dhq,C.dhw,C.dhU,C.dhG,C.dhF,C.dhH,C.dhI,C.dhB,C.dhD,C.dhE,C.dhx,C.dhQ,C.dhT,C.dhn,C.dho,C.djK,C.djJ,C.djI,C.djH,C.djO,C.djG,C.djP,C.dic,C.did,C.die,C.dih,C.dia,C.di9,C.cQu,C.d98,C.d9l,C.d9k,C.d9A,C.d9j,C.d9B,C.d9i,C.d9h,C.d9D,C.d9g,C.d9t,C.d9s,C.d9K,C.bSr,C.bSB,C.bSt,C.bSu,C.bSx,C.bSw,C.bSz,C.bSA,C.bSv,C.bSp,C.bSq,C.bU4,C.bU5,C.bU6,C.bU7,C.bU8,C.bU9,C.bUa,C.h7c,C.fYD,C.bLL,C.bLG,C.bLE,C.bLF,C.bLD,C.crt,C.cru,C.crs,C.crv,C.crx,C.cry,C.crz,C.crp,C.cGp,C.cGy,C.cGz,C.cGA,C.cGx,C.cGB,C.cGC,C.cGD,C.cGE,C.cGs,C.cGw,C.bTA,C.bTz,C.bTx,C.bTv,C.bTw,C.bTs,C.bTt,C.bTu,C.bTy,C.bTr,C.f90,C.f91,C.f92,C.f93,C.f94,C.bTo,C.bTp,C.bTq,C.bTj,C.bTl,C.bTm,C.bTn,C.bTf,C.bT_,C.bSZ,C.bSY,C.bSS,C.bST,C.bSX,C.bSU,C.bSV,C.bSR,C.e3g,C.e3i,C.e3b,C.e3c,C.e3a,C.e3k,C.e3l,C.e3m,C.e3p,C.e3q,C.e3r,C.e3s,C.e3t,C.e3u,C.e3v,C.e3w,C.e3n,C.e3o,C.bTb,C.bTa,C.bT1,C.bT0,C.bT7,C.bT8,C.bT4,C.bT5,C.bT6,C.bT3,C.bSC,C.bSD,C.bSH,C.bSG,C.bSF,C.bSE,C.e4W,C.e4V,C.e4Y,C.e4Z,C.e5_,C.e4U,C.e51,C.e50,C.e4k,C.e4l,C.e4n,C.e3K,C.e40,C.e4_,C.e42,C.e4g,C.e3W,C.e46,C.e47,C.e45,C.e43,C.e44,C.e49,C.e4a,C.e4b,C.e4f,C.e3y,C.e4i,C.e3C,C.e3F,C.e3H,C.e4o,C.e3N,C.e3L,C.e3P,C.e3Q,C.e3M,C.e3R,C.e3V,C.e4x,C.e4y,C.e4q,C.e4t,C.e4u,C.e4v,C.e4A,C.e4r,C.e3I,C.dil,C.dik,C.dip,C.diz,C.diq,C.eZL,C.dyE,C.dyB,C.dyC,C.dyM,C.dyL,C.dyK,C.dyU,C.dyJ,C.dyV,C.dyI,C.dyW,C.dyH,C.dyX,C.dyG,C.dyF,C.dyQ,C.dz_,C.dz8,C.e4K,C.e4O,C.e4P,C.e4G,C.e4H,C.e4I,C.e4N,C.e4R,C.e4Q,C.e4B,C.e4C,C.e4D,C.e4E,C.e4F,C.dQM,C.h_I,C.cpL,C.d9W,C.d9V,C.d9Z,C.d9S,C.d9U,C.cI5,C.cIb,C.cIc,C.cIa,C.cIe,C.cI9,C.cI6,C.cI7,C.cIi,C.fog,C.foh,C.eWW,C.eWN,C.eWO,C.eWP,C.eWR,C.eWS,C.eWV,C.eWI,C.eWL,C.eWX,C.eWJ,C.eX_,C.eX0,C.eX1,C.eX2,C.eWZ,C.eWD,C.eWE,C.eWF,C.eWH,C.eWG,C.eXl,C.eXm,C.eX4,C.eX5,C.eXc,C.eXd,C.eXe,C.eX8,C.eX9,C.eXs,C.eXr,C.eXt,C.eXq,C.eX3,C.eX7,C.eXo,C.eXn,C.eXi,C.eXj,C.eXh,C.eXg])
u(A.af,[C.aqq,C.Ue,C.a_Q,C.a_U,C.a_S,C.a_q,C.amt,C.akD,C.avr,C.azp,C.amC,C.amA,C.amw,C.WA,C.amy,C.Uf,C.arE,C.ary,C.a0u,C.arC,C.a0O,C.a0P,C.a7E,C.a_s,C.a_r,C.ZY,C.a2A,C.Gr,C.azw,C.auD,C.aux,C.auC,C.Pa])
u(A.ah,[C.aFf,C.bhi,C.aCd,C.bhH,C.aCg,C.beS,C.aCe,C.aAp,C.aHI,C.azq,C.aCi,C.aCh,C.aCf,C.bmH,C.amz,C.amv,C.aFP,C.aFM,C.aEe,C.aFO,C.aFN,C.bmI,C.aNT,C.aAY,C.aAX,C.azD,C.bza,C.aQ0,C.aQ1,C.aHj,C.bo4,C.aHi,C.bAW])
u(A.jE,[C.dRo,C.dRq,C.dRl,C.dRK,C.fLZ,C.bSo,C.dhW,C.dhV,C.dhC,C.dhR,C.dhS,C.dii,C.bUb,C.bU3,C.bSP,C.bSQ,C.h7b,C.h7B,C.bLK,C.crw,C.crq,C.crk,C.f95,C.bTd,C.bTg,C.bTh,C.dsU,C.bT9,C.e4c,C.e3S,C.e4z,C.diy,C.dix,C.div,C.diA,C.diD,C.diE,C.dio,C.dis,C.diu,C.diH,C.cg7,C.cgf,C.cgk,C.dQN,C.h_K,C.h_J,C.fod,C.foe,C.eWT,C.eXp,C.cHr,C.fw8,C.frK,C.fM4,C.fI3,C.fM1,C.fsv,C.fsu,C.fwS])
u(A.l8,[C.a25,C.ago,C.a2o,C.a0h,C.ad_,C.aMd,C.Iy,C.amE,C.cHs,C.cHt])
t(C.amu,C.aCe)
t(C.akE,C.aAp)
t(C.avs,C.aHI)
t(C.bhm,C.aCi)
t(C.amD,C.bhm)
t(C.bhl,C.aCh)
t(C.amB,C.bhl)
t(C.bhk,C.aCf)
t(C.amx,C.bhk)
t(C.bmm,C.aNT)
t(C.bz8,C.aQ0)
t(C.bz9,C.aQ1)
t(C.aHk,C.bAW)
t(C.bbt,A.bbh)
t(C.bzb,A.a7j)
t(C.bbs,C.bzb)
w(C.aCe,A.cf)
w(C.aAp,A.cf)
w(C.aHI,A.eP)
w(C.aCf,A.cf)
v(C.bhk,C.aga)
w(C.aCh,A.cf)
v(C.bhl,C.aga)
w(C.aCi,A.cf)
v(C.bhm,C.aga)
w(C.aNT,A.eP)
w(C.aQ0,A.cf)
w(C.aQ1,A.cf)
v(C.bAW,A.eG)
v(C.bzb,A.jn)})()
A.j1(b.typeUniverse,JSON.parse('{"b0v":{"aw":[],"v":[]},"bdH":{"aC":[]},"aqq":{"af":[],"v":[]},"aFf":{"ah":["aqq"]},"Ue":{"af":[],"v":[]},"ams":{"aw":[],"v":[]},"aXd":{"aw":[],"v":[]},"bhi":{"ah":["Ue"]},"a_Q":{"af":[],"v":[]},"a_U":{"af":[],"v":[]},"a_S":{"af":[],"v":[]},"a_q":{"af":[],"v":[]},"aCd":{"ah":["a_Q"]},"bhH":{"ah":["a_U"]},"aCg":{"ah":["a_S"]},"a_6":{"aw":[],"v":[]},"beU":{"aC":[]},"beL":{"aC":[]},"beS":{"ah":["a_q"]},"aJj":{"aC":[]},"bke":{"aC":[]},"bd3":{"aw":[],"v":[]},"amt":{"af":[],"v":[]},"amu":{"ah":["amt"]},"bpQ":{"aC":[]},"aXi":{"aC":[]},"akD":{"af":[],"v":[]},"avr":{"af":[],"v":[]},"azp":{"af":[],"v":[]},"akE":{"ah":["akD"]},"bdJ":{"aC":[]},"QV":{"aw":[],"v":[]},"aCc":{"aC":[]},"avs":{"ah":["avr"]},"bdc":{"aC":[]},"azq":{"ah":["azp"]},"amC":{"af":[],"v":[]},"amA":{"af":[],"v":[]},"amw":{"af":[],"v":[]},"amD":{"ah":["amC"]},"btV":{"aC":[]},"amB":{"ah":["amA"]},"bkm":{"aC":[]},"amx":{"ah":["amw"]},"bjN":{"aC":[]},"WA":{"af":[],"v":[]},"amy":{"af":[],"v":[]},"Uf":{"af":[],"v":[]},"a6S":{"aw":[],"v":[]},"bjU":{"aC":[]},"tK":{"aw":[],"v":[]},"Iz":{"aw":[],"v":[]},"bmH":{"ah":["WA"]},"amz":{"ah":["amy"]},"amv":{"ah":["Uf"]},"arE":{"af":[],"v":[]},"ary":{"af":[],"v":[]},"a0u":{"af":[],"v":[]},"aeJ":{"aw":[],"v":[]},"aFP":{"ah":["arE"]},"aFM":{"ah":["ary"]},"bho":{"aw":[],"v":[]},"bhr":{"aC":[]},"bld":{"aw":[],"v":[]},"bgt":{"aC":[]},"bzi":{"aw":[],"v":[]},"boz":{"aw":[],"v":[]},"aEe":{"ah":["a0u"]},"aeI":{"aw":[],"v":[]},"blc":{"aw":[],"v":[]},"aeH":{"aw":[],"v":[]},"blb":{"aw":[],"v":[]},"aEf":{"aw":[],"v":[]},"aKt":{"aw":[],"v":[]},"GD":{"aw":[],"v":[]},"arC":{"af":[],"v":[]},"a0O":{"af":[],"v":[]},"a0P":{"af":[],"v":[]},"aFO":{"ah":["arC"]},"bhp":{"aw":[],"v":[]},"adY":{"aw":[],"v":[]},"bhn":{"aw":[],"v":[]},"bhs":{"aw":[],"v":[]},"aFN":{"ah":["a0O"]},"bmI":{"ah":["a0P"]},"b0t":{"aw":[],"v":[]},"a7E":{"af":[],"v":[]},"bmm":{"ah":["a7E"]},"bml":{"aC":[]},"auE":{"aw":[],"v":[]},"a_s":{"af":[],"v":[]},"a_r":{"af":[],"v":[]},"ZY":{"af":[],"v":[]},"a2A":{"af":[],"v":[]},"aAY":{"ah":["a_s"]},"aAX":{"ah":["a_r"]},"azD":{"ah":["ZY"]},"bza":{"ah":["a2A"]},"Gr":{"af":[],"v":[]},"azw":{"af":[],"v":[]},"bz8":{"ah":["Gr"]},"bz9":{"ah":["azw"]},"bz7":{"aC":[]},"auD":{"af":[],"v":[]},"aHj":{"ah":["auD"]},"af3":{"aw":[],"v":[]},"aux":{"af":[],"v":[]},"auC":{"af":[],"v":[]},"bo4":{"ah":["aux"]},"aHi":{"ah":["auC"]},"Pa":{"af":[],"v":[]},"aHk":{"ah":["Pa"],"eG":[]},"bbs":{"jn":[],"fm":[]}}'))
A.Dn(b.typeUniverse,JSON.parse('{"aga":1}'))
var y={q:'\nSWAHILI THAT REAL SWAHILI SPEAKERS USE (critical): translate the MEANING and write the way a Swahili speaker in Tanzania, Kenya or eastern Congo would say it. NEVER translate word for word. Many English phrases have no literal Swahili twin and sound strange or are not understood if copied. Examples:\n- "family tree" is NOT "mti wa familia": say "ukoo" (the family line), "nasaba", or "historia ya ukoo wetu". "family book" -> "kitabu cha familia" or "kitabu cha ukoo".\n- ancestors -> "mababu" / "wazee wa zamani"; grandparents -> "babu na bibi"; great-grandparent -> "babu/bibi mkubwa"; descendants -> "wazao" / "vizazi vyetu"; generation -> "kizazi"; heritage / legacy -> "urithi", "mila na desturi"; bloodline -> "ukoo", "damu moja"; roots -> "asili yetu".\n- relatives: cousin -> "binamu"; father\'s brother -> "baba mdogo" / "baba mkubwa"; mother\'s brother -> "mjomba"; father\'s sister -> "shangazi"; mother\'s sister -> "mama mdogo" / "mama mkubwa"; nephew or niece -> "mpwa"; in-laws -> "wakwe"; brother- or sister-in-law -> "shemeji"; spouse -> "mke" (wife) / "mume" (husband) / "mwenzi wake"; firstborn -> "mzaliwa wa kwanza" / "kifungua mimba"; last-born -> "kitinda mimba"; elders -> "wazee"; clan -> "ukoo" / "kabila".\n- life events: was born -> "alizaliwa"; passed away / died -> "alifariki" / "alifariki dunia"; he married -> "alimuoa", she married -> "aliolewa na"; raised -> "alilea"; moved -> "alihamia"; blessing -> "baraka"; memories -> "kumbukumbu"; story -> "hadithi" / "simulizi"; chapter -> "sura"; page -> "ukurasa"; "our family" -> "familia yetu".\n- Use everyday words, short clear sentences and natural word order. If an idea has no good Swahili word, explain it simply instead of inventing a word. Never use a rare or strange word you are not sure about.\n- WRITE AS A NATIVE AUTHOR, NOT AS A TRANSLATOR. Build every sentence the Swahili way (short, clear, with the right subject and tense markers) and join ideas with "na", "kisha", "baadaye", "hivyo", "ndipo". Never keep the shape of an English sentence.\n- KEEP IT PLAIN AND WARM. Drop flowery English phrases and pictures that do not work in Swahili ("the tree grew wider", "bloodlines shaped nations", "carried great destinies", "sacred story", "anchors the beginning") and say the plain fact instead. Never add big claims that the facts do not give.\n- Correct Swahili grammar: noun-class agreement (mtoto mmoja, watoto watatu, kijiji kimoja, vijiji vitatu), tenses (a-li- past, a-na- now, a-ta- future, a-me- done) and the right "wa / cha / la / ya / za / vya".\n- Write people\'s names with normal capitals (Ikungu Ele, Muteleka), never in ALL CAPITALS. Place names and dates stay as they are.\n- Example. English: "Through Ekama Pele the family grew, and he had three children: Muteleka, Bembesile and Nyakasi Ebulo." Good Swahili: "Familia iliendelea kukua kupitia Ekama Pele, aliyepata watoto watatu: Muteleka, Bembesile na Nyakasi Ebulo." Bad, word for word (never write like this): "Kupitia Ekama Pele, mti ulikua mpana zaidi, ukizaa watoto watatu wa msingi."\n',z:"AI is not available right now. Please try again later.",k:"No internet connection. Try again when you are online.",B:'PathMetricIterator is not pointing to a PathMetric. This can happen in two situations:\n- The iteration has not started yet. If so, call "moveNext" to start iteration.\n- The iterator ran out of elements. If so, check that "moveNext" returns true prior to calling "current".',A:"The AI could not do that just now. Nothing was changed.",y:"The AI could not translate the book. Nothing was changed."}
var x=(function rtii(){var w=A.at
return{e2:w("aTX"),cq:w("mq"),Q:w("rw"),r:w("bq<n,n>"),c5:w("aVU"),dY:w("aVV"),fH:w("MX"),de:w("alk"),dN:w("N4<G>"),gc:w("Et<G>"),A:w("eM<n?>"),e:w("Ix"),B:w("nB"),P:w("i4"),df:w("lA"),k:w("l3"),x:w("aB<~>"),U:w("O<a4D>"),V:w("O<ab>"),C:w("O<rw>"),O:w("O<t>"),c:w("O<MX>"),b:w("O<alk>"),ac:w("O<eM<n?>>"),I:w("O<nB>"),u:w("O<i4>"),J:w("O<lA>"),_:w("O<l3>"),cl:w("O<aB<ai<a9<n,@>>>>"),R:w("O<nE>"),eU:w("O<ai<+(F,F)>>"),ez:w("O<a9<n,aF>>"),gE:w("O<a9<n,n>>"),Y:w("O<a9<n,@>>"),fD:w("O<mW>"),bp:w("O<oP>"),g:w("O<r>"),ar:w("O<auQ>"),v:w("O<fZ>"),gy:w("O<aap>"),L:w("O<+(n,n)>"),G:w("O<+(F,F)>"),E:w("O<+(F,~())>"),bd:w("O<+(n,G,R)>"),bF:w("O<+count,id,name(G,n,n)>"),F:w("O<cT>"),s:w("O<n>"),cF:w("O<au>"),aS:w("O<jc>"),dT:w("O<bbg>"),p:w("O<v>"),Z:w("O<fm>"),D:w("O<lK>"),h:w("O<aAF>"),cC:w("O<bix>"),fp:w("O<KU>"),M:w("O<L0>"),gZ:w("O<aJp>"),gA:w("O<agf>"),e4:w("O<agm>"),dE:w("O<aLr>"),f7:w("O<R>"),n:w("O<F>"),t:w("O<G>"),dS:w("O<aC?>"),d4:w("O<n?>"),eF:w("cx<ah<af>>"),d:w("ai<nB>"),do:w("ai<i4>"),cg:w("ai<lA>"),ax:w("ai<l3>"),fO:w("ai<a9<n,@>>"),cz:w("ai<+(n,n)>"),bC:w("ai<+count,id,name(G,n,n)>"),dy:w("ai<n>"),er:w("ai<au>"),gk:w("ai<lK>"),j:w("ai<@>"),fK:w("bB<n,n>"),d2:w("bB<n,ai<a9<n,@>>>"),a:w("a9<n,@>"),f:w("a9<@,@>"),gv:w("N<n,IA>"),cM:w("N<G,n>"),w:w("iC"),g2:w("rU"),bV:w("aqd"),fL:w("cu"),K:w("aF"),dc:w("fZ"),fo:w("Py<G>"),fz:w("+(n,n)"),ei:w("+scope,text(n,n)"),bn:w("+games,limit(R,G)"),d9:w("+dx,hidden(F,ai<i4>)"),cs:w("+count,id,name(G,n,n)"),N:w("n"),fT:w("iE<i4>"),ec:w("iE<n>"),gW:w("rc<F>"),X:w("bs<F>"),bW:w("dH"),W:w("bg<n>"),b4:w("bg<G>"),cI:w("k8<n>"),av:w("Y<zD>"),cc:w("Y<n>"),l:w("v"),gF:w("fm"),fA:w("lK"),dO:w("GH"),bw:w("aeH<n?>"),cy:w("L2"),q:w("mf"),y:w("R"),i:w("F"),z:w("@"),S:w("G"),eK:w("ai<l3>?"),m:w("arB?"),cT:w("r?"),h5:w("+(n,n)?"),eo:w("+code,qrPayload,usesRemaining(n,n,G)?"),he:w("+qrPayload,token,usesRemaining(n,n,G)?"),gG:w("+members,trees,viewOnly(G,G,R)?"),az:w("qr?"),T:w("n?"),aD:w("dH?"),o:w("lK?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.b6h=new A.bf(B.fR,B.bJ,B.fR,B.bJ)
D.af6=new A.bf(B.fR,B.iq,B.fR,B.iq)
D.b6w=new A.bf(B.jy,B.bJ,B.bJ,B.bJ)
D.b6A=new A.ay(B.cW,1.4,B.r,-1)
D.b6K=new A.ay(B.ab,1,B.r,-1)
D.afC=new A.aY(140,1/0,0,1/0)
D.b87=new A.aY(0,1/0,64,1/0)
D.b8b=new A.aY(0,84,0,1/0)
D.afJ=new A.aY(130,1/0,0,1/0)
D.aE8=w([B.mb,B.rV,B.c],x.O)
D.caI=new A.a7(B.ay,B.aC,B.x,D.aE8,null,null)
D.b8X=new A.o(null,null,null,null,null,D.caI,B.n)
D.diR=w([B.aV,B.bQ],x.O)
D.ccS=new A.a7(B.aY,B.b3,B.x,D.diR,null,null)
D.b9h=new A.o(null,null,null,null,null,D.ccS,B.n)
D.YY=new A.t(1,0.0784313725490196,0.0784313725490196,0.16862745098039217,B.q)
D.fC=new A.t(1,0.16470588235294117,0.08235294117647059,0.0392156862745098,B.q)
D.dmY=w([B.dA,D.YY,D.fC],x.O)
D.c9V=new A.a7(B.aY,B.b3,B.x,D.dmY,null,null)
D.ba2=new A.o(null,null,null,null,null,D.c9V,B.n)
D.fAy=new A.H(!0,B.bV,null,null,null,null,34,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.hb7=new A.B("?",null,D.fAy,null,null,null,null,null,null,null,null,null)
D.bdT=new A.cj(B.z,null,null,D.hb7,null)
D.Ws=new A.H(!0,null,null,null,null,null,70,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fU7=new A.B("\ud83c\udf33",null,D.Ws,null,null,null,null,null,null,null,null,null)
D.agt=new A.cj(B.z,null,null,D.fU7,null)
D.fWN=new A.B("\ud83c\udfc6",null,As.L6,null,null,null,null,null,null,null,null,null)
D.be3=new A.cj(B.z,null,null,D.fWN,null)
D.bfU=new A.fi(null,null,null,null,null,E.kx,null,null,null,null)
D.agv=new A.cj(B.z,null,null,D.bfU,null)
D.kQ=new A.t(1,0.984313725490196,0.9529411764705882,0.8784313725490196,B.q)
D.fB6=new A.H(!0,D.kQ,null,null,null,null,15,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fVN=new A.B("No books on the shelf yet.",null,D.fB6,null,null,null,null,null,null,null,null,null)
D.eyN=new A.D(B.nK,D.fVN,null)
D.bej=new A.cj(B.z,null,null,D.eyN,null)
D.fIf=new A.H(!0,D.fC,null,null,null,null,16,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.hc2=new A.B("\ud83d\ude8c  On the road\u2026",null,D.fIf,null,null,null,null,null,null,null,null,null)
D.ezm=new A.D(B.cq,D.hc2,null)
D.beM=new A.cj(B.z,null,null,D.ezm,null)
D.aYi=new A.B("\ud83e\uddfa",null,D.Ws,null,null,null,null,null,null,null,null,null)
D.bf0=new A.cj(B.z,null,null,D.aYi,null)
D.fZf=new A.B("\ud83c\udfad",null,D.Ws,null,null,null,null,null,null,null,null,null)
D.bfb=new A.cj(B.z,null,null,D.fZf,null)
D.bfe=new A.cj(B.z,null,null,A7.YJ,null)
D.agQ=new A.t(1,0.8980392156862745,0.39215686274509803,0.3568627450980392,B.q)
D.agX=new A.t(1,0.08627450980392157,0.18823529411764706,0.12156862745098039,B.q)
D.bhw=new A.t(1,0.058823529411764705,0.1607843137254902,0.13333333333333333,B.q)
D.bhB=new A.t(1,0.16862745098039217,0.08627450980392157,0.03137254901960784,B.q)
D.bhN=new A.t(1,0.16862745098039217,0.14901960784313725,0.34509803921568627,B.q)
D.bhP=new A.t(1,0.7098039215686275,0.40784313725490196,0.22745098039215686,B.q)
D.bhR=new A.t(1,0.2901960784313726,0.22745098039215686,0.16470588235294117,B.q)
D.bhZ=new A.t(1,0.47843137254901963,0.22745098039215686,0.09411764705882353,B.q)
D.lG=new A.t(1,0.7058823529411765,0.3254901960784314,0.16470588235294117,B.q)
D.bi2=new A.t(0.6666666666666666,0,0,0.06274509803921569,B.q)
D.bi7=new A.t(1,0.12156862745098039,0.23921568627450981,0.16862745098039217,B.q)
D.bi9=new A.t(1,0.07058823529411765,0.03137254901960784,0.01568627450980392,B.q)
D.bia=new A.t(1,0.3568627450980392,0.4823529411764706,0.6509803921568628,B.q)
D.lH=new A.t(1,0.1803921568627451,0.6078431372549019,0.30980392156862746,B.q)
D.biO=new A.t(1,0.12156862745098039,0.2,0.12549019607843137,B.q)
D.BT=new A.t(1,0.47843137254901963,0.2901960784313726,0.1411764705882353,B.q)
D.biX=new A.t(1,0.8862745098039215,0.7529411764705882,0.4392156862745098,B.q)
D.bjg=new A.t(1,1,0.9568627450980393,0.8235294117647058,B.q)
D.bjj=new A.t(1,1,0.7764705882352941,0.4196078431372549,B.q)
D.bjp=new A.t(1,0.16470588235294117,0.35294117647058826,0.22745098039215686,B.q)
D.bjx=new A.t(1,0.2901960784313726,0.20784313725490197,0.1568627450980392,B.q)
D.ahC=new A.t(1,0.2901960784313726,0.24705882352941178,0.2901960784313726,B.q)
D.bjE=new A.t(1,0.30980392156862746,0.6392156862745098,0.8901960784313725,B.q)
D.Zb=new A.t(1,0.5411764705882353,0.48627450980392156,0.4,B.q)
D.ahF=new A.t(1,0.10196078431372549,0.0784313725490196,0.19607843137254902,B.q)
D.bjP=new A.t(1,0.12941176470588237,0.11764705882352941,0.2901960784313726,B.q)
D.Zd=new A.t(1,0.7490196078431373,0.9019607843137255,1,B.q)
D.bk9=new A.t(1,0.3333333333333333,0.2196078431372549,0.1803921568627451,B.q)
D.ahR=new A.t(1,0.12156862745098039,0.07450980392156863,0.043137254901960784,B.q)
D.bky=new A.t(0.13333333333333333,0.7215686274509804,0.6901960784313725,1,B.q)
D.bkO=new A.t(1,0.043137254901960784,0.043137254901960784,0.12549019607843137,B.q)
D.bld=new A.t(1,1,0.47843137254901963,0.10196078431372549,B.q)
D.blo=new A.t(1,0.48627450980392156,0.41568627450980394,0.27450980392156865,B.q)
D.Gd=new A.t(1,0.8509803921568627,0.8235294117647058,0.7529411764705882,B.q)
D.blN=new A.t(1,0.8980392156862745,0.8627450980392157,0.7843137254901961,B.q)
D.blQ=new A.t(1,0.10196078431372549,0.16470588235294117,0.22745098039215686,B.q)
D.blU=new A.t(1,0.23137254901960785,0.13725490196078433,0.0784313725490196,B.q)
D.aij=new A.t(1,0.47843137254901963,0.35294117647058826,0.1803921568627451,B.q)
D.bma=new A.t(1,0.1411764705882353,0.10588235294117647,0.24705882352941178,B.q)
D.bmg=new A.t(1,0.5411764705882353,0.35294117647058826,0.16470588235294117,B.q)
D.bmn=new A.t(1,0.35294117647058826,0.26666666666666666,0.1411764705882353,B.q)
D.ain=new A.t(1,0.788235294117647,0.5215686274509804,0.16862745098039217,B.q)
D.bmw=new A.t(1,0.2901960784313726,0.2627450980392157,0.3137254901960784,B.q)
D.bn_=new A.t(1,0.6039215686274509,0.47843137254901963,0.33725490196078434,B.q)
D.bn8=new A.t(1,0.16470588235294117,0.11372549019607843,0.10588235294117647,B.q)
D.bnb=new A.t(1,0.4196078431372549,0.30980392156862746,0.2,B.q)
D.bnh=new A.t(1,0.22745098039215686,0.16862745098039217,0.3607843137254902,B.q)
D.aiD=new A.t(1,0.7215686274509804,0.7372549019607844,0.8470588235294118,B.q)
D.bnV=new A.t(0.3333333333333333,1,0.9529411764705882,0.7686274509803922,B.q)
D.aj1=new A.t(1,0.5411764705882353,0.41568627450980394,0.2823529411764706,B.q)
D.boU=new A.t(1,0.22745098039215686,0.058823529411764705,0.06274509803921569,B.q)
D.ajd=new A.t(1,0.9137254901960784,0.8470588235294118,0.7058823529411765,B.q)
D.bpj=new A.t(1,1,0.6039215686274509,0.12156862745098039,B.q)
D.Gq=new A.t(1,0.2901960784313726,0.17254901960784313,0.0784313725490196,B.q)
D.bpq=new A.t(1,0.7215686274509804,0.7372549019607844,0.7843137254901961,B.q)
D.bpA=new A.t(1,0.16470588235294117,0.17254901960784313,0.41568627450980394,B.q)
D.bpC=new A.t(1,0.35294117647058826,0.12156862745098039,0.12156862745098039,B.q)
D.ajh=new A.t(1,0.22745098039215686,0.35294117647058826,0.20392156862745098,B.q)
D.bpU=new A.t(1,0.08627450980392157,0.2196078431372549,0.12156862745098039,B.q)
D.bpW=new A.t(1,0.09411764705882353,0.08627450980392157,0.2196078431372549,B.q)
D.bpZ=new A.t(1,0.9607843137254902,0.9411764705882353,0.8784313725490196,B.q)
D.ajp=new A.t(1,0.10196078431372549,0.06274509803921569,0.09411764705882353,B.q)
D.a__=new A.t(1,0.10196078431372549,0.058823529411764705,0.03137254901960784,B.q)
D.bqm=new A.t(1,0.5411764705882353,0.41568627450980394,0.2196078431372549,B.q)
D.bqI=new A.t(1,1,0.7058823529411765,0.32941176470588235,B.q)
D.bqN=new A.t(1,0.9568627450980393,1,0.6901960784313725,B.q)
D.ajC=new A.t(1,1,0.5411764705882353,0.11764705882352941,B.q)
D.bqU=new A.t(1,0.4196078431372549,0.2901960784313726,0.22745098039215686,B.q)
D.a_5=new A.t(1,0.7058823529411765,0.47058823529411764,0.22745098039215686,B.q)
D.brg=new A.t(1,0.4196078431372549,0.35294117647058826,0.22745098039215686,B.q)
D.brh=new A.t(1,0.9098039215686274,0.9333333333333333,0.9607843137254902,B.q)
D.Gy=new A.t(1,0.47843137254901963,0.24313725490196078,0.11372549019607843,B.q)
D.bs5=new A.t(1,0.2901960784313726,0.22745098039215686,0.11764705882352941,B.q)
D.bsJ=new A.t(1,0.1843137254901961,0.36470588235294116,0.22745098039215686,B.q)
D.bsP=new A.t(1,1,0.7686274509803922,0.4196078431372549,B.q)
D.bsT=new A.t(0,0.3333333333333333,0.2196078431372549,0.1803921568627451,B.q)
D.qq=new A.t(1,1,0.9529411764705882,0.8627450980392157,B.q)
D.bt3=new A.t(1,0.8980392156862745,0.25882352941176473,0.10588235294117647,B.q)
D.bt7=new A.t(1,0.08235294117647059,0.11372549019607843,0.16862745098039217,B.q)
D.btd=new A.t(0.4,1,0.9450980392156862,0.7215686274509804,B.q)
D.btf=new A.t(1,0.4196078431372549,0.2901960784313726,0.16470588235294117,B.q)
D.akn=new A.t(1,0.7098039215686275,0.396078431372549,0.11372549019607843,B.q)
D.akr=new A.t(1,0.8509803921568627,0.6980392156862745,0.4196078431372549,B.q)
D.GE=new A.t(1,0.5411764705882353,0.35294117647058826,0.2,B.q)
D.a_q=new A.t(0.13333333333333333,0.7215686274509804,0.6039215686274509,0.35294117647058826,B.q)
D.akA=new A.t(1,0.3568627450980392,0.22745098039215686,0.13333333333333333,B.q)
D.but=new A.t(1,0.23137254901960785,0.16470588235294117,0.4196078431372549,B.q)
D.buM=new A.t(1,1,0.6039215686274509,0.1803921568627451,B.q)
D.bvd=new A.t(1,1,0.9411764705882353,0.6274509803921569,B.q)
D.bvm=new A.t(1,0.788235294117647,0.6274509803921569,0.30980392156862746,B.q)
D.akZ=new A.t(1,0.8470588235294118,0.796078431372549,0.6901960784313725,B.q)
D.a_C=new A.t(1,0.4196078431372549,0.35294117647058826,0.34509803921568627,B.q)
D.bvw=new A.t(1,0.4196078431372549,0.2901960784313726,0.2196078431372549,B.q)
D.bvN=new A.t(1,0.34509803921568627,0.3764705882352941,0.43137254901960786,B.q)
D.a_I=new A.t(1,0.22745098039215686,0.16470588235294117,0.13333333333333333,B.q)
D.bw3=new A.t(1,0.8509803921568627,0.7843137254901961,0.6274509803921569,B.q)
D.bwk=new A.t(1,0.5450980392156862,0.17254901960784313,0.23137254901960785,B.q)
D.a_N=new A.t(1,0.06666666666666667,0.058823529411764705,0.16470588235294117,B.q)
D.bwp=new A.t(1,0.8509803921568627,0.3843137254901961,0.3568627450980392,B.q)
D.alg=new A.t(1,1,0.9098039215686274,0.6901960784313725,B.q)
D.ali=new A.t(1,0.3568627450980392,0.22745098039215686,0.07058823529411765,B.q)
D.bwI=new A.t(1,0.8509803921568627,0.7607843137254902,0.611764705882353,B.q)
D.alo=new A.t(1,0.10196078431372549,0.1411764705882353,0.2,B.q)
D.bx9=new A.t(1,0.9019607843137255,0.8117647058823529,0.6274509803921569,B.q)
D.bxd=new A.t(1,0.5411764705882353,0.47843137254901963,0.4,B.q)
D.bxk=new A.t(1,0.8509803921568627,1,0.41568627450980394,B.q)
D.bxt=new A.t(1,0.10196078431372549,0.10196078431372549,0.12156862745098039,B.q)
D.bxC=new A.t(1,0.29411764705882354,0.4196078431372549,0.47843137254901963,B.q)
D.byc=new A.t(1,0.8980392156862745,0.7529411764705882,0.47843137254901963,B.q)
D.byI=new A.t(1,0.9607843137254902,0.8705882352941177,0.7019607843137254,B.q)
D.fPW=new A.B("None \u2014 root ancestor",null,null,null,null,null,null,null,null,null,null,null)
D.bCe=new A.eM(null,D.fPW,B.fd,null,x.A)
D.fZ6=new A.B("None",null,null,null,null,null,null,null,null,null,null,null)
D.bCg=new A.eM(null,D.fZ6,B.fd,null,x.A)
D.bCO=new A.be(38e5)
D.bDx=new A.ix(0,10,0,10)
D.bDG=new A.Q(0,1,0,0)
D.bDR=new A.ix(0,4,0,4)
D.bDU=new A.Q(0,4,5,0)
D.bE9=new A.Q(10,10,14,10)
D.bEk=new A.ix(10,4,10,4)
D.bEt=new A.ix(10,8,10,8)
D.bEu=new A.Q(10,8,8,8)
D.bEZ=new A.Q(12,6,12,2)
D.bFg=new A.Q(14,0,14,6)
D.bFk=new A.Q(14,10,6,6)
D.bFl=new A.Q(14,12,14,0)
D.bFp=new A.Q(14,12,14,8)
D.bFs=new A.Q(14,12,8,14)
D.bFw=new A.ix(14,14,14,14)
D.bFP=new A.Q(14,6,14,40)
D.bFS=new A.Q(14,8,14,30)
D.bGf=new A.Q(16,2,16,10)
D.bGo=new A.Q(16,6,16,30)
D.bGq=new A.Q(16,6,16,8)
D.bGF=new A.Q(18,10,18,4)
D.bGH=new A.Q(18,12,18,0)
D.bGO=new A.Q(18,14,12,4)
D.anQ=new A.Q(18,16,18,8)
D.bH4=new A.Q(18,20,18,22)
D.bHa=new A.Q(18,30,18,30)
D.bHs=new A.Q(20,10,12,20)
D.bHv=new A.Q(20,11,20,11)
D.bHH=new A.Q(20,18,16,18)
D.bHJ=new A.Q(20,18,20,6)
D.bIy=new A.Q(24,32,24,28)
D.bIz=new A.Q(24,36,24,32)
D.bIC=new A.Q(26,26,24,14)
D.bIR=new A.Q(2,4,2,8)
D.bIV=new A.Q(30,0,30,0)
D.bJ5=new A.Q(38,22,22,22)
D.aod=new A.Q(40,24,24,24)
D.bJ7=new A.ix(40,40,40,40)
D.bJ9=new A.Q(46,30,30,30)
D.bJB=new A.Q(56,40,40,40)
D.bJF=new A.Q(1.25,1.25,1.25,1.25)
D.bJG=new A.Q(60,0,60,0)
D.bJK=new A.Q(6,14,6,16)
D.bJO=new A.Q(6,4,12,0)
D.bJS=new A.Q(6,6,10,2)
D.bJZ=new A.ix(7,3,7,3)
D.bKv=new A.Q(5,1.5,5,1.5)
D.bKG=new A.Q(6,2.5,6,2.5)
D.h6i=new A.B("Family Games",null,B.jR,null,null,null,null,null,null,null,null,null)
D.fOx=new A.B("Quizzes, stories by the fire and tests made from the people in this tree. Win Family Stars.",null,B.Wj,null,null,null,null,null,null,null,null,null)
D.cM3=w([D.h6i,D.fOx],x.p)
D.bzI=new A.fp(B.ah,B.e,B.i,B.E,null,B.p,null,0,D.cM3,null)
D.bL6=new A.bz(1,B.bd,D.bzI,null)
D.haF=new A.B("Signature",null,B.nf,null,null,null,null,null,null,null,null,null)
D.bL9=new A.bz(1,B.bd,D.haF,null)
D.h2Q=new A.B("MADE BY THE ONE WHO PLANTED THE TREE",null,T.u2,null,null,null,null,null,null,null,null,null)
D.bLH=new A.bz(1,B.bd,D.h2Q,null)
D.h7L=new A.B("Tell the AI what to fix",null,B.dl,null,null,null,null,null,null,null,null,null)
D.bLZ=new A.bz(1,B.bd,D.h7L,null)
D.fJ1=new A.H(!0,B.c,null,null,null,null,22,B.u,null,null,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h9K=new A.B("Worksheets",null,D.fJ1,null,null,null,null,null,null,null,null,null)
D.fJd=new A.H(!0,E.ahl,null,null,null,null,13,B.cD,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h8B=new A.B("Track your project spending",null,D.fJd,null,null,null,null,null,null,null,null,null)
D.da1=w([D.h9K,B.ax,D.h8B],x.p)
D.bzl=new A.fp(B.ah,B.e,B.i,B.E,null,B.p,null,0,D.da1,null)
D.bM4=new A.bz(1,B.bd,D.bzl,null)
D.fDX=new A.H(!0,E.kx,null,null,null,null,18,B.u,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fP6=new A.B("FAMILY LIBRARY",null,D.fDX,null,null,null,null,null,null,null,null,null)
D.bMn=new A.bz(1,B.bd,D.fP6,null)
D.Pa=new C.Ix("leather","","",0,"gold",25,"middle","double","leather","",!0,"classic")
D.wM=new C.Iy(0,"male")
D.oB=new C.Iy(1,"female")
D.zf=new C.Iy(2,"unknown")
D.uS=new C.amE(0,"owner")
D.Pb=new C.amE(1,"editor")
D.kZ=new C.amE(2,"viewer")
D.aqa=new A.a_(61199,"MaterialIcons",!1)
D.bRI=new A.a_(61504,"MaterialIcons",!1)
D.bRJ=new A.a_(61505,"MaterialIcons",!1)
D.bRL=new A.a_(61587,"MaterialIcons",!1)
D.bRS=new A.a_(61890,"MaterialIcons",!1)
D.bSL=new A.a_(63034,"MaterialIcons",!0)
D.bT2=new A.a_(63153,"MaterialIcons",!1)
D.bTA=new A.a_(63429,"MaterialIcons",!1)
D.asf=new A.a_(984520,"MaterialIcons",!1)
D.bSg=new A.a_(62776,"MaterialIcons",!1)
D.bVY=new A.ae(D.bSg,26,B.b2,null,null,null)
D.bQG=new A.a_(57648,"MaterialIcons",!1)
D.bWh=new A.ae(D.bQG,14,B.c,null,null,null)
D.bWz=new A.ae(B.HG,17,null,null,null,null)
D.bWF=new A.ae(B.PG,null,B.bQ,null,null,null)
D.bX4=new A.ae(E.a3m,null,null,null,null,null)
D.bX7=new A.ae(B.jb,18,E.kx,null,null,null)
D.a36=new A.a_(62044,"MaterialIcons",!1)
D.bXd=new A.ae(D.a36,null,B.aV,null,null,null)
D.bXk=new A.ae(B.zs,18,B.c,null,null,null)
D.bY1=new A.ae(B.e9,16,null,null,null,null)
D.bY8=new A.ae(D.a36,32,B.aV,null,null,null)
D.bYr=new A.ae(E.aqb,18,B.cW,null,null,null)
D.bZx=new A.ae(B.HR,22,B.aA,null,null,null)
D.bZK=new A.ae(B.e9,22,B.b2,null,null,null)
D.bZX=new A.ae(Y.a3b,22,B.c,null,null,null)
D.c_3=new A.ae(B.v1,52,B.c,null,null,null)
D.c_d=new A.ae(B.HR,30,B.aA,null,null,null)
D.c_x=new A.ae(B.a3q,null,B.c,null,null,null)
D.asZ=new A.ae(B.vd,22,B.c,null,null,null)
D.c_G=new A.ae(B.e9,17,null,null,null,null)
D.c03=new A.ae(B.wZ,26,B.cW,null,null,null)
D.c0Q=new A.ae(B.a3C,16,null,null,null,null)
D.c1C=new A.ae(B.v1,24,B.c,null,null,null)
D.c1H=new A.ae(B.PE,20,B.tB,null,null,null)
D.c1M=new A.ae(B.HE,null,B.bQ,null,null,null)
D.c1V=new A.ae(B.jb,18,B.c,null,null,null)
D.c2B=new A.ae(B.cB,22,B.ab,null,null,null)
D.c3u=new A.ae(B.ej,16,B.ab,null,null,null)
D.c3G=new A.ae(D.a36,20,B.aV,null,null,null)
D.atp=new A.ae(B.hd,20,null,null,null,null)
D.c4c=new A.ae(B.cB,18,D.kQ,null,null,null)
D.c4u=new A.ae(B.zC,28,B.c,null,null,null)
D.c4G=new A.ae(B.Pu,null,B.fj,null,null,null)
D.c50=new A.ae(B.zC,24,B.c,null,null,null)
D.c5s=new A.ae(B.v1,null,B.aV,null,null,null)
D.c5t=new A.ae(B.js,20,B.cW,null,null,null)
D.c5N=new A.ae(B.HG,16,null,null,null,null)
D.c7l=new A.e9(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,!0,B.k6,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,B.eN,!0,null,null,null,null)
D.au8=new C.a6S(10,null)
D.c7R=new C.a6S(12,null)
D.c7S=new C.a6S(14,null)
D.dr7=w([B.bv,B.aV,B.fq,B.b2],x.O)
D.c92=new A.a7(B.ay,B.aC,B.x,D.dr7,null,null)
D.brR=new A.t(1,0.5411764705882353,0.35294117647058826,0.16862745098039217,B.q)
D.byj=new A.t(1,0.23137254901960785,0.13725490196078433,0.07058823529411765,B.q)
D.d6q=w([D.brR,D.byj],x.O)
D.c9e=new A.a7(B.aY,B.b3,B.x,D.d6q,null,null)
D.dkV=w([B.ff,B.fX,B.fq],x.O)
D.c9k=new A.a7(B.ay,B.aC,B.x,D.dkV,null,null)
D.akb=new A.t(1,0.16470588235294117,0.09019607843137255,0.047058823529411764,B.q)
D.bib=new A.t(1,0.08627450980392157,0.043137254901960784,0.0196078431372549,B.q)
D.d8F=w([D.akb,D.bib],x.O)
D.c9W=new A.a7(B.aY,B.b3,B.x,D.d8F,null,null)
D.bm2=new A.t(1,0.2901960784313726,0.16470588235294117,0.08235294117647059,B.q)
D.aDp=w([D.bm2,D.akb],x.O)
D.cae=new A.a7(B.ay,B.aC,B.x,D.aDp,null,null)
D.aiV=new A.t(1,0.6039215686274509,0.3176470588235294,0.1568627450980392,B.q)
D.boL=new A.t(1,0.35294117647058826,0.16470588235294117,0.07058823529411765,B.q)
D.djY=w([D.aiV,D.boL],x.O)
D.caU=new A.a7(B.a5,B.a9,B.x,D.djY,null,null)
D.dyl=w([B.bD,B.nw],x.O)
D.caW=new A.a7(B.aY,B.b3,B.x,D.dyl,null,null)
D.brM=new A.t(1,0.9137254901960784,0.8509803921568627,0.7019607843137254,B.q)
D.dzi=w([D.brM,D.kQ,D.kQ,I.NF],x.O)
D.dBZ=w([0,0.07,0.9,1],x.n)
D.cbr=new A.a7(B.a5,B.a9,B.x,D.dzi,D.dBZ,null)
D.cbA=new A.a7(B.ay,B.aC,B.x,B.Tm,null,null)
D.d46=w([B.aD,D.lG],x.O)
D.cbD=new A.a7(B.a5,B.a9,B.x,D.d46,null,null)
D.dxT=w([B.b2,B.aV,B.bQ],x.O)
D.ccF=new A.a7(B.ay,B.aC,B.x,D.dxT,null,null)
D.cgZ=w([10,20,30],x.t)
D.cqX=w([-1,-0.4,0.3,1],x.n)
D.cyq=w([B.bv,B.b2,B.ff],x.O)
D.cyy=w([B.bh,B.aD,B.kw],x.O)
D.cyA=w(["\xd7","\xf7","100","0","\u221e","%"],x.s)
D.czi=w([30,140,262,360],x.n)
D.bq4=new A.t(1,0.07058823529411765,0.20784313725490197,0.1803921568627451,B.q)
D.cER=w([D.bq4,E.ajM],x.O)
D.eto=new A.r(1,2)
D.flQ=new A.cT(B.b5,D.eto,3)
D.aAh=w([D.flQ],x.F)
D.cMk=w([B.h8,B.cj,B.fB],x.O)
D.cP6=w([B.bP,B.by,B.bs],x.O)
D.bNd=new C.uV("classic","Classic leather","Gold-edged brown leather",D.aDp,E.kx,E.kx,"\u2766",B.K,!0,!1,!1,!1)
D.bhg=new A.t(1,0.23137254901960785,0.12156862745098039,0.054901960784313725,B.q)
D.bx_=new A.t(1,0.10980392156862745,0.058823529411764705,0.027450980392156862,B.q)
D.dbQ=w([D.bhg,D.bx_],x.O)
D.ajP=new A.t(1,0.9490196078431372,0.8235294117647058,0.47843137254901963,B.q)
D.bN8=new C.uV("ornate","Ornate gold","Double gold border and flourishes",D.dbQ,D.ajP,D.ajP,"\u2726",B.K,!0,!0,!0,!1)
D.blz=new A.t(1,0.9647058823529412,0.9137254901960784,0.7843137254901961,B.q)
D.bsD=new A.t(1,0.9019607843137255,0.8274509803921568,0.6392156862745098,B.q)
D.d2X=w([D.blz,D.bsD],x.O)
D.bN7=new C.uV("parchment","Parchment","Old paper with dark ink",D.d2X,D.Gy,L.j6,"\u2767",B.K,!0,!1,!1,!0)
D.agZ=new A.t(1,0.984313725490196,0.9686274509803922,0.9333333333333333,B.q)
D.bva=new A.t(1,0.9450980392156862,0.9176470588235294,0.8588235294117647,B.q)
D.dw0=w([D.agZ,D.bva],x.O)
D.bpx=new A.t(1,0.6039215686274509,0.5607843137254902,0.47058823529411764,B.q)
D.bun=new A.t(1,0.16862745098039217,0.16862745098039217,0.16862745098039217,B.q)
D.bNa=new C.uV("minimal","Clean paper","Plain and elegant, like a printed book",D.dw0,D.bpx,D.bun,"",B.K,!0,!0,!1,!0)
D.bNc=new C.uV("midnight","Midnight","Deep blue with silver stars",K.aDI,B.cA,B.ci,"\u2727",B.K,!0,!0,!1,!1)
D.bN6=new C.uV("emerald","Emerald library","Green cloth, title on the left",W.aAH,E.kx,B.fZ,"\u25c6",B.b6,!0,!1,!1,!1)
D.bvF=new A.t(1,0.24705882352941178,0.0392156862745098,0.0392156862745098,B.q)
D.dtZ=w([B.eq,D.bvF],x.O)
D.bqT=new A.t(1,0.9411764705882353,0.6588235294117647,0.7215686274509804,B.q)
D.bsa=new A.t(1,0.9882352941176471,0.9058823529411765,0.9254901960784314,B.q)
D.bNb=new C.uV("rose","Rose vintage","Burgundy with rose-gold lettering",D.dtZ,D.bqT,D.bsa,"\u2740",B.K,!0,!1,!0,!1)
D.dyU=w([B.ct,F.mX],x.O)
D.bN9=new C.uV("modern","Modern","Dark, bold, left-aligned",D.dyU,B.aH,B.c,"",B.b6,!1,!0,!1,!1)
D.a5G=w([D.bNd,D.bN8,D.bN7,D.bNa,D.bNc,D.bN6,D.bNb,D.bN9],A.at("O<uV>"))
D.cS7=w(["Nairobi","Lagos","Accra","Kampala","Dar es Salaam","Kigali","Addis Ababa","Dakar"],x.s)
D.dyH=w(["I am because we are","Good morning","Big river","Come and eat"],x.s)
D.bNo=new C.lA('What does "Ubuntu" mean?',D.dyH,0,"Ubuntu means a person is a person through other people.","Listen, children. Ubuntu is an old word: I am because we are. Nobody grows alone.","culture",20)
D.d4P=w(["Bibi","Babu","Dada","Kaka"],x.s)
D.bNr=new C.lA("In Swahili, what do we call a grandmother?",D.d4P,0,"Bibi is grandmother. Babu is grandfather.","Your grandmother is Bibi, and your grandfather is Babu. Say it with respect.","culture",20)
D.d4G=w(["Babu","Mama","Baba","Dada"],x.s)
D.bNm=new C.lA("In Swahili, what do we call a grandfather?",D.d4G,0,"Babu is grandfather.","Babu is the grandfather, the one who keeps the old stories.","culture",20)
D.d60=w(["Dada","Kaka","Bibi","Mtoto"],x.s)
D.bNq=new C.lA("What is a sister called in Swahili?",D.d60,0,"Dada is sister. Kaka is brother.","A sister is Dada and a brother is Kaka. Brothers and sisters carry each other.","culture",20)
D.dbf=w(["Kaka","Dada","Babu","Mzee"],x.s)
D.bNn=new C.lA("What is a brother called in Swahili?",D.dbf,0,"Kaka is brother.","A brother is Kaka. Look after your Kaka and your Dada.","culture",20)
D.d4F=w(["Baba","Mama","Bibi","Kaka"],x.s)
D.bNy=new C.lA("Which word means father in Swahili?",D.d4F,0,"Baba is father and Mama is mother.","Baba is father and Mama is mother. They are the roots of the home.","culture",20)
D.dzT=w(["Unity is strength","Rain is coming","The market is open","The night is long"],x.s)
D.bNx=new C.lA('"Umoja ni nguvu" means...',D.dzT,0,"Together we are strong.","Umoja ni nguvu: unity is strength. One stick breaks, but a bundle of sticks does not.","culture",20)
D.dwL=w(["Little by little fills the measure","Big rivers need bridges","Cows love green grass","Fire needs wood"],x.s)
D.bNz=new C.lA('"Haba na haba hujaza kibaba" teaches us...',D.dwL,0,"Small steps add up to great things.","Haba na haba hujaza kibaba: little by little fills the measure. Patience builds a family.","culture",20)
D.d8O=w(["Everyone helps to raise the children","Villages must be big","Children build houses","Only parents teach"],x.s)
D.bNw=new C.lA('The African saying "It takes a village to raise a child" means...',D.d8O,0,"Aunts, uncles, elders and neighbours all help.","It takes a whole village to raise a child. Aunties, uncles, elders and neighbours all teach.","culture",20)
D.dAc=w(["The elders","The market","The river","The drum"],x.s)
D.bNs=new C.lA("Who is the traditional keeper of the family stories?",D.dAc,0,"Elders hold the memory of the family.","The elders are a library that walks. When an elder is gone, a library burns, so we listen while we can.","culture",20)
D.cWn=w(["To share stories and wisdom","To race each other","To hide from the sun","To count cows"],x.s)
D.bNp=new C.lA("Why do families sit round the fire at night?",D.cWn,0,"The fire is where the old teach the young.","At night we sit round the fire. The flames are warm, and the stories are warmer.","culture",20)
D.dyW=w(["Let us all pull together","A kind of fish","A long road","A rain dance"],x.s)
D.bNu=new C.lA('What does "Harambee" mean?',D.dyW,0,"Harambee: everyone pulls together.","Harambee! It means let us all pull together, like many hands on one rope.","culture",20)
D.de6=w(["An elder","A baby","A market","A cow"],x.s)
D.bNt=new C.lA('"Mzee" is a respectful word for...',D.de6,0,"We honour our Mzee.","Mzee is how we greet an elder with honour. We bow our heads and listen.","culture",20)
D.dtP=w(["Respect for an elder","Hunger","Sleepiness","A race"],x.s)
D.bNv=new C.lA('What does "Shikamoo" show?',D.dtP,0,"Children greet elders with Shikamoo, and the elder answers Marahaba.","Shikamoo is how a child greets an elder, and the elder says Marahaba. Respect travels both ways.","culture",20)
D.aAC=w([D.bNo,D.bNr,D.bNm,D.bNq,D.bNn,D.bNy,D.bNx,D.bNz,D.bNw,D.bNs,D.bNp,D.bNu,D.bNt,D.bNv],x.J)
D.d_O=w([90,360],x.n)
D.d2u=w([B.bQ,B.bp],x.O)
D.brz=new A.t(1,0.9372549019607843,0.9647058823529412,0.9372549019607843,B.q)
D.d38=w([D.agZ,D.brz],x.O)
D.d3Q=w([-1,-0.3,0.4,1],x.n)
D.d4L=w([0,0.45,0.72,0.92,1],x.n)
D.blv=new A.t(1,0.054901960784313725,0.10196078431372549,0.09019607843137255,B.q)
D.d53=w([D.blv,B.bA],x.O)
D.bjb=new A.t(1,0.4196078431372549,0.1803921568627451,0.37254901960784315,B.q)
D.aly=new A.t(1,0.8784313725490196,0.5411764705882353,0.27058823529411763,B.q)
D.d5F=w([B.dA,D.bjb,D.aly],x.O)
D.d6H=w([B.ba,B.jl,B.pj],x.O)
D.bm3=new A.t(1,0.23137254901960785,0.16862745098039217,0.20392156862745098,B.q)
D.bue=new A.t(1,0.22745098039215686,0.1568627450980392,0.1411764705882353,B.q)
D.biS=new A.t(1,0.1411764705882353,0.09019607843137255,0.0784313725490196,B.q)
D.d6M=w([D.bm3,D.bue,D.biS],x.O)
D.d76=w(["Rewrite the whole book in natural, professional Swahili","Correct the spelling in the whole book",'Change the word "tree" to the right Swahili word',"Use simple words everyone understands","Make every page a little shorter"],x.s)
D.d7h=w(["Really, Babu?","Eh! I did not know that.","Tell us more!","Wow...","Mmm, I see.","Ooh, that is a good one."],x.s)
D.hFC=new C.ael(78,424,48,44,56)
D.hFA=new C.ael(214,396,34,34,42)
D.hFB=new C.ael(442,452,56,50,64)
D.aBA=w([D.hFC,D.hFA,D.hFB],A.at("O<ael>"))
D.d7R=w(["Farmer","Teacher","Nurse","Driver","Builder","Trader","Doctor","Tailor"],x.s)
D.bi4=new A.t(1,0.4196078431372549,0.19607843137254902,0.08627450980392157,B.q)
D.bnU=new A.t(1,0.2901960784313726,0.13333333333333333,0.06274509803921569,B.q)
D.dBV=w([D.aiV,D.bi4,D.bnU],x.O)
D.bNe=new C.uW("leather","Leather",D.dBV,"vintage")
D.df7=w([B.dh,B.Go,Aa.Zt],x.O)
D.bNl=new C.uW("midnight","Midnight",D.df7,"starry")
D.d6I=w([B.ep,B.ec,B.ll],x.O)
D.bNk=new C.uW("forest","Forest",D.d6I,"story")
D.dE0=w([B.er,B.eq,B.kz],x.O)
D.bNh=new C.uW("burgundy","Burgundy",D.dE0,"royal")
D.cOF=w([B.aD,B.mR,B.nn],x.O)
D.bNi=new C.uW("royal","Royal",D.cOF,"royal")
D.d9k=w([B.by,B.ct,F.mX],x.O)
D.bNf=new C.uW("charcoal","Charcoal",D.d9k,"geo")
D.dC3=w([B.c9,B.dN,B.yw],x.O)
D.bNj=new C.uW("sunset","Sunset",D.dC3,"sunset")
D.dCO=w([B.jl,B.yz,B.Zx],x.O)
D.bNg=new C.uW("ocean","Ocean",D.dCO,"band")
D.A5=w([D.bNe,D.bNl,D.bNk,D.bNh,D.bNi,D.bNf,D.bNj,D.bNg],A.at("O<uW>"))
D.d9R=w(["classic","ornate","parchment","minimal","midnight","emerald","rose","modern"],x.s)
D.dax=w([B.an,B.aL,B.a_],x.O)
D.dbV=w([B.eq,B.ec,B.dh,B.iL,B.yB,B.cW,B.k1,B.cR,B.d6],x.O)
D.dbW=w(["Make the cover dark blue with silver letters","Put the title at the top and make it bigger","Use a star sky and a heart picture","Add our family name under the title"],x.s)
D.flR=new A.cT(B.dB,B.dM,8)
D.dc5=w([D.flR],x.F)
D.dde=w([B.c4,B.dN,B.jX],x.O)
D.bk2=new A.t(1,0.0196078431372549,0.03137254901960784,0.12156862745098039,B.q)
D.boc=new A.t(1,0.22745098039215686,0.16470588235294117,0.3843137254901961,B.q)
D.bsy=new A.t(1,0.5411764705882353,0.2901960784313726,0.3686274509803922,B.q)
D.ddv=w([D.bk2,G.akk,D.boc,D.bsy,D.aly],x.O)
D.ddM=w(["each","pcs","boxes","bags","hours","days","sq ft","gallons","lbs","ft","other"],x.s)
D.ddX=w(["Yes! \ud83c\udf89","Hongera!","We did it!","Eeh, well done!"],x.s)
D.bhs=new A.t(1,0.8509803921568627,0.6431372549019608,0.2549019607843137,B.q)
D.bny=new A.t(1,0.5411764705882353,0.35294117647058826,0.11764705882352941,B.q)
D.dep=w([D.bhs,D.ain,D.bny],x.O)
D.df2=w([B.c4,B.hJ],x.O)
D.df8=w([G.np,B.ic,G.aha,B.cV],x.O)
D.dgM=w([B.cV,G.np,B.ic,D.lH,B.cV],x.O)
D.dho=w([B.aQ,B.yx,B.yn],x.O)
D.aCC=w(["True","False"],x.s)
D.eQJ=new A.y(-0.65,0.6)
D.f2r=new A.y(-0.2,0.95)
D.f3y=new A.y(0.25,0.95)
D.eUd=new A.y(0.7,0.6)
D.f47=new A.y(1,0.1)
D.dib=w([Ar.Vb,D.eQJ,D.f2r,D.f3y,D.eUd,D.f47],x.G)
D.bqn=new A.t(1,0.5411764705882353,0.35294117647058826,0.2823529411764706,B.q)
D.bwS=new A.t(1,0.4196078431372549,0.25098039215686274,0.20392156862745098,B.q)
D.bl2=new A.t(1,0.24705882352941178,0.1450980392156863,0.18823529411764706,B.q)
D.dih=w([D.bqn,D.bwS,D.bl2],x.O)
D.dim=w([B.bL,B.bY,B.dy,B.aQ],x.O)
D.diS=w([B.hL,B.c9,B.ut],x.O)
D.djg=w(["kahoot","fire","catch","plant","who","journey","lineup","school"],x.s)
D.djr=w([B.ff,B.cW],x.O)
D.brV=new A.t(1,0.1411764705882353,0.2980392156862745,0.21176470588235294,B.q)
D.djT=w([D.brV,D.agX],x.O)
D.dk4=w([B.cP,B.fL,B.h_],x.O)
D.dkg=w([B.aH,B.bp,B.dh],x.O)
D.dkS=w([B.ew,B.dn,B.ec],x.O)
D.dlc=w([B.dX,B.dh,B.Go],x.O)
D.dlg=w([B.bt,B.mO,B.d6],x.O)
D.dlx=w(["\ud83e\udd47","\ud83e\udd48","\ud83e\udd49"],x.s)
D.br7=new A.t(1,0.6352941176470588,0.4745098039215686,0.24313725490196078,B.q)
D.bpf=new A.t(1,0.27450980392156865,0.20392156862745098,0.12156862745098039,B.q)
D.dlT=w([D.br7,D.aij,D.bpf],x.O)
D.dmI=w(["7","3","+","42","\u03c0","\u2211"],x.s)
D.dnL=w([1,0,7,6,3,2],x.t)
D.a6F=w(["leather","linen","plain","stars","rays"],x.s)
D.dnY=w([0.5,2,3.6],x.n)
D.dow=w(["Pole, child. Listen again:","Do not worry. Even elders learn twice:","Eh, so close! Remember:"],x.s)
D.bVg=new A.a_(983781,"MaterialIcons",!1)
D.aD5=w([B.PG,B.hD,B.kD,B.i0,F.asn,B.I2,B.qP,D.bVg,K.as0,B.Dq,B.qS,B.ml],A.at("O<a_>"))
D.a6J=w(["double","single","corners","none"],x.s)
D.bN3=new C.zD("Little Seed","\ud83c\udf31",0)
D.bN5=new C.zD("Young Listener","\ud83d\udc42",40)
D.bN4=new C.zD("Storyteller","\ud83e\ude98",120)
D.bN2=new C.zD("Village Pride","\ud83c\udfe1",300)
D.bN0=new C.zD("Keeper of Roots","\ud83c\udf33",700)
D.bN1=new C.zD("Elder of the Fire","\ud83d\udd25",1500)
D.aD7=w([D.bN3,D.bN5,D.bN4,D.bN2,D.bN0,D.bN1],A.at("O<zD>"))
D.dpH=w([B.d_,B.bj,B.cR],x.O)
D.dpX=w([],x.C)
D.E0=w([],x.u)
D.aNh=new A.r(225,528)
D.eSp=new A.y(D.aNh,1)
D.eu8=new A.r(350,548)
D.eYF=new A.y(D.eu8,0.95)
D.aNb=new A.r(158,656)
D.eYy=new A.y(D.aNb,1.12)
D.euV=new A.r(92,544)
D.eNZ=new A.y(D.euV,0.93)
D.eub=new A.r(398,614)
D.eUA=new A.y(D.eub,1.04)
D.eu_=new A.r(318,662)
D.eJj=new A.y(D.eu_,1.1)
D.a6R=w([D.eSp,D.eYF,D.eYy,D.eNZ,D.eUA,D.eJj],A.at("O<+(r,F)>"))
D.drZ=w(["Vizuri sana! That is very good.","Hongera! Congratulations, my child.","Safi! You listened well.","Asante, child. The fire is proud of you."],x.s)
D.dss=w(["\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udfff\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udffd\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udffe","\ud83d\udc69\ud83c\udfff","\ud83d\udc69\ud83c\udffd","\ud83d\udc69\ud83c\udffb\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb3","\ud83d\udc69\ud83c\udfff\u200d\ud83e\uddb3","\ud83e\uddd5","\ud83d\udc69\ud83c\udffe\u200d\ud83d\udcbc","\ud83d\udc69\ud83c\udffd\u200d\ud83d\udcbc","\ud83d\udc69\ud83c\udfff\u200d\ud83d\udcbc","\ud83d\udc69\ud83c\udffe\u200d\ud83c\udf93","\ud83d\udc69\ud83c\udffd\u200d\ud83c\udf93"],x.s)
D.dtw=w([B.cV,G.np,B.ic,D.lH,B.cV,B.ic],x.O)
D.duX=w([B.at,B.fL,B.iL],x.O)
D.dvC=w([-70,58],x.n)
D.dvE=w([-70,-30,20],x.n)
D.dwI=w([B.bt,B.mO,B.a_D],x.O)
D.dx_=w(["\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udfff\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udffd\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udffe","\ud83d\udc68\ud83c\udfff","\ud83d\udc68\ud83c\udffd","\ud83e\uddd4\u200d\u2642\ufe0f","\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb2","\ud83d\udc68\ud83c\udfff\u200d\ud83e\uddb2","\ud83d\udc68\ud83c\udffb\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udffe\u200d\ud83d\udcbc","\ud83d\udc68\ud83c\udffd\u200d\ud83d\udcbc","\ud83d\udc68\ud83c\udfff\u200d\ud83d\udcbc","\ud83d\udc68\ud83c\udffe\u200d\ud83c\udf93","\ud83d\udc68\ud83c\udffd\u200d\ud83c\udf93"],x.s)
D.dT0=new C.m1("construction","Construction","Jobsite & builds",B.qR)
D.dT7=new C.m1("house","Home Build","Houses & rooms",B.v3)
D.dSY=new C.m1("grocery","Grocery","Store & pantry",B.a4a)
D.dSX=new C.m1("calculator","Calculations","Math & estimates",B.PM)
D.dT5=new C.m1("lumber","Materials","Lumber & supplies",B.I_)
D.dSU=new C.m1("kitchen","Kitchen","Remodel & meals",A3.Q5)
D.bVe=new A.a_(983756,"MaterialIcons",!1)
D.dSZ=new C.m1("landscape","Landscaping","Yard & garden",D.bVe)
D.dST=new C.m1("plumbing","Plumbing","Pipes & water",B.pG)
D.dT8=new C.m1("electrical","Electrical","Wiring & power",B.ho)
D.dSR=new C.m1("store","Retail Shop","Daily business",B.kf)
D.dSS=new C.m1("paint_remodel","Paint & Remodel","Colors & walls",A3.Q1)
D.bUB=new A.a_(983311,"MaterialIcons",!1)
D.dT4=new C.m1("roofing","Roofing","Roofs & exteriors",D.bUB)
D.bVp=new A.a_(983986,"MaterialIcons",!1)
D.dSQ=new C.m1("warehouse","Warehouse","Storage & stock",D.bVp)
D.dT2=new C.m1("vehicles","Vehicles","Fleet & transport",B.Dm)
D.bSi=new A.a_(62785,"MaterialIcons",!1)
D.dSW=new C.m1("farm","Farm","Crops & livestock",D.bSi)
D.dSV=new C.m1("restaurant","Restaurant","Food & catering",B.vb)
D.dT1=new C.m1("tools","Tools","Workshop gear",B.Di)
D.dT6=new C.m1("wallet","Cash & Wallet","Quick spending",B.js)
D.dT3=new C.m1("concrete","Concrete","Foundation work",F.ar7)
D.dT_=new C.m1("blueprint","Blueprint","Plans & design",Ap.aqF)
D.a7f=w([D.dT0,D.dT7,D.dSY,D.dSX,D.dT5,D.dSU,D.dSZ,D.dST,D.dT8,D.dSR,D.dSS,D.dT4,D.dSQ,D.dT2,D.dSW,D.dSV,D.dT1,D.dT6,D.dT3,D.dT_],A.at("O<m1>"))
D.dxx=w([B.bu,B.bj],x.O)
D.dym=w([B.iw,B.oj,B.dW],x.O)
D.aj7=new A.t(1,0.8862745098039215,0.10588235294117647,0.23529411764705882,B.q)
D.ak6=new A.t(1,0.07450980392156863,0.40784313725490196,0.807843137254902,B.q)
D.bpB=new A.t(1,0.8470588235294118,0.6196078431372549,0,B.q)
D.bgW=new A.t(1,0.14901960784313725,0.5372549019607843,0.047058823529411764,B.q)
D.aEg=w([D.aj7,D.ak6,D.bpB,D.bgW],x.O)
D.dzz=w(["Oooh!","Pole!","Eh, so close!"],x.s)
D.a7p=w(["top","middle","bottom"],x.s)
D.dB4=w([B.cs,B.bp,B.dh],x.O)
D.aEA=w(["\u25b2","\u25c6","\u25cf","\u25a0"],x.s)
D.baw=new A.ab(0,B.G,B.b5,B.J,14)
D.aEE=w([D.baw],x.V)
D.bor=new A.t(1,0.22745098039215686,0.18823529411764706,0.25098039215686274,B.q)
D.dBO=w([D.ahC,D.a_C,D.bor],x.O)
D.dBP=w([B.be,B.dn,B.ec],x.O)
D.etJ=new A.r(24,-8)
D.eur=new A.r(48,0)
D.etF=new A.r(24,6)
D.dDx=w([B.J,D.etJ,D.eur,D.etF],x.g)
D.dDX=w(["Rewrite this page in natural, professional Swahili","Correct the spelling","Rewrite this page in simpler words","Add a paragraph about the family farm","Make this page shorter"],x.s)
D.eqd={top:0,middle:1,bottom:2}
D.dHc=new A.bq(D.eqd,["Top","Middle","Bottom"],x.r)
D.epO={double:0,single:1,corners:2,none:3}
D.dHi=new A.bq(D.epO,["Double line","One line","Corners","None"],x.r)
D.er1={leather:0,linen:1,plain:2,stars:3,rays:4}
D.dIX=new A.bq(D.er1,["Leather","Linen","Smooth","Stars","Light rays"],x.r)
D.dJ8=new A.bq(B.i2,[],A.at("bq<G,+(n,n)>"))
D.eq5={gold:0,silver:1,rose:2,white:3,copper:4,black:5}
D.Ef=new A.bq(D.eq5,[4293444714,4293257195,4293961912,4294967295,4292905548,4279310375],A.at("bq<n,G>"))
D.dNp=new H.O_(32,null)
D.dNq=new H.O_(40,null)
D.dNr=new H.O_(46,null)
D.aMJ=new C.auC(null)
D.esz=new A.r(0,40)
D.esA=new A.r(0,412)
D.esD=new A.r(0,900)
D.esN=new A.r(0,-34)
D.esO=new A.r(0,-46)
D.esQ=new A.r(0,-74)
D.esT=new A.r(100,300)
D.esU=new A.r(10,14)
D.esX=new A.r(10,-10)
D.et1=new A.r(10,-46)
D.et2=new A.r(10,-58)
D.et3=new A.r(116,442)
D.et5=new A.r(11,-1)
D.et6=new A.r(11,-10)
D.et7=new A.r(11,-21)
D.aN6=new A.r(11,-60)
D.ete=new A.r(14,-2)
D.etf=new A.r(150,520)
D.a9D=new A.r(150,592)
D.eti=new A.r(15,-15)
D.etj=new A.r(16,-1)
D.etn=new A.r(190,444)
D.etq=new A.r(1,5)
D.ety=new A.r(21,-78)
D.etz=new A.r(222,615)
D.JZ=new A.r(225,300)
D.a9F=new A.r(225,574)
D.etI=new A.r(24,-52)
D.etK=new A.r(250,210)
D.etV=new A.r(2,-56)
D.aNl=new A.r(300,0)
D.etW=new A.r(300,440)
D.etZ=new A.r(318,476)
D.eu1=new A.r(324,144)
D.a9I=new A.r(332,150)
D.eu3=new A.r(335,585)
D.eu4=new A.r(338,140)
D.eu5=new A.r(340,158)
D.eu7=new A.r(34,-60)
D.EH=new A.r(36,-24)
D.eu9=new A.r(372,470)
D.eua=new A.r(390,455)
D.euj=new A.r(42,468)
D.euk=new A.r(431,510)
D.eul=new A.r(431,520)
D.eum=new A.r(45,-92)
D.eun=new A.r(46,20)
D.euo=new A.r(46,-92)
D.eup=new A.r(46,-94)
D.euq=new A.r(47,-4)
D.eus=new A.r(48,-4)
D.euA=new A.r(4,-26)
D.euI=new A.r(60,455)
D.euQ=new A.r(8,14)
D.euU=new A.r(8,-76)
D.euW=new A.r(95,575)
D.euX=new A.r(98,-24)
D.euZ=new A.r(9,-2)
D.ev_=new A.r(9,-58)
D.aNu=new A.r(9,-79)
D.ev0=new A.r(9,-9)
D.evE=new A.r(16.5,8)
D.evG=new A.r(3.2,0)
D.evI=new A.r(-16.5,8)
D.evP=new A.r(16.5,2)
D.evS=new A.r(-3.2,0)
D.ew_=new A.r(9.5,6)
D.ew3=new A.r(-10,14)
D.ew4=new A.r(-10,-12)
D.ew5=new A.r(-10,-58)
D.ew7=new A.r(-11,-1)
D.ew8=new A.r(-11,-10)
D.ewa=new A.r(-11,-60)
D.ewb=new A.r(-12,-14)
D.ewc=new A.r(-12,-16)
D.ewj=new A.r(-14,-2)
D.ewm=new A.r(-15,-15)
D.ewn=new A.r(-15,-3)
D.ewp=new A.r(-16,-1)
D.ewG=new A.r(-24,-52)
D.ewN=new A.r(-2,-34)
D.ewO=new A.r(-2,-38)
D.ewQ=new A.r(-30,-100)
D.a9K=new A.r(-36,-24)
D.ex0=new A.r(-4,-26)
D.ex2=new A.r(-4,-6)
D.exc=new A.r(-8,-3)
D.exd=new A.r(-8,-48)
D.exg=new A.r(-9,-2)
D.exi=new A.r(-9,-58)
D.exj=new A.r(-9,-79)
D.exk=new A.r(-9,-9)
D.exm=new A.r(-9.5,6)
D.exz=new A.r(-16.5,2)
D.fWt=new A.B("Write a new book",null,B.hu,null,B.K,null,null,null,null,null,null,null)
D.ey8=new A.D(B.kX,D.fWt,null)
D.had=new A.B("Tap to go on",null,B.vP,null,null,null,null,null,null,null,null,null)
D.eyu=new A.D(B.ln,D.had,null)
D.asx=new A.ae(B.i_,18,B.c,null,null,null)
D.fPr=new A.B("Add",null,B.kq,null,null,null,null,null,null,null,null,null)
D.diA=w([D.asx,B.rd,D.fPr],x.p)
D.fiW=new A.c8(B.aM,B.e,B.N,B.l,null,B.p,null,0,D.diA,null)
D.eyx=new A.D(B.nH,D.fiW,null)
D.eyy=new A.D(E.amG,A7.YJ,null)
D.fIX=new A.H(!0,B.c,null,null,null,null,13.5,B.H,null,0.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fSF=new A.B("New Project",null,D.fIX,null,null,null,null,null,null,null,null,null)
D.dn5=w([D.asx,B.ae,D.fSF],x.p)
D.fiZ=new A.c8(B.aM,B.e,B.N,B.l,null,B.p,null,0,D.dn5,null)
D.eyM=new A.D(B.hP,D.fiZ,null)
D.fVc=new A.B("Choose your header",null,A0.u_,null,null,null,null,null,null,null,null,null)
D.ez6=new A.D(B.hZ,D.fVc,null)
D.bg8=new A.fi(2.2,null,null,null,null,B.cW,null,null,null,null)
D.foK=new A.a5(22,22,D.bg8,null)
D.bee=new A.cj(B.z,null,null,D.foK,null)
D.ezb=new A.D(B.a1_,D.bee,null)
D.bFH=new A.Q(14,2,14,6)
D.h8k=new A.B("The top of your book. Tap a design to see it.",null,U.u0,null,null,null,null,null,null,null,null,null)
D.ezc=new A.D(D.bFH,D.h8k,null)
D.fUm=new A.B("\ud83c\udfc6 A new record!",null,B.h6,null,null,null,null,null,null,null,null,null)
D.eze=new A.D(B.ln,D.fUm,null)
D.eAN=new A.ja(1,0.9098039215686274,0.9607843137254902,0.9137254901960784)
D.eAQ=new A.ja(1,0.8784313725490196,0.8784313725490196,0.8784313725490196)
D.aO4=new A.ja(1,0.9607843137254902,0.48627450980392156,0)
D.K6=new A.ja(1,0.8274509803921568,0.1843137254901961,0.1843137254901961)
D.AH=new A.ja(1,0.1803921568627451,0.49019607843137253,0.19607843137254902)
D.eAW=new A.ja(1,0.12941176470588237,0.12941176470588237,0.12941176470588237)
D.hHE=new C.bke(null)
D.bAu=new A.mN(D.hHE,null,B.az,null,null)
D.aRI=new A.cK(0,0,0,0,null,null,D.bAu,null)
D.fPt=new A.B("\ud83c\udfc5",null,B.ac0,null,null,null,null,null,null,null,null,null)
D.eFl=new A.cK(null,0,-34,null,null,null,D.fPt,null)
D.eND=new A.y("E","Sit by the fire again")
D.eTd=new A.y("C","Good Learner")
D.eWD=new A.y("D","Still Growing")
D.f0d=new A.y(-42,42)
D.f1A=new A.y("B","Faithful Listener")
D.f3A=new A.y("A","Keeper of the Family")
D.f6J=new A.b3(-17,0.7,0)
D.f7h=new A.b3(-8,0.95,1.3)
D.f8l=new A.b3(18,0.65,5.2)
D.f8n=new A.b3(0,1.15,2.6)
D.f8I=new A.b3(9,0.9,3.9)
D.faD=new A.b7([0,0,1,1])
D.aTc=new A.a4(0,0,520,160)
D.ffZ=new A.a4(10,612,440,618)
D.fg_=new A.a4(10,612,440,628)
D.fg2=new A.a4(14,-64,34,-12)
D.fg5=new A.a4(300,336,350,348)
D.aaD=new A.a4(30,96,420,346)
D.fg6=new A.a4(30,-9,46,1)
D.fg7=new A.a4(4,2,11,14)
D.fg9=new A.a4(-8,-12.5,8,-7)
D.fga=new A.a4(-16.5,-21,16.5,1)
D.fgb=new A.a4(60,342,88,348)
D.Vc=new A.a4(66,-66,94,-36)
D.fgc=new A.a4(6,8,10,14)
D.fgf=new A.a4(95,343,115,348)
D.fgg=new A.a4(-6.5,-74,6.5,-58)
D.fgm=new A.a4(-100,-74,100,-12)
D.fgn=new A.a4(-10,8,-6,14)
D.fgo=new A.a4(-11,2,-4,14)
D.fgp=new A.a4(-11,-70,11,-56)
D.fgw=new A.a4(-13,-24,13,-4)
D.fgC=new A.a4(-15,-21,15,0)
D.fgF=new A.a4(-16,-21,16,1)
D.fgG=new A.a4(-16,-21,16,2)
D.fgJ=new A.a4(-16,-26,16,-6)
D.fgT=new A.a4(-230,-26,230,26)
D.fhg=new A.a4(-38,-26,12,-6)
D.fhk=new A.a4(-3,-70,3,-63)
D.fhl=new A.a4(-44,-22,44,0)
D.fhn=new A.a4(-46,-9,-30,1)
D.aTg=new A.a4(-80,-190,80,20)
D.fhu=new A.a4(-8,-26,40,-6)
D.fhv=new A.a4(-98,-80,92,-75)
D.fhw=new A.a4(-9,-15,9,-9)
D.h7S=new A.B("Let the AI write it from your tree",null,B.iH,null,B.K,null,null,null,null,null,null,null)
D.bO8=new A.di(1,B.cn,D.h7S,null)
D.df1=w([E.a4E,B.ae,D.bO8],x.p)
D.fiA=new A.c8(B.aM,B.e,B.N,B.l,null,B.p,null,0,D.df1,null)
D.fP7=new A.B("Save member",null,B.ce,null,null,null,null,null,null,null,null,null)
D.dvm=w([D.atp,B.ae,D.fP7],x.p)
D.fiK=new A.c8(B.aM,B.b9,B.i,B.l,null,B.p,null,0,D.dvm,null)
D.bZQ=new A.ae(B.ii,14,B.b2,null,null,null)
D.fCt=new A.H(!0,B.b2,null,null,null,null,12,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fT6=new A.B("Cashier",null,D.fCt,null,null,null,null,null,null,null,null,null)
D.dnC=w([D.bZQ,B.bn,D.fT6],x.p)
D.fiO=new A.c8(B.aM,B.e,B.N,B.l,null,B.p,null,0,D.dnC,null)
D.fP8=new A.B("Transfer & settings",null,B.dl,null,null,null,null,null,null,null,null,null)
D.bLO=new A.bz(1,B.bd,D.fP8,null)
D.d69=w([D.asZ,B.as,D.bLO],x.p)
D.fiP=new A.c8(B.aM,B.e,B.i,B.l,null,B.p,null,0,D.d69,null)
D.fno=new A.av(16,40)
D.fnt=new A.av(22,64)
D.fnA=new A.av(280,88)
D.foo=new A.a5(30,null,null,null)
D.fOd=new A.B("The teacher is writing\u2026",null,B.B2,null,null,null,null,null,null,null,null,null)
D.bfl=new A.cj(B.z,null,null,D.fOd,null)
D.hBy=new A.bg("w",x.W)
D.foP=new A.a5(null,56,D.bfl,D.hBy)
D.fpD=new A.hN(5,8,8,1,null)
D.fpL=new A.hN(2,12,12,1.05,null)
D.fSL=new A.B("Please enter a family tree name.",null,null,null,null,null,null,null,null,null,null,null)
D.fqv=new A.b0(D.fSL,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.fT1=new A.B("Your shelf is full: six books is the most. Remove one to write another.",null,null,null,null,null,null,null,null,null,null,null)
D.aVz=new A.b0(D.fT1,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.h0u=new A.B("Could not save project on this device. Please try again.",null,null,null,null,null,null,null,null,null,null,null)
D.fqZ=new A.b0(D.h0u,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.hbf=new A.B("All projects cleared",null,null,null,null,null,null,null,null,null,null,null)
D.fr3=new A.b0(D.hbf,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.fVa=new A.B("Syncing family trees with the database\u2026",null,null,null,null,null,null,null,null,null,null,null)
D.fra=new A.b0(D.fVa,null,null,null,null,null,null,null,null,null,null,null,null,B.hb,!1,null,null,null,B.t,null)
D.h8x=new A.B("Your new book is on the shelf.",null,null,null,null,null,null,null,null,null,null,null)
D.aVE=new A.b0(D.h8x,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.fV8=new A.B("Give the game a name and write at least 2 complete questions (a question, two or more answers, and the right one chosen).",null,null,null,null,null,null,null,null,null,null,null)
D.frA=new A.b0(D.fV8,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.fPK=new A.B("Choose male or female.",null,null,null,null,null,null,null,null,null,null,null)
D.frC=new A.b0(D.fPK,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.fYV=new A.B("You can make two games at most. Delete one to make another.",null,null,null,null,null,null,null,null,null,null,null)
D.frI=new A.b0(D.fYV,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.hc_=new A.B("Saved to QR Code Generator \u2192 Saved (NGMY Family Tree).",null,null,null,null,null,null,null,null,null,null,null)
D.fso=new A.b0(D.hc_,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.h6M=new A.B("Project saved, but the photo could not be stored. Try choosing the photo again.",null,null,null,null,null,null,null,null,null,null,null)
D.fsO=new A.b0(D.h6M,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.hbj=new A.B("Choose whether this person is male or female.",null,null,null,null,null,null,null,null,null,null,null)
D.fsR=new A.b0(D.hbj,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.h27=new A.B("Could not save imported project to this device. Please try again.",null,null,null,null,null,null,null,null,null,null,null)
D.fsT=new A.b0(D.h27,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.fX5=new A.B("Please enter a project name.",null,null,null,null,null,null,null,null,null,null,null)
D.fsU=new A.b0(D.fX5,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.fX6=new A.B("Could not read that project QR.",null,null,null,null,null,null,null,null,null,null,null)
D.ftV=new A.b0(D.fX6,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.fSN=new A.B("Enter a name and an amount greater than 0.",null,null,null,null,null,null,null,null,null,null,null)
D.fuc=new A.b0(D.fSN,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.fUO=new A.B("Could not open that file.",null,null,null,null,null,null,null,null,null,null,null)
D.fuw=new A.b0(D.fUO,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.h1B=new A.B("Enter a name.",null,null,null,null,null,null,null,null,null,null,null)
D.fuN=new A.b0(D.h1B,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.fXV=new A.B("Enter an amount greater than zero.",null,null,null,null,null,null,null,null,null,null,null)
D.fuP=new A.b0(D.fXV,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.fHD=new A.H(!0,B.bE,null,null,null,null,20,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fwn=new A.et("\u2665",null,null,B.cN,null,null,null,null,null,null,D.fHD)
D.fEN=new A.H(!0,B.aS,null,null,null,null,28,B.O,B.cL,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fwD=new A.et("Today: how well do you know the family?",null,null,B.cN,null,null,null,null,null,null,D.fEN)
D.fwU=new A.H(!0,B.qf,null,null,null,null,11.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fy5=new A.H(!0,D.kQ,null,null,null,null,13,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fys=new A.H(!0,D.kQ,null,null,null,null,12,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fyw=new A.H(!0,B.cV,null,null,null,null,17,B.u,null,0.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fyF=new A.H(!0,D.fC,null,null,null,null,15,B.O,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fyQ=new A.H(!0,D.fC,null,null,null,null,13,B.H,null,null,null,null,1.15,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fz9=new A.tc(!0,B.tN,null,null,null,null,B.dE,9.5,null,null,null,null,null,null,null,null,null,null,null,null)
D.fzp=new A.H(!0,B.cV,null,null,null,null,10.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fzs=new A.H(!0,D.kQ,null,null,null,null,18,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fzt=new A.H(!0,B.cV,null,null,null,null,12,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fzy=new A.H(!0,B.c,null,null,null,null,15.5,B.u,null,null,null,null,1.15,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fzB=new A.H(!0,B.cV,null,null,null,null,15,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fA6=new A.H(!0,B.b2,null,null,null,null,26,B.u,null,-0.4,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fA7=new A.H(!0,B.ab,null,null,null,null,11.5,null,null,null,null,null,1.25,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fA9=new A.H(!0,B.aS,null,null,null,null,15.5,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fAA=new A.H(!0,B.c,null,null,null,null,24,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aWS=new A.H(!0,B.aR,null,null,null,null,null,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aWT=new A.H(!0,D.lG,null,null,null,null,12.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fB_=new A.H(!0,B.cV,null,null,null,null,20,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ac5=new A.tc(!0,B.UI,null,null,null,null,B.dE,9.5,null,null,null,null,null,null,null,null,null,null,null,null)
D.W6=new A.H(!0,B.cV,null,null,null,null,null,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fB9=new A.H(!0,B.a_,null,null,null,null,12.5,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fBe=new A.H(!0,D.fC,null,null,null,null,11,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fBD=new A.H(!0,B.c,null,null,null,null,20,B.u,null,0.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fCO=new A.H(!0,D.fC,null,null,null,null,13,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aX2=new A.H(!0,D.fC,null,null,null,null,14.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fD7=new A.H(!0,B.ab,null,null,null,null,12,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fDj=new A.H(!0,D.fC,null,null,null,null,null,B.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fDl=new A.H(!0,null,null,null,null,null,8,B.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fDr=new A.H(!0,L.j6,null,null,null,null,16.5,null,null,null,null,null,1.65,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aX6=new A.H(!0,D.fC,null,null,null,null,14.5,B.O,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fEn=new A.H(!0,D.fC,null,null,null,null,13,B.u,null,null,null,null,1.05,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fEG=new A.H(!0,D.fC,null,null,null,null,22,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fEI=new A.H(!0,B.a_,null,null,null,null,13,B.a8,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fEK=new A.H(!0,B.cV,null,null,null,null,17,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fF7=new A.H(!0,B.c,null,null,null,null,20,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,A6.IX,null,null,null)
D.aXk=new A.H(!0,D.fC,null,null,null,null,17,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fFv=new A.H(!0,B.a_,null,null,null,null,17,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fFR=new A.H(!0,B.fj,null,null,null,null,13,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fGe=new A.H(!0,B.bQ,null,null,null,null,8,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fGj=new A.H(!0,B.bD,null,null,null,null,11,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fGv=new A.H(!0,B.c,null,null,null,null,13.5,B.H,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fGy=new A.H(!0,D.fC,null,null,null,null,17,B.u,null,null,null,null,1.25,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fGG=new A.H(!0,D.Gy,null,null,null,null,40,B.u,null,null,null,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fGS=new A.H(!0,B.b2,null,null,null,null,13,B.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fHg=new A.H(!0,B.c,null,null,null,null,15.5,B.u,null,null,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fHn=new A.H(!0,B.ab,null,null,null,null,12.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,I.DT,null,null,null)
D.fHO=new A.H(!0,B.cV,null,null,null,null,130,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fHW=new A.H(!0,B.cW,null,null,null,null,13,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fI8=new A.H(!0,D.lH,null,null,null,null,13,B.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aXH=new A.H(!0,D.fC,null,null,null,null,null,B.H,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.Lf=new A.H(!0,B.cV,null,null,null,null,null,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aXJ=new A.H(!0,B.cV,null,null,null,null,null,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,I.DT,null,null,null)
D.fIt=new A.H(!0,B.bQ,null,null,null,null,11,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fIx=new A.H(!0,G.np,null,null,null,null,84,B.u,null,null,null,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fIV=new A.H(!0,B.b2,null,null,null,null,13,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fJc=new A.H(!0,D.fC,null,null,null,null,15,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fJA=new A.H(!0,B.c,null,null,null,null,null,B.H,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fJZ=new A.H(!0,D.fC,null,null,null,null,22,B.u,null,null,null,null,1.25,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fKu=new A.H(!0,D.fC,null,null,null,null,18,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fKz=new A.H(!0,B.an,null,null,null,null,11.5,B.a8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fKJ=new A.H(!0,B.c,null,null,null,null,28,B.u,null,null,null,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.acA=new A.H(!0,B.an,null,null,null,null,12,B.a8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.acD=new A.H(!0,D.lG,null,null,null,null,null,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fMs=new A.H(!0,B.c,null,null,null,null,8.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fMM=new A.H(!0,B.aS,null,null,null,null,27,B.O,B.cL,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fMT=new A.H(!0,L.j6,null,null,null,null,23,B.u,null,null,null,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fN0=new A.H(!0,L.j6,null,null,null,null,21,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fNu=new A.B("Time:",null,B.hs,null,null,null,null,null,null,null,null,null)
D.fNP=new A.B("\ud83c\udfae",null,K.acr,null,null,null,null,null,null,null,null,null)
D.fNQ=new A.B("Themes",null,B.pX,null,null,null,null,null,null,null,null,null)
D.fOl=new A.B("\ud83c\udfb2",null,B.xK,null,null,null,null,null,null,null,null,null)
D.fOp=new A.B("Delete this game?",null,B.iH,null,null,null,null,null,null,null,null,null)
D.fOw=new A.B("Add Item",null,B.ce,null,null,null,null,null,null,null,null,null)
D.fD1=new A.H(!0,B.a_,null,null,null,null,22,B.H,null,-0.3,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fOX=new A.B("Debt receipt",null,D.fD1,null,B.K,null,null,null,null,null,null,null)
D.aXY=new A.H(!0,B.an,null,null,null,null,11,B.a8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fPf=new A.B("Person who owes",null,D.aXY,null,null,null,null,null,null,null,null,null)
D.fQe=new A.B("Notes",null,B.acf,null,null,null,null,null,null,null,null,null)
D.fQF=new A.B("New Tree",null,null,null,null,null,null,null,null,null,null,null)
D.fBV=new A.H(!0,B.c,null,null,null,null,11,B.H,null,0.25,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fQH=new A.B("Share",null,D.fBV,null,null,null,null,null,null,null,null,null)
D.fRI=new A.B("Move your family trees",null,I.acx,null,null,null,null,null,null,null,null,null)
D.fSm=new A.B("Save invites",null,null,null,null,null,null,null,null,null,null,null)
D.fT0=new A.B("The cover design",null,null,null,null,null,null,null,null,null,null,null)
D.fTo=new A.B("SAVE",null,D.Lf,null,null,null,null,null,null,null,null,null)
D.fU0=new A.B("The round button is the right answer.",null,U.B6,null,null,null,null,null,null,null,null,null)
D.fUl=new A.B("Remove this book?",null,B.h6,null,null,null,null,null,null,null,null,null)
D.fIS=new A.H(!0,B.cV,null,null,null,null,17,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,I.DT,null,null,null)
D.fUT=new A.B("Fireside Stories",null,D.fIS,null,null,null,null,null,null,null,null,null)
D.aYr=new A.B("Download",null,B.ce,null,null,null,null,null,null,null,null,null)
D.fVz=new A.B("What should the AI do?",null,B.dl,null,null,null,null,null,null,null,null,null)
D.fBy=new A.H(!0,D.lG,null,null,null,null,13,B.u,null,4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fVO=new A.B("REPORT CARD",null,D.fBy,null,null,null,null,null,null,null,null,null)
D.fWA=new A.B("Calabash Catch",null,B.Wt,null,null,null,null,null,null,null,null,null)
D.fX1=new A.B("Take photo",null,null,null,null,null,null,null,null,null,null,null)
D.fXs=new A.B("\ud83c\udfe1",null,B.Fc,null,null,null,null,null,null,null,null,null)
D.fY9=new A.B("Ribbon bookmark",null,B.jC,null,null,null,null,null,null,null,null,null)
D.fKt=new A.H(!0,B.b2,null,null,null,null,15,B.u,null,1.6,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fYE=new A.B("NGMY.ORG",null,D.fKt,null,B.K,null,null,null,null,null,null,null)
D.fZX=new A.B("Scan family tree QR",null,B.cG,null,null,null,null,null,null,null,null,null)
D.fGz=new A.H(!0,B.c,null,null,null,null,13,B.a8,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h_K=new A.B("Hold steady \u2014 worksheet QR scans instantly when in frame.",null,D.fGz,null,B.K,null,null,null,null,null,null,null)
D.h0Y=new A.B("Delete",null,B.W0,null,null,null,null,null,null,null,null,null)
D.h0Z=new A.B("Scan project QR",null,null,null,null,null,null,null,null,null,null,null)
D.h16=new A.B("Thumbnail",null,B.pX,null,null,null,null,null,null,null,null,null)
D.h1G=new A.B("Save the cover",null,B.cG,null,null,null,null,null,null,null,null,null)
D.h1L=new A.B("A question appears, and gourds with the answers fall from the baobab. Slide the basket and catch the RIGHT one. Three lives.",null,B.Ba,null,B.K,null,null,null,null,null,null,null)
D.h28=new A.B("Your photos",null,B.pX,null,null,null,null,null,null,null,null,null)
D.h2o=new A.B("Create Project",null,B.ce,null,null,null,null,null,null,null,null,null)
D.h2L=new A.B("\u2b50 stars",null,B.We,null,null,null,null,null,null,null,null,null)
D.h2Z=new A.B("Design your cover",null,A0.u_,null,null,null,null,null,null,null,null,null)
D.h34=new A.B("Gallery",null,null,null,null,null,null,null,null,null,null,null)
D.h37=new A.B("PICTURE",null,M.vS,null,null,null,null,null,null,null,null,null)
D.h39=new A.B("\ud83c\udfaf",null,D.Ws,null,null,null,null,null,null,null,null,null)
D.h3w=new A.B("Paid",null,B.ce,null,null,null,null,null,null,null,null,null)
D.h3y=new A.B("You can undo it right after.",null,U.B6,null,null,null,null,null,null,null,null,null)
D.h45=new A.B("Print",null,B.vQ,null,null,null,null,null,null,null,null,null)
D.h4w=new A.B("Amount owed",null,D.aXY,null,null,null,null,null,null,null,null,null)
D.h4L=new A.B("Got it",null,B.ce,null,null,null,null,null,null,null,null,null)
D.h5m=new A.B("The whole book",null,null,null,null,null,null,null,null,null,null,null)
D.h5p=new A.B("Add to budget",null,B.ce,null,null,null,null,null,null,null,null,null)
D.h5P=new A.B("Debtor signature",null,B.acf,null,null,null,null,null,null,null,null,null)
D.h5Z=new A.B("Change icon",null,B.ace,null,null,null,null,null,null,null,null,null)
D.h6N=new A.B("MADE BY THE SYSTEM, FROM YOUR TREE",null,T.u2,null,null,null,null,null,null,null,null,null)
D.h7e=new A.B("Family tree QR",null,B.cG,null,null,null,null,null,null,null,null,null)
D.h7k=new A.B("Write a Kahoot-style game for your family. Everyone who opens this tree can play it. You can make 2 games at most.",null,B.Wr,null,null,null,null,null,null,null,null,null)
D.h7I=new A.B("Download",null,B.vQ,null,null,null,null,null,null,null,null,null)
D.h7J=new A.B("The person who planted this tree has not made a game yet.",null,B.B8,null,null,null,null,null,null,null,null,null)
D.h7N=new A.B("Change",null,B.pX,null,null,null,null,null,null,null,null,null)
D.h8D=new A.B("Clear all",null,B.ce,null,null,null,null,null,null,null,null,null)
D.h8G=new A.B("WHAT SHOULD IT CHANGE?",null,M.vS,null,null,null,null,null,null,null,null,null)
D.h9d=new A.B("COLOUR",null,M.vS,null,null,null,null,null,null,null,null,null)
D.h9s=new A.B("Do it",null,B.cG,null,null,null,null,null,null,null,null,null)
D.h9v=new A.B("Create Tree",null,B.ce,null,null,null,null,null,null,null,null,null)
D.h9F=new A.B("Give me another clue",null,D.Lf,null,null,null,null,null,null,null,null,null)
D.haz=new A.B("Create Family Tree",null,B.fb,null,null,null,null,null,null,null,null,null)
D.haJ=new A.B("THE TEACHER EXPLAINS THESE",null,T.u2,null,null,null,null,null,null,null,null,null)
D.fwT=new A.H(!0,E.kx,null,null,null,null,null,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.haP=new A.B("Write the first page myself",null,D.fwT,null,null,null,null,null,null,null,null,null)
D.hbm=new A.B("Use this header",null,B.cG,null,null,null,null,null,null,null,null,null)
D.hbt=new A.B("Create Project",null,E.aXD,null,null,null,null,null,null,null,null,null)
D.hD1=new C.ad_(1,"header")
D.adF=new C.ad_(2,"projects")
D.hD2=new C.ad_(3,"cashier")
D.adG=new C.ad_(4,"familyTree")
D.hQw=new C.cHs(0,"start")
D.hQx=new C.cHt(0,"start")
D.hDf=new C.ZY(null)
D.hEg=new C.a_r(null)
D.dJ5=new A.bq(B.i2,[],A.at("bq<n,GH>"))
D.dql=w([],x.dE)
D.dqm=w([],x.M)
D.hEV=new C.bhq(D.dJ5,D.dql,D.dqm,0,0,null,null)
D.b1X=new C.a0h(0,"intro")
D.b1Y=new C.a0h(1,"countdown")
D.adT=new C.a0h(2,"ask")
D.Xn=new C.a0h(3,"reveal")
D.b1Z=new C.a0h(4,"end")
D.hHG=new C.tk(F.GH,D.lH,B.cV,F.m8,5,!1,!1,!1,0,null)
D.hHH=new C.tk(F.GH,B.er,B.cV,B.bO,2,!0,!0,!1,2,B.cV)
D.hHI=new C.tk(B.qs,B.cW,B.cV,F.m8,2,!0,!1,!1,2,B.at)
D.hHJ=new C.tk(F.GH,B.dX,B.cV,F.m8,5,!1,!1,!1,1,null)
D.hHK=new C.tk(F.a_U,D.ak6,B.cV,F.m8,4,!0,!1,!0,0,null)
D.b21=new C.tk(F.a_U,B.dN,B.cV,F.m8,3,!0,!1,!0,2,null)
D.b22=new C.tk(F.rX,D.lH,B.c,F.m8,0,!1,!1,!0,0,null)
D.b23=new C.tk(B.qs,B.aD,B.cV,B.bO,2,!0,!0,!1,2,B.dN)
D.b24=new C.tk(B.qs,G.np,B.ic,F.m8,5,!1,!1,!0,3,null)
D.hHL=new C.tk(B.qs,B.dN,B.cV,F.m8,0,!0,!1,!1,0,B.aD)
D.b25=new C.tk(F.GH,B.er,B.cV,B.bO,1,!1,!0,!1,1,null)
D.b26=new C.tk(F.Gf,B.at,B.aD,F.m8,4,!0,!1,!0,2,null)
D.hHM=new C.tk(F.rX,B.at,B.er,F.m8,3,!0,!1,!1,0,null)
D.hHN=new C.tk(B.qs,B.dX,B.cV,B.bO,1,!1,!0,!1,1,null)
D.hHO=new C.tk(F.Gf,D.aj7,B.c,F.m8,5,!1,!1,!0,0,null)
D.hIr=new C.a0P(null)
D.hQF=new C.ago(0,"still")
D.XK=new C.ago(1,"walk")
D.b2x=new C.ago(2,"pound")
D.b2y=new C.ago(3,"drum")
D.hM6=new C.a25(0,"greet")
D.b2z=new C.a25(1,"teach")
D.aec=new C.a25(2,"ask")
D.hM7=new C.a25(3,"feedback")
D.b2A=new C.a25(4,"end")
D.XQ=new C.a2o(0,"intro")
D.XR=new C.a2o(1,"asking")
D.Bq=new C.a2o(2,"reacting")
D.aeo=new C.a2o(3,"driving")
D.aep=new C.a2o(4,"arrived")
D.aex=new C.aMd(0,"projects")
D.b3_=new C.aMd(1,"cashier")
D.hOc=new C.aMd(2,"familyTree")})()};
(a=>{a["OdYa+/YRA4XsyJwplIShDRuMIGs="]=a.current})($__dart_deferred_initializers__);