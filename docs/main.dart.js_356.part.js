((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,Aa,N,P,A0,S,Ab,K,H,E,T,Ac,Q,Ad,U,Ae,Af,A1,Ag,Ah,R,M,A2,A3,Ai,A4,A5,A6,Aj,Ak,A7,Al,Am,A8,An,G,Ao,Ap,Aq,A9,Ar,V,O,As,At,W,Au,X,Y,F,Av,L,I,Z,C={
bEB(b2,b3,b4){var w=0,v=A.j(x.cz),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1
var $async$bEB=A.e(function(b5,b6){if(b5===1)return A.f(b6,v)
for(;;)switch(w){case 0:w=3
return A.b(A.vD(null,""),$async$bEB)
case 3:b1=b6
if(B.a.i(b1).length===0)throw A.W(y.z)
t=A.nh(b1)
s=A.bZ(b3.length,null,!1,x.h5)
r=x.f,q=x.N,p=x.z,o=x.j,n=x.gE,m="Translate these book pages into "+b4+". Translate the MEANING, not the words: write what a native speaker would naturally say, never a literal copy of the other language (many phrases, like \"family tree\", have no word-for-word twin and would not be understood). Keep the warm tone, every person's name and every place name exactly as written, and keep the paragraph breaks (a blank line between paragraphs). Do not add or remove any fact. If the source is flowery or exaggerated, say it plainly and warmly. Write people's names with normal capitals (Ikungu Ele), not in ALL CAPITALS. Write natural, correct "+b4+".",l=null,k=0
case 4:if(!(j=b3.length,k<j)){w=6
break}i=k+3
h=B.d.ds(b3,k,Math.min(i,j))
j=h.length
g=b3.length
b2.$2("Translating pages "+(k+1)+" to "+(k+j)+" of "+g+"\u2026",k/g)
j=A.cT(b4,"Swahili",0)?y.q:""
g=h.length
f=A.a([],n)
for(e=h.length,d=0;d<h.length;h.length===e||(0,A.L)(h),++d){a0=h[d]
f.push(A.H(["title",a0.a,"body",a0.b],q,q))}a1=m+j+"\nReply with JSON only, with exactly "+g+' pages in the same order: {"pages":[{"title":"...","body":"..."}]}\nPages:\n'+B.X.aq(f,null)+"\n"
a2=null
a3=0
case 7:if(!(a3<2&&a2==null)){w=8
break}w=10
return A.b(A.r8(t,a1,B.hS,"book",E.Ga),$async$bEB)
case 10:a4=b6
l=a4.a
a5=a4.b
if(a5==null){w=9
break}a6=H.QV(a5)
if(a6!=null&&o.b(a6.h(0,"pages"))&&J.ad(o.a(a6.h(0,"pages")))>=h.length)a2=o.a(a6.h(0,"pages"))
case 9:++a3
w=7
break
case 8:if(a2==null)throw A.W(l!=null&&A.Lp(l)?y.k:y.y)
for(j=J.a6(a2),a7=0;a7<h.length;++a7){a8=r.b(j.h(a2,a7))?A.a2(r.a(j.h(a2,a7)),q,p):B.cA
g=a8.h(0,"title")
a9=B.a.i(A.w(g==null?"":g))
g=a8.h(0,"body")
b0=B.a.i(A.w(g==null?"":g))
g=a9.length===0?h[a7].a:a9
f=b0.length===0?h[a7].b:b0
s[k+a7]=new A.z(g,f)}case 5:k=i
w=4
break
case 6:r=A.a([],x.L)
for(a7=0;a7<b3.length;++a7){q=s[a7]
r.push(q==null?b3[a7]:q)}if(B.a.t(b4,"Swahili")){u=H.a2R(r,b2)
w=1
break}b2.$2("Done",1)
u=r
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bEB,v)},
ahm(b7,b8,b9,c0,c1,c2,c3){var w=0,v=A.j(x.bV),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6
var $async$ahm=A.e(function(c4,c5){if(c4===1)return A.f(c5,v)
for(;;)switch(w){case 0:w=3
return A.b(A.vD(null,""),$async$ahm)
case 3:b6=c5
if(B.a.i(b6).length===0)throw A.W(y.z)
t=A.nh(b6)
s=x.S
r=A.d_(c1,0,A.dA(4,"count",s),A.T(c1).c)
q=H.a2E(new A.N(r,new C.fIU(),r.$ti.k("N<ak.E,m>")).aG(0," "))
r=q==="sw"
if(!r){p=A.ag("swahili|kiswahili",!1,!1,!1,!1)
o=p.b.test(b8)}else o=!0
if(r)r="The book is written in Swahili: keep it in Swahili unless they ask for another language."
else r=q==="en"?"The book is written in English: keep it in English unless they ask for another language.":"Keep the language the book is already written in unless they ask for another."
n=r+(o?y.q:"")
m=new C.fIT(t)
w=c2==="cover"?4:5
break
case 4:b9.$2("Designing the cover\u2026",0.3)
w=6
return A.b(m.$1('You design the cover of a family book. The person asked: """'+b8+'"""\nCurrent cover settings: '+B.X.aq(b7,null)+"\nAllowed values: style one of "+B.d.aG(c3,", ")+"; emblem a number 0 to 11 (0 family tree, 1 heart, 2 home, 3 star, 4 people, 5 flower, 6 open book, 7 castle, 8 church, 9 paw, 10 leaf, 11 trophy); titleSize 18 to 36; position top, middle or bottom; frame double, single, corners or none; texture leather, linen, plain, stars or rays; foil gold, silver, rose, white, copper or black; ribbon true or false.\nAlso allowed: title and subtitle (the words on the cover) and author (a name line). Change ONLY what they asked for; leave the other settings out.\n"+n+'\nReply with JSON only: {"message":"one or two friendly sentences saying what you changed","cover":{...only the settings you change...}}\n'),$async$ahm)
case 6:l=c5
k=H.QV(l==null?"":l)
if(k==null)throw A.W("The AI could not design the cover just now. Nothing was changed.")
s=k.h(0,"message")
s=A.w(s==null?"I updated the cover.":s)
r=x.f
u=new C.aoT(s,D.dzE,r.b(k.h(0,"cover"))?A.a2(r.a(k.h(0,"cover")),x.N,x.z):null)
w=1
break
case 5:r=c2==="page"
p=x.t
if(r){p=A.a([],p)
if(c0>=0&&c0<c1.length)p.push(c0)
j=p}else{p=A.a([],p)
for(i=0;i<c1.length;++i)p.push(i)
j=p}if(j.length===0)throw A.W("There is no page to change.")
h=A.U(s,x.fz)
s=x.j,p=x.N,g=x.K,f='You edit a family book. The person asked: """'+b8+'"""\nRules: change ONLY what they asked for and keep everything else word for word. Keep every person\'s name, date and fact exactly (a name may be written with normal capitals, not ALL CAPITALS). Keep the paragraph breaks (a blank line between paragraphs). If they ask to correct or replace a word, change it everywhere it appears in these pages, including in the titles. If they ask to rewrite, shorten, add to or improve a page, do it properly with good, natural writing.\n'+n+"\nPages: ",e=x.ez,d=x.f,a0="",a1=0
case 7:if(!(a2=j.length,a1<a2)){w=9
break}a3=a1+5
a4=B.d.ds(j,a1,Math.min(a3,a2))
a2=r?"Changing the page\u2026":"Checking pages "+(a1+1)+" to "+(a1+a4.length)+" of "+j.length+"\u2026"
b9.$2(a2,a1/j.length)
a2=A.a([],e)
for(a5=a4.length,a6=0;a6<a4.length;a4.length===a5||(0,A.L)(a4),++a6){i=a4[a6]
a7=c1[i]
a2.push(A.H(["index",i,"title",a7.a,"body",a7.b],p,g))}w=10
return A.b(m.$1(f+B.X.aq(a2,null)+'\nReply with JSON only: {"message":"one or two friendly sentences saying what you changed","pages":[{"index":0,"title":"...","body":"..."}]}\nInclude ONLY the pages you changed, each with its full new text. If nothing needs changing in these pages, use "pages":[].\n'),$async$ahm)
case 10:l=c5
k=l==null?null:H.QV(l)
if(k==null)throw A.W(y.A)
if(a0.length===0){a2=k.h(0,"message")
a2=B.a.i(A.w(a2==null?"":a2)).length!==0}else a2=!1
if(a2)a0=B.a.i(A.w(k.h(0,"message")))
a8=k.h(0,"pages")
if(s.b(a8))for(a2=J.de(a8,d),a5=J.aW(a2.a),a2=a2.$ti,a7=new A.lc(a5,a2.k("lc<1>")),a2=a2.c;a7.C();){a9=a2.a(a5.gS(a5))
b0=J.a6(a9)
b1=A.aK(b0.h(a9,"index"))
i=b1==null?null:B.k.N(b1)
if(i==null||!B.d.t(a4,i))continue
b1=b0.h(a9,"title")
b2=B.a.i(A.w(b1==null?"":b1))
a9=b0.h(a9,"body")
b3=B.a.i(A.w(a9==null?"":a9))
a9=b2.length===0
if(a9&&b3.length===0)continue
a9=a9?c1[i].a:b2
h.n(0,i,new A.z(a9,b3.length===0?c1[i].b:b3))}case 8:a1=a3
w=7
break
case 9:if(h.a!==0){s=h.$ti.k("bd<2>")
p=A.cF(new A.bd(h,s),new C.fIV(),s.k("M.E"),p)
p=H.a2E(A.pv(p,3,A.a7(p).k("M.E")).aG(0," "))==="sw"
s=p}else s=!1
w=s?11:12
break
case 11:s=h.$ti.k("cx<1>")
b4=A.C(new A.cx(h,s),s.k("M.E"))
s=A.a([],x.L)
for(r=b4.length,a6=0;a6<b4.length;b4.length===r||(0,A.L)(b4),++a6){p=h.h(0,b4[a6])
p.toString
s.push(p)}w=13
return A.b(H.a2R(s,b9),$async$ahm)
case 13:b5=c5
for(s=J.a6(b5),i=0;i<b4.length;++i)h.n(0,b4[i],s.h(b5,i))
case 12:b9.$2("Done",1)
if(a0.length===0){s=h.a
if(s===0)s="I looked, and nothing needed changing."
else{r=s===1?"page":"pages"
r="Done. I updated "+s+" "+r+"."
s=r}}else s=a0
u=new C.aoT(s,h,null)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$ahm,v)},
hyJ(d,e,f){return A.ck(null,B.w.j(0.65),!1,null,new C.fSn(e,f),d,null,!0,!0,x.g2)},
aoT:function aoT(d,e,f){this.a=d
this.b=e
this.c=f},
fIU:function fIU(){},
fIT:function fIT(d){this.a=d},
fIV:function fIV(){},
fSn:function fSn(d,e){this.a=d
this.b=e},
bCq(b1){var w=0,v=A.j(x.aD),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
var $async$bCq=A.e(function(b2,b3){if(b2===1)return A.f(b3,v)
for(;;)switch(w){case 0:if(!B.d.b3(b1,new C.fwP())){u=null
w=1
break}t=B.d.d5(b1,new C.fwQ())
s=$.S()
r=new A.p2()
q=A.z8(r,D.aPZ)
p=A.I()
p.r=B.c.gp(0)
q.aP(D.aPZ,p)
o=A.I()
o.r=B.N.gp(0)
o.c=3.6
o.b=B.a9
o.d=B.bA
o.e=B.dQ
n=new C.fwV(t)
if(!t){for(s=b1.length,m=1/0,l=1/0,k=0,j=0,i=0;i<s;++i){h=b1[i]
if(h==null)continue
g=h.a
if(g<m)m=g
f=h.b
if(f<l)l=f
if(g>k)k=g
if(f>j)j=f}e=B.k.E(k-m,1,1e4)
d=B.k.E(j-l,1,1e4)
a0=B.k.E(478.40000000000003/e,0,147.20000000000002/d)
a1=(520-e*a0)/2
a2=(160-d*a0)/2
s=$.S()
p=A.a([],x.v)
a3=new A.aF(s.r,B.ag,null,null,p)
for(s=b1.length,a4=!1,i=0;i<b1.length;b1.length===s||(0,A.L)(b1),++i){h=b1[i]
if(h==null){a4=!1
continue}a5=a1+(h.a-m)*a0
a6=a2+(h.b-l)*a0
if(!a4){a7=new A.aY(a5,a6)
p.push(a7)
a8=a3.f
if(a8!=null)a7.bw(a8)
a7=a3.e
if(a7!=null)a7.a.delete()
a3.e=null
a4=!0}else{a7=new A.aq(a5,a6)
p.push(a7)
a8=a3.f
if(a8!=null)a7.bw(a8)
a7=a3.e
if(a7!=null)a7.a.delete()
a3.e=null}}q.aH(a3,o)}else{p=A.a([],x.v)
a3=new A.aF(s.r,B.ag,null,null,p)
for(s=b1.length,a4=!1,i=0;i<b1.length;b1.length===s||(0,A.L)(b1),++i){h=b1[i]
if(h==null){a4=!1
continue}a9=n.$1(h)
a7=a9.a
a8=a9.b
if(!a4){a7=new A.aY(a7,a8)
p.push(a7)
a8=a3.f
if(a8!=null)a7.bw(a8)
a7=a3.e
if(a7!=null)a7.a.delete()
a3.e=null
a4=!0}else{a7=new A.aq(a7,a8)
p.push(a7)
a8=a3.f
if(a8!=null)a7.bw(a8)
a7=a3.e
if(a7!=null)a7.a.delete()
a3.e=null}}q.aH(a3,o)}w=4
return A.b(r.nj().xd(520,160),$async$bCq)
case 4:w=3
return A.b(b3.hw(B.h9),$async$bCq)
case 3:b0=b3
u=b0==null?null:J.eS(B.dK.gaR(b0))
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bCq,v)},
fGA(d){return C.icN(d)},
icN(d){var w=0,v=A.j(x.bW),u,t,s,r,q,p,o,n
var $async$fGA=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:p={}
o=d.bhH()
n=d.x!=null&&d.zg(null).length===0
if(d.x!=null)t=n?D.zZ:D.Jm
else t=d.gUb()?D.Jm:D.aKU
w=3
return A.b(C.bCq(d.ax),$async$fGA)
case 3:s=f
p.a=null
if(s!=null)p.a=A.anz(s)
r=A.a4M(null,"NGMY Cashier","Payment receipt \u2014 "+d.b)
p.b=p.c=null
q=d.x
if(q==null){p.c="Not paid yet"
p.b=D.aKU}else{p.c=C.x2(q,!0)
p.b=n?D.zZ:D.Jm}r.a3H(A.h1N(new C.fGC(p,d,new C.fGD(),t,n,o),null,D.bD4,B.wP))
u=r.jA(0)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fGA,v)},
fNe(d){var w=0,v=A.j(x.y),u,t,s,r,q
var $async$fNe=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(C.fGA(d),$async$fNe)
case 3:t=f
s=B.a.i(d.b)
r=A.ag("[^a-zA-Z0-9_-]+",!0,!1,!1,!1)
q=A.aL(s,r,"_")
if(q.length>40)q=B.a.ar(q,0,40)
u=Ah.H_(t,"ngmy_cashier_receipt_"+(q.length===0?d.a:q)+".pdf",!1)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fNe,v)},
fwP:function fwP(){},
fwQ:function fwQ(){},
fwV:function fwV(d){this.a=d},
fGD:function fGD(){},
fGC:function fGC(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fGB:function fGB(){},
fSQ(d,e){var w=0,v=A.j(x.H)
var $async$fSQ=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.ck(null,B.w.j(0.55),!0,null,new C.fSU(new A.cw(null,x.eF),e),d,null,!0,!0,x.H),$async$fSQ)
case 2:return A.h(null,v)}})
return A.i($async$fSQ,v)},
bF3(d,e,f,g){return C.ikn(d,e,f,g)},
ikn(d,e,f,g){var w=0,v=A.j(x.H),u,t,s,r
var $async$bF3=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:r=null
try{t=B.a.t(e,",")?B.d.gak(e.split(",")):e
r=B.cF.aO(t)}catch(q){r=null}if(r==null||r.length===0){d.K(x.q).f.U(D.feg)
w=1
break}w=3
return A.b(A.ck(null,null,!0,null,new C.fSM(g,r,f),d,null,!0,!0,x.H),$async$bF3)
case 3:case 1:return A.h(u,v)}})
return A.i($async$bF3,v)},
fSV(d,e){var w=0,v=A.j(x.H)
var $async$fSV=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.ck(null,null,!0,null,new C.fSY(new A.cw(null,x.eF),e),d,null,!0,!0,x.H),$async$fSV)
case 2:return A.h(null,v)}})
return A.i($async$fSV,v)},
aZO:function aZO(d,e){this.c=d
this.a=e},
c6t:function c6t(){},
bc_:function bc_(d,e){this.b=d
this.a=e},
fSU:function fSU(d,e){this.a=d
this.b=e},
fSR:function fSR(d){this.a=d},
fSS:function fSS(d,e,f){this.a=d
this.b=e
this.c=f},
fST:function fST(d,e){this.a=d
this.b=e},
fSM:function fSM(d,e,f){this.a=d
this.b=e
this.c=f},
fSK:function fSK(d){this.a=d},
fSL:function fSL(d,e,f){this.a=d
this.b=e
this.c=f},
fSY:function fSY(d,e){this.a=d
this.b=e},
fSW:function fSW(d){this.a=d},
fSX:function fSX(d,e,f){this.a=d
this.b=e
this.c=f},
fB8(d,e){var w=0,v=A.j(x.y),u,t
var $async$fB8=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(A.a2p(d),$async$fB8)
case 3:t=g
J.nG(t,new C.fB9(e))
u=A.ai0(d,t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fB8,v)},
fB9:function fB9(d){this.a=d},
ap4:function ap4(d,e,f){this.c=d
this.d=e
this.a=f},
aDN:function aDN(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
dMv:function dMv(d,e){this.a=d
this.b=e},
dMg:function dMg(d,e){this.a=d
this.b=e},
dMj:function dMj(d,e,f){this.a=d
this.b=e
this.c=f},
dMi:function dMi(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dMh:function dMh(d,e){this.a=d
this.b=e},
dMk:function dMk(d,e){this.a=d
this.b=e},
dMe:function dMe(){},
dMf:function dMf(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
dMd:function dMd(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
dLZ:function dLZ(d){this.a=d},
dM_:function dM_(d,e,f){this.a=d
this.b=e
this.c=f},
dM0:function dM0(d,e){this.a=d
this.b=e},
dLY:function dLY(d){this.a=d},
dM5:function dM5(d,e){this.a=d
this.b=e},
dLX:function dLX(d){this.a=d},
dM6:function dM6(d,e,f){this.a=d
this.b=e
this.c=f},
dM7:function dM7(d,e,f){this.a=d
this.b=e
this.c=f},
dLW:function dLW(d,e){this.a=d
this.b=e},
dM8:function dM8(d,e,f){this.a=d
this.b=e
this.c=f},
dLV:function dLV(d,e){this.a=d
this.b=e},
dM9:function dM9(d,e){this.a=d
this.b=e},
dLU:function dLU(d){this.a=d},
dMa:function dMa(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dLS:function dLS(){},
dLM:function dLM(d){this.a=d},
dLN:function dLN(d){this.a=d},
dLT:function dLT(d,e){this.a=d
this.b=e},
dMb:function dMb(d,e){this.a=d
this.b=e},
dLR:function dLR(d){this.a=d},
dMc:function dMc(d){this.a=d},
dLQ:function dLQ(){},
dM1:function dM1(d,e){this.a=d
this.b=e},
dLP:function dLP(d){this.a=d},
dM2:function dM2(d,e,f){this.a=d
this.b=e
this.c=f},
dLO:function dLO(d,e){this.a=d
this.b=e},
dLL:function dLL(d,e){this.a=d
this.b=e},
dM3:function dM3(d){this.a=d},
dM4:function dM4(d,e,f){this.a=d
this.b=e
this.c=f},
dMy:function dMy(){},
dMz:function dMz(d,e){this.a=d
this.b=e},
dMw:function dMw(d){this.a=d},
dMx:function dMx(d){this.a=d},
dMs:function dMs(d,e){this.a=d
this.b=e},
dMt:function dMt(d){this.a=d},
dMl:function dMl(d,e,f){this.a=d
this.b=e
this.c=f},
dMm:function dMm(d,e,f){this.a=d
this.b=e
this.c=f},
dMn:function dMn(d,e,f){this.a=d
this.b=e
this.c=f},
dMo:function dMo(d,e,f){this.a=d
this.b=e
this.c=f},
dMp:function dMp(d,e,f){this.a=d
this.b=e
this.c=f},
dMq:function dMq(d,e,f){this.a=d
this.b=e
this.c=f},
dMr:function dMr(d,e,f){this.a=d
this.b=e
this.c=f},
dMA:function dMA(){},
dMB:function dMB(){},
dMC:function dMC(){},
dMD:function dMD(d){this.a=d},
dMu:function dMu(d,e){this.a=d
this.b=e},
huL(d){return B.d.dM(D.a3J,new C.fBN(d),new C.fBO())},
uC:function uC(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
fBN:function fBN(d){this.a=d},
fBO:function fBO(){},
al6:function al6(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aVz:function aVz(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
Ta:function Ta(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bfC:function bfC(){this.d=$
this.c=this.a=null},
dcl:function dcl(d,e){this.a=d
this.b=e},
dcj:function dcj(d,e){this.a=d
this.b=e},
dck:function dck(){},
dcm:function dcm(d,e){this.a=d
this.b=e},
hfk(d){var w,v,u,t=d.h(0,"id")
t=J.k(t==null?"":t)
w=d.h(0,"title")
w=J.k(w==null?"":w)
v=d.h(0,"body")
v=J.k(v==null?"":v)
u=d.h(0,"updatedAt")
u=A.bk(J.k(u==null?"":u))
return new C.nq(t,w,v,u==null?new A.V(Date.now(),0,!1):u)},
Lb(d,e){return C.ibp(d,e)},
ibp(d,e){var w=0,v=A.j(x.d),u,t=2,s=[],r,q,p,o,n,m,l
var $async$Lb=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){u=A.a([],x.I)
w=1
break}t=4
w=7
return A.b(A.az(),$async$Lb)
case 7:r=g
o=B.a.i(d.toLowerCase())
q=A.aT(J.r(r.a,"ngmy_family_book_v1_"+o+"_"+e))
if(q==null||q.length===0){o=A.a([],x.I)
u=o
w=1
break}p=B.X.aM(0,q,null)
if(!x.j.b(p)){o=A.a([],x.I)
u=o
w=1
break}o=J.de(p,x.f)
o=A.cF(o,new C.fEa(),o.$ti.k("M.E"),x.B)
n=A.a7(o).k("Z<M.E>")
o=A.C(new A.Z(o,new C.fEb(),n),n.k("M.E"))
B.d.aY(o,new C.fEc())
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
return A.i($async$Lb,v)},
Ba(d,e,f){var w=0,v=A.j(x.H),u,t,s,r
var $async$Ba=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){w=1
break}w=3
return A.b(A.az(),$async$Ba)
case 3:t=h
s=B.a.i(d.toLowerCase())
r=J.b6(f,new C.fRt(),x.a)
r=A.C(r,r.$ti.k("ak.E"))
w=4
return A.b(t.au("String","ngmy_family_book_v1_"+s+"_"+e,B.X.aq(r,null)),$async$Ba)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Ba,v)},
aRE(d,e,f){var w=0,v=A.j(x.H),u,t,s
var $async$aRE=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=2
return A.b(C.Lb(d,e),$async$aRE)
case 2:u=h
t=J.cD(u)
s=t.bh(u,new C.fZP(f))
if(s===-1)t.c6(u,0,f)
else t.n(u,s,f)
w=3
return A.b(C.Ba(d,e,u),$async$aRE)
case 3:return A.h(null,v)}})
return A.i($async$aRE,v)},
bCU(d,e,f){var w=0,v=A.j(x.H),u
var $async$bCU=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=2
return A.b(C.Lb(d,e),$async$bCU)
case 2:u=h
J.nG(u,new C.fB0(f))
w=3
return A.b(C.Ba(d,e,u),$async$bCU)
case 3:return A.h(null,v)}})
return A.i($async$bCU,v)},
bD7(d,e){return C.ibo(d,e)},
ibo(a2,a3){var w=0,v=A.j(x.e),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$bD7=A.e(function(a4,a5){if(a4===1){s.push(a5)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.az(),$async$bD7)
case 7:r=a5
o=B.a.i(a2.toLowerCase())
q=A.aT(J.r(r.a,"ngmy_family_book_cover_v1_"+o+"_"+a3))
if(q==null||q.length===0){u=D.NY
w=1
break}p=B.X.aM(0,q,null)
if(x.f.b(p)){o=A.a2(p,x.N,x.z)
n=o.h(0,"style")
n=J.k(n==null?"leather":n)
m=o.h(0,"title")
m=J.k(m==null?"":m)
l=o.h(0,"subtitle")
l=J.k(l==null?"":l)
k=A.aK(o.h(0,"emblem"))
k=k==null?null:B.k.N(k)
if(k==null)k=0
if(D.Dg.aj(0,o.h(0,"foil")))j=A.cP(o.h(0,"foil"))
else j=J.A(o.h(0,"silver"),!0)?"silver":"gold"
i=A.aK(o.h(0,"titleSize"))
if(i==null)i=null
i=B.k.E(i==null?25:i,18,36)
h=B.d.t(D.a5q,o.h(0,"position"))?A.cP(o.h(0,"position")):"middle"
g=B.d.t(D.a4L,o.h(0,"frame"))?A.cP(o.h(0,"frame")):"double"
f=B.d.t(D.a4H,o.h(0,"texture"))?A.cP(o.h(0,"texture")):"leather"
e=o.h(0,"author")
e=J.k(e==null?"":e)
d=J.A(o.h(0,"ribbon"),!1)
o=B.d.t(D.d1R,o.h(0,"header"))?A.cP(o.h(0,"header")):"classic"
o=new C.HY(n,m,l,k,j,i,h,g,f,e,!d,o)}else o=D.NY
u=o
w=1
break
t=2
w=6
break
case 4:t=3
a1=s.pop()
u=D.NY
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$bD7,v)},
S_(d,e,f){return C.ijU(d,e,f)},
ijU(d,e,f){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$S_=A.e(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){w=1
break}t=4
w=7
return A.b(A.az(),$async$S_)
case 7:r=h
w=8
return A.b(r.au("String","ngmy_family_book_cover_v1_"+B.a.i(d.toLowerCase())+"_"+e,B.X.aq(f.ah(),null)),$async$S_)
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
return A.i($async$S_,v)},
Rs(d,e){return C.ibq(d,e)},
ibq(d,e){var w=0,v=A.j(x.dy),u,t=2,s=[],r,q,p,o,n,m,l,k,j
var $async$Rs=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){u=A.a([],x.s)
w=1
break}t=4
w=7
return A.b(A.az(),$async$Rs)
case 7:r=g
q=r.tz("ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e)
if(q!=null){n=A.C(q,x.N)
u=n
w=1
break}j=J
w=8
return A.b(C.Lb(d,e),$async$Rs)
case 8:if(!j.cL(g)){n=B.a.i(d.toLowerCase())
m=J.lE(r.a,"ngmy_family_book_cover_v1_"+n+"_"+e)}else m=!0
p=m
n=x.s
o=p?A.a(["main"],n):A.a([],n)
w=9
return A.b(r.au("StringList","ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e,o),$async$Rs)
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
return A.i($async$Rs,v)},
agG(d,e){var w=0,v=A.j(x.T),u,t,s,r
var $async$agG=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.Rs(d,e),$async$agG)
case 3:s=g
r=J.a6(s)
if(r.gL(s)>=6){u=null
w=1
break}t=r.t(s,"main")?""+1000*Date.now()+"_"+r.gL(s):"main"
r.M(s,t)
w=5
return A.b(A.az(),$async$agG)
case 5:w=4
return A.b(g.au("StringList","ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e,s),$async$agG)
case 4:u=t
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$agG,v)},
a32(d,e,f){var w=0,v=A.j(x.H),u,t,s
var $async$a32=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=2
return A.b(C.Rs(d,e),$async$a32)
case 2:s=h
J.hC(s,f)
w=3
return A.b(A.az(),$async$a32)
case 3:u=h
w=4
return A.b(u.au("StringList","ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e,s),$async$a32)
case 4:t=f==="main"?e:e+"~"+f
w=5
return A.b(u.W(0,"ngmy_family_book_v1_"+B.a.i(d.toLowerCase())+"_"+t),$async$a32)
case 5:w=6
return A.b(u.W(0,"ngmy_family_book_cover_v1_"+B.a.i(d.toLowerCase())+"_"+t),$async$a32)
case 6:return A.h(null,v)}})
return A.i($async$a32,v)},
nq:function nq(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fEa:function fEa(){},
fEb:function fEb(){},
fEc:function fEc(){},
fRt:function fRt(){},
fZP:function fZP(d){this.a=d},
fB0:function fB0(d){this.a=d},
HY:function HY(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
bPX:function bPX(d){this.a=d},
ikc(d,e,f,g,h,i,j){return A.a4(d,!1).cc(A.eh(new C.fS1(j,i,f,e,h,g),!0,null,x.H))},
Rp(d,e,f,g,h){var w=0,v=A.j(x.y),u,t,s,r,q,p,o,n,m,l,k
var $async$Rp=A.e(function(i,j){if(i===1)return A.f(j,v)
for(;;)switch(w){case 0:w=3
return A.b(C.Rs(h,g),$async$Rp)
case 3:k=j
if(d.e==null){u=!1
w=1
break}if(J.ad(k)>=6){d.K(x.q).f.U(D.aS4)
u=!1
w=1
break}w=4
return A.b(C.hyJ(d,f,e),$async$Rp)
case 4:t=j
if(t==null||d.e==null){u=!1
w=1
break}w=5
return A.b(C.agG(h,g),$async$Rp)
case 5:s=j
if(s==null){u=!1
w=1
break}r=s==="main"?g:g+"~"+s
q=1000*Date.now()
p=A.a([],x.I)
for(o=t.d,n=0;n<o.length;++n){m=o[n]
l=B.a.i(m.a)
if(l.length===0)l="Page "+(n+1)
p.push(new C.nq(""+(q+n),l,B.a.i(m.b),new A.V(Date.now(),0,!1)))}w=6
return A.b(C.Ba(h,r,p),$async$Rp)
case 6:p=B.a.i(t.a)
w=p.length!==0?7:8
break
case 7:w=9
return A.b(C.S_(h,r,new C.HY("leather",p,"",0,"gold",25,"middle","double","leather","",!0,"classic")),$async$Rp)
case 9:case 8:u=!0
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$Rp,v)},
fS1:function fS1(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
ZN:function ZN(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
aAN:function aAN(d,e){var _=this
_.d=d
_.e=!0
_.f=$
_.r=-1
_.x=_.w=!1
_.y=e
_.Q=_.z=$
_.c=_.a=null},
dd0:function dd0(d){this.a=d},
dd_:function dd_(d,e){this.a=d
this.b=e},
dcP:function dcP(d,e){this.a=d
this.b=e},
dcM:function dcM(d,e){this.a=d
this.b=e},
dcn:function dcn(d){this.a=d},
dco:function dco(d,e){this.a=d
this.b=e},
dcQ:function dcQ(d){this.a=d},
dcw:function dcw(d){this.a=d},
dcu:function dcu(d){this.a=d},
dcv:function dcv(d){this.a=d},
dcx:function dcx(d){this.a=d},
dcN:function dcN(d){this.a=d},
dcO:function dcO(){},
dcs:function dcs(d){this.a=d},
dct:function dct(d,e){this.a=d
this.b=e},
dcy:function dcy(d){this.a=d},
dcz:function dcz(d,e){this.a=d
this.b=e},
dcZ:function dcZ(d){this.a=d},
dcY:function dcY(d,e){this.a=d
this.b=e},
dcX:function dcX(d){this.a=d},
dcJ:function dcJ(d){this.a=d},
dcI:function dcI(d){this.a=d},
dcK:function dcK(d){this.a=d},
dcp:function dcp(d,e){this.a=d
this.b=e},
dcL:function dcL(d,e){this.a=d
this.b=e},
dcC:function dcC(d){this.a=d},
dcD:function dcD(d){this.a=d},
dcB:function dcB(){},
dcE:function dcE(d){this.a=d},
dcF:function dcF(d){this.a=d},
dcG:function dcG(d,e){this.a=d
this.b=e},
dcH:function dcH(d,e,f){this.a=d
this.b=e
this.c=f},
dcA:function dcA(d,e){this.a=d
this.b=e},
dcS:function dcS(d){this.a=d},
dcR:function dcR(){},
dcT:function dcT(d){this.a=d},
dcU:function dcU(d){this.a=d},
dcV:function dcV(d){this.a=d},
dcW:function dcW(d,e){this.a=d
this.b=e},
dcq:function dcq(d){this.a=d},
dcr:function dcr(d){this.a=d},
ZR:function ZR(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bg0:function bg0(d){var _=this
_.d=d
_.e=$
_.c=_.a=null},
deL:function deL(d){this.a=d},
deM:function deM(d){this.a=d},
deK:function deK(d){this.a=d},
deN:function deN(d){this.a=d},
deJ:function deJ(d){this.a=d},
deO:function deO(d){this.a=d},
deI:function deI(d){this.a=d},
deP:function deP(d,e){this.a=d
this.b=e},
deH:function deH(d,e){this.a=d
this.b=e},
deQ:function deQ(d,e){this.a=d
this.b=e},
ZP:function ZP(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
af2:function af2(d,e,f){this.a=d
this.b=e
this.c=f},
aAQ:function aAQ(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
ddf:function ddf(d,e){this.a=d
this.b=e},
dde:function dde(d,e){this.a=d
this.b=e},
ddj:function ddj(d){this.a=d},
ddi:function ddi(d,e){this.a=d
this.b=e},
ddg:function ddg(d){this.a=d},
ddh:function ddh(d){this.a=d},
ddk:function ddk(d){this.a=d},
ddl:function ddl(d){this.a=d},
ddd:function ddd(d,e){this.a=d
this.b=e},
ddc:function ddc(d,e){this.a=d
this.b=e},
Kh:function Kh(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
Z4:function Z4(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
cLI:function cLI(d){this.a=d},
cLJ:function cLJ(){},
cLK:function cLK(d){this.a=d},
bdc:function bdc(d,e,f){this.b=d
this.c=e
this.a=f},
bd3:function bd3(d,e){this.b=d
this.a=e},
uD:function uD(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
Zn:function Zn(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bda:function bda(){var _=this
_.r=_.f=_.e=_.d=$
_.c=_.a=null},
d4h:function d4h(d,e,f){this.a=d
this.b=e
this.c=f},
d4g:function d4g(d,e){this.a=d
this.b=e},
d4G:function d4G(d){this.a=d},
d4t:function d4t(){},
d4H:function d4H(d){this.a=d},
d4s:function d4s(){},
d4I:function d4I(d,e){this.a=d
this.b=e},
d4r:function d4r(d,e){this.a=d
this.b=e},
d4J:function d4J(d,e){this.a=d
this.b=e},
d4q:function d4q(d,e){this.a=d
this.b=e},
d4K:function d4K(d){this.a=d},
d4p:function d4p(){},
d4L:function d4L(d,e){this.a=d
this.b=e},
d4o:function d4o(d,e){this.a=d
this.b=e},
d4M:function d4M(d){this.a=d},
d4B:function d4B(d,e){this.a=d
this.b=e},
d4N:function d4N(d){this.a=d},
d4O:function d4O(d){this.a=d},
d4Q:function d4Q(d){this.a=d},
d4R:function d4R(d){this.a=d},
d4A:function d4A(d,e){this.a=d
this.b=e},
d4S:function d4S(d,e){this.a=d
this.b=e},
aHP:function aHP(d){this.a=d},
biz:function biz(d){this.a=d},
bbn:function bbn(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.f=f
_.r=g
_.w=h
_.x=i
_.y=j
_.z=k
_.a=l},
al7:function al7(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
a14:function a14(d,e){this.a=d
this.b=e},
al8:function al8(d,e,f,g,h,i){var _=this
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
_.bx$=h
_.a9$=i
_.c=_.a=null},
bQ6:function bQ6(d){this.a=d},
bQ0:function bQ0(d){this.a=d},
bQ_:function bQ_(d,e){this.a=d
this.b=e},
bQ9:function bQ9(d){this.a=d},
bQ1:function bQ1(d){this.a=d},
bQ2:function bQ2(d){this.a=d},
bQ5:function bQ5(d){this.a=d},
bQ4:function bQ4(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bQ7:function bQ7(d,e){this.a=d
this.b=e},
bQ8:function bQ8(){},
bQ3:function bQ3(d){this.a=d},
bPY:function bPY(d,e){this.a=d
this.b=e},
bPZ:function bPZ(d){this.a=d},
bo7:function bo7(d,e){this.b=d
this.a=e},
aAO:function aAO(){},
iw(d,e){var w
$.S()
w=A.I()
w.b=B.a9
w.c=e
w.r=d.gp(0)
w.d=B.bA
w.e=B.dQ
return w},
bCs(d,e,f,g,h,i,a0,a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=d.a
J.bl(j.save())
j.translate(e.a,e.b)
d.p8(0,a0?-f:f,f)
w=A.bK(B.ic,8,36)
v=B.w.j(0.3)
u=$.S()
t=A.I()
t.r=v.gp(0)
d.dP(w,t)
w=a1===D.Wq
s=w?Math.sin(g*5*a2):0
r=w?Math.abs(Math.sin(g*10*a2))*1.6:0
q=h.a
w=h.b
v=A.ar(w,B.w,0.3)
v.toString
if(!a3){v=s*7
d.bo(D.ekO,new A.t(-4+v,-2),C.iw(q,5))
d.bo(D.eio,new A.t(4-v,-2),C.iw(q,5))}else{t=A.bK(B.Jc,14,40)
p=A.I()
p.r=v.gp(0)
d.dP(t,p)}v=u.r
u=x.v
o=new A.aF(v,B.ag,k,k,A.a([],u))
t=-64-r
o.D(new A.aY(-11,t))
o.D(new A.c4(-15,-40,-14,a3?-12:-18))
o.D(new A.aq(14,a3?-12:-18))
o.D(new A.c4(15,-40,11,t))
o.D(new A.bs())
t=A.I()
t.r=w.gp(0)
d.aH(o,t)
u=new A.aF(v,B.ag,k,k,A.a([],u))
u.D(new A.aY(-12,-50-r))
v=-46-r
u.D(new A.aq(12,v))
u.D(new A.aq(12.5,-42-r))
u.D(new A.aq(-12.5,v))
u.D(new A.bs())
v=A.I()
v.r=h.c.gp(0)
d.aH(u,v)
A:{if(D.abN===a1){w=Math.sin(g*3.4)
break A}if(D.abO===a1){w=Math.sin(g*7.5)
break A}w=s
break A}if(a1===D.abN){n=-52+w*14
d.bo(new A.t(10,n-22),new A.t(10,n+44),C.iw(F.Fm,3.4))
d.bo(D.el4,new A.t(9,n),C.iw(q,4))
d.bo(D.eiO,new A.t(10,n),C.iw(q,4))}else if(a1===D.abO){d.bo(D.ejU,new A.t(-8,-26-Math.max(0,w)*6),C.iw(q,4))
d.bo(D.egS,new A.t(8,-26-Math.max(0,-w)*6),C.iw(q,4))}else{w=s*3
v=-38-r
d.bo(D.ejY,new A.t(-12-w,v),C.iw(q,4))
d.bo(D.aJX,new A.t(12+w,v),C.iw(q,4))}w=A.I()
w.r=q.gp(0)
d.aP(D.f1K,w)
m=new A.t(0,-77-r)
w=A.bK(m,22,19)
v=A.I()
v.r=q.gp(0)
d.dP(w,v)
w=h.y
if(w!=null){v=A.bK(m.a7(0,I.v4),15,24)
u=A.I()
u.r=w.gp(0)
d.dP(v,u)
u=m.a7(0,D.egN)
v=A.I()
v.r=w.gp(0)
d.ad(u,4,v)}else{w=A.bK(m.a7(0,B.rZ),23,20)
v=h.d
u=A.I()
u.r=v.gp(0)
d.e3(w,3.2986722862692828,2.827433388230814,!0,u)
w=h.e
if(w===3){d.bo(m.a7(0,D.el2),m.a7(0,D.ejS),C.iw(v,2.2))
d.bo(m.a7(0,D.eiN),m.a7(0,D.egK),C.iw(v,2.2))}if(w===4){w=m.a7(0,D.el6)
u=A.I()
u.r=v.gp(0)
d.ad(w,6,u)
u=m.a7(0,D.eiP)
w=A.I()
w.r=v.gp(0)
d.ad(u,6,w)}}w=m.a7(0,D.ejF)
v=A.I()
v.r=B.i2.gp(0)
d.ad(w,0.9,v)
v=m.a7(0,D.ejt)
w=A.I()
w.r=B.i2.gp(0)
d.ad(v,0.9,w)
if(i){l=m.a7(0,I.a7l)
w=A.bK(l,21,22)
v=A.I()
v.r=D.lv.gp(0)
d.dP(w,v)
v=A.bK(l.a7(0,I.aJU),5,12)
w=A.I()
w.r=D.bdc.gp(0)
d.dP(v,w)
d.bo(l.a7(0,D.ekZ),l.a7(0,I.aKg),C.iw(B.cI,1.4))
d.bo(D.aJX,new A.t(15,-88-r),C.iw(q,3.6))}j.restore()},
htt(d,e,f,g,h,i,j,k){var w,v,u,t,s,r=d.a
J.bl(r.save())
w=e.a
r.translate(w,e.b-h.x*f)
d.bW(0,f)
v=A.bK(B.dC,18,96)
u=B.w.j(0.28)
$.S()
t=A.I()
t.r=u.gp(0)
d.dP(v,t)
t=A.bK(B.dC,11,70)
v=B.w.j(0.2)
u=A.I()
u.r=v.gp(0)
d.dP(t,u)
d.lp(D.aQ2,A.I())
C.i_T(d,g,h,i,j)
s=(k==null?D.a7q:k).a-w>=0?1:-1
w=A.I()
w.a=B.Lm
w.sam(A.jv(new A.t(s*70,-60),new A.t(-s*70,-60),A.a([D.agX.j(0.5),D.agX.j(0.12),D.bkn.j(0.22)],x.O),A.a([0,0.55,1],x.n),B.x,null))
d.aP(D.aQ2,w)
r.restore()
r.restore()},
i_T(a2,a3,a4,a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=null,a0=a3.a,a1=A.ar(a0,B.w,0.28)
a1.toString
w=A.ar(a0,B.c,0.16)
w.toString
v=a3.b
u=A.ar(v,B.w,0.32)
u.toString
t=Math.sin(a5*1.9+a6)*0.8
s=a3.w
r=s?1.06:1
q=s?0.86:1
s=A.br(D.f1L,B.t2)
p=$.S()
o=A.I()
o.r=u.gp(0)
a2.az(s,o)
o=A.br(D.f1G,B.hD)
s=A.ar(v,B.w,0.18)
s.toString
n=A.I()
n.r=s.gp(0)
a2.az(o,n)
n=A.br(D.f1U,B.hD)
o=A.ar(v,B.w,0.1)
o.toString
s=A.I()
s.r=o.gp(0)
a2.az(n,s)
s=A.I()
s.r=a0.gp(0)
a2.dP(D.f1N,s)
s=A.I()
s.r=a0.gp(0)
a2.dP(D.f0w,s)
s=a2.a
J.bl(s.save())
s.translate(a4.w,0)
J.bl(s.save())
a2.p8(0,q,q*(1+t*0.012))
o=a3.f
m=o&&!a3.r?25:28
n=x.v
l=new A.aF(p.r,B.ag,d,d,A.a([],n))
p=-m
k=p+2
l.D(new A.aY(k,-58))
l.D(new A.c4(p-3,-62,p,-52))
l.D(new A.aq(p+4,-14))
l.D(new A.aq(m-4,-14))
l.D(new A.aq(m,-52))
l.D(new A.c4(m+3,-62,m-2,-58))
l.D(new A.c4(0,-70,k,-58))
l.D(new A.bs())
k=A.I()
k.r=v.gp(0)
a2.aH(l,k)
J.bl(s.save())
a2.mJ(0,l)
switch(a3.x){case 1:for(j=0;j<5;++j){u=j*5
k=D.d8v[j]
i=new A.ao(B.Q,B.M,B.S,B.T,B.R)
i.b=B.a9
i.c=5
i.r=k.gp(0)
i.d=B.bA
i.e=B.dQ
h=i.G()
s.drawLine.apply(s,[-34+u,-64,14+u,-14,h])
h.delete()}break
case 2:for(k=a3.c,g=-56;g<-14;g+=11)for(f=-26+B.o.F(B.o.ao(g,11),2)*6;f<28;f+=12){i=k.j(0.85)
$.S()
e=new A.ao(B.Q,B.M,B.S,B.T,B.R)
e.r=i.gp(0)
h=e.G()
s.drawCircle(f,g,3.6,h)
h.delete()
e=new A.ao(B.Q,B.M,B.S,B.T,B.R)
e.r=u.gp(0)
h=e.G()
s.drawCircle(f,g,1.6,h)
h.delete()}break
case 3:for(u=a3.c,f=-28;f<30;f+=8){k=u.j(0.7)
i=new A.ao(B.Q,B.M,B.S,B.T,B.R)
i.b=B.a9
i.c=1.6
i.r=k.gp(0)
i.d=B.bA
i.e=B.dQ
h=i.G()
s.drawLine.apply(s,[f,-64,f,-14,h])
h.delete()}for(g=-60;g<-14;g+=8){k=u.j(0.7)
i=new A.ao(B.Q,B.M,B.S,B.T,B.R)
i.b=B.a9
i.c=1.6
i.r=k.gp(0)
i.d=B.bA
i.e=B.dQ
h=i.G()
s.drawLine.apply(s,[-30,g,30,g,h])
h.delete()}break
default:a2.bo(D.ekt,D.ehv,C.iw(a3.c.j(0.9),3))}a2.bo(D.el_,D.ek_,C.iw(B.w.j(0.18),1.6))
a2.bo(D.egR,I.aJZ,C.iw(B.w.j(0.18),1.6))
u=B.w.j(0.12)
k=$.S()
i=A.I()
i.r=u.gp(0)
a2.aP(D.f0s,i)
s.restore()
i=A.I()
i.r=a1.gp(0)
a2.aP(D.f0G,i)
n=new A.aF(k.r,B.ag,d,d,A.a([],n))
n.D(new A.aY(-9,-66))
n.D(new A.c4(0,-57,9,-66))
n.D(new A.c4(0,-60,-9,-66))
k=A.I()
k.r=a0.gp(0)
a2.aH(n,k)
if(a3.e!==1)u=a3.r&&!o
else u=!0
if(u)a2.e3(D.f0P,0.1,2.941592653589793,!1,C.iw(a3.c,2.2))
s.restore()
u=-56*q
o=a4.Q
if(o==null)o=D.a7u
n=25*q
k=23*q
i=9*q
C.hpI(a2,new A.t(p*q+2,u),o,n,k,-1,v,a0,i)
o=a4.as
p=o==null?D.DJ:o
C.hpI(a2,new A.t(m*q-2,u),p,n,k,1,v,a0,i)
if(a4.at){a2.bo(D.eig,D.eic,C.iw(D.ahP,4))
a2.bo(D.eie,D.eia,C.iw(D.FN.j(0.7),1.4))
u=A.I()
u.r=B.cI.gp(0)
a2.ad(D.eid,5,u)}s.restore()
u=a4.w
p=a4.e
o=a4.r
J.bl(s.save())
s.translate(u*1.2+p*4,-88+o-t*0.4)
a2.ih(0,a4.f)
a2.bW(0,r)
C.i_Q(a2,a3,a4,a5,a6,a0,a1,w)
s.restore()},
hpI(d,e,f,g,h,i,j,k,l){var w,v,u,t,s=f.aE(0,e),r=s.gcF(),q=r===0?B.ic:s.eV(0,r),p=B.k.E(r,Math.abs(g-h)+0.5,g+h-0.5),o=g*g,n=(o-h*h+p*p)/(2*p),m=Math.sqrt(Math.max(0,o-n*n))
o=-q.b
w=q.a
v=new A.t(o,w)
if(o*i<0)v=new A.t(-o,-w)
u=e.a7(0,q.aI(0,n)).a7(0,v.aI(0,m))
t=e.a7(0,q.aI(0,p))
d.bo(e,u,C.iw(j,l))
o=A.ar(j,B.w,0.2)
o.toString
d.bo(e,u,C.iw(o,l*0.35))
d.bo(u,t,C.iw(k,l*0.78))
o=A.ar(k,B.w,0.22)
o.toString
d.bo(u,t,C.iw(o,l*0.22))
$.S()
o=A.I()
o.r=j.gp(0)
d.ad(u,l*0.55,o)
o=A.bK(t,l*1.15,l)
w=A.I()
w.r=k.gp(0)
d.dP(o,w)
w=-l
w=t.a7(0,new A.t(i*w*0.45,w*0.1))
o=A.I()
o.r=k.gp(0)
d.ad(w,l*0.28,o)},
i_Q(c3,c4,c5,c6,c7,c8,c9,d0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0=null,c1=c4.d,c2=c4.e
if(c2===3||c2===4){w=A.bK(B.v3,40,38)
$.S()
v=A.I()
v.r=c1.gp(0)
c3.dP(w,v)}if(c2===4){$.S()
w=A.I()
w.r=c1.gp(0)
c3.ad(D.ek9,9.5,w)
w=A.I()
w.r=c1.gp(0)
c3.ad(D.eh5,9.5,w)}w=A.bK(D.elm,10,6)
v=$.S()
u=A.I()
u.r=c9.gp(0)
c3.dP(w,u)
u=A.bK(D.ejC,10,6)
w=A.I()
w.r=c9.gp(0)
c3.dP(u,w)
v=v.r
w=x.v
t=new A.aF(v,B.ag,c0,c0,A.a([],w))
t.D(new A.aY(0,-20))
t.D(new A.l_(13,-20,17,-9,16,2))
t.D(new A.l_(15,13,8,20,0,20))
t.D(new A.l_(-8,20,-15,13,-16,2))
t.D(new A.l_(-17,-9,-13,-20,0,-20))
t.D(new A.bs())
u=A.I()
u.sam(A.tt(D.ekQ,28,A.a([d0,c8,c9],x.O),A.a([0,0.55,1],x.n),B.x,c0,c0,0))
c3.aH(t,u)
u=c4.r
if(u){s=C.iw(c9.j(0.5),0.8)
c3.e3(D.f1W,3.455751918948773,2.5132741228718345,!1,s)
c3.e3(D.f0z,3.455751918948773,2.5132741228718345,!1,s)
c3.bo(D.ek6,D.ejV,s)
c3.bo(D.eh1,D.egU,s)
c3.e3(D.f0O,2.2,1.4,!1,s)
c3.e3(D.f0x,-0.4,1.4,!1,s)}switch(c2){case 0:for(r=c3.a,q=0;q<16;++q){p=3.141592653589793*(1.02+0.96*q/15)
o=Math.cos(p)
n=Math.sin(p)
m=new A.ao(B.Q,B.M,B.S,B.T,B.R)
m.r=c1.gp(0)
l=m.G()
r.drawCircle(o*14.5,-3+n*17.5,4.3,l)
l.delete()}r=A.I()
r.r=c1.gp(0)
c3.e3(D.f11,3.141592653589793,3.141592653589793,!0,r)
break
case 1:r=new A.aF(v,B.ag,c0,c0,A.a([],w))
r.D(new A.aY(-15,-11))
r.D(new A.c4(0,-30,15,-11))
r.D(new A.aq(13,-6))
r.D(new A.c4(0,-12,-13,-6))
r.D(new A.bs())
o=A.I()
o.r=c4.c.gp(0)
c3.aH(r,o)
c3.bo(D.ejW,D.egV,C.iw(G.n9,1.4))
o=A.I()
o.r=c1.gp(0)
c3.ad(D.ekc,3,o)
o=A.I()
o.r=c1.gp(0)
c3.ad(D.eh6,3,o)
o=new A.aF(v,B.ag,c0,c0,A.a([],w))
o.D(new A.aY(-13,6))
o.D(new A.c4(-12,22,0,26))
o.D(new A.c4(12,22,13,6))
o.D(new A.c4(8,13,0,12))
o.D(new A.c4(-8,13,-13,6))
o.D(new A.bs())
r=A.I()
r.r=B.iy.gp(0)
c3.aH(o,r)
r=new A.aF(v,B.ag,c0,c0,A.a([],w))
r.D(new A.aY(-7,8))
r.D(new A.c4(0,6,7,8))
r.D(new A.c4(0,10.5,-7,8))
o=A.I()
o.r=B.bO.gp(0)
c3.aH(r,o)
break
case 2:k=c4.y
if(k==null)k=c4.b
r=new A.aF(v,B.ag,c0,c0,A.a([],w))
r.D(new A.aY(-17,-4))
r.D(new A.c4(-20,-27,0,-29))
r.D(new A.c4(20,-27,17,-4))
r.D(new A.c4(0,-14,-17,-4))
r.D(new A.bs())
o=A.I()
o.r=k.gp(0)
c3.aH(r,o)
o=A.ar(k,B.w,0.3)
o.toString
c3.e3(D.f18,3.4,2.5,!1,C.iw(o,1.4))
o=A.ar(k,B.c,0.3)
o.toString
c3.e3(D.f0W,3.6,2.2,!1,C.iw(o,1.2))
o=new A.aF(v,B.ag,c0,c0,A.a([],w))
o.D(new A.aY(11,-22))
o.D(new A.c4(27,-34,25,-19))
o.D(new A.c4(18,-18,11,-22))
r=A.ar(k,B.c,0.1)
r.toString
n=A.I()
n.r=r.gp(0)
c3.aH(o,n)
n=new A.aF(v,B.ag,c0,c0,A.a([],w))
n.D(new A.aY(11,-22))
n.D(new A.c4(24,-12,27,-26))
n.D(new A.c4(18,-22,11,-22))
o=A.ar(k,B.w,0.2)
o.toString
r=A.I()
r.r=o.gp(0)
c3.aH(n,r)
r=A.I()
r.r=c4.c.gp(0)
c3.ad(D.egW,3,r)
break
case 3:r=A.I()
r.r=c1.gp(0)
c3.e3(D.f15,3.204424506661589,3.015928947446201,!0,r)
for(r=c3.a,q=-3;q<=3;++q){o=A.ar(c1,B.c,0.18)
o.toString
n=new A.ao(B.Q,B.M,B.S,B.T,B.R)
n.b=B.a9
n.c=0.9
n.r=o.gp(0)
n.d=B.bA
n.e=B.dQ
l=n.G()
r.drawLine.apply(r,[q*3.6,-19+Math.abs(q)*0.8,q*4.6,-4,l])
l.delete()}for(o=c4.c,j=0;j<2;++j){i=D.dms[j]
n=new A.ao(B.Q,B.M,B.S,B.T,B.R)
n.b=B.a9
n.c=4.5
n.r=c1.gp(0)
n.d=B.bA
n.e=B.dQ
l=n.G()
r.drawLine.apply(r,[i,0,i*1.12,22,l])
l.delete()
for(h=0;h<3;++h){n=new A.ao(B.Q,B.M,B.S,B.T,B.R)
n.r=o.gp(0)
l=n.G()
r.drawCircle(i*(1+h*0.04),7+h*6.5,1.8,l)
l.delete()}}break
case 4:r=A.I()
r.r=c1.gp(0)
c3.e3(D.f14,3.204424506661589,3.015928947446201,!0,r)
r=A.ar(c1,B.c,0.25)
r.toString
c3.bo(I.a7l,I.a7k,C.iw(r,1))
break
default:r=A.I()
r.r=c1.gp(0)
c3.e3(D.f0A,3.267256359733385,2.8902652413026098,!0,r)}g=B.k.E(c5.b,0,1)*0.4+0.1
r=A.bK(D.el8,5,8)
o=D.aen.j(g)
n=A.I()
n.r=o.gp(0)
c3.dP(r,n)
n=A.bK(D.ejO,5,8)
r=D.aen.j(g)
o=A.I()
o.r=r.gp(0)
c3.dP(n,o)
f=c5.e*2.4
o=new A.aF(v,B.ag,c0,c0,A.a([],w))
o.D(new A.aY(f-0.6,-2))
o.D(new A.c4(f-3.4,6,f-2.6,7.4))
o.D(new A.c4(f,8.8,f+2.6,7.4))
c3.aH(o,C.iw(c9.j(0.75),1.1))
o=A.I()
o.r=c9.gp(0)
c3.ad(new A.t(f-1.5,7.2),0.7,o)
o=A.I()
o.r=c9.gp(0)
c3.ad(new A.t(f+1.5,7.2),0.7,o)
e=B.k.F(c6*0.33+c7*0.37,1)>0.965?1:0
r=c5.d
o=c5.c>0.8?1.25:1
d=(1-e)*(1-r*0.6)*o
for(r=c3.a,o=d<0.15,n=c4.f,m=d>0.12,a0=2.5*d,a1=a0*2,a2=a0*2.2,j=0;j<2;++j){a3=F.hB[j]
a4=c5.e
a5=a3>0?0.7:1
a6=a3*6.4+a4*2*a5
if(m){a4=Math.max(0.6,a1)
a5=A.bK(new A.t(a6,-3),a4,7)
a7=new A.ao(B.Q,B.M,B.S,B.T,B.R)
a7.r=B.c.j(0.96).gp(0)
l=a7.G()
r.drawOval(A.bG(a5),l)
l.delete()
a8=a6+c5.y*1.5
a9=-3+c5.z*0.7
J.bl(r.save())
a5=A.a([],w)
a7=new A.aF(v,B.ag,c0,c0,a5)
a5.push(new A.jJ(A.bK(new A.t(a6,-3),a4,7)))
a4=a7.gbv().a.snapshot()
a4=a7.e=new A.ce(a4)
r.clipPath(a4.a,$.nF(),!0)
a4=new A.ao(B.Q,B.M,B.S,B.T,B.R)
a4.r=D.bgU.gp(0)
l=a4.G()
r.drawCircle(a8,a9,2.1,l)
l.delete()
a4=new A.ao(B.Q,B.M,B.S,B.T,B.R)
a4.r=B.w.gp(0)
l=a4.G()
r.drawCircle(a8,a9,1.05,l)
l.delete()
a4=new A.ao(B.Q,B.M,B.S,B.T,B.R)
a4.r=B.c.gp(0)
l=a4.G()
r.drawCircle(a8-0.7,a9-0.7,0.55,l)
l.delete()
r.restore()}a4=n?D.Yl:c9.j(0.9)
a5=n?1.5:1.1
b0=new A.ao(B.Q,B.M,B.S,B.T,B.R)
b0.b=B.a9
b0.c=a5
b0.r=a4.gp(0)
b0.d=B.bA
b0.e=B.dQ
a4=o?0.8:0
a4=A.bK(new A.t(a6,-3+a4),Math.max(1.2,a2),7.3500000000000005)
l=b0.G()
r.drawArc.apply(r,[A.bG(a4),189,162,!1,l])
l.delete()
a4=c5.c
b1=-9.2-a4*2.2
a5=a3*3.6
a7=a4<0?-a4*1.6:0
a4=a4>0?a4*0.6:0
if(u)b2=B.e4
else{b2=A.ar(c1,B.w,0.2)
b2.toString}b3=new A.ao(B.Q,B.M,B.S,B.T,B.R)
b3.b=B.a9
b3.c=1.7
b3.r=b2.gp(0)
b3.d=B.bA
b3.e=B.dQ
l=b3.G()
r.drawLine.apply(r,[a6-a5,b1-a7+0.4,a6+a5,b1-0.6-a4,l])
l.delete()}b4=B.k.E(c5.a,0,1)
if(n)b5=D.bqA
else{u=A.ar(c9,D.bkp,0.6)
u.toString
b5=u}b6=c5.b
if(b4>0.06){b7=5+B.k.E(b6,0,1)*2.2
b8=1.2+b4*6.5
b9=new A.aF(v,B.ag,c0,c0,A.a([],w))
w=-b7
b9.D(new A.aY(w,11.5))
b9.D(new A.c4(0,11.5+b8*0.2-c5.b*1.5,b7,11.5))
b9.D(new A.c4(0,11.5+b8*1.5+c5.b*1.5,w,11.5))
b9.D(new A.bs())
v=A.I()
v.r=D.bjK.gp(0)
c3.aH(b9,v)
J.bl(r.save())
c3.mJ(0,b9)
v=B.c.j(0.95)
u=A.I()
u.r=v.gp(0)
c3.aP(new A.a3(w,11,w+b7*2,13.2),u)
u=A.bK(new A.t(0,11.5+b8*1.1),b8*0.9,b7*1.4)
w=A.I()
w.r=D.bqF.gp(0)
c3.dP(u,w)
r.restore()
c3.aH(b9,C.iw(b5,1.1))}else{u=new A.aF(v,B.ag,c0,c0,A.a([],w))
r=11.5-b6*0.8
u.D(new A.aY(-5.2,r))
u.D(new A.c4(0,13.1+b6*2.8,5.2,r))
c3.aH(u,C.iw(b5,1.5))
if(b6>0.6){w=new A.aF(v,B.ag,c0,c0,A.a([],w))
w.D(new A.aY(-4.6,11.8))
w.D(new A.c4(0,15.1+b6*1.4,4.6,11.8))
w.D(new A.c4(0,13.5,-4.6,11.8))
v=B.c.j(0.9)
u=A.I()
u.r=v.gp(0)
c3.aH(w,u)}}if(c5.b>0.2){c3.e3(D.f0N,-1.2,2.2,!1,C.iw(c9.j(0.5),0.8))
c3.e3(D.f0C,2.141592653589793,2.2,!1,C.iw(c9.j(0.5),0.8))}if(n&&c2!==2){c2=c4.c
w=A.I()
w.r=c2.gp(0)
c3.ad(D.ejv,1.7,w)
w=A.I()
w.r=c2.gp(0)
c3.ad(D.ejr,1.7,w)}},
i5h(a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=$.S(),e=new A.p2(),d=A.z8(e,g),a0=a4.a,a1=a4.b,a2=Math.min(a0/450,a1/900),a3=A.I()
a3.sam(A.jv(B.I,new A.t(0,a1*0.46),D.d5k,D.cY_,B.x,g))
d.aP(new A.a3(0,0,0+a0,0+a1),a3)
a3=d.a
J.bl(a3.save())
a3.translate((a0-450*a2)/2,(a1-900*a2)/2)
d.bW(0,a2)
w=new A.e4()
w.cY(8)
for(v=0;v<120;++v){a0=w.af()
a1=w.af()
u=w.af()
t=new A.ao(B.Q,B.M,B.S,B.T,B.R)
t.r=B.c.j(0.2+w.af()*0.5).gp(0)
s=t.G()
a3.drawCircle(a0*450*1.4-90,a1*330-40,0.5+u*0.9,s)
s.delete()}J.bl(a3.save())
a3.translate(200,120)
d.ih(0,-0.5)
a0=A.I()
a1=x.O
a0.sam(A.tt(B.I,230,A.a([D.bfH,B.L],a1),g,B.x,g,g,0))
d.dP(D.f1i,a0)
a3.restore()
a0=A.I()
a0.sam(A.tt(D.a7t,58,A.a([D.biQ,B.L],a1),g,B.x,g,g,0))
d.ad(D.a7t,58,a0)
a0=A.I()
a0.r=D.bep.gp(0)
d.ad(D.a7t,24,a0)
a0=A.I()
a0.r=D.YI.gp(0)
d.ad(D.ehQ,5,a0)
a0=A.I()
a0.r=D.YI.gp(0)
d.ad(D.ehU,3.4,a0)
a0=A.I()
a0.r=D.YI.gp(0)
d.ad(D.ehT,2.4,a0)
for(a0=x.v,r=0;r<3;++r,f=u){u=A.a([],a0)
q=new A.aF(f.r,B.ag,g,g,u)
u.push(new A.aY(-60,420))
for(f=372+r*12,t=60+r*20,p=r*2,o=14-r*3,n=-60;n<=510;n+=8){m=new A.aq(n,f+Math.sin(n/t+p)*o+Math.sin(n/23+r)*3)
u.push(m)
l=q.f
if(l!=null)m.bw(l)
m=q.e
if(m!=null)m.a.delete()
q.e=null}f=new A.aq(510,470)
u.push(f)
t=q.f
if(t!=null)f.bw(t)
f=q.e
if(f!=null)f.a.delete()
q.e=null
f=new A.aq(-60,470)
u.push(f)
t=q.f
if(t!=null)f.bw(t)
f=q.e
if(f!=null)f.a.delete()
q.e=null
f=new A.bs()
u.push(f)
u=q.f
if(u!=null)f.bw(u)
f=q.e
if(f!=null)f.a.delete()
q.e=null
f=[D.bd1,D.beZ,D.bkI][r]
u=$.S()
t=new A.ao(B.Q,B.M,B.S,B.T,B.R)
t.r=f.gp(0)
s=t.G()
f=q.e
a3.drawPath((f==null?q.e=new A.ce(q.gbv().a.snapshot()):f).a,s)
s.delete()}for(k=0;k<4;++k){n=D.cs2[k]
j=384+B.o.F(n,11)
f=n-2
a0=j-24
u=new A.ao(B.Q,B.M,B.S,B.T,B.R)
u.b=B.a9
u.c=2.4
u.r=D.YY.gp(0)
u.d=B.bA
u.e=B.dQ
s=u.G()
a3.drawLine.apply(a3,[n,j,f,a0,s])
s.delete()
f=A.bK(new A.t(f,j-27),11,46)
u=new A.ao(B.Q,B.M,B.S,B.T,B.R)
u.r=D.YY.gp(0)
s=u.G()
a3.drawOval(A.bG(f),s)
s.delete()
a0=A.bK(new A.t(n-12,a0),8,24)
f=new A.ao(B.Q,B.M,B.S,B.T,B.R)
f.r=D.YY.gp(0)
s=f.G()
a3.drawOval(A.bG(a0),s)
s.delete()}for(v=0;v<9;++v){f=B.o.F(v,3)
a0=B.o.F(v,4)
u=new A.ao(B.Q,B.M,B.S,B.T,B.R)
u.r=D.bes.j(0.8).gp(0)
s=u.G()
a3.drawCircle(20+v*52+f*7,400+a0*5,1.2,s)
s.delete()}f=A.I()
f.sam(A.jv(D.egt,D.egv,D.cZT,B.D2,B.x,g))
d.aP(new A.a3(-200,412,650,1300),f)
i=new A.e4()
i.cY(21)
for(v=0;v<260;++v){f=i.af()
j=420+i.af()*480
a0=i.af()
u=j/900+0.4
u=A.bK(new A.t(f*450,j),1+i.af()*2*u,1.5+a0*4*u)
f=i.h4()?B.c:B.w
a0=new A.ao(B.Q,B.M,B.S,B.T,B.R)
a0.r=f.j(0.06+i.af()*0.06).gp(0)
s=a0.G()
a3.drawOval(A.bG(u),s)
s.delete()}J.bl(a3.save())
a3.translate(225,590)
d.p8(0,1,0.34)
f=A.I()
f.sam(A.tt(B.I,250,A.a([D.blA,D.bfk,D.bnq],a1),A.a([0,0.8,1],x.n),B.x,g,g,0))
d.ad(B.I,250,f)
a3.restore()
for(v=0;v<40;++v){n=i.af()*450
j=640+i.af()*260
f=i.af()
a0=A.ar(D.agD,D.bdX,i.af())
a0.toString
for(f=j-(6+f*10),h=-1;h<=1;++h){$.S()
a1=new A.ao(B.Q,B.M,B.S,B.T,B.R)
a1.b=B.a9
a1.c=1.3
a1.r=a0.gp(0)
a1.d=B.bA
a1.e=B.dQ
s=a1.G()
a3.drawLine.apply(a3,[n+h*2,j,n+h*5,f+Math.abs(h)*3,s])
s.delete()}}C.hZ9(d)
for(k=0;k<3;++k)C.i1k(d,D.ayD[k])
C.i19(d,D.ehK)
for(n=118;n<190;n+=11){f=B.o.F(n,3)
a0=B.o.F(n,4)
$.S()
a1=new A.ao(B.Q,B.M,B.S,B.T,B.R)
a1.b=B.a9
a1.c=2.4
a1.r=D.YU.gp(0)
a1.d=B.bA
a1.e=B.dQ
s=a1.G()
a3.drawLine.apply(a3,[n,452+f,n+1,436+a0,s])
s.delete()}d.bo(D.egT,D.eha,C.iw(D.beG,1.6))
a3.restore()
return e.nj()},
hZ9(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=$.S().r,e=x.v,d=new A.aF(f,B.ag,g,g,A.a([],e))
d.D(new A.aY(358,462))
d.D(new A.l_(354,422,370,382,374,332))
d.D(new A.aq(410,332))
d.D(new A.l_(416,382,432,422,428,462))
d.D(new A.bs())
w=A.I()
w.sam(A.jv(new A.t(354,0),new A.t(430,0),D.dsz,U.zp,B.x,g))
a0.aH(d,w)
v=new A.e4()
v.cY(4)
for(w=a0.a,u=0;u<30;++u){t=364+v.af()*56
s=462-v.af()*126
r=v.af()
q=v.af()
p=B.w.j(0.18)
o=new A.ao(B.Q,B.M,B.S,B.T,B.R)
o.b=B.a9
o.c=1.1
o.r=p.gp(0)
o.d=B.bA
o.e=B.dQ
n=o.G()
w.drawLine.apply(w,[t,s,t+r*3-1.5,s+8+q*12,n])
n.delete()}for(m=0;m<6;++m){l=D.d9S[m]
r=l.a
q=392+r*12
p=-l.b
o=q+r*52
k=336+(p*46-8)
r=o+r*42
p=k+(p*34+4)
j=A.a([],e)
i=new A.aF(f,B.ag,g,g,j)
j.push(new A.aY(q,336))
j.push(new A.c4(o,k,r,p))
q=new A.ao(B.Q,B.M,B.S,B.T,B.R)
q.b=B.a9
q.c=8
q.r=D.af3.gp(0)
q.d=B.bA
q.e=B.dQ
n=q.G()
q=i.gbv().a.snapshot()
w.drawPath((i.e=new A.ce(q)).a,n)
n.delete()
for(h=0;h<6;++h){q=v.af()
o=v.af()
k=v.af()
j=new A.ao(B.Q,B.M,B.S,B.T,B.R)
j.r=A.ar(D.bey,D.bkH,v.af()).j(0.92).gp(0)
n=j.G()
w.drawCircle(r+(q*36-18),p+(o*18-14),8+k*7,n)
n.delete()}r+=0
q=new A.ao(B.Q,B.M,B.S,B.T,B.R)
q.b=B.a9
q.c=1.2
q.r=D.YU.gp(0)
q.d=B.bA
q.e=B.dQ
n=q.G()
w.drawLine.apply(w,[r,p+8,r,p+22,n])
n.delete()
p=A.bK(new A.t(r,p+28),13,7)
r=new A.ao(B.Q,B.M,B.S,B.T,B.R)
r.r=D.blS.gp(0)
n=r.G()
w.drawOval(A.bG(p),n)
n.delete()}},
i1k(b3,b4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=null,a4=b4.a,a5=b4.b,a6=b4.c,a7=b4.d,a8=a6*0.5,a9=A.bK(new A.t(a4,a5+2),a8,a6*2.8),b0=B.w.j(0.3),b1=$.S(),b2=A.I()
b2.r=b0.gp(0)
b3.dP(a9,b2)
b1=b1.r
b2=x.v
w=new A.aF(b1,B.ag,a3,a3,A.a([],b2))
a9=a4-a6
b0=a5-a7
w.D(new A.aY(a9,b0))
w.D(new A.aq(a9,a5))
v=a4+a6
w.D(new A.c4(a4,a5+a6*0.22,v,a5))
w.D(new A.aq(v,b0))
w.D(new A.bs())
u=A.I()
u.sam(A.jv(new A.t(a9,0),new A.t(v,0),D.d9Y,U.zp,B.x,a3))
b3.aH(w,u)
t=new A.e4()
t.cY(B.o.V(a4*7))
v=b3.a
J.bl(v.save())
b3.mJ(0,w)
for(s=0;s<40;++s){r=a9+t.af()*a6*2
q=b0+t.af()*a7
u=t.af()
p=t.af()
o=B.w.j(0.14)
n=new A.ao(B.Q,B.M,B.S,B.T,B.R)
n.b=B.a9
n.c=1
n.r=o.gp(0)
n.d=B.bA
n.e=B.dQ
m=n.G()
v.drawLine.apply(v,[r,q,r+4+u*5,q+p*2-1,m])
m.delete()}u=b0+5
p=a6*2
o=D.agz.j(0.75)
n=A.I()
n.r=o.gp(0)
b3.aP(new A.a3(a9,u,a9+p,u+7),n)
for(u=a6/5,o=b0+12,n=b0+20,l=a9+2,k=0;k<B.k.bf(u);++k){j=l+k*10
i=A.a([],b2)
h=new A.aF(b1,B.ag,a3,a3,i)
i.push(new A.aY(j,o))
i.push(new A.aq(j+5,n))
i.push(new A.aq(j+10,o))
i.push(new A.bs())
i=new A.ao(B.Q,B.M,B.S,B.T,B.R)
i.r=D.lv.j(0.85).gp(0)
m=i.G()
i=h.gbv().a.snapshot()
v.drawPath((h.e=new A.ce(i)).a,m)
m.delete()}u=A.a([],b2)
g=new A.aF(b1,B.ag,a3,a3,u)
b1=a5-8
g.D(new A.aY(a9,b1))
for(p/=6,k=0;k<=B.k.bf(p);++k){o=(k&1)===0?0:-5
o=new A.aq(a9+k*6,b1+o)
u.push(o)
n=g.f
if(n!=null)o.bw(n)
o=g.e
if(o!=null)o.a.delete()
g.e=null}b3.aH(g,C.iw(D.agz.j(0.7),1.6))
v.restore()
a9=$.S().r
b1=new A.aF(a9,B.ag,a3,a3,A.a([],b2))
u=a6*0.1
p=a4+u
o=a6*0.28
n=p-o
l=a5+1
b1.D(new A.aY(n,l))
i=a5-a7*0.55
b1.D(new A.aq(n,i))
o=p+o
b1.D(new A.c4(p,a5-a7*0.82,o,i))
b1.D(new A.aq(o,l))
b1.D(new A.bs())
l=A.I()
l.r=D.agK.gp(0)
b3.aH(b1,l)
l=A.I()
l.r=D.agK.gp(0)
b3.ad(new A.t(a4-a6*0.62,a5-a7*0.5),u,l)
l=b4.e
u=b0-l
b1=a6*1.38
o=a4-b1
i=b0+4
p=a4+b1
f=new A.aF(a9,B.ag,a3,a3,A.a([],b2))
f.D(new A.aY(o,i))
n=b0-l*0.55
f.D(new A.c4(a4-a8,n,a4,u))
f.D(new A.c4(a4+a8,n,p,i))
f.D(new A.c4(a4,b0+a6*0.34,o,i))
f.D(new A.bs())
b0=A.I()
n=a6*1.4
b0.sam(A.jv(new A.t(a4-n,0),new A.t(a4+n,0),D.ddn,U.zp,B.x,a3))
b3.aH(f,b0)
J.bl(v.save())
b3.mJ(0,f)
for(a8=p-o,s=0;s<70;++s){e=s/69
b0=Math.sin(e*3.141592653589793)
p=t.af()
n=(t.h4()?B.w:D.be5).j(0.16)
h=new A.ao(B.Q,B.M,B.S,B.T,B.R)
h.b=B.a9
h.c=0.9
h.r=n.gp(0)
h.d=B.bA
h.e=B.dQ
m=h.G()
v.drawLine.apply(v,[a4+(p-0.5)*3,u,o+a8*e,i+b0*a6*0.3,m])
m.delete()}for(k=1;k<5;++k){d=u+l*k/4.6
a0=b1*k/4.6
b0=A.a([],b2)
p=new A.aF(a9,B.ag,a3,a3,b0)
n=d+2
b0.push(new A.aY(a4-a0,n))
b0.push(new A.c4(a4,d+7+k*1.5,a4+a0,n))
b0=B.w.j(0.22)
n=new A.ao(B.Q,B.M,B.S,B.T,B.R)
n.b=B.a9
n.c=1.2
n.r=b0.gp(0)
n.d=B.bA
n.e=B.dQ
m=n.G()
b0=p.gbv().a.snapshot()
v.drawPath((p.e=new A.ce(b0)).a,m)
m.delete()}v.restore()
for(s=0;s<46;++s){e=s/45
a1=o+a8*e
a2=i+Math.sin(e*3.141592653589793)*a6*0.3
b0=t.af()
b1=t.af()
p=new A.ao(B.Q,B.M,B.S,B.T,B.R)
p.b=B.a9
p.c=1.1
p.r=D.bl3.gp(0)
p.d=B.bA
p.e=B.dQ
m=p.G()
v.drawLine.apply(v,[a1,a2,a1+(b0-0.5)*2,a2+3+b1*4,m])
m.delete()}a8=new A.aF(a9,B.ag,a3,a3,A.a([],b2))
a9=u+4
a8.D(new A.aY(a4-2.5,a9))
a8.D(new A.aq(a4,u-7))
a8.D(new A.aq(a4+2.5,a9))
a8.D(new A.bs())
a9=A.I()
a9.r=D.bho.gp(0)
b3.aH(a8,a9)},
i19(d,e){var w,v,u,t,s,r,q,p,o
for(w=e.a,v=e.b,u=v+0,t=v+-16,s=d.a,r=0;r<2;++r){q=w+D.dmp[r]
$.S()
p=new A.ao(B.Q,B.M,B.S,B.T,B.R)
p.b=B.a9
p.c=3
p.r=D.YU.gp(0)
p.d=B.bA
p.e=B.dQ
o=p.G()
s.drawLine.apply(s,[q,u,q,t,o])
o.delete()}u=A.bK(e.a7(0,I.aJT),24,36)
t=$.S()
s=A.I()
s.r=D.bpR.gp(0)
d.dP(u,s)
t=new A.aF(t.r,B.ag,null,null,A.a([],x.v))
s=w-24
u=v-30
t.D(new A.aY(s,u))
t.D(new A.aq(w,v-54))
t.D(new A.aq(w+24,u))
t.D(new A.c4(w,v-24,s,u))
t.D(new A.bs())
u=A.I()
u.r=D.afG.gp(0)
d.aH(t,u)},
i0u(d){switch(B.o.F(d,8)){case 0:return D.aZ1
case 1:return D.aZ_
case 2:return D.aYZ
case 3:return D.aYY
case 4:return D.aZ0
case 5:return D.aZ2
case 6:return D.hnb
default:return D.hna}},
RX(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){var w=new C.bo8()
w.a=n
w.b=q
w.c=g
w.d=r
w.y=h
w.z=i
w.e=t
w.r=o
w.x=f
w.Q=j==null?D.a7u:j
w.as=k==null?D.DJ:k
C.htt(d,e,p,C.i0u(m),w,s,m,l)},
huQ(d,e){return(0.2+0.8*Math.abs(Math.sin(d*10+e)))*(0.55+0.45*Math.sin(d*3.1+e*2))},
bRL:function bRL(){var _=this
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
t2:function t2(d,e,f,g,h,i,j,k,l,m){var _=this
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
bo8:function bo8(){var _=this
_.a=0
_.b=0.25
_.z=_.y=_.x=_.w=_.r=_.f=_.e=_.d=_.c=0
_.as=_.Q=null
_.at=!1},
alq:function alq(){this.b=this.a=null},
aVE:function aVE(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bRD:function bRD(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bRE:function bRE(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bRF:function bRF(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bRG:function bRG(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bRH:function bRH(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bRI:function bRI(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bRJ:function bRJ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bRK:function bRK(){},
bRC:function bRC(d){this.a=d},
afb:function afb(d,e){this.a=d
this.b=e},
ada:function ada(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
Mv(d){var w,v,u,t,s=A.a([],x.u)
for(w=d.f,v=w.length,u=0;u<w.length;w.length===v||(0,A.L)(w),++u){t=w[u]
if(!t.as&&B.a.i(t.b).length!==0)s.push(t)}s=new C.bQm(s)
s.bzx(d)
return s},
Gz(d,e,f,g,h,i,j){var w,v=A.T(g).k("Z<1>")
v=A.df(new A.Z(g,new C.fpJ(f),v),v.k("M.E"))
w=A.C(v,A.a7(v).k("cs.E"))
B.d.dZ(w,d)
if(w.length===0)return null
v=A.a([f],x.s)
B.d.v(v,A.d_(w,0,A.dA(3,"count",x.S),A.T(w).c))
B.d.dZ(v,d)
return new C.ln(e,v,B.d.cu(v,f),h,i,"tree",j)},
ilL(c5,c6,c7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3=null,b4="tf",b5="child",b6="children",b7="grandfather",b8="grandmother",b9="grandparent",c0=x.N,c1=A.U(c0,x.cg),c2=new C.fZG(c1),c3=x.s,c4=A.a([],c3)
for(w=c5.b,v=w.length,u=0;u<w.length;w.length===v||(0,A.L)(w),++u)c4.push(B.a.i(w[u].b))
c4=A.k5(c4,c0)
t=A.C(c4,A.a7(c4).k("cs.E"))
c4=A.a([],c3)
for(v=w.length,u=0;u<w.length;w.length===v||(0,A.L)(w),++u){s=B.a.i(w[u].x)
if(s.length!==0)c4.push(s)}c4=A.k5(c4,c0)
r=A.C(c4,A.a7(c4).k("cs.E"))
c4=A.a([],c3)
for(v=w.length,u=0;u<w.length;w.length===v||(0,A.L)(w),++u){s=B.a.i(w[u].z)
if(s.length!==0)c4.push(s)}c4=A.k5(c4,c0)
q=A.C(c4,A.a7(c4).k("cs.E"))
for(c4=w.length,v=A.T(t).k("Z<1>"),s=v.k("M.E"),p=A.T(w).k("Z<1>"),o=p.k("M.E"),n=x.S,u=0;u<w.length;w.length===c4||(0,A.L)(w),++u){m=w[u]
l=B.a.i(m.b)
k=m.d
j=k==null
if(j)i=b3
else{h=c5.c
h===$&&A.c()
i=h.h(0,k)}if(i!=null){h=i.c
if(h===D.w9)g="father"
else g=h===D.oe?"mother":"parent"
h=B.a.i(i.b)
f=A.C(new A.Z(t,new C.fZI(l),v),s)
e=h+" is the "+g+" of "+l
c2.$2("parent",C.Gz(c6,"Who is the "+g+" of "+l+"?",h,f,e+".",e+". A family is a chain, and each person is a link.",20))
if(c7){d=A.C(new A.Z(w,new C.fZJ(i,m),p),o)
B.d.dZ(d,c6)
c2.$2(b4,new C.ln("True or false: "+h+" is the "+g+" of "+l+".",D.azE,0,"Yes, "+h+" is the "+g+" of "+l+".","",b4,15))
if(d.length!==0)c2.$2(b4,new C.ln("True or false: "+B.a.i(B.d.gI(d).b)+" is the "+g+" of "+l+".",D.azE,1,"No, the "+g+" of "+l+" is "+h+".","",b4,15))}}a0=c5.FQ(m)
h=a0.length
if(h!==0){a1=a0[c6.ap(h)]
h=B.a.i(a1.b)
f=A.C(new A.Z(t,new C.fZK(l,a0,c5),v),s)
e=a1.c
if(e===D.w9)e="son"
else e=e===D.oe?"daughter":b5
a2=l+" has "
a3=a0.length
a4=a3===1?b5:b6
c2.$2(b5,C.Gz(c6,"Which of these people is a child of "+l+"?",h,f,h+" is the "+e+" of "+l+".",a2+a3+" "+a4+", and "+h+" is one of them.",20))
h=a0.length
a5=A.eE([h+1,h+2,Math.max(0,h-1)],n)
a5.W(0,a0.length)
h=a0.length
a4=A.a([],c3)
for(f=a5.$ti,e=new A.mr(a5,a5.r,f.k("mr<1>")),e.c=a5.e,f=f.c;e.C();){a3=e.d
a4.push(A.w(a3==null?f.a(a3):a3))}f=a0.length
e=""+f
f=f===1
a3=f?b5:b6
f=f?b5:b6
c2.$2("count",C.Gz(c6,"How many children does "+l+" have?",""+h,a4,a2+e+" "+a3+".","Count them with me: "+l+" has "+e+" "+f+".",15))
if(a0.length>=2&&a0[0].Q!==a0[1].Q){h=B.a.i(B.d.gI(a0).b)
f=A.a([],c3)
for(e=A.T(a0),a2=e.k("jd<1>"),a3=new A.jd(a0,1,b3,a2),a3.od(a0,1,b3,e.c),a3=new A.bR(a3,a3.gL(0),a2.k("bR<ak.E>")),a2=a2.k("ak.E");a3.C();){e=a3.d
f.push(B.a.i((e==null?a2.a(e):e).b))}c2.$2("oldest",C.Gz(c6,"Who is the oldest child of "+l+"?",h,f,B.a.i(B.d.gI(a0).b)+" was born first.","The first born of "+l+" is "+B.a.i(B.d.gI(a0).b)+". The eldest child often helps to guide the younger ones.",20))}}a6=c5.aqo(m)
if(a6!=null){h=B.a.i(a6.b)
f=A.C(new A.Z(t,new C.fZL(l),v),s)
e=l+" is married to "+h
c2.$2("spouse",C.Gz(c6,"Who is "+l+" married to?",h,f,e+".",e+". When two people marry, two families become one.",20))}if(j)i=b3
else{j=c5.c
j===$&&A.c()
i=j.h(0,k)}a7=b3
if(!(i==null)){k=i.d
if(!(k==null)){j=c5.c
j===$&&A.c()
k=j.h(0,k)
a7=k}}if(a7!=null){k=B.a.i(a7.b)
j=A.C(new A.Z(t,new C.fZM(l),v),s)
h=k+" is the "
f=a7.c
e=f===D.w9
if(e)a2=b7
else a2=f===D.oe?b8:b9
if(e)f=b7
else f=f===D.oe?b8:b9
c2.$2("grand",C.Gz(c6,"Who is the grandparent of "+l+"?",k,j,h+a2+" of "+l+".",h+f+" of "+l+", two steps up the tree.",20))}a8=c5.aLC(m)
k=a8.length
if(k!==0){k=B.a.i(a8[c6.ap(k)].b)
j=A.C(new A.Z(t,new C.fZN(l,a8,c5),v),s)
h=k+" and "+l
c2.$2("sibling",C.Gz(c6,"Who is a brother or sister of "+l+"?",k,j,h+" share the same parent.",h+" are brother and sister: the same roots, two branches.",20))}k=B.a.i(m.x)
if(k.length!==0){j=A.C(r,c0)
B.d.v(j,D.cKE)
h=l+" was born in "+k
c2.$2("place",C.Gz(c6,"Where was "+l+" born?",k,j,h+".",h+". Every one of us comes from a place.",20))}k=B.a.i(m.z)
if(k.length!==0){j=A.C(q,c0)
B.d.v(j,D.d_V)
h=l+" works as "+k
f=h+"."
c2.$2("job",C.Gz(c6,"What work does "+l+" do?",k,j,f,h+". Work is how we serve the family and the village.",20))
h=A.a([],c3)
for(j=w.length,a9=0;a9<w.length;w.length===j||(0,A.L)(w),++a9){b0=w[a9]
if(B.a.i(b0.z).toLowerCase()!==k.toLowerCase())h.push(B.a.i(b0.b))}c2.$2("who",C.Gz(c6,"Who works as "+k+"?",l,h,f,"Remember: "+l+" works as "+k+".",20))}k=A.ag("(1[6-9]\\d\\d|20\\d\\d)",!0,!1,!1,!1).cC(m.w)
b1=k==null?b3:k.b[1]
if(b1!=null){b2=A.jI(b1,b3,b3)
c2.$2("year",C.Gz(c6,"In which year was "+l+" born?",b1,A.a([""+(b2+2),""+(b2-3),""+(b2+5),""+(b2-1)],c3),l+" was born in "+b1+".",l+" was born in the year "+b1+".",25))}}return c1},
bD3(d,e,f,g){var w,v,u,t,s,r,q,p,o,n={},m=C.Mv(d),l=new A.e4()
l.cY(f)
w=C.ilL(m,l,g)
for(v=new A.dr(w,w.r,w.e);v.C();)J.hdu(v.d,l)
v=A.a7(w).k("cx<1>")
u=A.C(new A.cx(w,v),v.k("M.E"))
B.d.dZ(u,l)
t=A.a([],x.J)
s=A.aX(x.N)
n.a=0
for(;;){if(!(t.length<e&&B.d.b3(u,new C.fCk(n,w))))break
for(v=u.length,r=0;r<u.length;u.length===v||(0,A.L)(u),++r){q=u[r]
if(t.length>=e)break
p=w.h(0,q)
p.toString
if(J.ad(p)>n.a){p=w.h(0,q)
p.toString
p=s.M(0,J.r(p,n.a).a)}else p=!1
if(p){p=w.h(0,q)
p.toString
t.push(J.r(p,n.a))}}++n.a}v=t.length
if(v<e){v=A.C(D.axE,x.df)
B.d.dZ(v,l)
for(p=v.length,r=0;r<v.length;v.length===p||(0,A.L)(v),++r){o=v[r]
if(t.length>=e)break
t.push(C.htA(o,l))}}else if(!g&&v>3){o=C.htA(D.axE[l.ap(14)],l)
t[t.length-1-l.ap(3)]=o}return t},
htA(d,e){var w=d.b,v=w[d.c]
w=A.C(w,x.N)
B.d.dZ(w,e)
return new C.ln(d.a,w,B.d.cu(w,v),d.d,d.e,d.f,d.r)},
hyh(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=C.Mv(a2),a1=new A.e4()
a1.cY(a3)
w=A.a([],x.ar)
v=x.u
u=A.a([],v)
for(t=a0.b,s=t.length,r=0;r<t.length;t.length===s||(0,A.L)(t),++r){q=t[r]
if(a0.FQ(q).length>=2)u.push(q)}B.d.dZ(u,a1)
for(s=u.length,p=x.t,o=x.s,r=0;r<u.length;u.length===s||(0,A.L)(u),++r){n=u[r]
m=a0.FQ(n)
l=A.T(m)
k=new A.jd(m,0,5,l.k("jd<1>"))
k.od(m,0,5,l.c)
j=k.dm(0)
if(new A.N(j,new C.fQv(),A.T(j).k("N<1,G>")).fJ(0).a<j.length)continue
m=B.a.i(n.b)
l=A.a([],o)
for(k=j.length,i=0;i<j.length;j.length===k||(0,A.L)(j),++i)l.push(B.a.i(j[i].b))
k=A.a([],p)
for(h=0;h<j.length;++h)k.push(h)
g=A.a([],p)
for(f=j.length,i=0;i<j.length;j.length===f||(0,A.L)(j),++i)g.push(C.aRp(a0,j[i]))
w.push(new C.atp("The children of "+m,"Tap two people to swap them. Put them in a line from the oldest to the youngest.",g,l,k))
if(w.length>=4)return w}u=x.S
e=A.U(u,x.do)
for(s=t.length,r=0;r<t.length;t.length===s||(0,A.L)(t),++r){q=t[r]
J.ca(e.c3(0,a0.alT(q),new C.fQw()),q)}if(e.a>=2&&w.length<4){t=e.$ti.k("cx<1>")
d=A.C(new A.cx(e,t),t.k("M.E"))
B.d.ff(d)
v=A.a([],v)
for(u=A.d_(d,0,A.dA(5,"count",u),A.T(d).c),t=u.$ti,u=new A.bR(u,u.gL(0),t.k("bR<ak.E>")),t=t.k("ak.E");u.C();){s=u.d
s=e.h(0,s==null?t.a(s):s)
s.toString
m=J.cD(s)
m.dZ(s,a1)
v.push(m.gI(s))}u=A.a([],o)
for(t=v.length,r=0;r<v.length;v.length===t||(0,A.L)(v),++r)u.push(B.a.i(v[r].b))
t=A.a([],p)
for(h=0;h<v.length;++h)t.push(h)
s=A.a([],p)
for(p=v.length,r=0;r<v.length;v.length===p||(0,A.L)(v),++r)s.push(C.aRp(a0,v[r]))
w.push(new C.atp("Which generation comes first?","Tap two people to swap them. Put the eldest generation first and the youngest last.",s,u,t))}return w},
aPT(d){return B.d.ang(D.aA7,new C.fyL(d))},
ibW(d){return A.pV(new A.Z(D.aA7,new C.fF5(d),x.av))},
bRa(d){return C.hHC(d)},
hHC(d){var w=0,v=A.j(x.S),u,t=2,s=[],r,q,p,o
var $async$bRa=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.az(),$async$bRa)
case 7:r=f
q=B.a.i(d)
q=A.eC(J.r(r.a,"ngmy_family_stars_v1_"+q.toLowerCase()))
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
return A.i($async$bRa,v)},
Bu(d,e){return C.hHz(d,e)},
hHz(d,e){var w=0,v=A.j(x.S),u,t=2,s=[],r,q,p,o,n,m
var $async$Bu=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.az(),$async$Bu)
case 7:r=g
p=B.a.i(d)
o=A.eC(J.r(r.a,"ngmy_family_stars_v1_"+p.toLowerCase()))
if(o==null)o=0
q=o+(e<0?0:e)
w=8
return A.b(r.au("Int","ngmy_family_stars_v1_"+p.toLowerCase(),q),$async$Bu)
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
return A.i($async$Bu,v)},
bR9(d,e,f){return C.hHA(d,e,f)},
hHA(d,e,f){var w=0,v=A.j(x.S),u,t=2,s=[],r,q,p,o
var $async$bR9=A.e(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.az(),$async$bR9)
case 7:r=h
q=B.a.i(d)
q=A.eC(J.r(r.a,"ngmy_family_best_v1_"+q.toLowerCase()+"_"+e+"_"+f))
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
return A.i($async$bR9,v)},
Bv(d,e,f,g){return C.hHB(d,e,f,g)},
hHB(d,e,f,g){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n,m
var $async$Bv=A.e(function(h,i){if(h===1){s.push(i)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.az(),$async$Bv)
case 7:r=i
p=B.a.i(d)
o=A.eC(J.r(r.a,"ngmy_family_best_v1_"+p.toLowerCase()+"_"+e+"_"+f))
q=o==null?0:o
w=g>q?8:9
break
case 8:w=10
return A.b(r.au("Int","ngmy_family_best_v1_"+p.toLowerCase()+"_"+e+"_"+f,g),$async$Bv)
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
return A.i($async$Bv,v)},
bFk(d,e,f){var w
if(f<=0)return 0
w=d===f?20:0
return d*5+w+Math.min(e,8)},
h0G(d,e,f,g){return new C.ak5(g,d==null?A.a(["","","",""],x.s):d,e,f)},
hFI(d){var w,v,u,t=d.h(0,"q")
t=J.k(t==null?"":t)
w=A.a([],x.s)
v=x.j
u=J.aW(v.b(d.h(0,"a"))?v.a(d.h(0,"a")):B.cv)
while(u.C())w.push(J.k(u.gS(u)))
u=x.N
w=A.d_(w,0,A.dA(4,"count",x.S),u).dm(0)
B.d.v(w,A.bZ(Math.max(0,4-(v.b(d.h(0,"a"))?J.ad(v.a(d.h(0,"a"))):0)),"",!1,u))
v=A.aK(d.h(0,"c"))
v=v==null?null:B.k.N(v)
v=B.o.E(v==null?0:v,0,3)
u=A.aK(d.h(0,"s"))
u=u==null?null:B.k.N(u)
return C.h0G(w,v,B.o.E(u==null?20:u,5,60),t)},
hex(d){var w,v,u,t,s,r,q=J.a6(d),p=q.h(d,"id")
p=J.k(p==null?"":p)
w=q.h(d,"title")
w=J.k(w==null?"":w)
v=A.a([],x.b)
u=x.j
q=J.aW(u.b(q.h(d,"qs"))?u.a(q.h(d,"qs")):B.cv)
u=x.f
t=x.N
s=x.z
while(q.C()){r=q.gS(q)
if(u.b(r))v.push(C.hFI(A.a2(r,t,s)))}return new C.Mf(p,w,v)},
h8Y(d){var w,v=A.a([],x.c)
for(w=J.aW(d.z);w.C();)v.push(C.hex(w.gS(w)))
return v},
aRp(d,e){var w=e.c===D.oe
if(d.alT(e)===0&&d.FQ(e).length!==0)return w?0:1
if(d.FQ(e).length!==0||d.aqo(e)!=null)return w?2:3
return w?4:5},
hzn(a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=C.Mv(a4),a3=new A.e4()
a3.cY(a5)
w=A.a([],x.dT)
v=a2.b
u=A.C(v,x.P)
B.d.dZ(u,a3)
t=x.s
s=A.a([],t)
for(r=v.length,q=0;q<v.length;v.length===r||(0,A.L)(v),++q)s.push(B.a.i(v[q].b))
for(v=u.length,r=x.N,p=x.ec,o=x.cc,n=o.k("M.E"),q=0;q<u.length;u.length===v||(0,A.L)(u),++q){m=u[q]
l=A.a([],t)
k=m.d
if(k==null)j=null
else{i=a2.c
i===$&&A.c()
j=i.h(0,k)}h=a2.FQ(m)
g=a2.aqo(m)
f=a2.aLC(m)
k=B.a.i(m.x)
if(k.length!==0)l.push("I was born in "+k+".")
k=B.a.i(m.z)
if(k.length!==0)l.push("I work as "+k+".")
k=A.ag("(1[6-9]\\d\\d|20\\d\\d)",!0,!1,!1,!1).cC(m.w)
e=k==null?null:k.b[1]
if(e!=null)l.push("I was born in the year "+e+".")
k=f.length
if(k!==0){i=k===1?"brother or sister":"brothers and sisters"
l.push("I have "+k+" "+i+".")}k=h.length
if(k!==0){i=k===1?"child":"children"
l.push("I have "+k+" "+i+".")}if(g!=null)l.push("I am married to "+B.a.i(g.b)+".")
if(h.length!==0){k=m.c
if(k===D.w9)k="father"
else k=k===D.oe?"mother":"parent"
l.push("I am the "+k+" of "+B.a.i(B.d.gI(h).b)+".")}if(j!=null){k=j.c
if(k===D.w9)k="father"
else k=k===D.oe?"mother":"parent"
l.push("My "+k+" is "+B.a.i(j.b)+".")}if(l.length<3)continue
B.d.dZ(l,a3)
B.d.aY(l,new C.h_5())
d=B.a.i(m.b)
a0=A.C(new A.Z(s,new C.h_6(d),o),n)
B.d.dZ(a0,a3)
k=A.a([d],t)
i=A.T(a0)
a1=new A.jd(a0,0,3,i.k("jd<1>"))
a1.od(a0,0,3,i.c)
B.d.v(k,a1)
B.d.dZ(k,a3)
a1=C.aRp(a2,m)
i=new A.jd(l,0,4,p)
i.od(l,0,4,r)
w.push(new C.b9E(d,a1,i.dm(0),k))
if(w.length>=5)break}return w},
hra(d){return B.a.t(d,"married to")||B.a.t(d," of ")||B.a.a0(d,"My ")?1:0},
hyt(a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=C.Mv(a4),a3=new A.e4()
a3.cY(a5)
w=A.a([],x.gy)
v=x.u
u=A.a([],v)
for(t=a2.b,s=t.length,r=0;r<t.length;t.length===s||(0,A.L)(t),++r){q=t[r]
if(a2.FQ(q).length>=2)u.push(q)}B.d.dZ(u,a3)
for(s=u.length,p=x.t,o=x.s,n=x.P,m=x.fT,r=0;r<u.length;u.length===s||(0,A.L)(u),++r){l=u[r]
k=a2.FQ(l)
j=A.T(k)
i=new A.jd(k,0,4,j.k("jd<1>"))
i.od(k,0,4,j.c)
h=i.dm(0)
i=A.a([],v)
for(k=t.length,j=l.a,g=0;g<t.length;t.length===k||(0,A.L)(t),++g){q=t[g]
if(q.a!==j&&!B.d.b3(h,new C.fR0(q))&&q.d!==j)i.push(q)}B.d.dZ(i,a3)
k=i.length
if(k===0)continue
k=Math.min(2,k)
j=new A.jd(i,0,k,m)
j.od(i,0,k,n)
f=j.dm(0)
j=B.a.i(l.b)
k=C.aRp(a2,l)
i=A.a([],o)
for(e=h.length,g=0;g<h.length;h.length===e||(0,A.L)(h),++g)i.push(B.a.i(h[g].b))
e=A.a([],p)
for(d=h.length,g=0;g<h.length;h.length===d||(0,A.L)(h),++g)e.push(C.aRp(a2,h[g]))
d=A.a([],o)
for(a0=f.length,g=0;g<f.length;f.length===a0||(0,A.L)(f),++g)d.push(B.a.i(f[g].b))
a0=A.a([],p)
for(a1=f.length,g=0;g<f.length;f.length===a1||(0,A.L)(f),++g)a0.push(C.aRp(a2,f[g]))
w.push(new C.a9j(j,k,i,e,d,a0))
if(w.length>=3)break}return w},
ln:function ln(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
bQm:function bQm(d){this.b=d
this.c=$},
bQn:function bQn(){},
bQo:function bQo(d){this.a=d},
fpJ:function fpJ(d){this.a=d},
fZG:function fZG(d){this.a=d},
fZH:function fZH(){},
fZI:function fZI(d){this.a=d},
fZJ:function fZJ(d,e){this.a=d
this.b=e},
fZK:function fZK(d,e,f){this.a=d
this.b=e
this.c=f},
fZF:function fZF(d,e){this.a=d
this.b=e},
fZL:function fZL(d){this.a=d},
fZM:function fZM(d){this.a=d},
fZN:function fZN(d,e,f){this.a=d
this.b=e
this.c=f},
fZE:function fZE(d,e){this.a=d
this.b=e},
fCk:function fCk(d,e){this.a=d
this.b=e},
atp:function atp(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fQv:function fQv(){},
fQw:function fQw(){},
zg:function zg(d,e,f){this.a=d
this.b=e
this.c=f},
fyL:function fyL(d){this.a=d},
fF5:function fF5(d){this.a=d},
ak5:function ak5(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bLm:function bLm(){},
Mf:function Mf(d,e,f){this.a=d
this.b=e
this.c=f},
b9E:function b9E(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.e=g},
h_5:function h_5(){},
h_6:function h_6(d){this.a=d},
a9j:function a9j(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fR0:function fR0(d){this.a=d},
bgS:function bgS(d,e,f){var _=this
_.a=d
_.b=e
_.c=f
_.d=-0.05
_.f=_.e=!1
_.r=0},
af9:function af9(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=1},
ajk:function ajk(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
ajl:function ajl(d,e,f,g,h){var _=this
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
_.bx$=g
_.a9$=h
_.c=_.a=null},
bJA:function bJA(d){this.a=d},
bJv:function bJv(){},
bJB:function bJB(){},
bJt:function bJt(){},
bJu:function bJu(){},
bJz:function bJz(d){this.a=d},
bJw:function bJw(d,e){this.a=d
this.b=e},
bJy:function bJy(d,e){this.a=d
this.b=e},
bJx:function bJx(d,e){this.a=d
this.b=e},
bJs:function bJs(d){this.a=d},
bc0:function bc0(d,e){this.b=d
this.a=e},
Q8:function Q8(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aAM:function aAM(d,e,f){this.b=d
this.c=e
this.a=f},
azc:function azc(d,e,f){this.a=d
this.b=e
this.c=f},
au0:function au0(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
au1:function au1(d,e,f){var _=this
_.d=$
_.y=_.x=_.w=_.r=_.f=_.e=0
_.Q=_.z=$
_.as=d
_.at=""
_.ax=-1
_.ch=_.ay=!1
_.cO$=e
_.b7$=f
_.c=_.a=null},
cno:function cno(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cnp:function cnp(d){this.a=d},
cnn:function cnn(d){this.a=d},
cnq:function cnq(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
cnr:function cnr(){},
cns:function cns(d,e){this.a=d
this.b=e},
cnt:function cnt(){},
cnu:function cnu(d){this.a=d},
cnk:function cnk(d){this.a=d},
cnl:function cnl(d,e){this.a=d
this.b=e},
cnm:function cnm(d,e,f){this.a=d
this.b=e
this.c=f},
cnf:function cnf(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cnh:function cnh(d,e){this.a=d
this.b=e},
cni:function cni(d,e){this.a=d
this.b=e},
cng:function cng(d,e){this.a=d
this.b=e},
cne:function cne(){},
cnj:function cnj(){},
bbw:function bbw(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.a=h},
cMM:function cMM(){},
axX:function axX(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
axY:function axY(d){var _=this
_.d=$
_.e=0
_.f=1
_.y=_.x=_.w=_.r=0
_.z=d
_.Q=-1
_.ax=_.at=_.as=!1
_.ay=0
_.c=_.a=_.ch=null},
cCj:function cCj(d){this.a=d},
cCi:function cCi(d){this.a=d},
cCr:function cCr(d,e){this.a=d
this.b=e},
cCs:function cCs(d,e){this.a=d
this.b=e},
cCt:function cCt(d){this.a=d},
cCq:function cCq(d){this.a=d},
cCu:function cCu(d){this.a=d},
cCv:function cCv(d,e){this.a=d
this.b=e},
cCw:function cCw(){},
cCx:function cCx(d){this.a=d},
cCl:function cCl(d){this.a=d},
cCm:function cCm(d,e){this.a=d
this.b=e},
cCk:function cCk(d,e){this.a=d
this.b=e},
cCn:function cCn(){},
cCo:function cCo(){},
cCp:function cCp(d,e){this.a=d
this.b=e},
ayY:function ayY(){},
aGc:function aGc(){},
h6Q(d){var w=d.a,v=d.b,u=Math.min(w/450,v/900)
return new A.bqq((w-450*u)/2,(v-900*u)/2,u)},
aeY:function aeY(){},
f2t:function f2t(d){this.a=d},
aK0:function aK0(d){var _=this
_.a=d
_.b=null
_.c=""
_.d=0},
fcz:function fcz(d){this.a=d},
alg:function alg(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
alh:function alh(d,e,f,g,h,i,j){var _=this
_.e=_.d=$
_.f=d
_.r=$
_.w=e
_.z=_.y=_.x=0
_.at=_.as=_.Q=!1
_.ay=_.ax=-9
_.pY$=f
_.LG$=g
_.amp$=h
_.bx$=i
_.a9$=j
_.c=_.a=null},
bR8:function bR8(d){this.a=d},
bR7:function bR7(){},
bR5:function bR5(d){this.a=d},
bR3:function bR3(){},
bR4:function bR4(d){this.a=d},
bR0:function bR0(d,e){this.a=d
this.b=e},
bR1:function bR1(){},
bR2:function bR2(d){this.a=d},
bR6:function bR6(d,e){this.a=d
this.b=e},
bR_:function bR_(d){this.a=d},
bs6:function bs6(d,e){this.b=d
this.a=e},
f2u:function f2u(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
f2v:function f2v(d,e,f){this.a=d
this.b=e
this.c=f},
f2w:function f2w(d,e,f){this.a=d
this.b=e
this.c=f},
f2x:function f2x(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
f2y:function f2y(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
f2z:function f2z(){},
ale:function ale(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
alf:function alf(d,e,f,g,h,i,j){var _=this
_.d=$
_.e=d
_.x=_.w=_.r=_.f=0
_.y=-1
_.Q=_.z=$
_.as=e
_.ch=_.ay=_.ax=_.at=!1
_.cx=_.CW=-9
_.pY$=f
_.LG$=g
_.amp$=h
_.bx$=i
_.a9$=j
_.c=_.a=null},
bQM:function bQM(){},
bQX:function bQX(d,e){this.a=d
this.b=e},
bQY:function bQY(d){this.a=d},
bQZ:function bQZ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bQT:function bQT(){},
bQS:function bQS(d,e){this.a=d
this.b=e},
bQU:function bQU(d,e){this.a=d
this.b=e},
bQV:function bQV(){},
bQW:function bQW(d){this.a=d},
bQO:function bQO(d){this.a=d},
bQP:function bQP(d){this.a=d},
bQQ:function bQQ(d){this.a=d},
bQN:function bQN(d,e){this.a=d
this.b=e},
bQR:function bQR(d){this.a=d},
biH:function biH(d,e){this.b=d
this.a=e},
dnT:function dnT(){},
a1n:function a1n(d,e){this.a=d
this.b=e},
ala:function ala(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
alb:function alb(d,e,f,g,h,i){var _=this
_.f=_.e=_.d=$
_.r=d
_.w=-1
_.at=_.as=_.z=_.y=_.x=0
_.ch=_.ay=_.ax=!1
_.cy=_.cx=_.CW=0
_.db=2.6
_.pY$=e
_.LG$=f
_.amp$=g
_.bx$=h
_.a9$=i
_.c=_.a=null},
bQy:function bQy(d){this.a=d},
bQx:function bQx(){},
bQw:function bQw(){},
bQq:function bQq(){},
bQr:function bQr(){},
bQv:function bQv(d,e,f){this.a=d
this.b=e
this.c=f},
bQu:function bQu(d){this.a=d},
bQs:function bQs(d,e){this.a=d
this.b=e},
bQt:function bQt(d){this.a=d},
bi6:function bi6(d,e){this.b=d
this.a=e},
aAP:function aAP(){},
bfE:function bfE(){},
aAR:function aAR(){},
bfF:function bfF(){},
aAS:function aAS(){},
bfG:function bfG(){},
uk(d,e,f,g,h){var w,v,u=null,t=A.n(18),s=A.a([],x.V)
s.push(new A.ac(0,B.G,f.j(0.4),B.j1,14))
w=x.p
v=A.a([],w)
if(g!=null)B.d.v(v,A.a([A.X(g,h,u,u,u,20),B.ac],w))
v.push(A.d(d,u,u,u,u,u,u,A.l(u,u,h,u,u,u,u,u,u,u,u,15,u,u,B.u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u))
return A.aB(u,A.p(u,A.B(v,B.m,u,B.e,B.O,0,u,u),B.f,u,u,new A.o(f,u,u,t,s,u,B.n),u,u,u,u,B.NH,u,u,u),B.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,e,u,u,u,u,u,u,!1,B.a3)},
hfl(d,e,f,g,h,i,j){return new C.alc(i,h,d,j,e,f,g,null)},
a5Q:function a5Q(d,e){this.c=d
this.a=e},
bie:function bie(d){this.a=d},
tr:function tr(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bQp:function bQp(d){this.a=d},
I_:function I_(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
Vx:function Vx(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bl_:function bl_(d,e){var _=this
_.d=$
_.e=0
_.f=d
_.r=e
_.c=_.a=null},
dYA:function dYA(d,e){this.a=d
this.b=e},
dYB:function dYB(d){this.a=d},
dYC:function dYC(d,e){this.a=d
this.b=e},
dYy:function dYy(d){this.a=d},
dYz:function dYz(d){this.a=d},
dYx:function dYx(d){this.a=d},
dYv:function dYv(d){this.a=d},
dYw:function dYw(d){this.a=d},
dYu:function dYu(d,e){this.a=d
this.b=e},
dYD:function dYD(d){this.a=d},
dYE:function dYE(d,e){this.a=d
this.b=e},
dYF:function dYF(d,e){this.a=d
this.b=e},
dYG:function dYG(d,e){this.a=d
this.b=e},
dYJ:function dYJ(d,e){this.a=d
this.b=e},
dYK:function dYK(d,e){this.a=d
this.b=e},
dYL:function dYL(d,e){this.a=d
this.b=e},
dYM:function dYM(d,e){this.a=d
this.b=e},
dYN:function dYN(d,e){this.a=d
this.b=e},
dYO:function dYO(d,e,f){this.a=d
this.b=e
this.c=f},
dYP:function dYP(d,e){this.a=d
this.b=e},
dYQ:function dYQ(d,e){this.a=d
this.b=e},
dYH:function dYH(d){this.a=d},
dYI:function dYI(d){this.a=d},
a_e:function a_e(d,e){this.a=d
this.b=e},
alc:function alc(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
ald:function ald(d){var _=this
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
bQK:function bQK(d){this.a=d},
bQL:function bQL(d){this.a=d},
bQJ:function bQJ(d){this.a=d},
bQA:function bQA(d){this.a=d},
bQB:function bQB(d){this.a=d},
bQz:function bQz(d){this.a=d},
bQG:function bQG(d,e,f){this.a=d
this.b=e
this.c=f},
bQH:function bQH(d){this.a=d},
bQD:function bQD(d,e){this.a=d
this.b=e},
bQE:function bQE(d,e,f){this.a=d
this.b=e
this.c=f},
bQI:function bQI(){},
bQF:function bQF(d,e){this.a=d
this.b=e},
bQC:function bQC(d){this.a=d},
Tb:function Tb(d,e){this.c=d
this.a=e},
al9:function al9(d){var _=this
_.e=_.d=$
_.f=d
_.c=_.a=null},
bQa:function bQa(d){this.a=d},
bQb:function bQb(d){this.a=d},
bQl:function bQl(){},
bQk:function bQk(d,e,f){this.a=d
this.b=e
this.c=f},
bQf:function bQf(d,e){this.a=d
this.b=e},
bQe:function bQe(d,e){this.a=d
this.b=e},
bQg:function bQg(d){this.a=d},
bQh:function bQh(d,e){this.a=d
this.b=e},
bQi:function bQi(d,e){this.a=d
this.b=e},
bQd:function bQd(d,e){this.a=d
this.b=e},
bQj:function bQj(d,e,f){this.a=d
this.b=e
this.c=f},
bQc:function bQc(d,e){this.a=d
this.b=e},
ian(a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=null,a3="(1[5-9]\\d\\d|20\\d\\d)",a4=C.aid(a6),a5=a4.length
if(a5===0)return""
w=A.U(x.N,x.P)
for(v=0;v<a4.length;a4.length===a5||(0,A.L)(a4),++v){u=a4[v]
w.n(0,u.a,u)}t=A.bC(new A.V(Date.now(),0,!1))
s=new C.fBR(w,a4)
a5=a4.length
r='Family tree "'+a6.b+'" ('+a5+" people):\n"
for(q=A.T(a4),p=q.k("Z<1>"),q=q.k("cQ<1,m>"),o=q.k("M.E"),n=x.s,v=0;v<a4.length;a4.length===a5||(0,A.L)(a4),++v){u=a4[v]
m=A.a([],n)
l=u.c
if(l!==D.yC)m.push(l===D.w9?"male":"female")
l=u.w
k=A.ag(a3,!0,!1,!1,!1).cC(l)
j=k==null?a2:k.b[1]
k=u.y
i=A.ag(a3,!0,!1,!1,!1).cC(k)
h=i==null?a2:i.b[1]
l=B.a.i(l)
i=l.length===0
if(!i){g=B.a.i(u.x)
g=g.length!==0?" in "+g:""
m.push("born "+l+g)}if(i&&B.a.i(u.x).length!==0)m.push("from "+B.a.i(u.x))
l=B.a.i(k)
if(l.length!==0)m.push("died "+l)
l=j!=null
if(l&&h==null)m.push("about "+(t-A.jI(j,a2,a2))+" years old")
if(l&&h!=null)m.push("lived about "+(A.jI(h,a2,a2)-A.jI(j,a2,a2))+" years")
l=B.a.i(u.z)
if(l.length!==0)m.push("work: "+l)
f=s.$1(u)
if(f!=null)m.push("married to "+w.h(0,f).b)
e=u.d
if(e!=null&&w.aj(0,e)&&e!==f){l=w.h(0,e)
l.toString
d=s.$1(l)
l=w.h(0,e).b
k=d!=null&&d!==u.a?" and "+w.h(0,d).b:""
m.push("child of "+l+k)}a0=A.C(new A.cQ(new A.Z(a4,new C.fBP(u,f),p),new C.fBQ(),q),o)
if(a0.length!==0)m.push("children: "+B.d.aG(a0,", "))
l=m.length===0?"":" \u2014 "+B.d.aG(m,"; ")
l=r+("- "+u.b+l)
a1=B.a.i(u.r)
r=a1.length
if(r!==0){l+=". Notes: "+(r>600?B.a.ar(a1,0,600)+"\u2026":a1)
r=l}else r=l
r+="\n"}return B.a.i(r.charCodeAt(0)==0?r:r)},
iao(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=C.aid(a0),d=e.length
if(d===0)return""
w=x.N
v=A.U(w,x.P)
for(u=0;t=e.length,u<t;e.length===d||(0,A.L)(e),++u){s=e[u]
v.n(0,s.a,s)}r=new C.fBW(v,e)
q=new C.fBU(v)
p=A.U(w,x.S)
for(u=0;d=e.length,u<d;e.length===t||(0,A.L)(e),++u){s=e[u]
d=q.$1(s)
d.toString
p.n(0,s.a,d)}for(u=0;w=e.length,u<w;e.length===d||(0,A.L)(e),++u){s=e[u]
o=r.$1(s)
if(o!=null&&s.d===o){w=p.h(0,o)
w.toString
p.n(0,s.a,w)}}for(u=0;u<e.length;e.length===w||(0,A.L)(e),++u){s=e[u]
d=s.d
if(d!=null&&v.aj(0,d))continue
o=r.$1(s)
if(o==null)continue
d=v.h(0,o).d
if(d!=null&&v.aj(0,d)&&d!==s.a){d=p.h(0,o)
d.toString
p.n(0,s.a,d)}}d=p.$ti.k("bd<2>")
d=A.df(new A.bd(p,d),d.k("M.E"))
n=A.C(d,A.a7(d).k("cs.E"))
B.d.ff(n)
for(d=n.length,w=x.s,u=0,t="";u<n.length;n.length===d||(0,A.L)(n),++u){m=n[u]
t+="Generation "+(m+1)+"\n"
for(l=B.d.gag(e),k=new A.f5(l,new C.fBV(p,m));k.C();t=f){j=l.gS(0)
i=A.a([],w)
h=r.$1(j)
if(h!=null)i.push("married to "+v.h(0,h).b)
g=j.d
if(g!=null&&v.aj(0,g)&&h!==g)i.push("child of "+v.h(0,g).b)
j=j.b
f=i.length===0?"":" \u2014 "+B.d.aG(i,", ")
f=t+("\u2022 "+j+f+"\n")}t+="\n"}return B.a.i(t.charCodeAt(0)==0?t:t)},
hWB(d,e,f,g){var w,v,u=C.iap(d,e)
if(u<=0||f.length<=u)return new A.aeC(!1,D.D3,f)
if(g.t(0,e.a))return new A.aeC(!1,D.D3,f)
w=A.T(f).c
v=A.d_(f,0,A.dA(u,"count",x.S),w).dm(0)
return new A.aeC(!0,A.d_(f,u,null,w).dm(0),v)},
hWC(d3,d4,d5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1=d5?d3.f:C.aid(d3),d2=d1.length
if(d2===0)return D.hkk
w=x.N
v=A.U(w,x.P)
for(u=0;u<d1.length;d1.length===d2||(0,A.L)(d1),++u){t=d1[u]
v.c3(0,t.a,new C.dds(t))}s=new C.ddJ(v)
d2=x.dy
r=A.U(w,d2)
q=new C.ddB(r)
for(p=new A.dr(v,v.r,v.e);p.C();){o=p.d
n=o.e
if(!s.$1(n)||n===o.a)continue
o=o.a
n.toString
q.$2(o,n)
q.$2(n,o)}m=new C.ddA(r)
l=A.U(w,x.do)
for(p=new A.dr(v,v.r,v.e);p.C();){o=p.d
k=o.d
j=!0
if(s.$1(k)){i=o.a
if(k!==i){k.toString
j=m.$2(k,i)}}if(j)continue
J.ca(l.c3(0,k,new C.ddt()),o)}h=new C.ddz(s)
g=new C.ddy(l,r)
p=v.$ti.k("bd<2>")
o=p.k("Z<M.E>")
f=A.C(new A.Z(new A.bd(v,p),new C.ddu(h),o),o.k("M.E"))
e=f.length===0?new A.bd(v,p).gI(0):B.d.gI(f)
p=f.length
if(p>1)for(d=-1,u=0;u<f.length;f.length===p||(0,A.L)(f),++u){t=f[u]
a0=g.$2(t.a,A.aX(w))
if(a0>d){d=a0
e=t}}a1=A.aX(w)
p=x.S
a2=A.U(w,p)
a3=A.U(w,w)
a4=A.U(w,d2)
d2=x.i
a5=A.U(w,d2)
a6=A.U(w,x.d9)
a7=A.U(w,d2)
a8=A.a([],x.s)
a9=new C.ddH(new C.ddD(a1,a2,v,r,a3,l,d3,d4,a4,a5,a6),a8,A.U(p,d2),a7)
p=e.a
a9.$2(p,0)
for(o=new A.dr(v,v.r,v.e),j=a2.galk(a2);o.C();){b0=o.d
i=b0.a
if(a1.t(0,i))continue
b1=A.eE([i],w)
for(;h.$1(b0);b0=k){k=v.h(0,b0.d)
i=k.a
if(a1.t(0,i)||!b1.M(0,i))break}if(h.$1(b0)&&a2.aj(0,b0.d)){i=a2.h(0,b0.d)
i.toString
b2=i+1}else{i=r.h(0,b0.a)
b3=A.pV(J.dI(i==null?B.Y:i,j))
if(b3!=null){i=a2.h(0,b3)
i.toString
b2=i}else b2=0}a9.$2(b0.a,b2)}b4=A.U(w,x.dO)
b5=A.a([],x.M)
b6=A.U(w,d2)
b7=new C.ddr(a2,new C.ddI(),b6,a3,b4,v,a4,a5,a6,b5)
for(d2=a8.length,u=0;u<a8.length;a8.length===d2||(0,A.L)(a8),++u){b8=a8[u]
w=a7.h(0,b8)
w.toString
b7.$2(b8,w)}for(d2=new A.dr(b4,b4.r,b4.e),b9=1/0,c0=0,c1=16;d2.C();){w=d2.d.b
o=w.a
b9=Math.min(b9,o-42)
c0=Math.max(c0,o+42)
c1=Math.max(c1,w.b+112+156)}for(d2=b5.length,u=0;u<d2;++u){w=b5[u].b
o=w.a
b9=Math.min(b9,o-42)
c0=Math.max(c0,o+42)
c1=Math.max(c1,w.b+112+40)}c2=24-(b9===1/0?0:b9)
d2=b4.$ti.k("cx<1>")
d2=A.C(new A.cx(b4,d2),d2.k("M.E"))
w=d2.length
u=0
for(;u<d2.length;d2.length===w||(0,A.L)(d2),++u){b8=d2[u]
c3=b4.h(0,b8)
o=c3.a
j=c3.b
b4.n(0,b8,new C.G8(o,new A.t(j.a+c2,j.b)))}for(d2=b5.length,c4=0;c4<d2;++c4){c5=b5[c4]
w=c5.b
b5[c4]=new C.Kp(c5.a,new A.t(w.a+c2,w.b),c5.c,c5.d)}d2=b6.$ti.k("cx<1>")
d2=A.C(new A.cx(b6,d2),d2.k("M.E"))
w=d2.length
u=0
for(;u<d2.length;d2.length===w||(0,A.L)(d2),++u){b8=d2[u]
o=b6.h(0,b8)
o.toString
b6.n(0,b8,o+c2)}c6=A.a([],x.dE)
a3.bQ(0,new C.ddv(c6,b4))
for(d2=new A.cI(a4,a4.$ti.k("cI<1,2>")).gag(0),w=x.g;d2.C();){c7=d2.d
c8=c7.a
c9=b6.h(0,c8)
if(c9==null)continue
o=A.a([],w)
for(j=J.aW(c7.b);j.C();){i=j.gS(j)
if(b6.aj(0,i)){d0=b6.h(0,i)
d0.toString
o.push(new A.t(d0,b4.h(0,i).b.b))}}for(j=B.d.gag(b5),i=new A.f5(j,new C.ddw(c8));i.C();)o.push(j.gS(0).b)
if(o.length===0)continue
B.d.aY(o,new C.ddx())
c6.push(new C.aJW(new A.t(c9,b4.h(0,c8).b.b+112),B.I,!1,o))}return new C.bfK(b4,c6,b5,c0+c2+24,c1+24,p,b6.h(0,p))},
hue(d){var w=A.ag("(1[5-9]\\d\\d|20\\d\\d)",!0,!1,!1,!1).cC(d)
return w==null?null:w.b[1]},
hoq(d,e,f,g,h,i,j,k,l,m,n){return new C.a_r(k,f,j,e,l,n,m,d,g,h,i,null)},
aCO(d,e,f,g,h,i,j){return new C.bjx(i,d,e,f,j,h,g,null)},
aqd:function aqd(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aEl:function aEl(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
e_f:function e_f(d){this.a=d},
e_e:function e_e(d){this.a=d},
e_h:function e_h(d,e){this.a=d
this.b=e},
e_i:function e_i(d,e){this.a=d
this.b=e},
e_j:function e_j(d){this.a=d},
e_d:function e_d(d,e){this.a=d
this.b=e},
e_g:function e_g(d){this.a=d},
e_l:function e_l(d){this.a=d},
e_k:function e_k(d,e){this.a=d
this.b=e},
aq7:function aq7(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aEi:function aEi(d,e,f){var _=this
_.d=$
_.e=d
_.f=!1
_.r=e
_.w=f
_.x=!1
_.c=_.a=_.y=null},
dZG:function dZG(d){this.a=d},
dZE:function dZE(d){this.a=d},
dZF:function dZF(d){this.a=d},
dZH:function dZH(d,e){this.a=d
this.b=e},
dZB:function dZB(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dZ2:function dZ2(d){this.a=d},
dZ3:function dZ3(d,e){this.a=d
this.b=e},
dZk:function dZk(d){this.a=d},
dZi:function dZi(d){this.a=d},
dZj:function dZj(d,e){this.a=d
this.b=e},
dZl:function dZl(d){this.a=d},
dZm:function dZm(d,e){this.a=d
this.b=e},
dZA:function dZA(d,e){this.a=d
this.b=e},
dZh:function dZh(d){this.a=d},
dZg:function dZg(d){this.a=d},
dZf:function dZf(d,e){this.a=d
this.b=e},
dZx:function dZx(){},
dZy:function dZy(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
dZw:function dZw(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
dZq:function dZq(d){this.a=d},
dZr:function dZr(d,e,f){this.a=d
this.b=e
this.c=f},
dZp:function dZp(d,e){this.a=d
this.b=e},
dZs:function dZs(d,e){this.a=d
this.b=e},
dZn:function dZn(d,e){this.a=d
this.b=e},
dZo:function dZo(){},
dZt:function dZt(d,e){this.a=d
this.b=e},
dZu:function dZu(d){this.a=d},
dZv:function dZv(d,e){this.a=d
this.b=e},
dZz:function dZz(d,e){this.a=d
this.b=e},
dYR:function dYR(d,e){this.a=d
this.b=e},
dYS:function dYS(d,e){this.a=d
this.b=e},
dZJ:function dZJ(d,e,f){this.a=d
this.b=e
this.c=f},
dZD:function dZD(d,e,f){this.a=d
this.b=e
this.c=f},
dZC:function dZC(d){this.a=d},
dYT:function dYT(d){this.a=d},
dYU:function dYU(d){this.a=d},
dYV:function dYV(){},
dYW:function dYW(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dZ_:function dZ_(d,e){this.a=d
this.b=e},
dYZ:function dYZ(d,e){this.a=d
this.b=e},
dYY:function dYY(d){this.a=d},
dZ0:function dZ0(d,e){this.a=d
this.b=e},
dYX:function dYX(d){this.a=d},
dZI:function dZI(d){this.a=d},
dZc:function dZc(){},
dZd:function dZd(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dZb:function dZb(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dZ7:function dZ7(d,e,f){this.a=d
this.b=e
this.c=f},
dZ6:function dZ6(d,e,f){this.a=d
this.b=e
this.c=f},
dZ4:function dZ4(d,e){this.a=d
this.b=e},
dZ8:function dZ8(d){this.a=d},
dZ9:function dZ9(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dZ5:function dZ5(d,e){this.a=d
this.b=e},
dZa:function dZa(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dZe:function dZe(d,e){this.a=d
this.b=e},
dZQ:function dZQ(){},
dZR:function dZR(d,e){this.a=d
this.b=e},
dZS:function dZS(d){this.a=d},
dZT:function dZT(d,e){this.a=d
this.b=e},
dZM:function dZM(d){this.a=d},
dZK:function dZK(d,e){this.a=d
this.b=e},
dZN:function dZN(d,e){this.a=d
this.b=e},
dZO:function dZO(d,e){this.a=d
this.b=e},
dZP:function dZP(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
dZU:function dZU(d){this.a=d},
dZL:function dZL(d){this.a=d},
dZ1:function dZ1(d){this.a=d},
bfI:function bfI(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
ddp:function ddp(d){this.a=d},
ddo:function ddo(d,e){this.a=d
this.b=e},
ddq:function ddq(d){this.a=d},
ddn:function ddn(d,e){this.a=d
this.b=e},
fBR:function fBR(d,e){this.a=d
this.b=e},
fBS:function fBS(d){this.a=d},
fBT:function fBT(){},
fBP:function fBP(d,e){this.a=d
this.b=e},
fBQ:function fBQ(){},
fBW:function fBW(d,e){this.a=d
this.b=e},
fBX:function fBX(d){this.a=d},
fBY:function fBY(){},
fBU:function fBU(d){this.a=d},
fBV:function fBV(d,e){this.a=d
this.b=e},
Kp:function Kp(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
G8:function G8(d,e){this.a=d
this.b=e},
bfK:function bfK(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
dds:function dds(d){this.a=d},
ddJ:function ddJ(d){this.a=d},
ddB:function ddB(d){this.a=d},
ddC:function ddC(){},
ddA:function ddA(d){this.a=d},
ddt:function ddt(){},
ddz:function ddz(d){this.a=d},
ddy:function ddy(d,e){this.a=d
this.b=e},
ddu:function ddu(d){this.a=d},
ddD:function ddD(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
ddE:function ddE(d){this.a=d},
ddF:function ddF(d){this.a=d},
ddG:function ddG(){},
ddH:function ddH(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ddI:function ddI(){},
ddr:function ddr(d,e,f,g,h,i,j,k,l,m){var _=this
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
ddv:function ddv(d,e){this.a=d
this.b=e},
ddw:function ddw(d){this.a=d},
ddx:function ddx(){},
aJW:function aJW(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bfL:function bfL(d,e){this.b=d
this.a=e},
ddK:function ddK(){},
ddL:function ddL(d){this.a=d},
ddM:function ddM(d){this.a=d},
ddN:function ddN(){},
bjy:function bjy(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
beN:function beN(d,e){this.b=d
this.a=e},
bxr:function bxr(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
fim:function fim(d){this.a=d},
bmR:function bmR(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
eTl:function eTl(d){this.a=d},
eTk:function eTk(d,e){this.a=d
this.b=e},
a_r:function a_r(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
aCM:function aCM(){var _=this
_.y=_.x=_.w=_.r=_.f=_.e=_.d=$
_.as=_.Q=_.z=null
_.at=1
_.ax=0
_.ay=!1
_.c=_.a=null},
dty:function dty(d,e){this.a=d
this.b=e},
dtx:function dtx(d){this.a=d},
dtv:function dtv(d){this.a=d},
dtw:function dtw(d){this.a=d},
dtH:function dtH(d){this.a=d},
dtI:function dtI(d){this.a=d},
dtG:function dtG(d,e){this.a=d
this.b=e},
dtJ:function dtJ(){},
dtM:function dtM(d){this.a=d},
dtF:function dtF(d,e){this.a=d
this.b=e},
dtL:function dtL(){},
dtN:function dtN(d){this.a=d},
dtE:function dtE(d,e){this.a=d
this.b=e},
dtO:function dtO(d){this.a=d},
dtD:function dtD(d){this.a=d},
dtP:function dtP(d){this.a=d},
dtC:function dtC(d){this.a=d},
dtQ:function dtQ(d){this.a=d},
dtB:function dtB(d){this.a=d},
dtR:function dtR(d){this.a=d},
dtA:function dtA(d){this.a=d},
dtS:function dtS(d){this.a=d},
dtz:function dtz(d,e){this.a=d
this.b=e},
dtK:function dtK(d){this.a=d},
adw:function adw(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bjx:function bjx(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
adv:function adv(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.f=f
_.r=g
_.w=h
_.a=i
_.$ti=j},
bjw:function bjw(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
dtT:function dtT(d){this.a=d},
dtU:function dtU(d,e){this.a=d
this.b=e},
aCN:function aCN(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aIY:function aIY(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
adx:function adx(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
du2:function du2(d){this.a=d},
G4:function G4(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
hjj(d){var w=d.T,v=x.N
return w.ji(w,new C.cd0(),v,v)},
hO6(d){var w=d.bD
if(w>=0)return w
return 5},
hjl(d,e){var w,v=B.a.i(e.toLowerCase())
if(v.length===0)return null
w=C.hjj(d).h(0,v)
if(w==null||w.length===0)return null
return A.bk(w)},
hjk(d,e){var w=C.hjl(d,e)
if(w!=null&&w.ce(new A.V(Date.now(),0,!1)))return!0
return!1},
hO7(d,e){var w,v,u,t,s=B.a.i(e.toLowerCase())
if(s.length===0)return
w=x.N
v=A.a2(C.hjj(d),w,w)
u=C.hjl(d,e)
t=u!=null&&u.ce(new A.V(Date.now(),0,!1))?u:new A.V(Date.now(),0,!1)
v.n(0,s,t.bS(A.dD(30,0,0,0,0,0).a).a8().ae())
d.T=v},
b0f(d,e,f,g,h,i,j){var w=0,v=A.j(x.y),u,t
var $async$b0f=A.e(function(k,l){if(k===1)return A.f(l,v)
for(;;)switch(w){case 0:if(j.w){u=!0
w=1
break}t=j.a
w=3
return A.b(A.lu(t,B.J6),$async$b0f)
case 3:if(l){u=!0
w=1
break}u=A.l6(!1,f,t,!1,g.length!==0?g:"Subscribe for Family Tree access \u2014 create trees and upload photos (30 days).",B.J6,i)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$b0f,v)},
cd0:function cd0(){},
hO4(){var w,v=$.oh(),u=J.e_(8,x.N)
for(w=0;w<8;++w)u[w]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[v.ap(32)]
return"FT"+B.d.hl(u)},
IT(){var w=0,v=A.j(x.a),u,t=2,s=[],r,q,p,o,n,m
var $async$IT=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.c8(),$async$IT)
case 3:if(!e){u=A.U(x.N,x.z)
w=1
break}t=5
w=8
return A.b(A.f6("ngmy_family_tree_backup_codes_v1",null,!1,B.bK),$async$IT)
case 8:r=e
if(r==null){u=A.U(x.N,x.z)
w=1
break}q=J.r(r,"codes")
if(x.f.b(q)){o=A.a2(q,x.N,x.z)
u=o
w=1
break}t=2
w=7
break
case 5:t=4
m=s.pop()
p=A.ab(m)
$.am.$1("[family tree sync codes] load: "+A.w(p))
w=7
break
case 4:w=2
break
case 7:u=A.U(x.N,x.z)
w=1
break
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$IT,v)},
a7y(d){return C.hO5(d)},
hO5(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$a7y=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.c8(),$async$a7y)
case 3:if(!f){w=1
break}t=5
w=8
return A.b(A.hM("ngmy_family_tree_backup_codes_v1",A.H(["codes",d,"savedAt",new A.V(Date.now(),0,!1).a8().ae()],x.N,x.z),!1,!1,B.cG,null),$async$a7y)
case 8:t=2
w=7
break
case 5:t=4
p=s.pop()
r=A.ab(p)
$.am.$1("[family tree sync codes] save: "+A.w(r))
w=7
break
case 4:w=2
break
case 7:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$a7y,v)},
cd_(d){var w=0,v=A.j(x.T),u,t,s,r,q,p,o,n,m
var $async$cd_=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:n=B.a.i(d.toLowerCase())
if(n.length===0){u=null
w=1
break}m=J
w=3
return A.b(C.IT(),$async$cd_)
case 3:t=m.k0(f),t=t.gag(t),s=x.f
case 4:if(!t.C()){w=5
break}r=t.gS(t)
q=r.b
if(s.b(q)){p=J.a6(q)
o=p.h(q,"email")
p=B.a.i(J.k(o==null?"":o).toLowerCase())===n&&J.A(p.h(q,"active"),!0)}else p=!1
if(p){u=r.a
w=1
break}w=4
break
case 5:u=null
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$cd_,v)},
NQ(d){var w=0,v=A.j(x.T),u,t,s,r,q,p,o,n
var $async$NQ=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:if(B.a.i(d).length===0){u=null
w=1
break}w=3
return A.b(C.cd_(d),$async$NQ)
case 3:t=f
w=t!=null?4:5
break
case 4:w=6
return A.b(C.IT(),$async$NQ)
case 6:s=f
r=J.a6(s)
q=r.h(s,t)
w=x.f.b(q)?7:8
break
case 7:p=x.N
o=x.z
o=A.dR(A.a2(q,p,o),p,o)
o.n(0,"active",!0)
o.n(0,"updatedAt",new A.V(Date.now(),0,!1).a8().ae())
r.n(s,t,o)
w=9
return A.b(C.a7y(s),$async$NQ)
case 9:case 8:u=t
w=1
break
case 5:n=C.hO4()
w=10
return A.b(C.IT(),$async$NQ)
case 10:s=f
J.aJ(s,n,A.H(["email",B.a.i(d.toLowerCase()),"active",!0,"createdAt",new A.V(Date.now(),0,!1).a8().ae(),"updatedAt",new A.V(Date.now(),0,!1).a8().ae()],x.N,x.K))
w=11
return A.b(C.a7y(s),$async$NQ)
case 11:u=n
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$NQ,v)},
b0e(d){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n,m,l,k,j
var $async$b0e=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:j=B.a.i(d.toLowerCase())
if(j.length===0){w=1
break}w=3
return A.b(C.IT(),$async$b0e)
case 3:t=f
for(s=J.dn(t),r=s.gdV(t),r=r.dm(r),q=r.length,p=x.f,o=!1,n=0;n<r.length;r.length===q||(0,A.L)(r),++n){m=r[n]
l=m.b
if(p.b(l)){k=J.r(l,"email")
k=B.a.i(J.k(k==null?"":k).toLowerCase())===j}else k=!1
if(k){s.W(t,m.a)
o=!0}}w=o?4:5
break
case 4:w=6
return A.b(C.a7y(t),$async$b0e)
case 6:case 5:case 1:return A.h(u,v)}})
return A.i($async$b0e,v)},
a7z(d,e,f){var w=0,v=A.j(x.H),u
var $async$a7z=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:if(f||B.a.i(d).length===0){w=1
break}w=6
return A.b(C.aqc(d,e),$async$a7z)
case 6:w=h?3:5
break
case 3:w=7
return A.b(C.NQ(d),$async$a7z)
case 7:w=4
break
case 5:w=8
return A.b(C.b0e(d),$async$a7z)
case 8:case 4:case 1:return A.h(u,v)}})
return A.i($async$a7z,v)},
aq6(d,e,f,g,h,i){var w=0,v=A.j(x.y),u,t,s,r,q,p,o
var $async$aq6=A.e(function(j,k){if(j===1)return A.f(k,v)
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
return A.b(C.aqc(f,e),$async$aq6)
case 5:k=!k
case 4:if(k){u=!1
w=1
break}w=6
return A.b(A.c8(),$async$aq6)
case 6:if(!k){u=!1
w=1
break}o=J
w=7
return A.b(C.IT(),$async$aq6)
case 7:q=o.r(k,t)
if(!x.f.b(q)){u=!1
w=1
break}p=J.a6(q)
if(!J.A(p.h(q,"active"),!0)){u=!1
w=1
break}p=p.h(q,"email")
u=B.a.i(J.k(p==null?"":p).toLowerCase())===s
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aq6,v)},
b0d(d,e){var w=0,v=A.j(x.y),u,t,s,r,q
var $async$b0d=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=B.a.i(d).toUpperCase()
if(r.length===0||r==="ADMIN-LOCAL"){u=!0
w=1
break}w=3
return A.b(A.c8(),$async$b0d)
case 3:if(!g){u=!1
w=1
break}q=J
w=4
return A.b(C.IT(),$async$b0d)
case 4:t=q.r(g,r)
if(!x.f.b(t)){u=!1
w=1
break}s=J.a6(t)
if(!J.A(s.h(t,"active"),!0)){u=!1
w=1
break}s=s.h(t,"email")
u=B.a.i(J.k(s==null?"":s).toLowerCase())===B.a.i(e.toLowerCase())
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$b0d,v)},
hO8(){var w,v=$.oh(),u=J.e_(10,x.N)
for(w=0;w<10;++w)u[w]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[v.ap(32)]
return"FT"+B.d.hl(u)},
aq9(d,e){var w=0,v=A.j(x.he),u,t,s,r,q,p
var $async$aq9=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(A.c8(),$async$aq9)
case 3:if(!g){u=null
w=1
break}t=C.hO8()
w=4
return A.b(A.Vy(),$async$aq9)
case 4:s=g
r=B.dO.aO(B.X.aq(d.eZ(),null))
r=B.cJ.gct().aO(r)
q=e?999:2
J.aJ(s,t,A.H(["ownerEmail",d.b,"code",d.a,"payload",r,"usesRemaining",q,"createdAt",new A.V(Date.now(),0,!1).a8().ae()],x.N,x.K))
w=5
return A.b(A.a7A(s),$async$aq9)
case 5:p=e?999:2
u=new A.a0D("NGMYFTSYNC2|"+t,t,p)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aq9,v)},
aq8(d){var w=0,v=A.j(x.m),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$aq8=A.e(function(e,a0){if(e===1)return A.f(a0,v)
for(;;)switch(w){case 0:g=B.a.i(d)
if(g.length===0){u=null
w=1
break}w=3
return A.b(A.Vy(),$async$aq8)
case 3:p=a0
o=J.a6(p)
n=o.h(p,g)
if(!x.f.b(n)){u=null
w=1
break}m=J.a6(n)
l=A.aK(m.h(n,"usesRemaining"))
k=l==null?null:B.k.N(l)
if(k==null)k=0
if(k<=0){u=null
w=1
break}l=m.h(n,"ownerEmail")
j=J.k(l==null?"":l)
l=m.h(n,"code")
w=4
return A.b(C.b0d(J.k(l==null?"":l),j),$async$aq8)
case 4:if(!a0)$.am.$1("[family tree qr stash] owner code inactive; allowing stash restore")
m=m.h(n,"payload")
t=J.k(m==null?"":m)
if(J.ad(t)===0){u=null
w=1
break}s=null
try{r=B.ch.cB(0,B.cF.aO(t))
s=C.hjm(r)}catch(f){q=A.ab(f)
$.am.$1("[family tree qr stash] decode: "+A.w(q))
u=null
w=1
break}if(s==null){u=null
w=1
break}h=k-1
if(h<=0)o.W(p,g)
else{m=x.N
l=x.z
l=A.dR(A.a2(n,m,l),m,l)
l.n(0,"usesRemaining",h)
l.n(0,"lastUsedAt",new A.V(Date.now(),0,!1).a8().ae())
o.n(p,g,l)}w=5
return A.b(A.a7A(p),$async$aq8)
case 5:u=s
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aq8,v)},
hjm(d){var w,v,u,t,s=null
try{w=B.X.aM(0,d,s)
if(!x.f.b(w))return s
u=J.r(w,"marker")
if(J.k(u==null?"":u)!=="ngmyFamilyTreeSync")return s
u=C.hOa(A.a2(w,x.N,x.z))
return u}catch(t){v=A.ab(t)
$.am.$1("[family tree sync] parse: "+A.w(v))
return s}},
h2R(d){var w=0,v=A.j(x.m),u,t,s
var $async$h2R=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=B.a.i(d)
if(B.a.a0(s,"NGMYFTSYNC2|")){t=s.split("|")
if(t.length>=2){u=C.aq8(t[1])
w=1
break}u=null
w=1
break}u=C.hjm(s)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$h2R,v)},
hOa(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=d.h(0,"code"),h=J.k(i==null?"":i)
i=d.h(0,"ownerEmail")
w=J.k(i==null?"":i)
if(h.length===0||w.length===0)return null
v=d.h(0,"trees")
i=x.j
if(i.b(v)){u=J.de(v,x.f)
u=A.cF(u,new C.cd2(),u.$ti.k("M.E"),x.k)
t=A.a7(u).k("Z<M.E>")
s=A.C(new A.Z(u,new C.cd3(),t),t.k("M.E"))}else s=A.a([],x._)
u=d.h(0,"exportedAt")
r=A.bk(J.k(u==null?"":u))
if(r==null)r=new A.V(Date.now(),0,!1)
q=A.U(x.N,x.d)
p=d.h(0,"familyBooks")
u=x.f
if(u.b(p))for(t=J.k0(p),t=t.gag(t),o=x.B;t.C();){n=t.gS(t)
m=J.k(n.a)
l=n.b
if(!i.b(l))continue
n=J.de(l,u)
n=A.cF(n,new C.cd4(),n.$ti.k("M.E"),o)
k=A.a7(n).k("Z<M.E>")
j=A.C(new A.Z(n,new C.cd5(),k),k.k("M.E"))
if(j.length!==0)q.n(0,m,j)}return new C.aqa(h,w,s,r,q)},
aqc(d,e){var w=0,v=A.j(x.y),u,t
var $async$aqc=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:if(B.a.i(d).length===0){u=!1
w=1
break}if(A.NH(e,d)){u=!0
w=1
break}t=J
w=3
return A.b(C.B_(d),$async$aqc)
case 3:u=t.cL(g)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aqc,v)},
cdb(d){var w=0,v=A.j(x.bC),u,t,s
var $async$cdb=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=J
w=3
return A.b(C.B_(d),$async$cdb)
case 3:t=s.b6(f,new C.cdc(),x.cs)
t=A.C(t,t.$ti.k("ak.E"))
B.d.aY(t,new C.cdd())
u=t
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$cdb,v)},
Vz(d,e,f,g){var w=0,v=A.j(x.m),u,t,s,r,q,p,o,n,m
var $async$Vz=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:if(B.a.i(e).length===0){u=null
w=1
break}t=!f
m=t
if(m){w=3
break}else i=m
w=4
break
case 3:w=5
return A.b(C.aqc(e,d),$async$Vz)
case 5:i=!i
case 4:if(i){u=null
w=1
break}w=t?6:8
break
case 6:w=9
return A.b(C.NQ(e),$async$Vz)
case 9:s=i
if(s==null){u=null
w=1
break}w=7
break
case 8:s="ADMIN-LOCAL"
case 7:w=10
return A.b(C.B_(e),$async$Vz)
case 10:r=i
if(g!=null&&B.a.i(g).length!==0){t=J.dI(r,new C.cd9(g))
r=A.C(t,t.$ti.k("M.E"))}t=J.a6(r)
if(t.gan(r)){u=null
w=1
break}t=t.dF(r,new C.cda(e),x.k)
r=A.C(t,t.$ti.k("ak.E"))
q=A.U(x.N,x.d)
t=r.length,p=0
case 11:if(!(p<r.length)){w=13
break}o=r[p].a
w=14
return A.b(C.Lb(e,o),$async$Vz)
case 14:n=i
if(J.cL(n))q.n(0,o,n)
case 12:r.length===t||(0,A.L)(r),++p
w=11
break
case 13:u=new C.aqa(s,B.a.i(e.toLowerCase()),r,new A.V(Date.now(),0,!1),q)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$Vz,v)},
b0i(d,e,f,g){var w=0,v=A.j(x.T),u,t,s,r,q
var $async$b0i=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:w=3
return A.b(C.Vz(d,e,f,g),$async$b0i)
case 3:q=i
if(q==null){u=null
w=1
break}t=g!=null&&q.c.length!==0?B.d.gI(q.c).b:"all-family-trees"
s=A.ag("[^\\w\\-.]+",!0,!1,!1,!1)
s=A.aL(t,s,"_")
r=q.a
u=A.GP(A.Kl(q.eZ(),null,"  "),"ngmy-family-trees-"+s.toLowerCase()+"-"+r+".ngmy.json",!1)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$b0i,v)},
b0h(d,e,f,g){var w=0,v=A.j(x.eo),u,t,s,r
var $async$b0h=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:w=3
return A.b(C.Vz(d,e,f,g),$async$b0h)
case 3:r=i
if(r==null){u=null
w=1
break}w=4
return A.b(C.aq9(r,f),$async$b0h)
case 4:t=i
if(t==null){u=null
w=1
break}s=t.a
u=new A.aGY(r.a,s,t.c)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$b0h,v)},
VA(d,e,f,a0){var w=0,v=A.j(x.gG),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$VA=A.e(function(a1,a2){if(a1===1)return A.f(a2,v)
for(;;)switch(w){case 0:w=3
return A.b(C.h2R(a0),$async$VA)
case 3:g=a2
if(g==null){u=null
w=1
break}t=B.a.a0(B.a.i(a0),"NGMYFTSYNC2|")
s=g.b
r=B.a.i(s.toLowerCase())!==B.a.i(e.toLowerCase())
w=!t?4:5
break
case 4:w=6
return A.b(C.aq6(g.a,d,e,f,s,r),$async$VA)
case 6:if(!a2){if(r)throw A.W(A.be("This backup expired or the sender's tree is no longer available."))
throw A.W(A.be("Backup code is locked. Create a family tree or renew your advisor pass to restore."))}case 5:q=B.a.i(s.toLowerCase())!==B.a.i(e.toLowerCase())
p=g.c,o=p.length,n=g.e,m=0,l=0,k=0
case 7:if(!(k<p.length)){w=9
break}j=p[k]
i=j.a
if(i.length===0){w=8
break}w=q?10:11
break
case 10:w=12
return A.b(C.bCK(e,j),$async$VA)
case 12:case 11:w=13
return A.b(C.ahZ(e,j,s),$async$VA)
case 13:h=n.h(0,i)
w=h!=null&&J.cL(h)?14:15
break
case 14:w=16
return A.b(C.Ba(e,i,h),$async$VA)
case 16:case 15:++m
l+=j.f.length
case 8:p.length===o||(0,A.L)(p),++k
w=7
break
case 9:if(m===0){u=null
w=1
break}u=new A.bqw(l,m,q)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$VA,v)},
aqa:function aqa(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
cd7:function cd7(){},
cd8:function cd8(){},
cd6:function cd6(){},
cd2:function cd2(){},
cd3:function cd3(){},
cd4:function cd4(){},
cd5:function cd5(){},
cdc:function cdc(){},
cdd:function cdd(){},
cd9:function cd9(d){this.a=d},
cda:function cda(d){this.a=d},
hbt(d,e,f,g,h,i,j){var w=j.a
if(w.length===0)return A.f8(null,x.H)
return A.hH(d,new C.aqb(w,e,g,i,f,h,null),!0,null,x.H)},
ddm(d,e,f,g,h,i,j,k){return new C.bfH(i,e,k,j,g,f,h,d,null)},
aqb:function aqb(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aEk:function aEk(d){var _=this
_.d=d
_.e=!1
_.f=null
_.r=!1
_.c=_.a=null},
e_2:function e_2(d){this.a=d},
e_3:function e_3(d,e,f){this.a=d
this.b=e
this.c=f},
e_7:function e_7(d,e){this.a=d
this.b=e},
e_8:function e_8(d){this.a=d},
e__:function e__(d){this.a=d},
e_0:function e_0(d,e){this.a=d
this.b=e},
e_1:function e_1(d,e){this.a=d
this.b=e},
e_6:function e_6(d){this.a=d},
e_5:function e_5(d,e){this.a=d
this.b=e},
e_4:function e_4(){},
e_a:function e_a(d){this.a=d},
e_b:function e_b(d,e){this.a=d
this.b=e},
e_9:function e_9(d,e){this.a=d
this.b=e},
ddO:function ddO(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
bfJ:function bfJ(d,e,f){this.d=d
this.e=e
this.a=f},
acN:function acN(d,e,f){this.c=d
this.d=e
this.a=f},
bfH:function bfH(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.y=k
_.a=l},
bfM:function bfM(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
a_M:function a_M(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aEj:function aEj(){var _=this
_.d=!1
_.c=_.a=_.e=null},
dZV:function dZV(d,e){this.a=d
this.b=e},
dZW:function dZW(d){this.a=d},
dZX:function dZX(d){this.a=d},
dZY:function dZY(d){this.a=d},
dZZ:function dZZ(d){this.a=d},
a_N:function a_N(d){this.a=d},
bl0:function bl0(d){var _=this
_.d=d
_.e=!1
_.c=_.a=null},
e_c:function e_c(d,e){this.a=d
this.b=e},
aZN(d,e){return new C.aZM(d,e,null)},
aZM:function aZM(d,e,f){this.c=d
this.d=e
this.a=f},
icS(d){if(!(d!=null&&B.a.a0(d,"ngmy:thumb:")))return null
return B.a.b5(d,11)},
ikm(d){return A.bV(B.L,null,new C.fSu(new C.u7(A.P(d).ax.a===B.J)),d,!0,!0,!0,null,!1,!1,x.N)},
hlg(d,e){return new C.atd(e,d,null)},
aRj(d,e,f,g,h,i,j){var w=C.icS(i)
if(w!=null)return A.bx(e,new A.a5(j,f,new C.a6E(w,!0,null),null),B.ap)
return N.aQF(e,B.bW,f,g,h,i,j)},
lP:function lP(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a6E:function a6E(d,e,f){this.c=d
this.d=e
this.a=f},
bkH:function bkH(d,e){var _=this
_.e=_.d=$
_.cO$=d
_.b7$=e
_.c=_.a=null},
dLD:function dLD(d){this.a=d},
dLE:function dLE(){},
dLF:function dLF(d,e){this.a=d
this.b=e},
bkG:function bkG(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
fSu:function fSu(d){this.a=d},
fSt:function fSt(d,e){this.a=d
this.b=e},
fSs:function fSs(d,e){this.a=d
this.b=e},
fSr:function fSr(d,e){this.a=d
this.b=e},
atd:function atd(d,e,f){this.c=d
this.d=e
this.a=f},
clG:function clG(d,e){this.a=d
this.b=e},
aMn:function aMn(){},
ik7(d){var w=null
return A.ck(w,w,!0,w,new C.fRR(),d,w,!0,!0,x.e2)},
ili(d,e,f,g,h){var w=null
return A.ck(w,w,!0,w,new C.fZm(h,g,f,e),d,w,!0,!0,x.N)},
ik9(d,e){var w=null
return A.ck(w,w,!0,w,new C.fRW(e),d,w,!0,!0,x.dY)},
ik8(d){var w=null
return A.ck(w,w,!0,w,new C.fRV(),d,w,!0,!0,x.c5)},
aUj:function aUj(d,e){this.a=d
this.b=e},
aUi:function aUi(d){this.a=d},
aSh:function aSh(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fRR:function fRR(){},
fZm:function fZm(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fRW:function fRW(d){this.a=d},
fRV:function fRV(){},
Zp:function Zp(d,e){this.c=d
this.a=e},
azw:function azw(){var _=this
_.d=$
_.c=_.a=_.e=null},
d53:function d53(d){this.a=d},
d54:function d54(d){this.a=d},
d52:function d52(d,e){this.a=d
this.b=e},
d55:function d55(d){this.a=d},
d56:function d56(d){this.a=d},
Zo:function Zo(d){this.a=d},
azv:function azv(){this.d=$
this.c=this.a=null},
d5_:function d5_(d){this.a=d},
d50:function d50(d){this.a=d},
d51:function d51(d){this.a=d},
YW:function YW(d){this.a=d},
ayb:function ayb(){var _=this
_.r=_.f=_.e=_.d=$
_.w="each"
_.c=_.a=null},
cDu:function cDu(){},
cDA:function cDA(d){this.a=d},
cDB:function cDB(d){this.a=d},
cDC:function cDC(d){this.a=d},
cDz:function cDz(){},
cDD:function cDD(d){this.a=d},
cDE:function cDE(d){this.a=d},
cDy:function cDy(){},
cDF:function cDF(d,e){this.a=d
this.b=e},
cDx:function cDx(d,e){this.a=d
this.b=e},
cDv:function cDv(d,e){this.a=d
this.b=e},
cDG:function cDG(d){this.a=d},
cDw:function cDw(){},
cDH:function cDH(d){this.a=d},
a1z:function a1z(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bxh:function bxh(){this.d=$
this.c=this.a=null},
fhG:function fhG(d,e){this.a=d
this.b=e},
fhH:function fhH(d){this.a=d},
fhI:function fhI(d,e){this.a=d
this.b=e},
abR:function abR(d,e){this.a=d
this.b=e},
FU:function FU(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
bxf:function bxf(d,e){var _=this
_.d=$
_.bx$=d
_.a9$=e
_.c=_.a=null},
fhE:function fhE(d,e){this.a=d
this.b=e},
ay4:function ay4(d,e){this.c=d
this.a=e},
bxg:function bxg(d,e){var _=this
_.d=$
_.bx$=d
_.a9$=e
_.c=_.a=null},
fhF:function fhF(d){this.a=d},
bxe:function bxe(d,e,f,g,h,i){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.a=i},
aOt:function aOt(){},
aOu:function aOu(){},
bEH(d,e,f,g){var w,v=null,u=Math.abs(d),t=B.k.bf(u),s=B.o.E(B.k.V((u-t)*100),0,99),r=d<0?"-":"",q=A.oV(B.o.u(t),A.ag("(\\d{1,3})(?=(\\d{3})+(?!\\d))",!0,!1,!1,!1),new C.fQi(),v),p=f?34:16,o=f?18:12,n=A.a([],x.R)
if(r.length!==0)n.push(A.cS(v,v,v,v,v,v,v,v,v,A.l(v,v,e,v,v,v,v,v,v,v,v,p*0.7,v,v,g,v,v,!0,v,v,v,v,v,v,v,v),r))
n.push(A.cS(v,v,v,v,v,v,v,v,v,A.l(v,v,e.j(0.82),v,v,v,v,v,v,v,v,o,v,v,B.U,v,v,!0,v,v,v,v,v,v,v,v),"$"))
n.push(A.cS(v,v,v,v,v,v,v,v,v,A.l(v,v,e,v,v,v,v,v,v,v,v,p,v,v,g,v,1.05,!0,v,-0.6,v,v,v,v,v,v),q))
w=B.a.aW(B.o.u(s),2,"0")
n.push(A.cS(v,v,v,v,v,v,v,v,v,A.l(v,v,e.j(0.88),v,v,v,v,v,v,v,v,o,v,v,B.H,v,v,!0,v,v,v,v,v,v,v,v),"."+w))
return A.Yh(A.cS(n,v,v,v,v,v,v,v,v,v,v),v,v,v,v)},
aQV(){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l
var $async$aQV=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:w=3
return A.b(new A.hW().l2(85,1280,B.eK),$async$aQV)
case 3:m=e
if(m==null){u=null
w=1
break}t=5
w=8
return A.b(m.fl(),$async$aQV)
case 8:r=e
if(J.ad(r)===0){u=null
w=1
break}q=C.hlf()
w=9
return A.b(C.clF(q,r),$async$aQV)
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
o=A.ab(l)
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
return A.i($async$aQV,v)},
aRh(d,e){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$aRh=A.e(function(a0,a1){if(a0===1){s.push(a1)
w=t}for(;;)switch(w){case 0:g=d==null?null:B.a.i(d)
if(g==null||g.length===0){u=null
w=1
break}i=B.a.a0(g,"ngmy:ws-thumb:")
if(i){u=C.clC(g)
w=1
break}if(!B.a.a0(g,"data:image")){u=g
w=1
break}r=5e5
if(g.length<=r){u=g
w=1
break}t=4
q=B.a.t(g,",")?B.d.gak(g.split(",")):g
p=B.cF.aO(q)
o=960
case 7:if(!(o>=96)){w=8
break}i=o
w=9
return A.b($.S().LY(p,!0,null,i).da(0,B.fY),$async$aRh)
case 9:n=a1
w=10
return A.b(n.lL(),$async$aRh)
case 10:m=a1
w=11
return A.b(J.a3f(m).hw(B.h9),$async$aRh)
case 11:l=a1
J.a3f(m).q()
if(l==null){w=8
break}i=J.eS(B.dK.gaR(l))
k="data:image/png;base64,"+B.cJ.gct().aO(i)
if(J.ad(k)<=r){u=k
w=1
break}o=B.k.V(o*0.72)
w=7
break
case 8:t=2
w=6
break
case 4:t=3
f=s.pop()
j=A.ab(f)
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
return A.i($async$aRh,v)},
fQi:function fQi(){},
u7:function u7(d){this.a=d},
atc:function atc(d,e,f){this.c=d
this.d=e
this.a=f},
aFO:function aFO(){var _=this
_.d=$
_.e=!1
_.c=_.a=null},
eQv:function eQv(d,e){this.a=d
this.b=e},
eQm:function eQm(d){this.a=d},
eQn:function eQn(d){this.a=d},
eQt:function eQt(d,e){this.a=d
this.b=e},
eQs:function eQs(d,e){this.a=d
this.b=e},
eQp:function eQp(d,e){this.a=d
this.b=e},
eQo:function eQo(d,e){this.a=d
this.b=e},
eQq:function eQq(d){this.a=d},
eQr:function eQr(d,e){this.a=d
this.b=e},
eQu:function eQu(d,e){this.a=d
this.b=e},
eQh:function eQh(d,e){this.a=d
this.b=e},
eQl:function eQl(d){this.a=d},
eQk:function eQk(d,e){this.a=d
this.b=e},
eQj:function eQj(d){this.a=d},
eQw:function eQw(d,e){this.a=d
this.b=e},
eQx:function eQx(d,e){this.a=d
this.b=e},
eQi:function eQi(d,e){this.a=d
this.b=e},
hy5(d,e,f){var w="thumbnailPath",v=e.ah()
if(f!=null&&f.length!==0)v.n(0,w,f)
else v.W(0,w)
return A.H(["type","ngmy_worksheet_project_v1","ownerEmail",B.a.i(d),"exportedAt",new A.V(Date.now(),0,!1).a8().ae(),"project",v],x.N,x.z)},
fQj(d,e,f){var w=0,v=A.j(x.N),u
var $async$fQj=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:u=B.X.aq(C.hy5(e,f,f.c),null)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fQj,v)},
bEJ(d,e){var w=0,v=A.j(x.N),u,t,s,r
var $async$bEJ=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=C
w=4
return A.b(C.fQj(!0,d,e),$async$bEJ)
case 4:w=3
return A.b(r.ata(g,d,e.a),$async$bEJ)
case 3:s=g
if(s!=null){u=s.a
w=1
break}t=B.dO.aO(B.X.aq(C.hy5(d,e,null),null))
u="NGMY_WS:"+B.ky.gct().aO(t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bEJ,v)},
hpO(d){var w,v=d.z,u=v==null?null:B.a.i(v)
if(u!=null&&u.length!==0)return u
v=d.d
w=v==null?null:B.a.i(v)
if(w!=null&&w.length!==0)return w
return null},
hb8(d){var w,v,u,t="ngmy_worksheet_project_v1",s=B.a.i(d)
if(J.ad(s)===0)return!1
if(J.d2(s,"NGMYWSSYNC2|"))return!0
if(J.d2(s,"NGMY_WS:"))return!0
if(J.f0(s,t))return!0
if(J.d2(s,"{"))try{w=B.X.aM(0,s,null)
if(x.f.b(w)){v=J.r(w,"type")
v=J.k(v==null?"":v)===t}else v=!1
if(v)return!0}catch(u){}return!1},
ii_(d){var w,v,u,t=C.hpO(d)
if(t==null)return null
if(C.hb8(t))return t
w=B.a.cu(t,"NGMYWSSYNC2|")
if(w>=0){v=B.a.i(B.a.b5(t,w))
if(C.hb8(v))return v}u=B.a.cu(t,"NGMY_WS:")
if(u>=0){v=B.a.i(B.a.b5(t,u))
if(C.hb8(v))return v}return null},
hb7(d){var w,v,u,t,s,r=null,q=B.a.i(d)
if(J.ad(q)===0)return r
if(J.d2(q,"NGMYWSSYNC2|"))return r
try{w=null
t=x.a
if(J.d2(q,"NGMY_WS:")){v=B.ch.cB(0,B.cF.aO(J.nk(q,8)))
w=t.a(B.X.aM(0,v,r))}else w=t.a(B.X.aM(0,q,r))
t=J.r(w,"type")
if(J.k(t==null?"":t)!=="ngmy_worksheet_project_v1")return r
u=J.r(w,"project")
if(!x.f.b(u))return r
t=C.h5v(A.a2(u,x.N,x.z))
return t}catch(s){return r}},
bEI(d){var w=0,v=A.j(x.o),u,t,s,r
var $async$bEI=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=B.a.i(d)
w=B.a.a0(r,"NGMYWSSYNC2|")?3:4
break
case 3:t=r.split("|")
w=t.length>=2?5:6
break
case 5:w=7
return A.b(C.at9(t[1]),$async$bEI)
case 7:s=f
if(s!=null&&B.a.i(s).length!==0){u=C.hb7(s)
w=1
break}case 6:u=null
w=1
break
case 4:u=C.hb7(r)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bEI,v)},
hb6(d){var w=B.o.u(1000*Date.now()),v=d.b
if(B.a.i(v).length===0)v="Shared project"
return new C.ly(w,v,d.c,d.d,new A.V(Date.now(),0,!1))},
bEe(){var w=0,v=A.j(x.o),u,t
var $async$bEe=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(A.H0(),$async$bEe)
case 3:t=e
if(t==null||B.a.i(t).length===0){u=null
w=1
break}u=C.hb7(t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bEe,v)},
hz6(d,e,f,g){return A.bV(B.L,null,new C.fZc(f,g,e),d,!0,!0,!0,null,!1,!1,x.H)},
fZc:function fZc(d,e,f){this.a=d
this.b=e
this.c=f},
adS:function adS(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
eQz:function eQz(d,e){this.a=d
this.b=e},
eQA:function eQA(d,e){this.a=d
this.b=e},
eQB:function eQB(d,e){this.a=d
this.b=e},
eQC:function eQC(d,e){this.a=d
this.b=e},
eQy:function eQy(d){this.a=d},
at6:function at6(d,e,f){this.c=d
this.d=e
this.a=f},
bmm:function bmm(){var _=this
_.c=_.a=_.e=_.d=null},
eQc:function eQc(d,e){this.a=d
this.b=e},
eQd:function eQd(d){this.a=d},
eQe:function eQe(d){this.a=d},
atb:function atb(d){this.a=d},
aFN:function aFN(d){var _=this
_.d=d
_.f=_.e=!1
_.c=_.a=null},
eQg:function eQg(d){this.a=d},
eQf:function eQf(d){this.a=d},
hRo(d,e,f,g,h){return new C.Ou(h,g,d,e,f,null)},
aKJ:function aKJ(d,e){this.a=d
this.b=e},
Ou:function Ou(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aFP:function aFP(d,e){var _=this
_.d=d
_.e=e
_.f=!0
_.r=0
_.c=_.a=null},
eQZ:function eQZ(){},
eQV:function eQV(d,e){this.a=d
this.b=e},
eQW:function eQW(d){this.a=d},
eQG:function eQG(d){this.a=d},
eQE:function eQE(d){this.a=d},
eQF:function eQF(d){this.a=d},
eQP:function eQP(d,e){this.a=d
this.b=e},
eQM:function eQM(d,e){this.a=d
this.b=e},
eQN:function eQN(d,e){this.a=d
this.b=e},
eQO:function eQO(d,e,f){this.a=d
this.b=e
this.c=f},
eQK:function eQK(d,e,f){this.a=d
this.b=e
this.c=f},
eQI:function eQI(d){this.a=d},
eQJ:function eQJ(d){this.a=d},
eQL:function eQL(d){this.a=d},
eR1:function eR1(d){this.a=d},
eR0:function eR0(d){this.a=d},
eR2:function eR2(d){this.a=d},
eR_:function eR_(d){this.a=d},
eQD:function eQD(d){this.a=d},
eQH:function eQH(d,e){this.a=d
this.b=e},
eQY:function eQY(d,e){this.a=d
this.b=e},
eQX:function eQX(d,e){this.a=d
this.b=e},
eQS:function eQS(d){this.a=d},
eQT:function eQT(d){this.a=d},
eQU:function eQU(d,e){this.a=d
this.b=e},
eQR:function eQR(d,e){this.a=d
this.b=e},
eQQ:function eQQ(d,e,f){this.a=d
this.b=e
this.c=f},
bz2:function bz2(){},
AP(d){var w,v=B.a.i(d.toLowerCase())
if(v.length===0)return""
w=A.ag("[^a-z0-9@._+-]",!0,!1,!1,!1)
return A.aL(v,w,"_")},
ago(d,e,f){return C.i6h(d,e,f)},
i6h(d,e,f){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o
var $async$ago=A.e(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(d.au("String",e,f),$async$ago)
case 7:q=h
u=q
w=1
break
t=2
w=6
break
case 4:t=3
o=s.pop()
r=A.ab(o)
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
return A.i($async$ago,v)},
agn(d,e){return C.i6g(d,e)},
i6g(d,e){var w=0,v=A.j(x.H),u=1,t=[],s,r,q
var $async$agn=A.e(function(f,g){if(f===1){t.push(g)
w=u}for(;;)switch(w){case 0:u=3
w=6
return A.b(d.W(0,e),$async$agn)
case 6:u=1
w=5
break
case 3:u=2
q=t.pop()
s=A.ab(q)
$.am.$1("[worksheets] remove failed for "+e+": "+A.w(s))
w=5
break
case 2:w=1
break
case 5:return A.h(null,v)
case 1:return A.f(t.at(-1),v)}})
return A.i($async$agn,v)},
i51(d,e){var w,v,u=e==null?null:B.a.i(e)
if(u!=null&&u.length!==0)return d.Ta(u)
w=d.c
v=w==null?null:B.a.i(w)
if(v!=null&&v.length!==0)return d
return d},
bBJ(d){var w=0,v=A.j(x.T),u,t,s,r,q
var $async$bBJ=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:q=B.a.i(d)
if(q.length===0){u=null
w=1
break}t=B.a.a0(q,"ngmy:thumb:")
if(!t)t=B.a.a0(q,"ngmy:ws-thumb:")
else t=!0
if(t){u=q
w=1
break}w=B.a.a0(q,"data:image")?3:4
break
case 3:w=5
return A.b(C.b3v(q),$async$bBJ)
case 5:s=f
if(s!=null){u=s
w=1
break}w=6
return A.b(C.aRh(q,!1),$async$bBJ)
case 6:r=f
if(r!=null&&B.a.a0(r,"data:image")&&r.length<=12e4){u=r
w=1
break}u=null
w=1
break
case 4:u=q
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bBJ,v)},
hF2(d){var w,v,u,t,s,r="unitLabel",q="each",p=A.aK(d.h(0,"price")),o=p==null?null:p
if(o==null)o=0
w=A.aK(d.h(0,"quantity"))
if(w==null)w=null
v=A.aK(d.h(0,"unitPrice"))
if(v==null)v=null
if(w!=null&&v!=null){p=d.h(0,"id")
p=J.k(p==null?"":p)
u=d.h(0,"name")
u=J.k(u==null?"":u)
t=w<=0?1:w
s=d.h(0,r)
if(B.a.i(J.k(s==null?q:s)).length===0)s=q
else{s=d.h(0,r)
s=J.k(s==null?q:s)}return new C.rg(p,u,t,v,s)}p=d.h(0,"id")
p=J.k(p==null?"":p)
u=d.h(0,"name")
return new C.rg(p,J.k(u==null?"":u),1,o,q)},
h5v(d){var w,v,u,t,s=d.h(0,"items"),r=A.a([],x.C)
if(x.j.b(s)){w=J.de(s,x.f)
w=A.cF(w,new C.cCR(),w.$ti.k("M.E"),x.Q)
v=A.a7(w).k("Z<M.E>")
r=A.C(new A.Z(w,new C.cCS(),v),v.k("M.E"))}w=d.h(0,"id")
w=J.k(w==null?"":w)
v=d.h(0,"name")
v=J.k(v==null?"":v)
u=d.h(0,"thumbnailPath")
u=u==null?null:J.k(u)
t=d.h(0,"createdAt")
t=A.bk(J.k(t==null?"":t))
return new C.ly(w,v,u,r,t==null?new A.V(Date.now(),0,!1):t)},
iaj(d){var w=d==null?"":d
switch(w.toLowerCase()){case"male":case"m":return D.w9
case"female":case"f":return D.oe
default:return D.yC}},
huM(d){switch(d.a){case 0:return"male"
case 1:return"female"
case 2:return"unknown"}},
hfm(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i=d.h(0,"id")
i=J.k(i==null?"":i)
w=d.h(0,"name")
w=J.k(w==null?"":w)
v=d.h(0,"gender")
v=C.iaj(v==null?j:J.k(v))
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
m=A.aK(d.h(0,"birthOrder"))
m=m==null?j:B.k.N(m)
if(m==null)m=1
l=J.A(d.h(0,"hidden"),!0)
k=A.aK(d.h(0,"visibleChildrenCap"))
k=k==null?j:B.k.N(k)
return new C.hV(i,w,v,u,t,s,r,q,p,o,n,m,l,k==null?0:k)},
ial(d){var w=d==null?"":d
switch(w.toLowerCase()){case"editor":return D.NZ
case"viewer":return D.kK
default:return D.ug}},
iam(d){switch(d.a){case 1:return"editor"
case 2:return"viewer"
case 0:return"owner"}},
GQ(d,e){var w=B.a.i(d.x)
if(w.length!==0)return B.a.i(w.toLowerCase())
return B.a.i(e.toLowerCase())},
aQ1(d,e){return B.a.i(e.toLowerCase())===C.GQ(d,e)&&d.y!==D.kK},
ul(d,e){var w,v=d.y
if(v===D.kK)return!1
w=B.a.i(e.toLowerCase())
if(w===C.GQ(d,e))return!0
if(v===D.NZ)return!0
v=d.e
return new A.N(v,A.hbd(),A.T(v).k("N<1,m>")).t(0,w)},
i9M(d){return J.dI(d,new C.fAR()).gL(0)},
fZW(d){var w=0,v=A.j(x.y),u,t
var $async$fZW=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=J
w=3
return A.b(C.B_(d),$async$fZW)
case 3:u=t.rb(f,new C.fZX(d))
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fZW,v)},
bCK(d,e){var w=0,v=A.j(x.H),u,t
var $async$bCK=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.B_(d),$async$bCK)
case 3:t=g
if(J.rb(t,new C.fyK(e))){w=1
break}if(C.i9M(t)>=2)throw A.W(A.be("You can only keep 2 shared family trees. Remove one before importing another."))
case 1:return A.h(u,v)}})
return A.i($async$bCK,v)},
alj(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=d.h(0,"members"),g=A.a([],x.u),f=x.j
if(f.b(h)){w=J.de(h,x.f)
w=A.cF(w,new C.bRb(),w.$ti.k("M.E"),x.P)
v=A.a7(w).k("Z<M.E>")
g=A.C(new A.Z(w,new C.bRc(),v),v.k("M.E"))}u=d.h(0,"collaboratorEmails")
if(f.b(u)){w=J.b6(u,new C.bRd(),x.N)
t=A.C(w,w.$ti.k("ak.E"))}else t=A.a([],x.s)
w=d.h(0,"id")
w=J.k(w==null?"":w)
v=d.h(0,"name")
v=J.k(v==null?"":v)
s=d.h(0,"code")
s=J.k(s==null?"":s)
r=J.A(d.h(0,"isPrivate"),!1)
q=d.h(0,"createdAt")
q=A.bk(J.k(q==null?"":q))
if(q==null)q=new A.V(Date.now(),0,!1)
p=A.aK(d.h(0,"visibleChildrenPerParent"))
p=p==null?null:B.k.N(p)
if(p==null)p=0
o=d.h(0,"ownerEmail")
o=J.k(o==null?"":o)
n=d.h(0,"localRole")
n=C.ial(n==null?null:J.k(n))
m=A.a([],x.Y)
f=J.aW(f.b(d.h(0,"games"))?f.a(d.h(0,"games")):B.cv)
l=x.f
k=x.N
j=x.z
while(f.C()){i=f.gS(f)
if(l.b(i))m.push(A.a2(i,k,j))}return new C.kO(w,v,s,!r,t,g,q,p,o,n,m)},
huW(d){var w=A.ag("[^A-Z0-9]",!0,!1,!1,!1),v=A.aL(d.toUpperCase(),w,"")
w=v.length
if(w===0)return"TREE"
return w<=8?v:B.a.ar(v,0,8)},
Db(d){var w=0,v=A.j(x.gk),u,t,s,r,q,p,o,n,m,l
var $async$Db=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(A.RW(d),$async$Db)
case 3:l=f
if(l.length===0){u=A.a([],x.D)
w=1
break}w=4
return A.b(A.az(),$async$Db)
case 4:t=f
w=5
return A.b(t.a6O(0),$async$Db)
case 5:w=6
return A.b(C.fpk(t,l),$async$Db)
case 6:s=f
if(J.cL(s)){u=s
w=1
break}r=B.a.gX(B.a.i(l.toLowerCase()))
q=t.a
p=J.a6(q)
o=A.aT(p.h(q,"ngmy_worksheets_projects_v2_"+Math.abs(r)))
w=o!=null&&o.length!==0?7:8
break
case 7:n=C.hqo(o)
w=n.length!==0?9:10
break
case 9:w=11
return A.b(C.oU(l,n),$async$Db)
case 11:u=n
w=1
break
case 10:case 8:m=A.aT(p.h(q,"ngmy_worksheets_projects_v1_"+Math.abs(B.a.gX(l))))
w=m!=null&&m.length!==0?12:13
break
case 12:n=C.hqo(m)
w=n.length!==0?14:15
break
case 14:w=16
return A.b(C.oU(l,n),$async$Db)
case 16:u=n
w=1
break
case 15:case 13:u=A.a([],x.D)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$Db,v)},
fpk(d,e){return C.i2s(d,e)},
i2s(a8,a9){var w=0,v=A.j(x.gk),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7
var $async$fpk=A.e(function(b0,b1){if(b0===1){s.push(b1)
w=t}for(;;)switch(w){case 0:a3=a8.a
a4=J.a6(a3)
a5=A.aT(a4.h(a3,"ngmy_worksheets_index_v3_"+C.AP(a9)))
if(a5==null||B.a.i(a5).length===0){u=A.a([],x.D)
w=1
break}t=4
r=B.X.aM(0,a5,null)
if(!x.j.b(r)){a3=A.a([],x.D)
u=a3
w=1
break}q=A.a([],x.D)
p=!1
f=J.aW(r),e=x.N,d=x.z,a0=x.f
case 7:if(!f.C()){w=8
break}o=f.gS(f)
n=B.a.i(J.k(o))
if(J.ad(n)===0){w=7
break}m=A.aT(a4.h(a3,"ngmy_worksheet_item_v3_"+C.AP(a9)+"_"+n))
if(m==null||m.length===0){w=7
break}t=10
l=B.X.aM(0,m,null)
if(!a0.b(l)){w=7
break}k=C.h5v(A.a2(l,e,d))
w=k.a.length!==0&&k.b.length!==0?13:14
break
case 13:j=A.aT(a4.h(a3,"ngmy_worksheet_thumb_v3_"+C.AP(a9)+"_"+n))
i=C.i51(k,j)
a1=i.c
h=a1==null?null:B.a.i(a1)
w=h!=null&&B.a.a0(h,"data:image")?15:16
break
case 15:w=17
return A.b(C.b3v(h),$async$fpk)
case 17:g=b1
if(g!=null){i=i.Ta(g)
p=!0}case 16:J.ca(q,i)
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
case 8:J.S7(q,new C.fpl())
if(p&&J.ad(q)!==0)C.oU(a9,q)
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
return A.i($async$fpk,v)},
bDa(d,e){var w=0,v=A.j(x.o),u,t,s,r,q,p
var $async$bDa=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(A.RW(d),$async$bDa)
case 3:r=g
q=B.a.i(e)
if(r.length===0||q.length===0){u=null
w=1
break}p=J
w=4
return A.b(C.Db(r),$async$bDa)
case 4:t=p.aW(g)
case 5:if(!t.C()){w=6
break}s=t.gS(t)
if(s.a===q){u=s
w=1
break}w=5
break
case 6:u=null
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bDa,v)},
hqo(d){var w,v,u,t
try{w=B.X.aM(0,d,null)
if(!x.j.b(w)){v=A.a([],x.D)
return v}v=J.de(w,x.f)
v=A.cF(v,new C.fla(),v.$ti.k("M.E"),x.fA)
u=A.a7(v).k("Z<M.E>")
v=A.C(new A.Z(v,new C.flb(),u),u.k("M.E"))
B.d.aY(v,new C.flc())
return v}catch(t){v=A.a([],x.D)
return v}},
oU(d,e){return C.ijY(d,e)},
ijY(b2,b3){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1
var $async$oU=A.e(function(b4,b5){if(b4===1){s.push(b5)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.RW(b2),$async$oU)
case 3:a8=b5
if(J.ad(a8)===0){u=!1
w=1
break}w=4
return A.b(A.az(),$async$oU)
case 4:r=b5
q=A.a([],x.s)
t=6
a2=C.AP(a8)
p=A.aT(J.r(r.a,"ngmy_worksheets_index_v3_"+a2))
w=p!=null&&p.length!==0?9:10
break
case 9:t=12
a2=x.N
o=J.b6(x.j.a(B.X.aM(0,p,null)),new C.fRI(),a2).fJ(0)
a2=J.b6(b3,new C.fRJ(),a2).c_(0,new C.fRK())
n=A.df(a2,a2.$ti.k("M.E"))
a2=o,a2=A.en(a2,a2.r,A.a7(a2).c),a3=a2.$ti.c,a4=x.f
case 15:if(!a2.C()){w=16
break}a5=a2.d
m=a5==null?a3.a(a5):a5
w=!J.f0(n,m)?17:18
break
case 17:a5=C.AP(a8)
l=A.aT(J.r(r.a,"ngmy_worksheet_thumb_v3_"+a5+"_"+m))
w=19
return A.b(C.a8R(l),$async$oU)
case 19:t=21
a5=C.AP(a8)
k=A.aT(J.r(r.a,"ngmy_worksheet_item_v3_"+a5+"_"+m))
w=k!=null&&k.length!==0?24:25
break
case 24:j=B.X.aM(0,k,null)
w=a4.b(j)?26:27
break
case 26:a5=J.r(j,"thumbnailPath")
w=28
return A.b(C.a8R(a5==null?null:J.k(a5)),$async$oU)
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
return A.b(C.agn(r,"ngmy_worksheet_item_v3_"+C.AP(a8)+"_"+m),$async$oU)
case 29:w=30
return A.b(C.agn(r,"ngmy_worksheet_thumb_v3_"+C.AP(a8)+"_"+m),$async$oU)
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
case 14:case 10:a2=J.cD(b3),a3=a2.gag(b3)
case 31:if(!a3.C()){w=32
break}i=a3.gS(a3)
if(i.a.length===0||B.a.i(i.b).length===0){w=31
break}a4=i.c
h=a4==null?null:B.a.i(a4)
g=i
w=h!=null&&h.length!==0?33:35
break
case 33:w=36
return A.b(C.bBJ(h),$async$oU)
case 36:f=b5
w=f!=null&&f.length!==0?37:39
break
case 37:a4=i.a
w=40
return A.b(C.ago(r,"ngmy_worksheet_thumb_v3_"+C.AP(a8)+"_"+a4,f),$async$oU)
case 40:g=i.Ta(f)
w=38
break
case 39:$.am.$1("[worksheets] photo not saved for "+i.a+" \u2014 saving project without thumbnail")
a4=i.a
w=41
return A.b(C.agn(r,"ngmy_worksheet_thumb_v3_"+C.AP(a8)+"_"+a4),$async$oU)
case 41:g=i.Ta(null)
case 38:w=34
break
case 35:a4=i.a
w=42
return A.b(C.agn(r,"ngmy_worksheet_thumb_v3_"+C.AP(a8)+"_"+a4),$async$oU)
case 42:case 34:a4=i.a
w=43
return A.b(C.ago(r,"ngmy_worksheet_item_v3_"+C.AP(a8)+"_"+a4,B.X.aq(g.ah(),null)),$async$oU)
case 43:e=b5
if(!e){$.am.$1("[worksheets] failed to save project "+i.a+" for "+A.w(a8))
w=31
break}J.ca(q,i.a)
w=31
break
case 32:w=44
return A.b(C.ago(r,"ngmy_worksheets_index_v3_"+C.AP(a8),B.X.aq(q,null)),$async$oU)
case 44:d=b5
if(!d){$.am.$1("[worksheets] failed to save project index for "+A.w(a8))
u=!1
w=1
break}a3=a2.eN(b3,new C.fRL(q))
a4=a3.$ti.k("cQ<1,a8<m,@>>")
a7=A.C(new A.cQ(a3,new C.fRM(),a4),a4.k("M.E"))
a0=a7
w=45
return A.b(C.ago(r,"ngmy_worksheets_projects_v2_"+Math.abs(B.a.gX(B.a.i(a8.toLowerCase()))),B.X.aq(a0,null)),$async$oU)
case 45:w=46
return A.b(J.hE8(r),$async$oU)
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
a1=A.ab(b1)
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
return A.i($async$oU,v)},
LB(d,e){var w=0,v=A.j(x.y),u,t,s,r
var $async$LB=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.Db(d),$async$LB)
case 3:t=g
s=J.cD(t)
r=s.bh(t,new C.fZV(e))
if(r===-1)s.c6(t,0,e)
else s.n(t,r,e)
u=C.oU(d,t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$LB,v)},
bCY(d,e){var w=0,v=A.j(x.H),u
var $async$bCY=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(C.Db(d),$async$bCY)
case 2:u=g
J.nG(u,new C.fBk(e))
w=3
return A.b(C.oU(d,u),$async$bCY)
case 3:return A.h(null,v)}})
return A.i($async$bCY,v)},
GS(d){var w=0,v=A.j(x.ax),u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$GS=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(A.az(),$async$GS)
case 3:l=f
k=A.a([],x._)
j=B.a.gX(B.a.i(d.toLowerCase()))
i=A.aT(J.r(l.a,"ngmy_worksheets_family_trees_v1_"+Math.abs(j)))
if(i!=null&&i.length!==0)try{t=B.X.aM(0,i,null)
if(x.j.b(t)){j=J.de(t,x.f)
j=A.cF(j,new C.fEg(),j.$ti.k("M.E"),x.k)
s=A.a7(j).k("Z<M.E>")
r=A.C(new A.Z(j,new C.fEh(),s),s.k("M.E"))
B.d.aY(r,new C.fEi())
k=r}}catch(h){}w=4
return A.b(C.flV(d),$async$GS)
case 4:p=f
if(p==null){u=k
w=1
break}o=C.i2P(k,p,d)
j=A.T(o)
s=j.k("N<1,a8<m,@>>")
s=A.C(new A.N(o,new C.fEj(),s),s.k("ak.E"))
n=B.X.aq(s,null)
s=i
w=n!==(s==null?"":s)?5:6
break
case 5:w=7
return A.b(C.R8(d,o),$async$GS)
case 7:case 6:j=j.k("Z<1>")
m=A.C(new A.Z(o,new C.fEk(d),j),j.k("M.E"))
if(m.length!==0)C.aPM(d,m)
u=o
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$GS,v)},
fRu(d,e){var w=0,v=A.j(x.y),u,t,s
var $async$fRu=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.R8(d,e),$async$fRu)
case 3:t=J.dI(e,new C.fRv(d))
s=A.C(t,t.$ti.k("M.E"))
if(s.length===0){u=!0
w=1
break}u=C.aPM(d,s)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fRu,v)},
a38(d,e){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n,m,l
var $async$a38=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:o=A.a([],x._)
w=2
return A.b(A.az(),$async$a38)
case 2:n=g
m=B.a.gX(B.a.i(d.toLowerCase()))
l=A.aT(J.r(n.a,"ngmy_worksheets_family_trees_v1_"+Math.abs(m)))
if(l!=null&&l.length!==0)try{u=B.X.aM(0,l,null)
if(x.j.b(u)){m=J.de(u,x.f)
m=A.cF(m,new C.fZQ(),m.$ti.k("M.E"),x.k)
t=A.a7(m).k("Z<M.E>")
s=A.C(new A.Z(m,new C.fZR(),t),t.k("M.E"))
o=s}}catch(k){}q=J.qx(o,new C.fZS(e))
if(B.a.i(e.x).length===0&&C.ul(e,d)){m=B.a.i(d.toLowerCase())
p=e.aEW(e.y===D.kK?D.kK:D.ug,m)}else p=e
if(q===-1)J.pM(o,0,p)
else J.aJ(o,q,p)
w=3
return A.b(C.R8(d,o),$async$a38)
case 3:w=C.ul(p,d)?4:5
break
case 4:w=6
return A.b(C.aPL(C.GQ(p,d),p),$async$a38)
case 6:if(!g)$.am.$1("[family_trees] cloud save failed for "+p.a+" \u2014 run supabase/family_trees_table.sql if table is missing")
case 5:return A.h(null,v)}})
return A.i($async$a38,v)},
aPY(d,e){var w=0,v=A.j(x.H),u,t,s
var $async$aPY=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(C.GS(d),$async$aPY)
case 2:u=g
t=J.cD(u)
s=A.pV(t.eN(u,new C.fB1(e)))
t.bs(u,new C.fB2(e))
w=3
return A.b(C.R8(d,u),$async$aPY)
case 3:w=s!=null&&C.aQ1(s,d)?4:5
break
case 4:w=6
return A.b(C.fle(e),$async$aPY)
case 6:case 5:return A.h(null,v)}})
return A.i($async$aPY,v)},
aid(d){var w=d.f,v=A.T(w).k("Z<1>")
w=A.C(new A.Z(w,new C.h_0(),v),v.k("M.E"))
return w},
h8M(d,e){var w,v=d.f,u=A.pV(new A.Z(v,new C.fAw(e),A.T(v).k("Z<1>")))
v=C.aid(d)
w=A.T(v).k("Z<1>")
v=A.C(new A.Z(v,new C.fAx(e,u),w),w.k("M.E"))
B.d.aY(v,new C.fAy())
return v},
iap(d,e){var w=e.at
if(w>0)return w
w=d.w
if(w>0)return w
return 0},
hza(d,e){var w,v,u=e.d
if(u==null||u.length===0)return 0
w=B.d.bh(C.h8M(d,u),new C.fZn(e))
if(w>=0)return w+1
v=e.Q
return v>0?v:0},
ibX(d,e){var w
if(e==null||e.length===0)return 1
w=C.h8M(d,e)
if(w.length===0)return 1
return new A.N(w,new C.fF6(),A.T(w).k("N<1,G>")).f3(0,B.xA)+1},
ijR(d){var w,v=C.aid(d)
if(v.length===0)return null
w=new A.Z(v,new C.fRo(),A.T(v).k("Z<1>"))
if(!w.gan(0))return w.gI(0)
return B.d.gI(v)},
iak(d){return A.H(["id",d.a,"name",d.b,"gender",C.huM(d.c),"birthDate",d.w,"birthPlace",d.x,"deathDate",d.y,"occupation",d.z,"notes",d.r,"parentId",d.d,"spouseId",d.e,"birthOrder",d.Q,"hidden",d.as,"visibleChildrenCap",d.at],x.N,x.z)},
ibS(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=x.N,a1=A.U(a0,x.P)
for(w=a3.f,v=w.length,u=0;u<w.length;w.length===v||(0,A.L)(w),++u){t=w[u]
a1.n(0,t.a,t)}s=A.a([],x.u)
r=A.aX(a0)
for(a0=a2.f,v=a0.length,u=0;u<a0.length;a0.length===v||(0,A.L)(a0),++u){q=a0[u]
p=q.a
r.M(0,p)
o=a1.h(0,p)
if(o==null)p=q
else{p=o.b
p=p.length!==0?p:q.b
n=o.c
n=n!==D.yC?n:q.c
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
d=q.aER(m,f,l,k,n,e,p,i,j,h,q.f,g,d)
p=d}s.push(p)}for(a0=w.length,u=0;u<w.length;w.length===a0||(0,A.L)(w),++u){o=w[u]
if(!r.t(0,o.a))s.push(o)}a0=a3.b
a0=a0.length!==0?a0:a2.b
a1=a3.c
a1=a1.length!==0?a1:a2.c
w=a3.e
w=w.length!==0?w:a2.e
v=a2.x
v=v.length!==0?v:a3.x
return a2.cMz(a1,w,a3.d,a2.y,s,a0,v)},
B_(d){var w=0,v=A.j(x.ax),u,t,s,r,q,p,o
var $async$B_=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(A.az(),$async$B_)
case 3:q=f
p=B.a.gX(B.a.i(d.toLowerCase()))
o=A.aT(J.r(q.a,"ngmy_worksheets_family_trees_v1_"+Math.abs(p)))
if(o==null||o.length===0){u=A.a([],x._)
w=1
break}try{t=B.X.aM(0,o,null)
if(!x.j.b(t)){p=A.a([],x._)
u=p
w=1
break}p=J.de(t,x.f)
p=A.cF(p,new C.fEd(),p.$ti.k("M.E"),x.k)
s=A.a7(p).k("Z<M.E>")
p=A.C(new A.Z(p,new C.fEe(),s),s.k("M.E"))
B.d.aY(p,new C.fEf())
u=p
w=1
break}catch(n){p=A.a([],x._)
u=p
w=1
break}case 1:return A.h(u,v)}})
return A.i($async$B_,v)},
ahZ(b1,b2,b3){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
var $async$ahZ=A.e(function(b4,b5){if(b4===1)return A.f(b5,v)
for(;;)switch(w){case 0:a5=B.a.i(b3.toLowerCase())===B.a.i(b1.toLowerCase())
a6=a5?D.ug:D.kK
a7=C.GQ(b2,b3)
w=2
return A.b(C.B_(b1),$async$ahZ)
case 2:a8=b5
a9=J.cD(a8)
b0=a9.bh(a8,new C.fRj(b2))
w=!a5&&b0===-1?3:4
break
case 3:w=5
return A.b(C.bCK(b1,b2),$async$ahZ)
case 5:case 4:if(b0===-1){u=b2.aEW(a6,a7)
a9.c6(a8,0,u)}else{t=a9.h(a8,b0)
s=A.U(x.N,x.P)
for(r=t.f,q=r.length,p=0;p<r.length;r.length===q||(0,A.L)(r),++p){o=r[p]
s.n(0,o.a,o)}for(r=b2.f,q=r.length,p=0;p<r.length;r.length===q||(0,A.L)(r),++p){n=r[p]
m=n.a
l=s.h(0,m)
if(l==null)s.n(0,m,n)
else{k=n.f
j=k==null?null:B.a.i(k)
k=n.b
k=k.length!==0?k:l.b
i=n.c
i=i!==D.yC?i:l.c
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
s.n(0,m,l.aER(d,a3,a0,a1,i,n.as,k,e,a2,h,f,g,a4))}}r=b2.b
r=r.length!==0?r:t.b
q=b2.c
q=q.length!==0?q:t.c
m=b2.e
m=m.length!==0?m:t.e
k=s.$ti.k("bd<2>")
s=A.C(new A.bd(s,k),k.k("M.E"))
k=a5?D.ug:D.kK
u=t.cMB(q,m,b2.d,k,s,r,a7,b2.w)
a9.n(a8,b0,u)}w=6
return A.b(C.R8(b1,a8),$async$ahZ)
case 6:w=a5?7:8
break
case 7:w=9
return A.b(C.aPL(B.a.i(b3.toLowerCase()),u),$async$ahZ)
case 9:case 8:return A.h(null,v)}})
return A.i($async$ahZ,v)},
hqN(d,e){var w,v,u,t,s,r,q="collaboratorEmails",p="visibleChildrenPerParent",o=new A.V(Date.now(),0,!1).a8().ae(),n=B.a.i(e.toLowerCase()),m=d.f,l=A.T(m).k("N<1,a8<m,@>>"),k=A.C(new A.N(m,C.hye(),l),l.k("ak.E"))
m=d.a
l=d.b
w=d.c
v=d.d
u=d.e
t=d.w
s=d.r
r=x.N
return A.H(["id",m,"userEmail",n,"name",l,"code",w,"isPrivate",v,q,u,"members",k,p,t,"payload",A.H(["id",m,"name",l,"code",w,"isPrivate",v,q,u,"members",k,p,t,"ownerEmail",n,"createdAt",s.a8().ae(),"updatedAt",o],r,x.K),"createdAt",s.a8().ae(),"updatedAt",o],r,x.z)},
hqO(d,e){var w=new A.V(Date.now(),0,!1).a8().ae(),v=B.a.i(e.toLowerCase()),u=d.f,t=A.T(u).k("N<1,a8<m,@>>")
u=A.C(new A.N(u,C.hye(),t),t.k("ak.E"))
return A.H(["id",d.a,"userEmail",v,"name",d.b,"code",d.c,"isPrivate",d.d,"collaboratorEmails",d.e,"members",u,"createdAt",d.r.a8().ae(),"updatedAt",w],x.N,x.z)},
i0k(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k="userEmail",j=J.a6(d),i=j.h(d,"payload"),h=x.f
if(h.b(i)){w=C.alj(A.a2(i,x.N,x.z))
if(w.a.length!==0&&w.f.length!==0){j=j.h(d,k)
v=B.a.i(J.k(j==null?w.x:j).toLowerCase())
u=B.a.i(e.toLowerCase())
j=w.e
j=new A.N(j,A.hbd(),A.T(j).k("N<1,m>")).c_(0,new C.flI())
t=A.C(j,j.$ti.k("M.E"))
if(u===v)s=D.ug
else s=B.d.t(t,u)?D.NZ:D.kK
return w.aEW(s,v)}}r=x.j
if(!r.b(j.h(d,"members"))&&h.b(j.h(d,"data")))return C.alj(A.a2(h.a(j.h(d,"data")),x.N,x.z))
q=j.h(d,"members")
if(r.b(q)){h=J.de(q,h)
h=A.cF(h,new C.flJ(),h.$ti.k("M.E"),x.P)
p=A.a7(h).k("Z<M.E>")
o=A.C(new A.Z(h,new C.flK(),p),p.k("M.E"))}else o=A.a([],x.u)
n=j.h(d,"collaboratorEmails")
if(r.b(n)){h=J.b6(n,new C.flL(),x.N).c_(0,new C.flM())
t=A.C(h,h.$ti.k("M.E"))}else t=A.a([],x.s)
h=j.h(d,k)
v=B.a.i(J.k(h==null?"":h).toLowerCase())
u=B.a.i(e.toLowerCase())
if(u===v)s=D.ug
else s=B.d.t(t,u)?D.NZ:D.kK
h=j.h(d,"id")
h=J.k(h==null?"":h)
r=j.h(d,"name")
r=J.k(r==null?"":r)
p=j.h(d,"code")
p=J.k(p==null?"":p)
m=J.A(j.h(d,"isPrivate"),!1)
l=j.h(d,"createdAt")
l=A.bk(J.k(l==null?"":l))
if(l==null)l=new A.V(Date.now(),0,!1)
j=A.aK(j.h(d,"visibleChildrenPerParent"))
j=j==null?null:B.k.N(j)
if(j==null)j=0
return new C.kO(h,r,p,!m,t,o,l,j,v,s,B.ca)},
flV(a2){var w=0,v=A.j(x.eK),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$flV=A.e(function(a3,a4){if(a3===1){s.push(a4)
w=t}for(;;)switch(w){case 0:a0=B.a.i(a2.toLowerCase())
if(J.ad(a0)===0){u=null
w=1
break}t=4
r=new C.flZ()
h=x.N
g=x.z
w=7
return A.b(A.iW(A.a([A.lD("family_trees","*",null,A.H(["userEmail",a0],h,g),null,null,null,!0,null,null,!1,B.bK),r.$2(A.lD("family_trees","*",A.H(["collaboratorEmails",A.a([a0],x.s)],h,g),null,null,null,null,!0,null,null,!1,B.bK),"collaborator"),r.$2(A.lD("family_trees","*",null,A.H(["isPrivate",!1],h,g),null,null,null,!0,null,null,!1,B.bK),"public")],x.cl),x.fO),$async$flV)
case 7:q=a4
p=J.r(q,0)
o=J.r(q,1)
n=J.r(q,2)
g=x.a
m=A.U(h,g)
h=A.C(p,g)
l=h
J.h9(l,o)
J.h9(l,n)
l=l
h=l.length
f=0
for(;f<l.length;l.length===h||(0,A.L)(l),++f){k=l[f]
g=J.r(k,"id")
j=J.k(g==null?"":g)
if(J.ad(j)!==0)J.aJ(m,j,k)}l=m
h=A.a7(l).k("bd<2>")
h=A.cF(new A.bd(l,h),new C.flW(a0),h.k("M.E"),x.k)
l=A.a7(h).k("Z<M.E>")
l=A.C(new A.Z(h,new C.flX(),l),l.k("M.E"))
B.d.aY(l,new C.flY())
u=l
w=1
break
t=2
w=6
break
case 4:t=3
a1=s.pop()
i=A.ab(a1)
d=J.k(i)
l=B.a.t(d,"Could not find the table 'public.family_trees'")||B.a.t(d,'relation "public.family_trees" does not exist')
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
return A.i($async$flV,v)},
i2P(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=J.a6(e)
if(j.gan(e))return d
w=B.a.i(f.toLowerCase())
v=x.N
u=j.dF(e,new C.fq1(),v).c_(0,new C.fq2())
t=A.df(u,u.$ti.k("M.E"))
s=A.U(v,x.k)
for(v=d.length,u=w.length!==0,r=0;r<d.length;d.length===v||(0,A.L)(d),++r){q=d[r]
p=q.a
if(p.length===0)continue
o=C.GQ(q,w)
n=!1
if(u)if(o!==w){if(q.y===D.kK){m=q.e
m=!new A.N(m,A.hbd(),A.T(m).k("N<1,m>")).t(0,w)}else m=n
n=m}if(n&&!t.t(0,p))continue
s.n(0,p,q)}for(j=j.gag(e);j.C();){v=j.gS(j)
u=v.a
if(u.length===0)continue
l=s.h(0,u)
if(l==null){s.n(0,u,v)
continue}k=C.ibS(l,v)
o=C.GQ(k,w)
p=v.d
s.n(0,u,o===w?k.bdn(p,D.ug):k.bdn(p,v.y))}j=s.$ti.k("bd<2>")
j=A.C(new A.bd(s,j),j.k("M.E"))
B.d.aY(j,new C.fq3())
return j},
R8(d,e){var w=0,v=A.j(x.H),u,t,s
var $async$R8=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.az(),$async$R8)
case 2:u=g
t=B.a.gX(B.a.i(d.toLowerCase()))
s=J.b6(e,new C.fsR(),x.a)
s=A.C(s,s.$ti.k("ak.E"))
w=3
return A.b(u.au("String","ngmy_worksheets_family_trees_v1_"+Math.abs(t),B.X.aq(s,null)),$async$R8)
case 3:return A.h(null,v)}})
return A.i($async$R8,v)},
aPL(d,e){return C.i85(d,e)},
i85(d,e){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n
var $async$aPL=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:t=4
p=x.Y
w=7
return A.b(A.m7("family_trees",A.a([C.hqN(e,d)],p),null,B.cG),$async$aPL)
case 7:r=g
if(r){u=!0
w=1
break}w=8
return A.b(A.m7("family_trees",A.a([C.hqO(e,d)],p),null,B.cG),$async$aPL)
case 8:p=g
u=p
w=1
break
t=2
w=6
break
case 4:t=3
n=s.pop()
q=A.ab(n)
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
return A.i($async$aPL,v)},
aPM(d,e){return C.i86(d,e)},
i86(d,e){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i
var $async$aPM=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(e.length===0){u=!1
w=1
break}t=4
n=A.T(e).k("N<1,a8<m,@>>")
m=n.k("ak.E")
l=A.C(new A.N(e,new C.fy3(d),n),m)
r=l
w=7
return A.b(A.m7("family_trees",r,null,B.cG),$async$aPM)
case 7:q=g
if(q){u=!0
w=1
break}k=A.C(new A.N(e,new C.fy4(d),n),m)
p=k
w=8
return A.b(A.m7("family_trees",p,null,B.cG),$async$aPM)
case 8:n=g
u=n
w=1
break
t=2
w=6
break
case 4:t=3
i=s.pop()
o=A.ab(i)
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
return A.i($async$aPM,v)},
fle(d){return C.i_D(d)},
i_D(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$fle=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:if(d.length===0){w=1
break}t=4
w=7
return A.b(A.Rw("family_trees",A.H(["id",d],x.N,x.z),null,B.cG),$async$fle)
case 7:t=2
w=6
break
case 4:t=3
p=s.pop()
r=A.ab(p)
$.am.$1("[family_trees] delete error: "+A.w(r))
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$fle,v)},
rg:function rg(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
ly:function ly(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
cCU:function cCU(){},
cCT:function cCT(){},
cCR:function cCR(){},
cCS:function cCS(){},
HZ:function HZ(d,e){this.a=d
this.b=e},
hV:function hV(d,e,f,g,h,i,j,k,l,m,n,o,p,q){var _=this
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
ali:function ali(d,e){this.a=d
this.b=e},
fAR:function fAR(){},
fZX:function fZX(d){this.a=d},
fyK:function fyK(d){this.a=d},
kO:function kO(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
bRf:function bRf(){},
bRe:function bRe(){},
bRb:function bRb(){},
bRc:function bRc(){},
bRd:function bRd(){},
fpl:function fpl(){},
fla:function fla(){},
flb:function flb(){},
flc:function flc(){},
fRI:function fRI(){},
fRJ:function fRJ(){},
fRK:function fRK(){},
fRL:function fRL(d){this.a=d},
fRM:function fRM(){},
fZV:function fZV(d){this.a=d},
fBk:function fBk(d){this.a=d},
fEg:function fEg(){},
fEh:function fEh(){},
fEi:function fEi(){},
fEj:function fEj(){},
fEk:function fEk(d){this.a=d},
fRv:function fRv(d){this.a=d},
fZQ:function fZQ(){},
fZR:function fZR(){},
fZS:function fZS(d){this.a=d},
fB1:function fB1(d){this.a=d},
fB2:function fB2(d){this.a=d},
h_0:function h_0(){},
fAw:function fAw(d){this.a=d},
fAx:function fAx(d,e){this.a=d
this.b=e},
fAy:function fAy(){},
fZn:function fZn(d){this.a=d},
fF6:function fF6(){},
fRo:function fRo(){},
fEd:function fEd(){},
fEe:function fEe(){},
fEf:function fEf(){},
fRj:function fRj(d){this.a=d},
flI:function flI(){},
flJ:function flJ(){},
flK:function flK(){},
flL:function flL(){},
flM:function flM(){},
flZ:function flZ(){},
fm_:function fm_(d){this.a=d},
flW:function flW(d){this.a=d},
flX:function flX(){},
flY:function flY(){},
fq1:function fq1(){},
fq2:function fq2(){},
fq3:function fq3(){},
fsR:function fsR(){},
fy3:function fy3(d){this.a=d},
fy4:function fy4(d){this.a=d},
cCV:function cCV(d,e){this.a=d
this.b=e},
cCW:function cCW(d,e){this.a=d
this.b=e},
aHU:function aHU(d,e,f){this.a=d
this.b=e
this.c=f},
b9R:function b9R(){this.b=this.a=0},
b9Q:function b9Q(d,e,f,g){var _=this
_.f=d
_.w=e
_.z=f
_.b=g
_.a=null},
bxi:function bxi(){},
x2(d,e){var w,v
if(d==null)return""
w=d.bU()
v=""+w.gcg()+"/"+w.gcw()+"/"+w.gck()
if(!e)return v
return v+" "+B.a.aW(B.o.u(w.gno()),2,"0")+":"+B.a.aW(B.o.u(w.gGv()),2,"0")},
hRl(){var w,v=$.oh(),u=J.e_(10,x.N)
for(w=0;w<10;++w)u[w]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[v.ap(32)]
return"WS"+B.d.hl(u)},
at7(){var w=0,v=A.j(x.a),u,t=2,s=[],r,q,p,o,n,m
var $async$at7=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.c8(),$async$at7)
case 3:if(!e){u=A.U(x.N,x.z)
w=1
break}t=5
w=8
return A.b(A.f6("ngmy_worksheet_project_qr_stashes_v1",null,!1,B.bK),$async$at7)
case 8:r=e
if(r==null){u=A.U(x.N,x.z)
w=1
break}q=J.r(r,"stashes")
if(x.f.b(q)){o=A.a2(q,x.N,x.z)
u=o
w=1
break}t=2
w=7
break
case 5:t=4
m=s.pop()
p=A.ab(m)
$.am.$1("[worksheet qr stash] load: "+A.w(p))
w=7
break
case 4:w=2
break
case 7:u=A.U(x.N,x.z)
w=1
break
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$at7,v)},
at8(d){return C.hRm(d)},
hRm(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$at8=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.c8(),$async$at8)
case 3:if(!f){w=1
break}t=5
w=8
return A.b(A.hM("ngmy_worksheet_project_qr_stashes_v1",A.H(["stashes",d,"savedAt",new A.V(Date.now(),0,!1).a8().ae()],x.N,x.z),!1,!1,B.cG,null),$async$at8)
case 8:t=2
w=7
break
case 5:t=4
p=s.pop()
r=A.ab(p)
$.am.$1("[worksheet qr stash] save: "+A.w(r))
w=7
break
case 4:w=2
break
case 7:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$at8,v)},
ata(d,e,f){var w=0,v=A.j(x.he),u,t,s,r,q,p
var $async$ata=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=3
return A.b(A.c8(),$async$ata)
case 3:if(!h){u=null
w=1
break}t=B.a.i(d)
if(t.length===0){u=null
w=1
break}s=C.hRl()
w=4
return A.b(C.at7(),$async$ata)
case 4:r=h
q=B.a.i(e)
p=B.dO.aO(t)
J.aJ(r,s,A.H(["ownerEmail",q,"projectId",f,"payload",B.cJ.gct().aO(p),"usesRemaining",25,"createdAt",new A.V(Date.now(),0,!1).a8().ae()],x.N,x.K))
w=5
return A.b(C.at8(r),$async$ata)
case 5:u=new A.a0D("NGMYWSSYNC2|"+s,s,25)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$ata,v)},
at9(d){var w=0,v=A.j(x.T),u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$at9=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:i=B.a.i(d)
if(i.length===0){u=null
w=1
break}w=3
return A.b(A.c8(),$async$at9)
case 3:if(!f){u=null
w=1
break}w=4
return A.b(C.at7(),$async$at9)
case 4:q=f
p=J.a6(q)
o=p.h(q,i)
if(!x.f.b(o)){u=null
w=1
break}n=J.a6(o)
m=A.aK(n.h(o,"usesRemaining"))
l=m==null?null:B.k.N(m)
if(l==null)l=0
if(l<=0){u=null
w=1
break}n=n.h(o,"payload")
t=J.k(n==null?"":n)
if(J.ad(t)===0){u=null
w=1
break}s=null
try{s=B.ch.cB(0,B.cF.aO(t))}catch(h){r=A.ab(h)
$.am.$1("[worksheet qr stash] decode: "+A.w(r))
u=null
w=1
break}if(B.a.i(s).length===0){u=null
w=1
break}j=l-1
if(j<=0)p.W(q,i)
else{n=x.N
m=x.z
m=A.dR(A.a2(o,n,m),n,m)
m.n(0,"usesRemaining",j)
m.n(0,"lastUsedAt",new A.V(Date.now(),0,!1).a8().ae())
p.n(q,i,m)}w=5
return A.b(C.at8(q),$async$at9)
case 5:u=s
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$at9,v)},
hlf(){var w=new A.V(Date.now(),0,!1).a8()
return"wst_"+(1000*w.a+w.b)+"_"+B.cK.ap(999999)},
hRn(d){var w,v,u,t,s,r,q
try{w=A.agO(d)
if(w==null)return d
v=w
if(J.LG(v)>960||J.LF(v)>960){s=v
r=J.LG(v)>=J.LF(v)?960:null
v=A.agN(s,J.LF(v)>J.LG(v)?960:null,B.Ph,r)}s=v
u=A.amH(82).Ty(s,B.zf)
if(J.ad(u)===0)return d
s=new Uint8Array(A.cm(u))
return s}catch(q){t=A.ab(q)
$.am.$1("[worksheet-thumb] compress failed: "+A.w(t))
return d}},
clF(d,e){var w=0,v=A.j(x.y),u,t,s
var $async$clF=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=B.a.i(d)
if(s.length===0||e.length===0){u=!1
w=1
break}t=C.hRn(e)
$.clB.n(0,s,t)
u=C.bEL(s,t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$clF,v)},
b3v(d){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$b3v=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:l=B.a.i(d)
if(!J.d2(l,"data:image")){u=null
w=1
break}t=4
r=J.f0(l,",")?B.d.gak(J.lG(l,",")):l
q=B.cF.aO(r)
if(J.ad(q)===0){u=null
w=1
break}p=C.hlf()
w=7
return A.b(C.clF(p,q),$async$b3v)
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
n=A.ab(k)
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
return A.i($async$b3v,v)},
clC(d){var w=0,v=A.j(x.T),u,t,s
var $async$clC=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=B.a.i(d)
if(s.length===0){u=null
w=1
break}if(B.a.a0(s,"data:image")){u=s
w=1
break}w=3
return A.b(N.clE(s),$async$clC)
case 3:t=f
if(t==null||t.length===0){u=null
w=1
break}u="data:image/jpeg;base64,"+B.cJ.gct().aO(t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$clC,v)},
a8R(d){var w=0,v=A.j(x.H),u,t
var $async$a8R=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=N.hy6(d)
if(t==null){w=1
break}$.clB.W(0,t)
w=3
return A.b(C.bEK(t),$async$a8R)
case 3:case 1:return A.h(u,v)}})
return A.i($async$a8R,v)},
bEL(d,e){return C.ii2(d,e)},
ii2(d,e){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$bEL=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:l=B.a.i(d)
if(l.length===0||e.length===0){u=!1
w=1
break}t=4
n=$.aOG
w=7
return A.b(n==null?$.aOG=N.h7I():n,$async$bEL)
case 7:r=g
q=new Uint8Array(A.cm(e))
p=J.mW(r,"thumbs","readwrite")
B.j0.mq(J.mV(p,"thumbs"),q,l)
w=8
return A.b(J.pL(p),$async$bEL)
case 8:u=!0
w=1
break
t=2
w=6
break
case 4:t=3
k=s.pop()
o=A.ab(k)
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
return A.i($async$bEL,v)},
bEK(d){return C.ii0(d)},
ii0(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p,o,n,m,l
var $async$bEK=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:m=B.a.i(d)
if(m.length===0){w=1
break}t=4
o=$.aOG
w=7
return A.b(o==null?$.aOG=N.h7I():o,$async$bEK)
case 7:r=f
q=J.mW(r,"thumbs","readwrite")
B.j0.G2(J.mV(q,"thumbs"),m)
w=8
return A.b(J.pL(q),$async$bEK)
case 8:t=2
w=6
break
case 4:t=3
l=s.pop()
p=A.ab(l)
$.am.$1("[worksheet-thumb idb delete] "+A.w(p))
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$bEK,v)}},D,Aw,Ax,A_,Ay
J=c[1]
A=c[0]
B=c[2]
Aa=c[64]
N=c[61]
P=c[257]
A0=c[162]
S=c[60]
Ab=c[232]
K=c[212]
H=c[35]
E=c[222]
T=c[122]
Ac=c[235]
Q=c[107]
Ad=c[135]
U=c[228]
Ae=c[117]
Af=c[198]
A1=c[119]
Ag=c[231]
Ah=c[43]
R=c[230]
M=c[91]
A2=c[87]
A3=c[168]
Ai=c[130]
A4=c[171]
A5=c[251]
A6=c[199]
Aj=c[190]
Ak=c[202]
A7=c[197]
Al=c[254]
Am=c[73]
A8=c[256]
An=c[79]
G=c[255]
Ao=c[134]
Ap=c[259]
Aq=c[121]
A9=c[216]
Ar=c[34]
V=c[120]
O=c[192]
As=c[203]
At=c[126]
W=c[258]
Au=c[154]
X=c[244]
Y=c[42]
F=c[98]
Av=c[33]
L=c[106]
I=c[138]
Z=c[77]
C=a.updateHolder(c[7],C)
D=c[250]
Aw=c[78]
Ax=c[210]
A_=c[253]
Ay=c[252]
C.aoT.prototype={}
C.aZO.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.c,g=h.bhH(),f=h.x!=null&&h.zg(i).length===0
if(h.x!=null)w=f?B.b0:B.bz
else w=h.gUb()?B.bz:B.dZ
v=B.a.i(h.b)
if(v.length===0)v="\u2014"
u=A.n(22)
t=A.K(D.blT,B.r,1)
s=x.p
r=A.p(i,A.x(A.a([A.p(i,D.f3b,B.f,i,i,new A.o(B.b0.j(0.12),i,i,A.n(999),i,i,B.n),i,i,i,i,B.h4,i,i,i),B.W,D.fyh,B.au,A.d(C.x2(new A.V(Date.now(),0,!1),!0),i,i,i,i,i,i,D.ftY,i,i,i)],s),B.m,i,B.e,B.i,0,B.p),B.f,i,i,D.b4t,i,i,i,i,B.a_x,i,i,i)
q=A.n(16)
p=A.K(B.aN,B.r,1)
o=A.K(B.b0.j(0.28),B.r,1)
n=A.h9M(h.d)
o=A.p(B.A,C.aZN(A.fHr(h.e,n),30),B.f,i,i,new A.o(B.m3,i,o,i,i,i,B.a6),i,56,i,i,i,i,i,56)
n=A.d(v,i,i,i,i,i,i,D.fp4,B.K,i,i)
m=A.n(14)
l=A.K(B.aN,B.r,1)
q=A.p(i,A.x(A.a([o,B.P,n,B.bF,D.fyz,B.ae,A.p(i,A.x(A.a([D.fOB,B.bF,A.d(A.B1(h.c),i,i,i,i,i,i,D.fjO,i,i,i)],s),B.m,i,B.e,B.i,0,B.p),B.f,i,i,new A.o(B.c,i,l,m,i,i,B.n),i,i,i,i,B.fd,i,i,1/0)],s),B.m,i,B.e,B.i,0,B.p),B.f,i,i,new A.o(B.aP,i,p,q,i,i,B.n),i,i,i,i,O.akm,i,i,i)
p=A.n(16)
m=A.K(B.aN,B.r,1)
l=j.aRG("Original due",C.x2(h.r,!1))
n=j.aRG("Current due",C.x2(h.f,!1))
o=w.j(0.1)
k=A.n(12)
p=A.a([q,B.W,A.p(i,A.x(A.a([l,B.P,n,B.W,A.p(i,A.d(h.gaLN(),i,i,i,i,i,i,A.l(i,i,w,i,i,i,i,i,i,i,i,12.5,i,i,B.u,i,i,!0,i,0.4,i,i,i,i,i,i),B.K,i,i),B.f,i,i,new A.o(o,i,i,k,i,i,B.n),i,i,i,i,B.BL,i,i,1/0),B.W,j.chK(),B.P,j.c4X(g,f)],s),B.m,i,B.e,B.i,0,B.p),B.f,i,i,new A.o(B.c,i,m,p,i,i,B.n),i,i,i,i,B.bg,i,i,i)],s)
q=B.a.i(h.y)
if(q.length!==0){o=A.n(14)
n=A.K(B.aN,B.r,1)
B.d.v(p,A.a([B.W,A.p(i,A.x(A.a([D.fzx,B.au,A.d(q,i,i,i,i,i,i,D.foi,i,i,i)],s),B.E,i,B.e,B.i,0,B.p),B.f,i,i,new A.o(B.aP,i,n,o,i,i,B.n),i,i,i,i,B.bg,i,i,1/0)],s))}if(h.gaGy()){q=A.n(14)
o=A.K(B.cq,B.r,1.6)
B.d.v(p,A.a([B.W,A.p(i,A.x(A.a([D.fPW,B.P,A.bx(A.n(12),A.ec(new A.a5(1/0,88,A.b4(i,i,i,new A.Wk(h.ax,B.N,D.f7r,!0,3.5,i),B.aw),i),B.c,!0),B.ap)],s),B.E,i,B.e,B.i,0,B.p),B.f,i,i,new A.o(B.c,i,o,q,i,i,B.n),i,i,i,i,B.Gi,i,i,i)],s))}p.push(B.aA)
p.push(D.fHP)
return A.p(i,A.x(A.a([r,new A.D(B.a_l,A.x(p,B.ak,i,B.e,B.i,0,B.p),i)],s),B.ak,i,B.e,B.O,0,B.p),B.ap,i,i,new A.o(B.c,i,t,u,i,i,B.n),i,i,i,i,i,i,i,1/0)},
aRG(d,e){var w=null
return A.B(A.a([A.E(A.d(d,w,w,w,w,w,w,D.aad,w,w,w),1),A.d(e,w,w,w,w,w,w,D.fkS,w,w,w)],x.p),B.m,w,B.e,B.i,0,w,w)},
chK(){var w,v,u="Date paid",t=this.c
if(t.x==null)return this.aa_(B.dZ,u,"Not paid yet")
w=t.zg(null).length
v=w===0?B.b0:B.bz
return this.aa_(v,u,C.x2(t.x,!0))},
c4X(d,e){var w,v,u=null,t="Missed days"
if(this.c.x!=null&&e)return this.aa_(B.b0,t,"None \u2014 paid on time")
w=d.length
if(w===0)return this.aa_(B.b0,t,"None yet")
w=A.d("Missed days ("+w+")",u,u,u,u,u,u,D.aad,u,u,u)
v=A.T(d).k("N<1,h3>")
v=A.C(new A.N(d,new C.c6t(),v),v.k("ak.E"))
return A.x(A.a([w,B.am,A.bX(B.bG,v,B.bq,u,6,6)],x.p),B.E,u,B.e,B.i,0,B.p)},
aa_(d,e,f){var w=null
return A.B(A.a([A.E(A.d(e,w,w,w,w,w,w,D.aad,w,w,w),1),new A.dt(1,B.cp,A.d(f,w,w,w,w,w,w,A.l(w,w,d,w,w,w,w,w,w,w,w,12.5,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),B.dV,w,w),w)],x.p),B.E,w,B.e,B.i,0,w,w)}}
C.bc_.prototype={
a3(d,e){new A.Wk(this.b,B.N,e,!0,3.5,null).a3(d,e)},
av(d){return d.b!==this.b}}
C.ap4.prototype={
R(){return new C.aDN(A.a([],x.bp))},
ge1(){return this.c}}
C.aDN.prototype={
Z(){this.a2()
this.J0()},
J0(){var w=0,v=A.j(x.H),u,t=this,s
var $async$J0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(A.a2p(t.a.c),$async$J0)
case 3:s=e
if(t.c==null){w=1
break}t.m(new C.dMv(t,s))
case 1:return A.h(u,v)}})
return A.i($async$J0,v)},
aTD(d,e){var w,v=null,u=this.a.d.a,t=u?B.N:B.aP,s=A.l(v,v,u?B.bt:B.bm,v,v,v,v,v,v,v,v,13,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),r=A.n(10)
u=(this.a.d.a?B.bt:B.bm).j(0.22)
w=A.n(10)
return A.bt(v,new A.b5(4,r,new A.ay(u,1,B.r,-1)),v,B.bg,v,v,v,v,!0,new A.b5(4,w,new A.ay((this.a.d.a?B.bt:B.bm).j(0.22),1,B.r,-1)),v,v,v,v,v,t,!0,v,v,v,v,new A.b5(4,A.n(10),D.b26),v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,!0,v,s,d,!0,!0,!1,v,v,v,v,v,e,v,v,v,v,v,v,v,v)},
aTC(d){return this.aTD(d,null)},
PN(d){return this.clm(d)},
clm(d){var w=0,v=A.j(x.T),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$PN=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
n=d?B.HC:B.eK
w=7
return A.b(new A.hW().Ci(72,900,900,n),$async$PN)
case 7:q=f
if(q==null){u=null
w=1
break}w=8
return A.b(q.fl(),$async$PN)
case 8:p=f
n=B.cJ.gct().aO(p)
u="data:image/jpeg;base64,"+n
w=1
break
t=2
w=6
break
case 4:t=3
l=s.pop()
o=A.ab(l)
n=r.c
if(n!=null)n.K(x.q).f.U(A.b3(null,null,null,null,null,B.t,null,A.d("Could not pick photo: "+A.w(o),null,null,null,null,null,null,null,null,null,null),null,B.Z,null,null,null,null,null,null,null,null,null,null))
u=null
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$PN,v)},
b1w(d,e,f,g,h,i){var w,v,u,t,s=this,r=null,q=s.a.d.a,p=q?B.N:B.aP,o=A.n(10),n=A.K((q?B.bt:B.bm).j(0.18),B.r,1)
if(d)q=B.cR
else q=s.a.d.a?B.bt:B.bm
q=A.X(e,q,r,r,r,18)
w=A.d(i,r,r,r,r,r,r,A.l(r,r,s.a.d.a?B.aP:B.av,r,r,r,r,r,r,r,r,12.5,r,r,B.U,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
v=d?"Added \xb7 optional":h
if(d)u=B.cR
else u=s.a.d.a?B.bt:B.bm
t=x.p
u=A.E(A.x(A.a([w,A.d(v,r,r,r,r,r,r,A.l(r,r,u,r,r,r,r,r,r,r,r,10.5,r,r,B.a7,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],t),B.E,r,B.e,B.i,0,B.p),1)
v=A.fw(r,r,r,r,r,r,r,r,r,r,r,B.cR,r,r,r,r,r,r,r,r,r,r,r,r,r,B.cc)
q=A.a([q,B.ac,u,A.bN(!1,A.d(d?"Change":"Add",r,r,r,r,r,r,r,r,r,r),r,r,!0,r,r,r,f,r,v)],t)
if(d)q.push(A.aG(r,r,r,r,A.X(B.cz,s.a.d.a?B.bt:B.bm,r,r,r,18),r,r,r,g,r,r,r,r,r,B.cc))
return A.p(r,A.B(q,B.m,r,B.e,B.i,0,r,r),B.f,r,r,new A.o(p,r,n,o,r,r,B.n),r,r,r,B.jy,D.byz,r,r,r)},
Dj(d){return this.bBC(d)},
bBB(){return this.Dj(null)},
bBC(a5){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$Dj=A.e(function(a6,a7){if(a6===1)return A.f(a7,v)
for(;;)switch(w){case 0:a2={}
a3=a5==null
a4=a3?null:a5.b
if(a4==null)a4=""
s=$.ax()
r=new A.at(new A.ba(a4,B.b3,B.aO),s)
if(a3)a4=""
else{a4=a5.c
q=B.k.jj(a4)
p=a5.c
a4=a4===q?B.o.u(B.k.N(p)):B.k.ac(p,2)}o=new A.at(new A.ba(a4,B.b3,B.aO),s)
a4=a3?null:a5.y
if(a4==null)a4=""
n=new A.at(new A.ba(a4,B.b3,B.aO),s)
if(a3){a4=new A.V(Date.now(),0,!1).bS(6048e8)
m=A.c6(a4.gck(),a4.gcg(),a4.gcw(),0,0,0,0,0)}else{a4=a5.f
m=A.c6(a4.gck(),a4.gcg(),a4.gcw(),0,0,0,0,0)}a2.a=m
l=a3?null:a5.as
a2.b=l==null?"":l
k=a3?null:a5.at
a2.c=k==null?"":k
a4=a3?null:a5.ax
if(a4==null)a4=[]
j=A.bq(a4,!0,x.cT)
i=a3?null:A.h9M(a5.d)
a2.d=i
h=a3?null:B.a.i(a5.e)
if(h==null)h=""
a2.e=h
if(h.length===0&&i!=null)a2.e=i===B.wK?"\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1":"\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1"
a4=t.c
a4.toString
w=3
return A.b(A.i1(B.w.j(0.55),!0,"Dismiss",a4,new C.dMe(),new C.dMf(a2,t,a5,r,new C.dMg(a2,t),o,n,j),B.eN,!0,x.y),$async$Dj)
case 3:g=a7
f=B.a.i(r.a.a)
e=A.d4(B.a.i(o.a.a))
if(e==null)e=0
d=B.a.i(n.a.a)
r.T$=s
r.P$=0
o.T$=s
o.P$=0
n.T$=s
n.P$=0
if(g!==!0||t.c==null){w=1
break}if(f.length===0||e<=0){t.c.K(x.q).f.U(D.fdX)
w=1
break}a0=a2.d
if(a0==null){t.c.K(x.q).f.U(D.fcC)
w=1
break}a1=A.fHr(a2.e,a0)
w=a3?4:6
break
case 4:a3=t.a.c
a4=Date.now()
s=a2.a
q=a2.b
a2=a2.c
p=a0===B.wK?"male":"female"
w=7
return A.b(A.aic(a3,A.hhX(0,e,a1,null,"",s,p,"iou_"+1000*a4,q,d,null,null,f,a2,j)),$async$Dj)
case 7:w=5
break
case 6:a5.b=f
a5.c=e
a5.y=d
a5.as=a2.b
a5.at=a2.c
a5.d=a0===B.wK?"male":"female"
a5.e=a1
a3=a5.ax
B.d.aa(a3)
B.d.v(a3,j)
a3=a2.a
a3=A.c6(a3.gck(),a3.gcg(),a3.gcw(),0,0,0,0,0)
a4=a5.f
if(!a3.A(0,A.c6(a4.gck(),a4.gcg(),a4.gcw(),0,0,0,0,0)))a5.cOQ(a2.a)
w=8
return A.b(A.aic(t.a.c,a5),$async$Dj)
case 8:case 5:w=9
return A.b(t.J0(),$async$Dj)
case 9:case 1:return A.h(u,v)}})
return A.i($async$Dj,v)},
aUg(d,e,f,g){var w,v,u,t,s,r,q,p=null
if(g)w=B.cR.j(0.14)
else w=this.a.d.a?B.N:B.aP
v=A.n(12)
u=A.n(12)
t=A.n(12)
if(g)s=B.cR
else s=(this.a.d.a?B.bt:B.bm).j(0.2)
s=A.K(s,B.r,g?1.5:1)
r=C.aZN(d,18)
if(g)q=B.cR
else q=this.a.d.a?B.aP:B.av
return A.aH(!1,B.a2,!0,v,A.aO(!1,u,!0,A.p(p,A.B(A.a([r,B.bn,A.d(e,p,p,p,p,p,p,A.l(p,p,q,p,p,p,p,p,p,p,p,13,p,p,B.H,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)],x.p),B.m,p,B.b9,B.i,0,p,p),B.f,p,p,new A.o(p,p,s,t,p,p,B.n),p,p,p,p,B.bT,p,p,p),p,!0,p,p,p,p,p,p,p,p,p,p,p,f,p,p,p,p,p,p,p),B.f,w,0,p,p,p,p,p,B.ai)},
Sw(d){return this.cD7(d)},
cD7(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$Sw=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=d.x!=null?3:5
break
case 3:d.x=null
w=4
break
case 5:s=t.c
s.toString
w=6
return A.b(A.i1(B.w.j(0.55),!0,"Dismiss",s,new C.dMy(),new C.dMz(t,d),B.ht,!0,x.y),$async$Sw)
case 6:if(f!==!0){w=1
break}s=Date.now()
d.x=new A.V(s,0,!1)
case 4:w=7
return A.b(A.aic(t.a.c,d),$async$Sw)
case 7:w=8
return A.b(t.J0(),$async$Sw)
case 8:case 1:return A.h(u,v)}})
return A.i($async$Sw,v)},
PM(d,e){return this.bMs(0,e)},
bMs(d,e){var w=0,v=A.j(x.H),u,t=this,s
var $async$PM=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=3
return A.b(A.li(s,"Cancel","Delete",e.b+" \xb7 "+A.B1(e.c)+" will be removed from this device.","Delete this debt?"),$async$PM)
case 3:if(!g){w=1
break}w=4
return A.b(C.fB8(t.a.c,e.a),$async$PM)
case 4:w=5
return A.b(t.J0(),$async$PM)
case 5:case 1:return A.h(u,v)}})
return A.i($async$PM,v)},
afH(d){return this.cfa(d)},
cfa(d){var w=0,v=A.j(x.H),u=this,t
var $async$afH=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return A.b(A.bV(B.L,null,new C.dMs(u,d),t,!0,!0,!1,null,!1,!1,x.H),$async$afH)
case 2:return A.h(null,v)}})
return A.i($async$afH,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null
if(m.e)return D.emY
w=J.dI(m.d,new C.dMA())
v=A.C(w,w.$ti.k("M.E"))
w=J.dI(m.d,new C.dMB())
u=A.C(w,w.$ti.k("M.E"))
t=B.d.cI(v,0,new C.dMC())
w=A.n(18)
s=m.a.d.a
r=s?D.cxz:D.aB6
q=A.K(s?B.cR.j(0.35):B.cR.j(0.18),B.r,1)
s=A.p(l,D.bZv,B.f,l,l,new A.o(B.cR.j(m.a.d.a?0.28:0.14),l,l,A.n(12),l,l,B.n),l,38,l,l,l,l,l,38)
p=x.p
s=A.B(A.a([s,B.as,A.E(A.d("Cashier",l,l,l,l,l,l,A.l(l,l,m.a.d.a?B.aP:B.av,l,l,l,l,l,l,l,l,18,l,l,B.u,l,l,!0,l,-0.2,l,l,l,l,l,l),l,l,l),1),A.aH(!1,B.a2,!0,A.n(12),A.aO(!1,A.n(12),!0,D.emk,l,!0,l,l,l,l,l,l,l,l,l,l,l,new C.dMD(m),l,l,l,l,l,l,l),B.f,B.cR,0,l,l,l,l,l,B.ai)],p),B.m,l,B.e,B.i,0,l,l)
o=A.E(m.czi("Open",""+v.length),1)
n=v.length===0?"$0.00":A.B1(t)
r=A.a([A.p(l,A.x(A.a([s,B.ae,A.B(A.a([o,B.ac,A.E(m.b7F(v.length!==0,"Owed",n),1)],p),B.m,l,B.e,B.i,0,l,l)],p),B.E,l,B.e,B.i,0,B.p),B.f,l,l,new A.o(l,l,q,w,l,new A.a9(B.ay,B.aD,B.x,r,l,l),B.n),l,l,l,l,B.akj,l,l,l),B.aA],p)
if(J.ct(m.d)){w=m.a.d.a
s=w?B.e3:B.c
q=A.n(18)
o=A.K((w?B.bt:B.bm).j(0.12),B.r,1)
n=A.p(l,D.bUj,B.f,l,l,new A.o(B.cR.j(0.12),l,l,A.n(16),l,l,B.n),l,52,l,l,l,l,l,52)
w=A.d("Nobody owes you yet",l,l,l,l,l,l,A.l(l,l,m.a.d.a?B.aP:B.av,l,l,l,l,l,l,l,l,15,l,l,B.H,l,l,!0,l,l,l,l,l,l,l,l),B.K,l,l)
r.push(A.p(l,A.x(A.a([n,B.ae,w,B.au,A.d("Add a name, amount, and pay-by date.",l,l,l,l,l,l,A.l(l,l,m.a.d.a?B.bt:B.bm,l,l,l,l,l,l,l,l,12.5,l,l,l,l,1.35,!0,l,l,l,l,l,l,l,l),B.K,l,l)],p),B.m,l,B.e,B.i,0,B.p),B.f,l,l,new A.o(s,l,o,q,l,l,B.n),l,l,l,l,D.bB7,l,l,1/0))}else{w=m.gckD()
s=A.C(new A.N(v,w,A.T(v).k("N<1,v>")),x.l)
if(u.length!==0){q=A.a([B.am,new A.D(D.bCO,A.d("Paid",l,l,l,l,l,l,A.l(l,l,m.a.d.a?B.bt:B.bm,l,l,l,l,l,l,l,l,12,l,l,B.H,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),l)],p)
B.d.v(q,new A.N(u,w,A.T(u).k("N<1,v>")))
B.d.v(s,q)}B.d.v(r,s)}return A.x(r,B.ak,l,B.e,B.i,0,B.p)},
b7F(d,e,f){var w,v=this,u=null,t=v.a.d.a?B.w.j(0.22):B.c.j(0.85),s=A.n(14),r=A.K((v.a.d.a?B.bt:B.bm).j(0.12),B.r,1),q=A.d(e,u,u,u,u,u,u,A.l(u,u,v.a.d.a?B.bt:B.bm,u,u,u,u,u,u,u,u,11,u,u,B.U,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)
if(d)w=B.cR
else w=v.a.d.a?B.aP:B.av
return A.p(u,A.x(A.a([q,B.bF,A.d(f,u,1,B.a1,u,u,u,A.l(u,u,w,u,u,u,u,u,u,u,u,16,u,u,B.u,u,u,!0,u,-0.2,u,u,u,u,u,u),u,u,u)],x.p),B.E,u,B.e,B.i,0,B.p),B.f,u,u,new A.o(t,u,r,s,u,u,B.n),u,u,u,u,B.eB,u,u,u)},
czi(d,e){return this.b7F(!1,d,e)},
ckE(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=d.zg(j).length,h=d.bgV()
if(d.x!=null){w=d.zg(j).length
v=w===0?B.cR:B.bz}else if(d.gUb())v=B.bz
else{if(h)w=B.cR
else w=k.a.d.a?B.bt:B.bm
v=w}if(d.x!=null){w=d.zg(j).length
u=d.x
if(w===0){u.toString
t="Paid on time \xb7 "+C.x2(u,!1)}else{u.toString
t="Paid "+C.x2(u,!1)+" \xb7 "+i+" missed"}}else if(h)t="Pays tomorrow"
else{w=d.f
t=i>0?"Due "+C.x2(w,!1)+" \xb7 "+i+" missed":"Due "+C.x2(w,!1)}w=k.a.d.a?B.e3:B.c
u=A.n(18)
if(d.gUb()&&d.x==null)s=B.bz.j(0.35)
else s=(k.a.d.a?B.bt:B.bm).j(0.12)
s=A.K(s,B.r,1)
r=k.a.d.a?j:A.a([new A.ac(0,B.G,B.w.j(0.04),B.cH,12)],x.V)
q=A.n(18)
p=k.a.d.a?B.bo:B.m3
o=A.K(d.gUb()&&d.x==null?B.bz.j(0.45):B.cR.j(0.28),B.r,1.4)
n=d.x!=null?0.55:1
m=A.h9M(d.d)
o=A.p(B.A,A.db(C.aZN(A.fHr(d.e,m),24),n),B.f,j,j,new A.o(p,j,o,j,j,j,B.a6),j,46,j,j,j,j,j,46)
p=d.b
n=k.a.d.a?B.aP:B.av
m=x.p
n=A.a([new A.dt(1,B.cp,A.d(p,j,1,B.a1,j,j,j,A.l(j,j,n.j(d.x!=null?0.6:1),j,j,j,j,j,j,j,j,14.5,j,j,B.H,j,j,!0,j,j,j,j,j,j,j,j),j,j,j),j)],m)
if(B.a.i(d.as).length!==0||B.a.i(d.at).length!==0||d.gaGy())B.d.v(n,A.a([B.en,A.X(B.Oq,B.cR.j(0.8),j,j,j,14)],m))
p=A.E(A.x(A.a([A.B(n,B.m,j,B.e,B.i,0,j,j),B.cN,A.d(t,j,1,B.a1,j,j,j,A.l(j,j,v,j,j,j,j,j,j,j,j,11.5,j,j,B.U,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)],m),B.E,j,B.e,B.i,0,B.p),1)
n=A.B1(d.c)
l=k.a.d.a?B.aP:B.av
n=A.d(n,j,j,j,j,j,j,A.l(j,j,l.j(d.x!=null?0.55:1),j,j,j,j,j,j,j,j,14,j,j,B.u,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)
return A.p(j,A.aH(!1,B.a2,!0,j,A.aO(!1,q,!0,new A.D(A5.ak6,A.B(A.a([o,B.bc,p,B.ac,A.x(A.a([n,B.bF,A.X(B.eE,(k.a.d.a?B.bt:B.bm).j(0.5),j,j,j,18)],m),B.dI,j,B.e,B.i,0,B.p)],m),B.m,j,B.e,B.i,0,j,j),j),j,!0,j,j,j,j,j,j,j,j,j,j,j,new C.dMu(k,d),j,j,j,j,j,j,j),B.f,B.L,0,j,j,j,j,j,B.ai),B.f,j,j,new A.o(w,j,s,u,r,j,B.n),j,j,j,B.d2,j,j,j,j)}}
C.uC.prototype={}
C.al6.prototype={
B(a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0=null,a1=d.c,a2=a1.y,a3=d.d
if(a2)a3=a3.toUpperCase()
w=a1.w
v=w===B.bj
u=v?B.E:B.m
t=a1.as
s=A.n(t?12:22)
r=a1.e
q=r.j(t?0.6:0.85)
q=A.K(q,B.r,t?1.2:1.6)
p=A.a([new A.ac(0,B.G,B.w.j(0.45),B.cx,16)],x.V)
o=x.p
n=A.a([],o)
m=B.w.j(t?0.07:0.3)
l=A.K(r.j(0.6),B.r,1)
n.push(A.aB(a0,A.p(a0,A.X(B.cz,t?a1.f:B.c,a0,a0,a0,17),B.f,a0,a0,new A.o(m,a0,l,a0,a0,a0,B.a6),a0,30,a0,a0,a0,a0,a0,30),B.y,!1,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,d.f,a0,a0,a0,a0,a0,a0,!1,B.a3))
m=v?B.a5:B.A
l=A.a([],o)
k=a1.r
j=k.length!==0
if(j&&!v)l.push(new A.D(B.iD,A.d(k,a0,a0,a0,a0,a0,a0,A.l(a0,a0,r,a0,a0,a0,a0,a0,a0,a0,a0,15,a0,a0,a0,a0,a0,!0,a0,a0,a0,a0,a0,a0,a0,a0),a0,a0,a0),a0))
i=a1.f
h=a1.x
g=h?"Georgia":a0
f=a2?16:19
a2=a2?2.2:0.5
l.push(A.d(a3,a0,1,a0,a0,!1,a0,A.l(a0,a0,i,a0,a0,a0,a0,a0,g,a0,a0,f,a0,a0,B.u,a0,a0,!0,a0,a2,a0,a0,a0,t?a0:D.axk,a0,a0),a0,a0,a0))
if(j&&!v)l.push(new A.D(B.Gz,A.d(k,a0,a0,a0,a0,a0,a0,A.l(a0,a0,r,a0,a0,a0,a0,a0,a0,a0,a0,15,a0,a0,a0,a0,a0,!0,a0,a0,a0,a0,a0,a0,a0,a0),a0,a0,a0),a0))
a2=A.a([A.eO(m,A.B(l,B.m,a0,B.e,B.O,0,a0,a0),B.f,B.e2)],o)
v=d.e
m=B.a.i(v)
if(m.length!==0){m=i.j(0.65)
a2.push(new A.D(D.bxM,A.d(v,a0,1,B.a1,a0,a0,a0,A.l(a0,a0,m,a0,a0,a0,a0,a0,a0,a0,a0,10,h?B.cD:B.bp,a0,a0,a0,a0,!0,a0,0.8,a0,a0,a0,a0,a0,a0),w,a0,a0),a0))}n.push(A.E(new A.D(B.fC,A.x(a2,u,a0,B.e,B.O,0,B.p),a0),1))
n.push(D.f8f)
a2=A.a([A.B(n,B.m,a0,B.e,B.i,0,a0,a0)],o)
w=d.r
if(w!=null)B.d.v(a2,A.a([new A.D(B.w_,A.p(a0,a0,B.f,a0,a0,new A.o(a0,a0,a0,a0,a0,new A.a9(B.a5,B.a8,B.x,A.a([B.L,r.j(0.75),B.L],x.O),a0,a0),B.n),a0,1,a0,a0,a0,a0,a0,a0),a0),w],o))
e=new A.D(B.lF,A.x(a2,B.m,a0,B.e,B.O,0,B.p),a0)
if(a1.z){a2=A.n(t?9:19)
e=A.p(a0,e,B.f,a0,a0,new A.o(a0,a0,A.K(r.j(0.45),B.r,1),a2,a0,a0,B.n),a0,a0,a0,B.hj,a0,a0,a0,a0)}return A.p(a0,e,B.f,a0,a0,new A.o(a0,a0,q,s,p,new A.a9(B.ay,B.aD,B.x,a1.d,a0,a0),B.n),a0,a0,a0,D.bz1,a0,a0,a0,a0)}}
C.aVz.prototype={
B(d){var w,v,u,t,s,r,q=null,p=this.c,o=this.e,n=A.p(q,q,B.f,o.j(0.28),q,q,q,1,q,q,q,q,q,q),m=x.p,l=A.a([],m),k=p.r,j=k.length!==0
if(j)l.push(A.d(k,q,q,q,q,q,q,A.l(q,q,o.j(0.55),q,q,q,q,q,q,q,q,11,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q))
w=p.y
v=this.d
if(w)v=v.toUpperCase()
u=p.w===B.bj?B.bj:B.K
t=o.j(0.6)
s=p.x?"Georgia":q
r=w?1.6:0.6
l.push(A.E(A.d(v,q,1,B.a1,q,q,q,A.l(q,q,t,q,q,q,q,q,s,q,q,10.5,w?B.bp:B.cD,q,B.U,q,q,!0,q,r,q,q,q,q,q,q),u,q,q),1))
if(j)l.push(A.d(k,q,q,q,q,q,q,A.l(q,q,o.j(0.55),q,q,q,q,q,q,q,q,11,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q))
o=A.a([A.B(l,B.m,q,B.e,B.i,0,q,q),B.cN,n],m)
if(p.z)o.push(new A.D(B.u8,n,q))
return new A.D(B.d2,A.x(o,B.m,q,B.e,B.O,0,B.p),q)}}
C.Ta.prototype={
R(){return new C.bfC()}}
C.bfC.prototype={
gc_T(){var w=this.d
return w===$?this.d=this.a.c:w},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=A.aI(d,n,x.w).w,l=x.p,k=A.a([D.emT,D.emZ],l)
for(w=0;w<8;++w){v=D.a3J[w]
u=o.d
if(u===$){u=o.d=o.a.c
t=u}else t=u
s=v.a
r=u===s?B.Hn:B.Cr
q=t===s
r=A.X(r,q?B.eG:B.bX,n,n,n,17)
q=q?B.c:B.ad
r=A.a([r,B.bn,new A.y(v.b,n,new A.F(!0,q,n,n,n,n,13.5,B.u,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n),n,n,n,n,n,n,n,n,n),B.ac,new A.bz(1,B.ba,new A.y(v.c,n,B.Al,n,n,n,n,B.a1,n,1,n,n),n)],l)
u=o.d
if((u===$?o.d=o.a.c:u)===s){s=new A.aQ(24,24)
p=new A.ay(B.eG,2,B.r,-1)
s=new A.o(n,n,new A.bI(p,p,p,p),new A.bj(s,s,s,s),n,n,B.n)}else s=n
q=o.a
k.push(A.aB(n,new A.D(B.eI,A.x(A.a([new A.D(B.mJ,new A.cd(B.aM,B.e,B.i,B.m,n,B.p,n,0,r,n),n),A.p(n,new A.BE(!0,new C.al6(v,q.d,q.e,new C.dck(),n,n),n),B.f,n,n,s,n,n,n,n,n,n,n,n)],l),B.E,n,B.e,B.i,0,B.p),n),B.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.dcl(o,v),n,n,n,n,n,n,!1,B.a3))}k.push(new A.D(D.bzm,A.bH(D.fVt,n,new C.dcm(o,d),A.bo(B.b6,n,n,n,n,B.oF,n,n,new A.b8(A.n(16),B.a0),n,n,n)),n))
return A.bm(!0,new A.cU(new A.aZ(0,1/0,0,m.a.b*0.9),A.cn(k,n,D.bDG,n,n,B.ah,!0),n),!0,!1,B.af,!0,!0)}}
C.nq.prototype={
ah(){var w=this
return A.H(["id",w.a,"title",w.b,"body",w.c,"updatedAt",w.d.a8().ae()],x.N,x.z)},
bdz(d,e,f){return new C.nq(this.a,e,d,f)}}
C.HY.prototype={
wy(d,e,f,g,h,i,j,k,a0,a1,a2,a3){var w=this,v=k==null?w.a:k,u=a2==null?w.b:a2,t=a0==null?w.c:a0,s=e==null?w.d:e,r=f==null?w.e:f,q=a3==null?w.f:a3,p=i==null?w.r:i,o=g==null?w.w:g,n=a1==null?w.x:a1,m=d==null?w.y:d,l=j==null?w.z:j
return new C.HY(v,u,t,s,r,q,p,o,n,m,l,h==null?w.Q:h)},
aEK(d){var w=null
return this.wy(w,w,w,w,w,d,w,w,w,w,w,w)},
cKx(d){var w=null
return this.wy(w,w,w,w,d,w,w,w,w,w,w,w)},
bdx(d,e,f){var w=null
return this.wy(d,w,w,w,w,w,w,w,e,w,f,w)},
cLb(d){var w=null
return this.wy(w,w,w,w,w,w,d,w,w,w,w,w)},
cLk(d){var w=null
return this.wy(w,w,w,w,w,w,w,w,w,d,w,w)},
cKv(d){var w=null
return this.wy(w,w,w,d,w,w,w,w,w,w,w,w)},
cLm(d){var w=null
return this.wy(w,w,w,w,w,w,w,w,w,w,w,d)},
cKs(d){var w=null
return this.wy(w,w,d,w,w,w,w,w,w,w,w,w)},
cKn(d){var w=null
return this.wy(w,d,w,w,w,w,w,w,w,w,w,w)},
FV(d){var w=null
return this.wy(w,w,w,w,w,w,w,d,w,w,w,w)},
cLu(d,e,f,g,h,i,j,k,l,m,n){return this.wy(d,e,f,g,null,h,i,j,k,l,m,n)},
ah(){var w=this
return A.H(["style",w.a,"title",w.b,"subtitle",w.c,"emblem",w.d,"foil",w.e,"titleSize",w.f,"position",w.r,"frame",w.w,"texture",w.x,"author",w.y,"ribbon",w.z,"header",w.Q],x.N,x.z)},
cI4(d,e,f){var w,v,u,t,s,r,q,p,o=null,n="title",m="subtitle",l=new C.bPX(d),k=A.aK(d.h(0,"emblem")),j=k==null?o:B.k.N(k),i=A.aK(d.h(0,"titleSize"))
if(i==null)i=o
k=l.$2("style",f)
w=typeof d.h(0,n)=="string"&&B.a.i(A.cP(d.h(0,n))).length!==0?B.a.i(A.cP(d.h(0,n))):o
v=typeof d.h(0,m)=="string"?B.a.i(A.cP(d.h(0,m))):o
u=j!=null&&j>=0&&j<e?j:o
t=l.$2("foil",D.Dg.gev(D.Dg))
s=i==null?o:B.k.E(i,18,36)
r=l.$2("position",D.a5q)
q=l.$2("frame",D.a4L)
l=l.$2("texture",D.a4H)
p=typeof d.h(0,"author")=="string"?B.a.i(A.cP(d.h(0,"author"))):o
return this.cLu(p,u,t,q,r,A.r5(d.h(0,"ribbon"))?A.Gs(d.h(0,"ribbon")):o,k,v,l,w,s)}}
C.ZN.prototype={
R(){return new C.aAN(A.a([],x.I),D.NY)},
ge1(){return this.c}}
C.aAN.prototype={
Z(){var w,v=this
v.a2()
v.f=A.zV(0,1)
w=$.ax()
v.z=new A.at(B.at,w)
v.Q=new A.at(B.at,w)
v.la()
w=v.a
C.bD7(w.c,w.d).bM(new C.dd0(v),x.fL)},
q(){var w,v=this,u=v.f
u===$&&A.c()
u.q()
u=v.z
u===$&&A.c()
w=$.ax()
u.T$=w
u.P$=0
u=v.Q
u===$&&A.c()
u.T$=w
u.P$=0
v.a1()},
la(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$la=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
w=3
return A.b(C.Lb(s.c,s.d),$async$la)
case 3:r=e
if(t.c==null){w=1
break}t.m(new C.dcP(t,r))
t.awv()
case 1:return A.h(u,v)}})
return A.i($async$la,v)},
gat5(){var w,v=this
if(!J.ct(v.d)){w=v.r
w=w<0||w>=J.ad(v.d)}else w=!0
return w?null:J.r(v.d,v.r)},
awv(){var w,v,u=this.gat5(),t=this.z
t===$&&A.c()
w=u==null
v=w?null:u.b
t.saX(0,v==null?"":v)
t=this.Q
t===$&&A.c()
w=w?null:u.c
t.saX(0,w==null?"":w)},
cdB(d){this.m(new C.dcM(this,d))
this.awv()},
NJ(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$NJ=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!t.a.f){w=1
break}s=new C.nq(B.o.u(1000*Date.now()),"Untitled page","",new A.V(Date.now(),0,!1))
r=t.a
w=3
return A.b(C.aRE(r.c,r.d,s),$async$NJ)
case 3:w=4
return A.b(t.la(),$async$NJ)
case 4:if(t.c==null||J.ct(t.d)){w=1
break}q=J.qx(t.d,new C.dcn(s))
p=q>=0?q:J.ad(t.d)-1
t.m(new C.dco(t,p))
t.awv()
r=t.f
r===$&&A.c()
w=r.f.length!==0?5:6
break
case 5:w=7
return A.b(r.Bg(p+1,B.ct,B.kG),$async$NJ)
case 7:case 6:case 1:return A.h(u,v)}})
return A.i($async$NJ,v)},
AX(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$AX=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!t.a.f){w=1
break}s=t.z
s===$&&A.c()
r=B.a.i(s.a.a)
s=t.Q
s===$&&A.c()
q=B.a.i(s.a.a)
if(r.length===0){w=1
break}s=t.gat5()
s=s==null?null:s.a
if(s==null)s=B.o.u(1000*Date.now())
p=Date.now()
o=t.a
w=3
return A.b(C.aRE(o.c,o.d,new C.nq(s,r,q,new A.V(p,0,!1))),$async$AX)
case 3:w=4
return A.b(t.la(),$async$AX)
case 4:if(t.c==null){w=1
break}t.m(new C.dcQ(t))
case 1:return A.h(u,v)}})
return A.i($async$AX,v)},
On(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$On=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.gat5()
if(!t.a.f||r==null){w=1
break}s=t.c
s.toString
w=3
return A.b(A.ck(null,null,!0,null,new C.dcw(r),s,null,!0,!0,x.y),$async$On)
case 3:if(e!==!0||t.c==null){w=1
break}s=t.a
w=4
return A.b(C.bCU(s.c,s.d,r.a),$async$On)
case 4:t.m(new C.dcx(t))
w=5
return A.b(t.la(),$async$On)
case 5:if(t.c!=null){s=t.f
s===$&&A.c()
s=s.f.length!==0}else s=!1
if(s){s=t.f
s===$&&A.c()
s.Ue(B.o.E(t.r+1,0,J.ad(t.d)))}case 1:return A.h(u,v)}})
return A.i($async$On,v)},
yE(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j
var $async$yE=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.AX(),$async$yE)
case 5:case 4:if(t.c==null){w=1
break}w=J.cL(t.d)?6:7
break
case 6:s=t.c
s.toString
r=t.a
q=r.c
p=r.e
o=r.x
w=8
return A.b(C.Rp(s,r.r,o,p,q),$async$yE)
case 8:if(e&&t.c!=null){s=t.c
s.toString
A.a4(s,!1).O(!0)}w=1
break
case 7:s=t.c
s.toString
r=t.a
w=9
return A.b(C.hyJ(s,r.x,r.r),$async$yE)
case 9:n=e
if(n==null||t.c==null){w=1
break}m=1000*Date.now()
s=t.a
w=10
return A.b(C.Lb(s.c,s.d),$async$yE)
case 10:l=e
for(s=n.d,r=J.cD(l),k=0;k<s.length;++k){j=s[k]
q=B.a.i(j.a)
if(q.length===0)q="Page "+(k+1)
r.M(l,new C.nq(""+(m+k),q,B.a.i(j.b),new A.V(Date.now(),0,!1)))}r=t.a
w=11
return A.b(C.Ba(r.c,r.d,l),$async$yE)
case 11:w=12
return A.b(t.la(),$async$yE)
case 12:r=t.c
if(r==null){w=1
break}r.K(x.q).f.U(A.b3(null,null,null,null,null,B.t,null,A.d("The AI wrote your book: "+s.length+" pages.",null,null,null,null,null,null,null,null,null,null),null,B.Z,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$yE,v)},
a14(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$a14=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.AX(),$async$a14)
case 5:case 4:if(t.c==null){w=1
break}s=t.gyC(0)
r=B.a.i(t.y.c)
if(r.length===0)r="Family Book"
q=B.d.dM(D.zo,new C.dcN(t),new C.dcO())
p=A.a([],x.fD)
o=t.a.w
if(B.a.i(o).length!==0)p.push(new H.mJ("Our Family",o,"",""))
for(o=J.aW(t.d);o.C();){n=o.gS(o)
p.push(new H.mJ(n.b,n.c,"",""))}o=t.c
o.toString
w=6
return A.b(H.hbp(o,new H.rA(s,r,"",p,new H.uS(q.d,null,null,null,null,"","","")),null),$async$a14)
case 6:case 1:return A.h(u,v)}})
return A.i($async$a14,v)},
O6(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$O6=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.AX(),$async$O6)
case 5:case 4:s=t.c
if(s==null){w=1
break}w=6
return A.b(A.bV(D.afh,null,new C.dcs(t),s,!0,!0,!0,L.a8u,!1,!1,x.N),$async$O6)
case 6:r=e
if(r==null||t.c==null){w=1
break}q=t.y.cKx(r)
t.m(new C.dct(t,q))
s=t.a
w=7
return A.b(C.S_(s.c,s.d,q),$async$O6)
case 7:case 1:return A.h(u,v)}})
return A.i($async$O6,v)},
Xx(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Xx=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return A.b(A.bV(D.afh,null,new C.dcy(t),r,!0,!0,!0,L.a8u,!1,!1,x.e),$async$Xx)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.m(new C.dcz(t,s))
r=t.a
w=4
return A.b(C.S_(r.c,r.d,s),$async$Xx)
case 4:r=t.f
r===$&&A.c()
if(r.f.length!==0)r.Bg(0,B.dU,B.no)
case 1:return A.h(u,v)}})
return A.i($async$Xx,v)},
bS0(d){var w=d.bU(),v=B.a.aW(B.o.u(w.gcg()),2,"0"),u=B.a.aW(B.o.u(w.gcw()),2,"0")
return""+w.gck()+"-"+v+"-"+u},
gyC(d){var w=B.a.i(this.y.b)
if(!(w.length!==0)){w=B.a.i(this.a.r)
if(w.length===0)w="Our Family Book"}return w},
B(d){var w,v,u,t,s,r=this,q=null,p=r.c_6()
if(r.e)w=D.ae2
else if(J.ct(r.d)){w=r.y
v=r.gyC(0)
u=r.a.f
t=A.d(u?"Your book is waiting for its first page":"No pages yet",q,q,q,q,q,q,D.fja,q,q,q)
u=u?"Add pages and turn them like a real book: stories, memories and notes about your family.":"The tree owner has not written any pages on this device."
s=x.p
u=A.a([new A.a5(q,330,new A.D(X.alm,new C.Z4(w,v,0,q),q),q),B.bx,t,B.am,A.d(u,q,q,q,q,q,q,A.l(q,q,D.kC.j(0.8),q,q,q,q,q,q,q,q,q,q,q,q,q,1.4,!0,q,q,q,q,q,q,q,q),B.K,q,q)],s)
if(r.a.f){w=A.a([B.bx],s)
if(B.a.i(r.a.x).length!==0)w.push(A.aB(q,A.p(q,D.f2Z,B.f,q,q,new A.o(q,q,q,A.n(18),A.a([new A.ac(0,B.G,B.dH.j(0.45),B.I,18)],x.V),E.wA,B.n),q,q,q,q,B.NH,q,q,q),B.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,r.gcH7(),q,q,q,q,q,q,!1,B.a3))
w.push(B.W)
w.push(A.hs(D.bQt,D.fUV,r.gaNw(),q))
B.d.v(u,w)}w=A.au(A.cg(A.x(u,B.m,q,B.e,B.O,0,B.p),B.t,q,B.y,q,B.eu,q,q,B.ah),q,q,q)}else{w=r.r
w=w<0?"Tap the cover to open the book":"Page "+(w+1)+" of "+J.ad(r.d)
w=A.d(w,q,q,q,q,q,q,A.l(q,q,D.kC.j(0.8),q,q,q,q,q,q,q,q,12,q,q,B.U,q,q,!0,q,0.4,q,q,q,q,q,q),q,q,q)
v=r.f
v===$&&A.c()
u=r.w?B.dS:B.AT
u=A.x(A.a([new A.D(D.bAo,w,q),A.E(A.Jj(v,new C.dcZ(r),J.ad(r.d)+1,q,r.gcdA(),u,B.aM),1),r.bEv()],x.p),B.m,q,B.e,B.i,0,B.p)
w=u}v=x.p
return A.c5(q,D.Yl,new A.an(B.a_,q,B.b2,B.t,A.a([D.aOx,A.bm(!0,A.x(A.a([p,A.E(w,1)],v),B.m,q,B.e,B.i,0,B.p),!0,!1,B.af,!0,!0)],v),q),q,!1,!1,q,q)},
c_6(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=h.a
if(f.f)w=B.a.i(f.x).length!==0||J.cL(h.d)
else w=!1
f=A.a([],x.fp)
if(w)f.push(new C.Kh(B.e5,"AI",h.gbCo(),!0))
if(h.a.f)f.push(new C.Kh(B.mb,"Cover",h.gbN1(),!1))
if(h.a.f)f.push(new C.Kh(B.wv,"Header",h.gbI1(),!1))
if(J.cL(h.d)||B.a.i(h.a.w).length!==0)f.push(new C.Kh(B.uy,"Print",h.gcmG(),!1))
if(h.a.f&&J.cL(h.d)&&h.r>=0){v=h.w
u=v?B.hx:B.iX
t=v?"Save":"Edit"
f.push(new C.Kh(u,t,v?h.gcsX():new C.dcJ(h),!1))}if(h.a.f)f.push(new C.Kh(B.hQ,"Add page",h.gaNw(),!1))
v=C.huL(h.y.Q)
u=h.gyC(0)
t=B.a.i(h.y.c)
if(t.length===0)t="Family Book"
s=J.ad(h.d)
r=J.ad(h.d)===1?"page":"pages"
q=x.p
p=A.a([],q)
for(o=f.length,n=x.O,m=0;m<f.length;f.length===o||(0,A.L)(f),++m){l=f[m]
if(l.d)k=D.dCa
else{k=new A.aQ(10,10)
j=A.a([B.c.j(0.14),B.c.j(0.05)],n)
i=new A.ay(E.kb.j(0.5),1,B.r,-1)
j=A.p(g,A.X(l.a,D.kC,g,g,g,17),B.f,g,g,new A.o(g,g,new A.bI(i,i,i,i),new A.bj(k,k,k,k),g,new A.a9(B.a5,B.a8,B.x,j,g,g),B.n),g,32,g,g,g,g,g,32)
k=j}j=D.kC.j(0.85)
p.push(new A.bz(1,B.ba,A.aB(B.c5,A.x(A.a([k,B.bF,new A.y(l.b,g,new A.F(!0,j,g,g,g,g,9.5,B.H,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g),g,g,g,g,g,g,1,g,g)],q),B.m,g,B.e,B.O,0,B.p),B.y,!1,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,l.c,g,g,g,g,g,g,!1,B.a3),g))}return new C.al6(v,u,t+" \xb7 "+s+" "+r,new C.dcK(h),A.B(p,B.m,g,B.e,B.i,0,g,g),g)},
A_(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$A_=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.AX(),$async$A_)
case 5:case 4:if(t.c==null){w=1
break}s=A.a([],x.s)
for(r=J.aW(t.d);r.C();){q=r.gS(r)
s.push(q.b+" "+q.c)}p=H.a2E(B.d.aG(s," "))
s=t.c
s.toString
w=6
return A.b(A.ck(null,null,!0,null,new C.dcp(t,p),s,null,!0,!0,x.N),$async$A_)
case 6:o=e
if(o==null||t.c==null){w=1
break}w=o==="write"?7:9
break
case 7:w=10
return A.b(t.yE(),$async$A_)
case 10:w=8
break
case 9:w=o==="fix"?11:13
break
case 11:w=14
return A.b(t.DW(),$async$A_)
case 14:w=12
break
case 13:w=o==="polish"?15:17
break
case 15:w=18
return A.b(t.Fw("Swahili (Kiswahili)",!0),$async$A_)
case 18:w=16
break
case 17:w=19
return A.b(t.cDJ(o==="sw"?"Swahili (Kiswahili)":"English"),$async$A_)
case 19:case 16:case 12:case 8:case 1:return A.h(u,v)}})
return A.i($async$A_,v)},
Zr(d,e,f,g,h){var w=null,v=A.n(16),u=B.c.j(0.07),t=A.n(16),s=A.K(E.kb.j(0.3),B.r,1),r=x.p
return new A.D(B.cu,A.aO(!1,v,!0,A.p(w,A.B(A.a([A.p(w,A.X(e,B.c,w,w,w,21),B.f,w,w,new A.o(w,w,w,w,w,E.wA,B.a6),w,42,w,w,w,w,w,42),B.bc,A.E(A.x(A.a([A.d(f,w,w,w,w,w,w,A2.Kd,w,w,w),A.d(g,w,w,w,w,w,w,B.Am,w,w,w)],r),B.E,w,B.e,B.i,0,B.p),1)],r),B.m,w,B.e,B.i,0,w,w),B.f,w,w,new A.o(u,w,s,t,w,w,B.n),w,w,w,w,B.bg,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.dcL(d,h),w,w,w,w,w,w,w),w)},
DW(){return this.bRv()},
bRv(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8
var $async$DW=A.e(function(a9,b0){if(a9===1){s.push(b0)
w=t}for(;;)switch(w){case 0:a6={}
a7=r.c
a7.toString
w=3
return A.b(A.ck(null,null,!0,null,new C.dcC(r),a7,null,!0,!0,x.ei),$async$DW)
case 3:q=b0
if(q==null||r.c==null){w=1
break}g=A.C(r.d,x.B)
p=g
f=r.y
o=new A.eB("Working on it\u2026",$.ax())
a6.a=!0
a7=r.c
a7.toString
A.ck(null,null,!1,null,new C.dcD(o),a7,null,!0,!0,x.H).fp(new C.dcE(a6))
n=null
m=null
t=5
a7=q.b
e=q.a
l=A.a([],x.L)
for(d=p,a0=d.length,a1=0;a1<d.length;d.length===a0||(0,A.L)(d),++a1){k=d[a1]
J.ca(l,new A.z(k.b,k.c))}d=r.r
a0=r.y.ah()
j=A.a([],x.s)
for(a1=0;a1<8;++a1){i=D.zo[a1]
J.ca(j,i.a)}w=8
return A.b(C.ahm(a0,a7,new C.dcF(o),d,l,e,j),$async$DW)
case 8:m=b0
t=2
w=7
break
case 5:t=4
a8=s.pop()
h=A.ab(a8)
n=A.w(h)
w=7
break
case 4:w=2
break
case 7:l=r.c
if(l!=null&&a6.a)A.a4(l,!0).eM()
l=o
l.si6($.ax())
J.aS5(l,0)
l=r.c
if(l==null){w=1
break}if(m==null){l=l.K(x.q).f
j=n
l.U(A.b3(null,null,null,null,null,B.t,null,A.d(j==null?y.A:j,null,null,null,null,null,null,null,null,null,null),null,B.Z,null,null,null,null,null,null,null,null,null,null))
w=1
break}l=m.b
a3=l.gcm(l)
w=a3?9:10
break
case 9:l=A.a([],x.I)
for(a4=0;a4<J.ad(p);++a4){if(m.b.aj(0,a4)){j=J.r(p,a4)
a7=m.b.h(0,a4).a
a7=j.bdz(m.b.h(0,a4).b,a7,new A.V(Date.now(),0,!1))
j=a7}else j=J.r(p,a4)
l.push(j)}j=r.a
w=11
return A.b(C.Ba(j.c,j.d,l),$async$DW)
case 11:w=12
return A.b(r.la(),$async$DW)
case 12:case 10:w=m.c!=null&&m.c.a!==0?13:14
break
case 13:l=r.y
j=m.c
j.toString
a7=A.a([],x.s)
for(a1=0;a1<8;++a1)a7.push(D.zo[a1].a)
a5=l.cI4(j,12,a7)
l=r.a
w=15
return A.b(C.S_(l.c,l.d,a5),$async$DW)
case 15:if(r.c!=null)r.m(new C.dcG(r,a5))
l=r.f
l===$&&A.c()
if(l.f.length!==0&&q.a==="cover")l.Bg(0,B.dU,B.no)
a3=!0
case 14:l=r.c
if(l==null){w=1
break}l=l.K(x.q).f
j=A.d(m.a,null,null,null,null,null,null,null,null,null,null)
l.U(A.b3(a3?A.cx6("Undo",new C.dcH(r,p,f),null):null,null,null,null,null,B.t,null,j,null,B.ep,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$DW,v)},
Fw(d,e){return this.cDK(d,e)},
cDJ(d){return this.Fw(d,!1)},
cDK(a2,a3){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$Fw=A.e(function(a4,a5){if(a4===1){s.push(a5)
w=t}for(;;)switch(w){case 0:f={}
e=A.C(r.d,x.B)
d=e
a0=new A.eB("Starting\u2026",$.ax())
f.a=!0
k=r.c
k.toString
A.ck(null,null,!1,null,new C.dcS(a0),k,null,!0,!0,x.H).fp(new C.dcT(f))
q=null
p=null
t=4
o=A.a([],x.L)
for(k=d,j=k.length,i=0;i<k.length;k.length===j||(0,A.L)(k),++i){n=k[i]
J.ca(o,new A.z(n.b,n.c))}m=o
w=a3?7:9
break
case 7:w=10
return A.b(H.a2R(m,new C.dcU(a0)),$async$Fw)
case 10:w=8
break
case 9:w=11
return A.b(C.bEB(new C.dcV(a0),m,a2),$async$Fw)
case 11:case 8:p=a5
t=2
w=6
break
case 4:t=3
a1=s.pop()
l=A.ab(a1)
q=A.w(l)
w=6
break
case 3:w=2
break
case 6:o=r.c
if(o!=null&&f.a)A.a4(o,!0).eM()
o=a0
o.si6($.ax())
J.aS5(o,0)
o=r.c
if(o==null){w=1
break}if(p==null){o=o.K(x.q).f
k=q
o.U(A.b3(null,null,null,null,null,B.t,null,A.d(k==null?y.y:k,null,null,null,null,null,null,null,null,null,null),null,B.Z,null,null,null,null,null,null,null,null,null,null))
w=1
break}o=A.a([],x.I)
for(g=0;g<J.ad(d);++g){k=J.r(d,g)
j=J.r(p,g)
o.push(k.bdz(J.r(p,g).b,j.a,new A.V(Date.now(),0,!1)))}k=r.a
w=12
return A.b(C.Ba(k.c,k.d,o),$async$Fw)
case 12:w=13
return A.b(r.la(),$async$Fw)
case 13:o=r.c
if(o==null){w=1
break}o=o.K(x.q).f
if(a3)k="I rewrote your Swahili so it reads naturally."
else k="Your book is now in "+(B.a.a0(a2,"Swahili")?"Swahili":"English")+"."
k=A.d(k,null,null,null,null,null,null,null,null,null,null)
o.U(A.b3(A.cx6("Undo",new C.dcW(r,d),null),null,null,null,null,B.t,null,k,null,B.Z,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$Fw,v)},
bEv(){var w,v=this,u=null,t=v.r+1,s=t>0,r=s?new C.dcq(v):u
r=A.aG(u,u,u,u,A.X(D.bM8,s?D.kC:B.aY,u,u,u,30),u,u,u,r,u,u,u,u,"Previous page",u)
if(v.a.f&&J.cL(v.d)&&!v.w&&v.r>=0)s=A.hs(A.X(B.we,B.FW,u,u,u,16),A.d("Delete page",u,u,u,u,u,u,A.l(u,u,B.FW,u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),v.gbMC(),u)
else{s=v.w?"Writing\u2026 swiping is off while you edit":"Swipe to turn the page"
s=A.d(s,u,u,u,u,u,u,A.l(u,u,D.kC.j(0.65),u,u,u,u,u,u,u,u,11.5,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)}s=A.E(A.au(s,u,u,u),1)
w=t<J.ad(v.d)?new C.dcr(v):u
return A.bm(!0,new A.D(D.bAc,A.B(A.a([r,s,A.aG(u,u,u,u,A.X(B.eE,t<J.ad(v.d)?D.kC:B.aY,u,u,u,30),u,u,u,w,u,u,u,u,"Next page",u)],x.p),B.m,u,B.e,B.i,0,u,u),u),!0,!1,B.af,!0,!1)}}
C.ZR.prototype={
R(){return new C.bg0(new A.at(B.at,$.ax()))}}
C.bg0.prototype={
ga2d(){var w,v=this.e
if(v===$){w=this.a
if(w.c)v="page"
else v=w.d?"book":"cover"
v=this.e=v}return v},
q(){var w=this.d
w.T$=$.ax()
w.P$=0
this.a1()},
gbQ8(){var w,v=this.ga2d()
A:{if("cover"===v){w=D.d3P
break A}if("book"===v){w=D.d_c
break A}w=D.duD
break A}return w},
B(d){var w,v,u,t,s,r=this,q=null,p=A.n(26),o=E.kb.j(0.5),n=x.p,m=A.B(A.a([D.dCb,B.as,D.bFO,A.aG(q,q,q,q,B.lf,q,q,q,new C.deL(d),q,q,q,q,q,q)],n),B.m,q,B.e,B.i,0,q,q),l=A.a([],n),k=r.a
if(k.c)l.push(A.iU(q,q,q,A.d("This page ("+k.e+")",q,q,q,q,q,q,q,q,q,q),q,new C.deM(r),r.ga2d()==="page",q,q,q,q))
if(r.a.d)l.push(A.iU(q,q,q,D.fPr,q,new C.deN(r),r.ga2d()==="book",q,q,q,q))
l.push(A.iU(q,q,q,D.fCe,q,new C.deO(r),r.ga2d()==="cover",q,q,q,q))
l=A.bX(B.bG,l,B.bq,q,6,8)
k=B.c.j(0.07)
k=A.aM(q,B.Y,!1,q,!0,B.t,q,A.aN(),r.d,q,q,q,q,q,2,A.bt(q,new A.b5(4,A.n(16),B.a0),q,q,q,q,q,q,!0,q,q,q,q,q,q,k,!0,q,q,q,q,q,q,q,q,q,q,q,q,q,B.ku,"Say it in your own words\u2026",q,q,q,q,q,q,q,q,q,!0,!0,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q),B.y,!0,q,!0,q,!1,q,B.aj,q,q,q,q,q,q,q,q,q,6,3,q,!1,"\u2022",q,q,q,q,q,!1,q,q,!1,q,!0,q,B.aa,q,q,q,q,q,q,q,q,q,q,q,B.df,!0,B.a4,q,B.ao,q,q,q,q)
w=A.a([],n)
for(v=r.gbQ8(),u=v.length,t=0;t<u;++t){s=v[t]
w.push(A.mX(q,B.c.j(0.08),new A.y(s,q,B.Ka,q,q,q,q,q,q,q,q,q),B.hb,new C.deP(r,s),q,q,q,q))}return A.eT(q,E.Bp,A.cg(A.x(A.a([m,B.W,D.fSL,B.am,l,B.ae,k,B.P,A.bX(B.bG,w,B.bq,q,6,6),B.aA,A.dl(D.bQq,D.fTy,new C.deQ(r,d),A.bo(B.b6,q,q,q,q,B.oF,q,q,new A.b8(A.n(16),B.a0),q,q,q)),B.au,D.fNF],n),B.E,q,B.e,B.O,0,B.p),B.t,q,B.y,q,B.fk,q,q,B.ah),q,q,q,D.al3,B.d8,q,new A.b8(p,new A.ay(o,1.4,B.r,-1)),q)}}
C.ZP.prototype={
R(){return new C.aAQ(A.a([],x.gA))},
ge1(){return this.c}}
C.af2.prototype={}
C.aAQ.prototype={
Z(){this.a2()
this.la()},
la(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i
var $async$la=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.a
w=3
return A.b(C.Rs(p.c,p.d),$async$la)
case 3:o=e
n=A.a([],x.gA)
p=J.aW(o)
case 4:if(!p.C()){w=5
break}s=p.gS(p)
r=t.a
q=r.d
q=s==="main"?q:q+"~"+s
m=n
l=C
k=s
w=6
return A.b(C.bD7(r.c,q),$async$la)
case 6:j=e
i=J
w=7
return A.b(C.Lb(t.a.c,q),$async$la)
case 7:m.push(new l.af2(k,j,i.ad(e)))
w=4
break
case 5:if(t.c==null){w=1
break}t.m(new C.ddf(t,n))
case 1:return A.h(u,v)}})
return A.i($async$la,v)},
b8W(d){var w=B.a.i(d.b.b)
if(!(w.length!==0)){w=B.a.i(this.a.f)
if(w.length===0)w="Our Family Book"}return w},
Qw(d,e){return this.cf8(0,e)},
cf8(d,e){var w=0,v=A.j(x.H),u=this,t,s
var $async$Qw=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return A.b(A.a4(s,!1).cc(A.eh(new C.dde(u,e),!0,null,x.y)),$async$Qw)
case 2:t=g
w=3
return A.b(u.la(),$async$Qw)
case 3:if(t===!0&&u.c!=null)u.c.K(x.q).f.U(D.aS8)
return A.h(null,v)}})
return A.i($async$Qw,v)},
Fz(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$Fz=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(t.d.length>=6){t.c.K(x.q).f.U(D.aS4)
w=1
break}s=t.a
r=s.w
w=B.a.i(r).length===0?3:4
break
case 3:w=5
return A.b(C.agG(s.c,s.d),$async$Fz)
case 5:q=e
w=6
return A.b(t.la(),$async$Fz)
case 6:w=q!=null&&t.c!=null?7:8
break
case 7:w=9
return A.b(t.Qw(0,B.d.fY(t.d,new C.ddj(q))),$async$Fz)
case 9:case 8:w=1
break
case 4:p=t.c
p.toString
o=s.c
n=s.d
w=10
return A.b(C.Rp(p,s.f,r,n,o),$async$Fz)
case 10:m=e
w=11
return A.b(t.la(),$async$Fz)
case 11:if(m&&t.c!=null)t.c.K(x.q).f.U(D.aS8)
case 1:return A.h(u,v)}})
return A.i($async$Fz,v)},
PZ(d,e){return this.cqE(0,e)},
cqE(d,e){var w=0,v=A.j(x.H),u,t=this,s
var $async$PZ=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=3
return A.b(A.ck(null,null,!0,null,new C.ddi(t,e),s,null,!0,!0,x.y),$async$PZ)
case 3:if(g!==!0){w=1
break}s=t.a
w=4
return A.b(C.a32(s.c,s.d,e.a),$async$PZ)
case 4:w=5
return A.b(t.la(),$async$PZ)
case 5:case 1:return A.h(u,v)}})
return A.i($async$PZ,v)},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.a.e&&o.d.length<6,l=x.p,k=A.a([],l)
for(w=o.d,v=w.length,u=0;u<w.length;w.length===v||(0,A.L)(w),++u)k.push(o.bEy(w[u]))
if(m){t=6-o.d.length
w=A.n(18)
v=B.c.j(0.05)
s=A.K(E.kb.j(0.6),B.r,1.6)
r=t===1?"space":"spaces"
k.push(A.aB(n,new A.fH(0.7142857142857143,A.p(n,A.x(A.a([D.dCc,B.ae,D.elW,B.au,A.d(""+t+" "+r+" left",n,n,n,n,n,n,A.l(n,n,D.kC.j(0.65),n,n,n,n,n,n,n,n,11.5,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],l),B.m,n,B.b9,B.i,0,B.p),B.f,n,n,new A.o(v,n,s,w,n,n,B.n),n,n,n,n,n,n,n,n),n),B.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,o.gcH3(),n,n,n,n,n,n,!1,B.a3))}w=A.n(22)
v=A.K(E.kb.j(0.85),B.r,1.6)
s=A.aB(n,A.p(n,D.bYi,B.f,n,n,new A.o(B.w.j(0.3),n,A.K(E.kb.j(0.6),B.r,1),n,n,n,B.a6),n,32,n,n,n,n,n,32),B.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.ddk(d),n,n,n,n,n,n,!1,B.a3)
r=A.n(14)
q=B.w.j(0.3)
p=A.K(E.kb.j(0.5),B.r,1)
w=A.p(n,A.B(A.a([s,B.bc,D.bGb,A.p(n,A.d(""+o.d.length+" of 6",n,n,n,n,n,n,D.fia,n,n,n),B.f,n,n,new A.o(q,n,p,r,n,n,B.n),n,n,n,n,B.h4,n,n,n)],l),B.m,n,B.e,B.i,0,n,n),B.f,n,n,new A.o(n,n,v,w,n,D.c3d,B.n),n,n,n,Ay.Nr,D.bye,n,n,n)
if(o.e)k=D.ae2
else k=k.length===0?D.b9D:A.cu(new C.ddl(k))
return A.c5(n,D.Yl,new A.an(B.a_,n,B.b2,B.t,A.a([D.aOx,A.bm(!0,A.x(A.a([w,A.E(k,1)],l),B.m,n,B.e,B.i,0,B.p),!0,!1,B.af,!0,!0)],l),n),n,!1,!1,n,n)},
bEy(d){var w,v,u=this,t=null,s=u.b8W(d),r=d.c,q=x.p,p=A.a([A.bS(0,A.eO(B.A,new A.a5(300,420,new C.Z4(d.b,s,r,t),t),B.f,B.dz),0,0,0)],q)
if(u.a.e)p.push(A.ap(t,A.aB(t,A.p(t,D.bXC,B.f,t,t,new A.o(B.w.j(0.55),t,A.K(B.aY,B.r,1),t,t,t,B.a6),t,28,t,t,t,t,t,28),B.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new C.ddc(u,d),t,t,t,t,t,t,!1,B.a3),t,t,t,6,6,t))
w=A.d(s,t,1,B.a1,t,t,t,D.fhL,t,t,t)
v=r===1?"page":"pages"
return A.aB(t,A.x(A.a([new A.fH(0.7142857142857143,new A.an(B.a_,t,B.ab,B.t,p,t),t),B.P,w,A.d(""+r+" "+v,t,t,t,t,t,t,A.l(t,t,D.kC.j(0.6),t,t,t,t,t,t,t,t,11,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],q),B.m,t,B.e,B.i,0,B.p),B.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new C.ddd(u,d),t,t,t,t,t,t,!1,B.a3)}}
C.Kh.prototype={}
C.Z4.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=B.d.dM(D.zo,new C.cLI(m),new C.cLJ()),j=m.c,i=D.Dg.h(0,j.e),h=A.b1(i==null?4293444714:i)
i=j.r
if(i==="top")w=B.e
else w=i==="bottom"?B.mi:B.b9
v=new C.cLK(h)
i=A.a([new A.ac(0,B.G,B.w.j(0.6),D.eiE,28)],x.V)
u=x.p
t=A.a([A.bS(0,A.b4(l,l,l,new C.bdc(j.x,h,l),B.aw),0,0,0),A.ap(0,A.p(l,l,B.f,l,l,new A.o(l,l,l,l,l,new A.a9(B.a5,B.a8,B.x,A.a([B.w.j(0.45),B.L],x.O),l,l),B.n),l,l,l,l,l,l,l,l),l,l,0,l,0,26)],u)
for(s=0;s<6;++s){r=new A.aQ(3,3)
t.push(new A.cN(8,40+s*46,l,l,l,l,A.p(l,l,B.f,l,l,new A.o(h.j(0.7),l,l,new A.bj(r,r,r,r),l,l,B.n),l,22,l,l,l,l,l,6),l))}r=j.w
if(r==="double")B.d.v(t,A.a([v.$4(D.aln,8,0.85,2.2),v.$4(D.bD6,5,0.45,1)],u))
else if(r==="single")t.push(v.$4(D.aln,8,0.85,2.4))
else if(r==="corners")t.push(A.bS(0,new A.D(D.bD2,A.b4(l,l,l,new C.bd3(h,l),B.aw),l),0,0,0))
r=A.X(D.aA5[B.o.E(j.d,0,11)],h.j(0.95),l,l,l,44)
q=A.d(m.d,l,4,B.a1,l,l,l,A.l(l,l,h,l,l,l,l,l,l,l,l,j.f,l,l,B.u,l,1.2,!0,l,0.5,l,l,l,D.axk,l,l),B.K,l,l)
p=A.p(l,l,B.f,h.j(0.7),l,l,l,2,l,l,l,l,l,90)
o=B.a.i(j.c)
if(!(o.length!==0)){o=m.e
if(o===0)o="A family story"
else{n=o===1?"page":"pages"
n=""+o+" "+n+" of our story"
o=n}}o=A.a([r,B.aA,q,B.ae,p,B.ae,A.d(o,l,l,l,l,l,l,A.l(l,l,h.j(0.85),l,l,l,l,l,l,l,l,14,B.cD,l,l,l,l,!0,l,l,l,l,l,l,l,l),B.K,l,l)],u)
r=B.a.i(j.y)
if(r.length!==0)B.d.v(o,A.a([B.aQ,A.d(r,l,2,B.a1,l,l,l,A.l(l,l,h.j(0.9),l,l,l,l,l,l,l,l,13,l,l,B.H,l,l,!0,l,1.2,l,l,l,l,l,l),B.K,l,l)],u))
t.push(A.bS(0,new A.D(D.bDx,A.x(o,B.m,l,w,B.i,0,B.p),l),0,0,0))
if(j.z)t.push(A.ap(l,A.b4(l,l,l,new C.aHP(l),D.f7k),l,l,l,46,0,l))
return A.p(l,A.bx(D.acF,new A.an(B.a_,l,B.ab,B.t,t,l),B.ap),B.f,l,l,new A.o(l,l,l,D.acF,i,new A.a9(B.ay,B.aD,B.x,k.c,l,l),B.n),l,l,l,l,l,l,l,l)}}
C.bdc.prototype={
a3(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=new A.e4()
f.cY(11)
switch(this.b){case"plain":return
case"linen":$.S()
w=A.I()
w.r=B.w.j(0.07).gp(0)
w.c=1
for(v=e.b,u=e.a,t=d.a,s=0;s<v;s+=4){r=w.G()
t.drawLine.apply(t,[0,s,u,s,r])
r.delete()}$.S()
q=A.I()
q.r=B.c.j(0.05).gp(0)
q.c=1
for(p=0;p<u;p+=4){r=q.G()
t.drawLine.apply(t,[p,0,p,v,r])
r.delete()}break
case"stars":for(v=e.a,u=e.b,t=this.c,o=d.a,n=0;n<70;++n){m=f.af()
l=f.af()
k=f.af()
$.S()
j=new A.ao(B.Q,B.M,B.S,B.T,B.R)
j.r=t.j(0.25+f.af()*0.5).gp(0)
r=j.G()
o.drawCircle(m*v,l*u,0.6+k*1.6,r)
r.delete()}break
case"rays":v=e.a*0.55
u=e.b
t=u*0.1
for(o=d.a,m=this.c,l=x.v,n=0;n<14;++n){i=0.47123889803846897+n*0.1691626813471427
k=$.S()
j=A.a([],l)
h=new A.aF(k.r,B.ag,null,null,j)
j.push(new A.aY(v,t))
k=i-0.04
j.push(new A.aq(v+Math.cos(k)*u*1.4,t+Math.sin(k)*u*1.4))
k=i+0.04
j.push(new A.aq(v+Math.cos(k)*u*1.4,t+Math.sin(k)*u*1.4))
j.push(new A.bs())
k=new A.ao(B.Q,B.M,B.S,B.T,B.R)
k.r=m.j((n&1)===0?0.09:0.03).gp(0)
r=k.G()
k=h.gbv().a.snapshot()
o.drawPath((h.e=new A.ce(k)).a,r)
r.delete()}break
default:$.S()
w=A.I()
w.r=B.w.j(0.07).gp(0)
for(v=e.a,u=e.b,t=d.a,n=0;n<260;++n){o=f.af()
m=f.af()
l=f.af()
r=w.G()
t.drawCircle(o*v,m*u,0.8+l*1.8,r)
r.delete()}$.S()
g=A.I()
g.r=B.c.j(0.035).gp(0)
for(n=0;n<120;++n){o=f.af()
m=f.af()
l=f.af()
r=g.G()
t.drawCircle(o*v,m*u,0.6+l*1.2,r)
r.delete()}}},
av(d){return d.b!==this.b||!d.c.A(0,this.c)}}
C.bd3.prototype={
a3(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=$.S(),k=A.I(),j=this.b
k.r=j.j(0.9).gp(0)
k.b=B.a9
k.c=2.4
k.d=B.bA
for(w=e.a,v=e.b,v=[D.eYy,new A.cy([w,0,-1,1]),new A.cy([0,v,1,-1]),new A.cy([w,v,-1,-1])],w=d.a,u=x.v,l=l.r,t=0;t<4;++t){s=v[t].a
r=s[0]
q=s[1]
p=s[2]
o=s[3]
s=A.a([],u)
n=new A.aF(l,B.ag,null,null,s)
s.push(new A.aY(r+p*34,q))
s.push(new A.aq(r,q))
s.push(new A.aq(r,q+o*34))
m=k.G()
s=n.gbv().a.snapshot()
w.drawPath((n.e=new A.ce(s)).a,m)
m.delete()
s=new A.ao(B.Q,B.M,B.S,B.T,B.R)
s.r=j.j(0.9).gp(0)
m=s.G()
w.drawCircle(r+p*9,q+o*9,3,m)
m.delete()}},
av(d){return!d.b.A(0,this.b)}}
C.uD.prototype={}
C.Zn.prototype={
R(){return new C.bda()}}
C.bda.prototype={
gof(){var w=this.d
return w===$?this.d=this.a.c:w},
gyC(d){var w,v=this.e
if(v===$){w=this.a.c
v=this.e=new A.at(new A.ba(w.b,B.b3,B.aO),$.ax())}return v},
gaBT(){var w,v=this.f
if(v===$){w=this.a.c
v=this.f=new A.at(new A.ba(w.c,B.b3,B.aO),$.ax())}return v},
garE(){var w,v=this.r
if(v===$){w=this.a.c
v=this.r=new A.at(new A.ba(w.y,B.b3,B.aO),$.ax())}return v},
q(){var w=this,v=w.gyC(0),u=v.T$=$.ax()
v.P$=0
v=w.gaBT()
v.T$=u
v.P$=0
v=w.garE()
v.T$=u
v.P$=0
w.a1()},
ash(d,e,f,g){var w,v,u,t,s=null,r=A.a([],x.p)
for(w=d.length,v=0;v<w;++v){u=d[v]
t=g.h(0,u)
r.push(A.iU(s,s,s,new A.y(t==null?u:t,s,s,s,s,s,s,s,s,s,s,s),s,new C.d4h(this,f,u),e===u,s,s,s,s))}return A.bX(B.bG,r,B.bq,s,6,8)},
axY(d){var w=null,v=B.c.j(0.07)
return A.bt(w,new A.b5(4,A.n(14),B.a0),w,w,w,w,w,w,!0,w,w,w,w,w,w,v,!0,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,!0,w,B.lR,d,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w)},
B(a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null,d=f.gof(),a0=f.gyC(0),a1=a0.a.a,a2=f.gaBT(),a3=a2.a.a,a4=f.garE(),a5=d.bdx(a4.a.a,a3,a1)
a1=x.w
a3=A.aI(a6,e,a1).w
a1=A.aI(a6,e,a1).w
d=B.a.i(a5.b)
if(d.length===0)d=f.a.d
d=A.au(new A.a5(190,260,A.eO(B.A,new A.a5(270,370,new C.Z4(a5,d,f.a.e,e),e),B.f,B.dz),e),e,e,e)
a0=A.aM(e,B.Y,!1,e,!0,B.t,e,A.aN(),a0,e,e,e,e,e,2,f.axY("Title on the cover"),B.y,!0,e,!0,e,!1,e,B.aj,e,e,e,e,e,e,e,e,e,1,e,e,!1,"\u2022",e,new C.d4G(f),e,e,e,!1,e,e,!1,e,!0,e,B.aa,e,e,e,e,e,e,e,e,e,e,e,B.df,!0,B.a4,e,B.ao,e,e,e,e)
a2=A.aM(e,B.Y,!1,e,!0,B.t,e,A.aN(),a2,e,e,e,e,e,2,f.axY("Small line under it (optional)"),B.y,!0,e,!0,e,!1,e,B.aj,e,e,e,e,e,e,e,e,e,1,e,e,!1,"\u2022",e,new C.d4H(f),e,e,e,!1,e,e,!1,e,!0,e,B.aa,e,e,e,e,e,e,e,e,e,e,e,B.df,!0,B.a4,e,B.ao,e,e,e,e)
w=x.p
v=A.a([],w)
for(u=0;u<8;++u){t=D.zo[u]
s=f.d
if(s===$){s=f.d=f.a.c
r=s}else r=s
q=t.a
p=s.a===q?B.c:B.aY
q=r.a===q
o=new A.ay(p,q?3:1,B.r,-1)
p=A.p(e,e,B.f,e,e,new A.o(e,e,new A.bI(o,o,o,o),e,e,new A.a9(B.ay,B.aD,B.x,t.c,e,e),B.a6),e,46,e,e,e,e,e,46)
q=q?B.c:B.aB
v.push(A.aB(e,A.x(A.a([p,B.cN,new A.y(t.b,e,new A.F(!0,q,e,e,e,e,10.5,B.U,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e),e,e,e,e,e,e,e,e,e)],w),B.m,e,B.e,B.O,0,B.p),B.y,!1,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,new C.d4I(f,t),e,e,e,e,e,e,!1,B.a3))}v=A.bX(B.bG,v,B.bq,e,10,10)
q=A.a([],w)
for(n=0;n<12;++n){s=f.d
p=(s===$?f.d=f.a.c:s).d===n?B.b6.j(0.35):B.c.j(0.07)
m=new A.aQ(14,14)
s=f.d
o=new A.ay((s===$?f.d=f.a.c:s).d===n?B.eG:B.L,2,B.r,-1)
q.push(A.aB(e,A.p(e,A.X(D.aA5[n],B.c,e,e,e,24),B.f,e,e,new A.o(p,e,new A.bI(o,o,o,o),new A.bj(m,m,m,m),e,e,B.n),e,46,e,e,e,e,e,46),B.y,!1,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,new C.d4J(f,n),e,e,e,e,e,e,!1,B.a3))}q=A.bX(B.bG,q,B.bq,e,8,8)
a4=A.aM(e,B.Y,!1,e,!0,B.t,e,A.aN(),a4,e,e,e,e,e,2,f.axY("Author or family name line (optional)"),B.y,!0,e,!0,e,!1,e,B.aj,e,e,e,e,e,e,e,e,e,1,e,e,!1,"\u2022",e,new C.d4K(f),e,e,e,!1,e,e,!1,e,!0,e,B.aa,e,e,e,e,e,e,e,e,e,e,e,B.df,!0,B.a4,e,B.ao,e,e,e,e)
p=A.d("LETTERING COLOUR",e,e,e,e,e,e,M.vn,e,e,e)
m=A.a([],w)
for(l=D.Dg.gdV(D.Dg),l=l.gag(l);l.C();){k=l.gS(l)
j=A.b1(k.b)
s=f.d
if(s===$){s=f.d=f.a.c
r=s}else r=s
i=k.a
h=s.e===i?B.eG:B.aY
g=r.e===i
o=new A.ay(h,g?3:1,B.r,-1)
j=A.p(e,e,B.f,e,e,new A.o(j,e,new A.bI(o,o,o,o),e,e,e,B.a6),e,34,e,e,e,e,e,34)
h=g?B.c:B.aB
m.push(A.aB(e,A.x(A.a([j,B.bF,new A.y(i,e,new A.F(!0,h,e,e,e,e,10,B.U,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e),e,e,e,e,e,e,e,e,e)],w),B.m,e,B.e,B.O,0,B.p),B.y,!1,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,new C.d4L(f,k),e,e,e,e,e,e,!1,B.a3))}m=A.bX(B.bG,m,B.bq,e,8,10)
l=A.d("TITLE SIZE",e,e,e,e,e,e,M.vn,e,e,e)
k=f.gof()
return new A.D(new A.Q(0,0,0,a3.f.d),A.bm(!0,new A.cU(new A.aZ(0,1/0,0,a1.a.b*0.92),A.cn(A.a([D.fN7,B.ae,d,B.aQ,a0,B.W,a2,B.aA,D.fTk,B.P,v,B.aA,D.fNg,B.P,q,B.aA,a4,B.aA,p,B.P,m,B.aA,l,A.kQ(e,9,""+B.k.V(f.gof().f),36,18,new C.d4M(f),k.f),A.d("WHERE THE WORDS SIT",e,e,e,e,e,e,M.vn,e,e,e),B.am,f.ash(D.a5q,f.gof().r,new C.d4N(f),D.dxR),B.ae,A.d("BORDER",e,e,e,e,e,e,M.vn,e,e,e),B.am,f.ash(D.a4L,f.gof().w,new C.d4O(f),D.dxX),B.ae,A.d("COVER MATERIAL",e,e,e,e,e,e,M.vn,e,e,e),B.am,f.ash(D.a4H,f.gof().x,new C.d4Q(f),D.dzr),B.am,A.iM(e,B.b6,e,B.af,e,new C.d4R(f),e,e,e,D.fHl,f.gof().z),B.bx,A.bH(D.fLQ,e,new C.d4S(f,a6),A.bo(B.b6,e,e,e,e,B.oF,e,e,new A.b8(A.n(16),B.a0),e,e,e))],w),e,A_.akU,e,e,B.ah,!0),e),!0,!1,B.af,!0,!0),e)}}
C.aHP.prototype={
a3(d,e){var w,v,u,t=new A.aF($.S().r,B.ag,null,null,A.a([],x.v))
t.D(new A.aY(0,0))
w=e.a
t.D(new A.aq(w,0))
v=e.b
t.D(new A.aq(w,v))
t.D(new A.aq(w/2,v-12))
t.D(new A.aq(0,v))
t.D(new A.bs())
u=A.I()
u.sam(D.c3U.aA(0,new A.a3(0,0,0+w,0+v)))
d.aH(t,u)},
av(d){return!1}}
C.biz.prototype={
a3(a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=null,a1=a6.a,a2=a6.b,a3=0+a1,a4=0+a2
$.S()
w=A.I()
w.sam(D.c2U.aA(0,new A.a3(0,0,a3,a4)))
a5.aP(new A.a3(0,0,a3,a4),w)
v=B.k.dd(a2/112)
u=new A.e4()
u.cY(4)
for(w=a5.a,t=x.O,s=0;s<v;){++s
r=s*112
for(q=r-14,p=q+2,o=-r,n=6;n<a1;){m=14+u.af()*20
l=56+u.af()*40
k=D.d3O[u.ap(9)]
j=u.ap(14)
J.bl(w.save())
if(j===0){j=n+m
w.translate(j,r)
w.rotate(-10.313240312354818,0,0)
w.translate(-j,o)}j=r-l
i=new A.a3(n,j,n+m,j+l)
h=A.br(i,B.hn)
g=new A.ao(B.Q,B.M,B.S,B.T,B.R)
f=A.ar(k,B.c,0.12)
f.toString
e=A.ar(k,B.w,0.45)
e.toString
g.sam(new A.a9(B.a5,B.a8,B.x,A.a([f,k,e],t),a0,a0).aA(0,i))
d=g.G()
w.drawRRect(A.e5(h),d)
d.delete()
h=n+2
j+=10
g=h+(m-4)
e=new A.ao(B.Q,B.M,B.S,B.T,B.R)
e.r=E.kb.j(0.55).gp(0)
d=e.G()
w.drawRect(A.bG(new A.a3(h,j,g,j+2)),d)
d.delete()
j=new A.ao(B.Q,B.M,B.S,B.T,B.R)
j.r=E.kb.j(0.4).gp(0)
d=j.G()
w.drawRect(A.bG(new A.a3(h,q,g,p)),d)
d.delete()
w.restore()
j=u.ap(9)===0?18:0
n+=m+1+j}q=r+10
p=new A.ao(B.Q,B.M,B.S,B.T,B.R)
p.sam(D.c2f.aA(0,new A.a3(0,r,a3,q)))
d=p.G()
w.drawRect(A.bG(new A.a3(0,r,a3,q)),d)
d.delete()
p=new A.ao(B.Q,B.M,B.S,B.T,B.R)
p.r=B.w.j(0.5).gp(0)
p.z=B.kP
d=p.G()
w.drawRect(A.bG(new A.a3(0,q,a3,q+14)),d)
d.delete()}w=A.I()
w.r=D.bdl.j(0.72).gp(0)
a5.aP(new A.a3(0,0,a3,a4),w)
w=a1*0.5
a2*=0.36
a1*=0.95
a4=A.I()
a4.sam(new A.c2(B.A,0.5,B.x,a0,0,A.a([D.blo.j(0.22),B.L],t),a0,a0).aA(0,A.bY(new A.t(w,a2),a1)))
a5.ad(new A.t(w,a2),a1,a4)},
av(d){return!1}}
C.bbn.prototype={
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=p.c,m=B.a.i(n.c),l=A.ag("[ \t]{2,}",!0,!1,!1,!1),k=A.aL(m,l," ")
m=x.p
l=A.a([],m)
for(w=3;w>=1;--w){v=-w
l.push(new A.cN(14,w*2,v*2.2,v*2,o,o,new A.l0(new A.o(A.ar(D.kC,D.bqk,w/4),o,new A.bI(B.a0,new A.ay(B.w.j(0.12),1,B.r,-1),B.a0,B.a0),B.Lo,o,o,B.n),B.bh,o,o),o))}v=x.V
u=A.a([new A.ac(0,B.G,B.w.j(0.35),B.aK8,8)],v)
t=A.a([],m)
for(w=0;w<5;++w){s=new A.aQ(2,2)
t.push(A.p(o,o,B.f,o,o,new A.o(E.kb.j(0.6),o,o,new A.bj(s,s,s,s),o,o,B.n),o,14,o,o,o,o,o,3))}u=A.p(o,A.x(t,B.m,o,B.qB,B.i,0,B.p),B.f,o,o,new A.o(o,o,o,D.b1Q,u,D.c3S,B.n),o,o,o,o,o,o,o,14)
v=A.a([new A.ac(0,B.G,B.w.j(0.4),B.dq,18)],v)
t=A.ap(o,A.b4(o,o,o,new C.aHP(o),D.f7f),o,o,o,26,-2,o)
s=A.a([],m)
r=p.z
q=B.a.i(r)
if(q.length!==0)s.push(new C.aVz(p.y,r,K.iQ,o))
r=n.d
q=p.x
if(p.f)n=A.x(A.a([A.aM(o,B.Y,!1,o,!0,B.t,o,A.aN(),p.r,o,o,o,o,o,2,A.bt(o,B.eF,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,A.l(o,o,K.iQ.j(0.35),o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),"Page title",o,o,o,o,o,o,o,o,o,!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),B.y,!0,o,!0,o,!1,o,B.aj,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.aa,o,o,o,o,o,o,o,o,o,o,o,D.fwm,!0,B.a4,o,B.ao,o,o,o,o),A.d(q.$1(r),o,o,o,o,o,o,A.l(o,o,K.iQ.j(0.45),o,o,o,o,o,o,o,o,11,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),B.W,A.E(A.aM(o,B.Y,!1,o,!0,B.t,o,A.aN(),p.w,o,o,o,o,o,2,A.bt(o,B.eF,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,A.l(o,o,K.iQ.j(0.35),o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),"Write your family story here\u2026",o,o,o,o,o,o,o,o,o,!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),B.y,!0,o,!0,o,!0,o,B.aj,o,o,o,o,o,o,o,o,o,o,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.aa,o,o,o,o,o,o,o,o,o,o,o,D.fn2,!0,B.a4,B.Af,B.ao,o,o,o,o),1)],m),B.ak,o,B.e,B.i,0,B.p)
else{n=A.a([A.d(n.b,o,o,o,o,o,o,D.fwe,o,o,o),B.au,A.d(q.$1(r),o,o,o,o,o,o,A.l(o,o,K.iQ.j(0.5),o,o,o,o,o,o,o,o,11,B.cD,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),B.P,A.B(A.a([A.E(A.p(o,o,B.f,D.FG.j(0.35),o,o,o,1,o,o,o,o,o,o),1),new A.D(B.fC,A.d("\u2766",o,o,o,o,o,o,A.l(o,o,D.FG.j(0.7),o,o,o,o,o,o,o,o,16,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),o),A.E(A.p(o,o,B.f,D.FG.j(0.35),o,o,o,1,o,o,o,o,o,o),1)],m),B.m,o,B.e,B.i,0,o,o),B.aA],m)
if(k.length===0)n.push(A.d("This page is blank. Tap the pencil to write.",o,o,o,o,o,o,A.l(o,o,K.iQ.j(0.4),o,o,o,o,o,o,o,o,16,o,o,o,o,1.7,!0,o,o,o,o,o,o,o,o),o,o,o))
else n.push(A.Yh(A.cS(A.a([A.cS(o,o,o,o,o,o,o,o,o,D.fqe,B.a.ar(k,0,1)),A.cS(o,o,o,o,o,o,o,o,o,o,B.a.b5(k,1))],x.R),o,o,o,o,o,o,o,o,o,o),o,o,A.l(o,o,K.iQ.j(0.93),o,o,o,o,o,o,o,o,16.5,o,o,o,o,1.72,!0,o,o,o,o,o,o,o,o),o))
n=A.cg(A.x(n,B.E,o,B.e,B.i,0,B.p),B.t,o,B.y,o,o,o,o,B.ah)}s.push(A.E(n,1))
s.push(new A.D(B.i4,A.d("\u2014 "+p.d+" \u2014",o,o,o,o,o,o,A.l(o,o,K.iQ.j(0.5),o,o,o,o,o,o,o,o,12,o,o,o,o,o,!0,o,1,o,o,o,o,o,o),B.K,o,o),o))
l.push(A.B(A.a([u,A.E(A.p(o,A.bx(B.Lo,new A.an(B.a_,o,B.ab,B.t,A.a([t,new A.D(D.bCz,A.x(s,B.ak,o,B.e,B.i,0,B.p),o),A.ap(0,A.c3(o,new A.o(o,o,o,o,o,new A.a9(B.a5,B.a8,B.x,A.a([B.w.j(0.16),B.L],x.O),o,o),B.n),B.bh),o,o,0,o,0,22)],m),o),B.ap),B.f,o,o,new A.o(o,o,o,B.Lo,v,D.c4p,B.n),o,o,o,o,o,o,o,o),1)],m),B.ak,o,B.e,B.i,0,o,o))
return new A.an(B.a_,o,B.ab,B.t,l,o)}}
C.al7.prototype={
R(){return new C.al8(new A.eB(0,$.ax()),new C.bRL(),new C.alq(),D.hro,null,null)},
gd_(){return this.d}}
C.a14.prototype={
a6(){return"_Step."+this.b}}
C.al8.prototype={
gC4(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.bD3(w.c,6,w.e,!1)
u.d!==$&&A.bF()
u.d=v
t=v}return t},
gh8(d){var w,v=this,u=v.e
if(u===$){w=C.Mv(v.a.c)
v.e!==$&&A.bF()
v.e=w
u=w}return u},
gTx(){var w=this.gh8(0)
return w.gyW()==null?"Babu":B.a.i(w.gyW().b)},
Z(){var w,v=this
v.a2()
w=v.gh8(0).gyW()
w=w==null?null:w.c
v.r.b=w===D.oe
w=v.pR(new C.bQ6(v))
w.h6(0)
v.x!==$&&A.aP()
v.x=w
v.a2a("Come closer, my children. I am "+v.gTx()+", elder of the "+v.a.c.b+" family. Tonight, by this fire, we remember who we are.")},
q(){var w=this,v=w.x
v===$&&A.c()
v.q()
v=w.y
if(v!=null)v.a4(0)
v=w.z
if(v!=null)v.a4(0)
w.w.q()
v=w.f
v.T$=$.ax()
v.P$=0
w.bu4()},
a2a(d){var w=this,v=w.y
if(v!=null)v.a4(0)
w.db=d
w.dx=0
w.r.c=!0
w.y=A.dh(D.ajw,new C.bQ0(w))},
bqv(){var w,v=this
if(v.dx>=v.db.length)return
w=v.y
if(w!=null)w.a4(0)
v.m(new C.bQ9(v))},
adq(d){var w=this.r
w.a=d
w.e=this.f.a
w.w=this.cy},
bqo(){return this.b8t()},
b8t(){var w=this,v=w.gC4()[w.as],u=v.e
u=u.length!==0?u:v.d
w.m(new C.bQ1(w))
w.a2a(u)
v=w.z
if(v!=null)v.a4(0)
w.z=A.cG(B.m5,new C.bQ2(w))},
cIb(){var w=this
w.m(new C.bQ5(w))
w.a2a(w.gC4()[w.as].a)},
KJ(d){var w,v,u,t,s,r,q,p=this
if(p.Q!==D.abP)return
w=p.gC4()
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
t.r=s.a+1.5}q=new A.e4()
q.cY(v*7+d)
p.m(new C.bQ4(p,d,u,q))
p.a2a(u?D.djd[q.ap(4)]+" "+w[p.as].d:D.dfU[q.ap(3)]+" "+w[p.as].d)},
kF(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$kF=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.as
q=t.gC4()
p=q.length
w=r+1>=p?3:4
break
case 3:s=C.bFk(t.at,t.ay,p)
t.m(new C.bQ7(t,s))
t.a2a(t.at>=q.length-1?"You carry the family now. Never let the fire go out.":"You listened well tonight. Come again, and the fire will burn higher.")
w=5
return A.b(C.Bu(t.a.d,s),$async$kF)
case 5:t.cx=f
r=t.a
w=6
return A.b(C.Bv(r.d,r.c.a,"fire",t.at*10),$async$kF)
case 6:t.dy=f
if(t.c!=null)t.m(new C.bQ8())
w=1
break
case 4:++t.as
t.b8t()
case 1:return A.h(u,v)}})
return A.i($async$kF,v)},
B(d){var w=this,v=null,u=w.f,t=x.p
return A.c5(v,D.Xu,new A.an(B.a_,v,B.ab,B.t,A.a([A.bS(0,new A.er(A.b4(v,v,v,new C.aVE(u,w.r,w.w,u),B.aw),v),0,0,0),A.bm(!0,A.x(A.a([w.c9y(0),B.b1,w.bPk()],t),B.m,v,B.e,B.i,0,B.p),!0,!1,B.af,!0,!0)],t),v),v,!1,!1,v,v)},
c9y(d){var w,v,u,t=this,s=null,r=A.aG(s,s,s,s,B.Pe,s,s,s,new C.bQ3(t),s,s,s,s,s,s),q=x.p,p=A.a([],q)
for(w=0;w<t.gC4().length;++w){v=t.as
if(w<v||t.Q===D.aZt)v=B.cI
else v=w===v?B.c:B.aY
u=new A.aQ(4,4)
p.push(A.p(s,s,B.f,s,s,new A.o(v,s,s,new A.bj(u,u,u,u),s,s,B.n),s,7,s,D.bxZ,s,s,s,22))}p=A.E(A.x(A.a([D.fE6,A.B(p,B.m,s,B.e,B.i,0,s,s)],q),B.E,s,B.e,B.i,0,B.p),1)
v=A.n(14)
u=A.K(B.fr,B.r,1)
return new A.D(D.bDK,A.B(A.a([r,p,A.p(s,A.d("\ud83d\udd25 "+B.k.V(t.cy*100)+"%",s,s,s,s,s,s,B.iu,s,s,s),B.f,s,s,new A.o(B.aS,s,u,v,s,s,B.n),s,s,s,s,B.h4,s,s,s)],q),B.m,s,B.e,B.i,0,s,s),s)},
bPk(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.gh8(0).gyW()
if(h==null)w=1
else w=h.c===D.oe?0:1
v=j.dx
u=j.db
t=D.q2.j(0.96)
s=A.n(22)
r=A.K(B.cI,B.r,3)
q=A.b4(i,i,i,new C.bo7(w,i),B.aw)
p=A.d(j.Q===D.abP?j.gTx()+" asks":"Elder "+j.gTx(),i,i,i,i,i,i,D.aTj,i,i,i)
o=j.db
o=B.a.ar(o,0,Math.min(j.dx,o.length))
n=x.p
o=A.aB(B.c5,A.B(A.a([new A.a5(62,62,q,i),B.as,A.E(A.x(A.a([p,B.bF,A.d(o+(v<u.length?"\u258d":""),i,i,i,i,i,i,D.aTy,i,i,i)],n),B.E,i,B.e,B.i,0,B.p),1)],n),B.E,i,B.e,B.i,0,i,i),B.y,!1,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,j.gbqu(),i,i,i,i,i,i,!1,B.a3)
switch(j.Q.a){case 0:v=A.au(j.a9z("Sit down by the fire",j.gbqn()),i,i,i)
break
case 1:v=A.au(j.a9z("Ask me, Elder",j.gcIa()),i,i,i)
break
case 2:v=A.a([],n)
for(m=0;u=j.gC4()[j.as].b,m<u.length;++m){q=new A.aQ(14,14)
l=new A.ay(D.lv,2.5,B.r,-1)
v.push(A.aB(i,A.p(i,new A.y(u[m],i,D.aTu,i,B.K,i,i,i,i,i,i,i),B.f,i,D.adg,new A.o(D.aiv,i,new A.bI(l,l,l,l),new A.bj(q,q,q,q),i,i,B.n),i,i,i,i,V.w2,i,i,i),B.y,!1,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,new C.bPY(j,m),i,i,i,i,i,i,!1,B.a3))}v=A.bX(B.bG,v,B.bq,i,8,8)
break
case 3:v=j.fr
u=v?B.kj:Al.aon
u=A.X(u,v?B.ei:D.lv,i,i,i,i)
q=v?"The fire grows!":"Listen and learn."
q=A.E(A.d(q,i,i,i,i,i,i,A.l(i,i,v?B.ei:D.lv,i,i,i,i,i,i,i,i,i,i,i,B.u,i,i,!0,i,i,i,i,i,i,i,i),i,i,i),1)
v=j.as+1>=j.gC4().length?"Finish":"Next story"
v=A.B(A.a([u,B.ac,q,j.a9z(v,j.gq8(j))],n),B.m,i,B.e,B.i,0,i,i)
break
case 4:v=A.a([A.d(""+j.at+" of "+j.gC4().length+" right  \xb7  +"+j.CW+" \u2b50",i,i,i,i,i,i,D.aTN,i,i,i)],n)
u=j.cx
if(u>0){u=C.aPT(u)
q=C.aPT(j.cx)
p=j.cx
k=j.dy?" \xb7 \ud83c\udfc6 new record!":""
v.push(A.d(u.b+" "+q.a+" \xb7 "+p+" stars"+k,i,i,i,i,i,i,D.aaf,i,i,i))}v.push(B.P)
v.push(j.a9z("Back to the games",new C.bPZ(j)))
v=A.x(v,B.m,i,B.e,B.i,0,B.p)
break
default:v=i}return A.p(i,A.x(A.a([o,B.W,v],n),B.E,i,B.e,B.O,0,B.p),B.f,i,i,new A.o(t,i,r,s,D.aBy,i,B.n),i,i,i,B.BM,B.bg,i,i,i)},
a9z(d,e){var w=null,v=A.n(16),u=A.K(B.cI,B.r,2)
return A.aB(w,A.p(w,A.d(d,w,w,w,w,w,w,A2.Kd,w,w,w),B.f,w,w,new A.o(D.lv,w,u,v,w,w,B.n),w,w,w,w,D.bBs,w,w,w),B.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,e,w,w,w,w,w,w,!1,B.a3)}}
C.bo7.prototype={
a3(d,e){Y.fQD(d,e.eh(B.I),e.gdC()*0.45,this.b,0,0.4)},
av(d){return d.b!==this.b}}
C.aAO.prototype={
q(){var w=this,v=w.a9$
if(v!=null)v.a5(0,w.gbB())
w.a9$=null
w.a1()},
aU(){this.b1()
this.b0()
this.bC()}}
C.bRL.prototype={}
C.t2.prototype={}
C.bo8.prototype={}
C.alq.prototype={
Mg(d){var w,v=this
if(v.a==null||!J.A(v.b,d)){w=v.a
if(w!=null)w.q()
v.a=C.i5h(d)
v.b=d}w=v.a
w.toString
return w},
q(){var w=this.a
return w==null?null:w.q()}}
C.aVE.prototype={
a3(d,e){var w,v,u,t,s,r,q,p,o,n=this,m=null,l=n.b.a,k=n.c,j=d.a,i=n.d.Mg(e).b
i===$&&A.c()
i=i.a
i===$&&A.c()
i=i.a
i.toString
j.drawPicture(i)
i=e.a
w=e.b
v=Math.min(i/450,w/900)
J.bl(j.save())
j.translate((i-450*v)/2,(w-900*v)/2)
d.bW(0,v)
n.cxW(d,l)
n.bNW(d,l)
n.cG0(d,l,k)
u=0.8+0.2*Math.sin(l*8)*Math.sin(l*3.7)+k.w*0.4
J.bl(j.save())
j.translate(225,580)
d.p8(0,1,0.42)
t=240*(0.6+0.5*k.w)
$.S()
s=A.I()
r=x.O
q=x.n
s.sam(A.tt(B.I,t,A.a([D.bpa.j(0.55*u),F.ML.j(0.2*u),B.L],r),A.a([0,0.5,1],q),B.x,m,m,0))
d.ad(B.I,t,s)
j.restore()
p=A.a([new A.z(528,new C.bRD(n,d,l,k)),new A.z(540,new C.bRE(n,d,l,k)),new A.z(546,new C.bRF(n,d,l,k)),new A.z(574,new C.bRG(n,d,l,k)),new A.z(612,new C.bRH(n,d,l,k)),new A.z(650,new C.bRI(n,d,l,k)),new A.z(656,new C.bRJ(n,d,l,k))],x.E)
B.d.aY(p,new C.bRK())
for(o=0;o<7;++o)p[o].b.$0()
n.bER(d,l,k)
n.bRt(d,l)
j.restore()
$.S()
j=A.I()
j.sam(A.tt(new A.t(i/2,w*0.6),e.ganp()*0.75,A.a([B.L,D.bdf],r),A.a([0.55,1],q),B.x,m,m,0))
d.aP(new A.a3(0,0,0+i,0+w),j)},
av(d){return d.c!==this.c||d.d!==this.d},
cxW(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=new A.e4()
g.cY(3)
for(w=d.a,v=0;v<36;++v){u=g.af()
t=g.af()
s=Math.sin(e*(1.5+g.af()*2)+v)
r=g.af()
s=B.c.j(0.25+0.7*(0.5+0.5*s))
$.S()
q=new A.ao(B.Q,B.M,B.S,B.T,B.R)
q.r=s.gp(0)
p=q.G()
w.drawCircle(u*450,20+t*300,0.8+r*1.1,p)
p.delete()}o=B.k.F(e,17)/1.2
if(o<1){n=new A.t(60+o*220,70+o*90)
d.bo(n,n.aE(0,D.eib),C.iw(B.c.j((1-o)*0.9),1.6))}for(u=e*0.035,t=e*9,s=x.v,m=0;m<3;++m){l=B.k.F(u+m*0.05,1)
r=-20+l*500
q=120+Math.sin(l*9+m)*14+m*12
k=Math.sin(t+m*2)
j=$.S()
i=A.a([],s)
j=new A.aF(j.r,B.ag,null,null,i)
k=q+k*4
i.push(new A.aY(r-6,k))
h=q-3
i.push(new A.c4(r-2,h,r,q))
i.push(new A.c4(r+2,h,r+6,k))
r=new A.ao(B.Q,B.M,B.S,B.T,B.R)
r.b=B.a9
r.c=1.6
r.r=D.bfX.gp(0)
r.d=B.bA
r.e=B.dQ
p=r.G()
r=j.gbv().a.snapshot()
w.drawPath((j.e=new A.ce(r)).a,p)
p.delete()}},
bNW(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=0.75+0.25*Math.sin(a0*9)*Math.sin(a0*5.3)
for(w=a0*0.12,v=d.a,u=0.78*e,t=0.7*e,s=0;s<3;++s){r=D.ayD[s]
q=r.a
p=r.c
o=q+p*0.1
n=r.b
m=r.d
l=n-m*0.38
k=A.bK(new A.t(o,l),m*0.74,p*0.5)
j=Ad.ME.j(u)
$.S()
i=new A.ao(B.Q,B.M,B.S,B.T,B.R)
i.r=j.gp(0)
h=i.G()
v.drawOval(A.bG(k),h)
h.delete()
p=A.bK(new A.t(o+0,l+m*0.1),m*0.4,p*0.28)
l=new A.ao(B.Q,B.M,B.S,B.T,B.R)
l.r=Q.xJ.j(t).gp(0)
h=l.G()
v.drawOval(A.bG(p),h)
h.delete()
for(p=q*0.01,m=n-m-r.e*0.9,g=0;g<5;++g){f=B.k.F(w+g/5+p,1)
o=Math.sin(f*6+g)
n=new A.ao(B.Q,B.M,B.S,B.T,B.R)
n.r=D.ag_.j(0.16*(1-f)).gp(0)
h=n.G()
v.drawCircle(q+o*6+f*18,m-f*70,4+f*12,h)
h.delete()}}},
cG0(d,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null
C.bCs(d,D.ei7,0.9,a0,D.hnd,!1,!1,D.abN,1,!1)
w=$.S().r
v=x.v
u=new A.aF(w,B.ag,e,e,A.a([],v))
u.D(new A.aY(52,470))
u.D(new A.aq(50,486))
u.D(new A.aq(66,486))
u.D(new A.aq(64,470))
u.D(new A.bs())
t=A.I()
t.r=D.ahP.gp(0)
d.aH(u,t)
C.bCs(d,D.ei9,0.95,a0,D.hn8,!1,!1,D.abO,1,!0)
t=new A.aF(w,B.ag,e,e,A.a([],v))
t.D(new A.aY(417,510))
t.D(new A.c4(431,532,445,510))
t.D(new A.aq(441,548))
t.D(new A.c4(431,553,421,548))
t.D(new A.bs())
u=A.I()
u.r=F.Fm.gp(0)
d.aH(t,u)
u=A.bK(D.ei8,8,28)
t=A.I()
t.r=D.brp.gp(0)
d.dP(u,t)
C.bCs(d,new A.t(-30+B.k.F(a0/26,1)*510,492),0.82,a0,D.hne,!0,!1,D.Wq,1,!1)
t=B.k.F(a0/11,1)*3.141592653589793*2
s=150+Math.sin(t)*110
r=507+Math.cos(t)*7
q=Math.cos(t)>=0?1:-1
d.dP(A.bK(new A.t(s+q*16,r-6),16,11),C.iw(D.ahG,1.8))
u=q<0
C.bCs(d,new A.t(s-q*6,r),0.62,a0,D.hng,!1,u,D.Wq,2.2,!1)
C.bCs(d,new A.t(s-q*32,r+4),0.58,a0+1,D.hnc,!1,u,D.Wq,2.2,!1)
this.bU9(d,D.ehN,a0)
for(u=d.a,t=a0*0.5,p=a0*4,o=0;o<3;++o){n=88+o*17+Math.sin(t+o)*6
m=520+B.o.F(o,2)*6
l=Math.max(0,Math.sin(p+o*2))*4
k=A.bK(new A.t(n,m),8,11)
j=o===1
i=j?D.ahC:D.aic
h=new A.ao(B.Q,B.M,B.S,B.T,B.R)
h.r=i.gp(0)
g=h.G()
u.drawOval(A.bG(k),g)
g.delete()
k=j?D.ahC:D.aic
j=new A.ao(B.Q,B.M,B.S,B.T,B.R)
j.r=k.gp(0)
g=j.G()
u.drawCircle(n+5,m+(-3+l),2.6,g)
g.delete()
j=new A.ao(B.Q,B.M,B.S,B.T,B.R)
j.b=B.a9
j.c=1
j.r=B.aE.gp(0)
j.d=B.bA
j.e=B.dQ
g=j.G()
u.drawLine.apply(u,[n+7.5,m+(-2+l),n+10,m+(-1.5+l),g])
g.delete()
n+=-1
j=new A.ao(B.Q,B.M,B.S,B.T,B.R)
j.b=B.a9
j.c=1
j.r=B.aE.gp(0)
j.d=B.bA
j.e=B.dQ
g=j.G()
u.drawLine.apply(u,[n,m+4,n,m+8,g])
g.delete()}f=a0<a1.f
u=A.bK(D.a7o,15+Math.sin(a0*2)*0.8,40)
t=A.I()
t.r=D.agm.gp(0)
d.dP(u,t)
u=A.bK(D.a7o.a7(0,new A.t(-14,f?-9:-2)),12,15)
t=A.I()
t.r=D.bhZ.gp(0)
d.dP(u,t)
t=new A.aF(w,B.ag,e,e,A.a([],v))
t.D(new A.aY(130,592-(f?16:6)))
t.D(new A.aq(134,592-(f?22:9)))
t.D(new A.aq(138,592-(f?16:6)))
t.D(new A.bs())
u=A.I()
u.r=D.bi8.gp(0)
d.aH(t,u)
u=D.a7o.a7(0,new A.t(-17,f?-9:-2))
t=A.I()
t.r=B.i2.gp(0)
d.ad(u,1.1,t)
v=new A.aF(w,B.ag,e,e,A.a([],v))
v.D(new A.aY(168,590))
w=Math.sin(a0*8)
v.D(new A.c4(180,588+w*(f?6:0),178,595))
d.aH(v,C.iw(D.agm,3.5))},
bU9(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k=Math.max(0,Math.sin(f*0.6))*9,j=e.a7(0,new A.t(Math.sin(f*0.25)*10,0))
for(w=[-9,-4,6,11],v=j.a,u=j.b,t=u+3,s=f*2,r=u+16,q=d.a,p=0;p<4;++p){o=w[p]
n=Math.sin(s+o)
$.S()
m=new A.ao(B.Q,B.M,B.S,B.T,B.R)
m.b=B.a9
m.c=2
m.r=D.XF.gp(0)
m.d=B.bA
m.e=B.dQ
l=m.G()
q.drawLine.apply(q,[v+o,t,v+(o+n*1.5),r,l])
l.delete()}w=A.bK(j,17,32)
s=$.S()
r=A.I()
r.r=D.Fk.gp(0)
d.dP(w,r)
r=A.bK(j.a7(0,D.ehd),7,26)
w=A.ar(D.Fk,B.w,0.12)
w.toString
q=A.I()
q.r=w.gp(0)
d.dP(r,q)
s=new A.aF(s.r,B.ag,null,null,A.a([],x.v))
s.D(new A.aY(v+13,u-3))
s.D(new A.aq(v+22,u-8+k))
s.D(new A.aq(v+20,u+k-0.5))
s.D(new A.aq(v+12,t))
s.D(new A.bs())
t=A.I()
t.r=D.Fk.gp(0)
d.aH(s,t)
t=A.bK(j.a7(0,new A.t(24,-7+k)),9,12)
s=A.I()
s.r=D.Fk.gp(0)
d.dP(t,s)
s=-11+k
d.bo(j.a7(0,new A.t(22,s)),j.a7(0,new A.t(21,-17+k)),C.iw(D.XF,1.6))
d.bo(j.a7(0,new A.t(26,s)),j.a7(0,new A.t(28,-16+k)),C.iw(D.XF,1.6))
s=j.a7(0,new A.t(26,-8+k))
t=A.I()
t.r=B.w.gp(0)
d.ad(s,0.9,t)
d.bo(j.a7(0,new A.t(26,-3+k)),j.a7(0,new A.t(26,1+k)),C.iw(D.bkL,1.4))
d.bo(j.a7(0,D.eka),j.a7(0,new A.t(-19,-7+Math.sin(f*7)*2)),C.iw(D.Fk,2.4))},
bRr(a5,a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
for(w=a5.a,v=0;v<14;++v){u=v*3.141592653589793*2/14
t=Math.cos(u)
s=Math.sin(u)
if(Math.sin(u)<0){t=A.bK(new A.t(225+t*36,574+(s*13+6)),8,11)
$.S()
s=new A.ao(B.Q,B.M,B.S,B.T,B.R)
s.r=D.bq6.gp(0)
r=s.G()
w.drawOval(A.bG(t),r)
r.delete()}}t=A.bK(D.a7q.a7(0,B.cx),17,52)
$.S()
s=A.I()
s.r=D.bcR.gp(0)
a5.dP(t,s)
s=A.bK(D.a7q.a7(0,B.cx),12,44)
t=D.bgk.j(0.6+0.3*Math.sin(a6*6))
q=A.I()
q.r=t.gp(0)
a5.dP(s,q)
for(p=0;p<3;++p){u=D.dfn[p]
t=225+Math.cos(u)*3
s=Math.cos(u)
q=Math.sin(u)
o=Math.cos(u)
n=Math.sin(u)
m=new A.ao(B.Q,B.M,B.S,B.T,B.R)
m.b=B.a9
m.c=7
m.r=D.Fz.gp(0)
m.d=B.bA
m.e=B.dQ
r=m.G()
w.drawLine.apply(w,[t+s*24,579+q*4,t-o*24,579-n*4,r])
r.delete()
n=Math.cos(u)
o=Math.sin(u)
q=Math.cos(u)
s=Math.sin(u)
m=D.B6.j(0.6)
l=new A.ao(B.Q,B.M,B.S,B.T,B.R)
l.b=B.a9
l.c=2
l.r=m.gp(0)
l.d=B.bA
l.e=B.dQ
r=l.G()
w.drawLine.apply(w,[t+n*24,579+(o*4-2),t-q*24,579-(s*4+2),r])
r.delete()}k=46+80*a7.w
j=[D.eV1,D.eVy,D.eWz,D.eWR,D.eWx]
for(t=a6*8,s=a6*15,q=a6*3.3,o=x.v,i=0;i<3;++i){h=[1,0.72,0.42][i]
g=[D.bnA,D.bk7,D.bpz][i]
for(n=i===0,m=1-i*0.15,p=0;p<5;++p){f=j[p]
l=f.b
e=f.c
d=k*l*h*(0.9+0.12*Math.sin(t+e)+0.06*Math.sin(s+e*2))
a0=Math.sin(q+e)*5*(d/k)
a1=225+f.a*m
a2=(12+8*a7.w)*l*h
l=$.S()
e=A.a([],o)
a3=new A.aF(l.r,B.ag,null,null,e)
e.push(new A.aY(a1-a2,578))
l=a1+a0*0.6
e.push(new A.l_(a1-a2*1.1,578-d*0.45,l-a2*0.2,578-d*0.7,a1+a0,578-d))
e.push(new A.l_(l+a2*0.3,578-d*0.65,a1+a2*1.15,578-d*0.4,a1+a2,578))
e.push(new A.bs())
l=new A.ao(B.Q,B.M,B.S,B.T,B.R)
l.r=g.j(n?0.9:0.95).gp(0)
r=l.G()
l=a3.gbv().a.snapshot()
w.drawPath((a3.e=new A.ce(l)).a,r)
r.delete()}}for(t=a6*1.5,v=0;v<22;++v){a4=B.k.F(a6*(0.35+B.o.F(v,5)*0.06)+v/22,1)
s=Math.sin(v*1.9+t)
q=a7.w
o=B.o.F(v,3)
n=G.aia.j((1-a4)*0.9)
$.S()
m=new A.ao(B.Q,B.M,B.S,B.T,B.R)
m.r=n.gp(0)
r=m.G()
w.drawCircle(225+s*(10+a4*26),564-a4*(110+80*q),1.2+o*0.6,r)
r.delete()}for(t=a6*0.1,s=574-k,v=0;v<6;++v){a4=B.k.F(t+v/6,1)
q=Math.sin(a4*5+v)
o=D.ag_.j(0.1*(1-a4))
$.S()
n=new A.ao(B.Q,B.M,B.S,B.T,B.R)
n.r=o.gp(0)
r=n.G()
w.drawCircle(225+q*16+a4*12,s-a4*120,7+a4*20,r)
r.delete()}},
bRt(d,e){var w,v,u,t,s,r,q,p,o,n,m,l
for(w=e*0.3,v=e*3,u=e*0.7,t=e*1.4,s=d.a,r=0;r<16;++r){q=B.k.F(r*83+Math.sin(w+r)*40+v,450)
p=420+B.o.F(r*37,300)+Math.sin(u+r*2)*26
o=Math.max(0,Math.sin(t+r*1.7))
n=D.brx.j(0.18*o)
$.S()
m=new A.ao(B.Q,B.M,B.S,B.T,B.R)
m.r=n.gp(0)
l=m.G()
s.drawCircle(q,p,5,l)
l.delete()
m=new A.ao(B.Q,B.M,B.S,B.T,B.R)
m.r=D.blt.j(0.9*o).gp(0)
l=m.G()
s.drawCircle(q,p,1.4,l)
l.delete()}},
c36(d,e){switch(d){case 0:return e.b?D.hn9:D.aZ1
case 1:return e.b?D.hnf:D.aZ_
case 2:return D.aYZ
case 3:return D.aYY
case 4:return D.aZ0
default:return D.aZ2}},
aC6(d,e){return(0.2+0.8*Math.abs(Math.sin(d*10+e)))*(0.55+0.45*Math.sin(d*3.1+e*2))},
QP(d,e,f,g){var w,v=this,u=D.a4T[e],t=v.c36(e,g),s=new C.bo8(),r=f-g.e,q=f<g.f,p=g.r,o=g.c,n=(Math.sin(f*1.3+e*7.1)+Math.sin(f*2.1+e*3.7)*0.6+Math.sin(f*0.7+e*11.3)*0.4)/2,m=D.a4T[e],l=e===0
m=B.k.E(((l?D.aK1:D.aK6).a-m.a.a)/160,-1,1)*0.8+n*0.25
s.y=m
s.z=l?0.35:-0.3+n*0.2
m=s.e=m*0.55
s.Q=D.a7u
s.as=D.DJ
if(l){s.a=o?v.aC6(f,0):0
p=g.a
l=p===3&&g.d?0.7:0
w=p===4?0.8:0
s.b=0.3+l+w
s.c=p===2?0.5:0.1
s.f=n*0.05
if(o){s.r=Math.sin(f*4.2)*1.4
p=new A.t(46+Math.sin(f*3.1)*10,-64+Math.sin(f*4.3)*13)
s.as=p
s.Q=new A.t(-40+Math.sin(f*2.2+1)*4,-40+Math.sin(f*3.4)*6)}else p=D.DJ
if(g.a===3&&!g.d)s.e=m+Math.sin(r*6)*0.35*Math.max(0,1-r/1.8)
if(q){s.a=0.5
s.b=1
p=f*9
s.Q=new A.t(-4-Math.max(0,Math.sin(p))*7,-58)
p=s.as=new A.t(4+Math.max(0,Math.sin(p))*7,-58)}if(!q)p=!(o&&p.b<-50)
else p=!1
s.at=p}else if(e===1){s.b=0.35
if(o)s.r=Math.sin(f*2.4+1)*1.6
if(q){s.b=1
s.a=0.35+0.35*Math.max(0,Math.sin(f*13))
s.d=0.7
p=f*8
s.Q=new A.t(-4-Math.max(0,Math.sin(p))*7,-56)
s.as=new A.t(4+Math.max(0,Math.sin(p))*7,-56)
s.x=Math.max(0,Math.sin(p))*3}else if(g.a===3&&!g.d){s.as=D.ehl
s.e=m+Math.sin(r*5)*0.2*Math.max(0,1-r/2)
s.b=-0.2}}else{s.b=0.3+0.1*Math.sin(f*0.5+e)
s.w=2+(o?Math.sin(f*1.6+e)*1.6:0)
if(o)s.r=Math.max(0,Math.sin(f*1.9+e*2))*2.2
if(g.a===2){s.c=0.6
s.w=4
if(e===2)s.as=D.eiI
if(e===4)s.as=new A.t(36,-128+Math.sin(f*5)*4)}if(q){s.b=1
s.a=0.45+0.4*Math.max(0,Math.sin(f*12+e))
s.d=0.5
p=Math.max(0,Math.sin(f*9+e*1.3))*9
s.x=p
m=Math.max(0,Math.sin(f*10+e))*8
p=-56-p*0.3
s.Q=new A.t(-3-m,p)
s.as=new A.t(3+m,p)}else if(f<p){s.a=0.55
s.b=-0.1
s.c=1
s.Q=D.el5
s.as=D.aKj}if(e===2&&g.x!=null&&f<g.y){s.a=v.aC6(f,5)
s.b=0.4
s.as=new A.t(34+Math.sin(f*3)*6,-70+Math.sin(f*4)*8)}if(e===g.Q&&g.z!=null&&f<g.as){s.a=v.aC6(f,e*3)
s.b=0.5
s.c=0.4}}C.htt(d,u.a,u.b*1.2,t,s,f,e,null)},
bER(d,e,f){var w=new C.bRC(d),v=f.z
if(v!=null&&e<f.as)w.$2(f.Q,v)
v=f.x
if(v!=null&&e<f.y)w.$2(2,v)},
gdc(d){return this.c}}
C.afb.prototype={
a6(){return"_Stand."+this.b}}
C.ada.prototype={}
C.ln.prototype={}
C.bQm.prototype={
bzx(d){var w,v,u,t,s=A.U(x.N,x.P)
for(w=this.b,v=w.length,u=0;u<w.length;w.length===v||(0,A.L)(w),++u){t=w[u]
s.n(0,t.a,t)}this.c!==$&&A.aP()
this.c=s},
FQ(d){var w,v,u,t,s,r=A.a([],x.u)
for(w=this.b,v=w.length,u=d.a,t=0;t<w.length;w.length===v||(0,A.L)(w),++t){s=w[t]
if(s.d===u)r.push(s)}B.d.aY(r,new C.bQn())
return r},
aqo(d){var w,v,u,t,s,r=d.e
if(r==null)w=null
else{v=this.c
v===$&&A.c()
w=v.h(0,r)}if(w!=null)return w
for(r=this.b,v=r.length,u=d.a,t=0;t<v;++t){s=r[t]
if(s.e===u)return s}return null},
aLC(d){var w,v,u,t,s,r,q,p=A.a([],x.u)
for(w=this.b,v=w.length,u=d.a,t=d.d,s=0;s<w.length;w.length===v||(0,A.L)(w),++s){r=w[s]
if(r.a!==u){q=r.d
q=q!=null&&q===t}else q=!1
if(q)p.push(r)}return p},
alT(d){var w,v,u=A.aX(x.N),t=d,s=0
for(;;){w=t.d
if(w!=null){v=this.c
v===$&&A.c()
v=v.h(0,w)!=null&&u.M(0,t.a)}else v=!1
if(!v)break
v=this.c
v===$&&A.c()
w=v.h(0,w)
w.toString;++s
t=w}return s},
gyW(){var w=this.b
if(w.length===0)return null
w=A.C(w,x.P)
B.d.aY(w,new C.bQo(this))
return B.d.gI(w)}}
C.atp.prototype={}
C.zg.prototype={}
C.ak5.prototype={
gaEp(d){var w
if(B.a.i(this.a).length!==0){w=this.b
w=new A.Z(w,new C.bLm(),A.T(w).k("Z<1>")).gL(0)>=2&&B.a.i(w[this.c]).length!==0}else w=!1
return w},
ah(){var w=this
return A.H(["q",w.a,"a",w.b,"c",w.c,"s",w.d],x.N,x.z)}}
C.Mf.prototype={
gaoz(d){var w,v,u,t,s=A.a([],x.b)
for(w=this.c,v=w.length,u=0;u<w.length;w.length===v||(0,A.L)(w),++u){t=w[u]
if(t.gaEp(0))s.push(t)}return s},
ah(){var w,v,u,t,s,r,q=this.b,p=A.a([],x.Y)
for(w=this.c,v=w.length,u=x.N,t=x.z,s=0;s<w.length;w.length===v||(0,A.L)(w),++s){r=w[s]
p.push(A.H(["q",r.a,"a",r.b,"c",r.c,"s",r.d],u,t))}return A.H(["id",this.a,"title",q,"qs",p],u,t)},
cZ8(){var w,v,u,t,s,r,q,p,o,n,m,l=A.a([],x.J)
for(w=this.gaoz(0),v=w.length,u=x.s,t=0;t<w.length;w.length===v||(0,A.L)(w),++t){s=w[t]
r=s.b
q=B.a.i(r[s.c])
p=A.a([],u)
for(o=r.length,n=0;n<r.length;r.length===o||(0,A.L)(r),++n){m=B.a.i(r[n])
if(m.length!==0)p.push(m)}l.push(new C.ln(B.a.i(s.a),p,B.d.cu(p,q),"The right answer is "+q+".","","creator",s.d))}return l}}
C.b9E.prototype={}
C.a9j.prototype={}
C.bgS.prototype={}
C.af9.prototype={}
C.ajk.prototype={
R(){return new C.ajl(B.bB,A.a([],x.cC),A.a([],x.e4),null,null)},
gd_(){return this.d}}
C.ajl.prototype={
gMz(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.bD3(w.c,8,w.e,!1)
u.d!==$&&A.bF()
u.d=v
t=v}return t},
gb8P(){var w,v=this,u=v.e
if(u===$){w=v.pR(v.gc9A())
v.e!==$&&A.bF()
v.e=w
u=w}return u},
Z(){this.a2()
this.gb8P().h6(0)},
q(){this.gb8P().q()
this.bu_()},
h6(d){this.m(new C.bJA(this))},
c9B(d){var w=this,v=Math.min(0.05,(d.a-w.f.a)/1e6)
w.f=d
w.fv(0,v)
if(w.c!=null)w.m(new C.bJv())},
b7a(){var w,v,u,t=this,s=t.r
B.d.aa(s)
w=t.gMz()
v=w[t.x].b.length
for(u=0;u<v;++u)s.push(new C.bgS(u,(u+0.5)/v,w[t.x].b[u]))},
fv(d,e){var w,v,u,t,s,r,q,p,o,n,m=this
m.dx+=e
if(!m.ch||m.CW)return
w=m.cy
m.cy=w+(m.db-w)*Math.min(1,e*9)
for(w=m.w,v=w.length,u=e*1.4,t=0;t<v;++t){s=w[t]
s.a=s.a+s.c*e
s.b=s.b+s.d*e
s.f-=u}B.d.bs(w,new C.bJB())
w=m.fx
if(w>0){m.fx=w-e
for(w=m.r,v=w.length,t=0;t<v;++t)w[t].r+=e
if(m.fx<=0)m.c5W()
return}for(w=m.r,v=w.length,t=0;t<w.length;w.length===v||(0,A.L)(w),++t){r=w[t]
if(r.e||r.f)continue
r.d=r.d+e/(9.5-Math.min(m.x,6)*0.6)
r.r+=e
u=r.a
q=r.b+Math.sin(m.dx*1.7+u)*0.012
p=r.d
if(p>=0.74&&p<=0.86&&Math.abs(q-m.cy)<0.12){r.e=!0
w=m.gMz()
if(u===w[m.x].c){v=++m.as
m.at=Math.max(m.at,v);++m.Q
o=100+B.k.V((1-r.d)*100)+20*Math.min(v-1,4)
m.z+=o
m.fy=o
m.go=m.dx
v=m.cy
m.id=v
m.arQ(v,0.8,B.cI)
m.dy="Yes! "+w[m.x].d
m.fr=m.dx+2
m.fx=1.8}else{m.arQ(m.cy,0.8,G.n9)
m.aXW("That was not it. "+w[m.x].d)}return}if(p>0.9){r.f=!0
m.arQ(q,0.88,D.lv)
p=m.gMz()[m.x]
n=p.c
if(u===n){m.aXW("The right gourd fell! It was "+p.b[n]+".")
return}}}},
arQ(d,e,f){var w,v,u,t=new A.e4()
t.cY(B.k.V(this.dx*1000))
for(w=this.w,v=0;v<14;++v){u=t.af()*3.141592653589793*2
w.push(new C.af9(d,e,Math.cos(u)*0.25,-0.1-Math.abs(Math.sin(u))*0.35,f))}},
aXW(d){var w,v=this
v.as=0
w=--v.y
v.dy=d
v.fr=v.dx+2.4
v.fx=2.2
if(w<=0){v.fx=0
v.Q_()}},
c5W(){var w=this
if(w.x+1>=w.gMz().length){w.Q_()
return}++w.x
w.b7a()},
Q_(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$Q_=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:u.CW=!0
t=u.Q
s=u.gMz().length
r=C.bFk(t,u.at,s)
u.ax=r
if(u.c!=null)u.m(new C.bJt())
w=2
return A.b(C.Bu(u.a.d,r),$async$Q_)
case 2:u.ay=e
t=u.a
w=3
return A.b(C.Bv(t.d,t.c.a,"catch",u.z),$async$Q_)
case 3:u.cx=e
if(u.c!=null)u.m(new C.bJu())
return A.h(null,v)}})
return A.i($async$Q_,v)},
B(d){var w,v=this,u=null
if(v.CW)w=v.c9z()
else w=v.ch?v.c9C():A.au(new A.D(B.eu,A.x(A.a([D.aUI,B.P,D.fFL,B.W,D.fLV,B.dT,C.uk("Play",v.geX(v),B.cI,B.hk,D.fq)],x.p),B.m,u,B.e,B.O,0,B.p),u),u,u,u)
return new C.tr("Calabash Catch",w,B.f0,u)},
c9C(){var w,v,u,t,s=this,r=null,q=x.p,p=A.a([],q)
for(w=0;w<3;++w){v=w<s.y
u=v?B.hy:B.H6
p.push(A.X(u,v?B.ax:B.bX,r,r,r,22))}p.push(B.b1)
v=s.x
u=s.gMz()
p.push(A.d(""+(v+1)+"/"+u.length,r,r,r,r,r,r,D.aTh,r,r,r))
p.push(B.bc)
v=A.n(14)
p.push(A.p(r,A.d(""+s.z,r,r,r,r,r,r,B.iu,r,r,r),B.f,r,r,new A.o(B.bC,r,r,v,r,r,B.n),r,r,r,r,B.Gj,r,r,r))
p=A.B(p,B.m,r,B.e,B.i,0,r,r)
v=A.n(18)
t=A.K(B.cI,B.r,3)
return A.x(A.a([new A.D(D.bzh,p,r),A.p(r,A.d(u[s.x].a,r,r,r,r,r,r,D.fq6,B.K,r,r),B.f,r,r,new A.o(D.q2,r,t,v,r,r,B.n),r,r,r,B.fj,B.bg,r,r,1/0),B.am,A.E(A.cu(new C.bJz(s)),1)],q),B.m,r,B.e,B.i,0,B.p)},
c9z(){var w=this,v=null,u=A.au(A.d(w.y<=0?"The gourds are all gone":"The basket is full!",v,v,v,v,v,v,B.pE,v,v,v),v,v,v),t=A.au(A.d(""+w.Q+" of "+w.gMz().length+" caught \xb7 "+w.z+" points",v,v,v,v,v,v,D.UQ,v,v,v),v,v,v),s=w.ax,r=w.ay
if(r===0)r=s
return A.cn(A.a([D.bal,u,t,B.aQ,new C.I_(s,r,w.cx,v),B.aQ,A.au(C.uk("Back to the games",new C.bJs(w),B.cI,B.kL,D.fq),v,v,v)],x.p),v,B.aa,v,v,B.ah,!1)}}
C.bc0.prototype={
a3(a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=null,a0=a6.a,a1=a6.b,a2=0+a0,a3=$.S(),a4=A.I()
a4.sam(A.jv(B.I,new A.t(0,a1),D.cYQ,G.ayV,B.x,d))
a5.aP(new A.a3(0,0,a2,0+a1),a4)
a4=A.I()
a4.r=G.MO.gp(0)
a5.ad(new A.t(a0*0.82,a1*0.16),22,a4)
a4=x.v
w=A.a([],a4)
v=new A.aF(a3.r,B.ag,d,d,w)
a3=a1*0.7
v.D(new A.aY(0,a3))
for(u=0;u<=a0;u+=6){t=new A.aq(u,a3+Math.sin(u/55)*10)
w.push(t)
s=v.f
if(s!=null)t.bw(s)
t=v.e
if(t!=null)t.a.delete()
v.e=null}v.D(new A.aq(a0,a1))
v.D(new A.aq(0,a1))
a3=$.S()
w=A.I()
w.r=D.bhd.gp(0)
a5.aH(v,w)
r=a0*0.12
a3=new A.aF(a3.r,B.ag,d,d,A.a([],a4))
w=a1*0.86
a3.D(new A.aY(r-26,w))
t=a1*0.5
s=a1*0.34
a3.D(new A.c4(r-14,t,r-10,s))
a3.D(new A.aq(r+10,s))
a3.D(new A.c4(r+14,t,r+26,w))
a3.D(new A.bs())
w=A.I()
w.r=D.af6.gp(0)
a5.aH(a3,w)
for(a3=a1*0.36,w=a1*0.24,t=a5.a,s=a1*0.22,q=0;q<4;++q){p=D.cjJ[q]
o=new A.ao(B.Q,B.M,B.S,B.T,B.R)
o.r=D.af6.gp(0)
o.c=7
o.d=B.bA
n=o.G()
t.drawLine.apply(t,[r,a3,r+p*46,w,n])
n.delete()
o=new A.ao(B.Q,B.M,B.S,B.T,B.R)
o.r=D.aet.gp(0)
n=o.G()
t.drawCircle(r+p*50,s,18,n)
n.delete()}a3=a1*0.88
w=A.I()
w.r=D.bi6.gp(0)
a5.aP(new A.a3(0,a3,a2,a3+a1*0.12),w)
for(a2=a1*0.9,a3=a2-8,m=0;m<18;++m){w=a0*m/17
s=new A.ao(B.Q,B.M,B.S,B.T,B.R)
s.r=D.agD.gp(0)
s.c=2
n=s.G()
t.drawLine.apply(t,[w,a2,w+3,a3,n])
n.delete()}for(a2=this.b,a3=a2.r,w=a3.length,s=a1*0.89,q=0;q<a3.length;a3.length===w||(0,A.L)(a3),++q){l=a3[q]
if(l.e)continue
o=l.a
u=(l.b+Math.sin(a2.dx*1.7+o)*0.012)*a0
k=l.d
if(l.f){o=A.bK(new A.t(u,s),12,54)
$.S()
k=new A.ao(B.Q,B.M,B.S,B.T,B.R)
k.r=D.lv.j(0.6).gp(0)
n=k.G()
t.drawOval(A.bG(o),n)
n.delete()
continue}o=Math.sin(a2.dx*2+o)
J.bl(t.save())
t.translate(u,k*a1)
t.rotate(o*0.1*180/3.141592653589793,0,0)
$.S()
o=new A.ao(B.Q,B.M,B.S,B.T,B.R)
o.r=D.afJ.gp(0)
n=o.G()
t.drawCircle(0,-34,14,n)
n.delete()
o=new A.ao(B.Q,B.M,B.S,B.T,B.R)
o.r=D.bmE.gp(0)
o.c=4
o.d=B.bA
n=o.G()
t.drawLine.apply(t,[0,-46,2,-56,n])
n.delete()
o=new A.ao(B.Q,B.M,B.S,B.T,B.R)
o.sam(A.tt(D.ejT,46,D.d6c,B.D0,B.x,d,d,0))
n=o.G()
t.drawCircle(0,0,34,n)
n.delete()
o=A.bK(D.ejZ,8,12)
k=new A.ao(B.Q,B.M,B.S,B.T,B.R)
k.r=B.c.j(0.35).gp(0)
n=k.G()
t.drawOval(A.bG(o),n)
n.delete()
j=new A.iN(new A.eu(l.c,d,d,B.cO,d,d,d,d,d,d,D.fnY),B.K,B.bY,new A.jq(1),d,d,3,d,B.bV,d)
j.o0(62)
o=j.b
k=Math.max(40,o.c+10)
o=o.a.c
i=A.br(A.bK(B.cH,o.gbb(o)+8,k),B.fE)
k=new A.ao(B.Q,B.M,B.S,B.T,B.R)
k.r=D.q2.gp(0)
n=k.G()
t.drawRRect(A.e5(i),n)
n.delete()
k=new A.ao(B.Q,B.M,B.S,B.T,B.R)
k.r=D.lv.gp(0)
k.b=B.a9
k.c=1.5
n=k.G()
t.drawRRect(A.e5(i),n)
n.delete()
k=j.b
o=k.c
k=k.a.c
j.a3(a5,new A.t(-o/2,4-k.gbb(k)/2))
t.restore()}h=a2.cy*a0
a3=a2.dx
w=Math.sin(a3*4)
Y.AX(a5,new A.t(h,a1*0.93),a1*0.3,a3,!0,Math.abs(a2.db-a2.cy)*40*Math.abs(Math.sin(a2.dx*18)),2,B.dH,F.mD,!1,(w+1)/2)
g=A.bK(new A.t(h,a1*0.8),a1*0.07,a0*0.24)
a4=new A.aF($.S().r,B.ag,d,d,A.a([],a4))
w=g.a
a3=g.b
a4.D(new A.aY(w,a3))
s=g.c
a4.D(new A.aq(s,a3))
o=g.d
a4.D(new A.aq(s-8,o))
a4.D(new A.c4(g.gbK().a,o+8,w+8,o))
a4.D(new A.bs())
k=A.I()
k.r=D.Yq.gp(0)
a5.aH(a4,k)
for(a4=s-w,m=1;m<6;++m){s=w+a4*m/6
k=new A.ao(B.Q,B.M,B.S,B.T,B.R)
k.r=D.B6.gp(0)
k.c=1.4
n=k.G()
t.drawLine.apply(t,[s,a3,s+(m-3)*2,o,n])
n.delete()}s=a3+(o-a3)*0.35
o=A.I()
o.r=G.n9.gp(0)
a5.aP(new A.a3(w,s,w+a4,s+5),o)
w-=2
a3-=4
o=A.I()
o.r=D.bhi.gp(0)
a5.dP(new A.a3(w,a3,w+(a4+4),a3+8),o)
for(a3=a2.w,a4=a3.length,q=0;q<a3.length;a3.length===a4||(0,A.L)(a3),++q){f=a3[q]
w=f.a
s=f.b
o=f.f
k=new A.ao(B.Q,B.M,B.S,B.T,B.R)
k.r=f.e.j(B.k.E(o,0,1)).gp(0)
n=k.G()
t.drawCircle(w*a0,s*a1,3*o+1,n)
n.delete()}e=a2.dx-a2.go
if(e>=0&&e<1.2){a3=a2.fy
j=A.fx(d,d,d,d,A.cS(d,d,d,d,d,d,d,d,d,A.l(d,d,B.cI.j(1-e/1.2),d,d,d,d,d,d,d,d,26,d,d,B.u,d,d,!0,d,d,d,d,d,L.CV,d,d),"+"+a3),B.a4,B.bY,d,B.dA,B.bV)
j.ej()
j.a3(a5,new A.t(a2.id*a0-j.b.c/2,a1*0.72-e*60))}},
av(d){return!0}}
C.Q8.prototype={
B(d){var w=this,v=null,u=w.e,t=A.b4(v,v,v,new C.aAM(w.c,w.f,v),B.aw),s=A.n(10),r=A.K(B.bD,B.r,1.4)
return new A.a5(u+22,v,A.x(A.a([new A.a5(u,u,t,v),B.cN,A.p(v,A.d(w.d,v,1,B.a1,v,v,v,D.fgG,v,v,v),B.f,v,v,new A.o(B.c,v,r,s,v,v,B.n),v,v,v,v,B.mK,v,v,v)],x.p),B.m,v,B.e,B.O,0,B.p),v)},
gY(d){return this.e}}
C.aAM.prototype={
a3(d,e){var w=e.eh(B.I),v=e.gdC(),u=this.c?0.8:0
return Y.fQD(d,w,v*0.44,this.b,0,u)},
av(d){return d.b!==this.b||d.c!==this.c}}
C.azc.prototype={}
C.au0.prototype={
R(){return new C.au1(A.U(x.S,x.cq),null,null)},
gd_(){return this.d}}
C.au1.prototype={
gkL(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.hyt(w.c,w.e)
u.d!==$&&A.bF()
u.d=v
t=v}return t},
gaEc(){var w=this.z
return w===$?this.z=this.X0(0):w},
giV(){var w,v=this.Q
if(v===$){w=this.gkL()
w=w.length===0?0:w[0].c.length
v=this.Q=A.bZ(w,-1,!1,x.S)}return v},
X0(d){var w,v,u,t,s=this.gkL()
if(d>=s.length)return A.a([],x.h)
w=s[d]
s=A.a([],x.h)
for(v=w.c,u=w.d,t=0;t<v.length;++t)s.push(new C.azc(v[t],u[t],t))
for(v=w.e,u=w.f,t=0;t<v.length;++t)s.push(new C.azc(v[t],u[t],-1))
v=new A.e4()
v.cY(this.a.e*31+d)
B.d.dZ(s,v)
return s},
q(){var w,v,u
for(w=this.as,w=new A.dr(w,w.r,w.e);w.C();){v=w.d
v.r.q()
v.r=null
u=v.eJ$
u.b=!1
B.d.aa(u.a)
u=u.gom()
if(u.a>0){u.b=u.c=u.d=u.e=null
u.a=0}v.dS$.a.aa(0)
v.qo()}this.bus()},
cOb(d,e){var w,v,u,t,s,r=this
if(d>=r.giV().length||r.giV()[d]!==-1||B.d.t(r.giV(),e))return
w=r.gaEc()[e]
v=r.gkL()[r.e].a
if(w.c<0){++r.f;++r.y
r.m(new C.cno(r,e,w,v))
A.cG(B.lC,new C.cnp(r))
return}++r.r
u=A.bn(null,B.hu,null,1,null,r)
t=r.as
s=t.h(0,d)
if(s!=null)s.q()
t.n(0,d,u)
r.m(new C.cnq(r,d,e,w,v))
u.cp(0)},
kF(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$kF=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:o=t.e
n=t.gkL()
w=o+1>=n.length?3:4
break
case 3:s=B.d.cI(n,0,new C.cnr())
o=t.r
n=t.f
o=Math.max(0,o*4-n)
r=o+(n===0?12:0)
t.m(new C.cns(t,r))
w=5
return A.b(C.Bu(t.a.d,r),$async$kF)
case 5:t.x=f
o=t.a
w=6
return A.b(C.Bv(o.d,o.c.a,"plant",Math.max(1,s*10-t.f*5)),$async$kF)
case 6:t.ch=f
if(t.c!=null)t.m(new C.cnt())
w=1
break
case 4:for(o=t.as,n=new A.dr(o,o.r,o.e);n.C();){q=n.d
q.r.q()
q.r=null
p=q.eJ$
p.b=!1
B.d.aa(p.a)
p=p.gom()
if(p.a>0){p.b=p.c=p.d=p.e=null
p.a=0}q.dS$.a.aa(0)
q.qo()}o.aa(0)
t.m(new C.cnu(t))
case 1:return A.h(u,v)}})
return A.i($async$kF,v)},
B(d){var w,v,u,t,s,r=this,q="Plant the Tree",p=null
if(r.ay){w=A.au(A.d(""+r.r+" branches grown",p,p,p,p,p,p,B.pE,p,p,p),p,p,p)
v=r.f
v=A.au(A.d(v===0?"Not one mistake!":""+v+" mistakes",p,p,p,p,p,p,D.UQ,p,p,p),p,p,p)
u=r.w
t=r.x
if(t===0)t=u
return new C.tr(q,A.cn(A.a([D.ae0,w,v,B.aQ,new C.I_(u,t,r.ch,p),B.aQ,A.au(C.uk("Back to the games",new C.cnk(d),B.cI,B.kL,D.fq),p,p,p)],x.p),p,B.aa,p,p,B.ah,!1),B.f0,p)}w=r.gkL()
v=r.e
s=w[v]
return new C.tr(q,new A.D(B.ub,A.x(A.a([A.d("Round "+(v+1)+" of "+w.length+" \xb7 drag the children of "+s.a+" onto the branches",p,p,p,p,p,p,E.aTc,B.K,p,p),A.E(A.cu(new C.cnl(r,s)),1)],x.p),B.m,p,B.e,B.i,0,B.p),p),B.f0,p)}}
C.bbw.prototype={
a3(b7,b8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0=this,b1=null,b2=y.B,b3=b0.d,b4=new A.Z(b3,new C.cMM(),A.T(b3).k("Z<1>")).gL(0),b5=b0.b,b6=b5.a7(0,B.Jb)
$.S()
w=A.I()
w.r=D.lw.j(0.18+0.1*b4).gp(0)
b7.ad(b6,70+b4*10,w)
w=b8.a
b6=b8.b
v=b5.a7(0,D.egs)
u=A.I()
u.r=B.o8.j(0.5).gp(0)
u.c=10
u.d=B.bA
b7.bo(new A.t(w/2,b6*0.98),v,u)
for(v=b0.c,u=b5.a,b5=b5.b,t=b5+90,s=x.v,b5+=46,r=x.dc,q=x.U,p=b7.a,o=0;o<v.length;++o){n=v[o]
m=n.a+0
l=B.dU.aw(0,B.k.E(b3[o],0,1))
k=$.S().r
j=A.a([],s)
i=new A.aF(k,B.ag,b1,b1,j)
j.push(new A.aY(u,b5))
j.push(new A.c4((u+m)/2,t,m,n.b+-46))
if(l<1)for(n=new A.aF(k,B.ag,b1,b1,A.bq(j,!0,r)),m=A.a([],q),h=new A.tq(n,!1,m);h.C();){g=h.c
if(g===0||h.f)A.b9(A.jB(b2));--g
f=new A.Bs(h,g)
e=0
for(;;){h.im()
d=m[g].b
d===$&&A.c()
if(!(e<d.a.length()))break
h.im()
d=m[g].b
d===$&&A.c()
d=Math.min(d.a.length(),e+7)
d=new A.aF(k,n.b,b1,new A.cy([f,e,d,!0]),A.a([],s))
$.S()
a0=new A.ao(B.Q,B.M,B.S,B.T,B.R)
a0.r=B.aY.gp(0)
a0.b=B.a9
a0.c=3
a1=a0.G()
a0=d.gbv().a.snapshot()
p.drawPath((d.e=new A.ce(a0)).a,a1)
a1.delete()
e+=14}}if(l>0)for(n=new A.aF(k,i.b,i.c,b1,A.bq(j,!0,r)),m=A.a([],q),j=new A.tq(n,!1,m),h=l>0.4,g=9-3*l,d=11*l,a0=6*l;j.C();){a2=j.c
if(a2===0||j.f)A.b9(A.jB(b2));--a2
j.im()
a3=m[a2].b
a3===$&&A.c()
a3=a3.a.length()
a3=new A.aF(k,n.b,b1,new A.cy([new A.Bs(j,a2),0,a3*l,!0]),A.a([],s))
$.S()
a4=new A.ao(B.Q,B.M,B.S,B.T,B.R)
a4.r=D.FN.gp(0)
a4.b=B.a9
a4.c=g
a4.d=B.bA
a1=a4.G()
a4=a3.gbv().a.snapshot()
p.drawPath((a3.e=new A.ce(a4)).a,a1)
a1.delete()
j.im()
a3=m[a2].b
a3===$&&A.c()
a3=a3.a.length()
j.im()
a5=m[a2].Hc(a3*l)
if(h)for(a2=a5.a,a3=a2.a,a2=a2.b,a6=0;a6<4;++a6){a7=a6*1.6+o
a4=A.bK(new A.t(a3+Math.cos(a7)*14,a2+Math.sin(a7)*10),a0,d)
a8=new A.ao(B.Q,B.M,B.S,B.T,B.R)
a8.r=B.be.gp(0)
a1=a8.G()
p.drawOval(A.bG(a4),a1)
a1.delete()}}}if(b0.e)for(b3=b6*0.3,o=0;o<6;++o){a9=new A.iN(D.fg9,B.a4,B.bY,new A.jq(1),b1,b1,b1,b1,B.bV,b1)
a9.ej()
a9.a3(b7,new A.t(w*(0.15+o*0.14),b3-B.o.F(o,3)*14))}},
av(d){return!0}}
C.axX.prototype={
R(){return new C.axY(A.aX(x.S))},
gd_(){return this.d}}
C.axY.prototype={
gkL(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.hzn(w.c,w.e)
u.d!==$&&A.bF()
u.d=v
t=v}return t},
Z(){this.a2()
this.b7j()},
q(){var w=this.ch
if(w!=null)w.a4(0)
this.a1()},
b7j(){var w=this.ch
if(w!=null)w.a4(0)
this.ch=A.dh(B.rs,new C.cCj(this))},
boa(d){var w,v=this
if(v.as||v.z.t(0,d))return
w=v.gkL()[v.e]
if(w.e[d]===w.b)v.m(new C.cCr(v,Math.max(10,100-25*(v.f-1)-15*v.z.a)))
else{v.m(new C.cCs(v,d))
A.cG(B.iU,new C.cCt(v))}},
cTF(){var w=this
if(!w.as&&w.f<w.gkL()[w.e].d.length)w.m(new C.cCu(w))},
kF(d){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$kF=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.e
q=t.gkL()
w=r+1>=q.length?3:4
break
case 3:r=t.ch
if(r!=null)r.a4(0)
r=t.w
q=r===q.length?15:0
s=r*6+q
t.m(new C.cCv(t,s))
w=5
return A.b(C.Bu(t.a.d,s),$async$kF)
case 5:t.y=f
q=t.a
w=6
return A.b(C.Bv(q.d,q.c.a,"who",t.r),$async$kF)
case 6:t.ax=f
if(t.c!=null)t.m(new C.cCw())
w=1
break
case 4:t.m(new C.cCx(t))
t.b7j()
case 1:return A.h(u,v)}})
return A.i($async$kF,v)},
B(a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=this,a1="Who Am I?",a2=null
if(a0.at){w=A.au(A.d(""+a0.w+" of "+a0.gkL().length+" guessed",a2,a2,a2,a2,a2,a2,B.pE,a2,a2,a2),a2,a2,a2)
v=A.au(A.d(""+a0.r+" points",a2,a2,a2,a2,a2,a2,D.UQ,a2,a2,a2),a2,a2,a2)
u=a0.x
t=a0.y
if(t===0)t=u
return new C.tr(a1,A.cn(A.a([D.bax,w,v,B.aQ,new C.I_(u,t,a0.ax,a2),B.aQ,A.au(C.uk("Back to the games",new C.cCl(a3),B.cI,B.kL,D.fq),a2,a2,a2)],x.p),a2,B.aa,a2,a2,B.ah,!1),B.f0,a2)}w=a0.as
s=w?0:Math.max(1,13-3.5*(a0.f-1))
r=w?0:Math.max(0.1,0.92-0.25*(a0.f-1))
w=a0.e
v=a0.gkL()
u=x.X
t=x.p
w=A.a([A.d("Person "+(w+1)+" of "+v.length,a2,a2,a2,a2,a2,a2,D.Kl,B.K,a2,a2),B.W,A.au(A.lx(new C.cCm(a0,r),a2,B.b7,B.hu,a2,a2,new A.bp(a2,s,u),x.i),a2,a2,a2),B.aA],t)
for(q=x.W,p=x.gW,o=0;n=a0.f,o<n;o=k){n=a0.e
m=new A.aQ(16,16)
l=new A.ay(B.cI,2,B.r,-1)
k=o+1
w.push(new A.qX(new A.bp(0,1,u),new C.cCn(),A.p(a2,new A.cd(B.aM,B.e,B.i,B.m,a2,B.p,a2,0,A.a([new A.qz(new A.y(""+k,a2,B.nK,a2,a2,a2,a2,a2,a2,a2,a2,a2),D.lv,a2,12,a2),B.as,new A.bz(1,B.ba,new A.y(v[n].d[o],a2,D.fsG,a2,a2,a2,a2,a2,a2,a2,a2,a2),a2)],t),a2),B.f,a2,a2,new A.o(D.q2,a2,new A.bI(l,l,l,l),new A.bj(m,m,m,m),a2,a2,B.n),a2,a2,a2,B.cu,B.bg,a2,a2,a2),B.b7,B.iU,a2,new A.bU("clue-"+n+"-"+o,q),p))}if(!a0.as&&n<v[a0.e].d.length)w.push(A.au(A.bN(!1,D.fTK,a2,a2,!0,a2,a2,a2,a0.gcTE(),a2,a2),a2,a2,a2))
w.push(B.P)
if(a0.as){u=D.lw.j(0.2)
q=A.n(16)
p=A.K(D.lw,B.r,1)
n=a0.e
m=A.d("It is "+v[n].b+"!  +"+a0.ay,a2,a2,a2,a2,a2,a2,B.fv,a2,a2,a2)
v=n+1>=v.length?"See my result":"Next person"
w.push(A.p(a2,A.x(A.a([m,B.W,C.uk(v,a0.gq8(a0),B.cI,B.jA,D.fq)],t),B.m,a2,B.e,B.i,0,B.p),B.f,a2,a2,new A.o(u,a2,p,q,a2,a2,B.n),a2,a2,a2,a2,B.bE,a2,a2,a2))}else{t=A.a([],t)
for(n=a0.z,o=0;m=a0.e,o<v[m].e.length;++o){j=a0.Q===o
i=j?1:0
h=n.t(0,o)?B.ds:B.cI.j(0.2)
g=new A.aQ(16,16)
l=new A.ay(n.t(0,o)?B.f8:B.cI,2,B.r,-1)
f=v[a0.e].e[o]
e=n.t(0,o)?B.bX:B.c
d=n.t(0,o)?B.wY:a2
t.push(new A.qX(new A.bp(0,i,u),new C.cCo(),A.aB(a2,A.p(a2,new A.y(f,a2,new A.F(!0,e,a2,a2,a2,a2,16,B.u,a2,a2,a2,a2,a2,a2,a2,a2,a2,d,a2,a2,a2,a2,a2,a2,a2,a2),a2,B.K,a2,a2,a2,a2,a2,a2,a2),B.f,a2,D.ad9,new A.o(h,a2,new A.bI(l,l,l,l),new A.bj(g,g,g,g),a2,a2,B.n),a2,a2,a2,a2,B.jf,a2,a2,a2),B.y,!1,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,new C.cCp(a0,o),a2,a2,a2,a2,a2,a2,!1,B.a3),B.b7,B.mF,a2,new A.bU("opt-"+m+"-"+o+"-"+j,q),p))}w.push(A.bX(B.fI,t,B.bq,a2,10,10))}return new C.tr(a1,A.cn(w,a2,B.akv,a2,a2,B.ah,!1),B.f0,a2)}}
C.ayY.prototype={
q(){var w=this,v=w.a9$
if(v!=null)v.a5(0,w.gbB())
w.a9$=null
w.a1()},
aU(){this.b1()
this.b0()
this.bC()}}
C.aGc.prototype={
aU(){this.b1()
this.b0()
this.dH()},
q(){var w=this,v=w.b7$
if(v!=null)v.a5(0,w.gdD())
w.b7$=null
w.a1()}}
C.aeY.prototype={
aq0(d){},
aqs(){var w=this,v=w.pR(new C.f2t(w))
v.h6(0)
w.LG$!==$&&A.aP()
w.LG$=v}}
C.aK0.prototype={
gbkC(d){var w=this.c
return B.a.ar(w,0,Math.min(this.d,w.length))},
Vz(d){var w=this,v=w.b
if(v!=null)v.a4(0)
w.c=d
w.d=0
w.b=A.dh(D.ajw,new C.fcz(w))},
bqt(d){var w=this,v=w.b
if(v!=null)v.a4(0)
w.d=w.c.length
w.a.$0()},
q(){var w=this.b
return w==null?null:w.a4(0)}}
C.alg.prototype={
R(){return new C.alh(new C.alq(),A.a([],x.t),new A.eB(0,$.ax()),$,0,null,null)},
gd_(){return this.d}}
C.alh.prototype={
gMx(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.bD3(w.c,10,w.e,!0)
u.d!==$&&A.bF()
u.d=v
t=v}return t},
gh8(d){var w,v=this,u=v.e
if(u===$){w=C.Mv(v.a.c)
v.e!==$&&A.bF()
v.e=w
u=w}return u},
gqf(){var w=this.r
return w===$?this.r=new C.aK0(new C.bR8(this)):w},
gaoQ(d){var w,v,u=A.a([],x.t)
for(w=this.w,v=0;v<w.length;++v)if(w[v]===this.gMx()[v].c)u.push(1)
return u.length},
gbjU(){var w=this.gh8(0)
return w.gyW()==null?"Elder":B.a.i(w.gyW().b)},
Z(){this.a2()
this.aqs()},
q(){var w,v=this
v.gqf().q()
v.f.q()
w=v.LG$
w===$&&A.c()
w.q()
w=v.pY$
w.T$=$.ax()
w.P$=0
v.bu7()},
cIl(){var w=this
w.m(new C.bR5(w))
w.gqf().Vz(w.gMx()[w.x].a)},
KJ(d){var w,v=this,u=!0
if(v.Q)if(!v.as){u=v.gqf()
w=u.d
u=u.c
u=w<u.length||v.w.length>v.x}if(u)return
v.w.push(d)
u=v.pY$.a
v.ax=u
v.ay=u+1
v.m(new C.bR3())
A.cG(B.hu,new C.bR4(v))},
bo6(){var w=this.gaoQ(0)/this.gMx().length*100
if(w>=90)return D.eS0
if(w>=75)return D.eQ2
if(w>=60)return D.eGM
if(w>=45)return D.eKa
return D.eBb},
B(d){var w,v,u,t,s,r,q,p,o,n=this,m=null
if(n.as)return n.cr7()
w=A.bS(0,new A.er(A.b4(m,m,m,new C.bs6(n,n.pY$),B.aw),m),0,0,0)
if(!n.Q){v=D.q2.j(0.96)
u=A.n(20)
t=A.K(B.cI,B.r,3)
u=A.p(m,A.x(A.a([A.d("Elder "+n.gbjU()+" is your teacher. Ten questions about the family are written on the board. Answer each one; the marks come at the end.",m,m,m,m,m,m,D.aU6,B.K,m,m),B.W,C.uk("Start the test",n.gBq(),B.cI,B.iX,D.fq)],x.p),B.m,m,B.e,B.O,0,B.p),B.f,m,m,new A.o(v,m,t,u,m,m,B.n),m,m,m,m,B.bE,m,m,m)
v=u}else{v=n.x
u=n.gMx()
v=A.d("Question "+(v+1)+" of "+u.length,m,m,m,m,m,m,D.aU8,m,m,m)
if(n.Q){t=n.gqf()
t=t.d<t.c.length}else t=!1
if(t)u=D.f8F
else{t=n.x
s=A.a([],x.p)
for(r=0;q=u[n.x].b,r<q.length;++r){p=new A.aQ(10,10)
o=new A.ay(D.B6,4,B.r,-1)
s.push(A.aB(m,A.p(m,new A.y(q[r],m,D.fjR,m,B.K,m,m,m,m,m,m,m),B.f,m,D.ad9,new A.o(D.bdk,m,new A.bI(o,o,o,o),new A.bj(p,p,p,p),m,m,B.n),m,m,m,m,B.Ny,m,m,m),B.y,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new C.bR6(n,r),m,m,m,m,m,m,!1,B.a3))}u=A.bX(B.fI,s,B.bq,new A.bU("o"+t,x.W),8,8)}u=A.x(A.a([v,B.am,A.p_(u,B.mE,A.qr(),B.b7,B.b7,A.L7())],x.p),B.m,m,B.e,B.O,0,B.p)
v=u}return new C.tr("Village School",new A.an(B.a_,m,B.ab,B.t,A.a([w,A.ap(10,v,m,m,10,10,m,m)],x.p),m),B.f0,m)},
cr7(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.bo6(),g=A.a([],x.t)
for(w=j.w,v=0;v<w.length;++v)if(w[v]!==j.gMx()[v].c)g.push(v)
u=A.n(22)
t=A.K(B.cI,B.r,4)
s=A.d(j.a.c.b,i,i,i,i,i,i,D.fog,B.K,i,i)
r=A.d("Signed by Elder "+j.gbjU(),i,i,i,i,i,i,D.fmW,i,i,i)
q=x.p
p=A.a([A.d(h.a,i,i,i,i,i,i,D.fs0,i,i,i),D.et6],q)
o=A.d(h.b,i,i,i,i,i,i,D.ftS,i,i,i)
n=j.gaoQ(0)
m=j.gMx()
u=A.p(i,A.x(A.a([D.fF3,B.au,s,r,B.W,new A.an(B.A,i,B.ab,B.t,p,i),o,B.am,A.d(""+n+" of "+m.length+" right",i,i,i,i,i,i,D.aaf,i,i,i),B.P,D.arf],q),B.m,i,B.e,B.i,0,B.p),B.f,i,i,new A.o(D.q2,i,t,u,i,i,B.n),i,i,i,i,B.fk,i,i,i)
t=j.y
s=j.z
if(s===0)s=t
s=A.a([u,B.aA,new C.I_(t,s,j.at,i)],q)
if(g.length!==0){u=A.a([B.aQ,D.fUP,B.P],q)
for(t=g.length,l=0;l<g.length;g.length===t||(0,A.L)(g),++l){v=g[l]
r=new A.aQ(14,14)
k=new A.ay(B.bC,1,B.r,-1)
p=m[v]
u.push(A.p(i,A.x(A.a([new A.y(p.a,i,B.fS,i,i,i,i,i,i,i,i,i),B.au,new A.y("You said: "+p.b[w[v]],i,D.fpq,i,i,i,i,i,i,i,i,i),new A.y(p.d,i,D.frD,i,i,i,i,i,i,i,i,i)],q),B.E,i,B.e,B.i,0,B.p),B.f,i,i,new A.o(B.ds,i,new A.bI(k,k,k,k),new A.bj(r,r,r,r),i,i,B.n),i,i,i,B.cu,B.bg,i,i,i))}B.d.v(s,u)}s.push(B.aA)
s.push(A.au(C.uk("Back to the games",new C.bR_(j),B.cI,B.kL,D.fq),i,i,i))
return new C.tr("Village School",A.cn(s,i,B.bQ,i,i,B.ah,!1),B.f0,i)}}
C.bs6.prototype={
a3(a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=this.b,e=f.pY$.a,d=a1.a,a0=f.f.Mg(a2).b
a0===$&&A.c()
a0=a0.a
a0===$&&A.c()
a0=a0.a
a0.toString
d.drawPicture(a0)
w=C.h6Q(a2)
J.bl(d.save())
d.translate(w.a,w.b)
a1.bW(0,w.c)
if(f.Q){a0=f.gqf()
v=a0.d<a0.c.length}else v=!1
for(u=0;u<2;++u){a0=D.cT9[u]-6
$.S()
t=new A.ao(B.Q,B.M,B.S,B.T,B.R)
t.r=D.Fz.gp(0)
s=t.G()
d.drawRect(A.bG(new A.a3(a0,340,a0+12,450)),s)
s.delete()}a0=A.br(D.a8n.cq(10),B.hU)
$.S()
t=A.I()
t.r=D.B6.gp(0)
a1.az(a0,t)
t=A.br(D.a8n,B.hF)
a0=A.I()
a0.sam(A.jv(new A.t(30,96),new A.t(420,346),D.dbt,g,B.x,g))
a1.az(t,a0)
r=new A.e4()
r.cY(2)
for(q=0;q<18;++q){a0=r.af()
t=r.af()
p=r.af()
p=A.bK(new A.t(30+a0*390,96+t*250),8+r.af()*14,30+p*60)
t=new A.ao(B.Q,B.M,B.S,B.T,B.R)
t.r=B.c.j(0.025).gp(0)
s=t.G()
d.drawOval(A.bG(p),s)
s.delete()}a0=A.I()
a0.r=L.aho.gp(0)
a1.aP(new A.a3(30,354,420,362),a0)
a0=A.I()
a0.r=B.aP.gp(0)
a1.aP(D.f0B,a0)
a0=A.I()
a0.r=B.bL.gp(0)
a1.aP(D.f0F,a0)
a0=A.br(D.f0v,B.hE)
t=A.I()
t.r=D.Yq.gp(0)
a1.az(a0,t)
o=B.k.E((e-f.ax)/0.7,0,1)
if(f.Q){a0=f.gqf().gbkC(0)
n=A.fx(g,g,7,g,A.cS(g,g,g,g,g,g,g,g,g,D.fw6,a0+(v?"|":"")),B.a4,B.bY,g,B.dA,B.bV)
n.o0(346)
J.bl(d.save())
a0=A.bG(D.a8n)
t=$.my()
d.clipRect(a0,t[1],!0)
a0=o<1
if(a0&&f.w.length>f.x)d.clipRect(A.bG(new A.a3(30+390*o,96,420,346)),t[1],!0)
n.a3(a1,new A.t(52,118))
d.restore()
if(o>0&&a0){a0=30+390*o-20
t=126+40*Math.sin(o*9)
t=A.br(new A.a3(a0,t,a0+40,t+90),B.fE)
a0=A.I()
a0.r=D.bsl.gp(0)
a1.az(t,a0)}}else{n=A.fx(g,g,g,g,D.fgp,B.K,B.bY,g,B.dA,B.bV)
n.o0(340)
n.a3(a1,new A.t(55,176))}if(v)for(a0=e*1.2,t=e*3,q=0;q<8;++q){m=B.k.F(a0+q/8,1)
p=B.o.F(f.gqf().d*9,310)
l=Math.sin(q+t)
k=new A.ao(B.Q,B.M,B.S,B.T,B.R)
k.r=B.c.j(0.7*(1-m)).gp(0)
s=k.G()
d.drawCircle(70+p+l*6,166+m*70,1.6,s)
s.delete()}a0=f.gh8(0).gyW()
j=(a0==null?g:a0.c)===D.oe?1:0
i=e<f.ay
h=A.a([new A.z(470,new C.f2u(e,a1,j,v,i,D.ehx)),new A.z(520,new C.f2v(a1,e,v)),new A.z(575,new C.f2w(a1,e,v)),new A.z(585,new C.f2x(this,a1,e,v)),new A.z(615,new C.f2y(this,v,a1,e,i))],x.E)
B.d.aY(h,new C.f2z())
for(u=0;u<5;++u)h[u].b.$0()
d.restore()},
c9D(d,e){var w,v,u,t,s,r,q,p=$.S(),o=A.a([],x.v),n=new A.aF(p.r,B.ag,null,null,o)
for(p=d.a,w=d.b,v=e*0.45,u=0;u<10;++u){t=-1.5707963267948966+u*3.141592653589793/5
s=(u&1)===0?e:v
r=p+Math.cos(t)*s
q=w+Math.sin(t)*s
if(u===0){r=new A.aY(r,q)
o.push(r)
q=n.f
if(q!=null)r.bw(q)
r=n.e
if(r!=null)r.a.delete()
n.e=null}else{r=new A.aq(r,q)
o.push(r)
q=n.f
if(q!=null)r.bw(q)
r=n.e
if(r!=null)r.a.delete()
n.e=null}}n.D(new A.bs())
return n},
av(d){return!1}}
C.ale.prototype={
R(){return new C.alf(new C.alq(),A.U(x.S,x.i),new A.eB(0,$.ax()),$,0,null,null)},
gd_(){return this.d}}
C.alf.prototype={
gkL(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.hyh(w.c,w.e)
u.d!==$&&A.bF()
u.d=v
t=v}return t},
giV(){var w=this.z
return w===$?this.z=this.Fm(0):w},
gaKe(){var w,v,u,t,s=this,r=s.Q
if(r===$){w=A.a([],x.n)
v=0
for(;;){r=s.z
if(r===$){r=s.z=s.Fm(0)
u=r}else u=r
if(!(v<r.length))break
t=B.d.cu(u,v)
r=s.z
w.push(450*(t+0.5)/(r===$?s.z=s.Fm(0):r).length);++v}s.Q=w
r=w}return r},
Fm(d){var w,v,u,t,s=this.gkL()
if(d>=s.length)return A.a([],x.t)
w=s[d].d.length
s=J.e_(w,x.S)
for(v=0;v<w;++v)s[v]=v
u=new A.e4()
u.cY(this.a.e+d*7)
B.d.dZ(s,u)
if(w>1){u=A.a([],x.t)
for(v=0;v<w;++v)u.push(s[v]===v?1:0)
u=B.d.f3(u,new C.bQM())===w}else u=!1
if(u){t=s[0]
s[0]=s[1]
s[1]=t}return s},
Z(){this.a2()
this.aqs()},
q(){var w,v=this
v.e.q()
w=v.LG$
w===$&&A.c()
w.q()
w=v.pY$
w.T$=$.ax()
w.P$=0
v.bu6()},
aq0(d){var w,v,u,t,s,r=this,q=r.giV().length
for(w=d*9,v=0;v<q;++v){u=r.z
t=B.d.cu(u===$?r.z=r.Fm(0):u,v)
s=r.gaKe()
s[v]=s[v]+(450*(t+0.5)/q-r.gaKe()[v])*Math.min(1,w)}},
cYP(d){var w,v=this
if(v.at||v.ay||d<0||d>=v.giV().length)return
w=v.y
if(w===-1){v.m(new C.bQX(v,d))
return}if(w===d){v.m(new C.bQY(v))
return}v.m(new C.bQZ(v,B.d.cu(v.giV(),v.y),d,B.d.cu(v.giV(),d)))},
cJ0(d){var w,v,u,t,s=this
if(s.at||s.ay)return
w=A.a([],x.f7)
v=0
for(;;){u=s.z
if(!(v<(u===$?s.z=s.Fm(0):u).length))break
t=s.gkL()[s.f]
u=s.z
w.push(t.e[(u===$?s.z=s.Fm(0):u)[v]]===v);++v}s.m(new C.bQS(s,B.d.d5(w,new C.bQT())))},
kF(d){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$kF=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.f
q=t.gkL().length
w=r+1>=q?3:4
break
case 3:r=t.r
q=r===q?15:0
s=r*10+q
t.m(new C.bQU(t,s))
w=5
return A.b(C.Bu(t.a.d,s),$async$kF)
case 5:t.x=f
q=t.a
w=6
return A.b(C.Bv(q.d,q.c.a,"lineup",t.r*10),$async$kF)
case 6:t.ch=f
if(t.c!=null)t.m(new C.bQV())
w=1
break
case 4:t.m(new C.bQW(t))
case 1:return A.h(u,v)}})
return A.i($async$kF,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null
if(l.ay){w=A.au(A.d(""+l.r+" of "+l.gkL().length+" lines right",k,k,k,k,k,k,B.pE,k,k,k),k,k,k)
v=l.w
u=l.x
if(u===0)u=v
return new C.tr("Line Up",A.cn(A.a([D.ae0,w,B.aQ,new C.I_(v,u,l.ch,k),B.aQ,A.au(C.uk("Back to the games",new C.bQO(d),B.cI,B.kL,D.fq),k,k,k)],x.p),k,B.aa,k,k,B.ah,!1),B.f0,k)}w=A.a([],x.t)
for(t=0;v=l.gkL(),t<v[l.f].d.length;++t)w.push(t)
B.d.aY(w,new C.bQP(l))
u=A.bS(0,A.cu(new C.bQQ(l)),0,0,0)
s=l.f
r=A.d("Round "+(s+1)+" of "+v.length,k,k,k,k,k,k,D.aU8,k,k,k)
s=v[s]
q=x.p
s=A.ap(k,A.x(A.a([r,A.d(s.a,k,k,k,k,k,k,D.foH,B.K,k,k),A.d(s.b,k,k,k,k,k,k,D.fqT,B.K,k,k)],q),B.m,k,B.e,B.i,0,B.p),k,k,12,12,4,k)
r=A.a([],q)
if(l.at){p=B.w.j(0.7)
o=A.n(16)
n=l.ax
m=A.K(n?D.lw:G.n9,B.r,2)
r.push(A.p(k,A.d(n?"Yes! That is the right line. The whole village cheers.":"Not quite. The right line is: "+new A.N(w,new C.bQR(l),x.cM).aG(0,", then ")+".",k,k,k,k,k,k,D.ft1,k,k,k),B.f,k,k,new A.o(p,k,m,o,k,k,B.n),k,k,k,B.d2,B.bg,k,k,1/0))}if(!l.at)r.push(C.uk("That is my line!",l.gcJ_(l),B.cI,B.hx,D.fq))
else{w=l.f+1>=v.length?"See my result":"Next family"
r.push(C.uk(w,l.gq8(l),B.cI,B.jA,D.fq))}return new C.tr("Line Up",new A.an(B.a_,k,B.ab,B.t,A.a([u,s,A.ap(12,A.x(r,B.m,k,B.e,B.O,0,B.p),k,k,12,12,k,k)],q),k),B.f0,k)}}
C.biH.prototype={
a3(c8,c9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3=null,c4=this.b,c5=c4.pY$.a,c6=c8.a,c7=c4.e.Mg(c9).b
c7===$&&A.c()
c7=c7.a
c7===$&&A.c()
c7=c7.a
c7.toString
c6.drawPicture(c7)
w=C.h6Q(c9)
J.bl(c6.save())
c6.translate(w.a,w.b)
c8.bW(0,w.c)
v=c4.giV().length
c7=$.S().r
u=x.v
t=new A.aF(c7,B.ag,c3,c3,A.a([],u))
t.D(new A.aY(10,470))
t.D(new A.c4(225,500,440,470))
s=A.I()
s.r=D.Yq.gp(0)
s.b=B.a9
s.c=4
c8.aH(t,s)
for(s=c5*3,r=0;r<12;++r){q=30+r*36
p=470+30*Math.sin(3.141592653589793*(q-10)/430)*0.95
o=Math.sin(s+r)
n=A.a([],u)
m=new A.aF(c7,B.ag,c3,c3,n)
n.push(new A.aY(q,p))
n.push(new A.aq(q+16,p+6+o*3))
n.push(new A.aq(q,p+20))
n.push(new A.bs())
o=new A.ao(B.Q,B.M,B.S,B.T,B.R)
o.r=[B.cI,G.n9,D.lw,B.aK][B.o.F(r,4)].gp(0)
l=o.G()
o=m.gbv().a.snapshot()
c6.drawPath((m.e=new A.ce(o)).a,l)
l.delete()}this.b_u(c8,"OLDEST",D.eix,B.cI)
this.b_u(c8,"YOUNGEST",D.ehZ,B.be)
c7=A.br(D.f0p,B.fE)
u=A.I()
u.r=D.Fz.gp(0)
c8.az(c7,u)
u=A.br(D.f0o,B.hF)
c7=A.I()
c7.r=D.B6.gp(0)
c8.az(u,c7)
k=c5<c4.CW
j=c5<c4.cx
i=v>=5?0.92:1.12
c7=A.a([],x.t)
for(h=0;h<v;++h)c7.push(h)
B.d.aY(c7,new C.dnT())
for(u=c7.length,s=440/v-8,o=c5*10,n=!k,m=c4.as,g=c5*9,f=c5*8,e=c5*12,d=0;d<c7.length;c7.length===u||(0,A.L)(c7),++d){h=c7[d]
a0=c4.z
a1=B.d.cu(a0===$?c4.z=c4.Fm(0):a0,h)
q=c4.gaKe()[h]
a2=c4.y===h
a3=a2?Math.abs(Math.sin(g))*10:0
a4=m.h(0,h)
if(a4!=null&&c5<a4)a3+=Math.sin((1-(a4-c5)/0.5)*3.141592653589793)*14
a5=c4.at&&c4.gkL()[c4.f].e[h]===a1
a6=c4.at&&!c4.ax&&!a5
a7=c4.gkL()
a8=a7[c4.f].c
a9=a8.length>h?a8[h]:h
if(n)b0=c4.at&&a5
else b0=!0
b1=Math.max(0,Math.sin(o+h))
if(a2){$.S()
a8=new A.ao(B.Q,B.M,B.S,B.T,B.R)
a8.r=B.cI.j(0.22+0.1*Math.sin(f)).gp(0)
l=a8.G()
c6.drawCircle(q,520,54,l)
l.delete()}a8=D.dfb[B.o.F(a9,6)]
if(b0)b2=1
else b2=a6?-0.4:0.35
if(b0)b3=0.4+0.4*b1
else b3=j&&a6?0.5:0
if(j&&a6)b4=1
else b4=a2?0.6:0
b5=b0?0.5:0
b6=a6?Math.sin(e)*0.5:0
b7=b0?a3+b1*8:a3
if(b0)b8=new A.t(-3-b1*8,-56)
else b8=a2?D.ekD:c3
if(b0)b9=new A.t(3+b1*8,-56)
else if(j&&a6)b9=D.aKj
else b9=a2?new A.t(30,-104+Math.sin(f)*5):c3
C.RX(c8,new A.t(q,612),b7,b4,(225-q)/225*0.5,-0.3,b8,b9,D.Jd,a8,b3,0,i,b2,b5,c5,b6)
a7=a7[c4.f].d[h]
c0=new A.iN(new A.eu(a7,c3,c3,B.cO,c3,c3,c3,c3,c3,c3,D.fms),B.a4,B.bY,new A.jq(1),"\u2026",c3,1,c3,B.bV,c3)
c0.o0(s)
c1=A.br(A.bK(new A.t(q,650),24,c0.b.c+16),B.fE)
$.S()
a7=new A.ao(B.Q,B.M,B.S,B.T,B.R)
if(a5)a8=B.io
else a8=a6?B.rn:D.q2
a7.r=a8.gp(0)
l=a7.G()
c6.drawRRect(A.e5(c1),l)
l.delete()
a7=new A.ao(B.Q,B.M,B.S,B.T,B.R)
if(a5)a8=D.lw
else a8=a6?G.n9:D.lv
a7.r=a8.gp(0)
a7.b=B.a9
a7.c=2
l=a7.G()
c6.drawRRect(A.e5(c1),l)
l.delete()
a7=c0.b
a8=a7.c
a7=a7.a.c
c0.a3(c8,new A.t(q-a8/2,650-a7.gbb(a7)/2))
c2=new A.iN(new A.eu(""+(a1+1),c3,c3,B.cO,c3,c3,c3,c3,c3,c3,D.fmL),B.a4,B.bY,new A.jq(1),c3,c3,c3,c3,B.bV,c3)
c2.ej()
c2.a3(c8,new A.t(q-c2.b.c/2,668))}if(k)for(c4=c5*2,c7=c5*120,u=c5*4,r=0;r<26;++r){q=B.k.F(r*53+Math.sin(c4+r)*20,450)
s=B.k.F(c7+r*37,420)
J.bl(c6.save())
c6.translate(q,140+s)
c6.rotate((u+r)*180/3.141592653589793,0,0)
s=A.bK(B.I,4,8)
$.S()
o=new A.ao(B.Q,B.M,B.S,B.T,B.R)
o.r=[B.cI,G.n9,D.lw,B.aK,B.c][B.o.F(r,5)].gp(0)
l=o.G()
c6.drawRect(A.bG(s),l)
l.delete()
c6.restore()}c6.restore()},
b_u(d,e,f,g){var w,v,u=null,t=A.fx(u,u,u,u,A.cS(u,u,u,u,u,u,u,u,u,A.l(u,u,g,u,u,u,u,u,u,u,u,13,u,u,B.u,u,u,!0,u,2,u,u,u,L.CV,u,u),e),B.a4,B.bY,u,B.dA,B.bV)
t.ej()
w=t.b
v=w.c
w=w.a.c
t.a3(d,f.aE(0,new A.t(v/2,w.gbb(w)/2)))},
av(d){return!1}}
C.a1n.prototype={
a6(){return"_Trip."+this.b}}
C.ala.prototype={
R(){return new C.alb(D.Wv,new A.eB(0,$.ax()),$,0,null,null)},
gd_(){return this.d}}
C.alb.prototype={
gD5(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.bD3(w.c,8,w.e,!1)
u.d!==$&&A.bF()
u.d=v
t=v}return t},
gh8(d){var w,v=this,u=v.e
if(u===$){w=C.Mv(v.a.c)
v.e!==$&&A.bF()
v.e=w
u=w}return u},
gqf(){var w=this.f
return w===$?this.f=new C.aK0(new C.bQy(this)):w},
gTx(){var w=this.gh8(0)
return w.gyW()==null?"Grandma":B.a.i(w.gyW().b)},
Z(){this.a2()
this.aqs()},
q(){var w,v=this
v.gqf().q()
w=v.LG$
w===$&&A.c()
w.q()
w=v.pY$
w.T$=$.ax()
w.P$=0
v.bu5()},
aq0(d){var w,v,u,t=this
if(t.r!==D.abZ)return
w=B.dw.aw(0,B.k.E((t.cy+=d)/t.db,0,1))
v=t.cx
t.CW=v+520*w
if(t.cy>=t.db){t.CW=v+520
v=t.w
u=t.gD5()
if(v+1>=u.length){t.r=D.ac_
t.Ww()}else{++t.w
t.ay=!1
t.r=D.Ww
t.gqf().Vz(u[t.w].a)}if(t.c!=null)t.m(new C.bQw())}},
Ww(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$Ww=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:u.gqf().Vz("Karibu! Welcome home, my child. You answered every stop, and the whole family is proud of you. Come, sit, the food is ready.")
t=u.x
s=u.gD5().length
r=C.bFk(t,u.z,s)
u.as=r
w=2
return A.b(C.Bu(u.a.d,r),$async$Ww)
case 2:u.at=e
s=u.a
w=3
return A.b(C.Bv(s.d,s.c.a,"journey",u.x*10),$async$Ww)
case 3:u.ch=e
if(u.c!=null)u.m(new C.bQq())
return A.h(null,v)}})
return A.i($async$Ww,v)},
bpn(){this.aSN()},
aSN(){var w=this
w.cx=w.CW
w.cy=0
w.db=w.ay?3.4:2.6
w.r=D.abZ
if(w.c!=null)w.m(new C.bQr())},
KJ(d){var w,v,u,t,s=this
if(s.r!==D.Ww)return
w=s.gD5()
v=d===w[s.w].c
if(v){++s.x
u=++s.y
s.z=Math.max(s.z,u)}else{s.y=0
s.ay=!0}s.m(new C.bQv(s,d,v))
u=s.gqf()
t=s.w
u.Vz(v?"Hongera! "+w[t].d+" Beep beep, off you go!":"Pole, the tyre is flat! Listen: "+w[t].d+" We will limp on slowly.")},
cOa(){if(this.r!==D.AF)return
this.aSN()},
B(d){var w,v,u,t=this,s=null,r=A.bS(0,new A.er(A.b4(s,s,s,new C.bi6(t,t.pY$),B.aw),s),0,0,0),q=x.p,p=A.a([],q)
for(w=0;w<=t.gD5().length;++w){v=t.w
if(w<v||t.r===D.ac_)v=B.cI
else v=w===v?B.c:B.aY
u=new A.aQ(4,4)
p.push(new A.bz(1,B.ba,A.p(s,s,B.f,s,s,new A.o(v,s,s,new A.bj(u,u,u,u),s,s,B.n),s,7,s,B.yt,s,s,s,s),s))}p.push(B.bn)
p.push(D.fGE)
return new C.tr("Safari Journey",new A.an(B.a_,s,B.ab,B.t,A.a([r,A.ap(s,A.B(p,B.m,s,B.e,B.i,0,s,s),s,s,12,12,2,s),A.ap(10,t.ciP(),s,s,10,10,s,s)],q),s),B.f0,s)},
ciP(){var w,v,u,t,s,r,q,p,o=this,n=null,m=new C.bQu(o),l=D.q2.j(0.96),k=A.n(22),j=A.K(B.cI,B.r,3)
switch(o.r.a){case 0:w=A.x(A.a([A.d("A long drive to the village of Elder "+o.gTx()+". At every stop a villager asks you something about the family. Answer well and the bus flies. Get it wrong and a tyre goes flat!",n,n,n,n,n,n,D.aU6,B.K,n,n),B.W,C.uk("Start the journey",o.gbpm(),B.cI,D.bMq,D.fq)],x.p),B.m,n,B.e,B.O,0,B.p)
break
case 3:w=D.ba5
break
case 1:w=o.w
v=o.gD5()
w=m.$1("Stop "+(w+1)+" of "+v.length+" \xb7 a villager asks")
u=x.p
t=A.a([],u)
for(s=0;r=v[o.w].b,s<r.length;++s){q=new A.aQ(14,14)
p=new A.ay(D.lv,2.5,B.r,-1)
t.push(A.aB(n,A.p(n,new A.y(r[s],n,D.aTu,n,B.K,n,n,n,n,n,n,n),B.f,n,D.adg,new A.o(D.aiv,n,new A.bI(p,p,p,p),new A.bj(q,q,q,q),n,n,B.n),n,n,n,n,V.w2,n,n,n),B.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.bQs(o,s),n,n,n,n,n,n,!1,B.a3))}w=A.x(A.a([w,B.P,A.bX(B.bG,t,B.bq,n,8,8)],u),B.E,n,B.e,B.O,0,B.p)
break
case 2:w=m.$1(o.ax?"The villager cheers":"A flat tyre!")
v=o.w+1>=o.gD5().length?"Drive home":"Drive on"
v=A.x(A.a([w,B.P,new A.bM(B.a8,n,n,C.uk(v,o.gcO9(),B.cI,B.jA,D.fq),n)],x.p),B.E,n,B.e,B.O,0,B.p)
w=v
break
case 4:w=A.a([m.$1("Elder "+o.gTx()),B.P,A.d(""+o.x+" of "+o.gD5().length+" right  \xb7  +"+o.as+" \u2b50",n,n,n,n,n,n,D.aTN,n,n,n)],x.p)
v=o.at
if(v>0){v=C.aPT(v)
u=C.aPT(o.at)
t=o.at
r=o.ch?" \xb7 \ud83c\udfc6 new record!":""
w.push(A.d(v.b+" "+u.a+" \xb7 "+t+" stars"+r,n,n,n,n,n,n,D.aaf,n,n,n))}w.push(B.P)
w.push(A.au(C.uk("Back to the games",new C.bQt(o),B.cI,B.kL,D.fq),n,n,n))
w=A.x(w,B.E,n,B.e,B.O,0,B.p)
break
default:w=n}return A.p(n,w,B.f,n,n,new A.o(l,n,j,k,D.aBy,n,B.n),n,n,n,n,B.bg,n,n,n)}}
C.bi6.prototype={
a3(d5,d6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5=null,c6=this.b,c7=c6.pY$.a,c8=d6.a,c9=d6.b,d0=c6.CW,d1=c6.gD5(),d2=B.k.E(d0/(520*(d1.length+1)),0,1),d3=c6.r===D.abZ,d4=c9*0.5
d0=A.ar(D.beM,D.boS,d2)
d0.toString
w=A.ar(D.XH,G.agf,d2)
w.toString
v=A.ar(B.tI,D.bnm,d2)
v.toString
$.S()
u=A.I()
t=x.O
u.sam(A.jv(B.I,new A.t(0,d4),A.a([d0,w,v],t),G.a3m,B.x,c5))
d5.aP(new A.a3(0,0,0+c8,0+c9),u)
s=new A.t(c8*(0.15+0.7*d2),d4*(0.28+0.45*d2*d2))
u=A.I()
u.sam(A.tt(s,60,A.a([D.bnJ,B.L],t),c5,B.x,c5,c5,0))
d5.ad(s,60,u)
u=A.I()
u.r=B.XT.gp(0)
d5.ad(s,22,u)
for(d0=d5.a,w=c7*4,v=c8+240,u=c9*0.06,r=0;r<5;++r){q=B.k.F(r*190-c6.CW*0.06-w,v)-120
p=u+B.o.F(r,3)*22
for(o=0;o<4;++o){n=D.due[o]
$.S()
m=new A.ao(B.Q,B.M,B.S,B.T,B.R)
m.r=B.c.j(0.75).gp(0)
l=m.G()
d0.drawCircle(q+n.a,p+n.b,18,l)
l.delete()}}for(v=d2*0.7,u=d4+4,m=d4-16,k=x.v,j=0;j<2;++j){i=$.S()
h=A.a([],k)
g=new A.aF(i.r,B.ag,c5,c5,h)
h.push(new A.aY(0,u))
for(i=m-j*12,f=0.12+j*0.1,e=70+j*30,d=14-j*3,q=0;q<=c8;q+=6){a0=new A.aq(q,i+Math.sin((q+c6.CW*f)/e)*d)
h.push(a0)
a1=g.f
if(a1!=null)a0.bw(a1)
a0=g.e
if(a0!=null)a0.a.delete()
g.e=null}i=new A.aq(c8,u)
h.push(i)
h=g.f
if(h!=null)i.bw(h)
i=g.e
if(i!=null)i.a.delete()
g.e=null
$.S()
i=new A.ao(B.Q,B.M,B.S,B.T,B.R)
i.r=A.ar(j===0?D.bdm:D.brL,D.bid,v).gp(0)
l=i.G()
i=g.e
d0.drawPath((i==null?g.e=new A.ce(g.gbv().a.snapshot()):i).a,l)
l.delete()}for(v=d4+2,r=0;r<8;++r)this.c9E(d5,new A.t(B.k.F(B.k.F(r*300-c6.CW*0.5,2400)+2400,2400)-150,v),(r&1)===0,d2)
$.S()
v=A.I()
u=A.ar(D.ahG,D.FN,d2)
u.toString
v.sam(A.jv(new A.t(0,d4),new A.t(0,c9),A.a([u,D.bnL],t),c5,B.x,c5))
d5.aP(new A.a3(0,d4,c8,c9),v)
a2=c9*0.56
a3=c9*0.66
v=A.I()
v.r=D.bhw.gp(0)
d5.aP(new A.a3(0,a2,c8,a3),v)
v=A.I()
v.r=D.brr.gp(0)
d5.aP(new A.a3(0,a2-3,c8,a2),v)
for(q=-B.k.F(c6.CW,70),v=(a2+a3)/2-2,u=v+4;q<c8;q+=70){t=new A.ao(B.Q,B.M,B.S,B.T,B.R)
t.r=L.M9.gp(0)
l=t.G()
d0.drawRect(A.bG(new A.a3(q,v,q+36,u)),l)
l.delete()}for(v=a2-6,u=v-36,t=u+36,m=v-34,i=c8*0.62,h=c8+160,f=c7*3,e=c7*6,d=v+40,a0=v-20,a1=a0+20,a4=v-56,a5=a4+56,a6=v-66,a7=a6+20,a8=v-72,r=0;a9=d1.length,r<=a9;r=b0){b0=r+1
q=i+b0*520-c6.CW
if(q<-160||q>h)continue
a9=r===a9
b1=q+40
b2=b1-26
b3=$.S()
b4=new A.ao(B.Q,B.M,B.S,B.T,B.R)
b4.r=D.bd3.gp(0)
l=b4.G()
d0.drawRect(A.bG(new A.a3(b2,u,b2+52,t)),l)
l.delete()
b2=A.a([],k)
b3=new A.aF(b3.r,B.ag,c5,c5,b2)
b2.push(new A.aY(b1-36,m))
b2.push(new A.aq(b1,a8))
b2.push(new A.aq(b1+36,m))
b2.push(new A.bs())
b2=new A.ao(B.Q,B.M,B.S,B.T,B.R)
b2.r=D.bpI.gp(0)
l=b2.G()
b2=b3.gbv().a.snapshot()
d0.drawPath((b3.e=new A.ce(b2)).a,l)
l.delete()
b2=b1-6
b3=new A.ao(B.Q,B.M,B.S,B.T,B.R)
b3.r=D.fq.gp(0)
l=b3.G()
d0.drawRect(A.bG(new A.a3(b2,a0,b2+12,a1)),l)
l.delete()
b5=q-36
b2=b5-2
b3=new A.ao(B.Q,B.M,B.S,B.T,B.R)
b3.r=D.Fz.gp(0)
l=b3.G()
d0.drawRect(A.bG(new A.a3(b2,a4,b2+4,a5)),l)
l.delete()
b2=b5-30
b6=A.br(new A.a3(b2,a6,b2+60,a7),B.id)
b2=new A.ao(B.Q,B.M,B.S,B.T,B.R)
b2.r=D.bsP.gp(0)
l=b2.G()
d0.drawRRect(A.e5(b6),l)
l.delete()
b2=new A.ao(B.Q,B.M,B.S,B.T,B.R)
b2.r=D.B6.gp(0)
b2.b=B.a9
b2.c=2
l=b2.G()
d0.drawRRect(A.e5(b6),l)
l.delete()
b7=a9?"HOME":"STOP "+b0
b8=new A.iN(new A.eu(b7,c5,c5,B.cO,c5,c5,c5,c5,c5,c5,D.fkX),B.a4,B.bY,new A.jq(1),c5,c5,c5,c5,B.bV,c5)
b8.ej()
b2=b8.b
b3=b2.c
b2=b2.a.c
b8.a3(d5,new A.t(b5-b3/2,a4-b2.gbb(b2)/2))
if(a9)b9=c6.r===D.ac_
else if(r===c6.w){b2=c6.r
b2=b2===D.Ww||b2===D.AF
b9=b2}else b9=!1
if(a9){b2=c6.gh8(0).gyW()
c0=(b2==null?c5:b2.c)===D.oe?1:0}else c0=[0,3,6,7,2,1,4,5][B.o.F(r,8)]
b2=c6.gqf()
c1=b2.d<b2.c.length&&b9
c2=b9&&c6.r===D.AF
b2=c1?C.huQ(c7,r):0
if(c2)b3=c6.ax?1:-0.3
else b3=a9&&b9?1:0.4
b4=b9&&c6.r===D.Ww?0.4:0
c3=c2&&c6.ax?0.5:0
if(a9&&b9)a9=new A.t(40,-110+Math.sin(e)*10)
else a9=c1?new A.t(44+Math.sin(f)*8,-66+Math.sin(w)*10):c5
C.RX(d5,new A.t(q+4,d),0,b4,-0.8,-0.2,c5,a9,new A.t(q-200,v),c0,b2,0,0.85,b3,c3,c7+r,-0.3)}d1=c8*0.28
this.bGe(d5,new A.t(d1,a3-6),c7,d3,d6)
if(d3)for(v=c7*1.6,u=d1-90,t=a3-10,r=0;r<7;++r){c4=B.k.F(v+r/7,1)
$.S()
m=new A.ao(B.Q,B.M,B.S,B.T,B.R)
m.r=D.bqX.j(0.5*(1-c4)).gp(0)
l=m.G()
d0.drawCircle(u-c4*70,t-c4*18,6+c4*16,l)
l.delete()}if(c6.ay&&c6.r!==D.Wv)for(v=c7*1.2,u=d1+62,t=a3-40,r=0;r<5;++r){c4=B.k.F(v+r/5,1)
m=Math.sin(r+w)
$.S()
k=new A.ao(B.Q,B.M,B.S,B.T,B.R)
k.r=B.c.j(0.5*(1-c4)).gp(0)
l=k.G()
d0.drawCircle(u+m*5,t-c4*50,4+c4*10,l)
l.delete()}if(c6.r===D.AF&&c6.ax){b8=A.fx(c5,c5,c5,c5,A.cS(c5,c5,c5,c5,c5,c5,c5,c5,c5,A.l(c5,c5,B.cI,c5,c5,c5,c5,c5,c5,c5,c5,24,c5,c5,B.u,c5,c5,!0,c5,c5,c5,c5,c5,A8.I8,c5,c5),"BEEP BEEP!"),B.a4,B.bY,c5,B.dA,B.bV)
b8.ej()
b8.a3(d5,new A.t(d1-b8.b.c/2+40,a2-96-Math.abs(Math.sin(c7*9))*6))}},
c9E(d,e,f,g){var w,v,u,t,s,r,q,p,o,n,m=A.ar(D.bng,D.bgQ,g)
m.toString
if(f){w=new A.aF($.S().r,B.ag,null,null,A.a([],x.v))
v=e.a
u=e.b
w.D(new A.aY(v-16,u))
t=u-36
s=u-56
w.D(new A.c4(v-9,t,v-7,s))
w.D(new A.aq(v+7,s))
w.D(new A.c4(v+9,t,v+16,u))
w.D(new A.bs())
t=A.I()
t.r=D.YR.gp(0)
d.aH(w,t)
for(w=v+0,t=u+-54,s=u+-72,r=d.a,u+=-76,q=0;q<4;++q){p=D.cX7[q]
o=new A.ao(B.Q,B.M,B.S,B.T,B.R)
o.r=D.YR.gp(0)
o.c=4
o.d=B.bA
n=o.G()
r.drawLine.apply(r,[w,t,v+p*24,s,n])
n.delete()
o=new A.ao(B.Q,B.M,B.S,B.T,B.R)
o.r=m.gp(0)
n=o.G()
r.drawCircle(v+p*26,u,10,n)
n.delete()}}else{w=e.a7(0,D.ekA)
$.S()
v=A.I()
v.r=D.bd5.gp(0)
v.c=4
d.bo(e,w,v)
v=A.bK(e.a7(0,D.ekB),16,60)
w=A.I()
w.r=m.gp(0)
d.dP(v,w)}},
bGe(a3,a4,a5,a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null,d=a6?Math.sin(a5*22)*1.6:Math.sin(a5*2)*0.4,a0=this.b,a1=a0.ay&&a0.r!==D.Wv?0.045:0,a2=a3.a
J.bl(a2.save())
a2.translate(a4.a,a4.b+d)
a3.ih(0,a1)
for(w=0;w<2;++w){v=D.dmJ[w]
u=a0.ay&&a0.r!==D.Wv&&v>0
J.bl(a2.save())
a2.translate(v,-4+(u?4:0))
t=u?15:18
$.S()
s=new A.ao(B.Q,B.M,B.S,B.T,B.R)
s.r=D.brD.gp(0)
r=s.G()
a2.drawCircle(0,0,t,r)
r.delete()
a2.rotate(a0.CW/18*180/3.141592653589793,0,0)
t=new A.ao(B.Q,B.M,B.S,B.T,B.R)
t.r=D.bkd.gp(0)
r=t.G()
a2.drawCircle(0,0,9,r)
r.delete()
for(q=0;q<4;++q){t=q*3.141592653589793/2
s=Math.cos(t)
t=Math.sin(t)
p=new A.ao(B.Q,B.M,B.S,B.T,B.R)
p.r=B.bm.gp(0)
p.c=2
r=p.G()
a2.drawLine.apply(a2,[0,0,s*9,t*9,r])
r.delete()}a2.restore()}o=A.tQ(D.f0M,B.fE,B.fE,B.it,B.hD)
$.S()
t=A.I()
t.sam(A.jv(D.egG,B.a7j,D.dcO,G.a3m,B.x,e))
a3.az(o,t)
for(n=0;n<20;++n){t=-100+n*10
s=new A.ao(B.Q,B.M,B.S,B.T,B.R)
s.r=D.d6X[B.o.F(n,4)].gp(0)
r=s.G()
a2.drawRect(A.bG(new A.a3(t,-26,t+10,-19)),r)
r.delete()}m=a0.r===D.AF&&a0.ax
l=[2,3,4,5]
for(t=a5*10,n=0;n<4;++n){s=-88+n*38
p=s+32
k=new A.a3(s,-66,p,-36)
J.bl(a2.save())
a2.clipRRect(A.e5(A.br(k,B.mW)),$.nF(),!0)
j=new A.ao(B.Q,B.M,B.S,B.T,B.R)
j.r=D.XH.gp(0)
r=j.G()
a2.drawRect(A.bG(k),r)
r.delete()
j=l[n]
i=m?1:0.35
h=m?0.5:0
g=a0.ay&&a0.r===D.AF?1:0
f=m?Math.max(0,Math.sin(t+n))*6:0
C.RX(a3,new A.t(s+(p-s)/2,-10),f,g,0.5,-0.2,e,e,D.aKa,j,h,0,0.4,i,0,a5,0)
a2.restore()
i=A.br(k,B.mW)
h=new A.ao(B.Q,B.M,B.S,B.T,B.R)
h.r=D.aix.gp(0)
h.b=B.a9
h.c=2
r=h.G()
a2.drawRRect(A.e5(i),r)
r.delete()}a0=A.br(D.TN,B.mW)
t=A.I()
t.r=D.XH.gp(0)
a3.az(a0,t)
J.bl(a2.save())
a2.clipRRect(A.e5(A.br(D.TN,B.mW)),$.nF(),!0)
C.RX(a3,new A.t(D.TN.gbK().a,-10),0,0,0.7,-0.1,e,e,D.aKa,6,0,0,0.4,0.5,0,a5,0)
a2.restore()
t=A.br(D.TN,B.mW)
a0=A.I()
a0.r=D.aix.gp(0)
a0.b=B.a9
a0.c=2
a3.az(t,a0)
a0=A.I()
a0.r=Ao.FO.gp(0)
a3.ad(D.eiL,4,a0)
a0=A.I()
a0.r=D.Fz.gp(0)
a3.aP(D.f1V,a0)
for(w=0;w<3;++w){v=D.dmL[w]
a0=A.br(new A.a3(v,-96,v+28,-79),B.id)
t=new A.ao(B.Q,B.M,B.S,B.T,B.R)
t.r=D.FN.gp(0)
r=t.G()
a2.drawRRect(A.e5(a0),r)
r.delete()}a2.restore()},
av(d){return!1}}
C.aAP.prototype={
q(){var w=this,v=w.a9$
if(v!=null)v.a5(0,w.gbB())
w.a9$=null
w.a1()},
aU(){this.b1()
this.b0()
this.bC()}}
C.bfE.prototype={}
C.aAR.prototype={
q(){var w=this,v=w.a9$
if(v!=null)v.a5(0,w.gbB())
w.a9$=null
w.a1()},
aU(){this.b1()
this.b0()
this.bC()}}
C.bfF.prototype={}
C.aAS.prototype={
q(){var w=this,v=w.a9$
if(v!=null)v.a5(0,w.gbB())
w.a9$=null
w.a1()},
aU(){this.b1()
this.b0()
this.bC()}}
C.bfG.prototype={}
C.a5Q.prototype={
B(d){var w=null
return new A.a5(1/0,this.c,A.b4(w,w,w,new C.bie(w),B.aw),w)}}
C.bie.prototype={
a3(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=a0.b,e=f*1.1
for(w=a0.a,v=e+0.5,u=0+f,t=d.a,s=e*0.15,r=f/2,q=e/2,p=f*0.8,o=e*0.85,n=x.v,f*=0.2,m=0,l=0;l<w;l+=e){k=D.dkH[B.o.F(m,6)]
j=$.S()
i=new A.ao(B.Q,B.M,B.S,B.T,B.R)
i.r=k.gp(0)
h=i.G()
t.drawRect(A.bG(new A.a3(l,0,l+v,u)),h)
h.delete()
if(B.o.F(m,3)===0){i=A.a([],n)
g=new A.aF(j.r,B.ag,null,null,i)
j=l+q
i.push(new A.aY(j,f))
i.push(new A.aq(l+o,r))
i.push(new A.aq(j,p))
i.push(new A.aq(l+s,r))
i.push(new A.bs())
j=new A.ao(B.Q,B.M,B.S,B.T,B.R)
j.r=B.c.j(0.85).gp(0)
h=j.G()
j=g.gbv().a.snapshot()
t.drawPath((g.e=new A.ce(j)).a,h)
h.delete()}++m}},
av(d){return!1}}
C.tr.prototype={
B(d){var w=null,v=x.p,u=A.a([A.aG(w,w,w,w,B.Pe,w,w,w,new C.bQp(d),w,w,w,w,w,w),A.E(A.d(this.c,w,1,B.a1,w,w,w,D.fie,w,w,w),1)],v)
B.d.v(u,this.e)
return A.c5(w,D.Xu,A.p(w,A.bm(!0,A.x(A.a([D.c0U,new A.D(D.bDO,A.B(u,B.m,w,B.e,B.i,0,w,w),w),A.E(this.d,1)],v),B.m,w,B.e,B.i,0,B.p),!0,!1,B.af,!0,!0),B.f,w,w,D.b5y,w,w,w,w,w,w,w,w),w,!1,!1,w,w)}}
C.I_.prototype={
B(d){var w=null,v=this.d,u=C.aPT(v),t=C.ibW(v),s=B.c.j(0.08),r=A.n(18),q=A.K(B.cI.j(0.6),B.r,1.5),p=A.a([A.d("+"+this.c+" \u2b50 Family Stars",w,w,w,w,w,w,D.fkI,w,w,w)],x.p)
if(this.e)p.push(D.en_)
p.push(B.am)
p.push(A.d(u.b+" "+u.a+"  \xb7  "+v+" stars",w,w,w,w,w,w,B.fS,w,w,w))
if(t!=null)p.push(new A.D(B.u9,A.d(""+(t.c-v)+" more stars for "+t.b+" "+t.a,w,w,w,w,w,w,B.Am,w,w,w),w))
return A.p(w,A.x(p,B.m,w,B.e,B.i,0,B.p),B.f,w,w,new A.o(s,w,q,r,w,w,B.n),w,w,w,w,B.bE,w,w,w)}}
C.Vx.prototype={
R(){return new C.bl_(A.U(x.N,x.S),B.o.F(Date.now(),1e5))},
cV2(d){return this.f.$1(d)},
ge1(){return this.d}}
C.bl_.prototype={
gSx(){var w=this.d
return w===$?this.d=this.a.c:w},
Z(){this.a2()
this.Pe()},
Pe(){var w=0,v=A.j(x.H),u=this,t,s,r,q,p,o,n,m,l
var $async$Pe=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(C.bRa(u.a.d),$async$Pe)
case 2:n=e
t=u.f,s=0
case 3:if(!(s<8)){w=5
break}r=D.daT[s]
q=u.a
p=q.d
o=u.d
m=t
l=r
w=6
return A.b(C.bR9(p,(o===$?u.d=q.c:o).a,r),$async$Pe)
case 6:m.n(0,l,e)
case 4:++s
w=3
break
case 5:if(u.c!=null)u.m(new C.dYA(u,n))
return A.h(null,v)}})
return A.i($async$Pe,v)},
u9(d){return this.clQ(d)},
clQ(d){var w=0,v=A.j(x.H),u=this,t
var $async$u9=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return A.b(A.a4(t,!1).cc(A.eh(new C.dYB(d),!1,null,x.H)),$async$u9)
case 2:u.r=B.o.F(Date.now(),1e5)
if(u.c!=null)u.Pe()
return A.h(null,v)}})
return A.i($async$u9,v)},
gb4K(){var w,v,u,t=C.Mv(this.gSx()),s=A.a([],x.s)
for(w=t.b,v=w.length,u=0;u<w.length;w.length===v||(0,A.L)(w),++u)s.push(B.a.i(w[u].b))
return s},
a23(d){return this.ct1(d)},
ct1(d){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$a23=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=A.a([],x.Y)
for(t=d.length,s=0;s<d.length;d.length===t||(0,A.L)(d),++s)r.push(d[s].ah())
w=2
return A.b(u.a.cV2(r),$async$a23)
case 2:if(u.c!=null)u.m(new C.dYC(u,r))
return A.h(null,v)}})
return A.i($async$a23,v)},
Ox(d){return this.bOR(d)},
bOR(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j
var $async$Ox=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:j=C.h8Y(t.gSx())
if(d==null){s=Date.now()
r=A.a([],x.b)
q=new C.Mf("g"+s,"",r)}else q=d
s=t.c
s.toString
r=x.fH
w=3
return A.b(A.a4(s,!1).cc(A.eh(new C.dYy(q),!1,null,r)),$async$Ox)
case 3:p=f
if(p==null){w=1
break}s=A.a([],x.c)
for(o=j.length,n=p.a,m=0;m<j.length;j.length===o||(0,A.L)(j),++m){l=j[m]
if(l.a!==n)s.push(l)}k=B.d.bh(j,new C.dYz(p))
o=s.length
B.d.c6(s,k<0?o:Math.min(k,o),p)
w=4
return A.b(t.a23(A.d_(s,0,A.dA(2,"count",x.S),r).dm(0)),$async$Ox)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Ox,v)},
Xs(d,e){return this.bMt(0,e)},
bMt(d,e){var w=0,v=A.j(x.H),u=this,t,s,r,q,p,o
var $async$Xs=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:o=u.c
o.toString
w=4
return A.b(A.ck(null,null,!0,null,new C.dYx(e),o,null,!0,!0,x.y),$async$Xs)
case 4:w=g===!0?2:3
break
case 2:o=A.a([],x.c)
for(t=C.h8Y(u.gSx()),s=t.length,r=e.a,q=0;q<t.length;t.length===s||(0,A.L)(t),++q){p=t[q]
if(p.a!==r)o.push(p)}w=5
return A.b(u.a23(o),$async$Xs)
case 5:case 3:return A.h(null,v)}})
return A.i($async$Xs,v)},
a9H(d,e,f,g,h,i,j){var w,v,u,t,s,r,q,p=null,o=h==null,n=o?new C.dYu(this,j):h
o=o?0.55:1
w=A.ar(g,B.w,0.45)
w.toString
w=A.a([g,w],x.O)
v=A.n(20)
u=A.K(B.aY,B.r,1)
t=A.a([new A.ac(0,B.G,g.j(0.35),B.cx,12)],x.V)
s=x.p
r=A.a([A.d(d,p,p,p,p,p,p,B.UK,p,p,p),B.b1],s)
q=A.n(10)
r.push(A.p(p,A.d(i,p,p,p,p,p,p,D.fj7,p,p,p),B.f,p,p,new A.o(B.hN,p,p,q,p,p,B.n),p,p,p,p,B.BY,p,p,p))
return A.aB(p,A.db(A.p(p,A.x(A.a([A.B(r,B.m,p,B.e,B.i,0,p,p),B.b1,A.d(e,p,2,p,p,p,p,D.fqN,p,p,p),B.cN,A.d(f,p,3,B.a1,p,p,p,D.fjP,p,p,p)],s),B.E,p,B.e,B.i,0,B.p),B.f,p,p,new A.o(p,p,u,v,t,new A.a9(B.ay,B.aD,B.x,w,p,p),B.n),p,p,p,p,B.yl,p,p,p),o),B.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,n,p,p,p,p,p,p,!1,B.a3)},
WW(d,e,f,g,h,i){return this.a9H(d,e,f,g,h,i,null)},
B(a2){var w,v,u,t,s=this,r=null,q=C.Mv(s.gSx()),p=s.gSx(),o=C.aPT(s.e),n=C.h8Y(p),m=s.a.e&&J.ad(p.z)<2,l=new C.dYD(s),k=C.hyh(p,1).length,j=C.hyt(p,1).length,i=C.hzn(p,1).length,h=B.c.j(0.07),g=A.n(20),f=A.K(B.cI.j(0.5),B.r,1),e=A.d(o.b,r,r,r,r,r,r,I.aa5,r,r,r),d=A.d(o.a,r,r,r,r,r,r,D.foj,r,r,r),a0=q.b.length,a1=x.p
g=A.p(r,A.B(A.a([e,B.bc,A.E(A.x(A.a([d,A.d(a0>=3?"The games are made from the "+a0+" people in this tree.":"Add at least 3 people to the tree for games about your own family. Until then the elders teach culture.",r,r,r,r,r,r,I.aa2,r,r,r)],a1),B.E,r,B.e,B.i,0,B.p),1),A.x(A.a([A.d(""+s.e,r,r,r,r,r,r,B.pE,r,r,r),D.fMU],a1),B.m,r,B.e,B.i,0,B.p)],a1),B.m,r,B.e,B.i,0,r,r),B.f,r,r,new A.o(h,r,f,g,r,r,B.n),r,r,r,r,B.bE,r,r,r)
f=s.WW("\ud83c\udfaf","Family Kahoot","Race the clock. Answer fast, keep a streak, climb the podium against your family.",B.aC,new C.dYE(s,p),l.$1("kahoot"))
h=s.WW("\ud83d\udd25","Fireside Stories","Sit by the fire in the village. The elder teaches, the children answer.",D.lv,new C.dYF(s,p),l.$1("fire"))
a0=s.WW("\ud83e\uddfa","Calabash Catch","Gourds with the answers fall from the baobab. Slide the basket under the right one!",B.Bu,new C.dYG(s,p),l.$1("catch"))
j=j!==0?new C.dYJ(s,p):r
j=s.a9H("\ud83c\udf31","Plant the Tree","Drag the children onto the branches under their parent and watch the tree grow.",B.he,j,l.$1("plant"),"Add a parent with two children, and one more person.")
i=i!==0?new C.dYK(s,p):r
i=s.a9H("\ud83c\udfad","Who Am I?","A shadow turns into a face as the clues come. Who is hiding in it?",B.l1,i,l.$1("who"),"Add at least 3 people with some facts about them (parents, jobs, birthplaces).")
e=s.WW("\ud83d\ude8c","Safari Journey","Ride a bus across the savanna to the elder village. A villager asks a question at every stop. A wrong answer is a flat tyre!",B.eQ,new C.dYL(s,p),l.$1("journey"))
k=k!==0?new C.dYM(s,p):r
k=A.a([g,B.aQ,D.fQT,B.P,A.kP(0.98,A.a([f,h,a0,j,i,e,s.a9H("\ud83c\udf33","Line Up","The family stands under the baobab. Swap them into a line, oldest to youngest.",B.ei,k,l.$1("lineup"),"Add a parent with two children, or a family with more than one generation."),s.WW("\ud83c\udfeb","Village School","Sit with the children while the elder writes the questions on the chalkboard. A real test with a report card.",B.d1,new C.dYN(s,p),l.$1("school"))],a1),2,12,12,r,B.dS,!0),B.d4,A.B(A.a([D.bFx,A.d(""+n.length+" of 2",r,r,r,r,r,r,D.fjb,r,r,r)],a1),B.m,r,B.e,B.i,0,r,r),B.P],a1)
for(j=n.length,w=0;i=n.length,w<i;n.length===j||(0,A.L)(n),++w){v=n[w]
i=B.c.j(0.07)
h=new A.aQ(18,18)
u=new A.ay(B.aY,1,B.r,-1)
g=B.a.i(v.b)
if(g.length===0)g="Untitled game"
g=A.a([D.fxH,B.bc,new A.bz(1,B.ba,A.x(A.a([new A.y(g,r,B.hp,r,r,r,r,B.a1,r,1,r,r),new A.y(""+v.gaoz(0).length+" questions \xb7 Kahoot style",r,B.Am,r,r,r,r,r,r,r,r,r)],a1),B.E,r,B.e,B.i,0,B.p),r)],a1)
if(v.gaoz(0).length>=2){f=D.lw.j(0.2)
t=new A.ay(D.lw,1,B.r,-1)
g.push(A.aB(r,A.p(r,A.X(B.hk,D.lw,r,r,r,20),B.f,r,r,new A.o(f,r,new A.bI(t,t,t,t),r,r,r,B.a6),r,38,r,r,r,r,r,38),B.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new C.dYO(s,v,p),r,r,r,r,r,r,!1,B.a3))}if(s.a.e){f=B.cI.j(0.2)
t=new A.ay(B.cI,1,B.r,-1)
f=A.aB(r,A.p(r,A.X(B.iX,B.cI,r,r,r,20),B.f,r,r,new A.o(f,r,new A.bI(t,t,t,t),r,r,r,B.a6),r,38,r,r,r,r,r,38),B.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new C.dYP(s,v),r,r,r,r,r,r,!1,B.a3)
e=B.f8.j(0.2)
t=new A.ay(B.f8,1,B.r,-1)
B.d.v(g,A.a([B.bn,f,B.bn,A.aB(r,A.p(r,A.X(B.e9,B.f8,r,r,r,20),B.f,r,r,new A.o(e,r,new A.bI(t,t,t,t),r,r,r,B.a6),r,38,r,r,r,r,r,38),B.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new C.dYQ(s,v),r,r,r,r,r,r,!1,B.a3)],a1))}k.push(A.p(r,new A.cd(B.aM,B.e,B.i,B.m,r,B.p,r,0,g,r),B.f,r,r,new A.o(i,r,new A.bI(u,u,u,u),new A.bj(h,h,h,h),r,r,B.n),r,r,r,B.d2,B.bg,r,r,r))}if(s.a.e){j=m?new C.dYH(s):new C.dYI(a2)
i=A.n(18)
h=A.K(m?B.cI:B.aY,B.r,2)
g=m?B.cI.j(0.12):B.ds
f=m?"\uff0b Make your own game  ("+(2-n.length)+" left)":"Both games are made"
k.push(A.aB(r,A.p(r,A.au(A.d(f,r,r,r,r,r,r,A.l(r,r,m?B.cI:B.aB,r,r,r,r,r,r,r,r,15,r,r,B.u,r,r,!0,r,r,r,r,r,r,r,r),r,r,r),r,r,r),B.f,r,r,new A.o(g,r,h,i,r,r,B.n),r,r,r,r,B.Nm,r,r,r),B.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,j,r,r,r,r,r,r,!1,B.a3))}else if(i===0)k.push(D.fRP)
k.push(B.aA)
k.push(D.arf)
return new C.tr("Family Games \xb7 "+p.b,A.cn(k,r,D.bzQ,r,r,B.ah,!1),B.f0,r)}}
C.a_e.prototype={
a6(){return"_KPhase."+this.b}}
C.alc.prototype={
R(){return new C.ald(D.aYT)},
gd_(){return this.e}}
C.ald.prototype={
q(){var w=this.at
if(w!=null)w.a4(0)
w=this.ax
if(w!=null)w.a4(0)
this.a1()},
h6(d){var w,v=this
v.m(new C.bQK(v))
w=v.at
if(w!=null)w.a4(0)
v.at=A.dh(B.fA,new C.bQL(v))},
aOr(){var w=this,v=w.ax
if(v!=null)v.a4(0)
w.m(new C.bQA(w))
v=w.at
if(v!=null)v.a4(0)
w.at=A.dh(B.ft,new C.bQB(w))},
KJ(d){var w
if(this.d!==D.abt)return
w=this.at
if(w!=null)w.a4(0)
this.b4G(d)},
b4G(d){var w,v=this,u={},t=v.a.w[v.e]
u.a=0
if(d===t.c){w=++v.r
v.w=Math.max(v.w,w);++v.x
w=B.k.V(500+500*B.k.E(v.as/t.r,0,1))+100*Math.min(w-1,5)
u.a=w
v.f+=w}else v.r=0
v.m(new C.bQG(u,v,d))
u=v.ax
if(u!=null)u.a4(0)
v.ax=A.cG(B.rs,v.gkw(v))},
cHH(d){var w=this
if(w.d!==D.W3)return
if(w.e+1>=w.a.w.length)w.Yc()
else{w.m(new C.bQH(w))
w.aOr()}},
Yc(){var w=0,v=A.j(x.H),u=this,t,s,r,q,p
var $async$Yc=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=u.ax
if(p!=null)p.a4(0)
p=u.x
t=u.a.w.length
s=C.bFk(p,u.w,t)
u.m(new C.bQD(u,s))
w=2
return A.b(C.Bu(u.a.e,s),$async$Yc)
case 2:r=e
t=u.a
w=3
return A.b(C.Bv(t.e,t.f,t.r,u.f),$async$Yc)
case 3:q=e
if(u.c!=null)u.m(new C.bQE(u,r,q))
return A.h(null,v)}})
return A.i($async$Yc,v)},
cIt(){var w,v,u,t,s=this,r=s.a,q=new A.e4()
q.cY(r.w.length*31+B.a.gX(r.f))
w=s.a.w.length*900
v=A.a([new A.b7("You",s.f,!0)],x.bd)
r=A.C(s.a.x,x.N)
B.d.dZ(r,q)
for(r=A.d_(r,0,A.dA(4,"count",x.S),A.T(r).c),u=r.$ti,r=new A.bR(r,r.gL(0),u.k("bR<ak.E>")),u=u.k("ak.E");r.C();){t=r.d
if(t==null)t=u.a(t)
v.push(new A.b7(t,B.k.V(w*(0.35+q.af()*0.5)),!1))}B.d.aY(v,new C.bQI())
return v},
B(d){var w,v,u=this,t=null,s=u.a.c,r=u.d
A:{if(D.aYT===r){w=A.a([D.fNi,B.W,A.d(s,t,t,t,t,t,t,B.Kp,B.K,t,t)],x.p)
v=u.a.d
if(v.length!==0)w.push(A.d(v,t,t,t,t,t,t,D.fjj,t,t,t))
w.push(B.aA)
w.push(A.d(""+u.a.w.length+" questions. The faster you answer, the more points you win. Keep a streak for a bonus.",t,t,t,t,t,t,B.x4,B.K,t,t))
w.push(B.dT)
w.push(C.uk("Play",u.geX(u),B.cI,B.hk,D.fq))
w=A.au(new A.D(B.eu,A.x(w,B.m,t,B.e,B.O,0,B.p),t),t,t,t)
break A}if(D.aYU===r){w=A.au(A.d(""+u.z,t,t,t,t,t,t,D.frh,t,t,t),t,t,t)
break A}if(D.abt===r||D.W3===r){w=u.cor()
break A}if(D.aYV===r){w=u.c9F()
break A}w=t}return new C.tr(s,w,B.f0,t)},
cor(){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=k.d===D.W3,h=k.y,g=k.a.w,f=k.e,e=h===g[f].c
h=x.p
g=A.a([A.d(""+(f+1)+"/"+g.length,j,j,j,j,j,j,D.aTh,j,j,j),B.b1],h)
f=k.r
if(f>=2)g.push(A.d("\ud83d\udd25 "+f+" in a row",j,j,j,j,j,j,D.Kl,j,j,j))
g.push(B.as)
f=A.n(14)
g.push(A.p(j,A.d(""+k.f,j,j,j,j,j,j,B.iu,j,j,j),B.f,j,j,new A.o(B.bC,j,j,f,j,j,B.n),j,j,j,j,B.Gj,j,j,j))
g=A.B(g,B.m,j,B.e,B.i,0,j,j)
f=A.n(6)
w=i?0:B.k.E(k.as/k.a.w[k.e].r,0,1)
f=A.bx(f,A.kx(B.bC,j,k.as<5?B.f8:B.cI,9,j,w,j),B.ap)
w=A.n(22)
v=A.K(B.cI,B.r,3)
if(i){if(k.y<0)u="Time's up!"
else u=e?"Correct! +"+k.Q:"Not this time"
u=A.x(A.a([A.d(u,j,j,j,j,j,j,A.l(j,j,e?D.lw:G.n9,j,j,j,j,j,j,j,j,24,j,j,B.u,j,j,!0,j,j,j,j,j,j,j,j),j,j,j),B.P,A.d(k.a.w[k.e].d,j,j,j,j,j,j,D.fin,B.K,j,j)],h),B.m,j,B.e,B.O,0,B.p)}else u=A.d(k.a.w[k.e].a,j,j,j,j,j,j,D.ftp,B.K,j,j)
w=A.E(A.p(j,A.au(u,j,j,j),B.f,j,j,new A.o(D.q2,j,v,w,j,j,B.n),j,j,j,j,B.fk,j,j,1/0),3)
v=A.a([],h)
for(u=k.gkw(k),t=0;s=k.a.w[k.e],r=s.b,t<r.length;++t){q=i?u:new C.bQF(k,t)
p=i&&t!==s.c&&t!==k.y?0.3:1
o=B.o.F(t,4)
n=D.aBe[o]
m=new A.aQ(16,16)
l=new A.ay(i&&t===s.c?B.c:B.L,4,B.r,-1)
r=A.a([new A.y(D.aBv[o],j,D.fkj,j,j,j,j,j,j,j,j,j),B.as,new A.bz(1,B.ba,new A.y(r[t],j,D.fjg,j,j,j,j,B.a1,j,3,j,j),j)],h)
if(i&&t===k.a.w[k.e].c)r.push(P.apM)
if(i&&t===k.y&&t!==k.a.w[k.e].c)r.push(D.bTO)
v.push(A.aB(j,new A.Se(A.p(j,new A.cd(B.aM,B.e,B.i,B.m,j,B.p,j,0,r,j),B.f,j,j,new A.o(n,j,new A.bI(l,l,l,l),new A.bj(m,m,m,m),W.azG,j,B.n),j,j,j,j,B.fj,j,j,j),p,B.b7,B.a2,j,j),B.y,!1,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,q,j,j,j,j,j,j,!1,B.a3))}h=A.a([g,B.am,f,B.ae,w,B.ae,A.E(A.kP(1.45,v,2,10,10,j,B.dS,!1),4)],h)
if(i)h.push(D.emh)
return new A.D(B.a_l,A.x(h,B.m,j,B.e,B.i,0,B.p),j)},
c9F(){var w,v,u,t,s,r,q,p=this,o=null,n=p.cIt(),m=x.p,l=A.a([D.b9o,A.au(A.d(""+p.x+" of "+p.a.w.length+" right",o,o,o,o,o,o,B.pE,o,o,o),o,o,o),A.au(A.d(""+p.f+" points \xb7 best streak "+p.w,o,o,o,o,o,o,D.UQ,o,o,o),o,o,o),B.aQ],m)
for(w=0;w<n.length;++w){v=n[w].c?B.cI.j(0.25):B.ds
u=new A.aQ(14,14)
t=n[w]
s=t.c
r=new A.ay(s?B.cI:B.bC,1,B.r,-1)
q=w<3?D.dd4[w]:""+(w+1)
s=s?B.u:B.U
l.push(A.p(o,new A.cd(B.aM,B.e,B.i,B.m,o,B.p,o,0,A.a([new A.a5(34,o,new A.y(q,o,B.n0,o,o,o,o,o,o,o,o,o),o),new A.bz(1,B.ba,new A.y(t.a,o,new A.F(!0,B.c,o,o,o,o,16,s,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o),o,o,o,o,o,o,o,o,o),o),new A.y(""+t.b,o,B.iu,o,o,o,o,o,o,o,o,o)],m),o),B.f,o,o,new A.o(v,o,new A.bI(r,r,r,r),new A.bj(u,u,u,u),o,o,B.n),o,o,o,B.cu,B.eS,o,o,o))}l.push(B.W)
m=p.ay
v=p.ch
if(v===0)v=m
l.push(new C.I_(m,v,p.CW,o))
l.push(B.aQ)
l.push(A.au(C.uk("Back to the games",new C.bQC(p),B.cI,B.kL,D.fq),o,o,o))
return A.cn(l,o,B.fk,o,o,B.ah,!1)}}
C.Tb.prototype={
R(){return new C.al9(A.U(x.de,x.er))}}
C.al9.prototype={
gCJ(){var w,v=this,u=v.d
if(u===$){w=C.hex(v.a.c.ah())
v.d!==$&&A.bF()
v.d=w
u=w}return u},
gl3(d){var w,v,u=this,t=u.e
if(t===$){w=u.gCJ().b
v=$.ax()
u.e!==$&&A.bF()
t=u.e=new A.at(new A.ba(w,B.b3,B.aO),v)}return t},
cci(d){return this.f.c3(0,d,new C.bQa(d))},
Z(){this.a2()
var w=this.gCJ().c
if(w.length===0)w.push(C.h0G(null,0,20,""))},
q(){var w,v,u=this.gl3(0)
u.T$=$.ax()
u.P$=0
for(u=this.f,u=new A.dr(u,u.r,u.e);u.C();)for(w=J.aW(u.d);w.C();){v=w.gS(w)
v.T$=$.ax()
v.P$=0}this.a1()},
cHx(){if(this.gCJ().c.length>=12)return
this.m(new C.bQb(this))},
jA(d){var w,v,u=this,t=u.gCJ()
t.b=B.a.i(u.gl3(0).a.a)
w=t.gaoz(0)
if(t.b.length===0||w.length<2){u.c.K(x.q).f.U(D.fbn)
return}v=t.c
B.d.aa(v)
B.d.v(v,w)
v=u.c
v.toString
A.a4(v,!1).O(t)},
B(d){var w,v,u=this,t=null,s=new C.bQl(),r=x.p,q=A.a([A.bN(!1,D.fCC,t,t,!0,t,t,t,u.gbog(u),t,t)],r),p=A.a([D.fRq,B.ae,A.aM(t,B.Y,!1,t,!0,B.t,t,A.aN(),u.gl3(0),t,t,t,t,t,2,s.$1("Name of the game"),B.y,!0,t,!0,t,!1,t,B.aj,t,t,t,t,t,t,t,t,t,1,t,t,!1,"\u2022",t,t,t,t,t,!1,t,t,!1,t,!0,t,B.aa,t,t,t,t,t,t,t,t,t,t,t,B.fS,!0,B.a4,t,B.ao,t,t,t,t),B.aA],r)
for(w=0;v=u.gCJ().c.length,w<v;++w)B.d.v(p,A.a([new A.fe(new C.bQk(u,w,s),t)],r))
if(v<12)p.push(A.au(C.uk("\uff0b Add a question",u.gcHw(),B.aY,t,B.c),t,t,t))
return new C.tr("Make your game",A.cn(p,t,D.bzN,t,t,B.ah,!1),q,t)}}
C.aqd.prototype={
R(){return new C.aEl(A.a([],x._))},
bu(){return this.r.$0()},
q9(){return this.w.$0()},
ge1(){return this.c}}
C.aEl.prototype={
Z(){var w,v
this.a2()
this.w6()
w=this.a
v=w.c
if(v.length!==0)C.a7z(v,w.e,w.d.w)},
vX(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$vX=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=u.c
r.toString
t=u.a
s=t.d
w=2
return A.b(C.hbt(r,t.e,!1,s.w,new C.e_f(u),null,s),$async$vX)
case 2:w=3
return A.b(u.w6(),$async$vX)
case 3:return A.h(null,v)}})
return A.i($async$vX,v)},
a0d(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$a0d=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=u.c
r.toString
t=u.a
s=t.d
w=2
return A.b(C.hbt(r,t.e,!0,s.w,new C.e_e(u),null,s),$async$a0d)
case 2:w=3
return A.b(u.w6(),$async$a0d)
case 3:return A.h(null,v)}})
return A.i($async$a0d,v)},
w6(){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k
var $async$w6=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(C.B_(q.a.c),$async$w6)
case 7:p=e
if(q.c!=null)n=q.e||J.cL(p)
else n=!1
if(n)q.m(new C.e_h(q,p))
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
return A.b(C.GS(q.a.c).da(0,B.qb),$async$w6)
case 12:o=e
if(q.c==null){r=[1]
w=10
break}q.m(new C.e_i(q,o))
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
if(q.c!=null&&q.e)q.m(new C.e_j(q))
w=r.pop()
break
case 11:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$w6,v)},
OT(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$OT=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:o=t.c
if(o==null){w=1
break}s=x.q
o.K(s).f.U(D.faY)
w=3
return A.b(C.GS(t.a.c),$async$OT)
case 3:r=e
w=4
return A.b(C.fRu(t.a.c,r),$async$OT)
case 4:q=e
w=5
return A.b(C.GS(t.a.c),$async$OT)
case 5:p=e
if(t.c==null){w=1
break}t.m(new C.e_d(t,p))
o=t.c.K(s).f
s=A.d(q?"Family trees synced \u2014 "+J.ad(t.d)+" tree(s) on this phone and in the database.":"Could not sync to database. Run supabase/family_trees_table.sql in Supabase, then try again.",null,null,null,null,null,null,null,null,null,null)
o.U(A.b3(null,null,null,q?B.dE:B.cW,null,B.t,null,s,null,B.mH,null,null,null,null,null,null,null,null,null,null))
t.a.q9()
case 1:return A.h(u,v)}})
return A.i($async$OT,v)},
Ic(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$Ic=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:l=t.c
l.toString
w=3
return A.b(C.ik8(l),$async$Ic)
case 3:s=e
if(s==null||t.c==null){w=1
break}r=B.a.i(s.a)
if(r.length===0){w=1
break}q=C.hO6(t.a.e)
l=t.c
l.toString
p=t.a
o=p.d
w=4
return A.b(C.b0f(q,p.e,l,"Each family tree costs $"+B.k.ac(q,2)+" (one-time per tree).",t.a.f,"Create Family Tree",o),$async$Ic)
case 4:if(!e||t.c==null){w=1
break}l=B.o.u(1000*Date.now())
p=C.huW(r)
o=Date.now()
n=t.a.c
m=new C.kO(l,r.toUpperCase(),p,!0,B.Y,D.D3,new A.V(o,0,!1),0,n,D.ug,B.ca)
w=5
return A.b(C.a38(n,m),$async$Ic)
case 5:w=6
return A.b(t.w6(),$async$Ic)
case 6:t.a.bu()
t.a.q9()
if(t.c==null){w=1
break}t.EI(m)
case 1:return A.h(u,v)}})
return A.i($async$Ic,v)},
EI(d){return this.chb(d)},
chb(d){var w=0,v=A.j(x.H),u=this,t,s,r,q,p,o,n,m,l,k
var $async$EI=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:l=A
k=J
w=2
return A.b(C.B_(u.a.c),$async$EI)
case 2:n=l.pV(k.dI(f,new C.e_g(d)))
m=u.c
m.toString
t=u.a
s=t.c
r=t.d
q=t.e
p=t.f
t=t.r
w=3
return A.b(A.hH(m,new C.aq7(s,r,q,p,t,n==null?d:n,null),!1,"NgmyFamilyTreeDetailScreen",x.k),$async$EI)
case 3:o=f
w=o!=null?4:5
break
case 4:w=6
return A.b(C.a38(u.a.c,o),$async$EI)
case 6:case 5:w=7
return A.b(u.w6(),$async$EI)
case 7:u.a.q9()
return A.h(null,v)}})
return A.i($async$EI,v)},
B(d){var w,v,u,t,s,r=this,q=null,p=A.P(d).ax.a===B.J,o=new C.u7(p)
if(r.e)return A.au(A.mZ(q,p?B.bt:B.bm,q,q,q,q,q,q,q,q),q,q,q)
if(J.ct(r.d)){w=p?B.e3:B.c
v=A.n(15)
u=A.aH(!1,B.a2,!0,q,A.aO(!1,q,!0,A.p(q,D.bRu,B.f,q,q,new A.o(B.aW.j(0.12),q,A.K(B.aW,B.r,2),q,q,q,B.a6),q,52,q,q,q,q,q,52),B.cP,!0,q,q,q,q,q,q,q,q,q,q,q,r.gcgf(),q,q,q,q,q,q,q),B.f,B.L,0,q,q,q,q,q,B.ai)
t=A.d("No Family Trees Yet",q,q,q,q,q,q,A.l(q,q,p?B.aP:B.av,q,q,q,q,q,q,q,q,18,q,q,B.H,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
return new C.FU(A.p(q,A.x(A.a([u,B.aQ,t,B.P,A.d("Create a family tree with names, photos, notes, and generations.",q,q,q,q,q,q,A.l(q,q,p?B.bt:B.bm,q,q,q,q,q,q,q,q,14,q,q,q,q,1.4,!0,q,q,q,q,q,q,q,q),B.K,q,q),B.dT,A.bH(D.fUF,q,r.gaRC(),A.bo(B.bP,q,q,q,q,q,Ax.a_K,q,new A.b8(A.n(12),B.a0),q,q,q))],x.p),B.m,q,B.e,B.i,0,B.p),B.f,q,q,new A.o(w,q,q,v,q,q,B.n),q,q,q,q,D.bCv,q,q,1/0),15,B.af,1.05,D.abf,q)}w=J.ad(r.d)
v=x.p
w=A.a([A.d("Family Trees ("+w+")",q,q,q,q,q,q,A.l(q,q,p?B.aP:B.av,q,q,q,q,q,q,q,q,16,q,q,B.H,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),B.b1],v)
if(J.cL(r.d))w.push(A.aG(q,q,q,q,A.X(B.z7,B.aW,q,q,q,q),q,q,q,new C.e_l(r),q,q,q,q,"Sync family trees with database",q))
if(J.cL(r.d))w.push(A.aG(q,q,q,q,A.X(B.z2,B.aW,q,q,q,q),q,q,q,r.gagm(),q,q,q,q,"Transfer / backup file",q))
w.push(A.dl(E.aqG,D.fzY,r.gaRC(),A.bo(B.bP,q,q,q,q,q,q,q,q,q,q,q)))
p=A.B(w,B.m,q,B.e,B.i,0,q,q)
w=A.a([],v)
for(s=0;s<J.ad(r.d);++s){u=A.a([],v)
if(s>0)u.push(B.ae)
u.push(new C.FU(r.cDP(J.r(r.d,s),o),14,B.af,1,D.abf,q))
B.d.v(w,u)}return A.x(A.a([p,B.aA,A.x(w,B.m,q,B.e,B.i,0,B.p)],v),B.E,q,B.e,B.i,0,B.p)},
cDP(d,e){var w=null,v=e.a,u=v?B.e3:B.c,t=A.n(14),s=A.K((v?B.e8:B.bO).j(0.55),B.r,1),r=A.a([new A.ac(0,B.G,B.w.j(v?0.35:0.08),B.em,10)],x.V),q=A.n(14),p=A.p(w,D.bQy,B.f,w,w,new A.o(B.aW.j(0.15),w,w,A.n(12),w,w,B.n),w,48,w,w,w,w,w,48),o=A.d(d.b,w,w,w,w,w,w,A.l(w,w,v?B.aP:B.av,w,w,w,w,w,w,w,w,w,w,w,B.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),n=d.gapr(),m=d.d?"":" \xb7 Public",l=d.y===D.kK?" \xb7 View only":"",k=x.p
l=A.E(A.x(A.a([o,B.bF,A.d(""+n+" members \xb7 Code: "+d.c+m+l,w,w,w,w,w,w,A.l(w,w,v?B.bt:B.bm,w,w,w,w,w,w,w,w,12,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],k),B.E,w,B.e,B.i,0,B.p),1)
return A.p(w,A.aH(!1,B.a2,!0,w,A.aO(!1,q,!0,new A.D(B.bE,A.B(A.a([p,B.bc,l,A.X(B.Oa,v?B.bt:B.bm,w,w,w,w)],k),B.m,w,B.e,B.i,0,w,w),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.e_k(this,d),w,w,w,w,w,w,w),B.f,B.L,0,w,w,w,w,w,B.ai),B.f,w,w,new A.o(u,w,s,t,r,w,B.n),w,w,w,w,w,w,w,1/0)}}
C.aq7.prototype={
R(){return new C.aEi(A.a([],x._),A.aX(x.N),A.b8Z())},
bu(){return this.r.$0()},
ge1(){return this.c}}
C.aEi.prototype={
Z(){var w,v,u=this
u.a2()
u.d=u.a.w
u.ad6()
w=u.a
v=w.c
if(v.length!==0)C.a7z(v,w.e,w.d.w)},
q(){var w=this.w
w.T$=$.ax()
w.P$=0
this.a1()},
a3d(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a3d=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!t.a.d.w){t.y5("Only an admin can make a family tree public or private.")
w=1
break}s=t.d
s===$&&A.c()
r=!s.d
s=t.c
s.toString
w=3
return A.b(A.ck(null,null,!0,null,new C.dZG(r),s,null,!0,!0,x.y),$async$a3d)
case 3:if(e!==!0||t.c==null){w=1
break}t.JK()
t.m(new C.dZH(t,r))
w=4
return A.b(t.u5(),$async$a3d)
case 4:t.a.bu()
t.y5(r?"Family tree is now private.":"Family tree is now public for all users.")
case 1:return A.h(u,v)}})
return A.i($async$a3d,v)},
ctD(d,e,f){var w=this,v=w.y,u=w.d
u===$&&A.c()
u=u.a
if(v===u&&w.x)return
w.x=!0
w.y=u
$.aV.x1$.push(new C.dZB(w,f,d,e))},
aTS(d,e,f){var w,v,u=d.a,t=e.a,s=d.b,r=e.b,q=Math.min(1,Math.max(0.45,Math.min(u/t,s/r)))
t*=q
w=t<=u?(u-t)/2:u/2-f*q
u=r*q
v=u<=s?(s-u)/2:8
u=A.ds()
u.ee(w,v,0,1)
u.jX(q,q,1,1)
this.w.sp(0,u)},
bbe(d,e){var w,v,u,t,s=this.w,r=s.a,q=new A.eL(new Float64Array(16))
q.e6(r)
w=q.CO()
v=B.k.E(w*d,0.2,3)/w
r=e.a/2
u=e.b/2
t=A.ds()
t.ee(r,u,0,1)
t.jX(v,v,1,1)
t.ee(-r,-u,0,1)
t.iQ(0,q)
s.sp(0,t)},
ad6(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$ad6=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=A
r=J
w=2
return A.b(C.B_(u.a.c),$async$ad6)
case 2:t=s.pV(r.dI(e,new C.dZ2(u)))
if(t!=null&&u.c!=null)u.m(new C.dZ3(u,t))
return A.h(null,v)}})
return A.i($async$ad6,v)},
y5(d){var w=null,v=this.c
if(v==null)return
v.K(x.q).f.U(A.b3(w,w,w,w,w,B.t,w,A.d(d,w,w,w,w,w,w,w,w,w,w),w,B.Z,w,w,w,w,w,w,w,w,w,w))},
vX(){var w=0,v=A.j(x.H),u=this,t,s,r,q,p,o,n,m
var $async$vX=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:o=u.c
o.toString
t=u.a
s=t.d
t=t.e
r=s.w
q=u.d
q===$&&A.c()
w=2
return A.b(C.hbt(o,t,!1,r,new C.dZk(u),q.a,s),$async$vX)
case 2:n=A
m=J
w=3
return A.b(C.GS(u.a.c),$async$vX)
case 3:p=n.pV(m.dI(e,new C.dZl(u)))
if(p!=null&&u.c!=null)u.m(new C.dZm(u,p))
return A.h(null,v)}})
return A.i($async$vX,v)},
JK(){var w=this.e,v=this.d
v===$&&A.c()
w.push(v)
if(w.length>25)B.d.cz(w,0)},
u5(){var w=0,v=A.j(x.H),u=this,t,s
var $async$u5=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a.c
s=u.d
s===$&&A.c()
w=2
return A.b(C.a38(t,s),$async$u5)
case 2:return A.h(null,v)}})
return A.i($async$u5,v)},
a1J(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$a1J=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:q=t.d
q===$&&A.c()
if(!C.ul(q,t.a.c)){t.y5("View only \u2014 you cannot rename this shared tree.")
w=1
break}q=t.c
q.toString
w=3
return A.b(C.ili(q,"Save",t.d.b,"Family tree name","Edit family tree name"),$async$a1J)
case 3:s=e
if(s==null||t.c==null){w=1
break}r=B.a.i(s).toUpperCase()
if(r.length===0){w=1
break}t.JK()
t.m(new C.dZA(t,r))
w=4
return A.b(t.u5(),$async$a1J)
case 4:case 1:return A.h(u,v)}})
return A.i($async$a1J,v)},
b1m(){var w=this.c
w.toString
A.a4(w,!1).cc(A.eh(new C.dZh(this),!1,null,x.H))},
a0r(){return this.chd()},
chd(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$a0r=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:n={}
m=t.d
m===$&&A.c()
if(!C.ul(m,t.a.c)){t.y5("View only \u2014 display settings are locked.")
w=1
break}m=t.c
m.toString
m=A.P(m)
s=t.d
r=s.w
n.a=r
s=s.f
q=new A.Z(s,new C.dZx(),A.T(s).k("Z<1>")).gL(0)
s=A.eE([0,2,3,4,5,6,8,r],x.S)
p=A.C(s,s.$ti.k("cs.E"))
B.d.ff(p)
s=t.c
s.toString
w=3
return A.b(A.bV(B.L,null,new C.dZy(n,t,new C.u7(m.ax.a===B.J),p,q),s,!0,!0,!0,null,!1,!1,x.bn),$async$a0r)
case 3:o=e
if(o==null||t.c==null){w=1
break}w=o.b!==t.d.w?4:5
break
case 4:t.JK()
t.m(new C.dZz(t,o))
w=6
return A.b(t.u5(),$async$a0r)
case 6:case 5:if(o.a&&t.c!=null)t.b1m()
case 1:return A.h(u,v)}})
return A.i($async$a0r,v)},
Wj(d){return this.bBz(d)},
bBz(d){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Wj=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.d
r===$&&A.c()
if(!C.ul(r,t.a.c)){t.y5("View only \u2014 you cannot add members to this shared tree.")
w=1
break}r=t.c
r.toString
w=3
return A.b(A.ck(null,null,!0,null,new C.dYR(t,d),r,null,!0,!0,x.P),$async$Wj)
case 3:s=f
if(s==null){w=1
break}t.JK()
t.m(new C.dYS(t,s))
w=4
return A.b(t.u5(),$async$Wj)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Wj,v)},
a3z(d){return this.cFZ(d)},
cFZ(d){var w=0,v=A.j(x.H),u=this,t,s
var $async$a3z=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=u.c
s.toString
s=A.P(s)
t=u.c
t.toString
w=2
return A.b(A.ck(null,null,!0,null,new C.dZJ(u,d,new C.u7(s.ax.a===B.J)),t,null,!0,!0,x.H),$async$a3z)
case 2:return A.h(null,v)}})
return A.i($async$a3z,v)},
cdv(d){var w=this,v=w.d
v===$&&A.c()
if(C.ul(v,w.a.c))w.Oy(d)
else w.a3z(d)},
aiP(d,e){return this.cxA(d,e)},
cxA(d,e){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$aiP=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=t.c
r.toString
r=A.P(r)
s=t.c
if(s==null){w=1
break}w=3
return A.b(A.ck(null,null,!0,null,new C.dZD(new C.u7(r.ax.a===B.J),d,e),s,null,!0,!0,x.H),$async$aiP)
case 3:case 1:return A.h(u,v)}})
return A.i($async$aiP,v)},
Ih(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$Ih=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:o=t.d
o===$&&A.c()
w=o.y===D.kK?3:5
break
case 3:w=6
return A.b(C.fZW(t.a.c),$async$Ih)
case 6:s=e
o=t.a
r=C.hjk(o.e,o.c)
w=!s||!r?7:8
break
case 7:w=9
return A.b(t.aiP(!s,!r),$async$Ih)
case 9:w=1
break
case 8:w=4
break
case 5:if(!C.aQ1(o,t.a.c)){t.y5("Only the tree creator can delete this family tree.")
w=1
break}case 4:o=t.c
if(o==null){w=1
break}q=t.d
p=q.b
w=10
return A.b(A.li(o,"Cancel","Remove",q.y===D.kK?'This removes "'+p+"\" from this phone only. The creator's copy is not affected.":'Delete "'+p+'" permanently? This cannot be undone.',"Remove family tree?"),$async$Ih)
case 10:if(!e||t.c==null){w=1
break}w=11
return A.b(C.aPY(t.a.c,t.d.a),$async$Ih)
case 11:t.a.bu()
o=t.c
if(o==null){w=1
break}A.iY(o,null)
case 1:return A.h(u,v)}})
return A.i($async$Ih,v)},
aaC(d){return this.bMK(d)},
bMK(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$aaC=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:p={}
o=t.d
o===$&&A.c()
if(!C.ul(o,t.a.c)){w=1
break}s=t.d.f
r=d.e
p.a=r
if(r==null||!B.d.b3(s,new C.dYT(p))){o=A.T(s)
p.a=A.pV(new A.cQ(new A.Z(s,new C.dYU(d),o.k("Z<1>")),new C.dYV(),o.k("cQ<1,m>")))}q=p.a
if(q==null)q=d.d
t.JK()
t.m(new C.dYW(t,s,d,q))
w=3
return A.b(t.u5(),$async$aaC)
case 3:t.y5(d.b+" was removed. Tap Undo to bring them back.")
case 1:return A.h(u,v)}})
return A.i($async$aaC,v)},
Oy(d){return this.bOV(d)},
bOV(d){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Oy=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.d
r===$&&A.c()
w=!C.ul(r,t.a.c)?3:4
break
case 3:w=5
return A.b(t.a3z(d),$async$Oy)
case 5:w=1
break
case 4:r=t.c
r.toString
w=6
return A.b(A.ck(null,null,!0,null,new C.dZ_(t,d),r,null,!0,!0,x.P),$async$Oy)
case 6:s=f
if(s==null){w=1
break}t.JK()
t.m(new C.dZ0(t,s))
w=7
return A.b(t.u5(),$async$Oy)
case 7:case 1:return A.h(u,v)}})
return A.i($async$Oy,v)},
cEd(){var w=this,v=w.d
v===$&&A.c()
if(!C.ul(v,w.a.c))return
if(w.e.length===0)return
w.m(new C.dZI(w))
w.u5()},
Zd(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$Zd=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:n=t.d
n===$&&A.c()
if(!C.aQ1(n,t.a.c)){t.y5("Only the tree creator can invite collaborators.")
w=1
break}n=t.c
n.toString
n=A.P(n)
s=$.ax()
r=new A.at(B.at,s)
q=t.d.e
p=A.bq(new A.N(q,t.gcbY(),A.T(q).k("N<1,m>")).c_(0,new C.dZc()),!0,x.N)
q=t.c
q.toString
w=3
return A.b(A.ck(null,null,!0,null,new C.dZd(t,new C.u7(n.ax.a===B.J),p,r),q,null,!0,!0,x.y),$async$Zd)
case 3:o=e
r.T$=s
r.P$=0
if(o!==!0||t.c==null){w=1
break}t.JK()
t.m(new C.dZe(t,p))
w=4
return A.b(t.u5(),$async$Zd)
case 4:t.y5("Collaborators updated.")
case 1:return A.h(u,v)}})
return A.i($async$Zd,v)},
cbZ(d){return B.a.i(d.toLowerCase())},
cg_(){var w,v,u,t,s,r=this,q=r.c
q.toString
w=r.a.c
v=r.d
v===$&&A.c()
u=C.ul(v,w)
t=r.d
s=C.iao(t)
C.ikc(q,t.b,u,C.ian(r.d),s,v.a,w)},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=A.P(d).ax.a===B.J,m=new C.u7(n),l=p.d
l===$&&A.c()
l=l.f
w=new A.Z(l,new C.dZQ(),A.T(l).k("Z<1>")).gL(0)
l=n?B.c1:B.iy
v=A.X(B.a0W,n?B.bt:B.bm,o,o,o,18)
u=x.p
v=A.a([new A.D(B.BO,A.aO(!1,o,!0,new A.D(B.hv,A.B(A.a([v,B.bn,A.d("Back to Family Trees",o,o,o,o,o,o,A.l(o,o,n?B.bt:B.bm,o,o,o,o,o,o,o,o,o,o,o,B.a7,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],u),B.m,o,B.e,B.O,0,o,o),o),o,!0,o,o,o,o,o,o,o,o,o,o,o,new C.dZR(p,d),o,o,o,o,o,o,o),o),new A.D(B.ns,p.c_7(m),o)],u)
if(p.d.y===D.kK){t=B.rR.j(0.15)
s=A.n(12)
r=A.K(B.rR.j(0.45),B.r,1)
q=C.GQ(p.d,p.a.c)
v.push(new A.D(B.yo,A.p(o,A.B(A.a([D.bVV,B.as,A.E(A.d("View only \u2014 shared by "+q+". You can keep up to 2 shared trees. Tap a member to view details.",o,o,o,o,o,o,A.l(o,o,n?B.aP:B.av,o,o,o,o,o,o,o,o,12,o,o,B.a7,o,1.35,!0,o,o,o,o,o,o,o,o),o,o,o),1)],u),B.m,o,B.e,B.i,0,o,o),B.f,o,o,new A.o(t,o,r,s,o,o,B.n),o,o,o,o,B.iq,o,o,1/0),o))}u=A.a([A.d("Family Tree",o,o,o,o,o,o,A.l(o,o,n?B.aP:B.av,o,o,o,o,o,o,o,o,15,o,o,B.H,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),B.b1],u)
if(C.ul(p.d,p.a.c)&&p.e.length!==0)u.push(new C.G4("Undo",B.qx,p.gcEc(),m,o,o))
u.push(new C.G4("Family Book",D.bLh,p.gcfZ(),m,B.tJ,o))
u.push(new C.G4("Family games",B.ol,p.gcga(),m,B.aC,o))
if(C.ul(p.d,p.a.c))u.push(new C.G4("Display settings",B.Cz,p.gchc(),m,B.b0,o))
u.push(new C.G4("Sync",B.z2,p.gagm(),m,o,o))
t=p.d
if(t.y===D.kK||C.aQ1(t,p.a.c)){t=p.d.y===D.kK?"Remove shared tree":"Delete tree"
u.push(new C.G4(t,B.e9,p.gbMU(),m,B.f8,o))}if(C.ul(p.d,p.a.c))u.push(new C.G4("Add member",B.wq,new C.dZS(p),m,B.bP,o))
v.push(new A.D(A_.akw,A.B(u,B.m,o,B.e,B.i,0,o,o),o))
if(p.d.gapr()===0){u=A.au(A.d("Add your first member to build the tree.",o,o,o,o,o,o,A.l(o,o,n?B.bt:B.bm,o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),o,o,o)
n=u}else n=A.cu(new C.dZT(p,m))
v.push(A.E(n,1))
if(w>0){n=p.f
u=A.X(n?O.a1_:A7.Ob,o,o,o,o,o)
v.push(A.au(A.hs(u,A.d(n?"Hide hidden members":""+w+" hidden",o,o,o,o,o,o,o,o,o,o),new C.dZU(p),o),o,o,o))}return A.c5(o,l,A.bm(!0,A.x(v,B.E,o,B.e,B.i,0,B.p),!0,!1,B.af,!0,!0),o,!1,!1,o,o)},
c_7(d){var w,v,u,t,s,r,q,p,o,n=this,m=null
n.d===$&&A.c()
w=A.n(22)
v=A.a([new A.ac(0,B.G,B.fM.j(0.35),B.dq,18)],x.V)
u=A.n(22)
t=A.ap(-26,A.X(B.yX,B.c.j(0.08),m,m,m,130),m,m,m,-18,m,m)
s=A.aH(!1,B.a2,!0,m,A.aO(!1,m,!0,A.p(m,D.bZ2,B.f,m,m,new A.o(B.c.j(0.16),m,A.K(B.c.j(0.45),B.r,1.5),m,m,m,B.a6),m,46,m,m,m,m,m,46),B.cP,!0,m,m,m,m,m,m,m,m,m,m,m,n.gagm(),m,m,m,m,m,m,m),B.f,B.L,0,m,m,m,m,m,B.ai)
r=n.d
q=A.d(r.b,m,1,B.a1,m,m,m,D.flk,m,m,m)
r=r.gapr()
p=n.d.gapr()===1?"member":"members"
o=x.p
p=A.a([s,B.bc,A.E(A.x(A.a([q,B.bF,A.d(""+r+" "+p,m,m,m,m,m,m,A.l(m,m,B.c.j(0.8),m,m,m,m,m,m,m,m,12.5,m,m,B.a7,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)],o),B.E,m,B.e,B.i,0,B.p),1)],o)
if(C.ul(n.d,n.a.c))p.push(A.aG(m,m,m,m,D.bW7,m,m,m,n.gcqX(),m,m,m,m,"Rename",m))
s=A.B(p,B.m,m,B.e,B.i,0,m,m)
r=n.d.d
q=r?B.jB:B.mO
r=r?"Private":"Public"
r=A.E(n.avT(q,"Privacy",r,n.a.d.w?n.gcDb():m),1)
q=A.E(n.avT(B.z3,"Tree code",n.d.c,new C.dZ1(n)),1)
p=n.d.e.length
p=p===0?"Invite":""+p+" \xb7 Manage"
p=A.a([s,B.ae,A.B(A.a([r,B.ac,q,B.ac,A.E(n.avT(D.bMW,"Collaborators",p,n.gc3M()),1)],o),B.m,m,B.e,B.i,0,m,m)],o)
if(n.d.y===D.kK){s=B.c.j(0.15)
B.d.v(p,A.a([B.P,A.aH(!1,B.a2,!0,A.n(999),A.aO(!1,A.n(999),!0,new A.D(B.h5,A.B(A.a([A.X(B.ph,B.c,m,m,m,14),B.en,A.d("View only",m,m,m,m,m,m,B.aTn,m,m,m)],o),B.m,m,B.e,B.O,0,m,m),m),m,!0,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),B.f,s,0,m,m,m,m,m,B.ai)],o))}return A.p(m,A.bx(u,new A.an(B.a_,m,B.ab,B.t,A.a([t,new A.D(B.Gm,A.x(p,B.E,m,B.e,B.i,0,B.p),m)],o),m),B.ap),B.f,m,m,new A.o(m,m,m,w,v,D.c2l,B.n),m,m,m,m,m,m,m,1/0)},
avT(d,e,f,g){var w=null,v=B.c.j(0.14)
return A.aH(!1,B.a2,!0,A.n(14),A.aO(!1,A.n(14),!0,new A.D(I.alG,A.x(A.a([A.X(d,B.c,w,w,w,18),B.au,A.d(e,w,1,B.a1,w,w,w,A.l(w,w,B.c.j(0.75),w,w,w,w,w,w,w,w,10.5,w,w,B.U,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.vh,A.d(f,w,1,B.a1,w,w,w,Aq.Aj,w,w,w)],x.p),B.m,w,B.e,B.i,0,B.p),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,g,w,w,w,w,w,w,w),B.f,v,0,w,w,w,w,w,B.ai)}}
C.bfI.prototype={
B(d){var w,v,u,t=null,s=this.d,r=s.a
if(r.gan(r)&&s.c.length===0)return B.bJ
w=s.d
v=s.e
u=A.a([A.b4(t,t,t,new C.bfL(s,t),new A.av(w,v))],x.p)
r=r.gdV(r)
B.d.v(u,r.dF(r,new C.ddp(this),x.l))
r=s.c
B.d.v(u,new A.N(r,new C.ddq(this),A.T(r).k("N<1,v>")))
return new A.D(B.ud,new A.a5(w,v,new A.an(B.a_,t,B.ab,B.f,u,t),t),t)}}
C.Kp.prototype={}
C.G8.prototype={}
C.bfK.prototype={
gbjH(){var w,v=this,u=v.r
if(u!=null)return u+16
u=v.f
if(u==null)return v.d/2
w=v.a.h(0,u)
if(w==null)return v.d/2
return w.b.a+16}}
C.aJW.prototype={}
C.bfL.prototype={
bOy(d,e,f,g){var w,v,u,t,s,r,q=f.a<=g.a,p=q?f:g,o=q?g:f,n=p.a+28+3,m=o.a-28-3
if(m<=n+2)return
w=(p.b+o.b)/2
q=$.S()
v=A.I()
v.r=B.bD.j(0.75).gp(0)
v.c=2
v.d=B.bA
d.bo(new A.t(n,w),new A.t(m,w),v)
u=(n+m)/2
t=new A.aF(q.r,B.ag,null,null,A.a([],x.v))
q=w+5.5
t.D(new A.aY(u,q))
s=w-1.1
r=w-8.8
t.D(new A.l_(u-9.9,s,u-4.95,r,u,w-3.0250000000000004))
t.D(new A.l_(u+4.95,r,u+9.9,s,u,q))
t.D(new A.bs())
q=A.I()
q.r=B.c.gp(0)
d.ad(new A.t(u,w),9,q)
q=A.I()
q.r=B.bD.gp(0)
d.aH(t,q)},
bOw(d,e,f,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
if(a0.length===0)return
B.d.aY(a0,new C.ddK())
w=f.b
v=w+(B.d.gI(a0).b-w)/2
u=B.d.b3(a0,new C.ddL(f))
t=new A.N(a0,new C.ddM(f),A.T(a0).k("N<1,J>")).c_(0,new C.ddN()).cI(0,1/0,B.vF)
w=f.a
d.bo(f,new A.t(w,u?v:v-Math.min(10,t/2)),e)
for(s=a0.length,r=d.a,q=x.v,p=0;p<a0.length;a0.length===s||(0,A.L)(a0),++p){o=a0[p]
n=o.a
m=n-w
l=Math.abs(m)
if(l<0.5){k=e.G()
r.drawLine.apply(r,[n,v,n,o.b,k])
k.delete()
continue}j=J.mU(m)
i=Math.min(10,l/2)
l=$.S()
h=A.a([],q)
g=new A.aF(l.r,B.ag,null,null,h)
h.push(new A.aY(w,v-i))
l=j*i
h.push(new A.c4(w,v,w+l,v))
h.push(new A.aq(n-l,v))
h.push(new A.c4(n,v,n,v+i))
h.push(new A.aq(n,o.b))
k=e.G()
n=g.gbv().a.snapshot()
r.drawPath((g.e=new A.ce(n)).a,k)
k.delete()}},
a3(d,e){var w,v,u,t,s,r,q,p,o
$.S()
w=A.I()
w.r=B.bP.j(0.75).gp(0)
w.c=2.2
w.b=B.a9
w.d=B.bA
w.e=B.dQ
for(v=this.b.b,u=v.length,t=d.a,s=0;r=v.length,s<r;v.length===u||(0,A.L)(v),++s){q=v[s]
r=q.d
if(r!=null&&r.length!==0)this.bOw(d,w,q.a,r)
else{if(!q.c){r=q.b
r=!(0===r.a&&0===r.b)}else r=!1
if(r){r=q.a
p=q.b
o=w.G()
t.drawLine.apply(t,[r.a,r.b,p.a,p.b,o])
o.delete()}}}for(s=0;s<v.length;v.length===r||(0,A.L)(v),++s){q=v[s]
if(q.c)this.bOy(d,w,q.a,q.b)}},
av(d){return d.b!==this.b}}
C.bjy.prototype={
gc9H(){var w=this.c
if(B.a.i(w.y).length!==0)return B.aBL
switch(w.c.a){case 0:return D.cVQ
case 1:return D.d6R
case 2:return D.dox}},
gc9K(){var w=this.c,v=C.hue(w.w),u=C.hue(w.y)
w=v!=null
if(w&&u!=null)return v+" \u2013 "+u
if(w)return"b. "+v
if(u!=null)return"\u2020 "+u
return""},
B(d){var w,v,u,t=this,s=null,r=A.P(d).ax.a===B.J,q=t.gc9H(),p=t.c,o=N.bDU(p.f),n=t.gc9K(),m=x.V,l=A.a([new A.ac(0,B.G,B.d.gak(q).j(0.35),B.cH,10)],m),k=r?B.av:B.c,j=A.K(r?B.av:B.c,B.r,2)
if(o!=null)w=A.tv(B.A,s,B.ci,B.bW,!1,s,o,!1,s,s)
else{w=A.a([B.d.gI(q).j(0.18),B.d.gak(q).j(0.28)],x.O)
v=B.a.i(p.b)
v=v.length===0?"?":v[0].toUpperCase()
w=A.p(B.A,A.d(v,s,s,s,s,s,s,A.l(s,s,B.d.gak(q),s,s,s,s,s,s,s,s,20,s,s,B.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),B.f,s,s,new A.o(s,s,s,s,s,new A.a9(B.a5,B.a8,B.x,w,s,s),B.n),s,s,s,s,s,s,s,s)}v=x.p
l=A.a([A.p(s,A.p(s,A.hU(w,B.ap),B.f,s,s,new A.o(k,s,j,s,s,s,B.a6),s,s,s,s,s,s,s,s),B.f,s,s,new A.o(s,s,s,s,l,new A.a9(B.ay,B.aD,B.x,q,s,s),B.a6),s,56,s,s,B.GC,s,s,56)],v)
k=t.d
if(k>0){j=A.n(10)
w=A.K(r?B.av:B.c,B.r,1.5)
l.push(A.ap(s,A.p(s,A.d(""+k,s,s,s,s,s,s,D.fvO,s,s,s),B.f,s,s,new A.o(B.cf,s,w,j,s,s,B.n),s,s,s,s,D.bEs,s,s,s),s,s,s,-6,-4,s))}k=r?B.cr:B.c
j=A.n(8)
w=A.K(B.d.gI(q).j(0.35),B.r,1)
m=A.a([new A.ac(0,B.G,B.w.j(r?0.3:0.06),B.dC,6)],m)
p=B.a.i(p.b)
u=p.length
if(u<=24)u=9.5
else u=u<=32?8.2:7.2
p=A.a([A.d(p,s,4,s,s,s,s,A.l(s,s,r?B.c:B.cr,s,s,s,s,s,s,s,s,u,s,s,B.H,s,1.15,!0,s,s,s,s,s,s,s,s),B.K,s,s)],v)
if(n.length!==0)p.push(A.d(n,s,1,s,s,s,s,A.l(s,s,r?B.aR:B.bm,s,s,s,s,s,s,s,s,7.5,s,s,B.a7,s,1.1,!0,s,s,s,s,s,s,s,s),s,s,s))
return A.aB(s,new A.a5(84,112,A.x(A.a([new A.an(B.a_,s,B.ab,B.f,l,s),B.au,A.p(s,A.x(p,B.m,s,B.e,B.O,0,B.p),B.f,s,D.b3J,new A.o(k,s,w,j,m,s,B.n),s,s,s,s,D.bED,s,s,s)],v),B.m,s,B.e,B.i,0,B.p),s),B.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,t.e,s,s,s,s,s,s,!1,B.a3)}}
C.beN.prototype={
a3(d,e){var w,v,u,t,s,r,q
$.S()
w=A.I()
v=this.b
u=v?B.c:D.bgt
w.r=u.j(v?0.05:0.09).gp(0)
for(v=e.b,u=e.a,t=d.a,s=10;s<v;s+=20)for(r=10;r<u;r+=20){q=w.G()
t.drawCircle(r,s,1,q)
q.delete()}},
av(d){return d.b!==this.b}}
C.bxr.prototype={
B(d){var w=this,v=null,u=new C.fim(w),t=w.c,s=t?B.cr:B.c,r=A.n(12),q=u.$3(B.hQ,"Zoom in",w.d),p=A.p(v,v,B.f,t?B.bC:B.fg,v,v,v,1,v,v,v,v,v,22),o=u.$3(B.z_,"Zoom out",w.e)
return A.aH(!1,B.a2,!0,r,A.x(A.a([q,p,o,A.p(v,v,B.f,t?B.bC:B.fg,v,v,v,1,v,v,v,v,v,22),u.$3(B.aob,"Fit the whole tree",w.f)],x.p),B.m,v,B.e,B.O,0,B.p),B.f,s,4,v,B.dm,v,v,v,B.ai)}}
C.bmR.prototype={
B(d){var w=this,v=null,u=B.bP.j(0.15),t=A.K(B.bP,B.r,2),s=w.e,r=x.p
t=A.aB(v,A.p(v,A.x(A.a([A.X(s?O.a1_:A7.Ob,B.bP,v,v,v,22),A.d("+"+w.c,v,v,v,v,v,v,D.frX,v,v,v)],r),B.m,v,B.b9,B.i,0,B.p),B.f,v,v,new A.o(u,v,t,v,v,v,B.a6),v,56,v,v,v,v,v,56),B.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,w.f,v,v,v,v,v,v,!1,B.a3)
u=A.a([t,B.am,A.d(s?"SHOW LESS":"MORE KIDS",v,v,v,v,v,v,D.fpO,B.K,v,v)],r)
if(s){t=A.a([B.am],r)
s=w.d
B.d.v(t,new A.N(s,new C.eTl(w),A.T(s).k("N<1,v>")))
B.d.v(u,t)}return new A.a5(84,v,A.x(u,B.m,v,B.e,B.i,0,B.p),v)}}
C.a_r.prototype={
R(){return new C.aCM()},
bu(){return this.Q.$0()},
ge1(){return this.w}}
C.aCM.prototype={
Z(){var w,v,u,t,s,r=this,q=null
r.a2()
w=r.a
v=w.d
u=v==null
t=u?q:v.b
if(t==null)t=""
s=$.ax()
r.d!==$&&A.aP()
r.d=new A.at(new A.ba(t,B.b3,B.aO),s)
t=u?q:v.r
if(t==null)t=""
r.e!==$&&A.aP()
r.e=new A.at(new A.ba(t,B.b3,B.aO),s)
t=u?q:v.w
if(t==null)t=""
r.f!==$&&A.aP()
r.f=new A.at(new A.ba(t,B.b3,B.aO),s)
t=u?q:v.x
if(t==null)t=""
r.r!==$&&A.aP()
r.r=new A.at(new A.ba(t,B.b3,B.aO),s)
t=u?q:v.y
if(t==null)t=""
r.w!==$&&A.aP()
r.w=new A.at(new A.ba(t,B.b3,B.aO),s)
t=u?q:v.z
if(t==null)t=""
r.x!==$&&A.aP()
r.x=new A.at(new A.ba(t,B.b3,B.aO),s)
t=u?q:v.c
r.y=t==null?D.yC:t
t=u?q:v.d
r.z=t==null?w.f:t
r.Q=u?q:v.e
r.as=u?q:v.f
t=u?q:v.Q
if(t==null)w=C.ibX(w.r,w.f)
else w=t
r.at=w
w=u?q:v.at
r.ax=w==null?0:w
w=u?q:v.as
r.ay=w===!0},
q(){var w,v=this,u=v.d
u===$&&A.c()
w=u.T$=$.ax()
u.P$=0
u=v.e
u===$&&A.c()
u.T$=w
u.P$=0
u=v.f
u===$&&A.c()
u.T$=w
u.P$=0
u=v.r
u===$&&A.c()
u.T$=w
u.P$=0
u=v.w
u===$&&A.c()
u.T$=w
u.P$=0
u=v.x
u===$&&A.c()
u.T$=w
u.P$=0
v.a1()},
Q0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$Q0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.a
o=C.hjk(p.y,p.w)
w=3
return A.b(A.lu(t.a.w,B.J6),$async$Q0)
case 3:n=e
w=!o&&!n&&!t.a.x.w?4:5
break
case 4:p=t.c
p.toString
s=t.a
r=s.x
w=6
return A.b(C.b0f(0,s.y,p,"Subscribe to upload family photos (30 days).",s.z,"Family Tree Photos",r),$async$Q0)
case 6:if(!e||t.c==null){w=1
break}p=t.a
C.hO7(p.y,p.w)
t.a.bu()
case 5:w=7
return A.b(Aa.H1(78,800),$async$Q0)
case 7:q=e
if(q!=null&&t.c!=null)t.m(new C.dty(t,q))
case 1:return A.h(u,v)}})
return A.i($async$Q0,v)},
c9J(){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=l.d
k===$&&A.c()
w=B.a.i(k.a.a).toUpperCase()
if(w.length===0)return
k=l.c
k.toString
v=l.a.d
if(v==null)v=new C.hV(B.o.u(1000*Date.now()),w,D.yC,null,null,null,"","","","","",1,!1,0)
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
s=v.aER(p,l.at,o,n,u,l.ay,w,q,m,t,r,s,l.ax)
A.a4(k,!1).O(s)},
aad(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$aad=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a.d
r=s==null?null:B.a.i(s.b)
if(r==null)r=""
s=t.c
s.toString
w=3
return A.b(A.ck(null,null,!0,null,new C.dtx(r),s,null,!0,!0,x.y),$async$aad)
case 3:if(e!==!0||t.c==null){w=1
break}s=t.c
s.toString
A.a4(s,!1).O(null)
s=t.a.as
if(s!=null)s.$0()
case 1:return A.h(u,v)}})
return A.i($async$aad,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=A.P(d).ax.a===B.J,i=new C.u7(j),h=l.a.e,g=A.T(h).k("Z<1>"),f=A.C(new A.Z(h,new C.dtH(l),g),g.k("M.E"))
h=j?B.e3:B.c
g=A.n(22)
w=l.a.c
v=x.p
w=A.a([new A.D(D.bCS,A.d(w,k,k,k,k,k,k,A.l(k,k,j?B.aP:B.av,k,k,k,k,k,k,k,k,17,k,k,B.u,k,k,!0,k,0.3,k,k,k,k,k,k),B.K,k,k),k)],v)
u=l.a
if(u.as!=null&&u.d!=null)w.push(A.ap(k,A.he(A.aO(!1,k,!0,new A.D(B.m9,A.X(B.e9,B.p4,k,k,k,17),k),B.cP,!0,k,k,k,k,k,k,k,k,k,k,k,l.gbJw(),k,k,k,k,k,k,k),k,"Delete member",k,k),k,k,k,0,k,k))
u=j?B.jK:B.jb
t=N.bDU(l.as)
if(l.as==null)s=A.X(B.pa,j?B.bt:B.bm,k,k,k,40)
else s=k
s=A.au(A.aB(k,new A.an(B.a_,k,B.ab,B.t,A.a([A.ha(u,t,s,k,42),A.ap(0,A.ha(B.bP,k,D.bPC,k,14),k,k,k,0,k,k)],v),k),B.y,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,l.gc9G(),k,k,k,k,k,k,!1,B.a3),k,k,k)
t=l.d
t===$&&A.c()
t=C.aCO(t,"Full name",B.mL,1,1,i,B.mo)
u=l.y
u===$&&A.c()
u=A.x(A.a([t,B.W,new C.bjw(i,u,new C.dtI(l),k)],v),B.m,k,B.e,B.i,0,B.p)
t=A.d("1. Parent",k,k,k,k,k,k,A.l(k,k,j?B.bt:B.bm,k,k,k,k,k,k,k,k,11,k,k,B.H,k,k,!0,k,0.3,k,k,k,k,k,k),k,k,k)
r=l.z
q=x.ac
p=A.a([D.bwj],q)
o=l.a.e
B.d.v(p,new A.N(o,new C.dtJ(),A.T(o).k("N<1,ex<m?>>")))
o=x.bw
n=A.d("2. Spouse",k,k,k,k,k,k,A.l(k,k,j?B.bt:B.bm,k,k,k,k,k,k,k,k,11,k,k,B.H,k,k,!0,k,0.3,k,k,k,k,k,k),k,k,k)
m=l.Q
q=A.a([D.bwl],q)
B.d.v(q,new A.N(f,new C.dtL(),A.T(f).k("N<1,ex<m?>>")))
o=A.x(A.a([t,B.am,new C.adv(i,r,"Who is their parent?",p,new C.dtM(l),k,o),B.aA,n,B.am,new C.adv(i,m,"Who is their spouse / partner?",q,new C.dtN(l),k,o)],v),B.ak,k,B.e,B.i,0,B.p)
q=l.f
q===$&&A.c()
q=C.aCO(q,"Birth date",D.anb,1,1,i,k)
m=l.r
m===$&&A.c()
m=C.aCO(m,"Birth place",B.a1e,1,1,i,k)
n=l.w
n===$&&A.c()
n=C.aCO(n,"Date of death (if deceased)",D.apt,1,1,i,k)
p=l.x
p===$&&A.c()
p=C.aCO(p,"Occupation",B.a2l,1,1,i,k)
r=l.e
r===$&&A.c()
r=A.a([new A.an(B.A,k,B.ab,B.t,w,k),B.aA,s,B.bx,new C.adw(i,"Identity",u,k),B.ae,new C.adw(i,"Family links",o,k),B.ae,new C.adw(i,"Life details",A.x(A.a([q,B.W,m,B.W,n,B.W,p,B.W,C.aCO(r,"Notes",B.lb,5,3,i,k)],v),B.m,k,B.e,B.i,0,B.p),k),B.ae,new C.aCN(i,"Child order",l.chr(l.at),new C.dtO(l),new C.dtP(l),k)],v)
w=l.a
u=w.d
if(u!=null)w=C.h8M(w.r,u.a).length!==0
else w=!1
if(w){w=l.ax
u=w===0?"Uses tree default":"Show "+w+", rest in menu"
w=w>0?new C.dtQ(l):k
B.d.v(r,A.a([B.W,new C.aCN(i,"Visible in tree",u,w,new C.dtR(l),k)],v))}r.push(B.W)
w=j?B.jK:B.jb
u=A.n(14)
t=A.K(j?B.e8:B.bO,B.r,1)
s=A.d("Hidden member",k,k,k,k,k,k,A.l(k,k,j?B.aP:B.av,k,k,k,k,k,k,k,k,14,k,k,B.U,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)
r.push(A.p(k,A.iM(k,B.bP,k,B.af,k,new C.dtS(l),k,A.d("Hide from the tree canvas",k,k,k,k,k,k,A.l(k,k,j?B.bt:B.bm,k,k,k,k,k,k,k,k,11,k,k,k,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),k,s,l.ay),B.f,k,k,new A.o(w,k,t,u,k,k,B.n),k,k,k,k,O.aka,k,k,k))
r.push(B.bx)
w=j?B.aP:B.av
j=j?B.e8:B.bO
r.push(A.B(A.a([A.E(A.dT(B.nL,new C.dtK(d),A.di(k,k,k,k,k,k,k,k,k,w,k,k,B.cl,k,new A.b8(A.n(14),B.a0),new A.ay(j,1,B.r,-1),k,k,k,k)),1),B.bc,A.E(A.bH(D.f38,k,l.gc9I(),A.bo(B.aW,k,k,0,B.c,k,B.cl,k,new A.b8(A.n(14),B.a0),k,k,k)),2)],v),B.m,k,B.e,B.i,0,k,k))
r.push(B.au)
return A.ep(B.f0,k,B.af,h,new A.a5(420,k,A.cg(A.x(r,B.ak,k,B.e,B.O,0,B.p),B.t,k,B.y,k,k,k,k,B.ah),k),D.al_,k,B.akn,new A.b8(g,B.a0),k,k)},
chr(d){var w=B.o.F(d,100)
if(w>=11&&w<=13)return""+d+"th child"
w=""+d
switch(B.o.F(d,10)){case 1:return w+"st child"
case 2:return w+"nd child"
case 3:return w+"rd child"
default:return w+"th child"}}}
C.adw.prototype={
B(d){var w=null,v=this.c.a,u=A.d(this.d.toUpperCase(),w,w,w,w,w,w,A.l(w,w,v?B.bt:B.bm,w,w,w,w,w,w,w,w,10,w,w,B.H,w,w,!0,w,1.1,w,w,w,w,w,w),w,w,w),t=v?B.jK:B.jb,s=A.n(16)
return A.x(A.a([new A.D(D.alq,u,w),A.p(w,this.e,B.f,w,w,new A.o(t,w,A.K(v?B.e8:B.bO,B.r,1),s,w,w,B.n),w,w,w,w,B.bg,w,w,1/0)],x.p),B.E,w,B.e,B.i,0,B.p)}}
C.bjx.prototype={
B(d){var w,v=this,u=null,t=v.c.a,s=t?B.e3:B.c,r=A.n(12),q=A.K((t?B.e8:B.bO).j(0.85),B.r,1),p=v.r
if(p==null)p=B.ao
w=A.l(u,u,t?B.aP:B.av,u,u,u,u,u,u,u,u,14,u,u,B.a7,u,u,!0,u,u,u,u,u,u,u,u)
return A.p(u,A.aM(u,B.Y,!1,u,!0,B.t,u,A.aN(),v.d,u,u,u,u,u,2,A.bt(u,B.eF,u,B.w0,u,u,u,u,!0,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,A.l(u,u,t?B.bt:B.bm,u,u,u,u,u,u,u,u,u,u,u,B.cy,u,u,!0,u,u,u,u,u,u,u,u),v.e,u,u,u,u,u,u,u,u,u,!0,!0,!1,u,A.X(v.f,B.bP,u,u,u,20),u,u,u,u,u,u,u,u,u,u,u,u),B.y,!0,u,!0,u,!1,u,B.aj,u,u,u,u,u,u,u,u,u,v.x,v.w,u,!1,"\u2022",u,u,u,u,u,!1,u,u,!1,u,!0,u,B.aa,u,u,u,u,u,u,u,u,u,u,u,w,!0,B.a4,u,p,u,u,u,u),B.f,u,u,new A.o(s,u,q,r,u,u,B.n),u,u,u,u,u,u,u,u)}}
C.adv.prototype={
B(d){var w=this,v=null,u=w.c.a,t=u?B.e3:B.c,s=A.n(12),r=A.K((u?B.e8:B.bO).j(0.85),B.r,1),q=A.X(B.rB,u?B.bt:B.bm,v,v,v,v),p=A.l(v,v,u?B.aP:B.av,v,v,v,v,v,v,v,v,14,v,v,B.a7,v,v,!0,v,v,v,v,v,v,v,v),o=u?B.e3:B.c
return A.p(v,new A.DW(A.T2(v,o,A.d(w.f,v,v,v,v,v,v,A.l(v,v,u?B.bt:B.bm,v,v,v,v,v,v,v,v,v,v,v,B.cy,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),q,!1,!0,w.r,w.w,p,v,w.d,w.$ti.c),v),B.f,v,v,new A.o(t,v,r,s,v,v,B.n),v,v,v,v,B.kJ,v,v,v)}}
C.bjw.prototype={
B(d){var w=new C.dtT(this)
return A.B(A.a([w.$3(D.w9,"Male",B.OS),B.ac,w.$3(D.oe,"Female",B.OE),B.ac,w.$3(D.yC,"Other",B.nw)],x.p),B.m,null,B.e,B.i,0,null,null)}}
C.aCN.prototype={
B(d){var w=this,v=null,u=w.c,t=u.a,s=t?B.jK:B.jb,r=A.n(14),q=A.K(t?B.e8:B.bO,B.r,1),p=A.d(w.d,v,v,v,v,v,v,A.l(v,v,t?B.aP:B.av,v,v,v,v,v,v,v,v,13,v,v,B.H,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),o=x.p
return A.p(v,A.B(A.a([A.E(A.x(A.a([p,A.d(w.e,v,v,v,v,v,v,A.l(v,v,t?B.bt:B.bm,v,v,v,v,v,v,v,v,11,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],o),B.E,v,B.e,B.i,0,B.p),1),new C.aIY(u,B.z_,w.f,v),B.bn,new C.aIY(u,B.hQ,w.r,v)],o),B.m,v,B.e,B.i,0,v,v),B.f,v,v,new A.o(s,v,q,r,v,v,B.n),v,v,v,v,B.eB,v,v,v)}}
C.aIY.prototype={
B(d){var w,v,u,t,s=this,r=null,q=s.e,p=q!=null
if(p)w=B.bP.j(0.12)
else w=s.c.a?B.e3:B.c
v=A.n(10)
u=A.n(10)
if(p)t=B.bP
else t=(s.c.a?B.bt:B.bm).j(0.4)
return A.aH(!1,B.a2,!0,v,A.aO(!1,u,!0,new A.a5(36,36,A.X(s.d,t,r,r,r,20),r),r,!0,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,r),B.f,w,0,r,r,r,r,r,B.ai)}}
C.adx.prototype={
bSD(d){switch(d.a){case 0:return B.bP
case 1:return B.bD
case 2:return B.cY}},
bSE(d){switch(d.a){case 0:return"Male"
case 1:return"Female"
case 2:return"Not specified"}},
aYk(d){var w,v,u,t
if(d==null||d.length===0)return"\u2014"
for(w=this.d.f,v=w.length,u=0;u<v;++u){t=w[u]
if(t.a===d)return t.b}return"\u2014"},
Al(d,e,f){var w,v,u,t,s,r,q,p=null,o=B.a.i(e)
if(o.length===0)o="\u2014"
w=this.e.a
v=w?B.e3:B.c
u=A.n(12)
t=A.K((w?B.e8:B.bO).j(0.85),B.r,1)
s=x.p
r=A.a([],s)
B.d.v(r,A.a([A.X(f,B.bP,p,p,p,18),B.as],s))
q=A.d(d.toUpperCase(),p,p,p,p,p,p,A.l(p,p,w?B.bt:B.bm,p,p,p,p,p,p,p,p,9,p,p,B.H,p,p,!0,p,0.8,p,p,p,p,p,p),p,p,p)
r.push(A.E(A.x(A.a([q,B.au,A.d(o,p,p,p,p,p,p,A.l(p,p,w?B.aP:B.av,p,p,p,p,p,p,p,p,14,p,p,B.U,p,1.35,!0,p,p,p,p,p,p,p,p),p,p,p)],s),B.E,p,B.e,B.i,0,B.p),1))
return A.p(p,A.B(r,B.E,p,B.e,B.i,0,p,p),B.f,p,p,new A.o(v,p,t,u,p,p,B.n),p,p,p,B.cu,B.yk,p,p,1/0)},
aeN(d,e){var w=null,v=this.e.a,u=A.d(d.toUpperCase(),w,w,w,w,w,w,A.l(w,w,v?B.bt:B.bm,w,w,w,w,w,w,w,w,10,w,w,B.H,w,w,!0,w,1.1,w,w,w,w,w,w),w,w,w),t=v?B.jK:B.jb,s=A.n(16),r=A.K(v?B.e8:B.bO,B.r,1)
return A.x(A.a([new A.D(D.alq,u,w),A.p(w,A.x(e,B.m,w,B.e,B.i,0,B.p),B.f,w,w,new A.o(t,w,r,s,w,w,B.n),w,w,w,w,B.bT,w,w,1/0)],x.p),B.E,w,B.e,B.i,0,B.p)},
B(d){var w,v,u,t=this,s=null,r=t.d,q=t.c,p=C.hza(r,q),o=q.c,n=t.bSD(o),m=N.bDU(q.f),l=t.e.a,k=l?B.e3:B.c,j=A.n(22),i=q.b,h=A.d(i,s,s,s,s,s,s,A.l(s,s,l?B.aP:B.av,s,s,s,s,s,s,s,s,18,s,s,B.u,s,s,!0,s,s,s,s,s,s,s,s),B.K,s,s)
r=r.y===D.kK?"Shared family tree \xb7 view only":"Member profile"
r=A.d(r,s,s,s,s,s,s,A.l(s,s,l?B.bt:B.bm,s,s,s,s,s,s,s,s,12,s,s,B.a7,s,s,!0,s,s,s,s,s,s,s,s),B.K,s,s)
w=A.K(n,B.r,3)
v=A.a([new A.ac(0,B.G,n.j(0.25),B.I,12)],x.V)
u=n.j(0.12)
l=A.au(A.p(s,A.ha(u,m,m==null?A.X(B.pa,n,s,s,s,48):s,s,52),B.f,s,s,new A.o(s,s,w,s,v,s,B.a6),s,s,s,s,B.ev,s,s,s),s,s,s)
w=n.j(0.14)
v=A.n(20)
u=A.K(n.j(0.45),B.r,1)
v=A.au(A.p(s,A.d(t.bSE(o),s,s,s,s,s,s,A.l(s,s,n,s,s,s,s,s,s,s,s,12,s,s,B.H,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),B.f,s,s,new A.o(w,s,u,v,s,s,B.n),s,s,s,s,B.mI,s,s,s),s,s,s)
u=x.p
i=A.a([t.Al("Full name",i,B.mL)],u)
if(p>0)i.push(t.Al("Child order","#"+p,B.OK))
r=A.a([h,B.au,r,B.aQ,l,B.W,v,B.bx,t.aeN("Identity",i),B.ae,t.aeN("Life details",A.a([t.Al("Birth date",q.w,D.anb),t.Al("Birth place",q.x,B.a1e),t.Al("Date of death",q.y,D.apt),t.Al("Occupation",q.z,B.a2l)],u)),B.ae,t.aeN("Family links",A.a([t.Al("1. Parent",t.aYk(q.d),B.GQ),t.Al("2. Spouse",t.aYk(q.e),B.H6)],u))],u)
q=q.r
if(B.a.i(q).length!==0)B.d.v(r,A.a([B.ae,t.aeN("Notes",A.a([t.Al("Notes",q,B.lb)],u))],u))
r.push(B.bx)
r.push(A.bH(B.Ku,s,new C.du2(d),A.bo(B.aW,s,s,s,s,s,B.cl,s,new A.b8(A.n(14),B.a0),s,s,s)))
return A.eT(s,k,new A.cU(B.lX,A.cg(A.x(r,B.ak,s,B.e,B.O,0,B.p),B.t,s,B.y,s,B.w4,s,s,B.ah),s),s,s,s,B.Gp,B.d8,s,new A.b8(j,B.a0),s)}}
C.G4.prototype={
B(d){var w,v=this,u=null,t=v.r
if(t==null)t=v.f.a?B.bt:B.bm
w=t.j(v.f.a?0.14:0.08)
return new A.D(B.w7,A.he(A.aH(!1,B.a2,!0,A.n(8),A.aO(!1,A.n(8),!0,new A.a5(30,30,A.X(v.d,t,u,u,u,16),u),u,!0,u,u,u,u,u,u,u,u,u,u,u,v.e,u,u,u,u,u,u,u),B.f,w,0,u,u,u,u,u,B.ai),u,v.c,u,u),u)}}
C.aqa.prototype={
eZ(){var w,v,u=this,t=x.N,s=A.U(t,x.z)
s.n(0,"marker","ngmyFamilyTreeSync")
s.n(0,"version",1)
s.n(0,"code",u.a)
s.n(0,"ownerEmail",u.b)
s.n(0,"exportedAt",u.d.a8().ae())
w=u.c
v=A.T(w).k("N<1,a8<m,@>>")
w=A.C(new A.N(w,new C.cd7(),v),v.k("ak.E"))
s.n(0,"trees",w)
w=u.e
if(w.a!==0)s.n(0,"familyBooks",w.ji(w,new C.cd8(),t,x.fO))
return s}}
C.aqb.prototype={
R(){return new C.aEk(A.a([],x.bF))},
gd_(){return this.c}}
C.aEk.prototype={
Z(){this.a2()
this.JR()},
JR(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$JR=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.cdb(t.a.c),$async$JR)
case 3:r=e
w=4
return A.b(C.B_(t.a.c),$async$JR)
case 4:q=e
p=t.a
if(!p.r)s=p.e||J.rb(q,new C.e_2(t))
else s=!1
if(t.c==null){w=1
break}t.m(new C.e_3(t,r,s))
case 1:return A.h(u,v)}})
return A.i($async$JR,v)},
yD(d){var w=null,v=this.c
if(v==null)return
v.K(x.q).f.U(A.b3(w,w,w,w,w,B.t,w,A.d(d,w,w,w,w,w,w,w,w,w,w),w,B.Z,w,w,w,w,w,w,w,w,w,w))},
KB(d,e){return this.cGE(d,e)},
cGE(d,e){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this
var $async$KB=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(q.r){w=1
break}q.m(new C.e_7(q,e))
t=3
w=6
return A.b(d.$0(),$async$KB)
case 6:r.push(5)
w=4
break
case 3:r=[2]
case 4:t=2
if(q.c!=null){q.m(new C.e_8(q))
$.eX.mw()}w=r.pop()
break
case 5:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$KB,v)},
Y0(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Y0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=t.a
w=3
return A.b(A.pm(r,s.c,s.e),$async$Y0)
case 3:if(!e||t.c==null){w=1
break}w=4
return A.b(t.KB(new C.e__(t),"Preparing download\u2026"),$async$Y0)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Y0,v)},
Y4(d){return this.bQy(d)},
bQy(d){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Y4=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=t.a
w=3
return A.b(A.pm(r,s.c,s.e),$async$Y4)
case 3:if(!f||t.c==null){w=1
break}w=4
return A.b(t.KB(new C.e_0(t,d),"Preparing file\u2026"),$async$Y4)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Y4,v)},
agJ(){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m
var $async$agJ=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b($.xv.ca().Ms(B.RN,B.uh,!0),$async$agJ)
case 7:r=e
o=r
q=o==null?null:J.fs(o.a)
if(q==null){u=null
w=1
break}if(q.c!=null){o=q.c
o.toString
o=!B.aG.gan(o)}else o=!1
if(o){o=q.c
o.toString
o=A.jD(o,0,null)
u=o
w=1
break}t=2
w=6
break
case 4:t=3
m=s.pop()
p=A.ab(m)
$.am.$1("[family tree sync pick] file_picker: "+A.w(p))
w=6
break
case 3:w=2
break
case 6:u=A.H0()
w=1
break
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$agJ,v)},
YH(d){return this.c02(d)},
c02(d){var w=0,v=A.j(x.H),u=this
var $async$YH=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=2
return A.b(u.KB(new C.e_1(u,d),"Restoring family trees\u2026"),$async$YH)
case 2:return A.h(null,v)}})
return A.i($async$YH,v)},
YG(){var w=0,v=A.j(x.H),u,t=this,s
var $async$YG=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(t.agJ(),$async$YG)
case 3:s=e
if(s==null||B.a.i(s).length===0){w=1
break}w=4
return A.b(t.YH(s),$async$YG)
case 4:case 1:return A.h(u,v)}})
return A.i($async$YG,v)},
a2B(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a2B=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=t.a
w=3
return A.b(A.pm(r,s.c,s.e),$async$a2B)
case 3:if(!e||t.c==null){w=1
break}w=4
return A.b(t.KB(new C.e_6(t),"Creating QR code\u2026"),$async$a2B)
case 4:case 1:return A.h(u,v)}})
return A.i($async$a2B,v)},
a2c(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a2c=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!A.Dc()){t.yD("Use a phone camera to scan, or upload the backup file on desktop.")
w=1
break}s=t.c
s.toString
w=3
return A.b(A.a4(s,!1).cc(A.eh(new C.e_4(),!0,null,x.N)),$async$a2c)
case 3:r=e
w=r!=null&&B.a.i(r).length!==0?4:5
break
case 4:w=6
return A.b(t.YH(r),$async$a2c)
case 6:case 5:case 1:return A.h(u,v)}})
return A.i($async$a2c,v)},
B(d){var w,v,u,t,s,r,q=this,p=null,o=A.P(d).ax.a===B.J,n=o?B.Bd:B.iy,m=o?D.aiC:B.aP,l=o?B.aJ:B.bO,k=o?B.aP:B.av,j=new C.ddO(n,m,l,k,o?B.bM:B.bm)
l=A.aG(p,p,p,p,A.X(B.eJ,k,p,p,p,20),p,p,p,new C.e_a(d),p,p,p,p,p,p)
w=q.a.r?"Restore family tree":"Family tree sync"
w=A.eJ(p,p,p,!0,!0,n,p,1,!0,p,0,!1,p,!1,p,p,l,p,!0,0,p,p,p,p,A.d(w,p,p,p,p,p,p,A.l(p,p,k,p,p,p,p,p,p,p,p,17,p,p,B.u,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p,1,p,!0)
l=q.a
v=l.r
l=l.e
u=x.p
t=A.a([],u)
if(q.e){s=q.a.e?"Scannable backup":"2 scans max"
B.d.v(t,A.a([A.E(C.ddm(!0,B.jD,B.aK,B.aK,q.r?p:q.gcxo(),j,s,"Show restore QR"),1),B.as],u))}s=q.e
r=q.r?p:q.gcty()
t.push(A.E(C.ddm(!s,B.jg,B.b6,B.br,r,j,"From another phone","Scan QR to restore"),1))
t=A.B(t,B.m,p,B.e,B.i,0,p,p)
r=A.a([],u)
if(q.e)B.d.v(r,A.a([A.E(C.ddm(!1,B.hR,B.aW,B.bP,q.r?p:q.gbQr(),j,"Photos & books included","Download all trees"),1),B.as],u))
s=q.a.r?"Restore shared file":"From saved file"
r.push(A.E(C.ddm(!1,R.z4,B.aE,B.aT,q.r?p:q.gc0_(),j,s,"Upload backup file"),1))
l=A.a([new C.bfJ(v,l,p),B.kU,new C.acN(j,"QR restore",p),B.W,t,B.d4,new C.acN(j,"Backup files",p),B.W,A.B(r,B.m,p,B.e,B.i,0,p,p)],u)
if(q.e&&J.ad(q.d)>1&&q.a.f==null){v=A.a([B.kU,new C.acN(j,"One tree",p),B.W],u)
B.d.v(v,J.b6(q.d,new C.e_b(q,j),x.l))
B.d.v(l,v)}l=A.a([A.cn(l,p,B.a_H,p,p,B.ah,!1)],u)
if(q.r){v=A.n(18)
t=A.K(B.aW.j(0.35),B.r,1)
s=A.a([new A.ac(0,B.G,B.w.j(o?0.3:0.1),B.dq,20)],x.V)
r=q.f
if(r==null)r="Working\u2026"
l.push(A.ap(24,A.bm(!0,A.p(p,A.B(A.a([O.aRP,B.bc,A.E(A.d(r,p,p,p,p,p,p,A.l(p,p,k,p,p,p,p,p,p,p,p,13,p,p,B.U,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),1)],u),B.m,p,B.e,B.i,0,p,p),B.f,p,p,new A.o(m,p,t,v,s,p,B.n),p,p,p,p,B.BU,p,p,p),!0,!1,B.af,!0,!1),p,p,20,20,p,p))}return A.c5(w,n,new A.an(B.a_,p,B.ab,B.t,l,p),p,!1,!1,p,p)}}
C.ddO.prototype={}
C.bfJ.prototype={
B(d){var w,v,u,t,s,r,q,p=null
if(this.d)w="Upload a file or scan a QR from someone who shared their tree. View only until you create your own tree."
else w=this.e?"Photos and family books stay on this device. Admin skips cloud codes.":"Full trees stay local. QR works 2 times \u2014 names & dates sync to cloud only."
v=A.n(24)
u=A.a([new A.ac(0,B.G,B.aW.j(0.32),B.kq,28)],x.V)
t=A.ap(p,A.X(B.uC,B.c.j(0.07),p,p,p,110),p,p,p,-20,-10,p)
s=B.c.j(0.16)
r=A.n(18)
q=x.p
return A.p(p,new A.an(B.a_,p,B.ab,B.t,A.a([t,new A.D(B.aa,A.B(A.a([A.p(p,D.bYz,B.f,p,p,new A.o(s,p,A.K(B.c.j(0.35),B.r,1.5),r,p,p,B.n),p,56,p,p,p,p,p,56),B.oG,A.E(A.x(A.a([D.fAY,B.P,A.d(w,p,p,p,p,p,p,A.l(p,p,B.c.j(0.9),p,p,p,p,p,p,p,p,13,p,p,p,p,1.45,!0,p,p,p,p,p,p,p,p),p,p,p)],q),B.E,p,B.e,B.i,0,B.p),1)],q),B.E,p,B.e,B.i,0,p,p),p)],q),p),B.f,p,p,new A.o(p,p,p,v,u,D.c5A,B.n),p,p,p,p,p,p,p,p)}}
C.acN.prototype={
B(d){var w=null
return A.B(A.a([A.p(w,w,B.f,w,w,new A.o(B.aW,w,w,A.n(2),w,w,B.n),w,14,w,w,w,w,w,3),B.ac,A.d(this.d.toUpperCase(),w,w,w,w,w,w,A.l(w,w,this.c.e,w,w,w,w,w,w,w,w,11,w,w,B.H,w,w,!0,w,0.9,w,w,w,w,w,w),w,w,w)],x.p),B.m,w,B.e,B.i,0,w,w)}}
C.bfH.prototype={
B(d){var w,v,u,t,s,r=this,q=null,p=r.x,o=A.n(18),n=A.n(18),m=r.c,l=r.y,k=l?B.aK.j(0.4):m.c
k=A.K(k,B.r,l?1.5:1)
l=l?A.a([new A.ac(0,B.G,B.aK.j(0.1),B.cH,12)],x.V):q
w=p==null?0.45:1
v=r.w.j(0.14)
u=A.n(12)
t=r.r
s=A.K(t.j(0.35),B.r,1)
return A.aH(!1,B.a2,!0,q,A.aO(!1,o,!0,A.eK(A.db(new A.D(E.a_j,A.x(A.a([A.p(q,A.X(r.d,t,q,q,q,22),B.f,q,q,new A.o(v,q,s,u,q,q,B.n),q,q,q,q,B.ry,q,q,q),B.ae,A.d(r.e,q,q,q,q,q,q,A.l(q,q,m.d,q,q,q,q,q,q,q,q,13,q,q,B.u,q,1.2,!0,q,q,q,q,q,q,q,q),q,q,q),B.bF,A.d(r.f,q,q,q,q,q,q,A.l(q,q,m.e,q,q,q,q,q,q,q,q,11,q,q,B.cy,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],x.p),B.E,q,B.e,B.i,0,B.p),q),w),q,new A.o(m.b,q,k,n,l,q,B.n),q,q,q),q,!0,q,q,q,q,q,q,q,q,q,q,q,p,q,q,q,q,q,q,q),B.f,B.L,0,q,q,q,q,q,B.ai)}}
C.bfM.prototype={
B(d){var w=this,v=null,u=A.n(18),t=A.n(18),s=w.c,r=A.K(s.c,B.r,1),q=B.aW.j(0.14),p=A.n(12),o=s.e,n=x.p
return A.aH(!1,B.a2,!0,v,A.aO(!1,u,!0,A.eK(new A.D(B.eS,A.B(A.a([A.p(v,D.bXO,B.f,v,v,new A.o(q,v,A.K(B.aW.j(0.35),B.r,1),p,v,v,B.n),v,v,v,v,B.ry,v,v,v),B.bc,A.E(A.x(A.a([A.d(w.d,v,v,v,v,v,v,A.l(v,v,s.d,v,v,v,v,v,v,v,v,v,v,v,B.H,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.d(""+w.e+" members",v,v,v,v,v,v,A.l(v,v,o,v,v,v,v,v,v,v,v,11,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],n),B.E,v,B.e,B.i,0,B.p),1),A.X(B.hR,o,v,v,v,20)],n),B.m,v,B.e,B.i,0,v,v),v),v,new A.o(s.b,v,r,t,v,v,B.n),v,v,v),v,!0,v,v,v,v,v,v,v,v,v,v,v,w.f,v,v,v,v,v,v,v),B.f,B.L,0,v,v,v,v,v,B.ai)}}
C.a_M.prototype={
R(){return new C.aEj()},
gd_(){return this.c}}
C.aEj.prototype={
Z(){this.a2()
this.a9L()},
a9L(){var w=0,v=A.j(x.H),u=this,t
var $async$a9L=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(A.b2U(u.a.c,B.DG),$async$a9L)
case 2:t=e
if(u.c!=null)u.m(new C.dZV(u,t))
return A.h(null,v)}})
return A.i($async$a9L,v)},
ai6(){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j
var $async$ai6=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(q.d){w=1
break}q.m(new C.dZW(q))
t=4
p=A.hl0(q.a.d,B.DG)
if(p==null){n=A.be("Could not read this QR code.")
throw A.W(n)}n=q.a
m=n.c
l=n.d
w=7
return A.b(A.asu(n.e,m,l,B.DG,p,n.f),$async$ai6)
case 7:if(q.c==null){r=[1]
w=5
break}q.m(new C.dZX(q))
q.c.K(x.q).f.U(D.fca)
r.push(6)
w=5
break
case 4:t=3
j=s.pop()
o=A.ab(j)
n=q.c
if(n==null){r=[1]
w=5
break}n.K(x.q).f.U(A.b3(null,null,null,null,null,B.t,null,A.d(B.a.ek(J.k(o),"StateError: ",""),null,null,null,null,null,null,null,null,null,null),null,B.Z,null,null,null,null,null,null,null,null,null,null))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.m(new C.dZY(q))
w=r.pop()
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$ai6,v)},
B(d){var w,v,u,t,s,r=this,q=null,p=A.P(d).ax.a===B.J,o=p?B.jt:B.q3,n=p?B.ix:B.c,m=r.a.f,l=m>=999?"Unlimited (admin)":""+m+" scans left"
m=A.eJ(q,q,q,!0,!0,o,q,1,!0,q,0,!1,q,!1,q,q,q,q,!0,q,q,q,q,q,D.fRk,q,q,q,1,q,!0)
w=A.n(24)
v=A.K(B.aW.j(0.35),B.r,1)
u=A.q2(q,q,!1,r.a.d,q,!0,!0,q,!1,B.c)
t=A.d(l,q,q,q,q,q,q,A.l(q,q,B.aW,q,q,q,q,q,q,q,q,q,q,q,B.H,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
s=x.p
w=A.E(A.p(q,A.x(A.a([B.P,u,B.bx,t,B.P,A.d("Scan on another phone to restore photos, family book, and all tree details. Works only 2 times total.",q,q,q,q,q,q,A.l(q,q,p?B.aR:B.al,q,q,q,q,q,q,q,q,13,q,q,q,q,1.4,!0,q,q,q,q,q,q,q,q),B.K,q,q)],s),B.m,q,B.b9,B.i,0,B.p),B.f,q,q,new A.o(n,q,v,w,q,q,B.n),q,q,q,q,B.aa,q,q,1/0),1)
v=r.a.e
v=A.d("Code: "+v,q,q,q,q,q,q,A.l(q,q,p?B.ad:B.bs,q,q,q,q,q,q,q,q,q,q,q,B.U,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
u=r.d
t=u||r.e===!0?q:r.gctf()
if(u)u=B.JY
else u=A.X(r.e===!0?B.hx:B.ana,q,q,q,q,q)
w=A.a([w,B.ae,v,B.ae,new A.a5(1/0,q,A.ew(u,A.d(r.e===!0?"Saved in QR Generator":"Save to QR Generator",q,q,q,q,q,q,B.ce,q,q,q),t,A.di(q,q,q,q,q,q,q,q,q,B.aW,q,B.h0,q,q,q,new A.ay(B.aW.j(0.55),1,B.r,-1),q,q,q,q)),q)],s)
if(r.e===!0)w.push(new A.D(B.i4,A.d("Labeled \u201cNGMY Family Tree\u201d in Hub \u2192 QR Code Generator \u2192 Saved. Delete it there to save a new one.",q,q,q,q,q,q,A.l(q,q,p?B.aB:B.al,q,q,q,q,q,q,q,q,11,q,q,q,q,1.35,!0,q,q,q,q,q,q,q,q),B.K,q,q),q))
w.push(B.W)
w.push(new A.a5(1/0,q,A.bH(B.Aq,q,new C.dZZ(d),A.bo(B.aW,q,q,q,q,B.h0,q,q,q,q,q,q)),q))
return A.c5(m,o,new A.D(B.aa,A.x(w,B.m,q,B.e,B.i,0,B.p),q),q,!1,!1,q,q)}}
C.a_N.prototype={
R(){return new C.bl0(A.zz(B.y9,B.nR,B.uK))}}
C.bl0.prototype={
q(){this.d.q()
this.a1()},
B(d){var w=null
return A.c5(A.eJ(w,w,w,!0,!0,B.w,w,1,!0,w,w,!1,w,!1,w,w,w,w,!0,w,w,w,w,w,D.fJ9,w,w,w,1,w,!0),B.w,A.zy(this.d,B.bW,new C.e_c(this,d)),w,!1,!1,w,w)}}
C.aZM.prototype={
B(d){var w=null
return A.d(this.c,w,w,w,w,w,w,A.l(w,w,w,w,w,w,w,w,"Noto Color Emoji",B.Rg,w,this.d,w,w,w,w,1,!0,w,w,w,w,w,w,w,w),w,w,w)}}
C.lP.prototype={}
C.a6E.prototype={
R(){return new C.bkH(null,null)}}
C.bkH.prototype={
Z(){var w=this,v=null
w.a2()
w.d=A.bn(v,B.rs,v,1,v,w)
w.e=A.bn(v,B.qa,v,1,v,w)
w.a.toString
w.d.cM(0)
w.e.cM(0)},
bz(d){var w,v,u=this
u.bH(d)
u.a.toString
w=u.d
w===$&&A.c()
v=w.r
if(!(v!=null&&v.a!=null))w.cM(0)
w=u.e
w===$&&A.c()
v=w.r
if(!(v!=null&&v.a!=null))w.cM(0)},
q(){var w=this.d
w===$&&A.c()
w.q()
w=this.e
w===$&&A.c()
w.q()
this.bwW()},
B(d){var w,v,u=this,t=B.d.dM(D.a5e,new C.dLD(u),new C.dLE())
u.a.toString
w=u.d
w===$&&A.c()
v=u.e
v===$&&A.c()
return A.czV(A.cb(new A.h8(A.a([w,v],x.dS)),new C.dLF(u,t),null),!0)}}
C.bkG.prototype={
a3(d,e){var w,v,u,t,s,r,q,p=this
switch(p.b){case"construction":p.b1N(d,e)
break
case"house":p.m9(d,e,D.dbP)
w=p.c
v=0.5+0.5*Math.sin(w*3.141592653589793*2)
u=e.gdC()
$.S()
t=A.I()
t.r=B.c.j(0.18+v*0.12).gp(0)
d.ad(new A.t(e.a*0.5,e.b*0.38),u*(0.22+v*0.06),t)
p.me(d,e,B.c.j(0.4),-w*3.141592653589793*2,20)
p.B3(d,e,12)
p.yf(d,e,B.l3,5,14)
break
case"grocery":p.cia(d,e)
break
case"calculator":p.chS(d,e)
break
case"lumber":p.cii(d,e)
break
case"kitchen":p.cid(d,e)
break
case"landscape":p.m9(d,e,D.dcp)
s=new A.aF($.S().r,B.ag,null,null,A.a([],x.v))
w=e.b
u=w*0.72
s.D(new A.aY(0,u))
t=e.a
r=p.c*3.141592653589793*2
s.D(new A.c4(t*0.25,w*(0.62+Math.sin(r)*0.04),t*0.5,u))
s.D(new A.c4(t*0.75,w*(0.82+Math.cos(r)*0.04),t,w*0.68))
s.D(new A.aq(t,w))
s.D(new A.aq(0,w))
s.D(new A.bs())
w=A.I()
w.r=B.ei.j(0.85).gp(0)
d.aH(s,w)
p.B3(d,e,8)
p.yf(d,e,B.io,4,18)
break
case"plumbing":p.cir(d,e)
break
case"electrical":p.m9(d,e,D.dnM)
w=p.c
q=(Math.sin(w*3.141592653589793*4)+1)/2
$.S()
u=A.I()
u.r=B.c.j(q*0.12).gp(0)
d.aP(new A.a3(0,0,0+e.a,0+e.b),u)
p.me(d,e,B.c.j(0.5+q*0.3),-w*3.141592653589793*3,10)
p.me(d,e,B.m1.j(0.35+q*0.2),p.d*3.141592653589793*4,18)
p.B3(d,e,10)
break
case"store":p.ciB(d,e)
break
case"paint_remodel":p.cim(d,e)
break
case"roofing":p.cit(d,e)
break
case"warehouse":p.ciI(d,e)
break
case"vehicles":p.ciG(d,e)
break
case"farm":p.ci4(d,e)
break
case"restaurant":p.cis(d,e)
break
case"tools":p.ciE(d,e)
break
case"wallet":p.ciH(d,e)
break
case"concrete":p.chY(d,e)
break
case"blueprint":p.chQ(d,e)
break
default:p.b1N(d,e)}},
m9(d,e,f){var w,v=new A.a3(0,0,0+e.a,0+e.b)
$.S()
w=A.I()
w.sam(new A.a9(B.ay,B.aD,B.x,f,null,null).aA(0,v))
d.aP(v,w)},
me(d,e,f,g,h){var w,v,u,t,s,r,q=new A.t(e.a/2,e.b/2),p=e.gdC()/2-h
$.S()
w=A.I()
w.b=B.a9
w.c=2.4
w.r=f.gp(0)
for(v=d.a,u=0;u<24;++u){t=u/24*3.141592653589793*2+g
s=A.bY(q,p)
r=w.G()
v.drawArc.apply(v,[A.bG(s),t*57.29577951308232,(t+0.1439896632895322-t)*57.29577951308232,!1,r])
r.delete()}},
yf(d,e,f,g,h){var w,v,u,t,s,r,q,p,o=e.a/2,n=e.b/2,m=e.gdC()/2-h
for(w=this.c*3.141592653589793*2,v=d.a,u=0;u<g;++u){t=w+u/g*3.141592653589793*2
s=Math.cos(t)
r=Math.sin(t)
$.S()
q=new A.ao(B.Q,B.M,B.S,B.T,B.R)
q.r=f.j(0.55+0.35*Math.sin(t*2)).gp(0)
p=q.G()
v.drawCircle(o+s*m,n+r*m,3.5,p)
p.delete()}},
B3(d,e,f){var w,v,u,t,s,r,q,p,o,n
for(w=this.c*3.141592653589793*2,v=e.a,u=e.b,t=d.a,s=0;s<f;++s){r=(Math.sin(w+s*0.8)+1)/2
q=B.k.F(s*0.17,0.9)
p=B.k.F(s*0.23,0.85)
$.S()
o=new A.ao(B.Q,B.M,B.S,B.T,B.R)
o.r=B.c.j(0.2+r*0.6).gp(0)
n=o.G()
t.drawCircle(v*(q+0.05),u*(p+0.08),1.5+r*2.5,n)
n.delete()}},
b1N(d,e){var w,v=this
v.m9(d,e,D.dm7)
w=v.c
v.me(d,e,B.c.j(0.55),w*3.141592653589793*2,12)
v.me(d,e,B.bL.j(0.45),-w*3.141592653589793*1.4,22)
v.bOs(d,e,B.i_,w)
v.yf(d,e,B.c.j(0.7),6,8)},
bOs(d,e,f,g){var w,v,u,t,s,r,q,p
$.S()
w=A.I()
w.r=f.j(0.35).gp(0)
for(v=e.b,u=g*3.141592653589793*2,t=16+(e.a-32),s=d.a,r=0;r<3;++r){q=v*(0.25+r*0.22)+Math.sin(u+r)*4
p=w.G()
s.drawRect(A.bG(new A.a3(16,q,t,q+3)),p)
p.delete()}},
cia(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this
j.m9(d,e,D.crc)
for(w=j.c*3.141592653589793*2,v=e.a,u=e.b,t=d.a,s=0;s<6;++s){r=w+s*1.1
q=B.o.F(s,3)
p=Math.sin(r)
o=B.o.ao(s,3)
n=Math.cos(r*0.8)
m=B.o.F(s,2)
$.S()
l=new A.ao(B.Q,B.M,B.S,B.T,B.R)
l.r=D.da1[B.o.F(s,4)].j(0.85).gp(0)
k=l.G()
t.drawCircle(v*(0.15+q*0.28)+p*8,u*(0.18+o*0.55)+n*10,7+m*2,k)
k.delete()}j.me(d,e,B.c.j(0.35),w,16)
j.yf(d,e,B.io,5,12)},
chS(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null
h.m9(d,e,D.crk)
w=h.c*3.141592653589793
v=w*2
u=0.5+0.5*Math.sin(v)
t=e.a
s=e.b
r=e.gdC()
$.S()
q=A.I()
q.r=B.c.j(0.1+u*0.12).gp(0)
d.ad(new A.t(t/2,s/2),r*(0.18+u*0.08),q)
p=A.fx(g,g,g,g,g,B.a4,B.bY,g,B.dA,B.bV)
for(o=0;o<6;++o){n=v+o*0.9
r=D.de8[o]
q=B.c.j(0.35+0.25*Math.sin(n))
m=B.o.F(o,2)
p.saX(0,new A.eu(r,g,g,B.cO,g,g,g,g,g,g,new A.F(!0,q,g,g,g,g,14+m*4,B.H,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g)))
p.ej()
p.a3(d,new A.t(t*(0.08+B.o.F(o,3)*0.3)+Math.sin(n)*6,s*(0.12+B.o.ao(o,3)*0.62)+Math.cos(n)*5))}for(v=h.d,r=v*3.141592653589793,q=r*2,o=0;o<6;++o){n=q+o*0.85
m=D.crm[o]
l=B.kA.j(0.28+0.3*Math.sin(n))
k=B.o.F(o,2)
p.saX(0,new A.eu(m,g,g,B.cO,g,g,g,g,g,g,new A.F(!0,l,g,g,g,g,12+k*3,B.H,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g)))
p.ej()
p.a3(d,new A.t(t*(0.55+B.o.F(o,3)*0.12)+Math.cos(n)*7,s*(0.08+B.o.ao(o,3)*0.38)+Math.sin(n)*6))}h.me(d,e,B.c.j(0.35),w*1.5,14)
h.me(d,e,B.eG.j(0.55),-v*3.141592653589793*2,8)
h.me(d,e,B.xU.j(0.4),r*2.8,22)
h.yf(d,e,B.pT,8,10)
h.B3(d,e,14)
for(w=v*0.35,t-=12,v=d.a,o=0;o<4;++o){j=s*B.k.F(w+o*0.22,0.9)
$.S()
r=new A.ao(B.Q,B.M,B.S,B.T,B.R)
r.r=B.c.j(0.08+0.06*Math.sin(q+o)).gp(0)
r.c=1.2
i=r.G()
v.drawLine.apply(v,[12,j,t,j,i])
i.delete()}},
cii(d,e){var w,v,u,t,s,r,q,p,o,n,m=this
m.m9(d,e,W.ayZ)
for(w=m.c*3.141592653589793*2,v=e.b*0.14,u=20+(e.a-40),t=d.a,s=0;s<5;++s){r=Math.sin(w+s*0.7)
q=v+s*v
p=A.br(new A.a3(20,q,u,q+10),B.hE)
$.S()
o=new A.ao(B.Q,B.M,B.S,B.T,B.R)
o.r=A.ar(B.fU,B.oX,(r+1)/2).gp(0)
n=o.G()
t.drawRRect(A.e5(p),n)
n.delete()}m.me(d,e,B.fU.j(0.35),w,15)
m.B3(d,e,8)},
cid(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this
j.m9(d,e,D.daw)
for(w=j.c,v=w*3.141592653589793*2,u=e.a,t=e.b,s=d.a,r=0;r<8;++r){q=v+r*0.75
p=(Math.sin(q)+1)/2
o=B.k.F(r*0.11,0.85)
n=Math.sin(q*1.3)
m=B.k.F(r*0.13,0.7)
$.S()
l=new A.ao(B.Q,B.M,B.S,B.T,B.R)
l.r=B.c.j(0.25+p*0.55).gp(0)
k=l.G()
s.drawCircle(u*(0.1+o)+n*12,t*(0.15+m),2+p*3,k)
k.delete()}j.me(d,e,B.bL.j(0.4),-w*3.141592653589793*2.2,11)
j.yf(d,e,B.pQ,4,14)},
cir(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=this
l.m9(d,e,D.cZO)
for(w=e.a,v=Math.abs(w),u=e.b,t=Math.abs(u),s=l.c*0.08,w/=2,u*=0.55,r=d.a,q=0;q<3;++q){p=Math.min(v,t)
o=B.k.F(s,0.12)
$.S()
n=new A.ao(B.Q,B.M,B.S,B.T,B.R)
n.b=B.a9
n.c=2
n.r=B.c.j(0.45-q*0.12).gp(0)
m=n.G()
r.drawCircle(w,u,p*(0.12+q*0.14+o),m)
m.delete()}l.yf(d,e,B.p2,6,12)
l.me(d,e,B.c.j(0.3),-l.d*3.141592653589793*2,18)},
ciB(d,e){var w,v,u,t,s,r,q,p,o,n=this
n.m9(d,e,D.cEY)
for(w=n.c*3.141592653589793*2,v=e.a-28,u=v/4-4,t=d.a,s=0;s<4;++s){r=Math.sin(w+s*1.5)
q=14+s*v/4
q=A.br(new A.a3(q,14,q+u,22),B.id)
$.S()
p=new A.ao(B.Q,B.M,B.S,B.T,B.R)
p.r=A.ar(B.fb,B.bL,(r+1)/2).gp(0)
o=p.G()
t.drawRRect(A.e5(q),o)
o.delete()}n.me(d,e,B.c.j(0.3),w,16)
n.B3(d,e,8)
n.yf(d,e,B.vL,5,13)},
cim(d,e){var w,v,u,t,s,r,q,p,o
this.m9(d,e,D.d55)
for(w=this.c,v=e.a,u=e.b,t=d.a,s=0;s<4;++s){r=B.k.F(w+s*0.2,1)
q=v*(0.18+s*0.18)
p=u*(0.15+r*0.55)
p=A.br(new A.a3(q,p,q+8,p+(18+r*22)),B.hF)
$.S()
q=new A.ao(B.Q,B.M,B.S,B.T,B.R)
q.r=[B.ik,B.dt,B.bL,B.es][s].j(0.85).gp(0)
o=q.G()
t.drawRRect(A.e5(p),o)
o.delete()}this.me(d,e,B.c.j(0.45),w*3.141592653589793*2.5,13)},
cit(d,e){var w,v,u,t,s,r,q,p,o
this.m9(d,e,D.d2s)
for(w=e.b,v=this.c*0.35,u=e.a,t=d.a,s=0;s<8;++s){r=w*(0.12+B.k.F(v+s*0.12,0.75))
q=B.o.F(s,4)*0.22
$.S()
p=new A.ao(B.Q,B.M,B.S,B.T,B.R)
p.r=B.c.j(0.25).gp(0)
p.c=1.5
o=p.G()
t.drawLine.apply(t,[u*(0.1+q),r,u*(0.18+q),r+10,o])
o.delete()}this.yf(d,e,B.cq,7,11)},
ciI(d,e){var w,v,u,t,s,r,q,p,o,n
this.m9(d,e,D.cHH)
for(w=this.c,v=w*3.141592653589793*2,u=e.b*0.55,t=e.a-44,s=d.a,r=0;r<4;++r){q=v+r
p=22+r*16
o=u-r*14+Math.sin(q)*4
o=A.br(new A.a3(p,o,p+(t-r*8),o+16),B.hE)
$.S()
p=new A.ao(B.Q,B.M,B.S,B.T,B.R)
p.r=A.ar(B.cq,B.aP,(Math.sin(q)+1)/2).gp(0)
n=p.G()
s.drawRRect(A.e5(o),n)
n.delete()}this.me(d,e,B.c.j(0.35),-w*3.141592653589793*1.8,15)},
ciG(d,e){var w,v,u,t,s,r,q,p,o
this.m9(d,e,D.drU)
for(w=e.a,v=this.c*0.45,u=e.b,t=d.a,s=0;s<5;++s){r=w*(B.k.F(v+s*0.18,1.1)-0.05)
q=u*(0.62+B.o.F(s,2)*0.08)
q=A.br(new A.a3(r,q,r+28,q+8),B.hE)
$.S()
p=new A.ao(B.Q,B.M,B.S,B.T,B.R)
p.r=B.c.j(0.35+s*0.08).gp(0)
o=p.G()
t.drawRRect(A.e5(q),o)
o.delete()}this.B3(d,e,6)},
ci4(d,e){var w,v,u,t,s,r,q,p,o,n
this.m9(d,e,D.d94)
w=this.c*3.141592653589793*2
v=Math.sin(w)
u=e.a
t=e.b
$.S()
s=A.I()
s.r=B.m1.j(0.75).gp(0)
d.ad(new A.t(u*0.82,t*0.18),14+(0.5+0.5*v)*4,s)
for(v=t*0.72,t*=0.52,s=d.a,r=0;r<6;++r){q=Math.sin(w+r)
p=u*(0.12+r*0.14)
o=new A.ao(B.Q,B.M,B.S,B.T,B.R)
o.r=B.he.j(0.85).gp(0)
o.c=3
n=o.G()
s.drawLine.apply(s,[p,v,p+q*6,t,n])
n.delete()}this.me(d,e,B.m1.j(0.35),w,14)},
cis(d,e){var w,v,u,t,s,r,q,p,o=this
o.m9(d,e,D.dbE)
for(w=o.c*3.141592653589793*2,v=e.a,u=e.b*0.42,t=d.a,s=0;s<4;++s){r=A.bK(new A.t(v*(0.28+s*0.16),u+Math.sin(w+s*0.9)*8),18,10)
$.S()
q=new A.ao(B.Q,B.M,B.S,B.T,B.R)
q.r=B.c.j(0.22).gp(0)
p=q.G()
t.drawOval(A.bG(r),p)
p.delete()}o.yf(d,e,B.pQ,5,16)
o.B3(d,e,7)},
ciE(d,e){var w,v,u,t,s,r,q,p,o,n,m=this
m.m9(d,e,D.dpi)
w=m.c
v=w*3.141592653589793
m.me(d,e,B.oX.j(0.55),v*3,10)
m.me(d,e,B.c.j(0.25),-w*3.141592653589793*2,24)
for(w=v*2,v=e.a/2,u=e.b/2,t=d.a,s=0;s<3;++s){r=w+s*2.1
q=Math.cos(r)
p=Math.sin(r)
$.S()
o=new A.ao(B.Q,B.M,B.S,B.T,B.R)
o.r=B.oX.j(0.8).gp(0)
n=o.G()
t.drawCircle(v+q*34,u+p*22,4,n)
n.delete()}},
ciH(d,e){var w,v,u,t,s,r,q,p,o,n,m=this
m.m9(d,e,D.dsA)
for(w=m.c*3.141592653589793,v=w*2,u=e.a,t=e.b,s=d.a,r=0;r<5;++r){q=(Math.sin(v+r*1.2)+1)/2
p=u*(0.2+r*0.03)
o=t*(0.28+q*0.08)
o=A.br(new A.a3(p,o,p+36,o+22),B.id)
$.S()
p=new A.ao(B.Q,B.M,B.S,B.T,B.R)
p.r=A.ar(B.io,B.m1,q).gp(0)
n=p.G()
s.drawRRect(A.e5(o),n)
n.delete()}m.B3(d,e,9)
m.me(d,e,B.c.j(0.4),w*2.2,12)},
chY(d,e){var w,v,u,t,s,r,q,p,o,n
this.m9(d,e,D.dh0)
w=this.c*3.141592653589793*2
v=e.a/2
u=e.b*0.55
t=A.bY(new A.t(v,u),34)
$.S()
s=A.I()
s.b=B.a9
s.c=5
s.r=B.c.j(0.45).gp(0)
d.e3(t,w,3.7699111843077517,!1,s)
for(t=d.a,r=0;r<6;++r){q=w+r*1.05
s=Math.cos(q)
p=Math.sin(q)
o=new A.ao(B.Q,B.M,B.S,B.T,B.R)
o.r=B.bO.j(0.85).gp(0)
n=o.G()
t.drawCircle(v+s*34,u+p*34,3,n)
n.delete()}},
chQ(d,e){var w,v,u,t,s,r,q,p
this.m9(d,e,D.dcK)
$.S()
w=A.I()
w.r=B.c.j(0.12).gp(0)
w.c=1
for(v=e.a,u=e.b,t=d.a,s=0;s<v;s+=18){r=w.G()
t.drawLine.apply(t,[s,0,s,u,r])
r.delete()}for(q=0;q<u;q+=18){r=w.G()
t.drawLine.apply(t,[0,q,v,q,r])
r.delete()}t=this.c
p=u*B.k.F(t*0.85,1)
$.S()
u=A.I()
u.r=B.dt.j(0.45).gp(0)
d.aP(new A.a3(0,p,0+v,p+6),u)
this.me(d,e,B.l3.j(0.45),-t*3.141592653589793*2,11)},
av(d){return d.c!==this.c||d.d!==this.d||d.b!==this.b}}
C.atd.prototype={
a_P(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a_P=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.aQV(),$async$a_P)
case 3:r=e
if(r==null){w=1
break}s=t.c
w=s!=null&&s!==r?4:5
break
case 4:w=6
return A.b(C.a8R(s),$async$a_P)
case 6:case 5:t.d.$1(r)
case 1:return A.h(u,v)}})
return A.i($async$a_P,v)},
agK(d){return this.ckZ(d)},
ckZ(d){var w=0,v=A.j(x.H),u=this,t
var $async$agK=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=2
return A.b(C.ikm(d),$async$agK)
case 2:t=f
if(t!=null)u.d.$1(t)
return A.h(null,v)}})
return A.i($async$agK,v)},
B(d){var w,v,u,t=null,s=A.P(d),r=this.c,q=r!=null&&B.a.i(r).length!==0
r=q?r:"ngmy:thumb:construction"
s=s.ax.a===B.J?B.jK:B.jb
w=x.p
v=A.a([C.aRj(!0,B.r3,1/0,B.qn,t,r,1/0)],w)
if(!q){u=A.a([B.L,B.w.j(0.35)],x.O)
v.push(A.c3(new A.bM(B.b_,t,t,new A.D(B.vX,A.d("Pick a theme or your own photo",t,t,t,t,t,t,A.l(t,t,B.c.j(0.92),t,t,t,t,t,t,t,t,11,t,t,B.U,t,t,!0,t,t,t,t,t,B.azW,t,t),t,t,t),t),t),new A.o(t,t,t,t,t,new A.a9(B.b_,B.b5,B.x,u,t,t),B.n),B.bh))}v.push(A.ap(8,A.B(A.a([A.E(A.dl(D.bRn,D.fxc,new C.clG(this,d),A.bo(B.aW,t,t,t,B.c,t,B.jQ,t,t,t,t,B.cc)),1),B.ac,A.E(A.ew(D.bZP,D.fMi,this.gcbW(),A.di(t,t,B.w.j(0.35),t,t,t,t,t,t,B.c,t,t,B.jQ,t,t,D.b2g,t,t,t,B.cc)),1)],w),B.m,t,B.e,B.i,0,t,t),t,t,8,8,t,t))
return new A.fH(1.7777777777777777,A.aH(!1,B.a2,!0,B.r3,new A.an(B.a_,t,B.b2,B.t,v,t),B.ap,s,0,t,t,t,t,t,B.ai),t)}}
C.aMn.prototype={
aU(){this.b1()
this.b0()
this.dH()},
q(){var w=this,v=w.b7$
if(v!=null)v.a5(0,w.gdD())
w.b7$=null
w.a1()}}
C.aUj.prototype={}
C.aUi.prototype={}
C.aSh.prototype={}
C.Zp.prototype={
R(){return new C.azw()}}
C.azw.prototype={
Z(){var w,v,u=this
u.a2()
u.a.toString
w=new A.ba("",B.b3,B.aO)
v=$.ax()
u.d!==$&&A.aP()
u.d=new A.at(w,v)},
q(){var w=this.d
w===$&&A.c()
w.T$=$.ax()
w.P$=0
this.a1()},
Kr(){var w,v,u=this,t=u.d
t===$&&A.c()
w=B.a.i(t.a.a)
if(w.length===0){u.c.K(x.q).f.U(D.fcF)
return}t=u.c
t.toString
v=u.e
A.a4(t,!1).O(new C.aUj(w,v))},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=A.P(d).ax.a===B.J,l=m?B.e3:B.c,k=A.n(20),j=A.p(n,D.bZu,B.f,n,n,new A.o(B.aW.j(0.15),n,n,A.n(12),n,n,B.n),n,44,n,n,n,n,n,44),i=A.d("Create Project",n,n,n,n,n,n,A.l(n,n,m?B.aP:B.av,n,n,n,n,n,n,n,n,18,n,n,B.u,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),h=x.p
i=A.E(A.x(A.a([i,B.bF,A.d("Add a thumbnail and budget items after creating.",n,n,n,n,n,n,A.l(n,n,m?B.bt:B.bm,n,n,n,n,n,n,n,n,12,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],h),B.E,n,B.e,B.i,0,B.p),1)
j=A.B(A.a([j,B.bc,i,A.aG(n,n,n,n,A.X(B.cz,m?B.bt:B.bm,n,n,n,n),n,n,n,new C.d53(d),n,n,n,n,n,n)],h),B.m,n,B.e,B.i,0,n,n)
i=A.d("Project thumbnail (16:9)",n,n,n,n,n,n,A.l(n,n,m?B.bt:B.bm,n,n,n,n,n,n,n,n,12,n,n,B.U,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
w=A.d("Full animated preview \u2014 use Themes or Your photos below",n,n,n,n,n,n,A.l(n,n,m?B.bt:B.bm,n,n,n,n,n,n,n,n,11,n,n,B.cy,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
v=C.hlg(new C.d54(o),o.e)
u=o.d
u===$&&A.c()
t=A.l(n,n,m?B.aP:B.av,n,n,n,n,n,n,n,n,n,n,n,B.a7,n,n,!0,n,n,n,n,n,n,n,n)
s=m?B.jK:B.jb
r=A.n(12)
q=A.n(12)
p=m?B.e8:B.bO
t=A.aM(n,B.Y,!0,n,!0,B.t,n,A.aN(),u,n,n,n,n,n,2,A.bt(n,new A.b5(4,r,B.dk),n,n,n,n,n,n,!0,new A.b5(4,q,new A.ay(p,1,B.r,-1)),n,n,n,n,n,s,!0,n,n,n,n,n,n,n,n,n,n,n,n,n,n,"Kitchen remodel, Wedding, etc.",n,n,n,n,n,n,n,n,"Project name",!0,!0,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n),B.y,!0,n,!0,n,!1,n,B.aj,n,n,n,n,n,n,n,n,n,1,n,n,!1,"\u2022",n,n,n,new C.d55(o),n,!1,n,n,!1,n,!0,n,B.aa,n,n,n,n,n,n,n,n,n,n,n,t,!0,B.a4,n,A0.K4,n,n,n,n)
u=m?B.aP:B.av
m=m?B.e8:B.bO
return A.eT(n,l,new A.cU(B.lX,A.cg(A.x(A.a([j,B.aQ,i,B.au,w,B.P,v,B.aQ,t,B.bx,A.B(A.a([A.E(A.dT(B.di,new C.d56(d),A.di(n,n,n,n,n,n,n,n,n,u,n,n,B.cl,n,new A.b8(A.n(12),B.a0),new A.ay(m,1,B.r,-1),n,n,n,n)),1),B.as,A.E(A.bH(D.fMx,n,o.ga2X(),A.bo(B.aW,n,n,n,B.c,n,B.cl,n,new A.b8(A.n(12),B.a0),n,n,n)),1)],h),B.m,n,B.e,B.i,0,n,n)],h),B.E,n,B.e,B.O,0,B.p),B.t,n,B.y,n,B.BV,n,n,B.ah),n),n,n,n,A6.BW,B.d8,n,new A.b8(k,B.a0),n)}}
C.Zo.prototype={
R(){return new C.azv()}}
C.azv.prototype={
Z(){this.a2()
var w=$.ax()
this.d!==$&&A.aP()
this.d=new A.at(B.at,w)},
q(){var w=this.d
w===$&&A.c()
w.T$=$.ax()
w.P$=0
this.a1()},
Kr(){var w,v=this.d
v===$&&A.c()
w=B.a.i(v.a.a)
if(w.length===0){this.c.K(x.q).f.U(D.fai)
return}v=this.c
v.toString
A.a4(v,!1).O(new C.aUi(w))},
B(d){var w,v,u,t,s,r,q=null,p=A.P(d).ax.a===B.J,o=p?B.e3:B.c,n=A.n(20),m=A.p(q,D.bW_,B.f,q,q,new A.o(B.bP.j(0.15),q,q,A.n(12),q,q,B.n),q,44,q,q,q,q,q,44),l=A.d("Create Family Tree",q,q,q,q,q,q,A.l(q,q,p?B.aP:B.av,q,q,q,q,q,q,q,q,18,q,q,B.u,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),k=x.p
l=A.E(A.x(A.a([l,B.bF,A.d("Build generations with photos, notes, and profiles.",q,q,q,q,q,q,A.l(q,q,p?B.bt:B.bm,q,q,q,q,q,q,q,q,12,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],k),B.E,q,B.e,B.i,0,B.p),1)
m=A.B(A.a([m,B.bc,l,A.aG(q,q,q,q,A.X(B.cz,p?B.bt:B.bm,q,q,q,q),q,q,q,new C.d5_(d),q,q,q,q,q,q)],k),B.m,q,B.e,B.i,0,q,q)
l=B.aW.j(p?0.12:0.08)
w=A.n(12)
v=A.K(B.aW.j(0.25),B.r,1)
u=A.X(B.amX,B.aW.j(0.9),q,q,q,18)
l=A.p(q,A.B(A.a([u,B.as,A.E(A.d("Example: Historia ya M'Bembe",q,q,q,q,q,q,A.l(q,q,p?B.aP:B.av,q,q,q,q,q,q,q,q,12,q,q,B.a7,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),1)],k),B.m,q,B.e,B.i,0,q,q),B.f,q,q,new A.o(l,q,v,w,q,q,B.n),q,q,q,q,B.bE,q,q,1/0)
w=this.d
w===$&&A.c()
v=A.l(q,q,p?B.aP:B.av,q,q,q,q,q,q,q,q,q,q,q,B.a7,q,q,!0,q,q,q,q,q,q,q,q)
u=p?B.jK:B.jb
t=A.n(12)
s=A.n(12)
r=p?B.e8:B.bO
v=A.aM(q,B.Y,!0,q,!0,B.t,q,A.aN(),w,q,q,q,q,q,2,A.bt(q,new A.b5(4,t,B.dk),q,q,q,q,q,q,!0,new A.b5(4,s,new A.ay(r,1,B.r,-1)),q,q,q,q,q,u,!0,q,q,q,q,q,q,q,q,q,q,q,q,q,q,"Enter your family name or title",q,q,q,q,q,q,q,q,"Family tree name",!0,!0,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q),B.y,!0,q,!0,q,!1,q,B.aj,q,q,q,q,q,q,q,q,q,1,q,q,!1,"\u2022",q,q,q,new C.d50(this),q,!1,q,q,!1,q,!0,q,B.aa,q,q,q,q,q,q,q,q,q,q,q,v,!0,B.a4,q,B.kV,q,q,q,q)
w=p?B.aP:B.av
p=p?B.e8:B.bO
return A.eT(q,o,new A.cU(B.lX,A.cg(A.x(A.a([m,B.aQ,l,B.aA,v,B.bx,A.B(A.a([A.E(A.dT(B.di,new C.d51(d),A.di(q,q,q,q,q,q,q,q,q,w,q,q,B.cl,q,new A.b8(A.n(12),B.a0),new A.ay(p,1,B.r,-1),q,q,q,q)),1),B.as,A.E(A.bH(D.fTB,q,this.ga2X(),A.bo(B.bP,q,q,q,B.c,q,B.cl,q,new A.b8(A.n(12),B.a0),q,q,q)),1)],k),B.m,q,B.e,B.i,0,q,q)],k),B.E,q,B.e,B.O,0,B.p),B.t,q,B.y,q,B.BV,q,q,B.ah),q),q,q,q,A6.BW,B.d8,q,new A.b8(n,B.a0),q)}}
C.YW.prototype={
R(){return new C.ayb()}}
C.ayb.prototype={
Z(){var w,v=this
v.a2()
w=$.ax()
v.d!==$&&A.aP()
v.d=new A.at(B.at,w)
v.e!==$&&A.aP()
v.e=new A.at(new A.ba("1",B.b3,B.aO),w)
v.f!==$&&A.aP()
v.f=new A.at(B.at,w)
v.r!==$&&A.aP()
v.r=new A.at(B.at,w)},
q(){var w,v=this,u=v.d
u===$&&A.c()
w=u.T$=$.ax()
u.P$=0
u=v.e
u===$&&A.c()
u.T$=w
u.P$=0
u=v.f
u===$&&A.c()
u.T$=w
u.P$=0
u=v.r
u===$&&A.c()
u.T$=w
u.P$=0
v.a1()},
gJM(){var w,v=this.e
v===$&&A.c()
w=A.d4(B.a.i(v.a.a))
if(w==null||w<=0)return 1
return w},
gajT(){var w=this.f
w===$&&A.c()
w=A.d4(B.a.i(w.a.a))
return w==null?0:w},
gb4B(){var w,v=this.w
if(v==="other"){v=this.r
v===$&&A.c()
w=B.a.i(v.a.a)
return w.length===0?"units":w}return v},
aPi(d){var w,v=B.k.E(this.gJM()+d,0.25,999999),u=B.k.jj(v),t=this.e
t===$&&A.c()
if(v===u)u=B.o.u(B.k.N(v))
else{u=B.k.ac(v,2)
w=A.ag("\\.?0+$",!0,!1,!1,!1)
u=A.aL(u,w,"")}t.saX(0,u)
this.m(new C.cDu())},
ayy(d,e,f,g){var w=null,v=g!=null?A.X(g,B.aW,w,w,w,20):w,u=d.a,t=u?B.jK:B.jb,s=A.n(14),r=A.n(14)
u=u?B.e8:B.bO
return A.bt(w,new A.b5(4,s,B.dk),w,B.bE,w,w,w,w,!0,new A.b5(4,r,new A.ay(u,1,B.r,-1)),w,w,w,w,w,t,!0,w,w,w,w,new A.b5(4,A.n(14),B.acL),w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w,w,e,!0,!0,!1,w,v,w,w,w,w,w,w,w,w,w,w,w,w)},
cbX(d,e,f){return this.ayy(d,e,f,null)},
Kr(){var w,v,u,t,s=this,r=s.d
r===$&&A.c()
w=B.a.i(r.a.a)
if(s.gajT()<=0){s.c.K(x.q).f.U(D.fex)
return}r=s.c
r.toString
v=s.gJM()
u=s.gajT()
t=s.gb4B()
A.a4(r,!1).O(new C.aSh(w,v,u,t))},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=A.P(d).ax.a===B.J,m=new C.u7(n),l=n?B.e3:B.c,k=A.n(24),j=x.O,i=A.a([B.aW.j(0.22),B.bP.j(0.14)],j),h=A.n(14)
i=A.p(o,D.bPi,B.f,o,o,new A.o(o,o,A.K(B.aW.j(0.35),B.r,1),h,o,new A.a9(B.a5,B.a8,B.x,i,o,o),B.n),o,48,o,o,o,o,o,48)
h=A.d("Add Budget Item",o,o,o,o,o,o,A.l(o,o,n?B.aP:B.av,o,o,o,o,o,o,o,o,19,o,o,B.u,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)
w=x.p
h=A.E(A.x(A.a([h,B.bF,A.d("Amount required \xb7 name optional",o,o,o,o,o,o,A.l(o,o,n?B.bt:B.bm,o,o,o,o,o,o,o,o,12,o,o,B.cy,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],w),B.E,o,B.e,B.i,0,B.p),1)
i=A.B(A.a([i,B.bc,h,A.aG(o,o,o,o,A.X(B.cz,n?B.bt:B.bm,o,o,o,o),o,o,o,new C.cDA(d),o,o,o,o,o,o)],w),B.m,o,B.e,B.i,0,o,o)
h=p.d
h===$&&A.c()
v=A.l(o,o,n?B.aP:B.av,o,o,o,o,o,o,o,o,o,o,o,B.a7,o,o,!0,o,o,o,o,o,o,o,o)
v=A.aM(o,B.Y,!0,o,!0,B.t,o,A.aN(),h,o,o,o,o,o,2,p.ayy(m,"Item name (optional)","Lumber, paint, labor\u2026",B.OR),B.y,!0,o,!0,o,!1,o,B.aj,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.aa,o,o,o,o,o,o,o,o,o,o,o,v,!0,B.a4,o,A0.K4,o,o,o,o)
h=A.d("Units",o,o,o,o,o,o,A.l(o,o,n?B.bt:B.bm,o,o,o,o,o,o,o,o,12,o,o,B.H,o,o,!0,o,0.3,o,o,o,o,o,o),o,o,o)
u=n?B.jK:B.jb
t=A.n(14)
s=A.K(n?B.e8:B.bO,B.r,1)
r=A.aG(o,o,o,o,A.X(B.z_,n?B.aP:B.av,o,o,o,20),o,o,o,new C.cDB(p),o,o,o,o,o,B.cc)
q=p.e
q===$&&A.c()
q=A.aM(o,B.Y,!1,o,!0,B.t,o,A.aN(),q,o,o,o,o,o,2,D.c0n,B.y,!0,o,!0,o,!1,o,B.aj,o,o,o,o,o,B.e1,o,o,o,1,o,o,!1,"\u2022",o,new C.cDC(p),o,o,o,!1,o,o,!1,o,!0,o,B.aa,o,o,o,o,o,o,o,o,o,o,o,A.l(o,o,n?B.aP:B.av,o,o,o,o,o,o,o,o,16,o,o,B.u,o,o,!0,o,o,o,o,o,o,o,o),!0,B.K,o,B.ao,o,o,o,o)
u=A.p(o,A.B(A.a([r,new A.a5(52,o,q,o),A.aG(o,o,o,o,A.X(B.hQ,n?B.aP:B.av,o,o,o,20),o,o,o,new C.cDD(p),o,o,o,o,o,B.cc)],w),B.m,o,B.e,B.O,0,o,o),B.f,o,o,new A.o(u,o,s,t,o,o,B.n),o,o,o,o,o,o,o,o)
t=p.f
t===$&&A.c()
s=A.l(o,o,n?B.aP:B.av,o,o,o,o,o,o,o,o,16,o,o,B.U,o,o,!0,o,o,o,o,o,o,o,o)
s=A.B(A.a([u,B.as,A.E(A.aM(o,B.Y,!1,o,!0,B.t,o,A.aN(),t,o,o,o,o,o,2,p.ayy(m,"Amount","0.00",B.i5),B.y,!0,o,!0,o,!1,o,B.aj,o,o,o,o,o,B.e1,o,o,o,1,o,o,!1,"\u2022",o,new C.cDE(p),o,o,o,!1,o,o,!1,o,!0,o,B.aa,o,o,o,o,o,o,o,o,o,o,o,s,!0,B.a4,o,B.ao,o,o,o,o),1)],w),B.E,o,B.e,B.i,0,o,o)
t=x.gv
u=A.C(new A.N(D.d5A,new C.cDF(p,m),t),t.k("ak.E"))
i=A.a([i,B.bx,v,B.aA,h,B.P,s,B.ae,A.bX(B.bG,u,B.bq,o,6,6)],w)
if(p.w==="other"){h=p.r
h===$&&A.c()
v=A.l(o,o,n?B.aP:B.av,o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o)
B.d.v(i,A.a([B.W,A.aM(o,B.Y,!1,o,!0,B.t,o,A.aN(),h,o,o,o,o,o,2,p.cbX(m,"Custom unit","rolls, sheets, trips\u2026"),B.y,!0,o,!0,o,!1,o,B.aj,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,new C.cDG(p),o,o,o,!1,o,o,!1,o,!0,o,B.aa,o,o,o,o,o,o,o,o,o,o,o,v,!0,B.a4,o,B.kV,o,o,o,o)],w))}i.push(B.aQ)
h=B.aW.j(n?0.18:0.1)
j=A.a([h,B.bP.j(n?0.12:0.06)],j)
h=A.n(16)
v=A.K(B.aW.j(0.35),B.r,1)
u=A.d("Line total",o,o,o,o,o,o,A.l(o,o,n?B.bt:B.bm,o,o,o,o,o,o,o,o,11,o,o,B.U,o,o,!0,o,0.4,o,o,o,o,o,o),o,o,o)
t=p.gJM()===B.k.jj(p.gJM())?B.k.N(p.gJM()):p.gJM()
s=p.gb4B()
r=A.B1(p.gajT())
i.push(A.p(o,A.B(A.a([A.E(A.x(A.a([u,B.au,A.d(A.w(t)+" "+s+" \xd7 "+r,o,o,o,o,o,o,A.l(o,o,n?B.bt:B.bm,o,o,o,o,o,o,o,o,12,o,o,B.a7,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],w),B.E,o,B.e,B.i,0,B.p),1),C.bEH(p.gJM()*p.gajT(),B.b0,!1,B.u)],w),B.m,o,B.e,B.i,0,o,o),B.f,o,o,new A.o(o,o,v,h,o,new A.a9(B.a5,B.a8,B.x,j,o,o),B.n),o,o,o,o,B.jf,o,o,o))
i.push(B.bx)
j=A.n(14)
h=n?B.e8:B.bO
h=A.di(o,o,o,o,o,o,o,o,o,o,o,o,B.cl,o,new A.b8(j,B.a0),new A.ay(h,1,B.r,-1),o,o,o,o)
i.push(A.B(A.a([A.E(A.dT(A.d("Cancel",o,o,o,o,o,o,A.l(o,o,n?B.aP:B.av,o,o,o,o,o,o,o,o,o,o,o,B.U,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),new C.cDH(d),h),1),B.as,A.E(A.dl(D.aqy,D.fPu,p.ga2X(),A.bo(B.aW,o,o,0,B.c,o,B.cl,o,new A.b8(A.n(14),B.a0),o,o,o)),2)],w),B.m,o,B.e,B.i,0,o,o))
return A.eT(o,l,new A.cU(A5.ada,A.cg(A.x(i,B.ak,o,B.e,B.O,0,B.p),B.t,o,B.y,o,Ak.rx,o,o,B.ah),o),o,o,o,B.NB,B.d8,o,new A.b8(k,B.a0),o)}}
C.a1z.prototype={
R(){return new C.bxh()}}
C.bxh.prototype={
Z(){var w,v,u=this
u.a2()
w=u.a.e
v=$.ax()
u.d!==$&&A.aP()
u.d=new A.at(new A.ba(w,B.b3,B.aO),v)},
q(){var w=this.d
w===$&&A.c()
w.T$=$.ax()
w.P$=0
this.a1()},
B(d){var w,v,u,t=this,s=null,r=A.P(d).ax.a===B.J,q=r?B.e3:B.c,p=A.n(20),o=t.a.c
o=A.d(o,s,s,s,s,s,s,A.l(s,s,r?B.aP:B.av,s,s,s,s,s,s,s,s,18,s,s,B.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)
w=t.d
w===$&&A.c()
v=A.l(s,s,r?B.aP:B.av,s,s,s,s,s,s,s,s,s,s,s,s,s,s,!0,s,s,s,s,s,s,s,s)
u=t.a.d
r=r?B.jK:B.jb
v=A.aM(s,B.Y,!0,s,!0,B.t,s,A.aN(),w,s,s,s,s,s,2,A.bt(s,new A.b5(4,A.n(12),B.dk),s,s,s,s,s,s,!0,s,s,s,s,s,s,r,!0,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,u,!0,!0,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s),B.y,!0,s,!0,s,!1,s,B.aj,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,new C.fhG(t,d),s,!1,s,s,!1,s,!0,s,B.aa,s,s,s,s,s,s,s,s,s,s,s,v,!0,B.a4,s,B.ao,s,s,s,s)
u=A.E(A.dT(B.di,new C.fhH(d),s),1)
r=A.bo(B.bP,s,s,s,s,s,s,s,s,s,s,s)
w=x.p
return A.eT(s,q,new A.D(B.BV,A.x(A.a([o,B.aA,v,B.aQ,A.B(A.a([u,B.as,A.E(A.bH(A.d(t.a.f,s,s,s,s,s,s,s,s,s,s),s,new C.fhI(t,d),r),1)],w),B.m,s,B.e,B.i,0,s,s)],w),B.m,s,B.e,B.O,0,B.p),s),s,s,s,s,B.d8,s,new A.b8(p,B.a0),s)}}
C.abR.prototype={
a6(){return"WorksheetFrameStyle."+this.b}}
C.FU.prototype={
R(){return new C.bxf(null,null)}}
C.bxf.prototype={
Z(){var w,v=this
v.a2()
w=A.bn(null,D.bwT,null,1,null,v)
w.cM(0)
v.d!==$&&A.aP()
v.d=w},
q(){var w=this.d
w===$&&A.c()
w.q()
this.bze()},
gbAK(){switch(this.a.r.a){case 1:return A.a([B.aW,B.bP,B.b0],x.O)
case 2:return A.a([B.bv,B.aW,B.b0],x.O)
case 3:return A.a([B.aK,B.cf,B.kc],x.O)
case 4:return A.a([B.hf,B.bP,B.ff],x.O)
case 0:return A.a([B.aW,B.bP,B.b0],x.O)}},
B(d){var w=A.P(d),v=this.d
v===$&&A.c()
return new A.er(A.cb(v,new C.fhE(this,new C.u7(w.ax.a===B.J)),null),null)}}
C.ay4.prototype={
R(){return new C.bxg(null,null)}}
C.bxg.prototype={
Z(){var w,v=this
v.a2()
w=A.bn(null,B.nm,null,1,null,v)
w.cM(0)
v.d!==$&&A.aP()
v.d=w},
q(){var w=this.d
w===$&&A.c()
w.q()
this.bzf()},
B(d){var w=this.d
w===$&&A.c()
return A.cb(w,new C.fhF(this),null)}}
C.bxe.prototype={
a3(d,e){var w,v,u,t,s,r,q,p=this,o=e.a
if(o<8||e.b<8)return
w=p.c
v=A.br(new A.a3(1.5,1.5,1.5+(o-3),1.5+(e.b-3)),new A.aQ(w,w))
u=new A.aF($.S().r,B.ag,null,null,A.a([],x.v))
u.D(new A.iT(v))
w=A.I()
w.b=B.a9
w.c=5
o=p.f
t=p.e
w.r=o[1].j(0.14*t).gp(0)
d.az(v,w)
w=A.I()
w.b=B.a9
w.c=2.8
o=p.d?o[0]:o[2]
w.r=o.j(0.55*t).gp(0)
d.aH(u,w)
w=A.xt(u)
t=A.a([],x.U)
w=new A.tq(w,!1,t)
for(o=p.b,s=-o*0.85;w.C();){r=w.c
if(r===0||w.f)A.b9(A.jB(y.B));--r
q=new A.Bs(w,r)
w.im()
r=t[r].b
r===$&&A.c()
r=r.a.length()
p.aSK(d,q,r,o,0,0.2,4.2,0.92)
p.aSK(d,q,r,s,0.52,0.11,3.2,0.58)}},
aSK(d,e,f,g,h,i,j,k){var w,v,u,t=B.k.F(g+h,1)*f,s=A.hHf(e.a.a,e,t,t+f*i,!0),r=A.bD2(s.gbv().a.getBounds())
$.S()
w=A.I()
w.b=B.a9
w.c=j
w.d=B.bA
w.f=!0
v=this.f
u=k*this.e
w.sam(new A.a9(B.a5,B.a8,B.x,A.a([v[0].j(0),v[0].j(u),v[1].j(u),v[0].j(0)],x.O),B.I4,null).aA(0,r))
d.aH(s,w)},
av(d){return d.b!==this.b||d.d!==this.d}}
C.aOt.prototype={
q(){var w=this,v=w.a9$
if(v!=null)v.a5(0,w.gbB())
w.a9$=null
w.a1()},
aU(){this.b1()
this.b0()
this.bC()}}
C.aOu.prototype={
q(){var w=this,v=w.a9$
if(v!=null)v.a5(0,w.gbB())
w.a9$=null
w.a1()},
aU(){this.b1()
this.b0()
this.bC()}}
C.u7.prototype={}
C.atc.prototype={
R(){return new C.aFO()},
ge1(){return this.c}}
C.aFO.prototype={
Z(){var w=this
w.a2()
w.d=w.a.d
w.ahA()},
q(){var w=this.a.c,v=this.d
v===$&&A.c()
C.LB(w,v)
this.a1()},
ahA(){var w=0,v=A.j(x.H),u=this,t,s
var $async$ahA=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return A.b(C.bDa(t.c,t.d.a),$async$ahA)
case 2:s=e
if(s!=null&&u.c!=null)u.m(new C.eQv(u,s))
return A.h(null,v)}})
return A.i($async$ahA,v)},
Qr(){var w=0,v=A.j(x.H),u=this,t,s
var $async$Qr=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:u.m(new C.eQm(u))
t=u.a.c
s=u.d
s===$&&A.c()
w=2
return A.b(C.LB(t,s),$async$Qr)
case 2:if(u.c!=null)u.m(new C.eQn(u))
return A.h(null,v)}})
return A.i($async$Qr,v)},
QY(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$QY=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.c
p.toString
p=A.P(p)
s=t.c
s.toString
w=3
return A.b(A.ck(null,null,!0,null,new C.eQt(t,new C.u7(p.ax.a===B.J)),s,null,!0,!0,x.T),$async$QY)
case 3:r=e
if(r==null||t.c==null){w=1
break}p=t.d
p===$&&A.c()
q=p.c
w=q!=null&&q!==r?4:5
break
case 4:w=6
return A.b(C.a8R(q),$async$QY)
case 6:case 5:t.m(new C.eQu(t,r))
w=7
return A.b(t.Qr(),$async$QY)
case 7:case 1:return A.h(u,v)}})
return A.i($async$QY,v)},
Wd(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Wd=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return A.b(C.ik7(r),$async$Wd)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.m(new C.eQh(t,new C.rg(B.o.u(1000*Date.now()),s.a,s.b,s.c,s.d)))
w=4
return A.b(t.Qr(),$async$Wd)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Wd,v)},
ch1(){var w,v,u=this,t=u.c
t.toString
w=u.a.c
v=u.d
v===$&&A.c()
C.hz6(t,new C.eQl(u),w,v)},
abx(d){var w=null,v=B.c.j(d?0.85:0.55)
return A.p(w,w,B.f,w,w,new A.o(w,w,new A.bI(new A.ay(v,2.5,B.r,-1),B.a0,B.a0,new A.ay(B.c.j(d?0.85:0.55),2.5,B.r,-1)),D.b22,w,w,B.n),w,22,w,w,w,w,w,22)},
aaB(d){return this.bMH(d)},
bMH(d){var w=0,v=A.j(x.H),u=this
var $async$aaB=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:u.m(new C.eQk(u,d))
w=2
return A.b(u.Qr(),$async$aaB)
case 2:return A.h(null,v)}})
return A.i($async$aaB,v)},
B(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=A.P(a2).ax.a===B.J,e=f?B.c1:B.iy,d=A.n(8),a0=A.X(Z.a0X,f?B.bt:B.bm,g,g,g,16),a1=x.p
a0=A.aO(!1,d,!0,new A.D(B.Gw,A.B(A.a([a0,B.bn,A.d("Back to Projects",g,g,g,g,g,g,A.l(g,g,f?B.bt:B.bm,g,g,g,g,g,g,g,g,g,g,g,B.a7,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)],a1),B.m,g,B.e,B.O,0,g,g),g),g,!0,g,g,g,g,g,g,g,g,g,g,g,new C.eQw(h,a2),g,g,g,g,g,g,g)
d=h.d
d===$&&A.c()
d=d.c
if(d!=null&&B.a.a0(d,"ngmy:thumb:"))d=new A.an(B.a_,g,B.b2,B.t,A.a([A.bx(A.n(22),C.aRj(!0,A.n(22),1/0,B.qn,g,d,1/0),B.ap),A.ap(10,A.dl(D.bTX,D.fRT,h.gb2x(),A.bo(B.w.j(0.45),g,g,g,B.c,g,B.h6,g,new A.b8(A.n(12),B.a0),g,g,g)),g,g,g,10,g,g)],a1),g)
else{d=A.n(22)
w=x.V
v=A.a([new A.ac(0,B.G,B.aW.j(f?0.5:0.38),B.eU,22),new A.ac(-4,B.G,B.bP.j(0.2),B.I,32)],w)
u=A.n(17)
t=A.K(B.c.j(0.45),B.r,1.2)
w=A.a([new A.ac(-2,B.G,B.c.j(0.18),B.I,10)],w)
s=A.n(16)
r=h.d
v=A.p(g,A.p(g,A.bx(s,new A.an(B.a_,g,B.b2,B.t,A.a([C.aRj(!0,A.n(16),1/0,B.Om,g,r.c,1/0),A.c3(g,new A.o(g,g,g,g,g,new A.a9(B.b_,B.b5,B.x,A.a([B.c.j(0.06),B.L,B.w.j(0.22)],x.O),g,g),B.n),B.bh),A.ap(g,h.abx(!0),g,g,8,g,8,g),A.ap(g,A.cAF(h.abx(!0),!0,!1),g,g,g,8,8,g),A.ap(8,A.cAF(h.abx(!1),!1,!0),g,g,8,g,g,g),A.ap(8,A.cAF(h.abx(!1),!0,!0),g,g,g,8,g,g),A.ap(10,A.dl(D.bPT,D.fLe,h.gb2x(),A.bo(B.w.j(0.45),g,g,g,B.c,g,B.h6,g,new A.b8(A.n(12),B.a0),g,g,g)),g,g,g,10,g,g)],a1),g),B.ap),B.f,g,g,new A.o(g,g,t,u,w,g,B.n),g,g,g,g,g,g,g,g),B.f,g,g,new A.o(g,g,g,d,v,D.c24,B.n),g,g,g,g,B.m9,g,g,g)
d=v}w=h.d
w=A.d(w.b,g,g,g,g,g,g,A.l(g,g,f?B.aP:B.av,g,g,g,g,g,g,g,g,22,g,g,B.u,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)
q=h.d.d.length
v=A.n(22)
u=x.O
u=f?A.a([D.bcM,B.o_,B.h3],u):A.a([B.b0,B.aW,B.bP],u)
t=x.V
s=A.a([new A.ac(0,B.G,B.aW.j(f?0.45:0.35),B.eU,24)],t)
r=A.n(22)
p=A.ap(g,A.X(B.jT,B.c.j(0.08),g,g,g,120),g,g,g,-24,-24,g)
o=B.c.j(0.16)
n=A.n(20)
m=A.K(B.c.j(0.22),B.r,1)
l=q===1?"item":"items"
n=A.a([A.B(A.a([A.p(g,A.d(""+q+" "+l,g,g,g,g,g,g,A.l(g,g,B.c.j(0.92),g,g,g,g,g,g,g,g,11,g,g,B.H,g,g,!0,g,0.3,g,g,g,g,g,g),g,g,g),B.f,g,g,new A.o(o,g,m,n,g,g,B.n),g,g,g,g,B.h4,g,g,g)],a1),B.m,g,B.e,B.i,0,g,g),B.aA,A.d("PROJECT TOTAL",g,g,g,g,g,g,A.l(g,g,B.c.j(0.75),g,g,g,g,g,g,g,g,11,g,g,B.H,g,g,!0,g,1.4,g,g,g,g,g,g),g,g,g),B.am,C.bEH(h.d.gxf(),B.c,!0,B.u)],a1)
if(q>0)B.d.v(n,A.a([B.P,A.d("Sum of all budget line items",g,g,g,g,g,g,A.l(g,g,B.c.j(0.65),g,g,g,g,g,g,g,g,11,g,g,B.cy,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)],a1))
o=A.E(A.x(n,B.E,g,B.e,B.i,0,B.p),1)
n=A.n(14)
m=A.n(14)
l=B.c.j(0.12)
k=A.K(B.hh.j(0.75),B.r,1.6)
t=A.a([new A.ac(0,B.G,B.aK.j(0.28),B.cH,14)],t)
j=B.aK.j(0.22)
i=A.n(10)
u=A.p(g,A.bx(r,new A.an(B.a_,g,B.ab,B.t,A.a([p,new A.D(D.bBD,A.B(A.a([o,B.as,A.aH(!1,B.a2,!0,g,A.aO(!1,n,!0,A.eK(new A.D(V.w2,A.x(A.a([A.p(g,D.aq8,B.f,g,g,new A.o(j,g,A.K(B.aK.j(0.5),B.r,1),i,g,g,B.n),g,g,g,g,B.cm,g,g,g),B.fG,D.fA0],a1),B.m,g,B.e,B.O,0,B.p),g),g,new A.o(l,g,k,m,t,g,B.n),g,g,g),g,!0,g,g,g,g,g,g,g,g,g,g,g,h.gch0(),g,g,g,g,g,g,g),B.f,B.L,0,g,g,g,g,g,B.ai)],a1),B.m,g,B.e,B.i,0,g,g),g)],a1),g),B.ap),B.f,g,g,new A.o(g,g,g,v,s,new A.a9(B.ay,B.aD,B.x,u,g,g),B.n),g,g,g,g,g,g,g,g)
s=h.d.d.length
d=A.a([new A.fH(1.7777777777777777,d,g),B.aQ,w,B.P,u,B.bx,A.B(A.a([A.d("Budget Items ("+s+")",g,g,g,g,g,g,A.l(g,g,f?B.aP:B.av,g,g,g,g,g,g,g,g,16,g,g,B.H,g,g,!0,g,g,g,g,g,g,g,g),g,g,g),B.b1,A.dl(Aw.a2I,D.fxS,h.gbBc(),A.bo(B.aW,g,g,g,B.c,g,B.iq,g,new A.b8(A.n(12),B.a0),g,g,g))],a1),B.m,g,B.e,B.i,0,g,g),B.ae],a1)
w=h.d.d
if(w.length===0){w=f?B.e3:B.c
v=A.n(14)
u=A.K(f?B.e8:B.bO,B.r,1)
t=A.X(B.a1h,f?B.bt:B.bm,g,g,g,48)
s=A.d("No budget items yet",g,g,g,g,g,g,A.l(g,g,f?B.aP:B.av,g,g,g,g,g,g,g,g,g,g,g,B.U,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)
d.push(A.p(g,A.x(A.a([t,B.W,s,B.am,A.d("Add item names, units, and prices to track spending.",g,g,g,g,g,g,A.l(g,g,f?B.bt:B.bm,g,g,g,g,g,g,g,g,g,g,g,g,g,g,!0,g,g,g,g,g,g,g,g),B.K,g,g)],a1),B.m,g,B.e,B.i,0,B.p),B.f,g,g,new A.o(w,g,u,v,g,g,B.n),g,g,g,g,B.qi,g,g,1/0))}else B.d.v(d,new A.N(w,new C.eQx(h,new C.u7(f)),A.T(w).k("N<1,v>")))
if(h.e)d.push(new A.D(B.BK,A.au(A.mZ(g,f?B.bt:B.bm,g,g,g,g,g,g,g,g),g,g,g),g))
return A.c5(g,e,A.bm(!0,A.x(A.a([new A.D(B.BO,a0,g),A.E(A.cg(A.x(d,B.E,g,B.e,B.i,0,B.p),B.t,g,B.y,g,E.yr,g,g,B.ah),1)],a1),B.E,g,B.e,B.i,0,B.p),!0,!1,B.af,!0,!0),g,!1,!1,g,g)},
bES(d,e){var w,v,u=null,t=d.b,s=B.a.i(t).length===0,r=e.a,q=r?B.e3:B.c,p=A.n(16),o=A.a([new A.ac(0,B.G,B.w.j(r?0.35:0.08),B.cH,12)],x.V),n=A.n(16),m=A.p(u,u,B.f,u,u,D.b4O,u,u,u,u,u,u,u,5),l=B.aW.j(r?0.22:0.12),k=A.n(12)
l=A.p(u,A.X(s?B.i6:B.hl,B.b0,u,u,u,20),B.f,u,u,new A.o(l,u,u,k,u,u,B.n),u,40,u,u,u,u,u,40)
if(s)t=B.bJ
else{k=x.p
t=A.a([A.d(t,u,2,B.a1,u,u,u,A.l(u,u,r?B.aP:B.av,u,u,u,u,u,u,u,u,15,u,u,B.H,u,1.25,!0,u,u,u,u,u,u,u,u),u,u,u)],k)
if(d.c!==1||d.e!=="each"){w=d.gcX6()
v=A.B1(d.d)
B.d.v(t,A.a([B.au,A.d(w+" "+v,u,u,u,u,u,u,A.l(u,u,r?B.bt:B.bm,u,u,u,u,u,u,u,u,12,u,u,B.a7,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],k))}t=A.x(t,B.E,u,B.b9,B.O,0,B.p)}t=A.E(t,1)
k=A.a([B.aW.j(0.14),B.bP.j(0.1)],x.O)
w=A.n(12)
k=A.p(u,C.bEH(d.c*d.d,B.b0,!1,B.u),B.f,u,u,new A.o(u,u,u,w,u,new A.a9(B.a5,B.a8,B.x,k,u,u),B.n),u,u,u,u,B.h6,u,u,u)
w=x.p
return A.p(u,A.bx(n,new A.Ek(A.B(A.a([m,A.E(new A.D(B.ak3,A.B(A.a([l,B.bc,t,B.ac,k,A.aG(u,u,u,u,A.X(B.cz,(r?B.bt:B.bm).j(0.75),u,u,u,20),u,u,u,new C.eQi(this,d),u,u,u,u,u,B.cc)],w),B.m,u,B.e,B.i,0,u,u),u),1)],w),B.ak,u,B.e,B.i,0,u,u),u),B.ap),B.f,u,D.b3F,new A.o(q,u,u,p,o,u,B.n),u,u,u,B.d2,u,u,u,u)}}
C.adS.prototype={
ED(d){return this.bO4(d)},
bO4(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$ED=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:o=t.c
w=3
return A.b(A.pm(d,o,!1),$async$ED)
case 3:if(!f||d.e==null){w=1
break}A.a4(d,!1).O(null)
w=4
return A.b(A.bP(Aj.BI,null,x.H),$async$ED)
case 4:s=t.d
w=5
return A.b(C.fQj(!0,o,s),$async$ED)
case 5:r=f
q=A.ag("[^\\w\\-.]+",!0,!1,!1,!1)
w=6
return A.b(A.GP(r,"ngmy_project_"+A.aL(s.b,q,"_"),!1),$async$ED)
case 6:p=f
w=7
return A.b(A.pl(o,!1),$async$ED)
case 7:if(d.e==null){w=1
break}d.K(x.q).f.U(A.b3(null,null,null,null,null,B.t,null,A.d(p,null,null,null,null,null,null,null,null,null,null),null,B.Z,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$ED,v)},
a_R(d){return this.cxp(d)},
cxp(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$a_R=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.c
w=3
return A.b(A.pm(d,s,!1),$async$a_R)
case 3:if(!f||d.e==null){w=1
break}A.a4(d,!1).O(null)
A.hH(d,new C.at6(s,t.d,null),!1,"NgmyWorksheetProjectQr",x.H)
w=4
return A.b(A.pl(s,!1),$async$a_R)
case 4:case 1:return A.h(u,v)}})
return A.i($async$a_R,v)},
Qs(d){return this.ctt(d)},
ctt(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$Qs=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:A.a4(d,!1).O(null)
w=3
return A.b(A.hH(d,D.aJA,!0,"NgmyWorksheetProjectScan",x.N),$async$Qs)
case 3:s=f
if(s==null||B.a.i(s).length===0){w=1
break}w=4
return A.b(C.bEI(s),$async$Qs)
case 4:r=f
if(r==null){if(d.e==null){w=1
break}d.K(x.q).f.U(D.fdF)
w=1
break}q=C.hb6(r)
p=t.e.$1(q)
w=5
return A.b(x.x.b(p)?p:A.dV(p,x.H),$async$Qs)
case 5:if(d.e==null){w=1
break}d.K(x.q).f.U(A.b3(null,null,null,null,null,B.t,null,A.d('Imported "'+q.b+'" from QR',null,null,null,null,null,null,null,null,null,null),null,B.Z,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$Qs,v)},
a_S(d){return this.cFv(d)},
cFv(d){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$a_S=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:A.a4(d,!1).O(null)
w=3
return A.b(C.bEe(),$async$a_S)
case 3:s=f
if(s==null){w=1
break}r=C.hb6(s)
q=t.e.$1(r)
w=4
return A.b(x.x.b(q)?q:A.dV(q,x.H),$async$a_S)
case 4:if(d.e==null){w=1
break}d.K(x.q).f.U(A.b3(null,null,null,null,null,B.t,null,A.d('Imported "'+r.b+'" from file',null,null,null,null,null,null,null,null,null,null),null,B.Z,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$a_S,v)},
B(d){var w=this,v=null,u=A.P(d).ax.a===B.J,t=new C.u7(u),s=w.d.d.length,r=u?B.e3:B.c,q=A.n(28),p=A.a([new A.ac(0,B.G,B.w.j(u?0.35:0.08),B.kq,36)],x.V),o=x.p
return A.bm(!0,new A.D(B.w1,A.p(v,A.x(A.a([w.cvZ(d,t,s),new A.D(D.bB1,A.x(A.a([w.b5x(t,"QR restore"),B.W,A.B(A.a([w.b0v(t,!0,B.jD,B.aK,B.aK,new C.eQz(w,d),"Show to scan","QR code"),B.as,w.ayz(t,B.jg,B.b6,B.br,new C.eQA(w,d),"From camera","Scan QR")],o),B.m,v,B.e,B.i,0,v,v),B.d4,w.b5x(t,"Backup files"),B.W,A.B(A.a([w.ayz(t,B.hR,B.aW,B.bP,new C.eQB(w,d),"Full copy","Backup file"),B.as,w.ayz(t,R.z4,B.aE,B.aT,new C.eQC(w,d),".json backup","Upload file")],o),B.m,v,B.e,B.i,0,v,v)],o),B.E,v,B.e,B.i,0,B.p),v)],o),B.m,v,B.e,B.O,0,B.p),B.ap,v,v,new A.o(r,v,v,q,p,v,B.n),v,v,v,v,v,v,v,v),v),!0,!1,B.af,!0,!0)},
cvZ(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=x.O
k=e.a?A.a([B.f6,B.cR,B.fM],k):A.a([B.b0,B.aW,B.bP],k)
w=A.ap(l,A.X(B.uC,B.c.j(0.07),l,l,l,110),l,l,l,-20,-10,l)
v=A.au(A.p(l,l,B.f,l,l,new A.o(B.c.j(0.35),l,l,A.n(4),l,l,B.n),l,4,l,B.kH,l,l,l,36),l,l,l)
u=A.n(14)
t=A.K(B.c.j(0.45),B.r,1.5)
s=A.a([new A.ac(0,B.G,B.w.j(0.2),B.cH,12)],x.V)
r=this.d
s=A.p(l,C.aRj(!0,A.n(13),64,D.bLa,l,r.c,64),B.ap,l,l,new A.o(l,l,t,u,s,l,B.n),l,64,l,l,l,l,l,64)
u=A.d("Share project",l,l,l,l,l,l,A.l(l,l,B.c.j(0.78),l,l,l,l,l,l,l,l,11,l,l,B.H,l,l,!0,l,1.1,l,l,l,l,l,l),l,l,l)
t=A.d(r.b,l,2,B.a1,l,l,l,D.aUp,l,l,l)
r=C.bEH(r.gxf(),B.c,!1,B.u)
q=B.c.j(0.16)
p=A.n(20)
o=A.K(B.c.j(0.22),B.r,1)
n=f===1?"item":"items"
m=x.p
return A.p(l,new A.an(B.a_,l,B.ab,B.t,A.a([w,new A.D(D.bBp,A.x(A.a([v,A.B(A.a([s,B.er,A.E(A.x(A.a([u,B.au,t,B.P,A.B(A.a([r,B.ac,A.p(l,A.d(""+f+" "+n,l,l,l,l,l,l,A.l(l,l,B.c.j(0.9),l,l,l,l,l,l,l,l,10,l,l,B.H,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),B.f,l,l,new A.o(q,l,o,p,l,l,B.n),l,l,l,l,B.fP,l,l,l)],m),B.m,l,B.e,B.i,0,l,l)],m),B.E,l,B.e,B.i,0,B.p),1),A.aG(l,l,l,l,A.X(B.cz,B.c.j(0.85),l,l,l,l),l,l,l,new C.eQy(d),l,l,l,A.nO(l,B.c.j(0.12),l,l,l,l,l,l,l,l,l,l,E.aRE,l,l,l,l),l,l)],m),B.E,l,B.e,B.i,0,l,l)],m),B.m,l,B.e,B.i,0,B.p),l)],m),l),B.f,l,l,new A.o(l,l,l,l,l,new A.a9(B.ay,B.aD,B.x,k,l,l),B.n),l,l,l,l,l,l,l,1/0)},
b5x(d,e){var w=null,v=A.p(w,w,B.f,w,w,new A.o(B.aW,w,w,A.n(2),w,w,B.n),w,14,w,w,w,w,w,3)
return A.B(A.a([v,B.ac,A.d(e.toUpperCase(),w,w,w,w,w,w,A.l(w,w,d.a?B.bt:B.bm,w,w,w,w,w,w,w,w,11,w,w,B.H,w,w,!0,w,0.9,w,w,w,w,w,w),w,w,w)],x.p),B.m,w,B.e,B.i,0,w,w)},
b0v(d,e,f,g,h,i,j,k){var w,v,u,t,s,r=null,q=A.n(18),p=A.n(18),o=d.a,n=o?D.aiC:B.aP
if(e)w=B.aK.j(o?0.45:0.35)
else{w=o?B.e8:B.bO
w=w.j(o?0.8:1)}w=A.K(w,B.r,e?1.5:1)
v=e?A.a([new A.ac(0,B.G,B.aK.j(0.12),B.cH,14)],x.V):r
u=g.j(o?0.22:0.14)
t=A.n(12)
s=A.K(h.j(0.35),B.r,1)
t=A.p(r,A.X(f,h,r,r,r,22),B.f,r,r,new A.o(u,r,s,t,r,r,B.n),r,r,r,r,B.ry,r,r,r)
u=A.d(k,r,r,r,r,r,r,A.l(r,r,o?B.aP:B.av,r,r,r,r,r,r,r,r,14,r,r,B.u,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
return A.E(A.aH(!1,B.a2,!0,r,A.aO(!1,q,!0,A.eK(new A.D(E.a_j,A.x(A.a([t,B.ae,u,B.bF,A.d(j,r,r,r,r,r,r,A.l(r,r,o?B.bt:B.bm,r,r,r,r,r,r,r,r,11,r,r,B.cy,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),B.E,r,B.e,B.i,0,B.p),r),r,new A.o(n,r,w,p,v,r,B.n),r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,i,r,r,r,r,r,r,r),B.f,B.L,0,r,r,r,r,r,B.ai),1)},
ayz(d,e,f,g,h,i,j){return this.b0v(d,!1,e,f,g,h,i,j)}}
C.at6.prototype={
R(){return new C.bmm()}}
C.bmm.prototype={
Z(){this.a2()
this.afu()},
afu(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n
var $async$afu=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
p=r.a
w=7
return A.b(C.bEJ(p.c,p.d),$async$afu)
case 7:q=e
if(r.c==null){w=1
break}r.m(new C.eQc(r,q))
t=2
w=6
break
case 4:t=3
n=s.pop()
if(r.c==null){w=1
break}r.m(new C.eQd(r))
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$afu,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=A.P(d).ax.a===B.J,f=g?B.Bd:B.iy,e=i.d
e=e==null?h:B.a.a0(e,"NGMYWSSYNC2|")
w=e===!0
v=i.a.d.d.length
e=A.aG(h,h,h,h,A.X(B.eJ,g?B.ad:B.al,h,h,h,18),h,h,h,new C.eQe(d),h,h,h,h,h,h)
u=x.p
e=A.B(A.a([e,A.E(A.d("Project QR",h,h,h,h,h,h,A.l(h,h,g?B.c:B.N,h,h,h,h,h,h,h,h,17,h,h,B.u,h,h,!0,h,h,h,h,h,h,h,h),B.K,h,h),1),B.Ad],u),B.m,h,B.e,B.i,0,h,h)
t=A.n(24)
s=x.O
s=g?A.a([B.f6,B.cR,B.fM],s):A.a([B.b0,B.aW,B.bP],s)
r=x.V
q=A.a([new A.ac(0,B.G,B.aW.j(g?0.4:0.3),B.eU,24)],r)
p=i.a.d
o=A.d(p.b,h,h,h,h,h,h,B.dd,B.K,h,h)
p=C.bEH(p.gxf(),B.c,!1,B.u)
n=B.c.j(0.16)
m=A.n(20)
l=v===1?"item":"items"
s=A.p(h,A.x(A.a([o,B.am,A.B(A.a([p,B.ac,A.p(h,A.d(""+v+" "+l,h,h,h,h,h,h,A.l(h,h,B.c.j(0.9),h,h,h,h,h,h,h,h,10,h,h,B.H,h,h,!0,h,h,h,h,h,h,h,h),h,h,h),B.f,h,h,new A.o(n,h,h,m,h,h,B.n),h,h,h,h,B.fP,h,h,h)],u),B.m,h,B.b9,B.i,0,h,h)],u),B.m,h,B.e,B.i,0,B.p),B.f,h,h,new A.o(h,h,h,t,q,new A.a9(B.ay,B.aD,B.x,s,h,h),B.n),h,h,h,h,E.a_G,h,h,1/0)
t=g?D.bnE:B.c
q=A.n(24)
p=A.K(w?B.aK.j(0.4):B.aW.j(0.3),B.r,1)
r=A.a([new A.ac(0,B.G,B.w.j(g?0.25:0.06),B.dq,20)],r)
o=A.a([],u)
n=i.e
if(n!=null)o.push(A.d(n,h,h,h,h,h,h,B.UI,B.K,h,h))
else{n=i.d
if(n==null)o.push(D.eml)
else{m=A.n(20)
l=A.K(B.aN,B.r,1)
o.push(A.p(h,A.q2(h,h,!1,n,h,!0,!0,h,!1,B.c),B.f,h,h,new A.o(B.c,h,l,m,h,h,B.n),h,h,h,h,B.bQ,h,h,h))}}o.push(B.aQ)
n=w?B.aK:B.aW
n=n.j(g?0.15:0.1)
m=A.n(12)
l=A.K((w?B.aK:B.aW).j(0.35),B.r,1)
k=w?B.OA:B.P5
k=A.X(k,w?B.aK:B.aW,h,h,h,18)
j=w?"Cloud QR \u2014 includes thumbnail and all budget items.":"Offline QR \u2014 use backup file for the full project copy."
o.push(A.p(h,A.B(A.a([k,B.as,A.E(A.d(j,h,h,h,h,h,h,A.l(h,h,g?B.ad:B.al,h,h,h,h,h,h,h,h,12,h,h,B.a7,h,1.35,!0,h,h,h,h,h,h,h,h),h,h,h),1)],u),B.m,h,B.e,B.i,0,h,h),B.f,h,h,new A.o(n,h,l,m,h,h,B.n),h,h,h,h,B.iq,h,h,h))
return A.c5(h,f,A.bm(!0,A.x(A.a([new A.D(Ag.NN,e,h),A.E(A.cg(A.x(A.a([s,B.aQ,A.p(h,A.x(o,B.m,h,B.e,B.i,0,B.p),B.f,h,h,new A.o(t,h,p,q,r,h,B.n),h,h,h,h,B.uf,h,h,1/0)],u),B.m,h,B.e,B.i,0,B.p),B.t,h,B.y,h,E.alb,h,h,B.ah),1)],u),B.m,h,B.e,B.i,0,B.p),!0,!1,B.af,!0,!0),h,!1,!1,h,h)}}
C.atb.prototype={
R(){return new C.aFN(A.zz(B.N4,B.nR,B.uK))}}
C.aFN.prototype={
q(){this.d.q()
this.a1()},
aNh(d){var w,v=this
if(v.e||v.c==null)return
v.e=!0
w=v.c
w.toString
A.iY(w,d)},
ccQ(d){var w,v,u,t,s,r,q,p="NGMYWSSYNC2|"
if(this.e)return
for(w=d.a,v=w.length,u=0;u<w.length;w.length===v||(0,A.L)(w),++u){t=w[u]
s=C.ii_(t)
if(s!=null){this.aNh(s)
return}r=C.hpO(t)
if(r!=null)q=A.cT(r,p,0)
else q=!1
if(q){this.aNh(B.a.i(B.a.b5(r,B.a.cu(r,p))))
return}}},
B(d){var w,v,u=this,t=null,s=x.p,r=A.eJ(A.a([A.aG(t,t,t,t,A.X(u.f?B.uq:Ab.OG,t,t,t,t,t),t,t,t,new C.eQg(u),t,t,t,t,t,t)],s),t,t,!0,!0,B.Bd,t,1,t,t,t,!1,t,!1,B.c,t,t,t,!0,t,t,t,t,t,D.fL7,t,t,t,1,t,!0),q=A.zy(u.d,B.bW,u.gccP()),p=A.n(28)
p=A.au(A.p(t,t,B.f,t,t,new A.o(t,t,A.K(B.aW,B.r,3),p,A.a([new A.ac(2,B.G,B.aW.j(0.35),B.I,24)],x.V),t,B.n),t,260,t,t,t,t,t,260),t,t,t)
w=B.w.j(0.72)
v=A.n(16)
return A.c5(r,B.w,new A.an(B.a_,t,B.b2,B.t,A.a([q,p,A.ap(32,A.p(t,D.fJU,B.f,t,t,new A.o(w,t,A.K(B.aW.j(0.45),B.r,1),v,t,t,B.n),t,t,t,t,B.jf,t,t,t),t,t,20,20,t,t)],s),t),t,!1,!1,t,t)}}
C.aKJ.prototype={
a6(){return"_WorksheetTab."+this.b}}
C.Ou.prototype={
R(){return new C.aFP(D.ac2,A.a([],x.D))},
bu(){return this.r.$0()},
ge1(){return this.c}}
C.aFP.prototype={
gcDn(){return J.bFS(this.e,0,new C.eQZ())},
Z(){this.a2()
$.aV.bZ$.push(this)
this.vW()},
q(){$.aV.hR(this)
this.a1()},
je(d){if(d===B.fK)this.vW()},
vW(){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n
var $async$vW=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(C.Db(q.a.c).da(0,B.kh),$async$vW)
case 7:p=e
if(q.c==null){r=[1]
w=5
break}q.m(new C.eQV(q,p))
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
if(q.c!=null&&q.f)q.m(new C.eQW(q))
w=r.pop()
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$vW,v)},
Ib(d){return this.bKP(d)},
bKO(){return this.Ib(null)},
bKP(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$Ib=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:l=t.c
l.toString
w=3
return A.b(C.ik9(l,d),$async$Ib)
case 3:s=f
if(s==null||t.c==null){w=1
break}l=B.o.u(1000*Date.now())
r=s.a
q=s.b
p=new C.ly(l,r,q,D.dhe,new A.V(Date.now(),0,!1))
w=4
return A.b(C.LB(t.a.c,p),$async$Ib)
case 4:o=f
w=5
return A.b(t.vW(),$async$Ib)
case 5:n=t.c
if(n==null){w=1
break}if(!o){n.K(x.q).f.U(D.faM)
w=1
break}n=J.aW(t.e)
for(;;){if(!n.C()){m=p
break}m=n.gS(n)
if(m.a===l)break}l=!1
if(q!=null)if(B.a.i(q).length!==0){l=m.c
l=l==null||B.a.i(l).length===0}q=x.q
n=t.c
if(l)n.K(q).f.U(D.fcz)
else n.K(q).f.U(A.b3(null,null,null,null,null,B.t,null,A.d('Project "'+r+'" saved on this device.',null,null,null,null,null,null,null,null,null,null),null,B.Z,null,null,null,null,null,null,null,null,null,null))
t.EH(m)
case 1:return A.h(u,v)}})
return A.i($async$Ib,v)},
EH(d){return this.cgN(d)},
cgN(d){var w=0,v=A.j(x.H),u=this,t,s
var $async$EH=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return A.b(A.hH(s,new C.atc(u.a.c,d,null),!1,"NgmyWorksheetProjectScreen",x.fA),$async$EH)
case 2:t=f
w=t!=null?3:4
break
case 3:w=5
return A.b(C.LB(u.a.c,t),$async$EH)
case 5:case 4:w=6
return A.b(u.vW(),$async$EH)
case 6:return A.h(null,v)}})
return A.i($async$EH,v)},
vI(d){return this.c04(d)},
c04(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$vI=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=d==="file"?3:5
break
case 3:w=6
return A.b(C.bEe(),$async$vI)
case 6:s=f
w=4
break
case 5:w=d==="scan"?7:9
break
case 7:r=t.c
r.toString
w=10
return A.b(A.hH(r,D.aJA,!0,"NgmyWorksheetProjectScan",x.N),$async$vI)
case 10:q=f
w=q!=null&&B.a.i(q).length!==0?11:13
break
case 11:w=14
return A.b(C.bEI(q),$async$vI)
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
r.U(A.b3(null,null,null,null,null,B.t,null,A.d(d==="scan"?"Could not read that QR. Stay online for cloud project codes, or try Upload file.":"Could not read that project backup.",null,null,null,null,null,null,null,null,null,null),null,B.Z,null,null,null,null,null,null,null,null,null,null))
w=1
break}p=C.hb6(s)
w=15
return A.b(C.LB(t.a.c,p),$async$vI)
case 15:o=f
w=16
return A.b(t.vW(),$async$vI)
case 16:r=t.c
if(r==null){w=1
break}if(!o){r.K(x.q).f.U(D.fcE)
w=1
break}r.K(x.q).f.U(A.b3(null,null,null,null,null,B.t,null,A.d('Imported "'+p.b+'"',null,null,null,null,null,null,null,null,null,null),null,B.Z,null,null,null,null,null,null,null,null,null,null))
t.EH(p)
case 1:return A.h(u,v)}})
return A.i($async$vI,v)},
Oa(d){return this.bJt(d)},
bJt(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$Oa=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=5
return A.b(A.ck(null,null,!0,null,new C.eQG(d),s,null,!0,!0,x.y),$async$Oa)
case 5:w=f===!0?3:4
break
case 3:w=6
return A.b(C.oU(t.a.c,A.a([],x.D)),$async$Oa)
case 6:w=7
return A.b(t.vW(),$async$Oa)
case 7:s=t.c
if(s==null){w=1
break}s.K(x.q).f.U(D.faR)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Oa,v)},
ch_(d){var w=this.c
w.toString
A.bV(B.L,null,new C.eQP(this,d),w,!0,!0,!0,null,!1,!1,x.z)},
b68(d,e,f,g,h,i){var w,v,u,t,s,r=null,q=A.n(16),p=g.a
if(p)w=B.jK
else w=B.c
v=A.n(16)
u=A.K(p?B.e8:B.bO,B.r,1)
t=d.j(0.14)
s=A.n(12)
s=A.p(r,A.X(e,d,r,r,r,22),B.f,r,r,new A.o(t,r,r,s,r,r,B.n),r,r,r,r,B.bT,r,r,r)
t=A.d(i,r,r,r,r,r,r,A.l(r,r,p?B.aP:B.av,r,r,r,r,r,r,r,r,14,r,r,B.H,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
return A.aH(!1,B.a2,!0,r,A.aO(!1,q,!0,A.p(r,A.x(A.a([s,B.ae,t,B.bF,A.d(h,r,r,r,r,r,r,A.l(r,r,p?B.bt:B.bm,r,r,r,r,r,r,r,r,11,r,r,r,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),B.E,r,B.e,B.i,0,B.p),B.f,r,r,new A.o(w,r,u,v,r,r,B.n),r,r,r,r,B.w0,r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,f,r,r,r,r,r,r,r),B.f,B.L,0,r,r,r,r,r,B.ai)},
a0m(d,e){return this.cgO(d,e)},
cgO(d,e){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a0m=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return A.b(A.bV(B.L,null,new C.eQK(t,e,d),r,!0,!0,!1,null,!1,!1,x.N),$async$a0m)
case 3:s=g
r=t.c
if(r==null||s==null){w=1
break}w=s==="transfer"?4:6
break
case 4:C.hz6(r,new C.eQL(t),t.a.c,d)
w=5
break
case 6:w=s==="delete"?7:8
break
case 7:w=9
return A.b(t.Oc(d,e),$async$a0m)
case 9:case 8:case 5:case 1:return A.h(u,v)}})
return A.i($async$a0m,v)},
b39(d,e,f,g,h,i,j){var w,v,u=null,t=f.j(0.12),s=A.n(12)
s=A.p(u,A.X(e,f,u,u,u,22),B.f,u,u,new A.o(t,u,u,s,u,u,B.n),u,u,u,u,B.bT,u,u,u)
if(d)t=B.ax
else t=h.a?B.aP:B.av
t=A.d(j,u,u,u,u,u,u,A.l(u,u,t,u,u,u,u,u,u,u,u,u,u,u,B.H,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)
w=h.a
v=x.p
t=A.E(A.x(A.a([t,A.d(i,u,u,u,u,u,u,A.l(u,u,w?B.bt:B.bm,u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],v),B.E,u,B.e,B.i,0,B.p),1)
return A.aH(!1,B.a2,!0,u,A.aO(!1,u,!0,new A.D(B.BU,A.B(A.a([s,B.bc,t,A.X(B.eE,w?B.bt:B.bm,u,u,u,u)],v),B.m,u,B.e,B.i,0,u,u),u),u,!0,u,u,u,u,u,u,u,u,u,u,u,g,u,u,u,u,u,u,u),B.f,B.L,0,u,u,u,u,u,B.ai)},
cnI(d,e,f,g,h,i){return this.b39(!1,d,e,f,g,h,i)},
Oc(d,e){return this.bJD(d,e)},
bJD(d,e){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Oc=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=d.b
w=5
return A.b(A.li(r,"Cancel","Delete","Remove \u201c"+s+"\u201d and all of its budget items from this device?","Delete project?"),$async$Oc)
case 5:w=g?3:4
break
case 3:w=6
return A.b(C.bCY(t.a.c,d.a),$async$Oc)
case 6:w=7
return A.b(t.vW(),$async$Oc)
case 7:r=t.c
if(r==null){w=1
break}r.K(x.q).f.U(A.b3(null,null,null,null,null,B.t,null,A.d("Deleted \u201c"+s+"\u201d",null,null,null,null,null,null,null,null,null,null),null,B.Z,null,null,null,null,null,null,null,null,null,null))
case 4:case 1:return A.h(u,v)}})
return A.i($async$Oc,v)},
B(d){var w,v,u,t,s,r,q=this,p=null,o=A.P(d).ax.a===B.J,n=new C.u7(o),m=o?B.c1:B.iy
if(q.f)o=D.baA
else{w=q.bE_(n)
v=q.c_8(n)
u=q.gbB6()
if(o)t=B.jK
else t=B.c
s=A.n(13)
r=x.p
u=A.a([w,B.ae,v,B.aQ,new C.FU(A.p(p,A.B(A.a([q.aC4(P.Ol,"Projects",n,D.ac2),q.aC4(B.wg,"Cashier",n,D.aZR),q.aC4(B.GQ,"Family Tree",n,D.htr)],r),B.m,p,B.e,B.i,0,p,p),B.f,p,p,new A.o(t,p,p,s,p,p,B.n),p,p,p,p,p,p,p,p),14,B.ev,0.95,u,p),B.bx],r)
w=q.d
if(w===D.ac2){w=J.ad(q.e)
B.d.v(u,A.a([A.B(A.a([A.d("Projects ("+w+")",p,p,p,p,p,p,A.l(p,p,o?B.aP:B.av,p,p,p,p,p,p,p,p,16,p,p,B.H,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),B.b1,new C.ay4(q.gaRw(),p)],r),B.m,p,B.e,B.i,0,p,p),B.aA,q.cnK(n)],r))}else{o=q.a
if(w===D.aZR)u.push(new C.ap4(o.c,n,p))
else{w=q.r
u.push(new C.aqd(o.c,o.d,o.e,o.f,new C.eR1(q),new C.eR2(q),new A.bU(w,x.b4)))}}o=A.cg(A.x(u,B.E,p,B.e,B.i,0,B.p),B.t,p,B.y,p,Am.NG,p,p,B.ah)}return A.c5(p,m,A.bm(!0,o,!0,!1,B.af,!0,!0),p,!1,!1,p,p)},
bE_(d){var w=null,v=A.n(8),u=d.a,t=A.X(Z.a0X,u?B.bt:B.bm,w,w,w,16)
return A.aO(!1,v,!0,new A.D(B.kI,A.B(A.a([t,B.bn,A.d("Back to Profile",w,w,w,w,w,w,A.l(w,w,u?B.bt:B.bm,w,w,w,w,w,w,w,w,14,w,w,B.a7,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),B.m,w,B.e,B.O,0,w,w),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.eQD(this),w,w,w,w,w,w,w)},
gbB6(){switch(this.d.a){case 0:return D.abe
case 1:return D.hir
case 2:return D.abf}},
c_8(d){var w=null,v=A.n(15),u=A.a([new A.ac(0,B.G,B.aW.j(0.35),B.cx,16)],x.V),t=x.p,s=A.B(A.a([A.p(w,D.bVQ,B.f,w,w,new A.o(B.c.j(0.22),w,w,A.n(12),w,w,B.n),w,44,w,w,w,w,w,44),B.bc,D.bFU,A.aH(!1,B.a2,!0,w,A.aO(!1,A.n(12),!0,A.p(w,D.bTf,B.f,w,w,new A.o(B.c.j(0.22),w,w,A.n(12),w,w,B.n),w,40,w,w,w,w,w,40),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.eQH(this,d),w,w,w,w,w,w,w),B.f,B.L,0,w,w,w,w,w,B.ai)],t),B.E,w,B.e,B.i,0,w,w),r=B.b0.j(0.55),q=A.n(12)
return new C.FU(A.p(w,A.x(A.a([new A.D(E.a_p,s,w),A.p(w,A.x(A.a([A.d("Total All Projects",w,w,w,w,w,w,A.l(w,w,B.c.j(0.85),w,w,w,w,w,w,w,w,12,w,w,B.a7,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.au,A.d(A.B1(this.gcDn()),w,w,w,w,w,w,D.fu5,w,w,w)],t),B.E,w,B.e,B.i,0,B.p),B.f,w,w,new A.o(r,w,w,q,w,w,B.n),w,w,w,B.ub,B.jf,w,w,1/0)],t),B.E,w,B.e,B.i,0,B.p),B.f,w,w,new A.o(B.aW,w,w,v,u,w,B.n),w,w,w,w,w,w,w,1/0),16,B.af,1,D.hiq,w)},
aC4(d,e,f,g){var w,v,u=null,t=this.d===g,s=A.n(12),r=t?B.aW:B.L,q=A.n(12),p=t?A.K(B.c.j(0.55),B.r,2):A.K(B.L,B.r,2),o=t?A.a([new A.ac(0.5,B.G,B.aW.j(0.42),B.cH,14)],x.V):u
if(t)w=B.c
else w=f.a?B.bt:B.bm
w=A.X(d,w,u,u,u,16)
if(t)v=B.c
else v=f.a?B.bt:B.bm
return A.E(A.aH(!1,B.a2,!0,u,A.aO(!1,s,!0,A.da(u,A.B(A.a([w,B.en,new A.dt(1,B.cp,A.d(e,u,1,B.a1,u,u,u,A.l(u,u,v,u,u,u,u,u,u,u,u,12,u,u,B.U,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u)],x.p),B.m,u,B.b9,B.i,0,u,u),u,u,B.ct,new A.o(r,u,p,q,o,u,B.n),B.iB,u,u,u,u,B.Gx,u,u,u),u,!0,u,u,u,u,u,u,u,u,u,u,u,new C.eQY(this,g),u,u,u,u,u,u,u),B.f,B.L,0,u,u,u,u,u,B.ai),1)},
cnK(d){var w,v,u,t,s,r,q=this,p=null
if(J.ct(q.e)){w=d.a
v=w?B.e3:B.c
u=A.n(15)
t=A.p(p,D.bTl,B.f,p,p,new A.o(p,p,p,p,A.a([new A.ac(2,B.G,B.aW.j(0.5),B.eU,28)],x.V),D.c4z,B.a6),p,108,p,p,p,p,p,108)
s=A.d("No Projects Yet",p,p,p,p,p,p,A.l(p,p,w?B.aP:B.av,p,p,p,p,p,p,p,p,18,p,p,B.H,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)
r=x.p
return new C.FU(A.p(p,A.x(A.a([t,B.d4,s,B.P,A.d("Create a new project, or import one someone shared with you.",p,p,p,p,p,p,A.l(p,p,w?B.bt:B.bm,p,p,p,p,p,p,p,p,14,p,p,p,p,1.4,!0,p,p,p,p,p,p,p,p),B.K,p,p),B.dT,A.B(A.a([A.E(q.aT5(B.jg,"Scan QR",new C.eQS(q),d),1),B.as,A.E(q.aT5(R.z4,"Upload file",new C.eQT(q),d),1)],r),B.m,p,B.e,B.i,0,p,p),B.aA,A.bH(D.fVA,p,q.gaRw(),A.bo(B.aW,p,p,p,B.c,B.h0,p,p,new A.b8(A.n(12),B.a0),p,p,p))],r),B.m,p,B.e,B.i,0,B.p),B.f,p,p,new A.o(v,p,p,u,p,p,B.n),p,p,p,p,p,p,p,1/0),16,D.bCu,1.05,D.abe,p)}w=J.b6(q.e,new C.eQU(q,d),x.l)
w=A.C(w,w.$ti.k("ak.E"))
return new C.FU(A.x(w,B.m,p,B.e,B.i,0,B.p),16,B.bT,1,D.abe,p)},
aT5(d,e,f,g){var w=null,v=B.aW.j(g.a?0.18:0.1),u=A.n(12),t=A.n(12),s=A.n(12),r=A.K(B.aW.j(0.45),B.r,1)
return A.aH(!1,B.a2,!0,u,A.aO(!1,t,!0,A.p(w,A.x(A.a([A.X(d,B.b0,w,w,w,26),B.P,A.d(e,w,w,w,w,w,w,D.fsp,B.K,w,w)],x.p),B.m,w,B.e,B.O,0,B.p),B.f,w,w,new A.o(w,w,r,s,w,w,B.n),w,w,w,w,B.ajX,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),B.f,v,0,w,w,w,w,w,B.ai)},
cnJ(d,e){var w,v,u=null,t=e.a,s=t?B.e3:B.c,r=A.n(14),q=A.K(t?B.e8:B.bO,B.r,1),p=A.a([new A.ac(0,B.G,B.w.j(t?0.35:0.08),B.em,10)],x.V),o=A.n(14),n=t?B.bt:B.bm
n=A.bx(B.WN,new A.fH(1.7777777777777777,C.aRj(!0,B.fL,1/0,P.Ol,n,d.c,1/0),u),B.ap)
w=x.p
v=A.E(A.x(A.a([A.d(d.b,u,u,u,u,u,u,A.l(u,u,t?B.aP:B.av,u,u,u,u,u,u,u,u,15,u,u,B.H,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),B.au,A.d(""+d.d.length+" budget items \xb7 "+A.B1(d.gxf()),u,u,u,u,u,u,D.fqn,u,u,u)],w),B.E,u,B.e,B.i,0,B.p),1)
return A.p(u,A.aH(!1,B.a2,!0,u,A.aO(!1,o,!0,A.x(A.a([n,new A.D(B.bE,A.B(A.a([v,A.aG(u,u,u,u,A.X(An.a1W,t?B.bt:B.bm,u,u,u,u),u,u,u,new C.eQQ(this,d,e),u,u,u,u,"Project options",u)],w),B.m,u,B.e,B.i,0,u,u),u)],w),B.E,u,B.e,B.i,0,B.p),u,!0,u,u,u,u,u,u,u,u,u,u,u,new C.eQR(this,d),u,u,u,u,u,u,u),B.f,B.L,0,u,u,u,u,u,B.ai),B.f,u,u,new A.o(s,u,q,r,p,u,B.n),u,u,u,B.ec,u,u,u,1/0)}}
C.bz2.prototype={}
C.rg.prototype={
ah(){var w=this,v=w.c,u=w.d
return A.H(["id",w.a,"name",w.b,"quantity",v,"unitPrice",u,"unitLabel",w.e,"price",v*u],x.N,x.z)},
gcX6(){var w,v,u,t,s=this.c
if(s===B.k.jj(s))w=B.o.u(B.k.N(s))
else{v=B.k.ac(s,2)
u=A.ag("\\.?0+$",!0,!1,!1,!1)
w=A.aL(v,u,"")}t=B.a.i(this.e)
if(t.length===0)t="each"
if(t==="each"||t==="pcs")return w+" \xd7"
return w+" "+t+" \xd7"}}
C.ly.prototype={
gxf(){return B.d.cI(this.d,0,new C.cCU())},
ah(){var w=this,v=w.d,u=A.T(v).k("N<1,a8<m,@>>")
v=A.C(new A.N(v,new C.cCT(),u),u.k("ak.E"))
return A.H(["id",w.a,"name",w.b,"thumbnailPath",w.c,"items",v,"createdAt",w.e.ae()],x.N,x.z)},
bdo(d,e){var w=this,v=e==null?w.c:e,u=d==null?w.d:d
return new C.ly(w.a,w.b,v,u,w.e)},
bd6(d){return this.bdo(d,null)},
Ta(d){return this.bdo(null,d)}}
C.HZ.prototype={
a6(){return"FamilyGender."+this.b}}
C.hV.prototype={
ah(){var w=this
return A.H(["id",w.a,"name",w.b,"gender",C.huM(w.c),"parentId",w.d,"spouseId",w.e,"photoPath",w.f,"notes",w.r,"birthDate",w.w,"birthPlace",w.x,"deathDate",w.y,"occupation",w.z,"birthOrder",w.Q,"hidden",w.as,"visibleChildrenCap",w.at],x.N,x.z)},
aER(d,e,f,g,h,i,j,k,l,m,n,o,p){var w=this,v=m==null?w.d:m,u=o==null?w.e:o,t=n==null?w.f:n
return new C.hV(w.a,j,h,v,u,t,k,d,f,g,l,e,i,p)}}
C.ali.prototype={
a6(){return"FamilyTreeAccessRole."+this.b}}
C.kO.prototype={
gapr(){var w=this.f
return new A.Z(w,new C.bRf(),A.T(w).k("Z<1>")).gL(0)},
ah(){var w=this,v=w.f,u=A.T(v).k("N<1,a8<m,@>>")
v=A.C(new A.N(v,new C.bRe(),u),u.k("ak.E"))
return A.H(["id",w.a,"name",w.b,"code",w.c,"isPrivate",w.d,"collaboratorEmails",w.e,"members",v,"createdAt",w.r.ae(),"visibleChildrenPerParent",w.w,"ownerEmail",w.x,"localRole",C.iam(w.y),"games",w.z],x.N,x.z)},
wA(d,e,f,g,h,i,j,k,l){var w=this,v=j==null?w.b:j,u=d==null?w.c:d,t=g==null?w.d:g,s=e==null?w.e:e,r=i==null?w.f:i,q=l==null?w.w:l,p=k==null?w.x:k,o=h==null?w.y:h,n=f==null?w.z:f
return new C.kO(w.a,v,u,t,s,r,w.r,q,p,o,n)},
bdn(d,e){var w=null
return this.wA(w,w,w,d,e,w,w,w,w)},
cMz(d,e,f,g,h,i,j){return this.wA(d,e,null,f,g,h,i,j,null)},
aEW(d,e){var w=null
return this.wA(w,w,w,w,d,w,w,e,w)},
cMB(d,e,f,g,h,i,j,k){return this.wA(d,e,null,f,g,h,i,j,k)},
cL3(d){var w=null
return this.wA(w,w,w,w,w,w,w,d,w)},
cLr(d){var w=null
return this.wA(w,w,w,w,w,w,w,w,d)},
bd0(d){var w=null
return this.wA(w,w,d,w,w,w,w,w,w)},
aEH(d){var w=null
return this.wA(w,w,w,w,w,d,w,w,w)},
cM5(d,e,f){var w=null
return this.wA(w,d,w,w,e,w,w,f,w)},
cKR(d){var w=null
return this.wA(w,w,w,d,w,w,w,w,w)},
cLE(d,e){var w=null
return this.wA(d,w,w,w,w,w,e,w,w)}}
C.cCV.prototype={
a6(){return"WrapAlignment."+this.b}}
C.cCW.prototype={
a6(){return"WrapCrossAlignment."+this.b}}
C.aHU.prototype={}
C.b9R.prototype={
bw(d){this.a=d.a
this.b=d.b},
cW(d){var w=new C.b9R()
w.a=this.a
w.b=this.b
return w},
u(d){return A.b0(this).u(0)+" first:"+this.a+" last:"+this.b}}
C.b9Q.prototype={
gws(){return!0},
gGg(){return this.z.b<this.b.length},
aUJ(d){switch(0){case 0:return d.a.c}},
aUq(d){switch(0){case 0:return d.a.d}},
bTx(d,e){switch(0){case 0:return new A.hR(d,e)}},
bSV(d,e,f){var w=e-f
switch(0){case 0:return d?w:0}},
hb(b4,b5,b6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=this,b2=b1.b,b3=b2.length
if(b3===0||b1.z.a>=b3){b1.a=new A.iK(0,0,B.o.E(0,b5.a,b5.b),B.o.E(0,b5.c,b5.d))
return}w=A.HK(b4)
switch(0){case 0:v=b5.b
u=new A.kL(0,v,0,1/0)
t=w===B.Uz
break}s=A.a([],x.gZ)
r=A.U(x.gF,x.S)
for(b3=b1.z,q=B.d.fL(b2,b3.a),p=q.length,o=b1.f,n=b1.w,m=0,l=0,k=0,j=0,i=0,h=0;h<q.length;q.length===p||(0,A.L)(q),++h){g=q[h]
g.hb(b4,u,!0)
f=b1.aUJ(g)
f.toString
e=b1.aUq(g)
e.toString
if(i>0&&k+o+f>v){m=Math.max(m,k)
l+=j
if(s.length!==0)l+=n
s.push(new C.aHU(k,j,i))
k=0
j=0
i=0}k+=f
if(i>0)k+=o
j=Math.max(j,e);++i
r.n(0,g,s.length)}if(i>0){m=Math.max(m,k)
l+=j
if(s.length!==0)l+=n
s.push(new C.aHU(k,j,i))}d=s.length
switch(0){case 0:q=b5.cA(new A.hR(m,l))
a0=q.a
a1=q.b
b1.a=new A.iK(0,0,a0,a1)
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
for(q=B.d.fL(b2,a2),f=q.length,h=0;h<q.length;q.length===f||(0,A.L)(q),++h){g=q[h]
if(r.h(0,g)!==a4)break;++a2
a8=b1.aUJ(g)
e=b1.aUq(g)
e.toString
a9=b1.bSV(!0,j,e)
if(t){a8.toString
a6-=a8}e=b1.bTx(a6,a3+a9)
b0=g.a
g.a=new A.iK(e.a,e.b,b0.c,b0.d)
if(t)a6-=o
else{a8.toString
a6+=a8+o}}a3-=n
a3=a3
b3.b=a2}},
h5(d){var w,v,u,t,s,r=this
r.ls(d)
w=d.b
w.ii()
v=A.ds()
u=r.a
v.ee(u.a,u.b,0,1)
w.pb(0,v)
for(u=r.z,u=B.d.ds(r.b,u.a,u.b),t=u.length,s=0;s<u.length;u.length===t||(0,A.L)(u),++s)u[s].h5(d)
w.nt(0)},
GJ(d,e){var w=this.z
w.a=e.a
w.b=e.b
w.a=e.b},
ii(){return this.z}}
C.bxi.prototype={}
var z=a.updateTypes(["aA<~>()","R(hV)","~()","R(kO)","R(nq)","a8<m,@>(kO)","G(kO,kO)","G(hV,hV)","m(hV)","kO(a8<@,@>)","R(ly)","nq(a8<@,@>)","a8<m,@>(nq)","R(uD)","uD()","G(hV)","ai<hV>()","R(zg)","a_r(Y)","m?(hV)","ex<m?>(hV)","aA<~>(ly)","R(rg)","a8<m,@>(hV)","hV(a8<@,@>)","G(ly,ly)","R(af9)","~(bb)","v(ow)","G(G,a9j)","R(qB<G>)","~(qB<G>)","Tb(Y)","R(Mf)","R(uC)","~(hV)","m(m)","Vx(Y)","Ta(Y)","adx(Y)","Zn(Y)","hV(hV)","cN(bA<m,G8>)","cN(Kp)","ZR(Y)","G?(hV)","hV()","R(Kp)","D(hV)","~(HZ)","ZN(Y)","v(HZ,m,a0)","R(af2)","bA<m,ai<a8<m,@>>>(m,ai<nq>)","ZP(Y)","+count,id,name(G,m,m)(kO)","m(kO)","a_M(Y)","a_N(Y)","R(lP)","lP()","YW(Y)","a1z(Y)","Zp(Y)","Zo(Y)","~(G)","~(m,ln?)","v(rg)","adS(Y)","~(md)","aA<~>([m?])","J(J,ly)","v(ly)","J(J,rg)","a8<m,@>(rg)","rg(a8<@,@>)","ai<ln>()","uC()","m(V)","ly(a8<@,@>)","cv(HY)","m(ly)","a8<m,@>(ly)","G(nq,nq)","kO(a8<m,@>)","kO(kO)"])
C.fIU.prototype={
$1(d){return d.a+" "+d.b},
$S:122}
C.fIT.prototype={
bmE(d){var w=0,v=A.j(x.T),u,t=this,s,r,q,p,o
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.a,r=null,q=0
case 3:if(!(q<2)){w=5
break}w=6
return A.b(A.r8(s,d,B.hS,"book",E.Ga),$async$$1)
case 6:p=f
o=p.b
if(o!=null&&B.a.i(o).length!==0){u=o
w=1
break}r=p.a
case 4:++q
w=3
break
case 5:throw A.W(r!=null&&A.Lp(r)?y.k:y.A)
case 1:return A.h(u,v)}})
return A.i($async$$1,v)},
$1(d){return this.bmE(d)},
$S:319}
C.fIV.prototype={
$1(d){return d.b},
$S:122}
C.fSn.prototype={
$1(d){var w=null
return A.eT(w,B.L,new H.PS(this.a,this.b,w),w,w,0,B.a_k,B.d8,w,w,w)},
$S:49}
C.fwP.prototype={
$1(d){return d!=null},
$S:219}
C.fwQ.prototype={
$1(d){var w
if(d!=null)w=Math.abs(d.a)<=1.5&&Math.abs(d.b)<=1.5
else w=!0
return w},
$S:219}
C.fwV.prototype={
$1(d){if(this.a)return new A.t(d.a*520,d.b*160)
return d},
$S:172}
C.fGD.prototype={
$4$bold$valueColor(d,e,f,g){var w=null,v=A.fd(d,w,w,w,A.hd(w,B.t0,w,w,w,w,w,w,w,B.dx,w,w,10.5,w,B.ew,w,!0,w,w,w,w),w),u=f?B.ew:B.wa
return new A.nZ(D.bxW,A.aa7(A.a([new A.fW(130,w,v),new A.zf(1,B.GJ,A.fd(e,w,w,w,A.hd(w,g==null?D.eoI:g,w,w,w,w,w,w,w,B.dx,w,w,11,w,u,w,!0,w,w,w,w),w))],x.Z),B.y5,B.lN))},
$2(d,e){return this.$4$bold$valueColor(d,e,!1,null)},
$3$bold(d,e,f){return this.$4$bold$valueColor(d,e,f,null)},
$S:1936}
C.fGC.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g="Missed days",f=A.vM(999)
f=A.xk(A.lK(h,A.fd("Cashier",h,h,h,A.hd(h,D.zZ,h,h,h,h,h,h,h,B.dx,h,h,10,h,B.ew,h,!0,h,h,h,h),h),h,new A.kM(D.eoz,h,f,B.hV,h),h,h,D.byq,h))
w=A.xk(A.fd("Debt receipt",h,h,h,A.hd(h,h,h,h,h,h,h,h,h,B.dx,h,h,22,h,B.ew,h,!0,h,h,h,h),h))
v=A.xk(A.fd(C.x2(new A.V(Date.now(),0,!1),!0),h,h,h,D.a9L,h))
u=A.vM(12)
t=i.b
s=B.a.i(t.b)
if(s.length===0)s="\u2014"
s=A.fd(s,h,h,h,A.hd(h,h,h,h,h,h,h,h,h,B.dx,h,h,14,h,B.ew,h,!0,h,h,h,h),h)
r=A.fd("Person who owes",h,h,h,D.a9L,h)
q=A.vM(10)
p=x.Z
u=A.lK(h,A.z9(A.a([s,new A.fW(h,2,h),r,new A.fW(h,10,h),A.lK(h,A.z9(A.a([A.fd("Amount owed",h,h,h,D.a9L,h),new A.fW(h,2,h),A.fd(A.B1(t.c),h,h,h,A.hd(h,D.zZ,h,h,h,h,h,h,h,B.dx,h,h,20,h,B.ew,h,!0,h,h,h,h),h)],p),B.rp,B.lN),h,new A.kM(B.pt,h,q,B.hV,h),h,h,D.bxD,1/0)],p),B.rp,B.lN),h,new A.kM(E.aKV,h,u,B.hV,h),h,h,D.bzx,1/0)
q=new A.nI(D.eoC,0.9,B.kZ)
r=A.vM(12)
s=i.c
o=s.$2("Original due",C.x2(t.r,!1))
n=s.$2("Current due",C.x2(t.f,!1))
m=i.d
l=new A.nI(m,1.1,B.kZ)
k=A.vM(8)
j=i.a
k=A.a([o,n,new A.fW(h,6,h),A.lK(h,A.xk(A.fd(t.gaLN(),h,h,h,A.hd(h,m,h,h,h,h,h,h,h,B.dx,h,h,11,h,B.ew,h,!0,0.5,h,h,h),h)),h,new A.kM(h,new A.pN(l,l,l,l),k,B.hV,h),h,h,D.byy,1/0),new A.fW(h,10,h),s.$4$bold$valueColor("Date paid",j.c,!0,j.b)],p)
if(t.x!=null&&i.e)k.push(s.$4$bold$valueColor(g,"None \u2014 paid on time",!0,D.zZ))
else{o=i.f
n=o.length
if(n===0)k.push(s.$4$bold$valueColor(g,"None yet",!0,D.zZ))
else{n=A.fd("Missed days ("+n+")",h,h,h,A.hd(h,B.t0,h,h,h,h,h,h,h,B.dx,h,h,10.5,h,B.ew,h,!0,h,h,h,h),h)
m=A.T(o).k("N<1,SK>")
o=A.C(new A.N(o,new C.fGB(),m),m.k("ak.E"))
B.d.v(k,A.a([new A.fW(h,4,h),n,new A.fW(h,6,h),new C.b9Q(5,5,new C.b9R(),o)],p))}}o=B.a.i(t.y)
if(o.length!==0)B.d.v(k,A.a([new A.fW(h,8,h),s.$2("Notes",o)],p))
f=A.a([f,new A.fW(h,8,h),w,new A.fW(h,3,h),v,new A.fW(h,16,h),u,new A.fW(h,10,h),A.lK(h,A.z9(k,B.y5,B.lN),h,new A.kM(h,new A.pN(q,q,q,q),r,B.hV,h),h,h,B.ak7,1/0)],p)
w=j.a
if(w!=null){v=new A.nI(B.Jl,1,B.kZ)
B.d.v(f,A.a([new A.fW(h,16,h),A.fd("Debtor signature",h,h,h,A.hd(h,B.t0,h,h,h,h,h,h,h,B.dx,h,h,10,h,B.ew,h,!0,h,h,h,h),h),new A.fW(h,6,h),A.lK(h,new A.Ig(w,B.WX,h,h),h,new A.kM(h,new A.pN(v,v,v,v),A.vM(6),B.hV,h),82,h,B.NL,1/0)],p))}f.push(new A.fW(h,18,h))
if(t.x!=null)w=i.e?"Payment was received on time.":"Payment was received after one or more missed days (shown in red)."
else w="This debt is still unpaid. Missed days appear in red when the due date has passed."
f.push(A.fd(w,h,h,h,D.fiS,h))
f.push(new A.fW(h,18,h))
f.push(A.xk(A.fd("NGMY.ORG",h,h,h,A.hd(h,D.zZ,h,h,h,h,h,h,h,B.dx,h,h,14,h,B.ew,h,!0,1.8,h,h,h),h)))
return f},
$S:426}
C.fGB.prototype={
$1(d){var w=null,v=new A.nI(D.Jm,0.7,B.kZ),u=A.vM(999)
return A.lK(w,A.fd(C.x2(d,!1),w,w,w,A.hd(w,D.Jm,w,w,w,w,w,w,w,B.dx,w,w,9.5,w,B.ew,w,!0,w,w,w,w),w),w,new A.kM(w,new A.pN(v,v,v,v),u,B.hV,w),w,w,D.bDV,w)},
$S:1937}
C.c6t.prototype={
$1(d){var w=null,v=B.bz.j(0.08),u=A.n(999),t=A.K(B.bz.j(0.28),B.r,1)
return A.p(w,A.d(C.x2(d,!1),w,w,w,w,w,w,D.fpS,w,w,w),B.f,w,w,new A.o(v,w,t,u,w,w,B.n),w,w,w,w,B.eI,w,w,w)},
$S:1938}
C.fSU.prototype={
$1(d){var w=null,v=A.aI(d,B.bZ,x.w).w,u=A.n(26),t=A.aG(w,w,w,w,D.bWM,w,w,w,new C.fSR(d),w,w,w,w,w,B.cc),s=this.a,r=this.b,q=B.c.j(0.28),p=x.p
return A.eT(w,B.L,new A.cU(new A.aZ(0,380,0,v.a.b*0.9),A.aH(!1,B.a2,!0,u,new A.D(B.a_8,A.x(A.a([new A.bM(B.a8,w,w,t,w),new A.dt(1,B.cp,A.cg(A.x(A.a([new A.er(new C.aZO(r,w),s),B.W,A.B(A.a([A.E(A.ew(B.zc,D.fRO,new C.fSS(s,r,d),A.di(w,w,w,w,w,w,w,w,w,B.c,w,w,B.fd,w,new A.b8(A.n(14),B.a0),new A.ay(q,1,B.r,-1),w,w,w,w)),1),B.ac,A.E(A.dl(B.a2y,D.fOc,new C.fST(r,d),A.bo(B.b0,w,w,w,B.c,w,B.fd,w,new A.b8(A.n(14),B.a0),w,w,w)),1)],p),B.m,w,B.e,B.i,0,w,w)],p),B.m,w,B.e,B.O,0,B.p),B.t,w,B.y,w,w,w,w,B.ah),w)],p),B.m,w,B.e,B.O,0,B.p),w),B.f,B.av,0,w,w,w,w,w,B.ai),w),w,w,0,As.a_y,B.d8,w,w,w)},
$S:49}
C.fSR.prototype={
$0(){A.a4(this.a,!1).O(null)
return null},
$S:0}
C.fSS.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:m=$.aV.al$.x.h(0,t.a)
m=m==null?null:m.gbd()
x.az.a(m)
if(m==null){w=1
break}w=4
return A.b(m.m6(2.5),$async$$0)
case 4:w=3
return A.b(e.hw(B.h9),$async$$0)
case 3:s=e
if(s==null){w=1
break}r=J.eS(B.dK.gaR(s))
m=t.b
q=B.a.i(m.b)
p=A.ag("[^a-zA-Z0-9_-]+",!0,!1,!1,!1)
o=A.aL(q,p,"_")
if(o.length>32)o=B.a.ar(o,0,32)
w=5
return A.b(A.ta(r,"ngmy_cashier_receipt_"+(o.length===0?m.a:o)+".png"),$async$$0)
case 5:n=e
m=t.c
if(m.e!=null)m.K(x.q).f.U(A.b3(null,null,null,null,null,B.t,null,A.d(n,null,null,null,null,null,null,null,null,null,null),null,B.Z,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.fST.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(C.fNe(u.a),$async$$0)
case 2:t=e
s=u.b
if(s.e!=null){s=s.K(x.q).f
s.U(A.b3(null,null,null,null,null,B.t,null,A.d(t?"Print dialog opened.":"Could not print receipt.",null,null,null,null,null,null,null,null,null,null),null,B.Z,null,null,null,null,null,null,null,null,null,null))}return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.fSM.prototype={
$1(d){var w=null,v=A.n(20),u=x.p,t=this.b
return A.eT(w,B.av,A.x(A.a([new A.D(D.bzl,A.B(A.a([A.E(A.d(this.a,w,w,w,w,w,w,B.n1,w,w,w),1),A.aG(w,w,w,w,B.lf,w,w,w,new C.fSK(d),w,w,w,w,w,w)],u),B.m,w,B.e,B.i,0,w,w),w),new A.dt(1,B.cp,new A.D(B.fj,A.bx(A.n(14),A.fT(t,B.A,w,w,B.ci,B.dz,!1,w,!1,w,w),B.ap),w),w),new A.D(B.Np,new A.a5(1/0,w,A.dl(B.op,D.aUR,new C.fSL(t,this.c,d),A.bo(B.b0,w,w,w,B.c,w,w,w,new A.b8(A.n(14),B.a0),w,w,w)),w),w)],u),B.m,w,B.e,B.O,0,B.p),w,w,w,B.NC,B.d8,w,new A.b8(v,B.a0),w)},
$S:49}
C.fSK.prototype={
$0(){A.a4(this.a,!1).O(null)
return null},
$S:0}
C.fSL.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(A.ta(u.a,u.b),$async$$0)
case 2:t=e
s=u.c
if(s.e!=null)s.K(x.q).f.U(A.b3(null,null,null,null,null,B.t,null,A.d(t,null,null,null,null,null,null,null,null,null,null),null,B.Z,null,null,null,null,null,null,null,null,null,null))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.fSY.prototype={
$1(d){var w=null,v=A.n(20),u=x.p,t=this.a,s=this.b
return A.eT(w,B.av,new A.D(D.bzt,A.x(A.a([A.B(A.a([D.bEZ,A.aG(w,w,w,w,B.lf,w,w,w,new C.fSW(d),w,w,w,w,w,w)],u),B.m,w,B.e,B.i,0,w,w),B.P,new A.er(A.bx(A.n(14),A.p(w,A.b4(w,w,w,new C.bc_(s.ax,w),B.aw),B.f,B.c,w,w,w,200,w,w,w,w,w,1/0),B.ap),t),B.ae,new A.a5(1/0,w,A.dl(B.op,D.aUR,new C.fSX(t,s,d),A.bo(B.b0,w,w,w,B.c,w,w,w,new A.b8(A.n(14),B.a0),w,w,w)),w)],u),B.m,w,B.e,B.O,0,B.p),w),w,w,w,w,B.d8,w,new A.b8(v,B.a0),w)},
$S:49}
C.fSW.prototype={
$0(){A.a4(this.a,!1).O(null)
return null},
$S:0}
C.fSX.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:n=$.aV.al$.x.h(0,t.a)
n=n==null?null:n.gbd()
x.az.a(n)
if(n==null){w=1
break}w=4
return A.b(n.m6(2.5),$async$$0)
case 4:w=3
return A.b(e.hw(B.h9),$async$$0)
case 3:s=e
if(s==null){w=1
break}n=t.b
r=B.a.i(n.b)
q=A.ag("[^a-zA-Z0-9_-]+",!0,!1,!1,!1)
p=A.aL(r,q,"_")
if(p.length>32)p=B.a.ar(p,0,32)
r=J.eS(B.dK.gaR(s))
w=5
return A.b(A.ta(r,"ngmy_cashier_signature_"+(p.length===0?n.a:p)+".png"),$async$$0)
case 5:o=e
n=t.c
if(n.e!=null)n.K(x.q).f.U(A.b3(null,null,null,null,null,B.t,null,A.d(o,null,null,null,null,null,null,null,null,null,null),null,B.Z,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.fB9.prototype={
$1(d){return d.a===this.a},
$S:243}
C.dMv.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.dMg.prototype={
blS(d,e){var w=0,v=A.j(x.H),u=this,t,s,r,q,p
var $async$$2=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:q=u.b
p=q.c
p.toString
t=q.a.d.a?B.e3:B.c
s=u.a
w=2
return A.b(A.bV(t,null,new C.dMj(s,q,e),p,!0,!0,!1,B.JC,!1,!1,x.N),$async$$2)
case 2:r=g
if(r!=null)d.$1(new C.dMk(s,r))
return A.h(null,v)}})
return A.i($async$$2,v)},
$2(d,e){return this.blS(d,e)},
$S:1939}
C.dMj.prototype={
$1(d){var w,v=null,u=this.c===B.wK,t=u?D.do1:D.djE
u=u?"Male":"Female"
w=this.b
u=A.d("Choose "+u.toLowerCase()+" icon",v,v,v,v,v,v,A.l(v,v,w.a.d.a?B.aP:B.av,v,v,v,v,v,v,v,v,15,v,v,B.H,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
return A.bm(!0,new A.D(O.akE,A.x(A.a([u,B.au,A.d("Default is already set \u2014 pick another if you want.",v,v,v,v,v,v,A.l(v,v,w.a.d.a?B.bt:B.bm,v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),B.ae,A.io(!0,v,v,B.y,D.f9s,new C.dMi(this.a,w,t,d),t.length,v,B.dS,B.ah,!0)],x.p),B.ak,v,B.e,B.O,0,B.p),v),!0,!1,B.af,!0,!0)},
$S:27}
C.dMi.prototype={
$2(d,e){var w,v,u,t=this,s=null,r=t.c[e],q=r===t.a.e,p=A.n(14)
if(q)w=B.cR.j(0.14)
else w=t.b.a.d.a?B.N:B.aP
v=A.n(14)
if(q)u=B.cR
else u=(t.b.a.d.a?B.bt:B.bm).j(0.16)
u=A.K(u,B.r,q?1.6:1)
return A.aO(!1,p,!0,A.p(B.A,C.aZN(r,26),B.f,s,s,new A.o(w,s,u,v,s,s,B.n),s,s,s,s,s,s,s,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,new C.dMh(t.d,r),s,s,s,s,s,s,s)},
$S:196}
C.dMh.prototype={
$0(){A.a4(this.a,!1).O(this.b)
return null},
$S:0}
C.dMk.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.dMe.prototype={
$3(d,e,f){return B.bJ},
$C:"$3",
$R:3,
$S:93}
C.dMf.prototype={
$4(d,e,f,g){var w=this,v=null,u=x.X,t=A.cK(B.ct,e,v)
return new A.d1(e,!1,A.iu(B.A,A.au(A.aH(!1,B.a2,!0,v,new A.e0(new C.dMd(w.a,w.b,w.c,w.d,w.e,w.f,w.r,w.w),v),B.f,B.L,0,v,v,v,v,v,B.ai),v,v,v),v,new A.bg(t,new A.bp(0.96,1,u),u.k("bg<bO.T>"))),v)},
$S:33}
C.dMd.prototype={
$2(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=A.aI(d,B.bZ,x.w).w,i=l.b,h=i.a.d.a,g=h?B.e3:B.c,f=A.n(14),e=A.K((h?B.bt:B.bm).j(0.16),B.r,1)
h=l.c==null
w=h?"Add person":"Edit"
w=A.E(A.d(w,k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.aP:B.av,k,k,k,k,k,k,k,k,16,k,k,B.H,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),1)
v=A.n(8)
u=x.p
v=A.B(A.a([w,A.aO(!1,v,!0,new A.D(B.ev,A.X(B.cz,i.a.d.a?B.bt:B.bm,k,k,k,20),k),k,!0,k,k,k,k,k,k,k,k,k,k,k,new C.dLZ(d),k,k,k,k,k,k,k)],u),B.m,k,B.e,B.i,0,k,k)
w=l.d
t=A.l(k,k,i.a.d.a?B.aP:B.av,k,k,k,k,k,k,k,k,14,k,k,B.a7,k,k,!0,k,k,k,k,k,k,k,k)
s=i.aTC("Name")
r=l.a
q=r.d==null?k:new C.dM_(r,l.e,a0)
p=A.n(20)
o=i.a.d.a?B.bo:B.m3
n=A.K(B.cR.j(0.35),B.r,1)
m=r.d
t=A.aM(k,B.Y,h,k,!0,B.t,k,A.aN(),w,k,k,k,k,k,2,s.bdg(new A.D(B.fB,A.aO(!1,p,!0,A.p(B.A,C.aZN(m==null?"\ud83d\udc64":A.fHr(r.e,m),18),B.f,k,k,new A.o(o,k,n,k,k,k,B.a6),k,34,k,B.cm,k,k,k,34),k,!0,k,k,k,k,k,k,k,k,k,k,k,q,k,k,k,k,k,k,k),k)),B.y,!0,k,!0,k,!1,k,B.aj,k,k,k,k,k,k,k,k,k,1,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,B.aa,k,k,k,k,k,k,k,k,k,k,k,t,!0,B.a4,k,B.kV,k,B.a9A,k,k)
v=A.a([v,B.ae,t,B.P,A.d("Gender (required)",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.bt:B.bm,k,k,k,k,k,k,k,k,11.5,k,k,B.U,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),B.am,A.B(A.a([A.E(i.aUg("\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1","Male",new C.dM0(r,a0),r.d===B.wK),1),B.ac,A.E(i.aUg("\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1","Female",new C.dM5(r,a0),r.d===B.a6p),1)],u),B.m,k,B.e,B.i,0,k,k)],u)
if(r.d!=null)B.d.v(v,A.a([B.P,new A.bM(B.a5,k,k,A.hs(D.bV4,D.fQ4,new C.dM6(r,l.e,a0),A.fw(k,k,k,k,k,k,k,k,k,k,k,B.cR,k,k,k,k,k,k,k,k,k,k,k,k,k,B.cc)),k)],u))
v.push(B.W)
t=A.l(k,k,i.a.d.a?B.aP:B.av,k,k,k,k,k,k,k,k,14,k,k,B.a7,k,k,!0,k,k,k,k,k,k,k,k)
s=A.a([new A.uG(A.ag("[0-9.]",!0,!1,!1,!1),!0,"")],x.aS)
v.push(A.aM(k,B.Y,!1,k,!0,B.t,k,A.aN(),l.f,k,k,k,k,k,2,i.aTD("Amount","$ "),B.y,!0,k,!0,k,!1,k,B.aj,k,k,s,k,k,B.e1,k,k,k,1,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,B.aa,k,k,k,k,k,k,k,k,k,k,k,t,!0,B.a4,k,B.ao,k,k,k,k))
v.push(B.W)
t=i.a.d.a
s=t?B.N:B.aP
q=A.n(10)
p=A.n(10)
o=A.n(10)
n=A.K((t?B.bt:B.bm).j(0.22),B.r,1)
t=A.d("Pay by",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.bt:B.bm,k,k,k,k,k,k,k,k,11,k,k,B.a7,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)
m=C.x2(r.a,!1)
v.push(A.aH(!1,B.a2,!0,q,A.aO(!1,p,!0,A.p(k,A.B(A.a([A.E(A.x(A.a([t,B.bF,A.d(m,k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.aP:B.av,k,k,k,k,k,k,k,k,14,k,k,B.U,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)],u),B.E,k,B.e,B.i,0,B.p),1),D.bRN],u),B.m,k,B.e,B.i,0,k,k),B.f,k,k,new A.o(k,k,n,o,k,k,B.n),k,k,k,k,B.bg,k,k,k),k,!0,k,k,k,k,k,k,k,k,k,k,k,new C.dM7(r,d,a0),k,k,k,k,k,k,k),B.f,s,0,k,k,k,k,k,B.ai))
if(!h)B.d.v(v,A.a([B.P,A.d("Extending keeps missed days already counted.",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.bt:B.bm,k,k,k,k,k,k,k,k,11,k,k,k,k,1.3,!0,k,k,k,k,k,k,k,k),k,k,k)],u))
v.push(B.W)
t=A.l(k,k,i.a.d.a?B.aP:B.av,k,k,k,k,k,k,k,k,13,k,k,k,k,k,!0,k,k,k,k,k,k,k,k)
v.push(A.aM(k,B.Y,!1,k,!0,B.t,k,A.aN(),l.r,k,k,k,k,k,2,i.aTC("Note (optional)"),B.y,!0,k,!0,k,!1,k,B.aj,k,k,k,k,k,k,k,k,k,2,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,B.aa,k,k,k,k,k,k,k,k,k,k,k,t,!0,B.a4,k,B.ao,k,k,k,k))
v.push(B.ae)
v.push(A.d("Optional verification",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.aP:B.av,k,k,k,k,k,k,k,k,12.5,k,k,B.H,k,k,!0,k,k,k,k,k,k,k,k),k,k,k))
v.push(A.d("ID photo, selfie, and signature from the person who owes you \u2014 all optional.",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.bt:B.bm,k,k,k,k,k,k,k,k,11,k,k,k,k,1.3,!0,k,k,k,k,k,k,k,k),k,k,k))
v.push(i.b1w(r.b.length!==0,B.mL,new C.dM8(r,i,a0),new C.dM9(r,a0),"Upload from gallery","ID photo"))
v.push(i.b1w(r.c.length!==0,D.bL8,new C.dMa(r,i,d,a0),new C.dMb(r,a0),"Camera or gallery","Selfie"))
v.push(B.P)
t=l.w
v.push(new Ar.a7X("Signature (optional)",t,new C.dMc(a0),new C.dM1(a0,t),new C.dM2(d,t,a0),k))
v.push(B.aA)
i=i.a.d.a
t=i?B.bt:B.bm
s=(i?B.bt:B.bm).j(0.28)
s=A.E(A.dT(E.aUK,new C.dM3(d),A.di(k,k,k,k,k,k,k,k,k,t,k,k,B.u7,k,new A.b8(A.n(10),B.a0),new A.ay(s,1,B.r,-1),k,k,k,k)),1)
t=A.bo(B.cR,k,k,k,B.c,k,B.u7,k,new A.b8(A.n(10),B.a0),k,k,k)
v.push(A.B(A.a([s,B.ac,A.E(A.bH(A.d(h?"Save":"Update",k,k,k,k,k,k,B.vk,k,k,k),k,new C.dM4(r,w,d),t),1)],u),B.m,k,B.e,B.i,0,k,k))
return A.p(k,A.cg(A.x(v,B.ak,k,B.e,B.O,0,B.p),B.t,k,B.y,k,k,k,k,B.ah),B.f,k,new A.aZ(0,1/0,0,j.a.b*0.88),new A.o(g,k,e,f,k,k,B.n),k,k,k,B.rw,B.jf,k,k,360)},
$S:171}
C.dLZ.prototype={
$0(){A.a4(this.a,!1).O(!1)
return null},
$S:0}
C.dM_.prototype={
$0(){var w=this.a.d
w.toString
return this.b.$2(this.c,w)},
$S:0}
C.dM0.prototype={
$0(){return this.b.$1(new C.dLY(this.a))},
$S:0}
C.dLY.prototype={
$0(){var w=this.a
w.d=B.wK
w.e="\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1"},
$S:0}
C.dM5.prototype={
$0(){return this.b.$1(new C.dLX(this.a))},
$S:0}
C.dLX.prototype={
$0(){var w=this.a
w.d=B.a6p
w.e="\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1"},
$S:0}
C.dM6.prototype={
$0(){var w=this.a.d
w.toString
return this.b.$2(this.c,w)},
$S:0}
C.dM7.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.a
w=2
return A.b(A.x6(null,u.b,A.c6(2020,1,1,0,0,0,0,0),null,s,A.c6(2100,1,1,0,0,0,0,0)),$async$$0)
case 2:r=e
if(r!=null)u.c.$1(new C.dLW(t,r))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dLW.prototype={
$0(){var w=this.b
return this.a.a=A.c6(w.gck(),w.gcg(),w.gcw(),0,0,0,0,0)},
$S:0}
C.dM8.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(u.b.PN(!1),$async$$0)
case 2:t=e
if(t!=null)u.c.$1(new C.dLV(u.a,t))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dLV.prototype={
$0(){return this.a.b=this.b},
$S:0}
C.dM9.prototype={
$0(){return this.b.$1(new C.dLU(this.a))},
$S:0}
C.dLU.prototype={
$0(){return this.a.b=""},
$S:0}
C.dMa.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.b
q=r.a.d.a?B.e3:B.c
w=3
return A.b(A.bV(q,null,new C.dLS(),t.c,!0,!0,!1,null,!1,!1,x.N),$async$$0)
case 3:p=e
if(p==null){w=1
break}w=4
return A.b(r.PN(p==="camera"),$async$$0)
case 4:s=e
if(s!=null)t.d.$1(new C.dLT(t.a,s))
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.dLS.prototype={
$1(d){var w=null
return A.bm(!0,A.x(A.a([A.dG(!1,w,w,w,!0,w,w,w,!0,w,w,B.aq_,w,w,w,w,new C.dLM(d),!1,w,w,w,w,w,w,w,D.fGd,w,w,w),A.dG(!1,w,w,w,!0,w,w,w,!0,w,w,B.apY,w,w,w,w,new C.dLN(d),!1,w,w,w,w,w,w,w,D.fNd,w,w,w)],x.p),B.m,w,B.e,B.O,0,B.p),!0,!1,B.af,!0,!0)},
$S:27}
C.dLM.prototype={
$0(){A.a4(this.a,!1).O("camera")
return null},
$S:0}
C.dLN.prototype={
$0(){A.a4(this.a,!1).O("gallery")
return null},
$S:0}
C.dLT.prototype={
$0(){return this.a.c=this.b},
$S:0}
C.dMb.prototype={
$0(){return this.b.$1(new C.dLR(this.a))},
$S:0}
C.dLR.prototype={
$0(){return this.a.c=""},
$S:0}
C.dMc.prototype={
$0(){return this.a.$1(new C.dLQ())},
$S:0}
C.dLQ.prototype={
$0(){},
$S:0}
C.dM1.prototype={
$0(){return this.a.$1(new C.dLP(this.b))},
$S:0}
C.dLP.prototype={
$0(){return B.d.aa(this.a)},
$S:0}
C.dM2.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.b
w=2
return A.b(A.ai5(u.a,null,null,new C.dLO(u.c,t),t,"Debtor signature"),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dLO.prototype={
$4(d,e,f,g){this.a.$1(new C.dLL(this.b,d))},
$S:427}
C.dLL.prototype={
$0(){var w=this.a
B.d.aa(w)
B.d.v(w,this.b)},
$S:0}
C.dM3.prototype={
$0(){A.a4(this.a,!1).O(!1)
return null},
$S:0}
C.dM4.prototype={
$0(){var w=this
if(B.a.i(w.b.a.a).length===0){w.c.K(x.q).f.U(D.few)
return}if(w.a.d==null){w.c.K(x.q).f.U(D.fbp)
return}A.a4(w.c,!1).O(!0)},
$S:0}
C.dMy.prototype={
$3(d,e,f){return B.bJ},
$C:"$3",
$R:3,
$S:93}
C.dMz.prototype={
$4(d,e,f,g){var w,v,u,t,s,r=null,q=this.a,p=q.a.d.a,o=p?B.e3:B.c,n=A.n(14),m=A.K((p?B.bt:B.bm).j(0.16),B.r,1)
p=A.d("Mark paid?",r,r,r,r,r,r,A.l(r,r,q.a.d.a?B.aP:B.av,r,r,r,r,r,r,r,r,16,r,r,B.H,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
w=this.b
v=w.b
u=A.B1(w.c)
v=A.d(v+" \xb7 "+u,r,r,r,r,r,r,A.l(r,r,q.a.d.a?B.bt:B.bm,r,r,r,r,r,r,r,r,13,r,r,B.a7,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
u=w.zg(r).length
u=A.d("Missed days: "+u,r,r,r,r,r,r,A.l(r,r,w.zg(r).length>0?B.bz:B.cR,r,r,r,r,r,r,r,r,12,r,r,B.U,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
q=q.a.d.a
w=q?B.bt:B.bm
t=(q?B.bt:B.bm).j(0.28)
s=x.p
return new A.d1(e,!1,A.au(A.aH(!1,B.a2,!0,r,A.p(r,A.x(A.a([p,B.P,v,u,B.aA,A.B(A.a([A.E(A.dT(B.nL,new C.dMw(d),A.di(r,r,r,r,r,r,r,r,r,w,r,r,B.jQ,r,new A.b8(A.n(10),B.a0),new A.ay(t,1,B.r,-1),r,r,r,r)),1),B.ac,A.E(A.bH(D.fND,r,new C.dMx(d),A.bo(B.cR,r,r,r,B.c,r,B.jQ,r,new A.b8(A.n(10),B.a0),r,r,r)),1)],s),B.m,r,B.e,B.i,0,r,r)],s),B.ak,r,B.e,B.O,0,B.p),B.f,r,r,new A.o(o,r,m,n,r,r,B.n),r,r,r,B.BX,E.a_p,r,r,300),B.f,B.L,0,r,r,r,r,r,B.ai),r,r,r),r)},
$S:33}
C.dMw.prototype={
$0(){A.a4(this.a,!1).O(!1)
return null},
$S:0}
C.dMx.prototype={
$0(){A.a4(this.a,!1).O(!0)
return null},
$S:0}
C.dMs.prototype={
$1(d){var w,v,u,t,s=null,r=this.a,q=new C.dMt(r),p=r.a.d.a,o=p?B.e3:B.c,n=A.n(14),m=A.K((p?B.bt:B.bm).j(0.14),B.r,1),l=this.b,k=l.b
p=x.p
k=A.B(A.a([A.E(A.d(k,s,1,B.a1,s,s,s,A.l(s,s,r.a.d.a?B.aP:B.av,s,s,s,s,s,s,s,s,14,s,s,B.H,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),1),A.d(A.B1(l.c),s,s,s,s,s,s,D.frq,s,s,s)],p),B.m,s,B.e,B.i,0,s,s)
w=A.iH((r.a.d.a?B.bt:B.bm).j(0.12),s,1,s,s,s)
v=q.$3$icon$label$onTap(B.a1h,"View receipt",new C.dMl(r,d,l))
u=l.x!=null
t=u?B.qx:B.qq
u=u?"Mark unpaid":"Mark paid"
p=A.a([new A.D(D.bzq,k,s),w,v,q.$3$icon$label$onTap(t,u,new C.dMm(r,d,l)),q.$3$icon$label$onTap(B.C8,"Edit",new C.dMn(r,d,l))],p)
if(B.a.i(l.as).length!==0)p.push(q.$3$icon$label$onTap(B.mL,"View / download ID",new C.dMo(r,d,l)))
if(B.a.i(l.at).length!==0)p.push(q.$3$icon$label$onTap(D.bL7,"View / download selfie",new C.dMp(r,d,l)))
if(l.gaGy())p.push(q.$3$icon$label$onTap(Af.a2o,"View / download signature",new C.dMq(r,d,l)))
p.push(q.$4$color$icon$label$onTap(B.bz,B.e9,"Delete",new C.dMr(r,d,l)))
p.push(B.au)
return A.bm(!0,new A.D(B.ub,A.p(s,A.x(p,B.m,s,B.e,B.O,0,B.p),B.f,s,s,new A.o(o,s,m,n,s,s,B.n),s,s,s,s,s,s,s,s),s),!0,!1,B.af,!0,!0)},
$S:27}
C.dMt.prototype={
$4$color$icon$label$onTap(d,e,f,g){var w,v=null
if(d==null)w=this.a.a.d.a?B.aP:B.av
else w=d
return A.aO(!1,v,!0,new A.D(B.eS,A.B(A.a([A.X(e,w,v,v,v,20),B.bc,A.d(f,v,v,v,v,v,v,A.l(v,v,w,v,v,v,v,v,v,v,v,14,v,v,B.U,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),B.m,v,B.e,B.i,0,v,v),v),v,!0,v,v,v,v,v,v,v,v,v,v,v,g,v,v,v,v,v,v,v)},
$3$icon$label$onTap(d,e,f){return this.$4$color$icon$label$onTap(null,d,e,f)},
$S:1940}
C.dMl.prototype={
$0(){A.a4(this.b,!1).O(null)
var w=this.a.c
w.toString
C.fSQ(w,this.c)},
$S:0}
C.dMm.prototype={
$0(){A.a4(this.b,!1).O(null)
this.a.Sw(this.c)},
$S:0}
C.dMn.prototype={
$0(){A.a4(this.b,!1).O(null)
this.a.Dj(this.c)},
$S:0}
C.dMo.prototype={
$0(){var w,v,u
A.a4(this.b,!1).O(null)
w=this.a.c
w.toString
v=this.c
u=v.b
C.bF3(w,v.as,"ngmy_cashier_id_"+v.a+".jpg","ID photo \xb7 "+u)},
$S:0}
C.dMp.prototype={
$0(){var w,v,u
A.a4(this.b,!1).O(null)
w=this.a.c
w.toString
v=this.c
u=v.b
C.bF3(w,v.at,"ngmy_cashier_selfie_"+v.a+".jpg","Selfie \xb7 "+u)},
$S:0}
C.dMq.prototype={
$0(){A.a4(this.b,!1).O(null)
var w=this.a.c
w.toString
C.fSV(w,this.c)},
$S:0}
C.dMr.prototype={
$0(){A.a4(this.b,!1).O(null)
this.a.PM(0,this.c)},
$S:0}
C.dMA.prototype={
$1(d){return d.x==null},
$S:243}
C.dMB.prototype={
$1(d){return d.x!=null},
$S:243}
C.dMC.prototype={
$2(d,e){return d+e.c},
$S:1941}
C.dMD.prototype={
$0(){return this.a.bBB()},
$S:0}
C.dMu.prototype={
$0(){return this.a.afH(this.b)},
$S:0}
C.fBN.prototype={
$1(d){return d.a===this.a},
$S:z+34}
C.fBO.prototype={
$0(){return B.d.gI(D.a3J)},
$S:z+77}
C.dcl.prototype={
$0(){var w=this.a
return w.m(new C.dcj(w,this.b))},
$S:0}
C.dcj.prototype={
$0(){return this.a.d=this.b.a},
$S:0}
C.dck.prototype={
$0(){},
$S:0}
C.dcm.prototype={
$0(){var w=this.a.gc_T()
A.a4(this.b,!1).O(w)
return null},
$S:0}
C.fEa.prototype={
$1(d){return C.hfk(A.a2(d,x.N,x.z))},
$S:z+11}
C.fEb.prototype={
$1(d){return d.a.length!==0},
$S:z+4}
C.fEc.prototype={
$2(d,e){var w=A.cc(d.a,null),v=A.cc(e.a,null)
if(w!=null&&v!=null)return B.o.aL(w,v)
return d.d.aL(0,e.d)},
$S:z+83}
C.fRt.prototype={
$1(d){return d.ah()},
$S:z+12}
C.fZP.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.fB0.prototype={
$1(d){return d.a===this.a},
$S:z+4}
C.bPX.prototype={
$2(d,e){var w=this.a.h(0,d),v=w==null?null:B.a.i(J.k(w)).toLowerCase()
return v!=null&&J.f0(e,v)?v:null},
$S:1942}
C.fS1.prototype={
$1(d){var w=this
return new C.ZP(w.a,w.b,w.c,w.d,w.e,w.f,null)},
$S:z+54}
C.dd0.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.dd_(w,d))},
$S:z+80}
C.dd_.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.dcP.prototype={
$0(){var w,v=this.a,u=this.b
v.d=u
w=v.e=!1
if(J.cL(u)?v.r>=J.ad(v.d):w)v.r=J.ad(v.d)-1},
$S:0}
C.dcM.prototype={
$0(){var w=this.a
w.r=this.b-1
w.w=w.x
w.x=!1},
$S:0}
C.dcn.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.dco.prototype={
$0(){var w=this.a
w.r=this.b
w.x=w.w=!0},
$S:0}
C.dcQ.prototype={
$0(){return this.a.w=!1},
$S:0}
C.dcw.prototype={
$1(d){var w=null,v=A.P(d).ax.a===B.J,u=v?B.e3:B.c,t=A.d("Remove this page?",w,w,w,w,w,w,A.l(w,w,v?B.aP:B.av,w,w,w,w,w,w,w,w,w,w,w,B.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),s=A.d("\u201c"+this.a.b+"\u201d will be deleted from this device.",w,w,w,w,w,w,A.l(w,w,v?B.bt:B.bm,w,w,w,w,w,w,w,w,w,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)
return A.ep(A.a([A.bN(!1,B.di,w,w,!0,w,w,w,new C.dcu(d),w,w),A.bH(B.x6,w,new C.dcv(d),A.bo(B.nb,w,w,w,w,w,w,w,w,w,w,w))],x.p),w,w,u,s,w,w,w,w,t,w)},
$S:19}
C.dcu.prototype={
$0(){A.a4(this.a,!1).O(!1)
return null},
$S:0}
C.dcv.prototype={
$0(){A.a4(this.a,!1).O(!0)
return null},
$S:0}
C.dcx.prototype={
$0(){var w=this.a
w.w=!1
w.r=B.o.E(w.r-1,-1,999)},
$S:0}
C.dcN.prototype={
$1(d){return d.a===this.a.y.a},
$S:z+13}
C.dcO.prototype={
$0(){return B.d.gI(D.zo)},
$S:z+14}
C.dcs.prototype={
$1(d){var w=this.a,v=w.y,u=w.gyC(0),t=J.ad(w.d)
w=J.ad(w.d)===1?"page":"pages"
return new C.Ta(v.Q,u,"Family Book \xb7 "+t+" "+w,null)},
$S:z+38}
C.dct.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.dcy.prototype={
$1(d){var w=this.a,v=w.y,u=B.a.i(w.a.r)
if(u.length===0)u="Our Family Book"
return new C.Zn(v,u,J.ad(w.d),null)},
$S:z+40}
C.dcz.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.dcZ.prototype={
$2(d,e){var w,v,u,t,s=null,r=this.a,q=r.f
q===$&&A.c()
if(e===0)w=A.aB(s,new C.Z4(r.y,r.gyC(0),J.ad(r.d),s),B.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new C.dcX(r),s,s,s,s,s,s,!1,B.a3)
else{w=e-1
v=J.r(r.d,w)
J.ad(r.d)
w=w===r.r&&r.w&&r.a.f
u=r.z
u===$&&A.c()
t=r.Q
t===$&&A.c()
t=new C.bbn(v,e,w,u,t,r.gbS_(),C.huL(r.y.Q),r.gyC(0),s)
w=t}return A.cb(q,new C.dcY(r,e),new A.D(B.a_q,w,s))},
$S:1943}
C.dcY.prototype={
$2(d,e){var w,v,u=this.a,t=u.f
t===$&&A.c()
t=t.f
if(t.length!==0&&B.d.gd2(t).ay){t=this.b
u=x.cy.a(B.d.gd2(u.f.f)).gv2(0)
w=t-(u==null?t:u)}else w=0
v=B.k.E(w,-1,0)
u=A.ds()
t=u.a
t.$flags&2&&A.aj(t)
t[11]=0.0013
u.fI(v*3.141592653589793*0.5)
return A.fy(B.a5,A.db(e,B.k.E(1+v*0.5,0,1)),null,u,!0)},
$S:45}
C.dcX.prototype={
$0(){var w=this.a.f
w===$&&A.c()
return w.aHE(B.q8,B.iT)},
$S:0}
C.dcJ.prototype={
$0(){var w=this.a
return w.m(new C.dcI(w))},
$S:0}
C.dcI.prototype={
$0(){return this.a.w=!0},
$S:0}
C.dcK.prototype={
$0(){var w=this.a.c
w.toString
A.a4(w,!1).O(null)
return null},
$S:0}
C.dcp.prototype={
$1(d){var w,v,u=null,t=A.n(26),s=E.kb.j(0.5),r=x.p,q=A.a([D.fEO,B.ae],r),p=this.a
if(B.a.i(p.a.x).length!==0){w=J.ct(p.d)?"Write this book":"Write a new book"
q.push(p.Zr(d,B.e5,w,J.ct(p.d)?"Choose English or Swahili, then describe the book":"A brand new book for your shelf. Choose English or Swahili, then describe it","write"))}if(p.a.f)q.push(p.Zr(d,I.anP,"Fix or change something","Correct a word, rewrite a page, add to it, or redesign the cover","fix"))
if(J.cL(p.d)){r=A.a([],r)
w=this.b
v=w==="en"
if(v)r.push(new A.D(B.cu,A.d("Your book is in English.",u,u,u,u,u,u,A.l(u,u,D.kC.j(0.7),u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u))
w=w==="sw"
if(w)r.push(new A.D(B.cu,A.d("Your book is in Swahili.",u,u,u,u,u,u,A.l(u,u,D.kC.j(0.7),u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u))
if(w)r.push(p.Zr(d,X.aoY,"Make my Swahili sound natural","A native-speaker editor rewrites every page so it reads like real Swahili","polish"))
if(!w)r.push(p.Zr(d,B.qv,"Translate my book to Swahili","Every page, from English into Kiswahili","sw"))
if(!v)r.push(p.Zr(d,B.qv,"Translate my book to English","Every page, from Swahili into English","en"))
B.d.v(q,r)}return A.eT(u,E.Bp,A.bm(!0,new A.D(Ae.yp,A.x(q,B.E,u,B.e,B.O,0,B.p),u),!0,!1,B.af,!0,!0),u,u,u,D.al3,B.d8,u,new A.b8(t,new A.ay(s,1.4,B.r,-1)),u)},
$S:49}
C.dcL.prototype={
$0(){A.a4(this.a,!1).O(this.b)
return null},
$S:0}
C.dcC.prototype={
$1(d){var w=this.a,v=w.r>=0&&J.cL(w.d)
return new C.ZR(v,J.cL(w.d),w.r+1,null)},
$S:z+44}
C.dcD.prototype={
$1(d){var w=null
return A.oC(!1,A.ep(w,w,w,E.Bp,new A.jV(this.a,new C.dcB(),w,w,x.cI),w,w,w,w,w,w),w,x.z)},
$S:334}
C.dcB.prototype={
$3(d,e,f){var w=null
return A.B(A.a([E.a9f,B.oG,A.E(A.d(e,w,w,w,w,w,w,B.jm,w,w,w),1)],x.p),B.m,w,B.e,B.i,0,w,w)},
$S:746}
C.dcE.prototype={
$0(){return this.a.a=!1},
$S:50}
C.dcF.prototype={
$2(d,e){this.a.sp(0,d)
return d},
$S:199}
C.dcG.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.dcH.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=u.a
r=s.a
w=2
return A.b(C.Ba(r.c,r.d,u.b),$async$$0)
case 2:r=s.a
t=u.c
w=3
return A.b(C.S_(r.c,r.d,t),$async$$0)
case 3:if(s.c!=null)s.m(new C.dcA(s,t))
w=4
return A.b(s.la(),$async$$0)
case 4:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dcA.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.dcS.prototype={
$1(d){var w=null
return A.oC(!1,A.ep(w,w,w,E.Bp,new A.jV(this.a,new C.dcR(),w,w,x.cI),w,w,w,w,w,w),w,x.z)},
$S:334}
C.dcR.prototype={
$3(d,e,f){var w=null
return A.B(A.a([E.a9f,B.oG,A.E(A.d(e,w,w,w,w,w,w,B.jm,w,w,w),1)],x.p),B.m,w,B.e,B.i,0,w,w)},
$S:746}
C.dcT.prototype={
$0(){return this.a.a=!1},
$S:50}
C.dcU.prototype={
$2(d,e){this.a.sp(0,d)
return d},
$S:199}
C.dcV.prototype={
$2(d,e){this.a.sp(0,d)
return d},
$S:199}
C.dcW.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.a
w=2
return A.b(C.Ba(s.c,s.d,u.b),$async$$0)
case 2:w=3
return A.b(t.la(),$async$$0)
case 3:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dcq.prototype={
$0(){var w=this.a.f
w===$&&A.c()
return w.biO(B.q8,A4.Nd)},
$S:0}
C.dcr.prototype={
$0(){var w=this.a.f
w===$&&A.c()
return w.aHE(B.q8,A4.Nd)},
$S:0}
C.deL.prototype={
$0(){A.a4(this.a,!1).O(null)
return null},
$S:0}
C.deM.prototype={
$1(d){var w=this.a
return w.m(new C.deK(w))},
$S:8}
C.deK.prototype={
$0(){return this.a.e="page"},
$S:0}
C.deN.prototype={
$1(d){var w=this.a
return w.m(new C.deJ(w))},
$S:8}
C.deJ.prototype={
$0(){return this.a.e="book"},
$S:0}
C.deO.prototype={
$1(d){var w=this.a
return w.m(new C.deI(w))},
$S:8}
C.deI.prototype={
$0(){return this.a.e="cover"},
$S:0}
C.deP.prototype={
$0(){var w=this.a
return w.m(new C.deH(w,this.b))},
$S:0}
C.deH.prototype={
$0(){var w=this.b
this.a.d.saX(0,w)
return w},
$S:0}
C.deQ.prototype={
$0(){var w=this.a,v=B.a.i(w.d.a.a)
if(v.length===0)return
w=w.ga2d()
A.a4(this.b,!1).O(new A.bqc(w,v))},
$S:0}
C.ddf.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.dde.prototype={
$1(d){var w=this.a.a,v=w.c,u=w.d,t=this.b.a
t=t==="main"?u:u+"~"+t
return new C.ZN(v,t,u,w.e,w.f,w.r,w.w,null)},
$S:z+50}
C.ddj.prototype={
$1(d){return d.a===this.a},
$S:z+52}
C.ddi.prototype={
$1(d){var w,v=null,u=this.b,t=this.a.b8W(u)
u=u.c
w=u===1?"page":"pages"
w=A.d("\u201c"+t+"\u201d and its "+u+" "+w+" will be deleted from this device.",v,v,v,v,v,v,B.hb,v,v,v)
return A.ep(A.a([A.bN(!1,B.di,v,v,!0,v,v,v,new C.ddg(d),v,v),A.bH(B.x6,v,new C.ddh(d),A.bo(B.nb,v,v,v,v,v,v,v,v,v,v,v))],x.p),v,v,E.Bp,w,v,v,v,v,D.fDz,v)},
$S:19}
C.ddg.prototype={
$0(){A.a4(this.a,!1).O(!1)
return null},
$S:0}
C.ddh.prototype={
$0(){A.a4(this.a,!1).O(!0)
return null},
$S:0}
C.ddk.prototype={
$0(){A.a4(this.a,!1).O(null)
return null},
$S:0}
C.ddl.prototype={
$2(d,e){var w,v,u,t=null,s=(e.b-32-14)/2,r=A.a([],x.p)
for(w=this.a,v=w.length,u=0;u<w.length;w.length===v||(0,A.L)(w),++u)r.push(new A.a5(s,t,w[u],t))
return A.cg(A.bX(B.bG,r,B.bq,t,18,14),B.t,t,B.y,t,D.bAm,t,t,B.ah)},
$S:304}
C.ddd.prototype={
$0(){return this.a.Qw(0,this.b)},
$S:0}
C.ddc.prototype={
$0(){return this.a.PZ(0,this.b)},
$S:0}
C.cLI.prototype={
$1(d){return d.a===this.a.c.a},
$S:z+13}
C.cLJ.prototype={
$0(){return B.d.gI(D.zo)},
$S:z+14}
C.cLK.prototype={
$4(d,e,f,g){var w=null,v=A.n(e)
return A.bS(0,new A.D(d,A.c3(w,new A.o(w,w,A.K(this.a.j(f),B.r,g),v,w,w,B.n),B.bh),w),0,0,0)},
$S:1945}
C.d4h.prototype={
$1(d){return this.a.m(new C.d4g(this.b,this.c))},
$S:8}
C.d4g.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.d4G.prototype={
$1(d){return this.a.m(new C.d4t())},
$S:2}
C.d4t.prototype={
$0(){},
$S:0}
C.d4H.prototype={
$1(d){return this.a.m(new C.d4s())},
$S:2}
C.d4s.prototype={
$0(){},
$S:0}
C.d4I.prototype={
$0(){var w=this.a
return w.m(new C.d4r(w,this.b))},
$S:0}
C.d4r.prototype={
$0(){var w=this.a
return w.d=w.gof().FV(this.b.a)},
$S:0}
C.d4J.prototype={
$0(){var w=this.a
return w.m(new C.d4q(w,this.b))},
$S:0}
C.d4q.prototype={
$0(){var w=this.a
return w.d=w.gof().cKn(this.b)},
$S:0}
C.d4K.prototype={
$1(d){return this.a.m(new C.d4p())},
$S:2}
C.d4p.prototype={
$0(){},
$S:0}
C.d4L.prototype={
$0(){var w=this.a
return w.m(new C.d4o(w,this.b))},
$S:0}
C.d4o.prototype={
$0(){var w=this.a
return w.d=w.gof().cKs(this.b.a)},
$S:0}
C.d4M.prototype={
$1(d){var w=this.a
return w.m(new C.d4B(w,d))},
$S:6}
C.d4B.prototype={
$0(){var w=this.a
return w.d=w.gof().cLm(this.b)},
$S:0}
C.d4N.prototype={
$1(d){var w=this.a
return w.d=w.gof().aEK(d)},
$S:2}
C.d4O.prototype={
$1(d){var w=this.a
return w.d=w.gof().cKv(d)},
$S:2}
C.d4Q.prototype={
$1(d){var w=this.a
return w.d=w.gof().cLk(d)},
$S:2}
C.d4R.prototype={
$1(d){var w=this.a
return w.m(new C.d4A(w,d))},
$S:8}
C.d4A.prototype={
$0(){var w=this.a
return w.d=w.gof().cLb(this.b)},
$S:0}
C.d4S.prototype={
$0(){var w=this.a,v=w.gof(),u=B.a.i(w.gyC(0).a.a),t=B.a.i(w.gaBT().a.a)
u=v.bdx(B.a.i(w.garE().a.a),t,u)
A.a4(this.b,!1).O(u)
return null},
$S:0}
C.bQ6.prototype={
$1(d){this.a.f.sp(0,d.a/1e6)},
$S:9}
C.bQ0.prototype={
$1(d){var w=this.a
if(w.c==null)return
w.m(new C.bQ_(w,d))},
$S:11}
C.bQ_.prototype={
$0(){var w=this.a,v=w.db.length,u=Math.min(v,w.dx+2)
w.dx=u
if(u>=v){w.r.c=!1
this.b.a4(0)}},
$S:0}
C.bQ9.prototype={
$0(){var w=this.a
w.dx=w.db.length
w.r.c=!1},
$S:0}
C.bQ1.prototype={
$0(){var w=this.a
w.Q=D.aZs
w.adq(1)
w.r.x=null},
$S:0}
C.bQ2.prototype={
$0(){var w,v,u=this.a
if(u.c==null||u.Q!==D.aZs)return
w=new A.e4()
w.cY(u.as*13+u.a.e)
v=u.r
v.Q=3+w.ap(3)
v.z=D.d_m[w.ap(6)]
v.as=u.f.a+2.6},
$S:0}
C.bQ5.prototype={
$0(){var w=this.a
w.Q=D.abP
w.adq(2)
w.r.z=null},
$S:0}
C.bQ4.prototype={
$0(){var w,v,u=this,t=u.a,s=t.fr=u.c
t.Q=D.hrp
t.adq(3)
w=t.r
w.d=s
w.x="I say: "+t.gC4()[t.as].b[u.b]
t=t.f
w.y=t.a+2.2
v=u.d
w.Q=3+v.ap(3)
w.z=s?D.d5L[v.ap(4)]:D.dqu[v.ap(3)]
w.as=t.a+2.8},
$S:0}
C.bQ7.prototype={
$0(){var w=this.a
w.Q=D.aZt
w.CW=this.b
w.cy=1
w.adq(4)
w.r.f=w.f.a+5},
$S:0}
C.bQ8.prototype={
$0(){},
$S:0}
C.bQ3.prototype={
$0(){var w=this.a.c
w.toString
return A.a4(w,!1).ig()},
$S:0}
C.bPY.prototype={
$0(){return this.a.KJ(this.b)},
$S:0}
C.bPZ.prototype={
$0(){var w=this.a.c
w.toString
return A.a4(w,!1).ig()},
$S:0}
C.bRD.prototype={
$0(){var w=this
return w.a.QP(w.b,0,w.c,w.d)},
$S:0}
C.bRE.prototype={
$0(){var w=this
return w.a.QP(w.b,3,w.c,w.d)},
$S:0}
C.bRF.prototype={
$0(){var w=this
return w.a.QP(w.b,1,w.c,w.d)},
$S:0}
C.bRG.prototype={
$0(){var w=this
return w.a.bRr(w.b,w.c,w.d)},
$S:0}
C.bRH.prototype={
$0(){var w=this
return w.a.QP(w.b,4,w.c,w.d)},
$S:0}
C.bRI.prototype={
$0(){var w=this
return w.a.QP(w.b,2,w.c,w.d)},
$S:0}
C.bRJ.prototype={
$0(){var w=this
return w.a.QP(w.b,5,w.c,w.d)},
$S:0}
C.bRK.prototype={
$2(d,e){return B.k.aL(d.a,e.a)},
$S:747}
C.bRC.prototype={
$2(d,e){var w,v,u,t,s,r=null,q=D.a4T[d],p=q.a.a7(0,new A.t(0,-q.b*1.2*124)),o=A.fx(r,r,3,r,A.cS(r,r,r,r,r,r,r,r,r,D.fiy,e),B.a4,B.bY,r,B.dA,B.bV)
o.o0(130)
w=o.b.a.c
w=p.aE(0,new A.t(0,w.gbb(w)/2+8))
v=o.b
u=v.c
v=v.a.c
t=A.br(A.bK(w,v.gbb(v)+12,u+18),B.hU)
u=this.a
v=t.eO(B.dC)
w=$.S()
s=A.I()
s.r=B.dm.gp(0)
u.az(v,s)
s=A.I()
s.r=D.q2.gp(0)
u.az(t,s)
w=new A.aF(w.r,B.ag,r,r,A.a([],x.v))
s=p.a
v=t.d-1
w.D(new A.aY(s-5,v))
w.D(new A.aq(s+1,p.b+1))
w.D(new A.aq(s+6,v))
w.D(new A.bs())
v=A.I()
v.r=D.q2.gp(0)
u.aH(w,v)
o.a3(u,new A.t(t.a+9,t.b+6))},
$S:748}
C.bQn.prototype={
$2(d,e){return B.o.aL(d.Q,e.Q)},
$S:z+7}
C.bQo.prototype={
$2(d,e){var w=this.a,v=B.o.aL(w.alT(d),w.alT(e))
if(v!==0)return v
return B.o.aL(d.Q,e.Q)},
$S:z+7}
C.fpJ.prototype={
$1(d){return d!==this.a&&B.a.i(d).length!==0},
$S:3}
C.fZG.prototype={
$2(d,e){if(e!=null)J.ca(this.a.c3(0,d,new C.fZH()),e)},
$S:z+66}
C.fZH.prototype={
$0(){return A.a([],x.J)},
$S:z+76}
C.fZI.prototype={
$1(d){return d!==this.a},
$S:3}
C.fZJ.prototype={
$1(d){var w=d.a,v=this.a
return w!==v.a&&w!==this.b.a&&d.c===v.c},
$S:z+1}
C.fZK.prototype={
$1(d){return d!==this.a&&!B.d.b3(this.b,new C.fZF(this.c,d))},
$S:3}
C.fZF.prototype={
$1(d){return B.a.i(d.b)===this.b},
$S:z+1}
C.fZL.prototype={
$1(d){return d!==this.a},
$S:3}
C.fZM.prototype={
$1(d){return d!==this.a},
$S:3}
C.fZN.prototype={
$1(d){return d!==this.a&&!B.d.b3(this.b,new C.fZE(this.c,d))},
$S:3}
C.fZE.prototype={
$1(d){return B.a.i(d.b)===this.b},
$S:z+1}
C.fCk.prototype={
$1(d){var w=this.b.h(0,d)
w.toString
return J.ad(w)>this.a.a},
$S:3}
C.fQv.prototype={
$1(d){return d.Q},
$S:z+15}
C.fQw.prototype={
$0(){return A.a([],x.u)},
$S:z+16}
C.fyL.prototype={
$1(d){return this.a>=d.c},
$S:z+17}
C.fF5.prototype={
$1(d){return d.c>this.a},
$S:z+17}
C.bLm.prototype={
$1(d){return B.a.i(d).length!==0},
$S:3}
C.h_5.prototype={
$2(d,e){return B.o.aL(C.hra(d),C.hra(e))},
$S:209}
C.h_6.prototype={
$1(d){return d!==this.a},
$S:3}
C.fR0.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
C.bJA.prototype={
$0(){var w=this.a
w.ch=!0
w.b7a()},
$S:0}
C.bJv.prototype={
$0(){},
$S:0}
C.bJB.prototype={
$1(d){return d.f<=0},
$S:z+26}
C.bJt.prototype={
$0(){},
$S:0}
C.bJu.prototype={
$0(){},
$S:0}
C.bJz.prototype={
$2(d,e){var w,v,u=null,t=this.a,s=A.a([A.bS(0,A.b4(u,u,u,new C.bc0(t,u),B.aw),0,0,0)],x.p)
if(t.dy.length!==0&&t.dx<t.fr){w=B.w.j(0.7)
v=A.n(14)
s.push(A.ap(u,A.p(u,A.d(t.dy,u,u,u,u,u,u,D.fq3,B.K,u,u),B.f,u,u,new A.o(w,u,u,v,u,u,B.n),u,u,u,u,B.bT,u,u,u),u,u,14,14,6,u))}return A.aB(B.c5,new A.an(B.a_,u,B.ab,B.t,s,u),B.y,!1,u,u,u,u,u,u,u,new C.bJw(t,e),u,u,u,u,u,u,u,new C.bJx(t,e),u,u,u,u,u,u,u,u,u,new C.bJy(t,e),u,u,u,u,!1,B.a3)},
$S:36}
C.bJw.prototype={
$1(d){return this.a.db=B.k.E(d.b.a/this.b.b,0.08,0.92)},
$S:18}
C.bJy.prototype={
$1(d){return this.a.db=B.k.E(d.b.a/this.b.b,0.08,0.92)},
$S:22}
C.bJx.prototype={
$1(d){return this.a.db=B.k.E(d.b.a/this.b.b,0.08,0.92)},
$S:18}
C.bJs.prototype={
$0(){var w=this.a.c
w.toString
return A.a4(w,!1).ig()},
$S:0}
C.cno.prototype={
$0(){var w=this,v=w.a
v.ax=w.b
v.at=w.c.a+" is not a child of "+w.d+". Try someone else."},
$S:0}
C.cnp.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new C.cnn(w))},
$S:0}
C.cnn.prototype={
$0(){return this.a.ax=-1},
$S:0}
C.cnq.prototype={
$0(){var w=this,v=w.a
v.giV()[w.b]=w.c
v.at=w.d.a+" is a child of "+w.e+". The branch grows!"},
$S:0}
C.cnr.prototype={
$2(d,e){return d+e.c.length},
$S:z+29}
C.cns.prototype={
$0(){var w=this.a
w.ay=!0
w.w=this.b},
$S:0}
C.cnt.prototype={
$0(){},
$S:0}
C.cnu.prototype={
$0(){var w=this.a
w.z=w.X0(++w.e)
w.Q=A.bZ(w.gkL()[w.e].c.length,-1,!1,x.S)
w.y=0
w.at=""},
$S:0}
C.cnk.prototype={
$0(){return A.a4(this.a,!1).ig()},
$S:0}
C.cnl.prototype={
$2(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i=a3.b,h=a3.d,g=this.a,f=g.giV().length,e=i/2,d=new C.cnm(i,f,h),a0=g.as,a1=A.a7(a0).k("bd<2>")
a0=A.C(new A.bd(a0,a1),a1.k("M.E"))
a0=A.bS(0,A.cb(new A.h8(a0),new C.cnf(g,new A.t(e,56),f,d),j),0,0,0)
a1=this.b
w=g.giV().length!==0&&!B.d.t(g.giV(),-1)
v=x.p
e=A.a([a0,A.ap(j,new C.Q8(a1.b,a1.a,76,w,j),j,j,e-50,j,4,j)],v)
for(a0=x.W,a1=x.dN,u=0;u<f;++u)e.push(new A.cN(d.$1(u).a-44,d.$1(u).b-48,j,j,j,j,new S.Mm(new C.cng(g,u),new C.cnh(g,u),new C.cni(g,u),j,j,new A.bU("slot-"+u,a0),a1),j))
a1=g.at
if(a1.length!==0)e.push(A.ap(j,A.d(a1,j,j,j,j,j,j,A.l(j,j,B.a.t(a1,"not a child")?B.f8:B.be,j,j,j,j,j,j,j,j,13,j,j,B.H,j,j,!0,j,j,j,j,j,j,j,j),B.K,j,j),j,j,0,0,h*0.76-6,j))
if(g.giV().length!==0&&!B.d.t(g.giV(),-1)){a0=g.e+1>=g.gkL().length?"See my result":"Next family"
g=A.au(C.uk(a0,g.gq8(g),B.cI,B.jA,D.fq),j,j,j)}else{a1=A.a([],v)
w=x.gc
v=x.gW
t=x.X
u=0
for(;;){s=g.z
if(!(u<(s===$?g.z=g.X0(0):s).length))break
if(!B.d.t(g.giV(),u)){r=""+u
q=g.e
p=g.ax===u?1:0
s=g.z
if(s===$){s=g.z=g.X0(0)
o=s}else o=s
n=s[u]
n=A.ee(B.A,new C.Q8(n.b,o[u].a,62,!0,j),1.15,j,j)
s=g.z
if(s===$){s=g.z=g.X0(0)
o=s}else o=s
m=s[u]
l=o[u]
k=l.a
a1.push(new A.qX(new A.bp(0,p,t),new C.cnj(),new S.DV(u,j,new C.Q8(l.b,k,62,!1,j),new A.kB(0.25,new C.Q8(m.b,k,62,!1,j),j),new A.k6(n,B.ai,!1,0,B.L,j,j,j,j,!0,B.f,B.a2,j,j),B.I,S.huG(),!0,!0,j,j,j,j,j,j,!1,B.iW,j,new A.bU("chip-"+r,a0),w),B.b7,B.iU,j,new A.bU("t"+r+"-"+q,a0),v))}++u}g=A.bX(B.fI,a1,B.bq,j,6,8)}e.push(A.ap(0,g,j,j,0,0,j,j))
return new A.an(B.a_,j,B.ab,B.t,e,j)},
$S:64}
C.cnm.prototype={
$1(d){return new A.t(this.a*(d+0.5)/this.b,this.c*0.62)},
$S:735}
C.cnf.prototype={
$2(d,e){var w,v,u,t,s,r,q=this,p=null,o=A.a([],x.g)
for(w=q.c,v=q.d,u=0;u<w;++u)o.push(v.$1(u))
v=A.a([],x.n)
for(t=q.a,s=t.as,u=0;u<w;++u){r=s.h(0,u)
if(r==null)r=p
else{r=r.x
r===$&&A.c()}v.push(r==null?0:r)}w=t.giV().length!==0&&!B.d.t(t.giV(),-1)
return A.b4(p,p,p,new C.bbw(q.b,o,v,w,p),B.aw)},
$S:63}
C.cnh.prototype={
$1(d){return this.a.giV()[this.b]===-1},
$S:z+30}
C.cni.prototype={
$1(d){return this.a.cOb(this.b,d.a)},
$S:z+31}
C.cng.prototype={
$3(d,e,f){var w,v=null,u=this.a,t=this.b,s=u.giV()[t]!==-1,r=A.n(18),q=e.length!==0?B.cI.j(0.3):B.L
if(s)w=v
else w=A.K(e.length!==0?B.cI:B.jN,B.r,2)
u=s?A.lx(new C.cne(),A.au(new C.Q8(u.gaEc()[u.giV()[t]].b,u.gaEc()[u.giV()[t]].a,62,!1,v),v,v,v),B.lt,B.iU,v,v,new A.bp(0.3,1,x.X),x.i):D.b9d
return A.da(v,u,v,v,B.b7,new A.o(q,v,w,r,v,v,B.n),B.a2,v,100,v,v,v,v,v,88)},
$S:1948}
C.cne.prototype={
$3(d,e,f){return A.ee(B.A,f,e,null,null)},
$S:110}
C.cnj.prototype={
$3(d,e,f){return A.dP(f,new A.t(Math.sin(e*24)*8*(1-e),0))},
$S:110}
C.cMM.prototype={
$1(d){return d>=1},
$S:115}
C.cCj.prototype={
$1(d){var w=this.a
if(w.c==null||w.as)return
if(w.f<w.gkL()[w.e].d.length)w.m(new C.cCi(w))},
$S:11}
C.cCi.prototype={
$0(){return this.a.f++},
$S:0}
C.cCr.prototype={
$0(){var w,v=this.a
v.as=!0
w=this.b
v.ay=w
v.r+=w;++v.w},
$S:0}
C.cCs.prototype={
$0(){var w=this.a,v=this.b
w.z.M(0,v)
w.Q=v},
$S:0}
C.cCt.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new C.cCq(w))},
$S:0}
C.cCq.prototype={
$0(){return this.a.Q=-1},
$S:0}
C.cCu.prototype={
$0(){return this.a.f++},
$S:0}
C.cCv.prototype={
$0(){var w=this.a
w.at=!0
w.x=this.b},
$S:0}
C.cCw.prototype={
$0(){},
$S:0}
C.cCx.prototype={
$0(){var w=this.a;++w.e
w.f=1
w.z.aa(0)
w.as=!1
w.ay=0},
$S:0}
C.cCl.prototype={
$0(){return A.a4(this.a,!1).ig()},
$S:0}
C.cCm.prototype={
$3(d,e,f){var w=null
return A.lx(new C.cCk(this.a,e),w,B.b7,B.hu,w,w,new A.bp(w,this.b,x.X),x.i)},
$S:1949}
C.cCk.prototype={
$3(d,e,f){var w,v,u=null,t=this.a,s=B.cI.j(t.as?0.6:0.15)
s=A.a([new A.ac(0,B.G,s,B.I,t.as?40:18)],x.V)
w=B.w.j(e)
v=this.b
v=A.TJ(v,v,B.Vs)
return A.p(u,A.hU(new A.Bk(new A.xs(w,B.Lm,u,B.Xq),H.bVR(A.b4(u,u,u,new C.aAM(t.gkL()[t.e].c,t.as,u),B.aw),v),u),B.ap),B.f,u,u,new A.o(u,u,u,u,s,u,B.a6),u,190,u,u,u,u,u,190)},
$S:1950}
C.cCn.prototype={
$3(d,e,f){return A.db(A.dP(f,new A.t(0,14*(1-e))),e)},
$S:101}
C.cCo.prototype={
$3(d,e,f){return A.dP(f,new A.t(Math.sin(e*22)*8*(1-e),0))},
$S:110}
C.cCp.prototype={
$0(){return this.a.boa(this.b)},
$S:0}
C.f2t.prototype={
$1(d){var w=d.a/1e6,v=this.a,u=Math.min(0.05,w-v.amp$)
v.amp$=w
v.pY$.sp(0,w)
v.aq0(u)},
$S:9}
C.fcz.prototype={
$1(d){var w=this.a,v=w.c.length,u=Math.min(v,w.d+2)
w.d=u
if(u>=v)d.a4(0)
w.a.$0()},
$S:11}
C.bR8.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new C.bR7())},
$S:0}
C.bR7.prototype={
$0(){},
$S:0}
C.bR5.prototype={
$0(){return this.a.Q=!0},
$S:0}
C.bR3.prototype={
$0(){},
$S:0}
C.bR4.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.a
if(p.c==null){w=1
break}s=p.x
r=p.gMx()
w=s+1>=r.length?3:5
break
case 3:q=C.bFk(p.gaoQ(0),0,r.length)
p.m(new C.bR0(p,q))
o=p
w=6
return A.b(C.Bu(p.a.d,q),$async$$0)
case 6:o.z=e
s=p.a
o=p
w=7
return A.b(C.Bv(s.d,s.c.a,"school",p.gaoQ(0)*10),$async$$0)
case 7:o.at=e
if(p.c!=null)p.m(new C.bR1())
w=4
break
case 5:p.m(new C.bR2(p))
p.gqf().Vz(r[p.x].a)
case 4:case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.bR0.prototype={
$0(){var w=this.a
w.as=!0
w.y=this.b},
$S:0}
C.bR1.prototype={
$0(){},
$S:0}
C.bR2.prototype={
$0(){return this.a.x++},
$S:0}
C.bR6.prototype={
$0(){return this.a.KJ(this.b)},
$S:0}
C.bR_.prototype={
$0(){var w=this.a.c
w.toString
return A.a4(w,!1).ig()},
$S:0}
C.f2u.prototype={
$0(){var w,v=this,u=v.a,t=46+Math.sin(u*3.1)*8,s=-90+Math.sin(u*4.3)*10,r=new A.t(t,s),q=v.b,p=v.d,o=p?C.huQ(u,1):0,n=v.e,m=n?0.9:0.3
if(n)n=Math.sin(u*9)*2
else n=p?Math.sin(u*4):0
w=p?r:D.DJ
C.RX(q,D.ehY,0,0.2,-0.6,-0.2,null,w,D.egJ,v.c,o,n,1.2,m,0,u,-0.3)
if(p){u=v.f.a7(0,new A.t(Math.sin(u*3)*14,Math.sin(u*2)*6))
$.S()
p=A.I()
p.r=D.FN.gp(0)
p.c=3
p.d=B.bA
q.bo(new A.t(372+1.2*t,470+1.2*s),u,p)}},
$S:0}
C.f2v.prototype={
$0(){var w=this.b,v=this.c,u=v?0.3:0
v=v?Math.max(0,Math.sin(w*1.7))*2:0
return C.RX(this.a,D.eh2,0,u,0.7,-0.5,null,null,D.Jd,5,0,v,1.05,0.3,0,w,0.3)},
$S:0}
C.f2w.prototype={
$0(){var w=this.b,v=this.c?Math.max(0,Math.sin(w*1.9+1))*2.4:0
return C.RX(this.a,D.eiK,0,0,0.8,-0.5,null,null,D.Jd,2,0,v,1.2,0.3,0,w,0.35)},
$S:0}
C.f2x.prototype={
$0(){var w=this,v=w.a.b.Q&&!w.d?0.5:0.1
return C.RX(w.b,D.ehS,0,v,-0.8,-0.5,null,null,D.Jd,4,0,0,1.2,0.25,0,w.c,-0.35)},
$S:0}
C.f2y.prototype={
$0(){var w,v,u,t,s,r=this,q=r.a,p=q.b,o=p.Q&&!r.b&&p.w.length<=p.x
p=r.c
w=r.d
v=r.e
u=v?0.9:0.3
t=o?0.5:0
s=v?Math.sin(w*9)*2.4:0
if(o)v=new A.t(34,-122+Math.sin(w*5)*5)
else v=v?D.ehW:D.DJ
C.RX(p,D.ehm,0,t,0,-0.6,null,v,D.Jd,3,0,s,1.3,u,0,w,0)
q=q.c9D(new A.t(222,455),9)
$.S()
w=A.I()
w.r=B.cI.gp(0)
p.aH(q,w)},
$S:0}
C.f2z.prototype={
$2(d,e){return B.k.aL(d.a,e.a)},
$S:747}
C.bQM.prototype={
$2(d,e){return d+e},
$S:70}
C.bQX.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.bQY.prototype={
$0(){return this.a.y=-1},
$S:0}
C.bQZ.prototype={
$0(){var w,v,u=this,t=u.a,s=u.c
t.giV()[u.b]=s
t.giV()[u.d]=t.y
w=t.as
v=t.pY$
w.n(0,s,v.a+0.5)
w.n(0,t.y,v.a+0.5)
t.y=-1},
$S:0}
C.bQT.prototype={
$1(d){return d},
$S:116}
C.bQS.prototype={
$0(){var w,v,u=this.a
u.at=!0
w=this.b
u.ax=w
u.y=-1
v=u.pY$
if(w){++u.r
u.CW=v.a+3}else u.cx=v.a+1.6},
$S:0}
C.bQU.prototype={
$0(){var w=this.a
w.ay=!0
w.w=this.b},
$S:0}
C.bQV.prototype={
$0(){},
$S:0}
C.bQW.prototype={
$0(){var w,v,u,t,s=this.a
s.z=s.Fm(++s.f)
w=A.a([],x.n)
v=0
for(;;){u=s.z
if(!(v<u.length))break
t=B.d.cu(u,v)
u=s.z
w.push(450*(t+0.5)/u.length);++v}s.Q=w
s.y=-1
s.at=!1
s.as.aa(0)},
$S:0}
C.bQO.prototype={
$0(){return A.a4(this.a,!1).ig()},
$S:0}
C.bQP.prototype={
$2(d,e){var w=this.a
w=w.gkL()[w.f].e
return B.o.aL(w[d],w[e])},
$S:70}
C.bQQ.prototype={
$2(d,e){var w=null,v=C.h6Q(new A.av(A.aR(1/0,e.a,e.b),A.aR(1/0,e.c,e.d))),u=this.a
return A.aB(B.c5,new A.er(A.b4(w,w,w,new C.biH(u,u.pY$),B.aw),w),B.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.bQN(u,v),w,w,w,w,!1,B.a3)},
$S:36}
C.bQN.prototype={
$1(d){var w,v,u,t=d.b,s=this.b,r=s.c,q=(t.b-s.b)/r
if(q>380&&q<760){w=this.a
v=w.giV().length
u=B.o.E(B.k.bf((t.a-s.a)/r/450*v),0,v-1)
w.cYP(w.giV()[u])}},
$S:22}
C.bQR.prototype={
$1(d){var w=this.a
return w.gkL()[w.f].d[d]},
$S:71}
C.dnT.prototype={
$2(d,e){return 0},
$S:70}
C.bQy.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new C.bQx())},
$S:0}
C.bQx.prototype={
$0(){},
$S:0}
C.bQw.prototype={
$0(){},
$S:0}
C.bQq.prototype={
$0(){},
$S:0}
C.bQr.prototype={
$0(){},
$S:0}
C.bQv.prototype={
$0(){var w=this.a
w.ax=this.c
w.r=D.AF},
$S:0}
C.bQu.prototype={
$1(d){var w=null,v=this.a.gqf(),u=A.d(d,w,w,w,w,w,w,D.aTj,w,w,w),t=v.gbkC(0)
return A.aB(B.c5,A.x(A.a([u,B.bF,A.d(t+(v.d<v.c.length?"\u258d":""),w,w,w,w,w,w,D.aTy,w,w,w)],x.p),B.E,w,B.e,B.i,0,B.p),B.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,v.gbqs(v),w,w,w,w,w,w,!1,B.a3)},
$S:137}
C.bQs.prototype={
$0(){return this.a.KJ(this.b)},
$S:0}
C.bQt.prototype={
$0(){var w=this.a.c
w.toString
return A.a4(w,!1).ig()},
$S:0}
C.bQp.prototype={
$0(){return A.a4(this.a,!1).ig()},
$S:0}
C.dYA.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.dYB.prototype={
$1(d){return this.a},
$S:39}
C.dYC.prototype={
$0(){var w=this.a
return w.d=w.gSx().bd0(this.b)},
$S:0}
C.dYy.prototype={
$1(d){return new C.Tb(this.a,null)},
$S:z+32}
C.dYz.prototype={
$1(d){return d.a===this.a.a},
$S:z+33}
C.dYx.prototype={
$1(d){var w=null,v=this.a.b
v=A.d('"'+(v.length===0?"Untitled":v)+'" will be removed for everyone in the family.',w,w,w,w,w,w,B.hb,w,w,w)
return A.ep(A.a([A.bN(!1,E.aUU,w,w,!0,w,w,w,new C.dYv(d),w,w),A.bN(!1,D.fL6,w,w,!0,w,w,w,new C.dYw(d),w,w)],x.p),w,w,D.fq,v,w,w,w,w,D.fxL,w)},
$S:19}
C.dYv.prototype={
$0(){A.a4(this.a,!1).O(!1)
return null},
$S:0}
C.dYw.prototype={
$0(){A.a4(this.a,!1).O(!0)
return null},
$S:0}
C.dYu.prototype={
$0(){var w=null,v=this.a.c.K(x.q).f,u=this.b
return v.U(A.b3(w,w,w,w,w,B.t,w,A.d(u==null?"Not ready yet.":u,w,w,w,w,w,w,w,w,w,w),w,B.Z,w,w,w,w,w,w,w,w,w,w))},
$S:0}
C.dYD.prototype={
$1(d){var w=this.a.f,v=w.h(0,d)
return(v==null?0:v)>0?"Best "+A.w(w.h(0,d)):"NEW"},
$S:14}
C.dYE.prototype={
$0(){var w=this.a,v=this.b,u=C.bD3(v,10,w.r,!1)
return w.u9(C.hfl(w.a.d,"kahoot",u,w.gb4K(),v.b,"Family Kahoot",v.a))},
$S:0}
C.dYF.prototype={
$0(){var w=this.a
return w.u9(new C.al7(this.b,w.a.d,w.r,null))},
$S:0}
C.dYG.prototype={
$0(){var w=this.a
return w.u9(new C.ajk(this.b,w.a.d,w.r,null))},
$S:0}
C.dYJ.prototype={
$0(){var w=this.a
return w.u9(new C.au0(this.b,w.a.d,w.r,null))},
$S:0}
C.dYK.prototype={
$0(){var w=this.a
return w.u9(new C.axX(this.b,w.a.d,w.r,null))},
$S:0}
C.dYL.prototype={
$0(){var w=this.a
return w.u9(new C.ala(this.b,w.a.d,w.r,null))},
$S:0}
C.dYM.prototype={
$0(){var w=this.a
return w.u9(new C.ale(this.b,w.a.d,w.r,null))},
$S:0}
C.dYN.prototype={
$0(){var w=this.a
return w.u9(new C.alg(this.b,w.a.d,w.r,null))},
$S:0}
C.dYO.prototype={
$0(){var w,v=this.a,u=this.b,t=B.a.i(u.b)
if(t.length===0)t="Family game"
w=u.cZ8()
return v.u9(C.hfl(v.a.d,"creator_"+u.a,w,v.gb4K(),"A game by the family",t,this.c.a))},
$S:0}
C.dYP.prototype={
$0(){return this.a.Ox(this.b)},
$S:0}
C.dYQ.prototype={
$0(){return this.a.Xs(0,this.b)},
$S:0}
C.dYH.prototype={
$0(){return this.a.Ox(null)},
$S:0}
C.dYI.prototype={
$0(){return this.a.K(x.q).f.U(D.fbv)},
$S:0}
C.bQK.prototype={
$0(){var w=this.a
w.d=D.aYU
w.z=3},
$S:0}
C.bQL.prototype={
$1(d){var w=this.a
if(w.z<=1){d.a4(0)
w.aOr()}else w.m(new C.bQJ(w))},
$S:11}
C.bQJ.prototype={
$0(){return this.a.z--},
$S:0}
C.bQA.prototype={
$0(){var w=this.a
w.d=D.abt
w.y=-1
w.as=w.a.w[w.e].r},
$S:0}
C.bQB.prototype={
$1(d){var w=this.a
if(w.c==null)return
w.m(new C.bQz(w))
if(w.as<=0){d.a4(0)
w.b4G(-1)}},
$S:11}
C.bQz.prototype={
$0(){var w=this.a
return w.as=Math.max(0,w.as-0.1)},
$S:0}
C.bQG.prototype={
$0(){var w=this.b
w.y=this.c
w.Q=this.a.a
w.d=D.W3},
$S:0}
C.bQH.prototype={
$0(){return this.a.e++},
$S:0}
C.bQD.prototype={
$0(){var w=this.a
w.d=D.aYV
w.ay=this.b},
$S:0}
C.bQE.prototype={
$0(){var w=this.a
w.ch=this.b
w.CW=this.c},
$S:0}
C.bQI.prototype={
$2(d,e){return B.o.aL(e.b,d.b)},
$S:1951}
C.bQF.prototype={
$0(){return this.a.KJ(this.b)},
$S:0}
C.bQC.prototype={
$0(){var w=this.a.c
w.toString
return A.a4(w,!1).ig()},
$S:0}
C.bQa.prototype={
$0(){var w,v,u,t=this.a,s=t.a,r=$.ax()
s=A.a([new A.at(new A.ba(s,B.b3,B.aO),r)],x.cF)
for(t=t.b,w=t.length,v=0;v<t.length;t.length===w||(0,A.L)(t),++v){u=t[v]
s.push(new A.at(new A.ba(u,B.b3,B.aO),r))}return s},
$S:1952}
C.bQb.prototype={
$0(){return this.a.gCJ().c.push(C.h0G(null,0,20,""))},
$S:0}
C.bQl.prototype={
$1(d){var w=null
return A.bt(w,new A.b5(4,A.n(12),B.a0),w,w,w,w,w,w,!0,w,w,w,w,w,w,B.ds,!0,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,!0,w,B.UZ,d,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w)},
$S:256}
C.bQk.prototype={
$1(d){var w,v,u,t,s,r,q,p=null,o=this.a,n=o.gCJ().c,m=this.b,l=n[m],k=o.cci(l),j=B.c.j(0.06),i=A.n(18),h=A.K(B.aY,B.r,1),g=x.p,f=A.a([A.d("Question "+(m+1),p,p,p,p,p,p,D.Kl,p,p,p),B.b1],g)
if(n.length>1)f.push(A.aG(p,p,p,p,B.apL,p,p,p,new C.bQf(o,m),p,p,p,p,p,p))
n=J.a6(k)
m=this.c
f=A.a([A.B(f,B.m,p,B.e,B.i,0,p,p),A.aM(p,B.Y,!1,p,!0,B.t,p,A.aN(),n.h(k,0),p,p,p,p,p,2,m.$1("The question"),B.y,!0,p,!0,p,!1,p,B.aj,p,p,p,p,p,p,p,p,p,1,p,p,!1,"\u2022",p,new C.bQg(l),p,p,p,!1,p,p,!1,p,!0,p,B.aa,p,p,p,p,p,p,p,p,p,p,p,B.df,!0,B.a4,p,B.ao,p,p,p,p),B.P],g)
for(w=x.fo,v=0;v<4;v=s){u=D.aBv[v]
t=D.aBe[v]
s=v+1
f.push(new A.D(B.eH,new A.cd(B.aM,B.e,B.i,B.m,p,B.p,p,0,A.a([new A.y(u,p,new A.F(!0,t,p,p,p,p,22,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p),p,p,p,p,p,p,p,p,p),B.ac,new A.bz(1,B.ba,A.aM(p,B.Y,!1,p,!0,B.t,p,A.aN(),n.h(k,s),p,p,p,p,p,2,m.$1("Answer "+s),B.y,!0,p,!0,p,!1,p,B.aj,p,p,p,p,p,p,p,p,p,1,p,p,!1,"\u2022",p,new C.bQh(l,v),p,p,p,!1,p,p,!1,p,!0,p,B.aa,p,p,p,p,p,p,p,p,p,p,p,B.df,!0,B.a4,p,B.ao,p,p,p,p),p),new Av.OQ(v,l.c,new C.bQi(o,l),p,!1,D.lw,p,p,p,p,p,!1,!1,p,L.aZi,p,p,p,p,p,w)],g),p),p))}f.push(D.fDe)
f.push(B.am)
n=A.a([D.fwQ,B.ac],g)
for(r=0;r<3;++r){q=D.c9O[r]
n.push(new A.D(B.fB,A.iU(p,p,p,new A.y(""+q+"s",p,p,p,p,p,p,p,p,p,p,p),p,new C.bQj(o,l,q),l.d===q,p,p,p,p),p))}f.push(A.B(n,B.m,p,B.e,B.i,0,p,p))
return A.p(p,A.x(f,B.E,p,B.e,B.i,0,B.p),B.f,p,p,new A.o(j,p,h,i,p,p,B.n),p,p,p,B.kH,B.bg,p,p,p)},
$S:151}
C.bQf.prototype={
$0(){var w=this.a
return w.m(new C.bQe(w,this.b))},
$S:0}
C.bQe.prototype={
$0(){return B.d.cz(this.a.gCJ().c,this.b)},
$S:0}
C.bQg.prototype={
$1(d){return this.a.a=d},
$S:2}
C.bQh.prototype={
$1(d){this.a.b[this.b]=d
return d},
$S:2}
C.bQi.prototype={
$1(d){return this.a.m(new C.bQd(this.b,d))},
$S:175}
C.bQd.prototype={
$0(){var w=this.b
if(w==null)w=0
return this.a.c=w},
$S:0}
C.bQj.prototype={
$1(d){return this.a.m(new C.bQc(this.b,this.c))},
$S:8}
C.bQc.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.e_f.prototype={
$0(){var w=this.a
w.w6()
w.a.bu()
w.a.q9()},
$S:0}
C.e_e.prototype={
$0(){var w=this.a
w.w6()
w.a.bu()
w.a.q9()},
$S:0}
C.e_h.prototype={
$0(){var w=this,v=w.b
if(J.cL(v)||J.ct(w.a.d))w.a.d=v
w.a.e=!1},
$S:0}
C.e_i.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.e_j.prototype={
$0(){return this.a.e=!1},
$S:0}
C.e_d.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.e_g.prototype={
$1(d){return d.a===this.a.a},
$S:z+3}
C.e_l.prototype={
$0(){this.a.OT()
return null},
$S:0}
C.e_k.prototype={
$0(){return this.a.EI(this.b)},
$S:0}
C.dZG.prototype={
$1(d){var w=null,v=this.a,u=A.d(v?"Make private?":"Make public?",w,w,w,w,w,w,w,w,w,w),t=A.d(v?"Private trees are only visible to the owner and invited collaborators.":"Public trees appear in Family Trees for every NGMY user (view only for others).",w,w,w,w,w,w,w,w,w,w),s=A.bN(!1,B.di,w,w,!0,w,w,w,new C.dZE(d),w,w),r=A.bo(B.bP,w,w,w,w,w,w,w,w,w,w,w)
return A.ep(A.a([s,A.bH(A.d(v?"Make private":"Make public",w,w,w,w,w,w,w,w,w,w),w,new C.dZF(d),r)],x.p),w,w,w,t,w,w,w,w,u,w)},
$S:19}
C.dZE.prototype={
$0(){A.a4(this.a,!1).O(!1)
return null},
$S:0}
C.dZF.prototype={
$0(){A.a4(this.a,!1).O(!0)
return null},
$S:0}
C.dZH.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
return w.d=v.cKR(this.b)},
$S:0}
C.dZB.prototype={
$1(d){var w=this,v=w.a
if(v.c!=null)v.aTS(w.b,w.c,w.d)},
$S:9}
C.dZ2.prototype={
$1(d){return d.a===this.a.a.w.a},
$S:z+3}
C.dZ3.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.dZk.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
r=A
q=J
w=2
return A.b(C.GS(t.a.c),$async$$0)
case 2:s=r.pV(q.dI(e,new C.dZi(t)))
if(s!=null&&t.c!=null)t.m(new C.dZj(t,s))
t.a.bu()
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dZi.prototype={
$1(d){var w=this.a.d
w===$&&A.c()
return d.a===w.a},
$S:z+3}
C.dZj.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.dZl.prototype={
$1(d){var w=this.a.d
w===$&&A.c()
return d.a===w.a},
$S:z+3}
C.dZm.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.dZA.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&A.c()
w=this.b
v.d=u.cLE(C.huW(w),w)},
$S:0}
C.dZh.prototype={
$1(d){var w,v=this.a,u=v.d
u===$&&A.c()
w=v.a.c
return new C.Vx(u,w,C.aQ1(u,w),new C.dZg(v),null)},
$S:z+37}
C.dZg.prototype={
$1(d){return this.blZ(d)},
blZ(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.a
if(s.c==null){w=1
break}s.m(new C.dZf(s,d))
w=3
return A.b(s.u5(),$async$$1)
case 3:case 1:return A.h(u,v)}})
return A.i($async$$1,v)},
$S:492}
C.dZf.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
return w.d=v.bd0(this.b)},
$S:0}
C.dZx.prototype={
$1(d){return d.as},
$S:z+1}
C.dZy.prototype={
$1(d){var w=this
return new A.e0(new C.dZw(w.a,w.b,w.c,w.d,w.e),null)},
$S:21}
C.dZw.prototype={
$2(a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.c.a,i=j?B.e3:B.c,h=A.n(26),g=A.K(B.bP.j(0.5),B.r,1.5),f=A.p(k,D.bPZ,B.f,k,k,new A.o(B.bP.j(0.18),k,k,k,k,k,B.a6),k,42,k,k,k,k,k,42),e=A.d("Tree display settings",k,k,k,k,k,k,A.l(k,k,j?B.aP:B.av,k,k,k,k,k,k,k,k,18,k,k,B.u,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),d=l.b,a0=d.d
a0===$&&A.c()
w=x.p
a0=A.E(A.x(A.a([e,A.d(a0.b,k,1,B.a1,k,k,k,A.l(k,k,j?B.bt:B.bm,k,k,k,k,k,k,k,k,12.5,k,k,B.U,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)],w),B.E,k,B.e,B.i,0,B.p),1)
f=A.B(A.a([f,B.bc,a0,A.aG(k,k,k,k,A.X(B.cz,j?B.bt:B.bm,k,k,k,k),k,k,k,new C.dZq(a1),k,k,k,k,k,k)],w),B.m,k,B.e,B.i,0,k,k)
e=A.d("CHILDREN SHOWN UNDER EACH PARENT",k,k,k,k,k,k,A.l(k,k,j?B.bt:B.bm,k,k,k,k,k,k,k,k,11,k,k,B.u,k,k,!0,k,1,k,k,k,k,k,k),k,k,k)
a0=A.a([],w)
for(v=l.d,u=v.length,t=l.a,s=0;s<v.length;v.length===u||(0,A.L)(v),++s){r=v[s]
q=t.a===r?B.bP:B.bP.j(0.1)
p=new A.aQ(20,20)
o=t.a===r
n=new A.ay(B.bP,o?2:1,B.r,-1)
m=r===0?"Show all":""+r
o=o?B.c:B.bP
a0.push(A.aB(k,A.da(k,new A.y(m,k,new A.F(!0,o,k,k,k,k,14,B.u,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k),k,k,k,k,k,k,k,k,k),k,k,B.b7,new A.o(q,k,new A.bI(n,n,n,n),new A.bj(p,p,p,p),k,k,B.n),B.ht,k,k,k,k,B.BQ,k,k,k),B.y,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,new C.dZr(t,a2,r),k,k,k,k,k,k,!1,B.a3))}a0=A.bX(B.bG,a0,B.bq,k,8,8)
v=t.a
v=v===0?"Every child shows in the tree.":"Only "+v+' children show under a parent. The rest wait in a "+ more" dropdown.'
f=A.a([D.c0T,new A.D(D.bAL,f,k),new A.D(D.bAC,e,k),new A.D(B.rw,a0,k),new A.D(X.al4,A.d(v,k,k,k,k,k,k,A.l(k,k,j?B.bt:B.bm,k,k,k,k,k,k,k,k,12.5,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),k,k,k),k)],w)
e=l.e
if(e>0){a0=A.X(A3.anx,j?B.bt:B.bm,k,k,k,20)
v=e===1?"person":"people"
f.push(new A.D(D.bAE,A.B(A.a([a0,B.as,A.E(A.d(""+e+" hidden "+v,k,k,k,k,k,k,A.l(k,k,j?B.aP:B.av,k,k,k,k,k,k,k,k,k,k,k,B.H,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),1),A.Yd(k,B.bP,k,k,!1,B.y,k,k,k,k,k,k,new C.dZs(d,a2),k,k,k,k,k,k,k,k,d.f)],w),B.m,k,B.e,B.i,0,k,k),k))}f.push(B.aA)
j=A.n(20)
e=A.a([new A.ac(0,B.G,B.aC.j(0.35),B.j1,12)],x.V)
f.push(A.aB(k,A.p(k,A.B(A.a([D.fxb,B.bc,D.bEV,D.bQF],w),B.m,k,B.e,B.i,0,k,k),B.f,k,k,new A.o(k,k,k,j,e,D.c4C,B.n),k,k,k,B.hO,B.bE,k,k,k),B.y,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,new C.dZt(t,a1),k,k,k,k,k,k,!1,B.a3))
f.push(new A.D(B.w4,A.B(A.a([A.E(A.dT(B.di,new C.dZu(a1),k),1),B.as,A.E(A.bH(M.aVj,k,new C.dZv(t,a1),A.bo(B.bP,k,k,k,k,k,B.cl,k,k,k,k,k)),1)],w),B.m,k,B.e,B.i,0,k,k),k))
return A.bm(!0,A.p(k,A.cg(A.x(f,B.E,k,B.e,B.O,0,B.p),B.t,k,B.y,k,k,k,k,B.ah),B.ap,k,k,new A.o(i,k,g,h,k,k,B.n),k,k,k,B.BM,k,k,k,k),!0,!1,B.af,!0,!0)},
$S:87}
C.dZq.prototype={
$0(){A.a4(this.a,!1).O(null)
return null},
$S:0}
C.dZr.prototype={
$0(){return this.b.$1(new C.dZp(this.a,this.c))},
$S:0}
C.dZp.prototype={
$0(){return this.a.a=this.b},
$S:0}
C.dZs.prototype={
$1(d){var w=this.a
w.m(new C.dZn(w,d))
this.b.$1(new C.dZo())},
$S:8}
C.dZn.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.dZo.prototype={
$0(){},
$S:0}
C.dZt.prototype={
$0(){var w=this.a.a
A.a4(this.b,!1).O(new A.aGO(!0,w))
return null},
$S:0}
C.dZu.prototype={
$0(){A.a4(this.a,!1).O(null)
return null},
$S:0}
C.dZv.prototype={
$0(){var w=this.a.a
A.a4(this.b,!1).O(new A.aGO(!1,w))
return null},
$S:0}
C.dZz.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
w.d=v.cLr(this.b.b)
w.r.aa(0)},
$S:0}
C.dYR.prototype={
$1(d){var w,v,u,t=this.a,s=t.d
s===$&&A.c()
s=C.aid(s)
w=t.d
t=t.a
v=t.c
u=t.d
return C.hoq(t.e,this.b,null,t.f,t.r,null,s,"Add Member",w,u,v)},
$S:z+18}
C.dYS.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&A.c()
w=A.C(u.f,x.P)
w.push(this.b)
v.d=u.aEH(w)},
$S:0}
C.dZJ.prototype={
$1(d){var w=this.a.d
w===$&&A.c()
return new C.adx(this.b,w,this.c,null)},
$S:z+39}
C.dZD.prototype={
$1(d){var w=null,v=this.a.a,u=v?B.e3:B.c,t=A.n(20),s=A.X(B.lI,B.aW,w,w,w,36),r=A.d("Almost there",w,w,w,w,w,w,A.l(w,w,v?B.aP:B.av,w,w,w,w,w,w,w,w,w,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),B.K,w,w),q=this.b,p=q?"To remove a shared family tree from this phone, first create your own family tree in NGMY.":"To remove a shared family tree, you also need an active Family Tree photo pass.",o=x.p
p=A.a([A.d(p,w,w,w,w,w,w,A.l(w,w,v?B.bt:B.bm,w,w,w,w,w,w,w,w,14,w,w,w,w,1.45,!0,w,w,w,w,w,w,w,w),B.K,w,w)],o)
if(this.c&&!q)B.d.v(p,A.a([B.ae,A.d("Photo access lets you upload member photos on trees you create. You can get it from any member profile when adding a photo.",w,w,w,w,w,w,A.l(w,w,v?B.bt:B.bm,w,w,w,w,w,w,w,w,12,w,w,w,w,1.4,!0,w,w,w,w,w,w,w,w),B.K,w,w)],o))
v=A.x(p,B.m,w,B.e,B.O,0,B.p)
return A.ep(A.a([A.bH(D.fOQ,w,new C.dZC(d),A.bo(B.aW,w,w,w,w,w,w,w,w,w,w,w))],o),B.b9,w,u,v,w,s,w,new A.b8(t,B.a0),r,w)},
$S:19}
C.dZC.prototype={
$0(){A.a4(this.a,!1).O(null)
return null},
$S:0}
C.dYT.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
C.dYU.prototype={
$1(d){return d.e===this.a.a},
$S:z+1}
C.dYV.prototype={
$1(d){return d.a},
$S:z+8}
C.dYW.prototype={
$0(){var w,v,u,t,s,r,q,p,o,n,m=this,l=m.a,k=l.d
k===$&&A.c()
w=A.a([],x.u)
for(v=m.b,u=v.length,t=m.c.a,s=m.d,r=0;r<v.length;v.length===u||(0,A.L)(v),++r){q=v[r]
p=q.a
if(p!==t){o=q.d
if(o===t)o=s
n=q.e
if(n===t)n=null
w.push(new C.hV(p,q.b,q.c,o,n,q.f,q.r,q.w,q.x,q.y,q.z,q.Q,q.as,q.at))}}l.d=k.aEH(w)},
$S:0}
C.dZ_.prototype={
$1(d){var w,v,u,t,s=this.a,r=this.b,q=s.d
q===$&&A.c()
q=C.aid(q)
w=A.T(q).k("Z<1>")
q=A.C(new A.Z(q,new C.dYY(r),w),w.k("M.E"))
w=s.d
v=s.a
u=v.c
t=v.d
return C.hoq(v.e,null,r,v.f,v.r,new C.dYZ(s,r),q,"Member Profile",w,t,u)},
$S:z+18}
C.dYZ.prototype={
$0(){return this.a.aaC(this.b)},
$S:0}
C.dYY.prototype={
$1(d){return d.a!==this.a.a},
$S:z+1}
C.dZ0.prototype={
$0(){var w,v,u=this.a,t=u.d
t===$&&A.c()
w=t.f
v=A.T(w).k("N<1,hV>")
w=A.C(new A.N(w,new C.dYX(this.b),v),v.k("ak.E"))
u.d=t.aEH(w)},
$S:0}
C.dYX.prototype={
$1(d){var w=this.a
return d.a===w.a?w:d},
$S:z+41}
C.dZI.prototype={
$0(){var w=this.a
return w.d=w.e.pop()},
$S:0}
C.dZc.prototype={
$1(d){return d.length!==0},
$S:3}
C.dZd.prototype={
$1(d){var w=this
return new A.e0(new C.dZb(w.a,w.b,w.c,w.d),null)},
$S:21}
C.dZb.prototype={
$2(d,e){var w=this,v=null,u=w.b,t=u.a,s=t?B.e3:B.c,r=A.d("Collaborators",v,v,v,v,v,v,A.l(v,v,t?B.aP:B.av,v,v,v,v,v,v,v,v,v,v,v,B.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),q=x.p,p=A.a([A.d("Invited users can edit this tree and add members. QR/file recipients stay view-only.",v,v,v,v,v,v,A.l(v,v,t?B.bt:B.bm,v,v,v,v,v,v,v,v,12,v,v,v,v,1.35,!0,v,v,v,v,v,v,v,v),v,v,v),B.ae],q),o=w.c
if(o.length===0)p.push(A.d("No collaborators yet.",v,v,v,v,v,v,A.l(v,v,t?B.bt:B.bm,v,v,v,v,v,v,v,v,13,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v))
else B.d.v(p,new A.N(o,new C.dZ7(u,e,o),A.T(o).k("N<1,v>")))
p.push(B.P)
u=w.d
p.push(A.aM(v,B.Y,!1,v,!0,B.t,v,A.aN(),u,v,v,v,v,v,2,A.bt(v,new A.b5(4,A.n(12),B.dk),v,v,v,v,v,v,!0,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,"friend@email.com",v,v,v,v,v,v,v,v,"Invite by email",!0,!0,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v),B.y,!0,v,!0,v,!1,v,B.aj,v,v,v,v,v,B.mp,v,v,v,1,v,v,!1,"\u2022",v,v,v,v,v,!1,v,v,!1,v,!0,v,B.aa,v,v,v,v,v,v,v,v,v,v,v,v,!0,B.a4,v,B.ao,v,v,v,v))
p=A.x(p,B.ak,v,B.e,B.O,0,B.p)
t=w.a
return A.ep(A.a([A.bN(!1,B.di,v,v,!0,v,v,v,new C.dZ8(d),v,v),A.bH(B.Kw,v,new C.dZ9(t,u,o,e),A.bo(B.bP,v,v,v,v,v,v,v,v,v,v,v)),A.bH(D.fBC,v,new C.dZa(t,u,o,d),A.bo(B.aW,v,v,v,v,v,v,v,v,v,v,v))],q),v,v,s,new A.a5(360,v,p,v),v,v,v,v,r,v)},
$S:177}
C.dZ7.prototype={
$1(d){var w=null
return A.dG(!1,B.af,w,w,!0,w,w,w,!0,w,w,w,w,w,w,w,w,!1,w,w,w,w,w,w,w,A.d(d,w,w,w,w,w,w,A.l(w,w,this.a.a?B.aP:B.av,w,w,w,w,w,w,w,w,w,w,w,B.U,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w,A.aG(w,w,w,w,D.bYJ,w,w,w,new C.dZ6(this.b,this.c,d),w,w,w,w,w,w),w)},
$S:1953}
C.dZ6.prototype={
$0(){return this.a.$1(new C.dZ4(this.b,this.c))},
$S:0}
C.dZ4.prototype={
$0(){return B.d.W(this.a,this.b)},
$S:0}
C.dZ8.prototype={
$0(){A.a4(this.a,!1).O(!1)
return null},
$S:0}
C.dZ9.prototype={
$0(){var w=this,v=w.b,u=B.a.i(v.a.a.toLowerCase())
if(u.length!==0&&!B.d.t(w.c,u)&&u!==B.a.i(w.a.a.c.toLowerCase())){w.d.$1(new C.dZ5(w.c,u))
v.bP(0,B.cb)}},
$S:0}
C.dZ5.prototype={
$0(){return this.a.push(this.b)},
$S:0}
C.dZa.prototype={
$0(){var w=this,v=B.a.i(w.b.a.a.toLowerCase())
if(v.length!==0&&!B.d.t(w.c,v)&&v!==B.a.i(w.a.a.c.toLowerCase()))w.c.push(v)
A.a4(w.d,!1).O(!0)},
$S:0}
C.dZe.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
w.d=v.cM5(this.b,D.ug,C.GQ(v,w.a.c))},
$S:0}
C.dZQ.prototype={
$1(d){return d.as},
$S:z+1}
C.dZR.prototype={
$0(){var w=this.a.d
w===$&&A.c()
return A.iY(this.b,w)},
$S:0}
C.dZS.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
v=C.ijR(v)
return w.Wj(v==null?null:v.a)},
$S:0}
C.dZT.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m=null,l=this.a,k=l.d
k===$&&A.c()
w=l.r
v=C.hWC(k,w,l.f)
u=v.d+32
t=v.e+32
k=v.a
if(k.gcm(k)){k=A.aR(1/0,e.a,e.b)
s=A.aR(1/0,e.c,e.d)
l.ctD(new A.av(u,t),v.gbjH(),new A.av(k,s))}k=A.n(22)
s=this.b.a
r=s?D.cYh:D.cWu
q=A.K(s?B.ds:D.bgO,B.r,1)
p=A.n(22)
o=A.bS(0,A.b4(m,m,m,new C.beN(s,m),B.aw),0,0,0)
n=Math.max(e.b,e.d)
return A.p(m,A.bx(p,new A.an(B.a_,m,B.ab,B.t,A.a([o,A.bS(0,A.uN(new A.Q(n,n,n,n),new A.a5(u,t,new C.bfI(l.d,v,l.f,w,new C.dZM(l),l.gcdu(),m),m),!1,3,0.2,!0,!0,l.w),0,0,0),A.ap(10,new C.bxr(s,new C.dZN(l,e),new C.dZO(l,e),new C.dZP(l,e,u,t,v),m),m,m,m,10,m,m)],x.p),m),B.ap),B.f,m,m,new A.o(m,m,q,k,m,new A.a9(B.b_,B.b5,B.x,r,m,m),B.n),m,m,m,A_.akb,m,m,m,m)},
$S:229}
C.dZM.prototype={
$1(d){var w=this.a
w.m(new C.dZK(w,d))},
$S:2}
C.dZK.prototype={
$0(){var w=this.a.r,v=this.b
if(w.t(0,v))w.W(0,v)
else w.M(0,v)},
$S:0}
C.dZN.prototype={
$0(){var w=this.b
return this.a.bbe(1.25,new A.av(A.aR(1/0,w.a,w.b),A.aR(1/0,w.c,w.d)))},
$S:0}
C.dZO.prototype={
$0(){var w=this.b
return this.a.bbe(0.8,new A.av(A.aR(1/0,w.a,w.b),A.aR(1/0,w.c,w.d)))},
$S:0}
C.dZP.prototype={
$0(){var w=this,v=w.b
return w.a.aTS(new A.av(A.aR(1/0,v.a,v.b),A.aR(1/0,v.c,v.d)),new A.av(w.c,w.d),w.e.gbjH())},
$S:0}
C.dZU.prototype={
$0(){var w=this.a
return w.m(new C.dZL(w))},
$S:0}
C.dZL.prototype={
$0(){var w=this.a
return w.f=!w.f},
$S:0}
C.dZ1.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.d
s===$&&A.c()
w=2
return A.b(A.fI(new A.fC(s.c)),$async$$0)
case 2:t.y5("Tree code copied.")
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.ddp.prototype={
$1(d){var w=null,v=d.b,u=v.a,t=v.b
v=this.a
return A.ap(w,new C.bjy(u,C.hza(v.c,u),new C.ddo(v,u),w),w,w,t.a-42,w,t.b,w)},
$S:z+42}
C.ddo.prototype={
$0(){return this.a.w.$1(this.b)},
$S:0}
C.ddq.prototype={
$1(d){var w=null,v=d.b,u=this.a
return A.ap(w,new C.bmR(d.d,d.c,u.f.t(0,d.a),new C.ddn(u,d),u.w,w),w,w,v.a-42,w,v.b,w)},
$S:z+43}
C.ddn.prototype={
$0(){return this.a.r.$1(this.b.a)},
$S:0}
C.fBR.prototype={
$1(d){var w,v=d.e
if(this.a.aj(0,v))return v
v=this.b
w=A.T(v)
return A.pV(new A.cQ(new A.Z(v,new C.fBS(d),w.k("Z<1>")),new C.fBT(),w.k("cQ<1,m>")))},
$S:z+19}
C.fBS.prototype={
$1(d){return d.e===this.a.a},
$S:z+1}
C.fBT.prototype={
$1(d){return d.a},
$S:z+8}
C.fBP.prototype={
$1(d){return d.d===this.a.a&&d.a!==this.b},
$S:z+1}
C.fBQ.prototype={
$1(d){return d.b},
$S:z+8}
C.fBW.prototype={
$1(d){var w,v=d.e
if(this.a.aj(0,v))return v
v=this.b
w=A.T(v)
return A.pV(new A.cQ(new A.Z(v,new C.fBX(d),w.k("Z<1>")),new C.fBY(),w.k("cQ<1,m>")))},
$S:z+19}
C.fBX.prototype={
$1(d){return d.e===this.a.a},
$S:z+1}
C.fBY.prototype={
$1(d){return d.a},
$S:z+8}
C.fBU.prototype={
$1(d){var w,v=A.eE([d.a],x.N),u=this.a,t=d,s=0
for(;;){w=t.d
if(!(w!=null&&u.aj(0,w)&&v.M(0,w)))break
w=u.h(0,w)
w.toString;++s
t=w}return s},
$S:z+45}
C.fBV.prototype={
$1(d){return this.a.h(0,d.a)===this.b},
$S:z+1}
C.dds.prototype={
$0(){return this.a},
$S:z+46}
C.ddJ.prototype={
$1(d){return d!=null&&d.length!==0&&this.a.aj(0,d)},
$S:257}
C.ddB.prototype={
$2(d,e){var w=this.a.c3(0,d,new C.ddC()),v=J.a6(w)
if(!v.t(w,e))v.M(w,e)},
$S:112}
C.ddC.prototype={
$0(){return A.a([],x.s)},
$S:749}
C.ddA.prototype={
$2(d,e){var w=this.a.h(0,d)
w=w==null?null:J.f0(w,e)
return w===!0},
$S:337}
C.ddt.prototype={
$0(){return A.a([],x.u)},
$S:z+16}
C.ddz.prototype={
$1(d){var w=d.d
return this.a.$1(w)&&w!==d.a},
$S:z+1}
C.ddy.prototype={
$2(d,e){var w,v,u,t,s=this
if(!e.M(0,d))return 0
w=s.a
v=w.h(0,d)
v=J.aW(v==null?D.D3:v)
u=1
while(v.C())u+=s.$2(v.gS(v).a,e)
v=s.b.h(0,d)
v=J.aW(v==null?B.Y:v)
while(v.C()){t=v.gS(v)
if(e.t(0,t))continue
e.M(0,t)
t=w.h(0,t)
t=J.aW(t==null?D.D3:t)
while(t.C())u+=s.$2(t.gS(t).a,e)}return u},
$S:1955}
C.ddu.prototype={
$1(d){return!this.a.$1(d)},
$S:z+1}
C.ddD.prototype={
$2(a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=this,a8=a7.a
a8.M(0,a9)
w=a7.b
w.n(0,a9,b0)
v=a7.c.h(0,a9)
v.toString
u=a7.d.h(0,a9)
u=J.aW(u==null?B.Y:u)
t=v.d
for(;;){if(!u.C()){s=null
break}A:{s=u.gS(u)
if(a8.t(0,s)||t===s)break A
break}}u=s!=null
if(u){a8.M(0,s)
w.n(0,s,b0)
a7.e.n(0,a9,s)}w=A.a([],x.u)
t=a7.f
r=t.h(0,a9)
if(r!=null)B.d.v(w,r)
if(u){t=t.h(0,s)
t=J.aW(t==null?D.D3:t)
while(t.C()){r=t.gS(t)
if(r.a!==a9&&!B.d.b3(w,new C.ddE(r)))w.push(r)}}B.d.bs(w,new C.ddF(a8))
B.d.aY(w,new C.ddG())
q=C.hWB(a7.r,v,w,a7.w)
p=u?95:42
o=A.a([],x.d4)
n=A.a([],x.eU)
for(w=q.c,v=w.length,u=b0+1,m=0;m<w.length;w.length===v||(0,A.L)(w),++m){t=w[m].a
if(a8.t(0,t))continue
o.push(t)
n.push(a7.$2(t,u))}if(q.a){o.push(null)
n.push(A.a([D.eOI],x.G))}a8=A.a([],x.s)
for(w=o.length,m=0;m<o.length;o.length===w||(0,A.L)(o),++m){l=o[m]
if(l!=null)a8.push(l)}a7.x.n(0,a9,a8)
if(o.length===0)return A.a([new A.z(-p,p)],x.G)
a8=x.n
k=A.a([],a8)
j=A.a([],a8)
for(a8=n.length,m=0;m<n.length;n.length===a8||(0,A.L)(n),++m){i=n[m]
if(k.length!==0){h=Math.min(j.length,i.length)
for(g=-1/0,f=0;f<h;++f){e=f===0?22:44
g=Math.max(g,j[f]+e-i[f].a)}}else g=0
k.push(g)
for(f=0;f<i.length;++f){d=g+i[f].b
if(f<j.length)j[f]=Math.max(j[f],d)
else j.push(d)}}a0=(B.d.gI(k)+B.d.gak(k))/2
a1=A.a([new A.z(-p,p)],x.G)
for(a8=a7.z,w=q.b,v=a7.y,a2=0;a2<n.length;++a2){a3=k[a2]-a0
a4=o[a2]
if(a4!=null)v.n(0,a4,a3)
else a8.n(0,a9,new A.bpX(a3,w))
i=n[a2]
for(f=0;f<i.length;){u=i[f]
a5=a3+u.a
a6=a3+u.b;++f
if(f<a1.length){u=a1[f]
a1[f]=new A.z(Math.min(u.a,a5),Math.max(u.b,a6))}else a1.push(new A.z(a5,a6))}}return a1},
$S:1956}
C.ddE.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
C.ddF.prototype={
$1(d){return this.a.t(0,d.a)},
$S:z+1}
C.ddG.prototype={
$2(d,e){return B.o.aL(d.Q,e.Q)},
$S:z+7}
C.ddH.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o=this,n=o.a.$2(d,e),m=o.b
if(m.length!==0){for(w=J.a6(n),v=o.c,u=-1/0,t=0;t<w.gL(n);++t){s=v.h(0,e+t)
if(s==null)continue
u=Math.max(u,s+88-w.h(n,t).a)}if(u===-1/0)u=new A.bd(v,A.a7(v).k("bd<2>")).cI(0,0,B.pL)+88-w.gI(n).a}else u=0
for(w=J.a6(n),v=o.c,t=0;t<w.gL(n);++t){r=w.h(n,t)
q=e+t
p=v.h(0,q)
if(p==null)p=-1/0
v.n(0,q,Math.max(p,u+r.b))}m.push(d)
o.d.n(0,d,u)},
$S:678}
C.ddI.prototype={
$1(d){return 16+d*156},
$S:259}
C.ddr.prototype={
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
t.n(0,d,new C.G8(r,new A.t(e-53,v)))
s=s.h(0,u)
s.toString
t.n(0,u,new C.G8(s,new A.t(e+53,v)))}else{s=s.h(0,d)
s.toString
t.n(0,d,new C.G8(s,new A.t(e,v)))}t=o.r.h(0,d)
t=J.aW(t==null?B.Y:t)
s=o.w
while(t.C()){r=t.gS(t)
q=s.h(0,r)
o.$2(r,e+(q==null?0:q))}p=o.x.h(0,d)
if(p!=null){t=p.a
w=w.$1(n+1)
s=p.b
o.y.push(new C.Kp(d,new A.t(e+t,w),s,s.length))}},
$S:199}
C.ddv.prototype={
$2(d,e){var w=this.b,v=w.h(0,d).b
w=w.h(0,e).b
this.a.push(new C.aJW(new A.t(v.a,v.b+28),new A.t(w.a,w.b+28),!0,null))},
$S:112}
C.ddw.prototype={
$1(d){return d.a===this.a},
$S:z+47}
C.ddx.prototype={
$2(d,e){return B.k.aL(d.a,e.a)},
$S:750}
C.ddK.prototype={
$2(d,e){return B.k.aL(d.a,e.a)},
$S:750}
C.ddL.prototype={
$1(d){return Math.abs(d.a-this.a.a)<0.5},
$S:448}
C.ddM.prototype={
$1(d){return Math.abs(d.a-this.a.a)},
$S:195}
C.ddN.prototype={
$1(d){return d>=0.5},
$S:115}
C.fim.prototype={
$3(d,e,f){var w=null,v=A.n(10)
return A.he(A.aO(!1,v,!0,new A.a5(38,38,A.X(d,this.a.c?B.c:B.cr,w,w,w,20),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),w,e,w,w)},
$S:1958}
C.eTl.prototype={
$1(d){var w=null,v=A.n(8),u=B.bP.j(0.12),t=A.n(8)
return new A.D(B.np,A.aO(!1,v,!0,A.p(w,A.d("#"+d.Q+" "+d.b,w,4,w,w,w,w,D.fmY,B.K,w,w),B.f,w,w,new A.o(u,w,w,t,w,w,B.n),w,w,w,w,B.NK,w,w,1/0),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.eTk(this.a,d),w,w,w,w,w,w,w),w)},
$S:z+48}
C.eTk.prototype={
$0(){return this.a.r.$1(this.b)},
$S:0}
C.dty.prototype={
$0(){return this.a.as=this.b},
$S:0}
C.dtx.prototype={
$1(d){var w=null,v=A.n(18),u=this.a
u=A.d("Delete "+(u.length===0?"this member":u)+"?",w,w,w,w,w,w,B.nI,B.K,w,w)
return A.ep(A.a([A.bN(!1,B.di,w,w,!0,w,w,w,new C.dtv(d),w,w),A.bN(!1,A.d("Delete",w,w,w,w,w,w,A.l(w,w,B.mz,w,w,w,w,w,w,w,w,w,w,w,B.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w,w,!0,w,w,w,new C.dtw(d),w,w)],x.p),B.b9,B.BN,w,u,D.bBF,w,D.bDC,new A.b8(v,B.a0),w,w)},
$S:19}
C.dtv.prototype={
$0(){A.a4(this.a,!1).O(!1)
return null},
$S:0}
C.dtw.prototype={
$0(){A.a4(this.a,!1).O(!0)
return null},
$S:0}
C.dtH.prototype={
$1(d){var w=this.a.a.d
w=w==null?null:w.a
return d.a!==w},
$S:z+1}
C.dtI.prototype={
$1(d){var w=this.a
return w.m(new C.dtG(w,d))},
$S:z+49}
C.dtG.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.dtJ.prototype={
$1(d){var w=null
return A.qC(A.d(d.b,w,w,w,w,w,w,w,w,w,w),d.a,x.T)},
$S:z+20}
C.dtM.prototype={
$1(d){var w=this.a
return w.m(new C.dtF(w,d))},
$S:35}
C.dtF.prototype={
$0(){return this.a.z=this.b},
$S:0}
C.dtL.prototype={
$1(d){var w=null
return A.qC(A.d(d.b,w,w,w,w,w,w,w,w,w,w),d.a,x.T)},
$S:z+20}
C.dtN.prototype={
$1(d){var w=this.a
return w.m(new C.dtE(w,d))},
$S:35}
C.dtE.prototype={
$0(){return this.a.Q=this.b},
$S:0}
C.dtO.prototype={
$0(){var w=this.a
return w.m(new C.dtD(w))},
$S:0}
C.dtD.prototype={
$0(){var w=this.a
return w.at=Math.max(1,w.at-1)},
$S:0}
C.dtP.prototype={
$0(){var w=this.a
return w.m(new C.dtC(w))},
$S:0}
C.dtC.prototype={
$0(){return++this.a.at},
$S:0}
C.dtQ.prototype={
$0(){var w=this.a
return w.m(new C.dtB(w))},
$S:0}
C.dtB.prototype={
$0(){return--this.a.ax},
$S:0}
C.dtR.prototype={
$0(){var w=this.a
return w.m(new C.dtA(w))},
$S:0}
C.dtA.prototype={
$0(){return++this.a.ax},
$S:0}
C.dtS.prototype={
$1(d){var w=this.a
return w.m(new C.dtz(w,d))},
$S:8}
C.dtz.prototype={
$0(){return this.a.ay=this.b},
$S:0}
C.dtK.prototype={
$0(){A.a4(this.a,!1).O(null)
return null},
$S:0}
C.dtT.prototype={
$3(d,e,f){var w,v,u,t,s,r=null,q=this.a,p=q.d===d,o=A.n(12)
if(p)w=B.bP.j(0.18)
else w=q.c.a?B.e3:B.c
v=A.n(12)
if(p)u=B.bP
else u=(q.c.a?B.e8:B.bO).j(0.85)
u=A.K(u,B.r,p?1.5:1)
if(p)t=B.bP
else t=q.c.a?B.bt:B.bm
t=A.X(f,t,r,r,r,18)
if(p)s=B.bP
else s=q.c.a?B.bt:B.bm
return A.E(A.aH(!1,B.a2,!0,r,A.aO(!1,o,!0,A.da(r,A.x(A.a([t,B.au,A.d(e,r,r,r,r,r,r,A.l(r,r,s,r,r,r,r,r,r,r,r,11,r,r,B.H,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),B.m,r,B.e,B.i,0,B.p),r,r,B.b7,new A.o(w,r,u,v,r,r,B.n),B.eN,r,r,r,r,B.jQ,r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,new C.dtU(q,d),r,r,r,r,r,r,r),B.f,B.L,0,r,r,r,r,r,B.ai),1)},
$S:z+51}
C.dtU.prototype={
$0(){return this.a.e.$1(this.b)},
$S:0}
C.du2.prototype={
$0(){A.a4(this.a,!1).O(null)
return null},
$S:0}
C.cd0.prototype={
$2(d,e){return new A.bA(B.a.i(J.k(d).toLowerCase()),J.k(e),x.fK)},
$S:96}
C.cd7.prototype={
$1(d){return d.ah()},
$S:z+5}
C.cd8.prototype={
$2(d,e){var w=J.b6(e,new C.cd6(),x.a)
w=A.C(w,w.$ti.k("ak.E"))
return new A.bA(d,w,x.d2)},
$S:z+53}
C.cd6.prototype={
$1(d){return d.ah()},
$S:z+12}
C.cd2.prototype={
$1(d){return C.alj(A.a2(d,x.N,x.z))},
$S:z+9}
C.cd3.prototype={
$1(d){return d.a.length!==0},
$S:z+3}
C.cd4.prototype={
$1(d){return C.hfk(A.a2(d,x.N,x.z))},
$S:z+11}
C.cd5.prototype={
$1(d){return d.a.length!==0},
$S:z+4}
C.cdc.prototype={
$1(d){return new A.aH_(d.f.length,d.a,d.b)},
$S:z+55}
C.cdd.prototype={
$2(d,e){return B.a.aL(d.c,e.c)},
$S:609}
C.cd9.prototype={
$1(d){return d.a===B.a.i(this.a)},
$S:z+3}
C.cda.prototype={
$1(d){return d.cL3(C.GQ(d,this.a))},
$S:z+85}
C.e_2.prototype={
$1(d){return C.ul(d,this.a.a.c)},
$S:z+3}
C.e_3.prototype={
$0(){var w=this.a
w.d=this.b
w.e=this.c},
$S:0}
C.e_7.prototype={
$0(){var w=this.a
w.r=!0
w.f=this.b},
$S:0}
C.e_8.prototype={
$0(){var w=this.a
w.r=!1
w.f=null},
$S:0}
C.e__.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
r=s.a
q=r.c
w=3
return A.b(C.b0i(r.d,q,r.e,r.f),$async$$0)
case 3:p=e
if(s.c==null){w=1
break}if(p==null){s.yD("No family trees to export yet.")
w=1
break}r=s.a
w=4
return A.b(A.pl(r.c,r.e),$async$$0)
case 4:s.yD(p)
w=5
return A.b(s.JR(),$async$$0)
case 5:case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.e_0.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
r=s.a
q=r.c
w=3
return A.b(C.b0i(r.d,q,r.e,t.b),$async$$0)
case 3:p=e
if(s.c==null){w=1
break}if(p==null){s.yD("Could not export this tree.")
w=1
break}r=s.a
w=4
return A.b(A.pl(r.c,r.e),$async$$0)
case 4:s.yD(p)
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.e_1.prototype={
$0(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j
var $async$$0=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
o=r.a
n=o.a
m=n.c
w=7
return A.b(C.VA(n.d,m,n.e,r.b),$async$$0)
case 7:q=e
if(o.c==null){w=1
break}if(q==null){o.yD("No family trees found in that backup.")
w=1
break}o.a.w.$0()
if(q.c)o.yD("Restored "+q.a+" members on this phone (view only). Creator cloud data was not duplicated.")
else{n=q.a
m=q.b
l=q.b===1?"":"s"
o.yD("Restored "+n+" members across "+m+" tree"+l+".")}w=8
return A.b(o.JR(),$async$$0)
case 8:t=2
w=6
break
case 4:t=3
j=s.pop()
p=A.ab(j)
o=r.a
if(o.c==null){w=1
break}o.yD(B.a.ek(J.k(p),"StateError: ",""))
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$$0,v)},
$S:1}
C.e_6.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
r=s.a
q=r.c
w=3
return A.b(C.b0h(r.d,q,r.e,r.f),$async$$0)
case 3:p=e
r=s.c
if(r==null){w=1
break}if(p==null){s.yD("No family trees to share yet, or cloud is unavailable.")
w=1
break}w=4
return A.b(A.a4(r,!1).cc(A.eh(new C.e_5(s,p),!0,null,x.H)),$async$$0)
case 4:s=s.a
w=5
return A.b(A.pl(s.c,s.e),$async$$0)
case 5:case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.e_5.prototype={
$1(d){var w=this.b
return new C.a_M(this.a.a.c,w.b,w.a,w.c,null)},
$S:z+57}
C.e_4.prototype={
$1(d){return D.hnU},
$S:z+58}
C.e_a.prototype={
$0(){A.a4(this.a,!1).O(null)
return null},
$S:0}
C.e_b.prototype={
$1(d){var w=this.a
w=w.r?null:new C.e_9(w,d)
return new A.D(B.d2,new C.bfM(this.b,d.c,d.a,w,null),null)},
$S:1959}
C.e_9.prototype={
$0(){return this.a.Y4(this.b.b)},
$S:0}
C.dZV.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.dZW.prototype={
$0(){return this.a.d=!0},
$S:0}
C.dZX.prototype={
$0(){return this.a.e=!0},
$S:0}
C.dZY.prototype={
$0(){return this.a.d=!1},
$S:0}
C.dZZ.prototype={
$0(){A.a4(this.a,!1).O(null)
return null},
$S:0}
C.e_c.prototype={
$1(d){var w,v,u,t,s,r=this.a
if(r.e)return
for(w=d.a,v=w.length,u=0;u<w.length;w.length===v||(0,A.L)(w),++u){t=w[u].z
s=t==null?null:B.a.i(t)
if(s==null||s.length===0)continue
if(!B.a.a0(s,"NGMYFTSYNC2"))t=!A.cT(s,"ngmyFamilyTreeSync",0)
else t=!1
if(t)continue
r.e=!0
A.a4(this.b,!1).O(s)
return}},
$S:200}
C.dLD.prototype={
$1(d){return d.a===this.a.a.c},
$S:z+59}
C.dLE.prototype={
$0(){return B.d.gI(D.a5e)},
$S:z+60}
C.dLF.prototype={
$2(d,e){var w=null,v=this.a,u=v.a.c,t=v.d
t===$&&A.c()
t=t.x
t===$&&A.c()
v=v.e
v===$&&A.c()
v=v.x
v===$&&A.c()
return A.b4(A.au(A.X(this.b.d,B.c.j(0.95),w,w,D.d3Z,44),w,w,w),w,w,new C.bkG(u,t,v,w),B.aw)},
$S:63}
C.fSu.prototype={
$1(d){return A.p5(new C.fSt(this.a,d),!1,0.72,0.92,0.45,!1,null)},
$S:140}
C.fSt.prototype={
$2(d,e){var w,v,u,t=null,s=this.a,r=s.a,q=r?B.e3:B.c,p=A.a([new A.ac(0,B.G,B.w.j(r?0.35:0.08),B.t_,24)],x.V),o=r?B.e8:B.bO
o=A.p(t,t,B.f,t,t,new A.o(o,t,t,A.n(99),t,t,B.n),t,4,t,t,t,t,t,40)
w=A.a([B.aW.j(0.25),B.bP.j(0.18)],x.O)
w=A.p(t,D.bT2,B.f,t,t,new A.o(t,t,t,A.n(12),t,new A.a9(B.a5,B.a8,B.x,w,t,t),B.n),t,40,t,t,t,t,t,40)
v=A.d("Choose a theme",t,t,t,t,t,t,A.l(t,t,r?B.aP:B.av,t,t,t,t,t,t,t,t,17,t,t,B.u,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)
u=x.p
return A.p(t,A.x(A.a([B.W,o,new A.D(E.al9,A.B(A.a([w,B.bc,A.E(A.x(A.a([v,A.d("Animated thumbnails for construction, grocery, and more.",t,t,t,t,t,t,A.l(t,t,r?B.bt:B.bm,t,t,t,t,t,t,t,t,12,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],u),B.E,t,B.e,B.i,0,B.p),1)],u),B.m,t,B.e,B.i,0,t,t),t),A.E(A.io(!0,t,e,B.y,D.f9A,new C.fSs(this.b,s),20,B.akI,t,B.ah,!1),1)],u),B.m,t,B.e,B.i,0,B.p),B.f,t,t,new A.o(q,t,t,B.kY,p,t,B.n),t,t,t,t,t,t,t,t)},
$S:121}
C.fSs.prototype={
$2(d,e){var w=null,v=D.a5e[e],u=A.n(16),t=A.n(16),s=this.b.a,r=A.K(s?B.e8:B.bO,B.r,1),q=A.a([new A.ac(0,B.G,B.w.j(s?0.35:0.08),B.em,8)],x.V),p=A.n(15),o=A.E(new C.a6E(v.a,!0,w),1),n=s?B.jK:B.jb,m=A.d(v.b,w,1,B.a1,w,w,w,A.l(w,w,s?B.aP:B.av,w,w,w,w,w,w,w,w,13,w,w,B.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),l=x.p
return A.aH(!1,B.a2,!0,w,A.aO(!1,u,!0,A.eK(A.bx(p,A.x(A.a([o,A.p(w,A.x(A.a([m,A.d(v.c,w,1,B.a1,w,w,w,A.l(w,w,s?B.bt:B.bm,w,w,w,w,w,w,w,w,10,w,w,B.a7,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],l),B.E,w,B.e,B.i,0,B.p),B.f,n,w,w,w,w,w,w,B.l8,w,w,w)],l),B.ak,w,B.e,B.i,0,B.p),B.ap),w,new A.o(w,w,r,t,q,w,B.n),w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.fSr(this.a,v),w,w,w,w,w,w,w),B.f,B.L,0,w,w,w,w,w,B.ai)},
$S:81}
C.fSr.prototype={
$0(){A.a4(this.a,!1).O("ngmy:thumb:"+this.b.a)
return null},
$S:0}
C.clG.prototype={
$0(){return this.a.agK(this.b)},
$S:0}
C.fRR.prototype={
$1(d){return D.hiP},
$S:z+61}
C.fZm.prototype={
$1(d){var w=this
return new C.a1z(w.a,w.b,w.c,w.d,null)},
$S:z+62}
C.fRW.prototype={
$1(d){return new C.Zp(this.a,null)},
$S:z+63}
C.fRV.prototype={
$1(d){return D.hjO},
$S:z+64}
C.d53.prototype={
$0(){A.a4(this.a,!1).O(null)
return null},
$S:0}
C.d54.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.d52(w,d))},
$S:35}
C.d52.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.d55.prototype={
$1(d){return this.a.Kr()},
$S:2}
C.d56.prototype={
$0(){A.a4(this.a,!1).O(null)
return null},
$S:0}
C.d5_.prototype={
$0(){A.a4(this.a,!1).O(null)
return null},
$S:0}
C.d50.prototype={
$1(d){return this.a.Kr()},
$S:2}
C.d51.prototype={
$0(){A.a4(this.a,!1).O(null)
return null},
$S:0}
C.cDu.prototype={
$0(){},
$S:0}
C.cDA.prototype={
$0(){A.a4(this.a,!1).O(null)
return null},
$S:0}
C.cDB.prototype={
$0(){return this.a.aPi(-1)},
$S:0}
C.cDC.prototype={
$1(d){return this.a.m(new C.cDz())},
$S:2}
C.cDz.prototype={
$0(){},
$S:0}
C.cDD.prototype={
$0(){return this.a.aPi(1)},
$S:0}
C.cDE.prototype={
$1(d){return this.a.m(new C.cDy())},
$S:2}
C.cDy.prototype={
$0(){},
$S:0}
C.cDF.prototype={
$1(d){var w,v,u=null,t=this.a,s=t.w===d,r=d==="other"?"Other":d
r=A.d(r,u,u,u,u,u,u,A.l(u,u,u,u,u,u,u,u,u,u,u,11,u,u,B.U,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)
w=B.aW.j(0.2)
if(s)v=B.aW
else v=this.b.a?B.e8:B.bO
return A.uF(u,u,B.b0,r,u,new C.cDx(t,d),B.yt,s,w,u,new A.ay(v,1,B.r,-1),B.cc)},
$S:1960}
C.cDx.prototype={
$1(d){var w=this.a
return w.m(new C.cDv(w,this.b))},
$S:8}
C.cDv.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.cDG.prototype={
$1(d){return this.a.m(new C.cDw())},
$S:2}
C.cDw.prototype={
$0(){},
$S:0}
C.cDH.prototype={
$0(){A.a4(this.a,!1).O(null)
return null},
$S:0}
C.fhG.prototype={
$1(d){var w,v=this.a.d
v===$&&A.c()
w=B.a.i(v.a.a)
if(w.length!==0)A.a4(this.b,!1).O(w)},
$S:2}
C.fhH.prototype={
$0(){A.a4(this.a,!1).O(null)
return null},
$S:0}
C.fhI.prototype={
$0(){var w,v=this.a.d
v===$&&A.c()
w=B.a.i(v.a.a)
if(w.length===0)return
A.a4(this.b,!1).O(w)},
$S:0}
C.fhE.prototype={
$2(d,e){var w,v,u,t,s,r=null,q=this.a,p=q.d
p===$&&A.c()
p=p.x
p===$&&A.c()
w=q.a
v=w.d
u=w.f
t=q.gbAK()
w=w.e
s=A.n(B.o.E(v-1,0,v))
return A.b4(new A.D(D.bDB,new A.er(A.p(r,q.a.c,B.f,r,r,new A.o(r,r,r,s,r,r,B.n),r,r,r,r,w,r,r,r),r),r),new C.bxe(p,v,this.b.a,u,t,r),r,r,B.aw)},
$S:63}
C.fhF.prototype={
$2(d,e){var w,v,u,t,s,r=null,q=this.a,p=q.d
p===$&&A.c()
p=p.x
p===$&&A.c()
w=B.dw.aw(0,p)
p=A.n(12)
q=q.a.c
v=A.n(12)
u=A.n(12)
t=w*2.4
s=A.ar(B.aW,B.bP,w)
s.toString
s=A.a([B.b0,s,B.aW],x.O)
return A.aH(!1,B.a2,!0,p,A.aO(!1,v,!0,A.eK(D.emy,r,new A.o(r,r,A.K(B.c.j(0.4),B.r,1.5),u,r,new A.a9(new A.d9(-1.2+t,-0.5),new A.d9(1.2-t,0.8),B.x,s,r,r),B.n),r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,r),B.f,B.L,0,r,r,r,r,r,B.ai)},
$S:132}
C.fQi.prototype={
$1(d){return A.w(d.h(0,1))+","},
$S:74}
C.eQv.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.eQm.prototype={
$0(){return this.a.e=!0},
$S:0}
C.eQn.prototype={
$0(){return this.a.e=!1},
$S:0}
C.eQt.prototype={
$1(d){var w={},v=this.a.d
v===$&&A.c()
w.a=v.c
return new A.e0(new C.eQs(w,this.b),null)},
$S:21}
C.eQs.prototype={
$2(d,e){var w=null,v=this.b.a,u=v?B.e3:B.c,t=A.n(20),s=A.d("Project thumbnail",w,w,w,w,w,w,A.l(w,w,v?B.aP:B.av,w,w,w,w,w,w,w,w,17,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),r=this.a,q=x.p
return A.eT(w,u,new A.D(B.al1,A.x(A.a([s,B.am,A.d("Tap circle for themes \xb7 tap frame for gallery",w,w,w,w,w,w,A.l(w,w,v?B.bt:B.bm,w,w,w,w,w,w,w,w,11,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.ae,C.hlg(new C.eQp(r,e),r.a),B.aA,A.B(A.a([A.E(A.dT(B.di,new C.eQq(d),w),1),B.as,A.E(A.bH(B.Vl,w,new C.eQr(r,d),A.bo(B.aW,w,w,w,w,w,w,w,w,w,w,w)),1)],q),B.m,w,B.e,B.i,0,w,w)],q),B.ak,w,B.e,B.O,0,B.p),w),w,w,w,w,B.d8,w,new A.b8(t,B.a0),w)},
$S:100}
C.eQp.prototype={
$1(d){return this.b.$1(new C.eQo(this.a,d))},
$S:35}
C.eQo.prototype={
$0(){return this.a.a=this.b},
$S:0}
C.eQq.prototype={
$0(){A.a4(this.a,!1).O(null)
return null},
$S:0}
C.eQr.prototype={
$0(){var w=this.a.a
A.a4(this.b,!1).O(w)
return null},
$S:0}
C.eQu.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
return w.d=v.Ta(this.b)},
$S:0}
C.eQh.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&A.c()
w=A.C(u.d,x.Q)
w.push(this.b)
v.d=u.bd6(w)},
$S:0}
C.eQl.prototype={
$1(d){return this.bml(d)},
bml(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.a
w=3
return A.b(C.LB(s.a.c,d),$async$$1)
case 3:s=s.c
if(s.e==null){w=1
break}A.iY(s,d)
case 1:return A.h(u,v)}})
return A.i($async$$1,v)},
$S:z+21}
C.eQk.prototype={
$0(){var w,v,u=this.a,t=u.d
t===$&&A.c()
w=t.d
v=A.T(w).k("Z<1>")
w=A.C(new A.Z(w,new C.eQj(this.b),v),v.k("M.E"))
u.d=t.bd6(w)},
$S:0}
C.eQj.prototype={
$1(d){return d.a!==this.a.a},
$S:z+22}
C.eQw.prototype={
$0(){var w=this.a.d
w===$&&A.c()
return A.iY(this.b,w)},
$S:0}
C.eQx.prototype={
$1(d){return this.a.bES(d,this.b)},
$S:z+67}
C.eQi.prototype={
$0(){return this.a.aaB(this.b)},
$S:0}
C.fZc.prototype={
$1(d){return new C.adS(this.a,this.b,this.c,null)},
$S:z+68}
C.eQz.prototype={
$0(){return this.a.a_R(this.b)},
$S:0}
C.eQA.prototype={
$0(){return this.a.Qs(this.b)},
$S:0}
C.eQB.prototype={
$0(){return this.a.ED(this.b)},
$S:0}
C.eQC.prototype={
$0(){return this.a.a_S(this.b)},
$S:0}
C.eQy.prototype={
$0(){A.a4(this.a,!1).O(null)
return null},
$S:0}
C.eQc.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.eQd.prototype={
$0(){return this.a.e="Could not create QR. Check your connection and try again."},
$S:0}
C.eQe.prototype={
$0(){A.a4(this.a,!1).O(null)
return null},
$S:0}
C.eQg.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return A.b(t.d.qe(),$async$$0)
case 2:if(t.c!=null)t.m(new C.eQf(t))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.eQf.prototype={
$0(){var w=this.a
return w.f=!w.f},
$S:0}
C.eQZ.prototype={
$2(d,e){return d+e.gxf()},
$S:z+71}
C.eQV.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.eQW.prototype={
$0(){return this.a.f=!1},
$S:0}
C.eQG.prototype={
$1(d){var w,v=null,u=this.a.a,t=u?B.e3:B.c,s=A.n(24),r=A.p(v,D.bTv,B.f,v,v,new A.o(B.ax.j(u?0.18:0.08),v,A.K(B.ax.j(0.28),B.r,1),v,v,v,B.a6),v,64,v,v,v,v,v,64),q=A.d("Clear all projects?",v,v,v,v,v,v,A.l(v,v,u?B.aP:B.av,v,v,v,v,v,v,v,v,18,v,v,B.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),p=A.d("This permanently removes every worksheet project on this device. This cannot be undone.",v,v,v,v,v,v,A.l(v,v,u?B.bt:B.bm,v,v,v,v,v,v,v,v,13,v,v,v,v,1.4,!0,v,v,v,v,v,v,v,v),B.K,v,v),o=u?B.aP:B.av
u=u?B.e8:B.bO
w=x.p
return A.eT(v,t,new A.D(B.ys,A.x(A.a([r,B.aQ,q,B.P,p,B.d4,A.B(A.a([A.E(A.dT(B.nL,new C.eQE(d),A.di(v,v,v,v,v,v,v,v,v,o,v,v,B.fd,v,new A.b8(A.n(14),B.a0),new A.ay(u,1,B.r,-1),v,v,v,v)),1),B.as,A.E(A.bH(D.fSI,v,new C.eQF(d),A.bo(B.ax,v,v,v,v,v,B.fd,v,new A.b8(A.n(14),B.a0),v,v,v)),1)],w),B.m,v,B.e,B.i,0,v,v)],w),B.m,v,B.e,B.O,0,B.p),v),v,v,v,v,B.d8,v,new A.b8(s,B.a0),v)},
$S:49}
C.eQE.prototype={
$0(){A.a4(this.a,!1).O(!1)
return null},
$S:0}
C.eQF.prototype={
$0(){A.a4(this.a,!1).O(!0)
return null},
$S:0}
C.eQP.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m=null,l=this.b,k=l.a,j=k?B.e3:B.c,i=A.n(28),h=A.a([new A.ac(0,B.G,B.w.j(k?0.35:0.08),B.h_,28)],x.V),g=k?D.db3:B.a4A,f=x.p
g=A.p(m,A.x(A.a([A.p(m,m,B.f,m,m,new A.o(B.c.j(0.45),m,m,A.n(99),m,m,B.n),m,4,m,m,m,m,m,40),B.aA,D.f3c,B.au,new A.bM(B.a5,m,m,A.d("Move worksheet projects between phones",m,m,m,m,m,m,A.l(m,m,B.c.j(0.82),m,m,m,m,m,m,m,m,12,m,m,B.cy,m,m,!0,m,m,m,m,m,m,m,m),m,m,m),m)],f),B.m,m,B.e,B.i,0,B.p),B.f,m,m,new A.o(m,m,m,m,m,new A.a9(B.ay,B.aD,B.x,g,m,m),B.n),m,m,m,m,E.al6,m,m,1/0)
w=A.d("IMPORT PROJECT",m,m,m,m,m,m,A.l(m,m,k?B.bt:B.bm,m,m,m,m,m,m,m,m,11,m,m,B.H,m,m,!0,m,1.1,m,m,m,m,m,m),m,m,m)
v=this.a
u=A.B(A.a([A.E(v.b68(B.b6,B.jg,new C.eQM(v,d),l,"Camera import","Scan QR"),1),B.as,A.E(v.b68(B.cw,R.z4,new C.eQN(v,d),l,".json backup","Upload file"),1)],f),B.m,m,B.e,B.i,0,m,m)
t=A.d("DANGER ZONE",m,m,m,m,m,m,A.l(m,m,k?B.bt:B.bm,m,m,m,m,m,m,m,m,11,m,m,B.H,m,m,!0,m,1.1,m,m,m,m,m,m),m,m,m)
s=A.n(16)
r=B.ax.j(k?0.14:0.06)
q=A.n(16)
p=A.K(B.ax.j(0.28),B.r,1)
o=A.p(m,D.bSR,B.f,m,m,new A.o(B.ax.j(0.12),m,m,A.n(12),m,m,B.n),m,m,m,m,B.bT,m,m,m)
n=A.d("Clear all projects",m,m,m,m,m,m,A.l(m,m,k?B.aP:B.av,m,m,m,m,m,m,m,m,m,m,m,B.H,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)
n=A.E(A.x(A.a([n,A.d("Remove every project on this device",m,m,m,m,m,m,A.l(m,m,k?B.bt:B.bm,m,m,m,m,m,m,m,m,12,m,m,m,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)],f),B.E,m,B.e,B.i,0,B.p),1)
return A.bm(!0,new A.D(B.w1,A.p(m,A.x(A.a([g,new A.D(B.al2,A.x(A.a([w,B.W,u,B.bx,t,B.W,A.aH(!1,B.a2,!0,m,A.aO(!1,s,!0,A.p(m,A.B(A.a([o,B.bc,n,A.X(B.eE,k?B.bt:B.bm,m,m,m,m)],f),B.m,m,B.e,B.i,0,m,m),B.f,m,m,new A.o(r,m,p,q,m,m,B.n),m,m,m,m,B.bE,m,m,1/0),m,!0,m,m,m,m,m,m,m,m,m,m,m,new C.eQO(v,d,l),m,m,m,m,m,m,m),B.f,B.L,0,m,m,m,m,m,B.ai)],f),B.E,m,B.e,B.i,0,B.p),m)],f),B.m,m,B.e,B.O,0,B.p),B.ap,m,m,new A.o(j,m,m,i,h,m,B.n),m,m,m,m,m,m,m,m),m),!0,!1,B.af,!0,!0)},
$S:27}
C.eQM.prototype={
$0(){var w=0,v=A.j(x.H),u=this
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:A.a4(u.b,!1).O(null)
w=2
return A.b(u.a.vI("scan"),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.eQN.prototype={
$0(){var w=0,v=A.j(x.H),u=this
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:A.a4(u.b,!1).O(null)
w=2
return A.b(u.a.vI("file"),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.eQO.prototype={
$0(){var w=0,v=A.j(x.H),u=this
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:A.a4(u.b,!1).O(null)
w=2
return A.b(u.a.Oa(u.c),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.eQK.prototype={
$1(d){var w,v,u,t,s,r,q=null,p=this.b,o=p.a,n=o?B.e3:B.c,m=A.n(24),l=A.a([new A.ac(0,B.G,B.w.j(o?0.35:0.08),B.eU,24)],x.V),k=o?B.e8:B.bO
k=A.p(q,q,B.f,q,q,new A.o(k,q,q,A.n(99),q,q,B.n),q,4,q,q,q,q,q,40)
w=A.n(12)
v=this.c
u=o?B.bt:B.bm
u=A.bx(w,new A.a5(48,48,C.aRj(!0,A.n(12),48,P.Ol,u,v.c,48),q),B.ap)
w=A.d(v.b,q,1,B.a1,q,q,q,A.l(q,q,o?B.aP:B.av,q,q,q,q,q,q,q,q,16,q,q,B.u,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
t=v.d.length
v=A.B1(v.gxf())
s=x.p
r=this.a
return A.bm(!0,new A.D(B.w1,A.p(q,A.x(A.a([B.W,k,new A.D(D.al_,A.B(A.a([u,B.bc,A.E(A.x(A.a([w,A.d(""+t+" items \xb7 "+v,q,q,q,q,q,q,A.l(q,q,o?B.bt:B.bm,q,q,q,q,q,q,q,q,12,q,q,B.a7,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],s),B.E,q,B.e,B.i,0,B.p),1)],s),B.m,q,B.e,B.i,0,q,q),q),B.BD,r.cnI(B.uC,B.aW,new C.eQI(d),p,"QR code or backup file","Transfer project"),r.b39(!0,B.e9,B.ax,new C.eQJ(d),p,"Remove from this device","Delete project"),B.W],s),B.m,q,B.e,B.O,0,B.p),B.f,q,q,new A.o(n,q,q,m,l,q,B.n),q,q,q,q,q,q,q,q),q),!0,!1,B.af,!0,!0)},
$S:27}
C.eQI.prototype={
$0(){A.a4(this.a,!1).O("transfer")
return null},
$S:0}
C.eQJ.prototype={
$0(){A.a4(this.a,!1).O("delete")
return null},
$S:0}
C.eQL.prototype={
$1(d){return this.bmm(d)},
bmm(d){var w=0,v=A.j(x.H),u=this,t
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=u.a
w=2
return A.b(C.LB(t.a.c,d),$async$$1)
case 2:w=3
return A.b(t.vW(),$async$$1)
case 3:return A.h(null,v)}})
return A.i($async$$1,v)},
$S:z+21}
C.eR1.prototype={
$0(){var w=this.a
w.a.bu()
w.m(new C.eR0(w))},
$S:0}
C.eR0.prototype={
$0(){return this.a.r++},
$S:0}
C.eR2.prototype={
$0(){var w=this.a
return w.m(new C.eR_(w))},
$S:0}
C.eR_.prototype={
$0(){return this.a.r++},
$S:0}
C.eQD.prototype={
$0(){var w=this.a.c
w.toString
return A.iY(w,null)},
$S:0}
C.eQH.prototype={
$0(){return this.a.ch_(this.b)},
$S:0}
C.eQY.prototype={
$0(){var w=this.a
return w.m(new C.eQX(w,this.b))},
$S:0}
C.eQX.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.eQS.prototype={
$0(){return this.a.vI("scan")},
$S:0}
C.eQT.prototype={
$0(){return this.a.vI("file")},
$S:0}
C.eQU.prototype={
$1(d){return this.a.cnJ(d,this.b)},
$S:z+72}
C.eQR.prototype={
$0(){return this.a.EH(this.b)},
$S:0}
C.eQQ.prototype={
$0(){return this.a.a0m(this.b,this.c)},
$S:0}
C.cCU.prototype={
$2(d,e){return d+e.c*e.d},
$S:z+73}
C.cCT.prototype={
$1(d){return d.ah()},
$S:z+74}
C.cCR.prototype={
$1(d){return C.hF2(A.a2(d,x.N,x.z))},
$S:z+75}
C.cCS.prototype={
$1(d){return d.a.length!==0},
$S:z+22}
C.fAR.prototype={
$1(d){return d.y===D.kK},
$S:z+3}
C.fZX.prototype={
$1(d){return C.aQ1(d,this.a)},
$S:z+3}
C.fyK.prototype={
$1(d){return d.a===this.a.a},
$S:z+3}
C.bRf.prototype={
$1(d){return!d.as},
$S:z+1}
C.bRe.prototype={
$1(d){return d.ah()},
$S:z+23}
C.bRb.prototype={
$1(d){return C.hfm(A.a2(d,x.N,x.z))},
$S:z+24}
C.bRc.prototype={
$1(d){return d.a.length!==0},
$S:z+1}
C.bRd.prototype={
$1(d){return J.k(d)},
$S:17}
C.fpl.prototype={
$2(d,e){return e.e.aL(0,d.e)},
$S:z+25}
C.fla.prototype={
$1(d){return C.h5v(A.a2(d,x.N,x.z))},
$S:z+79}
C.flb.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+10}
C.flc.prototype={
$2(d,e){return e.e.aL(0,d.e)},
$S:z+25}
C.fRI.prototype={
$1(d){return J.k(d)},
$S:17}
C.fRJ.prototype={
$1(d){return d.a},
$S:z+81}
C.fRK.prototype={
$1(d){return d.length!==0},
$S:3}
C.fRL.prototype={
$1(d){return B.d.t(this.a,d.a)},
$S:z+10}
C.fRM.prototype={
$1(d){return d.Ta(null).ah()},
$S:z+82}
C.fZV.prototype={
$1(d){return d.a===this.a.a},
$S:z+10}
C.fBk.prototype={
$1(d){return d.a===this.a},
$S:z+10}
C.fEg.prototype={
$1(d){return C.alj(A.a2(d,x.N,x.z))},
$S:z+9}
C.fEh.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+3}
C.fEi.prototype={
$2(d,e){return e.r.aL(0,d.r)},
$S:z+6}
C.fEj.prototype={
$1(d){return d.ah()},
$S:z+5}
C.fEk.prototype={
$1(d){return C.ul(d,this.a)},
$S:z+3}
C.fRv.prototype={
$1(d){return C.ul(d,this.a)},
$S:z+3}
C.fZQ.prototype={
$1(d){return C.alj(A.a2(d,x.N,x.z))},
$S:z+9}
C.fZR.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+3}
C.fZS.prototype={
$1(d){return d.a===this.a.a},
$S:z+3}
C.fB1.prototype={
$1(d){return d.a===this.a},
$S:z+3}
C.fB2.prototype={
$1(d){return d.a===this.a},
$S:z+3}
C.h_0.prototype={
$1(d){return!d.as},
$S:z+1}
C.fAw.prototype={
$1(d){return d.a===this.a},
$S:z+1}
C.fAx.prototype={
$1(d){var w,v=this.a
if(d.d!==v)return!1
w=this.b
if(w!=null)if(w.e===d.a||d.e===v)return!1
return!0},
$S:z+1}
C.fAy.prototype={
$2(d,e){return B.o.aL(d.Q,e.Q)},
$S:z+7}
C.fZn.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
C.fF6.prototype={
$1(d){return d.Q},
$S:z+15}
C.fRo.prototype={
$1(d){var w=d.d
return w==null||w.length===0},
$S:z+1}
C.fEd.prototype={
$1(d){return C.alj(A.a2(d,x.N,x.z))},
$S:z+9}
C.fEe.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+3}
C.fEf.prototype={
$2(d,e){return e.r.aL(0,d.r)},
$S:z+6}
C.fRj.prototype={
$1(d){return d.a===this.a.a},
$S:z+3}
C.flI.prototype={
$1(d){return d.length!==0},
$S:3}
C.flJ.prototype={
$1(d){return C.hfm(A.a2(d,x.N,x.z))},
$S:z+24}
C.flK.prototype={
$1(d){return d.a.length!==0},
$S:z+1}
C.flL.prototype={
$1(d){return B.a.i(J.k(d).toLowerCase())},
$S:17}
C.flM.prototype={
$1(d){return d.length!==0},
$S:3}
C.flZ.prototype={
$2(d,e){return d.eR(new C.fm_(e))},
$S:1961}
C.fm_.prototype={
$1(d){$.am.$1("[family_trees] "+this.a+" fetch: "+A.w(d))
return B.ca},
$S:1962}
C.flW.prototype={
$1(d){return C.i0k(d,this.a)},
$S:z+84}
C.flX.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+3}
C.flY.prototype={
$2(d,e){return e.r.aL(0,d.r)},
$S:z+6}
C.fq1.prototype={
$1(d){return d.a},
$S:z+56}
C.fq2.prototype={
$1(d){return d.length!==0},
$S:3}
C.fq3.prototype={
$2(d,e){return e.r.aL(0,d.r)},
$S:z+6}
C.fsR.prototype={
$1(d){return d.ah()},
$S:z+5}
C.fy3.prototype={
$1(d){return C.hqN(d,C.GQ(d,this.a))},
$S:z+5}
C.fy4.prototype={
$1(d){return C.hqO(d,C.GQ(d,this.a))},
$S:z+5};(function aliases(){var w=C.aAO.prototype
w.bu4=w.q
w=C.ayY.prototype
w.bu_=w.q
w=C.aGc.prototype
w.bus=w.q
w=C.aAP.prototype
w.bu5=w.q
w=C.aAR.prototype
w.bu6=w.q
w=C.aAS.prototype
w.bu7=w.q
w=C.aMn.prototype
w.bwW=w.q
w=C.aOt.prototype
w.bze=w.q
w=C.aOu.prototype
w.bzf=w.q})();(function installTearOffs(){var w=a._instance_1u,v=a._instance_0u,u=a._instance_0i,t=a.installInstanceTearOff,s=a._static_1
w(C.aDN.prototype,"gckD","ckE",28)
var r
w(r=C.aAN.prototype,"gcdA","cdB",65)
v(r,"gaNw","NJ",0)
v(r,"gcsX","AX",0)
v(r,"gbMC","On",0)
v(r,"gcH7","yE",0)
v(r,"gcmG","a14",0)
v(r,"gbI1","O6",0)
v(r,"gbN1","Xx",0)
w(r,"gbS_","bS0",78)
v(r,"gbCo","A_",0)
v(C.aAQ.prototype,"gcH3","Fz",0)
v(r=C.al8.prototype,"gbqu","bqv",2)
v(r,"gbqn","bqo",2)
v(r,"gcIa","cIb",2)
u(r,"gq8","kF",0)
u(r=C.ajl.prototype,"geX","h6",2)
w(r,"gc9A","c9B",27)
u(C.au1.prototype,"gq8","kF",0)
v(r=C.axY.prototype,"gcTE","cTF",2)
u(r,"gq8","kF",0)
u(C.aK0.prototype,"gbqs","bqt",2)
v(C.alh.prototype,"gBq","cIl",2)
u(r=C.alf.prototype,"gcJ_","cJ0",2)
u(r,"gq8","kF",0)
v(r=C.alb.prototype,"gbpm","bpn",2)
v(r,"gcO9","cOa",2)
u(r=C.ald.prototype,"geX","h6",2)
u(r,"gkw","cHH",2)
v(r=C.al9.prototype,"gcHw","cHx",2)
u(r,"gbog","jA",2)
v(r=C.aEl.prototype,"gagm","vX",0)
v(r,"gcgf","a0d",0)
v(r,"gaRC","Ic",0)
v(r=C.aEi.prototype,"gcDb","a3d",0)
v(r,"gagm","vX",0)
v(r,"gcqX","a1J",0)
v(r,"gcga","b1m",2)
v(r,"gchc","a0r",0)
w(r,"gcdu","cdv",35)
v(r,"gbMU","Ih",0)
v(r,"gcEc","cEd",2)
v(r,"gc3M","Zd",0)
w(r,"gcbY","cbZ",36)
v(r,"gcfZ","cg_",2)
v(r=C.aCM.prototype,"gc9G","Q0",0)
v(r,"gc9I","c9J",2)
v(r,"gbJw","aad",0)
v(r=C.aEk.prototype,"gbQr","Y0",0)
v(r,"gc0_","YG",0)
v(r,"gcxo","a2B",0)
v(r,"gcty","a2c",0)
v(C.aEj.prototype,"gctf","ai6",0)
v(C.atd.prototype,"gcbW","a_P",0)
v(C.azw.prototype,"ga2X","Kr",2)
v(C.azv.prototype,"ga2X","Kr",2)
v(C.ayb.prototype,"ga2X","Kr",2)
v(r=C.aFO.prototype,"gb2x","QY",0)
v(r,"gbBc","Wd",0)
v(r,"gch0","ch1",2)
w(C.aFN.prototype,"gccP","ccQ",69)
t(C.aFP.prototype,"gaRw",0,0,null,["$1","$0"],["Ib","bKO"],70,0,0)
s(C,"hye","iak",23)})();(function inheritance(){var w=a.mixinHard,v=a.mixin,u=a.inheritMany,t=a.inherit
u(A.aD,[C.aoT,C.uC,C.nq,C.HY,C.af2,C.Kh,C.uD,C.bRL,C.t2,C.bo8,C.alq,C.ada,C.ln,C.bQm,C.atp,C.zg,C.ak5,C.Mf,C.b9E,C.a9j,C.bgS,C.af9,C.azc,C.aeY,C.aK0,C.Kp,C.G8,C.bfK,C.aJW,C.aqa,C.ddO,C.lP,C.aUj,C.aUi,C.aSh,C.u7,C.rg,C.ly,C.hV,C.kO,C.aHU])
u(A.hx,[C.fIU,C.fIT,C.fIV,C.fSn,C.fwP,C.fwQ,C.fwV,C.fGD,C.fGC,C.fGB,C.c6t,C.fSU,C.fSM,C.fSY,C.fB9,C.dMj,C.dMe,C.dMf,C.dLS,C.dLO,C.dMy,C.dMz,C.dMs,C.dMt,C.dMA,C.dMB,C.fBN,C.fEa,C.fEb,C.fRt,C.fZP,C.fB0,C.fS1,C.dd0,C.dcn,C.dcw,C.dcN,C.dcs,C.dcy,C.dcp,C.dcC,C.dcD,C.dcB,C.dcS,C.dcR,C.deM,C.deN,C.deO,C.dde,C.ddj,C.ddi,C.cLI,C.cLK,C.d4h,C.d4G,C.d4H,C.d4K,C.d4M,C.d4N,C.d4O,C.d4Q,C.d4R,C.bQ6,C.bQ0,C.fpJ,C.fZI,C.fZJ,C.fZK,C.fZF,C.fZL,C.fZM,C.fZN,C.fZE,C.fCk,C.fQv,C.fyL,C.fF5,C.bLm,C.h_6,C.fR0,C.bJB,C.bJw,C.bJy,C.bJx,C.cnm,C.cnh,C.cni,C.cng,C.cne,C.cnj,C.cMM,C.cCj,C.cCm,C.cCk,C.cCn,C.cCo,C.f2t,C.fcz,C.bQT,C.bQN,C.bQR,C.bQu,C.dYB,C.dYy,C.dYz,C.dYx,C.dYD,C.bQL,C.bQB,C.bQl,C.bQk,C.bQg,C.bQh,C.bQi,C.bQj,C.e_g,C.dZG,C.dZB,C.dZ2,C.dZi,C.dZl,C.dZh,C.dZg,C.dZx,C.dZy,C.dZs,C.dYR,C.dZJ,C.dZD,C.dYT,C.dYU,C.dYV,C.dZ_,C.dYY,C.dYX,C.dZc,C.dZd,C.dZ7,C.dZQ,C.dZM,C.ddp,C.ddq,C.fBR,C.fBS,C.fBT,C.fBP,C.fBQ,C.fBW,C.fBX,C.fBY,C.fBU,C.fBV,C.ddJ,C.ddz,C.ddu,C.ddE,C.ddF,C.ddI,C.ddw,C.ddL,C.ddM,C.ddN,C.fim,C.eTl,C.dtx,C.dtH,C.dtI,C.dtJ,C.dtM,C.dtL,C.dtN,C.dtS,C.dtT,C.cd7,C.cd6,C.cd2,C.cd3,C.cd4,C.cd5,C.cdc,C.cd9,C.cda,C.e_2,C.e_5,C.e_4,C.e_b,C.e_c,C.dLD,C.fSu,C.fRR,C.fZm,C.fRW,C.fRV,C.d54,C.d55,C.d50,C.cDC,C.cDE,C.cDF,C.cDx,C.cDG,C.fhG,C.fQi,C.eQt,C.eQp,C.eQl,C.eQj,C.eQx,C.fZc,C.eQG,C.eQP,C.eQK,C.eQL,C.eQU,C.cCT,C.cCR,C.cCS,C.fAR,C.fZX,C.fyK,C.bRf,C.bRe,C.bRb,C.bRc,C.bRd,C.fla,C.flb,C.fRI,C.fRJ,C.fRK,C.fRL,C.fRM,C.fZV,C.fBk,C.fEg,C.fEh,C.fEj,C.fEk,C.fRv,C.fZQ,C.fZR,C.fZS,C.fB1,C.fB2,C.h_0,C.fAw,C.fAx,C.fZn,C.fF6,C.fRo,C.fEd,C.fEe,C.fRj,C.flI,C.flJ,C.flK,C.flL,C.flM,C.fm_,C.flW,C.flX,C.fq1,C.fq2,C.fsR,C.fy3,C.fy4])
u(A.aw,[C.aZO,C.al6,C.aVz,C.Z4,C.bbn,C.Q8,C.a5Q,C.tr,C.I_,C.bfI,C.bjy,C.bxr,C.bmR,C.adw,C.bjx,C.adv,C.bjw,C.aCN,C.aIY,C.adx,C.G4,C.bfJ,C.acN,C.bfH,C.bfM,C.aZM,C.atd,C.adS])
u(A.mf,[C.bc_,C.bdc,C.bd3,C.aHP,C.biz,C.bo7,C.aVE,C.bc0,C.aAM,C.bbw,C.bs6,C.biH,C.bi6,C.bie,C.bfL,C.beN,C.bkG,C.bxe])
u(A.iG,[C.fSR,C.fSS,C.fST,C.fSK,C.fSL,C.fSW,C.fSX,C.dMv,C.dMh,C.dMk,C.dLZ,C.dM_,C.dM0,C.dLY,C.dM5,C.dLX,C.dM6,C.dM7,C.dLW,C.dM8,C.dLV,C.dM9,C.dLU,C.dMa,C.dLM,C.dLN,C.dLT,C.dMb,C.dLR,C.dMc,C.dLQ,C.dM1,C.dLP,C.dM2,C.dLL,C.dM3,C.dM4,C.dMw,C.dMx,C.dMl,C.dMm,C.dMn,C.dMo,C.dMp,C.dMq,C.dMr,C.dMD,C.dMu,C.fBO,C.dcl,C.dcj,C.dck,C.dcm,C.dd_,C.dcP,C.dcM,C.dco,C.dcQ,C.dcu,C.dcv,C.dcx,C.dcO,C.dct,C.dcz,C.dcX,C.dcJ,C.dcI,C.dcK,C.dcL,C.dcE,C.dcG,C.dcH,C.dcA,C.dcT,C.dcW,C.dcq,C.dcr,C.deL,C.deK,C.deJ,C.deI,C.deP,C.deH,C.deQ,C.ddf,C.ddg,C.ddh,C.ddk,C.ddd,C.ddc,C.cLJ,C.d4g,C.d4t,C.d4s,C.d4I,C.d4r,C.d4J,C.d4q,C.d4p,C.d4L,C.d4o,C.d4B,C.d4A,C.d4S,C.bQ_,C.bQ9,C.bQ1,C.bQ2,C.bQ5,C.bQ4,C.bQ7,C.bQ8,C.bQ3,C.bPY,C.bPZ,C.bRD,C.bRE,C.bRF,C.bRG,C.bRH,C.bRI,C.bRJ,C.fZH,C.fQw,C.bJA,C.bJv,C.bJt,C.bJu,C.bJs,C.cno,C.cnp,C.cnn,C.cnq,C.cns,C.cnt,C.cnu,C.cnk,C.cCi,C.cCr,C.cCs,C.cCt,C.cCq,C.cCu,C.cCv,C.cCw,C.cCx,C.cCl,C.cCp,C.bR8,C.bR7,C.bR5,C.bR3,C.bR4,C.bR0,C.bR1,C.bR2,C.bR6,C.bR_,C.f2u,C.f2v,C.f2w,C.f2x,C.f2y,C.bQX,C.bQY,C.bQZ,C.bQS,C.bQU,C.bQV,C.bQW,C.bQO,C.bQy,C.bQx,C.bQw,C.bQq,C.bQr,C.bQv,C.bQs,C.bQt,C.bQp,C.dYA,C.dYC,C.dYv,C.dYw,C.dYu,C.dYE,C.dYF,C.dYG,C.dYJ,C.dYK,C.dYL,C.dYM,C.dYN,C.dYO,C.dYP,C.dYQ,C.dYH,C.dYI,C.bQK,C.bQJ,C.bQA,C.bQz,C.bQG,C.bQH,C.bQD,C.bQE,C.bQF,C.bQC,C.bQa,C.bQb,C.bQf,C.bQe,C.bQd,C.bQc,C.e_f,C.e_e,C.e_h,C.e_i,C.e_j,C.e_d,C.e_l,C.e_k,C.dZE,C.dZF,C.dZH,C.dZ3,C.dZk,C.dZj,C.dZm,C.dZA,C.dZf,C.dZq,C.dZr,C.dZp,C.dZn,C.dZo,C.dZt,C.dZu,C.dZv,C.dZz,C.dYS,C.dZC,C.dYW,C.dYZ,C.dZ0,C.dZI,C.dZ6,C.dZ4,C.dZ8,C.dZ9,C.dZ5,C.dZa,C.dZe,C.dZR,C.dZS,C.dZK,C.dZN,C.dZO,C.dZP,C.dZU,C.dZL,C.dZ1,C.ddo,C.ddn,C.dds,C.ddC,C.ddt,C.eTk,C.dty,C.dtv,C.dtw,C.dtG,C.dtF,C.dtE,C.dtO,C.dtD,C.dtP,C.dtC,C.dtQ,C.dtB,C.dtR,C.dtA,C.dtz,C.dtK,C.dtU,C.du2,C.e_3,C.e_7,C.e_8,C.e__,C.e_0,C.e_1,C.e_6,C.e_a,C.e_9,C.dZV,C.dZW,C.dZX,C.dZY,C.dZZ,C.dLE,C.fSr,C.clG,C.d53,C.d52,C.d56,C.d5_,C.d51,C.cDu,C.cDA,C.cDB,C.cDz,C.cDD,C.cDy,C.cDv,C.cDw,C.cDH,C.fhH,C.fhI,C.eQv,C.eQm,C.eQn,C.eQo,C.eQq,C.eQr,C.eQu,C.eQh,C.eQk,C.eQw,C.eQi,C.eQz,C.eQA,C.eQB,C.eQC,C.eQy,C.eQc,C.eQd,C.eQe,C.eQg,C.eQf,C.eQV,C.eQW,C.eQE,C.eQF,C.eQM,C.eQN,C.eQO,C.eQI,C.eQJ,C.eR1,C.eR0,C.eR2,C.eR_,C.eQD,C.eQH,C.eQY,C.eQX,C.eQS,C.eQT,C.eQR,C.eQQ])
u(A.af,[C.ap4,C.Ta,C.ZN,C.ZR,C.ZP,C.Zn,C.al7,C.ajk,C.au0,C.axX,C.alg,C.ale,C.ala,C.Vx,C.alc,C.Tb,C.aqd,C.aq7,C.a_r,C.aqb,C.a_M,C.a_N,C.a6E,C.Zp,C.Zo,C.YW,C.a1z,C.FU,C.ay4,C.atc,C.at6,C.atb,C.Ou])
u(A.ah,[C.aDN,C.bfC,C.aAN,C.bg0,C.aAQ,C.bda,C.aAO,C.ayY,C.aGc,C.axY,C.aAS,C.aAR,C.aAP,C.bl_,C.ald,C.al9,C.aEl,C.aEi,C.aCM,C.aEk,C.aEj,C.bl0,C.aMn,C.azw,C.azv,C.ayb,C.bxh,C.aOt,C.aOu,C.aFO,C.bmm,C.aFN,C.bz2])
u(A.jt,[C.dMg,C.dMi,C.dMd,C.dMC,C.fEc,C.bPX,C.dcZ,C.dcY,C.dcF,C.dcU,C.dcV,C.ddl,C.bRK,C.bRC,C.bQn,C.bQo,C.fZG,C.h_5,C.bJz,C.cnr,C.cnl,C.cnf,C.f2z,C.bQM,C.bQP,C.bQQ,C.dnT,C.bQI,C.dZw,C.dZb,C.dZT,C.ddB,C.ddA,C.ddy,C.ddD,C.ddG,C.ddH,C.ddr,C.ddv,C.ddx,C.ddK,C.cd0,C.cd8,C.cdd,C.dLF,C.fSt,C.fSs,C.fhE,C.fhF,C.eQs,C.eQZ,C.cCU,C.fpl,C.flc,C.fEi,C.fAy,C.fEf,C.flZ,C.flY,C.fq3])
u(A.lA,[C.a14,C.afb,C.a1n,C.a_e,C.abR,C.aKJ,C.HZ,C.ali,C.cCV,C.cCW])
t(C.al8,C.aAO)
t(C.ajl,C.ayY)
t(C.au1,C.aGc)
t(C.bfG,C.aAS)
t(C.alh,C.bfG)
t(C.bfF,C.aAR)
t(C.alf,C.bfF)
t(C.bfE,C.aAP)
t(C.alb,C.bfE)
t(C.bkH,C.aMn)
t(C.bxf,C.aOt)
t(C.bxg,C.aOu)
t(C.aFP,C.bz2)
t(C.b9R,A.b9F)
t(C.bxi,A.a6j)
t(C.b9Q,C.bxi)
w(C.aAO,A.cf)
w(C.ayY,A.cf)
w(C.aGc,A.eQ)
w(C.aAP,A.cf)
v(C.bfE,C.aeY)
w(C.aAR,A.cf)
v(C.bfF,C.aeY)
w(C.aAS,A.cf)
v(C.bfG,C.aeY)
w(C.aMn,A.eQ)
w(C.aOt,A.cf)
w(C.aOu,A.cf)
v(C.bz2,A.eF)
v(C.bxi,A.jc)})()
A.j1(b.typeUniverse,JSON.parse('{"aZO":{"aw":[],"v":[]},"bc_":{"aC":[]},"ap4":{"af":[],"v":[]},"aDN":{"ah":["ap4"]},"Ta":{"af":[],"v":[]},"al6":{"aw":[],"v":[]},"aVz":{"aw":[],"v":[]},"bfC":{"ah":["Ta"]},"ZN":{"af":[],"v":[]},"ZR":{"af":[],"v":[]},"ZP":{"af":[],"v":[]},"Zn":{"af":[],"v":[]},"aAN":{"ah":["ZN"]},"bg0":{"ah":["ZR"]},"aAQ":{"ah":["ZP"]},"Z4":{"aw":[],"v":[]},"bdc":{"aC":[]},"bd3":{"aC":[]},"bda":{"ah":["Zn"]},"aHP":{"aC":[]},"biz":{"aC":[]},"bbn":{"aw":[],"v":[]},"al7":{"af":[],"v":[]},"al8":{"ah":["al7"]},"bo7":{"aC":[]},"aVE":{"aC":[]},"ajk":{"af":[],"v":[]},"au0":{"af":[],"v":[]},"axX":{"af":[],"v":[]},"ajl":{"ah":["ajk"]},"bc0":{"aC":[]},"Q8":{"aw":[],"v":[]},"aAM":{"aC":[]},"au1":{"ah":["au0"]},"bbw":{"aC":[]},"axY":{"ah":["axX"]},"alg":{"af":[],"v":[]},"ale":{"af":[],"v":[]},"ala":{"af":[],"v":[]},"alh":{"ah":["alg"]},"bs6":{"aC":[]},"alf":{"ah":["ale"]},"biH":{"aC":[]},"alb":{"ah":["ala"]},"bi6":{"aC":[]},"Vx":{"af":[],"v":[]},"alc":{"af":[],"v":[]},"Tb":{"af":[],"v":[]},"a5Q":{"aw":[],"v":[]},"bie":{"aC":[]},"tr":{"aw":[],"v":[]},"I_":{"aw":[],"v":[]},"bl_":{"ah":["Vx"]},"ald":{"ah":["alc"]},"al9":{"ah":["Tb"]},"aqd":{"af":[],"v":[]},"aq7":{"af":[],"v":[]},"a_r":{"af":[],"v":[]},"adx":{"aw":[],"v":[]},"aEl":{"ah":["aqd"]},"aEi":{"ah":["aq7"]},"bfI":{"aw":[],"v":[]},"bfL":{"aC":[]},"bjy":{"aw":[],"v":[]},"beN":{"aC":[]},"bxr":{"aw":[],"v":[]},"bmR":{"aw":[],"v":[]},"aCM":{"ah":["a_r"]},"adw":{"aw":[],"v":[]},"bjx":{"aw":[],"v":[]},"adv":{"aw":[],"v":[]},"bjw":{"aw":[],"v":[]},"aCN":{"aw":[],"v":[]},"aIY":{"aw":[],"v":[]},"G4":{"aw":[],"v":[]},"aqb":{"af":[],"v":[]},"a_M":{"af":[],"v":[]},"a_N":{"af":[],"v":[]},"aEk":{"ah":["aqb"]},"bfJ":{"aw":[],"v":[]},"acN":{"aw":[],"v":[]},"bfH":{"aw":[],"v":[]},"bfM":{"aw":[],"v":[]},"aEj":{"ah":["a_M"]},"bl0":{"ah":["a_N"]},"aZM":{"aw":[],"v":[]},"a6E":{"af":[],"v":[]},"bkH":{"ah":["a6E"]},"bkG":{"aC":[]},"atd":{"aw":[],"v":[]},"Zp":{"af":[],"v":[]},"Zo":{"af":[],"v":[]},"YW":{"af":[],"v":[]},"a1z":{"af":[],"v":[]},"azw":{"ah":["Zp"]},"azv":{"ah":["Zo"]},"ayb":{"ah":["YW"]},"bxh":{"ah":["a1z"]},"FU":{"af":[],"v":[]},"ay4":{"af":[],"v":[]},"bxf":{"ah":["FU"]},"bxg":{"ah":["ay4"]},"bxe":{"aC":[]},"atc":{"af":[],"v":[]},"aFO":{"ah":["atc"]},"adS":{"aw":[],"v":[]},"at6":{"af":[],"v":[]},"atb":{"af":[],"v":[]},"bmm":{"ah":["at6"]},"aFN":{"ah":["atb"]},"Ou":{"af":[],"v":[]},"aFP":{"ah":["Ou"],"eF":[]},"b9Q":{"jc":[],"fi":[]}}'))
A.CU(b.typeUniverse,JSON.parse('{"aeY":1}'))
var y={q:'\nSWAHILI THAT REAL SWAHILI SPEAKERS USE (critical): translate the MEANING and write the way a Swahili speaker in Tanzania, Kenya or eastern Congo would say it. NEVER translate word for word. Many English phrases have no literal Swahili twin and sound strange or are not understood if copied. Examples:\n- "family tree" is NOT "mti wa familia": say "ukoo" (the family line), "nasaba", or "historia ya ukoo wetu". "family book" -> "kitabu cha familia" or "kitabu cha ukoo".\n- ancestors -> "mababu" / "wazee wa zamani"; grandparents -> "babu na bibi"; great-grandparent -> "babu/bibi mkubwa"; descendants -> "wazao" / "vizazi vyetu"; generation -> "kizazi"; heritage / legacy -> "urithi", "mila na desturi"; bloodline -> "ukoo", "damu moja"; roots -> "asili yetu".\n- relatives: cousin -> "binamu"; father\'s brother -> "baba mdogo" / "baba mkubwa"; mother\'s brother -> "mjomba"; father\'s sister -> "shangazi"; mother\'s sister -> "mama mdogo" / "mama mkubwa"; nephew or niece -> "mpwa"; in-laws -> "wakwe"; brother- or sister-in-law -> "shemeji"; spouse -> "mke" (wife) / "mume" (husband) / "mwenzi wake"; firstborn -> "mzaliwa wa kwanza" / "kifungua mimba"; last-born -> "kitinda mimba"; elders -> "wazee"; clan -> "ukoo" / "kabila".\n- life events: was born -> "alizaliwa"; passed away / died -> "alifariki" / "alifariki dunia"; he married -> "alimuoa", she married -> "aliolewa na"; raised -> "alilea"; moved -> "alihamia"; blessing -> "baraka"; memories -> "kumbukumbu"; story -> "hadithi" / "simulizi"; chapter -> "sura"; page -> "ukurasa"; "our family" -> "familia yetu".\n- Use everyday words, short clear sentences and natural word order. If an idea has no good Swahili word, explain it simply instead of inventing a word. Never use a rare or strange word you are not sure about.\n- WRITE AS A NATIVE AUTHOR, NOT AS A TRANSLATOR. Build every sentence the Swahili way (short, clear, with the right subject and tense markers) and join ideas with "na", "kisha", "baadaye", "hivyo", "ndipo". Never keep the shape of an English sentence.\n- KEEP IT PLAIN AND WARM. Drop flowery English phrases and pictures that do not work in Swahili ("the tree grew wider", "bloodlines shaped nations", "carried great destinies", "sacred story", "anchors the beginning") and say the plain fact instead. Never add big claims that the facts do not give.\n- Correct Swahili grammar: noun-class agreement (mtoto mmoja, watoto watatu, kijiji kimoja, vijiji vitatu), tenses (a-li- past, a-na- now, a-ta- future, a-me- done) and the right "wa / cha / la / ya / za / vya".\n- Write people\'s names with normal capitals (Ikungu Ele, Muteleka), never in ALL CAPITALS. Place names and dates stay as they are.\n- Example. English: "Through Ekama Pele the family grew, and he had three children: Muteleka, Bembesile and Nyakasi Ebulo." Good Swahili: "Familia iliendelea kukua kupitia Ekama Pele, aliyepata watoto watatu: Muteleka, Bembesile na Nyakasi Ebulo." Bad, word for word (never write like this): "Kupitia Ekama Pele, mti ulikua mpana zaidi, ukizaa watoto watatu wa msingi."\n',z:"AI is not available right now. Please try again later.",k:"No internet connection. Try again when you are online.",B:'PathMetricIterator is not pointing to a PathMetric. This can happen in two situations:\n- The iteration has not started yet. If so, call "moveNext" to start iteration.\n- The iterator ran out of elements. If so, check that "moveNext" returns true prior to calling "current".',A:"The AI could not do that just now. Nothing was changed.",y:"The AI could not translate the book. Nothing was changed."}
var x=(function rtii(){var w=A.as
return{e2:w("aSh"),cq:w("mb"),Q:w("rg"),r:w("bw<m,m>"),c5:w("aUi"),dY:w("aUj"),fH:w("Mf"),de:w("ak5"),dN:w("Mm<G>"),gc:w("DV<G>"),A:w("ex<m?>"),e:w("HY"),B:w("nq"),P:w("hV"),df:w("ln"),k:w("kO"),x:w("aA<~>"),U:w("O<a3v>"),V:w("O<ac>"),C:w("O<rg>"),O:w("O<u>"),c:w("O<Mf>"),b:w("O<ak5>"),ac:w("O<ex<m?>>"),I:w("O<nq>"),u:w("O<hV>"),J:w("O<ln>"),_:w("O<kO>"),cl:w("O<aA<ai<a8<m,@>>>>"),R:w("O<ns>"),eU:w("O<ai<+(J,J)>>"),ez:w("O<a8<m,aD>>"),gE:w("O<a8<m,m>>"),Y:w("O<a8<m,@>>"),fD:w("O<mJ>"),bp:w("O<ow>"),g:w("O<t>"),ar:w("O<atp>"),v:w("O<h_>"),gy:w("O<a9j>"),L:w("O<+(m,m)>"),G:w("O<+(J,J)>"),E:w("O<+(J,~())>"),bd:w("O<+(m,G,R)>"),bF:w("O<+count,id,name(G,m,m)>"),F:w("O<cW>"),s:w("O<m>"),cF:w("O<at>"),aS:w("O<j0>"),dT:w("O<b9E>"),p:w("O<v>"),Z:w("O<fi>"),D:w("O<ly>"),h:w("O<azc>"),cC:w("O<bgS>"),fp:w("O<Kh>"),M:w("O<Kp>"),gZ:w("O<aHU>"),gA:w("O<af2>"),e4:w("O<af9>"),dE:w("O<aJW>"),f7:w("O<R>"),n:w("O<J>"),t:w("O<G>"),dS:w("O<aC?>"),d4:w("O<m?>"),eF:w("cw<ah<af>>"),d:w("ai<nq>"),do:w("ai<hV>"),cg:w("ai<ln>"),ax:w("ai<kO>"),fO:w("ai<a8<m,@>>"),cz:w("ai<+(m,m)>"),bC:w("ai<+count,id,name(G,m,m)>"),dy:w("ai<m>"),er:w("ai<at>"),gk:w("ai<ly>"),j:w("ai<@>"),fK:w("bA<m,m>"),d2:w("bA<m,ai<a8<m,@>>>"),a:w("a8<m,@>"),f:w("a8<@,@>"),gv:w("N<m,I0>"),cM:w("N<G,m>"),w:w("iB"),g2:w("rA"),bV:w("aoT"),fL:w("cv"),K:w("aD"),dc:w("h_"),fo:w("OQ<G>"),fz:w("+(m,m)"),ei:w("+scope,text(m,m)"),bn:w("+games,limit(R,G)"),d9:w("+dx,hidden(J,ai<hV>)"),cs:w("+count,id,name(G,m,m)"),N:w("m"),fT:w("jd<hV>"),ec:w("jd<m>"),gW:w("qX<J>"),X:w("bp<J>"),bW:w("dK"),W:w("bU<m>"),b4:w("bU<G>"),cI:w("jV<m>"),av:w("Z<zg>"),cc:w("Z<m>"),l:w("v"),gF:w("fi"),fA:w("ly"),dO:w("G8"),bw:w("adv<m?>"),cy:w("Kr"),q:w("mt"),y:w("R"),i:w("J"),z:w("@"),S:w("G"),eK:w("ai<kO>?"),m:w("aqa?"),cT:w("t?"),h5:w("+(m,m)?"),eo:w("+code,qrPayload,usesRemaining(m,m,G)?"),he:w("+qrPayload,token,usesRemaining(m,m,G)?"),gG:w("+members,trees,viewOnly(G,G,R)?"),az:w("qa?"),T:w("m?"),aD:w("dK?"),o:w("ly?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.b1Q=new A.bj(B.fE,B.bH,B.fE,B.bH)
D.acF=new A.bj(B.fE,B.it,B.fE,B.it)
D.b22=new A.bj(B.id,B.bH,B.bH,B.bH)
D.b26=new A.ay(B.cR,1.4,B.r,-1)
D.b2g=new A.ay(B.ad,1,B.r,-1)
D.ad9=new A.aZ(140,1/0,0,1/0)
D.b3F=new A.aZ(0,1/0,64,1/0)
D.b3J=new A.aZ(0,84,0,1/0)
D.adg=new A.aZ(130,1/0,0,1/0)
D.aB6=w([B.m3,B.rm,B.c],x.O)
D.c3H=new A.a9(B.ay,B.aD,B.x,D.aB6,null,null)
D.b4t=new A.o(null,null,null,null,null,D.c3H,B.n)
D.dav=w([B.aW,B.bP],x.O)
D.c5P=new A.a9(B.b_,B.b5,B.x,D.dav,null,null)
D.b4O=new A.o(null,null,null,null,null,D.c5P,B.n)
D.Xu=new A.u(1,0.0784313725490196,0.0784313725490196,0.16862745098039217,B.q)
D.fq=new A.u(1,0.16470588235294117,0.08235294117647059,0.0392156862745098,B.q)
D.den=w([B.du,D.Xu,D.fq],x.O)
D.c2T=new A.a9(B.b_,B.b5,B.x,D.den,null,null)
D.b5y=new A.o(null,null,null,null,null,D.c2T,B.n)
D.fkg=new A.F(!0,B.bX,null,null,null,null,34,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fVe=new A.y("?",null,D.fkg,null,null,null,null,null,null,null,null,null)
D.b9d=new A.ci(B.A,null,null,D.fVe,null)
D.Vc=new A.F(!0,null,null,null,null,null,70,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fDl=new A.y("\ud83c\udf33",null,D.Vc,null,null,null,null,null,null,null,null,null)
D.ae0=new A.ci(B.A,null,null,D.fDl,null)
D.fFY=new A.y("\ud83c\udfc6",null,Au.Kb,null,null,null,null,null,null,null,null,null)
D.b9o=new A.ci(B.A,null,null,D.fFY,null)
D.bbe=new A.fk(null,null,null,null,null,E.kb,null,null,null,null)
D.ae2=new A.ci(B.A,null,null,D.bbe,null)
D.kC=new A.u(1,0.984313725490196,0.9529411764705882,0.8784313725490196,B.q)
D.fkP=new A.F(!0,D.kC,null,null,null,null,15,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fF2=new A.y("No books on the shelf yet.",null,D.fkP,null,null,null,null,null,null,null,null,null)
D.emz=new A.D(B.nu,D.fF2,null)
D.b9D=new A.ci(B.A,null,null,D.emz,null)
D.frJ=new A.F(!0,D.fq,null,null,null,null,16,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fW9=new A.y("\ud83d\ude8c  On the road\u2026",null,D.frJ,null,null,null,null,null,null,null,null,null)
D.en8=new A.D(B.cm,D.fW9,null)
D.ba5=new A.ci(B.A,null,null,D.en8,null)
D.aUI=new A.y("\ud83e\uddfa",null,D.Vc,null,null,null,null,null,null,null,null,null)
D.bal=new A.ci(B.A,null,null,D.aUI,null)
D.fIr=new A.y("\ud83c\udfad",null,D.Vc,null,null,null,null,null,null,null,null,null)
D.bax=new A.ci(B.A,null,null,D.fIr,null)
D.baA=new A.ci(B.A,null,null,A9.Xk,null)
D.aen=new A.u(1,0.8980392156862745,0.39215686274509803,0.3568627450980392,B.q)
D.aet=new A.u(1,0.08627450980392157,0.18823529411764706,0.12156862745098039,B.q)
D.bcM=new A.u(1,0.058823529411764705,0.1607843137254902,0.13333333333333333,B.q)
D.bcR=new A.u(1,0.16862745098039217,0.08627450980392157,0.03137254901960784,B.q)
D.bd1=new A.u(1,0.16862745098039217,0.14901960784313725,0.34509803921568627,B.q)
D.bd3=new A.u(1,0.7098039215686275,0.40784313725490196,0.22745098039215686,B.q)
D.bd5=new A.u(1,0.2901960784313726,0.22745098039215686,0.16470588235294117,B.q)
D.bdc=new A.u(1,0.47843137254901963,0.22745098039215686,0.09411764705882353,B.q)
D.lv=new A.u(1,0.7058823529411765,0.3254901960784314,0.16470588235294117,B.q)
D.bdf=new A.u(0.6666666666666666,0,0,0.06274509803921569,B.q)
D.bdk=new A.u(1,0.12156862745098039,0.23921568627450981,0.16862745098039217,B.q)
D.bdl=new A.u(1,0.07058823529411765,0.03137254901960784,0.01568627450980392,B.q)
D.bdm=new A.u(1,0.3568627450980392,0.4823529411764706,0.6509803921568628,B.q)
D.lw=new A.u(1,0.1803921568627451,0.6078431372549019,0.30980392156862746,B.q)
D.bdX=new A.u(1,0.12156862745098039,0.2,0.12549019607843137,B.q)
D.B6=new A.u(1,0.47843137254901963,0.2901960784313726,0.1411764705882353,B.q)
D.be5=new A.u(1,0.8862745098039215,0.7529411764705882,0.4392156862745098,B.q)
D.bep=new A.u(1,1,0.9568627450980393,0.8235294117647058,B.q)
D.bes=new A.u(1,1,0.7764705882352941,0.4196078431372549,B.q)
D.bey=new A.u(1,0.16470588235294117,0.35294117647058826,0.22745098039215686,B.q)
D.beG=new A.u(1,0.2901960784313726,0.20784313725490197,0.1568627450980392,B.q)
D.af3=new A.u(1,0.2901960784313726,0.24705882352941178,0.2901960784313726,B.q)
D.beM=new A.u(1,0.30980392156862746,0.6392156862745098,0.8901960784313725,B.q)
D.XF=new A.u(1,0.5411764705882353,0.48627450980392156,0.4,B.q)
D.af6=new A.u(1,0.10196078431372549,0.0784313725490196,0.19607843137254902,B.q)
D.beZ=new A.u(1,0.12941176470588237,0.11764705882352941,0.2901960784313726,B.q)
D.XH=new A.u(1,0.7490196078431373,0.9019607843137255,1,B.q)
D.bfk=new A.u(1,0.3333333333333333,0.2196078431372549,0.1803921568627451,B.q)
D.afh=new A.u(1,0.12156862745098039,0.07450980392156863,0.043137254901960784,B.q)
D.bfH=new A.u(0.13333333333333333,0.7215686274509804,0.6901960784313725,1,B.q)
D.bfX=new A.u(1,0.043137254901960784,0.043137254901960784,0.12549019607843137,B.q)
D.bgk=new A.u(1,1,0.47843137254901963,0.10196078431372549,B.q)
D.bgt=new A.u(1,0.48627450980392156,0.41568627450980394,0.27450980392156865,B.q)
D.Fk=new A.u(1,0.8509803921568627,0.8235294117647058,0.7529411764705882,B.q)
D.bgO=new A.u(1,0.8980392156862745,0.8627450980392157,0.7843137254901961,B.q)
D.bgQ=new A.u(1,0.10196078431372549,0.16470588235294117,0.22745098039215686,B.q)
D.bgU=new A.u(1,0.23137254901960785,0.13725490196078433,0.0784313725490196,B.q)
D.afG=new A.u(1,0.47843137254901963,0.35294117647058826,0.1803921568627451,B.q)
D.bhd=new A.u(1,0.1411764705882353,0.10588235294117647,0.24705882352941178,B.q)
D.bhi=new A.u(1,0.5411764705882353,0.35294117647058826,0.16470588235294117,B.q)
D.bho=new A.u(1,0.35294117647058826,0.26666666666666666,0.1411764705882353,B.q)
D.afJ=new A.u(1,0.788235294117647,0.5215686274509804,0.16862745098039217,B.q)
D.bhw=new A.u(1,0.2901960784313726,0.2627450980392157,0.3137254901960784,B.q)
D.bhZ=new A.u(1,0.6039215686274509,0.47843137254901963,0.33725490196078434,B.q)
D.bi6=new A.u(1,0.16470588235294117,0.11372549019607843,0.10588235294117647,B.q)
D.bi8=new A.u(1,0.4196078431372549,0.30980392156862746,0.2,B.q)
D.bid=new A.u(1,0.22745098039215686,0.16862745098039217,0.3607843137254902,B.q)
D.ag_=new A.u(1,0.7215686274509804,0.7372549019607844,0.8470588235294118,B.q)
D.biQ=new A.u(0.3333333333333333,1,0.9529411764705882,0.7686274509803922,B.q)
D.agm=new A.u(1,0.5411764705882353,0.41568627450980394,0.2823529411764706,B.q)
D.bjK=new A.u(1,0.22745098039215686,0.058823529411764705,0.06274509803921569,B.q)
D.agz=new A.u(1,0.9137254901960784,0.8470588235294118,0.7058823529411765,B.q)
D.bk7=new A.u(1,1,0.6039215686274509,0.12156862745098039,B.q)
D.Fz=new A.u(1,0.2901960784313726,0.17254901960784313,0.0784313725490196,B.q)
D.bkd=new A.u(1,0.7215686274509804,0.7372549019607844,0.7843137254901961,B.q)
D.bkn=new A.u(1,0.16470588235294117,0.17254901960784313,0.41568627450980394,B.q)
D.bkp=new A.u(1,0.35294117647058826,0.12156862745098039,0.12156862745098039,B.q)
D.agD=new A.u(1,0.22745098039215686,0.35294117647058826,0.20392156862745098,B.q)
D.bkH=new A.u(1,0.08627450980392157,0.2196078431372549,0.12156862745098039,B.q)
D.bkI=new A.u(1,0.09411764705882353,0.08627450980392157,0.2196078431372549,B.q)
D.bkL=new A.u(1,0.9607843137254902,0.9411764705882353,0.8784313725490196,B.q)
D.agK=new A.u(1,0.10196078431372549,0.06274509803921569,0.09411764705882353,B.q)
D.Yl=new A.u(1,0.10196078431372549,0.058823529411764705,0.03137254901960784,B.q)
D.bl3=new A.u(1,0.5411764705882353,0.41568627450980394,0.2196078431372549,B.q)
D.blo=new A.u(1,1,0.7058823529411765,0.32941176470588235,B.q)
D.blt=new A.u(1,0.9568627450980393,1,0.6901960784313725,B.q)
D.agX=new A.u(1,1,0.5411764705882353,0.11764705882352941,B.q)
D.blA=new A.u(1,0.4196078431372549,0.2901960784313726,0.22745098039215686,B.q)
D.Yq=new A.u(1,0.7058823529411765,0.47058823529411764,0.22745098039215686,B.q)
D.blS=new A.u(1,0.4196078431372549,0.35294117647058826,0.22745098039215686,B.q)
D.blT=new A.u(1,0.9098039215686274,0.9333333333333333,0.9607843137254902,B.q)
D.FG=new A.u(1,0.47843137254901963,0.24313725490196078,0.11372549019607843,B.q)
D.bmE=new A.u(1,0.2901960784313726,0.22745098039215686,0.11764705882352941,B.q)
D.bng=new A.u(1,0.1843137254901961,0.36470588235294116,0.22745098039215686,B.q)
D.bnm=new A.u(1,1,0.7686274509803922,0.4196078431372549,B.q)
D.bnq=new A.u(0,0.3333333333333333,0.2196078431372549,0.1803921568627451,B.q)
D.q2=new A.u(1,1,0.9529411764705882,0.8627450980392157,B.q)
D.bnA=new A.u(1,0.8980392156862745,0.25882352941176473,0.10588235294117647,B.q)
D.bnE=new A.u(1,0.08235294117647059,0.11372549019607843,0.16862745098039217,B.q)
D.bnJ=new A.u(0.4,1,0.9450980392156862,0.7215686274509804,B.q)
D.bnL=new A.u(1,0.4196078431372549,0.2901960784313726,0.16470588235294117,B.q)
D.ahC=new A.u(1,0.7098039215686275,0.396078431372549,0.11372549019607843,B.q)
D.ahG=new A.u(1,0.8509803921568627,0.6980392156862745,0.4196078431372549,B.q)
D.FN=new A.u(1,0.5411764705882353,0.35294117647058826,0.2,B.q)
D.YI=new A.u(0.13333333333333333,0.7215686274509804,0.6039215686274509,0.35294117647058826,B.q)
D.ahP=new A.u(1,0.3568627450980392,0.22745098039215686,0.13333333333333333,B.q)
D.boS=new A.u(1,0.23137254901960785,0.16470588235294117,0.4196078431372549,B.q)
D.bpa=new A.u(1,1,0.6039215686274509,0.1803921568627451,B.q)
D.bpz=new A.u(1,1,0.9411764705882353,0.6274509803921569,B.q)
D.bpI=new A.u(1,0.788235294117647,0.6274509803921569,0.30980392156862746,B.q)
D.aic=new A.u(1,0.8470588235294118,0.796078431372549,0.6901960784313725,B.q)
D.YR=new A.u(1,0.4196078431372549,0.35294117647058826,0.34509803921568627,B.q)
D.bpR=new A.u(1,0.4196078431372549,0.2901960784313726,0.2196078431372549,B.q)
D.bq6=new A.u(1,0.34509803921568627,0.3764705882352941,0.43137254901960786,B.q)
D.YU=new A.u(1,0.22745098039215686,0.16470588235294117,0.13333333333333333,B.q)
D.bqk=new A.u(1,0.8509803921568627,0.7843137254901961,0.6274509803921569,B.q)
D.bqA=new A.u(1,0.5450980392156862,0.17254901960784313,0.23137254901960785,B.q)
D.YY=new A.u(1,0.06666666666666667,0.058823529411764705,0.16470588235294117,B.q)
D.bqF=new A.u(1,0.8509803921568627,0.3843137254901961,0.3568627450980392,B.q)
D.aiv=new A.u(1,1,0.9098039215686274,0.6901960784313725,B.q)
D.aix=new A.u(1,0.3568627450980392,0.22745098039215686,0.07058823529411765,B.q)
D.bqX=new A.u(1,0.8509803921568627,0.7607843137254902,0.611764705882353,B.q)
D.aiC=new A.u(1,0.10196078431372549,0.1411764705882353,0.2,B.q)
D.brp=new A.u(1,0.9019607843137255,0.8117647058823529,0.6274509803921569,B.q)
D.brr=new A.u(1,0.5411764705882353,0.47843137254901963,0.4,B.q)
D.brx=new A.u(1,0.8509803921568627,1,0.41568627450980394,B.q)
D.brD=new A.u(1,0.10196078431372549,0.10196078431372549,0.12156862745098039,B.q)
D.brL=new A.u(1,0.29411764705882354,0.4196078431372549,0.47843137254901963,B.q)
D.bsl=new A.u(1,0.8980392156862745,0.7529411764705882,0.47843137254901963,B.q)
D.bsP=new A.u(1,0.9607843137254902,0.8705882352941177,0.7019607843137254,B.q)
D.fzf=new A.y("None \u2014 root ancestor",null,null,null,null,null,null,null,null,null,null,null)
D.bwj=new A.ex(null,D.fzf,B.eY,null,x.A)
D.fIi=new A.y("None",null,null,null,null,null,null,null,null,null,null,null)
D.bwl=new A.ex(null,D.fIi,B.eY,null,x.A)
D.ajw=new A.bb(3e4)
D.bwT=new A.bb(38e5)
D.bxD=new A.ik(0,10,0,10)
D.bxM=new A.Q(0,1,0,0)
D.bxW=new A.ik(0,4,0,4)
D.bxZ=new A.Q(0,4,5,0)
D.bye=new A.Q(10,10,14,10)
D.byq=new A.ik(10,4,10,4)
D.byy=new A.ik(10,8,10,8)
D.byz=new A.Q(10,8,8,8)
D.bz1=new A.Q(12,6,12,2)
D.bzh=new A.Q(14,0,14,6)
D.bzl=new A.Q(14,10,6,6)
D.bzm=new A.Q(14,12,14,0)
D.bzq=new A.Q(14,12,14,8)
D.bzt=new A.Q(14,12,8,14)
D.bzx=new A.ik(14,14,14,14)
D.bzN=new A.Q(14,6,14,40)
D.bzQ=new A.Q(14,8,14,30)
D.bAc=new A.Q(16,2,16,10)
D.bAm=new A.Q(16,6,16,30)
D.bAo=new A.Q(16,6,16,8)
D.bAC=new A.Q(18,10,18,4)
D.bAE=new A.Q(18,12,18,0)
D.bAL=new A.Q(18,14,12,4)
D.al_=new A.Q(18,16,18,8)
D.bB1=new A.Q(18,20,18,22)
D.al3=new A.Q(18,24,18,24)
D.bB7=new A.Q(18,30,18,30)
D.bBp=new A.Q(20,10,12,20)
D.bBs=new A.Q(20,11,20,11)
D.bBD=new A.Q(20,18,16,18)
D.bBF=new A.Q(20,18,20,6)
D.bCu=new A.Q(24,32,24,28)
D.bCv=new A.Q(24,36,24,32)
D.bCz=new A.Q(26,26,24,14)
D.bCO=new A.Q(2,4,2,8)
D.bCS=new A.Q(30,0,30,0)
D.bD2=new A.Q(38,22,22,22)
D.aln=new A.Q(40,24,24,24)
D.bD4=new A.ik(40,40,40,40)
D.bD6=new A.Q(46,30,30,30)
D.alq=new A.Q(4,0,0,8)
D.bDx=new A.Q(56,40,40,40)
D.bDB=new A.Q(1.25,1.25,1.25,1.25)
D.bDC=new A.Q(60,0,60,0)
D.bDG=new A.Q(6,14,6,16)
D.bDK=new A.Q(6,4,12,0)
D.bDO=new A.Q(6,6,10,2)
D.bDV=new A.ik(7,3,7,3)
D.bEs=new A.Q(5,1.5,5,1.5)
D.bED=new A.Q(6,2.5,6,2.5)
D.fQn=new A.y("Family Games",null,B.k5,null,null,null,null,null,null,null,null,null)
D.fxT=new A.y("Quizzes, stories by the fire and tests made from the people in this tree. Win Family Stars.",null,I.aa2,null,null,null,null,null,null,null,null,null)
D.cEG=w([D.fQn,D.fxT],x.p)
D.btR=new A.fj(B.ah,B.e,B.i,B.E,null,B.p,null,0,D.cEG,null)
D.bEV=new A.bz(1,B.ba,D.btR,null)
D.fUL=new A.y("Signature",null,B.n1,null,null,null,null,null,null,null,null,null)
D.bEZ=new A.bz(1,B.ba,D.fUL,null)
D.fMZ=new A.y("MADE BY THE ONE WHO PLANTED THE TREE",null,T.tg,null,null,null,null,null,null,null,null,null)
D.bFx=new A.bz(1,B.ba,D.fMZ,null)
D.fRR=new A.y("Tell the AI what to fix",null,B.dd,null,null,null,null,null,null,null,null,null)
D.bFO=new A.bz(1,B.ba,D.fRR,null)
D.fsw=new A.F(!0,B.c,null,null,null,null,22,B.u,null,null,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fTP=new A.y("Worksheets",null,D.fsw,null,null,null,null,null,null,null,null,null)
D.fsH=new A.F(!0,E.aeP,null,null,null,null,13,B.cy,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fSG=new A.y("Track your project spending",null,D.fsH,null,null,null,null,null,null,null,null,null)
D.d20=w([D.fTP,B.au,D.fSG],x.p)
D.btt=new A.fj(B.ah,B.e,B.i,B.E,null,B.p,null,0,D.d20,null)
D.bFU=new A.bz(1,B.ba,D.btt,null)
D.fnx=new A.F(!0,E.kb,null,null,null,null,18,B.u,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fyq=new A.y("FAMILY LIBRARY",null,D.fnx,null,null,null,null,null,null,null,null,null)
D.bGb=new A.bz(1,B.ba,D.fyq,null)
D.NY=new C.HY("leather","","",0,"gold",25,"middle","double","leather","",!0,"classic")
D.w9=new C.HZ(0,"male")
D.oe=new C.HZ(1,"female")
D.yC=new C.HZ(2,"unknown")
D.ug=new C.ali(0,"owner")
D.NZ=new C.ali(1,"editor")
D.kK=new C.ali(2,"viewer")
D.anb=new A.a0(61199,"MaterialIcons",!1)
D.bL7=new A.a0(61504,"MaterialIcons",!1)
D.bL8=new A.a0(61505,"MaterialIcons",!1)
D.bLa=new A.a0(61587,"MaterialIcons",!1)
D.bLh=new A.a0(61890,"MaterialIcons",!1)
D.bM8=new A.a0(63034,"MaterialIcons",!0)
D.bMq=new A.a0(63153,"MaterialIcons",!1)
D.bMW=new A.a0(63429,"MaterialIcons",!1)
D.apt=new A.a0(984520,"MaterialIcons",!1)
D.bLG=new A.a0(62776,"MaterialIcons",!1)
D.bPi=new A.ae(D.bLG,26,B.b0,null,null,null)
D.bK5=new A.a0(57648,"MaterialIcons",!1)
D.bPC=new A.ae(D.bK5,14,B.c,null,null,null)
D.bPT=new A.ae(B.GS,17,null,null,null,null)
D.bPZ=new A.ae(B.a1n,null,B.bP,null,null,null)
D.bQq=new A.ae(E.a1s,null,null,null,null,null)
D.bQt=new A.ae(B.iX,18,E.kb,null,null,null)
D.a1d=new A.a0(62044,"MaterialIcons",!1)
D.bQy=new A.ae(D.a1d,null,B.aW,null,null,null)
D.bQF=new A.ae(B.yP,18,B.c,null,null,null)
D.bRn=new A.ae(B.e5,16,null,null,null,null)
D.bRu=new A.ae(D.a1d,32,B.aW,null,null,null)
D.bRN=new A.ae(E.anc,18,B.cR,null,null,null)
D.bSR=new A.ae(B.H4,22,B.ax,null,null,null)
D.bT2=new A.ae(B.e5,22,B.b0,null,null,null)
D.bTf=new A.ae(Z.a1i,22,B.c,null,null,null)
D.bTl=new A.ae(B.ur,52,B.c,null,null,null)
D.bTv=new A.ae(B.H4,30,B.ax,null,null,null)
D.bTO=new A.ae(B.a1x,null,B.c,null,null,null)
D.aq8=new A.ae(B.uC,22,B.c,null,null,null)
D.bTX=new A.ae(B.e5,17,null,null,null,null)
D.bUj=new A.ae(B.wq,26,B.cR,null,null,null)
D.bV4=new A.ae(B.a1E,16,null,null,null,null)
D.bVQ=new A.ae(B.ur,24,B.c,null,null,null)
D.bVV=new A.ae(B.Or,20,B.rR,null,null,null)
D.bW_=new A.ae(B.GQ,null,B.bP,null,null,null)
D.bW7=new A.ae(B.iX,18,B.c,null,null,null)
D.bWM=new A.ae(B.cz,22,B.ad,null,null,null)
D.bXC=new A.ae(B.e9,16,B.ad,null,null,null)
D.bXO=new A.ae(D.a1d,20,B.aW,null,null,null)
D.aqy=new A.ae(B.hx,20,null,null,null,null)
D.bYi=new A.ae(B.cz,18,D.kC,null,null,null)
D.bYz=new A.ae(B.yX,28,B.c,null,null,null)
D.bYJ=new A.ae(B.Oh,null,B.f8,null,null,null)
D.bZ2=new A.ae(B.yX,24,B.c,null,null,null)
D.bZu=new A.ae(B.ur,null,B.aW,null,null,null)
D.bZv=new A.ae(B.jT,20,B.cR,null,null,null)
D.bZP=new A.ae(B.GS,16,null,null,null,null)
D.c0n=new A.e6(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,!0,B.jQ,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,B.eF,!0,null,null,null,null)
D.arf=new C.a5Q(10,null)
D.c0T=new C.a5Q(12,null)
D.c0U=new C.a5Q(14,null)
D.dim=w([B.bv,B.aW,B.ff,B.b0],x.O)
D.c24=new A.a9(B.ay,B.aD,B.x,D.dim,null,null)
D.bmq=new A.u(1,0.5411764705882353,0.35294117647058826,0.16862745098039217,B.q)
D.bsr=new A.u(1,0.23137254901960785,0.13725490196078433,0.07058823529411765,B.q)
D.cZy=w([D.bmq,D.bsr],x.O)
D.c2f=new A.a9(B.b_,B.b5,B.x,D.cZy,null,null)
D.dcs=w([B.f6,B.fM,B.ff],x.O)
D.c2l=new A.a9(B.ay,B.aD,B.x,D.dcs,null,null)
D.ahr=new A.u(1,0.16470588235294117,0.09019607843137255,0.047058823529411764,B.q)
D.bdn=new A.u(1,0.08627450980392157,0.043137254901960784,0.0196078431372549,B.q)
D.d0J=w([D.ahr,D.bdn],x.O)
D.c2U=new A.a9(B.b_,B.b5,B.x,D.d0J,null,null)
D.bh2=new A.u(1,0.2901960784313726,0.16470588235294117,0.08235294117647059,B.q)
D.aAq=w([D.bh2,D.ahr],x.O)
D.c3d=new A.a9(B.ay,B.aD,B.x,D.aAq,null,null)
D.agh=new A.u(1,0.6039215686274509,0.3176470588235294,0.1568627450980392,B.q)
D.bjB=new A.u(1,0.35294117647058826,0.16470588235294117,0.07058823529411765,B.q)
D.dby=w([D.agh,D.bjB],x.O)
D.c3S=new A.a9(B.a5,B.a8,B.x,D.dby,null,null)
D.dph=w([B.bz,B.nf],x.O)
D.c3U=new A.a9(B.b_,B.b5,B.x,D.dph,null,null)
D.bml=new A.u(1,0.9137254901960784,0.8509803921568627,0.7019607843137254,B.q)
D.dqe=w([D.bml,D.kC,D.kC,L.YH],x.O)
D.dsK=w([0,0.07,0.9,1],x.n)
D.c4p=new A.a9(B.a5,B.a8,B.x,D.dqe,D.dsK,null)
D.c4z=new A.a9(B.ay,B.aD,B.x,B.RY,null,null)
D.cXo=w([B.aC,D.lv],x.O)
D.c4C=new A.a9(B.a5,B.a8,B.x,D.cXo,null,null)
D.doR=w([B.b0,B.aW,B.bP],x.O)
D.c5A=new A.a9(B.ay,B.aD,B.x,D.doR,null,null)
D.c9O=w([10,20,30],x.t)
D.cjJ=w([-1,-0.4,0.3,1],x.n)
D.crc=w([B.bv,B.b0,B.f6],x.O)
D.crk=w([B.br,B.aC,B.jq],x.O)
D.crm=w(["\xd7","\xf7","100","0","\u221e","%"],x.s)
D.cs2=w([30,140,262,360],x.n)
D.bkR=new A.u(1,0.07058823529411765,0.20784313725490197,0.1803921568627451,B.q)
D.cxz=w([D.bkR,E.ah6],x.O)
D.ehb=new A.t(1,2)
D.f5H=new A.cW(B.aS,D.ehb,3)
D.axk=w([D.f5H],x.F)
D.cEY=w([B.hd,B.cf,B.fb],x.O)
D.cHH=w([B.bM,B.bs,B.bo],x.O)
D.bGK=new C.uC("classic","Classic leather","Gold-edged brown leather",D.aAq,E.kb,E.kb,"\u2766",B.K,!0,!1,!1,!1)
D.bcw=new A.u(1,0.23137254901960785,0.12156862745098039,0.054901960784313725,B.q)
D.brf=new A.u(1,0.10980392156862745,0.058823529411764705,0.027450980392156862,B.q)
D.d3J=w([D.bcw,D.brf],x.O)
D.aha=new A.u(1,0.9490196078431372,0.8235294117647058,0.47843137254901963,B.q)
D.bGF=new C.uC("ornate","Ornate gold","Double gold border and flourishes",D.d3J,D.aha,D.aha,"\u2726",B.K,!0,!0,!0,!1)
D.bgC=new A.u(1,0.9647058823529412,0.9137254901960784,0.7843137254901961,B.q)
D.bnb=new A.u(1,0.9019607843137255,0.8274509803921568,0.6392156862745098,B.q)
D.cWi=w([D.bgC,D.bnb],x.O)
D.bGE=new C.uC("parchment","Parchment","Old paper with dark ink",D.cWi,D.FG,K.iQ,"\u2767",B.K,!0,!1,!1,!0)
D.aev=new A.u(1,0.984313725490196,0.9686274509803922,0.9333333333333333,B.q)
D.bpv=new A.u(1,0.9450980392156862,0.9176470588235294,0.8588235294117647,B.q)
D.dn6=w([D.aev,D.bpv],x.O)
D.bkk=new A.u(1,0.6039215686274509,0.5607843137254902,0.47058823529411764,B.q)
D.boN=new A.u(1,0.16862745098039217,0.16862745098039217,0.16862745098039217,B.q)
D.bGH=new C.uC("minimal","Clean paper","Plain and elegant, like a printed book",D.dn6,D.bkk,D.boN,"",B.K,!0,!0,!1,!0)
D.bGJ=new C.uC("midnight","Midnight","Deep blue with silver stars",I.aAJ,B.cq,B.bN,"\u2727",B.K,!0,!0,!1,!1)
D.bGD=new C.uC("emerald","Emerald library","Green cloth, title on the left",W.axJ,E.kb,B.fU,"\u25c6",B.bj,!0,!1,!1,!1)
D.bpZ=new A.u(1,0.24705882352941178,0.0392156862745098,0.0392156862745098,B.q)
D.dl8=w([B.ej,D.bpZ],x.O)
D.blz=new A.u(1,0.9411764705882353,0.6588235294117647,0.7215686274509804,B.q)
D.bmL=new A.u(1,0.9882352941176471,0.9058823529411765,0.9254901960784314,B.q)
D.bGI=new C.uC("rose","Rose vintage","Burgundy with rose-gold lettering",D.dl8,D.blz,D.bmL,"\u2740",B.K,!0,!1,!0,!1)
D.dpP=w([B.cr,F.ng],x.O)
D.bGG=new C.uC("modern","Modern","Dark, bold, left-aligned",D.dpP,B.aK,B.c,"",B.bj,!1,!0,!1,!1)
D.a3J=w([D.bGK,D.bGF,D.bGE,D.bGH,D.bGJ,D.bGD,D.bGI,D.bGG],A.as("O<uC>"))
D.cKE=w(["Nairobi","Lagos","Accra","Kampala","Dar es Salaam","Kigali","Addis Ababa","Dakar"],x.s)
D.dpC=w(["I am because we are","Good morning","Big river","Come and eat"],x.s)
D.bGV=new C.ln('What does "Ubuntu" mean?',D.dpC,0,"Ubuntu means a person is a person through other people.","Listen, children. Ubuntu is an old word: I am because we are. Nobody grows alone.","culture",20)
D.cY3=w(["Bibi","Babu","Dada","Kaka"],x.s)
D.bGY=new C.ln("In Swahili, what do we call a grandmother?",D.cY3,0,"Bibi is grandmother. Babu is grandfather.","Your grandmother is Bibi, and your grandfather is Babu. Say it with respect.","culture",20)
D.cXV=w(["Babu","Mama","Baba","Dada"],x.s)
D.bGT=new C.ln("In Swahili, what do we call a grandfather?",D.cXV,0,"Babu is grandfather.","Babu is the grandfather, the one who keeps the old stories.","culture",20)
D.cZ9=w(["Dada","Kaka","Bibi","Mtoto"],x.s)
D.bGX=new C.ln("What is a sister called in Swahili?",D.cZ9,0,"Dada is sister. Kaka is brother.","A sister is Dada and a brother is Kaka. Brothers and sisters carry each other.","culture",20)
D.d3a=w(["Kaka","Dada","Babu","Mzee"],x.s)
D.bGU=new C.ln("What is a brother called in Swahili?",D.d3a,0,"Kaka is brother.","A brother is Kaka. Look after your Kaka and your Dada.","culture",20)
D.cXU=w(["Baba","Mama","Bibi","Kaka"],x.s)
D.bH4=new C.ln("Which word means father in Swahili?",D.cXU,0,"Baba is father and Mama is mother.","Baba is father and Mama is mother. They are the roots of the home.","culture",20)
D.dqL=w(["Unity is strength","Rain is coming","The market is open","The night is long"],x.s)
D.bH3=new C.ln('"Umoja ni nguvu" means...',D.dqL,0,"Together we are strong.","Umoja ni nguvu: unity is strength. One stick breaks, but a bundle of sticks does not.","culture",20)
D.dnO=w(["Little by little fills the measure","Big rivers need bridges","Cows love green grass","Fire needs wood"],x.s)
D.bH5=new C.ln('"Haba na haba hujaza kibaba" teaches us...',D.dnO,0,"Small steps add up to great things.","Haba na haba hujaza kibaba: little by little fills the measure. Patience builds a family.","culture",20)
D.d0R=w(["Everyone helps to raise the children","Villages must be big","Children build houses","Only parents teach"],x.s)
D.bH2=new C.ln('The African saying "It takes a village to raise a child" means...',D.d0R,0,"Aunts, uncles, elders and neighbours all help.","It takes a whole village to raise a child. Aunties, uncles, elders and neighbours all teach.","culture",20)
D.dr4=w(["The elders","The market","The river","The drum"],x.s)
D.bGZ=new C.ln("Who is the traditional keeper of the family stories?",D.dr4,0,"Elders hold the memory of the family.","The elders are a library that walks. When an elder is gone, a library burns, so we listen while we can.","culture",20)
D.cOO=w(["To share stories and wisdom","To race each other","To hide from the sun","To count cows"],x.s)
D.bGW=new C.ln("Why do families sit round the fire at night?",D.cOO,0,"The fire is where the old teach the young.","At night we sit round the fire. The flames are warm, and the stories are warmer.","culture",20)
D.dpR=w(["Let us all pull together","A kind of fish","A long road","A rain dance"],x.s)
D.bH0=new C.ln('What does "Harambee" mean?',D.dpR,0,"Harambee: everyone pulls together.","Harambee! It means let us all pull together, like many hands on one rope.","culture",20)
D.d5V=w(["An elder","A baby","A market","A cow"],x.s)
D.bH_=new C.ln('"Mzee" is a respectful word for...',D.d5V,0,"We honour our Mzee.","Mzee is how we greet an elder with honour. We bow our heads and listen.","culture",20)
D.dl_=w(["Respect for an elder","Hunger","Sleepiness","A race"],x.s)
D.bH1=new C.ln('What does "Shikamoo" show?',D.dl_,0,"Children greet elders with Shikamoo, and the elder answers Marahaba.","Shikamoo is how a child greets an elder, and the elder says Marahaba. Respect travels both ways.","culture",20)
D.axE=w([D.bGV,D.bGY,D.bGT,D.bGX,D.bGU,D.bH4,D.bH3,D.bH5,D.bH2,D.bGZ,D.bGW,D.bH0,D.bH_,D.bH1],x.J)
D.cT9=w([90,360],x.n)
D.cVQ=w([B.bP,B.bl],x.O)
D.bma=new A.u(1,0.9372549019607843,0.9647058823529412,0.9372549019607843,B.q)
D.cWu=w([D.aev,D.bma],x.O)
D.cX7=w([-1,-0.3,0.4,1],x.n)
D.cY_=w([0,0.45,0.72,0.92,1],x.n)
D.bgy=new A.u(1,0.054901960784313725,0.10196078431372549,0.09019607843137255,B.q)
D.cYh=w([D.bgy,B.de],x.O)
D.bek=new A.u(1,0.4196078431372549,0.1803921568627451,0.37254901960784315,B.q)
D.aiM=new A.u(1,0.8784313725490196,0.5411764705882353,0.27058823529411763,B.q)
D.cYQ=w([B.du,D.bek,D.aiM],x.O)
D.cZO=w([B.b8,B.j8,B.oY],x.O)
D.bh4=new A.u(1,0.23137254901960785,0.16862745098039217,0.20392156862745098,B.q)
D.boE=new A.u(1,0.22745098039215686,0.1568627450980392,0.1411764705882353,B.q)
D.be0=new A.u(1,0.1411764705882353,0.09019607843137255,0.0784313725490196,B.q)
D.cZT=w([D.bh4,D.boE,D.be0],x.O)
D.d_c=w(["Rewrite the whole book in natural, professional Swahili","Correct the spelling in the whole book",'Change the word "tree" to the right Swahili word',"Use simple words everyone understands","Make every page a little shorter"],x.s)
D.d_m=w(["Really, Babu?","Eh! I did not know that.","Tell us more!","Wow...","Mmm, I see.","Ooh, that is a good one."],x.s)
D.hl5=new C.ada(78,424,48,44,56)
D.hl3=new C.ada(214,396,34,34,42)
D.hl4=new C.ada(442,452,56,50,64)
D.ayD=w([D.hl5,D.hl3,D.hl4],A.as("O<ada>"))
D.d_V=w(["Farmer","Teacher","Nurse","Driver","Builder","Trader","Doctor","Tailor"],x.s)
D.bdh=new A.u(1,0.4196078431372549,0.19607843137254902,0.08627450980392157,B.q)
D.biP=new A.u(1,0.2901960784313726,0.13333333333333333,0.06274509803921569,B.q)
D.dsG=w([D.agh,D.bdh,D.biP],x.O)
D.bGL=new C.uD("leather","Leather",D.dsG,"vintage")
D.d6W=w([B.d7,B.Me,Ac.XV],x.O)
D.bGS=new C.uD("midnight","Midnight",D.d6W,"starry")
D.cZP=w([B.ei,B.dY,B.l5],x.O)
D.bGR=new C.uD("forest","Forest",D.cZP,"story")
D.duH=w([B.ek,B.ej,B.jM],x.O)
D.bGO=new C.uD("burgundy","Burgundy",D.duH,"royal")
D.cHf=w([B.aC,B.o6,B.nS],x.O)
D.bGP=new C.uD("royal","Royal",D.cHf,"royal")
D.d1m=w([B.bs,B.cr,F.ng],x.O)
D.bGM=new C.uD("charcoal","Charcoal",D.d1m,"geo")
D.dsP=w([B.cd,B.dH,B.xW],x.O)
D.bGQ=new C.uD("sunset","Sunset",D.dsP,"sunset")
D.dtw=w([B.j8,B.FH,B.XY],x.O)
D.bGN=new C.uD("ocean","Ocean",D.dtw,"band")
D.zo=w([D.bGL,D.bGS,D.bGR,D.bGO,D.bGP,D.bGM,D.bGQ,D.bGN],A.as("O<uD>"))
D.d1R=w(["classic","ornate","parchment","minimal","midnight","emerald","rose","modern"],x.s)
D.d2s=w([B.al,B.aJ,B.N],x.O)
D.d3O=w([B.ej,B.dY,B.d7,B.fV,B.xY,B.cR,B.ke,B.e7,B.d1],x.O)
D.d3P=w(["Make the cover dark blue with silver letters","Put the title at the top and make it bigger","Use a star sky and a heart picture","Add our family name under the title"],x.s)
D.f5I=new A.cW(B.dm,B.dC,8)
D.d3Z=w([D.f5I],x.F)
D.d55=w([B.c_,B.dH,B.ka],x.O)
D.bfd=new A.u(1,0.0196078431372549,0.03137254901960784,0.12156862745098039,B.q)
D.bj6=new A.u(1,0.22745098039215686,0.16470588235294117,0.3843137254901961,B.q)
D.bn6=new A.u(1,0.5411764705882353,0.2901960784313726,0.3686274509803922,B.q)
D.d5k=w([D.bfd,G.ahz,D.bj6,D.bn6,D.aiM],x.O)
D.d5A=w(["each","pcs","boxes","bags","hours","days","sq ft","gallons","lbs","ft","other"],x.s)
D.d5L=w(["Yes! \ud83c\udf89","Hongera!","We did it!","Eeh, well done!"],x.s)
D.bcH=new A.u(1,0.8509803921568627,0.6431372549019608,0.2549019607843137,B.q)
D.bit=new A.u(1,0.5411764705882353,0.35294117647058826,0.11764705882352941,B.q)
D.d6c=w([D.bcH,D.afJ,D.bit],x.O)
D.d6R=w([B.c_,B.hr],x.O)
D.d6X=w([G.n9,B.i2,G.aeG,B.cI],x.O)
D.d8v=w([B.cI,G.n9,B.i2,D.lw,B.cI],x.O)
D.d94=w([B.aT,B.vO,B.xK],x.O)
D.azE=w(["True","False"],x.s)
D.eEi=new A.z(-0.65,0.6)
D.eQU=new A.z(-0.2,0.95)
D.eRZ=new A.z(0.25,0.95)
D.eHM=new A.z(0.7,0.6)
D.eSy=new A.z(1,0.1)
D.d9S=w([At.TM,D.eEi,D.eQU,D.eRZ,D.eHM,D.eSy],x.G)
D.bl4=new A.u(1,0.5411764705882353,0.35294117647058826,0.2823529411764706,B.q)
D.br7=new A.u(1,0.4196078431372549,0.25098039215686274,0.20392156862745098,B.q)
D.bgb=new A.u(1,0.24705882352941178,0.1450980392156863,0.18823529411764706,B.q)
D.d9Y=w([D.bl4,D.br7,D.bgb],x.O)
D.da1=w([B.bL,B.c7,B.dt,B.aT],x.O)
D.daw=w([B.hZ,B.cd,B.tK],x.O)
D.daT=w(["kahoot","fire","catch","plant","who","journey","lineup","school"],x.s)
D.db3=w([B.f6,B.cR],x.O)
D.bmu=new A.u(1,0.1411764705882353,0.2980392156862745,0.21176470588235294,B.q)
D.dbt=w([D.bmu,D.aet],x.O)
D.dbE=w([B.cL,B.fr,B.hM],x.O)
D.dbP=w([B.aK,B.bl,B.d7],x.O)
D.dcp=w([B.es,B.cT,B.dY],x.O)
D.dcK=w([B.dF,B.d7,B.Me],x.O)
D.dcO=w([B.bu,B.m0,B.d1],x.O)
D.dd4=w(["\ud83e\udd47","\ud83e\udd48","\ud83e\udd49"],x.s)
D.blK=new A.u(1,0.6352941176470588,0.4745098039215686,0.24313725490196078,B.q)
D.bk3=new A.u(1,0.27450980392156865,0.20392156862745098,0.12156862745098039,B.q)
D.ddn=w([D.blK,D.afG,D.bk3],x.O)
D.de8=w(["7","3","+","42","\u03c0","\u2211"],x.s)
D.dfb=w([1,0,7,6,3,2],x.t)
D.a4H=w(["leather","linen","plain","stars","rays"],x.s)
D.dfn=w([0.5,2,3.6],x.n)
D.dfU=w(["Pole, child. Listen again:","Do not worry. Even elders learn twice:","Eh, so close! Remember:"],x.s)
D.bP_=new A.a0(985219,"MaterialIcons",!1)
D.bOv=new A.a0(983781,"MaterialIcons",!1)
D.aA5=w([B.a1n,B.hy,B.lH,B.i7,D.bP_,B.Hf,B.qp,D.bOv,I.apg,B.Cq,B.qr,B.mM],A.as("O<a0>"))
D.a4L=w(["double","single","corners","none"],x.s)
D.bGA=new C.zg("Little Seed","\ud83c\udf31",0)
D.bGC=new C.zg("Young Listener","\ud83d\udc42",40)
D.bGB=new C.zg("Storyteller","\ud83e\ude98",120)
D.bGz=new C.zg("Village Pride","\ud83c\udfe1",300)
D.bGx=new C.zg("Keeper of Roots","\ud83c\udf33",700)
D.bGy=new C.zg("Elder of the Fire","\ud83d\udd25",1500)
D.aA7=w([D.bGA,D.bGC,D.bGB,D.bGz,D.bGx,D.bGy],A.as("O<zg>"))
D.dh0=w([B.dv,B.bm,B.e7],x.O)
D.dhe=w([],x.C)
D.D3=w([],x.u)
D.aK6=new A.t(225,528)
D.eFY=new A.z(D.aK6,1)
D.ehX=new A.t(350,548)
D.eMd=new A.z(D.ehX,0.95)
D.aK1=new A.t(158,656)
D.eM6=new A.z(D.aK1,1.12)
D.eiJ=new A.t(92,544)
D.eBw=new A.z(D.eiJ,0.93)
D.ei_=new A.t(398,614)
D.eI8=new A.z(D.ei_,1.04)
D.ehO=new A.t(318,662)
D.ex_=new A.z(D.ehO,1.1)
D.a4T=w([D.eFY,D.eMd,D.eM6,D.eBw,D.eI8,D.ex_],A.as("O<+(t,J)>"))
D.djd=w(["Vizuri sana! That is very good.","Hongera! Congratulations, my child.","Safi! You listened well.","Asante, child. The fire is proud of you."],x.s)
D.djE=w(["\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udfff\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udffd\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udffe","\ud83d\udc69\ud83c\udfff","\ud83d\udc69\ud83c\udffd","\ud83d\udc69\ud83c\udffb\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb3","\ud83d\udc69\ud83c\udfff\u200d\ud83e\uddb3","\ud83e\uddd5","\ud83d\udc69\ud83c\udffe\u200d\ud83d\udcbc","\ud83d\udc69\ud83c\udffd\u200d\ud83d\udcbc","\ud83d\udc69\ud83c\udfff\u200d\ud83d\udcbc","\ud83d\udc69\ud83c\udffe\u200d\ud83c\udf93","\ud83d\udc69\ud83c\udffd\u200d\ud83c\udf93"],x.s)
D.dkH=w([B.cI,G.n9,B.i2,D.lw,B.cI,B.i2],x.O)
D.dm7=w([B.aE,B.fr,B.fV],x.O)
D.dmp=w([-12,12],x.n)
D.dms=w([-17,17],x.n)
D.dmJ=w([-70,58],x.n)
D.dmL=w([-70,-30,20],x.n)
D.dnM=w([B.bu,B.m0,B.YS],x.O)
D.do1=w(["\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udfff\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udffd\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udffe","\ud83d\udc68\ud83c\udfff","\ud83d\udc68\ud83c\udffd","\ud83e\uddd4\u200d\u2642\ufe0f","\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb2","\ud83d\udc68\ud83c\udfff\u200d\ud83e\uddb2","\ud83d\udc68\ud83c\udffb\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udffe\u200d\ud83d\udcbc","\ud83d\udc68\ud83c\udffd\u200d\ud83d\udcbc","\ud83d\udc68\ud83c\udfff\u200d\ud83d\udcbc","\ud83d\udc68\ud83c\udffe\u200d\ud83c\udf93","\ud83d\udc68\ud83c\udffd\u200d\ud83c\udf93"],x.s)
D.dHM=new C.lP("construction","Construction","Jobsite & builds",B.yR)
D.dHT=new C.lP("house","Home Build","Houses & rooms",B.wl)
D.dHJ=new C.lP("grocery","Grocery","Store & pantry",B.a2c)
D.dHI=new C.lP("calculator","Calculations","Math & estimates",B.Oy)
D.dHR=new C.lP("lumber","Materials","Lumber & supplies",B.OQ)
D.dHF=new C.lP("kitchen","Kitchen","Remodel & meals",A3.aos)
D.bOt=new A.a0(983756,"MaterialIcons",!1)
D.dHK=new C.lP("landscape","Landscaping","Yard & garden",D.bOt)
D.dHE=new C.lP("plumbing","Plumbing","Pipes & water",B.pk)
D.dHU=new C.lP("electrical","Electrical","Wiring & power",B.hw)
D.dHC=new C.lP("store","Retail Shop","Daily business",B.lc)
D.dHD=new C.lP("paint_remodel","Paint & Remodel","Colors & walls",Ai.a1L)
D.bNU=new A.a0(983311,"MaterialIcons",!1)
D.dHQ=new C.lP("roofing","Roofing","Roofs & exteriors",D.bNU)
D.bOG=new A.a0(983986,"MaterialIcons",!1)
D.dHB=new C.lP("warehouse","Warehouse","Storage & stock",D.bOG)
D.dHO=new C.lP("vehicles","Vehicles","Fleet & transport",B.Hg)
D.bLI=new A.a0(62785,"MaterialIcons",!1)
D.dHH=new C.lP("farm","Farm","Crops & livestock",D.bLI)
D.dHG=new C.lP("restaurant","Restaurant","Food & catering",B.wt)
D.dHN=new C.lP("tools","Tools","Workshop gear",B.Hb)
D.dHS=new C.lP("wallet","Cash & Wallet","Quick spending",B.jT)
D.bMR=new A.a0(63395,"MaterialIcons",!1)
D.dHP=new C.lP("concrete","Concrete","Foundation work",D.bMR)
D.dHL=new C.lP("blueprint","Blueprint","Plans & design",Ap.anI)
D.a5e=w([D.dHM,D.dHT,D.dHJ,D.dHI,D.dHR,D.dHF,D.dHK,D.dHE,D.dHU,D.dHC,D.dHD,D.dHQ,D.dHB,D.dHO,D.dHH,D.dHG,D.dHN,D.dHS,D.dHP,D.dHL],A.as("O<lP>"))
D.dox=w([B.bt,B.bm],x.O)
D.dpi=w([B.iw,B.nZ,B.dP],x.O)
D.agt=new A.u(1,0.8862745098039215,0.10588235294117647,0.23529411764705882,B.q)
D.ahn=new A.u(1,0.07450980392156863,0.40784313725490196,0.807843137254902,B.q)
D.bko=new A.u(1,0.8470588235294118,0.6196078431372549,0,B.q)
D.bce=new A.u(1,0.14901960784313725,0.5372549019607843,0.047058823529411764,B.q)
D.aBe=w([D.agt,D.ahn,D.bko,D.bce],x.O)
D.dqu=w(["Oooh!","Pole!","Eh, so close!"],x.s)
D.a5q=w(["top","middle","bottom"],x.s)
D.drU=w([B.co,B.bl,B.d7],x.O)
D.aBv=w(["\u25b2","\u25c6","\u25cf","\u25a0"],x.s)
D.b60=new A.ac(0,B.G,B.aS,B.I,14)
D.aBy=w([D.b60],x.V)
D.bjk=new A.u(1,0.22745098039215686,0.18823529411764706,0.25098039215686274,B.q)
D.dsz=w([D.af3,D.YR,D.bjk],x.O)
D.dsA=w([B.be,B.cT,B.dY],x.O)
D.ehw=new A.t(24,-8)
D.eif=new A.t(48,0)
D.ehs=new A.t(24,6)
D.due=w([B.I,D.ehw,D.eif,D.ehs],x.g)
D.duD=w(["Rewrite this page in natural, professional Swahili","Correct the spelling","Rewrite this page in simpler words","Add a paragraph about the family farm","Make this page shorter"],x.s)
D.eeh={top:0,middle:1,bottom:2}
D.dxR=new A.bw(D.eeh,["Top","Middle","Bottom"],x.r)
D.edW={double:0,single:1,corners:2,none:3}
D.dxX=new A.bw(D.edW,["Double line","One line","Corners","None"],x.r)
D.ef0={leather:0,linen:1,plain:2,stars:3,rays:4}
D.dzr=new A.bw(D.ef0,["Leather","Linen","Smooth","Stars","Light rays"],x.r)
D.dzE=new A.bw(B.hT,[],A.as("bw<G,+(m,m)>"))
D.eea={gold:0,silver:1,rose:2,white:3,copper:4,black:5}
D.Dg=new A.bw(D.eea,[4293444714,4293257195,4293961912,4294967295,4292905548,4279310375],A.as("bw<m,G>"))
D.dCa=new H.Nl(32,null)
D.dCb=new H.Nl(40,null)
D.dCc=new H.Nl(46,null)
D.aJA=new C.atb(null)
D.egs=new A.t(0,40)
D.egt=new A.t(0,412)
D.egv=new A.t(0,900)
D.egG=new A.t(0,-74)
D.egJ=new A.t(100,300)
D.egK=new A.t(10,14)
D.egN=new A.t(10,-10)
D.egR=new A.t(10,-46)
D.egS=new A.t(10,-58)
D.egT=new A.t(116,442)
D.egU=new A.t(11,-1)
D.egV=new A.t(11,-10)
D.egW=new A.t(11,-21)
D.aJX=new A.t(11,-60)
D.eh1=new A.t(14,-2)
D.eh2=new A.t(150,520)
D.a7o=new A.t(150,592)
D.eh5=new A.t(15,-15)
D.eh6=new A.t(16,-1)
D.eha=new A.t(190,444)
D.ehd=new A.t(1,5)
D.ehl=new A.t(21,-78)
D.ehm=new A.t(222,615)
D.Jd=new A.t(225,300)
D.a7q=new A.t(225,574)
D.ehv=new A.t(24,-52)
D.ehx=new A.t(250,210)
D.aKa=new A.t(300,0)
D.ehK=new A.t(300,440)
D.ehN=new A.t(318,476)
D.ehQ=new A.t(324,144)
D.a7t=new A.t(332,150)
D.ehS=new A.t(335,585)
D.ehT=new A.t(338,140)
D.ehU=new A.t(340,158)
D.ehW=new A.t(34,-60)
D.DJ=new A.t(36,-24)
D.ehY=new A.t(372,470)
D.ehZ=new A.t(390,455)
D.ei7=new A.t(42,468)
D.ei8=new A.t(431,510)
D.ei9=new A.t(431,520)
D.eia=new A.t(45,-92)
D.eib=new A.t(46,20)
D.eic=new A.t(46,-92)
D.eid=new A.t(46,-94)
D.eie=new A.t(47,-4)
D.eig=new A.t(48,-4)
D.eio=new A.t(4,-26)
D.eix=new A.t(60,455)
D.eiE=new A.t(8,14)
D.eiI=new A.t(8,-76)
D.eiK=new A.t(95,575)
D.eiL=new A.t(98,-24)
D.eiN=new A.t(9,-2)
D.eiO=new A.t(9,-58)
D.aKj=new A.t(9,-79)
D.eiP=new A.t(9,-9)
D.ejr=new A.t(16.5,8)
D.ejt=new A.t(3.2,0)
D.ejv=new A.t(-16.5,8)
D.ejC=new A.t(16.5,2)
D.ejF=new A.t(-3.2,0)
D.ejO=new A.t(9.5,6)
D.ejS=new A.t(-10,14)
D.ejT=new A.t(-10,-12)
D.ejU=new A.t(-10,-58)
D.ejV=new A.t(-11,-1)
D.ejW=new A.t(-11,-10)
D.ejY=new A.t(-11,-60)
D.ejZ=new A.t(-12,-14)
D.ek_=new A.t(-12,-16)
D.ek6=new A.t(-14,-2)
D.ek9=new A.t(-15,-15)
D.eka=new A.t(-15,-3)
D.ekc=new A.t(-16,-1)
D.ekt=new A.t(-24,-52)
D.ekA=new A.t(-2,-34)
D.ekB=new A.t(-2,-38)
D.ekD=new A.t(-30,-100)
D.a7u=new A.t(-36,-24)
D.ekO=new A.t(-4,-26)
D.ekQ=new A.t(-4,-6)
D.ekZ=new A.t(-8,-3)
D.el_=new A.t(-8,-48)
D.el2=new A.t(-9,-2)
D.el4=new A.t(-9,-58)
D.el5=new A.t(-9,-79)
D.el6=new A.t(-9,-9)
D.el8=new A.t(-9.5,6)
D.elm=new A.t(-16.5,2)
D.fFF=new A.y("Write a new book",null,B.hp,null,B.K,null,null,null,null,null,null,null)
D.elW=new A.D(B.kJ,D.fFF,null)
D.fUi=new A.y("Tap to go on",null,B.vj,null,null,null,null,null,null,null,null,null)
D.emh=new A.D(B.l6,D.fUi,null)
D.apH=new A.ae(B.hQ,18,B.c,null,null,null)
D.fyM=new A.y("Add",null,B.lo,null,null,null,null,null,null,null,null,null)
D.daf=w([D.apH,B.qO,D.fyM],x.p)
D.f3j=new A.cd(B.aM,B.e,B.O,B.m,null,B.p,null,0,D.daf,null)
D.emk=new A.D(B.nr,D.f3j,null)
D.eml=new A.D(E.ajT,A9.Xk,null)
D.fsr=new A.F(!0,B.c,null,null,null,null,13.5,B.H,null,0.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fBV=new A.y("New Project",null,D.fsr,null,null,null,null,null,null,null,null,null)
D.dev=w([D.apH,B.ac,D.fBV],x.p)
D.f3m=new A.cd(B.aM,B.e,B.O,B.m,null,B.p,null,0,D.dev,null)
D.emy=new A.D(B.iq,D.f3m,null)
D.fEr=new A.y("Choose your header",null,A1.td,null,null,null,null,null,null,null,null,null)
D.emT=new A.D(B.hO,D.fEr,null)
D.bbt=new A.fk(2.2,null,null,null,null,B.cR,null,null,null,null)
D.f8z=new A.a5(22,22,D.bbt,null)
D.b9z=new A.ci(B.A,null,null,D.f8z,null)
D.emY=new A.D(B.a_4,D.b9z,null)
D.bzH=new A.Q(14,2,14,6)
D.fSp=new A.y("The top of your book. Tap a design to see it.",null,Q.te,null,null,null,null,null,null,null,null,null)
D.emZ=new A.D(D.bzH,D.fSp,null)
D.fDA=new A.y("\ud83c\udfc6 A new record!",null,B.fS,null,null,null,null,null,null,null,null,null)
D.en_=new A.D(B.l6,D.fDA,null)
D.eoz=new A.iZ(1,0.9098039215686274,0.9607843137254902,0.9137254901960784)
D.eoC=new A.iZ(1,0.8784313725490196,0.8784313725490196,0.8784313725490196)
D.aKU=new A.iZ(1,0.9607843137254902,0.48627450980392156,0)
D.Jm=new A.iZ(1,0.8274509803921568,0.1843137254901961,0.1843137254901961)
D.zZ=new A.iZ(1,0.1803921568627451,0.49019607843137253,0.19607843137254902)
D.eoI=new A.iZ(1,0.12941176470588237,0.12941176470588237,0.12941176470588237)
D.hn6=new C.biz(null)
D.buD=new A.mA(D.hn6,null,B.aw,null,null)
D.aOx=new A.cN(0,0,0,0,null,null,D.buD,null)
D.fyO=new A.y("\ud83c\udfc5",null,B.a9G,null,null,null,null,null,null,null,null,null)
D.et6=new A.cN(null,0,-34,null,null,null,D.fyO,null)
D.eBb=new A.z("E","Sit by the fire again")
D.eGM=new A.z("C","Good Learner")
D.eKa=new A.z("D","Still Growing")
D.eOI=new A.z(-42,42)
D.eQ2=new A.z("B","Faithful Listener")
D.eS0=new A.z("A","Keeper of the Family")
D.eV1=new A.b7(-17,0.7,0)
D.eVy=new A.b7(-8,0.95,1.3)
D.eWx=new A.b7(18,0.65,5.2)
D.eWz=new A.b7(0,1.15,2.6)
D.eWR=new A.b7(9,0.9,3.9)
D.eYy=new A.cy([0,0,1,1])
D.aPZ=new A.a3(0,0,520,160)
D.f0o=new A.a3(10,612,440,618)
D.f0p=new A.a3(10,612,440,628)
D.f0s=new A.a3(14,-64,34,-12)
D.f0v=new A.a3(300,336,350,348)
D.a8n=new A.a3(30,96,420,346)
D.f0w=new A.a3(30,-9,46,1)
D.f0x=new A.a3(4,2,11,14)
D.f0z=new A.a3(-8,-12.5,8,-7)
D.f0A=new A.a3(-16.5,-21,16.5,1)
D.f0B=new A.a3(60,342,88,348)
D.TN=new A.a3(66,-66,94,-36)
D.f0C=new A.a3(6,8,10,14)
D.f0F=new A.a3(95,343,115,348)
D.f0G=new A.a3(-6.5,-74,6.5,-58)
D.f0M=new A.a3(-100,-74,100,-12)
D.f0N=new A.a3(-10,8,-6,14)
D.f0O=new A.a3(-11,2,-4,14)
D.f0P=new A.a3(-11,-70,11,-56)
D.f0W=new A.a3(-13,-24,13,-4)
D.f11=new A.a3(-15,-21,15,0)
D.f14=new A.a3(-16,-21,16,1)
D.f15=new A.a3(-16,-21,16,2)
D.f18=new A.a3(-16,-26,16,-6)
D.f1i=new A.a3(-230,-26,230,26)
D.f1G=new A.a3(-38,-26,12,-6)
D.f1K=new A.a3(-3,-70,3,-63)
D.f1L=new A.a3(-44,-22,44,0)
D.f1N=new A.a3(-46,-9,-30,1)
D.aQ2=new A.a3(-80,-190,80,20)
D.f1U=new A.a3(-8,-26,40,-6)
D.f1V=new A.a3(-98,-80,92,-75)
D.f1W=new A.a3(-9,-15,9,-9)
D.fRY=new A.y("Let the AI write it from your tree",null,B.iu,null,B.K,null,null,null,null,null,null,null)
D.bHC=new A.dt(1,B.cp,D.fRY,null)
D.d6Q=w([E.a2G,B.ac,D.bHC],x.p)
D.f2Z=new A.cd(B.aM,B.e,B.O,B.m,null,B.p,null,0,D.d6Q,null)
D.fyr=new A.y("Save member",null,B.ce,null,null,null,null,null,null,null,null,null)
D.dmu=w([D.aqy,B.ac,D.fyr],x.p)
D.f38=new A.cd(B.aM,B.b9,B.i,B.m,null,B.p,null,0,D.dmu,null)
D.bT8=new A.ae(B.i6,14,B.b0,null,null,null)
D.fm7=new A.F(!0,B.b0,null,null,null,null,12,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fCk=new A.y("Cashier",null,D.fm7,null,null,null,null,null,null,null,null,null)
D.df1=w([D.bT8,B.bn,D.fCk],x.p)
D.f3b=new A.cd(B.aM,B.e,B.O,B.m,null,B.p,null,0,D.df1,null)
D.fys=new A.y("Transfer & settings",null,B.dd,null,null,null,null,null,null,null,null,null)
D.bFE=new A.bz(1,B.ba,D.fys,null)
D.cZi=w([D.aq8,B.as,D.bFE],x.p)
D.f3c=new A.cd(B.aM,B.e,B.i,B.m,null,B.p,null,0,D.cZi,null)
D.f7f=new A.av(16,40)
D.f7k=new A.av(22,64)
D.f7r=new A.av(280,88)
D.f8f=new A.a5(30,null,null,null)
D.fxz=new A.y("The teacher is writing\u2026",null,B.Ai,null,null,null,null,null,null,null,null,null)
D.baH=new A.ci(B.A,null,null,D.fxz,null)
D.hhc=new A.bU("w",x.W)
D.f8F=new A.a5(null,56,D.baH,D.hhc)
D.f9s=new A.hK(5,8,8,1,null)
D.f9A=new A.hK(2,12,12,1.05,null)
D.fC0=new A.y("Please enter a family tree name.",null,null,null,null,null,null,null,null,null,null,null)
D.fai=new A.b2(D.fC0,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.fCf=new A.y("Your shelf is full: six books is the most. Remove one to write another.",null,null,null,null,null,null,null,null,null,null,null)
D.aS4=new A.b2(D.fCf,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.fKE=new A.y("Could not save project on this device. Please try again.",null,null,null,null,null,null,null,null,null,null,null)
D.faM=new A.b2(D.fKE,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.fVm=new A.y("All projects cleared",null,null,null,null,null,null,null,null,null,null,null)
D.faR=new A.b2(D.fVm,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.fEp=new A.y("Syncing family trees with the database\u2026",null,null,null,null,null,null,null,null,null,null,null)
D.faY=new A.b2(D.fEp,null,null,null,null,null,null,null,null,null,null,null,null,B.fY,!1,null,null,null,B.t,null)
D.fSC=new A.y("Your new book is on the shelf.",null,null,null,null,null,null,null,null,null,null,null)
D.aS8=new A.b2(D.fSC,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.fEn=new A.y("Give the game a name and write at least 2 complete questions (a question, two or more answers, and the right one chosen).",null,null,null,null,null,null,null,null,null,null,null)
D.fbn=new A.b2(D.fEn,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.fz4=new A.y("Choose male or female.",null,null,null,null,null,null,null,null,null,null,null)
D.fbp=new A.b2(D.fz4,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.fI6=new A.y("You can make two games at most. Delete one to make another.",null,null,null,null,null,null,null,null,null,null,null)
D.fbv=new A.b2(D.fI6,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.fW6=new A.y("Saved to QR Code Generator \u2192 Saved (NGMY Family Tree).",null,null,null,null,null,null,null,null,null,null,null)
D.fca=new A.b2(D.fW6,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.fQR=new A.y("Project saved, but the photo could not be stored. Try choosing the photo again.",null,null,null,null,null,null,null,null,null,null,null)
D.fcz=new A.b2(D.fQR,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.fVq=new A.y("Choose whether this person is male or female.",null,null,null,null,null,null,null,null,null,null,null)
D.fcC=new A.b2(D.fVq,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.fMh=new A.y("Could not save imported project to this device. Please try again.",null,null,null,null,null,null,null,null,null,null,null)
D.fcE=new A.b2(D.fMh,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.fGh=new A.y("Please enter a project name.",null,null,null,null,null,null,null,null,null,null,null)
D.fcF=new A.b2(D.fGh,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.fGi=new A.y("Could not read that project QR.",null,null,null,null,null,null,null,null,null,null,null)
D.fdF=new A.b2(D.fGi,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.fC2=new A.y("Enter a name and an amount greater than 0.",null,null,null,null,null,null,null,null,null,null,null)
D.fdX=new A.b2(D.fC2,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.fE1=new A.y("Could not open that file.",null,null,null,null,null,null,null,null,null,null,null)
D.feg=new A.b2(D.fE1,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.fLK=new A.y("Enter a name.",null,null,null,null,null,null,null,null,null,null,null)
D.few=new A.b2(D.fLK,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.fH6=new A.y("Enter an amount greater than zero.",null,null,null,null,null,null,null,null,null,null,null)
D.fex=new A.b2(D.fH6,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.fr7=new A.F(!0,B.bD,null,null,null,null,20,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fg9=new A.eu("\u2665",null,null,B.cO,null,null,null,null,null,null,D.fr7)
D.fom=new A.F(!0,B.aP,null,null,null,null,28,B.U,B.cD,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fgp=new A.eu("Today: how well do you know the family?",null,null,B.cO,null,null,null,null,null,null,D.fom)
D.fgG=new A.F(!0,B.pP,null,null,null,null,11.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fhL=new A.F(!0,D.kC,null,null,null,null,13,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fia=new A.F(!0,D.kC,null,null,null,null,12,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fie=new A.F(!0,B.cI,null,null,null,null,17,B.u,null,0.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fin=new A.F(!0,D.fq,null,null,null,null,15,B.U,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fiy=new A.F(!0,D.fq,null,null,null,null,13,B.H,null,null,null,null,1.15,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fiS=new A.rV(!0,B.t0,null,null,null,null,B.dx,9.5,null,null,null,null,null,null,null,null,null,null,null,null)
D.fj7=new A.F(!0,B.cI,null,null,null,null,10.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fja=new A.F(!0,D.kC,null,null,null,null,18,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fjb=new A.F(!0,B.cI,null,null,null,null,12,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fjg=new A.F(!0,B.c,null,null,null,null,15.5,B.u,null,null,null,null,1.15,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fjj=new A.F(!0,B.cI,null,null,null,null,15,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fjO=new A.F(!0,B.b0,null,null,null,null,26,B.u,null,-0.4,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fjP=new A.F(!0,B.ad,null,null,null,null,11.5,null,null,null,null,null,1.25,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fjR=new A.F(!0,B.aP,null,null,null,null,15.5,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fkj=new A.F(!0,B.c,null,null,null,null,24,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aTh=new A.F(!0,B.aR,null,null,null,null,null,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aTj=new A.F(!0,D.lv,null,null,null,null,12.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fkI=new A.F(!0,B.cI,null,null,null,null,20,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.a9L=new A.rV(!0,B.Ti,null,null,null,null,B.dx,9.5,null,null,null,null,null,null,null,null,null,null,null,null)
D.UQ=new A.F(!0,B.cI,null,null,null,null,null,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fkS=new A.F(!0,B.N,null,null,null,null,12.5,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fkX=new A.F(!0,D.fq,null,null,null,null,11,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.flk=new A.F(!0,B.c,null,null,null,null,20,B.u,null,0.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fms=new A.F(!0,D.fq,null,null,null,null,13,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aTu=new A.F(!0,D.fq,null,null,null,null,14.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fmL=new A.F(!0,B.ad,null,null,null,null,12,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fmW=new A.F(!0,D.fq,null,null,null,null,null,B.U,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fmY=new A.F(!0,null,null,null,null,null,8,B.U,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fn2=new A.F(!0,K.iQ,null,null,null,null,16.5,null,null,null,null,null,1.65,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aTy=new A.F(!0,D.fq,null,null,null,null,14.5,B.U,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fnY=new A.F(!0,D.fq,null,null,null,null,13,B.u,null,null,null,null,1.05,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fog=new A.F(!0,D.fq,null,null,null,null,22,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.foi=new A.F(!0,B.N,null,null,null,null,13,B.a7,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.foj=new A.F(!0,B.cI,null,null,null,null,17,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.foH=new A.F(!0,B.c,null,null,null,null,20,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,A8.I8,null,null,null)
D.aTN=new A.F(!0,D.fq,null,null,null,null,17,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fp4=new A.F(!0,B.N,null,null,null,null,17,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fpq=new A.F(!0,B.f8,null,null,null,null,13,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fpO=new A.F(!0,B.bP,null,null,null,null,8,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fpS=new A.F(!0,B.bz,null,null,null,null,11,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fq3=new A.F(!0,B.c,null,null,null,null,13.5,B.H,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fq6=new A.F(!0,D.fq,null,null,null,null,17,B.u,null,null,null,null,1.25,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fqe=new A.F(!0,D.FG,null,null,null,null,40,B.u,null,null,null,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fqn=new A.F(!0,B.b0,null,null,null,null,13,B.U,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fqN=new A.F(!0,B.c,null,null,null,null,15.5,B.u,null,null,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fqT=new A.F(!0,B.ad,null,null,null,null,12.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,L.CV,null,null,null)
D.frh=new A.F(!0,B.cI,null,null,null,null,130,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.frq=new A.F(!0,B.cR,null,null,null,null,13,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.frD=new A.F(!0,D.lw,null,null,null,null,13,B.U,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aU6=new A.F(!0,D.fq,null,null,null,null,null,B.H,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.Kl=new A.F(!0,B.cI,null,null,null,null,null,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aU8=new A.F(!0,B.cI,null,null,null,null,null,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,L.CV,null,null,null)
D.frX=new A.F(!0,B.bP,null,null,null,null,11,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fs0=new A.F(!0,G.n9,null,null,null,null,84,B.u,null,null,null,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fsp=new A.F(!0,B.b0,null,null,null,null,13,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fsG=new A.F(!0,D.fq,null,null,null,null,15,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ft1=new A.F(!0,B.c,null,null,null,null,null,B.H,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ftp=new A.F(!0,D.fq,null,null,null,null,22,B.u,null,null,null,null,1.25,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ftS=new A.F(!0,D.fq,null,null,null,null,18,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ftY=new A.F(!0,B.al,null,null,null,null,11.5,B.a7,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fu5=new A.F(!0,B.c,null,null,null,null,28,B.u,null,null,null,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aUp=new A.F(!0,B.c,null,null,null,null,17,B.u,null,null,null,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aad=new A.F(!0,B.al,null,null,null,null,12,B.a7,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aaf=new A.F(!0,D.lv,null,null,null,null,null,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fvO=new A.F(!0,B.c,null,null,null,null,8.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fw6=new A.F(!0,B.aP,null,null,null,null,27,B.U,B.cD,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fwe=new A.F(!0,K.iQ,null,null,null,null,23,B.u,null,null,null,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fwm=new A.F(!0,K.iQ,null,null,null,null,21,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fwQ=new A.y("Time:",null,B.hb,null,null,null,null,null,null,null,null,null)
D.fxb=new A.y("\ud83c\udfae",null,I.aa5,null,null,null,null,null,null,null,null,null)
D.fxc=new A.y("Themes",null,B.pz,null,null,null,null,null,null,null,null,null)
D.fxH=new A.y("\ud83c\udfb2",null,B.x2,null,null,null,null,null,null,null,null,null)
D.fxL=new A.y("Delete this game?",null,B.iu,null,null,null,null,null,null,null,null,null)
D.fxS=new A.y("Add Item",null,B.ce,null,null,null,null,null,null,null,null,null)
D.fmG=new A.F(!0,B.N,null,null,null,null,22,B.H,null,-0.3,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fyh=new A.y("Debt receipt",null,D.fmG,null,B.K,null,null,null,null,null,null,null)
D.aUl=new A.F(!0,B.al,null,null,null,null,11,B.a7,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fyz=new A.y("Person who owes",null,D.aUl,null,null,null,null,null,null,null,null,null)
D.fzx=new A.y("Notes",null,B.a9U,null,null,null,null,null,null,null,null,null)
D.fzY=new A.y("New Tree",null,null,null,null,null,null,null,null,null,null,null)
D.flB=new A.F(!0,B.c,null,null,null,null,11,B.H,null,0.25,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fA0=new A.y("Share",null,D.flB,null,null,null,null,null,null,null,null,null)
D.fAY=new A.y("Move your family trees",null,D.aUp,null,null,null,null,null,null,null,null,null)
D.fBC=new A.y("Save invites",null,null,null,null,null,null,null,null,null,null,null)
D.fCe=new A.y("The cover design",null,null,null,null,null,null,null,null,null,null,null)
D.fCC=new A.y("SAVE",null,D.Kl,null,null,null,null,null,null,null,null,null)
D.fDe=new A.y("The round button is the right answer.",null,Q.Ee,null,null,null,null,null,null,null,null,null)
D.fDz=new A.y("Remove this book?",null,B.fS,null,null,null,null,null,null,null,null,null)
D.fsm=new A.F(!0,B.cI,null,null,null,null,17,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,L.CV,null,null,null)
D.fE6=new A.y("Fireside Stories",null,D.fsm,null,null,null,null,null,null,null,null,null)
D.aUR=new A.y("Download",null,B.ce,null,null,null,null,null,null,null,null,null)
D.fEO=new A.y("What should the AI do?",null,B.dd,null,null,null,null,null,null,null,null,null)
D.flf=new A.F(!0,D.lv,null,null,null,null,13,B.u,null,4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fF3=new A.y("REPORT CARD",null,D.flf,null,null,null,null,null,null,null,null,null)
D.fFL=new A.y("Calabash Catch",null,B.Kp,null,null,null,null,null,null,null,null,null)
D.fGd=new A.y("Take photo",null,null,null,null,null,null,null,null,null,null,null)
D.fGE=new A.y("\ud83c\udfe1",null,B.Ed,null,null,null,null,null,null,null,null,null)
D.fHl=new A.y("Ribbon bookmark",null,B.jm,null,null,null,null,null,null,null,null,null)
D.ftR=new A.F(!0,B.b0,null,null,null,null,15,B.u,null,1.6,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fHP=new A.y("NGMY.ORG",null,D.ftR,null,B.K,null,null,null,null,null,null,null)
D.fJ9=new A.y("Scan family tree QR",null,B.cB,null,null,null,null,null,null,null,null,null)
D.fq7=new A.F(!0,B.c,null,null,null,null,13,B.a7,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fJU=new A.y("Hold steady \u2014 worksheet QR scans instantly when in frame.",null,D.fq7,null,B.K,null,null,null,null,null,null,null)
D.fL6=new A.y("Delete",null,B.UI,null,null,null,null,null,null,null,null,null)
D.fL7=new A.y("Scan project QR",null,null,null,null,null,null,null,null,null,null,null)
D.fLe=new A.y("Thumbnail",null,B.pz,null,null,null,null,null,null,null,null,null)
D.fLQ=new A.y("Save the cover",null,B.cB,null,null,null,null,null,null,null,null,null)
D.fLV=new A.y("A question appears, and gourds with the answers fall from the baobab. Slide the basket and catch the RIGHT one. Three lives.",null,B.x4,null,B.K,null,null,null,null,null,null,null)
D.fMi=new A.y("Your photos",null,B.pz,null,null,null,null,null,null,null,null,null)
D.fMx=new A.y("Create Project",null,B.ce,null,null,null,null,null,null,null,null,null)
D.fMU=new A.y("\u2b50 stars",null,B.UX,null,null,null,null,null,null,null,null,null)
D.fN7=new A.y("Design your cover",null,A1.td,null,null,null,null,null,null,null,null,null)
D.fNd=new A.y("Gallery",null,null,null,null,null,null,null,null,null,null,null)
D.fNg=new A.y("PICTURE",null,M.vn,null,null,null,null,null,null,null,null,null)
D.fNi=new A.y("\ud83c\udfaf",null,D.Vc,null,null,null,null,null,null,null,null,null)
D.fND=new A.y("Paid",null,B.ce,null,null,null,null,null,null,null,null,null)
D.fNF=new A.y("You can undo it right after.",null,Q.Ee,null,null,null,null,null,null,null,null,null)
D.fOc=new A.y("Print",null,B.vk,null,null,null,null,null,null,null,null,null)
D.fOB=new A.y("Amount owed",null,D.aUl,null,null,null,null,null,null,null,null,null)
D.fOQ=new A.y("Got it",null,B.ce,null,null,null,null,null,null,null,null,null)
D.fPr=new A.y("The whole book",null,null,null,null,null,null,null,null,null,null,null)
D.fPu=new A.y("Add to budget",null,B.ce,null,null,null,null,null,null,null,null,null)
D.fPW=new A.y("Debtor signature",null,B.a9U,null,null,null,null,null,null,null,null,null)
D.fQ4=new A.y("Change icon",null,B.a9T,null,null,null,null,null,null,null,null,null)
D.fQT=new A.y("MADE BY THE SYSTEM, FROM YOUR TREE",null,T.tg,null,null,null,null,null,null,null,null,null)
D.fRk=new A.y("Family tree QR",null,B.cB,null,null,null,null,null,null,null,null,null)
D.fRq=new A.y("Write a Kahoot-style game for your family. Everyone who opens this tree can play it. You can make 2 games at most.",null,B.Vb,null,null,null,null,null,null,null,null,null)
D.fRO=new A.y("Download",null,B.vk,null,null,null,null,null,null,null,null,null)
D.fRP=new A.y("The person who planted this tree has not made a game yet.",null,B.vo,null,null,null,null,null,null,null,null,null)
D.fRT=new A.y("Change",null,B.pz,null,null,null,null,null,null,null,null,null)
D.fSI=new A.y("Clear all",null,B.ce,null,null,null,null,null,null,null,null,null)
D.fSL=new A.y("WHAT SHOULD IT CHANGE?",null,M.vn,null,null,null,null,null,null,null,null,null)
D.fTk=new A.y("COLOUR",null,M.vn,null,null,null,null,null,null,null,null,null)
D.fTy=new A.y("Do it",null,B.cB,null,null,null,null,null,null,null,null,null)
D.fTB=new A.y("Create Tree",null,B.ce,null,null,null,null,null,null,null,null,null)
D.fTK=new A.y("Give me another clue",null,D.Kl,null,null,null,null,null,null,null,null,null)
D.fUF=new A.y("Create Family Tree",null,B.f3,null,null,null,null,null,null,null,null,null)
D.fUP=new A.y("THE TEACHER EXPLAINS THESE",null,T.tg,null,null,null,null,null,null,null,null,null)
D.fgF=new A.F(!0,E.kb,null,null,null,null,null,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fUV=new A.y("Write the first page myself",null,D.fgF,null,null,null,null,null,null,null,null,null)
D.fVt=new A.y("Use this header",null,B.cB,null,null,null,null,null,null,null,null,null)
D.fVA=new A.y("Create Project",null,E.aU3,null,null,null,null,null,null,null,null,null)
D.hiq=new C.abR(1,"header")
D.abe=new C.abR(2,"projects")
D.hir=new C.abR(3,"cashier")
D.abf=new C.abR(4,"familyTree")
D.hvN=new C.cCV(0,"start")
D.hvO=new C.cCW(0,"start")
D.hiP=new C.YW(null)
D.hjO=new C.Zo(null)
D.dzB=new A.bw(B.hT,[],A.as("bw<m,G8>"))
D.dhC=w([],x.dE)
D.dhD=w([],x.M)
D.hkk=new C.bfK(D.dzB,D.dhC,D.dhD,0,0,null,null)
D.aYT=new C.a_e(0,"intro")
D.aYU=new C.a_e(1,"countdown")
D.abt=new C.a_e(2,"ask")
D.W3=new C.a_e(3,"reveal")
D.aYV=new C.a_e(4,"end")
D.hn8=new C.t2(F.FQ,D.lw,B.cI,F.lx,5,!1,!1,!1,0,null)
D.hn9=new C.t2(F.FQ,B.ek,B.cI,B.bO,2,!0,!0,!1,2,B.cI)
D.hna=new C.t2(B.o8,B.cR,B.cI,F.lx,2,!0,!1,!1,2,B.aE)
D.hnb=new C.t2(F.FQ,B.dF,B.cI,F.lx,5,!1,!1,!1,1,null)
D.hnc=new C.t2(F.Z3,D.ahn,B.cI,F.lx,4,!0,!1,!0,0,null)
D.aYY=new C.t2(F.Z3,B.dH,B.cI,F.lx,3,!0,!1,!0,2,null)
D.aYZ=new C.t2(F.mD,D.lw,B.c,F.lx,0,!1,!1,!0,0,null)
D.aZ_=new C.t2(B.o8,B.aC,B.cI,B.bO,2,!0,!0,!1,2,B.dH)
D.aZ0=new C.t2(B.o8,G.n9,B.i2,F.lx,5,!1,!1,!0,3,null)
D.hnd=new C.t2(B.o8,B.dH,B.cI,F.lx,0,!0,!1,!1,0,B.aC)
D.aZ1=new C.t2(F.FQ,B.ek,B.cI,B.bO,1,!1,!0,!1,1,null)
D.aZ2=new C.t2(F.Fm,B.aE,B.aC,F.lx,4,!0,!1,!0,2,null)
D.hne=new C.t2(F.mD,B.aE,B.ek,F.lx,3,!0,!1,!1,0,null)
D.hnf=new C.t2(B.o8,B.dF,B.cI,B.bO,1,!1,!0,!1,1,null)
D.hng=new C.t2(F.Fm,D.agt,B.c,F.lx,5,!1,!1,!0,0,null)
D.hnU=new C.a_N(null)
D.hvW=new C.afb(0,"still")
D.Wq=new C.afb(1,"walk")
D.abN=new C.afb(2,"pound")
D.abO=new C.afb(3,"drum")
D.hro=new C.a14(0,"greet")
D.aZs=new C.a14(1,"teach")
D.abP=new C.a14(2,"ask")
D.hrp=new C.a14(3,"feedback")
D.aZt=new C.a14(4,"end")
D.Wv=new C.a1n(0,"intro")
D.Ww=new C.a1n(1,"asking")
D.AF=new C.a1n(2,"reacting")
D.abZ=new C.a1n(3,"driving")
D.ac_=new C.a1n(4,"arrived")
D.ac2=new C.aKJ(0,"projects")
D.aZR=new C.aKJ(1,"cashier")
D.htr=new C.aKJ(2,"familyTree")})()};
(a=>{a["5guqZl8WXVg9RuS3421D9vgnx/o="]=a.current})($__dart_deferred_initializers__);