((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,A8,N,Q,A_,S,A9,L,H,E,T,Aa,U,Ab,Ac,Ad,A0,Ae,Af,R,A1,Ag,Ah,Ai,M,A2,Aj,A3,A4,A5,Ak,A6,Al,G,Am,An,A7,Ao,Ap,V,O,Aq,W,Ar,As,X,P,F,At,I,K,Y,C={
bG4(b2,b3,b4){var w=0,v=A.j(x.cz),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1
var $async$bG4=A.e(function(b5,b6){if(b5===1)return A.f(b6,v)
for(;;)switch(w){case 0:w=3
return A.b(A.vV(null,""),$async$bG4)
case 3:b1=b6
if(B.a.i(b1).length===0)throw A.X(y.z)
t=A.nn(b1)
s=A.c1(b3.length,null,!1,x.h5)
r=x.f,q=x.N,p=x.z,o=x.j,n=x.gE,m="Translate these book pages into "+b4+". Translate the MEANING, not the words: write what a native speaker would naturally say, never a literal copy of the other language (many phrases, like \"family tree\", have no word-for-word twin and would not be understood). Keep the warm tone, every person's name and every place name exactly as written, and keep the paragraph breaks (a blank line between paragraphs). Do not add or remove any fact. If the source is flowery or exaggerated, say it plainly and warmly. Write people's names with normal capitals (Ikungu Ele), not in ALL CAPITALS. Write natural, correct "+b4+".",l=null,k=0
case 4:if(!(j=b3.length,k<j)){w=6
break}i=k+3
h=B.d.du(b3,k,Math.min(i,j))
j=h.length
g=b3.length
b2.$2("Translating pages "+(k+1)+" to "+(k+j)+" of "+g+"\u2026",k/g)
j=A.cS(b4,"Swahili",0)?y.q:""
g=h.length
f=A.a([],n)
for(e=h.length,d=0;d<h.length;h.length===e||(0,A.I)(h),++d){a0=h[d]
f.push(A.J(["title",a0.a,"body",a0.b],q,q))}a1=m+j+"\nReply with JSON only, with exactly "+g+' pages in the same order: {"pages":[{"title":"...","body":"..."}]}\nPages:\n'+B.V.av(f,null)+"\n"
a2=null
a3=0
case 7:if(!(a3<2&&a2==null)){w=8
break}w=10
return A.b(A.rg(t,a1,B.i2,"book",E.GT),$async$bG4)
case 10:a4=b6
l=a4.a
a5=a4.b
if(a5==null){w=9
break}a6=H.RA(a5)
if(a6!=null&&o.b(a6.h(0,"pages"))&&J.ad(o.a(a6.h(0,"pages")))>=h.length)a2=o.a(a6.h(0,"pages"))
case 9:++a3
w=7
break
case 8:if(a2==null)throw A.X(l!=null&&A.M_(l)?y.k:y.y)
for(j=J.a7(a2),a7=0;a7<h.length;++a7){a8=r.b(j.h(a2,a7))?A.a1(r.a(j.h(a2,a7)),q,p):B.cE
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
r.push(q==null?b3[a7]:q)}if(B.a.q(b4,"Swahili")){u=H.a3K(r,b2)
w=1
break}b2.$2("Done",1)
u=r
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bG4,v)},
aie(b7,b8,b9,c0,c1,c2,c3){var w=0,v=A.j(x.bV),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6
var $async$aie=A.e(function(c4,c5){if(c4===1)return A.f(c5,v)
for(;;)switch(w){case 0:w=3
return A.b(A.vV(null,""),$async$aie)
case 3:b6=c5
if(B.a.i(b6).length===0)throw A.X(y.z)
t=A.nn(b6)
s=x.S
r=A.cX(c1,0,A.dD(4,"count",s),A.U(c1).c)
q=H.a3w(new A.N(r,new C.fPB(),r.$ti.k("N<ak.E,n>")).aN(0," "))
r=q==="sw"
if(!r){p=A.ag("swahili|kiswahili",!1,!1,!1,!1)
o=p.b.test(b8)}else o=!0
if(r)r="The book is written in Swahili: keep it in Swahili unless they ask for another language."
else r=q==="en"?"The book is written in English: keep it in English unless they ask for another language.":"Keep the language the book is already written in unless they ask for another."
n=r+(o?y.q:"")
m=new C.fPA(t)
w=c2==="cover"?4:5
break
case 4:b9.$2("Designing the cover\u2026",0.3)
w=6
return A.b(m.$1('You design the cover of a family book. The person asked: """'+b8+'"""\nCurrent cover settings: '+B.V.av(b7,null)+"\nAllowed values: style one of "+B.d.aN(c3,", ")+"; emblem a number 0 to 11 (0 family tree, 1 heart, 2 home, 3 star, 4 people, 5 flower, 6 open book, 7 castle, 8 church, 9 paw, 10 leaf, 11 trophy); titleSize 18 to 36; position top, middle or bottom; frame double, single, corners or none; texture leather, linen, plain, stars or rays; foil gold, silver, rose, white, copper or black; ribbon true or false.\nAlso allowed: title and subtitle (the words on the cover) and author (a name line). Change ONLY what they asked for; leave the other settings out.\n"+n+'\nReply with JSON only: {"message":"one or two friendly sentences saying what you changed","cover":{...only the settings you change...}}\n'),$async$aie)
case 6:l=c5
k=H.RA(l==null?"":l)
if(k==null)throw A.X("The AI could not design the cover just now. Nothing was changed.")
s=k.h(0,"message")
s=A.w(s==null?"I updated the cover.":s)
r=x.f
u=new C.apQ(s,D.dH2,r.b(k.h(0,"cover"))?A.a1(r.a(k.h(0,"cover")),x.N,x.z):null)
w=1
break
case 5:r=c2==="page"
p=x.t
if(r){p=A.a([],p)
if(c0>=0&&c0<c1.length)p.push(c0)
j=p}else{p=A.a([],p)
for(i=0;i<c1.length;++i)p.push(i)
j=p}if(j.length===0)throw A.X("There is no page to change.")
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
return A.b(m.$1(f+B.V.av(a2,null)+'\nReply with JSON only: {"message":"one or two friendly sentences saying what you changed","pages":[{"index":0,"title":"...","body":"..."}]}\nInclude ONLY the pages you changed, each with its full new text. If nothing needs changing in these pages, use "pages":[].\n'),$async$aie)
case 10:l=c5
k=l==null?null:H.RA(l)
if(k==null)throw A.X(y.A)
if(a0.length===0){a2=k.h(0,"message")
a2=B.a.i(A.w(a2==null?"":a2)).length!==0}else a2=!1
if(a2)a0=B.a.i(A.w(k.h(0,"message")))
a8=k.h(0,"pages")
if(s.b(a8))for(a2=J.de(a8,d),a5=J.aT(a2.a),a2=a2.$ti,a7=new A.kM(a5,a2.k("kM<1>")),a2=a2.c;a7.C();){a9=a2.a(a5.gR(a5))
b0=J.a7(a9)
b1=A.aJ(b0.h(a9,"index"))
i=b1==null?null:B.j.M(b1)
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
p=A.cF(new A.b8(h,s),new C.fPC(),s.k("M.E"),p)
p=H.a3w(A.pK(p,3,A.a4(p).k("M.E")).aN(0," "))==="sw"
s=p}else s=!1
w=s?11:12
break
case 11:s=h.$ti.k("cx<1>")
b4=A.C(new A.cx(h,s),s.k("M.E"))
s=A.a([],x.L)
for(r=b4.length,a6=0;a6<b4.length;b4.length===r||(0,A.I)(b4),++a6){p=h.h(0,b4[a6])
p.toString
s.push(p)}w=13
return A.b(H.a3K(s,b9),$async$aie)
case 13:b5=c5
for(s=J.a7(b5),i=0;i<b4.length;++i)h.n(0,b4[i],s.h(b5,i))
case 12:b9.$2("Done",1)
if(a0.length===0){s=h.a
if(s===0)s="I looked, and nothing needed changing."
else{r=s===1?"page":"pages"
r="Done. I updated "+s+" "+r+"."
s=r}}else s=a0
u=new C.apQ(s,h,null)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aie,v)},
hHl(d,e,f){return A.cg(null,B.w.j(0.65),!1,null,new C.fZi(e,f),d,null,!0,!0,x.g2)},
apQ:function apQ(d,e,f){this.a=d
this.b=e
this.c=f},
fPB:function fPB(){},
fPA:function fPA(d){this.a=d},
fPC:function fPC(){},
fZi:function fZi(d,e){this.a=d
this.b=e},
bDR(b1){var w=0,v=A.j(x.aD),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
var $async$bDR=A.e(function(b2,b3){if(b2===1)return A.f(b3,v)
for(;;)switch(w){case 0:if(!B.d.aV(b1,new C.fCI())){u=null
w=1
break}t=B.d.cC(b1,new C.fCJ())
s=$.S()
r=new A.q2(new A.pD())
q=A.zs(r,D.aSH)
p=A.L()
p.r=B.c.gp(0)
q.aD(D.aSH,p)
o=A.L()
o.r=B.a_.gp(0)
o.c=3.6
o.b=B.aa
o.d=B.bF
o.e=B.dR
n=new C.fCO(t)
if(!t){for(s=b1.length,m=1/0,l=1/0,k=0,j=0,i=0;i<s;++i){h=b1[i]
if(h==null)continue
g=h.a
if(g<m)m=g
f=h.b
if(f<l)l=f
if(g>k)k=g
if(f>j)j=f}e=B.j.D(k-m,1,1e4)
d=B.j.D(j-l,1,1e4)
a0=B.j.D(478.40000000000003/e,0,147.20000000000002/d)
a1=(520-e*a0)/2
a2=(160-d*a0)/2
s=$.S()
p=A.a([],x.v)
a3=new A.aI(s.r,B.aj,null,null,p)
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
a3.ab()}}q.ag(a3,o)}else{p=A.a([],x.v)
a3=new A.aI(s.r,B.aj,null,null,p)
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
a3.ab()}}q.ag(a3,o)}w=4
return A.b(r.o4().xH(520,160),$async$bDR)
case 4:w=3
return A.b(b3.hi(B.hd),$async$bDR)
case 3:b0=b3
u=b0==null?null:J.eQ(B.dK.gaU(b0))
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bDR,v)},
fNh(d){return C.ilR(d)},
ilR(d){var w=0,v=A.j(x.bW),u,t,s,r,q,p,o,n
var $async$fNh=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:p={}
o=d.bk0()
n=d.x!=null&&d.zM(null).length===0
if(d.x!=null)t=n?D.AC:D.JY
else t=d.gUK()?D.JY:D.aNz
w=3
return A.b(C.bDR(d.ax),$async$fNh)
case 3:s=f
p.a=null
if(s!=null)p.a=A.aou(s)
r=A.a5u(null,"NGMY Cashier","Payment receipt \u2014 "+d.b)
p.b=p.c=null
q=d.x
if(q==null){p.c="Not paid yet"
p.b=D.aNz}else{p.c=C.xl(q,!0)
p.b=n?D.AC:D.JY}r.a4j(A.h90(new C.fNj(p,d,new C.fNk(),t,n,o),null,D.bHZ,B.xl))
u=r.jI(0)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fNh,v)},
fU1(d){var w=0,v=A.j(x.y),u,t,s,r,q
var $async$fU1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(C.fNh(d),$async$fU1)
case 3:t=f
s=B.a.i(d.b)
r=A.ag("[^a-zA-Z0-9_-]+",!0,!1,!1,!1)
q=A.aL(s,r,"_")
if(q.length>40)q=B.a.az(q,0,40)
u=Af.Hr(t,"ngmy_cashier_receipt_"+(q.length===0?d.a:q)+".pdf",!1)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fU1,v)},
fCI:function fCI(){},
fCJ:function fCJ(){},
fCO:function fCO(d){this.a=d},
fNk:function fNk(){},
fNj:function fNj(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fNi:function fNi(){},
fZL(d,e){var w=0,v=A.j(x.H)
var $async$fZL=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.cg(null,B.w.j(0.55),!0,null,new C.fZP(new A.cw(null,x.eF),e),d,null,!0,!0,x.H),$async$fZL)
case 2:return A.h(null,v)}})
return A.i($async$fZL,v)},
bGx(d,e,f,g){return C.itl(d,e,f,g)},
itl(d,e,f,g){var w=0,v=A.j(x.H),u,t,s,r
var $async$bGx=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:r=null
try{t=B.a.q(e,",")?B.d.gal(e.split(",")):e
r=B.cK.aO(t)}catch(q){r=null}if(r==null||r.length===0){d.L(x.q).f.T(D.fpd)
w=1
break}w=3
return A.b(A.cg(null,null,!0,null,new C.fZH(g,r,f),d,null,!0,!0,x.H),$async$bGx)
case 3:case 1:return A.h(u,v)}})
return A.i($async$bGx,v)},
fZQ(d,e){var w=0,v=A.j(x.H)
var $async$fZQ=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.cg(null,null,!0,null,new C.fZT(new A.cw(null,x.eF),e),d,null,!0,!0,x.H),$async$fZQ)
case 2:return A.h(null,v)}})
return A.i($async$fZQ,v)},
b00:function b00(d,e){this.c=d
this.a=e},
c8n:function c8n(){},
bdc:function bdc(d,e){this.b=d
this.a=e},
fZP:function fZP(d,e){this.a=d
this.b=e},
fZM:function fZM(d){this.a=d},
fZN:function fZN(d,e,f){this.a=d
this.b=e
this.c=f},
fZO:function fZO(d,e){this.a=d
this.b=e},
fZH:function fZH(d,e,f){this.a=d
this.b=e
this.c=f},
fZF:function fZF(d){this.a=d},
fZG:function fZG(d,e,f){this.a=d
this.b=e
this.c=f},
fZT:function fZT(d,e){this.a=d
this.b=e},
fZR:function fZR(d){this.a=d},
fZS:function fZS(d,e,f){this.a=d
this.b=e
this.c=f},
fHz(d,e){var w=0,v=A.j(x.y),u,t
var $async$fHz=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(A.a3h(d),$async$fHz)
case 3:t=g
J.nT(t,new C.fHA(e))
u=A.aiS(d,t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fHz,v)},
fHA:function fHA(d){this.a=d},
aq2:function aq2(d,e,f){this.c=d
this.d=e
this.a=f},
aEO:function aEO(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
dQM:function dQM(d,e){this.a=d
this.b=e},
dQx:function dQx(d,e){this.a=d
this.b=e},
dQA:function dQA(d,e,f){this.a=d
this.b=e
this.c=f},
dQz:function dQz(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dQy:function dQy(d,e){this.a=d
this.b=e},
dQB:function dQB(d,e){this.a=d
this.b=e},
dQv:function dQv(){},
dQw:function dQw(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
dQu:function dQu(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
dQf:function dQf(d){this.a=d},
dQg:function dQg(d,e,f){this.a=d
this.b=e
this.c=f},
dQh:function dQh(d,e){this.a=d
this.b=e},
dQe:function dQe(d){this.a=d},
dQm:function dQm(d,e){this.a=d
this.b=e},
dQd:function dQd(d){this.a=d},
dQn:function dQn(d,e,f){this.a=d
this.b=e
this.c=f},
dQo:function dQo(d,e,f){this.a=d
this.b=e
this.c=f},
dQc:function dQc(d,e){this.a=d
this.b=e},
dQp:function dQp(d,e,f){this.a=d
this.b=e
this.c=f},
dQb:function dQb(d,e){this.a=d
this.b=e},
dQq:function dQq(d,e){this.a=d
this.b=e},
dQa:function dQa(d){this.a=d},
dQr:function dQr(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dQ8:function dQ8(){},
dQ2:function dQ2(d){this.a=d},
dQ3:function dQ3(d){this.a=d},
dQ9:function dQ9(d,e){this.a=d
this.b=e},
dQs:function dQs(d,e){this.a=d
this.b=e},
dQ7:function dQ7(d){this.a=d},
dQt:function dQt(d){this.a=d},
dQ6:function dQ6(){},
dQi:function dQi(d,e){this.a=d
this.b=e},
dQ5:function dQ5(d){this.a=d},
dQj:function dQj(d,e,f){this.a=d
this.b=e
this.c=f},
dQ4:function dQ4(d,e){this.a=d
this.b=e},
dQ1:function dQ1(d,e){this.a=d
this.b=e},
dQk:function dQk(d){this.a=d},
dQl:function dQl(d,e,f){this.a=d
this.b=e
this.c=f},
dQP:function dQP(){},
dQQ:function dQQ(d,e){this.a=d
this.b=e},
dQN:function dQN(d){this.a=d},
dQO:function dQO(d){this.a=d},
dQJ:function dQJ(d,e){this.a=d
this.b=e},
dQK:function dQK(d){this.a=d},
dQC:function dQC(d,e,f){this.a=d
this.b=e
this.c=f},
dQD:function dQD(d,e,f){this.a=d
this.b=e
this.c=f},
dQE:function dQE(d,e,f){this.a=d
this.b=e
this.c=f},
dQF:function dQF(d,e,f){this.a=d
this.b=e
this.c=f},
dQG:function dQG(d,e,f){this.a=d
this.b=e
this.c=f},
dQH:function dQH(d,e,f){this.a=d
this.b=e
this.c=f},
dQI:function dQI(d,e,f){this.a=d
this.b=e
this.c=f},
dQR:function dQR(){},
dQS:function dQS(){},
dQT:function dQT(){},
dQU:function dQU(d){this.a=d},
dQL:function dQL(d,e){this.a=d
this.b=e},
hCS(d){return B.d.dL(D.a5t,new C.fIl(d),new C.fIm())},
uT:function uT(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
fIl:function fIl(d){this.a=d},
fIm:function fIm(){},
am5:function am5(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aWI:function aWI(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
U3:function U3(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bgQ:function bgQ(){this.d=$
this.c=this.a=null},
dgq:function dgq(d,e){this.a=d
this.b=e},
dgo:function dgo(d,e){this.a=d
this.b=e},
dgp:function dgp(){},
dgr:function dgr(d,e){this.a=d
this.b=e},
hn5(d){var w,v,u,t=d.h(0,"id")
t=J.k(t==null?"":t)
w=d.h(0,"title")
w=J.k(w==null?"":w)
v=d.h(0,"body")
v=J.k(v==null?"":v)
u=d.h(0,"updatedAt")
u=A.bi(J.k(u==null?"":u))
return new C.nw(t,w,v,u==null?new A.V(Date.now(),0,!1):u)},
LM(d,e){return C.ikw(d,e)},
ikw(d,e){var w=0,v=A.j(x.d),u,t=2,s=[],r,q,p,o,n,m,l
var $async$LM=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){u=A.a([],x.I)
w=1
break}t=4
w=7
return A.b(A.aA(),$async$LM)
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
break}o=J.de(p,x.f)
o=A.cF(o,new C.fKR(),o.$ti.k("M.E"),x.B)
n=A.a4(o).k("Y<M.E>")
o=A.C(new A.Y(o,new C.fKS(),n),n.k("M.E"))
B.d.aZ(o,new C.fKT())
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
return A.i($async$LM,v)},
Bw(d,e,f){var w=0,v=A.j(x.H),u,t,s,r
var $async$Bw=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){w=1
break}w=3
return A.b(A.aA(),$async$Bw)
case 3:t=h
s=B.a.i(d.toLowerCase())
r=J.b7(f,new C.fYm(),x.a)
r=A.C(r,r.$ti.k("ak.E"))
w=4
return A.b(t.aC("String","ngmy_family_book_v1_"+s+"_"+e,B.V.av(r,null)),$async$Bw)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Bw,v)},
aSN(d,e,f){var w=0,v=A.j(x.H),u,t,s
var $async$aSN=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=2
return A.b(C.LM(d,e),$async$aSN)
case 2:u=h
t=J.cD(u)
s=t.bj(u,new C.h5Z(f))
if(s===-1)t.c9(u,0,f)
else t.n(u,s,f)
w=3
return A.b(C.Bw(d,e,u),$async$aSN)
case 3:return A.h(null,v)}})
return A.i($async$aSN,v)},
bEj(d,e,f){var w=0,v=A.j(x.H),u
var $async$bEj=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=2
return A.b(C.LM(d,e),$async$bEj)
case 2:u=h
J.nT(u,new C.fHr(f))
w=3
return A.b(C.Bw(d,e,u),$async$bEj)
case 3:return A.h(null,v)}})
return A.i($async$bEj,v)},
bEy(d,e){return C.ikv(d,e)},
ikv(a2,a3){var w=0,v=A.j(x.e),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$bEy=A.e(function(a4,a5){if(a4===1){s.push(a5)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.aA(),$async$bEy)
case 7:r=a5
o=B.a.i(a2.toLowerCase())
q=A.aV(J.t(r.a,"ngmy_family_book_cover_v1_"+o+"_"+a3))
if(q==null||q.length===0){u=D.P_
w=1
break}p=B.V.aP(0,q,null)
if(x.f.b(p)){o=A.a1(p,x.N,x.z)
n=o.h(0,"style")
n=J.k(n==null?"leather":n)
m=o.h(0,"title")
m=J.k(m==null?"":m)
l=o.h(0,"subtitle")
l=J.k(l==null?"":l)
k=A.aJ(o.h(0,"emblem"))
k=k==null?null:B.j.M(k)
if(k==null)k=0
if(D.E8.am(0,o.h(0,"foil")))j=A.cP(o.h(0,"foil"))
else j=J.z(o.h(0,"silver"),!0)?"silver":"gold"
i=A.aJ(o.h(0,"titleSize"))
if(i==null)i=null
i=B.j.D(i==null?25:i,18,36)
h=B.d.q(D.a7c,o.h(0,"position"))?A.cP(o.h(0,"position")):"middle"
g=B.d.q(D.a6w,o.h(0,"frame"))?A.cP(o.h(0,"frame")):"double"
f=B.d.q(D.a6s,o.h(0,"texture"))?A.cP(o.h(0,"texture")):"leather"
e=o.h(0,"author")
e=J.k(e==null?"":e)
d=J.z(o.h(0,"ribbon"),!1)
o=B.d.q(D.d8l,o.h(0,"header"))?A.cP(o.h(0,"header")):"classic"
o=new C.Ir(n,m,l,k,j,i,h,g,f,e,!d,o)}else o=D.P_
u=o
w=1
break
t=2
w=6
break
case 4:t=3
a1=s.pop()
u=D.P_
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$bEy,v)},
SH(d,e,f){return C.isR(d,e,f)},
isR(d,e,f){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$SH=A.e(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){w=1
break}t=4
w=7
return A.b(A.aA(),$async$SH)
case 7:r=h
w=8
return A.b(r.aC("String","ngmy_family_book_cover_v1_"+B.a.i(d.toLowerCase())+"_"+e,B.V.av(f.aj(),null)),$async$SH)
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
return A.i($async$SH,v)},
S9(d,e){return C.ikx(d,e)},
ikx(d,e){var w=0,v=A.j(x.dy),u,t=2,s=[],r,q,p,o,n,m,l,k,j
var $async$S9=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){u=A.a([],x.s)
w=1
break}t=4
w=7
return A.b(A.aA(),$async$S9)
case 7:r=g
q=r.tV("ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e)
if(q!=null){n=A.C(q,x.N)
u=n
w=1
break}j=J
w=8
return A.b(C.LM(d,e),$async$S9)
case 8:if(!j.cJ(g)){n=B.a.i(d.toLowerCase())
m=J.lL(r.a,"ngmy_family_book_cover_v1_"+n+"_"+e)}else m=!0
p=m
n=x.s
o=p?A.a(["main"],n):A.a([],n)
w=9
return A.b(r.aC("StringList","ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e,o),$async$S9)
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
return A.i($async$S9,v)},
ahy(d,e){var w=0,v=A.j(x.T),u,t,s,r
var $async$ahy=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.S9(d,e),$async$ahy)
case 3:s=g
r=J.a7(s)
if(r.gJ(s)>=6){u=null
w=1
break}t=r.q(s,"main")?""+1000*Date.now()+"_"+r.gJ(s):"main"
r.I(s,t)
w=5
return A.b(A.aA(),$async$ahy)
case 5:w=4
return A.b(g.aC("StringList","ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e,s),$async$ahy)
case 4:u=t
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$ahy,v)},
a3W(d,e,f){var w=0,v=A.j(x.H),u,t,s
var $async$a3W=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=2
return A.b(C.S9(d,e),$async$a3W)
case 2:s=h
J.hd(s,f)
w=3
return A.b(A.aA(),$async$a3W)
case 3:u=h
w=4
return A.b(u.aC("StringList","ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e,s),$async$a3W)
case 4:t=f==="main"?e:e+"~"+f
w=5
return A.b(u.W(0,"ngmy_family_book_v1_"+B.a.i(d.toLowerCase())+"_"+t),$async$a3W)
case 5:w=6
return A.b(u.W(0,"ngmy_family_book_cover_v1_"+B.a.i(d.toLowerCase())+"_"+t),$async$a3W)
case 6:return A.h(null,v)}})
return A.i($async$a3W,v)},
nw:function nw(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fKR:function fKR(){},
fKS:function fKS(){},
fKT:function fKT(){},
fYm:function fYm(){},
h5Z:function h5Z(d){this.a=d},
fHr:function fHr(d){this.a=d},
Ir:function Ir(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
bRN:function bRN(d){this.a=d},
ita(d,e,f,g,h,i,j){return A.a5(d,!1).ce(A.ed(new C.fYX(j,i,f,e,h,g),!0,null,x.H))},
S4(d,e,f,g,h){var w=0,v=A.j(x.y),u,t,s,r,q,p,o,n,m,l,k
var $async$S4=A.e(function(i,j){if(i===1)return A.f(j,v)
for(;;)switch(w){case 0:w=3
return A.b(C.S9(h,g),$async$S4)
case 3:k=j
if(d.e==null){u=!1
w=1
break}if(J.ad(k)>=6){d.L(x.q).f.T(D.aV2)
u=!1
w=1
break}w=4
return A.b(C.hHl(d,f,e),$async$S4)
case 4:t=j
if(t==null||d.e==null){u=!1
w=1
break}w=5
return A.b(C.ahy(h,g),$async$S4)
case 5:s=j
if(s==null){u=!1
w=1
break}r=s==="main"?g:g+"~"+s
q=1000*Date.now()
p=A.a([],x.I)
for(o=t.d,n=0;n<o.length;++n){m=o[n]
l=B.a.i(m.a)
if(l.length===0)l="Page "+(n+1)
p.push(new C.nw(""+(q+n),l,B.a.i(m.b),new A.V(Date.now(),0,!1)))}w=6
return A.b(C.Bw(h,r,p),$async$S4)
case 6:p=B.a.i(t.a)
w=p.length!==0?7:8
break
case 7:w=9
return A.b(C.SH(h,r,new C.Ir("leather",p,"",0,"gold",25,"middle","double","leather","",!0,"classic")),$async$S4)
case 9:case 8:u=!0
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$S4,v)},
fYX:function fYX(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
a_E:function a_E(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
aBM:function aBM(d,e){var _=this
_.d=d
_.e=!0
_.f=$
_.r=-1
_.x=_.w=!1
_.y=e
_.Q=_.z=$
_.c=_.a=null},
dh5:function dh5(d){this.a=d},
dh4:function dh4(d,e){this.a=d
this.b=e},
dgU:function dgU(d,e){this.a=d
this.b=e},
dgR:function dgR(d,e){this.a=d
this.b=e},
dgs:function dgs(d){this.a=d},
dgt:function dgt(d,e){this.a=d
this.b=e},
dgV:function dgV(d){this.a=d},
dgB:function dgB(d){this.a=d},
dgz:function dgz(d){this.a=d},
dgA:function dgA(d){this.a=d},
dgC:function dgC(d){this.a=d},
dgS:function dgS(d){this.a=d},
dgT:function dgT(){},
dgx:function dgx(d){this.a=d},
dgy:function dgy(d,e){this.a=d
this.b=e},
dgD:function dgD(d){this.a=d},
dgE:function dgE(d,e){this.a=d
this.b=e},
dh3:function dh3(d){this.a=d},
dh2:function dh2(d,e){this.a=d
this.b=e},
dh1:function dh1(d){this.a=d},
dgO:function dgO(d){this.a=d},
dgN:function dgN(d){this.a=d},
dgP:function dgP(d){this.a=d},
dgu:function dgu(d,e){this.a=d
this.b=e},
dgQ:function dgQ(d,e){this.a=d
this.b=e},
dgH:function dgH(d){this.a=d},
dgI:function dgI(d){this.a=d},
dgG:function dgG(){},
dgJ:function dgJ(d){this.a=d},
dgK:function dgK(d){this.a=d},
dgL:function dgL(d,e){this.a=d
this.b=e},
dgM:function dgM(d,e,f){this.a=d
this.b=e
this.c=f},
dgF:function dgF(d,e){this.a=d
this.b=e},
dgX:function dgX(d){this.a=d},
dgW:function dgW(){},
dgY:function dgY(d){this.a=d},
dgZ:function dgZ(d){this.a=d},
dh_:function dh_(d){this.a=d},
dh0:function dh0(d,e){this.a=d
this.b=e},
dgv:function dgv(d){this.a=d},
dgw:function dgw(d){this.a=d},
a_I:function a_I(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bhe:function bhe(d){var _=this
_.d=d
_.e=$
_.c=_.a=null},
diS:function diS(d){this.a=d},
diT:function diT(d){this.a=d},
diR:function diR(d){this.a=d},
diU:function diU(d){this.a=d},
diQ:function diQ(d){this.a=d},
diV:function diV(d){this.a=d},
diP:function diP(d){this.a=d},
diW:function diW(d,e){this.a=d
this.b=e},
diO:function diO(d,e){this.a=d
this.b=e},
diX:function diX(d,e){this.a=d
this.b=e},
a_G:function a_G(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
ag0:function ag0(d,e,f){this.a=d
this.b=e
this.c=f},
aBP:function aBP(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
dhk:function dhk(d,e){this.a=d
this.b=e},
dhj:function dhj(d,e){this.a=d
this.b=e},
dho:function dho(d){this.a=d},
dhn:function dhn(d,e){this.a=d
this.b=e},
dhl:function dhl(d){this.a=d},
dhm:function dhm(d){this.a=d},
dhp:function dhp(d){this.a=d},
dhq:function dhq(d){this.a=d},
dhi:function dhi(d,e){this.a=d
this.b=e},
dhh:function dhh(d,e){this.a=d
this.b=e},
KR:function KR(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ZW:function ZW(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
cPK:function cPK(d){this.a=d},
cPL:function cPL(){},
cPM:function cPM(d){this.a=d},
ber:function ber(d,e,f){this.b=d
this.c=e
this.a=f},
bei:function bei(d,e){this.b=d
this.a=e},
uU:function uU(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a_e:function a_e(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bep:function bep(){var _=this
_.r=_.f=_.e=_.d=$
_.c=_.a=null},
d8h:function d8h(d,e,f){this.a=d
this.b=e
this.c=f},
d8g:function d8g(d,e){this.a=d
this.b=e},
d8G:function d8G(d){this.a=d},
d8t:function d8t(){},
d8H:function d8H(d){this.a=d},
d8s:function d8s(){},
d8I:function d8I(d,e){this.a=d
this.b=e},
d8r:function d8r(d,e){this.a=d
this.b=e},
d8J:function d8J(d,e){this.a=d
this.b=e},
d8q:function d8q(d,e){this.a=d
this.b=e},
d8K:function d8K(d){this.a=d},
d8p:function d8p(){},
d8L:function d8L(d,e){this.a=d
this.b=e},
d8o:function d8o(d,e){this.a=d
this.b=e},
d8M:function d8M(d){this.a=d},
d8B:function d8B(d,e){this.a=d
this.b=e},
d8N:function d8N(d){this.a=d},
d8O:function d8O(d){this.a=d},
d8Q:function d8Q(d){this.a=d},
d8R:function d8R(d){this.a=d},
d8A:function d8A(d,e){this.a=d
this.b=e},
d8S:function d8S(d,e){this.a=d
this.b=e},
aIS:function aIS(d){this.a=d},
bjL:function bjL(d){this.a=d},
bcz:function bcz(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.f=f
_.r=g
_.w=h
_.x=i
_.y=j
_.z=k
_.a=l},
am6:function am6(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
a1U:function a1U(d,e){this.a=d
this.b=e},
am7:function am7(d,e,f,g,h,i){var _=this
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
bRX:function bRX(d){this.a=d},
bRR:function bRR(d){this.a=d},
bRQ:function bRQ(d,e){this.a=d
this.b=e},
bS_:function bS_(d){this.a=d},
bRS:function bRS(d){this.a=d},
bRT:function bRT(d){this.a=d},
bRW:function bRW(d){this.a=d},
bRV:function bRV(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bRY:function bRY(d,e){this.a=d
this.b=e},
bRZ:function bRZ(){},
bRU:function bRU(d){this.a=d},
bRO:function bRO(d,e){this.a=d
this.b=e},
bRP:function bRP(d){this.a=d},
bpm:function bpm(d,e){this.b=d
this.a=e},
aBN:function aBN(){},
iB(d,e){var w
$.S()
w=A.L()
w.b=B.aa
w.c=e
w.r=d.gp(0)
w.d=B.bF
w.e=B.dR
return w},
bDT(d,e,f,g,h,i,a0,a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=d.c
J.br(j.save())
j.translate(e.a,e.b)
d.oj(0,a0?-f:f,f)
w=A.bU(B.hq,8,36)
v=B.w.j(0.3)
u=$.S()
t=A.L()
t.r=v.gp(0)
d.c2(w,t)
w=a1===D.XB
s=w?Math.sin(g*5*a2):0
r=w?Math.abs(Math.sin(g*10*a2))*1.6:0
q=h.a
w=h.b
v=A.ap(w,B.w,0.3)
v.toString
if(!a3){v=s*7
d.ah(D.euA,new A.r(-4+v,-2),C.iB(q,5))
d.ah(D.es9,new A.r(4-v,-2),C.iB(q,5))}else{t=A.bU(B.JP,14,40)
p=A.L()
p.r=v.gp(0)
d.c2(t,p)}v=u.r
u=x.v
o=new A.aI(v,B.aj,k,k,A.a([],u))
t=-64-r
o.E(new A.aZ(-11,t))
o.E(new A.cc(-15,-40,-14,a3?-12:-18))
o.E(new A.aq(14,a3?-12:-18))
o.E(new A.cc(15,-40,11,t))
o.E(new A.bw())
t=A.L()
t.r=w.gp(0)
d.ag(o,t)
u=new A.aI(v,B.aj,k,k,A.a([],u))
u.E(new A.aZ(-12,-50-r))
v=-46-r
u.E(new A.aq(12,v))
u.E(new A.aq(12.5,-42-r))
u.E(new A.aq(-12.5,v))
u.E(new A.bw())
v=A.L()
v.r=h.c.gp(0)
d.ag(u,v)
switch(a1.a){case 2:w=Math.sin(g*3.4)
break
case 3:w=Math.sin(g*7.5)
break
default:w=s
break}if(a1===D.b20){n=-52+w*14
d.ah(new A.r(10,n-22),new A.r(10,n+44),C.iB(F.G6,3.4))
d.ah(D.euS,new A.r(9,n),C.iB(q,4))
d.ah(D.esz,new A.r(10,n),C.iB(q,4))}else if(a1===D.b21){d.ah(D.etF,new A.r(-8,-26-Math.max(0,w)*6),C.iB(q,4))
d.ah(D.eqC,new A.r(8,-26-Math.max(0,-w)*6),C.iB(q,4))}else{w=s*3
v=-38-r
d.ah(D.etK,new A.r(-12-w,v),C.iB(q,4))
d.ah(D.aMB,new A.r(12+w,v),C.iB(q,4))}w=A.L()
w.r=q.gp(0)
d.aD(D.fc3,w)
m=new A.r(0,-77-r)
w=A.bU(m,22,19)
v=A.L()
v.r=q.gp(0)
d.c2(w,v)
w=h.y
if(w!=null){v=A.bU(m.a5(0,K.vC),15,24)
u=A.L()
u.r=w.gp(0)
d.c2(v,u)
u=m.a5(0,D.eqw)
v=A.L()
v.r=w.gp(0)
d.O(u,4,v)}else{w=A.bU(m.a5(0,B.tH),23,20)
v=h.d
u=A.L()
u.r=v.gp(0)
d.cP(w,3.2986722862692828,2.827433388230814,!0,u)
w=h.e
if(w===3){d.ah(m.a5(0,D.euQ),m.a5(0,D.etD),C.iB(v,2.2))
d.ah(m.a5(0,D.esy),m.a5(0,D.eqt),C.iB(v,2.2))}if(w===4){w=m.a5(0,D.euU)
u=A.L()
u.r=v.gp(0)
d.O(w,6,u)
u=m.a5(0,D.esA)
w=A.L()
w.r=v.gp(0)
d.O(u,6,w)}}w=m.a5(0,D.etr)
v=A.L()
v.r=B.ic.gp(0)
d.O(w,0.9,v)
v=m.a5(0,D.etf)
w=A.L()
w.r=B.ic.gp(0)
d.O(v,0.9,w)
if(i){l=m.a5(0,K.a9a)
w=A.bU(l,21,22)
v=A.L()
v.r=D.lF.gp(0)
d.c2(w,v)
v=A.bU(l.a5(0,K.aMy),5,12)
w=A.L()
w.r=D.bhm.gp(0)
d.c2(v,w)
d.ah(l.a5(0,D.euM),l.a5(0,K.aMW),C.iB(B.cT,1.4))
d.ah(D.aMB,new A.r(15,-88-r),C.iB(q,3.6))}j.restore()},
hBs(d,e,f,g,h,i,j,k){var w,v,u,t,s,r=d.c
J.br(r.save())
w=e.a
r.translate(w,e.b-h.x*f)
d.bW(0,f)
v=A.bU(B.dL,18,96)
u=B.w.j(0.28)
$.S()
t=A.L()
t.r=u.gp(0)
d.c2(v,t)
t=A.bU(B.dL,11,70)
v=B.w.j(0.2)
u=A.L()
u.r=v.gp(0)
d.c2(t,u)
d.lz(D.aSL,A.L())
C.i9a(d,g,h,i,j)
s=(k==null?D.a9f:k).a-w>=0?1:-1
w=A.L()
w.a=B.M7
w.sap(A.jC(new A.r(s*70,-60),new A.r(-s*70,-60),A.a([D.ajb.j(0.5),D.ajb.j(0.12),D.boI.j(0.22)],x.O),A.a([0,0.55,1],x.n),B.x,null))
d.aD(D.aSL,w)
r.restore()
r.restore()},
i9a(a1,a2,a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null,d=a2.a,a0=A.ap(d,B.w,0.28)
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
s=A.bx(D.fc4,B.tM)
p=$.S()
o=A.L()
o.r=u.gp(0)
a1.aq(s,o)
o=A.bx(D.fc_,B.hU)
s=A.ap(v,B.w,0.18)
s.toString
n=A.L()
n.r=s.gp(0)
a1.aq(o,n)
n=A.bx(D.fcd,B.hU)
o=A.ap(v,B.w,0.1)
o.toString
s=A.L()
s.r=o.gp(0)
a1.aq(n,s)
s=A.L()
s.r=d.gp(0)
a1.c2(D.fc6,s)
s=A.L()
s.r=d.gp(0)
a1.c2(D.faQ,s)
s=a1.c
J.br(s.save())
s.translate(a3.w,0)
J.br(s.save())
a1.oj(0,q,q*(1+t*0.012))
o=a2.f
m=o&&!a2.r?25:28
n=x.v
l=new A.aI(p.r,B.aj,e,e,A.a([],n))
p=-m
k=p+2
l.E(new A.aZ(k,-58))
l.E(new A.cc(p-3,-62,p,-52))
l.E(new A.aq(p+4,-14))
l.E(new A.aq(m-4,-14))
l.E(new A.aq(m,-52))
l.E(new A.cc(m+3,-62,m-2,-58))
l.E(new A.cc(0,-70,k,-58))
l.E(new A.bw())
k=A.L()
k.r=v.gp(0)
a1.ag(l,k)
J.br(s.save())
a1.mu(0,l)
switch(a2.x){case 1:for(j=0;j<5;++j){u=j*5
k=D.df8[j]
i=new A.ar(B.S,B.Q,B.W,B.X,B.U)
i.b=B.aa
i.c=5
i.r=k.gp(0)
i.d=B.bF
i.e=B.dR
a1.ah(new A.r(-34+u,-64),new A.r(14+u,-14),i)}break
case 2:for(k=a2.c,h=-56;h<-14;h+=11)for(g=-26+B.o.F(B.o.ar(h,11),2)*6;g<28;g+=12){i=k.j(0.85)
$.S()
f=new A.ar(B.S,B.Q,B.W,B.X,B.U)
f.r=i.gp(0)
a1.O(new A.r(g,h),3.6,f)
f=new A.ar(B.S,B.Q,B.W,B.X,B.U)
f.r=u.gp(0)
a1.O(new A.r(g,h),1.6,f)}break
case 3:for(u=a2.c,g=-28;g<30;g+=8){k=u.j(0.7)
i=new A.ar(B.S,B.Q,B.W,B.X,B.U)
i.b=B.aa
i.c=1.6
i.r=k.gp(0)
i.d=B.bF
i.e=B.dR
a1.ah(new A.r(g,-64),new A.r(g,-14),i)}for(h=-60;h<-14;h+=8){k=u.j(0.7)
i=new A.ar(B.S,B.Q,B.W,B.X,B.U)
i.b=B.aa
i.c=1.6
i.r=k.gp(0)
i.d=B.bF
i.e=B.dR
a1.ah(new A.r(-30,h),new A.r(30,h),i)}break
default:a1.ah(D.euf,D.erh,C.iB(a2.c.j(0.9),3))}a1.ah(D.euN,D.etM,C.iB(B.w.j(0.18),1.6))
a1.ah(D.eqB,K.aMD,C.iB(B.w.j(0.18),1.6))
u=B.w.j(0.12)
k=$.S()
i=A.L()
i.r=u.gp(0)
a1.aD(D.faM,i)
s.restore()
i=A.L()
i.r=a0.gp(0)
a1.aD(D.fb_,i)
n=new A.aI(k.r,B.aj,e,e,A.a([],n))
n.E(new A.aZ(-9,-66))
n.E(new A.cc(0,-57,9,-66))
n.E(new A.cc(0,-60,-9,-66))
k=A.L()
k.r=d.gp(0)
a1.ag(n,k)
if(a2.e!==1)u=a2.r&&!o
else u=!0
if(u)a1.cP(D.fb8,0.1,2.941592653589793,!1,C.iB(a2.c,2.2))
s.restore()
u=-56*q
o=a3.Q
if(o==null)o=D.a9k
n=25*q
k=23*q
i=9*q
C.hxD(a1,new A.r(p*q+2,u),o,n,k,-1,v,d,i)
o=a3.as
p=o==null?D.Ez:o
C.hxD(a1,new A.r(m*q-2,u),p,n,k,1,v,d,i)
if(a3.at){a1.ah(D.es1,D.erY,C.iB(D.ak8,4))
a1.ah(D.es_,D.erW,C.iB(D.Gu.j(0.7),1.4))
u=A.L()
u.r=B.cT.gp(0)
a1.O(D.erZ,5,u)}s.restore()
u=a3.w
p=a3.e
o=a3.r
J.br(s.save())
s.translate(u*1.2+p*4,-88+o-t*0.4)
a1.jr(0,a3.f)
a1.bW(0,r)
C.i97(a1,a2,a3,a4,a5,d,a0,w)
s.restore()},
hxD(d,e,f,g,h,i,j,k,l){var w,v,u,t,s=f.aK(0,e),r=s.gcJ(),q=r===0?B.hq:s.eW(0,r),p=B.j.D(r,Math.abs(g-h)+0.5,g+h-0.5),o=g*g,n=(o-h*h+p*p)/(2*p),m=Math.sqrt(Math.max(0,o-n*n))
o=-q.b
w=q.a
v=new A.r(o,w)
if(o*i<0)v=new A.r(-o,-w)
u=e.a5(0,q.aM(0,n)).a5(0,v.aM(0,m))
t=e.a5(0,q.aM(0,p))
d.ah(e,u,C.iB(j,l))
o=A.ap(j,B.w,0.2)
o.toString
d.ah(e,u,C.iB(o,l*0.35))
d.ah(u,t,C.iB(k,l*0.78))
o=A.ap(k,B.w,0.22)
o.toString
d.ah(u,t,C.iB(o,l*0.22))
$.S()
o=A.L()
o.r=j.gp(0)
d.O(u,l*0.55,o)
o=A.bU(t,l*1.15,l)
w=A.L()
w.r=k.gp(0)
d.c2(o,w)
w=-l
w=t.a5(0,new A.r(i*w*0.45,w*0.1))
o=A.L()
o.r=k.gp(0)
d.O(w,l*0.28,o)},
i97(c2,c3,c4,c5,c6,c7,c8,c9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9=null,c0=c3.d,c1=c3.e
if(c1===3||c1===4){w=A.bU(B.vB,40,38)
$.S()
v=A.L()
v.r=c0.gp(0)
c2.c2(w,v)}if(c1===4){$.S()
w=A.L()
w.r=c0.gp(0)
c2.O(D.etW,9.5,w)
w=A.L()
w.r=c0.gp(0)
c2.O(D.eqS,9.5,w)}w=A.bU(D.ev8,10,6)
v=$.S()
u=A.L()
u.r=c8.gp(0)
c2.c2(w,u)
u=A.bU(D.eto,10,6)
w=A.L()
w.r=c8.gp(0)
c2.c2(u,w)
v=v.r
w=x.v
t=new A.aI(v,B.aj,b9,b9,A.a([],w))
t.E(new A.aZ(0,-20))
t.E(new A.kn(13,-20,17,-9,16,2))
t.E(new A.kn(15,13,8,20,0,20))
t.E(new A.kn(-8,20,-15,13,-16,2))
t.E(new A.kn(-17,-9,-13,-20,0,-20))
t.E(new A.bw())
u=A.L()
u.sap(A.we(D.euC,28,A.a([c9,c7,c8],x.O),A.a([0,0.55,1],x.n),B.x,b9,b9,0))
c2.ag(t,u)
u=c3.r
if(u){s=C.iB(c8.j(0.5),0.8)
c2.cP(D.fcf,3.455751918948773,2.5132741228718345,!1,s)
c2.cP(D.faT,3.455751918948773,2.5132741228718345,!1,s)
c2.ah(D.etT,D.etH,s)
c2.ah(D.eqO,D.eqF,s)
c2.cP(D.fb7,2.2,1.4,!1,s)
c2.cP(D.faR,-0.4,1.4,!1,s)}switch(c1){case 0:for(r=0;r<16;++r){q=3.141592653589793*(1.02+0.96*r/15)
p=Math.cos(q)
o=Math.sin(q)
n=new A.ar(B.S,B.Q,B.W,B.X,B.U)
n.r=c0.gp(0)
c2.O(new A.r(p*14.5,-3+o*17.5),4.3,n)}p=A.L()
p.r=c0.gp(0)
c2.cP(D.fbl,3.141592653589793,3.141592653589793,!0,p)
break
case 1:p=new A.aI(v,B.aj,b9,b9,A.a([],w))
p.E(new A.aZ(-15,-11))
p.E(new A.cc(0,-30,15,-11))
p.E(new A.aq(13,-6))
p.E(new A.cc(0,-12,-13,-6))
p.E(new A.bw())
o=A.L()
o.r=c3.c.gp(0)
c2.ag(p,o)
c2.ah(D.etI,D.eqG,C.iB(G.nq,1.4))
o=A.L()
o.r=c0.gp(0)
c2.O(D.etZ,3,o)
o=A.L()
o.r=c0.gp(0)
c2.O(D.eqT,3,o)
o=new A.aI(v,B.aj,b9,b9,A.a([],w))
o.E(new A.aZ(-13,6))
o.E(new A.cc(-12,22,0,26))
o.E(new A.cc(12,22,13,6))
o.E(new A.cc(8,13,0,12))
o.E(new A.cc(-8,13,-13,6))
o.E(new A.bw())
p=A.L()
p.r=B.hY.gp(0)
c2.ag(o,p)
p=new A.aI(v,B.aj,b9,b9,A.a([],w))
p.E(new A.aZ(-7,8))
p.E(new A.cc(0,6,7,8))
p.E(new A.cc(0,10.5,-7,8))
o=A.L()
o.r=B.bO.gp(0)
c2.ag(p,o)
break
case 2:m=c3.y
if(m==null)m=c3.b
p=new A.aI(v,B.aj,b9,b9,A.a([],w))
p.E(new A.aZ(-17,-4))
p.E(new A.cc(-20,-27,0,-29))
p.E(new A.cc(20,-27,17,-4))
p.E(new A.cc(0,-14,-17,-4))
p.E(new A.bw())
o=A.L()
o.r=m.gp(0)
c2.ag(p,o)
o=A.ap(m,B.w,0.3)
o.toString
c2.cP(D.fbs,3.4,2.5,!1,C.iB(o,1.4))
o=A.ap(m,B.c,0.3)
o.toString
c2.cP(D.fbf,3.6,2.2,!1,C.iB(o,1.2))
o=new A.aI(v,B.aj,b9,b9,A.a([],w))
o.E(new A.aZ(11,-22))
o.E(new A.cc(27,-34,25,-19))
o.E(new A.cc(18,-18,11,-22))
p=A.ap(m,B.c,0.1)
p.toString
n=A.L()
n.r=p.gp(0)
c2.ag(o,n)
n=new A.aI(v,B.aj,b9,b9,A.a([],w))
n.E(new A.aZ(11,-22))
n.E(new A.cc(24,-12,27,-26))
n.E(new A.cc(18,-22,11,-22))
o=A.ap(m,B.w,0.2)
o.toString
p=A.L()
p.r=o.gp(0)
c2.ag(n,p)
p=A.L()
p.r=c3.c.gp(0)
c2.O(D.eqH,3,p)
break
case 3:p=A.L()
p.r=c0.gp(0)
c2.cP(D.fbp,3.204424506661589,3.015928947446201,!0,p)
for(r=-3;r<=3;++r){p=A.ap(c0,B.c,0.18)
p.toString
o=new A.ar(B.S,B.Q,B.W,B.X,B.U)
o.b=B.aa
o.c=0.9
o.r=p.gp(0)
o.d=B.bF
o.e=B.dR
c2.ah(new A.r(r*3.6,-19+Math.abs(r)*0.8),new A.r(r*4.6,-4),o)}for(p=c3.c,l=0;l<2;++l){k=I.aDh[l]
o=new A.ar(B.S,B.Q,B.W,B.X,B.U)
o.b=B.aa
o.c=4.5
o.r=c0.gp(0)
o.d=B.bF
o.e=B.dR
c2.ah(new A.r(k,0),new A.r(k*1.12,22),o)
for(j=0;j<3;++j){o=new A.ar(B.S,B.Q,B.W,B.X,B.U)
o.r=p.gp(0)
c2.O(new A.r(k*(1+j*0.04),7+j*6.5),1.8,o)}}break
case 4:p=A.L()
p.r=c0.gp(0)
c2.cP(D.fbo,3.204424506661589,3.015928947446201,!0,p)
p=A.ap(c0,B.c,0.25)
p.toString
c2.ah(K.a9a,K.a99,C.iB(p,1))
break
default:p=A.L()
p.r=c0.gp(0)
c2.cP(D.faU,3.267256359733385,2.8902652413026098,!0,p)}i=B.j.D(c4.b,0,1)*0.4+0.1
p=A.bU(D.euW,5,8)
o=D.agp.j(i)
n=A.L()
n.r=o.gp(0)
c2.c2(p,n)
n=A.bU(D.etz,5,8)
p=D.agp.j(i)
o=A.L()
o.r=p.gp(0)
c2.c2(n,o)
h=c4.e*2.4
o=new A.aI(v,B.aj,b9,b9,A.a([],w))
o.E(new A.aZ(h-0.6,-2))
o.E(new A.cc(h-3.4,6,h-2.6,7.4))
o.E(new A.cc(h,8.8,h+2.6,7.4))
c2.ag(o,C.iB(c8.j(0.75),1.1))
o=A.L()
o.r=c8.gp(0)
c2.O(new A.r(h-1.5,7.2),0.7,o)
o=A.L()
o.r=c8.gp(0)
c2.O(new A.r(h+1.5,7.2),0.7,o)
g=B.j.F(c5*0.33+c6*0.37,1)>0.965?1:0
p=c4.d
o=c4.c>0.8?1.25:1
f=(1-g)*(1-p*0.6)*o
for(p=f<0.15,o=c3.f,n=f>0.12,e=2.5*f,d=c2.c,a0=e*2,a1=e*2.2,l=0;l<2;++l){a2=F.fO[l]
a3=c4.e
a4=a2>0?0.7:1
a5=a2*6.4+a3*2*a4
if(n){a3=Math.max(0.6,a0)
a4=A.bU(new A.r(a5,-3),a3,7)
a6=new A.ar(B.S,B.Q,B.W,B.X,B.U)
a6.r=B.c.j(0.96).gp(0)
c2.c2(a4,a6)
a7=a5+c4.y*1.5
a8=-3+c4.z*0.7
J.br(d.save())
a6=A.a([],w)
a4=new A.aI(v,B.aj,b9,b9,a6)
a6.push(new A.jw(A.bU(new A.r(a5,-3),a3,7)))
a4.ab()
a3=a4.e
if(a3==null)a3=a4.e=new A.E7(a4.glY().a.snapshot())
d.clipPath(a3.a,$.mH(),!0)
a3=new A.ar(B.S,B.Q,B.W,B.X,B.U)
a3.r=D.blc.gp(0)
c2.O(new A.r(a7,a8),2.1,a3)
a3=new A.ar(B.S,B.Q,B.W,B.X,B.U)
a3.r=B.w.gp(0)
c2.O(new A.r(a7,a8),1.05,a3)
a3=new A.ar(B.S,B.Q,B.W,B.X,B.U)
a3.r=B.c.gp(0)
c2.O(new A.r(a7-0.7,a8-0.7),0.55,a3)
d.restore()}a3=o?D.ZN:c8.j(0.9)
a4=o?1.5:1.1
a9=new A.ar(B.S,B.Q,B.W,B.X,B.U)
a9.b=B.aa
a9.c=a4
a9.r=a3.gp(0)
a9.d=B.bF
a9.e=B.dR
a3=p?0.8:0
c2.cP(A.bU(new A.r(a5,-3+a3),Math.max(1.2,a1),7.3500000000000005),3.2986722862692828,2.827433388230814,!1,a9)
a3=c4.c
b0=-9.2-a3*2.2
a4=a2*3.6
a6=a3<0?-a3*1.6:0
a3=a3>0?a3*0.6:0
if(u)b1=B.dY
else{b1=A.ap(c0,B.w,0.2)
b1.toString}b2=new A.ar(B.S,B.Q,B.W,B.X,B.U)
b2.b=B.aa
b2.c=1.7
b2.r=b1.gp(0)
b2.d=B.bF
b2.e=B.dR
c2.ah(new A.r(a5-a4,b0-a6+0.4),new A.r(a5+a4,b0-0.6-a3),b2)}b3=B.j.D(c4.a,0,1)
if(o)b4=D.bvg
else{u=A.ap(c8,D.boK,0.6)
u.toString
b4=u}b5=c4.b
if(b3>0.06){b6=5+B.j.D(b5,0,1)*2.2
b7=1.2+b3*6.5
b8=new A.aI(v,B.aj,b9,b9,A.a([],w))
w=-b6
b8.E(new A.aZ(w,11.5))
b8.E(new A.cc(0,11.5+b7*0.2-c4.b*1.5,b6,11.5))
b8.E(new A.cc(0,11.5+b7*1.5+c4.b*1.5,w,11.5))
b8.E(new A.bw())
v=A.L()
v.r=D.bo2.gp(0)
c2.ag(b8,v)
J.br(d.save())
c2.mu(0,b8)
v=B.c.j(0.95)
u=A.L()
u.r=v.gp(0)
c2.aD(new A.a6(w,11,w+b6*2,13.2),u)
u=A.bU(new A.r(0,11.5+b7*1.1),b7*0.9,b6*1.4)
w=A.L()
w.r=D.bvl.gp(0)
c2.c2(u,w)
d.restore()
c2.ag(b8,C.iB(b4,1.1))}else{u=new A.aI(v,B.aj,b9,b9,A.a([],w))
p=11.5-b5*0.8
u.E(new A.aZ(-5.2,p))
u.E(new A.cc(0,13.1+b5*2.8,5.2,p))
c2.ag(u,C.iB(b4,1.5))
if(b5>0.6){w=new A.aI(v,B.aj,b9,b9,A.a([],w))
w.E(new A.aZ(-4.6,11.8))
w.E(new A.cc(0,15.1+b5*1.4,4.6,11.8))
w.E(new A.cc(0,13.5,-4.6,11.8))
v=B.c.j(0.9)
u=A.L()
u.r=v.gp(0)
c2.ag(w,u)}}if(c4.b>0.2){c2.cP(D.fb6,-1.2,2.2,!1,C.iB(c8.j(0.5),0.8))
c2.cP(D.faW,2.141592653589793,2.2,!1,C.iB(c8.j(0.5),0.8))}if(o&&c1!==2){c1=c3.c
w=A.L()
w.r=c1.gp(0)
c2.O(D.eth,1.7,w)
w=A.L()
w.r=c1.gp(0)
c2.O(D.etd,1.7,w)}},
iez(a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=null,g=$.S(),f=new A.q2(new A.pD()),e=A.zs(f,h),d=a3.a,a0=a3.b,a1=Math.min(d/450,a0/900),a2=A.L()
a2.sap(A.jC(B.J,new A.r(0,a0*0.46),D.dbV,D.d3l,B.x,h))
e.aD(new A.a6(0,0,0+d,0+a0),a2)
a2=e.c
J.br(a2.save())
a2.translate((d-450*a1)/2,(a0-900*a1)/2)
e.bW(0,a1)
w=new A.e6()
w.d_(8)
for(v=0;v<120;++v){d=w.ai()
a0=w.ai()
u=w.ai()
t=new A.ar(B.S,B.Q,B.W,B.X,B.U)
t.r=B.c.j(0.2+w.ai()*0.5).gp(0)
e.O(new A.r(d*450*1.4-90,a0*330-40),0.5+u*0.9,t)}J.br(a2.save())
a2.translate(200,120)
e.jr(0,-0.5)
d=A.L()
a0=x.O
d.sap(A.we(B.J,230,A.a([D.bjT,B.L],a0),h,B.x,h,h,0))
e.c2(D.fbC,d)
a2.restore()
d=A.L()
d.sap(A.we(D.a9i,58,A.a([D.bn5,B.L],a0),h,B.x,h,h,0))
e.O(D.a9i,58,d)
d=A.L()
d.r=D.biB.gp(0)
e.O(D.a9i,24,d)
d=A.L()
d.r=D.a_d.gp(0)
e.O(D.erB,5,d)
d=A.L()
d.r=D.a_d.gp(0)
e.O(D.erF,3.4,d)
d=A.L()
d.r=D.a_d.gp(0)
e.O(D.erE,2.4,d)
for(d=x.v,s=0;s<3;++s,g=u){u=A.a([],d)
r=new A.aI(g.r,B.aj,h,h,u)
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
g=new A.bw()
u.push(g)
u=r.f
if(u!=null)g.ak(u)
r.ab()
g=[D.bha,D.bj9,D.bp3][s]
u=$.S()
t=new A.ar(B.S,B.Q,B.W,B.X,B.U)
t.r=g.gp(0)
e.ag(r,t)}for(l=0;l<4;++l){o=D.cy2[l]
k=384+B.o.F(o,11)
g=o-2
d=k-24
u=new A.ar(B.S,B.Q,B.W,B.X,B.U)
u.b=B.aa
u.c=2.4
u.r=D.a_B.gp(0)
u.d=B.bF
u.e=B.dR
e.ah(new A.r(o,k),new A.r(g,d),u)
g=A.bU(new A.r(g,k-27),11,46)
u=new A.ar(B.S,B.Q,B.W,B.X,B.U)
u.r=D.a_B.gp(0)
e.c2(g,u)
d=A.bU(new A.r(o-12,d),8,24)
u=new A.ar(B.S,B.Q,B.W,B.X,B.U)
u.r=D.a_B.gp(0)
e.c2(d,u)}for(v=0;v<9;++v){g=B.o.F(v,3)
d=B.o.F(v,4)
u=new A.ar(B.S,B.Q,B.W,B.X,B.U)
u.r=D.biE.j(0.8).gp(0)
e.O(new A.r(20+v*52+g*7,400+d*5),1.2,u)}g=A.L()
g.sap(A.jC(D.eqa,D.eqc,D.d5j,B.xa,B.x,h))
e.aD(new A.a6(-200,412,650,1300),g)
j=new A.e6()
j.d_(21)
for(v=0;v<260;++v){g=j.ai()
k=420+j.ai()*480
d=j.ai()
u=k/900+0.4
u=A.bU(new A.r(g*450,k),1+j.ai()*2*u,1.5+d*4*u)
g=j.h3()?B.c:B.w
d=new A.ar(B.S,B.Q,B.W,B.X,B.U)
d.r=g.j(0.06+j.ai()*0.06).gp(0)
e.c2(u,d)}J.br(a2.save())
a2.translate(225,590)
e.oj(0,1,0.34)
g=A.L()
g.sap(A.we(B.J,250,A.a([D.bq_,D.bju,D.brW],a0),A.a([0,0.8,1],x.n),B.x,h,h,0))
e.O(B.J,250,g)
a2.restore()
for(v=0;v<40;++v){o=j.ai()*450
k=640+j.ai()*260
g=j.ai()
d=A.ap(D.aiR,D.bi8,j.ai())
d.toString
for(g=k-(6+g*10),i=-1;i<=1;++i){$.S()
a0=new A.ar(B.S,B.Q,B.W,B.X,B.U)
a0.b=B.aa
a0.c=1.3
a0.r=d.gp(0)
a0.d=B.bF
a0.e=B.dR
e.ah(new A.r(o+i*2,k),new A.r(o+i*5,g+Math.abs(i)*3),a0)}}C.i7r(e)
for(l=0;l<3;++l)C.iaz(e,D.aB5[l])
C.iao(e,D.erv)
for(o=118;o<190;o+=11){g=B.o.F(o,3)
d=B.o.F(o,4)
$.S()
a0=new A.ar(B.S,B.Q,B.W,B.X,B.U)
a0.b=B.aa
a0.c=2.4
a0.r=D.a_w.gp(0)
a0.d=B.bF
a0.e=B.dR
e.ah(new A.r(o,452+g),new A.r(o+1,436+d),a0)}e.ah(D.eqD,D.eqX,C.iB(D.biS,1.6))
a2.restore()
return f.o4()},
i7r(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null,h=$.S().r,g=x.v,f=new A.aI(h,B.aj,i,i,A.a([],g))
f.E(new A.aZ(358,462))
f.E(new A.kn(354,422,370,382,374,332))
f.E(new A.aq(410,332))
f.E(new A.kn(416,382,432,422,428,462))
f.E(new A.bw())
w=A.L()
w.sap(A.jC(new A.r(354,0),new A.r(430,0),D.dzX,B.mq,B.x,i))
d.ag(f,w)
v=new A.e6()
v.d_(4)
for(u=0;u<30;++u){t=364+v.ai()*56
s=462-v.ai()*126
w=v.ai()
r=v.ai()
q=B.w.j(0.18)
p=new A.ar(B.S,B.Q,B.W,B.X,B.U)
p.b=B.aa
p.c=1.1
p.r=q.gp(0)
p.d=B.bF
p.e=B.dR
d.ah(new A.r(t,s),new A.r(t+w*3-1.5,s+8+r*12),p)}for(o=0;o<6;++o){n=D.dgw[o]
w=n.a
r=392+w*12
q=-n.b
p=r+w*52
m=336+(q*46-8)
w=p+w*42
q=m+(q*34+4)
l=A.a([],g)
k=new A.aI(h,B.aj,i,i,l)
l.push(new A.aZ(r,336))
k.ab()
r=new A.cc(p,m,w,q)
l.push(r)
p=k.f
if(p!=null)r.ak(p)
k.ab()
r=new A.ar(B.S,B.Q,B.W,B.X,B.U)
r.b=B.aa
r.c=8
r.r=D.aha.gp(0)
r.d=B.bF
r.e=B.dR
d.ag(k,r)
for(j=0;j<6;++j){r=v.ai()
p=v.ai()
m=v.ai()
l=new A.ar(B.S,B.Q,B.W,B.X,B.U)
l.r=A.ap(D.biK,D.bp1,v.ai()).j(0.92).gp(0)
d.O(new A.r(w+(r*36-18),q+(p*18-14)),8+m*7,l)}w+=0
r=new A.ar(B.S,B.Q,B.W,B.X,B.U)
r.b=B.aa
r.c=1.2
r.r=D.a_w.gp(0)
r.d=B.bF
r.e=B.dR
d.ah(new A.r(w,q+8),new A.r(w,q+22),r)
q=A.bU(new A.r(w,q+28),13,7)
w=new A.ar(B.S,B.Q,B.W,B.X,B.U)
w.r=D.bqk.gp(0)
d.c2(q,w)}},
iaz(b4,b5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=null,a5=b5.a,a6=b5.b,a7=b5.c,a8=b5.d,a9=a7*0.5,b0=A.bU(new A.r(a5,a6+2),a9,a7*2.8),b1=B.w.j(0.3),b2=$.S(),b3=A.L()
b3.r=b1.gp(0)
b4.c2(b0,b3)
b2=b2.r
b3=x.v
w=new A.aI(b2,B.aj,a4,a4,A.a([],b3))
b0=a5-a7
b1=a6-a8
w.E(new A.aZ(b0,b1))
w.E(new A.aq(b0,a6))
v=a5+a7
w.E(new A.cc(a5,a6+a7*0.22,v,a6))
w.E(new A.aq(v,b1))
w.E(new A.bw())
u=A.L()
u.sap(A.jC(new A.r(b0,0),new A.r(v,0),D.dgC,B.mq,B.x,a4))
b4.ag(w,u)
t=new A.e6()
t.d_(B.o.V(a5*7))
v=b4.c
J.br(v.save())
b4.mu(0,w)
for(s=0;s<40;++s){r=b0+t.ai()*a7*2
q=b1+t.ai()*a8
u=t.ai()
p=t.ai()
o=B.w.j(0.14)
n=new A.ar(B.S,B.Q,B.W,B.X,B.U)
n.b=B.aa
n.c=1
n.r=o.gp(0)
n.d=B.bF
n.e=B.dR
b4.ah(new A.r(r,q),new A.r(r+4+u*5,q+p*2-1),n)}u=b1+5
p=a7*2
o=D.aiN.j(0.75)
n=A.L()
n.r=o.gp(0)
b4.aD(new A.a6(b0,u,b0+p,u+7),n)
for(u=a7/5,o=b1+12,n=b1+20,m=b0+2,l=0;l<B.j.bh(u);++l){k=m+l*10
j=A.a([],b3)
i=new A.aI(b2,B.aj,a4,a4,j)
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
h=new A.bw()
j.push(h)
j=i.f
if(j!=null)h.ak(j)
i.ab()
j=new A.ar(B.S,B.Q,B.W,B.X,B.U)
j.r=D.lF.j(0.85).gp(0)
b4.ag(i,j)}u=A.a([],b3)
f=new A.aI(b2,B.aj,a4,a4,u)
b2=a6-8
f.E(new A.aZ(b0,b2))
for(p/=6,l=0;l<=B.j.bh(p);++l){o=(l&1)===0?0:-5
o=new A.aq(b0+l*6,b2+o)
u.push(o)
n=f.f
if(n!=null)o.ak(n)
f.ab()}b4.ag(f,C.iB(D.aiN.j(0.7),1.6))
v.restore()
b0=$.S().r
b2=new A.aI(b0,B.aj,a4,a4,A.a([],b3))
u=a7*0.1
p=a5+u
o=a7*0.28
n=p-o
m=a6+1
b2.E(new A.aZ(n,m))
j=a6-a8*0.55
b2.E(new A.aq(n,j))
o=p+o
b2.E(new A.cc(p,a6-a8*0.82,o,j))
b2.E(new A.aq(o,m))
b2.E(new A.bw())
m=A.L()
m.r=D.aiZ.gp(0)
b4.ag(b2,m)
m=A.L()
m.r=D.aiZ.gp(0)
b4.O(new A.r(a5-a7*0.62,a6-a8*0.5),u,m)
m=b5.e
u=b1-m
b2=a7*1.38
o=a5-b2
j=b1+4
p=a5+b2
e=new A.aI(b0,B.aj,a4,a4,A.a([],b3))
e.E(new A.aZ(o,j))
n=b1-m*0.55
e.E(new A.cc(a5-a9,n,a5,u))
e.E(new A.cc(a5+a9,n,p,j))
e.E(new A.cc(a5,b1+a7*0.34,o,j))
e.E(new A.bw())
b1=A.L()
n=a7*1.4
b1.sap(A.jC(new A.r(a5-n,0),new A.r(a5+n,0),D.dkb,B.mq,B.x,a4))
b4.ag(e,b1)
J.br(v.save())
b4.mu(0,e)
for(a9=p-o,s=0;s<70;++s){d=s/69
b1=Math.sin(d*3.141592653589793)
p=t.ai()
n=(t.h3()?B.w:D.bih).j(0.16)
i=new A.ar(B.S,B.Q,B.W,B.X,B.U)
i.b=B.aa
i.c=0.9
i.r=n.gp(0)
i.d=B.bF
i.e=B.dR
b4.ah(new A.r(a5+(p-0.5)*3,u),new A.r(o+a9*d,j+b1*a7*0.3),i)}for(l=1;l<5;++l){a0=u+m*l/4.6
a1=b2*l/4.6
b1=A.a([],b3)
p=new A.aI(b0,B.aj,a4,a4,b1)
n=a0+2
b1.push(new A.aZ(a5-a1,n))
p.ab()
n=new A.cc(a5,a0+7+l*1.5,a5+a1,n)
b1.push(n)
b1=p.f
if(b1!=null)n.ak(b1)
p.ab()
b1=B.w.j(0.22)
n=new A.ar(B.S,B.Q,B.W,B.X,B.U)
n.b=B.aa
n.c=1.2
n.r=b1.gp(0)
n.d=B.bF
n.e=B.dR
b4.ag(p,n)}v.restore()
for(s=0;s<46;++s){d=s/45
a2=o+a9*d
a3=j+Math.sin(d*3.141592653589793)*a7*0.3
b1=t.ai()
b2=t.ai()
v=new A.ar(B.S,B.Q,B.W,B.X,B.U)
v.b=B.aa
v.c=1.1
v.r=D.bpt.gp(0)
v.d=B.bF
v.e=B.dR
b4.ah(new A.r(a2,a3),new A.r(a2+(b1-0.5)*2,a3+3+b2*4),v)}a9=new A.aI(b0,B.aj,a4,a4,A.a([],b3))
b0=u+4
a9.E(new A.aZ(a5-2.5,b0))
a9.E(new A.aq(a5,u-7))
a9.E(new A.aq(a5+2.5,b0))
a9.E(new A.bw())
b0=A.L()
b0.r=D.blF.gp(0)
b4.ag(a9,b0)},
iao(d,e){var w,v,u,t,s,r,q
for(w=e.a,v=e.b,u=v+0,t=v+-16,s=0;s<2;++s){r=w+I.aDe[s]
$.S()
q=new A.ar(B.S,B.Q,B.W,B.X,B.U)
q.b=B.aa
q.c=3
q.r=D.a_w.gp(0)
q.d=B.bF
q.e=B.dR
d.ah(new A.r(r,u),new A.r(r,t),q)}u=A.bU(e.a5(0,K.aMx),24,36)
t=$.S()
r=A.L()
r.r=D.but.gp(0)
d.c2(u,r)
t=new A.aI(t.r,B.aj,null,null,A.a([],x.v))
r=w-24
u=v-30
t.E(new A.aZ(r,u))
t.E(new A.aq(w,v-54))
t.E(new A.aq(w+24,u))
t.E(new A.cc(w,v-24,r,u))
t.E(new A.bw())
u=A.L()
u.r=D.ahS.gp(0)
d.ag(t,u)},
i9L(d){switch(B.o.F(d,8)){case 0:return D.b1z
case 1:return D.b1x
case 2:return D.b1w
case 3:return D.b1v
case 4:return D.b1y
case 5:return D.b1A
case 6:return D.hCh
default:return D.hCg}},
SF(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){var w=new C.bpn()
w.a=n
w.b=q
w.c=g
w.d=r
w.y=h
w.z=i
w.e=t
w.r=o
w.x=f
w.Q=j==null?D.a9k:j
w.as=k==null?D.Ez:k
C.hBs(d,e,p,C.i9L(m),w,s,m,l)},
hCY(d,e){return(0.2+0.8*Math.abs(Math.sin(d*10+e)))*(0.55+0.45*Math.sin(d*3.1+e*2))},
bTB:function bTB(){var _=this
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
tg:function tg(d,e,f,g,h,i,j,k,l,m){var _=this
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
bpn:function bpn(){var _=this
_.a=0
_.b=0.25
_.z=_.y=_.x=_.w=_.r=_.f=_.e=_.d=_.c=0
_.as=_.Q=null
_.at=!1},
amp:function amp(){this.b=this.a=null},
aWN:function aWN(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bTt:function bTt(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bTu:function bTu(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bTv:function bTv(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bTw:function bTw(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bTx:function bTx(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bTy:function bTy(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bTz:function bTz(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bTA:function bTA(){},
bTs:function bTs(d){this.a=d},
ag9:function ag9(d,e){this.a=d
this.b=e},
ae7:function ae7(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
N7(d){var w,v,u,t,s=A.a([],x.u)
for(w=d.f,v=w.length,u=0;u<w.length;w.length===v||(0,A.I)(w),++u){t=w[u]
if(!t.as&&B.a.i(t.b).length!==0)s.push(t)}s=new C.bSc(s)
s.bC4(d)
return s},
H0(d,e,f,g,h,i,j){var w,v=A.U(g).k("Y<1>")
v=A.d0(new A.Y(g,new C.fvx(f),v),v.k("M.E"))
w=A.C(v,A.a4(v).k("ci.E"))
B.d.e0(w,d)
if(w.length===0)return null
v=A.a([f],x.s)
B.d.u(v,A.cX(w,0,A.dD(3,"count",x.S),A.U(w).c))
B.d.e0(v,d)
return new C.lv(e,v,B.d.cn(v,f),h,i,"tree",j)},
iuN(c5,c6,c7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3=null,b4="tf",b5="child",b6="children",b7="grandfather",b8="grandmother",b9="grandparent",c0=x.N,c1=A.T(c0,x.cg),c2=new C.h5Q(c1),c3=x.s,c4=A.a([],c3)
for(w=c5.b,v=w.length,u=0;u<w.length;w.length===v||(0,A.I)(w),++u)c4.push(B.a.i(w[u].b))
c4=A.jD(c4,c0)
t=A.C(c4,A.a4(c4).k("ci.E"))
c4=A.a([],c3)
for(v=w.length,u=0;u<w.length;w.length===v||(0,A.I)(w),++u){s=B.a.i(w[u].x)
if(s.length!==0)c4.push(s)}c4=A.jD(c4,c0)
r=A.C(c4,A.a4(c4).k("ci.E"))
c4=A.a([],c3)
for(v=w.length,u=0;u<w.length;w.length===v||(0,A.I)(w),++u){s=B.a.i(w[u].z)
if(s.length!==0)c4.push(s)}c4=A.jD(c4,c0)
q=A.C(c4,A.a4(c4).k("ci.E"))
for(c4=w.length,v=A.U(t).k("Y<1>"),s=v.k("M.E"),p=A.U(w).k("Y<1>"),o=p.k("M.E"),n=x.S,u=0;u<w.length;w.length===c4||(0,A.I)(w),++u){m=w[u]
l=B.a.i(m.b)
k=m.d
j=k==null
if(j)i=b3
else{h=c5.c
h===$&&A.c()
i=h.h(0,k)}if(i!=null){h=i.c
if(h===D.wI)g="father"
else g=h===D.oB?"mother":"parent"
h=B.a.i(i.b)
f=A.C(new A.Y(t,new C.h5S(l),v),s)
e=h+" is the "+g+" of "+l
c2.$2("parent",C.H0(c6,"Who is the "+g+" of "+l+"?",h,f,e+".",e+". A family is a chain, and each person is a link.",20))
if(c7){d=A.C(new A.Y(w,new C.h5T(i,m),p),o)
B.d.e0(d,c6)
c2.$2(b4,new C.lv("True or false: "+h+" is the "+g+" of "+l+".",D.aC7,0,"Yes, "+h+" is the "+g+" of "+l+".","",b4,15))
if(d.length!==0)c2.$2(b4,new C.lv("True or false: "+B.a.i(B.d.gH(d).b)+" is the "+g+" of "+l+".",D.aC7,1,"No, the "+g+" of "+l+" is "+h+".","",b4,15))}}a0=c5.Gd(m)
h=a0.length
if(h!==0){a1=a0[c6.aw(h)]
h=B.a.i(a1.b)
f=A.C(new A.Y(t,new C.h5U(l,a0,c5),v),s)
e=a1.c
if(e===D.wI)e="son"
else e=e===D.oB?"daughter":b5
a2=l+" has "
a3=a0.length
a4=a3===1?b5:b6
c2.$2(b5,C.H0(c6,"Which of these people is a child of "+l+"?",h,f,h+" is the "+e+" of "+l+".",a2+a3+" "+a4+", and "+h+" is one of them.",20))
h=a0.length
a5=A.et([h+1,h+2,Math.max(0,h-1)],n)
a5.W(0,a0.length)
h=a0.length
a4=A.a([],c3)
for(f=a5.$ti,e=new A.mA(a5,a5.r,f.k("mA<1>")),e.c=a5.e,f=f.c;e.C();){a3=e.d
a4.push(A.w(a3==null?f.a(a3):a3))}f=a0.length
e=""+f
f=f===1
a3=f?b5:b6
f=f?b5:b6
c2.$2("count",C.H0(c6,"How many children does "+l+" have?",""+h,a4,a2+e+" "+a3+".","Count them with me: "+l+" has "+e+" "+f+".",15))
if(a0.length>=2&&a0[0].Q!==a0[1].Q){h=B.a.i(B.d.gH(a0).b)
f=A.a([],c3)
for(e=A.U(a0),a2=e.k("iz<1>"),a3=new A.iz(a0,1,b3,a2),a3.n9(a0,1,b3,e.c),a3=new A.bQ(a3,a3.gJ(0),a2.k("bQ<ak.E>")),a2=a2.k("ak.E");a3.C();){e=a3.d
f.push(B.a.i((e==null?a2.a(e):e).b))}c2.$2("oldest",C.H0(c6,"Who is the oldest child of "+l+"?",h,f,B.a.i(B.d.gH(a0).b)+" was born first.","The first born of "+l+" is "+B.a.i(B.d.gH(a0).b)+". The eldest child often helps to guide the younger ones.",20))}}a6=c5.arG(m)
if(a6!=null){h=B.a.i(a6.b)
f=A.C(new A.Y(t,new C.h5V(l),v),s)
e=l+" is married to "+h
c2.$2("spouse",C.H0(c6,"Who is "+l+" married to?",h,f,e+".",e+". When two people marry, two families become one.",20))}if(j)i=b3
else{j=c5.c
j===$&&A.c()
i=j.h(0,k)}a7=b3
if(!(i==null)){k=i.d
if(!(k==null)){j=c5.c
j===$&&A.c()
k=j.h(0,k)
a7=k}}if(a7!=null){k=B.a.i(a7.b)
j=A.C(new A.Y(t,new C.h5W(l),v),s)
h=k+" is the "
f=a7.c
e=f===D.wI
if(e)a2=b7
else a2=f===D.oB?b8:b9
if(e)f=b7
else f=f===D.oB?b8:b9
c2.$2("grand",C.H0(c6,"Who is the grandparent of "+l+"?",k,j,h+a2+" of "+l+".",h+f+" of "+l+", two steps up the tree.",20))}a8=c5.aNk(m)
k=a8.length
if(k!==0){k=B.a.i(a8[c6.aw(k)].b)
j=A.C(new A.Y(t,new C.h5X(l,a8,c5),v),s)
h=k+" and "+l
c2.$2("sibling",C.H0(c6,"Who is a brother or sister of "+l+"?",k,j,h+" share the same parent.",h+" are brother and sister: the same roots, two branches.",20))}k=B.a.i(m.x)
if(k.length!==0){j=A.C(r,c0)
B.d.u(j,D.cQP)
h=l+" was born in "+k
c2.$2("place",C.H0(c6,"Where was "+l+" born?",k,j,h+".",h+". Every one of us comes from a place.",20))}k=B.a.i(m.z)
if(k.length!==0){j=A.C(q,c0)
B.d.u(j,D.d6n)
h=l+" works as "+k
f=h+"."
c2.$2("job",C.H0(c6,"What work does "+l+" do?",k,j,f,h+". Work is how we serve the family and the village.",20))
h=A.a([],c3)
for(j=w.length,a9=0;a9<w.length;w.length===j||(0,A.I)(w),++a9){b0=w[a9]
if(B.a.i(b0.z).toLowerCase()!==k.toLowerCase())h.push(B.a.i(b0.b))}c2.$2("who",C.H0(c6,"Who works as "+k+"?",l,h,f,"Remember: "+l+" works as "+k+".",20))}k=A.ag("(1[6-9]\\d\\d|20\\d\\d)",!0,!1,!1,!1).cD(m.w)
b1=k==null?b3:k.b[1]
if(b1!=null){b2=A.iZ(b1,b3,b3)
c2.$2("year",C.H0(c6,"In which year was "+l+" born?",b1,A.a([""+(b2+2),""+(b2-3),""+(b2+5),""+(b2-1)],c3),l+" was born in "+b1+".",l+" was born in the year "+b1+".",25))}}return c1},
bEu(d,e,f,g){var w,v,u,t,s,r,q,p,o,n={},m=C.N7(d),l=new A.e6()
l.d_(f)
w=C.iuN(m,l,g)
for(v=new A.ds(w,w.r,w.e);v.C();)J.hla(v.d,l)
v=A.a4(w).k("cx<1>")
u=A.C(new A.cx(w,v),v.k("M.E"))
B.d.e0(u,l)
t=A.a([],x.J)
s=A.aR(x.N)
n.a=0
for(;;){if(!(t.length<e&&B.d.aV(u,new C.fIX(n,w))))break
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
if(v<e){v=A.C(D.aA7,x.df)
B.d.e0(v,l)
for(p=v.length,r=0;r<v.length;v.length===p||(0,A.I)(v),++r){o=v[r]
if(t.length>=e)break
t.push(C.hBz(o,l))}}else if(!g&&v>3){o=C.hBz(D.aA7[l.aw(14)],l)
t[t.length-1-l.aw(3)]=o}return t},
hBz(d,e){var w=d.b,v=w[d.c]
w=A.C(w,x.N)
B.d.e0(w,e)
return new C.lv(d.a,w,B.d.cn(w,v),d.d,d.e,d.f,d.r)},
hGU(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=C.N7(a2),a1=new A.e6()
a1.d_(a3)
w=A.a([],x.ar)
v=x.u
u=A.a([],v)
for(t=a0.b,s=t.length,r=0;r<t.length;t.length===s||(0,A.I)(t),++r){q=t[r]
if(a0.Gd(q).length>=2)u.push(q)}B.d.e0(u,a1)
for(s=u.length,p=x.t,o=x.s,r=0;r<u.length;u.length===s||(0,A.I)(u),++r){n=u[r]
m=a0.Gd(n)
l=A.U(m)
k=new A.iz(m,0,5,l.k("iz<1>"))
k.n9(m,0,5,l.c)
j=k.dq(0)
if(new A.N(j,new C.fXj(),A.U(j).k("N<1,H>")).fM(0).a<j.length)continue
m=B.a.i(n.b)
l=A.a([],o)
for(k=j.length,i=0;i<j.length;j.length===k||(0,A.I)(j),++i)l.push(B.a.i(j[i].b))
k=A.a([],p)
for(h=0;h<j.length;++h)k.push(h)
g=A.a([],p)
for(f=j.length,i=0;i<j.length;j.length===f||(0,A.I)(j),++i)g.push(C.aSz(a0,j[i]))
w.push(new C.aus("The children of "+m,"Tap two people to swap them. Put them in a line from the oldest to the youngest.",g,l,k))
if(w.length>=4)return w}u=x.S
e=A.T(u,x.do)
for(s=t.length,r=0;r<t.length;t.length===s||(0,A.I)(t),++r){q=t[r]
J.c5(e.c3(0,a0.amP(q),new C.fXk()),q)}if(e.a>=2&&w.length<4){t=e.$ti.k("cx<1>")
d=A.C(new A.cx(e,t),t.k("M.E"))
B.d.fg(d)
v=A.a([],v)
for(u=A.cX(d,0,A.dD(5,"count",u),A.U(d).c),t=u.$ti,u=new A.bQ(u,u.gJ(0),t.k("bQ<ak.E>")),t=t.k("ak.E");u.C();){s=u.d
s=e.h(0,s==null?t.a(s):s)
s.toString
m=J.cD(s)
m.e0(s,a1)
v.push(m.gH(s))}u=A.a([],o)
for(t=v.length,r=0;r<v.length;v.length===t||(0,A.I)(v),++r)u.push(B.a.i(v[r].b))
t=A.a([],p)
for(h=0;h<v.length;++h)t.push(h)
s=A.a([],p)
for(p=v.length,r=0;r<v.length;v.length===p||(0,A.I)(v),++r)s.push(C.aSz(a0,v[r]))
w.push(new C.aus("Which generation comes first?","Tap two people to swap them. Put the eldest generation first and the youngest last.",s,u,t))}return w},
aR4(d){return B.d.aoh(D.aCD,new C.fEN(d))},
ikZ(d){return A.nA(new A.Y(D.aCD,new C.fLN(d),x.av))},
bT0(d){return C.hQB(d)},
hQB(d){var w=0,v=A.j(x.S),u,t=2,s=[],r,q,p,o
var $async$bT0=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.aA(),$async$bT0)
case 7:r=f
q=B.a.i(d)
q=A.eo(J.t(r.a,"ngmy_family_stars_v1_"+q.toLowerCase()))
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
return A.i($async$bT0,v)},
BP(d,e){return C.hQy(d,e)},
hQy(d,e){var w=0,v=A.j(x.S),u,t=2,s=[],r,q,p,o,n,m
var $async$BP=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.aA(),$async$BP)
case 7:r=g
p=B.a.i(d)
o=A.eo(J.t(r.a,"ngmy_family_stars_v1_"+p.toLowerCase()))
if(o==null)o=0
q=o+(e<0?0:e)
w=8
return A.b(r.aC("Int","ngmy_family_stars_v1_"+p.toLowerCase(),q),$async$BP)
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
return A.i($async$BP,v)},
bT_(d,e,f){return C.hQz(d,e,f)},
hQz(d,e,f){var w=0,v=A.j(x.S),u,t=2,s=[],r,q,p,o
var $async$bT_=A.e(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.aA(),$async$bT_)
case 7:r=h
q=B.a.i(d)
q=A.eo(J.t(r.a,"ngmy_family_best_v1_"+q.toLowerCase()+"_"+e+"_"+f))
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
return A.i($async$bT_,v)},
BQ(d,e,f,g){return C.hQA(d,e,f,g)},
hQA(d,e,f,g){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n,m
var $async$BQ=A.e(function(h,i){if(h===1){s.push(i)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.aA(),$async$BQ)
case 7:r=i
p=B.a.i(d)
o=A.eo(J.t(r.a,"ngmy_family_best_v1_"+p.toLowerCase()+"_"+e+"_"+f))
q=o==null?0:o
w=g>q?8:9
break
case 8:w=10
return A.b(r.aC("Int","ngmy_family_best_v1_"+p.toLowerCase()+"_"+e+"_"+f,g),$async$BQ)
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
return A.i($async$BQ,v)},
bGM(d,e,f){var w
if(f<=0)return 0
w=d===f?20:0
return d*5+w+Math.min(e,8)},
h7U(d,e,f,g){return new C.al0(g,d==null?A.a(["","","",""],x.s):d,e,f)},
hOF(d){var w,v,u,t=d.h(0,"q")
t=J.k(t==null?"":t)
w=A.a([],x.s)
v=x.j
u=J.aT(v.b(d.h(0,"a"))?v.a(d.h(0,"a")):B.cs)
while(u.C())w.push(J.k(u.gR(u)))
u=x.N
w=A.cX(w,0,A.dD(4,"count",x.S),u).dq(0)
B.d.u(w,A.c1(Math.max(0,4-(v.b(d.h(0,"a"))?J.ad(v.a(d.h(0,"a"))):0)),"",!1,u))
v=A.aJ(d.h(0,"c"))
v=v==null?null:B.j.M(v)
v=B.o.D(v==null?0:v,0,3)
u=A.aJ(d.h(0,"s"))
u=u==null?null:B.j.M(u)
return C.h7U(w,v,B.o.D(u==null?20:u,5,60),t)},
hmj(d){var w,v,u,t,s,r,q=J.a7(d),p=q.h(d,"id")
p=J.k(p==null?"":p)
w=q.h(d,"title")
w=J.k(w==null?"":w)
v=A.a([],x.b)
u=x.j
q=J.aT(u.b(q.h(d,"qs"))?u.a(q.h(d,"qs")):B.cs)
u=x.f
t=x.N
s=x.z
while(q.C()){r=q.gR(q)
if(u.b(r))v.push(C.hOF(A.a1(r,t,s)))}return new C.MS(p,w,v)},
hgn(d){var w,v=A.a([],x.c)
for(w=J.aT(d.z);w.C();)v.push(C.hmj(w.gR(w)))
return v},
aSz(d,e){var w=e.c===D.oB
if(d.amP(e)===0&&d.Gd(e).length!==0)return w?0:1
if(d.Gd(e).length!==0||d.arG(e)!=null)return w?2:3
return w?4:5},
hI_(a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=C.N7(a4),a3=new A.e6()
a3.d_(a5)
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
j=i.h(0,k)}h=a2.Gd(m)
g=a2.arG(m)
f=a2.aNk(m)
k=B.a.i(m.x)
if(k.length!==0)l.push("I was born in "+k+".")
k=B.a.i(m.z)
if(k.length!==0)l.push("I work as "+k+".")
k=A.ag("(1[6-9]\\d\\d|20\\d\\d)",!0,!1,!1,!1).cD(m.w)
e=k==null?null:k.b[1]
if(e!=null)l.push("I was born in the year "+e+".")
k=f.length
if(k!==0){i=k===1?"brother or sister":"brothers and sisters"
l.push("I have "+k+" "+i+".")}k=h.length
if(k!==0){i=k===1?"child":"children"
l.push("I have "+k+" "+i+".")}if(g!=null)l.push("I am married to "+B.a.i(g.b)+".")
if(h.length!==0){k=m.c
if(k===D.wI)k="father"
else k=k===D.oB?"mother":"parent"
l.push("I am the "+k+" of "+B.a.i(B.d.gH(h).b)+".")}if(j!=null){k=j.c
if(k===D.wI)k="father"
else k=k===D.oB?"mother":"parent"
l.push("My "+k+" is "+B.a.i(j.b)+".")}if(l.length<3)continue
B.d.e0(l,a3)
B.d.aZ(l,new C.h6f())
d=B.a.i(m.b)
a0=A.C(new A.Y(s,new C.h6g(d),o),n)
B.d.e0(a0,a3)
k=A.a([d],t)
i=A.U(a0)
a1=new A.iz(a0,0,3,i.k("iz<1>"))
a1.n9(a0,0,3,i.c)
B.d.u(k,a1)
B.d.e0(k,a3)
a1=C.aSz(a2,m)
i=new A.iz(l,0,4,p)
i.n9(l,0,4,r)
w.push(new C.baN(d,a1,i.dq(0),k))
if(w.length>=5)break}return w},
hz8(d){return B.a.q(d,"married to")||B.a.q(d," of ")||B.a.a_(d,"My ")?1:0},
hH5(a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=C.N7(a4),a3=new A.e6()
a3.d_(a5)
w=A.a([],x.gy)
v=x.u
u=A.a([],v)
for(t=a2.b,s=t.length,r=0;r<t.length;t.length===s||(0,A.I)(t),++r){q=t[r]
if(a2.Gd(q).length>=2)u.push(q)}B.d.e0(u,a3)
for(s=u.length,p=x.t,o=x.s,n=x.P,m=x.fT,r=0;r<u.length;u.length===s||(0,A.I)(u),++r){l=u[r]
k=a2.Gd(l)
j=A.U(k)
i=new A.iz(k,0,4,j.k("iz<1>"))
i.n9(k,0,4,j.c)
h=i.dq(0)
i=A.a([],v)
for(k=t.length,j=l.a,g=0;g<t.length;t.length===k||(0,A.I)(t),++g){q=t[g]
if(q.a!==j&&!B.d.aV(h,new C.fXT(q))&&q.d!==j)i.push(q)}B.d.e0(i,a3)
k=i.length
if(k===0)continue
k=Math.min(2,k)
j=new A.iz(i,0,k,m)
j.n9(i,0,k,n)
f=j.dq(0)
j=B.a.i(l.b)
k=C.aSz(a2,l)
i=A.a([],o)
for(e=h.length,g=0;g<h.length;h.length===e||(0,A.I)(h),++g)i.push(B.a.i(h[g].b))
e=A.a([],p)
for(d=h.length,g=0;g<h.length;h.length===d||(0,A.I)(h),++g)e.push(C.aSz(a2,h[g]))
d=A.a([],o)
for(a0=f.length,g=0;g<f.length;f.length===a0||(0,A.I)(f),++g)d.push(B.a.i(f[g].b))
a0=A.a([],p)
for(a1=f.length,g=0;g<f.length;f.length===a1||(0,A.I)(f),++g)a0.push(C.aSz(a2,f[g]))
w.push(new C.aab(j,k,i,e,d,a0))
if(w.length>=3)break}return w},
lv:function lv(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
bSc:function bSc(d){this.b=d
this.c=$},
bSd:function bSd(){},
bSe:function bSe(d){this.a=d},
fvx:function fvx(d){this.a=d},
h5Q:function h5Q(d){this.a=d},
h5R:function h5R(){},
h5S:function h5S(d){this.a=d},
h5T:function h5T(d,e){this.a=d
this.b=e},
h5U:function h5U(d,e,f){this.a=d
this.b=e
this.c=f},
h5P:function h5P(d,e){this.a=d
this.b=e},
h5V:function h5V(d){this.a=d},
h5W:function h5W(d){this.a=d},
h5X:function h5X(d,e,f){this.a=d
this.b=e
this.c=f},
h5O:function h5O(d,e){this.a=d
this.b=e},
fIX:function fIX(d,e){this.a=d
this.b=e},
aus:function aus(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fXj:function fXj(){},
fXk:function fXk(){},
zC:function zC(d,e,f){this.a=d
this.b=e
this.c=f},
fEN:function fEN(d){this.a=d},
fLN:function fLN(d){this.a=d},
al0:function al0(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bN0:function bN0(){},
MS:function MS(d,e,f){this.a=d
this.b=e
this.c=f},
baN:function baN(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.e=g},
h6f:function h6f(){},
h6g:function h6g(d){this.a=d},
aab:function aab(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fXT:function fXT(d){this.a=d},
bi4:function bi4(d,e,f){var _=this
_.a=d
_.b=e
_.c=f
_.d=-0.05
_.f=_.e=!1
_.r=0},
ag7:function ag7(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=1},
akj:function akj(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
akk:function akk(d,e,f,g,h){var _=this
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
bLa:function bLa(d){this.a=d},
bL5:function bL5(){},
bLb:function bLb(){},
bL3:function bL3(){},
bL4:function bL4(){},
bL9:function bL9(d){this.a=d},
bL6:function bL6(d,e){this.a=d
this.b=e},
bL8:function bL8(d,e){this.a=d
this.b=e},
bL7:function bL7(d,e){this.a=d
this.b=e},
bL2:function bL2(d){this.a=d},
bde:function bde(d,e){this.b=d
this.a=e},
QN:function QN(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aBL:function aBL(d,e,f){this.b=d
this.c=e
this.a=f},
aAf:function aAf(d,e,f){this.a=d
this.b=e
this.c=f},
av3:function av3(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
av4:function av4(d,e,f){var _=this
_.d=$
_.y=_.x=_.w=_.r=_.f=_.e=0
_.Q=_.z=$
_.as=d
_.at=""
_.ax=-1
_.ch=_.ay=!1
_.cQ$=e
_.b7$=f
_.c=_.a=null},
cqM:function cqM(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cqN:function cqN(d){this.a=d},
cqL:function cqL(d){this.a=d},
cqO:function cqO(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
cqP:function cqP(){},
cqQ:function cqQ(d,e){this.a=d
this.b=e},
cqR:function cqR(){},
cqS:function cqS(d){this.a=d},
cqI:function cqI(d){this.a=d},
cqJ:function cqJ(d,e){this.a=d
this.b=e},
cqK:function cqK(d,e,f){this.a=d
this.b=e
this.c=f},
cqD:function cqD(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cqF:function cqF(d,e){this.a=d
this.b=e},
cqG:function cqG(d,e){this.a=d
this.b=e},
cqE:function cqE(d,e){this.a=d
this.b=e},
cqC:function cqC(){},
cqH:function cqH(){},
bcI:function bcI(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.a=h},
cQO:function cQO(){},
az0:function az0(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
az1:function az1(d){var _=this
_.d=$
_.e=0
_.f=1
_.y=_.x=_.w=_.r=0
_.z=d
_.Q=-1
_.ax=_.at=_.as=!1
_.ay=0
_.c=_.a=_.ch=null},
cFK:function cFK(d){this.a=d},
cFJ:function cFJ(d){this.a=d},
cFS:function cFS(d,e){this.a=d
this.b=e},
cFT:function cFT(d,e){this.a=d
this.b=e},
cFU:function cFU(d){this.a=d},
cFR:function cFR(d){this.a=d},
cFV:function cFV(d){this.a=d},
cFW:function cFW(d,e){this.a=d
this.b=e},
cFX:function cFX(){},
cFY:function cFY(d){this.a=d},
cFM:function cFM(d){this.a=d},
cFN:function cFN(d,e){this.a=d
this.b=e},
cFL:function cFL(d,e){this.a=d
this.b=e},
cFO:function cFO(){},
cFP:function cFP(){},
cFQ:function cFQ(d,e){this.a=d
this.b=e},
aA0:function aA0(){},
aHg:function aHg(){},
he6(d){var w=d.a,v=d.b,u=Math.min(w/450,v/900)
return new A.brI((w-450*u)/2,(v-900*u)/2,u)},
afW:function afW(){},
f87:function f87(d){this.a=d},
aL4:function aL4(d){var _=this
_.a=d
_.b=null
_.c=""
_.d=0},
fih:function fih(d){this.a=d},
amf:function amf(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
amg:function amg(d,e,f,g,h,i,j){var _=this
_.e=_.d=$
_.f=d
_.r=$
_.w=e
_.z=_.y=_.x=0
_.at=_.as=_.Q=!1
_.ay=_.ax=-9
_.qa$=f
_.M4$=g
_.anl$=h
_.bw$=i
_.a9$=j
_.c=_.a=null},
bSZ:function bSZ(d){this.a=d},
bSY:function bSY(){},
bSW:function bSW(d){this.a=d},
bSU:function bSU(){},
bSV:function bSV(d){this.a=d},
bSR:function bSR(d,e){this.a=d
this.b=e},
bSS:function bSS(){},
bST:function bST(d){this.a=d},
bSX:function bSX(d,e){this.a=d
this.b=e},
bSQ:function bSQ(d){this.a=d},
bto:function bto(d,e){this.b=d
this.a=e},
f88:function f88(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
f89:function f89(d,e,f){this.a=d
this.b=e
this.c=f},
f8a:function f8a(d,e,f){this.a=d
this.b=e
this.c=f},
f8b:function f8b(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
f8c:function f8c(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
f8d:function f8d(){},
amd:function amd(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
ame:function ame(d,e,f,g,h,i,j){var _=this
_.d=$
_.e=d
_.x=_.w=_.r=_.f=0
_.y=-1
_.Q=_.z=$
_.as=e
_.ch=_.ay=_.ax=_.at=!1
_.cx=_.CW=-9
_.qa$=f
_.M4$=g
_.anl$=h
_.bw$=i
_.a9$=j
_.c=_.a=null},
bSC:function bSC(){},
bSN:function bSN(d,e){this.a=d
this.b=e},
bSO:function bSO(d){this.a=d},
bSP:function bSP(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bSJ:function bSJ(){},
bSI:function bSI(d,e){this.a=d
this.b=e},
bSK:function bSK(d,e){this.a=d
this.b=e},
bSL:function bSL(){},
bSM:function bSM(d){this.a=d},
bSE:function bSE(d){this.a=d},
bSF:function bSF(d){this.a=d},
bSG:function bSG(d){this.a=d},
bSD:function bSD(d,e){this.a=d
this.b=e},
bSH:function bSH(d){this.a=d},
bjT:function bjT(d,e){this.b=d
this.a=e},
ds1:function ds1(){},
a2c:function a2c(d,e){this.a=d
this.b=e},
am9:function am9(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
ama:function ama(d,e,f,g,h,i){var _=this
_.f=_.e=_.d=$
_.r=d
_.w=-1
_.at=_.as=_.z=_.y=_.x=0
_.ch=_.ay=_.ax=!1
_.cy=_.cx=_.CW=0
_.db=2.6
_.qa$=e
_.M4$=f
_.anl$=g
_.bw$=h
_.a9$=i
_.c=_.a=null},
bSo:function bSo(d){this.a=d},
bSn:function bSn(){},
bSm:function bSm(){},
bSg:function bSg(){},
bSh:function bSh(){},
bSl:function bSl(d,e,f){this.a=d
this.b=e
this.c=f},
bSk:function bSk(d){this.a=d},
bSi:function bSi(d,e){this.a=d
this.b=e},
bSj:function bSj(d){this.a=d},
bjj:function bjj(d,e){this.b=d
this.a=e},
aBO:function aBO(){},
bgS:function bgS(){},
aBQ:function aBQ(){},
bgT:function bgT(){},
aBR:function aBR(){},
bgU:function bgU(){},
uy(d,e,f,g,h){var w,v,u=null,t=A.l(18),s=A.a([],x.V)
s.push(new A.ab(0,B.G,f.j(0.4),B.i4,14))
w=x.p
v=A.a([],w)
if(g!=null)B.d.u(v,A.a([A.W(g,h,u,u,u,20),B.ae],w))
v.push(A.d(d,u,u,u,u,u,u,A.m(u,u,h,u,u,u,u,u,u,u,u,15,u,u,B.u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u))
return A.az(u,A.p(u,A.A(v,B.l,u,B.e,B.N,0,u,u),B.f,u,u,new A.o(f,u,u,t,s,u,B.n),u,u,u,u,B.OC,u,u,u),B.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,e,u,u,u,u,u,u,!1,B.a4)},
hn6(d,e,f,g,h,i,j){return new C.amb(i,h,d,j,e,f,g,null)},
a6E:function a6E(d,e){this.c=d
this.a=e},
bjq:function bjq(d){this.a=d},
tH:function tH(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bSf:function bSf(d){this.a=d},
It:function It(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
Wp:function Wp(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bmd:function bmd(d,e){var _=this
_.d=$
_.e=0
_.f=d
_.r=e
_.c=_.a=null},
e2p:function e2p(d,e){this.a=d
this.b=e},
e2q:function e2q(d){this.a=d},
e2r:function e2r(d,e){this.a=d
this.b=e},
e2n:function e2n(d){this.a=d},
e2o:function e2o(d){this.a=d},
e2m:function e2m(d){this.a=d},
e2k:function e2k(d){this.a=d},
e2l:function e2l(d){this.a=d},
e2j:function e2j(d,e){this.a=d
this.b=e},
e2s:function e2s(d){this.a=d},
e2t:function e2t(d,e){this.a=d
this.b=e},
e2u:function e2u(d,e){this.a=d
this.b=e},
e2v:function e2v(d,e){this.a=d
this.b=e},
e2y:function e2y(d,e){this.a=d
this.b=e},
e2z:function e2z(d,e){this.a=d
this.b=e},
e2A:function e2A(d,e){this.a=d
this.b=e},
e2B:function e2B(d,e){this.a=d
this.b=e},
e2C:function e2C(d,e){this.a=d
this.b=e},
e2D:function e2D(d,e,f){this.a=d
this.b=e
this.c=f},
e2E:function e2E(d,e){this.a=d
this.b=e},
e2F:function e2F(d,e){this.a=d
this.b=e},
e2w:function e2w(d){this.a=d},
e2x:function e2x(d){this.a=d},
a05:function a05(d,e){this.a=d
this.b=e},
amb:function amb(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
amc:function amc(d){var _=this
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
bSA:function bSA(d){this.a=d},
bSB:function bSB(d){this.a=d},
bSz:function bSz(d){this.a=d},
bSq:function bSq(d){this.a=d},
bSr:function bSr(d){this.a=d},
bSp:function bSp(d){this.a=d},
bSw:function bSw(d,e,f){this.a=d
this.b=e
this.c=f},
bSx:function bSx(d){this.a=d},
bSt:function bSt(d,e){this.a=d
this.b=e},
bSu:function bSu(d,e,f){this.a=d
this.b=e
this.c=f},
bSy:function bSy(){},
bSv:function bSv(d,e){this.a=d
this.b=e},
bSs:function bSs(d){this.a=d},
U4:function U4(d,e){this.c=d
this.a=e},
am8:function am8(d){var _=this
_.e=_.d=$
_.f=d
_.c=_.a=null},
bS0:function bS0(d){this.a=d},
bS1:function bS1(d){this.a=d},
bSb:function bSb(){},
bSa:function bSa(d,e,f){this.a=d
this.b=e
this.c=f},
bS5:function bS5(d,e){this.a=d
this.b=e},
bS4:function bS4(d,e){this.a=d
this.b=e},
bS6:function bS6(d){this.a=d},
bS7:function bS7(d,e){this.a=d
this.b=e},
bS8:function bS8(d,e){this.a=d
this.b=e},
bS3:function bS3(d,e){this.a=d
this.b=e},
bS9:function bS9(d,e,f){this.a=d
this.b=e
this.c=f},
bS2:function bS2(d,e){this.a=d
this.b=e},
iju(a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=null,a3="(1[5-9]\\d\\d|20\\d\\d)",a4=C.aj6(a6),a5=a4.length
if(a5===0)return""
w=A.T(x.N,x.P)
for(v=0;v<a4.length;a4.length===a5||(0,A.I)(a4),++v){u=a4[v]
w.n(0,u.a,u)}t=A.bC(new A.V(Date.now(),0,!1))
s=new C.fIp(w,a4)
a5=a4.length
r='Family tree "'+a6.b+'" ('+a5+" people):\n"
for(q=A.U(a4),p=q.k("Y<1>"),q=q.k("cM<1,n>"),o=q.k("M.E"),n=x.s,v=0;v<a4.length;a4.length===a5||(0,A.I)(a4),++v){u=a4[v]
m=A.a([],n)
l=u.c
if(l!==D.z8)m.push(l===D.wI?"male":"female")
l=u.w
k=A.ag(a3,!0,!1,!1,!1).cD(l)
j=k==null?a2:k.b[1]
k=u.y
i=A.ag(a3,!0,!1,!1,!1).cD(k)
h=i==null?a2:i.b[1]
l=B.a.i(l)
i=l.length===0
if(!i){g=B.a.i(u.x)
g=g.length!==0?" in "+g:""
m.push("born "+l+g)}if(i&&B.a.i(u.x).length!==0)m.push("from "+B.a.i(u.x))
l=B.a.i(k)
if(l.length!==0)m.push("died "+l)
l=j!=null
if(l&&h==null)m.push("about "+(t-A.iZ(j,a2,a2))+" years old")
if(l&&h!=null)m.push("lived about "+(A.iZ(h,a2,a2)-A.iZ(j,a2,a2))+" years")
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
m.push("child of "+l+k)}a0=A.C(new A.cM(new A.Y(a4,new C.fIn(u,f),p),new C.fIo(),q),o)
if(a0.length!==0)m.push("children: "+B.d.aN(a0,", "))
l=m.length===0?"":" \u2014 "+B.d.aN(m,"; ")
l=r+("- "+u.b+l)
a1=B.a.i(u.r)
r=a1.length
if(r!==0){l+=". Notes: "+(r>600?B.a.az(a1,0,600)+"\u2026":a1)
r=l}else r=l
r+="\n"}return B.a.i(r.charCodeAt(0)==0?r:r)},
ijv(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=C.aj6(a0),d=e.length
if(d===0)return""
w=x.N
v=A.T(w,x.P)
for(u=0;t=e.length,u<t;e.length===d||(0,A.I)(e),++u){s=e[u]
v.n(0,s.a,s)}r=new C.fIu(v,e)
q=new C.fIs(v)
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
n=A.C(d,A.a4(d).k("ci.E"))
B.d.fg(n)
for(d=n.length,w=x.s,u=0,t="";u<n.length;n.length===d||(0,A.I)(n),++u){m=n[u]
t+="Generation "+(m+1)+"\n"
for(l=B.d.gae(e),k=new A.eJ(l,new C.fIt(p,m));k.C();t=f){j=l.gR(0)
i=A.a([],w)
h=r.$1(j)
if(h!=null)i.push("married to "+v.h(0,h).b)
g=j.d
if(g!=null&&v.am(0,g)&&h!==g)i.push("child of "+v.h(0,g).b)
j=j.b
f=i.length===0?"":" \u2014 "+B.d.aN(i,", ")
f=t+("\u2022 "+j+f+"\n")}t+="\n"}return B.a.i(t.charCodeAt(0)==0?t:t)},
i4P(d,e,f,g){var w,v,u=C.ijw(d,e)
if(u<=0||f.length<=u)return new A.afA(!1,D.DV,f)
if(g.q(0,e.a))return new A.afA(!1,D.DV,f)
w=A.U(f).c
v=A.cX(f,0,A.dD(u,"count",x.S),w).dq(0)
return new A.afA(!0,A.cX(f,u,null,w).dq(0),v)},
i4Q(d3,d4,d5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1=d5?d3.f:C.aj6(d3),d2=d1.length
if(d2===0)return D.hzt
w=x.N
v=A.T(w,x.P)
for(u=0;u<d1.length;d1.length===d2||(0,A.I)(d1),++u){t=d1[u]
v.c3(0,t.a,new C.dhx(t))}s=new C.dhO(v)
d2=x.dy
r=A.T(w,d2)
q=new C.dhG(r)
for(p=new A.ds(v,v.r,v.e);p.C();){o=p.d
n=o.e
if(!s.$1(n)||n===o.a)continue
o=o.a
n.toString
q.$2(o,n)
q.$2(n,o)}m=new C.dhF(r)
l=A.T(w,x.do)
for(p=new A.ds(v,v.r,v.e);p.C();){o=p.d
k=o.d
j=!0
if(s.$1(k)){i=o.a
if(k!==i){k.toString
j=m.$2(k,i)}}if(j)continue
J.c5(l.c3(0,k,new C.dhy()),o)}h=new C.dhE(s)
g=new C.dhD(l,r)
p=v.$ti.k("b8<2>")
o=p.k("Y<M.E>")
f=A.C(new A.Y(new A.b8(v,p),new C.dhz(h),o),o.k("M.E"))
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
a9=new C.dhM(new C.dhI(a1,a2,v,r,a3,l,d3,d4,a4,a5,a6),a8,A.T(p,d2),a7)
p=e.a
a9.$2(p,0)
for(o=new A.ds(v,v.r,v.e),j=a2.gamk(a2);o.C();){b0=o.d
i=b0.a
if(a1.q(0,i))continue
b1=A.et([i],w)
for(;h.$1(b0);b0=k){k=v.h(0,b0.d)
i=k.a
if(a1.q(0,i)||!b1.I(0,i))break}if(h.$1(b0)&&a2.am(0,b0.d)){i=a2.h(0,b0.d)
i.toString
b2=i+1}else{i=r.h(0,b0.a)
b3=A.nA(J.dH(i==null?B.Z:i,j))
if(b3!=null){i=a2.h(0,b3)
i.toString
b2=i}else b2=0}a9.$2(b0.a,b2)}b4=A.T(w,x.dO)
b5=A.a([],x.M)
b6=A.T(w,d2)
b7=new C.dhw(a2,new C.dhN(),b6,a3,b4,v,a4,a5,a6,b5)
for(d2=a8.length,u=0;u<a8.length;a8.length===d2||(0,A.I)(a8),++u){b8=a8[u]
w=a7.h(0,b8)
w.toString
b7.$2(b8,w)}for(d2=new A.ds(b4,b4.r,b4.e),b9=1/0,c0=0,c1=16;d2.C();){w=d2.d.b
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
for(;u<d2.length;d2.length===w||(0,A.I)(d2),++u){b8=d2[u]
c3=b4.h(0,b8)
o=c3.a
j=c3.b
b4.n(0,b8,new C.GB(o,new A.r(j.a+c2,j.b)))}for(d2=b5.length,c4=0;c4<d2;++c4){c5=b5[c4]
w=c5.b
b5[c4]=new C.KY(c5.a,new A.r(w.a+c2,w.b),c5.c,c5.d)}d2=b6.$ti.k("cx<1>")
d2=A.C(new A.cx(b6,d2),d2.k("M.E"))
w=d2.length
u=0
for(;u<d2.length;d2.length===w||(0,A.I)(d2),++u){b8=d2[u]
o=b6.h(0,b8)
o.toString
b6.n(0,b8,o+c2)}c6=A.a([],x.dE)
a3.bO(0,new C.dhA(c6,b4))
for(d2=new A.cb(a4,a4.$ti.k("cb<1,2>")).gae(0),w=x.g;d2.C();){c7=d2.d
c8=c7.a
c9=b6.h(0,c8)
if(c9==null)continue
o=A.a([],w)
for(j=J.aT(c7.b);j.C();){i=j.gR(j)
if(b6.am(0,i)){d0=b6.h(0,i)
d0.toString
o.push(new A.r(d0,b4.h(0,i).b.b))}}for(j=B.d.gae(b5),i=new A.eJ(j,new C.dhB(c8));i.C();)o.push(j.gR(0).b)
if(o.length===0)continue
B.d.aZ(o,new C.dhC())
c6.push(new C.aL_(new A.r(c9,b4.h(0,c8).b.b+112),B.J,!1,o))}return new C.bgY(b4,c6,b5,c0+c2+24,c1+24,p,b6.h(0,p))},
hCi(d){var w=A.ag("(1[5-9]\\d\\d|20\\d\\d)",!0,!1,!1,!1).cD(d)
return w==null?null:w.b[1]},
hwk(d,e,f,g,h,i,j,k,l,m,n){return new C.a0i(k,f,j,e,l,n,m,d,g,h,i,null)},
aDP(d,e,f,g,h,i,j){return new C.bkJ(i,d,e,f,j,h,g,null)},
arg:function arg(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aFn:function aFn(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
e44:function e44(d){this.a=d},
e43:function e43(d){this.a=d},
e46:function e46(d,e){this.a=d
this.b=e},
e47:function e47(d,e){this.a=d
this.b=e},
e48:function e48(d){this.a=d},
e42:function e42(d,e){this.a=d
this.b=e},
e45:function e45(d){this.a=d},
e4a:function e4a(d){this.a=d},
e49:function e49(d,e){this.a=d
this.b=e},
ara:function ara(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aFk:function aFk(d,e,f){var _=this
_.d=$
_.e=d
_.f=!1
_.r=e
_.w=f
_.x=!1
_.c=_.a=_.y=null},
e3v:function e3v(d){this.a=d},
e3t:function e3t(d){this.a=d},
e3u:function e3u(d){this.a=d},
e3w:function e3w(d,e){this.a=d
this.b=e},
e3q:function e3q(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e2S:function e2S(d){this.a=d},
e2T:function e2T(d,e){this.a=d
this.b=e},
e39:function e39(d){this.a=d},
e37:function e37(d){this.a=d},
e38:function e38(d,e){this.a=d
this.b=e},
e3a:function e3a(d){this.a=d},
e3b:function e3b(d,e){this.a=d
this.b=e},
e3p:function e3p(d,e){this.a=d
this.b=e},
e36:function e36(d){this.a=d},
e35:function e35(d){this.a=d},
e34:function e34(d,e){this.a=d
this.b=e},
e3m:function e3m(){},
e3n:function e3n(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
e3l:function e3l(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
e3f:function e3f(d){this.a=d},
e3g:function e3g(d,e,f){this.a=d
this.b=e
this.c=f},
e3e:function e3e(d,e){this.a=d
this.b=e},
e3h:function e3h(d,e){this.a=d
this.b=e},
e3c:function e3c(d,e){this.a=d
this.b=e},
e3d:function e3d(){},
e3i:function e3i(d,e){this.a=d
this.b=e},
e3j:function e3j(d){this.a=d},
e3k:function e3k(d,e){this.a=d
this.b=e},
e3o:function e3o(d,e){this.a=d
this.b=e},
e2G:function e2G(d,e){this.a=d
this.b=e},
e2H:function e2H(d,e){this.a=d
this.b=e},
e3y:function e3y(d,e,f){this.a=d
this.b=e
this.c=f},
e3s:function e3s(d,e,f){this.a=d
this.b=e
this.c=f},
e3r:function e3r(d){this.a=d},
e2I:function e2I(d){this.a=d},
e2J:function e2J(d){this.a=d},
e2K:function e2K(){},
e2L:function e2L(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e2P:function e2P(d,e){this.a=d
this.b=e},
e2O:function e2O(d,e){this.a=d
this.b=e},
e2N:function e2N(d){this.a=d},
e2Q:function e2Q(d,e){this.a=d
this.b=e},
e2M:function e2M(d){this.a=d},
e3x:function e3x(d){this.a=d},
e31:function e31(){},
e32:function e32(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e30:function e30(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e2X:function e2X(d,e,f){this.a=d
this.b=e
this.c=f},
e2W:function e2W(d,e,f){this.a=d
this.b=e
this.c=f},
e2U:function e2U(d,e){this.a=d
this.b=e},
e2Y:function e2Y(d){this.a=d},
e2Z:function e2Z(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e2V:function e2V(d,e){this.a=d
this.b=e},
e3_:function e3_(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e33:function e33(d,e){this.a=d
this.b=e},
e3F:function e3F(){},
e3G:function e3G(d,e){this.a=d
this.b=e},
e3H:function e3H(d){this.a=d},
e3I:function e3I(d,e){this.a=d
this.b=e},
e3B:function e3B(d){this.a=d},
e3z:function e3z(d,e){this.a=d
this.b=e},
e3C:function e3C(d,e){this.a=d
this.b=e},
e3D:function e3D(d,e){this.a=d
this.b=e},
e3E:function e3E(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
e3J:function e3J(d){this.a=d},
e3A:function e3A(d){this.a=d},
e2R:function e2R(d){this.a=d},
bgW:function bgW(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
dhu:function dhu(d){this.a=d},
dht:function dht(d,e){this.a=d
this.b=e},
dhv:function dhv(d){this.a=d},
dhs:function dhs(d,e){this.a=d
this.b=e},
fIp:function fIp(d,e){this.a=d
this.b=e},
fIq:function fIq(d){this.a=d},
fIr:function fIr(){},
fIn:function fIn(d,e){this.a=d
this.b=e},
fIo:function fIo(){},
fIu:function fIu(d,e){this.a=d
this.b=e},
fIv:function fIv(d){this.a=d},
fIw:function fIw(){},
fIs:function fIs(d){this.a=d},
fIt:function fIt(d,e){this.a=d
this.b=e},
KY:function KY(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
GB:function GB(d,e){this.a=d
this.b=e},
bgY:function bgY(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
dhx:function dhx(d){this.a=d},
dhO:function dhO(d){this.a=d},
dhG:function dhG(d){this.a=d},
dhH:function dhH(){},
dhF:function dhF(d){this.a=d},
dhy:function dhy(){},
dhE:function dhE(d){this.a=d},
dhD:function dhD(d,e){this.a=d
this.b=e},
dhz:function dhz(d){this.a=d},
dhI:function dhI(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
dhJ:function dhJ(d){this.a=d},
dhK:function dhK(d){this.a=d},
dhL:function dhL(){},
dhM:function dhM(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dhN:function dhN(){},
dhw:function dhw(d,e,f,g,h,i,j,k,l,m){var _=this
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
dhA:function dhA(d,e){this.a=d
this.b=e},
dhB:function dhB(d){this.a=d},
dhC:function dhC(){},
aL_:function aL_(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bgZ:function bgZ(d,e){this.b=d
this.a=e},
dhP:function dhP(){},
dhQ:function dhQ(d){this.a=d},
dhR:function dhR(d){this.a=d},
dhS:function dhS(){},
bkK:function bkK(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bg0:function bg0(d,e){this.b=d
this.a=e},
byL:function byL(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
fnS:function fnS(d){this.a=d},
bo5:function bo5(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
eYU:function eYU(d){this.a=d},
eYT:function eYT(d,e){this.a=d
this.b=e},
a0i:function a0i(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
aDN:function aDN(){var _=this
_.y=_.x=_.w=_.r=_.f=_.e=_.d=$
_.as=_.Q=_.z=null
_.at=1
_.ax=0
_.ay=!1
_.c=_.a=null},
dxN:function dxN(d,e){this.a=d
this.b=e},
dxM:function dxM(d){this.a=d},
dxK:function dxK(d){this.a=d},
dxL:function dxL(d){this.a=d},
dxW:function dxW(d){this.a=d},
dxX:function dxX(d){this.a=d},
dxV:function dxV(d,e){this.a=d
this.b=e},
dxY:function dxY(){},
dy0:function dy0(d){this.a=d},
dxU:function dxU(d,e){this.a=d
this.b=e},
dy_:function dy_(){},
dy1:function dy1(d){this.a=d},
dxT:function dxT(d,e){this.a=d
this.b=e},
dy2:function dy2(d){this.a=d},
dxS:function dxS(d){this.a=d},
dy3:function dy3(d){this.a=d},
dxR:function dxR(d){this.a=d},
dy4:function dy4(d){this.a=d},
dxQ:function dxQ(d){this.a=d},
dy5:function dy5(d){this.a=d},
dxP:function dxP(d){this.a=d},
dy6:function dy6(d){this.a=d},
dxO:function dxO(d,e){this.a=d
this.b=e},
dxZ:function dxZ(d){this.a=d},
aet:function aet(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bkJ:function bkJ(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
aes:function aes(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.f=f
_.r=g
_.w=h
_.a=i
_.$ti=j},
bkI:function bkI(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
dy7:function dy7(d){this.a=d},
dy8:function dy8(d,e){this.a=d
this.b=e},
aDO:function aDO(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aK1:function aK1(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aeu:function aeu(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
dyh:function dyh(d){this.a=d},
Gx:function Gx(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
hr9(d){var w=d.U,v=x.N
return w.jq(w,new C.cfr(),v,v)},
hXd(d){var w=d.bF
if(w>=0)return w
return 5},
hrb(d,e){var w,v=B.a.i(e.toLowerCase())
if(v.length===0)return null
w=C.hr9(d).h(0,v)
if(w==null||w.length===0)return null
return A.bi(w)},
hra(d,e){var w=C.hrb(d,e)
if(w!=null&&w.ca(new A.V(Date.now(),0,!1)))return!0
return!1},
hXe(d,e){var w,v,u,t,s=B.a.i(e.toLowerCase())
if(s.length===0)return
w=x.N
v=A.a1(C.hr9(d),w,w)
u=C.hrb(d,e)
t=u!=null&&u.ca(new A.V(Date.now(),0,!1))?u:new A.V(Date.now(),0,!1)
v.n(0,s,t.bS(A.dw(30,0,0,0,0,0).a).aa().af())
d.U=v},
b1t(d,e,f,g,h,i,j){var w=0,v=A.j(x.y),u,t
var $async$b1t=A.e(function(k,l){if(k===1)return A.f(l,v)
for(;;)switch(w){case 0:if(j.w){u=!0
w=1
break}t=j.a
w=3
return A.b(A.lC(t,B.JJ),$async$b1t)
case 3:if(l){u=!0
w=1
break}u=A.lh(!1,f,t,!1,g.length!==0?g:"Subscribe for Family Tree access \u2014 create trees and upload photos (30 days).",B.JJ,i)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$b1t,v)},
cfr:function cfr(){},
hXb(){var w,v=$.ov(),u=J.e4(8,x.N)
for(w=0;w<8;++w)u[w]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[v.aw(32)]
return"FT"+B.d.hf(u)},
Jr(){var w=0,v=A.j(x.a),u,t=2,s=[],r,q,p,o,n,m
var $async$Jr=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.c8(),$async$Jr)
case 3:if(!e){u=A.T(x.N,x.z)
w=1
break}t=5
w=8
return A.b(A.f5("ngmy_family_tree_backup_codes_v1",null,!1,B.bN),$async$Jr)
case 8:r=e
if(r==null){u=A.T(x.N,x.z)
w=1
break}q=J.t(r,"codes")
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
return A.i($async$Jr,v)},
a8n(d){return C.hXc(d)},
hXc(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$a8n=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.c8(),$async$a8n)
case 3:if(!f){w=1
break}t=5
w=8
return A.b(A.hM("ngmy_family_tree_backup_codes_v1",A.J(["codes",d,"savedAt",new A.V(Date.now(),0,!1).aa().af()],x.N,x.z),!1,!1,B.cO,null),$async$a8n)
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
return A.i($async$a8n,v)},
cfq(d){var w=0,v=A.j(x.T),u,t,s,r,q,p,o,n,m
var $async$cfq=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:n=B.a.i(d.toLowerCase())
if(n.length===0){u=null
w=1
break}m=J
w=3
return A.b(C.Jr(),$async$cfq)
case 3:t=m.i5(f),t=t.gae(t),s=x.f
case 4:if(!t.C()){w=5
break}r=t.gR(t)
q=r.b
if(s.b(q)){p=J.a7(q)
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
return A.i($async$cfq,v)},
Op(d){var w=0,v=A.j(x.T),u,t,s,r,q,p,o,n
var $async$Op=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:if(B.a.i(d).length===0){u=null
w=1
break}w=3
return A.b(C.cfq(d),$async$Op)
case 3:t=f
w=t!=null?4:5
break
case 4:w=6
return A.b(C.Jr(),$async$Op)
case 6:s=f
r=J.a7(s)
q=r.h(s,t)
w=x.f.b(q)?7:8
break
case 7:p=x.N
o=x.z
o=A.dL(A.a1(q,p,o),p,o)
o.n(0,"active",!0)
o.n(0,"updatedAt",new A.V(Date.now(),0,!1).aa().af())
r.n(s,t,o)
w=9
return A.b(C.a8n(s),$async$Op)
case 9:case 8:u=t
w=1
break
case 5:n=C.hXb()
w=10
return A.b(C.Jr(),$async$Op)
case 10:s=f
J.aK(s,n,A.J(["email",B.a.i(d.toLowerCase()),"active",!0,"createdAt",new A.V(Date.now(),0,!1).aa().af(),"updatedAt",new A.V(Date.now(),0,!1).aa().af()],x.N,x.K))
w=11
return A.b(C.a8n(s),$async$Op)
case 11:u=n
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$Op,v)},
b1s(d){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n,m,l,k,j
var $async$b1s=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:j=B.a.i(d.toLowerCase())
if(j.length===0){w=1
break}w=3
return A.b(C.Jr(),$async$b1s)
case 3:t=f
for(s=J.dp(t),r=s.gdP(t),r=r.dq(r),q=r.length,p=x.f,o=!1,n=0;n<r.length;r.length===q||(0,A.I)(r),++n){m=r[n]
l=m.b
if(p.b(l)){k=J.t(l,"email")
k=B.a.i(J.k(k==null?"":k).toLowerCase())===j}else k=!1
if(k){s.W(t,m.a)
o=!0}}w=o?4:5
break
case 4:w=6
return A.b(C.a8n(t),$async$b1s)
case 6:case 5:case 1:return A.h(u,v)}})
return A.i($async$b1s,v)},
a8o(d,e,f){var w=0,v=A.j(x.H),u
var $async$a8o=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:if(f||B.a.i(d).length===0){w=1
break}w=6
return A.b(C.arf(d,e),$async$a8o)
case 6:w=h?3:5
break
case 3:w=7
return A.b(C.Op(d),$async$a8o)
case 7:w=4
break
case 5:w=8
return A.b(C.b1s(d),$async$a8o)
case 8:case 4:case 1:return A.h(u,v)}})
return A.i($async$a8o,v)},
ar9(d,e,f,g,h,i){var w=0,v=A.j(x.y),u,t,s,r,q,p,o
var $async$ar9=A.e(function(j,k){if(j===1)return A.f(k,v)
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
return A.b(C.arf(f,e),$async$ar9)
case 5:k=!k
case 4:if(k){u=!1
w=1
break}w=6
return A.b(A.c8(),$async$ar9)
case 6:if(!k){u=!1
w=1
break}o=J
w=7
return A.b(C.Jr(),$async$ar9)
case 7:q=o.t(k,t)
if(!x.f.b(q)){u=!1
w=1
break}p=J.a7(q)
if(!J.z(p.h(q,"active"),!0)){u=!1
w=1
break}p=p.h(q,"email")
u=B.a.i(J.k(p==null?"":p).toLowerCase())===s
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$ar9,v)},
b1r(d,e){var w=0,v=A.j(x.y),u,t,s,r,q
var $async$b1r=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=B.a.i(d).toUpperCase()
if(r.length===0||r==="ADMIN-LOCAL"){u=!0
w=1
break}w=3
return A.b(A.c8(),$async$b1r)
case 3:if(!g){u=!1
w=1
break}q=J
w=4
return A.b(C.Jr(),$async$b1r)
case 4:t=q.t(g,r)
if(!x.f.b(t)){u=!1
w=1
break}s=J.a7(t)
if(!J.z(s.h(t,"active"),!0)){u=!1
w=1
break}s=s.h(t,"email")
u=B.a.i(J.k(s==null?"":s).toLowerCase())===B.a.i(e.toLowerCase())
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$b1r,v)},
hXf(){var w,v=$.ov(),u=J.e4(10,x.N)
for(w=0;w<10;++w)u[w]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[v.aw(32)]
return"FT"+B.d.hf(u)},
arc(d,e){var w=0,v=A.j(x.he),u,t,s,r,q,p
var $async$arc=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(A.c8(),$async$arc)
case 3:if(!g){u=null
w=1
break}t=C.hXf()
w=4
return A.b(A.Wq(),$async$arc)
case 4:s=g
r=B.dU.aO(B.V.av(d.f3(),null))
r=B.cV.gcu().aO(r)
q=e?999:2
J.aK(s,t,A.J(["ownerEmail",d.b,"code",d.a,"payload",r,"usesRemaining",q,"createdAt",new A.V(Date.now(),0,!1).aa().af()],x.N,x.K))
w=5
return A.b(A.a8p(s),$async$arc)
case 5:p=e?999:2
u=new A.a1s("NGMYFTSYNC2|"+t,t,p)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$arc,v)},
arb(d){var w=0,v=A.j(x.m),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$arb=A.e(function(e,a0){if(e===1)return A.f(a0,v)
for(;;)switch(w){case 0:g=B.a.i(d)
if(g.length===0){u=null
w=1
break}w=3
return A.b(A.Wq(),$async$arb)
case 3:p=a0
o=J.a7(p)
n=o.h(p,g)
if(!x.f.b(n)){u=null
w=1
break}m=J.a7(n)
l=A.aJ(m.h(n,"usesRemaining"))
k=l==null?null:B.j.M(l)
if(k==null)k=0
if(k<=0){u=null
w=1
break}l=m.h(n,"ownerEmail")
j=J.k(l==null?"":l)
l=m.h(n,"code")
w=4
return A.b(C.b1r(J.k(l==null?"":l),j),$async$arb)
case 4:if(!a0)$.am.$1("[family tree qr stash] owner code inactive; allowing stash restore")
m=m.h(n,"payload")
t=J.k(m==null?"":m)
if(J.ad(t)===0){u=null
w=1
break}s=null
try{r=B.ca.cI(0,B.cK.aO(t))
s=C.hrc(r)}catch(f){q=A.ac(f)
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
l.n(0,"lastUsedAt",new A.V(Date.now(),0,!1).aa().af())
o.n(p,g,l)}w=5
return A.b(A.a8p(p),$async$arb)
case 5:u=s
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$arb,v)},
hrc(d){var w,v,u,t,s=null
try{w=B.V.aP(0,d,s)
if(!x.f.b(w))return s
u=J.t(w,"marker")
if(J.k(u==null?"":u)!=="ngmyFamilyTreeSync")return s
u=C.hXh(A.a1(w,x.N,x.z))
return u}catch(t){v=A.ac(t)
$.am.$1("[family tree sync] parse: "+A.w(v))
return s}},
ha3(d){var w=0,v=A.j(x.m),u,t,s
var $async$ha3=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=B.a.i(d)
if(B.a.a_(s,"NGMYFTSYNC2|")){t=s.split("|")
if(t.length>=2){u=C.arb(t[1])
w=1
break}u=null
w=1
break}u=C.hrc(s)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$ha3,v)},
hXh(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=d.h(0,"code"),h=J.k(i==null?"":i)
i=d.h(0,"ownerEmail")
w=J.k(i==null?"":i)
if(h.length===0||w.length===0)return null
v=d.h(0,"trees")
i=x.j
if(i.b(v)){u=J.de(v,x.f)
u=A.cF(u,new C.cft(),u.$ti.k("M.E"),x.k)
t=A.a4(u).k("Y<M.E>")
s=A.C(new A.Y(u,new C.cfu(),t),t.k("M.E"))}else s=A.a([],x._)
u=d.h(0,"exportedAt")
r=A.bi(J.k(u==null?"":u))
if(r==null)r=new A.V(Date.now(),0,!1)
q=A.T(x.N,x.d)
p=d.h(0,"familyBooks")
u=x.f
if(u.b(p))for(t=J.i5(p),t=t.gae(t),o=x.B;t.C();){n=t.gR(t)
m=J.k(n.a)
l=n.b
if(!i.b(l))continue
n=J.de(l,u)
n=A.cF(n,new C.cfv(),n.$ti.k("M.E"),o)
k=A.a4(n).k("Y<M.E>")
j=A.C(new A.Y(n,new C.cfw(),k),k.k("M.E"))
if(j.length!==0)q.n(0,m,j)}return new C.ard(h,w,s,r,q)},
arf(d,e){var w=0,v=A.j(x.y),u,t
var $async$arf=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:if(B.a.i(d).length===0){u=!1
w=1
break}if(A.Og(e,d)){u=!0
w=1
break}t=J
w=3
return A.b(C.Bl(d),$async$arf)
case 3:u=t.cJ(g)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$arf,v)},
cfC(d){var w=0,v=A.j(x.bC),u,t,s
var $async$cfC=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=J
w=3
return A.b(C.Bl(d),$async$cfC)
case 3:t=s.b7(f,new C.cfD(),x.cs)
t=A.C(t,t.$ti.k("ak.E"))
B.d.aZ(t,new C.cfE())
u=t
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$cfC,v)},
Wr(d,e,f,g){var w=0,v=A.j(x.m),u,t,s,r,q,p,o,n,m
var $async$Wr=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:if(B.a.i(e).length===0){u=null
w=1
break}t=!f
m=t
if(m){w=3
break}else i=m
w=4
break
case 3:w=5
return A.b(C.arf(e,d),$async$Wr)
case 5:i=!i
case 4:if(i){u=null
w=1
break}w=t?6:8
break
case 6:w=9
return A.b(C.Op(e),$async$Wr)
case 9:s=i
if(s==null){u=null
w=1
break}w=7
break
case 8:s="ADMIN-LOCAL"
case 7:w=10
return A.b(C.Bl(e),$async$Wr)
case 10:r=i
if(g!=null&&B.a.i(g).length!==0){t=J.dH(r,new C.cfA(g))
r=A.C(t,t.$ti.k("M.E"))}t=J.a7(r)
if(t.gau(r)){u=null
w=1
break}t=t.dN(r,new C.cfB(e),x.k)
r=A.C(t,t.$ti.k("ak.E"))
q=A.T(x.N,x.d)
t=r.length,p=0
case 11:if(!(p<r.length)){w=13
break}o=r[p].a
w=14
return A.b(C.LM(e,o),$async$Wr)
case 14:n=i
if(J.cJ(n))q.n(0,o,n)
case 12:r.length===t||(0,A.I)(r),++p
w=11
break
case 13:u=new C.ard(s,B.a.i(e.toLowerCase()),r,new A.V(Date.now(),0,!1),q)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$Wr,v)},
b1w(d,e,f,g){var w=0,v=A.j(x.T),u,t,s,r,q
var $async$b1w=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:w=3
return A.b(C.Wr(d,e,f,g),$async$b1w)
case 3:q=i
if(q==null){u=null
w=1
break}t=g!=null&&q.c.length!==0?B.d.gH(q.c).b:"all-family-trees"
s=A.ag("[^\\w\\-.]+",!0,!1,!1,!1)
s=A.aL(t,s,"_")
r=q.a
u=A.Hf(A.KU(q.f3(),null,"  "),"ngmy-family-trees-"+s.toLowerCase()+"-"+r+".ngmy.json",!1)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$b1w,v)},
b1v(d,e,f,g){var w=0,v=A.j(x.eo),u,t,s,r
var $async$b1v=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:w=3
return A.b(C.Wr(d,e,f,g),$async$b1v)
case 3:r=i
if(r==null){u=null
w=1
break}w=4
return A.b(C.arc(r,f),$async$b1v)
case 4:t=i
if(t==null){u=null
w=1
break}s=t.a
u=new A.aI1(r.a,s,t.c)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$b1v,v)},
Ws(d,e,f,a0){var w=0,v=A.j(x.gG),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$Ws=A.e(function(a1,a2){if(a1===1)return A.f(a2,v)
for(;;)switch(w){case 0:w=3
return A.b(C.ha3(a0),$async$Ws)
case 3:g=a2
if(g==null){u=null
w=1
break}t=B.a.a_(B.a.i(a0),"NGMYFTSYNC2|")
s=g.b
r=B.a.i(s.toLowerCase())!==B.a.i(e.toLowerCase())
w=!t?4:5
break
case 4:w=6
return A.b(C.ar9(g.a,d,e,f,s,r),$async$Ws)
case 6:if(!a2){if(r)throw A.X(A.bc("This backup expired or the sender's tree is no longer available."))
throw A.X(A.bc("Backup code is locked. Create a family tree or renew your advisor pass to restore."))}case 5:q=B.a.i(s.toLowerCase())!==B.a.i(e.toLowerCase())
p=g.c,o=p.length,n=g.e,m=0,l=0,k=0
case 7:if(!(k<p.length)){w=9
break}j=p[k]
i=j.a
if(i.length===0){w=8
break}w=q?10:11
break
case 10:w=12
return A.b(C.bEa(e,j),$async$Ws)
case 12:case 11:w=13
return A.b(C.aiQ(e,j,s),$async$Ws)
case 13:h=n.h(0,i)
w=h!=null&&J.cJ(h)?14:15
break
case 14:w=16
return A.b(C.Bw(e,i,h),$async$Ws)
case 16:case 15:++m
l+=j.f.length
case 8:p.length===o||(0,A.I)(p),++k
w=7
break
case 9:if(m===0){u=null
w=1
break}u=new A.brO(l,m,q)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$Ws,v)},
ard:function ard(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
cfy:function cfy(){},
cfz:function cfz(){},
cfx:function cfx(){},
cft:function cft(){},
cfu:function cfu(){},
cfv:function cfv(){},
cfw:function cfw(){},
cfD:function cfD(){},
cfE:function cfE(){},
cfA:function cfA(d){this.a=d},
cfB:function cfB(d){this.a=d},
hj7(d,e,f,g,h,i,j){var w=j.a
if(w.length===0)return A.f4(null,x.H)
return A.hC(d,new C.are(w,e,g,i,f,h,null),!0,null,x.H)},
dhr(d,e,f,g,h,i,j,k){return new C.bgV(i,e,k,j,g,f,h,d,null)},
are:function are(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aFm:function aFm(d){var _=this
_.d=d
_.e=!1
_.f=null
_.r=!1
_.c=_.a=null},
e3S:function e3S(d){this.a=d},
e3T:function e3T(d,e,f){this.a=d
this.b=e
this.c=f},
e3X:function e3X(d,e){this.a=d
this.b=e},
e3Y:function e3Y(d){this.a=d},
e3P:function e3P(d){this.a=d},
e3Q:function e3Q(d,e){this.a=d
this.b=e},
e3R:function e3R(d,e){this.a=d
this.b=e},
e3W:function e3W(d){this.a=d},
e3V:function e3V(d,e){this.a=d
this.b=e},
e3U:function e3U(){},
e4_:function e4_(d){this.a=d},
e40:function e40(d,e){this.a=d
this.b=e},
e3Z:function e3Z(d,e){this.a=d
this.b=e},
dhT:function dhT(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
bgX:function bgX(d,e,f){this.d=d
this.e=e
this.a=f},
adJ:function adJ(d,e,f){this.c=d
this.d=e
this.a=f},
bgV:function bgV(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.y=k
_.a=l},
bh_:function bh_(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
a0C:function a0C(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aFl:function aFl(){var _=this
_.d=!1
_.c=_.a=_.e=null},
e3K:function e3K(d,e){this.a=d
this.b=e},
e3L:function e3L(d){this.a=d},
e3M:function e3M(d){this.a=d},
e3N:function e3N(d){this.a=d},
e3O:function e3O(d){this.a=d},
a0D:function a0D(d){this.a=d},
bme:function bme(d){var _=this
_.d=d
_.e=!1
_.c=_.a=null},
e41:function e41(d,e){this.a=d
this.b=e},
b0_(d,e){return new C.b_Z(d,e,null)},
b_Z:function b_Z(d,e,f){this.c=d
this.d=e
this.a=f},
ilW(d){if(!(d!=null&&B.a.a_(d,"ngmy:thumb:")))return null
return B.a.b2(d,11)},
itk(d){return A.bS(B.L,null,new C.fZp(new C.uk(A.P(d).ax.a===B.I)),d,!0,!0,!0,null,!1,!1,x.N)},
hta(d,e){return new C.aug(e,d,null)},
aSs(d,e,f,g,h,i,j){var w=C.ilW(i)
if(w!=null)return A.bu(e,new A.a3(j,f,new C.a7q(w,!0,null),null),B.aq)
return N.aRP(e,B.c1,f,g,h,i,j)},
lY:function lY(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a7q:function a7q(d,e,f){this.c=d
this.d=e
this.a=f},
blT:function blT(d,e){var _=this
_.e=_.d=$
_.cQ$=d
_.b7$=e
_.c=_.a=null},
dPU:function dPU(d){this.a=d},
dPV:function dPV(){},
dPW:function dPW(d,e){this.a=d
this.b=e},
blS:function blS(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
fZp:function fZp(d){this.a=d},
fZo:function fZo(d,e){this.a=d
this.b=e},
fZn:function fZn(d,e){this.a=d
this.b=e},
fZm:function fZm(d,e){this.a=d
this.b=e},
aug:function aug(d,e,f){this.c=d
this.d=e
this.a=f},
cp3:function cp3(d,e){this.a=d
this.b=e},
aNr:function aNr(){},
it5(d){var w=null
return A.cg(w,w,!0,w,new C.fYN(),d,w,!0,!0,x.e2)},
iuj(d,e,f,g,h){var w=null
return A.cg(w,w,!0,w,new C.h5y(h,g,f,e),d,w,!0,!0,x.N)},
it7(d,e){var w=null
return A.cg(w,w,!0,w,new C.fYR(e),d,w,!0,!0,x.dY)},
it6(d){var w=null
return A.cg(w,w,!0,w,new C.fYQ(),d,w,!0,!0,x.c5)},
aVo:function aVo(d,e){this.a=d
this.b=e},
aVn:function aVn(d){this.a=d},
aTq:function aTq(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fYN:function fYN(){},
h5y:function h5y(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fYR:function fYR(d){this.a=d},
fYQ:function fYQ(){},
a_g:function a_g(d,e){this.c=d
this.a=e},
aAw:function aAw(){var _=this
_.d=$
_.c=_.a=_.e=null},
d93:function d93(d){this.a=d},
d94:function d94(d){this.a=d},
d92:function d92(d,e){this.a=d
this.b=e},
d95:function d95(d){this.a=d},
d96:function d96(d){this.a=d},
a_f:function a_f(d){this.a=d},
aAv:function aAv(){this.d=$
this.c=this.a=null},
d9_:function d9_(d){this.a=d},
d90:function d90(d){this.a=d},
d91:function d91(d){this.a=d},
ZN:function ZN(d){this.a=d},
aze:function aze(){var _=this
_.r=_.f=_.e=_.d=$
_.w="each"
_.c=_.a=null},
cHq:function cHq(){},
cHw:function cHw(d){this.a=d},
cHx:function cHx(d){this.a=d},
cHy:function cHy(d){this.a=d},
cHv:function cHv(){},
cHz:function cHz(d){this.a=d},
cHA:function cHA(d){this.a=d},
cHu:function cHu(){},
cHB:function cHB(d,e){this.a=d
this.b=e},
cHt:function cHt(d,e){this.a=d
this.b=e},
cHr:function cHr(d,e){this.a=d
this.b=e},
cHC:function cHC(d){this.a=d},
cHs:function cHs(){},
cHD:function cHD(d){this.a=d},
a2o:function a2o(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
byD:function byD(){this.d=$
this.c=this.a=null},
fnn:function fnn(d,e){this.a=d
this.b=e},
fno:function fno(d){this.a=d},
fnp:function fnp(d,e){this.a=d
this.b=e},
acL:function acL(d,e){this.a=d
this.b=e},
Gl:function Gl(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
byB:function byB(d,e){var _=this
_.d=$
_.bw$=d
_.a9$=e
_.c=_.a=null},
fnl:function fnl(d,e){this.a=d
this.b=e},
az7:function az7(d,e){this.c=d
this.a=e},
byC:function byC(d,e){var _=this
_.d=$
_.bw$=d
_.a9$=e
_.c=_.a=null},
fnm:function fnm(d){this.a=d},
byA:function byA(d,e,f,g,h,i){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.a=i},
aPz:function aPz(){},
aPA:function aPA(){},
bGb(d,e,f,g){var w,v=null,u=Math.abs(d),t=B.j.bh(u),s=B.o.D(B.j.V((u-t)*100),0,99),r=d<0?"-":"",q=A.ot(B.o.v(t),A.ag("(\\d{1,3})(?=(\\d{3})+(?!\\d))",!0,!1,!1,!1),new C.fX6(),v),p=f?34:16,o=f?18:12,n=A.a([],x.R)
if(r.length!==0)n.push(A.cQ(v,v,v,v,v,v,v,v,v,A.m(v,v,e,v,v,v,v,v,v,v,v,p*0.7,v,v,g,v,v,!0,v,v,v,v,v,v,v,v),r))
n.push(A.cQ(v,v,v,v,v,v,v,v,v,A.m(v,v,e.j(0.82),v,v,v,v,v,v,v,v,o,v,v,B.O,v,v,!0,v,v,v,v,v,v,v,v),"$"))
n.push(A.cQ(v,v,v,v,v,v,v,v,v,A.m(v,v,e,v,v,v,v,v,v,v,v,p,v,v,g,v,1.05,!0,v,-0.6,v,v,v,v,v,v),q))
w=B.a.b_(B.o.v(s),2,"0")
n.push(A.cQ(v,v,v,v,v,v,v,v,v,A.m(v,v,e.j(0.88),v,v,v,v,v,v,v,v,o,v,v,B.H,v,v,!0,v,v,v,v,v,v,v,v),"."+w))
return A.Za(A.cQ(n,v,v,v,v,v,v,v,v,v,v),v,v,v,v)},
aS4(){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l
var $async$aS4=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:w=3
return A.b(new A.i0().l9(85,1280,B.eQ),$async$aS4)
case 3:m=e
if(m==null){u=null
w=1
break}t=5
w=8
return A.b(m.fq(),$async$aS4)
case 8:r=e
if(J.ad(r)===0){u=null
w=1
break}q=C.ht9()
w=9
return A.b(C.cp2(q,r),$async$aS4)
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
return A.i($async$aS4,v)},
aSq(d,e){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$aSq=A.e(function(a0,a1){if(a0===1){s.push(a1)
w=t}for(;;)switch(w){case 0:g=d==null?null:B.a.i(d)
if(g==null||g.length===0){u=null
w=1
break}i=B.a.a_(g,"ngmy:ws-thumb:")
if(i){u=C.cp_(g)
w=1
break}if(!B.a.a_(g,"data:image")){u=g
w=1
break}r=5e5
if(g.length<=r){u=g
w=1
break}t=4
q=B.a.q(g,",")?B.d.gal(g.split(",")):g
p=B.cK.aO(q)
o=960
case 7:if(!(o>=96)){w=8
break}w=9
return A.b(A.Hg(p,!0,null,o).dg(0,B.h9),$async$aSq)
case 9:n=a1
w=10
return A.b(n.ld(),$async$aSq)
case 10:m=a1
w=11
return A.b(m.b.hi(B.hd),$async$aSq)
case 11:l=a1
m.b.t()
if(l==null){w=8
break}i=J.eQ(B.dK.gaU(l))
k="data:image/png;base64,"+B.cV.gcu().aO(i)
if(J.ad(k)<=r){u=k
w=1
break}o=B.j.V(o*0.72)
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
return A.i($async$aSq,v)},
fX6:function fX6(){},
uk:function uk(d){this.a=d},
auf:function auf(d,e,f){this.c=d
this.d=e
this.a=f},
aGS:function aGS(){var _=this
_.d=$
_.e=!1
_.c=_.a=null},
eW3:function eW3(d,e){this.a=d
this.b=e},
eVV:function eVV(d){this.a=d},
eVW:function eVW(d){this.a=d},
eW1:function eW1(d,e){this.a=d
this.b=e},
eW0:function eW0(d,e){this.a=d
this.b=e},
eVY:function eVY(d,e){this.a=d
this.b=e},
eVX:function eVX(d,e){this.a=d
this.b=e},
eVZ:function eVZ(d){this.a=d},
eW_:function eW_(d,e){this.a=d
this.b=e},
eW2:function eW2(d,e){this.a=d
this.b=e},
eVQ:function eVQ(d,e){this.a=d
this.b=e},
eVU:function eVU(d){this.a=d},
eVT:function eVT(d,e){this.a=d
this.b=e},
eVS:function eVS(d){this.a=d},
eW4:function eW4(d,e){this.a=d
this.b=e},
eW5:function eW5(d,e){this.a=d
this.b=e},
eVR:function eVR(d,e){this.a=d
this.b=e},
hGw(d,e,f){var w="thumbnailPath",v=e.aj()
if(f!=null&&f.length!==0)v.n(0,w,f)
else v.W(0,w)
return A.J(["type","ngmy_worksheet_project_v1","ownerEmail",B.a.i(d),"exportedAt",new A.V(Date.now(),0,!1).aa().af(),"project",v],x.N,x.z)},
fX7(d,e,f){var w=0,v=A.j(x.N),u
var $async$fX7=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:u=B.V.av(C.hGw(e,f,f.c),null)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fX7,v)},
bGd(d,e){var w=0,v=A.j(x.N),u,t,s,r
var $async$bGd=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=C
w=4
return A.b(C.fX7(!0,d,e),$async$bGd)
case 4:w=3
return A.b(r.aud(g,d,e.a),$async$bGd)
case 3:s=g
if(s!=null){u=s.a
w=1
break}t=B.dU.aO(B.V.av(C.hGw(d,e,null),null))
u="NGMY_WS:"+B.kL.gcu().aO(t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bGd,v)},
hxJ(d){var w,v=d.z,u=v==null?null:B.a.i(v)
if(u!=null&&u.length!==0)return u
v=d.d
w=v==null?null:B.a.i(v)
if(w!=null&&w.length!==0)return w
return null},
hiH(d){var w,v,u,t="ngmy_worksheet_project_v1",s=B.a.i(d)
if(J.ad(s)===0)return!1
if(J.d5(s,"NGMYWSSYNC2|"))return!0
if(J.d5(s,"NGMY_WS:"))return!0
if(J.eK(s,t))return!0
if(J.d5(s,"{"))try{w=B.V.aP(0,s,null)
if(x.f.b(w)){v=J.t(w,"type")
v=J.k(v==null?"":v)===t}else v=!1
if(v)return!0}catch(u){}return!1},
ir8(d){var w,v,u,t=C.hxJ(d)
if(t==null)return null
if(C.hiH(t))return t
w=B.a.cn(t,"NGMYWSSYNC2|")
if(w>=0){v=B.a.i(B.a.b2(t,w))
if(C.hiH(v))return v}u=B.a.cn(t,"NGMY_WS:")
if(u>=0){v=B.a.i(B.a.b2(t,u))
if(C.hiH(v))return v}return null},
hiG(d){var w,v,u,t,s,r=null,q=B.a.i(d)
if(J.ad(q)===0)return r
if(J.d5(q,"NGMYWSSYNC2|"))return r
try{w=null
t=x.a
if(J.d5(q,"NGMY_WS:")){v=B.ca.cI(0,B.cK.aO(J.nq(q,8)))
w=t.a(B.V.aP(0,v,r))}else w=t.a(B.V.aP(0,q,r))
t=J.t(w,"type")
if(J.k(t==null?"":t)!=="ngmy_worksheet_project_v1")return r
u=J.t(w,"project")
if(!x.f.b(u))return r
t=C.hcJ(A.a1(u,x.N,x.z))
return t}catch(s){return r}},
bGc(d){var w=0,v=A.j(x.o),u,t,s,r
var $async$bGc=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=B.a.i(d)
w=B.a.a_(r,"NGMYWSSYNC2|")?3:4
break
case 3:t=r.split("|")
w=t.length>=2?5:6
break
case 5:w=7
return A.b(C.auc(t[1]),$async$bGc)
case 7:s=f
if(s!=null&&B.a.i(s).length!==0){u=C.hiG(s)
w=1
break}case 6:u=null
w=1
break
case 4:u=C.hiG(r)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bGc,v)},
hiF(d){var w=B.o.v(1000*Date.now()),v=d.b
if(B.a.i(v).length===0)v="Shared project"
return new C.lF(w,v,d.c,d.d,new A.V(Date.now(),0,!1))},
bFH(){var w=0,v=A.j(x.o),u,t
var $async$bFH=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(A.Hs(),$async$bFH)
case 3:t=e
if(t==null||B.a.i(t).length===0){u=null
w=1
break}u=C.hiG(t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bFH,v)},
hHJ(d,e,f,g){return A.bS(B.L,null,new C.h5l(f,g,e),d,!0,!0,!0,null,!1,!1,x.H)},
h5l:function h5l(d,e,f){this.a=d
this.b=e
this.c=f},
aeP:function aeP(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
eW7:function eW7(d,e){this.a=d
this.b=e},
eW8:function eW8(d,e){this.a=d
this.b=e},
eW9:function eW9(d,e){this.a=d
this.b=e},
eWa:function eWa(d,e){this.a=d
this.b=e},
eW6:function eW6(d){this.a=d},
au9:function au9(d,e,f){this.c=d
this.d=e
this.a=f},
bnB:function bnB(){var _=this
_.c=_.a=_.e=_.d=null},
eVL:function eVL(d,e){this.a=d
this.b=e},
eVM:function eVM(d){this.a=d},
eVN:function eVN(d){this.a=d},
aue:function aue(d){this.a=d},
aGR:function aGR(d){var _=this
_.d=d
_.f=_.e=!1
_.c=_.a=null},
eVP:function eVP(d){this.a=d},
eVO:function eVO(d){this.a=d},
i_w(d,e,f,g,h){return new C.P5(h,g,d,e,f,null)},
aLM:function aLM(d,e){this.a=d
this.b=e},
P5:function P5(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aGT:function aGT(d,e){var _=this
_.d=d
_.e=e
_.f=!0
_.r=0
_.c=_.a=null},
eWx:function eWx(){},
eWt:function eWt(d,e){this.a=d
this.b=e},
eWu:function eWu(d){this.a=d},
eWe:function eWe(d){this.a=d},
eWc:function eWc(d){this.a=d},
eWd:function eWd(d){this.a=d},
eWn:function eWn(d,e){this.a=d
this.b=e},
eWk:function eWk(d,e){this.a=d
this.b=e},
eWl:function eWl(d,e){this.a=d
this.b=e},
eWm:function eWm(d,e,f){this.a=d
this.b=e
this.c=f},
eWi:function eWi(d,e,f){this.a=d
this.b=e
this.c=f},
eWg:function eWg(d){this.a=d},
eWh:function eWh(d){this.a=d},
eWj:function eWj(d){this.a=d},
eWA:function eWA(d){this.a=d},
eWz:function eWz(d){this.a=d},
eWB:function eWB(d){this.a=d},
eWy:function eWy(d){this.a=d},
eWb:function eWb(d){this.a=d},
eWf:function eWf(d,e){this.a=d
this.b=e},
eWw:function eWw(d,e){this.a=d
this.b=e},
eWv:function eWv(d,e){this.a=d
this.b=e},
eWq:function eWq(d){this.a=d},
eWr:function eWr(d){this.a=d},
eWs:function eWs(d,e){this.a=d
this.b=e},
eWp:function eWp(d,e){this.a=d
this.b=e},
eWo:function eWo(d,e,f){this.a=d
this.b=e
this.c=f},
bAo:function bAo(){},
Ba(d){var w,v=B.a.i(d.toLowerCase())
if(v.length===0)return""
w=A.ag("[^a-z0-9@._+-]",!0,!1,!1,!1)
return A.aL(v,w,"_")},
ahl(d,e,f){return C.ifv(d,e,f)},
ifv(d,e,f){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o
var $async$ahl=A.e(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(d.aC("String",e,f),$async$ahl)
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
return A.i($async$ahl,v)},
ahk(d,e){return C.ifu(d,e)},
ifu(d,e){var w=0,v=A.j(x.H),u=1,t=[],s,r,q
var $async$ahk=A.e(function(f,g){if(f===1){t.push(g)
w=u}for(;;)switch(w){case 0:u=3
w=6
return A.b(d.W(0,e),$async$ahk)
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
return A.i($async$ahk,v)},
iek(d,e){var w,v,u=e==null?null:B.a.i(e)
if(u!=null&&u.length!==0)return d.TI(u)
w=d.c
v=w==null?null:B.a.i(w)
if(v!=null&&v.length!==0)return d
return d},
bD8(d){var w=0,v=A.j(x.T),u,t,s,r,q
var $async$bD8=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:q=B.a.i(d)
if(q.length===0){u=null
w=1
break}t=B.a.a_(q,"ngmy:thumb:")
if(!t)t=B.a.a_(q,"ngmy:ws-thumb:")
else t=!0
if(t){u=q
w=1
break}w=B.a.a_(q,"data:image")?3:4
break
case 3:w=5
return A.b(C.b4J(q),$async$bD8)
case 5:s=f
if(s!=null){u=s
w=1
break}w=6
return A.b(C.aSq(q,!1),$async$bD8)
case 6:r=f
if(r!=null&&B.a.a_(r,"data:image")&&r.length<=12e4){u=r
w=1
break}u=null
w=1
break
case 4:u=q
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bD8,v)},
hNV(d){var w,v,u,t,s,r="unitLabel",q="each",p=A.aJ(d.h(0,"price")),o=p==null?null:p
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
s=J.k(s==null?q:s)}return new C.rq(p,u,t,v,s)}p=d.h(0,"id")
p=J.k(p==null?"":p)
u=d.h(0,"name")
return new C.rq(p,J.k(u==null?"":u),1,o,q)},
hcJ(d){var w,v,u,t,s=d.h(0,"items"),r=A.a([],x.C)
if(x.j.b(s)){w=J.de(s,x.f)
w=A.cF(w,new C.cGI(),w.$ti.k("M.E"),x.Q)
v=A.a4(w).k("Y<M.E>")
r=A.C(new A.Y(w,new C.cGJ(),v),v.k("M.E"))}w=d.h(0,"id")
w=J.k(w==null?"":w)
v=d.h(0,"name")
v=J.k(v==null?"":v)
u=d.h(0,"thumbnailPath")
u=u==null?null:J.k(u)
t=d.h(0,"createdAt")
t=A.bi(J.k(t==null?"":t))
return new C.lF(w,v,u,r,t==null?new A.V(Date.now(),0,!1):t)},
ijq(d){var w=d==null?"":d
switch(w.toLowerCase()){case"male":case"m":return D.wI
case"female":case"f":return D.oB
default:return D.z8}},
hCT(d){switch(d.a){case 0:return"male"
case 1:return"female"
case 2:return"unknown"}},
hn7(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i=d.h(0,"id")
i=J.k(i==null?"":i)
w=d.h(0,"name")
w=J.k(w==null?"":w)
v=d.h(0,"gender")
v=C.ijq(v==null?j:J.k(v))
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
m=m==null?j:B.j.M(m)
if(m==null)m=1
l=J.z(d.h(0,"hidden"),!0)
k=A.aJ(d.h(0,"visibleChildrenCap"))
k=k==null?j:B.j.M(k)
return new C.i_(i,w,v,u,t,s,r,q,p,o,n,m,l,k==null?0:k)},
ijs(d){var w=d==null?"":d
switch(w.toLowerCase()){case"editor":return D.P0
case"viewer":return D.kY
default:return D.uO}},
ijt(d){switch(d.a){case 1:return"editor"
case 2:return"viewer"
case 0:return"owner"}},
Hh(d,e){var w=B.a.i(d.x)
if(w.length!==0)return B.a.i(w.toLowerCase())
return B.a.i(e.toLowerCase())},
aRb(d,e){return B.a.i(e.toLowerCase())===C.Hh(d,e)&&d.y!==D.kY},
uz(d,e){var w,v=d.y
if(v===D.kY)return!1
w=B.a.i(e.toLowerCase())
if(w===C.Hh(d,e))return!0
if(v===D.P0)return!0
v=d.e
return new A.N(v,A.hiN(),A.U(v).k("N<1,n>")).q(0,w)},
iiN(d){return J.dH(d,new C.fHh()).gJ(0)},
h65(d){var w=0,v=A.j(x.y),u,t
var $async$h65=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=J
w=3
return A.b(C.Bl(d),$async$h65)
case 3:u=t.rl(f,new C.h66(d))
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$h65,v)},
bEa(d,e){var w=0,v=A.j(x.H),u,t
var $async$bEa=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.Bl(d),$async$bEa)
case 3:t=g
if(J.rl(t,new C.fEM(e))){w=1
break}if(C.iiN(t)>=2)throw A.X(A.bc("You can only keep 2 shared family trees. Remove one before importing another."))
case 1:return A.h(u,v)}})
return A.i($async$bEa,v)},
ami(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=d.h(0,"members"),g=A.a([],x.u),f=x.j
if(f.b(h)){w=J.de(h,x.f)
w=A.cF(w,new C.bT1(),w.$ti.k("M.E"),x.P)
v=A.a4(w).k("Y<M.E>")
g=A.C(new A.Y(w,new C.bT2(),v),v.k("M.E"))}u=d.h(0,"collaboratorEmails")
if(f.b(u)){w=J.b7(u,new C.bT3(),x.N)
t=A.C(w,w.$ti.k("ak.E"))}else t=A.a([],x.s)
w=d.h(0,"id")
w=J.k(w==null?"":w)
v=d.h(0,"name")
v=J.k(v==null?"":v)
s=d.h(0,"code")
s=J.k(s==null?"":s)
r=J.z(d.h(0,"isPrivate"),!1)
q=d.h(0,"createdAt")
q=A.bi(J.k(q==null?"":q))
if(q==null)q=new A.V(Date.now(),0,!1)
p=A.aJ(d.h(0,"visibleChildrenPerParent"))
p=p==null?null:B.j.M(p)
if(p==null)p=0
o=d.h(0,"ownerEmail")
o=J.k(o==null?"":o)
n=d.h(0,"localRole")
n=C.ijs(n==null?null:J.k(n))
m=A.a([],x.Y)
f=J.aT(f.b(d.h(0,"games"))?f.a(d.h(0,"games")):B.cs)
l=x.f
k=x.N
j=x.z
while(f.C()){i=f.gR(f)
if(l.b(i))m.push(A.a1(i,k,j))}return new C.kY(w,v,s,!r,t,g,q,p,o,n,m)},
hD7(d){var w=A.ag("[^A-Z0-9]",!0,!1,!1,!1),v=A.aL(d.toUpperCase(),w,"")
w=v.length
if(w===0)return"TREE"
return w<=8?v:B.a.az(v,0,8)},
Dz(d){var w=0,v=A.j(x.gk),u,t,s,r,q,p,o,n,m,l
var $async$Dz=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(A.SE(d),$async$Dz)
case 3:l=f
if(l.length===0){u=A.a([],x.D)
w=1
break}w=4
return A.b(A.aA(),$async$Dz)
case 4:t=f
w=5
return A.b(t.a7q(0),$async$Dz)
case 5:w=6
return A.b(C.fv7(t,l),$async$Dz)
case 6:s=f
if(J.cJ(s)){u=s
w=1
break}r=B.a.gX(B.a.i(l.toLowerCase()))
q=t.a
p=J.a7(q)
o=A.aV(p.h(q,"ngmy_worksheets_projects_v2_"+Math.abs(r)))
w=o!=null&&o.length!==0?7:8
break
case 7:n=C.hyk(o)
w=n.length!==0?9:10
break
case 9:w=11
return A.b(C.p8(l,n),$async$Dz)
case 11:u=n
w=1
break
case 10:case 8:m=A.aV(p.h(q,"ngmy_worksheets_projects_v1_"+Math.abs(B.a.gX(l))))
w=m!=null&&m.length!==0?12:13
break
case 12:n=C.hyk(m)
w=n.length!==0?14:15
break
case 14:w=16
return A.b(C.p8(l,n),$async$Dz)
case 16:u=n
w=1
break
case 15:case 13:u=A.a([],x.D)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$Dz,v)},
fv7(d,e){return C.ibG(d,e)},
ibG(a8,a9){var w=0,v=A.j(x.gk),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7
var $async$fv7=A.e(function(b0,b1){if(b0===1){s.push(b1)
w=t}for(;;)switch(w){case 0:a3=a8.a
a4=J.a7(a3)
a5=A.aV(a4.h(a3,"ngmy_worksheets_index_v3_"+C.Ba(a9)))
if(a5==null||B.a.i(a5).length===0){u=A.a([],x.D)
w=1
break}t=4
r=B.V.aP(0,a5,null)
if(!x.j.b(r)){a3=A.a([],x.D)
u=a3
w=1
break}q=A.a([],x.D)
p=!1
f=J.aT(r),e=x.N,d=x.z,a0=x.f
case 7:if(!f.C()){w=8
break}o=f.gR(f)
n=B.a.i(J.k(o))
if(J.ad(n)===0){w=7
break}m=A.aV(a4.h(a3,"ngmy_worksheet_item_v3_"+C.Ba(a9)+"_"+n))
if(m==null||m.length===0){w=7
break}t=10
l=B.V.aP(0,m,null)
if(!a0.b(l)){w=7
break}k=C.hcJ(A.a1(l,e,d))
w=k.a.length!==0&&k.b.length!==0?13:14
break
case 13:j=A.aV(a4.h(a3,"ngmy_worksheet_thumb_v3_"+C.Ba(a9)+"_"+n))
i=C.iek(k,j)
a1=i.c
h=a1==null?null:B.a.i(a1)
w=h!=null&&B.a.a_(h,"data:image")?15:16
break
case 15:w=17
return A.b(C.b4J(h),$async$fv7)
case 17:g=b1
if(g!=null){i=i.TI(g)
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
case 8:J.SN(q,new C.fv8())
if(p&&J.ad(q)!==0)C.p8(a9,q)
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
return A.i($async$fv7,v)},
bEC(d,e){var w=0,v=A.j(x.o),u,t,s,r,q,p
var $async$bEC=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(A.SE(d),$async$bEC)
case 3:r=g
q=B.a.i(e)
if(r.length===0||q.length===0){u=null
w=1
break}p=J
w=4
return A.b(C.Dz(r),$async$bEC)
case 4:t=p.aT(g)
case 5:if(!t.C()){w=6
break}s=t.gR(t)
if(s.a===q){u=s
w=1
break}w=5
break
case 6:u=null
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bEC,v)},
hyk(d){var w,v,u,t
try{w=B.V.aP(0,d,null)
if(!x.j.b(w)){v=A.a([],x.D)
return v}v=J.de(w,x.f)
v=A.cF(v,new C.fqO(),v.$ti.k("M.E"),x.fA)
u=A.a4(v).k("Y<M.E>")
v=A.C(new A.Y(v,new C.fqP(),u),u.k("M.E"))
B.d.aZ(v,new C.fqQ())
return v}catch(t){v=A.a([],x.D)
return v}},
p8(d,e){return C.isV(d,e)},
isV(b2,b3){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1
var $async$p8=A.e(function(b4,b5){if(b4===1){s.push(b5)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.SE(b2),$async$p8)
case 3:a8=b5
if(J.ad(a8)===0){u=!1
w=1
break}w=4
return A.b(A.aA(),$async$p8)
case 4:r=b5
q=A.a([],x.s)
t=6
a2=C.Ba(a8)
p=A.aV(J.t(r.a,"ngmy_worksheets_index_v3_"+a2))
w=p!=null&&p.length!==0?9:10
break
case 9:t=12
a2=x.N
o=J.b7(x.j.a(B.V.aP(0,p,null)),new C.fYB(),a2).fM(0)
a2=J.b7(b3,new C.fYC(),a2).bY(0,new C.fYD())
n=A.d0(a2,a2.$ti.k("M.E"))
a2=o,a2=A.dZ(a2,a2.r,A.a4(a2).c),a3=a2.$ti.c,a4=x.f
case 15:if(!a2.C()){w=16
break}a5=a2.d
m=a5==null?a3.a(a5):a5
w=!J.eK(n,m)?17:18
break
case 17:a5=C.Ba(a8)
l=A.aV(J.t(r.a,"ngmy_worksheet_thumb_v3_"+a5+"_"+m))
w=19
return A.b(C.a9J(l),$async$p8)
case 19:t=21
a5=C.Ba(a8)
k=A.aV(J.t(r.a,"ngmy_worksheet_item_v3_"+a5+"_"+m))
w=k!=null&&k.length!==0?24:25
break
case 24:j=B.V.aP(0,k,null)
w=a4.b(j)?26:27
break
case 26:a5=J.t(j,"thumbnailPath")
w=28
return A.b(C.a9J(a5==null?null:J.k(a5)),$async$p8)
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
return A.b(C.ahk(r,"ngmy_worksheet_item_v3_"+C.Ba(a8)+"_"+m),$async$p8)
case 29:w=30
return A.b(C.ahk(r,"ngmy_worksheet_thumb_v3_"+C.Ba(a8)+"_"+m),$async$p8)
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
case 14:case 10:a2=J.cD(b3),a3=a2.gae(b3)
case 31:if(!a3.C()){w=32
break}i=a3.gR(a3)
if(i.a.length===0||B.a.i(i.b).length===0){w=31
break}a4=i.c
h=a4==null?null:B.a.i(a4)
g=i
w=h!=null&&h.length!==0?33:35
break
case 33:w=36
return A.b(C.bD8(h),$async$p8)
case 36:f=b5
w=f!=null&&f.length!==0?37:39
break
case 37:a4=i.a
w=40
return A.b(C.ahl(r,"ngmy_worksheet_thumb_v3_"+C.Ba(a8)+"_"+a4,f),$async$p8)
case 40:g=i.TI(f)
w=38
break
case 39:$.am.$1("[worksheets] photo not saved for "+i.a+" \u2014 saving project without thumbnail")
a4=i.a
w=41
return A.b(C.ahk(r,"ngmy_worksheet_thumb_v3_"+C.Ba(a8)+"_"+a4),$async$p8)
case 41:g=i.TI(null)
case 38:w=34
break
case 35:a4=i.a
w=42
return A.b(C.ahk(r,"ngmy_worksheet_thumb_v3_"+C.Ba(a8)+"_"+a4),$async$p8)
case 42:case 34:a4=i.a
w=43
return A.b(C.ahl(r,"ngmy_worksheet_item_v3_"+C.Ba(a8)+"_"+a4,B.V.av(g.aj(),null)),$async$p8)
case 43:e=b5
if(!e){$.am.$1("[worksheets] failed to save project "+i.a+" for "+A.w(a8))
w=31
break}J.c5(q,i.a)
w=31
break
case 32:w=44
return A.b(C.ahl(r,"ngmy_worksheets_index_v3_"+C.Ba(a8),B.V.av(q,null)),$async$p8)
case 44:d=b5
if(!d){$.am.$1("[worksheets] failed to save project index for "+A.w(a8))
u=!1
w=1
break}a3=a2.eQ(b3,new C.fYE(q))
a4=a3.$ti.k("cM<1,a9<n,@>>")
a7=A.C(new A.cM(a3,new C.fYF(),a4),a4.k("M.E"))
a0=a7
w=45
return A.b(C.ahl(r,"ngmy_worksheets_projects_v2_"+Math.abs(B.a.gX(B.a.i(a8.toLowerCase()))),B.V.av(a0,null)),$async$p8)
case 45:w=46
return A.b(J.hN0(r),$async$p8)
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
return A.i($async$p8,v)},
Md(d,e){var w=0,v=A.j(x.y),u,t,s,r
var $async$Md=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.Dz(d),$async$Md)
case 3:t=g
s=J.cD(t)
r=s.bj(t,new C.h64(e))
if(r===-1)s.c9(t,0,e)
else s.n(t,r,e)
u=C.p8(d,t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$Md,v)},
bEn(d,e){var w=0,v=A.j(x.H),u
var $async$bEn=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(C.Dz(d),$async$bEn)
case 2:u=g
J.nT(u,new C.fHL(e))
w=3
return A.b(C.p8(d,u),$async$bEn)
case 3:return A.h(null,v)}})
return A.i($async$bEn,v)},
Hj(d){var w=0,v=A.j(x.ax),u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$Hj=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(A.aA(),$async$Hj)
case 3:l=f
k=A.a([],x._)
j=B.a.gX(B.a.i(d.toLowerCase()))
i=A.aV(J.t(l.a,"ngmy_worksheets_family_trees_v1_"+Math.abs(j)))
if(i!=null&&i.length!==0)try{t=B.V.aP(0,i,null)
if(x.j.b(t)){j=J.de(t,x.f)
j=A.cF(j,new C.fKX(),j.$ti.k("M.E"),x.k)
s=A.a4(j).k("Y<M.E>")
r=A.C(new A.Y(j,new C.fKY(),s),s.k("M.E"))
B.d.aZ(r,new C.fKZ())
k=r}}catch(h){}w=4
return A.b(C.fry(d),$async$Hj)
case 4:p=f
if(p==null){u=k
w=1
break}o=C.ic3(k,p,d)
j=A.U(o)
s=j.k("N<1,a9<n,@>>")
s=A.C(new A.N(o,new C.fL_(),s),s.k("ak.E"))
n=B.V.av(s,null)
s=i
w=n!==(s==null?"":s)?5:6
break
case 5:w=7
return A.b(C.RO(d,o),$async$Hj)
case 7:case 6:j=j.k("Y<1>")
m=A.C(new A.Y(o,new C.fL0(d),j),j.k("M.E"))
if(m.length!==0)C.aQW(d,m)
u=o
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$Hj,v)},
fYn(d,e){var w=0,v=A.j(x.y),u,t,s
var $async$fYn=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.RO(d,e),$async$fYn)
case 3:t=J.dH(e,new C.fYo(d))
s=A.C(t,t.$ti.k("M.E"))
if(s.length===0){u=!0
w=1
break}u=C.aQW(d,s)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fYn,v)},
a41(d,e){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n,m,l
var $async$a41=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:o=A.a([],x._)
w=2
return A.b(A.aA(),$async$a41)
case 2:n=g
m=B.a.gX(B.a.i(d.toLowerCase()))
l=A.aV(J.t(n.a,"ngmy_worksheets_family_trees_v1_"+Math.abs(m)))
if(l!=null&&l.length!==0)try{u=B.V.aP(0,l,null)
if(x.j.b(u)){m=J.de(u,x.f)
m=A.cF(m,new C.h6_(),m.$ti.k("M.E"),x.k)
t=A.a4(m).k("Y<M.E>")
s=A.C(new A.Y(m,new C.h60(),t),t.k("M.E"))
o=s}}catch(k){}q=J.oz(o,new C.h61(e))
if(B.a.i(e.x).length===0&&C.uz(e,d)){m=B.a.i(d.toLowerCase())
p=e.aGo(e.y===D.kY?D.kY:D.uO,m)}else p=e
if(q===-1)J.n3(o,0,p)
else J.aK(o,q,p)
w=3
return A.b(C.RO(d,o),$async$a41)
case 3:w=C.uz(p,d)?4:5
break
case 4:w=6
return A.b(C.aQV(C.Hh(p,d),p),$async$a41)
case 6:if(!g)$.am.$1("[family_trees] cloud save failed for "+p.a+" \u2014 run supabase/family_trees_table.sql if table is missing")
case 5:return A.h(null,v)}})
return A.i($async$a41,v)},
aR7(d,e){var w=0,v=A.j(x.H),u,t,s
var $async$aR7=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(C.Hj(d),$async$aR7)
case 2:u=g
t=J.cD(u)
s=A.nA(t.eQ(u,new C.fHs(e)))
t.bq(u,new C.fHt(e))
w=3
return A.b(C.RO(d,u),$async$aR7)
case 3:w=s!=null&&C.aRb(s,d)?4:5
break
case 4:w=6
return A.b(C.fqS(e),$async$aR7)
case 6:case 5:return A.h(null,v)}})
return A.i($async$aR7,v)},
aj6(d){var w=d.f,v=A.U(w).k("Y<1>")
w=A.C(new A.Y(w,new C.h6a(),v),v.k("M.E"))
return w},
hgb(d,e){var w,v=d.f,u=A.nA(new A.Y(v,new C.fGX(e),A.U(v).k("Y<1>")))
v=C.aj6(d)
w=A.U(v).k("Y<1>")
v=A.C(new A.Y(v,new C.fGY(e,u),w),w.k("M.E"))
B.d.aZ(v,new C.fGZ())
return v},
ijw(d,e){var w=e.at
if(w>0)return w
w=d.w
if(w>0)return w
return 0},
hHN(d,e){var w,v,u=e.d
if(u==null||u.length===0)return 0
w=B.d.bj(C.hgb(d,u),new C.h5z(e))
if(w>=0)return w+1
v=e.Q
return v>0?v:0},
il_(d,e){var w
if(e==null||e.length===0)return 1
w=C.hgb(d,e)
if(w.length===0)return 1
return new A.N(w,new C.fLO(),A.U(w).k("N<1,H>")).f1(0,B.y6)+1},
isO(d){var w,v=C.aj6(d)
if(v.length===0)return null
w=new A.Y(v,new C.fYh(),A.U(v).k("Y<1>"))
if(!w.gau(0))return w.gH(0)
return B.d.gH(v)},
ijr(d){return A.J(["id",d.a,"name",d.b,"gender",C.hCT(d.c),"birthDate",d.w,"birthPlace",d.x,"deathDate",d.y,"occupation",d.z,"notes",d.r,"parentId",d.d,"spouseId",d.e,"birthOrder",d.Q,"hidden",d.as,"visibleChildrenCap",d.at],x.N,x.z)},
ikV(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=x.N,a1=A.T(a0,x.P)
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
n=n!==D.z8?n:q.c
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
d=q.aGj(m,f,l,k,n,e,p,i,j,h,q.f,g,d)
p=d}s.push(p)}for(a0=w.length,u=0;u<w.length;w.length===a0||(0,A.I)(w),++u){o=w[u]
if(!r.q(0,o.a))s.push(o)}a0=a3.b
a0=a0.length!==0?a0:a2.b
a1=a3.c
a1=a1.length!==0?a1:a2.c
w=a3.e
w=w.length!==0?w:a2.e
v=a2.x
v=v.length!==0?v:a3.x
return a2.cQt(a1,w,a3.d,a2.y,s,a0,v)},
Bl(d){var w=0,v=A.j(x.ax),u,t,s,r,q,p,o
var $async$Bl=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(A.aA(),$async$Bl)
case 3:q=f
p=B.a.gX(B.a.i(d.toLowerCase()))
o=A.aV(J.t(q.a,"ngmy_worksheets_family_trees_v1_"+Math.abs(p)))
if(o==null||o.length===0){u=A.a([],x._)
w=1
break}try{t=B.V.aP(0,o,null)
if(!x.j.b(t)){p=A.a([],x._)
u=p
w=1
break}p=J.de(t,x.f)
p=A.cF(p,new C.fKU(),p.$ti.k("M.E"),x.k)
s=A.a4(p).k("Y<M.E>")
p=A.C(new A.Y(p,new C.fKV(),s),s.k("M.E"))
B.d.aZ(p,new C.fKW())
u=p
w=1
break}catch(n){p=A.a([],x._)
u=p
w=1
break}case 1:return A.h(u,v)}})
return A.i($async$Bl,v)},
aiQ(b1,b2,b3){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
var $async$aiQ=A.e(function(b4,b5){if(b4===1)return A.f(b5,v)
for(;;)switch(w){case 0:a5=B.a.i(b3.toLowerCase())===B.a.i(b1.toLowerCase())
a6=a5?D.uO:D.kY
a7=C.Hh(b2,b3)
w=2
return A.b(C.Bl(b1),$async$aiQ)
case 2:a8=b5
a9=J.cD(a8)
b0=a9.bj(a8,new C.fYc(b2))
w=!a5&&b0===-1?3:4
break
case 3:w=5
return A.b(C.bEa(b1,b2),$async$aiQ)
case 5:case 4:if(b0===-1){u=b2.aGo(a6,a7)
a9.c9(a8,0,u)}else{t=a9.h(a8,b0)
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
i=i!==D.z8?i:l.c
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
s.n(0,m,l.aGj(d,a3,a0,a1,i,n.as,k,e,a2,h,f,g,a4))}}r=b2.b
r=r.length!==0?r:t.b
q=b2.c
q=q.length!==0?q:t.c
m=b2.e
m=m.length!==0?m:t.e
k=s.$ti.k("b8<2>")
s=A.C(new A.b8(s,k),k.k("M.E"))
k=a5?D.uO:D.kY
u=t.cQv(q,m,b2.d,k,s,r,a7,b2.w)
a9.n(a8,b0,u)}w=6
return A.b(C.RO(b1,a8),$async$aiQ)
case 6:w=a5?7:8
break
case 7:w=9
return A.b(C.aQV(B.a.i(b3.toLowerCase()),u),$async$aiQ)
case 9:case 8:return A.h(null,v)}})
return A.i($async$aiQ,v)},
hyJ(d,e){var w,v,u,t,s,r,q="collaboratorEmails",p="visibleChildrenPerParent",o=new A.V(Date.now(),0,!1).aa().af(),n=B.a.i(e.toLowerCase()),m=d.f,l=A.U(m).k("N<1,a9<n,@>>"),k=A.C(new A.N(m,C.hGR(),l),l.k("ak.E"))
m=d.a
l=d.b
w=d.c
v=d.d
u=d.e
t=d.w
s=d.r
r=x.N
return A.J(["id",m,"userEmail",n,"name",l,"code",w,"isPrivate",v,q,u,"members",k,p,t,"payload",A.J(["id",m,"name",l,"code",w,"isPrivate",v,q,u,"members",k,p,t,"ownerEmail",n,"createdAt",s.aa().af(),"updatedAt",o],r,x.K),"createdAt",s.aa().af(),"updatedAt",o],r,x.z)},
hyK(d,e){var w=new A.V(Date.now(),0,!1).aa().af(),v=B.a.i(e.toLowerCase()),u=d.f,t=A.U(u).k("N<1,a9<n,@>>")
u=A.C(new A.N(u,C.hGR(),t),t.k("ak.E"))
return A.J(["id",d.a,"userEmail",v,"name",d.b,"code",d.c,"isPrivate",d.d,"collaboratorEmails",d.e,"members",u,"createdAt",d.r.aa().af(),"updatedAt",w],x.N,x.z)},
i9C(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k="userEmail",j=J.a7(d),i=j.h(d,"payload"),h=x.f
if(h.b(i)){w=C.ami(A.a1(i,x.N,x.z))
if(w.a.length!==0&&w.f.length!==0){j=j.h(d,k)
v=B.a.i(J.k(j==null?w.x:j).toLowerCase())
u=B.a.i(e.toLowerCase())
j=w.e
j=new A.N(j,A.hiN(),A.U(j).k("N<1,n>")).bY(0,new C.frl())
t=A.C(j,j.$ti.k("M.E"))
if(u===v)s=D.uO
else s=B.d.q(t,u)?D.P0:D.kY
return w.aGo(s,v)}}r=x.j
if(!r.b(j.h(d,"members"))&&h.b(j.h(d,"data")))return C.ami(A.a1(h.a(j.h(d,"data")),x.N,x.z))
q=j.h(d,"members")
if(r.b(q)){h=J.de(q,h)
h=A.cF(h,new C.frm(),h.$ti.k("M.E"),x.P)
p=A.a4(h).k("Y<M.E>")
o=A.C(new A.Y(h,new C.frn(),p),p.k("M.E"))}else o=A.a([],x.u)
n=j.h(d,"collaboratorEmails")
if(r.b(n)){h=J.b7(n,new C.fro(),x.N).bY(0,new C.frp())
t=A.C(h,h.$ti.k("M.E"))}else t=A.a([],x.s)
h=j.h(d,k)
v=B.a.i(J.k(h==null?"":h).toLowerCase())
u=B.a.i(e.toLowerCase())
if(u===v)s=D.uO
else s=B.d.q(t,u)?D.P0:D.kY
h=j.h(d,"id")
h=J.k(h==null?"":h)
r=j.h(d,"name")
r=J.k(r==null?"":r)
p=j.h(d,"code")
p=J.k(p==null?"":p)
m=J.z(j.h(d,"isPrivate"),!1)
l=j.h(d,"createdAt")
l=A.bi(J.k(l==null?"":l))
if(l==null)l=new A.V(Date.now(),0,!1)
j=A.aJ(j.h(d,"visibleChildrenPerParent"))
j=j==null?null:B.j.M(j)
if(j==null)j=0
return new C.kY(h,r,p,!m,t,o,l,j,v,s,B.ce)},
fry(a2){var w=0,v=A.j(x.eK),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$fry=A.e(function(a3,a4){if(a3===1){s.push(a4)
w=t}for(;;)switch(w){case 0:a0=B.a.i(a2.toLowerCase())
if(J.ad(a0)===0){u=null
w=1
break}t=4
r=new C.frC()
h=x.N
g=x.z
w=7
return A.b(A.iG(A.a([A.lJ("family_trees","*",null,A.J(["userEmail",a0],h,g),null,null,null,!0,null,null,!1,B.bN),r.$2(A.lJ("family_trees","*",A.J(["collaboratorEmails",A.a([a0],x.s)],h,g),null,null,null,null,!0,null,null,!1,B.bN),"collaborator"),r.$2(A.lJ("family_trees","*",null,A.J(["isPrivate",!1],h,g),null,null,null,!0,null,null,!1,B.bN),"public")],x.cl),x.fO),$async$fry)
case 7:q=a4
p=J.t(q,0)
o=J.t(q,1)
n=J.t(q,2)
g=x.a
m=A.T(h,g)
h=A.C(p,g)
l=h
J.fZ(l,o)
J.fZ(l,n)
l=l
h=l.length
f=0
for(;f<l.length;l.length===h||(0,A.I)(l),++f){k=l[f]
g=J.t(k,"id")
j=J.k(g==null?"":g)
if(J.ad(j)!==0)J.aK(m,j,k)}l=m
h=A.a4(l).k("b8<2>")
h=A.cF(new A.b8(l,h),new C.frz(a0),h.k("M.E"),x.k)
l=A.a4(h).k("Y<M.E>")
l=A.C(new A.Y(h,new C.frA(),l),l.k("M.E"))
B.d.aZ(l,new C.frB())
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
return A.i($async$fry,v)},
ic3(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=J.a7(e)
if(j.gau(e))return d
w=B.a.i(f.toLowerCase())
v=x.N
u=j.dN(e,new C.fvQ(),v).bY(0,new C.fvR())
t=A.d0(u,u.$ti.k("M.E"))
s=A.T(v,x.k)
for(v=d.length,u=w.length!==0,r=0;r<d.length;d.length===v||(0,A.I)(d),++r){q=d[r]
p=q.a
if(p.length===0)continue
o=C.Hh(q,w)
n=!1
if(u)if(o!==w){if(q.y===D.kY){m=q.e
m=!new A.N(m,A.hiN(),A.U(m).k("N<1,n>")).q(0,w)}else m=n
n=m}if(n&&!t.q(0,p))continue
s.n(0,p,q)}for(j=j.gae(e);j.C();){v=j.gR(j)
u=v.a
if(u.length===0)continue
l=s.h(0,u)
if(l==null){s.n(0,u,v)
continue}k=C.ikV(l,v)
o=C.Hh(k,w)
p=v.d
s.n(0,u,o===w?k.bfH(p,D.uO):k.bfH(p,v.y))}j=s.$ti.k("b8<2>")
j=A.C(new A.b8(s,j),j.k("M.E"))
B.d.aZ(j,new C.fvS())
return j},
RO(d,e){var w=0,v=A.j(x.H),u,t,s
var $async$RO=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.aA(),$async$RO)
case 2:u=g
t=B.a.gX(B.a.i(d.toLowerCase()))
s=J.b7(e,new C.fyN(),x.a)
s=A.C(s,s.$ti.k("ak.E"))
w=3
return A.b(u.aC("String","ngmy_worksheets_family_trees_v1_"+Math.abs(t),B.V.av(s,null)),$async$RO)
case 3:return A.h(null,v)}})
return A.i($async$RO,v)},
aQV(d,e){return C.ihg(d,e)},
ihg(d,e){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n
var $async$aQV=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:t=4
p=x.Y
w=7
return A.b(A.mg("family_trees",A.a([C.hyJ(e,d)],p),null,B.cO),$async$aQV)
case 7:r=g
if(r){u=!0
w=1
break}w=8
return A.b(A.mg("family_trees",A.a([C.hyK(e,d)],p),null,B.cO),$async$aQV)
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
return A.i($async$aQV,v)},
aQW(d,e){return C.ihh(d,e)},
ihh(d,e){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i
var $async$aQW=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(e.length===0){u=!1
w=1
break}t=4
n=A.U(e).k("N<1,a9<n,@>>")
m=n.k("ak.E")
l=A.C(new A.N(e,new C.fE1(d),n),m)
r=l
w=7
return A.b(A.mg("family_trees",r,null,B.cO),$async$aQW)
case 7:q=g
if(q){u=!0
w=1
break}k=A.C(new A.N(e,new C.fE2(d),n),m)
p=k
w=8
return A.b(A.mg("family_trees",p,null,B.cO),$async$aQW)
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
return A.i($async$aQW,v)},
fqS(d){return C.i8U(d)},
i8U(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$fqS=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:if(d.length===0){w=1
break}t=4
w=7
return A.b(A.Sd("family_trees",A.J(["id",d],x.N,x.z),null,B.cO),$async$fqS)
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
return A.i($async$fqS,v)},
rq:function rq(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
lF:function lF(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
cGL:function cGL(){},
cGK:function cGK(){},
cGI:function cGI(){},
cGJ:function cGJ(){},
Is:function Is(d,e){this.a=d
this.b=e},
i_:function i_(d,e,f,g,h,i,j,k,l,m,n,o,p,q){var _=this
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
amh:function amh(d,e){this.a=d
this.b=e},
fHh:function fHh(){},
h66:function h66(d){this.a=d},
fEM:function fEM(d){this.a=d},
kY:function kY(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
bT5:function bT5(){},
bT4:function bT4(){},
bT1:function bT1(){},
bT2:function bT2(){},
bT3:function bT3(){},
fv8:function fv8(){},
fqO:function fqO(){},
fqP:function fqP(){},
fqQ:function fqQ(){},
fYB:function fYB(){},
fYC:function fYC(){},
fYD:function fYD(){},
fYE:function fYE(d){this.a=d},
fYF:function fYF(){},
h64:function h64(d){this.a=d},
fHL:function fHL(d){this.a=d},
fKX:function fKX(){},
fKY:function fKY(){},
fKZ:function fKZ(){},
fL_:function fL_(){},
fL0:function fL0(d){this.a=d},
fYo:function fYo(d){this.a=d},
h6_:function h6_(){},
h60:function h60(){},
h61:function h61(d){this.a=d},
fHs:function fHs(d){this.a=d},
fHt:function fHt(d){this.a=d},
h6a:function h6a(){},
fGX:function fGX(d){this.a=d},
fGY:function fGY(d,e){this.a=d
this.b=e},
fGZ:function fGZ(){},
h5z:function h5z(d){this.a=d},
fLO:function fLO(){},
fYh:function fYh(){},
fKU:function fKU(){},
fKV:function fKV(){},
fKW:function fKW(){},
fYc:function fYc(d){this.a=d},
frl:function frl(){},
frm:function frm(){},
frn:function frn(){},
fro:function fro(){},
frp:function frp(){},
frC:function frC(){},
frD:function frD(d){this.a=d},
frz:function frz(d){this.a=d},
frA:function frA(){},
frB:function frB(){},
fvQ:function fvQ(){},
fvR:function fvR(){},
fvS:function fvS(){},
fyN:function fyN(){},
fE1:function fE1(d){this.a=d},
fE2:function fE2(d){this.a=d},
cGM:function cGM(d,e){this.a=d
this.b=e},
cGN:function cGN(d,e){this.a=d
this.b=e},
aIY:function aIY(d,e,f){this.a=d
this.b=e
this.c=f},
bb_:function bb_(){this.b=this.a=0},
baZ:function baZ(d,e,f,g){var _=this
_.f=d
_.w=e
_.z=f
_.b=g
_.a=null},
byE:function byE(){},
xl(d,e){var w,v
if(d==null)return""
w=d.bT()
v=""+w.gcg()+"/"+w.gcz()+"/"+w.gcl()
if(!e)return v
return v+" "+B.a.b_(B.o.v(w.gnw()),2,"0")+":"+B.a.b_(B.o.v(w.gGQ()),2,"0")},
iij(a5,a6,a7,a8,a9,b0,b1,b2,b3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=a5.c
J.br(a4.save())
a4.translate(a6.a,a6.b-b0)
w=A.bU(new A.r(0,b0+a7*0.005),a7*0.06,a7*0.45)
v=B.w.j(0.22)
$.S()
u=A.L()
u.r=v.gp(0)
a5.c2(w,u)
for(w=a7*0.05,v=-a7,u=v*0.24,t=a7*0.1,s=u+a7*0.2,r=a7*0.04,q=a7*0.065,p=v*0.05,o=a7*0.14,n=p+w,m=a7*0.025,l=0;l<2;++l){k=F.fO[l]*a7*0.075
j=k-w
j=A.bx(new A.a6(j,u,j+t,s),new A.aP(r,r))
i=new A.ar(B.S,B.Q,B.W,B.X,B.U)
i.r=B.dh.gp(0)
a5.aq(j,i)
k-=q
k=A.bx(new A.a6(k,p,k+o,n),new A.aP(m,m))
i=new A.ar(B.S,B.Q,B.W,B.X,B.U)
i.r=B.c.gp(0)
a5.aq(k,i)}w=v*0.16
u=v*0.52
t=a7*0.32
s=w+t
q=a7*0.09
h=A.bx(new A.a6(w,u,s,u+t),new A.aP(q,q))
q=A.L()
q.r=b2.gp(0)
a5.aq(h,q)
q=v*0.27
t=a7*0.02
t=A.bx(new A.a6(w,q,s,q+a7*0.045),new A.aP(t,t))
q=B.c.j(0.35)
s=A.L()
s.r=q.gp(0)
a5.aq(t,s)
s=v*0.47
g=new A.r(v*0.15,s)
f=new A.r(a7*0.15,s)
s=v*0.06
t=a7*0.07
a5.ah(g,g.a5(0,new A.r(s,a7*0.17)),P.ahj(F.rV,t))
s=g.a5(0,new A.r(s,a7*0.18))
q=A.L()
q.r=F.rV.gp(0)
a5.O(s,r,q)
e=-2.5+b3*0.5
d=f.a5(0,new A.r(Math.sin(e)*a7*0.2,Math.cos(e)*a7*0.2))
a5.ah(f,d,P.ahj(F.rV,t))
w=A.L()
w.r=F.rV.gp(0)
a5.O(d,r,w)
v*=0.7
a0=new A.r(0,v)
a1=a7*0.22
if(b1===1){w=a0.a5(0,new A.r(0,-a1*0.12))
u=A.L()
u.r=F.m7.gp(0)
a5.O(w,a1*1.18,u)}w=A.L()
w.r=F.rV.gp(0)
a5.O(a0,a1,w)
if(b1===0){w=A.bW(a0,a1)
u=A.L()
u.r=F.m7.gp(0)
a5.cP(w,3.141592653589793,3.141592653589793,!0,u)}else if(b1===2){w=A.bW(a0,a1)
u=A.L()
u.r=F.m7.gp(0)
a5.cP(w,3.141592653589793,3.141592653589793,!0,u)
for(w=v+a1*0.3,u=a1*0.2,l=0;l<2;++l){a2=F.fO[l]
t=new A.ar(B.S,B.Q,B.W,B.X,B.U)
t.r=F.m7.gp(0)
a5.O(new A.r(0+a2*a1*1.05,w),u,t)}}a3=B.j.F(a8*0.8,3)>2.85
for(w=v+a1*0.42,u=a1*0.12,t=a1*0.25,s=a8*0.7,r=a1*0.13,v+=a1*0.05,q=-a1*0.15,p=v+0,o=a1*0.15,l=0;l<2;++l){n=F.fO[l]*a1
m=0+n*0.4
if(a3){k=new A.ar(B.S,B.Q,B.W,B.X,B.U)
k.b=B.aa
k.c=1.6
k.r=B.bp.gp(0)
k.d=B.bF
a5.ah(new A.r(m+q,p),new A.r(m+o,p),k)}else{k=new A.ar(B.S,B.Q,B.W,B.X,B.U)
k.r=B.c.gp(0)
a5.O(new A.r(m,v),t,k)
k=Math.sin(s)
j=new A.ar(B.S,B.Q,B.W,B.X,B.U)
j.r=B.w.gp(0)
a5.O(new A.r(m+k*a1*0.06,p),r,j)}m=new A.ar(B.S,B.Q,B.W,B.X,B.U)
m.r=B.hI.j(0.5).gp(0)
a5.O(new A.r(0+n*0.62,w),u,m)}a5.cP(A.bU(a0.a5(0,new A.r(0,a1*0.5)).aK(0,new A.r(0,a1*0.1)),a1*0.4,a1*0.65),0.2,2.741592653589793,!1,P.ahj(B.bp,1.8))
a4.restore()},
i_t(){var w,v=$.ov(),u=J.e4(10,x.N)
for(w=0;w<10;++w)u[w]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[v.aw(32)]
return"WS"+B.d.hf(u)},
aua(){var w=0,v=A.j(x.a),u,t=2,s=[],r,q,p,o,n,m
var $async$aua=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.c8(),$async$aua)
case 3:if(!e){u=A.T(x.N,x.z)
w=1
break}t=5
w=8
return A.b(A.f5("ngmy_worksheet_project_qr_stashes_v1",null,!1,B.bN),$async$aua)
case 8:r=e
if(r==null){u=A.T(x.N,x.z)
w=1
break}q=J.t(r,"stashes")
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
return A.i($async$aua,v)},
aub(d){return C.i_u(d)},
i_u(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$aub=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.c8(),$async$aub)
case 3:if(!f){w=1
break}t=5
w=8
return A.b(A.hM("ngmy_worksheet_project_qr_stashes_v1",A.J(["stashes",d,"savedAt",new A.V(Date.now(),0,!1).aa().af()],x.N,x.z),!1,!1,B.cO,null),$async$aub)
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
return A.i($async$aub,v)},
aud(d,e,f){var w=0,v=A.j(x.he),u,t,s,r,q,p
var $async$aud=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=3
return A.b(A.c8(),$async$aud)
case 3:if(!h){u=null
w=1
break}t=B.a.i(d)
if(t.length===0){u=null
w=1
break}s=C.i_t()
w=4
return A.b(C.aua(),$async$aud)
case 4:r=h
q=B.a.i(e)
p=B.dU.aO(t)
J.aK(r,s,A.J(["ownerEmail",q,"projectId",f,"payload",B.cV.gcu().aO(p),"usesRemaining",25,"createdAt",new A.V(Date.now(),0,!1).aa().af()],x.N,x.K))
w=5
return A.b(C.aub(r),$async$aud)
case 5:u=new A.a1s("NGMYWSSYNC2|"+s,s,25)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aud,v)},
auc(d){var w=0,v=A.j(x.T),u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$auc=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:i=B.a.i(d)
if(i.length===0){u=null
w=1
break}w=3
return A.b(A.c8(),$async$auc)
case 3:if(!f){u=null
w=1
break}w=4
return A.b(C.aua(),$async$auc)
case 4:q=f
p=J.a7(q)
o=p.h(q,i)
if(!x.f.b(o)){u=null
w=1
break}n=J.a7(o)
m=A.aJ(n.h(o,"usesRemaining"))
l=m==null?null:B.j.M(m)
if(l==null)l=0
if(l<=0){u=null
w=1
break}n=n.h(o,"payload")
t=J.k(n==null?"":n)
if(J.ad(t)===0){u=null
w=1
break}s=null
try{s=B.ca.cI(0,B.cK.aO(t))}catch(h){r=A.ac(h)
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
m.n(0,"lastUsedAt",new A.V(Date.now(),0,!1).aa().af())
p.n(q,i,m)}w=5
return A.b(C.aub(q),$async$auc)
case 5:u=s
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$auc,v)},
ht9(){var w=new A.V(Date.now(),0,!1).aa()
return"wst_"+(1000*w.a+w.b)+"_"+B.cR.aw(999999)},
i_v(d){var w,v,u,t,s,r,q
try{w=A.ahK(d)
if(w==null)return d
v=w
if(J.Mj(v)>960||J.Mi(v)>960){s=v
r=J.Mj(v)>=J.Mi(v)?960:null
v=A.ahH(s,J.Mi(v)>J.Mj(v)?960:null,B.Qq,r)}s=v
u=A.anD(82).U4(s,B.zR)
if(J.ad(u)===0)return d
s=new Uint8Array(A.cf(u))
return s}catch(q){t=A.ac(q)
$.am.$1("[worksheet-thumb] compress failed: "+A.w(t))
return d}},
cp2(d,e){var w=0,v=A.j(x.y),u,t,s
var $async$cp2=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=B.a.i(d)
if(s.length===0||e.length===0){u=!1
w=1
break}t=C.i_v(e)
$.coZ.n(0,s,t)
u=C.bGf(s,t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$cp2,v)},
b4J(d){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$b4J=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:l=B.a.i(d)
if(!J.d5(l,"data:image")){u=null
w=1
break}t=4
r=J.eK(l,",")?B.d.gal(J.lO(l,",")):l
q=B.cK.aO(r)
if(J.ad(q)===0){u=null
w=1
break}p=C.ht9()
w=7
return A.b(C.cp2(p,q),$async$b4J)
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
return A.i($async$b4J,v)},
cp_(d){var w=0,v=A.j(x.T),u,t,s
var $async$cp_=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=B.a.i(d)
if(s.length===0){u=null
w=1
break}if(B.a.a_(s,"data:image")){u=s
w=1
break}w=3
return A.b(N.cp1(s),$async$cp_)
case 3:t=f
if(t==null||t.length===0){u=null
w=1
break}u="data:image/jpeg;base64,"+B.cV.gcu().aO(t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$cp_,v)},
a9J(d){var w=0,v=A.j(x.H),u,t
var $async$a9J=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=N.hGx(d)
if(t==null){w=1
break}$.coZ.W(0,t)
w=3
return A.b(C.bGe(t),$async$a9J)
case 3:case 1:return A.h(u,v)}})
return A.i($async$a9J,v)},
bGf(d,e){return C.irb(d,e)},
irb(d,e){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$bGf=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:l=B.a.i(d)
if(l.length===0||e.length===0){u=!1
w=1
break}t=4
n=$.aPM
w=7
return A.b(n==null?$.aPM=N.hf2():n,$async$bGf)
case 7:r=g
q=new Uint8Array(A.cf(e))
p=J.ml(r,"thumbs","readwrite")
B.iD.me(J.mk(p,"thumbs"),q,l)
w=8
return A.b(J.oy(p),$async$bGf)
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
return A.i($async$bGf,v)},
bGe(d){return C.ir9(d)},
ir9(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p,o,n,m,l
var $async$bGe=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:m=B.a.i(d)
if(m.length===0){w=1
break}t=4
o=$.aPM
w=7
return A.b(o==null?$.aPM=N.hf2():o,$async$bGe)
case 7:r=f
q=J.ml(r,"thumbs","readwrite")
B.iD.Gq(J.mk(q,"thumbs"),m)
w=8
return A.b(J.oy(q),$async$bGe)
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
return A.i($async$bGe,v)}},D,Au,Av,Z,Aw
J=c[1]
A=c[0]
B=c[2]
A8=c[64]
N=c[61]
Q=c[261]
A_=c[168]
S=c[60]
A9=c[236]
L=c[217]
H=c[35]
E=c[227]
T=c[124]
Aa=c[239]
U=c[107]
Ab=c[137]
Ac=c[119]
Ad=c[203]
A0=c[121]
Ae=c[235]
Af=c[44]
R=c[234]
A1=c[204]
Ag=c[255]
Ah=c[194]
Ai=c[207]
M=c[92]
A2=c[88]
Aj=c[174]
A3=c[133]
A4=c[177]
A5=c[202]
Ak=c[258]
A6=c[260]
Al=c[80]
G=c[259]
Am=c[136]
An=c[123]
A7=c[221]
Ao=c[263]
Ap=c[34]
V=c[122]
O=c[197]
Aq=c[208]
W=c[262]
Ar=c[159]
As=c[129]
X=c[248]
P=c[43]
F=c[98]
At=c[33]
I=c[106]
K=c[142]
Y=c[78]
C=a.updateHolder(c[7],C)
D=c[254]
Au=c[79]
Av=c[215]
Z=c[257]
Aw=c[256]
C.apQ.prototype={}
C.b00.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.c,g=h.bk0(),f=h.x!=null&&h.zM(i).length===0
if(h.x!=null)w=f?B.b2:B.bG
else w=h.gUK()?B.bG:B.e0
v=B.a.i(h.b)
if(v.length===0)v="\u2014"
u=A.l(22)
t=A.K(D.bql,B.r,1)
s=x.p
r=A.p(i,A.x(A.a([A.p(i,D.fdx,B.f,i,i,new A.o(B.b2.j(0.12),i,i,A.l(999),i,i,B.n),i,i,i,i,B.hj,i,i,i),B.T,D.fJE,B.aw,A.d(C.xl(new A.V(Date.now(),0,!1),!0),i,i,i,i,i,i,D.fFg,i,i,i)],s),B.l,i,B.e,B.h,0,B.p),B.f,i,i,D.b8p,i,i,i,i,B.Oy,i,i,i)
q=A.l(16)
p=A.K(B.bk,B.r,1)
o=A.K(B.b2.j(0.28),B.r,1)
n=A.hhj(h.d)
o=A.p(B.A,C.b0_(A.fO8(h.e,n),30),B.f,i,i,new A.o(B.ma,i,o,i,i,i,B.a7),i,56,i,i,i,i,i,56)
n=A.d(v,i,i,i,i,i,i,D.fAa,B.K,i,i)
m=A.l(14)
l=A.K(B.bk,B.r,1)
q=A.p(i,A.x(A.a([o,B.P,n,B.bE,D.fJX,B.af,A.p(i,A.x(A.a([D.h_a,B.bE,A.d(A.Bn(h.c),i,i,i,i,i,i,D.fuN,i,i,i)],s),B.l,i,B.e,B.h,0,B.p),B.f,i,i,new A.o(B.c,i,l,m,i,i,B.n),i,i,i,i,B.fg,i,i,1/0)],s),B.l,i,B.e,B.h,0,B.p),B.f,i,i,new A.o(B.aS,i,p,q,i,i,B.n),i,i,i,i,O.amF,i,i,i)
p=A.l(16)
m=A.K(B.bk,B.r,1)
l=j.aTv("Original due",C.xl(h.r,!1))
n=j.aTv("Current due",C.xl(h.f,!1))
o=w.j(0.1)
k=A.l(12)
p=A.a([q,B.T,A.p(i,A.x(A.a([l,B.P,n,B.T,A.p(i,A.d(h.gaNv(),i,i,i,i,i,i,A.m(i,i,w,i,i,i,i,i,i,i,i,12.5,i,i,B.u,i,i,!0,i,0.4,i,i,i,i,i,i),B.K,i,i),B.f,i,i,new A.o(o,i,i,k,i,i,B.n),i,i,i,i,B.Cy,i,i,1/0),B.T,j.cli(),B.P,j.c7S(g,f)],s),B.l,i,B.e,B.h,0,B.p),B.f,i,i,new A.o(B.c,i,m,p,i,i,B.n),i,i,i,i,B.bj,i,i,i)],s)
q=B.a.i(h.y)
if(q.length!==0){o=A.l(14)
n=A.K(B.bk,B.r,1)
B.d.u(p,A.a([B.T,A.p(i,A.x(A.a([D.fKV,B.aw,A.d(q,i,i,i,i,i,i,D.fzn,i,i,i)],s),B.E,i,B.e,B.h,0,B.p),B.f,i,i,new A.o(B.aS,i,n,o,i,i,B.n),i,i,i,i,B.bj,i,i,1/0)],s))}if(h.gaI4()){q=A.l(14)
o=A.K(B.cC,B.r,1.6)
B.d.u(p,A.a([B.T,A.p(i,A.x(A.a([D.h0u,B.P,A.bu(A.l(12),A.ea(new A.a3(1/0,88,A.b4(i,i,i,new A.Xd(h.ax,B.a_,D.fij,!0,3.5,i),B.az),i),B.c,!0),B.aq)],s),B.E,i,B.e,B.h,0,B.p),B.f,i,i,new A.o(B.c,i,o,q,i,i,B.n),i,i,i,i,B.CA,i,i,i)],s))}p.push(B.aB)
p.push(D.fTj)
return A.p(i,A.x(A.a([r,new A.D(B.a14,A.x(p,B.al,i,B.e,B.h,0,B.p),i)],s),B.al,i,B.e,B.N,0,B.p),B.aq,i,i,new A.o(B.c,i,t,u,i,i,B.n),i,i,i,i,i,i,i,1/0)},
aTv(d,e){var w=null
return A.A(A.a([A.E(A.d(d,w,w,w,w,w,w,D.aca,w,w,w),1),A.d(e,w,w,w,w,w,w,D.fvQ,w,w,w)],x.p),B.l,w,B.e,B.h,0,w,w)},
cli(){var w,v,u="Date paid",t=this.c
if(t.x==null)return this.aaF(B.e0,u,"Not paid yet")
w=t.zM(null).length
v=w===0?B.b2:B.bG
return this.aaF(v,u,C.xl(t.x,!0))},
c7S(d,e){var w,v,u=null,t="Missed days"
if(this.c.x!=null&&e)return this.aaF(B.b2,t,"None \u2014 paid on time")
w=d.length
if(w===0)return this.aaF(B.b2,t,"None yet")
w=A.d("Missed days ("+w+")",u,u,u,u,u,u,D.aca,u,u,u)
v=A.U(d).k("N<1,h5>")
v=A.C(new A.N(d,new C.c8n(),v),v.k("ak.E"))
return A.x(A.a([w,B.am,A.bZ(B.bH,v,B.br,u,6,6)],x.p),B.E,u,B.e,B.h,0,B.p)},
aaF(d,e,f){var w=null
return A.A(A.a([A.E(A.d(e,w,w,w,w,w,w,D.aca,w,w,w),1),new A.di(1,B.cm,A.d(f,w,w,w,w,w,w,A.m(w,w,d,w,w,w,w,w,w,w,w,12.5,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),B.e2,w,w),w)],x.p),B.E,w,B.e,B.h,0,w,w)}}
C.bdc.prototype={
a4(d,e){new A.Xd(this.b,B.a_,e,!0,3.5,null).a4(d,e)},
aE(d){return d.b!==this.b}}
C.aq2.prototype={
S(){return new C.aEO(A.a([],x.bp))},
ge3(){return this.c}}
C.aEO.prototype={
Y(){this.a3()
this.Jp()},
Jp(){var w=0,v=A.j(x.H),u,t=this,s
var $async$Jp=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(A.a3h(t.a.c),$async$Jp)
case 3:s=e
if(t.c==null){w=1
break}t.m(new C.dQM(t,s))
case 1:return A.h(u,v)}})
return A.i($async$Jp,v)},
aVt(d,e){var w,v=null,u=this.a.d.a,t=u?B.a_:B.aS,s=A.m(v,v,u?B.bu:B.bh,v,v,v,v,v,v,v,v,13,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),r=A.l(10)
u=(this.a.d.a?B.bu:B.bh).j(0.22)
w=A.l(10)
return A.bz(v,new A.b6(4,r,new A.ay(u,1,B.r,-1)),v,B.bj,v,v,v,v,!0,new A.b6(4,w,new A.ay((this.a.d.a?B.bu:B.bh).j(0.22),1,B.r,-1)),v,v,v,v,v,t,!0,v,v,v,v,new A.b6(4,A.l(10),D.b63),v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,!0,v,s,d,!0,!0,!1,v,v,v,v,v,e,v,v,v,v,v,v,v,v)},
aVs(d){return this.aVt(d,null)},
Qf(d){return this.coX(d)},
coX(d){var w=0,v=A.j(x.T),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$Qf=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
n=d?B.Id:B.eQ
w=7
return A.b(new A.i0().CP(72,900,900,n),$async$Qf)
case 7:q=f
if(q==null){u=null
w=1
break}w=8
return A.b(q.fq(),$async$Qf)
case 8:p=f
n=B.cV.gcu().aO(p)
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
if(n!=null)n.L(x.q).f.T(A.b2(null,null,null,null,null,B.t,null,A.d("Could not pick photo: "+A.w(o),null,null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))
u=null
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$Qf,v)},
b3G(d,e,f,g,h,i){var w,v,u,t,s=this,r=null,q=s.a.d.a,p=q?B.a_:B.aS,o=A.l(10),n=A.K((q?B.bu:B.bh).j(0.18),B.r,1)
if(d)q=B.cU
else q=s.a.d.a?B.bu:B.bh
q=A.W(e,q,r,r,r,18)
w=A.d(i,r,r,r,r,r,r,A.m(r,r,s.a.d.a?B.aS:B.av,r,r,r,r,r,r,r,r,12.5,r,r,B.O,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
v=d?"Added \xb7 optional":h
if(d)u=B.cU
else u=s.a.d.a?B.bu:B.bh
t=x.p
u=A.E(A.x(A.a([w,A.d(v,r,r,r,r,r,r,A.m(r,r,u,r,r,r,r,r,r,r,r,10.5,r,r,B.a9,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],t),B.E,r,B.e,B.h,0,B.p),1)
v=A.ft(r,r,r,r,r,r,r,r,r,r,r,B.cU,r,r,r,r,r,r,r,r,r,r,r,r,r,B.cg)
q=A.a([q,B.ae,u,A.bO(!1,A.d(d?"Change":"Add",r,r,r,r,r,r,r,r,r,r),r,r,!0,r,r,r,f,r,v)],t)
if(d)q.push(A.aH(r,r,r,r,A.W(B.cA,s.a.d.a?B.bu:B.bh,r,r,r,18),r,r,r,g,r,r,r,r,r,B.cg))
return A.p(r,A.A(q,B.l,r,B.e,B.h,0,r,r),B.f,r,r,new A.o(p,r,n,o,r,r,B.n),r,r,r,B.jK,D.bDm,r,r,r)},
DJ(d){return this.bEd(d)},
bEc(){return this.DJ(null)},
bEd(a5){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$DJ=A.e(function(a6,a7){if(a6===1)return A.f(a7,v)
for(;;)switch(w){case 0:a2={}
a3=a5==null
a4=a3?null:a5.b
if(a4==null)a4=""
s=$.ax()
r=new A.au(new A.ba(a4,B.b6,B.aP),s)
if(a3)a4=""
else{a4=a5.c
q=B.j.iG(a4)
p=a5.c
a4=a4===q?B.o.v(B.j.M(p)):B.j.ad(p,2)}o=new A.au(new A.ba(a4,B.b6,B.aP),s)
a4=a3?null:a5.y
if(a4==null)a4=""
n=new A.au(new A.ba(a4,B.b6,B.aP),s)
if(a3){a4=new A.V(Date.now(),0,!1).bS(6048e8)
m=A.c_(a4.gcl(),a4.gcg(),a4.gcz(),0,0,0,0,0)}else{a4=a5.f
m=A.c_(a4.gcl(),a4.gcg(),a4.gcz(),0,0,0,0,0)}a2.a=m
l=a3?null:a5.as
a2.b=l==null?"":l
k=a3?null:a5.at
a2.c=k==null?"":k
a4=a3?null:a5.ax
if(a4==null)a4=[]
j=A.bp(a4,!0,x.cT)
i=a3?null:A.hhj(a5.d)
a2.d=i
h=a3?null:B.a.i(a5.e)
if(h==null)h=""
a2.e=h
if(h.length===0&&i!=null)a2.e=i===B.xg?"\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1":"\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1"
a4=t.c
a4.toString
w=3
return A.b(A.hN(B.w.j(0.55),!0,"Dismiss",a4,new C.dQv(),new C.dQw(a2,t,a5,r,new C.dQx(a2,t),o,n,j),B.eH,!0,x.y),$async$DJ)
case 3:g=a7
f=B.a.i(r.a.a)
e=A.cW(B.a.i(o.a.a))
if(e==null)e=0
d=B.a.i(n.a.a)
r.U$=s
r.P$=0
o.U$=s
o.P$=0
n.U$=s
n.P$=0
if(g!==!0||t.c==null){w=1
break}if(f.length===0||e<=0){t.c.L(x.q).f.T(D.foU)
w=1
break}a0=a2.d
if(a0==null){t.c.L(x.q).f.T(D.fnx)
w=1
break}a1=A.fO8(a2.e,a0)
w=a3?4:6
break
case 4:a3=t.a.c
a4=Date.now()
s=a2.a
q=a2.b
a2=a2.c
p=a0===B.xg?"male":"female"
w=7
return A.b(A.aj5(a3,A.hpN(0,e,a1,null,"",s,p,"iou_"+1000*a4,q,d,null,null,f,a2,j)),$async$DJ)
case 7:w=5
break
case 6:a5.b=f
a5.c=e
a5.y=d
a5.as=a2.b
a5.at=a2.c
a5.d=a0===B.xg?"male":"female"
a5.e=a1
a3=a5.ax
B.d.a8(a3)
B.d.u(a3,j)
a3=a2.a
a3=A.c_(a3.gcl(),a3.gcg(),a3.gcz(),0,0,0,0,0)
a4=a5.f
if(!a3.A(0,A.c_(a4.gcl(),a4.gcg(),a4.gcz(),0,0,0,0,0)))a5.cSQ(a2.a)
w=8
return A.b(A.aj5(t.a.c,a5),$async$DJ)
case 8:case 5:w=9
return A.b(t.Jp(),$async$DJ)
case 9:case 1:return A.h(u,v)}})
return A.i($async$DJ,v)},
aW8(d,e,f,g){var w,v,u,t,s,r,q,p=null
if(g)w=B.cU.j(0.14)
else w=this.a.d.a?B.a_:B.aS
v=A.l(12)
u=A.l(12)
t=A.l(12)
if(g)s=B.cU
else s=(this.a.d.a?B.bu:B.bh).j(0.2)
s=A.K(s,B.r,g?1.5:1)
r=C.b0_(d,18)
if(g)q=B.cU
else q=this.a.d.a?B.aS:B.av
return A.aG(!1,B.a3,!0,v,A.aM(!1,u,!0,A.p(p,A.A(A.a([r,B.bm,A.d(e,p,p,p,p,p,p,A.m(p,p,q,p,p,p,p,p,p,p,p,13,p,p,B.H,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)],x.p),B.l,p,B.b8,B.h,0,p,p),B.f,p,p,new A.o(p,p,s,t,p,p,B.n),p,p,p,p,B.bU,p,p,p),p,!0,p,p,p,p,p,p,p,p,p,p,p,f,p,p,p,p,p,p,p),B.f,w,0,p,p,p,p,p,B.ai)},
T1(d){return this.cGP(d)},
cGP(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$T1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=d.x!=null?3:5
break
case 3:d.x=null
w=4
break
case 5:s=t.c
s.toString
w=6
return A.b(A.hN(B.w.j(0.55),!0,"Dismiss",s,new C.dQP(),new C.dQQ(t,d),B.h8,!0,x.y),$async$T1)
case 6:if(f!==!0){w=1
break}s=Date.now()
d.x=new A.V(s,0,!1)
case 4:w=7
return A.b(A.aj5(t.a.c,d),$async$T1)
case 7:w=8
return A.b(t.Jp(),$async$T1)
case 8:case 1:return A.h(u,v)}})
return A.i($async$T1,v)},
Qe(d,e){return this.bP8(0,e)},
bP8(d,e){var w=0,v=A.j(x.H),u,t=this,s
var $async$Qe=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=3
return A.b(A.lr(s,"Cancel","Delete",e.b+" \xb7 "+A.Bn(e.c)+" will be removed from this device.","Delete this debt?"),$async$Qe)
case 3:if(!g){w=1
break}w=4
return A.b(C.fHz(t.a.c,e.a),$async$Qe)
case 4:w=5
return A.b(t.Jp(),$async$Qe)
case 5:case 1:return A.h(u,v)}})
return A.i($async$Qe,v)},
agx(d){return this.ciJ(d)},
ciJ(d){var w=0,v=A.j(x.H),u=this,t
var $async$agx=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return A.b(A.bS(B.L,null,new C.dQJ(u,d),t,!0,!0,!1,null,!1,!1,x.H),$async$agx)
case 2:return A.h(null,v)}})
return A.i($async$agx,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null
if(m.e)return D.ewK
w=J.dH(m.d,new C.dQR())
v=A.C(w,w.$ti.k("M.E"))
w=J.dH(m.d,new C.dQS())
u=A.C(w,w.$ti.k("M.E"))
t=B.d.cE(v,0,new C.dQT())
w=A.l(18)
s=m.a.d.a
r=s?D.cDA:D.aDD
q=A.K(s?B.cU.j(0.35):B.cU.j(0.18),B.r,1)
s=A.p(l,D.c4h,B.f,l,l,new A.o(B.cU.j(m.a.d.a?0.28:0.14),l,l,A.l(12),l,l,B.n),l,38,l,l,l,l,l,38)
p=x.p
s=A.A(A.a([s,B.as,A.E(A.d("Cashier",l,l,l,l,l,l,A.m(l,l,m.a.d.a?B.aS:B.av,l,l,l,l,l,l,l,l,18,l,l,B.u,l,l,!0,l,-0.2,l,l,l,l,l,l),l,l,l),1),A.aG(!1,B.a3,!0,A.l(12),A.aM(!1,A.l(12),!0,D.ew5,l,!0,l,l,l,l,l,l,l,l,l,l,l,new C.dQU(m),l,l,l,l,l,l,l),B.f,B.cU,0,l,l,l,l,l,B.ai)],p),B.l,l,B.e,B.h,0,l,l)
o=A.E(m.cCT("Open",""+v.length),1)
n=v.length===0?"$0.00":A.Bn(t)
r=A.a([A.p(l,A.x(A.a([s,B.af,A.A(A.a([o,B.ae,A.E(m.b9R(v.length!==0,"Owed",n),1)],p),B.l,l,B.e,B.h,0,l,l)],p),B.E,l,B.e,B.h,0,B.p),B.f,l,l,new A.o(l,l,q,w,l,new A.a8(B.ay,B.aD,B.x,r,l,l),B.n),l,l,l,l,B.amC,l,l,l),B.aB],p)
if(J.ct(m.d)){w=m.a.d.a
s=w?B.ee:B.c
q=A.l(18)
o=A.K((w?B.bu:B.bh).j(0.12),B.r,1)
n=A.p(l,D.bZS,B.f,l,l,new A.o(B.cU.j(0.12),l,l,A.l(16),l,l,B.n),l,52,l,l,l,l,l,52)
w=A.d("Nobody owes you yet",l,l,l,l,l,l,A.m(l,l,m.a.d.a?B.aS:B.av,l,l,l,l,l,l,l,l,15,l,l,B.H,l,l,!0,l,l,l,l,l,l,l,l),B.K,l,l)
r.push(A.p(l,A.x(A.a([n,B.af,w,B.aw,A.d("Add a name, amount, and pay-by date.",l,l,l,l,l,l,A.m(l,l,m.a.d.a?B.bu:B.bh,l,l,l,l,l,l,l,l,12.5,l,l,l,l,1.35,!0,l,l,l,l,l,l,l,l),B.K,l,l)],p),B.l,l,B.e,B.h,0,B.p),B.f,l,l,new A.o(s,l,o,q,l,l,B.n),l,l,l,l,D.bG1,l,l,1/0))}else{w=m.gcod()
s=A.C(new A.N(v,w,A.U(v).k("N<1,v>")),x.l)
if(u.length!==0){q=A.a([B.am,new A.D(D.bHI,A.d("Paid",l,l,l,l,l,l,A.m(l,l,m.a.d.a?B.bu:B.bh,l,l,l,l,l,l,l,l,12,l,l,B.H,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),l)],p)
B.d.u(q,new A.N(u,w,A.U(u).k("N<1,v>")))
B.d.u(s,q)}B.d.u(r,s)}return A.x(r,B.al,l,B.e,B.h,0,B.p)},
b9R(d,e,f){var w,v=this,u=null,t=v.a.d.a?B.w.j(0.22):B.c.j(0.85),s=A.l(14),r=A.K((v.a.d.a?B.bu:B.bh).j(0.12),B.r,1),q=A.d(e,u,u,u,u,u,u,A.m(u,u,v.a.d.a?B.bu:B.bh,u,u,u,u,u,u,u,u,11,u,u,B.O,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)
if(d)w=B.cU
else w=v.a.d.a?B.aS:B.av
return A.p(u,A.x(A.a([q,B.bE,A.d(f,u,1,B.a2,u,u,u,A.m(u,u,w,u,u,u,u,u,u,u,u,16,u,u,B.u,u,u,!0,u,-0.2,u,u,u,u,u,u),u,u,u)],x.p),B.E,u,B.e,B.h,0,B.p),B.f,u,u,new A.o(t,u,r,s,u,u,B.n),u,u,u,u,B.ez,u,u,u)},
cCT(d,e){return this.b9R(!1,d,e)},
coe(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=d.zM(j).length,h=d.bjg()
if(d.x!=null){w=d.zM(j).length
v=w===0?B.cU:B.bG}else if(d.gUK())v=B.bG
else{if(h)w=B.cU
else w=k.a.d.a?B.bu:B.bh
v=w}if(d.x!=null){w=d.zM(j).length
u=d.x
if(w===0){u.toString
t="Paid on time \xb7 "+C.xl(u,!1)}else{u.toString
t="Paid "+C.xl(u,!1)+" \xb7 "+i+" missed"}}else if(h)t="Pays tomorrow"
else{w=d.f
t=i>0?"Due "+C.xl(w,!1)+" \xb7 "+i+" missed":"Due "+C.xl(w,!1)}w=k.a.d.a?B.ee:B.c
u=A.l(18)
if(d.gUK()&&d.x==null)s=B.bG.j(0.35)
else s=(k.a.d.a?B.bu:B.bh).j(0.12)
s=A.K(s,B.r,1)
r=k.a.d.a?j:A.a([new A.ab(0,B.G,B.w.j(0.04),B.cJ,12)],x.V)
q=A.l(18)
p=k.a.d.a?B.bs:B.ma
o=A.K(d.gUK()&&d.x==null?B.bG.j(0.45):B.cU.j(0.28),B.r,1.4)
n=d.x!=null?0.55:1
m=A.hhj(d.d)
o=A.p(B.A,A.d3(C.b0_(A.fO8(d.e,m),24),n),B.f,j,j,new A.o(p,j,o,j,j,j,B.a7),j,46,j,j,j,j,j,46)
p=d.b
n=k.a.d.a?B.aS:B.av
m=x.p
n=A.a([new A.di(1,B.cm,A.d(p,j,1,B.a2,j,j,j,A.m(j,j,n.j(d.x!=null?0.6:1),j,j,j,j,j,j,j,j,14.5,j,j,B.H,j,j,!0,j,j,j,j,j,j,j,j),j,j,j),j)],m)
if(B.a.i(d.as).length!==0||B.a.i(d.at).length!==0||d.gaI4())B.d.u(n,A.a([B.e6,A.W(B.Ps,B.cU.j(0.8),j,j,j,14)],m))
p=A.E(A.x(A.a([A.A(n,B.l,j,B.e,B.h,0,j,j),B.cQ,A.d(t,j,1,B.a2,j,j,j,A.m(j,j,v,j,j,j,j,j,j,j,j,11.5,j,j,B.O,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)],m),B.E,j,B.e,B.h,0,B.p),1)
n=A.Bn(d.c)
l=k.a.d.a?B.aS:B.av
n=A.d(n,j,j,j,j,j,j,A.m(j,j,l.j(d.x!=null?0.55:1),j,j,j,j,j,j,j,j,14,j,j,B.u,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)
return A.p(j,A.aG(!1,B.a3,!0,j,A.aM(!1,q,!0,new A.D(Ag.amq,A.A(A.a([o,B.bb,p,B.ae,A.x(A.a([n,B.bE,A.W(B.eI,(k.a.d.a?B.bu:B.bh).j(0.5),j,j,j,18)],m),B.dO,j,B.e,B.h,0,B.p)],m),B.l,j,B.e,B.h,0,j,j),j),j,!0,j,j,j,j,j,j,j,j,j,j,j,new C.dQL(k,d),j,j,j,j,j,j,j),B.f,B.L,0,j,j,j,j,j,B.ai),B.f,j,j,new A.o(w,j,s,u,r,j,B.n),j,j,j,B.d9,j,j,j,j)}}
C.uT.prototype={}
C.am5.prototype={
B(a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0=null,a1=d.c,a2=a1.y,a3=d.d
if(a2)a3=a3.toUpperCase()
w=a1.w
v=w===B.bn
u=v?B.E:B.l
t=a1.as
s=A.l(t?12:22)
r=a1.e
q=r.j(t?0.6:0.85)
q=A.K(q,B.r,t?1.2:1.6)
p=A.a([new A.ab(0,B.G,B.w.j(0.45),B.cy,16)],x.V)
o=x.p
n=A.a([],o)
m=B.w.j(t?0.07:0.3)
l=A.K(r.j(0.6),B.r,1)
n.push(A.az(a0,A.p(a0,A.W(B.cA,t?a1.f:B.c,a0,a0,a0,17),B.f,a0,a0,new A.o(m,a0,l,a0,a0,a0,B.a7),a0,30,a0,a0,a0,a0,a0,30),B.y,!1,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,d.f,a0,a0,a0,a0,a0,a0,!1,B.a4))
m=v?B.a5:B.A
l=A.a([],o)
k=a1.r
j=k.length!==0
if(j&&!v)l.push(new A.D(B.iS,A.d(k,a0,a0,a0,a0,a0,a0,A.m(a0,a0,r,a0,a0,a0,a0,a0,a0,a0,a0,15,a0,a0,a0,a0,a0,!0,a0,a0,a0,a0,a0,a0,a0,a0),a0,a0,a0),a0))
i=a1.f
h=a1.x
g=h?"Georgia":a0
f=a2?16:19
a2=a2?2.2:0.5
l.push(A.d(a3,a0,1,a0,a0,!1,a0,A.m(a0,a0,i,a0,a0,a0,a0,a0,g,a0,a0,f,a0,a0,B.u,a0,a0,!0,a0,a2,a0,a0,a0,t?a0:D.azN,a0,a0),a0,a0,a0))
if(j&&!v)l.push(new A.D(B.He,A.d(k,a0,a0,a0,a0,a0,a0,A.m(a0,a0,r,a0,a0,a0,a0,a0,a0,a0,a0,15,a0,a0,a0,a0,a0,!0,a0,a0,a0,a0,a0,a0,a0,a0),a0,a0,a0),a0))
a2=A.a([new A.dy(B.dN,m,B.f,A.A(l,B.l,a0,B.e,B.N,0,a0,a0),a0)],o)
v=d.e
m=B.a.i(v)
if(m.length!==0){m=i.j(0.65)
a2.push(new A.D(D.bCy,A.d(v,a0,1,B.a2,a0,a0,a0,A.m(a0,a0,m,a0,a0,a0,a0,a0,a0,a0,a0,10,h?B.cI:B.bq,a0,a0,a0,a0,!0,a0,0.8,a0,a0,a0,a0,a0,a0),w,a0,a0),a0))}n.push(A.E(new A.D(B.fu,A.x(a2,u,a0,B.e,B.N,0,B.p),a0),1))
n.push(D.fj7)
a2=A.a([A.A(n,B.l,a0,B.e,B.h,0,a0,a0)],o)
w=d.r
if(w!=null)B.d.u(a2,A.a([new A.D(B.wx,A.p(a0,a0,B.f,a0,a0,new A.o(a0,a0,a0,a0,a0,new A.a8(B.a5,B.a8,B.x,A.a([B.L,r.j(0.75),B.L],x.O),a0,a0),B.n),a0,1,a0,a0,a0,a0,a0,a0),a0),w],o))
e=new A.D(B.lQ,A.x(a2,B.l,a0,B.e,B.N,0,B.p),a0)
if(a1.z){a2=A.l(t?9:19)
e=A.p(a0,e,B.f,a0,a0,new A.o(a0,a0,A.K(r.j(0.45),B.r,1),a2,a0,a0,B.n),a0,a0,a0,B.hx,a0,a0,a0,a0)}return A.p(a0,e,B.f,a0,a0,new A.o(a0,a0,q,s,p,new A.a8(B.ay,B.aD,B.x,a1.d,a0,a0),B.n),a0,a0,a0,D.bDR,a0,a0,a0,a0)}}
C.aWI.prototype={
B(d){var w,v,u,t,s,r,q=null,p=this.c,o=this.e,n=A.p(q,q,B.f,o.j(0.28),q,q,q,1,q,q,q,q,q,q),m=x.p,l=A.a([],m),k=p.r,j=k.length!==0
if(j)l.push(A.d(k,q,q,q,q,q,q,A.m(q,q,o.j(0.55),q,q,q,q,q,q,q,q,11,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q))
w=p.y
v=this.d
if(w)v=v.toUpperCase()
u=p.w===B.bn?B.bn:B.K
t=o.j(0.6)
s=p.x?"Georgia":q
r=w?1.6:0.6
l.push(A.E(A.d(v,q,1,B.a2,q,q,q,A.m(q,q,t,q,q,q,q,q,s,q,q,10.5,w?B.bq:B.cI,q,B.O,q,q,!0,q,r,q,q,q,q,q,q),u,q,q),1))
if(j)l.push(A.d(k,q,q,q,q,q,q,A.m(q,q,o.j(0.55),q,q,q,q,q,q,q,q,11,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q))
o=A.a([A.A(l,B.l,q,B.e,B.h,0,q,q),B.cQ,n],m)
if(p.z)o.push(new A.D(B.uF,n,q))
return new A.D(B.d9,A.x(o,B.l,q,B.e,B.N,0,B.p),q)}}
C.U3.prototype={
S(){return new C.bgQ()}}
C.bgQ.prototype={
gc2E(){var w=this.d
return w===$?this.d=this.a.c:w},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=A.aE(d,n,x.w).w,l=x.p,k=A.a([D.ewF,D.ewL],l)
for(w=0;w<8;++w){v=D.a5t[w]
u=o.d
if(u===$){u=o.d=o.a.c
t=u}else t=u
s=v.a
r=u===s?B.I0:B.zB
q=t===s
r=A.W(r,q?B.ey:B.bX,n,n,n,17)
q=q?B.c:B.ab
r=A.a([r,B.bm,A.d(v.b,n,n,n,n,n,n,new A.F(!0,q,n,n,n,n,13.5,B.u,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n),n,n,n),B.ae,new A.by(1,B.ba,A.d(v.c,n,1,B.a2,n,n,n,B.B0,n,n,n),n)],l)
u=o.d
if((u===$?o.d=o.a.c:u)===s){s=new A.aP(24,24)
p=new A.ay(B.ey,2,B.r,-1)
s=new A.o(n,n,new A.bF(p,p,p,p),new A.be(s,s,s,s),n,n,B.n)}else s=n
q=o.a
k.push(A.az(n,new A.D(B.eK,A.x(A.a([new A.D(B.n4,new A.c7(B.aL,B.e,B.h,B.l,n,B.p,n,0,r,n),n),A.p(n,new A.dt(!0,new C.am5(v,q.d,q.e,new C.dgp(),n,n),n),B.f,n,n,s,n,n,n,n,n,n,n,n)],l),B.E,n,B.e,B.h,0,B.p),n),B.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.dgq(o,v),n,n,n,n,n,n,!1,B.a4))}k.push(new A.D(D.bEd,A.bI(D.h61,n,new C.dgr(o,d),A.bo(B.b7,n,n,n,n,B.p4,n,n,new A.b9(A.l(16),B.a1),n,n,n)),n))
return A.bm(!0,new A.cN(new A.aY(0,1/0,0,m.a.b*0.9),A.cn(k,n,n,D.bIB,n,n,B.ah,!0),n),!0,!1,B.ag,!0,!0)}}
C.nw.prototype={
aj(){var w=this
return A.J(["id",w.a,"title",w.b,"body",w.c,"updatedAt",w.d.aa().af()],x.N,x.z)},
bfT(d,e,f){return new C.nw(this.a,e,d,f)}}
C.Ir.prototype={
x0(d,e,f,g,h,i,j,k,a0,a1,a2,a3){var w=this,v=k==null?w.a:k,u=a2==null?w.b:a2,t=a0==null?w.c:a0,s=e==null?w.d:e,r=f==null?w.e:f,q=a3==null?w.f:a3,p=i==null?w.r:i,o=g==null?w.w:g,n=a1==null?w.x:a1,m=d==null?w.y:d,l=j==null?w.z:j
return new C.Ir(v,u,t,s,r,q,p,o,n,m,l,h==null?w.Q:h)},
aGc(d){var w=null
return this.x0(w,w,w,w,w,d,w,w,w,w,w,w)},
cOs(d){var w=null
return this.x0(w,w,w,w,d,w,w,w,w,w,w,w)},
bfR(d,e,f){var w=null
return this.x0(d,w,w,w,w,w,w,w,e,w,f,w)},
cP6(d){var w=null
return this.x0(w,w,w,w,w,w,d,w,w,w,w,w)},
cPf(d){var w=null
return this.x0(w,w,w,w,w,w,w,w,w,d,w,w)},
cOq(d){var w=null
return this.x0(w,w,w,d,w,w,w,w,w,w,w,w)},
cPh(d){var w=null
return this.x0(w,w,w,w,w,w,w,w,w,w,w,d)},
cOn(d){var w=null
return this.x0(w,w,d,w,w,w,w,w,w,w,w,w)},
cOi(d){var w=null
return this.x0(w,d,w,w,w,w,w,w,w,w,w,w)},
Gi(d){var w=null
return this.x0(w,w,w,w,w,w,w,d,w,w,w,w)},
cPp(d,e,f,g,h,i,j,k,l,m,n){return this.x0(d,e,f,g,null,h,i,j,k,l,m,n)},
aj(){var w=this
return A.J(["style",w.a,"title",w.b,"subtitle",w.c,"emblem",w.d,"foil",w.e,"titleSize",w.f,"position",w.r,"frame",w.w,"texture",w.x,"author",w.y,"ribbon",w.z,"header",w.Q],x.N,x.z)},
cLX(d,e,f){var w,v,u,t,s,r,q,p,o=null,n="title",m="subtitle",l=new C.bRN(d),k=A.aJ(d.h(0,"emblem")),j=k==null?o:B.j.M(k),i=A.aJ(d.h(0,"titleSize"))
if(i==null)i=o
k=l.$2("style",f)
w=typeof d.h(0,n)=="string"&&B.a.i(A.cP(d.h(0,n))).length!==0?B.a.i(A.cP(d.h(0,n))):o
v=typeof d.h(0,m)=="string"?B.a.i(A.cP(d.h(0,m))):o
u=j!=null&&j>=0&&j<e?j:o
t=l.$2("foil",D.E8.gew(D.E8))
s=i==null?o:B.j.D(i,18,36)
r=l.$2("position",D.a7c)
q=l.$2("frame",D.a6w)
l=l.$2("texture",D.a6s)
p=typeof d.h(0,"author")=="string"?B.a.i(A.cP(d.h(0,"author"))):o
return this.cPp(p,u,t,q,r,A.re(d.h(0,"ribbon"))?A.GV(d.h(0,"ribbon")):o,k,v,l,w,s)}}
C.a_E.prototype={
S(){return new C.aBM(A.a([],x.I),D.P_)},
ge3(){return this.c}}
C.aBM.prototype={
Y(){var w,v=this
v.a3()
v.f=A.Af(0,1)
w=$.ax()
v.z=new A.au(B.ax,w)
v.Q=new A.au(B.ax,w)
v.lh()
w=v.a
C.bEy(w.c,w.d).bG(new C.dh5(v),x.fL)},
t(){var w,v=this,u=v.f
u===$&&A.c()
u.t()
u=v.z
u===$&&A.c()
w=$.ax()
u.U$=w
u.P$=0
u=v.Q
u===$&&A.c()
u.U$=w
u.P$=0
v.a2()},
lh(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$lh=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
w=3
return A.b(C.LM(s.c,s.d),$async$lh)
case 3:r=e
if(t.c==null){w=1
break}t.m(new C.dgU(t,r))
t.axV()
case 1:return A.h(u,v)}})
return A.i($async$lh,v)},
gaut(){var w,v=this
if(!J.ct(v.d)){w=v.r
w=w<0||w>=J.ad(v.d)}else w=!0
return w?null:J.t(v.d,v.r)},
axV(){var w,v,u=this.gaut(),t=this.z
t===$&&A.c()
w=u==null
v=w?null:u.b
t.sb1(0,v==null?"":v)
t=this.Q
t===$&&A.c()
w=w?null:u.c
t.sb1(0,w==null?"":w)},
ch7(d){this.m(new C.dgR(this,d))
this.axV()},
O8(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$O8=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!t.a.f){w=1
break}s=new C.nw(B.o.v(1000*Date.now()),"Untitled page","",new A.V(Date.now(),0,!1))
r=t.a
w=3
return A.b(C.aSN(r.c,r.d,s),$async$O8)
case 3:w=4
return A.b(t.lh(),$async$O8)
case 4:if(t.c==null||J.ct(t.d)){w=1
break}q=J.oz(t.d,new C.dgs(s))
p=q>=0?q:J.ad(t.d)-1
t.m(new C.dgt(t,p))
t.axV()
r=t.f
r===$&&A.c()
w=r.f.length!==0?5:6
break
case 5:w=7
return A.b(r.BO(p+1,B.ck,B.kU),$async$O8)
case 7:case 6:case 1:return A.h(u,v)}})
return A.i($async$O8,v)},
Bs(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$Bs=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!t.a.f){w=1
break}s=t.z
s===$&&A.c()
r=B.a.i(s.a.a)
s=t.Q
s===$&&A.c()
q=B.a.i(s.a.a)
if(r.length===0){w=1
break}s=t.gaut()
s=s==null?null:s.a
if(s==null)s=B.o.v(1000*Date.now())
p=Date.now()
o=t.a
w=3
return A.b(C.aSN(o.c,o.d,new C.nw(s,r,q,new A.V(p,0,!1))),$async$Bs)
case 3:w=4
return A.b(t.lh(),$async$Bs)
case 4:if(t.c==null){w=1
break}t.m(new C.dgV(t))
case 1:return A.h(u,v)}})
return A.i($async$Bs,v)},
OQ(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$OQ=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.gaut()
if(!t.a.f||r==null){w=1
break}s=t.c
s.toString
w=3
return A.b(A.cg(null,null,!0,null,new C.dgB(r),s,null,!0,!0,x.y),$async$OQ)
case 3:if(e!==!0||t.c==null){w=1
break}s=t.a
w=4
return A.b(C.bEj(s.c,s.d,r.a),$async$OQ)
case 4:t.m(new C.dgC(t))
w=5
return A.b(t.lh(),$async$OQ)
case 5:if(t.c!=null){s=t.f
s===$&&A.c()
s=s.f.length!==0}else s=!1
if(s){s=t.f
s===$&&A.c()
s.UN(B.o.D(t.r+1,0,J.ad(t.d)))}case 1:return A.h(u,v)}})
return A.i($async$OQ,v)},
z8(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j
var $async$z8=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.Bs(),$async$z8)
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
return A.b(C.S4(s,r.r,o,p,q),$async$z8)
case 8:if(e&&t.c!=null){s=t.c
s.toString
A.a5(s,!1).N(!0)}w=1
break
case 7:s=t.c
s.toString
r=t.a
w=9
return A.b(C.hHl(s,r.x,r.r),$async$z8)
case 9:n=e
if(n==null||t.c==null){w=1
break}m=1000*Date.now()
s=t.a
w=10
return A.b(C.LM(s.c,s.d),$async$z8)
case 10:l=e
for(s=n.d,r=J.cD(l),k=0;k<s.length;++k){j=s[k]
q=B.a.i(j.a)
if(q.length===0)q="Page "+(k+1)
r.I(l,new C.nw(""+(m+k),q,B.a.i(j.b),new A.V(Date.now(),0,!1)))}r=t.a
w=11
return A.b(C.Bw(r.c,r.d,l),$async$z8)
case 11:w=12
return A.b(t.lh(),$async$z8)
case 12:r=t.c
if(r==null){w=1
break}r.L(x.q).f.T(A.b2(null,null,null,null,null,B.t,null,A.d("The AI wrote your book: "+s.length+" pages.",null,null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$z8,v)},
a1I(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$a1I=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.Bs(),$async$a1I)
case 5:case 4:if(t.c==null){w=1
break}s=t.gz6(0)
r=B.a.i(t.y.c)
if(r.length===0)r="Family Book"
q=B.d.dL(D.A1,new C.dgS(t),new C.dgT())
p=A.a([],x.fD)
o=t.a.w
if(B.a.i(o).length!==0)p.push(new H.mS("Our Family",o,"",""))
for(o=J.aT(t.d);o.C();){n=o.gR(o)
p.push(new H.mS(n.b,n.c,"",""))}o=t.c
o.toString
w=6
return A.b(H.hj3(o,new H.rP(s,r,"",p,new H.v8(q.d,null,null,null,null,"","","")),null),$async$a1I)
case 6:case 1:return A.h(u,v)}})
return A.i($async$a1I,v)},
Oy(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$Oy=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.Bs(),$async$Oy)
case 5:case 4:s=t.c
if(s==null){w=1
break}w=6
return A.b(A.bS(D.ahp,null,new C.dgx(t),s,!0,!0,!0,I.aal,!1,!1,x.N),$async$Oy)
case 6:r=e
if(r==null||t.c==null){w=1
break}q=t.y.cOs(r)
t.m(new C.dgy(t,q))
s=t.a
w=7
return A.b(C.SH(s.c,s.d,q),$async$Oy)
case 7:case 1:return A.h(u,v)}})
return A.i($async$Oy,v)},
Y1(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Y1=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return A.b(A.bS(D.ahp,null,new C.dgD(t),r,!0,!0,!0,I.aal,!1,!1,x.e),$async$Y1)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.m(new C.dgE(t,s))
r=t.a
w=4
return A.b(C.SH(r.c,r.d,s),$async$Y1)
case 4:r=t.f
r===$&&A.c()
if(r.f.length!==0)r.BO(0,B.e5,B.n1)
case 1:return A.h(u,v)}})
return A.i($async$Y1,v)},
bUP(d){var w=d.bT(),v=B.a.b_(B.o.v(w.gcg()),2,"0"),u=B.a.b_(B.o.v(w.gcz()),2,"0")
return""+w.gcl()+"-"+v+"-"+u},
gz6(d){var w=B.a.i(this.y.b)
if(!(w.length!==0)){w=B.a.i(this.a.r)
if(w.length===0)w="Our Family Book"}return w},
B(d){var w,v,u,t,s,r=this,q=null,p=r.c1S()
if(r.e)w=D.ag4
else if(J.ct(r.d)){w=r.y
v=r.gz6(0)
u=r.a.f
t=A.d(u?"Your book is waiting for its first page":"No pages yet",q,q,q,q,q,q,D.fu8,q,q,q)
u=u?"Add pages and turn them like a real book: stories, memories and notes about your family.":"The tree owner has not written any pages on this device."
s=x.p
u=A.a([new A.a3(q,330,new A.D(X.anJ,new C.ZW(w,v,0,q),q),q),B.by,t,B.am,A.d(u,q,q,q,q,q,q,A.m(q,q,D.kP.j(0.8),q,q,q,q,q,q,q,q,q,q,q,q,q,1.4,!0,q,q,q,q,q,q,q,q),B.K,q,q)],s)
if(r.a.f){w=A.a([B.by],s)
if(B.a.i(r.a.x).length!==0)w.push(A.az(q,A.p(q,D.fdj,B.f,q,q,new A.o(q,q,q,A.l(18),A.a([new A.ab(0,B.G,B.dQ.j(0.45),B.J,18)],x.V),E.x6,B.n),q,q,q,q,B.OC,q,q,q),B.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,r.gcKY(),q,q,q,q,q,q,!1,B.a4))
w.push(B.T)
w.push(A.ht(D.bVX,D.h5u,r.gaPa(),q))
B.d.u(u,w)}w=A.as(A.c9(A.x(u,B.l,q,B.e,B.N,0,B.p),B.t,q,B.y,q,B.eA,q,q,B.ah),q,q,q)}else{w=r.r
w=w<0?"Tap the cover to open the book":"Page "+(w+1)+" of "+J.ad(r.d)
w=A.d(w,q,q,q,q,q,q,A.m(q,q,D.kP.j(0.8),q,q,q,q,q,q,q,q,12,q,q,B.O,q,q,!0,q,0.4,q,q,q,q,q,q),q,q,q)
v=r.f
v===$&&A.c()
u=r.w?B.e_:B.BC
u=A.x(A.a([new A.D(D.bFi,w,q),A.E(A.JS(v,new C.dh3(r),J.ad(r.d)+1,q,r.gch6(),u,B.aL),1),r.bH7()],x.p),B.l,q,B.e,B.h,0,B.p)
w=u}v=x.p
return A.c4(q,D.ZN,new A.an(B.a0,q,B.b1,B.t,A.a([D.aRc,A.bm(!0,A.x(A.a([p,A.E(w,1)],v),B.l,q,B.e,B.h,0,B.p),!0,!1,B.ag,!0,!0)],v),q),q,!1,!1,q,q)},
c1S(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=h.a
if(f.f)w=B.a.i(f.x).length!==0||J.cJ(h.d)
else w=!1
f=A.a([],x.fp)
if(w)f.push(new C.KR(B.e9,"AI",h.gbF_(),!0))
if(h.a.f)f.push(new C.KR(B.lS,"Cover",h.gbPI(),!1))
if(h.a.f)f.push(new C.KR(B.wZ,"Header",h.gbKG(),!1))
if(J.cJ(h.d)||B.a.i(h.a.w).length!==0)f.push(new C.KR(B.v6,"Print",h.gcqg(),!1))
if(h.a.f&&J.cJ(h.d)&&h.r>=0){v=h.w
u=v?B.hb:B.jb
t=v?"Save":"Edit"
f.push(new C.KR(u,t,v?h.gcwy():new C.dgO(h),!1))}if(h.a.f)f.push(new C.KR(B.i0,"Add page",h.gaPa(),!1))
v=C.hCS(h.y.Q)
u=h.gz6(0)
t=B.a.i(h.y.c)
if(t.length===0)t="Family Book"
s=J.ad(h.d)
r=J.ad(h.d)===1?"page":"pages"
q=x.p
p=A.a([],q)
for(o=f.length,n=x.O,m=0;m<f.length;f.length===o||(0,A.I)(f),++m){l=f[m]
if(l.d)k=D.dLj
else{k=new A.aP(10,10)
j=A.a([B.c.j(0.14),B.c.j(0.05)],n)
i=new A.ay(E.ku.j(0.5),1,B.r,-1)
j=A.p(g,A.W(l.a,D.kP,g,g,g,17),B.f,g,g,new A.o(g,g,new A.bF(i,i,i,i),new A.be(k,k,k,k),g,new A.a8(B.a5,B.a8,B.x,j,g,g),B.n),g,32,g,g,g,g,g,32)
k=j}j=D.kP.j(0.85)
p.push(new A.by(1,B.ba,A.az(B.bZ,A.x(A.a([k,B.bE,A.d(l.b,g,1,g,g,g,g,new A.F(!0,j,g,g,g,g,9.5,B.H,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g),g,g,g)],q),B.l,g,B.e,B.N,0,B.p),B.y,!1,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,l.c,g,g,g,g,g,g,!1,B.a4),g))}return new C.am5(v,u,t+" \xb7 "+s+" "+r,new C.dgP(h),A.A(p,B.l,g,B.e,B.h,0,g,g),g)},
Ar(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$Ar=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.Bs(),$async$Ar)
case 5:case 4:if(t.c==null){w=1
break}s=A.a([],x.s)
for(r=J.aT(t.d);r.C();){q=r.gR(r)
s.push(q.b+" "+q.c)}p=H.a3w(B.d.aN(s," "))
s=t.c
s.toString
w=6
return A.b(A.cg(null,null,!0,null,new C.dgu(t,p),s,null,!0,!0,x.N),$async$Ar)
case 6:o=e
if(o==null||t.c==null){w=1
break}w=o==="write"?7:9
break
case 7:w=10
return A.b(t.z8(),$async$Ar)
case 10:w=8
break
case 9:w=o==="fix"?11:13
break
case 11:w=14
return A.b(t.Ej(),$async$Ar)
case 14:w=12
break
case 13:w=o==="polish"?15:17
break
case 15:w=18
return A.b(t.FW("Swahili (Kiswahili)",!0),$async$Ar)
case 18:w=16
break
case 17:w=19
return A.b(t.cHr(o==="sw"?"Swahili (Kiswahili)":"English"),$async$Ar)
case 19:case 16:case 12:case 8:case 1:return A.h(u,v)}})
return A.i($async$Ar,v)},
a_0(d,e,f,g,h){var w=null,v=A.l(16),u=B.c.j(0.07),t=A.l(16),s=A.K(E.ku.j(0.3),B.r,1),r=x.p
return new A.D(B.cx,A.aM(!1,v,!0,A.p(w,A.A(A.a([A.p(w,A.W(e,B.c,w,w,w,21),B.f,w,w,new A.o(w,w,w,w,w,E.x6,B.a7),w,42,w,w,w,w,w,42),B.bb,A.E(A.x(A.a([A.d(f,w,w,w,w,w,w,A2.KZ,w,w,w),A.d(g,w,w,w,w,w,w,B.B1,w,w,w)],r),B.E,w,B.e,B.h,0,B.p),1)],r),B.l,w,B.e,B.h,0,w,w),B.f,w,w,new A.o(u,w,s,t,w,w,B.n),w,w,w,w,B.bj,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.dgQ(d,h),w,w,w,w,w,w,w),w)},
Ej(){return this.bUi()},
bUi(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8
var $async$Ej=A.e(function(a9,b0){if(a9===1){s.push(b0)
w=t}for(;;)switch(w){case 0:a6={}
a7=r.c
a7.toString
w=3
return A.b(A.cg(null,null,!0,null,new C.dgH(r),a7,null,!0,!0,x.ei),$async$Ej)
case 3:q=b0
if(q==null||r.c==null){w=1
break}g=A.C(r.d,x.B)
p=g
f=r.y
o=new A.eC("Working on it\u2026",$.ax())
a6.a=!0
a7=r.c
a7.toString
A.cg(null,null,!1,null,new C.dgI(o),a7,null,!0,!0,x.H).fv(new C.dgJ(a6))
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
for(a1=0;a1<8;++a1){i=D.A1[a1]
J.c5(j,i.a)}w=8
return A.b(C.aie(a0,a7,new C.dgK(o),d,l,e,j),$async$Ej)
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
if(l!=null&&a6.a)A.a5(l,!0).eq()
l=o
l.sib($.ax())
J.aTf(l,0)
l=r.c
if(l==null){w=1
break}if(m==null){l=l.L(x.q).f
j=n
l.T(A.b2(null,null,null,null,null,B.t,null,A.d(j==null?y.A:j,null,null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))
w=1
break}l=m.b
a3=l.gcm(l)
w=a3?9:10
break
case 9:l=A.a([],x.I)
for(a4=0;a4<J.ad(p);++a4){if(m.b.am(0,a4)){j=J.t(p,a4)
a7=m.b.h(0,a4).a
a7=j.bfT(m.b.h(0,a4).b,a7,new A.V(Date.now(),0,!1))
j=a7}else j=J.t(p,a4)
l.push(j)}j=r.a
w=11
return A.b(C.Bw(j.c,j.d,l),$async$Ej)
case 11:w=12
return A.b(r.lh(),$async$Ej)
case 12:case 10:w=m.c!=null&&m.c.a!==0?13:14
break
case 13:l=r.y
j=m.c
j.toString
a7=A.a([],x.s)
for(a1=0;a1<8;++a1)a7.push(D.A1[a1].a)
a5=l.cLX(j,12,a7)
l=r.a
w=15
return A.b(C.SH(l.c,l.d,a5),$async$Ej)
case 15:if(r.c!=null)r.m(new C.dgL(r,a5))
l=r.f
l===$&&A.c()
if(l.f.length!==0&&q.a==="cover")l.BO(0,B.e5,B.n1)
a3=!0
case 14:l=r.c
if(l==null){w=1
break}l=l.L(x.q).f
j=A.d(m.a,null,null,null,null,null,null,null,null,null,null)
l.T(A.b2(a3?A.cAx("Undo",new C.dgM(r,p,f),null):null,null,null,null,null,B.t,null,j,null,B.ej,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$Ej,v)},
FW(d,e){return this.cHs(d,e)},
cHr(d){return this.FW(d,!1)},
cHs(a2,a3){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$FW=A.e(function(a4,a5){if(a4===1){s.push(a5)
w=t}for(;;)switch(w){case 0:f={}
e=A.C(r.d,x.B)
d=e
a0=new A.eC("Starting\u2026",$.ax())
f.a=!0
k=r.c
k.toString
A.cg(null,null,!1,null,new C.dgX(a0),k,null,!0,!0,x.H).fv(new C.dgY(f))
q=null
p=null
t=4
o=A.a([],x.L)
for(k=d,j=k.length,i=0;i<k.length;k.length===j||(0,A.I)(k),++i){n=k[i]
J.c5(o,new A.y(n.b,n.c))}m=o
w=a3?7:9
break
case 7:w=10
return A.b(H.a3K(m,new C.dgZ(a0)),$async$FW)
case 10:w=8
break
case 9:w=11
return A.b(C.bG4(new C.dh_(a0),m,a2),$async$FW)
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
if(o!=null&&f.a)A.a5(o,!0).eq()
o=a0
o.sib($.ax())
J.aTf(o,0)
o=r.c
if(o==null){w=1
break}if(p==null){o=o.L(x.q).f
k=q
o.T(A.b2(null,null,null,null,null,B.t,null,A.d(k==null?y.y:k,null,null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))
w=1
break}o=A.a([],x.I)
for(g=0;g<J.ad(d);++g){k=J.t(d,g)
j=J.t(p,g)
o.push(k.bfT(J.t(p,g).b,j.a,new A.V(Date.now(),0,!1)))}k=r.a
w=12
return A.b(C.Bw(k.c,k.d,o),$async$FW)
case 12:w=13
return A.b(r.lh(),$async$FW)
case 13:o=r.c
if(o==null){w=1
break}o=o.L(x.q).f
if(a3)k="I rewrote your Swahili so it reads naturally."
else k="Your book is now in "+(B.a.a_(a2,"Swahili")?"Swahili":"English")+"."
k=A.d(k,null,null,null,null,null,null,null,null,null,null)
o.T(A.b2(A.cAx("Undo",new C.dh0(r,d),null),null,null,null,null,B.t,null,k,null,B.Y,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$FW,v)},
bH7(){var w,v=this,u=null,t=v.r+1,s=t>0,r=s?new C.dgv(v):u
r=A.aH(u,u,u,u,A.W(D.bRA,s?D.kP:B.aT,u,u,u,30),u,u,u,r,u,u,u,u,"Previous page",u)
if(v.a.f&&J.cJ(v.d)&&!v.w&&v.r>=0)s=A.ht(A.W(B.wN,B.GE,u,u,u,16),A.d("Delete page",u,u,u,u,u,u,A.m(u,u,B.GE,u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),v.gbPi(),u)
else{s=v.w?"Writing\u2026 swiping is off while you edit":"Swipe to turn the page"
s=A.d(s,u,u,u,u,u,u,A.m(u,u,D.kP.j(0.65),u,u,u,u,u,u,u,u,11.5,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)}s=A.E(A.as(s,u,u,u),1)
w=t<J.ad(v.d)?new C.dgw(v):u
return A.bm(!0,new A.D(D.bF7,A.A(A.a([r,s,A.aH(u,u,u,u,A.W(B.eI,t<J.ad(v.d)?D.kP:B.aT,u,u,u,30),u,u,u,w,u,u,u,u,"Next page",u)],x.p),B.l,u,B.e,B.h,0,u,u),u),!0,!1,B.ag,!0,!1)}}
C.a_I.prototype={
S(){return new C.bhe(new A.au(B.ax,$.ax()))}}
C.bhe.prototype={
ga2Q(){var w,v=this.e
if(v===$){w=this.a
if(w.c)v="page"
else v=w.d?"book":"cover"
v=this.e=v}return v},
t(){var w=this.d
w.U$=$.ax()
w.P$=0
this.a2()},
gbSU(){switch(this.ga2Q()){case"cover":var w=D.dan
break
case"book":w=D.d5E
break
default:w=D.dC4
break}return w},
B(d){var w,v,u,t,s,r,q=this,p=null,o=A.l(26),n=E.ku.j(0.5),m=x.p,l=A.A(A.a([D.dLk,B.as,D.bKP,A.aH(p,p,p,p,B.lr,p,p,p,new C.diS(d),p,p,p,p,p,p)],m),B.l,p,B.e,B.h,0,p,p),k=A.a([],m),j=q.a
if(j.c)k.push(A.jz(p,p,p,A.d("This page ("+j.e+")",p,p,p,p,p,p,p,p,p,p),p,new C.diT(q),q.ga2Q()==="page",p,p,p,p))
if(q.a.d)k.push(A.jz(p,p,p,D.h00,p,new C.diU(q),q.ga2Q()==="book",p,p,p,p))
k.push(A.jz(p,p,p,D.fNG,p,new C.diV(q),q.ga2Q()==="cover",p,p,p,p))
k=A.bZ(B.bH,k,B.br,p,6,8)
j=B.c.j(0.07)
j=A.aN(p,B.Z,!1,p,!0,B.t,p,A.aO(),q.d,p,p,p,p,p,2,A.bz(p,new A.b6(4,A.l(16),B.a1),p,p,p,p,p,p,!0,p,p,p,p,p,p,j,!0,p,p,p,p,p,p,p,p,p,p,p,p,p,B.ko,"Say it in your own words\u2026",p,p,p,p,p,p,p,p,p,!0,!0,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p),B.y,!0,p,!0,p,!1,p,B.ak,p,p,p,p,p,p,p,p,p,6,3,p,!1,"\u2022",p,p,p,p,p,!1,p,p,!1,p,!0,p,B.ac,p,p,p,p,p,p,p,p,p,p,p,B.dj,!0,B.a6,p,B.ao,p,p,p,p)
w=A.a([],m)
for(v=q.gbSU(),u=v.length,t=0;t<u;++t){s=v[t]
r=A.d(s,p,p,p,p,p,p,B.KW,p,p,p)
w.push(A.n4(p,B.c.j(0.08),r,B.hr,new C.diW(q,s),p,p,p,p))}return A.eG(p,E.Cb,A.c9(A.x(A.a([l,B.T,D.h3l,B.am,k,B.af,j,B.P,A.bZ(B.bH,w,B.br,p,6,6),B.aB,A.dh(D.bVU,p,D.h47,new C.diX(q,d),A.bo(B.b7,p,p,p,p,B.p4,p,p,new A.b9(A.l(16),B.a1),p,p,p)),B.aw,D.fZe],m),B.E,p,B.e,B.N,0,B.p),B.t,p,B.y,p,B.ft,p,p,B.ah),p,p,p,B.Oz,p,B.d6,p,new A.b9(o,new A.ay(n,1.4,B.r,-1)),p)}}
C.a_G.prototype={
S(){return new C.aBP(A.a([],x.gA))},
ge3(){return this.c}}
C.ag0.prototype={}
C.aBP.prototype={
Y(){this.a3()
this.lh()},
lh(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i
var $async$lh=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.a
w=3
return A.b(C.S9(p.c,p.d),$async$lh)
case 3:o=e
n=A.a([],x.gA)
p=J.aT(o)
case 4:if(!p.C()){w=5
break}s=p.gR(p)
r=t.a
q=r.d
q=s==="main"?q:q+"~"+s
m=n
l=C
k=s
w=6
return A.b(C.bEy(r.c,q),$async$lh)
case 6:j=e
i=J
w=7
return A.b(C.LM(t.a.c,q),$async$lh)
case 7:m.push(new l.ag0(k,j,i.ad(e)))
w=4
break
case 5:if(t.c==null){w=1
break}t.m(new C.dhk(t,n))
case 1:return A.h(u,v)}})
return A.i($async$lh,v)},
bb7(d){var w=B.a.i(d.b.b)
if(!(w.length!==0)){w=B.a.i(this.a.f)
if(w.length===0)w="Our Family Book"}return w},
R1(d,e){return this.ciG(0,e)},
ciG(d,e){var w=0,v=A.j(x.H),u=this,t,s
var $async$R1=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return A.b(A.a5(s,!1).ce(A.ed(new C.dhj(u,e),!0,null,x.y)),$async$R1)
case 2:t=g
w=3
return A.b(u.lh(),$async$R1)
case 3:if(t===!0&&u.c!=null)u.c.L(x.q).f.T(D.aV7)
return A.h(null,v)}})
return A.i($async$R1,v)},
FY(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$FY=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(t.d.length>=6){t.c.L(x.q).f.T(D.aV2)
w=1
break}s=t.a
r=s.w
w=B.a.i(r).length===0?3:4
break
case 3:w=5
return A.b(C.ahy(s.c,s.d),$async$FY)
case 5:q=e
w=6
return A.b(t.lh(),$async$FY)
case 6:w=q!=null&&t.c!=null?7:8
break
case 7:w=9
return A.b(t.R1(0,B.d.fc(t.d,new C.dho(q))),$async$FY)
case 9:case 8:w=1
break
case 4:p=t.c
p.toString
o=s.c
n=s.d
w=10
return A.b(C.S4(p,s.f,r,n,o),$async$FY)
case 10:m=e
w=11
return A.b(t.lh(),$async$FY)
case 11:if(m&&t.c!=null)t.c.L(x.q).f.T(D.aV7)
case 1:return A.h(u,v)}})
return A.i($async$FY,v)},
Qt(d,e){return this.cuh(0,e)},
cuh(d,e){var w=0,v=A.j(x.H),u,t=this,s
var $async$Qt=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=3
return A.b(A.cg(null,null,!0,null,new C.dhn(t,e),s,null,!0,!0,x.y),$async$Qt)
case 3:if(g!==!0){w=1
break}s=t.a
w=4
return A.b(C.a3W(s.c,s.d,e.a),$async$Qt)
case 4:w=5
return A.b(t.lh(),$async$Qt)
case 5:case 1:return A.h(u,v)}})
return A.i($async$Qt,v)},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.a.e&&o.d.length<6,l=x.p,k=A.a([],l)
for(w=o.d,v=w.length,u=0;u<w.length;w.length===v||(0,A.I)(w),++u)k.push(o.bHa(w[u]))
if(m){t=6-o.d.length
w=A.l(18)
v=B.c.j(0.05)
s=A.K(E.ku.j(0.6),B.r,1.6)
r=t===1?"space":"spaces"
k.push(A.az(n,new A.fH(0.7142857142857143,A.p(n,A.x(A.a([D.dLl,B.af,D.evI,B.aw,A.d(""+t+" "+r+" left",n,n,n,n,n,n,A.m(n,n,D.kP.j(0.65),n,n,n,n,n,n,n,n,11.5,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],l),B.l,n,B.b8,B.h,0,B.p),B.f,n,n,new A.o(v,n,s,w,n,n,B.n),n,n,n,n,n,n,n,n),n),B.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,o.gcKU(),n,n,n,n,n,n,!1,B.a4))}w=A.l(22)
v=A.K(E.ku.j(0.85),B.r,1.6)
s=A.az(n,A.p(n,D.c30,B.f,n,n,new A.o(B.w.j(0.3),n,A.K(E.ku.j(0.6),B.r,1),n,n,n,B.a7),n,32,n,n,n,n,n,32),B.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.dhp(d),n,n,n,n,n,n,!1,B.a4)
r=A.l(14)
q=B.w.j(0.3)
p=A.K(E.ku.j(0.5),B.r,1)
w=A.p(n,A.A(A.a([s,B.bb,D.bLd,A.p(n,A.d(""+o.d.length+" of 6",n,n,n,n,n,n,D.ft8,n,n,n),B.f,n,n,new A.o(q,n,p,r,n,n,B.n),n,n,n,n,B.hj,n,n,n)],l),B.l,n,B.e,B.h,0,n,n),B.f,n,n,new A.o(n,n,v,w,n,D.c93,B.n),n,n,n,Aw.Ol,D.bD2,n,n,n)
if(o.e)k=D.ag4
else k=k.length===0?D.bdL:A.cm(new C.dhq(k))
return A.c4(n,D.ZN,new A.an(B.a0,n,B.b1,B.t,A.a([D.aRc,A.bm(!0,A.x(A.a([w,A.E(k,1)],l),B.l,n,B.e,B.h,0,B.p),!0,!1,B.ag,!0,!0)],l),n),n,!1,!1,n,n)},
bHa(d){var w,v,u=this,t=null,s=u.bb7(d),r=d.c,q=x.p,p=A.a([A.bR(0,new A.dy(B.dD,B.A,B.f,new A.a3(300,420,new C.ZW(d.b,s,r,t),t),t),0,0,0)],q)
if(u.a.e)p.push(A.ao(t,A.az(t,A.p(t,D.c2i,B.f,t,t,new A.o(B.w.j(0.55),t,A.K(B.aT,B.r,1),t,t,t,B.a7),t,28,t,t,t,t,t,28),B.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new C.dhh(u,d),t,t,t,t,t,t,!1,B.a4),t,t,t,6,6,t))
w=A.d(s,t,1,B.a2,t,t,t,D.fsM,t,t,t)
v=r===1?"page":"pages"
return A.az(t,A.x(A.a([new A.fH(0.7142857142857143,new A.an(B.a0,t,B.ad,B.t,p,t),t),B.P,w,A.d(""+r+" "+v,t,t,t,t,t,t,A.m(t,t,D.kP.j(0.6),t,t,t,t,t,t,t,t,11,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],q),B.l,t,B.e,B.h,0,B.p),B.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new C.dhi(u,d),t,t,t,t,t,t,!1,B.a4)}}
C.KR.prototype={}
C.ZW.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=B.d.dL(D.A1,new C.cPK(m),new C.cPL()),j=m.c,i=D.E8.h(0,j.e),h=A.b1(i==null?4293444714:i)
i=j.r
if(i==="top")w=B.e
else w=i==="bottom"?B.mu:B.b8
v=new C.cPM(h)
i=A.a([new A.ab(0,B.G,B.w.j(0.6),D.esp,28)],x.V)
u=x.p
t=A.a([A.bR(0,A.b4(l,l,l,new C.ber(j.x,h,l),B.az),0,0,0),A.ao(0,A.p(l,l,B.f,l,l,new A.o(l,l,l,l,l,new A.a8(B.a5,B.a8,B.x,A.a([B.w.j(0.45),B.L],x.O),l,l),B.n),l,l,l,l,l,l,l,l),l,l,0,l,0,26)],u)
for(s=0;s<6;++s){r=new A.aP(3,3)
t.push(new A.cK(8,40+s*46,l,l,l,l,A.p(l,l,B.f,l,l,new A.o(h.j(0.7),l,l,new A.be(r,r,r,r),l,l,B.n),l,22,l,l,l,l,l,6),l))}r=j.w
if(r==="double")B.d.u(t,A.a([v.$4(D.anK,8,0.85,2.2),v.$4(D.bI0,5,0.45,1)],u))
else if(r==="single")t.push(v.$4(D.anK,8,0.85,2.4))
else if(r==="corners")t.push(A.bR(0,new A.D(D.bHX,A.b4(l,l,l,new C.bei(h,l),B.az),l),0,0,0))
r=A.W(D.aCB[B.o.D(j.d,0,11)],h.j(0.95),l,l,l,44)
q=A.d(m.d,l,4,B.a2,l,l,l,A.m(l,l,h,l,l,l,l,l,l,l,l,j.f,l,l,B.u,l,1.2,!0,l,0.5,l,l,l,D.azN,l,l),B.K,l,l)
p=A.p(l,l,B.f,h.j(0.7),l,l,l,2,l,l,l,l,l,90)
o=B.a.i(j.c)
if(!(o.length!==0)){o=m.e
if(o===0)o="A family story"
else{n=o===1?"page":"pages"
n=""+o+" "+n+" of our story"
o=n}}o=A.a([r,B.aB,q,B.af,p,B.af,A.d(o,l,l,l,l,l,l,A.m(l,l,h.j(0.85),l,l,l,l,l,l,l,l,14,B.cI,l,l,l,l,!0,l,l,l,l,l,l,l,l),B.K,l,l)],u)
r=B.a.i(j.y)
if(r.length!==0)B.d.u(o,A.a([B.aO,A.d(r,l,2,B.a2,l,l,l,A.m(l,l,h.j(0.9),l,l,l,l,l,l,l,l,13,l,l,B.H,l,l,!0,l,1.2,l,l,l,l,l,l),B.K,l,l)],u))
t.push(A.bR(0,new A.D(D.bIs,A.x(o,B.l,l,w,B.h,0,B.p),l),0,0,0))
if(j.z)t.push(A.ao(l,A.b4(l,l,l,new C.aIS(l),D.fic),l,l,l,46,0,l))
return A.p(l,A.bu(D.aeG,new A.an(B.a0,l,B.ad,B.t,t,l),B.aq),B.f,l,l,new A.o(l,l,l,D.aeG,i,new A.a8(B.ay,B.aD,B.x,k.c,l,l),B.n),l,l,l,l,l,l,l,l)}}
C.ber.prototype={
a4(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=new A.e6()
g.d_(11)
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
l=new A.ar(B.S,B.Q,B.W,B.X,B.U)
l.r=q.j(0.25+g.ai()*0.5).gp(0)
d.O(new A.r(o*v,n*u),0.6+m*1.6,l)}break
case"rays":v=e.a*0.55
u=e.b
q=u*0.1
for(o=this.c,n=x.v,p=0;p<14;++p){k=0.47123889803846897+p*0.1691626813471427
m=$.S()
l=A.a([],n)
j=new A.aI(m.r,B.aj,null,null,l)
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
m=new A.bw()
l.push(m)
l=j.f
if(l!=null)m.ak(l)
j.ab()
m=new A.ar(B.S,B.Q,B.W,B.X,B.U)
m.r=o.j((p&1)===0?0.09:0.03).gp(0)
d.ag(j,m)}break
default:$.S()
w=A.L()
w.r=B.w.j(0.07).gp(0)
for(v=e.a,u=e.b,p=0;p<260;++p)d.O(new A.r(g.ai()*v,g.ai()*u),0.8+g.ai()*1.8,w)
$.S()
h=A.L()
h.r=B.c.j(0.035).gp(0)
for(p=0;p<120;++p)d.O(new A.r(g.ai()*v,g.ai()*u),0.6+g.ai()*1.2,h)}},
aE(d){return d.b!==this.b||!d.c.A(0,this.c)}}
C.bei.prototype={
a4(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k=$.S(),j=A.L(),i=this.b
j.r=i.j(0.9).gp(0)
j.b=B.aa
j.c=2.4
j.d=B.bF
for(w=e.a,v=e.b,v=[D.f7C,new A.ce([w,0,-1,1]),new A.ce([0,v,1,-1]),new A.ce([w,v,-1,-1])],w=v.length,u=x.v,k=k.r,t=0;t<w;++t){s=v[t].a
r=s[0]
q=s[1]
p=s[2]
o=s[3]
s=A.a([],u)
n=new A.aI(k,B.aj,null,null,s)
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
d.ag(n,j)
s=new A.ar(B.S,B.Q,B.W,B.X,B.U)
s.r=i.j(0.9).gp(0)
d.O(new A.r(r+p*9,q+o*9),3,s)}},
aE(d){return!d.b.A(0,this.b)}}
C.uU.prototype={}
C.a_e.prototype={
S(){return new C.bep()}}
C.bep.prototype={
gos(){var w=this.d
return w===$?this.d=this.a.c:w},
gz6(d){var w,v=this.e
if(v===$){w=this.a.c
v=this.e=new A.au(new A.ba(w.b,B.b6,B.aP),$.ax())}return v},
gaDo(){var w,v=this.f
if(v===$){w=this.a.c
v=this.f=new A.au(new A.ba(w.c,B.b6,B.aP),$.ax())}return v},
gat0(){var w,v=this.r
if(v===$){w=this.a.c
v=this.r=new A.au(new A.ba(w.y,B.b6,B.aP),$.ax())}return v},
t(){var w=this,v=w.gz6(0),u=v.U$=$.ax()
v.P$=0
v=w.gaDo()
v.U$=u
v.P$=0
v=w.gat0()
v.U$=u
v.P$=0
w.a2()},
atE(d,e,f,g){var w,v,u,t,s=null,r=A.a([],x.p)
for(w=d.length,v=0;v<w;++v){u=d[v]
t=g.h(0,u)
r.push(A.jz(s,s,s,A.d(t==null?u:t,s,s,s,s,s,s,s,s,s,s),s,new C.d8h(this,f,u),e===u,s,s,s,s))}return A.bZ(B.bH,r,B.br,s,6,8)},
azo(d){var w=null,v=B.c.j(0.07)
return A.bz(w,new A.b6(4,A.l(14),B.a1),w,w,w,w,w,w,!0,w,w,w,w,w,w,v,!0,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,!0,w,B.lY,d,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w)},
B(a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null,d=f.gos(),a0=f.gz6(0),a1=a0.a.a,a2=f.gaDo(),a3=a2.a.a,a4=f.gat0(),a5=d.bfR(a4.a.a,a3,a1)
a1=x.w
a3=A.aE(a6,e,a1).w
a1=A.aE(a6,e,a1).w
d=B.a.i(a5.b)
if(d.length===0)d=f.a.d
d=A.as(new A.a3(190,260,new A.dy(B.dD,B.A,B.f,new A.a3(270,370,new C.ZW(a5,d,f.a.e,e),e),e),e),e,e,e)
a0=A.aN(e,B.Z,!1,e,!0,B.t,e,A.aO(),a0,e,e,e,e,e,2,f.azo("Title on the cover"),B.y,!0,e,!0,e,!1,e,B.ak,e,e,e,e,e,e,e,e,e,1,e,e,!1,"\u2022",e,new C.d8G(f),e,e,e,!1,e,e,!1,e,!0,e,B.ac,e,e,e,e,e,e,e,e,e,e,e,B.dj,!0,B.a6,e,B.ao,e,e,e,e)
a2=A.aN(e,B.Z,!1,e,!0,B.t,e,A.aO(),a2,e,e,e,e,e,2,f.azo("Small line under it (optional)"),B.y,!0,e,!0,e,!1,e,B.ak,e,e,e,e,e,e,e,e,e,1,e,e,!1,"\u2022",e,new C.d8H(f),e,e,e,!1,e,e,!1,e,!0,e,B.ac,e,e,e,e,e,e,e,e,e,e,e,B.dj,!0,B.a6,e,B.ao,e,e,e,e)
w=x.p
v=A.a([],w)
for(u=0;u<8;++u){t=D.A1[u]
s=f.d
if(s===$){s=f.d=f.a.c
r=s}else r=s
q=t.a
p=s.a===q?B.c:B.aT
q=r.a===q
o=new A.ay(p,q?3:1,B.r,-1)
p=A.p(e,e,B.f,e,e,new A.o(e,e,new A.bF(o,o,o,o),e,e,new A.a8(B.ay,B.aD,B.x,t.c,e,e),B.a7),e,46,e,e,e,e,e,46)
q=q?B.c:B.aE
v.push(A.az(e,A.x(A.a([p,B.cQ,A.d(t.b,e,e,e,e,e,e,new A.F(!0,q,e,e,e,e,10.5,B.O,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e),e,e,e)],w),B.l,e,B.e,B.N,0,B.p),B.y,!1,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,new C.d8I(f,t),e,e,e,e,e,e,!1,B.a4))}v=A.bZ(B.bH,v,B.br,e,10,10)
q=A.a([],w)
for(n=0;n<12;++n){s=f.d
p=(s===$?f.d=f.a.c:s).d===n?B.b7.j(0.35):B.c.j(0.07)
m=new A.aP(14,14)
s=f.d
o=new A.ay((s===$?f.d=f.a.c:s).d===n?B.ey:B.L,2,B.r,-1)
q.push(A.az(e,A.p(e,A.W(D.aCB[n],B.c,e,e,e,24),B.f,e,e,new A.o(p,e,new A.bF(o,o,o,o),new A.be(m,m,m,m),e,e,B.n),e,46,e,e,e,e,e,46),B.y,!1,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,new C.d8J(f,n),e,e,e,e,e,e,!1,B.a4))}q=A.bZ(B.bH,q,B.br,e,8,8)
a4=A.aN(e,B.Z,!1,e,!0,B.t,e,A.aO(),a4,e,e,e,e,e,2,f.azo("Author or family name line (optional)"),B.y,!0,e,!0,e,!1,e,B.ak,e,e,e,e,e,e,e,e,e,1,e,e,!1,"\u2022",e,new C.d8K(f),e,e,e,!1,e,e,!1,e,!0,e,B.ac,e,e,e,e,e,e,e,e,e,e,e,B.dj,!0,B.a6,e,B.ao,e,e,e,e)
p=A.d("LETTERING COLOUR",e,e,e,e,e,e,M.vO,e,e,e)
m=A.a([],w)
for(l=D.E8.gdP(D.E8),l=l.gae(l);l.C();){k=l.gR(l)
j=A.b1(k.b)
s=f.d
if(s===$){s=f.d=f.a.c
r=s}else r=s
i=k.a
h=s.e===i?B.ey:B.aT
g=r.e===i
o=new A.ay(h,g?3:1,B.r,-1)
j=A.p(e,e,B.f,e,e,new A.o(j,e,new A.bF(o,o,o,o),e,e,e,B.a7),e,34,e,e,e,e,e,34)
h=g?B.c:B.aE
m.push(A.az(e,A.x(A.a([j,B.bE,A.d(i,e,e,e,e,e,e,new A.F(!0,h,e,e,e,e,10,B.O,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e),e,e,e)],w),B.l,e,B.e,B.N,0,B.p),B.y,!1,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,new C.d8L(f,k),e,e,e,e,e,e,!1,B.a4))}m=A.bZ(B.bH,m,B.br,e,8,10)
l=A.d("TITLE SIZE",e,e,e,e,e,e,M.vO,e,e,e)
k=f.gos()
return new A.D(new A.Q(0,0,0,a3.f.d),A.bm(!0,new A.cN(new A.aY(0,1/0,0,a1.a.b*0.92),A.cn(A.a([D.fYF,B.af,d,B.aO,a0,B.T,a2,B.aB,D.h3T,B.P,v,B.aB,D.fYO,B.P,q,B.aB,a4,B.aB,p,B.P,m,B.aB,l,A.l_(e,9,""+B.j.V(f.gos().f),36,18,new C.d8M(f),k.f),A.d("WHERE THE WORDS SIT",e,e,e,e,e,e,M.vO,e,e,e),B.am,f.atE(D.a7c,f.gos().r,new C.d8N(f),D.dFi),B.af,A.d("BORDER",e,e,e,e,e,e,M.vO,e,e,e),B.am,f.atE(D.a6w,f.gos().w,new C.d8O(f),D.dFo),B.af,A.d("COVER MATERIAL",e,e,e,e,e,e,M.vO,e,e,e),B.am,f.atE(D.a6s,f.gos().x,new C.d8Q(f),D.dGR),B.am,A.iU(e,B.b7,e,B.ag,e,new C.d8R(f),e,e,e,D.fSP,f.gos().z),B.by,A.bI(D.fXl,e,new C.d8S(f,a6),A.bo(B.b7,e,e,e,e,B.p4,e,e,new A.b9(A.l(16),B.a1),e,e,e))],w),e,e,Z.ane,e,e,B.ah,!0),e),!0,!1,B.ag,!0,!0),e)}}
C.aIS.prototype={
a4(d,e){var w,v,u,t=new A.aI($.S().r,B.aj,null,null,A.a([],x.v))
t.E(new A.aZ(0,0))
w=e.a
t.E(new A.aq(w,0))
v=e.b
t.E(new A.aq(w,v))
t.E(new A.aq(w/2,v-12))
t.E(new A.aq(0,v))
t.E(new A.bw())
u=A.L()
u.sap(D.c9M.aG(0,new A.a6(0,0,0+w,0+v)))
d.ag(t,u)},
aE(d){return!1}}
C.bjL.prototype={
a4(a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=null,a0=a5.a,a1=a5.b,a2=0+a0,a3=0+a1
$.S()
w=A.L()
w.sap(D.c8K.aG(0,new A.a6(0,0,a2,a3)))
a4.aD(new A.a6(0,0,a2,a3),w)
v=B.j.cB(a1/112)
u=new A.e6()
u.d_(4)
for(w=x.O,t=a4.c,s=0;s<v;){++s
r=s*112
for(q=r-14,p=q+2,o=-r,n=6;n<a0;){m=14+u.ai()*20
l=56+u.ai()*40
k=D.dam[u.aw(9)]
j=u.aw(14)
J.br(t.save())
if(j===0){j=n+m
t.translate(j,r)
t.rotate(-10.313240312354818,0,0)
t.translate(-j,o)}j=r-l
i=new A.a6(n,j,n+m,j+l)
h=A.bx(i,B.hC)
g=new A.ar(B.S,B.Q,B.W,B.X,B.U)
f=A.ap(k,B.c,0.12)
f.toString
e=A.ap(k,B.w,0.45)
e.toString
g.sap(new A.a8(B.a5,B.a8,B.x,A.a([f,k,e],w),d,d).aG(0,i))
a4.aq(h,g)
g=n+2
j+=10
h=g+(m-4)
e=new A.ar(B.S,B.Q,B.W,B.X,B.U)
e.r=E.ku.j(0.55).gp(0)
a4.aD(new A.a6(g,j,h,j+2),e)
e=new A.ar(B.S,B.Q,B.W,B.X,B.U)
e.r=E.ku.j(0.4).gp(0)
a4.aD(new A.a6(g,q,h,p),e)
t.restore()
j=u.aw(9)===0?18:0
n+=m+1+j}q=r+10
p=new A.ar(B.S,B.Q,B.W,B.X,B.U)
p.sap(D.c82.aG(0,new A.a6(0,r,a2,q)))
a4.aD(new A.a6(0,r,a2,q),p)
p=new A.ar(B.S,B.Q,B.W,B.X,B.U)
p.r=B.w.j(0.5).gp(0)
p.y=B.kX
a4.aD(new A.a6(0,q,a2,q+14),p)}t=A.L()
t.r=D.bhw.j(0.72).gp(0)
a4.aD(new A.a6(0,0,a2,a3),t)
t=a0*0.5
a1*=0.36
a0*=0.95
a3=A.L()
a3.sap(new A.bV(B.A,0.5,B.x,d,0,A.a([D.bpO.j(0.22),B.L],w),d,d).aG(0,A.bW(new A.r(t,a1),a0)))
a4.O(new A.r(t,a1),a0,a3)},
aE(d){return!1}}
C.bcz.prototype={
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=p.c,m=B.a.i(n.c),l=A.ag("[ \t]{2,}",!0,!1,!1,!1),k=A.aL(m,l," ")
m=x.p
l=A.a([],m)
for(w=3;w>=1;--w){v=-w
l.push(new A.cK(14,w*2,v*2.2,v*2,o,o,new A.bM(new A.o(A.ap(D.kP,D.bv0,w/4),o,new A.bF(B.a1,new A.ay(B.w.j(0.12),1,B.r,-1),B.a1,B.a1),B.M9,o,o,B.n),B.bi,o,o),o))}v=x.V
u=A.a([new A.ab(0,B.G,B.w.j(0.35),B.aMO,8)],v)
t=A.a([],m)
for(w=0;w<5;++w){s=new A.aP(2,2)
t.push(A.p(o,o,B.f,o,o,new A.o(E.ku.j(0.6),o,o,new A.be(s,s,s,s),o,o,B.n),o,14,o,o,o,o,o,3))}u=A.p(o,A.x(t,B.l,o,B.r_,B.h,0,B.p),B.f,o,o,new A.o(o,o,o,D.b5M,u,D.c9K,B.n),o,o,o,o,o,o,o,14)
v=A.a([new A.ab(0,B.G,B.w.j(0.4),B.dp,18)],v)
t=A.ao(o,A.b4(o,o,o,new C.aIS(o),D.fi7),o,o,o,26,-2,o)
s=A.a([],m)
r=p.z
q=B.a.i(r)
if(q.length!==0)s.push(new C.aWI(p.y,r,L.j6,o))
r=n.d
q=p.x
if(p.f)n=A.x(A.a([A.aN(o,B.Z,!1,o,!0,B.t,o,A.aO(),p.r,o,o,o,o,o,2,A.bz(o,B.eN,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,A.m(o,o,L.j6.j(0.35),o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),"Page title",o,o,o,o,o,o,o,o,o,!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),B.y,!0,o,!0,o,!1,o,B.ak,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.ac,o,o,o,o,o,o,o,o,o,o,o,D.fHI,!0,B.a6,o,B.ao,o,o,o,o),A.d(q.$1(r),o,o,o,o,o,o,A.m(o,o,L.j6.j(0.45),o,o,o,o,o,o,o,o,11,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),B.T,A.E(A.aN(o,B.Z,!1,o,!0,B.t,o,A.aO(),p.w,o,o,o,o,o,2,A.bz(o,B.eN,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,A.m(o,o,L.j6.j(0.35),o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),"Write your family story here\u2026",o,o,o,o,o,o,o,o,o,!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),B.y,!0,o,!0,o,!0,o,B.ak,o,o,o,o,o,o,o,o,o,o,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.ac,o,o,o,o,o,o,o,o,o,o,o,D.fy6,!0,B.a6,B.AW,B.ao,o,o,o,o),1)],m),B.al,o,B.e,B.h,0,B.p)
else{n=A.a([A.d(n.b,o,o,o,o,o,o,D.fHA,o,o,o),B.aw,A.d(q.$1(r),o,o,o,o,o,o,A.m(o,o,L.j6.j(0.5),o,o,o,o,o,o,o,o,11,B.cI,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),B.P,A.A(A.a([A.E(A.p(o,o,B.f,D.Gp.j(0.35),o,o,o,1,o,o,o,o,o,o),1),new A.D(B.fu,A.d("\u2766",o,o,o,o,o,o,A.m(o,o,D.Gp.j(0.7),o,o,o,o,o,o,o,o,16,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),o),A.E(A.p(o,o,B.f,D.Gp.j(0.35),o,o,o,1,o,o,o,o,o,o),1)],m),B.l,o,B.e,B.h,0,o,o),B.aB],m)
if(k.length===0)n.push(A.d("This page is blank. Tap the pencil to write.",o,o,o,o,o,o,A.m(o,o,L.j6.j(0.4),o,o,o,o,o,o,o,o,16,o,o,o,o,1.7,!0,o,o,o,o,o,o,o,o),o,o,o))
else n.push(A.Za(A.cQ(A.a([A.cQ(o,o,o,o,o,o,o,o,o,D.fBl,B.a.az(k,0,1)),A.cQ(o,o,o,o,o,o,o,o,o,o,B.a.b2(k,1))],x.R),o,o,o,o,o,o,o,o,o,o),o,o,A.m(o,o,L.j6.j(0.93),o,o,o,o,o,o,o,o,16.5,o,o,o,o,1.72,!0,o,o,o,o,o,o,o,o),o))
n=A.c9(A.x(n,B.E,o,B.e,B.h,0,B.p),B.t,o,B.y,o,o,o,o,B.ah)}s.push(A.E(n,1))
s.push(new A.D(B.hZ,A.d("\u2014 "+p.d+" \u2014",o,o,o,o,o,o,A.m(o,o,L.j6.j(0.5),o,o,o,o,o,o,o,o,12,o,o,o,o,o,!0,o,1,o,o,o,o,o,o),B.K,o,o),o))
l.push(A.A(A.a([u,A.E(A.p(o,A.bu(B.M9,new A.an(B.a0,o,B.ad,B.t,A.a([t,new A.D(D.bHt,A.x(s,B.al,o,B.e,B.h,0,B.p),o),A.ao(0,new A.bM(new A.o(o,o,o,o,o,new A.a8(B.a5,B.a8,B.x,A.a([B.w.j(0.16),B.L],x.O),o,o),B.n),B.bi,o,o),o,o,0,o,0,22)],m),o),B.aq),B.f,o,o,new A.o(o,o,o,B.M9,v,D.cah,B.n),o,o,o,o,o,o,o,o),1)],m),B.al,o,B.e,B.h,0,o,o))
return new A.an(B.a0,o,B.ad,B.t,l,o)}}
C.am6.prototype={
S(){return new C.am7(new A.eC(0,$.ax()),new C.bTB(),new C.amp(),D.hGu,null,null)},
gd1(){return this.d}}
C.a1U.prototype={
a7(){return"_Step."+this.b}}
C.am7.prototype={
gCB(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.bEu(w.c,6,w.e,!1)
u.d!==$&&A.bD()
u.d=v
t=v}return t},
ghc(d){var w,v=this,u=v.e
if(u===$){w=C.N7(v.a.c)
v.e!==$&&A.bD()
v.e=w
u=w}return u},
gU3(){var w=this.ghc(0)
return w.gzr()==null?"Babu":B.a.i(w.gzr().b)},
Y(){var w,v=this
v.a3()
w=v.ghc(0).gzr()
w=w==null?null:w.c
v.r.b=w===D.oB
w=v.q1(new C.bRX(v))
w.fX(0)
v.x!==$&&A.aQ()
v.x=w
v.a2N("Come closer, my children. I am "+v.gU3()+", elder of the "+v.a.c.b+" family. Tonight, by this fire, we remember who we are.")},
t(){var w=this,v=w.x
v===$&&A.c()
v.t()
v=w.y
if(v!=null)v.a1(0)
v=w.z
if(v!=null)v.a1(0)
w.w.t()
v=w.f
v.U$=$.ax()
v.P$=0
w.bwx()},
a2N(d){var w=this,v=w.y
if(v!=null)v.a1(0)
w.db=d
w.dx=0
w.r.c=!0
w.y=A.dg(D.alQ,new C.bRR(w))},
bsU(){var w,v=this
if(v.dx>=v.db.length)return
w=v.y
if(w!=null)w.a1(0)
v.m(new C.bS_(v))},
ae7(d){var w=this.r
w.a=d
w.e=this.f.a
w.w=this.cy},
bsM(){return this.baF()},
baF(){var w=this,v=w.gCB()[w.as],u=v.e
u=u.length!==0?u:v.d
w.m(new C.bRS(w))
w.a2N(u)
v=w.z
if(v!=null)v.a1(0)
w.z=A.cz(B.me,new C.bRT(w))},
cM3(){var w=this
w.m(new C.bRW(w))
w.a2N(w.gCB()[w.as].a)},
Ld(d){var w,v,u,t,s,r,q,p=this
if(p.Q!==D.adM)return
w=p.gCB()
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
t.r=s.a+1.5}q=new A.e6()
q.d_(v*7+d)
p.m(new C.bRV(p,d,u,q))
p.a2N(u?D.dqd[q.aw(4)]+" "+w[p.as].d:D.dmN[q.aw(3)]+" "+w[p.as].d)},
kN(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$kN=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.as
q=t.gCB()
p=q.length
w=r+1>=p?3:4
break
case 3:s=C.bGM(t.at,t.ay,p)
t.m(new C.bRY(t,s))
t.a2N(t.at>=q.length-1?"You carry the family now. Never let the fire go out.":"You listened well tonight. Come again, and the fire will burn higher.")
w=5
return A.b(C.BP(t.a.d,s),$async$kN)
case 5:t.cx=f
r=t.a
w=6
return A.b(C.BQ(r.d,r.c.a,"fire",t.at*10),$async$kN)
case 6:t.dy=f
if(t.c!=null)t.m(new C.bRZ())
w=1
break
case 4:++t.as
t.baF()
case 1:return A.h(u,v)}})
return A.i($async$kN,v)},
B(d){var w=this,v=null,u=w.f,t=x.p
return A.c4(v,D.YO,new A.an(B.a0,v,B.ad,B.t,A.a([A.bR(0,new A.en(A.b4(v,v,v,new C.aWN(u,w.r,w.w,u),B.az),v),0,0,0),A.bm(!0,A.x(A.a([w.ccH(0),B.b3,w.bS3()],t),B.l,v,B.e,B.h,0,B.p),!0,!1,B.ag,!0,!0)],t),v),v,!1,!1,v,v)},
ccH(d){var w,v,u,t=this,s=null,r=A.aH(s,s,s,s,B.Qm,s,s,s,new C.bRU(t),s,s,s,s,s,s),q=x.p,p=A.a([],q)
for(w=0;w<t.gCB().length;++w){v=t.as
if(w<v||t.Q===D.b23)v=B.cT
else v=w===v?B.c:B.aT
u=new A.aP(4,4)
p.push(A.p(s,s,B.f,s,s,new A.o(v,s,s,new A.be(u,u,u,u),s,s,B.n),s,7,s,D.bCM,s,s,s,22))}p=A.E(A.x(A.a([D.fPy,A.A(p,B.l,s,B.e,B.h,0,s,s)],q),B.E,s,B.e,B.h,0,B.p),1)
v=A.l(14)
u=A.K(B.fJ,B.r,1)
return new A.D(D.bIF,A.A(A.a([r,p,A.p(s,A.d("\ud83d\udd25 "+B.j.V(t.cy*100)+"%",s,s,s,s,s,s,B.iG,s,s,s),B.f,s,s,new A.o(B.b5,s,u,v,s,s,B.n),s,s,s,s,B.hj,s,s,s)],q),B.l,s,B.e,B.h,0,s,s),s)},
bS3(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.ghc(0).gzr()
if(h==null)w=1
else w=h.c===D.oB?0:1
v=j.dx
u=j.db
t=D.qp.j(0.96)
s=A.l(22)
r=A.K(B.cT,B.r,3)
q=A.b4(i,i,i,new C.bpm(w,i),B.az)
p=A.d(j.Q===D.adM?j.gU3()+" asks":"Elder "+j.gU3(),i,i,i,i,i,i,D.aWm,i,i,i)
o=j.db
o=B.a.az(o,0,Math.min(j.dx,o.length))
n=x.p
o=A.az(B.bZ,A.A(A.a([new A.a3(62,62,q,i),B.as,A.E(A.x(A.a([p,B.bE,A.d(o+(v<u.length?"\u258d":""),i,i,i,i,i,i,D.aWA,i,i,i)],n),B.E,i,B.e,B.h,0,B.p),1)],n),B.E,i,B.e,B.h,0,i,i),B.y,!1,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,j.gbsT(),i,i,i,i,i,i,!1,B.a4)
switch(j.Q.a){case 0:v=A.as(j.aad("Sit down by the fire",j.gbsL()),i,i,i)
break
case 1:v=A.as(j.aad("Ask me, Elder",j.gcM2()),i,i,i)
break
case 2:v=A.a([],n)
for(m=0;u=j.gCB()[j.as].b,m<u.length;++m){q=new A.aP(14,14)
l=new A.ay(D.lF,2.5,B.r,-1)
v.push(A.az(i,A.p(i,A.d(u[m],i,i,i,i,i,i,D.aWw,B.K,i,i),B.f,i,D.afi,new A.o(D.akP,i,new A.bF(l,l,l,l),new A.be(q,q,q,q),i,i,B.n),i,i,i,i,V.wz,i,i,i),B.y,!1,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,new C.bRO(j,m),i,i,i,i,i,i,!1,B.a4))}v=A.bZ(B.bH,v,B.br,i,8,8)
break
case 3:v=j.fr
u=v?B.kb:Ak.aqK
u=A.W(u,v?B.eq:D.lF,i,i,i,i)
q=v?"The fire grows!":"Listen and learn."
q=A.E(A.d(q,i,i,i,i,i,i,A.m(i,i,v?B.eq:D.lF,i,i,i,i,i,i,i,i,i,i,i,B.u,i,i,!0,i,i,i,i,i,i,i,i),i,i,i),1)
v=j.as+1>=j.gCB().length?"Finish":"Next story"
v=A.A(A.a([u,B.ae,q,j.aad(v,j.gqo(j))],n),B.l,i,B.e,B.h,0,i,i)
break
case 4:v=A.a([A.d(""+j.at+" of "+j.gCB().length+" right  \xb7  +"+j.CW+" \u2b50",i,i,i,i,i,i,D.aWO,i,i,i)],n)
u=j.cx
if(u>0){u=C.aR4(u)
q=C.aR4(j.cx)
p=j.cx
k=j.dy?" \xb7 \ud83c\udfc6 new record!":""
v.push(A.d(u.b+" "+q.a+" \xb7 "+p+" stars"+k,i,i,i,i,i,i,D.acc,i,i,i))}v.push(B.P)
v.push(j.aad("Back to the games",new C.bRP(j)))
v=A.x(v,B.l,i,B.e,B.h,0,B.p)
break
default:v=i}return A.p(i,A.x(A.a([o,B.T,v],n),B.E,i,B.e,B.N,0,B.p),B.f,i,i,new A.o(t,i,r,s,D.aE8,i,B.n),i,i,i,B.yP,B.bj,i,i,i)},
aad(d,e){var w=null,v=A.l(16),u=A.K(B.cT,B.r,2)
return A.az(w,A.p(w,A.d(d,w,w,w,w,w,w,A2.KZ,w,w,w),B.f,w,w,new A.o(D.lF,w,u,v,w,w,B.n),w,w,w,w,D.bGm,w,w,w),B.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,e,w,w,w,w,w,w,!1,B.a4)}}
C.bpm.prototype={
a4(d,e){P.hiO(d,e.el(B.J),e.gdm()*0.45,this.b,0,0.4)},
aE(d){return d.b!==this.b}}
C.aBN.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbA())
w.a9$=null
w.a2()},
aY(){this.b5()
this.b3()
this.bB()}}
C.bTB.prototype={}
C.tg.prototype={}
C.bpn.prototype={}
C.amp.prototype={
MG(d){var w,v=this
if(v.a==null||!J.z(v.b,d)){w=v.a
if(w!=null)w.t()
v.a=C.iez(d)
v.b=d}w=v.a
w.toString
return w},
t(){var w=this.a
return w==null?null:w.t()}}
C.aWN.prototype={
a4(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.b.a,i=l.c
d.zq(l.d.MG(e))
w=e.a
v=e.b
u=Math.min(w/450,v/900)
t=d.c
J.br(t.save())
t.translate((w-450*u)/2,(v-900*u)/2)
d.bW(0,u)
l.cBw(d,j)
l.bQC(d,j)
l.cJP(d,j,i)
s=0.8+0.2*Math.sin(j*8)*Math.sin(j*3.7)+i.w*0.4
J.br(t.save())
t.translate(225,580)
d.oj(0,1,0.42)
r=240*(0.6+0.5*i.w)
$.S()
q=A.L()
p=x.O
o=x.n
q.sap(A.we(B.J,r,A.a([D.btL.j(0.55*s),F.NC.j(0.2*s),B.L],p),A.a([0,0.5,1],o),B.x,k,k,0))
d.O(B.J,r,q)
t.restore()
n=A.a([new A.y(528,new C.bTt(l,d,j,i)),new A.y(540,new C.bTu(l,d,j,i)),new A.y(546,new C.bTv(l,d,j,i)),new A.y(574,new C.bTw(l,d,j,i)),new A.y(612,new C.bTx(l,d,j,i)),new A.y(650,new C.bTy(l,d,j,i)),new A.y(656,new C.bTz(l,d,j,i))],x.E)
B.d.aZ(n,new C.bTA())
for(m=0;m<7;++m)n[m].b.$0()
l.bHt(d,j,i)
l.bUg(d,j)
t.restore()
$.S()
t=A.L()
t.sap(A.we(new A.r(w/2,v*0.6),e.gaoq()*0.75,A.a([B.L,D.bhq],p),A.a([0.55,1],o),B.x,k,k,0))
d.aD(new A.a6(0,0,0+w,0+v),t)},
aE(d){return d.c!==this.c||d.d!==this.d},
cBw(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=new A.e6()
h.d_(3)
for(w=0;w<36;++w){v=h.ai()
u=h.ai()
t=Math.sin(e*(1.5+h.ai()*2)+w)
s=h.ai()
t=B.c.j(0.25+0.7*(0.5+0.5*t))
$.S()
r=new A.ar(B.S,B.Q,B.W,B.X,B.U)
r.r=t.gp(0)
d.O(new A.r(v*450,20+u*300),0.8+s*1.1,r)}q=B.j.F(e,17)/1.2
if(q<1){p=new A.r(60+q*220,70+q*90)
d.ah(p,p.aK(0,D.erX),C.iB(B.c.j((1-q)*0.9),1.6))}for(v=e*0.035,u=e*9,t=x.v,o=0;o<3;++o){n=B.j.F(v+o*0.05,1)
s=-20+n*500
r=120+Math.sin(n*9+o)*14+o*12
m=Math.sin(u+o*2)
l=$.S()
k=A.a([],t)
l=new A.aI(l.r,B.aj,null,null,k)
m=r+m*4
k.push(new A.aZ(s-6,m))
l.ab()
j=r-3
r=new A.cc(s-2,j,s,r)
k.push(r)
i=l.f
if(i!=null)r.ak(i)
l.ab()
s=new A.cc(s+2,j,s+6,m)
k.push(s)
r=l.f
if(r!=null)s.ak(r)
l.ab()
s=new A.ar(B.S,B.Q,B.W,B.X,B.U)
s.b=B.aa
s.c=1.6
s.r=D.bk8.gp(0)
s.d=B.bF
s.e=B.dR
d.ag(l,s)}},
bQC(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=0.75+0.25*Math.sin(e*9)*Math.sin(e*5.3)
for(w=e*0.12,v=0.78*g,u=0.7*g,t=0;t<3;++t){s=D.aB5[t]
r=s.a
q=s.c
p=r+q*0.1
o=s.b
n=s.d
m=o-n*0.38
l=A.bU(new A.r(p,m),n*0.74,q*0.5)
k=Ab.yA.j(v)
$.S()
j=new A.ar(B.S,B.Q,B.W,B.X,B.U)
j.r=k.gp(0)
d.c2(l,j)
q=A.bU(new A.r(p+0,m+n*0.1),n*0.4,q*0.28)
m=new A.ar(B.S,B.Q,B.W,B.X,B.U)
m.r=B.wd.j(u).gp(0)
d.c2(q,m)
for(q=r*0.01,n=o-n-s.e*0.9,i=0;i<5;++i){h=B.j.F(w+i/5+q,1)
p=Math.sin(h*6+i)
o=new A.ar(B.S,B.Q,B.W,B.X,B.U)
o.r=D.aib.j(0.16*(1-h)).gp(0)
d.O(new A.r(r+p*6+h*18,n-h*70),4+h*12,o)}}},
cJP(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null
C.bDT(d,D.erT,0.9,e,D.hCj,!1,!1,D.b20,1,!1)
w=$.S().r
v=x.v
u=new A.aI(w,B.aj,g,g,A.a([],v))
u.E(new A.aZ(52,470))
u.E(new A.aq(50,486))
u.E(new A.aq(66,486))
u.E(new A.aq(64,470))
u.E(new A.bw())
t=A.L()
t.r=D.ak8.gp(0)
d.ag(u,t)
C.bDT(d,D.erV,0.95,e,D.hCe,!1,!1,D.b21,1,!0)
t=new A.aI(w,B.aj,g,g,A.a([],v))
t.E(new A.aZ(417,510))
t.E(new A.cc(431,532,445,510))
t.E(new A.aq(441,548))
t.E(new A.cc(431,553,421,548))
t.E(new A.bw())
u=A.L()
u.r=F.G6.gp(0)
d.ag(t,u)
u=A.bU(D.erU,8,28)
t=A.L()
t.r=D.bw5.gp(0)
d.c2(u,t)
C.bDT(d,new A.r(-30+B.j.F(e/26,1)*510,492),0.82,e,D.hCk,!0,!1,D.XB,1,!1)
t=B.j.F(e/11,1)*3.141592653589793*2
s=150+Math.sin(t)*110
r=507+Math.cos(t)*7
q=Math.cos(t)>=0?1:-1
d.c2(A.bU(new A.r(s+q*16,r-6),16,11),C.iB(D.ak_,1.8))
u=q<0
C.bDT(d,new A.r(s-q*6,r),0.62,e,D.hCm,!1,u,D.XB,2.2,!1)
C.bDT(d,new A.r(s-q*32,r+4),0.58,e+1,D.hCi,!1,u,D.XB,2.2,!1)
this.bX_(d,D.ery,e)
for(u=e*0.5,t=e*4,p=0;p<3;++p){o=88+p*17+Math.sin(u+p)*6
n=520+B.o.F(p,2)*6
m=Math.max(0,Math.sin(t+p*2))*4
l=A.bU(new A.r(o,n),8,11)
k=p===1
j=k?D.ajW:D.akx
i=new A.ar(B.S,B.Q,B.W,B.X,B.U)
i.r=j.gp(0)
d.c2(l,i)
l=k?D.ajW:D.akx
k=new A.ar(B.S,B.Q,B.W,B.X,B.U)
k.r=l.gp(0)
d.O(new A.r(o+5,n+(-3+m)),2.6,k)
k=new A.ar(B.S,B.Q,B.W,B.X,B.U)
k.b=B.aa
k.c=1
k.r=B.at.gp(0)
k.d=B.bF
k.e=B.dR
d.ah(new A.r(o+7.5,n+(-2+m)),new A.r(o+10,n+(-1.5+m)),k)
o+=-1
k=new A.ar(B.S,B.Q,B.W,B.X,B.U)
k.b=B.aa
k.c=1
k.r=B.at.gp(0)
k.d=B.bF
k.e=B.dR
d.ah(new A.r(o,n+4),new A.r(o,n+8),k)}h=e<f.f
u=A.bU(D.a9d,15+Math.sin(e*2)*0.8,40)
t=A.L()
t.r=D.aiA.gp(0)
d.c2(u,t)
u=A.bU(D.a9d.a5(0,new A.r(-14,h?-9:-2)),12,15)
t=A.L()
t.r=D.bmf.gp(0)
d.c2(u,t)
t=new A.aI(w,B.aj,g,g,A.a([],v))
t.E(new A.aZ(130,592-(h?16:6)))
t.E(new A.aq(134,592-(h?22:9)))
t.E(new A.aq(138,592-(h?16:6)))
t.E(new A.bw())
u=A.L()
u.r=D.bmp.gp(0)
d.ag(t,u)
u=D.a9d.a5(0,new A.r(-17,h?-9:-2))
t=A.L()
t.r=B.ic.gp(0)
d.O(u,1.1,t)
v=new A.aI(w,B.aj,g,g,A.a([],v))
v.E(new A.aZ(168,590))
w=Math.sin(e*8)
v.E(new A.cc(180,588+w*(h?6:0),178,595))
d.ag(v,C.iB(D.aiA,3.5))},
bX_(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=Math.max(0,Math.sin(f*0.6))*9,k=e.a5(0,new A.r(Math.sin(f*0.25)*10,0))
for(w=[-9,-4,6,11],v=w.length,u=k.a,t=k.b,s=t+3,r=f*2,q=t+16,p=0;p<v;++p){o=w[p]
n=Math.sin(r+o)
$.S()
m=new A.ar(B.S,B.Q,B.W,B.X,B.U)
m.b=B.aa
m.c=2
m.r=D.Z0.gp(0)
m.d=B.bF
m.e=B.dR
d.ah(new A.r(u+o,s),new A.r(u+(o+n*1.5),q),m)}w=A.bU(k,17,32)
v=$.S()
r=A.L()
r.r=D.G4.gp(0)
d.c2(w,r)
r=A.bU(k.a5(0,D.er_),7,26)
w=A.ap(D.G4,B.w,0.12)
w.toString
q=A.L()
q.r=w.gp(0)
d.c2(r,q)
v=new A.aI(v.r,B.aj,null,null,A.a([],x.v))
v.E(new A.aZ(u+13,t-3))
v.E(new A.aq(u+22,t-8+l))
v.E(new A.aq(u+20,t+l-0.5))
v.E(new A.aq(u+12,s))
v.E(new A.bw())
s=A.L()
s.r=D.G4.gp(0)
d.ag(v,s)
s=A.bU(k.a5(0,new A.r(24,-7+l)),9,12)
v=A.L()
v.r=D.G4.gp(0)
d.c2(s,v)
v=-11+l
d.ah(k.a5(0,new A.r(22,v)),k.a5(0,new A.r(21,-17+l)),C.iB(D.Z0,1.6))
d.ah(k.a5(0,new A.r(26,v)),k.a5(0,new A.r(28,-16+l)),C.iB(D.Z0,1.6))
v=k.a5(0,new A.r(26,-8+l))
s=A.L()
s.r=B.w.gp(0)
d.O(v,0.9,s)
d.ah(k.a5(0,new A.r(26,-3+l)),k.a5(0,new A.r(26,1+l)),C.iB(D.bp6,1.4))
d.ah(k.a5(0,D.etX),k.a5(0,new A.r(-19,-7+Math.sin(f*7)*2)),C.iB(D.G4,2.4))},
bUe(a6,a7,a8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5
for(w=0;w<14;++w){v=w*3.141592653589793*2/14
u=Math.cos(v)
t=Math.sin(v)
if(Math.sin(v)<0){u=A.bU(new A.r(225+u*36,574+(t*13+6)),8,11)
$.S()
t=new A.ar(B.S,B.Q,B.W,B.X,B.U)
t.r=D.buK.gp(0)
a6.c2(u,t)}}u=A.bU(D.a9f.a5(0,B.cy),17,52)
$.S()
t=A.L()
t.r=D.bgZ.gp(0)
a6.c2(u,t)
t=A.bU(D.a9f.a5(0,B.cy),12,44)
u=D.bkx.j(0.6+0.3*Math.sin(a7*6))
s=A.L()
s.r=u.gp(0)
a6.c2(t,s)
for(r=0;r<3;++r){v=D.dmd[r]
u=225+Math.cos(v)*3
t=Math.cos(v)
s=Math.sin(v)
q=Math.cos(v)
p=Math.sin(v)
o=new A.ar(B.S,B.Q,B.W,B.X,B.U)
o.b=B.aa
o.c=7
o.r=D.Gh.gp(0)
o.d=B.bF
o.e=B.dR
a6.ah(new A.r(u+t*24,579+s*4),new A.r(u-q*24,579-p*4),o)
o=Math.cos(v)
p=Math.sin(v)
q=Math.cos(v)
s=Math.sin(v)
t=D.BQ.j(0.6)
n=new A.ar(B.S,B.Q,B.W,B.X,B.U)
n.b=B.aa
n.c=2
n.r=t.gp(0)
n.d=B.bF
n.e=B.dR
a6.ah(new A.r(u+o*24,579+(p*4-2)),new A.r(u-q*24,579-(s*4+2)),n)}m=46+80*a8.w
l=[D.f3K,D.f4i,D.f5n,D.f5I,D.f5l]
for(u=a7*8,t=a7*15,s=a7*3.3,q=x.v,k=0;k<3;++k){j=[1,0.72,0.42][k]
i=[D.bs6,D.bos,D.bua][k]
for(p=l.length,o=k===0,n=1-k*0.15,r=0;r<p;++r){h=l[r]
g=h.b
f=h.c
e=m*g*j*(0.9+0.12*Math.sin(u+f)+0.06*Math.sin(t+f*2))
d=Math.sin(s+f)*5*(e/m)
a0=225+h.a*n
a1=(12+8*a8.w)*g*j
g=$.S()
f=A.a([],q)
a2=new A.aI(g.r,B.aj,null,null,f)
f.push(new A.aZ(a0-a1,578))
a2.ab()
g=a0+d*0.6
a3=new A.kn(a0-a1*1.1,578-e*0.45,g-a1*0.2,578-e*0.7,a0+d,578-e)
f.push(a3)
a4=a2.f
if(a4!=null)a3.ak(a4)
a2.ab()
g=new A.kn(g+a1*0.3,578-e*0.65,a0+a1*1.15,578-e*0.4,a0+a1,578)
f.push(g)
a3=a2.f
if(a3!=null)g.ak(a3)
a2.ab()
g=new A.bw()
f.push(g)
f=a2.f
if(f!=null)g.ak(f)
a2.ab()
g=new A.ar(B.S,B.Q,B.W,B.X,B.U)
g.r=i.j(o?0.9:0.95).gp(0)
a6.ag(a2,g)}}for(u=a7*1.5,w=0;w<22;++w){a5=B.j.F(a7*(0.35+B.o.F(w,5)*0.06)+w/22,1)
t=Math.sin(w*1.9+u)
s=a8.w
q=B.o.F(w,3)
p=G.akv.j((1-a5)*0.9)
$.S()
o=new A.ar(B.S,B.Q,B.W,B.X,B.U)
o.r=p.gp(0)
a6.O(new A.r(225+t*(10+a5*26),564-a5*(110+80*s)),1.2+q*0.6,o)}for(u=a7*0.1,t=574-m,w=0;w<6;++w){a5=B.j.F(u+w/6,1)
s=Math.sin(a5*5+w)
q=D.aib.j(0.1*(1-a5))
$.S()
p=new A.ar(B.S,B.Q,B.W,B.X,B.U)
p.r=q.gp(0)
a6.O(new A.r(225+s*16+a5*12,t-a5*120),7+a5*20,p)}},
bUg(d,e){var w,v,u,t,s,r,q,p,o,n
for(w=e*0.3,v=e*3,u=e*0.7,t=e*1.4,s=0;s<16;++s){r=B.j.F(s*83+Math.sin(w+s)*40+v,450)
q=420+B.o.F(s*37,300)+Math.sin(u+s*2)*26
p=Math.max(0,Math.sin(t+s*1.7))
o=D.bwg.j(0.18*p)
$.S()
n=new A.ar(B.S,B.Q,B.W,B.X,B.U)
n.r=o.gp(0)
d.O(new A.r(r,q),5,n)
n=new A.ar(B.S,B.Q,B.W,B.X,B.U)
n.r=D.bpT.j(0.9*p).gp(0)
d.O(new A.r(r,q),1.4,n)}},
c62(d,e){switch(d){case 0:return e.b?D.hCf:D.b1z
case 1:return e.b?D.hCl:D.b1x
case 2:return D.b1w
case 3:return D.b1v
case 4:return D.b1y
default:return D.b1A}},
aDC(d,e){return(0.2+0.8*Math.abs(Math.sin(d*10+e)))*(0.55+0.45*Math.sin(d*3.1+e*2))},
Rl(d,e,f,g){var w,v=this,u=D.a6E[e],t=v.c62(e,g),s=new C.bpn(),r=f-g.e,q=f<g.f,p=g.r,o=g.c,n=(Math.sin(f*1.3+e*7.1)+Math.sin(f*2.1+e*3.7)*0.6+Math.sin(f*0.7+e*11.3)*0.4)/2,m=D.a6E[e],l=e===0
m=B.j.D(((l?D.aMG:D.aMM).a-m.a.a)/160,-1,1)*0.8+n*0.25
s.y=m
s.z=l?0.35:-0.3+n*0.2
m=s.e=m*0.55
s.Q=D.a9k
s.as=D.Ez
if(l){s.a=o?v.aDC(f,0):0
p=g.a
l=p===3&&g.d?0.7:0
w=p===4?0.8:0
s.b=0.3+l+w
s.c=p===2?0.5:0.1
s.f=n*0.05
if(o){s.r=Math.sin(f*4.2)*1.4
p=new A.r(46+Math.sin(f*3.1)*10,-64+Math.sin(f*4.3)*13)
s.as=p
s.Q=new A.r(-40+Math.sin(f*2.2+1)*4,-40+Math.sin(f*3.4)*6)}else p=D.Ez
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
s.x=Math.max(0,Math.sin(p))*3}else if(g.a===3&&!g.d){s.as=D.er7
s.e=m+Math.sin(r*5)*0.2*Math.max(0,1-r/2)
s.b=-0.2}}else{s.b=0.3+0.1*Math.sin(f*0.5+e)
s.w=2+(o?Math.sin(f*1.6+e)*1.6:0)
if(o)s.r=Math.max(0,Math.sin(f*1.9+e*2))*2.2
if(g.a===2){s.c=0.6
s.w=4
if(e===2)s.as=D.est
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
s.Q=D.euT
s.as=D.aMZ}if(e===2&&g.x!=null&&f<g.y){s.a=v.aDC(f,5)
s.b=0.4
s.as=new A.r(34+Math.sin(f*3)*6,-70+Math.sin(f*4)*8)}if(e===g.Q&&g.z!=null&&f<g.as){s.a=v.aDC(f,e*3)
s.b=0.5
s.c=0.4}}C.hBs(d,u.a,u.b*1.2,t,s,f,e,null)},
bHt(d,e,f){var w=new C.bTs(d),v=f.z
if(v!=null&&e<f.as)w.$2(f.Q,v)
v=f.x
if(v!=null&&e<f.y)w.$2(2,v)},
gd6(d){return this.c}}
C.ag9.prototype={
a7(){return"_Stand."+this.b}}
C.ae7.prototype={}
C.lv.prototype={}
C.bSc.prototype={
bC4(d){var w,v,u,t,s=A.T(x.N,x.P)
for(w=this.b,v=w.length,u=0;u<w.length;w.length===v||(0,A.I)(w),++u){t=w[u]
s.n(0,t.a,t)}this.c!==$&&A.aQ()
this.c=s},
Gd(d){var w,v,u,t,s,r=A.a([],x.u)
for(w=this.b,v=w.length,u=d.a,t=0;t<w.length;w.length===v||(0,A.I)(w),++t){s=w[t]
if(s.d===u)r.push(s)}B.d.aZ(r,new C.bSd())
return r},
arG(d){var w,v,u,t,s,r=d.e
if(r==null)w=null
else{v=this.c
v===$&&A.c()
w=v.h(0,r)}if(w!=null)return w
for(r=this.b,v=r.length,u=d.a,t=0;t<v;++t){s=r[t]
if(s.e===u)return s}return null},
aNk(d){var w,v,u,t,s,r,q,p=A.a([],x.u)
for(w=this.b,v=w.length,u=d.a,t=d.d,s=0;s<w.length;w.length===v||(0,A.I)(w),++s){r=w[s]
if(r.a!==u){q=r.d
q=q!=null&&q===t}else q=!1
if(q)p.push(r)}return p},
amP(d){var w,v,u=A.aR(x.N),t=d,s=0
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
gzr(){var w=this.b
if(w.length===0)return null
w=A.C(w,x.P)
B.d.aZ(w,new C.bSe(this))
return B.d.gH(w)}}
C.aus.prototype={}
C.zC.prototype={}
C.al0.prototype={
gC7(d){var w
if(B.a.i(this.a).length!==0){w=this.b
w=new A.Y(w,new C.bN0(),A.U(w).k("Y<1>")).gJ(0)>=2&&B.a.i(w[this.c]).length!==0}else w=!1
return w},
aj(){var w=this
return A.J(["q",w.a,"a",w.b,"c",w.c,"s",w.d],x.N,x.z)}}
C.MS.prototype={
gapI(d){var w,v,u,t,s=A.a([],x.b)
for(w=this.c,v=w.length,u=0;u<w.length;w.length===v||(0,A.I)(w),++u){t=w[u]
if(t.gC7(0))s.push(t)}return s},
aj(){var w,v,u,t,s,r,q=this.b,p=A.a([],x.Y)
for(w=this.c,v=w.length,u=x.N,t=x.z,s=0;s<w.length;w.length===v||(0,A.I)(w),++s){r=w[s]
p.push(A.J(["q",r.a,"a",r.b,"c",r.c,"s",r.d],u,t))}return A.J(["id",this.a,"title",q,"qs",p],u,t)},
d2i(){var w,v,u,t,s,r,q,p,o,n,m,l=A.a([],x.J)
for(w=this.gapI(0),v=w.length,u=x.s,t=0;t<w.length;w.length===v||(0,A.I)(w),++t){s=w[t]
r=s.b
q=B.a.i(r[s.c])
p=A.a([],u)
for(o=r.length,n=0;n<r.length;r.length===o||(0,A.I)(r),++n){m=B.a.i(r[n])
if(m.length!==0)p.push(m)}l.push(new C.lv(B.a.i(s.a),p,B.d.cn(p,q),"The right answer is "+q+".","","creator",s.d))}return l}}
C.baN.prototype={}
C.aab.prototype={}
C.bi4.prototype={}
C.ag7.prototype={}
C.akj.prototype={
S(){return new C.akk(B.bC,A.a([],x.cC),A.a([],x.e4),null,null)},
gd1(){return this.d}}
C.akk.prototype={
gMX(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.bEu(w.c,8,w.e,!1)
u.d!==$&&A.bD()
u.d=v
t=v}return t},
gbb0(){var w,v=this,u=v.e
if(u===$){w=v.q1(v.gccJ())
v.e!==$&&A.bD()
v.e=w
u=w}return u},
Y(){this.a3()
this.gbb0().fX(0)},
t(){this.gbb0().t()
this.bws()},
fX(d){this.m(new C.bLa(this))},
ccK(d){var w=this,v=Math.min(0.05,(d.a-w.f.a)/1e6)
w.f=d
w.fI(0,v)
if(w.c!=null)w.m(new C.bL5())},
b9m(){var w,v,u,t=this,s=t.r
B.d.a8(s)
w=t.gMX()
v=w[t.x].b.length
for(u=0;u<v;++u)s.push(new C.bi4(u,(u+0.5)/v,w[t.x].b[u]))},
fI(d,e){var w,v,u,t,s,r,q,p,o,n,m=this
m.dx+=e
if(!m.ch||m.CW)return
w=m.cy
m.cy=w+(m.db-w)*Math.min(1,e*9)
for(w=m.w,v=w.length,u=e*1.4,t=0;t<v;++t){s=w[t]
s.a=s.a+s.c*e
s.b=s.b+s.d*e
s.f-=u}B.d.bq(w,new C.bLb())
w=m.fx
if(w>0){m.fx=w-e
for(w=m.r,v=w.length,t=0;t<v;++t)w[t].r+=e
if(m.fx<=0)m.c8S()
return}for(w=m.r,v=w.length,t=0;t<w.length;w.length===v||(0,A.I)(w),++t){r=w[t]
if(r.e||r.f)continue
r.d=r.d+e/(9.5-Math.min(m.x,6)*0.6)
r.r+=e
u=r.a
q=r.b+Math.sin(m.dx*1.7+u)*0.012
p=r.d
if(p>=0.74&&p<=0.86&&Math.abs(q-m.cy)<0.12){r.e=!0
w=m.gMX()
if(u===w[m.x].c){v=++m.as
m.at=Math.max(m.at,v);++m.Q
o=100+B.j.V((1-r.d)*100)+20*Math.min(v-1,4)
m.z+=o
m.fy=o
m.go=m.dx
v=m.cy
m.id=v
m.atc(v,0.8,B.cT)
m.dy="Yes! "+w[m.x].d
m.fr=m.dx+2
m.fx=1.8}else{m.atc(m.cy,0.8,G.nq)
m.aZT("That was not it. "+w[m.x].d)}return}if(p>0.9){r.f=!0
m.atc(q,0.88,D.lF)
p=m.gMX()[m.x]
n=p.c
if(u===n){m.aZT("The right gourd fell! It was "+p.b[n]+".")
return}}}},
atc(d,e,f){var w,v,u,t=new A.e6()
t.d_(B.j.V(this.dx*1000))
for(w=this.w,v=0;v<14;++v){u=t.ai()*3.141592653589793*2
w.push(new C.ag7(d,e,Math.cos(u)*0.25,-0.1-Math.abs(Math.sin(u))*0.35,f))}},
aZT(d){var w,v=this
v.as=0
w=--v.y
v.dy=d
v.fr=v.dx+2.4
v.fx=2.2
if(w<=0){v.fx=0
v.Qu()}},
c8S(){var w=this
if(w.x+1>=w.gMX().length){w.Qu()
return}++w.x
w.b9m()},
Qu(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$Qu=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:u.CW=!0
t=u.Q
s=u.gMX().length
r=C.bGM(t,u.at,s)
u.ax=r
if(u.c!=null)u.m(new C.bL3())
w=2
return A.b(C.BP(u.a.d,r),$async$Qu)
case 2:u.ay=e
t=u.a
w=3
return A.b(C.BQ(t.d,t.c.a,"catch",u.z),$async$Qu)
case 3:u.cx=e
if(u.c!=null)u.m(new C.bL4())
return A.h(null,v)}})
return A.i($async$Qu,v)},
B(d){var w,v=this,u=null
if(v.CW)w=v.ccI()
else w=v.ch?v.ccL():A.as(new A.D(B.eA,A.x(A.a([D.aXM,B.P,D.fRf,B.T,D.fXq,B.e1,C.uy("Play",v.geY(v),B.cT,B.hc,D.fA)],x.p),B.l,u,B.e,B.N,0,B.p),u),u,u,u)
return new C.tH("Calabash Catch",w,B.f5,u)},
ccL(){var w,v,u,t,s=this,r=null,q=x.p,p=A.a([],q)
for(w=0;w<3;++w){v=w<s.y
u=v?B.hA:B.HK
p.push(A.W(u,v?B.aA:B.bX,r,r,r,22))}p.push(B.b3)
v=s.x
u=s.gMX()
p.push(A.d(""+(v+1)+"/"+u.length,r,r,r,r,r,r,D.aWl,r,r,r))
p.push(B.bb)
v=A.l(14)
p.push(A.p(r,A.d(""+s.z,r,r,r,r,r,r,B.iG,r,r,r),B.f,r,r,new A.o(B.bx,r,r,v,r,r,B.n),r,r,r,r,B.CB,r,r,r))
p=A.A(p,B.l,r,B.e,B.h,0,r,r)
v=A.l(18)
t=A.K(B.cT,B.r,3)
return A.x(A.a([new A.D(D.bE8,p,r),A.p(r,A.d(u[s.x].a,r,r,r,r,r,r,D.fBd,B.K,r,r),B.f,r,r,new A.o(D.qp,r,t,v,r,r,B.n),r,r,r,B.f3,B.bj,r,r,1/0),B.am,A.E(A.cm(new C.bL9(s)),1)],q),B.l,r,B.e,B.h,0,B.p)},
ccI(){var w=this,v=null,u=A.as(A.d(w.y<=0?"The gourds are all gone":"The basket is full!",v,v,v,v,v,v,B.q1,v,v,v),v,v,v),t=A.as(A.d(""+w.Q+" of "+w.gMX().length+" caught \xb7 "+w.z+" points",v,v,v,v,v,v,D.VV,v,v,v),v,v,v),s=w.ax,r=w.ay
if(r===0)r=s
return A.cn(A.a([D.bes,u,t,B.aO,new C.It(s,r,w.cx,v),B.aO,A.as(C.uy("Back to the games",new C.bL2(w),B.cT,B.ka,D.fA),v,v,v)],x.p),v,v,B.ac,v,v,B.ah,!1)}}
C.bde.prototype={
a4(a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null,d=a5.a,a0=a5.b,a1=0+d,a2=$.S(),a3=A.L()
a3.sap(A.jC(B.J,new A.r(0,a0),D.d4d,G.aBm,B.x,e))
a4.aD(new A.a6(0,0,a1,0+a0),a3)
a3=A.L()
a3.r=G.NG.gp(0)
a4.O(new A.r(d*0.82,a0*0.16),22,a3)
a3=x.v
w=A.a([],a3)
v=new A.aI(a2.r,B.aj,e,e,w)
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
w.r=D.blt.gp(0)
a4.ag(v,w)
r=d*0.12
a2=new A.aI(a2.r,B.aj,e,e,A.a([],a3))
w=a0*0.86
a2.E(new A.aZ(r-26,w))
t=a0*0.5
s=a0*0.34
a2.E(new A.cc(r-14,t,r-10,s))
a2.E(new A.aq(r+10,s))
a2.E(new A.cc(r+14,t,r+26,w))
a2.E(new A.bw())
w=A.L()
w.r=D.ahd.gp(0)
a4.ag(a2,w)
for(a2=a0*0.36,w=a0*0.24,t=a0*0.22,q=0;q<4;++q){p=D.cpJ[q]
s=new A.ar(B.S,B.Q,B.W,B.X,B.U)
s.r=D.ahd.gp(0)
s.c=7
s.d=B.bF
a4.ah(new A.r(r,a2),new A.r(r+p*46,w),s)
s=new A.ar(B.S,B.Q,B.W,B.X,B.U)
s.r=D.agw.gp(0)
a4.O(new A.r(r+p*50,t),18,s)}a2=a0*0.88
w=A.L()
w.r=D.bmn.gp(0)
a4.aD(new A.a6(0,a2,a1,a2+a0*0.12),w)
for(a1=a0*0.9,a2=a1-8,o=0;o<18;++o){w=d*o/17
t=new A.ar(B.S,B.Q,B.W,B.X,B.U)
t.r=D.aiR.gp(0)
t.c=2
a4.ah(new A.r(w,a1),new A.r(w+3,a2),t)}for(a1=this.b,a2=a1.r,w=a2.length,t=a4.c,s=a0*0.89,q=0;q<a2.length;a2.length===w||(0,A.I)(a2),++q){n=a2[q]
if(n.e)continue
m=n.a
u=(n.b+Math.sin(a1.dx*1.7+m)*0.012)*d
l=n.d
if(n.f){m=A.bU(new A.r(u,s),12,54)
$.S()
l=new A.ar(B.S,B.Q,B.W,B.X,B.U)
l.r=D.lF.j(0.6).gp(0)
a4.c2(m,l)
continue}m=Math.sin(a1.dx*2+m)
J.br(t.save())
t.translate(u,l*a0)
t.rotate(m*0.1*180/3.141592653589793,0,0)
$.S()
m=new A.ar(B.S,B.Q,B.W,B.X,B.U)
m.r=D.ahW.gp(0)
a4.O(D.eqm,14,m)
m=new A.ar(B.S,B.Q,B.W,B.X,B.U)
m.r=D.br9.gp(0)
m.c=4
m.d=B.bF
a4.ah(D.eqn,D.eru,m)
m=new A.ar(B.S,B.Q,B.W,B.X,B.U)
m.sap(new A.alS(D.etE,46,D.dcO,B.x9,B.x,e,e,0))
a4.O(B.J,34,m)
m=A.bU(D.etL,8,12)
l=new A.ar(B.S,B.Q,B.W,B.X,B.U)
l.r=B.c.j(0.35).gp(0)
a4.c2(m,l)
k=new A.iM(new A.eq(n.c,e,e,B.cL,e,e,e,e,e,e,D.fz1),B.K,B.bV,new A.jj(1),e,e,3,e,B.bW,e,B.cr)
k.mZ(62)
m=k.b
l=Math.max(40,m.c+10)
m=m.a.c
j=A.bx(A.bU(B.cJ,m.gba(m)+8,l),B.fR)
l=new A.ar(B.S,B.Q,B.W,B.X,B.U)
l.r=D.qp.gp(0)
a4.aq(j,l)
l=new A.ar(B.S,B.Q,B.W,B.X,B.U)
l.r=D.lF.gp(0)
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
C.iij(a4,new A.r(i,a0*0.93),a0*0.3,a2,!0,Math.abs(a1.db-a1.cy)*40*Math.abs(Math.sin(a1.dx*18)),2,B.dQ,(w+1)/2)
h=A.bU(new A.r(i,a0*0.8),a0*0.07,d*0.24)
a3=new A.aI($.S().r,B.aj,e,e,A.a([],a3))
w=h.a
a2=h.b
a3.E(new A.aZ(w,a2))
t=h.c
a3.E(new A.aq(t,a2))
s=h.d
a3.E(new A.aq(t-8,s))
a3.E(new A.cc(h.gbD().a,s+8,w+8,s))
a3.E(new A.bw())
m=A.L()
m.r=D.ZT.gp(0)
a4.ag(a3,m)
for(a3=t-w,o=1;o<6;++o){t=w+a3*o/6
m=new A.ar(B.S,B.Q,B.W,B.X,B.U)
m.r=D.BQ.gp(0)
m.c=1.4
a4.ah(new A.r(t,a2),new A.r(t+(o-3)*2,s),m)}t=a2+(s-a2)*0.35
s=A.L()
s.r=G.nq.gp(0)
a4.aD(new A.a6(w,t,w+a3,t+5),s)
w-=2
a2-=4
s=A.L()
s.r=D.blz.gp(0)
a4.c2(new A.a6(w,a2,w+(a3+4),a2+8),s)
for(a2=a1.w,a3=a2.length,q=0;q<a2.length;a2.length===a3||(0,A.I)(a2),++q){g=a2[q]
w=g.a
t=g.b
s=g.f
m=new A.ar(B.S,B.Q,B.W,B.X,B.U)
m.r=g.e.j(B.j.D(s,0,1)).gp(0)
a4.O(new A.r(w*d,t*a0),3*s+1,m)}f=a1.dx-a1.go
if(f>=0&&f<1.2){a2=a1.fy
k=A.fp(e,B.cr,e,e,e,A.cQ(e,e,e,e,e,e,e,e,e,A.m(e,e,B.cT.j(1-f/1.2),e,e,e,e,e,e,e,e,26,e,e,B.u,e,e,!0,e,e,e,e,e,I.DN,e,e),"+"+a2),B.a6,B.bV,e,B.dA,B.bW)
k.eb()
k.a4(a4,new A.r(a1.id*d-k.b.c/2,a0*0.72-f*60))}},
aE(d){return!0}}
C.QN.prototype={
B(d){var w=this,v=null,u=w.e,t=A.b4(v,v,v,new C.aBL(w.c,w.f,v),B.az),s=A.l(10),r=A.K(B.bD,B.r,1.4)
return new A.a3(u+22,v,A.x(A.a([new A.a3(u,u,t,v),B.cQ,A.p(v,A.d(w.d,v,1,B.a2,v,v,v,D.frA,v,v,v),B.f,v,v,new A.o(B.c,v,r,s,v,v,B.n),v,v,v,v,B.n5,v,v,v)],x.p),B.l,v,B.e,B.N,0,B.p),v)},
gZ(d){return this.e}}
C.aBL.prototype={
a4(d,e){var w=e.el(B.J),v=e.gdm(),u=this.c?0.8:0
return P.hiO(d,w,v*0.44,this.b,0,u)},
aE(d){return d.b!==this.b||d.c!==this.c}}
C.aAf.prototype={}
C.av3.prototype={
S(){return new C.av4(A.T(x.S,x.cq),null,null)},
gd1(){return this.d}}
C.av4.prototype={
gkS(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.hH5(w.c,w.e)
u.d!==$&&A.bD()
u.d=v
t=v}return t},
gaFF(){var w=this.z
return w===$?this.z=this.Xv(0):w},
gj_(){var w,v=this.Q
if(v===$){w=this.gkS()
w=w.length===0?0:w[0].c.length
v=this.Q=A.c1(w,-1,!1,x.S)}return v},
Xv(d){var w,v,u,t,s=this.gkS()
if(d>=s.length)return A.a([],x.h)
w=s[d]
s=A.a([],x.h)
for(v=w.c,u=w.d,t=0;t<v.length;++t)s.push(new C.aAf(v[t],u[t],t))
for(v=w.e,u=w.f,t=0;t<v.length;++t)s.push(new C.aAf(v[t],u[t],-1))
v=new A.e6()
v.d_(this.a.e*31+d)
B.d.e0(s,v)
return s},
t(){var w,v,u
for(w=this.as,w=new A.ds(w,w.r,w.e);w.C();){v=w.d
v.r.t()
v.r=null
u=v.eP$
u.b=!1
B.d.a8(u.a)
u=u.goz()
if(u.a>0){u.b=u.c=u.d=u.e=null
u.a=0}v.dV$.a.a8(0)
v.qF()}this.bwV()},
cS9(d,e){var w,v,u,t,s,r=this
if(d>=r.gj_().length||r.gj_()[d]!==-1||B.d.q(r.gj_(),e))return
w=r.gaFF()[e]
v=r.gkS()[r.e].a
if(w.c<0){++r.f;++r.y
r.m(new C.cqM(r,e,w,v))
A.cz(B.lL,new C.cqN(r))
return}++r.r
u=A.bn(null,B.hM,null,1,null,r)
t=r.as
s=t.h(0,d)
if(s!=null)s.t()
t.n(0,d,u)
r.m(new C.cqO(r,d,e,w,v))
u.cr(0)},
kN(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$kN=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:o=t.e
n=t.gkS()
w=o+1>=n.length?3:4
break
case 3:s=B.d.cE(n,0,new C.cqP())
o=t.r
n=t.f
o=Math.max(0,o*4-n)
r=o+(n===0?12:0)
t.m(new C.cqQ(t,r))
w=5
return A.b(C.BP(t.a.d,r),$async$kN)
case 5:t.x=f
o=t.a
w=6
return A.b(C.BQ(o.d,o.c.a,"plant",Math.max(1,s*10-t.f*5)),$async$kN)
case 6:t.ch=f
if(t.c!=null)t.m(new C.cqR())
w=1
break
case 4:for(o=t.as,n=new A.ds(o,o.r,o.e);n.C();){q=n.d
q.r.t()
q.r=null
p=q.eP$
p.b=!1
B.d.a8(p.a)
p=p.goz()
if(p.a>0){p.b=p.c=p.d=p.e=null
p.a=0}q.dV$.a.a8(0)
q.qF()}o.a8(0)
t.m(new C.cqS(t))
case 1:return A.h(u,v)}})
return A.i($async$kN,v)},
B(d){var w,v,u,t,s,r=this,q="Plant the Tree",p=null
if(r.ay){w=A.as(A.d(""+r.r+" branches grown",p,p,p,p,p,p,B.q1,p,p,p),p,p,p)
v=r.f
v=A.as(A.d(v===0?"Not one mistake!":""+v+" mistakes",p,p,p,p,p,p,D.VV,p,p,p),p,p,p)
u=r.w
t=r.x
if(t===0)t=u
return new C.tH(q,A.cn(A.a([D.ag2,w,v,B.aO,new C.It(u,t,r.ch,p),B.aO,A.as(C.uy("Back to the games",new C.cqI(d),B.cT,B.ka,D.fA),p,p,p)],x.p),p,p,B.ac,p,p,B.ah,!1),B.f5,p)}w=r.gkS()
v=r.e
s=w[v]
return new C.tH(q,new A.D(B.t5,A.x(A.a([A.d("Round "+(v+1)+" of "+w.length+" \xb7 drag the children of "+s.a+" onto the branches",p,p,p,p,p,p,E.aWg,B.K,p,p),A.E(A.cm(new C.cqJ(r,s)),1)],x.p),B.l,p,B.e,B.h,0,B.p),p),B.f5,p)}}
C.bcI.prototype={
a4(b6,b7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9=this,b0=null,b1=y.B,b2=a9.d,b3=new A.Y(b2,new C.cQO(),A.U(b2).k("Y<1>")).gJ(0),b4=a9.b,b5=b4.a5(0,B.JO)
$.S()
w=A.L()
w.r=D.lG.j(0.18+0.1*b3).gp(0)
b6.O(b5,70+b3*10,w)
w=b7.a
b5=b7.b
v=b4.a5(0,D.eq9)
u=A.L()
u.r=B.qr.j(0.5).gp(0)
u.c=10
u.d=B.bF
b6.ah(new A.r(w/2,b5*0.98),v,u)
for(v=a9.c,u=b4.a,b4=b4.b,t=b4+90,s=x.v,b4+=46,r=x.dc,q=x.U,p=0;p<v.length;++p){o=v[p]
n=o.a+0
m=B.e5.aB(0,B.j.D(b2[p],0,1))
l=$.S().r
k=A.a([],s)
j=new A.aI(l,B.aj,b0,b0,k)
k.push(new A.aZ(u,b4))
j.ab()
o=new A.cc((u+n)/2,t,n,o.b+-46)
k.push(o)
n=j.f
if(n!=null)o.ak(n)
j.ab()
if(m<1)for(o=new A.aI(l,j.b,j.c,b0,A.bp(k,!0,r)),n=A.a([],q),i=new A.tG(o,!1,n);i.C();){h=i.c
if(h===0||i.f)A.bk(A.jL(b1));--h
g=new A.BN(i,h)
f=0
for(;;){i.j6()
e=n[h].b
e===$&&A.c()
if(!(f<e.a.length()))break
i.j6()
e=n[h].b
e===$&&A.c()
e=Math.min(e.a.length(),f+7)
d=o.b
a0=A.a([],s)
$.S()
a1=new A.ar(B.S,B.Q,B.W,B.X,B.U)
a1.r=B.aT.gp(0)
a1.b=B.aa
a1.c=3
b6.ag(new A.aI(l,d,b0,new A.ce([g,f,e,!0]),a0),a1)
f+=14}}if(m>0)for(o=new A.aI(l,j.b,j.c,b0,A.bp(k,!0,r)),n=A.a([],q),k=new A.tG(o,!1,n),i=m>0.4,h=9-3*m,e=11*m,d=6*m;k.C();){a0=k.c
if(a0===0||k.f)A.bk(A.jL(b1));--a0
k.j6()
a1=n[a0].b
a1===$&&A.c()
a1=a1.a.length()
a2=o.b
a3=A.a([],s)
$.S()
a4=new A.ar(B.S,B.Q,B.W,B.X,B.U)
a4.r=D.Gu.gp(0)
a4.b=B.aa
a4.c=h
a4.d=B.bF
b6.ag(new A.aI(l,a2,b0,new A.ce([new A.BN(k,a0),0,a1*m,!0]),a3),a4)
k.j6()
a4=n[a0].b
a4===$&&A.c()
a4=a4.a.length()
k.j6()
a5=n[a0].HA(a4*m)
if(i)for(a0=a5.a,a1=a0.a,a0=a0.b,a6=0;a6<4;++a6){a7=a6*1.6+p
a2=A.bU(new A.r(a1+Math.cos(a7)*14,a0+Math.sin(a7)*10),d,e)
a3=new A.ar(B.S,B.Q,B.W,B.X,B.U)
a3.r=B.bc.gp(0)
b6.c2(a2,a3)}}}if(a9.e)for(b2=b5*0.3,p=0;p<6;++p){a8=new A.iM(D.fr3,B.a6,B.bV,new A.jj(1),b0,b0,b0,b0,B.bW,b0,B.cr)
a8.eb()
a8.a4(b6,new A.r(w*(0.15+p*0.14),b2-B.o.F(p,3)*14))}},
aE(d){return!0}}
C.az0.prototype={
S(){return new C.az1(A.aR(x.S))},
gd1(){return this.d}}
C.az1.prototype={
gkS(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.hI_(w.c,w.e)
u.d!==$&&A.bD()
u.d=v
t=v}return t},
Y(){this.a3()
this.b9v()},
t(){var w=this.ch
if(w!=null)w.a1(0)
this.a2()},
b9v(){var w=this.ch
if(w!=null)w.a1(0)
this.ch=A.dg(B.t0,new C.cFK(this))},
bqu(d){var w,v=this
if(v.as||v.z.q(0,d))return
w=v.gkS()[v.e]
if(w.e[d]===w.b)v.m(new C.cFS(v,Math.max(10,100-25*(v.f-1)-15*v.z.a)))
else{v.m(new C.cFT(v,d))
A.cz(B.iR,new C.cFU(v))}},
cXC(){var w=this
if(!w.as&&w.f<w.gkS()[w.e].d.length)w.m(new C.cFV(w))},
kN(d){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$kN=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.e
q=t.gkS()
w=r+1>=q.length?3:4
break
case 3:r=t.ch
if(r!=null)r.a1(0)
r=t.w
q=r===q.length?15:0
s=r*6+q
t.m(new C.cFW(t,s))
w=5
return A.b(C.BP(t.a.d,s),$async$kN)
case 5:t.y=f
q=t.a
w=6
return A.b(C.BQ(q.d,q.c.a,"who",t.r),$async$kN)
case 6:t.ax=f
if(t.c!=null)t.m(new C.cFX())
w=1
break
case 4:t.m(new C.cFY(t))
t.b9v()
case 1:return A.h(u,v)}})
return A.i($async$kN,v)},
B(a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=this,a1="Who Am I?",a2=null
if(a0.at){w=A.as(A.d(""+a0.w+" of "+a0.gkS().length+" guessed",a2,a2,a2,a2,a2,a2,B.q1,a2,a2,a2),a2,a2,a2)
v=A.as(A.d(""+a0.r+" points",a2,a2,a2,a2,a2,a2,D.VV,a2,a2,a2),a2,a2,a2)
u=a0.x
t=a0.y
if(t===0)t=u
return new C.tH(a1,A.cn(A.a([D.beD,w,v,B.aO,new C.It(u,t,a0.ax,a2),B.aO,A.as(C.uy("Back to the games",new C.cFM(a3),B.cT,B.ka,D.fA),a2,a2,a2)],x.p),a2,a2,B.ac,a2,a2,B.ah,!1),B.f5,a2)}w=a0.as
s=w?0:Math.max(1,13-3.5*(a0.f-1))
r=w?0:Math.max(0.1,0.92-0.25*(a0.f-1))
w=a0.e
v=a0.gkS()
u=x.X
t=x.p
w=A.a([A.d("Person "+(w+1)+" of "+v.length,a2,a2,a2,a2,a2,a2,D.L4,B.K,a2,a2),B.T,A.as(A.lE(new C.cFN(a0,r),a2,B.b0,B.hM,a2,a2,new A.bq(a2,s,u),x.i),a2,a2,a2),B.aB],t)
for(q=x.W,p=x.gW,o=0;n=a0.f,o<n;o=k){n=a0.e
m=new A.aP(16,16)
l=new A.ay(B.cT,2,B.r,-1)
k=o+1
w.push(new A.r6(new A.bq(0,1,u),new C.cFO(),A.p(a2,new A.c7(B.aL,B.e,B.h,B.l,a2,B.p,a2,0,A.a([new A.qI(A.d(""+k,a2,a2,a2,a2,a2,a2,B.o7,a2,a2,a2),D.lF,a2,12,a2),B.as,new A.by(1,B.ba,A.d(v[n].d[o],a2,a2,a2,a2,a2,a2,D.fDT,a2,a2,a2),a2)],t),a2),B.f,a2,a2,new A.o(D.qp,a2,new A.bF(l,l,l,l),new A.be(m,m,m,m),a2,a2,B.n),a2,a2,a2,B.cx,B.bj,a2,a2,a2),B.b0,B.iR,a2,new A.bh("clue-"+n+"-"+o,q),p))}if(!a0.as&&n<v[a0.e].d.length)w.push(A.as(A.bO(!1,D.h4k,a2,a2,!0,a2,a2,a2,a0.gcXB(),a2,a2),a2,a2,a2))
w.push(B.P)
if(a0.as){u=D.lG.j(0.2)
q=A.l(16)
p=A.K(D.lG,B.r,1)
n=a0.e
m=A.d("It is "+v[n].b+"!  +"+a0.ay,a2,a2,a2,a2,a2,a2,B.fS,a2,a2,a2)
v=n+1>=v.length?"See my result":"Next person"
w.push(A.p(a2,A.x(A.a([m,B.T,C.uy(v,a0.gqo(a0),B.cT,B.jt,D.fA)],t),B.l,a2,B.e,B.h,0,B.p),B.f,a2,a2,new A.o(u,a2,p,q,a2,a2,B.n),a2,a2,a2,a2,B.bI,a2,a2,a2))}else{t=A.a([],t)
for(n=a0.z,o=0;m=a0.e,o<v[m].e.length;++o){j=a0.Q===o
i=j?1:0
h=n.q(0,o)?B.dq:B.cT.j(0.2)
g=new A.aP(16,16)
l=new A.ay(n.q(0,o)?B.fh:B.cT,2,B.r,-1)
f=v[a0.e].e[o]
e=n.q(0,o)?B.bX:B.c
d=n.q(0,o)?B.xw:a2
t.push(new A.r6(new A.bq(0,i,u),new C.cFP(),A.az(a2,A.p(a2,A.d(f,a2,a2,a2,a2,a2,a2,new A.F(!0,e,a2,a2,a2,a2,16,B.u,a2,a2,a2,a2,a2,a2,a2,a2,a2,d,a2,a2,a2,a2,a2,a2,a2,a2),B.K,a2,a2),B.f,a2,D.afb,new A.o(h,a2,new A.bF(l,l,l,l),new A.be(g,g,g,g),a2,a2,B.n),a2,a2,a2,a2,B.jr,a2,a2,a2),B.y,!1,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,new C.cFQ(a0,o),a2,a2,a2,a2,a2,a2,!1,B.a4),B.b0,B.mf,a2,new A.bh("opt-"+m+"-"+o+"-"+j,q),p))}w.push(A.bZ(B.fU,t,B.br,a2,10,10))}return new C.tH(a1,A.cn(w,a2,a2,B.amO,a2,a2,B.ah,!1),B.f5,a2)}}
C.aA0.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbA())
w.a9$=null
w.a2()},
aY(){this.b5()
this.b3()
this.bB()}}
C.aHg.prototype={
aY(){this.b5()
this.b3()
this.dI()},
t(){var w=this,v=w.b7$
if(v!=null)v.a6(0,w.gdC())
w.b7$=null
w.a2()}}
C.afW.prototype={
are(d){},
arK(){var w=this,v=w.q1(new C.f87(w))
v.fX(0)
w.M4$!==$&&A.aQ()
w.M4$=v}}
C.aL4.prototype={
gbmV(d){var w=this.c
return B.a.az(w,0,Math.min(this.d,w.length))},
W3(d){var w=this,v=w.b
if(v!=null)v.a1(0)
w.c=d
w.d=0
w.b=A.dg(D.alQ,new C.fih(w))},
bsS(d){var w=this,v=w.b
if(v!=null)v.a1(0)
w.d=w.c.length
w.a.$0()},
t(){var w=this.b
return w==null?null:w.a1(0)}}
C.amf.prototype={
S(){return new C.amg(new C.amp(),A.a([],x.t),new A.eC(0,$.ax()),$,0,null,null)},
gd1(){return this.d}}
C.amg.prototype={
gMV(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.bEu(w.c,10,w.e,!0)
u.d!==$&&A.bD()
u.d=v
t=v}return t},
ghc(d){var w,v=this,u=v.e
if(u===$){w=C.N7(v.a.c)
v.e!==$&&A.bD()
v.e=w
u=w}return u},
gqw(){var w=this.r
return w===$?this.r=new C.aL4(new C.bSZ(this)):w},
gaq3(d){var w,v,u=A.a([],x.t)
for(w=this.w,v=0;v<w.length;++v)if(w[v]===this.gMV()[v].c)u.push(1)
return u.length},
gbme(){var w=this.ghc(0)
return w.gzr()==null?"Elder":B.a.i(w.gzr().b)},
Y(){this.a3()
this.arK()},
t(){var w,v=this
v.gqw().t()
v.f.t()
w=v.M4$
w===$&&A.c()
w.t()
w=v.qa$
w.U$=$.ax()
w.P$=0
v.bwA()},
cMf(){var w=this
w.m(new C.bSW(w))
w.gqw().W3(w.gMV()[w.x].a)},
Ld(d){var w,v=this,u=!0
if(v.Q)if(!v.as){u=v.gqw()
w=u.d
u=u.c
u=w<u.length||v.w.length>v.x}if(u)return
v.w.push(d)
u=v.qa$.a
v.ax=u
v.ay=u+1
v.m(new C.bSU())
A.cz(B.hM,new C.bSV(v))},
bqq(){var w=this.gaq3(0)/this.gMV().length*100
if(w>=90)return D.f0D
if(w>=75)return D.eZF
if(w>=60)return D.eQs
if(w>=45)return D.eTP
return D.eKY},
B(d){var w,v,u,t,s,r,q,p,o,n=this,m=null
if(n.as)return n.cuL()
w=A.bR(0,new A.en(A.b4(m,m,m,new C.bto(n,n.qa$),B.az),m),0,0,0)
if(!n.Q){v=D.qp.j(0.96)
u=A.l(20)
t=A.K(B.cT,B.r,3)
u=A.p(m,A.x(A.a([A.d("Elder "+n.gbme()+" is your teacher. Ten questions about the family are written on the board. Answer each one; the marks come at the end.",m,m,m,m,m,m,D.aX9,B.K,m,m),B.T,C.uy("Start the test",n.gBY(),B.cT,B.jb,D.fA)],x.p),B.l,m,B.e,B.N,0,B.p),B.f,m,m,new A.o(v,m,t,u,m,m,B.n),m,m,m,m,B.bI,m,m,m)
v=u}else{v=n.x
u=n.gMV()
v=A.d("Question "+(v+1)+" of "+u.length,m,m,m,m,m,m,D.aXb,m,m,m)
if(n.Q){t=n.gqw()
t=t.d<t.c.length}else t=!1
if(t)u=D.fjw
else{t=n.x
s=A.a([],x.p)
for(r=0;q=u[n.x].b,r<q.length;++r){p=new A.aP(10,10)
o=new A.ay(D.BQ,4,B.r,-1)
s.push(A.az(m,A.p(m,A.d(q[r],m,m,m,m,m,m,D.fuQ,B.K,m,m),B.f,m,D.afb,new A.o(D.bhv,m,new A.bF(o,o,o,o),new A.be(p,p,p,p),m,m,B.n),m,m,m,m,B.Os,m,m,m),B.y,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new C.bSX(n,r),m,m,m,m,m,m,!1,B.a4))}u=A.bZ(B.fU,s,B.br,new A.bh("o"+t,x.W),8,8)}u=A.x(A.a([v,B.am,A.oB(u,B.n0,A.pV(),B.b0,B.b0,A.LJ())],x.p),B.l,m,B.e,B.N,0,B.p)
v=u}return new C.tH("Village School",new A.an(B.a0,m,B.ad,B.t,A.a([w,A.ao(10,v,m,m,10,10,m,m)],x.p),m),B.f5,m)},
cuL(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.bqq(),g=A.a([],x.t)
for(w=j.w,v=0;v<w.length;++v)if(w[v]!==j.gMV()[v].c)g.push(v)
u=A.l(22)
t=A.K(B.cT,B.r,4)
s=A.d(j.a.c.b,i,i,i,i,i,i,D.fzl,B.K,i,i)
r=A.d("Signed by Elder "+j.gbme(),i,i,i,i,i,i,D.fxZ,i,i,i)
q=x.p
p=A.a([A.d(h.a,i,i,i,i,i,i,D.fDd,i,i,i),D.eCV],q)
o=A.d(h.b,i,i,i,i,i,i,D.fFb,i,i,i)
n=j.gaq3(0)
m=j.gMV()
u=A.p(i,A.x(A.a([D.fQt,B.aw,s,r,B.T,new A.an(B.A,i,B.ad,B.t,p,i),o,B.am,A.d(""+n+" of "+m.length+" right",i,i,i,i,i,i,D.acc,i,i,i),B.P,D.atG],q),B.l,i,B.e,B.h,0,B.p),B.f,i,i,new A.o(D.qp,i,t,u,i,i,B.n),i,i,i,i,B.ft,i,i,i)
t=j.y
s=j.z
if(s===0)s=t
s=A.a([u,B.aB,new C.It(t,s,j.at,i)],q)
if(g.length!==0){u=A.a([B.aO,D.h5o,B.P],q)
for(t=g.length,l=0;l<g.length;g.length===t||(0,A.I)(g),++l){v=g[l]
r=new A.aP(14,14)
k=new A.ay(B.bx,1,B.r,-1)
p=m[v]
u.push(A.p(i,A.x(A.a([A.d(p.a,i,i,i,i,i,i,B.h5,i,i,i),B.aw,A.d("You said: "+p.b[w[v]],i,i,i,i,i,i,D.fAw,i,i,i),A.d(p.d,i,i,i,i,i,i,D.fCP,i,i,i)],q),B.E,i,B.e,B.h,0,B.p),B.f,i,i,new A.o(B.dq,i,new A.bF(k,k,k,k),new A.be(r,r,r,r),i,i,B.n),i,i,i,B.cx,B.bj,i,i,i))}B.d.u(s,u)}s.push(B.aB)
s.push(A.as(C.uy("Back to the games",new C.bSQ(j),B.cT,B.ka,D.fA),i,i,i))
return new C.tH("Village School",A.cn(s,i,i,B.bS,i,i,B.ah,!1),B.f5,i)}}
C.bto.prototype={
a4(a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=this.b,d=e.qa$.a
a0.zq(e.f.MG(a1))
w=C.he6(a1)
v=a0.c
J.br(v.save())
v.translate(w.a,w.b)
a0.bW(0,w.c)
if(e.Q){u=e.gqw()
t=u.d<u.c.length}else t=!1
for(s=0;s<2;++s){u=D.cZq[s]-6
$.S()
r=new A.ar(B.S,B.Q,B.W,B.X,B.U)
r.r=D.Gh.gp(0)
a0.aD(new A.a6(u,340,u+12,450),r)}u=A.bx(D.aae.cq(10),B.i5)
$.S()
r=A.L()
r.r=D.BQ.gp(0)
a0.aq(u,r)
r=A.bx(D.aae,B.iq)
u=A.L()
u.sap(A.jC(new A.r(30,96),new A.r(420,346),D.dic,f,B.x,f))
a0.aq(r,u)
q=new A.e6()
q.d_(2)
for(p=0;p<18;++p){u=q.ai()
r=q.ai()
o=q.ai()
o=A.bU(new A.r(30+u*390,96+r*250),8+q.ai()*14,30+o*60)
r=new A.ar(B.S,B.Q,B.W,B.X,B.U)
r.r=B.c.j(0.025).gp(0)
a0.c2(o,r)}u=A.L()
u.r=I.ajG.gp(0)
a0.aD(new A.a6(30,354,420,362),u)
u=A.L()
u.r=B.aS.gp(0)
a0.aD(D.faV,u)
u=A.L()
u.r=B.bL.gp(0)
a0.aD(D.faZ,u)
u=A.bx(D.faP,B.iE)
r=A.L()
r.r=D.ZT.gp(0)
a0.aq(u,r)
n=B.j.D((d-e.ax)/0.7,0,1)
if(e.Q){u=e.gqw().gbmV(0)
m=A.fp(f,B.cr,f,7,f,A.cQ(f,f,f,f,f,f,f,f,f,D.fHt,u+(t?"|":"")),B.a6,B.bV,f,B.dA,B.bW)
m.mZ(346)
J.br(v.save())
u=A.hY(D.aae)
r=$.mj()
v.clipRect(u,r[1],!0)
u=n<1
if(u&&e.w.length>e.x)v.clipRect(A.hY(new A.a6(30+390*n,96,420,346)),r[1],!0)
m.a4(a0,new A.r(52,118))
v.restore()
if(n>0&&u){u=30+390*n-20
r=126+40*Math.sin(n*9)
r=A.bx(new A.a6(u,r,u+40,r+90),B.fR)
u=A.L()
u.r=D.bx5.gp(0)
a0.aq(r,u)}}else{m=A.fp(f,B.cr,f,f,f,D.frj,B.K,B.bV,f,B.dA,B.bW)
m.mZ(340)
m.a4(a0,new A.r(55,176))}if(t)for(u=d*1.2,r=d*3,p=0;p<8;++p){l=B.j.F(u+p/8,1)
o=B.o.F(e.gqw().d*9,310)
k=Math.sin(p+r)
j=new A.ar(B.S,B.Q,B.W,B.X,B.U)
j.r=B.c.j(0.7*(1-l)).gp(0)
a0.O(new A.r(70+o+k*6,166+l*70),1.6,j)}u=e.ghc(0).gzr()
i=(u==null?f:u.c)===D.oB?1:0
h=d<e.ay
g=A.a([new A.y(470,new C.f88(d,a0,i,t,h,D.erj)),new A.y(520,new C.f89(a0,d,t)),new A.y(575,new C.f8a(a0,d,t)),new A.y(585,new C.f8b(this,a0,d,t)),new A.y(615,new C.f8c(this,t,a0,d,h))],x.E)
B.d.aZ(g,new C.f8d())
for(s=0;s<5;++s)g[s].b.$0()
v.restore()},
ccM(d,e){var w,v,u,t,s,r,q,p=$.S(),o=A.a([],x.v),n=new A.aI(p.r,B.aj,null,null,o)
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
n.ab()}}n.E(new A.bw())
return n},
aE(d){return!1}}
C.amd.prototype={
S(){return new C.ame(new C.amp(),A.T(x.S,x.i),new A.eC(0,$.ax()),$,0,null,null)},
gd1(){return this.d}}
C.ame.prototype={
gkS(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.hGU(w.c,w.e)
u.d!==$&&A.bD()
u.d=v
t=v}return t},
gj_(){var w=this.z
return w===$?this.z=this.FM(0):w},
gaLV(){var w,v,u,t,s=this,r=s.Q
if(r===$){w=A.a([],x.n)
v=0
for(;;){r=s.z
if(r===$){r=s.z=s.FM(0)
u=r}else u=r
if(!(v<r.length))break
t=B.d.cn(u,v)
r=s.z
w.push(450*(t+0.5)/(r===$?s.z=s.FM(0):r).length);++v}s.Q=w
r=w}return r},
FM(d){var w,v,u,t,s=this.gkS()
if(d>=s.length)return A.a([],x.t)
w=s[d].d.length
s=J.e4(w,x.S)
for(v=0;v<w;++v)s[v]=v
u=new A.e6()
u.d_(this.a.e+d*7)
B.d.e0(s,u)
if(w>1){u=A.a([],x.t)
for(v=0;v<w;++v)u.push(s[v]===v?1:0)
u=B.d.f1(u,new C.bSC())===w}else u=!1
if(u){t=s[0]
s[0]=s[1]
s[1]=t}return s},
Y(){this.a3()
this.arK()},
t(){var w,v=this
v.e.t()
w=v.M4$
w===$&&A.c()
w.t()
w=v.qa$
w.U$=$.ax()
w.P$=0
v.bwz()},
are(d){var w,v,u,t,s,r=this,q=r.gj_().length
for(w=d*9,v=0;v<q;++v){u=r.z
t=B.d.cn(u===$?r.z=r.FM(0):u,v)
s=r.gaLV()
s[v]=s[v]+(450*(t+0.5)/q-r.gaLV()[v])*Math.min(1,w)}},
d1Y(d){var w,v=this
if(v.at||v.ay||d<0||d>=v.gj_().length)return
w=v.y
if(w===-1){v.m(new C.bSN(v,d))
return}if(w===d){v.m(new C.bSO(v))
return}v.m(new C.bSP(v,B.d.cn(v.gj_(),v.y),d,B.d.cn(v.gj_(),d)))},
cMX(d){var w,v,u,t,s=this
if(s.at||s.ay)return
w=A.a([],x.f7)
v=0
for(;;){u=s.z
if(!(v<(u===$?s.z=s.FM(0):u).length))break
t=s.gkS()[s.f]
u=s.z
w.push(t.e[(u===$?s.z=s.FM(0):u)[v]]===v);++v}s.m(new C.bSI(s,B.d.cC(w,new C.bSJ())))},
kN(d){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$kN=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.f
q=t.gkS().length
w=r+1>=q?3:4
break
case 3:r=t.r
q=r===q?15:0
s=r*10+q
t.m(new C.bSK(t,s))
w=5
return A.b(C.BP(t.a.d,s),$async$kN)
case 5:t.x=f
q=t.a
w=6
return A.b(C.BQ(q.d,q.c.a,"lineup",t.r*10),$async$kN)
case 6:t.ch=f
if(t.c!=null)t.m(new C.bSL())
w=1
break
case 4:t.m(new C.bSM(t))
case 1:return A.h(u,v)}})
return A.i($async$kN,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null
if(l.ay){w=A.as(A.d(""+l.r+" of "+l.gkS().length+" lines right",k,k,k,k,k,k,B.q1,k,k,k),k,k,k)
v=l.w
u=l.x
if(u===0)u=v
return new C.tH("Line Up",A.cn(A.a([D.ag2,w,B.aO,new C.It(v,u,l.ch,k),B.aO,A.as(C.uy("Back to the games",new C.bSE(d),B.cT,B.ka,D.fA),k,k,k)],x.p),k,k,B.ac,k,k,B.ah,!1),B.f5,k)}w=A.a([],x.t)
for(t=0;v=l.gkS(),t<v[l.f].d.length;++t)w.push(t)
B.d.aZ(w,new C.bSF(l))
u=A.bR(0,A.cm(new C.bSG(l)),0,0,0)
s=l.f
r=A.d("Round "+(s+1)+" of "+v.length,k,k,k,k,k,k,D.aXb,k,k,k)
s=v[s]
q=x.p
s=A.ao(k,A.x(A.a([r,A.d(s.a,k,k,k,k,k,k,D.fzN,B.K,k,k),A.d(s.b,k,k,k,k,k,k,D.fC2,B.K,k,k)],q),B.l,k,B.e,B.h,0,B.p),k,k,12,12,4,k)
r=A.a([],q)
if(l.at){p=B.w.j(0.7)
o=A.l(16)
n=l.ax
m=A.K(n?D.lG:G.nq,B.r,2)
r.push(A.p(k,A.d(n?"Yes! That is the right line. The whole village cheers.":"Not quite. The right line is: "+new A.N(w,new C.bSH(l),x.cM).aN(0,", then ")+".",k,k,k,k,k,k,D.fEg,k,k,k),B.f,k,k,new A.o(p,k,m,o,k,k,B.n),k,k,k,B.d9,B.bj,k,k,1/0))}if(!l.at)r.push(C.uy("That is my line!",l.gcMW(l),B.cT,B.hb,D.fA))
else{w=l.f+1>=v.length?"See my result":"Next family"
r.push(C.uy(w,l.gqo(l),B.cT,B.jt,D.fA))}return new C.tH("Line Up",new A.an(B.a0,k,B.ad,B.t,A.a([u,s,A.ao(12,A.x(r,B.l,k,B.e,B.N,0,B.p),k,k,12,12,k,k)],q),k),B.f5,k)}}
C.bjT.prototype={
a4(c7,c8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4=null,c5=this.b,c6=c5.qa$.a
c7.zq(c5.e.MG(c8))
w=C.he6(c8)
v=c7.c
J.br(v.save())
v.translate(w.a,w.b)
c7.bW(0,w.c)
u=c5.gj_().length
t=$.S().r
s=x.v
r=new A.aI(t,B.aj,c4,c4,A.a([],s))
r.E(new A.aZ(10,470))
r.E(new A.cc(225,500,440,470))
q=A.L()
q.r=D.ZT.gp(0)
q.b=B.aa
q.c=4
c7.ag(r,q)
for(q=c6*3,p=0;p<12;++p){o=30+p*36
n=470+30*Math.sin(3.141592653589793*(o-10)/430)*0.95
m=Math.sin(q+p)
l=A.a([],s)
k=new A.aI(t,B.aj,c4,c4,l)
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
m=new A.bw()
l.push(m)
l=k.f
if(l!=null)m.ak(l)
k.ab()
m=new A.ar(B.S,B.Q,B.W,B.X,B.U)
m.r=[B.cT,G.nq,D.lG,B.aG][B.o.F(p,4)].gp(0)
c7.ag(k,m)}this.b1A(c7,"OLDEST",D.esh,B.cT)
this.b1A(c7,"YOUNGEST",D.erK,B.bc)
t=A.bx(D.faJ,B.fR)
s=A.L()
s.r=D.Gh.gp(0)
c7.aq(t,s)
s=A.bx(D.faI,B.iq)
t=A.L()
t.r=D.BQ.gp(0)
c7.aq(s,t)
i=c6<c5.CW
h=c6<c5.cx
g=u>=5?0.92:1.12
t=A.a([],x.t)
for(f=0;f<u;++f)t.push(f)
B.d.aZ(t,new C.ds1())
for(s=t.length,q=440/u-8,m=c6*10,l=!i,k=c5.as,j=c6*9,e=c6*8,d=c6*12,a0=0;a0<t.length;t.length===s||(0,A.I)(t),++a0){f=t[a0]
a1=c5.z
a2=B.d.cn(a1===$?c5.z=c5.FM(0):a1,f)
o=c5.gaLV()[f]
a3=c5.y===f
a4=a3?Math.abs(Math.sin(j))*10:0
a5=k.h(0,f)
if(a5!=null&&c6<a5)a4+=Math.sin((1-(a5-c6)/0.5)*3.141592653589793)*14
a6=c5.at&&c5.gkS()[c5.f].e[f]===a2
a7=c5.at&&!c5.ax&&!a6
a8=c5.gkS()
a9=a8[c5.f].c
b0=a9.length>f?a9[f]:f
if(l)b1=c5.at&&a6
else b1=!0
b2=Math.max(0,Math.sin(m+f))
if(a3){$.S()
a9=new A.ar(B.S,B.Q,B.W,B.X,B.U)
a9.r=B.cT.j(0.22+0.1*Math.sin(e)).gp(0)
c7.O(new A.r(o,520),54,a9)}a9=D.dm1[B.o.F(b0,6)]
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
else b9=a3?D.eup:c4
if(b1)c0=new A.r(3+b2*8,-56)
else if(h&&a7)c0=D.aMZ
else c0=a3?new A.r(30,-104+Math.sin(e)*5):c4
C.SF(c7,new A.r(o,612),b8,b5,(225-o)/225*0.5,-0.3,b9,c0,D.JQ,a9,b4,0,g,b3,b6,c6,b7)
a8=a8[c5.f].d[f]
c1=new A.iM(new A.eq(a8,c4,c4,B.cL,c4,c4,c4,c4,c4,c4,D.fxu),B.a6,B.bV,new A.jj(1),"\u2026",c4,1,c4,B.bW,c4,B.cr)
c1.mZ(q)
c2=A.bx(A.bU(new A.r(o,650),24,c1.b.c+16),B.fR)
$.S()
a8=new A.ar(B.S,B.Q,B.W,B.X,B.U)
if(a6)a9=B.iy
else a9=a7?B.rU:D.qp
a8.r=a9.gp(0)
c7.aq(c2,a8)
a8=new A.ar(B.S,B.Q,B.W,B.X,B.U)
if(a6)a9=D.lG
else a9=a7?G.nq:D.lF
a8.r=a9.gp(0)
a8.b=B.aa
a8.c=2
c7.aq(c2,a8)
a8=c1.b
a9=a8.c
a8=a8.a.c
c1.a4(c7,new A.r(o-a9/2,650-a8.gba(a8)/2))
c3=new A.iM(new A.eq(""+(a2+1),c4,c4,B.cL,c4,c4,c4,c4,c4,c4,D.fxO),B.a6,B.bV,new A.jj(1),c4,c4,c4,c4,B.bW,c4,B.cr)
c3.eb()
c3.a4(c7,new A.r(o-c3.b.c/2,668))}if(i)for(c5=c6*2,t=c6*120,s=c6*4,p=0;p<26;++p){o=B.j.F(p*53+Math.sin(c5+p)*20,450)
q=B.j.F(t+p*37,420)
J.br(v.save())
v.translate(o,140+q)
v.rotate((s+p)*180/3.141592653589793,0,0)
q=A.bU(B.J,4,8)
$.S()
m=new A.ar(B.S,B.Q,B.W,B.X,B.U)
m.r=[B.cT,G.nq,D.lG,B.aG,B.c][B.o.F(p,5)].gp(0)
c7.aD(q,m)
v.restore()}v.restore()},
b1A(d,e,f,g){var w,v,u=null,t=A.fp(u,B.cr,u,u,u,A.cQ(u,u,u,u,u,u,u,u,u,A.m(u,u,g,u,u,u,u,u,u,u,u,13,u,u,B.u,u,u,!0,u,2,u,u,u,I.DN,u,u),e),B.a6,B.bV,u,B.dA,B.bW)
t.eb()
w=t.b
v=w.c
w=w.a.c
t.a4(d,f.aK(0,new A.r(v/2,w.gba(w)/2)))},
aE(d){return!1}}
C.a2c.prototype={
a7(){return"_Trip."+this.b}}
C.am9.prototype={
S(){return new C.ama(D.XH,new A.eC(0,$.ax()),$,0,null,null)},
gd1(){return this.d}}
C.ama.prototype={
gDw(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.bEu(w.c,8,w.e,!1)
u.d!==$&&A.bD()
u.d=v
t=v}return t},
ghc(d){var w,v=this,u=v.e
if(u===$){w=C.N7(v.a.c)
v.e!==$&&A.bD()
v.e=w
u=w}return u},
gqw(){var w=this.f
return w===$?this.f=new C.aL4(new C.bSo(this)):w},
gU3(){var w=this.ghc(0)
return w.gzr()==null?"Grandma":B.a.i(w.gzr().b)},
Y(){this.a3()
this.arK()},
t(){var w,v=this
v.gqw().t()
w=v.M4$
w===$&&A.c()
w.t()
w=v.qa$
w.U$=$.ax()
w.P$=0
v.bwy()},
are(d){var w,v,u,t=this
if(t.r!==D.adY)return
w=B.dH.aB(0,B.j.D((t.cy+=d)/t.db,0,1))
v=t.cx
t.CW=v+520*w
if(t.cy>=t.db){t.CW=v+520
v=t.w
u=t.gDw()
if(v+1>=u.length){t.r=D.adZ
t.X0()}else{++t.w
t.ay=!1
t.r=D.XI
t.gqw().W3(u[t.w].a)}if(t.c!=null)t.m(new C.bSm())}},
X0(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$X0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:u.gqw().W3("Karibu! Welcome home, my child. You answered every stop, and the whole family is proud of you. Come, sit, the food is ready.")
t=u.x
s=u.gDw().length
r=C.bGM(t,u.z,s)
u.as=r
w=2
return A.b(C.BP(u.a.d,r),$async$X0)
case 2:u.at=e
s=u.a
w=3
return A.b(C.BQ(s.d,s.c.a,"journey",u.x*10),$async$X0)
case 3:u.ch=e
if(u.c!=null)u.m(new C.bSg())
return A.h(null,v)}})
return A.i($async$X0,v)},
brK(){this.aUD()},
aUD(){var w=this
w.cx=w.CW
w.cy=0
w.db=w.ay?3.4:2.6
w.r=D.adY
if(w.c!=null)w.m(new C.bSh())},
Ld(d){var w,v,u,t,s=this
if(s.r!==D.XI)return
w=s.gDw()
v=d===w[s.w].c
if(v){++s.x
u=++s.y
s.z=Math.max(s.z,u)}else{s.y=0
s.ay=!0}s.m(new C.bSl(s,d,v))
u=s.gqw()
t=s.w
u.W3(v?"Hongera! "+w[t].d+" Beep beep, off you go!":"Pole, the tyre is flat! Listen: "+w[t].d+" We will limp on slowly.")},
cS8(){if(this.r!==D.Bn)return
this.aUD()},
B(d){var w,v,u,t=this,s=null,r=A.bR(0,new A.en(A.b4(s,s,s,new C.bjj(t,t.qa$),B.az),s),0,0,0),q=x.p,p=A.a([],q)
for(w=0;w<=t.gDw().length;++w){v=t.w
if(w<v||t.r===D.adZ)v=B.cT
else v=w===v?B.c:B.aT
u=new A.aP(4,4)
p.push(new A.by(1,B.ba,A.p(s,s,B.f,s,s,new A.o(v,s,s,new A.be(u,u,u,u),s,s,B.n),s,7,s,B.wF,s,s,s,s),s))}p.push(B.bm)
p.push(D.fS7)
return new C.tH("Safari Journey",new A.an(B.a0,s,B.ad,B.t,A.a([r,A.ao(s,A.A(p,B.l,s,B.e,B.h,0,s,s),s,s,12,12,2,s),A.ao(10,t.cmo(),s,s,10,10,s,s)],q),s),B.f5,s)},
cmo(){var w,v,u,t,s,r,q,p,o=this,n=null,m=new C.bSk(o),l=D.qp.j(0.96),k=A.l(22),j=A.K(B.cT,B.r,3)
switch(o.r.a){case 0:w=A.x(A.a([A.d("A long drive to the village of Elder "+o.gU3()+". At every stop a villager asks you something about the family. Answer well and the bus flies. Get it wrong and a tyre goes flat!",n,n,n,n,n,n,D.aX9,B.K,n,n),B.T,C.uy("Start the journey",o.gbrJ(),B.cT,D.bRS,D.fA)],x.p),B.l,n,B.e,B.N,0,B.p)
break
case 3:w=D.bed
break
case 1:w=o.w
v=o.gDw()
w=m.$1("Stop "+(w+1)+" of "+v.length+" \xb7 a villager asks")
u=x.p
t=A.a([],u)
for(s=0;r=v[o.w].b,s<r.length;++s){q=new A.aP(14,14)
p=new A.ay(D.lF,2.5,B.r,-1)
t.push(A.az(n,A.p(n,A.d(r[s],n,n,n,n,n,n,D.aWw,B.K,n,n),B.f,n,D.afi,new A.o(D.akP,n,new A.bF(p,p,p,p),new A.be(q,q,q,q),n,n,B.n),n,n,n,n,V.wz,n,n,n),B.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.bSi(o,s),n,n,n,n,n,n,!1,B.a4))}w=A.x(A.a([w,B.P,A.bZ(B.bH,t,B.br,n,8,8)],u),B.E,n,B.e,B.N,0,B.p)
break
case 2:w=m.$1(o.ax?"The villager cheers":"A flat tyre!")
v=o.w+1>=o.gDw().length?"Drive home":"Drive on"
v=A.x(A.a([w,B.P,new A.bJ(B.a8,n,n,C.uy(v,o.gcS7(),B.cT,B.jt,D.fA),n)],x.p),B.E,n,B.e,B.N,0,B.p)
w=v
break
case 4:w=A.a([m.$1("Elder "+o.gU3()),B.P,A.d(""+o.x+" of "+o.gDw().length+" right  \xb7  +"+o.as+" \u2b50",n,n,n,n,n,n,D.aWO,n,n,n)],x.p)
v=o.at
if(v>0){v=C.aR4(v)
u=C.aR4(o.at)
t=o.at
r=o.ch?" \xb7 \ud83c\udfc6 new record!":""
w.push(A.d(v.b+" "+u.a+" \xb7 "+t+" stars"+r,n,n,n,n,n,n,D.acc,n,n,n))}w.push(B.P)
w.push(A.as(C.uy("Back to the games",new C.bSj(o),B.cT,B.ka,D.fA),n,n,n))
w=A.x(w,B.E,n,B.e,B.N,0,B.p)
break
default:w=n}return A.p(n,w,B.f,n,n,new A.o(l,n,j,k,D.aE8,n,B.n),n,n,n,n,B.bj,n,n,n)}}
C.bjj.prototype={
a4(d3,d4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3=null,c4=this.b,c5=c4.qa$.a,c6=d4.a,c7=d4.b,c8=c4.CW,c9=c4.gDw(),d0=B.j.D(c8/(520*(c9.length+1)),0,1),d1=c4.r===D.adY,d2=c7*0.5
c8=A.ap(D.biZ,D.bts,d0)
c8.toString
w=A.ap(D.Z2,G.ais,d0)
w.toString
v=A.ap(B.un,D.brS,d0)
v.toString
$.S()
u=A.L()
t=x.O
u.sap(A.jC(B.J,new A.r(0,d2),A.a([c8,w,v],t),G.a56,B.x,c3))
d3.aD(new A.a6(0,0,0+c6,0+c7),u)
s=new A.r(c6*(0.15+0.7*d0),d2*(0.28+0.45*d0*d0))
u=A.L()
u.sap(A.we(s,60,A.a([D.bsg,B.L],t),c3,B.x,c3,c3,0))
d3.O(s,60,u)
u=A.L()
u.r=B.Zf.gp(0)
d3.O(s,22,u)
for(c8=c5*4,w=c6+240,v=c7*0.06,r=0;r<5;++r){q=B.j.F(r*190-c4.CW*0.06-c8,w)-120
p=v+B.o.F(r,3)*22
for(o=0;o<4;++o){n=D.dBF[o]
$.S()
u=new A.ar(B.S,B.Q,B.W,B.X,B.U)
u.r=B.c.j(0.75).gp(0)
d3.O(new A.r(q+n.a,p+n.b),18,u)}}for(w=d0*0.7,v=d2+4,u=d2-16,m=x.v,l=0;l<2;++l){k=$.S()
j=A.a([],m)
i=new A.aI(k.r,B.aj,c3,c3,j)
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
k=new A.ar(B.S,B.Q,B.W,B.X,B.U)
k.r=A.ap(l===0?D.bhx:D.bwx,D.bmu,w).gp(0)
d3.ag(i,k)}for(w=d2+2,r=0;r<8;++r)this.ccN(d3,new A.r(B.j.F(B.j.F(r*300-c4.CW*0.5,2400)+2400,2400)-150,w),(r&1)===0,d0)
$.S()
w=A.L()
v=A.ap(D.ak_,D.Gu,d0)
v.toString
w.sap(A.jC(new A.r(0,d2),new A.r(0,c7),A.a([v,D.bsi],t),c3,B.x,c3))
d3.aD(new A.a6(0,d2,c6,c7),w)
a0=c7*0.56
a1=c7*0.66
w=A.L()
w.r=D.blN.gp(0)
d3.aD(new A.a6(0,a0,c6,a1),w)
w=A.L()
w.r=D.bw9.gp(0)
d3.aD(new A.a6(0,a0-3,c6,a0),w)
for(q=-B.j.F(c4.CW,70),w=(a0+a1)/2-2,v=w+4;q<c6;q+=70){u=new A.ar(B.S,B.Q,B.W,B.X,B.U)
u.r=I.N_.gp(0)
d3.aD(new A.a6(q,w,q+36,v),u)}for(w=a0-6,v=w-36,u=v+36,t=w-34,k=c6*0.62,j=c6+160,h=c5*3,g=c5*6,f=w+40,e=w-20,d=e+20,a2=w-56,a3=a2+56,a4=w-66,a5=a4+20,a6=w-72,r=0;a7=c9.length,r<=a7;r=a8){a8=r+1
q=k+a8*520-c4.CW
if(q<-160||q>j)continue
a7=r===a7
a9=q+40
b0=a9-26
b1=$.S()
b2=new A.ar(B.S,B.Q,B.W,B.X,B.U)
b2.r=D.bhc.gp(0)
d3.aD(new A.a6(b0,v,b0+52,u),b2)
b2=A.a([],m)
b1=new A.aI(b1.r,B.aj,c3,c3,b2)
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
b0=new A.bw()
b2.push(b0)
b2=b1.f
if(b2!=null)b0.ak(b2)
b1.ab()
b0=new A.ar(B.S,B.Q,B.W,B.X,B.U)
b0.r=D.buj.gp(0)
d3.ag(b1,b0)
b0=a9-6
b1=new A.ar(B.S,B.Q,B.W,B.X,B.U)
b1.r=D.fA.gp(0)
d3.aD(new A.a6(b0,e,b0+12,d),b1)
b4=q-36
b1=b4-2
b0=new A.ar(B.S,B.Q,B.W,B.X,B.U)
b0.r=D.Gh.gp(0)
d3.aD(new A.a6(b1,a2,b1+4,a3),b0)
b0=b4-30
b5=A.bx(new A.a6(b0,a4,b0+60,a5),B.jy)
b0=new A.ar(B.S,B.Q,B.W,B.X,B.U)
b0.r=D.bxA.gp(0)
d3.aq(b5,b0)
b0=new A.ar(B.S,B.Q,B.W,B.X,B.U)
b0.r=D.BQ.gp(0)
b0.b=B.aa
b0.c=2
d3.aq(b5,b0)
b6=a7?"HOME":"STOP "+a8
b7=new A.iM(new A.eq(b6,c3,c3,B.cL,c3,c3,c3,c3,c3,c3,D.fvV),B.a6,B.bV,new A.jj(1),c3,c3,c3,c3,B.bW,c3,B.cr)
b7.eb()
b0=b7.b
b1=b0.c
b0=b0.a.c
b7.a4(d3,new A.r(b4-b1/2,a2-b0.gba(b0)/2))
if(a7)b8=c4.r===D.adZ
else if(r===c4.w){b0=c4.r
b0=b0===D.XI||b0===D.Bn
b8=b0}else b8=!1
if(a7){b0=c4.ghc(0).gzr()
b9=(b0==null?c3:b0.c)===D.oB?1:0}else b9=[0,3,6,7,2,1,4,5][B.o.F(r,8)]
b0=c4.gqw()
c0=b0.d<b0.c.length&&b8
c1=b8&&c4.r===D.Bn
b0=c0?C.hCY(c5,r):0
if(c1)b1=c4.ax?1:-0.3
else b1=a7&&b8?1:0.4
b2=b8&&c4.r===D.XI?0.4:0
b3=c1&&c4.ax?0.5:0
if(a7&&b8)a7=new A.r(40,-110+Math.sin(g)*10)
else a7=c0?new A.r(44+Math.sin(h)*8,-66+Math.sin(c8)*10):c3
C.SF(d3,new A.r(q+4,f),0,b2,-0.8,-0.2,c3,a7,new A.r(q-200,w),b9,b0,0,0.85,b1,b3,c5+r,-0.3)}c9=c6*0.28
this.bIR(d3,new A.r(c9,a1-6),c5,d1,d4)
if(d1)for(w=c5*1.6,v=c9-90,u=a1-10,r=0;r<7;++r){c2=B.j.F(w+r/7,1)
$.S()
t=new A.ar(B.S,B.Q,B.W,B.X,B.U)
t.r=D.bvE.j(0.5*(1-c2)).gp(0)
d3.O(new A.r(v-c2*70,u-c2*18),6+c2*16,t)}if(c4.ay&&c4.r!==D.XH)for(w=c5*1.2,v=c9+62,u=a1-40,r=0;r<5;++r){c2=B.j.F(w+r/5,1)
t=Math.sin(r+c8)
$.S()
m=new A.ar(B.S,B.Q,B.W,B.X,B.U)
m.r=B.c.j(0.5*(1-c2)).gp(0)
d3.O(new A.r(v+t*5,u-c2*50),4+c2*10,m)}if(c4.r===D.Bn&&c4.ax){b7=A.fp(c3,B.cr,c3,c3,c3,A.cQ(c3,c3,c3,c3,c3,c3,c3,c3,c3,A.m(c3,c3,B.cT,c3,c3,c3,c3,c3,c3,c3,c3,24,c3,c3,B.u,c3,c3,!0,c3,c3,c3,c3,c3,A6.IO,c3,c3),"BEEP BEEP!"),B.a6,B.bV,c3,B.dA,B.bW)
b7.eb()
b7.a4(d3,new A.r(c9-b7.b.c/2+40,a0-96-Math.abs(Math.sin(c5*9))*6))}},
ccN(d,e,f,g){var w,v,u,t,s,r,q,p,o=A.ap(D.brM,D.bl8,g)
o.toString
if(f){w=new A.aI($.S().r,B.aj,null,null,A.a([],x.v))
v=e.a
u=e.b
w.E(new A.aZ(v-16,u))
t=u-36
s=u-56
w.E(new A.cc(v-9,t,v-7,s))
w.E(new A.aq(v+7,s))
w.E(new A.cc(v+9,t,v+16,u))
w.E(new A.bw())
t=A.L()
t.r=D.a_q.gp(0)
d.ag(w,t)
for(w=v+0,t=u+-54,s=u+-72,u+=-76,r=0;r<4;++r){q=D.d2s[r]
p=new A.ar(B.S,B.Q,B.W,B.X,B.U)
p.r=D.a_q.gp(0)
p.c=4
p.d=B.bF
d.ah(new A.r(w,t),new A.r(v+q*24,s),p)
p=new A.ar(B.S,B.Q,B.W,B.X,B.U)
p.r=o.gp(0)
d.O(new A.r(v+q*26,u),10,p)}}else{w=e.a5(0,D.eum)
$.S()
v=A.L()
v.r=D.bhe.gp(0)
v.c=4
d.ah(e,w,v)
v=A.bU(e.a5(0,D.eun),16,60)
w=A.L()
w.r=o.gp(0)
d.c2(v,w)}},
bIR(a2,a3,a4,a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a5?Math.sin(a4*22)*1.6:Math.sin(a4*2)*0.4,d=this.b,a0=d.ay&&d.r!==D.XH?0.045:0,a1=a2.c
J.br(a1.save())
a1.translate(a3.a,a3.b+e)
a2.jr(0,a0)
for(w=0;w<2;++w){v=D.dtP[w]
u=d.ay&&d.r!==D.XH&&v>0
J.br(a1.save())
a1.translate(v,-4+(u?4:0))
t=u?15:18
$.S()
s=new A.ar(B.S,B.Q,B.W,B.X,B.U)
s.r=D.bwo.gp(0)
a2.O(B.J,t,s)
a1.rotate(d.CW/18*180/3.141592653589793,0,0)
s=new A.ar(B.S,B.Q,B.W,B.X,B.U)
s.r=D.boy.gp(0)
a2.O(B.J,9,s)
for(r=0;r<4;++r){t=r*3.141592653589793/2
s=Math.cos(t)
t=Math.sin(t)
q=new A.ar(B.S,B.Q,B.W,B.X,B.U)
q.r=B.bh.gp(0)
q.c=2
a2.ah(B.J,new A.r(s*9,t*9),q)}a1.restore()}p=A.u5(D.fb5,B.fR,B.fR,B.ip,B.hU)
$.S()
t=A.L()
t.sap(A.jC(D.eqp,B.a98,D.djA,G.a56,B.x,f))
a2.aq(p,t)
for(o=0;o<20;++o){t=-100+o*10
s=new A.ar(B.S,B.Q,B.W,B.X,B.U)
s.r=D.ddx[B.o.F(o,4)].gp(0)
a2.aD(new A.a6(t,-26,t+10,-19),s)}n=d.r===D.Bn&&d.ax
m=[2,3,4,5]
for(t=a4*10,o=0;o<4;++o){s=-88+o*38
q=s+32
l=new A.a6(s,-66,q,-36)
J.br(a1.save())
a1.clipRRect(A.n2(A.bx(l,B.o_)),$.mH(),!0)
k=new A.ar(B.S,B.Q,B.W,B.X,B.U)
k.r=D.Z2.gp(0)
a2.aD(l,k)
k=m[o]
j=n?1:0.35
i=n?0.5:0
h=d.ay&&d.r===D.Bn?1:0
g=n?Math.max(0,Math.sin(t+o))*6:0
C.SF(a2,new A.r(s+(q-s)/2,-10),g,h,0.5,-0.2,f,f,D.aMQ,k,i,0,0.4,j,0,a4,0)
a1.restore()
j=A.bx(l,B.o_)
i=new A.ar(B.S,B.Q,B.W,B.X,B.U)
i.r=D.akR.gp(0)
i.b=B.aa
i.c=2
a2.aq(j,i)}d=A.bx(D.V0,B.o_)
t=A.L()
t.r=D.Z2.gp(0)
a2.aq(d,t)
J.br(a1.save())
a1.clipRRect(A.n2(A.bx(D.V0,B.o_)),$.mH(),!0)
C.SF(a2,new A.r(D.V0.gbD().a,-10),0,0,0.7,-0.1,f,f,D.aMQ,6,0,0,0.4,0.5,0,a4,0)
a1.restore()
t=A.bx(D.V0,B.o_)
d=A.L()
d.r=D.akR.gp(0)
d.b=B.aa
d.c=2
a2.aq(t,d)
d=A.L()
d.r=Am.Cg.gp(0)
a2.O(D.esw,4,d)
d=A.L()
d.r=D.Gh.gp(0)
a2.aD(D.fce,d)
for(w=0;w<3;++w){v=D.dtR[w]
d=A.bx(new A.a6(v,-96,v+28,-79),B.jy)
t=new A.ar(B.S,B.Q,B.W,B.X,B.U)
t.r=D.Gu.gp(0)
a2.aq(d,t)}a1.restore()},
aE(d){return!1}}
C.aBO.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbA())
w.a9$=null
w.a2()},
aY(){this.b5()
this.b3()
this.bB()}}
C.bgS.prototype={}
C.aBQ.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbA())
w.a9$=null
w.a2()},
aY(){this.b5()
this.b3()
this.bB()}}
C.bgT.prototype={}
C.aBR.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbA())
w.a9$=null
w.a2()},
aY(){this.b5()
this.b3()
this.bB()}}
C.bgU.prototype={}
C.a6E.prototype={
B(d){var w=null
return new A.a3(1/0,this.c,A.b4(w,w,w,new C.bjq(w),B.az),w)}}
C.bjq.prototype={
a4(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=a0.b,e=f*1.1
for(w=a0.a,v=e+0.5,u=0+f,t=e*0.15,s=f/2,r=e/2,q=f*0.8,p=e*0.85,o=x.v,f*=0.2,n=0,m=0;m<w;m+=e){l=D.drL[B.o.F(n,6)]
k=$.S()
j=new A.ar(B.S,B.Q,B.W,B.X,B.U)
j.r=l.gp(0)
d.aD(new A.a6(m,0,m+v,u),j)
if(B.o.F(n,3)===0){j=A.a([],o)
i=new A.aI(k.r,B.aj,null,null,j)
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
k=new A.bw()
j.push(k)
j=i.f
if(j!=null)k.ak(j)
i.ab()
k=new A.ar(B.S,B.Q,B.W,B.X,B.U)
k.r=B.c.j(0.85).gp(0)
d.ag(i,k)}++n}},
aE(d){return!1}}
C.tH.prototype={
B(d){var w=null,v=x.p,u=A.a([A.aH(w,w,w,w,B.Qm,w,w,w,new C.bSf(d),w,w,w,w,w,w),A.E(A.d(this.c,w,1,B.a2,w,w,w,D.ftc,w,w,w),1)],v)
B.d.u(u,this.e)
return A.c4(w,D.YO,A.p(w,A.bm(!0,A.x(A.a([D.c6G,new A.D(D.bIJ,A.A(u,B.l,w,B.e,B.h,0,w,w),w),A.E(this.d,1)],v),B.l,w,B.e,B.h,0,B.p),!0,!1,B.ag,!0,!0),B.f,w,w,D.b9u,w,w,w,w,w,w,w,w),w,!1,!1,w,w)}}
C.It.prototype={
B(d){var w=null,v=this.d,u=C.aR4(v),t=C.ikZ(v),s=B.c.j(0.08),r=A.l(18),q=A.K(B.cT.j(0.6),B.r,1.5),p=A.a([A.d("+"+this.c+" \u2b50 Family Stars",w,w,w,w,w,w,D.fvG,w,w,w)],x.p)
if(this.e)p.push(D.ewN)
p.push(B.am)
p.push(A.d(u.b+" "+u.a+"  \xb7  "+v+" stars",w,w,w,w,w,w,B.h5,w,w,w))
if(t!=null)p.push(new A.D(B.uG,A.d(""+(t.c-v)+" more stars for "+t.b+" "+t.a,w,w,w,w,w,w,B.B1,w,w,w),w))
return A.p(w,A.x(p,B.l,w,B.e,B.h,0,B.p),B.f,w,w,new A.o(s,w,q,r,w,w,B.n),w,w,w,w,B.bI,w,w,w)}}
C.Wp.prototype={
S(){return new C.bmd(A.T(x.N,x.S),B.o.F(Date.now(),1e5))},
cZ0(d){return this.f.$1(d)},
ge3(){return this.d}}
C.bmd.prototype={
gT2(){var w=this.d
return w===$?this.d=this.a.c:w},
Y(){this.a3()
this.PH()},
PH(){var w=0,v=A.j(x.H),u=this,t,s,r,q,p,o,n,m,l
var $async$PH=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(C.bT0(u.a.d),$async$PH)
case 2:n=e
t=u.f,s=0
case 3:if(!(s<8)){w=5
break}r=D.dhB[s]
q=u.a
p=q.d
o=u.d
m=t
l=r
w=6
return A.b(C.bT_(p,(o===$?u.d=q.c:o).a,r),$async$PH)
case 6:m.n(0,l,e)
case 4:++s
w=3
break
case 5:if(u.c!=null)u.m(new C.e2p(u,n))
return A.h(null,v)}})
return A.i($async$PH,v)},
uC(d){return this.cpr(d)},
cpr(d){var w=0,v=A.j(x.H),u=this,t
var $async$uC=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return A.b(A.a5(t,!1).ce(A.ed(new C.e2q(d),!1,null,x.H)),$async$uC)
case 2:u.r=B.o.F(Date.now(),1e5)
if(u.c!=null)u.PH()
return A.h(null,v)}})
return A.i($async$uC,v)},
gb6U(){var w,v,u,t=C.N7(this.gT2()),s=A.a([],x.s)
for(w=t.b,v=w.length,u=0;u<w.length;w.length===v||(0,A.I)(w),++u)s.push(B.a.i(w[u].b))
return s},
a2G(d){return this.cwD(d)},
cwD(d){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$a2G=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=A.a([],x.Y)
for(t=d.length,s=0;s<d.length;d.length===t||(0,A.I)(d),++s)r.push(d[s].aj())
w=2
return A.b(u.a.cZ0(r),$async$a2G)
case 2:if(u.c!=null)u.m(new C.e2r(u,r))
return A.h(null,v)}})
return A.i($async$a2G,v)},
P_(d){return this.bRA(d)},
bRA(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j
var $async$P_=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:j=C.hgn(t.gT2())
if(d==null){s=Date.now()
r=A.a([],x.b)
q=new C.MS("g"+s,"",r)}else q=d
s=t.c
s.toString
r=x.fH
w=3
return A.b(A.a5(s,!1).ce(A.ed(new C.e2n(q),!1,null,r)),$async$P_)
case 3:p=f
if(p==null){w=1
break}s=A.a([],x.c)
for(o=j.length,n=p.a,m=0;m<j.length;j.length===o||(0,A.I)(j),++m){l=j[m]
if(l.a!==n)s.push(l)}k=B.d.bj(j,new C.e2o(p))
o=s.length
B.d.c9(s,k<0?o:Math.min(k,o),p)
w=4
return A.b(t.a2G(A.cX(s,0,A.dD(2,"count",x.S),r).dq(0)),$async$P_)
case 4:case 1:return A.h(u,v)}})
return A.i($async$P_,v)},
XX(d,e){return this.bP9(0,e)},
bP9(d,e){var w=0,v=A.j(x.H),u=this,t,s,r,q,p,o
var $async$XX=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:o=u.c
o.toString
w=4
return A.b(A.cg(null,null,!0,null,new C.e2m(e),o,null,!0,!0,x.y),$async$XX)
case 4:w=g===!0?2:3
break
case 2:o=A.a([],x.c)
for(t=C.hgn(u.gT2()),s=t.length,r=e.a,q=0;q<t.length;t.length===s||(0,A.I)(t),++q){p=t[q]
if(p.a!==r)o.push(p)}w=5
return A.b(u.a2G(o),$async$XX)
case 5:case 3:return A.h(null,v)}})
return A.i($async$XX,v)},
aal(d,e,f,g,h,i,j){var w,v,u,t,s,r,q,p=null,o=h==null,n=o?new C.e2j(this,j):h
o=o?0.55:1
w=A.ap(g,B.w,0.45)
w.toString
w=A.a([g,w],x.O)
v=A.l(20)
u=A.K(B.aT,B.r,1)
t=A.a([new A.ab(0,B.G,g.j(0.35),B.cy,12)],x.V)
s=x.p
r=A.a([A.d(d,p,p,p,p,p,p,B.VQ,p,p,p),B.b3],s)
q=A.l(10)
r.push(A.p(p,A.d(i,p,p,p,p,p,p,D.fu5,p,p,p),B.f,p,p,new A.o(B.hL,p,p,q,p,p,B.n),p,p,p,p,B.CO,p,p,p))
return A.az(p,A.d3(A.p(p,A.x(A.a([A.A(r,B.l,p,B.e,B.h,0,p,p),B.b3,A.d(e,p,2,p,p,p,p,D.fBW,p,p,p),B.cQ,A.d(f,p,3,B.a2,p,p,p,D.fuO,p,p,p)],s),B.E,p,B.e,B.h,0,B.p),B.f,p,p,new A.o(p,p,u,v,t,new A.a8(B.ay,B.aD,B.x,w,p,p),B.n),p,p,p,p,B.yU,p,p,p),o),B.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,n,p,p,p,p,p,p,!1,B.a4)},
Xq(d,e,f,g,h,i){return this.aal(d,e,f,g,h,i,null)},
B(a2){var w,v,u,t,s=this,r=null,q=C.N7(s.gT2()),p=s.gT2(),o=C.aR4(s.e),n=C.hgn(p),m=s.a.e&&J.ad(p.z)<2,l=new C.e2s(s),k=C.hGU(p,1).length,j=C.hH5(p,1).length,i=C.hI_(p,1).length,h=B.c.j(0.07),g=A.l(20),f=A.K(B.cT.j(0.5),B.r,1),e=A.d(o.b,r,r,r,r,r,r,K.ac1,r,r,r),d=A.d(o.a,r,r,r,r,r,r,D.fzp,r,r,r),a0=q.b.length,a1=x.p
g=A.p(r,A.A(A.a([e,B.bb,A.E(A.x(A.a([d,A.d(a0>=3?"The games are made from the "+a0+" people in this tree.":"Add at least 3 people to the tree for games about your own family. Until then the elders teach culture.",r,r,r,r,r,r,B.W9,r,r,r)],a1),B.E,r,B.e,B.h,0,B.p),1),A.x(A.a([A.d(""+s.e,r,r,r,r,r,r,B.q1,r,r,r),D.fYr],a1),B.l,r,B.e,B.h,0,B.p)],a1),B.l,r,B.e,B.h,0,r,r),B.f,r,r,new A.o(h,r,f,g,r,r,B.n),r,r,r,r,B.bI,r,r,r)
f=s.Xq("\ud83c\udfaf","Family Kahoot","Race the clock. Answer fast, keep a streak, climb the podium against your family.",B.aC,new C.e2t(s,p),l.$1("kahoot"))
h=s.Xq("\ud83d\udd25","Fireside Stories","Sit by the fire in the village. The elder teaches, the children answer.",D.lF,new C.e2u(s,p),l.$1("fire"))
a0=s.Xq("\ud83e\uddfa","Calabash Catch","Gourds with the answers fall from the baobab. Slide the basket under the right one!",B.wn,new C.e2v(s,p),l.$1("catch"))
j=j!==0?new C.e2y(s,p):r
j=s.aal("\ud83c\udf31","Plant the Tree","Drag the children onto the branches under their parent and watch the tree grow.",B.hH,j,l.$1("plant"),"Add a parent with two children, and one more person.")
i=i!==0?new C.e2z(s,p):r
i=s.aal("\ud83c\udfad","Who Am I?","A shadow turns into a face as the clues come. Who is hiding in it?",B.lE,i,l.$1("who"),"Add at least 3 people with some facts about them (parents, jobs, birthplaces).")
e=s.Xq("\ud83d\ude8c","Safari Journey","Ride a bus across the savanna to the elder village. A villager asks a question at every stop. A wrong answer is a flat tyre!",B.fm,new C.e2A(s,p),l.$1("journey"))
k=k!==0?new C.e2B(s,p):r
k=A.a([g,B.aO,D.h1s,B.P,A.kZ(0.98,A.a([f,h,a0,j,i,e,s.aal("\ud83c\udf33","Line Up","The family stands under the baobab. Swap them into a line, oldest to youngest.",B.eq,k,l.$1("lineup"),"Add a parent with two children, or a family with more than one generation."),s.Xq("\ud83c\udfeb","Village School","Sit with the children while the elder writes the questions on the chalkboard. A real test with a report card.",B.d5,new C.e2C(s,p),l.$1("school"))],a1),2,12,12,r,B.e_,!0),B.da,A.A(A.a([D.bKx,A.d(""+n.length+" of 2",r,r,r,r,r,r,D.fu9,r,r,r)],a1),B.l,r,B.e,B.h,0,r,r),B.P],a1)
for(j=n.length,w=0;i=n.length,w<i;n.length===j||(0,A.I)(n),++w){v=n[w]
i=B.c.j(0.07)
h=new A.aP(18,18)
u=new A.ay(B.aT,1,B.r,-1)
g=B.a.i(v.b)
g=A.a([D.fJ2,B.bb,new A.by(1,B.ba,A.x(A.a([A.d(g.length===0?"Untitled game":g,r,1,B.a2,r,r,r,B.ht,r,r,r),A.d(""+v.gapI(0).length+" questions \xb7 Kahoot style",r,r,r,r,r,r,B.B1,r,r,r)],a1),B.E,r,B.e,B.h,0,B.p),r)],a1)
if(v.gapI(0).length>=2){f=D.lG.j(0.2)
t=new A.ay(D.lG,1,B.r,-1)
g.push(A.az(r,A.p(r,A.W(B.hc,D.lG,r,r,r,20),B.f,r,r,new A.o(f,r,new A.bF(t,t,t,t),r,r,r,B.a7),r,38,r,r,r,r,r,38),B.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new C.e2D(s,v,p),r,r,r,r,r,r,!1,B.a4))}if(s.a.e){f=B.cT.j(0.2)
t=new A.ay(B.cT,1,B.r,-1)
f=A.az(r,A.p(r,A.W(B.jb,B.cT,r,r,r,20),B.f,r,r,new A.o(f,r,new A.bF(t,t,t,t),r,r,r,B.a7),r,38,r,r,r,r,r,38),B.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new C.e2E(s,v),r,r,r,r,r,r,!1,B.a4)
e=B.fh.j(0.2)
t=new A.ay(B.fh,1,B.r,-1)
B.d.u(g,A.a([B.bm,f,B.bm,A.az(r,A.p(r,A.W(B.ek,B.fh,r,r,r,20),B.f,r,r,new A.o(e,r,new A.bF(t,t,t,t),r,r,r,B.a7),r,38,r,r,r,r,r,38),B.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new C.e2F(s,v),r,r,r,r,r,r,!1,B.a4)],a1))}k.push(A.p(r,new A.c7(B.aL,B.e,B.h,B.l,r,B.p,r,0,g,r),B.f,r,r,new A.o(i,r,new A.bF(u,u,u,u),new A.be(h,h,h,h),r,r,B.n),r,r,r,B.d9,B.bj,r,r,r))}if(s.a.e){j=m?new C.e2w(s):new C.e2x(a2)
i=A.l(18)
h=A.K(m?B.cT:B.aT,B.r,2)
g=m?B.cT.j(0.12):B.dq
f=m?"\uff0b Make your own game  ("+(2-n.length)+" left)":"Both games are made"
k.push(A.az(r,A.p(r,A.as(A.d(f,r,r,r,r,r,r,A.m(r,r,m?B.cT:B.aE,r,r,r,r,r,r,r,r,15,r,r,B.u,r,r,!0,r,r,r,r,r,r,r,r),r,r,r),r,r,r),B.f,r,r,new A.o(g,r,h,i,r,r,B.n),r,r,r,r,B.Og,r,r,r),B.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,j,r,r,r,r,r,r,!1,B.a4))}else if(i===0)k.push(D.h2o)
k.push(B.aB)
k.push(D.atG)
return new C.tH("Family Games \xb7 "+p.b,A.cn(k,r,r,D.bEK,r,r,B.ah,!1),B.f5,r)}}
C.a05.prototype={
a7(){return"_KPhase."+this.b}}
C.amb.prototype={
S(){return new C.amc(D.b1q)},
gd1(){return this.e}}
C.amc.prototype={
t(){var w=this.at
if(w!=null)w.a1(0)
w=this.ax
if(w!=null)w.a1(0)
this.a2()},
fX(d){var w,v=this
v.m(new C.bSA(v))
w=v.at
if(w!=null)w.a1(0)
v.at=A.dg(B.fL,new C.bSB(v))},
aQ7(){var w=this,v=w.ax
if(v!=null)v.a1(0)
w.m(new C.bSq(w))
v=w.at
if(v!=null)v.a1(0)
w.at=A.dg(B.ff,new C.bSr(w))},
Ld(d){var w
if(this.d!==D.ads)return
w=this.at
if(w!=null)w.a1(0)
this.b6Q(d)},
b6Q(d){var w,v=this,u={},t=v.a.w[v.e]
u.a=0
if(d===t.c){w=++v.r
v.w=Math.max(v.w,w);++v.x
w=B.j.V(500+500*B.j.D(v.as/t.r,0,1))+100*Math.min(w-1,5)
u.a=w
v.f+=w}else v.r=0
v.m(new C.bSw(u,v,d))
u=v.ax
if(u!=null)u.a1(0)
v.ax=A.cz(B.t0,v.gix(v))},
cLz(d){var w=this
if(w.d!==D.Xe)return
if(w.e+1>=w.a.w.length)w.YJ()
else{w.m(new C.bSx(w))
w.aQ7()}},
YJ(){var w=0,v=A.j(x.H),u=this,t,s,r,q,p
var $async$YJ=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=u.ax
if(p!=null)p.a1(0)
p=u.x
t=u.a.w.length
s=C.bGM(p,u.w,t)
u.m(new C.bSt(u,s))
w=2
return A.b(C.BP(u.a.e,s),$async$YJ)
case 2:r=e
t=u.a
w=3
return A.b(C.BQ(t.e,t.f,t.r,u.f),$async$YJ)
case 3:q=e
if(u.c!=null)u.m(new C.bSu(u,r,q))
return A.h(null,v)}})
return A.i($async$YJ,v)},
cMo(){var w,v,u,t,s=this,r=s.a,q=new A.e6()
q.d_(r.w.length*31+B.a.gX(r.f))
w=s.a.w.length*900
v=A.a([new A.b5("You",s.f,!0)],x.bd)
r=A.C(s.a.x,x.N)
B.d.e0(r,q)
for(r=A.cX(r,0,A.dD(4,"count",x.S),A.U(r).c),u=r.$ti,r=new A.bQ(r,r.gJ(0),u.k("bQ<ak.E>")),u=u.k("ak.E");r.C();){t=r.d
if(t==null)t=u.a(t)
v.push(new A.b5(t,B.j.V(w*(0.35+q.ai()*0.5)),!1))}B.d.aZ(v,new C.bSy())
return v},
B(d){var w,v,u=this,t=null,s=u.a.c,r=u.d
A:{if(D.b1q===r){w=A.a([D.fYQ,B.T,A.d(s,t,t,t,t,t,t,B.Wj,B.K,t,t)],x.p)
v=u.a.d
if(v.length!==0)w.push(A.d(v,t,t,t,t,t,t,D.fuh,t,t,t))
w.push(B.aB)
w.push(A.d(""+u.a.w.length+" questions. The faster you answer, the more points you win. Keep a streak for a bonus.",t,t,t,t,t,t,B.B7,B.K,t,t))
w.push(B.e1)
w.push(C.uy("Play",u.geY(u),B.cT,B.hc,D.fA))
w=A.as(new A.D(B.eA,A.x(w,B.l,t,B.e,B.N,0,B.p),t),t,t,t)
break A}if(D.b1r===r){w=A.as(A.d(""+u.z,t,t,t,t,t,t,D.fCt,t,t,t),t,t,t)
break A}if(D.ads===r||D.Xe===r){w=u.cs2()
break A}if(D.b1s===r){w=u.ccO()
break A}w=t}return new C.tH(s,w,B.f5,t)},
cs2(){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=k.d===D.Xe,h=k.y,g=k.a.w,f=k.e,e=h===g[f].c
h=x.p
g=A.a([A.d(""+(f+1)+"/"+g.length,j,j,j,j,j,j,D.aWl,j,j,j),B.b3],h)
f=k.r
if(f>=2)g.push(A.d("\ud83d\udd25 "+f+" in a row",j,j,j,j,j,j,D.L4,j,j,j))
g.push(B.as)
f=A.l(14)
g.push(A.p(j,A.d(""+k.f,j,j,j,j,j,j,B.iG,j,j,j),B.f,j,j,new A.o(B.bx,j,j,f,j,j,B.n),j,j,j,j,B.CB,j,j,j))
g=A.A(g,B.l,j,B.e,B.h,0,j,j)
f=A.l(6)
w=i?0:B.j.D(k.as/k.a.w[k.e].r,0,1)
f=A.bu(f,A.kr(B.bx,j,k.as<5?B.fh:B.cT,9,j,w,j),B.aq)
w=A.l(22)
v=A.K(B.cT,B.r,3)
if(i){if(k.y<0)u="Time's up!"
else u=e?"Correct! +"+k.Q:"Not this time"
u=A.x(A.a([A.d(u,j,j,j,j,j,j,A.m(j,j,e?D.lG:G.nq,j,j,j,j,j,j,j,j,24,j,j,B.u,j,j,!0,j,j,j,j,j,j,j,j),j,j,j),B.P,A.d(k.a.w[k.e].d,j,j,j,j,j,j,D.ftl,B.K,j,j)],h),B.l,j,B.e,B.N,0,B.p)}else u=A.d(k.a.w[k.e].a,j,j,j,j,j,j,D.fEF,B.K,j,j)
w=A.E(A.p(j,A.as(u,j,j,j),B.f,j,j,new A.o(D.qp,j,v,w,j,j,B.n),j,j,j,j,B.ft,j,j,1/0),3)
v=A.a([],h)
for(u=k.gix(k),t=0;s=k.a.w[k.e],r=s.b,t<r.length;++t){q=i?u:new C.bSv(k,t)
p=i&&t!==s.c&&t!==k.y?0.3:1
o=B.o.F(t,4)
n=D.aDL[o]
m=new A.aP(16,16)
l=new A.ay(i&&t===s.c?B.c:B.L,4,B.r,-1)
r=A.a([A.d(D.aE4[o],j,j,j,j,j,j,D.fvg,j,j,j),B.as,new A.by(1,B.ba,A.d(r[t],j,3,B.a2,j,j,j,D.fue,j,j,j),j)],h)
if(i&&t===k.a.w[k.e].c)r.push(Q.as9)
if(i&&t===k.y&&t!==k.a.w[k.e].c)r.push(D.bZl)
v.push(A.az(j,new A.SV(A.p(j,new A.c7(B.aL,B.e,B.h,B.l,j,B.p,j,0,r,j),B.f,j,j,new A.o(n,j,new A.bF(l,l,l,l),new A.be(m,m,m,m),W.aC9,j,B.n),j,j,j,j,B.f3,j,j,j),p,B.b0,B.a3,j,j),B.y,!1,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,q,j,j,j,j,j,j,!1,B.a4))}h=A.a([g,B.am,f,B.af,w,B.af,A.E(A.kZ(1.45,v,2,10,10,j,B.e_,!1),4)],h)
if(i)h.push(D.ew2)
return new A.D(B.a14,A.x(h,B.l,j,B.e,B.h,0,B.p),j)},
ccO(){var w,v,u,t,s,r,q,p=this,o=null,n=p.cMo(),m=x.p,l=A.a([D.bdv,A.as(A.d(""+p.x+" of "+p.a.w.length+" right",o,o,o,o,o,o,B.q1,o,o,o),o,o,o),A.as(A.d(""+p.f+" points \xb7 best streak "+p.w,o,o,o,o,o,o,D.VV,o,o,o),o,o,o),B.aO],m)
for(w=0;w<n.length;++w){v=n[w].c?B.cT.j(0.25):B.dq
u=new A.aP(14,14)
t=n[w]
s=t.c
r=new A.ay(s?B.cT:B.bx,1,B.r,-1)
q=A.d(w<3?D.djR[w]:""+(w+1),o,o,o,o,o,o,B.mD,o,o,o)
s=s?B.u:B.O
l.push(A.p(o,new A.c7(B.aL,B.e,B.h,B.l,o,B.p,o,0,A.a([new A.a3(34,o,q,o),new A.by(1,B.ba,A.d(t.a,o,o,o,o,o,o,new A.F(!0,B.c,o,o,o,o,16,s,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o),o,o,o),o),A.d(""+t.b,o,o,o,o,o,o,B.iG,o,o,o)],m),o),B.f,o,o,new A.o(v,o,new A.bF(r,r,r,r),new A.be(u,u,u,u),o,o,B.n),o,o,o,B.cx,B.eV,o,o,o))}l.push(B.T)
m=p.ay
v=p.ch
if(v===0)v=m
l.push(new C.It(m,v,p.CW,o))
l.push(B.aO)
l.push(A.as(C.uy("Back to the games",new C.bSs(p),B.cT,B.ka,D.fA),o,o,o))
return A.cn(l,o,o,B.ft,o,o,B.ah,!1)}}
C.U4.prototype={
S(){return new C.am8(A.T(x.de,x.er))}}
C.am8.prototype={
gDa(){var w,v=this,u=v.d
if(u===$){w=C.hmj(v.a.c.aj())
v.d!==$&&A.bD()
v.d=w
u=w}return u},
glT(d){var w,v,u=this,t=u.e
if(t===$){w=u.gDa().b
v=$.ax()
u.e!==$&&A.bD()
t=u.e=new A.au(new A.ba(w,B.b6,B.aP),v)}return t},
cfP(d){return this.f.c3(0,d,new C.bS0(d))},
Y(){this.a3()
var w=this.gDa().c
if(w.length===0)w.push(C.h7U(null,0,20,""))},
t(){var w,v,u=this.glT(0)
u.U$=$.ax()
u.P$=0
for(u=this.f,u=new A.ds(u,u.r,u.e);u.C();)for(w=J.aT(u.d);w.C();){v=w.gR(w)
v.U$=$.ax()
v.P$=0}this.a2()},
cLp(){if(this.gDa().c.length>=12)return
this.m(new C.bS1(this))},
jI(d){var w,v,u=this,t=u.gDa()
t.b=B.a.i(u.glT(0).a.a)
w=t.gapI(0)
if(t.b.length===0||w.length<2){u.c.L(x.q).f.T(D.fmg)
return}v=t.c
B.d.a8(v)
B.d.u(v,w)
v=u.c
v.toString
A.a5(v,!1).N(t)},
B(d){var w,v,u=this,t=null,s=new C.bSb(),r=x.p,q=A.a([A.bO(!1,D.fO3,t,t,!0,t,t,t,u.gbqB(u),t,t)],r),p=A.a([D.h2_,B.af,A.aN(t,B.Z,!1,t,!0,B.t,t,A.aO(),u.glT(0),t,t,t,t,t,2,s.$1("Name of the game"),B.y,!0,t,!0,t,!1,t,B.ak,t,t,t,t,t,t,t,t,t,1,t,t,!1,"\u2022",t,t,t,t,t,!1,t,t,!1,t,!0,t,B.ac,t,t,t,t,t,t,t,t,t,t,t,B.h5,!0,B.a6,t,B.ao,t,t,t,t),B.aB],r)
for(w=0;v=u.gDa().c.length,w<v;++w)B.d.u(p,A.a([new A.fh(new C.bSa(u,w,s),t)],r))
if(v<12)p.push(A.as(C.uy("\uff0b Add a question",u.gcLo(),B.aT,t,B.c),t,t,t))
return new C.tH("Make your game",A.cn(p,t,t,D.bEH,t,t,B.ah,!1),q,t)}}
C.arg.prototype={
S(){return new C.aFn(A.a([],x._))},
bv(){return this.r.$0()},
qp(){return this.w.$0()},
ge3(){return this.c}}
C.aFn.prototype={
Y(){var w,v
this.a3()
this.wy()
w=this.a
v=w.c
if(v.length!==0)C.a8o(v,w.e,w.d.w)},
wo(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$wo=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=u.c
r.toString
t=u.a
s=t.d
w=2
return A.b(C.hj7(r,t.e,!1,s.w,new C.e44(u),null,s),$async$wo)
case 2:w=3
return A.b(u.wy(),$async$wo)
case 3:return A.h(null,v)}})
return A.i($async$wo,v)},
a0S(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$a0S=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=u.c
r.toString
t=u.a
s=t.d
w=2
return A.b(C.hj7(r,t.e,!0,s.w,new C.e43(u),null,s),$async$a0S)
case 2:w=3
return A.b(u.wy(),$async$a0S)
case 3:return A.h(null,v)}})
return A.i($async$a0S,v)},
wy(){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k
var $async$wy=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(C.Bl(q.a.c),$async$wy)
case 7:p=e
if(q.c!=null)n=q.e||J.cJ(p)
else n=!1
if(n)q.m(new C.e46(q,p))
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
return A.b(C.Hj(q.a.c).dg(0,B.qB),$async$wy)
case 12:o=e
if(q.c==null){r=[1]
w=10
break}q.m(new C.e47(q,o))
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
if(q.c!=null&&q.e)q.m(new C.e48(q))
w=r.pop()
break
case 11:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$wy,v)},
Pl(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$Pl=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:o=t.c
if(o==null){w=1
break}s=x.q
o.L(s).f.T(D.flR)
w=3
return A.b(C.Hj(t.a.c),$async$Pl)
case 3:r=e
w=4
return A.b(C.fYn(t.a.c,r),$async$Pl)
case 4:q=e
w=5
return A.b(C.Hj(t.a.c),$async$Pl)
case 5:p=e
if(t.c==null){w=1
break}t.m(new C.e42(t,p))
o=t.c.L(s).f
s=A.d(q?"Family trees synced \u2014 "+J.ad(t.d)+" tree(s) on this phone and in the database.":"Could not sync to database. Run supabase/family_trees_table.sql in Supabase, then try again.",null,null,null,null,null,null,null,null,null,null)
o.T(A.b2(null,null,null,q?B.dJ:B.d0,null,B.t,null,s,null,B.lK,null,null,null,null,null,null,null,null,null,null))
t.a.qp()
case 1:return A.h(u,v)}})
return A.i($async$Pl,v)},
Iz(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$Iz=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:l=t.c
l.toString
w=3
return A.b(C.it6(l),$async$Iz)
case 3:s=e
if(s==null||t.c==null){w=1
break}r=B.a.i(s.a)
if(r.length===0){w=1
break}q=C.hXd(t.a.e)
l=t.c
l.toString
p=t.a
o=p.d
w=4
return A.b(C.b1t(q,p.e,l,"Each family tree costs $"+B.j.ad(q,2)+" (one-time per tree).",t.a.f,"Create Family Tree",o),$async$Iz)
case 4:if(!e||t.c==null){w=1
break}l=B.o.v(1000*Date.now())
p=C.hD7(r)
o=Date.now()
n=t.a.c
m=new C.kY(l,r.toUpperCase(),p,!0,B.Z,D.DV,new A.V(o,0,!1),0,n,D.uO,B.ce)
w=5
return A.b(C.a41(n,m),$async$Iz)
case 5:w=6
return A.b(t.wy(),$async$Iz)
case 6:t.a.bv()
t.a.qp()
if(t.c==null){w=1
break}t.F5(m)
case 1:return A.h(u,v)}})
return A.i($async$Iz,v)},
F5(d){return this.ckK(d)},
ckK(d){var w=0,v=A.j(x.H),u=this,t,s,r,q,p,o,n,m,l,k
var $async$F5=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:l=A
k=J
w=2
return A.b(C.Bl(u.a.c),$async$F5)
case 2:n=l.nA(k.dH(f,new C.e45(d)))
m=u.c
m.toString
t=u.a
s=t.c
r=t.d
q=t.e
p=t.f
t=t.r
w=3
return A.b(A.hC(m,new C.ara(s,r,q,p,t,n==null?d:n,null),!1,"NgmyFamilyTreeDetailScreen",x.k),$async$F5)
case 3:o=f
w=o!=null?4:5
break
case 4:w=6
return A.b(C.a41(u.a.c,o),$async$F5)
case 6:case 5:w=7
return A.b(u.wy(),$async$F5)
case 7:u.a.qp()
return A.h(null,v)}})
return A.i($async$F5,v)},
B(d){var w,v,u,t,s,r=this,q=null,p=A.P(d).ax.a===B.I,o=new C.uk(p)
if(r.e)return A.as(A.n6(q,p?B.bu:B.bh,q,q,q,q,q,q,q,q),q,q,q)
if(J.ct(r.d)){w=p?B.ee:B.c
v=A.l(15)
u=A.aG(!1,B.a3,!0,q,A.aM(!1,q,!0,A.p(q,D.bWY,B.f,q,q,new A.o(B.aV.j(0.12),q,A.K(B.aV,B.r,2),q,q,q,B.a7),q,52,q,q,q,q,q,52),B.cS,!0,q,q,q,q,q,q,q,q,q,q,q,r.gcjO(),q,q,q,q,q,q,q),B.f,B.L,0,q,q,q,q,q,B.ai)
t=A.d("No Family Trees Yet",q,q,q,q,q,q,A.m(q,q,p?B.aS:B.av,q,q,q,q,q,q,q,q,18,q,q,B.H,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
return new C.Gl(A.p(q,A.x(A.a([u,B.aO,t,B.P,A.d("Create a family tree with names, photos, notes, and generations.",q,q,q,q,q,q,A.m(q,q,p?B.bu:B.bh,q,q,q,q,q,q,q,q,14,q,q,q,q,1.4,!0,q,q,q,q,q,q,q,q),B.K,q,q),B.e1,A.bI(D.h5e,q,r.gaTq(),A.bo(B.bQ,q,q,q,q,q,Av.a1s,q,new A.b9(A.l(12),B.a1),q,q,q))],x.p),B.l,q,B.e,B.h,0,B.p),B.f,q,q,new A.o(w,q,q,v,q,q,B.n),q,q,q,q,D.bHq,q,q,1/0),15,B.ag,1.05,D.adf,q)}w=J.ad(r.d)
v=x.p
w=A.a([A.d("Family Trees ("+w+")",q,q,q,q,q,q,A.m(q,q,p?B.aS:B.av,q,q,q,q,q,q,q,q,16,q,q,B.H,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),B.b3],v)
if(J.cJ(r.d))w.push(A.aH(q,q,q,q,A.W(B.zK,B.aV,q,q,q,q),q,q,q,new C.e4a(r),q,q,q,q,"Sync family trees with database",q))
if(J.cJ(r.d))w.push(A.aH(q,q,q,q,A.W(B.zG,B.aV,q,q,q,q),q,q,q,r.gahc(),q,q,q,q,"Transfer / backup file",q))
w.push(A.dh(E.at4,q,D.fLl,r.gaTq(),A.bo(B.bQ,q,q,q,q,q,q,q,q,q,q,q)))
p=A.A(w,B.l,q,B.e,B.h,0,q,q)
w=A.a([],v)
for(s=0;s<J.ad(r.d);++s){u=A.a([],v)
if(s>0)u.push(B.af)
u.push(new C.Gl(r.cHy(J.t(r.d,s),o),14,B.ag,1,D.adf,q))
B.d.u(w,u)}return A.x(A.a([p,B.aB,A.x(w,B.l,q,B.e,B.h,0,B.p)],v),B.E,q,B.e,B.h,0,B.p)},
cHy(d,e){var w=null,v=e.a,u=v?B.ee:B.c,t=A.l(14),s=A.K((v?B.eh:B.bO).j(0.55),B.r,1),r=A.a([new A.ab(0,B.G,B.w.j(v?0.35:0.08),B.eu,10)],x.V),q=A.l(14),p=A.p(w,D.bW2,B.f,w,w,new A.o(B.aV.j(0.15),w,w,A.l(12),w,w,B.n),w,48,w,w,w,w,w,48),o=A.d(d.b,w,w,w,w,w,w,A.m(w,w,v?B.aS:B.av,w,w,w,w,w,w,w,w,w,w,w,B.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),n=d.gaqI(),m=d.d?"":" \xb7 Public",l=d.y===D.kY?" \xb7 View only":"",k=x.p
l=A.E(A.x(A.a([o,B.bE,A.d(""+n+" members \xb7 Code: "+d.c+m+l,w,w,w,w,w,w,A.m(w,w,v?B.bu:B.bh,w,w,w,w,w,w,w,w,12,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],k),B.E,w,B.e,B.h,0,B.p),1)
return A.p(w,A.aG(!1,B.a3,!0,w,A.aM(!1,q,!0,new A.D(B.bI,A.A(A.a([p,B.bb,l,A.W(B.Pc,v?B.bu:B.bh,w,w,w,w)],k),B.l,w,B.e,B.h,0,w,w),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.e49(this,d),w,w,w,w,w,w,w),B.f,B.L,0,w,w,w,w,w,B.ai),B.f,w,w,new A.o(u,w,s,t,r,w,B.n),w,w,w,w,w,w,w,1/0)}}
C.ara.prototype={
S(){return new C.aFk(A.a([],x._),A.aR(x.N),A.baa())},
bv(){return this.r.$0()},
ge3(){return this.c}}
C.aFk.prototype={
Y(){var w,v,u=this
u.a3()
u.d=u.a.w
u.adP()
w=u.a
v=w.c
if(v.length!==0)C.a8o(v,w.e,w.d.w)},
t(){var w=this.w
w.U$=$.ax()
w.P$=0
this.a2()},
a3Q(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a3Q=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!t.a.d.w){t.yz("Only an admin can make a family tree public or private.")
w=1
break}s=t.d
s===$&&A.c()
r=!s.d
s=t.c
s.toString
w=3
return A.b(A.cg(null,null,!0,null,new C.e3v(r),s,null,!0,!0,x.y),$async$a3Q)
case 3:if(e!==!0||t.c==null){w=1
break}t.Ka()
t.m(new C.e3w(t,r))
w=4
return A.b(t.uy(),$async$a3Q)
case 4:t.a.bv()
t.yz(r?"Family tree is now private.":"Family tree is now public for all users.")
case 1:return A.h(u,v)}})
return A.i($async$a3Q,v)},
cxc(d,e,f){var w=this,v=w.y,u=w.d
u===$&&A.c()
u=u.a
if(v===u&&w.x)return
w.x=!0
w.y=u
$.aU.x1$.push(new C.e3q(w,f,d,e))},
aVJ(d,e,f){var w,v,u=d.a,t=e.a,s=d.b,r=e.b,q=Math.min(1,Math.max(0.45,Math.min(u/t,s/r)))
t*=q
w=t<=u?(u-t)/2:u/2-f*q
u=r*q
v=u<=s?(s-u)/2:8
u=A.dq()
u.ed(w,v,0,1)
u.k6(q,q,1,1)
this.w.sp(0,u)},
bdu(d,e){var w,v,u,t,s=this.w,r=s.a,q=new A.eM(new Float64Array(16))
q.e6(r)
w=q.Df()
v=B.j.D(w*d,0.2,3)/w
r=e.a/2
u=e.b/2
t=A.dq()
t.ed(r,u,0,1)
t.k6(v,v,1,1)
t.ed(-r,-u,0,1)
t.iW(0,q)
s.sp(0,t)},
adP(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$adP=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=A
r=J
w=2
return A.b(C.Bl(u.a.c),$async$adP)
case 2:t=s.nA(r.dH(e,new C.e2S(u)))
if(t!=null&&u.c!=null)u.m(new C.e2T(u,t))
return A.h(null,v)}})
return A.i($async$adP,v)},
yz(d){var w=null,v=this.c
if(v==null)return
v.L(x.q).f.T(A.b2(w,w,w,w,w,B.t,w,A.d(d,w,w,w,w,w,w,w,w,w,w),w,B.Y,w,w,w,w,w,w,w,w,w,w))},
wo(){var w=0,v=A.j(x.H),u=this,t,s,r,q,p,o,n,m
var $async$wo=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:o=u.c
o.toString
t=u.a
s=t.d
t=t.e
r=s.w
q=u.d
q===$&&A.c()
w=2
return A.b(C.hj7(o,t,!1,r,new C.e39(u),q.a,s),$async$wo)
case 2:n=A
m=J
w=3
return A.b(C.Hj(u.a.c),$async$wo)
case 3:p=n.nA(m.dH(e,new C.e3a(u)))
if(p!=null&&u.c!=null)u.m(new C.e3b(u,p))
return A.h(null,v)}})
return A.i($async$wo,v)},
Ka(){var w=this.e,v=this.d
v===$&&A.c()
w.push(v)
if(w.length>25)B.d.cG(w,0)},
uy(){var w=0,v=A.j(x.H),u=this,t,s
var $async$uy=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a.c
s=u.d
s===$&&A.c()
w=2
return A.b(C.a41(t,s),$async$uy)
case 2:return A.h(null,v)}})
return A.i($async$uy,v)},
a2m(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$a2m=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:q=t.d
q===$&&A.c()
if(!C.uz(q,t.a.c)){t.yz("View only \u2014 you cannot rename this shared tree.")
w=1
break}q=t.c
q.toString
w=3
return A.b(C.iuj(q,"Save",t.d.b,"Family tree name","Edit family tree name"),$async$a2m)
case 3:s=e
if(s==null||t.c==null){w=1
break}r=B.a.i(s).toUpperCase()
if(r.length===0){w=1
break}t.Ka()
t.m(new C.e3p(t,r))
w=4
return A.b(t.uy(),$async$a2m)
case 4:case 1:return A.h(u,v)}})
return A.i($async$a2m,v)},
b3w(){var w=this.c
w.toString
A.a5(w,!1).ce(A.ed(new C.e36(this),!1,null,x.H))},
a15(){return this.ckM()},
ckM(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$a15=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:n={}
m=t.d
m===$&&A.c()
if(!C.uz(m,t.a.c)){t.yz("View only \u2014 display settings are locked.")
w=1
break}m=t.c
m.toString
m=A.P(m)
s=t.d
r=s.w
n.a=r
s=s.f
q=new A.Y(s,new C.e3m(),A.U(s).k("Y<1>")).gJ(0)
s=A.et([0,2,3,4,5,6,8,r],x.S)
p=A.C(s,s.$ti.k("ci.E"))
B.d.fg(p)
s=t.c
s.toString
w=3
return A.b(A.bS(B.L,null,new C.e3n(n,t,new C.uk(m.ax.a===B.I),p,q),s,!0,!0,!0,null,!1,!1,x.bn),$async$a15)
case 3:o=e
if(o==null||t.c==null){w=1
break}w=o.b!==t.d.w?4:5
break
case 4:t.Ka()
t.m(new C.e3o(t,o))
w=6
return A.b(t.uy(),$async$a15)
case 6:case 5:if(o.a&&t.c!=null)t.b3w()
case 1:return A.h(u,v)}})
return A.i($async$a15,v)},
WK(d){return this.bEa(d)},
bEa(d){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$WK=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.d
r===$&&A.c()
if(!C.uz(r,t.a.c)){t.yz("View only \u2014 you cannot add members to this shared tree.")
w=1
break}r=t.c
r.toString
w=3
return A.b(A.cg(null,null,!0,null,new C.e2G(t,d),r,null,!0,!0,x.P),$async$WK)
case 3:s=f
if(s==null){w=1
break}t.Ka()
t.m(new C.e2H(t,s))
w=4
return A.b(t.uy(),$async$WK)
case 4:case 1:return A.h(u,v)}})
return A.i($async$WK,v)},
a4b(d){return this.cJN(d)},
cJN(d){var w=0,v=A.j(x.H),u=this,t,s
var $async$a4b=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=u.c
s.toString
s=A.P(s)
t=u.c
t.toString
w=2
return A.b(A.cg(null,null,!0,null,new C.e3y(u,d,new C.uk(s.ax.a===B.I)),t,null,!0,!0,x.H),$async$a4b)
case 2:return A.h(null,v)}})
return A.i($async$a4b,v)},
ch1(d){var w=this,v=w.d
v===$&&A.c()
if(C.uz(v,w.a.c))w.P0(d)
else w.a4b(d)},
ajI(d,e){return this.cBa(d,e)},
cBa(d,e){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$ajI=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=t.c
r.toString
r=A.P(r)
s=t.c
if(s==null){w=1
break}w=3
return A.b(A.cg(null,null,!0,null,new C.e3s(new C.uk(r.ax.a===B.I),d,e),s,null,!0,!0,x.H),$async$ajI)
case 3:case 1:return A.h(u,v)}})
return A.i($async$ajI,v)},
IE(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$IE=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:o=t.d
o===$&&A.c()
w=o.y===D.kY?3:5
break
case 3:w=6
return A.b(C.h65(t.a.c),$async$IE)
case 6:s=e
o=t.a
r=C.hra(o.e,o.c)
w=!s||!r?7:8
break
case 7:w=9
return A.b(t.ajI(!s,!r),$async$IE)
case 9:w=1
break
case 8:w=4
break
case 5:if(!C.aRb(o,t.a.c)){t.yz("Only the tree creator can delete this family tree.")
w=1
break}case 4:o=t.c
if(o==null){w=1
break}q=t.d
p=q.b
w=10
return A.b(A.lr(o,"Cancel","Remove",q.y===D.kY?'This removes "'+p+"\" from this phone only. The creator's copy is not affected.":'Delete "'+p+'" permanently? This cannot be undone.',"Remove family tree?"),$async$IE)
case 10:if(!e||t.c==null){w=1
break}w=11
return A.b(C.aR7(t.a.c,t.d.a),$async$IE)
case 11:t.a.bv()
o=t.c
if(o==null){w=1
break}A.j2(o,null)
case 1:return A.h(u,v)}})
return A.i($async$IE,v)},
abh(d){return this.bPq(d)},
bPq(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$abh=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:p={}
o=t.d
o===$&&A.c()
if(!C.uz(o,t.a.c)){w=1
break}s=t.d.f
r=d.e
p.a=r
if(r==null||!B.d.aV(s,new C.e2I(p))){o=A.U(s)
p.a=A.nA(new A.cM(new A.Y(s,new C.e2J(d),o.k("Y<1>")),new C.e2K(),o.k("cM<1,n>")))}q=p.a
if(q==null)q=d.d
t.Ka()
t.m(new C.e2L(t,s,d,q))
w=3
return A.b(t.uy(),$async$abh)
case 3:t.yz(d.b+" was removed. Tap Undo to bring them back.")
case 1:return A.h(u,v)}})
return A.i($async$abh,v)},
P0(d){return this.bRE(d)},
bRE(d){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$P0=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.d
r===$&&A.c()
w=!C.uz(r,t.a.c)?3:4
break
case 3:w=5
return A.b(t.a4b(d),$async$P0)
case 5:w=1
break
case 4:r=t.c
r.toString
w=6
return A.b(A.cg(null,null,!0,null,new C.e2P(t,d),r,null,!0,!0,x.P),$async$P0)
case 6:s=f
if(s==null){w=1
break}t.Ka()
t.m(new C.e2Q(t,s))
w=7
return A.b(t.uy(),$async$P0)
case 7:case 1:return A.h(u,v)}})
return A.i($async$P0,v)},
cHY(){var w=this,v=w.d
v===$&&A.c()
if(!C.uz(v,w.a.c))return
if(w.e.length===0)return
w.m(new C.e3x(w))
w.uy()},
ZN(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$ZN=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:n=t.d
n===$&&A.c()
if(!C.aRb(n,t.a.c)){t.yz("Only the tree creator can invite collaborators.")
w=1
break}n=t.c
n.toString
n=A.P(n)
s=$.ax()
r=new A.au(B.ax,s)
q=t.d.e
p=A.bp(new A.N(q,t.gcfv(),A.U(q).k("N<1,n>")).bY(0,new C.e31()),!0,x.N)
q=t.c
q.toString
w=3
return A.b(A.cg(null,null,!0,null,new C.e32(t,new C.uk(n.ax.a===B.I),p,r),q,null,!0,!0,x.y),$async$ZN)
case 3:o=e
r.U$=s
r.P$=0
if(o!==!0||t.c==null){w=1
break}t.Ka()
t.m(new C.e33(t,p))
w=4
return A.b(t.uy(),$async$ZN)
case 4:t.yz("Collaborators updated.")
case 1:return A.h(u,v)}})
return A.i($async$ZN,v)},
cfw(d){return B.a.i(d.toLowerCase())},
cjy(){var w,v,u,t,s,r=this,q=r.c
q.toString
w=r.a.c
v=r.d
v===$&&A.c()
u=C.uz(v,w)
t=r.d
s=C.ijv(t)
C.ita(q,t.b,u,C.iju(r.d),s,v.a,w)},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=A.P(d).ax.a===B.I,m=new C.uk(n),l=p.d
l===$&&A.c()
l=l.f
w=new A.Y(l,new C.e3F(),A.U(l).k("Y<1>")).gJ(0)
l=n?B.c4:B.hY
v=A.W(B.a2B,n?B.bu:B.bh,o,o,o,18)
u=x.p
v=A.a([new A.D(B.CC,A.aM(!1,o,!0,new A.D(B.hN,A.A(A.a([v,B.bm,A.d("Back to Family Trees",o,o,o,o,o,o,A.m(o,o,n?B.bu:B.bh,o,o,o,o,o,o,o,o,o,o,o,B.a9,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],u),B.l,o,B.e,B.N,0,o,o),o),o,!0,o,o,o,o,o,o,o,o,o,o,o,new C.e3G(p,d),o,o,o,o,o,o,o),o),new A.D(B.nJ,p.c1T(m),o)],u)
if(p.d.y===D.kY){t=B.ty.j(0.15)
s=A.l(12)
r=A.K(B.ty.j(0.45),B.r,1)
q=C.Hh(p.d,p.a.c)
v.push(new A.D(B.yX,A.p(o,A.A(A.a([D.c0v,B.as,A.E(A.d("View only \u2014 shared by "+q+". You can keep up to 2 shared trees. Tap a member to view details.",o,o,o,o,o,o,A.m(o,o,n?B.aS:B.av,o,o,o,o,o,o,o,o,12,o,o,B.a9,o,1.35,!0,o,o,o,o,o,o,o,o),o,o,o),1)],u),B.l,o,B.e,B.h,0,o,o),B.f,o,o,new A.o(t,o,r,s,o,o,B.n),o,o,o,o,B.hO,o,o,1/0),o))}u=A.a([A.d("Family Tree",o,o,o,o,o,o,A.m(o,o,n?B.aS:B.av,o,o,o,o,o,o,o,o,15,o,o,B.H,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),B.b3],u)
if(C.uz(p.d,p.a.c)&&p.e.length!==0)u.push(new C.Gx("Undo",B.pE,p.gcHX(),m,o,o))
u.push(new C.Gx("Family Book",D.bQI,p.gcjx(),m,B.uo,o))
u.push(new C.Gx("Family games",B.nP,p.gcjJ(),m,B.aC,o))
if(C.uz(p.d,p.a.c))u.push(new C.Gx("Display settings",B.Dt,p.gckL(),m,B.b2,o))
u.push(new C.Gx("Sync",B.zG,p.gahc(),m,o,o))
t=p.d
if(t.y===D.kY||C.aRb(t,p.a.c)){t=p.d.y===D.kY?"Remove shared tree":"Delete tree"
u.push(new C.Gx(t,B.ek,p.gbPA(),m,B.fh,o))}if(C.uz(p.d,p.a.c))u.push(new C.Gx("Add member",B.wT,new C.e3H(p),m,B.bQ,o))
v.push(new A.D(Z.amP,A.A(u,B.l,o,B.e,B.h,0,o,o),o))
if(p.d.gaqI()===0){u=A.as(A.d("Add your first member to build the tree.",o,o,o,o,o,o,A.m(o,o,n?B.bu:B.bh,o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),o,o,o)
n=u}else n=A.cm(new C.e3I(p,m))
v.push(A.E(n,1))
if(w>0){n=p.f
u=A.W(n?O.a2F:A5.Pd,o,o,o,o,o)
v.push(A.as(A.ht(u,A.d(n?"Hide hidden members":""+w+" hidden",o,o,o,o,o,o,o,o,o,o),new C.e3J(p),o),o,o,o))}return A.c4(o,l,A.bm(!0,A.x(v,B.E,o,B.e,B.h,0,B.p),!0,!1,B.ag,!0,!0),o,!1,!1,o,o)},
c1T(d){var w,v,u,t,s,r,q,p,o,n=this,m=null
n.d===$&&A.c()
w=A.l(22)
v=A.a([new A.ab(0,B.G,B.fX.j(0.35),B.dp,18)],x.V)
u=A.l(22)
t=A.ao(-26,A.W(B.zx,B.c.j(0.08),m,m,m,130),m,m,m,-18,m,m)
s=A.aG(!1,B.a3,!0,m,A.aM(!1,m,!0,A.p(m,D.c3P,B.f,m,m,new A.o(B.c.j(0.16),m,A.K(B.c.j(0.45),B.r,1.5),m,m,m,B.a7),m,46,m,m,m,m,m,46),B.cS,!0,m,m,m,m,m,m,m,m,m,m,m,n.gahc(),m,m,m,m,m,m,m),B.f,B.L,0,m,m,m,m,m,B.ai)
r=n.d
q=A.d(r.b,m,1,B.a2,m,m,m,D.fwj,m,m,m)
r=r.gaqI()
p=n.d.gaqI()===1?"member":"members"
o=x.p
p=A.a([s,B.bb,A.E(A.x(A.a([q,B.bE,A.d(""+r+" "+p,m,m,m,m,m,m,A.m(m,m,B.c.j(0.8),m,m,m,m,m,m,m,m,12.5,m,m,B.a9,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)],o),B.E,m,B.e,B.h,0,B.p),1)],o)
if(C.uz(n.d,n.a.c))p.push(A.aH(m,m,m,m,D.c0J,m,m,m,n.gcuA(),m,m,m,m,"Rename",m))
s=A.A(p,B.l,m,B.e,B.h,0,m,m)
r=n.d.d
q=r?B.jL:B.n6
r=r?"Private":"Public"
r=A.E(n.axg(q,"Privacy",r,n.a.d.w?n.gcGT():m),1)
q=A.E(n.axg(B.wY,"Tree code",n.d.c,new C.e2R(n)),1)
p=n.d.e.length
p=p===0?"Invite":""+p+" \xb7 Manage"
p=A.a([s,B.af,A.A(A.a([r,B.ae,q,B.ae,A.E(n.axg(D.bSp,"Collaborators",p,n.gc6I()),1)],o),B.l,m,B.e,B.h,0,m,m)],o)
if(n.d.y===D.kY){s=B.c.j(0.15)
B.d.u(p,A.a([B.P,A.aG(!1,B.a3,!0,A.l(999),A.aM(!1,A.l(999),!0,new A.D(B.hk,A.A(A.a([A.W(B.nQ,B.c,m,m,m,14),B.e6,A.d("View only",m,m,m,m,m,m,B.aWq,m,m,m)],o),B.l,m,B.e,B.N,0,m,m),m),m,!0,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),B.f,s,0,m,m,m,m,m,B.ai)],o))}return A.p(m,A.bu(u,new A.an(B.a0,m,B.ad,B.t,A.a([t,new A.D(B.H3,A.x(p,B.E,m,B.e,B.h,0,B.p),m)],o),m),B.aq),B.f,m,m,new A.o(m,m,m,w,v,D.c88,B.n),m,m,m,m,m,m,m,1/0)},
axg(d,e,f,g){var w=null,v=B.c.j(0.14)
return A.aG(!1,B.a3,!0,A.l(14),A.aM(!1,A.l(14),!0,new A.D(K.ao3,A.x(A.a([A.W(d,B.c,w,w,w,18),B.aw,A.d(e,w,1,B.a2,w,w,w,A.m(w,w,B.c.j(0.75),w,w,w,w,w,w,w,w,10.5,w,w,B.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.tV,A.d(f,w,1,B.a2,w,w,w,An.xy,w,w,w)],x.p),B.l,w,B.e,B.h,0,B.p),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,g,w,w,w,w,w,w,w),B.f,v,0,w,w,w,w,w,B.ai)}}
C.bgW.prototype={
B(d){var w,v,u,t=null,s=this.d,r=s.a
if(r.gau(r)&&s.c.length===0)return B.bM
w=s.d
v=s.e
u=A.a([A.b4(t,t,t,new C.bgZ(s,t),new A.av(w,v))],x.p)
r=r.gdP(r)
B.d.u(u,r.dN(r,new C.dhu(this),x.l))
r=s.c
B.d.u(u,new A.N(r,new C.dhv(this),A.U(r).k("N<1,v>")))
return new A.D(B.uK,new A.a3(w,v,new A.an(B.a0,t,B.ad,B.f,u,t),t),t)}}
C.KY.prototype={}
C.GB.prototype={}
C.bgY.prototype={
gbm0(){var w,v=this,u=v.r
if(u!=null)return u+16
u=v.f
if(u==null)return v.d/2
w=v.a.h(0,u)
if(w==null)return v.d/2
return w.b.a+16}}
C.aL_.prototype={}
C.bgZ.prototype={
bRf(d,e,f,g){var w,v,u,t,s,r,q=f.a<=g.a,p=q?f:g,o=q?g:f,n=p.a+28+3,m=o.a-28-3
if(m<=n+2)return
w=(p.b+o.b)/2
q=$.S()
v=A.L()
v.r=B.bD.j(0.75).gp(0)
v.c=2
v.d=B.bF
d.ah(new A.r(n,w),new A.r(m,w),v)
u=(n+m)/2
t=new A.aI(q.r,B.aj,null,null,A.a([],x.v))
q=w+5.5
t.E(new A.aZ(u,q))
s=w-1.1
r=w-8.8
t.E(new A.kn(u-9.9,s,u-4.95,r,u,w-3.0250000000000004))
t.E(new A.kn(u+4.95,r,u+9.9,s,u,q))
t.E(new A.bw())
q=A.L()
q.r=B.c.gp(0)
d.O(new A.r(u,w),9,q)
q=A.L()
q.r=B.bD.gp(0)
d.ag(t,q)},
bRc(d,e,f,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
if(a0.length===0)return
B.d.aZ(a0,new C.dhP())
w=f.b
v=w+(B.d.gH(a0).b-w)/2
u=B.d.aV(a0,new C.dhQ(f))
t=new A.N(a0,new C.dhR(f),A.U(a0).k("N<1,G>")).bY(0,new C.dhS()).cE(0,1/0,B.ru)
w=f.a
d.ah(f,new A.r(w,u?v:v-Math.min(10,t/2)),e)
for(s=a0.length,r=x.v,q=0;q<a0.length;a0.length===s||(0,A.I)(a0),++q){p=a0[q]
o=p.a
n=o-w
m=Math.abs(n)
if(m<0.5){d.ah(new A.r(o,v),p,e)
continue}l=J.lM(n)
k=Math.min(10,m/2)
m=$.S()
j=A.a([],r)
i=new A.aI(m.r,B.aj,null,null,j)
j.push(new A.aZ(w,v-k))
i.ab()
m=l*k
h=new A.cc(w,v,w+m,v)
j.push(h)
g=i.f
if(g!=null)h.ak(g)
i.ab()
m=new A.aq(o-m,v)
j.push(m)
h=i.f
if(h!=null)m.ak(h)
i.ab()
m=new A.cc(o,v,o,v+k)
j.push(m)
h=i.f
if(h!=null)m.ak(h)
i.ab()
o=new A.aq(o,p.b)
j.push(o)
m=i.f
if(m!=null)o.ak(m)
i.ab()
d.ag(i,e)}},
a4(d,e){var w,v,u,t,s,r
$.S()
w=A.L()
w.r=B.bQ.j(0.75).gp(0)
w.c=2.2
w.b=B.aa
w.d=B.bF
w.e=B.dR
for(v=this.b.b,u=v.length,t=0;s=v.length,t<s;v.length===u||(0,A.I)(v),++t){r=v[t]
s=r.d
if(s!=null&&s.length!==0)this.bRc(d,w,r.a,s)
else{if(!r.c){s=r.b
s=!(0===s.a&&0===s.b)}else s=!1
if(s)d.ah(r.a,r.b,w)}}for(t=0;t<v.length;v.length===s||(0,A.I)(v),++t){r=v[t]
if(r.c)this.bRf(d,w,r.a,r.b)}},
aE(d){return d.b!==this.b}}
C.bkK.prototype={
gccQ(){var w=this.c
if(B.a.i(w.y).length!==0)return B.aEl
switch(w.c.a){case 0:return D.d16
case 1:return D.ddr
case 2:return D.dvJ}},
gccT(){var w=this.c,v=C.hCi(w.w),u=C.hCi(w.y)
w=v!=null
if(w&&u!=null)return v+" \u2013 "+u
if(w)return"b. "+v
if(u!=null)return"\u2020 "+u
return""},
B(d){var w,v,u,t=this,s=null,r=A.P(d).ax.a===B.I,q=t.gccQ(),p=t.c,o=N.bFm(p.f),n=t.gccT(),m=x.V,l=A.a([new A.ab(0,B.G,B.d.gal(q).j(0.35),B.cJ,10)],m),k=r?B.av:B.c,j=A.K(r?B.av:B.c,B.r,2)
if(o!=null)w=A.tL(B.A,s,B.cl,B.c1,!1,s,o,!1,s,s)
else{w=A.a([B.d.gH(q).j(0.18),B.d.gal(q).j(0.28)],x.O)
v=B.a.i(p.b)
v=v.length===0?"?":v[0].toUpperCase()
w=A.p(B.A,A.d(v,s,s,s,s,s,s,A.m(s,s,B.d.gal(q),s,s,s,s,s,s,s,s,20,s,s,B.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),B.f,s,s,new A.o(s,s,s,s,s,new A.a8(B.a5,B.a8,B.x,w,s,s),B.n),s,s,s,s,s,s,s,s)}v=x.p
l=A.a([A.p(s,A.p(s,A.hZ(w,B.aq),B.f,s,s,new A.o(k,s,j,s,s,s,B.a7),s,s,s,s,s,s,s,s),B.f,s,s,new A.o(s,s,s,s,l,new A.a8(B.ay,B.aD,B.x,q,s,s),B.a7),s,56,s,s,B.CS,s,s,56)],v)
k=t.d
if(k>0){j=A.l(10)
w=A.K(r?B.av:B.c,B.r,1.5)
l.push(A.ao(s,A.p(s,A.d(""+k,s,s,s,s,s,s,D.fH9,s,s,s),B.f,s,s,new A.o(B.ci,s,w,j,s,s,B.n),s,s,s,s,D.bJl,s,s,s),s,s,s,-6,-4,s))}k=r?B.cu:B.c
j=A.l(8)
w=A.K(B.d.gH(q).j(0.35),B.r,1)
m=A.a([new A.ab(0,B.G,B.w.j(r?0.3:0.06),B.dL,6)],m)
p=B.a.i(p.b)
u=p.length
if(u<=24)u=9.5
else u=u<=32?8.2:7.2
p=A.a([A.d(p,s,4,s,s,s,s,A.m(s,s,r?B.c:B.cu,s,s,s,s,s,s,s,s,u,s,s,B.H,s,1.15,!0,s,s,s,s,s,s,s,s),B.K,s,s)],v)
if(n.length!==0)p.push(A.d(n,s,1,s,s,s,s,A.m(s,s,r?B.aR:B.bh,s,s,s,s,s,s,s,s,7.5,s,s,B.a9,s,1.1,!0,s,s,s,s,s,s,s,s),s,s,s))
return A.az(s,new A.a3(84,112,A.x(A.a([new A.an(B.a0,s,B.ad,B.f,l,s),B.aw,A.p(s,A.x(p,B.l,s,B.e,B.N,0,B.p),B.f,s,D.b7F,new A.o(k,s,w,j,m,s,B.n),s,s,s,s,D.bJw,s,s,s)],v),B.l,s,B.e,B.h,0,B.p),s),B.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,t.e,s,s,s,s,s,s,!1,B.a4)}}
C.bg0.prototype={
a4(d,e){var w,v,u,t,s
$.S()
w=A.L()
v=this.b
u=v?B.c:D.bkI
w.r=u.j(v?0.05:0.09).gp(0)
for(v=e.b,u=e.a,t=10;t<v;t+=20)for(s=10;s<u;s+=20)d.O(new A.r(s,t),1,w)},
aE(d){return d.b!==this.b}}
C.byL.prototype={
B(d){var w=this,v=null,u=new C.fnS(w),t=w.c,s=t?B.cu:B.c,r=A.l(12),q=u.$3(B.i0,"Zoom in",w.d),p=A.p(v,v,B.f,t?B.bx:B.fr,v,v,v,1,v,v,v,v,v,22),o=u.$3(B.wV,"Zoom out",w.e)
return A.aG(!1,B.a3,!0,r,A.x(A.a([q,p,o,A.p(v,v,B.f,t?B.bx:B.fr,v,v,v,1,v,v,v,v,v,22),u.$3(B.aqx,"Fit the whole tree",w.f)],x.p),B.l,v,B.e,B.N,0,B.p),B.f,s,4,v,B.dC,v,v,v,B.ai)}}
C.bo5.prototype={
B(d){var w=this,v=null,u=B.bQ.j(0.15),t=A.K(B.bQ,B.r,2),s=w.e,r=x.p
t=A.az(v,A.p(v,A.x(A.a([A.W(s?O.a2F:A5.Pd,B.bQ,v,v,v,22),A.d("+"+w.c,v,v,v,v,v,v,D.fD9,v,v,v)],r),B.l,v,B.b8,B.h,0,B.p),B.f,v,v,new A.o(u,v,t,v,v,v,B.a7),v,56,v,v,v,v,v,56),B.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,w.f,v,v,v,v,v,v,!1,B.a4)
u=A.a([t,B.am,A.d(s?"SHOW LESS":"MORE KIDS",v,v,v,v,v,v,D.fAU,B.K,v,v)],r)
if(s){t=A.a([B.am],r)
s=w.d
B.d.u(t,new A.N(s,new C.eYU(w),A.U(s).k("N<1,v>")))
B.d.u(u,t)}return new A.a3(84,v,A.x(u,B.l,v,B.e,B.h,0,B.p),v)}}
C.a0i.prototype={
S(){return new C.aDN()},
bv(){return this.Q.$0()},
ge3(){return this.w}}
C.aDN.prototype={
Y(){var w,v,u,t,s,r=this,q=null
r.a3()
w=r.a
v=w.d
u=v==null
t=u?q:v.b
if(t==null)t=""
s=$.ax()
r.d!==$&&A.aQ()
r.d=new A.au(new A.ba(t,B.b6,B.aP),s)
t=u?q:v.r
if(t==null)t=""
r.e!==$&&A.aQ()
r.e=new A.au(new A.ba(t,B.b6,B.aP),s)
t=u?q:v.w
if(t==null)t=""
r.f!==$&&A.aQ()
r.f=new A.au(new A.ba(t,B.b6,B.aP),s)
t=u?q:v.x
if(t==null)t=""
r.r!==$&&A.aQ()
r.r=new A.au(new A.ba(t,B.b6,B.aP),s)
t=u?q:v.y
if(t==null)t=""
r.w!==$&&A.aQ()
r.w=new A.au(new A.ba(t,B.b6,B.aP),s)
t=u?q:v.z
if(t==null)t=""
r.x!==$&&A.aQ()
r.x=new A.au(new A.ba(t,B.b6,B.aP),s)
t=u?q:v.c
r.y=t==null?D.z8:t
t=u?q:v.d
r.z=t==null?w.f:t
r.Q=u?q:v.e
r.as=u?q:v.f
t=u?q:v.Q
if(t==null)w=C.il_(w.r,w.f)
else w=t
r.at=w
w=u?q:v.at
r.ax=w==null?0:w
w=u?q:v.as
r.ay=w===!0},
t(){var w,v=this,u=v.d
u===$&&A.c()
w=u.U$=$.ax()
u.P$=0
u=v.e
u===$&&A.c()
u.U$=w
u.P$=0
u=v.f
u===$&&A.c()
u.U$=w
u.P$=0
u=v.r
u===$&&A.c()
u.U$=w
u.P$=0
u=v.w
u===$&&A.c()
u.U$=w
u.P$=0
u=v.x
u===$&&A.c()
u.U$=w
u.P$=0
v.a2()},
Qv(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$Qv=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.a
o=C.hra(p.y,p.w)
w=3
return A.b(A.lC(t.a.w,B.JJ),$async$Qv)
case 3:n=e
w=!o&&!n&&!t.a.x.w?4:5
break
case 4:p=t.c
p.toString
s=t.a
r=s.x
w=6
return A.b(C.b1t(0,s.y,p,"Subscribe to upload family photos (30 days).",s.z,"Family Tree Photos",r),$async$Qv)
case 6:if(!e||t.c==null){w=1
break}p=t.a
C.hXe(p.y,p.w)
t.a.bv()
case 5:w=7
return A.b(A8.Ht(78,800),$async$Qv)
case 7:q=e
if(q!=null&&t.c!=null)t.m(new C.dxN(t,q))
case 1:return A.h(u,v)}})
return A.i($async$Qv,v)},
ccS(){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=l.d
k===$&&A.c()
w=B.a.i(k.a.a).toUpperCase()
if(w.length===0)return
k=l.c
k.toString
v=l.a.d
if(v==null)v=new C.i_(B.o.v(1000*Date.now()),w,D.z8,null,null,null,"","","","","",1,!1,0)
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
s=v.aGj(p,l.at,o,n,u,l.ay,w,q,m,t,r,s,l.ax)
A.a5(k,!1).N(s)},
aaT(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$aaT=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a.d
r=s==null?null:B.a.i(s.b)
if(r==null)r=""
s=t.c
s.toString
w=3
return A.b(A.cg(null,null,!0,null,new C.dxM(r),s,null,!0,!0,x.y),$async$aaT)
case 3:if(e!==!0||t.c==null){w=1
break}s=t.c
s.toString
A.a5(s,!1).N(null)
s=t.a.as
if(s!=null)s.$0()
case 1:return A.h(u,v)}})
return A.i($async$aaT,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=A.P(d).ax.a===B.I,i=new C.uk(j),h=l.a.e,g=A.U(h).k("Y<1>"),f=A.C(new A.Y(h,new C.dxW(l),g),g.k("M.E"))
h=j?B.ee:B.c
g=A.l(22)
w=l.a.c
v=x.p
w=A.a([new A.D(D.bHM,A.d(w,k,k,k,k,k,k,A.m(k,k,j?B.aS:B.av,k,k,k,k,k,k,k,k,17,k,k,B.u,k,k,!0,k,0.3,k,k,k,k,k,k),B.K,k,k),k)],v)
u=l.a
if(u.as!=null&&u.d!=null)w.push(A.ao(k,A.ha(A.aM(!1,k,!0,new A.D(B.lP,A.W(B.ek,B.pr,k,k,k,17),k),B.cS,!0,k,k,k,k,k,k,k,k,k,k,k,l.gbMa(),k,k,k,k,k,k,k),k,"Delete member",k,k),k,k,k,0,k,k))
u=j?B.jY:B.iO
t=N.bFm(l.as)
if(l.as==null)s=A.W(B.py,j?B.bu:B.bh,k,k,k,40)
else s=k
s=A.as(A.az(k,new A.an(B.a0,k,B.ad,B.t,A.a([A.he(u,t,s,k,42),A.ao(0,A.he(B.bQ,k,D.bV6,k,14),k,k,k,0,k,k)],v),k),B.y,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,l.gccP(),k,k,k,k,k,k,!1,B.a4),k,k,k)
t=l.d
t===$&&A.c()
t=C.aDP(t,"Full name",B.mj,1,1,i,B.mB)
u=l.y
u===$&&A.c()
u=A.x(A.a([t,B.T,new C.bkI(i,u,new C.dxX(l),k)],v),B.l,k,B.e,B.h,0,B.p)
t=A.d("1. Parent",k,k,k,k,k,k,A.m(k,k,j?B.bu:B.bh,k,k,k,k,k,k,k,k,11,k,k,B.H,k,k,!0,k,0.3,k,k,k,k,k,k),k,k,k)
r=l.z
q=x.ac
p=A.a([D.bB6],q)
o=l.a.e
B.d.u(p,new A.N(o,new C.dxY(),A.U(o).k("N<1,eL<n?>>")))
o=x.bw
n=A.d("2. Spouse",k,k,k,k,k,k,A.m(k,k,j?B.bu:B.bh,k,k,k,k,k,k,k,k,11,k,k,B.H,k,k,!0,k,0.3,k,k,k,k,k,k),k,k,k)
m=l.Q
q=A.a([D.bB8],q)
B.d.u(q,new A.N(f,new C.dy_(),A.U(f).k("N<1,eL<n?>>")))
o=A.x(A.a([t,B.am,new C.aes(i,r,"Who is their parent?",p,new C.dy0(l),k,o),B.aB,n,B.am,new C.aes(i,m,"Who is their spouse / partner?",q,new C.dy1(l),k,o)],v),B.al,k,B.e,B.h,0,B.p)
q=l.f
q===$&&A.c()
q=C.aDP(q,"Birth date",D.apI,1,1,i,k)
m=l.r
m===$&&A.c()
m=C.aDP(m,"Birth place",B.a2V,1,1,i,k)
n=l.w
n===$&&A.c()
n=C.aDP(n,"Date of death (if deceased)",D.arN,1,1,i,k)
p=l.x
p===$&&A.c()
p=C.aDP(p,"Occupation",B.Qc,1,1,i,k)
r=l.e
r===$&&A.c()
r=A.a([new A.an(B.A,k,B.ad,B.t,w,k),B.aB,s,B.by,new C.aet(i,"Identity",u,k),B.af,new C.aet(i,"Family links",o,k),B.af,new C.aet(i,"Life details",A.x(A.a([q,B.T,m,B.T,n,B.T,p,B.T,C.aDP(r,"Notes",B.l_,5,3,i,k)],v),B.l,k,B.e,B.h,0,B.p),k),B.af,new C.aDO(i,"Child order",l.cl_(l.at),new C.dy2(l),new C.dy3(l),k)],v)
w=l.a
u=w.d
if(u!=null)w=C.hgb(w.r,u.a).length!==0
else w=!1
if(w){w=l.ax
u=w===0?"Uses tree default":"Show "+w+", rest in menu"
w=w>0?new C.dy4(l):k
B.d.u(r,A.a([B.T,new C.aDO(i,"Visible in tree",u,w,new C.dy5(l),k)],v))}r.push(B.T)
w=j?B.jY:B.iO
u=A.l(14)
t=A.K(j?B.eh:B.bO,B.r,1)
s=A.d("Hidden member",k,k,k,k,k,k,A.m(k,k,j?B.aS:B.av,k,k,k,k,k,k,k,k,14,k,k,B.O,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)
r.push(A.p(k,A.iU(k,B.bQ,k,B.ag,k,new C.dy6(l),k,A.d("Hide from the tree canvas",k,k,k,k,k,k,A.m(k,k,j?B.bu:B.bh,k,k,k,k,k,k,k,k,11,k,k,k,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),k,s,l.ay),B.f,k,k,new A.o(w,k,t,u,k,k,B.n),k,k,k,k,O.amu,k,k,k))
r.push(B.by)
w=j?B.aS:B.av
j=j?B.eh:B.bO
r.push(A.A(A.a([A.E(A.dV(B.o8,new C.dxZ(d),A.dj(k,k,k,k,k,k,k,k,k,w,k,k,B.co,k,new A.b9(A.l(14),B.a1),new A.ay(j,1,B.r,-1),k,k,k,k)),1),B.bb,A.E(A.bI(D.fdt,k,l.gccR(),A.bo(B.aV,k,k,0,B.c,k,B.co,k,new A.b9(A.l(14),B.a1),k,k,k)),2)],v),B.l,k,B.e,B.h,0,k,k))
r.push(B.aw)
return A.ej(B.f5,k,B.ag,h,new A.a3(420,k,A.c9(A.x(r,B.al,k,B.e,B.N,0,B.p),B.t,k,B.y,k,k,k,k,B.ah),k),D.anm,k,B.amG,new A.b9(g,B.a1),k,k)},
cl_(d){var w=B.o.F(d,100)
if(w>=11&&w<=13)return""+d+"th child"
w=""+d
switch(B.o.F(d,10)){case 1:return w+"st child"
case 2:return w+"nd child"
case 3:return w+"rd child"
default:return w+"th child"}}}
C.aet.prototype={
B(d){var w=null,v=this.c.a,u=A.d(this.d.toUpperCase(),w,w,w,w,w,w,A.m(w,w,v?B.bu:B.bh,w,w,w,w,w,w,w,w,10,w,w,B.H,w,w,!0,w,1.1,w,w,w,w,w,w),w,w,w),t=v?B.jY:B.iO,s=A.l(16)
return A.x(A.a([new A.D(B.a1w,u,w),A.p(w,this.e,B.f,w,w,new A.o(t,w,A.K(v?B.eh:B.bO,B.r,1),s,w,w,B.n),w,w,w,w,B.bj,w,w,1/0)],x.p),B.E,w,B.e,B.h,0,B.p)}}
C.bkJ.prototype={
B(d){var w,v=this,u=null,t=v.c.a,s=t?B.ee:B.c,r=A.l(12),q=A.K((t?B.eh:B.bO).j(0.85),B.r,1),p=v.r
if(p==null)p=B.ao
w=A.m(u,u,t?B.aS:B.av,u,u,u,u,u,u,u,u,14,u,u,B.a9,u,u,!0,u,u,u,u,u,u,u,u)
return A.p(u,A.aN(u,B.Z,!1,u,!0,B.t,u,A.aO(),v.d,u,u,u,u,u,2,A.bz(u,B.eN,u,B.t6,u,u,u,u,!0,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,A.m(u,u,t?B.bu:B.bh,u,u,u,u,u,u,u,u,u,u,u,B.cD,u,u,!0,u,u,u,u,u,u,u,u),v.e,u,u,u,u,u,u,u,u,u,!0,!0,!1,u,A.W(v.f,B.bQ,u,u,u,20),u,u,u,u,u,u,u,u,u,u,u,u),B.y,!0,u,!0,u,!1,u,B.ak,u,u,u,u,u,u,u,u,u,v.x,v.w,u,!1,"\u2022",u,u,u,u,u,!1,u,u,!1,u,!0,u,B.ac,u,u,u,u,u,u,u,u,u,u,u,w,!0,B.a6,u,p,u,u,u,u),B.f,u,u,new A.o(s,u,q,r,u,u,B.n),u,u,u,u,u,u,u,u)}}
C.aes.prototype={
B(d){var w=this,v=null,u=w.c.a,t=u?B.ee:B.c,s=A.l(12),r=A.K((u?B.eh:B.bO).j(0.85),B.r,1),q=A.W(B.th,u?B.bu:B.bh,v,v,v,v),p=A.m(v,v,u?B.aS:B.av,v,v,v,v,v,v,v,v,14,v,v,B.a9,v,v,!0,v,v,v,v,v,v,v,v),o=u?B.ee:B.c
return A.p(v,new A.En(A.a5x(v,o,A.d(w.f,v,v,v,v,v,v,A.m(v,v,u?B.bu:B.bh,v,v,v,v,v,v,v,v,v,v,v,B.cD,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),q,!1,!0,w.r,w.w,p,v,w.d,w.$ti.c),v),B.f,v,v,new A.o(t,v,r,s,v,v,B.n),v,v,v,v,B.kW,v,v,v)}}
C.bkI.prototype={
B(d){var w=new C.dy7(this)
return A.A(A.a([w.$3(D.wI,"Male",B.PY),B.ae,w.$3(D.oB,"Female",B.PK),B.ae,w.$3(D.z8,"Other",B.nN)],x.p),B.l,null,B.e,B.h,0,null,null)}}
C.aDO.prototype={
B(d){var w=this,v=null,u=w.c,t=u.a,s=t?B.jY:B.iO,r=A.l(14),q=A.K(t?B.eh:B.bO,B.r,1),p=A.d(w.d,v,v,v,v,v,v,A.m(v,v,t?B.aS:B.av,v,v,v,v,v,v,v,v,13,v,v,B.H,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),o=x.p
return A.p(v,A.A(A.a([A.E(A.x(A.a([p,A.d(w.e,v,v,v,v,v,v,A.m(v,v,t?B.bu:B.bh,v,v,v,v,v,v,v,v,11,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],o),B.E,v,B.e,B.h,0,B.p),1),new C.aK1(u,B.wV,w.f,v),B.bm,new C.aK1(u,B.i0,w.r,v)],o),B.l,v,B.e,B.h,0,v,v),B.f,v,v,new A.o(s,v,q,r,v,v,B.n),v,v,v,v,B.ez,v,v,v)}}
C.aK1.prototype={
B(d){var w,v,u,t,s=this,r=null,q=s.e,p=q!=null
if(p)w=B.bQ.j(0.12)
else w=s.c.a?B.ee:B.c
v=A.l(10)
u=A.l(10)
if(p)t=B.bQ
else t=(s.c.a?B.bu:B.bh).j(0.4)
return A.aG(!1,B.a3,!0,v,A.aM(!1,u,!0,new A.a3(36,36,A.W(s.d,t,r,r,r,20),r),r,!0,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,r),B.f,w,0,r,r,r,r,r,B.ai)}}
C.aeu.prototype={
bVr(d){switch(d.a){case 0:return B.bQ
case 1:return B.bD
case 2:return B.cB}},
bVs(d){switch(d.a){case 0:return"Male"
case 1:return"Female"
case 2:return"Not specified"}},
b_g(d){var w,v,u,t
if(d==null||d.length===0)return"\u2014"
for(w=this.d.f,v=w.length,u=0;u<v;++u){t=w[u]
if(t.a===d)return t.b}return"\u2014"},
AN(d,e,f){var w,v,u,t,s,r,q,p=null,o=B.a.i(e)
if(o.length===0)o="\u2014"
w=this.e.a
v=w?B.ee:B.c
u=A.l(12)
t=A.K((w?B.eh:B.bO).j(0.85),B.r,1)
s=x.p
r=A.a([],s)
B.d.u(r,A.a([A.W(f,B.bQ,p,p,p,18),B.as],s))
q=A.d(d.toUpperCase(),p,p,p,p,p,p,A.m(p,p,w?B.bu:B.bh,p,p,p,p,p,p,p,p,9,p,p,B.H,p,p,!0,p,0.8,p,p,p,p,p,p),p,p,p)
r.push(A.E(A.x(A.a([q,B.aw,A.d(o,p,p,p,p,p,p,A.m(p,p,w?B.aS:B.av,p,p,p,p,p,p,p,p,14,p,p,B.O,p,1.35,!0,p,p,p,p,p,p,p,p),p,p,p)],s),B.E,p,B.e,B.h,0,B.p),1))
return A.p(p,A.A(r,B.E,p,B.e,B.h,0,p,p),B.f,p,p,new A.o(v,p,t,u,p,p,B.n),p,p,p,B.cx,B.yT,p,p,1/0)},
afz(d,e){var w=null,v=this.e.a,u=A.d(d.toUpperCase(),w,w,w,w,w,w,A.m(w,w,v?B.bu:B.bh,w,w,w,w,w,w,w,w,10,w,w,B.H,w,w,!0,w,1.1,w,w,w,w,w,w),w,w,w),t=v?B.jY:B.iO,s=A.l(16),r=A.K(v?B.eh:B.bO,B.r,1)
return A.x(A.a([new A.D(B.a1w,u,w),A.p(w,A.x(e,B.l,w,B.e,B.h,0,B.p),B.f,w,w,new A.o(t,w,r,s,w,w,B.n),w,w,w,w,B.bU,w,w,1/0)],x.p),B.E,w,B.e,B.h,0,B.p)},
B(d){var w,v,u,t=this,s=null,r=t.d,q=t.c,p=C.hHN(r,q),o=q.c,n=t.bVr(o),m=N.bFm(q.f),l=t.e.a,k=l?B.ee:B.c,j=A.l(22),i=q.b,h=A.d(i,s,s,s,s,s,s,A.m(s,s,l?B.aS:B.av,s,s,s,s,s,s,s,s,18,s,s,B.u,s,s,!0,s,s,s,s,s,s,s,s),B.K,s,s)
r=r.y===D.kY?"Shared family tree \xb7 view only":"Member profile"
r=A.d(r,s,s,s,s,s,s,A.m(s,s,l?B.bu:B.bh,s,s,s,s,s,s,s,s,12,s,s,B.a9,s,s,!0,s,s,s,s,s,s,s,s),B.K,s,s)
w=A.K(n,B.r,3)
v=A.a([new A.ab(0,B.G,n.j(0.25),B.J,12)],x.V)
u=n.j(0.12)
l=A.as(A.p(s,A.he(u,m,m==null?A.W(B.py,n,s,s,s,48):s,s,52),B.f,s,s,new A.o(s,s,w,s,v,s,B.a7),s,s,s,s,B.eC,s,s,s),s,s,s)
w=n.j(0.14)
v=A.l(20)
u=A.K(n.j(0.45),B.r,1)
v=A.as(A.p(s,A.d(t.bVs(o),s,s,s,s,s,s,A.m(s,s,n,s,s,s,s,s,s,s,s,12,s,s,B.H,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),B.f,s,s,new A.o(w,s,u,v,s,s,B.n),s,s,s,s,B.lN,s,s,s),s,s,s)
u=x.p
i=A.a([t.AN("Full name",i,B.mj)],u)
if(p>0)i.push(t.AN("Child order","#"+p,B.PQ))
r=A.a([h,B.aw,r,B.aO,l,B.T,v,B.by,t.afz("Identity",i),B.af,t.afz("Life details",A.a([t.AN("Birth date",q.w,D.apI),t.AN("Birth place",q.x,B.a2V),t.AN("Date of death",q.y,D.arN),t.AN("Occupation",q.z,B.Qc)],u)),B.af,t.afz("Family links",A.a([t.AN("1. Parent",t.b_g(q.d),B.Hu),t.AN("2. Spouse",t.b_g(q.e),B.HK)],u))],u)
q=q.r
if(B.a.i(q).length!==0)B.d.u(r,A.a([B.af,t.afz("Notes",A.a([t.AN("Notes",q,B.l_)],u))],u))
r.push(B.by)
r.push(A.bI(B.Le,s,new C.dyh(d),A.bo(B.aV,s,s,s,s,s,B.co,s,new A.b9(A.l(14),B.a1),s,s,s)))
return A.eG(s,k,new A.cN(B.m3,A.c9(A.x(r,B.al,s,B.e,B.N,0,B.p),B.t,s,B.y,s,B.wB,s,s,B.ah),s),s,s,s,B.H6,s,B.d6,s,new A.b9(j,B.a1),s)}}
C.Gx.prototype={
B(d){var w,v=this,u=null,t=v.r
if(t==null)t=v.f.a?B.bu:B.bh
w=t.j(v.f.a?0.14:0.08)
return new A.D(B.uM,A.ha(A.aG(!1,B.a3,!0,A.l(8),A.aM(!1,A.l(8),!0,new A.a3(30,30,A.W(v.d,t,u,u,u,16),u),u,!0,u,u,u,u,u,u,u,u,u,u,u,v.e,u,u,u,u,u,u,u),B.f,w,0,u,u,u,u,u,B.ai),u,v.c,u,u),u)}}
C.ard.prototype={
f3(){var w,v,u=this,t=x.N,s=A.T(t,x.z)
s.n(0,"marker","ngmyFamilyTreeSync")
s.n(0,"version",1)
s.n(0,"code",u.a)
s.n(0,"ownerEmail",u.b)
s.n(0,"exportedAt",u.d.aa().af())
w=u.c
v=A.U(w).k("N<1,a9<n,@>>")
w=A.C(new A.N(w,new C.cfy(),v),v.k("ak.E"))
s.n(0,"trees",w)
w=u.e
if(w.a!==0)s.n(0,"familyBooks",w.jq(w,new C.cfz(),t,x.fO))
return s}}
C.are.prototype={
S(){return new C.aFm(A.a([],x.bF))},
gd1(){return this.c}}
C.aFm.prototype={
Y(){this.a3()
this.Kh()},
Kh(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$Kh=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.cfC(t.a.c),$async$Kh)
case 3:r=e
w=4
return A.b(C.Bl(t.a.c),$async$Kh)
case 4:q=e
p=t.a
if(!p.r)s=p.e||J.rl(q,new C.e3S(t))
else s=!1
if(t.c==null){w=1
break}t.m(new C.e3T(t,r,s))
case 1:return A.h(u,v)}})
return A.i($async$Kh,v)},
z7(d){var w=null,v=this.c
if(v==null)return
v.L(x.q).f.T(A.b2(w,w,w,w,w,B.t,w,A.d(d,w,w,w,w,w,w,w,w,w,w),w,B.Y,w,w,w,w,w,w,w,w,w,w))},
L5(d,e){return this.cKt(d,e)},
cKt(d,e){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this
var $async$L5=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(q.r){w=1
break}q.m(new C.e3X(q,e))
t=3
w=6
return A.b(d.$0(),$async$L5)
case 6:r.push(5)
w=4
break
case 3:r=[2]
case 4:t=2
if(q.c!=null){q.m(new C.e3Y(q))
$.eY.mG()}w=r.pop()
break
case 5:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$L5,v)},
Yx(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Yx=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=t.a
w=3
return A.b(A.pz(r,s.c,s.e),$async$Yx)
case 3:if(!e||t.c==null){w=1
break}w=4
return A.b(t.L5(new C.e3P(t),"Preparing download\u2026"),$async$Yx)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Yx,v)},
YB(d){return this.bTj(d)},
bTj(d){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$YB=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=t.a
w=3
return A.b(A.pz(r,s.c,s.e),$async$YB)
case 3:if(!f||t.c==null){w=1
break}w=4
return A.b(t.L5(new C.e3Q(t,d),"Preparing file\u2026"),$async$YB)
case 4:case 1:return A.h(u,v)}})
return A.i($async$YB,v)},
ahz(){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m
var $async$ahz=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b($.xP.cp().MQ(B.SX,B.uP,!0),$async$ahz)
case 7:r=e
o=r
q=o==null?null:J.fq(o.a)
if(q==null){u=null
w=1
break}if(q.c!=null){o=q.c
o.toString
o=!B.aI.gau(o)}else o=!1
if(o){o=q.c
o.toString
o=A.jN(o,0,null)
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
case 6:u=A.Hs()
w=1
break
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$ahz,v)},
Zf(d){return this.c2O(d)},
c2O(d){var w=0,v=A.j(x.H),u=this
var $async$Zf=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=2
return A.b(u.L5(new C.e3R(u,d),"Restoring family trees\u2026"),$async$Zf)
case 2:return A.h(null,v)}})
return A.i($async$Zf,v)},
Ze(){var w=0,v=A.j(x.H),u,t=this,s
var $async$Ze=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(t.ahz(),$async$Ze)
case 3:s=e
if(s==null||B.a.i(s).length===0){w=1
break}w=4
return A.b(t.Zf(s),$async$Ze)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Ze,v)},
a3d(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a3d=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=t.a
w=3
return A.b(A.pz(r,s.c,s.e),$async$a3d)
case 3:if(!e||t.c==null){w=1
break}w=4
return A.b(t.L5(new C.e3W(t),"Creating QR code\u2026"),$async$a3d)
case 4:case 1:return A.h(u,v)}})
return A.i($async$a3d,v)},
a2P(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a2P=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!A.DA()){t.z7("Use a phone camera to scan, or upload the backup file on desktop.")
w=1
break}s=t.c
s.toString
w=3
return A.b(A.a5(s,!1).ce(A.ed(new C.e3U(),!0,null,x.N)),$async$a2P)
case 3:r=e
w=r!=null&&B.a.i(r).length!==0?4:5
break
case 4:w=6
return A.b(t.Zf(r),$async$a2P)
case 6:case 5:case 1:return A.h(u,v)}})
return A.i($async$a2P,v)},
B(d){var w,v,u,t,s,r,q=this,p=null,o=A.P(d).ax.a===B.I,n=o?B.C0:B.hY,m=o?D.akX:B.aS,l=o?B.aM:B.bO,k=o?B.aS:B.av,j=new C.dhT(n,m,l,k,o?B.bP:B.bh)
l=A.aH(p,p,p,p,A.W(B.eL,k,p,p,p,20),p,p,p,new C.e4_(d),p,p,p,p,p,p)
w=q.a.r?"Restore family tree":"Family tree sync"
w=A.eR(p,p,p,!0,!0,n,p,1,!0,p,0,!1,p,!1,p,p,l,p,!0,0,p,p,p,p,A.d(w,p,p,p,p,p,p,A.m(p,p,k,p,p,p,p,p,p,p,p,17,p,p,B.u,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p,1,p,!0)
l=q.a
v=l.r
l=l.e
u=x.p
t=A.a([],u)
if(q.e){s=q.a.e?"Scannable backup":"2 scans max"
B.d.u(t,A.a([A.E(C.dhr(!0,B.ju,B.aG,B.aG,q.r?p:q.gcAZ(),j,s,"Show restore QR"),1),B.as],u))}s=q.e
r=q.r?p:q.gcx7()
t.push(A.E(C.dhr(!s,B.jv,B.b7,B.bd,r,j,"From another phone","Scan QR to restore"),1))
t=A.A(t,B.l,p,B.e,B.h,0,p,p)
r=A.a([],u)
if(q.e)B.d.u(r,A.a([A.E(C.dhr(!1,B.hP,B.aV,B.bQ,q.r?p:q.gbTc(),j,"Photos & books included","Download all trees"),1),B.as],u))
s=q.a.r?"Restore shared file":"From saved file"
r.push(A.E(C.dhr(!1,R.zH,B.at,B.aQ,q.r?p:q.gc2L(),j,s,"Upload backup file"),1))
l=A.a([new C.bgX(v,l,p),B.l9,new C.adJ(j,"QR restore",p),B.T,t,B.da,new C.adJ(j,"Backup files",p),B.T,A.A(r,B.l,p,B.e,B.h,0,p,p)],u)
if(q.e&&J.ad(q.d)>1&&q.a.f==null){v=A.a([B.l9,new C.adJ(j,"One tree",p),B.T],u)
B.d.u(v,J.b7(q.d,new C.e40(q,j),x.l))
B.d.u(l,v)}l=A.a([A.cn(l,p,p,B.a1o,p,p,B.ah,!1)],u)
if(q.r){v=A.l(18)
t=A.K(B.aV.j(0.35),B.r,1)
s=A.a([new A.ab(0,B.G,B.w.j(o?0.3:0.1),B.dp,20)],x.V)
r=q.f
if(r==null)r="Working\u2026"
l.push(A.ao(24,A.bm(!0,A.p(p,A.A(A.a([O.aUM,B.bb,A.E(A.d(r,p,p,p,p,p,p,A.m(p,p,k,p,p,p,p,p,p,p,p,13,p,p,B.O,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),1)],u),B.l,p,B.e,B.h,0,p,p),B.f,p,p,new A.o(m,p,t,v,s,p,B.n),p,p,p,p,B.CJ,p,p,p),!0,!1,B.ag,!0,!1),p,p,20,20,p,p))}return A.c4(w,n,new A.an(B.a0,p,B.ad,B.t,l,p),p,!1,!1,p,p)}}
C.dhT.prototype={}
C.bgX.prototype={
B(d){var w,v,u,t,s,r,q,p=null
if(this.d)w="Upload a file or scan a QR from someone who shared their tree. View only until you create your own tree."
else w=this.e?"Photos and family books stay on this device. Admin skips cloud codes.":"Full trees stay local. QR works 2 times \u2014 names & dates sync to cloud only."
v=A.l(24)
u=A.a([new A.ab(0,B.G,B.aV.j(0.32),B.kE,28)],x.V)
t=A.ao(p,A.W(B.va,B.c.j(0.07),p,p,p,110),p,p,p,-20,-10,p)
s=B.c.j(0.16)
r=A.l(18)
q=x.p
return A.p(p,new A.an(B.a0,p,B.ad,B.t,A.a([t,new A.D(B.ac,A.A(A.a([A.p(p,D.c3i,B.f,p,p,new A.o(s,p,A.K(B.c.j(0.35),B.r,1.5),r,p,p,B.n),p,56,p,p,p,p,p,56),B.p5,A.E(A.x(A.a([D.fMo,B.P,A.d(w,p,p,p,p,p,p,A.m(p,p,B.c.j(0.9),p,p,p,p,p,p,p,p,13,p,p,p,p,1.45,!0,p,p,p,p,p,p,p,p),p,p,p)],q),B.E,p,B.e,B.h,0,B.p),1)],q),B.E,p,B.e,B.h,0,p,p),p)],q),p),B.f,p,p,new A.o(p,p,p,v,u,D.cbt,B.n),p,p,p,p,p,p,p,p)}}
C.adJ.prototype={
B(d){var w=null
return A.A(A.a([A.p(w,w,B.f,w,w,new A.o(B.aV,w,w,A.l(2),w,w,B.n),w,14,w,w,w,w,w,3),B.ae,A.d(this.d.toUpperCase(),w,w,w,w,w,w,A.m(w,w,this.c.e,w,w,w,w,w,w,w,w,11,w,w,B.H,w,w,!0,w,0.9,w,w,w,w,w,w),w,w,w)],x.p),B.l,w,B.e,B.h,0,w,w)}}
C.bgV.prototype={
B(d){var w,v,u,t,s,r=this,q=null,p=r.x,o=A.l(18),n=A.l(18),m=r.c,l=r.y,k=l?B.aG.j(0.4):m.c
k=A.K(k,B.r,l?1.5:1)
l=l?A.a([new A.ab(0,B.G,B.aG.j(0.1),B.cJ,12)],x.V):q
w=p==null?0.45:1
v=r.w.j(0.14)
u=A.l(12)
t=r.r
s=A.K(t.j(0.35),B.r,1)
return A.aG(!1,B.a3,!0,q,A.aM(!1,o,!0,A.eB(A.d3(new A.D(E.a12,A.x(A.a([A.p(q,A.W(r.d,t,q,q,q,22),B.f,q,q,new A.o(v,q,s,u,q,q,B.n),q,q,q,q,B.ta,q,q,q),B.af,A.d(r.e,q,q,q,q,q,q,A.m(q,q,m.d,q,q,q,q,q,q,q,q,13,q,q,B.u,q,1.2,!0,q,q,q,q,q,q,q,q),q,q,q),B.bE,A.d(r.f,q,q,q,q,q,q,A.m(q,q,m.e,q,q,q,q,q,q,q,q,11,q,q,B.cD,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],x.p),B.E,q,B.e,B.h,0,B.p),q),w),q,new A.o(m.b,q,k,n,l,q,B.n),q,q,q),q,!0,q,q,q,q,q,q,q,q,q,q,q,p,q,q,q,q,q,q,q),B.f,B.L,0,q,q,q,q,q,B.ai)}}
C.bh_.prototype={
B(d){var w=this,v=null,u=A.l(18),t=A.l(18),s=w.c,r=A.K(s.c,B.r,1),q=B.aV.j(0.14),p=A.l(12),o=s.e,n=x.p
return A.aG(!1,B.a3,!0,v,A.aM(!1,u,!0,A.eB(new A.D(B.eV,A.A(A.a([A.p(v,D.c2u,B.f,v,v,new A.o(q,v,A.K(B.aV.j(0.35),B.r,1),p,v,v,B.n),v,v,v,v,B.ta,v,v,v),B.bb,A.E(A.x(A.a([A.d(w.d,v,v,v,v,v,v,A.m(v,v,s.d,v,v,v,v,v,v,v,v,v,v,v,B.H,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.d(""+w.e+" members",v,v,v,v,v,v,A.m(v,v,o,v,v,v,v,v,v,v,v,11,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],n),B.E,v,B.e,B.h,0,B.p),1),A.W(B.hP,o,v,v,v,20)],n),B.l,v,B.e,B.h,0,v,v),v),v,new A.o(s.b,v,r,t,v,v,B.n),v,v,v),v,!0,v,v,v,v,v,v,v,v,v,v,v,w.f,v,v,v,v,v,v,v),B.f,B.L,0,v,v,v,v,v,B.ai)}}
C.a0C.prototype={
S(){return new C.aFl()},
gd1(){return this.c}}
C.aFl.prototype={
Y(){this.a3()
this.aaq()},
aaq(){var w=0,v=A.j(x.H),u=this,t
var $async$aaq=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(A.b47(u.a.c,B.Ew),$async$aaq)
case 2:t=e
if(u.c!=null)u.m(new C.e3K(u,t))
return A.h(null,v)}})
return A.i($async$aaq,v)},
aj0(){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j
var $async$aj0=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(q.d){w=1
break}q.m(new C.e3L(q))
t=4
p=A.hsV(q.a.d,B.Ew)
if(p==null){n=A.bc("Could not read this QR code.")
throw A.X(n)}n=q.a
m=n.c
l=n.d
w=7
return A.b(A.atv(n.e,m,l,B.Ew,p,n.f),$async$aj0)
case 7:if(q.c==null){r=[1]
w=5
break}q.m(new C.e3M(q))
q.c.L(x.q).f.T(D.fn4)
r.push(6)
w=5
break
case 4:t=3
j=s.pop()
o=A.ac(j)
n=q.c
if(n==null){r=[1]
w=5
break}n.L(x.q).f.T(A.b2(null,null,null,null,null,B.t,null,A.d(B.a.ec(J.k(o),"StateError: ",""),null,null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.m(new C.e3N(q))
w=r.pop()
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$aj0,v)},
B(d){var w,v,u,t,s,r=this,q=null,p=A.P(d).ax.a===B.I,o=p?B.nA:B.qq,n=p?B.iJ:B.c,m=r.a.f,l=m>=999?"Unlimited (admin)":""+m+" scans left"
m=A.eR(q,q,q,!0,!0,o,q,1,!0,q,0,!1,q,!1,q,q,q,q,!0,q,q,q,q,q,D.h1U,q,q,q,1,q,!0)
w=A.l(24)
v=A.K(B.aV.j(0.35),B.r,1)
u=A.qe(q,q,!1,r.a.d,q,!0,!0,q,!1,B.c)
t=A.d(l,q,q,q,q,q,q,A.m(q,q,B.aV,q,q,q,q,q,q,q,q,q,q,q,B.H,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
s=x.p
w=A.E(A.p(q,A.x(A.a([B.P,u,B.by,t,B.P,A.d("Scan on another phone to restore photos, family book, and all tree details. Works only 2 times total.",q,q,q,q,q,q,A.m(q,q,p?B.aR:B.an,q,q,q,q,q,q,q,q,13,q,q,q,q,1.4,!0,q,q,q,q,q,q,q,q),B.K,q,q)],s),B.l,q,B.b8,B.h,0,B.p),B.f,q,q,new A.o(n,q,v,w,q,q,B.n),q,q,q,q,B.ac,q,q,1/0),1)
v=r.a.e
v=A.d("Code: "+v,q,q,q,q,q,q,A.m(q,q,p?B.ab:B.bw,q,q,q,q,q,q,q,q,q,q,q,B.O,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
u=r.d
t=u||r.e===!0?q:r.gcwR()
if(u)u=B.KE
else u=A.W(r.e===!0?B.hb:B.apH,q,q,q,q,q)
w=A.a([w,B.af,v,B.af,new A.a3(1/0,q,A.em(u,q,A.d(r.e===!0?"Saved in QR Generator":"Save to QR Generator",q,q,q,q,q,q,B.cd,q,q,q),t,A.dj(q,q,q,q,q,q,q,q,q,B.aV,q,B.he,q,q,q,new A.ay(B.aV.j(0.55),1,B.r,-1),q,q,q,q)),q)],s)
if(r.e===!0)w.push(new A.D(B.hZ,A.d("Labeled \u201cNGMY Family Tree\u201d in Hub \u2192 QR Code Generator \u2192 Saved. Delete it there to save a new one.",q,q,q,q,q,q,A.m(q,q,p?B.aE:B.an,q,q,q,q,q,q,q,q,11,q,q,q,q,1.35,!0,q,q,q,q,q,q,q,q),B.K,q,q),q))
w.push(B.T)
w.push(new A.a3(1/0,q,A.bI(B.B8,q,new C.e3O(d),A.bo(B.aV,q,q,q,q,B.he,q,q,q,q,q,q)),q))
return A.c4(m,o,new A.D(B.ac,A.x(w,B.l,q,B.e,B.h,0,B.p),q),q,!1,!1,q,q)}}
C.a0D.prototype={
S(){return new C.bme(A.zU(B.yI,B.of,B.vh))}}
C.bme.prototype={
t(){this.d.t()
this.a2()},
B(d){var w=null
return A.c4(A.eR(w,w,w,!0,!0,B.w,w,1,!0,w,w,!1,w,!1,w,w,w,w,!0,w,w,w,w,w,D.fUC,w,w,w,1,w,!0),B.w,A.zT(this.d,B.c1,new C.e41(this,d)),w,!1,!1,w,w)}}
C.b_Z.prototype={
B(d){var w=null
return A.d(this.c,w,w,w,w,w,w,A.m(w,w,w,w,w,w,w,w,"Noto Color Emoji",B.Sq,w,this.d,w,w,w,w,1,!0,w,w,w,w,w,w,w,w),w,w,w)}}
C.lY.prototype={}
C.a7q.prototype={
S(){return new C.blT(null,null)}}
C.blT.prototype={
Y(){var w=this,v=null
w.a3()
w.d=A.bn(v,B.t0,v,1,v,w)
w.e=A.bn(v,B.nE,v,1,v,w)
w.a.toString
w.d.cK(0)
w.e.cK(0)},
by(d){var w,v,u=this
u.bJ(d)
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
this.bzo()},
B(d){var w,v,u=this,t=B.d.dL(D.a72,new C.dPU(u),new C.dPV())
u.a.toString
w=u.d
w===$&&A.c()
v=u.e
v===$&&A.c()
return A.cDj(A.c6(new A.hb(A.a([w,v],x.dS)),new C.dPW(u,t),null),!0)}}
C.blS.prototype={
a4(d,e){var w,v,u,t,s,r,q,p=this
switch(p.b){case"construction":p.b3X(d,e)
break
case"house":p.mj(d,e,D.diA)
w=p.c
v=0.5+0.5*Math.sin(w*3.141592653589793*2)
u=e.gdm()
$.S()
t=A.L()
t.r=B.c.j(0.18+v*0.12).gp(0)
d.O(new A.r(e.a*0.5,e.b*0.38),u*(0.22+v*0.06),t)
p.mp(d,e,B.c.j(0.4),-w*3.141592653589793*2,20)
p.Bz(d,e,12)
p.yJ(d,e,B.li,5,14)
break
case"grocery":p.clJ(d,e)
break
case"calculator":p.clq(d,e)
break
case"lumber":p.clR(d,e)
break
case"kitchen":p.clM(d,e)
break
case"landscape":p.mj(d,e,D.djc)
s=new A.aI($.S().r,B.aj,null,null,A.a([],x.v))
w=e.b
u=w*0.72
s.E(new A.aZ(0,u))
t=e.a
r=p.c*3.141592653589793*2
s.E(new A.cc(t*0.25,w*(0.62+Math.sin(r)*0.04),t*0.5,u))
s.E(new A.cc(t*0.75,w*(0.82+Math.cos(r)*0.04),t,w*0.68))
s.E(new A.aq(t,w))
s.E(new A.aq(0,w))
s.E(new A.bw())
w=A.L()
w.r=B.eq.j(0.85).gp(0)
d.ag(s,w)
p.Bz(d,e,8)
p.yJ(d,e,B.iy,4,18)
break
case"plumbing":p.cm_(d,e)
break
case"electrical":p.mj(d,e,D.duU)
w=p.c
q=(Math.sin(w*3.141592653589793*4)+1)/2
$.S()
u=A.L()
u.r=B.c.j(q*0.12).gp(0)
d.aD(new A.a6(0,0,0+e.a,0+e.b),u)
p.mp(d,e,B.c.j(0.5+q*0.3),-w*3.141592653589793*3,10)
p.mp(d,e,B.mV.j(0.35+q*0.2),p.d*3.141592653589793*4,18)
p.Bz(d,e,10)
break
case"store":p.cm9(d,e)
break
case"paint_remodel":p.clV(d,e)
break
case"roofing":p.cm1(d,e)
break
case"warehouse":p.cmg(d,e)
break
case"vehicles":p.cme(d,e)
break
case"farm":p.clD(d,e)
break
case"restaurant":p.cm0(d,e)
break
case"tools":p.cmc(d,e)
break
case"wallet":p.cmf(d,e)
break
case"concrete":p.clw(d,e)
break
case"blueprint":p.clo(d,e)
break
default:p.b3X(d,e)}},
mj(d,e,f){var w,v=new A.a6(0,0,0+e.a,0+e.b)
$.S()
w=A.L()
w.sap(new A.a8(B.ay,B.aD,B.x,f,null,null).aG(0,v))
d.aD(v,w)},
mp(d,e,f,g,h){var w,v,u,t=new A.r(e.a/2,e.b/2),s=e.gdm()/2-h
$.S()
w=A.L()
w.b=B.aa
w.c=2.4
w.r=f.gp(0)
for(v=0;v<24;++v){u=v/24*3.141592653589793*2+g
d.cP(A.bW(t,s),u,u+0.1439896632895322-u,!1,w)}},
yJ(d,e,f,g,h){var w,v,u,t,s,r,q=e.a/2,p=e.b/2,o=e.gdm()/2-h
for(w=this.c*3.141592653589793*2,v=0;v<g;++v){u=w+v/g*3.141592653589793*2
t=Math.cos(u)
s=Math.sin(u)
$.S()
r=new A.ar(B.S,B.Q,B.W,B.X,B.U)
r.r=f.j(0.55+0.35*Math.sin(u*2)).gp(0)
d.O(new A.r(q+t*o,p+s*o),3.5,r)}},
Bz(d,e,f){var w,v,u,t,s,r,q,p
for(w=this.c*3.141592653589793*2,v=e.a,u=e.b,t=0;t<f;++t){s=(Math.sin(w+t*0.8)+1)/2
r=B.j.F(t*0.17,0.9)
q=B.j.F(t*0.23,0.85)
$.S()
p=new A.ar(B.S,B.Q,B.W,B.X,B.U)
p.r=B.c.j(0.2+s*0.6).gp(0)
d.O(new A.r(v*(r+0.05),u*(q+0.08)),1.5+s*2.5,p)}},
b3X(d,e){var w,v=this
v.mj(d,e,D.dta)
w=v.c
v.mp(d,e,B.c.j(0.55),w*3.141592653589793*2,12)
v.mp(d,e,B.bL.j(0.45),-w*3.141592653589793*1.4,22)
v.bR8(d,e,B.hJ,w)
v.yJ(d,e,B.c.j(0.7),6,8)},
bR8(d,e,f,g){var w,v,u,t,s,r
$.S()
w=A.L()
w.r=f.j(0.35).gp(0)
for(v=e.b,u=g*3.141592653589793*2,t=16+(e.a-32),s=0;s<3;++s){r=v*(0.25+s*0.22)+Math.sin(u+s)*4
d.aD(new A.a6(16,r,t,r+3),w)}},
clJ(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=this
l.mj(d,e,D.cxa)
for(w=l.c*3.141592653589793*2,v=e.a,u=e.b,t=0;t<6;++t){s=w+t*1.1
r=B.o.F(t,3)
q=Math.sin(s)
p=B.o.ar(t,3)
o=Math.cos(s*0.8)
n=B.o.F(t,2)
$.S()
m=new A.ar(B.S,B.Q,B.W,B.X,B.U)
m.r=D.dgH[B.o.F(t,4)].j(0.85).gp(0)
d.O(new A.r(v*(0.15+r*0.28)+q*8,u*(0.18+p*0.55)+o*10),7+n*2,m)}l.mp(d,e,B.c.j(0.35),w,16)
l.yJ(d,e,B.iy,5,12)},
clq(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null
i.mj(d,e,D.cxi)
w=i.c*3.141592653589793
v=w*2
u=0.5+0.5*Math.sin(v)
t=e.a
s=e.b
r=e.gdm()
$.S()
q=A.L()
q.r=B.c.j(0.1+u*0.12).gp(0)
d.O(new A.r(t/2,s/2),r*(0.18+u*0.08),q)
p=A.fp(h,B.cr,h,h,h,h,B.a6,B.bV,h,B.dA,B.bW)
for(o=0;o<6;++o){n=v+o*0.9
r=D.dkZ[o]
q=B.c.j(0.35+0.25*Math.sin(n))
m=B.o.F(o,2)
p.sb1(0,new A.eq(r,h,h,B.cL,h,h,h,h,h,h,new A.F(!0,q,h,h,h,h,14+m*4,B.H,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h)))
p.eb()
p.a4(d,new A.r(t*(0.08+B.o.F(o,3)*0.3)+Math.sin(n)*6,s*(0.12+B.o.ar(o,3)*0.62)+Math.cos(n)*5))}for(v=i.d,r=v*3.141592653589793,q=r*2,o=0;o<6;++o){n=q+o*0.85
m=D.cxk[o]
l=B.kN.j(0.28+0.3*Math.sin(n))
k=B.o.F(o,2)
p.sb1(0,new A.eq(m,h,h,B.cL,h,h,h,h,h,h,new A.F(!0,l,h,h,h,h,12+k*3,B.H,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h)))
p.eb()
p.a4(d,new A.r(t*(0.55+B.o.F(o,3)*0.12)+Math.cos(n)*7,s*(0.08+B.o.ar(o,3)*0.38)+Math.sin(n)*6))}i.mp(d,e,B.c.j(0.35),w*1.5,14)
i.mp(d,e,B.ey.j(0.55),-v*3.141592653589793*2,8)
i.mp(d,e,B.oo.j(0.4),r*2.8,22)
i.yJ(d,e,B.pm,8,10)
i.Bz(d,e,14)
for(w=v*0.35,t-=12,o=0;o<4;++o){j=s*B.j.F(w+o*0.22,0.9)
$.S()
v=new A.ar(B.S,B.Q,B.W,B.X,B.U)
v.r=B.c.j(0.08+0.06*Math.sin(q+o)).gp(0)
v.c=1.2
d.ah(new A.r(12,j),new A.r(t,j),v)}},
clR(d,e){var w,v,u,t,s,r,q,p,o=this
o.mj(d,e,W.aBs)
for(w=o.c*3.141592653589793*2,v=e.b*0.14,u=20+(e.a-40),t=0;t<5;++t){s=Math.sin(w+t*0.7)
r=v+t*v
q=A.bx(new A.a6(20,r,u,r+10),B.iE)
$.S()
p=new A.ar(B.S,B.Q,B.W,B.X,B.U)
p.r=A.ap(B.fZ,B.oi,(s+1)/2).gp(0)
d.aq(q,p)}o.mp(d,e,B.fZ.j(0.35),w,15)
o.Bz(d,e,8)},
clM(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=this
l.mj(d,e,D.dhc)
for(w=l.c,v=w*3.141592653589793*2,u=e.a,t=e.b,s=0;s<8;++s){r=v+s*0.75
q=(Math.sin(r)+1)/2
p=B.j.F(s*0.11,0.85)
o=Math.sin(r*1.3)
n=B.j.F(s*0.13,0.7)
$.S()
m=new A.ar(B.S,B.Q,B.W,B.X,B.U)
m.r=B.c.j(0.25+q*0.55).gp(0)
d.O(new A.r(u*(0.1+p)+o*12,t*(0.15+n)),2+q*3,m)}l.mp(d,e,B.bL.j(0.4),-w*3.141592653589793*2.2,11)
l.yJ(d,e,B.qf,4,14)},
cm_(d,e){var w,v,u,t,s,r,q,p,o,n=this
n.mj(d,e,D.d5e)
for(w=e.a,v=Math.abs(w),u=e.b,t=Math.abs(u),s=n.c*0.08,w/=2,u*=0.55,r=0;r<3;++r){q=Math.min(v,t)
p=B.j.F(s,0.12)
$.S()
o=new A.ar(B.S,B.Q,B.W,B.X,B.U)
o.b=B.aa
o.c=2
o.r=B.c.j(0.45-r*0.12).gp(0)
d.O(new A.r(w,u),q*(0.12+r*0.14+p),o)}n.yJ(d,e,B.pq,6,12)
n.mp(d,e,B.c.j(0.3),-n.d*3.141592653589793*2,18)},
cm9(d,e){var w,v,u,t,s,r,q,p=this
p.mj(d,e,D.cL2)
for(w=p.c*3.141592653589793*2,v=e.a-28,u=v/4-4,t=0;t<4;++t){s=Math.sin(w+t*1.5)
r=14+t*v/4
r=A.bx(new A.a6(r,14,r+u,22),B.jy)
$.S()
q=new A.ar(B.S,B.Q,B.W,B.X,B.U)
q.r=A.ap(B.fz,B.bL,(s+1)/2).gp(0)
d.aq(r,q)}p.mp(d,e,B.c.j(0.3),w,16)
p.Bz(d,e,8)
p.yJ(d,e,B.wh,5,13)},
clV(d,e){var w,v,u,t,s,r,q
this.mj(d,e,D.dbF)
for(w=this.c,v=e.a,u=e.b,t=0;t<4;++t){s=B.j.F(w+t*0.2,1)
r=v*(0.18+t*0.18)
q=u*(0.15+s*0.55)
q=A.bx(new A.a6(r,q,r+8,q+(18+s*22)),B.iq)
$.S()
r=new A.ar(B.S,B.Q,B.W,B.X,B.U)
r.r=[B.iv,B.dy,B.bL,B.ex][t].j(0.85).gp(0)
d.aq(q,r)}this.mp(d,e,B.c.j(0.45),w*3.141592653589793*2.5,13)},
cm1(d,e){var w,v,u,t,s,r,q
this.mj(d,e,D.d90)
for(w=e.b,v=this.c*0.35,u=e.a,t=0;t<8;++t){s=w*(0.12+B.j.F(v+t*0.12,0.75))
r=B.o.F(t,4)*0.22
$.S()
q=new A.ar(B.S,B.Q,B.W,B.X,B.U)
q.r=B.c.j(0.25).gp(0)
q.c=1.5
d.ah(new A.r(u*(0.1+r),s),new A.r(u*(0.18+r),s+10),q)}this.yJ(d,e,B.cC,7,11)},
cmg(d,e){var w,v,u,t,s,r,q,p
this.mj(d,e,D.cNP)
for(w=this.c,v=w*3.141592653589793*2,u=e.b*0.55,t=e.a-44,s=0;s<4;++s){r=v+s
q=22+s*16
p=u-s*14+Math.sin(r)*4
p=A.bx(new A.a6(q,p,q+(t-s*8),p+16),B.iE)
$.S()
q=new A.ar(B.S,B.Q,B.W,B.X,B.U)
q.r=A.ap(B.cC,B.aS,(Math.sin(r)+1)/2).gp(0)
d.aq(p,q)}this.mp(d,e,B.c.j(0.35),-w*3.141592653589793*1.8,15)},
cme(d,e){var w,v,u,t,s,r,q
this.mj(d,e,D.dze)
for(w=e.a,v=this.c*0.45,u=e.b,t=0;t<5;++t){s=w*(B.j.F(v+t*0.18,1.1)-0.05)
r=u*(0.62+B.o.F(t,2)*0.08)
r=A.bx(new A.a6(s,r,s+28,r+8),B.iE)
$.S()
q=new A.ar(B.S,B.Q,B.W,B.X,B.U)
q.r=B.c.j(0.35+t*0.08).gp(0)
d.aq(r,q)}this.Bz(d,e,6)},
clD(d,e){var w,v,u,t,s,r,q,p
this.mj(d,e,D.dfL)
w=this.c*3.141592653589793*2
v=Math.sin(w)
u=e.a
t=e.b
$.S()
s=A.L()
s.r=B.mV.j(0.75).gp(0)
d.O(new A.r(u*0.82,t*0.18),14+(0.5+0.5*v)*4,s)
for(v=t*0.72,t*=0.52,r=0;r<6;++r){s=Math.sin(w+r)
q=u*(0.12+r*0.14)
p=new A.ar(B.S,B.Q,B.W,B.X,B.U)
p.r=B.hH.j(0.85).gp(0)
p.c=3
d.ah(new A.r(q,v),new A.r(q+s*6,t),p)}this.mp(d,e,B.mV.j(0.35),w,14)},
cm0(d,e){var w,v,u,t,s,r,q=this
q.mj(d,e,D.dio)
for(w=q.c*3.141592653589793*2,v=e.a,u=e.b*0.42,t=0;t<4;++t){s=A.bU(new A.r(v*(0.28+t*0.16),u+Math.sin(w+t*0.9)*8),18,10)
$.S()
r=new A.ar(B.S,B.Q,B.W,B.X,B.U)
r.r=B.c.j(0.22).gp(0)
d.c2(s,r)}q.yJ(d,e,B.qf,5,16)
q.Bz(d,e,7)},
cmc(d,e){var w,v,u,t,s,r,q,p,o=this
o.mj(d,e,D.dwx)
w=o.c
v=w*3.141592653589793
o.mp(d,e,B.oi.j(0.55),v*3,10)
o.mp(d,e,B.c.j(0.25),-w*3.141592653589793*2,24)
for(w=v*2,v=e.a/2,u=e.b/2,t=0;t<3;++t){s=w+t*2.1
r=Math.cos(s)
q=Math.sin(s)
$.S()
p=new A.ar(B.S,B.Q,B.W,B.X,B.U)
p.r=B.oi.j(0.8).gp(0)
d.O(new A.r(v+r*34,u+q*22),4,p)}},
cmf(d,e){var w,v,u,t,s,r,q,p,o=this
o.mj(d,e,D.dzY)
for(w=o.c*3.141592653589793,v=w*2,u=e.a,t=e.b,s=0;s<5;++s){r=(Math.sin(v+s*1.2)+1)/2
q=u*(0.2+s*0.03)
p=t*(0.28+r*0.08)
p=A.bx(new A.a6(q,p,q+36,p+22),B.jy)
$.S()
q=new A.ar(B.S,B.Q,B.W,B.X,B.U)
q.r=A.ap(B.iy,B.mV,r).gp(0)
d.aq(p,q)}o.Bz(d,e,9)
o.mp(d,e,B.c.j(0.4),w*2.2,12)},
clw(d,e){var w,v,u,t,s,r,q,p
this.mj(d,e,D.dnX)
w=this.c*3.141592653589793*2
v=e.a/2
u=e.b*0.55
t=A.bW(new A.r(v,u),34)
$.S()
s=A.L()
s.b=B.aa
s.c=5
s.r=B.c.j(0.45).gp(0)
d.cP(t,w,3.7699111843077517,!1,s)
for(r=0;r<6;++r){q=w+r*1.05
t=Math.cos(q)
s=Math.sin(q)
p=new A.ar(B.S,B.Q,B.W,B.X,B.U)
p.r=B.bO.j(0.85).gp(0)
d.O(new A.r(v+t*34,u+s*34),3,p)}},
clo(d,e){var w,v,u,t,s,r,q
this.mj(d,e,D.djw)
$.S()
w=A.L()
w.r=B.c.j(0.12).gp(0)
w.c=1
for(v=e.a,u=e.b,t=0;t<v;t+=18)d.ah(new A.r(t,0),new A.r(t,u),w)
for(s=0;s<u;s+=18)d.ah(new A.r(0,s),new A.r(v,s),w)
r=this.c
q=u*B.j.F(r*0.85,1)
$.S()
u=A.L()
u.r=B.dy.j(0.45).gp(0)
d.aD(new A.a6(0,q,0+v,q+6),u)
this.mp(d,e,B.li.j(0.45),-r*3.141592653589793*2,11)},
aE(d){return d.c!==this.c||d.d!==this.d||d.b!==this.b}}
C.aug.prototype={
a0t(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a0t=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.aS4(),$async$a0t)
case 3:r=e
if(r==null){w=1
break}s=t.c
w=s!=null&&s!==r?4:5
break
case 4:w=6
return A.b(C.a9J(s),$async$a0t)
case 6:case 5:t.d.$1(r)
case 1:return A.h(u,v)}})
return A.i($async$a0t,v)},
ahA(d){return this.coz(d)},
coz(d){var w=0,v=A.j(x.H),u=this,t
var $async$ahA=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=2
return A.b(C.itk(d),$async$ahA)
case 2:t=f
if(t!=null)u.d.$1(t)
return A.h(null,v)}})
return A.i($async$ahA,v)},
B(d){var w,v,u=null,t=A.P(d),s=this.c,r=s!=null&&B.a.i(s).length!==0
s=r?s:"ngmy:thumb:construction"
t=t.ax.a===B.I?B.jY:B.iO
w=x.p
v=A.a([C.aSs(!0,B.rr,1/0,B.qM,u,s,1/0)],w)
if(!r)v.push(new A.bM(new A.o(u,u,u,u,u,new A.a8(B.aZ,B.b4,B.x,A.a([B.L,B.w.j(0.35)],x.O),u,u),B.n),B.bi,new A.bJ(B.aZ,u,u,new A.D(B.t3,A.d("Pick a theme or your own photo",u,u,u,u,u,u,A.m(u,u,B.c.j(0.92),u,u,u,u,u,u,u,u,11,u,u,B.O,u,u,!0,u,u,u,u,u,B.aCr,u,u),u,u,u),u),u),u))
v.push(A.ao(8,A.A(A.a([A.E(A.dh(D.bWR,u,D.fIx,new C.cp3(this,d),A.bo(B.aV,u,u,u,B.c,u,B.k5,u,u,u,u,B.cg)),1),B.ae,A.E(A.em(D.c4B,u,D.fXP,this.gcft(),A.dj(u,u,B.w.j(0.35),u,u,u,u,u,u,B.c,u,u,B.k5,u,u,D.b6d,u,u,u,B.cg)),1)],w),B.l,u,B.e,B.h,0,u,u),u,u,8,8,u,u))
return new A.fH(1.7777777777777777,A.aG(!1,B.a3,!0,B.rr,new A.an(B.a0,u,B.b1,B.t,v,u),B.aq,t,0,u,u,u,u,u,B.ai),u)}}
C.aNr.prototype={
aY(){this.b5()
this.b3()
this.dI()},
t(){var w=this,v=w.b7$
if(v!=null)v.a6(0,w.gdC())
w.b7$=null
w.a2()}}
C.aVo.prototype={}
C.aVn.prototype={}
C.aTq.prototype={}
C.a_g.prototype={
S(){return new C.aAw()}}
C.aAw.prototype={
Y(){var w,v,u=this
u.a3()
u.a.toString
w=new A.ba("",B.b6,B.aP)
v=$.ax()
u.d!==$&&A.aQ()
u.d=new A.au(w,v)},
t(){var w=this.d
w===$&&A.c()
w.U$=$.ax()
w.P$=0
this.a2()},
KV(){var w,v,u=this,t=u.d
t===$&&A.c()
w=B.a.i(t.a.a)
if(w.length===0){u.c.L(x.q).f.T(D.fnA)
return}t=u.c
t.toString
v=u.e
A.a5(t,!1).N(new C.aVo(w,v))},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=A.P(d).ax.a===B.I,l=m?B.ee:B.c,k=A.l(20),j=A.p(n,D.c4g,B.f,n,n,new A.o(B.aV.j(0.15),n,n,A.l(12),n,n,B.n),n,44,n,n,n,n,n,44),i=A.d("Create Project",n,n,n,n,n,n,A.m(n,n,m?B.aS:B.av,n,n,n,n,n,n,n,n,18,n,n,B.u,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),h=x.p
i=A.E(A.x(A.a([i,B.bE,A.d("Add a thumbnail and budget items after creating.",n,n,n,n,n,n,A.m(n,n,m?B.bu:B.bh,n,n,n,n,n,n,n,n,12,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],h),B.E,n,B.e,B.h,0,B.p),1)
j=A.A(A.a([j,B.bb,i,A.aH(n,n,n,n,A.W(B.cA,m?B.bu:B.bh,n,n,n,n),n,n,n,new C.d93(d),n,n,n,n,n,n)],h),B.l,n,B.e,B.h,0,n,n)
i=A.d("Project thumbnail (16:9)",n,n,n,n,n,n,A.m(n,n,m?B.bu:B.bh,n,n,n,n,n,n,n,n,12,n,n,B.O,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
w=A.d("Full animated preview \u2014 use Themes or Your photos below",n,n,n,n,n,n,A.m(n,n,m?B.bu:B.bh,n,n,n,n,n,n,n,n,11,n,n,B.cD,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
v=C.hta(new C.d94(o),o.e)
u=o.d
u===$&&A.c()
t=A.m(n,n,m?B.aS:B.av,n,n,n,n,n,n,n,n,n,n,n,B.a9,n,n,!0,n,n,n,n,n,n,n,n)
s=m?B.jY:B.iO
r=A.l(12)
q=A.l(12)
p=m?B.eh:B.bO
t=A.aN(n,B.Z,!0,n,!0,B.t,n,A.aO(),u,n,n,n,n,n,2,A.bz(n,new A.b6(4,r,B.du),n,n,n,n,n,n,!0,new A.b6(4,q,new A.ay(p,1,B.r,-1)),n,n,n,n,n,s,!0,n,n,n,n,n,n,n,n,n,n,n,n,n,n,"Kitchen remodel, Wedding, etc.",n,n,n,n,n,n,n,n,"Project name",!0,!0,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n),B.y,!0,n,!0,n,!1,n,B.ak,n,n,n,n,n,n,n,n,n,1,n,n,!1,"\u2022",n,n,n,new C.d95(o),n,!1,n,n,!1,n,!0,n,B.ac,n,n,n,n,n,n,n,n,n,n,n,t,!0,B.a6,n,A_.KN,n,n,n,n)
u=m?B.aS:B.av
m=m?B.eh:B.bO
return A.eG(n,l,new A.cN(B.m3,A.c9(A.x(A.a([j,B.aO,i,B.aw,w,B.P,v,B.aO,t,B.by,A.A(A.a([A.E(A.dV(B.ds,new C.d96(d),A.dj(n,n,n,n,n,n,n,n,n,u,n,n,B.co,n,new A.b9(A.l(12),B.a1),new A.ay(m,1,B.r,-1),n,n,n,n)),1),B.as,A.E(A.bI(D.fY4,n,o.ga3z(),A.bo(B.aV,n,n,n,B.c,n,B.co,n,new A.b9(A.l(12),B.a1),n,n,n)),1)],h),B.l,n,B.e,B.h,0,n,n)],h),B.E,n,B.e,B.N,0,B.p),B.t,n,B.y,n,B.CL,n,n,B.ah),n),n,n,n,A1.CM,n,B.d6,n,new A.b9(k,B.a1),n)}}
C.a_f.prototype={
S(){return new C.aAv()}}
C.aAv.prototype={
Y(){this.a3()
var w=$.ax()
this.d!==$&&A.aQ()
this.d=new A.au(B.ax,w)},
t(){var w=this.d
w===$&&A.c()
w.U$=$.ax()
w.P$=0
this.a2()},
KV(){var w,v=this.d
v===$&&A.c()
w=B.a.i(v.a.a)
if(w.length===0){this.c.L(x.q).f.T(D.flb)
return}v=this.c
v.toString
A.a5(v,!1).N(new C.aVn(w))},
B(d){var w,v,u,t,s,r,q=null,p=A.P(d).ax.a===B.I,o=p?B.ee:B.c,n=A.l(20),m=A.p(q,D.c0A,B.f,q,q,new A.o(B.bQ.j(0.15),q,q,A.l(12),q,q,B.n),q,44,q,q,q,q,q,44),l=A.d("Create Family Tree",q,q,q,q,q,q,A.m(q,q,p?B.aS:B.av,q,q,q,q,q,q,q,q,18,q,q,B.u,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),k=x.p
l=A.E(A.x(A.a([l,B.bE,A.d("Build generations with photos, notes, and profiles.",q,q,q,q,q,q,A.m(q,q,p?B.bu:B.bh,q,q,q,q,q,q,q,q,12,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],k),B.E,q,B.e,B.h,0,B.p),1)
m=A.A(A.a([m,B.bb,l,A.aH(q,q,q,q,A.W(B.cA,p?B.bu:B.bh,q,q,q,q),q,q,q,new C.d9_(d),q,q,q,q,q,q)],k),B.l,q,B.e,B.h,0,q,q)
l=B.aV.j(p?0.12:0.08)
w=A.l(12)
v=A.K(B.aV.j(0.25),B.r,1)
u=A.W(B.apt,B.aV.j(0.9),q,q,q,18)
l=A.p(q,A.A(A.a([u,B.as,A.E(A.d("Example: Historia ya M'Bembe",q,q,q,q,q,q,A.m(q,q,p?B.aS:B.av,q,q,q,q,q,q,q,q,12,q,q,B.a9,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),1)],k),B.l,q,B.e,B.h,0,q,q),B.f,q,q,new A.o(l,q,v,w,q,q,B.n),q,q,q,q,B.bI,q,q,1/0)
w=this.d
w===$&&A.c()
v=A.m(q,q,p?B.aS:B.av,q,q,q,q,q,q,q,q,q,q,q,B.a9,q,q,!0,q,q,q,q,q,q,q,q)
u=p?B.jY:B.iO
t=A.l(12)
s=A.l(12)
r=p?B.eh:B.bO
v=A.aN(q,B.Z,!0,q,!0,B.t,q,A.aO(),w,q,q,q,q,q,2,A.bz(q,new A.b6(4,t,B.du),q,q,q,q,q,q,!0,new A.b6(4,s,new A.ay(r,1,B.r,-1)),q,q,q,q,q,u,!0,q,q,q,q,q,q,q,q,q,q,q,q,q,q,"Enter your family name or title",q,q,q,q,q,q,q,q,"Family tree name",!0,!0,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q),B.y,!0,q,!0,q,!1,q,B.ak,q,q,q,q,q,q,q,q,q,1,q,q,!1,"\u2022",q,q,q,new C.d90(this),q,!1,q,q,!1,q,!0,q,B.ac,q,q,q,q,q,q,q,q,q,q,q,v,!0,B.a6,q,B.la,q,q,q,q)
w=p?B.aS:B.av
p=p?B.eh:B.bO
return A.eG(q,o,new A.cN(B.m3,A.c9(A.x(A.a([m,B.aO,l,B.aB,v,B.by,A.A(A.a([A.E(A.dV(B.ds,new C.d91(d),A.dj(q,q,q,q,q,q,q,q,q,w,q,q,B.co,q,new A.b9(A.l(12),B.a1),new A.ay(p,1,B.r,-1),q,q,q,q)),1),B.as,A.E(A.bI(D.h4a,q,this.ga3z(),A.bo(B.bQ,q,q,q,B.c,q,B.co,q,new A.b9(A.l(12),B.a1),q,q,q)),1)],k),B.l,q,B.e,B.h,0,q,q)],k),B.E,q,B.e,B.N,0,B.p),B.t,q,B.y,q,B.CL,q,q,B.ah),q),q,q,q,A1.CM,q,B.d6,q,new A.b9(n,B.a1),q)}}
C.ZN.prototype={
S(){return new C.aze()}}
C.aze.prototype={
Y(){var w,v=this
v.a3()
w=$.ax()
v.d!==$&&A.aQ()
v.d=new A.au(B.ax,w)
v.e!==$&&A.aQ()
v.e=new A.au(new A.ba("1",B.b6,B.aP),w)
v.f!==$&&A.aQ()
v.f=new A.au(B.ax,w)
v.r!==$&&A.aQ()
v.r=new A.au(B.ax,w)},
t(){var w,v=this,u=v.d
u===$&&A.c()
w=u.U$=$.ax()
u.P$=0
u=v.e
u===$&&A.c()
u.U$=w
u.P$=0
u=v.f
u===$&&A.c()
u.U$=w
u.P$=0
u=v.r
u===$&&A.c()
u.U$=w
u.P$=0
v.a2()},
gKc(){var w,v=this.e
v===$&&A.c()
w=A.cW(B.a.i(v.a.a))
if(w==null||w<=0)return 1
return w},
gakK(){var w=this.f
w===$&&A.c()
w=A.cW(B.a.i(w.a.a))
return w==null?0:w},
gb6L(){var w,v=this.w
if(v==="other"){v=this.r
v===$&&A.c()
w=B.a.i(v.a.a)
return w.length===0?"units":w}return v},
aR_(d){var w,v=B.j.D(this.gKc()+d,0.25,999999),u=B.j.iG(v),t=this.e
t===$&&A.c()
if(v===u)u=B.o.v(B.j.M(v))
else{u=B.j.ad(v,2)
w=A.ag("\\.?0+$",!0,!1,!1,!1)
u=A.aL(u,w,"")}t.sb1(0,u)
this.m(new C.cHq())},
aA0(d,e,f,g){var w=null,v=g!=null?A.W(g,B.aV,w,w,w,20):w,u=d.a,t=u?B.jY:B.iO,s=A.l(14),r=A.l(14)
u=u?B.eh:B.bO
return A.bz(w,new A.b6(4,s,B.du),w,B.bI,w,w,w,w,!0,new A.b6(4,r,new A.ay(u,1,B.r,-1)),w,w,w,w,w,t,!0,w,w,w,w,new A.b6(4,A.l(14),B.aeM),w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w,w,e,!0,!0,!1,w,v,w,w,w,w,w,w,w,w,w,w,w,w)},
cfu(d,e,f){return this.aA0(d,e,f,null)},
KV(){var w,v,u,t,s=this,r=s.d
r===$&&A.c()
w=B.a.i(r.a.a)
if(s.gakK()<=0){s.c.L(x.q).f.T(D.fpv)
return}r=s.c
r.toString
v=s.gKc()
u=s.gakK()
t=s.gb6L()
A.a5(r,!1).N(new C.aTq(w,v,u,t))},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=A.P(d).ax.a===B.I,m=new C.uk(n),l=n?B.ee:B.c,k=A.l(24),j=x.O,i=A.a([B.aV.j(0.22),B.bQ.j(0.14)],j),h=A.l(14)
i=A.p(o,D.bUN,B.f,o,o,new A.o(o,o,A.K(B.aV.j(0.35),B.r,1),h,o,new A.a8(B.a5,B.a8,B.x,i,o,o),B.n),o,48,o,o,o,o,o,48)
h=A.d("Add Budget Item",o,o,o,o,o,o,A.m(o,o,n?B.aS:B.av,o,o,o,o,o,o,o,o,19,o,o,B.u,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)
w=x.p
h=A.E(A.x(A.a([h,B.bE,A.d("Amount required \xb7 name optional",o,o,o,o,o,o,A.m(o,o,n?B.bu:B.bh,o,o,o,o,o,o,o,o,12,o,o,B.cD,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],w),B.E,o,B.e,B.h,0,B.p),1)
i=A.A(A.a([i,B.bb,h,A.aH(o,o,o,o,A.W(B.cA,n?B.bu:B.bh,o,o,o,o),o,o,o,new C.cHw(d),o,o,o,o,o,o)],w),B.l,o,B.e,B.h,0,o,o)
h=p.d
h===$&&A.c()
v=A.m(o,o,n?B.aS:B.av,o,o,o,o,o,o,o,o,o,o,o,B.a9,o,o,!0,o,o,o,o,o,o,o,o)
v=A.aN(o,B.Z,!0,o,!0,B.t,o,A.aO(),h,o,o,o,o,o,2,p.aA0(m,"Item name (optional)","Lumber, paint, labor\u2026",B.PW),B.y,!0,o,!0,o,!1,o,B.ak,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.ac,o,o,o,o,o,o,o,o,o,o,o,v,!0,B.a6,o,A_.KN,o,o,o,o)
h=A.d("Units",o,o,o,o,o,o,A.m(o,o,n?B.bu:B.bh,o,o,o,o,o,o,o,o,12,o,o,B.H,o,o,!0,o,0.3,o,o,o,o,o,o),o,o,o)
u=n?B.jY:B.iO
t=A.l(14)
s=A.K(n?B.eh:B.bO,B.r,1)
r=A.aH(o,o,o,o,A.W(B.wV,n?B.aS:B.av,o,o,o,20),o,o,o,new C.cHx(p),o,o,o,o,o,B.cg)
q=p.e
q===$&&A.c()
q=A.aN(o,B.Z,!1,o,!0,B.t,o,A.aO(),q,o,o,o,o,o,2,D.c69,B.y,!0,o,!0,o,!1,o,B.ak,o,o,o,o,o,B.ea,o,o,o,1,o,o,!1,"\u2022",o,new C.cHy(p),o,o,o,!1,o,o,!1,o,!0,o,B.ac,o,o,o,o,o,o,o,o,o,o,o,A.m(o,o,n?B.aS:B.av,o,o,o,o,o,o,o,o,16,o,o,B.u,o,o,!0,o,o,o,o,o,o,o,o),!0,B.K,o,B.ao,o,o,o,o)
u=A.p(o,A.A(A.a([r,new A.a3(52,o,q,o),A.aH(o,o,o,o,A.W(B.i0,n?B.aS:B.av,o,o,o,20),o,o,o,new C.cHz(p),o,o,o,o,o,B.cg)],w),B.l,o,B.e,B.N,0,o,o),B.f,o,o,new A.o(u,o,s,t,o,o,B.n),o,o,o,o,o,o,o,o)
t=p.f
t===$&&A.c()
s=A.m(o,o,n?B.aS:B.av,o,o,o,o,o,o,o,o,16,o,o,B.O,o,o,!0,o,o,o,o,o,o,o,o)
s=A.A(A.a([u,B.as,A.E(A.aN(o,B.Z,!1,o,!0,B.t,o,A.aO(),t,o,o,o,o,o,2,p.aA0(m,"Amount","0.00",B.hz),B.y,!0,o,!0,o,!1,o,B.ak,o,o,o,o,o,B.ea,o,o,o,1,o,o,!1,"\u2022",o,new C.cHA(p),o,o,o,!1,o,o,!1,o,!0,o,B.ac,o,o,o,o,o,o,o,o,o,o,o,s,!0,B.a6,o,B.ao,o,o,o,o),1)],w),B.E,o,B.e,B.h,0,o,o)
t=x.gv
u=A.C(new A.N(D.dcb,new C.cHB(p,m),t),t.k("ak.E"))
i=A.a([i,B.by,v,B.aB,h,B.P,s,B.af,A.bZ(B.bH,u,B.br,o,6,6)],w)
if(p.w==="other"){h=p.r
h===$&&A.c()
v=A.m(o,o,n?B.aS:B.av,o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o)
B.d.u(i,A.a([B.T,A.aN(o,B.Z,!1,o,!0,B.t,o,A.aO(),h,o,o,o,o,o,2,p.cfu(m,"Custom unit","rolls, sheets, trips\u2026"),B.y,!0,o,!0,o,!1,o,B.ak,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,new C.cHC(p),o,o,o,!1,o,o,!1,o,!0,o,B.ac,o,o,o,o,o,o,o,o,o,o,o,v,!0,B.a6,o,B.la,o,o,o,o)],w))}i.push(B.aO)
h=B.aV.j(n?0.18:0.1)
j=A.a([h,B.bQ.j(n?0.12:0.06)],j)
h=A.l(16)
v=A.K(B.aV.j(0.35),B.r,1)
u=A.d("Line total",o,o,o,o,o,o,A.m(o,o,n?B.bu:B.bh,o,o,o,o,o,o,o,o,11,o,o,B.O,o,o,!0,o,0.4,o,o,o,o,o,o),o,o,o)
t=p.gKc()===B.j.iG(p.gKc())?B.j.M(p.gKc()):p.gKc()
s=p.gb6L()
r=A.Bn(p.gakK())
i.push(A.p(o,A.A(A.a([A.E(A.x(A.a([u,B.aw,A.d(A.w(t)+" "+s+" \xd7 "+r,o,o,o,o,o,o,A.m(o,o,n?B.bu:B.bh,o,o,o,o,o,o,o,o,12,o,o,B.a9,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],w),B.E,o,B.e,B.h,0,B.p),1),C.bGb(p.gKc()*p.gakK(),B.b2,!1,B.u)],w),B.l,o,B.e,B.h,0,o,o),B.f,o,o,new A.o(o,o,v,h,o,new A.a8(B.a5,B.a8,B.x,j,o,o),B.n),o,o,o,o,B.jr,o,o,o))
i.push(B.by)
j=A.l(14)
h=n?B.eh:B.bO
h=A.dj(o,o,o,o,o,o,o,o,o,o,o,o,B.co,o,new A.b9(j,B.a1),new A.ay(h,1,B.r,-1),o,o,o,o)
i.push(A.A(A.a([A.E(A.dV(A.d("Cancel",o,o,o,o,o,o,A.m(o,o,n?B.aS:B.av,o,o,o,o,o,o,o,o,o,o,o,B.O,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),new C.cHD(d),h),1),B.as,A.E(A.dh(D.asX,o,D.h03,p.ga3z(),A.bo(B.aV,o,o,0,B.c,o,B.co,o,new A.b9(A.l(14),B.a1),o,o,o)),2)],w),B.l,o,B.e,B.h,0,o,o))
return A.eG(o,l,new A.cN(B.Mc,A.c9(A.x(i,B.al,o,B.e,B.N,0,B.p),B.t,o,B.y,o,Ai.t8,o,o,B.ah),o),o,o,o,B.Ov,o,B.d6,o,new A.b9(k,B.a1),o)}}
C.a2o.prototype={
S(){return new C.byD()}}
C.byD.prototype={
Y(){var w,v,u=this
u.a3()
w=u.a.e
v=$.ax()
u.d!==$&&A.aQ()
u.d=new A.au(new A.ba(w,B.b6,B.aP),v)},
t(){var w=this.d
w===$&&A.c()
w.U$=$.ax()
w.P$=0
this.a2()},
B(d){var w,v,u,t=this,s=null,r=A.P(d).ax.a===B.I,q=r?B.ee:B.c,p=A.l(20),o=t.a.c
o=A.d(o,s,s,s,s,s,s,A.m(s,s,r?B.aS:B.av,s,s,s,s,s,s,s,s,18,s,s,B.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)
w=t.d
w===$&&A.c()
v=A.m(s,s,r?B.aS:B.av,s,s,s,s,s,s,s,s,s,s,s,s,s,s,!0,s,s,s,s,s,s,s,s)
u=t.a.d
r=r?B.jY:B.iO
v=A.aN(s,B.Z,!0,s,!0,B.t,s,A.aO(),w,s,s,s,s,s,2,A.bz(s,new A.b6(4,A.l(12),B.du),s,s,s,s,s,s,!0,s,s,s,s,s,s,r,!0,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,u,!0,!0,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s),B.y,!0,s,!0,s,!1,s,B.ak,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,new C.fnn(t,d),s,!1,s,s,!1,s,!0,s,B.ac,s,s,s,s,s,s,s,s,s,s,s,v,!0,B.a6,s,B.ao,s,s,s,s)
u=A.E(A.dV(B.ds,new C.fno(d),s),1)
r=A.bo(B.bQ,s,s,s,s,s,s,s,s,s,s,s)
w=x.p
return A.eG(s,q,new A.D(B.CL,A.x(A.a([o,B.aB,v,B.aO,A.A(A.a([u,B.as,A.E(A.bI(A.d(t.a.f,s,s,s,s,s,s,s,s,s,s),s,new C.fnp(t,d),r),1)],w),B.l,s,B.e,B.h,0,s,s)],w),B.l,s,B.e,B.N,0,B.p),s),s,s,s,s,s,B.d6,s,new A.b9(p,B.a1),s)}}
C.acL.prototype={
a7(){return"WorksheetFrameStyle."+this.b}}
C.Gl.prototype={
S(){return new C.byB(null,null)}}
C.byB.prototype={
Y(){var w,v=this
v.a3()
w=A.bn(null,D.bBG,null,1,null,v)
w.cK(0)
v.d!==$&&A.aQ()
v.d=w},
t(){var w=this.d
w===$&&A.c()
w.t()
this.bBJ()},
gbDk(){switch(this.a.r.a){case 1:return A.a([B.aV,B.bQ,B.b2],x.O)
case 2:return A.a([B.bv,B.aV,B.b2],x.O)
case 3:return A.a([B.aG,B.ci,B.jG],x.O)
case 4:return A.a([B.fI,B.bQ,B.fq],x.O)
case 0:return A.a([B.aV,B.bQ,B.b2],x.O)}},
B(d){var w=A.P(d),v=this.d
v===$&&A.c()
return new A.en(A.c6(v,new C.fnl(this,new C.uk(w.ax.a===B.I)),null),null)}}
C.az7.prototype={
S(){return new C.byC(null,null)}}
C.byC.prototype={
Y(){var w,v=this
v.a3()
w=A.bn(null,B.nF,null,1,null,v)
w.cK(0)
v.d!==$&&A.aQ()
v.d=w},
t(){var w=this.d
w===$&&A.c()
w.t()
this.bBK()},
B(d){var w=this.d
w===$&&A.c()
return A.c6(w,new C.fnm(this),null)}}
C.byA.prototype={
a4(d,e){var w,v,u,t,s,r,q,p=this,o=e.a
if(o<8||e.b<8)return
w=p.c
v=A.bx(new A.a6(1.5,1.5,1.5+(o-3),1.5+(e.b-3)),new A.aP(w,w))
u=new A.aI($.S().r,B.aj,null,null,A.a([],x.v))
u.E(new A.ja(v))
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
d.ag(u,w)
w=A.zA(u)
t=A.a([],x.U)
w=new A.tG(w,!1,t)
for(o=p.b,s=-o*0.85;w.C();){r=w.c
if(r===0||w.f)A.bk(A.jL(y.B));--r
q=new A.BN(w,r)
w.j6()
r=t[r].b
r===$&&A.c()
r=r.a.length()
p.aUA(d,q,r,o,0,0.2,4.2,0.92)
p.aUA(d,q,r,s,0.52,0.11,3.2,0.58)}},
aUA(d,e,f,g,h,i,j,k){var w,v,u,t=B.j.F(g+h,1)*f,s=A.hQe(e.a.a,e,t,t+f*i,!0),r=A.bEt(s.glY().a.getBounds())
$.S()
w=A.L()
w.b=B.aa
w.c=j
w.d=B.bF
w.f=!0
v=this.f
u=k*this.e
w.sap(new A.a8(B.a5,B.a8,B.x,A.a([v[0].j(0),v[0].j(u),v[1].j(u),v[0].j(0)],x.O),B.IH,null).aG(0,r))
d.ag(s,w)},
aE(d){return d.b!==this.b||d.d!==this.d}}
C.aPz.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbA())
w.a9$=null
w.a2()},
aY(){this.b5()
this.b3()
this.bB()}}
C.aPA.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbA())
w.a9$=null
w.a2()},
aY(){this.b5()
this.b3()
this.bB()}}
C.uk.prototype={}
C.auf.prototype={
S(){return new C.aGS()},
ge3(){return this.c}}
C.aGS.prototype={
Y(){var w=this
w.a3()
w.d=w.a.d
w.air()},
t(){var w=this.a.c,v=this.d
v===$&&A.c()
C.Md(w,v)
this.a2()},
air(){var w=0,v=A.j(x.H),u=this,t,s
var $async$air=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return A.b(C.bEC(t.c,t.d.a),$async$air)
case 2:s=e
if(s!=null&&u.c!=null)u.m(new C.eW3(u,s))
return A.h(null,v)}})
return A.i($async$air,v)},
QX(){var w=0,v=A.j(x.H),u=this,t,s
var $async$QX=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:u.m(new C.eVV(u))
t=u.a.c
s=u.d
s===$&&A.c()
w=2
return A.b(C.Md(t,s),$async$QX)
case 2:if(u.c!=null)u.m(new C.eVW(u))
return A.h(null,v)}})
return A.i($async$QX,v)},
Ru(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$Ru=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.c
p.toString
p=A.P(p)
s=t.c
s.toString
w=3
return A.b(A.cg(null,null,!0,null,new C.eW1(t,new C.uk(p.ax.a===B.I)),s,null,!0,!0,x.T),$async$Ru)
case 3:r=e
if(r==null||t.c==null){w=1
break}p=t.d
p===$&&A.c()
q=p.c
w=q!=null&&q!==r?4:5
break
case 4:w=6
return A.b(C.a9J(q),$async$Ru)
case 6:case 5:t.m(new C.eW2(t,r))
w=7
return A.b(t.QX(),$async$Ru)
case 7:case 1:return A.h(u,v)}})
return A.i($async$Ru,v)},
WE(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$WE=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return A.b(C.it5(r),$async$WE)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.m(new C.eVQ(t,new C.rq(B.o.v(1000*Date.now()),s.a,s.b,s.c,s.d)))
w=4
return A.b(t.QX(),$async$WE)
case 4:case 1:return A.h(u,v)}})
return A.i($async$WE,v)},
ckA(){var w,v,u=this,t=u.c
t.toString
w=u.a.c
v=u.d
v===$&&A.c()
C.hHJ(t,new C.eVU(u),w,v)},
ace(d){var w=null,v=B.c.j(d?0.85:0.55)
return A.p(w,w,B.f,w,w,new A.o(w,w,new A.bF(new A.ay(v,2.5,B.r,-1),B.a1,B.a1,new A.ay(B.c.j(d?0.85:0.55),2.5,B.r,-1)),D.b6_,w,w,B.n),w,22,w,w,w,w,w,22)},
abg(d){return this.bPn(d)},
bPn(d){var w=0,v=A.j(x.H),u=this
var $async$abg=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:u.m(new C.eVT(u,d))
w=2
return A.b(u.QX(),$async$abg)
case 2:return A.h(null,v)}})
return A.i($async$abg,v)},
B(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=A.P(a2).ax.a===B.I,e=f?B.c4:B.hY,d=A.l(8),a0=A.W(Y.a2C,f?B.bu:B.bh,g,g,g,16),a1=x.p
a0=A.aM(!1,d,!0,new A.D(B.Hc,A.A(A.a([a0,B.bm,A.d("Back to Projects",g,g,g,g,g,g,A.m(g,g,f?B.bu:B.bh,g,g,g,g,g,g,g,g,g,g,g,B.a9,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)],a1),B.l,g,B.e,B.N,0,g,g),g),g,!0,g,g,g,g,g,g,g,g,g,g,g,new C.eW4(h,a2),g,g,g,g,g,g,g)
d=h.d
d===$&&A.c()
d=d.c
if(d!=null&&B.a.a_(d,"ngmy:thumb:"))d=new A.an(B.a0,g,B.b1,B.t,A.a([A.bu(A.l(22),C.aSs(!0,A.l(22),1/0,B.qM,g,d,1/0),B.aq),A.ao(10,A.dh(D.bZu,g,D.h2s,h.gb4H(),A.bo(B.w.j(0.45),g,g,g,B.c,g,B.hl,g,new A.b9(A.l(12),B.a1),g,g,g)),g,g,g,10,g,g)],a1),g)
else{d=A.l(22)
w=x.V
v=A.a([new A.ab(0,B.G,B.aV.j(f?0.5:0.38),B.eR,22),new A.ab(-4,B.G,B.bQ.j(0.2),B.J,32)],w)
u=A.l(17)
t=A.K(B.c.j(0.45),B.r,1.2)
w=A.a([new A.ab(-2,B.G,B.c.j(0.18),B.J,10)],w)
s=A.l(16)
r=h.d
v=A.p(g,A.p(g,A.bu(s,new A.an(B.a0,g,B.b1,B.t,A.a([C.aSs(!0,A.l(16),1/0,B.Po,g,r.c,1/0),new A.bM(new A.o(g,g,g,g,g,new A.a8(B.aZ,B.b4,B.x,A.a([B.c.j(0.06),B.L,B.w.j(0.22)],x.O),g,g),B.n),B.bi,g,g),A.ao(g,h.ace(!0),g,g,8,g,8,g),A.ao(g,A.cE3(h.ace(!0),!0,!1),g,g,g,8,8,g),A.ao(8,A.cE3(h.ace(!1),!1,!0),g,g,8,g,g,g),A.ao(8,A.cE3(h.ace(!1),!0,!0),g,g,g,8,g,g),A.ao(10,A.dh(D.bVo,g,D.fWM,h.gb4H(),A.bo(B.w.j(0.45),g,g,g,B.c,g,B.hl,g,new A.b9(A.l(12),B.a1),g,g,g)),g,g,g,10,g,g)],a1),g),B.aq),B.f,g,g,new A.o(g,g,t,u,w,g,B.n),g,g,g,g,g,g,g,g),B.f,g,g,new A.o(g,g,g,d,v,D.c7R,B.n),g,g,g,g,B.lP,g,g,g)
d=v}w=h.d
w=A.d(w.b,g,g,g,g,g,g,A.m(g,g,f?B.aS:B.av,g,g,g,g,g,g,g,g,22,g,g,B.u,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)
q=h.d.d.length
v=A.l(22)
u=x.O
u=f?A.a([D.bgU,B.om,B.hi],u):A.a([B.b2,B.aV,B.bQ],u)
t=x.V
s=A.a([new A.ab(0,B.G,B.aV.j(f?0.45:0.35),B.eR,24)],t)
r=A.l(22)
p=A.ao(g,A.W(B.js,B.c.j(0.08),g,g,g,120),g,g,g,-24,-24,g)
o=B.c.j(0.16)
n=A.l(20)
m=A.K(B.c.j(0.22),B.r,1)
l=q===1?"item":"items"
n=A.a([A.A(A.a([A.p(g,A.d(""+q+" "+l,g,g,g,g,g,g,A.m(g,g,B.c.j(0.92),g,g,g,g,g,g,g,g,11,g,g,B.H,g,g,!0,g,0.3,g,g,g,g,g,g),g,g,g),B.f,g,g,new A.o(o,g,m,n,g,g,B.n),g,g,g,g,B.hj,g,g,g)],a1),B.l,g,B.e,B.h,0,g,g),B.aB,A.d("PROJECT TOTAL",g,g,g,g,g,g,A.m(g,g,B.c.j(0.75),g,g,g,g,g,g,g,g,11,g,g,B.H,g,g,!0,g,1.4,g,g,g,g,g,g),g,g,g),B.am,C.bGb(h.d.gxJ(),B.c,!0,B.u)],a1)
if(q>0)B.d.u(n,A.a([B.P,A.d("Sum of all budget line items",g,g,g,g,g,g,A.m(g,g,B.c.j(0.65),g,g,g,g,g,g,g,g,11,g,g,B.cD,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)],a1))
o=A.E(A.x(n,B.E,g,B.e,B.h,0,B.p),1)
n=A.l(14)
m=A.l(14)
l=B.c.j(0.12)
k=A.K(B.hK.j(0.75),B.r,1.6)
t=A.a([new A.ab(0,B.G,B.aG.j(0.28),B.cJ,14)],t)
j=B.aG.j(0.22)
i=A.l(10)
u=A.p(g,A.bu(r,new A.an(B.a0,g,B.ad,B.t,A.a([p,new A.D(D.bGy,A.A(A.a([o,B.as,A.aG(!1,B.a3,!0,g,A.aM(!1,n,!0,A.eB(new A.D(V.wz,A.x(A.a([A.p(g,D.asw,B.f,g,g,new A.o(j,g,A.K(B.aG.j(0.5),B.r,1),i,g,g,B.n),g,g,g,g,B.cp,g,g,g),B.fC,D.fLn],a1),B.l,g,B.e,B.N,0,B.p),g),g,new A.o(l,g,k,m,t,g,B.n),g,g,g),g,!0,g,g,g,g,g,g,g,g,g,g,g,h.gckz(),g,g,g,g,g,g,g),B.f,B.L,0,g,g,g,g,g,B.ai)],a1),B.l,g,B.e,B.h,0,g,g),g)],a1),g),B.aq),B.f,g,g,new A.o(g,g,g,v,s,new A.a8(B.ay,B.aD,B.x,u,g,g),B.n),g,g,g,g,g,g,g,g)
s=h.d.d.length
d=A.a([new A.fH(1.7777777777777777,d,g),B.aO,w,B.P,u,B.by,A.A(A.a([A.d("Budget Items ("+s+")",g,g,g,g,g,g,A.m(g,g,f?B.aS:B.av,g,g,g,g,g,g,g,g,16,g,g,B.H,g,g,!0,g,g,g,g,g,g,g,g),g,g,g),B.b3,A.dh(Au.a4t,g,D.fJd,h.gbDO(),A.bo(B.aV,g,g,g,B.c,g,B.hO,g,new A.b9(A.l(12),B.a1),g,g,g))],a1),B.l,g,B.e,B.h,0,g,g),B.af],a1)
w=h.d.d
if(w.length===0){w=f?B.ee:B.c
v=A.l(14)
u=A.K(f?B.eh:B.bO,B.r,1)
t=A.W(B.a2Y,f?B.bu:B.bh,g,g,g,48)
s=A.d("No budget items yet",g,g,g,g,g,g,A.m(g,g,f?B.aS:B.av,g,g,g,g,g,g,g,g,g,g,g,B.O,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)
d.push(A.p(g,A.x(A.a([t,B.T,s,B.am,A.d("Add item names, units, and prices to track spending.",g,g,g,g,g,g,A.m(g,g,f?B.bu:B.bh,g,g,g,g,g,g,g,g,g,g,g,g,g,g,!0,g,g,g,g,g,g,g,g),B.K,g,g)],a1),B.l,g,B.e,B.h,0,B.p),B.f,g,g,new A.o(w,g,u,v,g,g,B.n),g,g,g,g,B.qI,g,g,1/0))}else B.d.u(d,new A.N(w,new C.eW5(h,new C.uk(f)),A.U(w).k("N<1,v>")))
if(h.e)d.push(new A.D(B.Cx,A.as(A.n6(g,f?B.bu:B.bh,g,g,g,g,g,g,g,g),g,g,g),g))
return A.c4(g,e,A.bm(!0,A.x(A.a([new A.D(B.CC,a0,g),A.E(A.c9(A.x(d,B.E,g,B.e,B.h,0,B.p),B.t,g,B.y,g,E.z_,g,g,B.ah),1)],a1),B.E,g,B.e,B.h,0,B.p),!0,!1,B.ag,!0,!0),g,!1,!1,g,g)},
bHu(d,e){var w,v,u=null,t=d.b,s=B.a.i(t).length===0,r=e.a,q=r?B.ee:B.c,p=A.l(16),o=A.a([new A.ab(0,B.G,B.w.j(r?0.35:0.08),B.cJ,12)],x.V),n=A.l(16),m=A.p(u,u,B.f,u,u,D.b8K,u,u,u,u,u,u,u,5),l=B.aV.j(r?0.22:0.12),k=A.l(12)
l=A.p(u,A.W(s?B.ih:B.h2,B.b2,u,u,u,20),B.f,u,u,new A.o(l,u,u,k,u,u,B.n),u,40,u,u,u,u,u,40)
if(s)t=B.bM
else{k=x.p
t=A.a([A.d(t,u,2,B.a2,u,u,u,A.m(u,u,r?B.aS:B.av,u,u,u,u,u,u,u,u,15,u,u,B.H,u,1.25,!0,u,u,u,u,u,u,u,u),u,u,u)],k)
if(d.c!==1||d.e!=="each"){w=d.gd07()
v=A.Bn(d.d)
B.d.u(t,A.a([B.aw,A.d(w+" "+v,u,u,u,u,u,u,A.m(u,u,r?B.bu:B.bh,u,u,u,u,u,u,u,u,12,u,u,B.a9,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],k))}t=A.x(t,B.E,u,B.b8,B.N,0,B.p)}t=A.E(t,1)
k=A.a([B.aV.j(0.14),B.bQ.j(0.1)],x.O)
w=A.l(12)
k=A.p(u,C.bGb(d.c*d.d,B.b2,!1,B.u),B.f,u,u,new A.o(u,u,u,w,u,new A.a8(B.a5,B.a8,B.x,k,u,u),B.n),u,u,u,u,B.hl,u,u,u)
w=x.p
return A.p(u,A.bu(n,new A.EM(A.A(A.a([m,A.E(new A.D(B.amn,A.A(A.a([l,B.bb,t,B.ae,k,A.aH(u,u,u,u,A.W(B.cA,(r?B.bu:B.bh).j(0.75),u,u,u,20),u,u,u,new C.eVR(this,d),u,u,u,u,u,B.cg)],w),B.l,u,B.e,B.h,0,u,u),u),1)],w),B.al,u,B.e,B.h,0,u,u),u),B.aq),B.f,u,D.b7B,new A.o(q,u,u,p,o,u,B.n),u,u,u,B.d9,u,u,u,u)}}
C.aeP.prototype={
F0(d){return this.bQL(d)},
bQL(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$F0=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:o=t.c
w=3
return A.b(A.pz(d,o,!1),$async$F0)
case 3:if(!f||d.e==null){w=1
break}A.a5(d,!1).N(null)
w=4
return A.b(A.bN(Ah.Cv,null,x.H),$async$F0)
case 4:s=t.d
w=5
return A.b(C.fX7(!0,o,s),$async$F0)
case 5:r=f
q=A.ag("[^\\w\\-.]+",!0,!1,!1,!1)
w=6
return A.b(A.Hf(r,"ngmy_project_"+A.aL(s.b,q,"_"),!1),$async$F0)
case 6:p=f
w=7
return A.b(A.py(o,!1),$async$F0)
case 7:if(d.e==null){w=1
break}d.L(x.q).f.T(A.b2(null,null,null,null,null,B.t,null,A.d(p,null,null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$F0,v)},
a0v(d){return this.cB_(d)},
cB_(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$a0v=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.c
w=3
return A.b(A.pz(d,s,!1),$async$a0v)
case 3:if(!f||d.e==null){w=1
break}A.a5(d,!1).N(null)
A.hC(d,new C.au9(s,t.d,null),!1,"NgmyWorksheetProjectQr",x.H)
w=4
return A.b(A.py(s,!1),$async$a0v)
case 4:case 1:return A.h(u,v)}})
return A.i($async$a0v,v)},
QY(d){return this.cx2(d)},
cx2(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$QY=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:A.a5(d,!1).N(null)
w=3
return A.b(A.hC(d,D.aMd,!0,"NgmyWorksheetProjectScan",x.N),$async$QY)
case 3:s=f
if(s==null||B.a.i(s).length===0){w=1
break}w=4
return A.b(C.bGc(s),$async$QY)
case 4:r=f
if(r==null){if(d.e==null){w=1
break}d.L(x.q).f.T(D.foC)
w=1
break}q=C.hiF(r)
p=t.e.$1(q)
w=5
return A.b(x.x.b(p)?p:A.dN(p,x.H),$async$QY)
case 5:if(d.e==null){w=1
break}d.L(x.q).f.T(A.b2(null,null,null,null,null,B.t,null,A.d('Imported "'+q.b+'" from QR',null,null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$QY,v)},
a0w(d){return this.cJj(d)},
cJj(d){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$a0w=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:A.a5(d,!1).N(null)
w=3
return A.b(C.bFH(),$async$a0w)
case 3:s=f
if(s==null){w=1
break}r=C.hiF(s)
q=t.e.$1(r)
w=4
return A.b(x.x.b(q)?q:A.dN(q,x.H),$async$a0w)
case 4:if(d.e==null){w=1
break}d.L(x.q).f.T(A.b2(null,null,null,null,null,B.t,null,A.d('Imported "'+r.b+'" from file',null,null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$a0w,v)},
B(d){var w=this,v=null,u=A.P(d).ax.a===B.I,t=new C.uk(u),s=w.d.d.length,r=u?B.ee:B.c,q=A.l(28),p=A.a([new A.ab(0,B.G,B.w.j(u?0.35:0.08),B.kE,36)],x.V),o=x.p
return A.bm(!0,new A.D(B.wy,A.p(v,A.x(A.a([w.czz(d,t,s),new A.D(D.bFW,A.x(A.a([w.b7G(t,"QR restore"),B.T,A.A(A.a([w.b2G(t,!0,B.ju,B.aG,B.aG,new C.eW7(w,d),"Show to scan","QR code"),B.as,w.aA1(t,B.jv,B.b7,B.bd,new C.eW8(w,d),"From camera","Scan QR")],o),B.l,v,B.e,B.h,0,v,v),B.da,w.b7G(t,"Backup files"),B.T,A.A(A.a([w.aA1(t,B.hP,B.aV,B.bQ,new C.eW9(w,d),"Full copy","Backup file"),B.as,w.aA1(t,R.zH,B.at,B.aQ,new C.eWa(w,d),".json backup","Upload file")],o),B.l,v,B.e,B.h,0,v,v)],o),B.E,v,B.e,B.h,0,B.p),v)],o),B.l,v,B.e,B.N,0,B.p),B.aq,v,v,new A.o(r,v,v,q,p,v,B.n),v,v,v,v,v,v,v,v),v),!0,!1,B.ag,!0,!0)},
czz(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=x.O
k=e.a?A.a([B.fd,B.cU,B.fX],k):A.a([B.b2,B.aV,B.bQ],k)
w=A.ao(l,A.W(B.va,B.c.j(0.07),l,l,l,110),l,l,l,-20,-10,l)
v=A.as(A.p(l,l,B.f,l,l,new A.o(B.c.j(0.35),l,l,A.l(4),l,l,B.n),l,4,l,B.ky,l,l,l,36),l,l,l)
u=A.l(14)
t=A.K(B.c.j(0.45),B.r,1.5)
s=A.a([new A.ab(0,B.G,B.w.j(0.2),B.cJ,12)],x.V)
r=this.d
s=A.p(l,C.aSs(!0,A.l(13),64,D.bQB,l,r.c,64),B.aq,l,l,new A.o(l,l,t,u,s,l,B.n),l,64,l,l,l,l,l,64)
u=A.d("Share project",l,l,l,l,l,l,A.m(l,l,B.c.j(0.78),l,l,l,l,l,l,l,l,11,l,l,B.H,l,l,!0,l,1.1,l,l,l,l,l,l),l,l,l)
t=A.d(r.b,l,2,B.a2,l,l,l,I.ac7,l,l,l)
r=C.bGb(r.gxJ(),B.c,!1,B.u)
q=B.c.j(0.16)
p=A.l(20)
o=A.K(B.c.j(0.22),B.r,1)
n=f===1?"item":"items"
m=x.p
return A.p(l,new A.an(B.a0,l,B.ad,B.t,A.a([w,new A.D(D.bGj,A.x(A.a([v,A.A(A.a([s,B.ev,A.E(A.x(A.a([u,B.aw,t,B.P,A.A(A.a([r,B.ae,A.p(l,A.d(""+f+" "+n,l,l,l,l,l,l,A.m(l,l,B.c.j(0.9),l,l,l,l,l,l,l,l,10,l,l,B.H,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),B.f,l,l,new A.o(q,l,o,p,l,l,B.n),l,l,l,l,B.fM,l,l,l)],m),B.l,l,B.e,B.h,0,l,l)],m),B.E,l,B.e,B.h,0,B.p),1),A.aH(l,l,l,l,A.W(B.cA,B.c.j(0.85),l,l,l,l),l,l,l,new C.eW6(d),l,l,l,A.o2(l,B.c.j(0.12),l,l,l,l,l,l,l,l,l,l,E.aUz,l,l,l,l),l,l)],m),B.E,l,B.e,B.h,0,l,l)],m),B.l,l,B.e,B.h,0,B.p),l)],m),l),B.f,l,l,new A.o(l,l,l,l,l,new A.a8(B.ay,B.aD,B.x,k,l,l),B.n),l,l,l,l,l,l,l,1/0)},
b7G(d,e){var w=null,v=A.p(w,w,B.f,w,w,new A.o(B.aV,w,w,A.l(2),w,w,B.n),w,14,w,w,w,w,w,3)
return A.A(A.a([v,B.ae,A.d(e.toUpperCase(),w,w,w,w,w,w,A.m(w,w,d.a?B.bu:B.bh,w,w,w,w,w,w,w,w,11,w,w,B.H,w,w,!0,w,0.9,w,w,w,w,w,w),w,w,w)],x.p),B.l,w,B.e,B.h,0,w,w)},
b2G(d,e,f,g,h,i,j,k){var w,v,u,t,s,r=null,q=A.l(18),p=A.l(18),o=d.a,n=o?D.akX:B.aS
if(e)w=B.aG.j(o?0.45:0.35)
else{w=o?B.eh:B.bO
w=w.j(o?0.8:1)}w=A.K(w,B.r,e?1.5:1)
v=e?A.a([new A.ab(0,B.G,B.aG.j(0.12),B.cJ,14)],x.V):r
u=g.j(o?0.22:0.14)
t=A.l(12)
s=A.K(h.j(0.35),B.r,1)
t=A.p(r,A.W(f,h,r,r,r,22),B.f,r,r,new A.o(u,r,s,t,r,r,B.n),r,r,r,r,B.ta,r,r,r)
u=A.d(k,r,r,r,r,r,r,A.m(r,r,o?B.aS:B.av,r,r,r,r,r,r,r,r,14,r,r,B.u,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
return A.E(A.aG(!1,B.a3,!0,r,A.aM(!1,q,!0,A.eB(new A.D(E.a12,A.x(A.a([t,B.af,u,B.bE,A.d(j,r,r,r,r,r,r,A.m(r,r,o?B.bu:B.bh,r,r,r,r,r,r,r,r,11,r,r,B.cD,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),B.E,r,B.e,B.h,0,B.p),r),r,new A.o(n,r,w,p,v,r,B.n),r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,i,r,r,r,r,r,r,r),B.f,B.L,0,r,r,r,r,r,B.ai),1)},
aA1(d,e,f,g,h,i,j){return this.b2G(d,!1,e,f,g,h,i,j)}}
C.au9.prototype={
S(){return new C.bnB()}}
C.bnB.prototype={
Y(){this.a3()
this.agk()},
agk(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n
var $async$agk=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
p=r.a
w=7
return A.b(C.bGd(p.c,p.d),$async$agk)
case 7:q=e
if(r.c==null){w=1
break}r.m(new C.eVL(r,q))
t=2
w=6
break
case 4:t=3
n=s.pop()
if(r.c==null){w=1
break}r.m(new C.eVM(r))
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$agk,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=A.P(d).ax.a===B.I,f=g?B.C0:B.hY,e=i.d
e=e==null?h:B.a.a_(e,"NGMYWSSYNC2|")
w=e===!0
v=i.a.d.d.length
e=A.aH(h,h,h,h,A.W(B.eL,g?B.ab:B.an,h,h,h,18),h,h,h,new C.eVN(d),h,h,h,h,h,h)
u=x.p
e=A.A(A.a([e,A.E(A.d("Project QR",h,h,h,h,h,h,A.m(h,h,g?B.c:B.a_,h,h,h,h,h,h,h,h,17,h,h,B.u,h,h,!0,h,h,h,h,h,h,h,h),B.K,h,h),1),B.tT],u),B.l,h,B.e,B.h,0,h,h)
t=A.l(24)
s=x.O
s=g?A.a([B.fd,B.cU,B.fX],s):A.a([B.b2,B.aV,B.bQ],s)
r=x.V
q=A.a([new A.ab(0,B.G,B.aV.j(g?0.4:0.3),B.eR,24)],r)
p=i.a.d
o=A.d(p.b,h,h,h,h,h,h,B.dk,B.K,h,h)
p=C.bGb(p.gxJ(),B.c,!1,B.u)
n=B.c.j(0.16)
m=A.l(20)
l=v===1?"item":"items"
s=A.p(h,A.x(A.a([o,B.am,A.A(A.a([p,B.ae,A.p(h,A.d(""+v+" "+l,h,h,h,h,h,h,A.m(h,h,B.c.j(0.9),h,h,h,h,h,h,h,h,10,h,h,B.H,h,h,!0,h,h,h,h,h,h,h,h),h,h,h),B.f,h,h,new A.o(n,h,h,m,h,h,B.n),h,h,h,h,B.fM,h,h,h)],u),B.l,h,B.b8,B.h,0,h,h)],u),B.l,h,B.e,B.h,0,B.p),B.f,h,h,new A.o(h,h,h,t,q,new A.a8(B.ay,B.aD,B.x,s,h,h),B.n),h,h,h,h,E.a1n,h,h,1/0)
t=g?D.bsa:B.c
q=A.l(24)
p=A.K(w?B.aG.j(0.4):B.aV.j(0.3),B.r,1)
r=A.a([new A.ab(0,B.G,B.w.j(g?0.25:0.06),B.dp,20)],r)
o=A.a([],u)
n=i.e
if(n!=null)o.push(A.d(n,h,h,h,h,h,h,B.VP,B.K,h,h))
else{n=i.d
if(n==null)o.push(D.ew6)
else{m=A.l(20)
l=A.K(B.bk,B.r,1)
o.push(A.p(h,A.qe(h,h,!1,n,h,!0,!0,h,!1,B.c),B.f,h,h,new A.o(B.c,h,l,m,h,h,B.n),h,h,h,h,B.bS,h,h,h))}}o.push(B.aO)
n=w?B.aG:B.aV
n=n.j(g?0.15:0.1)
m=A.l(12)
l=A.K((w?B.aG:B.aV).j(0.35),B.r,1)
k=w?B.PE:B.Qb
k=A.W(k,w?B.aG:B.aV,h,h,h,18)
j=w?"Cloud QR \u2014 includes thumbnail and all budget items.":"Offline QR \u2014 use backup file for the full project copy."
o.push(A.p(h,A.A(A.a([k,B.as,A.E(A.d(j,h,h,h,h,h,h,A.m(h,h,g?B.ab:B.an,h,h,h,h,h,h,h,h,12,h,h,B.a9,h,1.35,!0,h,h,h,h,h,h,h,h),h,h,h),1)],u),B.l,h,B.e,B.h,0,h,h),B.f,h,h,new A.o(n,h,l,m,h,h,B.n),h,h,h,h,B.hO,h,h,h))
return A.c4(h,f,A.bm(!0,A.x(A.a([new A.D(Ae.OJ,e,h),A.E(A.c9(A.x(A.a([s,B.aO,A.p(h,A.x(o,B.l,h,B.e,B.h,0,B.p),B.f,h,h,new A.o(t,h,p,q,r,h,B.n),h,h,h,h,B.uL,h,h,1/0)],u),B.l,h,B.e,B.h,0,B.p),B.t,h,B.y,h,E.anx,h,h,B.ah),1)],u),B.l,h,B.e,B.h,0,B.p),!0,!1,B.ag,!0,!0),h,!1,!1,h,h)}}
C.aue.prototype={
S(){return new C.aGR(A.zU(B.NZ,B.of,B.vh))}}
C.aGR.prototype={
t(){this.d.t()
this.a2()},
aOX(d){var w,v=this
if(v.e||v.c==null)return
v.e=!0
w=v.c
w.toString
A.j2(w,d)},
cgm(d){var w,v,u,t,s,r,q,p="NGMYWSSYNC2|"
if(this.e)return
for(w=d.a,v=w.length,u=0;u<w.length;w.length===v||(0,A.I)(w),++u){t=w[u]
s=C.ir8(t)
if(s!=null){this.aOX(s)
return}r=C.hxJ(t)
if(r!=null)q=A.cS(r,p,0)
else q=!1
if(q){this.aOX(B.a.i(B.a.b2(r,B.a.cn(r,p))))
return}}},
B(d){var w,v,u=this,t=null,s=x.p,r=A.eR(A.a([A.aH(t,t,t,t,A.W(u.f?B.uX:A9.PM,t,t,t,t,t),t,t,t,new C.eVP(u),t,t,t,t,t,t)],s),t,t,!0,!0,B.C0,t,1,t,t,t,!1,t,!1,B.c,t,t,t,!0,t,t,t,t,t,D.fWE,t,t,t,1,t,!0),q=A.zT(u.d,B.c1,u.gcgl()),p=A.l(28)
p=A.as(A.p(t,t,B.f,t,t,new A.o(t,t,A.K(B.aV,B.r,3),p,A.a([new A.ab(2,B.G,B.aV.j(0.35),B.J,24)],x.V),t,B.n),t,260,t,t,t,t,t,260),t,t,t)
w=B.w.j(0.72)
v=A.l(16)
return A.c4(r,B.w,new A.an(B.a0,t,B.b1,B.t,A.a([q,p,A.ao(32,A.p(t,D.fVp,B.f,t,t,new A.o(w,t,A.K(B.aV.j(0.45),B.r,1),v,t,t,B.n),t,t,t,t,B.jr,t,t,t),t,t,20,20,t,t)],s),t),t,!1,!1,t,t)}}
C.aLM.prototype={
a7(){return"_WorksheetTab."+this.b}}
C.P5.prototype={
S(){return new C.aGT(D.ae6,A.a([],x.D))},
bv(){return this.r.$0()},
ge3(){return this.c}}
C.aGT.prototype={
gcH6(){return J.bHl(this.e,0,new C.eWx())},
Y(){this.a3()
$.aU.c0$.push(this)
this.wn()},
t(){$.aU.hV(this)
this.a2()},
jl(d){if(d===B.fW)this.wn()},
wn(){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n
var $async$wn=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(C.Dz(q.a.c).dg(0,B.k4),$async$wn)
case 7:p=e
if(q.c==null){r=[1]
w=5
break}q.m(new C.eWt(q,p))
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
if(q.c!=null&&q.f)q.m(new C.eWu(q))
w=r.pop()
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$wn,v)},
Iy(d){return this.bNv(d)},
bNu(){return this.Iy(null)},
bNv(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$Iy=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:l=t.c
l.toString
w=3
return A.b(C.it7(l,d),$async$Iy)
case 3:s=f
if(s==null||t.c==null){w=1
break}l=B.o.v(1000*Date.now())
r=s.a
q=s.b
p=new C.lF(l,r,q,D.doc,new A.V(Date.now(),0,!1))
w=4
return A.b(C.Md(t.a.c,p),$async$Iy)
case 4:o=f
w=5
return A.b(t.wn(),$async$Iy)
case 5:n=t.c
if(n==null){w=1
break}if(!o){n.L(x.q).f.T(D.flF)
w=1
break}n=J.aT(t.e)
for(;;){if(!n.C()){m=p
break}m=n.gR(n)
if(m.a===l)break}l=!1
if(q!=null)if(B.a.i(q).length!==0){l=m.c
l=l==null||B.a.i(l).length===0}q=x.q
n=t.c
if(l)n.L(q).f.T(D.fnu)
else n.L(q).f.T(A.b2(null,null,null,null,null,B.t,null,A.d('Project "'+r+'" saved on this device.',null,null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))
t.F4(m)
case 1:return A.h(u,v)}})
return A.i($async$Iy,v)},
F4(d){return this.ckl(d)},
ckl(d){var w=0,v=A.j(x.H),u=this,t,s
var $async$F4=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return A.b(A.hC(s,new C.auf(u.a.c,d,null),!1,"NgmyWorksheetProjectScreen",x.fA),$async$F4)
case 2:t=f
w=t!=null?3:4
break
case 3:w=5
return A.b(C.Md(u.a.c,t),$async$F4)
case 5:case 4:w=6
return A.b(u.wn(),$async$F4)
case 6:return A.h(null,v)}})
return A.i($async$F4,v)},
w8(d){return this.c2Q(d)},
c2Q(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$w8=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=d==="file"?3:5
break
case 3:w=6
return A.b(C.bFH(),$async$w8)
case 6:s=f
w=4
break
case 5:w=d==="scan"?7:9
break
case 7:r=t.c
r.toString
w=10
return A.b(A.hC(r,D.aMd,!0,"NgmyWorksheetProjectScan",x.N),$async$w8)
case 10:q=f
w=q!=null&&B.a.i(q).length!==0?11:13
break
case 11:w=14
return A.b(C.bGc(q),$async$w8)
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
r.T(A.b2(null,null,null,null,null,B.t,null,A.d(d==="scan"?"Could not read that QR. Stay online for cloud project codes, or try Upload file.":"Could not read that project backup.",null,null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))
w=1
break}p=C.hiF(s)
w=15
return A.b(C.Md(t.a.c,p),$async$w8)
case 15:o=f
w=16
return A.b(t.wn(),$async$w8)
case 16:r=t.c
if(r==null){w=1
break}if(!o){r.L(x.q).f.T(D.fnz)
w=1
break}r.L(x.q).f.T(A.b2(null,null,null,null,null,B.t,null,A.d('Imported "'+p.b+'"',null,null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))
t.F4(p)
case 1:return A.h(u,v)}})
return A.i($async$w8,v)},
OC(d){return this.bM7(d)},
bM7(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$OC=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=5
return A.b(A.cg(null,null,!0,null,new C.eWe(d),s,null,!0,!0,x.y),$async$OC)
case 5:w=f===!0?3:4
break
case 3:w=6
return A.b(C.p8(t.a.c,A.a([],x.D)),$async$OC)
case 6:w=7
return A.b(t.wn(),$async$OC)
case 7:s=t.c
if(s==null){w=1
break}s.L(x.q).f.T(D.flK)
case 4:case 1:return A.h(u,v)}})
return A.i($async$OC,v)},
cky(d){var w=this.c
w.toString
A.bS(B.L,null,new C.eWn(this,d),w,!0,!0,!0,null,!1,!1,x.z)},
b8i(d,e,f,g,h,i){var w,v,u,t,s,r=null,q=A.l(16),p=g.a
if(p)w=B.jY
else w=B.c
v=A.l(16)
u=A.K(p?B.eh:B.bO,B.r,1)
t=d.j(0.14)
s=A.l(12)
s=A.p(r,A.W(e,d,r,r,r,22),B.f,r,r,new A.o(t,r,r,s,r,r,B.n),r,r,r,r,B.bU,r,r,r)
t=A.d(i,r,r,r,r,r,r,A.m(r,r,p?B.aS:B.av,r,r,r,r,r,r,r,r,14,r,r,B.H,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
return A.aG(!1,B.a3,!0,r,A.aM(!1,q,!0,A.p(r,A.x(A.a([s,B.af,t,B.bE,A.d(h,r,r,r,r,r,r,A.m(r,r,p?B.bu:B.bh,r,r,r,r,r,r,r,r,11,r,r,r,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),B.E,r,B.e,B.h,0,B.p),B.f,r,r,new A.o(w,r,u,v,r,r,B.n),r,r,r,r,B.t6,r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,f,r,r,r,r,r,r,r),B.f,B.L,0,r,r,r,r,r,B.ai)},
a10(d,e){return this.ckm(d,e)},
ckm(d,e){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a10=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return A.b(A.bS(B.L,null,new C.eWi(t,e,d),r,!0,!0,!1,null,!1,!1,x.N),$async$a10)
case 3:s=g
r=t.c
if(r==null||s==null){w=1
break}w=s==="transfer"?4:6
break
case 4:C.hHJ(r,new C.eWj(t),t.a.c,d)
w=5
break
case 6:w=s==="delete"?7:8
break
case 7:w=9
return A.b(t.OE(d,e),$async$a10)
case 9:case 8:case 5:case 1:return A.h(u,v)}})
return A.i($async$a10,v)},
b5j(d,e,f,g,h,i,j){var w,v,u=null,t=f.j(0.12),s=A.l(12)
s=A.p(u,A.W(e,f,u,u,u,22),B.f,u,u,new A.o(t,u,u,s,u,u,B.n),u,u,u,u,B.bU,u,u,u)
if(d)t=B.aA
else t=h.a?B.aS:B.av
t=A.d(j,u,u,u,u,u,u,A.m(u,u,t,u,u,u,u,u,u,u,u,u,u,u,B.H,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)
w=h.a
v=x.p
t=A.E(A.x(A.a([t,A.d(i,u,u,u,u,u,u,A.m(u,u,w?B.bu:B.bh,u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],v),B.E,u,B.e,B.h,0,B.p),1)
return A.aG(!1,B.a3,!0,u,A.aM(!1,u,!0,new A.D(B.CJ,A.A(A.a([s,B.bb,t,A.W(B.eI,w?B.bu:B.bh,u,u,u,u)],v),B.l,u,B.e,B.h,0,u,u),u),u,!0,u,u,u,u,u,u,u,u,u,u,u,g,u,u,u,u,u,u,u),B.f,B.L,0,u,u,u,u,u,B.ai)},
cri(d,e,f,g,h,i){return this.b5j(!1,d,e,f,g,h,i)},
OE(d,e){return this.bMh(d,e)},
bMh(d,e){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$OE=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=d.b
w=5
return A.b(A.lr(r,"Cancel","Delete","Remove \u201c"+s+"\u201d and all of its budget items from this device?","Delete project?"),$async$OE)
case 5:w=g?3:4
break
case 3:w=6
return A.b(C.bEn(t.a.c,d.a),$async$OE)
case 6:w=7
return A.b(t.wn(),$async$OE)
case 7:r=t.c
if(r==null){w=1
break}r.L(x.q).f.T(A.b2(null,null,null,null,null,B.t,null,A.d("Deleted \u201c"+s+"\u201d",null,null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))
case 4:case 1:return A.h(u,v)}})
return A.i($async$OE,v)},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=A.P(d).ax.a===B.I,m=new C.uk(n),l=n?B.c4:B.hY
if(p.f)n=D.beG
else{w=A.aE(d,B.dM,x.w).w
v=p.bGB(m)
u=p.c1U(m)
t=p.gbDH()
if(n)s=B.jY
else s=B.c
r=A.l(13)
q=x.p
t=A.a([v,B.af,u,B.aO,new C.Gl(A.p(o,A.A(A.a([p.aDA(Q.Pn,"Projects",m,D.ae6),p.aDA(B.uR,"Cashier",m,D.b2t),p.aDA(B.Hu,"Family Tree",m,D.hIA)],q),B.l,o,B.e,B.h,0,o,o),B.f,o,o,new A.o(s,o,o,r,o,o,B.n),o,o,o,o,o,o,o,o),14,B.eC,0.95,t,o),B.by],q)
v=p.d
if(v===D.ae6){v=J.ad(p.e)
B.d.u(t,A.a([A.A(A.a([A.d("Projects ("+v+")",o,o,o,o,o,o,A.m(o,o,n?B.aS:B.av,o,o,o,o,o,o,o,o,16,o,o,B.H,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),B.b3,new C.az7(p.gaTl(),o)],q),B.l,o,B.e,B.h,0,o,o),B.aB,p.crk(m)],q))}else{n=p.a
if(v===D.b2t)t.push(new C.aq2(n.c,m,o))
else{v=p.r
t.push(new C.arg(n.c,n.d,n.e,n.f,new C.eWA(p),new C.eWB(p),new A.bh(v,x.b4)))}}n=A.c9(A.x(t,B.E,o,B.e,B.h,0,B.p),B.t,o,B.y,o,new A.Q(20,w.r.b+8,20,32),o,o,B.ah)}return A.c4(o,l,A.bm(!0,n,!0,!1,B.ag,!0,!1),o,!1,!1,o,o)},
bGB(d){var w=null,v=A.l(8),u=d.a,t=A.W(Y.a2C,u?B.bu:B.bh,w,w,w,16)
return A.aM(!1,v,!0,new A.D(B.kz,A.A(A.a([t,B.bm,A.d("Back to Profile",w,w,w,w,w,w,A.m(w,w,u?B.bu:B.bh,w,w,w,w,w,w,w,w,14,w,w,B.a9,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),B.l,w,B.e,B.N,0,w,w),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.eWb(this),w,w,w,w,w,w,w)},
gbDH(){switch(this.d.a){case 0:return D.ade
case 1:return D.hxH
case 2:return D.adf}},
c1U(d){var w=null,v=A.l(15),u=A.a([new A.ab(0,B.G,B.aV.j(0.35),B.cy,16)],x.V),t=x.p,s=A.A(A.a([A.p(w,D.c0q,B.f,w,w,new A.o(B.c.j(0.22),w,w,A.l(12),w,w,B.n),w,44,w,w,w,w,w,44),B.bb,D.bKV,A.aG(!1,B.a3,!0,w,A.aM(!1,A.l(12),!0,A.p(w,D.bYL,B.f,w,w,new A.o(B.c.j(0.22),w,w,A.l(12),w,w,B.n),w,40,w,w,w,w,w,40),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.eWf(this,d),w,w,w,w,w,w,w),B.f,B.L,0,w,w,w,w,w,B.ai)],t),B.E,w,B.e,B.h,0,w,w),r=B.b2.j(0.55),q=A.l(12)
return new C.Gl(A.p(w,A.x(A.a([new A.D(B.H5,s,w),A.p(w,A.x(A.a([A.d("Total All Projects",w,w,w,w,w,w,A.m(w,w,B.c.j(0.85),w,w,w,w,w,w,w,w,12,w,w,B.a9,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.aw,A.d(A.Bn(this.gcH6()),w,w,w,w,w,w,D.fFq,w,w,w)],t),B.E,w,B.e,B.h,0,B.p),B.f,w,w,new A.o(r,w,w,q,w,w,B.n),w,w,w,B.t5,B.jr,w,w,1/0)],t),B.E,w,B.e,B.h,0,B.p),B.f,w,w,new A.o(B.aV,w,w,v,u,w,B.n),w,w,w,w,w,w,w,1/0),16,B.ag,1,D.hxG,w)},
aDA(d,e,f,g){var w,v,u=null,t=this.d===g,s=A.l(12),r=t?B.aV:B.L,q=A.l(12),p=t?A.K(B.c.j(0.55),B.r,2):A.K(B.L,B.r,2),o=t?A.a([new A.ab(0.5,B.G,B.aV.j(0.42),B.cJ,14)],x.V):u
if(t)w=B.c
else w=f.a?B.bu:B.bh
w=A.W(d,w,u,u,u,16)
if(t)v=B.c
else v=f.a?B.bu:B.bh
return A.E(A.aG(!1,B.a3,!0,u,A.aM(!1,s,!0,A.cT(u,A.A(A.a([w,B.e6,new A.di(1,B.cm,A.d(e,u,1,B.a2,u,u,u,A.m(u,u,v,u,u,u,u,u,u,u,u,12,u,u,B.O,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u)],x.p),B.l,u,B.b8,B.h,0,u,u),u,u,B.ck,new A.o(r,u,p,q,o,u,B.n),B.iQ,u,u,u,u,B.Hd,u,u,u),u,!0,u,u,u,u,u,u,u,u,u,u,u,new C.eWw(this,g),u,u,u,u,u,u,u),B.f,B.L,0,u,u,u,u,u,B.ai),1)},
crk(d){var w,v,u,t,s,r,q=this,p=null
if(J.ct(q.e)){w=d.a
v=w?B.ee:B.c
u=A.l(15)
t=A.p(p,D.bYS,B.f,p,p,new A.o(p,p,p,p,A.a([new A.ab(2,B.G,B.aV.j(0.5),B.eR,28)],x.V),D.caq,B.a7),p,108,p,p,p,p,p,108)
s=A.d("No Projects Yet",p,p,p,p,p,p,A.m(p,p,w?B.aS:B.av,p,p,p,p,p,p,p,p,18,p,p,B.H,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)
r=x.p
return new C.Gl(A.p(p,A.x(A.a([t,B.da,s,B.P,A.d("Create a new project, or import one someone shared with you.",p,p,p,p,p,p,A.m(p,p,w?B.bu:B.bh,p,p,p,p,p,p,p,p,14,p,p,p,p,1.4,!0,p,p,p,p,p,p,p,p),B.K,p,p),B.e1,A.A(A.a([A.E(q.aUW(B.jv,"Scan QR",new C.eWq(q),d),1),B.as,A.E(q.aUW(R.zH,"Upload file",new C.eWr(q),d),1)],r),B.l,p,B.e,B.h,0,p,p),B.aB,A.bI(D.h68,p,q.gaTl(),A.bo(B.aV,p,p,p,B.c,B.he,p,p,new A.b9(A.l(12),B.a1),p,p,p))],r),B.l,p,B.e,B.h,0,B.p),B.f,p,p,new A.o(v,p,p,u,p,p,B.n),p,p,p,p,p,p,p,1/0),16,D.bHp,1.05,D.ade,p)}w=J.b7(q.e,new C.eWs(q,d),x.l)
w=A.C(w,w.$ti.k("ak.E"))
return new C.Gl(A.x(w,B.l,p,B.e,B.h,0,B.p),16,B.bU,1,D.ade,p)},
aUW(d,e,f,g){var w=null,v=B.aV.j(g.a?0.18:0.1),u=A.l(12),t=A.l(12),s=A.l(12),r=A.K(B.aV.j(0.45),B.r,1)
return A.aG(!1,B.a3,!0,u,A.aM(!1,t,!0,A.p(w,A.x(A.a([A.W(d,B.b2,w,w,w,26),B.P,A.d(e,w,w,w,w,w,w,D.fDB,B.K,w,w)],x.p),B.l,w,B.e,B.N,0,B.p),B.f,w,w,new A.o(w,w,r,s,w,w,B.n),w,w,w,w,B.a0Q,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),B.f,v,0,w,w,w,w,w,B.ai)},
crj(d,e){var w,v,u=null,t=e.a,s=t?B.ee:B.c,r=A.l(14),q=A.K(t?B.eh:B.bO,B.r,1),p=A.a([new A.ab(0,B.G,B.w.j(t?0.35:0.08),B.eu,10)],x.V),o=A.l(14),n=t?B.bu:B.bh
n=A.bu(B.Y0,new A.fH(1.7777777777777777,C.aSs(!0,B.fj,1/0,Q.Pn,n,d.c,1/0),u),B.aq)
w=x.p
v=A.E(A.x(A.a([A.d(d.b,u,u,u,u,u,u,A.m(u,u,t?B.aS:B.av,u,u,u,u,u,u,u,u,15,u,u,B.H,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),B.aw,A.d(""+d.d.length+" budget items \xb7 "+A.Bn(d.gxJ()),u,u,u,u,u,u,D.fBx,u,u,u)],w),B.E,u,B.e,B.h,0,B.p),1)
return A.p(u,A.aG(!1,B.a3,!0,u,A.aM(!1,o,!0,A.x(A.a([n,new A.D(B.bI,A.A(A.a([v,A.aH(u,u,u,u,A.W(Al.a3H,t?B.bu:B.bh,u,u,u,u),u,u,u,new C.eWo(this,d,e),u,u,u,u,"Project options",u)],w),B.l,u,B.e,B.h,0,u,u),u)],w),B.E,u,B.e,B.h,0,B.p),u,!0,u,u,u,u,u,u,u,u,u,u,u,new C.eWp(this,d),u,u,u,u,u,u,u),B.f,B.L,0,u,u,u,u,u,B.ai),B.f,u,u,new A.o(s,u,q,r,p,u,B.n),u,u,u,B.em,u,u,u,1/0)}}
C.bAo.prototype={}
C.rq.prototype={
aj(){var w=this,v=w.c,u=w.d
return A.J(["id",w.a,"name",w.b,"quantity",v,"unitPrice",u,"unitLabel",w.e,"price",v*u],x.N,x.z)},
gd07(){var w,v,u,t,s=this.c
if(s===B.j.iG(s))w=B.o.v(B.j.M(s))
else{v=B.j.ad(s,2)
u=A.ag("\\.?0+$",!0,!1,!1,!1)
w=A.aL(v,u,"")}t=B.a.i(this.e)
if(t.length===0)t="each"
if(t==="each"||t==="pcs")return w+" \xd7"
return w+" "+t+" \xd7"}}
C.lF.prototype={
gxJ(){return B.d.cE(this.d,0,new C.cGL())},
aj(){var w=this,v=w.d,u=A.U(v).k("N<1,a9<n,@>>")
v=A.C(new A.N(v,new C.cGK(),u),u.k("ak.E"))
return A.J(["id",w.a,"name",w.b,"thumbnailPath",w.c,"items",v,"createdAt",w.e.af()],x.N,x.z)},
bfI(d,e){var w=this,v=e==null?w.c:e,u=d==null?w.d:d
return new C.lF(w.a,w.b,v,u,w.e)},
bfq(d){return this.bfI(d,null)},
TI(d){return this.bfI(null,d)}}
C.Is.prototype={
a7(){return"FamilyGender."+this.b}}
C.i_.prototype={
aj(){var w=this
return A.J(["id",w.a,"name",w.b,"gender",C.hCT(w.c),"parentId",w.d,"spouseId",w.e,"photoPath",w.f,"notes",w.r,"birthDate",w.w,"birthPlace",w.x,"deathDate",w.y,"occupation",w.z,"birthOrder",w.Q,"hidden",w.as,"visibleChildrenCap",w.at],x.N,x.z)},
aGj(d,e,f,g,h,i,j,k,l,m,n,o,p){var w=this,v=m==null?w.d:m,u=o==null?w.e:o,t=n==null?w.f:n
return new C.i_(w.a,j,h,v,u,t,k,d,f,g,l,e,i,p)}}
C.amh.prototype={
a7(){return"FamilyTreeAccessRole."+this.b}}
C.kY.prototype={
gaqI(){var w=this.f
return new A.Y(w,new C.bT5(),A.U(w).k("Y<1>")).gJ(0)},
aj(){var w=this,v=w.f,u=A.U(v).k("N<1,a9<n,@>>")
v=A.C(new A.N(v,new C.bT4(),u),u.k("ak.E"))
return A.J(["id",w.a,"name",w.b,"code",w.c,"isPrivate",w.d,"collaboratorEmails",w.e,"members",v,"createdAt",w.r.af(),"visibleChildrenPerParent",w.w,"ownerEmail",w.x,"localRole",C.ijt(w.y),"games",w.z],x.N,x.z)},
x4(d,e,f,g,h,i,j,k,l){var w=this,v=j==null?w.b:j,u=d==null?w.c:d,t=g==null?w.d:g,s=e==null?w.e:e,r=i==null?w.f:i,q=l==null?w.w:l,p=k==null?w.x:k,o=h==null?w.y:h,n=f==null?w.z:f
return new C.kY(w.a,v,u,t,s,r,w.r,q,p,o,n)},
bfH(d,e){var w=null
return this.x4(w,w,w,d,e,w,w,w,w)},
cQt(d,e,f,g,h,i,j){return this.x4(d,e,null,f,g,h,i,j,null)},
aGo(d,e){var w=null
return this.x4(w,w,w,w,d,w,w,e,w)},
cQv(d,e,f,g,h,i,j,k){return this.x4(d,e,null,f,g,h,i,j,k)},
cOZ(d){var w=null
return this.x4(w,w,w,w,w,w,w,d,w)},
cPm(d){var w=null
return this.x4(w,w,w,w,w,w,w,w,d)},
bfk(d){var w=null
return this.x4(w,w,d,w,w,w,w,w,w)},
aG9(d){var w=null
return this.x4(w,w,w,w,w,d,w,w,w)},
cQ0(d,e,f){var w=null
return this.x4(w,d,w,w,e,w,w,f,w)},
cOM(d){var w=null
return this.x4(w,w,w,d,w,w,w,w,w)},
cPy(d,e){var w=null
return this.x4(d,w,w,w,w,w,e,w,w)}}
C.cGM.prototype={
a7(){return"WrapAlignment."+this.b}}
C.cGN.prototype={
a7(){return"WrapCrossAlignment."+this.b}}
C.aIY.prototype={}
C.bb_.prototype={
ak(d){this.a=d.a
this.b=d.b},
cY(d){var w=new C.bb_()
w.a=this.a
w.b=this.b
return w},
v(d){return A.b3(this).v(0)+" first:"+this.a+" last:"+this.b}}
C.baZ.prototype={
gwV(){return!0},
gGC(){return this.z.b<this.b.length},
aWC(d){switch(0){case 0:return d.a.c}},
aWi(d){switch(0){case 0:return d.a.d}},
bWl(d,e){switch(0){case 0:return new A.hV(d,e)}},
bVJ(d,e,f){var w=e-f
switch(0){case 0:return d?w:0}},
hg(b4,b5,b6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=this,b2=b1.b,b3=b2.length
if(b3===0||b1.z.a>=b3){b1.a=new A.iS(0,0,B.o.D(0,b5.a,b5.b),B.o.D(0,b5.c,b5.d))
return}w=A.Ib(b4)
switch(0){case 0:v=b5.b
u=new A.kV(0,v,0,1/0)
t=w===B.VH
break}s=A.a([],x.gZ)
r=A.T(x.gF,x.S)
for(b3=b1.z,q=B.d.fO(b2,b3.a),p=q.length,o=b1.f,n=b1.w,m=0,l=0,k=0,j=0,i=0,h=0;h<q.length;q.length===p||(0,A.I)(q),++h){g=q[h]
g.hg(b4,u,!0)
f=b1.aWC(g)
f.toString
e=b1.aWi(g)
e.toString
if(i>0&&k+o+f>v){m=Math.max(m,k)
l+=j
if(s.length!==0)l+=n
s.push(new C.aIY(k,j,i))
k=0
j=0
i=0}k+=f
if(i>0)k+=o
j=Math.max(j,e);++i
r.n(0,g,s.length)}if(i>0){m=Math.max(m,k)
l+=j
if(s.length!==0)l+=n
s.push(new C.aIY(k,j,i))}d=s.length
switch(0){case 0:q=b5.cA(new A.hV(m,l))
a0=q.a
a1=q.b
b1.a=new A.iS(0,0,a0,a1)
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
for(q=B.d.fO(b2,a2),f=q.length,h=0;h<q.length;q.length===f||(0,A.I)(q),++h){g=q[h]
if(r.h(0,g)!==a4)break;++a2
a8=b1.aWC(g)
e=b1.aWi(g)
e.toString
a9=b1.bVJ(!0,j,e)
if(t){a8.toString
a6-=a8}e=b1.bWl(a6,a3+a9)
b0=g.a
g.a=new A.iS(e.a,e.b,b0.c,b0.d)
if(t)a6-=o
else{a8.toString
a6+=a8+o}}a3-=n
a3=a3
b3.b=a2}},
fV(d){var w,v,u,t,s,r=this
r.lC(d)
w=d.b
w.ir()
v=A.dq()
u=r.a
v.ed(u.a,u.b,0,1)
w.po(0,v)
for(u=r.z,u=B.d.du(r.b,u.a,u.b),t=u.length,s=0;s<u.length;u.length===t||(0,A.I)(u),++s)u[s].fV(d)
w.nB(0)},
H7(d,e){var w=this.z
w.a=e.a
w.b=e.b
w.a=e.b},
ir(){return this.z}}
C.byE.prototype={}
var z=a.updateTypes(["aB<~>()","R(i_)","~()","R(kY)","R(nw)","a9<n,@>(kY)","H(kY,kY)","H(i_,i_)","n(i_)","kY(a9<@,@>)","R(lF)","nw(a9<@,@>)","a9<n,@>(nw)","R(uU)","uU()","H(i_)","ai<i_>()","R(zC)","a0i(Z)","n?(i_)","eL<n?>(i_)","aB<~>(lF)","R(rq)","a9<n,@>(i_)","i_(a9<@,@>)","H(lF,lF)","R(ag7)","~(bd)","v(oL)","H(H,aab)","R(qK<H>)","~(qK<H>)","U4(Z)","R(MS)","R(uT)","~(i_)","n(n)","Wp(Z)","U3(Z)","aeu(Z)","a_e(Z)","i_(i_)","cK(bA<n,GB>)","cK(KY)","a_I(Z)","H?(i_)","i_()","R(KY)","D(i_)","~(Is)","a_E(Z)","v(Is,n,a_)","R(ag0)","bA<n,ai<a9<n,@>>>(n,ai<nw>)","a_G(Z)","+count,id,name(H,n,n)(kY)","n(kY)","a0C(Z)","a0D(Z)","R(lY)","lY()","ZN(Z)","a2o(Z)","a_g(Z)","a_f(Z)","~(H)","~(n,lv?)","v(rq)","aeP(Z)","~(mn)","aB<~>([n?])","G(G,lF)","v(lF)","G(G,rq)","a9<n,@>(rq)","rq(a9<@,@>)","ai<lv>()","uT()","n(V)","lF(a9<@,@>)","cu(Ir)","n(lF)","a9<n,@>(lF)","H(nw,nw)","kY(a9<n,@>)","kY(kY)"])
C.fPB.prototype={
$1(d){return d.a+" "+d.b},
$S:128}
C.fPA.prototype={
bp_(d){var w=0,v=A.j(x.T),u,t=this,s,r,q,p,o
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.a,r=null,q=0
case 3:if(!(q<2)){w=5
break}w=6
return A.b(A.rg(s,d,B.i2,"book",E.GT),$async$$1)
case 6:p=f
o=p.b
if(o!=null&&B.a.i(o).length!==0){u=o
w=1
break}r=p.a
case 4:++q
w=3
break
case 5:throw A.X(r!=null&&A.M_(r)?y.k:y.A)
case 1:return A.h(u,v)}})
return A.i($async$$1,v)},
$1(d){return this.bp_(d)},
$S:254}
C.fPC.prototype={
$1(d){return d.b},
$S:128}
C.fZi.prototype={
$1(d){var w=null
return A.eG(w,B.L,new H.Qv(this.a,this.b,w),w,w,0,B.a13,w,B.d6,w,w,w)},
$S:47}
C.fCI.prototype={
$1(d){return d!=null},
$S:210}
C.fCJ.prototype={
$1(d){var w
if(d!=null)w=Math.abs(d.a)<=1.5&&Math.abs(d.b)<=1.5
else w=!0
return w},
$S:210}
C.fCO.prototype={
$1(d){if(this.a)return new A.r(d.a*520,d.b*160)
return d},
$S:162}
C.fNk.prototype={
$4$bold$valueColor(d,e,f,g){var w=null,v=A.fe(d,w,w,w,A.hg(w,B.tK,w,w,w,w,w,w,w,B.dE,w,w,10.5,w,B.eD,w,!0,w,w,w,w),w),u=f?B.eD:B.wJ
return new A.oc(D.bCJ,A.ab0(A.a([new A.fY(130,w,v),new A.zB(1,B.Hn,A.fe(e,w,w,w,A.hg(w,g==null?D.eyv:g,w,w,w,w,w,w,w,B.dE,w,w,11,w,u,w,!0,w,w,w,w),w))],x.Z),B.yF,B.lV))},
$2(d,e){return this.$4$bold$valueColor(d,e,!1,null)},
$3$bold(d,e,f){return this.$4$bold$valueColor(d,e,f,null)},
$S:1970}
C.fNj.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g="Missed days",f=A.w2(999)
f=A.xF(A.lT(h,A.fe("Cashier",h,h,h,A.hg(h,D.AC,h,h,h,h,h,h,h,B.dE,h,h,10,h,B.eD,h,!0,h,h,h,h),h),h,new A.kW(D.eym,h,f,B.i7,h),h,h,D.bDd,h))
w=A.xF(A.fe("Debt receipt",h,h,h,A.hg(h,h,h,h,h,h,h,h,h,B.dE,h,h,22,h,B.eD,h,!0,h,h,h,h),h))
v=A.xF(A.fe(C.xl(new A.V(Date.now(),0,!1),!0),h,h,h,D.abH,h))
u=A.w2(12)
t=i.b
s=B.a.i(t.b)
if(s.length===0)s="\u2014"
s=A.fe(s,h,h,h,A.hg(h,h,h,h,h,h,h,h,h,B.dE,h,h,14,h,B.eD,h,!0,h,h,h,h),h)
r=A.fe("Person who owes",h,h,h,D.abH,h)
q=A.w2(10)
p=x.Z
u=A.lT(h,A.zt(A.a([s,new A.fY(h,2,h),r,new A.fY(h,10,h),A.lT(h,A.zt(A.a([A.fe("Amount owed",h,h,h,D.abH,h),new A.fY(h,2,h),A.fe(A.Bn(t.c),h,h,h,A.hg(h,D.AC,h,h,h,h,h,h,h,B.dE,h,h,20,h,B.eD,h,!0,h,h,h,h),h)],p),B.rX,B.lV),h,new A.kW(B.pR,h,q,B.i7,h),h,h,D.bCp,1/0)],p),B.rX,B.lV),h,new A.kW(E.aNA,h,u,B.i7,h),h,h,D.bEo,1/0)
q=new A.nV(D.eyp,0.9,B.le)
r=A.w2(12)
s=i.c
o=s.$2("Original due",C.xl(t.r,!1))
n=s.$2("Current due",C.xl(t.f,!1))
m=i.d
l=new A.nV(m,1.1,B.le)
k=A.w2(8)
j=i.a
k=A.a([o,n,new A.fY(h,6,h),A.lT(h,A.xF(A.fe(t.gaNv(),h,h,h,A.hg(h,m,h,h,h,h,h,h,h,B.dE,h,h,11,h,B.eD,h,!0,0.5,h,h,h),h)),h,new A.kW(h,new A.q1(l,l,l,l),k,B.i7,h),h,h,D.bDl,1/0),new A.fY(h,10,h),s.$4$bold$valueColor("Date paid",j.c,!0,j.b)],p)
if(t.x!=null&&i.e)k.push(s.$4$bold$valueColor(g,"None \u2014 paid on time",!0,D.AC))
else{o=i.f
n=o.length
if(n===0)k.push(s.$4$bold$valueColor(g,"None yet",!0,D.AC))
else{n=A.fe("Missed days ("+n+")",h,h,h,A.hg(h,B.tK,h,h,h,h,h,h,h,B.dE,h,h,10.5,h,B.eD,h,!0,h,h,h,h),h)
m=A.U(o).k("N<1,TE>")
o=A.C(new A.N(o,new C.fNi(),m),m.k("ak.E"))
B.d.u(k,A.a([new A.fY(h,4,h),n,new A.fY(h,6,h),new C.baZ(5,5,new C.bb_(),o)],p))}}o=B.a.i(t.y)
if(o.length!==0)B.d.u(k,A.a([new A.fY(h,8,h),s.$2("Notes",o)],p))
f=A.a([f,new A.fY(h,8,h),w,new A.fY(h,3,h),v,new A.fY(h,16,h),u,new A.fY(h,10,h),A.lT(h,A.zt(k,B.yF,B.lV),h,new A.kW(h,new A.q1(q,q,q,q),r,B.i7,h),h,h,B.amr,1/0)],p)
w=j.a
if(w!=null){v=new A.nV(B.JX,1,B.le)
B.d.u(f,A.a([new A.fY(h,16,h),A.fe("Debtor signature",h,h,h,A.hg(h,B.tK,h,h,h,h,h,h,h,B.dE,h,h,10,h,B.eD,h,!0,h,h,h,h),h),new A.fY(h,6,h),A.lT(h,new A.IM(w,B.Yd,h,h),h,new A.kW(h,new A.q1(v,v,v,v),A.w2(6),B.i7,h),82,h,B.OG,1/0)],p))}f.push(new A.fY(h,18,h))
if(t.x!=null)w=i.e?"Payment was received on time.":"Payment was received after one or more missed days (shown in red)."
else w="This debt is still unpaid. Missed days appear in red when the due date has passed."
f.push(A.fe(w,h,h,h,D.ftQ,h))
f.push(new A.fY(h,18,h))
f.push(A.xF(A.fe("NGMY.ORG",h,h,h,A.hg(h,D.AC,h,h,h,h,h,h,h,B.dE,h,h,14,h,B.eD,h,!0,1.8,h,h,h),h)))
return f},
$S:362}
C.fNi.prototype={
$1(d){var w=null,v=new A.nV(D.JY,0.7,B.le),u=A.w2(999)
return A.lT(w,A.fe(C.xl(d,!1),w,w,w,A.hg(w,D.JY,w,w,w,w,w,w,w,B.dE,w,w,9.5,w,B.eD,w,!0,w,w,w,w),w),w,new A.kW(w,new A.q1(v,v,v,v),u,B.i7,w),w,w,D.bIQ,w)},
$S:1971}
C.c8n.prototype={
$1(d){var w=null,v=B.bG.j(0.08),u=A.l(999),t=A.K(B.bG.j(0.28),B.r,1)
return A.p(w,A.d(C.xl(d,!1),w,w,w,w,w,w,D.fAZ,w,w,w),B.f,w,w,new A.o(v,w,t,u,w,w,B.n),w,w,w,w,B.eK,w,w,w)},
$S:1972}
C.fZP.prototype={
$1(d){var w=null,v=A.aE(d,B.c_,x.w).w,u=A.l(26),t=A.aH(w,w,w,w,D.c1p,w,w,w,new C.fZM(d),w,w,w,w,w,B.cg),s=this.a,r=this.b,q=B.c.j(0.28),p=x.p
return A.eG(w,B.L,new A.cN(new A.aY(0,380,0,v.a.b*0.9),A.aG(!1,B.a3,!0,u,new A.D(B.a0S,A.x(A.a([new A.bJ(B.a8,w,w,t,w),new A.di(1,B.cm,A.c9(A.x(A.a([new A.en(new C.b00(r,w),s),B.T,A.A(A.a([A.E(A.em(B.zP,w,D.h2n,new C.fZN(s,r,d),A.dj(w,w,w,w,w,w,w,w,w,B.c,w,w,B.fg,w,new A.b9(A.l(14),B.a1),new A.ay(q,1,B.r,-1),w,w,w,w)),1),B.ae,A.E(A.dh(B.a4j,w,D.fZM,new C.fZO(r,d),A.bo(B.b2,w,w,w,B.c,w,B.fg,w,new A.b9(A.l(14),B.a1),w,w,w)),1)],p),B.l,w,B.e,B.h,0,w,w)],p),B.l,w,B.e,B.N,0,B.p),B.t,w,B.y,w,w,w,w,B.ah),w)],p),B.l,w,B.e,B.N,0,B.p),w),B.f,B.av,0,w,w,w,w,w,B.ai),w),w,w,0,Aq.a1f,w,B.d6,w,w,w)},
$S:47}
C.fZM.prototype={
$0(){A.a5(this.a,!1).N(null)
return null},
$S:0}
C.fZN.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:m=$.aU.ao$.x.h(0,t.a)
m=m==null?null:m.gbf()
x.az.a(m)
if(m==null){w=1
break}w=4
return A.b(m.lU(2.5),$async$$0)
case 4:w=3
return A.b(e.hi(B.hd),$async$$0)
case 3:s=e
if(s==null){w=1
break}r=J.eQ(B.dK.gaU(s))
m=t.b
q=B.a.i(m.b)
p=A.ag("[^a-zA-Z0-9_-]+",!0,!1,!1,!1)
o=A.aL(q,p,"_")
if(o.length>32)o=B.a.az(o,0,32)
w=5
return A.b(A.rj(r,"ngmy_cashier_receipt_"+(o.length===0?m.a:o)+".png"),$async$$0)
case 5:n=e
m=t.c
if(m.e!=null)m.L(x.q).f.T(A.b2(null,null,null,null,null,B.t,null,A.d(n,null,null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.fZO.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(C.fU1(u.a),$async$$0)
case 2:t=e
s=u.b
if(s.e!=null){s=s.L(x.q).f
s.T(A.b2(null,null,null,null,null,B.t,null,A.d(t?"Print dialog opened.":"Could not print receipt.",null,null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))}return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.fZH.prototype={
$1(d){var w=null,v=A.l(20),u=x.p,t=this.b
return A.eG(w,B.av,A.x(A.a([new A.D(D.bEc,A.A(A.a([A.E(A.d(this.a,w,w,w,w,w,w,B.ng,w,w,w),1),A.aH(w,w,w,w,B.lr,w,w,w,new C.fZF(d),w,w,w,w,w,w)],u),B.l,w,B.e,B.h,0,w,w),w),new A.di(1,B.cm,new A.D(B.f3,A.bu(A.l(14),A.fU(t,B.A,w,w,B.cl,B.dD,!1,w,!1,w,w),B.aq),w),w),new A.D(B.Oj,new A.a3(1/0,w,A.dh(B.oP,w,D.aXV,new C.fZG(t,this.c,d),A.bo(B.b2,w,w,w,B.c,w,w,w,new A.b9(A.l(14),B.a1),w,w,w)),w),w)],u),B.l,w,B.e,B.N,0,B.p),w,w,w,B.Ow,w,B.d6,w,new A.b9(v,B.a1),w)},
$S:47}
C.fZF.prototype={
$0(){A.a5(this.a,!1).N(null)
return null},
$S:0}
C.fZG.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(A.rj(u.a,u.b),$async$$0)
case 2:t=e
s=u.c
if(s.e!=null)s.L(x.q).f.T(A.b2(null,null,null,null,null,B.t,null,A.d(t,null,null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.fZT.prototype={
$1(d){var w=null,v=A.l(20),u=x.p,t=this.a,s=this.b
return A.eG(w,B.av,new A.D(D.bEk,A.x(A.a([A.A(A.a([D.bK_,A.aH(w,w,w,w,B.lr,w,w,w,new C.fZR(d),w,w,w,w,w,w)],u),B.l,w,B.e,B.h,0,w,w),B.P,new A.en(A.bu(A.l(14),A.p(w,A.b4(w,w,w,new C.bdc(s.ax,w),B.az),B.f,B.c,w,w,w,200,w,w,w,w,w,1/0),B.aq),t),B.af,new A.a3(1/0,w,A.dh(B.oP,w,D.aXV,new C.fZS(t,s,d),A.bo(B.b2,w,w,w,B.c,w,w,w,new A.b9(A.l(14),B.a1),w,w,w)),w)],u),B.l,w,B.e,B.N,0,B.p),w),w,w,w,w,w,B.d6,w,new A.b9(v,B.a1),w)},
$S:47}
C.fZR.prototype={
$0(){A.a5(this.a,!1).N(null)
return null},
$S:0}
C.fZS.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:n=$.aU.ao$.x.h(0,t.a)
n=n==null?null:n.gbf()
x.az.a(n)
if(n==null){w=1
break}w=4
return A.b(n.lU(2.5),$async$$0)
case 4:w=3
return A.b(e.hi(B.hd),$async$$0)
case 3:s=e
if(s==null){w=1
break}n=t.b
r=B.a.i(n.b)
q=A.ag("[^a-zA-Z0-9_-]+",!0,!1,!1,!1)
p=A.aL(r,q,"_")
if(p.length>32)p=B.a.az(p,0,32)
r=J.eQ(B.dK.gaU(s))
w=5
return A.b(A.rj(r,"ngmy_cashier_signature_"+(p.length===0?n.a:p)+".png"),$async$$0)
case 5:o=e
n=t.c
if(n.e!=null)n.L(x.q).f.T(A.b2(null,null,null,null,null,B.t,null,A.d(o,null,null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.fHA.prototype={
$1(d){return d.a===this.a},
$S:245}
C.dQM.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.dQx.prototype={
bod(d,e){var w=0,v=A.j(x.H),u=this,t,s,r,q,p
var $async$$2=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:q=u.b
p=q.c
p.toString
t=q.a.d.a?B.ee:B.c
s=u.a
w=2
return A.b(A.bS(t,null,new C.dQA(s,q,e),p,!0,!0,!1,B.Ke,!1,!1,x.N),$async$$2)
case 2:r=g
if(r!=null)d.$1(new C.dQB(s,r))
return A.h(null,v)}})
return A.i($async$$2,v)},
$2(d,e){return this.bod(d,e)},
$S:1973}
C.dQA.prototype={
$1(d){var w,v=null,u=this.c===B.xg,t=u?D.dvb:D.dqH
u=u?"Male":"Female"
w=this.b
u=A.d("Choose "+u.toLowerCase()+" icon",v,v,v,v,v,v,A.m(v,v,w.a.d.a?B.aS:B.av,v,v,v,v,v,v,v,v,15,v,v,B.H,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
return A.bm(!0,new A.D(O.amY,A.x(A.a([u,B.aw,A.d("Default is already set \u2014 pick another if you want.",v,v,v,v,v,v,A.m(v,v,w.a.d.a?B.bu:B.bh,v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),B.af,A.it(!0,v,v,B.y,D.fkk,new C.dQz(this.a,w,t,d),t.length,v,B.e_,B.ah,!0)],x.p),B.al,v,B.e,B.N,0,B.p),v),!0,!1,B.ag,!0,!0)},
$S:25}
C.dQz.prototype={
$2(d,e){var w,v,u,t=this,s=null,r=t.c[e],q=r===t.a.e,p=A.l(14)
if(q)w=B.cU.j(0.14)
else w=t.b.a.d.a?B.a_:B.aS
v=A.l(14)
if(q)u=B.cU
else u=(t.b.a.d.a?B.bu:B.bh).j(0.16)
u=A.K(u,B.r,q?1.6:1)
return A.aM(!1,p,!0,A.p(B.A,C.b0_(r,26),B.f,s,s,new A.o(w,s,u,v,s,s,B.n),s,s,s,s,s,s,s,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,new C.dQy(t.d,r),s,s,s,s,s,s,s)},
$S:195}
C.dQy.prototype={
$0(){A.a5(this.a,!1).N(this.b)
return null},
$S:0}
C.dQB.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.dQv.prototype={
$3(d,e,f){return B.bM},
$C:"$3",
$R:3,
$S:88}
C.dQw.prototype={
$4(d,e,f,g){var w=this,v=null,u=x.X,t=A.cG(B.ck,e,v)
return new A.d2(e,!1,A.ik(B.A,A.as(A.aG(!1,B.a3,!0,v,new A.e1(new C.dQu(w.a,w.b,w.c,w.d,w.e,w.f,w.r,w.w),v),B.f,B.L,0,v,v,v,v,v,B.ai),v,v,v),v,new A.bg(t,new A.bq(0.96,1,u),u.k("bg<bP.T>"))),v)},
$S:33}
C.dQu.prototype={
$2(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=A.aE(d,B.c_,x.w).w,i=l.b,h=i.a.d.a,g=h?B.ee:B.c,f=A.l(14),e=A.K((h?B.bu:B.bh).j(0.16),B.r,1)
h=l.c==null
w=h?"Add person":"Edit"
w=A.E(A.d(w,k,k,k,k,k,k,A.m(k,k,i.a.d.a?B.aS:B.av,k,k,k,k,k,k,k,k,16,k,k,B.H,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),1)
v=A.l(8)
u=x.p
v=A.A(A.a([w,A.aM(!1,v,!0,new A.D(B.eC,A.W(B.cA,i.a.d.a?B.bu:B.bh,k,k,k,20),k),k,!0,k,k,k,k,k,k,k,k,k,k,k,new C.dQf(d),k,k,k,k,k,k,k)],u),B.l,k,B.e,B.h,0,k,k)
w=l.d
t=A.m(k,k,i.a.d.a?B.aS:B.av,k,k,k,k,k,k,k,k,14,k,k,B.a9,k,k,!0,k,k,k,k,k,k,k,k)
s=i.aVs("Name")
r=l.a
q=r.d==null?k:new C.dQg(r,l.e,a0)
p=A.l(20)
o=i.a.d.a?B.bs:B.ma
n=A.K(B.cU.j(0.35),B.r,1)
m=r.d
t=A.aN(k,B.Z,h,k,!0,B.t,k,A.aO(),w,k,k,k,k,k,2,s.bfA(new A.D(B.fn,A.aM(!1,p,!0,A.p(B.A,C.b0_(m==null?"\ud83d\udc64":A.fO8(r.e,m),18),B.f,k,k,new A.o(o,k,n,k,k,k,B.a7),k,34,k,B.cp,k,k,k,34),k,!0,k,k,k,k,k,k,k,k,k,k,k,q,k,k,k,k,k,k,k),k)),B.y,!0,k,!0,k,!1,k,B.ak,k,k,k,k,k,k,k,k,k,1,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,B.ac,k,k,k,k,k,k,k,k,k,k,k,t,!0,B.a6,k,B.la,k,B.abw,k,k)
v=A.a([v,B.af,t,B.P,A.d("Gender (required)",k,k,k,k,k,k,A.m(k,k,i.a.d.a?B.bu:B.bh,k,k,k,k,k,k,k,k,11.5,k,k,B.O,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),B.am,A.A(A.a([A.E(i.aW8("\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1","Male",new C.dQh(r,a0),r.d===B.xg),1),B.ae,A.E(i.aW8("\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1","Female",new C.dQm(r,a0),r.d===B.a8d),1)],u),B.l,k,B.e,B.h,0,k,k)],u)
if(r.d!=null)B.d.u(v,A.a([B.P,new A.bJ(B.a5,k,k,A.ht(D.c_E,D.h0E,new C.dQn(r,l.e,a0),A.ft(k,k,k,k,k,k,k,k,k,k,k,B.cU,k,k,k,k,k,k,k,k,k,k,k,k,k,B.cg)),k)],u))
v.push(B.T)
t=A.m(k,k,i.a.d.a?B.aS:B.av,k,k,k,k,k,k,k,k,14,k,k,B.a9,k,k,!0,k,k,k,k,k,k,k,k)
s=A.a([new A.uX(A.ag("[0-9.]",!0,!1,!1,!1),!0,"")],x.aS)
v.push(A.aN(k,B.Z,!1,k,!0,B.t,k,A.aO(),l.f,k,k,k,k,k,2,i.aVt("Amount","$ "),B.y,!0,k,!0,k,!1,k,B.ak,k,k,s,k,k,B.ea,k,k,k,1,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,B.ac,k,k,k,k,k,k,k,k,k,k,k,t,!0,B.a6,k,B.ao,k,k,k,k))
v.push(B.T)
t=i.a.d.a
s=t?B.a_:B.aS
q=A.l(10)
p=A.l(10)
o=A.l(10)
n=A.K((t?B.bu:B.bh).j(0.22),B.r,1)
t=A.d("Pay by",k,k,k,k,k,k,A.m(k,k,i.a.d.a?B.bu:B.bh,k,k,k,k,k,k,k,k,11,k,k,B.a9,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)
m=C.xl(r.a,!1)
v.push(A.aG(!1,B.a3,!0,q,A.aM(!1,p,!0,A.p(k,A.A(A.a([A.E(A.x(A.a([t,B.bE,A.d(m,k,k,k,k,k,k,A.m(k,k,i.a.d.a?B.aS:B.av,k,k,k,k,k,k,k,k,14,k,k,B.O,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)],u),B.E,k,B.e,B.h,0,B.p),1),D.bXg],u),B.l,k,B.e,B.h,0,k,k),B.f,k,k,new A.o(k,k,n,o,k,k,B.n),k,k,k,k,B.bj,k,k,k),k,!0,k,k,k,k,k,k,k,k,k,k,k,new C.dQo(r,d,a0),k,k,k,k,k,k,k),B.f,s,0,k,k,k,k,k,B.ai))
if(!h)B.d.u(v,A.a([B.P,A.d("Extending keeps missed days already counted.",k,k,k,k,k,k,A.m(k,k,i.a.d.a?B.bu:B.bh,k,k,k,k,k,k,k,k,11,k,k,k,k,1.3,!0,k,k,k,k,k,k,k,k),k,k,k)],u))
v.push(B.T)
t=A.m(k,k,i.a.d.a?B.aS:B.av,k,k,k,k,k,k,k,k,13,k,k,k,k,k,!0,k,k,k,k,k,k,k,k)
v.push(A.aN(k,B.Z,!1,k,!0,B.t,k,A.aO(),l.r,k,k,k,k,k,2,i.aVs("Note (optional)"),B.y,!0,k,!0,k,!1,k,B.ak,k,k,k,k,k,k,k,k,k,2,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,B.ac,k,k,k,k,k,k,k,k,k,k,k,t,!0,B.a6,k,B.ao,k,k,k,k))
v.push(B.af)
v.push(A.d("Optional verification",k,k,k,k,k,k,A.m(k,k,i.a.d.a?B.aS:B.av,k,k,k,k,k,k,k,k,12.5,k,k,B.H,k,k,!0,k,k,k,k,k,k,k,k),k,k,k))
v.push(A.d("ID photo, selfie, and signature from the person who owes you \u2014 all optional.",k,k,k,k,k,k,A.m(k,k,i.a.d.a?B.bu:B.bh,k,k,k,k,k,k,k,k,11,k,k,k,k,1.3,!0,k,k,k,k,k,k,k,k),k,k,k))
v.push(i.b3G(r.b.length!==0,B.mj,new C.dQp(r,i,a0),new C.dQq(r,a0),"Upload from gallery","ID photo"))
v.push(i.b3G(r.c.length!==0,D.bQz,new C.dQr(r,i,d,a0),new C.dQs(r,a0),"Camera or gallery","Selfie"))
v.push(B.P)
t=l.w
v.push(new Ap.a8P("Signature (optional)",t,new C.dQt(a0),new C.dQi(a0,t),new C.dQj(d,t,a0),k))
v.push(B.aB)
i=i.a.d.a
t=i?B.bu:B.bh
s=(i?B.bu:B.bh).j(0.28)
s=A.E(A.dV(E.aXO,new C.dQk(d),A.dj(k,k,k,k,k,k,k,k,k,t,k,k,B.qG,k,new A.b9(A.l(10),B.a1),new A.ay(s,1,B.r,-1),k,k,k,k)),1)
t=A.bo(B.cU,k,k,k,B.c,k,B.qG,k,new A.b9(A.l(10),B.a1),k,k,k)
v.push(A.A(A.a([s,B.ae,A.E(A.bI(A.d(h?"Save":"Update",k,k,k,k,k,k,B.vM,k,k,k),k,new C.dQl(r,w,d),t),1)],u),B.l,k,B.e,B.h,0,k,k))
return A.p(k,A.c9(A.x(v,B.al,k,B.e,B.N,0,B.p),B.t,k,B.y,k,k,k,k,B.ah),B.f,k,new A.aY(0,1/0,0,j.a.b*0.88),new A.o(g,k,e,f,k,k,B.n),k,k,k,B.t7,B.jr,k,k,360)},
$S:164}
C.dQf.prototype={
$0(){A.a5(this.a,!1).N(!1)
return null},
$S:0}
C.dQg.prototype={
$0(){var w=this.a.d
w.toString
return this.b.$2(this.c,w)},
$S:0}
C.dQh.prototype={
$0(){return this.b.$1(new C.dQe(this.a))},
$S:0}
C.dQe.prototype={
$0(){var w=this.a
w.d=B.xg
w.e="\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1"},
$S:0}
C.dQm.prototype={
$0(){return this.b.$1(new C.dQd(this.a))},
$S:0}
C.dQd.prototype={
$0(){var w=this.a
w.d=B.a8d
w.e="\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1"},
$S:0}
C.dQn.prototype={
$0(){var w=this.a.d
w.toString
return this.b.$2(this.c,w)},
$S:0}
C.dQo.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.a
w=2
return A.b(A.xq(null,u.b,A.c_(2020,1,1,0,0,0,0,0),null,s,A.c_(2100,1,1,0,0,0,0,0)),$async$$0)
case 2:r=e
if(r!=null)u.c.$1(new C.dQc(t,r))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dQc.prototype={
$0(){var w=this.b
return this.a.a=A.c_(w.gcl(),w.gcg(),w.gcz(),0,0,0,0,0)},
$S:0}
C.dQp.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(u.b.Qf(!1),$async$$0)
case 2:t=e
if(t!=null)u.c.$1(new C.dQb(u.a,t))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dQb.prototype={
$0(){return this.a.b=this.b},
$S:0}
C.dQq.prototype={
$0(){return this.b.$1(new C.dQa(this.a))},
$S:0}
C.dQa.prototype={
$0(){return this.a.b=""},
$S:0}
C.dQr.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.b
q=r.a.d.a?B.ee:B.c
w=3
return A.b(A.bS(q,null,new C.dQ8(),t.c,!0,!0,!1,null,!1,!1,x.N),$async$$0)
case 3:p=e
if(p==null){w=1
break}w=4
return A.b(r.Qf(p==="camera"),$async$$0)
case 4:s=e
if(s!=null)t.d.$1(new C.dQ9(t.a,s))
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.dQ8.prototype={
$1(d){var w=null
return A.bm(!0,A.x(A.a([A.dI(!1,w,w,w,!0,w,w,w,!0,w,w,B.asn,w,w,w,w,new C.dQ2(d),!1,w,w,w,w,w,w,w,D.fRH,w,w,w),A.dI(!1,w,w,w,!0,w,w,w,!0,w,w,B.asl,w,w,w,w,new C.dQ3(d),!1,w,w,w,w,w,w,w,D.fYL,w,w,w)],x.p),B.l,w,B.e,B.N,0,B.p),!0,!1,B.ag,!0,!0)},
$S:25}
C.dQ2.prototype={
$0(){A.a5(this.a,!1).N("camera")
return null},
$S:0}
C.dQ3.prototype={
$0(){A.a5(this.a,!1).N("gallery")
return null},
$S:0}
C.dQ9.prototype={
$0(){return this.a.c=this.b},
$S:0}
C.dQs.prototype={
$0(){return this.b.$1(new C.dQ7(this.a))},
$S:0}
C.dQ7.prototype={
$0(){return this.a.c=""},
$S:0}
C.dQt.prototype={
$0(){return this.a.$1(new C.dQ6())},
$S:0}
C.dQ6.prototype={
$0(){},
$S:0}
C.dQi.prototype={
$0(){return this.a.$1(new C.dQ5(this.b))},
$S:0}
C.dQ5.prototype={
$0(){return B.d.a8(this.a)},
$S:0}
C.dQj.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.b
w=2
return A.b(A.aiX(u.a,null,null,new C.dQ4(u.c,t),t,"Debtor signature"),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dQ4.prototype={
$4(d,e,f,g){this.a.$1(new C.dQ1(this.b,d))},
$S:445}
C.dQ1.prototype={
$0(){var w=this.a
B.d.a8(w)
B.d.u(w,this.b)},
$S:0}
C.dQk.prototype={
$0(){A.a5(this.a,!1).N(!1)
return null},
$S:0}
C.dQl.prototype={
$0(){var w=this
if(B.a.i(w.b.a.a).length===0){w.c.L(x.q).f.T(D.fpu)
return}if(w.a.d==null){w.c.L(x.q).f.T(D.fmi)
return}A.a5(w.c,!1).N(!0)},
$S:0}
C.dQP.prototype={
$3(d,e,f){return B.bM},
$C:"$3",
$R:3,
$S:88}
C.dQQ.prototype={
$4(d,e,f,g){var w,v,u,t,s,r=null,q=this.a,p=q.a.d.a,o=p?B.ee:B.c,n=A.l(14),m=A.K((p?B.bu:B.bh).j(0.16),B.r,1)
p=A.d("Mark paid?",r,r,r,r,r,r,A.m(r,r,q.a.d.a?B.aS:B.av,r,r,r,r,r,r,r,r,16,r,r,B.H,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
w=this.b
v=w.b
u=A.Bn(w.c)
v=A.d(v+" \xb7 "+u,r,r,r,r,r,r,A.m(r,r,q.a.d.a?B.bu:B.bh,r,r,r,r,r,r,r,r,13,r,r,B.a9,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
u=w.zM(r).length
u=A.d("Missed days: "+u,r,r,r,r,r,r,A.m(r,r,w.zM(r).length>0?B.bG:B.cU,r,r,r,r,r,r,r,r,12,r,r,B.O,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
q=q.a.d.a
w=q?B.bu:B.bh
t=(q?B.bu:B.bh).j(0.28)
s=x.p
return new A.d2(e,!1,A.as(A.aG(!1,B.a3,!0,r,A.p(r,A.x(A.a([p,B.P,v,u,B.aB,A.A(A.a([A.E(A.dV(B.o8,new C.dQN(d),A.dj(r,r,r,r,r,r,r,r,r,w,r,r,B.k5,r,new A.b9(A.l(10),B.a1),new A.ay(t,1,B.r,-1),r,r,r,r)),1),B.ae,A.E(A.bI(D.fZc,r,new C.dQO(d),A.bo(B.cU,r,r,r,B.c,r,B.k5,r,new A.b9(A.l(10),B.a1),r,r,r)),1)],s),B.l,r,B.e,B.h,0,r,r)],s),B.al,r,B.e,B.N,0,B.p),B.f,r,r,new A.o(o,r,m,n,r,r,B.n),r,r,r,B.CN,B.H5,r,r,300),B.f,B.L,0,r,r,r,r,r,B.ai),r,r,r),r)},
$S:33}
C.dQN.prototype={
$0(){A.a5(this.a,!1).N(!1)
return null},
$S:0}
C.dQO.prototype={
$0(){A.a5(this.a,!1).N(!0)
return null},
$S:0}
C.dQJ.prototype={
$1(d){var w,v,u,t,s=null,r=this.a,q=new C.dQK(r),p=r.a.d.a,o=p?B.ee:B.c,n=A.l(14),m=A.K((p?B.bu:B.bh).j(0.14),B.r,1),l=this.b,k=l.b
p=x.p
k=A.A(A.a([A.E(A.d(k,s,1,B.a2,s,s,s,A.m(s,s,r.a.d.a?B.aS:B.av,s,s,s,s,s,s,s,s,14,s,s,B.H,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),1),A.d(A.Bn(l.c),s,s,s,s,s,s,D.fCC,s,s,s)],p),B.l,s,B.e,B.h,0,s,s)
w=A.iP((r.a.d.a?B.bu:B.bh).j(0.12),s,1,s,s,s)
v=q.$3$icon$label$onTap(B.a2Y,"View receipt",new C.dQC(r,d,l))
u=l.x!=null
t=u?B.pE:B.qP
u=u?"Mark unpaid":"Mark paid"
p=A.a([new A.D(D.bEh,k,s),w,v,q.$3$icon$label$onTap(t,u,new C.dQD(r,d,l)),q.$3$icon$label$onTap(B.D1,"Edit",new C.dQE(r,d,l))],p)
if(B.a.i(l.as).length!==0)p.push(q.$3$icon$label$onTap(B.mj,"View / download ID",new C.dQF(r,d,l)))
if(B.a.i(l.at).length!==0)p.push(q.$3$icon$label$onTap(D.bQy,"View / download selfie",new C.dQG(r,d,l)))
if(l.gaI4())p.push(q.$3$icon$label$onTap(Ad.a49,"View / download signature",new C.dQH(r,d,l)))
p.push(q.$4$color$icon$label$onTap(B.bG,B.ek,"Delete",new C.dQI(r,d,l)))
p.push(B.aw)
return A.bm(!0,new A.D(B.t5,A.p(s,A.x(p,B.l,s,B.e,B.N,0,B.p),B.f,s,s,new A.o(o,s,m,n,s,s,B.n),s,s,s,s,s,s,s,s),s),!0,!1,B.ag,!0,!0)},
$S:25}
C.dQK.prototype={
$4$color$icon$label$onTap(d,e,f,g){var w,v=null
if(d==null)w=this.a.a.d.a?B.aS:B.av
else w=d
return A.aM(!1,v,!0,new A.D(B.eV,A.A(A.a([A.W(e,w,v,v,v,20),B.bb,A.d(f,v,v,v,v,v,v,A.m(v,v,w,v,v,v,v,v,v,v,v,14,v,v,B.O,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),B.l,v,B.e,B.h,0,v,v),v),v,!0,v,v,v,v,v,v,v,v,v,v,v,g,v,v,v,v,v,v,v)},
$3$icon$label$onTap(d,e,f){return this.$4$color$icon$label$onTap(null,d,e,f)},
$S:1974}
C.dQC.prototype={
$0(){A.a5(this.b,!1).N(null)
var w=this.a.c
w.toString
C.fZL(w,this.c)},
$S:0}
C.dQD.prototype={
$0(){A.a5(this.b,!1).N(null)
this.a.T1(this.c)},
$S:0}
C.dQE.prototype={
$0(){A.a5(this.b,!1).N(null)
this.a.DJ(this.c)},
$S:0}
C.dQF.prototype={
$0(){var w,v,u
A.a5(this.b,!1).N(null)
w=this.a.c
w.toString
v=this.c
u=v.b
C.bGx(w,v.as,"ngmy_cashier_id_"+v.a+".jpg","ID photo \xb7 "+u)},
$S:0}
C.dQG.prototype={
$0(){var w,v,u
A.a5(this.b,!1).N(null)
w=this.a.c
w.toString
v=this.c
u=v.b
C.bGx(w,v.at,"ngmy_cashier_selfie_"+v.a+".jpg","Selfie \xb7 "+u)},
$S:0}
C.dQH.prototype={
$0(){A.a5(this.b,!1).N(null)
var w=this.a.c
w.toString
C.fZQ(w,this.c)},
$S:0}
C.dQI.prototype={
$0(){A.a5(this.b,!1).N(null)
this.a.Qe(0,this.c)},
$S:0}
C.dQR.prototype={
$1(d){return d.x==null},
$S:245}
C.dQS.prototype={
$1(d){return d.x!=null},
$S:245}
C.dQT.prototype={
$2(d,e){return d+e.c},
$S:1975}
C.dQU.prototype={
$0(){return this.a.bEc()},
$S:0}
C.dQL.prototype={
$0(){return this.a.agx(this.b)},
$S:0}
C.fIl.prototype={
$1(d){return d.a===this.a},
$S:z+34}
C.fIm.prototype={
$0(){return B.d.gH(D.a5t)},
$S:z+77}
C.dgq.prototype={
$0(){var w=this.a
return w.m(new C.dgo(w,this.b))},
$S:0}
C.dgo.prototype={
$0(){return this.a.d=this.b.a},
$S:0}
C.dgp.prototype={
$0(){},
$S:0}
C.dgr.prototype={
$0(){var w=this.a.gc2E()
A.a5(this.b,!1).N(w)
return null},
$S:0}
C.fKR.prototype={
$1(d){return C.hn5(A.a1(d,x.N,x.z))},
$S:z+11}
C.fKS.prototype={
$1(d){return d.a.length!==0},
$S:z+4}
C.fKT.prototype={
$2(d,e){var w=A.ca(d.a,null),v=A.ca(e.a,null)
if(w!=null&&v!=null)return B.o.aS(w,v)
return d.d.aS(0,e.d)},
$S:z+83}
C.fYm.prototype={
$1(d){return d.aj()},
$S:z+12}
C.h5Z.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.fHr.prototype={
$1(d){return d.a===this.a},
$S:z+4}
C.bRN.prototype={
$2(d,e){var w=this.a.h(0,d),v=w==null?null:B.a.i(J.k(w)).toLowerCase()
return v!=null&&J.eK(e,v)?v:null},
$S:1976}
C.fYX.prototype={
$1(d){var w=this
return new C.a_G(w.a,w.b,w.c,w.d,w.e,w.f,null)},
$S:z+54}
C.dh5.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.dh4(w,d))},
$S:z+80}
C.dh4.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.dgU.prototype={
$0(){var w,v=this.a,u=this.b
v.d=u
w=v.e=!1
if(J.cJ(u)?v.r>=J.ad(v.d):w)v.r=J.ad(v.d)-1},
$S:0}
C.dgR.prototype={
$0(){var w=this.a
w.r=this.b-1
w.w=w.x
w.x=!1},
$S:0}
C.dgs.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.dgt.prototype={
$0(){var w=this.a
w.r=this.b
w.x=w.w=!0},
$S:0}
C.dgV.prototype={
$0(){return this.a.w=!1},
$S:0}
C.dgB.prototype={
$1(d){var w=null,v=A.P(d).ax.a===B.I,u=v?B.ee:B.c,t=A.d("Remove this page?",w,w,w,w,w,w,A.m(w,w,v?B.aS:B.av,w,w,w,w,w,w,w,w,w,w,w,B.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),s=A.d("\u201c"+this.a.b+"\u201d will be deleted from this device.",w,w,w,w,w,w,A.m(w,w,v?B.bu:B.bh,w,w,w,w,w,w,w,w,w,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)
return A.ej(A.a([A.bO(!1,B.ds,w,w,!0,w,w,w,new C.dgz(d),w,w),A.bI(B.xG,w,new C.dgA(d),A.bo(B.nr,w,w,w,w,w,w,w,w,w,w,w))],x.p),w,w,u,s,w,w,w,w,t,w)},
$S:18}
C.dgz.prototype={
$0(){A.a5(this.a,!1).N(!1)
return null},
$S:0}
C.dgA.prototype={
$0(){A.a5(this.a,!1).N(!0)
return null},
$S:0}
C.dgC.prototype={
$0(){var w=this.a
w.w=!1
w.r=B.o.D(w.r-1,-1,999)},
$S:0}
C.dgS.prototype={
$1(d){return d.a===this.a.y.a},
$S:z+13}
C.dgT.prototype={
$0(){return B.d.gH(D.A1)},
$S:z+14}
C.dgx.prototype={
$1(d){var w=this.a,v=w.y,u=w.gz6(0),t=J.ad(w.d)
w=J.ad(w.d)===1?"page":"pages"
return new C.U3(v.Q,u,"Family Book \xb7 "+t+" "+w,null)},
$S:z+38}
C.dgy.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.dgD.prototype={
$1(d){var w=this.a,v=w.y,u=B.a.i(w.a.r)
if(u.length===0)u="Our Family Book"
return new C.a_e(v,u,J.ad(w.d),null)},
$S:z+40}
C.dgE.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.dh3.prototype={
$2(d,e){var w,v,u,t,s=null,r=this.a,q=r.f
q===$&&A.c()
if(e===0)w=A.az(s,new C.ZW(r.y,r.gz6(0),J.ad(r.d),s),B.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new C.dh1(r),s,s,s,s,s,s,!1,B.a4)
else{w=e-1
v=J.t(r.d,w)
J.ad(r.d)
w=w===r.r&&r.w&&r.a.f
u=r.z
u===$&&A.c()
t=r.Q
t===$&&A.c()
t=new C.bcz(v,e,w,u,t,r.gbUO(),C.hCS(r.y.Q),r.gz6(0),s)
w=t}return A.c6(q,new C.dh2(r,e),new A.D(B.a18,w,s))},
$S:1977}
C.dh2.prototype={
$2(d,e){var w,v,u=this.a,t=u.f
t===$&&A.c()
t=t.f
if(t.length!==0&&B.d.gd5(t).ay){t=this.b
u=x.cy.a(B.d.gd5(u.f.f)).gvr(0)
w=t-(u==null?t:u)}else w=0
v=B.j.D(w,-1,0)
u=A.dq()
t=u.a
t.$flags&2&&A.aj(t)
t[11]=0.0013
u.fG(v*3.141592653589793*0.5)
return A.fB(B.a5,A.d3(e,B.j.D(1+v*0.5,0,1)),null,u,!0)},
$S:44}
C.dh1.prototype={
$0(){var w=this.a.f
w===$&&A.c()
return w.aJg(B.qy,B.iA)},
$S:0}
C.dgO.prototype={
$0(){var w=this.a
return w.m(new C.dgN(w))},
$S:0}
C.dgN.prototype={
$0(){return this.a.w=!0},
$S:0}
C.dgP.prototype={
$0(){var w=this.a.c
w.toString
A.a5(w,!1).N(null)
return null},
$S:0}
C.dgu.prototype={
$1(d){var w,v,u=null,t=A.l(26),s=E.ku.j(0.5),r=x.p,q=A.a([D.fQe,B.af],r),p=this.a
if(B.a.i(p.a.x).length!==0){w=J.ct(p.d)?"Write this book":"Write a new book"
q.push(p.a_0(d,B.e9,w,J.ct(p.d)?"Choose English or Swahili, then describe the book":"A brand new book for your shelf. Choose English or Swahili, then describe it","write"))}if(p.a.f)q.push(p.a_0(d,K.aqi,"Fix or change something","Correct a word, rewrite a page, add to it, or redesign the cover","fix"))
if(J.cJ(p.d)){r=A.a([],r)
w=this.b
v=w==="en"
if(v)r.push(new A.D(B.cx,A.d("Your book is in English.",u,u,u,u,u,u,A.m(u,u,D.kP.j(0.7),u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u))
w=w==="sw"
if(w)r.push(new A.D(B.cx,A.d("Your book is in Swahili.",u,u,u,u,u,u,A.m(u,u,D.kP.j(0.7),u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u))
if(w)r.push(p.a_0(d,X.arg,"Make my Swahili sound natural","A native-speaker editor rewrites every page so it reads like real Swahili","polish"))
if(!w)r.push(p.a_0(d,B.oM,"Translate my book to Swahili","Every page, from English into Kiswahili","sw"))
if(!v)r.push(p.a_0(d,B.oM,"Translate my book to English","Every page, from Swahili into English","en"))
B.d.u(q,r)}return A.eG(u,E.Cb,A.bm(!0,new A.D(Ac.yY,A.x(q,B.E,u,B.e,B.N,0,B.p),u),!0,!1,B.ag,!0,!0),u,u,u,B.Oz,u,B.d6,u,new A.b9(t,new A.ay(s,1.4,B.r,-1)),u)},
$S:47}
C.dgQ.prototype={
$0(){A.a5(this.a,!1).N(this.b)
return null},
$S:0}
C.dgH.prototype={
$1(d){var w=this.a,v=w.r>=0&&J.cJ(w.d)
return new C.a_I(v,J.cJ(w.d),w.r+1,null)},
$S:z+44}
C.dgI.prototype={
$1(d){var w=null
return A.oQ(!1,A.ej(w,w,w,E.Cb,new A.k5(this.a,new C.dgG(),w,w,x.cI),w,w,w,w,w,w),w,x.z)},
$S:325}
C.dgG.prototype={
$3(d,e,f){var w=null
return A.A(A.a([E.aba,B.p5,A.E(A.d(e,w,w,w,w,w,w,B.jC,w,w,w),1)],x.p),B.l,w,B.e,B.h,0,w,w)},
$S:762}
C.dgJ.prototype={
$0(){return this.a.a=!1},
$S:51}
C.dgK.prototype={
$2(d,e){this.a.sp(0,d)
return d},
$S:185}
C.dgL.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.dgM.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=u.a
r=s.a
w=2
return A.b(C.Bw(r.c,r.d,u.b),$async$$0)
case 2:r=s.a
t=u.c
w=3
return A.b(C.SH(r.c,r.d,t),$async$$0)
case 3:if(s.c!=null)s.m(new C.dgF(s,t))
w=4
return A.b(s.lh(),$async$$0)
case 4:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dgF.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.dgX.prototype={
$1(d){var w=null
return A.oQ(!1,A.ej(w,w,w,E.Cb,new A.k5(this.a,new C.dgW(),w,w,x.cI),w,w,w,w,w,w),w,x.z)},
$S:325}
C.dgW.prototype={
$3(d,e,f){var w=null
return A.A(A.a([E.aba,B.p5,A.E(A.d(e,w,w,w,w,w,w,B.jC,w,w,w),1)],x.p),B.l,w,B.e,B.h,0,w,w)},
$S:762}
C.dgY.prototype={
$0(){return this.a.a=!1},
$S:51}
C.dgZ.prototype={
$2(d,e){this.a.sp(0,d)
return d},
$S:185}
C.dh_.prototype={
$2(d,e){this.a.sp(0,d)
return d},
$S:185}
C.dh0.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.a
w=2
return A.b(C.Bw(s.c,s.d,u.b),$async$$0)
case 2:w=3
return A.b(t.lh(),$async$$0)
case 3:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dgv.prototype={
$0(){var w=this.a.f
w===$&&A.c()
return w.bl9(B.qy,A4.O7)},
$S:0}
C.dgw.prototype={
$0(){var w=this.a.f
w===$&&A.c()
return w.aJg(B.qy,A4.O7)},
$S:0}
C.diS.prototype={
$0(){A.a5(this.a,!1).N(null)
return null},
$S:0}
C.diT.prototype={
$1(d){var w=this.a
return w.m(new C.diR(w))},
$S:9}
C.diR.prototype={
$0(){return this.a.e="page"},
$S:0}
C.diU.prototype={
$1(d){var w=this.a
return w.m(new C.diQ(w))},
$S:9}
C.diQ.prototype={
$0(){return this.a.e="book"},
$S:0}
C.diV.prototype={
$1(d){var w=this.a
return w.m(new C.diP(w))},
$S:9}
C.diP.prototype={
$0(){return this.a.e="cover"},
$S:0}
C.diW.prototype={
$0(){var w=this.a
return w.m(new C.diO(w,this.b))},
$S:0}
C.diO.prototype={
$0(){var w=this.b
this.a.d.sb1(0,w)
return w},
$S:0}
C.diX.prototype={
$0(){var w=this.a,v=B.a.i(w.d.a.a)
if(v.length===0)return
w=w.ga2Q()
A.a5(this.b,!1).N(new A.brs(w,v))},
$S:0}
C.dhk.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.dhj.prototype={
$1(d){var w=this.a.a,v=w.c,u=w.d,t=this.b.a
t=t==="main"?u:u+"~"+t
return new C.a_E(v,t,u,w.e,w.f,w.r,w.w,null)},
$S:z+50}
C.dho.prototype={
$1(d){return d.a===this.a},
$S:z+52}
C.dhn.prototype={
$1(d){var w,v=null,u=this.b,t=this.a.bb7(u)
u=u.c
w=u===1?"page":"pages"
w=A.d("\u201c"+t+"\u201d and its "+u+" "+w+" will be deleted from this device.",v,v,v,v,v,v,B.hr,v,v,v)
return A.ej(A.a([A.bO(!1,B.ds,v,v,!0,v,v,v,new C.dhl(d),v,v),A.bI(B.xG,v,new C.dhm(d),A.bo(B.nr,v,v,v,v,v,v,v,v,v,v,v))],x.p),v,v,E.Cb,w,v,v,v,v,D.fP0,v)},
$S:18}
C.dhl.prototype={
$0(){A.a5(this.a,!1).N(!1)
return null},
$S:0}
C.dhm.prototype={
$0(){A.a5(this.a,!1).N(!0)
return null},
$S:0}
C.dhp.prototype={
$0(){A.a5(this.a,!1).N(null)
return null},
$S:0}
C.dhq.prototype={
$2(d,e){var w,v,u,t=null,s=(e.b-32-14)/2,r=A.a([],x.p)
for(w=this.a,v=w.length,u=0;u<w.length;w.length===v||(0,A.I)(w),++u)r.push(new A.a3(s,t,w[u],t))
return A.c9(A.bZ(B.bH,r,B.br,t,18,14),B.t,t,B.y,t,D.bFg,t,t,B.ah)},
$S:280}
C.dhi.prototype={
$0(){return this.a.R1(0,this.b)},
$S:0}
C.dhh.prototype={
$0(){return this.a.Qt(0,this.b)},
$S:0}
C.cPK.prototype={
$1(d){return d.a===this.a.c.a},
$S:z+13}
C.cPL.prototype={
$0(){return B.d.gH(D.A1)},
$S:z+14}
C.cPM.prototype={
$4(d,e,f,g){var w=null,v=A.l(e)
return A.bR(0,new A.D(d,new A.bM(new A.o(w,w,A.K(this.a.j(f),B.r,g),v,w,w,B.n),B.bi,w,w),w),0,0,0)},
$S:1979}
C.d8h.prototype={
$1(d){return this.a.m(new C.d8g(this.b,this.c))},
$S:9}
C.d8g.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.d8G.prototype={
$1(d){return this.a.m(new C.d8t())},
$S:2}
C.d8t.prototype={
$0(){},
$S:0}
C.d8H.prototype={
$1(d){return this.a.m(new C.d8s())},
$S:2}
C.d8s.prototype={
$0(){},
$S:0}
C.d8I.prototype={
$0(){var w=this.a
return w.m(new C.d8r(w,this.b))},
$S:0}
C.d8r.prototype={
$0(){var w=this.a
return w.d=w.gos().Gi(this.b.a)},
$S:0}
C.d8J.prototype={
$0(){var w=this.a
return w.m(new C.d8q(w,this.b))},
$S:0}
C.d8q.prototype={
$0(){var w=this.a
return w.d=w.gos().cOi(this.b)},
$S:0}
C.d8K.prototype={
$1(d){return this.a.m(new C.d8p())},
$S:2}
C.d8p.prototype={
$0(){},
$S:0}
C.d8L.prototype={
$0(){var w=this.a
return w.m(new C.d8o(w,this.b))},
$S:0}
C.d8o.prototype={
$0(){var w=this.a
return w.d=w.gos().cOn(this.b.a)},
$S:0}
C.d8M.prototype={
$1(d){var w=this.a
return w.m(new C.d8B(w,d))},
$S:6}
C.d8B.prototype={
$0(){var w=this.a
return w.d=w.gos().cPh(this.b)},
$S:0}
C.d8N.prototype={
$1(d){var w=this.a
return w.d=w.gos().aGc(d)},
$S:2}
C.d8O.prototype={
$1(d){var w=this.a
return w.d=w.gos().cOq(d)},
$S:2}
C.d8Q.prototype={
$1(d){var w=this.a
return w.d=w.gos().cPf(d)},
$S:2}
C.d8R.prototype={
$1(d){var w=this.a
return w.m(new C.d8A(w,d))},
$S:9}
C.d8A.prototype={
$0(){var w=this.a
return w.d=w.gos().cP6(this.b)},
$S:0}
C.d8S.prototype={
$0(){var w=this.a,v=w.gos(),u=B.a.i(w.gz6(0).a.a),t=B.a.i(w.gaDo().a.a)
u=v.bfR(B.a.i(w.gat0().a.a),t,u)
A.a5(this.b,!1).N(u)
return null},
$S:0}
C.bRX.prototype={
$1(d){this.a.f.sp(0,d.a/1e6)},
$S:8}
C.bRR.prototype={
$1(d){var w=this.a
if(w.c==null)return
w.m(new C.bRQ(w,d))},
$S:11}
C.bRQ.prototype={
$0(){var w=this.a,v=w.db.length,u=Math.min(v,w.dx+2)
w.dx=u
if(u>=v){w.r.c=!1
this.b.a1(0)}},
$S:0}
C.bS_.prototype={
$0(){var w=this.a
w.dx=w.db.length
w.r.c=!1},
$S:0}
C.bRS.prototype={
$0(){var w=this.a
w.Q=D.b22
w.ae7(1)
w.r.x=null},
$S:0}
C.bRT.prototype={
$0(){var w,v,u=this.a
if(u.c==null||u.Q!==D.b22)return
w=new A.e6()
w.d_(u.as*13+u.a.e)
v=u.r
v.Q=3+w.aw(3)
v.z=D.d5O[w.aw(6)]
v.as=u.f.a+2.6},
$S:0}
C.bRW.prototype={
$0(){var w=this.a
w.Q=D.adM
w.ae7(2)
w.r.z=null},
$S:0}
C.bRV.prototype={
$0(){var w,v,u=this,t=u.a,s=t.fr=u.c
t.Q=D.hGv
t.ae7(3)
w=t.r
w.d=s
w.x="I say: "+t.gCB()[t.as].b[u.b]
t=t.f
w.y=t.a+2.2
v=u.d
w.Q=3+v.aw(3)
w.z=s?D.dcm[v.aw(4)]:D.dxJ[v.aw(3)]
w.as=t.a+2.8},
$S:0}
C.bRY.prototype={
$0(){var w=this.a
w.Q=D.b23
w.CW=this.b
w.cy=1
w.ae7(4)
w.r.f=w.f.a+5},
$S:0}
C.bRZ.prototype={
$0(){},
$S:0}
C.bRU.prototype={
$0(){var w=this.a.c
w.toString
return A.a5(w,!1).hU()},
$S:0}
C.bRO.prototype={
$0(){return this.a.Ld(this.b)},
$S:0}
C.bRP.prototype={
$0(){var w=this.a.c
w.toString
return A.a5(w,!1).hU()},
$S:0}
C.bTt.prototype={
$0(){var w=this
return w.a.Rl(w.b,0,w.c,w.d)},
$S:0}
C.bTu.prototype={
$0(){var w=this
return w.a.Rl(w.b,3,w.c,w.d)},
$S:0}
C.bTv.prototype={
$0(){var w=this
return w.a.Rl(w.b,1,w.c,w.d)},
$S:0}
C.bTw.prototype={
$0(){var w=this
return w.a.bUe(w.b,w.c,w.d)},
$S:0}
C.bTx.prototype={
$0(){var w=this
return w.a.Rl(w.b,4,w.c,w.d)},
$S:0}
C.bTy.prototype={
$0(){var w=this
return w.a.Rl(w.b,2,w.c,w.d)},
$S:0}
C.bTz.prototype={
$0(){var w=this
return w.a.Rl(w.b,5,w.c,w.d)},
$S:0}
C.bTA.prototype={
$2(d,e){return B.j.aS(d.a,e.a)},
$S:763}
C.bTs.prototype={
$2(d,e){var w,v,u,t,s,r=null,q=D.a6E[d],p=q.a.a5(0,new A.r(0,-q.b*1.2*124)),o=A.fp(r,B.cr,r,3,r,A.cQ(r,r,r,r,r,r,r,r,r,D.ftw,e),B.a6,B.bV,r,B.dA,B.bW)
o.mZ(130)
w=o.b.a.c
w=p.aK(0,new A.r(0,w.gba(w)/2+8))
v=o.b
u=v.c
v=v.a.c
t=A.bx(A.bU(w,v.gba(v)+12,u+18),B.i5)
u=this.a
v=t.eF(B.dL)
w=$.S()
s=A.L()
s.r=B.dC.gp(0)
u.aq(v,s)
s=A.L()
s.r=D.qp.gp(0)
u.aq(t,s)
w=new A.aI(w.r,B.aj,r,r,A.a([],x.v))
s=p.a
v=t.d-1
w.E(new A.aZ(s-5,v))
w.E(new A.aq(s+1,p.b+1))
w.E(new A.aq(s+6,v))
w.E(new A.bw())
v=A.L()
v.r=D.qp.gp(0)
u.ag(w,v)
o.a4(u,new A.r(t.a+9,t.b+6))},
$S:764}
C.bSd.prototype={
$2(d,e){return B.o.aS(d.Q,e.Q)},
$S:z+7}
C.bSe.prototype={
$2(d,e){var w=this.a,v=B.o.aS(w.amP(d),w.amP(e))
if(v!==0)return v
return B.o.aS(d.Q,e.Q)},
$S:z+7}
C.fvx.prototype={
$1(d){return d!==this.a&&B.a.i(d).length!==0},
$S:3}
C.h5Q.prototype={
$2(d,e){if(e!=null)J.c5(this.a.c3(0,d,new C.h5R()),e)},
$S:z+66}
C.h5R.prototype={
$0(){return A.a([],x.J)},
$S:z+76}
C.h5S.prototype={
$1(d){return d!==this.a},
$S:3}
C.h5T.prototype={
$1(d){var w=d.a,v=this.a
return w!==v.a&&w!==this.b.a&&d.c===v.c},
$S:z+1}
C.h5U.prototype={
$1(d){return d!==this.a&&!B.d.aV(this.b,new C.h5P(this.c,d))},
$S:3}
C.h5P.prototype={
$1(d){return B.a.i(d.b)===this.b},
$S:z+1}
C.h5V.prototype={
$1(d){return d!==this.a},
$S:3}
C.h5W.prototype={
$1(d){return d!==this.a},
$S:3}
C.h5X.prototype={
$1(d){return d!==this.a&&!B.d.aV(this.b,new C.h5O(this.c,d))},
$S:3}
C.h5O.prototype={
$1(d){return B.a.i(d.b)===this.b},
$S:z+1}
C.fIX.prototype={
$1(d){var w=this.b.h(0,d)
w.toString
return J.ad(w)>this.a.a},
$S:3}
C.fXj.prototype={
$1(d){return d.Q},
$S:z+15}
C.fXk.prototype={
$0(){return A.a([],x.u)},
$S:z+16}
C.fEN.prototype={
$1(d){return this.a>=d.c},
$S:z+17}
C.fLN.prototype={
$1(d){return d.c>this.a},
$S:z+17}
C.bN0.prototype={
$1(d){return B.a.i(d).length!==0},
$S:3}
C.h6f.prototype={
$2(d,e){return B.o.aS(C.hz8(d),C.hz8(e))},
$S:230}
C.h6g.prototype={
$1(d){return d!==this.a},
$S:3}
C.fXT.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
C.bLa.prototype={
$0(){var w=this.a
w.ch=!0
w.b9m()},
$S:0}
C.bL5.prototype={
$0(){},
$S:0}
C.bLb.prototype={
$1(d){return d.f<=0},
$S:z+26}
C.bL3.prototype={
$0(){},
$S:0}
C.bL4.prototype={
$0(){},
$S:0}
C.bL9.prototype={
$2(d,e){var w,v,u=null,t=this.a,s=A.a([A.bR(0,A.b4(u,u,u,new C.bde(t,u),B.az),0,0,0)],x.p)
if(t.dy.length!==0&&t.dx<t.fr){w=B.w.j(0.7)
v=A.l(14)
s.push(A.ao(u,A.p(u,A.d(t.dy,u,u,u,u,u,u,D.fBa,B.K,u,u),B.f,u,u,new A.o(w,u,u,v,u,u,B.n),u,u,u,u,B.bU,u,u,u),u,u,14,14,6,u))}return A.az(B.bZ,new A.an(B.a0,u,B.ad,B.t,s,u),B.y,!1,u,u,u,u,u,u,u,new C.bL6(t,e),u,u,u,u,u,u,u,new C.bL7(t,e),u,u,u,u,u,u,u,u,u,new C.bL8(t,e),u,u,u,u,!1,B.a4)},
$S:37}
C.bL6.prototype={
$1(d){return this.a.db=B.j.D(d.b.a/this.b.b,0.08,0.92)},
$S:19}
C.bL8.prototype={
$1(d){return this.a.db=B.j.D(d.b.a/this.b.b,0.08,0.92)},
$S:22}
C.bL7.prototype={
$1(d){return this.a.db=B.j.D(d.b.a/this.b.b,0.08,0.92)},
$S:19}
C.bL2.prototype={
$0(){var w=this.a.c
w.toString
return A.a5(w,!1).hU()},
$S:0}
C.cqM.prototype={
$0(){var w=this,v=w.a
v.ax=w.b
v.at=w.c.a+" is not a child of "+w.d+". Try someone else."},
$S:0}
C.cqN.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new C.cqL(w))},
$S:0}
C.cqL.prototype={
$0(){return this.a.ax=-1},
$S:0}
C.cqO.prototype={
$0(){var w=this,v=w.a
v.gj_()[w.b]=w.c
v.at=w.d.a+" is a child of "+w.e+". The branch grows!"},
$S:0}
C.cqP.prototype={
$2(d,e){return d+e.c.length},
$S:z+29}
C.cqQ.prototype={
$0(){var w=this.a
w.ay=!0
w.w=this.b},
$S:0}
C.cqR.prototype={
$0(){},
$S:0}
C.cqS.prototype={
$0(){var w=this.a
w.z=w.Xv(++w.e)
w.Q=A.c1(w.gkS()[w.e].c.length,-1,!1,x.S)
w.y=0
w.at=""},
$S:0}
C.cqI.prototype={
$0(){return A.a5(this.a,!1).hU()},
$S:0}
C.cqJ.prototype={
$2(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i=a3.b,h=a3.d,g=this.a,f=g.gj_().length,e=i/2,d=new C.cqK(i,f,h),a0=g.as,a1=A.a4(a0).k("b8<2>")
a0=A.C(new A.b8(a0,a1),a1.k("M.E"))
a0=A.bR(0,A.c6(new A.hb(a0),new C.cqD(g,new A.r(e,56),f,d),j),0,0,0)
a1=this.b
w=g.gj_().length!==0&&!B.d.q(g.gj_(),-1)
v=x.p
e=A.a([a0,A.ao(j,new C.QN(a1.b,a1.a,76,w,j),j,j,e-50,j,4,j)],v)
for(a0=x.W,a1=x.dN,u=0;u<f;++u)e.push(new A.cK(d.$1(u).a-44,d.$1(u).b-48,j,j,j,j,new S.N_(new C.cqE(g,u),new C.cqF(g,u),new C.cqG(g,u),j,j,new A.bh("slot-"+u,a0),a1),j))
a1=g.at
if(a1.length!==0)e.push(A.ao(j,A.d(a1,j,j,j,j,j,j,A.m(j,j,B.a.q(a1,"not a child")?B.fh:B.bc,j,j,j,j,j,j,j,j,13,j,j,B.H,j,j,!0,j,j,j,j,j,j,j,j),B.K,j,j),j,j,0,0,h*0.76-6,j))
if(g.gj_().length!==0&&!B.d.q(g.gj_(),-1)){a0=g.e+1>=g.gkS().length?"See my result":"Next family"
g=A.as(C.uy(a0,g.gqo(g),B.cT,B.jt,D.fA),j,j,j)}else{a1=A.a([],v)
w=x.gc
v=x.gW
t=x.X
u=0
for(;;){s=g.z
if(!(u<(s===$?g.z=g.Xv(0):s).length))break
if(!B.d.q(g.gj_(),u)){r=""+u
q=g.e
p=g.ax===u?1:0
s=g.z
if(s===$){s=g.z=g.Xv(0)
o=s}else o=s
n=s[u]
n=A.e2(B.A,new C.QN(n.b,o[u].a,62,!0,j),1.15,j,j)
s=g.z
if(s===$){s=g.z=g.Xv(0)
o=s}else o=s
m=s[u]
l=o[u]
k=l.a
a1.push(new A.r6(new A.bq(0,p,t),new C.cqH(),new S.Em(u,j,new C.QN(l.b,k,62,!1,j),new A.kJ(0.25,new C.QN(m.b,k,62,!1,j),j),new A.kc(n,B.ai,!1,0,B.L,j,j,j,j,!0,B.f,B.a3,j,j),B.J,S.hCK(),!0,!0,j,j,j,j,j,j,!1,B.iT,j,new A.bh("chip-"+r,a0),w),B.b0,B.iR,j,new A.bh("t"+r+"-"+q,a0),v))}++u}g=A.bZ(B.fU,a1,B.br,j,6,8)}e.push(A.ao(0,g,j,j,0,0,j,j))
return new A.an(B.a0,j,B.ad,B.t,e,j)},
$S:66}
C.cqK.prototype={
$1(d){return new A.r(this.a*(d+0.5)/this.b,this.c*0.62)},
$S:755}
C.cqD.prototype={
$2(d,e){var w,v,u,t,s,r,q=this,p=null,o=A.a([],x.g)
for(w=q.c,v=q.d,u=0;u<w;++u)o.push(v.$1(u))
v=A.a([],x.n)
for(t=q.a,s=t.as,u=0;u<w;++u){r=s.h(0,u)
if(r==null)r=p
else{r=r.x
r===$&&A.c()}v.push(r==null?0:r)}w=t.gj_().length!==0&&!B.d.q(t.gj_(),-1)
return A.b4(p,p,p,new C.bcI(q.b,o,v,w,p),B.az)},
$S:56}
C.cqF.prototype={
$1(d){return this.a.gj_()[this.b]===-1},
$S:z+30}
C.cqG.prototype={
$1(d){return this.a.cS9(this.b,d.a)},
$S:z+31}
C.cqE.prototype={
$3(d,e,f){var w,v=null,u=this.a,t=this.b,s=u.gj_()[t]!==-1,r=A.l(18),q=e.length!==0?B.cT.j(0.3):B.L
if(s)w=v
else w=A.K(e.length!==0?B.cT:B.k_,B.r,2)
u=s?A.lE(new C.cqC(),A.as(new C.QN(u.gaFF()[u.gj_()[t]].b,u.gaFF()[u.gj_()[t]].a,62,!1,v),v,v,v),B.nl,B.iR,v,v,new A.bq(0.3,1,x.X),x.i):D.bdk
return A.cT(v,u,v,v,B.b0,new A.o(q,v,w,r,v,v,B.n),B.a3,v,100,v,v,v,v,v,88)},
$S:1982}
C.cqC.prototype={
$3(d,e,f){return A.e2(B.A,f,e,null,null)},
$S:112}
C.cqH.prototype={
$3(d,e,f){return A.dP(f,new A.r(Math.sin(e*24)*8*(1-e),0))},
$S:112}
C.cQO.prototype={
$1(d){return d>=1},
$S:121}
C.cFK.prototype={
$1(d){var w=this.a
if(w.c==null||w.as)return
if(w.f<w.gkS()[w.e].d.length)w.m(new C.cFJ(w))},
$S:11}
C.cFJ.prototype={
$0(){return this.a.f++},
$S:0}
C.cFS.prototype={
$0(){var w,v=this.a
v.as=!0
w=this.b
v.ay=w
v.r+=w;++v.w},
$S:0}
C.cFT.prototype={
$0(){var w=this.a,v=this.b
w.z.I(0,v)
w.Q=v},
$S:0}
C.cFU.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new C.cFR(w))},
$S:0}
C.cFR.prototype={
$0(){return this.a.Q=-1},
$S:0}
C.cFV.prototype={
$0(){return this.a.f++},
$S:0}
C.cFW.prototype={
$0(){var w=this.a
w.at=!0
w.x=this.b},
$S:0}
C.cFX.prototype={
$0(){},
$S:0}
C.cFY.prototype={
$0(){var w=this.a;++w.e
w.f=1
w.z.a8(0)
w.as=!1
w.ay=0},
$S:0}
C.cFM.prototype={
$0(){return A.a5(this.a,!1).hU()},
$S:0}
C.cFN.prototype={
$3(d,e,f){var w=null
return A.lE(new C.cFL(this.a,e),w,B.b0,B.hM,w,w,new A.bq(w,this.b,x.X),x.i)},
$S:1983}
C.cFL.prototype={
$3(d,e,f){var w,v=null,u=this.a,t=B.cT.j(u.as?0.6:0.15)
t=A.a([new A.ab(0,B.G,t,B.J,u.as?40:18)],x.V)
w=this.b
return A.p(v,A.hZ(new A.BE(new A.uS(B.w.j(e),B.M7,v,B.YH),H.bXF(A.b4(v,v,v,new C.aBL(u.gkS()[u.e].c,u.as,v),B.az),new A.Er(w,w,B.Wy)),v),B.aq),B.f,v,v,new A.o(v,v,v,v,t,v,B.a7),v,190,v,v,v,v,v,190)},
$S:1984}
C.cFO.prototype={
$3(d,e,f){return A.d3(A.dP(f,new A.r(0,14*(1-e))),e)},
$S:102}
C.cFP.prototype={
$3(d,e,f){return A.dP(f,new A.r(Math.sin(e*22)*8*(1-e),0))},
$S:112}
C.cFQ.prototype={
$0(){return this.a.bqu(this.b)},
$S:0}
C.f87.prototype={
$1(d){var w=d.a/1e6,v=this.a,u=Math.min(0.05,w-v.anl$)
v.anl$=w
v.qa$.sp(0,w)
v.are(u)},
$S:8}
C.fih.prototype={
$1(d){var w=this.a,v=w.c.length,u=Math.min(v,w.d+2)
w.d=u
if(u>=v)d.a1(0)
w.a.$0()},
$S:11}
C.bSZ.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new C.bSY())},
$S:0}
C.bSY.prototype={
$0(){},
$S:0}
C.bSW.prototype={
$0(){return this.a.Q=!0},
$S:0}
C.bSU.prototype={
$0(){},
$S:0}
C.bSV.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.a
if(p.c==null){w=1
break}s=p.x
r=p.gMV()
w=s+1>=r.length?3:5
break
case 3:q=C.bGM(p.gaq3(0),0,r.length)
p.m(new C.bSR(p,q))
o=p
w=6
return A.b(C.BP(p.a.d,q),$async$$0)
case 6:o.z=e
s=p.a
o=p
w=7
return A.b(C.BQ(s.d,s.c.a,"school",p.gaq3(0)*10),$async$$0)
case 7:o.at=e
if(p.c!=null)p.m(new C.bSS())
w=4
break
case 5:p.m(new C.bST(p))
p.gqw().W3(r[p.x].a)
case 4:case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.bSR.prototype={
$0(){var w=this.a
w.as=!0
w.y=this.b},
$S:0}
C.bSS.prototype={
$0(){},
$S:0}
C.bST.prototype={
$0(){return this.a.x++},
$S:0}
C.bSX.prototype={
$0(){return this.a.Ld(this.b)},
$S:0}
C.bSQ.prototype={
$0(){var w=this.a.c
w.toString
return A.a5(w,!1).hU()},
$S:0}
C.f88.prototype={
$0(){var w,v=this,u=v.a,t=46+Math.sin(u*3.1)*8,s=-90+Math.sin(u*4.3)*10,r=new A.r(t,s),q=v.b,p=v.d,o=p?C.hCY(u,1):0,n=v.e,m=n?0.9:0.3
if(n)n=Math.sin(u*9)*2
else n=p?Math.sin(u*4):0
w=p?r:D.Ez
C.SF(q,D.erJ,0,0.2,-0.6,-0.2,null,w,D.eqs,v.c,o,n,1.2,m,0,u,-0.3)
if(p){u=v.f.a5(0,new A.r(Math.sin(u*3)*14,Math.sin(u*2)*6))
$.S()
p=A.L()
p.r=D.Gu.gp(0)
p.c=3
p.d=B.bF
q.ah(new A.r(372+1.2*t,470+1.2*s),u,p)}},
$S:0}
C.f89.prototype={
$0(){var w=this.b,v=this.c,u=v?0.3:0
v=v?Math.max(0,Math.sin(w*1.7))*2:0
return C.SF(this.a,D.eqP,0,u,0.7,-0.5,null,null,D.JQ,5,0,v,1.05,0.3,0,w,0.3)},
$S:0}
C.f8a.prototype={
$0(){var w=this.b,v=this.c?Math.max(0,Math.sin(w*1.9+1))*2.4:0
return C.SF(this.a,D.esv,0,0,0.8,-0.5,null,null,D.JQ,2,0,v,1.2,0.3,0,w,0.35)},
$S:0}
C.f8b.prototype={
$0(){var w=this,v=w.a.b.Q&&!w.d?0.5:0.1
return C.SF(w.b,D.erD,0,v,-0.8,-0.5,null,null,D.JQ,4,0,0,1.2,0.25,0,w.c,-0.35)},
$S:0}
C.f8c.prototype={
$0(){var w,v,u,t,s,r=this,q=r.a,p=q.b,o=p.Q&&!r.b&&p.w.length<=p.x
p=r.c
w=r.d
v=r.e
u=v?0.9:0.3
t=o?0.5:0
s=v?Math.sin(w*9)*2.4:0
if(o)v=new A.r(34,-122+Math.sin(w*5)*5)
else v=v?D.erH:D.Ez
C.SF(p,D.er8,0,t,0,-0.6,null,v,D.JQ,3,0,s,1.3,u,0,w,0)
q=q.ccM(new A.r(222,455),9)
$.S()
w=A.L()
w.r=B.cT.gp(0)
p.ag(q,w)},
$S:0}
C.f8d.prototype={
$2(d,e){return B.j.aS(d.a,e.a)},
$S:763}
C.bSC.prototype={
$2(d,e){return d+e},
$S:63}
C.bSN.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.bSO.prototype={
$0(){return this.a.y=-1},
$S:0}
C.bSP.prototype={
$0(){var w,v,u=this,t=u.a,s=u.c
t.gj_()[u.b]=s
t.gj_()[u.d]=t.y
w=t.as
v=t.qa$
w.n(0,s,v.a+0.5)
w.n(0,t.y,v.a+0.5)
t.y=-1},
$S:0}
C.bSJ.prototype={
$1(d){return d},
$S:98}
C.bSI.prototype={
$0(){var w,v,u=this.a
u.at=!0
w=this.b
u.ax=w
u.y=-1
v=u.qa$
if(w){++u.r
u.CW=v.a+3}else u.cx=v.a+1.6},
$S:0}
C.bSK.prototype={
$0(){var w=this.a
w.ay=!0
w.w=this.b},
$S:0}
C.bSL.prototype={
$0(){},
$S:0}
C.bSM.prototype={
$0(){var w,v,u,t,s=this.a
s.z=s.FM(++s.f)
w=A.a([],x.n)
v=0
for(;;){u=s.z
if(!(v<u.length))break
t=B.d.cn(u,v)
u=s.z
w.push(450*(t+0.5)/u.length);++v}s.Q=w
s.y=-1
s.at=!1
s.as.a8(0)},
$S:0}
C.bSE.prototype={
$0(){return A.a5(this.a,!1).hU()},
$S:0}
C.bSF.prototype={
$2(d,e){var w=this.a
w=w.gkS()[w.f].e
return B.o.aS(w[d],w[e])},
$S:63}
C.bSG.prototype={
$2(d,e){var w=null,v=C.he6(new A.av(A.aS(1/0,e.a,e.b),A.aS(1/0,e.c,e.d))),u=this.a
return A.az(B.bZ,new A.en(A.b4(w,w,w,new C.bjT(u,u.qa$),B.az),w),B.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.bSD(u,v),w,w,w,w,!1,B.a4)},
$S:37}
C.bSD.prototype={
$1(d){var w,v,u,t=d.b,s=this.b,r=s.c,q=(t.b-s.b)/r
if(q>380&&q<760){w=this.a
v=w.gj_().length
u=B.o.D(B.j.bh((t.a-s.a)/r/450*v),0,v-1)
w.d1Y(w.gj_()[u])}},
$S:22}
C.bSH.prototype={
$1(d){var w=this.a
return w.gkS()[w.f].d[d]},
$S:78}
C.ds1.prototype={
$2(d,e){return 0},
$S:63}
C.bSo.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new C.bSn())},
$S:0}
C.bSn.prototype={
$0(){},
$S:0}
C.bSm.prototype={
$0(){},
$S:0}
C.bSg.prototype={
$0(){},
$S:0}
C.bSh.prototype={
$0(){},
$S:0}
C.bSl.prototype={
$0(){var w=this.a
w.ax=this.c
w.r=D.Bn},
$S:0}
C.bSk.prototype={
$1(d){var w=null,v=this.a.gqw(),u=A.d(d,w,w,w,w,w,w,D.aWm,w,w,w),t=v.gbmV(0)
return A.az(B.bZ,A.x(A.a([u,B.bE,A.d(t+(v.d<v.c.length?"\u258d":""),w,w,w,w,w,w,D.aWA,w,w,w)],x.p),B.E,w,B.e,B.h,0,B.p),B.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,v.gbsR(v),w,w,w,w,w,w,!1,B.a4)},
$S:144}
C.bSi.prototype={
$0(){return this.a.Ld(this.b)},
$S:0}
C.bSj.prototype={
$0(){var w=this.a.c
w.toString
return A.a5(w,!1).hU()},
$S:0}
C.bSf.prototype={
$0(){return A.a5(this.a,!1).hU()},
$S:0}
C.e2p.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.e2q.prototype={
$1(d){return this.a},
$S:39}
C.e2r.prototype={
$0(){var w=this.a
return w.d=w.gT2().bfk(this.b)},
$S:0}
C.e2n.prototype={
$1(d){return new C.U4(this.a,null)},
$S:z+32}
C.e2o.prototype={
$1(d){return d.a===this.a.a},
$S:z+33}
C.e2m.prototype={
$1(d){var w=null,v=this.a.b
v=A.d('"'+(v.length===0?"Untitled":v)+'" will be removed for everyone in the family.',w,w,w,w,w,w,B.hr,w,w,w)
return A.ej(A.a([A.bO(!1,E.aXY,w,w,!0,w,w,w,new C.e2k(d),w,w),A.bO(!1,D.fWD,w,w,!0,w,w,w,new C.e2l(d),w,w)],x.p),w,w,D.fA,v,w,w,w,w,D.fJ6,w)},
$S:18}
C.e2k.prototype={
$0(){A.a5(this.a,!1).N(!1)
return null},
$S:0}
C.e2l.prototype={
$0(){A.a5(this.a,!1).N(!0)
return null},
$S:0}
C.e2j.prototype={
$0(){var w=null,v=this.a.c.L(x.q).f,u=this.b
return v.T(A.b2(w,w,w,w,w,B.t,w,A.d(u==null?"Not ready yet.":u,w,w,w,w,w,w,w,w,w,w),w,B.Y,w,w,w,w,w,w,w,w,w,w))},
$S:0}
C.e2s.prototype={
$1(d){var w=this.a.f,v=w.h(0,d)
return(v==null?0:v)>0?"Best "+A.w(w.h(0,d)):"NEW"},
$S:13}
C.e2t.prototype={
$0(){var w=this.a,v=this.b,u=C.bEu(v,10,w.r,!1)
return w.uC(C.hn6(w.a.d,"kahoot",u,w.gb6U(),v.b,"Family Kahoot",v.a))},
$S:0}
C.e2u.prototype={
$0(){var w=this.a
return w.uC(new C.am6(this.b,w.a.d,w.r,null))},
$S:0}
C.e2v.prototype={
$0(){var w=this.a
return w.uC(new C.akj(this.b,w.a.d,w.r,null))},
$S:0}
C.e2y.prototype={
$0(){var w=this.a
return w.uC(new C.av3(this.b,w.a.d,w.r,null))},
$S:0}
C.e2z.prototype={
$0(){var w=this.a
return w.uC(new C.az0(this.b,w.a.d,w.r,null))},
$S:0}
C.e2A.prototype={
$0(){var w=this.a
return w.uC(new C.am9(this.b,w.a.d,w.r,null))},
$S:0}
C.e2B.prototype={
$0(){var w=this.a
return w.uC(new C.amd(this.b,w.a.d,w.r,null))},
$S:0}
C.e2C.prototype={
$0(){var w=this.a
return w.uC(new C.amf(this.b,w.a.d,w.r,null))},
$S:0}
C.e2D.prototype={
$0(){var w,v=this.a,u=this.b,t=B.a.i(u.b)
if(t.length===0)t="Family game"
w=u.d2i()
return v.uC(C.hn6(v.a.d,"creator_"+u.a,w,v.gb6U(),"A game by the family",t,this.c.a))},
$S:0}
C.e2E.prototype={
$0(){return this.a.P_(this.b)},
$S:0}
C.e2F.prototype={
$0(){return this.a.XX(0,this.b)},
$S:0}
C.e2w.prototype={
$0(){return this.a.P_(null)},
$S:0}
C.e2x.prototype={
$0(){return this.a.L(x.q).f.T(D.fmo)},
$S:0}
C.bSA.prototype={
$0(){var w=this.a
w.d=D.b1r
w.z=3},
$S:0}
C.bSB.prototype={
$1(d){var w=this.a
if(w.z<=1){d.a1(0)
w.aQ7()}else w.m(new C.bSz(w))},
$S:11}
C.bSz.prototype={
$0(){return this.a.z--},
$S:0}
C.bSq.prototype={
$0(){var w=this.a
w.d=D.ads
w.y=-1
w.as=w.a.w[w.e].r},
$S:0}
C.bSr.prototype={
$1(d){var w=this.a
if(w.c==null)return
w.m(new C.bSp(w))
if(w.as<=0){d.a1(0)
w.b6Q(-1)}},
$S:11}
C.bSp.prototype={
$0(){var w=this.a
return w.as=Math.max(0,w.as-0.1)},
$S:0}
C.bSw.prototype={
$0(){var w=this.b
w.y=this.c
w.Q=this.a.a
w.d=D.Xe},
$S:0}
C.bSx.prototype={
$0(){return this.a.e++},
$S:0}
C.bSt.prototype={
$0(){var w=this.a
w.d=D.b1s
w.ay=this.b},
$S:0}
C.bSu.prototype={
$0(){var w=this.a
w.ch=this.b
w.CW=this.c},
$S:0}
C.bSy.prototype={
$2(d,e){return B.o.aS(e.b,d.b)},
$S:1985}
C.bSv.prototype={
$0(){return this.a.Ld(this.b)},
$S:0}
C.bSs.prototype={
$0(){var w=this.a.c
w.toString
return A.a5(w,!1).hU()},
$S:0}
C.bS0.prototype={
$0(){var w,v,u,t=this.a,s=t.a,r=$.ax()
s=A.a([new A.au(new A.ba(s,B.b6,B.aP),r)],x.cF)
for(t=t.b,w=t.length,v=0;v<t.length;t.length===w||(0,A.I)(t),++v){u=t[v]
s.push(new A.au(new A.ba(u,B.b6,B.aP),r))}return s},
$S:1986}
C.bS1.prototype={
$0(){return this.a.gDa().c.push(C.h7U(null,0,20,""))},
$S:0}
C.bSb.prototype={
$1(d){var w=null
return A.bz(w,new A.b6(4,A.l(12),B.a1),w,w,w,w,w,w,!0,w,w,w,w,w,w,B.dq,!0,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,!0,w,B.W5,d,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w)},
$S:249}
C.bSa.prototype={
$1(d){var w,v,u,t,s,r,q,p=null,o=this.a,n=o.gDa().c,m=this.b,l=n[m],k=o.cfP(l),j=B.c.j(0.06),i=A.l(18),h=A.K(B.aT,B.r,1),g=x.p,f=A.a([A.d("Question "+(m+1),p,p,p,p,p,p,D.L4,p,p,p),B.b3],g)
if(n.length>1)f.push(A.aH(p,p,p,p,B.as8,p,p,p,new C.bS5(o,m),p,p,p,p,p,p))
n=J.a7(k)
m=this.c
f=A.a([A.A(f,B.l,p,B.e,B.h,0,p,p),A.aN(p,B.Z,!1,p,!0,B.t,p,A.aO(),n.h(k,0),p,p,p,p,p,2,m.$1("The question"),B.y,!0,p,!0,p,!1,p,B.ak,p,p,p,p,p,p,p,p,p,1,p,p,!1,"\u2022",p,new C.bS6(l),p,p,p,!1,p,p,!1,p,!0,p,B.ac,p,p,p,p,p,p,p,p,p,p,p,B.dj,!0,B.a6,p,B.ao,p,p,p,p),B.P],g)
for(w=x.fo,v=0;v<4;v=s){u=D.aE4[v]
t=D.aDL[v]
s=v+1
f.push(new A.D(B.eP,new A.c7(B.aL,B.e,B.h,B.l,p,B.p,p,0,A.a([A.d(u,p,p,p,p,p,p,new A.F(!0,t,p,p,p,p,22,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p),p,p,p),B.ae,new A.by(1,B.ba,A.aN(p,B.Z,!1,p,!0,B.t,p,A.aO(),n.h(k,s),p,p,p,p,p,2,m.$1("Answer "+s),B.y,!0,p,!0,p,!1,p,B.ak,p,p,p,p,p,p,p,p,p,1,p,p,!1,"\u2022",p,new C.bS7(l,v),p,p,p,!1,p,p,!1,p,!0,p,B.ac,p,p,p,p,p,p,p,p,p,p,p,B.dj,!0,B.a6,p,B.ao,p,p,p,p),p),new At.Pr(v,l.c,new C.bS8(o,l),p,!1,D.lG,p,p,p,p,p,!1,!1,p,I.b1R,p,p,p,p,p,w)],g),p),p))}f.push(D.fOG)
f.push(B.am)
n=A.a([D.fIb,B.ae],g)
for(r=0;r<3;++r){q=D.cfM[r]
n.push(new A.D(B.fn,A.jz(p,p,p,A.d(""+q+"s",p,p,p,p,p,p,p,p,p,p),p,new C.bS9(o,l,q),l.d===q,p,p,p,p),p))}f.push(A.A(n,B.l,p,B.e,B.h,0,p,p))
return A.p(p,A.x(f,B.E,p,B.e,B.h,0,B.p),B.f,p,p,new A.o(j,p,h,i,p,p,B.n),p,p,p,B.ky,B.bj,p,p,p)},
$S:153}
C.bS5.prototype={
$0(){var w=this.a
return w.m(new C.bS4(w,this.b))},
$S:0}
C.bS4.prototype={
$0(){return B.d.cG(this.a.gDa().c,this.b)},
$S:0}
C.bS6.prototype={
$1(d){return this.a.a=d},
$S:2}
C.bS7.prototype={
$1(d){this.a.b[this.b]=d
return d},
$S:2}
C.bS8.prototype={
$1(d){return this.a.m(new C.bS3(this.b,d))},
$S:159}
C.bS3.prototype={
$0(){var w=this.b
if(w==null)w=0
return this.a.c=w},
$S:0}
C.bS9.prototype={
$1(d){return this.a.m(new C.bS2(this.b,this.c))},
$S:9}
C.bS2.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.e44.prototype={
$0(){var w=this.a
w.wy()
w.a.bv()
w.a.qp()},
$S:0}
C.e43.prototype={
$0(){var w=this.a
w.wy()
w.a.bv()
w.a.qp()},
$S:0}
C.e46.prototype={
$0(){var w=this,v=w.b
if(J.cJ(v)||J.ct(w.a.d))w.a.d=v
w.a.e=!1},
$S:0}
C.e47.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.e48.prototype={
$0(){return this.a.e=!1},
$S:0}
C.e42.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.e45.prototype={
$1(d){return d.a===this.a.a},
$S:z+3}
C.e4a.prototype={
$0(){this.a.Pl()
return null},
$S:0}
C.e49.prototype={
$0(){return this.a.F5(this.b)},
$S:0}
C.e3v.prototype={
$1(d){var w=null,v=this.a,u=A.d(v?"Make private?":"Make public?",w,w,w,w,w,w,w,w,w,w),t=A.d(v?"Private trees are only visible to the owner and invited collaborators.":"Public trees appear in Family Trees for every NGMY user (view only for others).",w,w,w,w,w,w,w,w,w,w),s=A.bO(!1,B.ds,w,w,!0,w,w,w,new C.e3t(d),w,w),r=A.bo(B.bQ,w,w,w,w,w,w,w,w,w,w,w)
return A.ej(A.a([s,A.bI(A.d(v?"Make private":"Make public",w,w,w,w,w,w,w,w,w,w),w,new C.e3u(d),r)],x.p),w,w,w,t,w,w,w,w,u,w)},
$S:18}
C.e3t.prototype={
$0(){A.a5(this.a,!1).N(!1)
return null},
$S:0}
C.e3u.prototype={
$0(){A.a5(this.a,!1).N(!0)
return null},
$S:0}
C.e3w.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
return w.d=v.cOM(this.b)},
$S:0}
C.e3q.prototype={
$1(d){var w=this,v=w.a
if(v.c!=null)v.aVJ(w.b,w.c,w.d)},
$S:8}
C.e2S.prototype={
$1(d){return d.a===this.a.a.w.a},
$S:z+3}
C.e2T.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.e39.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
r=A
q=J
w=2
return A.b(C.Hj(t.a.c),$async$$0)
case 2:s=r.nA(q.dH(e,new C.e37(t)))
if(s!=null&&t.c!=null)t.m(new C.e38(t,s))
t.a.bv()
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.e37.prototype={
$1(d){var w=this.a.d
w===$&&A.c()
return d.a===w.a},
$S:z+3}
C.e38.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.e3a.prototype={
$1(d){var w=this.a.d
w===$&&A.c()
return d.a===w.a},
$S:z+3}
C.e3b.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.e3p.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&A.c()
w=this.b
v.d=u.cPy(C.hD7(w),w)},
$S:0}
C.e36.prototype={
$1(d){var w,v=this.a,u=v.d
u===$&&A.c()
w=v.a.c
return new C.Wp(u,w,C.aRb(u,w),new C.e35(v),null)},
$S:z+37}
C.e35.prototype={
$1(d){return this.bok(d)},
bok(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.a
if(s.c==null){w=1
break}s.m(new C.e34(s,d))
w=3
return A.b(s.uy(),$async$$1)
case 3:case 1:return A.h(u,v)}})
return A.i($async$$1,v)},
$S:546}
C.e34.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
return w.d=v.bfk(this.b)},
$S:0}
C.e3m.prototype={
$1(d){return d.as},
$S:z+1}
C.e3n.prototype={
$1(d){var w=this
return new A.e1(new C.e3l(w.a,w.b,w.c,w.d,w.e),null)},
$S:21}
C.e3l.prototype={
$2(a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.c.a,i=j?B.ee:B.c,h=A.l(26),g=A.K(B.bQ.j(0.5),B.r,1.5),f=A.p(k,D.bVu,B.f,k,k,new A.o(B.bQ.j(0.18),k,k,k,k,k,B.a7),k,42,k,k,k,k,k,42),e=A.d("Tree display settings",k,k,k,k,k,k,A.m(k,k,j?B.aS:B.av,k,k,k,k,k,k,k,k,18,k,k,B.u,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),d=l.b,a0=d.d
a0===$&&A.c()
w=x.p
a0=A.E(A.x(A.a([e,A.d(a0.b,k,1,B.a2,k,k,k,A.m(k,k,j?B.bu:B.bh,k,k,k,k,k,k,k,k,12.5,k,k,B.O,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)],w),B.E,k,B.e,B.h,0,B.p),1)
f=A.A(A.a([f,B.bb,a0,A.aH(k,k,k,k,A.W(B.cA,j?B.bu:B.bh,k,k,k,k),k,k,k,new C.e3f(a1),k,k,k,k,k,k)],w),B.l,k,B.e,B.h,0,k,k)
e=A.d("CHILDREN SHOWN UNDER EACH PARENT",k,k,k,k,k,k,A.m(k,k,j?B.bu:B.bh,k,k,k,k,k,k,k,k,11,k,k,B.u,k,k,!0,k,1,k,k,k,k,k,k),k,k,k)
a0=A.a([],w)
for(v=l.d,u=v.length,t=l.a,s=0;s<v.length;v.length===u||(0,A.I)(v),++s){r=v[s]
q=t.a===r?B.bQ:B.bQ.j(0.1)
p=new A.aP(20,20)
o=t.a===r
n=new A.ay(B.bQ,o?2:1,B.r,-1)
m=r===0?"Show all":""+r
o=o?B.c:B.bQ
a0.push(A.az(k,A.cT(k,A.d(m,k,k,k,k,k,k,new A.F(!0,o,k,k,k,k,14,B.u,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k),k,k,k),k,k,B.b0,new A.o(q,k,new A.bF(n,n,n,n),new A.be(p,p,p,p),k,k,B.n),B.h8,k,k,k,k,B.CE,k,k,k),B.y,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,new C.e3g(t,a2,r),k,k,k,k,k,k,!1,B.a4))}a0=A.bZ(B.bH,a0,B.br,k,8,8)
v=t.a
v=v===0?"Every child shows in the tree.":"Only "+v+' children show under a parent. The rest wait in a "+ more" dropdown.'
f=A.a([D.c6F,new A.D(D.bFG,f,k),new A.D(D.bFx,e,k),new A.D(B.t7,a0,k),new A.D(X.anq,A.d(v,k,k,k,k,k,k,A.m(k,k,j?B.bu:B.bh,k,k,k,k,k,k,k,k,12.5,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),k,k,k),k)],w)
e=l.e
if(e>0){a0=A.W(Aj.aq2,j?B.bu:B.bh,k,k,k,20)
v=e===1?"person":"people"
f.push(new A.D(D.bFz,A.A(A.a([a0,B.as,A.E(A.d(""+e+" hidden "+v,k,k,k,k,k,k,A.m(k,k,j?B.aS:B.av,k,k,k,k,k,k,k,k,k,k,k,B.H,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),1),A.b9l(k,B.bQ,k,k,!1,B.y,k,k,k,k,k,k,new C.e3h(d,a2),k,k,k,k,k,k,k,k,d.f)],w),B.l,k,B.e,B.h,0,k,k),k))}f.push(B.aB)
j=A.l(20)
e=A.a([new A.ab(0,B.G,B.aC.j(0.35),B.i4,12)],x.V)
f.push(A.az(k,A.p(k,A.A(A.a([D.fIw,B.bb,D.bJX,D.bW9],w),B.l,k,B.e,B.h,0,k,k),B.f,k,k,new A.o(k,k,k,j,e,D.cat,B.n),k,k,k,B.i_,B.bI,k,k,k),B.y,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,new C.e3i(t,a1),k,k,k,k,k,k,!1,B.a4))
f.push(new A.D(B.wB,A.A(A.a([A.E(A.dV(B.ds,new C.e3j(a1),k),1),B.as,A.E(A.bI(M.aYo,k,new C.e3k(t,a1),A.bo(B.bQ,k,k,k,k,k,B.co,k,k,k,k,k)),1)],w),B.l,k,B.e,B.h,0,k,k),k))
return A.bm(!0,A.p(k,A.c9(A.x(f,B.E,k,B.e,B.N,0,B.p),B.t,k,B.y,k,k,k,k,B.ah),B.aq,k,k,new A.o(i,k,g,h,k,k,B.n),k,k,k,B.yP,k,k,k,k),!0,!1,B.ag,!0,!0)},
$S:90}
C.e3f.prototype={
$0(){A.a5(this.a,!1).N(null)
return null},
$S:0}
C.e3g.prototype={
$0(){return this.b.$1(new C.e3e(this.a,this.c))},
$S:0}
C.e3e.prototype={
$0(){return this.a.a=this.b},
$S:0}
C.e3h.prototype={
$1(d){var w=this.a
w.m(new C.e3c(w,d))
this.b.$1(new C.e3d())},
$S:9}
C.e3c.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.e3d.prototype={
$0(){},
$S:0}
C.e3i.prototype={
$0(){var w=this.a.a
A.a5(this.b,!1).N(new A.aHS(!0,w))
return null},
$S:0}
C.e3j.prototype={
$0(){A.a5(this.a,!1).N(null)
return null},
$S:0}
C.e3k.prototype={
$0(){var w=this.a.a
A.a5(this.b,!1).N(new A.aHS(!1,w))
return null},
$S:0}
C.e3o.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
w.d=v.cPm(this.b.b)
w.r.a8(0)},
$S:0}
C.e2G.prototype={
$1(d){var w,v,u,t=this.a,s=t.d
s===$&&A.c()
s=C.aj6(s)
w=t.d
t=t.a
v=t.c
u=t.d
return C.hwk(t.e,this.b,null,t.f,t.r,null,s,"Add Member",w,u,v)},
$S:z+18}
C.e2H.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&A.c()
w=A.C(u.f,x.P)
w.push(this.b)
v.d=u.aG9(w)},
$S:0}
C.e3y.prototype={
$1(d){var w=this.a.d
w===$&&A.c()
return new C.aeu(this.b,w,this.c,null)},
$S:z+39}
C.e3s.prototype={
$1(d){var w=null,v=this.a.a,u=v?B.ee:B.c,t=A.l(20),s=A.W(B.kZ,B.aV,w,w,w,36),r=A.d("Almost there",w,w,w,w,w,w,A.m(w,w,v?B.aS:B.av,w,w,w,w,w,w,w,w,w,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),B.K,w,w),q=this.b,p=q?"To remove a shared family tree from this phone, first create your own family tree in NGMY.":"To remove a shared family tree, you also need an active Family Tree photo pass.",o=x.p
p=A.a([A.d(p,w,w,w,w,w,w,A.m(w,w,v?B.bu:B.bh,w,w,w,w,w,w,w,w,14,w,w,w,w,1.45,!0,w,w,w,w,w,w,w,w),B.K,w,w)],o)
if(this.c&&!q)B.d.u(p,A.a([B.af,A.d("Photo access lets you upload member photos on trees you create. You can get it from any member profile when adding a photo.",w,w,w,w,w,w,A.m(w,w,v?B.bu:B.bh,w,w,w,w,w,w,w,w,12,w,w,w,w,1.4,!0,w,w,w,w,w,w,w,w),B.K,w,w)],o))
v=A.x(p,B.l,w,B.e,B.N,0,B.p)
return A.ej(A.a([A.bI(D.h_p,w,new C.e3r(d),A.bo(B.aV,w,w,w,w,w,w,w,w,w,w,w))],o),B.b8,w,u,v,w,s,w,new A.b9(t,B.a1),r,w)},
$S:18}
C.e3r.prototype={
$0(){A.a5(this.a,!1).N(null)
return null},
$S:0}
C.e2I.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
C.e2J.prototype={
$1(d){return d.e===this.a.a},
$S:z+1}
C.e2K.prototype={
$1(d){return d.a},
$S:z+8}
C.e2L.prototype={
$0(){var w,v,u,t,s,r,q,p,o,n,m=this,l=m.a,k=l.d
k===$&&A.c()
w=A.a([],x.u)
for(v=m.b,u=v.length,t=m.c.a,s=m.d,r=0;r<v.length;v.length===u||(0,A.I)(v),++r){q=v[r]
p=q.a
if(p!==t){o=q.d
if(o===t)o=s
n=q.e
if(n===t)n=null
w.push(new C.i_(p,q.b,q.c,o,n,q.f,q.r,q.w,q.x,q.y,q.z,q.Q,q.as,q.at))}}l.d=k.aG9(w)},
$S:0}
C.e2P.prototype={
$1(d){var w,v,u,t,s=this.a,r=this.b,q=s.d
q===$&&A.c()
q=C.aj6(q)
w=A.U(q).k("Y<1>")
q=A.C(new A.Y(q,new C.e2N(r),w),w.k("M.E"))
w=s.d
v=s.a
u=v.c
t=v.d
return C.hwk(v.e,null,r,v.f,v.r,new C.e2O(s,r),q,"Member Profile",w,t,u)},
$S:z+18}
C.e2O.prototype={
$0(){return this.a.abh(this.b)},
$S:0}
C.e2N.prototype={
$1(d){return d.a!==this.a.a},
$S:z+1}
C.e2Q.prototype={
$0(){var w,v,u=this.a,t=u.d
t===$&&A.c()
w=t.f
v=A.U(w).k("N<1,i_>")
w=A.C(new A.N(w,new C.e2M(this.b),v),v.k("ak.E"))
u.d=t.aG9(w)},
$S:0}
C.e2M.prototype={
$1(d){var w=this.a
return d.a===w.a?w:d},
$S:z+41}
C.e3x.prototype={
$0(){var w=this.a
return w.d=w.e.pop()},
$S:0}
C.e31.prototype={
$1(d){return d.length!==0},
$S:3}
C.e32.prototype={
$1(d){var w=this
return new A.e1(new C.e30(w.a,w.b,w.c,w.d),null)},
$S:21}
C.e30.prototype={
$2(d,e){var w=this,v=null,u=w.b,t=u.a,s=t?B.ee:B.c,r=A.d("Collaborators",v,v,v,v,v,v,A.m(v,v,t?B.aS:B.av,v,v,v,v,v,v,v,v,v,v,v,B.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),q=x.p,p=A.a([A.d("Invited users can edit this tree and add members. QR/file recipients stay view-only.",v,v,v,v,v,v,A.m(v,v,t?B.bu:B.bh,v,v,v,v,v,v,v,v,12,v,v,v,v,1.35,!0,v,v,v,v,v,v,v,v),v,v,v),B.af],q),o=w.c
if(o.length===0)p.push(A.d("No collaborators yet.",v,v,v,v,v,v,A.m(v,v,t?B.bu:B.bh,v,v,v,v,v,v,v,v,13,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v))
else B.d.u(p,new A.N(o,new C.e2X(u,e,o),A.U(o).k("N<1,v>")))
p.push(B.P)
u=w.d
p.push(A.aN(v,B.Z,!1,v,!0,B.t,v,A.aO(),u,v,v,v,v,v,2,A.bz(v,new A.b6(4,A.l(12),B.du),v,v,v,v,v,v,!0,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,"friend@email.com",v,v,v,v,v,v,v,v,"Invite by email",!0,!0,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v),B.y,!0,v,!0,v,!1,v,B.ak,v,v,v,v,v,B.mC,v,v,v,1,v,v,!1,"\u2022",v,v,v,v,v,!1,v,v,!1,v,!0,v,B.ac,v,v,v,v,v,v,v,v,v,v,v,v,!0,B.a6,v,B.ao,v,v,v,v))
p=A.x(p,B.al,v,B.e,B.N,0,B.p)
t=w.a
return A.ej(A.a([A.bO(!1,B.ds,v,v,!0,v,v,v,new C.e2Y(d),v,v),A.bI(B.Lg,v,new C.e2Z(t,u,o,e),A.bo(B.bQ,v,v,v,v,v,v,v,v,v,v,v)),A.bI(D.fN2,v,new C.e3_(t,u,o,d),A.bo(B.aV,v,v,v,v,v,v,v,v,v,v,v))],q),v,v,s,new A.a3(360,v,p,v),v,v,v,v,r,v)},
$S:220}
C.e2X.prototype={
$1(d){var w=null
return A.dI(!1,B.ag,w,w,!0,w,w,w,!0,w,w,w,w,w,w,w,w,!1,w,w,w,w,w,w,w,A.d(d,w,w,w,w,w,w,A.m(w,w,this.a.a?B.aS:B.av,w,w,w,w,w,w,w,w,w,w,w,B.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w,A.aH(w,w,w,w,D.c3u,w,w,w,new C.e2W(this.b,this.c,d),w,w,w,w,w,w),w)},
$S:1987}
C.e2W.prototype={
$0(){return this.a.$1(new C.e2U(this.b,this.c))},
$S:0}
C.e2U.prototype={
$0(){return B.d.W(this.a,this.b)},
$S:0}
C.e2Y.prototype={
$0(){A.a5(this.a,!1).N(!1)
return null},
$S:0}
C.e2Z.prototype={
$0(){var w=this,v=w.b,u=B.a.i(v.a.a.toLowerCase())
if(u.length!==0&&!B.d.q(w.c,u)&&u!==B.a.i(w.a.a.c.toLowerCase())){w.d.$1(new C.e2V(w.c,u))
v.bP(0,B.cf)}},
$S:0}
C.e2V.prototype={
$0(){return this.a.push(this.b)},
$S:0}
C.e3_.prototype={
$0(){var w=this,v=B.a.i(w.b.a.a.toLowerCase())
if(v.length!==0&&!B.d.q(w.c,v)&&v!==B.a.i(w.a.a.c.toLowerCase()))w.c.push(v)
A.a5(w.d,!1).N(!0)},
$S:0}
C.e33.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
w.d=v.cQ0(this.b,D.uO,C.Hh(v,w.a.c))},
$S:0}
C.e3F.prototype={
$1(d){return d.as},
$S:z+1}
C.e3G.prototype={
$0(){var w=this.a.d
w===$&&A.c()
return A.j2(this.b,w)},
$S:0}
C.e3H.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
v=C.isO(v)
return w.WK(v==null?null:v.a)},
$S:0}
C.e3I.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m=null,l=this.a,k=l.d
k===$&&A.c()
w=l.r
v=C.i4Q(k,w,l.f)
u=v.d+32
t=v.e+32
k=v.a
if(k.gcm(k)){k=A.aS(1/0,e.a,e.b)
s=A.aS(1/0,e.c,e.d)
l.cxc(new A.av(u,t),v.gbm0(),new A.av(k,s))}k=A.l(22)
s=this.b.a
r=s?D.d3E:D.d1L
q=A.K(s?B.dq:D.bl5,B.r,1)
p=A.l(22)
o=A.bR(0,A.b4(m,m,m,new C.bg0(s,m),B.az),0,0,0)
n=Math.max(e.b,e.d)
return A.p(m,A.bu(p,new A.an(B.a0,m,B.ad,B.t,A.a([o,A.bR(0,A.v2(new A.Q(n,n,n,n),new A.a3(u,t,new C.bgW(l.d,v,l.f,w,new C.e3B(l),l.gch0(),m),m),!1,3,0.2,!0,!0,l.w),0,0,0),A.ao(10,new C.byL(s,new C.e3C(l,e),new C.e3D(l,e),new C.e3E(l,e,u,t,v),m),m,m,m,10,m,m)],x.p),m),B.aq),B.f,m,m,new A.o(m,m,q,k,m,new A.a8(B.aZ,B.b4,B.x,r,m,m),B.n),m,m,m,Z.amv,m,m,m,m)},
$S:177}
C.e3B.prototype={
$1(d){var w=this.a
w.m(new C.e3z(w,d))},
$S:2}
C.e3z.prototype={
$0(){var w=this.a.r,v=this.b
if(w.q(0,v))w.W(0,v)
else w.I(0,v)},
$S:0}
C.e3C.prototype={
$0(){var w=this.b
return this.a.bdu(1.25,new A.av(A.aS(1/0,w.a,w.b),A.aS(1/0,w.c,w.d)))},
$S:0}
C.e3D.prototype={
$0(){var w=this.b
return this.a.bdu(0.8,new A.av(A.aS(1/0,w.a,w.b),A.aS(1/0,w.c,w.d)))},
$S:0}
C.e3E.prototype={
$0(){var w=this,v=w.b
return w.a.aVJ(new A.av(A.aS(1/0,v.a,v.b),A.aS(1/0,v.c,v.d)),new A.av(w.c,w.d),w.e.gbm0())},
$S:0}
C.e3J.prototype={
$0(){var w=this.a
return w.m(new C.e3A(w))},
$S:0}
C.e3A.prototype={
$0(){var w=this.a
return w.f=!w.f},
$S:0}
C.e2R.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.d
s===$&&A.c()
w=2
return A.b(A.fI(new A.fy(s.c)),$async$$0)
case 2:t.yz("Tree code copied.")
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dhu.prototype={
$1(d){var w=null,v=d.b,u=v.a,t=v.b
v=this.a
return A.ao(w,new C.bkK(u,C.hHN(v.c,u),new C.dht(v,u),w),w,w,t.a-42,w,t.b,w)},
$S:z+42}
C.dht.prototype={
$0(){return this.a.w.$1(this.b)},
$S:0}
C.dhv.prototype={
$1(d){var w=null,v=d.b,u=this.a
return A.ao(w,new C.bo5(d.d,d.c,u.f.q(0,d.a),new C.dhs(u,d),u.w,w),w,w,v.a-42,w,v.b,w)},
$S:z+43}
C.dhs.prototype={
$0(){return this.a.r.$1(this.b.a)},
$S:0}
C.fIp.prototype={
$1(d){var w,v=d.e
if(this.a.am(0,v))return v
v=this.b
w=A.U(v)
return A.nA(new A.cM(new A.Y(v,new C.fIq(d),w.k("Y<1>")),new C.fIr(),w.k("cM<1,n>")))},
$S:z+19}
C.fIq.prototype={
$1(d){return d.e===this.a.a},
$S:z+1}
C.fIr.prototype={
$1(d){return d.a},
$S:z+8}
C.fIn.prototype={
$1(d){return d.d===this.a.a&&d.a!==this.b},
$S:z+1}
C.fIo.prototype={
$1(d){return d.b},
$S:z+8}
C.fIu.prototype={
$1(d){var w,v=d.e
if(this.a.am(0,v))return v
v=this.b
w=A.U(v)
return A.nA(new A.cM(new A.Y(v,new C.fIv(d),w.k("Y<1>")),new C.fIw(),w.k("cM<1,n>")))},
$S:z+19}
C.fIv.prototype={
$1(d){return d.e===this.a.a},
$S:z+1}
C.fIw.prototype={
$1(d){return d.a},
$S:z+8}
C.fIs.prototype={
$1(d){var w,v=A.et([d.a],x.N),u=this.a,t=d,s=0
for(;;){w=t.d
if(!(w!=null&&u.am(0,w)&&v.I(0,w)))break
w=u.h(0,w)
w.toString;++s
t=w}return s},
$S:z+45}
C.fIt.prototype={
$1(d){return this.a.h(0,d.a)===this.b},
$S:z+1}
C.dhx.prototype={
$0(){return this.a},
$S:z+46}
C.dhO.prototype={
$1(d){return d!=null&&d.length!==0&&this.a.am(0,d)},
$S:247}
C.dhG.prototype={
$2(d,e){var w=this.a.c3(0,d,new C.dhH()),v=J.a7(w)
if(!v.q(w,e))v.I(w,e)},
$S:123}
C.dhH.prototype={
$0(){return A.a([],x.s)},
$S:765}
C.dhF.prototype={
$2(d,e){var w=this.a.h(0,d)
w=w==null?null:J.eK(w,e)
return w===!0},
$S:285}
C.dhy.prototype={
$0(){return A.a([],x.u)},
$S:z+16}
C.dhE.prototype={
$1(d){var w=d.d
return this.a.$1(w)&&w!==d.a},
$S:z+1}
C.dhD.prototype={
$2(d,e){var w,v,u,t,s=this
if(!e.I(0,d))return 0
w=s.a
v=w.h(0,d)
v=J.aT(v==null?D.DV:v)
u=1
while(v.C())u+=s.$2(v.gR(v).a,e)
v=s.b.h(0,d)
v=J.aT(v==null?B.Z:v)
while(v.C()){t=v.gR(v)
if(e.q(0,t))continue
e.I(0,t)
t=w.h(0,t)
t=J.aT(t==null?D.DV:t)
while(t.C())u+=s.$2(t.gR(t).a,e)}return u},
$S:1989}
C.dhz.prototype={
$1(d){return!this.a.$1(d)},
$S:z+1}
C.dhI.prototype={
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
break}A:{s=u.gR(u)
if(a8.q(0,s)||t===s)break A
break}}u=s!=null
if(u){a8.I(0,s)
w.n(0,s,b0)
a7.e.n(0,a9,s)}w=A.a([],x.u)
t=a7.f
r=t.h(0,a9)
if(r!=null)B.d.u(w,r)
if(u){t=t.h(0,s)
t=J.aT(t==null?D.DV:t)
while(t.C()){r=t.gR(t)
if(r.a!==a9&&!B.d.aV(w,new C.dhJ(r)))w.push(r)}}B.d.bq(w,new C.dhK(a8))
B.d.aZ(w,new C.dhL())
q=C.i4P(a7.r,v,w,a7.w)
p=u?95:42
o=A.a([],x.d4)
n=A.a([],x.eU)
for(w=q.c,v=w.length,u=b0+1,m=0;m<w.length;w.length===v||(0,A.I)(w),++m){t=w[m].a
if(a8.q(0,t))continue
o.push(t)
n.push(a7.$2(t,u))}if(q.a){o.push(null)
n.push(A.a([D.eYk],x.G))}a8=A.a([],x.s)
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
else a8.n(0,a9,new A.brc(a3,w))
i=n[a2]
for(f=0;f<i.length;){u=i[f]
a5=a3+u.a
a6=a3+u.b;++f
if(f<a1.length){u=a1[f]
a1[f]=new A.y(Math.min(u.a,a5),Math.max(u.b,a6))}else a1.push(new A.y(a5,a6))}}return a1},
$S:1990}
C.dhJ.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
C.dhK.prototype={
$1(d){return this.a.q(0,d.a)},
$S:z+1}
C.dhL.prototype={
$2(d,e){return B.o.aS(d.Q,e.Q)},
$S:z+7}
C.dhM.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o=this,n=o.a.$2(d,e),m=o.b
if(m.length!==0){for(w=J.a7(n),v=o.c,u=-1/0,t=0;t<w.gJ(n);++t){s=v.h(0,e+t)
if(s==null)continue
u=Math.max(u,s+88-w.h(n,t).a)}if(u===-1/0)u=new A.b8(v,A.a4(v).k("b8<2>")).cE(0,0,B.qa)+88-w.gH(n).a}else u=0
for(w=J.a7(n),v=o.c,t=0;t<w.gJ(n);++t){r=w.h(n,t)
q=e+t
p=v.h(0,q)
if(p==null)p=-1/0
v.n(0,q,Math.max(p,u+r.b))}m.push(d)
o.d.n(0,d,u)},
$S:706}
C.dhN.prototype={
$1(d){return 16+d*156},
$S:175}
C.dhw.prototype={
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
t.n(0,d,new C.GB(r,new A.r(e-53,v)))
s=s.h(0,u)
s.toString
t.n(0,u,new C.GB(s,new A.r(e+53,v)))}else{s=s.h(0,d)
s.toString
t.n(0,d,new C.GB(s,new A.r(e,v)))}t=o.r.h(0,d)
t=J.aT(t==null?B.Z:t)
s=o.w
while(t.C()){r=t.gR(t)
q=s.h(0,r)
o.$2(r,e+(q==null?0:q))}p=o.x.h(0,d)
if(p!=null){t=p.a
w=w.$1(n+1)
s=p.b
o.y.push(new C.KY(d,new A.r(e+t,w),s,s.length))}},
$S:185}
C.dhA.prototype={
$2(d,e){var w=this.b,v=w.h(0,d).b
w=w.h(0,e).b
this.a.push(new C.aL_(new A.r(v.a,v.b+28),new A.r(w.a,w.b+28),!0,null))},
$S:123}
C.dhB.prototype={
$1(d){return d.a===this.a},
$S:z+47}
C.dhC.prototype={
$2(d,e){return B.j.aS(d.a,e.a)},
$S:766}
C.dhP.prototype={
$2(d,e){return B.j.aS(d.a,e.a)},
$S:766}
C.dhQ.prototype={
$1(d){return Math.abs(d.a-this.a.a)<0.5},
$S:469}
C.dhR.prototype={
$1(d){return Math.abs(d.a-this.a.a)},
$S:187}
C.dhS.prototype={
$1(d){return d>=0.5},
$S:121}
C.fnS.prototype={
$3(d,e,f){var w=null,v=A.l(10)
return A.ha(A.aM(!1,v,!0,new A.a3(38,38,A.W(d,this.a.c?B.c:B.cu,w,w,w,20),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),w,e,w,w)},
$S:1992}
C.eYU.prototype={
$1(d){var w=null,v=A.l(8),u=B.bQ.j(0.12),t=A.l(8)
return new A.D(B.n3,A.aM(!1,v,!0,A.p(w,A.d("#"+d.Q+" "+d.b,w,4,w,w,w,w,D.fy0,B.K,w,w),B.f,w,w,new A.o(u,w,w,t,w,w,B.n),w,w,w,w,B.OF,w,w,1/0),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.eYT(this.a,d),w,w,w,w,w,w,w),w)},
$S:z+48}
C.eYT.prototype={
$0(){return this.a.r.$1(this.b)},
$S:0}
C.dxN.prototype={
$0(){return this.a.as=this.b},
$S:0}
C.dxM.prototype={
$1(d){var w=null,v=A.l(18),u=this.a
u=A.d("Delete "+(u.length===0?"this member":u)+"?",w,w,w,w,w,w,B.o6,B.K,w,w)
return A.ej(A.a([A.bO(!1,B.ds,w,w,!0,w,w,w,new C.dxK(d),w,w),A.bO(!1,A.d("Delete",w,w,w,w,w,w,A.m(w,w,B.mW,w,w,w,w,w,w,w,w,w,w,w,B.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w,w,!0,w,w,w,new C.dxL(d),w,w)],x.p),B.b8,B.Cz,w,u,D.bGA,w,D.bIx,new A.b9(v,B.a1),w,w)},
$S:18}
C.dxK.prototype={
$0(){A.a5(this.a,!1).N(!1)
return null},
$S:0}
C.dxL.prototype={
$0(){A.a5(this.a,!1).N(!0)
return null},
$S:0}
C.dxW.prototype={
$1(d){var w=this.a.a.d
w=w==null?null:w.a
return d.a!==w},
$S:z+1}
C.dxX.prototype={
$1(d){var w=this.a
return w.m(new C.dxV(w,d))},
$S:z+49}
C.dxV.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.dxY.prototype={
$1(d){var w=null
return A.qL(A.d(d.b,w,w,w,w,w,w,w,w,w,w),d.a,x.T)},
$S:z+20}
C.dy0.prototype={
$1(d){var w=this.a
return w.m(new C.dxU(w,d))},
$S:35}
C.dxU.prototype={
$0(){return this.a.z=this.b},
$S:0}
C.dy_.prototype={
$1(d){var w=null
return A.qL(A.d(d.b,w,w,w,w,w,w,w,w,w,w),d.a,x.T)},
$S:z+20}
C.dy1.prototype={
$1(d){var w=this.a
return w.m(new C.dxT(w,d))},
$S:35}
C.dxT.prototype={
$0(){return this.a.Q=this.b},
$S:0}
C.dy2.prototype={
$0(){var w=this.a
return w.m(new C.dxS(w))},
$S:0}
C.dxS.prototype={
$0(){var w=this.a
return w.at=Math.max(1,w.at-1)},
$S:0}
C.dy3.prototype={
$0(){var w=this.a
return w.m(new C.dxR(w))},
$S:0}
C.dxR.prototype={
$0(){return++this.a.at},
$S:0}
C.dy4.prototype={
$0(){var w=this.a
return w.m(new C.dxQ(w))},
$S:0}
C.dxQ.prototype={
$0(){return--this.a.ax},
$S:0}
C.dy5.prototype={
$0(){var w=this.a
return w.m(new C.dxP(w))},
$S:0}
C.dxP.prototype={
$0(){return++this.a.ax},
$S:0}
C.dy6.prototype={
$1(d){var w=this.a
return w.m(new C.dxO(w,d))},
$S:9}
C.dxO.prototype={
$0(){return this.a.ay=this.b},
$S:0}
C.dxZ.prototype={
$0(){A.a5(this.a,!1).N(null)
return null},
$S:0}
C.dy7.prototype={
$3(d,e,f){var w,v,u,t,s,r=null,q=this.a,p=q.d===d,o=A.l(12)
if(p)w=B.bQ.j(0.18)
else w=q.c.a?B.ee:B.c
v=A.l(12)
if(p)u=B.bQ
else u=(q.c.a?B.eh:B.bO).j(0.85)
u=A.K(u,B.r,p?1.5:1)
if(p)t=B.bQ
else t=q.c.a?B.bu:B.bh
t=A.W(f,t,r,r,r,18)
if(p)s=B.bQ
else s=q.c.a?B.bu:B.bh
return A.E(A.aG(!1,B.a3,!0,r,A.aM(!1,o,!0,A.cT(r,A.x(A.a([t,B.aw,A.d(e,r,r,r,r,r,r,A.m(r,r,s,r,r,r,r,r,r,r,r,11,r,r,B.H,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),B.l,r,B.e,B.h,0,B.p),r,r,B.b0,new A.o(w,r,u,v,r,r,B.n),B.eH,r,r,r,r,B.k5,r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,new C.dy8(q,d),r,r,r,r,r,r,r),B.f,B.L,0,r,r,r,r,r,B.ai),1)},
$S:z+51}
C.dy8.prototype={
$0(){return this.a.e.$1(this.b)},
$S:0}
C.dyh.prototype={
$0(){A.a5(this.a,!1).N(null)
return null},
$S:0}
C.cfr.prototype={
$2(d,e){return new A.bA(B.a.i(J.k(d).toLowerCase()),J.k(e),x.fK)},
$S:96}
C.cfy.prototype={
$1(d){return d.aj()},
$S:z+5}
C.cfz.prototype={
$2(d,e){var w=J.b7(e,new C.cfx(),x.a)
w=A.C(w,w.$ti.k("ak.E"))
return new A.bA(d,w,x.d2)},
$S:z+53}
C.cfx.prototype={
$1(d){return d.aj()},
$S:z+12}
C.cft.prototype={
$1(d){return C.ami(A.a1(d,x.N,x.z))},
$S:z+9}
C.cfu.prototype={
$1(d){return d.a.length!==0},
$S:z+3}
C.cfv.prototype={
$1(d){return C.hn5(A.a1(d,x.N,x.z))},
$S:z+11}
C.cfw.prototype={
$1(d){return d.a.length!==0},
$S:z+4}
C.cfD.prototype={
$1(d){return new A.aI3(d.f.length,d.a,d.b)},
$S:z+55}
C.cfE.prototype={
$2(d,e){return B.a.aS(d.c,e.c)},
$S:650}
C.cfA.prototype={
$1(d){return d.a===B.a.i(this.a)},
$S:z+3}
C.cfB.prototype={
$1(d){return d.cOZ(C.Hh(d,this.a))},
$S:z+85}
C.e3S.prototype={
$1(d){return C.uz(d,this.a.a.c)},
$S:z+3}
C.e3T.prototype={
$0(){var w=this.a
w.d=this.b
w.e=this.c},
$S:0}
C.e3X.prototype={
$0(){var w=this.a
w.r=!0
w.f=this.b},
$S:0}
C.e3Y.prototype={
$0(){var w=this.a
w.r=!1
w.f=null},
$S:0}
C.e3P.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
r=s.a
q=r.c
w=3
return A.b(C.b1w(r.d,q,r.e,r.f),$async$$0)
case 3:p=e
if(s.c==null){w=1
break}if(p==null){s.z7("No family trees to export yet.")
w=1
break}r=s.a
w=4
return A.b(A.py(r.c,r.e),$async$$0)
case 4:s.z7(p)
w=5
return A.b(s.Kh(),$async$$0)
case 5:case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.e3Q.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
r=s.a
q=r.c
w=3
return A.b(C.b1w(r.d,q,r.e,t.b),$async$$0)
case 3:p=e
if(s.c==null){w=1
break}if(p==null){s.z7("Could not export this tree.")
w=1
break}r=s.a
w=4
return A.b(A.py(r.c,r.e),$async$$0)
case 4:s.z7(p)
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.e3R.prototype={
$0(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j
var $async$$0=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
o=r.a
n=o.a
m=n.c
w=7
return A.b(C.Ws(n.d,m,n.e,r.b),$async$$0)
case 7:q=e
if(o.c==null){w=1
break}if(q==null){o.z7("No family trees found in that backup.")
w=1
break}o.a.w.$0()
if(q.c)o.z7("Restored "+q.a+" members on this phone (view only). Creator cloud data was not duplicated.")
else{n=q.a
m=q.b
l=q.b===1?"":"s"
o.z7("Restored "+n+" members across "+m+" tree"+l+".")}w=8
return A.b(o.Kh(),$async$$0)
case 8:t=2
w=6
break
case 4:t=3
j=s.pop()
p=A.ac(j)
o=r.a
if(o.c==null){w=1
break}o.z7(B.a.ec(J.k(p),"StateError: ",""))
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$$0,v)},
$S:1}
C.e3W.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
r=s.a
q=r.c
w=3
return A.b(C.b1v(r.d,q,r.e,r.f),$async$$0)
case 3:p=e
r=s.c
if(r==null){w=1
break}if(p==null){s.z7("No family trees to share yet, or cloud is unavailable.")
w=1
break}w=4
return A.b(A.a5(r,!1).ce(A.ed(new C.e3V(s,p),!0,null,x.H)),$async$$0)
case 4:s=s.a
w=5
return A.b(A.py(s.c,s.e),$async$$0)
case 5:case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.e3V.prototype={
$1(d){var w=this.b
return new C.a0C(this.a.a.c,w.b,w.a,w.c,null)},
$S:z+57}
C.e3U.prototype={
$1(d){return D.hD_},
$S:z+58}
C.e4_.prototype={
$0(){A.a5(this.a,!1).N(null)
return null},
$S:0}
C.e40.prototype={
$1(d){var w=this.a
w=w.r?null:new C.e3Z(w,d)
return new A.D(B.d9,new C.bh_(this.b,d.c,d.a,w,null),null)},
$S:1993}
C.e3Z.prototype={
$0(){return this.a.YB(this.b.b)},
$S:0}
C.e3K.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.e3L.prototype={
$0(){return this.a.d=!0},
$S:0}
C.e3M.prototype={
$0(){return this.a.e=!0},
$S:0}
C.e3N.prototype={
$0(){return this.a.d=!1},
$S:0}
C.e3O.prototype={
$0(){A.a5(this.a,!1).N(null)
return null},
$S:0}
C.e41.prototype={
$1(d){var w,v,u,t,s,r=this.a
if(r.e)return
for(w=d.a,v=w.length,u=0;u<w.length;w.length===v||(0,A.I)(w),++u){t=w[u].z
s=t==null?null:B.a.i(t)
if(s==null||s.length===0)continue
if(!B.a.a_(s,"NGMYFTSYNC2"))t=!A.cS(s,"ngmyFamilyTreeSync",0)
else t=!1
if(t)continue
r.e=!0
A.a5(this.b,!1).N(s)
return}},
$S:186}
C.dPU.prototype={
$1(d){return d.a===this.a.a.c},
$S:z+59}
C.dPV.prototype={
$0(){return B.d.gH(D.a72)},
$S:z+60}
C.dPW.prototype={
$2(d,e){var w=null,v=this.a,u=v.a.c,t=v.d
t===$&&A.c()
t=t.x
t===$&&A.c()
v=v.e
v===$&&A.c()
v=v.x
v===$&&A.c()
return A.b4(A.as(A.W(this.b.d,B.c.j(0.95),w,w,D.dax,44),w,w,w),w,w,new C.blS(u,t,v,w),B.az)},
$S:56}
C.fZp.prototype={
$1(d){return A.pi(new C.fZo(this.a,d),!1,0.72,0.92,0.45,!1,null)},
$S:142}
C.fZo.prototype={
$2(d,e){var w,v,u,t=null,s=this.a,r=s.a,q=r?B.ee:B.c,p=A.a([new A.ab(0,B.G,B.w.j(r?0.35:0.08),B.tI,24)],x.V),o=r?B.eh:B.bO
o=A.p(t,t,B.f,t,t,new A.o(o,t,t,A.l(99),t,t,B.n),t,4,t,t,t,t,t,40)
w=A.a([B.aV.j(0.25),B.bQ.j(0.18)],x.O)
w=A.p(t,D.bYy,B.f,t,t,new A.o(t,t,t,A.l(12),t,new A.a8(B.a5,B.a8,B.x,w,t,t),B.n),t,40,t,t,t,t,t,40)
v=A.d("Choose a theme",t,t,t,t,t,t,A.m(t,t,r?B.aS:B.av,t,t,t,t,t,t,t,t,17,t,t,B.u,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)
u=x.p
return A.p(t,A.x(A.a([B.T,o,new A.D(E.anu,A.A(A.a([w,B.bb,A.E(A.x(A.a([v,A.d("Animated thumbnails for construction, grocery, and more.",t,t,t,t,t,t,A.m(t,t,r?B.bu:B.bh,t,t,t,t,t,t,t,t,12,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],u),B.E,t,B.e,B.h,0,B.p),1)],u),B.l,t,B.e,B.h,0,t,t),t),A.E(A.it(!0,t,e,B.y,D.fks,new C.fZn(this.b,s),20,B.an1,t,B.ah,!1),1)],u),B.l,t,B.e,B.h,0,B.p),B.f,t,t,new A.o(q,t,t,B.ld,p,t,B.n),t,t,t,t,t,t,t,t)},
$S:118}
C.fZn.prototype={
$2(d,e){var w=null,v=D.a72[e],u=A.l(16),t=A.l(16),s=this.b.a,r=A.K(s?B.eh:B.bO,B.r,1),q=A.a([new A.ab(0,B.G,B.w.j(s?0.35:0.08),B.eu,8)],x.V),p=A.l(15),o=A.E(new C.a7q(v.a,!0,w),1),n=s?B.jY:B.iO,m=A.d(v.b,w,1,B.a2,w,w,w,A.m(w,w,s?B.aS:B.av,w,w,w,w,w,w,w,w,13,w,w,B.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),l=x.p
return A.aG(!1,B.a3,!0,w,A.aM(!1,u,!0,A.eB(A.bu(p,A.x(A.a([o,A.p(w,A.x(A.a([m,A.d(v.c,w,1,B.a2,w,w,w,A.m(w,w,s?B.bu:B.bh,w,w,w,w,w,w,w,w,10,w,w,B.a9,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],l),B.E,w,B.e,B.h,0,B.p),B.f,n,w,w,w,w,w,w,B.k6,w,w,w)],l),B.al,w,B.e,B.h,0,B.p),B.aq),w,new A.o(w,w,r,t,q,w,B.n),w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.fZm(this.a,v),w,w,w,w,w,w,w),B.f,B.L,0,w,w,w,w,w,B.ai)},
$S:79}
C.fZm.prototype={
$0(){A.a5(this.a,!1).N("ngmy:thumb:"+this.b.a)
return null},
$S:0}
C.cp3.prototype={
$0(){return this.a.ahA(this.b)},
$S:0}
C.fYN.prototype={
$1(d){return D.hxU},
$S:z+61}
C.h5y.prototype={
$1(d){var w=this
return new C.a2o(w.a,w.b,w.c,w.d,null)},
$S:z+62}
C.fYR.prototype={
$1(d){return new C.a_g(this.a,null)},
$S:z+63}
C.fYQ.prototype={
$1(d){return D.hyV},
$S:z+64}
C.d93.prototype={
$0(){A.a5(this.a,!1).N(null)
return null},
$S:0}
C.d94.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.d92(w,d))},
$S:35}
C.d92.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.d95.prototype={
$1(d){return this.a.KV()},
$S:2}
C.d96.prototype={
$0(){A.a5(this.a,!1).N(null)
return null},
$S:0}
C.d9_.prototype={
$0(){A.a5(this.a,!1).N(null)
return null},
$S:0}
C.d90.prototype={
$1(d){return this.a.KV()},
$S:2}
C.d91.prototype={
$0(){A.a5(this.a,!1).N(null)
return null},
$S:0}
C.cHq.prototype={
$0(){},
$S:0}
C.cHw.prototype={
$0(){A.a5(this.a,!1).N(null)
return null},
$S:0}
C.cHx.prototype={
$0(){return this.a.aR_(-1)},
$S:0}
C.cHy.prototype={
$1(d){return this.a.m(new C.cHv())},
$S:2}
C.cHv.prototype={
$0(){},
$S:0}
C.cHz.prototype={
$0(){return this.a.aR_(1)},
$S:0}
C.cHA.prototype={
$1(d){return this.a.m(new C.cHu())},
$S:2}
C.cHu.prototype={
$0(){},
$S:0}
C.cHB.prototype={
$1(d){var w,v,u=null,t=this.a,s=t.w===d,r=d==="other"?"Other":d
r=A.d(r,u,u,u,u,u,u,A.m(u,u,u,u,u,u,u,u,u,u,u,11,u,u,B.O,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)
w=B.aV.j(0.2)
if(s)v=B.aV
else v=this.b.a?B.eh:B.bO
return A.uW(u,u,B.b2,r,u,new C.cHt(t,d),B.wF,s,w,u,new A.ay(v,1,B.r,-1),B.cg)},
$S:1994}
C.cHt.prototype={
$1(d){var w=this.a
return w.m(new C.cHr(w,this.b))},
$S:9}
C.cHr.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.cHC.prototype={
$1(d){return this.a.m(new C.cHs())},
$S:2}
C.cHs.prototype={
$0(){},
$S:0}
C.cHD.prototype={
$0(){A.a5(this.a,!1).N(null)
return null},
$S:0}
C.fnn.prototype={
$1(d){var w,v=this.a.d
v===$&&A.c()
w=B.a.i(v.a.a)
if(w.length!==0)A.a5(this.b,!1).N(w)},
$S:2}
C.fno.prototype={
$0(){A.a5(this.a,!1).N(null)
return null},
$S:0}
C.fnp.prototype={
$0(){var w,v=this.a.d
v===$&&A.c()
w=B.a.i(v.a.a)
if(w.length===0)return
A.a5(this.b,!1).N(w)},
$S:0}
C.fnl.prototype={
$2(d,e){var w,v,u,t,s,r=null,q=this.a,p=q.d
p===$&&A.c()
p=p.x
p===$&&A.c()
w=q.a
v=w.d
u=w.f
t=q.gbDk()
w=w.e
s=A.l(B.o.D(v-1,0,v))
return A.b4(new A.D(D.bIw,new A.en(A.p(r,q.a.c,B.f,r,r,new A.o(r,r,r,s,r,r,B.n),r,r,r,r,w,r,r,r),r),r),new C.byA(p,v,this.b.a,u,t,r),r,r,B.az)},
$S:56}
C.fnm.prototype={
$2(d,e){var w,v,u,t,s,r=null,q=this.a,p=q.d
p===$&&A.c()
p=p.x
p===$&&A.c()
w=B.dH.aB(0,p)
p=A.l(12)
q=q.a.c
v=A.l(12)
u=A.l(12)
t=w*2.4
s=A.ap(B.aV,B.bQ,w)
s.toString
s=A.a([B.b2,s,B.aV],x.O)
return A.aG(!1,B.a3,!0,p,A.aM(!1,v,!0,A.eB(D.ewk,r,new A.o(r,r,A.K(B.c.j(0.4),B.r,1.5),u,r,new A.a8(new A.d7(-1.2+t,-0.5),new A.d7(1.2-t,0.8),B.x,s,r,r),B.n),r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,r),B.f,B.L,0,r,r,r,r,r,B.ai)},
$S:146}
C.fX6.prototype={
$1(d){return A.w(d.h(0,1))+","},
$S:60}
C.eW3.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.eVV.prototype={
$0(){return this.a.e=!0},
$S:0}
C.eVW.prototype={
$0(){return this.a.e=!1},
$S:0}
C.eW1.prototype={
$1(d){var w={},v=this.a.d
v===$&&A.c()
w.a=v.c
return new A.e1(new C.eW0(w,this.b),null)},
$S:21}
C.eW0.prototype={
$2(d,e){var w=null,v=this.b.a,u=v?B.ee:B.c,t=A.l(20),s=A.d("Project thumbnail",w,w,w,w,w,w,A.m(w,w,v?B.aS:B.av,w,w,w,w,w,w,w,w,17,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),r=this.a,q=x.p
return A.eG(w,u,new A.D(B.ano,A.x(A.a([s,B.am,A.d("Tap circle for themes \xb7 tap frame for gallery",w,w,w,w,w,w,A.m(w,w,v?B.bu:B.bh,w,w,w,w,w,w,w,w,11,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.af,C.hta(new C.eVY(r,e),r.a),B.aB,A.A(A.a([A.E(A.dV(B.ds,new C.eVZ(d),w),1),B.as,A.E(A.bI(B.Wr,w,new C.eW_(r,d),A.bo(B.aV,w,w,w,w,w,w,w,w,w,w,w)),1)],q),B.l,w,B.e,B.h,0,w,w)],q),B.al,w,B.e,B.N,0,B.p),w),w,w,w,w,w,B.d6,w,new A.b9(t,B.a1),w)},
$S:104}
C.eVY.prototype={
$1(d){return this.b.$1(new C.eVX(this.a,d))},
$S:35}
C.eVX.prototype={
$0(){return this.a.a=this.b},
$S:0}
C.eVZ.prototype={
$0(){A.a5(this.a,!1).N(null)
return null},
$S:0}
C.eW_.prototype={
$0(){var w=this.a.a
A.a5(this.b,!1).N(w)
return null},
$S:0}
C.eW2.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
return w.d=v.TI(this.b)},
$S:0}
C.eVQ.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&A.c()
w=A.C(u.d,x.Q)
w.push(this.b)
v.d=u.bfq(w)},
$S:0}
C.eVU.prototype={
$1(d){return this.boH(d)},
boH(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.a
w=3
return A.b(C.Md(s.a.c,d),$async$$1)
case 3:s=s.c
if(s.e==null){w=1
break}A.j2(s,d)
case 1:return A.h(u,v)}})
return A.i($async$$1,v)},
$S:z+21}
C.eVT.prototype={
$0(){var w,v,u=this.a,t=u.d
t===$&&A.c()
w=t.d
v=A.U(w).k("Y<1>")
w=A.C(new A.Y(w,new C.eVS(this.b),v),v.k("M.E"))
u.d=t.bfq(w)},
$S:0}
C.eVS.prototype={
$1(d){return d.a!==this.a.a},
$S:z+22}
C.eW4.prototype={
$0(){var w=this.a.d
w===$&&A.c()
return A.j2(this.b,w)},
$S:0}
C.eW5.prototype={
$1(d){return this.a.bHu(d,this.b)},
$S:z+67}
C.eVR.prototype={
$0(){return this.a.abg(this.b)},
$S:0}
C.h5l.prototype={
$1(d){return new C.aeP(this.a,this.b,this.c,null)},
$S:z+68}
C.eW7.prototype={
$0(){return this.a.a0v(this.b)},
$S:0}
C.eW8.prototype={
$0(){return this.a.QY(this.b)},
$S:0}
C.eW9.prototype={
$0(){return this.a.F0(this.b)},
$S:0}
C.eWa.prototype={
$0(){return this.a.a0w(this.b)},
$S:0}
C.eW6.prototype={
$0(){A.a5(this.a,!1).N(null)
return null},
$S:0}
C.eVL.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.eVM.prototype={
$0(){return this.a.e="Could not create QR. Check your connection and try again."},
$S:0}
C.eVN.prototype={
$0(){A.a5(this.a,!1).N(null)
return null},
$S:0}
C.eVP.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return A.b(t.d.qv(),$async$$0)
case 2:if(t.c!=null)t.m(new C.eVO(t))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.eVO.prototype={
$0(){var w=this.a
return w.f=!w.f},
$S:0}
C.eWx.prototype={
$2(d,e){return d+e.gxJ()},
$S:z+71}
C.eWt.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.eWu.prototype={
$0(){return this.a.f=!1},
$S:0}
C.eWe.prototype={
$1(d){var w,v=null,u=this.a.a,t=u?B.ee:B.c,s=A.l(24),r=A.p(v,D.bZ1,B.f,v,v,new A.o(B.aA.j(u?0.18:0.08),v,A.K(B.aA.j(0.28),B.r,1),v,v,v,B.a7),v,64,v,v,v,v,v,64),q=A.d("Clear all projects?",v,v,v,v,v,v,A.m(v,v,u?B.aS:B.av,v,v,v,v,v,v,v,v,18,v,v,B.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),p=A.d("This permanently removes every worksheet project on this device. This cannot be undone.",v,v,v,v,v,v,A.m(v,v,u?B.bu:B.bh,v,v,v,v,v,v,v,v,13,v,v,v,v,1.4,!0,v,v,v,v,v,v,v,v),B.K,v,v),o=u?B.aS:B.av
u=u?B.eh:B.bO
w=x.p
return A.eG(v,t,new A.D(B.wE,A.x(A.a([r,B.aO,q,B.P,p,B.da,A.A(A.a([A.E(A.dV(B.o8,new C.eWc(d),A.dj(v,v,v,v,v,v,v,v,v,o,v,v,B.fg,v,new A.b9(A.l(14),B.a1),new A.ay(u,1,B.r,-1),v,v,v,v)),1),B.as,A.E(A.bI(D.h3i,v,new C.eWd(d),A.bo(B.aA,v,v,v,v,v,B.fg,v,new A.b9(A.l(14),B.a1),v,v,v)),1)],w),B.l,v,B.e,B.h,0,v,v)],w),B.l,v,B.e,B.N,0,B.p),v),v,v,v,v,v,B.d6,v,new A.b9(s,B.a1),v)},
$S:47}
C.eWc.prototype={
$0(){A.a5(this.a,!1).N(!1)
return null},
$S:0}
C.eWd.prototype={
$0(){A.a5(this.a,!1).N(!0)
return null},
$S:0}
C.eWn.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m=null,l=this.b,k=l.a,j=k?B.ee:B.c,i=A.l(28),h=A.a([new A.ab(0,B.G,B.w.j(k?0.35:0.08),B.fQ,28)],x.V),g=k?D.dhM:B.a6l,f=x.p
g=A.p(m,A.x(A.a([A.p(m,m,B.f,m,m,new A.o(B.c.j(0.45),m,m,A.l(99),m,m,B.n),m,4,m,m,m,m,m,40),B.aB,D.fdy,B.aw,new A.bJ(B.a5,m,m,A.d("Move worksheet projects between phones",m,m,m,m,m,m,A.m(m,m,B.c.j(0.82),m,m,m,m,m,m,m,m,12,m,m,B.cD,m,m,!0,m,m,m,m,m,m,m,m),m,m,m),m)],f),B.l,m,B.e,B.h,0,B.p),B.f,m,m,new A.o(m,m,m,m,m,new A.a8(B.ay,B.aD,B.x,g,m,m),B.n),m,m,m,m,E.ans,m,m,1/0)
w=A.d("IMPORT PROJECT",m,m,m,m,m,m,A.m(m,m,k?B.bu:B.bh,m,m,m,m,m,m,m,m,11,m,m,B.H,m,m,!0,m,1.1,m,m,m,m,m,m),m,m,m)
v=this.a
u=A.A(A.a([A.E(v.b8i(B.b7,B.jv,new C.eWk(v,d),l,"Camera import","Scan QR"),1),B.as,A.E(v.b8i(B.cG,R.zH,new C.eWl(v,d),l,".json backup","Upload file"),1)],f),B.l,m,B.e,B.h,0,m,m)
t=A.d("DANGER ZONE",m,m,m,m,m,m,A.m(m,m,k?B.bu:B.bh,m,m,m,m,m,m,m,m,11,m,m,B.H,m,m,!0,m,1.1,m,m,m,m,m,m),m,m,m)
s=A.l(16)
r=B.aA.j(k?0.14:0.06)
q=A.l(16)
p=A.K(B.aA.j(0.28),B.r,1)
o=A.p(m,D.bYm,B.f,m,m,new A.o(B.aA.j(0.12),m,m,A.l(12),m,m,B.n),m,m,m,m,B.bU,m,m,m)
n=A.d("Clear all projects",m,m,m,m,m,m,A.m(m,m,k?B.aS:B.av,m,m,m,m,m,m,m,m,m,m,m,B.H,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)
n=A.E(A.x(A.a([n,A.d("Remove every project on this device",m,m,m,m,m,m,A.m(m,m,k?B.bu:B.bh,m,m,m,m,m,m,m,m,12,m,m,m,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)],f),B.E,m,B.e,B.h,0,B.p),1)
return A.bm(!0,new A.D(B.wy,A.p(m,A.x(A.a([g,new A.D(B.anp,A.x(A.a([w,B.T,u,B.by,t,B.T,A.aG(!1,B.a3,!0,m,A.aM(!1,s,!0,A.p(m,A.A(A.a([o,B.bb,n,A.W(B.eI,k?B.bu:B.bh,m,m,m,m)],f),B.l,m,B.e,B.h,0,m,m),B.f,m,m,new A.o(r,m,p,q,m,m,B.n),m,m,m,m,B.bI,m,m,1/0),m,!0,m,m,m,m,m,m,m,m,m,m,m,new C.eWm(v,d,l),m,m,m,m,m,m,m),B.f,B.L,0,m,m,m,m,m,B.ai)],f),B.E,m,B.e,B.h,0,B.p),m)],f),B.l,m,B.e,B.N,0,B.p),B.aq,m,m,new A.o(j,m,m,i,h,m,B.n),m,m,m,m,m,m,m,m),m),!0,!1,B.ag,!0,!0)},
$S:25}
C.eWk.prototype={
$0(){var w=0,v=A.j(x.H),u=this
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:A.a5(u.b,!1).N(null)
w=2
return A.b(u.a.w8("scan"),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.eWl.prototype={
$0(){var w=0,v=A.j(x.H),u=this
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:A.a5(u.b,!1).N(null)
w=2
return A.b(u.a.w8("file"),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.eWm.prototype={
$0(){var w=0,v=A.j(x.H),u=this
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:A.a5(u.b,!1).N(null)
w=2
return A.b(u.a.OC(u.c),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.eWi.prototype={
$1(d){var w,v,u,t,s,r,q=null,p=this.b,o=p.a,n=o?B.ee:B.c,m=A.l(24),l=A.a([new A.ab(0,B.G,B.w.j(o?0.35:0.08),B.eR,24)],x.V),k=o?B.eh:B.bO
k=A.p(q,q,B.f,q,q,new A.o(k,q,q,A.l(99),q,q,B.n),q,4,q,q,q,q,q,40)
w=A.l(12)
v=this.c
u=o?B.bu:B.bh
u=A.bu(w,new A.a3(48,48,C.aSs(!0,A.l(12),48,Q.Pn,u,v.c,48),q),B.aq)
w=A.d(v.b,q,1,B.a2,q,q,q,A.m(q,q,o?B.aS:B.av,q,q,q,q,q,q,q,q,16,q,q,B.u,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
t=v.d.length
v=A.Bn(v.gxJ())
s=x.p
r=this.a
return A.bm(!0,new A.D(B.wy,A.p(q,A.x(A.a([B.T,k,new A.D(D.anm,A.A(A.a([u,B.bb,A.E(A.x(A.a([w,A.d(""+t+" items \xb7 "+v,q,q,q,q,q,q,A.m(q,q,o?B.bu:B.bh,q,q,q,q,q,q,q,q,12,q,q,B.a9,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],s),B.E,q,B.e,B.h,0,B.p),1)],s),B.l,q,B.e,B.h,0,q,q),q),B.Cq,r.cri(B.va,B.aV,new C.eWg(d),p,"QR code or backup file","Transfer project"),r.b5j(!0,B.ek,B.aA,new C.eWh(d),p,"Remove from this device","Delete project"),B.T],s),B.l,q,B.e,B.N,0,B.p),B.f,q,q,new A.o(n,q,q,m,l,q,B.n),q,q,q,q,q,q,q,q),q),!0,!1,B.ag,!0,!0)},
$S:25}
C.eWg.prototype={
$0(){A.a5(this.a,!1).N("transfer")
return null},
$S:0}
C.eWh.prototype={
$0(){A.a5(this.a,!1).N("delete")
return null},
$S:0}
C.eWj.prototype={
$1(d){return this.boI(d)},
boI(d){var w=0,v=A.j(x.H),u=this,t
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=u.a
w=2
return A.b(C.Md(t.a.c,d),$async$$1)
case 2:w=3
return A.b(t.wn(),$async$$1)
case 3:return A.h(null,v)}})
return A.i($async$$1,v)},
$S:z+21}
C.eWA.prototype={
$0(){var w=this.a
w.a.bv()
w.m(new C.eWz(w))},
$S:0}
C.eWz.prototype={
$0(){return this.a.r++},
$S:0}
C.eWB.prototype={
$0(){var w=this.a
return w.m(new C.eWy(w))},
$S:0}
C.eWy.prototype={
$0(){return this.a.r++},
$S:0}
C.eWb.prototype={
$0(){var w=this.a.c
w.toString
return A.j2(w,null)},
$S:0}
C.eWf.prototype={
$0(){return this.a.cky(this.b)},
$S:0}
C.eWw.prototype={
$0(){var w=this.a
return w.m(new C.eWv(w,this.b))},
$S:0}
C.eWv.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.eWq.prototype={
$0(){return this.a.w8("scan")},
$S:0}
C.eWr.prototype={
$0(){return this.a.w8("file")},
$S:0}
C.eWs.prototype={
$1(d){return this.a.crj(d,this.b)},
$S:z+72}
C.eWp.prototype={
$0(){return this.a.F4(this.b)},
$S:0}
C.eWo.prototype={
$0(){return this.a.a10(this.b,this.c)},
$S:0}
C.cGL.prototype={
$2(d,e){return d+e.c*e.d},
$S:z+73}
C.cGK.prototype={
$1(d){return d.aj()},
$S:z+74}
C.cGI.prototype={
$1(d){return C.hNV(A.a1(d,x.N,x.z))},
$S:z+75}
C.cGJ.prototype={
$1(d){return d.a.length!==0},
$S:z+22}
C.fHh.prototype={
$1(d){return d.y===D.kY},
$S:z+3}
C.h66.prototype={
$1(d){return C.aRb(d,this.a)},
$S:z+3}
C.fEM.prototype={
$1(d){return d.a===this.a.a},
$S:z+3}
C.bT5.prototype={
$1(d){return!d.as},
$S:z+1}
C.bT4.prototype={
$1(d){return d.aj()},
$S:z+23}
C.bT1.prototype={
$1(d){return C.hn7(A.a1(d,x.N,x.z))},
$S:z+24}
C.bT2.prototype={
$1(d){return d.a.length!==0},
$S:z+1}
C.bT3.prototype={
$1(d){return J.k(d)},
$S:16}
C.fv8.prototype={
$2(d,e){return e.e.aS(0,d.e)},
$S:z+25}
C.fqO.prototype={
$1(d){return C.hcJ(A.a1(d,x.N,x.z))},
$S:z+79}
C.fqP.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+10}
C.fqQ.prototype={
$2(d,e){return e.e.aS(0,d.e)},
$S:z+25}
C.fYB.prototype={
$1(d){return J.k(d)},
$S:16}
C.fYC.prototype={
$1(d){return d.a},
$S:z+81}
C.fYD.prototype={
$1(d){return d.length!==0},
$S:3}
C.fYE.prototype={
$1(d){return B.d.q(this.a,d.a)},
$S:z+10}
C.fYF.prototype={
$1(d){return d.TI(null).aj()},
$S:z+82}
C.h64.prototype={
$1(d){return d.a===this.a.a},
$S:z+10}
C.fHL.prototype={
$1(d){return d.a===this.a},
$S:z+10}
C.fKX.prototype={
$1(d){return C.ami(A.a1(d,x.N,x.z))},
$S:z+9}
C.fKY.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+3}
C.fKZ.prototype={
$2(d,e){return e.r.aS(0,d.r)},
$S:z+6}
C.fL_.prototype={
$1(d){return d.aj()},
$S:z+5}
C.fL0.prototype={
$1(d){return C.uz(d,this.a)},
$S:z+3}
C.fYo.prototype={
$1(d){return C.uz(d,this.a)},
$S:z+3}
C.h6_.prototype={
$1(d){return C.ami(A.a1(d,x.N,x.z))},
$S:z+9}
C.h60.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+3}
C.h61.prototype={
$1(d){return d.a===this.a.a},
$S:z+3}
C.fHs.prototype={
$1(d){return d.a===this.a},
$S:z+3}
C.fHt.prototype={
$1(d){return d.a===this.a},
$S:z+3}
C.h6a.prototype={
$1(d){return!d.as},
$S:z+1}
C.fGX.prototype={
$1(d){return d.a===this.a},
$S:z+1}
C.fGY.prototype={
$1(d){var w,v=this.a
if(d.d!==v)return!1
w=this.b
if(w!=null)if(w.e===d.a||d.e===v)return!1
return!0},
$S:z+1}
C.fGZ.prototype={
$2(d,e){return B.o.aS(d.Q,e.Q)},
$S:z+7}
C.h5z.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
C.fLO.prototype={
$1(d){return d.Q},
$S:z+15}
C.fYh.prototype={
$1(d){var w=d.d
return w==null||w.length===0},
$S:z+1}
C.fKU.prototype={
$1(d){return C.ami(A.a1(d,x.N,x.z))},
$S:z+9}
C.fKV.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+3}
C.fKW.prototype={
$2(d,e){return e.r.aS(0,d.r)},
$S:z+6}
C.fYc.prototype={
$1(d){return d.a===this.a.a},
$S:z+3}
C.frl.prototype={
$1(d){return d.length!==0},
$S:3}
C.frm.prototype={
$1(d){return C.hn7(A.a1(d,x.N,x.z))},
$S:z+24}
C.frn.prototype={
$1(d){return d.a.length!==0},
$S:z+1}
C.fro.prototype={
$1(d){return B.a.i(J.k(d).toLowerCase())},
$S:16}
C.frp.prototype={
$1(d){return d.length!==0},
$S:3}
C.frC.prototype={
$2(d,e){return d.eH(new C.frD(e))},
$S:1995}
C.frD.prototype={
$1(d){$.am.$1("[family_trees] "+this.a+" fetch: "+A.w(d))
return B.ce},
$S:1996}
C.frz.prototype={
$1(d){return C.i9C(d,this.a)},
$S:z+84}
C.frA.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+3}
C.frB.prototype={
$2(d,e){return e.r.aS(0,d.r)},
$S:z+6}
C.fvQ.prototype={
$1(d){return d.a},
$S:z+56}
C.fvR.prototype={
$1(d){return d.length!==0},
$S:3}
C.fvS.prototype={
$2(d,e){return e.r.aS(0,d.r)},
$S:z+6}
C.fyN.prototype={
$1(d){return d.aj()},
$S:z+5}
C.fE1.prototype={
$1(d){return C.hyJ(d,C.Hh(d,this.a))},
$S:z+5}
C.fE2.prototype={
$1(d){return C.hyK(d,C.Hh(d,this.a))},
$S:z+5};(function aliases(){var w=C.aBN.prototype
w.bwx=w.t
w=C.aA0.prototype
w.bws=w.t
w=C.aHg.prototype
w.bwV=w.t
w=C.aBO.prototype
w.bwy=w.t
w=C.aBQ.prototype
w.bwz=w.t
w=C.aBR.prototype
w.bwA=w.t
w=C.aNr.prototype
w.bzo=w.t
w=C.aPz.prototype
w.bBJ=w.t
w=C.aPA.prototype
w.bBK=w.t})();(function installTearOffs(){var w=a._instance_1u,v=a._instance_0u,u=a._instance_0i,t=a.installInstanceTearOff,s=a._static_1
w(C.aEO.prototype,"gcod","coe",28)
var r
w(r=C.aBM.prototype,"gch6","ch7",65)
v(r,"gaPa","O8",0)
v(r,"gcwy","Bs",0)
v(r,"gbPi","OQ",0)
v(r,"gcKY","z8",0)
v(r,"gcqg","a1I",0)
v(r,"gbKG","Oy",0)
v(r,"gbPI","Y1",0)
w(r,"gbUO","bUP",78)
v(r,"gbF_","Ar",0)
v(C.aBP.prototype,"gcKU","FY",0)
v(r=C.am7.prototype,"gbsT","bsU",2)
v(r,"gbsL","bsM",2)
v(r,"gcM2","cM3",2)
u(r,"gqo","kN",0)
u(r=C.akk.prototype,"geY","fX",2)
w(r,"gccJ","ccK",27)
u(C.av4.prototype,"gqo","kN",0)
v(r=C.az1.prototype,"gcXB","cXC",2)
u(r,"gqo","kN",0)
u(C.aL4.prototype,"gbsR","bsS",2)
v(C.amg.prototype,"gBY","cMf",2)
u(r=C.ame.prototype,"gcMW","cMX",2)
u(r,"gqo","kN",0)
v(r=C.ama.prototype,"gbrJ","brK",2)
v(r,"gcS7","cS8",2)
u(r=C.amc.prototype,"geY","fX",2)
u(r,"gix","cLz",2)
v(r=C.am8.prototype,"gcLo","cLp",2)
u(r,"gbqB","jI",2)
v(r=C.aFn.prototype,"gahc","wo",0)
v(r,"gcjO","a0S",0)
v(r,"gaTq","Iz",0)
v(r=C.aFk.prototype,"gcGT","a3Q",0)
v(r,"gahc","wo",0)
v(r,"gcuA","a2m",0)
v(r,"gcjJ","b3w",2)
v(r,"gckL","a15",0)
w(r,"gch0","ch1",35)
v(r,"gbPA","IE",0)
v(r,"gcHX","cHY",2)
v(r,"gc6I","ZN",0)
w(r,"gcfv","cfw",36)
v(r,"gcjx","cjy",2)
v(r=C.aDN.prototype,"gccP","Qv",0)
v(r,"gccR","ccS",2)
v(r,"gbMa","aaT",0)
v(r=C.aFm.prototype,"gbTc","Yx",0)
v(r,"gc2L","Ze",0)
v(r,"gcAZ","a3d",0)
v(r,"gcx7","a2P",0)
v(C.aFl.prototype,"gcwR","aj0",0)
v(C.aug.prototype,"gcft","a0t",0)
v(C.aAw.prototype,"ga3z","KV",2)
v(C.aAv.prototype,"ga3z","KV",2)
v(C.aze.prototype,"ga3z","KV",2)
v(r=C.aGS.prototype,"gb4H","Ru",0)
v(r,"gbDO","WE",0)
v(r,"gckz","ckA",2)
w(C.aGR.prototype,"gcgl","cgm",69)
t(C.aGT.prototype,"gaTl",0,0,null,["$1","$0"],["Iy","bNu"],70,0,0)
s(C,"hGR","ijr",23)})();(function inheritance(){var w=a.mixinHard,v=a.mixin,u=a.inheritMany,t=a.inherit
u(A.aF,[C.apQ,C.uT,C.nw,C.Ir,C.ag0,C.KR,C.uU,C.bTB,C.tg,C.bpn,C.amp,C.ae7,C.lv,C.bSc,C.aus,C.zC,C.al0,C.MS,C.baN,C.aab,C.bi4,C.ag7,C.aAf,C.afW,C.aL4,C.KY,C.GB,C.bgY,C.aL_,C.ard,C.dhT,C.lY,C.aVo,C.aVn,C.aTq,C.uk,C.rq,C.lF,C.i_,C.kY,C.aIY])
u(A.hq,[C.fPB,C.fPA,C.fPC,C.fZi,C.fCI,C.fCJ,C.fCO,C.fNk,C.fNj,C.fNi,C.c8n,C.fZP,C.fZH,C.fZT,C.fHA,C.dQA,C.dQv,C.dQw,C.dQ8,C.dQ4,C.dQP,C.dQQ,C.dQJ,C.dQK,C.dQR,C.dQS,C.fIl,C.fKR,C.fKS,C.fYm,C.h5Z,C.fHr,C.fYX,C.dh5,C.dgs,C.dgB,C.dgS,C.dgx,C.dgD,C.dgu,C.dgH,C.dgI,C.dgG,C.dgX,C.dgW,C.diT,C.diU,C.diV,C.dhj,C.dho,C.dhn,C.cPK,C.cPM,C.d8h,C.d8G,C.d8H,C.d8K,C.d8M,C.d8N,C.d8O,C.d8Q,C.d8R,C.bRX,C.bRR,C.fvx,C.h5S,C.h5T,C.h5U,C.h5P,C.h5V,C.h5W,C.h5X,C.h5O,C.fIX,C.fXj,C.fEN,C.fLN,C.bN0,C.h6g,C.fXT,C.bLb,C.bL6,C.bL8,C.bL7,C.cqK,C.cqF,C.cqG,C.cqE,C.cqC,C.cqH,C.cQO,C.cFK,C.cFN,C.cFL,C.cFO,C.cFP,C.f87,C.fih,C.bSJ,C.bSD,C.bSH,C.bSk,C.e2q,C.e2n,C.e2o,C.e2m,C.e2s,C.bSB,C.bSr,C.bSb,C.bSa,C.bS6,C.bS7,C.bS8,C.bS9,C.e45,C.e3v,C.e3q,C.e2S,C.e37,C.e3a,C.e36,C.e35,C.e3m,C.e3n,C.e3h,C.e2G,C.e3y,C.e3s,C.e2I,C.e2J,C.e2K,C.e2P,C.e2N,C.e2M,C.e31,C.e32,C.e2X,C.e3F,C.e3B,C.dhu,C.dhv,C.fIp,C.fIq,C.fIr,C.fIn,C.fIo,C.fIu,C.fIv,C.fIw,C.fIs,C.fIt,C.dhO,C.dhE,C.dhz,C.dhJ,C.dhK,C.dhN,C.dhB,C.dhQ,C.dhR,C.dhS,C.fnS,C.eYU,C.dxM,C.dxW,C.dxX,C.dxY,C.dy0,C.dy_,C.dy1,C.dy6,C.dy7,C.cfy,C.cfx,C.cft,C.cfu,C.cfv,C.cfw,C.cfD,C.cfA,C.cfB,C.e3S,C.e3V,C.e3U,C.e40,C.e41,C.dPU,C.fZp,C.fYN,C.h5y,C.fYR,C.fYQ,C.d94,C.d95,C.d90,C.cHy,C.cHA,C.cHB,C.cHt,C.cHC,C.fnn,C.fX6,C.eW1,C.eVY,C.eVU,C.eVS,C.eW5,C.h5l,C.eWe,C.eWn,C.eWi,C.eWj,C.eWs,C.cGK,C.cGI,C.cGJ,C.fHh,C.h66,C.fEM,C.bT5,C.bT4,C.bT1,C.bT2,C.bT3,C.fqO,C.fqP,C.fYB,C.fYC,C.fYD,C.fYE,C.fYF,C.h64,C.fHL,C.fKX,C.fKY,C.fL_,C.fL0,C.fYo,C.h6_,C.h60,C.h61,C.fHs,C.fHt,C.h6a,C.fGX,C.fGY,C.h5z,C.fLO,C.fYh,C.fKU,C.fKV,C.fYc,C.frl,C.frm,C.frn,C.fro,C.frp,C.frD,C.frz,C.frA,C.fvQ,C.fvR,C.fyN,C.fE1,C.fE2])
u(A.aw,[C.b00,C.am5,C.aWI,C.ZW,C.bcz,C.QN,C.a6E,C.tH,C.It,C.bgW,C.bkK,C.byL,C.bo5,C.aet,C.bkJ,C.aes,C.bkI,C.aDO,C.aK1,C.aeu,C.Gx,C.bgX,C.adJ,C.bgV,C.bh_,C.b_Z,C.aug,C.aeP])
u(A.mp,[C.bdc,C.ber,C.bei,C.aIS,C.bjL,C.bpm,C.aWN,C.bde,C.aBL,C.bcI,C.bto,C.bjT,C.bjj,C.bjq,C.bgZ,C.bg0,C.blS,C.byA])
u(A.iO,[C.fZM,C.fZN,C.fZO,C.fZF,C.fZG,C.fZR,C.fZS,C.dQM,C.dQy,C.dQB,C.dQf,C.dQg,C.dQh,C.dQe,C.dQm,C.dQd,C.dQn,C.dQo,C.dQc,C.dQp,C.dQb,C.dQq,C.dQa,C.dQr,C.dQ2,C.dQ3,C.dQ9,C.dQs,C.dQ7,C.dQt,C.dQ6,C.dQi,C.dQ5,C.dQj,C.dQ1,C.dQk,C.dQl,C.dQN,C.dQO,C.dQC,C.dQD,C.dQE,C.dQF,C.dQG,C.dQH,C.dQI,C.dQU,C.dQL,C.fIm,C.dgq,C.dgo,C.dgp,C.dgr,C.dh4,C.dgU,C.dgR,C.dgt,C.dgV,C.dgz,C.dgA,C.dgC,C.dgT,C.dgy,C.dgE,C.dh1,C.dgO,C.dgN,C.dgP,C.dgQ,C.dgJ,C.dgL,C.dgM,C.dgF,C.dgY,C.dh0,C.dgv,C.dgw,C.diS,C.diR,C.diQ,C.diP,C.diW,C.diO,C.diX,C.dhk,C.dhl,C.dhm,C.dhp,C.dhi,C.dhh,C.cPL,C.d8g,C.d8t,C.d8s,C.d8I,C.d8r,C.d8J,C.d8q,C.d8p,C.d8L,C.d8o,C.d8B,C.d8A,C.d8S,C.bRQ,C.bS_,C.bRS,C.bRT,C.bRW,C.bRV,C.bRY,C.bRZ,C.bRU,C.bRO,C.bRP,C.bTt,C.bTu,C.bTv,C.bTw,C.bTx,C.bTy,C.bTz,C.h5R,C.fXk,C.bLa,C.bL5,C.bL3,C.bL4,C.bL2,C.cqM,C.cqN,C.cqL,C.cqO,C.cqQ,C.cqR,C.cqS,C.cqI,C.cFJ,C.cFS,C.cFT,C.cFU,C.cFR,C.cFV,C.cFW,C.cFX,C.cFY,C.cFM,C.cFQ,C.bSZ,C.bSY,C.bSW,C.bSU,C.bSV,C.bSR,C.bSS,C.bST,C.bSX,C.bSQ,C.f88,C.f89,C.f8a,C.f8b,C.f8c,C.bSN,C.bSO,C.bSP,C.bSI,C.bSK,C.bSL,C.bSM,C.bSE,C.bSo,C.bSn,C.bSm,C.bSg,C.bSh,C.bSl,C.bSi,C.bSj,C.bSf,C.e2p,C.e2r,C.e2k,C.e2l,C.e2j,C.e2t,C.e2u,C.e2v,C.e2y,C.e2z,C.e2A,C.e2B,C.e2C,C.e2D,C.e2E,C.e2F,C.e2w,C.e2x,C.bSA,C.bSz,C.bSq,C.bSp,C.bSw,C.bSx,C.bSt,C.bSu,C.bSv,C.bSs,C.bS0,C.bS1,C.bS5,C.bS4,C.bS3,C.bS2,C.e44,C.e43,C.e46,C.e47,C.e48,C.e42,C.e4a,C.e49,C.e3t,C.e3u,C.e3w,C.e2T,C.e39,C.e38,C.e3b,C.e3p,C.e34,C.e3f,C.e3g,C.e3e,C.e3c,C.e3d,C.e3i,C.e3j,C.e3k,C.e3o,C.e2H,C.e3r,C.e2L,C.e2O,C.e2Q,C.e3x,C.e2W,C.e2U,C.e2Y,C.e2Z,C.e2V,C.e3_,C.e33,C.e3G,C.e3H,C.e3z,C.e3C,C.e3D,C.e3E,C.e3J,C.e3A,C.e2R,C.dht,C.dhs,C.dhx,C.dhH,C.dhy,C.eYT,C.dxN,C.dxK,C.dxL,C.dxV,C.dxU,C.dxT,C.dy2,C.dxS,C.dy3,C.dxR,C.dy4,C.dxQ,C.dy5,C.dxP,C.dxO,C.dxZ,C.dy8,C.dyh,C.e3T,C.e3X,C.e3Y,C.e3P,C.e3Q,C.e3R,C.e3W,C.e4_,C.e3Z,C.e3K,C.e3L,C.e3M,C.e3N,C.e3O,C.dPV,C.fZm,C.cp3,C.d93,C.d92,C.d96,C.d9_,C.d91,C.cHq,C.cHw,C.cHx,C.cHv,C.cHz,C.cHu,C.cHr,C.cHs,C.cHD,C.fno,C.fnp,C.eW3,C.eVV,C.eVW,C.eVX,C.eVZ,C.eW_,C.eW2,C.eVQ,C.eVT,C.eW4,C.eVR,C.eW7,C.eW8,C.eW9,C.eWa,C.eW6,C.eVL,C.eVM,C.eVN,C.eVP,C.eVO,C.eWt,C.eWu,C.eWc,C.eWd,C.eWk,C.eWl,C.eWm,C.eWg,C.eWh,C.eWA,C.eWz,C.eWB,C.eWy,C.eWb,C.eWf,C.eWw,C.eWv,C.eWq,C.eWr,C.eWp,C.eWo])
u(A.af,[C.aq2,C.U3,C.a_E,C.a_I,C.a_G,C.a_e,C.am6,C.akj,C.av3,C.az0,C.amf,C.amd,C.am9,C.Wp,C.amb,C.U4,C.arg,C.ara,C.a0i,C.are,C.a0C,C.a0D,C.a7q,C.a_g,C.a_f,C.ZN,C.a2o,C.Gl,C.az7,C.auf,C.au9,C.aue,C.P5])
u(A.ah,[C.aEO,C.bgQ,C.aBM,C.bhe,C.aBP,C.bep,C.aBN,C.aA0,C.aHg,C.az1,C.aBR,C.aBQ,C.aBO,C.bmd,C.amc,C.am8,C.aFn,C.aFk,C.aDN,C.aFm,C.aFl,C.bme,C.aNr,C.aAw,C.aAv,C.aze,C.byD,C.aPz,C.aPA,C.aGS,C.bnB,C.aGR,C.bAo])
u(A.jA,[C.dQx,C.dQz,C.dQu,C.dQT,C.fKT,C.bRN,C.dh3,C.dh2,C.dgK,C.dgZ,C.dh_,C.dhq,C.bTA,C.bTs,C.bSd,C.bSe,C.h5Q,C.h6f,C.bL9,C.cqP,C.cqJ,C.cqD,C.f8d,C.bSC,C.bSF,C.bSG,C.ds1,C.bSy,C.e3l,C.e30,C.e3I,C.dhG,C.dhF,C.dhD,C.dhI,C.dhL,C.dhM,C.dhw,C.dhA,C.dhC,C.dhP,C.cfr,C.cfz,C.cfE,C.dPW,C.fZo,C.fZn,C.fnl,C.fnm,C.eW0,C.eWx,C.cGL,C.fv8,C.fqQ,C.fKZ,C.fGZ,C.fKW,C.frC,C.frB,C.fvS])
u(A.l2,[C.a1U,C.ag9,C.a2c,C.a05,C.acL,C.aLM,C.Is,C.amh,C.cGM,C.cGN])
t(C.am7,C.aBN)
t(C.akk,C.aA0)
t(C.av4,C.aHg)
t(C.bgU,C.aBR)
t(C.amg,C.bgU)
t(C.bgT,C.aBQ)
t(C.ame,C.bgT)
t(C.bgS,C.aBO)
t(C.ama,C.bgS)
t(C.blT,C.aNr)
t(C.byB,C.aPz)
t(C.byC,C.aPA)
t(C.aGT,C.bAo)
t(C.bb_,A.baO)
t(C.byE,A.a75)
t(C.baZ,C.byE)
w(C.aBN,A.cd)
w(C.aA0,A.cd)
w(C.aHg,A.eO)
w(C.aBO,A.cd)
v(C.bgS,C.afW)
w(C.aBQ,A.cd)
v(C.bgT,C.afW)
w(C.aBR,A.cd)
v(C.bgU,C.afW)
w(C.aNr,A.eO)
w(C.aPz,A.cd)
w(C.aPA,A.cd)
v(C.bAo,A.eD)
v(C.byE,A.ji)})()
A.j6(b.typeUniverse,JSON.parse('{"b00":{"aw":[],"v":[]},"bdc":{"aC":[]},"aq2":{"af":[],"v":[]},"aEO":{"ah":["aq2"]},"U3":{"af":[],"v":[]},"am5":{"aw":[],"v":[]},"aWI":{"aw":[],"v":[]},"bgQ":{"ah":["U3"]},"a_E":{"af":[],"v":[]},"a_I":{"af":[],"v":[]},"a_G":{"af":[],"v":[]},"a_e":{"af":[],"v":[]},"aBM":{"ah":["a_E"]},"bhe":{"ah":["a_I"]},"aBP":{"ah":["a_G"]},"ZW":{"aw":[],"v":[]},"ber":{"aC":[]},"bei":{"aC":[]},"bep":{"ah":["a_e"]},"aIS":{"aC":[]},"bjL":{"aC":[]},"bcz":{"aw":[],"v":[]},"am6":{"af":[],"v":[]},"am7":{"ah":["am6"]},"bpm":{"aC":[]},"aWN":{"aC":[]},"akj":{"af":[],"v":[]},"av3":{"af":[],"v":[]},"az0":{"af":[],"v":[]},"akk":{"ah":["akj"]},"bde":{"aC":[]},"QN":{"aw":[],"v":[]},"aBL":{"aC":[]},"av4":{"ah":["av3"]},"bcI":{"aC":[]},"az1":{"ah":["az0"]},"amf":{"af":[],"v":[]},"amd":{"af":[],"v":[]},"am9":{"af":[],"v":[]},"amg":{"ah":["amf"]},"bto":{"aC":[]},"ame":{"ah":["amd"]},"bjT":{"aC":[]},"ama":{"ah":["am9"]},"bjj":{"aC":[]},"Wp":{"af":[],"v":[]},"amb":{"af":[],"v":[]},"U4":{"af":[],"v":[]},"a6E":{"aw":[],"v":[]},"bjq":{"aC":[]},"tH":{"aw":[],"v":[]},"It":{"aw":[],"v":[]},"bmd":{"ah":["Wp"]},"amc":{"ah":["amb"]},"am8":{"ah":["U4"]},"arg":{"af":[],"v":[]},"ara":{"af":[],"v":[]},"a0i":{"af":[],"v":[]},"aeu":{"aw":[],"v":[]},"aFn":{"ah":["arg"]},"aFk":{"ah":["ara"]},"bgW":{"aw":[],"v":[]},"bgZ":{"aC":[]},"bkK":{"aw":[],"v":[]},"bg0":{"aC":[]},"byL":{"aw":[],"v":[]},"bo5":{"aw":[],"v":[]},"aDN":{"ah":["a0i"]},"aet":{"aw":[],"v":[]},"bkJ":{"aw":[],"v":[]},"aes":{"aw":[],"v":[]},"bkI":{"aw":[],"v":[]},"aDO":{"aw":[],"v":[]},"aK1":{"aw":[],"v":[]},"Gx":{"aw":[],"v":[]},"are":{"af":[],"v":[]},"a0C":{"af":[],"v":[]},"a0D":{"af":[],"v":[]},"aFm":{"ah":["are"]},"bgX":{"aw":[],"v":[]},"adJ":{"aw":[],"v":[]},"bgV":{"aw":[],"v":[]},"bh_":{"aw":[],"v":[]},"aFl":{"ah":["a0C"]},"bme":{"ah":["a0D"]},"b_Z":{"aw":[],"v":[]},"a7q":{"af":[],"v":[]},"blT":{"ah":["a7q"]},"blS":{"aC":[]},"aug":{"aw":[],"v":[]},"a_g":{"af":[],"v":[]},"a_f":{"af":[],"v":[]},"ZN":{"af":[],"v":[]},"a2o":{"af":[],"v":[]},"aAw":{"ah":["a_g"]},"aAv":{"ah":["a_f"]},"aze":{"ah":["ZN"]},"byD":{"ah":["a2o"]},"Gl":{"af":[],"v":[]},"az7":{"af":[],"v":[]},"byB":{"ah":["Gl"]},"byC":{"ah":["az7"]},"byA":{"aC":[]},"auf":{"af":[],"v":[]},"aGS":{"ah":["auf"]},"aeP":{"aw":[],"v":[]},"au9":{"af":[],"v":[]},"aue":{"af":[],"v":[]},"bnB":{"ah":["au9"]},"aGR":{"ah":["aue"]},"P5":{"af":[],"v":[]},"aGT":{"ah":["P5"],"eD":[]},"baZ":{"ji":[],"fk":[]}}'))
A.Dg(b.typeUniverse,JSON.parse('{"afW":1}'))
var y={q:'\nSWAHILI THAT REAL SWAHILI SPEAKERS USE (critical): translate the MEANING and write the way a Swahili speaker in Tanzania, Kenya or eastern Congo would say it. NEVER translate word for word. Many English phrases have no literal Swahili twin and sound strange or are not understood if copied. Examples:\n- "family tree" is NOT "mti wa familia": say "ukoo" (the family line), "nasaba", or "historia ya ukoo wetu". "family book" -> "kitabu cha familia" or "kitabu cha ukoo".\n- ancestors -> "mababu" / "wazee wa zamani"; grandparents -> "babu na bibi"; great-grandparent -> "babu/bibi mkubwa"; descendants -> "wazao" / "vizazi vyetu"; generation -> "kizazi"; heritage / legacy -> "urithi", "mila na desturi"; bloodline -> "ukoo", "damu moja"; roots -> "asili yetu".\n- relatives: cousin -> "binamu"; father\'s brother -> "baba mdogo" / "baba mkubwa"; mother\'s brother -> "mjomba"; father\'s sister -> "shangazi"; mother\'s sister -> "mama mdogo" / "mama mkubwa"; nephew or niece -> "mpwa"; in-laws -> "wakwe"; brother- or sister-in-law -> "shemeji"; spouse -> "mke" (wife) / "mume" (husband) / "mwenzi wake"; firstborn -> "mzaliwa wa kwanza" / "kifungua mimba"; last-born -> "kitinda mimba"; elders -> "wazee"; clan -> "ukoo" / "kabila".\n- life events: was born -> "alizaliwa"; passed away / died -> "alifariki" / "alifariki dunia"; he married -> "alimuoa", she married -> "aliolewa na"; raised -> "alilea"; moved -> "alihamia"; blessing -> "baraka"; memories -> "kumbukumbu"; story -> "hadithi" / "simulizi"; chapter -> "sura"; page -> "ukurasa"; "our family" -> "familia yetu".\n- Use everyday words, short clear sentences and natural word order. If an idea has no good Swahili word, explain it simply instead of inventing a word. Never use a rare or strange word you are not sure about.\n- WRITE AS A NATIVE AUTHOR, NOT AS A TRANSLATOR. Build every sentence the Swahili way (short, clear, with the right subject and tense markers) and join ideas with "na", "kisha", "baadaye", "hivyo", "ndipo". Never keep the shape of an English sentence.\n- KEEP IT PLAIN AND WARM. Drop flowery English phrases and pictures that do not work in Swahili ("the tree grew wider", "bloodlines shaped nations", "carried great destinies", "sacred story", "anchors the beginning") and say the plain fact instead. Never add big claims that the facts do not give.\n- Correct Swahili grammar: noun-class agreement (mtoto mmoja, watoto watatu, kijiji kimoja, vijiji vitatu), tenses (a-li- past, a-na- now, a-ta- future, a-me- done) and the right "wa / cha / la / ya / za / vya".\n- Write people\'s names with normal capitals (Ikungu Ele, Muteleka), never in ALL CAPITALS. Place names and dates stay as they are.\n- Example. English: "Through Ekama Pele the family grew, and he had three children: Muteleka, Bembesile and Nyakasi Ebulo." Good Swahili: "Familia iliendelea kukua kupitia Ekama Pele, aliyepata watoto watatu: Muteleka, Bembesile na Nyakasi Ebulo." Bad, word for word (never write like this): "Kupitia Ekama Pele, mti ulikua mpana zaidi, ukizaa watoto watatu wa msingi."\n',z:"AI is not available right now. Please try again later.",k:"No internet connection. Try again when you are online.",B:'PathMetricIterator is not pointing to a PathMetric. This can happen in two situations:\n- The iteration has not started yet. If so, call "moveNext" to start iteration.\n- The iterator ran out of elements. If so, check that "moveNext" returns true prior to calling "current".',A:"The AI could not do that just now. Nothing was changed.",y:"The AI could not translate the book. Nothing was changed."}
var x=(function rtii(){var w=A.at
return{e2:w("aTq"),cq:w("mm"),Q:w("rq"),r:w("bs<n,n>"),c5:w("aVn"),dY:w("aVo"),fH:w("MS"),de:w("al0"),dN:w("N_<H>"),gc:w("Em<H>"),A:w("eL<n?>"),e:w("Ir"),B:w("nw"),P:w("i_"),df:w("lv"),k:w("kY"),x:w("aB<~>"),U:w("O<T1>"),V:w("O<ab>"),C:w("O<rq>"),O:w("O<u>"),c:w("O<MS>"),b:w("O<al0>"),ac:w("O<eL<n?>>"),I:w("O<nw>"),u:w("O<i_>"),J:w("O<lv>"),_:w("O<kY>"),cl:w("O<aB<ai<a9<n,@>>>>"),R:w("O<nz>"),eU:w("O<ai<+(G,G)>>"),ez:w("O<a9<n,aF>>"),gE:w("O<a9<n,n>>"),Y:w("O<a9<n,@>>"),fD:w("O<mS>"),bp:w("O<oL>"),g:w("O<r>"),ar:w("O<aus>"),v:w("O<fW>"),gy:w("O<aab>"),L:w("O<+(n,n)>"),G:w("O<+(G,G)>"),E:w("O<+(G,~())>"),bd:w("O<+(n,H,R)>"),bF:w("O<+count,id,name(H,n,n)>"),F:w("O<cU>"),s:w("O<n>"),cF:w("O<au>"),aS:w("O<j5>"),dT:w("O<baN>"),p:w("O<v>"),Z:w("O<fk>"),D:w("O<lF>"),h:w("O<aAf>"),cC:w("O<bi4>"),fp:w("O<KR>"),M:w("O<KY>"),gZ:w("O<aIY>"),gA:w("O<ag0>"),e4:w("O<ag7>"),dE:w("O<aL_>"),f7:w("O<R>"),n:w("O<G>"),t:w("O<H>"),dS:w("O<aC?>"),d4:w("O<n?>"),eF:w("cw<ah<af>>"),d:w("ai<nw>"),do:w("ai<i_>"),cg:w("ai<lv>"),ax:w("ai<kY>"),fO:w("ai<a9<n,@>>"),cz:w("ai<+(n,n)>"),bC:w("ai<+count,id,name(H,n,n)>"),dy:w("ai<n>"),er:w("ai<au>"),gk:w("ai<lF>"),j:w("ai<@>"),fK:w("bA<n,n>"),d2:w("bA<n,ai<a9<n,@>>>"),a:w("a9<n,@>"),f:w("a9<@,@>"),gv:w("N<n,Iu>"),cM:w("N<H,n>"),w:w("iw"),g2:w("rP"),bV:w("apQ"),fL:w("cu"),K:w("aF"),dc:w("fW"),fo:w("Pr<H>"),fz:w("+(n,n)"),ei:w("+scope,text(n,n)"),bn:w("+games,limit(R,H)"),d9:w("+dx,hidden(G,ai<i_>)"),cs:w("+count,id,name(H,n,n)"),N:w("n"),fT:w("iz<i_>"),ec:w("iz<n>"),gW:w("r6<G>"),X:w("bq<G>"),bW:w("dJ"),W:w("bh<n>"),b4:w("bh<H>"),cI:w("k5<n>"),av:w("Y<zC>"),cc:w("Y<n>"),l:w("v"),gF:w("fk"),fA:w("lF"),dO:w("GB"),bw:w("aes<n?>"),cy:w("L_"),q:w("mc"),y:w("R"),i:w("G"),z:w("@"),S:w("H"),eK:w("ai<kY>?"),m:w("ard?"),cT:w("r?"),h5:w("+(n,n)?"),eo:w("+code,qrPayload,usesRemaining(n,n,H)?"),he:w("+qrPayload,token,usesRemaining(n,n,H)?"),gG:w("+members,trees,viewOnly(H,H,R)?"),az:w("qm?"),T:w("n?"),aD:w("dJ?"),o:w("lF?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.b5M=new A.be(B.fR,B.bJ,B.fR,B.bJ)
D.aeG=new A.be(B.fR,B.ip,B.fR,B.ip)
D.b6_=new A.be(B.jy,B.bJ,B.bJ,B.bJ)
D.b63=new A.ay(B.cU,1.4,B.r,-1)
D.b6d=new A.ay(B.ab,1,B.r,-1)
D.afb=new A.aY(140,1/0,0,1/0)
D.b7B=new A.aY(0,1/0,64,1/0)
D.b7F=new A.aY(0,84,0,1/0)
D.afi=new A.aY(130,1/0,0,1/0)
D.aDD=w([B.ma,B.rT,B.c],x.O)
D.c9y=new A.a8(B.ay,B.aD,B.x,D.aDD,null,null)
D.b8p=new A.o(null,null,null,null,null,D.c9y,B.n)
D.dhb=w([B.aV,B.bQ],x.O)
D.cbG=new A.a8(B.aZ,B.b4,B.x,D.dhb,null,null)
D.b8K=new A.o(null,null,null,null,null,D.cbG,B.n)
D.YO=new A.u(1,0.0784313725490196,0.0784313725490196,0.16862745098039217,B.q)
D.fA=new A.u(1,0.16470588235294117,0.08235294117647059,0.0392156862745098,B.q)
D.dle=w([B.dB,D.YO,D.fA],x.O)
D.c8J=new A.a8(B.aZ,B.b4,B.x,D.dle,null,null)
D.b9u=new A.o(null,null,null,null,null,D.c8J,B.n)
D.fve=new A.F(!0,B.bX,null,null,null,null,34,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h5N=new A.B("?",null,D.fve,null,null,null,null,null,null,null,null,null)
D.bdk=new A.cj(B.A,null,null,D.h5N,null)
D.Wi=new A.F(!0,null,null,null,null,null,70,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fON=new A.B("\ud83c\udf33",null,D.Wi,null,null,null,null,null,null,null,null,null)
D.ag2=new A.cj(B.A,null,null,D.fON,null)
D.fRs=new A.B("\ud83c\udfc6",null,Ar.KX,null,null,null,null,null,null,null,null,null)
D.bdv=new A.cj(B.A,null,null,D.fRs,null)
D.bfk=new A.fl(null,null,null,null,null,E.ku,null,null,null,null)
D.ag4=new A.cj(B.A,null,null,D.bfk,null)
D.kP=new A.u(1,0.984313725490196,0.9529411764705882,0.8784313725490196,B.q)
D.fvN=new A.F(!0,D.kP,null,null,null,null,15,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fQs=new A.B("No books on the shelf yet.",null,D.fvN,null,null,null,null,null,null,null,null,null)
D.ewl=new A.D(B.nL,D.fQs,null)
D.bdL=new A.cj(B.A,null,null,D.ewl,null)
D.fCW=new A.F(!0,D.fA,null,null,null,null,16,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h6I=new A.B("\ud83d\ude8c  On the road\u2026",null,D.fCW,null,null,null,null,null,null,null,null,null)
D.ewW=new A.D(B.cp,D.h6I,null)
D.bed=new A.cj(B.A,null,null,D.ewW,null)
D.aXM=new A.B("\ud83e\uddfa",null,D.Wi,null,null,null,null,null,null,null,null,null)
D.bes=new A.cj(B.A,null,null,D.aXM,null)
D.fTV=new A.B("\ud83c\udfad",null,D.Wi,null,null,null,null,null,null,null,null,null)
D.beD=new A.cj(B.A,null,null,D.fTV,null)
D.beG=new A.cj(B.A,null,null,A7.YB,null)
D.agp=new A.u(1,0.8980392156862745,0.39215686274509803,0.3568627450980392,B.q)
D.agw=new A.u(1,0.08627450980392157,0.18823529411764706,0.12156862745098039,B.q)
D.bgU=new A.u(1,0.058823529411764705,0.1607843137254902,0.13333333333333333,B.q)
D.bgZ=new A.u(1,0.16862745098039217,0.08627450980392157,0.03137254901960784,B.q)
D.bha=new A.u(1,0.16862745098039217,0.14901960784313725,0.34509803921568627,B.q)
D.bhc=new A.u(1,0.7098039215686275,0.40784313725490196,0.22745098039215686,B.q)
D.bhe=new A.u(1,0.2901960784313726,0.22745098039215686,0.16470588235294117,B.q)
D.bhm=new A.u(1,0.47843137254901963,0.22745098039215686,0.09411764705882353,B.q)
D.lF=new A.u(1,0.7058823529411765,0.3254901960784314,0.16470588235294117,B.q)
D.bhq=new A.u(0.6666666666666666,0,0,0.06274509803921569,B.q)
D.bhv=new A.u(1,0.12156862745098039,0.23921568627450981,0.16862745098039217,B.q)
D.bhw=new A.u(1,0.07058823529411765,0.03137254901960784,0.01568627450980392,B.q)
D.bhx=new A.u(1,0.3568627450980392,0.4823529411764706,0.6509803921568628,B.q)
D.lG=new A.u(1,0.1803921568627451,0.6078431372549019,0.30980392156862746,B.q)
D.bi8=new A.u(1,0.12156862745098039,0.2,0.12549019607843137,B.q)
D.BQ=new A.u(1,0.47843137254901963,0.2901960784313726,0.1411764705882353,B.q)
D.bih=new A.u(1,0.8862745098039215,0.7529411764705882,0.4392156862745098,B.q)
D.biB=new A.u(1,1,0.9568627450980393,0.8235294117647058,B.q)
D.biE=new A.u(1,1,0.7764705882352941,0.4196078431372549,B.q)
D.biK=new A.u(1,0.16470588235294117,0.35294117647058826,0.22745098039215686,B.q)
D.biS=new A.u(1,0.2901960784313726,0.20784313725490197,0.1568627450980392,B.q)
D.aha=new A.u(1,0.2901960784313726,0.24705882352941178,0.2901960784313726,B.q)
D.biZ=new A.u(1,0.30980392156862746,0.6392156862745098,0.8901960784313725,B.q)
D.Z0=new A.u(1,0.5411764705882353,0.48627450980392156,0.4,B.q)
D.ahd=new A.u(1,0.10196078431372549,0.0784313725490196,0.19607843137254902,B.q)
D.bj9=new A.u(1,0.12941176470588237,0.11764705882352941,0.2901960784313726,B.q)
D.Z2=new A.u(1,0.7490196078431373,0.9019607843137255,1,B.q)
D.bju=new A.u(1,0.3333333333333333,0.2196078431372549,0.1803921568627451,B.q)
D.ahp=new A.u(1,0.12156862745098039,0.07450980392156863,0.043137254901960784,B.q)
D.bjT=new A.u(0.13333333333333333,0.7215686274509804,0.6901960784313725,1,B.q)
D.bk8=new A.u(1,0.043137254901960784,0.043137254901960784,0.12549019607843137,B.q)
D.bkx=new A.u(1,1,0.47843137254901963,0.10196078431372549,B.q)
D.bkI=new A.u(1,0.48627450980392156,0.41568627450980394,0.27450980392156865,B.q)
D.G4=new A.u(1,0.8509803921568627,0.8235294117647058,0.7529411764705882,B.q)
D.bl5=new A.u(1,0.8980392156862745,0.8627450980392157,0.7843137254901961,B.q)
D.bl8=new A.u(1,0.10196078431372549,0.16470588235294117,0.22745098039215686,B.q)
D.blc=new A.u(1,0.23137254901960785,0.13725490196078433,0.0784313725490196,B.q)
D.ahS=new A.u(1,0.47843137254901963,0.35294117647058826,0.1803921568627451,B.q)
D.blt=new A.u(1,0.1411764705882353,0.10588235294117647,0.24705882352941178,B.q)
D.blz=new A.u(1,0.5411764705882353,0.35294117647058826,0.16470588235294117,B.q)
D.blF=new A.u(1,0.35294117647058826,0.26666666666666666,0.1411764705882353,B.q)
D.ahW=new A.u(1,0.788235294117647,0.5215686274509804,0.16862745098039217,B.q)
D.blN=new A.u(1,0.2901960784313726,0.2627450980392157,0.3137254901960784,B.q)
D.bmf=new A.u(1,0.6039215686274509,0.47843137254901963,0.33725490196078434,B.q)
D.bmn=new A.u(1,0.16470588235294117,0.11372549019607843,0.10588235294117647,B.q)
D.bmp=new A.u(1,0.4196078431372549,0.30980392156862746,0.2,B.q)
D.bmu=new A.u(1,0.22745098039215686,0.16862745098039217,0.3607843137254902,B.q)
D.aib=new A.u(1,0.7215686274509804,0.7372549019607844,0.8470588235294118,B.q)
D.bn5=new A.u(0.3333333333333333,1,0.9529411764705882,0.7686274509803922,B.q)
D.aiA=new A.u(1,0.5411764705882353,0.41568627450980394,0.2823529411764706,B.q)
D.bo2=new A.u(1,0.22745098039215686,0.058823529411764705,0.06274509803921569,B.q)
D.aiN=new A.u(1,0.9137254901960784,0.8470588235294118,0.7058823529411765,B.q)
D.bos=new A.u(1,1,0.6039215686274509,0.12156862745098039,B.q)
D.Gh=new A.u(1,0.2901960784313726,0.17254901960784313,0.0784313725490196,B.q)
D.boy=new A.u(1,0.7215686274509804,0.7372549019607844,0.7843137254901961,B.q)
D.boI=new A.u(1,0.16470588235294117,0.17254901960784313,0.41568627450980394,B.q)
D.boK=new A.u(1,0.35294117647058826,0.12156862745098039,0.12156862745098039,B.q)
D.aiR=new A.u(1,0.22745098039215686,0.35294117647058826,0.20392156862745098,B.q)
D.bp1=new A.u(1,0.08627450980392157,0.2196078431372549,0.12156862745098039,B.q)
D.bp3=new A.u(1,0.09411764705882353,0.08627450980392157,0.2196078431372549,B.q)
D.bp6=new A.u(1,0.9607843137254902,0.9411764705882353,0.8784313725490196,B.q)
D.aiZ=new A.u(1,0.10196078431372549,0.06274509803921569,0.09411764705882353,B.q)
D.ZN=new A.u(1,0.10196078431372549,0.058823529411764705,0.03137254901960784,B.q)
D.bpt=new A.u(1,0.5411764705882353,0.41568627450980394,0.2196078431372549,B.q)
D.bpO=new A.u(1,1,0.7058823529411765,0.32941176470588235,B.q)
D.bpT=new A.u(1,0.9568627450980393,1,0.6901960784313725,B.q)
D.ajb=new A.u(1,1,0.5411764705882353,0.11764705882352941,B.q)
D.bq_=new A.u(1,0.4196078431372549,0.2901960784313726,0.22745098039215686,B.q)
D.ZT=new A.u(1,0.7058823529411765,0.47058823529411764,0.22745098039215686,B.q)
D.bqk=new A.u(1,0.4196078431372549,0.35294117647058826,0.22745098039215686,B.q)
D.bql=new A.u(1,0.9098039215686274,0.9333333333333333,0.9607843137254902,B.q)
D.Gp=new A.u(1,0.47843137254901963,0.24313725490196078,0.11372549019607843,B.q)
D.br9=new A.u(1,0.2901960784313726,0.22745098039215686,0.11764705882352941,B.q)
D.brM=new A.u(1,0.1843137254901961,0.36470588235294116,0.22745098039215686,B.q)
D.brS=new A.u(1,1,0.7686274509803922,0.4196078431372549,B.q)
D.brW=new A.u(0,0.3333333333333333,0.2196078431372549,0.1803921568627451,B.q)
D.qp=new A.u(1,1,0.9529411764705882,0.8627450980392157,B.q)
D.bs6=new A.u(1,0.8980392156862745,0.25882352941176473,0.10588235294117647,B.q)
D.bsa=new A.u(1,0.08235294117647059,0.11372549019607843,0.16862745098039217,B.q)
D.bsg=new A.u(0.4,1,0.9450980392156862,0.7215686274509804,B.q)
D.bsi=new A.u(1,0.4196078431372549,0.2901960784313726,0.16470588235294117,B.q)
D.ajW=new A.u(1,0.7098039215686275,0.396078431372549,0.11372549019607843,B.q)
D.ak_=new A.u(1,0.8509803921568627,0.6980392156862745,0.4196078431372549,B.q)
D.Gu=new A.u(1,0.5411764705882353,0.35294117647058826,0.2,B.q)
D.a_d=new A.u(0.13333333333333333,0.7215686274509804,0.6039215686274509,0.35294117647058826,B.q)
D.ak8=new A.u(1,0.3568627450980392,0.22745098039215686,0.13333333333333333,B.q)
D.bts=new A.u(1,0.23137254901960785,0.16470588235294117,0.4196078431372549,B.q)
D.btL=new A.u(1,1,0.6039215686274509,0.1803921568627451,B.q)
D.bua=new A.u(1,1,0.9411764705882353,0.6274509803921569,B.q)
D.buj=new A.u(1,0.788235294117647,0.6274509803921569,0.30980392156862746,B.q)
D.akx=new A.u(1,0.8470588235294118,0.796078431372549,0.6901960784313725,B.q)
D.a_q=new A.u(1,0.4196078431372549,0.35294117647058826,0.34509803921568627,B.q)
D.but=new A.u(1,0.4196078431372549,0.2901960784313726,0.2196078431372549,B.q)
D.buK=new A.u(1,0.34509803921568627,0.3764705882352941,0.43137254901960786,B.q)
D.a_w=new A.u(1,0.22745098039215686,0.16470588235294117,0.13333333333333333,B.q)
D.bv0=new A.u(1,0.8509803921568627,0.7843137254901961,0.6274509803921569,B.q)
D.bvg=new A.u(1,0.5450980392156862,0.17254901960784313,0.23137254901960785,B.q)
D.a_B=new A.u(1,0.06666666666666667,0.058823529411764705,0.16470588235294117,B.q)
D.bvl=new A.u(1,0.8509803921568627,0.3843137254901961,0.3568627450980392,B.q)
D.akP=new A.u(1,1,0.9098039215686274,0.6901960784313725,B.q)
D.akR=new A.u(1,0.3568627450980392,0.22745098039215686,0.07058823529411765,B.q)
D.bvE=new A.u(1,0.8509803921568627,0.7607843137254902,0.611764705882353,B.q)
D.akX=new A.u(1,0.10196078431372549,0.1411764705882353,0.2,B.q)
D.bw5=new A.u(1,0.9019607843137255,0.8117647058823529,0.6274509803921569,B.q)
D.bw9=new A.u(1,0.5411764705882353,0.47843137254901963,0.4,B.q)
D.bwg=new A.u(1,0.8509803921568627,1,0.41568627450980394,B.q)
D.bwo=new A.u(1,0.10196078431372549,0.10196078431372549,0.12156862745098039,B.q)
D.bwx=new A.u(1,0.29411764705882354,0.4196078431372549,0.47843137254901963,B.q)
D.bx5=new A.u(1,0.8980392156862745,0.7529411764705882,0.47843137254901963,B.q)
D.bxA=new A.u(1,0.9607843137254902,0.8705882352941177,0.7019607843137254,B.q)
D.fKC=new A.B("None \u2014 root ancestor",null,null,null,null,null,null,null,null,null,null,null)
D.bB6=new A.eL(null,D.fKC,B.fb,null,x.A)
D.fTM=new A.B("None",null,null,null,null,null,null,null,null,null,null,null)
D.bB8=new A.eL(null,D.fTM,B.fb,null,x.A)
D.alQ=new A.bd(3e4)
D.bBG=new A.bd(38e5)
D.bCp=new A.ir(0,10,0,10)
D.bCy=new A.Q(0,1,0,0)
D.bCJ=new A.ir(0,4,0,4)
D.bCM=new A.Q(0,4,5,0)
D.bD2=new A.Q(10,10,14,10)
D.bDd=new A.ir(10,4,10,4)
D.bDl=new A.ir(10,8,10,8)
D.bDm=new A.Q(10,8,8,8)
D.bDR=new A.Q(12,6,12,2)
D.bE8=new A.Q(14,0,14,6)
D.bEc=new A.Q(14,10,6,6)
D.bEd=new A.Q(14,12,14,0)
D.bEh=new A.Q(14,12,14,8)
D.bEk=new A.Q(14,12,8,14)
D.bEo=new A.ir(14,14,14,14)
D.bEH=new A.Q(14,6,14,40)
D.bEK=new A.Q(14,8,14,30)
D.bF7=new A.Q(16,2,16,10)
D.bFg=new A.Q(16,6,16,30)
D.bFi=new A.Q(16,6,16,8)
D.bFx=new A.Q(18,10,18,4)
D.bFz=new A.Q(18,12,18,0)
D.bFG=new A.Q(18,14,12,4)
D.anm=new A.Q(18,16,18,8)
D.bFW=new A.Q(18,20,18,22)
D.bG1=new A.Q(18,30,18,30)
D.bGj=new A.Q(20,10,12,20)
D.bGm=new A.Q(20,11,20,11)
D.bGy=new A.Q(20,18,16,18)
D.bGA=new A.Q(20,18,20,6)
D.bHp=new A.Q(24,32,24,28)
D.bHq=new A.Q(24,36,24,32)
D.bHt=new A.Q(26,26,24,14)
D.bHI=new A.Q(2,4,2,8)
D.bHM=new A.Q(30,0,30,0)
D.bHX=new A.Q(38,22,22,22)
D.anK=new A.Q(40,24,24,24)
D.bHZ=new A.ir(40,40,40,40)
D.bI0=new A.Q(46,30,30,30)
D.bIs=new A.Q(56,40,40,40)
D.bIw=new A.Q(1.25,1.25,1.25,1.25)
D.bIx=new A.Q(60,0,60,0)
D.bIB=new A.Q(6,14,6,16)
D.bIF=new A.Q(6,4,12,0)
D.bIJ=new A.Q(6,6,10,2)
D.bIQ=new A.ir(7,3,7,3)
D.bJl=new A.Q(5,1.5,5,1.5)
D.bJw=new A.Q(6,2.5,6,2.5)
D.h0Y=new A.B("Family Games",null,B.jQ,null,null,null,null,null,null,null,null,null)
D.fJe=new A.B("Quizzes, stories by the fire and tests made from the people in this tree. Win Family Stars.",null,B.W9,null,null,null,null,null,null,null,null,null)
D.cKM=w([D.h0Y,D.fJe],x.p)
D.byA=new A.fn(B.ah,B.e,B.h,B.E,null,B.p,null,0,D.cKM,null)
D.bJX=new A.by(1,B.ba,D.byA,null)
D.h5k=new A.B("Signature",null,B.ng,null,null,null,null,null,null,null,null,null)
D.bK_=new A.by(1,B.ba,D.h5k,null)
D.fYw=new A.B("MADE BY THE ONE WHO PLANTED THE TREE",null,T.u_,null,null,null,null,null,null,null,null,null)
D.bKx=new A.by(1,B.ba,D.fYw,null)
D.h2q=new A.B("Tell the AI what to fix",null,B.dk,null,null,null,null,null,null,null,null,null)
D.bKP=new A.by(1,B.ba,D.h2q,null)
D.fDI=new A.F(!0,B.c,null,null,null,null,22,B.u,null,null,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h4p=new A.B("Worksheets",null,D.fDI,null,null,null,null,null,null,null,null,null)
D.fDU=new A.F(!0,E.agU,null,null,null,null,13,B.cD,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h3g=new A.B("Track your project spending",null,D.fDU,null,null,null,null,null,null,null,null,null)
D.d8w=w([D.h4p,B.aw,D.h3g],x.p)
D.byd=new A.fn(B.ah,B.e,B.h,B.E,null,B.p,null,0,D.d8w,null)
D.bKV=new A.by(1,B.ba,D.byd,null)
D.fyC=new A.F(!0,E.ku,null,null,null,null,18,B.u,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fJO=new A.B("FAMILY LIBRARY",null,D.fyC,null,null,null,null,null,null,null,null,null)
D.bLd=new A.by(1,B.ba,D.fJO,null)
D.P_=new C.Ir("leather","","",0,"gold",25,"middle","double","leather","",!0,"classic")
D.wI=new C.Is(0,"male")
D.oB=new C.Is(1,"female")
D.z8=new C.Is(2,"unknown")
D.uO=new C.amh(0,"owner")
D.P0=new C.amh(1,"editor")
D.kY=new C.amh(2,"viewer")
D.apI=new A.a_(61199,"MaterialIcons",!1)
D.bQy=new A.a_(61504,"MaterialIcons",!1)
D.bQz=new A.a_(61505,"MaterialIcons",!1)
D.bQB=new A.a_(61587,"MaterialIcons",!1)
D.bQI=new A.a_(61890,"MaterialIcons",!1)
D.bRA=new A.a_(63034,"MaterialIcons",!0)
D.bRS=new A.a_(63153,"MaterialIcons",!1)
D.bSp=new A.a_(63429,"MaterialIcons",!1)
D.arN=new A.a_(984520,"MaterialIcons",!1)
D.bR5=new A.a_(62776,"MaterialIcons",!1)
D.bUN=new A.ae(D.bR5,26,B.b2,null,null,null)
D.bPw=new A.a_(57648,"MaterialIcons",!1)
D.bV6=new A.ae(D.bPw,14,B.c,null,null,null)
D.bVo=new A.ae(B.Hw,17,null,null,null,null)
D.bVu=new A.ae(B.Pw,null,B.bQ,null,null,null)
D.bVU=new A.ae(E.a3a,null,null,null,null,null)
D.bVX=new A.ae(B.jb,18,E.ku,null,null,null)
D.a2U=new A.a_(62044,"MaterialIcons",!1)
D.bW2=new A.ae(D.a2U,null,B.aV,null,null,null)
D.bW9=new A.ae(B.zm,18,B.c,null,null,null)
D.bWR=new A.ae(B.e9,16,null,null,null,null)
D.bWY=new A.ae(D.a2U,32,B.aV,null,null,null)
D.bXg=new A.ae(E.apJ,18,B.cU,null,null,null)
D.bYm=new A.ae(B.HH,22,B.aA,null,null,null)
D.bYy=new A.ae(B.e9,22,B.b2,null,null,null)
D.bYL=new A.ae(Y.a2Z,22,B.c,null,null,null)
D.bYS=new A.ae(B.uY,52,B.c,null,null,null)
D.bZ1=new A.ae(B.HH,30,B.aA,null,null,null)
D.bZl=new A.ae(B.a3e,null,B.c,null,null,null)
D.asw=new A.ae(B.va,22,B.c,null,null,null)
D.bZu=new A.ae(B.e9,17,null,null,null,null)
D.bZS=new A.ae(B.wT,26,B.cU,null,null,null)
D.c_E=new A.ae(B.a3p,16,null,null,null,null)
D.c0q=new A.ae(B.uY,24,B.c,null,null,null)
D.c0v=new A.ae(B.Pu,20,B.ty,null,null,null)
D.c0A=new A.ae(B.Hu,null,B.bQ,null,null,null)
D.c0J=new A.ae(B.jb,18,B.c,null,null,null)
D.c1p=new A.ae(B.cA,22,B.ab,null,null,null)
D.c2i=new A.ae(B.ek,16,B.ab,null,null,null)
D.c2u=new A.ae(D.a2U,20,B.aV,null,null,null)
D.asX=new A.ae(B.hb,20,null,null,null,null)
D.c30=new A.ae(B.cA,18,D.kP,null,null,null)
D.c3i=new A.ae(B.zx,28,B.c,null,null,null)
D.c3u=new A.ae(B.Pj,null,B.fh,null,null,null)
D.c3P=new A.ae(B.zx,24,B.c,null,null,null)
D.c4g=new A.ae(B.uY,null,B.aV,null,null,null)
D.c4h=new A.ae(B.js,20,B.cU,null,null,null)
D.c4B=new A.ae(B.Hw,16,null,null,null,null)
D.c69=new A.e7(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,!0,B.k5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,B.eN,!0,null,null,null,null)
D.atG=new C.a6E(10,null)
D.c6F=new C.a6E(12,null)
D.c6G=new C.a6E(14,null)
D.dpn=w([B.bv,B.aV,B.fq,B.b2],x.O)
D.c7R=new A.a8(B.ay,B.aD,B.x,D.dpn,null,null)
D.bqV=new A.u(1,0.5411764705882353,0.35294117647058826,0.16862745098039217,B.q)
D.bxc=new A.u(1,0.23137254901960785,0.13725490196078433,0.07058823529411765,B.q)
D.d4Y=w([D.bqV,D.bxc],x.O)
D.c82=new A.a8(B.aZ,B.b4,B.x,D.d4Y,null,null)
D.djf=w([B.fd,B.fX,B.fq],x.O)
D.c88=new A.a8(B.ay,B.aD,B.x,D.djf,null,null)
D.ajK=new A.u(1,0.16470588235294117,0.09019607843137255,0.047058823529411764,B.q)
D.bhy=new A.u(1,0.08627450980392157,0.043137254901960784,0.0196078431372549,B.q)
D.d7b=w([D.ajK,D.bhy],x.O)
D.c8K=new A.a8(B.aZ,B.b4,B.x,D.d7b,null,null)
D.bll=new A.u(1,0.2901960784313726,0.16470588235294117,0.08235294117647059,B.q)
D.aCV=w([D.bll,D.ajK],x.O)
D.c93=new A.a8(B.ay,B.aD,B.x,D.aCV,null,null)
D.ait=new A.u(1,0.6039215686274509,0.3176470588235294,0.1568627450980392,B.q)
D.bnU=new A.u(1,0.35294117647058826,0.16470588235294117,0.07058823529411765,B.q)
D.dih=w([D.ait,D.bnU],x.O)
D.c9K=new A.a8(B.a5,B.a8,B.x,D.dih,null,null)
D.dww=w([B.bG,B.nx],x.O)
D.c9M=new A.a8(B.aZ,B.b4,B.x,D.dww,null,null)
D.bqQ=new A.u(1,0.9137254901960784,0.8509803921568627,0.7019607843137254,B.q)
D.dxs=w([D.bqQ,D.kP,D.kP,I.Nt],x.O)
D.dA7=w([0,0.07,0.9,1],x.n)
D.cah=new A.a8(B.a5,B.a8,B.x,D.dxs,D.dA7,null)
D.caq=new A.a8(B.ay,B.aD,B.x,B.Ta,null,null)
D.d2J=w([B.aC,D.lF],x.O)
D.cat=new A.a8(B.a5,B.a8,B.x,D.d2J,null,null)
D.dw3=w([B.b2,B.aV,B.bQ],x.O)
D.cbt=new A.a8(B.ay,B.aD,B.x,D.dw3,null,null)
D.cfM=w([10,20,30],x.t)
D.cpJ=w([-1,-0.4,0.3,1],x.n)
D.cxa=w([B.bv,B.b2,B.fd],x.O)
D.cxi=w([B.bd,B.aC,B.kt],x.O)
D.cxk=w(["\xd7","\xf7","100","0","\u221e","%"],x.s)
D.cy2=w([30,140,262,360],x.n)
D.bpc=new A.u(1,0.07058823529411765,0.20784313725490197,0.1803921568627451,B.q)
D.cDA=w([D.bpc,E.ajk],x.O)
D.eqY=new A.r(1,2)
D.fgz=new A.cU(B.b5,D.eqY,3)
D.azN=w([D.fgz],x.F)
D.cL2=w([B.h7,B.ci,B.fz],x.O)
D.cNP=w([B.bP,B.bw,B.bs],x.O)
D.bM3=new C.uT("classic","Classic leather","Gold-edged brown leather",D.aCV,E.ku,E.ku,"\u2766",B.K,!0,!1,!1,!1)
D.bgE=new A.u(1,0.23137254901960785,0.12156862745098039,0.054901960784313725,B.q)
D.bvW=new A.u(1,0.10980392156862745,0.058823529411764705,0.027450980392156862,B.q)
D.dah=w([D.bgE,D.bvW],x.O)
D.ajn=new A.u(1,0.9490196078431372,0.8235294117647058,0.47843137254901963,B.q)
D.bLZ=new C.uT("ornate","Ornate gold","Double gold border and flourishes",D.dah,D.ajn,D.ajn,"\u2726",B.K,!0,!0,!0,!1)
D.bkS=new A.u(1,0.9647058823529412,0.9137254901960784,0.7843137254901961,B.q)
D.brG=new A.u(1,0.9019607843137255,0.8274509803921568,0.6392156862745098,B.q)
D.d1z=w([D.bkS,D.brG],x.O)
D.bLY=new C.uT("parchment","Parchment","Old paper with dark ink",D.d1z,D.Gp,L.j6,"\u2767",B.K,!0,!1,!1,!0)
D.agy=new A.u(1,0.984313725490196,0.9686274509803922,0.9333333333333333,B.q)
D.bu7=new A.u(1,0.9450980392156862,0.9176470588235294,0.8588235294117647,B.q)
D.dud=w([D.agy,D.bu7],x.O)
D.boF=new A.u(1,0.6039215686274509,0.5607843137254902,0.47058823529411764,B.q)
D.btn=new A.u(1,0.16862745098039217,0.16862745098039217,0.16862745098039217,B.q)
D.bM0=new C.uT("minimal","Clean paper","Plain and elegant, like a printed book",D.dud,D.boF,D.btn,"",B.K,!0,!0,!1,!0)
D.bM2=new C.uT("midnight","Midnight","Deep blue with silver stars",K.aDc,B.cC,B.ch,"\u2727",B.K,!0,!0,!1,!1)
D.bLX=new C.uT("emerald","Emerald library","Green cloth, title on the left",W.aAc,E.ku,B.fZ,"\u25c6",B.bn,!0,!1,!1,!1)
D.buC=new A.u(1,0.24705882352941178,0.0392156862745098,0.0392156862745098,B.q)
D.dsc=w([B.er,D.buC],x.O)
D.bpZ=new A.u(1,0.9411764705882353,0.6588235294117647,0.7215686274509804,B.q)
D.bre=new A.u(1,0.9882352941176471,0.9058823529411765,0.9254901960784314,B.q)
D.bM1=new C.uT("rose","Rose vintage","Burgundy with rose-gold lettering",D.dsc,D.bpZ,D.bre,"\u2740",B.K,!0,!1,!0,!1)
D.dx3=w([B.cu,F.ny],x.O)
D.bM_=new C.uT("modern","Modern","Dark, bold, left-aligned",D.dx3,B.aG,B.c,"",B.bn,!1,!0,!1,!1)
D.a5t=w([D.bM3,D.bLZ,D.bLY,D.bM0,D.bM2,D.bLX,D.bM1,D.bM_],A.at("O<uT>"))
D.cQP=w(["Nairobi","Lagos","Accra","Kampala","Dar es Salaam","Kigali","Addis Ababa","Dakar"],x.s)
D.dwS=w(["I am because we are","Good morning","Big river","Come and eat"],x.s)
D.bMe=new C.lv('What does "Ubuntu" mean?',D.dwS,0,"Ubuntu means a person is a person through other people.","Listen, children. Ubuntu is an old word: I am because we are. Nobody grows alone.","culture",20)
D.d3p=w(["Bibi","Babu","Dada","Kaka"],x.s)
D.bMh=new C.lv("In Swahili, what do we call a grandmother?",D.d3p,0,"Bibi is grandmother. Babu is grandfather.","Your grandmother is Bibi, and your grandfather is Babu. Say it with respect.","culture",20)
D.d3g=w(["Babu","Mama","Baba","Dada"],x.s)
D.bMc=new C.lv("In Swahili, what do we call a grandfather?",D.d3g,0,"Babu is grandfather.","Babu is the grandfather, the one who keeps the old stories.","culture",20)
D.d4y=w(["Dada","Kaka","Bibi","Mtoto"],x.s)
D.bMg=new C.lv("What is a sister called in Swahili?",D.d4y,0,"Dada is sister. Kaka is brother.","A sister is Dada and a brother is Kaka. Brothers and sisters carry each other.","culture",20)
D.d9I=w(["Kaka","Dada","Babu","Mzee"],x.s)
D.bMd=new C.lv("What is a brother called in Swahili?",D.d9I,0,"Kaka is brother.","A brother is Kaka. Look after your Kaka and your Dada.","culture",20)
D.d3f=w(["Baba","Mama","Bibi","Kaka"],x.s)
D.bMo=new C.lv("Which word means father in Swahili?",D.d3f,0,"Baba is father and Mama is mother.","Baba is father and Mama is mother. They are the roots of the home.","culture",20)
D.dy2=w(["Unity is strength","Rain is coming","The market is open","The night is long"],x.s)
D.bMn=new C.lv('"Umoja ni nguvu" means...',D.dy2,0,"Together we are strong.","Umoja ni nguvu: unity is strength. One stick breaks, but a bundle of sticks does not.","culture",20)
D.duX=w(["Little by little fills the measure","Big rivers need bridges","Cows love green grass","Fire needs wood"],x.s)
D.bMp=new C.lv('"Haba na haba hujaza kibaba" teaches us...',D.duX,0,"Small steps add up to great things.","Haba na haba hujaza kibaba: little by little fills the measure. Patience builds a family.","culture",20)
D.d7j=w(["Everyone helps to raise the children","Villages must be big","Children build houses","Only parents teach"],x.s)
D.bMm=new C.lv('The African saying "It takes a village to raise a child" means...',D.d7j,0,"Aunts, uncles, elders and neighbours all help.","It takes a whole village to raise a child. Aunties, uncles, elders and neighbours all teach.","culture",20)
D.dym=w(["The elders","The market","The river","The drum"],x.s)
D.bMi=new C.lv("Who is the traditional keeper of the family stories?",D.dym,0,"Elders hold the memory of the family.","The elders are a library that walks. When an elder is gone, a library burns, so we listen while we can.","culture",20)
D.cV0=w(["To share stories and wisdom","To race each other","To hide from the sun","To count cows"],x.s)
D.bMf=new C.lv("Why do families sit round the fire at night?",D.cV0,0,"The fire is where the old teach the young.","At night we sit round the fire. The flames are warm, and the stories are warmer.","culture",20)
D.dx5=w(["Let us all pull together","A kind of fish","A long road","A rain dance"],x.s)
D.bMk=new C.lv('What does "Harambee" mean?',D.dx5,0,"Harambee: everyone pulls together.","Harambee! It means let us all pull together, like many hands on one rope.","culture",20)
D.dcw=w(["An elder","A baby","A market","A cow"],x.s)
D.bMj=new C.lv('"Mzee" is a respectful word for...',D.dcw,0,"We honour our Mzee.","Mzee is how we greet an elder with honour. We bow our heads and listen.","culture",20)
D.ds2=w(["Respect for an elder","Hunger","Sleepiness","A race"],x.s)
D.bMl=new C.lv('What does "Shikamoo" show?',D.ds2,0,"Children greet elders with Shikamoo, and the elder answers Marahaba.","Shikamoo is how a child greets an elder, and the elder says Marahaba. Respect travels both ways.","culture",20)
D.aA7=w([D.bMe,D.bMh,D.bMc,D.bMg,D.bMd,D.bMo,D.bMn,D.bMp,D.bMm,D.bMi,D.bMf,D.bMk,D.bMj,D.bMl],x.J)
D.cZq=w([90,360],x.n)
D.d16=w([B.bQ,B.bo],x.O)
D.bqD=new A.u(1,0.9372549019607843,0.9647058823529412,0.9372549019607843,B.q)
D.d1L=w([D.agy,D.bqD],x.O)
D.d2s=w([-1,-0.3,0.4,1],x.n)
D.d3l=w([0,0.45,0.72,0.92,1],x.n)
D.bkO=new A.u(1,0.054901960784313725,0.10196078431372549,0.09019607843137255,B.q)
D.d3E=w([D.bkO,B.bB],x.O)
D.biw=new A.u(1,0.4196078431372549,0.1803921568627451,0.37254901960784315,B.q)
D.al5=new A.u(1,0.8784313725490196,0.5411764705882353,0.27058823529411763,B.q)
D.d4d=w([B.dB,D.biw,D.al5],x.O)
D.d5e=w([B.b9,B.jl,B.pk],x.O)
D.blm=new A.u(1,0.23137254901960785,0.16862745098039217,0.20392156862745098,B.q)
D.bte=new A.u(1,0.22745098039215686,0.1568627450980392,0.1411764705882353,B.q)
D.bic=new A.u(1,0.1411764705882353,0.09019607843137255,0.0784313725490196,B.q)
D.d5j=w([D.blm,D.bte,D.bic],x.O)
D.d5E=w(["Rewrite the whole book in natural, professional Swahili","Correct the spelling in the whole book",'Change the word "tree" to the right Swahili word',"Use simple words everyone understands","Make every page a little shorter"],x.s)
D.d5O=w(["Really, Babu?","Eh! I did not know that.","Tell us more!","Wow...","Mmm, I see.","Ooh, that is a good one."],x.s)
D.hAa=new C.ae7(78,424,48,44,56)
D.hA8=new C.ae7(214,396,34,34,42)
D.hA9=new C.ae7(442,452,56,50,64)
D.aB5=w([D.hAa,D.hA8,D.hA9],A.at("O<ae7>"))
D.d6n=w(["Farmer","Teacher","Nurse","Driver","Builder","Trader","Doctor","Tailor"],x.s)
D.bhs=new A.u(1,0.4196078431372549,0.19607843137254902,0.08627450980392157,B.q)
D.bn4=new A.u(1,0.2901960784313726,0.13333333333333333,0.06274509803921569,B.q)
D.dA3=w([D.ait,D.bhs,D.bn4],x.O)
D.bM4=new C.uU("leather","Leather",D.dA3,"vintage")
D.ddw=w([B.dh,B.Gf,Aa.Zh],x.O)
D.bMb=new C.uU("midnight","Midnight",D.ddw,"starry")
D.d5f=w([B.eq,B.eb,B.lj],x.O)
D.bMa=new C.uU("forest","Forest",D.d5f,"story")
D.dC8=w([B.es,B.er,B.kw],x.O)
D.bM7=new C.uU("burgundy","Burgundy",D.dC8,"royal")
D.cNn=w([B.aC,B.mS,B.no],x.O)
D.bM8=new C.uU("royal","Royal",D.cNn,"royal")
D.d7Q=w([B.bw,B.cu,F.ny],x.O)
D.bM5=new C.uU("charcoal","Charcoal",D.d7Q,"geo")
D.dAc=w([B.c8,B.dQ,B.yq],x.O)
D.bM9=new C.uU("sunset","Sunset",D.dAc,"sunset")
D.dAW=w([B.jl,B.Cc,B.Zl],x.O)
D.bM6=new C.uU("ocean","Ocean",D.dAW,"band")
D.A1=w([D.bM4,D.bMb,D.bMa,D.bM7,D.bM8,D.bM5,D.bM9,D.bM6],A.at("O<uU>"))
D.d8l=w(["classic","ornate","parchment","minimal","midnight","emerald","rose","modern"],x.s)
D.d90=w([B.an,B.aM,B.a_],x.O)
D.dam=w([B.er,B.eb,B.dh,B.iL,B.yu,B.cU,B.k0,B.cP,B.d5],x.O)
D.dan=w(["Make the cover dark blue with silver letters","Put the title at the top and make it bigger","Use a star sky and a heart picture","Add our family name under the title"],x.s)
D.fgA=new A.cU(B.dC,B.dL,8)
D.dax=w([D.fgA],x.F)
D.dbF=w([B.c3,B.dQ,B.jW],x.O)
D.bjn=new A.u(1,0.0196078431372549,0.03137254901960784,0.12156862745098039,B.q)
D.bnn=new A.u(1,0.22745098039215686,0.16470588235294117,0.3843137254901961,B.q)
D.brB=new A.u(1,0.5411764705882353,0.2901960784313726,0.3686274509803922,B.q)
D.dbV=w([D.bjn,G.ajT,D.bnn,D.brB,D.al5],x.O)
D.dcb=w(["each","pcs","boxes","bags","hours","days","sq ft","gallons","lbs","ft","other"],x.s)
D.dcm=w(["Yes! \ud83c\udf89","Hongera!","We did it!","Eeh, well done!"],x.s)
D.bgP=new A.u(1,0.8509803921568627,0.6431372549019608,0.2549019607843137,B.q)
D.bmK=new A.u(1,0.5411764705882353,0.35294117647058826,0.11764705882352941,B.q)
D.dcO=w([D.bgP,D.ahW,D.bmK],x.O)
D.ddr=w([B.c3,B.hG],x.O)
D.ddx=w([G.nq,B.ic,G.agK,B.cT],x.O)
D.df8=w([B.cT,G.nq,B.ic,D.lG,B.cT],x.O)
D.dfL=w([B.aQ,B.yr,B.yh],x.O)
D.aC7=w(["True","False"],x.s)
D.eNZ=new A.y(-0.65,0.6)
D.f_w=new A.y(-0.2,0.95)
D.f0B=new A.y(0.25,0.95)
D.eRr=new A.y(0.7,0.6)
D.f1a=new A.y(1,0.1)
D.dgw=w([As.V_,D.eNZ,D.f_w,D.f0B,D.eRr,D.f1a],x.G)
D.bpu=new A.u(1,0.5411764705882353,0.35294117647058826,0.2823529411764706,B.q)
D.bvO=new A.u(1,0.4196078431372549,0.25098039215686274,0.20392156862745098,B.q)
D.bkn=new A.u(1,0.24705882352941178,0.1450980392156863,0.18823529411764706,B.q)
D.dgC=w([D.bpu,D.bvO,D.bkn],x.O)
D.dgH=w([B.bL,B.bY,B.dy,B.aQ],x.O)
D.dhc=w([B.hI,B.c8,B.up],x.O)
D.dhB=w(["kahoot","fire","catch","plant","who","journey","lineup","school"],x.s)
D.dhM=w([B.fd,B.cU],x.O)
D.bqZ=new A.u(1,0.1411764705882353,0.2980392156862745,0.21176470588235294,B.q)
D.dic=w([D.bqZ,D.agw],x.O)
D.dio=w([B.cN,B.fJ,B.h_],x.O)
D.diA=w([B.aG,B.bo,B.dh],x.O)
D.djc=w([B.ex,B.dn,B.eb],x.O)
D.djw=w([B.dW,B.dh,B.Gf],x.O)
D.djA=w([B.bt,B.mP,B.d5],x.O)
D.djR=w(["\ud83e\udd47","\ud83e\udd48","\ud83e\udd49"],x.s)
D.bqb=new A.u(1,0.6352941176470588,0.4745098039215686,0.24313725490196078,B.q)
D.boo=new A.u(1,0.27450980392156865,0.20392156862745098,0.12156862745098039,B.q)
D.dkb=w([D.bqb,D.ahS,D.boo],x.O)
D.dkZ=w(["7","3","+","42","\u03c0","\u2211"],x.s)
D.dm1=w([1,0,7,6,3,2],x.t)
D.a6s=w(["leather","linen","plain","stars","rays"],x.s)
D.dmd=w([0.5,2,3.6],x.n)
D.dmN=w(["Pole, child. Listen again:","Do not worry. Even elders learn twice:","Eh, so close! Remember:"],x.s)
D.bU5=new A.a_(983781,"MaterialIcons",!1)
D.aCB=w([B.Pw,B.hA,B.kA,B.i1,F.arV,B.HT,B.qO,D.bU5,K.ary,B.Dl,B.qR,B.ml],A.at("O<a_>"))
D.a6w=w(["double","single","corners","none"],x.s)
D.bLU=new C.zC("Little Seed","\ud83c\udf31",0)
D.bLW=new C.zC("Young Listener","\ud83d\udc42",40)
D.bLV=new C.zC("Storyteller","\ud83e\ude98",120)
D.bLT=new C.zC("Village Pride","\ud83c\udfe1",300)
D.bLR=new C.zC("Keeper of Roots","\ud83c\udf33",700)
D.bLS=new C.zC("Elder of the Fire","\ud83d\udd25",1500)
D.aCD=w([D.bLU,D.bLW,D.bLV,D.bLT,D.bLR,D.bLS],A.at("O<zC>"))
D.dnX=w([B.cZ,B.bh,B.cP],x.O)
D.doc=w([],x.C)
D.DV=w([],x.u)
D.aMM=new A.r(225,528)
D.ePE=new A.y(D.aMM,1)
D.erI=new A.r(350,548)
D.eVQ=new A.y(D.erI,0.95)
D.aMG=new A.r(158,656)
D.eVJ=new A.y(D.aMG,1.12)
D.esu=new A.r(92,544)
D.eLi=new A.y(D.esu,0.93)
D.erL=new A.r(398,614)
D.eRO=new A.y(D.erL,1.04)
D.erz=new A.r(318,662)
D.eGN=new A.y(D.erz,1.1)
D.a6E=w([D.ePE,D.eVQ,D.eVJ,D.eLi,D.eRO,D.eGN],A.at("O<+(r,G)>"))
D.dqd=w(["Vizuri sana! That is very good.","Hongera! Congratulations, my child.","Safi! You listened well.","Asante, child. The fire is proud of you."],x.s)
D.dqH=w(["\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udfff\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udffd\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udffe","\ud83d\udc69\ud83c\udfff","\ud83d\udc69\ud83c\udffd","\ud83d\udc69\ud83c\udffb\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb3","\ud83d\udc69\ud83c\udfff\u200d\ud83e\uddb3","\ud83e\uddd5","\ud83d\udc69\ud83c\udffe\u200d\ud83d\udcbc","\ud83d\udc69\ud83c\udffd\u200d\ud83d\udcbc","\ud83d\udc69\ud83c\udfff\u200d\ud83d\udcbc","\ud83d\udc69\ud83c\udffe\u200d\ud83c\udf93","\ud83d\udc69\ud83c\udffd\u200d\ud83c\udf93"],x.s)
D.drL=w([B.cT,G.nq,B.ic,D.lG,B.cT,B.ic],x.O)
D.dta=w([B.at,B.fJ,B.iL],x.O)
D.dtP=w([-70,58],x.n)
D.dtR=w([-70,-30,20],x.n)
D.duU=w([B.bt,B.mP,B.a_r],x.O)
D.dvb=w(["\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udfff\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udffd\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udffe","\ud83d\udc68\ud83c\udfff","\ud83d\udc68\ud83c\udffd","\ud83e\uddd4\u200d\u2642\ufe0f","\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb2","\ud83d\udc68\ud83c\udfff\u200d\ud83e\uddb2","\ud83d\udc68\ud83c\udffb\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udffe\u200d\ud83d\udcbc","\ud83d\udc68\ud83c\udffd\u200d\ud83d\udcbc","\ud83d\udc68\ud83c\udfff\u200d\ud83d\udcbc","\ud83d\udc68\ud83c\udffe\u200d\ud83c\udf93","\ud83d\udc68\ud83c\udffd\u200d\ud83c\udf93"],x.s)
D.dQV=new C.lY("construction","Construction","Jobsite & builds",B.qQ)
D.dR1=new C.lY("house","Home Build","Houses & rooms",B.v_)
D.dQS=new C.lY("grocery","Grocery","Store & pantry",B.a3Y)
D.dQR=new C.lY("calculator","Calculations","Math & estimates",B.PB)
D.dR_=new C.lY("lumber","Materials","Lumber & supplies",B.HQ)
D.dQO=new C.lY("kitchen","Kitchen","Remodel & meals",A3.PV)
D.bU3=new A.a_(983756,"MaterialIcons",!1)
D.dQT=new C.lY("landscape","Landscaping","Yard & garden",D.bU3)
D.dQN=new C.lY("plumbing","Plumbing","Pipes & water",B.pH)
D.dR2=new C.lY("electrical","Electrical","Wiring & power",B.hn)
D.dQL=new C.lY("store","Retail Shop","Daily business",B.ke)
D.dQM=new C.lY("paint_remodel","Paint & Remodel","Colors & walls",A3.PR)
D.bTq=new A.a_(983311,"MaterialIcons",!1)
D.dQZ=new C.lY("roofing","Roofing","Roofs & exteriors",D.bTq)
D.bUe=new A.a_(983986,"MaterialIcons",!1)
D.dQK=new C.lY("warehouse","Warehouse","Storage & stock",D.bUe)
D.dQX=new C.lY("vehicles","Vehicles","Fleet & transport",B.Dh)
D.bR7=new A.a_(62785,"MaterialIcons",!1)
D.dQQ=new C.lY("farm","Farm","Crops & livestock",D.bR7)
D.dQP=new C.lY("restaurant","Restaurant","Food & catering",B.v8)
D.dQW=new C.lY("tools","Tools","Workshop gear",B.Dd)
D.dR0=new C.lY("wallet","Cash & Wallet","Quick spending",B.js)
D.dQY=new C.lY("concrete","Concrete","Foundation work",F.aqF)
D.dQU=new C.lY("blueprint","Blueprint","Plans & design",Ao.aqb)
D.a72=w([D.dQV,D.dR1,D.dQS,D.dQR,D.dR_,D.dQO,D.dQT,D.dQN,D.dR2,D.dQL,D.dQM,D.dQZ,D.dQK,D.dQX,D.dQQ,D.dQP,D.dQW,D.dR0,D.dQY,D.dQU],A.at("O<lY>"))
D.dvJ=w([B.bu,B.bh],x.O)
D.dwx=w([B.iI,B.ok,B.dV],x.O)
D.aiH=new A.u(1,0.8862745098039215,0.10588235294117647,0.23529411764705882,B.q)
D.ajF=new A.u(1,0.07450980392156863,0.40784313725490196,0.807843137254902,B.q)
D.boJ=new A.u(1,0.8470588235294118,0.6196078431372549,0,B.q)
D.bgl=new A.u(1,0.14901960784313725,0.5372549019607843,0.047058823529411764,B.q)
D.aDL=w([D.aiH,D.ajF,D.boJ,D.bgl],x.O)
D.dxJ=w(["Oooh!","Pole!","Eh, so close!"],x.s)
D.a7c=w(["top","middle","bottom"],x.s)
D.dze=w([B.ct,B.bo,B.dh],x.O)
D.aE4=w(["\u25b2","\u25c6","\u25cf","\u25a0"],x.s)
D.b9Y=new A.ab(0,B.G,B.b5,B.J,14)
D.aE8=w([D.b9Y],x.V)
D.bnC=new A.u(1,0.22745098039215686,0.18823529411764706,0.25098039215686274,B.q)
D.dzX=w([D.aha,D.a_q,D.bnC],x.O)
D.dzY=w([B.bc,B.dn,B.eb],x.O)
D.eri=new A.r(24,-8)
D.es0=new A.r(48,0)
D.ere=new A.r(24,6)
D.dBF=w([B.J,D.eri,D.es0,D.ere],x.g)
D.dC4=w(["Rewrite this page in natural, professional Swahili","Correct the spelling","Rewrite this page in simpler words","Add a paragraph about the family farm","Make this page shorter"],x.s)
D.enO={top:0,middle:1,bottom:2}
D.dFi=new A.bs(D.enO,["Top","Middle","Bottom"],x.r)
D.eno={double:0,single:1,corners:2,none:3}
D.dFo=new A.bs(D.eno,["Double line","One line","Corners","None"],x.r)
D.eoC={leather:0,linen:1,plain:2,stars:3,rays:4}
D.dGR=new A.bs(D.eoC,["Leather","Linen","Smooth","Stars","Light rays"],x.r)
D.dH2=new A.bs(B.i3,[],A.at("bs<H,+(n,n)>"))
D.enG={gold:0,silver:1,rose:2,white:3,copper:4,black:5}
D.E8=new A.bs(D.enG,[4293444714,4293257195,4293961912,4294967295,4292905548,4279310375],A.at("bs<n,H>"))
D.dLj=new H.NV(32,null)
D.dLk=new H.NV(40,null)
D.dLl=new H.NV(46,null)
D.aMd=new C.aue(null)
D.eq9=new A.r(0,40)
D.eqa=new A.r(0,412)
D.eqc=new A.r(0,900)
D.eqm=new A.r(0,-34)
D.eqn=new A.r(0,-46)
D.eqp=new A.r(0,-74)
D.eqs=new A.r(100,300)
D.eqt=new A.r(10,14)
D.eqw=new A.r(10,-10)
D.eqB=new A.r(10,-46)
D.eqC=new A.r(10,-58)
D.eqD=new A.r(116,442)
D.eqF=new A.r(11,-1)
D.eqG=new A.r(11,-10)
D.eqH=new A.r(11,-21)
D.aMB=new A.r(11,-60)
D.eqO=new A.r(14,-2)
D.eqP=new A.r(150,520)
D.a9d=new A.r(150,592)
D.eqS=new A.r(15,-15)
D.eqT=new A.r(16,-1)
D.eqX=new A.r(190,444)
D.er_=new A.r(1,5)
D.er7=new A.r(21,-78)
D.er8=new A.r(222,615)
D.JQ=new A.r(225,300)
D.a9f=new A.r(225,574)
D.erh=new A.r(24,-52)
D.erj=new A.r(250,210)
D.eru=new A.r(2,-56)
D.aMQ=new A.r(300,0)
D.erv=new A.r(300,440)
D.ery=new A.r(318,476)
D.erB=new A.r(324,144)
D.a9i=new A.r(332,150)
D.erD=new A.r(335,585)
D.erE=new A.r(338,140)
D.erF=new A.r(340,158)
D.erH=new A.r(34,-60)
D.Ez=new A.r(36,-24)
D.erJ=new A.r(372,470)
D.erK=new A.r(390,455)
D.erT=new A.r(42,468)
D.erU=new A.r(431,510)
D.erV=new A.r(431,520)
D.erW=new A.r(45,-92)
D.erX=new A.r(46,20)
D.erY=new A.r(46,-92)
D.erZ=new A.r(46,-94)
D.es_=new A.r(47,-4)
D.es1=new A.r(48,-4)
D.es9=new A.r(4,-26)
D.esh=new A.r(60,455)
D.esp=new A.r(8,14)
D.est=new A.r(8,-76)
D.esv=new A.r(95,575)
D.esw=new A.r(98,-24)
D.esy=new A.r(9,-2)
D.esz=new A.r(9,-58)
D.aMZ=new A.r(9,-79)
D.esA=new A.r(9,-9)
D.etd=new A.r(16.5,8)
D.etf=new A.r(3.2,0)
D.eth=new A.r(-16.5,8)
D.eto=new A.r(16.5,2)
D.etr=new A.r(-3.2,0)
D.etz=new A.r(9.5,6)
D.etD=new A.r(-10,14)
D.etE=new A.r(-10,-12)
D.etF=new A.r(-10,-58)
D.etH=new A.r(-11,-1)
D.etI=new A.r(-11,-10)
D.etK=new A.r(-11,-60)
D.etL=new A.r(-12,-14)
D.etM=new A.r(-12,-16)
D.etT=new A.r(-14,-2)
D.etW=new A.r(-15,-15)
D.etX=new A.r(-15,-3)
D.etZ=new A.r(-16,-1)
D.euf=new A.r(-24,-52)
D.eum=new A.r(-2,-34)
D.eun=new A.r(-2,-38)
D.eup=new A.r(-30,-100)
D.a9k=new A.r(-36,-24)
D.euA=new A.r(-4,-26)
D.euC=new A.r(-4,-6)
D.euM=new A.r(-8,-3)
D.euN=new A.r(-8,-48)
D.euQ=new A.r(-9,-2)
D.euS=new A.r(-9,-58)
D.euT=new A.r(-9,-79)
D.euU=new A.r(-9,-9)
D.euW=new A.r(-9.5,6)
D.ev8=new A.r(-16.5,2)
D.fR8=new A.B("Write a new book",null,B.ht,null,B.K,null,null,null,null,null,null,null)
D.evI=new A.D(B.kW,D.fR8,null)
D.h4T=new A.B("Tap to go on",null,B.vL,null,null,null,null,null,null,null,null,null)
D.ew2=new A.D(B.ll,D.h4T,null)
D.as4=new A.ae(B.i0,18,B.c,null,null,null)
D.fK8=new A.B("Add",null,B.kH,null,null,null,null,null,null,null,null,null)
D.dgV=w([D.as4,B.rc,D.fK8],x.p)
D.fdF=new A.c7(B.aL,B.e,B.N,B.l,null,B.p,null,0,D.dgV,null)
D.ew5=new A.D(B.nI,D.fdF,null)
D.ew6=new A.D(E.amd,A7.YB,null)
D.fDD=new A.F(!0,B.c,null,null,null,null,13.5,B.H,null,0.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fNl=new A.B("New Project",null,D.fDD,null,null,null,null,null,null,null,null,null)
D.dlm=w([D.as4,B.ae,D.fNl],x.p)
D.fdI=new A.c7(B.aL,B.e,B.N,B.l,null,B.p,null,0,D.dlm,null)
D.ewk=new A.D(B.hO,D.fdI,null)
D.fPS=new A.B("Choose your header",null,A0.vK,null,null,null,null,null,null,null,null,null)
D.ewF=new A.D(B.i_,D.fPS,null)
D.bfz=new A.fl(2.2,null,null,null,null,B.cU,null,null,null,null)
D.fjr=new A.a3(22,22,D.bfz,null)
D.bdG=new A.cj(B.A,null,null,D.fjr,null)
D.ewK=new A.D(B.a0N,D.bdG,null)
D.bEz=new A.Q(14,2,14,6)
D.h3_=new A.B("The top of your book. Tap a design to see it.",null,U.tY,null,null,null,null,null,null,null,null,null)
D.ewL=new A.D(D.bEz,D.h3_,null)
D.fP1=new A.B("\ud83c\udfc6 A new record!",null,B.h5,null,null,null,null,null,null,null,null,null)
D.ewN=new A.D(B.ll,D.fP1,null)
D.eym=new A.j3(1,0.9098039215686274,0.9607843137254902,0.9137254901960784)
D.eyp=new A.j3(1,0.8784313725490196,0.8784313725490196,0.8784313725490196)
D.aNz=new A.j3(1,0.9607843137254902,0.48627450980392156,0)
D.JY=new A.j3(1,0.8274509803921568,0.1843137254901961,0.1843137254901961)
D.AC=new A.j3(1,0.1803921568627451,0.49019607843137253,0.19607843137254902)
D.eyv=new A.j3(1,0.12941176470588237,0.12941176470588237,0.12941176470588237)
D.hCc=new C.bjL(null)
D.bzm=new A.mJ(D.hCc,null,B.az,null,null)
D.aRc=new A.cK(0,0,0,0,null,null,D.bzm,null)
D.fKa=new A.B("\ud83c\udfc5",null,B.abC,null,null,null,null,null,null,null,null,null)
D.eCV=new A.cK(null,0,-34,null,null,null,D.fKa,null)
D.eKY=new A.y("E","Sit by the fire again")
D.eQs=new A.y("C","Good Learner")
D.eTP=new A.y("D","Still Growing")
D.eYk=new A.y(-42,42)
D.eZF=new A.y("B","Faithful Listener")
D.f0D=new A.y("A","Keeper of the Family")
D.f3K=new A.b5(-17,0.7,0)
D.f4i=new A.b5(-8,0.95,1.3)
D.f5l=new A.b5(18,0.65,5.2)
D.f5n=new A.b5(0,1.15,2.6)
D.f5I=new A.b5(9,0.9,3.9)
D.f7C=new A.ce([0,0,1,1])
D.aSH=new A.a6(0,0,520,160)
D.faI=new A.a6(10,612,440,618)
D.faJ=new A.a6(10,612,440,628)
D.faM=new A.a6(14,-64,34,-12)
D.faP=new A.a6(300,336,350,348)
D.aae=new A.a6(30,96,420,346)
D.faQ=new A.a6(30,-9,46,1)
D.faR=new A.a6(4,2,11,14)
D.faT=new A.a6(-8,-12.5,8,-7)
D.faU=new A.a6(-16.5,-21,16.5,1)
D.faV=new A.a6(60,342,88,348)
D.V0=new A.a6(66,-66,94,-36)
D.faW=new A.a6(6,8,10,14)
D.faZ=new A.a6(95,343,115,348)
D.fb_=new A.a6(-6.5,-74,6.5,-58)
D.fb5=new A.a6(-100,-74,100,-12)
D.fb6=new A.a6(-10,8,-6,14)
D.fb7=new A.a6(-11,2,-4,14)
D.fb8=new A.a6(-11,-70,11,-56)
D.fbf=new A.a6(-13,-24,13,-4)
D.fbl=new A.a6(-15,-21,15,0)
D.fbo=new A.a6(-16,-21,16,1)
D.fbp=new A.a6(-16,-21,16,2)
D.fbs=new A.a6(-16,-26,16,-6)
D.fbC=new A.a6(-230,-26,230,26)
D.fc_=new A.a6(-38,-26,12,-6)
D.fc3=new A.a6(-3,-70,3,-63)
D.fc4=new A.a6(-44,-22,44,0)
D.fc6=new A.a6(-46,-9,-30,1)
D.aSL=new A.a6(-80,-190,80,20)
D.fcd=new A.a6(-8,-26,40,-6)
D.fce=new A.a6(-98,-80,92,-75)
D.fcf=new A.a6(-9,-15,9,-9)
D.h2x=new A.B("Let the AI write it from your tree",null,B.iG,null,B.K,null,null,null,null,null,null,null)
D.bMZ=new A.di(1,B.cm,D.h2x,null)
D.ddq=w([E.a4r,B.ae,D.bMZ],x.p)
D.fdj=new A.c7(B.aL,B.e,B.N,B.l,null,B.p,null,0,D.ddq,null)
D.fJP=new A.B("Save member",null,B.cd,null,null,null,null,null,null,null,null,null)
D.dtz=w([D.asX,B.ae,D.fJP],x.p)
D.fdt=new A.c7(B.aL,B.b8,B.h,B.l,null,B.p,null,0,D.dtz,null)
D.bYE=new A.ae(B.ih,14,B.b2,null,null,null)
D.fx9=new A.F(!0,B.b2,null,null,null,null,12,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fNM=new A.B("Cashier",null,D.fx9,null,null,null,null,null,null,null,null,null)
D.dlT=w([D.bYE,B.bm,D.fNM],x.p)
D.fdx=new A.c7(B.aL,B.e,B.N,B.l,null,B.p,null,0,D.dlT,null)
D.fJQ=new A.B("Transfer & settings",null,B.dk,null,null,null,null,null,null,null,null,null)
D.bKE=new A.by(1,B.ba,D.fJQ,null)
D.d4H=w([D.asw,B.as,D.bKE],x.p)
D.fdy=new A.c7(B.aL,B.e,B.h,B.l,null,B.p,null,0,D.d4H,null)
D.fi7=new A.av(16,40)
D.fic=new A.av(22,64)
D.fij=new A.av(280,88)
D.fj7=new A.a3(30,null,null,null)
D.fIV=new A.B("The teacher is writing\u2026",null,B.AZ,null,null,null,null,null,null,null,null,null)
D.beN=new A.cj(B.A,null,null,D.fIV,null)
D.hwc=new A.bh("w",x.W)
D.fjw=new A.a3(null,56,D.beN,D.hwc)
D.fkk=new A.hJ(5,8,8,1,null)
D.fks=new A.hJ(2,12,12,1.05,null)
D.fNr=new A.B("Please enter a family tree name.",null,null,null,null,null,null,null,null,null,null,null)
D.flb=new A.b0(D.fNr,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.fNH=new A.B("Your shelf is full: six books is the most. Remove one to write another.",null,null,null,null,null,null,null,null,null,null,null)
D.aV2=new A.b0(D.fNH,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.fW9=new A.B("Could not save project on this device. Please try again.",null,null,null,null,null,null,null,null,null,null,null)
D.flF=new A.b0(D.fW9,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.h5V=new A.B("All projects cleared",null,null,null,null,null,null,null,null,null,null,null)
D.flK=new A.b0(D.h5V,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.fPQ=new A.B("Syncing family trees with the database\u2026",null,null,null,null,null,null,null,null,null,null,null)
D.flR=new A.b0(D.fPQ,null,null,null,null,null,null,null,null,null,null,null,null,B.h9,!1,null,null,null,B.t,null)
D.h3c=new A.B("Your new book is on the shelf.",null,null,null,null,null,null,null,null,null,null,null)
D.aV7=new A.b0(D.h3c,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.fPO=new A.B("Give the game a name and write at least 2 complete questions (a question, two or more answers, and the right one chosen).",null,null,null,null,null,null,null,null,null,null,null)
D.fmg=new A.b0(D.fPO,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.fKr=new A.B("Choose male or female.",null,null,null,null,null,null,null,null,null,null,null)
D.fmi=new A.b0(D.fKr,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.fTA=new A.B("You can make two games at most. Delete one to make another.",null,null,null,null,null,null,null,null,null,null,null)
D.fmo=new A.b0(D.fTA,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.h6F=new A.B("Saved to QR Code Generator \u2192 Saved (NGMY Family Tree).",null,null,null,null,null,null,null,null,null,null,null)
D.fn4=new A.b0(D.h6F,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.h1r=new A.B("Project saved, but the photo could not be stored. Try choosing the photo again.",null,null,null,null,null,null,null,null,null,null,null)
D.fnu=new A.b0(D.h1r,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.h5Z=new A.B("Choose whether this person is male or female.",null,null,null,null,null,null,null,null,null,null,null)
D.fnx=new A.b0(D.h5Z,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.fXO=new A.B("Could not save imported project to this device. Please try again.",null,null,null,null,null,null,null,null,null,null,null)
D.fnz=new A.b0(D.fXO,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.fRL=new A.B("Please enter a project name.",null,null,null,null,null,null,null,null,null,null,null)
D.fnA=new A.b0(D.fRL,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.fRM=new A.B("Could not read that project QR.",null,null,null,null,null,null,null,null,null,null,null)
D.foC=new A.b0(D.fRM,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.fNt=new A.B("Enter a name and an amount greater than 0.",null,null,null,null,null,null,null,null,null,null,null)
D.foU=new A.b0(D.fNt,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.fPt=new A.B("Could not open that file.",null,null,null,null,null,null,null,null,null,null,null)
D.fpd=new A.b0(D.fPt,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.fXg=new A.B("Enter a name.",null,null,null,null,null,null,null,null,null,null,null)
D.fpu=new A.b0(D.fXg,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.fSA=new A.B("Enter an amount greater than zero.",null,null,null,null,null,null,null,null,null,null,null)
D.fpv=new A.b0(D.fSA,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.fCi=new A.F(!0,B.bD,null,null,null,null,20,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fr3=new A.eq("\u2665",null,null,B.cL,null,null,null,null,null,null,D.fCi)
D.fzs=new A.F(!0,B.aS,null,null,null,null,28,B.O,B.cI,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.frj=new A.eq("Today: how well do you know the family?",null,null,B.cL,null,null,null,null,null,null,D.fzs)
D.frA=new A.F(!0,B.qe,null,null,null,null,11.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fsM=new A.F(!0,D.kP,null,null,null,null,13,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ft8=new A.F(!0,D.kP,null,null,null,null,12,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ftc=new A.F(!0,B.cT,null,null,null,null,17,B.u,null,0.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ftl=new A.F(!0,D.fA,null,null,null,null,15,B.O,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ftw=new A.F(!0,D.fA,null,null,null,null,13,B.H,null,null,null,null,1.15,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ftQ=new A.t8(!0,B.tK,null,null,null,null,B.dE,9.5,null,null,null,null,null,null,null,null,null,null,null,null)
D.fu5=new A.F(!0,B.cT,null,null,null,null,10.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fu8=new A.F(!0,D.kP,null,null,null,null,18,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fu9=new A.F(!0,B.cT,null,null,null,null,12,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fue=new A.F(!0,B.c,null,null,null,null,15.5,B.u,null,null,null,null,1.15,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fuh=new A.F(!0,B.cT,null,null,null,null,15,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fuN=new A.F(!0,B.b2,null,null,null,null,26,B.u,null,-0.4,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fuO=new A.F(!0,B.ab,null,null,null,null,11.5,null,null,null,null,null,1.25,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fuQ=new A.F(!0,B.aS,null,null,null,null,15.5,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fvg=new A.F(!0,B.c,null,null,null,null,24,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aWl=new A.F(!0,B.aR,null,null,null,null,null,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aWm=new A.F(!0,D.lF,null,null,null,null,12.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fvG=new A.F(!0,B.cT,null,null,null,null,20,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.abH=new A.t8(!0,B.Uw,null,null,null,null,B.dE,9.5,null,null,null,null,null,null,null,null,null,null,null,null)
D.VV=new A.F(!0,B.cT,null,null,null,null,null,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fvQ=new A.F(!0,B.a_,null,null,null,null,12.5,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fvV=new A.F(!0,D.fA,null,null,null,null,11,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fwj=new A.F(!0,B.c,null,null,null,null,20,B.u,null,0.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fxu=new A.F(!0,D.fA,null,null,null,null,13,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aWw=new A.F(!0,D.fA,null,null,null,null,14.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fxO=new A.F(!0,B.ab,null,null,null,null,12,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fxZ=new A.F(!0,D.fA,null,null,null,null,null,B.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fy0=new A.F(!0,null,null,null,null,null,8,B.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fy6=new A.F(!0,L.j6,null,null,null,null,16.5,null,null,null,null,null,1.65,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aWA=new A.F(!0,D.fA,null,null,null,null,14.5,B.O,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fz1=new A.F(!0,D.fA,null,null,null,null,13,B.u,null,null,null,null,1.05,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fzl=new A.F(!0,D.fA,null,null,null,null,22,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fzn=new A.F(!0,B.a_,null,null,null,null,13,B.a9,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fzp=new A.F(!0,B.cT,null,null,null,null,17,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fzN=new A.F(!0,B.c,null,null,null,null,20,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,A6.IO,null,null,null)
D.aWO=new A.F(!0,D.fA,null,null,null,null,17,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fAa=new A.F(!0,B.a_,null,null,null,null,17,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fAw=new A.F(!0,B.fh,null,null,null,null,13,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fAU=new A.F(!0,B.bQ,null,null,null,null,8,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fAZ=new A.F(!0,B.bG,null,null,null,null,11,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fBa=new A.F(!0,B.c,null,null,null,null,13.5,B.H,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fBd=new A.F(!0,D.fA,null,null,null,null,17,B.u,null,null,null,null,1.25,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fBl=new A.F(!0,D.Gp,null,null,null,null,40,B.u,null,null,null,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fBx=new A.F(!0,B.b2,null,null,null,null,13,B.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fBW=new A.F(!0,B.c,null,null,null,null,15.5,B.u,null,null,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fC2=new A.F(!0,B.ab,null,null,null,null,12.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,I.DN,null,null,null)
D.fCt=new A.F(!0,B.cT,null,null,null,null,130,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fCC=new A.F(!0,B.cU,null,null,null,null,13,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fCP=new A.F(!0,D.lG,null,null,null,null,13,B.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aX9=new A.F(!0,D.fA,null,null,null,null,null,B.H,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.L4=new A.F(!0,B.cT,null,null,null,null,null,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aXb=new A.F(!0,B.cT,null,null,null,null,null,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,I.DN,null,null,null)
D.fD9=new A.F(!0,B.bQ,null,null,null,null,11,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fDd=new A.F(!0,G.nq,null,null,null,null,84,B.u,null,null,null,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fDB=new A.F(!0,B.b2,null,null,null,null,13,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fDT=new A.F(!0,D.fA,null,null,null,null,15,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fEg=new A.F(!0,B.c,null,null,null,null,null,B.H,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fEF=new A.F(!0,D.fA,null,null,null,null,22,B.u,null,null,null,null,1.25,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fFb=new A.F(!0,D.fA,null,null,null,null,18,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fFg=new A.F(!0,B.an,null,null,null,null,11.5,B.a9,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fFq=new A.F(!0,B.c,null,null,null,null,28,B.u,null,null,null,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aca=new A.F(!0,B.an,null,null,null,null,12,B.a9,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.acc=new A.F(!0,D.lF,null,null,null,null,null,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fH9=new A.F(!0,B.c,null,null,null,null,8.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fHt=new A.F(!0,B.aS,null,null,null,null,27,B.O,B.cI,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fHA=new A.F(!0,L.j6,null,null,null,null,23,B.u,null,null,null,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fHI=new A.F(!0,L.j6,null,null,null,null,21,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fIb=new A.B("Time:",null,B.hr,null,null,null,null,null,null,null,null,null)
D.fIw=new A.B("\ud83c\udfae",null,K.ac1,null,null,null,null,null,null,null,null,null)
D.fIx=new A.B("Themes",null,B.pW,null,null,null,null,null,null,null,null,null)
D.fJ2=new A.B("\ud83c\udfb2",null,B.xE,null,null,null,null,null,null,null,null,null)
D.fJ6=new A.B("Delete this game?",null,B.iG,null,null,null,null,null,null,null,null,null)
D.fJd=new A.B("Add Item",null,B.cd,null,null,null,null,null,null,null,null,null)
D.fxI=new A.F(!0,B.a_,null,null,null,null,22,B.H,null,-0.3,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fJE=new A.B("Debt receipt",null,D.fxI,null,B.K,null,null,null,null,null,null,null)
D.aXq=new A.F(!0,B.an,null,null,null,null,11,B.a9,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fJX=new A.B("Person who owes",null,D.aXq,null,null,null,null,null,null,null,null,null)
D.fKV=new A.B("Notes",null,B.abQ,null,null,null,null,null,null,null,null,null)
D.fLl=new A.B("New Tree",null,null,null,null,null,null,null,null,null,null,null)
D.fwB=new A.F(!0,B.c,null,null,null,null,11,B.H,null,0.25,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fLn=new A.B("Share",null,D.fwB,null,null,null,null,null,null,null,null,null)
D.fMo=new A.B("Move your family trees",null,I.ac7,null,null,null,null,null,null,null,null,null)
D.fN2=new A.B("Save invites",null,null,null,null,null,null,null,null,null,null,null)
D.fNG=new A.B("The cover design",null,null,null,null,null,null,null,null,null,null,null)
D.fO3=new A.B("SAVE",null,D.L4,null,null,null,null,null,null,null,null,null)
D.fOG=new A.B("The round button is the right answer.",null,U.xA,null,null,null,null,null,null,null,null,null)
D.fP0=new A.B("Remove this book?",null,B.h5,null,null,null,null,null,null,null,null,null)
D.fDy=new A.F(!0,B.cT,null,null,null,null,17,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,I.DN,null,null,null)
D.fPy=new A.B("Fireside Stories",null,D.fDy,null,null,null,null,null,null,null,null,null)
D.aXV=new A.B("Download",null,B.cd,null,null,null,null,null,null,null,null,null)
D.fQe=new A.B("What should the AI do?",null,B.dk,null,null,null,null,null,null,null,null,null)
D.fwe=new A.F(!0,D.lF,null,null,null,null,13,B.u,null,4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fQt=new A.B("REPORT CARD",null,D.fwe,null,null,null,null,null,null,null,null,null)
D.fRf=new A.B("Calabash Catch",null,B.Wj,null,null,null,null,null,null,null,null,null)
D.fRH=new A.B("Take photo",null,null,null,null,null,null,null,null,null,null,null)
D.fS7=new A.B("\ud83c\udfe1",null,B.F3,null,null,null,null,null,null,null,null,null)
D.fSP=new A.B("Ribbon bookmark",null,B.jC,null,null,null,null,null,null,null,null,null)
D.fFa=new A.F(!0,B.b2,null,null,null,null,15,B.u,null,1.6,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fTj=new A.B("NGMY.ORG",null,D.fFa,null,B.K,null,null,null,null,null,null,null)
D.fUC=new A.B("Scan family tree QR",null,B.cF,null,null,null,null,null,null,null,null,null)
D.fBe=new A.F(!0,B.c,null,null,null,null,13,B.a9,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fVp=new A.B("Hold steady \u2014 worksheet QR scans instantly when in frame.",null,D.fBe,null,B.K,null,null,null,null,null,null,null)
D.fWD=new A.B("Delete",null,B.VP,null,null,null,null,null,null,null,null,null)
D.fWE=new A.B("Scan project QR",null,null,null,null,null,null,null,null,null,null,null)
D.fWM=new A.B("Thumbnail",null,B.pW,null,null,null,null,null,null,null,null,null)
D.fXl=new A.B("Save the cover",null,B.cF,null,null,null,null,null,null,null,null,null)
D.fXq=new A.B("A question appears, and gourds with the answers fall from the baobab. Slide the basket and catch the RIGHT one. Three lives.",null,B.B7,null,B.K,null,null,null,null,null,null,null)
D.fXP=new A.B("Your photos",null,B.pW,null,null,null,null,null,null,null,null,null)
D.fY4=new A.B("Create Project",null,B.cd,null,null,null,null,null,null,null,null,null)
D.fYr=new A.B("\u2b50 stars",null,B.W3,null,null,null,null,null,null,null,null,null)
D.fYF=new A.B("Design your cover",null,A0.vK,null,null,null,null,null,null,null,null,null)
D.fYL=new A.B("Gallery",null,null,null,null,null,null,null,null,null,null,null)
D.fYO=new A.B("PICTURE",null,M.vO,null,null,null,null,null,null,null,null,null)
D.fYQ=new A.B("\ud83c\udfaf",null,D.Wi,null,null,null,null,null,null,null,null,null)
D.fZc=new A.B("Paid",null,B.cd,null,null,null,null,null,null,null,null,null)
D.fZe=new A.B("You can undo it right after.",null,U.xA,null,null,null,null,null,null,null,null,null)
D.fZM=new A.B("Print",null,B.vM,null,null,null,null,null,null,null,null,null)
D.h_a=new A.B("Amount owed",null,D.aXq,null,null,null,null,null,null,null,null,null)
D.h_p=new A.B("Got it",null,B.cd,null,null,null,null,null,null,null,null,null)
D.h00=new A.B("The whole book",null,null,null,null,null,null,null,null,null,null,null)
D.h03=new A.B("Add to budget",null,B.cd,null,null,null,null,null,null,null,null,null)
D.h0u=new A.B("Debtor signature",null,B.abQ,null,null,null,null,null,null,null,null,null)
D.h0E=new A.B("Change icon",null,B.abP,null,null,null,null,null,null,null,null,null)
D.h1s=new A.B("MADE BY THE SYSTEM, FROM YOUR TREE",null,T.u_,null,null,null,null,null,null,null,null,null)
D.h1U=new A.B("Family tree QR",null,B.cF,null,null,null,null,null,null,null,null,null)
D.h2_=new A.B("Write a Kahoot-style game for your family. Everyone who opens this tree can play it. You can make 2 games at most.",null,B.Wh,null,null,null,null,null,null,null,null,null)
D.h2n=new A.B("Download",null,B.vM,null,null,null,null,null,null,null,null,null)
D.h2o=new A.B("The person who planted this tree has not made a game yet.",null,B.B5,null,null,null,null,null,null,null,null,null)
D.h2s=new A.B("Change",null,B.pW,null,null,null,null,null,null,null,null,null)
D.h3i=new A.B("Clear all",null,B.cd,null,null,null,null,null,null,null,null,null)
D.h3l=new A.B("WHAT SHOULD IT CHANGE?",null,M.vO,null,null,null,null,null,null,null,null,null)
D.h3T=new A.B("COLOUR",null,M.vO,null,null,null,null,null,null,null,null,null)
D.h47=new A.B("Do it",null,B.cF,null,null,null,null,null,null,null,null,null)
D.h4a=new A.B("Create Tree",null,B.cd,null,null,null,null,null,null,null,null,null)
D.h4k=new A.B("Give me another clue",null,D.L4,null,null,null,null,null,null,null,null,null)
D.h5e=new A.B("Create Family Tree",null,B.f9,null,null,null,null,null,null,null,null,null)
D.h5o=new A.B("THE TEACHER EXPLAINS THESE",null,T.u_,null,null,null,null,null,null,null,null,null)
D.frz=new A.F(!0,E.ku,null,null,null,null,null,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h5u=new A.B("Write the first page myself",null,D.frz,null,null,null,null,null,null,null,null,null)
D.h61=new A.B("Use this header",null,B.cF,null,null,null,null,null,null,null,null,null)
D.h68=new A.B("Create Project",null,E.aX6,null,null,null,null,null,null,null,null,null)
D.hxG=new C.acL(1,"header")
D.ade=new C.acL(2,"projects")
D.hxH=new C.acL(3,"cashier")
D.adf=new C.acL(4,"familyTree")
D.hKH=new C.cGM(0,"start")
D.hKI=new C.cGN(0,"start")
D.hxU=new C.ZN(null)
D.hyV=new C.a_f(null)
D.dH_=new A.bs(B.i3,[],A.at("bs<n,GB>"))
D.doB=w([],x.dE)
D.doC=w([],x.M)
D.hzt=new C.bgY(D.dH_,D.doB,D.doC,0,0,null,null)
D.b1q=new C.a05(0,"intro")
D.b1r=new C.a05(1,"countdown")
D.ads=new C.a05(2,"ask")
D.Xe=new C.a05(3,"reveal")
D.b1s=new C.a05(4,"end")
D.hCe=new C.tg(F.Gx,D.lG,B.cT,F.m7,5,!1,!1,!1,0,null)
D.hCf=new C.tg(F.Gx,B.es,B.cT,B.bO,2,!0,!0,!1,2,B.cT)
D.hCg=new C.tg(B.qr,B.cU,B.cT,F.m7,2,!0,!1,!1,2,B.at)
D.hCh=new C.tg(F.Gx,B.dW,B.cT,F.m7,5,!1,!1,!1,1,null)
D.hCi=new C.tg(F.a_I,D.ajF,B.cT,F.m7,4,!0,!1,!0,0,null)
D.b1v=new C.tg(F.a_I,B.dQ,B.cT,F.m7,3,!0,!1,!0,2,null)
D.b1w=new C.tg(F.rV,D.lG,B.c,F.m7,0,!1,!1,!0,0,null)
D.b1x=new C.tg(B.qr,B.aC,B.cT,B.bO,2,!0,!0,!1,2,B.dQ)
D.b1y=new C.tg(B.qr,G.nq,B.ic,F.m7,5,!1,!1,!0,3,null)
D.hCj=new C.tg(B.qr,B.dQ,B.cT,F.m7,0,!0,!1,!1,0,B.aC)
D.b1z=new C.tg(F.Gx,B.es,B.cT,B.bO,1,!1,!0,!1,1,null)
D.b1A=new C.tg(F.G6,B.at,B.aC,F.m7,4,!0,!1,!0,2,null)
D.hCk=new C.tg(F.rV,B.at,B.es,F.m7,3,!0,!1,!1,0,null)
D.hCl=new C.tg(B.qr,B.dW,B.cT,B.bO,1,!1,!0,!1,1,null)
D.hCm=new C.tg(F.G6,D.aiH,B.c,F.m7,5,!1,!1,!0,0,null)
D.hD_=new C.a0D(null)
D.hKQ=new C.ag9(0,"still")
D.XB=new C.ag9(1,"walk")
D.b20=new C.ag9(2,"pound")
D.b21=new C.ag9(3,"drum")
D.hGu=new C.a1U(0,"greet")
D.b22=new C.a1U(1,"teach")
D.adM=new C.a1U(2,"ask")
D.hGv=new C.a1U(3,"feedback")
D.b23=new C.a1U(4,"end")
D.XH=new C.a2c(0,"intro")
D.XI=new C.a2c(1,"asking")
D.Bn=new C.a2c(2,"reacting")
D.adY=new C.a2c(3,"driving")
D.adZ=new C.a2c(4,"arrived")
D.ae6=new C.aLM(0,"projects")
D.b2t=new C.aLM(1,"cashier")
D.hIA=new C.aLM(2,"familyTree")})()};
(a=>{a["varXM1XfXsVDVbSCCVatCg4OdgY="]=a.current})($__dart_deferred_initializers__);