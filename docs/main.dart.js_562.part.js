((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,Ai,Aj,Ak,U,V,A3,Al,Am,O,R,A4,W,A5,M,An,L,A6,X,H,E,A7,Ao,Y,Ap,Aq,Ar,A8,As,At,Au,Av,Aw,S,A9,Ax,Ay,Az,N,Aa,AA,Ab,Ac,Ad,AB,AC,Ae,AD,G,AE,AF,AG,Af,AH,Z,AI,AJ,A_,AK,AL,P,AM,AN,Ag,AO,Ah,A0,Q,F,AP,I,A1,K,AQ,A2,T,AR,C={
bHT(b2,b3,b4){var w=0,v=A.j(x.cz),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1
var $async$bHT=A.e(function(b5,b6){if(b5===1)return A.f(b6,v)
for(;;)switch(w){case 0:w=3
return A.b(A.wa(null,""),$async$bHT)
case 3:b1=b6
if(B.a.i(b1).length===0)throw A.Y(y.z)
t=A.nA(b1)
s=A.c2(b3.length,null,!1,x.h5)
r=x.f,q=x.N,p=x.z,o=x.j,n=x.gE,m="Translate these book pages into "+b4+". Translate the MEANING, not the words: write what a native speaker would naturally say, never a literal copy of the other language (many phrases, like \"family tree\", have no word-for-word twin and would not be understood). Keep the warm tone, every person's name and every place name exactly as written, and keep the paragraph breaks (a blank line between paragraphs). Do not add or remove any fact. If the source is flowery or exaggerated, say it plainly and warmly. Write people's names with normal capitals (Ikungu Ele), not in ALL CAPITALS. Write natural, correct "+b4+".",l=null,k=0
case 4:if(!(j=b3.length,k<j)){w=6
break}i=k+3
h=B.d.du(b3,k,Math.min(i,j))
j=h.length
g=b3.length
b2.$2("Translating pages "+(k+1)+" to "+(k+j)+" of "+g+"\u2026",k/g)
j=A.cZ(b4,"Swahili",0)?y.q:""
g=h.length
f=A.a([],n)
for(e=h.length,d=0;d<h.length;h.length===e||(0,A.I)(h),++d){a0=h[d]
f.push(A.J(["title",a0.a,"body",a0.b],q,q))}a1=m+j+"\nReply with JSON only, with exactly "+g+' pages in the same order: {"pages":[{"title":"...","body":"..."}]}\nPages:\n'+B.V.au(f,null)+"\n"
a2=null
a3=0
case 7:if(!(a3<2&&a2==null)){w=8
break}w=10
return A.b(A.rx(t,a1,B.ig,"book",E.Hu),$async$bHT)
case 10:a4=b6
l=a4.a
a5=a4.b
if(a5==null){w=9
break}a6=H.S0(a5)
if(a6!=null&&o.b(a6.h(0,"pages"))&&J.ad(o.a(a6.h(0,"pages")))>=h.length)a2=o.a(a6.h(0,"pages"))
case 9:++a3
w=7
break
case 8:if(a2==null)throw A.Y(l!=null&&A5.Mh(l)?y.k:y.y)
for(j=J.a2(a2),a7=0;a7<h.length;++a7){a8=r.b(j.h(a2,a7))?A.a0(r.a(j.h(a2,a7)),q,p):B.cI
g=a8.h(0,"title")
a9=B.a.i(A.v(g==null?"":g))
g=a8.h(0,"body")
b0=B.a.i(A.v(g==null?"":g))
g=a9.length===0?h[a7].a:a9
f=b0.length===0?h[a7].b:b0
s[k+a7]=new A.y(g,f)}case 5:k=i
w=4
break
case 6:r=A.a([],x.L)
for(a7=0;a7<b3.length;++a7){q=s[a7]
r.push(q==null?b3[a7]:q)}if(B.a.q(b4,"Swahili")){u=H.a4r(r,b2)
w=1
break}b2.$2("Done",1)
u=r
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bHT,v)},
aiX(b7,b8,b9,c0,c1,c2,c3){var w=0,v=A.j(x.bV),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6
var $async$aiX=A.e(function(c4,c5){if(c4===1)return A.f(c5,v)
for(;;)switch(w){case 0:w=3
return A.b(A.wa(null,""),$async$aiX)
case 3:b6=c5
if(B.a.i(b6).length===0)throw A.Y(y.z)
t=A.nA(b6)
s=x.S
r=A.cU(c1,0,A.dA(4,"count",s),A.U(c1).c)
q=H.a4a(new A.O(r,new C.fWO(),r.$ti.k("O<aj.E,m>")).aL(0," "))
r=q==="sw"
if(!r){p=A.ag("swahili|kiswahili",!1,!1,!1,!1)
o=p.b.test(b8)}else o=!0
if(r)r="The book is written in Swahili: keep it in Swahili unless they ask for another language."
else r=q==="en"?"The book is written in English: keep it in English unless they ask for another language.":"Keep the language the book is already written in unless they ask for another."
n=r+(o?y.q:"")
m=new C.fWN(t)
w=c2==="cover"?4:5
break
case 4:b9.$2("Designing the cover\u2026",0.3)
w=6
return A.b(m.$1('You design the cover of a family book. The person asked: """'+b8+'"""\nCurrent cover settings: '+B.V.au(b7,null)+"\nAllowed values: style one of "+B.d.aL(c3,", ")+"; emblem a number 0 to 11 (0 family tree, 1 heart, 2 home, 3 star, 4 people, 5 flower, 6 open book, 7 castle, 8 church, 9 paw, 10 leaf, 11 trophy); titleSize 18 to 36; position top, middle or bottom; frame double, single, corners or none; texture leather, linen, plain, stars or rays; foil gold, silver, rose, white, copper or black; ribbon true or false.\nAlso allowed: title and subtitle (the words on the cover) and author (a name line). Change ONLY what they asked for; leave the other settings out.\n"+n+'\nReply with JSON only: {"message":"one or two friendly sentences saying what you changed","cover":{...only the settings you change...}}\n'),$async$aiX)
case 6:l=c5
k=H.S0(l==null?"":l)
if(k==null)throw A.Y("The AI could not design the cover just now. Nothing was changed.")
s=k.h(0,"message")
s=A.v(s==null?"I updated the cover.":s)
r=x.f
u=new C.aqK(s,D.dNs,r.b(k.h(0,"cover"))?A.a0(r.a(k.h(0,"cover")),x.N,x.z):null)
w=1
break
case 5:r=c2==="page"
p=x.t
if(r){p=A.a([],p)
if(c0>=0&&c0<c1.length)p.push(c0)
j=p}else{p=A.a([],p)
for(i=0;i<c1.length;++i)p.push(i)
j=p}if(j.length===0)throw A.Y("There is no page to change.")
h=A.S(s,x.fz)
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
return A.b(m.$1(f+B.V.au(a2,null)+'\nReply with JSON only: {"message":"one or two friendly sentences saying what you changed","pages":[{"index":0,"title":"...","body":"..."}]}\nInclude ONLY the pages you changed, each with its full new text. If nothing needs changing in these pages, use "pages":[].\n'),$async$aiX)
case 10:l=c5
k=l==null?null:H.S0(l)
if(k==null)throw A.Y(y.A)
if(a0.length===0){a2=k.h(0,"message")
a2=B.a.i(A.v(a2==null?"":a2)).length!==0}else a2=!1
if(a2)a0=B.a.i(A.v(k.h(0,"message")))
a8=k.h(0,"pages")
if(s.b(a8))for(a2=J.cN(a8,d),a5=J.aQ(a2.a),a2=a2.$ti,a7=new A.jZ(a5,a2.k("jZ<1>")),a2=a2.c;a7.C();){a9=a2.a(a5.gP(a5))
b0=J.a2(a9)
b1=A.aJ(b0.h(a9,"index"))
i=b1==null?null:B.i.M(b1)
if(i==null||!B.d.q(a4,i))continue
b1=b0.h(a9,"title")
b2=B.a.i(A.v(b1==null?"":b1))
a9=b0.h(a9,"body")
b3=B.a.i(A.v(a9==null?"":a9))
a9=b2.length===0
if(a9&&b3.length===0)continue
a9=a9?c1[i].a:b2
h.n(0,i,new A.y(a9,b3.length===0?c1[i].b:b3))}case 8:a1=a3
w=7
break
case 9:if(h.a!==0){s=h.$ti.k("ba<2>")
p=A.cw(new A.ba(h,s),new C.fWP(),s.k("M.E"),p)
p=H.a4a(A.pd(p,3,A.a3(p).k("M.E")).aL(0," "))==="sw"
s=p}else s=!1
w=s?11:12
break
case 11:s=h.$ti.k("cs<1>")
b4=A.B(new A.cs(h,s),s.k("M.E"))
s=A.a([],x.L)
for(r=b4.length,a6=0;a6<b4.length;b4.length===r||(0,A.I)(b4),++a6){p=h.h(0,b4[a6])
p.toString
s.push(p)}w=13
return A.b(H.a4r(s,b9),$async$aiX)
case 13:b5=c5
for(s=J.a2(b5),i=0;i<b4.length;++i)h.n(0,b4[i],s.h(b5,i))
case 12:b9.$2("Done",1)
if(a0.length===0){s=h.a
if(s===0)s="I looked, and nothing needed changing."
else{r=s===1?"page":"pages"
r="Done. I updated "+s+" "+r+"."
s=r}}else s=a0
u=new C.aqK(s,h,null)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aiX,v)},
hQ7(d,e,f){return A.ce(null,B.v.j(0.65),!1,null,new C.h6i(e,f),d,null,!0,!0,x.g2)},
aqK:function aqK(d,e,f){this.a=d
this.b=e
this.c=f},
fWO:function fWO(){},
fWN:function fWN(d){this.a=d},
fWP:function fWP(){},
h6i:function h6i(d,e){this.a=d
this.b=e},
bFz(b1){var w=0,v=A.j(x.aD),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
var $async$bFz=A.e(function(b2,b3){if(b2===1)return A.f(b3,v)
for(;;)switch(w){case 0:if(!B.d.aR(b1,new C.fJC())){u=null
w=1
break}t=B.d.cw(b1,new C.fJD())
s=$.T()
r=new A.oU(new A.oo())
q=A.v1(r,D.aU1)
p=A.L()
p.r=B.c.gp(0)
q.aE(D.aU1,p)
o=A.L()
o.r=B.a_.gp(0)
o.c=3.6
o.b=B.ac
o.d=B.bG
o.e=B.dP
n=new C.fJI(t)
if(!t){for(s=b1.length,m=1/0,l=1/0,k=0,j=0,i=0;i<s;++i){h=b1[i]
if(h==null)continue
g=h.a
if(g<m)m=g
f=h.b
if(f<l)l=f
if(g>k)k=g
if(f>j)j=f}e=B.i.D(k-m,1,1e4)
d=B.i.D(j-l,1,1e4)
a0=B.i.D(478.40000000000003/e,0,147.20000000000002/d)
a1=(520-e*a0)/2
a2=(160-d*a0)/2
s=$.T()
p=A.a([],x.v)
a3=new A.aH(s.r,B.ak,null,null,p)
for(s=b1.length,a4=!1,i=0;i<b1.length;b1.length===s||(0,A.I)(b1),++i){h=b1[i]
if(h==null){a4=!1
continue}a5=a1+(h.a-m)*a0
a6=a2+(h.b-l)*a0
if(!a4){a7=new A.aZ(a5,a6)
p.push(a7)
a8=a3.f
if(a8!=null)a7.aj(a8)
a3.ac()
a4=!0}else{a7=new A.aq(a5,a6)
p.push(a7)
a8=a3.f
if(a8!=null)a7.aj(a8)
a3.ac()}}q.af(a3,o)}else{p=A.a([],x.v)
a3=new A.aH(s.r,B.ak,null,null,p)
for(s=b1.length,a4=!1,i=0;i<b1.length;b1.length===s||(0,A.I)(b1),++i){h=b1[i]
if(h==null){a4=!1
continue}a9=n.$1(h)
a7=a9.a
a8=a9.b
if(!a4){a7=new A.aZ(a7,a8)
p.push(a7)
a8=a3.f
if(a8!=null)a7.aj(a8)
a3.ac()
a4=!0}else{a7=new A.aq(a7,a8)
p.push(a7)
a8=a3.f
if(a8!=null)a7.aj(a8)
a3.ac()}}q.af(a3,o)}w=4
return A.b(r.mZ().vI(520,160),$async$bFz)
case 4:w=3
return A.b(b3.ho(B.ho),$async$bFz)
case 3:b0=b3
u=b0==null?null:J.eU(B.dM.gaS(b0))
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bFz,v)},
fUt(d){return C.ivv(d)},
ivv(d){var w=0,v=A.j(x.bW),u,t,s,r,q,p,o,n
var $async$fUt=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:p={}
o=d.ble()
n=d.x!=null&&d.A_(null).length===0
if(d.x!=null)t=n?D.B6:D.KA
else t=d.gVa()?D.KA:D.aOS
w=3
return A.b(C.bFz(d.ax),$async$fUt)
case 3:s=f
p.a=null
if(s!=null)p.a=A.apn(s)
r=A.a6c(null,"NGMY Cashier","Payment receipt \u2014 "+d.b)
p.b=p.c=null
q=d.x
if(q==null){p.c="Not paid yet"
p.b=D.aOS}else{p.c=C.xA(q,!0)
p.b=n?D.B6:D.KA}r.a4W(A.hh3(new C.fUv(p,d,new C.fUw(),t,n,o),null,D.bKq,B.xS))
u=r.jI(0)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fUt,v)},
h0F(d){var w=0,v=A.j(x.y),u,t,s,r,q
var $async$h0F=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(C.fUt(d),$async$h0F)
case 3:t=f
s=B.a.i(d.b)
r=A.ag("[^a-zA-Z0-9_-]+",!0,!1,!1,!1)
q=A.aL(s,r,"_")
if(q.length>40)q=B.a.aw(q,0,40)
u=Aw.HK(t,"ngmy_cashier_receipt_"+(q.length===0?d.a:q)+".pdf",!1)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$h0F,v)},
fJC:function fJC(){},
fJD:function fJD(){},
fJI:function fJI(d){this.a=d},
fUw:function fUw(){},
fUv:function fUv(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fUu:function fUu(){},
h6L(d,e){var w=0,v=A.j(x.H)
var $async$h6L=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.ce(null,B.v.j(0.55),!0,null,new C.h6P(new A.cA(null,x.eF),e),d,null,!0,!0,x.H),$async$h6L)
case 2:return A.h(null,v)}})
return A.i($async$h6L,v)},
bIl(d,e,f,g){return C.iDi(d,e,f,g)},
iDi(d,e,f,g){var w=0,v=A.j(x.H),u,t,s,r
var $async$bIl=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:r=null
try{t=B.a.q(e,",")?B.d.gal(e.split(",")):e
r=B.cJ.aK(t)}catch(q){r=null}if(r==null||r.length===0){d.L(x.q).f.T(D.fAh)
w=1
break}w=3
return A.b(A.ce(null,null,!0,null,new C.h6H(g,r,f),d,null,!0,!0,x.H),$async$bIl)
case 3:case 1:return A.h(u,v)}})
return A.i($async$bIl,v)},
h6Q(d,e){var w=0,v=A.j(x.H)
var $async$h6Q=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.ce(null,null,!0,null,new C.h6T(new A.cA(null,x.eF),e),d,null,!0,!0,x.H),$async$h6Q)
case 2:return A.h(null,v)}})
return A.i($async$h6Q,v)},
b1g:function b1g(d,e){this.c=d
this.a=e},
cak:function cak(){},
beC:function beC(d,e){this.b=d
this.a=e},
h6P:function h6P(d,e){this.a=d
this.b=e},
h6M:function h6M(d){this.a=d},
h6N:function h6N(d,e,f){this.a=d
this.b=e
this.c=f},
h6O:function h6O(d,e){this.a=d
this.b=e},
h6H:function h6H(d,e,f){this.a=d
this.b=e
this.c=f},
h6F:function h6F(d){this.a=d},
h6G:function h6G(d,e,f){this.a=d
this.b=e
this.c=f},
h6T:function h6T(d,e){this.a=d
this.b=e},
h6R:function h6R(d){this.a=d},
h6S:function h6S(d,e,f){this.a=d
this.b=e
this.c=f},
fOz(d,e){var w=0,v=A.j(x.y),u,t
var $async$fOz=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(A.a3V(d),$async$fOz)
case 3:t=g
J.ne(t,new C.fOA(e))
u=A.ajE(d,t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fOz,v)},
fOA:function fOA(d){this.a=d},
aqX:function aqX(d,e,f){this.c=d
this.d=e
this.a=f},
aFO:function aFO(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
dU1:function dU1(d,e){this.a=d
this.b=e},
dTN:function dTN(d,e){this.a=d
this.b=e},
dTQ:function dTQ(d,e,f){this.a=d
this.b=e
this.c=f},
dTP:function dTP(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dTO:function dTO(d,e){this.a=d
this.b=e},
dTR:function dTR(d,e){this.a=d
this.b=e},
dTL:function dTL(){},
dTM:function dTM(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
dTK:function dTK(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
dTv:function dTv(d){this.a=d},
dTw:function dTw(d,e,f){this.a=d
this.b=e
this.c=f},
dTx:function dTx(d,e){this.a=d
this.b=e},
dTu:function dTu(d){this.a=d},
dTC:function dTC(d,e){this.a=d
this.b=e},
dTt:function dTt(d){this.a=d},
dTD:function dTD(d,e,f){this.a=d
this.b=e
this.c=f},
dTE:function dTE(d,e,f){this.a=d
this.b=e
this.c=f},
dTs:function dTs(d,e){this.a=d
this.b=e},
dTF:function dTF(d,e,f){this.a=d
this.b=e
this.c=f},
dTr:function dTr(d,e){this.a=d
this.b=e},
dTG:function dTG(d,e){this.a=d
this.b=e},
dTq:function dTq(d){this.a=d},
dTH:function dTH(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dTo:function dTo(){},
dTi:function dTi(d){this.a=d},
dTj:function dTj(d){this.a=d},
dTp:function dTp(d,e){this.a=d
this.b=e},
dTI:function dTI(d,e){this.a=d
this.b=e},
dTn:function dTn(d){this.a=d},
dTJ:function dTJ(d){this.a=d},
dTm:function dTm(){},
dTy:function dTy(d,e){this.a=d
this.b=e},
dTl:function dTl(d){this.a=d},
dTz:function dTz(d,e,f){this.a=d
this.b=e
this.c=f},
dTk:function dTk(d,e){this.a=d
this.b=e},
dTh:function dTh(d,e){this.a=d
this.b=e},
dTA:function dTA(d){this.a=d},
dTB:function dTB(d,e,f){this.a=d
this.b=e
this.c=f},
dU4:function dU4(){},
dU5:function dU5(d,e){this.a=d
this.b=e},
dU2:function dU2(d){this.a=d},
dU3:function dU3(d){this.a=d},
dTZ:function dTZ(d,e){this.a=d
this.b=e},
dU_:function dU_(d){this.a=d},
dTS:function dTS(d,e,f){this.a=d
this.b=e
this.c=f},
dTT:function dTT(d,e,f){this.a=d
this.b=e
this.c=f},
dTU:function dTU(d,e,f){this.a=d
this.b=e
this.c=f},
dTV:function dTV(d,e,f){this.a=d
this.b=e
this.c=f},
dTW:function dTW(d,e,f){this.a=d
this.b=e
this.c=f},
dTX:function dTX(d,e,f){this.a=d
this.b=e
this.c=f},
dTY:function dTY(d,e,f){this.a=d
this.b=e
this.c=f},
dU6:function dU6(){},
dU7:function dU7(){},
dU8:function dU8(){},
dU9:function dU9(d){this.a=d},
dU0:function dU0(d,e){this.a=d
this.b=e},
hLA(d){return B.d.dr(D.a6d,new C.fPl(d),new C.fPm())},
v5:function v5(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
fPl:function fPl(d){this.a=d},
fPm:function fPm(){},
amX:function amX(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aXX:function aXX(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
Uz:function Uz(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
big:function big(){this.d=$
this.c=this.a=null},
dje:function dje(d,e){this.a=d
this.b=e},
djc:function djc(d,e){this.a=d
this.b=e},
djd:function djd(){},
djf:function djf(d,e){this.a=d
this.b=e},
hvm(d){var w,v,u,t=d.h(0,"id")
t=J.k(t==null?"":t)
w=d.h(0,"title")
w=J.k(w==null?"":w)
v=d.h(0,"body")
v=J.k(v==null?"":v)
u=d.h(0,"updatedAt")
u=A.be(J.k(u==null?"":u))
return new C.nH(t,w,v,u==null?new A.W(Date.now(),0,!1):u)},
M3(d,e){return C.iu7(d,e)},
iu7(d,e){var w=0,v=A.j(x.d),u,t=2,s=[],r,q,p,o,n,m,l
var $async$M3=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){u=A.a([],x.I)
w=1
break}t=4
w=7
return A.b(A.aB(),$async$M3)
case 7:r=g
o=B.a.i(d.toLowerCase())
q=A.aV(J.t(r.a,"ngmy_family_book_v1_"+o+"_"+e))
if(q==null||q.length===0){o=A.a([],x.I)
u=o
w=1
break}p=B.V.aP(0,q,null)
if(!x.j.b(p)){o=A.a([],x.I)
u=o
w=1
break}o=J.cN(p,x.f)
o=A.cw(o,new C.fRU(),o.$ti.k("M.E"),x.B)
n=A.a3(o).k("X<M.E>")
o=A.B(new A.X(o,new C.fRV(),n),n.k("M.E"))
B.d.b0(o,new C.fRW())
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
return A.i($async$M3,v)},
BM(d,e,f){var w=0,v=A.j(x.H),u,t,s,r
var $async$BM=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){w=1
break}w=3
return A.b(A.aB(),$async$BM)
case 3:t=h
s=B.a.i(d.toLowerCase())
r=J.b8(f,new C.h5m(),x.a)
r=A.B(r,r.$ti.k("aj.E"))
w=4
return A.b(t.aB("String","ngmy_family_book_v1_"+s+"_"+e,B.V.au(r,null)),$async$BM)
case 4:case 1:return A.h(u,v)}})
return A.i($async$BM,v)},
aU1(d,e,f){var w=0,v=A.j(x.H),u,t,s
var $async$aU1=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=2
return A.b(C.M3(d,e),$async$aU1)
case 2:u=h
t=J.cI(u)
s=t.bl(u,new C.he1(f))
if(s===-1)t.ce(u,0,f)
else t.n(u,s,f)
w=3
return A.b(C.BM(d,e,u),$async$aU1)
case 3:return A.h(null,v)}})
return A.i($async$aU1,v)},
bG3(d,e,f){var w=0,v=A.j(x.H),u
var $async$bG3=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=2
return A.b(C.M3(d,e),$async$bG3)
case 2:u=h
J.ne(u,new C.fOr(f))
w=3
return A.b(C.BM(d,e,u),$async$bG3)
case 3:return A.h(null,v)}})
return A.i($async$bG3,v)},
bGj(d,e){return C.iu6(d,e)},
iu6(a2,a3){var w=0,v=A.j(x.e),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$bGj=A.e(function(a4,a5){if(a4===1){s.push(a5)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.aB(),$async$bGj)
case 7:r=a5
o=B.a.i(a2.toLowerCase())
q=A.aV(J.t(r.a,"ngmy_family_book_cover_v1_"+o+"_"+a3))
if(q==null||q.length===0){u=D.PJ
w=1
break}p=B.V.aP(0,q,null)
if(x.f.b(p)){o=A.a0(p,x.N,x.z)
n=o.h(0,"style")
n=J.k(n==null?"leather":n)
m=o.h(0,"title")
m=J.k(m==null?"":m)
l=o.h(0,"subtitle")
l=J.k(l==null?"":l)
k=A.aJ(o.h(0,"emblem"))
k=k==null?null:B.i.M(k)
if(k==null)k=0
if(D.EB.am(0,o.h(0,"foil")))j=A.cT(o.h(0,"foil"))
else j=J.z(o.h(0,"silver"),!0)?"silver":"gold"
i=A.aJ(o.h(0,"titleSize"))
if(i==null)i=null
i=B.i.D(i==null?25:i,18,36)
h=B.d.q(D.a7V,o.h(0,"position"))?A.cT(o.h(0,"position")):"middle"
g=B.d.q(D.a7e,o.h(0,"frame"))?A.cT(o.h(0,"frame")):"double"
f=B.d.q(D.a7a,o.h(0,"texture"))?A.cT(o.h(0,"texture")):"leather"
e=o.h(0,"author")
e=J.k(e==null?"":e)
d=J.z(o.h(0,"ribbon"),!1)
o=B.d.q(D.dcv,o.h(0,"header"))?A.cT(o.h(0,"header")):"classic"
o=new C.IH(n,m,l,k,j,i,h,g,f,e,!d,o)}else o=D.PJ
u=o
w=1
break
t=2
w=6
break
case 4:t=3
a1=s.pop()
u=D.PJ
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$bGj,v)},
Tb(d,e,f){return C.iCO(d,e,f)},
iCO(d,e,f){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$Tb=A.e(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){w=1
break}t=4
w=7
return A.b(A.aB(),$async$Tb)
case 7:r=h
w=8
return A.b(r.aB("String","ngmy_family_book_cover_v1_"+B.a.i(d.toLowerCase())+"_"+e,B.V.au(f.ak(),null)),$async$Tb)
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
return A.i($async$Tb,v)},
SC(d,e){return C.iu8(d,e)},
iu8(d,e){var w=0,v=A.j(x.dy),u,t=2,s=[],r,q,p,o,n,m,l,k,j
var $async$SC=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){u=A.a([],x.s)
w=1
break}t=4
w=7
return A.b(A.aB(),$async$SC)
case 7:r=g
q=r.ps("ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e)
if(q!=null){n=A.B(q,x.N)
u=n
w=1
break}j=J
w=8
return A.b(C.M3(d,e),$async$SC)
case 8:if(!j.cJ(g)){n=B.a.i(d.toLowerCase())
m=J.lF(r.a,"ngmy_family_book_cover_v1_"+n+"_"+e)}else m=!0
p=m
n=x.s
o=p?A.a(["main"],n):A.a([],n)
w=9
return A.b(r.aB("StringList","ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e,o),$async$SC)
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
return A.i($async$SC,v)},
aig(d,e){var w=0,v=A.j(x.T),u,t,s,r
var $async$aig=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.SC(d,e),$async$aig)
case 3:s=g
r=J.a2(s)
if(r.gJ(s)>=6){u=null
w=1
break}t=r.q(s,"main")?""+1000*Date.now()+"_"+r.gJ(s):"main"
r.I(s,t)
w=5
return A.b(A.aB(),$async$aig)
case 5:w=4
return A.b(g.aB("StringList","ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e,s),$async$aig)
case 4:u=t
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aig,v)},
a4D(d,e,f){var w=0,v=A.j(x.H),u,t,s
var $async$a4D=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=2
return A.b(C.SC(d,e),$async$a4D)
case 2:s=h
J.fQ(s,f)
w=3
return A.b(A.aB(),$async$a4D)
case 3:u=h
w=4
return A.b(u.aB("StringList","ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e,s),$async$a4D)
case 4:t=f==="main"?e:e+"~"+f
w=5
return A.b(u.X(0,"ngmy_family_book_v1_"+B.a.i(d.toLowerCase())+"_"+t),$async$a4D)
case 5:w=6
return A.b(u.X(0,"ngmy_family_book_cover_v1_"+B.a.i(d.toLowerCase())+"_"+t),$async$a4D)
case 6:return A.h(null,v)}})
return A.i($async$a4D,v)},
nH:function nH(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fRU:function fRU(){},
fRV:function fRV(){},
fRW:function fRW(){},
h5m:function h5m(){},
he1:function he1(d){this.a=d},
fOr:function fOr(d){this.a=d},
IH:function IH(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
bTI:function bTI(d){this.a=d},
iD7(d,e,f,g,h,i,j){return A.a7(d,!1).cc(A.eb(new C.h5X(j,i,f,e,h,g),!0,null,x.H))},
Sy(d,e,f,g,h){var w=0,v=A.j(x.y),u,t,s,r,q,p,o,n,m,l,k
var $async$Sy=A.e(function(i,j){if(i===1)return A.f(j,v)
for(;;)switch(w){case 0:w=3
return A.b(C.SC(h,g),$async$Sy)
case 3:k=j
if(d.e==null){u=!1
w=1
break}if(J.ad(k)>=6){d.L(x.q).f.T(D.aWp)
u=!1
w=1
break}w=4
return A.b(C.hQ7(d,f,e),$async$Sy)
case 4:t=j
if(t==null||d.e==null){u=!1
w=1
break}w=5
return A.b(C.aig(h,g),$async$Sy)
case 5:s=j
if(s==null){u=!1
w=1
break}r=s==="main"?g:g+"~"+s
q=1000*Date.now()
p=A.a([],x.I)
for(o=t.d,n=0;n<o.length;++n){m=o[n]
l=B.a.i(m.a)
if(l.length===0)l="Page "+(n+1)
p.push(new C.nH(""+(q+n),l,B.a.i(m.b),new A.W(Date.now(),0,!1)))}w=6
return A.b(C.BM(h,r,p),$async$Sy)
case 6:p=B.a.i(t.a)
w=p.length!==0?7:8
break
case 7:w=9
return A.b(C.Tb(h,r,new C.IH("leather",p,"",0,"gold",25,"middle","double","leather","",!0,"classic")),$async$Sy)
case 9:case 8:u=!0
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$Sy,v)},
h5X:function h5X(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
a0e:function a0e(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
aCM:function aCM(d,e){var _=this
_.d=d
_.e=!0
_.f=$
_.r=-1
_.x=_.w=!1
_.y=e
_.Q=_.z=$
_.c=_.a=null},
djU:function djU(d){this.a=d},
djT:function djT(d,e){this.a=d
this.b=e},
djI:function djI(d,e){this.a=d
this.b=e},
djF:function djF(d,e){this.a=d
this.b=e},
djg:function djg(d){this.a=d},
djh:function djh(d,e){this.a=d
this.b=e},
djJ:function djJ(d){this.a=d},
djp:function djp(d){this.a=d},
djn:function djn(d){this.a=d},
djo:function djo(d){this.a=d},
djq:function djq(d){this.a=d},
djG:function djG(d){this.a=d},
djH:function djH(){},
djl:function djl(d){this.a=d},
djm:function djm(d,e){this.a=d
this.b=e},
djr:function djr(d){this.a=d},
djs:function djs(d,e){this.a=d
this.b=e},
djS:function djS(d){this.a=d},
djR:function djR(d,e){this.a=d
this.b=e},
djQ:function djQ(d){this.a=d},
djC:function djC(d){this.a=d},
djB:function djB(d){this.a=d},
djD:function djD(d){this.a=d},
dji:function dji(d,e){this.a=d
this.b=e},
djE:function djE(d,e){this.a=d
this.b=e},
djv:function djv(d){this.a=d},
djw:function djw(d){this.a=d},
dju:function dju(){},
djx:function djx(d){this.a=d},
djy:function djy(d){this.a=d},
djz:function djz(d,e){this.a=d
this.b=e},
djA:function djA(d,e,f){this.a=d
this.b=e
this.c=f},
djt:function djt(d,e){this.a=d
this.b=e},
djL:function djL(d){this.a=d},
djK:function djK(){},
djM:function djM(d){this.a=d},
djN:function djN(d){this.a=d},
djO:function djO(d){this.a=d},
djP:function djP(d,e){this.a=d
this.b=e},
djj:function djj(d){this.a=d},
djk:function djk(d){this.a=d},
a0i:function a0i(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
biF:function biF(d){var _=this
_.d=d
_.e=$
_.c=_.a=null},
dlG:function dlG(d){this.a=d},
dlH:function dlH(d){this.a=d},
dlF:function dlF(d){this.a=d},
dlI:function dlI(d){this.a=d},
dlE:function dlE(d){this.a=d},
dlJ:function dlJ(d){this.a=d},
dlD:function dlD(d){this.a=d},
dlK:function dlK(d,e){this.a=d
this.b=e},
dlC:function dlC(d,e){this.a=d
this.b=e},
dlL:function dlL(d,e){this.a=d
this.b=e},
a0g:function a0g(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
agH:function agH(d,e,f){this.a=d
this.b=e
this.c=f},
aCP:function aCP(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
dk8:function dk8(d,e){this.a=d
this.b=e},
dk7:function dk7(d,e){this.a=d
this.b=e},
dkc:function dkc(d){this.a=d},
dkb:function dkb(d,e){this.a=d
this.b=e},
dk9:function dk9(d){this.a=d},
dka:function dka(d){this.a=d},
dkd:function dkd(d){this.a=d},
dke:function dke(d){this.a=d},
dk6:function dk6(d,e){this.a=d
this.b=e},
dk5:function dk5(d,e){this.a=d
this.b=e},
L5:function L5(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a_t:function a_t(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
cRY:function cRY(d){this.a=d},
cRZ:function cRZ(){},
cS_:function cS_(d){this.a=d},
bfQ:function bfQ(d,e,f){this.b=d
this.c=e
this.a=f},
bfH:function bfH(d,e){this.b=d
this.a=e},
v6:function v6(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a_P:function a_P(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bfO:function bfO(){var _=this
_.r=_.f=_.e=_.d=$
_.c=_.a=null},
daZ:function daZ(d,e,f){this.a=d
this.b=e
this.c=f},
daY:function daY(d,e){this.a=d
this.b=e},
dbn:function dbn(d){this.a=d},
dba:function dba(){},
dbo:function dbo(d){this.a=d},
db9:function db9(){},
dbp:function dbp(d,e){this.a=d
this.b=e},
db8:function db8(d,e){this.a=d
this.b=e},
dbq:function dbq(d,e){this.a=d
this.b=e},
db7:function db7(d,e){this.a=d
this.b=e},
dbr:function dbr(d){this.a=d},
db6:function db6(){},
dbs:function dbs(d,e){this.a=d
this.b=e},
db5:function db5(d,e){this.a=d
this.b=e},
dbt:function dbt(d){this.a=d},
dbi:function dbi(d,e){this.a=d
this.b=e},
dbu:function dbu(d){this.a=d},
dbv:function dbv(d){this.a=d},
dbx:function dbx(d){this.a=d},
dby:function dby(d){this.a=d},
dbh:function dbh(d,e){this.a=d
this.b=e},
dbz:function dbz(d,e){this.a=d
this.b=e},
aJU:function aJU(d){this.a=d},
bld:function bld(d){this.a=d},
bdX:function bdX(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.f=f
_.r=g
_.w=h
_.x=i
_.y=j
_.z=k
_.a=l},
amY:function amY(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
a2v:function a2v(d,e){this.a=d
this.b=e},
amZ:function amZ(d,e,f,g,h,i){var _=this
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
_.bv$=h
_.ab$=i
_.c=_.a=null},
bTS:function bTS(d){this.a=d},
bTM:function bTM(d){this.a=d},
bTL:function bTL(d,e){this.a=d
this.b=e},
bTV:function bTV(d){this.a=d},
bTN:function bTN(d){this.a=d},
bTO:function bTO(d){this.a=d},
bTR:function bTR(d){this.a=d},
bTQ:function bTQ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bTT:function bTT(d,e){this.a=d
this.b=e},
bTU:function bTU(){},
bTP:function bTP(d){this.a=d},
bTJ:function bTJ(d,e){this.a=d
this.b=e},
bTK:function bTK(d){this.a=d},
bqQ:function bqQ(d,e){this.b=d
this.a=e},
aCN:function aCN(){},
iQ(d,e){var w
$.T()
w=A.L()
w.b=B.ac
w.c=e
w.r=d.gp(0)
w.d=B.bG
w.e=B.dP
return w},
bFB(d,e,f,g,h,i,a0,a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=d.c
J.bs(j.save())
j.translate(e.a,e.b)
d.nK(0,a0?-f:f,f)
w=A.bY(B.hD,8,36)
v=B.v.j(0.3)
u=$.T()
t=A.L()
t.r=v.gp(0)
d.c1(w,t)
w=a1===D.Yp
s=w?Math.sin(g*5*a2):0
r=w?Math.abs(Math.sin(g*10*a2))*1.6:0
q=h.a
w=h.b
v=A.ap(w,B.v,0.3)
v.toString
if(!a3){v=s*7
d.ah(D.eBr,new A.r(-4+v,-2),C.iQ(q,5))
d.ah(D.ez4,new A.r(4-v,-2),C.iQ(q,5))}else{t=A.bY(B.Kr,14,40)
p=A.L()
p.r=v.gp(0)
d.c1(t,p)}v=u.r
u=x.v
o=new A.aH(v,B.ak,k,k,A.a([],u))
t=-64-r
o.E(new A.aZ(-11,t))
o.E(new A.cj(-15,-40,-14,a3?-12:-18))
o.E(new A.aq(14,a3?-12:-18))
o.E(new A.cj(15,-40,11,t))
o.E(new A.bA())
t=A.L()
t.r=w.gp(0)
d.af(o,t)
u=new A.aH(v,B.ak,k,k,A.a([],u))
u.E(new A.aZ(-12,-50-r))
v=-46-r
u.E(new A.aq(12,v))
u.E(new A.aq(12.5,-42-r))
u.E(new A.aq(-12.5,v))
u.E(new A.bA())
v=A.L()
v.r=h.c.gp(0)
d.af(u,v)
switch(a1.a){case 2:w=Math.sin(g*3.4)
break
case 3:w=Math.sin(g*7.5)
break
default:w=s
break}if(a1===D.b3H){n=-52+w*14
d.ah(new A.r(10,n-22),new A.r(10,n+44),C.iQ(F.GG,3.4))
d.ah(D.eBI,new A.r(9,n),C.iQ(q,4))
d.ah(D.ezv,new A.r(10,n),C.iQ(q,4))}else if(a1===D.b3I){d.ah(D.eAy,new A.r(-8,-26-Math.max(0,w)*6),C.iQ(q,4))
d.ah(D.exx,new A.r(8,-26-Math.max(0,-w)*6),C.iQ(q,4))}else{w=s*3
v=-38-r
d.ah(D.eAC,new A.r(-12-w,v),C.iQ(q,4))
d.ah(D.aNS,new A.r(12+w,v),C.iQ(q,4))}w=A.L()
w.r=q.gp(0)
d.aE(D.fn5,w)
m=new A.r(0,-77-r)
w=A.bY(m,22,19)
v=A.L()
v.r=q.gp(0)
d.c1(w,v)
w=h.y
if(w!=null){v=A.bY(m.a7(0,K.w3),15,24)
u=A.L()
u.r=w.gp(0)
d.c1(v,u)
u=m.a7(0,D.exr)
v=A.L()
v.r=w.gp(0)
d.O(u,4,v)}else{w=A.bY(m.a7(0,B.ub),23,20)
v=h.d
u=A.L()
u.r=v.gp(0)
d.cQ(w,3.2986722862692828,2.827433388230814,!0,u)
w=h.e
if(w===3){d.ah(m.a7(0,D.eBG),m.a7(0,D.eAw),C.iQ(v,2.2))
d.ah(m.a7(0,D.ezu),m.a7(0,D.exo),C.iQ(v,2.2))}if(w===4){w=m.a7(0,D.eBK)
u=A.L()
u.r=v.gp(0)
d.O(w,6,u)
u=m.a7(0,D.ezw)
w=A.L()
w.r=v.gp(0)
d.O(u,6,w)}}w=m.a7(0,D.eAl)
v=A.L()
v.r=B.it.gp(0)
d.O(w,0.9,v)
v=m.a7(0,D.eAa)
w=A.L()
w.r=B.it.gp(0)
d.O(v,0.9,w)
if(i){l=m.a7(0,K.aa3)
w=A.bY(l,21,22)
v=A.L()
v.r=D.lQ.gp(0)
d.c1(w,v)
v=A.bY(l.a7(0,K.aNP),5,12)
w=A.L()
w.r=D.bj7.gp(0)
d.c1(v,w)
d.ah(l.a7(0,D.eBC),l.a7(0,K.aOc),C.iQ(B.d_,1.4))
d.ah(D.aNS,new A.r(15,-88-r),C.iQ(q,3.6))}j.restore()},
hKb(d,e,f,g,h,i,j,k){var w,v,u,t,s,r=d.c
J.bs(r.save())
w=e.a
r.translate(w,e.b-h.x*f)
d.bV(0,f)
v=A.bY(B.dS,18,96)
u=B.v.j(0.28)
$.T()
t=A.L()
t.r=u.gp(0)
d.c1(v,t)
t=A.bY(B.dS,11,70)
v=B.v.j(0.2)
u=A.L()
u.r=v.gp(0)
d.c1(t,u)
d.ly(D.aU5,A.L())
C.iix(d,g,h,i,j)
s=(k==null?D.aa8:k).a-w>=0?1:-1
w=A.L()
w.a=B.MO
w.san(A.jP(new A.r(s*70,-60),new A.r(-s*70,-60),A.a([D.aka.j(0.5),D.aka.j(0.12),D.bqN.j(0.22)],x.O),A.a([0,0.55,1],x.n),B.x,null))
d.aE(D.aU5,w)
r.restore()
r.restore()},
iix(a1,a2,a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null,d=a2.a,a0=A.ap(d,B.v,0.28)
a0.toString
w=A.ap(d,B.c,0.16)
w.toString
v=a2.b
u=A.ap(v,B.v,0.32)
u.toString
t=Math.sin(a4*1.9+a5)*0.8
s=a2.w
r=s?1.06:1
q=s?0.86:1
s=A.bw(D.fn6,B.ug)
p=$.T()
o=A.L()
o.r=u.gp(0)
a1.aq(s,o)
o=A.bw(D.fn1,B.hS)
s=A.ap(v,B.v,0.18)
s.toString
n=A.L()
n.r=s.gp(0)
a1.aq(o,n)
n=A.bw(D.fnf,B.hS)
o=A.ap(v,B.v,0.1)
o.toString
s=A.L()
s.r=o.gp(0)
a1.aq(n,s)
s=A.L()
s.r=d.gp(0)
a1.c1(D.fn8,s)
s=A.L()
s.r=d.gp(0)
a1.c1(D.flS,s)
s=a1.c
J.bs(s.save())
s.translate(a3.w,0)
J.bs(s.save())
a1.nK(0,q,q*(1+t*0.012))
o=a2.f
m=o&&!a2.r?25:28
n=x.v
l=new A.aH(p.r,B.ak,e,e,A.a([],n))
p=-m
k=p+2
l.E(new A.aZ(k,-58))
l.E(new A.cj(p-3,-62,p,-52))
l.E(new A.aq(p+4,-14))
l.E(new A.aq(m-4,-14))
l.E(new A.aq(m,-52))
l.E(new A.cj(m+3,-62,m-2,-58))
l.E(new A.cj(0,-70,k,-58))
l.E(new A.bA())
k=A.L()
k.r=v.gp(0)
a1.af(l,k)
J.bs(s.save())
a1.mz(0,l)
switch(a2.x){case 1:for(j=0;j<5;++j){u=j*5
k=D.djW[j]
i=new A.ar(B.T,B.Q,B.W,B.X,B.U)
i.b=B.ac
i.c=5
i.r=k.gp(0)
i.d=B.bG
i.e=B.dP
a1.ah(new A.r(-34+u,-64),new A.r(14+u,-14),i)}break
case 2:for(k=a2.c,h=-56;h<-14;h+=11)for(g=-26+B.o.F(B.o.ao(h,11),2)*6;g<28;g+=12){i=k.j(0.85)
$.T()
f=new A.ar(B.T,B.Q,B.W,B.X,B.U)
f.r=i.gp(0)
a1.O(new A.r(g,h),3.6,f)
f=new A.ar(B.T,B.Q,B.W,B.X,B.U)
f.r=u.gp(0)
a1.O(new A.r(g,h),1.6,f)}break
case 3:for(u=a2.c,g=-28;g<30;g+=8){k=u.j(0.7)
i=new A.ar(B.T,B.Q,B.W,B.X,B.U)
i.b=B.ac
i.c=1.6
i.r=k.gp(0)
i.d=B.bG
i.e=B.dP
a1.ah(new A.r(g,-64),new A.r(g,-14),i)}for(h=-60;h<-14;h+=8){k=u.j(0.7)
i=new A.ar(B.T,B.Q,B.W,B.X,B.U)
i.b=B.ac
i.c=1.6
i.r=k.gp(0)
i.d=B.bG
i.e=B.dP
a1.ah(new A.r(-30,h),new A.r(30,h),i)}break
default:a1.ah(D.eB4,D.eyc,C.iQ(a2.c.j(0.9),3))}a1.ah(D.eBD,D.eAE,C.iQ(B.v.j(0.18),1.6))
a1.ah(D.exw,K.aNU,C.iQ(B.v.j(0.18),1.6))
u=B.v.j(0.12)
k=$.T()
i=A.L()
i.r=u.gp(0)
a1.aE(D.flO,i)
s.restore()
i=A.L()
i.r=a0.gp(0)
a1.aE(D.fm1,i)
n=new A.aH(k.r,B.ak,e,e,A.a([],n))
n.E(new A.aZ(-9,-66))
n.E(new A.cj(0,-57,9,-66))
n.E(new A.cj(0,-60,-9,-66))
k=A.L()
k.r=d.gp(0)
a1.af(n,k)
if(a2.e!==1)u=a2.r&&!o
else u=!0
if(u)a1.cQ(D.fma,0.1,2.941592653589793,!1,C.iQ(a2.c,2.2))
s.restore()
u=-56*q
o=a3.Q
if(o==null)o=D.aad
n=25*q
k=23*q
i=9*q
C.hG1(a1,new A.r(p*q+2,u),o,n,k,-1,v,d,i)
o=a3.as
p=o==null?D.F2:o
C.hG1(a1,new A.r(m*q-2,u),p,n,k,1,v,d,i)
if(a3.at){a1.ah(D.eyX,D.eyT,C.iQ(D.al9,4))
a1.ah(D.eyV,D.eyR,C.iQ(D.H6.j(0.7),1.4))
u=A.L()
u.r=B.d_.gp(0)
a1.O(D.eyU,5,u)}s.restore()
u=a3.w
p=a3.e
o=a3.r
J.bs(s.save())
s.translate(u*1.2+p*4,-88+o-t*0.4)
a1.jr(0,a3.f)
a1.bV(0,r)
C.iit(a1,a2,a3,a4,a5,d,a0,w)
s.restore()},
hG1(d,e,f,g,h,i,j,k,l){var w,v,u,t,s=f.aI(0,e),r=s.gcL(),q=r===0?B.hD:s.f_(0,r),p=B.i.D(r,Math.abs(g-h)+0.5,g+h-0.5),o=g*g,n=(o-h*h+p*p)/(2*p),m=Math.sqrt(Math.max(0,o-n*n))
o=-q.b
w=q.a
v=new A.r(o,w)
if(o*i<0)v=new A.r(-o,-w)
u=e.a7(0,q.aO(0,n)).a7(0,v.aO(0,m))
t=e.a7(0,q.aO(0,p))
d.ah(e,u,C.iQ(j,l))
o=A.ap(j,B.v,0.2)
o.toString
d.ah(e,u,C.iQ(o,l*0.35))
d.ah(u,t,C.iQ(k,l*0.78))
o=A.ap(k,B.v,0.22)
o.toString
d.ah(u,t,C.iQ(o,l*0.22))
$.T()
o=A.L()
o.r=j.gp(0)
d.O(u,l*0.55,o)
o=A.bY(t,l*1.15,l)
w=A.L()
w.r=k.gp(0)
d.c1(o,w)
w=-l
w=t.a7(0,new A.r(i*w*0.45,w*0.1))
o=A.L()
o.r=k.gp(0)
d.O(w,l*0.28,o)},
iit(c2,c3,c4,c5,c6,c7,c8,c9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9=null,c0=c3.d,c1=c3.e
if(c1===3||c1===4){w=A.bY(B.w2,40,38)
$.T()
v=A.L()
v.r=c0.gp(0)
c2.c1(w,v)}if(c1===4){$.T()
w=A.L()
w.r=c0.gp(0)
c2.O(D.eAM,9.5,w)
w=A.L()
w.r=c0.gp(0)
c2.O(D.exN,9.5,w)}w=A.bY(D.eBZ,10,6)
v=$.T()
u=A.L()
u.r=c8.gp(0)
c2.c1(w,u)
u=A.bY(D.eAi,10,6)
w=A.L()
w.r=c8.gp(0)
c2.c1(u,w)
v=v.r
w=x.v
t=new A.aH(v,B.ak,b9,b9,A.a([],w))
t.E(new A.aZ(0,-20))
t.E(new A.i6(13,-20,17,-9,16,2))
t.E(new A.i6(15,13,8,20,0,20))
t.E(new A.i6(-8,20,-15,13,-16,2))
t.E(new A.i6(-17,-9,-13,-20,0,-20))
t.E(new A.bA())
u=A.L()
u.san(A.ws(D.eBt,28,A.a([c9,c7,c8],x.O),A.a([0,0.55,1],x.n),B.x,b9,b9,0))
c2.af(t,u)
u=c3.r
if(u){s=C.iQ(c8.j(0.5),0.8)
c2.cQ(D.fnh,3.455751918948773,2.5132741228718345,!1,s)
c2.cQ(D.flV,3.455751918948773,2.5132741228718345,!1,s)
c2.ah(D.eAJ,K.aOl,s)
c2.ah(D.exJ,D.exA,s)
c2.cQ(D.fm9,2.2,1.4,!1,s)
c2.cQ(D.flT,-0.4,1.4,!1,s)}switch(c1){case 0:for(r=0;r<16;++r){q=3.141592653589793*(1.02+0.96*r/15)
p=Math.cos(q)
o=Math.sin(q)
n=new A.ar(B.T,B.Q,B.W,B.X,B.U)
n.r=c0.gp(0)
c2.O(new A.r(p*14.5,-3+o*17.5),4.3,n)}p=A.L()
p.r=c0.gp(0)
c2.cQ(D.fmo,3.141592653589793,3.141592653589793,!0,p)
break
case 1:p=new A.aH(v,B.ak,b9,b9,A.a([],w))
p.E(new A.aZ(-15,-11))
p.E(new A.cj(0,-30,15,-11))
p.E(new A.aq(13,-6))
p.E(new A.cj(0,-12,-13,-6))
p.E(new A.bA())
o=A.L()
o.r=c3.c.gp(0)
c2.af(p,o)
c2.ah(D.eAA,D.exB,C.iQ(G.nH,1.4))
o=A.L()
o.r=c0.gp(0)
c2.O(D.eAP,3,o)
o=A.L()
o.r=c0.gp(0)
c2.O(D.exO,3,o)
o=new A.aH(v,B.ak,b9,b9,A.a([],w))
o.E(new A.aZ(-13,6))
o.E(new A.cj(-12,22,0,26))
o.E(new A.cj(12,22,13,6))
o.E(new A.cj(8,13,0,12))
o.E(new A.cj(-8,13,-13,6))
o.E(new A.bA())
p=A.L()
p.r=B.hW.gp(0)
c2.af(o,p)
p=new A.aH(v,B.ak,b9,b9,A.a([],w))
p.E(new A.aZ(-7,8))
p.E(new A.cj(0,6,7,8))
p.E(new A.cj(0,10.5,-7,8))
o=A.L()
o.r=B.bO.gp(0)
c2.af(p,o)
break
case 2:m=c3.y
if(m==null)m=c3.b
p=new A.aH(v,B.ak,b9,b9,A.a([],w))
p.E(new A.aZ(-17,-4))
p.E(new A.cj(-20,-27,0,-29))
p.E(new A.cj(20,-27,17,-4))
p.E(new A.cj(0,-14,-17,-4))
p.E(new A.bA())
o=A.L()
o.r=m.gp(0)
c2.af(p,o)
o=A.ap(m,B.v,0.3)
o.toString
c2.cQ(D.fmv,3.4,2.5,!1,C.iQ(o,1.4))
o=A.ap(m,B.c,0.3)
o.toString
c2.cQ(D.fmh,3.6,2.2,!1,C.iQ(o,1.2))
o=new A.aH(v,B.ak,b9,b9,A.a([],w))
o.E(new A.aZ(11,-22))
o.E(new A.cj(27,-34,25,-19))
o.E(new A.cj(18,-18,11,-22))
p=A.ap(m,B.c,0.1)
p.toString
n=A.L()
n.r=p.gp(0)
c2.af(o,n)
n=new A.aH(v,B.ak,b9,b9,A.a([],w))
n.E(new A.aZ(11,-22))
n.E(new A.cj(24,-12,27,-26))
n.E(new A.cj(18,-22,11,-22))
o=A.ap(m,B.v,0.2)
o.toString
p=A.L()
p.r=o.gp(0)
c2.af(n,p)
p=A.L()
p.r=c3.c.gp(0)
c2.O(D.exC,3,p)
break
case 3:p=A.L()
p.r=c0.gp(0)
c2.cQ(D.fms,3.204424506661589,3.015928947446201,!0,p)
for(r=-3;r<=3;++r){p=A.ap(c0,B.c,0.18)
p.toString
o=new A.ar(B.T,B.Q,B.W,B.X,B.U)
o.b=B.ac
o.c=0.9
o.r=p.gp(0)
o.d=B.bG
o.e=B.dP
c2.ah(new A.r(r*3.6,-19+Math.abs(r)*0.8),new A.r(r*4.6,-4),o)}for(p=c3.c,l=0;l<2;++l){k=I.aEz[l]
o=new A.ar(B.T,B.Q,B.W,B.X,B.U)
o.b=B.ac
o.c=4.5
o.r=c0.gp(0)
o.d=B.bG
o.e=B.dP
c2.ah(new A.r(k,0),new A.r(k*1.12,22),o)
for(j=0;j<3;++j){o=new A.ar(B.T,B.Q,B.W,B.X,B.U)
o.r=p.gp(0)
c2.O(new A.r(k*(1+j*0.04),7+j*6.5),1.8,o)}}break
case 4:p=A.L()
p.r=c0.gp(0)
c2.cQ(D.fmr,3.204424506661589,3.015928947446201,!0,p)
p=A.ap(c0,B.c,0.25)
p.toString
c2.ah(K.aa3,K.aa2,C.iQ(p,1))
break
default:p=A.L()
p.r=c0.gp(0)
c2.cQ(D.flW,3.267256359733385,2.8902652413026098,!0,p)}i=B.i.D(c4.b,0,1)*0.4+0.1
p=A.bY(D.eBM,5,8)
o=D.aho.j(i)
n=A.L()
n.r=o.gp(0)
c2.c1(p,n)
n=A.bY(D.eAt,5,8)
p=D.aho.j(i)
o=A.L()
o.r=p.gp(0)
c2.c1(n,o)
h=c4.e*2.4
o=new A.aH(v,B.ak,b9,b9,A.a([],w))
o.E(new A.aZ(h-0.6,-2))
o.E(new A.cj(h-3.4,6,h-2.6,7.4))
o.E(new A.cj(h,8.8,h+2.6,7.4))
c2.af(o,C.iQ(c8.j(0.75),1.1))
o=A.L()
o.r=c8.gp(0)
c2.O(new A.r(h-1.5,7.2),0.7,o)
o=A.L()
o.r=c8.gp(0)
c2.O(new A.r(h+1.5,7.2),0.7,o)
g=B.i.F(c5*0.33+c6*0.37,1)>0.965?1:0
p=c4.d
o=c4.c>0.8?1.25:1
f=(1-g)*(1-p*0.6)*o
for(p=f<0.15,o=c3.f,n=f>0.12,e=2.5*f,d=c2.c,a0=e*2,a1=e*2.2,l=0;l<2;++l){a2=F.hp[l]
a3=c4.e
a4=a2>0?0.7:1
a5=a2*6.4+a3*2*a4
if(n){a3=Math.max(0.6,a0)
a4=A.bY(new A.r(a5,-3),a3,7)
a6=new A.ar(B.T,B.Q,B.W,B.X,B.U)
a6.r=B.c.j(0.96).gp(0)
c2.c1(a4,a6)
a7=a5+c4.y*1.5
a8=-3+c4.z*0.7
J.bs(d.save())
a6=A.a([],w)
a4=new A.aH(v,B.ak,b9,b9,a6)
a6.push(new A.jK(A.bY(new A.r(a5,-3),a3,7)))
a4.ac()
a3=a4.e
if(a3==null)a3=a4.e=new A.Et(a4.glc().a.snapshot())
d.clipPath(a3.a,$.mQ(),!0)
a3=new A.ar(B.T,B.Q,B.W,B.X,B.U)
a3.r=D.bn2.gp(0)
c2.O(new A.r(a7,a8),2.1,a3)
a3=new A.ar(B.T,B.Q,B.W,B.X,B.U)
a3.r=B.v.gp(0)
c2.O(new A.r(a7,a8),1.05,a3)
a3=new A.ar(B.T,B.Q,B.W,B.X,B.U)
a3.r=B.c.gp(0)
c2.O(new A.r(a7-0.7,a8-0.7),0.55,a3)
d.restore()}a3=o?D.a_B:c8.j(0.9)
a4=o?1.5:1.1
a9=new A.ar(B.T,B.Q,B.W,B.X,B.U)
a9.b=B.ac
a9.c=a4
a9.r=a3.gp(0)
a9.d=B.bG
a9.e=B.dP
a3=p?0.8:0
c2.cQ(A.bY(new A.r(a5,-3+a3),Math.max(1.2,a1),7.3500000000000005),3.2986722862692828,2.827433388230814,!1,a9)
a3=c4.c
b0=-9.2-a3*2.2
a4=a2*3.6
a6=a3<0?-a3*1.6:0
a3=a3>0?a3*0.6:0
if(u)b1=B.dT
else{b1=A.ap(c0,B.v,0.2)
b1.toString}b2=new A.ar(B.T,B.Q,B.W,B.X,B.U)
b2.b=B.ac
b2.c=1.7
b2.r=b1.gp(0)
b2.d=B.bG
b2.e=B.dP
c2.ah(new A.r(a5-a4,b0-a6+0.4),new A.r(a5+a4,b0-0.6-a3),b2)}b3=B.i.D(c4.a,0,1)
if(o)b4=D.bxz
else{u=A.ap(c8,D.bqP,0.6)
u.toString
b4=u}b5=c4.b
if(b3>0.06){b6=5+B.i.D(b5,0,1)*2.2
b7=1.2+b3*6.5
b8=new A.aH(v,B.ak,b9,b9,A.a([],w))
w=-b6
b8.E(new A.aZ(w,11.5))
b8.E(new A.cj(0,11.5+b7*0.2-c4.b*1.5,b6,11.5))
b8.E(new A.cj(0,11.5+b7*1.5+c4.b*1.5,w,11.5))
b8.E(new A.bA())
v=A.L()
v.r=D.bq6.gp(0)
c2.af(b8,v)
J.bs(d.save())
c2.mz(0,b8)
v=B.c.j(0.95)
u=A.L()
u.r=v.gp(0)
c2.aE(new A.a4(w,11,w+b6*2,13.2),u)
u=A.bY(new A.r(0,11.5+b7*1.1),b7*0.9,b6*1.4)
w=A.L()
w.r=D.bxE.gp(0)
c2.c1(u,w)
d.restore()
c2.af(b8,C.iQ(b4,1.1))}else{u=new A.aH(v,B.ak,b9,b9,A.a([],w))
p=11.5-b5*0.8
u.E(new A.aZ(-5.2,p))
u.E(new A.cj(0,13.1+b5*2.8,5.2,p))
c2.af(u,C.iQ(b4,1.5))
if(b5>0.6){w=new A.aH(v,B.ak,b9,b9,A.a([],w))
w.E(new A.aZ(-4.6,11.8))
w.E(new A.cj(0,15.1+b5*1.4,4.6,11.8))
w.E(new A.cj(0,13.5,-4.6,11.8))
v=B.c.j(0.9)
u=A.L()
u.r=v.gp(0)
c2.af(w,u)}}if(c4.b>0.2){c2.cQ(D.fm8,-1.2,2.2,!1,C.iQ(c8.j(0.5),0.8))
c2.cQ(D.flY,2.141592653589793,2.2,!1,C.iQ(c8.j(0.5),0.8))}if(o&&c1!==2){c1=c3.c
w=A.L()
w.r=c1.gp(0)
c2.O(D.eAb,1.7,w)
w=A.L()
w.r=c1.gp(0)
c2.O(D.eA8,1.7,w)}},
io_(a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=null,g=$.T(),f=new A.oU(new A.oo()),e=A.v1(f,h),d=a3.a,a0=a3.b,a1=Math.min(d/450,a0/900),a2=A.L()
a2.san(A.jP(B.J,new A.r(0,a0*0.46),D.dgp,D.d74,B.x,h))
e.aE(new A.a4(0,0,0+d,0+a0),a2)
a2=e.c
J.bs(a2.save())
a2.translate((d-450*a1)/2,(a0-900*a1)/2)
e.bV(0,a1)
w=new A.e2()
w.cT(8)
for(v=0;v<120;++v){d=w.ai()
a0=w.ai()
u=w.ai()
t=new A.ar(B.T,B.Q,B.W,B.X,B.U)
t.r=B.c.j(0.2+w.ai()*0.5).gp(0)
e.O(new A.r(d*450*1.4-90,a0*330-40),0.5+u*0.9,t)}J.bs(a2.save())
a2.translate(200,120)
e.jr(0,-0.5)
d=A.L()
a0=x.O
d.san(A.ws(B.J,230,A.a([D.blH,B.L],a0),h,B.x,h,h,0))
e.c1(D.fmD,d)
a2.restore()
d=A.L()
d.san(A.ws(D.aab,58,A.a([D.bp7,B.L],a0),h,B.x,h,h,0))
e.O(D.aab,58,d)
d=A.L()
d.r=D.bkp.gp(0)
e.O(D.aab,24,d)
d=A.L()
d.r=D.a01.gp(0)
e.O(D.eyw,5,d)
d=A.L()
d.r=D.a01.gp(0)
e.O(D.eyA,3.4,d)
d=A.L()
d.r=D.a01.gp(0)
e.O(D.eyz,2.4,d)
for(d=x.v,s=0;s<3;++s,g=u){u=A.a([],d)
r=new A.aH(g.r,B.ak,h,h,u)
u.push(new A.aZ(-60,420))
r.ac()
for(g=372+s*12,t=60+s*20,q=s*2,p=14-s*3,o=-60;o<=510;o+=8){n=new A.aq(o,g+Math.sin(o/t+q)*p+Math.sin(o/23+s)*3)
u.push(n)
m=r.f
if(m!=null)n.aj(m)
r.ac()}g=new A.aq(510,470)
u.push(g)
t=r.f
if(t!=null)g.aj(t)
r.ac()
g=new A.aq(-60,470)
u.push(g)
t=r.f
if(t!=null)g.aj(t)
r.ac()
g=new A.bA()
u.push(g)
u=r.f
if(u!=null)g.aj(u)
r.ac()
g=[D.biW,D.bkY,D.br8][s]
u=$.T()
t=new A.ar(B.T,B.Q,B.W,B.X,B.U)
t.r=g.gp(0)
e.af(r,t)}for(l=0;l<4;++l){o=D.cB6[l]
k=384+B.o.F(o,11)
g=o-2
d=k-24
u=new A.ar(B.T,B.Q,B.W,B.X,B.U)
u.b=B.ac
u.c=2.4
u.r=D.a0n.gp(0)
u.d=B.bG
u.e=B.dP
e.ah(new A.r(o,k),new A.r(g,d),u)
g=A.bY(new A.r(g,k-27),11,46)
u=new A.ar(B.T,B.Q,B.W,B.X,B.U)
u.r=D.a0n.gp(0)
e.c1(g,u)
d=A.bY(new A.r(o-12,d),8,24)
u=new A.ar(B.T,B.Q,B.W,B.X,B.U)
u.r=D.a0n.gp(0)
e.c1(d,u)}for(v=0;v<9;++v){g=B.o.F(v,3)
d=B.o.F(v,4)
u=new A.ar(B.T,B.Q,B.W,B.X,B.U)
u.r=D.bks.j(0.8).gp(0)
e.O(new A.r(20+v*52+g*7,400+d*5),1.2,u)}g=A.L()
g.san(A.jP(D.ex5,D.ex8,D.d9f,B.xG,B.x,h))
e.aE(new A.a4(-200,412,650,1300),g)
j=new A.e2()
j.cT(21)
for(v=0;v<260;++v){g=j.ai()
k=420+j.ai()*480
d=j.ai()
u=k/900+0.4
u=A.bY(new A.r(g*450,k),1+j.ai()*2*u,1.5+d*4*u)
g=j.h9()?B.c:B.v
d=new A.ar(B.T,B.Q,B.W,B.X,B.U)
d.r=g.j(0.06+j.ai()*0.06).gp(0)
e.c1(u,d)}J.bs(a2.save())
a2.translate(225,590)
e.nK(0,1,0.34)
g=A.L()
g.san(A.ws(B.J,250,A.a([D.bs8,D.bli,D.bu5],a0),A.a([0,0.8,1],x.n),B.x,h,h,0))
e.O(B.J,250,g)
a2.restore()
for(v=0;v<40;++v){o=j.ai()*450
k=640+j.ai()*260
g=j.ai()
d=A.ap(D.ajR,D.bjX,j.ai())
d.toString
for(g=k-(6+g*10),i=-1;i<=1;++i){$.T()
a0=new A.ar(B.T,B.Q,B.W,B.X,B.U)
a0.b=B.ac
a0.c=1.3
a0.r=d.gp(0)
a0.d=B.bG
a0.e=B.dP
e.ah(new A.r(o+i*2,k),new A.r(o+i*5,g+Math.abs(i)*3),a0)}}C.igI(e)
for(l=0;l<3;++l)C.ijX(e,D.aCm[l])
C.ijM(e,D.eyq)
for(o=118;o<190;o+=11){g=B.o.F(o,3)
d=B.o.F(o,4)
$.T()
a0=new A.ar(B.T,B.Q,B.W,B.X,B.U)
a0.b=B.ac
a0.c=2.4
a0.r=D.a0j.gp(0)
a0.d=B.bG
a0.e=B.dP
e.ah(new A.r(o,452+g),new A.r(o+1,436+d),a0)}e.ah(D.exy,D.exR,C.iQ(D.bkG,1.6))
a2.restore()
return f.mZ()},
igI(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null,h=$.T().r,g=x.v,f=new A.aH(h,B.ak,i,i,A.a([],g))
f.E(new A.aZ(358,462))
f.E(new A.i6(354,422,370,382,374,332))
f.E(new A.aq(410,332))
f.E(new A.i6(416,382,432,422,428,462))
f.E(new A.bA())
w=A.L()
w.san(A.jP(new A.r(354,0),new A.r(430,0),D.dFR,B.m6,B.x,i))
d.af(f,w)
v=new A.e2()
v.cT(4)
for(u=0;u<30;++u){t=364+v.ai()*56
s=462-v.ai()*126
w=v.ai()
r=v.ai()
q=B.v.j(0.18)
p=new A.ar(B.T,B.Q,B.W,B.X,B.U)
p.b=B.ac
p.c=1.1
p.r=q.gp(0)
p.d=B.bG
p.e=B.dP
d.ah(new A.r(t,s),new A.r(t+w*3-1.5,s+8+r*12),p)}for(o=0;o<6;++o){n=D.dlr[o]
w=n.a
r=392+w*12
q=-n.b
p=r+w*52
m=336+(q*46-8)
w=p+w*42
q=m+(q*34+4)
l=A.a([],g)
k=new A.aH(h,B.ak,i,i,l)
l.push(new A.aZ(r,336))
k.ac()
r=new A.cj(p,m,w,q)
l.push(r)
p=k.f
if(p!=null)r.aj(p)
k.ac()
r=new A.ar(B.T,B.Q,B.W,B.X,B.U)
r.b=B.ac
r.c=8
r.r=D.aia.gp(0)
r.d=B.bG
r.e=B.dP
d.af(k,r)
for(j=0;j<6;++j){r=v.ai()
p=v.ai()
m=v.ai()
l=new A.ar(B.T,B.Q,B.W,B.X,B.U)
l.r=A.ap(D.bky,D.br6,v.ai()).j(0.92).gp(0)
d.O(new A.r(w+(r*36-18),q+(p*18-14)),8+m*7,l)}w+=0
r=new A.ar(B.T,B.Q,B.W,B.X,B.U)
r.b=B.ac
r.c=1.2
r.r=D.a0j.gp(0)
r.d=B.bG
r.e=B.dP
d.ah(new A.r(w,q+8),new A.r(w,q+22),r)
q=A.bY(new A.r(w,q+28),13,7)
w=new A.ar(B.T,B.Q,B.W,B.X,B.U)
w.r=D.bsv.gp(0)
d.c1(q,w)}},
ijX(b4,b5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=null,a5=b5.a,a6=b5.b,a7=b5.c,a8=b5.d,a9=a7*0.5,b0=A.bY(new A.r(a5,a6+2),a9,a7*2.8),b1=B.v.j(0.3),b2=$.T(),b3=A.L()
b3.r=b1.gp(0)
b4.c1(b0,b3)
b2=b2.r
b3=x.v
w=new A.aH(b2,B.ak,a4,a4,A.a([],b3))
b0=a5-a7
b1=a6-a8
w.E(new A.aZ(b0,b1))
w.E(new A.aq(b0,a6))
v=a5+a7
w.E(new A.cj(a5,a6+a7*0.22,v,a6))
w.E(new A.aq(v,b1))
w.E(new A.bA())
u=A.L()
u.san(A.jP(new A.r(b0,0),new A.r(v,0),D.dly,B.m6,B.x,a4))
b4.af(w,u)
t=new A.e2()
t.cT(B.o.S(a5*7))
v=b4.c
J.bs(v.save())
b4.mz(0,w)
for(s=0;s<40;++s){r=b0+t.ai()*a7*2
q=b1+t.ai()*a8
u=t.ai()
p=t.ai()
o=B.v.j(0.14)
n=new A.ar(B.T,B.Q,B.W,B.X,B.U)
n.b=B.ac
n.c=1
n.r=o.gp(0)
n.d=B.bG
n.e=B.dP
b4.ah(new A.r(r,q),new A.r(r+4+u*5,q+p*2-1),n)}u=b1+5
p=a7*2
o=D.ajN.j(0.75)
n=A.L()
n.r=o.gp(0)
b4.aE(new A.a4(b0,u,b0+p,u+7),n)
for(u=a7/5,o=b1+12,n=b1+20,m=b0+2,l=0;l<B.i.bc(u);++l){k=m+l*10
j=A.a([],b3)
i=new A.aH(b2,B.ak,a4,a4,j)
j.push(new A.aZ(k,o))
i.ac()
h=new A.aq(k+5,n)
j.push(h)
g=i.f
if(g!=null)h.aj(g)
i.ac()
h=new A.aq(k+10,o)
j.push(h)
g=i.f
if(g!=null)h.aj(g)
i.ac()
h=new A.bA()
j.push(h)
j=i.f
if(j!=null)h.aj(j)
i.ac()
j=new A.ar(B.T,B.Q,B.W,B.X,B.U)
j.r=D.lQ.j(0.85).gp(0)
b4.af(i,j)}u=A.a([],b3)
f=new A.aH(b2,B.ak,a4,a4,u)
b2=a6-8
f.E(new A.aZ(b0,b2))
for(p/=6,l=0;l<=B.i.bc(p);++l){o=(l&1)===0?0:-5
o=new A.aq(b0+l*6,b2+o)
u.push(o)
n=f.f
if(n!=null)o.aj(n)
f.ac()}b4.af(f,C.iQ(D.ajN.j(0.7),1.6))
v.restore()
b0=$.T().r
b2=new A.aH(b0,B.ak,a4,a4,A.a([],b3))
u=a7*0.1
p=a5+u
o=a7*0.28
n=p-o
m=a6+1
b2.E(new A.aZ(n,m))
j=a6-a8*0.55
b2.E(new A.aq(n,j))
o=p+o
b2.E(new A.cj(p,a6-a8*0.82,o,j))
b2.E(new A.aq(o,m))
b2.E(new A.bA())
m=A.L()
m.r=D.ajZ.gp(0)
b4.af(b2,m)
m=A.L()
m.r=D.ajZ.gp(0)
b4.O(new A.r(a5-a7*0.62,a6-a8*0.5),u,m)
m=b5.e
u=b1-m
b2=a7*1.38
o=a5-b2
j=b1+4
p=a5+b2
e=new A.aH(b0,B.ak,a4,a4,A.a([],b3))
e.E(new A.aZ(o,j))
n=b1-m*0.55
e.E(new A.cj(a5-a9,n,a5,u))
e.E(new A.cj(a5+a9,n,p,j))
e.E(new A.cj(a5,b1+a7*0.34,o,j))
e.E(new A.bA())
b1=A.L()
n=a7*1.4
b1.san(A.jP(new A.r(a5-n,0),new A.r(a5+n,0),D.dpe,B.m6,B.x,a4))
b4.af(e,b1)
J.bs(v.save())
b4.mz(0,e)
for(a9=p-o,s=0;s<70;++s){d=s/69
b1=Math.sin(d*3.141592653589793)
p=t.ai()
n=(t.h9()?B.v:D.bk5).j(0.16)
i=new A.ar(B.T,B.Q,B.W,B.X,B.U)
i.b=B.ac
i.c=0.9
i.r=n.gp(0)
i.d=B.bG
i.e=B.dP
b4.ah(new A.r(a5+(p-0.5)*3,u),new A.r(o+a9*d,j+b1*a7*0.3),i)}for(l=1;l<5;++l){a0=u+m*l/4.6
a1=b2*l/4.6
b1=A.a([],b3)
p=new A.aH(b0,B.ak,a4,a4,b1)
n=a0+2
b1.push(new A.aZ(a5-a1,n))
p.ac()
n=new A.cj(a5,a0+7+l*1.5,a5+a1,n)
b1.push(n)
b1=p.f
if(b1!=null)n.aj(b1)
p.ac()
b1=B.v.j(0.22)
n=new A.ar(B.T,B.Q,B.W,B.X,B.U)
n.b=B.ac
n.c=1.2
n.r=b1.gp(0)
n.d=B.bG
n.e=B.dP
b4.af(p,n)}v.restore()
for(s=0;s<46;++s){d=s/45
a2=o+a9*d
a3=j+Math.sin(d*3.141592653589793)*a7*0.3
b1=t.ai()
b2=t.ai()
v=new A.ar(B.T,B.Q,B.W,B.X,B.U)
v.b=B.ac
v.c=1.1
v.r=D.brA.gp(0)
v.d=B.bG
v.e=B.dP
b4.ah(new A.r(a2,a3),new A.r(a2+(b1-0.5)*2,a3+3+b2*4),v)}a9=new A.aH(b0,B.ak,a4,a4,A.a([],b3))
b0=u+4
a9.E(new A.aZ(a5-2.5,b0))
a9.E(new A.aq(a5,u-7))
a9.E(new A.aq(a5+2.5,b0))
a9.E(new A.bA())
b0=A.L()
b0.r=D.bnx.gp(0)
b4.af(a9,b0)},
ijM(d,e){var w,v,u,t,s,r,q
for(w=e.a,v=e.b,u=v+0,t=v+-16,s=0;s<2;++s){r=w+I.aEw[s]
$.T()
q=new A.ar(B.T,B.Q,B.W,B.X,B.U)
q.b=B.ac
q.c=3
q.r=D.a0j.gp(0)
q.d=B.bG
q.e=B.dP
d.ah(new A.r(r,u),new A.r(r,t),q)}u=A.bY(e.a7(0,K.aNO),24,36)
t=$.T()
r=A.L()
r.r=D.bwL.gp(0)
d.c1(u,r)
t=new A.aH(t.r,B.ak,null,null,A.a([],x.v))
r=w-24
u=v-30
t.E(new A.aZ(r,u))
t.E(new A.aq(w,v-54))
t.E(new A.aq(w+24,u))
t.E(new A.cj(w,v-24,r,u))
t.E(new A.bA())
u=A.L()
u.r=D.aiS.gp(0)
d.af(t,u)},
ij8(d){switch(B.o.F(d,8)){case 0:return D.b2X
case 1:return D.b2V
case 2:return D.b2U
case 3:return D.b2T
case 4:return D.b2W
case 5:return D.b2Y
case 6:return D.hOk
default:return D.hOj}},
T9(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){var w=new C.bqR()
w.a=n
w.b=q
w.c=g
w.d=r
w.y=h
w.z=i
w.e=t
w.r=o
w.x=f
w.Q=j==null?D.aad:j
w.as=k==null?D.F2:k
C.hKb(d,e,p,C.ij8(m),w,s,m,l)},
hLG(d,e){return(0.2+0.8*Math.abs(Math.sin(d*10+e)))*(0.55+0.45*Math.sin(d*3.1+e*2))},
bVw:function bVw(){var _=this
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
tq:function tq(d,e,f,g,h,i,j,k,l,m){var _=this
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
bqR:function bqR(){var _=this
_.a=0
_.b=0.25
_.z=_.y=_.x=_.w=_.r=_.f=_.e=_.d=_.c=0
_.as=_.Q=null
_.at=!1},
ang:function ang(){this.b=this.a=null},
aY1:function aY1(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bVo:function bVo(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bVp:function bVp(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bVq:function bVq(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bVr:function bVr(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bVs:function bVs(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bVt:function bVt(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bVu:function bVu(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bVv:function bVv(){},
bVn:function bVn(d){this.a=d},
agQ:function agQ(d,e){this.a=d
this.b=e},
aeN:function aeN(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
Np(d){var w,v,u,t,s=A.a([],x.u)
for(w=d.f,v=w.length,u=0;u<w.length;w.length===v||(0,A.I)(w),++u){t=w[u]
if(!t.as&&B.a.i(t.b).length!==0)s.push(t)}s=new C.bU7(s)
s.bDk(d)
return s},
Hm(d,e,f,g,h,i,j){var w,v=A.U(g).k("X<1>")
v=A.d4(new A.X(g,new C.fCh(f),v),v.k("M.E"))
w=A.B(v,A.a3(v).k("ch.E"))
B.d.dX(w,d)
if(w.length===0)return null
v=A.a([f],x.s)
B.d.u(v,A.cU(w,0,A.dA(3,"count",x.S),A.U(w).c))
B.d.dX(v,d)
return new C.lL(e,v,B.d.cd(v,f),h,i,"tree",j)},
iEL(c5,c6,c7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3=null,b4="tf",b5="child",b6="children",b7="grandfather",b8="grandmother",b9="grandparent",c0=x.N,c1=A.S(c0,x.cg),c2=new C.hdS(c1),c3=x.s,c4=A.a([],c3)
for(w=c5.b,v=w.length,u=0;u<w.length;w.length===v||(0,A.I)(w),++u)c4.push(B.a.i(w[u].b))
c4=A.js(c4,c0)
t=A.B(c4,A.a3(c4).k("ch.E"))
c4=A.a([],c3)
for(v=w.length,u=0;u<w.length;w.length===v||(0,A.I)(w),++u){s=B.a.i(w[u].x)
if(s.length!==0)c4.push(s)}c4=A.js(c4,c0)
r=A.B(c4,A.a3(c4).k("ch.E"))
c4=A.a([],c3)
for(v=w.length,u=0;u<w.length;w.length===v||(0,A.I)(w),++u){s=B.a.i(w[u].z)
if(s.length!==0)c4.push(s)}c4=A.js(c4,c0)
q=A.B(c4,A.a3(c4).k("ch.E"))
for(c4=w.length,v=A.U(t).k("X<1>"),s=v.k("M.E"),p=A.U(w).k("X<1>"),o=p.k("M.E"),n=x.S,u=0;u<w.length;w.length===c4||(0,A.I)(w),++u){m=w[u]
l=B.a.i(m.b)
k=m.d
j=k==null
if(j)i=b3
else{h=c5.c
h===$&&A.d()
i=h.h(0,k)}if(i!=null){h=i.c
if(h===D.xb)g="father"
else g=h===D.oU?"mother":"parent"
h=B.a.i(i.b)
f=A.B(new A.X(t,new C.hdU(l),v),s)
e=h+" is the "+g+" of "+l
c2.$2("parent",C.Hm(c6,"Who is the "+g+" of "+l+"?",h,f,e+".",e+". A family is a chain, and each person is a link.",20))
if(c7){d=A.B(new A.X(w,new C.hdV(i,m),p),o)
B.d.dX(d,c6)
c2.$2(b4,new C.lL("True or false: "+h+" is the "+g+" of "+l+".",Ah.Th,0,"Yes, "+h+" is the "+g+" of "+l+".","",b4,15))
if(d.length!==0)c2.$2(b4,new C.lL("True or false: "+B.a.i(B.d.gG(d).b)+" is the "+g+" of "+l+".",Ah.Th,1,"No, the "+g+" of "+l+" is "+h+".","",b4,15))}}a0=c5.Gw(m)
h=a0.length
if(h!==0){a1=a0[c6.av(h)]
h=B.a.i(a1.b)
f=A.B(new A.X(t,new C.hdW(l,a0,c5),v),s)
e=a1.c
if(e===D.xb)e="son"
else e=e===D.oU?"daughter":b5
a2=l+" has "
a3=a0.length
a4=a3===1?b5:b6
c2.$2(b5,C.Hm(c6,"Which of these people is a child of "+l+"?",h,f,h+" is the "+e+" of "+l+".",a2+a3+" "+a4+", and "+h+" is one of them.",20))
h=a0.length
a5=A.eA([h+1,h+2,Math.max(0,h-1)],n)
a5.X(0,a0.length)
h=a0.length
a4=A.a([],c3)
for(f=a5.$ti,e=new A.mJ(a5,a5.r,f.k("mJ<1>")),e.c=a5.e,f=f.c;e.C();){a3=e.d
a4.push(A.v(a3==null?f.a(a3):a3))}f=a0.length
e=""+f
f=f===1
a3=f?b5:b6
f=f?b5:b6
c2.$2("count",C.Hm(c6,"How many children does "+l+" have?",""+h,a4,a2+e+" "+a3+".","Count them with me: "+l+" has "+e+" "+f+".",15))
if(a0.length>=2&&a0[0].Q!==a0[1].Q){h=B.a.i(B.d.gG(a0).b)
f=A.a([],c3)
for(e=A.U(a0),a2=e.k("iO<1>"),a3=new A.iO(a0,1,b3,a2),a3.na(a0,1,b3,e.c),a3=new A.bP(a3,a3.gJ(0),a2.k("bP<aj.E>")),a2=a2.k("aj.E");a3.C();){e=a3.d
f.push(B.a.i((e==null?a2.a(e):e).b))}c2.$2("oldest",C.Hm(c6,"Who is the oldest child of "+l+"?",h,f,B.a.i(B.d.gG(a0).b)+" was born first.","The first born of "+l+" is "+B.a.i(B.d.gG(a0).b)+". The eldest child often helps to guide the younger ones.",20))}}a6=c5.asp(m)
if(a6!=null){h=B.a.i(a6.b)
f=A.B(new A.X(t,new C.hdX(l),v),s)
e=l+" is married to "+h
c2.$2("spouse",C.Hm(c6,"Who is "+l+" married to?",h,f,e+".",e+". When two people marry, two families become one.",20))}if(j)i=b3
else{j=c5.c
j===$&&A.d()
i=j.h(0,k)}a7=b3
if(!(i==null)){k=i.d
if(!(k==null)){j=c5.c
j===$&&A.d()
k=j.h(0,k)
a7=k}}if(a7!=null){k=B.a.i(a7.b)
j=A.B(new A.X(t,new C.hdY(l),v),s)
h=k+" is the "
f=a7.c
e=f===D.xb
if(e)a2=b7
else a2=f===D.oU?b8:b9
if(e)f=b7
else f=f===D.oU?b8:b9
c2.$2("grand",C.Hm(c6,"Who is the grandparent of "+l+"?",k,j,h+a2+" of "+l+".",h+f+" of "+l+", two steps up the tree.",20))}a8=c5.aOg(m)
k=a8.length
if(k!==0){k=B.a.i(a8[c6.av(k)].b)
j=A.B(new A.X(t,new C.hdZ(l,a8,c5),v),s)
h=k+" and "+l
c2.$2("sibling",C.Hm(c6,"Who is a brother or sister of "+l+"?",k,j,h+" share the same parent.",h+" are brother and sister: the same roots, two branches.",20))}k=B.a.i(m.x)
if(k.length!==0){j=A.B(r,c0)
B.d.u(j,D.cU6)
h=l+" was born in "+k
c2.$2("place",C.Hm(c6,"Where was "+l+" born?",k,j,h+".",h+". Every one of us comes from a place.",20))}k=B.a.i(m.z)
if(k.length!==0){j=A.B(q,c0)
B.d.u(j,D.dam)
h=l+" works as "+k
f=h+"."
c2.$2("job",C.Hm(c6,"What work does "+l+" do?",k,j,f,h+". Work is how we serve the family and the village.",20))
h=A.a([],c3)
for(j=w.length,a9=0;a9<w.length;w.length===j||(0,A.I)(w),++a9){b0=w[a9]
if(B.a.i(b0.z).toLowerCase()!==k.toLowerCase())h.push(B.a.i(b0.b))}c2.$2("who",C.Hm(c6,"Who works as "+k+"?",l,h,f,"Remember: "+l+" works as "+k+".",20))}k=A.ag("(1[6-9]\\d\\d|20\\d\\d)",!0,!1,!1,!1).cI(m.w)
b1=k==null?b3:k.b[1]
if(b1!=null){b2=A.jd(b1,b3,b3)
c2.$2("year",C.Hm(c6,"In which year was "+l+" born?",b1,A.a([""+(b2+2),""+(b2-3),""+(b2+5),""+(b2-1)],c3),l+" was born in "+b1+".",l+" was born in the year "+b1+".",25))}}return c1},
bGf(d,e,f,g){var w,v,u,t,s,r,q,p,o,n={},m=C.Np(d),l=new A.e2()
l.cT(f)
w=C.iEL(m,l,g)
for(v=new A.dq(w,w.r,w.e);v.C();)J.htq(v.d,l)
v=A.a3(w).k("cs<1>")
u=A.B(new A.cs(w,v),v.k("M.E"))
B.d.dX(u,l)
t=A.a([],x.J)
s=A.aR(x.N)
n.a=0
for(;;){if(!(t.length<e&&B.d.aR(u,new C.fPZ(n,w))))break
for(v=u.length,r=0;r<u.length;u.length===v||(0,A.I)(u),++r){q=u[r]
if(t.length>=e)break
p=w.h(0,q)
p.toString
if(J.ad(p)>n.a){p=w.h(0,q)
p.toString
p=s.I(0,J.t(p,n.a).a)}else p=!1
if(p){p=w.h(0,q)
p.toString
t.push(J.t(p,n.a))}}++n.a}v=t.length
if(v<e){v=A.B(D.aBn,x.df)
B.d.dX(v,l)
for(p=v.length,r=0;r<v.length;v.length===p||(0,A.I)(v),++r){o=v[r]
if(t.length>=e)break
t.push(C.hKi(o,l))}}else if(!g&&v>3){o=C.hKi(D.aBn[l.av(14)],l)
t[t.length-1-l.av(3)]=o}return t},
hKi(d,e){var w=d.b,v=w[d.c]
w=A.B(w,x.N)
B.d.dX(w,e)
return new C.lL(d.a,w,B.d.cd(w,v),d.d,d.e,d.f,d.r)},
hPH(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=C.Np(a2),a1=new A.e2()
a1.cT(a3)
w=A.a([],x.ar)
v=x.u
u=A.a([],v)
for(t=a0.b,s=t.length,r=0;r<t.length;t.length===s||(0,A.I)(t),++r){q=t[r]
if(a0.Gw(q).length>=2)u.push(q)}B.d.dX(u,a1)
for(s=u.length,p=x.t,o=x.s,r=0;r<u.length;u.length===s||(0,A.I)(u),++r){n=u[r]
m=a0.Gw(n)
l=A.U(m)
k=new A.iO(m,0,5,l.k("iO<1>"))
k.na(m,0,5,l.c)
j=k.dk(0)
if(new A.O(j,new C.h4g(),A.U(j).k("O<1,F>")).fD(0).a<j.length)continue
m=B.a.i(n.b)
l=A.a([],o)
for(k=j.length,i=0;i<j.length;j.length===k||(0,A.I)(j),++i)l.push(B.a.i(j[i].b))
k=A.a([],p)
for(h=0;h<j.length;++h)k.push(h)
g=A.a([],p)
for(f=j.length,i=0;i<j.length;j.length===f||(0,A.I)(j),++i)g.push(C.aTM(a0,j[i]))
w.push(new C.avn("The children of "+m,"Tap two people to swap them. Put them in a line from the oldest to the youngest.",g,l,k))
if(w.length>=4)return w}u=x.S
e=A.S(u,x.do)
for(s=t.length,r=0;r<t.length;t.length===s||(0,A.I)(t),++r){q=t[r]
J.c6(e.c_(0,a0.anx(q),new C.h4h()),q)}if(e.a>=2&&w.length<4){t=e.$ti.k("cs<1>")
d=A.B(new A.cs(e,t),t.k("M.E"))
B.d.fd(d)
v=A.a([],v)
for(u=A.cU(d,0,A.dA(5,"count",u),A.U(d).c),t=u.$ti,u=new A.bP(u,u.gJ(0),t.k("bP<aj.E>")),t=t.k("aj.E");u.C();){s=u.d
s=e.h(0,s==null?t.a(s):s)
s.toString
m=J.cI(s)
m.dX(s,a1)
v.push(m.gG(s))}u=A.a([],o)
for(t=v.length,r=0;r<v.length;v.length===t||(0,A.I)(v),++r)u.push(B.a.i(v[r].b))
t=A.a([],p)
for(h=0;h<v.length;++h)t.push(h)
s=A.a([],p)
for(p=v.length,r=0;r<v.length;v.length===p||(0,A.I)(v),++r)s.push(C.aTM(a0,v[r]))
w.push(new C.avn("Which generation comes first?","Tap two people to swap them. Put the eldest generation first and the youngest last.",s,u,t))}return w},
aSd(d){return B.d.ap0(D.aDT,new C.fLN(d))},
iuC(d){return A.nK(new A.X(D.aDT,new C.fSQ(d),x.av))},
bUW(d){return C.hZz(d)},
hZz(d){var w=0,v=A.j(x.S),u,t=2,s=[],r,q,p,o
var $async$bUW=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.aB(),$async$bUW)
case 7:r=f
q=B.a.i(d)
q=A.eu(J.t(r.a,"ngmy_family_stars_v1_"+q.toLowerCase()))
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
return A.i($async$bUW,v)},
C7(d,e){return C.hZw(d,e)},
hZw(d,e){var w=0,v=A.j(x.S),u,t=2,s=[],r,q,p,o,n,m
var $async$C7=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.aB(),$async$C7)
case 7:r=g
p=B.a.i(d)
o=A.eu(J.t(r.a,"ngmy_family_stars_v1_"+p.toLowerCase()))
if(o==null)o=0
q=o+(e<0?0:e)
w=8
return A.b(r.aB("Int","ngmy_family_stars_v1_"+p.toLowerCase(),q),$async$C7)
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
return A.i($async$C7,v)},
bUV(d,e,f){return C.hZx(d,e,f)},
hZx(d,e,f){var w=0,v=A.j(x.S),u,t=2,s=[],r,q,p,o
var $async$bUV=A.e(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.aB(),$async$bUV)
case 7:r=h
q=B.a.i(d)
q=A.eu(J.t(r.a,"ngmy_family_best_v1_"+q.toLowerCase()+"_"+e+"_"+f))
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
return A.i($async$bUV,v)},
C8(d,e,f,g){return C.hZy(d,e,f,g)},
hZy(d,e,f,g){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n,m
var $async$C8=A.e(function(h,i){if(h===1){s.push(i)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.aB(),$async$C8)
case 7:r=i
p=B.a.i(d)
o=A.eu(J.t(r.a,"ngmy_family_best_v1_"+p.toLowerCase()+"_"+e+"_"+f))
q=o==null?0:o
w=g>q?8:9
break
case 8:w=10
return A.b(r.aB("Int","ngmy_family_best_v1_"+p.toLowerCase()+"_"+e+"_"+f,g),$async$C8)
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
return A.i($async$C8,v)},
bIz(d,e,f){var w
if(f<=0)return 0
w=d===f?20:0
return d*5+w+Math.min(e,8)},
hfX(d,e,f,g){return new C.alP(g,d==null?A.a(["","","",""],x.s):d,e,f)},
hXA(d){var w,v,u,t=d.h(0,"q")
t=J.k(t==null?"":t)
w=A.a([],x.s)
v=x.j
u=J.aQ(v.b(d.h(0,"a"))?v.a(d.h(0,"a")):B.bP)
while(u.C())w.push(J.k(u.gP(u)))
u=x.N
w=A.cU(w,0,A.dA(4,"count",x.S),u).dk(0)
B.d.u(w,A.c2(Math.max(0,4-(v.b(d.h(0,"a"))?J.ad(v.a(d.h(0,"a"))):0)),"",!1,u))
v=A.aJ(d.h(0,"c"))
v=v==null?null:B.i.M(v)
v=B.o.D(v==null?0:v,0,3)
u=A.aJ(d.h(0,"s"))
u=u==null?null:B.i.M(u)
return C.hfX(w,v,B.o.D(u==null?20:u,5,60),t)},
huA(d){var w,v,u,t,s,r,q=J.a2(d),p=q.h(d,"id")
p=J.k(p==null?"":p)
w=q.h(d,"title")
w=J.k(w==null?"":w)
v=A.a([],x.b)
u=x.j
q=J.aQ(u.b(q.h(d,"qs"))?u.a(q.h(d,"qs")):B.bP)
u=x.f
t=x.N
s=x.z
while(q.C()){r=q.gP(q)
if(u.b(r))v.push(C.hXA(A.a0(r,t,s)))}return new C.N8(p,w,v)},
hoB(d){var w,v=A.a([],x.c)
for(w=J.aQ(d.z);w.C();)v.push(C.huA(w.gP(w)))
return v},
aTM(d,e){var w=e.c===D.oU
if(d.anx(e)===0&&d.Gw(e).length!==0)return w?0:1
if(d.Gw(e).length!==0||d.asp(e)!=null)return w?2:3
return w?4:5},
hQM(a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=C.Np(a4),a3=new A.e2()
a3.cT(a5)
w=A.a([],x.dT)
v=a2.b
u=A.B(v,x.P)
B.d.dX(u,a3)
t=x.s
s=A.a([],t)
for(r=v.length,q=0;q<v.length;v.length===r||(0,A.I)(v),++q)s.push(B.a.i(v[q].b))
for(v=u.length,r=x.N,p=x.ec,o=x.cc,n=o.k("M.E"),q=0;q<u.length;u.length===v||(0,A.I)(u),++q){m=u[q]
l=A.a([],t)
k=m.d
if(k==null)j=null
else{i=a2.c
i===$&&A.d()
j=i.h(0,k)}h=a2.Gw(m)
g=a2.asp(m)
f=a2.aOg(m)
k=B.a.i(m.x)
if(k.length!==0)l.push("I was born in "+k+".")
k=B.a.i(m.z)
if(k.length!==0)l.push("I work as "+k+".")
k=A.ag("(1[6-9]\\d\\d|20\\d\\d)",!0,!1,!1,!1).cI(m.w)
e=k==null?null:k.b[1]
if(e!=null)l.push("I was born in the year "+e+".")
k=f.length
if(k!==0){i=k===1?"brother or sister":"brothers and sisters"
l.push("I have "+k+" "+i+".")}k=h.length
if(k!==0){i=k===1?"child":"children"
l.push("I have "+k+" "+i+".")}if(g!=null)l.push("I am married to "+B.a.i(g.b)+".")
if(h.length!==0){k=m.c
if(k===D.xb)k="father"
else k=k===D.oU?"mother":"parent"
l.push("I am the "+k+" of "+B.a.i(B.d.gG(h).b)+".")}if(j!=null){k=j.c
if(k===D.xb)k="father"
else k=k===D.oU?"mother":"parent"
l.push("My "+k+" is "+B.a.i(j.b)+".")}if(l.length<3)continue
B.d.dX(l,a3)
B.d.b0(l,new C.hei())
d=B.a.i(m.b)
a0=A.B(new A.X(s,new C.hej(d),o),n)
B.d.dX(a0,a3)
k=A.a([d],t)
i=A.U(a0)
a1=new A.iO(a0,0,3,i.k("iO<1>"))
a1.na(a0,0,3,i.c)
B.d.u(k,a1)
B.d.dX(k,a3)
a1=C.aTM(a2,m)
i=new A.iO(l,0,4,p)
i.na(l,0,4,r)
w.push(new C.bc7(d,a1,i.dk(0),k))
if(w.length>=5)break}return w},
hHD(d){return B.a.q(d,"married to")||B.a.q(d," of ")||B.a.Y(d,"My ")?1:0},
hPS(a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=C.Np(a4),a3=new A.e2()
a3.cT(a5)
w=A.a([],x.gy)
v=x.u
u=A.a([],v)
for(t=a2.b,s=t.length,r=0;r<t.length;t.length===s||(0,A.I)(t),++r){q=t[r]
if(a2.Gw(q).length>=2)u.push(q)}B.d.dX(u,a3)
for(s=u.length,p=x.t,o=x.s,n=x.P,m=x.fT,r=0;r<u.length;u.length===s||(0,A.I)(u),++r){l=u[r]
k=a2.Gw(l)
j=A.U(k)
i=new A.iO(k,0,4,j.k("iO<1>"))
i.na(k,0,4,j.c)
h=i.dk(0)
i=A.a([],v)
for(k=t.length,j=l.a,g=0;g<t.length;t.length===k||(0,A.I)(t),++g){q=t[g]
if(q.a!==j&&!B.d.aR(h,new C.h4T(q))&&q.d!==j)i.push(q)}B.d.dX(i,a3)
k=i.length
if(k===0)continue
k=Math.min(2,k)
j=new A.iO(i,0,k,m)
j.na(i,0,k,n)
f=j.dk(0)
j=B.a.i(l.b)
k=C.aTM(a2,l)
i=A.a([],o)
for(e=h.length,g=0;g<h.length;h.length===e||(0,A.I)(h),++g)i.push(B.a.i(h[g].b))
e=A.a([],p)
for(d=h.length,g=0;g<h.length;h.length===d||(0,A.I)(h),++g)e.push(C.aTM(a2,h[g]))
d=A.a([],o)
for(a0=f.length,g=0;g<f.length;f.length===a0||(0,A.I)(f),++g)d.push(B.a.i(f[g].b))
a0=A.a([],p)
for(a1=f.length,g=0;g<f.length;f.length===a1||(0,A.I)(f),++g)a0.push(C.aTM(a2,f[g]))
w.push(new C.aaR(j,k,i,e,d,a0))
if(w.length>=3)break}return w},
lL:function lL(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
bU7:function bU7(d){this.b=d
this.c=$},
bU8:function bU8(){},
bU9:function bU9(d){this.a=d},
fCh:function fCh(d){this.a=d},
hdS:function hdS(d){this.a=d},
hdT:function hdT(){},
hdU:function hdU(d){this.a=d},
hdV:function hdV(d,e){this.a=d
this.b=e},
hdW:function hdW(d,e,f){this.a=d
this.b=e
this.c=f},
hdR:function hdR(d,e){this.a=d
this.b=e},
hdX:function hdX(d){this.a=d},
hdY:function hdY(d){this.a=d},
hdZ:function hdZ(d,e,f){this.a=d
this.b=e
this.c=f},
hdQ:function hdQ(d,e){this.a=d
this.b=e},
fPZ:function fPZ(d,e){this.a=d
this.b=e},
avn:function avn(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
h4g:function h4g(){},
h4h:function h4h(){},
zS:function zS(d,e,f){this.a=d
this.b=e
this.c=f},
fLN:function fLN(d){this.a=d},
fSQ:function fSQ(d){this.a=d},
alP:function alP(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bOU:function bOU(){},
N8:function N8(d,e,f){this.a=d
this.b=e
this.c=f},
bc7:function bc7(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.e=g},
hei:function hei(){},
hej:function hej(d){this.a=d},
aaR:function aaR(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
h4T:function h4T(d){this.a=d},
bjv:function bjv(d,e,f){var _=this
_.a=d
_.b=e
_.c=f
_.d=-0.05
_.f=_.e=!1
_.r=0},
agO:function agO(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=1},
al7:function al7(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
al8:function al8(d,e,f,g,h){var _=this
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
_.bv$=g
_.ab$=h
_.c=_.a=null},
bN2:function bN2(d){this.a=d},
bMY:function bMY(){},
bN3:function bN3(){},
bMW:function bMW(){},
bMX:function bMX(){},
bN1:function bN1(d){this.a=d},
bMZ:function bMZ(d,e){this.a=d
this.b=e},
bN0:function bN0(d,e){this.a=d
this.b=e},
bN_:function bN_(d,e){this.a=d
this.b=e},
bMV:function bMV(d){this.a=d},
beE:function beE(d,e){this.b=d
this.a=e},
Rb:function Rb(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aCL:function aCL(d,e,f){this.b=d
this.c=e
this.a=f},
aBb:function aBb(d,e,f){this.a=d
this.b=e
this.c=f},
avZ:function avZ(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aw_:function aw_(d,e,f){var _=this
_.d=$
_.y=_.x=_.w=_.r=_.f=_.e=0
_.Q=_.z=$
_.as=d
_.at=""
_.ax=-1
_.ch=_.ay=!1
_.dz$=e
_.bd$=f
_.c=_.a=null},
csY:function csY(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
csZ:function csZ(d){this.a=d},
csX:function csX(d){this.a=d},
ct_:function ct_(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
ct0:function ct0(){},
ct1:function ct1(d,e){this.a=d
this.b=e},
ct2:function ct2(){},
ct3:function ct3(d){this.a=d},
csU:function csU(d){this.a=d},
csV:function csV(d,e){this.a=d
this.b=e},
csW:function csW(d,e,f){this.a=d
this.b=e
this.c=f},
csP:function csP(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
csR:function csR(d,e){this.a=d
this.b=e},
csS:function csS(d,e){this.a=d
this.b=e},
csQ:function csQ(d,e){this.a=d
this.b=e},
csO:function csO(){},
csT:function csT(){},
be5:function be5(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.a=h},
cT1:function cT1(){},
azX:function azX(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
azY:function azY(d){var _=this
_.d=$
_.e=0
_.f=1
_.y=_.x=_.w=_.r=0
_.z=d
_.Q=-1
_.ax=_.at=_.as=!1
_.ay=0
_.c=_.a=_.ch=null},
cHV:function cHV(d){this.a=d},
cHU:function cHU(d){this.a=d},
cI2:function cI2(d,e){this.a=d
this.b=e},
cI3:function cI3(d,e){this.a=d
this.b=e},
cI4:function cI4(d){this.a=d},
cI1:function cI1(d){this.a=d},
cI5:function cI5(d){this.a=d},
cI6:function cI6(d,e){this.a=d
this.b=e},
cI7:function cI7(){},
cI8:function cI8(d){this.a=d},
cHX:function cHX(d){this.a=d},
cHY:function cHY(d,e){this.a=d
this.b=e},
cHW:function cHW(d,e){this.a=d
this.b=e},
cHZ:function cHZ(){},
cI_:function cI_(){},
cI0:function cI0(d,e){this.a=d
this.b=e},
aAW:function aAW(){},
aIi:function aIi(){},
hmc(d){var w=d.a,v=d.b,u=Math.min(w/450,v/900)
return new A.btd((w-450*u)/2,(v-900*u)/2,u)},
agC:function agC(){},
fer:function fer(d){this.a=d},
aM8:function aM8(d){var _=this
_.a=d
_.b=null
_.c=""
_.d=0},
foO:function foO(d){this.a=d},
an6:function an6(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
an7:function an7(d,e,f,g,h,i,j){var _=this
_.e=_.d=$
_.f=d
_.r=$
_.w=e
_.z=_.y=_.x=0
_.at=_.as=_.Q=!1
_.ay=_.ax=-9
_.qg$=f
_.Mt$=g
_.ao3$=h
_.bv$=i
_.ab$=j
_.c=_.a=null},
bUU:function bUU(d){this.a=d},
bUT:function bUT(){},
bUR:function bUR(d){this.a=d},
bUP:function bUP(){},
bUQ:function bUQ(d){this.a=d},
bUM:function bUM(d,e){this.a=d
this.b=e},
bUN:function bUN(){},
bUO:function bUO(d){this.a=d},
bUS:function bUS(d,e){this.a=d
this.b=e},
bUL:function bUL(d){this.a=d},
buX:function buX(d,e){this.b=d
this.a=e},
fes:function fes(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fet:function fet(d,e,f){this.a=d
this.b=e
this.c=f},
feu:function feu(d,e,f){this.a=d
this.b=e
this.c=f},
fev:function fev(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
few:function few(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fex:function fex(){},
an4:function an4(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
an5:function an5(d,e,f,g,h,i,j){var _=this
_.d=$
_.e=d
_.x=_.w=_.r=_.f=0
_.y=-1
_.Q=_.z=$
_.as=e
_.ch=_.ay=_.ax=_.at=!1
_.cx=_.CW=-9
_.qg$=f
_.Mt$=g
_.ao3$=h
_.bv$=i
_.ab$=j
_.c=_.a=null},
bUx:function bUx(){},
bUI:function bUI(d,e){this.a=d
this.b=e},
bUJ:function bUJ(d){this.a=d},
bUK:function bUK(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bUE:function bUE(){},
bUD:function bUD(d,e){this.a=d
this.b=e},
bUF:function bUF(d,e){this.a=d
this.b=e},
bUG:function bUG(){},
bUH:function bUH(d){this.a=d},
bUz:function bUz(d){this.a=d},
bUA:function bUA(d){this.a=d},
bUB:function bUB(d){this.a=d},
bUy:function bUy(d,e){this.a=d
this.b=e},
bUC:function bUC(d){this.a=d},
bll:function bll(d,e){this.b=d
this.a=e},
dv7:function dv7(){},
a2O:function a2O(d,e){this.a=d
this.b=e},
an0:function an0(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
an1:function an1(d,e,f,g,h,i){var _=this
_.f=_.e=_.d=$
_.r=d
_.w=-1
_.at=_.as=_.z=_.y=_.x=0
_.ch=_.ay=_.ax=!1
_.cy=_.cx=_.CW=0
_.db=2.6
_.qg$=e
_.Mt$=f
_.ao3$=g
_.bv$=h
_.ab$=i
_.c=_.a=null},
bUj:function bUj(d){this.a=d},
bUi:function bUi(){},
bUh:function bUh(){},
bUb:function bUb(){},
bUc:function bUc(){},
bUg:function bUg(d,e,f){this.a=d
this.b=e
this.c=f},
bUf:function bUf(d){this.a=d},
bUd:function bUd(d,e){this.a=d
this.b=e},
bUe:function bUe(d){this.a=d},
bkL:function bkL(d,e){this.b=d
this.a=e},
aCO:function aCO(){},
bii:function bii(){},
aCQ:function aCQ(){},
bij:function bij(){},
aCR:function aCR(){},
bik:function bik(){},
uG(d,e,f,g,h){var w,v,u=null,t=A.n(18),s=A.a([],x.V)
s.push(new A.aa(0,B.H,f.j(0.4),B.hR,14))
w=x.p
v=A.a([],w)
if(g!=null)B.d.u(v,A.a([A.V(g,h,u,u,u,20),B.aa],w))
v.push(A.c(d,u,u,u,u,u,u,A.l(u,u,h,u,u,u,u,u,u,u,u,15,u,u,B.u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u))
return A.aA(u,A.p(u,A.A(v,B.l,u,B.e,B.O,0,u,u),B.f,u,u,new A.o(f,u,u,t,s,u,B.m),u,u,u,u,B.Pn,u,u,u),B.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,e,u,u,u,u,u,u,!1,B.a4)},
hvn(d,e,f,g,h,i,j){return new C.an2(i,h,d,j,e,f,g,null)},
a7k:function a7k(d,e){this.c=d
this.a=e},
bkS:function bkS(d){this.a=d},
tP:function tP(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bUa:function bUa(d){this.a=d},
IJ:function IJ(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
WV:function WV(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bnG:function bnG(d,e){var _=this
_.d=$
_.e=0
_.f=d
_.r=e
_.c=_.a=null},
e5E:function e5E(d,e){this.a=d
this.b=e},
e5F:function e5F(d){this.a=d},
e5G:function e5G(d,e){this.a=d
this.b=e},
e5C:function e5C(d){this.a=d},
e5D:function e5D(d){this.a=d},
e5B:function e5B(d){this.a=d},
e5z:function e5z(d){this.a=d},
e5A:function e5A(d){this.a=d},
e5y:function e5y(d,e){this.a=d
this.b=e},
e5H:function e5H(d){this.a=d},
e5I:function e5I(d,e){this.a=d
this.b=e},
e5J:function e5J(d,e){this.a=d
this.b=e},
e5K:function e5K(d,e){this.a=d
this.b=e},
e5N:function e5N(d,e){this.a=d
this.b=e},
e5O:function e5O(d,e){this.a=d
this.b=e},
e5P:function e5P(d,e){this.a=d
this.b=e},
e5Q:function e5Q(d,e){this.a=d
this.b=e},
e5R:function e5R(d,e){this.a=d
this.b=e},
e5S:function e5S(d,e,f){this.a=d
this.b=e
this.c=f},
e5T:function e5T(d,e){this.a=d
this.b=e},
e5U:function e5U(d,e){this.a=d
this.b=e},
e5L:function e5L(d){this.a=d},
e5M:function e5M(d){this.a=d},
a0G:function a0G(d,e){this.a=d
this.b=e},
an2:function an2(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
an3:function an3(d){var _=this
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
bUv:function bUv(d){this.a=d},
bUw:function bUw(d){this.a=d},
bUu:function bUu(d){this.a=d},
bUl:function bUl(d){this.a=d},
bUm:function bUm(d){this.a=d},
bUk:function bUk(d){this.a=d},
bUr:function bUr(d,e,f){this.a=d
this.b=e
this.c=f},
bUs:function bUs(d){this.a=d},
bUo:function bUo(d,e){this.a=d
this.b=e},
bUp:function bUp(d,e,f){this.a=d
this.b=e
this.c=f},
bUt:function bUt(){},
bUq:function bUq(d,e){this.a=d
this.b=e},
bUn:function bUn(d){this.a=d},
UA:function UA(d,e){this.c=d
this.a=e},
an_:function an_(d){var _=this
_.e=_.d=$
_.f=d
_.c=_.a=null},
bTW:function bTW(d){this.a=d},
bTX:function bTX(d){this.a=d},
bU6:function bU6(){},
bU5:function bU5(d,e,f){this.a=d
this.b=e
this.c=f},
bU0:function bU0(d,e){this.a=d
this.b=e},
bU_:function bU_(d,e){this.a=d
this.b=e},
bU1:function bU1(d){this.a=d},
bU2:function bU2(d,e){this.a=d
this.b=e},
bU3:function bU3(d,e){this.a=d
this.b=e},
bTZ:function bTZ(d,e){this.a=d
this.b=e},
bU4:function bU4(d,e,f){this.a=d
this.b=e
this.c=f},
bTY:function bTY(d,e){this.a=d
this.b=e},
it4(a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=null,a3="(1[5-9]\\d\\d|20\\d\\d)",a4=C.ajU(a6),a5=a4.length
if(a5===0)return""
w=A.S(x.N,x.P)
for(v=0;v<a4.length;a4.length===a5||(0,A.I)(a4),++v){u=a4[v]
w.n(0,u.a,u)}t=A.bD(new A.W(Date.now(),0,!1))
s=new C.fPp(w,a4)
a5=a4.length
r='Family tree "'+a6.b+'" ('+a5+" people):\n"
for(q=A.U(a4),p=q.k("X<1>"),q=q.k("cO<1,m>"),o=q.k("M.E"),n=x.s,v=0;v<a4.length;a4.length===a5||(0,A.I)(a4),++v){u=a4[v]
m=A.a([],n)
l=u.c
if(l!==D.zG)m.push(l===D.xb?"male":"female")
l=u.w
k=A.ag(a3,!0,!1,!1,!1).cI(l)
j=k==null?a2:k.b[1]
k=u.y
i=A.ag(a3,!0,!1,!1,!1).cI(k)
h=i==null?a2:i.b[1]
l=B.a.i(l)
i=l.length===0
if(!i){g=B.a.i(u.x)
g=g.length!==0?" in "+g:""
m.push("born "+l+g)}if(i&&B.a.i(u.x).length!==0)m.push("from "+B.a.i(u.x))
l=B.a.i(k)
if(l.length!==0)m.push("died "+l)
l=j!=null
if(l&&h==null)m.push("about "+(t-A.jd(j,a2,a2))+" years old")
if(l&&h!=null)m.push("lived about "+(A.jd(h,a2,a2)-A.jd(j,a2,a2))+" years")
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
m.push("child of "+l+k)}a0=A.B(new A.cO(new A.X(a4,new C.fPn(u,f),p),new C.fPo(),q),o)
if(a0.length!==0)m.push("children: "+B.d.aL(a0,", "))
l=m.length===0?"":" \u2014 "+B.d.aL(m,"; ")
l=r+("- "+u.b+l)
a1=B.a.i(u.r)
r=a1.length
if(r!==0){l+=". Notes: "+(r>600?B.a.aw(a1,0,600)+"\u2026":a1)
r=l}else r=l
r+="\n"}return B.a.i(r.charCodeAt(0)==0?r:r)},
it5(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=C.ajU(a0),d=e.length
if(d===0)return""
w=x.N
v=A.S(w,x.P)
for(u=0;t=e.length,u<t;e.length===d||(0,A.I)(e),++u){s=e[u]
v.n(0,s.a,s)}r=new C.fPu(v,e)
q=new C.fPs(v)
p=A.S(w,x.S)
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
p.n(0,s.a,d)}}d=p.$ti.k("ba<2>")
d=A.d4(new A.ba(p,d),d.k("M.E"))
n=A.B(d,A.a3(d).k("ch.E"))
B.d.fd(n)
for(d=n.length,w=x.s,u=0,t="";u<n.length;n.length===d||(0,A.I)(n),++u){m=n[u]
t+="Generation "+(m+1)+"\n"
for(l=B.d.gae(e),k=new A.eQ(l,new C.fPt(p,m));k.C();t=f){j=l.gP(0)
i=A.a([],w)
h=r.$1(j)
if(h!=null)i.push("married to "+v.h(0,h).b)
g=j.d
if(g!=null&&v.am(0,g)&&h!==g)i.push("child of "+v.h(0,g).b)
j=j.b
f=i.length===0?"":" \u2014 "+B.d.aL(i,", ")
f=t+("\u2022 "+j+f+"\n")}t+="\n"}return B.a.i(t.charCodeAt(0)==0?t:t)},
idZ(d,e,f,g){var w,v,u=C.it6(d,e)
if(u<=0||f.length<=u)return new A.agg(!1,D.El,f)
if(g.q(0,e.a))return new A.agg(!1,D.El,f)
w=A.U(f).c
v=A.cU(f,0,A.dA(u,"count",x.S),w).dk(0)
return new A.agg(!0,A.cU(f,u,null,w).dk(0),v)},
ie_(d3,d4,d5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1=d5?d3.f:C.ajU(d3),d2=d1.length
if(d2===0)return D.hLk
w=x.N
v=A.S(w,x.P)
for(u=0;u<d1.length;d1.length===d2||(0,A.I)(d1),++u){t=d1[u]
v.c_(0,t.a,new C.dkl(t))}s=new C.dkC(v)
d2=x.dy
r=A.S(w,d2)
q=new C.dku(r)
for(p=new A.dq(v,v.r,v.e);p.C();){o=p.d
n=o.e
if(!s.$1(n)||n===o.a)continue
o=o.a
n.toString
q.$2(o,n)
q.$2(n,o)}m=new C.dkt(r)
l=A.S(w,x.do)
for(p=new A.dq(v,v.r,v.e);p.C();){o=p.d
k=o.d
j=!0
if(s.$1(k)){i=o.a
if(k!==i){k.toString
j=m.$2(k,i)}}if(j)continue
J.c6(l.c_(0,k,new C.dkm()),o)}h=new C.dks(s)
g=new C.dkr(l,r)
p=v.$ti.k("ba<2>")
o=p.k("X<M.E>")
f=A.B(new A.X(new A.ba(v,p),new C.dkn(h),o),o.k("M.E"))
e=f.length===0?new A.ba(v,p).gG(0):B.d.gG(f)
p=f.length
if(p>1)for(d=-1,u=0;u<f.length;f.length===p||(0,A.I)(f),++u){t=f[u]
a0=g.$2(t.a,A.aR(w))
if(a0>d){d=a0
e=t}}a1=A.aR(w)
p=x.S
a2=A.S(w,p)
a3=A.S(w,w)
a4=A.S(w,d2)
d2=x.i
a5=A.S(w,d2)
a6=A.S(w,x.d9)
a7=A.S(w,d2)
a8=A.a([],x.s)
a9=new C.dkA(new C.dkw(a1,a2,v,r,a3,l,d3,d4,a4,a5,a6),a8,A.S(p,d2),a7)
p=e.a
a9.$2(p,0)
for(o=new A.dq(v,v.r,v.e),j=a2.gan2(a2);o.C();){b0=o.d
i=b0.a
if(a1.q(0,i))continue
b1=A.eA([i],w)
for(;h.$1(b0);b0=k){k=v.h(0,b0.d)
i=k.a
if(a1.q(0,i)||!b1.I(0,i))break}if(h.$1(b0)&&a2.am(0,b0.d)){i=a2.h(0,b0.d)
i.toString
b2=i+1}else{i=r.h(0,b0.a)
b3=A.nK(J.dN(i==null?B.Z:i,j))
if(b3!=null){i=a2.h(0,b3)
i.toString
b2=i}else b2=0}a9.$2(b0.a,b2)}b4=A.S(w,x.dO)
b5=A.a([],x.M)
b6=A.S(w,d2)
b7=new C.dkk(a2,new C.dkB(),b6,a3,b4,v,a4,a5,a6,b5)
for(d2=a8.length,u=0;u<a8.length;a8.length===d2||(0,A.I)(a8),++u){b8=a8[u]
w=a7.h(0,b8)
w.toString
b7.$2(b8,w)}for(d2=new A.dq(b4,b4.r,b4.e),b9=1/0,c0=0,c1=16;d2.C();){w=d2.d.b
o=w.a
b9=Math.min(b9,o-42)
c0=Math.max(c0,o+42)
c1=Math.max(c1,w.b+112+156)}for(d2=b5.length,u=0;u<d2;++u){w=b5[u].b
o=w.a
b9=Math.min(b9,o-42)
c0=Math.max(c0,o+42)
c1=Math.max(c1,w.b+112+40)}c2=24-(b9===1/0?0:b9)
d2=b4.$ti.k("cs<1>")
d2=A.B(new A.cs(b4,d2),d2.k("M.E"))
w=d2.length
u=0
for(;u<d2.length;d2.length===w||(0,A.I)(d2),++u){b8=d2[u]
c3=b4.h(0,b8)
o=c3.a
j=c3.b
b4.n(0,b8,new C.GV(o,new A.r(j.a+c2,j.b)))}for(d2=b5.length,c4=0;c4<d2;++c4){c5=b5[c4]
w=c5.b
b5[c4]=new C.Lc(c5.a,new A.r(w.a+c2,w.b),c5.c,c5.d)}d2=b6.$ti.k("cs<1>")
d2=A.B(new A.cs(b6,d2),d2.k("M.E"))
w=d2.length
u=0
for(;u<d2.length;d2.length===w||(0,A.I)(d2),++u){b8=d2[u]
o=b6.h(0,b8)
o.toString
b6.n(0,b8,o+c2)}c6=A.a([],x.dE)
a3.bP(0,new C.dko(c6,b4))
for(d2=new A.cg(a4,a4.$ti.k("cg<1,2>")).gae(0),w=x.g;d2.C();){c7=d2.d
c8=c7.a
c9=b6.h(0,c8)
if(c9==null)continue
o=A.a([],w)
for(j=J.aQ(c7.b);j.C();){i=j.gP(j)
if(b6.am(0,i)){d0=b6.h(0,i)
d0.toString
o.push(new A.r(d0,b4.h(0,i).b.b))}}for(j=B.d.gae(b5),i=new A.eQ(j,new C.dkp(c8));i.C();)o.push(j.gP(0).b)
if(o.length===0)continue
B.d.b0(o,new C.dkq())
c6.push(new C.aM2(new A.r(c9,b4.h(0,c8).b.b+112),B.J,!1,o))}return new C.bio(b4,c6,b5,c0+c2+24,c1+24,p,b6.h(0,p))},
hL2(d){var w=A.ag("(1[5-9]\\d\\d|20\\d\\d)",!0,!1,!1,!1).cI(d)
return w==null?null:w.b[1]},
hEG(d,e,f,g,h,i,j,k,l,m,n){return new C.a0U(k,f,j,e,l,n,m,d,g,h,i,null)},
aEP(d,e,f,g,h,i,j){return new C.bmb(i,d,e,f,j,h,g,null)},
as9:function as9(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aGn:function aGn(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
e7j:function e7j(d){this.a=d},
e7i:function e7i(d){this.a=d},
e7l:function e7l(d,e){this.a=d
this.b=e},
e7m:function e7m(d,e){this.a=d
this.b=e},
e7n:function e7n(d){this.a=d},
e7h:function e7h(d,e){this.a=d
this.b=e},
e7k:function e7k(d){this.a=d},
e7p:function e7p(d){this.a=d},
e7o:function e7o(d,e){this.a=d
this.b=e},
as3:function as3(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aGk:function aGk(d,e,f){var _=this
_.d=$
_.e=d
_.f=!1
_.r=e
_.w=f
_.x=!1
_.c=_.a=_.y=null},
e6K:function e6K(d){this.a=d},
e6I:function e6I(d){this.a=d},
e6J:function e6J(d){this.a=d},
e6L:function e6L(d,e){this.a=d
this.b=e},
e6F:function e6F(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e66:function e66(d){this.a=d},
e67:function e67(d,e){this.a=d
this.b=e},
e6o:function e6o(d){this.a=d},
e6m:function e6m(d){this.a=d},
e6n:function e6n(d,e){this.a=d
this.b=e},
e6p:function e6p(d){this.a=d},
e6q:function e6q(d,e){this.a=d
this.b=e},
e6E:function e6E(d,e){this.a=d
this.b=e},
e6l:function e6l(d){this.a=d},
e6k:function e6k(d){this.a=d},
e6j:function e6j(d,e){this.a=d
this.b=e},
e6B:function e6B(){},
e6C:function e6C(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
e6A:function e6A(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
e6u:function e6u(d){this.a=d},
e6v:function e6v(d,e,f){this.a=d
this.b=e
this.c=f},
e6t:function e6t(d,e){this.a=d
this.b=e},
e6w:function e6w(d,e){this.a=d
this.b=e},
e6r:function e6r(d,e){this.a=d
this.b=e},
e6s:function e6s(){},
e6x:function e6x(d,e){this.a=d
this.b=e},
e6y:function e6y(d){this.a=d},
e6z:function e6z(d,e){this.a=d
this.b=e},
e6D:function e6D(d,e){this.a=d
this.b=e},
e5V:function e5V(d,e){this.a=d
this.b=e},
e5W:function e5W(d,e){this.a=d
this.b=e},
e6N:function e6N(d,e,f){this.a=d
this.b=e
this.c=f},
e6H:function e6H(d,e,f){this.a=d
this.b=e
this.c=f},
e6G:function e6G(d){this.a=d},
e5X:function e5X(d){this.a=d},
e5Y:function e5Y(d){this.a=d},
e5Z:function e5Z(){},
e6_:function e6_(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e63:function e63(d,e){this.a=d
this.b=e},
e62:function e62(d,e){this.a=d
this.b=e},
e61:function e61(d){this.a=d},
e64:function e64(d,e){this.a=d
this.b=e},
e60:function e60(d){this.a=d},
e6M:function e6M(d){this.a=d},
e6g:function e6g(){},
e6h:function e6h(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e6f:function e6f(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e6b:function e6b(d,e,f){this.a=d
this.b=e
this.c=f},
e6a:function e6a(d,e,f){this.a=d
this.b=e
this.c=f},
e68:function e68(d,e){this.a=d
this.b=e},
e6c:function e6c(d){this.a=d},
e6d:function e6d(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e69:function e69(d,e){this.a=d
this.b=e},
e6e:function e6e(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e6i:function e6i(d,e){this.a=d
this.b=e},
e6U:function e6U(){},
e6V:function e6V(d,e){this.a=d
this.b=e},
e6W:function e6W(d){this.a=d},
e6X:function e6X(d,e){this.a=d
this.b=e},
e6Q:function e6Q(d){this.a=d},
e6O:function e6O(d,e){this.a=d
this.b=e},
e6R:function e6R(d,e){this.a=d
this.b=e},
e6S:function e6S(d,e){this.a=d
this.b=e},
e6T:function e6T(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
e6Y:function e6Y(d){this.a=d},
e6P:function e6P(d){this.a=d},
e65:function e65(d){this.a=d},
bim:function bim(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
dki:function dki(d){this.a=d},
dkh:function dkh(d,e){this.a=d
this.b=e},
dkj:function dkj(d){this.a=d},
dkg:function dkg(d,e){this.a=d
this.b=e},
fPp:function fPp(d,e){this.a=d
this.b=e},
fPq:function fPq(d){this.a=d},
fPr:function fPr(){},
fPn:function fPn(d,e){this.a=d
this.b=e},
fPo:function fPo(){},
fPu:function fPu(d,e){this.a=d
this.b=e},
fPv:function fPv(d){this.a=d},
fPw:function fPw(){},
fPs:function fPs(d){this.a=d},
fPt:function fPt(d,e){this.a=d
this.b=e},
Lc:function Lc(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
GV:function GV(d,e){this.a=d
this.b=e},
bio:function bio(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
dkl:function dkl(d){this.a=d},
dkC:function dkC(d){this.a=d},
dku:function dku(d){this.a=d},
dkv:function dkv(){},
dkt:function dkt(d){this.a=d},
dkm:function dkm(){},
dks:function dks(d){this.a=d},
dkr:function dkr(d,e){this.a=d
this.b=e},
dkn:function dkn(d){this.a=d},
dkw:function dkw(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
dkx:function dkx(d){this.a=d},
dky:function dky(d){this.a=d},
dkz:function dkz(){},
dkA:function dkA(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dkB:function dkB(){},
dkk:function dkk(d,e,f,g,h,i,j,k,l,m){var _=this
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
dko:function dko(d,e){this.a=d
this.b=e},
dkp:function dkp(d){this.a=d},
dkq:function dkq(){},
aM2:function aM2(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bip:function bip(d,e){this.b=d
this.a=e},
dkD:function dkD(){},
dkE:function dkE(d){this.a=d},
dkF:function dkF(d){this.a=d},
dkG:function dkG(){},
bmc:function bmc(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bhp:function bhp(d,e){this.b=d
this.a=e},
bAm:function bAm(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
fuo:function fuo(d){this.a=d},
bpz:function bpz(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
f4c:function f4c(d){this.a=d},
f4b:function f4b(d,e){this.a=d
this.b=e},
a0U:function a0U(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
aEN:function aEN(){var _=this
_.y=_.x=_.w=_.r=_.f=_.e=_.d=$
_.as=_.Q=_.z=null
_.at=1
_.ax=0
_.ay=!1
_.c=_.a=null},
dAT:function dAT(d,e){this.a=d
this.b=e},
dAS:function dAS(d){this.a=d},
dAQ:function dAQ(d){this.a=d},
dAR:function dAR(d){this.a=d},
dB1:function dB1(d){this.a=d},
dB2:function dB2(d){this.a=d},
dB0:function dB0(d,e){this.a=d
this.b=e},
dB3:function dB3(){},
dB6:function dB6(d){this.a=d},
dB_:function dB_(d,e){this.a=d
this.b=e},
dB5:function dB5(){},
dB7:function dB7(d){this.a=d},
dAZ:function dAZ(d,e){this.a=d
this.b=e},
dB8:function dB8(d){this.a=d},
dAY:function dAY(d){this.a=d},
dB9:function dB9(d){this.a=d},
dAX:function dAX(d){this.a=d},
dBa:function dBa(d){this.a=d},
dAW:function dAW(d){this.a=d},
dBb:function dBb(d){this.a=d},
dAV:function dAV(d){this.a=d},
dBc:function dBc(d){this.a=d},
dAU:function dAU(d,e){this.a=d
this.b=e},
dB4:function dB4(d){this.a=d},
af9:function af9(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bmb:function bmb(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
af8:function af8(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.f=f
_.r=g
_.w=h
_.a=i
_.$ti=j},
bma:function bma(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
dBd:function dBd(d){this.a=d},
dBe:function dBe(d,e){this.a=d
this.b=e},
aEO:function aEO(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aL4:function aL4(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
afa:function afa(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
dBn:function dBn(d){this.a=d},
GR:function GR(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
hzq(d){var w=d.cH,v=x.N
return w.iW(w,new C.cho(),v,v)},
i5f(d){var w=d.bF
if(w>=0)return w
return 5},
hzs(d,e){var w,v=B.a.i(e.toLowerCase())
if(v.length===0)return null
w=C.hzq(d).h(0,v)
if(w==null||w.length===0)return null
return A.be(w)},
hzr(d,e){var w=C.hzs(d,e)
if(w!=null&&w.ca(new A.W(Date.now(),0,!1)))return!0
return!1},
i5g(d,e){var w,v,u,t,s=B.a.i(e.toLowerCase())
if(s.length===0)return
w=x.N
v=A.a0(C.hzq(d),w,w)
u=C.hzs(d,e)
t=u!=null&&u.ca(new A.W(Date.now(),0,!1))?u:new A.W(Date.now(),0,!1)
v.n(0,s,t.bL(A.du(30,0,0,0,0,0).a).aa().ag())
d.cH=v},
b2J(d,e,f,g,h,i,j){var w=0,v=A.j(x.y),u,t
var $async$b2J=A.e(function(k,l){if(k===1)return A.f(l,v)
for(;;)switch(w){case 0:if(j.w){u=!0
w=1
break}t=j.a
w=3
return A.b(A.lT(t,B.Kl),$async$b2J)
case 3:if(l){u=!0
w=1
break}u=A.lt(!1,f,t,!1,g.length!==0?g:"Subscribe for Family Tree access \u2014 create trees and upload photos (30 days).",B.Kl,i)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$b2J,v)},
cho:function cho(){},
i5d(){var w,v=$.oI(),u=J.e4(8,x.N)
for(w=0;w<8;++w)u[w]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[v.av(32)]
return"FT"+B.d.hl(u)},
JE(){var w=0,v=A.j(x.a),u,t=2,s=[],r,q,p,o,n,m
var $async$JE=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.cd(),$async$JE)
case 3:if(!e){u=A.S(x.N,x.z)
w=1
break}t=5
w=8
return A.b(A.fa("ngmy_family_tree_backup_codes_v1",null,!1,B.bN),$async$JE)
case 8:r=e
if(r==null){u=A.S(x.N,x.z)
w=1
break}q=J.t(r,"codes")
if(x.f.b(q)){o=A.a0(q,x.N,x.z)
u=o
w=1
break}t=2
w=7
break
case 5:t=4
m=s.pop()
p=A.ac(m)
$.an.$1("[family tree sync codes] load: "+A.v(p))
w=7
break
case 4:w=2
break
case 7:u=A.S(x.N,x.z)
w=1
break
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$JE,v)},
a93(d){return C.i5e(d)},
i5e(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$a93=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.cd(),$async$a93)
case 3:if(!f){w=1
break}t=5
w=8
return A.b(A.i1("ngmy_family_tree_backup_codes_v1",A.J(["codes",d,"savedAt",new A.W(Date.now(),0,!1).aa().ag()],x.N,x.z),!1,!1,B.cX,null),$async$a93)
case 8:t=2
w=7
break
case 5:t=4
p=s.pop()
r=A.ac(p)
$.an.$1("[family tree sync codes] save: "+A.v(r))
w=7
break
case 4:w=2
break
case 7:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$a93,v)},
chn(d){var w=0,v=A.j(x.T),u,t,s,r,q,p,o,n,m
var $async$chn=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:n=B.a.i(d.toLowerCase())
if(n.length===0){u=null
w=1
break}m=J
w=3
return A.b(C.JE(),$async$chn)
case 3:t=m.il(f),t=t.gae(t),s=x.f
case 4:if(!t.C()){w=5
break}r=t.gP(t)
q=r.b
if(s.b(q)){p=J.a2(q)
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
return A.i($async$chn,v)},
OK(d){var w=0,v=A.j(x.T),u,t,s,r,q,p,o,n
var $async$OK=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:if(B.a.i(d).length===0){u=null
w=1
break}w=3
return A.b(C.chn(d),$async$OK)
case 3:t=f
w=t!=null?4:5
break
case 4:w=6
return A.b(C.JE(),$async$OK)
case 6:s=f
r=J.a2(s)
q=r.h(s,t)
w=x.f.b(q)?7:8
break
case 7:p=x.N
o=x.z
o=A.dE(A.a0(q,p,o),p,o)
o.n(0,"active",!0)
o.n(0,"updatedAt",new A.W(Date.now(),0,!1).aa().ag())
r.n(s,t,o)
w=9
return A.b(C.a93(s),$async$OK)
case 9:case 8:u=t
w=1
break
case 5:n=C.i5d()
w=10
return A.b(C.JE(),$async$OK)
case 10:s=f
J.aK(s,n,A.J(["email",B.a.i(d.toLowerCase()),"active",!0,"createdAt",new A.W(Date.now(),0,!1).aa().ag(),"updatedAt",new A.W(Date.now(),0,!1).aa().ag()],x.N,x.K))
w=11
return A.b(C.a93(s),$async$OK)
case 11:u=n
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$OK,v)},
b2I(d){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n,m,l,k,j
var $async$b2I=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:j=B.a.i(d.toLowerCase())
if(j.length===0){w=1
break}w=3
return A.b(C.JE(),$async$b2I)
case 3:t=f
for(s=J.dx(t),r=s.gdS(t),r=r.dk(r),q=r.length,p=x.f,o=!1,n=0;n<r.length;r.length===q||(0,A.I)(r),++n){m=r[n]
l=m.b
if(p.b(l)){k=J.t(l,"email")
k=B.a.i(J.k(k==null?"":k).toLowerCase())===j}else k=!1
if(k){s.X(t,m.a)
o=!0}}w=o?4:5
break
case 4:w=6
return A.b(C.a93(t),$async$b2I)
case 6:case 5:case 1:return A.h(u,v)}})
return A.i($async$b2I,v)},
a94(d,e,f){var w=0,v=A.j(x.H),u
var $async$a94=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:if(f||B.a.i(d).length===0){w=1
break}w=6
return A.b(C.as8(d,e),$async$a94)
case 6:w=h?3:5
break
case 3:w=7
return A.b(C.OK(d),$async$a94)
case 7:w=4
break
case 5:w=8
return A.b(C.b2I(d),$async$a94)
case 8:case 4:case 1:return A.h(u,v)}})
return A.i($async$a94,v)},
as2(d,e,f,g,h,i){var w=0,v=A.j(x.y),u,t,s,r,q,p,o
var $async$as2=A.e(function(j,k){if(j===1)return A.f(k,v)
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
return A.b(C.as8(f,e),$async$as2)
case 5:k=!k
case 4:if(k){u=!1
w=1
break}w=6
return A.b(A.cd(),$async$as2)
case 6:if(!k){u=!1
w=1
break}o=J
w=7
return A.b(C.JE(),$async$as2)
case 7:q=o.t(k,t)
if(!x.f.b(q)){u=!1
w=1
break}p=J.a2(q)
if(!J.z(p.h(q,"active"),!0)){u=!1
w=1
break}p=p.h(q,"email")
u=B.a.i(J.k(p==null?"":p).toLowerCase())===s
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$as2,v)},
b2H(d,e){var w=0,v=A.j(x.y),u,t,s,r,q
var $async$b2H=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=B.a.i(d).toUpperCase()
if(r.length===0||r==="ADMIN-LOCAL"){u=!0
w=1
break}w=3
return A.b(A.cd(),$async$b2H)
case 3:if(!g){u=!1
w=1
break}q=J
w=4
return A.b(C.JE(),$async$b2H)
case 4:t=q.t(g,r)
if(!x.f.b(t)){u=!1
w=1
break}s=J.a2(t)
if(!J.z(s.h(t,"active"),!0)){u=!1
w=1
break}s=s.h(t,"email")
u=B.a.i(J.k(s==null?"":s).toLowerCase())===B.a.i(e.toLowerCase())
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$b2H,v)},
i5h(){var w,v=$.oI(),u=J.e4(10,x.N)
for(w=0;w<10;++w)u[w]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[v.av(32)]
return"FT"+B.d.hl(u)},
as5(d,e){var w=0,v=A.j(x.he),u,t,s,r,q,p
var $async$as5=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(A.cd(),$async$as5)
case 3:if(!g){u=null
w=1
break}t=C.i5h()
w=4
return A.b(A.WW(),$async$as5)
case 4:s=g
r=B.e2.aK(B.V.au(d.f4(),null))
r=B.cS.gcp().aK(r)
q=e?999:2
J.aK(s,t,A.J(["ownerEmail",d.b,"code",d.a,"payload",r,"usesRemaining",q,"createdAt",new A.W(Date.now(),0,!1).aa().ag()],x.N,x.K))
w=5
return A.b(A.a95(s),$async$as5)
case 5:p=e?999:2
u=new A.a23("NGMYFTSYNC2|"+t,t,p)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$as5,v)},
as4(d){var w=0,v=A.j(x.m),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$as4=A.e(function(e,a0){if(e===1)return A.f(a0,v)
for(;;)switch(w){case 0:g=B.a.i(d)
if(g.length===0){u=null
w=1
break}w=3
return A.b(A.WW(),$async$as4)
case 3:p=a0
o=J.a2(p)
n=o.h(p,g)
if(!x.f.b(n)){u=null
w=1
break}m=J.a2(n)
l=A.aJ(m.h(n,"usesRemaining"))
k=l==null?null:B.i.M(l)
if(k==null)k=0
if(k<=0){u=null
w=1
break}l=m.h(n,"ownerEmail")
j=J.k(l==null?"":l)
l=m.h(n,"code")
w=4
return A.b(C.b2H(J.k(l==null?"":l),j),$async$as4)
case 4:if(!a0)$.an.$1("[family tree qr stash] owner code inactive; allowing stash restore")
m=m.h(n,"payload")
t=J.k(m==null?"":m)
if(J.ad(t)===0){u=null
w=1
break}s=null
try{r=B.cg.cG(0,B.cJ.aK(t))
s=C.hzt(r)}catch(f){q=A.ac(f)
$.an.$1("[family tree qr stash] decode: "+A.v(q))
u=null
w=1
break}if(s==null){u=null
w=1
break}h=k-1
if(h<=0)o.X(p,g)
else{m=x.N
l=x.z
l=A.dE(A.a0(n,m,l),m,l)
l.n(0,"usesRemaining",h)
l.n(0,"lastUsedAt",new A.W(Date.now(),0,!1).aa().ag())
o.n(p,g,l)}w=5
return A.b(A.a95(p),$async$as4)
case 5:u=s
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$as4,v)},
hzt(d){var w,v,u,t,s=null
try{w=B.V.aP(0,d,s)
if(!x.f.b(w))return s
u=J.t(w,"marker")
if(J.k(u==null?"":u)!=="ngmyFamilyTreeSync")return s
u=C.i5j(A.a0(w,x.N,x.z))
return u}catch(t){v=A.ac(t)
$.an.$1("[family tree sync] parse: "+A.v(v))
return s}},
hi5(d){var w=0,v=A.j(x.m),u,t,s
var $async$hi5=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=B.a.i(d)
if(B.a.Y(s,"NGMYFTSYNC2|")){t=s.split("|")
if(t.length>=2){u=C.as4(t[1])
w=1
break}u=null
w=1
break}u=C.hzt(s)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$hi5,v)},
i5j(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=d.h(0,"code"),h=J.k(i==null?"":i)
i=d.h(0,"ownerEmail")
w=J.k(i==null?"":i)
if(h.length===0||w.length===0)return null
v=d.h(0,"trees")
i=x.j
if(i.b(v)){u=J.cN(v,x.f)
u=A.cw(u,new C.chq(),u.$ti.k("M.E"),x.k)
t=A.a3(u).k("X<M.E>")
s=A.B(new A.X(u,new C.chr(),t),t.k("M.E"))}else s=A.a([],x._)
u=d.h(0,"exportedAt")
r=A.be(J.k(u==null?"":u))
if(r==null)r=new A.W(Date.now(),0,!1)
q=A.S(x.N,x.d)
p=d.h(0,"familyBooks")
u=x.f
if(u.b(p))for(t=J.il(p),t=t.gae(t),o=x.B;t.C();){n=t.gP(t)
m=J.k(n.a)
l=n.b
if(!i.b(l))continue
n=J.cN(l,u)
n=A.cw(n,new C.chs(),n.$ti.k("M.E"),o)
k=A.a3(n).k("X<M.E>")
j=A.B(new A.X(n,new C.cht(),k),k.k("M.E"))
if(j.length!==0)q.n(0,m,j)}return new C.as6(h,w,s,r,q)},
as8(d,e){var w=0,v=A.j(x.y),u,t
var $async$as8=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:if(B.a.i(d).length===0){u=!1
w=1
break}if(T.OA(e,d)){u=!0
w=1
break}t=J
w=3
return A.b(C.BC(d),$async$as8)
case 3:u=t.cJ(g)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$as8,v)},
chz(d){var w=0,v=A.j(x.bC),u,t,s
var $async$chz=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=J
w=3
return A.b(C.BC(d),$async$chz)
case 3:t=s.b8(f,new C.chA(),x.cs)
t=A.B(t,t.$ti.k("aj.E"))
B.d.b0(t,new C.chB())
u=t
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$chz,v)},
WX(d,e,f,g){var w=0,v=A.j(x.m),u,t,s,r,q,p,o,n,m
var $async$WX=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:if(B.a.i(e).length===0){u=null
w=1
break}t=!f
m=t
if(m){w=3
break}else i=m
w=4
break
case 3:w=5
return A.b(C.as8(e,d),$async$WX)
case 5:i=!i
case 4:if(i){u=null
w=1
break}w=t?6:8
break
case 6:w=9
return A.b(C.OK(e),$async$WX)
case 9:s=i
if(s==null){u=null
w=1
break}w=7
break
case 8:s="ADMIN-LOCAL"
case 7:w=10
return A.b(C.BC(e),$async$WX)
case 10:r=i
if(g!=null&&B.a.i(g).length!==0){t=J.dN(r,new C.chx(g))
r=A.B(t,t.$ti.k("M.E"))}t=J.a2(r)
if(t.gar(r)){u=null
w=1
break}t=t.dP(r,new C.chy(e),x.k)
r=A.B(t,t.$ti.k("aj.E"))
q=A.S(x.N,x.d)
t=r.length,p=0
case 11:if(!(p<r.length)){w=13
break}o=r[p].a
w=14
return A.b(C.M3(e,o),$async$WX)
case 14:n=i
if(J.cJ(n))q.n(0,o,n)
case 12:r.length===t||(0,A.I)(r),++p
w=11
break
case 13:u=new C.as6(s,B.a.i(e.toLowerCase()),r,new A.W(Date.now(),0,!1),q)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$WX,v)},
b2M(d,e,f,g){var w=0,v=A.j(x.T),u,t,s,r,q
var $async$b2M=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:w=3
return A.b(C.WX(d,e,f,g),$async$b2M)
case 3:q=i
if(q==null){u=null
w=1
break}t=g!=null&&q.c.length!==0?B.d.gG(q.c).b:"all-family-trees"
s=A.ag("[^\\w\\-.]+",!0,!1,!1,!1)
s=A.aL(t,s,"_")
r=q.a
u=A.HB(A.L8(q.f4(),null,"  "),"ngmy-family-trees-"+s.toLowerCase()+"-"+r+".ngmy.json",!1)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$b2M,v)},
b2L(d,e,f,g){var w=0,v=A.j(x.eo),u,t,s,r
var $async$b2L=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:w=3
return A.b(C.WX(d,e,f,g),$async$b2L)
case 3:r=i
if(r==null){u=null
w=1
break}w=4
return A.b(C.as5(r,f),$async$b2L)
case 4:t=i
if(t==null){u=null
w=1
break}s=t.a
u=new A.aJ3(r.a,s,t.c)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$b2L,v)},
WY(d,e,f,a0){var w=0,v=A.j(x.gG),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$WY=A.e(function(a1,a2){if(a1===1)return A.f(a2,v)
for(;;)switch(w){case 0:w=3
return A.b(C.hi5(a0),$async$WY)
case 3:g=a2
if(g==null){u=null
w=1
break}t=B.a.Y(B.a.i(a0),"NGMYFTSYNC2|")
s=g.b
r=B.a.i(s.toLowerCase())!==B.a.i(e.toLowerCase())
w=!t?4:5
break
case 4:w=6
return A.b(C.as2(g.a,d,e,f,s,r),$async$WY)
case 6:if(!a2){if(r)throw A.Y(A.bc("This backup expired or the sender's tree is no longer available."))
throw A.Y(A.bc("Backup code is locked. Create a family tree or renew your advisor pass to restore."))}case 5:q=B.a.i(s.toLowerCase())!==B.a.i(e.toLowerCase())
p=g.c,o=p.length,n=g.e,m=0,l=0,k=0
case 7:if(!(k<p.length)){w=9
break}j=p[k]
i=j.a
if(i.length===0){w=8
break}w=q?10:11
break
case 10:w=12
return A.b(C.bFU(e,j),$async$WY)
case 12:case 11:w=13
return A.b(C.ajC(e,j,s),$async$WY)
case 13:h=n.h(0,i)
w=h!=null&&J.cJ(h)?14:15
break
case 14:w=16
return A.b(C.BM(e,i,h),$async$WY)
case 16:case 15:++m
l+=j.f.length
case 8:p.length===o||(0,A.I)(p),++k
w=7
break
case 9:if(m===0){u=null
w=1
break}u=new A.btj(l,m,q)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$WY,v)},
as6:function as6(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
chv:function chv(){},
chw:function chw(){},
chu:function chu(){},
chq:function chq(){},
chr:function chr(){},
chs:function chs(){},
cht:function cht(){},
chA:function chA(){},
chB:function chB(){},
chx:function chx(d){this.a=d},
chy:function chy(d){this.a=d},
hrr(d,e,f,g,h,i,j){var w=j.a
if(w.length===0)return A.f8(null,x.H)
return A.hN(d,new C.as7(w,e,g,i,f,h,null),!0,null,x.H)},
dkf(d,e,f,g,h,i,j,k){return new C.bil(i,e,k,j,g,f,h,d,null)},
as7:function as7(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aGm:function aGm(d){var _=this
_.d=d
_.e=!1
_.f=null
_.r=!1
_.c=_.a=null},
e76:function e76(d){this.a=d},
e77:function e77(d,e,f){this.a=d
this.b=e
this.c=f},
e7b:function e7b(d,e){this.a=d
this.b=e},
e7c:function e7c(d){this.a=d},
e73:function e73(d){this.a=d},
e74:function e74(d,e){this.a=d
this.b=e},
e75:function e75(d,e){this.a=d
this.b=e},
e7a:function e7a(d){this.a=d},
e79:function e79(d,e){this.a=d
this.b=e},
e78:function e78(){},
e7e:function e7e(d){this.a=d},
e7f:function e7f(d,e){this.a=d
this.b=e},
e7d:function e7d(d,e){this.a=d
this.b=e},
dkH:function dkH(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
bin:function bin(d,e,f){this.d=d
this.e=e
this.a=f},
aep:function aep(d,e,f){this.c=d
this.d=e
this.a=f},
bil:function bil(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.y=k
_.a=l},
biq:function biq(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
a1d:function a1d(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aGl:function aGl(){var _=this
_.d=!1
_.c=_.a=_.e=null},
e6Z:function e6Z(d,e){this.a=d
this.b=e},
e7_:function e7_(d){this.a=d},
e70:function e70(d){this.a=d},
e71:function e71(d){this.a=d},
e72:function e72(d){this.a=d},
a1e:function a1e(d){this.a=d},
bnH:function bnH(d){var _=this
_.d=d
_.e=!1
_.c=_.a=null},
e7g:function e7g(d,e){this.a=d
this.b=e},
b1f(d,e){return new C.b1e(d,e,null)},
b1e:function b1e(d,e,f){this.c=d
this.d=e
this.a=f},
ivA(d){if(!(d!=null&&B.a.Y(d,"ngmy:thumb:")))return null
return B.a.aY(d,11)},
iDh(d){return A.bU(B.L,null,new C.h6p(new C.ur(A.Q(d).ax.a===B.I)),d,!0,!0,!0,null,!1,!1,x.N)},
hBw(d,e){return new C.avb(e,d,null)},
aTG(d,e,f,g,h,i,j){var w=C.ivA(i)
if(w!=null)return A.by(e,new A.a5(j,f,new C.a86(w,!0,null),null),B.aq)
return O.aT0(e,B.c_,f,g,h,i,j)},
md:function md(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a86:function a86(d,e,f){this.c=d
this.d=e
this.a=f},
bnl:function bnl(d,e){var _=this
_.e=_.d=$
_.dz$=d
_.bd$=e
_.c=_.a=null},
dT8:function dT8(d){this.a=d},
dT9:function dT9(){},
dTa:function dTa(d,e){this.a=d
this.b=e},
bnk:function bnk(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
h6p:function h6p(d){this.a=d},
h6o:function h6o(d,e){this.a=d
this.b=e},
h6n:function h6n(d,e){this.a=d
this.b=e},
h6m:function h6m(d,e){this.a=d
this.b=e},
avb:function avb(d,e,f){this.c=d
this.d=e
this.a=f},
crf:function crf(d,e){this.a=d
this.b=e},
aOv:function aOv(){},
iD2(d){var w=null
return A.ce(w,w,!0,w,new C.h5N(),d,w,!0,!0,x.e2)},
iEg(d,e,f,g,h){var w=null
return A.ce(w,w,!0,w,new C.hdA(h,g,f,e),d,w,!0,!0,x.N)},
iD4(d,e){var w=null
return A.ce(w,w,!0,w,new C.h5R(e),d,w,!0,!0,x.dY)},
iD3(d){var w=null
return A.ce(w,w,!0,w,new C.h5Q(),d,w,!0,!0,x.c5)},
aWE:function aWE(d,e){this.a=d
this.b=e},
aWD:function aWD(d){this.a=d},
aUF:function aUF(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
h5N:function h5N(){},
hdA:function hdA(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
h5R:function h5R(d){this.a=d},
h5Q:function h5Q(){},
a_R:function a_R(d,e){this.c=d
this.a=e},
aBv:function aBv(){var _=this
_.d=$
_.c=_.a=_.e=null},
dbL:function dbL(d){this.a=d},
dbM:function dbM(d){this.a=d},
dbK:function dbK(d,e){this.a=d
this.b=e},
dbN:function dbN(d){this.a=d},
dbO:function dbO(d){this.a=d},
a_Q:function a_Q(d){this.a=d},
aBu:function aBu(){this.d=$
this.c=this.a=null},
dbH:function dbH(d){this.a=d},
dbI:function dbI(d){this.a=d},
dbJ:function dbJ(d){this.a=d},
a_k:function a_k(d){this.a=d},
aAa:function aAa(){var _=this
_.r=_.f=_.e=_.d=$
_.w="each"
_.c=_.a=null},
cJA:function cJA(){},
cJG:function cJG(d){this.a=d},
cJH:function cJH(d){this.a=d},
cJI:function cJI(d){this.a=d},
cJF:function cJF(){},
cJJ:function cJJ(d){this.a=d},
cJK:function cJK(d){this.a=d},
cJE:function cJE(){},
cJL:function cJL(d,e){this.a=d
this.b=e},
cJD:function cJD(d,e){this.a=d
this.b=e},
cJB:function cJB(d,e){this.a=d
this.b=e},
cJM:function cJM(d){this.a=d},
cJC:function cJC(){},
cJN:function cJN(d){this.a=d},
a3_:function a3_(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bAe:function bAe(){this.d=$
this.c=this.a=null},
ftU:function ftU(d,e){this.a=d
this.b=e},
ftV:function ftV(d){this.a=d},
ftW:function ftW(d,e){this.a=d
this.b=e},
adq:function adq(d,e){this.a=d
this.b=e},
GG:function GG(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
bAc:function bAc(d,e){var _=this
_.d=$
_.bv$=d
_.ab$=e
_.c=_.a=null},
ftS:function ftS(d,e){this.a=d
this.b=e},
aA3:function aA3(d,e){this.c=d
this.a=e},
bAd:function bAd(d,e){var _=this
_.d=$
_.bv$=d
_.ab$=e
_.c=_.a=null},
ftT:function ftT(d){this.a=d},
bAb:function bAb(d,e,f,g,h,i){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.a=i},
aQC:function aQC(){},
aQD:function aQD(){},
bI_(d,e,f,g){var w,v=null,u=Math.abs(d),t=B.i.bc(u),s=B.o.D(B.i.S((u-t)*100),0,99),r=d<0?"-":"",q=A.o4(B.o.v(t),A.ag("(\\d{1,3})(?=(\\d{3})+(?!\\d))",!0,!1,!1,!1),new C.h43(),v),p=f?34:16,o=f?18:12,n=A.a([],x.R)
if(r.length!==0)n.push(A.cW(v,v,v,v,v,v,v,v,v,A.l(v,v,e,v,v,v,v,v,v,v,v,p*0.7,v,v,g,v,v,!0,v,v,v,v,v,v,v,v),r))
n.push(A.cW(v,v,v,v,v,v,v,v,v,A.l(v,v,e.j(0.82),v,v,v,v,v,v,v,v,o,v,v,B.N,v,v,!0,v,v,v,v,v,v,v,v),"$"))
n.push(A.cW(v,v,v,v,v,v,v,v,v,A.l(v,v,e,v,v,v,v,v,v,v,v,p,v,v,g,v,1.05,!0,v,-0.6,v,v,v,v,v,v),q))
w=B.a.aZ(B.o.v(s),2,"0")
n.push(A.cW(v,v,v,v,v,v,v,v,v,A.l(v,v,e.j(0.88),v,v,v,v,v,v,v,v,o,v,v,B.D,v,v,!0,v,v,v,v,v,v,v,v),"."+w))
return A.KL(A.cW(n,v,v,v,v,v,v,v,v,v,v),v,v,v,v)},
aTi(){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l
var $async$aTi=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:w=3
return A.b(new A.ih().l6(85,1280,B.eZ),$async$aTi)
case 3:m=e
if(m==null){u=null
w=1
break}t=5
w=8
return A.b(m.fu(),$async$aTi)
case 8:r=e
if(J.ad(r)===0){u=null
w=1
break}q=C.hBv()
w=9
return A.b(C.cre(q,r),$async$aTi)
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
$.an.$1("[worksheets] pick photo failed: "+A.v(o))
u=null
w=1
break
w=7
break
case 4:w=2
break
case 7:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$aTi,v)},
aTE(d,e){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$aTE=A.e(function(a0,a1){if(a0===1){s.push(a1)
w=t}for(;;)switch(w){case 0:g=d==null?null:B.a.i(d)
if(g==null||g.length===0){u=null
w=1
break}i=B.a.Y(g,"ngmy:ws-thumb:")
if(i){u=C.crb(g)
w=1
break}if(!B.a.Y(g,"data:image")){u=g
w=1
break}r=5e5
if(g.length<=r){u=g
w=1
break}t=4
q=B.a.q(g,",")?B.d.gal(g.split(",")):g
p=B.cJ.aK(q)
o=960
case 7:if(!(o>=96)){w=8
break}w=9
return A.b(A.HC(p,!0,null,o).de(0,B.fY),$async$aTE)
case 9:n=a1
w=10
return A.b(n.la(),$async$aTE)
case 10:m=a1
w=11
return A.b(m.b.ho(B.ho),$async$aTE)
case 11:l=a1
m.b.t()
if(l==null){w=8
break}i=J.eU(B.dM.gaS(l))
k="data:image/png;base64,"+B.cS.gcp().aK(i)
if(J.ad(k)<=r){u=k
w=1
break}o=B.i.S(o*0.72)
w=7
break
case 8:t=2
w=6
break
case 4:t=3
f=s.pop()
j=A.ac(f)
$.an.$1("[worksheets] thumbnail shrink failed: "+A.v(j))
w=6
break
case 3:w=2
break
case 6:u=g
w=1
break
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$aTE,v)},
h43:function h43(){},
ur:function ur(d){this.a=d},
ava:function ava(d,e,f){this.c=d
this.d=e
this.a=f},
aHU:function aHU(){var _=this
_.d=$
_.e=!1
_.c=_.a=null},
f1m:function f1m(d,e){this.a=d
this.b=e},
f1d:function f1d(d){this.a=d},
f1e:function f1e(d){this.a=d},
f1k:function f1k(d,e){this.a=d
this.b=e},
f1j:function f1j(d,e){this.a=d
this.b=e},
f1g:function f1g(d,e){this.a=d
this.b=e},
f1f:function f1f(d,e){this.a=d
this.b=e},
f1h:function f1h(d){this.a=d},
f1i:function f1i(d,e){this.a=d
this.b=e},
f1l:function f1l(d,e){this.a=d
this.b=e},
f18:function f18(d,e){this.a=d
this.b=e},
f1c:function f1c(d){this.a=d},
f1b:function f1b(d,e){this.a=d
this.b=e},
f1a:function f1a(d){this.a=d},
f1n:function f1n(d,e){this.a=d
this.b=e},
f1o:function f1o(d,e){this.a=d
this.b=e},
f19:function f19(d,e){this.a=d
this.b=e},
hPi(d,e,f){var w="thumbnailPath",v=e.ak()
if(f!=null&&f.length!==0)v.n(0,w,f)
else v.X(0,w)
return A.J(["type","ngmy_worksheet_project_v1","ownerEmail",B.a.i(d),"exportedAt",new A.W(Date.now(),0,!1).aa().ag(),"project",v],x.N,x.z)},
h44(d,e,f){var w=0,v=A.j(x.N),u
var $async$h44=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:u=B.V.au(C.hPi(e,f,f.c),null)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$h44,v)},
bI1(d,e){var w=0,v=A.j(x.N),u,t,s,r
var $async$bI1=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=C
w=4
return A.b(C.h44(!0,d,e),$async$bI1)
case 4:w=3
return A.b(r.av8(g,d,e.a),$async$bI1)
case 3:s=g
if(s!=null){u=s.a
w=1
break}t=B.e2.aK(B.V.au(C.hPi(d,e,null),null))
u="NGMY_WS:"+B.kX.gcp().aK(t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bI1,v)},
hG7(d){var w,v=d.z,u=v==null?null:B.a.i(v)
if(u!=null&&u.length!==0)return u
v=d.d
w=v==null?null:B.a.i(v)
if(w!=null&&w.length!==0)return w
return null},
hr0(d){var w,v,u,t="ngmy_worksheet_project_v1",s=B.a.i(d)
if(J.ad(s)===0)return!1
if(J.d9(s,"NGMYWSSYNC2|"))return!0
if(J.d9(s,"NGMY_WS:"))return!0
if(J.eD(s,t))return!0
if(J.d9(s,"{"))try{w=B.V.aP(0,s,null)
if(x.f.b(w)){v=J.t(w,"type")
v=J.k(v==null?"":v)===t}else v=!1
if(v)return!0}catch(u){}return!1},
iB1(d){var w,v,u,t=C.hG7(d)
if(t==null)return null
if(C.hr0(t))return t
w=B.a.cd(t,"NGMYWSSYNC2|")
if(w>=0){v=B.a.i(B.a.aY(t,w))
if(C.hr0(v))return v}u=B.a.cd(t,"NGMY_WS:")
if(u>=0){v=B.a.i(B.a.aY(t,u))
if(C.hr0(v))return v}return null},
hr_(d){var w,v,u,t,s,r=null,q=B.a.i(d)
if(J.ad(q)===0)return r
if(J.d9(q,"NGMYWSSYNC2|"))return r
try{w=null
t=x.a
if(J.d9(q,"NGMY_WS:")){v=B.cg.cG(0,B.cJ.aK(J.nf(q,8)))
w=t.a(B.V.aP(0,v,r))}else w=t.a(B.V.aP(0,q,r))
t=J.t(w,"type")
if(J.k(t==null?"":t)!=="ngmy_worksheet_project_v1")return r
u=J.t(w,"project")
if(!x.f.b(u))return r
t=C.hkL(A.a0(u,x.N,x.z))
return t}catch(s){return r}},
bI0(d){var w=0,v=A.j(x.o),u,t,s,r
var $async$bI0=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=B.a.i(d)
w=B.a.Y(r,"NGMYWSSYNC2|")?3:4
break
case 3:t=r.split("|")
w=t.length>=2?5:6
break
case 5:w=7
return A.b(C.av7(t[1]),$async$bI0)
case 7:s=f
if(s!=null&&B.a.i(s).length!==0){u=C.hr_(s)
w=1
break}case 6:u=null
w=1
break
case 4:u=C.hr_(r)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bI0,v)},
hqZ(d){var w=B.o.v(1000*Date.now()),v=d.b
if(B.a.i(v).length===0)v="Shared project"
return new C.lY(w,v,d.c,d.d,new A.W(Date.now(),0,!1))},
bHu(){var w=0,v=A.j(x.o),u,t
var $async$bHu=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(A.HL(),$async$bHu)
case 3:t=e
if(t==null||B.a.i(t).length===0){u=null
w=1
break}u=C.hr_(t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bHu,v)},
hQv(d,e,f,g){return A.bU(B.L,null,new C.hdn(f,g,e),d,!0,!0,!0,null,!1,!1,x.H)},
hdn:function hdn(d,e,f){this.a=d
this.b=e
this.c=f},
afv:function afv(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
f1q:function f1q(d,e){this.a=d
this.b=e},
f1r:function f1r(d,e){this.a=d
this.b=e},
f1s:function f1s(d,e){this.a=d
this.b=e},
f1t:function f1t(d,e){this.a=d
this.b=e},
f1p:function f1p(d){this.a=d},
av4:function av4(d,e,f){this.c=d
this.d=e
this.a=f},
bp4:function bp4(){var _=this
_.c=_.a=_.e=_.d=null},
f13:function f13(d,e){this.a=d
this.b=e},
f14:function f14(d){this.a=d},
f15:function f15(d){this.a=d},
av9:function av9(d){this.a=d},
aHT:function aHT(d){var _=this
_.d=d
_.f=_.e=!1
_.c=_.a=null},
f17:function f17(d){this.a=d},
f16:function f16(d){this.a=d},
i8F(d,e,f,g,h){return new C.Pq(h,g,d,e,f,null)},
aMQ:function aMQ(d,e){this.a=d
this.b=e},
Pq:function Pq(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aHV:function aHV(d,e){var _=this
_.d=d
_.e=e
_.f=!0
_.r=0
_.c=_.a=null},
f1Q:function f1Q(){},
f1M:function f1M(d,e){this.a=d
this.b=e},
f1N:function f1N(d){this.a=d},
f1x:function f1x(d){this.a=d},
f1v:function f1v(d){this.a=d},
f1w:function f1w(d){this.a=d},
f1G:function f1G(d,e){this.a=d
this.b=e},
f1D:function f1D(d,e){this.a=d
this.b=e},
f1E:function f1E(d,e){this.a=d
this.b=e},
f1F:function f1F(d,e,f){this.a=d
this.b=e
this.c=f},
f1B:function f1B(d,e,f){this.a=d
this.b=e
this.c=f},
f1z:function f1z(d){this.a=d},
f1A:function f1A(d){this.a=d},
f1C:function f1C(d){this.a=d},
f1T:function f1T(d){this.a=d},
f1S:function f1S(d){this.a=d},
f1U:function f1U(d){this.a=d},
f1R:function f1R(d){this.a=d},
f1u:function f1u(d){this.a=d},
f1y:function f1y(d,e){this.a=d
this.b=e},
f1P:function f1P(d,e){this.a=d
this.b=e},
f1O:function f1O(d,e){this.a=d
this.b=e},
f1J:function f1J(d){this.a=d},
f1K:function f1K(d){this.a=d},
f1L:function f1L(d,e){this.a=d
this.b=e},
f1I:function f1I(d,e){this.a=d
this.b=e},
f1H:function f1H(d,e,f){this.a=d
this.b=e
this.c=f},
bC_:function bC_(){},
Bp(d){var w,v=B.a.i(d.toLowerCase())
if(v.length===0)return""
w=A.ag("[^a-z0-9@._+-]",!0,!1,!1,!1)
return A.aL(v,w,"_")},
ai4(d,e,f){return C.ioW(d,e,f)},
ioW(d,e,f){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o
var $async$ai4=A.e(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(d.aB("String",e,f),$async$ai4)
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
$.an.$1("[worksheets] setString failed for "+e+": "+A.v(r))
u=!1
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$ai4,v)},
ai3(d,e){return C.ioV(d,e)},
ioV(d,e){var w=0,v=A.j(x.H),u=1,t=[],s,r,q
var $async$ai3=A.e(function(f,g){if(f===1){t.push(g)
w=u}for(;;)switch(w){case 0:u=3
w=6
return A.b(d.X(0,e),$async$ai3)
case 6:u=1
w=5
break
case 3:u=2
q=t.pop()
s=A.ac(q)
$.an.$1("[worksheets] remove failed for "+e+": "+A.v(s))
w=5
break
case 2:w=1
break
case 5:return A.h(null,v)
case 1:return A.f(t.at(-1),v)}})
return A.i($async$ai3,v)},
inL(d,e){var w,v,u=e==null?null:B.a.i(e)
if(u!=null&&u.length!==0)return d.Ua(u)
w=d.c
v=w==null?null:B.a.i(w)
if(v!=null&&v.length!==0)return d
return d},
bEN(d){var w=0,v=A.j(x.T),u,t,s,r,q
var $async$bEN=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:q=B.a.i(d)
if(q.length===0){u=null
w=1
break}t=B.a.Y(q,"ngmy:thumb:")
if(!t)t=B.a.Y(q,"ngmy:ws-thumb:")
else t=!0
if(t){u=q
w=1
break}w=B.a.Y(q,"data:image")?3:4
break
case 3:w=5
return A.b(C.b60(q),$async$bEN)
case 5:s=f
if(s!=null){u=s
w=1
break}w=6
return A.b(C.aTE(q,!1),$async$bEN)
case 6:r=f
if(r!=null&&B.a.Y(r,"data:image")&&r.length<=12e4){u=r
w=1
break}u=null
w=1
break
case 4:u=q
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bEN,v)},
hWQ(d){var w,v,u,t,s,r="unitLabel",q="each",p=A.aJ(d.h(0,"price")),o=p==null?null:p
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
s=J.k(s==null?q:s)}return new C.rG(p,u,t,v,s)}p=d.h(0,"id")
p=J.k(p==null?"":p)
u=d.h(0,"name")
return new C.rG(p,J.k(u==null?"":u),1,o,q)},
hkL(d){var w,v,u,t,s=d.h(0,"items"),r=A.a([],x.C)
if(x.j.b(s)){w=J.cN(s,x.f)
w=A.cw(w,new C.cIT(),w.$ti.k("M.E"),x.Q)
v=A.a3(w).k("X<M.E>")
r=A.B(new A.X(w,new C.cIU(),v),v.k("M.E"))}w=d.h(0,"id")
w=J.k(w==null?"":w)
v=d.h(0,"name")
v=J.k(v==null?"":v)
u=d.h(0,"thumbnailPath")
u=u==null?null:J.k(u)
t=d.h(0,"createdAt")
t=A.be(J.k(t==null?"":t))
return new C.lY(w,v,u,r,t==null?new A.W(Date.now(),0,!1):t)},
it0(d){var w=d==null?"":d
switch(w.toLowerCase()){case"male":case"m":return D.xb
case"female":case"f":return D.oU
default:return D.zG}},
hLB(d){switch(d.a){case 0:return"male"
case 1:return"female"
case 2:return"unknown"}},
hvo(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i=d.h(0,"id")
i=J.k(i==null?"":i)
w=d.h(0,"name")
w=J.k(w==null?"":w)
v=d.h(0,"gender")
v=C.it0(v==null?j:J.k(v))
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
m=m==null?j:B.i.M(m)
if(m==null)m=1
l=J.z(d.h(0,"hidden"),!0)
k=A.aJ(d.h(0,"visibleChildrenCap"))
k=k==null?j:B.i.M(k)
return new C.ig(i,w,v,u,t,s,r,q,p,o,n,m,l,k==null?0:k)},
it2(d){var w=d==null?"":d
switch(w.toLowerCase()){case"editor":return D.PK
case"viewer":return D.l8
default:return D.vj}},
it3(d){switch(d.a){case 1:return"editor"
case 2:return"viewer"
case 0:return"owner"}},
HD(d,e){var w=B.a.i(d.x)
if(w.length!==0)return B.a.i(w.toLowerCase())
return B.a.i(e.toLowerCase())},
aSi(d,e){return B.a.i(e.toLowerCase())===C.HD(d,e)&&d.y!==D.l8},
uH(d,e){var w,v=d.y
if(v===D.l8)return!1
w=B.a.i(e.toLowerCase())
if(w===C.HD(d,e))return!0
if(v===D.PK)return!0
v=d.e
return new A.O(v,A.hr6(),A.U(v).k("O<1,m>")).q(0,w)},
isn(d){return J.dN(d,new C.fOh()).gJ(0)},
he8(d){var w=0,v=A.j(x.y),u,t
var $async$he8=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=J
w=3
return A.b(C.BC(d),$async$he8)
case 3:u=t.rB(f,new C.he9(d))
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$he8,v)},
bFU(d,e){var w=0,v=A.j(x.H),u,t
var $async$bFU=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.BC(d),$async$bFU)
case 3:t=g
if(J.rB(t,new C.fLM(e))){w=1
break}if(C.isn(t)>=2)throw A.Y(A.bc("You can only keep 2 shared family trees. Remove one before importing another."))
case 1:return A.h(u,v)}})
return A.i($async$bFU,v)},
an9(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=d.h(0,"members"),g=A.a([],x.u),f=x.j
if(f.b(h)){w=J.cN(h,x.f)
w=A.cw(w,new C.bUX(),w.$ti.k("M.E"),x.P)
v=A.a3(w).k("X<M.E>")
g=A.B(new A.X(w,new C.bUY(),v),v.k("M.E"))}u=d.h(0,"collaboratorEmails")
if(f.b(u)){w=J.b8(u,new C.bUZ(),x.N)
t=A.B(w,w.$ti.k("aj.E"))}else t=A.a([],x.s)
w=d.h(0,"id")
w=J.k(w==null?"":w)
v=d.h(0,"name")
v=J.k(v==null?"":v)
s=d.h(0,"code")
s=J.k(s==null?"":s)
r=J.z(d.h(0,"isPrivate"),!1)
q=d.h(0,"createdAt")
q=A.be(J.k(q==null?"":q))
if(q==null)q=new A.W(Date.now(),0,!1)
p=A.aJ(d.h(0,"visibleChildrenPerParent"))
p=p==null?null:B.i.M(p)
if(p==null)p=0
o=d.h(0,"ownerEmail")
o=J.k(o==null?"":o)
n=d.h(0,"localRole")
n=C.it2(n==null?null:J.k(n))
m=A.a([],x.Y)
f=J.aQ(f.b(d.h(0,"games"))?f.a(d.h(0,"games")):B.bP)
l=x.f
k=x.N
j=x.z
while(f.C()){i=f.gP(f)
if(l.b(i))m.push(A.a0(i,k,j))}return new C.lb(w,v,s,!r,t,g,q,p,o,n,m)},
hLQ(d){var w=A.ag("[^A-Z0-9]",!0,!1,!1,!1),v=A.aL(d.toUpperCase(),w,"")
w=v.length
if(w===0)return"TREE"
return w<=8?v:B.a.aw(v,0,8)},
DU(d){var w=0,v=A.j(x.gk),u,t,s,r,q,p,o,n,m,l
var $async$DU=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(A.T8(d),$async$DU)
case 3:l=f
if(l.length===0){u=A.a([],x.D)
w=1
break}w=4
return A.b(A.aB(),$async$DU)
case 4:t=f
w=5
return A.b(t.a84(0),$async$DU)
case 5:w=6
return A.b(C.fBP(t,l),$async$DU)
case 6:s=f
if(J.cJ(s)){u=s
w=1
break}r=B.a.gZ(B.a.i(l.toLowerCase()))
q=t.a
p=J.a2(q)
o=A.aV(p.h(q,"ngmy_worksheets_projects_v2_"+Math.abs(r)))
w=o!=null&&o.length!==0?7:8
break
case 7:n=C.hGK(o)
w=n.length!==0?9:10
break
case 9:w=11
return A.b(C.pt(l,n),$async$DU)
case 11:u=n
w=1
break
case 10:case 8:m=A.aV(p.h(q,"ngmy_worksheets_projects_v1_"+Math.abs(B.a.gZ(l))))
w=m!=null&&m.length!==0?12:13
break
case 12:n=C.hGK(m)
w=n.length!==0?14:15
break
case 14:w=16
return A.b(C.pt(l,n),$async$DU)
case 16:u=n
w=1
break
case 15:case 13:u=A.a([],x.D)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$DU,v)},
fBP(d,e){return C.il5(d,e)},
il5(a8,a9){var w=0,v=A.j(x.gk),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7
var $async$fBP=A.e(function(b0,b1){if(b0===1){s.push(b1)
w=t}for(;;)switch(w){case 0:a3=a8.a
a4=J.a2(a3)
a5=A.aV(a4.h(a3,"ngmy_worksheets_index_v3_"+C.Bp(a9)))
if(a5==null||B.a.i(a5).length===0){u=A.a([],x.D)
w=1
break}t=4
r=B.V.aP(0,a5,null)
if(!x.j.b(r)){a3=A.a([],x.D)
u=a3
w=1
break}q=A.a([],x.D)
p=!1
f=J.aQ(r),e=x.N,d=x.z,a0=x.f
case 7:if(!f.C()){w=8
break}o=f.gP(f)
n=B.a.i(J.k(o))
if(J.ad(n)===0){w=7
break}m=A.aV(a4.h(a3,"ngmy_worksheet_item_v3_"+C.Bp(a9)+"_"+n))
if(m==null||m.length===0){w=7
break}t=10
l=B.V.aP(0,m,null)
if(!a0.b(l)){w=7
break}k=C.hkL(A.a0(l,e,d))
w=k.a.length!==0&&k.b.length!==0?13:14
break
case 13:j=A.aV(a4.h(a3,"ngmy_worksheet_thumb_v3_"+C.Bp(a9)+"_"+n))
i=C.inL(k,j)
a1=i.c
h=a1==null?null:B.a.i(a1)
w=h!=null&&B.a.Y(h,"data:image")?15:16
break
case 15:w=17
return A.b(C.b60(h),$async$fBP)
case 17:g=b1
if(g!=null){i=i.Ua(g)
p=!0}case 16:J.c6(q,i)
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
case 8:J.Ti(q,new C.fBQ())
if(p&&J.ad(q)!==0)C.pt(a9,q)
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
return A.i($async$fBP,v)},
bGn(d,e){var w=0,v=A.j(x.o),u,t,s,r,q,p
var $async$bGn=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(A.T8(d),$async$bGn)
case 3:r=g
q=B.a.i(e)
if(r.length===0||q.length===0){u=null
w=1
break}p=J
w=4
return A.b(C.DU(r),$async$bGn)
case 4:t=p.aQ(g)
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
return A.i($async$bGn,v)},
hGK(d){var w,v,u,t
try{w=B.V.aP(0,d,null)
if(!x.j.b(w)){v=A.a([],x.D)
return v}v=J.cN(w,x.f)
v=A.cw(v,new C.fxm(),v.$ti.k("M.E"),x.fA)
u=A.a3(v).k("X<M.E>")
v=A.B(new A.X(v,new C.fxn(),u),u.k("M.E"))
B.d.b0(v,new C.fxo())
return v}catch(t){v=A.a([],x.D)
return v}},
pt(d,e){return C.iCS(d,e)},
iCS(b2,b3){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1
var $async$pt=A.e(function(b4,b5){if(b4===1){s.push(b5)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.T8(b2),$async$pt)
case 3:a8=b5
if(J.ad(a8)===0){u=!1
w=1
break}w=4
return A.b(A.aB(),$async$pt)
case 4:r=b5
q=A.a([],x.s)
t=6
a2=C.Bp(a8)
p=A.aV(J.t(r.a,"ngmy_worksheets_index_v3_"+a2))
w=p!=null&&p.length!==0?9:10
break
case 9:t=12
a2=x.N
o=J.b8(x.j.a(B.V.aP(0,p,null)),new C.h5B(),a2).fD(0)
a2=J.b8(b3,new C.h5C(),a2).c0(0,new C.h5D())
n=A.d4(a2,a2.$ti.k("M.E"))
a2=o,a2=A.e5(a2,a2.r,A.a3(a2).c),a3=a2.$ti.c,a4=x.f
case 15:if(!a2.C()){w=16
break}a5=a2.d
m=a5==null?a3.a(a5):a5
w=!J.eD(n,m)?17:18
break
case 17:a5=C.Bp(a8)
l=A.aV(J.t(r.a,"ngmy_worksheet_thumb_v3_"+a5+"_"+m))
w=19
return A.b(C.aap(l),$async$pt)
case 19:t=21
a5=C.Bp(a8)
k=A.aV(J.t(r.a,"ngmy_worksheet_item_v3_"+a5+"_"+m))
w=k!=null&&k.length!==0?24:25
break
case 24:j=B.V.aP(0,k,null)
w=a4.b(j)?26:27
break
case 26:a5=J.t(j,"thumbnailPath")
w=28
return A.b(C.aap(a5==null?null:J.k(a5)),$async$pt)
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
return A.b(C.ai3(r,"ngmy_worksheet_item_v3_"+C.Bp(a8)+"_"+m),$async$pt)
case 29:w=30
return A.b(C.ai3(r,"ngmy_worksheet_thumb_v3_"+C.Bp(a8)+"_"+m),$async$pt)
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
case 14:case 10:a2=J.cI(b3),a3=a2.gae(b3)
case 31:if(!a3.C()){w=32
break}i=a3.gP(a3)
if(i.a.length===0||B.a.i(i.b).length===0){w=31
break}a4=i.c
h=a4==null?null:B.a.i(a4)
g=i
w=h!=null&&h.length!==0?33:35
break
case 33:w=36
return A.b(C.bEN(h),$async$pt)
case 36:f=b5
w=f!=null&&f.length!==0?37:39
break
case 37:a4=i.a
w=40
return A.b(C.ai4(r,"ngmy_worksheet_thumb_v3_"+C.Bp(a8)+"_"+a4,f),$async$pt)
case 40:g=i.Ua(f)
w=38
break
case 39:$.an.$1("[worksheets] photo not saved for "+i.a+" \u2014 saving project without thumbnail")
a4=i.a
w=41
return A.b(C.ai3(r,"ngmy_worksheet_thumb_v3_"+C.Bp(a8)+"_"+a4),$async$pt)
case 41:g=i.Ua(null)
case 38:w=34
break
case 35:a4=i.a
w=42
return A.b(C.ai3(r,"ngmy_worksheet_thumb_v3_"+C.Bp(a8)+"_"+a4),$async$pt)
case 42:case 34:a4=i.a
w=43
return A.b(C.ai4(r,"ngmy_worksheet_item_v3_"+C.Bp(a8)+"_"+a4,B.V.au(g.ak(),null)),$async$pt)
case 43:e=b5
if(!e){$.an.$1("[worksheets] failed to save project "+i.a+" for "+A.v(a8))
w=31
break}J.c6(q,i.a)
w=31
break
case 32:w=44
return A.b(C.ai4(r,"ngmy_worksheets_index_v3_"+C.Bp(a8),B.V.au(q,null)),$async$pt)
case 44:d=b5
if(!d){$.an.$1("[worksheets] failed to save project index for "+A.v(a8))
u=!1
w=1
break}a3=a2.eT(b3,new C.h5E(q))
a4=a3.$ti.k("cO<1,a9<m,@>>")
a7=A.B(new A.cO(a3,new C.h5F(),a4),a4.k("M.E"))
a0=a7
w=45
return A.b(C.ai4(r,"ngmy_worksheets_projects_v2_"+Math.abs(B.a.gZ(B.a.i(a8.toLowerCase()))),B.V.au(a0,null)),$async$pt)
case 45:w=46
return A.b(J.hVV(r),$async$pt)
case 46:if(a2.gcn(b3)&&J.ad(q)===0){u=!1
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
$.an.$1("[worksheets] saveWorksheetProjects error: "+A.v(a1))
u=!1
w=1
break
w=8
break
case 5:w=2
break
case 8:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$pt,v)},
Mw(d,e){var w=0,v=A.j(x.y),u,t,s,r
var $async$Mw=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.DU(d),$async$Mw)
case 3:t=g
s=J.cI(t)
r=s.bl(t,new C.he7(e))
if(r===-1)s.ce(t,0,e)
else s.n(t,r,e)
u=C.pt(d,t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$Mw,v)},
bG9(d,e){var w=0,v=A.j(x.H),u
var $async$bG9=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(C.DU(d),$async$bG9)
case 2:u=g
J.ne(u,new C.fOL(e))
w=3
return A.b(C.pt(d,u),$async$bG9)
case 3:return A.h(null,v)}})
return A.i($async$bG9,v)},
HF(d){var w=0,v=A.j(x.ax),u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$HF=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(A.aB(),$async$HF)
case 3:l=f
k=A.a([],x._)
j=B.a.gZ(B.a.i(d.toLowerCase()))
i=A.aV(J.t(l.a,"ngmy_worksheets_family_trees_v1_"+Math.abs(j)))
if(i!=null&&i.length!==0)try{t=B.V.aP(0,i,null)
if(x.j.b(t)){j=J.cN(t,x.f)
j=A.cw(j,new C.fS_(),j.$ti.k("M.E"),x.k)
s=A.a3(j).k("X<M.E>")
r=A.B(new A.X(j,new C.fS0(),s),s.k("M.E"))
B.d.b0(r,new C.fS1())
k=r}}catch(h){}w=4
return A.b(C.fy8(d),$async$HF)
case 4:p=f
if(p==null){u=k
w=1
break}o=C.ils(k,p,d)
j=A.U(o)
s=j.k("O<1,a9<m,@>>")
s=A.B(new A.O(o,new C.fS2(),s),s.k("aj.E"))
n=B.V.au(s,null)
s=i
w=n!==(s==null?"":s)?5:6
break
case 5:w=7
return A.b(C.Se(d,o),$async$HF)
case 7:case 6:j=j.k("X<1>")
m=A.B(new A.X(o,new C.fS3(d),j),j.k("M.E"))
if(m.length!==0)C.aS4(d,m)
u=o
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$HF,v)},
h5n(d,e){var w=0,v=A.j(x.y),u,t,s
var $async$h5n=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.Se(d,e),$async$h5n)
case 3:t=J.dN(e,new C.h5o(d))
s=A.B(t,t.$ti.k("M.E"))
if(s.length===0){u=!0
w=1
break}u=C.aS4(d,s)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$h5n,v)},
a4I(d,e){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n,m,l
var $async$a4I=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:o=A.a([],x._)
w=2
return A.b(A.aB(),$async$a4I)
case 2:n=g
m=B.a.gZ(B.a.i(d.toLowerCase()))
l=A.aV(J.t(n.a,"ngmy_worksheets_family_trees_v1_"+Math.abs(m)))
if(l!=null&&l.length!==0)try{u=B.V.aP(0,l,null)
if(x.j.b(u)){m=J.cN(u,x.f)
m=A.cw(m,new C.he2(),m.$ti.k("M.E"),x.k)
t=A.a3(m).k("X<M.E>")
s=A.B(new A.X(m,new C.he3(),t),t.k("M.E"))
o=s}}catch(k){}q=J.oN(o,new C.he4(e))
if(B.a.i(e.x).length===0&&C.uH(e,d)){m=B.a.i(d.toLowerCase())
p=e.aHm(e.y===D.l8?D.l8:D.vj,m)}else p=e
if(q===-1)J.nd(o,0,p)
else J.aK(o,q,p)
w=3
return A.b(C.Se(d,o),$async$a4I)
case 3:w=C.uH(p,d)?4:5
break
case 4:w=6
return A.b(C.aS3(C.HD(p,d),p),$async$a4I)
case 6:if(!g)$.an.$1("[family_trees] cloud save failed for "+p.a+" \u2014 run supabase/family_trees_table.sql if table is missing")
case 5:return A.h(null,v)}})
return A.i($async$a4I,v)},
aSg(d,e){var w=0,v=A.j(x.H),u,t,s
var $async$aSg=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(C.HF(d),$async$aSg)
case 2:u=g
t=J.cI(u)
s=A.nK(t.eT(u,new C.fOs(e)))
t.br(u,new C.fOt(e))
w=3
return A.b(C.Se(d,u),$async$aSg)
case 3:w=s!=null&&C.aSi(s,d)?4:5
break
case 4:w=6
return A.b(C.fxq(e),$async$aSg)
case 6:case 5:return A.h(null,v)}})
return A.i($async$aSg,v)},
ajU(d){var w=d.f,v=A.U(w).k("X<1>")
w=A.B(new A.X(w,new C.hed(),v),v.k("M.E"))
return w},
hop(d,e){var w,v=d.f,u=A.nK(new A.X(v,new C.fNX(e),A.U(v).k("X<1>")))
v=C.ajU(d)
w=A.U(v).k("X<1>")
v=A.B(new A.X(v,new C.fNY(e,u),w),w.k("M.E"))
B.d.b0(v,new C.fNZ())
return v},
it6(d,e){var w=e.at
if(w>0)return w
w=d.w
if(w>0)return w
return 0},
hQz(d,e){var w,v,u=e.d
if(u==null||u.length===0)return 0
w=B.d.bl(C.hop(d,u),new C.hdB(e))
if(w>=0)return w+1
v=e.Q
return v>0?v:0},
iuD(d,e){var w
if(e==null||e.length===0)return 1
w=C.hop(d,e)
if(w.length===0)return 1
return new A.O(w,new C.fSR(),A.U(w).k("O<1,F>")).eH(0,B.yC)+1},
iCL(d){var w,v=C.ajU(d)
if(v.length===0)return null
w=new A.X(v,new C.h5h(),A.U(v).k("X<1>"))
if(!w.gar(0))return w.gG(0)
return B.d.gG(v)},
it1(d){return A.J(["id",d.a,"name",d.b,"gender",C.hLB(d.c),"birthDate",d.w,"birthPlace",d.x,"deathDate",d.y,"occupation",d.z,"notes",d.r,"parentId",d.d,"spouseId",d.e,"birthOrder",d.Q,"hidden",d.as,"visibleChildrenCap",d.at],x.N,x.z)},
iuy(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=x.N,a1=A.S(a0,x.P)
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
n=n!==D.zG?n:q.c
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
d=q.aHh(m,f,l,k,n,e,p,i,j,h,q.f,g,d)
p=d}s.push(p)}for(a0=w.length,u=0;u<w.length;w.length===a0||(0,A.I)(w),++u){o=w[u]
if(!r.q(0,o.a))s.push(o)}a0=a3.b
a0=a0.length!==0?a0:a2.b
a1=a3.c
a1=a1.length!==0?a1:a2.c
w=a3.e
w=w.length!==0?w:a2.e
v=a2.x
v=v.length!==0?v:a3.x
return a2.cSU(a1,w,a3.d,a2.y,s,a0,v)},
BC(d){var w=0,v=A.j(x.ax),u,t,s,r,q,p,o
var $async$BC=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(A.aB(),$async$BC)
case 3:q=f
p=B.a.gZ(B.a.i(d.toLowerCase()))
o=A.aV(J.t(q.a,"ngmy_worksheets_family_trees_v1_"+Math.abs(p)))
if(o==null||o.length===0){u=A.a([],x._)
w=1
break}try{t=B.V.aP(0,o,null)
if(!x.j.b(t)){p=A.a([],x._)
u=p
w=1
break}p=J.cN(t,x.f)
p=A.cw(p,new C.fRX(),p.$ti.k("M.E"),x.k)
s=A.a3(p).k("X<M.E>")
p=A.B(new A.X(p,new C.fRY(),s),s.k("M.E"))
B.d.b0(p,new C.fRZ())
u=p
w=1
break}catch(n){p=A.a([],x._)
u=p
w=1
break}case 1:return A.h(u,v)}})
return A.i($async$BC,v)},
ajC(b1,b2,b3){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
var $async$ajC=A.e(function(b4,b5){if(b4===1)return A.f(b5,v)
for(;;)switch(w){case 0:a5=B.a.i(b3.toLowerCase())===B.a.i(b1.toLowerCase())
a6=a5?D.vj:D.l8
a7=C.HD(b2,b3)
w=2
return A.b(C.BC(b1),$async$ajC)
case 2:a8=b5
a9=J.cI(a8)
b0=a9.bl(a8,new C.h5c(b2))
w=!a5&&b0===-1?3:4
break
case 3:w=5
return A.b(C.bFU(b1,b2),$async$ajC)
case 5:case 4:if(b0===-1){u=b2.aHm(a6,a7)
a9.ce(a8,0,u)}else{t=a9.h(a8,b0)
s=A.S(x.N,x.P)
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
i=i!==D.zG?i:l.c
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
s.n(0,m,l.aHh(d,a3,a0,a1,i,n.as,k,e,a2,h,f,g,a4))}}r=b2.b
r=r.length!==0?r:t.b
q=b2.c
q=q.length!==0?q:t.c
m=b2.e
m=m.length!==0?m:t.e
k=s.$ti.k("ba<2>")
s=A.B(new A.ba(s,k),k.k("M.E"))
k=a5?D.vj:D.l8
u=t.cSW(q,m,b2.d,k,s,r,a7,b2.w)
a9.n(a8,b0,u)}w=6
return A.b(C.Se(b1,a8),$async$ajC)
case 6:w=a5?7:8
break
case 7:w=9
return A.b(C.aS3(B.a.i(b3.toLowerCase()),u),$async$ajC)
case 9:case 8:return A.h(null,v)}})
return A.i($async$ajC,v)},
hHc(d,e){var w,v,u,t,s,r,q="collaboratorEmails",p="visibleChildrenPerParent",o=new A.W(Date.now(),0,!1).aa().ag(),n=B.a.i(e.toLowerCase()),m=d.f,l=A.U(m).k("O<1,a9<m,@>>"),k=A.B(new A.O(m,C.hPE(),l),l.k("aj.E"))
m=d.a
l=d.b
w=d.c
v=d.d
u=d.e
t=d.w
s=d.r
r=x.N
return A.J(["id",m,"userEmail",n,"name",l,"code",w,"isPrivate",v,q,u,"members",k,p,t,"payload",A.J(["id",m,"name",l,"code",w,"isPrivate",v,q,u,"members",k,p,t,"ownerEmail",n,"createdAt",s.aa().ag(),"updatedAt",o],r,x.K),"createdAt",s.aa().ag(),"updatedAt",o],r,x.z)},
hHd(d,e){var w=new A.W(Date.now(),0,!1).aa().ag(),v=B.a.i(e.toLowerCase()),u=d.f,t=A.U(u).k("O<1,a9<m,@>>")
u=A.B(new A.O(u,C.hPE(),t),t.k("aj.E"))
return A.J(["id",d.a,"userEmail",v,"name",d.b,"code",d.c,"isPrivate",d.d,"collaboratorEmails",d.e,"members",u,"createdAt",d.r.aa().ag(),"updatedAt",w],x.N,x.z)},
ij_(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k="userEmail",j=J.a2(d),i=j.h(d,"payload"),h=x.f
if(h.b(i)){w=C.an9(A.a0(i,x.N,x.z))
if(w.a.length!==0&&w.f.length!==0){j=j.h(d,k)
v=B.a.i(J.k(j==null?w.x:j).toLowerCase())
u=B.a.i(e.toLowerCase())
j=w.e
j=new A.O(j,A.hr6(),A.U(j).k("O<1,m>")).c0(0,new C.fxW())
t=A.B(j,j.$ti.k("M.E"))
if(u===v)s=D.vj
else s=B.d.q(t,u)?D.PK:D.l8
return w.aHm(s,v)}}r=x.j
if(!r.b(j.h(d,"members"))&&h.b(j.h(d,"data")))return C.an9(A.a0(h.a(j.h(d,"data")),x.N,x.z))
q=j.h(d,"members")
if(r.b(q)){h=J.cN(q,h)
h=A.cw(h,new C.fxX(),h.$ti.k("M.E"),x.P)
p=A.a3(h).k("X<M.E>")
o=A.B(new A.X(h,new C.fxY(),p),p.k("M.E"))}else o=A.a([],x.u)
n=j.h(d,"collaboratorEmails")
if(r.b(n)){h=J.b8(n,new C.fxZ(),x.N).c0(0,new C.fy_())
t=A.B(h,h.$ti.k("M.E"))}else t=A.a([],x.s)
h=j.h(d,k)
v=B.a.i(J.k(h==null?"":h).toLowerCase())
u=B.a.i(e.toLowerCase())
if(u===v)s=D.vj
else s=B.d.q(t,u)?D.PK:D.l8
h=j.h(d,"id")
h=J.k(h==null?"":h)
r=j.h(d,"name")
r=J.k(r==null?"":r)
p=j.h(d,"code")
p=J.k(p==null?"":p)
m=J.z(j.h(d,"isPrivate"),!1)
l=j.h(d,"createdAt")
l=A.be(J.k(l==null?"":l))
if(l==null)l=new A.W(Date.now(),0,!1)
j=A.aJ(j.h(d,"visibleChildrenPerParent"))
j=j==null?null:B.i.M(j)
if(j==null)j=0
return new C.lb(h,r,p,!m,t,o,l,j,v,s,B.cn)},
fy8(a2){var w=0,v=A.j(x.eK),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$fy8=A.e(function(a3,a4){if(a3===1){s.push(a4)
w=t}for(;;)switch(w){case 0:a0=B.a.i(a2.toLowerCase())
if(J.ad(a0)===0){u=null
w=1
break}t=4
r=new C.fyc()
h=x.N
g=x.z
w=7
return A.b(A.hc(A.a([A.m0("family_trees","*",null,A.J(["userEmail",a0],h,g),null,null,null,!0,null,null,!1,B.bN),r.$2(A.m0("family_trees","*",A.J(["collaboratorEmails",A.a([a0],x.s)],h,g),null,null,null,null,!0,null,null,!1,B.bN),"collaborator"),r.$2(A.m0("family_trees","*",null,A.J(["isPrivate",!1],h,g),null,null,null,!0,null,null,!1,B.bN),"public")],x.cl),x.fO),$async$fy8)
case 7:q=a4
p=J.t(q,0)
o=J.t(q,1)
n=J.t(q,2)
g=x.a
m=A.S(h,g)
h=A.B(p,g)
l=h
J.hb(l,o)
J.hb(l,n)
l=l
h=l.length
f=0
for(;f<l.length;l.length===h||(0,A.I)(l),++f){k=l[f]
g=J.t(k,"id")
j=J.k(g==null?"":g)
if(J.ad(j)!==0)J.aK(m,j,k)}l=m
h=A.a3(l).k("ba<2>")
h=A.cw(new A.ba(l,h),new C.fy9(a0),h.k("M.E"),x.k)
l=A.a3(h).k("X<M.E>")
l=A.B(new A.X(h,new C.fya(),l),l.k("M.E"))
B.d.b0(l,new C.fyb())
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
h=$.an
if(l)h.$1("[family_trees] table missing \u2014 run supabase/family_trees_table.sql")
else h.$1("[family_trees] fetch error: "+A.v(i))
u=null
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$fy8,v)},
ils(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=J.a2(e)
if(j.gar(e))return d
w=B.a.i(f.toLowerCase())
v=x.N
u=j.dP(e,new C.fCA(),v).c0(0,new C.fCB())
t=A.d4(u,u.$ti.k("M.E"))
s=A.S(v,x.k)
for(v=d.length,u=w.length!==0,r=0;r<d.length;d.length===v||(0,A.I)(d),++r){q=d[r]
p=q.a
if(p.length===0)continue
o=C.HD(q,w)
n=!1
if(u)if(o!==w){if(q.y===D.l8){m=q.e
m=!new A.O(m,A.hr6(),A.U(m).k("O<1,m>")).q(0,w)}else m=n
n=m}if(n&&!t.q(0,p))continue
s.n(0,p,q)}for(j=j.gae(e);j.C();){v=j.gP(j)
u=v.a
if(u.length===0)continue
l=s.h(0,u)
if(l==null){s.n(0,u,v)
continue}k=C.iuy(l,v)
o=C.HD(k,w)
p=v.d
s.n(0,u,o===w?k.bgT(p,D.vj):k.bgT(p,v.y))}j=s.$ti.k("ba<2>")
j=A.B(new A.ba(s,j),j.k("M.E"))
B.d.b0(j,new C.fCC())
return j},
Se(d,e){var w=0,v=A.j(x.H),u,t,s
var $async$Se=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.aB(),$async$Se)
case 2:u=g
t=B.a.gZ(B.a.i(d.toLowerCase()))
s=J.b8(e,new C.fFC(),x.a)
s=A.B(s,s.$ti.k("aj.E"))
w=3
return A.b(u.aB("String","ngmy_worksheets_family_trees_v1_"+Math.abs(t),B.V.au(s,null)),$async$Se)
case 3:return A.h(null,v)}})
return A.i($async$Se,v)},
aS3(d,e){return C.iqO(d,e)},
iqO(d,e){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n
var $async$aS3=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:t=4
p=x.Y
w=7
return A.b(A.mu("family_trees",A.a([C.hHc(e,d)],p),null,B.cX),$async$aS3)
case 7:r=g
if(r){u=!0
w=1
break}w=8
return A.b(A.mu("family_trees",A.a([C.hHd(e,d)],p),null,B.cX),$async$aS3)
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
$.an.$1("[family_trees] upsert error: "+A.v(q))
u=!1
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$aS3,v)},
aS4(d,e){return C.iqP(d,e)},
iqP(d,e){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i
var $async$aS4=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(e.length===0){u=!1
w=1
break}t=4
n=A.U(e).k("O<1,a9<m,@>>")
m=n.k("aj.E")
l=A.B(new A.O(e,new C.fL_(d),n),m)
r=l
w=7
return A.b(A.mu("family_trees",r,null,B.cX),$async$aS4)
case 7:q=g
if(q){u=!0
w=1
break}k=A.B(new A.O(e,new C.fL0(d),n),m)
p=k
w=8
return A.b(A.mu("family_trees",p,null,B.cX),$async$aS4)
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
$.an.$1("[family_trees] bulk upsert error: "+A.v(o))
u=!1
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$aS4,v)},
fxq(d){return C.iic(d)},
iic(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$fxq=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:if(d.length===0){w=1
break}t=4
w=7
return A.b(A.SG("family_trees",A.J(["id",d],x.N,x.z),null,B.cX),$async$fxq)
case 7:t=2
w=6
break
case 4:t=3
p=s.pop()
r=A.ac(p)
$.an.$1("[family_trees] delete error: "+A.v(r))
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$fxq,v)},
rG:function rG(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
lY:function lY(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
cIW:function cIW(){},
cIV:function cIV(){},
cIT:function cIT(){},
cIU:function cIU(){},
II:function II(d,e){this.a=d
this.b=e},
ig:function ig(d,e,f,g,h,i,j,k,l,m,n,o,p,q){var _=this
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
an8:function an8(d,e){this.a=d
this.b=e},
fOh:function fOh(){},
he9:function he9(d){this.a=d},
fLM:function fLM(d){this.a=d},
lb:function lb(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
bV0:function bV0(){},
bV_:function bV_(){},
bUX:function bUX(){},
bUY:function bUY(){},
bUZ:function bUZ(){},
fBQ:function fBQ(){},
fxm:function fxm(){},
fxn:function fxn(){},
fxo:function fxo(){},
h5B:function h5B(){},
h5C:function h5C(){},
h5D:function h5D(){},
h5E:function h5E(d){this.a=d},
h5F:function h5F(){},
he7:function he7(d){this.a=d},
fOL:function fOL(d){this.a=d},
fS_:function fS_(){},
fS0:function fS0(){},
fS1:function fS1(){},
fS2:function fS2(){},
fS3:function fS3(d){this.a=d},
h5o:function h5o(d){this.a=d},
he2:function he2(){},
he3:function he3(){},
he4:function he4(d){this.a=d},
fOs:function fOs(d){this.a=d},
fOt:function fOt(d){this.a=d},
hed:function hed(){},
fNX:function fNX(d){this.a=d},
fNY:function fNY(d,e){this.a=d
this.b=e},
fNZ:function fNZ(){},
hdB:function hdB(d){this.a=d},
fSR:function fSR(){},
h5h:function h5h(){},
fRX:function fRX(){},
fRY:function fRY(){},
fRZ:function fRZ(){},
h5c:function h5c(d){this.a=d},
fxW:function fxW(){},
fxX:function fxX(){},
fxY:function fxY(){},
fxZ:function fxZ(){},
fy_:function fy_(){},
fyc:function fyc(){},
fyd:function fyd(d){this.a=d},
fy9:function fy9(d){this.a=d},
fya:function fya(){},
fyb:function fyb(){},
fCA:function fCA(){},
fCB:function fCB(){},
fCC:function fCC(){},
fFC:function fFC(){},
fL_:function fL_(d){this.a=d},
fL0:function fL0(d){this.a=d},
cIX:function cIX(d,e){this.a=d
this.b=e},
cIY:function cIY(d,e){this.a=d
this.b=e},
aK_:function aK_(d,e,f){this.a=d
this.b=e
this.c=f},
bck:function bck(){this.b=this.a=0},
bcj:function bcj(d,e,f,g){var _=this
_.f=d
_.w=e
_.z=f
_.b=g
_.a=null},
bAf:function bAf(){},
xA(d,e){var w,v
if(d==null)return""
w=d.bU()
v=""+w.gci()+"/"+w.gcB()+"/"+w.gck()
if(!e)return v
return v+" "+B.a.aZ(B.o.v(w.gny()),2,"0")+":"+B.a.aZ(B.o.v(w.gHa()),2,"0")},
irU(a5,a6,a7,a8,a9,b0,b1,b2,b3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=a5.c
J.bs(a4.save())
a4.translate(a6.a,a6.b-b0)
w=A.bY(new A.r(0,b0+a7*0.005),a7*0.06,a7*0.45)
v=B.v.j(0.22)
$.T()
u=A.L()
u.r=v.gp(0)
a5.c1(w,u)
for(w=a7*0.05,v=-a7,u=v*0.24,t=a7*0.1,s=u+a7*0.2,r=a7*0.04,q=a7*0.065,p=v*0.05,o=a7*0.14,n=p+w,m=a7*0.025,l=0;l<2;++l){k=F.hp[l]*a7*0.075
j=k-w
j=A.bw(new A.a4(j,u,j+t,s),new A.aP(r,r))
i=new A.ar(B.T,B.Q,B.W,B.X,B.U)
i.r=B.dl.gp(0)
a5.aq(j,i)
k-=q
k=A.bw(new A.a4(k,p,k+o,n),new A.aP(m,m))
i=new A.ar(B.T,B.Q,B.W,B.X,B.U)
i.r=B.c.gp(0)
a5.aq(k,i)}w=v*0.16
u=v*0.52
t=a7*0.32
s=w+t
q=a7*0.09
h=A.bw(new A.a4(w,u,s,u+t),new A.aP(q,q))
q=A.L()
q.r=b2.gp(0)
a5.aq(h,q)
q=v*0.27
t=a7*0.02
t=A.bw(new A.a4(w,q,s,q+a7*0.045),new A.aP(t,t))
q=B.c.j(0.35)
s=A.L()
s.r=q.gp(0)
a5.aq(t,s)
s=v*0.47
g=new A.r(v*0.15,s)
f=new A.r(a7*0.15,s)
s=v*0.06
t=a7*0.07
a5.ah(g,g.a7(0,new A.r(s,a7*0.17)),Q.ai2(F.tp,t))
s=g.a7(0,new A.r(s,a7*0.18))
q=A.L()
q.r=F.tp.gp(0)
a5.O(s,r,q)
e=-2.5+b3*0.5
d=f.a7(0,new A.r(Math.sin(e)*a7*0.2,Math.cos(e)*a7*0.2))
a5.ah(f,d,Q.ai2(F.tp,t))
w=A.L()
w.r=F.tp.gp(0)
a5.O(d,r,w)
v*=0.7
a0=new A.r(0,v)
a1=a7*0.22
if(b1===1){w=a0.a7(0,new A.r(0,-a1*0.12))
u=A.L()
u.r=F.mj.gp(0)
a5.O(w,a1*1.18,u)}w=A.L()
w.r=F.tp.gp(0)
a5.O(a0,a1,w)
if(b1===0){w=A.bX(a0,a1)
u=A.L()
u.r=F.mj.gp(0)
a5.cQ(w,3.141592653589793,3.141592653589793,!0,u)}else if(b1===2){w=A.bX(a0,a1)
u=A.L()
u.r=F.mj.gp(0)
a5.cQ(w,3.141592653589793,3.141592653589793,!0,u)
for(w=v+a1*0.3,u=a1*0.2,l=0;l<2;++l){a2=F.hp[l]
t=new A.ar(B.T,B.Q,B.W,B.X,B.U)
t.r=F.mj.gp(0)
a5.O(new A.r(0+a2*a1*1.05,w),u,t)}}a3=B.i.F(a8*0.8,3)>2.85
for(w=v+a1*0.42,u=a1*0.12,t=a1*0.25,s=a8*0.7,r=a1*0.13,v+=a1*0.05,q=-a1*0.15,p=v+0,o=a1*0.15,l=0;l<2;++l){n=F.hp[l]*a1
m=0+n*0.4
if(a3){k=new A.ar(B.T,B.Q,B.W,B.X,B.U)
k.b=B.ac
k.c=1.6
k.r=B.bq.gp(0)
k.d=B.bG
a5.ah(new A.r(m+q,p),new A.r(m+o,p),k)}else{k=new A.ar(B.T,B.Q,B.W,B.X,B.U)
k.r=B.c.gp(0)
a5.O(new A.r(m,v),t,k)
k=Math.sin(s)
j=new A.ar(B.T,B.Q,B.W,B.X,B.U)
j.r=B.v.gp(0)
a5.O(new A.r(m+k*a1*0.06,p),r,j)}m=new A.ar(B.T,B.Q,B.W,B.X,B.U)
m.r=B.hY.j(0.5).gp(0)
a5.O(new A.r(0+n*0.62,w),u,m)}a5.cQ(A.bY(a0.a7(0,new A.r(0,a1*0.5)).aI(0,new A.r(0,a1*0.1)),a1*0.4,a1*0.65),0.2,2.741592653589793,!1,Q.ai2(B.bq,1.8))
a4.restore()},
i8C(){var w,v=$.oI(),u=J.e4(10,x.N)
for(w=0;w<10;++w)u[w]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[v.av(32)]
return"WS"+B.d.hl(u)},
av5(){var w=0,v=A.j(x.a),u,t=2,s=[],r,q,p,o,n,m
var $async$av5=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.cd(),$async$av5)
case 3:if(!e){u=A.S(x.N,x.z)
w=1
break}t=5
w=8
return A.b(A.fa("ngmy_worksheet_project_qr_stashes_v1",null,!1,B.bN),$async$av5)
case 8:r=e
if(r==null){u=A.S(x.N,x.z)
w=1
break}q=J.t(r,"stashes")
if(x.f.b(q)){o=A.a0(q,x.N,x.z)
u=o
w=1
break}t=2
w=7
break
case 5:t=4
m=s.pop()
p=A.ac(m)
$.an.$1("[worksheet qr stash] load: "+A.v(p))
w=7
break
case 4:w=2
break
case 7:u=A.S(x.N,x.z)
w=1
break
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$av5,v)},
av6(d){return C.i8D(d)},
i8D(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$av6=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.cd(),$async$av6)
case 3:if(!f){w=1
break}t=5
w=8
return A.b(A.i1("ngmy_worksheet_project_qr_stashes_v1",A.J(["stashes",d,"savedAt",new A.W(Date.now(),0,!1).aa().ag()],x.N,x.z),!1,!1,B.cX,null),$async$av6)
case 8:t=2
w=7
break
case 5:t=4
p=s.pop()
r=A.ac(p)
$.an.$1("[worksheet qr stash] save: "+A.v(r))
w=7
break
case 4:w=2
break
case 7:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$av6,v)},
av8(d,e,f){var w=0,v=A.j(x.he),u,t,s,r,q,p
var $async$av8=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=3
return A.b(A.cd(),$async$av8)
case 3:if(!h){u=null
w=1
break}t=B.a.i(d)
if(t.length===0){u=null
w=1
break}s=C.i8C()
w=4
return A.b(C.av5(),$async$av8)
case 4:r=h
q=B.a.i(e)
p=B.e2.aK(t)
J.aK(r,s,A.J(["ownerEmail",q,"projectId",f,"payload",B.cS.gcp().aK(p),"usesRemaining",25,"createdAt",new A.W(Date.now(),0,!1).aa().ag()],x.N,x.K))
w=5
return A.b(C.av6(r),$async$av8)
case 5:u=new A.a23("NGMYWSSYNC2|"+s,s,25)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$av8,v)},
av7(d){var w=0,v=A.j(x.T),u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$av7=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:i=B.a.i(d)
if(i.length===0){u=null
w=1
break}w=3
return A.b(A.cd(),$async$av7)
case 3:if(!f){u=null
w=1
break}w=4
return A.b(C.av5(),$async$av7)
case 4:q=f
p=J.a2(q)
o=p.h(q,i)
if(!x.f.b(o)){u=null
w=1
break}n=J.a2(o)
m=A.aJ(n.h(o,"usesRemaining"))
l=m==null?null:B.i.M(m)
if(l==null)l=0
if(l<=0){u=null
w=1
break}n=n.h(o,"payload")
t=J.k(n==null?"":n)
if(J.ad(t)===0){u=null
w=1
break}s=null
try{s=B.cg.cG(0,B.cJ.aK(t))}catch(h){r=A.ac(h)
$.an.$1("[worksheet qr stash] decode: "+A.v(r))
u=null
w=1
break}if(B.a.i(s).length===0){u=null
w=1
break}j=l-1
if(j<=0)p.X(q,i)
else{n=x.N
m=x.z
m=A.dE(A.a0(o,n,m),n,m)
m.n(0,"usesRemaining",j)
m.n(0,"lastUsedAt",new A.W(Date.now(),0,!1).aa().ag())
p.n(q,i,m)}w=5
return A.b(C.av6(q),$async$av7)
case 5:u=s
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$av7,v)},
hBv(){var w=new A.W(Date.now(),0,!1).aa()
return"wst_"+(1000*w.a+w.b)+"_"+B.cV.av(999999)},
i8E(d){var w,v,u,t,s,r,q
try{w=A.BA(d)
if(w==null)return d
v=w
if(J.MC(v)>960||J.MB(v)>960){s=v
r=J.MC(v)>=J.MB(v)?960:null
v=A.SA(s,J.MB(v)>J.MC(v)?960:null,B.IT,r)}s=v
u=A.J3(82).zF(s,B.rq)
if(J.ad(u)===0)return d
s=new Uint8Array(A.cc(u))
return s}catch(q){t=A.ac(q)
$.an.$1("[worksheet-thumb] compress failed: "+A.v(t))
return d}},
cre(d,e){var w=0,v=A.j(x.y),u,t,s
var $async$cre=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=B.a.i(d)
if(s.length===0||e.length===0){u=!1
w=1
break}t=C.i8E(e)
$.cra.n(0,s,t)
u=C.bI3(s,t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$cre,v)},
b60(d){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$b60=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:l=B.a.i(d)
if(!J.d9(l,"data:image")){u=null
w=1
break}t=4
r=J.eD(l,",")?B.d.gal(J.m3(l,",")):l
q=B.cJ.aK(r)
if(J.ad(q)===0){u=null
w=1
break}p=C.hBv()
w=7
return A.b(C.cre(p,q),$async$b60)
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
$.an.$1("[worksheet-thumb] persistDataUrl failed: "+A.v(n))
u=null
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$b60,v)},
crb(d){var w=0,v=A.j(x.T),u,t,s
var $async$crb=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=B.a.i(d)
if(s.length===0){u=null
w=1
break}if(B.a.Y(s,"data:image")){u=s
w=1
break}w=3
return A.b(O.crd(s),$async$crb)
case 3:t=f
if(t==null||t.length===0){u=null
w=1
break}u="data:image/jpeg;base64,"+B.cS.gcp().aK(t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$crb,v)},
aap(d){var w=0,v=A.j(x.H),u,t
var $async$aap=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=O.hPj(d)
if(t==null){w=1
break}$.cra.X(0,t)
w=3
return A.b(C.bI2(t),$async$aap)
case 3:case 1:return A.h(u,v)}})
return A.i($async$aap,v)},
bI3(d,e){return C.iB4(d,e)},
iB4(d,e){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$bI3=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:l=B.a.i(d)
if(l.length===0||e.length===0){u=!1
w=1
break}t=4
n=$.aQT
w=7
return A.b(n==null?$.aQT=O.hnc():n,$async$bI3)
case 7:r=g
q=new Uint8Array(A.cc(e))
p=J.my(r,"thumbs","readwrite")
B.iS.mj(J.mx(p,"thumbs"),q,l)
w=8
return A.b(J.oM(p),$async$bI3)
case 8:u=!0
w=1
break
t=2
w=6
break
case 4:t=3
k=s.pop()
o=A.ac(k)
$.an.$1("[worksheet-thumb idb put] "+A.v(o))
u=!1
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$bI3,v)},
bI2(d){return C.iB2(d)},
iB2(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p,o,n,m,l
var $async$bI2=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:m=B.a.i(d)
if(m.length===0){w=1
break}t=4
o=$.aQT
w=7
return A.b(o==null?$.aQT=O.hnc():o,$async$bI2)
case 7:r=f
q=J.my(r,"thumbs","readwrite")
B.iS.GK(J.mx(q,"thumbs"),m)
w=8
return A.b(J.oM(q),$async$bI2)
case 8:t=2
w=6
break
case 4:t=3
l=s.pop()
p=A.ac(l)
$.an.$1("[worksheet-thumb idb delete] "+A.v(p))
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$bI2,v)}},D
J=c[1]
A=c[0]
B=c[2]
Ai=c[112]
Aj=c[100]
Ak=c[299]
U=c[354]
V=c[286]
A3=c[134]
Al=c[353]
Am=c[81]
O=c[77]
R=c[358]
A4=c[240]
W=c[76]
A5=c[80]
M=c[83]
An=c[330]
L=c[302]
A6=c[143]
X=c[185]
H=c[45]
E=c[318]
A7=c[182]
Ao=c[333]
Y=c[163]
Ap=c[199]
Aq=c[180]
Ar=c[283]
A8=c[138]
As=c[125]
At=c[137]
Au=c[86]
Av=c[329]
Aw=c[57]
S=c[328]
A9=c[284]
Ax=c[352]
Ay=c[272]
Az=c[288]
N=c[116]
Aa=c[111]
AA=c[247]
Ab=c[195]
Ac=c[252]
Ad=c[282]
AB=c[355]
AC=c[139]
Ae=c[357]
AD=c[101]
G=c[356]
AE=c[198]
AF=c[184]
AG=c[360]
Af=c[306]
AH=c[44]
Z=c[183]
AI=c[234]
AJ=c[191]
A_=c[359]
AK=c[224]
AL=c[136]
P=c[275]
AM=c[290]
AN=c[292]
Ag=c[233]
AO=c[129]
Ah=c[314]
A0=c[345]
Q=c[56]
F=c[154]
AP=c[43]
I=c[162]
A1=c[128]
K=c[204]
AQ=c[144]
A2=c[98]
T=c[42]
AR=c[140]
C=a.updateHolder(c[7],C)
D=c[351]
C.aqK.prototype={}
C.b1g.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.c,g=h.ble(),f=h.x!=null&&h.A_(i).length===0
if(h.x!=null)w=f?B.b5:B.bE
else w=h.gVa()?B.bE:B.ee
v=B.a.i(h.b)
if(v.length===0)v="\u2014"
u=A.n(22)
t=A.K(D.bsw,B.r,1)
s=x.p
r=A.p(i,A.x(A.a([A.p(i,D.foB,B.f,i,i,new A.o(B.b5.j(0.12),i,i,A.n(999),i,i,B.m),i,i,i,i,B.hm,i,i,i),B.R,D.fV1,B.at,A.c(C.xA(new A.W(Date.now(),0,!1),!0),i,i,i,i,i,i,D.fQz,i,i,i)],s),B.l,i,B.e,B.h,0,B.p),B.f,i,i,D.ba6,i,i,i,i,B.Pk,i,i,i)
q=A.n(16)
p=A.K(B.bn,B.r,1)
o=A.K(B.b5.j(0.28),B.r,1)
n=A.hpy(h.d)
o=A.p(B.z,C.b1f(A.fVl(h.e,n),30),B.f,i,i,new A.o(B.mm,i,o,i,i,i,B.a6),i,56,i,i,i,i,i,56)
n=A.c(v,i,i,i,i,i,i,D.fLs,B.K,i,i)
m=A.n(14)
l=A.K(B.bn,B.r,1)
q=A.p(i,A.x(A.a([o,B.M,n,B.bs,D.fVk,B.af,A.p(i,A.x(A.a([D.haJ,B.bs,A.c(A.BF(h.c),i,i,i,i,i,i,D.fFW,i,i,i)],s),B.l,i,B.e,B.h,0,B.p),B.f,i,i,new A.o(B.c,i,l,m,i,i,B.m),i,i,i,i,B.f8,i,i,1/0)],s),B.l,i,B.e,B.h,0,B.p),B.f,i,i,new A.o(B.aS,i,p,q,i,i,B.m),i,i,i,i,AN.a1Q,i,i,i)
p=A.n(16)
m=A.K(B.bn,B.r,1)
l=j.aUu("Original due",C.xA(h.r,!1))
n=j.aUu("Current due",C.xA(h.f,!1))
o=w.j(0.1)
k=A.n(12)
p=A.a([q,B.R,A.p(i,A.x(A.a([l,B.M,n,B.R,A.p(i,A.c(h.gaOr(),i,i,i,i,i,i,A.l(i,i,w,i,i,i,i,i,i,i,i,12.5,i,i,B.u,i,i,!0,i,0.4,i,i,i,i,i,i),B.K,i,i),B.f,i,i,new A.o(o,i,i,k,i,i,B.m),i,i,i,i,B.x0,i,i,1/0),B.R,j.cnc(),B.M,j.c9z(g,f)],s),B.l,i,B.e,B.h,0,B.p),B.f,i,i,new A.o(B.c,i,m,p,i,i,B.m),i,i,i,i,B.bg,i,i,i)],s)
q=B.a.i(h.y)
if(q.length!==0){o=A.n(14)
n=A.K(B.bn,B.r,1)
B.d.u(p,A.a([B.R,A.p(i,A.x(A.a([D.fWk,B.at,A.c(q,i,i,i,i,i,i,D.fKB,i,i,i)],s),B.B,i,B.e,B.h,0,B.p),B.f,i,i,new A.o(B.aS,i,n,o,i,i,B.m),i,i,i,i,B.bg,i,i,1/0)],s))}if(h.gaJ1()){q=A.n(14)
o=A.K(B.cD,B.r,1.6)
B.d.u(p,A.a([B.R,A.p(i,A.x(A.a([D.hc3,B.M,A.by(A.n(12),A.ej(new A.a5(1/0,88,A.b4(i,i,i,new A.XN(h.ax,B.a_,D.fto,!0,3.5,i),B.aA),i),B.c,!0),B.aq)],s),B.B,i,B.e,B.h,0,B.p),B.f,i,i,new A.o(B.c,i,o,q,i,i,B.m),i,i,i,i,B.D1,i,i,i)],s))}p.push(B.aB)
p.push(D.h3Q)
return A.p(i,A.x(A.a([r,new A.D(B.a1S,A.x(p,B.am,i,B.e,B.h,0,B.p),i)],s),B.am,i,B.e,B.O,0,B.p),B.aq,i,i,new A.o(B.c,i,t,u,i,i,B.m),i,i,i,i,i,i,i,1/0)},
aUu(d,e){var w=null
return A.A(A.a([A.E(A.c(d,w,w,w,w,w,w,D.ad8,w,w,w),1),A.c(e,w,w,w,w,w,w,D.fH_,w,w,w)],x.p),B.l,w,B.e,B.h,0,w,w)},
cnc(){var w,v,u="Date paid",t=this.c
if(t.x==null)return this.abm(B.ee,u,"Not paid yet")
w=t.A_(null).length
v=w===0?B.b5:B.bE
return this.abm(v,u,C.xA(t.x,!0))},
c9z(d,e){var w,v,u=null,t="Missed days"
if(this.c.x!=null&&e)return this.abm(B.b5,t,"None \u2014 paid on time")
w=d.length
if(w===0)return this.abm(B.b5,t,"None yet")
w=A.c("Missed days ("+w+")",u,u,u,u,u,u,D.ad8,u,u,u)
v=A.U(d).k("O<1,hh>")
v=A.B(new A.O(d,new C.cak(),v),v.k("aj.E"))
return A.x(A.a([w,B.aj,A.bZ(B.bI,v,B.br,u,6,6)],x.p),B.B,u,B.e,B.h,0,B.p)},
abm(d,e,f){var w=null
return A.A(A.a([A.E(A.c(e,w,w,w,w,w,w,D.ad8,w,w,w),1),new A.d2(1,B.ci,A.c(f,w,w,w,w,w,w,A.l(w,w,d,w,w,w,w,w,w,w,w,12.5,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),B.e0,w,w),w)],x.p),B.B,w,B.e,B.h,0,w,w)}}
C.beC.prototype={
a4(d,e){new A.XN(this.b,B.a_,e,!0,3.5,null).a4(d,e)},
aD(d){return d.b!==this.b}}
C.aqX.prototype={
R(){return new C.aFO(A.a([],x.bp))},
ge9(){return this.c}}
C.aFO.prototype={
a_(){this.a3()
this.JK()},
JK(){var w=0,v=A.j(x.H),u,t=this,s
var $async$JK=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(A.a3V(t.a.c),$async$JK)
case 3:s=e
if(t.c==null){w=1
break}t.l(new C.dU1(t,s))
case 1:return A.h(u,v)}})
return A.i($async$JK,v)},
aWs(d,e){var w,v=null,u=this.a.d.a,t=u?B.a_:B.aS,s=A.l(v,v,u?B.bv:B.bk,v,v,v,v,v,v,v,v,13,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),r=A.n(10)
u=(this.a.d.a?B.bv:B.bk).j(0.22)
w=A.n(10)
return A.bC(v,new A.b6(4,r,new A.ax(u,1,B.r,-1)),v,B.bg,v,v,v,v,!0,new A.b6(4,w,new A.ax((this.a.d.a?B.bv:B.bk).j(0.22),1,B.r,-1)),v,v,v,v,v,t,!0,v,v,v,v,new A.b6(4,A.n(10),D.b7L),v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,!0,v,s,d,!0,!0,!1,v,v,v,v,v,e,v,v,v,v,v,v,v,v)},
aWr(d){return this.aWs(d,null)},
QG(d){return this.cqV(d)},
cqV(d){var w=0,v=A.j(x.T),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$QG=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
n=d?B.IS:B.eZ
w=7
return A.b(new A.ih().Da(72,900,900,n),$async$QG)
case 7:q=f
if(q==null){u=null
w=1
break}w=8
return A.b(q.fu(),$async$QG)
case 8:p=f
n=B.cS.gcp().aK(p)
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
if(n!=null)n.L(x.q).f.T(A.b3(null,null,null,null,null,B.t,null,A.c("Could not pick photo: "+A.v(o),null,null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))
u=null
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$QG,v)},
b4M(d,e,f,g,h,i){var w,v,u,t,s=this,r=null,q=s.a.d.a,p=q?B.a_:B.aS,o=A.n(10),n=A.K((q?B.bv:B.bk).j(0.18),B.r,1)
if(d)q=B.cZ
else q=s.a.d.a?B.bv:B.bk
q=A.V(e,q,r,r,r,18)
w=A.c(i,r,r,r,r,r,r,A.l(r,r,s.a.d.a?B.aS:B.aw,r,r,r,r,r,r,r,r,12.5,r,r,B.N,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
v=d?"Added \xb7 optional":h
if(d)u=B.cZ
else u=s.a.d.a?B.bv:B.bk
t=x.p
u=A.E(A.x(A.a([w,A.c(v,r,r,r,r,r,r,A.l(r,r,u,r,r,r,r,r,r,r,r,10.5,r,r,B.a8,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],t),B.B,r,B.e,B.h,0,B.p),1)
v=A.fv(r,r,r,r,r,r,r,r,r,r,r,B.cZ,r,r,r,r,r,r,r,r,r,r,r,r,r,B.co)
q=A.a([q,B.aa,u,A.bM(!1,A.c(d?"Change":"Add",r,r,r,r,r,r,r,r,r,r),r,r,!0,r,r,r,f,r,v)],t)
if(d)q.push(A.aI(r,r,r,r,A.V(B.cC,s.a.d.a?B.bv:B.bk,r,r,r,18),r,r,r,g,r,r,r,r,r,B.co))
return A.p(r,A.A(q,B.l,r,B.e,B.h,0,r,r),B.f,r,r,new A.o(p,r,n,o,r,r,B.m),r,r,r,B.jB,D.bFL,r,r,r)},
E3(d){return this.bFu(d)},
bFt(){return this.E3(null)},
bFu(a5){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$E3=A.e(function(a6,a7){if(a6===1)return A.f(a7,v)
for(;;)switch(w){case 0:a2={}
a3=a5==null
a4=a3?null:a5.b
if(a4==null)a4=""
s=$.az()
r=new A.au(new A.bd(a4,B.b6,B.aP),s)
if(a3)a4=""
else{a4=a5.c
q=B.i.fO(a4)
p=a5.c
a4=a4===q?B.o.v(B.i.M(p)):B.i.a5(p,2)}o=new A.au(new A.bd(a4,B.b6,B.aP),s)
a4=a3?null:a5.y
if(a4==null)a4=""
n=new A.au(new A.bd(a4,B.b6,B.aP),s)
if(a3){a4=new A.W(Date.now(),0,!1).bL(6048e8)
m=A.c0(a4.gck(),a4.gci(),a4.gcB(),0,0,0,0,0)}else{a4=a5.f
m=A.c0(a4.gck(),a4.gci(),a4.gcB(),0,0,0,0,0)}a2.a=m
l=a3?null:a5.as
a2.b=l==null?"":l
k=a3?null:a5.at
a2.c=k==null?"":k
a4=a3?null:a5.ax
if(a4==null)a4=[]
j=A.bt(a4,!0,x.cT)
i=a3?null:A.hpy(a5.d)
a2.d=i
h=a3?null:B.a.i(a5.e)
if(h==null)h=""
a2.e=h
if(h.length===0&&i!=null)a2.e=i===B.xN?"\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1":"\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1"
a4=t.c
a4.toString
w=3
return A.b(A.i2(B.v.j(0.55),!0,"Dismiss",a4,new C.dTL(),new C.dTM(a2,t,a5,r,new C.dTN(a2,t),o,n,j),B.eH,!0,x.y),$async$E3)
case 3:g=a7
f=B.a.i(r.a.a)
e=A.cr(B.a.i(o.a.a))
if(e==null)e=0
d=B.a.i(n.a.a)
r.V$=s
r.W$=0
o.V$=s
o.W$=0
n.V$=s
n.W$=0
if(g!==!0||t.c==null){w=1
break}if(f.length===0||e<=0){t.c.L(x.q).f.T(D.fzY)
w=1
break}a0=a2.d
if(a0==null){t.c.L(x.q).f.T(D.fyC)
w=1
break}a1=A.fVl(a2.e,a0)
w=a3?4:6
break
case 4:a3=t.a.c
a4=Date.now()
s=a2.a
q=a2.b
a2=a2.c
p=a0===B.xN?"male":"female"
w=7
return A.b(A.ajT(a3,A.hy3(0,e,a1,null,"",s,p,"iou_"+1000*a4,q,d,null,null,f,a2,j)),$async$E3)
case 7:w=5
break
case 6:a5.b=f
a5.c=e
a5.y=d
a5.as=a2.b
a5.at=a2.c
a5.d=a0===B.xN?"male":"female"
a5.e=a1
a3=a5.ax
B.d.a6(a3)
B.d.u(a3,j)
a3=a2.a
a3=A.c0(a3.gck(),a3.gci(),a3.gcB(),0,0,0,0,0)
a4=a5.f
if(!a3.A(0,A.c0(a4.gck(),a4.gci(),a4.gcB(),0,0,0,0,0)))a5.cVi(a2.a)
w=8
return A.b(A.ajT(t.a.c,a5),$async$E3)
case 8:case 5:w=9
return A.b(t.JK(),$async$E3)
case 9:case 1:return A.h(u,v)}})
return A.i($async$E3,v)},
aX7(d,e,f,g){var w,v,u,t,s,r,q,p=null
if(g)w=B.cZ.j(0.14)
else w=this.a.d.a?B.a_:B.aS
v=A.n(12)
u=A.n(12)
t=A.n(12)
if(g)s=B.cZ
else s=(this.a.d.a?B.bv:B.bk).j(0.2)
s=A.K(s,B.r,g?1.5:1)
r=C.b1f(d,18)
if(g)q=B.cZ
else q=this.a.d.a?B.aS:B.aw
return A.aG(!1,B.a3,!0,v,A.aM(!1,u,!0,A.p(p,A.A(A.a([r,B.bb,A.c(e,p,p,p,p,p,p,A.l(p,p,q,p,p,p,p,p,p,p,p,13,p,p,B.D,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)],x.p),B.l,p,B.ba,B.h,0,p,p),B.f,p,p,new A.o(p,p,s,t,p,p,B.m),p,p,p,p,B.bR,p,p,p),p,!0,p,p,p,p,p,p,p,p,p,p,p,f,p,p,p,p,p,p,p),B.f,w,0,p,p,p,p,p,B.ai)},
Tu(d){return this.cJb(d)},
cJb(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$Tu=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=d.x!=null?3:5
break
case 3:d.x=null
w=4
break
case 5:s=t.c
s.toString
w=6
return A.b(A.i2(B.v.j(0.55),!0,"Dismiss",s,new C.dU4(),new C.dU5(t,d),B.hl,!0,x.y),$async$Tu)
case 6:if(f!==!0){w=1
break}s=Date.now()
d.x=new A.W(s,0,!1)
case 4:w=7
return A.b(A.ajT(t.a.c,d),$async$Tu)
case 7:w=8
return A.b(t.JK(),$async$Tu)
case 8:case 1:return A.h(u,v)}})
return A.i($async$Tu,v)},
QF(d,e){return this.bQB(0,e)},
bQB(d,e){var w=0,v=A.j(x.H),u,t=this,s
var $async$QF=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=3
return A.b(A.lC(s,"Cancel","Delete",e.b+" \xb7 "+A.BF(e.c)+" will be removed from this device.","Delete this debt?"),$async$QF)
case 3:if(!g){w=1
break}w=4
return A.b(C.fOz(t.a.c,e.a),$async$QF)
case 4:w=5
return A.b(t.JK(),$async$QF)
case 5:case 1:return A.h(u,v)}})
return A.i($async$QF,v)},
ahf(d){return this.cky(d)},
cky(d){var w=0,v=A.j(x.H),u=this,t
var $async$ahf=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return A.b(A.bU(B.L,null,new C.dTZ(u,d),t,!0,!0,!1,null,!1,!1,x.H),$async$ahf)
case 2:return A.h(null,v)}})
return A.i($async$ahf,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null
if(m.e)return D.eDC
w=J.dN(m.d,new C.dU6())
v=A.B(w,w.$ti.k("M.E"))
w=J.dN(m.d,new C.dU7())
u=A.B(w,w.$ti.k("M.E"))
t=B.d.cE(v,0,new C.dU8())
w=A.n(18)
s=m.a.d.a
r=s?D.cGI:D.aEU
q=A.K(s?B.cZ.j(0.35):B.cZ.j(0.18),B.r,1)
s=A.p(l,D.c6Z,B.f,l,l,new A.o(B.cZ.j(m.a.d.a?0.28:0.14),l,l,A.n(12),l,l,B.m),l,38,l,l,l,l,l,38)
p=x.p
s=A.A(A.a([s,B.ar,A.E(A.c("Cashier",l,l,l,l,l,l,A.l(l,l,m.a.d.a?B.aS:B.aw,l,l,l,l,l,l,l,l,18,l,l,B.u,l,l,!0,l,-0.2,l,l,l,l,l,l),l,l,l),1),A.aG(!1,B.a3,!0,A.n(12),A.aM(!1,A.n(12),!0,D.eCX,l,!0,l,l,l,l,l,l,l,l,l,l,l,new C.dU9(m),l,l,l,l,l,l,l),B.f,B.cZ,0,l,l,l,l,l,B.ai)],p),B.l,l,B.e,B.h,0,l,l)
o=A.E(m.cFc("Open",""+v.length),1)
n=v.length===0?"$0.00":A.BF(t)
r=A.a([A.p(l,A.x(A.a([s,B.af,A.A(A.a([o,B.aa,A.E(m.bb0(v.length!==0,"Owed",n),1)],p),B.l,l,B.e,B.h,0,l,l)],p),B.B,l,B.e,B.h,0,B.p),B.f,l,l,new A.o(l,l,q,w,l,new A.a8(B.ay,B.aD,B.x,r,l,l),B.m),l,l,l,l,B.anG,l,l,l),B.aB],p)
if(J.cx(m.d)){w=m.a.d.a
s=w?B.el:B.c
q=A.n(18)
o=A.K((w?B.bv:B.bk).j(0.12),B.r,1)
n=A.p(l,D.c1u,B.f,l,l,new A.o(B.cZ.j(0.12),l,l,A.n(16),l,l,B.m),l,52,l,l,l,l,l,52)
w=A.c("Nobody owes you yet",l,l,l,l,l,l,A.l(l,l,m.a.d.a?B.aS:B.aw,l,l,l,l,l,l,l,l,15,l,l,B.D,l,l,!0,l,l,l,l,l,l,l,l),B.K,l,l)
r.push(A.p(l,A.x(A.a([n,B.af,w,B.at,A.c("Add a name, amount, and pay-by date.",l,l,l,l,l,l,A.l(l,l,m.a.d.a?B.bv:B.bk,l,l,l,l,l,l,l,l,12.5,l,l,l,l,1.35,!0,l,l,l,l,l,l,l,l),B.K,l,l)],p),B.l,l,B.e,B.h,0,B.p),B.f,l,l,new A.o(s,l,o,q,l,l,B.m),l,l,l,l,D.bIu,l,l,1/0))}else{w=m.gcq8()
s=A.B(new A.O(v,w,A.U(v).k("O<1,w>")),x.l)
if(u.length!==0){q=A.a([B.aj,new A.D(D.bK9,A.c("Paid",l,l,l,l,l,l,A.l(l,l,m.a.d.a?B.bv:B.bk,l,l,l,l,l,l,l,l,12,l,l,B.D,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),l)],p)
B.d.u(q,new A.O(u,w,A.U(u).k("O<1,w>")))
B.d.u(s,q)}B.d.u(r,s)}return A.x(r,B.am,l,B.e,B.h,0,B.p)},
bb0(d,e,f){var w,v=this,u=null,t=v.a.d.a?B.v.j(0.22):B.c.j(0.85),s=A.n(14),r=A.K((v.a.d.a?B.bv:B.bk).j(0.12),B.r,1),q=A.c(e,u,u,u,u,u,u,A.l(u,u,v.a.d.a?B.bv:B.bk,u,u,u,u,u,u,u,u,11,u,u,B.N,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)
if(d)w=B.cZ
else w=v.a.d.a?B.aS:B.aw
return A.p(u,A.x(A.a([q,B.bs,A.c(f,u,1,B.a2,u,u,u,A.l(u,u,w,u,u,u,u,u,u,u,u,16,u,u,B.u,u,u,!0,u,-0.2,u,u,u,u,u,u),u,u,u)],x.p),B.B,u,B.e,B.h,0,B.p),B.f,u,u,new A.o(t,u,r,s,u,u,B.m),u,u,u,u,B.ep,u,u,u)},
cFc(d,e){return this.bb0(!1,d,e)},
cq9(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=d.A_(j).length,h=d.bku()
if(d.x!=null){w=d.A_(j).length
v=w===0?B.cZ:B.bE}else if(d.gVa())v=B.bE
else{if(h)w=B.cZ
else w=k.a.d.a?B.bv:B.bk
v=w}if(d.x!=null){w=d.A_(j).length
u=d.x
if(w===0){u.toString
t="Paid on time \xb7 "+C.xA(u,!1)}else{u.toString
t="Paid "+C.xA(u,!1)+" \xb7 "+i+" missed"}}else if(h)t="Pays tomorrow"
else{w=d.f
t=i>0?"Due "+C.xA(w,!1)+" \xb7 "+i+" missed":"Due "+C.xA(w,!1)}w=k.a.d.a?B.el:B.c
u=A.n(18)
if(d.gVa()&&d.x==null)s=B.bE.j(0.35)
else s=(k.a.d.a?B.bv:B.bk).j(0.12)
s=A.K(s,B.r,1)
r=k.a.d.a?j:A.a([new A.aa(0,B.H,B.v.j(0.04),B.cP,12)],x.V)
q=A.n(18)
p=k.a.d.a?B.bt:B.mm
o=A.K(d.gVa()&&d.x==null?B.bE.j(0.45):B.cZ.j(0.28),B.r,1.4)
n=d.x!=null?0.55:1
m=A.hpy(d.d)
o=A.p(B.z,A.d5(C.b1f(A.fVl(d.e,m),24),n),B.f,j,j,new A.o(p,j,o,j,j,j,B.a6),j,46,j,j,j,j,j,46)
p=d.b
n=k.a.d.a?B.aS:B.aw
m=x.p
n=A.a([new A.d2(1,B.ci,A.c(p,j,1,B.a2,j,j,j,A.l(j,j,n.j(d.x!=null?0.6:1),j,j,j,j,j,j,j,j,14.5,j,j,B.D,j,j,!0,j,j,j,j,j,j,j,j),j,j,j),j)],m)
if(B.a.i(d.as).length!==0||B.a.i(d.at).length!==0||d.gaJ1())B.d.u(n,A.a([B.dZ,A.V(B.Qa,B.cZ.j(0.8),j,j,j,14)],m))
p=A.E(A.x(A.a([A.A(n,B.l,j,B.e,B.h,0,j,j),B.cQ,A.c(t,j,1,B.a2,j,j,j,A.l(j,j,v,j,j,j,j,j,j,j,j,11.5,j,j,B.N,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)],m),B.B,j,B.e,B.h,0,B.p),1)
n=A.BF(d.c)
l=k.a.d.a?B.aS:B.aw
n=A.c(n,j,j,j,j,j,j,A.l(j,j,l.j(d.x!=null?0.55:1),j,j,j,j,j,j,j,j,14,j,j,B.u,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)
return A.p(j,A.aG(!1,B.a3,!0,j,A.aM(!1,q,!0,new A.D(Ax.anu,A.A(A.a([o,B.bc,p,B.aa,A.x(A.a([n,B.bs,A.V(B.eM,(k.a.d.a?B.bv:B.bk).j(0.5),j,j,j,18)],m),B.dt,j,B.e,B.h,0,B.p)],m),B.l,j,B.e,B.h,0,j,j),j),j,!0,j,j,j,j,j,j,j,j,j,j,j,new C.dU0(k,d),j,j,j,j,j,j,j),B.f,B.L,0,j,j,j,j,j,B.ai),B.f,j,j,new A.o(w,j,s,u,r,j,B.m),j,j,j,B.d7,j,j,j,j)}}
C.v5.prototype={}
C.amX.prototype={
B(a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0=null,a1=d.c,a2=a1.y,a3=d.d
if(a2)a3=a3.toUpperCase()
w=a1.w
v=w===B.b8
u=v?B.B:B.l
t=a1.as
s=A.n(t?12:22)
r=a1.e
q=r.j(t?0.6:0.85)
q=A.K(q,B.r,t?1.2:1.6)
p=A.a([new A.aa(0,B.H,B.v.j(0.45),B.cz,16)],x.V)
o=x.p
n=A.a([],o)
m=B.v.j(t?0.07:0.3)
l=A.K(r.j(0.6),B.r,1)
n.push(A.aA(a0,A.p(a0,A.V(B.cC,t?a1.f:B.c,a0,a0,a0,17),B.f,a0,a0,new A.o(m,a0,l,a0,a0,a0,B.a6),a0,30,a0,a0,a0,a0,a0,30),B.y,!1,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,d.f,a0,a0,a0,a0,a0,a0,!1,B.a4))
m=v?B.a5:B.z
l=A.a([],o)
k=a1.r
j=k.length!==0
if(j&&!v)l.push(new A.D(B.j3,A.c(k,a0,a0,a0,a0,a0,a0,A.l(a0,a0,r,a0,a0,a0,a0,a0,a0,a0,a0,15,a0,a0,a0,a0,a0,!0,a0,a0,a0,a0,a0,a0,a0,a0),a0,a0,a0),a0))
i=a1.f
h=a1.x
g=h?"Georgia":a0
f=a2?16:19
a2=a2?2.2:0.5
l.push(A.c(a3,a0,1,a0,a0,!1,a0,A.l(a0,a0,i,a0,a0,a0,a0,a0,g,a0,a0,f,a0,a0,B.u,a0,a0,!0,a0,a2,a0,a0,a0,t?a0:D.aB2,a0,a0),a0,a0,a0))
if(j&&!v)l.push(new A.D(B.HT,A.c(k,a0,a0,a0,a0,a0,a0,A.l(a0,a0,r,a0,a0,a0,a0,a0,a0,a0,a0,15,a0,a0,a0,a0,a0,!0,a0,a0,a0,a0,a0,a0,a0,a0),a0,a0,a0),a0))
a2=A.a([new A.dc(B.dp,m,B.f,A.A(l,B.l,a0,B.e,B.O,0,a0,a0),a0)],o)
v=d.e
m=B.a.i(v)
if(m.length!==0){m=i.j(0.65)
a2.push(new A.D(D.bEX,A.c(v,a0,1,B.a2,a0,a0,a0,A.l(a0,a0,m,a0,a0,a0,a0,a0,a0,a0,a0,10,h?B.cR:B.bo,a0,a0,a0,a0,!0,a0,0.8,a0,a0,a0,a0,a0,a0),w,a0,a0),a0))}n.push(A.E(new A.D(B.fD,A.x(a2,u,a0,B.e,B.O,0,B.p),a0),1))
n.push(D.fuc)
a2=A.a([A.A(n,B.l,a0,B.e,B.h,0,a0,a0)],o)
w=d.r
if(w!=null)B.d.u(a2,A.a([new A.D(B.x_,A.p(a0,a0,B.f,a0,a0,new A.o(a0,a0,a0,a0,a0,new A.a8(B.a5,B.a9,B.x,A.a([B.L,r.j(0.75),B.L],x.O),a0,a0),B.m),a0,1,a0,a0,a0,a0,a0,a0),a0),w],o))
e=new A.D(B.m0,A.x(a2,B.l,a0,B.e,B.O,0,B.p),a0)
if(a1.z){a2=A.n(t?9:19)
e=A.p(a0,e,B.f,a0,a0,new A.o(a0,a0,A.K(r.j(0.45),B.r,1),a2,a0,a0,B.m),a0,a0,a0,B.hL,a0,a0,a0,a0)}return A.p(a0,e,B.f,a0,a0,new A.o(a0,a0,q,s,p,new A.a8(B.ay,B.aD,B.x,a1.d,a0,a0),B.m),a0,a0,a0,D.bGf,a0,a0,a0,a0)}}
C.aXX.prototype={
B(d){var w,v,u,t,s,r,q=null,p=this.c,o=this.e,n=A.p(q,q,B.f,o.j(0.28),q,q,q,1,q,q,q,q,q,q),m=x.p,l=A.a([],m),k=p.r,j=k.length!==0
if(j)l.push(A.c(k,q,q,q,q,q,q,A.l(q,q,o.j(0.55),q,q,q,q,q,q,q,q,11,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q))
w=p.y
v=this.d
if(w)v=v.toUpperCase()
u=p.w===B.b8?B.b8:B.K
t=o.j(0.6)
s=p.x?"Georgia":q
r=w?1.6:0.6
l.push(A.E(A.c(v,q,1,B.a2,q,q,q,A.l(q,q,t,q,q,q,q,q,s,q,q,10.5,w?B.bo:B.cR,q,B.N,q,q,!0,q,r,q,q,q,q,q,q),u,q,q),1))
if(j)l.push(A.c(k,q,q,q,q,q,q,A.l(q,q,o.j(0.55),q,q,q,q,q,q,q,q,11,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q))
o=A.a([A.A(l,B.l,q,B.e,B.h,0,q,q),B.cQ,n],m)
if(p.z)o.push(new A.D(B.va,n,q))
return new A.D(B.d7,A.x(o,B.l,q,B.e,B.O,0,B.p),q)}}
C.Uz.prototype={
R(){return new C.big()}}
C.big.prototype={
gc47(){var w=this.d
return w===$?this.d=this.a.c:w},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=A.aF(d,n,x.w).w,l=x.p,k=A.a([D.eDx,D.eDD],l)
for(w=0;w<8;++w){v=D.a6d[w]
u=o.d
if(u===$){u=o.d=o.a.c
t=u}else t=u
s=v.a
r=u===s?B.IG:B.A6
q=t===s
r=A.V(r,q?B.eG:B.bY,n,n,n,17)
q=q?B.c:B.ab
r=A.a([r,B.bb,A.c(v.b,n,n,n,n,n,n,new A.G(!0,q,n,n,n,n,13.5,B.u,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n),n,n,n),B.aa,new A.bu(1,B.b9,A.c(v.c,n,1,B.a2,n,n,n,B.Bu,n,n,n),n)],l)
u=o.d
if((u===$?o.d=o.a.c:u)===s){s=new A.aP(24,24)
p=new A.ax(B.eG,2,B.r,-1)
s=new A.o(n,n,new A.bE(p,p,p,p),new A.bb(s,s,s,s),n,n,B.m)}else s=n
q=o.a
k.push(A.aA(n,new A.D(B.eS,A.x(A.a([new A.D(B.nf,new A.c1(B.aK,B.e,B.h,B.l,n,B.p,n,0,r,n),n),A.p(n,new A.dv(!0,new C.amX(v,q.d,q.e,new C.djd(),n,n),n),B.f,n,n,s,n,n,n,n,n,n,n,n)],l),B.B,n,B.e,B.h,0,B.p),n),B.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.dje(o,v),n,n,n,n,n,n,!1,B.a4))}k.push(new A.D(D.bGE,A.bI(D.hhG,n,new C.djf(o,d),A.bp(B.b_,n,n,n,n,B.pl,n,n,new A.b9(A.n(16),B.a1),n,n,n)),n))
return A.bo(!0,new A.cS(new A.aY(0,1/0,0,m.a.b*0.9),A.co(k,n,n,D.bL2,n,n,B.ah,!0),n),!0,!1,B.ag,!0,!0)}}
C.nH.prototype={
ak(){var w=this
return A.J(["id",w.a,"title",w.b,"body",w.c,"updatedAt",w.d.aa().ag()],x.N,x.z)},
bh4(d,e,f){return new C.nH(this.a,e,d,f)}}
C.IH.prototype={
x8(d,e,f,g,h,i,j,k,a0,a1,a2,a3){var w=this,v=k==null?w.a:k,u=a2==null?w.b:a2,t=a0==null?w.c:a0,s=e==null?w.d:e,r=f==null?w.e:f,q=a3==null?w.f:a3,p=i==null?w.r:i,o=g==null?w.w:g,n=a1==null?w.x:a1,m=d==null?w.y:d,l=j==null?w.z:j
return new C.IH(v,u,t,s,r,q,p,o,n,m,l,h==null?w.Q:h)},
aHa(d){var w=null
return this.x8(w,w,w,w,w,d,w,w,w,w,w,w)},
cQT(d){var w=null
return this.x8(w,w,w,w,d,w,w,w,w,w,w,w)},
bh2(d,e,f){var w=null
return this.x8(d,w,w,w,w,w,w,w,e,w,f,w)},
cRx(d){var w=null
return this.x8(w,w,w,w,w,w,d,w,w,w,w,w)},
cRG(d){var w=null
return this.x8(w,w,w,w,w,w,w,w,w,d,w,w)},
cQR(d){var w=null
return this.x8(w,w,w,d,w,w,w,w,w,w,w,w)},
cRI(d){var w=null
return this.x8(w,w,w,w,w,w,w,w,w,w,w,d)},
cQO(d){var w=null
return this.x8(w,w,d,w,w,w,w,w,w,w,w,w)},
cQJ(d){var w=null
return this.x8(w,d,w,w,w,w,w,w,w,w,w,w)},
GB(d){var w=null
return this.x8(w,w,w,w,w,w,w,d,w,w,w,w)},
cRQ(d,e,f,g,h,i,j,k,l,m,n){return this.x8(d,e,f,g,null,h,i,j,k,l,m,n)},
ak(){var w=this
return A.J(["style",w.a,"title",w.b,"subtitle",w.c,"emblem",w.d,"foil",w.e,"titleSize",w.f,"position",w.r,"frame",w.w,"texture",w.x,"author",w.y,"ribbon",w.z,"header",w.Q],x.N,x.z)},
cOn(d,e,f){var w,v,u,t,s,r,q,p,o=null,n="title",m="subtitle",l=new C.bTI(d),k=A.aJ(d.h(0,"emblem")),j=k==null?o:B.i.M(k),i=A.aJ(d.h(0,"titleSize"))
if(i==null)i=o
k=l.$2("style",f)
w=typeof d.h(0,n)=="string"&&B.a.i(A.cT(d.h(0,n))).length!==0?B.a.i(A.cT(d.h(0,n))):o
v=typeof d.h(0,m)=="string"?B.a.i(A.cT(d.h(0,m))):o
u=j!=null&&j>=0&&j<e?j:o
t=l.$2("foil",D.EB.geA(D.EB))
s=i==null?o:B.i.D(i,18,36)
r=l.$2("position",D.a7V)
q=l.$2("frame",D.a7e)
l=l.$2("texture",D.a7a)
p=typeof d.h(0,"author")=="string"?B.a.i(A.cT(d.h(0,"author"))):o
return this.cRQ(p,u,t,q,r,A.rv(d.h(0,"ribbon"))?A.Hf(d.h(0,"ribbon")):o,k,v,l,w,s)}}
C.a0e.prototype={
R(){return new C.aCM(A.a([],x.I),D.PJ)},
ge9(){return this.c}}
C.aCM.prototype={
a_(){var w,v=this
v.a3()
v.f=A.At(0,1)
w=$.az()
v.z=new A.au(B.ax,w)
v.Q=new A.au(B.ax,w)
v.lf()
w=v.a
C.bGj(w.c,w.d).bE(new C.djU(v),x.fL)},
t(){var w,v=this,u=v.f
u===$&&A.d()
u.t()
u=v.z
u===$&&A.d()
w=$.az()
u.V$=w
u.W$=0
u=v.Q
u===$&&A.d()
u.V$=w
u.W$=0
v.a2()},
lf(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$lf=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
w=3
return A.b(C.M3(s.c,s.d),$async$lf)
case 3:r=e
if(t.c==null){w=1
break}t.l(new C.djI(t,r))
t.ayG()
case 1:return A.h(u,v)}})
return A.i($async$lf,v)},
gavd(){var w,v=this
if(!J.cx(v.d)){w=v.r
w=w<0||w>=J.ad(v.d)}else w=!0
return w?null:J.t(v.d,v.r)},
ayG(){var w,v,u=this.gavd(),t=this.z
t===$&&A.d()
w=u==null
v=w?null:u.b
t.sb1(0,v==null?"":v)
t=this.Q
t===$&&A.d()
w=w?null:u.c
t.sb1(0,w==null?"":w)},
ciW(d){this.l(new C.djF(this,d))
this.ayG()},
Ox(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$Ox=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!t.a.f){w=1
break}s=new C.nH(B.o.v(1000*Date.now()),"Untitled page","",new A.W(Date.now(),0,!1))
r=t.a
w=3
return A.b(C.aU1(r.c,r.d,s),$async$Ox)
case 3:w=4
return A.b(t.lf(),$async$Ox)
case 4:if(t.c==null||J.cx(t.d)){w=1
break}q=J.oN(t.d,new C.djg(s))
p=q>=0?q:J.ad(t.d)-1
t.l(new C.djh(t,p))
t.ayG()
r=t.f
r===$&&A.d()
w=r.f.length!==0?5:6
break
case 5:w=7
return A.b(r.C8(p+1,B.cp,B.l5),$async$Ox)
case 7:case 6:case 1:return A.h(u,v)}})
return A.i($async$Ox,v)},
BL(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$BL=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!t.a.f){w=1
break}s=t.z
s===$&&A.d()
r=B.a.i(s.a.a)
s=t.Q
s===$&&A.d()
q=B.a.i(s.a.a)
if(r.length===0){w=1
break}s=t.gavd()
s=s==null?null:s.a
if(s==null)s=B.o.v(1000*Date.now())
p=Date.now()
o=t.a
w=3
return A.b(C.aU1(o.c,o.d,new C.nH(s,r,q,new A.W(p,0,!1))),$async$BL)
case 3:w=4
return A.b(t.lf(),$async$BL)
case 4:if(t.c==null){w=1
break}t.l(new C.djJ(t))
case 1:return A.h(u,v)}})
return A.i($async$BL,v)},
Pf(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Pf=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.gavd()
if(!t.a.f||r==null){w=1
break}s=t.c
s.toString
w=3
return A.b(A.ce(null,null,!0,null,new C.djp(r),s,null,!0,!0,x.y),$async$Pf)
case 3:if(e!==!0||t.c==null){w=1
break}s=t.a
w=4
return A.b(C.bG3(s.c,s.d,r.a),$async$Pf)
case 4:t.l(new C.djq(t))
w=5
return A.b(t.lf(),$async$Pf)
case 5:if(t.c!=null){s=t.f
s===$&&A.d()
s=s.f.length!==0}else s=!1
if(s){s=t.f
s===$&&A.d()
s.Vd(B.o.D(t.r+1,0,J.ad(t.d)))}case 1:return A.h(u,v)}})
return A.i($async$Pf,v)},
zl(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j
var $async$zl=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.BL(),$async$zl)
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
return A.b(C.Sy(s,r.r,o,p,q),$async$zl)
case 8:if(e&&t.c!=null){s=t.c
s.toString
A.a7(s,!1).N(!0)}w=1
break
case 7:s=t.c
s.toString
r=t.a
w=9
return A.b(C.hQ7(s,r.x,r.r),$async$zl)
case 9:n=e
if(n==null||t.c==null){w=1
break}m=1000*Date.now()
s=t.a
w=10
return A.b(C.M3(s.c,s.d),$async$zl)
case 10:l=e
for(s=n.d,r=J.cI(l),k=0;k<s.length;++k){j=s[k]
q=B.a.i(j.a)
if(q.length===0)q="Page "+(k+1)
r.I(l,new C.nH(""+(m+k),q,B.a.i(j.b),new A.W(Date.now(),0,!1)))}r=t.a
w=11
return A.b(C.BM(r.c,r.d,l),$async$zl)
case 11:w=12
return A.b(t.lf(),$async$zl)
case 12:r=t.c
if(r==null){w=1
break}r.L(x.q).f.T(A.b3(null,null,null,null,null,B.t,null,A.c("The AI wrote your book: "+s.length+" pages.",null,null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$zl,v)},
a2j(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$a2j=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.BL(),$async$a2j)
case 5:case 4:if(t.c==null){w=1
break}s=t.gzj(0)
r=B.a.i(t.y.c)
if(r.length===0)r="Family Book"
q=B.d.dr(D.Aw,new C.djG(t),new C.djH())
p=A.a([],x.fD)
o=t.a.w
if(B.a.i(o).length!==0)p.push(new H.n2("Our Family",o,"",""))
for(o=J.aQ(t.d);o.C();){n=o.gP(o)
p.push(new H.n2(n.b,n.c,"",""))}o=t.c
o.toString
w=6
return A.b(H.hrn(o,new H.t0(s,r,"",p,new H.vn(q.d,null,null,null,null,"","","")),null),$async$a2j)
case 6:case 1:return A.h(u,v)}})
return A.i($async$a2j,v)},
OX(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$OX=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.BL(),$async$OX)
case 5:case 4:s=t.c
if(s==null){w=1
break}w=6
return A.b(A.bU(D.aip,null,new C.djl(t),s,!0,!0,!0,I.abe,!1,!1,x.N),$async$OX)
case 6:r=e
if(r==null||t.c==null){w=1
break}q=t.y.cQT(r)
t.l(new C.djm(t,q))
s=t.a
w=7
return A.b(C.Tb(s.c,s.d,q),$async$OX)
case 7:case 1:return A.h(u,v)}})
return A.i($async$OX,v)},
Yt(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Yt=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return A.b(A.bU(D.aip,null,new C.djr(t),r,!0,!0,!0,I.abe,!1,!1,x.e),$async$Yt)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.l(new C.djs(t,s))
r=t.a
w=4
return A.b(C.Tb(r.c,r.d,s),$async$Yt)
case 4:r=t.f
r===$&&A.d()
if(r.f.length!==0)r.C8(0,B.eb,B.nc)
case 1:return A.h(u,v)}})
return A.i($async$Yt,v)},
bWi(d){var w=d.bU(),v=B.a.aZ(B.o.v(w.gci()),2,"0"),u=B.a.aZ(B.o.v(w.gcB()),2,"0")
return""+w.gck()+"-"+v+"-"+u},
gzj(d){var w=B.a.i(this.y.b)
if(!(w.length!==0)){w=B.a.i(this.a.r)
if(w.length===0)w="Our Family Book"}return w},
B(d){var w,v,u,t,s,r=this,q=null,p=r.c3l()
if(r.e)w=D.ah4
else if(J.cx(r.d)){w=r.y
v=r.gzj(0)
u=r.a.f
t=A.c(u?"Your book is waiting for its first page":"No pages yet",q,q,q,q,q,q,D.fFg,q,q,q)
u=u?"Add pages and turn them like a real book: stories, memories and notes about your family.":"The tree owner has not written any pages on this device."
s=x.p
u=A.a([new A.a5(q,330,new A.D(A0.aoR,new C.a_t(w,v,0,q),q),q),B.by,t,B.aj,A.c(u,q,q,q,q,q,q,A.l(q,q,D.l0.j(0.8),q,q,q,q,q,q,q,q,q,q,q,q,q,1.4,!0,q,q,q,q,q,q,q,q),B.K,q,q)],s)
if(r.a.f){w=A.a([B.by],s)
if(B.a.i(r.a.x).length!==0)w.push(A.aA(q,A.p(q,D.fol,B.f,q,q,new A.o(q,q,q,A.n(18),A.a([new A.aa(0,B.H,B.dY.j(0.45),B.J,18)],x.V),E.xD,B.m),q,q,q,q,B.Pn,q,q,q),B.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,r.gcNq(),q,q,q,q,q,q,!1,B.a4))
w.push(B.R)
w.push(A.hv(D.bYs,D.hh7,r.gaQ8(),q))
B.d.u(u,w)}w=A.at(A.cb(A.x(u,B.l,q,B.e,B.O,0,B.p),B.t,q,B.y,q,q,B.eJ,q,q,B.ah),q,q,q)}else{w=r.r
w=w<0?"Tap the cover to open the book":"Page "+(w+1)+" of "+J.ad(r.d)
w=A.c(w,q,q,q,q,q,q,A.l(q,q,D.l0.j(0.8),q,q,q,q,q,q,q,q,12,q,q,B.N,q,q,!0,q,0.4,q,q,q,q,q,q),q,q,q)
v=r.f
v===$&&A.d()
u=r.w?B.e8:B.C5
u=A.x(A.a([new A.D(D.bHJ,w,q),A.E(A.K4(v,new C.djS(r),J.ad(r.d)+1,q,r.gciV(),u,B.aK),1),r.bIt()],x.p),B.l,q,B.e,B.h,0,B.p)
w=u}v=x.p
return A.c5(q,D.a_B,new A.am(B.a0,q,B.b4,B.t,A.a([D.aSv,A.bo(!0,A.x(A.a([p,A.E(w,1)],v),B.l,q,B.e,B.h,0,B.p),!0,!1,B.ag,!0,!0)],v),q),q,!1,!1,q,q)},
c3l(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=h.a
if(f.f)w=B.a.i(f.x).length!==0||J.cJ(h.d)
else w=!1
f=A.a([],x.fp)
if(w)f.push(new C.L5(B.eg,"AI",h.gbGg(),!0))
if(h.a.f)f.push(new C.L5(B.m3,"Cover",h.gbRa(),!1))
if(h.a.f)f.push(new C.L5(B.xv,"Header",h.gbM5(),!1))
if(J.cJ(h.d)||B.a.i(h.a.w).length!==0)f.push(new C.L5(B.vz,"Print",h.gcsg(),!1))
if(h.a.f&&J.cJ(h.d)&&h.r>=0){v=h.w
u=v?B.hn:B.jl
t=v?"Save":"Edit"
f.push(new C.L5(u,t,v?h.gcyG():new C.djC(h),!1))}if(h.a.f)f.push(new C.L5(B.id,"Add page",h.gaQ8(),!1))
v=C.hLA(h.y.Q)
u=h.gzj(0)
t=B.a.i(h.y.c)
if(t.length===0)t="Family Book"
s=J.ad(h.d)
r=J.ad(h.d)===1?"page":"pages"
q=x.p
p=A.a([],q)
for(o=f.length,n=x.O,m=0;m<f.length;f.length===o||(0,A.I)(f),++m){l=f[m]
if(l.d)k=D.dRM
else{k=new A.aP(10,10)
j=A.a([B.c.j(0.14),B.c.j(0.05)],n)
i=new A.ax(E.kF.j(0.5),1,B.r,-1)
j=A.p(g,A.V(l.a,D.l0,g,g,g,17),B.f,g,g,new A.o(g,g,new A.bE(i,i,i,i),new A.bb(k,k,k,k),g,new A.a8(B.a5,B.a9,B.x,j,g,g),B.m),g,32,g,g,g,g,g,32)
k=j}j=D.l0.j(0.85)
p.push(new A.bu(1,B.b9,A.aA(B.c2,A.x(A.a([k,B.bs,A.c(l.b,g,1,g,g,g,g,new A.G(!0,j,g,g,g,g,9.5,B.D,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g),g,g,g)],q),B.l,g,B.e,B.O,0,B.p),B.y,!1,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,l.c,g,g,g,g,g,g,!1,B.a4),g))}return new C.amX(v,u,t+" \xb7 "+s+" "+r,new C.djD(h),A.A(p,B.l,g,B.e,B.h,0,g,g),g)},
AF(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$AF=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.BL(),$async$AF)
case 5:case 4:if(t.c==null){w=1
break}s=A.a([],x.s)
for(r=J.aQ(t.d);r.C();){q=r.gP(r)
s.push(q.b+" "+q.c)}p=H.a4a(B.d.aL(s," "))
s=t.c
s.toString
w=6
return A.b(A.ce(null,null,!0,null,new C.dji(t,p),s,null,!0,!0,x.N),$async$AF)
case 6:o=e
if(o==null||t.c==null){w=1
break}w=o==="write"?7:9
break
case 7:w=10
return A.b(t.zl(),$async$AF)
case 10:w=8
break
case 9:w=o==="fix"?11:13
break
case 11:w=14
return A.b(t.ED(),$async$AF)
case 14:w=12
break
case 13:w=o==="polish"?15:17
break
case 15:w=18
return A.b(t.Ge("Swahili (Kiswahili)",!0),$async$AF)
case 18:w=16
break
case 17:w=19
return A.b(t.cJR(o==="sw"?"Swahili (Kiswahili)":"English"),$async$AF)
case 19:case 16:case 12:case 8:case 1:return A.h(u,v)}})
return A.i($async$AF,v)},
a_t(d,e,f,g,h){var w=null,v=A.n(16),u=B.c.j(0.07),t=A.n(16),s=A.K(E.kF.j(0.3),B.r,1),r=x.p
return new A.D(B.cB,A.aM(!1,v,!0,A.p(w,A.A(A.a([A.p(w,A.V(e,B.c,w,w,w,21),B.f,w,w,new A.o(w,w,w,w,w,E.xD,B.a6),w,42,w,w,w,w,w,42),B.bc,A.E(A.x(A.a([A.c(f,w,w,w,w,w,w,Aa.LF,w,w,w),A.c(g,w,w,w,w,w,w,B.Fw,w,w,w)],r),B.B,w,B.e,B.h,0,B.p),1)],r),B.l,w,B.e,B.h,0,w,w),B.f,w,w,new A.o(u,w,s,t,w,w,B.m),w,w,w,w,B.bg,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.djE(d,h),w,w,w,w,w,w,w),w)},
ED(){return this.bVM()},
bVM(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8
var $async$ED=A.e(function(a9,b0){if(a9===1){s.push(b0)
w=t}for(;;)switch(w){case 0:a6={}
a7=r.c
a7.toString
w=3
return A.b(A.ce(null,null,!0,null,new C.djv(r),a7,null,!0,!0,x.ei),$async$ED)
case 3:q=b0
if(q==null||r.c==null){w=1
break}g=A.B(r.d,x.B)
p=g
f=r.y
o=new A.eK("Working on it\u2026",$.az())
a6.a=!0
a7=r.c
a7.toString
A.ce(null,null,!1,null,new C.djw(o),a7,null,!0,!0,x.H).fA(new C.djx(a6))
n=null
m=null
t=5
a7=q.b
e=q.a
l=A.a([],x.L)
for(d=p,a0=d.length,a1=0;a1<d.length;d.length===a0||(0,A.I)(d),++a1){k=d[a1]
J.c6(l,new A.y(k.b,k.c))}d=r.r
a0=r.y.ak()
j=A.a([],x.s)
for(a1=0;a1<8;++a1){i=D.Aw[a1]
J.c6(j,i.a)}w=8
return A.b(C.aiX(a0,a7,new C.djy(o),d,l,e,j),$async$ED)
case 8:m=b0
t=2
w=7
break
case 5:t=4
a8=s.pop()
h=A.ac(a8)
n=A.v(h)
w=7
break
case 4:w=2
break
case 7:l=r.c
if(l!=null&&a6.a)A.a7(l,!0).e3()
l=o
l.sik($.az())
J.aUv(l,0)
l=r.c
if(l==null){w=1
break}if(m==null){l=l.L(x.q).f
j=n
l.T(A.b3(null,null,null,null,null,B.t,null,A.c(j==null?y.A:j,null,null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))
w=1
break}l=m.b
a3=l.gcn(l)
w=a3?9:10
break
case 9:l=A.a([],x.I)
for(a4=0;a4<J.ad(p);++a4){if(m.b.am(0,a4)){j=J.t(p,a4)
a7=m.b.h(0,a4).a
a7=j.bh4(m.b.h(0,a4).b,a7,new A.W(Date.now(),0,!1))
j=a7}else j=J.t(p,a4)
l.push(j)}j=r.a
w=11
return A.b(C.BM(j.c,j.d,l),$async$ED)
case 11:w=12
return A.b(r.lf(),$async$ED)
case 12:case 10:w=m.c!=null&&m.c.a!==0?13:14
break
case 13:l=r.y
j=m.c
j.toString
a7=A.a([],x.s)
for(a1=0;a1<8;++a1)a7.push(D.Aw[a1].a)
a5=l.cOn(j,12,a7)
l=r.a
w=15
return A.b(C.Tb(l.c,l.d,a5),$async$ED)
case 15:if(r.c!=null)r.l(new C.djz(r,a5))
l=r.f
l===$&&A.d()
if(l.f.length!==0&&q.a==="cover")l.C8(0,B.eb,B.nc)
a3=!0
case 14:l=r.c
if(l==null){w=1
break}l=l.L(x.q).f
j=A.c(m.a,null,null,null,null,null,null,null,null,null,null)
l.T(A.b3(a3?A.cCL("Undo",new C.djA(r,p,f),null):null,null,null,null,null,B.t,null,j,null,B.em,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$ED,v)},
Ge(d,e){return this.cJS(d,e)},
cJR(d){return this.Ge(d,!1)},
cJS(a2,a3){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$Ge=A.e(function(a4,a5){if(a4===1){s.push(a5)
w=t}for(;;)switch(w){case 0:f={}
e=A.B(r.d,x.B)
d=e
a0=new A.eK("Starting\u2026",$.az())
f.a=!0
k=r.c
k.toString
A.ce(null,null,!1,null,new C.djL(a0),k,null,!0,!0,x.H).fA(new C.djM(f))
q=null
p=null
t=4
o=A.a([],x.L)
for(k=d,j=k.length,i=0;i<k.length;k.length===j||(0,A.I)(k),++i){n=k[i]
J.c6(o,new A.y(n.b,n.c))}m=o
w=a3?7:9
break
case 7:w=10
return A.b(H.a4r(m,new C.djN(a0)),$async$Ge)
case 10:w=8
break
case 9:w=11
return A.b(C.bHT(new C.djO(a0),m,a2),$async$Ge)
case 11:case 8:p=a5
t=2
w=6
break
case 4:t=3
a1=s.pop()
l=A.ac(a1)
q=A.v(l)
w=6
break
case 3:w=2
break
case 6:o=r.c
if(o!=null&&f.a)A.a7(o,!0).e3()
o=a0
o.sik($.az())
J.aUv(o,0)
o=r.c
if(o==null){w=1
break}if(p==null){o=o.L(x.q).f
k=q
o.T(A.b3(null,null,null,null,null,B.t,null,A.c(k==null?y.y:k,null,null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))
w=1
break}o=A.a([],x.I)
for(g=0;g<J.ad(d);++g){k=J.t(d,g)
j=J.t(p,g)
o.push(k.bh4(J.t(p,g).b,j.a,new A.W(Date.now(),0,!1)))}k=r.a
w=12
return A.b(C.BM(k.c,k.d,o),$async$Ge)
case 12:w=13
return A.b(r.lf(),$async$Ge)
case 13:o=r.c
if(o==null){w=1
break}o=o.L(x.q).f
if(a3)k="I rewrote your Swahili so it reads naturally."
else k="Your book is now in "+(B.a.Y(a2,"Swahili")?"Swahili":"English")+"."
k=A.c(k,null,null,null,null,null,null,null,null,null,null)
o.T(A.b3(A.cCL("Undo",new C.djP(r,d),null),null,null,null,null,B.t,null,k,null,B.Y,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$Ge,v)},
bIt(){var w,v=this,u=null,t=v.r+1,s=t>0,r=s?new C.djj(v):u
r=A.aI(u,u,u,u,A.V(D.bU1,s?D.l0:B.aT,u,u,u,30),u,u,u,r,u,u,u,u,"Previous page",u)
if(v.a.f&&J.cJ(v.d)&&!v.w&&v.r>=0)s=A.hv(A.V(B.xg,B.Hg,u,u,u,16),A.c("Delete page",u,u,u,u,u,u,A.l(u,u,B.Hg,u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),v.gbQL(),u)
else{s=v.w?"Writing\u2026 swiping is off while you edit":"Swipe to turn the page"
s=A.c(s,u,u,u,u,u,u,A.l(u,u,D.l0.j(0.65),u,u,u,u,u,u,u,u,11.5,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)}s=A.E(A.at(s,u,u,u),1)
w=t<J.ad(v.d)?new C.djk(v):u
return A.bo(!0,new A.D(D.bHy,A.A(A.a([r,s,A.aI(u,u,u,u,A.V(B.eM,t<J.ad(v.d)?D.l0:B.aT,u,u,u,30),u,u,u,w,u,u,u,u,"Next page",u)],x.p),B.l,u,B.e,B.h,0,u,u),u),!0,!1,B.ag,!0,!1)}}
C.a0i.prototype={
R(){return new C.biF(new A.au(B.ax,$.az()))}}
C.biF.prototype={
ga3s(){var w,v=this.e
if(v===$){w=this.a
if(w.c)v="page"
else v=w.d?"book":"cover"
v=this.e=v}return v},
t(){var w=this.d
w.V$=$.az()
w.W$=0
this.a2()},
gbUl(){switch(this.ga3s()){case"cover":var w=D.deI
break
case"book":w=D.d9C
break
default:w=D.dIb
break}return w},
B(d){var w,v,u,t,s,r,q=this,p=null,o=A.n(26),n=E.kF.j(0.5),m=x.p,l=A.A(A.a([D.dRN,B.ar,D.bNg,A.aI(p,p,p,p,B.lC,p,p,p,new C.dlG(d),p,p,p,p,p,p)],m),B.l,p,B.e,B.h,0,p,p),k=A.a([],m),j=q.a
if(j.c)k.push(A.jN(p,p,p,A.c("This page ("+j.e+")",p,p,p,p,p,p,p,p,p,p),p,new C.dlH(q),q.ga3s()==="page",p,p,p,p))
if(q.a.d)k.push(A.jN(p,p,p,D.hbB,p,new C.dlI(q),q.ga3s()==="book",p,p,p,p))
k.push(A.jN(p,p,p,D.fZ9,p,new C.dlJ(q),q.ga3s()==="cover",p,p,p,p))
k=A.bZ(B.bI,k,B.br,p,6,8)
j=B.c.j(0.07)
j=A.aN(p,B.Z,!1,p,!0,B.t,p,A.aO(),q.d,p,p,p,p,p,2,A.bC(p,new A.b6(4,A.n(16),B.a1),p,p,p,p,p,p,!0,p,p,p,p,p,p,j,!0,p,p,p,p,p,p,p,p,p,p,p,p,p,B.kz,"Say it in your own words\u2026",p,p,p,p,p,p,p,p,p,!0,!0,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p),B.y,!0,p,!0,p,!1,p,B.al,p,p,p,p,p,p,p,p,p,6,3,p,!1,"\u2022",p,p,p,p,p,!1,p,p,!1,p,!0,p,B.ae,p,p,p,p,p,p,p,p,p,p,p,B.ds,!0,B.a7,p,B.ao,p,p,p,p)
w=A.a([],m)
for(v=q.gbUl(),u=v.length,t=0;t<u;++t){s=v[t]
r=A.c(s,p,p,p,p,p,p,As.LC,p,p,p)
w.push(A.mR(p,B.c.j(0.08),r,B.hF,new C.dlK(q,s),p,p,p,p))}return A.eH(p,E.CD,A.cb(A.x(A.a([l,B.R,D.heX,B.aj,k,B.af,j,B.M,A.bZ(B.bI,w,B.br,p,6,6),B.aB,A.db(D.bYp,p,D.hfK,new C.dlL(q,d),A.bp(B.b_,p,p,p,p,B.pl,p,p,new A.b9(A.n(16),B.a1),p,p,p)),B.at,D.h9L],m),B.B,p,B.e,B.O,0,B.p),B.t,p,B.y,p,p,B.f9,p,p,B.ah),p,p,p,B.Pl,p,B.dd,p,new A.b9(o,new A.ax(n,1.4,B.r,-1)),p)}}
C.a0g.prototype={
R(){return new C.aCP(A.a([],x.gA))},
ge9(){return this.c}}
C.agH.prototype={}
C.aCP.prototype={
a_(){this.a3()
this.lf()},
lf(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i
var $async$lf=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.a
w=3
return A.b(C.SC(p.c,p.d),$async$lf)
case 3:o=e
n=A.a([],x.gA)
p=J.aQ(o)
case 4:if(!p.C()){w=5
break}s=p.gP(p)
r=t.a
q=r.d
q=s==="main"?q:q+"~"+s
m=n
l=C
k=s
w=6
return A.b(C.bGj(r.c,q),$async$lf)
case 6:j=e
i=J
w=7
return A.b(C.M3(t.a.c,q),$async$lf)
case 7:m.push(new l.agH(k,j,i.ad(e)))
w=4
break
case 5:if(t.c==null){w=1
break}t.l(new C.dk8(t,n))
case 1:return A.h(u,v)}})
return A.i($async$lf,v)},
bck(d){var w=B.a.i(d.b.b)
if(!(w.length!==0)){w=B.a.i(this.a.f)
if(w.length===0)w="Our Family Book"}return w},
Rv(d,e){return this.ckv(0,e)},
ckv(d,e){var w=0,v=A.j(x.H),u=this,t,s
var $async$Rv=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return A.b(A.a7(s,!1).cc(A.eb(new C.dk7(u,e),!0,null,x.y)),$async$Rv)
case 2:t=g
w=3
return A.b(u.lf(),$async$Rv)
case 3:if(t===!0&&u.c!=null)u.c.L(x.q).f.T(D.aWu)
return A.h(null,v)}})
return A.i($async$Rv,v)},
Gg(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$Gg=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(t.d.length>=6){t.c.L(x.q).f.T(D.aWp)
w=1
break}s=t.a
r=s.w
w=B.a.i(r).length===0?3:4
break
case 3:w=5
return A.b(C.aig(s.c,s.d),$async$Gg)
case 5:q=e
w=6
return A.b(t.lf(),$async$Gg)
case 6:w=q!=null&&t.c!=null?7:8
break
case 7:w=9
return A.b(t.Rv(0,B.d.fg(t.d,new C.dkc(q))),$async$Gg)
case 9:case 8:w=1
break
case 4:p=t.c
p.toString
o=s.c
n=s.d
w=10
return A.b(C.Sy(p,s.f,r,n,o),$async$Gg)
case 10:m=e
w=11
return A.b(t.lf(),$async$Gg)
case 11:if(m&&t.c!=null)t.c.L(x.q).f.T(D.aWu)
case 1:return A.h(u,v)}})
return A.i($async$Gg,v)},
QU(d,e){return this.cwk(0,e)},
cwk(d,e){var w=0,v=A.j(x.H),u,t=this,s
var $async$QU=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=3
return A.b(A.ce(null,null,!0,null,new C.dkb(t,e),s,null,!0,!0,x.y),$async$QU)
case 3:if(g!==!0){w=1
break}s=t.a
w=4
return A.b(C.a4D(s.c,s.d,e.a),$async$QU)
case 4:w=5
return A.b(t.lf(),$async$QU)
case 5:case 1:return A.h(u,v)}})
return A.i($async$QU,v)},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.a.e&&o.d.length<6,l=x.p,k=A.a([],l)
for(w=o.d,v=w.length,u=0;u<w.length;w.length===v||(0,A.I)(w),++u)k.push(o.bIw(w[u]))
if(m){t=6-o.d.length
w=A.n(18)
v=B.c.j(0.05)
s=A.K(E.kF.j(0.6),B.r,1.6)
r=t===1?"space":"spaces"
k.push(A.aA(n,new A.fL(0.7142857142857143,A.p(n,A.x(A.a([D.dRO,B.af,D.eCy,B.at,A.c(""+t+" "+r+" left",n,n,n,n,n,n,A.l(n,n,D.l0.j(0.65),n,n,n,n,n,n,n,n,11.5,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],l),B.l,n,B.ba,B.h,0,B.p),B.f,n,n,new A.o(v,n,s,w,n,n,B.m),n,n,n,n,n,n,n,n),n),B.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,o.gcNm(),n,n,n,n,n,n,!1,B.a4))}w=A.n(22)
v=A.K(E.kF.j(0.85),B.r,1.6)
s=A.aA(n,A.p(n,D.c5H,B.f,n,n,new A.o(B.v.j(0.3),n,A.K(E.kF.j(0.6),B.r,1),n,n,n,B.a6),n,32,n,n,n,n,n,32),B.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.dkd(d),n,n,n,n,n,n,!1,B.a4)
r=A.n(14)
q=B.v.j(0.3)
p=A.K(E.kF.j(0.5),B.r,1)
w=A.p(n,A.A(A.a([s,B.bc,D.bNF,A.p(n,A.c(""+o.d.length+" of 6",n,n,n,n,n,n,D.fEe,n,n,n),B.f,n,n,new A.o(q,n,p,r,n,n,B.m),n,n,n,n,B.hm,n,n,n)],l),B.l,n,B.e,B.h,0,n,n),B.f,n,n,new A.o(n,n,v,w,n,D.cbN,B.m),n,n,n,Al.P8,D.bFq,n,n,n)
if(o.e)k=D.ah4
else k=k.length===0?D.bft:A.cf(new C.dke(k))
return A.c5(n,D.a_B,new A.am(B.a0,n,B.b4,B.t,A.a([D.aSv,A.bo(!0,A.x(A.a([w,A.E(k,1)],l),B.l,n,B.e,B.h,0,B.p),!0,!1,B.ag,!0,!0)],l),n),n,!1,!1,n,n)},
bIw(d){var w,v,u=this,t=null,s=u.bck(d),r=d.c,q=x.p,p=A.a([A.bS(0,new A.dc(B.dI,B.z,B.f,new A.a5(300,420,new C.a_t(d.b,s,r,t),t),t),0,0,0)],q)
if(u.a.e)p.push(A.ao(t,A.aA(t,A.p(t,D.c4W,B.f,t,t,new A.o(B.v.j(0.55),t,A.K(B.aT,B.r,1),t,t,t,B.a6),t,28,t,t,t,t,t,28),B.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new C.dk5(u,d),t,t,t,t,t,t,!1,B.a4),t,t,t,6,6,t))
w=A.c(s,t,1,B.a2,t,t,t,D.fDR,t,t,t)
v=r===1?"page":"pages"
return A.aA(t,A.x(A.a([new A.fL(0.7142857142857143,new A.am(B.a0,t,B.ad,B.t,p,t),t),B.M,w,A.c(""+r+" "+v,t,t,t,t,t,t,A.l(t,t,D.l0.j(0.6),t,t,t,t,t,t,t,t,11,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],q),B.l,t,B.e,B.h,0,B.p),B.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new C.dk6(u,d),t,t,t,t,t,t,!1,B.a4)}}
C.L5.prototype={}
C.a_t.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=B.d.dr(D.Aw,new C.cRY(m),new C.cRZ()),j=m.c,i=D.EB.h(0,j.e),h=A.b1(i==null?4293444714:i)
i=j.r
if(i==="top")w=B.e
else w=i==="bottom"?B.mE:B.ba
v=new C.cS_(h)
i=A.a([new A.aa(0,B.H,B.v.j(0.6),D.ezl,28)],x.V)
u=x.p
t=A.a([A.bS(0,A.b4(l,l,l,new C.bfQ(j.x,h,l),B.aA),0,0,0),A.ao(0,A.p(l,l,B.f,l,l,new A.o(l,l,l,l,l,new A.a8(B.a5,B.a9,B.x,A.a([B.v.j(0.45),B.L],x.O),l,l),B.m),l,l,l,l,l,l,l,l),l,l,0,l,0,26)],u)
for(s=0;s<6;++s){r=new A.aP(3,3)
t.push(new A.cP(8,40+s*46,l,l,l,l,A.p(l,l,B.f,l,l,new A.o(h.j(0.7),l,l,new A.bb(r,r,r,r),l,l,B.m),l,22,l,l,l,l,l,6),l))}r=j.w
if(r==="double")B.d.u(t,A.a([v.$4(D.aoS,8,0.85,2.2),v.$4(D.bKs,5,0.45,1)],u))
else if(r==="single")t.push(v.$4(D.aoS,8,0.85,2.4))
else if(r==="corners")t.push(A.bS(0,new A.D(D.bKo,A.b4(l,l,l,new C.bfH(h,l),B.aA),l),0,0,0))
r=A.V(D.aDR[B.o.D(j.d,0,11)],h.j(0.95),l,l,l,44)
q=A.c(m.d,l,4,B.a2,l,l,l,A.l(l,l,h,l,l,l,l,l,l,l,l,j.f,l,l,B.u,l,1.2,!0,l,0.5,l,l,l,D.aB2,l,l),B.K,l,l)
p=A.p(l,l,B.f,h.j(0.7),l,l,l,2,l,l,l,l,l,90)
o=B.a.i(j.c)
if(!(o.length!==0)){o=m.e
if(o===0)o="A family story"
else{n=o===1?"page":"pages"
n=""+o+" "+n+" of our story"
o=n}}o=A.a([r,B.aB,q,B.af,p,B.af,A.c(o,l,l,l,l,l,l,A.l(l,l,h.j(0.85),l,l,l,l,l,l,l,l,14,B.cR,l,l,l,l,!0,l,l,l,l,l,l,l,l),B.K,l,l)],u)
r=B.a.i(j.y)
if(r.length!==0)B.d.u(o,A.a([B.aO,A.c(r,l,2,B.a2,l,l,l,A.l(l,l,h.j(0.9),l,l,l,l,l,l,l,l,13,l,l,B.D,l,l,!0,l,1.2,l,l,l,l,l,l),B.K,l,l)],u))
t.push(A.bS(0,new A.D(D.bKU,A.x(o,B.l,l,w,B.h,0,B.p),l),0,0,0))
if(j.z)t.push(A.ao(l,A.b4(l,l,l,new C.aJU(l),D.fth),l,l,l,46,0,l))
return A.p(l,A.by(D.afF,new A.am(B.a0,l,B.ad,B.t,t,l),B.aq),B.f,l,l,new A.o(l,l,l,D.afF,i,new A.a8(B.ay,B.aD,B.x,k.c,l,l),B.m),l,l,l,l,l,l,l,l)}}
C.bfQ.prototype={
a4(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=new A.e2()
g.cT(11)
switch(this.b){case"plain":return
case"linen":$.T()
w=A.L()
w.r=B.v.j(0.07).gp(0)
w.c=1
for(v=e.b,u=e.a,t=0;t<v;t+=4)d.ah(new A.r(0,t),new A.r(u,t),w)
$.T()
s=A.L()
s.r=B.c.j(0.05).gp(0)
s.c=1
for(r=0;r<u;r+=4)d.ah(new A.r(r,0),new A.r(r,v),s)
break
case"stars":for(v=e.a,u=e.b,q=this.c,p=0;p<70;++p){o=g.ai()
n=g.ai()
m=g.ai()
$.T()
l=new A.ar(B.T,B.Q,B.W,B.X,B.U)
l.r=q.j(0.25+g.ai()*0.5).gp(0)
d.O(new A.r(o*v,n*u),0.6+m*1.6,l)}break
case"rays":v=e.a*0.55
u=e.b
q=u*0.1
for(o=this.c,n=x.v,p=0;p<14;++p){k=0.47123889803846897+p*0.1691626813471427
m=$.T()
l=A.a([],n)
j=new A.aH(m.r,B.ak,null,null,l)
l.push(new A.aZ(v,q))
j.ac()
m=k-0.04
m=new A.aq(v+Math.cos(m)*u*1.4,q+Math.sin(m)*u*1.4)
l.push(m)
i=j.f
if(i!=null)m.aj(i)
j.ac()
m=k+0.04
m=new A.aq(v+Math.cos(m)*u*1.4,q+Math.sin(m)*u*1.4)
l.push(m)
i=j.f
if(i!=null)m.aj(i)
j.ac()
m=new A.bA()
l.push(m)
l=j.f
if(l!=null)m.aj(l)
j.ac()
m=new A.ar(B.T,B.Q,B.W,B.X,B.U)
m.r=o.j((p&1)===0?0.09:0.03).gp(0)
d.af(j,m)}break
default:$.T()
w=A.L()
w.r=B.v.j(0.07).gp(0)
for(v=e.a,u=e.b,p=0;p<260;++p)d.O(new A.r(g.ai()*v,g.ai()*u),0.8+g.ai()*1.8,w)
$.T()
h=A.L()
h.r=B.c.j(0.035).gp(0)
for(p=0;p<120;++p)d.O(new A.r(g.ai()*v,g.ai()*u),0.6+g.ai()*1.2,h)}},
aD(d){return d.b!==this.b||!d.c.A(0,this.c)}}
C.bfH.prototype={
a4(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k=$.T(),j=A.L(),i=this.b
j.r=i.j(0.9).gp(0)
j.b=B.ac
j.c=2.4
j.d=B.bG
for(w=e.a,v=e.b,v=[D.fgb,new A.b7([w,0,-1,1]),new A.b7([0,v,1,-1]),new A.b7([w,v,-1,-1])],w=v.length,u=x.v,k=k.r,t=0;t<w;++t){s=v[t].a
r=s[0]
q=s[1]
p=s[2]
o=s[3]
s=A.a([],u)
n=new A.aH(k,B.ak,null,null,s)
s.push(new A.aZ(r+p*34,q))
n.ac()
m=new A.aq(r,q)
s.push(m)
l=n.f
if(l!=null)m.aj(l)
n.ac()
m=new A.aq(r,q+o*34)
s.push(m)
s=n.f
if(s!=null)m.aj(s)
n.ac()
d.af(n,j)
s=new A.ar(B.T,B.Q,B.W,B.X,B.U)
s.r=i.j(0.9).gp(0)
d.O(new A.r(r+p*9,q+o*9),3,s)}},
aD(d){return!d.b.A(0,this.b)}}
C.v6.prototype={}
C.a_P.prototype={
R(){return new C.bfO()}}
C.bfO.prototype={
goB(){var w=this.d
return w===$?this.d=this.a.c:w},
gzj(d){var w,v=this.e
if(v===$){w=this.a.c
v=this.e=new A.au(new A.bd(w.b,B.b6,B.aP),$.az())}return v},
gaEk(){var w,v=this.f
if(v===$){w=this.a.c
v=this.f=new A.au(new A.bd(w.c,B.b6,B.aP),$.az())}return v},
gatL(){var w,v=this.r
if(v===$){w=this.a.c
v=this.r=new A.au(new A.bd(w.y,B.b6,B.aP),$.az())}return v},
t(){var w=this,v=w.gzj(0),u=v.V$=$.az()
v.W$=0
v=w.gaEk()
v.V$=u
v.W$=0
v=w.gatL()
v.V$=u
v.W$=0
w.a2()},
auo(d,e,f,g){var w,v,u,t,s=null,r=A.a([],x.p)
for(w=d.length,v=0;v<w;++v){u=d[v]
t=g.h(0,u)
r.push(A.jN(s,s,s,A.c(t==null?u:t,s,s,s,s,s,s,s,s,s,s),s,new C.daZ(this,f,u),e===u,s,s,s,s))}return A.bZ(B.bI,r,B.br,s,6,8)},
aAb(d){var w=null,v=B.c.j(0.07)
return A.bC(w,new A.b6(4,A.n(14),B.a1),w,w,w,w,w,w,!0,w,w,w,w,w,w,v,!0,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,!0,w,B.ma,d,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w)},
B(a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null,d=f.goB(),a0=f.gzj(0),a1=a0.a.a,a2=f.gaEk(),a3=a2.a.a,a4=f.gatL(),a5=d.bh2(a4.a.a,a3,a1)
a1=x.w
a3=A.aF(a6,e,a1).w
a1=A.aF(a6,e,a1).w
d=B.a.i(a5.b)
if(d.length===0)d=f.a.d
d=A.at(new A.a5(190,260,new A.dc(B.dI,B.z,B.f,new A.a5(270,370,new C.a_t(a5,d,f.a.e,e),e),e),e),e,e,e)
a0=A.aN(e,B.Z,!1,e,!0,B.t,e,A.aO(),a0,e,e,e,e,e,2,f.aAb("Title on the cover"),B.y,!0,e,!0,e,!1,e,B.al,e,e,e,e,e,e,e,e,e,1,e,e,!1,"\u2022",e,new C.dbn(f),e,e,e,!1,e,e,!1,e,!0,e,B.ae,e,e,e,e,e,e,e,e,e,e,e,B.ds,!0,B.a7,e,B.ao,e,e,e,e)
a2=A.aN(e,B.Z,!1,e,!0,B.t,e,A.aO(),a2,e,e,e,e,e,2,f.aAb("Small line under it (optional)"),B.y,!0,e,!0,e,!1,e,B.al,e,e,e,e,e,e,e,e,e,1,e,e,!1,"\u2022",e,new C.dbo(f),e,e,e,!1,e,e,!1,e,!0,e,B.ae,e,e,e,e,e,e,e,e,e,e,e,B.ds,!0,B.a7,e,B.ao,e,e,e,e)
w=x.p
v=A.a([],w)
for(u=0;u<8;++u){t=D.Aw[u]
s=f.d
if(s===$){s=f.d=f.a.c
r=s}else r=s
q=t.a
p=s.a===q?B.c:B.aT
q=r.a===q
o=new A.ax(p,q?3:1,B.r,-1)
p=A.p(e,e,B.f,e,e,new A.o(e,e,new A.bE(o,o,o,o),e,e,new A.a8(B.ay,B.aD,B.x,t.c,e,e),B.a6),e,46,e,e,e,e,e,46)
q=q?B.c:B.aF
v.push(A.aA(e,A.x(A.a([p,B.cQ,A.c(t.b,e,e,e,e,e,e,new A.G(!0,q,e,e,e,e,10.5,B.N,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e),e,e,e)],w),B.l,e,B.e,B.O,0,B.p),B.y,!1,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,new C.dbp(f,t),e,e,e,e,e,e,!1,B.a4))}v=A.bZ(B.bI,v,B.br,e,10,10)
q=A.a([],w)
for(n=0;n<12;++n){s=f.d
p=(s===$?f.d=f.a.c:s).d===n?B.b_.j(0.35):B.c.j(0.07)
m=new A.aP(14,14)
s=f.d
o=new A.ax((s===$?f.d=f.a.c:s).d===n?B.eG:B.L,2,B.r,-1)
q.push(A.aA(e,A.p(e,A.V(D.aDR[n],B.c,e,e,e,24),B.f,e,e,new A.o(p,e,new A.bE(o,o,o,o),new A.bb(m,m,m,m),e,e,B.m),e,46,e,e,e,e,e,46),B.y,!1,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,new C.dbq(f,n),e,e,e,e,e,e,!1,B.a4))}q=A.bZ(B.bI,q,B.br,e,8,8)
a4=A.aN(e,B.Z,!1,e,!0,B.t,e,A.aO(),a4,e,e,e,e,e,2,f.aAb("Author or family name line (optional)"),B.y,!0,e,!0,e,!1,e,B.al,e,e,e,e,e,e,e,e,e,1,e,e,!1,"\u2022",e,new C.dbr(f),e,e,e,!1,e,e,!1,e,!0,e,B.ae,e,e,e,e,e,e,e,e,e,e,e,B.ds,!0,B.a7,e,B.ao,e,e,e,e)
p=A.c("LETTERING COLOUR",e,e,e,e,e,e,N.wf,e,e,e)
m=A.a([],w)
for(l=D.EB.gdS(D.EB),l=l.gae(l);l.C();){k=l.gP(l)
j=A.b1(k.b)
s=f.d
if(s===$){s=f.d=f.a.c
r=s}else r=s
i=k.a
h=s.e===i?B.eG:B.aT
g=r.e===i
o=new A.ax(h,g?3:1,B.r,-1)
j=A.p(e,e,B.f,e,e,new A.o(j,e,new A.bE(o,o,o,o),e,e,e,B.a6),e,34,e,e,e,e,e,34)
h=g?B.c:B.aF
m.push(A.aA(e,A.x(A.a([j,B.bs,A.c(i,e,e,e,e,e,e,new A.G(!0,h,e,e,e,e,10,B.N,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e),e,e,e)],w),B.l,e,B.e,B.O,0,B.p),B.y,!1,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,new C.dbs(f,k),e,e,e,e,e,e,!1,B.a4))}m=A.bZ(B.bI,m,B.br,e,8,10)
l=A.c("TITLE SIZE",e,e,e,e,e,e,N.wf,e,e,e)
k=f.goB()
return new A.D(new A.R(0,0,0,a3.f.d),A.bo(!0,new A.cS(new A.aY(0,1/0,0,a1.a.b*0.92),A.co(A.a([D.h9b,B.af,d,B.aO,a0,B.R,a2,B.aB,D.hfv,B.M,v,B.aB,D.h9k,B.M,q,B.aB,a4,B.aB,p,B.M,m,B.aB,l,A.ld(e,9,""+B.i.S(f.goB().f),36,18,new C.dbt(f),k.f),A.c("WHERE THE WORDS SIT",e,e,e,e,e,e,N.wf,e,e,e),B.aj,f.auo(D.a7V,f.goB().r,new C.dbu(f),D.dLw),B.af,A.c("BORDER",e,e,e,e,e,e,N.wf,e,e,e),B.aj,f.auo(D.a7e,f.goB().w,new C.dbv(f),D.dLC),B.af,A.c("COVER MATERIAL",e,e,e,e,e,e,N.wf,e,e,e),B.aj,f.auo(D.a7a,f.goB().x,new C.dbx(f),D.dNg),B.aj,A.j8(e,B.b_,e,B.ag,e,new C.dby(f),e,e,e,D.h3l,f.goB().z),B.by,A.bI(D.h7S,e,new C.dbz(f,a6),A.bp(B.b_,e,e,e,e,B.pl,e,e,new A.b9(A.n(16),B.a1),e,e,e))],w),e,e,U.aol,e,e,B.ah,!0),e),!0,!1,B.ag,!0,!0),e)}}
C.aJU.prototype={
a4(d,e){var w,v,u,t=new A.aH($.T().r,B.ak,null,null,A.a([],x.v))
t.E(new A.aZ(0,0))
w=e.a
t.E(new A.aq(w,0))
v=e.b
t.E(new A.aq(w,v))
t.E(new A.aq(w/2,v-12))
t.E(new A.aq(0,v))
t.E(new A.bA())
u=A.L()
u.san(D.ccu.az(0,new A.a4(0,0,0+w,0+v)))
d.af(t,u)},
aD(d){return!1}}
C.bld.prototype={
a4(a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=null,a0=a5.a,a1=a5.b,a2=0+a0,a3=0+a1
$.T()
w=A.L()
w.san(D.cbt.az(0,new A.a4(0,0,a2,a3)))
a4.aE(new A.a4(0,0,a2,a3),w)
v=B.i.cF(a1/112)
u=new A.e2()
u.cT(4)
for(w=x.O,t=a4.c,s=0;s<v;){++s
r=s*112
for(q=r-14,p=q+2,o=-r,n=6;n<a0;){m=14+u.ai()*20
l=56+u.ai()*40
k=D.deH[u.av(9)]
j=u.av(14)
J.bs(t.save())
if(j===0){j=n+m
t.translate(j,r)
t.rotate(-10.313240312354818,0,0)
t.translate(-j,o)}j=r-l
i=new A.a4(n,j,n+m,j+l)
h=A.bw(i,B.hE)
g=new A.ar(B.T,B.Q,B.W,B.X,B.U)
f=A.ap(k,B.c,0.12)
f.toString
e=A.ap(k,B.v,0.45)
e.toString
g.san(new A.a8(B.a5,B.a9,B.x,A.a([f,k,e],w),d,d).az(0,i))
a4.aq(h,g)
g=n+2
j+=10
h=g+(m-4)
e=new A.ar(B.T,B.Q,B.W,B.X,B.U)
e.r=E.kF.j(0.55).gp(0)
a4.aE(new A.a4(g,j,h,j+2),e)
e=new A.ar(B.T,B.Q,B.W,B.X,B.U)
e.r=E.kF.j(0.4).gp(0)
a4.aE(new A.a4(g,q,h,p),e)
t.restore()
j=u.av(9)===0?18:0
n+=m+1+j}q=r+10
p=new A.ar(B.T,B.Q,B.W,B.X,B.U)
p.san(D.caL.az(0,new A.a4(0,r,a2,q)))
a4.aE(new A.a4(0,r,a2,q),p)
p=new A.ar(B.T,B.Q,B.W,B.X,B.U)
p.r=B.v.j(0.5).gp(0)
p.y=B.l7
a4.aE(new A.a4(0,q,a2,q+14),p)}t=A.L()
t.r=D.bji.j(0.72).gp(0)
a4.aE(new A.a4(0,0,a2,a3),t)
t=a0*0.5
a1*=0.36
a0*=0.95
a3=A.L()
a3.san(new A.bT(B.z,0.5,B.x,d,0,A.a([D.brX.j(0.22),B.L],w),d,d).az(0,A.bX(new A.r(t,a1),a0)))
a4.O(new A.r(t,a1),a0,a3)},
aD(d){return!1}}
C.bdX.prototype={
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=p.c,m=B.a.i(n.c),l=A.ag("[ \t]{2,}",!0,!1,!1,!1),k=A.aL(m,l," ")
m=x.p
l=A.a([],m)
for(w=3;w>=1;--w){v=-w
l.push(new A.cP(14,w*2,v*2.2,v*2,o,o,new A.bQ(new A.o(A.ap(D.l0,D.bxi,w/4),o,new A.bE(B.a1,new A.ax(B.v.j(0.12),1,B.r,-1),B.a1,B.a1),B.MQ,o,o,B.m),B.bm,o,o),o))}v=x.V
u=A.a([new A.aa(0,B.H,B.v.j(0.35),B.aO4,8)],v)
t=A.a([],m)
for(w=0;w<5;++w){s=new A.aP(2,2)
t.push(A.p(o,o,B.f,o,o,new A.o(E.kF.j(0.6),o,o,new A.bb(s,s,s,s),o,o,B.m),o,14,o,o,o,o,o,3))}u=A.p(o,A.x(t,B.l,o,B.ru,B.h,0,B.p),B.f,o,o,new A.o(o,o,o,D.b7s,u,D.ccs,B.m),o,o,o,o,o,o,o,14)
v=A.a([new A.aa(0,B.H,B.v.j(0.4),B.du,18)],v)
t=A.ao(o,A.b4(o,o,o,new C.aJU(o),D.ftc),o,o,o,26,-2,o)
s=A.a([],m)
r=p.z
q=B.a.i(r)
if(q.length!==0)s.push(new C.aXX(p.y,r,L.jh,o))
r=n.d
q=p.x
if(p.f)n=A.x(A.a([A.aN(o,B.Z,!1,o,!0,B.t,o,A.aO(),p.r,o,o,o,o,o,2,A.bC(o,B.eV,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,A.l(o,o,L.jh.j(0.35),o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),"Page title",o,o,o,o,o,o,o,o,o,!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),B.y,!0,o,!0,o,!1,o,B.al,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.ae,o,o,o,o,o,o,o,o,o,o,o,D.fT4,!0,B.a7,o,B.ao,o,o,o,o),A.c(q.$1(r),o,o,o,o,o,o,A.l(o,o,L.jh.j(0.45),o,o,o,o,o,o,o,o,11,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),B.R,A.E(A.aN(o,B.Z,!1,o,!0,B.t,o,A.aO(),p.w,o,o,o,o,o,2,A.bC(o,B.eV,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,A.l(o,o,L.jh.j(0.35),o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),"Write your family story here\u2026",o,o,o,o,o,o,o,o,o,!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),B.y,!0,o,!0,o,!0,o,B.al,o,o,o,o,o,o,o,o,o,o,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.ae,o,o,o,o,o,o,o,o,o,o,o,D.fJi,!0,B.a7,B.Bp,B.ao,o,o,o,o),1)],m),B.am,o,B.e,B.h,0,B.p)
else{n=A.a([A.c(n.b,o,o,o,o,o,o,D.fSX,o,o,o),B.at,A.c(q.$1(r),o,o,o,o,o,o,A.l(o,o,L.jh.j(0.5),o,o,o,o,o,o,o,o,11,B.cR,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),B.M,A.A(A.a([A.E(A.p(o,o,B.f,D.H0.j(0.35),o,o,o,1,o,o,o,o,o,o),1),new A.D(B.fD,A.c("\u2766",o,o,o,o,o,o,A.l(o,o,D.H0.j(0.7),o,o,o,o,o,o,o,o,16,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),o),A.E(A.p(o,o,B.f,D.H0.j(0.35),o,o,o,1,o,o,o,o,o,o),1)],m),B.l,o,B.e,B.h,0,o,o),B.aB],m)
if(k.length===0)n.push(A.c("This page is blank. Tap the pencil to write.",o,o,o,o,o,o,A.l(o,o,L.jh.j(0.4),o,o,o,o,o,o,o,o,16,o,o,o,o,1.7,!0,o,o,o,o,o,o,o,o),o,o,o))
else n.push(A.KL(A.cW(A.a([A.cW(o,o,o,o,o,o,o,o,o,D.fMD,B.a.aw(k,0,1)),A.cW(o,o,o,o,o,o,o,o,o,o,B.a.aY(k,1))],x.R),o,o,o,o,o,o,o,o,o,o),o,o,A.l(o,o,L.jh.j(0.93),o,o,o,o,o,o,o,o,16.5,o,o,o,o,1.72,!0,o,o,o,o,o,o,o,o),o))
n=A.cb(A.x(n,B.B,o,B.e,B.h,0,B.p),B.t,o,B.y,o,o,o,o,o,B.ah)}s.push(A.E(n,1))
s.push(new A.D(B.hy,A.c("\u2014 "+p.d+" \u2014",o,o,o,o,o,o,A.l(o,o,L.jh.j(0.5),o,o,o,o,o,o,o,o,12,o,o,o,o,o,!0,o,1,o,o,o,o,o,o),B.K,o,o),o))
l.push(A.A(A.a([u,A.E(A.p(o,A.by(B.MQ,new A.am(B.a0,o,B.ad,B.t,A.a([t,new A.D(D.bJW,A.x(s,B.am,o,B.e,B.h,0,B.p),o),A.ao(0,new A.bQ(new A.o(o,o,o,o,o,new A.a8(B.a5,B.a9,B.x,A.a([B.v.j(0.16),B.L],x.O),o,o),B.m),B.bm,o,o),o,o,0,o,0,22)],m),o),B.aq),B.f,o,o,new A.o(o,o,o,B.MQ,v,D.cd_,B.m),o,o,o,o,o,o,o,o),1)],m),B.am,o,B.e,B.h,0,o,o))
return new A.am(B.a0,o,B.ad,B.t,l,o)}}
C.amY.prototype={
R(){return new C.amZ(new A.eK(0,$.az()),new C.bVw(),new C.ang(),D.hUL,null,null)},
gd6(){return this.d}}
C.a2v.prototype={
a9(){return"_Step."+this.b}}
C.amZ.prototype={
gCX(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.bGf(w.c,6,w.e,!1)
u.d!==$&&A.bF()
u.d=v
t=v}return t},
ghi(d){var w,v=this,u=v.e
if(u===$){w=C.Np(v.a.c)
v.e!==$&&A.bF()
v.e=w
u=w}return u},
gUv(){var w=this.ghi(0)
return w.gzD()==null?"Babu":B.a.i(w.gzD().b)},
a_(){var w,v=this
v.a3()
w=v.ghi(0).gzD()
w=w==null?null:w.c
v.r.b=w===D.oU
w=v.q9(new C.bTS(v))
w.fR(0)
v.x!==$&&A.aS()
v.x=w
v.a3o("Come closer, my children. I am "+v.gUv()+", elder of the "+v.a.c.b+" family. Tonight, by this fire, we remember who we are.")},
t(){var w=this,v=w.x
v===$&&A.d()
v.t()
v=w.y
if(v!=null)v.a1(0)
v=w.z
if(v!=null)v.a1(0)
w.w.t()
v=w.f
v.V$=$.az()
v.W$=0
w.bxN()},
a3o(d){var w=this,v=w.y
if(v!=null)v.a1(0)
w.db=d
w.dx=0
w.r.c=!0
w.y=A.d1(E.a1k,new C.bTM(w))},
bu9(){var w,v=this
if(v.dx>=v.db.length)return
w=v.y
if(w!=null)w.a1(0)
v.l(new C.bTV(v))},
aeQ(d){var w=this.r
w.a=d
w.e=this.f.a
w.w=this.cy},
bu1(){return this.bbS()},
bbS(){var w=this,v=w.gCX()[w.as],u=v.e
u=u.length!==0?u:v.d
w.l(new C.bTN(w))
w.a3o(u)
v=w.z
if(v!=null)v.a1(0)
w.z=A.cB(B.nV,new C.bTO(w))},
cOu(){var w=this
w.l(new C.bTR(w))
w.a3o(w.gCX()[w.as].a)},
LF(d){var w,v,u,t,s,r,q,p=this
if(p.Q!==D.aeL)return
w=p.gCX()
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
t.r=s.a+1.5}q=new A.e2()
q.cT(v*7+d)
p.l(new C.bTQ(p,d,u,q))
p.a3o(u?D.dvC[q.av(4)]+" "+w[p.as].d:D.ds0[q.av(3)]+" "+w[p.as].d)},
kM(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$kM=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.as
q=t.gCX()
p=q.length
w=r+1>=p?3:4
break
case 3:s=C.bIz(t.at,t.ay,p)
t.l(new C.bTT(t,s))
t.a3o(t.at>=q.length-1?"You carry the family now. Never let the fire go out.":"You listened well tonight. Come again, and the fire will burn higher.")
w=5
return A.b(C.C7(t.a.d,s),$async$kM)
case 5:t.cx=f
r=t.a
w=6
return A.b(C.C8(r.d,r.c.a,"fire",t.at*10),$async$kM)
case 6:t.dy=f
if(t.c!=null)t.l(new C.bTU())
w=1
break
case 4:++t.as
t.bbS()
case 1:return A.h(u,v)}})
return A.i($async$kM,v)},
B(d){var w=this,v=null,u=w.f,t=x.p
return A.c5(v,D.ZC,new A.am(B.a0,v,B.ad,B.t,A.a([A.bS(0,new A.e6(A.b4(v,v,v,new C.aY1(u,w.r,w.w,u),B.aA),v),0,0,0),A.bo(!0,A.x(A.a([w.cer(0),B.aW,w.bTw()],t),B.l,v,B.e,B.h,0,B.p),!0,!1,B.ag,!0,!0)],t),v),v,!1,!1,v,v)},
cer(d){var w,v,u,t=this,s=null,r=A.aI(s,s,s,s,Ag.Ra,s,s,s,new C.bTP(t),s,s,s,s,s,s),q=x.p,p=A.a([],q)
for(w=0;w<t.gCX().length;++w){v=t.as
if(w<v||t.Q===D.b3K)v=B.d_
else v=w===v?B.c:B.aT
u=new A.aP(4,4)
p.push(A.p(s,s,B.f,s,s,new A.o(v,s,s,new A.bb(u,u,u,u),s,s,B.m),s,7,s,D.bFa,s,s,s,22))}p=A.E(A.x(A.a([D.h02,A.A(p,B.l,s,B.e,B.h,0,s,s)],q),B.B,s,B.e,B.h,0,B.p),1)
v=A.n(14)
u=A.K(B.fK,B.r,1)
return new A.D(D.bL6,A.A(A.a([r,p,A.p(s,A.c("\ud83d\udd25 "+B.i.S(t.cy*100)+"%",s,s,s,s,s,s,B.iU,s,s,s),B.f,s,s,new A.o(B.b7,s,u,v,s,s,B.m),s,s,s,s,B.hm,s,s,s)],q),B.l,s,B.e,B.h,0,s,s),s)},
bTw(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.ghi(0).gzD()
if(h==null)w=1
else w=h.c===D.oU?0:1
v=j.dx
u=j.db
t=D.qP.j(0.96)
s=A.n(22)
r=A.K(B.d_,B.r,3)
q=A.b4(i,i,i,new C.bqQ(w,i),B.aA)
p=A.c(j.Q===D.aeL?j.gUv()+" asks":"Elder "+j.gUv(),i,i,i,i,i,i,D.aXK,i,i,i)
o=j.db
o=B.a.aw(o,0,Math.min(j.dx,o.length))
n=x.p
o=A.aA(B.c2,A.A(A.a([new A.a5(62,62,q,i),B.ar,A.E(A.x(A.a([p,B.bs,A.c(o+(v<u.length?"\u258d":""),i,i,i,i,i,i,D.aXX,i,i,i)],n),B.B,i,B.e,B.h,0,B.p),1)],n),B.B,i,B.e,B.h,0,i,i),B.y,!1,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,j.gbu8(),i,i,i,i,i,i,!1,B.a4)
switch(j.Q.a){case 0:v=A.at(j.aaV("Sit down by the fire",j.gbu0()),i,i,i)
break
case 1:v=A.at(j.aaV("Ask me, Elder",j.gcOt()),i,i,i)
break
case 2:v=A.a([],n)
for(m=0;u=j.gCX()[j.as].b,m<u.length;++m){q=new A.aP(14,14)
l=new A.ax(D.lQ,2.5,B.r,-1)
v.push(A.aA(i,A.p(i,A.c(u[m],i,i,i,i,i,i,D.aXT,B.K,i,i),B.f,i,D.agi,new A.o(D.alR,i,new A.bE(l,l,l,l),new A.bb(q,q,q,q),i,i,B.m),i,i,i,i,Z.x3,i,i,i),B.y,!1,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,new C.bTJ(j,m),i,i,i,i,i,i,!1,B.a4))}v=A.bZ(B.bI,v,B.br,i,8,8)
break
case 3:v=j.fr
u=v?B.kl:AB.arU
u=A.V(u,v?B.es:D.lQ,i,i,i,i)
q=v?"The fire grows!":"Listen and learn."
q=A.E(A.c(q,i,i,i,i,i,i,A.l(i,i,v?B.es:D.lQ,i,i,i,i,i,i,i,i,i,i,i,B.u,i,i,!0,i,i,i,i,i,i,i,i),i,i,i),1)
v=j.as+1>=j.gCX().length?"Finish":"Next story"
v=A.A(A.a([u,B.aa,q,j.aaV(v,j.gqs(j))],n),B.l,i,B.e,B.h,0,i,i)
break
case 4:v=A.a([A.c(""+j.at+" of "+j.gCX().length+" right  \xb7  +"+j.CW+" \u2b50",i,i,i,i,i,i,D.aYa,i,i,i)],n)
u=j.cx
if(u>0){u=C.aSd(u)
q=C.aSd(j.cx)
p=j.cx
k=j.dy?" \xb7 \ud83c\udfc6 new record!":""
v.push(A.c(u.b+" "+q.a+" \xb7 "+p+" stars"+k,i,i,i,i,i,i,D.adb,i,i,i))}v.push(B.M)
v.push(j.aaV("Back to the games",new C.bTK(j)))
v=A.x(v,B.l,i,B.e,B.h,0,B.p)
break
default:v=i}return A.p(i,A.x(A.a([o,B.R,v],n),B.B,i,B.e,B.O,0,B.p),B.f,i,i,new A.o(t,i,r,s,D.aFp,i,B.m),i,i,i,B.zk,B.bg,i,i,i)},
aaV(d,e){var w=null,v=A.n(16),u=A.K(B.d_,B.r,2)
return A.aA(w,A.p(w,A.c(d,w,w,w,w,w,w,Aa.LF,w,w,w),B.f,w,w,new A.o(D.lQ,w,u,v,w,w,B.m),w,w,w,w,D.bIP,w,w,w),B.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,e,w,w,w,w,w,w,!1,B.a4)}}
C.bqQ.prototype={
a4(d,e){Q.hr7(d,e.eo(B.J),e.gdl()*0.45,this.b,0,0.4)},
aD(d){return d.b!==this.b}}
C.aCN.prototype={
t(){var w=this,v=w.ab$
if(v!=null)v.a8(0,w.gbB())
w.ab$=null
w.a2()},
b_(){this.b8()
this.b6()
this.bC()}}
C.bVw.prototype={}
C.tq.prototype={}
C.bqR.prototype={}
C.ang.prototype={
N4(d){var w,v=this
if(v.a==null||!J.z(v.b,d)){w=v.a
if(w!=null)w.t()
v.a=C.io_(d)
v.b=d}w=v.a
w.toString
return w},
t(){var w=this.a
return w==null?null:w.t()}}
C.aY1.prototype={
a4(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.b.a,i=l.c
d.CE(l.d.N4(e))
w=e.a
v=e.b
u=Math.min(w/450,v/900)
t=d.c
J.bs(t.save())
t.translate((w-450*u)/2,(v-900*u)/2)
d.bV(0,u)
l.cDP(d,j)
l.bS4(d,j)
l.cMg(d,j,i)
s=0.8+0.2*Math.sin(j*8)*Math.sin(j*3.7)+i.w*0.4
J.bs(t.save())
t.translate(225,580)
d.nK(0,1,0.42)
r=240*(0.6+0.5*i.w)
$.T()
q=A.L()
p=x.O
o=x.n
q.san(A.ws(B.J,r,A.a([D.bvZ.j(0.55*s),F.Oo.j(0.2*s),B.L],p),A.a([0,0.5,1],o),B.x,k,k,0))
d.O(B.J,r,q)
t.restore()
n=A.a([new A.y(528,new C.bVo(l,d,j,i)),new A.y(540,new C.bVp(l,d,j,i)),new A.y(546,new C.bVq(l,d,j,i)),new A.y(574,new C.bVr(l,d,j,i)),new A.y(612,new C.bVs(l,d,j,i)),new A.y(650,new C.bVt(l,d,j,i)),new A.y(656,new C.bVu(l,d,j,i))],x.E)
B.d.b0(n,new C.bVv())
for(m=0;m<7;++m)n[m].b.$0()
l.bIP(d,j,i)
l.bVK(d,j)
t.restore()
$.T()
t=A.L()
t.san(A.ws(new A.r(w/2,v*0.6),e.gap9()*0.75,A.a([B.L,D.bjb],p),A.a([0.55,1],o),B.x,k,k,0))
d.aE(new A.a4(0,0,0+w,0+v),t)},
aD(d){return d.c!==this.c||d.d!==this.d},
cDP(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=new A.e2()
h.cT(3)
for(w=0;w<36;++w){v=h.ai()
u=h.ai()
t=Math.sin(e*(1.5+h.ai()*2)+w)
s=h.ai()
t=B.c.j(0.25+0.7*(0.5+0.5*t))
$.T()
r=new A.ar(B.T,B.Q,B.W,B.X,B.U)
r.r=t.gp(0)
d.O(new A.r(v*450,20+u*300),0.8+s*1.1,r)}q=B.i.F(e,17)/1.2
if(q<1){p=new A.r(60+q*220,70+q*90)
d.ah(p,p.aI(0,D.eyS),C.iQ(B.c.j((1-q)*0.9),1.6))}for(v=e*0.035,u=e*9,t=x.v,o=0;o<3;++o){n=B.i.F(v+o*0.05,1)
s=-20+n*500
r=120+Math.sin(n*9+o)*14+o*12
m=Math.sin(u+o*2)
l=$.T()
k=A.a([],t)
l=new A.aH(l.r,B.ak,null,null,k)
m=r+m*4
k.push(new A.aZ(s-6,m))
l.ac()
j=r-3
r=new A.cj(s-2,j,s,r)
k.push(r)
i=l.f
if(i!=null)r.aj(i)
l.ac()
s=new A.cj(s+2,j,s+6,m)
k.push(s)
r=l.f
if(r!=null)s.aj(r)
l.ac()
s=new A.ar(B.T,B.Q,B.W,B.X,B.U)
s.b=B.ac
s.c=1.6
s.r=D.blX.gp(0)
s.d=B.bG
s.e=B.dP
d.af(l,s)}},
bS4(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=0.75+0.25*Math.sin(e*9)*Math.sin(e*5.3)
for(w=e*0.12,v=0.78*g,u=0.7*g,t=0;t<3;++t){s=D.aCm[t]
r=s.a
q=s.c
p=r+q*0.1
o=s.b
n=s.d
m=o-n*0.38
l=A.bY(new A.r(p,m),n*0.74,q*0.5)
k=Ap.z5.j(v)
$.T()
j=new A.ar(B.T,B.Q,B.W,B.X,B.U)
j.r=k.gp(0)
d.c1(l,j)
q=A.bY(new A.r(p+0,m+n*0.1),n*0.4,q*0.28)
m=new A.ar(B.T,B.Q,B.W,B.X,B.U)
m.r=B.wF.j(u).gp(0)
d.c1(q,m)
for(q=r*0.01,n=o-n-s.e*0.9,i=0;i<5;++i){h=B.i.F(w+i/5+q,1)
p=Math.sin(h*6+i)
o=new A.ar(B.T,B.Q,B.W,B.X,B.U)
o.r=D.ajc.j(0.16*(1-h)).gp(0)
d.O(new A.r(r+p*6+h*18,n-h*70),4+h*12,o)}}},
cMg(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null
C.bFB(d,D.eyO,0.9,e,D.hOr,!1,!1,D.b3H,1,!1)
w=$.T().r
v=x.v
u=new A.aH(w,B.ak,g,g,A.a([],v))
u.E(new A.aZ(52,470))
u.E(new A.aq(50,486))
u.E(new A.aq(66,486))
u.E(new A.aq(64,470))
u.E(new A.bA())
t=A.L()
t.r=D.al9.gp(0)
d.af(u,t)
C.bFB(d,D.eyQ,0.95,e,D.hOf,!1,!1,D.b3I,1,!0)
t=new A.aH(w,B.ak,g,g,A.a([],v))
t.E(new A.aZ(417,510))
t.E(new A.cj(431,532,445,510))
t.E(new A.aq(441,548))
t.E(new A.cj(431,553,421,548))
t.E(new A.bA())
u=A.L()
u.r=F.GG.gp(0)
d.af(t,u)
u=A.bY(D.eyP,8,28)
t=A.L()
t.r=D.byp.gp(0)
d.c1(u,t)
C.bFB(d,new A.r(-30+B.i.F(e/26,1)*510,492),0.82,e,D.hOt,!0,!1,D.Yp,1,!1)
t=B.i.F(e/11,1)*3.141592653589793*2
s=150+Math.sin(t)*110
r=507+Math.cos(t)*7
q=Math.cos(t)>=0?1:-1
d.c1(A.bY(new A.r(s+q*16,r-6),16,11),C.iQ(D.al0,1.8))
u=q<0
C.bFB(d,new A.r(s-q*6,r),0.62,e,D.hOw,!1,u,D.Yp,2.2,!1)
C.bFB(d,new A.r(s-q*32,r+4),0.58,e+1,D.hOn,!1,u,D.Yp,2.2,!1)
this.bYt(d,D.eyt,e)
for(u=e*0.5,t=e*4,p=0;p<3;++p){o=88+p*17+Math.sin(u+p)*6
n=520+B.o.F(p,2)*6
m=Math.max(0,Math.sin(t+p*2))*4
l=A.bY(new A.r(o,n),8,11)
k=p===1
j=k?D.akX:D.alz
i=new A.ar(B.T,B.Q,B.W,B.X,B.U)
i.r=j.gp(0)
d.c1(l,i)
l=k?D.akX:D.alz
k=new A.ar(B.T,B.Q,B.W,B.X,B.U)
k.r=l.gp(0)
d.O(new A.r(o+5,n+(-3+m)),2.6,k)
k=new A.ar(B.T,B.Q,B.W,B.X,B.U)
k.b=B.ac
k.c=1
k.r=B.as.gp(0)
k.d=B.bG
k.e=B.dP
d.ah(new A.r(o+7.5,n+(-2+m)),new A.r(o+10,n+(-1.5+m)),k)
o+=-1
k=new A.ar(B.T,B.Q,B.W,B.X,B.U)
k.b=B.ac
k.c=1
k.r=B.as.gp(0)
k.d=B.bG
k.e=B.dP
d.ah(new A.r(o,n+4),new A.r(o,n+8),k)}h=e<f.f
u=A.bY(D.aa6,15+Math.sin(e*2)*0.8,40)
t=A.L()
t.r=D.ajB.gp(0)
d.c1(u,t)
u=A.bY(D.aa6.a7(0,new A.r(-14,h?-9:-2)),12,15)
t=A.L()
t.r=D.boa.gp(0)
d.c1(u,t)
t=new A.aH(w,B.ak,g,g,A.a([],v))
t.E(new A.aZ(130,592-(h?16:6)))
t.E(new A.aq(134,592-(h?22:9)))
t.E(new A.aq(138,592-(h?16:6)))
t.E(new A.bA())
u=A.L()
u.r=D.bon.gp(0)
d.af(t,u)
u=D.aa6.a7(0,new A.r(-17,h?-9:-2))
t=A.L()
t.r=B.it.gp(0)
d.O(u,1.1,t)
v=new A.aH(w,B.ak,g,g,A.a([],v))
v.E(new A.aZ(168,590))
w=Math.sin(e*8)
v.E(new A.cj(180,588+w*(h?6:0),178,595))
d.af(v,C.iQ(D.ajB,3.5))},
bYt(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=Math.max(0,Math.sin(f*0.6))*9,k=e.a7(0,new A.r(Math.sin(f*0.25)*10,0))
for(w=[-9,-4,6,11],v=w.length,u=k.a,t=k.b,s=t+3,r=f*2,q=t+16,p=0;p<v;++p){o=w[p]
n=Math.sin(r+o)
$.T()
m=new A.ar(B.T,B.Q,B.W,B.X,B.U)
m.b=B.ac
m.c=2
m.r=D.ZQ.gp(0)
m.d=B.bG
m.e=B.dP
d.ah(new A.r(u+o,s),new A.r(u+(o+n*1.5),q),m)}w=A.bY(k,17,32)
v=$.T()
r=A.L()
r.r=D.GE.gp(0)
d.c1(w,r)
r=A.bY(k.a7(0,D.exU),7,26)
w=A.ap(D.GE,B.v,0.12)
w.toString
q=A.L()
q.r=w.gp(0)
d.c1(r,q)
v=new A.aH(v.r,B.ak,null,null,A.a([],x.v))
v.E(new A.aZ(u+13,t-3))
v.E(new A.aq(u+22,t-8+l))
v.E(new A.aq(u+20,t+l-0.5))
v.E(new A.aq(u+12,s))
v.E(new A.bA())
s=A.L()
s.r=D.GE.gp(0)
d.af(v,s)
s=A.bY(k.a7(0,new A.r(24,-7+l)),9,12)
v=A.L()
v.r=D.GE.gp(0)
d.c1(s,v)
v=-11+l
d.ah(k.a7(0,new A.r(22,v)),k.a7(0,new A.r(21,-17+l)),C.iQ(D.ZQ,1.6))
d.ah(k.a7(0,new A.r(26,v)),k.a7(0,new A.r(28,-16+l)),C.iQ(D.ZQ,1.6))
v=k.a7(0,new A.r(26,-8+l))
s=A.L()
s.r=B.v.gp(0)
d.O(v,0.9,s)
d.ah(k.a7(0,new A.r(26,-3+l)),k.a7(0,new A.r(26,1+l)),C.iQ(D.brb,1.4))
d.ah(k.a7(0,D.eAN),k.a7(0,new A.r(-19,-7+Math.sin(f*7)*2)),C.iQ(D.GE,2.4))},
bVI(a6,a7,a8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5
for(w=0;w<14;++w){v=w*3.141592653589793*2/14
u=Math.cos(v)
t=Math.sin(v)
if(Math.sin(v)<0){u=A.bY(new A.r(225+u*36,574+(t*13+6)),8,11)
$.T()
t=new A.ar(B.T,B.Q,B.W,B.X,B.U)
t.r=D.bx1.gp(0)
a6.c1(u,t)}}u=A.bY(D.aa8.a7(0,B.cz),17,52)
$.T()
t=A.L()
t.r=D.biK.gp(0)
a6.c1(u,t)
t=A.bY(D.aa8.a7(0,B.cz),12,44)
u=D.bmm.j(0.6+0.3*Math.sin(a7*6))
s=A.L()
s.r=u.gp(0)
a6.c1(t,s)
for(r=0;r<3;++r){v=D.drs[r]
u=225+Math.cos(v)*3
t=Math.cos(v)
s=Math.sin(v)
q=Math.cos(v)
p=Math.sin(v)
o=new A.ar(B.T,B.Q,B.W,B.X,B.U)
o.b=B.ac
o.c=7
o.r=D.GS.gp(0)
o.d=B.bG
o.e=B.dP
a6.ah(new A.r(u+t*24,579+s*4),new A.r(u-q*24,579-p*4),o)
o=Math.cos(v)
p=Math.sin(v)
q=Math.cos(v)
s=Math.sin(v)
t=D.Ci.j(0.6)
n=new A.ar(B.T,B.Q,B.W,B.X,B.U)
n.b=B.ac
n.c=2
n.r=t.gp(0)
n.d=B.bG
n.e=B.dP
a6.ah(new A.r(u+o*24,579+(p*4-2)),new A.r(u-q*24,579-(s*4+2)),n)}m=46+80*a8.w
l=[D.fc7,D.fcI,D.fdS,D.fec,D.fdQ]
for(u=a7*8,t=a7*15,s=a7*3.3,q=x.v,k=0;k<3;++k){j=[1,0.72,0.42][k]
i=[D.bug,D.bqw,D.bwr][k]
for(p=l.length,o=k===0,n=1-k*0.15,r=0;r<p;++r){h=l[r]
g=h.b
f=h.c
e=m*g*j*(0.9+0.12*Math.sin(u+f)+0.06*Math.sin(t+f*2))
d=Math.sin(s+f)*5*(e/m)
a0=225+h.a*n
a1=(12+8*a8.w)*g*j
g=$.T()
f=A.a([],q)
a2=new A.aH(g.r,B.ak,null,null,f)
f.push(new A.aZ(a0-a1,578))
a2.ac()
g=a0+d*0.6
a3=new A.i6(a0-a1*1.1,578-e*0.45,g-a1*0.2,578-e*0.7,a0+d,578-e)
f.push(a3)
a4=a2.f
if(a4!=null)a3.aj(a4)
a2.ac()
g=new A.i6(g+a1*0.3,578-e*0.65,a0+a1*1.15,578-e*0.4,a0+a1,578)
f.push(g)
a3=a2.f
if(a3!=null)g.aj(a3)
a2.ac()
g=new A.bA()
f.push(g)
f=a2.f
if(f!=null)g.aj(f)
a2.ac()
g=new A.ar(B.T,B.Q,B.W,B.X,B.U)
g.r=i.j(o?0.9:0.95).gp(0)
a6.af(a2,g)}}for(u=a7*1.5,w=0;w<22;++w){a5=B.i.F(a7*(0.35+B.o.F(w,5)*0.06)+w/22,1)
t=Math.sin(w*1.9+u)
s=a8.w
q=B.o.F(w,3)
p=G.alx.j((1-a5)*0.9)
$.T()
o=new A.ar(B.T,B.Q,B.W,B.X,B.U)
o.r=p.gp(0)
a6.O(new A.r(225+t*(10+a5*26),564-a5*(110+80*s)),1.2+q*0.6,o)}for(u=a7*0.1,t=574-m,w=0;w<6;++w){a5=B.i.F(u+w/6,1)
s=Math.sin(a5*5+w)
q=D.ajc.j(0.1*(1-a5))
$.T()
p=new A.ar(B.T,B.Q,B.W,B.X,B.U)
p.r=q.gp(0)
a6.O(new A.r(225+s*16+a5*12,t-a5*120),7+a5*20,p)}},
bVK(d,e){var w,v,u,t,s,r,q,p,o,n
for(w=e*0.3,v=e*3,u=e*0.7,t=e*1.4,s=0;s<16;++s){r=B.i.F(s*83+Math.sin(w+s)*40+v,450)
q=420+B.o.F(s*37,300)+Math.sin(u+s*2)*26
p=Math.max(0,Math.sin(t+s*1.7))
o=D.byA.j(0.18*p)
$.T()
n=new A.ar(B.T,B.Q,B.W,B.X,B.U)
n.r=o.gp(0)
d.O(new A.r(r,q),5,n)
n=new A.ar(B.T,B.Q,B.W,B.X,B.U)
n.r=D.bs1.j(0.9*p).gp(0)
d.O(new A.r(r,q),1.4,n)}},
c7G(d,e){switch(d){case 0:return e.b?D.hOh:D.b2X
case 1:return e.b?D.hOv:D.b2V
case 2:return D.b2U
case 3:return D.b2T
case 4:return D.b2W
default:return D.b2Y}},
aEz(d,e){return(0.2+0.8*Math.abs(Math.sin(d*10+e)))*(0.55+0.45*Math.sin(d*3.1+e*2))},
RP(d,e,f,g){var w,v=this,u=D.a7m[e],t=v.c7G(e,g),s=new C.bqR(),r=f-g.e,q=f<g.f,p=g.r,o=g.c,n=(Math.sin(f*1.3+e*7.1)+Math.sin(f*2.1+e*3.7)*0.6+Math.sin(f*0.7+e*11.3)*0.4)/2,m=D.a7m[e],l=e===0
m=B.i.D(((l?D.aNX:D.aO2).a-m.a.a)/160,-1,1)*0.8+n*0.25
s.y=m
s.z=l?0.35:-0.3+n*0.2
m=s.e=m*0.55
s.Q=D.aad
s.as=D.F2
if(l){s.a=o?v.aEz(f,0):0
p=g.a
l=p===3&&g.d?0.7:0
w=p===4?0.8:0
s.b=0.3+l+w
s.c=p===2?0.5:0.1
s.f=n*0.05
if(o){s.r=Math.sin(f*4.2)*1.4
p=new A.r(46+Math.sin(f*3.1)*10,-64+Math.sin(f*4.3)*13)
s.as=p
s.Q=new A.r(-40+Math.sin(f*2.2+1)*4,-40+Math.sin(f*3.4)*6)}else p=D.F2
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
s.x=Math.max(0,Math.sin(p))*3}else if(g.a===3&&!g.d){s.as=D.ey1
s.e=m+Math.sin(r*5)*0.2*Math.max(0,1-r/2)
s.b=-0.2}}else{s.b=0.3+0.1*Math.sin(f*0.5+e)
s.w=2+(o?Math.sin(f*1.6+e)*1.6:0)
if(o)s.r=Math.max(0,Math.sin(f*1.9+e*2))*2.2
if(g.a===2){s.c=0.6
s.w=4
if(e===2)s.as=D.ezp
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
s.Q=D.eBJ
s.as=D.aOf}if(e===2&&g.x!=null&&f<g.y){s.a=v.aEz(f,5)
s.b=0.4
s.as=new A.r(34+Math.sin(f*3)*6,-70+Math.sin(f*4)*8)}if(e===g.Q&&g.z!=null&&f<g.as){s.a=v.aEz(f,e*3)
s.b=0.5
s.c=0.4}}C.hKb(d,u.a,u.b*1.2,t,s,f,e,null)},
bIP(d,e,f){var w=new C.bVn(d),v=f.z
if(v!=null&&e<f.as)w.$2(f.Q,v)
v=f.x
if(v!=null&&e<f.y)w.$2(2,v)},
gd4(d){return this.c}}
C.agQ.prototype={
a9(){return"_Stand."+this.b}}
C.aeN.prototype={}
C.lL.prototype={}
C.bU7.prototype={
bDk(d){var w,v,u,t,s=A.S(x.N,x.P)
for(w=this.b,v=w.length,u=0;u<w.length;w.length===v||(0,A.I)(w),++u){t=w[u]
s.n(0,t.a,t)}this.c!==$&&A.aS()
this.c=s},
Gw(d){var w,v,u,t,s,r=A.a([],x.u)
for(w=this.b,v=w.length,u=d.a,t=0;t<w.length;w.length===v||(0,A.I)(w),++t){s=w[t]
if(s.d===u)r.push(s)}B.d.b0(r,new C.bU8())
return r},
asp(d){var w,v,u,t,s,r=d.e
if(r==null)w=null
else{v=this.c
v===$&&A.d()
w=v.h(0,r)}if(w!=null)return w
for(r=this.b,v=r.length,u=d.a,t=0;t<v;++t){s=r[t]
if(s.e===u)return s}return null},
aOg(d){var w,v,u,t,s,r,q,p=A.a([],x.u)
for(w=this.b,v=w.length,u=d.a,t=d.d,s=0;s<w.length;w.length===v||(0,A.I)(w),++s){r=w[s]
if(r.a!==u){q=r.d
q=q!=null&&q===t}else q=!1
if(q)p.push(r)}return p},
anx(d){var w,v,u=A.aR(x.N),t=d,s=0
for(;;){w=t.d
if(w!=null){v=this.c
v===$&&A.d()
v=v.h(0,w)!=null&&u.I(0,t.a)}else v=!1
if(!v)break
v=this.c
v===$&&A.d()
w=v.h(0,w)
w.toString;++s
t=w}return s},
gzD(){var w=this.b
if(w.length===0)return null
w=A.B(w,x.P)
B.d.b0(w,new C.bU9(this))
return B.d.gG(w)}}
C.avn.prototype={}
C.zS.prototype={}
C.alP.prototype={
gCs(d){var w
if(B.a.i(this.a).length!==0){w=this.b
w=new A.X(w,new C.bOU(),A.U(w).k("X<1>")).gJ(0)>=2&&B.a.i(w[this.c]).length!==0}else w=!1
return w},
ak(){var w=this
return A.J(["q",w.a,"a",w.b,"c",w.c,"s",w.d],x.N,x.z)}}
C.N8.prototype={
gaqs(d){var w,v,u,t,s=A.a([],x.b)
for(w=this.c,v=w.length,u=0;u<w.length;w.length===v||(0,A.I)(w),++u){t=w[u]
if(t.gCs(0))s.push(t)}return s},
ak(){var w,v,u,t,s,r,q=this.b,p=A.a([],x.Y)
for(w=this.c,v=w.length,u=x.N,t=x.z,s=0;s<w.length;w.length===v||(0,A.I)(w),++s){r=w[s]
p.push(A.J(["q",r.a,"a",r.b,"c",r.c,"s",r.d],u,t))}return A.J(["id",this.a,"title",q,"qs",p],u,t)},
d4S(){var w,v,u,t,s,r,q,p,o,n,m,l=A.a([],x.J)
for(w=this.gaqs(0),v=w.length,u=x.s,t=0;t<w.length;w.length===v||(0,A.I)(w),++t){s=w[t]
r=s.b
q=B.a.i(r[s.c])
p=A.a([],u)
for(o=r.length,n=0;n<r.length;r.length===o||(0,A.I)(r),++n){m=B.a.i(r[n])
if(m.length!==0)p.push(m)}l.push(new C.lL(B.a.i(s.a),p,B.d.cd(p,q),"The right answer is "+q+".","","creator",s.d))}return l}}
C.bc7.prototype={}
C.aaR.prototype={}
C.bjv.prototype={}
C.agO.prototype={}
C.al7.prototype={
R(){return new C.al8(B.bH,A.a([],x.cC),A.a([],x.e4),null,null)},
gd6(){return this.d}}
C.al8.prototype={
gNl(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.bGf(w.c,8,w.e,!1)
u.d!==$&&A.bF()
u.d=v
t=v}return t},
gbcd(){var w,v=this,u=v.e
if(u===$){w=v.q9(v.gcjU())
v.e!==$&&A.bF()
v.e=w
u=w}return u},
a_(){this.a3()
this.gbcd().fR(0)},
t(){this.gbcd().t()
this.bxI()},
fR(d){this.l(new C.bN2(this))},
cjV(d){var w=this,v=Math.min(0.05,(d.a-w.f.a)/1e6)
w.f=d
w.fK(0,v)
if(w.c!=null)w.l(new C.bMY())},
baw(){var w,v,u,t=this,s=t.r
B.d.a6(s)
w=t.gNl()
v=w[t.x].b.length
for(u=0;u<v;++u)s.push(new C.bjv(u,(u+0.5)/v,w[t.x].b[u]))},
fK(d,e){var w,v,u,t,s,r,q,p,o,n,m=this
m.dx+=e
if(!m.ch||m.CW)return
w=m.cy
m.cy=w+(m.db-w)*Math.min(1,e*9)
for(w=m.w,v=w.length,u=e*1.4,t=0;t<v;++t){s=w[t]
s.a=s.a+s.c*e
s.b=s.b+s.d*e
s.f-=u}B.d.br(w,new C.bN3())
w=m.fx
if(w>0){m.fx=w-e
for(w=m.r,v=w.length,t=0;t<v;++t)w[t].r+=e
if(m.fx<=0)m.caz()
return}for(w=m.r,v=w.length,t=0;t<w.length;w.length===v||(0,A.I)(w),++t){r=w[t]
if(r.e||r.f)continue
r.d=r.d+e/(9.5-Math.min(m.x,6)*0.6)
r.r+=e
u=r.a
q=r.b+Math.sin(m.dx*1.7+u)*0.012
p=r.d
if(p>=0.74&&p<=0.86&&Math.abs(q-m.cy)<0.12){r.e=!0
w=m.gNl()
if(u===w[m.x].c){v=++m.as
m.at=Math.max(m.at,v);++m.Q
o=100+B.i.S((1-r.d)*100)+20*Math.min(v-1,4)
m.z+=o
m.fy=o
m.go=m.dx
v=m.cy
m.id=v
m.atX(v,0.8,B.d_)
m.dy="Yes! "+w[m.x].d
m.fr=m.dx+2
m.fx=1.8}else{m.atX(m.cy,0.8,G.nH)
m.b_Q("That was not it. "+w[m.x].d)}return}if(p>0.9){r.f=!0
m.atX(q,0.88,D.lQ)
p=m.gNl()[m.x]
n=p.c
if(u===n){m.b_Q("The right gourd fell! It was "+p.b[n]+".")
return}}}},
atX(d,e,f){var w,v,u,t=new A.e2()
t.cT(B.i.S(this.dx*1000))
for(w=this.w,v=0;v<14;++v){u=t.ai()*3.141592653589793*2
w.push(new C.agO(d,e,Math.cos(u)*0.25,-0.1-Math.abs(Math.sin(u))*0.35,f))}},
b_Q(d){var w,v=this
v.as=0
w=--v.y
v.dy=d
v.fr=v.dx+2.4
v.fx=2.2
if(w<=0){v.fx=0
v.QV()}},
caz(){var w=this
if(w.x+1>=w.gNl().length){w.QV()
return}++w.x
w.baw()},
QV(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$QV=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:u.CW=!0
t=u.Q
s=u.gNl().length
r=C.bIz(t,u.at,s)
u.ax=r
if(u.c!=null)u.l(new C.bMW())
w=2
return A.b(C.C7(u.a.d,r),$async$QV)
case 2:u.ay=e
t=u.a
w=3
return A.b(C.C8(t.d,t.c.a,"catch",u.z),$async$QV)
case 3:u.cx=e
if(u.c!=null)u.l(new C.bMX())
return A.h(null,v)}})
return A.i($async$QV,v)},
B(d){var w,v=this,u=null
if(v.CW)w=v.ces()
else w=v.ch?v.cet():A.at(new A.D(B.eJ,A.x(A.a([D.aZ9,B.M,D.h1L,B.R,D.h7X,B.ec,C.uG("Play",v.gf1(v),B.d_,B.fN,D.fJ)],x.p),B.l,u,B.e,B.O,0,B.p),u),u,u,u)
return new C.tP("Calabash Catch",w,B.ff,u)},
cet(){var w,v,u,t,s=this,r=null,q=x.p,p=A.a([],q)
for(w=0;w<3;++w){v=w<s.y
u=v?B.hP:B.Ip
p.push(A.V(u,v?B.aC:B.bY,r,r,r,22))}p.push(B.aW)
v=s.x
u=s.gNl()
p.push(A.c(""+(v+1)+"/"+u.length,r,r,r,r,r,r,D.aXJ,r,r,r))
p.push(B.bc)
v=A.n(14)
p.push(A.p(r,A.c(""+s.z,r,r,r,r,r,r,B.iU,r,r,r),B.f,r,r,new A.o(B.bx,r,r,v,r,r,B.m),r,r,r,r,A6.D2,r,r,r))
p=A.A(p,B.l,r,B.e,B.h,0,r,r)
v=A.n(18)
t=A.K(B.d_,B.r,3)
return A.x(A.a([new A.D(D.bGz,p,r),A.p(r,A.c(u[s.x].a,r,r,r,r,r,r,D.fMv,B.K,r,r),B.f,r,r,new A.o(D.qP,r,t,v,r,r,B.m),r,r,r,B.f2,B.bg,r,r,1/0),B.aj,A.E(A.cf(new C.bN1(s)),1)],q),B.l,r,B.e,B.h,0,B.p)},
ces(){var w=this,v=null,u=A.at(A.c(w.y<=0?"The gourds are all gone":"The basket is full!",v,v,v,v,v,v,B.qr,v,v,v),v,v,v),t=A.at(A.c(""+w.Q+" of "+w.gNl().length+" caught \xb7 "+w.z+" points",v,v,v,v,v,v,D.WL,v,v,v),v,v,v),s=w.ax,r=w.ay
if(r===0)r=s
return A.co(A.a([D.bga,u,t,B.aO,new C.IJ(s,r,w.cx,v),B.aO,A.at(C.uG("Back to the games",new C.bMV(w),B.d_,B.kk,D.fJ),v,v,v)],x.p),v,v,B.ae,v,v,B.ah,!1)}}
C.beE.prototype={
a4(a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null,d=a5.a,a0=a5.b,a1=0+d,a2=$.T(),a3=A.L()
a3.san(A.jP(B.J,new A.r(0,a0),D.d80,G.aCD,B.x,e))
a4.aE(new A.a4(0,0,a1,0+a0),a3)
a3=A.L()
a3.r=G.Os.gp(0)
a4.O(new A.r(d*0.82,a0*0.16),22,a3)
a3=x.v
w=A.a([],a3)
v=new A.aH(a2.r,B.ak,e,e,w)
a2=a0*0.7
v.E(new A.aZ(0,a2))
for(u=0;u<=d;u+=6){t=new A.aq(u,a2+Math.sin(u/55)*10)
w.push(t)
s=v.f
if(s!=null)t.aj(s)
v.ac()}v.E(new A.aq(d,a0))
v.E(new A.aq(0,a0))
a2=$.T()
w=A.L()
w.r=D.bnk.gp(0)
a4.af(v,w)
r=d*0.12
a2=new A.aH(a2.r,B.ak,e,e,A.a([],a3))
w=a0*0.86
a2.E(new A.aZ(r-26,w))
t=a0*0.5
s=a0*0.34
a2.E(new A.cj(r-14,t,r-10,s))
a2.E(new A.aq(r+10,s))
a2.E(new A.cj(r+14,t,r+26,w))
a2.E(new A.bA())
w=A.L()
w.r=D.aid.gp(0)
a4.af(a2,w)
for(a2=a0*0.36,w=a0*0.24,t=a0*0.22,q=0;q<4;++q){p=D.csH[q]
s=new A.ar(B.T,B.Q,B.W,B.X,B.U)
s.r=D.aid.gp(0)
s.c=7
s.d=B.bG
a4.ah(new A.r(r,a2),new A.r(r+p*46,w),s)
s=new A.ar(B.T,B.Q,B.W,B.X,B.U)
s.r=D.ahv.gp(0)
a4.O(new A.r(r+p*50,t),18,s)}a2=a0*0.88
w=A.L()
w.r=D.bok.gp(0)
a4.aE(new A.a4(0,a2,a1,a2+a0*0.12),w)
for(a1=a0*0.9,a2=a1-8,o=0;o<18;++o){w=d*o/17
t=new A.ar(B.T,B.Q,B.W,B.X,B.U)
t.r=D.ajR.gp(0)
t.c=2
a4.ah(new A.r(w,a1),new A.r(w+3,a2),t)}for(a1=this.b,a2=a1.r,w=a2.length,t=a4.c,s=a0*0.89,q=0;q<a2.length;a2.length===w||(0,A.I)(a2),++q){n=a2[q]
if(n.e)continue
m=n.a
u=(n.b+Math.sin(a1.dx*1.7+m)*0.012)*d
l=n.d
if(n.f){m=A.bY(new A.r(u,s),12,54)
$.T()
l=new A.ar(B.T,B.Q,B.W,B.X,B.U)
l.r=D.lQ.j(0.6).gp(0)
a4.c1(m,l)
continue}m=Math.sin(a1.dx*2+m)
J.bs(t.save())
t.translate(u,l*a0)
t.rotate(m*0.1*180/3.141592653589793,0,0)
$.T()
m=new A.ar(B.T,B.Q,B.W,B.X,B.U)
m.r=D.aiW.gp(0)
a4.O(D.exh,14,m)
m=new A.ar(B.T,B.Q,B.W,B.X,B.U)
m.r=D.btj.gp(0)
m.c=4
m.d=B.bG
a4.ah(D.exi,D.eyp,m)
m=new A.ar(B.T,B.Q,B.W,B.X,B.U)
m.san(new A.amI(D.eAx,46,D.dhq,B.vJ,B.x,e,e,0))
a4.O(B.J,34,m)
m=A.bY(D.eAD,8,12)
l=new A.ar(B.T,B.Q,B.W,B.X,B.U)
l.r=B.c.j(0.35).gp(0)
a4.c1(m,l)
k=new A.j2(new A.eC(n.c,e,e,B.cY,e,e,e,e,e,e,D.fKg),B.K,B.cc,new A.kh(1),e,e,3,e,B.cd,e,B.cK)
k.nA(62)
m=k.b
l=Math.max(40,m.c+10)
m=m.a.c
j=A.bw(A.bY(B.cP,m.gb4(m)+8,l),B.h2)
l=new A.ar(B.T,B.Q,B.W,B.X,B.U)
l.r=D.qP.gp(0)
a4.aq(j,l)
l=new A.ar(B.T,B.Q,B.W,B.X,B.U)
l.r=D.lQ.gp(0)
l.b=B.ac
l.c=1.5
a4.aq(j,l)
l=k.b
m=l.c
l=l.a.c
k.a4(a4,new A.r(-m/2,4-l.gb4(l)/2))
t.restore()}i=a1.cy*d
a2=a1.dx
w=Math.sin(a2*4)
C.irU(a4,new A.r(i,a0*0.93),a0*0.3,a2,!0,Math.abs(a1.db-a1.cy)*40*Math.abs(Math.sin(a1.dx*18)),2,B.dY,(w+1)/2)
h=A.bY(new A.r(i,a0*0.8),a0*0.07,d*0.24)
a3=new A.aH($.T().r,B.ak,e,e,A.a([],a3))
w=h.a
a2=h.b
a3.E(new A.aZ(w,a2))
t=h.c
a3.E(new A.aq(t,a2))
s=h.d
a3.E(new A.aq(t-8,s))
a3.E(new A.cj(h.gbD().a,s+8,w+8,s))
a3.E(new A.bA())
m=A.L()
m.r=D.a_H.gp(0)
a4.af(a3,m)
for(a3=t-w,o=1;o<6;++o){t=w+a3*o/6
m=new A.ar(B.T,B.Q,B.W,B.X,B.U)
m.r=D.Ci.gp(0)
m.c=1.4
a4.ah(new A.r(t,a2),new A.r(t+(o-3)*2,s),m)}t=a2+(s-a2)*0.35
s=A.L()
s.r=G.nH.gp(0)
a4.aE(new A.a4(w,t,w+a3,t+5),s)
w-=2
a2-=4
s=A.L()
s.r=D.bnq.gp(0)
a4.c1(new A.a4(w,a2,w+(a3+4),a2+8),s)
for(a2=a1.w,a3=a2.length,q=0;q<a2.length;a2.length===a3||(0,A.I)(a2),++q){g=a2[q]
w=g.a
t=g.b
s=g.f
m=new A.ar(B.T,B.Q,B.W,B.X,B.U)
m.r=g.e.j(B.i.D(s,0,1)).gp(0)
a4.O(new A.r(w*d,t*a0),3*s+1,m)}f=a1.dx-a1.go
if(f>=0&&f<1.2){a2=a1.fy
k=A.h_(e,B.cK,e,e,e,A.cW(e,e,e,e,e,e,e,e,e,A.l(e,e,B.d_.j(1-f/1.2),e,e,e,e,e,e,e,e,26,e,e,B.u,e,e,!0,e,e,e,e,e,I.Ec,e,e),"+"+a2),B.a7,B.cc,e,B.e3,B.cd)
k.eL()
k.a4(a4,new A.r(a1.id*d-k.b.c/2,a0*0.72-f*60))}},
aD(d){return!0}}
C.Rb.prototype={
B(d){var w=this,v=null,u=w.e,t=A.b4(v,v,v,new C.aCL(w.c,w.f,v),B.aA),s=A.n(10),r=A.K(B.bB,B.r,1.4)
return new A.a5(u+22,v,A.x(A.a([new A.a5(u,u,t,v),B.cQ,A.p(v,A.c(w.d,v,1,B.a2,v,v,v,D.fCE,v,v,v),B.f,v,v,new A.o(B.c,v,r,s,v,v,B.m),v,v,v,v,B.ng,v,v,v)],x.p),B.l,v,B.e,B.O,0,B.p),v)},
ga0(d){return this.e}}
C.aCL.prototype={
a4(d,e){var w=e.eo(B.J),v=e.gdl(),u=this.c?0.8:0
return Q.hr7(d,w,v*0.44,this.b,0,u)},
aD(d){return d.b!==this.b||d.c!==this.c}}
C.aBb.prototype={}
C.avZ.prototype={
R(){return new C.aw_(A.S(x.S,x.cq),null,null)},
gd6(){return this.d}}
C.aw_.prototype={
gkR(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.hPS(w.c,w.e)
u.d!==$&&A.bF()
u.d=v
t=v}return t},
gaGC(){var w=this.z
return w===$?this.z=this.XX(0):w},
gj_(){var w,v=this.Q
if(v===$){w=this.gkR()
w=w.length===0?0:w[0].c.length
v=this.Q=A.c2(w,-1,!1,x.S)}return v},
XX(d){var w,v,u,t,s=this.gkR()
if(d>=s.length)return A.a([],x.h)
w=s[d]
s=A.a([],x.h)
for(v=w.c,u=w.d,t=0;t<v.length;++t)s.push(new C.aBb(v[t],u[t],t))
for(v=w.e,u=w.f,t=0;t<v.length;++t)s.push(new C.aBb(v[t],u[t],-1))
v=new A.e2()
v.cT(this.a.e*31+d)
B.d.dX(s,v)
return s},
t(){var w,v,u
for(w=this.as,w=new A.dq(w,w.r,w.e);w.C();){v=w.d
v.r.t()
v.r=null
u=v.eR$
u.b=!1
B.d.a6(u.a)
u=u.goI()
if(u.a>0){u.b=u.c=u.d=u.e=null
u.a=0}v.e_$.a.a6(0)
v.qI()}this.bya()},
cUA(d,e){var w,v,u,t,s,r=this
if(d>=r.gj_().length||r.gj_()[d]!==-1||B.d.q(r.gj_(),e))return
w=r.gaGC()[e]
v=r.gkR()[r.e].a
if(w.c<0){++r.f;++r.y
r.l(new C.csY(r,e,w,v))
A.cB(B.lX,new C.csZ(r))
return}++r.r
u=A.br(null,B.hx,null,1,null,r)
t=r.as
s=t.h(0,d)
if(s!=null)s.t()
t.n(0,d,u)
r.l(new C.ct_(r,d,e,w,v))
u.ct(0)},
kM(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$kM=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:o=t.e
n=t.gkR()
w=o+1>=n.length?3:4
break
case 3:s=B.d.cE(n,0,new C.ct0())
o=t.r
n=t.f
o=Math.max(0,o*4-n)
r=o+(n===0?12:0)
t.l(new C.ct1(t,r))
w=5
return A.b(C.C7(t.a.d,r),$async$kM)
case 5:t.x=f
o=t.a
w=6
return A.b(C.C8(o.d,o.c.a,"plant",Math.max(1,s*10-t.f*5)),$async$kM)
case 6:t.ch=f
if(t.c!=null)t.l(new C.ct2())
w=1
break
case 4:for(o=t.as,n=new A.dq(o,o.r,o.e);n.C();){q=n.d
q.r.t()
q.r=null
p=q.eR$
p.b=!1
B.d.a6(p.a)
p=p.goI()
if(p.a>0){p.b=p.c=p.d=p.e=null
p.a=0}q.e_$.a.a6(0)
q.qI()}o.a6(0)
t.l(new C.ct3(t))
case 1:return A.h(u,v)}})
return A.i($async$kM,v)},
B(d){var w,v,u,t,s,r=this,q="Plant the Tree",p=null
if(r.ay){w=A.at(A.c(""+r.r+" branches grown",p,p,p,p,p,p,B.qr,p,p,p),p,p,p)
v=r.f
v=A.at(A.c(v===0?"Not one mistake!":""+v+" mistakes",p,p,p,p,p,p,D.WL,p,p,p),p,p,p)
u=r.w
t=r.x
if(t===0)t=u
return new C.tP(q,A.co(A.a([D.ah3,w,v,B.aO,new C.IJ(u,t,r.ch,p),B.aO,A.at(C.uG("Back to the games",new C.csU(d),B.d_,B.kk,D.fJ),p,p,p)],x.p),p,p,B.ae,p,p,B.ah,!1),B.ff,p)}w=r.gkR()
v=r.e
s=w[v]
return new C.tP(q,new A.D(V.tz,A.x(A.a([A.c("Round "+(v+1)+" of "+w.length+" \xb7 drag the children of "+s.a+" onto the branches",p,p,p,p,p,p,E.aXE,B.K,p,p),A.E(A.cf(new C.csV(r,s)),1)],x.p),B.l,p,B.e,B.h,0,B.p),p),B.ff,p)}}
C.be5.prototype={
a4(b6,b7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9=this,b0=null,b1=y.B,b2=a9.d,b3=new A.X(b2,new C.cT1(),A.U(b2).k("X<1>")).gJ(0),b4=a9.b,b5=b4.a7(0,B.Kq)
$.T()
w=A.L()
w.r=D.lR.j(0.18+0.1*b3).gp(0)
b6.O(b5,70+b3*10,w)
w=b7.a
b5=b7.b
v=b4.a7(0,D.ex4)
u=A.L()
u.r=B.qR.j(0.5).gp(0)
u.c=10
u.d=B.bG
b6.ah(new A.r(w/2,b5*0.98),v,u)
for(v=a9.c,u=b4.a,b4=b4.b,t=b4+90,s=x.v,b4+=46,r=x.dc,q=x.U,p=0;p<v.length;++p){o=v[p]
n=o.a+0
m=B.eb.aA(0,B.i.D(b2[p],0,1))
l=$.T().r
k=A.a([],s)
j=new A.aH(l,B.ak,b0,b0,k)
k.push(new A.aZ(u,b4))
j.ac()
o=new A.cj((u+n)/2,t,n,o.b+-46)
k.push(o)
n=j.f
if(n!=null)o.aj(n)
j.ac()
if(m<1)for(o=new A.aH(l,j.b,j.c,b0,A.bt(k,!0,r)),n=A.a([],q),i=new A.v4(o,!1,n);i.C();){h=i.c
if(h===0||i.f)A.bi(A.jV(b1));--h
g=new A.C4(i,h)
f=0
for(;;){i.jP()
e=n[h].b
e===$&&A.d()
if(!(f<e.a.length()))break
i.jP()
e=n[h].b
e===$&&A.d()
e=Math.min(e.a.length(),f+7)
d=o.b
a0=A.a([],s)
$.T()
a1=new A.ar(B.T,B.Q,B.W,B.X,B.U)
a1.r=B.aT.gp(0)
a1.b=B.ac
a1.c=3
b6.af(new A.aH(l,d,b0,new A.b7([g,f,e,!0]),a0),a1)
f+=14}}if(m>0)for(o=new A.aH(l,j.b,j.c,b0,A.bt(k,!0,r)),n=A.a([],q),k=new A.v4(o,!1,n),i=m>0.4,h=9-3*m,e=11*m,d=6*m;k.C();){a0=k.c
if(a0===0||k.f)A.bi(A.jV(b1));--a0
k.jP()
a1=n[a0].b
a1===$&&A.d()
a1=a1.a.length()
a2=o.b
a3=A.a([],s)
$.T()
a4=new A.ar(B.T,B.Q,B.W,B.X,B.U)
a4.r=D.H6.gp(0)
a4.b=B.ac
a4.c=h
a4.d=B.bG
b6.af(new A.aH(l,a2,b0,new A.b7([new A.C4(k,a0),0,a1*m,!0]),a3),a4)
k.jP()
a4=n[a0].b
a4===$&&A.d()
a4=a4.a.length()
k.jP()
a5=n[a0].Wo(a4*m)
if(i)for(a0=a5.a,a1=a0.a,a0=a0.b,a6=0;a6<4;++a6){a7=a6*1.6+p
a2=A.bY(new A.r(a1+Math.cos(a7)*14,a0+Math.sin(a7)*10),d,e)
a3=new A.ar(B.T,B.Q,B.W,B.X,B.U)
a3.r=B.bf.gp(0)
b6.c1(a2,a3)}}}if(a9.e)for(b2=b5*0.3,p=0;p<6;++p){a8=new A.j2(D.fC7,B.a7,B.cc,new A.kh(1),b0,b0,b0,b0,B.cd,b0,B.cK)
a8.eL()
a8.a4(b6,new A.r(w*(0.15+p*0.14),b2-B.o.F(p,3)*14))}},
aD(d){return!0}}
C.azX.prototype={
R(){return new C.azY(A.aR(x.S))},
gd6(){return this.d}}
C.azY.prototype={
gkR(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.hQM(w.c,w.e)
u.d!==$&&A.bF()
u.d=v
t=v}return t},
a_(){this.a3()
this.baF()},
t(){var w=this.ch
if(w!=null)w.a1(0)
this.a2()},
baF(){var w=this.ch
if(w!=null)w.a1(0)
this.ch=A.d1(B.tv,new C.cHV(this))},
brK(d){var w,v=this
if(v.as||v.z.q(0,d))return
w=v.gkR()[v.e]
if(w.e[d]===w.b)v.l(new C.cI2(v,Math.max(10,100-25*(v.f-1)-15*v.z.a)))
else{v.l(new C.cI3(v,d))
A.cB(B.j2,new C.cI4(v))}},
d_8(){var w=this
if(!w.as&&w.f<w.gkR()[w.e].d.length)w.l(new C.cI5(w))},
kM(d){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$kM=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.e
q=t.gkR()
w=r+1>=q.length?3:4
break
case 3:r=t.ch
if(r!=null)r.a1(0)
r=t.w
q=r===q.length?15:0
s=r*6+q
t.l(new C.cI6(t,s))
w=5
return A.b(C.C7(t.a.d,s),$async$kM)
case 5:t.y=f
q=t.a
w=6
return A.b(C.C8(q.d,q.c.a,"who",t.r),$async$kM)
case 6:t.ax=f
if(t.c!=null)t.l(new C.cI7())
w=1
break
case 4:t.l(new C.cI8(t))
t.baF()
case 1:return A.h(u,v)}})
return A.i($async$kM,v)},
B(a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=this,a1="Who Am I?",a2=null
if(a0.at){w=A.at(A.c(""+a0.w+" of "+a0.gkR().length+" guessed",a2,a2,a2,a2,a2,a2,B.qr,a2,a2,a2),a2,a2,a2)
v=A.at(A.c(""+a0.r+" points",a2,a2,a2,a2,a2,a2,D.WL,a2,a2,a2),a2,a2,a2)
u=a0.x
t=a0.y
if(t===0)t=u
return new C.tP(a1,A.co(A.a([D.bgl,w,v,B.aO,new C.IJ(u,t,a0.ax,a2),B.aO,A.at(C.uG("Back to the games",new C.cHX(a3),B.d_,B.kk,D.fJ),a2,a2,a2)],x.p),a2,a2,B.ae,a2,a2,B.ah,!1),B.ff,a2)}w=a0.as
s=w?0:Math.max(1,13-3.5*(a0.f-1))
r=w?0:Math.max(0.1,0.92-0.25*(a0.f-1))
w=a0.e
v=a0.gkR()
u=x.X
t=x.p
w=A.a([A.c("Person "+(w+1)+" of "+v.length,a2,a2,a2,a2,a2,a2,D.LL,B.K,a2,a2),B.R,A.at(A.lz(new C.cHY(a0,r),a2,B.aZ,B.hx,a2,a2,new A.bq(a2,s,u),x.i),a2,a2,a2),B.aB],t)
for(q=x.W,p=x.gW,o=0;n=a0.f,o<n;o=k){n=a0.e
m=new A.aP(16,16)
l=new A.ax(B.d_,2,B.r,-1)
k=o+1
w.push(new A.rn(new A.bq(0,1,u),new C.cHZ(),A.p(a2,new A.c1(B.aK,B.e,B.h,B.l,a2,B.p,a2,0,A.a([new A.qT(A.c(""+k,a2,a2,a2,a2,a2,a2,B.op,a2,a2,a2),D.lQ,a2,12,a2),B.ar,new A.bu(1,B.b9,A.c(v[n].d[o],a2,a2,a2,a2,a2,a2,D.fPa,a2,a2,a2),a2)],t),a2),B.f,a2,a2,new A.o(D.qP,a2,new A.bE(l,l,l,l),new A.bb(m,m,m,m),a2,a2,B.m),a2,a2,a2,B.cB,B.bg,a2,a2,a2),B.aZ,B.j2,a2,new A.bg("clue-"+n+"-"+o,q),p))}if(!a0.as&&n<v[a0.e].d.length)w.push(A.at(A.bM(!1,D.hfY,a2,a2,!0,a2,a2,a2,a0.gd_7(),a2,a2),a2,a2,a2))
w.push(B.M)
if(a0.as){u=D.lR.j(0.2)
q=A.n(16)
p=A.K(D.lR,B.r,1)
n=a0.e
m=A.c("It is "+v[n].b+"!  +"+a0.ay,a2,a2,a2,a2,a2,a2,B.fP,a2,a2,a2)
v=n+1>=v.length?"See my result":"Next person"
w.push(A.p(a2,A.x(A.a([m,B.R,C.uG(v,a0.gqs(a0),B.d_,B.jE,D.fJ)],t),B.l,a2,B.e,B.h,0,B.p),B.f,a2,a2,new A.o(u,a2,p,q,a2,a2,B.m),a2,a2,a2,a2,B.bF,a2,a2,a2))}else{t=A.a([],t)
for(n=a0.z,o=0;m=a0.e,o<v[m].e.length;++o){j=a0.Q===o
i=j?1:0
h=n.q(0,o)?B.dx:B.d_.j(0.2)
g=new A.aP(16,16)
l=new A.ax(n.q(0,o)?B.fq:B.d_,2,B.r,-1)
f=v[a0.e].e[o]
e=n.q(0,o)?B.bY:B.c
d=n.q(0,o)?B.y1:a2
t.push(new A.rn(new A.bq(0,i,u),new C.cI_(),A.aA(a2,A.p(a2,A.c(f,a2,a2,a2,a2,a2,a2,new A.G(!0,e,a2,a2,a2,a2,16,B.u,a2,a2,a2,a2,a2,a2,a2,a2,a2,d,a2,a2,a2,a2,a2,a2,a2,a2),B.K,a2,a2),B.f,a2,D.agb,new A.o(h,a2,new A.bE(l,l,l,l),new A.bb(g,g,g,g),a2,a2,B.m),a2,a2,a2,a2,B.jC,a2,a2,a2),B.y,!1,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,new C.cI0(a0,o),a2,a2,a2,a2,a2,a2,!1,B.a4),B.aZ,B.mq,a2,new A.bg("opt-"+m+"-"+o+"-"+j,q),p))}w.push(A.bZ(B.fU,t,B.br,a2,10,10))}return new C.tP(a1,A.co(w,a2,a2,B.anS,a2,a2,B.ah,!1),B.ff,a2)}}
C.aAW.prototype={
t(){var w=this,v=w.ab$
if(v!=null)v.a8(0,w.gbB())
w.ab$=null
w.a2()},
b_(){this.b8()
this.b6()
this.bC()}}
C.aIi.prototype={
b_(){this.b8()
this.b6()
this.dU()},
t(){var w=this,v=w.bd$
if(v!=null)v.a8(0,w.gdR())
w.bd$=null
w.a2()}}
C.agC.prototype={
arY(d){},
ast(){var w=this,v=w.q9(new C.fer(w))
v.fR(0)
w.Mt$!==$&&A.aS()
w.Mt$=v}}
C.aM8.prototype={
gbo8(d){var w=this.c
return B.a.aw(w,0,Math.min(this.d,w.length))},
Ww(d){var w=this,v=w.b
if(v!=null)v.a1(0)
w.c=d
w.d=0
w.b=A.d1(E.a1k,new C.foO(w))},
bu7(d){var w=this,v=w.b
if(v!=null)v.a1(0)
w.d=w.c.length
w.a.$0()},
t(){var w=this.b
return w==null?null:w.a1(0)}}
C.an6.prototype={
R(){return new C.an7(new C.ang(),A.a([],x.t),new A.eK(0,$.az()),$,0,null,null)},
gd6(){return this.d}}
C.an7.prototype={
gNj(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.bGf(w.c,10,w.e,!0)
u.d!==$&&A.bF()
u.d=v
t=v}return t},
ghi(d){var w,v=this,u=v.e
if(u===$){w=C.Np(v.a.c)
v.e!==$&&A.bF()
v.e=w
u=w}return u},
gqz(){var w=this.r
return w===$?this.r=new C.aM8(new C.bUU(this)):w},
gaqO(d){var w,v,u=A.a([],x.t)
for(w=this.w,v=0;v<w.length;++v)if(w[v]===this.gNj()[v].c)u.push(1)
return u.length},
gbns(){var w=this.ghi(0)
return w.gzD()==null?"Elder":B.a.i(w.gzD().b)},
a_(){this.a3()
this.ast()},
t(){var w,v=this
v.gqz().t()
v.f.t()
w=v.Mt$
w===$&&A.d()
w.t()
w=v.qg$
w.V$=$.az()
w.W$=0
v.bxQ()},
cOG(){var w=this
w.l(new C.bUR(w))
w.gqz().Ww(w.gNj()[w.x].a)},
LF(d){var w,v=this,u=!0
if(v.Q)if(!v.as){u=v.gqz()
w=u.d
u=u.c
u=w<u.length||v.w.length>v.x}if(u)return
v.w.push(d)
u=v.qg$.a
v.ax=u
v.ay=u+1
v.l(new C.bUP())
A.cB(B.hx,new C.bUQ(v))},
brG(){var w=this.gaqO(0)/this.gNj().length*100
if(w>=90)return D.f8U
if(w>=75)return D.f6M
if(w>=60)return D.eXZ
if(w>=45)return D.f0z
return D.eSd},
B(d){var w,v,u,t,s,r,q,p,o,n=this,m=null
if(n.as)return n.cwO()
w=A.bS(0,new A.e6(A.b4(m,m,m,new C.buX(n,n.qg$),B.aA),m),0,0,0)
if(!n.Q){v=D.qP.j(0.96)
u=A.n(20)
t=A.K(B.d_,B.r,3)
u=A.p(m,A.x(A.a([A.c("Elder "+n.gbns()+" is your teacher. Ten questions about the family are written on the board. Answer each one; the marks come at the end.",m,m,m,m,m,m,D.aYy,B.K,m,m),B.R,C.uG("Start the test",n.gCi(),B.d_,B.jl,D.fJ)],x.p),B.l,m,B.e,B.O,0,B.p),B.f,m,m,new A.o(v,m,t,u,m,m,B.m),m,m,m,m,B.bF,m,m,m)
v=u}else{v=n.x
u=n.gNj()
v=A.c("Question "+(v+1)+" of "+u.length,m,m,m,m,m,m,D.aYA,m,m,m)
if(n.Q){t=n.gqz()
t=t.d<t.c.length}else t=!1
if(t)u=D.fuB
else{t=n.x
s=A.a([],x.p)
for(r=0;q=u[n.x].b,r<q.length;++r){p=new A.aP(10,10)
o=new A.ax(D.Ci,4,B.r,-1)
s.push(A.aA(m,A.p(m,A.c(q[r],m,m,m,m,m,m,D.fFZ,B.K,m,m),B.f,m,D.agb,new A.o(D.bjg,m,new A.bE(o,o,o,o),new A.bb(p,p,p,p),m,m,B.m),m,m,m,m,B.Pe,m,m,m),B.y,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new C.bUS(n,r),m,m,m,m,m,m,!1,B.a4))}u=A.bZ(B.fU,s,B.br,new A.bg("o"+t,x.W),8,8)}u=A.x(A.a([v,B.aj,A.oQ(u,B.nb,A.q8(),B.aZ,B.aZ,A.M0())],x.p),B.l,m,B.e,B.O,0,B.p)
v=u}return new C.tP("Village School",new A.am(B.a0,m,B.ad,B.t,A.a([w,A.ao(10,v,m,m,10,10,m,m)],x.p),m),B.ff,m)},
cwO(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.brG(),g=A.a([],x.t)
for(w=j.w,v=0;v<w.length;++v)if(w[v]!==j.gNj()[v].c)g.push(v)
u=A.n(22)
t=A.K(B.d_,B.r,4)
s=A.c(j.a.c.b,i,i,i,i,i,i,D.fKz,B.K,i,i)
r=A.c("Signed by Elder "+j.gbns(),i,i,i,i,i,i,D.fJa,i,i,i)
q=x.p
p=A.a([A.c(h.a,i,i,i,i,i,i,D.fOv,i,i,i),D.eJM],q)
o=A.c(h.b,i,i,i,i,i,i,D.fQu,i,i,i)
n=j.gaqO(0)
m=j.gNj()
u=A.p(i,A.x(A.a([D.h0Y,B.at,s,r,B.R,new A.am(B.z,i,B.ad,B.t,p,i),o,B.aj,A.c(""+n+" of "+m.length+" right",i,i,i,i,i,i,D.adb,i,i,i),B.M,D.auS],q),B.l,i,B.e,B.h,0,B.p),B.f,i,i,new A.o(D.qP,i,t,u,i,i,B.m),i,i,i,i,B.f9,i,i,i)
t=j.y
s=j.z
if(s===0)s=t
s=A.a([u,B.aB,new C.IJ(t,s,j.at,i)],q)
if(g.length!==0){u=A.a([B.aO,D.hh1,B.M],q)
for(t=g.length,l=0;l<g.length;g.length===t||(0,A.I)(g),++l){v=g[l]
r=new A.aP(14,14)
k=new A.ax(B.bx,1,B.r,-1)
p=m[v]
u.push(A.p(i,A.x(A.a([A.c(p.a,i,i,i,i,i,i,B.hh,i,i,i),B.at,A.c("You said: "+p.b[w[v]],i,i,i,i,i,i,D.fLO,i,i,i),A.c(p.d,i,i,i,i,i,i,D.fO6,i,i,i)],q),B.B,i,B.e,B.h,0,B.p),B.f,i,i,new A.o(B.dx,i,new A.bE(k,k,k,k),new A.bb(r,r,r,r),i,i,B.m),i,i,i,B.cB,B.bg,i,i,i))}B.d.u(s,u)}s.push(B.aB)
s.push(A.at(C.uG("Back to the games",new C.bUL(j),B.d_,B.kk,D.fJ),i,i,i))
return new C.tP("Village School",A.co(s,i,i,B.bS,i,i,B.ah,!1),B.ff,i)}}
C.buX.prototype={
a4(a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=this.b,d=e.qg$.a
a0.CE(e.f.N4(a1))
w=C.hmc(a1)
v=a0.c
J.bs(v.save())
v.translate(w.a,w.b)
a0.bV(0,w.c)
if(e.Q){u=e.gqz()
t=u.d<u.c.length}else t=!1
for(s=0;s<2;++s){u=D.d1S[s]-6
$.T()
r=new A.ar(B.T,B.Q,B.W,B.X,B.U)
r.r=D.GS.gp(0)
a0.aE(new A.a4(u,340,u+12,450),r)}u=A.bw(D.ab7.cs(10),B.ij)
$.T()
r=A.L()
r.r=D.Ci.gp(0)
a0.aq(u,r)
r=A.bw(D.ab7,B.iD)
u=A.L()
u.san(A.jP(new A.r(30,96),new A.r(420,346),D.dnd,f,B.x,f))
a0.aq(r,u)
q=new A.e2()
q.cT(2)
for(p=0;p<18;++p){u=q.ai()
r=q.ai()
o=q.ai()
o=A.bY(new A.r(30+u*390,96+r*250),8+q.ai()*14,30+o*60)
r=new A.ar(B.T,B.Q,B.W,B.X,B.U)
r.r=B.c.j(0.025).gp(0)
a0.c1(o,r)}u=A.L()
u.r=I.akH.gp(0)
a0.aE(new A.a4(30,354,420,362),u)
u=A.L()
u.r=B.aS.gp(0)
a0.aE(D.flX,u)
u=A.L()
u.r=B.bM.gp(0)
a0.aE(D.fm0,u)
u=A.bw(D.flR,B.hq)
r=A.L()
r.r=D.a_H.gp(0)
a0.aq(u,r)
n=B.i.D((d-e.ax)/0.7,0,1)
if(e.Q){u=e.gqz().gbo8(0)
m=A.h_(f,B.cK,f,7,f,A.cW(f,f,f,f,f,f,f,f,f,D.fSQ,u+(t?"|":"")),B.a7,B.cc,f,B.e3,B.cd)
m.nA(346)
J.bs(v.save())
u=A.hR(D.ab7)
r=$.lD()
v.clipRect(u,r[1],!0)
u=n<1
if(u&&e.w.length>e.x)v.clipRect(A.hR(new A.a4(30+390*n,96,420,346)),r[1],!0)
m.a4(a0,new A.r(52,118))
v.restore()
if(n>0&&u){u=30+390*n-20
r=126+40*Math.sin(n*9)
r=A.bw(new A.a4(u,r,u+40,r+90),B.h2)
u=A.L()
u.r=D.bzt.gp(0)
a0.aq(r,u)}}else{m=A.h_(f,B.cK,f,f,f,D.fCn,B.K,B.cc,f,B.e3,B.cd)
m.nA(340)
m.a4(a0,new A.r(55,176))}if(t)for(u=d*1.2,r=d*3,p=0;p<8;++p){l=B.i.F(u+p/8,1)
o=B.o.F(e.gqz().d*9,310)
k=Math.sin(p+r)
j=new A.ar(B.T,B.Q,B.W,B.X,B.U)
j.r=B.c.j(0.7*(1-l)).gp(0)
a0.O(new A.r(70+o+k*6,166+l*70),1.6,j)}u=e.ghi(0).gzD()
i=(u==null?f:u.c)===D.oU?1:0
h=d<e.ay
g=A.a([new A.y(470,new C.fes(d,a0,i,t,h,D.eye)),new A.y(520,new C.fet(a0,d,t)),new A.y(575,new C.feu(a0,d,t)),new A.y(585,new C.fev(this,a0,d,t)),new A.y(615,new C.few(this,t,a0,d,h))],x.E)
B.d.b0(g,new C.fex())
for(s=0;s<5;++s)g[s].b.$0()
v.restore()},
ceu(d,e){var w,v,u,t,s,r,q,p=$.T(),o=A.a([],x.v),n=new A.aH(p.r,B.ak,null,null,o)
for(p=d.a,w=d.b,v=e*0.45,u=0;u<10;++u){t=-1.5707963267948966+u*3.141592653589793/5
s=(u&1)===0?e:v
r=p+Math.cos(t)*s
q=w+Math.sin(t)*s
if(u===0){r=new A.aZ(r,q)
o.push(r)
q=n.f
if(q!=null)r.aj(q)
n.ac()}else{r=new A.aq(r,q)
o.push(r)
q=n.f
if(q!=null)r.aj(q)
n.ac()}}n.E(new A.bA())
return n},
aD(d){return!1}}
C.an4.prototype={
R(){return new C.an5(new C.ang(),A.S(x.S,x.i),new A.eK(0,$.az()),$,0,null,null)},
gd6(){return this.d}}
C.an5.prototype={
gkR(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.hPH(w.c,w.e)
u.d!==$&&A.bF()
u.d=v
t=v}return t},
gj_(){var w=this.z
return w===$?this.z=this.G4(0):w},
gaMS(){var w,v,u,t,s=this,r=s.Q
if(r===$){w=A.a([],x.n)
v=0
for(;;){r=s.z
if(r===$){r=s.z=s.G4(0)
u=r}else u=r
if(!(v<r.length))break
t=B.d.cd(u,v)
r=s.z
w.push(450*(t+0.5)/(r===$?s.z=s.G4(0):r).length);++v}s.Q=w
r=w}return r},
G4(d){var w,v,u,t,s=this.gkR()
if(d>=s.length)return A.a([],x.t)
w=s[d].d.length
s=J.e4(w,x.S)
for(v=0;v<w;++v)s[v]=v
u=new A.e2()
u.cT(this.a.e+d*7)
B.d.dX(s,u)
if(w>1){u=A.a([],x.t)
for(v=0;v<w;++v)u.push(s[v]===v?1:0)
u=B.d.eH(u,new C.bUx())===w}else u=!1
if(u){t=s[0]
s[0]=s[1]
s[1]=t}return s},
a_(){this.a3()
this.ast()},
t(){var w,v=this
v.e.t()
w=v.Mt$
w===$&&A.d()
w.t()
w=v.qg$
w.V$=$.az()
w.W$=0
v.bxP()},
arY(d){var w,v,u,t,s,r=this,q=r.gj_().length
for(w=d*9,v=0;v<q;++v){u=r.z
t=B.d.cd(u===$?r.z=r.G4(0):u,v)
s=r.gaMS()
s[v]=s[v]+(450*(t+0.5)/q-r.gaMS()[v])*Math.min(1,w)}},
d4x(d){var w,v=this
if(v.at||v.ay||d<0||d>=v.gj_().length)return
w=v.y
if(w===-1){v.l(new C.bUI(v,d))
return}if(w===d){v.l(new C.bUJ(v))
return}v.l(new C.bUK(v,B.d.cd(v.gj_(),v.y),d,B.d.cd(v.gj_(),d)))},
cPo(d){var w,v,u,t,s=this
if(s.at||s.ay)return
w=A.a([],x.f7)
v=0
for(;;){u=s.z
if(!(v<(u===$?s.z=s.G4(0):u).length))break
t=s.gkR()[s.f]
u=s.z
w.push(t.e[(u===$?s.z=s.G4(0):u)[v]]===v);++v}s.l(new C.bUD(s,B.d.cw(w,new C.bUE())))},
kM(d){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$kM=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.f
q=t.gkR().length
w=r+1>=q?3:4
break
case 3:r=t.r
q=r===q?15:0
s=r*10+q
t.l(new C.bUF(t,s))
w=5
return A.b(C.C7(t.a.d,s),$async$kM)
case 5:t.x=f
q=t.a
w=6
return A.b(C.C8(q.d,q.c.a,"lineup",t.r*10),$async$kM)
case 6:t.ch=f
if(t.c!=null)t.l(new C.bUG())
w=1
break
case 4:t.l(new C.bUH(t))
case 1:return A.h(u,v)}})
return A.i($async$kM,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null
if(l.ay){w=A.at(A.c(""+l.r+" of "+l.gkR().length+" lines right",k,k,k,k,k,k,B.qr,k,k,k),k,k,k)
v=l.w
u=l.x
if(u===0)u=v
return new C.tP("Line Up",A.co(A.a([D.ah3,w,B.aO,new C.IJ(v,u,l.ch,k),B.aO,A.at(C.uG("Back to the games",new C.bUz(d),B.d_,B.kk,D.fJ),k,k,k)],x.p),k,k,B.ae,k,k,B.ah,!1),B.ff,k)}w=A.a([],x.t)
for(t=0;v=l.gkR(),t<v[l.f].d.length;++t)w.push(t)
B.d.b0(w,new C.bUA(l))
u=A.bS(0,A.cf(new C.bUB(l)),0,0,0)
s=l.f
r=A.c("Round "+(s+1)+" of "+v.length,k,k,k,k,k,k,D.aYA,k,k,k)
s=v[s]
q=x.p
s=A.ao(k,A.x(A.a([r,A.c(s.a,k,k,k,k,k,k,D.fL1,B.K,k,k),A.c(s.b,k,k,k,k,k,k,D.fNk,B.K,k,k)],q),B.l,k,B.e,B.h,0,B.p),k,k,12,12,4,k)
r=A.a([],q)
if(l.at){p=B.v.j(0.7)
o=A.n(16)
n=l.ax
m=A.K(n?D.lR:G.nH,B.r,2)
r.push(A.p(k,A.c(n?"Yes! That is the right line. The whole village cheers.":"Not quite. The right line is: "+new A.O(w,new C.bUC(l),x.cM).aL(0,", then ")+".",k,k,k,k,k,k,D.fPz,k,k,k),B.f,k,k,new A.o(p,k,m,o,k,k,B.m),k,k,k,B.d7,B.bg,k,k,1/0))}if(!l.at)r.push(C.uG("That is my line!",l.gcPn(l),B.d_,B.hn,D.fJ))
else{w=l.f+1>=v.length?"See my result":"Next family"
r.push(C.uG(w,l.gqs(l),B.d_,B.jE,D.fJ))}return new C.tP("Line Up",new A.am(B.a0,k,B.ad,B.t,A.a([u,s,A.ao(12,A.x(r,B.l,k,B.e,B.O,0,B.p),k,k,12,12,k,k)],q),k),B.ff,k)}}
C.bll.prototype={
a4(c7,c8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4=null,c5=this.b,c6=c5.qg$.a
c7.CE(c5.e.N4(c8))
w=C.hmc(c8)
v=c7.c
J.bs(v.save())
v.translate(w.a,w.b)
c7.bV(0,w.c)
u=c5.gj_().length
t=$.T().r
s=x.v
r=new A.aH(t,B.ak,c4,c4,A.a([],s))
r.E(new A.aZ(10,470))
r.E(new A.cj(225,500,440,470))
q=A.L()
q.r=D.a_H.gp(0)
q.b=B.ac
q.c=4
c7.af(r,q)
for(q=c6*3,p=0;p<12;++p){o=30+p*36
n=470+30*Math.sin(3.141592653589793*(o-10)/430)*0.95
m=Math.sin(q+p)
l=A.a([],s)
k=new A.aH(t,B.ak,c4,c4,l)
l.push(new A.aZ(o,n))
k.ac()
m=new A.aq(o+16,n+6+m*3)
l.push(m)
j=k.f
if(j!=null)m.aj(j)
k.ac()
m=new A.aq(o,n+20)
l.push(m)
j=k.f
if(j!=null)m.aj(j)
k.ac()
m=new A.bA()
l.push(m)
l=k.f
if(l!=null)m.aj(l)
k.ac()
m=new A.ar(B.T,B.Q,B.W,B.X,B.U)
m.r=[B.d_,G.nH,D.lR,B.aH][B.o.F(p,4)].gp(0)
c7.af(k,m)}this.b2C(c7,"OLDEST",D.ezc,B.d_)
this.b2C(c7,"YOUNGEST",D.eyF,B.bf)
t=A.bw(D.flL,B.h2)
s=A.L()
s.r=D.GS.gp(0)
c7.aq(t,s)
s=A.bw(D.flK,B.iD)
t=A.L()
t.r=D.Ci.gp(0)
c7.aq(s,t)
i=c6<c5.CW
h=c6<c5.cx
g=u>=5?0.92:1.12
t=A.a([],x.t)
for(f=0;f<u;++f)t.push(f)
B.d.b0(t,new C.dv7())
for(s=t.length,q=440/u-8,m=c6*10,l=!i,k=c5.as,j=c6*9,e=c6*8,d=c6*12,a0=0;a0<t.length;t.length===s||(0,A.I)(t),++a0){f=t[a0]
a1=c5.z
a2=B.d.cd(a1===$?c5.z=c5.G4(0):a1,f)
o=c5.gaMS()[f]
a3=c5.y===f
a4=a3?Math.abs(Math.sin(j))*10:0
a5=k.h(0,f)
if(a5!=null&&c6<a5)a4+=Math.sin((1-(a5-c6)/0.5)*3.141592653589793)*14
a6=c5.at&&c5.gkR()[c5.f].e[f]===a2
a7=c5.at&&!c5.ax&&!a6
a8=c5.gkR()
a9=a8[c5.f].c
b0=a9.length>f?a9[f]:f
if(l)b1=c5.at&&a6
else b1=!0
b2=Math.max(0,Math.sin(m+f))
if(a3){$.T()
a9=new A.ar(B.T,B.Q,B.W,B.X,B.U)
a9.r=B.d_.j(0.22+0.1*Math.sin(e)).gp(0)
c7.O(new A.r(o,520),54,a9)}a9=D.drh[B.o.F(b0,6)]
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
else b9=a3?D.eBg:c4
if(b1)c0=new A.r(3+b2*8,-56)
else if(h&&a7)c0=D.aOf
else c0=a3?new A.r(30,-104+Math.sin(e)*5):c4
C.T9(c7,new A.r(o,612),b8,b5,(225-o)/225*0.5,-0.3,b9,c0,D.Ks,a9,b4,0,g,b3,b6,c6,b7)
a8=a8[c5.f].d[f]
c1=new A.j2(new A.eC(a8,c4,c4,B.cY,c4,c4,c4,c4,c4,c4,D.fIF),B.a7,B.cc,new A.kh(1),"\u2026",c4,1,c4,B.cd,c4,B.cK)
c1.nA(q)
c2=A.bw(A.bY(new A.r(o,650),24,c1.b.c+16),B.h2)
$.T()
a8=new A.ar(B.T,B.Q,B.W,B.X,B.U)
if(a6)a9=B.iM
else a9=a7?B.to:D.qP
a8.r=a9.gp(0)
c7.aq(c2,a8)
a8=new A.ar(B.T,B.Q,B.W,B.X,B.U)
if(a6)a9=D.lR
else a9=a7?G.nH:D.lQ
a8.r=a9.gp(0)
a8.b=B.ac
a8.c=2
c7.aq(c2,a8)
a8=c1.b
a9=a8.c
a8=a8.a.c
c1.a4(c7,new A.r(o-a9/2,650-a8.gb4(a8)/2))
c3=new A.j2(new A.eC(""+(a2+1),c4,c4,B.cY,c4,c4,c4,c4,c4,c4,D.fIZ),B.a7,B.cc,new A.kh(1),c4,c4,c4,c4,B.cd,c4,B.cK)
c3.eL()
c3.a4(c7,new A.r(o-c3.b.c/2,668))}if(i)for(c5=c6*2,t=c6*120,s=c6*4,p=0;p<26;++p){o=B.i.F(p*53+Math.sin(c5+p)*20,450)
q=B.i.F(t+p*37,420)
J.bs(v.save())
v.translate(o,140+q)
v.rotate((s+p)*180/3.141592653589793,0,0)
q=A.bY(B.J,4,8)
$.T()
m=new A.ar(B.T,B.Q,B.W,B.X,B.U)
m.r=[B.d_,G.nH,D.lR,B.aH,B.c][B.o.F(p,5)].gp(0)
c7.aE(q,m)
v.restore()}v.restore()},
b2C(d,e,f,g){var w,v,u=null,t=A.h_(u,B.cK,u,u,u,A.cW(u,u,u,u,u,u,u,u,u,A.l(u,u,g,u,u,u,u,u,u,u,u,13,u,u,B.u,u,u,!0,u,2,u,u,u,I.Ec,u,u),e),B.a7,B.cc,u,B.e3,B.cd)
t.eL()
w=t.b
v=w.c
w=w.a.c
t.a4(d,f.aI(0,new A.r(v/2,w.gb4(w)/2)))},
aD(d){return!1}}
C.a2O.prototype={
a9(){return"_Trip."+this.b}}
C.an0.prototype={
R(){return new C.an1(D.Yw,new A.eK(0,$.az()),$,0,null,null)},
gd6(){return this.d}}
C.an1.prototype={
gDR(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.bGf(w.c,8,w.e,!1)
u.d!==$&&A.bF()
u.d=v
t=v}return t},
ghi(d){var w,v=this,u=v.e
if(u===$){w=C.Np(v.a.c)
v.e!==$&&A.bF()
v.e=w
u=w}return u},
gqz(){var w=this.f
return w===$?this.f=new C.aM8(new C.bUj(this)):w},
gUv(){var w=this.ghi(0)
return w.gzD()==null?"Grandma":B.a.i(w.gzD().b)},
a_(){this.a3()
this.ast()},
t(){var w,v=this
v.gqz().t()
w=v.Mt$
w===$&&A.d()
w.t()
w=v.qg$
w.V$=$.az()
w.W$=0
v.bxO()},
arY(d){var w,v,u,t=this
if(t.r!==D.aeW)return
w=B.dQ.aA(0,B.i.D((t.cy+=d)/t.db,0,1))
v=t.cx
t.CW=v+520*w
if(t.cy>=t.db){t.CW=v+520
v=t.w
u=t.gDR()
if(v+1>=u.length){t.r=D.aeX
t.Xs()}else{++t.w
t.ay=!1
t.r=D.Yx
t.gqz().Ww(u[t.w].a)}if(t.c!=null)t.l(new C.bUh())}},
Xs(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$Xs=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:u.gqz().Ww("Karibu! Welcome home, my child. You answered every stop, and the whole family is proud of you. Come, sit, the food is ready.")
t=u.x
s=u.gDR().length
r=C.bIz(t,u.z,s)
u.as=r
w=2
return A.b(C.C7(u.a.d,r),$async$Xs)
case 2:u.at=e
s=u.a
w=3
return A.b(C.C8(s.d,s.c.a,"journey",u.x*10),$async$Xs)
case 3:u.ch=e
if(u.c!=null)u.l(new C.bUb())
return A.h(null,v)}})
return A.i($async$Xs,v)},
bt_(){this.aVC()},
aVC(){var w=this
w.cx=w.CW
w.cy=0
w.db=w.ay?3.4:2.6
w.r=D.aeW
if(w.c!=null)w.l(new C.bUc())},
LF(d){var w,v,u,t,s=this
if(s.r!==D.Yx)return
w=s.gDR()
v=d===w[s.w].c
if(v){++s.x
u=++s.y
s.z=Math.max(s.z,u)}else{s.y=0
s.ay=!0}s.l(new C.bUg(s,d,v))
u=s.gqz()
t=s.w
u.Ww(v?"Hongera! "+w[t].d+" Beep beep, off you go!":"Pole, the tyre is flat! Listen: "+w[t].d+" We will limp on slowly.")},
cUz(){if(this.r!==D.BQ)return
this.aVC()},
B(d){var w,v,u,t=this,s=null,r=A.bS(0,new A.e6(A.b4(s,s,s,new C.bkL(t,t.qg$),B.aA),s),0,0,0),q=x.p,p=A.a([],q)
for(w=0;w<=t.gDR().length;++w){v=t.w
if(w<v||t.r===D.aeX)v=B.d_
else v=w===v?B.c:B.aT
u=new A.aP(4,4)
p.push(new A.bu(1,B.b9,A.p(s,s,B.f,s,s,new A.o(v,s,s,new A.bb(u,u,u,u),s,s,B.m),s,7,s,B.x9,s,s,s,s),s))}p.push(B.bb)
p.push(D.h2E)
return new C.tP("Safari Journey",new A.am(B.a0,s,B.ad,B.t,A.a([r,A.ao(s,A.A(p,B.l,s,B.e,B.h,0,s,s),s,s,12,12,2,s),A.ao(10,t.cok(),s,s,10,10,s,s)],q),s),B.ff,s)},
cok(){var w,v,u,t,s,r,q,p,o=this,n=null,m=new C.bUf(o),l=D.qP.j(0.96),k=A.n(22),j=A.K(B.d_,B.r,3)
switch(o.r.a){case 0:w=A.x(A.a([A.c("A long drive to the village of Elder "+o.gUv()+". At every stop a villager asks you something about the family. Answer well and the bus flies. Get it wrong and a tyre goes flat!",n,n,n,n,n,n,D.aYy,B.K,n,n),B.R,C.uG("Start the journey",o.gbsZ(),B.d_,D.bUj,D.fJ)],x.p),B.l,n,B.e,B.O,0,B.p)
break
case 3:w=D.bfW
break
case 1:w=o.w
v=o.gDR()
w=m.$1("Stop "+(w+1)+" of "+v.length+" \xb7 a villager asks")
u=x.p
t=A.a([],u)
for(s=0;r=v[o.w].b,s<r.length;++s){q=new A.aP(14,14)
p=new A.ax(D.lQ,2.5,B.r,-1)
t.push(A.aA(n,A.p(n,A.c(r[s],n,n,n,n,n,n,D.aXT,B.K,n,n),B.f,n,D.agi,new A.o(D.alR,n,new A.bE(p,p,p,p),new A.bb(q,q,q,q),n,n,B.m),n,n,n,n,Z.x3,n,n,n),B.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.bUd(o,s),n,n,n,n,n,n,!1,B.a4))}w=A.x(A.a([w,B.M,A.bZ(B.bI,t,B.br,n,8,8)],u),B.B,n,B.e,B.O,0,B.p)
break
case 2:w=m.$1(o.ax?"The villager cheers":"A flat tyre!")
v=o.w+1>=o.gDR().length?"Drive home":"Drive on"
v=A.x(A.a([w,B.M,new A.bK(B.a9,n,n,C.uG(v,o.gcUy(),B.d_,B.jE,D.fJ),n)],x.p),B.B,n,B.e,B.O,0,B.p)
w=v
break
case 4:w=A.a([m.$1("Elder "+o.gUv()),B.M,A.c(""+o.x+" of "+o.gDR().length+" right  \xb7  +"+o.as+" \u2b50",n,n,n,n,n,n,D.aYa,n,n,n)],x.p)
v=o.at
if(v>0){v=C.aSd(v)
u=C.aSd(o.at)
t=o.at
r=o.ch?" \xb7 \ud83c\udfc6 new record!":""
w.push(A.c(v.b+" "+u.a+" \xb7 "+t+" stars"+r,n,n,n,n,n,n,D.adb,n,n,n))}w.push(B.M)
w.push(A.at(C.uG("Back to the games",new C.bUe(o),B.d_,B.kk,D.fJ),n,n,n))
w=A.x(w,B.B,n,B.e,B.O,0,B.p)
break
default:w=n}return A.p(n,w,B.f,n,n,new A.o(l,n,j,k,D.aFp,n,B.m),n,n,n,n,B.bg,n,n,n)}}
C.bkL.prototype={
a4(d3,d4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3=null,c4=this.b,c5=c4.qg$.a,c6=d4.a,c7=d4.b,c8=c4.CW,c9=c4.gDR(),d0=B.i.D(c8/(520*(c9.length+1)),0,1),d1=c4.r===D.aeW,d2=c7*0.5
c8=A.ap(D.bkN,D.bvH,d0)
c8.toString
w=A.ap(D.ZS,G.ajs,d0)
w.toString
v=A.ap(B.uS,D.bu1,d0)
v.toString
$.T()
u=A.L()
t=x.O
u.san(A.jP(B.J,new A.r(0,d2),A.a([c8,w,v],t),G.a5R,B.x,c3))
d3.aE(new A.a4(0,0,0+c6,0+c7),u)
s=new A.r(c6*(0.15+0.7*d0),d2*(0.28+0.45*d0*d0))
u=A.L()
u.san(A.ws(s,60,A.a([D.buq,B.L],t),c3,B.x,c3,c3,0))
d3.O(s,60,u)
u=A.L()
u.r=B.a_4.gp(0)
d3.O(s,22,u)
for(c8=c5*4,w=c6+240,v=c7*0.06,r=0;r<5;++r){q=B.i.F(r*190-c4.CW*0.06-c8,w)-120
p=v+B.o.F(r,3)*22
for(o=0;o<4;++o){n=D.dHK[o]
$.T()
u=new A.ar(B.T,B.Q,B.W,B.X,B.U)
u.r=B.c.j(0.75).gp(0)
d3.O(new A.r(q+n.a,p+n.b),18,u)}}for(w=d0*0.7,v=d2+4,u=d2-16,m=x.v,l=0;l<2;++l){k=$.T()
j=A.a([],m)
i=new A.aH(k.r,B.ak,c3,c3,j)
j.push(new A.aZ(0,v))
i.ac()
for(k=u-l*12,h=0.12+l*0.1,g=70+l*30,f=14-l*3,q=0;q<=c6;q+=6){e=new A.aq(q,k+Math.sin((q+c4.CW*h)/g)*f)
j.push(e)
d=i.f
if(d!=null)e.aj(d)
i.ac()}k=new A.aq(c6,v)
j.push(k)
j=i.f
if(j!=null)k.aj(j)
i.ac()
$.T()
k=new A.ar(B.T,B.Q,B.W,B.X,B.U)
k.r=A.ap(l===0?D.bjj:D.byS,D.bot,w).gp(0)
d3.af(i,k)}for(w=d2+2,r=0;r<8;++r)this.cev(d3,new A.r(B.i.F(B.i.F(r*300-c4.CW*0.5,2400)+2400,2400)-150,w),(r&1)===0,d0)
$.T()
w=A.L()
v=A.ap(D.al0,D.H6,d0)
v.toString
w.san(A.jP(new A.r(0,d2),new A.r(0,c7),A.a([v,D.bus],t),c3,B.x,c3))
d3.aE(new A.a4(0,d2,c6,c7),w)
a0=c7*0.56
a1=c7*0.66
w=A.L()
w.r=D.bnG.gp(0)
d3.aE(new A.a4(0,a0,c6,a1),w)
w=A.L()
w.r=D.byt.gp(0)
d3.aE(new A.a4(0,a0-3,c6,a0),w)
for(q=-B.i.F(c4.CW,70),w=(a0+a1)/2-2,v=w+4;q<c6;q+=70){u=new A.ar(B.T,B.Q,B.W,B.X,B.U)
u.r=I.NH.gp(0)
d3.aE(new A.a4(q,w,q+36,v),u)}for(w=a0-6,v=w-36,u=v+36,t=w-34,k=c6*0.62,j=c6+160,h=c5*3,g=c5*6,f=w+40,e=w-20,d=e+20,a2=w-56,a3=a2+56,a4=w-66,a5=a4+20,a6=w-72,r=0;a7=c9.length,r<=a7;r=a8){a8=r+1
q=k+a8*520-c4.CW
if(q<-160||q>j)continue
a7=r===a7
a9=q+40
b0=a9-26
b1=$.T()
b2=new A.ar(B.T,B.Q,B.W,B.X,B.U)
b2.r=D.biY.gp(0)
d3.aE(new A.a4(b0,v,b0+52,u),b2)
b2=A.a([],m)
b1=new A.aH(b1.r,B.ak,c3,c3,b2)
b2.push(new A.aZ(a9-36,t))
b1.ac()
b0=new A.aq(a9,a6)
b2.push(b0)
b3=b1.f
if(b3!=null)b0.aj(b3)
b1.ac()
b0=new A.aq(a9+36,t)
b2.push(b0)
b3=b1.f
if(b3!=null)b0.aj(b3)
b1.ac()
b0=new A.bA()
b2.push(b0)
b2=b1.f
if(b2!=null)b0.aj(b2)
b1.ac()
b0=new A.ar(B.T,B.Q,B.W,B.X,B.U)
b0.r=D.bwA.gp(0)
d3.af(b1,b0)
b0=a9-6
b1=new A.ar(B.T,B.Q,B.W,B.X,B.U)
b1.r=D.fJ.gp(0)
d3.aE(new A.a4(b0,e,b0+12,d),b1)
b4=q-36
b1=b4-2
b0=new A.ar(B.T,B.Q,B.W,B.X,B.U)
b0.r=D.GS.gp(0)
d3.aE(new A.a4(b1,a2,b1+4,a3),b0)
b0=b4-30
b5=A.bw(new A.a4(b0,a4,b0+60,a5),B.jJ)
b0=new A.ar(B.T,B.Q,B.W,B.X,B.U)
b0.r=D.bzZ.gp(0)
d3.aq(b5,b0)
b0=new A.ar(B.T,B.Q,B.W,B.X,B.U)
b0.r=D.Ci.gp(0)
b0.b=B.ac
b0.c=2
d3.aq(b5,b0)
b6=a7?"HOME":"STOP "+a8
b7=new A.j2(new A.eC(b6,c3,c3,B.cY,c3,c3,c3,c3,c3,c3,D.fH4),B.a7,B.cc,new A.kh(1),c3,c3,c3,c3,B.cd,c3,B.cK)
b7.eL()
b0=b7.b
b1=b0.c
b0=b0.a.c
b7.a4(d3,new A.r(b4-b1/2,a2-b0.gb4(b0)/2))
if(a7)b8=c4.r===D.aeX
else if(r===c4.w){b0=c4.r
b0=b0===D.Yx||b0===D.BQ
b8=b0}else b8=!1
if(a7){b0=c4.ghi(0).gzD()
b9=(b0==null?c3:b0.c)===D.oU?1:0}else b9=[0,3,6,7,2,1,4,5][B.o.F(r,8)]
b0=c4.gqz()
c0=b0.d<b0.c.length&&b8
c1=b8&&c4.r===D.BQ
b0=c0?C.hLG(c5,r):0
if(c1)b1=c4.ax?1:-0.3
else b1=a7&&b8?1:0.4
b2=b8&&c4.r===D.Yx?0.4:0
b3=c1&&c4.ax?0.5:0
if(a7&&b8)a7=new A.r(40,-110+Math.sin(g)*10)
else a7=c0?new A.r(44+Math.sin(h)*8,-66+Math.sin(c8)*10):c3
C.T9(d3,new A.r(q+4,f),0,b2,-0.8,-0.2,c3,a7,new A.r(q-200,w),b9,b0,0,0.85,b1,b3,c5+r,-0.3)}c9=c6*0.28
this.bKc(d3,new A.r(c9,a1-6),c5,d1,d4)
if(d1)for(w=c5*1.6,v=c9-90,u=a1-10,r=0;r<7;++r){c2=B.i.F(w+r/7,1)
$.T()
t=new A.ar(B.T,B.Q,B.W,B.X,B.U)
t.r=D.bxX.j(0.5*(1-c2)).gp(0)
d3.O(new A.r(v-c2*70,u-c2*18),6+c2*16,t)}if(c4.ay&&c4.r!==D.Yw)for(w=c5*1.2,v=c9+62,u=a1-40,r=0;r<5;++r){c2=B.i.F(w+r/5,1)
t=Math.sin(r+c8)
$.T()
m=new A.ar(B.T,B.Q,B.W,B.X,B.U)
m.r=B.c.j(0.5*(1-c2)).gp(0)
d3.O(new A.r(v+t*5,u-c2*50),4+c2*10,m)}if(c4.r===D.BQ&&c4.ax){b7=A.h_(c3,B.cK,c3,c3,c3,A.cW(c3,c3,c3,c3,c3,c3,c3,c3,c3,A.l(c3,c3,B.d_,c3,c3,c3,c3,c3,c3,c3,c3,24,c3,c3,B.u,c3,c3,!0,c3,c3,c3,c3,c3,Ae.Js,c3,c3),"BEEP BEEP!"),B.a7,B.cc,c3,B.e3,B.cd)
b7.eL()
b7.a4(d3,new A.r(c9-b7.b.c/2+40,a0-96-Math.abs(Math.sin(c5*9))*6))}},
cev(d,e,f,g){var w,v,u,t,s,r,q,p,o=A.ap(D.btW,D.bmZ,g)
o.toString
if(f){w=new A.aH($.T().r,B.ak,null,null,A.a([],x.v))
v=e.a
u=e.b
w.E(new A.aZ(v-16,u))
t=u-36
s=u-56
w.E(new A.cj(v-9,t,v-7,s))
w.E(new A.aq(v+7,s))
w.E(new A.cj(v+9,t,v+16,u))
w.E(new A.bA())
t=A.L()
t.r=D.a0d.gp(0)
d.af(w,t)
for(w=v+0,t=u+-54,s=u+-72,u+=-76,r=0;r<4;++r){q=D.d64[r]
p=new A.ar(B.T,B.Q,B.W,B.X,B.U)
p.r=D.a0d.gp(0)
p.c=4
p.d=B.bG
d.ah(new A.r(w,t),new A.r(v+q*24,s),p)
p=new A.ar(B.T,B.Q,B.W,B.X,B.U)
p.r=o.gp(0)
d.O(new A.r(v+q*26,u),10,p)}}else{w=e.a7(0,D.eBd)
$.T()
v=A.L()
v.r=D.bj_.gp(0)
v.c=4
d.ah(e,w,v)
v=A.bY(e.a7(0,D.eBe),16,60)
w=A.L()
w.r=o.gp(0)
d.c1(v,w)}},
bKc(a2,a3,a4,a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a5?Math.sin(a4*22)*1.6:Math.sin(a4*2)*0.4,d=this.b,a0=d.ay&&d.r!==D.Yw?0.045:0,a1=a2.c
J.bs(a1.save())
a1.translate(a3.a,a3.b+e)
a2.jr(0,a0)
for(w=0;w<2;++w){v=D.dzp[w]
u=d.ay&&d.r!==D.Yw&&v>0
J.bs(a1.save())
a1.translate(v,-4+(u?4:0))
t=u?15:18
$.T()
s=new A.ar(B.T,B.Q,B.W,B.X,B.U)
s.r=D.byJ.gp(0)
a2.O(B.J,t,s)
a1.rotate(d.CW/18*180/3.141592653589793,0,0)
s=new A.ar(B.T,B.Q,B.W,B.X,B.U)
s.r=D.bqD.gp(0)
a2.O(B.J,9,s)
for(r=0;r<4;++r){t=r*3.141592653589793/2
s=Math.cos(t)
t=Math.sin(t)
q=new A.ar(B.T,B.Q,B.W,B.X,B.U)
q.r=B.bk.gp(0)
q.c=2
a2.ah(B.J,new A.r(s*9,t*9),q)}a1.restore()}p=A.rb(D.fm7,B.h2,B.h2,B.i6,B.hS)
$.T()
t=A.L()
t.san(A.jP(D.exk,B.aa1,D.doC,G.a5R,B.x,f))
a2.aq(p,t)
for(o=0;o<20;++o){t=-100+o*10
s=new A.ar(B.T,B.Q,B.W,B.X,B.U)
s.r=D.dic[B.o.F(o,4)].gp(0)
a2.aE(new A.a4(t,-26,t+10,-19),s)}n=d.r===D.BQ&&d.ax
m=[2,3,4,5]
for(t=a4*10,o=0;o<4;++o){s=-88+o*38
q=s+32
l=new A.a4(s,-66,q,-36)
J.bs(a1.save())
a1.clipRRect(A.nc(A.bw(l,B.pi)),$.mQ(),!0)
k=new A.ar(B.T,B.Q,B.W,B.X,B.U)
k.r=D.ZS.gp(0)
a2.aE(l,k)
k=m[o]
j=n?1:0.35
i=n?0.5:0
h=d.ay&&d.r===D.BQ?1:0
g=n?Math.max(0,Math.sin(t+o))*6:0
C.T9(a2,new A.r(s+(q-s)/2,-10),g,h,0.5,-0.2,f,f,D.aO6,k,i,0,0.4,j,0,a4,0)
a1.restore()
j=A.bw(l,B.pi)
i=new A.ar(B.T,B.Q,B.W,B.X,B.U)
i.r=D.alT.gp(0)
i.b=B.ac
i.c=2
a2.aq(j,i)}d=A.bw(D.VS,B.pi)
t=A.L()
t.r=D.ZS.gp(0)
a2.aq(d,t)
J.bs(a1.save())
a1.clipRRect(A.nc(A.bw(D.VS,B.pi)),$.mQ(),!0)
C.T9(a2,new A.r(D.VS.gbD().a,-10),0,0,0.7,-0.1,f,f,D.aO6,6,0,0,0.4,0.5,0,a4,0)
a1.restore()
t=A.bw(D.VS,B.pi)
d=A.L()
d.r=D.alT.gp(0)
d.b=B.ac
d.c=2
a2.aq(t,d)
d=A.L()
d.r=AE.CH.gp(0)
a2.O(D.ezs,4,d)
d=A.L()
d.r=D.GS.gp(0)
a2.aE(D.fng,d)
for(w=0;w<3;++w){v=D.dzr[w]
d=A.bw(new A.a4(v,-96,v+28,-79),B.jJ)
t=new A.ar(B.T,B.Q,B.W,B.X,B.U)
t.r=D.H6.gp(0)
a2.aq(d,t)}a1.restore()},
aD(d){return!1}}
C.aCO.prototype={
t(){var w=this,v=w.ab$
if(v!=null)v.a8(0,w.gbB())
w.ab$=null
w.a2()},
b_(){this.b8()
this.b6()
this.bC()}}
C.bii.prototype={}
C.aCQ.prototype={
t(){var w=this,v=w.ab$
if(v!=null)v.a8(0,w.gbB())
w.ab$=null
w.a2()},
b_(){this.b8()
this.b6()
this.bC()}}
C.bij.prototype={}
C.aCR.prototype={
t(){var w=this,v=w.ab$
if(v!=null)v.a8(0,w.gbB())
w.ab$=null
w.a2()},
b_(){this.b8()
this.b6()
this.bC()}}
C.bik.prototype={}
C.a7k.prototype={
B(d){var w=null
return new A.a5(1/0,this.c,A.b4(w,w,w,new C.bkS(w),B.aA),w)}}
C.bkS.prototype={
a4(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=a0.b,e=f*1.1
for(w=a0.a,v=e+0.5,u=0+f,t=e*0.15,s=f/2,r=e/2,q=f*0.8,p=e*0.85,o=x.v,f*=0.2,n=0,m=0;m<w;m+=e){l=D.dxg[B.o.F(n,6)]
k=$.T()
j=new A.ar(B.T,B.Q,B.W,B.X,B.U)
j.r=l.gp(0)
d.aE(new A.a4(m,0,m+v,u),j)
if(B.o.F(n,3)===0){j=A.a([],o)
i=new A.aH(k.r,B.ak,null,null,j)
k=m+r
j.push(new A.aZ(k,f))
i.ac()
h=new A.aq(m+p,s)
j.push(h)
g=i.f
if(g!=null)h.aj(g)
i.ac()
k=new A.aq(k,q)
j.push(k)
h=i.f
if(h!=null)k.aj(h)
i.ac()
k=new A.aq(m+t,s)
j.push(k)
h=i.f
if(h!=null)k.aj(h)
i.ac()
k=new A.bA()
j.push(k)
j=i.f
if(j!=null)k.aj(j)
i.ac()
k=new A.ar(B.T,B.Q,B.W,B.X,B.U)
k.r=B.c.j(0.85).gp(0)
d.af(i,k)}++n}},
aD(d){return!1}}
C.tP.prototype={
B(d){var w=null,v=x.p,u=A.a([A.aI(w,w,w,w,Ag.Ra,w,w,w,new C.bUa(d),w,w,w,w,w,w),A.E(A.c(this.c,w,1,B.a2,w,w,w,D.fEi,w,w,w),1)],v)
B.d.u(u,this.e)
return A.c5(w,D.ZC,A.p(w,A.bo(!0,A.x(A.a([D.c9o,new A.D(D.bLa,A.A(u,B.l,w,B.e,B.h,0,w,w),w),A.E(this.d,1)],v),B.l,w,B.e,B.h,0,B.p),!0,!1,B.ag,!0,!0),B.f,w,w,D.bbb,w,w,w,w,w,w,w,w),w,!1,!1,w,w)}}
C.IJ.prototype={
B(d){var w=null,v=this.d,u=C.aSd(v),t=C.iuC(v),s=B.c.j(0.08),r=A.n(18),q=A.K(B.d_.j(0.6),B.r,1.5),p=A.a([A.c("+"+this.c+" \u2b50 Family Stars",w,w,w,w,w,w,D.fGQ,w,w,w)],x.p)
if(this.e)p.push(D.eDF)
p.push(B.aj)
p.push(A.c(u.b+" "+u.a+"  \xb7  "+v+" stars",w,w,w,w,w,w,B.hh,w,w,w))
if(t!=null)p.push(new A.D(B.r7,A.c(""+(t.c-v)+" more stars for "+t.b+" "+t.a,w,w,w,w,w,w,B.Fw,w,w,w),w))
return A.p(w,A.x(p,B.l,w,B.e,B.h,0,B.p),B.f,w,w,new A.o(s,w,q,r,w,w,B.m),w,w,w,w,B.bF,w,w,w)}}
C.WV.prototype={
R(){return new C.bnG(A.S(x.N,x.S),B.o.F(Date.now(),1e5))},
d0y(d){return this.f.$1(d)},
ge9(){return this.d}}
C.bnG.prototype={
gTw(){var w=this.d
return w===$?this.d=this.a.c:w},
a_(){this.a3()
this.Q5()},
Q5(){var w=0,v=A.j(x.H),u=this,t,s,r,q,p,o,n,m,l
var $async$Q5=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(C.bUW(u.a.d),$async$Q5)
case 2:n=e
t=u.f,s=0
case 3:if(!(s<8)){w=5
break}r=D.dmz[s]
q=u.a
p=q.d
o=u.d
m=t
l=r
w=6
return A.b(C.bUV(p,(o===$?u.d=q.c:o).a,r),$async$Q5)
case 6:m.n(0,l,e)
case 4:++s
w=3
break
case 5:if(u.c!=null)u.l(new C.e5E(u,n))
return A.h(null,v)}})
return A.i($async$Q5,v)},
uF(d){return this.crq(d)},
crq(d){var w=0,v=A.j(x.H),u=this,t
var $async$uF=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return A.b(A.a7(t,!1).cc(A.eb(new C.e5F(d),!1,null,x.H)),$async$uF)
case 2:u.r=B.o.F(Date.now(),1e5)
if(u.c!=null)u.Q5()
return A.h(null,v)}})
return A.i($async$uF,v)},
gb81(){var w,v,u,t=C.Np(this.gTw()),s=A.a([],x.s)
for(w=t.b,v=w.length,u=0;u<w.length;w.length===v||(0,A.I)(w),++u)s.push(B.a.i(w[u].b))
return s},
a3h(d){return this.cyL(d)},
cyL(d){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$a3h=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=A.a([],x.Y)
for(t=d.length,s=0;s<d.length;d.length===t||(0,A.I)(d),++s)r.push(d[s].ak())
w=2
return A.b(u.a.d0y(r),$async$a3h)
case 2:if(u.c!=null)u.l(new C.e5G(u,r))
return A.h(null,v)}})
return A.i($async$a3h,v)},
Pp(d){return this.bT2(d)},
bT2(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j
var $async$Pp=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:j=C.hoB(t.gTw())
if(d==null){s=Date.now()
r=A.a([],x.b)
q=new C.N8("g"+s,"",r)}else q=d
s=t.c
s.toString
r=x.fH
w=3
return A.b(A.a7(s,!1).cc(A.eb(new C.e5C(q),!1,null,r)),$async$Pp)
case 3:p=f
if(p==null){w=1
break}s=A.a([],x.c)
for(o=j.length,n=p.a,m=0;m<j.length;j.length===o||(0,A.I)(j),++m){l=j[m]
if(l.a!==n)s.push(l)}k=B.d.bl(j,new C.e5D(p))
o=s.length
B.d.ce(s,k<0?o:Math.min(k,o),p)
w=4
return A.b(t.a3h(A.cU(s,0,A.dA(2,"count",x.S),r).dk(0)),$async$Pp)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Pp,v)},
Yo(d,e){return this.bQC(0,e)},
bQC(d,e){var w=0,v=A.j(x.H),u=this,t,s,r,q,p,o
var $async$Yo=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:o=u.c
o.toString
w=4
return A.b(A.ce(null,null,!0,null,new C.e5B(e),o,null,!0,!0,x.y),$async$Yo)
case 4:w=g===!0?2:3
break
case 2:o=A.a([],x.c)
for(t=C.hoB(u.gTw()),s=t.length,r=e.a,q=0;q<t.length;t.length===s||(0,A.I)(t),++q){p=t[q]
if(p.a!==r)o.push(p)}w=5
return A.b(u.a3h(o),$async$Yo)
case 5:case 3:return A.h(null,v)}})
return A.i($async$Yo,v)},
ab2(d,e,f,g,h,i,j){var w,v,u,t,s,r,q,p=null,o=h==null,n=o?new C.e5y(this,j):h
o=o?0.55:1
w=A.ap(g,B.v,0.45)
w.toString
w=A.a([g,w],x.O)
v=A.n(20)
u=A.K(B.aT,B.r,1)
t=A.a([new A.aa(0,B.H,g.j(0.35),B.cz,12)],x.V)
s=x.p
r=A.a([A.c(d,p,p,p,p,p,p,B.WG,p,p,p),B.aW],s)
q=A.n(10)
r.push(A.p(p,A.c(i,p,p,p,p,p,p,D.fFc,p,p,p),B.f,p,p,new A.o(B.i_,p,p,q,p,p,B.m),p,p,p,p,B.zz,p,p,p))
return A.aA(p,A.d5(A.p(p,A.x(A.a([A.A(r,B.l,p,B.e,B.h,0,p,p),B.aW,A.c(e,p,2,p,p,p,p,D.fNd,p,p,p),B.cQ,A.c(f,p,3,B.a2,p,p,p,D.fFX,p,p,p)],s),B.B,p,B.e,B.h,0,B.p),B.f,p,p,new A.o(p,p,u,v,t,new A.a8(B.ay,B.aD,B.x,w,p,p),B.m),p,p,p,p,B.x1,p,p,p),o),B.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,n,p,p,p,p,p,p,!1,B.a4)},
XS(d,e,f,g,h,i){return this.ab2(d,e,f,g,h,i,null)},
B(a2){var w,v,u,t,s=this,r=null,q=C.Np(s.gTw()),p=s.gTw(),o=C.aSd(s.e),n=C.hoB(p),m=s.a.e&&J.ad(p.z)<2,l=new C.e5H(s),k=C.hPH(p,1).length,j=C.hPS(p,1).length,i=C.hQM(p,1).length,h=B.c.j(0.07),g=A.n(20),f=A.K(B.d_.j(0.5),B.r,1),e=A.c(o.b,r,r,r,r,r,r,K.acZ,r,r,r),d=A.c(o.a,r,r,r,r,r,r,D.fKD,r,r,r),a0=q.b.length,a1=x.p
g=A.p(r,A.A(A.a([e,B.bc,A.E(A.x(A.a([d,A.c(a0>=3?"The games are made from the "+a0+" people in this tree.":"Add at least 3 people to the tree for games about your own family. Until then the elders teach culture.",r,r,r,r,r,r,B.WY,r,r,r)],a1),B.B,r,B.e,B.h,0,B.p),1),A.x(A.a([A.c(""+s.e,r,r,r,r,r,r,B.qr,r,r,r),D.h8Y],a1),B.l,r,B.e,B.h,0,B.p)],a1),B.l,r,B.e,B.h,0,r,r),B.f,r,r,new A.o(h,r,f,g,r,r,B.m),r,r,r,r,B.bF,r,r,r)
f=s.XS("\ud83c\udfaf","Family Kahoot","Race the clock. Answer fast, keep a streak, climb the podium against your family.",B.az,new C.e5I(s,p),l.$1("kahoot"))
h=s.XS("\ud83d\udd25","Fireside Stories","Sit by the fire in the village. The elder teaches, the children answer.",D.lQ,new C.e5J(s,p),l.$1("fire"))
a0=s.XS("\ud83e\uddfa","Calabash Catch","Gourds with the answers fall from the baobab. Slide the basket under the right one!",B.wQ,new C.e5K(s,p),l.$1("catch"))
j=j!==0?new C.e5N(s,p):r
j=s.ab2("\ud83c\udf31","Plant the Tree","Drag the children onto the branches under their parent and watch the tree grow.",B.hX,j,l.$1("plant"),"Add a parent with two children, and one more person.")
i=i!==0?new C.e5O(s,p):r
i=s.ab2("\ud83c\udfad","Who Am I?","A shadow turns into a face as the clues come. Who is hiding in it?",B.lP,i,l.$1("who"),"Add at least 3 people with some facts about them (parents, jobs, birthplaces).")
e=s.XS("\ud83d\ude8c","Safari Journey","Ride a bus across the savanna to the elder village. A villager asks a question at every stop. A wrong answer is a flat tyre!",B.fv,new C.e5P(s,p),l.$1("journey"))
k=k!==0?new C.e5Q(s,p):r
k=A.a([g,B.aO,D.hd2,B.M,A.lc(0.98,A.a([f,h,a0,j,i,e,s.ab2("\ud83c\udf33","Line Up","The family stands under the baobab. Swap them into a line, oldest to youngest.",B.es,k,l.$1("lineup"),"Add a parent with two children, or a family with more than one generation."),s.XS("\ud83c\udfeb","Village School","Sit with the children while the elder writes the questions on the chalkboard. A real test with a report card.",B.de,new C.e5R(s,p),l.$1("school"))],a1),2,12,12,r,B.e8,!0),B.di,A.A(A.a([D.bN_,A.c(""+n.length+" of 2",r,r,r,r,r,r,D.fFh,r,r,r)],a1),B.l,r,B.e,B.h,0,r,r),B.M],a1)
for(j=n.length,w=0;i=n.length,w<i;n.length===j||(0,A.I)(n),++w){v=n[w]
i=B.c.j(0.07)
h=new A.aP(18,18)
u=new A.ax(B.aT,1,B.r,-1)
g=B.a.i(v.b)
g=A.a([D.fUq,B.bc,new A.bu(1,B.b9,A.x(A.a([A.c(g.length===0?"Untitled game":g,r,1,B.a2,r,r,r,B.hs,r,r,r),A.c(""+v.gaqs(0).length+" questions \xb7 Kahoot style",r,r,r,r,r,r,B.Fw,r,r,r)],a1),B.B,r,B.e,B.h,0,B.p),r)],a1)
if(v.gaqs(0).length>=2){f=D.lR.j(0.2)
t=new A.ax(D.lR,1,B.r,-1)
g.push(A.aA(r,A.p(r,A.V(B.fN,D.lR,r,r,r,20),B.f,r,r,new A.o(f,r,new A.bE(t,t,t,t),r,r,r,B.a6),r,38,r,r,r,r,r,38),B.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new C.e5S(s,v,p),r,r,r,r,r,r,!1,B.a4))}if(s.a.e){f=B.d_.j(0.2)
t=new A.ax(B.d_,1,B.r,-1)
f=A.aA(r,A.p(r,A.V(B.jl,B.d_,r,r,r,20),B.f,r,r,new A.o(f,r,new A.bE(t,t,t,t),r,r,r,B.a6),r,38,r,r,r,r,r,38),B.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new C.e5T(s,v),r,r,r,r,r,r,!1,B.a4)
e=B.fq.j(0.2)
t=new A.ax(B.fq,1,B.r,-1)
B.d.u(g,A.a([B.bb,f,B.bb,A.aA(r,A.p(r,A.V(B.eq,B.fq,r,r,r,20),B.f,r,r,new A.o(e,r,new A.bE(t,t,t,t),r,r,r,B.a6),r,38,r,r,r,r,r,38),B.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new C.e5U(s,v),r,r,r,r,r,r,!1,B.a4)],a1))}k.push(A.p(r,new A.c1(B.aK,B.e,B.h,B.l,r,B.p,r,0,g,r),B.f,r,r,new A.o(i,r,new A.bE(u,u,u,u),new A.bb(h,h,h,h),r,r,B.m),r,r,r,B.d7,B.bg,r,r,r))}if(s.a.e){j=m?new C.e5L(s):new C.e5M(a2)
i=A.n(18)
h=A.K(m?B.d_:B.aT,B.r,2)
g=m?B.d_.j(0.12):B.dx
f=m?"\uff0b Make your own game  ("+(2-n.length)+" left)":"Both games are made"
k.push(A.aA(r,A.p(r,A.at(A.c(f,r,r,r,r,r,r,A.l(r,r,m?B.d_:B.aF,r,r,r,r,r,r,r,r,15,r,r,B.u,r,r,!0,r,r,r,r,r,r,r,r),r,r,r),r,r,r),B.f,r,r,new A.o(g,r,h,i,r,r,B.m),r,r,r,r,B.P3,r,r,r),B.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,j,r,r,r,r,r,r,!1,B.a4))}else if(i===0)k.push(D.hdZ)
k.push(B.aB)
k.push(D.auS)
return new C.tP("Family Games \xb7 "+p.b,A.co(k,r,r,D.bHa,r,r,B.ah,!1),B.ff,r)}}
C.a0G.prototype={
a9(){return"_KPhase."+this.b}}
C.an2.prototype={
R(){return new C.an3(D.b2O)},
gd6(){return this.e}}
C.an3.prototype={
t(){var w=this.at
if(w!=null)w.a1(0)
w=this.ax
if(w!=null)w.a1(0)
this.a2()},
fR(d){var w,v=this
v.l(new C.bUv(v))
w=v.at
if(w!=null)w.a1(0)
v.at=A.d1(B.fp,new C.bUw(v))},
aR4(){var w=this,v=w.ax
if(v!=null)v.a1(0)
w.l(new C.bUl(w))
v=w.at
if(v!=null)v.a1(0)
w.at=A.d1(B.fo,new C.bUm(w))},
LF(d){var w
if(this.d!==D.aer)return
w=this.at
if(w!=null)w.a1(0)
this.b7Y(d)},
b7Y(d){var w,v=this,u={},t=v.a.w[v.e]
u.a=0
if(d===t.c){w=++v.r
v.w=Math.max(v.w,w);++v.x
w=B.i.S(500+500*B.i.D(v.as/t.r,0,1))+100*Math.min(w-1,5)
u.a=w
v.f+=w}else v.r=0
v.l(new C.bUr(u,v,d))
u=v.ax
if(u!=null)u.a1(0)
v.ax=A.cB(B.tv,v.giA(v))},
cO_(d){var w=this
if(w.d!==D.Y2)return
if(w.e+1>=w.a.w.length)w.Zb()
else{w.l(new C.bUs(w))
w.aR4()}},
Zb(){var w=0,v=A.j(x.H),u=this,t,s,r,q,p
var $async$Zb=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=u.ax
if(p!=null)p.a1(0)
p=u.x
t=u.a.w.length
s=C.bIz(p,u.w,t)
u.l(new C.bUo(u,s))
w=2
return A.b(C.C7(u.a.e,s),$async$Zb)
case 2:r=e
t=u.a
w=3
return A.b(C.C8(t.e,t.f,t.r,u.f),$async$Zb)
case 3:q=e
if(u.c!=null)u.l(new C.bUp(u,r,q))
return A.h(null,v)}})
return A.i($async$Zb,v)},
cOP(){var w,v,u,t,s=this,r=s.a,q=new A.e2()
q.cT(r.w.length*31+B.a.gZ(r.f))
w=s.a.w.length*900
v=A.a([new A.b0("You",s.f,!0)],x.bd)
r=A.B(s.a.x,x.N)
B.d.dX(r,q)
for(r=A.cU(r,0,A.dA(4,"count",x.S),A.U(r).c),u=r.$ti,r=new A.bP(r,r.gJ(0),u.k("bP<aj.E>")),u=u.k("aj.E");r.C();){t=r.d
if(t==null)t=u.a(t)
v.push(new A.b0(t,B.i.S(w*(0.35+q.ai()*0.5)),!1))}B.d.b0(v,new C.bUt())
return v},
B(d){var w,v,u=this,t=null,s=u.a.c,r=u.d
A:{if(D.b2O===r){w=A.a([D.h9m,B.R,A.c(s,t,t,t,t,t,t,B.X7,B.K,t,t)],x.p)
v=u.a.d
if(v.length!==0)w.push(A.c(v,t,t,t,t,t,t,D.fFp,t,t,t))
w.push(B.aB)
w.push(A.c(""+u.a.w.length+" questions. The faster you answer, the more points you win. Keep a streak for a bonus.",t,t,t,t,t,t,B.BA,B.K,t,t))
w.push(B.ec)
w.push(C.uG("Play",u.gf1(u),B.d_,B.fN,D.fJ))
w=A.at(new A.D(B.eJ,A.x(w,B.l,t,B.e,B.O,0,B.p),t),t,t,t)
break A}if(D.b2P===r){w=A.at(A.c(""+u.z,t,t,t,t,t,t,D.fNM,t,t,t),t,t,t)
break A}if(D.aer===r||D.Y2===r){w=u.cu4()
break A}if(D.b2Q===r){w=u.cew()
break A}w=t}return new C.tP(s,w,B.ff,t)},
cu4(){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=k.d===D.Y2,h=k.y,g=k.a.w,f=k.e,e=h===g[f].c
h=x.p
g=A.a([A.c(""+(f+1)+"/"+g.length,j,j,j,j,j,j,D.aXJ,j,j,j),B.aW],h)
f=k.r
if(f>=2)g.push(A.c("\ud83d\udd25 "+f+" in a row",j,j,j,j,j,j,D.LL,j,j,j))
g.push(B.ar)
f=A.n(14)
g.push(A.p(j,A.c(""+k.f,j,j,j,j,j,j,B.iU,j,j,j),B.f,j,j,new A.o(B.bx,j,j,f,j,j,B.m),j,j,j,j,A6.D2,j,j,j))
g=A.A(g,B.l,j,B.e,B.h,0,j,j)
f=A.n(6)
w=i?0:B.i.D(k.as/k.a.w[k.e].r,0,1)
f=A.by(f,A.jE(B.bx,j,k.as<5?B.fq:B.d_,9,j,w,j),B.aq)
w=A.n(22)
v=A.K(B.d_,B.r,3)
if(i){if(k.y<0)u="Time's up!"
else u=e?"Correct! +"+k.Q:"Not this time"
u=A.x(A.a([A.c(u,j,j,j,j,j,j,A.l(j,j,e?D.lR:G.nH,j,j,j,j,j,j,j,j,24,j,j,B.u,j,j,!0,j,j,j,j,j,j,j,j),j,j,j),B.M,A.c(k.a.w[k.e].d,j,j,j,j,j,j,D.fEr,B.K,j,j)],h),B.l,j,B.e,B.O,0,B.p)}else u=A.c(k.a.w[k.e].a,j,j,j,j,j,j,D.fPY,B.K,j,j)
w=A.E(A.p(j,A.at(u,j,j,j),B.f,j,j,new A.o(D.qP,j,v,w,j,j,B.m),j,j,j,j,B.f9,j,j,1/0),3)
v=A.a([],h)
for(u=k.giA(k),t=0;s=k.a.w[k.e],r=s.b,t<r.length;++t){q=i?u:new C.bUq(k,t)
p=i&&t!==s.c&&t!==k.y?0.3:1
o=B.o.F(t,4)
n=D.aF1[o]
m=new A.aP(16,16)
l=new A.ax(i&&t===s.c?B.c:B.L,4,B.r,-1)
r=A.a([A.c(D.aFl[o],j,j,j,j,j,j,D.fGq,j,j,j),B.ar,new A.bu(1,B.b9,A.c(r[t],j,3,B.a2,j,j,j,D.fFm,j,j,j),j)],h)
if(i&&t===k.a.w[k.e].c)r.push(R.atl)
if(i&&t===k.y&&t!==k.a.w[k.e].c)r.push(D.c0Y)
v.push(A.aA(j,new A.Tq(A.p(j,new A.c1(B.aK,B.e,B.h,B.l,j,B.p,j,0,r,j),B.f,j,j,new A.o(n,j,new A.bE(l,l,l,l),new A.bb(m,m,m,m),A_.aDq,j,B.m),j,j,j,j,B.f2,j,j,j),p,B.aZ,B.a3,j,j),B.y,!1,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,q,j,j,j,j,j,j,!1,B.a4))}h=A.a([g,B.aj,f,B.af,w,B.af,A.E(A.lc(1.45,v,2,10,10,j,B.e8,!1),4)],h)
if(i)h.push(D.eCU)
return new A.D(B.a1S,A.x(h,B.l,j,B.e,B.h,0,B.p),j)},
cew(){var w,v,u,t,s,r,q,p=this,o=null,n=p.cOP(),m=x.p,l=A.a([D.bfc,A.at(A.c(""+p.x+" of "+p.a.w.length+" right",o,o,o,o,o,o,B.qr,o,o,o),o,o,o),A.at(A.c(""+p.f+" points \xb7 best streak "+p.w,o,o,o,o,o,o,D.WL,o,o,o),o,o,o),B.aO],m)
for(w=0;w<n.length;++w){v=n[w].c?B.d_.j(0.25):B.dx
u=new A.aP(14,14)
t=n[w]
s=t.c
r=new A.ax(s?B.d_:B.bx,1,B.r,-1)
q=A.c(w<3?D.doT[w]:""+(w+1),o,o,o,o,o,o,B.m9,o,o,o)
s=s?B.u:B.N
l.push(A.p(o,new A.c1(B.aK,B.e,B.h,B.l,o,B.p,o,0,A.a([new A.a5(34,o,q,o),new A.bu(1,B.b9,A.c(t.a,o,o,o,o,o,o,new A.G(!0,B.c,o,o,o,o,16,s,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o),o,o,o),o),A.c(""+t.b,o,o,o,o,o,o,B.iU,o,o,o)],m),o),B.f,o,o,new A.o(v,o,new A.bE(r,r,r,r),new A.bb(u,u,u,u),o,o,B.m),o,o,o,B.cB,B.eY,o,o,o))}l.push(B.R)
m=p.ay
v=p.ch
if(v===0)v=m
l.push(new C.IJ(m,v,p.CW,o))
l.push(B.aO)
l.push(A.at(C.uG("Back to the games",new C.bUn(p),B.d_,B.kk,D.fJ),o,o,o))
return A.co(l,o,o,B.f9,o,o,B.ah,!1)}}
C.UA.prototype={
R(){return new C.an_(A.S(x.de,x.er))}}
C.an_.prototype={
gDw(){var w,v=this,u=v.d
if(u===$){w=C.huA(v.a.c.ak())
v.d!==$&&A.bF()
v.d=w
u=w}return u},
glX(d){var w,v,u=this,t=u.e
if(t===$){w=u.gDw().b
v=$.az()
u.e!==$&&A.bF()
t=u.e=new A.au(new A.bd(w,B.b6,B.aP),v)}return t},
chD(d){return this.f.c_(0,d,new C.bTW(d))},
a_(){this.a3()
var w=this.gDw().c
if(w.length===0)w.push(C.hfX(null,0,20,""))},
t(){var w,v,u=this.glX(0)
u.V$=$.az()
u.W$=0
for(u=this.f,u=new A.dq(u,u.r,u.e);u.C();)for(w=J.aQ(u.d);w.C();){v=w.gP(w)
v.V$=$.az()
v.W$=0}this.a2()},
cNQ(){if(this.gDw().c.length>=12)return
this.l(new C.bTX(this))},
jI(d){var w,v,u=this,t=u.gDw()
t.b=B.a.i(u.glX(0).a.a)
w=t.gaqs(0)
if(t.b.length===0||w.length<2){u.c.L(x.q).f.T(D.fxl)
return}v=t.c
B.d.a6(v)
B.d.u(v,w)
v=u.c
v.toString
A.a7(v,!1).N(t)},
B(d){var w,v,u=this,t=null,s=new C.bU6(),r=x.p,q=A.a([A.bM(!1,D.fZx,t,t,!0,t,t,t,u.gbrR(u),t,t)],r),p=A.a([D.hdA,B.af,A.aN(t,B.Z,!1,t,!0,B.t,t,A.aO(),u.glX(0),t,t,t,t,t,2,s.$1("Name of the game"),B.y,!0,t,!0,t,!1,t,B.al,t,t,t,t,t,t,t,t,t,1,t,t,!1,"\u2022",t,t,t,t,t,!1,t,t,!1,t,!0,t,B.ae,t,t,t,t,t,t,t,t,t,t,t,B.hh,!0,B.a7,t,B.ao,t,t,t,t),B.aB],r)
for(w=0;v=u.gDw().c.length,w<v;++w)B.d.u(p,A.a([new A.fm(new C.bU5(u,w,s),t)],r))
if(v<12)p.push(A.at(C.uG("\uff0b Add a question",u.gcNP(),B.aT,t,B.c),t,t,t))
return new C.tP("Make your game",A.co(p,t,t,D.bH7,t,t,B.ah,!1),q,t)}}
C.as9.prototype={
R(){return new C.aGn(A.a([],x._))},
bw(){return this.r.$0()},
qt(){return this.w.$0()},
ge9(){return this.c}}
C.aGn.prototype={
a_(){var w,v
this.a3()
this.wE()
w=this.a
v=w.c
if(v.length!==0)C.a94(v,w.e,w.d.w)},
wu(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$wu=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=u.c
r.toString
t=u.a
s=t.d
w=2
return A.b(C.hrr(r,t.e,!1,s.w,new C.e7j(u),null,s),$async$wu)
case 2:w=3
return A.b(u.wE(),$async$wu)
case 3:return A.h(null,v)}})
return A.i($async$wu,v)},
a1s(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$a1s=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=u.c
r.toString
t=u.a
s=t.d
w=2
return A.b(C.hrr(r,t.e,!0,s.w,new C.e7i(u),null,s),$async$a1s)
case 2:w=3
return A.b(u.wE(),$async$a1s)
case 3:return A.h(null,v)}})
return A.i($async$a1s,v)},
wE(){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k
var $async$wE=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(C.BC(q.a.c),$async$wE)
case 7:p=e
if(q.c!=null)n=q.e||J.cJ(p)
else n=!1
if(n)q.l(new C.e7l(q,p))
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
return A.b(C.HF(q.a.c).de(0,B.r2),$async$wE)
case 12:o=e
if(q.c==null){r=[1]
w=10
break}q.l(new C.e7m(q,o))
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
if(q.c!=null&&q.e)q.l(new C.e7n(q))
w=r.pop()
break
case 11:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$wE,v)},
PL(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$PL=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:o=t.c
if(o==null){w=1
break}s=x.q
o.L(s).f.T(D.fwW)
w=3
return A.b(C.HF(t.a.c),$async$PL)
case 3:r=e
w=4
return A.b(C.h5n(t.a.c,r),$async$PL)
case 4:q=e
w=5
return A.b(C.HF(t.a.c),$async$PL)
case 5:p=e
if(t.c==null){w=1
break}t.l(new C.e7h(t,p))
o=t.c.L(s).f
s=A.c(q?"Family trees synced \u2014 "+J.ad(t.d)+" tree(s) on this phone and in the database.":"Could not sync to database. Run supabase/family_trees_table.sql in Supabase, then try again.",null,null,null,null,null,null,null,null,null,null)
o.T(A.b3(null,null,null,q?B.dR:B.d9,null,B.t,null,s,null,B.lW,null,null,null,null,null,null,null,null,null,null))
t.a.qt()
case 1:return A.h(u,v)}})
return A.i($async$PL,v)},
IT(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$IT=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:l=t.c
l.toString
w=3
return A.b(C.iD3(l),$async$IT)
case 3:s=e
if(s==null||t.c==null){w=1
break}r=B.a.i(s.a)
if(r.length===0){w=1
break}q=C.i5f(t.a.e)
l=t.c
l.toString
p=t.a
o=p.d
w=4
return A.b(C.b2J(q,p.e,l,"Each family tree costs $"+B.i.a5(q,2)+" (one-time per tree).",t.a.f,"Create Family Tree",o),$async$IT)
case 4:if(!e||t.c==null){w=1
break}l=B.o.v(1000*Date.now())
p=C.hLQ(r)
o=Date.now()
n=t.a.c
m=new C.lb(l,r.toUpperCase(),p,!0,B.Z,D.El,new A.W(o,0,!1),0,n,D.vj,B.cn)
w=5
return A.b(C.a4I(n,m),$async$IT)
case 5:w=6
return A.b(t.wE(),$async$IT)
case 6:t.a.bw()
t.a.qt()
if(t.c==null){w=1
break}t.Fo(m)
case 1:return A.h(u,v)}})
return A.i($async$IT,v)},
Fo(d){return this.cmC(d)},
cmC(d){var w=0,v=A.j(x.H),u=this,t,s,r,q,p,o,n,m,l,k
var $async$Fo=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:l=A
k=J
w=2
return A.b(C.BC(u.a.c),$async$Fo)
case 2:n=l.nK(k.dN(f,new C.e7k(d)))
m=u.c
m.toString
t=u.a
s=t.c
r=t.d
q=t.e
p=t.f
t=t.r
w=3
return A.b(A.hN(m,new C.as3(s,r,q,p,t,n==null?d:n,null),!1,"NgmyFamilyTreeDetailScreen",x.k),$async$Fo)
case 3:o=f
w=o!=null?4:5
break
case 4:w=6
return A.b(C.a4I(u.a.c,o),$async$Fo)
case 6:case 5:w=7
return A.b(u.wE(),$async$Fo)
case 7:u.a.qt()
return A.h(null,v)}})
return A.i($async$Fo,v)},
B(d){var w,v,u,t,s,r=this,q=null,p=A.Q(d).ax.a===B.I,o=new C.ur(p)
if(r.e)return A.at(A.nh(q,p?B.bv:B.bk,q,q,q,q,q,q,q,q),q,q,q)
if(J.cx(r.d)){w=p?B.el:B.c
v=A.n(15)
u=A.aG(!1,B.a3,!0,q,A.aM(!1,q,!0,A.p(q,D.bZt,B.f,q,q,new A.o(B.aV.j(0.12),q,A.K(B.aV,B.r,2),q,q,q,B.a6),q,52,q,q,q,q,q,52),B.cM,!0,q,q,q,q,q,q,q,q,q,q,q,r.gclD(),q,q,q,q,q,q,q),B.f,B.L,0,q,q,q,q,q,B.ai)
t=A.c("No Family Trees Yet",q,q,q,q,q,q,A.l(q,q,p?B.aS:B.aw,q,q,q,q,q,q,q,q,18,q,q,B.D,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
return new C.GG(A.p(q,A.x(A.a([u,B.aO,t,B.M,A.c("Create a family tree with names, photos, notes, and generations.",q,q,q,q,q,q,A.l(q,q,p?B.bv:B.bk,q,q,q,q,q,q,q,q,14,q,q,q,q,1.4,!0,q,q,q,q,q,q,q,q),B.K,q,q),B.ec,A.bI(D.hgS,q,r.gaUp(),A.bp(B.bT,q,q,q,q,q,Ak.a2f,q,new A.b9(A.n(12),B.a1),q,q,q))],x.p),B.l,q,B.e,B.h,0,B.p),B.f,q,q,new A.o(w,q,q,v,q,q,B.m),q,q,q,q,D.bJT,q,q,1/0),15,B.ag,1.05,D.aee,q)}w=J.ad(r.d)
v=x.p
w=A.a([A.c("Family Trees ("+w+")",q,q,q,q,q,q,A.l(q,q,p?B.aS:B.aw,q,q,q,q,q,q,q,q,16,q,q,B.D,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),B.aW],v)
if(J.cJ(r.d))w.push(A.aI(q,q,q,q,A.V(B.Ae,B.aV,q,q,q,q),q,q,q,new C.e7p(r),q,q,q,q,"Sync family trees with database",q))
if(J.cJ(r.d))w.push(A.aI(q,q,q,q,A.V(B.Aa,B.aV,q,q,q,q),q,q,q,r.gahV(),q,q,q,q,"Transfer / backup file",q))
w.push(A.db(E.aug,q,D.fWO,r.gaUp(),A.bp(B.bT,q,q,q,q,q,q,q,q,q,q,q)))
p=A.A(w,B.l,q,B.e,B.h,0,q,q)
w=A.a([],v)
for(s=0;s<J.ad(r.d);++s){u=A.a([],v)
if(s>0)u.push(B.af)
u.push(new C.GG(r.cJY(J.t(r.d,s),o),14,B.ag,1,D.aee,q))
B.d.u(w,u)}return A.x(A.a([p,B.aB,A.x(w,B.l,q,B.e,B.h,0,B.p)],v),B.B,q,B.e,B.h,0,B.p)},
cJY(d,e){var w=null,v=e.a,u=v?B.el:B.c,t=A.n(14),s=A.K((v?B.eo:B.bO).j(0.55),B.r,1),r=A.a([new A.aa(0,B.H,B.v.j(v?0.35:0.08),B.eC,10)],x.V),q=A.n(14),p=A.p(w,D.bYy,B.f,w,w,new A.o(B.aV.j(0.15),w,w,A.n(12),w,w,B.m),w,48,w,w,w,w,w,48),o=A.c(d.b,w,w,w,w,w,w,A.l(w,w,v?B.aS:B.aw,w,w,w,w,w,w,w,w,w,w,w,B.D,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),n=d.gars(),m=d.d?"":" \xb7 Public",l=d.y===D.l8?" \xb7 View only":"",k=x.p
l=A.E(A.x(A.a([o,B.bs,A.c(""+n+" members \xb7 Code: "+d.c+m+l,w,w,w,w,w,w,A.l(w,w,v?B.bv:B.bk,w,w,w,w,w,w,w,w,12,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],k),B.B,w,B.e,B.h,0,B.p),1)
return A.p(w,A.aG(!1,B.a3,!0,w,A.aM(!1,q,!0,new A.D(B.bF,A.A(A.a([p,B.bc,l,A.V(B.PW,v?B.bv:B.bk,w,w,w,w)],k),B.l,w,B.e,B.h,0,w,w),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.e7o(this,d),w,w,w,w,w,w,w),B.f,B.L,0,w,w,w,w,w,B.ai),B.f,w,w,new A.o(u,w,s,t,r,w,B.m),w,w,w,w,w,w,w,1/0)}}
C.as3.prototype={
R(){return new C.aGk(A.a([],x._),A.aR(x.N),A.bbv())},
bw(){return this.r.$0()},
ge9(){return this.c}}
C.aGk.prototype={
a_(){var w,v,u=this
u.a3()
u.d=u.a.w
u.aew()
w=u.a
v=w.c
if(v.length!==0)C.a94(v,w.e,w.d.w)},
t(){var w=this.w
w.V$=$.az()
w.W$=0
this.a2()},
a4t(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a4t=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!t.a.d.w){t.yJ("Only an admin can make a family tree public or private.")
w=1
break}s=t.d
s===$&&A.d()
r=!s.d
s=t.c
s.toString
w=3
return A.b(A.ce(null,null,!0,null,new C.e6K(r),s,null,!0,!0,x.y),$async$a4t)
case 3:if(e!==!0||t.c==null){w=1
break}t.Kz()
t.l(new C.e6L(t,r))
w=4
return A.b(t.uB(),$async$a4t)
case 4:t.a.bw()
t.yJ(r?"Family tree is now private.":"Family tree is now public for all users.")
case 1:return A.h(u,v)}})
return A.i($async$a4t,v)},
czm(d,e,f){var w=this,v=w.y,u=w.d
u===$&&A.d()
u=u.a
if(v===u&&w.x)return
w.x=!0
w.y=u
$.aU.U$.push(new C.e6F(w,f,d,e))},
aWI(d,e,f){var w,v,u=d.a,t=e.a,s=d.b,r=e.b,q=Math.min(1,Math.max(0.45,Math.min(u/t,s/r)))
t*=q
w=t<=u?(u-t)/2:u/2-f*q
u=r*q
v=u<=s?(s-u)/2:8
u=A.dy()
u.ei(w,v,0,1)
u.k0(q,q,1,1)
this.w.sp(0,u)},
beE(d,e){var w,v,u,t,s=this.w,r=s.a,q=new A.eR(new Float64Array(16))
q.ed(r)
w=q.DB()
v=B.i.D(w*d,0.2,3)/w
r=e.a/2
u=e.b/2
t=A.dy()
t.ei(r,u,0,1)
t.k0(v,v,1,1)
t.ei(-r,-u,0,1)
t.iX(0,q)
s.sp(0,t)},
aew(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$aew=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=A
r=J
w=2
return A.b(C.BC(u.a.c),$async$aew)
case 2:t=s.nK(r.dN(e,new C.e66(u)))
if(t!=null&&u.c!=null)u.l(new C.e67(u,t))
return A.h(null,v)}})
return A.i($async$aew,v)},
yJ(d){var w=null,v=this.c
if(v==null)return
v.L(x.q).f.T(A.b3(w,w,w,w,w,B.t,w,A.c(d,w,w,w,w,w,w,w,w,w,w),w,B.Y,w,w,w,w,w,w,w,w,w,w))},
wu(){var w=0,v=A.j(x.H),u=this,t,s,r,q,p,o,n,m
var $async$wu=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:o=u.c
o.toString
t=u.a
s=t.d
t=t.e
r=s.w
q=u.d
q===$&&A.d()
w=2
return A.b(C.hrr(o,t,!1,r,new C.e6o(u),q.a,s),$async$wu)
case 2:n=A
m=J
w=3
return A.b(C.HF(u.a.c),$async$wu)
case 3:p=n.nK(m.dN(e,new C.e6p(u)))
if(p!=null&&u.c!=null)u.l(new C.e6q(u,p))
return A.h(null,v)}})
return A.i($async$wu,v)},
Kz(){var w=this.e,v=this.d
v===$&&A.d()
w.push(v)
if(w.length>25)B.d.cJ(w,0)},
uB(){var w=0,v=A.j(x.H),u=this,t,s
var $async$uB=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a.c
s=u.d
s===$&&A.d()
w=2
return A.b(C.a4I(t,s),$async$uB)
case 2:return A.h(null,v)}})
return A.i($async$uB,v)},
a2Y(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$a2Y=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:q=t.d
q===$&&A.d()
if(!C.uH(q,t.a.c)){t.yJ("View only \u2014 you cannot rename this shared tree.")
w=1
break}q=t.c
q.toString
w=3
return A.b(C.iEg(q,"Save",t.d.b,"Family tree name","Edit family tree name"),$async$a2Y)
case 3:s=e
if(s==null||t.c==null){w=1
break}r=B.a.i(s).toUpperCase()
if(r.length===0){w=1
break}t.Kz()
t.l(new C.e6E(t,r))
w=4
return A.b(t.uB(),$async$a2Y)
case 4:case 1:return A.h(u,v)}})
return A.i($async$a2Y,v)},
b4C(){var w=this.c
w.toString
A.a7(w,!1).cc(A.eb(new C.e6l(this),!1,null,x.H))},
a1F(){return this.cmE()},
cmE(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$a1F=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:n={}
m=t.d
m===$&&A.d()
if(!C.uH(m,t.a.c)){t.yJ("View only \u2014 display settings are locked.")
w=1
break}m=t.c
m.toString
m=A.Q(m)
s=t.d
r=s.w
n.a=r
s=s.f
q=new A.X(s,new C.e6B(),A.U(s).k("X<1>")).gJ(0)
s=A.eA([0,2,3,4,5,6,8,r],x.S)
p=A.B(s,s.$ti.k("ch.E"))
B.d.fd(p)
s=t.c
s.toString
w=3
return A.b(A.bU(B.L,null,new C.e6C(n,t,new C.ur(m.ax.a===B.I),p,q),s,!0,!0,!0,null,!1,!1,x.bn),$async$a1F)
case 3:o=e
if(o==null||t.c==null){w=1
break}w=o.b!==t.d.w?4:5
break
case 4:t.Kz()
t.l(new C.e6D(t,o))
w=6
return A.b(t.uB(),$async$a1F)
case 6:case 5:if(o.a&&t.c!=null)t.b4C()
case 1:return A.h(u,v)}})
return A.i($async$a1F,v)},
Xb(d){return this.bFr(d)},
bFr(d){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Xb=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.d
r===$&&A.d()
if(!C.uH(r,t.a.c)){t.yJ("View only \u2014 you cannot add members to this shared tree.")
w=1
break}r=t.c
r.toString
w=3
return A.b(A.ce(null,null,!0,null,new C.e5V(t,d),r,null,!0,!0,x.P),$async$Xb)
case 3:s=f
if(s==null){w=1
break}t.Kz()
t.l(new C.e5W(t,s))
w=4
return A.b(t.uB(),$async$Xb)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Xb,v)},
a4O(d){return this.cMe(d)},
cMe(d){var w=0,v=A.j(x.H),u=this,t,s
var $async$a4O=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=u.c
s.toString
s=A.Q(s)
t=u.c
t.toString
w=2
return A.b(A.ce(null,null,!0,null,new C.e6N(u,d,new C.ur(s.ax.a===B.I)),t,null,!0,!0,x.H),$async$a4O)
case 2:return A.h(null,v)}})
return A.i($async$a4O,v)},
ciQ(d){var w=this,v=w.d
v===$&&A.d()
if(C.uH(v,w.a.c))w.Pq(d)
else w.a4O(d)},
akq(d,e){return this.cDp(d,e)},
cDp(d,e){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$akq=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=t.c
r.toString
r=A.Q(r)
s=t.c
if(s==null){w=1
break}w=3
return A.b(A.ce(null,null,!0,null,new C.e6H(new C.ur(r.ax.a===B.I),d,e),s,null,!0,!0,x.H),$async$akq)
case 3:case 1:return A.h(u,v)}})
return A.i($async$akq,v)},
IY(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$IY=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:o=t.d
o===$&&A.d()
w=o.y===D.l8?3:5
break
case 3:w=6
return A.b(C.he8(t.a.c),$async$IY)
case 6:s=e
o=t.a
r=C.hzr(o.e,o.c)
w=!s||!r?7:8
break
case 7:w=9
return A.b(t.akq(!s,!r),$async$IY)
case 9:w=1
break
case 8:w=4
break
case 5:if(!C.aSi(o,t.a.c)){t.yJ("Only the tree creator can delete this family tree.")
w=1
break}case 4:o=t.c
if(o==null){w=1
break}q=t.d
p=q.b
w=10
return A.b(A.lC(o,"Cancel","Remove",q.y===D.l8?'This removes "'+p+"\" from this phone only. The creator's copy is not affected.":'Delete "'+p+'" permanently? This cannot be undone.',"Remove family tree?"),$async$IY)
case 10:if(!e||t.c==null){w=1
break}w=11
return A.b(C.aSg(t.a.c,t.d.a),$async$IY)
case 11:t.a.bw()
o=t.c
if(o==null){w=1
break}A.ji(o,null)
case 1:return A.h(u,v)}})
return A.i($async$IY,v)},
abZ(d){return this.bQT(d)},
bQT(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$abZ=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:p={}
o=t.d
o===$&&A.d()
if(!C.uH(o,t.a.c)){w=1
break}s=t.d.f
r=d.e
p.a=r
if(r==null||!B.d.aR(s,new C.e5X(p))){o=A.U(s)
p.a=A.nK(new A.cO(new A.X(s,new C.e5Y(d),o.k("X<1>")),new C.e5Z(),o.k("cO<1,m>")))}q=p.a
if(q==null)q=d.d
t.Kz()
t.l(new C.e6_(t,s,d,q))
w=3
return A.b(t.uB(),$async$abZ)
case 3:t.yJ(d.b+" was removed. Tap Undo to bring them back.")
case 1:return A.h(u,v)}})
return A.i($async$abZ,v)},
Pq(d){return this.bT6(d)},
bT6(d){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Pq=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.d
r===$&&A.d()
w=!C.uH(r,t.a.c)?3:4
break
case 3:w=5
return A.b(t.a4O(d),$async$Pq)
case 5:w=1
break
case 4:r=t.c
r.toString
w=6
return A.b(A.ce(null,null,!0,null,new C.e63(t,d),r,null,!0,!0,x.P),$async$Pq)
case 6:s=f
if(s==null){w=1
break}t.Kz()
t.l(new C.e64(t,s))
w=7
return A.b(t.uB(),$async$Pq)
case 7:case 1:return A.h(u,v)}})
return A.i($async$Pq,v)},
cKp(){var w=this,v=w.d
v===$&&A.d()
if(!C.uH(v,w.a.c))return
if(w.e.length===0)return
w.l(new C.e6M(w))
w.uB()},
a_g(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$a_g=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:n=t.d
n===$&&A.d()
if(!C.aSi(n,t.a.c)){t.yJ("Only the tree creator can invite collaborators.")
w=1
break}n=t.c
n.toString
n=A.Q(n)
s=$.az()
r=new A.au(B.ax,s)
q=t.d.e
p=A.bt(new A.O(q,t.gchj(),A.U(q).k("O<1,m>")).c0(0,new C.e6g()),!0,x.N)
q=t.c
q.toString
w=3
return A.b(A.ce(null,null,!0,null,new C.e6h(t,new C.ur(n.ax.a===B.I),p,r),q,null,!0,!0,x.y),$async$a_g)
case 3:o=e
r.V$=s
r.W$=0
if(o!==!0||t.c==null){w=1
break}t.Kz()
t.l(new C.e6i(t,p))
w=4
return A.b(t.uB(),$async$a_g)
case 4:t.yJ("Collaborators updated.")
case 1:return A.h(u,v)}})
return A.i($async$a_g,v)},
chk(d){return B.a.i(d.toLowerCase())},
cln(){var w,v,u,t,s,r=this,q=r.c
q.toString
w=r.a.c
v=r.d
v===$&&A.d()
u=C.uH(v,w)
t=r.d
s=C.it5(t)
C.iD7(q,t.b,u,C.it4(r.d),s,v.a,w)},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=A.Q(d).ax.a===B.I,m=new C.ur(n),l=p.d
l===$&&A.d()
l=l.f
w=new A.X(l,new C.e6U(),A.U(l).k("X<1>")).gJ(0)
l=n?B.c7:B.hW
v=A.V(B.a3p,n?B.bv:B.bk,o,o,o,18)
u=x.p
v=A.a([new A.D(A3.D3,A.aM(!1,o,!0,new A.D(B.hz,A.A(A.a([v,B.bb,A.c("Back to Family Trees",o,o,o,o,o,o,A.l(o,o,n?B.bv:B.bk,o,o,o,o,o,o,o,o,o,o,o,B.a8,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],u),B.l,o,B.e,B.O,0,o,o),o),o,!0,o,o,o,o,o,o,o,o,o,o,o,new C.e6V(p,d),o,o,o,o,o,o,o),o),new A.D(B.o0,p.c3m(m),o)],u)
if(p.d.y===D.l8){t=B.u2.j(0.15)
s=A.n(12)
r=A.K(B.u2.j(0.45),B.r,1)
q=C.HD(p.d,p.a.c)
v.push(new A.D(B.zr,A.p(o,A.A(A.a([D.c37,B.ar,A.E(A.c("View only \u2014 shared by "+q+". You can keep up to 2 shared trees. Tap a member to view details.",o,o,o,o,o,o,A.l(o,o,n?B.aS:B.aw,o,o,o,o,o,o,o,o,12,o,o,B.a8,o,1.35,!0,o,o,o,o,o,o,o,o),o,o,o),1)],u),B.l,o,B.e,B.h,0,o,o),B.f,o,o,new A.o(t,o,r,s,o,o,B.m),o,o,o,o,B.hA,o,o,1/0),o))}u=A.a([A.c("Family Tree",o,o,o,o,o,o,A.l(o,o,n?B.aS:B.aw,o,o,o,o,o,o,o,o,15,o,o,B.D,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),B.aW],u)
if(C.uH(p.d,p.a.c)&&p.e.length!==0)u.push(new C.GR("Undo",B.q0,p.gcKo(),m,o,o))
u.push(new C.GR("Family Book",D.bT9,p.gclm(),m,B.uT,o))
u.push(new C.GR("Family games",B.o9,p.gcly(),m,B.az,o))
if(C.uH(p.d,p.a.c))u.push(new C.GR("Display settings",B.DS,p.gcmD(),m,B.b5,o))
u.push(new C.GR("Sync",B.Aa,p.gahV(),m,o,o))
t=p.d
if(t.y===D.l8||C.aSi(t,p.a.c)){t=p.d.y===D.l8?"Remove shared tree":"Delete tree"
u.push(new C.GR(t,B.eq,p.gbR2(),m,B.fq,o))}if(C.uH(p.d,p.a.c))u.push(new C.GR("Add member",B.xp,new C.e6W(p),m,B.bT,o))
v.push(new A.D(U.anT,A.A(u,B.l,o,B.e,B.h,0,o,o),o))
if(p.d.gars()===0){u=A.at(A.c("Add your first member to build the tree.",o,o,o,o,o,o,A.l(o,o,n?B.bv:B.bk,o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),o,o,o)
n=u}else n=A.cf(new C.e6X(p,m))
v.push(A.E(n,1))
if(w>0){n=p.f
u=A.V(n?P.a3t:Ad.PX,o,o,o,o,o)
v.push(A.at(A.hv(u,A.c(n?"Hide hidden members":""+w+" hidden",o,o,o,o,o,o,o,o,o,o),new C.e6Y(p),o),o,o,o))}return A.c5(o,l,A.bo(!0,A.x(v,B.B,o,B.e,B.h,0,B.p),!0,!1,B.ag,!0,!0),o,!1,!1,o,o)},
c3m(d){var w,v,u,t,s,r,q,p,o,n=this,m=null
n.d===$&&A.d()
w=A.n(22)
v=A.a([new A.aa(0,B.H,B.h6.j(0.35),B.du,18)],x.V)
u=A.n(22)
t=A.ao(-26,A.V(B.A2,B.c.j(0.08),m,m,m,130),m,m,m,-18,m,m)
s=A.aG(!1,B.a3,!0,m,A.aM(!1,m,!0,A.p(m,D.c6v,B.f,m,m,new A.o(B.c.j(0.16),m,A.K(B.c.j(0.45),B.r,1.5),m,m,m,B.a6),m,46,m,m,m,m,m,46),B.cM,!0,m,m,m,m,m,m,m,m,m,m,m,n.gahV(),m,m,m,m,m,m,m),B.f,B.L,0,m,m,m,m,m,B.ai)
r=n.d
q=A.c(r.b,m,1,B.a2,m,m,m,D.fHu,m,m,m)
r=r.gars()
p=n.d.gars()===1?"member":"members"
o=x.p
p=A.a([s,B.bc,A.E(A.x(A.a([q,B.bs,A.c(""+r+" "+p,m,m,m,m,m,m,A.l(m,m,B.c.j(0.8),m,m,m,m,m,m,m,m,12.5,m,m,B.a8,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)],o),B.B,m,B.e,B.h,0,B.p),1)],o)
if(C.uH(n.d,n.a.c))p.push(A.aI(m,m,m,m,D.c3m,m,m,m,n.gcwD(),m,m,m,m,"Rename",m))
s=A.A(p,B.l,m,B.e,B.h,0,m,m)
r=n.d.d
q=r?B.jF:B.nj
r=r?"Private":"Public"
r=A.E(n.ay0(q,"Privacy",r,n.a.d.w?n.gcJf():m),1)
q=A.E(n.ay0(B.xu,"Tree code",n.d.c,new C.e65(n)),1)
p=n.d.e.length
p=p===0?"Invite":""+p+" \xb7 Manage"
p=A.a([s,B.af,A.A(A.a([r,B.aa,q,B.aa,A.E(n.ay0(D.bUQ,"Collaborators",p,n.gc8n()),1)],o),B.l,m,B.e,B.h,0,m,m)],o)
if(n.d.y===D.l8){s=B.c.j(0.15)
B.d.u(p,A.a([B.M,A.aG(!1,B.a3,!0,A.n(999),A.aM(!1,A.n(999),!0,new A.D(B.fZ,A.A(A.a([A.V(B.oa,B.c,m,m,m,14),B.dZ,A.c("View only",m,m,m,m,m,m,B.acF,m,m,m)],o),B.l,m,B.e,B.O,0,m,m),m),m,!0,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),B.f,s,0,m,m,m,m,m,B.ai)],o))}return A.p(m,A.by(u,new A.am(B.a0,m,B.ad,B.t,A.a([t,new A.D(B.HH,A.x(p,B.B,m,B.e,B.h,0,B.p),m)],o),m),B.aq),B.f,m,m,new A.o(m,m,m,w,v,D.caR,B.m),m,m,m,m,m,m,m,1/0)},
ay0(d,e,f,g){var w=null,v=B.c.j(0.14)
return A.aG(!1,B.a3,!0,A.n(14),A.aM(!1,A.n(14),!0,new A.D(K.apd,A.x(A.a([A.V(d,B.c,w,w,w,18),B.at,A.c(e,w,1,B.a2,w,w,w,A.l(w,w,B.c.j(0.75),w,w,w,w,w,w,w,w,10.5,w,w,B.N,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.rJ,A.c(f,w,1,B.a2,w,w,w,AF.y3,w,w,w)],x.p),B.l,w,B.e,B.h,0,B.p),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,g,w,w,w,w,w,w,w),B.f,v,0,w,w,w,w,w,B.ai)}}
C.bim.prototype={
B(d){var w,v,u,t=null,s=this.d,r=s.a
if(r.gar(r)&&s.c.length===0)return B.bK
w=s.d
v=s.e
u=A.a([A.b4(t,t,t,new C.bip(s,t),new A.av(w,v))],x.p)
r=r.gdS(r)
B.d.u(u,r.dP(r,new C.dki(this),x.l))
r=s.c
B.d.u(u,new A.O(r,new C.dkj(this),A.U(r).k("O<1,w>")))
return new A.D(B.vf,new A.a5(w,v,new A.am(B.a0,t,B.ad,B.f,u,t),t),t)}}
C.Lc.prototype={}
C.GV.prototype={}
C.bio.prototype={
gbne(){var w,v=this,u=v.r
if(u!=null)return u+16
u=v.f
if(u==null)return v.d/2
w=v.a.h(0,u)
if(w==null)return v.d/2
return w.b.a+16}}
C.aM2.prototype={}
C.bip.prototype={
bSI(d,e,f,g){var w,v,u,t,s,r,q=f.a<=g.a,p=q?f:g,o=q?g:f,n=p.a+28+3,m=o.a-28-3
if(m<=n+2)return
w=(p.b+o.b)/2
q=$.T()
v=A.L()
v.r=B.bB.j(0.75).gp(0)
v.c=2
v.d=B.bG
d.ah(new A.r(n,w),new A.r(m,w),v)
u=(n+m)/2
t=new A.aH(q.r,B.ak,null,null,A.a([],x.v))
q=w+5.5
t.E(new A.aZ(u,q))
s=w-1.1
r=w-8.8
t.E(new A.i6(u-9.9,s,u-4.95,r,u,w-3.0250000000000004))
t.E(new A.i6(u+4.95,r,u+9.9,s,u,q))
t.E(new A.bA())
q=A.L()
q.r=B.c.gp(0)
d.O(new A.r(u,w),9,q)
q=A.L()
q.r=B.bB.gp(0)
d.af(t,q)},
bSF(d,e,f,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
if(a0.length===0)return
B.d.b0(a0,new C.dkD())
w=f.b
v=w+(B.d.gG(a0).b-w)/2
u=B.d.aR(a0,new C.dkE(f))
t=new A.O(a0,new C.dkF(f),A.U(a0).k("O<1,H>")).c0(0,new C.dkG()).cE(0,1/0,B.py)
w=f.a
d.ah(f,new A.r(w,u?v:v-Math.min(10,t/2)),e)
for(s=a0.length,r=x.v,q=0;q<a0.length;a0.length===s||(0,A.I)(a0),++q){p=a0[q]
o=p.a
n=o-w
m=Math.abs(n)
if(m<0.5){d.ah(new A.r(o,v),p,e)
continue}l=J.m1(n)
k=Math.min(10,m/2)
m=$.T()
j=A.a([],r)
i=new A.aH(m.r,B.ak,null,null,j)
j.push(new A.aZ(w,v-k))
i.ac()
m=l*k
h=new A.cj(w,v,w+m,v)
j.push(h)
g=i.f
if(g!=null)h.aj(g)
i.ac()
m=new A.aq(o-m,v)
j.push(m)
h=i.f
if(h!=null)m.aj(h)
i.ac()
m=new A.cj(o,v,o,v+k)
j.push(m)
h=i.f
if(h!=null)m.aj(h)
i.ac()
o=new A.aq(o,p.b)
j.push(o)
m=i.f
if(m!=null)o.aj(m)
i.ac()
d.af(i,e)}},
a4(d,e){var w,v,u,t,s,r
$.T()
w=A.L()
w.r=B.bT.j(0.75).gp(0)
w.c=2.2
w.b=B.ac
w.d=B.bG
w.e=B.dP
for(v=this.b.b,u=v.length,t=0;s=v.length,t<s;v.length===u||(0,A.I)(v),++t){r=v[t]
s=r.d
if(s!=null&&s.length!==0)this.bSF(d,w,r.a,s)
else{if(!r.c){s=r.b
s=!(0===s.a&&0===s.b)}else s=!1
if(s)d.ah(r.a,r.b,w)}}for(t=0;t<v.length;v.length===s||(0,A.I)(v),++t){r=v[t]
if(r.c)this.bSI(d,w,r.a,r.b)}},
aD(d){return d.b!==this.b}}
C.bmc.prototype={
gcey(){var w=this.c
if(B.a.i(w.y).length!==0)return B.aFC
switch(w.c.a){case 0:return D.d4z
case 1:return D.di6
case 2:return D.dBu}},
gceB(){var w=this.c,v=C.hL2(w.w),u=C.hL2(w.y)
w=v!=null
if(w&&u!=null)return v+" \u2013 "+u
if(w)return"b. "+v
if(u!=null)return"\u2020 "+u
return""},
B(d){var w,v,u,t=this,s=null,r=A.Q(d).ax.a===B.I,q=t.gcey(),p=t.c,o=O.bH8(p.f),n=t.gceB(),m=x.V,l=A.a([new A.aa(0,B.H,B.d.gal(q).j(0.35),B.cP,10)],m),k=r?B.aw:B.c,j=A.K(r?B.aw:B.c,B.r,2)
if(o!=null)w=A.tT(B.z,s,B.cs,B.c_,!1,s,o,!1,s,s)
else{w=A.a([B.d.gG(q).j(0.18),B.d.gal(q).j(0.28)],x.O)
v=B.a.i(p.b)
v=v.length===0?"?":v[0].toUpperCase()
w=A.p(B.z,A.c(v,s,s,s,s,s,s,A.l(s,s,B.d.gal(q),s,s,s,s,s,s,s,s,20,s,s,B.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),B.f,s,s,new A.o(s,s,s,s,s,new A.a8(B.a5,B.a9,B.x,w,s,s),B.m),s,s,s,s,s,s,s,s)}v=x.p
l=A.a([A.p(s,A.p(s,A.id(w,B.aq),B.f,s,s,new A.o(k,s,j,s,s,s,B.a6),s,s,s,s,s,s,s,s),B.f,s,s,new A.o(s,s,s,s,l,new A.a8(B.ay,B.aD,B.x,q,s,s),B.a6),s,56,s,s,B.Dg,s,s,56)],v)
k=t.d
if(k>0){j=A.n(10)
w=A.K(r?B.aw:B.c,B.r,1.5)
l.push(A.ao(s,A.p(s,A.c(""+k,s,s,s,s,s,s,D.fSv,s,s,s),B.f,s,s,new A.o(B.ch,s,w,j,s,s,B.m),s,s,s,s,D.bLO,s,s,s),s,s,s,-6,-4,s))}k=r?B.cx:B.c
j=A.n(8)
w=A.K(B.d.gG(q).j(0.35),B.r,1)
m=A.a([new A.aa(0,B.H,B.v.j(r?0.3:0.06),B.dS,6)],m)
p=B.a.i(p.b)
u=p.length
if(u<=24)u=9.5
else u=u<=32?8.2:7.2
p=A.a([A.c(p,s,4,s,s,s,s,A.l(s,s,r?B.c:B.cx,s,s,s,s,s,s,s,s,u,s,s,B.D,s,1.15,!0,s,s,s,s,s,s,s,s),B.K,s,s)],v)
if(n.length!==0)p.push(A.c(n,s,1,s,s,s,s,A.l(s,s,r?B.aR:B.bk,s,s,s,s,s,s,s,s,7.5,s,s,B.a8,s,1.1,!0,s,s,s,s,s,s,s,s),s,s,s))
return A.aA(s,new A.a5(84,112,A.x(A.a([new A.am(B.a0,s,B.ad,B.f,l,s),B.at,A.p(s,A.x(p,B.l,s,B.e,B.O,0,B.p),B.f,s,D.b9l,new A.o(k,s,w,j,m,s,B.m),s,s,s,s,D.bLZ,s,s,s)],v),B.l,s,B.e,B.h,0,B.p),s),B.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,t.e,s,s,s,s,s,s,!1,B.a4)}}
C.bhp.prototype={
a4(d,e){var w,v,u,t,s
$.T()
w=A.L()
v=this.b
u=v?B.c:D.bmx
w.r=u.j(v?0.05:0.09).gp(0)
for(v=e.b,u=e.a,t=10;t<v;t+=20)for(s=10;s<u;s+=20)d.O(new A.r(s,t),1,w)},
aD(d){return d.b!==this.b}}
C.bAm.prototype={
B(d){var w=this,v=null,u=new C.fuo(w),t=w.c,s=t?B.cx:B.c,r=A.n(12),q=u.$3(B.id,"Zoom in",w.d),p=A.p(v,v,B.f,t?B.bx:B.fA,v,v,v,1,v,v,v,v,v,22),o=u.$3(B.xr,"Zoom out",w.e)
return A.aG(!1,B.a3,!0,r,A.x(A.a([q,p,o,A.p(v,v,B.f,t?B.bx:B.fA,v,v,v,1,v,v,v,v,v,22),u.$3(B.arH,"Fit the whole tree",w.f)],x.p),B.l,v,B.e,B.O,0,B.p),B.f,s,4,v,B.dJ,v,v,v,B.ai)}}
C.bpz.prototype={
B(d){var w=this,v=null,u=B.bT.j(0.15),t=A.K(B.bT,B.r,2),s=w.e,r=x.p
t=A.aA(v,A.p(v,A.x(A.a([A.V(s?P.a3t:Ad.PX,B.bT,v,v,v,22),A.c("+"+w.c,v,v,v,v,v,v,D.fOr,v,v,v)],r),B.l,v,B.ba,B.h,0,B.p),B.f,v,v,new A.o(u,v,t,v,v,v,B.a6),v,56,v,v,v,v,v,56),B.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,w.f,v,v,v,v,v,v,!1,B.a4)
u=A.a([t,B.aj,A.c(s?"SHOW LESS":"MORE KIDS",v,v,v,v,v,v,D.fMb,B.K,v,v)],r)
if(s){t=A.a([B.aj],r)
s=w.d
B.d.u(t,new A.O(s,new C.f4c(w),A.U(s).k("O<1,w>")))
B.d.u(u,t)}return new A.a5(84,v,A.x(u,B.l,v,B.e,B.h,0,B.p),v)}}
C.a0U.prototype={
R(){return new C.aEN()},
bw(){return this.Q.$0()},
ge9(){return this.w}}
C.aEN.prototype={
a_(){var w,v,u,t,s,r=this,q=null
r.a3()
w=r.a
v=w.d
u=v==null
t=u?q:v.b
if(t==null)t=""
s=$.az()
r.d!==$&&A.aS()
r.d=new A.au(new A.bd(t,B.b6,B.aP),s)
t=u?q:v.r
if(t==null)t=""
r.e!==$&&A.aS()
r.e=new A.au(new A.bd(t,B.b6,B.aP),s)
t=u?q:v.w
if(t==null)t=""
r.f!==$&&A.aS()
r.f=new A.au(new A.bd(t,B.b6,B.aP),s)
t=u?q:v.x
if(t==null)t=""
r.r!==$&&A.aS()
r.r=new A.au(new A.bd(t,B.b6,B.aP),s)
t=u?q:v.y
if(t==null)t=""
r.w!==$&&A.aS()
r.w=new A.au(new A.bd(t,B.b6,B.aP),s)
t=u?q:v.z
if(t==null)t=""
r.x!==$&&A.aS()
r.x=new A.au(new A.bd(t,B.b6,B.aP),s)
t=u?q:v.c
r.y=t==null?D.zG:t
t=u?q:v.d
r.z=t==null?w.f:t
r.Q=u?q:v.e
r.as=u?q:v.f
t=u?q:v.Q
if(t==null)w=C.iuD(w.r,w.f)
else w=t
r.at=w
w=u?q:v.at
r.ax=w==null?0:w
w=u?q:v.as
r.ay=w===!0},
t(){var w,v=this,u=v.d
u===$&&A.d()
w=u.V$=$.az()
u.W$=0
u=v.e
u===$&&A.d()
u.V$=w
u.W$=0
u=v.f
u===$&&A.d()
u.V$=w
u.W$=0
u=v.r
u===$&&A.d()
u.V$=w
u.W$=0
u=v.w
u===$&&A.d()
u.V$=w
u.W$=0
u=v.x
u===$&&A.d()
u.V$=w
u.W$=0
v.a2()},
QW(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$QW=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.a
o=C.hzr(p.y,p.w)
w=3
return A.b(A.lT(t.a.w,B.Kl),$async$QW)
case 3:n=e
w=!o&&!n&&!t.a.x.w?4:5
break
case 4:p=t.c
p.toString
s=t.a
r=s.x
w=6
return A.b(C.b2J(0,s.y,p,"Subscribe to upload family photos (30 days).",s.z,"Family Tree Photos",r),$async$QW)
case 6:if(!e||t.c==null){w=1
break}p=t.a
C.i5g(p.y,p.w)
t.a.bw()
case 5:w=7
return A.b(Am.DX(78,800),$async$QW)
case 7:q=e
if(q!=null&&t.c!=null)t.l(new C.dAT(t,q))
case 1:return A.h(u,v)}})
return A.i($async$QW,v)},
ceA(){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=l.d
k===$&&A.d()
w=B.a.i(k.a.a).toUpperCase()
if(w.length===0)return
k=l.c
k.toString
v=l.a.d
if(v==null)v=new C.ig(B.o.v(1000*Date.now()),w,D.zG,null,null,null,"","","","","",1,!1,0)
u=l.y
u===$&&A.d()
t=l.z
s=l.Q
r=l.as
q=l.e
q===$&&A.d()
q=B.a.i(q.a.a)
p=l.f
p===$&&A.d()
p=B.a.i(p.a.a)
o=l.r
o===$&&A.d()
o=B.a.i(o.a.a)
n=l.w
n===$&&A.d()
n=B.a.i(n.a.a)
m=l.x
m===$&&A.d()
m=B.a.i(m.a.a)
s=v.aHh(p,l.at,o,n,u,l.ay,w,q,m,t,r,s,l.ax)
A.a7(k,!1).N(s)},
abA(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$abA=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a.d
r=s==null?null:B.a.i(s.b)
if(r==null)r=""
s=t.c
s.toString
w=3
return A.b(A.ce(null,null,!0,null,new C.dAS(r),s,null,!0,!0,x.y),$async$abA)
case 3:if(e!==!0||t.c==null){w=1
break}s=t.c
s.toString
A.a7(s,!1).N(null)
s=t.a.as
if(s!=null)s.$0()
case 1:return A.h(u,v)}})
return A.i($async$abA,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=A.Q(d).ax.a===B.I,i=new C.ur(j),h=l.a.e,g=A.U(h).k("X<1>"),f=A.B(new A.X(h,new C.dB1(l),g),g.k("M.E"))
h=j?B.el:B.c
g=A.n(22)
w=l.a.c
v=x.p
w=A.a([new A.D(D.bKd,A.c(w,k,k,k,k,k,k,A.l(k,k,j?B.aS:B.aw,k,k,k,k,k,k,k,k,17,k,k,B.u,k,k,!0,k,0.3,k,k,k,k,k,k),B.K,k,k),k)],v)
u=l.a
if(u.as!=null&&u.d!=null)w.push(A.ao(k,A.h9(A.aM(!1,k,!0,new A.D(B.m_,A.V(B.eq,B.pL,k,k,k,17),k),B.cM,!0,k,k,k,k,k,k,k,k,k,k,k,l.gbNA(),k,k,k,k,k,k,k),k,"Delete member",k,k,k),k,k,k,0,k,k))
u=j?B.ka:B.iL
t=O.bH8(l.as)
if(l.as==null)s=A.V(B.pU,j?B.bv:B.bk,k,k,k,40)
else s=k
s=A.at(A.aA(k,new A.am(B.a0,k,B.ad,B.t,A.a([A.hn(u,t,s,k,42),A.ao(0,A.hn(B.bT,k,D.bXB,k,14),k,k,k,0,k,k)],v),k),B.y,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,l.gcex(),k,k,k,k,k,k,!1,B.a4),k,k,k)
t=l.d
t===$&&A.d()
t=C.aEP(t,"Full name",B.mt,1,1,i,B.mK)
u=l.y
u===$&&A.d()
u=A.x(A.a([t,B.R,new C.bma(i,u,new C.dB2(l),k)],v),B.l,k,B.e,B.h,0,B.p)
t=A.c("1. Parent",k,k,k,k,k,k,A.l(k,k,j?B.bv:B.bk,k,k,k,k,k,k,k,k,11,k,k,B.D,k,k,!0,k,0.3,k,k,k,k,k,k),k,k,k)
r=l.z
q=x.ac
p=A.a([D.bDu],q)
o=l.a.e
B.d.u(p,new A.O(o,new C.dB3(),A.U(o).k("O<1,eN<m?>>")))
o=x.bw
n=A.c("2. Spouse",k,k,k,k,k,k,A.l(k,k,j?B.bv:B.bk,k,k,k,k,k,k,k,k,11,k,k,B.D,k,k,!0,k,0.3,k,k,k,k,k,k),k,k,k)
m=l.Q
q=A.a([D.bDw],q)
B.d.u(q,new A.O(f,new C.dB5(),A.U(f).k("O<1,eN<m?>>")))
o=A.x(A.a([t,B.aj,new C.af8(i,r,"Who is their parent?",p,new C.dB6(l),k,o),B.aB,n,B.aj,new C.af8(i,m,"Who is their spouse / partner?",q,new C.dB7(l),k,o)],v),B.am,k,B.e,B.h,0,B.p)
q=l.f
q===$&&A.d()
q=C.aEP(q,"Birth date",D.aqR,1,1,i,k)
m=l.r
m===$&&A.d()
m=C.aEP(m,"Birth place",B.a3J,1,1,i,k)
n=l.w
n===$&&A.d()
n=C.aEP(n,"Date of death (if deceased)",D.asZ,1,1,i,k)
p=l.x
p===$&&A.d()
p=C.aEP(p,"Occupation",A1.R_,1,1,i,k)
r=l.e
r===$&&A.d()
r=A.a([new A.am(B.z,k,B.ad,B.t,w,k),B.aB,s,B.by,new C.af9(i,"Identity",u,k),B.af,new C.af9(i,"Family links",o,k),B.af,new C.af9(i,"Life details",A.x(A.a([q,B.R,m,B.R,n,B.R,p,B.R,C.aEP(r,"Notes",B.la,5,3,i,k)],v),B.l,k,B.e,B.h,0,B.p),k),B.af,new C.aEO(i,"Child order",l.cmU(l.at),new C.dB8(l),new C.dB9(l),k)],v)
w=l.a
u=w.d
if(u!=null)w=C.hop(w.r,u.a).length!==0
else w=!1
if(w){w=l.ax
u=w===0?"Uses tree default":"Show "+w+", rest in menu"
w=w>0?new C.dBa(l):k
B.d.u(r,A.a([B.R,new C.aEO(i,"Visible in tree",u,w,new C.dBb(l),k)],v))}r.push(B.R)
w=j?B.ka:B.iL
u=A.n(14)
t=A.K(j?B.eo:B.bO,B.r,1)
s=A.c("Hidden member",k,k,k,k,k,k,A.l(k,k,j?B.aS:B.aw,k,k,k,k,k,k,k,k,14,k,k,B.N,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)
r.push(A.p(k,A.j8(k,B.bT,k,B.ag,k,new C.dBc(l),k,A.c("Hide from the tree canvas",k,k,k,k,k,k,A.l(k,k,j?B.bv:B.bk,k,k,k,k,k,k,k,k,11,k,k,k,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),k,s,l.ay),B.f,k,k,new A.o(w,k,t,u,k,k,B.m),k,k,k,k,P.any,k,k,k))
r.push(B.by)
w=j?B.aS:B.aw
j=j?B.eo:B.bO
r.push(A.A(A.a([A.E(A.dY(B.oq,new C.dB4(d),A.dk(k,k,k,k,k,k,k,k,k,w,k,k,B.cq,k,new A.b9(A.n(14),B.a1),new A.ax(j,1,B.r,-1),k,k,k,k)),1),B.bc,A.E(A.bI(D.fox,k,l.gcez(),A.bp(B.aV,k,k,0,B.c,k,B.cq,k,new A.b9(A.n(14),B.a1),k,k,k)),2)],v),B.l,k,B.e,B.h,0,k,k))
r.push(B.at)
return A.ei(B.ff,k,B.ag,h,new A.a5(420,k,A.cb(A.x(r,B.am,k,B.e,B.O,0,B.p),B.t,k,B.y,k,k,k,k,k,B.ah),k),D.aot,k,B.anJ,new A.b9(g,B.a1),k,k)},
cmU(d){var w=B.o.F(d,100)
if(w>=11&&w<=13)return""+d+"th child"
w=""+d
switch(B.o.F(d,10)){case 1:return w+"st child"
case 2:return w+"nd child"
case 3:return w+"rd child"
default:return w+"th child"}}}
C.af9.prototype={
B(d){var w=null,v=this.c.a,u=A.c(this.d.toUpperCase(),w,w,w,w,w,w,A.l(w,w,v?B.bv:B.bk,w,w,w,w,w,w,w,w,10,w,w,B.D,w,w,!0,w,1.1,w,w,w,w,w,w),w,w,w),t=v?B.ka:B.iL,s=A.n(16)
return A.x(A.a([new A.D(B.a2j,u,w),A.p(w,this.e,B.f,w,w,new A.o(t,w,A.K(v?B.eo:B.bO,B.r,1),s,w,w,B.m),w,w,w,w,B.bg,w,w,1/0)],x.p),B.B,w,B.e,B.h,0,B.p)}}
C.bmb.prototype={
B(d){var w,v=this,u=null,t=v.c.a,s=t?B.el:B.c,r=A.n(12),q=A.K((t?B.eo:B.bO).j(0.85),B.r,1),p=v.r
if(p==null)p=B.ao
w=A.l(u,u,t?B.aS:B.aw,u,u,u,u,u,u,u,u,14,u,u,B.a8,u,u,!0,u,u,u,u,u,u,u,u)
return A.p(u,A.aN(u,B.Z,!1,u,!0,B.t,u,A.aO(),v.d,u,u,u,u,u,2,A.bC(u,B.eV,u,B.tA,u,u,u,u,!0,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,A.l(u,u,t?B.bv:B.bk,u,u,u,u,u,u,u,u,u,u,u,B.cH,u,u,!0,u,u,u,u,u,u,u,u),v.e,u,u,u,u,u,u,u,u,u,!0,!0,!1,u,A.V(v.f,B.bT,u,u,u,20),u,u,u,u,u,u,u,u,u,u,u,u),B.y,!0,u,!0,u,!1,u,B.al,u,u,u,u,u,u,u,u,u,v.x,v.w,u,!1,"\u2022",u,u,u,u,u,!1,u,u,!1,u,!0,u,B.ae,u,u,u,u,u,u,u,u,u,u,u,w,!0,B.a7,u,p,u,u,u,u),B.f,u,u,new A.o(s,u,q,r,u,u,B.m),u,u,u,u,u,u,u,u)}}
C.af8.prototype={
B(d){var w=this,v=null,u=w.c.a,t=u?B.el:B.c,s=A.n(12),r=A.K((u?B.eo:B.bO).j(0.85),B.r,1),q=A.V(B.tK,u?B.bv:B.bk,v,v,v,v),p=A.l(v,v,u?B.aS:B.aw,v,v,v,v,v,v,v,v,14,v,v,B.a8,v,v,!0,v,v,v,v,v,v,v,v),o=u?B.el:B.c
return A.p(v,new A.EK(A.a6e(v,o,A.c(w.f,v,v,v,v,v,v,A.l(v,v,u?B.bv:B.bk,v,v,v,v,v,v,v,v,v,v,v,B.cH,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),q,!1,!0,w.r,w.w,p,v,w.d,w.$ti.c),v),B.f,v,v,new A.o(t,v,r,s,v,v,B.m),v,v,v,v,B.l6,v,v,v)}}
C.bma.prototype={
B(d){var w=new C.dBd(this)
return A.A(A.a([w.$3(D.xb,"Male",B.QK),B.aa,w.$3(D.oU,"Female",B.Qv),B.aa,w.$3(D.zG,"Other",B.o7)],x.p),B.l,null,B.e,B.h,0,null,null)}}
C.aEO.prototype={
B(d){var w=this,v=null,u=w.c,t=u.a,s=t?B.ka:B.iL,r=A.n(14),q=A.K(t?B.eo:B.bO,B.r,1),p=A.c(w.d,v,v,v,v,v,v,A.l(v,v,t?B.aS:B.aw,v,v,v,v,v,v,v,v,13,v,v,B.D,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),o=x.p
return A.p(v,A.A(A.a([A.E(A.x(A.a([p,A.c(w.e,v,v,v,v,v,v,A.l(v,v,t?B.bv:B.bk,v,v,v,v,v,v,v,v,11,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],o),B.B,v,B.e,B.h,0,B.p),1),new C.aL4(u,B.xr,w.f,v),B.bb,new C.aL4(u,B.id,w.r,v)],o),B.l,v,B.e,B.h,0,v,v),B.f,v,v,new A.o(s,v,q,r,v,v,B.m),v,v,v,v,B.ep,v,v,v)}}
C.aL4.prototype={
B(d){var w,v,u,t,s=this,r=null,q=s.e,p=q!=null
if(p)w=B.bT.j(0.12)
else w=s.c.a?B.el:B.c
v=A.n(10)
u=A.n(10)
if(p)t=B.bT
else t=(s.c.a?B.bv:B.bk).j(0.4)
return A.aG(!1,B.a3,!0,v,A.aM(!1,u,!0,new A.a5(36,36,A.V(s.d,t,r,r,r,20),r),r,!0,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,r),B.f,w,0,r,r,r,r,r,B.ai)}}
C.afa.prototype={
bWV(d){switch(d.a){case 0:return B.bT
case 1:return B.bB
case 2:return B.cE}},
bWW(d){switch(d.a){case 0:return"Male"
case 1:return"Female"
case 2:return"Not specified"}},
b0e(d){var w,v,u,t
if(d==null||d.length===0)return"\u2014"
for(w=this.d.f,v=w.length,u=0;u<v;++u){t=w[u]
if(t.a===d)return t.b}return"\u2014"},
B2(d,e,f){var w,v,u,t,s,r,q,p=null,o=B.a.i(e)
if(o.length===0)o="\u2014"
w=this.e.a
v=w?B.el:B.c
u=A.n(12)
t=A.K((w?B.eo:B.bO).j(0.85),B.r,1)
s=x.p
r=A.a([],s)
B.d.u(r,A.a([A.V(f,B.bT,p,p,p,18),B.ar],s))
q=A.c(d.toUpperCase(),p,p,p,p,p,p,A.l(p,p,w?B.bv:B.bk,p,p,p,p,p,p,p,p,9,p,p,B.D,p,p,!0,p,0.8,p,p,p,p,p,p),p,p,p)
r.push(A.E(A.x(A.a([q,B.at,A.c(o,p,p,p,p,p,p,A.l(p,p,w?B.aS:B.aw,p,p,p,p,p,p,p,p,14,p,p,B.N,p,1.35,!0,p,p,p,p,p,p,p,p),p,p,p)],s),B.B,p,B.e,B.h,0,B.p),1))
return A.p(p,A.A(r,B.B,p,B.e,B.h,0,p,p),B.f,p,p,new A.o(v,p,t,u,p,p,B.m),p,p,p,B.cB,B.zo,p,p,1/0)},
agg(d,e){var w=null,v=this.e.a,u=A.c(d.toUpperCase(),w,w,w,w,w,w,A.l(w,w,v?B.bv:B.bk,w,w,w,w,w,w,w,w,10,w,w,B.D,w,w,!0,w,1.1,w,w,w,w,w,w),w,w,w),t=v?B.ka:B.iL,s=A.n(16),r=A.K(v?B.eo:B.bO,B.r,1)
return A.x(A.a([new A.D(B.a2j,u,w),A.p(w,A.x(e,B.l,w,B.e,B.h,0,B.p),B.f,w,w,new A.o(t,w,r,s,w,w,B.m),w,w,w,w,B.bR,w,w,1/0)],x.p),B.B,w,B.e,B.h,0,B.p)},
B(d){var w,v,u,t=this,s=null,r=t.d,q=t.c,p=C.hQz(r,q),o=q.c,n=t.bWV(o),m=O.bH8(q.f),l=t.e.a,k=l?B.el:B.c,j=A.n(22),i=q.b,h=A.c(i,s,s,s,s,s,s,A.l(s,s,l?B.aS:B.aw,s,s,s,s,s,s,s,s,18,s,s,B.u,s,s,!0,s,s,s,s,s,s,s,s),B.K,s,s)
r=r.y===D.l8?"Shared family tree \xb7 view only":"Member profile"
r=A.c(r,s,s,s,s,s,s,A.l(s,s,l?B.bv:B.bk,s,s,s,s,s,s,s,s,12,s,s,B.a8,s,s,!0,s,s,s,s,s,s,s,s),B.K,s,s)
w=A.K(n,B.r,3)
v=A.a([new A.aa(0,B.H,n.j(0.25),B.J,12)],x.V)
u=n.j(0.12)
l=A.at(A.p(s,A.hn(u,m,m==null?A.V(B.pU,n,s,s,s,48):s,s,52),B.f,s,s,new A.o(s,s,w,s,v,s,B.a6),s,s,s,s,B.eA,s,s,s),s,s,s)
w=n.j(0.14)
v=A.n(20)
u=A.K(n.j(0.45),B.r,1)
v=A.at(A.p(s,A.c(t.bWW(o),s,s,s,s,s,s,A.l(s,s,n,s,s,s,s,s,s,s,s,12,s,s,B.D,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),B.f,s,s,new A.o(w,s,u,v,s,s,B.m),s,s,s,s,B.lY,s,s,s),s,s,s)
u=x.p
i=A.a([t.B2("Full name",i,B.mt)],u)
if(p>0)i.push(t.B2("Child order","#"+p,B.QB))
r=A.a([h,B.at,r,B.aO,l,B.R,v,B.by,t.agg("Identity",i),B.af,t.agg("Life details",A.a([t.B2("Birth date",q.w,D.aqR),t.B2("Birth place",q.x,B.a3J),t.B2("Date of death",q.y,D.asZ),t.B2("Occupation",q.z,A1.R_)],u)),B.af,t.agg("Family links",A.a([t.B2("1. Parent",t.b0e(q.d),B.I8),t.B2("2. Spouse",t.b0e(q.e),B.Ip)],u))],u)
q=q.r
if(B.a.i(q).length!==0)B.d.u(r,A.a([B.af,t.agg("Notes",A.a([t.B2("Notes",q,B.la)],u))],u))
r.push(B.by)
r.push(A.bI(B.LT,s,new C.dBn(d),A.bp(B.aV,s,s,s,s,s,B.cq,s,new A.b9(A.n(14),B.a1),s,s,s)))
return A.eH(s,k,new A.cS(B.mh,A.cb(A.x(r,B.am,s,B.e,B.O,0,B.p),B.t,s,B.y,s,s,B.x5,s,s,B.ah),s),s,s,s,B.HK,s,B.dd,s,new A.b9(j,B.a1),s)}}
C.GR.prototype={
B(d){var w,v=this,u=null,t=v.r
if(t==null)t=v.f.a?B.bv:B.bk
w=t.j(v.f.a?0.14:0.08)
return new A.D(B.vh,A.h9(A.aG(!1,B.a3,!0,A.n(8),A.aM(!1,A.n(8),!0,new A.a5(30,30,A.V(v.d,t,u,u,u,16),u),u,!0,u,u,u,u,u,u,u,u,u,u,u,v.e,u,u,u,u,u,u,u),B.f,w,0,u,u,u,u,u,B.ai),u,v.c,u,u,u),u)}}
C.as6.prototype={
f4(){var w,v,u=this,t=x.N,s=A.S(t,x.z)
s.n(0,"marker","ngmyFamilyTreeSync")
s.n(0,"version",1)
s.n(0,"code",u.a)
s.n(0,"ownerEmail",u.b)
s.n(0,"exportedAt",u.d.aa().ag())
w=u.c
v=A.U(w).k("O<1,a9<m,@>>")
w=A.B(new A.O(w,new C.chv(),v),v.k("aj.E"))
s.n(0,"trees",w)
w=u.e
if(w.a!==0)s.n(0,"familyBooks",w.iW(w,new C.chw(),t,x.fO))
return s}}
C.as7.prototype={
R(){return new C.aGm(A.a([],x.bF))},
gd6(){return this.c}}
C.aGm.prototype={
a_(){this.a3()
this.KG()},
KG(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$KG=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.chz(t.a.c),$async$KG)
case 3:r=e
w=4
return A.b(C.BC(t.a.c),$async$KG)
case 4:q=e
p=t.a
if(!p.r)s=p.e||J.rB(q,new C.e76(t))
else s=!1
if(t.c==null){w=1
break}t.l(new C.e77(t,r,s))
case 1:return A.h(u,v)}})
return A.i($async$KG,v)},
zk(d){var w=null,v=this.c
if(v==null)return
v.L(x.q).f.T(A.b3(w,w,w,w,w,B.t,w,A.c(d,w,w,w,w,w,w,w,w,w,w),w,B.Y,w,w,w,w,w,w,w,w,w,w))},
Lw(d,e){return this.cMW(d,e)},
cMW(d,e){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this
var $async$Lw=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(q.r){w=1
break}q.l(new C.e7b(q,e))
t=3
w=6
return A.b(d.$0(),$async$Lw)
case 6:r.push(5)
w=4
break
case 3:r=[2]
case 4:t=2
if(q.c!=null){q.l(new C.e7c(q))
$.eW.mJ()}w=r.pop()
break
case 5:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$Lw,v)},
YZ(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$YZ=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=t.a
w=3
return A.b(M.pQ(r,s.c,s.e),$async$YZ)
case 3:if(!e||t.c==null){w=1
break}w=4
return A.b(t.Lw(new C.e73(t),"Preparing download\u2026"),$async$YZ)
case 4:case 1:return A.h(u,v)}})
return A.i($async$YZ,v)},
Z2(d){return this.bUL(d)},
bUL(d){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Z2=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=t.a
w=3
return A.b(M.pQ(r,s.c,s.e),$async$Z2)
case 3:if(!f||t.c==null){w=1
break}w=4
return A.b(t.Lw(new C.e74(t,d),"Preparing file\u2026"),$async$Z2)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Z2,v)},
aih(){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m
var $async$aih=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b($.y1.cq().Ne(B.TO,B.vk,!0),$async$aih)
case 7:r=e
o=r
q=o==null?null:J.fq(o.a)
if(q==null){u=null
w=1
break}if(q.c!=null){o=q.c
o.toString
o=!B.aI.gar(o)}else o=!1
if(o){o=q.c
o.toString
o=A.jX(o,0,null)
u=o
w=1
break}t=2
w=6
break
case 4:t=3
m=s.pop()
p=A.ac(m)
$.an.$1("[family tree sync pick] file_picker: "+A.v(p))
w=6
break
case 3:w=2
break
case 6:u=A.HL()
w=1
break
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$aih,v)},
ZG(d){return this.c4h(d)},
c4h(d){var w=0,v=A.j(x.H),u=this
var $async$ZG=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=2
return A.b(u.Lw(new C.e75(u,d),"Restoring family trees\u2026"),$async$ZG)
case 2:return A.h(null,v)}})
return A.i($async$ZG,v)},
ZF(){var w=0,v=A.j(x.H),u,t=this,s
var $async$ZF=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(t.aih(),$async$ZF)
case 3:s=e
if(s==null||B.a.i(s).length===0){w=1
break}w=4
return A.b(t.ZG(s),$async$ZF)
case 4:case 1:return A.h(u,v)}})
return A.i($async$ZF,v)},
a3R(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a3R=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=t.a
w=3
return A.b(M.pQ(r,s.c,s.e),$async$a3R)
case 3:if(!e||t.c==null){w=1
break}w=4
return A.b(t.Lw(new C.e7a(t),"Creating QR code\u2026"),$async$a3R)
case 4:case 1:return A.h(u,v)}})
return A.i($async$a3R,v)},
a3r(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a3r=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!A.DV()){t.zk("Use a phone camera to scan, or upload the backup file on desktop.")
w=1
break}s=t.c
s.toString
w=3
return A.b(A.a7(s,!1).cc(A.eb(new C.e78(),!0,null,x.N)),$async$a3r)
case 3:r=e
w=r!=null&&B.a.i(r).length!==0?4:5
break
case 4:w=6
return A.b(t.ZG(r),$async$a3r)
case 6:case 5:case 1:return A.h(u,v)}})
return A.i($async$a3r,v)},
B(d){var w,v,u,t,s,r,q=this,p=null,o=A.Q(d).ax.a===B.I,n=o?B.Ct:B.hW,m=o?D.am_:B.aS,l=o?B.aM:B.bO,k=o?B.aS:B.aw,j=new C.dkH(n,m,l,k,o?B.bQ:B.bk)
l=A.aI(p,p,p,p,A.V(B.eB,k,p,p,p,20),p,p,p,new C.e7e(d),p,p,p,p,p,p)
w=q.a.r?"Restore family tree":"Family tree sync"
w=A.eV(p,p,p,!0,!0,n,p,1,!0,p,0,!1,p,!1,p,p,l,p,!0,0,p,p,p,p,A.c(w,p,p,p,p,p,p,A.l(p,p,k,p,p,p,p,p,p,p,p,17,p,p,B.u,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p,1,p,!0)
l=q.a
v=l.r
l=l.e
u=x.p
t=A.a([],u)
if(q.e){s=q.a.e?"Scannable backup":"2 scans max"
B.d.u(t,A.a([A.E(C.dkf(!0,B.jG,B.aH,B.aH,q.r?p:q.gcDd(),j,s,"Show restore QR"),1),B.ar],u))}s=q.e
r=q.r?p:q.gczg()
t.push(A.E(C.dkf(!s,B.jH,B.b_,B.bl,r,j,"From another phone","Scan QR to restore"),1))
t=A.A(t,B.l,p,B.e,B.h,0,p,p)
r=A.a([],u)
if(q.e)B.d.u(r,A.a([A.E(C.dkf(!1,B.hO,B.aV,B.bT,q.r?p:q.gbUE(),j,"Photos & books included","Download all trees"),1),B.ar],u))
s=q.a.r?"Restore shared file":"From saved file"
r.push(A.E(C.dkf(!1,S.Ab,B.as,B.aQ,q.r?p:q.gc4e(),j,s,"Upload backup file"),1))
l=A.a([new C.bin(v,l,p),B.lk,new C.aep(j,"QR restore",p),B.R,t,B.di,new C.aep(j,"Backup files",p),B.R,A.A(r,B.l,p,B.e,B.h,0,p,p)],u)
if(q.e&&J.ad(q.d)>1&&q.a.f==null){v=A.a([B.lk,new C.aep(j,"One tree",p),B.R],u)
B.d.u(v,J.b8(q.d,new C.e7f(q,j),x.l))
B.d.u(l,v)}l=A.a([A.co(l,p,p,AL.a2b,p,p,B.ah,!1)],u)
if(q.r){v=A.n(18)
t=A.K(B.aV.j(0.35),B.r,1)
s=A.a([new A.aa(0,B.H,B.v.j(o?0.3:0.1),B.du,20)],x.V)
r=q.f
if(r==null)r="Working\u2026"
l.push(A.ao(24,A.bo(!0,A.p(p,A.A(A.a([P.aW7,B.bc,A.E(A.c(r,p,p,p,p,p,p,A.l(p,p,k,p,p,p,p,p,p,p,p,13,p,p,B.N,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),1)],u),B.l,p,B.e,B.h,0,p,p),B.f,p,p,new A.o(m,p,t,v,s,p,B.m),p,p,p,p,A8.D9,p,p,p),!0,!1,B.ag,!0,!1),p,p,20,20,p,p))}return A.c5(w,n,new A.am(B.a0,p,B.ad,B.t,l,p),p,!1,!1,p,p)}}
C.dkH.prototype={}
C.bin.prototype={
B(d){var w,v,u,t,s,r,q,p=null
if(this.d)w="Upload a file or scan a QR from someone who shared their tree. View only until you create your own tree."
else w=this.e?"Photos and family books stay on this device. Admin skips cloud codes.":"Full trees stay local. QR works 2 times \u2014 names & dates sync to cloud only."
v=A.n(24)
u=A.a([new A.aa(0,B.H,B.aV.j(0.32),B.kQ,28)],x.V)
t=A.ao(p,A.V(B.vD,B.c.j(0.07),p,p,p,110),p,p,p,-20,-10,p)
s=B.c.j(0.16)
r=A.n(18)
q=x.p
return A.p(p,new A.am(B.a0,p,B.ad,B.t,A.a([t,new A.D(B.ae,A.A(A.a([A.p(p,D.c5Z,B.f,p,p,new A.o(s,p,A.K(B.c.j(0.35),B.r,1.5),r,p,p,B.m),p,56,p,p,p,p,p,56),B.pm,A.E(A.x(A.a([D.fXR,B.M,A.c(w,p,p,p,p,p,p,A.l(p,p,B.c.j(0.9),p,p,p,p,p,p,p,p,13,p,p,p,p,1.45,!0,p,p,p,p,p,p,p,p),p,p,p)],q),B.B,p,B.e,B.h,0,B.p),1)],q),B.B,p,B.e,B.h,0,p,p),p)],q),p),B.f,p,p,new A.o(p,p,p,v,u,D.cee,B.m),p,p,p,p,p,p,p,p)}}
C.aep.prototype={
B(d){var w=null
return A.A(A.a([A.p(w,w,B.f,w,w,new A.o(B.aV,w,w,A.n(2),w,w,B.m),w,14,w,w,w,w,w,3),B.aa,A.c(this.d.toUpperCase(),w,w,w,w,w,w,A.l(w,w,this.c.e,w,w,w,w,w,w,w,w,11,w,w,B.D,w,w,!0,w,0.9,w,w,w,w,w,w),w,w,w)],x.p),B.l,w,B.e,B.h,0,w,w)}}
C.bil.prototype={
B(d){var w,v,u,t,s,r=this,q=null,p=r.x,o=A.n(18),n=A.n(18),m=r.c,l=r.y,k=l?B.aH.j(0.4):m.c
k=A.K(k,B.r,l?1.5:1)
l=l?A.a([new A.aa(0,B.H,B.aH.j(0.1),B.cP,12)],x.V):q
w=p==null?0.45:1
v=r.w.j(0.14)
u=A.n(12)
t=r.r
s=A.K(t.j(0.35),B.r,1)
return A.aG(!1,B.a3,!0,q,A.aM(!1,o,!0,A.eJ(A.d5(new A.D(E.a1P,A.x(A.a([A.p(q,A.V(r.d,t,q,q,q,22),B.f,q,q,new A.o(v,q,s,u,q,q,B.m),q,q,q,q,B.tD,q,q,q),B.af,A.c(r.e,q,q,q,q,q,q,A.l(q,q,m.d,q,q,q,q,q,q,q,q,13,q,q,B.u,q,1.2,!0,q,q,q,q,q,q,q,q),q,q,q),B.bs,A.c(r.f,q,q,q,q,q,q,A.l(q,q,m.e,q,q,q,q,q,q,q,q,11,q,q,B.cH,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],x.p),B.B,q,B.e,B.h,0,B.p),q),w),q,new A.o(m.b,q,k,n,l,q,B.m),q,q,q),q,!0,q,q,q,q,q,q,q,q,q,q,q,p,q,q,q,q,q,q,q),B.f,B.L,0,q,q,q,q,q,B.ai)}}
C.biq.prototype={
B(d){var w=this,v=null,u=A.n(18),t=A.n(18),s=w.c,r=A.K(s.c,B.r,1),q=B.aV.j(0.14),p=A.n(12),o=s.e,n=x.p
return A.aG(!1,B.a3,!0,v,A.aM(!1,u,!0,A.eJ(new A.D(B.eY,A.A(A.a([A.p(v,D.c57,B.f,v,v,new A.o(q,v,A.K(B.aV.j(0.35),B.r,1),p,v,v,B.m),v,v,v,v,B.tD,v,v,v),B.bc,A.E(A.x(A.a([A.c(w.d,v,v,v,v,v,v,A.l(v,v,s.d,v,v,v,v,v,v,v,v,v,v,v,B.D,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.c(""+w.e+" members",v,v,v,v,v,v,A.l(v,v,o,v,v,v,v,v,v,v,v,11,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],n),B.B,v,B.e,B.h,0,B.p),1),A.V(B.hO,o,v,v,v,20)],n),B.l,v,B.e,B.h,0,v,v),v),v,new A.o(s.b,v,r,t,v,v,B.m),v,v,v),v,!0,v,v,v,v,v,v,v,v,v,v,v,w.f,v,v,v,v,v,v,v),B.f,B.L,0,v,v,v,v,v,B.ai)}}
C.a1d.prototype={
R(){return new C.aGl()},
gd6(){return this.c}}
C.aGl.prototype={
a_(){this.a3()
this.ab7()},
ab7(){var w=0,v=A.j(x.H),u=this,t
var $async$ab7=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(T.b5o(u.a.c,B.F_),$async$ab7)
case 2:t=e
if(u.c!=null)u.l(new C.e6Z(u,t))
return A.h(null,v)}})
return A.i($async$ab7,v)},
ajJ(){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j
var $async$ajJ=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(q.d){w=1
break}q.l(new C.e7_(q))
t=4
p=T.hBg(q.a.d,B.F_)
if(p==null){n=A.bc("Could not read this QR code.")
throw A.Y(n)}n=q.a
m=n.c
l=n.d
w=7
return A.b(T.auq(n.e,m,l,B.F_,p,n.f),$async$ajJ)
case 7:if(q.c==null){r=[1]
w=5
break}q.l(new C.e70(q))
q.c.L(x.q).f.T(D.fy9)
r.push(6)
w=5
break
case 4:t=3
j=s.pop()
o=A.ac(j)
n=q.c
if(n==null){r=[1]
w=5
break}n.L(x.q).f.T(A.b3(null,null,null,null,null,B.t,null,A.c(B.a.eq(J.k(o),"StateError: ",""),null,null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.l(new C.e71(q))
w=r.pop()
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$ajJ,v)},
B(d){var w,v,u,t,s,r=this,q=null,p=A.Q(d).ax.a===B.I,o=p?B.nQ:AC.qQ,n=p?B.iW:B.c,m=r.a.f,l=m>=999?"Unlimited (admin)":""+m+" scans left"
m=A.eV(q,q,q,!0,!0,o,q,1,!0,q,0,!1,q,!1,q,q,q,q,!0,q,q,q,q,q,D.hdu,q,q,q,1,q,!0)
w=A.n(24)
v=A.K(B.aV.j(0.35),B.r,1)
u=A.qs(q,q,!1,r.a.d,q,!0,!0,q,!1,B.c)
t=A.c(l,q,q,q,q,q,q,A.l(q,q,B.aV,q,q,q,q,q,q,q,q,q,q,q,B.D,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
s=x.p
w=A.E(A.p(q,A.x(A.a([B.M,u,B.by,t,B.M,A.c("Scan on another phone to restore photos, family book, and all tree details. Works only 2 times total.",q,q,q,q,q,q,A.l(q,q,p?B.aR:B.an,q,q,q,q,q,q,q,q,13,q,q,q,q,1.4,!0,q,q,q,q,q,q,q,q),B.K,q,q)],s),B.l,q,B.ba,B.h,0,B.p),B.f,q,q,new A.o(n,q,v,w,q,q,B.m),q,q,q,q,B.ae,q,q,1/0),1)
v=r.a.e
v=A.c("Code: "+v,q,q,q,q,q,q,A.l(q,q,p?B.ab:B.bA,q,q,q,q,q,q,q,q,q,q,q,B.N,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
u=r.d
t=u||r.e===!0?q:r.gcyZ()
if(u)u=B.Lj
else u=A.V(r.e===!0?B.hn:AR.aqQ,q,q,q,q,q)
w=A.a([w,B.af,v,B.af,new A.a5(1/0,q,A.eq(u,q,A.c(r.e===!0?"Saved in QR Generator":"Save to QR Generator",q,q,q,q,q,q,B.cf,q,q,q),t,A.dk(q,q,q,q,q,q,q,q,q,B.aV,q,B.hr,q,q,q,new A.ax(B.aV.j(0.55),1,B.r,-1),q,q,q,q)),q)],s)
if(r.e===!0)w.push(new A.D(B.hy,A.c("Labeled \u201cNGMY Family Tree\u201d in Hub \u2192 QR Code Generator \u2192 Saved. Delete it there to save a new one.",q,q,q,q,q,q,A.l(q,q,p?B.aF:B.an,q,q,q,q,q,q,q,q,11,q,q,q,q,1.35,!0,q,q,q,q,q,q,q,q),B.K,q,q),q))
w.push(B.R)
w.push(new A.a5(1/0,q,A.bI(Au.BB,q,new C.e72(d),A.bp(B.aV,q,q,q,q,B.hr,q,q,q,q,q,q)),q))
return A.c5(m,o,new A.D(B.ae,A.x(w,B.l,q,B.e,B.h,0,B.p),q),q,!1,!1,q,q)}}
C.a1e.prototype={
R(){return new C.bnH(A.A8(B.zc,B.ox,B.vK))}}
C.bnH.prototype={
t(){this.d.t()
this.a2()},
B(d){var w=null
return A.c5(A.eV(w,w,w,!0,!0,B.v,w,1,!0,w,w,!1,w,!1,w,w,w,w,!0,w,w,w,w,w,D.h58,w,w,w,1,w,!0),B.v,A.A7(this.d,B.c_,new C.e7g(this,d)),w,!1,!1,w,w)}}
C.b1e.prototype={
B(d){var w=null
return A.c(this.c,w,w,w,w,w,w,A.l(w,w,w,w,w,w,w,w,"Noto Color Emoji",B.Tg,w,this.d,w,w,w,w,1,!0,w,w,w,w,w,w,w,w),w,w,w)}}
C.md.prototype={}
C.a86.prototype={
R(){return new C.bnl(null,null)}}
C.bnl.prototype={
a_(){var w=this,v=null
w.a3()
w.d=A.br(v,B.tv,v,1,v,w)
w.e=A.br(v,B.nU,v,1,v,w)
w.a.toString
w.d.cX(0)
w.e.cX(0)},
by(d){var w,v,u=this
u.bJ(d)
u.a.toString
w=u.d
w===$&&A.d()
v=w.r
if(!(v!=null&&v.a!=null))w.cX(0)
w=u.e
w===$&&A.d()
v=w.r
if(!(v!=null&&v.a!=null))w.cX(0)},
t(){var w=this.d
w===$&&A.d()
w.t()
w=this.e
w===$&&A.d()
w.t()
this.bAE()},
B(d){var w,v,u=this,t=B.d.dr(D.a7L,new C.dT8(u),new C.dT9())
u.a.toString
w=u.d
w===$&&A.d()
v=u.e
v===$&&A.d()
return A.cFw(A.ca(new A.hA(A.a([w,v],x.dS)),new C.dTa(u,t),null),!0)}}
C.bnk.prototype={
a4(d,e){var w,v,u,t,s,r,q,p=this
switch(p.b){case"construction":p.b52(d,e)
break
case"house":p.mp(d,e,D.dnC)
w=p.c
v=0.5+0.5*Math.sin(w*3.141592653589793*2)
u=e.gdl()
$.T()
t=A.L()
t.r=B.c.j(0.18+v*0.12).gp(0)
d.O(new A.r(e.a*0.5,e.b*0.38),u*(0.22+v*0.06),t)
p.mv(d,e,B.c.j(0.4),-w*3.141592653589793*2,20)
p.BS(d,e,12)
p.yV(d,e,B.lu,5,14)
break
case"grocery":p.cnE(d,e)
break
case"calculator":p.cnl(d,e)
break
case"lumber":p.cnM(d,e)
break
case"kitchen":p.cnH(d,e)
break
case"landscape":p.mp(d,e,D.doc)
s=new A.aH($.T().r,B.ak,null,null,A.a([],x.v))
w=e.b
u=w*0.72
s.E(new A.aZ(0,u))
t=e.a
r=p.c*3.141592653589793*2
s.E(new A.cj(t*0.25,w*(0.62+Math.sin(r)*0.04),t*0.5,u))
s.E(new A.cj(t*0.75,w*(0.82+Math.cos(r)*0.04),t,w*0.68))
s.E(new A.aq(t,w))
s.E(new A.aq(0,w))
s.E(new A.bA())
w=A.L()
w.r=B.es.j(0.85).gp(0)
d.af(s,w)
p.BS(d,e,8)
p.yV(d,e,B.iM,4,18)
break
case"plumbing":p.cnW(d,e)
break
case"electrical":p.mp(d,e,D.dAx)
w=p.c
q=(Math.sin(w*3.141592653589793*4)+1)/2
$.T()
u=A.L()
u.r=B.c.j(q*0.12).gp(0)
d.aE(new A.a4(0,0,0+e.a,0+e.b),u)
p.mv(d,e,B.c.j(0.5+q*0.3),-w*3.141592653589793*3,10)
p.mv(d,e,B.oM.j(0.35+q*0.2),p.d*3.141592653589793*4,18)
p.BS(d,e,10)
break
case"store":p.co5(d,e)
break
case"paint_remodel":p.cnR(d,e)
break
case"roofing":p.cnY(d,e)
break
case"warehouse":p.coc(d,e)
break
case"vehicles":p.coa(d,e)
break
case"farm":p.cny(d,e)
break
case"restaurant":p.cnX(d,e)
break
case"tools":p.co8(d,e)
break
case"wallet":p.cob(d,e)
break
case"concrete":p.cnr(d,e)
break
case"blueprint":p.cnj(d,e)
break
default:p.b52(d,e)}},
mp(d,e,f){var w,v=new A.a4(0,0,0+e.a,0+e.b)
$.T()
w=A.L()
w.san(new A.a8(B.ay,B.aD,B.x,f,null,null).az(0,v))
d.aE(v,w)},
mv(d,e,f,g,h){var w,v,u,t=new A.r(e.a/2,e.b/2),s=e.gdl()/2-h
$.T()
w=A.L()
w.b=B.ac
w.c=2.4
w.r=f.gp(0)
for(v=0;v<24;++v){u=v/24*3.141592653589793*2+g
d.cQ(A.bX(t,s),u,u+0.1439896632895322-u,!1,w)}},
yV(d,e,f,g,h){var w,v,u,t,s,r,q=e.a/2,p=e.b/2,o=e.gdl()/2-h
for(w=this.c*3.141592653589793*2,v=0;v<g;++v){u=w+v/g*3.141592653589793*2
t=Math.cos(u)
s=Math.sin(u)
$.T()
r=new A.ar(B.T,B.Q,B.W,B.X,B.U)
r.r=f.j(0.55+0.35*Math.sin(u*2)).gp(0)
d.O(new A.r(q+t*o,p+s*o),3.5,r)}},
BS(d,e,f){var w,v,u,t,s,r,q,p
for(w=this.c*3.141592653589793*2,v=e.a,u=e.b,t=0;t<f;++t){s=(Math.sin(w+t*0.8)+1)/2
r=B.i.F(t*0.17,0.9)
q=B.i.F(t*0.23,0.85)
$.T()
p=new A.ar(B.T,B.Q,B.W,B.X,B.U)
p.r=B.c.j(0.2+s*0.6).gp(0)
d.O(new A.r(v*(r+0.05),u*(q+0.08)),1.5+s*2.5,p)}},
b52(d,e){var w,v=this
v.mp(d,e,D.dyI)
w=v.c
v.mv(d,e,B.c.j(0.55),w*3.141592653589793*2,12)
v.mv(d,e,B.bM.j(0.45),-w*3.141592653589793*1.4,22)
v.bSB(d,e,B.hZ,w)
v.yV(d,e,B.c.j(0.7),6,8)},
bSB(d,e,f,g){var w,v,u,t,s,r
$.T()
w=A.L()
w.r=f.j(0.35).gp(0)
for(v=e.b,u=g*3.141592653589793*2,t=16+(e.a-32),s=0;s<3;++s){r=v*(0.25+s*0.22)+Math.sin(u+s)*4
d.aE(new A.a4(16,r,t,r+3),w)}},
cnE(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=this
l.mp(d,e,D.cAe)
for(w=l.c*3.141592653589793*2,v=e.a,u=e.b,t=0;t<6;++t){s=w+t*1.1
r=B.o.F(t,3)
q=Math.sin(s)
p=B.o.ao(t,3)
o=Math.cos(s*0.8)
n=B.o.F(t,2)
$.T()
m=new A.ar(B.T,B.Q,B.W,B.X,B.U)
m.r=D.dlD[B.o.F(t,4)].j(0.85).gp(0)
d.O(new A.r(v*(0.15+r*0.28)+q*8,u*(0.18+p*0.55)+o*10),7+n*2,m)}l.mv(d,e,B.c.j(0.35),w,16)
l.yV(d,e,B.iM,5,12)},
cnl(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null
i.mp(d,e,D.cAm)
w=i.c*3.141592653589793
v=w*2
u=0.5+0.5*Math.sin(v)
t=e.a
s=e.b
r=e.gdl()
$.T()
q=A.L()
q.r=B.c.j(0.1+u*0.12).gp(0)
d.O(new A.r(t/2,s/2),r*(0.18+u*0.08),q)
p=A.h_(h,B.cK,h,h,h,h,B.a7,B.cc,h,B.e3,B.cd)
for(o=0;o<6;++o){n=v+o*0.9
r=D.dq6[o]
q=B.c.j(0.35+0.25*Math.sin(n))
m=B.o.F(o,2)
p.sb1(0,new A.eC(r,h,h,B.cY,h,h,h,h,h,h,new A.G(!0,q,h,h,h,h,14+m*4,B.D,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h)))
p.eL()
p.a4(d,new A.r(t*(0.08+B.o.F(o,3)*0.3)+Math.sin(n)*6,s*(0.12+B.o.ao(o,3)*0.62)+Math.cos(n)*5))}for(v=i.d,r=v*3.141592653589793,q=r*2,o=0;o<6;++o){n=q+o*0.85
m=D.cAo[o]
l=B.kZ.j(0.28+0.3*Math.sin(n))
k=B.o.F(o,2)
p.sb1(0,new A.eC(m,h,h,B.cY,h,h,h,h,h,h,new A.G(!0,l,h,h,h,h,12+k*3,B.D,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h)))
p.eL()
p.a4(d,new A.r(t*(0.55+B.o.F(o,3)*0.12)+Math.cos(n)*7,s*(0.08+B.o.ao(o,3)*0.38)+Math.sin(n)*6))}i.mv(d,e,B.c.j(0.35),w*1.5,14)
i.mv(d,e,B.eG.j(0.55),-v*3.141592653589793*2,8)
i.mv(d,e,B.oH.j(0.4),r*2.8,22)
i.yV(d,e,B.pG,8,10)
i.BS(d,e,14)
for(w=v*0.35,t-=12,o=0;o<4;++o){j=s*B.i.F(w+o*0.22,0.9)
$.T()
v=new A.ar(B.T,B.Q,B.W,B.X,B.U)
v.r=B.c.j(0.08+0.06*Math.sin(q+o)).gp(0)
v.c=1.2
d.ah(new A.r(12,j),new A.r(t,j),v)}},
cnM(d,e){var w,v,u,t,s,r,q,p,o=this
o.mp(d,e,A_.aCJ)
for(w=o.c*3.141592653589793*2,v=e.b*0.14,u=20+(e.a-40),t=0;t<5;++t){s=Math.sin(w+t*0.7)
r=v+t*v
q=A.bw(new A.a4(20,r,u,r+10),B.hq)
$.T()
p=new A.ar(B.T,B.Q,B.W,B.X,B.U)
p.r=A.ap(B.h8,B.oA,(s+1)/2).gp(0)
d.aq(q,p)}o.mv(d,e,B.h8.j(0.35),w,15)
o.BS(d,e,8)},
cnH(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=this
l.mp(d,e,D.dmb)
for(w=l.c,v=w*3.141592653589793*2,u=e.a,t=e.b,s=0;s<8;++s){r=v+s*0.75
q=(Math.sin(r)+1)/2
p=B.i.F(s*0.11,0.85)
o=Math.sin(r*1.3)
n=B.i.F(s*0.13,0.7)
$.T()
m=new A.ar(B.T,B.Q,B.W,B.X,B.U)
m.r=B.c.j(0.25+q*0.55).gp(0)
d.O(new A.r(u*(0.1+p)+o*12,t*(0.15+n)),2+q*3,m)}l.mv(d,e,B.bM.j(0.4),-w*3.141592653589793*2.2,11)
l.yV(d,e,B.qD,4,14)},
cnW(d,e){var w,v,u,t,s,r,q,p,o,n=this
n.mp(d,e,D.d9a)
for(w=e.a,v=Math.abs(w),u=e.b,t=Math.abs(u),s=n.c*0.08,w/=2,u*=0.55,r=0;r<3;++r){q=Math.min(v,t)
p=B.i.F(s,0.12)
$.T()
o=new A.ar(B.T,B.Q,B.W,B.X,B.U)
o.b=B.ac
o.c=2
o.r=B.c.j(0.45-r*0.12).gp(0)
d.O(new A.r(w,u),q*(0.12+r*0.14+p),o)}n.yV(d,e,B.pK,6,12)
n.mv(d,e,B.c.j(0.3),-n.d*3.141592653589793*2,18)},
co5(d,e){var w,v,u,t,s,r,q,p=this
p.mp(d,e,D.cOe)
for(w=p.c*3.141592653589793*2,v=e.a-28,u=v/4-4,t=0;t<4;++t){s=Math.sin(w+t*1.5)
r=14+t*v/4
r=A.bw(new A.a4(r,14,r+u,22),B.jJ)
$.T()
q=new A.ar(B.T,B.Q,B.W,B.X,B.U)
q.r=A.ap(B.fy,B.bM,(s+1)/2).gp(0)
d.aq(r,q)}p.mv(d,e,B.c.j(0.3),w,16)
p.BS(d,e,8)
p.yV(d,e,B.wK,5,13)},
cnR(d,e){var w,v,u,t,s,r,q
this.mp(d,e,D.dg7)
for(w=this.c,v=e.a,u=e.b,t=0;t<4;++t){s=B.i.F(w+t*0.2,1)
r=v*(0.18+t*0.18)
q=u*(0.15+s*0.55)
q=A.bw(new A.a4(r,q,r+8,q+(18+s*22)),B.iD)
$.T()
r=new A.ar(B.T,B.Q,B.W,B.X,B.U)
r.r=[B.iJ,B.dG,B.bM,B.eE][t].j(0.85).gp(0)
d.aq(q,r)}this.mv(d,e,B.c.j(0.45),w*3.141592653589793*2.5,13)},
cnY(d,e){var w,v,u,t,s,r,q
this.mp(d,e,D.ddd)
for(w=e.b,v=this.c*0.35,u=e.a,t=0;t<8;++t){s=w*(0.12+B.i.F(v+t*0.12,0.75))
r=B.o.F(t,4)*0.22
$.T()
q=new A.ar(B.T,B.Q,B.W,B.X,B.U)
q.r=B.c.j(0.25).gp(0)
q.c=1.5
d.ah(new A.r(u*(0.1+r),s),new A.r(u*(0.18+r),s+10),q)}this.yV(d,e,B.cD,7,11)},
coc(d,e){var w,v,u,t,s,r,q,p
this.mp(d,e,D.cR3)
for(w=this.c,v=w*3.141592653589793*2,u=e.b*0.55,t=e.a-44,s=0;s<4;++s){r=v+s
q=22+s*16
p=u-s*14+Math.sin(r)*4
p=A.bw(new A.a4(q,p,q+(t-s*8),p+16),B.hq)
$.T()
q=new A.ar(B.T,B.Q,B.W,B.X,B.U)
q.r=A.ap(B.cD,B.aS,(Math.sin(r)+1)/2).gp(0)
d.aq(p,q)}this.mv(d,e,B.c.j(0.35),-w*3.141592653589793*1.8,15)},
coa(d,e){var w,v,u,t,s,r,q
this.mp(d,e,D.dF6)
for(w=e.a,v=this.c*0.45,u=e.b,t=0;t<5;++t){s=w*(B.i.F(v+t*0.18,1.1)-0.05)
r=u*(0.62+B.o.F(t,2)*0.08)
r=A.bw(new A.a4(s,r,s+28,r+8),B.hq)
$.T()
q=new A.ar(B.T,B.Q,B.W,B.X,B.U)
q.r=B.c.j(0.35+t*0.08).gp(0)
d.aq(r,q)}this.BS(d,e,6)},
cny(d,e){var w,v,u,t,s,r,q,p
this.mp(d,e,D.dkB)
w=this.c*3.141592653589793*2
v=Math.sin(w)
u=e.a
t=e.b
$.T()
s=A.L()
s.r=B.oM.j(0.75).gp(0)
d.O(new A.r(u*0.82,t*0.18),14+(0.5+0.5*v)*4,s)
for(v=t*0.72,t*=0.52,r=0;r<6;++r){s=Math.sin(w+r)
q=u*(0.12+r*0.14)
p=new A.ar(B.T,B.Q,B.W,B.X,B.U)
p.r=B.hX.j(0.85).gp(0)
p.c=3
d.ah(new A.r(q,v),new A.r(q+s*6,t),p)}this.mv(d,e,B.oM.j(0.35),w,14)},
cnX(d,e){var w,v,u,t,s,r,q=this
q.mp(d,e,D.dnp)
for(w=q.c*3.141592653589793*2,v=e.a,u=e.b*0.42,t=0;t<4;++t){s=A.bY(new A.r(v*(0.28+t*0.16),u+Math.sin(w+t*0.9)*8),18,10)
$.T()
r=new A.ar(B.T,B.Q,B.W,B.X,B.U)
r.r=B.c.j(0.22).gp(0)
d.c1(s,r)}q.yV(d,e,B.qD,5,16)
q.BS(d,e,7)},
co8(d,e){var w,v,u,t,s,r,q,p,o=this
o.mp(d,e,D.dCk)
w=o.c
v=w*3.141592653589793
o.mv(d,e,B.oA.j(0.55),v*3,10)
o.mv(d,e,B.c.j(0.25),-w*3.141592653589793*2,24)
for(w=v*2,v=e.a/2,u=e.b/2,t=0;t<3;++t){s=w+t*2.1
r=Math.cos(s)
q=Math.sin(s)
$.T()
p=new A.ar(B.T,B.Q,B.W,B.X,B.U)
p.r=B.oA.j(0.8).gp(0)
d.O(new A.r(v+r*34,u+q*22),4,p)}},
cob(d,e){var w,v,u,t,s,r,q,p,o=this
o.mp(d,e,D.dFS)
for(w=o.c*3.141592653589793,v=w*2,u=e.a,t=e.b,s=0;s<5;++s){r=(Math.sin(v+s*1.2)+1)/2
q=u*(0.2+s*0.03)
p=t*(0.28+r*0.08)
p=A.bw(new A.a4(q,p,q+36,p+22),B.jJ)
$.T()
q=new A.ar(B.T,B.Q,B.W,B.X,B.U)
q.r=A.ap(B.iM,B.oM,r).gp(0)
d.aq(p,q)}o.BS(d,e,9)
o.mv(d,e,B.c.j(0.4),w*2.2,12)},
cnr(d,e){var w,v,u,t,s,r,q,p
this.mp(d,e,D.dtf)
w=this.c*3.141592653589793*2
v=e.a/2
u=e.b*0.55
t=A.bX(new A.r(v,u),34)
$.T()
s=A.L()
s.b=B.ac
s.c=5
s.r=B.c.j(0.45).gp(0)
d.cQ(t,w,3.7699111843077517,!1,s)
for(r=0;r<6;++r){q=w+r*1.05
t=Math.cos(q)
s=Math.sin(q)
p=new A.ar(B.T,B.Q,B.W,B.X,B.U)
p.r=B.bO.j(0.85).gp(0)
d.O(new A.r(v+t*34,u+s*34),3,p)}},
cnj(d,e){var w,v,u,t,s,r,q
this.mp(d,e,D.doy)
$.T()
w=A.L()
w.r=B.c.j(0.12).gp(0)
w.c=1
for(v=e.a,u=e.b,t=0;t<v;t+=18)d.ah(new A.r(t,0),new A.r(t,u),w)
for(s=0;s<u;s+=18)d.ah(new A.r(0,s),new A.r(v,s),w)
r=this.c
q=u*B.i.F(r*0.85,1)
$.T()
u=A.L()
u.r=B.dG.j(0.45).gp(0)
d.aE(new A.a4(0,q,0+v,q+6),u)
this.mv(d,e,B.lu.j(0.45),-r*3.141592653589793*2,11)},
aD(d){return d.c!==this.c||d.d!==this.d||d.b!==this.b}}
C.avb.prototype={
a13(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a13=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.aTi(),$async$a13)
case 3:r=e
if(r==null){w=1
break}s=t.c
w=s!=null&&s!==r?4:5
break
case 4:w=6
return A.b(C.aap(s),$async$a13)
case 6:case 5:t.d.$1(r)
case 1:return A.h(u,v)}})
return A.i($async$a13,v)},
aii(d){return this.cqv(d)},
cqv(d){var w=0,v=A.j(x.H),u=this,t
var $async$aii=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=2
return A.b(C.iDh(d),$async$aii)
case 2:t=f
if(t!=null)u.d.$1(t)
return A.h(null,v)}})
return A.i($async$aii,v)},
B(d){var w,v,u=null,t=A.Q(d),s=this.c,r=s!=null&&B.a.i(s).length!==0
s=r?s:"ngmy:thumb:construction"
t=t.ax.a===B.I?B.ka:B.iL
w=x.p
v=A.a([C.aTG(!0,B.rW,1/0,B.re,u,s,1/0)],w)
if(!r)v.push(new A.bQ(new A.o(u,u,u,u,u,new A.a8(B.aX,B.b1,B.x,A.a([B.L,B.v.j(0.35)],x.O),u,u),B.m),B.bm,new A.bK(B.aX,u,u,new A.D(B.tx,A.c("Pick a theme or your own photo",u,u,u,u,u,u,A.l(u,u,B.c.j(0.92),u,u,u,u,u,u,u,u,11,u,u,B.N,u,u,!0,u,u,u,u,u,B.aDH,u,u),u,u,u),u),u),u))
v.push(A.ao(8,A.A(A.a([A.E(A.db(D.bZm,u,D.fTV,new C.crf(this,d),A.bp(B.aV,u,u,u,B.c,u,B.jW,u,u,u,u,B.co)),1),B.aa,A.E(A.eq(D.c7i,u,D.h8k,this.gchh(),A.dk(u,u,B.v.j(0.35),u,u,u,u,u,u,B.c,u,u,B.jW,u,u,D.b7V,u,u,u,B.co)),1)],w),B.l,u,B.e,B.h,0,u,u),u,u,8,8,u,u))
return new A.fL(1.7777777777777777,A.aG(!1,B.a3,!0,B.rW,new A.am(B.a0,u,B.b4,B.t,v,u),B.aq,t,0,u,u,u,u,u,B.ai),u)}}
C.aOv.prototype={
b_(){this.b8()
this.b6()
this.dU()},
t(){var w=this,v=w.bd$
if(v!=null)v.a8(0,w.gdR())
w.bd$=null
w.a2()}}
C.aWE.prototype={}
C.aWD.prototype={}
C.aUF.prototype={}
C.a_R.prototype={
R(){return new C.aBv()}}
C.aBv.prototype={
a_(){var w,v,u=this
u.a3()
u.a.toString
w=new A.bd("",B.b6,B.aP)
v=$.az()
u.d!==$&&A.aS()
u.d=new A.au(w,v)},
t(){var w=this.d
w===$&&A.d()
w.V$=$.az()
w.W$=0
this.a2()},
Lj(){var w,v,u=this,t=u.d
t===$&&A.d()
w=B.a.i(t.a.a)
if(w.length===0){u.c.L(x.q).f.T(D.fyF)
return}t=u.c
t.toString
v=u.e
A.a7(t,!1).N(new C.aWE(w,v))},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=A.Q(d).ax.a===B.I,l=m?B.el:B.c,k=A.n(20),j=A.p(n,D.c6Y,B.f,n,n,new A.o(B.aV.j(0.15),n,n,A.n(12),n,n,B.m),n,44,n,n,n,n,n,44),i=A.c("Create Project",n,n,n,n,n,n,A.l(n,n,m?B.aS:B.aw,n,n,n,n,n,n,n,n,18,n,n,B.u,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),h=x.p
i=A.E(A.x(A.a([i,B.bs,A.c("Add a thumbnail and budget items after creating.",n,n,n,n,n,n,A.l(n,n,m?B.bv:B.bk,n,n,n,n,n,n,n,n,12,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],h),B.B,n,B.e,B.h,0,B.p),1)
j=A.A(A.a([j,B.bc,i,A.aI(n,n,n,n,A.V(B.cC,m?B.bv:B.bk,n,n,n,n),n,n,n,new C.dbL(d),n,n,n,n,n,n)],h),B.l,n,B.e,B.h,0,n,n)
i=A.c("Project thumbnail (16:9)",n,n,n,n,n,n,A.l(n,n,m?B.bv:B.bk,n,n,n,n,n,n,n,n,12,n,n,B.N,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
w=A.c("Full animated preview \u2014 use Themes or Your photos below",n,n,n,n,n,n,A.l(n,n,m?B.bv:B.bk,n,n,n,n,n,n,n,n,11,n,n,B.cH,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
v=C.hBw(new C.dbM(o),o.e)
u=o.d
u===$&&A.d()
t=A.l(n,n,m?B.aS:B.aw,n,n,n,n,n,n,n,n,n,n,n,B.a8,n,n,!0,n,n,n,n,n,n,n,n)
s=m?B.ka:B.iL
r=A.n(12)
q=A.n(12)
p=m?B.eo:B.bO
t=A.aN(n,B.Z,!0,n,!0,B.t,n,A.aO(),u,n,n,n,n,n,2,A.bC(n,new A.b6(4,r,B.dB),n,n,n,n,n,n,!0,new A.b6(4,q,new A.ax(p,1,B.r,-1)),n,n,n,n,n,s,!0,n,n,n,n,n,n,n,n,n,n,n,n,n,n,"Kitchen remodel, Wedding, etc.",n,n,n,n,n,n,n,n,"Project name",!0,!0,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n),B.y,!0,n,!0,n,!1,n,B.al,n,n,n,n,n,n,n,n,n,1,n,n,!1,"\u2022",n,n,n,new C.dbN(o),n,!1,n,n,!1,n,!0,n,B.ae,n,n,n,n,n,n,n,n,n,n,n,t,!0,B.a7,n,A4.Ls,n,n,n,n)
u=m?B.aS:B.aw
m=m?B.eo:B.bO
return A.eH(n,l,new A.cS(B.mh,A.cb(A.x(A.a([j,B.aO,i,B.at,w,B.M,v,B.aO,t,B.by,A.A(A.a([A.E(A.dY(B.dw,new C.dbO(d),A.dk(n,n,n,n,n,n,n,n,n,u,n,n,B.cq,n,new A.b9(A.n(12),B.a1),new A.ax(m,1,B.r,-1),n,n,n,n)),1),B.ar,A.E(A.bI(D.h8B,n,o.ga4c(),A.bp(B.aV,n,n,n,B.c,n,B.cq,n,new A.b9(A.n(12),B.a1),n,n,n)),1)],h),B.l,n,B.e,B.h,0,n,n)],h),B.B,n,B.e,B.O,0,B.p),B.t,n,B.y,n,n,B.Db,n,n,B.ah),n),n,n,n,A9.Dc,n,B.dd,n,new A.b9(k,B.a1),n)}}
C.a_Q.prototype={
R(){return new C.aBu()}}
C.aBu.prototype={
a_(){this.a3()
var w=$.az()
this.d!==$&&A.aS()
this.d=new A.au(B.ax,w)},
t(){var w=this.d
w===$&&A.d()
w.V$=$.az()
w.W$=0
this.a2()},
Lj(){var w,v=this.d
v===$&&A.d()
w=B.a.i(v.a.a)
if(w.length===0){this.c.L(x.q).f.T(D.fwg)
return}v=this.c
v.toString
A.a7(v,!1).N(new C.aWD(w))},
B(d){var w,v,u,t,s,r,q=null,p=A.Q(d).ax.a===B.I,o=p?B.el:B.c,n=A.n(20),m=A.p(q,D.c3d,B.f,q,q,new A.o(B.bT.j(0.15),q,q,A.n(12),q,q,B.m),q,44,q,q,q,q,q,44),l=A.c("Create Family Tree",q,q,q,q,q,q,A.l(q,q,p?B.aS:B.aw,q,q,q,q,q,q,q,q,18,q,q,B.u,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),k=x.p
l=A.E(A.x(A.a([l,B.bs,A.c("Build generations with photos, notes, and profiles.",q,q,q,q,q,q,A.l(q,q,p?B.bv:B.bk,q,q,q,q,q,q,q,q,12,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],k),B.B,q,B.e,B.h,0,B.p),1)
m=A.A(A.a([m,B.bc,l,A.aI(q,q,q,q,A.V(B.cC,p?B.bv:B.bk,q,q,q,q),q,q,q,new C.dbH(d),q,q,q,q,q,q)],k),B.l,q,B.e,B.h,0,q,q)
l=B.aV.j(p?0.12:0.08)
w=A.n(12)
v=A.K(B.aV.j(0.25),B.r,1)
u=A.V(B.aqC,B.aV.j(0.9),q,q,q,18)
l=A.p(q,A.A(A.a([u,B.ar,A.E(A.c("Example: Historia ya M'Bembe",q,q,q,q,q,q,A.l(q,q,p?B.aS:B.aw,q,q,q,q,q,q,q,q,12,q,q,B.a8,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),1)],k),B.l,q,B.e,B.h,0,q,q),B.f,q,q,new A.o(l,q,v,w,q,q,B.m),q,q,q,q,B.bF,q,q,1/0)
w=this.d
w===$&&A.d()
v=A.l(q,q,p?B.aS:B.aw,q,q,q,q,q,q,q,q,q,q,q,B.a8,q,q,!0,q,q,q,q,q,q,q,q)
u=p?B.ka:B.iL
t=A.n(12)
s=A.n(12)
r=p?B.eo:B.bO
v=A.aN(q,B.Z,!0,q,!0,B.t,q,A.aO(),w,q,q,q,q,q,2,A.bC(q,new A.b6(4,t,B.dB),q,q,q,q,q,q,!0,new A.b6(4,s,new A.ax(r,1,B.r,-1)),q,q,q,q,q,u,!0,q,q,q,q,q,q,q,q,q,q,q,q,q,q,"Enter your family name or title",q,q,q,q,q,q,q,q,"Family tree name",!0,!0,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q),B.y,!0,q,!0,q,!1,q,B.al,q,q,q,q,q,q,q,q,q,1,q,q,!1,"\u2022",q,q,q,new C.dbI(this),q,!1,q,q,!1,q,!0,q,B.ae,q,q,q,q,q,q,q,q,q,q,q,v,!0,B.a7,q,B.ll,q,q,q,q)
w=p?B.aS:B.aw
p=p?B.eo:B.bO
return A.eH(q,o,new A.cS(B.mh,A.cb(A.x(A.a([m,B.aO,l,B.aB,v,B.by,A.A(A.a([A.E(A.dY(B.dw,new C.dbJ(d),A.dk(q,q,q,q,q,q,q,q,q,w,q,q,B.cq,q,new A.b9(A.n(12),B.a1),new A.ax(p,1,B.r,-1),q,q,q,q)),1),B.ar,A.E(A.bI(D.hfO,q,this.ga4c(),A.bp(B.bT,q,q,q,B.c,q,B.cq,q,new A.b9(A.n(12),B.a1),q,q,q)),1)],k),B.l,q,B.e,B.h,0,q,q)],k),B.B,q,B.e,B.O,0,B.p),B.t,q,B.y,q,q,B.Db,q,q,B.ah),q),q,q,q,A9.Dc,q,B.dd,q,new A.b9(n,B.a1),q)}}
C.a_k.prototype={
R(){return new C.aAa()}}
C.aAa.prototype={
a_(){var w,v=this
v.a3()
w=$.az()
v.d!==$&&A.aS()
v.d=new A.au(B.ax,w)
v.e!==$&&A.aS()
v.e=new A.au(new A.bd("1",B.b6,B.aP),w)
v.f!==$&&A.aS()
v.f=new A.au(B.ax,w)
v.r!==$&&A.aS()
v.r=new A.au(B.ax,w)},
t(){var w,v=this,u=v.d
u===$&&A.d()
w=u.V$=$.az()
u.W$=0
u=v.e
u===$&&A.d()
u.V$=w
u.W$=0
u=v.f
u===$&&A.d()
u.V$=w
u.W$=0
u=v.r
u===$&&A.d()
u.V$=w
u.W$=0
v.a2()},
gKB(){var w,v=this.e
v===$&&A.d()
w=A.cr(B.a.i(v.a.a))
if(w==null||w<=0)return 1
return w},
galv(){var w=this.f
w===$&&A.d()
w=A.cr(B.a.i(w.a.a))
return w==null?0:w},
gb7T(){var w,v=this.w
if(v==="other"){v=this.r
v===$&&A.d()
w=B.a.i(v.a.a)
return w.length===0?"units":w}return v},
aRY(d){var w,v=B.i.D(this.gKB()+d,0.25,999999),u=B.i.fO(v),t=this.e
t===$&&A.d()
if(v===u)u=B.o.v(B.i.M(v))
else{u=B.i.a5(v,2)
w=A.ag("\\.?0+$",!0,!1,!1,!1)
u=A.aL(u,w,"")}t.sb1(0,u)
this.l(new C.cJA())},
aAU(d,e,f,g){var w=null,v=g!=null?A.V(g,B.aV,w,w,w,20):w,u=d.a,t=u?B.ka:B.iL,s=A.n(14),r=A.n(14)
u=u?B.eo:B.bO
return A.bC(w,new A.b6(4,s,B.dB),w,B.bF,w,w,w,w,!0,new A.b6(4,r,new A.ax(u,1,B.r,-1)),w,w,w,w,w,t,!0,w,w,w,w,new A.b6(4,A.n(14),B.afL),w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w,w,e,!0,!0,!1,w,v,w,w,w,w,w,w,w,w,w,w,w,w)},
chi(d,e,f){return this.aAU(d,e,f,null)},
Lj(){var w,v,u,t,s=this,r=s.d
r===$&&A.d()
w=B.a.i(r.a.a)
if(s.galv()<=0){s.c.L(x.q).f.T(D.fAz)
return}r=s.c
r.toString
v=s.gKB()
u=s.galv()
t=s.gb7T()
A.a7(r,!1).N(new C.aUF(w,v,u,t))},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=A.Q(d).ax.a===B.I,m=new C.ur(n),l=n?B.el:B.c,k=A.n(24),j=x.O,i=A.a([B.aV.j(0.22),B.bT.j(0.14)],j),h=A.n(14)
i=A.p(o,D.bXg,B.f,o,o,new A.o(o,o,A.K(B.aV.j(0.35),B.r,1),h,o,new A.a8(B.a5,B.a9,B.x,i,o,o),B.m),o,48,o,o,o,o,o,48)
h=A.c("Add Budget Item",o,o,o,o,o,o,A.l(o,o,n?B.aS:B.aw,o,o,o,o,o,o,o,o,19,o,o,B.u,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)
w=x.p
h=A.E(A.x(A.a([h,B.bs,A.c("Amount required \xb7 name optional",o,o,o,o,o,o,A.l(o,o,n?B.bv:B.bk,o,o,o,o,o,o,o,o,12,o,o,B.cH,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],w),B.B,o,B.e,B.h,0,B.p),1)
i=A.A(A.a([i,B.bc,h,A.aI(o,o,o,o,A.V(B.cC,n?B.bv:B.bk,o,o,o,o),o,o,o,new C.cJG(d),o,o,o,o,o,o)],w),B.l,o,B.e,B.h,0,o,o)
h=p.d
h===$&&A.d()
v=A.l(o,o,n?B.aS:B.aw,o,o,o,o,o,o,o,o,o,o,o,B.a8,o,o,!0,o,o,o,o,o,o,o,o)
v=A.aN(o,B.Z,!0,o,!0,B.t,o,A.aO(),h,o,o,o,o,o,2,p.aAU(m,"Item name (optional)","Lumber, paint, labor\u2026",B.QI),B.y,!0,o,!0,o,!1,o,B.al,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.ae,o,o,o,o,o,o,o,o,o,o,o,v,!0,B.a7,o,A4.Ls,o,o,o,o)
h=A.c("Units",o,o,o,o,o,o,A.l(o,o,n?B.bv:B.bk,o,o,o,o,o,o,o,o,12,o,o,B.D,o,o,!0,o,0.3,o,o,o,o,o,o),o,o,o)
u=n?B.ka:B.iL
t=A.n(14)
s=A.K(n?B.eo:B.bO,B.r,1)
r=A.aI(o,o,o,o,A.V(B.xr,n?B.aS:B.aw,o,o,o,20),o,o,o,new C.cJH(p),o,o,o,o,o,B.co)
q=p.e
q===$&&A.d()
q=A.aN(o,B.Z,!1,o,!0,B.t,o,A.aO(),q,o,o,o,o,o,2,D.c8R,B.y,!0,o,!0,o,!1,o,B.al,o,o,o,o,o,B.eh,o,o,o,1,o,o,!1,"\u2022",o,new C.cJI(p),o,o,o,!1,o,o,!1,o,!0,o,B.ae,o,o,o,o,o,o,o,o,o,o,o,A.l(o,o,n?B.aS:B.aw,o,o,o,o,o,o,o,o,16,o,o,B.u,o,o,!0,o,o,o,o,o,o,o,o),!0,B.K,o,B.ao,o,o,o,o)
u=A.p(o,A.A(A.a([r,new A.a5(52,o,q,o),A.aI(o,o,o,o,A.V(B.id,n?B.aS:B.aw,o,o,o,20),o,o,o,new C.cJJ(p),o,o,o,o,o,B.co)],w),B.l,o,B.e,B.O,0,o,o),B.f,o,o,new A.o(u,o,s,t,o,o,B.m),o,o,o,o,o,o,o,o)
t=p.f
t===$&&A.d()
s=A.l(o,o,n?B.aS:B.aw,o,o,o,o,o,o,o,o,16,o,o,B.N,o,o,!0,o,o,o,o,o,o,o,o)
s=A.A(A.a([u,B.ar,A.E(A.aN(o,B.Z,!1,o,!0,B.t,o,A.aO(),t,o,o,o,o,o,2,p.aAU(m,"Amount","0.00",B.hN),B.y,!0,o,!0,o,!1,o,B.al,o,o,o,o,o,B.eh,o,o,o,1,o,o,!1,"\u2022",o,new C.cJK(p),o,o,o,!1,o,o,!1,o,!0,o,B.ae,o,o,o,o,o,o,o,o,o,o,o,s,!0,B.a7,o,B.ao,o,o,o,o),1)],w),B.B,o,B.e,B.h,0,o,o)
t=x.gv
u=A.B(new A.O(D.dgG,new C.cJL(p,m),t),t.k("aj.E"))
i=A.a([i,B.by,v,B.aB,h,B.M,s,B.af,A.bZ(B.bI,u,B.br,o,6,6)],w)
if(p.w==="other"){h=p.r
h===$&&A.d()
v=A.l(o,o,n?B.aS:B.aw,o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o)
B.d.u(i,A.a([B.R,A.aN(o,B.Z,!1,o,!0,B.t,o,A.aO(),h,o,o,o,o,o,2,p.chi(m,"Custom unit","rolls, sheets, trips\u2026"),B.y,!0,o,!0,o,!1,o,B.al,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,new C.cJM(p),o,o,o,!1,o,o,!1,o,!0,o,B.ae,o,o,o,o,o,o,o,o,o,o,o,v,!0,B.a7,o,B.ll,o,o,o,o)],w))}i.push(B.aO)
h=B.aV.j(n?0.18:0.1)
j=A.a([h,B.bT.j(n?0.12:0.06)],j)
h=A.n(16)
v=A.K(B.aV.j(0.35),B.r,1)
u=A.c("Line total",o,o,o,o,o,o,A.l(o,o,n?B.bv:B.bk,o,o,o,o,o,o,o,o,11,o,o,B.N,o,o,!0,o,0.4,o,o,o,o,o,o),o,o,o)
t=p.gKB()===B.i.fO(p.gKB())?B.i.M(p.gKB()):p.gKB()
s=p.gb7T()
r=A.BF(p.galv())
i.push(A.p(o,A.A(A.a([A.E(A.x(A.a([u,B.at,A.c(A.v(t)+" "+s+" \xd7 "+r,o,o,o,o,o,o,A.l(o,o,n?B.bv:B.bk,o,o,o,o,o,o,o,o,12,o,o,B.a8,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],w),B.B,o,B.e,B.h,0,B.p),1),C.bI_(p.gKB()*p.galv(),B.b5,!1,B.u)],w),B.l,o,B.e,B.h,0,o,o),B.f,o,o,new A.o(o,o,v,h,o,new A.a8(B.a5,B.a9,B.x,j,o,o),B.m),o,o,o,o,B.jC,o,o,o))
i.push(B.by)
j=A.n(14)
h=n?B.eo:B.bO
h=A.dk(o,o,o,o,o,o,o,o,o,o,o,o,B.cq,o,new A.b9(j,B.a1),new A.ax(h,1,B.r,-1),o,o,o,o)
i.push(A.A(A.a([A.E(A.dY(A.c("Cancel",o,o,o,o,o,o,A.l(o,o,n?B.aS:B.aw,o,o,o,o,o,o,o,o,o,o,o,B.N,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),new C.cJN(d),h),1),B.ar,A.E(A.db(D.au8,o,D.hbE,p.ga4c(),A.bp(B.aV,o,o,0,B.c,o,B.cq,o,new A.b9(A.n(14),B.a1),o,o,o)),2)],w),B.l,o,B.e,B.h,0,o,o))
return A.eH(o,l,new A.cS(B.MT,A.cb(A.x(i,B.am,o,B.e,B.O,0,B.p),B.t,o,B.y,o,o,Az.tB,o,o,B.ah),o),o,o,o,B.Ph,o,B.dd,o,new A.b9(k,B.a1),o)}}
C.a3_.prototype={
R(){return new C.bAe()}}
C.bAe.prototype={
a_(){var w,v,u=this
u.a3()
w=u.a.e
v=$.az()
u.d!==$&&A.aS()
u.d=new A.au(new A.bd(w,B.b6,B.aP),v)},
t(){var w=this.d
w===$&&A.d()
w.V$=$.az()
w.W$=0
this.a2()},
B(d){var w,v,u,t=this,s=null,r=A.Q(d).ax.a===B.I,q=r?B.el:B.c,p=A.n(20),o=t.a.c
o=A.c(o,s,s,s,s,s,s,A.l(s,s,r?B.aS:B.aw,s,s,s,s,s,s,s,s,18,s,s,B.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)
w=t.d
w===$&&A.d()
v=A.l(s,s,r?B.aS:B.aw,s,s,s,s,s,s,s,s,s,s,s,s,s,s,!0,s,s,s,s,s,s,s,s)
u=t.a.d
r=r?B.ka:B.iL
v=A.aN(s,B.Z,!0,s,!0,B.t,s,A.aO(),w,s,s,s,s,s,2,A.bC(s,new A.b6(4,A.n(12),B.dB),s,s,s,s,s,s,!0,s,s,s,s,s,s,r,!0,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,u,!0,!0,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s),B.y,!0,s,!0,s,!1,s,B.al,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,new C.ftU(t,d),s,!1,s,s,!1,s,!0,s,B.ae,s,s,s,s,s,s,s,s,s,s,s,v,!0,B.a7,s,B.ao,s,s,s,s)
u=A.E(A.dY(B.dw,new C.ftV(d),s),1)
r=A.bp(B.bT,s,s,s,s,s,s,s,s,s,s,s)
w=x.p
return A.eH(s,q,new A.D(B.Db,A.x(A.a([o,B.aB,v,B.aO,A.A(A.a([u,B.ar,A.E(A.bI(A.c(t.a.f,s,s,s,s,s,s,s,s,s,s),s,new C.ftW(t,d),r),1)],w),B.l,s,B.e,B.h,0,s,s)],w),B.l,s,B.e,B.O,0,B.p),s),s,s,s,s,s,B.dd,s,new A.b9(p,B.a1),s)}}
C.adq.prototype={
a9(){return"WorksheetFrameStyle."+this.b}}
C.GG.prototype={
R(){return new C.bAc(null,null)}}
C.bAc.prototype={
a_(){var w,v=this
v.a3()
w=A.br(null,D.bE3,null,1,null,v)
w.cX(0)
v.d!==$&&A.aS()
v.d=w},
t(){var w=this.d
w===$&&A.d()
w.t()
this.bCY()},
gbEA(){switch(this.a.r.a){case 1:return A.a([B.aV,B.bT,B.b5],x.O)
case 2:return A.a([B.bw,B.aV,B.b5],x.O)
case 3:return A.a([B.aH,B.ch,B.jR],x.O)
case 4:return A.a([B.fX,B.bT,B.fz],x.O)
case 0:return A.a([B.aV,B.bT,B.b5],x.O)}},
B(d){var w=A.Q(d),v=this.d
v===$&&A.d()
return new A.e6(A.ca(v,new C.ftS(this,new C.ur(w.ax.a===B.I)),null),null)}}
C.aA3.prototype={
R(){return new C.bAd(null,null)}}
C.bAd.prototype={
a_(){var w,v=this
v.a3()
w=A.br(null,B.nW,null,1,null,v)
w.cX(0)
v.d!==$&&A.aS()
v.d=w},
t(){var w=this.d
w===$&&A.d()
w.t()
this.bCZ()},
B(d){var w=this.d
w===$&&A.d()
return A.ca(w,new C.ftT(this),null)}}
C.bAb.prototype={
a4(d,e){var w,v,u,t,s,r,q,p=this,o=e.a
if(o<8||e.b<8)return
w=p.c
v=A.bw(new A.a4(1.5,1.5,1.5+(o-3),1.5+(e.b-3)),new A.aP(w,w))
u=new A.aH($.T().r,B.ak,null,null,A.a([],x.v))
u.E(new A.jp(v))
w=A.L()
w.b=B.ac
w.c=5
o=p.f
t=p.e
w.r=o[1].j(0.14*t).gp(0)
d.aq(v,w)
w=A.L()
w.b=B.ac
w.c=2.8
o=p.d?o[0]:o[2]
w.r=o.j(0.55*t).gp(0)
d.af(u,w)
w=A.zQ(u)
t=A.a([],x.U)
w=new A.v4(w,!1,t)
for(o=p.b,s=-o*0.85;w.C();){r=w.c
if(r===0||w.f)A.bi(A.jV(y.B));--r
q=new A.C4(w,r)
w.jP()
r=t[r].b
r===$&&A.d()
r=r.a.length()
p.aVz(d,q,r,o,0,0.2,4.2,0.92)
p.aVz(d,q,r,s,0.52,0.11,3.2,0.58)}},
aVz(d,e,f,g,h,i,j,k){var w,v,u,t=B.i.F(g+h,1)*f,s=A.hZa(e.a.a,e,t,t+f*i,!0),r=A.aiw(s.glc().a.getBounds())
$.T()
w=A.L()
w.b=B.ac
w.c=j
w.d=B.bG
w.f=!0
v=this.f
u=k*this.e
w.san(new A.a8(B.a5,B.a9,B.x,A.a([v[0].j(0),v[0].j(u),v[1].j(u),v[0].j(0)],x.O),B.Jl,null).az(0,r))
d.af(s,w)},
aD(d){return d.b!==this.b||d.d!==this.d}}
C.aQC.prototype={
t(){var w=this,v=w.ab$
if(v!=null)v.a8(0,w.gbB())
w.ab$=null
w.a2()},
b_(){this.b8()
this.b6()
this.bC()}}
C.aQD.prototype={
t(){var w=this,v=w.ab$
if(v!=null)v.a8(0,w.gbB())
w.ab$=null
w.a2()},
b_(){this.b8()
this.b6()
this.bC()}}
C.ur.prototype={}
C.ava.prototype={
R(){return new C.aHU()},
ge9(){return this.c}}
C.aHU.prototype={
a_(){var w=this
w.a3()
w.d=w.a.d
w.aj9()},
t(){var w=this.a.c,v=this.d
v===$&&A.d()
C.Mw(w,v)
this.a2()},
aj9(){var w=0,v=A.j(x.H),u=this,t,s
var $async$aj9=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return A.b(C.bGn(t.c,t.d.a),$async$aj9)
case 2:s=e
if(s!=null&&u.c!=null)u.l(new C.f1m(u,s))
return A.h(null,v)}})
return A.i($async$aj9,v)},
Rq(){var w=0,v=A.j(x.H),u=this,t,s
var $async$Rq=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:u.l(new C.f1d(u))
t=u.a.c
s=u.d
s===$&&A.d()
w=2
return A.b(C.Mw(t,s),$async$Rq)
case 2:if(u.c!=null)u.l(new C.f1e(u))
return A.h(null,v)}})
return A.i($async$Rq,v)},
RY(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$RY=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.c
p.toString
p=A.Q(p)
s=t.c
s.toString
w=3
return A.b(A.ce(null,null,!0,null,new C.f1k(t,new C.ur(p.ax.a===B.I)),s,null,!0,!0,x.T),$async$RY)
case 3:r=e
if(r==null||t.c==null){w=1
break}p=t.d
p===$&&A.d()
q=p.c
w=q!=null&&q!==r?4:5
break
case 4:w=6
return A.b(C.aap(q),$async$RY)
case 6:case 5:t.l(new C.f1l(t,r))
w=7
return A.b(t.Rq(),$async$RY)
case 7:case 1:return A.h(u,v)}})
return A.i($async$RY,v)},
X5(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$X5=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return A.b(C.iD2(r),$async$X5)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.l(new C.f18(t,new C.rG(B.o.v(1000*Date.now()),s.a,s.b,s.c,s.d)))
w=4
return A.b(t.Rq(),$async$X5)
case 4:case 1:return A.h(u,v)}})
return A.i($async$X5,v)},
cms(){var w,v,u=this,t=u.c
t.toString
w=u.a.c
v=u.d
v===$&&A.d()
C.hQv(t,new C.f1c(u),w,v)},
acW(d){var w=null,v=B.c.j(d?0.85:0.55)
return A.p(w,w,B.f,w,w,new A.o(w,w,new A.bE(new A.ax(v,2.5,B.r,-1),B.a1,B.a1,new A.ax(B.c.j(d?0.85:0.55),2.5,B.r,-1)),D.b7H,w,w,B.m),w,22,w,w,w,w,w,22)},
abY(d){return this.bQQ(d)},
bQQ(d){var w=0,v=A.j(x.H),u=this
var $async$abY=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:u.l(new C.f1b(u,d))
w=2
return A.b(u.Rq(),$async$abY)
case 2:return A.h(null,v)}})
return A.i($async$abY,v)},
B(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=A.Q(a2).ax.a===B.I,e=f?B.c7:B.hW,d=A.n(8),a0=A.V(A2.a3q,f?B.bv:B.bk,g,g,g,16),a1=x.p
a0=A.aM(!1,d,!0,new A.D(B.HR,A.A(A.a([a0,B.bb,A.c("Back to Projects",g,g,g,g,g,g,A.l(g,g,f?B.bv:B.bk,g,g,g,g,g,g,g,g,g,g,g,B.a8,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)],a1),B.l,g,B.e,B.O,0,g,g),g),g,!0,g,g,g,g,g,g,g,g,g,g,g,new C.f1n(h,a2),g,g,g,g,g,g,g)
d=h.d
d===$&&A.d()
d=d.c
if(d!=null&&B.a.Y(d,"ngmy:thumb:"))d=new A.am(B.a0,g,B.b4,B.t,A.a([A.by(A.n(22),C.aTG(!0,A.n(22),1/0,B.re,g,d,1/0),B.aq),A.ao(10,A.db(D.c16,g,D.he2,h.gb5O(),A.bp(B.v.j(0.45),g,g,g,B.c,g,B.hc,g,new A.b9(A.n(12),B.a1),g,g,g)),g,g,g,10,g,g)],a1),g)
else{d=A.n(22)
w=x.V
v=A.a([new A.aa(0,B.H,B.aV.j(f?0.5:0.38),B.eU,22),new A.aa(-4,B.H,B.bT.j(0.2),B.J,32)],w)
u=A.n(17)
t=A.K(B.c.j(0.45),B.r,1.2)
w=A.a([new A.aa(-2,B.H,B.c.j(0.18),B.J,10)],w)
s=A.n(16)
r=h.d
v=A.p(g,A.p(g,A.by(s,new A.am(B.a0,g,B.b4,B.t,A.a([C.aTG(!0,A.n(16),1/0,B.Q7,g,r.c,1/0),new A.bQ(new A.o(g,g,g,g,g,new A.a8(B.aX,B.b1,B.x,A.a([B.c.j(0.06),B.L,B.v.j(0.22)],x.O),g,g),B.m),B.bm,g,g),A.ao(g,h.acW(!0),g,g,8,g,8,g),A.ao(g,A.cGf(h.acW(!0),!0,!1),g,g,g,8,8,g),A.ao(8,A.cGf(h.acW(!1),!1,!0),g,g,8,g,g,g),A.ao(8,A.cGf(h.acW(!1),!0,!0),g,g,g,8,g,g),A.ao(10,A.db(D.bXT,g,D.h7i,h.gb5O(),A.bp(B.v.j(0.45),g,g,g,B.c,g,B.hc,g,new A.b9(A.n(12),B.a1),g,g,g)),g,g,g,10,g,g)],a1),g),B.aq),B.f,g,g,new A.o(g,g,t,u,w,g,B.m),g,g,g,g,g,g,g,g),B.f,g,g,new A.o(g,g,g,d,v,D.cay,B.m),g,g,g,g,B.m_,g,g,g)
d=v}w=h.d
w=A.c(w.b,g,g,g,g,g,g,A.l(g,g,f?B.aS:B.aw,g,g,g,g,g,g,g,g,22,g,g,B.u,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)
q=h.d.d.length
v=A.n(22)
u=x.O
u=f?A.a([D.biF,B.oE,B.hw],u):A.a([B.b5,B.aV,B.bT],u)
t=x.V
s=A.a([new A.aa(0,B.H,B.aV.j(f?0.45:0.35),B.eU,24)],t)
r=A.n(22)
p=A.ao(g,A.V(B.jD,B.c.j(0.08),g,g,g,120),g,g,g,-24,-24,g)
o=B.c.j(0.16)
n=A.n(20)
m=A.K(B.c.j(0.22),B.r,1)
l=q===1?"item":"items"
n=A.a([A.A(A.a([A.p(g,A.c(""+q+" "+l,g,g,g,g,g,g,A.l(g,g,B.c.j(0.92),g,g,g,g,g,g,g,g,11,g,g,B.D,g,g,!0,g,0.3,g,g,g,g,g,g),g,g,g),B.f,g,g,new A.o(o,g,m,n,g,g,B.m),g,g,g,g,B.hm,g,g,g)],a1),B.l,g,B.e,B.h,0,g,g),B.aB,A.c("PROJECT TOTAL",g,g,g,g,g,g,A.l(g,g,B.c.j(0.75),g,g,g,g,g,g,g,g,11,g,g,B.D,g,g,!0,g,1.4,g,g,g,g,g,g),g,g,g),B.aj,C.bI_(h.d.gxQ(),B.c,!0,B.u)],a1)
if(q>0)B.d.u(n,A.a([B.M,A.c("Sum of all budget line items",g,g,g,g,g,g,A.l(g,g,B.c.j(0.65),g,g,g,g,g,g,g,g,11,g,g,B.cH,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)],a1))
o=A.E(A.x(n,B.B,g,B.e,B.h,0,B.p),1)
n=A.n(14)
m=A.n(14)
l=B.c.j(0.12)
k=A.K(B.hk.j(0.75),B.r,1.6)
t=A.a([new A.aa(0,B.H,B.aH.j(0.28),B.cP,14)],t)
j=B.aH.j(0.22)
i=A.n(10)
u=A.p(g,A.by(r,new A.am(B.a0,g,B.ad,B.t,A.a([p,new A.D(D.bJ0,A.A(A.a([o,B.ar,A.aG(!1,B.a3,!0,g,A.aM(!1,n,!0,A.eJ(new A.D(Z.x3,A.x(A.a([A.p(g,D.atI,B.f,g,g,new A.o(j,g,A.K(B.aH.j(0.5),B.r,1),i,g,g,B.m),g,g,g,g,B.cu,g,g,g),B.fO,D.fWQ],a1),B.l,g,B.e,B.O,0,B.p),g),g,new A.o(l,g,k,m,t,g,B.m),g,g,g),g,!0,g,g,g,g,g,g,g,g,g,g,g,h.gcmr(),g,g,g,g,g,g,g),B.f,B.L,0,g,g,g,g,g,B.ai)],a1),B.l,g,B.e,B.h,0,g,g),g)],a1),g),B.aq),B.f,g,g,new A.o(g,g,g,v,s,new A.a8(B.ay,B.aD,B.x,u,g,g),B.m),g,g,g,g,g,g,g,g)
s=h.d.d.length
d=A.a([new A.fL(1.7777777777777777,d,g),B.aO,w,B.M,u,B.by,A.A(A.a([A.c("Budget Items ("+s+")",g,g,g,g,g,g,A.l(g,g,f?B.aS:B.aw,g,g,g,g,g,g,g,g,16,g,g,B.D,g,g,!0,g,g,g,g,g,g,g,g),g,g,g),B.aW,A.db(Aj.a5f,g,D.fUB,h.gbF4(),A.bp(B.aV,g,g,g,B.c,g,B.hA,g,new A.b9(A.n(12),B.a1),g,g,g))],a1),B.l,g,B.e,B.h,0,g,g),B.af],a1)
w=h.d.d
if(w.length===0){w=f?B.el:B.c
v=A.n(14)
u=A.K(f?B.eo:B.bO,B.r,1)
t=A.V(B.a3M,f?B.bv:B.bk,g,g,g,48)
s=A.c("No budget items yet",g,g,g,g,g,g,A.l(g,g,f?B.aS:B.aw,g,g,g,g,g,g,g,g,g,g,g,B.N,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)
d.push(A.p(g,A.x(A.a([t,B.R,s,B.aj,A.c("Add item names, units, and prices to track spending.",g,g,g,g,g,g,A.l(g,g,f?B.bv:B.bk,g,g,g,g,g,g,g,g,g,g,g,g,g,g,!0,g,g,g,g,g,g,g,g),B.K,g,g)],a1),B.l,g,B.e,B.h,0,B.p),B.f,g,g,new A.o(w,g,u,v,g,g,B.m),g,g,g,g,B.ra,g,g,1/0))}else B.d.u(d,new A.O(w,new C.f1o(h,new C.ur(f)),A.U(w).k("O<1,w>")))
if(h.e)d.push(new A.D(Ai.zi,A.at(A.nh(g,f?B.bv:B.bk,g,g,g,g,g,g,g,g),g,g,g),g))
return A.c5(g,e,A.bo(!0,A.x(A.a([new A.D(A3.D3,a0,g),A.E(A.cb(A.x(d,B.B,g,B.e,B.h,0,B.p),B.t,g,B.y,g,g,E.zv,g,g,B.ah),1)],a1),B.B,g,B.e,B.h,0,B.p),!0,!1,B.ag,!0,!0),g,!1,!1,g,g)},
bIQ(d,e){var w,v,u=null,t=d.b,s=B.a.i(t).length===0,r=e.a,q=r?B.el:B.c,p=A.n(16),o=A.a([new A.aa(0,B.H,B.v.j(r?0.35:0.08),B.cP,12)],x.V),n=A.n(16),m=A.p(u,u,B.f,u,u,D.bar,u,u,u,u,u,u,u,5),l=B.aV.j(r?0.22:0.12),k=A.n(12)
l=A.p(u,A.V(s?B.iv:B.h0,B.b5,u,u,u,20),B.f,u,u,new A.o(l,u,u,k,u,u,B.m),u,40,u,u,u,u,u,40)
if(s)t=B.bK
else{k=x.p
t=A.a([A.c(t,u,2,B.a2,u,u,u,A.l(u,u,r?B.aS:B.aw,u,u,u,u,u,u,u,u,15,u,u,B.D,u,1.25,!0,u,u,u,u,u,u,u,u),u,u,u)],k)
if(d.c!==1||d.e!=="each"){w=d.gd2G()
v=A.BF(d.d)
B.d.u(t,A.a([B.at,A.c(w+" "+v,u,u,u,u,u,u,A.l(u,u,r?B.bv:B.bk,u,u,u,u,u,u,u,u,12,u,u,B.a8,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],k))}t=A.x(t,B.B,u,B.ba,B.O,0,B.p)}t=A.E(t,1)
k=A.a([B.aV.j(0.14),B.bT.j(0.1)],x.O)
w=A.n(12)
k=A.p(u,C.bI_(d.c*d.d,B.b5,!1,B.u),B.f,u,u,new A.o(u,u,u,w,u,new A.a8(B.a5,B.a9,B.x,k,u,u),B.m),u,u,u,u,B.hc,u,u,u)
w=x.p
return A.p(u,A.by(n,new A.F8(A.A(A.a([m,A.E(new A.D(B.anr,A.A(A.a([l,B.bc,t,B.aa,k,A.aI(u,u,u,u,A.V(B.cC,(r?B.bv:B.bk).j(0.75),u,u,u,20),u,u,u,new C.f19(this,d),u,u,u,u,u,B.co)],w),B.l,u,B.e,B.h,0,u,u),u),1)],w),B.am,u,B.e,B.h,0,u,u),u),B.aq),B.f,u,D.b9h,new A.o(q,u,u,p,o,u,B.m),u,u,u,B.d7,u,u,u,u)}}
C.afv.prototype={
Fj(d){return this.bSd(d)},
bSd(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$Fj=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:o=t.c
w=3
return A.b(M.pQ(d,o,!1),$async$Fj)
case 3:if(!f||d.e==null){w=1
break}A.a7(d,!1).N(null)
w=4
return A.b(A.bL(Ay.CY,null,x.H),$async$Fj)
case 4:s=t.d
w=5
return A.b(C.h44(!0,o,s),$async$Fj)
case 5:r=f
q=A.ag("[^\\w\\-.]+",!0,!1,!1,!1)
w=6
return A.b(A.HB(r,"ngmy_project_"+A.aL(s.b,q,"_"),!1),$async$Fj)
case 6:p=f
w=7
return A.b(M.pP(o,!1),$async$Fj)
case 7:if(d.e==null){w=1
break}d.L(x.q).f.T(A.b3(null,null,null,null,null,B.t,null,A.c(p,null,null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$Fj,v)},
a15(d){return this.cDe(d)},
cDe(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$a15=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.c
w=3
return A.b(M.pQ(d,s,!1),$async$a15)
case 3:if(!f||d.e==null){w=1
break}A.a7(d,!1).N(null)
A.hN(d,new C.av4(s,t.d,null),!1,"NgmyWorksheetProjectQr",x.H)
w=4
return A.b(M.pP(s,!1),$async$a15)
case 4:case 1:return A.h(u,v)}})
return A.i($async$a15,v)},
Rr(d){return this.cza(d)},
cza(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$Rr=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:A.a7(d,!1).N(null)
w=3
return A.b(A.hN(d,D.aNv,!0,"NgmyWorksheetProjectScan",x.N),$async$Rr)
case 3:s=f
if(s==null||B.a.i(s).length===0){w=1
break}w=4
return A.b(C.bI0(s),$async$Rr)
case 4:r=f
if(r==null){if(d.e==null){w=1
break}d.L(x.q).f.T(D.fzG)
w=1
break}q=C.hqZ(r)
p=t.e.$1(q)
w=5
return A.b(x.x.b(p)?p:A.dR(p,x.H),$async$Rr)
case 5:if(d.e==null){w=1
break}d.L(x.q).f.T(A.b3(null,null,null,null,null,B.t,null,A.c('Imported "'+q.b+'" from QR',null,null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$Rr,v)},
a16(d){return this.cLL(d)},
cLL(d){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$a16=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:A.a7(d,!1).N(null)
w=3
return A.b(C.bHu(),$async$a16)
case 3:s=f
if(s==null){w=1
break}r=C.hqZ(s)
q=t.e.$1(r)
w=4
return A.b(x.x.b(q)?q:A.dR(q,x.H),$async$a16)
case 4:if(d.e==null){w=1
break}d.L(x.q).f.T(A.b3(null,null,null,null,null,B.t,null,A.c('Imported "'+r.b+'" from file',null,null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$a16,v)},
B(d){var w=this,v=null,u=A.Q(d).ax.a===B.I,t=new C.ur(u),s=w.d.d.length,r=u?B.el:B.c,q=A.n(28),p=A.a([new A.aa(0,B.H,B.v.j(u?0.35:0.08),B.kQ,36)],x.V),o=x.p
return A.bo(!0,new A.D(B.x2,A.p(v,A.x(A.a([w.cBO(d,t,s),new A.D(D.bIo,A.x(A.a([w.b8O(t,"QR restore"),B.R,A.A(A.a([w.b3N(t,!0,B.jG,B.aH,B.aH,new C.f1q(w,d),"Show to scan","QR code"),B.ar,w.aAV(t,B.jH,B.b_,B.bl,new C.f1r(w,d),"From camera","Scan QR")],o),B.l,v,B.e,B.h,0,v,v),B.di,w.b8O(t,"Backup files"),B.R,A.A(A.a([w.aAV(t,B.hO,B.aV,B.bT,new C.f1s(w,d),"Full copy","Backup file"),B.ar,w.aAV(t,S.Ab,B.as,B.aQ,new C.f1t(w,d),".json backup","Upload file")],o),B.l,v,B.e,B.h,0,v,v)],o),B.B,v,B.e,B.h,0,B.p),v)],o),B.l,v,B.e,B.O,0,B.p),B.aq,v,v,new A.o(r,v,v,q,p,v,B.m),v,v,v,v,v,v,v,v),v),!0,!1,B.ag,!0,!0)},
cBO(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=x.O
k=e.a?A.a([B.fm,B.cZ,B.h6],k):A.a([B.b5,B.aV,B.bT],k)
w=A.ao(l,A.V(B.vD,B.c.j(0.07),l,l,l,110),l,l,l,-20,-10,l)
v=A.at(A.p(l,l,B.f,l,l,new A.o(B.c.j(0.35),l,l,A.n(4),l,l,B.m),l,4,l,B.kJ,l,l,l,36),l,l,l)
u=A.n(14)
t=A.K(B.c.j(0.45),B.r,1.5)
s=A.a([new A.aa(0,B.H,B.v.j(0.2),B.cP,12)],x.V)
r=this.d
s=A.p(l,C.aTG(!0,A.n(13),64,D.bT2,l,r.c,64),B.aq,l,l,new A.o(l,l,t,u,s,l,B.m),l,64,l,l,l,l,l,64)
u=A.c("Share project",l,l,l,l,l,l,A.l(l,l,B.c.j(0.78),l,l,l,l,l,l,l,l,11,l,l,B.D,l,l,!0,l,1.1,l,l,l,l,l,l),l,l,l)
t=A.c(r.b,l,2,B.a2,l,l,l,I.ad5,l,l,l)
r=C.bI_(r.gxQ(),B.c,!1,B.u)
q=B.c.j(0.16)
p=A.n(20)
o=A.K(B.c.j(0.22),B.r,1)
n=f===1?"item":"items"
m=x.p
return A.p(l,new A.am(B.a0,l,B.ad,B.t,A.a([w,new A.D(D.bIM,A.x(A.a([v,A.A(A.a([s,B.ew,A.E(A.x(A.a([u,B.at,t,B.M,A.A(A.a([r,B.aa,A.p(l,A.c(""+f+" "+n,l,l,l,l,l,l,A.l(l,l,B.c.j(0.9),l,l,l,l,l,l,l,l,10,l,l,B.D,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),B.f,l,l,new A.o(q,l,o,p,l,l,B.m),l,l,l,l,B.fa,l,l,l)],m),B.l,l,B.e,B.h,0,l,l)],m),B.B,l,B.e,B.h,0,B.p),1),A.aI(l,l,l,l,A.V(B.cC,B.c.j(0.85),l,l,l,l),l,l,l,new C.f1p(d),l,l,l,A.nm(l,B.c.j(0.12),l,l,l,l,l,l,l,l,l,l,E.aVW,l,l,l,l),l,l)],m),B.B,l,B.e,B.h,0,l,l)],m),B.l,l,B.e,B.h,0,B.p),l)],m),l),B.f,l,l,new A.o(l,l,l,l,l,new A.a8(B.ay,B.aD,B.x,k,l,l),B.m),l,l,l,l,l,l,l,1/0)},
b8O(d,e){var w=null,v=A.p(w,w,B.f,w,w,new A.o(B.aV,w,w,A.n(2),w,w,B.m),w,14,w,w,w,w,w,3)
return A.A(A.a([v,B.aa,A.c(e.toUpperCase(),w,w,w,w,w,w,A.l(w,w,d.a?B.bv:B.bk,w,w,w,w,w,w,w,w,11,w,w,B.D,w,w,!0,w,0.9,w,w,w,w,w,w),w,w,w)],x.p),B.l,w,B.e,B.h,0,w,w)},
b3N(d,e,f,g,h,i,j,k){var w,v,u,t,s,r=null,q=A.n(18),p=A.n(18),o=d.a,n=o?D.am_:B.aS
if(e)w=B.aH.j(o?0.45:0.35)
else{w=o?B.eo:B.bO
w=w.j(o?0.8:1)}w=A.K(w,B.r,e?1.5:1)
v=e?A.a([new A.aa(0,B.H,B.aH.j(0.12),B.cP,14)],x.V):r
u=g.j(o?0.22:0.14)
t=A.n(12)
s=A.K(h.j(0.35),B.r,1)
t=A.p(r,A.V(f,h,r,r,r,22),B.f,r,r,new A.o(u,r,s,t,r,r,B.m),r,r,r,r,B.tD,r,r,r)
u=A.c(k,r,r,r,r,r,r,A.l(r,r,o?B.aS:B.aw,r,r,r,r,r,r,r,r,14,r,r,B.u,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
return A.E(A.aG(!1,B.a3,!0,r,A.aM(!1,q,!0,A.eJ(new A.D(E.a1P,A.x(A.a([t,B.af,u,B.bs,A.c(j,r,r,r,r,r,r,A.l(r,r,o?B.bv:B.bk,r,r,r,r,r,r,r,r,11,r,r,B.cH,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),B.B,r,B.e,B.h,0,B.p),r),r,new A.o(n,r,w,p,v,r,B.m),r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,i,r,r,r,r,r,r,r),B.f,B.L,0,r,r,r,r,r,B.ai),1)},
aAV(d,e,f,g,h,i,j){return this.b3N(d,!1,e,f,g,h,i,j)}}
C.av4.prototype={
R(){return new C.bp4()}}
C.bp4.prototype={
a_(){this.a3()
this.ah2()},
ah2(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n
var $async$ah2=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
p=r.a
w=7
return A.b(C.bI1(p.c,p.d),$async$ah2)
case 7:q=e
if(r.c==null){w=1
break}r.l(new C.f13(r,q))
t=2
w=6
break
case 4:t=3
n=s.pop()
if(r.c==null){w=1
break}r.l(new C.f14(r))
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$ah2,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=A.Q(d).ax.a===B.I,f=g?B.Ct:B.hW,e=i.d
e=e==null?h:B.a.Y(e,"NGMYWSSYNC2|")
w=e===!0
v=i.a.d.d.length
e=A.aI(h,h,h,h,A.V(B.eB,g?B.ab:B.an,h,h,h,18),h,h,h,new C.f15(d),h,h,h,h,h,h)
u=x.p
e=A.A(A.a([e,A.E(A.c("Project QR",h,h,h,h,h,h,A.l(h,h,g?B.c:B.a_,h,h,h,h,h,h,h,h,17,h,h,B.u,h,h,!0,h,h,h,h,h,h,h,h),B.K,h,h),1),B.uo],u),B.l,h,B.e,B.h,0,h,h)
t=A.n(24)
s=x.O
s=g?A.a([B.fm,B.cZ,B.h6],s):A.a([B.b5,B.aV,B.bT],s)
r=x.V
q=A.a([new A.aa(0,B.H,B.aV.j(g?0.4:0.3),B.eU,24)],r)
p=i.a.d
o=A.c(p.b,h,h,h,h,h,h,B.dv,B.K,h,h)
p=C.bI_(p.gxQ(),B.c,!1,B.u)
n=B.c.j(0.16)
m=A.n(20)
l=v===1?"item":"items"
s=A.p(h,A.x(A.a([o,B.aj,A.A(A.a([p,B.aa,A.p(h,A.c(""+v+" "+l,h,h,h,h,h,h,A.l(h,h,B.c.j(0.9),h,h,h,h,h,h,h,h,10,h,h,B.D,h,h,!0,h,h,h,h,h,h,h,h),h,h,h),B.f,h,h,new A.o(n,h,h,m,h,h,B.m),h,h,h,h,B.fa,h,h,h)],u),B.l,h,B.ba,B.h,0,h,h)],u),B.l,h,B.e,B.h,0,B.p),B.f,h,h,new A.o(h,h,h,t,q,new A.a8(B.ay,B.aD,B.x,s,h,h),B.m),h,h,h,h,E.a2a,h,h,1/0)
t=g?D.buk:B.c
q=A.n(24)
p=A.K(w?B.aH.j(0.4):B.aV.j(0.3),B.r,1)
r=A.a([new A.aa(0,B.H,B.v.j(g?0.25:0.06),B.du,20)],r)
o=A.a([],u)
n=i.e
if(n!=null)o.push(A.c(n,h,h,h,h,h,h,B.WF,B.K,h,h))
else{n=i.d
if(n==null)o.push(D.eCZ)
else{m=A.n(20)
l=A.K(B.bn,B.r,1)
o.push(A.p(h,A.qs(h,h,!1,n,h,!0,!0,h,!1,B.c),B.f,h,h,new A.o(B.c,h,l,m,h,h,B.m),h,h,h,h,B.bS,h,h,h))}}o.push(B.aO)
n=w?B.aH:B.aV
n=n.j(g?0.15:0.1)
m=A.n(12)
l=A.K((w?B.aH:B.aV).j(0.35),B.r,1)
k=w?B.Qp:B.QZ
k=A.V(k,w?B.aH:B.aV,h,h,h,18)
j=w?"Cloud QR \u2014 includes thumbnail and all budget items.":"Offline QR \u2014 use backup file for the full project copy."
o.push(A.p(h,A.A(A.a([k,B.ar,A.E(A.c(j,h,h,h,h,h,h,A.l(h,h,g?B.ab:B.an,h,h,h,h,h,h,h,h,12,h,h,B.a8,h,1.35,!0,h,h,h,h,h,h,h,h),h,h,h),1)],u),B.l,h,B.e,B.h,0,h,h),B.f,h,h,new A.o(n,h,l,m,h,h,B.m),h,h,h,h,B.hA,h,h,h))
return A.c5(h,f,A.bo(!0,A.x(A.a([new A.D(Av.Pu,e,h),A.E(A.cb(A.x(A.a([s,B.aO,A.p(h,A.x(o,B.l,h,B.e,B.h,0,B.p),B.f,h,h,new A.o(t,h,p,q,r,h,B.m),h,h,h,h,B.vg,h,h,1/0)],u),B.l,h,B.e,B.h,0,B.p),B.t,h,B.y,h,h,E.aoE,h,h,B.ah),1)],u),B.l,h,B.e,B.h,0,B.p),!0,!1,B.ag,!0,!0),h,!1,!1,h,h)}}
C.av9.prototype={
R(){return new C.aHT(A.A8(B.OL,B.ox,B.vK))}}
C.aHT.prototype={
t(){this.d.t()
this.a2()},
aPU(d){var w,v=this
if(v.e||v.c==null)return
v.e=!0
w=v.c
w.toString
A.ji(w,d)},
cia(d){var w,v,u,t,s,r,q,p="NGMYWSSYNC2|"
if(this.e)return
for(w=d.a,v=w.length,u=0;u<w.length;w.length===v||(0,A.I)(w),++u){t=w[u]
s=C.iB1(t)
if(s!=null){this.aPU(s)
return}r=C.hG7(t)
if(r!=null)q=A.cZ(r,p,0)
else q=!1
if(q){this.aPU(B.a.i(B.a.aY(r,B.a.cd(r,p))))
return}}},
B(d){var w,v,u=this,t=null,s=x.p,r=A.eV(A.a([A.aI(t,t,t,t,A.V(u.f?B.rj:An.Qx,t,t,t,t,t),t,t,t,new C.f17(u),t,t,t,t,t,t)],s),t,t,!0,!0,B.Ct,t,1,t,t,t,!1,t,!1,B.c,t,t,t,!0,t,t,t,t,t,D.h7a,t,t,t,1,t,!0),q=A.A7(u.d,B.c_,u.gci9()),p=A.n(28)
p=A.at(A.p(t,t,B.f,t,t,new A.o(t,t,A.K(B.aV,B.r,3),p,A.a([new A.aa(2,B.H,B.aV.j(0.35),B.J,24)],x.V),t,B.m),t,260,t,t,t,t,t,260),t,t,t)
w=B.v.j(0.72)
v=A.n(16)
return A.c5(r,B.v,new A.am(B.a0,t,B.b4,B.t,A.a([q,p,A.ao(32,A.p(t,D.h5W,B.f,t,t,new A.o(w,t,A.K(B.aV.j(0.45),B.r,1),v,t,t,B.m),t,t,t,t,B.jC,t,t,t),t,t,20,20,t,t)],s),t),t,!1,!1,t,t)}}
C.aMQ.prototype={
a9(){return"_WorksheetTab."+this.b}}
C.Pq.prototype={
R(){return new C.aHV(D.af4,A.a([],x.D))},
bw(){return this.r.$0()},
ge9(){return this.c}}
C.aHV.prototype={
gcJt(){return J.bJ9(this.e,0,new C.f1Q())},
a_(){this.a3()
$.aU.cV$.push(this)
this.wt()},
t(){$.aU.hZ(this)
this.a2()},
jn(d){if(d===B.h5)this.wt()},
wt(){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n
var $async$wt=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(C.DU(q.a.c).de(0,B.kg),$async$wt)
case 7:p=e
if(q.c==null){r=[1]
w=5
break}q.l(new C.f1M(q,p))
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
if(q.c!=null&&q.f)q.l(new C.f1N(q))
w=r.pop()
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$wt,v)},
IS(d){return this.bOV(d)},
bOU(){return this.IS(null)},
bOV(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$IS=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:l=t.c
l.toString
w=3
return A.b(C.iD4(l,d),$async$IS)
case 3:s=f
if(s==null||t.c==null){w=1
break}l=B.o.v(1000*Date.now())
r=s.a
q=s.b
p=new C.lY(l,r,q,D.dtv,new A.W(Date.now(),0,!1))
w=4
return A.b(C.Mw(t.a.c,p),$async$IS)
case 4:o=f
w=5
return A.b(t.wt(),$async$IS)
case 5:n=t.c
if(n==null){w=1
break}if(!o){n.L(x.q).f.T(D.fwK)
w=1
break}n=J.aQ(t.e)
for(;;){if(!n.C()){m=p
break}m=n.gP(n)
if(m.a===l)break}l=!1
if(q!=null)if(B.a.i(q).length!==0){l=m.c
l=l==null||B.a.i(l).length===0}q=x.q
n=t.c
if(l)n.L(q).f.T(D.fyz)
else n.L(q).f.T(A.b3(null,null,null,null,null,B.t,null,A.c('Project "'+r+'" saved on this device.',null,null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))
t.Fn(m)
case 1:return A.h(u,v)}})
return A.i($async$IS,v)},
Fn(d){return this.cmc(d)},
cmc(d){var w=0,v=A.j(x.H),u=this,t,s
var $async$Fn=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return A.b(A.hN(s,new C.ava(u.a.c,d,null),!1,"NgmyWorksheetProjectScreen",x.fA),$async$Fn)
case 2:t=f
w=t!=null?3:4
break
case 3:w=5
return A.b(C.Mw(u.a.c,t),$async$Fn)
case 5:case 4:w=6
return A.b(u.wt(),$async$Fn)
case 6:return A.h(null,v)}})
return A.i($async$Fn,v)},
wd(d){return this.c4j(d)},
c4j(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$wd=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=d==="file"?3:5
break
case 3:w=6
return A.b(C.bHu(),$async$wd)
case 6:s=f
w=4
break
case 5:w=d==="scan"?7:9
break
case 7:r=t.c
r.toString
w=10
return A.b(A.hN(r,D.aNv,!0,"NgmyWorksheetProjectScan",x.N),$async$wd)
case 10:q=f
w=q!=null&&B.a.i(q).length!==0?11:13
break
case 11:w=14
return A.b(C.bI0(q),$async$wd)
case 14:w=12
break
case 13:f=null
case 12:s=f
w=8
break
case 9:s=null
case 8:case 4:if(s==null){r=t.c
if(r==null){w=1
break}r=r.L(x.q).f
r.T(A.b3(null,null,null,null,null,B.t,null,A.c(d==="scan"?"Could not read that QR. Stay online for cloud project codes, or try Upload file.":"Could not read that project backup.",null,null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))
w=1
break}p=C.hqZ(s)
w=15
return A.b(C.Mw(t.a.c,p),$async$wd)
case 15:o=f
w=16
return A.b(t.wt(),$async$wd)
case 16:r=t.c
if(r==null){w=1
break}if(!o){r.L(x.q).f.T(D.fyE)
w=1
break}r.L(x.q).f.T(A.b3(null,null,null,null,null,B.t,null,A.c('Imported "'+p.b+'"',null,null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))
t.Fn(p)
case 1:return A.h(u,v)}})
return A.i($async$wd,v)},
P0(d){return this.bNx(d)},
bNx(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$P0=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=5
return A.b(A.ce(null,null,!0,null,new C.f1x(d),s,null,!0,!0,x.y),$async$P0)
case 5:w=f===!0?3:4
break
case 3:w=6
return A.b(C.pt(t.a.c,A.a([],x.D)),$async$P0)
case 6:w=7
return A.b(t.wt(),$async$P0)
case 7:s=t.c
if(s==null){w=1
break}s.L(x.q).f.T(D.fwP)
case 4:case 1:return A.h(u,v)}})
return A.i($async$P0,v)},
cmq(d){var w=this.c
w.toString
A.bU(B.L,null,new C.f1G(this,d),w,!0,!0,!0,null,!1,!1,x.z)},
b9s(d,e,f,g,h,i){var w,v,u,t,s,r=null,q=A.n(16),p=g.a
if(p)w=B.ka
else w=B.c
v=A.n(16)
u=A.K(p?B.eo:B.bO,B.r,1)
t=d.j(0.14)
s=A.n(12)
s=A.p(r,A.V(e,d,r,r,r,22),B.f,r,r,new A.o(t,r,r,s,r,r,B.m),r,r,r,r,B.bR,r,r,r)
t=A.c(i,r,r,r,r,r,r,A.l(r,r,p?B.aS:B.aw,r,r,r,r,r,r,r,r,14,r,r,B.D,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
return A.aG(!1,B.a3,!0,r,A.aM(!1,q,!0,A.p(r,A.x(A.a([s,B.af,t,B.bs,A.c(h,r,r,r,r,r,r,A.l(r,r,p?B.bv:B.bk,r,r,r,r,r,r,r,r,11,r,r,r,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),B.B,r,B.e,B.h,0,B.p),B.f,r,r,new A.o(w,r,u,v,r,r,B.m),r,r,r,r,B.tA,r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,f,r,r,r,r,r,r,r),B.f,B.L,0,r,r,r,r,r,B.ai)},
a1A(d,e){return this.cmd(d,e)},
cmd(d,e){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a1A=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return A.b(A.bU(B.L,null,new C.f1B(t,e,d),r,!0,!0,!1,null,!1,!1,x.N),$async$a1A)
case 3:s=g
r=t.c
if(r==null||s==null){w=1
break}w=s==="transfer"?4:6
break
case 4:C.hQv(r,new C.f1C(t),t.a.c,d)
w=5
break
case 6:w=s==="delete"?7:8
break
case 7:w=9
return A.b(t.P2(d,e),$async$a1A)
case 9:case 8:case 5:case 1:return A.h(u,v)}})
return A.i($async$a1A,v)},
b6q(d,e,f,g,h,i,j){var w,v,u=null,t=f.j(0.12),s=A.n(12)
s=A.p(u,A.V(e,f,u,u,u,22),B.f,u,u,new A.o(t,u,u,s,u,u,B.m),u,u,u,u,B.bR,u,u,u)
if(d)t=B.aC
else t=h.a?B.aS:B.aw
t=A.c(j,u,u,u,u,u,u,A.l(u,u,t,u,u,u,u,u,u,u,u,u,u,u,B.D,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)
w=h.a
v=x.p
t=A.E(A.x(A.a([t,A.c(i,u,u,u,u,u,u,A.l(u,u,w?B.bv:B.bk,u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],v),B.B,u,B.e,B.h,0,B.p),1)
return A.aG(!1,B.a3,!0,u,A.aM(!1,u,!0,new A.D(A8.D9,A.A(A.a([s,B.bc,t,A.V(B.eM,w?B.bv:B.bk,u,u,u,u)],v),B.l,u,B.e,B.h,0,u,u),u),u,!0,u,u,u,u,u,u,u,u,u,u,u,g,u,u,u,u,u,u,u),B.f,B.L,0,u,u,u,u,u,B.ai)},
ctj(d,e,f,g,h,i){return this.b6q(!1,d,e,f,g,h,i)},
P2(d,e){return this.bNH(d,e)},
bNH(d,e){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$P2=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=d.b
w=5
return A.b(A.lC(r,"Cancel","Delete","Remove \u201c"+s+"\u201d and all of its budget items from this device?","Delete project?"),$async$P2)
case 5:w=g?3:4
break
case 3:w=6
return A.b(C.bG9(t.a.c,d.a),$async$P2)
case 6:w=7
return A.b(t.wt(),$async$P2)
case 7:r=t.c
if(r==null){w=1
break}r.L(x.q).f.T(A.b3(null,null,null,null,null,B.t,null,A.c("Deleted \u201c"+s+"\u201d",null,null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))
case 4:case 1:return A.h(u,v)}})
return A.i($async$P2,v)},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=A.Q(d).ax.a===B.I,m=new C.ur(n),l=n?B.c7:B.hW
if(p.f)n=D.bgo
else{w=A.aF(d,B.dK,x.w).w
v=p.bHW(m)
u=p.c3n(m)
t=p.gbEX()
if(n)s=B.ka
else s=B.c
r=A.n(13)
q=x.p
t=A.a([v,B.af,u,B.aO,new C.GG(A.p(o,A.A(A.a([p.aEx(R.Q6,"Projects",m,D.af4),p.aEx(B.vn,"Cashier",m,D.b49),p.aEx(B.I8,"Family Tree",m,D.hWR)],q),B.l,o,B.e,B.h,0,o,o),B.f,o,o,new A.o(s,o,o,r,o,o,B.m),o,o,o,o,o,o,o,o),14,B.eA,0.95,t,o),B.by],q)
v=p.d
if(v===D.af4){v=J.ad(p.e)
B.d.u(t,A.a([A.A(A.a([A.c("Projects ("+v+")",o,o,o,o,o,o,A.l(o,o,n?B.aS:B.aw,o,o,o,o,o,o,o,o,16,o,o,B.D,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),B.aW,new C.aA3(p.gaUk(),o)],q),B.l,o,B.e,B.h,0,o,o),B.aB,p.ctl(m)],q))}else{n=p.a
if(v===D.b49)t.push(new C.aqX(n.c,m,o))
else{v=p.r
t.push(new C.as9(n.c,n.d,n.e,n.f,new C.f1T(p),new C.f1U(p),new A.bg(v,x.b4)))}}n=A.cb(A.x(t,B.B,o,B.e,B.h,0,B.p),B.t,o,B.y,o,o,new A.R(20,w.r.b+8,20,32),o,o,B.ah)}return A.c5(o,l,A.bo(!0,n,!0,!1,B.ag,!0,!1),o,!1,!1,o,o)},
bHW(d){var w=null,v=A.n(8),u=d.a,t=A.V(A2.a3q,u?B.bv:B.bk,w,w,w,16)
return A.aM(!1,v,!0,new A.D(B.jX,A.A(A.a([t,B.bb,A.c("Back to Profile",w,w,w,w,w,w,A.l(w,w,u?B.bv:B.bk,w,w,w,w,w,w,w,w,14,w,w,B.a8,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),B.l,w,B.e,B.O,0,w,w),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.f1u(this),w,w,w,w,w,w,w)},
gbEX(){switch(this.d.a){case 0:return D.aed
case 1:return D.hJs
case 2:return D.aee}},
c3n(d){var w=null,v=A.n(15),u=A.a([new A.aa(0,B.H,B.aV.j(0.35),B.cz,16)],x.V),t=x.p,s=A.A(A.a([A.p(w,D.c32,B.f,w,w,new A.o(B.c.j(0.22),w,w,A.n(12),w,w,B.m),w,44,w,w,w,w,w,44),B.bc,D.bNm,A.aG(!1,B.a3,!0,w,A.aM(!1,A.n(12),!0,A.p(w,D.c0k,B.f,w,w,new A.o(B.c.j(0.22),w,w,A.n(12),w,w,B.m),w,40,w,w,w,w,w,40),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.f1y(this,d),w,w,w,w,w,w,w),B.f,B.L,0,w,w,w,w,w,B.ai)],t),B.B,w,B.e,B.h,0,w,w),r=B.b5.j(0.55),q=A.n(12)
return new C.GG(A.p(w,A.x(A.a([new A.D(B.HJ,s,w),A.p(w,A.x(A.a([A.c("Total All Projects",w,w,w,w,w,w,A.l(w,w,B.c.j(0.85),w,w,w,w,w,w,w,w,12,w,w,B.a8,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.at,A.c(A.BF(this.gcJt()),w,w,w,w,w,w,D.fQJ,w,w,w)],t),B.B,w,B.e,B.h,0,B.p),B.f,w,w,new A.o(r,w,w,q,w,w,B.m),w,w,w,V.tz,B.jC,w,w,1/0)],t),B.B,w,B.e,B.h,0,B.p),B.f,w,w,new A.o(B.aV,w,w,v,u,w,B.m),w,w,w,w,w,w,w,1/0),16,B.ag,1,D.hJr,w)},
aEx(d,e,f,g){var w,v,u=null,t=this.d===g,s=A.n(12),r=t?B.aV:B.L,q=A.n(12),p=t?A.K(B.c.j(0.55),B.r,2):A.K(B.L,B.r,2),o=t?A.a([new A.aa(0.5,B.H,B.aV.j(0.42),B.cP,14)],x.V):u
if(t)w=B.c
else w=f.a?B.bv:B.bk
w=A.V(d,w,u,u,u,16)
if(t)v=B.c
else v=f.a?B.bv:B.bk
return A.E(A.aG(!1,B.a3,!0,u,A.aM(!1,s,!0,A.cV(u,A.A(A.a([w,B.dZ,new A.d2(1,B.ci,A.c(e,u,1,B.a2,u,u,u,A.l(u,u,v,u,u,u,u,u,u,u,u,12,u,u,B.N,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u)],x.p),B.l,u,B.ba,B.h,0,u,u),u,u,B.cp,new A.o(r,u,p,q,o,u,B.m),B.j1,u,u,u,u,B.HS,u,u,u),u,!0,u,u,u,u,u,u,u,u,u,u,u,new C.f1P(this,g),u,u,u,u,u,u,u),B.f,B.L,0,u,u,u,u,u,B.ai),1)},
ctl(d){var w,v,u,t,s,r,q=this,p=null
if(J.cx(q.e)){w=d.a
v=w?B.el:B.c
u=A.n(15)
t=A.p(p,D.c0r,B.f,p,p,new A.o(p,p,p,p,A.a([new A.aa(2,B.H,B.aV.j(0.5),B.eU,28)],x.V),D.cd8,B.a6),p,108,p,p,p,p,p,108)
s=A.c("No Projects Yet",p,p,p,p,p,p,A.l(p,p,w?B.aS:B.aw,p,p,p,p,p,p,p,p,18,p,p,B.D,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)
r=x.p
return new C.GG(A.p(p,A.x(A.a([t,B.di,s,B.M,A.c("Create a new project, or import one someone shared with you.",p,p,p,p,p,p,A.l(p,p,w?B.bv:B.bk,p,p,p,p,p,p,p,p,14,p,p,p,p,1.4,!0,p,p,p,p,p,p,p,p),B.K,p,p),B.ec,A.A(A.a([A.E(q.aVV(B.jH,"Scan QR",new C.f1J(q),d),1),B.ar,A.E(q.aVV(S.Ab,"Upload file",new C.f1K(q),d),1)],r),B.l,p,B.e,B.h,0,p,p),B.aB,A.bI(D.hhN,p,q.gaUk(),A.bp(B.aV,p,p,p,B.c,B.hr,p,p,new A.b9(A.n(12),B.a1),p,p,p))],r),B.l,p,B.e,B.h,0,B.p),B.f,p,p,new A.o(v,p,p,u,p,p,B.m),p,p,p,p,p,p,p,1/0),16,D.bJS,1.05,D.aed,p)}w=J.b8(q.e,new C.f1L(q,d),x.l)
w=A.B(w,w.$ti.k("aj.E"))
return new C.GG(A.x(w,B.l,p,B.e,B.h,0,B.p),16,B.bR,1,D.aed,p)},
aVV(d,e,f,g){var w=null,v=B.aV.j(g.a?0.18:0.1),u=A.n(12),t=A.n(12),s=A.n(12),r=A.K(B.aV.j(0.45),B.r,1)
return A.aG(!1,B.a3,!0,u,A.aM(!1,t,!0,A.p(w,A.x(A.a([A.V(d,B.b5,w,w,w,26),B.M,A.c(e,w,w,w,w,w,w,D.fOT,B.K,w,w)],x.p),B.l,w,B.e,B.O,0,B.p),B.f,w,w,new A.o(w,w,r,s,w,w,B.m),w,w,w,w,AQ.a1C,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),B.f,v,0,w,w,w,w,w,B.ai)},
ctk(d,e){var w,v,u=null,t=e.a,s=t?B.el:B.c,r=A.n(14),q=A.K(t?B.eo:B.bO,B.r,1),p=A.a([new A.aa(0,B.H,B.v.j(t?0.35:0.08),B.eC,10)],x.V),o=A.n(14),n=t?B.bv:B.bk
n=A.by(B.YP,new A.fL(1.7777777777777777,C.aTG(!0,B.fr,1/0,R.Q6,n,d.c,1/0),u),B.aq)
w=x.p
v=A.E(A.x(A.a([A.c(d.b,u,u,u,u,u,u,A.l(u,u,t?B.aS:B.aw,u,u,u,u,u,u,u,u,15,u,u,B.D,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),B.at,A.c(""+d.d.length+" budget items \xb7 "+A.BF(d.gxQ()),u,u,u,u,u,u,D.fMP,u,u,u)],w),B.B,u,B.e,B.h,0,B.p),1)
return A.p(u,A.aG(!1,B.a3,!0,u,A.aM(!1,o,!0,A.x(A.a([n,new A.D(B.bF,A.A(A.a([v,A.aI(u,u,u,u,A.V(AD.a4u,t?B.bv:B.bk,u,u,u,u),u,u,u,new C.f1H(this,d,e),u,u,u,u,"Project options",u)],w),B.l,u,B.e,B.h,0,u,u),u)],w),B.B,u,B.e,B.h,0,B.p),u,!0,u,u,u,u,u,u,u,u,u,u,u,new C.f1I(this,d),u,u,u,u,u,u,u),B.f,B.L,0,u,u,u,u,u,B.ai),B.f,u,u,new A.o(s,u,q,r,p,u,B.m),u,u,u,B.dU,u,u,u,1/0)}}
C.bC_.prototype={}
C.rG.prototype={
ak(){var w=this,v=w.c,u=w.d
return A.J(["id",w.a,"name",w.b,"quantity",v,"unitPrice",u,"unitLabel",w.e,"price",v*u],x.N,x.z)},
gd2G(){var w,v,u,t,s=this.c
if(s===B.i.fO(s))w=B.o.v(B.i.M(s))
else{v=B.i.a5(s,2)
u=A.ag("\\.?0+$",!0,!1,!1,!1)
w=A.aL(v,u,"")}t=B.a.i(this.e)
if(t.length===0)t="each"
if(t==="each"||t==="pcs")return w+" \xd7"
return w+" "+t+" \xd7"}}
C.lY.prototype={
gxQ(){return B.d.cE(this.d,0,new C.cIW())},
ak(){var w=this,v=w.d,u=A.U(v).k("O<1,a9<m,@>>")
v=A.B(new A.O(v,new C.cIV(),u),u.k("aj.E"))
return A.J(["id",w.a,"name",w.b,"thumbnailPath",w.c,"items",v,"createdAt",w.e.ag()],x.N,x.z)},
bgU(d,e){var w=this,v=e==null?w.c:e,u=d==null?w.d:d
return new C.lY(w.a,w.b,v,u,w.e)},
bgC(d){return this.bgU(d,null)},
Ua(d){return this.bgU(null,d)}}
C.II.prototype={
a9(){return"FamilyGender."+this.b}}
C.ig.prototype={
ak(){var w=this
return A.J(["id",w.a,"name",w.b,"gender",C.hLB(w.c),"parentId",w.d,"spouseId",w.e,"photoPath",w.f,"notes",w.r,"birthDate",w.w,"birthPlace",w.x,"deathDate",w.y,"occupation",w.z,"birthOrder",w.Q,"hidden",w.as,"visibleChildrenCap",w.at],x.N,x.z)},
aHh(d,e,f,g,h,i,j,k,l,m,n,o,p){var w=this,v=m==null?w.d:m,u=o==null?w.e:o,t=n==null?w.f:n
return new C.ig(w.a,j,h,v,u,t,k,d,f,g,l,e,i,p)}}
C.an8.prototype={
a9(){return"FamilyTreeAccessRole."+this.b}}
C.lb.prototype={
gars(){var w=this.f
return new A.X(w,new C.bV0(),A.U(w).k("X<1>")).gJ(0)},
ak(){var w=this,v=w.f,u=A.U(v).k("O<1,a9<m,@>>")
v=A.B(new A.O(v,new C.bV_(),u),u.k("aj.E"))
return A.J(["id",w.a,"name",w.b,"code",w.c,"isPrivate",w.d,"collaboratorEmails",w.e,"members",v,"createdAt",w.r.ag(),"visibleChildrenPerParent",w.w,"ownerEmail",w.x,"localRole",C.it3(w.y),"games",w.z],x.N,x.z)},
xa(d,e,f,g,h,i,j,k,l){var w=this,v=j==null?w.b:j,u=d==null?w.c:d,t=g==null?w.d:g,s=e==null?w.e:e,r=i==null?w.f:i,q=l==null?w.w:l,p=k==null?w.x:k,o=h==null?w.y:h,n=f==null?w.z:f
return new C.lb(w.a,v,u,t,s,r,w.r,q,p,o,n)},
bgT(d,e){var w=null
return this.xa(w,w,w,d,e,w,w,w,w)},
cSU(d,e,f,g,h,i,j){return this.xa(d,e,null,f,g,h,i,j,null)},
aHm(d,e){var w=null
return this.xa(w,w,w,w,d,w,w,e,w)},
cSW(d,e,f,g,h,i,j,k){return this.xa(d,e,null,f,g,h,i,j,k)},
cRp(d){var w=null
return this.xa(w,w,w,w,w,w,w,d,w)},
cRN(d){var w=null
return this.xa(w,w,w,w,w,w,w,w,d)},
bgw(d){var w=null
return this.xa(w,w,d,w,w,w,w,w,w)},
aH7(d){var w=null
return this.xa(w,w,w,w,w,d,w,w,w)},
cSr(d,e,f){var w=null
return this.xa(w,d,w,w,e,w,w,f,w)},
cRc(d){var w=null
return this.xa(w,w,w,d,w,w,w,w,w)},
cRZ(d,e){var w=null
return this.xa(d,w,w,w,w,w,e,w,w)}}
C.cIX.prototype={
a9(){return"WrapAlignment."+this.b}}
C.cIY.prototype={
a9(){return"WrapCrossAlignment."+this.b}}
C.aK_.prototype={}
C.bck.prototype={
aj(d){this.a=d.a
this.b=d.b},
d1(d){var w=new C.bck()
w.a=this.a
w.b=this.b
return w},
v(d){return A.b5(this).v(0)+" first:"+this.a+" last:"+this.b}}
C.bcj.prototype={
gx0(){return!0},
gGX(){return this.z.b<this.b.length},
aXB(d){switch(0){case 0:return d.a.c}},
aXh(d){switch(0){case 0:return d.a.d}},
bXP(d,e){switch(0){case 0:return new A.i9(d,e)}},
bXc(d,e,f){var w=e-f
switch(0){case 0:return d?w:0}},
hm(b4,b5,b6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=this,b2=b1.b,b3=b2.length
if(b3===0||b1.z.a>=b3){b1.a=new A.j6(0,0,B.o.D(0,b5.a,b5.b),B.o.D(0,b5.c,b5.d))
return}w=A.Ir(b4)
switch(0){case 0:v=b5.b
u=new A.l8(0,v,0,1/0)
t=w===B.Wx
break}s=A.a([],x.gZ)
r=A.S(x.gF,x.S)
for(b3=b1.z,q=B.d.fB(b2,b3.a),p=q.length,o=b1.f,n=b1.w,m=0,l=0,k=0,j=0,i=0,h=0;h<q.length;q.length===p||(0,A.I)(q),++h){g=q[h]
g.hm(b4,u,!0)
f=b1.aXB(g)
f.toString
e=b1.aXh(g)
e.toString
if(i>0&&k+o+f>v){m=Math.max(m,k)
l+=j
if(s.length!==0)l+=n
s.push(new C.aK_(k,j,i))
k=0
j=0
i=0}k+=f
if(i>0)k+=o
j=Math.max(j,e);++i
r.n(0,g,s.length)}if(i>0){m=Math.max(m,k)
l+=j
if(s.length!==0)l+=n
s.push(new C.aK_(k,j,i))}d=s.length
switch(0){case 0:q=b5.cD(new A.i9(m,l))
a0=q.a
a1=q.b
b1.a=new A.j6(0,0,a0,a1)
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
for(q=B.d.fB(b2,a2),f=q.length,h=0;h<q.length;q.length===f||(0,A.I)(q),++h){g=q[h]
if(r.h(0,g)!==a4)break;++a2
a8=b1.aXB(g)
e=b1.aXh(g)
e.toString
a9=b1.bXc(!0,j,e)
if(t){a8.toString
a6-=a8}e=b1.bXP(a6,a3+a9)
b0=g.a
g.a=new A.j6(e.a,e.b,b0.c,b0.d)
if(t)a6-=o
else{a8.toString
a6+=a8+o}}a3-=n
a3=a3
b3.b=a2}},
fZ(d){var w,v,u,t,s,r=this
r.lB(d)
w=d.b
w.iw()
v=A.dy()
u=r.a
v.ei(u.a,u.b,0,1)
w.pw(0,v)
for(u=r.z,u=B.d.du(r.b,u.a,u.b),t=u.length,s=0;s<u.length;u.length===t||(0,A.I)(u),++s)u[s].fZ(d)
w.nE(0)},
Ht(d,e){var w=this.z
w.a=e.a
w.b=e.b
w.a=e.b},
iw(){return this.z}}
C.bAf.prototype={}
var z=a.updateTypes(["ay<~>()","P(ig)","~()","P(lb)","P(nH)","a9<m,@>(lb)","F(lb,lb)","F(ig,ig)","m(ig)","lb(a9<@,@>)","P(lY)","nH(a9<@,@>)","a9<m,@>(nH)","P(v6)","v6()","F(ig)","ai<ig>()","P(zS)","a0U(Z)","m?(ig)","eN<m?>(ig)","ay<~>(lY)","P(rG)","a9<m,@>(ig)","ig(a9<@,@>)","F(lY,lY)","P(agO)","~(bh)","w(p3)","F(F,aaR)","P(qX<F>)","~(qX<F>)","UA(Z)","P(N8)","P(v5)","~(ig)","m(m)","WV(Z)","Uz(Z)","afa(Z)","a_P(Z)","ig(ig)","cP(bv<m,GV>)","cP(Lc)","a0i(Z)","F?(ig)","ig()","P(Lc)","D(ig)","~(II)","a0e(Z)","w(II,m,a_)","P(agH)","bv<m,ai<a9<m,@>>>(m,ai<nH>)","a0g(Z)","+count,id,name(F,m,m)(lb)","m(lb)","a1d(Z)","a1e(Z)","P(md)","md()","a_k(Z)","a3_(Z)","a_R(Z)","a_Q(Z)","~(F)","~(m,lL?)","w(rG)","afv(Z)","~(lH)","ay<~>([m?])","H(H,lY)","w(lY)","H(H,rG)","a9<m,@>(rG)","rG(a9<@,@>)","ai<lL>()","v5()","m(W)","lY(a9<@,@>)","cn(IH)","m(lY)","a9<m,@>(lY)","F(nH,nH)","lb(a9<m,@>)","lb(lb)"])
C.fWO.prototype={
$1(d){return d.a+" "+d.b},
$S:128}
C.fWN.prototype={
bqd(d){var w=0,v=A.j(x.T),u,t=this,s,r,q,p,o
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.a,r=null,q=0
case 3:if(!(q<2)){w=5
break}w=6
return A.b(A.rx(s,d,B.ig,"book",E.Hu),$async$$1)
case 6:p=f
o=p.b
if(o!=null&&B.a.i(o).length!==0){u=o
w=1
break}r=p.a
case 4:++q
w=3
break
case 5:throw A.Y(r!=null&&A5.Mh(r)?y.k:y.A)
case 1:return A.h(u,v)}})
return A.i($async$$1,v)},
$1(d){return this.bqd(d)},
$S:259}
C.fWP.prototype={
$1(d){return d.b},
$S:128}
C.h6i.prototype={
$1(d){var w=null
return A.eH(w,B.L,new H.QS(this.a,this.b,w),w,w,0,B.a1R,w,B.dd,w,w,w)},
$S:47}
C.fJC.prototype={
$1(d){return d!=null},
$S:226}
C.fJD.prototype={
$1(d){var w
if(d!=null)w=Math.abs(d.a)<=1.5&&Math.abs(d.b)<=1.5
else w=!0
return w},
$S:226}
C.fJI.prototype={
$1(d){if(this.a)return new A.r(d.a*520,d.b*160)
return d},
$S:180}
C.fUw.prototype={
$4$bold$valueColor(d,e,f,g){var w=null,v=A.fj(d,w,w,w,A.hp(w,B.ue,w,w,w,w,w,w,w,B.dL,w,w,10.5,w,B.eL,w,!0,w,w,w,w),w),u=f?B.eL:B.xc
return new A.om(D.bF7,A.abF(A.a([new A.h8(130,w,v),new A.zR(1,B.I2,A.fj(e,w,w,w,A.hp(w,g==null?D.eFm:g,w,w,w,w,w,w,w,B.dL,w,w,11,w,u,w,!0,w,w,w,w),w))],x.Z),B.z9,B.m7))},
$2(d,e){return this.$4$bold$valueColor(d,e,!1,null)},
$3$bold(d,e,f){return this.$4$bold$valueColor(d,e,f,null)},
$S:1944}
C.fUv.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g="Missed days",f=A.wg(999)
f=A.xU(A.m7(h,A.fj("Cashier",h,h,h,A.hp(h,D.B6,h,h,h,h,h,h,h,B.dL,h,h,10,h,B.eL,h,!0,h,h,h,h),h),h,new A.l9(D.eFd,h,f,B.il,h),h,h,D.bFB,h))
w=A.xU(A.fj("Debt receipt",h,h,h,A.hp(h,h,h,h,h,h,h,h,h,B.dL,h,h,22,h,B.eL,h,!0,h,h,h,h),h))
v=A.xU(A.fj(C.xA(new A.W(Date.now(),0,!1),!0),h,h,h,D.acC,h))
u=A.wg(12)
t=i.b
s=B.a.i(t.b)
if(s.length===0)s="\u2014"
s=A.fj(s,h,h,h,A.hp(h,h,h,h,h,h,h,h,h,B.dL,h,h,14,h,B.eL,h,!0,h,h,h,h),h)
r=A.fj("Person who owes",h,h,h,D.acC,h)
q=A.wg(10)
p=x.Z
u=A.m7(h,A.zJ(A.a([s,new A.h8(h,2,h),r,new A.h8(h,10,h),A.m7(h,A.zJ(A.a([A.fj("Amount owed",h,h,h,D.acC,h),new A.h8(h,2,h),A.fj(A.BF(t.c),h,h,h,A.hp(h,D.B6,h,h,h,h,h,h,h,B.dL,h,h,20,h,B.eL,h,!0,h,h,h,h),h)],p),B.tr,B.m7),h,new A.l9(B.qf,h,q,B.il,h),h,h,D.bEN,1/0)],p),B.tr,B.m7),h,new A.l9(E.aOT,h,u,B.il,h),h,h,D.bGP,1/0)
q=new A.o7(D.eFg,0.9,B.lp)
r=A.wg(12)
s=i.c
o=s.$2("Original due",C.xA(t.r,!1))
n=s.$2("Current due",C.xA(t.f,!1))
m=i.d
l=new A.o7(m,1.1,B.lp)
k=A.wg(8)
j=i.a
k=A.a([o,n,new A.h8(h,6,h),A.m7(h,A.xU(A.fj(t.gaOr(),h,h,h,A.hp(h,m,h,h,h,h,h,h,h,B.dL,h,h,11,h,B.eL,h,!0,0.5,h,h,h),h)),h,new A.l9(h,new A.qg(l,l,l,l),k,B.il,h),h,h,D.bFK,1/0),new A.h8(h,10,h),s.$4$bold$valueColor("Date paid",j.c,!0,j.b)],p)
if(t.x!=null&&i.e)k.push(s.$4$bold$valueColor(g,"None \u2014 paid on time",!0,D.B6))
else{o=i.f
n=o.length
if(n===0)k.push(s.$4$bold$valueColor(g,"None yet",!0,D.B6))
else{n=A.fj("Missed days ("+n+")",h,h,h,A.hp(h,B.ue,h,h,h,h,h,h,h,B.dL,h,h,10.5,h,B.eL,h,!0,h,h,h,h),h)
m=A.U(o).k("O<1,U9>")
o=A.B(new A.O(o,new C.fUu(),m),m.k("aj.E"))
B.d.u(k,A.a([new A.h8(h,4,h),n,new A.h8(h,6,h),new C.bcj(5,5,new C.bck(),o)],p))}}o=B.a.i(t.y)
if(o.length!==0)B.d.u(k,A.a([new A.h8(h,8,h),s.$2("Notes",o)],p))
f=A.a([f,new A.h8(h,8,h),w,new A.h8(h,3,h),v,new A.h8(h,16,h),u,new A.h8(h,10,h),A.m7(h,A.zJ(k,B.z9,B.m7),h,new A.l9(h,new A.qg(q,q,q,q),r,B.il,h),h,h,B.anv,1/0)],p)
w=j.a
if(w!=null){v=new A.o7(B.Kz,1,B.lp)
B.d.u(f,A.a([new A.h8(h,16,h),A.fj("Debtor signature",h,h,h,A.hp(h,B.ue,h,h,h,h,h,h,h,B.dL,h,h,10,h,B.eL,h,!0,h,h,h,h),h),new A.h8(h,6,h),A.m7(h,new A.IZ(w,B.Z1,h,h),h,new A.l9(h,new A.qg(v,v,v,v),A.wg(6),B.il,h),82,h,B.Pr,1/0)],p))}f.push(new A.h8(h,18,h))
if(t.x!=null)w=i.e?"Payment was received on time.":"Payment was received after one or more missed days (shown in red)."
else w="This debt is still unpaid. Missed days appear in red when the due date has passed."
f.push(A.fj(w,h,h,h,D.fEX,h))
f.push(new A.h8(h,18,h))
f.push(A.xU(A.fj("NGMY.ORG",h,h,h,A.hp(h,D.B6,h,h,h,h,h,h,h,B.dL,h,h,14,h,B.eL,h,!0,1.8,h,h,h),h)))
return f},
$S:355}
C.fUu.prototype={
$1(d){var w=null,v=new A.o7(D.KA,0.7,B.lp),u=A.wg(999)
return A.m7(w,A.fj(C.xA(d,!1),w,w,w,A.hp(w,D.KA,w,w,w,w,w,w,w,B.dL,w,w,9.5,w,B.eL,w,!0,w,w,w,w),w),w,new A.l9(w,new A.qg(v,v,v,v),u,B.il,w),w,w,D.bLh,w)},
$S:1945}
C.cak.prototype={
$1(d){var w=null,v=B.bE.j(0.08),u=A.n(999),t=A.K(B.bE.j(0.28),B.r,1)
return A.p(w,A.c(C.xA(d,!1),w,w,w,w,w,w,D.fMg,w,w,w),B.f,w,w,new A.o(v,w,t,u,w,w,B.m),w,w,w,w,B.eS,w,w,w)},
$S:1946}
C.h6P.prototype={
$1(d){var w=null,v=A.aF(d,B.bZ,x.w).w,u=A.n(26),t=A.aI(w,w,w,w,D.c42,w,w,w,new C.h6M(d),w,w,w,w,w,B.co),s=this.a,r=this.b,q=B.c.j(0.28),p=x.p
return A.eH(w,B.L,new A.cS(new A.aY(0,380,0,v.a.b*0.9),A.aG(!1,B.a3,!0,u,new A.D(B.a1D,A.x(A.a([new A.bK(B.a9,w,w,t,w),new A.d2(1,B.ci,A.cb(A.x(A.a([new A.e6(new C.b1g(r,w),s),B.R,A.A(A.a([A.E(A.eq(B.Aj,w,D.hdY,new C.h6N(s,r,d),A.dk(w,w,w,w,w,w,w,w,w,B.c,w,w,B.f8,w,new A.b9(A.n(14),B.a1),new A.ax(q,1,B.r,-1),w,w,w,w)),1),B.aa,A.E(A.db(B.a55,w,D.haj,new C.h6O(r,d),A.bp(B.b5,w,w,w,B.c,w,B.f8,w,new A.b9(A.n(14),B.a1),w,w,w)),1)],p),B.l,w,B.e,B.h,0,w,w)],p),B.l,w,B.e,B.O,0,B.p),B.t,w,B.y,w,w,w,w,w,B.ah),w)],p),B.l,w,B.e,B.O,0,B.p),w),B.f,B.aw,0,w,w,w,w,w,B.ai),w),w,w,0,AM.a22,w,B.dd,w,w,w)},
$S:47}
C.h6M.prototype={
$0(){A.a7(this.a,!1).N(null)
return null},
$S:0}
C.h6N.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:m=$.aU.bk$.x.h(0,t.a)
m=m==null?null:m.gbg()
x.az.a(m)
if(m==null){w=1
break}w=4
return A.b(m.lv(2.5),$async$$0)
case 4:w=3
return A.b(e.ho(B.ho),$async$$0)
case 3:s=e
if(s==null){w=1
break}r=J.eU(B.dM.gaS(s))
m=t.b
q=B.a.i(m.b)
p=A.ag("[^a-zA-Z0-9_-]+",!0,!1,!1,!1)
o=A.aL(q,p,"_")
if(o.length>32)o=B.a.aw(o,0,32)
w=5
return A.b(A.rA(r,"ngmy_cashier_receipt_"+(o.length===0?m.a:o)+".png"),$async$$0)
case 5:n=e
m=t.c
if(m.e!=null)m.L(x.q).f.T(A.b3(null,null,null,null,null,B.t,null,A.c(n,null,null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.h6O.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(C.h0F(u.a),$async$$0)
case 2:t=e
s=u.b
if(s.e!=null){s=s.L(x.q).f
s.T(A.b3(null,null,null,null,null,B.t,null,A.c(t?"Print dialog opened.":"Could not print receipt.",null,null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))}return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.h6H.prototype={
$1(d){var w=null,v=A.n(20),u=x.p,t=this.b
return A.eH(w,B.aw,A.x(A.a([new A.D(D.bGD,A.A(A.a([A.E(A.c(this.a,w,w,w,w,w,w,B.nx,w,w,w),1),A.aI(w,w,w,w,B.lC,w,w,w,new C.h6F(d),w,w,w,w,w,w)],u),B.l,w,B.e,B.h,0,w,w),w),new A.d2(1,B.ci,new A.D(B.f2,A.by(A.n(14),A.h5(t,B.z,w,w,B.cs,B.dI,!1,w,!1,w,w),B.aq),w),w),new A.D(B.P6,new A.a5(1/0,w,A.db(B.oc,w,D.aZi,new C.h6G(t,this.c,d),A.bp(B.b5,w,w,w,B.c,w,w,w,new A.b9(A.n(14),B.a1),w,w,w)),w),w)],u),B.l,w,B.e,B.O,0,B.p),w,w,w,B.Pi,w,B.dd,w,new A.b9(v,B.a1),w)},
$S:47}
C.h6F.prototype={
$0(){A.a7(this.a,!1).N(null)
return null},
$S:0}
C.h6G.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(A.rA(u.a,u.b),$async$$0)
case 2:t=e
s=u.c
if(s.e!=null)s.L(x.q).f.T(A.b3(null,null,null,null,null,B.t,null,A.c(t,null,null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.h6T.prototype={
$1(d){var w=null,v=A.n(20),u=x.p,t=this.a,s=this.b
return A.eH(w,B.aw,new A.D(D.bGL,A.x(A.a([A.A(A.a([D.bMs,A.aI(w,w,w,w,B.lC,w,w,w,new C.h6R(d),w,w,w,w,w,w)],u),B.l,w,B.e,B.h,0,w,w),B.M,new A.e6(A.by(A.n(14),A.p(w,A.b4(w,w,w,new C.beC(s.ax,w),B.aA),B.f,B.c,w,w,w,200,w,w,w,w,w,1/0),B.aq),t),B.af,new A.a5(1/0,w,A.db(B.oc,w,D.aZi,new C.h6S(t,s,d),A.bp(B.b5,w,w,w,B.c,w,w,w,new A.b9(A.n(14),B.a1),w,w,w)),w)],u),B.l,w,B.e,B.O,0,B.p),w),w,w,w,w,w,B.dd,w,new A.b9(v,B.a1),w)},
$S:47}
C.h6R.prototype={
$0(){A.a7(this.a,!1).N(null)
return null},
$S:0}
C.h6S.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:n=$.aU.bk$.x.h(0,t.a)
n=n==null?null:n.gbg()
x.az.a(n)
if(n==null){w=1
break}w=4
return A.b(n.lv(2.5),$async$$0)
case 4:w=3
return A.b(e.ho(B.ho),$async$$0)
case 3:s=e
if(s==null){w=1
break}n=t.b
r=B.a.i(n.b)
q=A.ag("[^a-zA-Z0-9_-]+",!0,!1,!1,!1)
p=A.aL(r,q,"_")
if(p.length>32)p=B.a.aw(p,0,32)
r=J.eU(B.dM.gaS(s))
w=5
return A.b(A.rA(r,"ngmy_cashier_signature_"+(p.length===0?n.a:p)+".png"),$async$$0)
case 5:o=e
n=t.c
if(n.e!=null)n.L(x.q).f.T(A.b3(null,null,null,null,null,B.t,null,A.c(o,null,null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.fOA.prototype={
$1(d){return d.a===this.a},
$S:258}
C.dU1.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.dTN.prototype={
bpq(d,e){var w=0,v=A.j(x.H),u=this,t,s,r,q,p
var $async$$2=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:q=u.b
p=q.c
p.toString
t=q.a.d.a?B.el:B.c
s=u.a
w=2
return A.b(A.bU(t,null,new C.dTQ(s,q,e),p,!0,!0,!1,B.KT,!1,!1,x.N),$async$$2)
case 2:r=g
if(r!=null)d.$1(new C.dTR(s,r))
return A.h(null,v)}})
return A.i($async$$2,v)},
$2(d,e){return this.bpq(d,e)},
$S:1947}
C.dTQ.prototype={
$1(d){var w,v=null,u=this.c===B.xN,t=u?D.dAP:D.dw8
u=u?"Male":"Female"
w=this.b
u=A.c("Choose "+u.toLowerCase()+" icon",v,v,v,v,v,v,A.l(v,v,w.a.d.a?B.aS:B.aw,v,v,v,v,v,v,v,v,15,v,v,B.D,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
return A.bo(!0,new A.D(P.ao1,A.x(A.a([u,B.at,A.c("Default is already set \u2014 pick another if you want.",v,v,v,v,v,v,A.l(v,v,w.a.d.a?B.bv:B.bk,v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),B.af,A.iK(!0,v,v,B.y,D.fvo,new C.dTP(this.a,w,t,d),t.length,v,B.e8,B.ah,!0)],x.p),B.am,v,B.e,B.O,0,B.p),v),!0,!1,B.ag,!0,!0)},
$S:27}
C.dTP.prototype={
$2(d,e){var w,v,u,t=this,s=null,r=t.c[e],q=r===t.a.e,p=A.n(14)
if(q)w=B.cZ.j(0.14)
else w=t.b.a.d.a?B.a_:B.aS
v=A.n(14)
if(q)u=B.cZ
else u=(t.b.a.d.a?B.bv:B.bk).j(0.16)
u=A.K(u,B.r,q?1.6:1)
return A.aM(!1,p,!0,A.p(B.z,C.b1f(r,26),B.f,s,s,new A.o(w,s,u,v,s,s,B.m),s,s,s,s,s,s,s,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,new C.dTO(t.d,r),s,s,s,s,s,s,s)},
$S:203}
C.dTO.prototype={
$0(){A.a7(this.a,!1).N(this.b)
return null},
$S:0}
C.dTR.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.dTL.prototype={
$3(d,e,f){return B.bK},
$C:"$3",
$R:3,
$S:89}
C.dTM.prototype={
$4(d,e,f,g){var w=this,v=null,u=x.X,t=A.cK(B.cp,e,v)
return new A.da(e,!1,A.iC(B.z,A.at(A.aG(!1,B.a3,!0,v,new A.e8(new C.dTK(w.a,w.b,w.c,w.d,w.e,w.f,w.r,w.w),v),B.f,B.L,0,v,v,v,v,v,B.ai),v,v,v),v,new A.bk(t,new A.bq(0.96,1,u),u.k("bk<bR.T>"))),v)},
$S:34}
C.dTK.prototype={
$2(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=A.aF(d,B.bZ,x.w).w,i=l.b,h=i.a.d.a,g=h?B.el:B.c,f=A.n(14),e=A.K((h?B.bv:B.bk).j(0.16),B.r,1)
h=l.c==null
w=h?"Add person":"Edit"
w=A.E(A.c(w,k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.aS:B.aw,k,k,k,k,k,k,k,k,16,k,k,B.D,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),1)
v=A.n(8)
u=x.p
v=A.A(A.a([w,A.aM(!1,v,!0,new A.D(B.eA,A.V(B.cC,i.a.d.a?B.bv:B.bk,k,k,k,20),k),k,!0,k,k,k,k,k,k,k,k,k,k,k,new C.dTv(d),k,k,k,k,k,k,k)],u),B.l,k,B.e,B.h,0,k,k)
w=l.d
t=A.l(k,k,i.a.d.a?B.aS:B.aw,k,k,k,k,k,k,k,k,14,k,k,B.a8,k,k,!0,k,k,k,k,k,k,k,k)
s=i.aWr("Name")
r=l.a
q=r.d==null?k:new C.dTw(r,l.e,a0)
p=A.n(20)
o=i.a.d.a?B.bt:B.mm
n=A.K(B.cZ.j(0.35),B.r,1)
m=r.d
t=A.aN(k,B.Z,h,k,!0,B.t,k,A.aO(),w,k,k,k,k,k,2,s.bgM(new A.D(B.f7,A.aM(!1,p,!0,A.p(B.z,C.b1f(m==null?"\ud83d\udc64":A.fVl(r.e,m),18),B.f,k,k,new A.o(o,k,n,k,k,k,B.a6),k,34,k,B.cu,k,k,k,34),k,!0,k,k,k,k,k,k,k,k,k,k,k,q,k,k,k,k,k,k,k),k)),B.y,!0,k,!0,k,!1,k,B.al,k,k,k,k,k,k,k,k,k,1,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,B.ae,k,k,k,k,k,k,k,k,k,k,k,t,!0,B.a7,k,B.ll,k,B.acr,k,k)
v=A.a([v,B.af,t,B.M,A.c("Gender (required)",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.bv:B.bk,k,k,k,k,k,k,k,k,11.5,k,k,B.N,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),B.aj,A.A(A.a([A.E(i.aX7("\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1","Male",new C.dTx(r,a0),r.d===B.xN),1),B.aa,A.E(i.aX7("\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1","Female",new C.dTC(r,a0),r.d===B.a8X),1)],u),B.l,k,B.e,B.h,0,k,k)],u)
if(r.d!=null)B.d.u(v,A.a([B.M,new A.bK(B.a5,k,k,A.hv(D.c2g,D.hce,new C.dTD(r,l.e,a0),A.fv(k,k,k,k,k,k,k,k,k,k,k,B.cZ,k,k,k,k,k,k,k,k,k,k,k,k,k,B.co)),k)],u))
v.push(B.R)
t=A.l(k,k,i.a.d.a?B.aS:B.aw,k,k,k,k,k,k,k,k,14,k,k,B.a8,k,k,!0,k,k,k,k,k,k,k,k)
s=A.a([new A.v9(A.ag("[0-9.]",!0,!1,!1,!1),!0,"")],x.aS)
v.push(A.aN(k,B.Z,!1,k,!0,B.t,k,A.aO(),l.f,k,k,k,k,k,2,i.aWs("Amount","$ "),B.y,!0,k,!0,k,!1,k,B.al,k,k,s,k,k,B.eh,k,k,k,1,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,B.ae,k,k,k,k,k,k,k,k,k,k,k,t,!0,B.a7,k,B.ao,k,k,k,k))
v.push(B.R)
t=i.a.d.a
s=t?B.a_:B.aS
q=A.n(10)
p=A.n(10)
o=A.n(10)
n=A.K((t?B.bv:B.bk).j(0.22),B.r,1)
t=A.c("Pay by",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.bv:B.bk,k,k,k,k,k,k,k,k,11,k,k,B.a8,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)
m=C.xA(r.a,!1)
v.push(A.aG(!1,B.a3,!0,q,A.aM(!1,p,!0,A.p(k,A.A(A.a([A.E(A.x(A.a([t,B.bs,A.c(m,k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.aS:B.aw,k,k,k,k,k,k,k,k,14,k,k,B.N,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)],u),B.B,k,B.e,B.h,0,B.p),1),D.bZN],u),B.l,k,B.e,B.h,0,k,k),B.f,k,k,new A.o(k,k,n,o,k,k,B.m),k,k,k,k,B.bg,k,k,k),k,!0,k,k,k,k,k,k,k,k,k,k,k,new C.dTE(r,d,a0),k,k,k,k,k,k,k),B.f,s,0,k,k,k,k,k,B.ai))
if(!h)B.d.u(v,A.a([B.M,A.c("Extending keeps missed days already counted.",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.bv:B.bk,k,k,k,k,k,k,k,k,11,k,k,k,k,1.3,!0,k,k,k,k,k,k,k,k),k,k,k)],u))
v.push(B.R)
t=A.l(k,k,i.a.d.a?B.aS:B.aw,k,k,k,k,k,k,k,k,13,k,k,k,k,k,!0,k,k,k,k,k,k,k,k)
v.push(A.aN(k,B.Z,!1,k,!0,B.t,k,A.aO(),l.r,k,k,k,k,k,2,i.aWr("Note (optional)"),B.y,!0,k,!0,k,!1,k,B.al,k,k,k,k,k,k,k,k,k,2,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,B.ae,k,k,k,k,k,k,k,k,k,k,k,t,!0,B.a7,k,B.ao,k,k,k,k))
v.push(B.af)
v.push(A.c("Optional verification",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.aS:B.aw,k,k,k,k,k,k,k,k,12.5,k,k,B.D,k,k,!0,k,k,k,k,k,k,k,k),k,k,k))
v.push(A.c("ID photo, selfie, and signature from the person who owes you \u2014 all optional.",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.bv:B.bk,k,k,k,k,k,k,k,k,11,k,k,k,k,1.3,!0,k,k,k,k,k,k,k,k),k,k,k))
v.push(i.b4M(r.b.length!==0,B.mt,new C.dTF(r,i,a0),new C.dTG(r,a0),"Upload from gallery","ID photo"))
v.push(i.b4M(r.c.length!==0,D.bT0,new C.dTH(r,i,d,a0),new C.dTI(r,a0),"Camera or gallery","Selfie"))
v.push(B.M)
t=l.w
v.push(new AH.a9u("Signature (optional)",t,new C.dTJ(a0),new C.dTy(a0,t),new C.dTz(d,t,a0),k))
v.push(B.aB)
i=i.a.d.a
t=i?B.bv:B.bk
s=(i?B.bv:B.bk).j(0.28)
s=A.E(A.dY(E.aZb,new C.dTA(d),A.dk(k,k,k,k,k,k,k,k,k,t,k,k,B.r6,k,new A.b9(A.n(10),B.a1),new A.ax(s,1,B.r,-1),k,k,k,k)),1)
t=A.bp(B.cZ,k,k,k,B.c,k,B.r6,k,new A.b9(A.n(10),B.a1),k,k,k)
v.push(A.A(A.a([s,B.aa,A.E(A.bI(A.c(h?"Save":"Update",k,k,k,k,k,k,B.wd,k,k,k),k,new C.dTB(r,w,d),t),1)],u),B.l,k,B.e,B.h,0,k,k))
return A.p(k,A.cb(A.x(v,B.am,k,B.e,B.O,0,B.p),B.t,k,B.y,k,k,k,k,k,B.ah),B.f,k,new A.aY(0,1/0,0,j.a.b*0.88),new A.o(g,k,e,f,k,k,B.m),k,k,k,B.r9,B.jC,k,k,360)},
$S:169}
C.dTv.prototype={
$0(){A.a7(this.a,!1).N(!1)
return null},
$S:0}
C.dTw.prototype={
$0(){var w=this.a.d
w.toString
return this.b.$2(this.c,w)},
$S:0}
C.dTx.prototype={
$0(){return this.b.$1(new C.dTu(this.a))},
$S:0}
C.dTu.prototype={
$0(){var w=this.a
w.d=B.xN
w.e="\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1"},
$S:0}
C.dTC.prototype={
$0(){return this.b.$1(new C.dTt(this.a))},
$S:0}
C.dTt.prototype={
$0(){var w=this.a
w.d=B.a8X
w.e="\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1"},
$S:0}
C.dTD.prototype={
$0(){var w=this.a.d
w.toString
return this.b.$2(this.c,w)},
$S:0}
C.dTE.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.a
w=2
return A.b(A.wc(null,u.b,A.c0(2020,1,1,0,0,0,0,0),null,s,A.c0(2100,1,1,0,0,0,0,0)),$async$$0)
case 2:r=e
if(r!=null)u.c.$1(new C.dTs(t,r))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dTs.prototype={
$0(){var w=this.b
return this.a.a=A.c0(w.gck(),w.gci(),w.gcB(),0,0,0,0,0)},
$S:0}
C.dTF.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(u.b.QG(!1),$async$$0)
case 2:t=e
if(t!=null)u.c.$1(new C.dTr(u.a,t))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dTr.prototype={
$0(){return this.a.b=this.b},
$S:0}
C.dTG.prototype={
$0(){return this.b.$1(new C.dTq(this.a))},
$S:0}
C.dTq.prototype={
$0(){return this.a.b=""},
$S:0}
C.dTH.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.b
q=r.a.d.a?B.el:B.c
w=3
return A.b(A.bU(q,null,new C.dTo(),t.c,!0,!0,!1,null,!1,!1,x.N),$async$$0)
case 3:p=e
if(p==null){w=1
break}w=4
return A.b(r.QG(p==="camera"),$async$$0)
case 4:s=e
if(s!=null)t.d.$1(new C.dTp(t.a,s))
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.dTo.prototype={
$1(d){var w=null
return A.bo(!0,A.x(A.a([A.dO(!1,w,w,w,!0,w,w,w,!0,w,w,B.atz,w,w,w,w,new C.dTi(d),!1,w,w,w,w,w,w,w,D.h2c,w,w,w),A.dO(!1,w,w,w,!0,w,w,w,!0,w,w,B.atx,w,w,w,w,new C.dTj(d),!1,w,w,w,w,w,w,w,D.h9h,w,w,w)],x.p),B.l,w,B.e,B.O,0,B.p),!0,!1,B.ag,!0,!0)},
$S:27}
C.dTi.prototype={
$0(){A.a7(this.a,!1).N("camera")
return null},
$S:0}
C.dTj.prototype={
$0(){A.a7(this.a,!1).N("gallery")
return null},
$S:0}
C.dTp.prototype={
$0(){return this.a.c=this.b},
$S:0}
C.dTI.prototype={
$0(){return this.b.$1(new C.dTn(this.a))},
$S:0}
C.dTn.prototype={
$0(){return this.a.c=""},
$S:0}
C.dTJ.prototype={
$0(){return this.a.$1(new C.dTm())},
$S:0}
C.dTm.prototype={
$0(){},
$S:0}
C.dTy.prototype={
$0(){return this.a.$1(new C.dTl(this.b))},
$S:0}
C.dTl.prototype={
$0(){return B.d.a6(this.a)},
$S:0}
C.dTz.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.b
w=2
return A.b(A.ajJ(u.a,null,null,new C.dTk(u.c,t),t,"Debtor signature"),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dTk.prototype={
$4(d,e,f,g){this.a.$1(new C.dTh(this.b,d))},
$S:444}
C.dTh.prototype={
$0(){var w=this.a
B.d.a6(w)
B.d.u(w,this.b)},
$S:0}
C.dTA.prototype={
$0(){A.a7(this.a,!1).N(!1)
return null},
$S:0}
C.dTB.prototype={
$0(){var w=this
if(B.a.i(w.b.a.a).length===0){w.c.L(x.q).f.T(D.fAy)
return}if(w.a.d==null){w.c.L(x.q).f.T(D.fxn)
return}A.a7(w.c,!1).N(!0)},
$S:0}
C.dU4.prototype={
$3(d,e,f){return B.bK},
$C:"$3",
$R:3,
$S:89}
C.dU5.prototype={
$4(d,e,f,g){var w,v,u,t,s,r=null,q=this.a,p=q.a.d.a,o=p?B.el:B.c,n=A.n(14),m=A.K((p?B.bv:B.bk).j(0.16),B.r,1)
p=A.c("Mark paid?",r,r,r,r,r,r,A.l(r,r,q.a.d.a?B.aS:B.aw,r,r,r,r,r,r,r,r,16,r,r,B.D,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
w=this.b
v=w.b
u=A.BF(w.c)
v=A.c(v+" \xb7 "+u,r,r,r,r,r,r,A.l(r,r,q.a.d.a?B.bv:B.bk,r,r,r,r,r,r,r,r,13,r,r,B.a8,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
u=w.A_(r).length
u=A.c("Missed days: "+u,r,r,r,r,r,r,A.l(r,r,w.A_(r).length>0?B.bE:B.cZ,r,r,r,r,r,r,r,r,12,r,r,B.N,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
q=q.a.d.a
w=q?B.bv:B.bk
t=(q?B.bv:B.bk).j(0.28)
s=x.p
return new A.da(e,!1,A.at(A.aG(!1,B.a3,!0,r,A.p(r,A.x(A.a([p,B.M,v,u,B.aB,A.A(A.a([A.E(A.dY(B.oq,new C.dU2(d),A.dk(r,r,r,r,r,r,r,r,r,w,r,r,B.jW,r,new A.b9(A.n(10),B.a1),new A.ax(t,1,B.r,-1),r,r,r,r)),1),B.aa,A.E(A.bI(D.h9J,r,new C.dU3(d),A.bp(B.cZ,r,r,r,B.c,r,B.jW,r,new A.b9(A.n(10),B.a1),r,r,r)),1)],s),B.l,r,B.e,B.h,0,r,r)],s),B.am,r,B.e,B.O,0,B.p),B.f,r,r,new A.o(o,r,m,n,r,r,B.m),r,r,r,B.zw,B.HJ,r,r,300),B.f,B.L,0,r,r,r,r,r,B.ai),r,r,r),r)},
$S:34}
C.dU2.prototype={
$0(){A.a7(this.a,!1).N(!1)
return null},
$S:0}
C.dU3.prototype={
$0(){A.a7(this.a,!1).N(!0)
return null},
$S:0}
C.dTZ.prototype={
$1(d){var w,v,u,t,s=null,r=this.a,q=new C.dU_(r),p=r.a.d.a,o=p?B.el:B.c,n=A.n(14),m=A.K((p?B.bv:B.bk).j(0.14),B.r,1),l=this.b,k=l.b
p=x.p
k=A.A(A.a([A.E(A.c(k,s,1,B.a2,s,s,s,A.l(s,s,r.a.d.a?B.aS:B.aw,s,s,s,s,s,s,s,s,14,s,s,B.D,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),1),A.c(A.BF(l.c),s,s,s,s,s,s,D.fNU,s,s,s)],p),B.l,s,B.e,B.h,0,s,s)
w=A.j4((r.a.d.a?B.bv:B.bk).j(0.12),s,1,s,s,s)
v=q.$3$icon$label$onTap(B.a3M,"View receipt",new C.dTS(r,d,l))
u=l.x!=null
t=u?B.q0:B.rg
u=u?"Mark unpaid":"Mark paid"
p=A.a([new A.D(D.bGI,k,s),w,v,q.$3$icon$label$onTap(t,u,new C.dTT(r,d,l)),q.$3$icon$label$onTap(B.Dr,"Edit",new C.dTU(r,d,l))],p)
if(B.a.i(l.as).length!==0)p.push(q.$3$icon$label$onTap(B.mt,"View / download ID",new C.dTV(r,d,l)))
if(B.a.i(l.at).length!==0)p.push(q.$3$icon$label$onTap(D.bT_,"View / download selfie",new C.dTW(r,d,l)))
if(l.gaJ1())p.push(q.$3$icon$label$onTap(Ar.a4W,"View / download signature",new C.dTX(r,d,l)))
p.push(q.$4$color$icon$label$onTap(B.bE,B.eq,"Delete",new C.dTY(r,d,l)))
p.push(B.at)
return A.bo(!0,new A.D(V.tz,A.p(s,A.x(p,B.l,s,B.e,B.O,0,B.p),B.f,s,s,new A.o(o,s,m,n,s,s,B.m),s,s,s,s,s,s,s,s),s),!0,!1,B.ag,!0,!0)},
$S:27}
C.dU_.prototype={
$4$color$icon$label$onTap(d,e,f,g){var w,v=null
if(d==null)w=this.a.a.d.a?B.aS:B.aw
else w=d
return A.aM(!1,v,!0,new A.D(B.eY,A.A(A.a([A.V(e,w,v,v,v,20),B.bc,A.c(f,v,v,v,v,v,v,A.l(v,v,w,v,v,v,v,v,v,v,v,14,v,v,B.N,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),B.l,v,B.e,B.h,0,v,v),v),v,!0,v,v,v,v,v,v,v,v,v,v,v,g,v,v,v,v,v,v,v)},
$3$icon$label$onTap(d,e,f){return this.$4$color$icon$label$onTap(null,d,e,f)},
$S:1948}
C.dTS.prototype={
$0(){A.a7(this.b,!1).N(null)
var w=this.a.c
w.toString
C.h6L(w,this.c)},
$S:0}
C.dTT.prototype={
$0(){A.a7(this.b,!1).N(null)
this.a.Tu(this.c)},
$S:0}
C.dTU.prototype={
$0(){A.a7(this.b,!1).N(null)
this.a.E3(this.c)},
$S:0}
C.dTV.prototype={
$0(){var w,v,u
A.a7(this.b,!1).N(null)
w=this.a.c
w.toString
v=this.c
u=v.b
C.bIl(w,v.as,"ngmy_cashier_id_"+v.a+".jpg","ID photo \xb7 "+u)},
$S:0}
C.dTW.prototype={
$0(){var w,v,u
A.a7(this.b,!1).N(null)
w=this.a.c
w.toString
v=this.c
u=v.b
C.bIl(w,v.at,"ngmy_cashier_selfie_"+v.a+".jpg","Selfie \xb7 "+u)},
$S:0}
C.dTX.prototype={
$0(){A.a7(this.b,!1).N(null)
var w=this.a.c
w.toString
C.h6Q(w,this.c)},
$S:0}
C.dTY.prototype={
$0(){A.a7(this.b,!1).N(null)
this.a.QF(0,this.c)},
$S:0}
C.dU6.prototype={
$1(d){return d.x==null},
$S:258}
C.dU7.prototype={
$1(d){return d.x!=null},
$S:258}
C.dU8.prototype={
$2(d,e){return d+e.c},
$S:1949}
C.dU9.prototype={
$0(){return this.a.bFt()},
$S:0}
C.dU0.prototype={
$0(){return this.a.ahf(this.b)},
$S:0}
C.fPl.prototype={
$1(d){return d.a===this.a},
$S:z+34}
C.fPm.prototype={
$0(){return B.d.gG(D.a6d)},
$S:z+77}
C.dje.prototype={
$0(){var w=this.a
return w.l(new C.djc(w,this.b))},
$S:0}
C.djc.prototype={
$0(){return this.a.d=this.b.a},
$S:0}
C.djd.prototype={
$0(){},
$S:0}
C.djf.prototype={
$0(){var w=this.a.gc47()
A.a7(this.b,!1).N(w)
return null},
$S:0}
C.fRU.prototype={
$1(d){return C.hvm(A.a0(d,x.N,x.z))},
$S:z+11}
C.fRV.prototype={
$1(d){return d.a.length!==0},
$S:z+4}
C.fRW.prototype={
$2(d,e){var w=A.c9(d.a,null),v=A.c9(e.a,null)
if(w!=null&&v!=null)return B.o.aQ(w,v)
return d.d.aQ(0,e.d)},
$S:z+83}
C.h5m.prototype={
$1(d){return d.ak()},
$S:z+12}
C.he1.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.fOr.prototype={
$1(d){return d.a===this.a},
$S:z+4}
C.bTI.prototype={
$2(d,e){var w=this.a.h(0,d),v=w==null?null:B.a.i(J.k(w)).toLowerCase()
return v!=null&&J.eD(e,v)?v:null},
$S:1950}
C.h5X.prototype={
$1(d){var w=this
return new C.a0g(w.a,w.b,w.c,w.d,w.e,w.f,null)},
$S:z+54}
C.djU.prototype={
$1(d){var w=this.a
if(w.c!=null)w.l(new C.djT(w,d))},
$S:z+80}
C.djT.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.djI.prototype={
$0(){var w,v=this.a,u=this.b
v.d=u
w=v.e=!1
if(J.cJ(u)?v.r>=J.ad(v.d):w)v.r=J.ad(v.d)-1},
$S:0}
C.djF.prototype={
$0(){var w=this.a
w.r=this.b-1
w.w=w.x
w.x=!1},
$S:0}
C.djg.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.djh.prototype={
$0(){var w=this.a
w.r=this.b
w.x=w.w=!0},
$S:0}
C.djJ.prototype={
$0(){return this.a.w=!1},
$S:0}
C.djp.prototype={
$1(d){var w=null,v=A.Q(d).ax.a===B.I,u=v?B.el:B.c,t=A.c("Remove this page?",w,w,w,w,w,w,A.l(w,w,v?B.aS:B.aw,w,w,w,w,w,w,w,w,w,w,w,B.D,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),s=A.c("\u201c"+this.a.b+"\u201d will be deleted from this device.",w,w,w,w,w,w,A.l(w,w,v?B.bv:B.bk,w,w,w,w,w,w,w,w,w,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)
return A.ei(A.a([A.bM(!1,B.dw,w,w,!0,w,w,w,new C.djn(d),w,w),A.bI(B.yb,w,new C.djo(d),A.bp(B.nI,w,w,w,w,w,w,w,w,w,w,w))],x.p),w,w,u,s,w,w,w,w,t,w)},
$S:18}
C.djn.prototype={
$0(){A.a7(this.a,!1).N(!1)
return null},
$S:0}
C.djo.prototype={
$0(){A.a7(this.a,!1).N(!0)
return null},
$S:0}
C.djq.prototype={
$0(){var w=this.a
w.w=!1
w.r=B.o.D(w.r-1,-1,999)},
$S:0}
C.djG.prototype={
$1(d){return d.a===this.a.y.a},
$S:z+13}
C.djH.prototype={
$0(){return B.d.gG(D.Aw)},
$S:z+14}
C.djl.prototype={
$1(d){var w=this.a,v=w.y,u=w.gzj(0),t=J.ad(w.d)
w=J.ad(w.d)===1?"page":"pages"
return new C.Uz(v.Q,u,"Family Book \xb7 "+t+" "+w,null)},
$S:z+38}
C.djm.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.djr.prototype={
$1(d){var w=this.a,v=w.y,u=B.a.i(w.a.r)
if(u.length===0)u="Our Family Book"
return new C.a_P(v,u,J.ad(w.d),null)},
$S:z+40}
C.djs.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.djS.prototype={
$2(d,e){var w,v,u,t,s=null,r=this.a,q=r.f
q===$&&A.d()
if(e===0)w=A.aA(s,new C.a_t(r.y,r.gzj(0),J.ad(r.d),s),B.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new C.djQ(r),s,s,s,s,s,s,!1,B.a4)
else{w=e-1
v=J.t(r.d,w)
J.ad(r.d)
w=w===r.r&&r.w&&r.a.f
u=r.z
u===$&&A.d()
t=r.Q
t===$&&A.d()
t=new C.bdX(v,e,w,u,t,r.gbWh(),C.hLA(r.y.Q),r.gzj(0),s)
w=t}return A.ca(q,new C.djR(r,e),new A.D(B.a1W,w,s))},
$S:1951}
C.djR.prototype={
$2(d,e){var w,v,u=this.a,t=u.f
t===$&&A.d()
t=t.f
if(t.length!==0&&B.d.gd3(t).ay){t=this.b
u=x.cy.a(B.d.gd3(u.f.f)).gvv(0)
w=t-(u==null?t:u)}else w=0
v=B.i.D(w,-1,0)
u=A.dy()
t=u.a
t.$flags&2&&A.ak(t)
t[11]=0.0013
u.fI(v*3.141592653589793*0.5)
return A.fF(B.a5,A.d5(e,B.i.D(1+v*0.5,0,1)),null,u,!0)},
$S:46}
C.djQ.prototype={
$0(){var w=this.a.f
w===$&&A.d()
return w.aKd(B.r0,B.iO)},
$S:0}
C.djC.prototype={
$0(){var w=this.a
return w.l(new C.djB(w))},
$S:0}
C.djB.prototype={
$0(){return this.a.w=!0},
$S:0}
C.djD.prototype={
$0(){var w=this.a.c
w.toString
A.a7(w,!1).N(null)
return null},
$S:0}
C.dji.prototype={
$1(d){var w,v,u=null,t=A.n(26),s=E.kF.j(0.5),r=x.p,q=A.a([D.h0J,B.af],r),p=this.a
if(B.a.i(p.a.x).length!==0){w=J.cx(p.d)?"Write this book":"Write a new book"
q.push(p.a_t(d,B.eg,w,J.cx(p.d)?"Choose English or Swahili, then describe the book":"A brand new book for your shelf. Choose English or Swahili, then describe it","write"))}if(p.a.f)q.push(p.a_t(d,K.arr,"Fix or change something","Correct a word, rewrite a page, add to it, or redesign the cover","fix"))
if(J.cJ(p.d)){r=A.a([],r)
w=this.b
v=w==="en"
if(v)r.push(new A.D(B.cB,A.c("Your book is in English.",u,u,u,u,u,u,A.l(u,u,D.l0.j(0.7),u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u))
w=w==="sw"
if(w)r.push(new A.D(B.cB,A.c("Your book is in Swahili.",u,u,u,u,u,u,A.l(u,u,D.l0.j(0.7),u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u))
if(w)r.push(p.a_t(d,A0.asr,"Make my Swahili sound natural","A native-speaker editor rewrites every page so it reads like real Swahili","polish"))
if(!w)r.push(p.a_t(d,B.p1,"Translate my book to Swahili","Every page, from English into Kiswahili","sw"))
if(!v)r.push(p.a_t(d,B.p1,"Translate my book to English","Every page, from Swahili into English","en"))
B.d.u(q,r)}return A.eH(u,E.CD,A.bo(!0,new A.D(Aq.zt,A.x(q,B.B,u,B.e,B.O,0,B.p),u),!0,!1,B.ag,!0,!0),u,u,u,B.Pl,u,B.dd,u,new A.b9(t,new A.ax(s,1.4,B.r,-1)),u)},
$S:47}
C.djE.prototype={
$0(){A.a7(this.a,!1).N(this.b)
return null},
$S:0}
C.djv.prototype={
$1(d){var w=this.a,v=w.r>=0&&J.cJ(w.d)
return new C.a0i(v,J.cJ(w.d),w.r+1,null)},
$S:z+44}
C.djw.prototype={
$1(d){var w=null
return A.p9(!1,A.ei(w,w,w,E.CD,new A.kg(this.a,new C.dju(),w,w,x.cI),w,w,w,w,w,w),w,x.z)},
$S:344}
C.dju.prototype={
$3(d,e,f){var w=null
return A.A(A.a([E.ac4,B.pm,A.E(A.c(e,w,w,w,w,w,w,B.jN,w,w,w),1)],x.p),B.l,w,B.e,B.h,0,w,w)},
$S:764}
C.djx.prototype={
$0(){return this.a.a=!1},
$S:53}
C.djy.prototype={
$2(d,e){this.a.sp(0,d)
return d},
$S:185}
C.djz.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.djA.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=u.a
r=s.a
w=2
return A.b(C.BM(r.c,r.d,u.b),$async$$0)
case 2:r=s.a
t=u.c
w=3
return A.b(C.Tb(r.c,r.d,t),$async$$0)
case 3:if(s.c!=null)s.l(new C.djt(s,t))
w=4
return A.b(s.lf(),$async$$0)
case 4:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.djt.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.djL.prototype={
$1(d){var w=null
return A.p9(!1,A.ei(w,w,w,E.CD,new A.kg(this.a,new C.djK(),w,w,x.cI),w,w,w,w,w,w),w,x.z)},
$S:344}
C.djK.prototype={
$3(d,e,f){var w=null
return A.A(A.a([E.ac4,B.pm,A.E(A.c(e,w,w,w,w,w,w,B.jN,w,w,w),1)],x.p),B.l,w,B.e,B.h,0,w,w)},
$S:764}
C.djM.prototype={
$0(){return this.a.a=!1},
$S:53}
C.djN.prototype={
$2(d,e){this.a.sp(0,d)
return d},
$S:185}
C.djO.prototype={
$2(d,e){this.a.sp(0,d)
return d},
$S:185}
C.djP.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.a
w=2
return A.b(C.BM(s.c,s.d,u.b),$async$$0)
case 2:w=3
return A.b(t.lf(),$async$$0)
case 3:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.djj.prototype={
$0(){var w=this.a.f
w===$&&A.d()
return w.bmn(B.r0,Ac.OV)},
$S:0}
C.djk.prototype={
$0(){var w=this.a.f
w===$&&A.d()
return w.aKd(B.r0,Ac.OV)},
$S:0}
C.dlG.prototype={
$0(){A.a7(this.a,!1).N(null)
return null},
$S:0}
C.dlH.prototype={
$1(d){var w=this.a
return w.l(new C.dlF(w))},
$S:9}
C.dlF.prototype={
$0(){return this.a.e="page"},
$S:0}
C.dlI.prototype={
$1(d){var w=this.a
return w.l(new C.dlE(w))},
$S:9}
C.dlE.prototype={
$0(){return this.a.e="book"},
$S:0}
C.dlJ.prototype={
$1(d){var w=this.a
return w.l(new C.dlD(w))},
$S:9}
C.dlD.prototype={
$0(){return this.a.e="cover"},
$S:0}
C.dlK.prototype={
$0(){var w=this.a
return w.l(new C.dlC(w,this.b))},
$S:0}
C.dlC.prototype={
$0(){var w=this.b
this.a.d.sb1(0,w)
return w},
$S:0}
C.dlL.prototype={
$0(){var w=this.a,v=B.a.i(w.d.a.a)
if(v.length===0)return
w=w.ga3s()
A.a7(this.b,!1).N(new A.bsY(w,v))},
$S:0}
C.dk8.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.dk7.prototype={
$1(d){var w=this.a.a,v=w.c,u=w.d,t=this.b.a
t=t==="main"?u:u+"~"+t
return new C.a0e(v,t,u,w.e,w.f,w.r,w.w,null)},
$S:z+50}
C.dkc.prototype={
$1(d){return d.a===this.a},
$S:z+52}
C.dkb.prototype={
$1(d){var w,v=null,u=this.b,t=this.a.bck(u)
u=u.c
w=u===1?"page":"pages"
w=A.c("\u201c"+t+"\u201d and its "+u+" "+w+" will be deleted from this device.",v,v,v,v,v,v,B.hF,v,v,v)
return A.ei(A.a([A.bM(!1,B.dw,v,v,!0,v,v,v,new C.dk9(d),v,v),A.bI(B.yb,v,new C.dka(d),A.bp(B.nI,v,v,v,v,v,v,v,v,v,v,v))],x.p),v,v,E.CD,w,v,v,v,v,D.h_v,v)},
$S:18}
C.dk9.prototype={
$0(){A.a7(this.a,!1).N(!1)
return null},
$S:0}
C.dka.prototype={
$0(){A.a7(this.a,!1).N(!0)
return null},
$S:0}
C.dkd.prototype={
$0(){A.a7(this.a,!1).N(null)
return null},
$S:0}
C.dke.prototype={
$2(d,e){var w,v,u,t=null,s=(e.b-32-14)/2,r=A.a([],x.p)
for(w=this.a,v=w.length,u=0;u<w.length;w.length===v||(0,A.I)(w),++u)r.push(new A.a5(s,t,w[u],t))
return A.cb(A.bZ(B.bI,r,B.br,t,18,14),B.t,t,B.y,t,t,D.bHH,t,t,B.ah)},
$S:348}
C.dk6.prototype={
$0(){return this.a.Rv(0,this.b)},
$S:0}
C.dk5.prototype={
$0(){return this.a.QU(0,this.b)},
$S:0}
C.cRY.prototype={
$1(d){return d.a===this.a.c.a},
$S:z+13}
C.cRZ.prototype={
$0(){return B.d.gG(D.Aw)},
$S:z+14}
C.cS_.prototype={
$4(d,e,f,g){var w=null,v=A.n(e)
return A.bS(0,new A.D(d,new A.bQ(new A.o(w,w,A.K(this.a.j(f),B.r,g),v,w,w,B.m),B.bm,w,w),w),0,0,0)},
$S:1953}
C.daZ.prototype={
$1(d){return this.a.l(new C.daY(this.b,this.c))},
$S:9}
C.daY.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.dbn.prototype={
$1(d){return this.a.l(new C.dba())},
$S:2}
C.dba.prototype={
$0(){},
$S:0}
C.dbo.prototype={
$1(d){return this.a.l(new C.db9())},
$S:2}
C.db9.prototype={
$0(){},
$S:0}
C.dbp.prototype={
$0(){var w=this.a
return w.l(new C.db8(w,this.b))},
$S:0}
C.db8.prototype={
$0(){var w=this.a
return w.d=w.goB().GB(this.b.a)},
$S:0}
C.dbq.prototype={
$0(){var w=this.a
return w.l(new C.db7(w,this.b))},
$S:0}
C.db7.prototype={
$0(){var w=this.a
return w.d=w.goB().cQJ(this.b)},
$S:0}
C.dbr.prototype={
$1(d){return this.a.l(new C.db6())},
$S:2}
C.db6.prototype={
$0(){},
$S:0}
C.dbs.prototype={
$0(){var w=this.a
return w.l(new C.db5(w,this.b))},
$S:0}
C.db5.prototype={
$0(){var w=this.a
return w.d=w.goB().cQO(this.b.a)},
$S:0}
C.dbt.prototype={
$1(d){var w=this.a
return w.l(new C.dbi(w,d))},
$S:6}
C.dbi.prototype={
$0(){var w=this.a
return w.d=w.goB().cRI(this.b)},
$S:0}
C.dbu.prototype={
$1(d){var w=this.a
return w.d=w.goB().aHa(d)},
$S:2}
C.dbv.prototype={
$1(d){var w=this.a
return w.d=w.goB().cQR(d)},
$S:2}
C.dbx.prototype={
$1(d){var w=this.a
return w.d=w.goB().cRG(d)},
$S:2}
C.dby.prototype={
$1(d){var w=this.a
return w.l(new C.dbh(w,d))},
$S:9}
C.dbh.prototype={
$0(){var w=this.a
return w.d=w.goB().cRx(this.b)},
$S:0}
C.dbz.prototype={
$0(){var w=this.a,v=w.goB(),u=B.a.i(w.gzj(0).a.a),t=B.a.i(w.gaEk().a.a)
u=v.bh2(B.a.i(w.gatL().a.a),t,u)
A.a7(this.b,!1).N(u)
return null},
$S:0}
C.bTS.prototype={
$1(d){this.a.f.sp(0,d.a/1e6)},
$S:7}
C.bTM.prototype={
$1(d){var w=this.a
if(w.c==null)return
w.l(new C.bTL(w,d))},
$S:10}
C.bTL.prototype={
$0(){var w=this.a,v=w.db.length,u=Math.min(v,w.dx+2)
w.dx=u
if(u>=v){w.r.c=!1
this.b.a1(0)}},
$S:0}
C.bTV.prototype={
$0(){var w=this.a
w.dx=w.db.length
w.r.c=!1},
$S:0}
C.bTN.prototype={
$0(){var w=this.a
w.Q=D.b3J
w.aeQ(1)
w.r.x=null},
$S:0}
C.bTO.prototype={
$0(){var w,v,u=this.a
if(u.c==null||u.Q!==D.b3J)return
w=new A.e2()
w.cT(u.as*13+u.a.e)
v=u.r
v.Q=3+w.av(3)
v.z=D.d9M[w.av(6)]
v.as=u.f.a+2.6},
$S:0}
C.bTR.prototype={
$0(){var w=this.a
w.Q=D.aeL
w.aeQ(2)
w.r.z=null},
$S:0}
C.bTQ.prototype={
$0(){var w,v,u=this,t=u.a,s=t.fr=u.c
t.Q=D.hUM
t.aeQ(3)
w=t.r
w.d=s
w.x="I say: "+t.gCX()[t.as].b[u.b]
t=t.f
w.y=t.a+2.2
v=u.d
w.Q=3+v.av(3)
w.z=s?D.dgU[v.av(4)]:D.dDy[v.av(3)]
w.as=t.a+2.8},
$S:0}
C.bTT.prototype={
$0(){var w=this.a
w.Q=D.b3K
w.CW=this.b
w.cy=1
w.aeQ(4)
w.r.f=w.f.a+5},
$S:0}
C.bTU.prototype={
$0(){},
$S:0}
C.bTP.prototype={
$0(){var w=this.a.c
w.toString
return A.a7(w,!1).hY()},
$S:0}
C.bTJ.prototype={
$0(){return this.a.LF(this.b)},
$S:0}
C.bTK.prototype={
$0(){var w=this.a.c
w.toString
return A.a7(w,!1).hY()},
$S:0}
C.bVo.prototype={
$0(){var w=this
return w.a.RP(w.b,0,w.c,w.d)},
$S:0}
C.bVp.prototype={
$0(){var w=this
return w.a.RP(w.b,3,w.c,w.d)},
$S:0}
C.bVq.prototype={
$0(){var w=this
return w.a.RP(w.b,1,w.c,w.d)},
$S:0}
C.bVr.prototype={
$0(){var w=this
return w.a.bVI(w.b,w.c,w.d)},
$S:0}
C.bVs.prototype={
$0(){var w=this
return w.a.RP(w.b,4,w.c,w.d)},
$S:0}
C.bVt.prototype={
$0(){var w=this
return w.a.RP(w.b,2,w.c,w.d)},
$S:0}
C.bVu.prototype={
$0(){var w=this
return w.a.RP(w.b,5,w.c,w.d)},
$S:0}
C.bVv.prototype={
$2(d,e){return B.i.aQ(d.a,e.a)},
$S:765}
C.bVn.prototype={
$2(d,e){var w,v,u,t,s,r=null,q=D.a7m[d],p=q.a.a7(0,new A.r(0,-q.b*1.2*124)),o=A.h_(r,B.cK,r,3,r,A.cW(r,r,r,r,r,r,r,r,r,D.fEC,e),B.a7,B.cc,r,B.e3,B.cd)
o.nA(130)
w=o.b.a.c
w=p.aI(0,new A.r(0,w.gb4(w)/2+8))
v=o.b
u=v.c
v=v.a.c
t=A.bw(A.bY(w,v.gb4(v)+12,u+18),B.ij)
u=this.a
v=t.eI(B.dS)
w=$.T()
s=A.L()
s.r=B.dJ.gp(0)
u.aq(v,s)
s=A.L()
s.r=D.qP.gp(0)
u.aq(t,s)
w=new A.aH(w.r,B.ak,r,r,A.a([],x.v))
s=p.a
v=t.d-1
w.E(new A.aZ(s-5,v))
w.E(new A.aq(s+1,p.b+1))
w.E(new A.aq(s+6,v))
w.E(new A.bA())
v=A.L()
v.r=D.qP.gp(0)
u.af(w,v)
o.a4(u,new A.r(t.a+9,t.b+6))},
$S:766}
C.bU8.prototype={
$2(d,e){return B.o.aQ(d.Q,e.Q)},
$S:z+7}
C.bU9.prototype={
$2(d,e){var w=this.a,v=B.o.aQ(w.anx(d),w.anx(e))
if(v!==0)return v
return B.o.aQ(d.Q,e.Q)},
$S:z+7}
C.fCh.prototype={
$1(d){return d!==this.a&&B.a.i(d).length!==0},
$S:3}
C.hdS.prototype={
$2(d,e){if(e!=null)J.c6(this.a.c_(0,d,new C.hdT()),e)},
$S:z+66}
C.hdT.prototype={
$0(){return A.a([],x.J)},
$S:z+76}
C.hdU.prototype={
$1(d){return d!==this.a},
$S:3}
C.hdV.prototype={
$1(d){var w=d.a,v=this.a
return w!==v.a&&w!==this.b.a&&d.c===v.c},
$S:z+1}
C.hdW.prototype={
$1(d){return d!==this.a&&!B.d.aR(this.b,new C.hdR(this.c,d))},
$S:3}
C.hdR.prototype={
$1(d){return B.a.i(d.b)===this.b},
$S:z+1}
C.hdX.prototype={
$1(d){return d!==this.a},
$S:3}
C.hdY.prototype={
$1(d){return d!==this.a},
$S:3}
C.hdZ.prototype={
$1(d){return d!==this.a&&!B.d.aR(this.b,new C.hdQ(this.c,d))},
$S:3}
C.hdQ.prototype={
$1(d){return B.a.i(d.b)===this.b},
$S:z+1}
C.fPZ.prototype={
$1(d){var w=this.b.h(0,d)
w.toString
return J.ad(w)>this.a.a},
$S:3}
C.h4g.prototype={
$1(d){return d.Q},
$S:z+15}
C.h4h.prototype={
$0(){return A.a([],x.u)},
$S:z+16}
C.fLN.prototype={
$1(d){return this.a>=d.c},
$S:z+17}
C.fSQ.prototype={
$1(d){return d.c>this.a},
$S:z+17}
C.bOU.prototype={
$1(d){return B.a.i(d).length!==0},
$S:3}
C.hei.prototype={
$2(d,e){return B.o.aQ(C.hHD(d),C.hHD(e))},
$S:237}
C.hej.prototype={
$1(d){return d!==this.a},
$S:3}
C.h4T.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
C.bN2.prototype={
$0(){var w=this.a
w.ch=!0
w.baw()},
$S:0}
C.bMY.prototype={
$0(){},
$S:0}
C.bN3.prototype={
$1(d){return d.f<=0},
$S:z+26}
C.bMW.prototype={
$0(){},
$S:0}
C.bMX.prototype={
$0(){},
$S:0}
C.bN1.prototype={
$2(d,e){var w,v,u=null,t=this.a,s=A.a([A.bS(0,A.b4(u,u,u,new C.beE(t,u),B.aA),0,0,0)],x.p)
if(t.dy.length!==0&&t.dx<t.fr){w=B.v.j(0.7)
v=A.n(14)
s.push(A.ao(u,A.p(u,A.c(t.dy,u,u,u,u,u,u,D.fMs,B.K,u,u),B.f,u,u,new A.o(w,u,u,v,u,u,B.m),u,u,u,u,B.bR,u,u,u),u,u,14,14,6,u))}return A.aA(B.c2,new A.am(B.a0,u,B.ad,B.t,s,u),B.y,!1,u,u,u,u,u,u,u,new C.bMZ(t,e),u,u,u,u,u,u,u,new C.bN_(t,e),u,u,u,u,u,u,u,u,u,new C.bN0(t,e),u,u,u,u,!1,B.a4)},
$S:37}
C.bMZ.prototype={
$1(d){return this.a.db=B.i.D(d.b.a/this.b.b,0.08,0.92)},
$S:19}
C.bN0.prototype={
$1(d){return this.a.db=B.i.D(d.b.a/this.b.b,0.08,0.92)},
$S:24}
C.bN_.prototype={
$1(d){return this.a.db=B.i.D(d.b.a/this.b.b,0.08,0.92)},
$S:19}
C.bMV.prototype={
$0(){var w=this.a.c
w.toString
return A.a7(w,!1).hY()},
$S:0}
C.csY.prototype={
$0(){var w=this,v=w.a
v.ax=w.b
v.at=w.c.a+" is not a child of "+w.d+". Try someone else."},
$S:0}
C.csZ.prototype={
$0(){var w=this.a
if(w.c!=null)w.l(new C.csX(w))},
$S:0}
C.csX.prototype={
$0(){return this.a.ax=-1},
$S:0}
C.ct_.prototype={
$0(){var w=this,v=w.a
v.gj_()[w.b]=w.c
v.at=w.d.a+" is a child of "+w.e+". The branch grows!"},
$S:0}
C.ct0.prototype={
$2(d,e){return d+e.c.length},
$S:z+29}
C.ct1.prototype={
$0(){var w=this.a
w.ay=!0
w.w=this.b},
$S:0}
C.ct2.prototype={
$0(){},
$S:0}
C.ct3.prototype={
$0(){var w=this.a
w.z=w.XX(++w.e)
w.Q=A.c2(w.gkR()[w.e].c.length,-1,!1,x.S)
w.y=0
w.at=""},
$S:0}
C.csU.prototype={
$0(){return A.a7(this.a,!1).hY()},
$S:0}
C.csV.prototype={
$2(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i=a3.b,h=a3.d,g=this.a,f=g.gj_().length,e=i/2,d=new C.csW(i,f,h),a0=g.as,a1=A.a3(a0).k("ba<2>")
a0=A.B(new A.ba(a0,a1),a1.k("M.E"))
a0=A.bS(0,A.ca(new A.hA(a0),new C.csP(g,new A.r(e,56),f,d),j),0,0,0)
a1=this.b
w=g.gj_().length!==0&&!B.d.q(g.gj_(),-1)
v=x.p
e=A.a([a0,A.ao(j,new C.Rb(a1.b,a1.a,76,w,j),j,j,e-50,j,4,j)],v)
for(a0=x.W,a1=x.dN,u=0;u<f;++u)e.push(new A.cP(d.$1(u).a-44,d.$1(u).b-48,j,j,j,j,new W.Ng(new C.csQ(g,u),new C.csR(g,u),new C.csS(g,u),j,j,new A.bg("slot-"+u,a0),a1),j))
a1=g.at
if(a1.length!==0)e.push(A.ao(j,A.c(a1,j,j,j,j,j,j,A.l(j,j,B.a.q(a1,"not a child")?B.fq:B.bf,j,j,j,j,j,j,j,j,13,j,j,B.D,j,j,!0,j,j,j,j,j,j,j,j),B.K,j,j),j,j,0,0,h*0.76-6,j))
if(g.gj_().length!==0&&!B.d.q(g.gj_(),-1)){a0=g.e+1>=g.gkR().length?"See my result":"Next family"
g=A.at(C.uG(a0,g.gqs(g),B.d_,B.jE,D.fJ),j,j,j)}else{a1=A.a([],v)
w=x.gc
v=x.gW
t=x.X
u=0
for(;;){s=g.z
if(!(u<(s===$?g.z=g.XX(0):s).length))break
if(!B.d.q(g.gj_(),u)){r=""+u
q=g.e
p=g.ax===u?1:0
s=g.z
if(s===$){s=g.z=g.XX(0)
o=s}else o=s
n=s[u]
n=A.e9(B.z,new C.Rb(n.b,o[u].a,62,!0,j),1.15,j,j)
s=g.z
if(s===$){s=g.z=g.XX(0)
o=s}else o=s
m=s[u]
l=o[u]
k=l.a
a1.push(new A.rn(new A.bq(0,p,t),new C.csT(),new W.EJ(u,j,new C.Rb(l.b,k,62,!1,j),new A.l_(0.25,new C.Rb(m.b,k,62,!1,j),j),new A.kq(n,B.ai,!1,0,B.L,j,j,j,j,!0,B.f,B.a3,j,j),B.J,W.hLs(),!0,!0,j,j,j,j,j,j,!1,B.j4,j,new A.bg("chip-"+r,a0),w),B.aZ,B.j2,j,new A.bg("t"+r+"-"+q,a0),v))}++u}g=A.bZ(B.fU,a1,B.br,j,6,8)}e.push(A.ao(0,g,j,j,0,0,j,j))
return new A.am(B.a0,j,B.ad,B.t,e,j)},
$S:62}
C.csW.prototype={
$1(d){return new A.r(this.a*(d+0.5)/this.b,this.c*0.62)},
$S:756}
C.csP.prototype={
$2(d,e){var w,v,u,t,s,r,q=this,p=null,o=A.a([],x.g)
for(w=q.c,v=q.d,u=0;u<w;++u)o.push(v.$1(u))
v=A.a([],x.n)
for(t=q.a,s=t.as,u=0;u<w;++u){r=s.h(0,u)
if(r==null)r=p
else{r=r.x
r===$&&A.d()}v.push(r==null?0:r)}w=t.gj_().length!==0&&!B.d.q(t.gj_(),-1)
return A.b4(p,p,p,new C.be5(q.b,o,v,w,p),B.aA)},
$S:58}
C.csR.prototype={
$1(d){return this.a.gj_()[this.b]===-1},
$S:z+30}
C.csS.prototype={
$1(d){return this.a.cUA(this.b,d.a)},
$S:z+31}
C.csQ.prototype={
$3(d,e,f){var w,v=null,u=this.a,t=this.b,s=u.gj_()[t]!==-1,r=A.n(18),q=e.length!==0?B.d_.j(0.3):B.L
if(s)w=v
else w=A.K(e.length!==0?B.d_:B.jU,B.r,2)
u=s?A.lz(new C.csO(),A.at(new C.Rb(u.gaGC()[u.gj_()[t]].b,u.gaGC()[u.gj_()[t]].a,62,!1,v),v,v,v),B.nC,B.j2,v,v,new A.bq(0.3,1,x.X),x.i):D.bf1
return A.cV(v,u,v,v,B.aZ,new A.o(q,v,w,r,v,v,B.m),B.a3,v,100,v,v,v,v,v,88)},
$S:1956}
C.csO.prototype={
$3(d,e,f){return A.e9(B.z,f,e,null,null)},
$S:116}
C.csT.prototype={
$3(d,e,f){return A.dT(f,new A.r(Math.sin(e*24)*8*(1-e),0))},
$S:116}
C.cT1.prototype={
$1(d){return d>=1},
$S:125}
C.cHV.prototype={
$1(d){var w=this.a
if(w.c==null||w.as)return
if(w.f<w.gkR()[w.e].d.length)w.l(new C.cHU(w))},
$S:10}
C.cHU.prototype={
$0(){return this.a.f++},
$S:0}
C.cI2.prototype={
$0(){var w,v=this.a
v.as=!0
w=this.b
v.ay=w
v.r+=w;++v.w},
$S:0}
C.cI3.prototype={
$0(){var w=this.a,v=this.b
w.z.I(0,v)
w.Q=v},
$S:0}
C.cI4.prototype={
$0(){var w=this.a
if(w.c!=null)w.l(new C.cI1(w))},
$S:0}
C.cI1.prototype={
$0(){return this.a.Q=-1},
$S:0}
C.cI5.prototype={
$0(){return this.a.f++},
$S:0}
C.cI6.prototype={
$0(){var w=this.a
w.at=!0
w.x=this.b},
$S:0}
C.cI7.prototype={
$0(){},
$S:0}
C.cI8.prototype={
$0(){var w=this.a;++w.e
w.f=1
w.z.a6(0)
w.as=!1
w.ay=0},
$S:0}
C.cHX.prototype={
$0(){return A.a7(this.a,!1).hY()},
$S:0}
C.cHY.prototype={
$3(d,e,f){var w=null
return A.lz(new C.cHW(this.a,e),w,B.aZ,B.hx,w,w,new A.bq(w,this.b,x.X),x.i)},
$S:1957}
C.cHW.prototype={
$3(d,e,f){var w,v=null,u=this.a,t=B.d_.j(u.as?0.6:0.15)
t=A.a([new A.aa(0,B.H,t,B.J,u.as?40:18)],x.V)
w=this.b
return A.p(v,A.id(new A.BW(new A.v3(B.v.j(e),B.MO,v,B.Zu),H.bZE(A.b4(v,v,v,new C.aCL(u.gkR()[u.e].c,u.as,v),B.aA),new A.EO(w,w,B.Xm)),v),B.aq),B.f,v,v,new A.o(v,v,v,v,t,v,B.a6),v,190,v,v,v,v,v,190)},
$S:1958}
C.cHZ.prototype={
$3(d,e,f){return A.d5(A.dT(f,new A.r(0,14*(1-e))),e)},
$S:97}
C.cI_.prototype={
$3(d,e,f){return A.dT(f,new A.r(Math.sin(e*22)*8*(1-e),0))},
$S:116}
C.cI0.prototype={
$0(){return this.a.brK(this.b)},
$S:0}
C.fer.prototype={
$1(d){var w=d.a/1e6,v=this.a,u=Math.min(0.05,w-v.ao3$)
v.ao3$=w
v.qg$.sp(0,w)
v.arY(u)},
$S:7}
C.foO.prototype={
$1(d){var w=this.a,v=w.c.length,u=Math.min(v,w.d+2)
w.d=u
if(u>=v)d.a1(0)
w.a.$0()},
$S:10}
C.bUU.prototype={
$0(){var w=this.a
if(w.c!=null)w.l(new C.bUT())},
$S:0}
C.bUT.prototype={
$0(){},
$S:0}
C.bUR.prototype={
$0(){return this.a.Q=!0},
$S:0}
C.bUP.prototype={
$0(){},
$S:0}
C.bUQ.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.a
if(p.c==null){w=1
break}s=p.x
r=p.gNj()
w=s+1>=r.length?3:5
break
case 3:q=C.bIz(p.gaqO(0),0,r.length)
p.l(new C.bUM(p,q))
o=p
w=6
return A.b(C.C7(p.a.d,q),$async$$0)
case 6:o.z=e
s=p.a
o=p
w=7
return A.b(C.C8(s.d,s.c.a,"school",p.gaqO(0)*10),$async$$0)
case 7:o.at=e
if(p.c!=null)p.l(new C.bUN())
w=4
break
case 5:p.l(new C.bUO(p))
p.gqz().Ww(r[p.x].a)
case 4:case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.bUM.prototype={
$0(){var w=this.a
w.as=!0
w.y=this.b},
$S:0}
C.bUN.prototype={
$0(){},
$S:0}
C.bUO.prototype={
$0(){return this.a.x++},
$S:0}
C.bUS.prototype={
$0(){return this.a.LF(this.b)},
$S:0}
C.bUL.prototype={
$0(){var w=this.a.c
w.toString
return A.a7(w,!1).hY()},
$S:0}
C.fes.prototype={
$0(){var w,v=this,u=v.a,t=46+Math.sin(u*3.1)*8,s=-90+Math.sin(u*4.3)*10,r=new A.r(t,s),q=v.b,p=v.d,o=p?C.hLG(u,1):0,n=v.e,m=n?0.9:0.3
if(n)n=Math.sin(u*9)*2
else n=p?Math.sin(u*4):0
w=p?r:D.F2
C.T9(q,D.eyE,0,0.2,-0.6,-0.2,null,w,D.exn,v.c,o,n,1.2,m,0,u,-0.3)
if(p){u=v.f.a7(0,new A.r(Math.sin(u*3)*14,Math.sin(u*2)*6))
$.T()
p=A.L()
p.r=D.H6.gp(0)
p.c=3
p.d=B.bG
q.ah(new A.r(372+1.2*t,470+1.2*s),u,p)}},
$S:0}
C.fet.prototype={
$0(){var w=this.b,v=this.c,u=v?0.3:0
v=v?Math.max(0,Math.sin(w*1.7))*2:0
return C.T9(this.a,D.exK,0,u,0.7,-0.5,null,null,D.Ks,5,0,v,1.05,0.3,0,w,0.3)},
$S:0}
C.feu.prototype={
$0(){var w=this.b,v=this.c?Math.max(0,Math.sin(w*1.9+1))*2.4:0
return C.T9(this.a,D.ezr,0,0,0.8,-0.5,null,null,D.Ks,2,0,v,1.2,0.3,0,w,0.35)},
$S:0}
C.fev.prototype={
$0(){var w=this,v=w.a.b.Q&&!w.d?0.5:0.1
return C.T9(w.b,D.eyy,0,v,-0.8,-0.5,null,null,D.Ks,4,0,0,1.2,0.25,0,w.c,-0.35)},
$S:0}
C.few.prototype={
$0(){var w,v,u,t,s,r=this,q=r.a,p=q.b,o=p.Q&&!r.b&&p.w.length<=p.x
p=r.c
w=r.d
v=r.e
u=v?0.9:0.3
t=o?0.5:0
s=v?Math.sin(w*9)*2.4:0
if(o)v=new A.r(34,-122+Math.sin(w*5)*5)
else v=v?D.eyC:D.F2
C.T9(p,D.ey2,0,t,0,-0.6,null,v,D.Ks,3,0,s,1.3,u,0,w,0)
q=q.ceu(new A.r(222,455),9)
$.T()
w=A.L()
w.r=B.d_.gp(0)
p.af(q,w)},
$S:0}
C.fex.prototype={
$2(d,e){return B.i.aQ(d.a,e.a)},
$S:765}
C.bUx.prototype={
$2(d,e){return d+e},
$S:64}
C.bUI.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.bUJ.prototype={
$0(){return this.a.y=-1},
$S:0}
C.bUK.prototype={
$0(){var w,v,u=this,t=u.a,s=u.c
t.gj_()[u.b]=s
t.gj_()[u.d]=t.y
w=t.as
v=t.qg$
w.n(0,s,v.a+0.5)
w.n(0,t.y,v.a+0.5)
t.y=-1},
$S:0}
C.bUE.prototype={
$1(d){return d},
$S:100}
C.bUD.prototype={
$0(){var w,v,u=this.a
u.at=!0
w=this.b
u.ax=w
u.y=-1
v=u.qg$
if(w){++u.r
u.CW=v.a+3}else u.cx=v.a+1.6},
$S:0}
C.bUF.prototype={
$0(){var w=this.a
w.ay=!0
w.w=this.b},
$S:0}
C.bUG.prototype={
$0(){},
$S:0}
C.bUH.prototype={
$0(){var w,v,u,t,s=this.a
s.z=s.G4(++s.f)
w=A.a([],x.n)
v=0
for(;;){u=s.z
if(!(v<u.length))break
t=B.d.cd(u,v)
u=s.z
w.push(450*(t+0.5)/u.length);++v}s.Q=w
s.y=-1
s.at=!1
s.as.a6(0)},
$S:0}
C.bUz.prototype={
$0(){return A.a7(this.a,!1).hY()},
$S:0}
C.bUA.prototype={
$2(d,e){var w=this.a
w=w.gkR()[w.f].e
return B.o.aQ(w[d],w[e])},
$S:64}
C.bUB.prototype={
$2(d,e){var w=null,v=C.hmc(new A.av(A.aT(1/0,e.a,e.b),A.aT(1/0,e.c,e.d))),u=this.a
return A.aA(B.c2,new A.e6(A.b4(w,w,w,new C.bll(u,u.qg$),B.aA),w),B.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.bUy(u,v),w,w,w,w,!1,B.a4)},
$S:37}
C.bUy.prototype={
$1(d){var w,v,u,t=d.b,s=this.b,r=s.c,q=(t.b-s.b)/r
if(q>380&&q<760){w=this.a
v=w.gj_().length
u=B.o.D(B.i.bc((t.a-s.a)/r/450*v),0,v-1)
w.d4x(w.gj_()[u])}},
$S:24}
C.bUC.prototype={
$1(d){var w=this.a
return w.gkR()[w.f].d[d]},
$S:76}
C.dv7.prototype={
$2(d,e){return 0},
$S:64}
C.bUj.prototype={
$0(){var w=this.a
if(w.c!=null)w.l(new C.bUi())},
$S:0}
C.bUi.prototype={
$0(){},
$S:0}
C.bUh.prototype={
$0(){},
$S:0}
C.bUb.prototype={
$0(){},
$S:0}
C.bUc.prototype={
$0(){},
$S:0}
C.bUg.prototype={
$0(){var w=this.a
w.ax=this.c
w.r=D.BQ},
$S:0}
C.bUf.prototype={
$1(d){var w=null,v=this.a.gqz(),u=A.c(d,w,w,w,w,w,w,D.aXK,w,w,w),t=v.gbo8(0)
return A.aA(B.c2,A.x(A.a([u,B.bs,A.c(t+(v.d<v.c.length?"\u258d":""),w,w,w,w,w,w,D.aXX,w,w,w)],x.p),B.B,w,B.e,B.h,0,B.p),B.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,v.gbu6(v),w,w,w,w,w,w,!1,B.a4)},
$S:118}
C.bUd.prototype={
$0(){return this.a.LF(this.b)},
$S:0}
C.bUe.prototype={
$0(){var w=this.a.c
w.toString
return A.a7(w,!1).hY()},
$S:0}
C.bUa.prototype={
$0(){return A.a7(this.a,!1).hY()},
$S:0}
C.e5E.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.e5F.prototype={
$1(d){return this.a},
$S:42}
C.e5G.prototype={
$0(){var w=this.a
return w.d=w.gTw().bgw(this.b)},
$S:0}
C.e5C.prototype={
$1(d){return new C.UA(this.a,null)},
$S:z+32}
C.e5D.prototype={
$1(d){return d.a===this.a.a},
$S:z+33}
C.e5B.prototype={
$1(d){var w=null,v=this.a.b
v=A.c('"'+(v.length===0?"Untitled":v)+'" will be removed for everyone in the family.',w,w,w,w,w,w,B.hF,w,w,w)
return A.ei(A.a([A.bM(!1,E.aZl,w,w,!0,w,w,w,new C.e5z(d),w,w),A.bM(!1,D.h79,w,w,!0,w,w,w,new C.e5A(d),w,w)],x.p),w,w,D.fJ,v,w,w,w,w,D.fUu,w)},
$S:18}
C.e5z.prototype={
$0(){A.a7(this.a,!1).N(!1)
return null},
$S:0}
C.e5A.prototype={
$0(){A.a7(this.a,!1).N(!0)
return null},
$S:0}
C.e5y.prototype={
$0(){var w=null,v=this.a.c.L(x.q).f,u=this.b
return v.T(A.b3(w,w,w,w,w,B.t,w,A.c(u==null?"Not ready yet.":u,w,w,w,w,w,w,w,w,w,w),w,B.Y,w,w,w,w,w,w,w,w,w,w))},
$S:0}
C.e5H.prototype={
$1(d){var w=this.a.f,v=w.h(0,d)
return(v==null?0:v)>0?"Best "+A.v(w.h(0,d)):"NEW"},
$S:13}
C.e5I.prototype={
$0(){var w=this.a,v=this.b,u=C.bGf(v,10,w.r,!1)
return w.uF(C.hvn(w.a.d,"kahoot",u,w.gb81(),v.b,"Family Kahoot",v.a))},
$S:0}
C.e5J.prototype={
$0(){var w=this.a
return w.uF(new C.amY(this.b,w.a.d,w.r,null))},
$S:0}
C.e5K.prototype={
$0(){var w=this.a
return w.uF(new C.al7(this.b,w.a.d,w.r,null))},
$S:0}
C.e5N.prototype={
$0(){var w=this.a
return w.uF(new C.avZ(this.b,w.a.d,w.r,null))},
$S:0}
C.e5O.prototype={
$0(){var w=this.a
return w.uF(new C.azX(this.b,w.a.d,w.r,null))},
$S:0}
C.e5P.prototype={
$0(){var w=this.a
return w.uF(new C.an0(this.b,w.a.d,w.r,null))},
$S:0}
C.e5Q.prototype={
$0(){var w=this.a
return w.uF(new C.an4(this.b,w.a.d,w.r,null))},
$S:0}
C.e5R.prototype={
$0(){var w=this.a
return w.uF(new C.an6(this.b,w.a.d,w.r,null))},
$S:0}
C.e5S.prototype={
$0(){var w,v=this.a,u=this.b,t=B.a.i(u.b)
if(t.length===0)t="Family game"
w=u.d4S()
return v.uF(C.hvn(v.a.d,"creator_"+u.a,w,v.gb81(),"A game by the family",t,this.c.a))},
$S:0}
C.e5T.prototype={
$0(){return this.a.Pp(this.b)},
$S:0}
C.e5U.prototype={
$0(){return this.a.Yo(0,this.b)},
$S:0}
C.e5L.prototype={
$0(){return this.a.Pp(null)},
$S:0}
C.e5M.prototype={
$0(){return this.a.L(x.q).f.T(D.fxt)},
$S:0}
C.bUv.prototype={
$0(){var w=this.a
w.d=D.b2P
w.z=3},
$S:0}
C.bUw.prototype={
$1(d){var w=this.a
if(w.z<=1){d.a1(0)
w.aR4()}else w.l(new C.bUu(w))},
$S:10}
C.bUu.prototype={
$0(){return this.a.z--},
$S:0}
C.bUl.prototype={
$0(){var w=this.a
w.d=D.aer
w.y=-1
w.as=w.a.w[w.e].r},
$S:0}
C.bUm.prototype={
$1(d){var w=this.a
if(w.c==null)return
w.l(new C.bUk(w))
if(w.as<=0){d.a1(0)
w.b7Y(-1)}},
$S:10}
C.bUk.prototype={
$0(){var w=this.a
return w.as=Math.max(0,w.as-0.1)},
$S:0}
C.bUr.prototype={
$0(){var w=this.b
w.y=this.c
w.Q=this.a.a
w.d=D.Y2},
$S:0}
C.bUs.prototype={
$0(){return this.a.e++},
$S:0}
C.bUo.prototype={
$0(){var w=this.a
w.d=D.b2Q
w.ay=this.b},
$S:0}
C.bUp.prototype={
$0(){var w=this.a
w.ch=this.b
w.CW=this.c},
$S:0}
C.bUt.prototype={
$2(d,e){return B.o.aQ(e.b,d.b)},
$S:1959}
C.bUq.prototype={
$0(){return this.a.LF(this.b)},
$S:0}
C.bUn.prototype={
$0(){var w=this.a.c
w.toString
return A.a7(w,!1).hY()},
$S:0}
C.bTW.prototype={
$0(){var w,v,u,t=this.a,s=t.a,r=$.az()
s=A.a([new A.au(new A.bd(s,B.b6,B.aP),r)],x.cF)
for(t=t.b,w=t.length,v=0;v<t.length;t.length===w||(0,A.I)(t),++v){u=t[v]
s.push(new A.au(new A.bd(u,B.b6,B.aP),r))}return s},
$S:1960}
C.bTX.prototype={
$0(){return this.a.gDw().c.push(C.hfX(null,0,20,""))},
$S:0}
C.bU6.prototype={
$1(d){var w=null
return A.bC(w,new A.b6(4,A.n(12),B.a1),w,w,w,w,w,w,!0,w,w,w,w,w,w,B.dx,!0,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,!0,w,B.FA,d,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w)},
$S:250}
C.bU5.prototype={
$1(d){var w,v,u,t,s,r,q,p=null,o=this.a,n=o.gDw().c,m=this.b,l=n[m],k=o.chD(l),j=B.c.j(0.06),i=A.n(18),h=A.K(B.aT,B.r,1),g=x.p,f=A.a([A.c("Question "+(m+1),p,p,p,p,p,p,D.LL,p,p,p),B.aW],g)
if(n.length>1)f.push(A.aI(p,p,p,p,B.atk,p,p,p,new C.bU0(o,m),p,p,p,p,p,p))
n=J.a2(k)
m=this.c
f=A.a([A.A(f,B.l,p,B.e,B.h,0,p,p),A.aN(p,B.Z,!1,p,!0,B.t,p,A.aO(),n.h(k,0),p,p,p,p,p,2,m.$1("The question"),B.y,!0,p,!0,p,!1,p,B.al,p,p,p,p,p,p,p,p,p,1,p,p,!1,"\u2022",p,new C.bU1(l),p,p,p,!1,p,p,!1,p,!0,p,B.ae,p,p,p,p,p,p,p,p,p,p,p,B.ds,!0,B.a7,p,B.ao,p,p,p,p),B.M],g)
for(w=x.fo,v=0;v<4;v=s){u=D.aFl[v]
t=D.aF1[v]
s=v+1
f.push(new A.D(B.eI,new A.c1(B.aK,B.e,B.h,B.l,p,B.p,p,0,A.a([A.c(u,p,p,p,p,p,p,new A.G(!0,t,p,p,p,p,22,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p),p,p,p),B.aa,new A.bu(1,B.b9,A.aN(p,B.Z,!1,p,!0,B.t,p,A.aO(),n.h(k,s),p,p,p,p,p,2,m.$1("Answer "+s),B.y,!0,p,!0,p,!1,p,B.al,p,p,p,p,p,p,p,p,p,1,p,p,!1,"\u2022",p,new C.bU2(l,v),p,p,p,!1,p,p,!1,p,!0,p,B.ae,p,p,p,p,p,p,p,p,p,p,p,B.ds,!0,B.a7,p,B.ao,p,p,p,p),p),new AP.PN(v,l.c,new C.bU3(o,l),p,!1,D.lR,p,p,p,p,p,!1,!1,p,I.b3x,p,p,p,p,p,w)],g),p),p))}f.push(D.h_a)
f.push(B.aj)
n=A.a([D.fTy,B.aa],g)
for(r=0;r<3;++r){q=D.ciF[r]
n.push(new A.D(B.f7,A.jN(p,p,p,A.c(""+q+"s",p,p,p,p,p,p,p,p,p,p),p,new C.bU4(o,l,q),l.d===q,p,p,p,p),p))}f.push(A.A(n,B.l,p,B.e,B.h,0,p,p))
return A.p(p,A.x(f,B.B,p,B.e,B.h,0,B.p),B.f,p,p,new A.o(j,p,h,i,p,p,B.m),p,p,p,B.kJ,B.bg,p,p,p)},
$S:159}
C.bU0.prototype={
$0(){var w=this.a
return w.l(new C.bU_(w,this.b))},
$S:0}
C.bU_.prototype={
$0(){return B.d.cJ(this.a.gDw().c,this.b)},
$S:0}
C.bU1.prototype={
$1(d){return this.a.a=d},
$S:2}
C.bU2.prototype={
$1(d){this.a.b[this.b]=d
return d},
$S:2}
C.bU3.prototype={
$1(d){return this.a.l(new C.bTZ(this.b,d))},
$S:154}
C.bTZ.prototype={
$0(){var w=this.b
if(w==null)w=0
return this.a.c=w},
$S:0}
C.bU4.prototype={
$1(d){return this.a.l(new C.bTY(this.b,this.c))},
$S:9}
C.bTY.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.e7j.prototype={
$0(){var w=this.a
w.wE()
w.a.bw()
w.a.qt()},
$S:0}
C.e7i.prototype={
$0(){var w=this.a
w.wE()
w.a.bw()
w.a.qt()},
$S:0}
C.e7l.prototype={
$0(){var w=this,v=w.b
if(J.cJ(v)||J.cx(w.a.d))w.a.d=v
w.a.e=!1},
$S:0}
C.e7m.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.e7n.prototype={
$0(){return this.a.e=!1},
$S:0}
C.e7h.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.e7k.prototype={
$1(d){return d.a===this.a.a},
$S:z+3}
C.e7p.prototype={
$0(){this.a.PL()
return null},
$S:0}
C.e7o.prototype={
$0(){return this.a.Fo(this.b)},
$S:0}
C.e6K.prototype={
$1(d){var w=null,v=this.a,u=A.c(v?"Make private?":"Make public?",w,w,w,w,w,w,w,w,w,w),t=A.c(v?"Private trees are only visible to the owner and invited collaborators.":"Public trees appear in Family Trees for every NGMY user (view only for others).",w,w,w,w,w,w,w,w,w,w),s=A.bM(!1,B.dw,w,w,!0,w,w,w,new C.e6I(d),w,w),r=A.bp(B.bT,w,w,w,w,w,w,w,w,w,w,w)
return A.ei(A.a([s,A.bI(A.c(v?"Make private":"Make public",w,w,w,w,w,w,w,w,w,w),w,new C.e6J(d),r)],x.p),w,w,w,t,w,w,w,w,u,w)},
$S:18}
C.e6I.prototype={
$0(){A.a7(this.a,!1).N(!1)
return null},
$S:0}
C.e6J.prototype={
$0(){A.a7(this.a,!1).N(!0)
return null},
$S:0}
C.e6L.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.d()
return w.d=v.cRc(this.b)},
$S:0}
C.e6F.prototype={
$1(d){var w=this,v=w.a
if(v.c!=null)v.aWI(w.b,w.c,w.d)},
$S:7}
C.e66.prototype={
$1(d){return d.a===this.a.a.w.a},
$S:z+3}
C.e67.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.e6o.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
r=A
q=J
w=2
return A.b(C.HF(t.a.c),$async$$0)
case 2:s=r.nK(q.dN(e,new C.e6m(t)))
if(s!=null&&t.c!=null)t.l(new C.e6n(t,s))
t.a.bw()
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.e6m.prototype={
$1(d){var w=this.a.d
w===$&&A.d()
return d.a===w.a},
$S:z+3}
C.e6n.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.e6p.prototype={
$1(d){var w=this.a.d
w===$&&A.d()
return d.a===w.a},
$S:z+3}
C.e6q.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.e6E.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&A.d()
w=this.b
v.d=u.cRZ(C.hLQ(w),w)},
$S:0}
C.e6l.prototype={
$1(d){var w,v=this.a,u=v.d
u===$&&A.d()
w=v.a.c
return new C.WV(u,w,C.aSi(u,w),new C.e6k(v),null)},
$S:z+37}
C.e6k.prototype={
$1(d){return this.bpx(d)},
bpx(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.a
if(s.c==null){w=1
break}s.l(new C.e6j(s,d))
w=3
return A.b(s.uB(),$async$$1)
case 3:case 1:return A.h(u,v)}})
return A.i($async$$1,v)},
$S:549}
C.e6j.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.d()
return w.d=v.bgw(this.b)},
$S:0}
C.e6B.prototype={
$1(d){return d.as},
$S:z+1}
C.e6C.prototype={
$1(d){var w=this
return new A.e8(new C.e6A(w.a,w.b,w.c,w.d,w.e),null)},
$S:21}
C.e6A.prototype={
$2(a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.c.a,i=j?B.el:B.c,h=A.n(26),g=A.K(B.bT.j(0.5),B.r,1.5),f=A.p(k,D.bY_,B.f,k,k,new A.o(B.bT.j(0.18),k,k,k,k,k,B.a6),k,42,k,k,k,k,k,42),e=A.c("Tree display settings",k,k,k,k,k,k,A.l(k,k,j?B.aS:B.aw,k,k,k,k,k,k,k,k,18,k,k,B.u,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),d=l.b,a0=d.d
a0===$&&A.d()
w=x.p
a0=A.E(A.x(A.a([e,A.c(a0.b,k,1,B.a2,k,k,k,A.l(k,k,j?B.bv:B.bk,k,k,k,k,k,k,k,k,12.5,k,k,B.N,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)],w),B.B,k,B.e,B.h,0,B.p),1)
f=A.A(A.a([f,B.bc,a0,A.aI(k,k,k,k,A.V(B.cC,j?B.bv:B.bk,k,k,k,k),k,k,k,new C.e6u(a1),k,k,k,k,k,k)],w),B.l,k,B.e,B.h,0,k,k)
e=A.c("CHILDREN SHOWN UNDER EACH PARENT",k,k,k,k,k,k,A.l(k,k,j?B.bv:B.bk,k,k,k,k,k,k,k,k,11,k,k,B.u,k,k,!0,k,1,k,k,k,k,k,k),k,k,k)
a0=A.a([],w)
for(v=l.d,u=v.length,t=l.a,s=0;s<v.length;v.length===u||(0,A.I)(v),++s){r=v[s]
q=t.a===r?B.bT:B.bT.j(0.1)
p=new A.aP(20,20)
o=t.a===r
n=new A.ax(B.bT,o?2:1,B.r,-1)
m=r===0?"Show all":""+r
o=o?B.c:B.bT
a0.push(A.aA(k,A.cV(k,A.c(m,k,k,k,k,k,k,new A.G(!0,o,k,k,k,k,14,B.u,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k),k,k,k),k,k,B.aZ,new A.o(q,k,new A.bE(n,n,n,n),new A.bb(p,p,p,p),k,k,B.m),B.hl,k,k,k,k,B.D5,k,k,k),B.y,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,new C.e6v(t,a2,r),k,k,k,k,k,k,!1,B.a4))}a0=A.bZ(B.bI,a0,B.br,k,8,8)
v=t.a
v=v===0?"Every child shows in the tree.":"Only "+v+' children show under a parent. The rest wait in a "+ more" dropdown.'
f=A.a([D.c9n,new A.D(D.bI7,f,k),new A.D(D.bHZ,e,k),new A.D(B.r9,a0,k),new A.D(A0.aox,A.c(v,k,k,k,k,k,k,A.l(k,k,j?B.bv:B.bk,k,k,k,k,k,k,k,k,12.5,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),k,k,k),k)],w)
e=l.e
if(e>0){a0=A.V(AA.arc,j?B.bv:B.bk,k,k,k,20)
v=e===1?"person":"people"
f.push(new A.D(D.bI0,A.A(A.a([a0,B.ar,A.E(A.c(""+e+" hidden "+v,k,k,k,k,k,k,A.l(k,k,j?B.aS:B.aw,k,k,k,k,k,k,k,k,k,k,k,B.D,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),1),A.ayG(k,B.bT,k,k,!1,B.y,k,k,k,k,k,k,new C.e6w(d,a2),k,k,k,k,k,k,k,k,d.f)],w),B.l,k,B.e,B.h,0,k,k),k))}f.push(B.aB)
j=A.n(20)
e=A.a([new A.aa(0,B.H,B.az.j(0.35),B.hR,12)],x.V)
f.push(A.aA(k,A.p(k,A.A(A.a([D.fTU,B.bc,D.bMp,D.bYF],w),B.l,k,B.e,B.h,0,k,k),B.f,k,k,new A.o(k,k,k,j,e,D.cdb,B.m),k,k,k,B.ic,B.bF,k,k,k),B.y,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,new C.e6x(t,a1),k,k,k,k,k,k,!1,B.a4))
f.push(new A.D(B.x5,A.A(A.a([A.E(A.dY(B.dw,new C.e6y(a1),k),1),B.ar,A.E(A.bI(N.aZN,k,new C.e6z(t,a1),A.bp(B.bT,k,k,k,k,k,B.cq,k,k,k,k,k)),1)],w),B.l,k,B.e,B.h,0,k,k),k))
return A.bo(!0,A.p(k,A.cb(A.x(f,B.B,k,B.e,B.O,0,B.p),B.t,k,B.y,k,k,k,k,k,B.ah),B.aq,k,k,new A.o(i,k,g,h,k,k,B.m),k,k,k,B.zk,k,k,k,k),!0,!1,B.ag,!0,!0)},
$S:86}
C.e6u.prototype={
$0(){A.a7(this.a,!1).N(null)
return null},
$S:0}
C.e6v.prototype={
$0(){return this.b.$1(new C.e6t(this.a,this.c))},
$S:0}
C.e6t.prototype={
$0(){return this.a.a=this.b},
$S:0}
C.e6w.prototype={
$1(d){var w=this.a
w.l(new C.e6r(w,d))
this.b.$1(new C.e6s())},
$S:9}
C.e6r.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.e6s.prototype={
$0(){},
$S:0}
C.e6x.prototype={
$0(){var w=this.a.a
A.a7(this.b,!1).N(new A.aIU(!0,w))
return null},
$S:0}
C.e6y.prototype={
$0(){A.a7(this.a,!1).N(null)
return null},
$S:0}
C.e6z.prototype={
$0(){var w=this.a.a
A.a7(this.b,!1).N(new A.aIU(!1,w))
return null},
$S:0}
C.e6D.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.d()
w.d=v.cRN(this.b.b)
w.r.a6(0)},
$S:0}
C.e5V.prototype={
$1(d){var w,v,u,t=this.a,s=t.d
s===$&&A.d()
s=C.ajU(s)
w=t.d
t=t.a
v=t.c
u=t.d
return C.hEG(t.e,this.b,null,t.f,t.r,null,s,"Add Member",w,u,v)},
$S:z+18}
C.e5W.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&A.d()
w=A.B(u.f,x.P)
w.push(this.b)
v.d=u.aH7(w)},
$S:0}
C.e6N.prototype={
$1(d){var w=this.a.d
w===$&&A.d()
return new C.afa(this.b,w,this.c,null)},
$S:z+39}
C.e6H.prototype={
$1(d){var w=null,v=this.a.a,u=v?B.el:B.c,t=A.n(20),s=A.V(B.kN,B.aV,w,w,w,36),r=A.c("Almost there",w,w,w,w,w,w,A.l(w,w,v?B.aS:B.aw,w,w,w,w,w,w,w,w,w,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),B.K,w,w),q=this.b,p=q?"To remove a shared family tree from this phone, first create your own family tree in NGMY.":"To remove a shared family tree, you also need an active Family Tree photo pass.",o=x.p
p=A.a([A.c(p,w,w,w,w,w,w,A.l(w,w,v?B.bv:B.bk,w,w,w,w,w,w,w,w,14,w,w,w,w,1.45,!0,w,w,w,w,w,w,w,w),B.K,w,w)],o)
if(this.c&&!q)B.d.u(p,A.a([B.af,A.c("Photo access lets you upload member photos on trees you create. You can get it from any member profile when adding a photo.",w,w,w,w,w,w,A.l(w,w,v?B.bv:B.bk,w,w,w,w,w,w,w,w,12,w,w,w,w,1.4,!0,w,w,w,w,w,w,w,w),B.K,w,w)],o))
v=A.x(p,B.l,w,B.e,B.O,0,B.p)
return A.ei(A.a([A.bI(D.haZ,w,new C.e6G(d),A.bp(B.aV,w,w,w,w,w,w,w,w,w,w,w))],o),B.ba,w,u,v,w,s,w,new A.b9(t,B.a1),r,w)},
$S:18}
C.e6G.prototype={
$0(){A.a7(this.a,!1).N(null)
return null},
$S:0}
C.e5X.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
C.e5Y.prototype={
$1(d){return d.e===this.a.a},
$S:z+1}
C.e5Z.prototype={
$1(d){return d.a},
$S:z+8}
C.e6_.prototype={
$0(){var w,v,u,t,s,r,q,p,o,n,m=this,l=m.a,k=l.d
k===$&&A.d()
w=A.a([],x.u)
for(v=m.b,u=v.length,t=m.c.a,s=m.d,r=0;r<v.length;v.length===u||(0,A.I)(v),++r){q=v[r]
p=q.a
if(p!==t){o=q.d
if(o===t)o=s
n=q.e
if(n===t)n=null
w.push(new C.ig(p,q.b,q.c,o,n,q.f,q.r,q.w,q.x,q.y,q.z,q.Q,q.as,q.at))}}l.d=k.aH7(w)},
$S:0}
C.e63.prototype={
$1(d){var w,v,u,t,s=this.a,r=this.b,q=s.d
q===$&&A.d()
q=C.ajU(q)
w=A.U(q).k("X<1>")
q=A.B(new A.X(q,new C.e61(r),w),w.k("M.E"))
w=s.d
v=s.a
u=v.c
t=v.d
return C.hEG(v.e,null,r,v.f,v.r,new C.e62(s,r),q,"Member Profile",w,t,u)},
$S:z+18}
C.e62.prototype={
$0(){return this.a.abZ(this.b)},
$S:0}
C.e61.prototype={
$1(d){return d.a!==this.a.a},
$S:z+1}
C.e64.prototype={
$0(){var w,v,u=this.a,t=u.d
t===$&&A.d()
w=t.f
v=A.U(w).k("O<1,ig>")
w=A.B(new A.O(w,new C.e60(this.b),v),v.k("aj.E"))
u.d=t.aH7(w)},
$S:0}
C.e60.prototype={
$1(d){var w=this.a
return d.a===w.a?w:d},
$S:z+41}
C.e6M.prototype={
$0(){var w=this.a
return w.d=w.e.pop()},
$S:0}
C.e6g.prototype={
$1(d){return d.length!==0},
$S:3}
C.e6h.prototype={
$1(d){var w=this
return new A.e8(new C.e6f(w.a,w.b,w.c,w.d),null)},
$S:21}
C.e6f.prototype={
$2(d,e){var w=this,v=null,u=w.b,t=u.a,s=t?B.el:B.c,r=A.c("Collaborators",v,v,v,v,v,v,A.l(v,v,t?B.aS:B.aw,v,v,v,v,v,v,v,v,v,v,v,B.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),q=x.p,p=A.a([A.c("Invited users can edit this tree and add members. QR/file recipients stay view-only.",v,v,v,v,v,v,A.l(v,v,t?B.bv:B.bk,v,v,v,v,v,v,v,v,12,v,v,v,v,1.35,!0,v,v,v,v,v,v,v,v),v,v,v),B.af],q),o=w.c
if(o.length===0)p.push(A.c("No collaborators yet.",v,v,v,v,v,v,A.l(v,v,t?B.bv:B.bk,v,v,v,v,v,v,v,v,13,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v))
else B.d.u(p,new A.O(o,new C.e6b(u,e,o),A.U(o).k("O<1,w>")))
p.push(B.M)
u=w.d
p.push(A.aN(v,B.Z,!1,v,!0,B.t,v,A.aO(),u,v,v,v,v,v,2,A.bC(v,new A.b6(4,A.n(12),B.dB),v,v,v,v,v,v,!0,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,"friend@email.com",v,v,v,v,v,v,v,v,"Invite by email",!0,!0,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v),B.y,!0,v,!0,v,!1,v,B.al,v,v,v,v,v,B.mL,v,v,v,1,v,v,!1,"\u2022",v,v,v,v,v,!1,v,v,!1,v,!0,v,B.ae,v,v,v,v,v,v,v,v,v,v,v,v,!0,B.a7,v,B.ao,v,v,v,v))
p=A.x(p,B.am,v,B.e,B.O,0,B.p)
t=w.a
return A.ei(A.a([A.bM(!1,B.dw,v,v,!0,v,v,v,new C.e6c(d),v,v),A.bI(B.LV,v,new C.e6d(t,u,o,e),A.bp(B.bT,v,v,v,v,v,v,v,v,v,v,v)),A.bI(D.fYw,v,new C.e6e(t,u,o,d),A.bp(B.aV,v,v,v,v,v,v,v,v,v,v,v))],q),v,v,s,new A.a5(360,v,p,v),v,v,v,v,r,v)},
$S:209}
C.e6b.prototype={
$1(d){var w=null
return A.dO(!1,B.ag,w,w,!0,w,w,w,!0,w,w,w,w,w,w,w,w,!1,w,w,w,w,w,w,w,A.c(d,w,w,w,w,w,w,A.l(w,w,this.a.a?B.aS:B.aw,w,w,w,w,w,w,w,w,w,w,w,B.N,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w,A.aI(w,w,w,w,D.c6a,w,w,w,new C.e6a(this.b,this.c,d),w,w,w,w,w,w),w)},
$S:1961}
C.e6a.prototype={
$0(){return this.a.$1(new C.e68(this.b,this.c))},
$S:0}
C.e68.prototype={
$0(){return B.d.X(this.a,this.b)},
$S:0}
C.e6c.prototype={
$0(){A.a7(this.a,!1).N(!1)
return null},
$S:0}
C.e6d.prototype={
$0(){var w=this,v=w.b,u=B.a.i(v.a.a.toLowerCase())
if(u.length!==0&&!B.d.q(w.c,u)&&u!==B.a.i(w.a.a.c.toLowerCase())){w.d.$1(new C.e69(w.c,u))
v.bN(0,B.ck)}},
$S:0}
C.e69.prototype={
$0(){return this.a.push(this.b)},
$S:0}
C.e6e.prototype={
$0(){var w=this,v=B.a.i(w.b.a.a.toLowerCase())
if(v.length!==0&&!B.d.q(w.c,v)&&v!==B.a.i(w.a.a.c.toLowerCase()))w.c.push(v)
A.a7(w.d,!1).N(!0)},
$S:0}
C.e6i.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.d()
w.d=v.cSr(this.b,D.vj,C.HD(v,w.a.c))},
$S:0}
C.e6U.prototype={
$1(d){return d.as},
$S:z+1}
C.e6V.prototype={
$0(){var w=this.a.d
w===$&&A.d()
return A.ji(this.b,w)},
$S:0}
C.e6W.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.d()
v=C.iCL(v)
return w.Xb(v==null?null:v.a)},
$S:0}
C.e6X.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m=null,l=this.a,k=l.d
k===$&&A.d()
w=l.r
v=C.ie_(k,w,l.f)
u=v.d+32
t=v.e+32
k=v.a
if(k.gcn(k)){k=A.aT(1/0,e.a,e.b)
s=A.aT(1/0,e.c,e.d)
l.czm(new A.av(u,t),v.gbne(),new A.av(k,s))}k=A.n(22)
s=this.b.a
r=s?D.d7o:D.d5i
q=A.K(s?B.dx:D.bmW,B.r,1)
p=A.n(22)
o=A.bS(0,A.b4(m,m,m,new C.bhp(s,m),B.aA),0,0,0)
n=Math.max(e.b,e.d)
return A.p(m,A.by(p,new A.am(B.a0,m,B.ad,B.t,A.a([o,A.bS(0,A.vg(new A.R(n,n,n,n),new A.a5(u,t,new C.bim(l.d,v,l.f,w,new C.e6Q(l),l.gciP(),m),m),!1,3,0.2,!0,!0,l.w),0,0,0),A.ao(10,new C.bAm(s,new C.e6R(l,e),new C.e6S(l,e),new C.e6T(l,e,u,t,v),m),m,m,m,10,m,m)],x.p),m),B.aq),B.f,m,m,new A.o(m,m,q,k,m,new A.a8(B.aX,B.b1,B.x,r,m,m),B.m),m,m,m,U.anz,m,m,m,m)},
$S:173}
C.e6Q.prototype={
$1(d){var w=this.a
w.l(new C.e6O(w,d))},
$S:2}
C.e6O.prototype={
$0(){var w=this.a.r,v=this.b
if(w.q(0,v))w.X(0,v)
else w.I(0,v)},
$S:0}
C.e6R.prototype={
$0(){var w=this.b
return this.a.beE(1.25,new A.av(A.aT(1/0,w.a,w.b),A.aT(1/0,w.c,w.d)))},
$S:0}
C.e6S.prototype={
$0(){var w=this.b
return this.a.beE(0.8,new A.av(A.aT(1/0,w.a,w.b),A.aT(1/0,w.c,w.d)))},
$S:0}
C.e6T.prototype={
$0(){var w=this,v=w.b
return w.a.aWI(new A.av(A.aT(1/0,v.a,v.b),A.aT(1/0,v.c,v.d)),new A.av(w.c,w.d),w.e.gbne())},
$S:0}
C.e6Y.prototype={
$0(){var w=this.a
return w.l(new C.e6P(w))},
$S:0}
C.e6P.prototype={
$0(){var w=this.a
return w.f=!w.f},
$S:0}
C.e65.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.d
s===$&&A.d()
w=2
return A.b(A.fM(new A.fC(s.c)),$async$$0)
case 2:t.yJ("Tree code copied.")
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dki.prototype={
$1(d){var w=null,v=d.b,u=v.a,t=v.b
v=this.a
return A.ao(w,new C.bmc(u,C.hQz(v.c,u),new C.dkh(v,u),w),w,w,t.a-42,w,t.b,w)},
$S:z+42}
C.dkh.prototype={
$0(){return this.a.w.$1(this.b)},
$S:0}
C.dkj.prototype={
$1(d){var w=null,v=d.b,u=this.a
return A.ao(w,new C.bpz(d.d,d.c,u.f.q(0,d.a),new C.dkg(u,d),u.w,w),w,w,v.a-42,w,v.b,w)},
$S:z+43}
C.dkg.prototype={
$0(){return this.a.r.$1(this.b.a)},
$S:0}
C.fPp.prototype={
$1(d){var w,v=d.e
if(this.a.am(0,v))return v
v=this.b
w=A.U(v)
return A.nK(new A.cO(new A.X(v,new C.fPq(d),w.k("X<1>")),new C.fPr(),w.k("cO<1,m>")))},
$S:z+19}
C.fPq.prototype={
$1(d){return d.e===this.a.a},
$S:z+1}
C.fPr.prototype={
$1(d){return d.a},
$S:z+8}
C.fPn.prototype={
$1(d){return d.d===this.a.a&&d.a!==this.b},
$S:z+1}
C.fPo.prototype={
$1(d){return d.b},
$S:z+8}
C.fPu.prototype={
$1(d){var w,v=d.e
if(this.a.am(0,v))return v
v=this.b
w=A.U(v)
return A.nK(new A.cO(new A.X(v,new C.fPv(d),w.k("X<1>")),new C.fPw(),w.k("cO<1,m>")))},
$S:z+19}
C.fPv.prototype={
$1(d){return d.e===this.a.a},
$S:z+1}
C.fPw.prototype={
$1(d){return d.a},
$S:z+8}
C.fPs.prototype={
$1(d){var w,v=A.eA([d.a],x.N),u=this.a,t=d,s=0
for(;;){w=t.d
if(!(w!=null&&u.am(0,w)&&v.I(0,w)))break
w=u.h(0,w)
w.toString;++s
t=w}return s},
$S:z+45}
C.fPt.prototype={
$1(d){return this.a.h(0,d.a)===this.b},
$S:z+1}
C.dkl.prototype={
$0(){return this.a},
$S:z+46}
C.dkC.prototype={
$1(d){return d!=null&&d.length!==0&&this.a.am(0,d)},
$S:280}
C.dku.prototype={
$2(d,e){var w=this.a.c_(0,d,new C.dkv()),v=J.a2(w)
if(!v.q(w,e))v.I(w,e)},
$S:126}
C.dkv.prototype={
$0(){return A.a([],x.s)},
$S:767}
C.dkt.prototype={
$2(d,e){var w=this.a.h(0,d)
w=w==null?null:J.eD(w,e)
return w===!0},
$S:263}
C.dkm.prototype={
$0(){return A.a([],x.u)},
$S:z+16}
C.dks.prototype={
$1(d){var w=d.d
return this.a.$1(w)&&w!==d.a},
$S:z+1}
C.dkr.prototype={
$2(d,e){var w,v,u,t,s=this
if(!e.I(0,d))return 0
w=s.a
v=w.h(0,d)
v=J.aQ(v==null?D.El:v)
u=1
while(v.C())u+=s.$2(v.gP(v).a,e)
v=s.b.h(0,d)
v=J.aQ(v==null?B.Z:v)
while(v.C()){t=v.gP(v)
if(e.q(0,t))continue
e.I(0,t)
t=w.h(0,t)
t=J.aQ(t==null?D.El:t)
while(t.C())u+=s.$2(t.gP(t).a,e)}return u},
$S:1963}
C.dkn.prototype={
$1(d){return!this.a.$1(d)},
$S:z+1}
C.dkw.prototype={
$2(a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=this,a8=a7.a
a8.I(0,a9)
w=a7.b
w.n(0,a9,b0)
v=a7.c.h(0,a9)
v.toString
u=a7.d.h(0,a9)
u=J.aQ(u==null?B.Z:u)
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
t=J.aQ(t==null?D.El:t)
while(t.C()){r=t.gP(t)
if(r.a!==a9&&!B.d.aR(w,new C.dkx(r)))w.push(r)}}B.d.br(w,new C.dky(a8))
B.d.b0(w,new C.dkz())
q=C.idZ(a7.r,v,w,a7.w)
p=u?95:42
o=A.a([],x.d4)
n=A.a([],x.eU)
for(w=q.c,v=w.length,u=b0+1,m=0;m<w.length;w.length===v||(0,A.I)(w),++m){t=w[m].a
if(a8.q(0,t))continue
o.push(t)
n.push(a7.$2(t,u))}if(q.a){o.push(null)
n.push(A.a([D.f5m],x.G))}a8=A.a([],x.s)
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
else j.push(d)}}a0=(B.d.gG(k)+B.d.gal(k))/2
a1=A.a([new A.y(-p,p)],x.G)
for(a8=a7.z,w=q.b,v=a7.y,a2=0;a2<n.length;++a2){a3=k[a2]-a0
a4=o[a2]
if(a4!=null)v.n(0,a4,a3)
else a8.n(0,a9,new A.bsH(a3,w))
i=n[a2]
for(f=0;f<i.length;){u=i[f]
a5=a3+u.a
a6=a3+u.b;++f
if(f<a1.length){u=a1[f]
a1[f]=new A.y(Math.min(u.a,a5),Math.max(u.b,a6))}else a1.push(new A.y(a5,a6))}}return a1},
$S:1964}
C.dkx.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
C.dky.prototype={
$1(d){return this.a.q(0,d.a)},
$S:z+1}
C.dkz.prototype={
$2(d,e){return B.o.aQ(d.Q,e.Q)},
$S:z+7}
C.dkA.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o=this,n=o.a.$2(d,e),m=o.b
if(m.length!==0){for(w=J.a2(n),v=o.c,u=-1/0,t=0;t<w.gJ(n);++t){s=v.h(0,e+t)
if(s==null)continue
u=Math.max(u,s+88-w.h(n,t).a)}if(u===-1/0)u=new A.ba(v,A.a3(v).k("ba<2>")).cE(0,0,B.ov)+88-w.gG(n).a}else u=0
for(w=J.a2(n),v=o.c,t=0;t<w.gJ(n);++t){r=w.h(n,t)
q=e+t
p=v.h(0,q)
if(p==null)p=-1/0
v.n(0,q,Math.max(p,u+r.b))}m.push(d)
o.d.n(0,d,u)},
$S:706}
C.dkB.prototype={
$1(d){return 16+d*156},
$S:156}
C.dkk.prototype={
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
t.n(0,d,new C.GV(r,new A.r(e-53,v)))
s=s.h(0,u)
s.toString
t.n(0,u,new C.GV(s,new A.r(e+53,v)))}else{s=s.h(0,d)
s.toString
t.n(0,d,new C.GV(s,new A.r(e,v)))}t=o.r.h(0,d)
t=J.aQ(t==null?B.Z:t)
s=o.w
while(t.C()){r=t.gP(t)
q=s.h(0,r)
o.$2(r,e+(q==null?0:q))}p=o.x.h(0,d)
if(p!=null){t=p.a
w=w.$1(n+1)
s=p.b
o.y.push(new C.Lc(d,new A.r(e+t,w),s,s.length))}},
$S:185}
C.dko.prototype={
$2(d,e){var w=this.b,v=w.h(0,d).b
w=w.h(0,e).b
this.a.push(new C.aM2(new A.r(v.a,v.b+28),new A.r(w.a,w.b+28),!0,null))},
$S:126}
C.dkp.prototype={
$1(d){return d.a===this.a},
$S:z+47}
C.dkq.prototype={
$2(d,e){return B.i.aQ(d.a,e.a)},
$S:768}
C.dkD.prototype={
$2(d,e){return B.i.aQ(d.a,e.a)},
$S:768}
C.dkE.prototype={
$1(d){return Math.abs(d.a-this.a.a)<0.5},
$S:467}
C.dkF.prototype={
$1(d){return Math.abs(d.a-this.a.a)},
$S:195}
C.dkG.prototype={
$1(d){return d>=0.5},
$S:125}
C.fuo.prototype={
$3(d,e,f){var w=null,v=A.n(10)
return A.h9(A.aM(!1,v,!0,new A.a5(38,38,A.V(d,this.a.c?B.c:B.cx,w,w,w,20),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),w,e,w,w,w)},
$S:1966}
C.f4c.prototype={
$1(d){var w=null,v=A.n(8),u=B.bT.j(0.12),t=A.n(8)
return new A.D(B.lx,A.aM(!1,v,!0,A.p(w,A.c("#"+d.Q+" "+d.b,w,4,w,w,w,w,D.fJc,B.K,w,w),B.f,w,w,new A.o(u,w,w,t,w,w,B.m),w,w,w,w,B.Pq,w,w,1/0),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.f4b(this.a,d),w,w,w,w,w,w,w),w)},
$S:z+48}
C.f4b.prototype={
$0(){return this.a.r.$1(this.b)},
$S:0}
C.dAT.prototype={
$0(){return this.a.as=this.b},
$S:0}
C.dAS.prototype={
$1(d){var w=null,v=A.n(18),u=this.a
u=A.c("Delete "+(u.length===0?"this member":u)+"?",w,w,w,w,w,w,B.mM,B.K,w,w)
return A.ei(A.a([A.bM(!1,B.dw,w,w,!0,w,w,w,new C.dAQ(d),w,w),A.bM(!1,A.c("Delete",w,w,w,w,w,w,A.l(w,w,B.n4,w,w,w,w,w,w,w,w,w,w,w,B.D,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w,w,!0,w,w,w,new C.dAR(d),w,w)],x.p),B.ba,B.D0,w,u,D.bJ2,w,D.bKZ,new A.b9(v,B.a1),w,w)},
$S:18}
C.dAQ.prototype={
$0(){A.a7(this.a,!1).N(!1)
return null},
$S:0}
C.dAR.prototype={
$0(){A.a7(this.a,!1).N(!0)
return null},
$S:0}
C.dB1.prototype={
$1(d){var w=this.a.a.d
w=w==null?null:w.a
return d.a!==w},
$S:z+1}
C.dB2.prototype={
$1(d){var w=this.a
return w.l(new C.dB0(w,d))},
$S:z+49}
C.dB0.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.dB3.prototype={
$1(d){var w=null
return A.qY(A.c(d.b,w,w,w,w,w,w,w,w,w,w),d.a,x.T)},
$S:z+20}
C.dB6.prototype={
$1(d){var w=this.a
return w.l(new C.dB_(w,d))},
$S:35}
C.dB_.prototype={
$0(){return this.a.z=this.b},
$S:0}
C.dB5.prototype={
$1(d){var w=null
return A.qY(A.c(d.b,w,w,w,w,w,w,w,w,w,w),d.a,x.T)},
$S:z+20}
C.dB7.prototype={
$1(d){var w=this.a
return w.l(new C.dAZ(w,d))},
$S:35}
C.dAZ.prototype={
$0(){return this.a.Q=this.b},
$S:0}
C.dB8.prototype={
$0(){var w=this.a
return w.l(new C.dAY(w))},
$S:0}
C.dAY.prototype={
$0(){var w=this.a
return w.at=Math.max(1,w.at-1)},
$S:0}
C.dB9.prototype={
$0(){var w=this.a
return w.l(new C.dAX(w))},
$S:0}
C.dAX.prototype={
$0(){return++this.a.at},
$S:0}
C.dBa.prototype={
$0(){var w=this.a
return w.l(new C.dAW(w))},
$S:0}
C.dAW.prototype={
$0(){return--this.a.ax},
$S:0}
C.dBb.prototype={
$0(){var w=this.a
return w.l(new C.dAV(w))},
$S:0}
C.dAV.prototype={
$0(){return++this.a.ax},
$S:0}
C.dBc.prototype={
$1(d){var w=this.a
return w.l(new C.dAU(w,d))},
$S:9}
C.dAU.prototype={
$0(){return this.a.ay=this.b},
$S:0}
C.dB4.prototype={
$0(){A.a7(this.a,!1).N(null)
return null},
$S:0}
C.dBd.prototype={
$3(d,e,f){var w,v,u,t,s,r=null,q=this.a,p=q.d===d,o=A.n(12)
if(p)w=B.bT.j(0.18)
else w=q.c.a?B.el:B.c
v=A.n(12)
if(p)u=B.bT
else u=(q.c.a?B.eo:B.bO).j(0.85)
u=A.K(u,B.r,p?1.5:1)
if(p)t=B.bT
else t=q.c.a?B.bv:B.bk
t=A.V(f,t,r,r,r,18)
if(p)s=B.bT
else s=q.c.a?B.bv:B.bk
return A.E(A.aG(!1,B.a3,!0,r,A.aM(!1,o,!0,A.cV(r,A.x(A.a([t,B.at,A.c(e,r,r,r,r,r,r,A.l(r,r,s,r,r,r,r,r,r,r,r,11,r,r,B.D,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),B.l,r,B.e,B.h,0,B.p),r,r,B.aZ,new A.o(w,r,u,v,r,r,B.m),B.eH,r,r,r,r,B.jW,r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,new C.dBe(q,d),r,r,r,r,r,r,r),B.f,B.L,0,r,r,r,r,r,B.ai),1)},
$S:z+51}
C.dBe.prototype={
$0(){return this.a.e.$1(this.b)},
$S:0}
C.dBn.prototype={
$0(){A.a7(this.a,!1).N(null)
return null},
$S:0}
C.cho.prototype={
$2(d,e){return new A.bv(B.a.i(J.k(d).toLowerCase()),J.k(e),x.fK)},
$S:96}
C.chv.prototype={
$1(d){return d.ak()},
$S:z+5}
C.chw.prototype={
$2(d,e){var w=J.b8(e,new C.chu(),x.a)
w=A.B(w,w.$ti.k("aj.E"))
return new A.bv(d,w,x.d2)},
$S:z+53}
C.chu.prototype={
$1(d){return d.ak()},
$S:z+12}
C.chq.prototype={
$1(d){return C.an9(A.a0(d,x.N,x.z))},
$S:z+9}
C.chr.prototype={
$1(d){return d.a.length!==0},
$S:z+3}
C.chs.prototype={
$1(d){return C.hvm(A.a0(d,x.N,x.z))},
$S:z+11}
C.cht.prototype={
$1(d){return d.a.length!==0},
$S:z+4}
C.chA.prototype={
$1(d){return new A.aJ5(d.f.length,d.a,d.b)},
$S:z+55}
C.chB.prototype={
$2(d,e){return B.a.aQ(d.c,e.c)},
$S:704}
C.chx.prototype={
$1(d){return d.a===B.a.i(this.a)},
$S:z+3}
C.chy.prototype={
$1(d){return d.cRp(C.HD(d,this.a))},
$S:z+85}
C.e76.prototype={
$1(d){return C.uH(d,this.a.a.c)},
$S:z+3}
C.e77.prototype={
$0(){var w=this.a
w.d=this.b
w.e=this.c},
$S:0}
C.e7b.prototype={
$0(){var w=this.a
w.r=!0
w.f=this.b},
$S:0}
C.e7c.prototype={
$0(){var w=this.a
w.r=!1
w.f=null},
$S:0}
C.e73.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
r=s.a
q=r.c
w=3
return A.b(C.b2M(r.d,q,r.e,r.f),$async$$0)
case 3:p=e
if(s.c==null){w=1
break}if(p==null){s.zk("No family trees to export yet.")
w=1
break}r=s.a
w=4
return A.b(M.pP(r.c,r.e),$async$$0)
case 4:s.zk(p)
w=5
return A.b(s.KG(),$async$$0)
case 5:case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.e74.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
r=s.a
q=r.c
w=3
return A.b(C.b2M(r.d,q,r.e,t.b),$async$$0)
case 3:p=e
if(s.c==null){w=1
break}if(p==null){s.zk("Could not export this tree.")
w=1
break}r=s.a
w=4
return A.b(M.pP(r.c,r.e),$async$$0)
case 4:s.zk(p)
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.e75.prototype={
$0(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j
var $async$$0=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
o=r.a
n=o.a
m=n.c
w=7
return A.b(C.WY(n.d,m,n.e,r.b),$async$$0)
case 7:q=e
if(o.c==null){w=1
break}if(q==null){o.zk("No family trees found in that backup.")
w=1
break}o.a.w.$0()
if(q.c)o.zk("Restored "+q.a+" members on this phone (view only). Creator cloud data was not duplicated.")
else{n=q.a
m=q.b
l=q.b===1?"":"s"
o.zk("Restored "+n+" members across "+m+" tree"+l+".")}w=8
return A.b(o.KG(),$async$$0)
case 8:t=2
w=6
break
case 4:t=3
j=s.pop()
p=A.ac(j)
o=r.a
if(o.c==null){w=1
break}o.zk(B.a.eq(J.k(p),"StateError: ",""))
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$$0,v)},
$S:1}
C.e7a.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
r=s.a
q=r.c
w=3
return A.b(C.b2L(r.d,q,r.e,r.f),$async$$0)
case 3:p=e
r=s.c
if(r==null){w=1
break}if(p==null){s.zk("No family trees to share yet, or cloud is unavailable.")
w=1
break}w=4
return A.b(A.a7(r,!1).cc(A.eb(new C.e79(s,p),!0,null,x.H)),$async$$0)
case 4:s=s.a
w=5
return A.b(M.pP(s.c,s.e),$async$$0)
case 5:case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.e79.prototype={
$1(d){var w=this.b
return new C.a1d(this.a.a.c,w.b,w.a,w.c,null)},
$S:z+57}
C.e78.prototype={
$1(d){return D.hPa},
$S:z+58}
C.e7e.prototype={
$0(){A.a7(this.a,!1).N(null)
return null},
$S:0}
C.e7f.prototype={
$1(d){var w=this.a
w=w.r?null:new C.e7d(w,d)
return new A.D(B.d7,new C.biq(this.b,d.c,d.a,w,null),null)},
$S:1967}
C.e7d.prototype={
$0(){return this.a.Z2(this.b.b)},
$S:0}
C.e6Z.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.e7_.prototype={
$0(){return this.a.d=!0},
$S:0}
C.e70.prototype={
$0(){return this.a.e=!0},
$S:0}
C.e71.prototype={
$0(){return this.a.d=!1},
$S:0}
C.e72.prototype={
$0(){A.a7(this.a,!1).N(null)
return null},
$S:0}
C.e7g.prototype={
$1(d){var w,v,u,t,s,r=this.a
if(r.e)return
for(w=d.a,v=w.length,u=0;u<w.length;w.length===v||(0,A.I)(w),++u){t=w[u].z
s=t==null?null:B.a.i(t)
if(s==null||s.length===0)continue
if(!B.a.Y(s,"NGMYFTSYNC2"))t=!A.cZ(s,"ngmyFamilyTreeSync",0)
else t=!1
if(t)continue
r.e=!0
A.a7(this.b,!1).N(s)
return}},
$S:216}
C.dT8.prototype={
$1(d){return d.a===this.a.a.c},
$S:z+59}
C.dT9.prototype={
$0(){return B.d.gG(D.a7L)},
$S:z+60}
C.dTa.prototype={
$2(d,e){var w=null,v=this.a,u=v.a.c,t=v.d
t===$&&A.d()
t=t.x
t===$&&A.d()
v=v.e
v===$&&A.d()
v=v.x
v===$&&A.d()
return A.b4(A.at(A.V(this.b.d,B.c.j(0.95),w,w,D.deU,44),w,w,w),w,w,new C.bnk(u,t,v,w),B.aA)},
$S:58}
C.h6p.prototype={
$1(d){return A.oV(new C.h6o(this.a,d),!1,0.72,0.92,0.45,!1,null)},
$S:134}
C.h6o.prototype={
$2(d,e){var w,v,u,t=null,s=this.a,r=s.a,q=r?B.el:B.c,p=A.a([new A.aa(0,B.H,B.v.j(r?0.35:0.08),B.uc,24)],x.V),o=r?B.eo:B.bO
o=A.p(t,t,B.f,t,t,new A.o(o,t,t,A.n(99),t,t,B.m),t,4,t,t,t,t,t,40)
w=A.a([B.aV.j(0.25),B.bT.j(0.18)],x.O)
w=A.p(t,D.c07,B.f,t,t,new A.o(t,t,t,A.n(12),t,new A.a8(B.a5,B.a9,B.x,w,t,t),B.m),t,40,t,t,t,t,t,40)
v=A.c("Choose a theme",t,t,t,t,t,t,A.l(t,t,r?B.aS:B.aw,t,t,t,t,t,t,t,t,17,t,t,B.u,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)
u=x.p
return A.p(t,A.x(A.a([B.R,o,new A.D(E.aoB,A.A(A.a([w,B.bc,A.E(A.x(A.a([v,A.c("Animated thumbnails for construction, grocery, and more.",t,t,t,t,t,t,A.l(t,t,r?B.bv:B.bk,t,t,t,t,t,t,t,t,12,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],u),B.B,t,B.e,B.h,0,B.p),1)],u),B.l,t,B.e,B.h,0,t,t),t),A.E(A.iK(!0,t,e,B.y,D.fvw,new C.h6n(this.b,s),20,B.ao5,t,B.ah,!1),1)],u),B.l,t,B.e,B.h,0,B.p),B.f,t,t,new A.o(q,t,t,B.lo,p,t,B.m),t,t,t,t,t,t,t,t)},
$S:123}
C.h6n.prototype={
$2(d,e){var w=null,v=D.a7L[e],u=A.n(16),t=A.n(16),s=this.b.a,r=A.K(s?B.eo:B.bO,B.r,1),q=A.a([new A.aa(0,B.H,B.v.j(s?0.35:0.08),B.eC,8)],x.V),p=A.n(15),o=A.E(new C.a86(v.a,!0,w),1),n=s?B.ka:B.iL,m=A.c(v.b,w,1,B.a2,w,w,w,A.l(w,w,s?B.aS:B.aw,w,w,w,w,w,w,w,w,13,w,w,B.D,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),l=x.p
return A.aG(!1,B.a3,!0,w,A.aM(!1,u,!0,A.eJ(A.by(p,A.x(A.a([o,A.p(w,A.x(A.a([m,A.c(v.c,w,1,B.a2,w,w,w,A.l(w,w,s?B.bv:B.bk,w,w,w,w,w,w,w,w,10,w,w,B.a8,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],l),B.B,w,B.e,B.h,0,B.p),B.f,n,w,w,w,w,w,w,B.iP,w,w,w)],l),B.am,w,B.e,B.h,0,B.p),B.aq),w,new A.o(w,w,r,t,q,w,B.m),w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.h6m(this.a,v),w,w,w,w,w,w,w),B.f,B.L,0,w,w,w,w,w,B.ai)},
$S:80}
C.h6m.prototype={
$0(){A.a7(this.a,!1).N("ngmy:thumb:"+this.b.a)
return null},
$S:0}
C.crf.prototype={
$0(){return this.a.aii(this.b)},
$S:0}
C.h5N.prototype={
$1(d){return D.hJF},
$S:z+61}
C.hdA.prototype={
$1(d){var w=this
return new C.a3_(w.a,w.b,w.c,w.d,null)},
$S:z+62}
C.h5R.prototype={
$1(d){return new C.a_R(this.a,null)},
$S:z+63}
C.h5Q.prototype={
$1(d){return D.hKG},
$S:z+64}
C.dbL.prototype={
$0(){A.a7(this.a,!1).N(null)
return null},
$S:0}
C.dbM.prototype={
$1(d){var w=this.a
if(w.c!=null)w.l(new C.dbK(w,d))},
$S:35}
C.dbK.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.dbN.prototype={
$1(d){return this.a.Lj()},
$S:2}
C.dbO.prototype={
$0(){A.a7(this.a,!1).N(null)
return null},
$S:0}
C.dbH.prototype={
$0(){A.a7(this.a,!1).N(null)
return null},
$S:0}
C.dbI.prototype={
$1(d){return this.a.Lj()},
$S:2}
C.dbJ.prototype={
$0(){A.a7(this.a,!1).N(null)
return null},
$S:0}
C.cJA.prototype={
$0(){},
$S:0}
C.cJG.prototype={
$0(){A.a7(this.a,!1).N(null)
return null},
$S:0}
C.cJH.prototype={
$0(){return this.a.aRY(-1)},
$S:0}
C.cJI.prototype={
$1(d){return this.a.l(new C.cJF())},
$S:2}
C.cJF.prototype={
$0(){},
$S:0}
C.cJJ.prototype={
$0(){return this.a.aRY(1)},
$S:0}
C.cJK.prototype={
$1(d){return this.a.l(new C.cJE())},
$S:2}
C.cJE.prototype={
$0(){},
$S:0}
C.cJL.prototype={
$1(d){var w,v,u=null,t=this.a,s=t.w===d,r=d==="other"?"Other":d
r=A.c(r,u,u,u,u,u,u,A.l(u,u,u,u,u,u,u,u,u,u,u,11,u,u,B.N,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)
w=B.aV.j(0.2)
if(s)v=B.aV
else v=this.b.a?B.eo:B.bO
return A.v8(u,u,B.b5,r,u,new C.cJD(t,d),B.x9,s,w,u,new A.ax(v,1,B.r,-1),B.co)},
$S:1968}
C.cJD.prototype={
$1(d){var w=this.a
return w.l(new C.cJB(w,this.b))},
$S:9}
C.cJB.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.cJM.prototype={
$1(d){return this.a.l(new C.cJC())},
$S:2}
C.cJC.prototype={
$0(){},
$S:0}
C.cJN.prototype={
$0(){A.a7(this.a,!1).N(null)
return null},
$S:0}
C.ftU.prototype={
$1(d){var w,v=this.a.d
v===$&&A.d()
w=B.a.i(v.a.a)
if(w.length!==0)A.a7(this.b,!1).N(w)},
$S:2}
C.ftV.prototype={
$0(){A.a7(this.a,!1).N(null)
return null},
$S:0}
C.ftW.prototype={
$0(){var w,v=this.a.d
v===$&&A.d()
w=B.a.i(v.a.a)
if(w.length===0)return
A.a7(this.b,!1).N(w)},
$S:0}
C.ftS.prototype={
$2(d,e){var w,v,u,t,s,r=null,q=this.a,p=q.d
p===$&&A.d()
p=p.x
p===$&&A.d()
w=q.a
v=w.d
u=w.f
t=q.gbEA()
w=w.e
s=A.n(B.o.D(v-1,0,v))
return A.b4(new A.D(D.bKY,new A.e6(A.p(r,q.a.c,B.f,r,r,new A.o(r,r,r,s,r,r,B.m),r,r,r,r,w,r,r,r),r),r),new C.bAb(p,v,this.b.a,u,t,r),r,r,B.aA)},
$S:58}
C.ftT.prototype={
$2(d,e){var w,v,u,t,s,r=null,q=this.a,p=q.d
p===$&&A.d()
p=p.x
p===$&&A.d()
w=B.dQ.aA(0,p)
p=A.n(12)
q=q.a.c
v=A.n(12)
u=A.n(12)
t=w*2.4
s=A.ap(B.aV,B.bT,w)
s.toString
s=A.a([B.b5,s,B.aV],x.O)
return A.aG(!1,B.a3,!0,p,A.aM(!1,v,!0,A.eJ(D.eDc,r,new A.o(r,r,A.K(B.c.j(0.4),B.r,1.5),u,r,new A.a8(new A.dg(-1.2+t,-0.5),new A.dg(1.2-t,0.8),B.x,s,r,r),B.m),r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,r),B.f,B.L,0,r,r,r,r,r,B.ai)},
$S:137}
C.h43.prototype={
$1(d){return A.v(d.h(0,1))+","},
$S:57}
C.f1m.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.f1d.prototype={
$0(){return this.a.e=!0},
$S:0}
C.f1e.prototype={
$0(){return this.a.e=!1},
$S:0}
C.f1k.prototype={
$1(d){var w={},v=this.a.d
v===$&&A.d()
w.a=v.c
return new A.e8(new C.f1j(w,this.b),null)},
$S:21}
C.f1j.prototype={
$2(d,e){var w=null,v=this.b.a,u=v?B.el:B.c,t=A.n(20),s=A.c("Project thumbnail",w,w,w,w,w,w,A.l(w,w,v?B.aS:B.aw,w,w,w,w,w,w,w,w,17,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),r=this.a,q=x.p
return A.eH(w,u,new A.D(B.aov,A.x(A.a([s,B.aj,A.c("Tap circle for themes \xb7 tap frame for gallery",w,w,w,w,w,w,A.l(w,w,v?B.bv:B.bk,w,w,w,w,w,w,w,w,11,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.af,C.hBw(new C.f1g(r,e),r.a),B.aB,A.A(A.a([A.E(A.dY(B.dw,new C.f1h(d),w),1),B.ar,A.E(A.bI(B.Xg,w,new C.f1i(r,d),A.bp(B.aV,w,w,w,w,w,w,w,w,w,w,w)),1)],q),B.l,w,B.e,B.h,0,w,w)],q),B.am,w,B.e,B.O,0,B.p),w),w,w,w,w,w,B.dd,w,new A.b9(t,B.a1),w)},
$S:101}
C.f1g.prototype={
$1(d){return this.b.$1(new C.f1f(this.a,d))},
$S:35}
C.f1f.prototype={
$0(){return this.a.a=this.b},
$S:0}
C.f1h.prototype={
$0(){A.a7(this.a,!1).N(null)
return null},
$S:0}
C.f1i.prototype={
$0(){var w=this.a.a
A.a7(this.b,!1).N(w)
return null},
$S:0}
C.f1l.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.d()
return w.d=v.Ua(this.b)},
$S:0}
C.f18.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&A.d()
w=A.B(u.d,x.Q)
w.push(this.b)
v.d=u.bgC(w)},
$S:0}
C.f1c.prototype={
$1(d){return this.bpU(d)},
bpU(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.a
w=3
return A.b(C.Mw(s.a.c,d),$async$$1)
case 3:s=s.c
if(s.e==null){w=1
break}A.ji(s,d)
case 1:return A.h(u,v)}})
return A.i($async$$1,v)},
$S:z+21}
C.f1b.prototype={
$0(){var w,v,u=this.a,t=u.d
t===$&&A.d()
w=t.d
v=A.U(w).k("X<1>")
w=A.B(new A.X(w,new C.f1a(this.b),v),v.k("M.E"))
u.d=t.bgC(w)},
$S:0}
C.f1a.prototype={
$1(d){return d.a!==this.a.a},
$S:z+22}
C.f1n.prototype={
$0(){var w=this.a.d
w===$&&A.d()
return A.ji(this.b,w)},
$S:0}
C.f1o.prototype={
$1(d){return this.a.bIQ(d,this.b)},
$S:z+67}
C.f19.prototype={
$0(){return this.a.abY(this.b)},
$S:0}
C.hdn.prototype={
$1(d){return new C.afv(this.a,this.b,this.c,null)},
$S:z+68}
C.f1q.prototype={
$0(){return this.a.a15(this.b)},
$S:0}
C.f1r.prototype={
$0(){return this.a.Rr(this.b)},
$S:0}
C.f1s.prototype={
$0(){return this.a.Fj(this.b)},
$S:0}
C.f1t.prototype={
$0(){return this.a.a16(this.b)},
$S:0}
C.f1p.prototype={
$0(){A.a7(this.a,!1).N(null)
return null},
$S:0}
C.f13.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.f14.prototype={
$0(){return this.a.e="Could not create QR. Check your connection and try again."},
$S:0}
C.f15.prototype={
$0(){A.a7(this.a,!1).N(null)
return null},
$S:0}
C.f17.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return A.b(t.d.qy(),$async$$0)
case 2:if(t.c!=null)t.l(new C.f16(t))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.f16.prototype={
$0(){var w=this.a
return w.f=!w.f},
$S:0}
C.f1Q.prototype={
$2(d,e){return d+e.gxQ()},
$S:z+71}
C.f1M.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.f1N.prototype={
$0(){return this.a.f=!1},
$S:0}
C.f1x.prototype={
$1(d){var w,v=null,u=this.a.a,t=u?B.el:B.c,s=A.n(24),r=A.p(v,D.c0C,B.f,v,v,new A.o(B.aC.j(u?0.18:0.08),v,A.K(B.aC.j(0.28),B.r,1),v,v,v,B.a6),v,64,v,v,v,v,v,64),q=A.c("Clear all projects?",v,v,v,v,v,v,A.l(v,v,u?B.aS:B.aw,v,v,v,v,v,v,v,v,18,v,v,B.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),p=A.c("This permanently removes every worksheet project on this device. This cannot be undone.",v,v,v,v,v,v,A.l(v,v,u?B.bv:B.bk,v,v,v,v,v,v,v,v,13,v,v,v,v,1.4,!0,v,v,v,v,v,v,v,v),B.K,v,v),o=u?B.aS:B.aw
u=u?B.eo:B.bO
w=x.p
return A.eH(v,t,new A.D(B.x8,A.x(A.a([r,B.aO,q,B.M,p,B.di,A.A(A.a([A.E(A.dY(B.oq,new C.f1v(d),A.dk(v,v,v,v,v,v,v,v,v,o,v,v,B.f8,v,new A.b9(A.n(14),B.a1),new A.ax(u,1,B.r,-1),v,v,v,v)),1),B.ar,A.E(A.bI(D.heU,v,new C.f1w(d),A.bp(B.aC,v,v,v,v,v,B.f8,v,new A.b9(A.n(14),B.a1),v,v,v)),1)],w),B.l,v,B.e,B.h,0,v,v)],w),B.l,v,B.e,B.O,0,B.p),v),v,v,v,v,v,B.dd,v,new A.b9(s,B.a1),v)},
$S:47}
C.f1v.prototype={
$0(){A.a7(this.a,!1).N(!1)
return null},
$S:0}
C.f1w.prototype={
$0(){A.a7(this.a,!1).N(!0)
return null},
$S:0}
C.f1G.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m=null,l=this.b,k=l.a,j=k?B.el:B.c,i=A.n(28),h=A.a([new A.aa(0,B.H,B.v.j(k?0.35:0.08),B.h1,28)],x.V),g=k?D.dmL:AI.a72,f=x.p
g=A.p(m,A.x(A.a([A.p(m,m,B.f,m,m,new A.o(B.c.j(0.45),m,m,A.n(99),m,m,B.m),m,4,m,m,m,m,m,40),B.aB,D.foC,B.at,new A.bK(B.a5,m,m,A.c("Move worksheet projects between phones",m,m,m,m,m,m,A.l(m,m,B.c.j(0.82),m,m,m,m,m,m,m,m,12,m,m,B.cH,m,m,!0,m,m,m,m,m,m,m,m),m,m,m),m)],f),B.l,m,B.e,B.h,0,B.p),B.f,m,m,new A.o(m,m,m,m,m,new A.a8(B.ay,B.aD,B.x,g,m,m),B.m),m,m,m,m,E.aoz,m,m,1/0)
w=A.c("IMPORT PROJECT",m,m,m,m,m,m,A.l(m,m,k?B.bv:B.bk,m,m,m,m,m,m,m,m,11,m,m,B.D,m,m,!0,m,1.1,m,m,m,m,m,m),m,m,m)
v=this.a
u=A.A(A.a([A.E(v.b9s(B.b_,B.jH,new C.f1D(v,d),l,"Camera import","Scan QR"),1),B.ar,A.E(v.b9s(B.cG,S.Ab,new C.f1E(v,d),l,".json backup","Upload file"),1)],f),B.l,m,B.e,B.h,0,m,m)
t=A.c("DANGER ZONE",m,m,m,m,m,m,A.l(m,m,k?B.bv:B.bk,m,m,m,m,m,m,m,m,11,m,m,B.D,m,m,!0,m,1.1,m,m,m,m,m,m),m,m,m)
s=A.n(16)
r=B.aC.j(k?0.14:0.06)
q=A.n(16)
p=A.K(B.aC.j(0.28),B.r,1)
o=A.p(m,D.c_U,B.f,m,m,new A.o(B.aC.j(0.12),m,m,A.n(12),m,m,B.m),m,m,m,m,B.bR,m,m,m)
n=A.c("Clear all projects",m,m,m,m,m,m,A.l(m,m,k?B.aS:B.aw,m,m,m,m,m,m,m,m,m,m,m,B.D,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)
n=A.E(A.x(A.a([n,A.c("Remove every project on this device",m,m,m,m,m,m,A.l(m,m,k?B.bv:B.bk,m,m,m,m,m,m,m,m,12,m,m,m,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)],f),B.B,m,B.e,B.h,0,B.p),1)
return A.bo(!0,new A.D(B.x2,A.p(m,A.x(A.a([g,new A.D(B.aow,A.x(A.a([w,B.R,u,B.by,t,B.R,A.aG(!1,B.a3,!0,m,A.aM(!1,s,!0,A.p(m,A.A(A.a([o,B.bc,n,A.V(B.eM,k?B.bv:B.bk,m,m,m,m)],f),B.l,m,B.e,B.h,0,m,m),B.f,m,m,new A.o(r,m,p,q,m,m,B.m),m,m,m,m,B.bF,m,m,1/0),m,!0,m,m,m,m,m,m,m,m,m,m,m,new C.f1F(v,d,l),m,m,m,m,m,m,m),B.f,B.L,0,m,m,m,m,m,B.ai)],f),B.B,m,B.e,B.h,0,B.p),m)],f),B.l,m,B.e,B.O,0,B.p),B.aq,m,m,new A.o(j,m,m,i,h,m,B.m),m,m,m,m,m,m,m,m),m),!0,!1,B.ag,!0,!0)},
$S:27}
C.f1D.prototype={
$0(){var w=0,v=A.j(x.H),u=this
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:A.a7(u.b,!1).N(null)
w=2
return A.b(u.a.wd("scan"),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.f1E.prototype={
$0(){var w=0,v=A.j(x.H),u=this
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:A.a7(u.b,!1).N(null)
w=2
return A.b(u.a.wd("file"),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.f1F.prototype={
$0(){var w=0,v=A.j(x.H),u=this
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:A.a7(u.b,!1).N(null)
w=2
return A.b(u.a.P0(u.c),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.f1B.prototype={
$1(d){var w,v,u,t,s,r,q=null,p=this.b,o=p.a,n=o?B.el:B.c,m=A.n(24),l=A.a([new A.aa(0,B.H,B.v.j(o?0.35:0.08),B.eU,24)],x.V),k=o?B.eo:B.bO
k=A.p(q,q,B.f,q,q,new A.o(k,q,q,A.n(99),q,q,B.m),q,4,q,q,q,q,q,40)
w=A.n(12)
v=this.c
u=o?B.bv:B.bk
u=A.by(w,new A.a5(48,48,C.aTG(!0,A.n(12),48,R.Q6,u,v.c,48),q),B.aq)
w=A.c(v.b,q,1,B.a2,q,q,q,A.l(q,q,o?B.aS:B.aw,q,q,q,q,q,q,q,q,16,q,q,B.u,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
t=v.d.length
v=A.BF(v.gxQ())
s=x.p
r=this.a
return A.bo(!0,new A.D(B.x2,A.p(q,A.x(A.a([B.R,k,new A.D(D.aot,A.A(A.a([u,B.bc,A.E(A.x(A.a([w,A.c(""+t+" items \xb7 "+v,q,q,q,q,q,q,A.l(q,q,o?B.bv:B.bk,q,q,q,q,q,q,q,q,12,q,q,B.a8,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],s),B.B,q,B.e,B.h,0,B.p),1)],s),B.l,q,B.e,B.h,0,q,q),q),B.CT,r.ctj(B.vD,B.aV,new C.f1z(d),p,"QR code or backup file","Transfer project"),r.b6q(!0,B.eq,B.aC,new C.f1A(d),p,"Remove from this device","Delete project"),B.R],s),B.l,q,B.e,B.O,0,B.p),B.f,q,q,new A.o(n,q,q,m,l,q,B.m),q,q,q,q,q,q,q,q),q),!0,!1,B.ag,!0,!0)},
$S:27}
C.f1z.prototype={
$0(){A.a7(this.a,!1).N("transfer")
return null},
$S:0}
C.f1A.prototype={
$0(){A.a7(this.a,!1).N("delete")
return null},
$S:0}
C.f1C.prototype={
$1(d){return this.bpV(d)},
bpV(d){var w=0,v=A.j(x.H),u=this,t
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=u.a
w=2
return A.b(C.Mw(t.a.c,d),$async$$1)
case 2:w=3
return A.b(t.wt(),$async$$1)
case 3:return A.h(null,v)}})
return A.i($async$$1,v)},
$S:z+21}
C.f1T.prototype={
$0(){var w=this.a
w.a.bw()
w.l(new C.f1S(w))},
$S:0}
C.f1S.prototype={
$0(){return this.a.r++},
$S:0}
C.f1U.prototype={
$0(){var w=this.a
return w.l(new C.f1R(w))},
$S:0}
C.f1R.prototype={
$0(){return this.a.r++},
$S:0}
C.f1u.prototype={
$0(){var w=this.a.c
w.toString
return A.ji(w,null)},
$S:0}
C.f1y.prototype={
$0(){return this.a.cmq(this.b)},
$S:0}
C.f1P.prototype={
$0(){var w=this.a
return w.l(new C.f1O(w,this.b))},
$S:0}
C.f1O.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.f1J.prototype={
$0(){return this.a.wd("scan")},
$S:0}
C.f1K.prototype={
$0(){return this.a.wd("file")},
$S:0}
C.f1L.prototype={
$1(d){return this.a.ctk(d,this.b)},
$S:z+72}
C.f1I.prototype={
$0(){return this.a.Fn(this.b)},
$S:0}
C.f1H.prototype={
$0(){return this.a.a1A(this.b,this.c)},
$S:0}
C.cIW.prototype={
$2(d,e){return d+e.c*e.d},
$S:z+73}
C.cIV.prototype={
$1(d){return d.ak()},
$S:z+74}
C.cIT.prototype={
$1(d){return C.hWQ(A.a0(d,x.N,x.z))},
$S:z+75}
C.cIU.prototype={
$1(d){return d.a.length!==0},
$S:z+22}
C.fOh.prototype={
$1(d){return d.y===D.l8},
$S:z+3}
C.he9.prototype={
$1(d){return C.aSi(d,this.a)},
$S:z+3}
C.fLM.prototype={
$1(d){return d.a===this.a.a},
$S:z+3}
C.bV0.prototype={
$1(d){return!d.as},
$S:z+1}
C.bV_.prototype={
$1(d){return d.ak()},
$S:z+23}
C.bUX.prototype={
$1(d){return C.hvo(A.a0(d,x.N,x.z))},
$S:z+24}
C.bUY.prototype={
$1(d){return d.a.length!==0},
$S:z+1}
C.bUZ.prototype={
$1(d){return J.k(d)},
$S:15}
C.fBQ.prototype={
$2(d,e){return e.e.aQ(0,d.e)},
$S:z+25}
C.fxm.prototype={
$1(d){return C.hkL(A.a0(d,x.N,x.z))},
$S:z+79}
C.fxn.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+10}
C.fxo.prototype={
$2(d,e){return e.e.aQ(0,d.e)},
$S:z+25}
C.h5B.prototype={
$1(d){return J.k(d)},
$S:15}
C.h5C.prototype={
$1(d){return d.a},
$S:z+81}
C.h5D.prototype={
$1(d){return d.length!==0},
$S:3}
C.h5E.prototype={
$1(d){return B.d.q(this.a,d.a)},
$S:z+10}
C.h5F.prototype={
$1(d){return d.Ua(null).ak()},
$S:z+82}
C.he7.prototype={
$1(d){return d.a===this.a.a},
$S:z+10}
C.fOL.prototype={
$1(d){return d.a===this.a},
$S:z+10}
C.fS_.prototype={
$1(d){return C.an9(A.a0(d,x.N,x.z))},
$S:z+9}
C.fS0.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+3}
C.fS1.prototype={
$2(d,e){return e.r.aQ(0,d.r)},
$S:z+6}
C.fS2.prototype={
$1(d){return d.ak()},
$S:z+5}
C.fS3.prototype={
$1(d){return C.uH(d,this.a)},
$S:z+3}
C.h5o.prototype={
$1(d){return C.uH(d,this.a)},
$S:z+3}
C.he2.prototype={
$1(d){return C.an9(A.a0(d,x.N,x.z))},
$S:z+9}
C.he3.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+3}
C.he4.prototype={
$1(d){return d.a===this.a.a},
$S:z+3}
C.fOs.prototype={
$1(d){return d.a===this.a},
$S:z+3}
C.fOt.prototype={
$1(d){return d.a===this.a},
$S:z+3}
C.hed.prototype={
$1(d){return!d.as},
$S:z+1}
C.fNX.prototype={
$1(d){return d.a===this.a},
$S:z+1}
C.fNY.prototype={
$1(d){var w,v=this.a
if(d.d!==v)return!1
w=this.b
if(w!=null)if(w.e===d.a||d.e===v)return!1
return!0},
$S:z+1}
C.fNZ.prototype={
$2(d,e){return B.o.aQ(d.Q,e.Q)},
$S:z+7}
C.hdB.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
C.fSR.prototype={
$1(d){return d.Q},
$S:z+15}
C.h5h.prototype={
$1(d){var w=d.d
return w==null||w.length===0},
$S:z+1}
C.fRX.prototype={
$1(d){return C.an9(A.a0(d,x.N,x.z))},
$S:z+9}
C.fRY.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+3}
C.fRZ.prototype={
$2(d,e){return e.r.aQ(0,d.r)},
$S:z+6}
C.h5c.prototype={
$1(d){return d.a===this.a.a},
$S:z+3}
C.fxW.prototype={
$1(d){return d.length!==0},
$S:3}
C.fxX.prototype={
$1(d){return C.hvo(A.a0(d,x.N,x.z))},
$S:z+24}
C.fxY.prototype={
$1(d){return d.a.length!==0},
$S:z+1}
C.fxZ.prototype={
$1(d){return B.a.i(J.k(d).toLowerCase())},
$S:15}
C.fy_.prototype={
$1(d){return d.length!==0},
$S:3}
C.fyc.prototype={
$2(d,e){return d.eD(new C.fyd(e))},
$S:1969}
C.fyd.prototype={
$1(d){$.an.$1("[family_trees] "+this.a+" fetch: "+A.v(d))
return B.cn},
$S:1970}
C.fy9.prototype={
$1(d){return C.ij_(d,this.a)},
$S:z+84}
C.fya.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+3}
C.fyb.prototype={
$2(d,e){return e.r.aQ(0,d.r)},
$S:z+6}
C.fCA.prototype={
$1(d){return d.a},
$S:z+56}
C.fCB.prototype={
$1(d){return d.length!==0},
$S:3}
C.fCC.prototype={
$2(d,e){return e.r.aQ(0,d.r)},
$S:z+6}
C.fFC.prototype={
$1(d){return d.ak()},
$S:z+5}
C.fL_.prototype={
$1(d){return C.hHc(d,C.HD(d,this.a))},
$S:z+5}
C.fL0.prototype={
$1(d){return C.hHd(d,C.HD(d,this.a))},
$S:z+5};(function aliases(){var w=C.aCN.prototype
w.bxN=w.t
w=C.aAW.prototype
w.bxI=w.t
w=C.aIi.prototype
w.bya=w.t
w=C.aCO.prototype
w.bxO=w.t
w=C.aCQ.prototype
w.bxP=w.t
w=C.aCR.prototype
w.bxQ=w.t
w=C.aOv.prototype
w.bAE=w.t
w=C.aQC.prototype
w.bCY=w.t
w=C.aQD.prototype
w.bCZ=w.t})();(function installTearOffs(){var w=a._instance_1u,v=a._instance_0u,u=a._instance_0i,t=a.installInstanceTearOff,s=a._static_1
w(C.aFO.prototype,"gcq8","cq9",28)
var r
w(r=C.aCM.prototype,"gciV","ciW",65)
v(r,"gaQ8","Ox",0)
v(r,"gcyG","BL",0)
v(r,"gbQL","Pf",0)
v(r,"gcNq","zl",0)
v(r,"gcsg","a2j",0)
v(r,"gbM5","OX",0)
v(r,"gbRa","Yt",0)
w(r,"gbWh","bWi",78)
v(r,"gbGg","AF",0)
v(C.aCP.prototype,"gcNm","Gg",0)
v(r=C.amZ.prototype,"gbu8","bu9",2)
v(r,"gbu0","bu1",2)
v(r,"gcOt","cOu",2)
u(r,"gqs","kM",0)
u(r=C.al8.prototype,"gf1","fR",2)
w(r,"gcjU","cjV",27)
u(C.aw_.prototype,"gqs","kM",0)
v(r=C.azY.prototype,"gd_7","d_8",2)
u(r,"gqs","kM",0)
u(C.aM8.prototype,"gbu6","bu7",2)
v(C.an7.prototype,"gCi","cOG",2)
u(r=C.an5.prototype,"gcPn","cPo",2)
u(r,"gqs","kM",0)
v(r=C.an1.prototype,"gbsZ","bt_",2)
v(r,"gcUy","cUz",2)
u(r=C.an3.prototype,"gf1","fR",2)
u(r,"giA","cO_",2)
v(r=C.an_.prototype,"gcNP","cNQ",2)
u(r,"gbrR","jI",2)
v(r=C.aGn.prototype,"gahV","wu",0)
v(r,"gclD","a1s",0)
v(r,"gaUp","IT",0)
v(r=C.aGk.prototype,"gcJf","a4t",0)
v(r,"gahV","wu",0)
v(r,"gcwD","a2Y",0)
v(r,"gcly","b4C",2)
v(r,"gcmD","a1F",0)
w(r,"gciP","ciQ",35)
v(r,"gbR2","IY",0)
v(r,"gcKo","cKp",2)
v(r,"gc8n","a_g",0)
w(r,"gchj","chk",36)
v(r,"gclm","cln",2)
v(r=C.aEN.prototype,"gcex","QW",0)
v(r,"gcez","ceA",2)
v(r,"gbNA","abA",0)
v(r=C.aGm.prototype,"gbUE","YZ",0)
v(r,"gc4e","ZF",0)
v(r,"gcDd","a3R",0)
v(r,"gczg","a3r",0)
v(C.aGl.prototype,"gcyZ","ajJ",0)
v(C.avb.prototype,"gchh","a13",0)
v(C.aBv.prototype,"ga4c","Lj",2)
v(C.aBu.prototype,"ga4c","Lj",2)
v(C.aAa.prototype,"ga4c","Lj",2)
v(r=C.aHU.prototype,"gb5O","RY",0)
v(r,"gbF4","X5",0)
v(r,"gcmr","cms",2)
w(C.aHT.prototype,"gci9","cia",69)
t(C.aHV.prototype,"gaUk",0,0,null,["$1","$0"],["IS","bOU"],70,0,0)
s(C,"hPE","it1",23)})();(function inheritance(){var w=a.mixinHard,v=a.mixin,u=a.inheritMany,t=a.inherit
u(A.aE,[C.aqK,C.v5,C.nH,C.IH,C.agH,C.L5,C.v6,C.bVw,C.tq,C.bqR,C.ang,C.aeN,C.lL,C.bU7,C.avn,C.zS,C.alP,C.N8,C.bc7,C.aaR,C.bjv,C.agO,C.aBb,C.agC,C.aM8,C.Lc,C.GV,C.bio,C.aM2,C.as6,C.dkH,C.md,C.aWE,C.aWD,C.aUF,C.ur,C.rG,C.lY,C.ig,C.lb,C.aK_])
u(A.fR,[C.fWO,C.fWN,C.fWP,C.h6i,C.fJC,C.fJD,C.fJI,C.fUw,C.fUv,C.fUu,C.cak,C.h6P,C.h6H,C.h6T,C.fOA,C.dTQ,C.dTL,C.dTM,C.dTo,C.dTk,C.dU4,C.dU5,C.dTZ,C.dU_,C.dU6,C.dU7,C.fPl,C.fRU,C.fRV,C.h5m,C.he1,C.fOr,C.h5X,C.djU,C.djg,C.djp,C.djG,C.djl,C.djr,C.dji,C.djv,C.djw,C.dju,C.djL,C.djK,C.dlH,C.dlI,C.dlJ,C.dk7,C.dkc,C.dkb,C.cRY,C.cS_,C.daZ,C.dbn,C.dbo,C.dbr,C.dbt,C.dbu,C.dbv,C.dbx,C.dby,C.bTS,C.bTM,C.fCh,C.hdU,C.hdV,C.hdW,C.hdR,C.hdX,C.hdY,C.hdZ,C.hdQ,C.fPZ,C.h4g,C.fLN,C.fSQ,C.bOU,C.hej,C.h4T,C.bN3,C.bMZ,C.bN0,C.bN_,C.csW,C.csR,C.csS,C.csQ,C.csO,C.csT,C.cT1,C.cHV,C.cHY,C.cHW,C.cHZ,C.cI_,C.fer,C.foO,C.bUE,C.bUy,C.bUC,C.bUf,C.e5F,C.e5C,C.e5D,C.e5B,C.e5H,C.bUw,C.bUm,C.bU6,C.bU5,C.bU1,C.bU2,C.bU3,C.bU4,C.e7k,C.e6K,C.e6F,C.e66,C.e6m,C.e6p,C.e6l,C.e6k,C.e6B,C.e6C,C.e6w,C.e5V,C.e6N,C.e6H,C.e5X,C.e5Y,C.e5Z,C.e63,C.e61,C.e60,C.e6g,C.e6h,C.e6b,C.e6U,C.e6Q,C.dki,C.dkj,C.fPp,C.fPq,C.fPr,C.fPn,C.fPo,C.fPu,C.fPv,C.fPw,C.fPs,C.fPt,C.dkC,C.dks,C.dkn,C.dkx,C.dky,C.dkB,C.dkp,C.dkE,C.dkF,C.dkG,C.fuo,C.f4c,C.dAS,C.dB1,C.dB2,C.dB3,C.dB6,C.dB5,C.dB7,C.dBc,C.dBd,C.chv,C.chu,C.chq,C.chr,C.chs,C.cht,C.chA,C.chx,C.chy,C.e76,C.e79,C.e78,C.e7f,C.e7g,C.dT8,C.h6p,C.h5N,C.hdA,C.h5R,C.h5Q,C.dbM,C.dbN,C.dbI,C.cJI,C.cJK,C.cJL,C.cJD,C.cJM,C.ftU,C.h43,C.f1k,C.f1g,C.f1c,C.f1a,C.f1o,C.hdn,C.f1x,C.f1G,C.f1B,C.f1C,C.f1L,C.cIV,C.cIT,C.cIU,C.fOh,C.he9,C.fLM,C.bV0,C.bV_,C.bUX,C.bUY,C.bUZ,C.fxm,C.fxn,C.h5B,C.h5C,C.h5D,C.h5E,C.h5F,C.he7,C.fOL,C.fS_,C.fS0,C.fS2,C.fS3,C.h5o,C.he2,C.he3,C.he4,C.fOs,C.fOt,C.hed,C.fNX,C.fNY,C.hdB,C.fSR,C.h5h,C.fRX,C.fRY,C.h5c,C.fxW,C.fxX,C.fxY,C.fxZ,C.fy_,C.fyd,C.fy9,C.fya,C.fCA,C.fCB,C.fFC,C.fL_,C.fL0])
u(A.aw,[C.b1g,C.amX,C.aXX,C.a_t,C.bdX,C.Rb,C.a7k,C.tP,C.IJ,C.bim,C.bmc,C.bAm,C.bpz,C.af9,C.bmb,C.af8,C.bma,C.aEO,C.aL4,C.afa,C.GR,C.bin,C.aep,C.bil,C.biq,C.b1e,C.avb,C.afv])
u(A.lK,[C.beC,C.bfQ,C.bfH,C.aJU,C.bld,C.bqQ,C.aY1,C.beE,C.aCL,C.be5,C.buX,C.bll,C.bkL,C.bkS,C.bip,C.bhp,C.bnk,C.bAb])
u(A.hS,[C.h6M,C.h6N,C.h6O,C.h6F,C.h6G,C.h6R,C.h6S,C.dU1,C.dTO,C.dTR,C.dTv,C.dTw,C.dTx,C.dTu,C.dTC,C.dTt,C.dTD,C.dTE,C.dTs,C.dTF,C.dTr,C.dTG,C.dTq,C.dTH,C.dTi,C.dTj,C.dTp,C.dTI,C.dTn,C.dTJ,C.dTm,C.dTy,C.dTl,C.dTz,C.dTh,C.dTA,C.dTB,C.dU2,C.dU3,C.dTS,C.dTT,C.dTU,C.dTV,C.dTW,C.dTX,C.dTY,C.dU9,C.dU0,C.fPm,C.dje,C.djc,C.djd,C.djf,C.djT,C.djI,C.djF,C.djh,C.djJ,C.djn,C.djo,C.djq,C.djH,C.djm,C.djs,C.djQ,C.djC,C.djB,C.djD,C.djE,C.djx,C.djz,C.djA,C.djt,C.djM,C.djP,C.djj,C.djk,C.dlG,C.dlF,C.dlE,C.dlD,C.dlK,C.dlC,C.dlL,C.dk8,C.dk9,C.dka,C.dkd,C.dk6,C.dk5,C.cRZ,C.daY,C.dba,C.db9,C.dbp,C.db8,C.dbq,C.db7,C.db6,C.dbs,C.db5,C.dbi,C.dbh,C.dbz,C.bTL,C.bTV,C.bTN,C.bTO,C.bTR,C.bTQ,C.bTT,C.bTU,C.bTP,C.bTJ,C.bTK,C.bVo,C.bVp,C.bVq,C.bVr,C.bVs,C.bVt,C.bVu,C.hdT,C.h4h,C.bN2,C.bMY,C.bMW,C.bMX,C.bMV,C.csY,C.csZ,C.csX,C.ct_,C.ct1,C.ct2,C.ct3,C.csU,C.cHU,C.cI2,C.cI3,C.cI4,C.cI1,C.cI5,C.cI6,C.cI7,C.cI8,C.cHX,C.cI0,C.bUU,C.bUT,C.bUR,C.bUP,C.bUQ,C.bUM,C.bUN,C.bUO,C.bUS,C.bUL,C.fes,C.fet,C.feu,C.fev,C.few,C.bUI,C.bUJ,C.bUK,C.bUD,C.bUF,C.bUG,C.bUH,C.bUz,C.bUj,C.bUi,C.bUh,C.bUb,C.bUc,C.bUg,C.bUd,C.bUe,C.bUa,C.e5E,C.e5G,C.e5z,C.e5A,C.e5y,C.e5I,C.e5J,C.e5K,C.e5N,C.e5O,C.e5P,C.e5Q,C.e5R,C.e5S,C.e5T,C.e5U,C.e5L,C.e5M,C.bUv,C.bUu,C.bUl,C.bUk,C.bUr,C.bUs,C.bUo,C.bUp,C.bUq,C.bUn,C.bTW,C.bTX,C.bU0,C.bU_,C.bTZ,C.bTY,C.e7j,C.e7i,C.e7l,C.e7m,C.e7n,C.e7h,C.e7p,C.e7o,C.e6I,C.e6J,C.e6L,C.e67,C.e6o,C.e6n,C.e6q,C.e6E,C.e6j,C.e6u,C.e6v,C.e6t,C.e6r,C.e6s,C.e6x,C.e6y,C.e6z,C.e6D,C.e5W,C.e6G,C.e6_,C.e62,C.e64,C.e6M,C.e6a,C.e68,C.e6c,C.e6d,C.e69,C.e6e,C.e6i,C.e6V,C.e6W,C.e6O,C.e6R,C.e6S,C.e6T,C.e6Y,C.e6P,C.e65,C.dkh,C.dkg,C.dkl,C.dkv,C.dkm,C.f4b,C.dAT,C.dAQ,C.dAR,C.dB0,C.dB_,C.dAZ,C.dB8,C.dAY,C.dB9,C.dAX,C.dBa,C.dAW,C.dBb,C.dAV,C.dAU,C.dB4,C.dBe,C.dBn,C.e77,C.e7b,C.e7c,C.e73,C.e74,C.e75,C.e7a,C.e7e,C.e7d,C.e6Z,C.e7_,C.e70,C.e71,C.e72,C.dT9,C.h6m,C.crf,C.dbL,C.dbK,C.dbO,C.dbH,C.dbJ,C.cJA,C.cJG,C.cJH,C.cJF,C.cJJ,C.cJE,C.cJB,C.cJC,C.cJN,C.ftV,C.ftW,C.f1m,C.f1d,C.f1e,C.f1f,C.f1h,C.f1i,C.f1l,C.f18,C.f1b,C.f1n,C.f19,C.f1q,C.f1r,C.f1s,C.f1t,C.f1p,C.f13,C.f14,C.f15,C.f17,C.f16,C.f1M,C.f1N,C.f1v,C.f1w,C.f1D,C.f1E,C.f1F,C.f1z,C.f1A,C.f1T,C.f1S,C.f1U,C.f1R,C.f1u,C.f1y,C.f1P,C.f1O,C.f1J,C.f1K,C.f1I,C.f1H])
u(A.af,[C.aqX,C.Uz,C.a0e,C.a0i,C.a0g,C.a_P,C.amY,C.al7,C.avZ,C.azX,C.an6,C.an4,C.an0,C.WV,C.an2,C.UA,C.as9,C.as3,C.a0U,C.as7,C.a1d,C.a1e,C.a86,C.a_R,C.a_Q,C.a_k,C.a3_,C.GG,C.aA3,C.ava,C.av4,C.av9,C.Pq])
u(A.ah,[C.aFO,C.big,C.aCM,C.biF,C.aCP,C.bfO,C.aCN,C.aAW,C.aIi,C.azY,C.aCR,C.aCQ,C.aCO,C.bnG,C.an3,C.an_,C.aGn,C.aGk,C.aEN,C.aGm,C.aGl,C.bnH,C.aOv,C.aBv,C.aBu,C.aAa,C.bAe,C.aQC,C.aQD,C.aHU,C.bp4,C.aHT,C.bC_])
u(A.ie,[C.dTN,C.dTP,C.dTK,C.dU8,C.fRW,C.bTI,C.djS,C.djR,C.djy,C.djN,C.djO,C.dke,C.bVv,C.bVn,C.bU8,C.bU9,C.hdS,C.hei,C.bN1,C.ct0,C.csV,C.csP,C.fex,C.bUx,C.bUA,C.bUB,C.dv7,C.bUt,C.e6A,C.e6f,C.e6X,C.dku,C.dkt,C.dkr,C.dkw,C.dkz,C.dkA,C.dkk,C.dko,C.dkq,C.dkD,C.cho,C.chw,C.chB,C.dTa,C.h6o,C.h6n,C.ftS,C.ftT,C.f1j,C.f1Q,C.cIW,C.fBQ,C.fxo,C.fS1,C.fNZ,C.fRZ,C.fyc,C.fyb,C.fCC])
u(A.kQ,[C.a2v,C.agQ,C.a2O,C.a0G,C.adq,C.aMQ,C.II,C.an8,C.cIX,C.cIY])
t(C.amZ,C.aCN)
t(C.al8,C.aAW)
t(C.aw_,C.aIi)
t(C.bik,C.aCR)
t(C.an7,C.bik)
t(C.bij,C.aCQ)
t(C.an5,C.bij)
t(C.bii,C.aCO)
t(C.an1,C.bii)
t(C.bnl,C.aOv)
t(C.bAc,C.aQC)
t(C.bAd,C.aQD)
t(C.aHV,C.bC_)
t(C.bck,A.bc8)
t(C.bAf,A.a7M)
t(C.bcj,C.bAf)
w(C.aCN,A.ci)
w(C.aAW,A.ci)
w(C.aIi,A.f1)
w(C.aCO,A.ci)
v(C.bii,C.agC)
w(C.aCQ,A.ci)
v(C.bij,C.agC)
w(C.aCR,A.ci)
v(C.bik,C.agC)
w(C.aOv,A.f1)
w(C.aQC,A.ci)
w(C.aQD,A.ci)
v(C.bC_,A.eL)
v(C.bAf,A.jv)})()
A.i0(b.typeUniverse,JSON.parse('{"b1g":{"aw":[],"w":[]},"beC":{"aC":[]},"aqX":{"af":[],"w":[]},"aFO":{"ah":["aqX"]},"Uz":{"af":[],"w":[]},"amX":{"aw":[],"w":[]},"aXX":{"aw":[],"w":[]},"big":{"ah":["Uz"]},"a0e":{"af":[],"w":[]},"a0i":{"af":[],"w":[]},"a0g":{"af":[],"w":[]},"a_P":{"af":[],"w":[]},"aCM":{"ah":["a0e"]},"biF":{"ah":["a0i"]},"aCP":{"ah":["a0g"]},"a_t":{"aw":[],"w":[]},"bfQ":{"aC":[]},"bfH":{"aC":[]},"bfO":{"ah":["a_P"]},"aJU":{"aC":[]},"bld":{"aC":[]},"bdX":{"aw":[],"w":[]},"amY":{"af":[],"w":[]},"amZ":{"ah":["amY"]},"bqQ":{"aC":[]},"aY1":{"aC":[]},"al7":{"af":[],"w":[]},"avZ":{"af":[],"w":[]},"azX":{"af":[],"w":[]},"al8":{"ah":["al7"]},"beE":{"aC":[]},"Rb":{"aw":[],"w":[]},"aCL":{"aC":[]},"aw_":{"ah":["avZ"]},"be5":{"aC":[]},"azY":{"ah":["azX"]},"an6":{"af":[],"w":[]},"an4":{"af":[],"w":[]},"an0":{"af":[],"w":[]},"an7":{"ah":["an6"]},"buX":{"aC":[]},"an5":{"ah":["an4"]},"bll":{"aC":[]},"an1":{"ah":["an0"]},"bkL":{"aC":[]},"WV":{"af":[],"w":[]},"an2":{"af":[],"w":[]},"UA":{"af":[],"w":[]},"a7k":{"aw":[],"w":[]},"bkS":{"aC":[]},"tP":{"aw":[],"w":[]},"IJ":{"aw":[],"w":[]},"bnG":{"ah":["WV"]},"an3":{"ah":["an2"]},"an_":{"ah":["UA"]},"as9":{"af":[],"w":[]},"as3":{"af":[],"w":[]},"a0U":{"af":[],"w":[]},"afa":{"aw":[],"w":[]},"aGn":{"ah":["as9"]},"aGk":{"ah":["as3"]},"bim":{"aw":[],"w":[]},"bip":{"aC":[]},"bmc":{"aw":[],"w":[]},"bhp":{"aC":[]},"bAm":{"aw":[],"w":[]},"bpz":{"aw":[],"w":[]},"aEN":{"ah":["a0U"]},"af9":{"aw":[],"w":[]},"bmb":{"aw":[],"w":[]},"af8":{"aw":[],"w":[]},"bma":{"aw":[],"w":[]},"aEO":{"aw":[],"w":[]},"aL4":{"aw":[],"w":[]},"GR":{"aw":[],"w":[]},"as7":{"af":[],"w":[]},"a1d":{"af":[],"w":[]},"a1e":{"af":[],"w":[]},"aGm":{"ah":["as7"]},"bin":{"aw":[],"w":[]},"aep":{"aw":[],"w":[]},"bil":{"aw":[],"w":[]},"biq":{"aw":[],"w":[]},"aGl":{"ah":["a1d"]},"bnH":{"ah":["a1e"]},"b1e":{"aw":[],"w":[]},"a86":{"af":[],"w":[]},"bnl":{"ah":["a86"]},"bnk":{"aC":[]},"avb":{"aw":[],"w":[]},"a_R":{"af":[],"w":[]},"a_Q":{"af":[],"w":[]},"a_k":{"af":[],"w":[]},"a3_":{"af":[],"w":[]},"aBv":{"ah":["a_R"]},"aBu":{"ah":["a_Q"]},"aAa":{"ah":["a_k"]},"bAe":{"ah":["a3_"]},"GG":{"af":[],"w":[]},"aA3":{"af":[],"w":[]},"bAc":{"ah":["GG"]},"bAd":{"ah":["aA3"]},"bAb":{"aC":[]},"ava":{"af":[],"w":[]},"aHU":{"ah":["ava"]},"afv":{"aw":[],"w":[]},"av4":{"af":[],"w":[]},"av9":{"af":[],"w":[]},"bp4":{"ah":["av4"]},"aHT":{"ah":["av9"]},"Pq":{"af":[],"w":[]},"aHV":{"ah":["Pq"],"eL":[]},"bcj":{"jv":[],"fp":[]}}'))
A.DC(b.typeUniverse,JSON.parse('{"agC":1}'))
var y={q:'\nSWAHILI THAT REAL SWAHILI SPEAKERS USE (critical): translate the MEANING and write the way a Swahili speaker in Tanzania, Kenya or eastern Congo would say it. NEVER translate word for word. Many English phrases have no literal Swahili twin and sound strange or are not understood if copied. Examples:\n- "family tree" is NOT "mti wa familia": say "ukoo" (the family line), "nasaba", or "historia ya ukoo wetu". "family book" -> "kitabu cha familia" or "kitabu cha ukoo".\n- ancestors -> "mababu" / "wazee wa zamani"; grandparents -> "babu na bibi"; great-grandparent -> "babu/bibi mkubwa"; descendants -> "wazao" / "vizazi vyetu"; generation -> "kizazi"; heritage / legacy -> "urithi", "mila na desturi"; bloodline -> "ukoo", "damu moja"; roots -> "asili yetu".\n- relatives: cousin -> "binamu"; father\'s brother -> "baba mdogo" / "baba mkubwa"; mother\'s brother -> "mjomba"; father\'s sister -> "shangazi"; mother\'s sister -> "mama mdogo" / "mama mkubwa"; nephew or niece -> "mpwa"; in-laws -> "wakwe"; brother- or sister-in-law -> "shemeji"; spouse -> "mke" (wife) / "mume" (husband) / "mwenzi wake"; firstborn -> "mzaliwa wa kwanza" / "kifungua mimba"; last-born -> "kitinda mimba"; elders -> "wazee"; clan -> "ukoo" / "kabila".\n- life events: was born -> "alizaliwa"; passed away / died -> "alifariki" / "alifariki dunia"; he married -> "alimuoa", she married -> "aliolewa na"; raised -> "alilea"; moved -> "alihamia"; blessing -> "baraka"; memories -> "kumbukumbu"; story -> "hadithi" / "simulizi"; chapter -> "sura"; page -> "ukurasa"; "our family" -> "familia yetu".\n- Use everyday words, short clear sentences and natural word order. If an idea has no good Swahili word, explain it simply instead of inventing a word. Never use a rare or strange word you are not sure about.\n- WRITE AS A NATIVE AUTHOR, NOT AS A TRANSLATOR. Build every sentence the Swahili way (short, clear, with the right subject and tense markers) and join ideas with "na", "kisha", "baadaye", "hivyo", "ndipo". Never keep the shape of an English sentence.\n- KEEP IT PLAIN AND WARM. Drop flowery English phrases and pictures that do not work in Swahili ("the tree grew wider", "bloodlines shaped nations", "carried great destinies", "sacred story", "anchors the beginning") and say the plain fact instead. Never add big claims that the facts do not give.\n- Correct Swahili grammar: noun-class agreement (mtoto mmoja, watoto watatu, kijiji kimoja, vijiji vitatu), tenses (a-li- past, a-na- now, a-ta- future, a-me- done) and the right "wa / cha / la / ya / za / vya".\n- Write people\'s names with normal capitals (Ikungu Ele, Muteleka), never in ALL CAPITALS. Place names and dates stay as they are.\n- Example. English: "Through Ekama Pele the family grew, and he had three children: Muteleka, Bembesile and Nyakasi Ebulo." Good Swahili: "Familia iliendelea kukua kupitia Ekama Pele, aliyepata watoto watatu: Muteleka, Bembesile na Nyakasi Ebulo." Bad, word for word (never write like this): "Kupitia Ekama Pele, mti ulikua mpana zaidi, ukizaa watoto watatu wa msingi."\n',z:"AI is not available right now. Please try again later.",k:"No internet connection. Try again when you are online.",B:'PathMetricIterator is not pointing to a PathMetric. This can happen in two situations:\n- The iteration has not started yet. If so, call "moveNext" to start iteration.\n- The iterator ran out of elements. If so, check that "moveNext" returns true prior to calling "current".',A:"The AI could not do that just now. Nothing was changed.",y:"The AI could not translate the book. Nothing was changed."}
var x=(function rtii(){var w=A.as
return{e2:w("aUF"),cq:w("mz"),Q:w("rG"),r:w("bl<m,m>"),c5:w("aWD"),dY:w("aWE"),fH:w("N8"),de:w("alP"),dN:w("Ng<F>"),gc:w("EJ<F>"),A:w("eN<m?>"),e:w("IH"),B:w("nH"),P:w("ig"),df:w("lL"),k:w("lb"),x:w("ay<~>"),U:w("N<a56>"),V:w("N<aa>"),C:w("N<rG>"),O:w("N<u>"),c:w("N<N8>"),b:w("N<alP>"),ac:w("N<eN<m?>>"),I:w("N<nH>"),u:w("N<ig>"),J:w("N<lL>"),_:w("N<lb>"),cl:w("N<ay<ai<a9<m,@>>>>"),R:w("N<mZ>"),eU:w("N<ai<+(H,H)>>"),ez:w("N<a9<m,aE>>"),gE:w("N<a9<m,m>>"),Y:w("N<a9<m,@>>"),fD:w("N<n2>"),bp:w("N<p3>"),g:w("N<r>"),ar:w("N<avn>"),v:w("N<fZ>"),gy:w("N<aaR>"),L:w("N<+(m,m)>"),G:w("N<+(H,H)>"),E:w("N<+(H,~())>"),bd:w("N<+(m,F,P)>"),bF:w("N<+count,id,name(F,m,m)>"),F:w("N<d0>"),s:w("N<m>"),cF:w("N<au>"),aS:w("N<jl>"),dT:w("N<bc7>"),p:w("N<w>"),Z:w("N<fp>"),D:w("N<lY>"),h:w("N<aBb>"),cC:w("N<bjv>"),fp:w("N<L5>"),M:w("N<Lc>"),gZ:w("N<aK_>"),gA:w("N<agH>"),e4:w("N<agO>"),dE:w("N<aM2>"),f7:w("N<P>"),n:w("N<H>"),t:w("N<F>"),dS:w("N<aC?>"),d4:w("N<m?>"),eF:w("cA<ah<af>>"),d:w("ai<nH>"),do:w("ai<ig>"),cg:w("ai<lL>"),ax:w("ai<lb>"),fO:w("ai<a9<m,@>>"),cz:w("ai<+(m,m)>"),bC:w("ai<+count,id,name(F,m,m)>"),dy:w("ai<m>"),er:w("ai<au>"),gk:w("ai<lY>"),j:w("ai<@>"),fK:w("bv<m,m>"),d2:w("bv<m,ai<a9<m,@>>>"),a:w("a9<m,@>"),f:w("a9<@,@>"),gv:w("O<m,IK>"),cM:w("O<F,m>"),w:w("hW"),g2:w("t0"),bV:w("aqK"),fL:w("cn"),K:w("aE"),dc:w("fZ"),fo:w("PN<F>"),fz:w("+(m,m)"),ei:w("+scope,text(m,m)"),bn:w("+games,limit(P,F)"),d9:w("+dx,hidden(H,ai<ig>)"),cs:w("+count,id,name(F,m,m)"),N:w("m"),fT:w("iO<ig>"),ec:w("iO<m>"),gW:w("rn<H>"),X:w("bq<H>"),bW:w("dC"),W:w("bg<m>"),b4:w("bg<F>"),cI:w("kg<m>"),av:w("X<zS>"),cc:w("X<m>"),l:w("w"),gF:w("fp"),fA:w("lY"),dO:w("GV"),bw:w("af8<m?>"),cy:w("Le"),q:w("ky"),y:w("P"),i:w("H"),z:w("@"),S:w("F"),eK:w("ai<lb>?"),m:w("as6?"),cT:w("r?"),h5:w("+(m,m)?"),eo:w("+code,qrPayload,usesRemaining(m,m,F)?"),he:w("+qrPayload,token,usesRemaining(m,m,F)?"),gG:w("+members,trees,viewOnly(F,F,P)?"),az:w("oq?"),T:w("m?"),aD:w("dC?"),o:w("lY?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.b7s=new A.bb(B.h2,B.bJ,B.h2,B.bJ)
D.afF=new A.bb(B.h2,B.i6,B.h2,B.i6)
D.b7H=new A.bb(B.jJ,B.bJ,B.bJ,B.bJ)
D.b7L=new A.ax(B.cZ,1.4,B.r,-1)
D.b7V=new A.ax(B.ab,1,B.r,-1)
D.agb=new A.aY(140,1/0,0,1/0)
D.b9h=new A.aY(0,1/0,64,1/0)
D.b9l=new A.aY(0,84,0,1/0)
D.agi=new A.aY(130,1/0,0,1/0)
D.aEU=w([B.mm,B.tn,B.c],x.O)
D.cch=new A.a8(B.ay,B.aD,B.x,D.aEU,null,null)
D.ba6=new A.o(null,null,null,null,null,D.cch,B.m)
D.dma=w([B.aV,B.bT],x.O)
D.ces=new A.a8(B.aX,B.b1,B.x,D.dma,null,null)
D.bar=new A.o(null,null,null,null,null,D.ces,B.m)
D.ZC=new A.u(1,0.0784313725490196,0.0784313725490196,0.16862745098039217,B.q)
D.fJ=new A.u(1,0.16470588235294117,0.08235294117647059,0.0392156862745098,B.q)
D.dqo=w([B.dD,D.ZC,D.fJ],x.O)
D.cbs=new A.a8(B.aX,B.b1,B.x,D.dqo,null,null)
D.bbb=new A.o(null,null,null,null,null,D.cbs,B.m)
D.fGo=new A.G(!0,B.bY,null,null,null,null,34,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.hhq=new A.C("?",null,D.fGo,null,null,null,null,null,null,null,null,null)
D.bf1=new A.cm(B.z,null,null,D.hhq,null)
D.X6=new A.G(!0,null,null,null,null,null,70,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h_h=new A.C("\ud83c\udf33",null,D.X6,null,null,null,null,null,null,null,null,null)
D.ah3=new A.cm(B.z,null,null,D.h_h,null)
D.h1Y=new A.C("\ud83c\udfc6",null,AK.LD,null,null,null,null,null,null,null,null,null)
D.bfc=new A.cm(B.z,null,null,D.h1Y,null)
D.bh2=new A.fr(null,null,null,null,null,E.kF,null,null,null,null)
D.ah4=new A.cm(B.z,null,null,D.bh2,null)
D.l0=new A.u(1,0.984313725490196,0.9529411764705882,0.8784313725490196,B.q)
D.fGX=new A.G(!0,D.l0,null,null,null,null,15,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h0X=new A.C("No books on the shelf yet.",null,D.fGX,null,null,null,null,null,null,null,null,null)
D.eDd=new A.D(B.o2,D.h0X,null)
D.bft=new A.cm(B.z,null,null,D.eDd,null)
D.fOd=new A.G(!0,D.fJ,null,null,null,null,16,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.hio=new A.C("\ud83d\ude8c  On the road\u2026",null,D.fOd,null,null,null,null,null,null,null,null,null)
D.eDN=new A.D(B.cu,D.hio,null)
D.bfW=new A.cm(B.z,null,null,D.eDN,null)
D.aZ9=new A.C("\ud83e\uddfa",null,D.X6,null,null,null,null,null,null,null,null,null)
D.bga=new A.cm(B.z,null,null,D.aZ9,null)
D.h4r=new A.C("\ud83c\udfad",null,D.X6,null,null,null,null,null,null,null,null,null)
D.bgl=new A.cm(B.z,null,null,D.h4r,null)
D.bgo=new A.cm(B.z,null,null,Af.Zo,null)
D.aho=new A.u(1,0.8980392156862745,0.39215686274509803,0.3568627450980392,B.q)
D.ahv=new A.u(1,0.08627450980392157,0.18823529411764706,0.12156862745098039,B.q)
D.biF=new A.u(1,0.058823529411764705,0.1607843137254902,0.13333333333333333,B.q)
D.biK=new A.u(1,0.16862745098039217,0.08627450980392157,0.03137254901960784,B.q)
D.biW=new A.u(1,0.16862745098039217,0.14901960784313725,0.34509803921568627,B.q)
D.biY=new A.u(1,0.7098039215686275,0.40784313725490196,0.22745098039215686,B.q)
D.bj_=new A.u(1,0.2901960784313726,0.22745098039215686,0.16470588235294117,B.q)
D.bj7=new A.u(1,0.47843137254901963,0.22745098039215686,0.09411764705882353,B.q)
D.lQ=new A.u(1,0.7058823529411765,0.3254901960784314,0.16470588235294117,B.q)
D.bjb=new A.u(0.6666666666666666,0,0,0.06274509803921569,B.q)
D.bjg=new A.u(1,0.12156862745098039,0.23921568627450981,0.16862745098039217,B.q)
D.bji=new A.u(1,0.07058823529411765,0.03137254901960784,0.01568627450980392,B.q)
D.bjj=new A.u(1,0.3568627450980392,0.4823529411764706,0.6509803921568628,B.q)
D.lR=new A.u(1,0.1803921568627451,0.6078431372549019,0.30980392156862746,B.q)
D.bjX=new A.u(1,0.12156862745098039,0.2,0.12549019607843137,B.q)
D.Ci=new A.u(1,0.47843137254901963,0.2901960784313726,0.1411764705882353,B.q)
D.bk5=new A.u(1,0.8862745098039215,0.7529411764705882,0.4392156862745098,B.q)
D.bkp=new A.u(1,1,0.9568627450980393,0.8235294117647058,B.q)
D.bks=new A.u(1,1,0.7764705882352941,0.4196078431372549,B.q)
D.bky=new A.u(1,0.16470588235294117,0.35294117647058826,0.22745098039215686,B.q)
D.bkG=new A.u(1,0.2901960784313726,0.20784313725490197,0.1568627450980392,B.q)
D.aia=new A.u(1,0.2901960784313726,0.24705882352941178,0.2901960784313726,B.q)
D.bkN=new A.u(1,0.30980392156862746,0.6392156862745098,0.8901960784313725,B.q)
D.ZQ=new A.u(1,0.5411764705882353,0.48627450980392156,0.4,B.q)
D.aid=new A.u(1,0.10196078431372549,0.0784313725490196,0.19607843137254902,B.q)
D.bkY=new A.u(1,0.12941176470588237,0.11764705882352941,0.2901960784313726,B.q)
D.ZS=new A.u(1,0.7490196078431373,0.9019607843137255,1,B.q)
D.bli=new A.u(1,0.3333333333333333,0.2196078431372549,0.1803921568627451,B.q)
D.aip=new A.u(1,0.12156862745098039,0.07450980392156863,0.043137254901960784,B.q)
D.blH=new A.u(0.13333333333333333,0.7215686274509804,0.6901960784313725,1,B.q)
D.blX=new A.u(1,0.043137254901960784,0.043137254901960784,0.12549019607843137,B.q)
D.bmm=new A.u(1,1,0.47843137254901963,0.10196078431372549,B.q)
D.bmx=new A.u(1,0.48627450980392156,0.41568627450980394,0.27450980392156865,B.q)
D.GE=new A.u(1,0.8509803921568627,0.8235294117647058,0.7529411764705882,B.q)
D.bmW=new A.u(1,0.8980392156862745,0.8627450980392157,0.7843137254901961,B.q)
D.bmZ=new A.u(1,0.10196078431372549,0.16470588235294117,0.22745098039215686,B.q)
D.bn2=new A.u(1,0.23137254901960785,0.13725490196078433,0.0784313725490196,B.q)
D.aiS=new A.u(1,0.47843137254901963,0.35294117647058826,0.1803921568627451,B.q)
D.bnk=new A.u(1,0.1411764705882353,0.10588235294117647,0.24705882352941178,B.q)
D.bnq=new A.u(1,0.5411764705882353,0.35294117647058826,0.16470588235294117,B.q)
D.bnx=new A.u(1,0.35294117647058826,0.26666666666666666,0.1411764705882353,B.q)
D.aiW=new A.u(1,0.788235294117647,0.5215686274509804,0.16862745098039217,B.q)
D.bnG=new A.u(1,0.2901960784313726,0.2627450980392157,0.3137254901960784,B.q)
D.boa=new A.u(1,0.6039215686274509,0.47843137254901963,0.33725490196078434,B.q)
D.bok=new A.u(1,0.16470588235294117,0.11372549019607843,0.10588235294117647,B.q)
D.bon=new A.u(1,0.4196078431372549,0.30980392156862746,0.2,B.q)
D.bot=new A.u(1,0.22745098039215686,0.16862745098039217,0.3607843137254902,B.q)
D.ajc=new A.u(1,0.7215686274509804,0.7372549019607844,0.8470588235294118,B.q)
D.bp7=new A.u(0.3333333333333333,1,0.9529411764705882,0.7686274509803922,B.q)
D.ajB=new A.u(1,0.5411764705882353,0.41568627450980394,0.2823529411764706,B.q)
D.bq6=new A.u(1,0.22745098039215686,0.058823529411764705,0.06274509803921569,B.q)
D.ajN=new A.u(1,0.9137254901960784,0.8470588235294118,0.7058823529411765,B.q)
D.bqw=new A.u(1,1,0.6039215686274509,0.12156862745098039,B.q)
D.GS=new A.u(1,0.2901960784313726,0.17254901960784313,0.0784313725490196,B.q)
D.bqD=new A.u(1,0.7215686274509804,0.7372549019607844,0.7843137254901961,B.q)
D.bqN=new A.u(1,0.16470588235294117,0.17254901960784313,0.41568627450980394,B.q)
D.bqP=new A.u(1,0.35294117647058826,0.12156862745098039,0.12156862745098039,B.q)
D.ajR=new A.u(1,0.22745098039215686,0.35294117647058826,0.20392156862745098,B.q)
D.br6=new A.u(1,0.08627450980392157,0.2196078431372549,0.12156862745098039,B.q)
D.br8=new A.u(1,0.09411764705882353,0.08627450980392157,0.2196078431372549,B.q)
D.brb=new A.u(1,0.9607843137254902,0.9411764705882353,0.8784313725490196,B.q)
D.ajZ=new A.u(1,0.10196078431372549,0.06274509803921569,0.09411764705882353,B.q)
D.a_B=new A.u(1,0.10196078431372549,0.058823529411764705,0.03137254901960784,B.q)
D.brA=new A.u(1,0.5411764705882353,0.41568627450980394,0.2196078431372549,B.q)
D.brX=new A.u(1,1,0.7058823529411765,0.32941176470588235,B.q)
D.bs1=new A.u(1,0.9568627450980393,1,0.6901960784313725,B.q)
D.aka=new A.u(1,1,0.5411764705882353,0.11764705882352941,B.q)
D.bs8=new A.u(1,0.4196078431372549,0.2901960784313726,0.22745098039215686,B.q)
D.a_H=new A.u(1,0.7058823529411765,0.47058823529411764,0.22745098039215686,B.q)
D.bsv=new A.u(1,0.4196078431372549,0.35294117647058826,0.22745098039215686,B.q)
D.bsw=new A.u(1,0.9098039215686274,0.9333333333333333,0.9607843137254902,B.q)
D.H0=new A.u(1,0.47843137254901963,0.24313725490196078,0.11372549019607843,B.q)
D.btj=new A.u(1,0.2901960784313726,0.22745098039215686,0.11764705882352941,B.q)
D.btW=new A.u(1,0.1843137254901961,0.36470588235294116,0.22745098039215686,B.q)
D.bu1=new A.u(1,1,0.7686274509803922,0.4196078431372549,B.q)
D.bu5=new A.u(0,0.3333333333333333,0.2196078431372549,0.1803921568627451,B.q)
D.qP=new A.u(1,1,0.9529411764705882,0.8627450980392157,B.q)
D.bug=new A.u(1,0.8980392156862745,0.25882352941176473,0.10588235294117647,B.q)
D.buk=new A.u(1,0.08235294117647059,0.11372549019607843,0.16862745098039217,B.q)
D.buq=new A.u(0.4,1,0.9450980392156862,0.7215686274509804,B.q)
D.bus=new A.u(1,0.4196078431372549,0.2901960784313726,0.16470588235294117,B.q)
D.akX=new A.u(1,0.7098039215686275,0.396078431372549,0.11372549019607843,B.q)
D.al0=new A.u(1,0.8509803921568627,0.6980392156862745,0.4196078431372549,B.q)
D.H6=new A.u(1,0.5411764705882353,0.35294117647058826,0.2,B.q)
D.a01=new A.u(0.13333333333333333,0.7215686274509804,0.6039215686274509,0.35294117647058826,B.q)
D.al9=new A.u(1,0.3568627450980392,0.22745098039215686,0.13333333333333333,B.q)
D.bvH=new A.u(1,0.23137254901960785,0.16470588235294117,0.4196078431372549,B.q)
D.bvZ=new A.u(1,1,0.6039215686274509,0.1803921568627451,B.q)
D.bwr=new A.u(1,1,0.9411764705882353,0.6274509803921569,B.q)
D.bwA=new A.u(1,0.788235294117647,0.6274509803921569,0.30980392156862746,B.q)
D.alz=new A.u(1,0.8470588235294118,0.796078431372549,0.6901960784313725,B.q)
D.a0d=new A.u(1,0.4196078431372549,0.35294117647058826,0.34509803921568627,B.q)
D.bwL=new A.u(1,0.4196078431372549,0.2901960784313726,0.2196078431372549,B.q)
D.bx1=new A.u(1,0.34509803921568627,0.3764705882352941,0.43137254901960786,B.q)
D.a0j=new A.u(1,0.22745098039215686,0.16470588235294117,0.13333333333333333,B.q)
D.bxi=new A.u(1,0.8509803921568627,0.7843137254901961,0.6274509803921569,B.q)
D.bxz=new A.u(1,0.5450980392156862,0.17254901960784313,0.23137254901960785,B.q)
D.a0n=new A.u(1,0.06666666666666667,0.058823529411764705,0.16470588235294117,B.q)
D.bxE=new A.u(1,0.8509803921568627,0.3843137254901961,0.3568627450980392,B.q)
D.alR=new A.u(1,1,0.9098039215686274,0.6901960784313725,B.q)
D.alT=new A.u(1,0.3568627450980392,0.22745098039215686,0.07058823529411765,B.q)
D.bxX=new A.u(1,0.8509803921568627,0.7607843137254902,0.611764705882353,B.q)
D.am_=new A.u(1,0.10196078431372549,0.1411764705882353,0.2,B.q)
D.byp=new A.u(1,0.9019607843137255,0.8117647058823529,0.6274509803921569,B.q)
D.byt=new A.u(1,0.5411764705882353,0.47843137254901963,0.4,B.q)
D.byA=new A.u(1,0.8509803921568627,1,0.41568627450980394,B.q)
D.byJ=new A.u(1,0.10196078431372549,0.10196078431372549,0.12156862745098039,B.q)
D.byS=new A.u(1,0.29411764705882354,0.4196078431372549,0.47843137254901963,B.q)
D.bzt=new A.u(1,0.8980392156862745,0.7529411764705882,0.47843137254901963,B.q)
D.bzZ=new A.u(1,0.9607843137254902,0.8705882352941177,0.7019607843137254,B.q)
D.fW1=new A.C("None \u2014 root ancestor",null,null,null,null,null,null,null,null,null,null,null)
D.bDu=new A.eN(null,D.fW1,B.fk,null,x.A)
D.h4i=new A.C("None",null,null,null,null,null,null,null,null,null,null,null)
D.bDw=new A.eN(null,D.h4i,B.fk,null,x.A)
D.bE3=new A.bh(38e5)
D.bEN=new A.iI(0,10,0,10)
D.bEX=new A.R(0,1,0,0)
D.bF7=new A.iI(0,4,0,4)
D.bFa=new A.R(0,4,5,0)
D.bFq=new A.R(10,10,14,10)
D.bFB=new A.iI(10,4,10,4)
D.bFK=new A.iI(10,8,10,8)
D.bFL=new A.R(10,8,8,8)
D.bGf=new A.R(12,6,12,2)
D.bGz=new A.R(14,0,14,6)
D.bGD=new A.R(14,10,6,6)
D.bGE=new A.R(14,12,14,0)
D.bGI=new A.R(14,12,14,8)
D.bGL=new A.R(14,12,8,14)
D.bGP=new A.iI(14,14,14,14)
D.bH7=new A.R(14,6,14,40)
D.bHa=new A.R(14,8,14,30)
D.bHy=new A.R(16,2,16,10)
D.bHH=new A.R(16,6,16,30)
D.bHJ=new A.R(16,6,16,8)
D.bHZ=new A.R(18,10,18,4)
D.bI0=new A.R(18,12,18,0)
D.bI7=new A.R(18,14,12,4)
D.aot=new A.R(18,16,18,8)
D.bIo=new A.R(18,20,18,22)
D.bIu=new A.R(18,30,18,30)
D.bIM=new A.R(20,10,12,20)
D.bIP=new A.R(20,11,20,11)
D.bJ0=new A.R(20,18,16,18)
D.bJ2=new A.R(20,18,20,6)
D.bJS=new A.R(24,32,24,28)
D.bJT=new A.R(24,36,24,32)
D.bJW=new A.R(26,26,24,14)
D.bK9=new A.R(2,4,2,8)
D.bKd=new A.R(30,0,30,0)
D.bKo=new A.R(38,22,22,22)
D.aoS=new A.R(40,24,24,24)
D.bKq=new A.iI(40,40,40,40)
D.bKs=new A.R(46,30,30,30)
D.bKU=new A.R(56,40,40,40)
D.bKY=new A.R(1.25,1.25,1.25,1.25)
D.bKZ=new A.R(60,0,60,0)
D.bL2=new A.R(6,14,6,16)
D.bL6=new A.R(6,4,12,0)
D.bLa=new A.R(6,6,10,2)
D.bLh=new A.iI(7,3,7,3)
D.bLO=new A.R(5,1.5,5,1.5)
D.bLZ=new A.R(6,2.5,6,2.5)
D.hcy=new A.C("Family Games",null,B.jp,null,null,null,null,null,null,null,null,null)
D.fUC=new A.C("Quizzes, stories by the fire and tests made from the people in this tree. Win Family Stars.",null,B.WY,null,null,null,null,null,null,null,null,null)
D.cNY=w([D.hcy,D.fUC],x.p)
D.bAY=new A.ft(B.ah,B.e,B.h,B.B,null,B.p,null,0,D.cNY,null)
D.bMp=new A.bu(1,B.b9,D.bAY,null)
D.hgY=new A.C("Signature",null,B.nx,null,null,null,null,null,null,null,null,null)
D.bMs=new A.bu(1,B.b9,D.hgY,null)
D.h92=new A.C("MADE BY THE ONE WHO PLANTED THE TREE",null,X.uu,null,null,null,null,null,null,null,null,null)
D.bN_=new A.bu(1,B.b9,D.h92,null)
D.he0=new A.C("Tell the AI what to fix",null,B.dv,null,null,null,null,null,null,null,null,null)
D.bNg=new A.bu(1,B.b9,D.he0,null)
D.fP_=new A.G(!0,B.c,null,null,null,null,22,B.u,null,null,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.hg2=new A.C("Worksheets",null,D.fP_,null,null,null,null,null,null,null,null,null)
D.fPb=new A.G(!0,E.ahU,null,null,null,null,13,B.cH,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.heS=new A.C("Track your project spending",null,D.fPb,null,null,null,null,null,null,null,null,null)
D.dcI=w([D.hg2,B.at,D.heS],x.p)
D.bAB=new A.ft(B.ah,B.e,B.h,B.B,null,B.p,null,0,D.dcI,null)
D.bNm=new A.bu(1,B.b9,D.bAB,null)
D.fJP=new A.G(!0,E.kF,null,null,null,null,18,B.u,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fVb=new A.C("FAMILY LIBRARY",null,D.fJP,null,null,null,null,null,null,null,null,null)
D.bNF=new A.bu(1,B.b9,D.fVb,null)
D.PJ=new C.IH("leather","","",0,"gold",25,"middle","double","leather","",!0,"classic")
D.xb=new C.II(0,"male")
D.oU=new C.II(1,"female")
D.zG=new C.II(2,"unknown")
D.vj=new C.an8(0,"owner")
D.PK=new C.an8(1,"editor")
D.l8=new C.an8(2,"viewer")
D.aqR=new A.a_(61199,"MaterialIcons",!1)
D.bT_=new A.a_(61504,"MaterialIcons",!1)
D.bT0=new A.a_(61505,"MaterialIcons",!1)
D.bT2=new A.a_(61587,"MaterialIcons",!1)
D.bT9=new A.a_(61890,"MaterialIcons",!1)
D.bU1=new A.a_(63034,"MaterialIcons",!0)
D.bUj=new A.a_(63153,"MaterialIcons",!1)
D.bUQ=new A.a_(63429,"MaterialIcons",!1)
D.asZ=new A.a_(984520,"MaterialIcons",!1)
D.bTy=new A.a_(62776,"MaterialIcons",!1)
D.bXg=new A.ae(D.bTy,26,B.b5,null,null,null)
D.bRY=new A.a_(57648,"MaterialIcons",!1)
D.bXB=new A.ae(D.bRY,14,B.c,null,null,null)
D.bXT=new A.ae(B.Ia,17,null,null,null,null)
D.bY_=new A.ae(B.Qe,null,B.bT,null,null,null)
D.bYp=new A.ae(E.a3Y,null,null,null,null,null)
D.bYs=new A.ae(B.jl,18,E.kF,null,null,null)
D.a3I=new A.a_(62044,"MaterialIcons",!1)
D.bYy=new A.ae(D.a3I,null,B.aV,null,null,null)
D.bYF=new A.ae(At.zT,18,B.c,null,null,null)
D.bZm=new A.ae(B.eg,16,null,null,null,null)
D.bZt=new A.ae(D.a3I,32,B.aV,null,null,null)
D.bZN=new A.ae(E.aqS,18,B.cZ,null,null,null)
D.c_U=new A.ae(B.Im,22,B.aC,null,null,null)
D.c07=new A.ae(B.eg,22,B.b5,null,null,null)
D.c0k=new A.ae(A2.a3N,22,B.c,null,null,null)
D.c0r=new A.ae(B.vs,52,B.c,null,null,null)
D.c0C=new A.ae(B.Im,30,B.aC,null,null,null)
D.c0Y=new A.ae(B.Ij,null,B.c,null,null,null)
D.atI=new A.ae(B.vD,22,B.c,null,null,null)
D.c16=new A.ae(B.eg,17,null,null,null,null)
D.c1u=new A.ae(B.xp,26,B.cZ,null,null,null)
D.c2g=new A.ae(B.a4c,16,null,null,null,null)
D.c32=new A.ae(B.vs,24,B.c,null,null,null)
D.c37=new A.ae(B.Qc,20,B.u2,null,null,null)
D.c3d=new A.ae(B.I8,null,B.bT,null,null,null)
D.c3m=new A.ae(B.jl,18,B.c,null,null,null)
D.c42=new A.ae(B.cC,22,B.ab,null,null,null)
D.c4W=new A.ae(B.eq,16,B.ab,null,null,null)
D.c57=new A.ae(D.a3I,20,B.aV,null,null,null)
D.au8=new A.ae(B.hn,20,null,null,null,null)
D.c5H=new A.ae(B.cC,18,D.l0,null,null,null)
D.c5Z=new A.ae(B.A2,28,B.c,null,null,null)
D.c6a=new A.ae(B.Q2,null,B.fq,null,null,null)
D.c6v=new A.ae(B.A2,24,B.c,null,null,null)
D.c6Y=new A.ae(B.vs,null,B.aV,null,null,null)
D.c6Z=new A.ae(B.jD,20,B.cZ,null,null,null)
D.c7i=new A.ae(B.Ia,16,null,null,null,null)
D.c8R=new A.ee(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,!0,B.jW,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,B.eV,!0,null,null,null,null)
D.auS=new C.a7k(10,null)
D.c9n=new C.a7k(12,null)
D.c9o=new C.a7k(14,null)
D.duI=w([B.bw,B.aV,B.fz,B.b5],x.O)
D.cay=new A.a8(B.ay,B.aD,B.x,D.duI,null,null)
D.bt5=new A.u(1,0.5411764705882353,0.35294117647058826,0.16862745098039217,B.q)
D.bzA=new A.u(1,0.23137254901960785,0.13725490196078433,0.07058823529411765,B.q)
D.d8R=w([D.bt5,D.bzA],x.O)
D.caL=new A.a8(B.aX,B.b1,B.x,D.d8R,null,null)
D.dof=w([B.fm,B.h6,B.fz],x.O)
D.caR=new A.a8(B.ay,B.aD,B.x,D.dof,null,null)
D.akL=new A.u(1,0.16470588235294117,0.09019607843137255,0.047058823529411764,B.q)
D.bjk=new A.u(1,0.08627450980392157,0.043137254901960784,0.0196078431372549,B.q)
D.dbg=w([D.akL,D.bjk],x.O)
D.cbt=new A.a8(B.aX,B.b1,B.x,D.dbg,null,null)
D.bnb=new A.u(1,0.2901960784313726,0.16470588235294117,0.08235294117647059,B.q)
D.aEa=w([D.bnb,D.akL],x.O)
D.cbN=new A.a8(B.ay,B.aD,B.x,D.aEa,null,null)
D.ajt=new A.u(1,0.6039215686274509,0.3176470588235294,0.1568627450980392,B.q)
D.bpY=new A.u(1,0.35294117647058826,0.16470588235294117,0.07058823529411765,B.q)
D.dni=w([D.ajt,D.bpY],x.O)
D.ccs=new A.a8(B.a5,B.a9,B.x,D.dni,null,null)
D.dCj=w([B.bE,B.nO],x.O)
D.ccu=new A.a8(B.aX,B.b1,B.x,D.dCj,null,null)
D.bt0=new A.u(1,0.9137254901960784,0.8509803921568627,0.7019607843137254,B.q)
D.dDh=w([D.bt0,D.l0,D.l0,I.Od],x.O)
D.dG1=w([0,0.07,0.9,1],x.n)
D.cd_=new A.a8(B.a5,B.a9,B.x,D.dDh,D.dG1,null)
D.cd8=new A.a8(B.ay,B.aD,B.x,B.U2,null,null)
D.d6m=w([B.az,D.lQ],x.O)
D.cdb=new A.a8(B.a5,B.a9,B.x,D.d6m,null,null)
D.dBQ=w([B.b5,B.aV,B.bT],x.O)
D.cee=new A.a8(B.ay,B.aD,B.x,D.dBQ,null,null)
D.ciF=w([10,20,30],x.t)
D.csH=w([-1,-0.4,0.3,1],x.n)
D.cAe=w([B.bw,B.b5,B.fm],x.O)
D.cAm=w([B.bl,B.az,B.kE],x.O)
D.cAo=w(["\xd7","\xf7","100","0","\u221e","%"],x.s)
D.cB6=w([30,140,262,360],x.n)
D.brh=new A.u(1,0.07058823529411765,0.20784313725490197,0.1803921568627451,B.q)
D.cGI=w([D.brh,E.akk],x.O)
D.exS=new A.r(1,2)
D.frE=new A.d0(B.b7,D.exS,3)
D.aB2=w([D.frE],x.F)
D.cOe=w([B.hj,B.ch,B.fy],x.O)
D.cR3=w([B.bQ,B.bA,B.bt],x.O)
D.bOv=new C.v5("classic","Classic leather","Gold-edged brown leather",D.aEa,E.kF,E.kF,"\u2766",B.K,!0,!1,!1,!1)
D.bip=new A.u(1,0.23137254901960785,0.12156862745098039,0.054901960784313725,B.q)
D.byf=new A.u(1,0.10980392156862745,0.058823529411764705,0.027450980392156862,B.q)
D.deB=w([D.bip,D.byf],x.O)
D.akn=new A.u(1,0.9490196078431372,0.8235294117647058,0.47843137254901963,B.q)
D.bOq=new C.v5("ornate","Ornate gold","Double gold border and flourishes",D.deB,D.akn,D.akn,"\u2726",B.K,!0,!0,!0,!1)
D.bmI=new A.u(1,0.9647058823529412,0.9137254901960784,0.7843137254901961,B.q)
D.btQ=new A.u(1,0.9019607843137255,0.8274509803921568,0.6392156862745098,B.q)
D.d52=w([D.bmI,D.btQ],x.O)
D.bOp=new C.v5("parchment","Parchment","Old paper with dark ink",D.d52,D.H0,L.jh,"\u2767",B.K,!0,!1,!1,!0)
D.ahx=new A.u(1,0.984313725490196,0.9686274509803922,0.9333333333333333,B.q)
D.bwo=new A.u(1,0.9450980392156862,0.9176470588235294,0.8588235294117647,B.q)
D.dzR=w([D.ahx,D.bwo],x.O)
D.bqK=new A.u(1,0.6039215686274509,0.5607843137254902,0.47058823529411764,B.q)
D.bvB=new A.u(1,0.16862745098039217,0.16862745098039217,0.16862745098039217,B.q)
D.bOs=new C.v5("minimal","Clean paper","Plain and elegant, like a printed book",D.dzR,D.bqK,D.bvB,"",B.K,!0,!0,!1,!0)
D.bOu=new C.v5("midnight","Midnight","Deep blue with silver stars",K.aEu,B.cD,B.cm,"\u2727",B.K,!0,!0,!1,!1)
D.bOo=new C.v5("emerald","Emerald library","Green cloth, title on the left",A_.aBs,E.kF,B.h8,"\u25c6",B.b8,!0,!1,!1,!1)
D.bwU=new A.u(1,0.24705882352941178,0.0392156862745098,0.0392156862745098,B.q)
D.dxL=w([B.ey,D.bwU],x.O)
D.bs7=new A.u(1,0.9411764705882353,0.6588235294117647,0.7215686274509804,B.q)
D.bto=new A.u(1,0.9882352941176471,0.9058823529411765,0.9254901960784314,B.q)
D.bOt=new C.v5("rose","Rose vintage","Burgundy with rose-gold lettering",D.dxL,D.bs7,D.bto,"\u2740",B.K,!0,!1,!0,!1)
D.dCT=w([B.cx,F.n8],x.O)
D.bOr=new C.v5("modern","Modern","Dark, bold, left-aligned",D.dCT,B.aH,B.c,"",B.b8,!1,!0,!1,!1)
D.a6d=w([D.bOv,D.bOq,D.bOp,D.bOs,D.bOu,D.bOo,D.bOt,D.bOr],A.as("N<v5>"))
D.cU6=w(["Nairobi","Lagos","Accra","Kampala","Dar es Salaam","Kigali","Addis Ababa","Dakar"],x.s)
D.dCF=w(["I am because we are","Good morning","Big river","Come and eat"],x.s)
D.bOG=new C.lL('What does "Ubuntu" mean?',D.dCF,0,"Ubuntu means a person is a person through other people.","Listen, children. Ubuntu is an old word: I am because we are. Nobody grows alone.","culture",20)
D.d77=w(["Bibi","Babu","Dada","Kaka"],x.s)
D.bOJ=new C.lL("In Swahili, what do we call a grandmother?",D.d77,0,"Bibi is grandmother. Babu is grandfather.","Your grandmother is Bibi, and your grandfather is Babu. Say it with respect.","culture",20)
D.d6Z=w(["Babu","Mama","Baba","Dada"],x.s)
D.bOE=new C.lL("In Swahili, what do we call a grandfather?",D.d6Z,0,"Babu is grandfather.","Babu is the grandfather, the one who keeps the old stories.","culture",20)
D.d8n=w(["Dada","Kaka","Bibi","Mtoto"],x.s)
D.bOI=new C.lL("What is a sister called in Swahili?",D.d8n,0,"Dada is sister. Kaka is brother.","A sister is Dada and a brother is Kaka. Brothers and sisters carry each other.","culture",20)
D.ddZ=w(["Kaka","Dada","Babu","Mzee"],x.s)
D.bOF=new C.lL("What is a brother called in Swahili?",D.ddZ,0,"Kaka is brother.","A brother is Kaka. Look after your Kaka and your Dada.","culture",20)
D.d6Y=w(["Baba","Mama","Bibi","Kaka"],x.s)
D.bOQ=new C.lL("Which word means father in Swahili?",D.d6Y,0,"Baba is father and Mama is mother.","Baba is father and Mama is mother. They are the roots of the home.","culture",20)
D.dDT=w(["Unity is strength","Rain is coming","The market is open","The night is long"],x.s)
D.bOP=new C.lL('"Umoja ni nguvu" means...',D.dDT,0,"Together we are strong.","Umoja ni nguvu: unity is strength. One stick breaks, but a bundle of sticks does not.","culture",20)
D.dAA=w(["Little by little fills the measure","Big rivers need bridges","Cows love green grass","Fire needs wood"],x.s)
D.bOR=new C.lL('"Haba na haba hujaza kibaba" teaches us...',D.dAA,0,"Small steps add up to great things.","Haba na haba hujaza kibaba: little by little fills the measure. Patience builds a family.","culture",20)
D.dbp=w(["Everyone helps to raise the children","Villages must be big","Children build houses","Only parents teach"],x.s)
D.bOO=new C.lL('The African saying "It takes a village to raise a child" means...',D.dbp,0,"Aunts, uncles, elders and neighbours all help.","It takes a whole village to raise a child. Aunties, uncles, elders and neighbours all teach.","culture",20)
D.dEb=w(["The elders","The market","The river","The drum"],x.s)
D.bOK=new C.lL("Who is the traditional keeper of the family stories?",D.dEb,0,"Elders hold the memory of the family.","The elders are a library that walks. When an elder is gone, a library burns, so we listen while we can.","culture",20)
D.cYp=w(["To share stories and wisdom","To race each other","To hide from the sun","To count cows"],x.s)
D.bOH=new C.lL("Why do families sit round the fire at night?",D.cYp,0,"The fire is where the old teach the young.","At night we sit round the fire. The flames are warm, and the stories are warmer.","culture",20)
D.dCV=w(["Let us all pull together","A kind of fish","A long road","A rain dance"],x.s)
D.bOM=new C.lL('What does "Harambee" mean?',D.dCV,0,"Harambee: everyone pulls together.","Harambee! It means let us all pull together, like many hands on one rope.","culture",20)
D.dh6=w(["An elder","A baby","A market","A cow"],x.s)
D.bOL=new C.lL('"Mzee" is a respectful word for...',D.dh6,0,"We honour our Mzee.","Mzee is how we greet an elder with honour. We bow our heads and listen.","culture",20)
D.dxA=w(["Respect for an elder","Hunger","Sleepiness","A race"],x.s)
D.bON=new C.lL('What does "Shikamoo" show?',D.dxA,0,"Children greet elders with Shikamoo, and the elder answers Marahaba.","Shikamoo is how a child greets an elder, and the elder says Marahaba. Respect travels both ways.","culture",20)
D.aBn=w([D.bOG,D.bOJ,D.bOE,D.bOI,D.bOF,D.bOQ,D.bOP,D.bOR,D.bOO,D.bOK,D.bOH,D.bOM,D.bOL,D.bON],x.J)
D.d1S=w([90,360],x.n)
D.d4z=w([B.bT,B.bp],x.O)
D.bsO=new A.u(1,0.9372549019607843,0.9647058823529412,0.9372549019607843,B.q)
D.d5i=w([D.ahx,D.bsO],x.O)
D.d64=w([-1,-0.3,0.4,1],x.n)
D.d74=w([0,0.45,0.72,0.92,1],x.n)
D.bmE=new A.u(1,0.054901960784313725,0.10196078431372549,0.09019607843137255,B.q)
D.d7o=w([D.bmE,B.bC],x.O)
D.bkk=new A.u(1,0.4196078431372549,0.1803921568627451,0.37254901960784315,B.q)
D.am9=new A.u(1,0.8784313725490196,0.5411764705882353,0.27058823529411763,B.q)
D.d80=w([B.dD,D.bkk,D.am9],x.O)
D.d9a=w([B.bd,B.jv,B.pE],x.O)
D.bnd=new A.u(1,0.23137254901960785,0.16862745098039217,0.20392156862745098,B.q)
D.bvs=new A.u(1,0.22745098039215686,0.1568627450980392,0.1411764705882353,B.q)
D.bk0=new A.u(1,0.1411764705882353,0.09019607843137255,0.0784313725490196,B.q)
D.d9f=w([D.bnd,D.bvs,D.bk0],x.O)
D.d9C=w(["Rewrite the whole book in natural, professional Swahili","Correct the spelling in the whole book",'Change the word "tree" to the right Swahili word',"Use simple words everyone understands","Make every page a little shorter"],x.s)
D.d9M=w(["Really, Babu?","Eh! I did not know that.","Tell us more!","Wow...","Mmm, I see.","Ooh, that is a good one."],x.s)
D.hM1=new C.aeN(78,424,48,44,56)
D.hM_=new C.aeN(214,396,34,34,42)
D.hM0=new C.aeN(442,452,56,50,64)
D.aCm=w([D.hM1,D.hM_,D.hM0],A.as("N<aeN>"))
D.dam=w(["Farmer","Teacher","Nurse","Driver","Builder","Trader","Doctor","Tailor"],x.s)
D.bjd=new A.u(1,0.4196078431372549,0.19607843137254902,0.08627450980392157,B.q)
D.bp6=new A.u(1,0.2901960784313726,0.13333333333333333,0.06274509803921569,B.q)
D.dFY=w([D.ajt,D.bjd,D.bp6],x.O)
D.bOw=new C.v6("leather","Leather",D.dFY,"vintage")
D.dib=w([B.dl,B.GQ,Ao.a_6],x.O)
D.bOD=new C.v6("midnight","Midnight",D.dib,"starry")
D.d9b=w([B.es,B.ei,B.lv],x.O)
D.bOC=new C.v6("forest","Forest",D.d9b,"story")
D.dIg=w([B.et,B.ey,B.kH],x.O)
D.bOz=new C.v6("burgundy","Burgundy",D.dIg,"royal")
D.cQB=w([B.az,B.n2,B.nF],x.O)
D.bOA=new C.v6("royal","Royal",D.cQB,"royal")
D.dbX=w([B.bA,B.cx,F.n8],x.O)
D.bOx=new C.v6("charcoal","Charcoal",D.dbX,"geo")
D.dG6=w([B.ca,B.dY,B.wL],x.O)
D.bOB=new C.v6("sunset","Sunset",D.dG6,"sunset")
D.dGW=w([B.jv,B.yY,B.a_a],x.O)
D.bOy=new C.v6("ocean","Ocean",D.dGW,"band")
D.Aw=w([D.bOw,D.bOD,D.bOC,D.bOz,D.bOA,D.bOx,D.bOB,D.bOy],A.as("N<v6>"))
D.dcv=w(["classic","ornate","parchment","minimal","midnight","emerald","rose","modern"],x.s)
D.ddd=w([B.an,B.aM,B.a_],x.O)
D.deH=w([B.ey,B.ei,B.dl,B.iY,B.z_,B.cZ,B.kc,B.cU,B.de],x.O)
D.deI=w(["Make the cover dark blue with silver letters","Put the title at the top and make it bigger","Use a star sky and a heart picture","Add our family name under the title"],x.s)
D.frF=new A.d0(B.dJ,B.dS,8)
D.deU=w([D.frF],x.F)
D.dg7=w([B.c5,B.dY,B.k8],x.O)
D.blb=new A.u(1,0.0196078431372549,0.03137254901960784,0.12156862745098039,B.q)
D.bpp=new A.u(1,0.22745098039215686,0.16470588235294117,0.3843137254901961,B.q)
D.btL=new A.u(1,0.5411764705882353,0.2901960784313726,0.3686274509803922,B.q)
D.dgp=w([D.blb,G.akU,D.bpp,D.btL,D.am9],x.O)
D.dgG=w(["each","pcs","boxes","bags","hours","days","sq ft","gallons","lbs","ft","other"],x.s)
D.dgU=w(["Yes! \ud83c\udf89","Hongera!","We did it!","Eeh, well done!"],x.s)
D.biB=new A.u(1,0.8509803921568627,0.6431372549019608,0.2549019607843137,B.q)
D.boK=new A.u(1,0.5411764705882353,0.35294117647058826,0.11764705882352941,B.q)
D.dhq=w([D.biB,D.aiW,D.boK],x.O)
D.di6=w([B.c5,B.hI],x.O)
D.dic=w([G.nH,B.it,G.ahJ,B.d_],x.O)
D.djW=w([B.d_,G.nH,B.it,D.lR,B.d_],x.O)
D.dkB=w([B.aQ,B.yW,B.yN],x.O)
D.eVq=new A.y(-0.65,0.6)
D.f7J=new A.y(-0.2,0.95)
D.f8S=new A.y(0.25,0.95)
D.eZ_=new A.y(0.7,0.6)
D.f9s=new A.y(1,0.1)
D.dlr=w([AJ.VR,D.eVq,D.f7J,D.f8S,D.eZ_,D.f9s],x.G)
D.brB=new A.u(1,0.5411764705882353,0.35294117647058826,0.2823529411764706,B.q)
D.by7=new A.u(1,0.4196078431372549,0.25098039215686274,0.20392156862745098,B.q)
D.bmb=new A.u(1,0.24705882352941178,0.1450980392156863,0.18823529411764706,B.q)
D.dly=w([D.brB,D.by7,D.bmb],x.O)
D.dlD=w([B.bM,B.c0,B.dG,B.aQ],x.O)
D.dmb=w([B.hY,B.ca,B.uU],x.O)
D.dmz=w(["kahoot","fire","catch","plant","who","journey","lineup","school"],x.s)
D.dmL=w([B.fm,B.cZ],x.O)
D.bt9=new A.u(1,0.1411764705882353,0.2980392156862745,0.21176470588235294,B.q)
D.dnd=w([D.bt9,D.ahv],x.O)
D.dnp=w([B.cW,B.fK,B.fW],x.O)
D.dnC=w([B.aH,B.bp,B.dl],x.O)
D.doc=w([B.eE,B.dy,B.ei],x.O)
D.doy=w([B.dW,B.dl,B.GQ],x.O)
D.doC=w([B.bu,B.n_,B.de],x.O)
D.doT=w(["\ud83e\udd47","\ud83e\udd48","\ud83e\udd49"],x.s)
D.bsm=new A.u(1,0.6352941176470588,0.4745098039215686,0.24313725490196078,B.q)
D.bqs=new A.u(1,0.27450980392156865,0.20392156862745098,0.12156862745098039,B.q)
D.dpe=w([D.bsm,D.aiS,D.bqs],x.O)
D.dq6=w(["7","3","+","42","\u03c0","\u2211"],x.s)
D.drh=w([1,0,7,6,3,2],x.t)
D.a7a=w(["leather","linen","plain","stars","rays"],x.s)
D.drs=w([0.5,2,3.6],x.n)
D.ds0=w(["Pole, child. Listen again:","Do not worry. Even elders learn twice:","Eh, so close! Remember:"],x.s)
D.bWy=new A.a_(983781,"MaterialIcons",!1)
D.aDR=w([B.Qe,B.hP,B.kM,B.ie,F.at6,B.Ix,B.rf,D.bWy,K.asK,B.DL,B.ri,B.m1],A.as("N<a_>"))
D.a7e=w(["double","single","corners","none"],x.s)
D.bOl=new C.zS("Little Seed","\ud83c\udf31",0)
D.bOn=new C.zS("Young Listener","\ud83d\udc42",40)
D.bOm=new C.zS("Storyteller","\ud83e\ude98",120)
D.bOk=new C.zS("Village Pride","\ud83c\udfe1",300)
D.bOi=new C.zS("Keeper of Roots","\ud83c\udf33",700)
D.bOj=new C.zS("Elder of the Fire","\ud83d\udd25",1500)
D.aDT=w([D.bOl,D.bOn,D.bOm,D.bOk,D.bOi,D.bOj],A.as("N<zS>"))
D.dtf=w([B.d0,B.bk,B.cU],x.O)
D.dtv=w([],x.C)
D.El=w([],x.u)
D.aO2=new A.r(225,528)
D.eX7=new A.y(D.aO2,1)
D.eyD=new A.r(350,548)
D.f2E=new A.y(D.eyD,0.95)
D.aNX=new A.r(158,656)
D.f2x=new A.y(D.aNX,1.12)
D.ezq=new A.r(92,544)
D.eSz=new A.y(D.ezq,0.93)
D.eyG=new A.r(398,614)
D.eZn=new A.y(D.eyG,1.04)
D.eyu=new A.r(318,662)
D.eNO=new A.y(D.eyu,1.1)
D.a7m=w([D.eX7,D.f2E,D.f2x,D.eSz,D.eZn,D.eNO],A.as("N<+(r,H)>"))
D.dvC=w(["Vizuri sana! That is very good.","Hongera! Congratulations, my child.","Safi! You listened well.","Asante, child. The fire is proud of you."],x.s)
D.dw8=w(["\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udfff\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udffd\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udffe","\ud83d\udc69\ud83c\udfff","\ud83d\udc69\ud83c\udffd","\ud83d\udc69\ud83c\udffb\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb3","\ud83d\udc69\ud83c\udfff\u200d\ud83e\uddb3","\ud83e\uddd5","\ud83d\udc69\ud83c\udffe\u200d\ud83d\udcbc","\ud83d\udc69\ud83c\udffd\u200d\ud83d\udcbc","\ud83d\udc69\ud83c\udfff\u200d\ud83d\udcbc","\ud83d\udc69\ud83c\udffe\u200d\ud83c\udf93","\ud83d\udc69\ud83c\udffd\u200d\ud83c\udf93"],x.s)
D.dxg=w([B.d_,G.nH,B.it,D.lR,B.d_,B.it],x.O)
D.dyI=w([B.as,B.fK,B.iY],x.O)
D.dzp=w([-70,58],x.n)
D.dzr=w([-70,-30,20],x.n)
D.dAx=w([B.bu,B.n_,B.a0e],x.O)
D.dAP=w(["\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udfff\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udffd\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udffe","\ud83d\udc68\ud83c\udfff","\ud83d\udc68\ud83c\udffd","\ud83e\uddd4\u200d\u2642\ufe0f","\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb2","\ud83d\udc68\ud83c\udfff\u200d\ud83e\uddb2","\ud83d\udc68\ud83c\udffb\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udffe\u200d\ud83d\udcbc","\ud83d\udc68\ud83c\udffd\u200d\ud83d\udcbc","\ud83d\udc68\ud83c\udfff\u200d\ud83d\udcbc","\ud83d\udc68\ud83c\udffe\u200d\ud83c\udf93","\ud83d\udc68\ud83c\udffd\u200d\ud83c\udf93"],x.s)
D.dXn=new C.md("construction","Construction","Jobsite & builds",B.rh)
D.dXu=new C.md("house","Home Build","Houses & rooms",B.vu)
D.dXk=new C.md("grocery","Grocery","Store & pantry",B.a4J)
D.dXj=new C.md("calculator","Calculations","Math & estimates",B.Qm)
D.dXs=new C.md("lumber","Materials","Lumber & supplies",B.Iu)
D.dXg=new C.md("kitchen","Kitchen","Remodel & meals",Ab.QH)
D.bWv=new A.a_(983756,"MaterialIcons",!1)
D.dXl=new C.md("landscape","Landscaping","Yard & garden",D.bWv)
D.dXf=new C.md("plumbing","Plumbing","Pipes & water",B.q4)
D.dXv=new C.md("electrical","Electrical","Wiring & power",B.fM)
D.dXd=new C.md("store","Retail Shop","Daily business",B.kn)
D.dXe=new C.md("paint_remodel","Paint & Remodel","Colors & walls",Ab.QC)
D.bVR=new A.a_(983311,"MaterialIcons",!1)
D.dXr=new C.md("roofing","Roofing","Roofs & exteriors",D.bVR)
D.bWI=new A.a_(983986,"MaterialIcons",!1)
D.dXc=new C.md("warehouse","Warehouse","Storage & stock",D.bWI)
D.dXp=new C.md("vehicles","Vehicles","Fleet & transport",B.DI)
D.bTA=new A.a_(62785,"MaterialIcons",!1)
D.dXi=new C.md("farm","Farm","Crops & livestock",D.bTA)
D.dXh=new C.md("restaurant","Restaurant","Food & catering",B.vB)
D.dXo=new C.md("tools","Tools","Workshop gear",B.DE)
D.dXt=new C.md("wallet","Cash & Wallet","Quick spending",B.jD)
D.dXq=new C.md("concrete","Concrete","Foundation work",F.arP)
D.dXm=new C.md("blueprint","Blueprint","Plans & design",AG.arl)
D.a7L=w([D.dXn,D.dXu,D.dXk,D.dXj,D.dXs,D.dXg,D.dXl,D.dXf,D.dXv,D.dXd,D.dXe,D.dXr,D.dXc,D.dXp,D.dXi,D.dXh,D.dXo,D.dXt,D.dXq,D.dXm],A.as("N<md>"))
D.dBu=w([B.bv,B.bk],x.O)
D.dCk=w([B.iI,B.oC,B.e4],x.O)
D.ajH=new A.u(1,0.8862745098039215,0.10588235294117647,0.23529411764705882,B.q)
D.akG=new A.u(1,0.07450980392156863,0.40784313725490196,0.807843137254902,B.q)
D.bqO=new A.u(1,0.8470588235294118,0.6196078431372549,0,B.q)
D.bi4=new A.u(1,0.14901960784313725,0.5372549019607843,0.047058823529411764,B.q)
D.aF1=w([D.ajH,D.akG,D.bqO,D.bi4],x.O)
D.dDy=w(["Oooh!","Pole!","Eh, so close!"],x.s)
D.a7V=w(["top","middle","bottom"],x.s)
D.dF6=w([B.cw,B.bp,B.dl],x.O)
D.aFl=w(["\u25b2","\u25c6","\u25cf","\u25a0"],x.s)
D.bbF=new A.aa(0,B.H,B.b7,B.J,14)
D.aFp=w([D.bbF],x.V)
D.bpE=new A.u(1,0.22745098039215686,0.18823529411764706,0.25098039215686274,B.q)
D.dFR=w([D.aia,D.a0d,D.bpE],x.O)
D.dFS=w([B.bf,B.dy,B.ei],x.O)
D.eyd=new A.r(24,-8)
D.eyW=new A.r(48,0)
D.ey9=new A.r(24,6)
D.dHK=w([B.J,D.eyd,D.eyW,D.ey9],x.g)
D.dIb=w(["Rewrite this page in natural, professional Swahili","Correct the spelling","Rewrite this page in simpler words","Add a paragraph about the family farm","Make this page shorter"],x.s)
D.euF={top:0,middle:1,bottom:2}
D.dLw=new A.bl(D.euF,["Top","Middle","Bottom"],x.r)
D.euc={double:0,single:1,corners:2,none:3}
D.dLC=new A.bl(D.euc,["Double line","One line","Corners","None"],x.r)
D.evt={leather:0,linen:1,plain:2,stars:3,rays:4}
D.dNg=new A.bl(D.evt,["Leather","Linen","Smooth","Stars","Light rays"],x.r)
D.dNs=new A.bl(B.ii,[],A.as("bl<F,+(m,m)>"))
D.euw={gold:0,silver:1,rose:2,white:3,copper:4,black:5}
D.EB=new A.bl(D.euw,[4293444714,4293257195,4293961912,4294967295,4292905548,4279310375],A.as("bl<m,F>"))
D.dRM=new H.Oe(32,null)
D.dRN=new H.Oe(40,null)
D.dRO=new H.Oe(46,null)
D.aNv=new C.av9(null)
D.ex4=new A.r(0,40)
D.ex5=new A.r(0,412)
D.ex8=new A.r(0,900)
D.exh=new A.r(0,-34)
D.exi=new A.r(0,-46)
D.exk=new A.r(0,-74)
D.exn=new A.r(100,300)
D.exo=new A.r(10,14)
D.exr=new A.r(10,-10)
D.exw=new A.r(10,-46)
D.exx=new A.r(10,-58)
D.exy=new A.r(116,442)
D.exA=new A.r(11,-1)
D.exB=new A.r(11,-10)
D.exC=new A.r(11,-21)
D.aNS=new A.r(11,-60)
D.exJ=new A.r(14,-2)
D.exK=new A.r(150,520)
D.aa6=new A.r(150,592)
D.exN=new A.r(15,-15)
D.exO=new A.r(16,-1)
D.exR=new A.r(190,444)
D.exU=new A.r(1,5)
D.ey1=new A.r(21,-78)
D.ey2=new A.r(222,615)
D.Ks=new A.r(225,300)
D.aa8=new A.r(225,574)
D.eyc=new A.r(24,-52)
D.eye=new A.r(250,210)
D.eyp=new A.r(2,-56)
D.aO6=new A.r(300,0)
D.eyq=new A.r(300,440)
D.eyt=new A.r(318,476)
D.eyw=new A.r(324,144)
D.aab=new A.r(332,150)
D.eyy=new A.r(335,585)
D.eyz=new A.r(338,140)
D.eyA=new A.r(340,158)
D.eyC=new A.r(34,-60)
D.F2=new A.r(36,-24)
D.eyE=new A.r(372,470)
D.eyF=new A.r(390,455)
D.eyO=new A.r(42,468)
D.eyP=new A.r(431,510)
D.eyQ=new A.r(431,520)
D.eyR=new A.r(45,-92)
D.eyS=new A.r(46,20)
D.eyT=new A.r(46,-92)
D.eyU=new A.r(46,-94)
D.eyV=new A.r(47,-4)
D.eyX=new A.r(48,-4)
D.ez4=new A.r(4,-26)
D.ezc=new A.r(60,455)
D.ezl=new A.r(8,14)
D.ezp=new A.r(8,-76)
D.ezr=new A.r(95,575)
D.ezs=new A.r(98,-24)
D.ezu=new A.r(9,-2)
D.ezv=new A.r(9,-58)
D.aOf=new A.r(9,-79)
D.ezw=new A.r(9,-9)
D.eA8=new A.r(16.5,8)
D.eAa=new A.r(3.2,0)
D.eAb=new A.r(-16.5,8)
D.eAi=new A.r(16.5,2)
D.eAl=new A.r(-3.2,0)
D.eAt=new A.r(9.5,6)
D.eAw=new A.r(-10,14)
D.eAx=new A.r(-10,-12)
D.eAy=new A.r(-10,-58)
D.eAA=new A.r(-11,-10)
D.eAC=new A.r(-11,-60)
D.eAD=new A.r(-12,-14)
D.eAE=new A.r(-12,-16)
D.eAJ=new A.r(-14,-2)
D.eAM=new A.r(-15,-15)
D.eAN=new A.r(-15,-3)
D.eAP=new A.r(-16,-1)
D.eB4=new A.r(-24,-52)
D.eBd=new A.r(-2,-34)
D.eBe=new A.r(-2,-38)
D.eBg=new A.r(-30,-100)
D.aad=new A.r(-36,-24)
D.eBr=new A.r(-4,-26)
D.eBt=new A.r(-4,-6)
D.eBC=new A.r(-8,-3)
D.eBD=new A.r(-8,-48)
D.eBG=new A.r(-9,-2)
D.eBI=new A.r(-9,-58)
D.eBJ=new A.r(-9,-79)
D.eBK=new A.r(-9,-9)
D.eBM=new A.r(-9.5,6)
D.eBZ=new A.r(-16.5,2)
D.h1E=new A.C("Write a new book",null,B.hs,null,B.K,null,null,null,null,null,null,null)
D.eCy=new A.D(B.l6,D.h1E,null)
D.hgw=new A.C("Tap to go on",null,B.wc,null,null,null,null,null,null,null,null,null)
D.eCU=new A.D(B.kL,D.hgw,null)
D.atg=new A.ae(B.id,18,B.c,null,null,null)
D.fVy=new A.C("Add",null,B.kT,null,null,null,null,null,null,null,null,null)
D.dlT=w([D.atg,B.pn,D.fVy],x.p)
D.foJ=new A.c1(B.aK,B.e,B.O,B.l,null,B.p,null,0,D.dlT,null)
D.eCX=new A.D(B.o_,D.foJ,null)
D.eCZ=new A.D(E.anh,Af.Zo,null)
D.fOV=new A.G(!0,B.c,null,null,null,null,13.5,B.D,null,0.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fYP=new A.C("New Project",null,D.fOV,null,null,null,null,null,null,null,null,null)
D.dqx=w([D.atg,B.aa,D.fYP],x.p)
D.foM=new A.c1(B.aK,B.e,B.O,B.l,null,B.p,null,0,D.dqx,null)
D.eDc=new A.D(B.hA,D.foM,null)
D.h0m=new A.C("Choose your header",null,A7.ur,null,null,null,null,null,null,null,null,null)
D.eDx=new A.D(B.ic,D.h0m,null)
D.bhi=new A.fr(2.2,null,null,null,null,B.cZ,null,null,null,null)
D.fux=new A.a5(22,22,D.bhi,null)
D.bfo=new A.cm(B.z,null,null,D.fux,null)
D.eDC=new A.D(B.a1z,D.bfo,null)
D.bH_=new A.R(14,2,14,6)
D.heB=new A.C("The top of your book. Tap a design to see it.",null,Y.us,null,null,null,null,null,null,null,null,null)
D.eDD=new A.D(D.bH_,D.heB,null)
D.h_w=new A.C("\ud83c\udfc6 A new record!",null,B.hh,null,null,null,null,null,null,null,null,null)
D.eDF=new A.D(B.kL,D.h_w,null)
D.eFd=new A.jj(1,0.9098039215686274,0.9607843137254902,0.9137254901960784)
D.eFg=new A.jj(1,0.8784313725490196,0.8784313725490196,0.8784313725490196)
D.aOS=new A.jj(1,0.9607843137254902,0.48627450980392156,0)
D.KA=new A.jj(1,0.8274509803921568,0.1843137254901961,0.1843137254901961)
D.B6=new A.jj(1,0.1803921568627451,0.49019607843137253,0.19607843137254902)
D.eFm=new A.jj(1,0.12941176470588237,0.12941176470588237,0.12941176470588237)
D.hOd=new C.bld(null)
D.bBK=new A.mT(D.hOd,null,B.aA,null,null)
D.aSv=new A.cP(0,0,0,0,null,null,D.bBK,null)
D.fVA=new A.C("\ud83c\udfc5",null,B.acx,null,null,null,null,null,null,null,null,null)
D.eJM=new A.cP(null,0,-34,null,null,null,D.fVA,null)
D.eSd=new A.y("E","Sit by the fire again")
D.eXZ=new A.y("C","Good Learner")
D.f0z=new A.y("D","Still Growing")
D.f5m=new A.y(-42,42)
D.f6M=new A.y("B","Faithful Listener")
D.f8U=new A.y("A","Keeper of the Family")
D.fc7=new A.b0(-17,0.7,0)
D.fcI=new A.b0(-8,0.95,1.3)
D.fdQ=new A.b0(18,0.65,5.2)
D.fdS=new A.b0(0,1.15,2.6)
D.fec=new A.b0(9,0.9,3.9)
D.fgb=new A.b7([0,0,1,1])
D.aU1=new A.a4(0,0,520,160)
D.flK=new A.a4(10,612,440,618)
D.flL=new A.a4(10,612,440,628)
D.flO=new A.a4(14,-64,34,-12)
D.flR=new A.a4(300,336,350,348)
D.ab7=new A.a4(30,96,420,346)
D.flS=new A.a4(30,-9,46,1)
D.flT=new A.a4(4,2,11,14)
D.flV=new A.a4(-8,-12.5,8,-7)
D.flW=new A.a4(-16.5,-21,16.5,1)
D.flX=new A.a4(60,342,88,348)
D.VS=new A.a4(66,-66,94,-36)
D.flY=new A.a4(6,8,10,14)
D.fm0=new A.a4(95,343,115,348)
D.fm1=new A.a4(-6.5,-74,6.5,-58)
D.fm7=new A.a4(-100,-74,100,-12)
D.fm8=new A.a4(-10,8,-6,14)
D.fm9=new A.a4(-11,2,-4,14)
D.fma=new A.a4(-11,-70,11,-56)
D.fmh=new A.a4(-13,-24,13,-4)
D.fmo=new A.a4(-15,-21,15,0)
D.fmr=new A.a4(-16,-21,16,1)
D.fms=new A.a4(-16,-21,16,2)
D.fmv=new A.a4(-16,-26,16,-6)
D.fmD=new A.a4(-230,-26,230,26)
D.fn1=new A.a4(-38,-26,12,-6)
D.fn5=new A.a4(-3,-70,3,-63)
D.fn6=new A.a4(-44,-22,44,0)
D.fn8=new A.a4(-46,-9,-30,1)
D.aU5=new A.a4(-80,-190,80,20)
D.fnf=new A.a4(-8,-26,40,-6)
D.fng=new A.a4(-98,-80,92,-75)
D.fnh=new A.a4(-9,-15,9,-9)
D.he7=new A.C("Let the AI write it from your tree",null,B.iU,null,B.K,null,null,null,null,null,null,null)
D.bPq=new A.d2(1,B.ci,D.he7,null)
D.di5=w([E.a5d,B.aa,D.bPq],x.p)
D.fol=new A.c1(B.aK,B.e,B.O,B.l,null,B.p,null,0,D.di5,null)
D.fVc=new A.C("Save member",null,B.cf,null,null,null,null,null,null,null,null,null)
D.dz8=w([D.au8,B.aa,D.fVc],x.p)
D.fox=new A.c1(B.aK,B.ba,B.h,B.l,null,B.p,null,0,D.dz8,null)
D.c0d=new A.ae(B.iv,14,B.b5,null,null,null)
D.fIl=new A.G(!0,B.b5,null,null,null,null,12,B.D,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fZf=new A.C("Cashier",null,D.fIl,null,null,null,null,null,null,null,null,null)
D.dr6=w([D.c0d,B.bb,D.fZf],x.p)
D.foB=new A.c1(B.aK,B.e,B.O,B.l,null,B.p,null,0,D.dr6,null)
D.fVd=new A.C("Transfer & settings",null,B.dv,null,null,null,null,null,null,null,null,null)
D.bN6=new A.bu(1,B.b9,D.fVd,null)
D.d8w=w([D.atI,B.ar,D.bN6],x.p)
D.foC=new A.c1(B.aK,B.e,B.h,B.l,null,B.p,null,0,D.d8w,null)
D.ftc=new A.av(16,40)
D.fth=new A.av(22,64)
D.fto=new A.av(280,88)
D.fuc=new A.a5(30,null,null,null)
D.fUi=new A.C("The teacher is writing\u2026",null,B.Bs,null,null,null,null,null,null,null,null,null)
D.bgu=new A.cm(B.z,null,null,D.fUi,null)
D.hHX=new A.bg("w",x.W)
D.fuB=new A.a5(null,56,D.bgu,D.hHX)
D.fvo=new A.hY(5,8,8,1,null)
D.fvw=new A.hY(2,12,12,1.05,null)
D.fYV=new A.C("Please enter a family tree name.",null,null,null,null,null,null,null,null,null,null,null)
D.fwg=new A.b2(D.fYV,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.fZa=new A.C("Your shelf is full: six books is the most. Remove one to write another.",null,null,null,null,null,null,null,null,null,null,null)
D.aWp=new A.b2(D.fZa,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.h6G=new A.C("Could not save project on this device. Please try again.",null,null,null,null,null,null,null,null,null,null,null)
D.fwK=new A.b2(D.h6G,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.hhz=new A.C("All projects cleared",null,null,null,null,null,null,null,null,null,null,null)
D.fwP=new A.b2(D.hhz,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.h0k=new A.C("Syncing family trees with the database\u2026",null,null,null,null,null,null,null,null,null,null,null)
D.fwW=new A.b2(D.h0k,null,null,null,null,null,null,null,null,null,null,null,null,B.fY,!1,null,null,null,B.t,null)
D.heO=new A.C("Your new book is on the shelf.",null,null,null,null,null,null,null,null,null,null,null)
D.aWu=new A.b2(D.heO,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.h0i=new A.C("Give the game a name and write at least 2 complete questions (a question, two or more answers, and the right one chosen).",null,null,null,null,null,null,null,null,null,null,null)
D.fxl=new A.b2(D.h0i,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.fVR=new A.C("Choose male or female.",null,null,null,null,null,null,null,null,null,null,null)
D.fxn=new A.b2(D.fVR,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.h46=new A.C("You can make two games at most. Delete one to make another.",null,null,null,null,null,null,null,null,null,null,null)
D.fxt=new A.b2(D.h46,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.hil=new A.C("Saved to QR Code Generator \u2192 Saved (NGMY Family Tree).",null,null,null,null,null,null,null,null,null,null,null)
D.fy9=new A.b2(D.hil,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.hd1=new A.C("Project saved, but the photo could not be stored. Try choosing the photo again.",null,null,null,null,null,null,null,null,null,null,null)
D.fyz=new A.b2(D.hd1,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.hhD=new A.C("Choose whether this person is male or female.",null,null,null,null,null,null,null,null,null,null,null)
D.fyC=new A.b2(D.hhD,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.h8j=new A.C("Could not save imported project to this device. Please try again.",null,null,null,null,null,null,null,null,null,null,null)
D.fyE=new A.b2(D.h8j,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.h2g=new A.C("Please enter a project name.",null,null,null,null,null,null,null,null,null,null,null)
D.fyF=new A.b2(D.h2g,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.h2h=new A.C("Could not read that project QR.",null,null,null,null,null,null,null,null,null,null,null)
D.fzG=new A.b2(D.h2h,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.fYX=new A.C("Enter a name and an amount greater than 0.",null,null,null,null,null,null,null,null,null,null,null)
D.fzY=new A.b2(D.fYX,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.h_Y=new A.C("Could not open that file.",null,null,null,null,null,null,null,null,null,null,null)
D.fAh=new A.b2(D.h_Y,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.h7N=new A.C("Enter a name.",null,null,null,null,null,null,null,null,null,null,null)
D.fAy=new A.b2(D.h7N,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.h36=new A.C("Enter an amount greater than zero.",null,null,null,null,null,null,null,null,null,null,null)
D.fAz=new A.b2(D.h36,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.fNA=new A.G(!0,B.bB,null,null,null,null,20,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fC7=new A.eC("\u2665",null,null,B.cY,null,null,null,null,null,null,D.fNA)
D.fKG=new A.G(!0,B.aS,null,null,null,null,28,B.N,B.cR,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fCn=new A.eC("Today: how well do you know the family?",null,null,B.cY,null,null,null,null,null,null,D.fKG)
D.fCE=new A.G(!0,B.qC,null,null,null,null,11.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fDR=new A.G(!0,D.l0,null,null,null,null,13,B.D,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fEe=new A.G(!0,D.l0,null,null,null,null,12,B.D,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fEi=new A.G(!0,B.d_,null,null,null,null,17,B.u,null,0.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fEr=new A.G(!0,D.fJ,null,null,null,null,15,B.N,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fEC=new A.G(!0,D.fJ,null,null,null,null,13,B.D,null,null,null,null,1.15,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fEX=new A.ti(!0,B.ue,null,null,null,null,B.dL,9.5,null,null,null,null,null,null,null,null,null,null,null,null)
D.fFc=new A.G(!0,B.d_,null,null,null,null,10.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fFg=new A.G(!0,D.l0,null,null,null,null,18,B.D,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fFh=new A.G(!0,B.d_,null,null,null,null,12,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fFm=new A.G(!0,B.c,null,null,null,null,15.5,B.u,null,null,null,null,1.15,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fFp=new A.G(!0,B.d_,null,null,null,null,15,B.D,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fFW=new A.G(!0,B.b5,null,null,null,null,26,B.u,null,-0.4,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fFX=new A.G(!0,B.ab,null,null,null,null,11.5,null,null,null,null,null,1.25,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fFZ=new A.G(!0,B.aS,null,null,null,null,15.5,B.D,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fGq=new A.G(!0,B.c,null,null,null,null,24,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aXJ=new A.G(!0,B.aR,null,null,null,null,null,B.D,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aXK=new A.G(!0,D.lQ,null,null,null,null,12.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fGQ=new A.G(!0,B.d_,null,null,null,null,20,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.acC=new A.ti(!0,B.Vo,null,null,null,null,B.dL,9.5,null,null,null,null,null,null,null,null,null,null,null,null)
D.WL=new A.G(!0,B.d_,null,null,null,null,null,B.D,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fH_=new A.G(!0,B.a_,null,null,null,null,12.5,B.D,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fH4=new A.G(!0,D.fJ,null,null,null,null,11,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fHu=new A.G(!0,B.c,null,null,null,null,20,B.u,null,0.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fIF=new A.G(!0,D.fJ,null,null,null,null,13,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aXT=new A.G(!0,D.fJ,null,null,null,null,14.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fIZ=new A.G(!0,B.ab,null,null,null,null,12,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fJa=new A.G(!0,D.fJ,null,null,null,null,null,B.N,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fJc=new A.G(!0,null,null,null,null,null,8,B.N,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fJi=new A.G(!0,L.jh,null,null,null,null,16.5,null,null,null,null,null,1.65,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aXX=new A.G(!0,D.fJ,null,null,null,null,14.5,B.N,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fKg=new A.G(!0,D.fJ,null,null,null,null,13,B.u,null,null,null,null,1.05,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fKz=new A.G(!0,D.fJ,null,null,null,null,22,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fKB=new A.G(!0,B.a_,null,null,null,null,13,B.a8,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fKD=new A.G(!0,B.d_,null,null,null,null,17,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fL1=new A.G(!0,B.c,null,null,null,null,20,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,Ae.Js,null,null,null)
D.aYa=new A.G(!0,D.fJ,null,null,null,null,17,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fLs=new A.G(!0,B.a_,null,null,null,null,17,B.D,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fLO=new A.G(!0,B.fq,null,null,null,null,13,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fMb=new A.G(!0,B.bT,null,null,null,null,8,B.D,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fMg=new A.G(!0,B.bE,null,null,null,null,11,B.D,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fMs=new A.G(!0,B.c,null,null,null,null,13.5,B.D,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fMv=new A.G(!0,D.fJ,null,null,null,null,17,B.u,null,null,null,null,1.25,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fMD=new A.G(!0,D.H0,null,null,null,null,40,B.u,null,null,null,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fMP=new A.G(!0,B.b5,null,null,null,null,13,B.N,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fNd=new A.G(!0,B.c,null,null,null,null,15.5,B.u,null,null,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fNk=new A.G(!0,B.ab,null,null,null,null,12.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,I.Ec,null,null,null)
D.fNM=new A.G(!0,B.d_,null,null,null,null,130,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fNU=new A.G(!0,B.cZ,null,null,null,null,13,B.D,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fO6=new A.G(!0,D.lR,null,null,null,null,13,B.N,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aYy=new A.G(!0,D.fJ,null,null,null,null,null,B.D,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.LL=new A.G(!0,B.d_,null,null,null,null,null,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aYA=new A.G(!0,B.d_,null,null,null,null,null,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,I.Ec,null,null,null)
D.fOr=new A.G(!0,B.bT,null,null,null,null,11,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fOv=new A.G(!0,G.nH,null,null,null,null,84,B.u,null,null,null,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fOT=new A.G(!0,B.b5,null,null,null,null,13,B.D,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fPa=new A.G(!0,D.fJ,null,null,null,null,15,B.D,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fPz=new A.G(!0,B.c,null,null,null,null,null,B.D,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fPY=new A.G(!0,D.fJ,null,null,null,null,22,B.u,null,null,null,null,1.25,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fQu=new A.G(!0,D.fJ,null,null,null,null,18,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fQz=new A.G(!0,B.an,null,null,null,null,11.5,B.a8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fQJ=new A.G(!0,B.c,null,null,null,null,28,B.u,null,null,null,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ad8=new A.G(!0,B.an,null,null,null,null,12,B.a8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.adb=new A.G(!0,D.lQ,null,null,null,null,null,B.D,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fSv=new A.G(!0,B.c,null,null,null,null,8.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fSQ=new A.G(!0,B.aS,null,null,null,null,27,B.N,B.cR,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fSX=new A.G(!0,L.jh,null,null,null,null,23,B.u,null,null,null,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fT4=new A.G(!0,L.jh,null,null,null,null,21,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fTy=new A.C("Time:",null,B.hF,null,null,null,null,null,null,null,null,null)
D.fTU=new A.C("\ud83c\udfae",null,K.acZ,null,null,null,null,null,null,null,null,null)
D.fTV=new A.C("Themes",null,B.pp,null,null,null,null,null,null,null,null,null)
D.fUq=new A.C("\ud83c\udfb2",null,B.y9,null,null,null,null,null,null,null,null,null)
D.fUu=new A.C("Delete this game?",null,B.iU,null,null,null,null,null,null,null,null,null)
D.fUB=new A.C("Add Item",null,B.cf,null,null,null,null,null,null,null,null,null)
D.fIT=new A.G(!0,B.a_,null,null,null,null,22,B.D,null,-0.3,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fV1=new A.C("Debt receipt",null,D.fIT,null,B.K,null,null,null,null,null,null,null)
D.aYO=new A.G(!0,B.an,null,null,null,null,11,B.a8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fVk=new A.C("Person who owes",null,D.aYO,null,null,null,null,null,null,null,null,null)
D.fWk=new A.C("Notes",null,B.acO,null,null,null,null,null,null,null,null,null)
D.fWO=new A.C("New Tree",null,null,null,null,null,null,null,null,null,null,null)
D.fHN=new A.G(!0,B.c,null,null,null,null,11,B.D,null,0.25,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fWQ=new A.C("Share",null,D.fHN,null,null,null,null,null,null,null,null,null)
D.fXR=new A.C("Move your family trees",null,I.ad5,null,null,null,null,null,null,null,null,null)
D.fYw=new A.C("Save invites",null,null,null,null,null,null,null,null,null,null,null)
D.fZ9=new A.C("The cover design",null,null,null,null,null,null,null,null,null,null,null)
D.fZx=new A.C("SAVE",null,D.LL,null,null,null,null,null,null,null,null,null)
D.h_a=new A.C("The round button is the right answer.",null,Y.Bw,null,null,null,null,null,null,null,null,null)
D.h_v=new A.C("Remove this book?",null,B.hh,null,null,null,null,null,null,null,null,null)
D.fOQ=new A.G(!0,B.d_,null,null,null,null,17,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,I.Ec,null,null,null)
D.h02=new A.C("Fireside Stories",null,D.fOQ,null,null,null,null,null,null,null,null,null)
D.aZi=new A.C("Download",null,B.cf,null,null,null,null,null,null,null,null,null)
D.h0J=new A.C("What should the AI do?",null,B.dv,null,null,null,null,null,null,null,null,null)
D.fHo=new A.G(!0,D.lQ,null,null,null,null,13,B.u,null,4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h0Y=new A.C("REPORT CARD",null,D.fHo,null,null,null,null,null,null,null,null,null)
D.h1L=new A.C("Calabash Catch",null,B.X7,null,null,null,null,null,null,null,null,null)
D.h2c=new A.C("Take photo",null,null,null,null,null,null,null,null,null,null,null)
D.h2E=new A.C("\ud83c\udfe1",null,B.Fy,null,null,null,null,null,null,null,null,null)
D.h3l=new A.C("Ribbon bookmark",null,B.jN,null,null,null,null,null,null,null,null,null)
D.fQt=new A.G(!0,B.b5,null,null,null,null,15,B.u,null,1.6,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h3Q=new A.C("NGMY.ORG",null,D.fQt,null,B.K,null,null,null,null,null,null,null)
D.h58=new A.C("Scan family tree QR",null,B.cL,null,null,null,null,null,null,null,null,null)
D.fMw=new A.G(!0,B.c,null,null,null,null,13,B.a8,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h5W=new A.C("Hold steady \u2014 worksheet QR scans instantly when in frame.",null,D.fMw,null,B.K,null,null,null,null,null,null,null)
D.h79=new A.C("Delete",null,B.WF,null,null,null,null,null,null,null,null,null)
D.h7a=new A.C("Scan project QR",null,null,null,null,null,null,null,null,null,null,null)
D.h7i=new A.C("Thumbnail",null,B.pp,null,null,null,null,null,null,null,null,null)
D.h7S=new A.C("Save the cover",null,B.cL,null,null,null,null,null,null,null,null,null)
D.h7X=new A.C("A question appears, and gourds with the answers fall from the baobab. Slide the basket and catch the RIGHT one. Three lives.",null,B.BA,null,B.K,null,null,null,null,null,null,null)
D.h8k=new A.C("Your photos",null,B.pp,null,null,null,null,null,null,null,null,null)
D.h8B=new A.C("Create Project",null,B.cf,null,null,null,null,null,null,null,null,null)
D.h8Y=new A.C("\u2b50 stars",null,AO.Fz,null,null,null,null,null,null,null,null,null)
D.h9b=new A.C("Design your cover",null,A7.ur,null,null,null,null,null,null,null,null,null)
D.h9h=new A.C("Gallery",null,null,null,null,null,null,null,null,null,null,null)
D.h9k=new A.C("PICTURE",null,N.wf,null,null,null,null,null,null,null,null,null)
D.h9m=new A.C("\ud83c\udfaf",null,D.X6,null,null,null,null,null,null,null,null,null)
D.h9J=new A.C("Paid",null,B.cf,null,null,null,null,null,null,null,null,null)
D.h9L=new A.C("You can undo it right after.",null,Y.Bw,null,null,null,null,null,null,null,null,null)
D.haj=new A.C("Print",null,B.wd,null,null,null,null,null,null,null,null,null)
D.haJ=new A.C("Amount owed",null,D.aYO,null,null,null,null,null,null,null,null,null)
D.haZ=new A.C("Got it",null,B.cf,null,null,null,null,null,null,null,null,null)
D.hbB=new A.C("The whole book",null,null,null,null,null,null,null,null,null,null,null)
D.hbE=new A.C("Add to budget",null,B.cf,null,null,null,null,null,null,null,null,null)
D.hc3=new A.C("Debtor signature",null,B.acO,null,null,null,null,null,null,null,null,null)
D.hce=new A.C("Change icon",null,B.acN,null,null,null,null,null,null,null,null,null)
D.hd2=new A.C("MADE BY THE SYSTEM, FROM YOUR TREE",null,X.uu,null,null,null,null,null,null,null,null,null)
D.hdu=new A.C("Family tree QR",null,B.cL,null,null,null,null,null,null,null,null,null)
D.hdA=new A.C("Write a Kahoot-style game for your family. Everyone who opens this tree can play it. You can make 2 games at most.",null,B.X5,null,null,null,null,null,null,null,null,null)
D.hdY=new A.C("Download",null,B.wd,null,null,null,null,null,null,null,null,null)
D.hdZ=new A.C("The person who planted this tree has not made a game yet.",null,A1.By,null,null,null,null,null,null,null,null,null)
D.he2=new A.C("Change",null,B.pp,null,null,null,null,null,null,null,null,null)
D.heU=new A.C("Clear all",null,B.cf,null,null,null,null,null,null,null,null,null)
D.heX=new A.C("WHAT SHOULD IT CHANGE?",null,N.wf,null,null,null,null,null,null,null,null,null)
D.hfv=new A.C("COLOUR",null,N.wf,null,null,null,null,null,null,null,null,null)
D.hfK=new A.C("Do it",null,B.cL,null,null,null,null,null,null,null,null,null)
D.hfO=new A.C("Create Tree",null,B.cf,null,null,null,null,null,null,null,null,null)
D.hfY=new A.C("Give me another clue",null,D.LL,null,null,null,null,null,null,null,null,null)
D.hgS=new A.C("Create Family Tree",null,B.fi,null,null,null,null,null,null,null,null,null)
D.hh1=new A.C("THE TEACHER EXPLAINS THESE",null,X.uu,null,null,null,null,null,null,null,null,null)
D.fCD=new A.G(!0,E.kF,null,null,null,null,null,B.D,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.hh7=new A.C("Write the first page myself",null,D.fCD,null,null,null,null,null,null,null,null,null)
D.hhG=new A.C("Use this header",null,B.cL,null,null,null,null,null,null,null,null,null)
D.hhN=new A.C("Create Project",null,E.aYu,null,null,null,null,null,null,null,null,null)
D.hJr=new C.adq(1,"header")
D.aed=new C.adq(2,"projects")
D.hJs=new C.adq(3,"cashier")
D.aee=new C.adq(4,"familyTree")
D.hZ7=new C.cIX(0,"start")
D.hZ8=new C.cIY(0,"start")
D.hJF=new C.a_k(null)
D.hKG=new C.a_Q(null)
D.dNp=new A.bl(B.ii,[],A.as("bl<m,GV>"))
D.dtV=w([],x.dE)
D.dtW=w([],x.M)
D.hLk=new C.bio(D.dNp,D.dtV,D.dtW,0,0,null,null)
D.b2O=new C.a0G(0,"intro")
D.b2P=new C.a0G(1,"countdown")
D.aer=new C.a0G(2,"ask")
D.Y2=new C.a0G(3,"reveal")
D.b2Q=new C.a0G(4,"end")
D.hOf=new C.tq(F.H9,D.lR,B.d_,F.mj,5,!1,!1,!1,0,null)
D.hOh=new C.tq(F.H9,B.et,B.d_,B.bO,2,!0,!0,!1,2,B.d_)
D.hOj=new C.tq(B.qR,B.cZ,B.d_,F.mj,2,!0,!1,!1,2,B.as)
D.hOk=new C.tq(F.H9,B.dW,B.d_,F.mj,5,!1,!1,!1,1,null)
D.hOn=new C.tq(F.a0u,D.akG,B.d_,F.mj,4,!0,!1,!0,0,null)
D.b2T=new C.tq(F.a0u,B.dY,B.d_,F.mj,3,!0,!1,!0,2,null)
D.b2U=new C.tq(F.tp,D.lR,B.c,F.mj,0,!1,!1,!0,0,null)
D.b2V=new C.tq(B.qR,B.az,B.d_,B.bO,2,!0,!0,!1,2,B.dY)
D.b2W=new C.tq(B.qR,G.nH,B.it,F.mj,5,!1,!1,!0,3,null)
D.hOr=new C.tq(B.qR,B.dY,B.d_,F.mj,0,!0,!1,!1,0,B.az)
D.b2X=new C.tq(F.H9,B.et,B.d_,B.bO,1,!1,!0,!1,1,null)
D.b2Y=new C.tq(F.GG,B.as,B.az,F.mj,4,!0,!1,!0,2,null)
D.hOt=new C.tq(F.tp,B.as,B.et,F.mj,3,!0,!1,!1,0,null)
D.hOv=new C.tq(B.qR,B.dW,B.d_,B.bO,1,!1,!0,!1,1,null)
D.hOw=new C.tq(F.GG,D.ajH,B.c,F.mj,5,!1,!1,!0,0,null)
D.hPa=new C.a1e(null)
D.hZg=new C.agQ(0,"still")
D.Yp=new C.agQ(1,"walk")
D.b3H=new C.agQ(2,"pound")
D.b3I=new C.agQ(3,"drum")
D.hUL=new C.a2v(0,"greet")
D.b3J=new C.a2v(1,"teach")
D.aeL=new C.a2v(2,"ask")
D.hUM=new C.a2v(3,"feedback")
D.b3K=new C.a2v(4,"end")
D.Yw=new C.a2O(0,"intro")
D.Yx=new C.a2O(1,"asking")
D.BQ=new C.a2O(2,"reacting")
D.aeW=new C.a2O(3,"driving")
D.aeX=new C.a2O(4,"arrived")
D.af4=new C.aMQ(0,"projects")
D.b49=new C.aMQ(1,"cashier")
D.hWR=new C.aMQ(2,"familyTree")})()};
(a=>{a["5OGBBFVkJ1nVfuXamUSfc/iAMRs="]=a.current})($__dart_deferred_initializers__);